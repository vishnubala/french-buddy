#!/usr/bin/env node
/* Per-week and total counts: lessons, clips (phonics pairs + vocab items +
   2x dialogue turns for the normal/_slow pair), and total say characters. */

import { LESSONS } from "./src/lessons/index.mjs";

const byWeek = new Map();

function bucket(week) {
  if (!byWeek.has(week)) {
    byWeek.set(week, { lessons: 0, clips: 0, chars: 0, phonics: 0, vocab: 0, dialogue: 0, recall: 0 });
  }
  return byWeek.get(week);
}

for (const lesson of LESSONS) {
  const b = bucket(lesson.week);
  b.lessons++;
  for (const step of lesson.steps) {
    if (step.type === "phonics") {
      for (const p of step.pairs ?? []) { b.phonics++; b.clips += 1; b.chars += (p.say ?? "").length; }
    }
    if (step.type === "vocab") {
      for (const it of step.items ?? []) { b.vocab++; b.clips += 1; b.chars += (it.say ?? "").length; }
    }
    if (step.type === "dialogue") {
      for (const t of step.turns ?? []) { b.dialogue++; b.clips += 2; b.chars += (t.say ?? "").length * 2; }
    }
    if (step.type === "recall") {
      b.recall += (step.questions ?? []).length;
    }
  }
}

const weeks = [...byWeek.keys()].sort((a, b) => a - b);
const totals = { lessons: 0, clips: 0, chars: 0, phonics: 0, vocab: 0, dialogue: 0, recall: 0 };

console.log("Week | Lessons | Clips | Chars | Phonics | Vocab | Dialogue | Recall");
for (const w of weeks) {
  const b = byWeek.get(w);
  console.log(`W${w}   | ${b.lessons}       | ${b.clips}   | ${b.chars}  | ${b.phonics}      | ${b.vocab}    | ${b.dialogue}       | ${b.recall}`);
  for (const k of Object.keys(totals)) totals[k] += b[k];
}

console.log("-----");
console.log(`Total: ${totals.lessons} lessons, ${totals.clips} clips, ${totals.chars} speech chars, ` +
  `${totals.phonics} phonics pairs, ${totals.vocab} vocab items, ${totals.dialogue} dialogue turns, ${totals.recall} recall questions.`);
