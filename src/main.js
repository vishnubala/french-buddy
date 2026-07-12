/* =====================================================================
   FRENCH BUDDY — LESSON ENGINE (production module)
   ONE renderer driven by lesson data from src/lessons/. Adding a lesson
   means adding a data object — never rendering code.
   ===================================================================== */
import "./styles.css";
import { LESSONS } from "./lessons/index.mjs";
import { completeLesson, isCompleted, registerItems, dueKeys, gradeItem, saveQuizResult, appendQuizAttempt, getHistory, exportData, importData, validateImport } from "./storage.js";
import { SKILL_BY_SLUG } from "./quiz/skills.mjs";
import { QUIZ_BANK } from "./quiz/bank.mjs";
import { createSession } from "./quiz/engine.mjs";
import { READING } from "./reading/sets.mjs";
import { LISTENING } from "./listening/sets.mjs";

const CURRICULUM = { totalLessons: 84, weeks: 12 };

/* ---- level / week / day hierarchy (data-driven from LESSONS) ------------
   The course delivers A1 -> strong A2 only. B1 and B2 appear as greyed
   "a venir" tabs: a roadmap tease, NOT a claim the course teaches them.
   LIVE RULE (option b): a level tab is live iff it contains at least one
   BUILT week (a week that has lessons in LESSONS). So today only A1 is live;
   A2 lights up automatically the moment Week 8 exists -- no code change. */
const LEVELS = [
  { id: "A1", weeks: [1, 2, 3, 4, 5, 6, 7] },
  { id: "A2", weeks: [8, 9, 10, 11, 12] },
  { id: "B1", weeks: [13, 14, 15, 16, 17, 18] },
  { id: "B2", weeks: [19, 20, 21, 22, 23, 24] },
];
const builtWeeks = new Set(LESSONS.map(L => L.week));
const levelLive = lvl => lvl.weeks.some(w => builtWeeks.has(w));
const levelOfWeek = w => LEVELS.find(l => l.weeks.includes(w)) || LEVELS[0];
const firstLessonOfWeek = w => LESSONS.findIndex(L => L.week === w);

/* Index every vocab item by audio key so the SRS can turn a due key
   back into a renderable card, regardless of which lesson it came from. */
const ITEM_INDEX = {};
for (const l of LESSONS)
  for (const s of l.steps)
    if (s.type === "vocab")
      for (const it of s.items) ITEM_INDEX[it.key] = it;

/* ---- Audio -----------------------------------------------------------
   generate-audio.mjs writes public/audio/clips.json (key → mp3 path).
   We fetch it at startup; if it doesn't exist yet, every playback falls
   back to the browser's French TTS voice. Real clips win when present. */
let AUDIO_CLIPS = {};
fetch("audio/clips.json")
  .then(r => (r.ok ? r.json() : {}))
  .then(m => { AUDIO_CLIPS = m; })
  .catch(() => {});

/* Browser-TTS voice caching. getVoices() is ASYNC in Chrome/Edge — on first
   call it can return an empty or partial list (including cloud "Natural"
   voices) before loading finishes, and that timing is inconsistent across
   tabs/sessions/origins. Calling it fresh inside speak() and hoping it's
   populated by then is what caused inconsistent voice quality (good in one
   tab, default/robotic in another) with NO real audio files and NO server
   involved either way — this was always the browser fallback, never the
   Azure pipeline. Cache it properly instead. This still doesn't make the
   fallback reliable across browsers/devices — it just removes this specific
   bug. Running generate-audio.mjs remains the only way to get consistent
   quality for every visitor. */
let cachedVoices = [];
function refreshVoices() {
  if ("speechSynthesis" in window) cachedVoices = speechSynthesis.getVoices();
}
if ("speechSynthesis" in window) {
  refreshVoices();
  speechSynthesis.onvoiceschanged = refreshVoices;
}

function speak(text, key, btn, slow) {
  const mapKey = slow ? key + "_slow" : key;
  if (mapKey && AUDIO_CLIPS[mapKey]) {
    const a = new Audio(AUDIO_CLIPS[mapKey]);
    flash(btn); a.play(); return;
  }
  if (!("speechSynthesis" in window)) return;
  if (!cachedVoices.length) refreshVoices(); /* one more attempt right before speaking */
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR"; u.rate = slow ? 0.6 : 0.9;
  const fr = cachedVoices.find(v => v.lang && v.lang.startsWith("fr"));
  if (fr) u.voice = fr;
  flash(btn, u);
  speechSynthesis.speak(u);
}
function flash(btn, u) {
  if (!btn) return;
  btn.classList.add("playing");
  const stop = () => btn.classList.remove("playing");
  if (u) { u.onend = stop; u.onerror = stop; } else { setTimeout(stop, 900); }
}

/* ---- state ---- */
let lessonIndex = 0;
let lesson = LESSONS[lessonIndex];
let stepIndex = 0;
let stepDone = new Array(lesson.steps.length).fill(false);
let correct = 0, attempts = 0;
let appMode = "lesson";   /* "lesson"|"quiz"|"reading"|"listening"|"progress"|"home" — what the STATION shows */
let quiz = null;          /* active diagnostic session (see src/quiz/) */
let reading = null;       /* active reading set run (see src/reading/) */
let listening = null;     /* active listening set run (see src/listening/) */
let mode = "cours";       /* TOP-LEVEL axis: "cours" | "entrainement". Chooses
                             which nav chrome + station content renders. The
                             course keeps its lessonIndex/stepIndex either way. */

const el = id => document.getElementById(id);
const stepEl = el("step"), nextBtn = el("nextBtn");

function syncHeader() {
  const ticks = el("ticks"); ticks.innerHTML = "";
  for (let i = 0; i < CURRICULUM.weeks; i++) {
    const t = document.createElement("div");
    /* Nodes share the per-day axis of #train/#railDone: week i+1 sits at its
       week-END day, and lights the moment the marker reaches it. */
    const weekEndDay = (i + 1) * 7;
    t.className = "tick" + (lesson.day >= weekEndDay ? " done" : "");
    t.style.left = ((weekEndDay - 1) / (CURRICULUM.totalLessons - 1) * 100) + "%";
    ticks.appendChild(t);
  }
  el("lessonTitle").textContent = lesson.title;
  el("lessonDur").textContent = "≈ " + lesson.durationMin + " min";
  el("stationNum").textContent = "JOUR " + String(lesson.day).padStart(2, "0");
  el("stationLabel").textContent = "Station " + String(lesson.day).padStart(2, "0") + " / " + CURRICULUM.totalLessons;
  el("weekLabel").textContent = "Semaine " + lesson.week;
  const frac = (lesson.day - 1) / (CURRICULUM.totalLessons - 1);
  el("train").style.left = "calc(" + (frac * 100) + "% - 8px)";
  el("railDone").style.width = (frac * 100) + "%";

  const tag = el("brandTag"); if (tag) tag.textContent = "Ligne " + levelOfWeek(lesson.week).id + " · Paris";
  renderNav();
}

