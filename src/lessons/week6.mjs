/* Week 6 — Days 36–42. Shopping & description: demonstratives (ce/cet/
   cette/ces), adjective agreement and BAGS placement, clothes and sizes,
   quantity expressions (beaucoup de/un peu de/trop de/assez de), and les
   soldes vs markets vs le supermarché. Still A1 register — function-first,
   fixed phrases, no new tenses. */

const LESSON_36 = {
  day: 36, week: 6,
  title: "Ce, cet, cette, ces : je voudrais essayer…",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Pointing at things without knowing their name",
      body:[
        "Week 6 walks into a shop. The first tool you need isn't a big vocabulary — it's the ability to point: <b>this</b> sweater, <b>that</b> jacket, <b>these</b> shoes. French splits ‘this/that’ four ways depending on the noun.",
        "<b>Ce</b> (masculine), <b>cet</b> (masculine before a vowel), <b>cette</b> (feminine), <b>ces</b> (plural) — one job, four spellings."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Ce vs cet: a vowel change, not just a letter",
      body:["The switch from ce to cet isn't just spelling — the vowel itself changes:"],
      pairs:[
        { fr:"ce pull", ipa:"/sə pyl/", en:"ce — a plain schwa before a consonant", say:"ce pull", key:"d36_cepull" },
        { fr:"cet anorak", ipa:"/sɛ.ta.nɔ.ʁak/", en:"cet — schwa opens to è, plus an inserted t, before a vowel", say:"cet anorak", key:"d36_cetanorak" },
        { fr:"ces amis", ipa:"/se.z‿a.mi/", en:"ces — real liaison: the normally-silent s wakes as z", say:"ces amis", key:"d36_cesamis" }
      ],
      tip:"Two different mechanisms are at work here, worth telling apart: <b>cet</b> isn't liaison — it's a whole alternate word French uses before a vowel to avoid two vowel sounds colliding (<em>ce homme</em> doesn't exist; only <b>cet homme</b> does). You'll meet the same trick on beau/bel and nouveau/nouvel later. <b>Ces</b>, by contrast, IS true liaison — the same silent-s-wakes-as-z rule from <em>les/des</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"This one, that one",
      items:[
        { fr:"ce", en:"this/that (masc., before a consonant)", reg:null, say:"ce", key:"d36_v_ce" },
        { fr:"cet", en:"this/that (masc., before a vowel/mute h)", reg:null, say:"cet", key:"d36_v_cet" },
        { fr:"cette", en:"this/that (feminine)", reg:null, say:"cette", key:"d36_v_cette" },
        { fr:"ces", en:"these/those (plural)", reg:null, say:"ces", key:"d36_v_ces" },
        { fr:"un pull", en:"a sweater", reg:null, say:"un pull", key:"d36_v_unpull" },
        { fr:"une veste", en:"a jacket", reg:null, say:"une veste", key:"d36_v_uneveste" },
        { fr:"Je voudrais essayer…", en:"I'd like to try on…", reg:null, say:"Je voudrais essayer ce pull", key:"d36_v_jevoudraisessayer" },
        { fr:"C'est combien ?", en:"How much is it?", reg:null, say:"C'est combien ?", key:"d36_v_cestcombien" }
      ],
      tip:"<b>Cette</b> covers every feminine noun regardless of what sound follows — no vowel-triggered switch the way masculine has. <b>Je voudrais</b> is back from week 3's café lesson, just pointed at clothes instead of coffee."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Trying something on",
      body:["A customer and a shop assistant — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Bonjour, je voudrais essayer ce pull, s'il vous plaît.", en:"Hello, I'd like to try on this sweater, please.", say:"Bonjour, je voudrais essayer ce pull, s'il vous plaît.", key:"d36_d1" },
        { who:"B", fr:"Bien sûr ! La cabine d'essayage est là-bas.", en:"Of course! The fitting room is over there.", say:"Bien sûr ! La cabine d'essayage est là-bas.", key:"d36_d2" },
        { who:"A", fr:"Merci. Et ces chaussures, c'est combien ?", en:"Thanks. And these shoes, how much are they?", say:"Merci. Et ces chaussures, c'est combien ?", key:"d36_d3" },
        { who:"B", fr:"Quarante-cinq euros.", en:"Forty-five euros.", say:"Quarante-cinq euros.", key:"d36_d4" },
        { who:"A", fr:"D'accord, je prends aussi cette veste.", en:"OK, I'll take this jacket too.", say:"D'accord, je prends aussi cette veste.", key:"d36_d5" }
      ],
      tip:"<b>La cabine d'essayage</b> = the fitting room — worth recognizing even though it isn't in today's vocab list. <b>Je prends</b> is back from week 3's ordering lesson (day 20) — it works just as well for buying as for ordering a coffee."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘This friend’ (a male friend) — un ami:",
          opts:["ce ami","cet ami","cette ami","ces ami"], answer:1,
          ok:"Right — ami starts with a vowel, so ce switches to cet.",
          no:"<b>Cet ami</b> — the vowel-initial noun forces the cet form." },
        { prompt:"‘This jacket’ — une veste:",
          opts:["ce veste","cet veste","cette veste","ces veste"], answer:2,
          ok:"Yes — veste is feminine, so cette, no vowel-switch needed.",
          no:"<b>Cette veste</b> — feminine nouns always take cette." },
        { prompt:"‘These friends’ — des amis — you'd hear a…",
          opts:["silent s","liaison z sound","liaison t sound","no ces at all"], answer:1,
          ok:"Right — ces amis liaises: the silent s wakes as z.",
          no:"A <b>liaison z</b> — ces's normally-silent s sounds before the vowel of amis." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Browsing without buying",
      body:[
        "Walking into a French clothing shop still opens with <b>bonjour</b> — the week-1 ritual doesn't stop applying just because you're not at a bakery. Say it to the shop assistant on your way in, even if you're only browsing.",
        "Unlike some more sales-driven retail cultures, browsing without buying is completely normal and expected — nobody will hover or push. If you do want to try something, <em>« Je peux essayer… ? »</em> or today's <em>« Je voudrais essayer… »</em> is all it takes."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 36, done.",
      body:["You can point at anything in a shop now. Tomorrow: giving those things a color."],
      next:"Jour 37 — Les couleurs : rouge, bleu, vert…"}
  ]
};

