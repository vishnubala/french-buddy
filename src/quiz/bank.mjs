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
  /* etre_avoir — vetted set lives in ETRE_AVOIR_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* present_verbs — vetted set lives in PRESENT_VERBS_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* reflexive — vetted set lives in REFLEXIVE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* passe_compose — vetted set lives in PASSE_COMPOSE_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* imparfait — vetted formation set lives in IMPARFAIT_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* pc_vs_imparfait — the flagship discrimination bank lives in PC_IMP_ITEMS
     below (vetted, 20 items); it's spread into the export with its constant
     tags, so it does NOT live here in HAND. */

  /* futur_proche — vetted set lives in FUTUR_PROCHE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* negation — vetted set lives in NEGATION_ITEMS below, spread into the export
     with its constant tags (not here in HAND). */

  /* imperative — vetted set lives in IMPERATIVE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* partitive_quantity — vetted set lives in PARTITIVE_ITEMS below, spread into
     the export with its constant tags (not here in HAND). */

  /* demonstr_possess — vetted set lives in DEMONSTR_POSSESS_ITEMS below, spread
     into the export with its constant tags (not here in HAND). */

  /* adjectives — vetted set lives in ADJECTIVE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* comparatives — vetted set lives in COMPARATIVE_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

  /* prepositions — vetted set lives in PREPOSITIONS_ITEMS below, spread into the
     export with its constant tags (not here in HAND). */

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

/* ============================================================================
   MECHANICAL grammar banks — DRAFTED by Claude Code from advisor frameworks
   (this session), using ONLY course-taught verbs/vocab (checked against
   LESSONS: être/avoir, -er verbs, finir/choisir, prendre-family, aller, faire;
   avoir faim/froid/raison/ans — soif/peur are NOT taught and are avoided). All
   diff:2, 3 options. §8.4: every ok/no names the correct answer AND why the
   wrong option is wrong. Correct answer is authored at opts[0] for reviewability
   — the runtime shuffle (main.js) randomizes display position, so position
   carries no signal. NOT yet native-reviewed (CLAUDE.md §8.2).
   ============================================================================ */

/* etre_avoir — present être/avoir + choosing which (être = identity/state/
   description; avoir = possession, age, avoir faim/froid/raison). */
const ETRE_AVOIR_ITEMS = [
  { prompt:"J'______ faim. (be hungry)", opts:["ai","suis","es"], answer:0,
    ok:"<b>ai</b> — French says avoir faim ('have hunger'), so j'ai faim.",
    no:"Hunger uses avoir → j'<b>ai</b> faim, never 'je suis faim'. être is for identity/state, not hunger." },
  { prompt:"Elle ______ française.", opts:["est","a","es"], answer:0,
    ok:"<b>est</b> — nationality/identity takes être: elle est française.",
    no:"Identity → être → elle <b>est</b> française. 'a' is avoir (to have), wrong for who someone is." },
  { prompt:"Nous ______ étudiants.", opts:["sommes","avons","êtes"], answer:0,
    ok:"<b>sommes</b> — identity → être, and nous → sommes: nous sommes étudiants.",
    no:"Identity → être, nous form <b>sommes</b>. 'avons' is avoir; 'êtes' is the vous form." },
  { prompt:"Tu ______ un frère ?", opts:["as","es","a"], answer:0,
    ok:"<b>as</b> — possession is avoir; tu → as: tu as un frère ?",
    no:"Possession uses avoir → tu <b>as</b>. 'es' is être (you are); 'a' is the il/elle form." },
  { prompt:"J'______ vingt ans. (age)", opts:["ai","suis","as"], answer:0,
    ok:"<b>ai</b> — age is avoir + ans: j'ai vingt ans.",
    no:"Age uses avoir → j'<b>ai</b> vingt ans, never 'je suis vingt ans'. French counts age with 'have'." },
  { prompt:"Vous ______ professeur ?", opts:["êtes","avez","est"], answer:0,
    ok:"<b>êtes</b> — profession/identity → être; vous → êtes: vous êtes professeur ?",
    no:"Identity → être, vous form <b>êtes</b>. 'avez' is avoir; 'est' is il/elle." },
  { prompt:"Ils ______ contents.", opts:["sont","ont","es"], answer:0,
    ok:"<b>sont</b> — describing a mood/state → être; ils → sont: ils sont contents.",
    no:"A description → être, ils form <b>sont</b>. 'ont' is avoir (they have); 'es' is tu." },
  { prompt:"J'______ froid, ferme la fenêtre. (feel cold)", opts:["ai","suis","fais"], answer:0,
    ok:"<b>ai</b> — a person who feels cold says avoir froid: j'ai froid.",
    no:"Feeling cold = avoir froid → j'<b>ai</b> froid, not 'je suis froid'. (Weather is 'il fait froid'.)" },
  { prompt:"Vous ______ raison. (be right)", opts:["avez","êtes","avons"], answer:0,
    ok:"<b>avez</b> — 'to be right' is avoir raison; vous → avez raison.",
    no:"'Being right' uses avoir → vous <b>avez</b> raison ('have reason'). être is wrong; 'avons' is nous." },
  { prompt:"Le café ______ chaud.", opts:["est","a","fait"], answer:0,
    ok:"<b>est</b> — a thing's quality takes être: le café est chaud (the coffee is hot).",
    no:"An object's description → être → le café <b>est</b> chaud. avoir chaud (a) is for a person feeling hot." },
  { prompt:"Elles ______ deux voitures.", opts:["ont","sont","avez"], answer:0,
    ok:"<b>ont</b> — possession is avoir; elles → ont: elles ont deux voitures.",
    no:"Possession → avoir, elles form <b>ont</b>. 'sont' is être; 'avez' is vous." },
  { prompt:"Je ______ à Paris. (location)", opts:["suis","ai","es"], answer:0,
    ok:"<b>suis</b> — saying where you are takes être: je suis à Paris.",
    no:"Location → être → je <b>suis</b> à Paris. 'ai' is avoir, wrong for saying where you are." },
];

