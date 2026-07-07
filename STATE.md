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
Immediate next unit of work is the **nav hierarchy refactor** (agreed split:
Week 4 content this session, nav refactor next), then Week 5 content. Two
standing gates still open below (native review; one-week-at-a-time).

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
- **Audio**: pipeline (`generate-audio.mjs`) built and tested against the
  collector logic, but **has never actually been run.** `public/audio/`
  contains only `.gitkeep`. Every clip in the live app is browser-TTS fallback.
  The person confirmed the fallback "sounds good" — but that was the *browser*
  voice, not the Azure pipeline, and it is device/browser-dependent (see
  Open Decision #4). Person plans a native review of Weeks 1–4 "when the right
  person is near" — accepted as a concrete constraint, not a dodge.
- **Persistence/SRS**: implemented and wired (`src/storage.js`). Not blocked.
- **Validation (this session, full 28-lesson set)**: audio-key collector
  dry-run (reusing the real `collectClips()`) plus extra checks — **PASS**:
  417 unique audio source units (0 duplicate keys), 0 missing `say`/`key`
  fields, all 96 recall `answer` indices in range, vocab keys unique for the
  SRS `ITEM_INDEX`. Pipeline would emit 558 clips (417 base + 141 `_slow`),
  ~11,993 chars of speech.
- **Counts (d1–28)**: 28 lessons · 558 clips · 11,993 speech chars ·
  72 phonics pairs · 204 vocab items · 141 dialogue turns · 96 recall Qs.
  Per week: W1 142 clips / W2 138 / W3 142 / W4 136.
- **Build size**: gzipped JS ~48 KB (147 KB raw) with four weeks wired
  (was ~36 KB at three weeks). Expected content growth, engine unchanged.
  `main.js` is still well under the §3 ~500-line no-framework threshold.
- **Deploy**: Netlify connected to GitHub, auto-deploying — confirmed by the
  person. GitHub Actions Pages workflow also present (`.github/workflows/
  deploy.yml`, uses `npm ci` → needs `package-lock.json` committed).
  **Open decision**: keep both live or disable GH Pages. Not decided.
- **Native review**: has not happened for any week. Hard prerequisite before
  real learners (CLAUDE.md §8.2). Person intends to do Weeks 1–4 together soon.

## ⚠️ Assistant-side gotchas (read before building on disk)

- **Use the Filesystem tools to write to the repo, NOT the container
  `create_file`.** They are different filesystems. This session, `create_file`
  with a `C:\...` path reported "success" but wrote to the *assistant's* Linux
  container at a literal path `/C:\Users\...`, leaving nothing on the Windows
  disk — while the `index.mjs` import edit (done with `Filesystem:edit_file`)
  DID land, briefly leaving the repo importing a missing `week4.mjs`. Correct
  tools: `Filesystem:write_file` (create/overwrite), `Filesystem:edit_file`
  (in-place edits). Always `Filesystem:get_file_info` or `list_directory`
  after a write to confirm it actually landed — don't trust the success string.
- **The build runs on a mirror, not the Windows repo.** The assistant's bash
  can't reach `C:\...` and can't run `npm` on the Windows machine. Verification
  builds copy the real source files into `/home/claude/fb` (Vite installed
  there) and build/validate that. Faithful because files are copied verbatim,
  but it is a mirror — run `npm run build` locally once yourself as the final
  word. The dry-run/counts harness (`dryrun.mjs`, `counts.mjs`) lives in that
  mirror.

## Next action (literal, ready to paste)

Week 4 is written, wired, and verified. **Agreed plan: the nav hierarchy
refactor is next**, then Week 5 content.

```
# NEXT — nav hierarchy refactor (UI only; no content week)
French Buddy. Read STATE.md and CLAUDE.md first.
Refactor the day navigation in src/main.js + src/styles.css from the flat row
of ~84 day chips into a hierarchy: level tabs (A1, A2 live; B1, B2 greyed-out
"à venir" per the person's request) → week pills (built weeks active, unbuilt
locked) → day chips for the selected week only. Data-driven from LESSONS; A1/A2
week split is a judgment call (proposed A2 = Week 8+, where passé composé
enters) to be flagged for a native reviewer. Build directly on disk with the
Filesystem tools, verify with a mirror `vite build`, then wrap STATE.
```

```
# THEN — Week 5 content (ONE week only; review gate still open)
French Buddy. Read STATE.md and CLAUDE.md first.
Draft Week 5 (Days 29–35: l'heure & daily routine — reflexive verbs se lever/
se coucher, faire, être en train de, 24h clock) against docs/curriculum-spec.md
§3. One week only. Flag that native review of Weeks 1–4 is still outstanding.
```

Still-useful side task whenever the person wants it: run the audio pipeline
(`npm run audio` with an Azure F0 key) to replace browser TTS with fixed clips
a native can review — see Open Decision #2.

## Open decisions (need a person, not just a build step)

1. **GitHub Pages vs Netlify** — run both, or disable GH Pages? No cost either
   way; purely a "two URLs to keep straight" call.
2. **When to run the audio pipeline** — F0 tier is effectively free (500K
   chars/month; the whole 28-lesson set is ~12K chars, ~2.4%), so waiting saves
   nothing real. Leaning "run it soon," ideally before/with the native review
   so the reviewer hears the actual shipped clips.
3. **When to get native review** — person will do Weeks 1–4 together "when the
   right person is near." Accepted. Still the hard gate before real learners
   and before any B1 (Block F) drafting.
4. **RESOLVED — audio discrepancy.** `speechSynthesis.getVoices()` race in
   `src/main.js`, fixed by caching voices via `onvoiceschanged`. Netlify never
   runs an audio step (confirmed via `netlify.toml`); both tests were the same
   browser-fallback path, one won the timing race. Fix removes the bug but does
   NOT make the fallback reliably good across devices — running the real
   pipeline is still the only guarantee. `public/audio/` still empty.
5. **Nav hierarchy levels (NEW, person-decided).** Person asked for A1/A2/B1/B2
   level tabs. Decision: A1 + A2 are the only live levels (course caps at strong
   A2 per spec §0); **B1 and B2 render as greyed-out "à venir" tabs** — roadmap
   tease, explicitly NOT implying the course delivers B1/B2 (that would be the
   over-promise the project defines itself against, §7). The A1-vs-A2 week
   boundary isn't defined in the spec (it organizes by Blocks A–E); proposed
   split A2 = Week 8+ (passé composé onset), flagged for native reviewer to
   move. To implement next session.
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

---

## How to resume cheaply (the point of this file existing)

Don't paste a summary of past chats into a new conversation. Instead:

> French Buddy. Read STATE.md and CLAUDE.md, then [today's goal].

If the Filesystem tool is connected, that single line gets a fresh Claude
instance to the same understanding this file represents, for the cost of two
file reads. If the Filesystem tool *isn't* available (e.g. mobile), paste this
file's contents manually — but check for the tool first.
