/* storage.js — persistence + spaced repetition (localStorage, no backend).
   Data model:
     fb.progress.v1 : { completed: {day: dateISO}, streak, lastDay }
     fb.mastery.v1  : { itemKey: { level, due } }   // Leitner levels 0–5
   Privacy note: everything lives in THIS browser. No accounts, no server —
   which also means progress doesn't follow the user across devices. */

const PROGRESS_KEY = "fb.progress.v1";
const MASTERY_KEY  = "fb.mastery.v1";
const QUIZ_KEY     = "fb.quiz.v1";

/* Leitner intervals (days until next review), indexed by level.
   Matches docs/curriculum-spec.md §5. */
const INTERVALS = [1, 1, 3, 7, 16, 35];

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

export function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

/* ---------------- progress & streak ---------------- */

export function getProgress() {
  return load(PROGRESS_KEY, { completed: {}, streak: 0, lastDay: null });
}

export function isCompleted(day) {
  return !!getProgress().completed[day];
}

/* Idempotent per calendar day: finishing a lesson bumps the streak at most
   once per day; re-finishing the same lesson never double-counts. */
export function completeLesson(day) {
  const p = getProgress();
  const today = todayISO();
  if (p.lastDay !== today) {
    p.streak = (p.lastDay === todayISO(-1)) ? p.streak + 1 : 1;
    p.lastDay = today;
  }
  if (!p.completed[day]) p.completed[day] = today;
  save(PROGRESS_KEY, p);
  return p.streak;
}

/* ---------------- mastery / SRS ---------------- */

function getMastery() { return load(MASTERY_KEY, {}); }

/* Called when a vocab step is shown: new items enter the schedule at
   level 0, due tomorrow. Already-known items are left untouched. */
export function registerItems(keys) {
  const m = getMastery();
  let changed = false;
  for (const k of keys) {
    if (!m[k]) { m[k] = { level: 0, due: todayISO(1) }; changed = true; }
  }
  if (changed) save(MASTERY_KEY, m);
}

/* Keys whose review date has arrived (or passed). */
export function dueKeys() {
  const m = getMastery();
  const today = todayISO();
  return Object.keys(m).filter(k => m[k].due <= today);
}

/* Self-graded flashcard result. Correct → level up, longer interval.
   Missed → level down, card returns tomorrow. */
export function gradeItem(key, knew) {
  const m = getMastery();
  const it = m[key] ?? { level: 0, due: todayISO() };
  it.level = knew ? Math.min(5, it.level + 1) : Math.max(0, it.level - 1);
  it.due = todayISO(knew ? INTERVALS[it.level] : 1);
  m[key] = it;
  save(MASTERY_KEY, m);
}

/* ---------------- quiz diagnostic (last result) ---------------- */
/* The Mega-Quiz stores its most recent diagnostic summary so a returning
   learner keeps their last per-skill picture. No accounts, no server. */
export function saveQuizResult(res) { save(QUIZ_KEY, res); }
export function getQuizResult() { return load(QUIZ_KEY, null); }

/* ---------------- export / import (localStorage portability) ----------------
   §3-pure: no backend, no accounts, no sync. This is the SINGLE SOURCE OF TRUTH
   for the on-disk backup format, so results-history and any future sync reuse
   it rather than re-inventing a wrapper.

   Wrapper shape (versioned so a FUTURE version can add fields without breaking
   a v1 import):
     { version:1, app:"french-buddy", exportedAt:<ISO>, data:{ progress, mastery, quiz } }

   Forward-compat rules:
   - A reader accepts any file whose version it KNOWS (<= SCHEMA_VERSION here).
   - A file from a NEWER version is refused cleanly (we can't guarantee we
     understand its data) — never partially applied.
   - Unknown extra fields inside `data` are carried through untouched, so a
     newer file round-trips through an older reader's data sections without loss
     of the sections it does understand. */

const APP_ID = "french-buddy";
const SCHEMA_VERSION = 1;   /* bump when the wrapper/data shape changes */

/* Build the full backup object. Pure read — touches no state. */
export function exportData() {
  return {
    version: SCHEMA_VERSION,
    app: APP_ID,
    exportedAt: new Date().toISOString(),
    data: {
      progress: getProgress(),
      mastery: getMastery(),
      quiz: getQuizResult(),
    },
  };
}

const isPlainObject = o => o != null && typeof o === "object" && !Array.isArray(o);

/* Validate a parsed backup object WITHOUT touching storage.
   Returns { ok:true, version, data } or { ok:false, error:<message> }.
   Messages are user-facing (French, to match the UI chrome). */
export function validateImport(obj) {
  if (!isPlainObject(obj))
    return { ok: false, error: "Fichier invalide : ce n'est pas un fichier de progression." };
  if (obj.app !== APP_ID)
    return { ok: false, error: "Ce fichier n'est pas un fichier de progression French Buddy." };
  if (!Number.isInteger(obj.version))
    return { ok: false, error: "Fichier invalide : version manquante ou illisible." };
  if (obj.version < 1)
    return { ok: false, error: "Version de fichier non reconnue." };
  if (obj.version > SCHEMA_VERSION)
    return { ok: false, error: `Ce fichier vient d'une version plus récente (v${obj.version}). Mets l'application à jour, puis réessaie.` };
  if (!isPlainObject(obj.data))
    return { ok: false, error: "Ce fichier ne contient aucune progression à restaurer." };
  return { ok: true, version: obj.version, data: obj.data };
}

/* Validate, then REPLACE the local stores. Returns { ok:true } or
   { ok:false, error }. On any validation failure nothing is written, so a
   malformed/foreign file can never corrupt or partially overwrite existing
   progress. Missing sections fall back to empty defaults so a restore never
   leaves a half-old / half-new mix. */
export function importData(obj) {
  const v = validateImport(obj);
  if (!v.ok) return v;
  const d = v.data;
  const progress = isPlainObject(d.progress) ? d.progress : { completed: {}, streak: 0, lastDay: null };
  const mastery  = isPlainObject(d.mastery)  ? d.mastery  : {};
  const quiz     = d.quiz ?? null;
  save(PROGRESS_KEY, progress);
  save(MASTERY_KEY, mastery);
  save(QUIZ_KEY, quiz);
  return { ok: true };
}
