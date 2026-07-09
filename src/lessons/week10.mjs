/* Week 10 — Days 64–70. THE THIRD A2 WEEK. Plans & the near future: le
   futur proche = aller (the week-4 verb, unchanged) + an infinitive. This
   completes the timeline — passé composé (wks 8–9) + present + futur proche.

   Deliberately LIGHTER than weeks 8–9: there is nothing new to conjugate
   (the learner already owns aller), so the week is conceptual and functional
   — making plans, suggesting with on, weather, and inviting/declining.

   SCOPE GUARD (curriculum-spec.md §3): futur proche ONLY (aller + infinitive).
   The futur simple (je mangerai) is a separate, harder tense and is NOT
   introduced here. */

const LESSON_64 = {
  day: 64, week: 10,
  title: "Le futur proche : je vais partir",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The future, for free",
      body:[
        "You can talk about now and about the past. Today, ahead — and it costs almost nothing new. The near future, <b>le futur proche</b>, is just <b>aller</b> (the verb from week 4) + an <b>infinitive</b>: <em>je vais partir</em>, ‘I'm going to leave’.",
        "No new conjugation, no participles, no agreement. If you can say <em>je vais</em>, you can say <em>je vais faire</em>, <em>je vais manger</em>, <em>je vais sortir</em>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"vais / vas / va, then an infinitive",
      body:["The aller forms from week 4, now each trailed by a plain infinitive:"],
      pairs:[
        { fr:"je vais partir", ipa:"/ʒə vɛ paʁ.tiʁ/", en:"je vais /vɛ/ (rhymes with mais) + the infinitive partir", say:"je vais partir", key:"d64_jevaispartir" },
        { fr:"tu vas manger", ipa:"/ty va mɑ̃.ʒe/", en:"tu vas + manger — no liaison, both plain", say:"tu vas manger", key:"d64_tuvasmanger" },
        { fr:"on va sortir", ipa:"/ɔ̃ va sɔʁ.tiʁ/", en:"on va + sortir — the everyday ‘we're going to…’", say:"on va sortir", key:"d64_onvasortir" }
      ],
      tip:"Nothing here is new to <em>say</em> — <b>je vais</b> /vɛ/ still rhymes with <em>mais</em> (week 4), <b>va</b> is still /va/. You're just adding an infinitive behind it. The whole tense is: take the <em>aller</em> you already know, and stick a dictionary-form verb on the end."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Going to do something",
      items:[
        { fr:"je vais + infinitif", en:"I'm going to… (near future)", reg:null, say:"je vais partir", key:"d64_v_jevaisinf" },
        { fr:"je vais faire", en:"I'm going to do / make", reg:null, say:"je vais faire", key:"d64_v_jevaisfaire" },
        { fr:"tu vas voir", en:"you're going to see (informal)", reg:"informal", say:"tu vas voir", key:"d64_v_tuvasvoir" },
        { fr:"on va manger", en:"we're going to eat", reg:null, say:"on va manger", key:"d64_v_onvamanger" },
        { fr:"demain", en:"tomorrow", reg:null, say:"demain", key:"d64_v_demain" },
        { fr:"bientôt", en:"soon", reg:null, say:"bientôt", key:"d64_v_bientot" },
        { fr:"le futur proche", en:"the near future (this tense)", reg:null, say:"le futur proche", key:"d64_v_futurproche" },
        { fr:"Qu'est-ce que tu vas faire ?", en:"What are you going to do?", reg:"informal", say:"Qu'est-ce que tu vas faire ?", key:"d64_v_questcetuvasfaire" }
      ],
      tip:"The formula: <b>aller (present)</b> + <b>infinitive</b>. <em>Je vais faire</em>, <em>tu vas voir</em>, <em>on va manger</em>. Compare the two jobs of <em>je vais</em>: on its own it's literal motion (<em>je vais à Paris</em>, week 4); with an infinitive it's the future (<em>je vais partir</em>) — exactly like English ‘I'm going to Paris’ vs ‘I'm going to leave’. <b>Demain</b> is the marker to pair it with."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Plans for tomorrow",
      body:["Two friends talking about the next day — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Qu'est-ce que tu vas faire demain ?", en:"What are you going to do tomorrow?", say:"Qu'est-ce que tu vas faire demain ?", key:"d64_d1" },
        { who:"B", fr:"Je vais travailler le matin, et l'après-midi je vais voir des amis.", en:"I'm going to work in the morning, and in the afternoon I'm going to see friends.", say:"Je vais travailler le matin, et l'après-midi je vais voir des amis.", key:"d64_d2" },
        { who:"A", fr:"Et le soir ? On va manger ensemble ?", en:"And in the evening? Shall we eat together?", say:"Et le soir ? On va manger ensemble ?", key:"d64_d3" },
        { who:"B", fr:"Bonne idée ! On va essayer le nouveau resto.", en:"Good idea! We're going to try the new restaurant.", say:"Bonne idée ! On va essayer le nouveau resto.", key:"d64_d4" }
      ],
      tip:"Every future here is <em>aller</em> + infinitive: <b>tu vas faire</b>, <b>je vais travailler</b>, <b>je vais voir</b>, <b>on va manger</b>, <b>on va essayer</b>. The time frame (<em>demain</em>, <em>le soir</em>) does the rest. <em>Le matin / l'après-midi</em> are from week 5."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The futur proche is built from…",
          opts:["aller + infinitive","avoir + participle","être + participle","a new verb ending"], answer:0,
          ok:"Right — aller (present) + an infinitive: je vais partir.",
          no:"<b>Aller + infinitive</b> — no new conjugation, just the week-4 aller + a dictionary verb." },
        { prompt:"‘We're going to eat’ (on):",
          opts:["on va manger","on a mangé","on est manger","on mange va"], answer:0,
          ok:"Right — on va + manger.",
          no:"<b>On va manger</b> — on takes va, then the infinitive." },
        { prompt:"‘Je vais’ on its own (no infinitive) means…",
          opts:["I ate","I'm going (somewhere)","I'm coming","I went"], answer:1,
          ok:"Right — literal motion (je vais à Paris); add an infinitive and it turns future.",
          no:"<b>I'm going (somewhere)</b> — the week-4 sense; + infinitive makes it the future." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"‘Going to’, in both languages",
      body:[
        "It's a rare gift for the English speaker: French builds its everyday future exactly the way English does. ‘I'm <em>going to</em> call him’ = <em>Je <b>vais</b> l'appeler</em>. The same ‘go’ verb, borrowed to point at what's about to happen. The instinct transfers directly.",
        "There <em>is</em> a second, more formal French future (the <em>futur simple</em>, <em>je partirai</em>) — but in speech, for anything soon or planned, the <b>futur proche</b> is what people actually reach for. Learn this one first and well; it covers the vast majority of everyday future talk."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 64, done.",
      body:["You can point at the future. Tomorrow: the rest of the persons, and when exactly."],
      next:"Jour 65 — Nous allons, ils vont : quand ?"}
  ]
};

