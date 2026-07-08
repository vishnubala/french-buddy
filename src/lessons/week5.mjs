/* Week 5 — Days 29–35. L'heure & daily routine: telling time (informal and
   official 24h), reflexive verbs (se lever, se coucher), the irregular faire,
   être en train de for "right now", days/months, and Paris's fermeture
   culture (lunch closures, Sunday). Slows the pace down after Week 4's street
   navigation to look at the shape of an ordinary day. */

const LESSON_29 = {
  day: 29, week: 5,
  title: "Quelle heure est-il ?",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Time, the French way",
      body:[
        "Week 5 slows down and looks at the clock. You'll learn to ask and tell the time — and pick up the rhythm rule that makes French sentences sound French, not just correctly pronounced.",
        "One quirk up front: French doesn't say ‘it's two o'clock’ — it says <b>il est deux heures</b>, literally ‘it is two hours’. <em>Heures</em> does double duty as both ‘hours’ and ‘o'clock’."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The rhythm rule: stress lands last",
      body:["English stresses different syllables in different words. French doesn't — every syllable in a phrase gets nearly equal weight, and only the very last syllable gets a touch more length. Listen for it:"],
      pairs:[
        { fr:"Il est deux heures", ipa:"/il ɛ dø.ˈzœʁ/", en:"the weight lands on the final beat — heures, not deux", say:"Il est deux heures", key:"d29_ilestdeuxheures" },
        { fr:"Quelle heure est-il ?", ipa:"/kɛl œʁ ɛ.ˈtil/", en:"the whole question glides to one stressed peak at the very end", say:"Quelle heure est-il ?", key:"d29_quelleheureestil" },
        { fr:"Il est midi", ipa:"/il ɛ mi.ˈdi/", en:"noon — two level syllables, then a touch more on -di", say:"Il est midi", key:"d29_ilestmidi" }
      ],
      tip:"French doesn't accent random syllables the way English does (comPUter vs COMputer) — every syllable in a phrase gets roughly equal length, with only the final syllable stretched slightly. That evenness is what makes French sound ‘smooth’ to English ears — and it's exactly why French speakers of English often stress the wrong syllable: same rule, just applied to the wrong language."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Telling the time",
      items:[
        { fr:"Quelle heure est-il ?", en:"What time is it?", reg:null, say:"Quelle heure est-il ?", key:"d29_v_quelleheure" },
        { fr:"Il est… heures", en:"It's … o'clock", reg:null, say:"Il est deux heures", key:"d29_v_ilestheures" },
        { fr:"et quart", en:"quarter past", reg:null, say:"et quart", key:"d29_v_etquart" },
        { fr:"et demie", en:"half past", reg:null, say:"et demie", key:"d29_v_etdemie" },
        { fr:"moins le quart", en:"quarter to", reg:null, say:"moins le quart", key:"d29_v_moinslequart" },
        { fr:"midi", en:"noon", reg:null, say:"midi", key:"d29_v_midi" },
        { fr:"minuit", en:"midnight", reg:null, say:"minuit", key:"d29_v_minuit" },
        { fr:"À quelle heure ?", en:"At what time?", reg:null, say:"À quelle heure ?", key:"d29_v_aquelleheure" }
      ],
      tip:"The pattern: heure + <b>et quart</b> (+15), <b>et demie</b> (+30), <b>moins le quart</b> (–15 from the <em>next</em> hour). That last one is the trap: <b>trois heures moins le quart</b> means 2:45, not 3:45 — French counts down toward the hour you're approaching, not up from the one you just left."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Fixing a time to meet",
      body:["Two friends arranging their afternoon — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Quelle heure est-il ?", en:"What time is it?", say:"Quelle heure est-il ?", key:"d29_d1" },
        { who:"B", fr:"Il est trois heures et quart.", en:"It's quarter past three.", say:"Il est trois heures et quart.", key:"d29_d2" },
        { who:"A", fr:"Parfait, on se retrouve à quatre heures moins le quart ?", en:"Perfect, shall we meet at quarter to four?", say:"Parfait, on se retrouve à quatre heures moins le quart ?", key:"d29_d3" },
        { who:"B", fr:"D'accord, à tout à l'heure !", en:"OK, see you soon!", say:"D'accord, à tout à l'heure !", key:"d29_d4" }
      ],
      tip:"<b>On se retrouve… ?</b> = ‘shall we meet…?’ — the everyday way to fix a time with a friend. <b>À tout à l'heure !</b> (‘see you in a bit!’) reuses today's word <em>heure</em> in a fixed goodbye — grab it whole, it's said constantly."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Quarter past three’:",
          opts:["trois heures moins le quart","trois heures et quart","trois heures et demie","quart trois heures"], answer:1,
          ok:"Right — et quart adds 15 minutes.",
          no:"<b>Trois heures et quart</b> — et quart = +15 minutes." },
        { prompt:"‘Quarter to four’:",
          opts:["quatre heures et quart","trois heures et demie","quatre heures moins le quart","trois heures moins le quart"], answer:2,
          ok:"Yes — moins le quart counts down from the hour you're heading toward: four.",
          no:"<b>Quatre heures moins le quart</b> — moins le quart looks forward to 4, not back to 3." },
        { prompt:"In a French phrase, the extra stress lands on…",
          opts:["the first syllable","a random syllable","the last syllable","every syllable equally"], answer:2,
          ok:"Right — the very last syllable gets a touch more length. That's the whole rule.",
          no:"The <b>last syllable</b> of the phrase — French rhythm is flat until the very end." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Le quart d'heure de politesse",
      body:[
        "For a casual meetup — coffee, dinner at a friend's — arriving 10 to 15 minutes after the stated time is normal and has its own name: <b>le quart d'heure de politesse</b>, ‘the polite quarter hour’. Nobody's kept waiting in a huff; it's baked into the plan.",
        "That grace period vanishes for anything formal: a job interview, a doctor's appointment, a train. There, <em>l'heure</em> means <em>l'heure</em> — the SNCF does not observe le quart d'heure de politesse."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 29, done.",
      body:["You can ask for and give the time. Tomorrow: the other clock — the official 24-hour one you'll see on every train and cinema listing."],
      next:"Jour 30 — L'heure officielle : le 24 heures"}
  ]
};

