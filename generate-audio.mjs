#!/usr/bin/env node
/* =============================================================================
   FRENCH BUDDY — AUDIO GENERATION PIPELINE (Azure Neural TTS, fr-FR)

   What it does
   ------------
   1. Imports lesson data from ./lessons.mjs (single source of truth — the same
      objects the app renders; audio text is never maintained separately).
   2. Walks every lesson and collects each utterance:
        phonics pairs  → 1 clip   (default voice)
        vocab items    → 1 clip   (default voice)
        dialogue turns → 2 clips  (character voice, normal + "_slow" at −25%)
   3. Skips anything already generated and unchanged (content-hash manifest),
      so editing one lesson re-generates only that lesson's clips.
   4. Writes ./audio/<key>.mp3 and ./audio-clips.js — a ready-made
      AUDIO_CLIPS map the app consumes. Drop-in: the player already checks
      this map before falling back to browser TTS.

   Setup
   -----
     1. Azure Portal → create a "Speech service" resource.
        The FREE tier (F0) includes 500K neural characters/month.
        This entire 84-lesson course is roughly 100–150K characters TOTAL
        (≈2,000–3,000 clips averaging ~40 chars) — it fits in ONE free month.
        Paid tier (S0) would cost on the order of a few dollars anyway.
     2. Note the resource's KEY and REGION (e.g. "francecentral", "westeurope").
     3. Run:
          AZURE_SPEECH_KEY=xxxx AZURE_SPEECH_REGION=francecentral node generate-audio.mjs

   Voice casting (fr-FR — France voices, deliberately NOT fr-CA)
   -----------------------------------------------------------
   Dialogue speaker "A" and "B" keep the SAME voice across all 84 lessons.
   Consistency matters: learners anchor comprehension to familiar voices.

   Honest limits (read before trusting the output)
   ----------------------------------------------
   - Neural TTS is much better than browser TTS; it is NOT a native speaker.
     It renders unnatural sentences fluently — which hides script problems.
   - Required QA: a native listen-through of the generated clips (not just the
     text). Flag clips with odd liaison, wrong homograph reading (e.g. "est"
     east vs is, "fils" son vs threads), or flat dialogue prosody.
   - Fixes for bad readings: adjust SSML (<sub>, <phoneme>, punctuation), or
     re-spell the `say` field in lessons.mjs (the display `fr` field is
     untouched — that's why `say` exists as a separate field).
   - MP3 output is chosen for Safari/iOS compatibility (Opus is smaller but
     unreliable in the <audio> element on Apple devices).
   ============================================================================= */

import { LESSONS } from "./src/lessons/index.mjs";
import { LISTENING } from "./src/listening/sets.mjs";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";

/* ---------- .env loader (zero-dependency; reads ./.env if present) --------
   Lets `npm run audio` work from a local .env file on any Node >= 18, with no
   --env-file flag (Node 20.6+ only) and no dotenv package (kept dependency-free
   per CLAUDE.md §3). Real shell env vars take precedence over the file. */