/* present_verbs — -er (e/es/e/ons/ez/ent), -ir with -iss- (finir/choisir),
   prendre-family (drops d in plural, doubles n for ils). */
const PRESENT_VERBS_ITEMS = [
  { prompt:"Nous ______ à la question. (finir)", opts:["finissons","finons","finissez"], answer:0,
    ok:"<b>finissons</b> — -ir verbs insert -iss- in the plural: nous finissons.",
    no:"finir keeps -iss- in the plural → nous <b>finissons</b>, never 'finons'. 'finissez' is vous." },
  { prompt:"Je ______ le français. (parler)", opts:["parle","parles","parlons"], answer:0,
    ok:"<b>parle</b> — -er verb, je → -e: je parle.",
    no:"je → -e → je <b>parle</b>. 'parles' is the tu form; 'parlons' is nous." },
  { prompt:"Ils ______ à six heures. (finir)", opts:["finissent","finent","finissons"], answer:0,
    ok:"<b>finissent</b> — ils/elles → -issent for -ir verbs: ils finissent.",
    no:"-ir plural keeps -iss- → ils <b>finissent</b>, not 'finent'. 'finissons' is nous." },
  { prompt:"Tu ______ le bus. (prendre)", opts:["prends","prend","prens"], answer:0,
    ok:"<b>prends</b> — prendre: je/tu prends. tu prends le bus.",
    no:"tu → <b>prends</b> (with -ds). 'prend' is il/elle; 'prens' isn't a form." },
  { prompt:"Vous ______ un café ? (prendre)", opts:["prenez","prendez","prennez"], answer:0,
    ok:"<b>prenez</b> — prendre drops the d in the plural: vous prenez.",
    no:"prendre loses its d before plural endings → vous <b>prenez</b>, not 'prendez'." },
  { prompt:"Elles ______ le métro. (prendre)", opts:["prennent","prendent","prenent"], answer:0,
    ok:"<b>prennent</b> — prendre doubles the n for ils/elles: elles prennent.",
    no:"ils/elles → <b>prennent</b> (double n, no d). 'prendent' wrongly keeps the d." },
  { prompt:"Nous ______ à Paris. (habiter)", opts:["habitons","habitez","habites"], answer:0,
    ok:"<b>habitons</b> — -er verb, nous → -ons: nous habitons.",
    no:"nous → -ons → nous <b>habitons</b>. 'habitez' is vous; 'habites' is tu." },
  { prompt:"Elle ______ un livre. (choisir)", opts:["choisit","choisi","choise"], answer:0,
    ok:"<b>choisit</b> — -ir verb, il/elle → -it: elle choisit.",
    no:"il/elle → <b>choisit</b>. 'choisi' is the past participle, not the present." },
  { prompt:"Je ______ le professeur. (comprendre)", opts:["comprends","comprend","comprenez"], answer:0,
    ok:"<b>comprends</b> — comprendre works like prendre: je comprends.",
    no:"je → <b>comprends</b>. 'comprend' is il/elle; 'comprenez' is vous." },
  { prompt:"Ils ______ la télé. (regarder)", opts:["regardent","regardes","regarde"], answer:0,
    ok:"<b>regardent</b> — -er verb, ils → -ent (silent): ils regardent.",
    no:"ils/elles → -ent → ils <b>regardent</b>. 'regarde' is il/elle singular; 'regardes' is tu." },
  { prompt:"Vous ______ le français. (parler)", opts:["parlez","parler","parlé"], answer:0,
    ok:"<b>parlez</b> — vous → -ez: vous parlez.",
    no:"vous → <b>parlez</b>. 'parler' is the infinitive and 'parlé' the participle — same /e/ sound, wrong form." },
  { prompt:"Je ______ à huit heures. (finir)", opts:["finis","finit","fini"], answer:0,
    ok:"<b>finis</b> — -ir verb, je → -is: je finis.",
    no:"je → <b>finis</b>. 'finit' is il/elle; 'fini' is the participle." },
];

/* reflexive — pronoun agrees with subject (me/te/se/nous/vous/se); elision
   before a vowel (je m'appelle). */