const LESSON_30 = {
  day: 30, week: 5,
  title: "L'heure officielle : le 24 heures",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Two clocks, one country",
      body:[
        "Yesterday's <em>et quart / et demie / moins le quart</em> is how friends talk. It is not how a train schedule, a cinema listing, or a shop's posted hours talk — those run on the 24-hour clock, so <b>14h20</b> can never be mistaken for 2:20 in the morning.",
        "Good news: no new grammar. Just bigger numbers you already own (weeks 1–3), now doing clock duty."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Big numbers, small liaisons",
      body:["The same liaison rule from week 4's aux and les, now firing on the high numbers:"],
      pairs:[
        { fr:"vingt heures", ipa:"/vɛ̃.tœʁ/", en:"20h — vingt's silent t wakes up before a vowel", say:"vingt heures", key:"d30_vingtheures" },
        { fr:"dix-huit heures", ipa:"/di.zɥi.tœʁ/", en:"18h — two liaisons back to back", say:"dix-huit heures", key:"d30_dixhuitheures" },
        { fr:"treize heures trente", ipa:"/tʁɛ.zœʁ tʁɑ̃t/", en:"13h30 — minutes stay a plain number, no ‘et quart’", say:"treize heures trente", key:"d30_treizeheurestrente" }
      ],
      tip:"Official time never says et quart/et demie/moins le quart — it just states the minutes as a number: <b>treize heures trente</b> (13h30), not ‘treize heures et demie’. Keep the two systems in separate boxes: casual clock for chatting, 24h for anything printed or scheduled."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Schedules and hours",
      items:[
        { fr:"du matin", en:"in the morning (a.m., casual time)", reg:null, say:"du matin", key:"d30_v_dumatin" },
        { fr:"de l'après-midi", en:"in the afternoon (p.m., casual time)", reg:null, say:"de l'après-midi", key:"d30_v_delapresmidi" },
        { fr:"du soir", en:"in the evening (p.m., casual time)", reg:null, say:"du soir", key:"d30_v_dusoir" },
        { fr:"Le train part à…", en:"The train leaves at…", reg:null, say:"Le train part à…", key:"d30_v_letrainpart" },
        { fr:"les horaires", en:"the schedule / opening hours", reg:null, say:"les horaires", key:"d30_v_horaires" },
        { fr:"ouvert", en:"open", reg:null, say:"ouvert", key:"d30_v_ouvert" },
        { fr:"fermé", en:"closed", reg:null, say:"fermé", key:"d30_v_ferme" },
        { fr:"À quelle heure ouvre… ?", en:"What time does … open?", reg:"formal", say:"À quelle heure ouvre le musée ?", key:"d30_v_aquelleheureouvre" }
      ],
      tip:"Casual spoken time reaches for the 12-hour clock plus a tag: <b>du matin</b>, <b>de l'après-midi</b>, <b>du soir</b>. So a friend says <em>‘à huit heures du soir’</em>, never <em>‘à vingt heures’</em> — that would sound like reading a train timetable out loud."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At the station",
      body:["Asking about a departure — <b>vous</b>, at the ticket window."],
      turns:[
        { who:"A", fr:"Excusez-moi, le train pour Lyon part à quelle heure ?", en:"Excuse me, what time does the train for Lyon leave?", say:"Excusez-moi, le train pour Lyon part à quelle heure ?", key:"d30_d1" },
        { who:"B", fr:"Il part à quatorze heures vingt, quai sept.", en:"It leaves at 14:20, platform seven.", say:"Il part à quatorze heures vingt, quai sept.", key:"d30_d2" },
        { who:"A", fr:"Quatorze heures vingt… et il arrive à quelle heure ?", en:"14:20… and what time does it arrive?", say:"Quatorze heures vingt… et il arrive à quelle heure ?", key:"d30_d3" },
        { who:"B", fr:"Vers dix-sept heures.", en:"Around 17:00.", say:"Vers dix-sept heures.", key:"d30_d4" },
        { who:"A", fr:"Merci beaucoup !", en:"Thank you very much!", say:"Merci beaucoup !", key:"d30_d5" }
      ],
      tip:"<b>Quai</b> (platform) is back from week 4's métro vocabulary — the SNCF and the métro share the word. <b>Vers</b> = ‘around/about’, useful for an approximate arrival."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"A friend says ‘à huit heures du soir’. On a schedule that's written…",
          opts:["8h00","20h00","18h00","08h20"], answer:1,
          ok:"Right — 8 p.m. is 20h00 on the 24-hour clock.",
          no:"<b>20h00</b> — the casual ‘huit heures du soir’ becomes the official 20h00." },
        { prompt:"‘13h30’ read aloud, officially:",
          opts:["treize heures et demie","une heure et demie","treize heures trente","une heure trente de l'après-midi"], answer:2,
          ok:"Yes — official time states minutes as a plain number.",
          no:"<b>Treize heures trente</b> — no et demie in the 24h system, just the number." },
        { prompt:"‘Vingt heures’ has a liaison because…",
          opts:["vingt is irregular","the silent t of vingt wakes before the vowel of heures","heures starts with h, always silent","there's no liaison here"], answer:1,
          ok:"Right — vingt's normally-silent t resurfaces before a vowel-initial word.",
          no:"The <b>t</b> of vingt is silent alone, but liaises to /t/ before heures's vowel sound." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Why the 24-hour clock everywhere official",
      body:[
        "SNCF trains, RATP timetables, cinema listings, TV guides, opening-hours signs — all 24-hour, with zero risk of an a.m./p.m. mix-up. It's less a French quirk than a European default, but it surprises a lot of English-speaking visitors the first time they read <b>20h30</b> on a cinema poster and have to do the math.",
        "The reverse rarely happens: you won't hear a French friend invite you over ‘à vingt heures’ — that register mismatch (official language for a casual plan) would sound almost comically stiff, like a robot deciding when to have dinner."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 30, done.",
      body:["Both clocks are yours now. Tomorrow: the verbs for the things you do to yourself, starting with getting out of bed."],
      next:"Jour 31 — Se lever, se coucher : les verbes pronominaux"}
  ]
};

