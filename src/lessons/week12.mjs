/* Week 12 — Days 78–84. THE FINAL WEEK. "Putting it together." Consolidation
   only — NO new grammar. Each day 78–83 replays one scene/block of a day in
   Paris and recombines what's already built (greetings/café, directions/métro,
   the past tenses, opinion/comparison, the near future, register-switching);
   Day 84 is the capstone: the full chained "Une journée à Paris" dialogue, a
   final cumulative competency quiz standing in for the A2 self-assessment, the
   §6 can-do bilan as a culture step, the last SRS queue, and a completion wrap.

   Everything is expressed with EXISTING step types (§2 one-engine rule): the
   self-assessment is a recall + culture step, and the terminus wrap reuses the
   métro theme (the last station IS the terminus) so no renderer branch is
   needed. Day 84's wrap must read as completion — it does not tease a week 13. */

const LESSON_78 = {
  day: 78, week: 12,
  title: "Le matin : bonjour, un café",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The last week: a day in Paris",
      body:[
        "You've reached the final week. There's nothing new to learn — instead, you'll spend it living <b>une journée à Paris</b>, one scene at a time, using everything you've built across the last eleven weeks.",
        "It starts where every French day starts: <em>bonjour</em>, and a coffee. Greetings, the <em>tu/vous</em> reflex, ordering — weeks 1 to 3, back in your mouth."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : the morning sounds",
      body:["A recap of three sounds you've said since week 1 — no new tricks, just polish:"],
      pairs:[
        { fr:"bonjour", ipa:"/bɔ̃.ʒuʁ/", en:"the nasal ‘on’ from day 1, still the first word of every day", say:"bonjour", key:"d78_bonjour" },
        { fr:"je voudrais", ipa:"/ʒə vu.dʁɛ/", en:"the polite ‘I'd like’ from the week-3 café", say:"je voudrais", key:"d78_jevoudrais" },
        { fr:"l'addition", ipa:"/la.di.sjɔ̃/", en:"-tion = /sjɔ̃/, never English ‘shun’", say:"l'addition", key:"d78_laddition" }
      ],
      tip:"All review: the nasal <b>/ɔ̃/</b> of <em>bonjour</em> (day 1), the soft <b>je voudrais</b> that opens any order (week 3), and the <b>-tion → /sjɔ̃/</b> of <em>l'addition</em>. This week is about fluency in what you know, not new sounds."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : greeting and ordering",
      items:[
        { fr:"bonjour", en:"hello (the ritual opener)", reg:"formal", say:"bonjour", key:"d78_v_bonjour" },
        { fr:"salut", en:"hi (informal)", reg:"informal", say:"salut", key:"d78_v_salut" },
        { fr:"s'il vous plaît", en:"please (formal)", reg:"formal", say:"s'il vous plaît", key:"d78_v_svp" },
        { fr:"je voudrais", en:"I'd like", reg:null, say:"je voudrais un café", key:"d78_v_jevoudrais" },
        { fr:"un café", en:"a coffee", reg:null, say:"un café", key:"d78_v_uncafe" },
        { fr:"un croissant", en:"a croissant", reg:null, say:"un croissant", key:"d78_v_croissant" },
        { fr:"C'est combien ?", en:"How much is it?", reg:null, say:"C'est combien ?", key:"d78_v_cestcombien" },
        { fr:"merci, bonne journée", en:"thanks, have a good day", reg:null, say:"merci, bonne journée", key:"d78_v_merci" }
      ],
      tip:"The morning kit, all from weeks 1–3: greet (<b>bonjour</b> to the server, <b>salut</b> to a friend), order (<b>je voudrais…</b>), pay (<b>c'est combien ?</b>, <b>l'addition</b>), leave well (<b>merci, bonne journée</b>). The register split — <em>bonjour/vous</em> for the server, <em>salut/tu</em> for a friend — is the reflex you've trained all along."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 1 : au café",
      body:["Two friends start the day — <b>tu</b> with each other, <b>vous</b> with the server."],
      turns:[
        { who:"A", fr:"Salut ! Bien dormi ? On prend un café avant de commencer ?", en:"Hi! Sleep well? Shall we have a coffee before we start?", say:"Salut ! Bien dormi ? On prend un café avant de commencer ?", key:"d78_d1" },
        { who:"B", fr:"Avec plaisir. Bonjour madame, deux cafés, s'il vous plaît.", en:"With pleasure. Hello, two coffees, please.", say:"Avec plaisir. Bonjour madame, deux cafés, s'il vous plaît.", key:"d78_d2" },
        { who:"A", fr:"Et un croissant pour moi. C'est combien, en tout ?", en:"And a croissant for me. How much is it, all together?", say:"Et un croissant pour moi. C'est combien, en tout ?", key:"d78_d3" },
        { who:"B", fr:"Sept euros. Voilà. Merci, bonne journée !", en:"Seven euros. Here you go. Thanks, have a good day!", say:"Sept euros. Voilà. Merci, bonne journée !", key:"d78_d4" }
      ],
      tip:"Watch the register flip mid-scene: <b>salut / on prend / tu</b> between the friends, then a clean <b>bonjour madame / vous</b> to the server, and back. That switch, done without thinking, is a core A2 can-do — and it's second nature to you now."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"To the café server, you open with…",
          opts:["Salut !","Bonjour","Coucou","Hé !"], answer:1,
          ok:"Right — bonjour (+ vous) with someone you don't know.",
          no:"<b>Bonjour</b> — the formal opener for a stranger/server; salut is for friends." },
        { prompt:"‘I'd like a coffee’:",
          opts:["je veux un café","je voudrais un café","j'ai un café","je prends café"], answer:1,
          ok:"Right — je voudrais, the polite order from week 3.",
          no:"<b>Je voudrais un café</b> — softer and more polite than ‘je veux’." },
        { prompt:"‘C'est combien ?’ asks…",
          opts:["what time?","how much?","where?","which one?"], answer:1,
          ok:"Right — how much does it cost.",
          no:"<b>How much?</b> — the price question from the café/shopping weeks." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Where it all begins: bonjour",
      body:[
        "Twelve weeks on, it's worth naming the single most important thing you've learned, and it isn't a tense: it's <b>bonjour</b> first, every time. The greeting before the request, the <em>vous</em> for the stranger, the <em>merci, bonne journée</em> on the way out — this politeness architecture is what makes the grammar land as friendly rather than blunt.",
        "A tourist who conjugates perfectly but skips <em>bonjour</em> reads worse than one whose French is shaky but whose manners are right. You've trained both. Today's little café scene is the whole of weeks 1–3 working on autopilot — which is exactly the point of this final week."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 78, done.",
      body:["The day has started. Tomorrow: crossing the city to the museum."],
      next:"Jour 79 — Se déplacer : le métro, la direction"}
  ]
};

