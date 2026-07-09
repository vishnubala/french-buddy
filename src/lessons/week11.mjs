/* Week 11 — Days 71–77. Description & opinion. The IMPARFAIT is the spine of
   the week — a genuinely new (and hard) tense, built across three days
   (formation → use → the light passé-composé contrast) rather than crammed —
   with comparatives, opinion frames, and the prendre-family verbs each given
   one focused day around it.

     71 — imparfait FORMATION (stem = present nous-form − ons, + -ais/-ait/…;
          être irregular ét-) + the -ais/-ait/-aient homophone phonics
     72 — what the imparfait is FOR: description & habit (c'était, il y avait…)
     73 — passé composé vs imparfait, LIGHTLY (photo vs film; event vs backdrop)
     74 — comparatives (plus/moins/aussi … que; meilleur)
     75 — opinion frames (je trouve que, à mon avis, je pense que)
     76 — prendre / comprendre / apprendre + café-debate register (Paris note)
     77 — review (srs + week-spanning recall)

   Scope note (curriculum-spec.md §3): the spec assigns "-re verbs (prendre,
   comprendre)" — the irregular prendre family, NOT the regular attendre/vendre
   group — so that's what day 76 teaches, leaning on je prends (wk3) / j'ai
   pris (wk8). The PC↔imparfait contrast is kept LIGHT per the spec. */

const LESSON_71 = {
  day: 71, week: 11,
  title: "L'imparfait : je parlais, j'étais",
  durationMin: 20,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"A second past tense",
      body:[
        "You already have one past — the passé composé, for things that <em>happened</em>. This week adds the other one: the <b>imparfait</b>, for how things <em>were</em> — descriptions, states, and habits.",
        "It's a real new tense, so today is just the machinery: how to build it. It's wonderfully regular — one stem, one set of endings, one exception (<em>être</em>)."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"-ais, -ait, -aient: all /ɛ/",
      body:["Three of the endings are spelled differently but sound identical — the imparfait's signature trap:"],
      pairs:[
        { fr:"je parlais", ipa:"/ʒə paʁ.lɛ/", en:"-ais = /ɛ/, the open ‘è’", say:"je parlais", key:"d71_jeparlais" },
        { fr:"il parlait", ipa:"/il paʁ.lɛ/", en:"-ait = the very same /ɛ/, silent t", say:"il parlait", key:"d71_ilparlait" },
        { fr:"ils parlaient", ipa:"/il paʁ.lɛ/", en:"-aient = /ɛ/ again, the -ent silent", say:"ils parlaient", key:"d71_ilsparlaient" }
      ],
      tip:"<b>je parlais, il parlait, ils parlaient</b> are all /paʁ.lɛ/ — only spelling separates them, exactly like the passé composé's <em>-é / -er / -ez</em> (week 8) all sounded /e/. The two that <em>do</em> sound different are <b>nous parlions</b> /paʁ.ljɔ̃/ and <b>vous parliez</b> /paʁ.lje/. And note the vowel is the open <b>/ɛ/</b> (è), not the closed /e/ of <em>parlé</em> — that gap matters on day 73."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Building the imparfait",
      items:[
        { fr:"je parlais", en:"I was speaking / I used to speak", reg:null, say:"je parlais", key:"d71_v_jeparlais" },
        { fr:"tu parlais", en:"you were speaking (informal)", reg:"informal", say:"tu parlais", key:"d71_v_tuparlais" },
        { fr:"il/elle parlait", en:"he/she was speaking", reg:null, say:"elle parlait", key:"d71_v_ilparlait" },
        { fr:"nous parlions", en:"we were speaking", reg:null, say:"nous parlions", key:"d71_v_nousparlions" },
        { fr:"ils parlaient", en:"they were speaking", reg:null, say:"ils parlaient", key:"d71_v_ilsparlaient" },
        { fr:"j'étais", en:"I was (être — irregular stem)", reg:null, say:"j'étais", key:"d71_v_jetais" },
        { fr:"j'avais", en:"I had (avoir)", reg:null, say:"j'avais", key:"d71_v_javais" },
        { fr:"l'imparfait", en:"the imperfect (this tense)", reg:null, say:"l'imparfait", key:"d71_v_limparfait" }
      ],
      tip:"The recipe: take the present <b>nous</b> form, drop <b>-ons</b>, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. <em>Nous parlons → parl- → je parlais</em>; <em>nous finissons → finiss- → je finissais</em>; <em>nous avons → av- → j'avais</em>. The one verb that breaks it is <b>être</b>: its stem is <b>ét-</b> (j'étais, tu étais, il était…). You've actually said <em>c'était</em> since week 9 — that's the imparfait of être, already in your mouth."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"How things used to be",
      body:["Talking about the past — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu habitais où, avant Paris ?", en:"Where did you live, before Paris?", say:"Tu habitais où, avant Paris ?", key:"d71_d1" },
        { who:"B", fr:"J'habitais à Lyon. J'avais un petit appartement près du parc.", en:"I lived in Lyon. I had a little flat near the park.", say:"J'habitais à Lyon. J'avais un petit appartement près du parc.", key:"d71_d2" },
        { who:"A", fr:"Et tu travaillais déjà ?", en:"And were you already working?", say:"Et tu travaillais déjà ?", key:"d71_d3" },
        { who:"B", fr:"Non, j'étais étudiant. C'était une belle période.", en:"No, I was a student. It was a lovely time.", say:"Non, j'étais étudiant. C'était une belle période.", key:"d71_d4" }
      ],
      tip:"Every verb here is the imparfait: <b>tu habitais</b>, <b>j'avais</b>, <b>tu travaillais</b>, <b>j'étais</b>, <b>c'était</b>. Notice it's all description and ongoing state — no single ‘event’. That's what tomorrow is about. (<em>Habiter, travailler</em> are the regular week-2 verbs; only the tense is new.)"},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The imparfait stem comes from…",
          opts:["the infinitive","the present nous-form minus -ons","the past participle","the je-form"], answer:1,
          ok:"Right — nous parlons → parl- → je parlais.",
          no:"<b>The present nous-form minus -ons</b> — nous parlons → parl-." },
        { prompt:"‘je parlais’, ‘il parlait’, ‘ils parlaient’ sound…",
          opts:["all different","all the same (/paʁlɛ/)","only two alike","nothing alike"], answer:1,
          ok:"Right — all /paʁlɛ/; only spelling differs.",
          no:"<b>All the same</b> — /paʁlɛ/. Like the PC's -é/-er/-ez trap." },
        { prompt:"Which verb has an irregular imparfait stem?",
          opts:["parler","avoir","être","finir"], answer:2,
          ok:"Right — être uses ét-: j'étais.",
          no:"<b>Être</b> — the one exception, stem ét- (j'étais)." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The tense of nostalgia",
      body:[
        "The imparfait is the sound of reminiscing. <b>« Quand j'étais petit… »</b>, <b>« Avant, c'était différent… »</b> — French leans on it constantly to paint how things used to be, and it carries a warm, wistful colour the passé composé doesn't.",
        "You'll hear whole stretches of it when someone describes a childhood, an old neighbourhood, a way things once worked. Getting comfortable in the imparfait is what lets you do more than list events — it lets you set a scene."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 71, done.",
      body:["You can build the imparfait. Tomorrow: what it's actually for."],
      next:"Jour 72 — C'était, il y avait : décrire le passé"}
  ]
};