const LESSON_37 = {
  day: 37, week: 6,
  title: "Les couleurs : rouge, bleu, vert…",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Giving things a color",
      body:[
        "Colors are adjectives, and French adjectives agree with the noun they describe: an extra <b>-e</b> for feminine, an extra <b>-s</b> for plural. You've actually met this mechanism already — it's the same one behind <em>petit/petite</em> from day 2.",
        "A few colors break the pattern entirely. Today sorts the regular ones from the exceptions."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"vert/verte: the same trick as petit/petite",
      body:["One consonant wakes up with the feminine -e; one color never changes shape at all:"],
      pairs:[
        { fr:"vert", ipa:"/vɛʁ/", en:"masculine — final t silent", say:"vert", key:"d37_vert" },
        { fr:"verte", ipa:"/vɛʁt/", en:"feminine — the -e wakes the t, exactly like petite", say:"verte", key:"d37_verte" },
        { fr:"bleu", ipa:"/blø/", en:"masculine and feminine (bleue) sound identical — vowel-final adjectives don't change sound", say:"bleu", key:"d37_bleu" }
      ],
      tip:"When an adjective already ends in a vowel sound (<b>bleu</b>, <b>noir</b> is the exception since it ends in a consonant — but <b>joli</b>, <b>bleu</b> do), the feminine -e is silent and changes nothing you can hear. When it ends in a silent consonant (<b>vert</b>, <b>petit</b>, <b>grand</b>), the feminine -e wakes that consonant up. Same rule, day 2 all over again."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The colors",
      items:[
        { fr:"rouge", en:"red", reg:null, say:"rouge", key:"d37_v_rouge" },
        { fr:"bleu / bleue", en:"blue", reg:null, say:"bleu", key:"d37_v_bleu" },
        { fr:"vert / verte", en:"green", reg:null, say:"vert", key:"d37_v_vert" },
        { fr:"noir / noire", en:"black", reg:null, say:"noir", key:"d37_v_noir" },
        { fr:"blanc / blanche", en:"white", reg:null, say:"blanc", key:"d37_v_blanc" },
        { fr:"gris / grise", en:"grey", reg:null, say:"gris", key:"d37_v_gris" },
        { fr:"jaune", en:"yellow", reg:null, say:"jaune", key:"d37_v_jaune" },
        { fr:"orange", en:"orange", reg:null, say:"orange", key:"d37_v_orange" }
      ],
      tip:"<b>Blanc → blanche</b> is genuinely irregular (the c softens to ch) — just learn it as a pair. And <b>orange</b> is a true exception to the whole system: it never changes for gender or number at all (<em>une veste orange</em>, <em>des pulls orange</em>) because it's historically a noun (the fruit) doing adjective duty, not a real adjective."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Which color do you like?",
      body:["Two friends looking at clothes — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu aimes ce pull rouge ?", en:"Do you like this red sweater?", say:"Tu aimes ce pull rouge ?", key:"d37_d1" },
        { who:"B", fr:"Oui, mais moi, je voudrais le vert.", en:"Yes, but me, I'd want the green one.", say:"Oui, mais moi, je voudrais le vert.", key:"d37_d2" },
        { who:"A", fr:"Le vert est joli aussi ! Et ta veste, elle est de quelle couleur ?", en:"The green one's pretty too! And your jacket, what color is it?", say:"Le vert est joli aussi ! Et ta veste, elle est de quelle couleur ?", key:"d37_d3" },
        { who:"B", fr:"Elle est noire.", en:"It's black.", say:"Elle est noire.", key:"d37_d4" }
      ],
      tip:"<b>Aimer</b> (to like) is a brand-new verb today, but it's a completely regular -er verb — same pattern as <em>parler/habiter/travailler</em> from week 2, so <em>tu aimes</em> needs no new grammar, just the vocabulary. <b>De quelle couleur ?</b> is the fixed way to ask ‘what color?’."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Green’ describing une veste (feminine):",
          opts:["vert","verts","verte","vertes"], answer:2,
          ok:"Right — verte, and the -e wakes the silent t.",
          no:"<b>Verte</b> — feminine adds -e, which also makes the t audible." },
        { prompt:"Which color never changes for gender or number?",
          opts:["noir","vert","orange","bleu"], answer:2,
          ok:"Yes — orange stays orange always, a true exception.",
          no:"<b>Orange</b> — it's historically a noun, not a real adjective, so it never agrees." },
        { prompt:"‘White’, feminine:",
          opts:["blance","blanche","blanke","blanque"], answer:1,
          ok:"Right — blanc → blanche, a genuine irregular pair.",
          no:"<b>Blanche</b> — irregular; the c softens to ch in the feminine." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The Parisian palette",
      body:[
        "It's a broad tendency, not a rule, but it's a real one: Parisian everyday dress leans heavily on black, navy, grey and beige, with color used sparingly as an accent (a scarf, a bag) rather than head to toe. Visitors sometimes over-pack bright colors expecting to blend in and find the crowd quieter than expected, style-wise.",
        "That doesn't mean color is avoided — just that it's used deliberately. Knowing your colors still matters just as much for shopping; the palette preference is a style note, not a vocabulary shortcut."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 37, done.",
      body:["You can describe an object's color correctly. Tomorrow: a small set of adjectives that break the normal word order."],
      next:"Jour 38 — Petit, grand, bon : avant le nom"}
  ]
};