const LESSON_79 = {
  day: 79, week: 12,
  title: "Se déplacer : le métro, la direction",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Across the city",
      body:[
        "Coffee done, you need to get across Paris to the museum. Time to reuse week 4: asking the way, reading the métro, and the one verb that gets you everywhere — <b>aller</b>.",
        "Nothing new — just the directions, the <em>direction</em>, and the polite <em>pour aller à…</em> back in service."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : the getting-around sounds",
      body:["Three sounds straight from the week-4 street:"],
      pairs:[
        { fr:"tout droit", ipa:"/tu dʁwa/", en:"straight ahead — final t silent", say:"tout droit", key:"d79_toutdroit" },
        { fr:"à droite", ipa:"/a dʁwat/", en:"to the right — the -e wakes the t (vs droit)", say:"à droite", key:"d79_adroite" },
        { fr:"la direction", ipa:"/la di.ʁɛk.sjɔ̃/", en:"the -tion = /sjɔ̃/ again; here it names the terminus", say:"la direction", key:"d79_ladirection" }
      ],
      tip:"The week-4 trap, one more time: <b>droit</b> /dʁwa/ (straight) vs <b>droite</b> /dʁwat/ (right) — the feminine -e sounds the t. And <b>direction</b> in the métro doesn't mean left/right — it names the <em>end station</em> of the line, which tells you the platform."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : directions and the métro",
      items:[
        { fr:"Pardon, pour aller à… ?", en:"Excuse me, how do I get to…?", reg:null, say:"Pardon, pour aller au musée ?", key:"d79_v_pouraller" },
        { fr:"tout droit", en:"straight ahead", reg:null, say:"tout droit", key:"d79_v_toutdroit" },
        { fr:"à droite / à gauche", en:"right / left", reg:null, say:"à droite, à gauche", key:"d79_v_droitegauche" },
        { fr:"la station", en:"the (métro) station", reg:null, say:"la station", key:"d79_v_station" },
        { fr:"la ligne", en:"the line", reg:null, say:"la ligne", key:"d79_v_ligne" },
        { fr:"la direction", en:"the direction (terminus of the line)", reg:null, say:"la direction", key:"d79_v_direction" },
        { fr:"la correspondance", en:"the connection / transfer", reg:null, say:"la correspondance", key:"d79_v_correspondance" },
        { fr:"C'est loin ?", en:"Is it far?", reg:null, say:"C'est loin ?", key:"d79_v_cestloin" }
      ],
      tip:"The whole week-4 toolkit: open with <b>pardon, pour aller à… ?</b>, follow <b>tout droit / à droite / à gauche</b>, and underground pick your <b>ligne</b> + <b>direction</b>, change at a <b>correspondance</b>. <em>Aller</em> (je vais, on va) is doing the quiet work behind all of it."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 2 : dans le métro",
      body:["Getting to the museum — <b>vous</b> to a passer-by, then <b>tu</b> between friends."],
      turns:[
        { who:"A", fr:"Pardon monsieur, pour aller au Louvre, s'il vous plaît ?", en:"Excuse me sir, how do I get to the Louvre, please?", say:"Pardon monsieur, pour aller au Louvre, s'il vous plaît ?", key:"d79_d1" },
        { who:"B", fr:"Prenez la ligne 1, direction La Défense. C'est direct.", en:"Take line 1, direction La Défense. It's direct.", say:"Prenez la ligne 1, direction La Défense. C'est direct.", key:"d79_d2" },
        { who:"A", fr:"Merci beaucoup ! Bon, on y va, la station est juste là.", en:"Thank you very much! Right, let's go, the station's just there.", say:"Merci beaucoup ! Bon, on y va, la station est juste là.", key:"d79_d3" },
        { who:"B", fr:"Et c'est direct, en plus. Quatre stations et on est arrivés.", en:"And it's direct, what's more. Four stations and we're there.", say:"Et c'est direct, en plus. Quatre stations et on est arrivés.", key:"d79_d4" }
      ],
      tip:"Register switch again — <b>vous</b> to the stranger (<em>pardon monsieur… s'il vous plaît</em>), <b>tu/on</b> between friends (<em>on y va</em>). And <b>on est arrivés</b> sneaks in an être-past with agreement (week 9) — the past tense riding along inside a directions scene."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The politest way to ask the way to the Louvre:",
          opts:["Où Louvre ?","Pour aller au Louvre, s'il vous plaît ?","Louvre où ?","Je veux le Louvre"], answer:1,
          ok:"Right — the set phrase, capped with s'il vous plaît.",
          no:"<b>Pour aller au Louvre, s'il vous plaît ?</b> — the standard polite form." },
        { prompt:"In the métro, ‘direction’ tells you…",
          opts:["left or right","the terminus / which platform","the ticket price","the exit"], answer:1,
          ok:"Right — the end station, which fixes your platform.",
          no:"<b>The terminus</b> — it names the line's end station, so you pick the right platform." },
        { prompt:"‘On est arrivés’ uses which auxiliary?",
          opts:["avoir","être","both","none"], answer:1,
          ok:"Right — arriver is an être-verb (week 9), with agreement.",
          no:"<b>Être</b> — arriver takes être; note the -s agreement on arrivés." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Reading Paris like a local",
      body:[
        "The Paris you can now navigate is a real one: a keypad code at the door, a métro read by <em>direction</em> not compass, directions given by landmark and gesture, an <em>arrondissement</em> that doubles as social shorthand. None of it needs perfect grammar — it needs the handful of phrases you drilled in week 4, delivered with a <em>bonjour</em> and a <em>merci</em>.",
        "That's the quiet achievement of A2: not eloquence, but <em>independence</em>. You can land in the city and move through it under your own steam, in French — which is exactly what the next scene, the museum, assumes you've just done."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 79, done.",
      body:["You've reached the museum. Tomorrow: telling the story of what you saw."],
      next:"Jour 80 — Au musée : c'était magnifique"}
  ]
};