const LESSON_72 = {
  day: 72, week: 11,
  title: "C'était, il y avait : décrire le passé",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"What the imparfait is for",
      body:[
        "The machinery's built; now its two jobs. The imparfait paints the past that has no single moment: <b>description</b> (what things were like) and <b>habit</b> (what you used to do).",
        "Three phrases carry most of it: <b>c'était</b> (it was), <b>il y avait</b> (there was/were), <b>il faisait</b> (the weather was)."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The description toolkit",
      body:["Three high-frequency imparfait phrases, each with a sound to place:"],
      pairs:[
        { fr:"c'était", ipa:"/se.tɛ/", en:"‘it was’ — être's imparfait, ending in /ɛ/", say:"c'était", key:"d72_cetait" },
        { fr:"il y avait", ipa:"/i.lja.vɛ/", en:"‘there was/were’ — il y a, in the past", say:"il y avait", key:"d72_ilyavait" },
        { fr:"il faisait beau", ipa:"/il fə.zɛ bo/", en:"faisait keeps faire's odd ai-as-schwa /fə.zɛ/", say:"il faisait beau", key:"d72_ilfaisaitbeau" }
      ],
      tip:"<b>Il y avait</b> is simply <em>il y a</em> (‘there is/are’, week 2) shifted into the imparfait — ‘there was / there were’. And <b>il faisait</b> carries the same quirk as week 5's <em>nous faisons</em>: the <em>ai</em> is pronounced as a plain schwa /ə/, so it's /fə.zɛ/, not ‘fay-zay’."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Description and habit",
      items:[
        { fr:"c'était", en:"it was", reg:null, say:"c'était bien", key:"d72_v_cetait" },
        { fr:"il y avait", en:"there was / there were", reg:null, say:"il y avait du monde", key:"d72_v_ilyavait" },
        { fr:"il faisait beau", en:"the weather was nice", reg:null, say:"il faisait beau", key:"d72_v_ilfaisaitbeau" },
        { fr:"j'avais faim", en:"I was hungry", reg:null, say:"j'avais faim", key:"d72_v_javaisfaim" },
        { fr:"quand j'étais petit(e)", en:"when I was little", reg:null, say:"quand j'étais petit", key:"d72_v_quandjetaispetit" },
        { fr:"tous les jours", en:"every day", reg:null, say:"tous les jours", key:"d72_v_touslesjours" },
        { fr:"souvent", en:"often", reg:null, say:"souvent", key:"d72_v_souvent" },
        { fr:"avant", en:"before / in the past", reg:null, say:"avant", key:"d72_v_avant" }
      ],
      tip:"Two jobs, one tense. <b>Description</b>: <em>c'était bien, il y avait du monde, il faisait froid, j'avais faim, elle était fatiguée</em> — the scene, the state, the feeling. <b>Habit</b>: <em>quand j'étais petit, je jouais tous les jours</em> — the English ‘used to’ / ‘would’. Words like <em>souvent, tous les jours, avant</em> are classic imparfait company."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A childhood summer",
      body:["Reminiscing about holidays — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Quand tu étais petit, tu passais l'été où ?", en:"When you were little, where did you spend the summer?", say:"Quand tu étais petit, tu passais l'été où ?", key:"d72_d1" },
        { who:"B", fr:"Chez mes grands-parents, à la campagne. Il faisait toujours beau.", en:"At my grandparents', in the countryside. The weather was always nice.", say:"Chez mes grands-parents, à la campagne. Il faisait toujours beau.", key:"d72_d2" },
        { who:"A", fr:"C'était comment ?", en:"What was it like?", say:"C'était comment ?", key:"d72_d3" },
        { who:"B", fr:"Génial. Il y avait un grand jardin, et on jouait dehors tous les jours.", en:"Great. There was a big garden, and we played outside every day.", say:"Génial. Il y avait un grand jardin, et on jouait dehors tous les jours.", key:"d72_d4" }
      ],
      tip:"Pure imparfait, because it's all scene and habit: <em>tu étais, tu passais, il faisait, c'était, il y avait, on jouait</em>. <b>C'était comment ?</b> (‘what was it like?’) is the perfect question to invite a description. <em>Tous les jours</em> flags the habit — ‘we used to play outside every day’."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘There was a garden’:",
          opts:["il y a un jardin","il y avait un jardin","il a eu un jardin","c'était un jardin"], answer:1,
          ok:"Right — il y avait, the imparfait of il y a.",
          no:"<b>Il y avait un jardin</b> — il y a shifted into the imparfait." },
        { prompt:"The imparfait is used for…",
          opts:["single completed events","description and habit","only the future","only questions"], answer:1,
          ok:"Right — how things were, and what you used to do.",
          no:"<b>Description and habit</b> — the scene and the ‘used to’, not one event." },
        { prompt:"Which word signals a habit (→ imparfait)?",
          opts:["soudain","hier","tous les jours","une fois"], answer:2,
          ok:"Right — tous les jours (every day) = repeated → imparfait.",
          no:"<b>Tous les jours</b> — repetition points to the imparfait." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"« C'était mieux avant » ",
      body:[
        "There's a whole national reflex captured in one imparfait phrase: <b>« C'était mieux avant »</b> — ‘it was better before’. Half-joking, half-serious, it's the standard opening for a nostalgic grumble about anything from the metro to the weather to the price of bread.",
        "It's worth knowing not just as a phrase but as a register: the imparfait is where fond memory and gentle complaint both live. <em>« Avant, il y avait une boulangerie au coin… »</em> — and you're instantly speaking like a local reminiscing."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 72, done.",
      body:["You can describe the past. Tomorrow: the hard part — choosing between the two past tenses."],
      next:"Jour 73 — Photo ou film : passé composé ou imparfait ?"}
  ]
};

