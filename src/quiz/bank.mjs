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

  /* passe_compose — vetted set lives in PASSE_COMPOSE_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* imparfait */
  { skill:"imparfait", diff:3, weeks:[11], prompt:"Imparfait de « nous parlons », je → :",
    opts:["je parlais","j'ai parlé","je parle","je parlerai"], answer:0,
    ok:"imparfait stem parl- + -ais : je parlais.",
    no:"je parlais — imparfait (nous-stem + -ais); « j'ai parlé » is the passé composé." },
  { skill:"imparfait", diff:2, weeks:[11], prompt:"« The weather was nice » :",
    opts:["c'est beau","il fait beau","il faisait beau","il va faire beau"], answer:2,
    ok:"past description → imparfait : il faisait beau.",
    no:"il faisait beau — imparfait for a past state; « il fait beau » is the present." },

  /* pc_vs_imparfait — the flagship discrimination bank lives in PC_IMP_ITEMS
     below (vetted, 20 items); it's spread into the export with its constant
     tags, so it does NOT live here in HAND. */

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

  /* partitive_quantity — vetted set lives in PARTITIVE_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* demonstr_possess — vetted set lives in DEMONSTR_POSSESS_ITEMS below, spread
     into the export with its constant tags (not here in HAND). */

  /* adjectives — vetted set lives in ADJECTIVE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

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

  /* pronunciation — vetted set lives in PRONUNCIATION_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */
];

/* ---------------------- flagship pc_vs_imparfait discrimination bank (vetted) */
/* Wired VERBATIM — do not rewrite the items or their feedback. Each carries
   the constant tags skill:"pc_vs_imparfait", diff:3, weeks:[8,9,11] via the
   .map at the export. All band-3; answers balanced across both option slots. */