const LESSON_38 = {
  day: 38, week: 6,
  title: "Petit, grand, bon : avant le nom",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The adjectives that jump the queue",
      body:[
        "Yesterday's colors go <em>after</em> the noun — <em>une veste rouge</em>. That's the normal French word order. But a small, very common set of adjectives — mostly about beauty, age, goodness or size — jumps <em>before</em> the noun instead: <b>un petit pull</b>, not ‘un pull petit’.",
        "English learners nickname this set <b>BAGS</b> (Beauty, Age, Goodness, Size) — a memory hook, not a French word."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Adjective liaison — three different linking sounds",
      body:["Because these adjectives sit right before the noun, they liaise into it — and not always the same way:"],
      pairs:[
        { fr:"un petit ami", ipa:"/œ̃ pə.ti.ta.mi/", en:"petit's silent t wakes before the vowel of ami", say:"un petit ami", key:"d38_unpetitami" },
        { fr:"un bon ami", ipa:"/œ̃ bɔ.na.mi/", en:"bon un-nasalizes and adds a linking n", say:"un bon ami", key:"d38_unbonami" },
        { fr:"des grands enfants", ipa:"/de gʁɑ̃.z‿ɑ̃.fɑ̃/", en:"the plural s hiding inside grands wakes as z", say:"des grands enfants", key:"d38_desgrandsenfants" }
      ],
      tip:"Three genuinely different liaison consonants, all triggered by the same word-order quirk: petit adds a <b>t</b>, bon adds a nasal <b>n</b> (and loses its own nasal vowel doing so), grands adds a <b>z</b> from its silent plural s. This is exactly why BAGS adjectives get their own phonics slot — put an adjective after the noun instead and none of this liaison happens."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Adjectives that go first",
      items:[
        { fr:"petit / petite", en:"small", reg:null, say:"petit", key:"d38_v_petit" },
        { fr:"grand / grande", en:"big / tall", reg:null, say:"grand", key:"d38_v_grand" },
        { fr:"bon / bonne", en:"good", reg:null, say:"bon", key:"d38_v_bon" },
        { fr:"mauvais / mauvaise", en:"bad", reg:null, say:"mauvais", key:"d38_v_mauvais" },
        { fr:"joli / jolie", en:"pretty", reg:null, say:"joli", key:"d38_v_joli" },
        { fr:"jeune", en:"young", reg:null, say:"jeune", key:"d38_v_jeune" },
        { fr:"vieux", en:"old", reg:null, say:"vieux", key:"d38_v_vieux" },
        { fr:"une jolie veste", en:"a pretty jacket", reg:null, say:"une jolie veste", key:"d38_v_unejolieveste" }
      ],
      tip:"<b>Vieux</b> is irregular in its feminine and pre-vowel forms (vieille, vieil) — worth a heads-up now, full details later. Every other adjective in this list is a normal agreement pattern: add -e for feminine, -s for plural, same as any color from yesterday. The only special thing about this whole group is <em>where they stand</em>, not how they agree."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Asking what's in stock",
      body:["A customer asking a shop assistant — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Vous avez un petit pull, pour un enfant ?", en:"Do you have a small sweater, for a child?", say:"Vous avez un petit pull, pour un enfant ?", key:"d38_d1" },
        { who:"B", fr:"Oui, nous avons ce joli pull bleu.", en:"Yes, we have this pretty blue sweater.", say:"Oui, nous avons ce joli pull bleu.", key:"d38_d2" },
        { who:"A", fr:"Parfait ! Et vous avez une grande taille aussi ?", en:"Perfect! And do you have a large size too?", say:"Parfait ! Et vous avez une grande taille aussi ?", key:"d38_d3" },
        { who:"B", fr:"Oui, nous avons toutes les tailles.", en:"Yes, we have all the sizes.", say:"Oui, nous avons toutes les tailles.", key:"d38_d4" }
      ],
      tip:"Notice the order stacking up: <em>ce joli pull bleu</em> — demonstrative, then the BAGS adjective (joli, before the noun), then the noun, then the color (after the noun). That's the standard French adjective order, all in one phrase."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Where does petit go, relative to the noun?",
          opts:["after","before","either, no rule","only with people"], answer:1,
          ok:"Right — petit and the rest of BAGS jump in front of the noun.",
          no:"<b>Before</b> the noun — petit, grand, bon, joli all sit ahead of what they describe." },
        { prompt:"Where does a color like rouge go?",
          opts:["before the noun","after the noun","before the article","it varies freely"], answer:1,
          ok:"Yes — colors are the normal case: after the noun.",
          no:"<b>After</b> the noun — colors follow the everyday French word order." },
        { prompt:"‘Un petit ami’ — the liaison sound you hear is…",
          opts:["a p","a t","an s","an m"], answer:1,
          ok:"Right — petit's silent t wakes before the vowel.",
          no:"A <b>t</b> — petit's normally-silent final consonant." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Les friperies : la mode d'occasion",
      body:[
        "Second-hand and vintage shopping is genuinely fashionable in Paris, not just a budget fallback — <b>les friperies</b> (vintage/thrift shops) cluster in neighborhoods like Le Marais and are popular especially with students and younger Parisians. Treasure-hunting for a good vintage find is its own small social activity.",
        "It also folds neatly into a wider, growing preference for buying less but better — <em>la seconde main</em> (second-hand) has real cultural currency here, well beyond simple thrift."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 38, done.",
      body:["You can now build a fully-ordered French noun phrase. Tomorrow: clothes themselves, and how to get the right size."],
      next:"Jour 39 — Les vêtements et les tailles"}
  ]
};