const LESSON_31 = {
  day: 31, week: 5,
  title: "Se lever, se coucher : les verbes pronominaux",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Verbs that reflect back on you",
      body:[
        "You already know regular <b>-er</b> verbs (week 2). Pronominal verbs add one small piece — a pronoun that mirrors the subject — for actions you do <em>to yourself</em>: getting up, going to bed, getting dressed.",
        "<b>Se lever</b> (to get up) and <b>se coucher</b> (to go to bed) are today's pair — the two hinges of every daily routine."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The pronoun that shrinks before a vowel",
      body:["Three things happening in these verbs' mouths:"],
      pairs:[
        { fr:"je me lève", ipa:"/ʒə mə lɛv/", en:"the stem vowel opens: e → è, exactly like petit → petite's cousin", say:"je me lève", key:"d31_jemeleve" },
        { fr:"je m'habille", ipa:"/ʒə ma.bij/", en:"me shrinks to m' before a vowel-starting verb", say:"je m'habille", key:"d31_jemhabille" },
        { fr:"ils se couchent", ipa:"/il sə kuʃ/", en:"the final -ent is silent, as always for ils/elles", say:"ils se couchent", key:"d31_ilssecouchent" }
      ],
      tip:"Just like <b>me</b>, the reflexive pronouns <b>te</b> and <b>se</b> also shrink to <b>t'</b> and <b>s'</b> before a vowel: <em>tu t'habilles</em>, <em>il s'habille</em>. Same elision rule as <em>le/la → l'</em> from week 1, just on a different word class."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The verbs of getting through a day",
      items:[
        { fr:"se lever", en:"to get up", reg:null, say:"se lever", key:"d31_v_selever" },
        { fr:"se coucher", en:"to go to bed", reg:null, say:"se coucher", key:"d31_v_secoucher" },
        { fr:"se réveiller", en:"to wake up", reg:null, say:"se réveiller", key:"d31_v_sereveiller" },
        { fr:"se laver", en:"to wash (oneself)", reg:null, say:"se laver", key:"d31_v_selaver" },
        { fr:"s'habiller", en:"to get dressed", reg:null, say:"s'habiller", key:"d31_v_shabiller" },
        { fr:"se doucher", en:"to shower", reg:null, say:"se doucher", key:"d31_v_sedoucher" },
        { fr:"Je me lève à…", en:"I get up at…", reg:null, say:"Je me lève à sept heures", key:"d31_v_jemeleveA" },
        { fr:"Tu te couches à quelle heure ?", en:"What time do you go to bed?", reg:"informal", say:"Tu te couches à quelle heure ?", key:"d31_v_tutecouches" }
      ],
      tip:"<b>Se lever</b> is the one to learn as a full block, because its stem vowel changes: je me <b>lève</b>, tu te <b>lèves</b>, il/elle/on se <b>lève</b>, nous nous <b>levons</b>, vous vous <b>levez</b>, ils/elles se <b>lèvent</b> — è everywhere except nous/vous. <b>Se coucher</b>, <b>se réveiller</b>, <b>se laver</b> and <b>s'habiller</b> stay perfectly regular; only the pronoun changes with the subject."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Comparing mornings",
      body:["Two friends trading routines — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu te lèves à quelle heure, le matin ?", en:"What time do you get up in the morning?", say:"Tu te lèves à quelle heure, le matin ?", key:"d31_d1" },
        { who:"B", fr:"Je me réveille à six heures et demie, mais je me lève à sept heures moins le quart.", en:"I wake up at half six, but I get up at quarter to seven.", say:"Je me réveille à six heures et demie, mais je me lève à sept heures moins le quart.", key:"d31_d2" },
        { who:"A", fr:"Et le soir, tu te couches tôt ?", en:"And in the evening, do you go to bed early?", say:"Et le soir, tu te couches tôt ?", key:"d31_d3" },
        { who:"B", fr:"Assez tôt, vers onze heures.", en:"Fairly early, around eleven.", say:"Assez tôt, vers onze heures.", key:"d31_d4" }
      ],
      tip:"<b>Se réveiller</b> (waking up) and <b>se lever</b> (getting out of bed) are two separate moments in French, same as in English — you can lie awake for fifteen minutes between them, exactly like speaker B just did."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘You (tu) get up’ — the reflexive pronoun is…",
          opts:["me","te","se","nous"], answer:1,
          ok:"Right — tu te lèves. The pronoun tracks tu.",
          no:"<b>Te</b> — tu te lèves. Each subject has its own matching pronoun." },
        { prompt:"In <b>se lever</b>, the stem vowel in je/tu/il/ils forms is…",
          opts:["e, unchanged","è, opened","é, closed","silent"], answer:1,
          ok:"Yes — je me lève, il se lève, ils se lèvent: all è.",
          no:"It opens to <b>è</b> — je me lève, not ‘je me leve’." },
        { prompt:"‘He gets dressed’:",
          opts:["Il se habille","Il s'habille","Il me habille","Il te habille"], answer:1,
          ok:"Right — se shrinks to s' before the vowel of habille.",
          no:"<b>Il s'habille</b> — se elides to s' before a vowel, just like le/la → l'." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"La grasse matinée",
      body:[
        "The very French idiom for sleeping in is <b>faire la grasse matinée</b> — literally ‘to make the fat morning’. It's what you announce on a Sunday when there's nowhere to be: <em>« Ce week-end, je fais la grasse matinée ! »</em>",
        "Weekday mornings are a different story — French schools and offices start early (many écoles primaires open around 8h30), so the grasse matinée is a weekend luxury, savored precisely because it's rare."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 31, done.",
      body:["Your morning and night are covered. Tomorrow: the verb behind almost everything you do in between — faire."],
      next:"Jour 32 — Faire : le sport, les courses, la cuisine"}
  ]
};