const PC_IMP_ITEMS = [
  { prompt:"Quand le téléphone a sonné, je ______ profondément. (dormir)",
    opts:["dormais","ai dormi"], answer:0,
    ok:"<b>dormais</b> — the sleeping was already ongoing (the background) when the phone rang. An action in progress → imparfait.",
    no:"The sleeping is the backdrop already underway, interrupted by the ring → imparfait: <b>je dormais</b>. <em>j'ai dormi</em> would be one bounded, finished sleep." },
  { prompt:"Nous marchions quand, tout à coup, il ______ à pleuvoir. (commencer)",
    opts:["commençait","a commencé"], answer:1,
    ok:"<b>a commencé</b> — <em>tout à coup</em> marks a sudden completed event breaking into the ongoing <em>nous marchions</em>. Sudden event → passé composé.",
    no:"<em>tout à coup</em> signals a sharp completed event, not background → passé composé: <b>il a commencé</b>." },
  { prompt:"Je lisais tranquillement quand quelqu'un ______ à la porte. (frapper)",
    opts:["frappait","a frappé"], answer:1,
    ok:"<b>a frappé</b> — the knock is the single completed event that interrupts the ongoing <em>je lisais</em>.",
    no:"Reading is the background (imparfait <em>lisais</em>); the knock that cuts in is the completed event → <b>a frappé</b>." },
  { prompt:"Quand j'étais petit, j'______ au parc tous les dimanches. (aller)",
    opts:["allais","suis allé"], answer:0,
    ok:"<b>allais</b> — <em>tous les dimanches</em> is a repeated childhood habit → imparfait. (<em>j'étais</em> is imparfait too — a past state.)",
    no:"<em>tous les dimanches</em> is an open-ended habit, not one trip → imparfait: <b>j'allais</b>. <em>je suis allé</em> = a single visit." },
  { prompt:"Dimanche dernier, je ______ au marché avec ma mère. (aller)",
    opts:["allais","suis allé"], answer:1,
    ok:"<b>suis allé</b> — <em>dimanche dernier</em> pins one specific completed trip → passé composé (aller takes être). Compare the habit <em>j'allais</em>.",
    no:"<em>dimanche dernier</em> = one specific finished occasion → passé composé: <b>je suis allé(e)</b>." },
  { prompt:"Tous les matins, elle ______ un croissant. (manger)",
    opts:["mangeait","a mangé"], answer:0,
    ok:"<b>mangeait</b> — <em>tous les matins</em> is a daily habit → imparfait.",
    no:"A repeated daily habit → imparfait: <b>elle mangeait</b>. <em>elle a mangé</em> = one single time." },
  { prompt:"Ce matin, elle ______ un croissant et un café. (manger)",
    opts:["mangeait","a mangé"], answer:1,
    ok:"<b>a mangé</b> — <em>ce matin</em> frames one completed breakfast → passé composé. Minimal pair with the habit <em>mangeait</em>.",
    no:"<em>ce matin</em> = one specific finished action → passé composé: <b>elle a mangé</b>." },
  { prompt:"La maison était calme et il ______ nuit. (faire)",
    opts:["faisait","a fait"], answer:0,
    ok:"<b>faisait</b> — setting the scene / describing a state (<em>il faisait nuit</em>) → imparfait.",
    no:"Scene-setting description → imparfait: <b>il faisait nuit</b>, not the event-marking passé composé." },
  { prompt:"Quand je suis entré, les enfants ______ contents. (être)",
    opts:["étaient","ont été"], answer:0,
    ok:"<b>étaient</b> — describing an ongoing state (how the children were) → imparfait. <em>je suis entré</em> is the completed event.",
    no:"A description of a state → imparfait: <b>ils étaient</b>. The finished entry is <em>je suis entré</em>." },
  { prompt:"Il ______ froid, alors j'ai mis un manteau. (faire)",
    opts:["faisait","a fait"], answer:0,
    ok:"<b>faisait</b> — the weather is the background state; <em>j'ai mis</em> is the completed reaction to it.",
    no:"Weather as backdrop → imparfait: <b>il faisait froid</b>. The completed action is <em>j'ai mis un manteau</em>." },
  { prompt:"Hier, je ______ à huit heures, puis j'ai pris le métro. (se lever)",
    opts:["me levais","me suis levé"], answer:1,
    ok:"<b>me suis levé</b> — a sequence of completed events (<em>puis j'ai pris</em>) moving forward → passé composé. Reflexives take être.",
    no:"A chain of finished, ordered actions → passé composé: <b>je me suis levé(e)</b>." },
  { prompt:"Elle est arrivée, elle ______ bonjour, et elle s'est assise. (dire)",
    opts:["disait","a dit"], answer:1,
    ok:"<b>a dit</b> — a series of single completed actions in sequence → passé composé throughout.",
    no:"Sequenced completed events → passé composé: <b>elle a dit bonjour</b>. <em>disait</em> would be a habit." },
  { prompt:"J'______ ce livre en deux jours. (lire)",
    opts:["lisais","ai lu"], answer:1,
    ok:"<b>ai lu</b> — <em>en deux jours</em> marks a completed action within a finished span → passé composé.",
    no:"<em>en deux jours</em> = it got finished → passé composé: <b>j'ai lu</b>. Ongoing would be <em>je lisais</em>." },
  { prompt:"Je ______ ce livre quand tu m'as appelé. (lire)",
    opts:["lisais","ai lu"], answer:0,
    ok:"<b>lisais</b> — the reading was in progress when the call interrupted → imparfait. Minimal pair with <em>j'ai lu en deux jours</em>.",
    no:"Reading in progress, cut off by the call → imparfait: <b>je lisais</b>." },
  { prompt:"Nous ______ trois fois à Paris cette année-là. (aller)",
    opts:["allions","sommes allés"], answer:1,
    ok:"<b>sommes allés</b> — a <em>counted, bounded</em> number of times (<em>trois fois</em>) is completed → passé composé, even though it repeated. Open-ended habits (<em>souvent</em>) take imparfait.",
    no:"<em>trois fois</em> = a finished, countable number of occasions → passé composé: <b>nous sommes allés</b>. Only open-ended habits take imparfait." },
  { prompt:"Pendant que je cuisinais, mon frère ______ la télé. (regarder)",
    opts:["regardait","a regardé"], answer:0,
    ok:"<b>regardait</b> — two ongoing actions at the same time (<em>pendant que je cuisinais</em>) → both imparfait.",
    no:"Two simultaneous ongoing actions → imparfait: <b>il regardait</b>." },
  { prompt:"Avant, les gens ______ des lettres; maintenant, ils envoient des e-mails. (écrire)",
    opts:["écrivaient","ont écrit"], answer:0,
    ok:"<b>écrivaient</b> — <em>avant</em> + a general past habit ('people used to write') → imparfait.",
    no:"<em>Avant</em> + a habitual past truth → imparfait: <b>les gens écrivaient</b>. 'Used to' = imparfait." },
  { prompt:"J'______ dix ans quand nous avons déménagé. (avoir)",
    opts:["avais","ai eu"], answer:0,
    ok:"<b>avais</b> — age is a background state → imparfait (<em>j'avais dix ans</em>); <em>nous avons déménagé</em> is the completed event.",
    no:"Age = an ongoing past state → imparfait: <b>j'avais dix ans</b>. <em>j'ai eu</em> = 'I got/turned' at a point." },
  { prompt:"Hier, mon ami ______ chez moi pour dîner. (venir)",
    opts:["venait","est venu"], answer:1,
    ok:"<b>est venu</b> — one completed visit pinned to <em>hier</em> → passé composé (venir takes être).",
    no:"<em>hier</em> + one finished visit → passé composé: <b>il est venu</b>. <em>venait</em> = a repeated habit." },
  { prompt:"Il faisait beau, les oiseaux chantaient, et soudain le ciel ______ noir. (devenir)",
    opts:["devenait","est devenu"], answer:1,
    ok:"<b>est devenu</b> — <em>soudain</em> marks a sudden completed change against the described backdrop (both <em>faisait</em>, <em>chantaient</em> imparfait) → passé composé (devenir takes être).",
    no:"<em>soudain</em> = a sudden completed change → passé composé: <b>le ciel est devenu noir</b>. The surrounding description is imparfait." },
];