(function loadEnv() {
  if (!existsSync(".env")) return;
  for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
    if (line.trim().startsWith("#")) continue;
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    const v = m[2].replace(/^['"]|['"]$/g, "");
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
})();

/* ---------- config ---------- */
const KEY    = process.env.AZURE_SPEECH_KEY;
const REGION = process.env.AZURE_SPEECH_REGION || "francecentral";
const OUT_DIR      = "public/audio";
const MANIFEST     = "public/audio/manifest.json";
const CLIP_MAP_OUT = "public/audio/clips.json";
const FORMAT = "audio-24khz-96kbitrate-mono-mp3";
const SLOW_RATE = "-25%";                     // learner-friendly, not comically slow
const PAUSE_MS = 200;                         // be polite to the API
const MAX_RETRIES = 4;

const VOICES = {
  A:       "fr-FR-DeniseNeural",   // dialogue speaker A — consistent everywhere
  B:       "fr-FR-HenriNeural",    // dialogue speaker B
  default: "fr-FR-DeniseNeural",   // vocab & phonics
};

/* ---------- collect utterances from lesson data ---------- */
function collectClips() {
  const clips = [];
  const seen = new Set();
  const push = (c) => {
    if (!c.key || !c.text) return;
    if (seen.has(c.key)) throw new Error(`Duplicate audio key: ${c.key}`);
    seen.add(c.key);
    clips.push(c);
  };

  for (const lesson of LESSONS) {
    for (const step of lesson.steps) {
      if (step.type === "phonics") {
        for (const p of step.pairs ?? [])
          push({ key: p.key, text: p.say, voice: VOICES.default, rate: "0%" });
      }
      if (step.type === "vocab") {
        for (const it of step.items ?? [])
          push({ key: it.key, text: it.say, voice: VOICES.default, rate: "0%" });
      }
      if (step.type === "dialogue") {
        for (const t of step.turns ?? []) {
          const voice = VOICES[t.who] ?? VOICES.default;
          push({ key: t.key,           text: t.say, voice, rate: "0%" });
          push({ key: t.key + "_slow", text: t.say, voice, rate: SLOW_RATE });
        }
      }
    }
  }

  /* L'Entraînement · listening passages — one clip per line, speaker voice by
     `who`, exactly like dialogue turns (no _slow: replay is unlimited at normal
     speed). Same content-hash cache + dup-key guard as everything else. */
  for (const level of LISTENING.levels) {
    for (const set of level.sets) {
      for (const p of set.passages) {
        for (const ln of p.lines ?? []) {
          const voice = VOICES[ln.who] ?? VOICES.default;
          /* `say` carries display niceties (&nbsp; before ?!:) — strip to a
             plain space so TTS never voices the entity. */
          push({ key: ln.key, text: ln.say.replace(/&nbsp;/g, " "), voice, rate: "0%" });
        }
      }
    }
  }

  return clips;
}

/* ---------- SSML ---------- */
const escapeXml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const toSSML = (c) =>
  `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="fr-FR">` +
  `<voice name="${c.voice}"><prosody rate="${c.rate}">${escapeXml(c.text)}</prosody></voice>` +
  `</speak>`;

const contentHash = (c) =>
  createHash("sha256")
    .update([c.text, c.voice, c.rate, FORMAT].join("|"))
    .digest("hex")
    .slice(0, 16);

/* ---------- Azure REST call with retry ---------- */
async function synthesize(c) {
  const url = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": FORMAT,
        "User-Agent": "french-buddy-audio-pipeline",
      },
      body: toSSML(c),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429 || res.status >= 500) {
      const wait = 1000 * attempt * attempt;
      console.warn(`  ${c.key}: HTTP ${res.status}, retrying in ${wait}ms…`);
      await new Promise((r) => setTimeout(r, wait));
      continue;
    }
    throw new Error(`${c.key}: HTTP ${res.status} — ${await res.text()}`);
  }
  throw new Error(`${c.key}: gave up after ${MAX_RETRIES} retries`);
}

/* ---------- main ---------- */
async function main() {
  if (!KEY) {
    console.error(
      "Missing AZURE_SPEECH_KEY.\nRun:\n  AZURE_SPEECH_KEY=xxxx AZURE_SPEECH_REGION=francecentral node generate-audio.mjs"
    );
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });

  let manifest = {};
  try { manifest = JSON.parse(await readFile(MANIFEST, "utf8")); } catch {}

  const clips = collectClips();
  const totalChars = clips.reduce((n, c) => n + c.text.length, 0);
  console.log(`${clips.length} clips across ${LESSONS.length} lesson(s), ~${totalChars} characters of speech.`);

  let generated = 0, skipped = 0;
  for (const c of clips) {
    const h = contentHash(c);
    const file = `${OUT_DIR}/${c.key}.mp3`;
    if (manifest[c.key] === h && existsSync(file)) { skipped++; continue; }

    process.stdout.write(`→ ${c.key}  [${c.voice}${c.rate !== "0%" ? " " + c.rate : ""}]  "${c.text}"\n`);
    const audio = await synthesize(c);
    await writeFile(file, audio);
    manifest[c.key] = h;
    generated++;
    await writeFile(MANIFEST, JSON.stringify(manifest, null, 2)); // checkpoint as we go
    await new Promise((r) => setTimeout(r, PAUSE_MS));
  }

  /* emit the map the app consumes (fetched at runtime as audio/clips.json via
     r.json() — this must stay plain JSON, not a window.AUDIO_CLIPS=... script,
     or the fetch's .json() call fails silently and every clip falls back to
     browser TTS regardless of the pipeline having run). */
  const map = Object.fromEntries(clips.map((c) => [c.key, `audio/${c.key}.mp3`]));
  await writeFile(CLIP_MAP_OUT, JSON.stringify(map, null, 2));

  console.log(`\nDone. ${generated} generated, ${skipped} unchanged (cached).`);
  console.log(`Clips in ./${OUT_DIR}/, map in ./${CLIP_MAP_OUT}.`);
  console.log(`Wire-up: nothing to do — the app fetches audio/clips.json at`);
  console.log(`startup and prefers real clips over browser TTS automatically.`);
  console.log(`\nQA reminder: have a native speaker LISTEN to the clips — TTS reads`);
  console.log(`unnatural sentences fluently, which is exactly how errors hide.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