const LESSON_80 = {
  day: 80, week: 12,
  title: "Au musée : c'était magnifique",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Telling the story",
      body:[
        "You've seen the museum — now recount it. This is the heart of what A2 added: the two past tenses working together. The <b>passé composé</b> for what happened, the <b>imparfait</b> for how it all was.",
        "The photo and the film, from weeks 8, 9 and 11, telling one story."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : the two pasts, side by side",
      body:["The closed é of the passé composé against the open è of the imparfait:"],
      pairs:[
        { fr:"j'ai visité", ipa:"/ʒe vi.zi.te/", en:"passé composé — the event, ending in -é /e/", say:"j'ai visité", key:"d80_jaivisite" },
        { fr:"c'était magnifique", ipa:"/se.tɛ ma.ɲi.fik/", en:"imparfait — the description, -ait /ɛ/", say:"c'était magnifique", key:"d80_cetaitmagnifique" },
        { fr:"je suis allé", ipa:"/ʒə sɥi.z‿a.le/", en:"the être-past with its liaison (week 9)", say:"je suis allé", key:"d80_jesuisalle" }
      ],
      tip:"The whole past system in three phrases: <b>j'ai visité</b> (avoir + participle, an event), <b>je suis allé</b> (être + participle, a motion verb), <b>c'était</b> (imparfait, description). The é vs è gap — <em>visité</em> /e/ vs <em>c'était</em> /ɛ/ — quietly marks which past you're in."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : recounting the past",
      items:[
        { fr:"hier / aujourd'hui", en:"yesterday / today", reg:null, say:"hier, aujourd'hui", key:"d80_v_hier" },
        { fr:"j'ai visité", en:"I visited (passé composé, avoir)", reg:null, say:"j'ai visité le musée", key:"d80_v_jaivisite" },
        { fr:"je suis allé(e)", en:"I went (passé composé, être)", reg:null, say:"je suis allé", key:"d80_v_jesuisalle" },
        { fr:"c'était", en:"it was (imparfait — description)", reg:null, say:"c'était magnifique", key:"d80_v_cetait" },
        { fr:"il y avait", en:"there was / there were (imparfait)", reg:null, say:"il y avait du monde", key:"d80_v_ilyavait" },
        { fr:"j'ai vu", en:"I saw (irregular participle)", reg:null, say:"j'ai vu", key:"d80_v_jaivu" },
        { fr:"magnifique", en:"magnificent / gorgeous", reg:null, say:"magnifique", key:"d80_v_magnifique" },
        { fr:"d'abord, ensuite, enfin", en:"first, then, finally (sequencing)", reg:null, say:"d'abord, ensuite, enfin", key:"d80_v_sequence" }
      ],
      tip:"Recounting = passé composé for the events (<b>j'ai visité, j'ai vu, je suis allé</b>) + imparfait for the backdrop (<b>c'était, il y avait</b>), threaded with <b>d'abord / ensuite / enfin</b>. Choosing between the two pasts is the hardest A2 skill; you don't need it perfect — you need it <em>used</em>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 3 : après la visite",
      body:["Recounting the visit, just after — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Alors, cette expo ? Raconte !", en:"So, that exhibition? Tell me!", say:"Alors, cette expo ? Raconte !", key:"d80_d1" },
        { who:"B", fr:"D'abord, on est entrés, et il y avait déjà beaucoup de monde.", en:"First, we went in, and there were already lots of people.", say:"D'abord, on est entrés, et il y avait déjà beaucoup de monde.", key:"d80_d2" },
        { who:"A", fr:"Et les tableaux ?", en:"And the paintings?", say:"Et les tableaux ?", key:"d80_d3" },
        { who:"B", fr:"J'ai vu un Monet incroyable. C'était magnifique — les couleurs étaient vraiment belles.", en:"I saw an incredible Monet. It was magnificent — the colours were really beautiful.", say:"J'ai vu un Monet incroyable. C'était magnifique — les couleurs étaient vraiment belles.", key:"d80_d4" },
        { who:"A", fr:"Ensuite, tu es resté longtemps ?", en:"Then, did you stay long?", say:"Ensuite, tu es resté longtemps ?", key:"d80_d5" },
        { who:"B", fr:"Une heure. Enfin, on est sortis parce qu'on avait faim !", en:"An hour. Finally, we left because we were hungry!", say:"Une heure. Enfin, on est sortis parce qu'on avait faim !", key:"d80_d6" }
      ],
      tip:"See the two pasts share the story: events in passé composé (<b>on est entrés, j'ai vu, tu es resté, on est sortis</b>), backdrop in imparfait (<b>il y avait, c'était, les couleurs étaient, on avait faim</b>). The sequencing words (<em>d'abord, ensuite, enfin</em>) hold it in order. This is A2 storytelling at full stretch."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘There were lots of people’ (backdrop) →",
          opts:["il y a eu beaucoup de monde","il y avait beaucoup de monde","il y a beaucoup de monde","il aura du monde"], answer:1,
          ok:"Right — imparfait for the scene: il y avait.",
          no:"<b>Il y avait</b> — the imparfait paints the backdrop." },
        { prompt:"‘I saw a Monet’ (single event) →",
          opts:["je voyais un Monet","j'ai vu un Monet","je vois un Monet","je verrai un Monet"], answer:1,
          ok:"Right — passé composé for the completed event: j'ai vu.",
          no:"<b>J'ai vu un Monet</b> — a single event → passé composé." },
        { prompt:"‘On est sortis’ agrees because…",
          opts:["it uses avoir","être-verbs agree with the subject","sortir is irregular","it's plural anyway"], answer:1,
          ok:"Right — être + participle agrees; on = ‘we’ → -s.",
          no:"<b>Être-verbs agree</b> — sortir takes être, so the participle adds -s for ‘we’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The pleasure of the récit",
      body:[
        "The French love a good <em>récit</em> — a told story — and a museum, a meal, a weekend all become one when you get back. The two-past system you've just used is what makes it possible: without the imparfait, you can only list events; with it, you can set a scene, add atmosphere, explain why.",
        "Don't wait to feel sure about passé composé vs imparfait — even natives ‘feel’ rather than calculate it, and understanding survives a wrong choice. The way it becomes instinct is exactly this: telling little stories, out loud, again and again."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 80, done.",
      body:["The story's told. Tomorrow: sitting down at a café to say what you thought of it."],
      next:"Jour 81 — Au café : à mon avis"}
  ]
};