const LESSON_65 = {
  day: 65, week: 10,
  title: "Nous allons, ils vont : quand ?",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Everyone's future, and when",
      body:[
        "Yesterday used <em>je / tu / on</em>. Today the rest of <b>aller</b> — <em>nous allons</em>, <em>vous allez</em>, <em>ils vont</em> — plus the time words that pin the future down: <em>ce soir</em>, <em>ce week-end</em>, <em>la semaine prochaine</em>.",
        "And a three-way ear test: <em>vont</em>, <em>ont</em>, <em>sont</em> — three little words you now know, easy to mix."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"vont vs ont vs sont",
      body:["The plural aller, its liaison, and the trio to keep apart:"],
      pairs:[
        { fr:"nous allons partir", ipa:"/nu.z‿a.lɔ̃ paʁ.tiʁ/", en:"nous allons — the s of nous liaises as /z/", say:"nous allons partir", key:"d65_nousallonspartir" },
        { fr:"ils vont arriver", ipa:"/il vɔ̃.t‿a.ʁi.ve/", en:"ils vont — vont's t liaises onto arriver", say:"ils vont arriver", key:"d65_ilsvontarriver" },
        { fr:"vont / ont / sont", ipa:"/vɔ̃/ · /ɔ̃/ · /sɔ̃/", en:"aller / avoir / être — same nasal, different consonant", say:"ils vont, ils ont, ils sont", key:"d65_vontontsont" }
      ],
      tip:"Full aller: <b>je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont</b>. Then the trap you're now equipped for: <b>vont</b> /vɔ̃/ (aller → going to), <b>ont</b> /ɔ̃/ (avoir → have, week 8), <b>sont</b> /sɔ̃/ (être → are, week 9). <em>Ils vont manger</em> = they're going to eat; <em>ils ont mangé</em> = they ate; <em>ils sont partis</em> = they left."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The plural forms, and ‘when’",
      items:[
        { fr:"nous allons", en:"we are going (to)", reg:null, say:"nous allons partir", key:"d65_v_nousallons" },
        { fr:"vous allez", en:"you are going (to) — formal / plural", reg:"formal", say:"vous allez voir", key:"d65_v_vousallez" },
        { fr:"ils vont", en:"they are going (to)", reg:null, say:"ils vont arriver", key:"d65_v_ilsvont" },
        { fr:"ce soir", en:"this evening / tonight", reg:null, say:"ce soir", key:"d65_v_cesoir" },
        { fr:"ce week-end", en:"this weekend", reg:null, say:"ce week-end", key:"d65_v_ceweekend" },
        { fr:"la semaine prochaine", en:"next week", reg:null, say:"la semaine prochaine", key:"d65_v_semaineprochaine" },
        { fr:"le mois prochain", en:"next month", reg:null, say:"le mois prochain", key:"d65_v_moisprochain" },
        { fr:"tout à l'heure", en:"later (today) / in a bit", reg:null, say:"tout à l'heure", key:"d65_v_toutalheure" }
      ],
      tip:"The future markers stack neatly by distance: <b>tout à l'heure</b> (in a bit) → <b>ce soir</b> → <b>demain</b> → <b>ce week-end</b> → <b>la semaine / le mois prochain</b>. <em>Prochain(e)</em> = ‘next’, the mirror of week 8's <em>dernier(e)</em> (‘last’): la semaine dernière (past) vs la semaine prochaine (future). And <em>tout à l'heure</em> is back from week 5's <em>à tout à l'heure !</em>"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"When's everyone free?",
      body:["Sorting out the week ahead — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Les autres vont venir ce soir ?", en:"Are the others going to come tonight?", say:"Les autres vont venir ce soir ?", key:"d65_d1" },
        { who:"B", fr:"Non, ce soir non. Mais on va tous se voir ce week-end.", en:"No, not tonight. But we're all going to see each other this weekend.", say:"Non, ce soir non. Mais on va tous se voir ce week-end.", key:"d65_d2" },
        { who:"A", fr:"Vous allez faire quoi ?", en:"What are you going to do?", say:"Vous allez faire quoi ?", key:"d65_d3" },
        { who:"B", fr:"On ne sait pas encore. On va décider tout à l'heure.", en:"We don't know yet. We're going to decide in a bit.", say:"On ne sait pas encore. On va décider tout à l'heure.", key:"d65_d4" }
      ],
      tip:"Plural futures at work: <b>vont venir</b>, <b>on va se voir</b>, <b>vous allez faire</b>, <b>on va décider</b>. Note <em>vous allez faire quoi ?</em> — the casual question-word-last style from week 4. <em>On ne sait pas encore</em> = we don't know yet."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘They're going to arrive’:",
          opts:["ils ont arriver","ils vont arriver","ils sont arriver","ils vont arrivé"], answer:1,
          ok:"Right — ils vont + the infinitive arriver.",
          no:"<b>Ils vont arriver</b> — vont (aller) + infinitive; not ont/sont, not a participle." },
        { prompt:"‘Ils vont’ /vɔ̃/ is the verb…",
          opts:["avoir","être","aller","faire"], answer:2,
          ok:"Right — aller. (ont = avoir, sont = être.)",
          no:"<b>Aller</b> — vont /vɔ̃/. Don't confuse with ont /ɔ̃/ or sont /sɔ̃/." },
        { prompt:"‘Next week’:",
          opts:["la semaine dernière","la semaine prochaine","cette semaine","tout à l'heure"], answer:1,
          ok:"Right — prochaine = next (dernière = last).",
          no:"<b>La semaine prochaine</b> — prochaine is ‘next’; dernière is ‘last’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"‘On va voir’ — the useful non-commitment",
      body:[
        "One phrase earns its keep constantly: <b>« On va voir »</b> — literally ‘we're going to see’, meaning ‘we'll see / let's see how it goes’. It's the gentle French way to leave something open without refusing it, and you'll hear it answer everything from dinner plans to big life questions.",
        "It pairs with <em>on ne sait pas encore</em> (we don't know yet) and <em>on va décider tout à l'heure</em> (we'll decide later) — a small kit for holding a plan loosely, which suits a culture that doesn't love being pinned down too far ahead for casual things."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 65, done.",
      body:["The whole near future is yours. Tomorrow: what you're NOT going to do."],
      next:"Jour 66 — Je ne vais pas : la négation au futur"}
  ]
};