/* ------------------------- partitive vs quantity + de discrimination (vetted) */
/* Wired VERBATIM. Tagged skill:"partitive_quantity", diff:3, weeks:[3,6] via the
   .map at the export. Partitive du/de la/de l'/des vs bare de after quantity
   words / measures / negation, vs definite le for "in general". */
const PARTITIVE_ITEMS = [
  { prompt:"Au marché, j'achète ______ pommes. (some)", opts:["des","de","de la"], answer:0,
    ok:"<b>des</b> — plain partitive plural, \"some apples,\" no quantity word → des pommes.",
    no:"No quantity word + plural \"some\" = partitive <b>des</b>. (<em>de</em> needs a quantity word; <em>de la</em> is feminine singular.)" },
  { prompt:"Il y a beaucoup ______ pommes ici. (a lot of)", opts:["des","de","du"], answer:1,
    ok:"<b>de</b> — after a quantity word (beaucoup) the article drops to bare de: beaucoup de pommes.",
    no:"Quantity words (beaucoup, trop, assez…) take plain <b>de</b>, never des/du → beaucoup de pommes." },
  { prompt:"Le matin, je bois ______ café. (some)", opts:["du","de","le"], answer:0,
    ok:"<b>du</b> — partitive masculine, \"some coffee\": je bois du café.",
    no:"\"Some coffee\" (masc, affirmative) → partitive <b>du</b>. (<em>le café</em> = coffee in general; <em>de</em> needs a quantity word.)" },
  { prompt:"Je ne bois pas ______ café. (negative)", opts:["du","de","le"], answer:1,
    ok:"<b>de</b> — in the negative, du/de la/des flatten to plain de: ne… pas de café.",
    no:"Negation flattens the partitive to <b>de</b> → pas de café, not pas du café." },
  { prompt:"J'aime ______ café ; c'est ma boisson préférée. (in general)", opts:["le","du","de"], answer:0,
    ok:"<b>le</b> — liking something in general takes the definite article: j'aime le café.",
    no:"aimer + a general truth → definite <b>le</b>, not the partitive du (\"some\")." },
  { prompt:"Je voudrais ______ eau, s'il vous plaît. (some)", opts:["de l'","de","d'"], answer:0,
    ok:"<b>de l'</b> — partitive before a vowel: de l'eau (\"some water\").",
    no:"\"Some water,\" no quantity word, before a vowel → partitive <b>de l'</b>eau." },
  { prompt:"Un verre ______ eau, s'il vous plaît. (a glass of)", opts:["de l'","d'","de la"], answer:1,
    ok:"<b>d'</b> — a measure (un verre) takes bare de, elided before a vowel: un verre d'eau.",
    no:"A container/measure → plain de → <b>d'</b>eau, not the partitive de l'." },
  { prompt:"Tu as assez ______ argent ? (enough)", opts:["de l'","d'","du"], answer:1,
    ok:"<b>d'</b> — assez is a quantity word → bare de, elided before a vowel: assez d'argent.",
    no:"assez + noun drops the article to <b>d'</b> (before a vowel) → assez d'argent." },
  { prompt:"Elle met trop ______ sucre dans son thé. (too much)", opts:["du","de","le"], answer:1,
    ok:"<b>de</b> — trop (quantity) → plain de: trop de sucre.",
    no:"Quantity words take bare <b>de</b> → trop de sucre, not trop du." },
  { prompt:"Elle mange ______ confiture. (some)", opts:["de la","de","la"], answer:0,
    ok:"<b>de la</b> — partitive feminine, \"some jam\": de la confiture.",
    no:"\"Some jam\" (fem, affirmative) → partitive <b>de la</b>. (<em>la confiture</em> = jam in general.)" },
  { prompt:"Un kilo ______ tomates, s'il vous plaît. (a kilo of)", opts:["des","de","de la"], answer:1,
    ok:"<b>de</b> — a measure (un kilo) → bare de: un kilo de tomates.",
    no:"Measures/quantities take plain <b>de</b> → un kilo de tomates, not des." },
  { prompt:"Il n'y a plus ______ lait. (no more)", opts:["du","de","le"], answer:1,
    ok:"<b>de</b> — ne… plus behaves like negation, so the partitive → plain de: plus de lait.",
    no:"ne… plus drops the article to <b>de</b> → plus de lait." },
];