const LESSON_32 = {
  day: 32, week: 5,
  title: "Faire : le sport, les courses, la cuisine",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The verb that does almost everything",
      body:[
        "<b>Faire</b> means both ‘to do’ and ‘to make’ — and French leans on it far more than English leans on either. Sport, chores, cooking, a walk: French reaches for <em>faire</em> where English would pick a different verb for each.",
        "It's also thoroughly irregular. Today, learn it as a block, the way you did <em>aller</em> in week 4."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Faisons — the one that breaks its own pattern",
      body:["Faire's présent has two genuine irregular sounds worth isolating:"],
      pairs:[
        { fr:"je fais", ipa:"/ʒə fɛ/", en:"rhymes with week 4's vais — the same open è", say:"je fais", key:"d32_jefais" },
        { fr:"nous faisons", ipa:"/nu fə.zɔ̃/", en:"the ai here is read as a mute e, the only place in French this happens", say:"nous faisons", key:"d32_nousfaisons" },
        { fr:"vous faites", ipa:"/vu fɛt/", en:"breaks the universal -ez ending — not ‘faisez’", say:"vous faites", key:"d32_vousfaites" }
      ],
      tip:"Full block: je <b>fais</b>, tu <b>fais</b>, il/elle/on <b>fait</b>, nous <b>faisons</b>, vous <b>faites</b>, ils/elles <b>font</b>. <b>Faisons</b> is French's one spot where ‘ai’ is pronounced as a plain schwa, not è — and <b>faites</b> breaks the -ez pattern every command verb so far (tournez, continuez, allez) has trained you to expect."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Faire + activity",
      items:[
        { fr:"faire du sport", en:"to play/do sport", reg:null, say:"faire du sport", key:"d32_v_fairedusport" },
        { fr:"faire les courses", en:"to do the (grocery) shopping", reg:null, say:"faire les courses", key:"d32_v_fairelescourses" },
        { fr:"faire la cuisine", en:"to cook", reg:null, say:"faire la cuisine", key:"d32_v_fairelacuisine" },
        { fr:"faire le ménage", en:"to do the housework", reg:null, say:"faire le ménage", key:"d32_v_fairelemenage" },
        { fr:"faire ses devoirs", en:"to do one's homework", reg:null, say:"faire ses devoirs", key:"d32_v_fairesesdevoirs" },
        { fr:"faire une promenade", en:"to go for a walk", reg:null, say:"faire une promenade", key:"d32_v_faireunepromenade" },
        { fr:"faire attention", en:"to pay attention / be careful", reg:null, say:"faire attention", key:"d32_v_faireattention" },
        { fr:"Qu'est-ce que tu fais ?", en:"What are you doing?", reg:"informal", say:"Qu'est-ce que tu fais ?", key:"d32_v_questcequetufais" }
      ],
      tip:"<b>Faire</b> pairs with an activity noun to cover almost anything you'd call ‘doing X’ in English — sport, chores, cooking, a walk — even where English reaches for a completely different verb. Learn each pairing as its own chunk rather than translating word by word; ‘faire les courses’ isn't ‘to make the errands’, it just <em>is</em> ‘to shop’."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Weekend plans",
      body:["Two friends comparing weekend activities — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Qu'est-ce que tu fais ce week-end ?", en:"What are you doing this weekend?", say:"Qu'est-ce que tu fais ce week-end ?", key:"d32_d1" },
        { who:"B", fr:"Je fais du sport le matin, et l'après-midi je fais les courses.", en:"I do sport in the morning, and in the afternoon I do the shopping.", say:"Je fais du sport le matin, et l'après-midi je fais les courses.", key:"d32_d2" },
        { who:"A", fr:"Et le dimanche ?", en:"And on Sunday?", say:"Et le dimanche ?", key:"d32_d3" },
        { who:"B", fr:"Le dimanche, je fais la cuisine avec mon frère. On fait un gâteau !", en:"On Sunday, I cook with my brother. We're making a cake!", say:"Le dimanche, je fais la cuisine avec mon frère. On fait un gâteau !", key:"d32_d4" }
      ],
      tip:"Note <b>faire un gâteau</b> — here faire really does mean ‘to make’, the other half of its double life. Same verb, and context sorts out which English word you'd reach for."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘We do the shopping’:",
          opts:["Nous faisons les courses","Nous faisont les courses","Nous fesons les courses","Nous faisez les courses"], answer:0,
          ok:"Right — nous faisons, /fə.zɔ̃/.",
          no:"<b>Nous faisons</b> — spelled with ai, pronounced with a schwa: /fə.zɔ̃/." },
        { prompt:"‘You (vous) do’:",
          opts:["vous faisez","vous faites","vous faisont","vous faisent"], answer:1,
          ok:"Yes — faites breaks the usual -ez ending.",
          no:"<b>Vous faites</b> — irregular, not the -ez pattern every other verb uses." },
        { prompt:"‘Faire les courses’ means…",
          opts:["to run a race","to do the grocery shopping","to take a course","to do homework"], answer:1,
          ok:"Right — the grocery/errands shopping.",
          no:"<b>To do the (grocery) shopping</b> — devoirs is homework, courses is errands/shopping." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Little and often, not one big shop",
      body:[
        "Plenty of Parisians still do <em>faire les courses</em> in small, frequent trips rather than one weekly haul: bread from the boulangerie most days (it doesn't keep — see week 1), produce from a local market two or three times a week, and the supermarket for everything else. A fridge stocked for one big week is more the exception than the rule, especially in city-centre flats with small kitchens.",
        "Neighborhood open-air markets (<em>le marché</em>) run on fixed days — often Tuesday/Friday/Sunday morning in a given quartier — and are worth timing a visit around, both for freshness and for the small talk practice."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 32, done.",
      body:["Faire now covers most of your daily activities. Tomorrow: how to say what you're doing at this exact moment."],
      next:"Jour 33 — Être en train de : ce que tu fais maintenant"}
  ]
};