const REFLEXIVE_ITEMS = [
  { prompt:"Je ______ à 7h. (se lever)", opts:["me lève","lève","te lèves"], answer:0,
    ok:"<b>me lève</b> — je pairs with me: je me lève.",
    no:"je → me → je <b>me lève</b>. Dropping the pronoun ('lève') loses the reflexive; 'te lèves' is for tu." },
  { prompt:"Tu ______ tôt. (se coucher)", opts:["te couches","se couche","me couche"], answer:0,
    ok:"<b>te couches</b> — tu pairs with te: tu te couches.",
    no:"tu → te → tu <b>te couches</b>. 'se couche' is il/elle; 'me couche' is je." },
  { prompt:"Elle ______ à 8h. (se réveiller)", opts:["se réveille","me réveille","te réveilles"], answer:0,
    ok:"<b>se réveille</b> — il/elle → se: elle se réveille.",
    no:"elle → se → elle <b>se réveille</b>. 'me' is for je; 'te' for tu." },
  { prompt:"Le matin, nous ______. (se doucher)", opts:["nous douchons","douchons","nous douchez"], answer:0,
    ok:"<b>nous douchons</b> — nous keeps its reflexive pronoun: nous nous douchons.",
    no:"nous → nous + -ons → <b>nous douchons</b>. Dropping the pronoun ('douchons') loses the reflexive; 'douchez' is vous." },
  { prompt:"Comment ______-vous ? (s'appeler)", opts:["vous appelez","appelez","vous appellez"], answer:0,
    ok:"<b>vous appelez</b> — vous keeps its pronoun: comment vous appelez-vous ?",
    no:"vous → <b>vous appelez</b> (one l). Dropping the pronoun ('appelez') loses the reflexive." },
  { prompt:"Je ______ Marie. (s'appeler)", opts:["m'appelle","me appelle","appelle"], answer:0,
    ok:"<b>m'appelle</b> — me elides before a vowel: je m'appelle Marie.",
    no:"me → m' before a vowel → je <b>m'appelle</b>, never 'me appelle'." },
  { prompt:"Ils ______ tard. (se coucher)", opts:["se couchent","se couche","te couches"], answer:0,
    ok:"<b>se couchent</b> — ils → se + -ent: ils se couchent.",
    no:"ils → se and -ent → ils <b>se couchent</b>. 'se couche' is singular il/elle." },
  { prompt:"Tu ______ à quelle heure ? (se réveiller)", opts:["te réveilles","se réveille","me réveille"], answer:0,
    ok:"<b>te réveilles</b> — tu → te: tu te réveilles.",
    no:"tu → te → tu <b>te réveilles</b>. 'se' is for il/elle/ils; 'me' for je." },
  { prompt:"Elle ______ les mains. (se laver)", opts:["se lave","lave","me lave"], answer:0,
    ok:"<b>se lave</b> — il/elle → se: elle se lave les mains.",
    no:"elle → se → elle <b>se lave</b>. Dropping it ('lave') makes it non-reflexive (washing something else)." },
  { prompt:"Le matin, vous ______. (se lever)", opts:["vous levez","levez","vous levé"], answer:0,
    ok:"<b>vous levez</b> — vous keeps its pronoun: vous vous levez.",
    no:"vous → vous + -ez → <b>vous levez</b>. 'levez' alone drops the reflexive; 'levé' is a participle." },
];

/* imparfait (formation only — aspect is pc_vs_imparfait's job). Stem = nous-form
   minus -ons + -ais/-ait/-ions/-aient; être irregular (ét-). Spelling traps:
   -ger keeps e before a (mangeais) but not before i (mangions); -cer takes ç. */