const LESSON_73 = {
  day: 73, week: 11,
  title: "Photo ou film : passé composé ou imparfait ?",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The event, and the backdrop",
      body:[
        "Now the two pasts meet. French makes you choose, and the choice is about <em>aspect</em>, not time: the <b>passé composé</b> is a <b>photo</b> — one completed thing that happened; the <b>imparfait</b> is the <b>film</b> running behind it — the ongoing scene.",
        "This is a light first look, not a full mastery — the distinction is genuinely hard, and it deepens well beyond A2. Get the core image, and the instinct starts to grow."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"parlé vs parlais: é vs è",
      body:["The two tenses even sound a hair apart — closed /e/ against open /ɛ/:"],
      pairs:[
        { fr:"j'ai parlé", ipa:"/ʒe paʁ.le/", en:"passé composé — ends in closed -é /e/, with the auxiliary j'ai", say:"j'ai parlé", key:"d73_jaiparle" },
        { fr:"je parlais", ipa:"/ʒə paʁ.lɛ/", en:"imparfait — ends in open -ais /ɛ/, no auxiliary", say:"je parlais", key:"d73_jeparlais" },
        { fr:"j'ai mangé / je mangeais", ipa:"/ʒe mɑ̃.ʒe/ · /ʒə mɑ̃.ʒɛ/", en:"same split: -é /e/ vs -ais /ɛ/", say:"je mangeais", key:"d73_jemangeais" }
      ],
      tip:"Two audible clues separate them: the passé composé has an <b>auxiliary</b> (<em>j'ai</em>, <em>je suis</em>) and ends in closed <b>-é /e/</b>; the imparfait has <b>no auxiliary</b> and ends in open <b>-ais /ɛ/</b> — the é vs è pair from week 3. <em>J'ai parlé</em> (I spoke — event) vs <em>je parlais</em> (I was speaking — backdrop)."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Event words and scene words",
      items:[
        { fr:"quand", en:"when", reg:null, say:"quand", key:"d73_v_quand" },
        { fr:"pendant que", en:"while", reg:null, say:"pendant que", key:"d73_v_pendantque" },
        { fr:"soudain", en:"suddenly", reg:null, say:"soudain", key:"d73_v_soudain" },
        { fr:"tout à coup", en:"all of a sudden", reg:null, say:"tout à coup", key:"d73_v_toutacoup" },
        { fr:"d'habitude", en:"usually", reg:null, say:"d'habitude", key:"d73_v_dhabitude" },
        { fr:"une fois", en:"once / one time", reg:null, say:"une fois", key:"d73_v_unefois" },
        { fr:"Je dormais quand…", en:"I was sleeping when…", reg:null, say:"Je dormais quand le téléphone a sonné", key:"d73_v_jedormaisquand" },
        { fr:"Il faisait beau, alors…", en:"The weather was nice, so…", reg:null, say:"Il faisait beau, alors je suis sorti", key:"d73_v_ilfaisaitbeaualors" }
      ],
      tip:"The picture: <b>imparfait</b> = the film (ongoing, background, habit) — <em>je dormais</em>, <em>il faisait beau</em>, <em>d'habitude…</em>; <b>passé composé</b> = the photo (the event that happens) — <em>le téléphone a sonné</em>, <em>je suis sorti</em>, <em>une fois…</em>. Together: <b>Je dormais</b> (film) <b>quand le téléphone a sonné</b> (photo). Words like <em>soudain, une fois, hier</em> pull the passé composé; <em>d'habitude, souvent, tous les jours</em> pull the imparfait."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"What happened?",
      body:["A small story — scene, then event — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Hier, il faisait super beau, alors je suis allé au parc.", en:"Yesterday, the weather was gorgeous, so I went to the park.", say:"Hier, il faisait super beau, alors je suis allé au parc.", key:"d73_d1" },
        { who:"B", fr:"Et c'était bien ?", en:"And was it good?", say:"Et c'était bien ?", key:"d73_d2" },
        { who:"A", fr:"Oui ! Je lisais tranquillement… et soudain, un chien a pris mon sandwich !", en:"Yes! I was reading peacefully… and suddenly, a dog took my sandwich!", say:"Oui ! Je lisais tranquillement… et soudain, un chien a pris mon sandwich !", key:"d73_d3" },
        { who:"B", fr:"Non ! Qu'est-ce que tu as fait ?", en:"No way! What did you do?", say:"Non ! Qu'est-ce que tu as fait ?", key:"d73_d4" },
        { who:"A", fr:"Rien, j'ai rigolé. Il avait faim, le pauvre !", en:"Nothing, I laughed. It was hungry, poor thing!", say:"Rien, j'ai rigolé. Il avait faim, le pauvre !", key:"d73_d5" }
      ],
      tip:"Watch the two tenses share the story: the <em>scene</em> is imparfait (<b>il faisait beau</b>, <b>je lisais</b>, <b>il avait faim</b>), the <em>events</em> are passé composé (<b>je suis allé</b>, <b>un chien a pris</b>, <b>j'ai rigolé</b>). <em>Soudain</em> flips you into the photo. <em>Rigoler</em> = to laugh (casual)."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I was sleeping when the phone rang.’ — je ___ quand le téléphone ___.",
          opts:["ai dormi / sonnait","dormais / a sonné","dormais / sonnait","ai dormi / a sonné"], answer:1,
          ok:"Right — dormais (imparfait, ongoing) + a sonné (PC, the event).",
          no:"<b>Dormais / a sonné</b> — the ongoing film, interrupted by the photo." },
        { prompt:"The passé composé is like a…",
          opts:["film running in the background","photo of one completed moment","habit","description"], answer:1,
          ok:"Right — a photo: a single, completed event.",
          no:"<b>A photo</b> — one completed event. The imparfait is the film." },
        { prompt:"‘D'habitude, je ___ le bus’ (habit) wants which tense?",
          opts:["passé composé (j'ai pris)","imparfait (prenais)","futur proche","present"], answer:1,
          ok:"Right — a habit → imparfait: d'habitude je prenais le bus.",
          no:"<b>Imparfait</b> — ‘usually’ marks a repeated habit → je prenais." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Don't panic about getting it perfect",
      body:[
        "Even advanced learners wobble on this choice, and French speakers understand you either way — a wrong pick sounds slightly off, it doesn't block meaning. So use the tenses now; don't wait until you feel sure.",
        "The image that carries you furthest: if you could <em>photograph</em> it as a finished moment (‘the dog took the sandwich’), reach for the passé composé. If you'd <em>film</em> it as a scene or a habit that was just… going on (‘it was sunny, I was reading’), reach for the imparfait. Repetition, over months of listening, does the rest."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 73, done.",
      body:["The two pasts are in play. Tomorrow, a change of gear: comparing things."],
      next:"Jour 74 — Plus grand, moins cher : comparer"}
  ]
};

