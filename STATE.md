# STATE.md — French Buddy

Read this at the start of every session ("read state"). Update it before you
close ("wrap"). This file is the actual handoff mechanism — CLAUDE.md explains
the *project*, this file says *where we are in it right now*.

If this file and reality disagree (e.g. it says a week is "done" but the code
says otherwise), trust the code and fix this file — say "update STATE from
this conversation."

---

## [CURRENT PHASE]

Content build · **Weeks 1–9 wired & building — all of A1 plus the first two
A2 weeks; the passé composé is now COMPLETE (avoir + être). Every built week
has real Azure audio (1223 clips, 0 on browser-TTS fallback).** Week 9 (Days
57–63, passé composé with être + agreement + sequencing + light y/en) drafted,
wired, and audio-generated this session — the **second A2 week**. A2 nav now
shows Sem 8 + Sem 9 as live pills, Sem 10–12 locked, B1/B2 greyed "à venir".
**Immediate next unit of work is Week 10 content — Plans & the near future:
le futur proche (aller + infinitive), on for suggestions, weather, and
politely making/declining plans** (per curriculum-spec.md §3 Block D, Week
10). That completes the past/present/future timeline. **Native-speaker
listening review of Weeks 1–9 is the hard gate before any real learner**
(CLAUDE.md §8.2) — nothing above changes that. Two standing gates still open
(native review; one-week-at-a-time).

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
- **Audio — incremental across sessions; now complete through Week 9.** Ran
  `npm run audio` for Weeks 5–6 (271 clips), Week 7 (130), Week 8 (132), and
  this session Week 9 (132). `public/audio/` now holds **1223 clips across
  all 63 built lessons**, committed. The content-hash cache has held across
  five separate incremental runs (each left all earlier weeks' clips
  untouched). Verified in a real browser each time via the network tab
  (`206 Partial Content` on a real mp3, not browser-TTS fallback); most
  recently `d57_jesuisalle` for Week 9. **Every built week (1–9) now has
  real Azure audio — nothing shipped is still on browser-TTS fallback.**
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

Build is now handled by **Claude Code** (local agent; see CLAUDE.md §12).
This session: drafted, wired, and audio-generated **Week 9** (Days 57–63,
passé composé with être + agreement + sequencing + light y/en), the second
A2 week — verified with a real build/dryrun/counts and a live browser
walkthrough. That completes the passé composé (avoir + être). The next
content unit is **Week 10 — Plans & the near future**: the **futur proche**
(aller + infinitive: *je vais partir*), **on** for suggestions, **weather**,
and making/declining plans/invitations politely (per curriculum-spec.md §3
Block D, Week 10). With past + present + near-future, the learner will have
the full everyday timeline. Handy continuity hook: *aller* is already deep
in the learner's hands (week 4 present, week 9 as an être-past verb) — the
futur proche just reuses it as an auxiliary-like helper. Native review of
Weeks 1–9 is still the hard gate before any real learner.

```
# NEXT — Week 10 content (ONE week only; review gate still open)
French Buddy. Read STATE.md and CLAUDE.md first.
Draft Week 10 (Days 64-70: plans & the near future — futur proche
(aller + infinitive, je vais/tu vas/on va + inf.), on for suggestions
(on va au ciné ?), weather (il fait beau/il va pleuvoir), leisure/
invitation vocab, politely accepting/declining (ça te dit ?, je veux
bien, désolé je ne peux pas); intonation-of-yes/no-questions phonics;
making-and-declining-plans-without-bluntness Paris note) against
docs/curriculum-spec.md SS3. One week only. Flag that native review of
Weeks 1-9 is still outstanding.
```

## Open decisions (need a person, not just a build step)

1. **GitHub Pages vs Netlify** — run both, or disable GH Pages? No cost either
   way; purely a "two URLs to keep straight" call.
2. **RESOLVED — when to run the audio pipeline.** Run incrementally: Weeks
   1–4 (558 clips), Weeks 5–6 (+271), Week 7 (+130), Week 8 (+132), Week 9
   (+132) — **1223 clips total across all 63 built lessons**. `public/audio/`
   holds real Azure audio for every built week; the content-hash cache has
   now proven itself safe across five separate incremental runs (0 unwanted
   regeneration of earlier weeks' clips any time). Standing practice: run
   `npm run audio` after each new week; it's cheap and additive.
3. **When to get native review** — person will do Weeks 1–4 (now 1–9, all of
   A1 plus the first two A2 weeks) together "when the right person is near."
   Accepted. Still the hard gate before real learners and before any B1
   (Block F) drafting. Note: with the whole passé composé now built (avoir +
   être + agreement), this is exactly the grammar-heavy content where TTS
   reading wrong French fluently is most dangerous — the listening review
   matters more, not less.
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

---

## How to resume cheaply (the point of this file existing)

Don't paste a summary of past chats into a new conversation. Instead:

> French Buddy. Read STATE.md and CLAUDE.md, then [today's goal].

If the Filesystem tool is connected, that single line gets a fresh Claude
instance to the same understanding this file represents, for the cost of two
file reads. If the Filesystem tool *isn't* available (e.g. mobile), paste this
file's contents manually — but check for the tool first.