const LESSON_33 = {
  day: 33, week: 5,
  title: "Être en train de : ce que tu fais maintenant",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"French has no ‘-ing’ — here's its workaround",
      body:[
        "English marks an action in progress with -ing: ‘I'm cooking.’ French has no equivalent tense — the present tense alone (<em>je fais la cuisine</em>) already covers both ‘I cook’ and ‘I'm cooking’.",
        "When you specifically need to stress ‘right this second, mid-action’, French reaches for a phrase instead: <b>être en train de</b> + infinitive."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Two nasals, linked",
      body:["Day 1's nasal vowels, stacking up in today's key phrase:"],
      pairs:[
        { fr:"en train de", ipa:"/ɑ̃ tʁɛ̃ də/", en:"two different nasals back to back: ɑ̃, then ɛ̃", say:"en train de", key:"d33_entrainde" },
        { fr:"je suis en train de", ipa:"/ʒə sɥi.z‿ɑ̃ tʁɛ̃ də/", en:"in fluent speech, suis often links onto en: ‘sui-zan’", say:"Je suis en train de", key:"d33_jesuisentrainde" },
        { fr:"maintenant", ipa:"/mɛ̃t.nɑ̃/", en:"now — another ɛ̃/ɑ̃ nasal pair", say:"maintenant", key:"d33_maintenant" }
      ],
      tip:"Nasal vowels are the day-1 skill, back in force: <em>an/en</em> (mouth open, air through the nose) versus <em>in</em> (spread lips, air through the nose). <b>Être en train de</b> stacks two different nasals in three syllables — worth slowing down for."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Right now, in progress",
      items:[
        { fr:"être en train de", en:"to be in the middle of (doing)", reg:null, say:"être en train de", key:"d33_v_etreentraindede" },
        { fr:"maintenant", en:"now", reg:null, say:"maintenant", key:"d33_v_maintenant" },
        { fr:"en ce moment", en:"right now / at the moment", reg:null, say:"en ce moment", key:"d33_v_encemoment" },
        { fr:"Je suis en train de…", en:"I'm (in the middle of) …ing", reg:null, say:"Je suis en train de faire les courses", key:"d33_v_jesuisentraindede" },
        { fr:"occupé(e)", en:"busy", reg:null, say:"occupé", key:"d33_v_occupe" },
        { fr:"tranquille", en:"calm / free (a quiet moment)", reg:null, say:"tranquille", key:"d33_v_tranquille" },
        { fr:"Allô ?", en:"Hello? (on the phone only)", reg:null, say:"Allô ?", key:"d33_v_allo" },
        { fr:"Ne quitte pas !", en:"Hold on! (phone, informal)", reg:"informal", say:"Ne quitte pas !", key:"d33_v_nequittepas" }
      ],
      tip:"A reflexive verb after <b>être en train de</b> keeps its own pronoun, matched to the subject — not <em>se</em> for everyone. ‘I'm in the middle of getting up’ is <b>je suis en train de <u>me</u> lever</b>, and for <em>tu</em> it becomes <b>tu es en train de <u>te</u> lever</b>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A phone call, mid-morning",
      body:["A quick catch-up call — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Allô ? Qu'est-ce que tu fais ?", en:"Hello? What are you doing?", say:"Allô ? Qu'est-ce que tu fais ?", key:"d33_d1" },
        { who:"B", fr:"Je suis en train de faire les courses. Et toi ?", en:"I'm in the middle of grocery shopping. And you?", say:"Je suis en train de faire les courses. Et toi ?", key:"d33_d2" },
        { who:"A", fr:"Moi, je suis encore au lit — je suis en train de me réveiller !", en:"Me, I'm still in bed — I'm in the middle of waking up!", say:"Moi, je suis encore au lit — je suis en train de me réveiller !", key:"d33_d3" },
        { who:"B", fr:"Ah bon ! Rappelle-moi dans une heure.", en:"Oh really! Call me back in an hour.", say:"Ah bon ! Rappelle-moi dans une heure.", key:"d33_d4" }
      ],
      tip:"<b>Allô ?</b> only ever opens a phone call — never a face-to-face greeting, where <em>bonjour</em> still rules. <b>Rappelle-moi</b> = ‘call me back’ (the tu command). Notice <em>me réveiller</em> keeps its own pronoun even tucked inside <em>être en train de</em>."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"<b>Être en train de</b> + infinitive means…",
          opts:["to be about to (do something)","to be in the middle of (doing something)","to have just (done something)","to want to (do something)"], answer:1,
          ok:"Right — mid-action, happening right now.",
          no:"<b>To be in the middle of (doing)</b> — French's workaround for the missing ‘-ing’ form." },
        { prompt:"‘I'm getting dressed (right now)’, using en train de:",
          opts:["Je suis en train de s'habiller","Je suis en train de m'habiller","Je suis en train de te habiller","Je suis en train d'habille"], answer:1,
          ok:"Yes — the infinitive keeps its own reflexive pronoun, m' for je.",
          no:"<b>Je suis en train de m'habiller</b> — the pronoun matches the subject (je → m'), not se." },
        { prompt:"You'd say <b>« Allô ? »</b>…",
          opts:["walking into a shop","answering the phone","greeting a friend on the street","starting a formal letter"], answer:1,
          ok:"Right — Allô is reserved for picking up the phone.",
          no:"Only <b>answering the phone</b> — bonjour covers every face-to-face greeting." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Answering the phone",
      body:[
        "<b>« Allô ? »</b> is purely a telephone word — you'll never hear it used to greet someone in person, where <em>bonjour</em> stays mandatory even in week 5. Picking up, French speakers often follow with their own name for a personal line (<em>« Allô, oui, Camille »</em>) rather than a bare hello.",
        "Ending a call is its own small ritual too: <b>« Bon, je te laisse »</b> (‘right, I'll let you go’) is the standard, friendly way to wind a phone conversation down before the actual goodbye."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 33, done.",
      body:["You can now describe an action mid-flight. Tomorrow: the days, the months, and when Paris actually opens its doors."],
      next:"Jour 34 — Les jours, les mois : ouvert, fermé"}
  ]
};