const IMPARFAIT_ITEMS = [
  { prompt:"Je ______ une pomme. (manger, imparfait)", opts:["mangeais","mangais","mangeai"], answer:0,
    ok:"<b>mangeais</b> — -ger verbs keep the e before -ais: je mangeais.",
    no:"manger keeps its e before an a → je <b>mangeais</b>, not 'mangais'." },
  { prompt:"Tu ______ à Paris. (habiter, imparfait)", opts:["habitais","habitait","habites"], answer:0,
    ok:"<b>habitais</b> — imparfait tu → -ais: tu habitais.",
    no:"tu imparfait → <b>habitais</b>. 'habitait' is il/elle; 'habites' is the present." },
  { prompt:"Il ______ beau. (faire, imparfait)", opts:["faisait","fesait","faisrait"], answer:0,
    ok:"<b>faisait</b> — stem from nous faisons → fais- + -ait: il faisait.",
    no:"faire's imparfait stem is the nous-form fais- → il <b>faisait</b> (spelled ai), not 'fesait'." },
  { prompt:"Nous ______ français. (parler, imparfait)", opts:["parlions","parlons","parlaient"], answer:0,
    ok:"<b>parlions</b> — imparfait nous → -ions: nous parlions.",
    no:"imparfait nous → <b>parlions</b>. 'parlons' is the present; 'parlaient' is ils." },
  { prompt:"Je ______ à 8h. (commencer, imparfait)", opts:["commençais","commencais","commenceais"], answer:0,
    ok:"<b>commençais</b> — -cer verbs take ç before a: je commençais.",
    no:"commencer needs the cedilla ç before a → je <b>commençais</b>, not 'commencais'." },
  { prompt:"Elles ______ la télé. (regarder, imparfait)", opts:["regardaient","regardais","regardent"], answer:0,
    ok:"<b>regardaient</b> — ils/elles imparfait → -aient: elles regardaient.",
    no:"ils/elles → -aient → elles <b>regardaient</b>. 'regardais' is je/tu; 'regardent' is the present." },
  { prompt:"J'______ étudiant. (être, imparfait)", opts:["étais","étai","suis"], answer:0,
    ok:"<b>étais</b> — être is irregular in the imparfait (stem ét-): j'étais.",
    no:"être's imparfait uses ét- → j'<b>étais</b>. 'suis' is the present; 'étai' isn't a form." },
  { prompt:"Vous ______ à la maison. (être, imparfait)", opts:["étiez","êtiez","étez"], answer:0,
    ok:"<b>étiez</b> — être imparfait, vous → étiez.",
    no:"être imparfait vous → <b>étiez</b> (é, no circumflex), not 'êtiez'." },
  { prompt:"Nous ______ à sept heures. (finir, imparfait)", opts:["finissions","finions","finissons"], answer:0,
    ok:"<b>finissions</b> — stem from nous finissons → finiss- + -ions: nous finissions.",
    no:"-ir verbs keep -iss- in the imparfait too → nous <b>finissions</b>, not 'finions'. 'finissons' is the present." },
  { prompt:"Elle ______ le métro. (prendre, imparfait)", opts:["prenait","prendait","prenais"], answer:0,
    ok:"<b>prenait</b> — stem from nous prenons → pren- + -ait: elle prenait.",
    no:"prendre's imparfait stem is pren- (no d) → elle <b>prenait</b>. 'prenais' is je/tu." },
  { prompt:"Tu ______ beaucoup. (travailler, imparfait)", opts:["travaillais","travaillait","travailles"], answer:0,
    ok:"<b>travaillais</b> — tu imparfait → -ais: tu travaillais.",
    no:"tu → -ais → tu <b>travaillais</b>. 'travaillait' is il/elle; 'travailles' is the present." },
  { prompt:"Nous ______ une pizza. (manger, imparfait)", opts:["mangions","mangeions","mangeons"], answer:0,
    ok:"<b>mangions</b> — before -ions the e isn't needed (i keeps g soft): nous mangions.",
    no:"manger keeps e before a/o but NOT before -ions → nous <b>mangions</b>, not 'mangeions'. 'mangeons' is the present." },
];

/* futur_proche — conjugated aller + infinitive; the second verb stays infinitive. */
const FUTUR_PROCHE_ITEMS = [
  { prompt:"Demain, je ______ le film. (regarder)", opts:["vais regarder","vais regarde","vas regarder"], answer:0,
    ok:"<b>vais regarder</b> — futur proche = aller + infinitive: je vais regarder.",
    no:"The second verb stays infinitive → je <b>vais regarder</b>, not 'vais regarde'. 'vas' is the tu form." },
  { prompt:"Ce soir, nous ______ une pizza. (manger)", opts:["allons manger","allons mangeons","allez manger"], answer:0,
    ok:"<b>allons manger</b> — aller (nous → allons) + infinitive: nous allons manger.",
    no:"aller + infinitive → nous <b>allons manger</b>. 'mangeons' is conjugated (wrong here); 'allez' is vous." },
  { prompt:"Tu ______ le train. (prendre)", opts:["vas prendre","vas prends","va prendre"], answer:0,
    ok:"<b>vas prendre</b> — tu → vas + infinitive: tu vas prendre.",
    no:"tu → vas + infinitive <b>vas prendre</b>. 'prends' is conjugated; 'va' is il/elle." },
  { prompt:"Ils ______ le livre. (finir)", opts:["vont finir","vont finissent","allons finir"], answer:0,
    ok:"<b>vont finir</b> — ils → vont + infinitive: ils vont finir le livre.",
    no:"ils → vont + infinitive <b>vont finir</b>. 'finissent' is conjugated; 'allons' is nous." },
  { prompt:"Je ne ______ pas sortir ce soir. (aller)", opts:["vais","vas","suis"], answer:0,
    ok:"<b>vais</b> — negation wraps the conjugated aller: je ne vais pas sortir.",
    no:"ne … pas surrounds the aller form → je ne <b>vais</b> pas sortir. 'vas' is tu." },
  { prompt:"Vous ______ un café. (prendre)", opts:["allez prendre","allez prenez","vont prendre"], answer:0,
    ok:"<b>allez prendre</b> — vous → allez + infinitive: vous allez prendre.",
    no:"vous → allez + infinitive <b>allez prendre</b>. 'prenez' is conjugated; 'vont' is ils." },
  { prompt:"Elle ______ à la maison. (rester)", opts:["va rester","va reste","vas rester"], answer:0,
    ok:"<b>va rester</b> — elle → va + infinitive: elle va rester.",
    no:"elle → va + infinitive <b>va rester</b>. 'reste' is conjugated; 'vas' is tu." },
  { prompt:"Je ______ le français. (apprendre)", opts:["vais apprendre","vais apprend","vas apprendre"], answer:0,
    ok:"<b>vais apprendre</b> — aller + infinitive: je vais apprendre le français.",
    no:"the second verb stays infinitive → je <b>vais apprendre</b>, not 'apprend'. 'vas' is tu." },
  { prompt:"Nous ______ tôt. (partir)", opts:["allons partir","allons partons","allez partir"], answer:0,
    ok:"<b>allons partir</b> — nous → allons + infinitive: nous allons partir.",
    no:"nous → allons + infinitive <b>allons partir</b>. 'partons' is conjugated; 'allez' is vous." },
  { prompt:"Il ne ______ pas travailler demain. (aller)", opts:["va","vas","va pas"], answer:0,
    ok:"<b>va</b> — negation wraps the aller form: il ne va pas travailler.",
    no:"ne … pas wraps aller → il ne <b>va</b> pas travailler. 'vas' is tu." },
];