/* --------------------------- adjective agreement & placement (vetted) */
/* Wired VERBATIM. Tagged skill:"adjectives", diff:3, weeks:[6] via the .map at
   the export. Irregular feminines (beau/belle, blanc/blanche, vieux/vieille),
   invariable colours (orange, marron), and BAGS placement. */
const ADJECTIVE_ITEMS = [
  { prompt:"C'est une ______ maison. (beautiful)", opts:["belle","beau"], answer:0,
    ok:"<b>belle</b> — beau is irregular → belle before a feminine noun; beauty adjectives precede: une belle maison.",
    no:"beau → <b>belle</b> (fem); a BAGS (beauty) adjective goes before the noun → une belle maison." },
  { prompt:"Elle porte une jupe ______. (white)", opts:["blanche","blanc"], answer:0,
    ok:"<b>blanche</b> — blanc has an irregular feminine; colors follow the noun: une jupe blanche.",
    no:"blanc → <b>blanche</b> (irregular fem), placed after the noun → une jupe blanche." },
  { prompt:"Ce sont des chaussures ______. (orange)", opts:["orange","oranges"], answer:0,
    ok:"<b>orange</b> — a color named after a fruit is invariable: des chaussures orange.",
    no:"orange never agrees → chaussures <b>orange</b>, not oranges." },
  { prompt:"Où est le ______ ? (little black cat)", opts:["petit chat noir","chat petit noir"], answer:0,
    ok:"<b>petit chat noir</b> — size (petit) goes before the noun, color (noir) after.",
    no:"petit is a size (BAGS) adjective → before the noun; noir after → petit chat noir." },
  { prompt:"C'est une voiture ______. (red)", opts:["rouge","rouges"], answer:0,
    ok:"<b>rouge</b> — one car (singular), and rouge already ends in -e: une voiture rouge.",
    no:"Singular noun → singular adjective; rouge stays <b>rouge</b> → une voiture rouge." },
  { prompt:"Mes deux frères sont ______. (tall)", opts:["grands","grand"], answer:0,
    ok:"<b>grands</b> — masculine plural subject → add -s: ils sont grands.",
    no:"Plural agreement → <b>grands</b>." },
  { prompt:"C'est une ______ femme. (old)", opts:["vieille","vieux"], answer:0,
    ok:"<b>vieille</b> — vieux is irregular → vieille (fem); age precedes the noun: une vieille femme.",
    no:"vieux → <b>vieille</b> (fem), before the noun → une vieille femme." },
  { prompt:"un ______ repas (good)", opts:["bon","bonne"], answer:0,
    ok:"<b>bon</b> — repas is masculine → bon; goodness precedes: un bon repas.",
    no:"repas is masculine → <b>bon</b> (not bonne), before the noun → un bon repas." },
  { prompt:"une ______ idée (good)", opts:["bonne","bon"], answer:0,
    ok:"<b>bonne</b> — idée is feminine → bonne (bon doubles its n): une bonne idée.",
    no:"bon → <b>bonne</b> before a feminine noun → une bonne idée." },
  { prompt:"Elle a les cheveux ______. (chestnut brown)", opts:["marron","marrons"], answer:0,
    ok:"<b>marron</b> — a color from a noun (chestnut) is invariable: les cheveux marron.",
    no:"marron never agrees → cheveux <b>marron</b>, not marrons." },
  { prompt:"C'est un livre ______. (interesting)", opts:["intéressant","intéressante"], answer:0,
    ok:"<b>intéressant</b> — livre is masculine → no -e; ordinary adjectives follow: un livre intéressant.",
    no:"livre is masculine → <b>intéressant</b>, placed after the noun → un livre intéressant." },
  { prompt:"Nous cherchons une ______. (big house)", opts:["grande maison","maison grande"], answer:0,
    ok:"<b>grande maison</b> — size goes before the noun and agrees (fem): une grande maison.",
    no:"A size (BAGS) adjective precedes the noun → grande maison; grand → grande (fem)." },
];