const LESSON_39 = {
  day: 39, week: 6,
  title: "Les vêtements et les tailles",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Getting the right size",
      body:[
        "The core clothes-shopping vocabulary — trousers, a dress, a shirt — plus the phrases that get you an item that actually fits: stating your size, asking to try something on, requesting a different color.",
        "One pronunciation trap today hides in the single most useful word of the lesson: <b>la taille</b>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"-ille: usually a glide, with three famous exceptions",
      body:["The letters -ille almost always soften into a /j/ glide — except in a short, memorizable list:"],
      pairs:[
        { fr:"la taille", ipa:"/la taj/", en:"‘ille’ softens to a /j/ glide, not an L sound", say:"la taille", key:"d39_lataille" },
        { fr:"la ville", ipa:"/la vil/", en:"one of French's rare -ille exceptions — this one KEEPS the L", say:"la ville", key:"d39_laville" },
        { fr:"une chemise", ipa:"/yn ʃə.miz/", en:"ch is always /ʃ/ in French, never English ‘ch’", say:"une chemise", key:"d39_unechemise" }
      ],
      tip:"Most -ille words glide: taille, famille, bouteille (week 6's taille joins week 3's bouteille). The short exception list to memorize by heart: <b>ville, mille, tranquille</b> (and words built on them) keep the hard L. Outside that list, bet on the glide."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Clothes and sizes",
      items:[
        { fr:"un pantalon", en:"trousers / pants", reg:null, say:"un pantalon", key:"d39_v_pantalon" },
        { fr:"une robe", en:"a dress", reg:null, say:"une robe", key:"d39_v_robe" },
        { fr:"une chemise", en:"a shirt", reg:null, say:"une chemise", key:"d39_v_chemise" },
        { fr:"des chaussures", en:"shoes", reg:null, say:"des chaussures", key:"d39_v_chaussures" },
        { fr:"la taille", en:"the size", reg:null, say:"la taille", key:"d39_v_taille" },
        { fr:"Je fais du…", en:"I'm a size… (I wear size…)", reg:null, say:"Je fais du 38", key:"d39_v_jefaisdu" },
        { fr:"Je peux l'essayer ?", en:"Can I try it on?", reg:null, say:"Je peux l'essayer ?", key:"d39_v_jepeuxlessayer" },
        { fr:"Avez-vous une autre couleur ?", en:"Do you have another color?", reg:"formal", say:"Avez-vous une autre couleur ?", key:"d39_v_avezvousuneautrecouleur" }
      ],
      tip:"<b>Je fais du 38</b> uses the same faire from week 5 — French states a size the way it states an age or a measurement, with faire doing quiet double duty again. <b>Je peux…</b> (‘can I…’) is a fixed, ready-to-use chunk; the verb behind it, pouvoir, gets its full conjugation later."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Finding the right size",
      body:["A customer trying on a dress — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Bonjour, je peux essayer cette robe ?", en:"Hello, can I try on this dress?", say:"Bonjour, je peux essayer cette robe ?", key:"d39_d1" },
        { who:"B", fr:"Bien sûr ! Quelle taille faites-vous ?", en:"Of course! What size are you?", say:"Bien sûr ! Quelle taille faites-vous ?", key:"d39_d2" },
        { who:"A", fr:"Je fais du 38.", en:"I'm a size 38.", say:"Je fais du 38.", key:"d39_d3" },
        { who:"B", fr:"Voilà. La cabine d'essayage est là-bas.", en:"Here you go. The fitting room is over there.", say:"Voilà. La cabine d'essayage est là-bas.", key:"d39_d4" },
        { who:"A", fr:"Merci. Avez-vous une autre couleur, en bleu ?", en:"Thanks. Do you have another color, in blue?", say:"Merci. Avez-vous une autre couleur, en bleu ?", key:"d39_d5" },
        { who:"B", fr:"Oui, nous l'avons en bleu aussi.", en:"Yes, we have it in blue too.", say:"Oui, nous l'avons en bleu aussi.", key:"d39_d6" }
      ],
      tip:"<b>Quelle taille faites-vous ?</b> reuses week 5's faites (day 32) in its inverted question form. <b>Nous l'avons</b> — that <em>l'</em> stands in for ‘it’ (la robe); a quick preview of object pronouns, the full grammar of which arrives properly in week 9."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘La taille’ — the -ille is pronounced…",
          opts:["like an English L","as a /j/ glide","silent","as ‘eel’"], answer:1,
          ok:"Right — the glide, the normal -ille pattern.",
          no:"A <b>/j/ glide</b> — taille is the regular pattern, not an exception." },
        { prompt:"‘Je fais du 38’ means…",
          opts:["I made 38 euros","I'm a size 38","I did 38 exercises","It costs 38"], answer:1,
          ok:"Yes — faire states a size, the same verb from week 5.",
          no:"<b>I'm a size 38</b> — faire + du + a number states your size." },
        { prompt:"‘Can I try it on?’:",
          opts:["Je fais essayer ?","Je peux l'essayer ?","Je suis essayer ?","J'essaye vous ?"], answer:1,
          ok:"Right — Je peux… + infinitive, a ready-made chunk.",
          no:"<b>Je peux l'essayer ?</b> — the fixed ‘can I…’ opener." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"A different size scale entirely",
      body:[
        "French clothing sizes don't map onto US/UK numbers the way you might expect — women's sizes run roughly 34 to 48, men's shirts by collar centimeter or S/M/L, and shoes use the continental ‘Paris point’ scale. Knowing your usual home size doesn't reliably tell you your French one.",
        "The practical fix is exactly today's lesson: don't try to convert in your head — <em>« Je peux l'essayer ? »</em> and asking for <em>« une taille en dessus »</em> (a size up) or <em>en dessous</em> (a size down) gets you there faster than any chart."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 39, done.",
      body:["You can shop for clothes and get the right fit. Tomorrow: how much of something you want, or don't."],
      next:"Jour 40 — Beaucoup, un peu, trop : les quantités"}
  ]
};

