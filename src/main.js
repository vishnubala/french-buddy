/* =====================================================================
   FRENCH BUDDY — LESSON ENGINE (production module)
   ONE renderer driven by lesson data from src/lessons/. Adding a lesson
   means adding a data object — never rendering code.
   ===================================================================== */
import "./styles.css";
import { LESSONS } from "./lessons/index.mjs";
import { completeLesson, isCompleted, registerItems, dueKeys, gradeItem, saveQuizResult } from "./storage.js";
import { SKILL_BY_SLUG } from "./quiz/skills.mjs";
import { QUIZ_BANK } from "./quiz/bank.mjs";
import { createSession } from "./quiz/engine.mjs";
import { READING } from "./reading/sets.mjs";

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
let appMode = "lesson";   /* "lesson" | "quiz" | "reading" | "home" — what the STATION shows */
let quiz = null;          /* active diagnostic session (see src/quiz/) */
let reading = null;       /* active reading set run (see src/reading/) */
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
  const wasQuiz = appMode === "quiz" || appMode === "reading";
  appMode = "lesson"; quiz = null; reading = null;  /* any nav click leaves practice */
  if (i === lessonIndex && !wasQuiz) return;
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
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (m === "cours") {
    /* restore the course exactly where it was — position was never touched */
    appMode = "lesson"; quiz = null; reading = null;
    syncHeader(); renderStep();
  } else {
    renderEntrainementHome();
  }
}

/* L'Entraînement landing: a list of practice entries in the shared station
   surface. No rail (hidden via data-mode), no bottom control. */
function renderEntrainementHome() {
  appMode = "home"; quiz = null;
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

  /* Reading comprehension — a separate practice module (not a quiz). Labelled
     honestly (§7): A1–A2 in the STYLE of a TEF reading task, NOT exam prep. */
  const rcard = document.createElement("button"); rcard.className = "pcard";
  rcard.innerHTML =
    `<span class="pcard-t">${READING.label} <span class="pbadge">${READING.format}</span></span>` +
    `<span class="pcard-d">Lis un texte court et réponds aux questions. ` +
    `Ce n'est pas une préparation à l'examen&nbsp;TEF.</span>`;
  rcard.onclick = () => launchReading();
  list.appendChild(rcard);

  PRACTICE.forEach(([m, title, desc]) => {
    const card = document.createElement("button"); card.className = "pcard";
    card.innerHTML = `<span class="pcard-t">${title}</span><span class="pcard-d">${desc}</span>`;
    card.onclick = () => launchQuiz(m);
    list.appendChild(card);
  });
  stepEl.appendChild(list);
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
   L'Entraînement · Compréhension écrite — a reading SET run. Each screen shows
   one short passage (rendered like an intro/body block) + its 2–4 comprehension
   questions via renderMCQuestion WITH shuffle — the SAME MC path the quiz uses,
   never forked (§2). Reading isn't skill-tagged, so the end screen is a plain
   score, not the per-skill diagnostic surface.

   HONEST SCOPE (§7): labelled "niveau A1–A2, format TEF" — A1–A2 reading in the
   STYLE of a TEF task, NOT preparation for the actual (A1–C2) TEF exam. Content
   is Claude-drafted and NOT native-reviewed (folds into the §8.2 review gate). */

function launchReading() {
  appMode = "reading";
  reading = { pi: 0, correct: 0, total: 0 };
  showControl(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
  el("stationNum").textContent = "LECTURE";
  el("lessonTitle").textContent = READING.label;
  el("lessonDur").textContent = READING.format;
  el("platform").innerHTML = "";
  renderReadingItem();
}

function renderReadingItem() {
  if (appMode !== "reading") return;
  const p = READING.passages[reading.pi];
  if (!p) { renderReadingResults(); return; }
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow";
  eb.textContent = p.type + " · texte " + (reading.pi + 1) + " / " + READING.passages.length;
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
  const last = reading.pi === READING.passages.length - 1;
  nextBtn.disabled = false; nextBtn.className = "next";
  nextBtn.innerHTML = last
    ? 'Voir le résultat <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
    : 'Texte suivant <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  nextBtn.onclick = () => { reading.pi++; window.scrollTo({ top: 0, behavior: "smooth" }); renderReadingItem(); };
}

function renderReadingResults() {
  const pct = reading.total ? Math.round(reading.correct / reading.total * 100) : 0;
  el("stationNum").textContent = "BILAN";
  el("lessonTitle").textContent = "Résultats — " + READING.label;
  el("lessonDur").textContent = "";
  el("platform").innerHTML = "";
  stepEl.innerHTML = "";
  stepEl.classList.remove("anim"); void stepEl.offsetWidth; stepEl.classList.add("anim");

  const eb = document.createElement("div"); eb.className = "eyebrow"; eb.textContent = "Compréhension écrite"; stepEl.appendChild(eb);
  const h = document.createElement("h3");
  h.textContent = `Score : ${reading.correct} / ${reading.total} · ${pct}%`;
  stepEl.appendChild(h);

  const msg = document.createElement("p"); msg.className = "lede";
  msg.innerHTML = pct >= 80 ? "Très bien — tu comprends l'essentiel de ces textes courts."
                : pct >= 50 ? "Pas mal. Relis les textes où tu as hésité, puis recommence."
                            : "Continue — relis chaque texte lentement, phrase par phrase.";
  stepEl.appendChild(msg);

  nextBtn.disabled = false; nextBtn.className = "next done";
  nextBtn.innerHTML = "Retour à l'entraînement";
  nextBtn.onclick = () => renderEntrainementHome();
}

/* ---- boot: default to Le Cours, exactly today's experience ---- */
document.body.dataset.mode = mode;   /* "cours" */
renderModeSwitch();
syncHeader();
renderStep();