/* ------------------------------- passé composé (avoir vs être + agreement) */
/* Wired VERBATIM. Tagged skill:"passe_compose", diff:3, weeks:[8,9] via the .map
   at the export. avoir vs être auxiliary choice, participle agreement with être,
   irregular participles, and the sortir-with-direct-object → avoir case. */
const PASSE_COMPOSE_ITEMS = [
  { prompt:"Hier, elle ______ au cinéma. (aller)", opts:["a allé","est allée","est allé"], answer:1,
    ok:"<b>est allée</b> — aller takes être, and with être the participle agrees with the subject: elle → allée.",
    no:"aller is an être-verb, and être-participles agree: a feminine subject → <b>est allée</b>." },
  { prompt:"J'______ une pizza hier soir. (manger)", opts:["ai mangé","suis mangé","ai mangée"], answer:0,
    ok:"<b>ai mangé</b> — manger takes avoir; with avoir there's no agreement with the subject → mangé.",
    no:"manger takes avoir (not être), and avoir gives no subject agreement → <b>ai mangé</b>." },
  { prompt:"Nous ______ à huit heures. (partir)", opts:["avons parti","sommes partis","sommes parti"], answer:1,
    ok:"<b>sommes partis</b> — partir takes être; the participle agrees with nous (masc. plural) → partis.",
    no:"partir is an être-verb and agrees with the subject → <b>sommes partis</b> (plural -s)." },
  { prompt:"Les filles ______ tard. (arriver)", opts:["ont arrivé","sont arrivées","sont arrivé"], answer:1,
    ok:"<b>sont arrivées</b> — arriver takes être; feminine plural subject → arrivées (-es).",
    no:"arriver takes être and agrees → feminine plural <b>sont arrivées</b>." },
  { prompt:"Il ______ son café. (prendre)", opts:["a pris","est pris","a prendu"], answer:0,
    ok:"<b>a pris</b> — prendre takes avoir and has the irregular participle pris.",
    no:"prendre takes avoir, irregular participle → <b>a pris</b> (not 'prendu')." },
  { prompt:"Tu ______ la vérité ? (dire)", opts:["as dit","es dit","as disé"], answer:0,
    ok:"<b>as dit</b> — dire takes avoir; irregular participle dit.",
    no:"dire takes avoir with the irregular participle → <b>as dit</b>." },
  { prompt:"Elle ______ dans la maison. (rester)", opts:["a resté","est restée","est resté"], answer:1,
    ok:"<b>est restée</b> — rester is one of the être-verbs (state, no movement), and agrees → restée.",
    no:"rester takes être (it's on the être list) and agrees with a feminine subject → <b>est restée</b>." },
  { prompt:"Vous ______ le film ? (voir)", opts:["avez vu","êtes vus","avez vou"], answer:0,
    ok:"<b>avez vu</b> — voir takes avoir; irregular participle vu; no subject agreement with avoir.",
    no:"voir takes avoir (irregular participle vu), and avoir doesn't agree → <b>avez vu</b>." },
  { prompt:"Elle ______ le chien ce matin. (sortir)", opts:["a sorti","est sortie","est sorti"], answer:0,
    ok:"<b>a sorti</b> — sortir usually takes être, BUT with a direct object (le chien = 'took the dog out') it takes avoir, no agreement.",
    no:"With a direct object, sortir means 'took (something) out' → avoir → <b>a sorti</b> le chien. (Without an object: elle est sortie.)" },
  { prompt:"Ce matin, je ______ à sept heures. (se réveiller)", opts:["ai réveillé","me suis réveillé","suis réveillé"], answer:1,
    ok:"<b>me suis réveillé</b> — reflexive verbs always take être and keep the pronoun: je me suis réveillé.",
    no:"Reflexive verbs take être and keep their pronoun → <b>me suis réveillé(e)</b>." },
  { prompt:"Nous ______ un bon week-end. (avoir)", opts:["avons eu","sommes eus","avons eue"], answer:0,
    ok:"<b>avons eu</b> — avoir itself takes avoir; irregular participle eu.",
    no:"avoir takes avoir, irregular participle → <b>avons eu</b>." },
  { prompt:"Il ______ malade toute la semaine. (être)", opts:["a été","est été","a étée"], answer:0,
    ok:"<b>a été</b> — être takes avoir in the passé composé; participle été, no agreement.",
    no:"être takes avoir (not itself) → <b>a été</b>, participle été." },
];