const LESSON_81 = {
  day: 81, week: 12,
  title: "Au café : à mon avis",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Saying what you thought",
      body:[
        "Café stop, and the conversation turns to opinions. Was the museum worth it? Better than last time? Time to reuse week 11: the opinion frames, the comparisons, and the art of a friendly disagreement.",
        "<em>À mon avis…</em>, <em>je trouve que…</em>, <em>c'est mieux que…</em> — the tools of a real Parisian café table."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : the opinion sounds",
      body:["Three phrases from the week-11 debate:"],
      pairs:[
        { fr:"à mon avis", ipa:"/a mɔ̃.n‿a.vi/", en:"mon liaises its n onto avis; final s silent", say:"à mon avis", key:"d81_amonavis" },
        { fr:"je trouve que", ipa:"/ʒə tʁuv kə/", en:"‘I find that…’ — opens an opinion clause", say:"je trouve que", key:"d81_jetrouveque" },
        { fr:"meilleur", ipa:"/mɛ.jœʁ/", en:"‘better’ — irregular, never ‘plus bon’", say:"meilleur", key:"d81_meilleur" }
      ],
      tip:"All week-11 review: <b>à mon avis</b> liaisons like <em>mon ami</em>; <b>je trouve que</b> / <b>je pense que</b> introduce a clause; <b>meilleur</b> is the irregular comparative of <em>bon</em>. Nothing new — just your opinions, in French."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : opinion and comparison",
      items:[
        { fr:"à mon avis", en:"in my opinion", reg:null, say:"à mon avis", key:"d81_v_amonavis" },
        { fr:"je trouve que", en:"I find / think that", reg:null, say:"je trouve que c'était bien", key:"d81_v_jetrouveque" },
        { fr:"plus… que", en:"more… than", reg:null, say:"plus intéressant que", key:"d81_v_plusque" },
        { fr:"moins… que", en:"less… than", reg:null, say:"moins cher que", key:"d81_v_moinsque" },
        { fr:"meilleur(e)", en:"better", reg:null, say:"meilleur", key:"d81_v_meilleur" },
        { fr:"c'est génial", en:"it's great", reg:null, say:"c'est génial", key:"d81_v_cestgenial" },
        { fr:"je suis d'accord", en:"I agree", reg:null, say:"je suis d'accord", key:"d81_v_daccord" },
        { fr:"je ne suis pas d'accord", en:"I disagree", reg:null, say:"je ne suis pas d'accord", key:"d81_v_pasdaccord" }
      ],
      tip:"Opinion = a frame + a clause (<b>à mon avis, c'était…</b> / <b>je trouve que…</b>); comparison = <b>plus/moins/aussi … que</b> (+ irregular <b>meilleur</b>). And keep the debate friendly: agree (<em>je suis d'accord, tu as raison</em>), or differ softly (<em>oui, mais…</em>) — never a blunt ‘tu as tort’."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 4 : la discussion",
      body:["Comparing the day's museum to another — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Franchement, à mon avis, c'était mieux que le musée de la semaine dernière.", en:"Honestly, in my opinion, it was better than last week's museum.", say:"Franchement, à mon avis, c'était mieux que le musée de la semaine dernière.", key:"d81_d1" },
        { who:"B", fr:"Ah bon ? Je ne suis pas tout à fait d'accord. Je trouve que l'autre était plus original.", en:"Really? I don't entirely agree. I think the other one was more original.", say:"Ah bon ? Je ne suis pas tout à fait d'accord. Je trouve que l'autre était plus original.", key:"d81_d2" },
        { who:"A", fr:"C'est vrai, mais celui-ci était moins cher et moins loin !", en:"That's true, but this one was cheaper and less far!", say:"C'est vrai, mais celui-ci était moins cher et moins loin !", key:"d81_d3" },
        { who:"B", fr:"Là, tu as raison. Bon, on est d'accord : c'était une bonne journée.", en:"There, you're right. OK, we agree: it was a good day.", say:"Là, tu as raison. Bon, on est d'accord : c'était une bonne journée.", key:"d81_d4" }
      ],
      tip:"A real café debate in four turns: an opinion (<em>à mon avis, c'était mieux</em>), a soft disagreement (<em>je ne suis pas tout à fait d'accord</em>), a concession (<em>c'est vrai, mais…</em>), and agreement to close (<em>là, tu as raison</em>). Sharp content, warm form — the week-11 skill in action."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Better than last week's’:",
          opts:["plus bon que","meilleur que","mieux bon que","plus meilleur que"], answer:1,
          ok:"Right — bon → meilleur (here ‘c'était mieux/meilleur que…’).",
          no:"<b>Meilleur que</b> — bon's comparative is irregular, never ‘plus bon’." },
        { prompt:"The friendly way to disagree is…",
          opts:["« Tu as tort »","« Je ne suis pas tout à fait d'accord, mais… »","saying nothing","« C'est nul »"], answer:1,
          ok:"Right — soften first, then differ.",
          no:"<b>« Je ne suis pas tout à fait d'accord, mais… »</b> — acknowledge, then differ gently." },
        { prompt:"‘In my opinion’:",
          opts:["à mon avis","je suis avis","pour avis","mon avis dit"], answer:0,
          ok:"Right — à mon avis + a clause.",
          no:"<b>À mon avis</b> — the standard opinion opener." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The café table, where France thinks out loud",
      body:[
        "The café conversation you just held is a genuine institution — the place where the French argue about films, food, politics and each other, for the pleasure of it. Holding a view, comparing, conceding a point, staying warm while you disagree: that's not decoration on the language, it's a big part of what the language is <em>for</em>.",
        "That you can now take part — clumsily, maybe, but really — is a milestone. A2 isn't about sounding native; it's about being in the room, following the thread, and putting your <em>avis</em> on the table. You're in the room."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 81, done.",
      body:["The day's been discussed. Tomorrow: making a plan for the next one."],
      next:"Jour 82 — Demain : on va faire quoi ?"}
  ]
};