/* imperative — verb, no subject pronoun; -er tu-form drops -s (Mange!), -ir keeps
   it (Finis!), vous (Prenez!), nous = 'let's' (Allons!). vous for strangers. */
const IMPERATIVE_ITEMS = [
  { prompt:"(to a stranger) ______ à droite. (tourner)", opts:["Tournez","Tourne","Tournes"], answer:0,
    ok:"<b>Tournez</b> — a stranger takes vous; the command drops the pronoun: Tournez à droite.",
    no:"For a stranger use the vous command → <b>Tournez</b>. 'Tourne' is the tu command (for friends)." },
  { prompt:"(to a friend) ______ ta chambre ! (regarder)", opts:["Regarde","Regardes","Regardez"], answer:0,
    ok:"<b>Regarde</b> — the tu imperative of -er verbs drops the -s: Regarde !",
    no:"tu command of an -er verb loses its -s → <b>Regarde</b>, not 'Regardes'. 'Regardez' is vous." },
  { prompt:"______-y ! ('let's go', aller)", opts:["Allons","Allez","Va"], answer:0,
    ok:"<b>Allons</b> — the nous imperative means 'let's': Allons-y ! (let's go).",
    no:"'Let's go' is the nous command → <b>Allons</b>-y. 'Allez' is vous; 'Va' is tu." },
  { prompt:"(to a stranger) ______ la ligne 1. (prendre)", opts:["Prenez","Prends","Prendez"], answer:0,
    ok:"<b>Prenez</b> — vous command: Prenez la ligne 1.",
    no:"vous command of prendre → <b>Prenez</b>. 'Prends' is tu; 'Prendez' isn't a form." },
  { prompt:"(to a friend) ______ ! (manger)", opts:["Mange","Manges","Mangez"], answer:0,
    ok:"<b>Mange</b> — tu imperative of an -er verb drops -s: Mange !",
    no:"tu -er command loses -s → <b>Mange</b>, not 'Manges'. 'Mangez' is vous." },
  { prompt:"(to a stranger) ______ tout droit. (continuer)", opts:["Continuez","Continue","Continues"], answer:0,
    ok:"<b>Continuez</b> — vous command: Continuez tout droit.",
    no:"For a stranger → vous <b>Continuez</b>. 'Continue' is the tu command." },
  { prompt:"(to a friend) ______ le bus. (prendre)", opts:["Prends","Prend","Prenez"], answer:0,
    ok:"<b>Prends</b> — tu command of prendre keeps -ds: Prends le bus.",
    no:"tu command → <b>Prends</b>. 'Prend' (no -s) is the il form; 'Prenez' is vous." },
  { prompt:"(to a friend) ______ ! (finir)", opts:["Finis","Fini","Finissez"], answer:0,
    ok:"<b>Finis</b> — the tu imperative of -ir verbs keeps its -s: Finis !",
    no:"-ir tu command keeps -s → <b>Finis</b> (unlike -er verbs, which drop it). 'Finissez' is vous." },
  { prompt:"______ ! ('let's watch', regarder)", opts:["Regardons","Regardez","Regarde"], answer:0,
    ok:"<b>Regardons</b> — the nous command means 'let's': Regardons !",
    no:"'Let's watch' → nous command <b>Regardons</b>. 'Regardez' is vous; 'Regarde' is tu." },
  { prompt:"(to a friend) ______ à la maison. (aller)", opts:["Va","Vas","Allez"], answer:0,
    ok:"<b>Va</b> — the tu imperative of aller drops the -s: Va à la maison.",
    no:"tu command of aller → <b>Va</b> (no -s). 'Vas' is the present tu; 'Allez' is vous." },
];

/* prepositions — à+le=au, à+les=aux (à la / à l' no fusion); place phrases
   à côté de / en face de / près de with de+le=du, de+les=des; devant/derrière/
   entre take no de. */