/* ------------------------------ demonstratives & possessives */
/* Wired VERBATIM. Tagged skill:"demonstr_possess", diff:2, weeks:[6,7] via the
   .map at the export. Possessives agree with the thing owned (not the owner);
   ce/cet/cette/ces; ma→mon / ce→cet before a vowel. NOTE: item 11's 3rd option
   was "leur" (a duplicate of the correct answer in the source); per the person's
   call it's replaced with "ses" — the only deviation from verbatim. */
const DEMONSTR_POSSESS_ITEMS = [
  { prompt:"Paul aime ______ sœur. (his)", opts:["sa","son","ses"], answer:0,
    ok:"<b>sa</b> — the possessive agrees with the thing owned (sœur, feminine), NOT the owner: sa sœur = his sister.",
    no:"French agrees with the noun owned, not the owner. sœur is feminine → <b>sa</b> sœur (even though 'his')." },
  { prompt:"Marie cherche ______ frère. (her)", opts:["sa","son","ses"], answer:1,
    ok:"<b>son</b> — frère is masculine, so son, regardless of Marie being female. son = his OR her.",
    no:"Agreement is with frère (masculine) → <b>son</b> frère. son/sa doesn't tell you the owner's gender." },
  { prompt:"J'adore ______ amie Léa. (my)", opts:["ma","mon","mes"], answer:1,
    ok:"<b>mon</b> — before a feminine noun starting with a vowel, ma → mon for sound: mon amie.",
    no:"ma becomes <b>mon</b> before a vowel (mon amie), even though amie is feminine — it's for pronunciation." },
  { prompt:"______ enfants sont à l'école. (his/her)", opts:["Sa","Son","Ses"], answer:2,
    ok:"<b>Ses</b> — plural owned thing (enfants) → ses, for his or her.",
    no:"A plural noun owned → <b>ses</b> enfants (his or her children)." },
  { prompt:"Tu as vu ______ voiture ? (your, informal)", opts:["ta","ton","tes"], answer:0,
    ok:"<b>ta</b> — voiture is feminine singular → ta voiture.",
    no:"voiture is feminine → <b>ta</b> voiture." },
  { prompt:"______ étudiants travaillent bien. (these)", opts:["Ce","Cet","Ces"], answer:2,
    ok:"<b>Ces</b> — plural noun → ces (these/those): ces étudiants.",
    no:"A plural noun → <b>ces</b> étudiants." },
  { prompt:"Regarde ______ homme là-bas. (that)", opts:["ce","cet","cette"], answer:1,
    ok:"<b>cet</b> — before a masculine noun starting with a vowel/h, ce → cet: cet homme.",
    no:"ce → <b>cet</b> before a masculine vowel-noun (cet homme), for sound." },
  { prompt:"______ maison est très belle. (this)", opts:["Ce","Cet","Cette"], answer:2,
    ok:"<b>Cette</b> — feminine singular noun → cette: cette maison.",
    no:"maison is feminine → <b>cette</b> maison." },
  { prompt:"Nous avons perdu ______ clés. (our)", opts:["notre","nos","votre"], answer:1,
    ok:"<b>nos</b> — plural owned thing (clés) → nos, regardless of the owners.",
    no:"A plural noun owned → <b>nos</b> clés (notre is for a singular noun)." },
  { prompt:"C'est ______ livre ou le mien ? (your, formal/plural)", opts:["votre","vos","ton"], answer:0,
    ok:"<b>votre</b> — singular noun (livre) → votre; vos would need a plural noun.",
    no:"livre is singular → <b>votre</b> livre (vos is for plurals)." },
  { prompt:"Ils adorent ______ nouvelle école. (their)", opts:["leur","leurs","ses"], answer:0,
    ok:"<b>leur</b> — one school (singular) → leur, even though 'they' own it: leur école.",
    no:"leur/leurs agrees with the thing owned, not the owners. One school → <b>leur</b> école." },
  { prompt:"______ appartement est au cinquième étage. (this)", opts:["Ce","Cet","Cette"], answer:1,
    ok:"<b>Cet</b> — appartement is masculine and starts with a vowel → cet appartement.",
    no:"Masculine vowel-noun → <b>cet</b> appartement (ce would be wrong before the vowel)." },
];

