/* storage.js — persistence + spaced repetition (localStorage, no backend).
   Data model:
     fb.progress.v1 : { completed: {day: dateISO}, streak, lastDay }
     fb.mastery.v1  : { itemKey: { level, due } }   // Leitner levels 0–5
   Privacy note: everything lives in THIS browser. No accounts, no server —
   which also means progress doesn't follow the user across devices. */

const PROGRESS_KEY = "fb.progress.v1";
const MASTERY_KEY  = "fb.mastery.v1";
const QUIZ_KEY     = "fb.quiz.v1";
const HISTORY_KEY  = "fb.history.v1";
const AZURE_KEY    = "fb.azure.v1";   /* BYO Speech credential — see §credentials */

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

/* ---------------- quiz results-history (compact, capped) ----------------
   A trend log: one COMPACT record per finished quiz attempt (NOT the full
   per-question log). Record shape:
     { at:"<ISO>", quiz:"a1"|"a2"|"mega", overall:<int %>, skills:{ "<slug>":<int %> } }
   Bounded growth: at most HISTORY_CAP records PER quiz id (oldest dropped), so
   an export stays a reasonable size. localStorage only — no backend. */

const HISTORY_CAP = 50;   /* per quiz id */
const isPlainObject = o => o != null && typeof o === "object" && !Array.isArray(o);

export function getHistory() {
  const h = load(HISTORY_KEY, []);
  return Array.isArray(h) ? h : [];
}

/* Keep only the last HISTORY_CAP records of each quiz id, preserving the array's
   overall chronological order. Also drops any malformed record (defensive: an
   imported file could carry junk). */
function capHistory(arr) {
  if (!Array.isArray(arr)) return [];
  const perId = {};
  for (const r of arr) {
    if (!isPlainObject(r) || typeof r.quiz !== "string") continue;
    (perId[r.quiz] ||= []).push(r);
  }
  const keep = new Set();
  for (const id in perId) {
    const a = perId[id];
    for (let i = Math.max(0, a.length - HISTORY_CAP); i < a.length; i++) keep.add(a[i]);
  }
  return arr.filter(r => keep.has(r));
}

/* Append one attempt record; returns the new (capped) history array. */
export function appendQuizAttempt(rec) {
  const capped = capHistory([...getHistory(), rec]);
  save(HISTORY_KEY, capped);
  return capped;
}

/* ---------------- export / import (localStorage portability) ----------------
   §3-pure: no backend, no accounts, no sync. This is the SINGLE SOURCE OF TRUTH
   for the on-disk backup format, so results-history and any future sync reuse
   it rather than re-inventing a wrapper.

   Wrapper shape (versioned so a FUTURE version can add fields without breaking
   a v1 import):
     { version:1, app:"french-buddy", exportedAt:<ISO>,
       data:{ progress, mastery, quiz, history } }
   `history` is an OPTIONAL section added after the first v1 files shipped —
   still SCHEMA_VERSION 1 (adding an optional field is NOT a breaking change):
   an old file lacking it imports cleanly as an empty log (see importData).

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
      history: getHistory(),
    },
  };
}

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
  /* history is an OPTIONAL section added after the first v1 files shipped:
     an old export with no `history` restores cleanly as an empty log, never
     a validation failure. capHistory also sanitises any junk records. */
  const history  = capHistory(Array.isArray(d.history) ? d.history : []);
  save(PROGRESS_KEY, progress);
  save(MASTERY_KEY, mastery);
  save(QUIZ_KEY, quiz);
  save(HISTORY_KEY, history);
  /* NOTE: the Azure key (AZURE_KEY) is deliberately NOT written here — an import
     never touches the credential (see §credentials). */
  return { ok: true };
}

/* ---------------- §credentials: Azure Speech key (bring-your-own) ------------
   Stored in its OWN key, deliberately SEPARATE from the progress store, for the
   upcoming Speaking module. CRITICAL: this is NEVER included in exportData() and
   NEVER read/written by importData() — the export file gets moved around (email,
   cloud, shared), and a key inside it is a silent credential leak. resetProgress()
   also leaves it untouched: a credential is not progress. */

export function getAzureCreds() {
  const c = load(AZURE_KEY, null);
  return isPlainObject(c) ? { key: c.key || "", region: c.region || "" } : { key: "", region: "" };
}
export function setAzureCreds(key, region) {
  save(AZURE_KEY, { key: (key || "").trim(), region: (region || "").trim() });
}
export function clearAzureCreds() { try { localStorage.removeItem(AZURE_KEY); } catch {} }

/* Validate a key+region cheaply via the token endpoint (issueToken) — consumes
   NO TTS characters. Endpoint + browser-CORS behaviour verified against live
   Azure this session: a browser fetch to the regional endpoint is allowed and
   returns a readable 401 for a bad key, while a wrong region fails to resolve
   (network error). No dependency, no backend of ours (the call goes straight to
   the user's own Azure resource). */
export async function validateAzureKey(key, region) {
  key = (key || "").trim(); region = (region || "").trim();
  if (!key || !region) return { ok: false, error: "Entre une clé ET une région (ex. francecentral)." };
  if (/^https?:\/\//i.test(key) || key.includes("."))
    return { ok: false, error: "On dirait une URL. Colle la CLÉ (KEY 1), pas le point de terminaison." };
  let res;
  try {
    res = await fetch(`https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      { method: "POST", headers: { "Ocp-Apim-Subscription-Key": key }, body: "" });
  } catch {
    return { ok: false, error: `Région introuvable : « ${region} ». Vérifie la région (ex. francecentral, westeurope).` };
  }
  if (res.ok) return { ok: true, region };
  if (res.status === 401 || res.status === 403)
    return { ok: false, error: "Clé refusée par Azure. Vérifie que tu as copié KEY 1 (pas l'URL) et la bonne région." };
  return { ok: false, error: `Azure a répondu ${res.status}. Vérifie la clé et la région.` };
}

/* ---------------- reset progress ----------------
   Wipes learner progress (progress + SRS + last quiz + history). Does NOT touch
   the Azure credential — that's a credential, not progress. */
export function resetProgress() {
  for (const k of [PROGRESS_KEY, MASTERY_KEY, QUIZ_KEY, HISTORY_KEY]) {
    try { localStorage.removeItem(k); } catch {}
  }
}
