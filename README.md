# French Buddy

A data-driven Parisian French course. One rendering engine, lesson content as
data, pre-generated Azure audio, no backend. Currently: Weeks 1–2 (Days 1–14).

## Repo layout

```
french-buddy/
├── index.html                  app shell (Vite entry)
├── src/
│   ├── main.js                 THE engine — the only rendering code
│   ├── styles.css
│   ├── storage.js              localStorage persistence + Leitner SRS
│   └── lessons/
│       ├── index.mjs           aggregator — register new weeks here
│       ├── week1.mjs           Days 1–7 (content data only)
│       └── week2.mjs           Days 8–14
├── generate-audio.mjs          Azure TTS pipeline → public/audio/
├── public/audio/               mp3 clips + clips.json (pipeline output)
├── docs/curriculum-spec.md     the constitution all lessons answer to
└── .github/workflows/deploy.yml  auto-deploy to GitHub Pages
```

## Daily workflow

```
npm install        # once
npm run dev        # dev server at http://localhost:5173, hot reload
npm run build      # production build → dist/
npm run preview    # sanity-check the built dist/ locally
```

## Audio

```
AZURE_SPEECH_KEY=xxxx AZURE_SPEECH_REGION=francecentral npm run audio
```

Writes `public/audio/*.mp3` + `public/audio/clips.json`. The app fetches
clips.json at startup and prefers real clips over browser TTS — no wiring.
The content-hash cache means editing one lesson regenerates only its clips.
Commit the mp3s: ~280 clips is a few MB, and it makes deploys trivial.

Voices live in the `VOICES` block of generate-audio.mjs. Try the multilingual
voices (fr-FR-VivienneMultilingualNeural / fr-FR-RemyMultilingualNeural) vs
Denise/Henri and pick by ear — changing a voice regenerates its clips, which
is expected and nearly free (F0 tier: 500K chars/month; the whole course is
well under that).

## Adding a week of content

1. Draft `src/lessons/week3.mjs` against `docs/curriculum-spec.md` (same
   object shape as week1/week2 — the engine needs zero changes).
2. Import it in `src/lessons/index.mjs`.
3. Run the audio pipeline.
4. **Native-speaker review** — text read AND clips listened to — before the
   week is considered done. TTS reads unnatural French fluently; ears catch
   what eyes don't.

## Deploying (Vite builds it; a host serves it)

**GitHub Pages (wired up):** create a GitHub repo, push, then once in the
repo settings: Settings → Pages → Source: **GitHub Actions**. Every push to
`main` builds and deploys automatically. Site URL:
`https://<username>.github.io/<repo>/`.

```
git init && git add -A && git commit -m "French Buddy weeks 1–2"
git remote add origin https://github.com/<you>/french-buddy.git
git push -u origin main
```

**Netlify (fastest first deploy):** `npm run build`, then drag the `dist/`
folder onto https://app.netlify.com/drop. Done.

**Cloudflare Pages:** connect the repo, build command `npm run build`,
output directory `dist`.

Custom domain later: all three support it free; buy the domain separately.

## Known limits (honest list)

- Progress and SRS live in **this browser's localStorage** — clearing site
  data or switching devices resets them. That's the price of no accounts;
  an export/import button is the cheap future fix.
- The SRS enrolls vocab when a vocab step is first viewed; a brand-new user
  jumping straight to a review day correctly sees "nothing due yet."
- **No native review has happened yet.** All French is AI-drafted. Do not
  publicize before a French speaker has read the text and listened to the
  generated audio.