const LESSON_66 = {
  day: 66, week: 10,
  title: "Je ne vais pas : la négation au futur",
  durationMin: 17,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Not going to",
      body:[
        "The negative near future — and it's the frame you already know twice over. <b>Ne… pas</b> wraps the conjugated <em>aller</em>, and the infinitive follows: <b>je ne vais pas sortir</b>.",
        "Same shape as week 8's <em>je n'ai pas mangé</em> and week 9's <em>je ne suis pas allé</em> — just around <em>vais</em> this time."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Wrapping vais",
      body:["The negation clamps the short helper, and loosens in speech:"],
      pairs:[
        { fr:"je ne vais pas", ipa:"/ʒə nə vɛ pa/", en:"pas right after vais; pas ends in a silent s", say:"je ne vais pas", key:"d66_jenevaispas" },
        { fr:"je ne vais pas sortir", ipa:"/ʒə nə vɛ pa sɔʁ.tiʁ/", en:"the infinitive sits after pas", say:"je ne vais pas sortir", key:"d66_jenevaispassortir" },
        { fr:"je vais pas sortir", ipa:"/ʒə vɛ pa sɔʁ.tiʁ/", en:"casual speech: the ne drops", say:"je vais pas sortir", key:"d66_jevaispassortir" }
      ],
      tip:"The frame, for the third week running: <b>ne + [conjugated aller] + pas + [infinitive]</b> — <em>je ne vais pas sortir</em>. The <em>pas</em> comes before the infinitive; casual speech drops the <em>ne</em> (<em>je vais pas sortir</em>). Nothing new — you've done this around <em>ai</em> (wk8) and <em>suis</em> (wk9)."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Saying no to the future",
      items:[
        { fr:"je ne vais pas…", en:"I'm not going to…", reg:null, say:"je ne vais pas sortir", key:"d66_v_jenevaispas" },
        { fr:"tu ne vas pas…", en:"you're not going to… (informal)", reg:"informal", say:"tu ne vas pas venir", key:"d66_v_tunevaspas" },
        { fr:"on ne va pas…", en:"we're not going to…", reg:null, say:"on ne va pas rester", key:"d66_v_onnevapas" },
        { fr:"Je ne vais rien faire.", en:"I'm not going to do anything.", reg:null, say:"Je ne vais rien faire.", key:"d66_v_jenevairienfaire" },
        { fr:"plus tard", en:"later", reg:null, say:"plus tard", key:"d66_v_plustard" },
        { fr:"peut-être", en:"maybe", reg:null, say:"peut-être", key:"d66_v_peutetre" },
        { fr:"rester à la maison", en:"to stay home", reg:null, say:"rester à la maison", key:"d66_v_resteralamaison" },
        { fr:"être fatigué(e)", en:"to be tired", reg:null, say:"être fatigué", key:"d66_v_etrefatigue" }
      ],
      tip:"<b>Rien</b> (nothing) slots in for <em>pas</em>, just like the past weeks: <em>je ne vais <u>rien</u> faire</em>. Useful softeners for turning something down: <b>plus tard</b> (later), <b>peut-être</b> (maybe) — you rarely give a flat ‘no’ (more on that on day 69)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A quiet night in",
      body:["Turning down a night out — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu vas venir à la soirée ce soir ?", en:"Are you going to come to the party tonight?", say:"Tu vas venir à la soirée ce soir ?", key:"d66_d1" },
        { who:"B", fr:"Non, je ne vais pas sortir. Je suis trop fatigué.", en:"No, I'm not going to go out. I'm too tired.", say:"Non, je ne vais pas sortir. Je suis trop fatigué.", key:"d66_d2" },
        { who:"A", fr:"Ah, tu ne vas rien faire, alors ?", en:"Ah, you're not going to do anything, then?", say:"Ah, tu ne vas rien faire, alors ?", key:"d66_d3" },
        { who:"B", fr:"Non, je vais rester à la maison. Peut-être demain !", en:"No, I'm going to stay home. Maybe tomorrow!", say:"Non, je vais rester à la maison. Peut-être demain !", key:"d66_d4" }
      ],
      tip:"The negative frame twice: <em>je ne vais pas sortir</em>, <em>tu ne vas rien faire</em> — then the positive <em>je vais rester</em>. Note the soft close: <b>peut-être demain !</b> keeps the door open rather than ending on a hard no. <em>Trop fatigué</em> reuses week 6's <em>trop</em>."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I'm not going to go out’:",
          opts:["je vais ne pas sortir","je ne vais pas sortir","je ne sortir pas vais","je n'ai pas sortir"], answer:1,
          ok:"Right — ne + vais + pas + sortir.",
          no:"<b>Je ne vais pas sortir</b> — pas wraps vais, the infinitive after." },
        { prompt:"‘I'm not going to do anything’:",
          opts:["je ne vais pas rien faire","je ne vais rien faire","je vais rien pas faire","je ne rien vais faire"], answer:1,
          ok:"Right — rien takes pas's place: je ne vais rien faire.",
          no:"<b>Je ne vais rien faire</b> — rien replaces pas; not both." },
        { prompt:"The negation frame here is…",
          opts:["brand new","the same as wk8/9, around aller","only for spoken French","after the infinitive"], answer:1,
          ok:"Right — same ne + helper + pas + verb, now around aller.",
          no:"<b>The same frame</b> as the passé composé — just wrapping vais/vas/va." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The soft no",
      body:[
        "Notice how speaker B never lands a bare <em>non</em>: it's <em>non, je ne vais pas sortir… peut-être demain !</em> — the refusal cushioned with a reason and an open door. Flatly declining with nothing added can read as curt in French social life.",
        "The little softeners do the work: a reason (<em>je suis fatigué</em>), a <em>peut-être</em>, a <em>plus tard</em>, an <em>une autre fois</em>. Day 69 makes this an art; for now, just notice you rarely stop at ‘no’."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 66, done.",
      body:["You can accept and decline the future. Tomorrow: suggesting things — and the tune that turns a statement into a question."],
      next:"Jour 67 — On y va ? Proposer avec l'intonation"}
  ]
};

