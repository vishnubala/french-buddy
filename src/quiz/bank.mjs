/* quiz/bank.mjs — the item bank.
   A quiz item is a recall item PLUS diagnostic tags:
     { prompt, opts:[…], answer:idx, ok, no, skill:<slug>, diff:1|2|3, weeks:[…] }
   It renders through the SAME multiple-choice primitive the in-lesson recall
   uses (see main.js renderMCQuestion) — no second renderer.

   Two sources:
   (1) GENERATED (lexical): derived at load from LESSONS vocab — translation
       items (fr↔en, distractors sampled from same-week vocab) tagged
       vocab_domains / numbers_time / functional_register, plus gender items
       (le/la, un/une) from article-bearing nouns tagged gender_articles.
   (2) HAND-AUTHORED (grammar), THIN: ~2 items per grammar skill so the
       calibration sweep can touch all 19 skills. Each item's ok/no states
       what's correct and why the wrong option is wrong (§8.4). The deep
       pc-vs-imparfait minimal-pair bank is a LATER session — kept to a couple
       of correct examples here. */

import { LESSONS } from "../lessons/index.mjs";

/* ------------------------------------------------------------------ utils */
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const norm = s => s.toLowerCase().replace(/\s+/g, " ").trim();

/* ---------------------------------------------- lexical generation (source 1) */

/* Reduce a lesson gloss to a clean answer/distractor string:
   "Hi / Bye" → "Hi";  "in the morning (a.m., casual time)" → "in the morning". */
function cleanGloss(en) {
  return en.split(" (")[0].split(" / ")[0].replace(/…/g, "").trim();
}
function cleanFr(fr) {
  return fr.replace(/…/g, "").replace(/\s*\(.*?\)\s*/g, " ").trim();
}