const LESSON_82 = {
  day: 82, week: 12,
  title: "Demain : on va faire quoi ?",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Making the next plan",
      body:[
        "Before you part, you make a plan for tomorrow. Week 10 comes back: the <b>futur proche</b> (<em>on va…</em>), suggesting with a rising voice, the weather, and inviting — with a gentle refusal if needed.",
        "The last corner of the timeline: past told, present lived, and now the near future."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : the future sounds",
      body:["Three from the week-10 plan-making:"],
      pairs:[
        { fr:"je vais", ipa:"/ʒə vɛ/", en:"the aller you own — rhymes with mais", say:"je vais", key:"d82_jevais" },
        { fr:"on y va", ipa:"/ɔ̃.ni.va/", en:"‘let's go’ — on‿y, the n links to y", say:"on y va", key:"d82_onyva" },
        { fr:"ça te dit ?", ipa:"/sa tə di/", en:"‘fancy it?’ — a rising tone makes it a question", say:"ça te dit ?", key:"d82_catedit" }
      ],
      tip:"Review: <b>je vais</b> + an infinitive = the near future; <b>on y va</b> is your all-purpose ‘let's go’; and a plain statement becomes a suggestion just by <b>lifting the pitch</b> at the end — <em>on va au parc ?</em> ↗. No new machinery, all week 10."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : plans and the near future",
      items:[
        { fr:"demain", en:"tomorrow", reg:null, say:"demain", key:"d82_v_demain" },
        { fr:"je vais + infinitif", en:"I'm going to… (futur proche)", reg:null, say:"je vais rester", key:"d82_v_jevaisinf" },
        { fr:"on va… ?", en:"shall we…? (suggestion)", reg:null, say:"on va au parc ?", key:"d82_v_onva" },
        { fr:"ça te dit ?", en:"do you fancy it? (informal)", reg:"informal", say:"ça te dit ?", key:"d82_v_catedit" },
        { fr:"je veux bien", en:"I'd love to / gladly", reg:null, say:"je veux bien", key:"d82_v_jeveuxbien" },
        { fr:"il va faire beau", en:"it's going to be nice (weather)", reg:null, say:"il va faire beau", key:"d82_v_ilvafairebeau" },
        { fr:"la semaine prochaine", en:"next week", reg:null, say:"la semaine prochaine", key:"d82_v_semaineprochaine" },
        { fr:"désolé, je ne peux pas", en:"sorry, I can't", reg:null, say:"désolé, je ne peux pas", key:"d82_v_desole" }
      ],
      tip:"Plan-making, all week 10: propose with <b>on va… ?</b> or <b>ça te dit… ?</b> (rising tone), accept with <b>je veux bien / avec plaisir</b>, decline softly with <b>désolé, je ne peux pas… une autre fois</b>. The weather steers it — <b>il va faire beau</b> → the park; if not, the café."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 5 : les projets",
      body:["Planning tomorrow before saying goodbye — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Bon, et demain, qu'est-ce qu'on va faire ?", en:"Right, and tomorrow, what are we going to do?", say:"Bon, et demain, qu'est-ce qu'on va faire ?", key:"d82_d1" },
        { who:"B", fr:"Il va faire beau, paraît-il. Ça te dit un pique-nique au parc ?", en:"It's going to be nice, apparently. Do you fancy a picnic in the park?", say:"Il va faire beau, paraît-il. Ça te dit un pique-nique au parc ?", key:"d82_d2" },
        { who:"A", fr:"Avec plaisir ! On va inviter Léa aussi ?", en:"With pleasure! Shall we invite Léa too?", say:"Avec plaisir ! On va inviter Léa aussi ?", key:"d82_d3" },
        { who:"B", fr:"Bonne idée. Marc, lui, ne va pas pouvoir — il travaille. Une autre fois.", en:"Good idea. Marc, though, won't be able to — he's working. Another time.", say:"Bonne idée. Marc, lui, ne va pas pouvoir — il travaille. Une autre fois.", key:"d82_d4" },
        { who:"A", fr:"Parfait. On se retrouve à midi, alors. À demain !", en:"Perfect. We'll meet at noon, then. See you tomorrow!", say:"Parfait. On se retrouve à midi, alors. À demain !", key:"d82_d5" }
      ],
      tip:"The full week-10 kit: <b>on va faire</b> (futur proche), <b>ça te dit… ?</b> (suggestion), <b>avec plaisir</b> (accept), <b>ne va pas pouvoir… une autre fois</b> (a soft ‘no’ for Marc), <b>il va faire beau</b> (weather). And it all closes with <b>à demain !</b> — the whole timeline in one goodbye."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘What are we going to do tomorrow?’:",
          opts:["qu'est-ce qu'on a fait demain","qu'est-ce qu'on va faire demain","qu'est-ce qu'on faisait demain","qu'est-ce qu'on fait hier"], answer:1,
          ok:"Right — futur proche: on va faire, with demain.",
          no:"<b>Qu'est-ce qu'on va faire demain</b> — aller + infinitive for the near future." },
        { prompt:"To suggest the park casually:",
          opts:["On va au parc. (falling)","On va au parc ? (rising)","On est allé au parc","On allait au parc"], answer:1,
          ok:"Right — the rising tone turns it into a suggestion.",
          no:"<b>On va au parc ?</b> (rising) — intonation makes the suggestion." },
        { prompt:"A gentle way to say Marc can't come:",
          opts:["Marc ne vient pas, tant pis","il ne va pas pouvoir… une autre fois","Marc a tort","Marc, non"], answer:1,
          ok:"Right — a reason + an open door, never a blunt no.",
          no:"<b>Il ne va pas pouvoir… une autre fois</b> — reason + soften." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"À demain : the open-ended goodbye",
      body:[
        "French goodbyes love to point forward: <b>à demain</b>, <b>à la semaine prochaine</b>, <b>à bientôt</b> — ‘until tomorrow / next week / soon’. Even a casual parting usually names the next meeting, however vaguely. It keeps the relationship in motion.",
        "You've now closed the loop the course set out to build: greet, get around, order, recount the past, give an opinion, and make a plan for what's next — a whole day, lived in French, from <em>bonjour</em> to <em>à demain</em>. Tomorrow's lesson steps back to look at one last skill: switching register on purpose."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 82, done.",
      body:["The plan's made. Tomorrow: the one skill that runs under all of it — tu or vous."],
      next:"Jour 83 — Tu ou vous : changer de registre"}
  ]
};

