# STATE.md — French Buddy

Read this at the start of every session ("read state"). Update it before you
close ("wrap"). This file is the actual handoff mechanism — CLAUDE.md explains
the *project*, this file says *where we are in it right now*.

If this file and reality disagree (e.g. it says a week is "done" but the code
says otherwise), trust the code and fix this file — say "update STATE from
this conversation."

---

## [CURRENT PHASE]

**CONTENT-COMPLETE.** All **12 weeks / 84 lessons** of the A1→A2 course are
drafted, wired, building, and audio-generated (**1621 real Azure clips, 0 on
browser-TTS fallback**). Week 12 (Days 78–84, "Putting it together" — six
scene-review days + the Day-84 capstone "Une journée à Paris" + the A2
self-assessment) was drafted, wired, and audio-generated this session, with
NO new grammar (pure consolidation). The nav is at its finished state: A1 and
A2 both live, **all of Sem 1–12 built (no locked week pills under either
level)**, B1/B2 greyed "à venir"; on day 84 the rail marker sits at the
terminus (100%) with all 12 nodes lit; the day-84 wrap reads as course
completion ("Parcours A2 — complet. Félicitations 🎉", 84/84 stations), no
week-13 tease.

**NEW (this session): the Mega-Quiz diagnostic ENGINE is built and verified.**
A separate `src/quiz/` module (skills taxonomy + item bank + adaptive engine)
that renders through the SAME recall MC primitive as lessons (§2 one-engine).
Three entry points (A1 / A2 / A1–A2 méga) are filters over one engine;
hybrid stopping rule (calibration one-per-skill → deepening on weak skills,
hardest-first, to a cap of 24/28/40). Results screen shows overall %, per-skill
accuracy (weakest-first, with "revisit Jour NN" links) and per-week accuracy.
Item bank = ~695 auto-generated lexical items from LESSONS vocab + ~38
hand-authored grammar items (THIN, ~2/skill, all 19 skills covered). Verified
in a real browser: build green, dryrun/counts still pass for lessons,
calibration touches every in-scope skill, wrong answers show correct-answer
feedback, deepening fills to cap, revisit links navigate. **NOT yet done: the
deep hand-authored grammar bank — esp. passé-composé-vs-imparfait minimal
pairs — is the NEXT quiz session** (kept to 2 correct examples here).

**The build phase is essentially done. The single remaining blocker to
shipping to a real learner is the standing hard gate: full native-speaker
listening review of all 12 weeks** (CLAUDE.md §8.2) — text AND the generated
audio, since neural TTS reads wrong French fluently. That review also gates
any future B1/Block F work (§11.5). Immediate next actions are now review/
polish/deploy decisions, not new content (see Next action).

---

## Where things actually stand (verified against disk, not memory)

- **Weeks 1–2 (Days 1–14)**: written, wired, building. **Not native-reviewed.**
- **Week 3 (Days 15–21)**: written, wired, building — café, partitive, numbers
  70–100, quantities, brasserie. **Not native-reviewed.**
- **Week 4 (Days 22–28)**: written AND wired this session — the city &
  directions: `aller` + au/à la/aux, the imperative (tournez/continuez/prenez),
  the métro (direction/correspondance/sortie/Navigo), asking the way / being
  lost, prepositions of place (reusing the week-3 du/de la/des fusion), and the
  arrondissements + rive gauche/droite with light ordinals. **Not
  native-reviewed.**
- **Week 5 (Days 29–35) — drafted and wired this session.** Telling time
  informally (et quart/et demie/moins le quart) and on the official 24h
  clock; reflexive/pronominal verbs (se lever/se coucher/se réveiller/se
  laver/s'habiller/se doucher); the irregular `faire` (+ sport/les
  courses/la cuisine/le ménage); `être en train de` for right-now actions;
  days of the week + a taste of months; Paris's fermeture culture (lunch
  closures ~12h30–14h30, Sunday closures, the Louvre/Orsay's differing
  weekday closures). `src/lessons/index.mjs` now imports WEEK5 and spreads
  it. Verified for real (not a mirror): `npm run build` — 11 modules, 0
  errors; `npm run dryrun` — 35 lessons, 522 unique audio keys, all recall
  answers in range; `npm run counts` — 695 clips total, 137 for week 5
  alone. Walked through Day 29 (phonics/vocab/dialogue/recall) and the Day
  35 review (chained dialogue, 6-question recall, SRS step with 259 vocab
  items now indexed, culture, wrap) live in a browser — no console errors,
  nav/streak/completion all correct. **Audio NOT yet generated for Week
  5** — falls back to browser TTS until `npm run audio` is run again (it's
  additive/cache-safe: Weeks 1–4's clips won't be touched). **Not
  native-reviewed.**
- **Week 6 (Days 36–42) — drafted and wired this session.** Demonstratives
  (ce/cet/cette/ces); adjective agreement via colors (rouge, bleu/bleue,
  vert/verte, noir/noire, blanc/blanche irregular, orange/invariable) and
  BAGS placement (petit/grand/bon/mauvais/joli/jeune/vieux before the
  noun — the spec's explicit adjective-liaison phonics target, covered
  with three distinct liaison types: petit's t, bon's denasalized n,
  grands's z); clothes and sizes (pantalon/robe/chemise/chaussures, je
  fais du…, the -ille glide with ville/mille/tranquille as the exception);
  quantity expressions (beaucoup de/un peu de/trop de/assez de/pas de —
  always bare de, explicitly contrasted with week 3's du/de la/des); and
  les soldes vs le marché vs le supermarché as the week's Paris note (the
  twice-yearly regulated sale windows; no-haggling norm). `src/lessons/
  index.mjs` now imports WEEK6 and spreads it. Verified for real: `npm run
  build` — 12 modules, 0 errors; `npm run dryrun` — 42 lessons, 622 unique
  audio keys, all recall answers in range; `npm run counts` — 829 clips/
  19,126 chars total, 134 clips for week 6 alone. Walked through Day 36
  (phonics/vocab/dialogue) and the Day 42 review (chained 7-turn dialogue,
  all 6 recall questions answered through the real UI, SRS step with 307
  vocab items now indexed, wrap/streak/stats) live in a browser — zero
  console errors. **Not native-reviewed.**
