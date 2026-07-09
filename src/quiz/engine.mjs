/* quiz/engine.mjs — the adaptive/diagnostic session LOGIC (no DOM).
   ONE engine; the three entry points (A1 / A2 / A1–A2 mega) are just FILTERS
   over it. Rendering lives in main.js and reuses the recall MC primitive.

   Stopping rule = HYBRID:
     Phase 1 CALIBRATION — one item per in-scope skill (coverage guarantee).
     Phase 2 DEEPENING   — keep serving items from wrongly-answered skills,
                           hardest (highest band) first, up to a fixed cap;
                           stop at the cap or when no weak skill has items left. */

import { SKILLS, SKILL_BY_SLUG } from "./skills.mjs";

/* A2 builds on 8–12 plus this foundation set of A1 survival skills. */
const FOUNDATION = ["etre_avoir", "gender_articles", "numbers_time", "vocab_domains", "prepositions"];
const CAP = { a1: 24, a2: 28, mega: 40 };
const MODE_LABEL = { a1: "Quiz A1", a2: "Quiz A2", mega: "Quiz A1–A2 (méga)" };

function modeScope(mode) {
  if (mode === "mega") return new Set(SKILLS.map(s => s.slug));
  if (mode === "a1") return new Set(SKILLS.filter(s => s.weeks.some(w => w <= 7)).map(s => s.slug));
  /* a2 */
  const set = new Set(SKILLS.filter(s => s.weeks.some(w => w >= 8)).map(s => s.slug));
  FOUNDATION.forEach(f => set.add(f));
  return set;
}
function eligible(item, mode, scope) {
  if (!scope.has(item.skill)) return false;
  if (mode === "a1") return Math.max(...item.weeks) <= 7;   /* no post-A1 content in the A1 quiz */
  return true;
}
const shuffle = a => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};

export function createSession(mode, bank) {
  const scope = modeScope(mode);
  const cap = CAP[mode] || 40;

  /* eligible items, grouped by skill */
  const poolBySkill = {};
  for (const it of bank) if (eligible(it, mode, scope)) (poolBySkill[it.skill] ||= []).push(it);

  /* in-scope skills that actually have items, in taxonomy order */
  const scopeSkills = SKILLS.filter(s => scope.has(s.slug) && poolBySkill[s.slug]?.length).map(s => s.slug);

  const served = new Set();            /* item ids already served */
  const log = [];                      /* { item, correct } in answer order */
  const wrongBySkill = {};             /* slug -> count of wrong answers */
  let calQueue = shuffle(scopeSkills); /* calibration: one per skill */
  let phase = "calibration";
  let current = null;

  const unservedOf = slug => (poolBySkill[slug] || []).filter(it => !served.has(it.id));

  function serve(it) { served.add(it.id); current = it; return it; }

  /* pick a calibration item for a skill (mid-ish difficulty, else any) */
  function pickCalibration(slug) {
    const pool = unservedOf(slug);
    if (!pool.length) return null;
    const mid = pool.filter(it => it.diff === 2);
    return shuffle(mid.length ? mid : pool)[0];
  }

  /* deepening: weak skills (any wrong), hardest band first, most-wrong first;
     within a skill, hardest unserved item first */
  function pickDeepening() {
    const weak = scopeSkills
      .filter(slug => (wrongBySkill[slug] || 0) > 0 && unservedOf(slug).length)
      .sort((a, b) => (SKILL_BY_SLUG[b].band - SKILL_BY_SLUG[a].band) || ((wrongBySkill[b] || 0) - (wrongBySkill[a] || 0)));
    if (!weak.length) return null;
    const slug = weak[0];
    const pool = unservedOf(slug).sort((a, b) => b.diff - a.diff);
    return pool[0];
  }

  return {
    meta: { mode, cap, label: MODE_LABEL[mode] || "Quiz", scopeSkillCount: scopeSkills.length },

    /* how many the user will roughly see: calibration + whatever deepening fits */
    plannedTotal() { return Math.min(cap, Math.max(scopeSkills.length, cap)); },

    phaseLabel() { return phase === "calibration" ? "Calibration" : "Approfondissement"; },
    servedCount() { return served.size; },

    /* next item, or null when the session is complete */
    next() {
      if (served.size >= cap) return null;
      if (phase === "calibration") {
        while (calQueue.length) {
          const it = pickCalibration(calQueue.shift());
          if (it) return serve(it);
        }
        phase = "deepening";
      }
      const it = pickDeepening();
      return it ? serve(it) : null;
    },

    /* grade the current item */
    record(isCorrect) {
      if (!current) return;
      log.push({ item: current, correct: !!isCorrect });
      if (!isCorrect) wrongBySkill[current.skill] = (wrongBySkill[current.skill] || 0) + 1;
    },

    results() { return computeResults(log); },
  };
}

/* Diagnostic payload computed purely from the answer log. */
export function computeResults(log) {
  const total = log.length;
  const correct = log.filter(e => e.correct).length;

  const skillMap = {};
  const weekMap = {};
  for (const { item, correct: ok } of log) {
    const sm = (skillMap[item.skill] ||= { correct: 0, total: 0 });
    sm.total++; if (ok) sm.correct++;
    for (const w of item.weeks) {
      const wm = (weekMap[w] ||= { correct: 0, total: 0 });
      wm.total++; if (ok) wm.correct++;
    }
  }

  const perSkill = Object.keys(skillMap).map(slug => {
    const s = SKILL_BY_SLUG[slug];
    const { correct: c, total: t } = skillMap[slug];
    return { slug, label: s.label, band: s.band, weeks: s.weeks, correct: c, total: t, pct: Math.round((c / t) * 100) };
  }).sort((a, b) => (a.pct - b.pct) || (b.total - a.total));   /* weakest first */

  const perWeek = Object.keys(weekMap).map(Number).sort((a, b) => a - b).map(w => {
    const { correct: c, total: t } = weekMap[w];
    return { week: w, correct: c, total: t, pct: Math.round((c / t) * 100) };
  });

  return {
    overall: { correct, total, pct: total ? Math.round((correct / total) * 100) : 0 },
    perSkill,
    perWeek,
  };
}