const LESSON_40 = {
  day: 40, week: 6,
  title: "Beaucoup, un peu, trop : les quantités",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"How much — without an article",
      body:[
        "Week 3 taught you <em>du/de la/des</em> — ‘some’, with an article that changes for gender. Today's quantity words are simpler, not harder: <b>beaucoup de</b>, <b>un peu de</b>, <b>trop de</b>, <b>assez de</b> all just take a bare <b>de</b>, no article, no matter the noun.",
        "One small rule, and it never changes shape."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Silent letters guarding the quantity words",
      body:["Two of today's words hide a silent consonant that never wakes up, plus a nice vowel callback:"],
      pairs:[
        { fr:"beaucoup de", ipa:"/bo.ku də/", en:"the p of beaucoup stays silent even before de", say:"beaucoup de", key:"d40_beaucoupde" },
        { fr:"trop de", ipa:"/tʁo də/", en:"trop's p is silent too — never sounded, even before a vowel", say:"trop de", key:"d40_tropde" },
        { fr:"un peu de", ipa:"/œ̃ pø də/", en:"peu rhymes with day 5's deux — the same rounded vowel", say:"un peu de", key:"d40_unpeude" }
      ],
      tip:"Unlike petit or vingt, <b>beaucoup</b> and <b>trop</b> never liaise their final consonant — it's silent full stop, in every context. The only way to know is to have heard it, which is exactly why this step exists."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Quantity words",
      items:[
        { fr:"beaucoup de", en:"a lot of", reg:null, say:"beaucoup de", key:"d40_v_beaucoupde" },
        { fr:"un peu de", en:"a little of / a bit of", reg:null, say:"un peu de", key:"d40_v_unpeude" },
        { fr:"trop de", en:"too much / too many of", reg:null, say:"trop de", key:"d40_v_tropde" },
        { fr:"assez de", en:"enough", reg:null, say:"assez de", key:"d40_v_assezde" },
        { fr:"pas de", en:"not any / no", reg:null, say:"pas de", key:"d40_v_pasde" },
        { fr:"Il y a beaucoup de monde.", en:"There are a lot of people.", reg:null, say:"Il y a beaucoup de monde.", key:"d40_v_ilyabeaucoupdemonde" },
        { fr:"C'est trop cher.", en:"That's too expensive.", reg:null, say:"C'est trop cher.", key:"d40_v_cesttropcher" },
        { fr:"Ça suffit.", en:"That's enough.", reg:"informal", say:"Ça suffit.", key:"d40_v_casuffit" }
      ],
      tip:"Contrast this with week 3: <em>du pain, de la confiture, des œufs</em> all changed shape for gender and number. <b>Beaucoup de pain, beaucoup de confiture, beaucoup d'œufs</b> — the quantity word never does. One rule replaces three."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Too crowded, too expensive",
      body:["Two friends shopping together — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Il y a beaucoup de monde aujourd'hui !", en:"There are a lot of people today!", say:"Il y a beaucoup de monde aujourd'hui !", key:"d40_d1" },
        { who:"B", fr:"Oui, mais regarde cette jolie veste !", en:"Yes, but look at this pretty jacket!", say:"Oui, mais regarde cette jolie veste !", key:"d40_d2" },
        { who:"A", fr:"Elle est belle, mais c'est trop cher, non ?", en:"It's beautiful, but it's too expensive, isn't it?", say:"Elle est belle, mais c'est trop cher, non ?", key:"d40_d3" },
        { who:"B", fr:"Un peu, mais j'ai assez d'argent !", en:"A bit, but I have enough money!", say:"Un peu, mais j'ai assez d'argent !", key:"d40_d4" }
      ],
      tip:"<b>Cher</b> (expensive) and <b>l'argent</b> (money) are two useful bonus words riding along in this dialogue. Note <b>assez d'argent</b> — de elides to d' before the vowel of argent, the same elision you've seen since week 1's le/la → l'."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘A lot of people’ uses which article before monde?",
          opts:["du","de la","des","no article — just de"], answer:3,
          ok:"Right — quantity expressions always use bare de, never du/de la/des.",
          no:"<b>No article</b> — beaucoup de, trop de, etc. always take a plain de." },
        { prompt:"‘Un peu de’ means…",
          opts:["a lot of","enough","a little of","none of"], answer:2,
          ok:"Yes — a little/a bit of.",
          no:"<b>A little of / a bit of</b> — the smallest-quantity word of the set." },
        { prompt:"Fill in: ‘___ de monde’ (a lot of people)",
          opts:["Beaucoup","Un peu","Assez","Trop"], answer:0,
          ok:"Right — beaucoup de monde, a very common everyday phrase.",
          no:"<b>Beaucoup</b> — beaucoup de monde is the standard way to say ‘a lot of people’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Prices are fixed — don't haggle",
      body:[
        "Unlike some shopping cultures, haggling over the marked price is not the norm in French shops or even open-air markets — prices are posted and generally treated as final. Politely asking about a discount on a damaged or last item is sometimes fine, but bargaining down a regular price will land as odd, not savvy.",
        "Where prices genuinely move is <em>les soldes</em> — the official sale periods — which is exactly tomorrow's lesson."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 40, done.",
      body:["You can now say how much of something you want. Tomorrow: the two annual events when French prices actually drop, and where locals shop day to day."],
      next:"Jour 41 — Les soldes, le marché, le supermarché"}
  ]
};