const LESSON_67 = {
  day: 67, week: 10,
  title: "On y va ? Proposer avec l'intonation",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Suggesting, with a rising voice",
      body:[
        "The easiest way to make a plan: <b>on</b> + a rising voice. <em>On va au cinéma ?</em> — ‘shall we go to the cinema?’ Same words as a statement, just lifted at the end into a question.",
        "This is French's most casual question: no <em>est-ce que</em>, no inversion — the <b>intonation</b> does all the work."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The rise that makes a question",
      body:["The same words, two melodies — the pitch at the end is the whole difference:"],
      pairs:[
        { fr:"On va au ciné ?", ipa:"/ɔ̃ va o si.ne/ ↗", en:"pitch RISES at the end → a question", say:"On va au ciné ?", key:"d67_onvaaucine" },
        { fr:"On va au ciné.", ipa:"/ɔ̃ va o si.ne/ ↘", en:"pitch FALLS → a statement, same words", say:"On va au ciné.", key:"d67_onvaaucinestatement" },
        { fr:"Ça te dit ?", ipa:"/sa tə di/ ↗", en:"‘fancy it?’ — a short rise on the last syllable", say:"Ça te dit ?", key:"d67_catedit" }
      ],
      tip:"A yes/no question in casual French can be marked by <b>intonation alone</b> — the voice rises at the end (<em>On va au ciné ?</em> ↗) where a statement would fall (<em>On va au ciné.</em> ↘). You've done this since <em>Ça va ?</em> in week 1; now use it to <em>propose</em> things. No extra words needed."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Making a suggestion",
      items:[
        { fr:"On va au cinéma ?", en:"Shall we go to the cinema?", reg:null, say:"On va au cinéma ?", key:"d67_v_onvaaucinema" },
        { fr:"On sort ce soir ?", en:"Shall we go out tonight?", reg:"informal", say:"On sort ce soir ?", key:"d67_v_onsortcesoir" },
        { fr:"On mange ensemble ?", en:"Shall we eat together?", reg:null, say:"On mange ensemble ?", key:"d67_v_onmangeensemble" },
        { fr:"Ça te dit ?", en:"Do you fancy it? (informal)", reg:"informal", say:"Ça te dit ?", key:"d67_v_catedit" },
        { fr:"Tu es libre ?", en:"Are you free? (informal)", reg:"informal", say:"Tu es libre ?", key:"d67_v_tueslibre" },
        { fr:"le ciné", en:"the cinema (casual for cinéma)", reg:"informal", say:"le ciné", key:"d67_v_cine" },
        { fr:"ensemble", en:"together", reg:null, say:"ensemble", key:"d67_v_ensemble" },
        { fr:"une idée", en:"an idea", reg:null, say:"une idée", key:"d67_v_uneidee" }
      ],
      tip:"<b>On</b> + a verb + a rising tone = a suggestion: <em>On va… ? On sort… ? On mange… ?</em> — no ‘shall we’ word exists; the <em>on</em> and the rise carry it. <b>Ça te dit ?</b> (‘does it tell you?’ → ‘fancy it?’) and <b>Tu es libre ?</b> (are you free?) are the two openers that set up any invitation."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A spur-of-the-moment plan",
      body:["Making a plan on the fly — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu es libre ce soir ? On va au ciné ?", en:"Are you free tonight? Shall we go to the cinema?", say:"Tu es libre ce soir ? On va au ciné ?", key:"d67_d1" },
        { who:"B", fr:"Ça te dit quoi, comme film ?", en:"What do you fancy, film-wise?", say:"Ça te dit quoi, comme film ?", key:"d67_d2" },
        { who:"A", fr:"Il y a le nouveau film de Dupieux. On y va ?", en:"There's the new Dupieux film. Shall we go?", say:"Il y a le nouveau film de Dupieux. On y va ?", key:"d67_d3" },
        { who:"B", fr:"Bonne idée ! On se retrouve à huit heures ?", en:"Good idea! Shall we meet at eight?", say:"Bonne idée ! On se retrouve à huit heures ?", key:"d67_d4" }
      ],
      tip:"Every line is a rising-tone question with no question-word machinery: <em>Tu es libre ? On va au ciné ? On y va ? On se retrouve à huit heures ?</em> <b>On y va</b> is your week-4/9 friend (‘shall we go / let's go’); <b>on se retrouve</b> (shall we meet) is from week 5. Suggestions all the way down."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"In casual French, ‘On va au ciné ?’ is a question because of…",
          opts:["the word est-ce que","inversion","the rising intonation","the word on"], answer:2,
          ok:"Right — the rise at the end alone marks it as a question.",
          no:"<b>The rising intonation</b> — same words as a statement, lifted at the end." },
        { prompt:"‘Ça te dit ?’ means…",
          opts:["what did you say?","do you fancy it?","what time?","are you sure?"], answer:1,
          ok:"Right — ‘fancy it? / up for it?’, a standard invitation opener.",
          no:"<b>Do you fancy it?</b> — the go-to way to float a plan." },
        { prompt:"‘On’ used to suggest a plan means…",
          opts:["one/people","shall we / we","he/she","you"], answer:1,
          ok:"Right — the everyday ‘we’, here proposing (‘shall we…?’).",
          no:"<b>Shall we / we</b> — on carries the suggestion, as it's carried ‘we’ since week 2." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"« Ça te dit ? » and the low-key invite",
      body:[
        "French plans often start small and unforced: <b>« Ça te dit un café ? »</b>, <b>« On se fait un ciné ? »</b> — a light float rather than a formal invitation. The rising tone keeps it casual and easy to decline, which is part of the politeness: you're offering, not pressing.",
        "Register matters, though. With someone you <em>vous</em>, the same instinct becomes <em>« Ça vous dit… ? »</em> or <em>« Vous êtes libre… ? »</em>. The move is identical — a gentle rising question — just re-dressed for the person you're speaking to."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 67, done.",
      body:["You can suggest a plan. Tomorrow: the thing every plan depends on — the weather."],
      next:"Jour 68 — Le temps : il fait beau, il va pleuvoir"}
  ]
};

