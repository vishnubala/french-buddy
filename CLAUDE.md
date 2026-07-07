# CLAUDE.md — French Buddy

This file is the engineering reference for this repo. It answers "how does this
project work and why" so any Claude session — this one, a future one, a different
model — can get oriented by reading this file plus `STATE.md`, without the person
re-explaining the project from scratch.

Read this once per session (or when something feels inconsistent). Read `STATE.md`
every session — it's the part that actually changes.

---

## 1. What this is

A Parisian (Metropolitan) French learning web app: 12-week, 84-lesson A1→A2
curriculum, one rendering engine, lesson content as data, pre-generated Azure
neural TTS audio, localStorage persistence with a Leitner spaced-repetition
system, no backend, no accounts.

Full curriculum design — the 12-week arc, grammar/vocab/phonics sequencing,
France-specific pitfalls, the A2 can-do assessment — lives in
**`docs/curriculum-spec.md`**. That file is the pedagogical constitution; every
lesson is authored against it. This file (`CLAUDE.md`) does not repeat that
content — it covers the *engineering* side: architecture, conventions, decisions,
and workflow.

**Honest scope, stated once so it doesn't drift:** this takes a zero-French adult
to a solid A2, not B1, in ~28 hours of lesson time. Nothing in this repo should
claim otherwise. See spec §0 and §8 before writing marketing copy of any kind.

---

## 2. Architecture — the one rule that matters most

**One rendering engine (`src/main.js`), lesson content as pure data
(`src/lessons/*.mjs`).** Adding a lesson means adding a JS object with the shape
below — never adding rendering code. This is the single most important design
decision in the repo, made explicitly to avoid the failure mode of the app that
inspired this project's *don't*-list: a course whose lesson count is achieved by
duplicating components 84 times (that one hit ~130,000 lines for 84 lessons; this
one should land near 10–15k for the same count).

If you find yourself writing an `if (lesson.day === 42)` anywhere in `main.js`,
stop — that's the anti-pattern this architecture exists to prevent.

### Lesson object shape

```js
{
  day: 15, week: 3,
  title: "Au café : je voudrais…",
  durationMin: 18,
  steps: [
    { type: "intro",    eyebrow, h, body: [...] },
    { type: "phonics",  eyebrow, h, body, pairs: [{fr, ipa, en, say, key}], tip },
    { type: "vocab",    eyebrow, h, items: [{fr, en, reg, say, key}], tip },
    { type: "dialogue", eyebrow, h, body, turns: [{who, fr, en, say, key}], tip },
    { type: "recall",   eyebrow, h, questions: [{prompt, opts, answer, ok, no}] },
    { type: "srs",      eyebrow, h, body },   // review days only — flashcard queue
    { type: "culture",  eyebrow, h, body },
    { type: "wrap",     eyebrow, h, body, next }
  ]
}
```