const LESSON_41 = {
  day: 41, week: 6,
  title: "Les soldes, le marché, le supermarché",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"When prices drop, and where locals actually shop",
      body:[
        "Today ties the week together with the single most useful piece of shopping culture: <b>les soldes</b> — twice-yearly, government-regulated sale periods, not a random discount rack.",
        "And a second everyday choice every Paris resident makes constantly: <b>le marché</b> or <b>le supermarché</b>?"
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"A silent plural, and two clean é endings",
      body:["Nothing new phonetically today — just familiar rules, on new words:"],
      pairs:[
        { fr:"les soldes", ipa:"/le sɔld/", en:"the plural -s stays silent, same marker since week 1", say:"les soldes", key:"d41_lessoldes" },
        { fr:"le marché", ipa:"/lə maʁ.ʃe/", en:"final é is always a clean, closed sound, never a schwa", say:"le marché", key:"d41_lemarche" },
        { fr:"le supermarché", ipa:"/lə sy.pɛʁ.maʁ.ʃe/", en:"a compound word, same clean é ending as marché", say:"le supermarché", key:"d41_lesupermarche" }
      ],
      tip:"No new sound today — a deliberate breather. The whole point is that by week 6, silent plural -s and a clean final é should already feel automatic, not effortful."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Sales, markets, and prices",
      items:[
        { fr:"les soldes", en:"the sales", reg:null, say:"les soldes", key:"d41_v_lessoldes" },
        { fr:"le marché", en:"the (open-air) market", reg:null, say:"le marché", key:"d41_v_lemarche" },
        { fr:"le supermarché", en:"the supermarket", reg:null, say:"le supermarché", key:"d41_v_lesupermarche" },
        { fr:"moins cher", en:"cheaper / less expensive", reg:null, say:"moins cher", key:"d41_v_moinscher" },
        { fr:"C'est en solde ?", en:"Is it on sale?", reg:null, say:"C'est en solde ?", key:"d41_v_cestensolde" },
        { fr:"Ça fait combien ?", en:"How much does that come to?", reg:null, say:"Ça fait combien ?", key:"d41_v_cafaitcombien" },
        { fr:"le prix", en:"the price", reg:null, say:"le prix", key:"d41_v_leprix" },
        { fr:"gratuit(e)", en:"free (of charge)", reg:null, say:"gratuit", key:"d41_v_gratuit" }
      ],
      tip:"<b>Ça fait combien ?</b> sits alongside week 3's <em>C'est combien ?</em> — both are completely natural; <em>ça fait</em> leans slightly more toward ‘what does the total come to’, useful once several items are involved."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Catching a sale",
      body:["A shopper spots a discounted jacket — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Excusez-moi, cette veste est en solde ?", en:"Excuse me, is this jacket on sale?", say:"Excusez-moi, cette veste est en solde ?", key:"d41_d1" },
        { who:"B", fr:"Oui ! Elle est moins chère maintenant — trente euros au lieu de soixante.", en:"Yes! It's cheaper now — thirty euros instead of sixty.", say:"Oui ! Elle est moins chère maintenant — trente euros au lieu de soixante.", key:"d41_d2" },
        { who:"A", fr:"Parfait, je la prends !", en:"Perfect, I'll take it!", say:"Parfait, je la prends !", key:"d41_d3" },
        { who:"B", fr:"Très bon choix. Les soldes se terminent dans trois jours.", en:"Very good choice. The sales end in three days.", say:"Très bon choix. Les soldes se terminent dans trois jours.", key:"d41_d4" }
      ],
      tip:"<b>Au lieu de</b> = ‘instead of’ — a handy fixed phrase for comparing a sale price to the original. <b>Se terminent</b> is a pronominal verb straight from week 5 (the se lever family) — ‘to end’, conjugated exactly the same way."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Les soldes’ are…",
          opts:["a type of shop","twice-yearly regulated sale periods","a loyalty card","a market day"], answer:1,
          ok:"Right — nationally set sale windows, not everyday discounting.",
          no:"<b>Twice-yearly, regulated sale periods</b> — not a random markdown rack." },
        { prompt:"‘Moins cher’ means…",
          opts:["more expensive","cheaper","free","the same price"], answer:1,
          ok:"Yes — less expensive/cheaper.",
          no:"<b>Cheaper</b> — moins (less) + cher (expensive)." },
        { prompt:"For fresh, local produce a few mornings a week, you'd go to…",
          opts:["le supermarché","le marché","la cabine d'essayage","les soldes"], answer:1,
          ok:"Right — le marché, the open-air neighborhood market.",
          no:"<b>Le marché</b> — fixed-day, open-air, and typically fresher/more local than the supermarché." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Soldes, marchés, and the supermarché",
      body:[
        "<b>Les soldes</b> aren't a store's own decision — French law fixes two national sale windows a year, roughly early January and late June, each lasting about a month. Outside those windows, a shop advertising a permanent ‘sale’ is doing something else (a promotion, a clearance), not <em>les soldes</em> in the legal sense.",
        "Day to day, most Parisians split their shopping between the two venues from today's vocab: <b>le marché</b> for fresh produce, cheese and a bit of neighborhood social ritual, on its fixed weekly days; <b>le supermarché</b> for everything else, any day, no ritual required. Neither involves haggling — see yesterday's lesson — but the marché rewards showing up, greeting the stallholder, and a bit of small talk."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 41, done.",
      body:["You understand how and when France shops. Tomorrow we tie the whole week together."],
      next:"Jour 42 — Révision (week 6 review)"}
  ]
};