const LESSON_34 = {
  day: 34, week: 5,
  title: "Les jours, les mois : ouvert, fermé",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The rhythm of a French week — and when doors actually open",
      body:[
        "The days of the week, a taste of the months, and the single most useful survival fact for living in or visiting Paris: what's open, when, and when the city quietly shuts its doors.",
        "Miss this lesson and you'll be the person rattling a locked boulangerie door at 1pm, wondering why."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Nasal months, and le + day = every",
      body:["Two small but load-bearing sounds:"],
      pairs:[
        { fr:"lundi", ipa:"/lœ̃.di/", en:"Monday — starts the French week, and the same nasal as week 1's ‘un’", say:"lundi", key:"d34_lundi" },
        { fr:"novembre", ipa:"/nɔ.vɑ̃bʁ/", en:"month names carry the same an/en nasal you already own", say:"novembre", key:"d34_novembre" },
        { fr:"le lundi", ipa:"/lə lœ̃.di/", en:"‘le’ + a day name = every Monday, not just one", say:"le lundi", key:"d34_lelundi" }
      ],
      tip:"Months work exactly like days — lowercase, no article by default, used with <b>en</b>: <em>en janvier, en juillet</em>. And that tiny <b>le</b> in front of a day name is doing real grammatical work: <em>lundi</em> alone means ‘on Monday’ (this one), <em>le lundi</em> means ‘on Mondays’ (every week) — the difference behind half of France's opening-hours signs."},
    { type:"vocab",
      eyebrow:"Le vocabulaire · les jours",
      h:"The days of the week",
      items:[
        { fr:"lundi", en:"Monday", reg:null, say:"lundi", key:"d34_v_lundi" },
        { fr:"mardi", en:"Tuesday", reg:null, say:"mardi", key:"d34_v_mardi" },
        { fr:"mercredi", en:"Wednesday", reg:null, say:"mercredi", key:"d34_v_mercredi" },
        { fr:"jeudi", en:"Thursday", reg:null, say:"jeudi", key:"d34_v_jeudi" },
        { fr:"vendredi", en:"Friday", reg:null, say:"vendredi", key:"d34_v_vendredi" },
        { fr:"samedi", en:"Saturday", reg:null, say:"samedi", key:"d34_v_samedi" },
        { fr:"dimanche", en:"Sunday", reg:null, say:"dimanche", key:"d34_v_dimanche" }
      ],
      tip:"The French week starts on <b>lundi</b>, not Sunday — every French calendar and diary is laid out this way. Say them as a fixed, memorized loop, the same way you'd recite the alphabet."},
    { type:"vocab",
      eyebrow:"Le vocabulaire · horaires",
      h:"Ouvert, fermé, and the lunchtime pause",
      items:[
        { fr:"ouvert(e)", en:"open", reg:null, say:"ouvert", key:"d34_v_ouvert" },
        { fr:"fermé(e)", en:"closed", reg:null, say:"fermé", key:"d34_v_ferme" },
        { fr:"la pause déjeuner", en:"the lunch break (shops often close for it)", reg:null, say:"la pause déjeuner", key:"d34_v_pausedejeuner" },
        { fr:"fermé le dimanche", en:"closed on Sundays", reg:null, say:"fermé le dimanche", key:"d34_v_fermeledimanche" },
        { fr:"fermé le lundi", en:"closed on Mondays", reg:null, say:"fermé le lundi", key:"d34_v_fermelelundi" },
        { fr:"les horaires d'ouverture", en:"the opening hours", reg:null, say:"les horaires d'ouverture", key:"d34_v_horairesdouverture" },
        { fr:"Vous êtes ouverts le dimanche ?", en:"Are you open on Sundays?", reg:"formal", say:"Vous êtes ouverts le dimanche ?", key:"d34_v_vousetesouverts" },
        { fr:"Ça ferme à quelle heure ?", en:"What time does it close?", reg:null, say:"Ça ferme à quelle heure ?", key:"d34_v_cafermeaquelleheure" }
      ],
      tip:"Read a posted sign like <em>« Fermé le lundi »</em> as ‘Closed [every] Monday’, not ‘Closed this Monday’ — the bare day name (no <em>le</em>) is what you'd use for a one-off exception instead."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Checking a shop's hours",
      body:["A customer at the counter — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Excusez-moi, vous êtes ouverts le dimanche ?", en:"Excuse me, are you open on Sundays?", say:"Excusez-moi, vous êtes ouverts le dimanche ?", key:"d34_d1" },
        { who:"B", fr:"Non, nous sommes fermés le dimanche et le lundi.", en:"No, we're closed Sundays and Mondays.", say:"Non, nous sommes fermés le dimanche et le lundi.", key:"d34_d2" },
        { who:"A", fr:"D'accord. Et la pause déjeuner ?", en:"OK. And the lunch break?", say:"D'accord. Et la pause déjeuner ?", key:"d34_d3" },
        { who:"B", fr:"De midi à quatorze heures, nous fermons.", en:"From noon to 2pm, we close.", say:"De midi à quatorze heures, nous fermons.", key:"d34_d4" },
        { who:"A", fr:"Merci pour l'information !", en:"Thanks for the information!", say:"Merci pour l'information !", key:"d34_d5" }
      ],
      tip:"Note <em>quatorze heures</em> for 2pm, a straight callback to yesterday's-yesterday's 24-hour clock (day 30) — official-sounding hours are exactly how a real shopkeeper states them, even out loud."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The French week starts on…",
          opts:["dimanche","lundi","samedi","vendredi"], answer:1,
          ok:"Right — lundi (Monday), unlike the Sunday-first convention in some countries.",
          no:"<b>Lundi</b> — the French week starts on Monday, not Sunday." },
        { prompt:"A sign reads ‘Fermé le lundi’. That means…",
          opts:["closed this one Monday only","closed every Monday","closed all week","open only on Monday"], answer:1,
          ok:"Yes — le + day name = a recurring, every-week closure.",
          no:"<b>Closed every Monday</b> — the article le signals a weekly pattern, not a single date." },
        { prompt:"‘The lunch break’:",
          opts:["la pause déjeuner","le déjeuner pause","la pause du soir","le petit-déjeuner"], answer:0,
          ok:"Right — la pause déjeuner, the reason many small shops shut midday.",
          no:"<b>La pause déjeuner</b> — le petit-déjeuner is breakfast, a different meal entirely." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The fermeture culture: lunch, and Sundays",
      body:[
        "Plenty of small Paris businesses — boulangeries, boutiques, independent shops — close for lunch, typically <b>12h30 to 14h30</b>, and take one full day off each week, often (though not always) <b>lundi</b>. It's a real scheduling constraint for visitors: turning up at 1pm expecting a quick errand is a classic first-week surprise.",
        "<b>Dimanche</b> closures run deeper still: most small shops and many supermarkets shut for all or part of Sunday, though tourist-district exceptions exist. Even major museums pick a weekly closure — <b>the Louvre closes on Tuesdays</b>, the <b>Musée d'Orsay on Mondays</b> — so if a day trip has one non-negotiable stop, it's always worth checking <em>les horaires d'ouverture</em> first."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 34, done.",
      body:["You can now read any opening-hours sign in Paris without a surprise. Tomorrow we tie the whole week together."],
      next:"Jour 35 — Révision (week 5 review)"}
  ]
};