const LESSON_74 = {
  day: 74, week: 11,
  title: "Plus grand, moins cher : comparer",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"More, less, as much",
      body:[
        "A lighter day: comparing two things. Three little frames do almost all of it — <b>plus… que</b> (more… than), <b>moins… que</b> (less… than), <b>aussi… que</b> (as… as).",
        "Plus one irregular you'll use constantly: <em>bon</em> doesn't become ‘plus bon’ — it becomes <b>meilleur</b>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"plus, moins, meilleur",
      body:["The comparison words, and a liaison to watch:"],
      pairs:[
        { fr:"plus grand", ipa:"/ply ɡʁɑ̃/", en:"plus = /ply/ before a consonant — the s is silent", say:"plus grand", key:"d74_plusgrand" },
        { fr:"moins cher", ipa:"/mwɛ̃ ʃɛʁ/", en:"moins = /mwɛ̃/, nasal, s silent", say:"moins cher", key:"d74_moinscher" },
        { fr:"meilleur", ipa:"/mɛ.jœʁ/", en:"‘better’ — the -ill- is the /j/ glide (cf. taille)", say:"meilleur", key:"d74_meilleur" }
      ],
      tip:"In comparisons, <b>plus</b> drops its s before a consonant (<em>plus grand</em> /ply ɡʁɑ̃/) but sounds it as /z/ before a vowel (<em>plus‿intéressant</em> /ply.z…/). <b>Moins</b> stays /mwɛ̃/. And <b>meilleur</b> reuses the /j/ glide of week 6's <em>taille</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Comparing",
      items:[
        { fr:"plus… que", en:"more… than", reg:null, say:"plus grand que", key:"d74_v_plusque" },
        { fr:"moins… que", en:"less… than", reg:null, say:"moins cher que", key:"d74_v_moinsque" },
        { fr:"aussi… que", en:"as… as", reg:null, say:"aussi grand que", key:"d74_v_aussique" },
        { fr:"meilleur(e)", en:"better (than)", reg:null, say:"meilleur", key:"d74_v_meilleur" },
        { fr:"C'est mieux", en:"it's better (this way)", reg:null, say:"C'est mieux", key:"d74_v_cestmieux" },
        { fr:"cher / chère", en:"expensive", reg:null, say:"cher", key:"d74_v_cher" },
        { fr:"intéressant(e)", en:"interesting", reg:null, say:"intéressant", key:"d74_v_interessant" },
        { fr:"pareil / pareille", en:"the same / alike", reg:null, say:"pareil", key:"d74_v_pareil" }
      ],
      tip:"Frame: <b>plus / moins / aussi + adjective + que</b>. <em>Paris est plus grand que Lyon</em>; <em>le métro est moins cher que le taxi</em>; <em>il est aussi grand que moi</em>. The irregular: <b>bon → meilleur</b> (‘a better coffee’ = <em>un meilleur café</em>, never ‘plus bon’). Careful with its cousin <b>mieux</b> = ‘better’ for <em>how</em> you do something (<em>je parle mieux</em>), where <em>meilleur</em> describes a thing."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Which café?",
      body:["Comparing two spots — <b>tu</b>."],
      turns:[
        { who:"A", fr:"On va au café d'en face ? Il est moins cher.", en:"Shall we go to the café across the way? It's cheaper.", say:"On va au café d'en face ? Il est moins cher.", key:"d74_d1" },
        { who:"B", fr:"Oui, mais l'autre est meilleur, je trouve. Le café y est excellent.", en:"Yes, but the other one's better, I think. The coffee there is excellent.", say:"Oui, mais l'autre est meilleur, je trouve. Le café y est excellent.", key:"d74_d2" },
        { who:"A", fr:"C'est vrai, mais il est aussi plus loin.", en:"That's true, but it's also further.", say:"C'est vrai, mais il est aussi plus loin.", key:"d74_d3" },
        { who:"B", fr:"Bon, le plus proche, alors. C'est plus simple !", en:"OK, the nearest one then. It's simpler!", say:"Bon, le plus proche, alors. C'est plus simple !", key:"d74_d4" }
      ],
      tip:"Comparisons stacking up: <b>moins cher</b>, <b>meilleur</b>, <b>plus loin</b>, <b>plus simple</b>, and a first peek at the superlative <b>le plus proche</b> (‘the nearest’ — plus + le). <em>Je trouve</em> slips in an opinion — which is exactly tomorrow's lesson. <em>Y</em> (‘there’) is week 9's."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Cheaper than the taxi’:",
          opts:["plus cher que le taxi","moins cher que le taxi","aussi cher que le taxi","meilleur que le taxi"], answer:1,
          ok:"Right — moins cher que = less expensive than.",
          no:"<b>Moins cher que le taxi</b> — moins… que = less… than." },
        { prompt:"‘A better coffee’:",
          opts:["un plus bon café","un meilleur café","un café plus bon","un mieux café"], answer:1,
          ok:"Right — bon → meilleur, never ‘plus bon’.",
          no:"<b>Un meilleur café</b> — bon's comparative is the irregular meilleur." },
        { prompt:"‘As big as me’:",
          opts:["plus grand que moi","moins grand que moi","aussi grand que moi","meilleur que moi"], answer:2,
          ok:"Right — aussi… que = as… as.",
          no:"<b>Aussi grand que moi</b> — aussi… que expresses equality." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Comparing is a national sport",
      body:[
        "Paris vs province, this café vs that one, the old metro line vs the new — the French genuinely enjoy a good comparison, and <em>meilleur</em> is one of the most-used words in any food conversation. Being able to say <em>« C'est meilleur que l'autre »</em> earns instant credibility at the table.",
        "One gentle warning: <em>meilleur</em> (an adjective, for things) and <em>mieux</em> (an adverb, for how something's done) trip up nearly every learner. <em>Ce café est meilleur</em> (this coffee is better) but <em>ce café est mieux fait</em> (this coffee is better made). When in doubt for a thing, reach for <em>meilleur</em>."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 74, done.",
      body:["You can compare. Tomorrow: saying what you actually think."],
      next:"Jour 75 — À mon avis : donner son opinion"}
  ]
};