const LESSON_42 = {
  day: 42, week: 6,
  title: "Révision — la semaine 6",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — a full shopping trip",
      body:[
        "Retrieval day. One chained shop dialogue running through the whole week — pointing, describing, sizing, and catching a sale — six questions on the week's pressure points, then your due flashcards, now spanning six weeks.",
        "The week's real theme: French describes things with more moving parts than English (agreement, word order, a dedicated no-article quantity rule) — but every part is a small, learnable piece, not a wall."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A full shopping trip",
      body:["A customer buying two things during the soldes — <b>vous</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Bonjour, je voudrais essayer cette veste noire.", en:"Hello, I'd like to try on this black jacket.", say:"Bonjour, je voudrais essayer cette veste noire.", key:"d42_d1" },
        { who:"B", fr:"Bien sûr ! Quelle taille faites-vous ?", en:"Of course! What size are you?", say:"Bien sûr ! Quelle taille faites-vous ?", key:"d42_d2" },
        { who:"A", fr:"Je fais du 40. Et elle est en solde ?", en:"I'm a size 40. And is it on sale?", say:"Je fais du 40. Et elle est en solde ?", key:"d42_d3" },
        { who:"B", fr:"Oui, elle est moins chère cette semaine !", en:"Yes, it's cheaper this week!", say:"Oui, elle est moins chère cette semaine !", key:"d42_d4" },
        { who:"A", fr:"Parfait, je la prends. Et vous avez un petit sac, pour ma fille ?", en:"Perfect, I'll take it. And do you have a small bag, for my daughter?", say:"Parfait, je la prends. Et vous avez un petit sac, pour ma fille ?", key:"d42_d5" },
        { who:"B", fr:"Oui, nous avons ce joli sac rouge, pas trop cher.", en:"Yes, we have this pretty red bag, not too expensive.", say:"Oui, nous avons ce joli sac rouge, pas trop cher.", key:"d42_d6" },
        { who:"A", fr:"Super, je prends les deux. Merci beaucoup !", en:"Great, I'll take both. Thank you very much!", say:"Super, je prends les deux. Merci beaucoup !", key:"d42_d7" }
      ],
      tip:"Everything from the week fires here: <em>cette veste noire</em> (demonstrative + color after the noun), <em>petit sac</em> and <em>joli sac</em> (BAGS before the noun), <em>je fais du 40</em> (sizes), <em>en solde / moins chère</em> (the soldes), and <em>pas trop cher</em> (quantity words). One phrase, every thread."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 6 — the six that matter",
      questions:[
        { prompt:"‘This jacket’ (une veste):",
          opts:["ce veste","cet veste","cette veste","ces veste"], answer:2,
          ok:"Right — cette, the feminine demonstrative.",
          no:"<b>Cette veste</b> — feminine nouns always take cette." },
        { prompt:"‘This friend’ before a vowel (un ami):",
          opts:["ce ami","cet ami","cette ami","ces amis"], answer:1,
          ok:"Yes — cet, the vowel-triggered masculine form.",
          no:"<b>Cet ami</b> — masculine before a vowel switches ce to cet." },
        { prompt:"Where do petit, grand, bon and joli go?",
          opts:["after the noun","before the noun","only after être","never with people"], answer:1,
          ok:"Right — the BAGS set jumps in front of the noun.",
          no:"<b>Before the noun</b> — that's the whole point of BAGS." },
        { prompt:"‘A lot of people’:",
          opts:["beaucoup du monde","beaucoup de monde","beaucoup des monde","beaucoup le monde"], answer:1,
          ok:"Right — quantity expressions always take a bare de.",
          no:"<b>Beaucoup de monde</b> — no article ever appears after a quantity word." },
        { prompt:"‘Les soldes’ are best described as…",
          opts:["a single shop's private discount","twice-yearly, nationally regulated sale periods","a loyalty program","a type of market"], answer:1,
          ok:"Right — set by law, not by an individual store.",
          no:"<b>Twice-yearly, regulated sale periods</b> — a real legal fixture, not a marketing term." },
        { prompt:"‘La taille’ — the -ille sound is…",
          opts:["a hard L, like ville","a /j/ glide","silent","‘eel’"], answer:1,
          ok:"Yes — the regular glide pattern; ville is the exception, not taille.",
          no:"A <b>/j/ glide</b> — taille follows the normal -ille pattern." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Six weeks of vocabulary now feed this queue — greetings, identity, the café, the streets, the clock and routine, and this week's shopping words. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Six weeks: the honest audit",
      body:[
        "You can now point at things precisely, describe them with correctly-placed and correctly-agreed adjectives, ask for sizes and try things on, express how much of something you want, and navigate France's shopping calendar and venues without getting caught out. Paired with weeks 1–5, that covers greetings, identity, eating, getting around, telling time and routine, and now describing and shopping — the practical backbone of an independent daily life here.",
        "The honest gap: description still lives entirely in the present tense, and you can't yet compare two things properly (‘this one is nicer than that one’ waits for week 11's comparatives). Week 7 stays in the present and turns from the shop to somewhere more personal: your home, your neighborhood, and how to describe where you actually live."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 6 — complète.",
      body:["Forty-two stations — exactly half the line. Next week: your home, your neighborhood, and the words for the rooms and furniture around you."],
      next:"Semaine 7, Jour 43 — Chez moi : mon appartement, mes affaires"}
  ]
};

export const WEEK6 = [LESSON_36, LESSON_37, LESSON_38, LESSON_39, LESSON_40, LESSON_41, LESSON_42];