const LESSON_83 = {
  day: 83, week: 12,
  title: "Tu ou vous : changer de registre",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The switch you make all day",
      body:[
        "One skill has run quietly under every scene this week: choosing <b>tu</b> or <b>vous</b>, and switching between them on purpose. It's not a grammar point you learned once — it's a social read you've been making since day 1.",
        "Today, that reflex itself is the lesson: same message, two registers, and knowing which the moment calls for."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Rappel : tu vs vous — /y/ vs /u/",
      body:["A full-circle sound: the very first minimal pair of the course, now doing social work:"],
      pairs:[
        { fr:"tu", ipa:"/ty/", en:"informal ‘you’ — the tight /y/ from day 1's rue", say:"tu", key:"d83_tu" },
        { fr:"vous", ipa:"/vu/", en:"formal/plural ‘you’ — the round /u/ from day 1's roue", say:"vous", key:"d83_vous" },
        { fr:"salut / bonjour", ipa:"/sa.ly/ · /bɔ̃.ʒuʁ/", en:"the informal vs formal greeting that flags the register", say:"salut, bonjour", key:"d83_salutbonjour" }
      ],
      tip:"A neat full circle: <b>tu</b> /ty/ vs <b>vous</b> /vu/ is the very <em>rue /ʁy/ vs roue /ʁu/</em> contrast you drilled on day 1 — the /y/ (tight, lips forward) vs /u/ (round, lips out). Back then it was just a sound; now it carries the whole social choice."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Rappel : the two registers",
      items:[
        { fr:"tu / vous", en:"you (informal / formal)", reg:null, say:"tu, vous", key:"d83_v_tuvous" },
        { fr:"salut / bonjour", en:"hi / hello (informal / formal)", reg:null, say:"salut, bonjour", key:"d83_v_salutbonjour" },
        { fr:"tu as… / vous avez…", en:"you have… (informal / formal)", reg:null, say:"tu as, vous avez", key:"d83_v_tuasvousavez" },
        { fr:"ça te dit / ça vous dit", en:"do you fancy it (informal / formal)", reg:null, say:"ça te dit, ça vous dit", key:"d83_v_catevous" },
        { fr:"monsieur / madame", en:"sir / madam (with vous)", reg:"formal", say:"monsieur, madame", key:"d83_v_monsieurmadame" },
        { fr:"On peut se tutoyer ?", en:"Can we use ‘tu’? (moving to informal)", reg:null, say:"On peut se tutoyer ?", key:"d83_v_setutoyer" },
        { fr:"vouvoyer / tutoyer", en:"to use vous / to use tu", reg:null, say:"vouvoyer, tutoyer", key:"d83_v_vouvoyer" },
        { fr:"poli / familier", en:"polite / familiar", reg:null, say:"poli, familier", key:"d83_v_polifamilier" }
      ],
      tip:"Default to <b>vous</b> with any adult you don't know, officials, shopkeepers; use <b>tu</b> with friends, family, peers, children. The verb follows: <em>tu as / vous avez</em>, <em>ça te dit / ça vous dit</em>. And there's a phrase for the moment a relationship warms up: <b>« On peut se tutoyer ? »</b> — ‘shall we switch to tu?’ — usually offered by the older or more senior person."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Scène 6 : le même message, deux registres",
      body:["The same question, once to a friend, once to a shopkeeper."],
      turns:[
        { who:"A", fr:"Salut Marc ! Tu es libre demain ? On va au parc.", en:"Hi Marc! Are you free tomorrow? We're going to the park.", say:"Salut Marc ! Tu es libre demain ? On va au parc.", key:"d83_d1" },
        { who:"B", fr:"Ah, désolé, je travaille. Une autre fois !", en:"Ah, sorry, I'm working. Another time!", say:"Ah, désolé, je travaille. Une autre fois !", key:"d83_d2" },
        { who:"A", fr:"Bonjour madame, excusez-moi, vous êtes ouverts demain ?", en:"Hello madam, excuse me, are you open tomorrow?", say:"Bonjour madame, excusez-moi, vous êtes ouverts demain ?", key:"d83_d3" },
        { who:"B", fr:"Oui monsieur, de neuf heures à dix-neuf heures.", en:"Yes sir, from nine to seven.", say:"Oui monsieur, de neuf heures à dix-neuf heures.", key:"d83_d4" }
      ],
      tip:"Same person (A), two registers held cleanly: <b>salut / tu es / on va</b> with the friend, then <b>bonjour madame / excusez-moi / vous êtes</b> with the shopkeeper. Mixing them up — <em>tu</em> to the shopkeeper, or a stiff <em>vous</em> to a close friend — is what marks a learner. Keeping them straight, as you just did, is pure A2 competence."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"To a shopkeeper you don't know, you use…",
          opts:["tu","vous","either","salut"], answer:1,
          ok:"Right — vous is the default with strangers and in shops.",
          no:"<b>Vous</b> — the polite default for anyone you don't know." },
        { prompt:"‘On peut se tutoyer ?’ proposes…",
          opts:["switching to tu","switching to vous","ending the chat","paying"], answer:0,
          ok:"Right — an offer to move to the informal tu.",
          no:"<b>Switching to tu</b> — the phrase that opens up the informal register." },
        { prompt:"‘tu’ /y/ vs ‘vous’ /u/ is the same contrast as…",
          opts:["est / et","rue / roue (day 1)","le / la","un / une"], answer:1,
          ok:"Right — the day-1 rue /ʁy/ vs roue /ʁu/ minimal pair.",
          no:"<b>Rue / roue</b> — the /y/ vs /u/ pair you drilled on day 1." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The most French decision of all",
      body:[
        "The <em>tu/vous</em> choice has no English equivalent, and it's arguably the most distinctly French thing in the whole course — a small act of social positioning made dozens of times a day. Get it right and you're invisible; get it wrong and it's noticed, though rarely held against a foreigner who's clearly trying.",
        "The safe rule survives everything: <b>when in doubt, vous.</b> Over-formality is polite; over-familiarity can grate. And let the other person, or the moment (<em>« on peut se tutoyer »</em>), open the door to <em>tu</em>. You've been making this call all week without noticing — which means it's already yours."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 83, done.",
      body:["One station left. Tomorrow: the whole day in one story — and a look at how far you've come."],
      next:"Jour 84 — Une journée à Paris (le grand récap)"}
  ]
};