const LESSON_35 = {
  day: 35, week: 5,
  title: "Révision — la semaine 5",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — a day, start to finish",
      body:[
        "Retrieval day. One chained conversation that runs through an entire day — waking, sport, shopping, a closed door — six questions on the week's pressure points, then your due flashcards, now spanning five weeks.",
        "The week's real theme: French keeps time, routine, and the present moment in three separate small tools — the clock (two systems), the reflexive pronoun, and <em>être en train de</em> — instead of one grammatical tense doing everything."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A whole day, in one call",
      body:["Two friends catching up mid-afternoon — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Alors, ta journée ? Tu te lèves à quelle heure ?", en:"So, your day? What time do you get up?", say:"Alors, ta journée ? Tu te lèves à quelle heure ?", key:"d35_d1" },
        { who:"B", fr:"Je me lève à sept heures moins le quart. Puis je fais du sport.", en:"I get up at quarter to seven. Then I do sport.", say:"Je me lève à sept heures moins le quart. Puis je fais du sport.", key:"d35_d2" },
        { who:"A", fr:"Et maintenant, qu'est-ce que tu fais ?", en:"And right now, what are you doing?", say:"Et maintenant, qu'est-ce que tu fais ?", key:"d35_d3" },
        { who:"B", fr:"Je suis en train de faire les courses. Mais le magasin ferme à midi pour la pause déjeuner !", en:"I'm in the middle of grocery shopping. But the shop closes at noon for the lunch break!", say:"Je suis en train de faire les courses. Mais le magasin ferme à midi pour la pause déjeuner !", key:"d35_d4" },
        { who:"A", fr:"Ah oui, c'est vrai — fermé de midi à quatorze heures.", en:"Oh right, that's true — closed from noon to 2pm.", say:"Ah oui, c'est vrai — fermé de midi à quatorze heures.", key:"d35_d5" },
        { who:"B", fr:"Exactement. Et je me couche vers onze heures du soir, comme d'habitude.", en:"Exactly. And I go to bed around eleven at night, as usual.", say:"Exactement. Et je me couche vers onze heures du soir, comme d'habitude.", key:"d35_d6" }
      ],
      tip:"Every thread from the week fires here: telling time both ways, <em>se lever/se coucher</em>, <em>faire du sport/les courses</em>, <em>en train de</em>, and the fermeture reflex. <b>Comme d'habitude</b> = ‘as usual’ — a handy closer for any routine description."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 5 — the six that matter",
      questions:[
        { prompt:"‘Half past three’:",
          opts:["trois heures moins le quart","trois heures et quart","trois heures et demie","quatre heures et demie"], answer:2,
          ok:"Right — et demie = +30 minutes.",
          no:"<b>Trois heures et demie</b> — et demie always means half past." },
        { prompt:"‘We do’ (faire), pronounced with a schwa instead of è:",
          opts:["nous faisons","vous faites","ils font","je fais"], answer:0,
          ok:"Yes — nous faisons, /nu fə.zɔ̃/, French's one ai-as-schwa spot.",
          no:"<b>Nous faisons</b> — the ai reads as a plain schwa here, uniquely." },
        { prompt:"‘You (tu) get up’ — the matching reflexive pronoun:",
          opts:["me","te","se","vous"], answer:1,
          ok:"Right — tu te lèves.",
          no:"<b>Te</b> — the pronoun always tracks its own subject: tu goes with te." },
        { prompt:"<b>Être en train de</b> tells you an action is…",
          opts:["finished","about to start","happening right now","cancelled"], answer:2,
          ok:"Yes — mid-action, in progress this instant.",
          no:"<b>Happening right now</b> — French's substitute for the missing ‘-ing’ form." },
        { prompt:"The French week starts on…",
          opts:["dimanche","lundi","samedi","mardi"], answer:1,
          ok:"Right — lundi, always first on a French calendar.",
          no:"<b>Lundi</b> (Monday) — not Sunday." },
        { prompt:"A sign says ‘Fermé le dimanche’. It means…",
          opts:["closed one specific Sunday","closed every Sunday","open only Sunday","closed all week"], answer:1,
          ok:"Exactly — le + day = a standing, weekly closure.",
          no:"<b>Closed every Sunday</b> — a recurring weekly pattern, thanks to that little le." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Five weeks of vocabulary now feed this queue — greetings, identity, the café, the streets, and this week's clock and routine. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Five weeks: the honest audit",
      body:[
        "You can now tell the time two ways, describe your own routine reflexively, use faire for nearly any activity, flag what you're doing this exact moment, and read a French opening-hours sign without getting caught out by a locked door at lunchtime. Paired with weeks 1–4, that's greetings, identity, eating, getting around, and now the shape of an ordinary day — the real spine of independent daily life.",
        "The honest gap: everything so far lives in the present tense. You can describe today, but not yet recount yesterday or promise tomorrow — that's exactly what weeks 8 onward add (the passé composé, then the futur proche). For now, week 6 stays in the present and turns to something very Parisian: shopping, description, and how to say what something looks like."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 5 — complète.",
      body:["Thirty-five stations — nearly the halfway point of Block B and C combined. Next week: shopping, colors, sizes, and describing the things around you."],
      next:"Semaine 6, Jour 36 — Faire les magasins : ce, cet, cette, ces"}
  ]
};

export const WEEK5 = [LESSON_29, LESSON_30, LESSON_31, LESSON_32, LESSON_33, LESSON_34, LESSON_35];