Notes on fields that aren't self-explanatory:
- **`fr` vs `say`** — `fr` is what the learner *reads* (can include punctuation
  quirks, formatting). `say` is what gets sent to TTS. They're separate on
  purpose: if a voice misreads something (French homographs like *fils*
  son-vs-thread, *est*/*es* is/east), you fix `say` or its SSML without touching
  what's displayed.
- **`key`** — the audio identity. Must be globally unique across the *entire*
  curriculum (the pipeline throws on collision — see §5). Convention:
  `d{day}_{context}` for phonics/dialogue, `d{day}_v_{word}` for vocab.
  Dialogue turns automatically get a second clip at `{key}_slow`.
- **`reg`** — `null`, `"formal"`, or `"informal"`. Drives the register badge in
  the UI. This isn't decoration — tu/vous accuracy is a stated pedagogical
  priority in the spec (§1.4), so it needs to be correct, not just present.
- **Review days** (day 7, 14, 21…) swap `phonics`+`vocab` for `srs`, and their
  `recall` step spans the whole week rather than one lesson.

### File map

```
french-buddy/
├── index.html                     Vite entry / app shell
├── src/
│   ├── main.js                    THE renderer — the only file with rendering logic
│   ├── styles.css
│   ├── storage.js                 localStorage: streaks + Leitner SRS (see §4)
│   └── lessons/
│       ├── index.mjs              aggregator — import each week here
│       ├── week1.mjs              Days 1–7   (Foundations: être, gender, numbers 0-20)
│       ├── week2.mjs              Days 8–14  (avoir, -er verbs, negation, numbers 20-69)
│       └── week3.mjs              Days 15–21 (café, partitive, numbers 70-100) — WRITTEN, NOT YET IN index.mjs
├── generate-audio.mjs             Azure TTS pipeline → public/audio/
├── public/audio/                  pipeline output: *.mp3 + clips.json (currently EMPTY — never run)
├── docs/curriculum-spec.md        pedagogical constitution
├── .github/workflows/deploy.yml   GitHub Pages auto-deploy (configured; see §6 re: Netlify)
├── netlify.toml                   explicit Netlify build config
├── CLAUDE.md                      this file
└── STATE.md                       session-to-session pointer — read this every time
```

---

## 3. Tech stack & conventions

- **Vite** (vanilla JS, no framework) — `npm run dev` / `npm run build` / `npm run preview`.
- **No TypeScript, no framework.** Deliberate — the engine is small enough that
  the overhead isn't worth it yet. Revisit only if `main.js` starts exceeding
  ~500 lines or a second contributor needs the guardrails.
- **CSS**: hand-written custom properties (`--ink`, `--vert`, `--gold`, `--zinc`…),
  Paris-metro visual theme (rail/tick/train line = curriculum progress). No
  Tailwind, no CSS framework.
- **Fonts**: Bricolage Grotesque (display), Newsreader (body), Spline Sans Mono
  (labels/eyebrows) — loaded via Google Fonts `<link>` in `index.html`.
- **No dependencies beyond Vite itself** in `package.json`. Keep it that way
  unless there's a concrete need — this is a static, no-backend app and every
  added dependency is a thing that can go stale.

---

## 4. Persistence & spaced repetition (`src/storage.js`)

- **localStorage only.** No accounts, no backend, no cross-device sync. This is
  a stated, accepted limitation (see §7 Non-goals) — not an oversight.
- **Streak**: `completeLesson(day)` bumps the streak once per calendar day,
  idempotent on re-completion.
- **SRS**: Leitner system, levels 0–5, intervals `[1, 1, 3, 7, 16, 35]` days —
  matches `curriculum-spec.md` §5 exactly. Vocab items enroll into the schedule
  the moment their `vocab` step is first rendered (`registerItems`). Review-day
  `srs` steps pull `dueKeys()` and self-grade via `gradeItem(key, knew)`.
- Item lookup for the SRS flashcard UI is built by indexing every `vocab` item
  across all lessons by `key` (`ITEM_INDEX` in `main.js`) — this is why `key`
  uniqueness is load-bearing, not just an audio-pipeline nicety.

---

## 5. Audio pipeline (`generate-audio.mjs`)

- **Azure Neural TTS**, `fr-FR` voices. Current cast: Denise (speaker A / vocab
  default), Henri (speaker B). Consistency matters more than voice choice —
  learners anchor comprehension to familiar voices, so don't rotate voices
  lesson-to-lesson.
- **Not fr-CA.** This is Parisian/Metropolitan French by design (see spec
  target variety). "Sound like proper French, not necessarily Parisian-accented"
  (person's request, this session) doesn't change this — fr-FR *is* standard
  French-of-France; there's no separate "Parisian accent" model being used.
  The only genuinely Paris-flavored elements are the métro-line UI theme and a
  few culture notes, which cost nothing to keep.
- **Content-hash caching** (`public/audio/manifest.json`) — editing one lesson's
  text/voice/rate regenerates only that lesson's clips.
- **Dialogue turns get two clips**: normal and `{key}_slow` (rate `-25%`),
  surfaced via the 🐢 button.
- **MP3, not Opus** — deliberate, for Safari/iOS `<audio>` reliability.
- **Cost**: whole 84-lesson course projects to well under Azure's free-tier
  500K-characters/month (F0). Current 3-week total: ~280 clips, ~5.2K chars.
- **Run it**: `AZURE_SPEECH_KEY=... AZURE_SPEECH_REGION=francecentral npm run audio`
  Writes `public/audio/*.mp3` + `public/audio/clips.json`. The app fetches
  `clips.json` at startup (`src/main.js`) and prefers real clips over browser
  TTS automatically — **no wiring step, ever.** If this hasn't been run,
  everything silently falls back to `speechSynthesis` (browser TTS), which is
  the current state of the repo as of this writing.
- **Commit the mp3s.** A few MB total; makes every deploy self-contained.

---

## 6. Deployment

Two paths are configured; only one needs to be canonical:

- **Netlify** — connected to the GitHub repo, auto-deploys on push. This is the
  person's active/working path as of the last session. `netlify.toml` pins the
  build command and publish directory explicitly (build: `npm run build`,
  publish: `dist`) so this doesn't depend on UI settings that could drift.
- **GitHub Pages** — `.github/workflows/deploy.yml` is present and configured
  (Source: GitHub Actions, no custom domain field — that field is only for
  domains you *own*, entering the Pages URL itself there is the bug that
  produced the "not properly formatted" error). This still works and produces
  a second, independent URL at `vishnubala.github.io/french-buddy/`.

**Open decision, not yet made**: keep both live (harmless, free, but two URLs to
keep straight) or disable GitHub Pages now that Netlify is the working path.
No action taken either way — flagged in `STATE.md` under Open Decisions.

---

## 7. Non-goals (deliberately out of scope, don't "fix" these unprompted)

- Cross-device sync / accounts — localStorage only, by design, for now.
- B1 outcome claims — the spec caps honest scope at solid A2.
- Bulk-generating all remaining lessons in one pass — see §8, this is a
  process rule, not a technical limitation.
- A framework (React/Vue/etc.) — vanilla JS is intentional at this scale.
- Native mobile apps — this is a responsive web app / PWA-shaped site, not a
  packaged mobile app. (See "sharing with a non-coder" guidance in `STATE.md`
  history for what "runs on their phone" actually means here.)

---

## 8. Process rules (why building "one week at a time" isn't a limitation)

1. **Never bulk-generate multiple weeks of content in one pass.** The app this
   project is a deliberate improvement on failed partly *because* its ~130K
   lines and 84 lessons were mass-produced without a review cadence anyone
   could realistically sustain. Building week-by-week keeps each batch
   reviewable — by the person, and eventually by a native speaker (see next
   point). This is a standing instruction, not a one-time preference; don't
   let it get argued away by "let's just finish it" pressure in a later
   session.
2. **Native-speaker review is a hard prerequisite before any real learner sees
   this**, not a nice-to-have. Neural TTS reads *incorrect* French fluently —
   that's precisely why eyes-only review of the text isn't enough; someone
   needs to listen to the generated clips too. As of this writing, **zero
   lessons have been reviewed** and **zero audio has been generated**, so this
   gate hasn't been reached yet regardless of how much content exists.
3. **Content lives in exactly one place**: `src/lessons/weekN.mjs`. There is no
   longer a duplicate-HTML-demo version of this app — that existed for exactly
   one session early on and was retired at the Vite migration. If you ever see
   lesson data embedded directly in an `.html` file again in this repo,
   something has regressed.
4. **`say` fields, SSML, and IPA in `phonics.pairs` should be verifiable, not
   guessed** — when in doubt about a pronunciation claim (e.g., which
   consonants liaise, whether a plural is audible), the drafting session
   should reason it through explicitly the way earlier weeks did, not assert
   confidently. Getting phonics wrong is worse than omitting it, because
   learners have no way to catch it themselves.

---

## 9. Decisions log (chronological, append — don't rewrite history)

- **Single-file HTML demo → Vite project migration.** Done before Week 2
  content existed, specifically to avoid the lesson-data-in-two-places debt
  that would've compounded with every added week.
- **Leitner intervals fixed at `[1,1,3,7,16,35]`** to match the spec exactly —
  don't let `storage.js` and `curriculum-spec.md` §5 drift apart.
- **fr-FR only, never fr-CA** — target variety is Metropolitan/Parisian French,
  stated explicitly in the spec and re-confirmed when the person asked for
  "just proper French, not necessarily Parisian" (the two turned out to be the
  same thing — see §5).
- **MP3 over Opus** for the audio pipeline output — Safari/iOS `<audio>`
  compatibility, not a quality choice.
- **GitHub Actions Pages workflow added, then Netlify connected independently**
  — both now technically live; no consolidation decision made yet (§6).
- **Weeks are built one at a time, each session**, specifically as a corrective
  to the source project's bulk-generation failure mode (§8.1) — this is a
  standing process decision, re-affirm it if a future session considers
  batching multiple weeks.

---

## 10. Session templates for this repo

Adapted from the person's own best-practices conventions (`Claude - Best
Practices.md`) for this specific project. Use these shapes rather than
open-ended requests — they get better results and cost fewer tokens re-deriving
context.

**Starting a build session:**
> French Buddy. Read STATE.md and CLAUDE.md. Today: [draft Week N / run audio
> pipeline / fix X]. [Any specific constraint or change since last session.]

**Reviewing a lesson before it's considered done:**
> Review src/lessons/weekN.mjs against docs/curriculum-spec.md §3 (Week N's
> function/grammar/phonics targets). Check: (1) does every phonics claim hold
> up, (2) is tu/vous register consistent and correct, (3) any factual/grammar
> errors, (4) audio keys unique and say-fields TTS-safe. Don't just confirm it
> looks fine — actively try to find what's wrong.

**Resuming after a gap:**
> Read STATE.md. Confirm current state matches what's on disk before doing
> anything else. Then continue with [next action from STATE.md / a new
> instruction].

---

## 11. Future scope - B1 extension ("Phase 2") - PLANNING ONLY, NOT STARTED

Raised by the person; documented here so the ambition exists without pulling
focus from finishing and reviewing the current A2 scope. Nothing below is
authorized to be built yet - see the trigger condition at the end.

### 11.1 The hour math, reasoned through properly

Commonly-cited CEFR cumulative-hour benchmarks (they vary meaningfully by
source - treat as rough orientation, not fact): A1 = 80-100h, A2 = 180-200h,
B1 = 350-400h, B2 = 500-600h, all cumulative from zero.

This course's actual Weeks 1-12 content is ~26-28 hours of lesson time - a
small fraction of the 180-200h classroom benchmark for A2. That's not a
contradiction: the spec explicitly assumes supplementary immersion outside
the app (Section 0: "12 weeks... plus real listening/speaking practice"), and
spaced-repetition, function-first design is more hour-efficient than generic
classroom pacing, which includes a lot of redundant practice.

Revised estimate (correcting an earlier, less careful "24-30 additional
weeks" figure from an earlier session): the incremental classroom hours
from A2 to B1 (~170-200h) are roughly comparable to, not dramatically larger
than, zero to A2 (~180-200h). If this course holds a similar efficiency ratio
going from A2 to B1 as it did zero to A2 - an assumption, not a proven fact -
a B1 extension sized similarly to the current course is the right planning
ballpark: roughly 10-14 additional weeks (about 70-98 lessons), landing a
full A1-to-B1 course around week 22-26 total. This should be re-estimated
once a couple of B1 weeks are actually drafted and timed, not treated as firm.

### 11.2 What changes about the content, not just the volume

Design Principle #1 ("function before grammar") is why A1 to A2 works as fixed
survival phrases. It strains at B1: subjonctif triggers, the conditionnel,
plus-que-parfait, indirect/reported speech, and register-shifting are
genuinely grammar-driven, not phrase-driven. Proposed addendum for a B1 block:

> 1b. Grammar becomes the function, once functions get abstract enough.
> Ordering coffee is a fixed phrase; expressing doubt, narrating a memory with
> the right tense choice, or softening a disagreement are not - the grammar
> IS the skill being taught at that point, not scaffolding around a phrase.

### 11.3 Sketch arc (Weeks 13-24) - topics only, no lesson content

Block F - Bridging to B1 (Weeks 13-14)
plus-que-parfait; embedded/indirect questions; imparfait-vs-passe-compose as
a choice (which one, and why) rather than two separate forms; subjonctif
introduced as lexical chunks (il faut que, je veux que) before the full
paradigm.

Block G - Opinion, doubt, abstraction (Weeks 15-17)
full present subjonctif (regular plus etre/avoir/aller/faire/pouvoir/vouloir/
savoir); doubt/certainty/emotion registers; comparatives/superlatives
complete; debat/discussion register (callback to Week 11's cafe-debate note).

Block H - Hypothetical & narrative (Weeks 18-20)
conditionnel present; si-clauses type 2 (si + imparfait -> conditionnel);
discours indirect (reported speech); full multi-tense storytelling.

Block I - Real-world & professional register (Weeks 21-22)
formal correspondence/email etiquette; administrative French (prefecture,
Secu, CAF-style forms - genuinely high-value for someone actually living in
France, not just visiting); phone French; workplace register-switching.

Block J - B1 capstone (Weeks 23-24)
long multi-scene integrated narrative across all tenses/moods covered;
self-assessment against a B1 can-do list (to be written, mirroring spec
Section 6).

### 11.4 Non-goals for this phase

- Still capped at B1. No B2/C1 claim - same honesty discipline as the A2 cap.
- Still Metropolitan/Parisian French, fr-FR audio only.
- Still no framework/backend/accounts - the engine doesn't change at all for
  this; main.js is already level-agnostic (Section 2).

### 11.5 Trigger condition - do not start drafting Block F until:

Weeks 1-2 have been read by a native French speaker and feedback is back -
either clean or correctable. This is the first real quality signal on
whether the drafting approach works at all. Starting a second, harder phase
before that signal exists repeats the exact bulk-ambition failure mode this
project exists to avoid (Section 8). If a future session proposes starting
Block F without this having happened, point back here and push back, per the
Project's standing instructions.