/* ---- hierarchical navigation: level tabs -> week pills -> day chips ----
   Purely a function of the current lesson's week; no separate nav state.
   Non-live levels and unbuilt weeks render as inert <div>s, so the control
   can never point at content that doesn't exist yet. */
function renderNav() {
  const curLevel = levelOfWeek(lesson.week).id;

  /* tier 1 — level tabs (A1/A2 live as built, B1/B2 greyed "à venir") */
  const lv = el("levels"); lv.innerHTML = "";
  LEVELS.forEach(L => {
    const live = levelLive(L);
    const b = document.createElement(live ? "button" : "div");
    b.className = "level" + (live && L.id === curLevel ? " on" : "") + (live ? "" : " locked");
    if (live) {
      b.textContent = L.id;
      b.onclick = () => {
        if (L.id === curLevel) return;
        const w = L.weeks.find(x => builtWeeks.has(x));
        if (w != null) switchLesson(firstLessonOfWeek(w));
      };
    } else {
      b.innerHTML = L.id + '<span class="av">à venir</span>';
    }
    lv.appendChild(b);
  });

  /* tier 2 — week pills for the current level (built active, unbuilt locked) */
  const wkRow = el("weeks"); wkRow.innerHTML = "";
  levelOfWeek(lesson.week).weeks.forEach(w => {
    const built = builtWeeks.has(w);
    const b = document.createElement(built ? "button" : "div");
    b.className = "wk" + (w === lesson.week ? " on" : "") + (built ? "" : " locked");
    b.innerHTML = "Sem " + w + (built ? "" : '<span class="lk">🔒</span>');
    if (built) b.onclick = () => { if (w !== lesson.week) switchLesson(firstLessonOfWeek(w)); };
    wkRow.appendChild(b);
  });

  /* tier 3 — day chips for the current week only */
  const dy = el("days"); dy.innerHTML = "";
  LESSONS.forEach((L, i) => {
    if (L.week !== lesson.week) return;
    const c = document.createElement("button");
    c.className = "chip" + (i === lessonIndex ? " on" : "");
    c.innerHTML = "Jour " + L.day + (isCompleted(L.day) ? '<span class="tickmark">✓</span>' : "");
    c.onclick = () => switchLesson(i);
    dy.appendChild(c);
  });
}

function switchLesson(i) {
  const wasPractice = appMode === "quiz" || appMode === "reading" || appMode === "listening";
  stopListening();
  appMode = "lesson"; quiz = null; reading = null; listening = null;  /* any nav click leaves practice */
  if (i === lessonIndex && !wasPractice) return;
  lessonIndex = i; lesson = LESSONS[i];
  stepIndex = 0;
  stepDone = new Array(lesson.steps.length).fill(false);
  correct = 0; attempts = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  syncHeader(); renderStep();
}

/* Jump straight to a given day's lesson (used by results "revisit" links).
   Revisit links live in the quiz results, i.e. inside L'Entraînement — following
   one takes the learner into Le Cours at that day. */
function navigateToDay(day) {
  const i = LESSONS.findIndex(L => L.day === day);
  if (i < 0) return;
  if (mode !== "cours") { mode = "cours"; document.body.dataset.mode = "cours"; renderModeSwitch(); }
  switchLesson(i);
}

function renderPlatform() {
  const p = el("platform"); p.innerHTML = "";
  lesson.steps.forEach((_, i) => {
    const pip = document.createElement("div");
    pip.className = "pip" + (stepDone[i] ? " done" : "") + (i === stepIndex ? " active" : "");
    p.appendChild(pip);
  });
}

function sayBtn(text, key, slow) {
  const b = document.createElement("button");
  b.className = "say" + (slow ? " slow" : "");
  b.setAttribute("aria-label", (slow ? "Écouter lentement : " : "Écouter : ") + text);
  b.innerHTML = slow
    ? "🐢"
    : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';
  b.onclick = () => speak(text, key, b, !!slow);
  return b;
}

/* ---- the ONE renderer ---- */
function renderStep() {
  showControl(true);
  const s = lesson.steps[stepIndex];
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = s.eyebrow; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = s.h; stepEl.appendChild(h);

  if (["intro", "dialogue", "culture", "wrap", "phonics", "srs"].includes(s.type)) {
    (s.body || []).forEach((t, i) => {
      const p = document.createElement("p"); if (i === 0) p.className = "lede";
      p.innerHTML = t; stepEl.appendChild(p);
    });
  }

  if (s.type === "phonics") {
    const box = document.createElement("div"); box.className = "pairs";
    s.pairs.forEach(pr => {
      const row = document.createElement("div"); row.className = "pair";
      row.innerHTML = `<span class="fr">${pr.fr}</span><span class="ipa">${pr.ipa}</span><span class="en">${pr.en}</span>`;
      const g = document.createElement("div"); g.className = "btn-gap";
      g.appendChild(sayBtn(pr.say, pr.key));
      row.appendChild(g); box.appendChild(row);
    });
    stepEl.appendChild(box);
  }

  if (s.type === "vocab") {
    /* entering a vocab step enrolls its items into the SRS schedule */
    registerItems(s.items.map(it => it.key));
    const box = document.createElement("div"); box.className = "vocab";
    s.items.forEach(it => {
      const row = document.createElement("div"); row.className = "v";
      const txt = document.createElement("div"); txt.className = "txt";
      const reg = it.reg ? `<span class="reg ${it.reg === "formal" ? "form" : it.reg === "informal" ? "info" : ""}">${it.reg}</span>` : "";
      txt.innerHTML = `<div class="row"><span class="fr">${it.fr}</span>${reg}</div><span class="en">${it.en}</span>`;
      const g = document.createElement("div"); g.className = "btn-gap";
      g.appendChild(sayBtn(it.say, it.key));
      row.appendChild(txt); row.appendChild(g); box.appendChild(row);
    });
    stepEl.appendChild(box);
  }

  if (s.type === "dialogue") {
    const box = document.createElement("div"); box.className = "dlg";
    s.turns.forEach(t => {
      const turn = document.createElement("div"); turn.className = "turn " + (t.who === "B" ? "b" : "a");
      const who = document.createElement("div"); who.className = "who"; who.textContent = t.who;
      const bub = document.createElement("div"); bub.className = "bubble";
      bub.innerHTML = `<div class="barrow"><span class="fr">${t.fr}</span></div><div class="en">${t.en}</div>`;
      const g = document.createElement("div"); g.className = "btn-gap";
      g.appendChild(sayBtn(t.say, t.key));
      g.appendChild(sayBtn(t.say, t.key, true)); /* 🐢 slow variant */
      bub.querySelector(".barrow").appendChild(g);
      turn.appendChild(who); turn.appendChild(bub); box.appendChild(turn);
    });
    stepEl.appendChild(box);
  }

  if (s.type === "recall") renderRecall(s);
  if (s.type === "srs") renderSrs();

  if (s.type === "wrap") {
    const streak = completeLesson(lesson.day);
    const w = document.createElement("div"); w.className = "wrap-step";
    const acc = attempts ? Math.round(correct / attempts * 100) : 100;
    const nWords = lesson.steps.filter(x => x.type === "vocab").reduce((n, v) => n + v.items.length, 0);
    const rq = lesson.steps.find(x => x.type === "recall");
    const statN = nWords || (rq ? rq.questions.length : 0);
    const statL = nWords ? "mots" : "questions";
    w.innerHTML =
      `<div class="streak">🔥 ${streak}</div>
       <div class="muted" style="font-family:'Spline Sans Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase">jour${streak > 1 ? "s" : ""} de suite</div>
       <div class="stat-row">
         <div class="stat"><div class="n">${statN}</div><div class="l">${statL}</div></div>
         <div class="stat"><div class="n">${acc}%</div><div class="l">recall</div></div>
         <div class="stat"><div class="n">${lesson.day}/${CURRICULUM.totalLessons}</div><div class="l">stations</div></div>
       </div>
       <p class="muted" style="font-size:16px">Prochaine station&nbsp;→ <b>${s.next}</b></p>`;
    stepEl.appendChild(w);
    syncHeader(); /* refresh ✓ marks and streak-dependent UI */
  }

  if (s.tip) {
    const n = document.createElement("div"); n.className = "note"; n.innerHTML = "↳ " + s.tip; stepEl.appendChild(n);
  }

  renderPlatform();
  setNext();
}