const LESSON_75 = {
  day: 75, week: 11,
  title: "À mon avis : donner son opinion",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Saying what you think",
      body:[
        "Opinions run on a few fixed openers, each followed by a normal sentence. <b>Je trouve que…</b>, <b>Je pense que…</b>, <b>À mon avis…</b> — plug in what you think, and you're giving an opinion.",
        "Pair them with a handful of judgement words (<em>génial</em>, <em>nul</em>, <em>ennuyeux</em>) and you can react to almost anything."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The opinion openers",
      body:["Three frames, three sounds:"],
      pairs:[
        { fr:"à mon avis", ipa:"/a mɔ̃.n‿a.vi/", en:"mon liaises its n onto avis; the final s is silent", say:"à mon avis", key:"d75_amonavis" },
        { fr:"je trouve que", ipa:"/ʒə tʁuv kə/", en:"trouve /tʁuv/ — ‘I find that…’", say:"je trouve que", key:"d75_jetrouveque" },
        { fr:"je pense que", ipa:"/ʒə pɑ̃s kə/", en:"pense /pɑ̃s/ — the ‘en’ nasal", say:"je pense que", key:"d75_jepenseque" }
      ],
      tip:"<b>À mon avis</b> liaisons like week 7's <em>mon ami</em> — mon‿avis, the n links onto the vowel — and <em>avis</em> ends in a silent s (/a.vi/). <b>Je trouve que</b> and <b>je pense que</b> both just introduce a full clause: <em>je trouve que c'est cher</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Opinions and reactions",
      items:[
        { fr:"je trouve que", en:"I find / think that", reg:null, say:"je trouve que c'est cher", key:"d75_v_jetrouveque" },
        { fr:"à mon avis", en:"in my opinion", reg:null, say:"à mon avis", key:"d75_v_amonavis" },
        { fr:"je pense que", en:"I think that", reg:null, say:"je pense que", key:"d75_v_jepenseque" },
        { fr:"pour moi", en:"for me / in my view", reg:null, say:"pour moi", key:"d75_v_pourmoi" },
        { fr:"c'est génial", en:"it's great", reg:null, say:"c'est génial", key:"d75_v_cestgenial" },
        { fr:"c'est nul", en:"it's rubbish / awful", reg:"informal", say:"c'est nul", key:"d75_v_cestnul" },
        { fr:"c'est ennuyeux", en:"it's boring", reg:null, say:"c'est ennuyeux", key:"d75_v_cestennuyeux" },
        { fr:"Qu'est-ce que tu en penses ?", en:"What do you think (of it)?", reg:"informal", say:"Qu'est-ce que tu en penses ?", key:"d75_v_questcetuenpenses" }
      ],
      tip:"The openers all take a clause: <b>je trouve que</b> + <em>c'est cher</em>, <b>à mon avis</b> + <em>c'est trop</em>, <b>je pense que</b> + <em>tu as raison</em>. Ask for an opinion with <b>Qu'est-ce que tu en penses ?</b> — note the <em>en</em> (‘of it’) from week 9. Reaction words ride on <em>c'est</em>: <em>c'est génial / nul / ennuyeux / intéressant</em>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"After the film",
      body:["Reacting to a film — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Alors, le film ? Qu'est-ce que tu en penses ?", en:"So, the film? What do you think of it?", say:"Alors, le film ? Qu'est-ce que tu en penses ?", key:"d75_d1" },
        { who:"B", fr:"À mon avis, c'était génial. Je trouve que l'histoire était originale.", en:"In my opinion, it was great. I think the story was original.", say:"À mon avis, c'était génial. Je trouve que l'histoire était originale.", key:"d75_d2" },
        { who:"A", fr:"Ah bon ? Moi, je pense que c'était un peu long.", en:"Really? Me, I think it was a bit long.", say:"Ah bon ? Moi, je pense que c'était un peu long.", key:"d75_d3" },
        { who:"B", fr:"Peut-être, mais pour moi, la fin était parfaite.", en:"Maybe, but for me, the ending was perfect.", say:"Peut-être, mais pour moi, la fin était parfaite.", key:"d75_d4" }
      ],
      tip:"Opinions layered with the imparfait for description: <em>c'était génial</em>, <em>l'histoire était originale</em>, <em>la fin était parfaite</em> — reviewing a film is largely imparfait (describing how it <em>was</em>) plus opinion frames. Notice the polite disagreement building — <em>ah bon ? / peut-être, mais…</em> — which is tomorrow's focus."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘In my opinion, it's too expensive’:",
          opts:["À mon avis, c'est trop cher","Je suis avis c'est cher","Mon avis est cher","À mon avis cher"], answer:0,
          ok:"Right — à mon avis + a full clause.",
          no:"<b>À mon avis, c'est trop cher</b> — the frame + a normal sentence." },
        { prompt:"‘Qu'est-ce que tu en penses ?’ — the ‘en’ means…",
          opts:["there","of it / about it","some","never"], answer:1,
          ok:"Right — en = ‘of it / about it’ (week 9).",
          no:"<b>Of it / about it</b> — the en pronoun from week 9." },
        { prompt:"‘Je trouve que…’ is followed by…",
          opts:["an infinitive","a full clause","a single adjective","nothing"], answer:1,
          ok:"Right — je trouve que + [c'est cher], a whole clause.",
          no:"<b>A full clause</b> — je trouve que c'est cher." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Everyone has an avis",
      body:[
        "Offering an opinion is expected in French social life, not pushy — a shrug and ‘I don't mind’ can even read as disengaged. <em>Je trouve que…</em>, <em>à mon avis…</em>, a clear <em>c'est génial</em> or <em>c'est nul</em>: having a view and stating it is how you take part.",
        "The art, which the next lesson sharpens, is holding a view <em>and</em> staying pleasant when someone disagrees — the famous café conversation, where two people can cheerfully argue over a film and stay friends. Opinions are the entry ticket; softening the clash is the skill."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 75, done.",
      body:["You can state a view. Tomorrow: understanding, agreeing, and disagreeing without a fight."],
      next:"Jour 76 — Prendre, comprendre : je ne suis pas d'accord"}
  ]
};