- **Week 7 (Days 43–49) — drafted, wired, AND audio-generated this session.
  The last A1 week.** Possessives mon/ma/mes (the spec's mon/ma nasal-contrast
  phonics; the agree-with-the-noun-not-the-owner rule; mon-before-feminine-
  vowel like week 6's cet) then the ton/ta/tes and son/sa/ses extension
  (son/sa = his OR her — object's gender, not owner's); rooms of a home
  (la pièce vs la chambre; toilettes still plural from week 4); furniture;
  the regular -ir verb group (finir/choisir/réfléchir/réussir, the -iss-
  plural signature, with an honest flag that partir/dormir are the
  irregular kind); floors + prepositions (rez-de-chaussée vs premier étage
  off-by-one, au + ordinal reusing week 4's fusion + ordinals); and le
  quartier + the gardien/concierge as the Paris note. Kept strictly
  present-tense, function-first A1 — passé composé deferred to week 8.
  `src/lessons/index.mjs` imports WEEK7 and spreads it. Verified for real:
  `npm run build` — 13 modules, 0 errors; `npm run dryrun` — 49 lessons,
  720 unique audio keys, all recall answers in range; `npm run counts` —
  959 clips/22,585 chars total, 130 for week 7. Walked Day 43 (all 7 step
  types) and the Day 49 review (6-turn chained dialogue, all 6 recall
  questions answered via the real UI, SRS step with 355 vocab items
  indexed, wrap teasing week 8) live in a browser — zero console errors.
  Confirmed the A1→A2 nav boundary is correct: with all 7 A1 weeks built
  there are now NO locked week pills within A1, and A2/B1/B2 stay greyed
  "à venir" (data-driven — A2 auto-lights when week 8 lands). Fixed one
  duplicate recall option caught before commit (Day 49 Q3 had "nous
  finissons" as both the answer and a distractor; distractor changed to
  "nous finissez"). **Not native-reviewed.**
- **Week 8 (Days 50–56) — drafted, wired, AND audio-generated this session.
  THE FIRST A2 WEEK.** The passé composé with **avoir**, built deliberately
  across the whole week (not crammed into one lesson, per the grammar-weight
  caution in CLAUDE.md §11.2): the avoir + past-participle formula and -er
  participles (-é) with the spec's -é/-er/-ez homophone phonics target (day
  50); the full avoir paradigm + -ir participles (-i), the ils-ont/ils-sont
  /z/-vs-/s/ contrast, and the crucial no-agreement-with-avoir rule (51);
  the six workhorse irregular participles fait/eu/vu/pris/bu/été, incl. eu
  pronounced /y/ (52); negation je n'ai pas + rien/jamais placement (53);
  questions (qu'est-ce que / question-word-last quoi) + weekend vocab (54);
  recounting a weekend with the already-known connectors et/puis/après (55);
  review (56). **Scope discipline (spec §3): AVOIR ONLY** — être-auxiliary
  verbs, participle agreement, and the full d'abord/ensuite/enfin sequencing
  set are Week 9's targets, deliberately held back and flagged "next week"
  in the tips. `src/lessons/index.mjs` imports WEEK8. Verified for real:
  build (14 modules, 0 errors), dryrun (56 lessons, 819 unique keys, all
  recall answers in range), counts (1091 clips/26,362 chars, 132 for week 8).
  Walked Day 50 (all 7 step types) and the Day 56 review (7-turn chained
  dialogue, all 6 recall answered via the real UI, SRS with 403 vocab items
  indexed, wrap teasing week 9) live in a browser — zero console errors.
  **A1→A2 nav transition verified live** (see phase note): A2 tab now live
  and clickable, Week 8 active / Weeks 9–12 locked, brand tag flips to
  "Ligne A2 · Paris", B1/B2 still greyed; A1 still shows Weeks 1–7. The
  A1/A2 split matches the spec's block boundary — no LEVELS change needed.
  **Not native-reviewed.**
- **Week 9 (Days 57–63) — drafted, wired, AND audio-generated this session.
  SECOND A2 WEEK; the passé composé is now COMPLETE.** Completes what Week 8
  built with avoir-only: the être auxiliary + first movement verbs (57); the
  rest of the closed être set + the motion/change model + the avoir-vs-être
  split on the same verb (je suis sorti / j'ai sorti le chien — flagged with
  the "what?" direct-object test) (58); participle AGREEMENT with être
  (-e/-s/-es) and the spec's audible-vs-silent phonics — allé/allée/allés/
  allées all /ale/ (silent), mort/morte audible (59); negation & questions
  with être, mirroring Week 8's frame (60); sequencing d'abord/ensuite/puis/
  enfin to narrate a trip, mixing être + avoir verbs (61); a LIGHT y/en
  intro per the spec, built on the already-known "on y va"/"il y a" (62);
  review (63). Accuracy discipline (§8.4): être set framed as motion/change;
  agreement presented as a mostly-silent writing rule; il a plu shown taking
  avoir as contrast. Built as a system across the week (§11.2). `src/lessons/
  index.mjs` imports WEEK9. Verified: build (15 modules, 0 errors), dryrun
  (63 lessons, 918 unique keys, all recall in range), counts (1223 clips/
  30,013 chars, 132 for wk9). Browser walkthrough of Day 57 (all 7 step
  types) and the Day 63 review — including the **SRS step pulling 32 real
  due cards spanning earlier weeks** (graded through the flashcard UI to
  "32/32 sus ✓", which unlocked the step — first time the review-day SRS
  has surfaced a non-empty queue in verification), wrap teasing week 10 —
  zero console errors. **Not native-reviewed.**
- **Week 10 (Days 64–70) — drafted, wired, AND audio-generated this session.
  THIRD A2 WEEK; the past/present/future timeline is now COMPLETE.** Le
  futur proche = aller (the week-4 verb, unchanged) + infinitive, framed
  throughout as "the aller you already own, now + a dictionary verb": the
  concept + je/tu/on forms (64); full paradigm nous allons/vous allez/ils
  vont + the vont/ont/sont ear-test + near-future markers (65); negation
  je ne vais pas + infinitive (66); on-suggestions with rising intonation
  — the spec's yes/no-question phonics target (67); weather il fait beau/
  il va pleuvoir (68); inviting + accepting/declining politely, the Paris
  "soft no" note (69); review with a hier/aujourd'hui/demain three-tense
  contrast (70). **SCOPE GUARD held (spec §3): futur proche ONLY — the futur
  simple (je mangerai) is deliberately excluded and named as out of scope
  in the day-64 culture note.** Kept lighter/more conceptual than wks 8–9
  since nothing new to conjugate (§11.2). Accuracy (§8.4): aller forms/
  liaisons called back to week 4, not recontradicted; vont/ont/sont built
  on wks 8–9. `src/lessons/index.mjs` imports WEEK10. Verified: build (16
  modules, 0 errors), dryrun (70 lessons, 1014 unique keys, all recall in
  range), counts (1349 clips/33,591 chars, 126 for wk10). Browser
  walkthrough of Day 64 (all 7 step types) + Day 70 review (6-turn dialogue,
  6 recall incl. the three-tense contrast answered via the UI, SRS, wrap
  teasing week 11) — zero console errors. A2 nav shows Sem 8–10 live, Sem
  11–12 locked. **Not native-reviewed.**
- **Week 11 (Days 71–77) — drafted, wired, AND audio-generated this session.
  FOURTH A2 WEEK; the imparfait, the last major new tense.** Built the
  imparfait as a **3-day spine, not a grab-bag item** (§11.2): formation
  (stem = present nous-form − ons + -ais/-ait/…; être irregular ét-) with
  the -ais/-ait/-aient homophone phonics — parallel to the PC's -é/-er/-ez
  (71); what it's FOR — description & habit (c'était/il y avait/il faisait,
  quand j'étais petit) (72); the LIGHT passé-composé-vs-imparfait contrast
  (photo vs film / event vs backdrop, é-vs-è phonics) per the spec's
  "contrasted lightly" (73). Then comparatives plus/moins/aussi… que +
  meilleur (74); opinion frames je trouve que/à mon avis/je pense que (75);
  the **prendre family** (prendre/comprendre/apprendre — the -re verbs the
  spec actually names, NOT regular attendre/vendre; half-known from wk3/wk8)
  + café-debate register with the softening-disagreement Paris note (76);
  review (77). Accuracy (§8.4): the PC/imparfait aspect examples were
  reasoned individually for correctness (il faisait beau quand je suis
  sorti; je dormais quand le téléphone a sonné; d'habitude je prenais vs une
  fois j'ai pris). `src/lessons/index.mjs` imports WEEK11. Verified: build
  (17 modules, 0 errors), dryrun (77 lessons, 1111 unique keys, all recall
  in range), counts (1477 clips/37,618 chars, 128 for wk11). Browser
  walkthrough of Day 71 (all 7 step types) + Day 77 review (6-turn dialogue,
  6 recall via the UI, SRS, wrap teasing week 12) — zero console errors. A2
  nav shows Sem 8–11 live, Sem 12 locked. **OVERLOAD CHECK OUTCOME: the
  spec's four-topic bundle fit 7 days without cramming — imparfait got its
  3-day spine, the other three were genuinely one-day-sized; nothing was
  shifted to Week 12 (which is review-only by design) and nothing dropped.**
  **Not native-reviewed.**
- **Week 12 (Days 78–84) — drafted, wired, AND audio-generated this session.
  THE FINAL WEEK; the course is now content-complete (84 lessons).** Pure
  consolidation, NO new grammar (spec §3 Block E + §6): days 78–83 each
  replay one scene/block of a day in Paris and recombine what's built —
  morning café + greetings + register (78); métro + directions (79); the two
  past tenses at the museum (80); opinion + comparison at the café (81); the
  near future / plans (82); tu-vs-vous register-switching, with a full-circle
  /y/-vs-/u/ phonics callback to day 1's rue/roue (83). **Day 84 is the
  capstone**: the full **12-turn chained "Une journée à Paris"** dialogue
  (café → métro → museum → café → plans) moving between present / passé
  composé / imparfait / futur proche and switching register, then a **final
  cumulative can-do quiz** (the A2 self-assessment, one Q per §6 competency),
  the **§6 can-do bilan** as a culture step (with the honest "solid A2, not
  B1" scope note kept to the end), the last SRS queue, and a **completion
  wrap**. **Everything uses existing step types (§2 one-engine rule): the
  self-assessment is a recall + culture step; the terminus wrap reuses the
  métro theme (last station = terminus) so `next` reads as completion with NO
  renderer branch / NO `if(day===84)`.** `src/lessons/index.mjs` imports
  WEEK12. Verified: build (18 modules, 0 errors), dryrun (84 lessons, 1216
  unique keys, all recall in range), counts (1621 clips/42,753 chars, 144 for
  wk12). Browser walkthrough: Day 78 (all 7 step types); Day 84 (the 12-turn
  capstone renders cleanly = 24 say buttons — the renderer handles the big
  dialogue fine; 6-question can-do quiz; SRS; bilan culture; wrap showing
  84/84 and "Prochaine station → Terminus · fin du parcours A2 …"). **FINISHED
  END-STATE verified in-browser: A2 tab has NO locked week pills (all Sem
  8–12 live buttons); on day 84 the rail marker sits at the terminus (100%)
  exactly on the week-12 node, all 12 nodes lit, fill spanning the line;
  B1/B2 remain greyed "à venir".** Zero console errors. **Not
  native-reviewed.**
- **Audio — incremental across sessions; now COMPLETE for the whole course.**
  Ran `npm run audio` for Weeks 5–6 (271 clips), Week 7 (130), Week 8 (132),
  Week 9 (132), Week 10 (126), Week 11 (128), and this session Week 12 (144,
  incl. the 12-turn capstone). `public/audio/` now holds **1621 clips across
  all 84 lessons of the finished course** (~42,753 chars — well inside
  Azure's F0 free tier), committed. The content-hash cache held across eight
  separate incremental runs (each left all earlier weeks' clips untouched).
  Verified in a real browser each time via the network tab (`206 Partial
  Content` on a real mp3, not browser-TTS fallback); most recently
  `d78_bonjour` for Week 12. **All twelve weeks now have real Azure audio —
  nothing is on browser-TTS fallback.**
- **Audio — RUN FOR REAL THIS SESSION (Open Decision #2 RESOLVED).** Person
  put a real Azure Speech key/region in `.env`; ran `npm run audio`. Generated
  558 clips (417 base + 141 `_slow`) across all 28 lessons, ~11,993 characters,
  0 failures. `public/audio/` now holds all 558 `.mp3` files + `clips.json` +
  `manifest.json` (content-hash cache), all committed (~20 MB).
  **Found and fixed a real bug while verifying:** `generate-audio.mjs` wrote
  `clips.json` as valid JSON, then immediately overwrote it with a
  `window.AUDIO_CLIPS = {...}` script-wrapper format. `main.js` fetches that
  file and calls `r.json()` on it — which failed to parse the wrapped format,
  silently caught by the existing `.catch(() => {})`, so `AUDIO_CLIPS` stayed
  `{}` and **every clip would have kept falling back to browser TTS even with
  the pipeline fully run.** Fixed by keeping only the plain-JSON write.
  Verified in a real browser (`npm run dev`, not a mirror): `audio/clips.json`
  now fetches and parses (558 entries), and clicking a phonics/vocab "say"
  button loads the real mp3 (`206 Partial Content` on the network tab) instead
  of invoking `speechSynthesis`. The old browser-TTS-fallback discrepancy
  (Open Decision #4, resolved previously) is now moot for any visitor once
  this deploys — real clips are the primary path, browser TTS is now only a
  fallback for content that hasn't been generated (there is none currently).
  **Native-speaker listening review of Weeks 1–4 is still the hard gate**
  before any real learner sees this (CLAUDE.md §8.2) — generating audio that
  *looks* correct does not satisfy it; neural TTS reads incorrect French
  fluently, which is exactly why a human listening pass is required, not
  optional. Person plans this "when the right person is near."
- **Persistence/SRS**: implemented and wired (`src/storage.js`). Not blocked.
- **Validation (this session, full 28-lesson set)**: `dryrun.mjs` and
  `counts.mjs` now live in-repo (CLAUDE.md §12.3, `npm run dryrun` / `npm run
  counts`) instead of only existing on the old assistant-side mirror. Run for
  real this session — **PASS**: 417 unique audio keys (0 duplicates), 0
  missing `say`/`key` fields, all 96 recall `answer` indices in range. Matches
  last session's mirror numbers exactly.
- **Counts (d1–28)**: 28 lessons · 558 clips · 11,993 speech chars ·
  72 phonics pairs · 204 vocab items · 141 dialogue turns · 96 recall Qs.
  Per week: W1 142 clips / W2 138 / W3 142 / W4 136.
- **Build size**: gzipped JS ~48 KB (148 KB raw), CSS ~2.7 KB (11.6 KB raw)
  after the nav refactor added the tiered-nav styles. Expected growth; engine
  unchanged. `main.js` is ~305 lines, still under the §3 ~500-line
  no-framework threshold (the nav refactor added ~50 lines).
- **Nav (UI)**: refactored last session from a flat ~84-day-chip row into a
  three-tier hierarchy — level tabs (A1 live; A2/B1/B2 greyed "à venir") → week
  pills (built active, unbuilt 🔒 locked) → day chips for the current week only.
  Data-driven from LESSONS; a level is live iff it has ≥1 built week, so A2
  self-activates when Week 8 lands. **Eyeballed live in a real browser this
  session** (`npm run dev`, not a mirror): level tabs render correctly (A1 the
  only clickable button; A2/B1/B2 render as inert `<span>`s with "à venir" and
  correctly fail to click); week pills 1–4 are live buttons, 5–7 render as
  inert locked elements with 🔒 and correctly fail to click; clicking Sem 4 →
  Jour 22 loads Week 4's actual content ("Aller : je vais au, à la, aux") with
  the right day chips (22–28) for that week. No console errors. This closes the
  last open nav check from last session.
- **Deploy**: Netlify connected to GitHub, auto-deploying — confirmed by the
  person. GitHub Actions Pages workflow also present (`.github/workflows/
  deploy.yml`, uses `npm ci` → needs `package-lock.json` committed).
  **Open decision**: keep both live or disable GH Pages. Not decided.
- **Native review**: has not happened for any week. Hard prerequisite before
  real learners (CLAUDE.md §8.2). Person intends to do Weeks 1–4 together soon.

## ⚠️ Historical gotchas (from the claude.ai-advisor era, kept for context)

The two notes below described risks from *before* Claude Code took over the
build (this session). They no longer apply now that builds/edits happen
directly on the Windows machine, but are kept as a record of why the handoff
happened and what to watch for if a mirror-based workflow is ever used again.

- **Filesystem-bridge writes could silently land in the wrong filesystem.**
  One session's `create_file` with a `C:\...` path reported "success" but
  wrote to the assistant's own Linux container at a literal path
  `/C:\Users\...`, leaving nothing on the Windows disk — while a separate
  `Filesystem:edit_file` call DID land, briefly leaving the repo importing a
  missing `week4.mjs`. N/A now: Claude Code's Edit/Write/Bash tools operate on
  the real working tree directly — verified this session by running
  `npm run build`/`npm run dev` for real, not against a copy.
- **Builds used to run on a mirror, not the Windows repo**, because the old
  assistant's bash couldn't reach `C:\...` or run `npm` on the Windows
  machine. That limitation is gone — `dryrun.mjs`/`counts.mjs` now live
  in-repo (§ above, CLAUDE.md §12.3) and were run for real this session with
  results matching the old mirror's numbers exactly.

## Next action (literal, ready to paste)

**The 12-week course is content-complete — there is NO more content to
draft.** All 84 lessons are written, wired, building, and audio-generated
(1621 real Azure clips). So the next actions are review / polish / deploy
decisions, NOT new lessons. In rough priority:

1. **THE hard gate: full native-speaker listening review of all 12 weeks**
   (CLAUDE.md §8.2). Text AND audio — TTS reads wrong French fluently, so
   someone has to *listen*. Nothing ships to a real learner until this is
   done, and it also gates any B1/Block F work (§11.5). This is now the
   single biggest blocker; everything else is secondary.
1b. **Mega-Quiz — deep grammar bank (NEXT quiz session).** The engine +
   thin content is shipped (`src/quiz/`). Next: flesh out `bank.mjs` HAND
   items, especially a real passé-composé-vs-imparfait minimal-pair set
   (only 2 placeholder items exist now). Keep §8.4 accuracy: every ok/no
   must say what's right and why the wrong option is wrong. The two-axis
   Cours/Entraînement nav was deliberately NOT built — still an open decision.
2. **Deploy decision** (Open Decision #1): GitHub Pages vs Netlify — keep
   both or disable GH Pages. Purely a "two URLs" call; no cost either way.
3. **Optional polish passes** (only if the person wants them), each its own
   small session: an end-to-end click-through of the finished course in a
   browser; a light QA of the `reg` (tu/vous) badges for consistency; a
   look at bundle size (JS gzip is now ~140 KB with all 12 weeks + inline
   data — still fine, but worth a glance if it grows).

Do NOT start B1/Block F — it's gated behind the native review (§11.5), and
CLAUDE.md §8.1's one-unit-per-session discipline still applies to any future
build work.

```
# Typical next session (pick ONE)
French Buddy. Read STATE.md and CLAUDE.md first.
The 12-week course is content-complete. Today: [decide GH Pages vs Netlify /
do an end-to-end browser click-through of the finished course / QA the
tu-vous reg badges / [other]]. Do NOT draft new lessons or start B1 —
native review of all 12 weeks is still the hard gate.
```

## Open decisions (need a person, not just a build step)

1. **GitHub Pages vs Netlify** — run both, or disable GH Pages? No cost either
   way; purely a "two URLs to keep straight" call.
2. **RESOLVED — audio pipeline, now run for the whole course.** Run
   incrementally across eight sessions: Weeks 1–4 (558 clips), Weeks 5–6
   (+271), Week 7 (+130), Week 8 (+132), Week 9 (+132), Week 10 (+126), Week
   11 (+128), Week 12 (+144) — **1621 clips total across all 84 lessons**,
   ~42,753 chars (well inside Azure F0's 500K/month). `public/audio/` holds
   real Azure audio for every lesson; the content-hash cache proved itself
   safe across all eight incremental runs. If a lesson's text is ever edited,
   re-run `npm run audio` — it regenerates only the changed clips.
3. **When to get native review — NOW THE #1 BLOCKER.** Person will do the
   review together "when the right person is near." With all 12 weeks now
   content-complete, this is the single biggest thing standing between the
   course and a real learner. It must cover text AND audio (TTS reads wrong
   French fluently, so listening matters), and it gates any B1 (Block F)
   drafting (§11.5). Everything grammar-heavy from A2 (both past tenses,
   agreement, the futur proche, the imparfait) is exactly where a wrong form
   would teach a wrong instinct — so the listening pass matters most there.
4. **RESOLVED — audio discrepancy.** `speechSynthesis.getVoices()` race in
   `src/main.js`, fixed by caching voices via `onvoiceschanged`. Netlify never
   runs an audio step (confirmed via `netlify.toml`); both tests were the same
   browser-fallback path, one won the timing race. Superseded by #2 above —
   `public/audio/` now holds real clips, so this is moot for any visitor going
   forward; browser TTS is only a fallback for ungenerated content (none right
   now).
5. **Nav hierarchy levels (person-decided, option b) — IMPLEMENTED this
   session.** Four level tabs A1/A2/B1/B2. Live rule: a level is live iff it
   contains ≥1 BUILT week; else greyed "à venir." Today only A1 is live; A2
   auto-activates when Week 8 lands (data-driven, no code change). B1/B2 stay
   greyed permanently under honest-scope (course caps at strong A2, spec
   §0/§7). Built in src/main.js (LEVELS model + renderNav) + index.html (tier
   containers) + src/styles.css (tier styles). A1-vs-A2 boundary (proposed A2
   = Week 8+, passe compose onset) still flagged for the native reviewer to
   move — changing it is a one-line edit to the LEVELS array. Open follow-up:
   browser eyeball via `npm run dev` (mirror can't render/click).
6. **Scope beyond A2 (B1+)** — planning sketch in CLAUDE.md §11. Hard trigger:
   do NOT start drafting Block F (Week 13) until Weeks 1–2 have a native review
   back. Push back once before complying if asked to override.

## Session log (append, don't rewrite)

- **Session — Weeks 1–2 built, single-file demo.** Built the engine and Days
  1–7 as one HTML file first, to validate the rendering-from-data approach
  before investing in a real repo structure.
- **Session — Vite migration + Week 2 content.** Migrated to a proper Vite
  repo specifically to kill the lesson-data-in-two-places problem. Added
  persistence (`storage.js`) and the Leitner SRS. Wired GitHub Actions.
- **Session — Week 3 content drafted.** Written to `src/lessons/week3.mjs`
  directly on the machine. Session ended on a usage timeout before Week 3 was
  wired or validated.
- **Session — process/handoff session.** No content built. Set up `CLAUDE.md`,
  this file, `netlify.toml`, Project instructions. Diagnosed the GitHub Pages
  custom-domain error (URL pasted into the wrong field).
- **Session (audio bug fix + B1 planning).** Fixed the getVoices() race in
  src/main.js (Open Decision #4). Wrote CLAUDE.md §11 (B1 planning, gated
  behind native review). Revised the beyond-A2 estimate to ~10–14 weeks.
- **Session (Week 3 wiring + full-set verification).** Wired Week 3; verified
  via a real mirror `vite build` (9 modules) and a 21-lesson audio-key/recall
  dry-run (PASS: 316 units, 0 dups). Held both gates.
- **Session (Week 4 content + create_file incident).** Drafted Week 4 (Days
  22–28: directions & the métro) to the house style and wired it into
  `index.mjs`. **Incident:** first wrote the file with the container
  `create_file` + a `C:\...` path — it reported success but wrote to the
  assistant's own Linux fs (`/C:\Users\...`), NOT the Windows disk, while the
  `Filesystem:edit_file` import edit DID land — briefly leaving the repo
  importing a nonexistent `week4.mjs`. Caught it by verifying on disk (the copy
  tool failed → stat failed → dir listing showed no week4). Salvaged the intact
  container file, rewrote it to the real disk with `Filesystem:write_file`
  (confirmed 43,536 bytes on disk), and recorded the gotcha above. Then
  verified: real mirror `vite build` = 10 modules, no errors, four weeks
  bundled; 28-lesson dry-run PASS (417 unique audio units, 0 dup keys, 0
  missing say/key, all 96 recall answers in range). Counts d1–28: 28 lessons /
  558 clips / 11,993 chars. Agreed a two-part split with the person to avoid
  usage-limit cutoffs: Week 4 content this session, nav hierarchy refactor
  next. Person confirmed native review of Weeks 1–4 will happen "when the right
  person is near." Did NOT start Week 5 and did NOT run the Azure pipeline.
- **Session (nav hierarchy refactor).** Refactored the day navigation from a
  flat ~84-chip row into three data-driven tiers: level tabs -> week pills ->
  per-week day chips. Added a LEVELS model + `renderNav()` to src/main.js
  (replacing the flat-chip block inside syncHeader; rest of the renderer
  untouched), tier containers to index.html (#levels/#weeks/#days, replacing
  #stations), and tier styles to src/styles.css matching the existing pill
  language. Live rule = option b (a level is live iff it has >=1 built week):
  today A1 live, A2/B1/B2 greyed "a venir"; A2 self-activates when Week 8
  lands. Verified on the mirror: `vite build` = 10 modules, no errors; a pure
  logic check against real LESSONS confirmed A1 live / A2/B1/B2 greyed / week
  pills 1-4 built + 5-7 locked / correct per-week day chips. Held the
  process line: showed the plan before touching main.js, used Filesystem tools
  (not the container create_file this time). One check left uncovered by a
  headless mirror: a browser eyeball of the actual render/click via `npm run
  dev`. Also delivered (chat-only, no repo change) the exact Azure Speech F0
  key steps and the GitHub-Actions-vs-npm testing/deploy explanation, incl. the
  Windows PowerShell env-var syntax and the key fact that audio is generated
  locally + committed (never in CI).
- **Session (Claude Code handoff setup).** Prepared the repo to be taken over
  by Claude Code as the local build agent (claude.ai is now advisor-only).
  Added CLAUDE.md §12 (operating manual: local execution, verify-by-running,
  git discipline, .env/secrets, process gates, wrap ritual, validator harness
  spec). Closed a real secret-leak gap: `.gitignore` now excludes `.env`
  (+ `.env.*`, keeping `.env.example`). Added `.env.example` template. Made
  `npm run audio` work from a local `.env` on any Node >=18 by adding a
  zero-dependency `.env` loader to generate-audio.mjs (tested: parses keys,
  trims whitespace, strips quotes, skips comments; real shell vars still win).
  No lesson content or renderer logic changed. Outstanding work (Week 4, nav
  refactor, this setup) is still UNCOMMITTED on disk — the first Claude Code
  session commits it. Also gave the person the exact Azure-key -> `.env` steps
  and the two ready-to-paste Claude Code prompts (takeover; audio run).
- **Session (Claude Code's first real build session).** Took over as the local
  build agent per CLAUDE.md §12. Verified `npm run build` for real (not a
  mirror): 10 modules, 0 errors, matches the numbers claude.ai had projected.
  Started `npm run dev` and eyeballed the nav hierarchy live in a browser:
  A1/A2/B1/B2 level tabs render correctly (only A1 clickable, others inert
  "à venir" spans that fail to click); week pills 1-4 live, 5-7 correctly
  inert/locked; clicking into Week 4 -> Day 22 loads the real lesson content
  with correct day chips; no console errors. This closes the browser-eyeball
  check flagged as open at the end of the nav-refactor session. Created
  `dryrun.mjs` and `counts.mjs` in-repo per §12.3 (they didn't exist on disk
  yet, only conceptually on the old mirror) and wired `npm run dryrun` /
  `npm run counts`; both pass and match the prior mirror numbers exactly (28
  lessons, 417 unique audio keys, 558 clips, 11,993 chars). Confirmed
  `.gitignore` excludes `.env`/`.env.*` and `.env.example` exists with no real
  secret. Committed all outstanding work in four focused commits (nav
  refactor; .env/.gitignore/loader setup; the two validators; the CLAUDE.md
  §12 operating-manual docs) and pushed to `main`. Did NOT draft Week 5, did
  NOT touch B1/Block F, did NOT add any dependency — all per the standing
  process gates. Rewrote this file's mirror-era gotchas section as historical
  context now that builds run directly on the machine.
- **Session (first real audio run).** Person put a real Azure Speech key in
  `.env`; ran `npm run audio` for the first time ever. Generated 558 clips
  (417 base + 141 `_slow`) across all 28 lessons, ~11,993 characters, 0
  failures. While verifying real-clip playback in a browser, found that
  `audio/clips.json` failed to parse as JSON — `generate-audio.mjs` wrote it
  twice, first as valid JSON then overwritten with a `window.AUDIO_CLIPS =
  {...}` script wrapper, and `main.js`'s `fetch(...).then(r => r.json())`
  silently failed on the wrapped format (caught by an existing `.catch(() =>
  {})`), meaning `AUDIO_CLIPS` would have stayed empty and every clip kept
  falling back to browser TTS regardless of the pipeline having run. Fixed by
  removing the second (wrapper) write. Re-ran `npm run audio` (0 regenerated,
  558 cache-hit, confirming the content-hash cache correctly left the mp3s
  alone) and verified for real in a browser: `audio/clips.json` fetches and
  parses (558 entries), and clicking a phonics/vocab say-button loads the
  actual mp3 (`206 Partial Content` in the network tab) instead of invoking
  `speechSynthesis`. Committed in two commits (the bug fix; then the 558
  mp3s + clips.json + manifest.json, ~20 MB) and pushed to `main`. Resolves
  Open Decision #2. Flagged clearly: native-speaker listening review of
  Weeks 1–4 is still the hard gate before any real learner (CLAUDE.md §8.2)
  — audio existing and sounding plausible to a non-native reviewer is not
  the same thing as that gate being satisfied.
- **Session (Week 5 content drafted).** Drafted Days 29–35 (l'heure & daily
  routine) against curriculum-spec.md §3 Block B: telling time both
  informally (et quart/et demie/moins le quart, with the "counts down to
  the next hour" trap flagged) and on the 24h clock; reflexive verbs
  (se lever/se coucher family, including the e→è stem change and the
  me/te/se → m'/t'/s' elision); the irregular faire (including the
  faisons-as-schwa and faites-breaks-the-ez-pattern quirks); être en train
  de for right-now actions (with the reflexive-pronoun-stays-matched-to-
  subject note); days of the week + light month coverage; and Paris's
  fermeture culture (lunch closures, Sunday, differing museum weekday
  closures) as the week's Paris note. Wired into src/lessons/index.mjs.
  Fixed a naming typo caught before commit (a vocab key had picked up a
  copy-paste artifact, `d31_v_secoucherdoucher` instead of
  `d31_v_sedoucher`). Verified for real: `npm run build` (11 modules, 0
  errors), `npm run dryrun` (35 lessons, 522 unique keys, all recall
  answers in range), `npm run counts` (695 clips/15,781 chars total, Week
  5 alone: 137 clips). Walked through Day 29 (all step types) and Day 35's
  review (chained dialogue, answered all 6 recall questions via the real
  UI, confirmed the SRS step renders cleanly with 259 vocab items now
  indexed, checked the streak/completion/next-week-teaser on wrap) live in
  a browser — zero console errors. Confirmed Week 5 audio correctly falls
  back to browser TTS (its clips aren't in clips.json yet — expected, not a
  bug; a separate `npm run audio` run is the follow-up side task). One
  content unit only, per CLAUDE.md §8.1 — did not start Week 6. Committed
  and pushed. Native review of Weeks 1–5 remains the hard gate before any
  real learner.
- **Session (Week 6 content drafted, plus Weeks 5–6 audio).** Drafted Days
  36–42 (shopping & description) against curriculum-spec.md §3 Block C:
  demonstratives ce/cet/cette/ces (distinguishing cet's vowel-triggered
  allomorphy from ces's true liaison); adjective agreement via colors
  (including blanc→blanche's genuine irregularity and orange's total
  invariance) and BAGS placement (petit/grand/bon/mauvais/joli/jeune/vieux
  before the noun) — the spec's explicit adjective-liaison phonics target,
  covered with three distinct liaison consonants (petit's t, bon's
  denasalized n, grands's z); clothes and sizes (the -ille glide with
  ville/mille/tranquille as the documented exception); quantity words
  (beaucoup de/un peu de/trop de/assez de/pas de, explicitly contrasted
  with week 3's du/de la/des article-bearing partitive); and les soldes vs
  le marché vs le supermarché as the week's Paris note (twice-yearly
  regulated sale windows; no-haggling norm). Wired into
  src/lessons/index.mjs. Verified for real: `npm run build` (12 modules, 0
  errors), `npm run dryrun` (42 lessons, 622 unique keys, all recall
  answers in range), `npm run counts` (829 clips/19,126 chars total, Week 6
  alone: 134 clips). Walked through Day 36 (phonics/vocab/dialogue) and Day
  42's review (chained 7-turn dialogue, all 6 recall questions answered via
  the real UI, SRS step with 307 vocab items indexed, wrap/streak/stats)
  live in a browser — zero console errors. One content unit only, per
  CLAUDE.md §8.1 — did not start Week 7. Then, as the session's optional
  side task, ran `npm run audio` again: generated 271 new clips covering
  both Week 5 and Week 6 (558 Weeks-1–4 clips correctly left untouched by
  the content-hash cache), and verified in a browser that a Week 6 clip
  (`d36_cepull`) loads as a real mp3 instead of falling back to browser
  TTS. All six built weeks now have real Azure audio. Committed in three
  commits (content, audio, this STATE.md update) and pushed. Native review
  of Weeks 1–6 remains the hard gate before any real learner.
- **Session (Week 7 content + audio — A1 block complete).** Drafted Days
  43–49 (home & neighborhood) against curriculum-spec.md §3 Block C, the
  last A1 week: possessives mon/ma/mes (the spec's mon/ma nasal-contrast
  phonics; the agree-with-the-owned-noun-not-the-owner rule; mon-before-
  feminine-vowel echoing week 6's cet) then ton/ta/tes and son/sa/ses
  (son/sa = his OR her, object's gender); rooms (la pièce vs la chambre);
  furniture; the regular -ir verb group (finir/choisir/réfléchir/réussir,
  -iss- plural signature, with an honest note that partir/dormir are
  irregular — §8.4 discipline, not overgeneralizing); floors + prepositions
  (rez-de-chaussée vs premier étage off-by-one, au + ordinal reusing week
  4); le quartier + gardien/concierge Paris note. Held it strictly present-
  tense/function-first A1 — passé composé deliberately deferred to week 8.
  Wired into index.mjs. Verified for real: build (13 modules, 0 errors),
  dryrun (49 lessons, 720 unique keys, all recall in range), counts (959
  clips/22,585 chars, 130 for week 7); live browser walkthrough of Day 43
  (all 7 step types) and Day 49 review (6-turn dialogue, all 6 recall
  answered via the real UI, SRS with 355 vocab items, wrap teasing week 8)
  — zero console errors. Fixed a duplicate recall option before commit
  (Day 49 Q3 distractor). Confirmed the A1→A2 nav boundary renders
  correctly (no locked pills left in A1; A2/B1/B2 greyed). Then ran
  `npm run audio` (optional follow-up): +130 Week 7 clips, 829 unchanged,
  959 total — verified `d43_monfrere` loads as a real mp3 in-browser. All
  seven A1 weeks now have real Azure audio. Committed in three commits
  (content, audio, this STATE.md update) and pushed. One week only, per
  §8.1 — did NOT start Week 8. Native review of Weeks 1–7 remains the hard
  gate before any real learner.
- **Session (Week 8 content + audio — first A2 week, passé composé).**
  Drafted Days 50–56 (talking about the past I) against curriculum-spec.md
  §3, the first A2 week and the hardest single topic. Built the passé
  composé with **avoir** deliberately across the whole week per §11.2's
  grammar-weight caution: formula + -er participles with the -é/-er/-ez
  homophone phonics (50), full avoir paradigm + -ir participles + the
  no-agreement-with-avoir rule + ils-ont/ils-sont contrast (51), the six
  irregular participles fait/eu/vu/pris/bu/été incl. eu=/y/ (52), negation
  (53), questions + weekend vocab (54), recounting with et/puis/après (55),
  review (56). Held scope discipline: **avoir only** — être-auxiliary,
  agreement, and the d'abord/ensuite/enfin set are Week 9's, flagged as
  "next week" in tips rather than smuggled in early. Wired into index.mjs.
  Verified: build (14 modules, 0 errors), dryrun (56 lessons, 819 unique
  keys, all recall in range), counts (1091 clips/26,362 chars, 132 for wk8).
  **The session's headline check — the A1→A2 nav transition — verified live
  in a browser and reported: A2 is now a live clickable tab (no longer
  greyed), clicking it makes Week 8 the active pill with Weeks 9–12 locked
  🔒 and the brand tag flips to "Ligne A2 · Paris"; B1/B2 stay greyed "à
  venir"; clicking A1 returns to Weeks 1–7. Confirmed the A1/A2 split
  matches the spec's block boundary — did NOT touch the LEVELS array.**
  Walked Day 50 (all 7 step types) and the Day 56 review (7-turn dialogue,
  6 recall answered via the UI, SRS, wrap teasing week 9) — zero console
  errors. Ran `npm run audio`: +132 Week 8 clips, 959 unchanged, 1091 total;
  verified `d50_jaimange` loads as a real mp3 in-browser. Committed in three
  commits (content, audio, this STATE.md update) and pushed. One week only,
  per §8.1 — did NOT start Week 9. Native review of Weeks 1–8 remains the
  hard gate before any real learner.
- **Session (header rail fix — UI only, no content).** Fixed a pre-existing
  coordinate mismatch in the progress rail: the week nodes (#ticks) were
  flex-spaced on an even i/11 axis and lit by week number, while the marker
  (#train) and green fill (#railDone) run on a per-day axis
  (frac=(day-1)/83), so mid-week the marker sat visibly past a still-grey
  node. Put the nodes on the same per-day axis (week i+1 at its week-END day
  fraction ((i+1)*7-1)/83, lit when lesson.day >= (i+1)*7); #ticks is now
  full-width with each .tick absolutely positioned + translateX(-50%)
  centered. #train/#railDone formulas unchanged. Verified in a real browser
  by measuring pixel geometry at days 1/45/49/84 (marker lands exactly on
  each week's node on that week's last day; no grey node behind the marker).
  NB for future browser verification: this headless preview doesn't paint
  frames, so the 0.5s CSS transitions on #train/#railDone freeze at t≈0 and
  make the marker/fill *measure* as stuck at 0% — inject
  `#train,#railDone{transition:none!important}` before measuring, or the
  readings lie. Single commit, pushed on green. Did NOT touch the LEVELS
  array or any lesson content.
- **Session (Week 9 content + audio — second A2 week; passé composé
  complete).** Drafted Days 57–63 (talking about the past II) against
  curriculum-spec.md §3, completing the passé composé Week 8 built with
  avoir-only: être auxiliary + movement verbs (57), the full être set +
  motion/change model + the avoir-vs-être transitive split (58), participle
  agreement + audible/silent phonics (59), negation/questions with être
  (60), sequencing d'abord/ensuite/puis/enfin to narrate a trip (61), light
  y/en intro (62), review (63). Held accuracy discipline (§8.4: closed être
  set, agreement-as-writing-rule, il-a-plu contrast) and the system-across-
  the-week pacing (§11.2). Wired into index.mjs. Verified: build (15
  modules, 0 errors), dryrun (63 lessons, 918 unique keys, all recall in
  range), counts (1223 clips/30,013 chars, 132 for wk9). Browser walkthrough
  of Day 57 (all 7 step types) + Day 63 review — notably the SRS step this
  time surfaced 32 real due cards spanning weeks 1–9 (from all the vocab
  steps entered during walkthroughs), which I graded through the actual
  flashcard UI to "32/32 sus ✓" to unlock the step; first verification where
  the review SRS queue was non-empty, confirming the cross-week Leitner
  ITEM_INDEX works end-to-end. Zero console errors. Ran `npm run audio`:
  +132 Week 9 clips, 1091 unchanged, 1223 total; verified `d57_jesuisalle`
  loads as a real mp3 in-browser. A2 nav now shows Sem 8 + Sem 9 live, Sem
  10–12 locked. Committed in three commits (content, audio, this STATE.md
  update) and pushed. One week only, per §8.1 — did NOT start Week 10.
  Native review of Weeks 1–9 remains the hard gate before any real learner.
- **Session (Week 10 content + audio — third A2 week; timeline complete).**
  Drafted Days 64–70 (le futur proche) against curriculum-spec.md §3,
  completing the past/present/future timeline. Framed the whole week as
  "aller (week 4) + infinitive" — deliberately lighter than wks 8–9 (§11.2)
  since there's nothing new to conjugate: concept + je/tu/on (64), full
  paradigm + vont/ont/sont ear-test + markers (65), negation (66), on-
  suggestions with rising-intonation phonics [spec target] (67), weather
  (68), inviting/accepting/declining with the Paris soft-no note (69),
  review with a hier/aujourd'hui/demain three-tense contrast (70). **Held
  the scope guard: futur proche ONLY — the futur simple (je mangerai) is
  explicitly excluded and named as out-of-scope in the day-64 culture note.**
  Accuracy (§8.4): aller forms/liaisons called back to week 4 not
  recontradicted; vont/ont/sont built on wks 8–9. Wired into index.mjs.
  Verified: build (16 modules, 0 errors), dryrun (70 lessons, 1014 unique
  keys, all recall in range), counts (1349 clips/33,591 chars, 126 for
  wk10). Browser walkthrough of Day 64 (all 7 step types) + Day 70 review
  (6-turn dialogue, 6 recall incl. three-tense contrast via the UI, SRS —
  "Tout est à jour" on the fresh session — wrap teasing week 11); zero
  console errors. Note: the preview server dropped mid-walkthrough once and
  was restarted — no impact, verification re-run cleanly. Ran `npm run
  audio`: +126 Week 10 clips, 1223 unchanged, 1349 total; verified
  `d64_jevaispartir` loads as a real mp3. A2 nav shows Sem 8–10 live, Sem
  11–12 locked. Committed in three commits (content, audio, this STATE.md
  update) and pushed. One week only, per §8.1 — did NOT start Week 11.
  Native review of Weeks 1–10 remains the hard gate before any real learner.
- **Session (Week 11 content + audio — fourth A2 week; the imparfait).**
  Drafted Days 71–77 (description & opinion) against curriculum-spec.md §3.
  Read the spec's Week 11 scope first and ran the requested OVERLOAD CHECK:
  the bundle (imparfait + comparatives + opinions + -re verbs) fits 7 days
  without cramming the imparfait, so built it as a 3-day spine (formation 71
  / use 72 / light PC-contrast 73) with comparatives (74), opinions (75),
  and the prendre family + café-debate (76) each one focused day, review
  (77). Reported outcome: no cram, no drop, nothing shifted to Week 12
  (which is review-only by design). Spec fidelity call worth noting: the
  "-re verbs" the spec names are prendre/comprendre (irregular, half-known
  from wk3/wk8), NOT the regular attendre/vendre group the takeover-prompt
  hypothesised — followed the spec. Accuracy (§8.4): every PC/imparfait
  aspect example reasoned individually (backdrop-imparfait + event-PC).
  Verified: build (17 modules, 0 errors), dryrun (77 lessons, 1111 unique
  keys, all recall in range), counts (1477 clips/37,618 chars, 128 for
  wk11). Browser walkthrough of Day 71 (all 7 step types) + Day 77 review
  (6-turn dialogue, 6 recall via UI, SRS "Tout est à jour", wrap teasing
  week 12); zero console errors. Ran `npm run audio`: +128 clips, 1349
  unchanged, 1477 total; verified `d71_jeparlais` loads as a real mp3. A2
  nav shows Sem 8–11 live, only Sem 12 locked. Committed in three commits
  (content, audio, this STATE.md update) and pushed. One week only, per
  §8.1 — did NOT start Week 12. Native review of Weeks 1–11 remains the hard
  gate before any real learner. **Only Week 12 (the capstone) remains to
  complete the whole 12-week course.**
- **Session (Week 12 — THE FINAL WEEK; course content-complete).** Drafted
  Days 78–84 ("Putting it together") against curriculum-spec.md §3 Block E +
  §6 — a pure consolidation week, NO new grammar. Days 78–83 each replay one
  scene/block of a day in Paris (café/greetings/register; métro/directions;
  the two past tenses at the museum; opinion/comparison; the near future;
  tu/vous register-switching with a full-circle rue/roue → tu/vous /y/-vs-/u/
  phonics callback to day 1). Day 84 = the capstone: the full 12-turn chained
  "Une journée à Paris" dialogue mixing all four tenses + register, a final
  cumulative can-do quiz (the §6 self-assessment, as a recall step), the §6
  can-do bilan (as a culture step, honest "solid A2 not B1" scope kept to the
  end), the last SRS queue, and a completion wrap. Held the §2 one-engine
  rule strictly: the self-assessment is recall+culture, and the completion
  wrap reuses the métro theme (last station = terminus) so `next` reads as
  completion — NO renderer branch, NO `if(day===84)`. Verified: build (18
  modules, 0 errors), dryrun (84 lessons, 1216 unique keys, all recall in
  range), counts (1621 clips/42,753 chars). Browser walkthrough of Day 78
  (all 7 step types) + Day 84 (the 12-turn capstone renders cleanly — the
  renderer handles the big dialogue fine; can-do quiz; SRS; bilan; completion
  wrap). **Verified the FINISHED end-state in-browser as requested: A2 tab
  has NO locked week pills (all Sem 8–12 live); on day 84 the rail marker
  sits at the terminus (100%) exactly on the week-12 node with all 12 nodes
  lit and the fill spanning the line; B1/B2 remain greyed "à venir"; the wrap
  shows 84/84 and "Prochaine station → Terminus · fin du parcours A2 …".**
  Zero console errors. Ran `npm run audio`: +144 clips, 1621 total; verified
  `d78_bonjour` loads as a real mp3. Committed in three commits (content,
  audio, this STATE.md update) and pushed. **THE 12-WEEK A1→A2 COURSE IS NOW
  CONTENT-COMPLETE.** No content remains; the #1 blocker to shipping is the
  standing native-speaker review of all 12 weeks (§8.2), which also gates B1
  (§11.5). Did NOT touch B1/Block F or add dependencies.

---

## How to resume cheaply (the point of this file existing)

Don't paste a summary of past chats into a new conversation. Instead:

> French Buddy. Read STATE.md and CLAUDE.md, then [today's goal].

If the Filesystem tool is connected, that single line gets a fresh Claude
instance to the same understanding this file represents, for the cost of two
file reads. If the Filesystem tool *isn't* available (e.g. mobile), paste this
file's contents manually — but check for the tool first.