/* ------------------------------ pronunciation & liaison */
/* Wired VERBATIM. Tagged skill:"pronunciation", diff:3, weeks:[1..12] via the
   .map at the export. /y/ vs /u/, /z/ and /t/ liaison, -é/-er/-ez (/e/) vs
   -ais/-ait/-aient (/ɛ/), silent verb -ent, nasal vowels, and the ville /vil/
   exception. */
const PRONUNCIATION_ITEMS = [
  { prompt:"Which word has the /y/ sound (lips rounded, like 'tu'), NOT /u/ (like 'ou')?",
    opts:["tu","tout","nous"], answer:0,
    ok:"<b>tu</b> — /y/: say 'ee' then round your lips. tout and nous have /u/ (the 'oo' of 'ou').",
    no:"<b>tu</b> is /y/ (tight rounded lips). tout/nous are /u/ — the sound this course contrasts from Day 1." },
  { prompt:"In 'vous avez', what happens between the two words?",
    opts:["a /z/ liaison: vous‿avez","nothing, both said separately","a /t/ liaison"], answer:0,
    ok:"<b>/z/ liaison</b> — the silent -s of vous links onto the vowel as /z/: 'vou-zavez'.",
    no:"A final silent -s liaises as <b>/z/</b> before a vowel → vous‿avez ('vou-zavez')." },
  { prompt:"Which set are all pronounced the SAME (/e/), as in the passé composé -é?",
    opts:["parlé, parler, parlez","parlé, parlait, parlais","parler, parlé, parle"], answer:0,
    ok:"<b>parlé, parler, parlez</b> — all /e/ (parlé = -é, parler = -er, parlez = -ez). This homophone trap is why spelling matters.",
    no:"The /e/ set is <b>parlé / parler / parlez</b>. parlait/parlais are /ɛ/ (imparfait), and 'parle' ends in a silent-e /parl/." },
  { prompt:"Which set are all pronounced the SAME (/ɛ/), the imparfait ending?",
    opts:["parlais, parlait, parlaient","parlais, parler, parlé","parlait, parlez, parler"], answer:0,
    ok:"<b>parlais, parlait, parlaient</b> — all /ɛ/. The imparfait endings -ais/-ait/-aient are homophones; only the subject tells them apart.",
    no:"The imparfait /ɛ/ set is <b>-ais / -ait / -aient</b>. The -er/-é/-ez group is the other sound, /e/." },
  { prompt:"How is the final consonant in 'petit' (masc.) vs 'petite' (fem.) pronounced?",
    opts:["petit: silent t; petite: audible t","both audible","both silent"], answer:0,
    ok:"<b>petit</b> = /pəti/ (silent t); the feminine -e in <b>petite</b> = /pətit/ makes the t sound.",
    no:"The feminine -e 'wakes' a silent final consonant: petit /pəti/ → petite /pətit/." },
  { prompt:"'trois heures' — what links the words?",
    opts:["a /z/ liaison: troi‿zheures","a /s/ sound","nothing"], answer:0,
    ok:"<b>/z/ liaison</b> — the -s of trois links onto the vowel of heures (h is mute) → 'troi-zeur'.",
    no:"trois + a vowel → <b>/z/</b> liaison: troi‿zheures ('troi-zeur'); the h of heures is silent." },
  { prompt:"In 'un grand arbre', how does 'grand' link to 'arbre'?",
    opts:["the d sounds as /t/: gran‿t‿arbre","a /z/ sound","no liaison"], answer:0,
    ok:"<b>/t/</b> — in liaison, a final d is pronounced /t/: grand‿arbre = 'gran-tarbre'.",
    no:"A liaising final -d becomes <b>/t/</b> → grand‿arbre ('gran-tarbre')." },
  { prompt:"The -ent ending on 'ils parlent' is…",
    opts:["completely silent: 'parl'","pronounced 'ont'","a nasal 'en'"], answer:0,
    ok:"<b>silent</b> — the 3rd-person plural -ent is not pronounced: ils parlent = /parl/, same sound as 'il parle'.",
    no:"Verb -ent is <b>silent</b>: ils parlent sounds exactly like il parle (/parl/)." },
  { prompt:"Which is the nasal vowel, as in 'vin' (wine)?",
    opts:["vin /vɛ̃/","vine","vi-ne"], answer:0,
    ok:"<b>vin</b> /vɛ̃/ — a single nasal vowel, no n consonant actually pronounced; air passes through the nose.",
    no:"<b>vin</b> is one nasal vowel /vɛ̃/ — you don't pronounce a separate 'n'." },
  { prompt:"'ils ont' vs 'ils sont' — the difference is…",
    opts:["ont: /z/ liaison (il‿zon); sont: /s/ (il-son)","identical","both /z/"], answer:0,
    ok:"<b>ils‿ont</b> = 'il-zon' (/z/ liaison, they have); <b>ils sont</b> = 'il-son' (/s/, they are). One sound flips the meaning.",
    no:"ils ont = /z/ liaison ('il-zon', have); ils sont = /s/ ('il-son', are). The /z/–/s/ contrast is the whole distinction." },
  { prompt:"How is 'ville' pronounced?",
    opts:["/vil/ — the ill is /il/, an exception","/vij/ like 'fille'","/vi/"], answer:0,
    ok:"<b>/vil/</b> — ville, mille, tranquille are exceptions where -ill- is /il/, not the usual /ij/ glide (as in fille /fij/).",
    no:"ville is the exception <b>/vil/</b>, not the /ij/ of fille — same group as mille, tranquille." },
];