const PREPOSITIONS_ITEMS = [
  { prompt:"Je vais ______ musée. (le)", opts:["au","à le","à la"], answer:0,
    ok:"<b>au</b> — à + le fuses to au: je vais au musée.",
    no:"à + le must fuse → <b>au</b> musée, never 'à le'. 'à la' is for feminine nouns." },
  { prompt:"Elle va ______ toilettes. (les)", opts:["aux","à les","à la"], answer:0,
    ok:"<b>aux</b> — à + les fuses to aux: aux toilettes.",
    no:"à + les → <b>aux</b>, never 'à les'." },
  { prompt:"Nous allons ______ gare. (la)", opts:["à la","au","à le"], answer:0,
    ok:"<b>à la</b> — à + la doesn't fuse (feminine): à la gare.",
    no:"à + la stays <b>à la</b> gare — only à+le and à+les fuse (au/aux)." },
  { prompt:"Le café est à côté ______ musée. (le)", opts:["du","de le","de la"], answer:0,
    ok:"<b>du</b> — à côté de + le → du: à côté du musée.",
    no:"de + le fuses to du → à côté <b>du</b> musée, never 'de le'." },
  { prompt:"La poste est en face ______ gare. (la)", opts:["de la","du","de le"], answer:0,
    ok:"<b>de la</b> — en face de + la (feminine, no fusion): en face de la gare.",
    no:"de + la doesn't fuse → en face <b>de la</b> gare. Only de+le=du and de+les=des fuse." },
  { prompt:"J'habite près ______ parc. (le)", opts:["du","de le","des"], answer:0,
    ok:"<b>du</b> — près de + le → du: près du parc.",
    no:"de + le → <b>du</b> → près du parc, not 'de le'. 'des' is de+les (plural)." },
  { prompt:"Le taxi est ______ la gare. (in front of)", opts:["devant","devant de","en face"], answer:0,
    ok:"<b>devant</b> — devant takes no de: devant la gare (in front of the station).",
    no:"devant is used directly, no de → <b>devant</b> la gare, not 'devant de'." },
  { prompt:"La pharmacie est ______ le café et la banque. (between)", opts:["entre","entre de","au"], answer:0,
    ok:"<b>entre</b> — entre needs no de: entre le café et la banque.",
    no:"entre takes nouns directly → <b>entre</b> le café et la banque, not 'entre de'." },
  { prompt:"Je vais ______ restaurant. (le)", opts:["au","à le","du"], answer:0,
    ok:"<b>au</b> — à + le → au: au restaurant.",
    no:"à + le → <b>au</b> restaurant. 'du' is de+le (of the), a different meaning." },
  { prompt:"Les toilettes sont ______ fond du couloir. (le, 'at the')", opts:["au","à le","à la"], answer:0,
    ok:"<b>au</b> — à + le = au: au fond du couloir (at the end of the corridor).",
    no:"à + le → <b>au</b> fond. ('du couloir' already shows de+le=du.)" },
  { prompt:"La banque est à côté ______ toilettes. (les)", opts:["des","de les","du"], answer:0,
    ok:"<b>des</b> — à côté de + les → des: à côté des toilettes.",
    no:"de + les fuses to des → à côté <b>des</b> toilettes, never 'de les'." },
  { prompt:"Le parc est ______ la maison. (behind)", opts:["derrière","derrière de","près"], answer:0,
    ok:"<b>derrière</b> — derrière takes no de: derrière la maison.",
    no:"derrière is used directly → <b>derrière</b> la maison, not 'derrière de'." },
];

/* ------------------------------ comparatives & superlatives (vetted) */
/* Wired VERBATIM. Tagged skill:"comparatives", diff:2, weeks:[11] via the .map
   at the export. plus/moins/aussi … que; the irregular bon→meilleur (adjective)
   vs bien→mieux (adverb); autant for quantities; le moins/le meilleur superlative. */
