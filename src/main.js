/* =====================================================================
   FRENCH BUDDY — LESSON ENGINE (production module)
   ONE renderer driven by lesson data from src/lessons/. Adding a lesson
   means adding a data object — never rendering code.
   ===================================================================== */
import "./styles.css";
import { LESSONS } from "./lessons/index.mjs";
import { completeLesson, isCompleted, registerItems, dueKeys, gradeItem } from "./storage.js";

const CURRICULUM = { totalLessons: 84, weeks: 12 };

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

const el = id => document.getElementById(id);
const stepEl = el("step"), nextBtn = el("nextBtn");

function syncHeader() {
  const ticks = el("ticks"); ticks.innerHTML = "";
  for (let i = 0; i < CURRICULUM.weeks; i++) {
    const t = document.createElement("div");
    t.className = "tick" + (i < lesson.week - 1 ? " done" : "");
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

  const st = el("stations"); st.innerHTML = "";
  LESSONS.forEach((L, i) => {
    const c = document.createElement("button");
    c.className = "chip" + (i === lessonIndex ? " on" : "");
    c.innerHTML = "Jour " + L.day + (isCompleted(L.day) ? '<span class="tickmark">✓</span>' : "");
    c.onclick = () => switchLesson(i);
    st.appendChild(c);
  });
}

function switchLesson(i) {
  if (i === lessonIndex) return;
  lessonIndex = i; lesson = LESSONS[i];
  stepIndex = 0;
  stepDone = new Array(lesson.steps.length).fill(false);
  correct = 0; attempts = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  syncHeader(); renderStep();
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

function renderRecall(s) {
  let answered = 0;
  s.questions.forEach(q => {
    const wrap = document.createElement("div"); wrap.className = "q";
    const pr = document.createElement("div"); pr.className = "prompt"; pr.innerHTML = q.prompt; wrap.appendChild(pr);
    const opts = document.createElement("div"); opts.className = "opts";
    const fb = document.createElement("div"); fb.className = "fb";
    q.opts.forEach((o, oi) => {
      const btn = document.createElement("button"); btn.className = "opt"; btn.textContent = o;
      btn.onclick = () => {
        [...opts.children].forEach(c => c.disabled = true);
        attempts++;
        if (oi === q.answer) { btn.classList.add("correct"); fb.className = "fb ok"; fb.innerHTML = "✓ " + q.ok; correct++; }
        else { btn.classList.add("wrong"); opts.children[q.answer].classList.add("correct"); fb.className = "fb no"; fb.innerHTML = "✗ " + q.no; }
        answered++; if (answered === s.questions.length) unlock();
      };
      opts.appendChild(btn);
    });
    wrap.appendChild(opts); wrap.appendChild(fb); stepEl.appendChild(wrap);
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

syncHeader();
renderStep();
