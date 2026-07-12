#!/usr/bin/env node
/* Dry-run validator — catches regressions that break both the audio pipeline
   and the SRS ITEM_INDEX before they ship. Run after any lesson content change.

   Checks:
   1. Every audio key (phonics pairs, vocab items, dialogue turns) is globally
      unique across the whole curriculum.
   2. No say/key field is missing on anything that needs one.
   3. Every recall question's `answer` index is in range of its `opts`.

   Exits non-zero on any failure. */

import { LESSONS } from "./src/lessons/index.mjs";
import { BANK_STATS } from "./src/quiz/bank.mjs";
import { LISTENING } from "./src/listening/sets.mjs";

const errors = [];
const seenKeys = new Set();

function checkKey(key, say, where) {
  if (!key) { errors.push(`${where}: missing key`); return; }
  if (!say) { errors.push(`${where} (key=${key}): missing say`); }
  if (seenKeys.has(key)) { errors.push(`${where}: duplicate audio key "${key}"`); return; }
  seenKeys.add(key);
}

for (const lesson of LESSONS) {
  const where0 = `Day ${lesson.day}`;
  for (const step of lesson.steps) {
    if (step.type === "phonics") {
      for (const p of step.pairs ?? [])
        checkKey(p.key, p.say, `${where0} phonics`);
    }
    if (step.type === "vocab") {
      for (const it of step.items ?? [])
        checkKey(it.key, it.say, `${where0} vocab`);
    }
    if (step.type === "dialogue") {
      for (const t of step.turns ?? [])
        checkKey(t.key, t.say, `${where0} dialogue`);
    }
    if (step.type === "recall") {
      for (const [qi, q] of (step.questions ?? []).entries()) {
        const where = `${where0} recall Q${qi + 1}`;
        if (!Array.isArray(q.opts) || !q.opts.length) {
          errors.push(`${where}: missing/empty opts`);
        } else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.opts.length) {
          errors.push(`${where}: answer index ${q.answer} out of range for ${q.opts.length} opts`);
        }
      }
    }
  }
}

/* Listening passages share the SAME global audio-key namespace as lessons — a
   duplicate key would break both the pipeline and clip playback. Check the line
   keys here too, plus each passage's question answer ranges. */
let listeningKeys = 0, listeningQs = 0;
for (const level of LISTENING.levels) {
  for (const set of level.sets) {
    for (const p of set.passages) {
      for (const ln of p.lines ?? []) { checkKey(ln.key, ln.say, `Listening ${set.id}/${p.id}`); listeningKeys++; }
      for (const [qi, q] of (p.questions ?? []).entries()) {
        listeningQs++;
        const where = `Listening ${p.id} Q${qi + 1}`;
        if (!Array.isArray(q.opts) || !q.opts.length) errors.push(`${where}: missing/empty opts`);
        else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.opts.length)
          errors.push(`${where}: answer index ${q.answer} out of range for ${q.opts.length} opts`);
        if (new Set(q.opts).size !== q.opts.length) errors.push(`${where}: duplicate option`);
      }
    }
  }
}

if (errors.length) {
  console.error(`DRY-RUN FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error("  ✗ " + e);
  process.exit(1);
}

console.log(`DRY-RUN PASS — ${LESSONS.length} lessons, ${seenKeys.size} unique audio keys ` +
  `(incl. ${listeningKeys} listening line keys), all recall/listening answers in range.`);
console.log(`LISTENING — ${listeningKeys} clips, ${listeningQs} comprehension questions.`);

/* Bank regression line — must reconcile: generated + hand === total. */
const { total, generated, hand } = BANK_STATS;
if (generated + hand !== total) {
  console.error(`BANK MISMATCH — generated(${generated}) + hand(${hand}) !== total(${total}).`);
  process.exit(1);
}
console.log(`QUIZ BANK — ${total} items = ${generated} generated + ${hand} hand-authored.`);
