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

/* ------------------------------------------------------------------ export */
/* Assign a stable id to every item (the engine tracks served/unserved by id). */
const GENERATED = generateLexical();
const PC_IMP = PC_IMP_ITEMS.map(it => ({ ...it, skill:"pc_vs_imparfait", diff:3, weeks:[8,9,11] }));
const HAND_ALL = [...HAND, ...PC_IMP];
export const QUIZ_BANK = [...GENERATED, ...HAND_ALL].map((it, i) => ({ id: i, ...it }));

/* Exact source split, known at construction (no heuristic) — surfaced so the
   dryrun harness can log it as a permanent bank regression line. */
export const BANK_STATS = { total: QUIZ_BANK.length, generated: GENERATED.length, hand: HAND_ALL.length };