const LESSON_84 = {
  day: 84, week: 12,
  title: "Une journée à Paris : le grand récap",
  durationMin: 22,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The whole day, in one story — la dernière station",
      body:[
        "Here it is: the last station. One long scene that runs the whole day in Paris — the café, the métro, the museum, the discussion, the plan — moving between the present, the two pasts and the near future, switching register as it goes.",
        "Everything you've built, in a single conversation. Then a look back at what you can now do — and the finish line."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Une journée à Paris",
      body:["Two friends, one full day — <b>tu</b> together, <b>vous</b> with everyone else. All twelve weeks, in one chained scene."],
      turns:[
        { who:"A", fr:"Salut ! Bien dormi ? On commence par un café ?", en:"Hi! Sleep well? Shall we start with a coffee?", say:"Salut ! Bien dormi ? On commence par un café ?", key:"d84_d1" },
        { who:"B", fr:"Avec plaisir. Bonjour madame, deux cafés, s'il vous plaît.", en:"With pleasure. Hello, two coffees, please.", say:"Avec plaisir. Bonjour madame, deux cafés, s'il vous plaît.", key:"d84_d2" },
        { who:"A", fr:"Merci. Bon, pour aller au musée, on prend le métro ?", en:"Thanks. Right, to get to the museum, shall we take the métro?", say:"Merci. Bon, pour aller au musée, on prend le métro ?", key:"d84_d3" },
        { who:"B", fr:"Oui, ligne 1, direction La Défense. C'est direct — quatre stations.", en:"Yes, line 1, direction La Défense. It's direct — four stations.", say:"Oui, ligne 1, direction La Défense. C'est direct — quatre stations.", key:"d84_d4" },
        { who:"A", fr:"On est arrivés ! Regarde, il y a déjà du monde.", en:"We're here! Look, there are already lots of people.", say:"On est arrivés ! Regarde, il y a déjà du monde.", key:"d84_d5" },
        { who:"B", fr:"D'habitude, le matin, il y avait moins de monde… mais bon, on entre.", en:"Usually, in the morning, there used to be fewer people… but oh well, let's go in.", say:"D'habitude, le matin, il y avait moins de monde… mais bon, on entre.", key:"d84_d6" },
        { who:"A", fr:"Alors, c'était comment ?", en:"So, what was it like?", say:"Alors, c'était comment ?", key:"d84_d7" },
        { who:"B", fr:"Magnifique. J'ai vu un Monet incroyable — à mon avis, c'est le plus beau du musée.", en:"Magnificent. I saw an incredible Monet — in my opinion, it's the most beautiful in the museum.", say:"Magnifique. J'ai vu un Monet incroyable — à mon avis, c'est le plus beau du musée.", key:"d84_d8" },
        { who:"A", fr:"Je suis d'accord. Bon, j'ai faim — on va au café d'en face ?", en:"I agree. Right, I'm hungry — shall we go to the café across the way?", say:"Je suis d'accord. Bon, j'ai faim — on va au café d'en face ?", key:"d84_d9" },
        { who:"B", fr:"Bonne idée. Et demain, qu'est-ce qu'on va faire ?", en:"Good idea. And tomorrow, what are we going to do?", say:"Bonne idée. Et demain, qu'est-ce qu'on va faire ?", key:"d84_d10" },
        { who:"A", fr:"Il va faire beau — on va peut-être aller au parc ? Ça te dit ?", en:"It's going to be nice — maybe we'll go to the park? Do you fancy it?", say:"Il va faire beau — on va peut-être aller au parc ? Ça te dit ?", key:"d84_d11" },
        { who:"B", fr:"Ça me dit bien. Quelle belle journée. À demain !", en:"I'd really like that. What a lovely day. See you tomorrow!", say:"Ça me dit bien. Quelle belle journée. À demain !", key:"d84_d12" }
      ],
      tip:"Read it back and spot the whole course: greetings + register (<em>salut/tu</em>, <em>bonjour madame/vous</em>), ordering (<em>je voudrais… s'il vous plaît</em>), directions + métro (<em>pour aller au musée, direction La Défense</em>), both pasts (<em>on est arrivés, j'ai vu</em> · <em>il y avait, c'était</em>), opinion + superlative (<em>à mon avis, le plus beau</em>), the near future (<em>on va aller, il va faire beau</em>), and a plan to close (<em>ça te dit ? à demain</em>). Twelve weeks, one day."},
    { type:"recall",
      eyebrow:"Le bilan",
      h:"Auto-évaluation : your A2 can-do check",
      questions:[
        { prompt:"CAN-DO — greet & manage tu/vous: to a shopkeeper you don't know…",
          opts:["Salut, tu as… ?","Bonjour, vous avez… ?","Coucou !","Hé, tu…"], answer:1,
          ok:"✓ Register: bonjour + vous with a stranger. You can do this.",
          no:"<b>Bonjour, vous avez… ?</b> — vous with someone you don't know." },
        { prompt:"CAN-DO — shop, prices & numbers: ‘how much does it come to?’",
          opts:["Quelle heure ?","Ça fait combien ?","Où est-ce ?","C'est quoi ?"], answer:1,
          ok:"✓ Prices & shopping. Ticked.",
          no:"<b>Ça fait combien ?</b> — asking the total. A core A2 can-do." },
        { prompt:"CAN-DO — directions & métro: which names the platform to take?",
          opts:["la sortie","la direction (terminus)","la correspondance","le quai"], answer:1,
          ok:"✓ You can read the métro. Ticked.",
          no:"<b>La direction</b> — the terminus tells you the platform." },
        { prompt:"CAN-DO — recount the past: ‘I saw a film and it was great’",
          opts:["je vois un film et c'est génial","j'ai vu un film et c'était génial","je verrai un film","je voyais un film"], answer:1,
          ok:"✓ Passé composé (event) + imparfait (description). Ticked.",
          no:"<b>J'ai vu… et c'était…</b> — event in passé composé, description in imparfait." },
        { prompt:"CAN-DO — near-future plans: ‘tomorrow we're going to go to the park’",
          opts:["demain on est allés au parc","demain on va aller au parc","demain on allait au parc","demain on va au parc hier"], answer:1,
          ok:"✓ Futur proche. Ticked.",
          no:"<b>On va aller au parc</b> — aller + infinitive for the near future." },
        { prompt:"CAN-DO — opinion & comparison: ‘in my opinion it's better than the other’",
          opts:["à mon avis c'est plus bon que l'autre","à mon avis c'est meilleur que l'autre","je suis avis meilleur","à mon avis c'est mieux bon"], answer:1,
          ok:"✓ Opinion frame + irregular meilleur. Ticked — that's the A2 list, complete.",
          no:"<b>À mon avis, c'est meilleur que l'autre</b> — opinion + meilleur (not ‘plus bon’)." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards — one last review",
      body:["The whole course now feeds this queue — every word from twelve weeks that's due today. It'll keep bringing them back long after this last lesson; that's the system doing its job, for as long as you keep opening the app. Grade honestly."]},
    { type:"culture",
      eyebrow:"Le bilan A2",
      h:"What you can now do — and what's honest",
      body:[
        "Against the A2 can-do list, here's where you stand. You can: <b>greet</b> appropriately and manage <em>tu/vous</em>; <b>order, shop</b> and handle prices and numbers to 100; <b>ask for and follow directions</b>, including on the métro; <b>describe</b> your routine, home and neighbourhood; <b>recount the past</b> (passé composé + basic imparfait) and <b>state near-future plans</b> (futur proche); <b>give a simple opinion and comparison</b>; and <b>follow slow, clear speech</b> on familiar topics. That's a genuine, functioning A2 — the survival core of daily life in French.",
        "And the honest part, kept to the end as it was from the start: this is a <em>solid A2</em>, not B1. It's ~28 hours of lessons — a spine, not fluency — and it comes alive only with real listening and speaking out in the world. What you've built here is the scaffolding; the building goes up when you use it. Which, now, you can."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Parcours A2 — complet. Félicitations ! 🎉",
      body:[
        "Quatre-vingt-quatre stations. Twelve weeks, from your first <em>bonjour</em> to a full day lived in French. You started unable to order a coffee; you can now greet, get around, shop, recount, discuss and plan — a whole day, on your own, in Paris.",
        "There's no next station to rush to. Go and use it: order that coffee, ask that direction, give that opinion. <em>Bonne route</em> — and <em>félicitations</em>."
      ],
      next:"Terminus · fin du parcours A2. Félicitations, et bonne continuation ! 🎉"}
  ]
};

export const WEEK12 = [LESSON_78, LESSON_79, LESSON_80, LESSON_81, LESSON_82, LESSON_83, LESSON_84];