/* Fisher–Yates shuffle (returns a new array). */
function shuffleArr(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

/* Shared multiple-choice primitive: renders ONE question (prompt + options +
   ok/no feedback) and calls onAnswered(isCorrect) after a choice. Used by BOTH
   the in-lesson recall step AND the diagnostic quiz — one MC renderer, never
   forked (§2). Returns the .q node; the caller appends and owns flow.

   `shuffle` is opt-in: the QUIZ passes true (so a correct answer isn't always in
   the authored slot); LESSONS omit it and keep authored order. Correctness
   travels WITH each option as a flag — we build [text, correct] pairs and grade
   on the flag, NEVER on q.answer's index — so the correct-answer highlight and
   the ok/no feedback always name the truly-correct option wherever it lands. */
function renderMCQuestion(q, onAnswered, shuffle = false) {
  const wrap = document.createElement("div"); wrap.className = "q";
  const pr = document.createElement("div"); pr.className = "prompt"; pr.innerHTML = q.prompt; wrap.appendChild(pr);
  const opts = document.createElement("div"); opts.className = "opts";
  const fb = document.createElement("div"); fb.className = "fb";
  let pairs = q.opts.map((o, oi) => ({ text: o, correct: oi === q.answer }));
  if (shuffle) pairs = shuffleArr(pairs);
  pairs.forEach(p => {
    const btn = document.createElement("button"); btn.className = "opt"; btn.textContent = p.text;
    btn.onclick = () => {
      [...opts.children].forEach(c => c.disabled = true);
      if (p.correct) { btn.classList.add("correct"); fb.className = "fb ok"; fb.innerHTML = "✓ " + q.ok; }
      else {
        btn.classList.add("wrong");
        [...opts.children].forEach((c, ci) => { if (pairs[ci].correct) c.classList.add("correct"); });
        fb.className = "fb no"; fb.innerHTML = "✗ " + q.no;
      }
      onAnswered(p.correct);
    };
    opts.appendChild(btn);
  });
  wrap.appendChild(opts); wrap.appendChild(fb);
  return wrap;
}

function renderRecall(s) {
  let answered = 0;
  s.questions.forEach(q => {
    /* no shuffle — lessons keep authored option order */
    const node = renderMCQuestion(q, isCorrect => {
      attempts++; if (isCorrect) correct++;
      answered++; if (answered === s.questions.length) unlock();
    });
    stepEl.appendChild(node);
  });
  lock("Réponds à tout");
}

/* ---- SRS flashcards: due items from ANY lesson, self-graded ---- */
function renderSrs() {
  const queue = dueKeys().map(k => ITEM_INDEX[k]).filter(Boolean);
  const box = document.createElement("div"); box.className = "card";
  stepEl.appendChild(box);

  if (!queue.length) {
    box.innerHTML = `<div class="front">Tout est à jour ✓</div>
      <div class="back">No cards due. They appear here as you study vocab and the schedule brings items back.</div>`;
    stepDone[stepIndex] = true;
    return;
  }

  let i = 0, knew = 0;
  const show = () => {
    if (i >= queue.length) {
      box.innerHTML = `<div class="front">${knew}/${queue.length} su${knew > 1 ? "s" : ""} ✓</div>
        <div class="back">Missed cards return tomorrow; known ones move further out. That's the whole system.</div>`;
      unlock();
      return;
    }
    const it = queue[i];
    box.innerHTML = `<div class="count">carte ${i + 1} / ${queue.length}</div>
      <div class="front">${it.fr}</div><div class="back"></div>`;
    const audioRow = document.createElement("div"); audioRow.className = "row";
    audioRow.appendChild(sayBtn(it.say, it.key));
    box.appendChild(audioRow);

    const reveal = document.createElement("button");
    reveal.className = "btn"; reveal.textContent = "Voir la réponse";
    reveal.onclick = () => {
      box.querySelector(".back").textContent = it.en;
      reveal.remove();
      const row = document.createElement("div"); row.className = "row";
      const good = document.createElement("button"); good.className = "btn good"; good.textContent = "Je savais ✓";
      const bad  = document.createElement("button"); bad.className  = "btn bad";  bad.textContent  = "À revoir ✗";
      good.onclick = () => { gradeItem(it.key, true);  knew++; i++; show(); };
      bad.onclick  = () => { gradeItem(it.key, false); i++; show(); };
      row.appendChild(good); row.appendChild(bad); box.appendChild(row);
    };
    box.appendChild(reveal);
  };
  lock("Termine tes cartes");
  show();
}

function lock(label) { nextBtn.disabled = true; nextBtn.className = "next"; nextBtn.innerHTML = label; }
function unlock() { stepDone[stepIndex] = true; renderPlatform(); setNext(); }

function setNext() {
  const last = stepIndex === lesson.steps.length - 1;
  const s = lesson.steps[stepIndex];
  if ((s.type === "recall" || s.type === "srs") && !stepDone[stepIndex]) {
    lock(s.type === "srs" ? "Termine tes cartes" : "Réponds à tout");
    return;
  }
  nextBtn.disabled = false;
  if (last) {
    if (lessonIndex < LESSONS.length - 1) {
      const nxt = LESSONS[lessonIndex + 1];
      nextBtn.className = "next done";
      nextBtn.innerHTML = `Station suivante : Jour ${nxt.day} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
      nextBtn.onclick = () => switchLesson(lessonIndex + 1);
    } else {
      nextBtn.className = "next done";
      nextBtn.innerHTML = "Terminé · à demain";
      nextBtn.onclick = () => { nextBtn.disabled = true; };
    }
    return;
  }
  nextBtn.className = "next";
  nextBtn.innerHTML = 'Continuer <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  nextBtn.onclick = advance;
}

function advance() {
  const s = lesson.steps[stepIndex];
  if (s.type !== "recall" && s.type !== "srs") stepDone[stepIndex] = true;
  if (stepIndex < lesson.steps.length - 1) {
    stepIndex++; window.scrollTo({ top: 0, behavior: "smooth" }); renderStep();
  }
}

/* =====================================================================
   TWO-AXIS NAV — a top-level switch between Le Cours (the linear course) and
   L'Entraînement (the practice home). `mode` chooses the nav chrome + station
   content; it does NOT fork the lesson / quiz / step / MC renderers (§2). CSS
   hides the course-only chrome (rail, line-meta, nav) when data-mode is
   entrainement. The course keeps its lessonIndex/stepIndex across switches.
   ===================================================================== */

const MODES = [["cours", "Le Cours"], ["entrainement", "L'Entraînement"]];

/* Practice entries — the 3 diagnostic quizzes, relocated here from the old
   temporary quiz bar. The quizzes themselves render exactly as before. */
const PRACTICE = [
  ["a1",   "Quiz diagnostique · A1",        "Les compétences des semaines 1–7. Adaptatif, sans minuteur."],
  ["a2",   "Quiz diagnostique · A2",        "Semaines 8–12, plus les bases A1 sur lesquelles elles reposent."],
  ["mega", "Quiz diagnostique · A1–A2 méga","Toutes les compétences — le bilan diagnostique complet."],
];

const control = el("control");
function showControl(on) { if (control) control.style.display = on ? "" : "none"; }

function renderModeSwitch() {
  const bar = el("modeswitch"); if (!bar) return;
  bar.innerHTML = "";
  MODES.forEach(([m, label]) => {
    const b = document.createElement("button");
    b.className = "modebtn" + (m === mode ? " on" : "");
    b.textContent = label;
    b.onclick = () => setMode(m);
    bar.appendChild(b);
  });
}

function setMode(m) {
  if (m === mode) return;
  mode = m;
  document.body.dataset.mode = m;
  renderModeSwitch();
  stopListening();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (m === "cours") {
    /* restore the course exactly where it was — position was never touched */
    appMode = "lesson"; quiz = null; reading = null; listening = null;
    syncHeader(); renderStep();
  } else {
    renderEntrainementHome();
  }
}

/* L'Entraînement landing: a list of practice entries in the shared station
   surface. No rail (hidden via data-mode), no bottom control. */
function renderEntrainementHome() {
  appMode = "home"; quiz = null; reading = null; listening = null;
  stopListening();
  showControl(false);
  el("stationNum").textContent = "ENTRAÎNEMENT";
  el("lessonTitle").textContent = "L'Entraînement";
  el("lessonDur").textContent = "choisis un exercice";
  el("platform").innerHTML = "";
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Exercices"; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Teste-toi"; stepEl.appendChild(h);

  const list = document.createElement("div"); list.className = "practice";

  /* Ma progression — read-only history of quiz attempts (not an exercise). */
  const pcard = document.createElement("button"); pcard.className = "pcard";
  const nAttempts = getHistory().length;
  pcard.innerHTML =
    `<span class="pcard-t">Ma progression</span>` +
    `<span class="pcard-d">${nAttempts
      ? "Ton évolution sur les quiz — score global et compétences dans le temps."
      : "Ton évolution apparaîtra ici une fois un quiz terminé."}</span>`;
  pcard.onclick = () => renderProgression();
  list.appendChild(pcard);

  /* Reading comprehension — a leveled library (not a quiz). Labelled honestly
     (§7): A1–A2 in the STYLE of a TEF reading task, NOT exam prep. */
  const rcard = document.createElement("button"); rcard.className = "pcard";
  rcard.innerHTML =
    `<span class="pcard-t">${READING.label} <span class="pbadge">${READING.format}</span></span>` +
    `<span class="pcard-d">Choisis un niveau et une série, puis lis les textes et réponds. ` +
    `${READING.disclaimer}</span>`;
  rcard.onclick = () => renderReadingLevels();
  list.appendChild(rcard);

  /* Listening comprehension — the audio counterpart to reading (§7 honest scope). */
  const lcard = document.createElement("button"); lcard.className = "pcard";
  lcard.innerHTML =
    `<span class="pcard-t">${LISTENING.label} <span class="pbadge">${LISTENING.format}</span></span>` +
    `<span class="pcard-d">Écoute un audio et réponds — sans lire le texte. ` +
    `${LISTENING.disclaimer}</span>`;
  lcard.onclick = () => renderListeningLevels();
  list.appendChild(lcard);

  PRACTICE.forEach(([m, title, desc]) => {
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML = `<span class="pcard-t">${title}</span><span class="pcard-d">${desc}</span>`;
    card.onclick = () => launchQuiz(m);
    list.appendChild(card);
  });
  stepEl.appendChild(list);

  renderBackupPanel();
}

/* ---- progress backup: export/import (localStorage portability) ----
   A small utility in L'Entraînement, NOT course chrome. Reuses the home
   surface — no forked renderer (§2). Import overwrites, so it goes through an
   inline confirm; malformed/foreign files are refused without touching state. */
function renderBackupPanel() {
  const sub = document.createElement("div"); sub.className = "rsub";
  sub.textContent = "Sauvegarde de la progression";
  stepEl.appendChild(sub);

  const note = document.createElement("p"); note.className = "bk-note";
  note.innerHTML = "Télécharge un fichier <code>.json</code> pour sauvegarder ta progression " +
    "(leçons, séries, quiz) ou la transférer sur un autre appareil. " +
    "<b>L'import remplace</b> la progression enregistrée sur cet appareil.";
  stepEl.appendChild(note);

  const row = document.createElement("div"); row.className = "backup";
  const exp = document.createElement("button"); exp.className = "bk-btn";
  exp.textContent = "Exporter ma progression";
  exp.onclick = exportProgress;
  const imp = document.createElement("button"); imp.className = "bk-btn";
  imp.textContent = "Importer une progression";
  imp.onclick = () => getImportInput().click();
  row.appendChild(exp); row.appendChild(imp);
  stepEl.appendChild(row);

  const status = document.createElement("div"); status.className = "bk-status"; status.id = "bkStatus";
  stepEl.appendChild(status);
}

function setBackupStatus(kind, msg) {
  const s = el("bkStatus"); if (!s) return;
  s.className = "bk-status" + (kind ? " " + kind : "");
  s.textContent = msg;
}

function exportProgress() {
  try {
    const blob = new Blob([JSON.stringify(exportData(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "french-buddy-progress.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    setBackupStatus("ok", "Progression exportée : french-buddy-progress.json");
  } catch {
    setBackupStatus("err", "L'export a échoué sur cet appareil.");
  }
}

/* One hidden file input, created lazily and reused. */
let importInput = null;
function getImportInput() {
  if (importInput) return importInput;
  importInput = document.createElement("input");
  importInput.type = "file";
  importInput.accept = "application/json,.json";
  importInput.style.display = "none";
  importInput.onchange = () => {
    const file = importInput.files && importInput.files[0];
    importInput.value = "";   /* let the user re-pick the same file later */
    if (file) readImportFile(file);
  };
  document.body.appendChild(importInput);
  return importInput;
}

function readImportFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let obj;
    try { obj = JSON.parse(reader.result); }
    catch { setBackupStatus("err", "Fichier illisible : ce n'est pas un JSON valide."); return; }
    const check = validateImport(obj);   /* validate BEFORE any confirm/apply */
    if (!check.ok) { setBackupStatus("err", check.error); return; }
    confirmImport(obj);
  };
  reader.onerror = () => setBackupStatus("err", "Impossible de lire le fichier.");
  reader.readAsText(file);
}

/* Inline confirm (no native dialog, no forked renderer) — import overwrites. */
function confirmImport(obj) {
  const s = el("bkStatus"); if (!s) return;
  s.className = "bk-status confirm"; s.innerHTML = "";
  const msg = document.createElement("p"); msg.className = "bk-confirm-msg";
  msg.textContent = "Ceci remplacera la progression enregistrée sur cet appareil. Continuer ?";
  const row = document.createElement("div"); row.className = "backup";
  const yes = document.createElement("button"); yes.className = "bk-btn danger"; yes.textContent = "Oui, remplacer";
  const no  = document.createElement("button"); no.className = "bk-btn"; no.textContent = "Annuler";
  yes.onclick = () => {
    const res = importData(obj);
    if (res.ok) {
      setBackupStatus("ok", "Progression restaurée sur cet appareil.");
      syncHeader();   /* rebuild nav ✓ marks / rail from the restored store */
    } else {
      setBackupStatus("err", res.error || "Import impossible.");
    }
  };
  no.onclick = () => setBackupStatus("", "Import annulé — rien n'a changé.");
  row.appendChild(yes); row.appendChild(no);
  s.appendChild(msg); s.appendChild(row);
}

function launchQuiz(qmode) {
  appMode = "quiz";
  quiz = createSession(qmode, QUIZ_BANK);
  showControl(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
  el("stationNum").textContent = "QUIZ";
  el("lessonTitle").textContent = quiz.meta.label;
  el("lessonDur").textContent = "diagnostic · sans minuteur";
  el("platform").innerHTML = "";
  renderQuizItem();
}

function renderQuizItem() {
  if (appMode !== "quiz") return;
  const item = quiz.next();
  if (!item) { renderQuizResults(); return; }
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow";
  eb.textContent = quiz.phaseLabel() + " · question " + quiz.servedCount();
  stepEl.appendChild(eb);
  const h = document.createElement("h3");
  h.textContent = (SKILL_BY_SLUG[item.skill] || {}).label || "Question";
  stepEl.appendChild(h);

  const node = renderMCQuestion(item, isCorrect => {
    quiz.record(isCorrect);
    nextBtn.disabled = false;
    nextBtn.className = "next";
    nextBtn.innerHTML = 'Continuer <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    nextBtn.onclick = renderQuizItem;
  }, true);   /* quiz path: shuffle option positions */
  stepEl.appendChild(node);

  nextBtn.disabled = true; nextBtn.className = "next"; nextBtn.innerHTML = "Choisis une réponse";
}

function renderQuizResults() {
  const r = quiz.results();
  saveQuizResult({
    mode: quiz.meta.mode, at: Date.now(), overall: r.overall,
    perSkill: r.perSkill.map(s => ({ slug: s.slug, pct: s.pct, total: s.total })),
  });
  /* Append a COMPACT trend record (same numbers as the screen below — reuse r,
     don't recompute). Not the full per-question log. */
  appendQuizAttempt({
    at: new Date().toISOString(),
    quiz: quiz.meta.mode,
    overall: r.overall.pct,
    skills: Object.fromEntries(r.perSkill.map(s => [s.slug, s.pct])),
  });

  el("stationNum").textContent = "BILAN";
  el("lessonTitle").textContent = "Résultats — " + quiz.meta.label;
  el("lessonDur").textContent = "";
  el("platform").innerHTML = "";
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Bilan diagnostique";
  stepEl.appendChild(eb);
  const h = document.createElement("h3");
  h.textContent = `Score : ${r.overall.correct} / ${r.overall.total} · ${r.overall.pct}%`;
  stepEl.appendChild(h);

  const bar = pct => {
    const cls = pct >= 80 ? "hi" : pct >= 50 ? "mid" : "lo";
    return `<div class="rbar"><div class="rfill ${cls}" style="width:${pct}%"></div></div>`;
  };

  /* per-skill, weakest first — the diagnostic payload */
  const sub1 = document.createElement("div"); sub1.className = "rsub"; sub1.textContent = "Par compétence (le plus faible d'abord)";
  stepEl.appendChild(sub1);
  const skills = document.createElement("div"); skills.className = "results";
  r.perSkill.forEach(s => {
    const row = document.createElement("div"); row.className = "rrow" + (s.pct < 70 ? " weak" : "");
    row.innerHTML =
      `<div class="rhead"><span class="rlabel">${s.label}</span><span class="rscore">${s.correct}/${s.total} · ${s.pct}%</span></div>` +
      bar(s.pct);
    if (s.pct < 70) {
      const rev = document.createElement("div"); rev.className = "revisit";
      rev.appendChild(document.createTextNode("Réviser : "));
      s.weeks.slice(0, 3).forEach(w => {
        const day = (w - 1) * 7 + 1;
        const link = document.createElement("button"); link.className = "revlink";
        link.textContent = "Sem " + w + " (Jour " + day + ")";
        link.onclick = () => navigateToDay(day);
        rev.appendChild(link);
      });
      row.appendChild(rev);
    }
    skills.appendChild(row);
  });
  stepEl.appendChild(skills);

  /* per-week */
  const sub2 = document.createElement("div"); sub2.className = "rsub"; sub2.textContent = "Par semaine";
  stepEl.appendChild(sub2);
  const weeks = document.createElement("div"); weeks.className = "results";
  r.perWeek.forEach(w => {
    const row = document.createElement("div"); row.className = "rrow rweek";
    row.innerHTML =
      `<div class="rhead"><span class="rlabel">Semaine ${w.week}</span><span class="rscore">${w.correct}/${w.total} · ${w.pct}%</span></div>` +
      bar(w.pct);
    weeks.appendChild(row);
  });
  stepEl.appendChild(weeks);

  nextBtn.disabled = false; nextBtn.className = "next done";
  nextBtn.innerHTML = "Retour à l'entraînement";
  nextBtn.onclick = () => renderEntrainementHome();
}

/* =====================================================================
   L'Entraînement · Compréhension écrite — a LEVELED reading library. The entry
   leads to a level pick (A1 / A2) → a set pick → a set run. A set run shows each
   passage (rendered like an intro/body block) + its 2–4 comprehension questions
   via renderMCQuestion WITH shuffle — the SAME MC path the quiz uses, never
   forked (§2). Reading isn't skill-tagged, so the end screen is a plain score.

   HONEST SCOPE (§7): labelled "niveau A1–A2, format TEF" — A1–A2 reading in the
   STYLE of a TEF task, NOT preparation for the actual (A1–C2) TEF exam. Content
   is Claude-drafted and NOT native-reviewed (folds into the §8.2 review gate). */

/* Small in-surface back control for the pick screens (no bottom bar). */
function backLink(label, onClick) {
  const b = document.createElement("button"); b.className = "backlink";
  b.innerHTML = "‹ " + label; b.onclick = onClick;
  stepEl.appendChild(b);
}

function readingHead(stationLabel, title, dur) {
  el("stationNum").textContent = stationLabel;
  el("lessonTitle").textContent = title;
  el("lessonDur").textContent = dur;
  el("platform").innerHTML = "";
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");
}

/* Level pick (A1 / A2) — a landing like the Entraînement home. */
function renderReadingLevels() {
  appMode = "home"; quiz = null; reading = null;
  showControl(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("LECTURE", READING.label, READING.format);

  backLink("L'Entraînement", () => renderEntrainementHome());
  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Compréhension écrite"; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Choisis ton niveau"; stepEl.appendChild(h);
  const note = document.createElement("p"); note.className = "bk-note"; note.textContent = READING.disclaimer; stepEl.appendChild(note);

  const list = document.createElement("div"); list.className = "practice";
  READING.levels.forEach(lv => {
    const nPass = lv.sets.reduce((n, s) => n + s.passages.length, 0);
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML =
      `<span class="pcard-t">${lv.label} <span class="pbadge">${lv.sets.length} séries · ${nPass} textes</span></span>` +
      `<span class="pcard-d">${lv.blurb}</span>`;
    card.onclick = () => renderReadingSets(lv);
    list.appendChild(card);
  });
  stepEl.appendChild(list);
}

/* Set pick within a level. */
function renderReadingSets(lv) {
  appMode = "home"; quiz = null; reading = null;
  showControl(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("LECTURE", READING.label, lv.label);

  backLink("Niveaux", () => renderReadingLevels());
  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = lv.label; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Choisis une série"; stepEl.appendChild(h);

  const list = document.createElement("div"); list.className = "practice";
  lv.sets.forEach(set => {
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML =
      `<span class="pcard-t">${set.title} <span class="pbadge">${set.passages.length} textes</span></span>` +
      `<span class="pcard-d">${set.theme}</span>`;
    card.onclick = () => launchReadingSet(lv, set);
    list.appendChild(card);
  });
  stepEl.appendChild(list);
}

function launchReadingSet(lv, set) {
  appMode = "reading";
  reading = { level: lv, set, pi: 0, correct: 0, total: 0 };
  showControl(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("LECTURE", set.title, lv.label + " · format TEF");
  renderReadingItem();
}

function renderReadingItem() {
  if (appMode !== "reading") return;
  const passages = reading.set.passages;
  const p = passages[reading.pi];
  if (!p) { renderReadingResults(); return; }
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow";
  eb.textContent = p.type + " · texte " + (reading.pi + 1) + " / " + passages.length;
  stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = p.title; stepEl.appendChild(h);

  /* the passage — rendered like an intro/body block, inside a reading card */
  const box = document.createElement("div"); box.className = "passage";
  p.text.forEach(line => {
    const par = document.createElement("p"); par.innerHTML = line; box.appendChild(par);
  });
  stepEl.appendChild(box);

  /* comprehension questions — shared MC primitive, shuffled like the quiz */
  let answered = 0;
  p.questions.forEach(q => {
    const node = renderMCQuestion(q, isCorrect => {
      reading.total++; if (isCorrect) reading.correct++;
      answered++; if (answered === p.questions.length) unlockReadingNext();
    }, true);
    stepEl.appendChild(node);
  });

  nextBtn.disabled = true; nextBtn.className = "next"; nextBtn.innerHTML = "Réponds à tout";
}

function unlockReadingNext() {
  const last = reading.pi === reading.set.passages.length - 1;
  nextBtn.disabled = false; nextBtn.className = "next";
  nextBtn.innerHTML = last
    ? 'Voir le résultat <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
    : 'Texte suivant <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  nextBtn.onclick = () => { reading.pi++; window.scrollTo({ top: 0, behavior: "smooth" }); renderReadingItem(); };
}

function renderReadingResults() {
  const pct = reading.total ? Math.round(reading.correct / reading.total * 100) : 0;
  const lv = reading.level;
  readingHead("BILAN", "Résultats — " + reading.set.title, "");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Compréhension écrite · " + lv.label; stepEl.appendChild(eb);
  const h = document.createElement("h3");
  h.textContent = `Score : ${reading.correct} / ${reading.total} · ${pct}%`;
  stepEl.appendChild(h);

  const msg = document.createElement("p"); msg.className = "lede";
  msg.innerHTML = pct >= 80 ? "Très bien — tu comprends l'essentiel de ces textes courts."
                : pct >= 50 ? "Pas mal. Relis les textes où tu as hésité, puis recommence."
                            : "Continue — relis chaque texte lentement, phrase par phrase.";
  stepEl.appendChild(msg);

  /* offer another set at the same level without leaving the reading section */
  backLink("Autres séries de " + lv.label, () => renderReadingSets(lv));

  nextBtn.disabled = false; nextBtn.className = "next done";
  nextBtn.innerHTML = "Retour à l'entraînement";
  nextBtn.onclick = () => renderEntrainementHome();
}

/* =====================================================================
   L'Entraînement · Compréhension orale — the ONE new step type. Same leveled
   level→set→run shell as reading, but each passage PLAYS audio with NO visible
   French; the transcript is revealed ONLY after the questions are answered (the
   sole new rendering behaviour). Questions reuse renderMCQuestion WITH shuffle —
   the SAME MC path as quiz/reading, never forked (§2). Replay is UNLIMITED.

   Audio reuses the existing map + browser-TTS fallback; a passage is a sequence
   of `lines` (speaker voice baked in by generate-audio via `who`), played back
   to back by playPassage below. HONEST SCOPE (§7): "niveau A1–A2, format TEF",
   NOT real-exam prep. Content is Claude-drafted, NOT native-reviewed (§8.2). */

/* Sequential passage player — plays each line's clip (or browser-TTS fallback)
   back to back. A run token invalidates in-flight callbacks when the learner
   replays, navigates, or the passage changes, so sequences never overlap. */
let listenAudio = null, listenRun = 0;
function stopListening() {
  listenRun++;
  if (listenAudio) { try { listenAudio.pause(); } catch {} listenAudio = null; }
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  document.querySelectorAll(".listen-play.playing").forEach(b => b.classList.remove("playing"));
}
function playPassage(lines, btn) {
  stopListening();
  const myRun = listenRun;
  if (btn) btn.classList.add("playing");
  let i = 0;
  const finish = () => { if (myRun === listenRun) { if (btn) btn.classList.remove("playing"); listenAudio = null; } };
  const next = () => {
    if (myRun !== listenRun) return;              /* superseded by a newer play/stop */
    if (i >= lines.length) { finish(); return; }
    const ln = lines[i++];
    const clip = AUDIO_CLIPS[ln.key];
    if (clip) {
      const a = new Audio(clip); listenAudio = a;
      a.onended = next; a.onerror = next;
      a.play().catch(() => next());
    } else if ("speechSynthesis" in window) {
      if (!cachedVoices.length) refreshVoices();
      const u = new SpeechSynthesisUtterance(ln.say.replace(/&nbsp;/g, " "));
      u.lang = "fr-FR"; u.rate = 0.95;
      const fr = cachedVoices.find(v => v.lang && v.lang.startsWith("fr"));
      if (fr) u.voice = fr;
      u.onend = next; u.onerror = next;
      speechSynthesis.speak(u);
    } else { next(); }
  };
  next();
}

function renderListeningLevels() {
  appMode = "home"; quiz = null; reading = null; listening = null; stopListening();
  showControl(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("ÉCOUTE", LISTENING.label, LISTENING.format);

  backLink("L'Entraînement", () => renderEntrainementHome());
  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Compréhension orale"; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Choisis ton niveau"; stepEl.appendChild(h);
  const note = document.createElement("p"); note.className = "bk-note"; note.textContent = LISTENING.disclaimer; stepEl.appendChild(note);

  const list = document.createElement("div"); list.className = "practice";
  LISTENING.levels.forEach(lv => {
    const nPass = lv.sets.reduce((n, s) => n + s.passages.length, 0);
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML =
      `<span class="pcard-t">${lv.label} <span class="pbadge">${lv.sets.length} séries · ${nPass} audios</span></span>` +
      `<span class="pcard-d">${lv.blurb}</span>`;
    card.onclick = () => renderListeningSets(lv);
    list.appendChild(card);
  });
  stepEl.appendChild(list);
}

function renderListeningSets(lv) {
  appMode = "home"; quiz = null; reading = null; listening = null; stopListening();
  showControl(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("ÉCOUTE", LISTENING.label, lv.label);

  backLink("Niveaux", () => renderListeningLevels());
  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = lv.label; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Choisis une série"; stepEl.appendChild(h);

  const list = document.createElement("div"); list.className = "practice";
  lv.sets.forEach(set => {
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML =
      `<span class="pcard-t">${set.title} <span class="pbadge">${set.passages.length} audios</span></span>` +
      `<span class="pcard-d">${set.theme}</span>`;
    card.onclick = () => launchListeningSet(lv, set);
    list.appendChild(card);
  });
  stepEl.appendChild(list);
}

function launchListeningSet(lv, set) {
  appMode = "listening";
  listening = { level: lv, set, pi: 0, correct: 0, total: 0 };
  showControl(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
  readingHead("ÉCOUTE", set.title, lv.label + " · format TEF");
  renderListeningItem();
}

function renderListeningItem() {
  if (appMode !== "listening") return;
  stopListening();
  const passages = listening.set.passages;
  const p = passages[listening.pi];
  if (!p) { renderListeningResults(); return; }
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow";
  eb.textContent = p.type + " · audio " + (listening.pi + 1) + " / " + passages.length;
  stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = p.title; stepEl.appendChild(h);

  const hint = document.createElement("p"); hint.className = "listen-hint";
  hint.textContent = "Écoute l'audio, puis réponds. Tu peux réécouter autant de fois que tu veux — le texte n'apparaît qu'après tes réponses.";
  stepEl.appendChild(hint);

  /* the play control — NO French text is placed in the DOM here */
  const row = document.createElement("div"); row.className = "listen-row";
  const play = document.createElement("button"); play.className = "listen-play";
  play.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg><span>Écouter</span>';
  play.onclick = () => playPassage(p.lines, play);
  row.appendChild(play);
  stepEl.appendChild(row);

  /* comprehension questions — shared MC primitive, shuffled like the quiz */
  let answered = 0;
  p.questions.forEach(q => {
    const node = renderMCQuestion(q, isCorrect => {
      listening.total++; if (isCorrect) listening.correct++;
      answered++;
      if (answered === p.questions.length) { revealTranscript(p); unlockListeningNext(); }
    }, true);
    stepEl.appendChild(node);
  });

  nextBtn.disabled = true; nextBtn.className = "next"; nextBtn.innerHTML = "Réponds à tout";
}

/* The ONE new behaviour: the transcript is built into the DOM only now, AFTER
   the questions are answered — never before (revealing it early would turn
   listening into reading). */
function revealTranscript(p) {
  const wrap = document.createElement("div"); wrap.className = "transcript";
  const lab = document.createElement("div"); lab.className = "transcript-label"; lab.textContent = "Transcription";
  wrap.appendChild(lab);
  const multi = new Set(p.lines.map(l => l.who)).size > 1;
  p.lines.forEach(ln => {
    const line = document.createElement("p"); line.className = "tline";
    line.innerHTML = (multi ? `<span class="who-badge ${ln.who === "B" ? "b" : "a"}">${ln.who}</span>` : "") + ln.say;
    wrap.appendChild(line);
  });
  stepEl.appendChild(wrap);
}

function unlockListeningNext() {
  const last = listening.pi === listening.set.passages.length - 1;
  nextBtn.disabled = false; nextBtn.className = "next";
  nextBtn.innerHTML = last
    ? 'Voir le résultat <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
    : 'Audio suivant <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  nextBtn.onclick = () => { listening.pi++; window.scrollTo({ top: 0, behavior: "smooth" }); renderListeningItem(); };
}

function renderListeningResults() {
  stopListening();
  const pct = listening.total ? Math.round(listening.correct / listening.total * 100) : 0;
  const lv = listening.level;
  readingHead("BILAN", "Résultats — " + listening.set.title, "");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Compréhension orale · " + lv.label; stepEl.appendChild(eb);
  const h = document.createElement("h3");
  h.textContent = `Score : ${listening.correct} / ${listening.total} · ${pct}%`;
  stepEl.appendChild(h);

  const msg = document.createElement("p"); msg.className = "lede";
  msg.innerHTML = pct >= 80 ? "Très bien — ton oreille suit bien ces audios courts."
                : pct >= 50 ? "Pas mal. Réécoute les audios en lisant la transcription, puis recommence."
                            : "Continue — réécoute chaque audio plusieurs fois, puis lis la transcription.";
  stepEl.appendChild(msg);

  backLink("Autres séries de " + lv.label, () => renderListeningSets(lv));

  nextBtn.disabled = false; nextBtn.className = "next done";
  nextBtn.innerHTML = "Retour à l'entraînement";
  nextBtn.onclick = () => renderEntrainementHome();
}

/* =====================================================================
   L'Entraînement · Ma progression — a READ-ONLY trend view over the quiz
   results-history (storage.getHistory). No session, no MC engine; it renders
   in the shared station surface (no forked renderer, §2) and draws its trend
   with plain inline SVG (no charting dependency, §3). Diagnostic, not a
   leaderboard — calm and factual.
   ===================================================================== */

const QUIZ_TITLES = { a1: "Quiz diagnostique · A1", a2: "Quiz diagnostique · A2", mega: "Quiz diagnostique · A1–A2 méga" };
const QUIZ_ORDER = ["a1", "a2", "mega"];

/* A tiny sparkline of overall %s (chronological, most-recent last). */
function sparkline(vals) {
  const w = 240, h = 46, pad = 6, n = vals.length;
  const xs = i => n <= 1 ? w / 2 : pad + (i / (n - 1)) * (w - 2 * pad);
  const ys = v => pad + (1 - v / 100) * (h - 2 * pad);
  const pts = vals.map((v, i) => `${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(" ");
  const dots = vals.map((v, i) =>
    `<circle cx="${xs(i).toFixed(1)}" cy="${ys(v).toFixed(1)}" r="${i === n - 1 ? 3.4 : 2}" class="${i === n - 1 ? "sl-last" : "sl-dot"}"/>`).join("");
  const line = n > 1 ? `<polyline class="sl-line" points="${pts}"/>` : "";
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Évolution du score global">
    <line class="sl-base" x1="${pad}" y1="${ys(0).toFixed(1)}" x2="${w - pad}" y2="${ys(0).toFixed(1)}"/>
    ${line}${dots}</svg>`;
}

function deltaChip(d) {
  if (d > 0) return `<span class="delta up">▲ +${d}</span>`;
  if (d < 0) return `<span class="delta down">▼ ${d}</span>`;
  return `<span class="delta flat">— 0</span>`;
}

function backToEntrainementBtn() {
  nextBtn.disabled = false; nextBtn.className = "next done";
  nextBtn.innerHTML = "Retour à l'entraînement";
  nextBtn.onclick = () => renderEntrainementHome();
}

function renderProgression() {
  appMode = "progress"; quiz = null; reading = null;
  showControl(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
  el("stationNum").textContent = "PROGRESSION";
  el("lessonTitle").textContent = "Ma progression";
  el("lessonDur").textContent = "historique des quiz";
  el("platform").innerHTML = "";
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Historique"; stepEl.appendChild(eb);
  const h = document.createElement("h3"); h.textContent = "Ton évolution"; stepEl.appendChild(h);

  const history = getHistory();
  if (!history.length) {
    const p = document.createElement("p"); p.className = "lede";
    p.textContent = "Aucun résultat encore — termine un quiz pour voir ta progression.";
    stepEl.appendChild(p);
    backToEntrainementBtn();
    return;
  }

  QUIZ_ORDER.forEach(id => {
    const recs = history.filter(r => r.quiz === id);   /* chronological, recent last */
    if (!recs.length) return;
    const overalls = recs.map(r => r.overall);
    const latest = overalls[overalls.length - 1];
    const delta = latest - overalls[0];

    const sub = document.createElement("div"); sub.className = "rsub";
    sub.textContent = QUIZ_TITLES[id] || id;
    stepEl.appendChild(sub);

    const card = document.createElement("div"); card.className = "prog-card";
    card.innerHTML =
      `<div class="prog-head"><span class="prog-latest">${latest}%</span>` +
      `<span class="prog-meta">${recs.length} tentative${recs.length > 1 ? "s" : ""}` +
      (recs.length > 1 ? ` · depuis la 1<sup>re</sup> ${deltaChip(delta)}` : "") +
      `</span></div><div class="prog-spark">${sparkline(overalls)}</div>`;
    stepEl.appendChild(card);

    /* per-skill: latest value + change vs its earliest recorded attempt */
    const latestSkills = recs[recs.length - 1].skills || {};
    const slugs = Object.keys(latestSkills).sort((a, b) => latestSkills[a] - latestSkills[b]);
    if (slugs.length) {
      const wrap = document.createElement("div"); wrap.className = "results prog-skills";
      slugs.forEach(slug => {
        const lv = latestSkills[slug];
        const occ = recs.filter(r => r.skills && slug in r.skills).map(r => r.skills[slug]);
        const d = occ.length > 1 ? lv - occ[0] : null;
        const label = (SKILL_BY_SLUG[slug] || {}).label || slug;
        const cls = lv >= 80 ? "hi" : lv >= 50 ? "mid" : "lo";
        const row = document.createElement("div"); row.className = "rrow";
        row.innerHTML =
          `<div class="rhead"><span class="rlabel">${label}</span>` +
          `<span class="rscore">${lv}%${d != null ? " " + deltaChip(d) : ""}</span></div>` +
          `<div class="rbar"><div class="rfill ${cls}" style="width:${lv}%"></div></div>`;
        wrap.appendChild(row);
      });
      stepEl.appendChild(wrap);
    }
  });

  backToEntrainementBtn();
}

/* ---- boot: default to Le Cours, exactly today's experience ---- */
document.body.dataset.mode = mode;   /* "cours" */
renderModeSwitch();
syncHeader();
renderStep();
