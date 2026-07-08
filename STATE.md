# STATE.md — French Buddy

Read this at the start of every session ("read state"). Update it before you
close ("wrap"). This file is the actual handoff mechanism — CLAUDE.md explains
the *project*, this file says *where we are in it right now*.

If this file and reality disagree (e.g. it says a week is "done" but the code
says otherwise), trust the code and fix this file — say "update STATE from
this conversation."

---

## [CURRENT PHASE]

Content build, Block B (Weeks 3–5 of 12) · **Weeks 1–4 wired & building.**
**Real Azure audio is now live** — the pipeline has been run for the first
time, all 558 clips generated and committed, and the app plays them (verified
in a real browser, not a mirror). Immediate next unit of work is **Week 5
content**. **Native-speaker listening review of Weeks 1–4 is the hard gate
before any real learner** (CLAUDE.md §8.2) — nothing above changes that;
correct-*looking* audio existing is not the same as a human confirming it
sounds right. Two standing gates still open (native review; one-week-at-a-time).

---

## Where things actually stand (verified against disk, not memory)

- **Weeks 1–2 (Days 1–14)**: written, wired, building. **Not native-reviewed.**
- **Week 3 (Days 15–21)**: written, wired, building — café, partitive, numbers
  70–100, quantities, brasserie. **Not native-reviewed.**
- **Week 4 (Days 22–28)**: written AND wired this session — the city &
  directions: `aller` + au/à la/aux, the imperative (tournez/continuez/prenez),
  the métro (direction/correspondance/sortie/Navigo), asking the way / being
  lost, prepositions of place (reusing the week-3 du/de la/des fusion), and the
  arrondissements + rive gauche/droite with light ordinals. `src/lessons/
  index.mjs` now imports WEEK4 and spreads it. **Verified against a real
  `vite build`** (mirror of the repo — see build-runs-on-a-mirror note below):
  10 modules transformed, no errors, all four weeks bundled. Passed the
  audio-key/recall dry-run over the full 28-lesson set (below).
  **Not native-reviewed.**
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
This session: ran the real Azure audio pipeline for the first time (558
clips, all committed), found and fixed the `clips.json` JSON-format bug
above, and verified real-clip playback live in a browser. The next content
unit is **Week 5**. Native review of Weeks 1–4 (text AND the now-real audio)
is still the hard gate before any real learner — nothing this session changes
that.

```
# NEXT — Week 5 content (ONE week only; review gate still open)
French Buddy. Read STATE.md and CLAUDE.md first.
Draft Week 5 (Days 29-35: l'heure & daily routine — reflexive verbs se lever/
se coucher, faire, etre en train de, 24h clock) against docs/curriculum-spec.md
SS3. One week only. Flag that native review of Weeks 1-4 (text + audio) is
still outstanding.
```

## Open decisions (need a person, not just a build step)

1. **GitHub Pages vs Netlify** — run both, or disable GH Pages? No cost either
   way; purely a "two URLs to keep straight" call.
2. **RESOLVED — when to run the audio pipeline.** Run this session: 558 real
   Azure clips generated and committed, `public/audio/` no longer empty. The
   pipeline had a real bug (see gotchas above) that would have made every
   clip fall back to browser TTS even after running it — fixed and verified
   with a live browser check (network tab showed the actual mp3 loading).
3. **When to get native review** — person will do Weeks 1–4 together "when the
   right person is near." Accepted. Still the hard gate before real learners
   and before any B1 (Block F) drafting.
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

---

## How to resume cheaply (the point of this file existing)

Don't paste a summary of past chats into a new conversation. Instead:

> French Buddy. Read STATE.md and CLAUDE.md, then [today's goal].

If the Filesystem tool is connected, that single line gets a fresh Claude
instance to the same understanding this file represents, for the cost of two
file reads. If the Filesystem tool *isn't* available (e.g. mobile), paste this
file's contents manually — but check for the tool first.