const LESSON_68 = {
  day: 68, week: 10,
  title: "Le temps : il fait beau, il va pleuvoir",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Talking about the weather",
      body:[
        "Every plan runs on it. French describes the weather two ways: <b>il fait</b> + an adjective (<em>il fait beau</em>, ‘it's nice’), and a few impersonal verbs (<em>il pleut</em>, ‘it's raining’).",
        "And the future you just learned works on the sky too: <b>il va pleuvoir</b>, <b>il va faire beau</b>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"fait, froid, pleuvoir",
      body:["The core weather sounds:"],
      pairs:[
        { fr:"il fait beau", ipa:"/il fɛ bo/", en:"il fait /fɛ/ (faire, week 5) + beau /bo/", say:"il fait beau", key:"d68_ilfaitbeau" },
        { fr:"il fait froid", ipa:"/il fɛ fʁwa/", en:"froid — the oi = /wa/, as in trois", say:"il fait froid", key:"d68_ilfaitfroid" },
        { fr:"il va pleuvoir", ipa:"/il va plø.vwaʁ/", en:"the futur proche of pleuvoir; /plø/ then /vwaʁ/", say:"il va pleuvoir", key:"d68_ilvapleuvoir" }
      ],
      tip:"<b>Il fait</b> /il fɛ/ reuses <em>faire</em> from week 5 — here it's impersonal (‘it’ makes no real ‘it’, like English ‘it's raining’). <em>Froid</em> carries the /wa/ of <em>trois</em>, <em>moi</em>. And <em>pleuvoir</em> (to rain) slots straight into the futur proche: <b>il va pleuvoir</b>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The weather",
      items:[
        { fr:"il fait beau", en:"it's nice / fine", reg:null, say:"il fait beau", key:"d68_v_ilfaitbeau" },
        { fr:"il fait chaud", en:"it's hot", reg:null, say:"il fait chaud", key:"d68_v_ilfaitchaud" },
        { fr:"il fait froid", en:"it's cold", reg:null, say:"il fait froid", key:"d68_v_ilfaitfroid" },
        { fr:"il fait mauvais", en:"the weather's bad", reg:null, say:"il fait mauvais", key:"d68_v_ilfaitmauvais" },
        { fr:"il pleut", en:"it's raining", reg:null, say:"il pleut", key:"d68_v_ilpleut" },
        { fr:"il va pleuvoir", en:"it's going to rain", reg:null, say:"il va pleuvoir", key:"d68_v_ilvapleuvoir" },
        { fr:"le temps", en:"the weather (also: time)", reg:null, say:"le temps", key:"d68_v_letemps" },
        { fr:"Quel temps fait-il ?", en:"What's the weather like?", reg:null, say:"Quel temps fait-il ?", key:"d68_v_queltempsfaitil" }
      ],
      tip:"Two patterns: <b>il fait + adjective</b> (beau, chaud, froid, mauvais) and <b>impersonal verbs</b> (il pleut, il neige = it's snowing). Both go future with <em>aller</em>: <b>il va faire beau</b>, <b>il va pleuvoir</b>. Note <b>le temps</b> means <em>both</em> ‘weather’ and ‘time’ — context decides (recall <em>il pleut</em>'s past, <em>il a plu</em>, from week 9)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Will it hold for the weekend?",
      body:["Checking the forecast before a plan — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Il fait beau aujourd'hui ! On va au parc ?", en:"It's nice today! Shall we go to the park?", say:"Il fait beau aujourd'hui ! On va au parc ?", key:"d68_d1" },
        { who:"B", fr:"Oui ! Mais demain, il va pleuvoir, je crois.", en:"Yes! But tomorrow, it's going to rain, I think.", say:"Oui ! Mais demain, il va pleuvoir, je crois.", key:"d68_d2" },
        { who:"A", fr:"Alors on profite aujourd'hui. Il fait chaud, en plus !", en:"Then let's make the most of today. It's hot, on top of that!", say:"Alors on profite aujourd'hui. Il fait chaud, en plus !", key:"d68_d3" },
        { who:"B", fr:"D'accord, on y va tout de suite.", en:"OK, let's go right now.", say:"D'accord, on y va tout de suite.", key:"d68_d4" }
      ],
      tip:"Weather driving the plan: <em>il fait beau → on va au parc</em>, <em>il va pleuvoir demain</em>. <b>On profite</b> (from <em>profiter</em>, to make the most of) is a very French verb for enjoying good weather; <b>en plus</b> = ‘what's more / on top of that’; <b>tout de suite</b> = right away."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘It's cold’:",
          opts:["il est froid","il fait froid","il a froid","c'est froid"], answer:1,
          ok:"Right — weather uses il fait + adjective: il fait froid.",
          no:"<b>Il fait froid</b> — weather is ‘il fait + adj’, not il est. (‘il a froid’ = HE is cold.)" },
        { prompt:"‘It's going to rain’:",
          opts:["il pleut","il a plu","il va pleuvoir","il fait pleuvoir"], answer:2,
          ok:"Right — futur proche of pleuvoir: il va pleuvoir.",
          no:"<b>Il va pleuvoir</b> — aller + the infinitive pleuvoir." },
        { prompt:"‘Le temps’ can mean…",
          opts:["only weather","only time","weather or time","neither"], answer:2,
          ok:"Right — both; context decides.",
          no:"<b>Weather or time</b> — same word for both in French." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Weather as social glue",
      body:[
        "As in Britain, the weather is a safe, universal opener in France — <em>« Il fait beau, hein ? »</em> to a neighbour, a shopkeeper, anyone. It fills a pause without prying, and it's genuinely used, not just a cliché.",
        "It also has real bite on plans: a run of <em>beau temps</em> empties Paris onto café terraces and into parks, and the first warm day of spring is practically an event. Being able to say <em>il va faire beau ce week-end</em> is a small but real piece of joining in."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 68, done.",
      body:["You can talk weather, now and ahead. Tomorrow: saying yes — and saying no nicely."],
      next:"Jour 69 — Oui avec plaisir, non désolé : inviter et répondre"}
  ]
};