const LESSON_76 = {
  day: 76, week: 11,
  title: "Prendre, comprendre : je ne suis pas d'accord",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"A verb family you half-know, and the art of the friendly argument",
      body:[
        "A verb you've used since the café in week 3 — <b>prendre</b> — plus its two relatives <b>comprendre</b> (to understand) and <b>apprendre</b> (to learn). One pattern covers all three.",
        "And the social skill they unlock: agreeing, disagreeing, and saying ‘I don't get it’ — the machinery of a good French café debate."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"prends vs prennent",
      body:["The prendre stem shifts its sound across the conjugation:"],
      pairs:[
        { fr:"je prends", ipa:"/ʒə pʁɑ̃/", en:"nasal /ɑ̃/, silent -ds — the week-3 form", say:"je prends", key:"d76_jeprends" },
        { fr:"nous prenons", ipa:"/nu pʁə.nɔ̃/", en:"the stem un-nasalizes to a schwa: pren-", say:"nous prenons", key:"d76_nousprenons" },
        { fr:"ils prennent", ipa:"/il pʁɛn/", en:"double-n: /pʁɛn/, the n now audible, no nasal", say:"ils prennent", key:"d76_ilsprennent" }
      ],
      tip:"One verb, three stem-sounds: <b>prends</b> /pʁɑ̃/ (nasal, singular), <b>pren-</b> /pʁən/ (nous/vous), <b>prenn-</b> /pʁɛn/ (ils/elles — the n wakes up, like <em>bon → bonne</em>). Full: je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent. <b>Comprendre</b> and <b>apprendre</b> run identically."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Take, understand, learn — and (dis)agree",
      items:[
        { fr:"je prends", en:"I take / have (café, wk3)", reg:null, say:"je prends un café", key:"d76_v_jeprends" },
        { fr:"je comprends", en:"I understand", reg:null, say:"je comprends", key:"d76_v_jecomprends" },
        { fr:"je ne comprends pas", en:"I don't understand", reg:null, say:"je ne comprends pas", key:"d76_v_jenecomprendspas" },
        { fr:"j'apprends le français", en:"I'm learning French", reg:null, say:"j'apprends le français", key:"d76_v_japprends" },
        { fr:"tu as raison", en:"you're right", reg:null, say:"tu as raison", key:"d76_v_tuasraison" },
        { fr:"je suis d'accord", en:"I agree", reg:null, say:"je suis d'accord", key:"d76_v_jesuisdaccord" },
        { fr:"je ne suis pas d'accord", en:"I disagree", reg:null, say:"je ne suis pas d'accord", key:"d76_v_jenesuispasdaccord" },
        { fr:"oui, mais…", en:"yes, but…", reg:null, say:"oui, mais", key:"d76_v_ouimais" }
      ],
      tip:"<b>Comprendre</b> and <b>apprendre</b> are just <em>prendre</em> with a prefix — same conjugation. For a café debate: agree (<b>tu as raison</b>, <b>je suis d'accord</b>, <b>c'est vrai</b>), disagree <em>softly</em> (<b>oui, mais…</b>, <b>je ne suis pas d'accord, mais je comprends</b>), and never a blunt <em>« tu as tort »</em> (‘you're wrong’). <b>Je ne comprends pas</b> is your most useful repair phrase in any conversation."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A friendly disagreement",
      body:["Two friends debating over coffee — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Je trouve que la campagne, c'est mieux que la ville pour les enfants.", en:"I think the countryside is better than the city for kids.", say:"Je trouve que la campagne, c'est mieux que la ville pour les enfants.", key:"d76_d1" },
        { who:"B", fr:"Oui, je comprends, mais je ne suis pas tout à fait d'accord.", en:"Yes, I understand, but I don't entirely agree.", say:"Oui, je comprends, mais je ne suis pas tout à fait d'accord.", key:"d76_d2" },
        { who:"A", fr:"Ah bon ? Pourquoi ?", en:"Oh really? Why?", say:"Ah bon ? Pourquoi ?", key:"d76_d3" },
        { who:"B", fr:"À mon avis, en ville, il y a plus de choses à faire. Mais tu as raison sur l'air.", en:"In my opinion, in the city, there's more to do. But you're right about the air.", say:"À mon avis, en ville, il y a plus de choses à faire. Mais tu as raison sur l'air.", key:"d76_d4" }
      ],
      tip:"This is the café debate in miniature: <b>je comprends, mais…</b> (acknowledge before you push back), <b>je ne suis pas tout à fait d'accord</b> (‘not entirely’ — softer than a flat no), then a reason with <em>à mon avis</em> and a concession <b>tu as raison sur…</b>. Note <em>plus de choses</em> (‘more things’) — plus + de + noun, the quantity comparison."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘We take / are taking’ (nous, prendre):",
          opts:["nous prendons","nous prenons","nous prennons","nous prennent"], answer:1,
          ok:"Right — nous prenons, stem pren- with a schwa.",
          no:"<b>Nous prenons</b> — one n, schwa vowel: /pʁənɔ̃/." },
        { prompt:"‘They understand’ (ils, comprendre):",
          opts:["ils comprendent","ils comprennent","ils comprenent","ils comprends"], answer:1,
          ok:"Right — ils comprennent, double-n, /kɔ̃pʁɛn/.",
          no:"<b>Ils comprennent</b> — double n, the n audible: /kɔ̃.pʁɛn/." },
        { prompt:"The friendly way to disagree is…",
          opts:["« tu as tort »","« oui, mais… » / « je comprends, mais… »","saying nothing","« c'est nul »"], answer:1,
          ok:"Right — acknowledge first, then push back gently.",
          no:"<b>« Oui, mais… »</b> — soften; a blunt ‘tu as tort’ sounds harsh." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"La discussion : arguing as a pleasure",
      body:[
        "The café or dinner-table <em>débat</em> is a genuine French pastime — politics, films, food, city vs country — and disagreement is part of the fun, not a problem. What keeps it friendly is the form: you acknowledge (<em>je comprends</em>, <em>tu as raison sur…</em>), then differ (<em>mais à mon avis…</em>). The content can be sharp; the wrapping stays warm.",
        "A blunt <em>« Non, tu as tort »</em> (‘no, you're wrong’) lands harder in French than its English equivalent — it can end the pleasure rather than continue it. <em>« Je ne suis pas d'accord, mais je comprends »</em> keeps the door open, which is the whole point: the goal is a good conversation, not a winner."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 76, done.",
      body:["You can understand, agree and differ like a local. Tomorrow we tie the week together."],
      next:"Jour 77 — Révision (week 11 review)"}
  ]
};