const NUM_TIME_RE = /\b(o'?clock|noon|midnight|quarter|half\s*past|hour|minute|\btime\b|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|april|june|july|august|september|october|november|december|morning|afternoon|evening|week|month|year|today|tomorrow|yesterday|number)\b/i;
/* Anchored FULL match on a standalone number word — deliberately excludes
   un/une (which are far more often the indefinite article than the number). */
const NUMWORD_FULL = /^(z[ée]ro|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|dix-\w+|vingt|trente|quarante|cinquante|soixante|cent|mille|premier|deuxi[èe]me|troisi[èe]me)$/i;
const GREET_RE = /\b(hello|hi\b|bye|goodbye|good evening|good day|please|thank|sorry|excuse|welcome|nice to meet|see you|have a good)\b/i;

function lexicalSkill(frClean, en, reg) {
  /* digit glosses ("1", "20") and time/date/number words → numbers_time */
  if (/^\d/.test(en) || NUM_TIME_RE.test(en) || NUMWORD_FULL.test(frClean)) return "numbers_time";
  if (reg || GREET_RE.test(en)) return "functional_register";
  return "vocab_domains";
}

/* Collect clean vocab candidates from every lesson's vocab steps. */
function collectCandidates() {
  const cands = [];
  for (const L of LESSONS)
    for (const s of L.steps)
      if (s.type === "vocab")
        for (const it of s.items) {
          const en = cleanGloss(it.en);
          const fr = cleanFr(it.fr);
          if (!en || !fr) continue;
          cands.push({ fr: it.fr, frClean: fr, en, week: L.week, reg: it.reg });
        }
  return cands;
}

/* Three distinct distractor strings (≠ the answer, ≠ each other), preferring
   same-week vocab, then widening to the whole pool. */
function pickDistractors(cand, dir, answerText, pool) {
  const textOf = c => (dir === 0 ? c.en : c.frClean);
  const seen = new Set([norm(answerText)]);
  const chosen = [];
  const tiers = [pool.filter(c => c.week === cand.week && c !== cand), pool.filter(c => c !== cand)];
  for (const tier of tiers) {
    for (const c of shuffle(tier)) {
      const t = textOf(c);
      if (!t) continue;
      const k = norm(t);
      if (seen.has(k)) continue;
      seen.add(k); chosen.push(t);
      if (chosen.length === 3) return chosen;
    }
  }
  return chosen;
}

function translationItem(cand, pool, dir) {
  const answerText = dir === 0 ? cand.en : cand.frClean;
  const distractors = pickDistractors(cand, dir, answerText, pool);
  if (distractors.length < 3) return null;
  const opts = shuffle([answerText, ...distractors]);
  return {
    prompt: dir === 0 ? `Que veut dire <b>«&nbsp;${cand.fr}&nbsp;»</b> ?`
                      : `Comment dit-on <b>«&nbsp;${cand.en}&nbsp;»</b> ?`,
    opts,
    answer: opts.indexOf(answerText),
    ok: dir === 0 ? `«&nbsp;${cand.fr}&nbsp;» = ${cand.en}.`
                  : `«&nbsp;${cand.en}&nbsp;» se dit «&nbsp;${cand.frClean}&nbsp;».`,
    no: dir === 0 ? `«&nbsp;${cand.fr}&nbsp;» veut dire «&nbsp;${cand.en}&nbsp;».`
                  : `On dit «&nbsp;${cand.frClean}&nbsp;» pour «&nbsp;${cand.en}&nbsp;».`,
    skill: lexicalSkill(cand.frClean, cand.en, cand.reg),
    diff: 1,
    weeks: [cand.week],
  };
}

/* A gender/article item from a single-word, consonant-initial noun whose fr
   carries its article — the article in the source data IS the correct key. */
function genderItem(cand) {
  const m = cand.fr.trim().match(/^(le|la|un|une)\s+(.+)$/i);
  if (!m) return null;
  const art = m[1].toLowerCase();
  const noun = m[2].trim();
  if (/\s/.test(noun)) return null;                       // multiword → skip
  if (/^[aâäàéèêëîïôöùûüh]/i.test(noun)) return null;      // vowel/h → l' ambiguous
  const opts = (art === "le" || art === "la") ? ["le", "la"] : ["un", "une"];
  const answer = opts.indexOf(art);
  if (answer < 0) return null;
  const gender = (art === "le" || art === "un") ? "masculin" : "féminin";
  return {
    prompt: `Masculin ou féminin ? <b>___ ${noun}</b>`,
    opts,
    answer,
    ok: `« ${noun} » est ${gender} → ${art} ${noun}.`,
    no: `« ${noun} » est ${gender} : ${art} ${noun}.`,
    skill: "gender_articles",
    diff: 1,
    weeks: [cand.week],
  };
}

function generateLexical() {
  const cands = collectCandidates();
  /* glosses shared by ≥2 French phrases: en→fr on these is ambiguous (a
     distractor could be an also-correct translation), so force fr→en there. */
  const glossCount = {};
  for (const c of cands) glossCount[norm(c.en)] = (glossCount[norm(c.en)] || 0) + 1;

  const items = [];
  cands.forEach((c, i) => {
    let dir = i % 2;                                  // alternate fr→en / en→fr
    if (dir === 1 && glossCount[norm(c.en)] > 1) dir = 0;   // avoid ambiguous en→fr
    const t = translationItem(c, cands, dir);
    if (t) items.push(t);
  });
  const seenNoun = new Set();
  for (const c of cands) {
    const g = genderItem(c);
    if (g) {
      const noun = g.prompt;
      if (seenNoun.has(noun)) continue;            // one gender item per noun
      seenNoun.add(noun);
      items.push(g);
    }
  }
  return items;
}

/* ---------------------------------------------- hand-authored grammar (source 2) */

const HAND = [
  /* etre_avoir */
  { skill:"etre_avoir", diff:1, weeks:[1], prompt:"Complétez : Je ___ étudiant.",
    opts:["suis","es","ai","a"], answer:0,
    ok:"être : je suis. « Je suis étudiant » = I am a student.",
    no:"Use être : je suis. « j'ai » is avoir (to have), not identity." },
  { skill:"etre_avoir", diff:2, weeks:[2], prompt:"Complétez : Tu ___ un frère ?",
    opts:["es","as","est","a"], answer:1,
    ok:"avoir : tu as. « Tu as un frère ? » = Do you have a brother?",
    no:"Possession uses avoir : tu as. « tu es » is être (you are)." },

  /* present_verbs */
  { skill:"present_verbs", diff:2, weeks:[2], prompt:"Complétez : Nous ___ français. (parler)",
    opts:["parlons","parlez","parle","parlent"], answer:0,
    ok:"-er verb, nous → -ons : nous parlons.",
    no:"nous takes -ons : parlons. « parlez » is the vous form." },
  { skill:"present_verbs", diff:2, weeks:[7], prompt:"Complétez : Ils ___ à 18h. (finir)",
    opts:["finit","finent","finissent","finissons"], answer:2,
    ok:"regular -ir verb, ils → -issent : ils finissent.",
    no:"ils finissent — -ir verbs grow -iss- in the plural; « finent » isn't a form." },

  /* reflexive */
  { skill:"reflexive", diff:2, weeks:[5], prompt:"Complétez : Je ___ lève à 7h.",
    opts:["me","te","se","m'a"], answer:0,
    ok:"reflexive with je → me : je me lève.",
    no:"je pairs with me : je me lève. « te » goes with tu." },
  { skill:"reflexive", diff:2, weeks:[5], prompt:"Complétez : Elle ___ couche tôt.",
    opts:["me","se","te","s'est"], answer:1,
    ok:"il/elle → se : elle se couche.",
    no:"elle takes se : elle se couche. « me » is for je." },

  /* passe_compose */
  { skill:"passe_compose", diff:2, weeks:[8], prompt:"« I ate » (manger) :",
    opts:["je mange","j'ai mangé","je suis mangé","je mangeais"], answer:1,
    ok:"passé composé with avoir : j'ai mangé.",
    no:"j'ai mangé — avoir + participle; manger takes avoir, not être." },
  { skill:"passe_compose", diff:3, weeks:[9], prompt:"« She went » (aller) :",
    opts:["elle a allé","elle est allée","elle a allée","elle est allé"], answer:1,
    ok:"aller takes être + agreement : elle est allée (-e for « she »).",
    no:"aller is an être-verb and the participle agrees : elle est allée." },

  /* imparfait */
  { skill:"imparfait", diff:3, weeks:[11], prompt:"Imparfait de « nous parlons », je → :",
    opts:["je parlais","j'ai parlé","je parle","je parlerai"], answer:0,
    ok:"imparfait stem parl- + -ais : je parlais.",
    no:"je parlais — imparfait (nous-stem + -ais); « j'ai parlé » is the passé composé." },
  { skill:"imparfait", diff:2, weeks:[11], prompt:"« The weather was nice » :",
    opts:["c'est beau","il fait beau","il faisait beau","il va faire beau"], answer:2,
    ok:"past description → imparfait : il faisait beau.",
    no:"il faisait beau — imparfait for a past state; « il fait beau » is the present." },

  /* pc_vs_imparfait — kept to two clean correct examples (full bank next session) */
  { skill:"pc_vs_imparfait", diff:3, weeks:[11], prompt:"« I was sleeping when the phone rang » :",
    opts:["je dormais / a sonné","j'ai dormi / sonnait","je dormais / sonnait","j'ai dormi / a sonné"], answer:0,
    ok:"ongoing backdrop = imparfait (je dormais); the interrupting event = passé composé (a sonné).",
    no:"The backdrop is imparfait (je dormais) and the single event is passé composé (a sonné)." },
  { skill:"pc_vs_imparfait", diff:3, weeks:[11], prompt:"« Yesterday I visited the museum » (one finished event) :",
    opts:["je visitais le musée","j'ai visité le musée","je vais visiter","je visite"], answer:1,
    ok:"a single completed event → passé composé : j'ai visité.",
    no:"One finished event → passé composé (j'ai visité); « je visitais » = was visiting / used to." },

  /* futur_proche */
  { skill:"futur_proche", diff:2, weeks:[10], prompt:"« We're going to eat » (on) :",
    opts:["on mange","on va manger","on a mangé","on mangeait"], answer:1,
    ok:"futur proche = aller + infinitive : on va manger.",
    no:"on va manger — aller (va) + infinitive; « on a mangé » is the past." },
  { skill:"futur_proche", diff:2, weeks:[10], prompt:"« I'm not going to go out » :",
    opts:["je ne vais pas sortir","je vais ne pas sortir","je ne sors pas aller","je n'ai pas sortir"], answer:0,
    ok:"ne + [vais] + pas + infinitive : je ne vais pas sortir.",
    no:"Negation wraps the conjugated aller : je ne vais pas sortir." },

  /* negation */
  { skill:"negation", diff:1, weeks:[2], prompt:"« I don't understand » :",
    opts:["je comprends pas ne","je ne comprends pas","je ne pas comprends","ne je comprends pas"], answer:1,
    ok:"ne + verb + pas : je ne comprends pas.",
    no:"ne … pas wraps the verb : je ne comprends pas." },
  { skill:"negation", diff:3, weeks:[8], prompt:"« I didn't eat » (passé composé) :",
    opts:["je n'ai mangé pas","je ne mangé pas","je n'ai pas mangé","je pas mangé"], answer:2,
    ok:"pas sits between auxiliary and participle : je n'ai pas mangé.",
    no:"In the passé composé, pas comes before the participle : je n'ai pas mangé." },

  /* imperative */
  { skill:"imperative", diff:2, weeks:[4], prompt:"Telling someone (vous) to turn right :",
    opts:["tourner à droite","tournez à droite","vous tournez","tu tournes"], answer:1,
    ok:"vous imperative drops the pronoun : Tournez à droite.",
    no:"The command is the vous form without the pronoun : Tournez !" },
  { skill:"imperative", diff:2, weeks:[4], prompt:"« Take line 1 » (vous) :",
    opts:["prends la ligne 1","prenez la ligne 1","vous prenez la ligne 1","prendre la ligne 1"], answer:1,
    ok:"vous imperative : Prenez la ligne 1.",
    no:"Prenez — the vous command; « prends » is the tu form." },

  /* partitive_quantity */
  { skill:"partitive_quantity", diff:3, weeks:[3], prompt:"« I'd like some bread » (le pain) :",
    opts:["je voudrais le pain","je voudrais du pain","je voudrais de pain","je voudrais un pain"], answer:1,
    ok:"partitive de + le = du : je voudrais du pain (« some bread »).",
    no:"« some » + masculine = du (de+le) : du pain." },
  { skill:"partitive_quantity", diff:2, weeks:[6], prompt:"« A lot of people » :",
    opts:["beaucoup du monde","beaucoup de monde","beaucoup des monde","beaucoup le monde"], answer:1,
    ok:"quantity words take bare de : beaucoup de monde.",
    no:"After a quantity word it's always bare de : beaucoup de monde (never du/des)." },

  /* demonstr_possess */
  { skill:"demonstr_possess", diff:2, weeks:[6], prompt:"« this jacket » (une veste) :",
    opts:["ce veste","cet veste","cette veste","ces veste"], answer:2,
    ok:"feminine noun → cette veste.",
    no:"cette — the feminine demonstrative; « ce/cet » are masculine." },
  { skill:"demonstr_possess", diff:2, weeks:[7], prompt:"« my house » (la maison) :",
    opts:["mon maison","ma maison","mes maison","ma maisons"], answer:1,
    ok:"the possessive agrees with the noun : ma maison (maison is feminine).",
    no:"ma maison — possessives match the noun's gender, and maison is feminine." },

  /* adjectives */
  { skill:"adjectives", diff:3, weeks:[6], prompt:"« a green jacket » (une veste) :",
    opts:["une veste vert","une veste verte","une verte veste","une vert veste"], answer:1,
    ok:"colours follow the noun and agree : une veste verte (fem -e).",
    no:"une veste verte — colours go after the noun and agree in gender." },
  { skill:"adjectives", diff:2, weeks:[6], prompt:"« a small dog » (un chien) :",
    opts:["un chien petit","un petit chien","un petite chien","une petit chien"], answer:1,
    ok:"petit is a BAGS adjective (size) → before the noun : un petit chien.",
    no:"petit goes before the noun (BAGS) : un petit chien." },

  /* comparatives */
  { skill:"comparatives", diff:2, weeks:[11], prompt:"« cheaper than the taxi » :",
    opts:["plus cher que le taxi","moins cher que le taxi","aussi cher que le taxi","meilleur que le taxi"], answer:1,
    ok:"moins … que = less … than : moins cher que le taxi.",
    no:"« cheaper » = less expensive → moins cher que." },
  { skill:"comparatives", diff:2, weeks:[11], prompt:"« a better coffee » (bon) :",
    opts:["un plus bon café","un meilleur café","un mieux café","un café plus bon"], answer:1,
    ok:"bon → meilleur (irregular) : un meilleur café.",
    no:"bon's comparative is meilleur, never « plus bon »." },

  /* prepositions */
  { skill:"prepositions", diff:2, weeks:[4], prompt:"« I'm going to the museum » (le musée) :",
    opts:["je vais à le musée","je vais au musée","je vais du musée","je vais le musée"], answer:1,
    ok:"à + le = au : je vais au musée.",
    no:"à + le fuses to au : au musée (never « à le »)." },
  { skill:"prepositions", diff:2, weeks:[4], prompt:"« to the station » (la gare) :",
    opts:["au gare","à la gare","à le gare","aux gare"], answer:1,
    ok:"à la (no fusion before feminine) : à la gare.",
    no:"à la gare — à + la doesn't fuse; only à+le=au and à+les=aux." },

  /* pronunciation */
  { skill:"pronunciation", diff:3, weeks:[1], prompt:"Which pair sounds the SAME?",
    opts:["rue / roue","vingt / vin","tu / tout","du / doux"], answer:1,
    ok:"vingt and vin are both /vɛ̃/ — identical. The others each contrast /y/ vs /u/.",
    no:"vingt = vin = /vɛ̃/. rue/roue, tu/tout, du/doux all contrast /y/ vs /u/." },
  { skill:"pronunciation", diff:2, weeks:[8], prompt:"« mangé », « manger » and « mangez » …",
    opts:["sound different","sound the same (/e/)","are all silent","only rhyme in pairs"], answer:1,
    ok:"-é, -er, -ez all sound /e/ : mangé = manger = mangez. Spelling differs, sound doesn't.",
    no:"They're identical : /mɑ̃ʒe/. The classic -é/-er/-ez trap." },
];

/* ------------------------------------------------------------------ export */
/* Assign a stable id to every item (the engine tracks served/unserved by id). */
export const QUIZ_BANK = [...generateLexical(), ...HAND].map((it, i) => ({ id: i, ...it }));