/* ------------------------------------------------------------------ export */
/* Assign a stable id to every item (the engine tracks served/unserved by id). */
const GENERATED = generateLexical();
const PC_IMP     = PC_IMP_ITEMS.map(it          => ({ ...it, skill:"pc_vs_imparfait",    diff:3, weeks:[8,9,11] }));
const PARTITIVE  = PARTITIVE_ITEMS.map(it        => ({ ...it, skill:"partitive_quantity", diff:3, weeks:[3,6]    }));
const ADJECTIVES = ADJECTIVE_ITEMS.map(it        => ({ ...it, skill:"adjectives",         diff:3, weeks:[6]      }));
const PASSE_COMP = PASSE_COMPOSE_ITEMS.map(it    => ({ ...it, skill:"passe_compose",       diff:3, weeks:[8,9]    }));
const DEM_POSS   = DEMONSTR_POSSESS_ITEMS.map(it => ({ ...it, skill:"demonstr_possess",    diff:2, weeks:[6,7]    }));
const PRONUN     = PRONUNCIATION_ITEMS.map(it    => ({ ...it, skill:"pronunciation",       diff:3, weeks:[1,2,3,4,5,6,7,8,9,10,11,12] }));
const HAND_ALL = [...HAND, ...PC_IMP, ...PARTITIVE, ...ADJECTIVES, ...PASSE_COMP, ...DEM_POSS, ...PRONUN];
export const QUIZ_BANK = [...GENERATED, ...HAND_ALL].map((it, i) => ({ id: i, ...it }));

/* Exact source split, known at construction (no heuristic) — surfaced so the
   dryrun harness can log it as a permanent bank regression line. */
export const BANK_STATS = { total: QUIZ_BANK.length, generated: GENERATED.length, hand: HAND_ALL.length };
