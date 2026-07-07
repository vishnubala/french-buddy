/* storage.js — persistence + spaced repetition (localStorage, no backend).
   Data model:
     fb.progress.v1 : { completed: {day: dateISO}, streak, lastDay }
     fb.mastery.v1  : { itemKey: { level, due } }   // Leitner levels 0–5
   Privacy note: everything lives in THIS browser. No accounts, no server —
   which also means progress doesn't follow the user across devices. */

const PROGRESS_KEY = "fb.progress.v1";
const MASTERY_KEY  = "fb.mastery.v1";

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