const COMPARATIVE_ITEMS = [
  { prompt:"Marie est ______ grande que Paul. (more)", opts:["plus","meilleure","mieux"], answer:0,
    ok:"<b>plus</b> — the regular comparative of an adjective: plus grande que ('taller than').",
    no:"Ordinary comparison of an adjective uses <b>plus … que</b> → plus grande que. (meilleur/mieux are the special 'better' words.)" },
  { prompt:"Ce café est ______ que l'autre. (better — quality of a thing)", opts:["plus bon","meilleur","mieux"], answer:1,
    ok:"<b>meilleur</b> — the comparative of the adjective bon is the irregular meilleur, never 'plus bon'.",
    no:"bon has an irregular comparative: <b>meilleur</b> (not 'plus bon'). It's an adjective describing the café." },
  { prompt:"Elle chante ______ que moi. (better — how she does it)", opts:["meilleur","mieux","plus bien"], answer:1,
    ok:"<b>mieux</b> — 'better' describing a VERB (how she sings) is the adverb mieux, the irregular form of bien.",
    no:"Modifying a verb (chante) needs the adverb → <b>mieux</b> (irregular of bien), not the adjective meilleur." },
  { prompt:"Le train est ______ rapide que le bus. (faster)", opts:["plus","meilleur","mieux"], answer:0,
    ok:"<b>plus</b> — rapide is a normal adjective → plus rapide que.",
    no:"rapide takes the regular <b>plus … que</b> → plus rapide que." },
  { prompt:"Il travaille ______ que son frère. (less)", opts:["moins","moindre","pire"], answer:0,
    ok:"<b>moins</b> — 'less' with a verb → moins que: il travaille moins que.",
    no:"'Less' is <b>moins … que</b> → il travaille moins que son frère." },
  { prompt:"Cette pizza est ______ bonne que l'autre. (less)", opts:["moins","plus","mieux"], answer:0,
    ok:"<b>moins</b> — 'less good' uses moins + bonne (moins doesn't have an irregular form): moins bonne que.",
    no:"'Less good' is regular → <b>moins</b> bonne que. (Only 'more good' becomes the irregular meilleur.)" },
  { prompt:"Anne et Léa sont ______ grandes l'une que l'autre. (as)", opts:["aussi","autant","plus"], answer:0,
    ok:"<b>aussi</b> — equality with an adjective → aussi … que: aussi grandes que.",
    no:"'As … as' with an adjective is <b>aussi … que</b> → aussi grandes que. (autant is for quantities/verbs.)" },
  { prompt:"Aujourd'hui je vais ______ qu'hier. (better — feeling/state)", opts:["meilleur","mieux","plus bon"], answer:1,
    ok:"<b>mieux</b> — 'I'm doing better' (aller + adverb) → je vais mieux. A fixed, very common phrase.",
    no:"With aller ('to feel/do'), 'better' is the adverb <b>mieux</b> → je vais mieux, never meilleur." },
  { prompt:"C'est le ______ restaurant de la ville. (the best)", opts:["plus bon","meilleur","mieux"], answer:1,
    ok:"<b>meilleur</b> — the superlative of bon is le meilleur ('the best'), an adjective for restaurant.",
    no:"The superlative of bon is <b>le meilleur</b> (not 'le plus bon') — adjective describing the restaurant." },
  { prompt:"Paul court ______ vite que Marc. (as)", opts:["aussi","autant","aussi bien"], answer:0,
    ok:"<b>aussi</b> — aussi … que before an adverb (vite): aussi vite que.",
    no:"Equality before an adverb → <b>aussi</b> vite que." },
  { prompt:"Il a ______ d'argent que moi. (as much)", opts:["aussi","autant","plus bien"], answer:1,
    ok:"<b>autant</b> — equality of a QUANTITY (money) → autant de … que: autant d'argent que.",
    no:"'As much (of)' a quantity uses <b>autant de … que</b>, not aussi → autant d'argent que." },
  { prompt:"De tous les livres, c'est le ______ intéressant. (least)", opts:["moins","pire","mauvais"], answer:0,
    ok:"<b>moins</b> — the superlative 'the least' is le moins + adjective: le moins intéressant.",
    no:"'The least' = <b>le moins</b> intéressant. (pire/mauvais are 'worse/bad', not 'least'.)" },
];

/* ------------------------------ negation (placement & scope, vetted) */
/* Wired VERBATIM. Tagged skill:"negation", diff:2, weeks:[2,8,9,10] via the .map
   at the export. ne … pas/jamais/rien/plus placement (present, passé composé,
   futur proche), partitive/indefinite → de under negation, Personne ne as
   subject, and the spoken-French ne-drop. */