const LESSON_69 = {
  day: 69, week: 10,
  title: "Oui avec plaisir, non désolé : inviter et répondre",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Accepting, and turning down gently",
      body:[
        "The social heart of the week: how to say yes warmly, and no without a sting. Accepting is easy — <b>Je veux bien !</b>, <b>Avec plaisir !</b> Declining takes a little more care: a reason, a regret, and a door left open.",
        "In French, <em>how</em> you refuse matters as much as the refusal."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"veux, peux — the /ø/ of yes and no",
      body:["The two verbs behind accepting and declining share a vowel:"],
      pairs:[
        { fr:"je veux bien", ipa:"/ʒə vø bjɛ̃/", en:"veux /vø/ (vouloir) + bien /bjɛ̃/ — ‘gladly’", say:"je veux bien", key:"d69_jeveuxbien" },
        { fr:"je ne peux pas", ipa:"/ʒə nə pø pa/", en:"peux /pø/ (pouvoir) — the same /ø/ vowel", say:"je ne peux pas", key:"d69_jenepeuxpas" },
        { fr:"avec plaisir", ipa:"/a.vɛk plɛ.ziʁ/", en:"plaisir — /plɛ.ziʁ/, the warm ‘yes’", say:"avec plaisir", key:"d69_avecplaisir" }
      ],
      tip:"<b>Veux</b> (I want, vouloir) and <b>peux</b> (I can, pouvoir) both carry the rounded <b>/ø/</b> of week 5's <em>deux</em>, <em>un peu</em> — lips forward and round. <em>Je veux bien</em> = ‘I'd like to / gladly’ (not ‘I want well’!), and <em>je ne peux pas</em> = ‘I can't’. Learn them as the fixed yes/no chunks; their full conjugations come later."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Yes, and a soft no",
      items:[
        { fr:"Ça te dit de venir ?", en:"Do you fancy coming? (informal)", reg:"informal", say:"Ça te dit de venir ?", key:"d69_v_catedidevenir" },
        { fr:"Je veux bien !", en:"I'd love to! / Gladly!", reg:null, say:"Je veux bien !", key:"d69_v_jeveuxbien" },
        { fr:"Avec plaisir !", en:"With pleasure!", reg:null, say:"Avec plaisir !", key:"d69_v_avecplaisir" },
        { fr:"Volontiers !", en:"Gladly! / Willingly!", reg:null, say:"Volontiers !", key:"d69_v_volontiers" },
        { fr:"Désolé(e), je ne peux pas.", en:"Sorry, I can't.", reg:null, say:"Désolé, je ne peux pas.", key:"d69_v_desolejenepeuxpas" },
        { fr:"Une autre fois ?", en:"Another time?", reg:null, say:"Une autre fois ?", key:"d69_v_uneautrefois" },
        { fr:"Je suis pris(e).", en:"I'm busy / already taken.", reg:null, say:"Je suis pris.", key:"d69_v_jesuispris" },
        { fr:"C'est gentil.", en:"That's kind (of you).", reg:null, say:"C'est gentil.", key:"d69_v_cestgentil" }
      ],
      tip:"Accept warmly: <b>Je veux bien</b>, <b>Avec plaisir</b>, <b>Volontiers</b>, <b>Bonne idée</b> (day 67). Decline in three soft moves: a thanks/regret (<b>C'est gentil, mais…</b> / <b>Désolé…</b>), a reason (<b>je ne peux pas</b>, <b>je suis pris</b>), and an open door (<b>une autre fois ?</b>). A bare <em>non</em> alone is rarely enough."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"One yes, one gentle no",
      body:["The same invitation, two answers — <b>tu</b>."],
      turns:[
        { who:"A", fr:"On fait une soirée samedi. Ça te dit de venir ?", en:"We're having a get-together Saturday. Do you fancy coming?", say:"On fait une soirée samedi. Ça te dit de venir ?", key:"d69_d1" },
        { who:"B", fr:"Avec plaisir ! Je vais apporter un dessert.", en:"With pleasure! I'll bring a dessert.", say:"Avec plaisir ! Je vais apporter un dessert.", key:"d69_d2" },
        { who:"A", fr:"Super. Et toi, Marc, tu viens ?", en:"Great. And you, Marc, are you coming?", say:"Super. Et toi, Marc, tu viens ?", key:"d69_d3" },
        { who:"C", fr:"C'est gentil, mais je ne peux pas, je suis pris samedi. Une autre fois !", en:"That's kind, but I can't, I'm busy Saturday. Another time!", say:"C'est gentil, mais je ne peux pas, je suis pris samedi. Une autre fois !", key:"d69_d4" }
      ],
      tip:"Two model answers. The yes: <b>Avec plaisir !</b> + a futur-proche offer (<em>je vais apporter</em>). The no, in the full soft form: <b>C'est gentil, mais</b> (cushion) + <b>je ne peux pas / je suis pris</b> (reason) + <b>une autre fois !</b> (open door). No bare refusal anywhere."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Je veux bien’ means…",
          opts:["I want good things","I'd love to / gladly","I want well","I can't"], answer:1,
          ok:"Right — a warm ‘yes, gladly’, not literal.",
          no:"<b>I'd love to / gladly</b> — a fixed acceptance, not word-for-word." },
        { prompt:"The gentlest way to decline is…",
          opts:["a plain ‘non’","‘non’ + walk away","a reason + regret + ‘une autre fois’","ignore the invite"], answer:2,
          ok:"Right — cushion, reason, open door; never a bare no.",
          no:"<b>Reason + regret + ‘another time’</b> — the soft-no formula." },
        { prompt:"‘Veux’ and ‘peux’ share which vowel sound?",
          opts:["/a/","/ø/ (as in deux)","/i/","/u/"], answer:1,
          ok:"Right — the rounded /ø/ from week 5's deux, un peu.",
          no:"<b>/ø/</b> — the rounded vowel of deux; veux /vø/, peux /pø/." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"How to say no and stay friends",
      body:[
        "A flat <em>« Non »</em> to an invitation can feel abrupt in France, even cold. The expected shape is softer: acknowledge the offer (<em>c'est gentil</em>), give a reason (<em>je suis pris</em>, <em>je ne peux pas</em>), and reopen the door (<em>une autre fois</em>). It signals ‘it's the timing, not you’.",
        "The same instinct runs the other way: a warm yes is warm — <em>avec plaisir</em>, <em>volontiers</em>, not a flat <em>oui</em>. French social language leans on these little upholstered phrases; using them is how you come across as friendly rather than blunt, whatever your grammar is doing."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 69, done.",
      body:["You can invite, accept and decline like a local. Tomorrow we tie the week — and the whole timeline — together."],
      next:"Jour 70 — Révision (week 10 review)"}
  ]
};