const LESSON_77 = {
  day: 77, week: 11,
  title: "Révision — la semaine 11",
  durationMin: 17,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — describe, compare, opine",
      body:[
        "Retrieval day. One chained conversation that describes the past with the imparfait, compares, and gives opinions — six questions on the week's pressure points, then your due flashcards, now spanning eleven weeks.",
        "The week's real theme: the imparfait is the new spine — the ‘how things were’ past — sitting next to the passé composé, plus the tools to compare things and say what you think."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"The old neighbourhood",
      body:["Comparing then and now — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Tu te souviens du quartier, avant ? C'était comment ?", en:"Do you remember the neighbourhood, before? What was it like?", say:"Tu te souviens du quartier, avant ? C'était comment ?", key:"d77_d1" },
        { who:"B", fr:"Il y avait une petite boulangerie au coin, et tout le monde se connaissait.", en:"There was a little bakery on the corner, and everyone knew each other.", say:"Il y avait une petite boulangerie au coin, et tout le monde se connaissait.", key:"d77_d2" },
        { who:"A", fr:"Et maintenant, tu trouves que c'est mieux ou moins bien ?", en:"And now, do you think it's better or worse?", say:"Et maintenant, tu trouves que c'est mieux ou moins bien ?", key:"d77_d3" },
        { who:"B", fr:"À mon avis, c'est plus animé qu'avant, mais moins tranquille.", en:"In my opinion, it's livelier than before, but less peaceful.", say:"À mon avis, c'est plus animé qu'avant, mais moins tranquille.", key:"d77_d4" },
        { who:"A", fr:"Je comprends. Moi, je préférais avant, mais je m'habitue.", en:"I understand. Me, I preferred before, but I'm getting used to it.", say:"Je comprends. Moi, je préférais avant, mais je m'habitue.", key:"d77_d5" },
        { who:"B", fr:"Oui, tu as raison, c'était plus calme. Mais on a plus de choses maintenant.", en:"Yes, you're right, it was calmer. But we have more things now.", say:"Oui, tu as raison, c'était plus calme. Mais on a plus de choses maintenant.", key:"d77_d6" }
      ],
      tip:"Every thread fires: imparfait for description (<em>c'était, il y avait, se connaissait, je préférais</em>), comparatives (<em>plus animé qu'avant, moins tranquille, plus calme, plus de choses</em>), opinion frames (<em>tu trouves que, à mon avis</em>), and the debate register (<em>je comprends, tu as raison</em>). This is a real Parisian conversation."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Semaine 11 — the six that matter",
      questions:[
        { prompt:"The imparfait stem of ‘finir’ (nous finissons):",
          opts:["fini-","finiss-","finir-","fin-"], answer:1,
          ok:"Right — nous finissons → finiss- → je finissais.",
          no:"<b>finiss-</b> — from nous finissons minus -ons." },
        { prompt:"‘je parlais’ and ‘ils parlaient’ sound…",
          opts:["different","the same (/paʁlɛ/)","only -aient is heard","nothing alike"], answer:1,
          ok:"Right — both /paʁlɛ/; -ais/-ait/-aient all /ɛ/.",
          no:"<b>The same</b> — /paʁlɛ/. The imparfait homophone trap." },
        { prompt:"‘I was reading when the dog took my sandwich’ — the two verbs:",
          opts:["imparfait / imparfait","passé composé / imparfait","imparfait / passé composé","passé composé / passé composé"], answer:2,
          ok:"Right — je lisais (ongoing film) + a pris (the event/photo).",
          no:"<b>Imparfait / passé composé</b> — the ongoing scene, then the event." },
        { prompt:"‘A better coffee’:",
          opts:["un plus bon café","un meilleur café","un mieux café","un café meilleur bon"], answer:1,
          ok:"Right — bon → meilleur.",
          no:"<b>Un meilleur café</b> — bon's irregular comparative." },
        { prompt:"‘In my opinion’:",
          opts:["à mon avis","je suis avis","pour avis","mon avis que"], answer:0,
          ok:"Right — à mon avis + a clause.",
          no:"<b>À mon avis</b> — the standard opinion opener." },
        { prompt:"‘They understand’ (comprendre):",
          opts:["ils comprendent","ils comprennent","ils comprenent","ils comprends"], answer:1,
          ok:"Right — ils comprennent, double-n.",
          no:"<b>Ils comprennent</b> — like ils prennent, double n." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Eleven weeks of vocabulary now feed this queue — through both past tenses, the future, comparing and opining. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Eleven weeks: you can describe and discuss",
      body:[
        "You've added the last big piece of the A2 verb system — the imparfait — and with it the ability to <em>describe</em> the past (not just report events), to compare, and to give and defend an opinion in a friendly way. That's the difference between narrating facts and actually <em>discussing</em> — the café conversation, more or less.",
        "Next week is the finish line, and it's not new grammar — it's <b>everything together</b>. Week 12 pulls present, passé composé, imparfait and futur proche into one longer narrative (a full day in Paris), then checks you against the A2 can-do list. You already own the pieces; week 12 is about moving between them smoothly."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 11 — complète.",
      body:["Seventy-seven stations — one week from the terminus. Next week: everything at once, and a look back at how far you've come."],
      next:"Semaine 12, Jour 78 — Une journée à Paris (le grand récap)"}
  ]
};

export const WEEK11 = [LESSON_71, LESSON_72, LESSON_73, LESSON_74, LESSON_75, LESSON_76, LESSON_77];