const NEGATION_ITEMS = [
  { prompt:"Present: 'I don't speak French.' Je ______ français.", opts:["ne parle pas","parle ne pas","ne pas parle"], answer:0,
    ok:"<b>ne parle pas</b> — ne … pas wraps around the conjugated verb: je ne parle pas.",
    no:"ne and pas hug the verb → <b>ne parle pas</b>. (ne before, pas after.)" },
  { prompt:"Passé composé: 'I didn't eat.' Je ______.", opts:["n'ai pas mangé","n'ai mangé pas","ne mangé pas ai"], answer:0,
    ok:"<b>n'ai pas mangé</b> — in compound tenses, ne … pas wraps the AUXILIARY, not the participle: n'ai pas mangé.",
    no:"pas goes right after the auxiliary (avoir/être), before the participle → <b>n'ai pas mangé</b>, never 'ai mangé pas'." },
  { prompt:"'I never watch TV.' Je ______ la télé.", opts:["ne regarde jamais","ne jamais regarde","regarde ne jamais"], answer:0,
    ok:"<b>ne regarde jamais</b> — jamais takes pas's slot after the verb: ne … jamais.",
    no:"ne … jamais wraps the verb like ne … pas → <b>ne regarde jamais</b>." },
  { prompt:"'I have never eaten there.' Je ______ mangé là-bas.", opts:["n'ai jamais","ne jamais ai","n'ai jamais pas"], answer:0,
    ok:"<b>n'ai jamais</b> — in the passé composé, jamais sits after the auxiliary: je n'ai jamais mangé. (No 'pas' — jamais replaces it.)",
    no:"jamais goes after the auxiliary and there's no pas → <b>n'ai jamais</b> mangé." },
  { prompt:"'I eat nothing / I don't eat anything.' Je ______.", opts:["ne mange rien","ne rien mange","mange ne rien"], answer:0,
    ok:"<b>ne mange rien</b> — rien takes the post-verb slot: ne … rien.",
    no:"ne … rien wraps the verb → <b>ne mange rien</b> ('I eat nothing')." },
  { prompt:"'There's no more bread.' Il ______ pain.", opts:["n'y a plus de","n'y a plus du","y a ne plus de"], answer:0,
    ok:"<b>n'y a plus de</b> — ne … plus ('no more'), and negation flattens the article to de: plus de pain.",
    no:"ne … plus = 'no more', and after negation the partitive → de → <b>n'y a plus de</b> pain." },
  { prompt:"'I don't want any coffee.' Je ne veux pas ______ café.", opts:["de","du","le"], answer:0,
    ok:"<b>de</b> — after a negative, du/de la/des collapse to de: pas de café.",
    no:"Negation flattens the partitive → <b>de</b>: je ne veux pas de café (not 'pas du café')." },
  { prompt:"'I'm not going to go.' (futur proche) Je ______ aller.", opts:["ne vais pas","ne vais aller pas","vais ne pas"], answer:0,
    ok:"<b>ne vais pas</b> — in futur proche, ne … pas wraps the conjugated aller, before the infinitive: je ne vais pas aller.",
    no:"pas goes after the conjugated verb (vais), before the infinitive → <b>ne vais pas</b> aller." },
  { prompt:"'Nobody is here.' ______ est ici.", opts:["Personne ne","Ne personne","Personne pas"], answer:0,
    ok:"<b>Personne ne</b> — when 'nobody' is the subject, it leads and ne stays before the verb: Personne n'est ici.",
    no:"Subject 'nobody' → <b>Personne ne</b> … (Personne n'est ici). No pas." },
  { prompt:"'I don't have a car.' Je n'ai pas ______ voiture.", opts:["de","une","la"], answer:0,
    ok:"<b>de</b> — negation turns the indefinite une into de: je n'ai pas de voiture.",
    no:"After a negative, un/une → de → <b>pas de</b> voiture." },
  { prompt:"Spoken French often drops one part of the negation. Which?", opts:["the 'ne' (t'inquiète pas)","the 'pas'","both"], answer:0,
    ok:"<b>the 'ne'</b> — in casual speech the ne is commonly dropped: 'je sais pas', 't'inquiète pas'. pas carries the negation.",
    no:"Casual speech drops <b>ne</b>, keeping pas: 'je sais pas'. (In writing, keep both.)" },
  { prompt:"'I don't eat meat anymore.' Je ______ viande.", opts:["ne mange plus de","ne mange pas plus","ne plus mange de"], answer:0,
    ok:"<b>ne mange plus de</b> — ne … plus ('no longer'), + de after negation: je ne mange plus de viande.",
    no:"'No longer' = ne … plus, and negation → de → <b>ne mange plus de</b> viande." },
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
const ETRE_AV    = ETRE_AVOIR_ITEMS.map(it       => ({ ...it, skill:"etre_avoir",          diff:2, weeks:[1,2]    }));
const PRES_VB    = PRESENT_VERBS_ITEMS.map(it     => ({ ...it, skill:"present_verbs",       diff:2, weeks:[2,7,11] }));
const REFLEX     = REFLEXIVE_ITEMS.map(it         => ({ ...it, skill:"reflexive",           diff:2, weeks:[5]      }));
const IMPARF     = IMPARFAIT_ITEMS.map(it         => ({ ...it, skill:"imparfait",           diff:2, weeks:[11]     }));
const FUTUR      = FUTUR_PROCHE_ITEMS.map(it      => ({ ...it, skill:"futur_proche",        diff:2, weeks:[10]     }));
const IMPER      = IMPERATIVE_ITEMS.map(it        => ({ ...it, skill:"imperative",          diff:2, weeks:[4]      }));
const PREPOS     = PREPOSITIONS_ITEMS.map(it      => ({ ...it, skill:"prepositions",        diff:2, weeks:[4]      }));
const COMPAR     = COMPARATIVE_ITEMS.map(it       => ({ ...it, skill:"comparatives",         diff:2, weeks:[11]     }));
const NEGAT      = NEGATION_ITEMS.map(it          => ({ ...it, skill:"negation",             diff:2, weeks:[2,8,9,10] }));
const HAND_ALL = [...HAND, ...PC_IMP, ...PARTITIVE, ...ADJECTIVES, ...PASSE_COMP, ...DEM_POSS, ...PRONUN,
                  ...ETRE_AV, ...PRES_VB, ...REFLEX, ...IMPARF, ...FUTUR, ...IMPER, ...PREPOS, ...COMPAR, ...NEGAT];
export const QUIZ_BANK = [...GENERATED, ...HAND_ALL].map((it, i) => ({ id: i, ...it }));

/* Exact source split, known at construction (no heuristic) — surfaced so the
   dryrun harness can log it as a permanent bank regression line. */
export const BANK_STATS = { total: QUIZ_BANK.length, generated: GENERATED.length, hand: HAND_ALL.length };