const LESSON_70 = {
  day: 70, week: 10,
  title: "Révision — la semaine 10",
  durationMin: 17,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — hier, aujourd'hui, demain",
      body:[
        "Retrieval day, and a milestone: with the near future built, you now hold the whole everyday timeline. One chained plan-making dialogue, six questions on the week's pressure points — including a three-tense contrast — then your due flashcards, now spanning ten weeks.",
        "The week's real theme: <b>hier</b> je suis allé (past), <b>aujourd'hui</b> je vais (present), <b>demain</b> je vais aller (near future). Past, present, future — all yours."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Sorting out the weekend",
      body:["Making a plan, weather and all — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Tu es libre ce week-end ? Il va faire beau, je crois.", en:"Are you free this weekend? It's going to be nice, I think.", say:"Tu es libre ce week-end ? Il va faire beau, je crois.", key:"d70_d1" },
        { who:"B", fr:"Oui ! Ça te dit un pique-nique au parc ?", en:"Yes! Do you fancy a picnic in the park?", say:"Oui ! Ça te dit un pique-nique au parc ?", key:"d70_d2" },
        { who:"A", fr:"Avec plaisir ! On va inviter les autres ?", en:"With pleasure! Shall we invite the others?", say:"Avec plaisir ! On va inviter les autres ?", key:"d70_d3" },
        { who:"B", fr:"Bonne idée. Marc ne va pas venir — il est pris — mais Léa, oui.", en:"Good idea. Marc isn't going to come — he's busy — but Léa, yes.", say:"Bonne idée. Marc ne va pas venir — il est pris — mais Léa, oui.", key:"d70_d4" },
        { who:"A", fr:"Parfait. On se retrouve où, samedi ?", en:"Perfect. Where shall we meet, Saturday?", say:"Parfait. On se retrouve où, samedi ?", key:"d70_d5" },
        { who:"B", fr:"Devant la gare, à midi. Et s'il pleut, on va au resto !", en:"In front of the station, at noon. And if it rains, we'll go to the restaurant!", say:"Devant la gare, à midi. Et s'il pleut, on va au resto !", key:"d70_d6" }
      ],
      tip:"Everything fires: futur proche (<em>il va faire beau</em>, <em>on va inviter</em>, <em>Marc ne va pas venir</em>), suggestions by intonation (<em>Ça te dit… ? On va… ?</em>), accepting (<em>avec plaisir</em>), weather (<em>il va faire beau</em>, <em>s'il pleut</em>), and a soft no about Marc (<em>il est pris</em>). <em>Devant la gare</em> is week 7's preposition + place."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Semaine 10 — the six that matter",
      questions:[
        { prompt:"The futur proche =",
          opts:["avoir + participle","aller + infinitive","être + participle","a new verb ending"], answer:1,
          ok:"Right — aller + infinitive: je vais partir.",
          no:"<b>Aller + infinitive</b> — the week-4 aller + a dictionary verb." },
        { prompt:"‘We're going to eat’:",
          opts:["on a mangé","on va manger","on mange va","on est mangé"], answer:1,
          ok:"Right — on va + manger.",
          no:"<b>On va manger</b> — on va + the infinitive." },
        { prompt:"Three tenses: hier je ___ allé, aujourd'hui je ___, demain je ___ aller.",
          opts:["vais / suis / suis","suis / vais / vais","ai / vais / suis","suis / suis / vais"], answer:1,
          ok:"Right — suis (past, être) / vais (present) / vais (futur proche): je suis allé, je vais, je vais aller.",
          no:"<b>suis / vais / vais</b> — je suis allé (past), je vais (present), je vais aller (near future)." },
        { prompt:"‘It's going to rain’:",
          opts:["il pleut","il va pleuvoir","il a plu","il fait pleuvoir"], answer:1,
          ok:"Right — il va pleuvoir, futur proche of pleuvoir.",
          no:"<b>Il va pleuvoir</b> — aller + pleuvoir." },
        { prompt:"‘I'm not going to go out’:",
          opts:["je ne vais pas sortir","je ne sors pas aller","je vais ne pas sortir","je n'ai pas sortir"], answer:0,
          ok:"Right — ne + vais + pas + sortir.",
          no:"<b>Je ne vais pas sortir</b> — pas wraps vais, infinitive after." },
        { prompt:"The gentle way to decline an invitation:",
          opts:["a bare ‘non’","reason + regret + ‘une autre fois’","say nothing","‘non’ twice"], answer:1,
          ok:"Right — cushion, reason, open door.",
          no:"<b>Reason + regret + ‘another time’</b> — never a flat non." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Ten weeks of vocabulary now feed this queue — through the café, the streets, shopping, home, and all three tenses. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Ten weeks: the whole timeline",
      body:[
        "This is a real milestone. You can now speak across time: recount the past (<em>je suis allé, j'ai fait</em>), describe the present (<em>je vais, il fait beau</em>), and project the near future (<em>je vais partir, on va voir</em>). Add making plans, suggesting, inviting and declining, and you can hold a genuine social conversation about what was, what is, and what's coming.",
        "The honest boundary — and the last two weeks' work: your past has one gear so far (the passé composé, for completed events). Week 11 adds the <b>imparfait</b> — the ‘was ~ing / used to’ past for description and habit — plus comparing things and giving an opinion. Then week 12 pulls everything into one final review. The near future you built today is the last brand-new tense; from here it's depth, not new machinery."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 10 — complète.",
      body:["Seventy stations — five sixths of the line, and past, present and future all in hand. Next week: describing the past differently, comparing, and saying what you think."],
      next:"Semaine 11, Jour 71 — L'imparfait : c'était, il y avait"}
  ]
};

export const WEEK10 = [LESSON_64, LESSON_65, LESSON_66, LESSON_67, LESSON_68, LESSON_69, LESSON_70];
