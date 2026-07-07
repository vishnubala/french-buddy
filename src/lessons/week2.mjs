/* Week 2 — Days 8–14. People & identity: avoir, -er verbs, negation,
   numbers 20–69, nationalities & professions, family. */

const LESSON_8 = {
  day: 8, week: 2,
  title: "Le R français + avoir",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The R, and your second big verb",
      body:[
        "Week 2 opens with the sound everyone worries about — the French R — and the verb that runs neck-and-neck with <b>être</b> for most useful: <b>avoir</b> (to have).",
        "Bonus payoff at the end: in French you don't <em>be</em> an age, you <em>have</em> one."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The R lives in your throat",
      body:["Forget the English r (tongue curled) and the Spanish r (tongue tapping). The French R is made at the <em>back</em> — a soft friction near where you gargle. Quiet, not dramatic:"],
      pairs:[
        { fr:"rue", ipa:"/ʁy/", en:"R + the day-1 ‘u’ — double challenge", say:"rue", key:"d08_rue" },
        { fr:"merci", ipa:"/mɛʁ.si/", en:"R in the middle — softer still", say:"merci", key:"d08_merci" },
        { fr:"Paris", ipa:"/pa.ʁi/", en:"light, almost breathed", say:"Paris", key:"d08_paris" }
      ],
      tip:"Trick: hold a ‘g’ position (back of tongue up) and breathe through it. A whispered gargle. Don't force it — a soft, lazy French R beats a strong wrong one, and natives will understand an English r fine while yours develops."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Avoir — the full set",
      items:[
        { fr:"J'ai", en:"I have", reg:null, say:"j'ai", key:"d08_v_jai" },
        { fr:"Tu as", en:"You have (informal)", reg:"informal", say:"tu as", key:"d08_v_tuas" },
        { fr:"Il a", en:"He has", reg:null, say:"il a", key:"d08_v_ila" },
        { fr:"Elle a", en:"She has", reg:null, say:"elle a", key:"d08_v_ellea" },
        { fr:"On a", en:"We have (everyday spoken)", reg:"informal", say:"on a", key:"d08_v_ona" },
        { fr:"Nous avons", en:"We have (careful / written)", reg:"formal", say:"nous avons", key:"d08_v_nousavons" },
        { fr:"Vous avez", en:"You have (formal or plural)", reg:"formal", say:"vous avez", key:"d08_v_vousavez" },
        { fr:"Ils ont", en:"They have", reg:null, say:"ils ont", key:"d08_v_ilsont" }
      ],
      tip:"Listen hard to <b>ils ont</b> /il-ZÕ/ — a Z liaison. Compare <b>ils sont</b> /il-SÕ/ (they are). One buzzing consonant is all that separates ‘they have’ from ‘they are’. This pair is a favorite exam trap for a reason."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At a birthday party",
      body:["Friends, so it's <b>tu</b> — and watch what verb French uses for age."],
      turns:[
        { who:"A", fr:"Joyeux anniversaire ! Tu as quel âge ?", en:"Happy birthday! How old are you?", say:"Joyeux anniversaire ! Tu as quel âge ?", key:"d08_d1" },
        { who:"B", fr:"Merci ! J'ai vingt ans.", en:"Thanks! I'm twenty.", say:"Merci ! J'ai vingt ans.", key:"d08_d2" },
        { who:"A", fr:"Et moi, j'ai dix-neuf ans.", en:"And me, I'm nineteen.", say:"Et moi, j'ai dix-neuf ans.", key:"d08_d3" },
        { who:"B", fr:"On a presque le même âge !", en:"We're almost the same age!", say:"On a presque le même âge !", key:"d08_d4" }
      ],
      tip:"Age uses <b>avoir</b>, never être: <b>J'ai vingt ans</b> — literally ‘I have twenty years’. Saying <em>je suis vingt</em> is the instant anglophone giveaway. Bonus liaisons: <b>vingt ans</b> /vɛ̃-TÃ/ (the t wakes up) and <b>dix-neuf ans</b> /diz-nœ-VÃ/ — the f of neuf turns into a v before <em>ans</em>."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I'm twenty years old’ in French:",
          opts:["Je suis vingt","J'ai vingt ans","Je suis vingt ans","J'ai vingt"], answer:1,
          ok:"Right — age is something you <b>have</b> in French, and <em>ans</em> is required.",
          no:"It's <b>J'ai vingt ans</b> — avoir, not être, and you can't drop <em>ans</em>." },
        { prompt:"Complete: <b>Vous ___ des croissants ?</b>",
          opts:["avez","êtes","as","ont"], answer:0,
          ok:"Yes — vous avez, with the liaison: vou-ZAVÉ.",
          no:"With <em>vous</em>, avoir gives <b>avez</b> — vou-ZAVÉ." },
        { prompt:"You hear /il-ZÕ/. That's…",
          opts:["ils sont (they are)","ils ont (they have)","il a (he has)","on a (we have)"], answer:1,
          ok:"Exactly — the Z liaison marks <b>ils ont</b>. /il-SÕ/ would be ils sont.",
          no:"The Z sound marks <b>ils ont</b> — ‘they have’. <em>Ils sont</em> has an S: /il-SÕ/." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"What you can ask, and when",
      body:[
        "<b>Tu as quel âge ?</b> is normal among young people and friends. With <b>vous</b> — colleagues, new acquaintances, anyone older — age is simply not asked; it reads as intrusive rather than friendly.",
        "The safe small-talk lanes in France: food, the neighborhood, travel, films, and cheerfully complaining about transport. Salary and money are near-taboo even among friends. When in doubt, ask about the food — it never fails."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 8, done.",
      body:["<b>Être</b> + <b>avoir</b> = the two pillars. Everything else in French verb-land leans on these."],
      next:"Jour 9 — Parler, habiter, travailler (-er verbs)"}
  ]
};

const LESSON_9 = {
  day: 9, week: 2,
  title: "Les verbes en -er",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"One pattern, thousands of verbs",
      body:[
        "Good news day: the vast majority of French verbs end in <b>-er</b> and all conjugate the same way. Learn the pattern once with <b>parler</b> (to speak), <b>habiter</b> (to live) and <b>travailler</b> (to work), and you own it forever.",
        "The catch is very French: most of the endings you'll <em>write</em> are inaudible."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three spellings, one sound",
      body:["Listen to these three forms of <em>parler</em>. On the page: different. In the ear: identical."],
      pairs:[
        { fr:"je parle", ipa:"/paʁl/", en:"-e — silent", say:"je parle", key:"d09_jeparle" },
        { fr:"tu parles", ipa:"/paʁl/", en:"-es — silent", say:"tu parles", key:"d09_tuparles" },
        { fr:"ils parlent", ipa:"/paʁl/", en:"-ent — completely silent!", say:"ils parlent", key:"d09_ilsparlent" }
      ],
      tip:"Of the six endings (-e, -es, -e, -ons, -ez, -ent), only <b>-ons</b> and <b>-ez</b> can be heard. That's why the pronoun matters so much in spoken French — it's often the only clue to who's doing what."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The pattern in action",
      items:[
        { fr:"parler", en:"to speak", reg:null, say:"parler", key:"d09_v_parler" },
        { fr:"Je parle français", en:"I speak French", reg:null, say:"Je parle français", key:"d09_v_jeparlefr" },
        { fr:"Vous parlez anglais ?", en:"Do you speak English?", reg:"formal", say:"Vous parlez anglais ?", key:"d09_v_vousparlez" },
        { fr:"habiter", en:"to live (somewhere)", reg:null, say:"habiter", key:"d09_v_habiter" },
        { fr:"J'habite à Paris", en:"I live in Paris", reg:null, say:"J'habite à Paris", key:"d09_v_jhabite" },
        { fr:"travailler", en:"to work", reg:null, say:"travailler", key:"d09_v_travailler" },
        { fr:"Je travaille ici", en:"I work here", reg:null, say:"Je travaille ici", key:"d09_v_jetravaille" },
        { fr:"On habite à Lyon", en:"We live in Lyon (everyday)", reg:"informal", say:"On habite à Lyon", key:"d09_v_onhabite" }
      ],
      tip:"<b>J'habite</b> — the h of <em>habiter</em> is completely silent, so <em>je</em> elides onto it exactly like day 6's apostrophes: <b>j'habite</b> /ʒa.bit/. French h is always silent; it exists only on paper."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"New neighbors in the hallway",
      body:["Strangers in the same building — <b>vous</b>, and lots of -er verbs."],
      turns:[
        { who:"A", fr:"Bonjour ! Vous habitez ici ?", en:"Hello! Do you live here?", say:"Bonjour ! Vous habitez ici ?", key:"d09_d1" },
        { who:"B", fr:"Oui, j'habite ici. Et vous ?", en:"Yes, I live here. And you?", say:"Oui, j'habite ici. Et vous ?", key:"d09_d2" },
        { who:"A", fr:"Moi aussi ! Vous travaillez à Paris ?", en:"Me too! Do you work in Paris?", say:"Moi aussi ! Vous travaillez à Paris ?", key:"d09_d3" },
        { who:"B", fr:"Oui. Et vous, vous parlez très bien français !", en:"Yes. And you — you speak French very well!", say:"Oui. Et vous, vous parlez très bien français !", key:"d09_d4" },
        { who:"A", fr:"Merci, j'apprends !", en:"Thanks, I'm learning!", say:"Merci, j'apprends !", key:"d09_d5" }
      ],
      tip:"<b>Moi aussi</b> = me too. <b>Et vous, vous…</b> — doubling the pronoun for emphasis again, just like <em>moi, je</em>. And <b>j'apprends</b> (‘I'm learning’) — grab it as a chunk; it buys enormous goodwill."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>J'habite ___ Marseille.</b>",
          opts:["à","de","le","en"], answer:0,
          ok:"Right — <b>à</b> + city: à Paris, à Lyon, à Marseille.",
          no:"Cities take <b>à</b>: j'habite à Marseille." },
        { prompt:"<b>tu parles</b> and <b>ils parlent</b> sound…",
          opts:["completely different","identical","different only in liaison","like parlez"], answer:1,
          ok:"Yes — both are just /paʁl/. The endings live only on paper.",
          no:"Identical — /paʁl/ both times. -es and -ent are silent." },
        { prompt:"‘We live here’, everyday spoken French:",
          opts:["Nous habiter ici","On habite ici","Ils habitent ici","Vous habitez ici"], answer:1,
          ok:"Exactly — <b>on</b> + third-person verb form, the spoken ‘we’.",
          no:"Everyday speech says <b>on habite ici</b> — on takes the same form as il/elle." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The ‘rude Parisian’ myth, tested",
      body:[
        "Here's the honest version: lead with English and skip the rituals, and interactions in Paris can indeed run cold — you've skipped the <em>bonjour</em>, the <em>vous</em>, the whole social handshake. That's most of the myth right there.",
        "Lead with <b>Bonjour</b>, attempt a sentence, deploy <b>j'apprends</b> when you stall — and most people soften visibly, often switching to their best English to help you. The effort is the currency; fluency isn't required."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 9, done.",
      body:["One pattern, thousands of verbs unlocked. You can now say what you speak, where you live, and where you work."],
      next:"Jour 10 — Vingt et un… soixante-neuf (numbers to 69)"}
  ]
};

const LESSON_10 = {
  day: 10, week: 2,
  title: "Les nombres 20–69",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The regular decades",
      body:[
        "From 20 to 69, French numbers behave: tens plus units, snapped together with a hyphen. Today you claim that whole stretch — enough for prices, ages, addresses, and phone numbers.",
        "Enjoy the regularity. It's the calm before week 3's <em>soixante-dix</em>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Number sounds worth isolating",
      body:["Two patterns and one revived consonant:"],
      pairs:[
        { fr:"vingt et un", ipa:"/vɛ̃.te.œ̃/", en:"the silent t of vingt comes alive in 21", say:"vingt et un", key:"d10_vingtetun" },
        { fr:"trente", ipa:"/tʁɑ̃t/", en:"nasal /ɑ̃/ + your new R", say:"trente", key:"d10_trente" },
        { fr:"soixante", ipa:"/swa.sɑ̃t/", en:"oi = /wa/ — always", say:"soixante", key:"d10_soixante" }
      ],
      tip:"<b>oi</b> spells /wa/ everywhere in French: tr<b>oi</b>s, m<b>oi</b>, s<b>oi</b>xante, au rev<b>oi</b>r. One of the few spelling rules with no exceptions worth knowing."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The decades, 21 to 69",
      items:[
        { fr:"vingt et un", en:"21", reg:null, say:"vingt et un", key:"d10_v_21" },
        { fr:"vingt-deux", en:"22", reg:null, say:"vingt-deux", key:"d10_v_22" },
        { fr:"trente", en:"30", reg:null, say:"trente", key:"d10_v_30" },
        { fr:"quarante", en:"40", reg:null, say:"quarante", key:"d10_v_40" },
        { fr:"cinquante", en:"50", reg:null, say:"cinquante", key:"d10_v_50" },
        { fr:"soixante", en:"60", reg:null, say:"soixante", key:"d10_v_60" },
        { fr:"soixante-cinq", en:"65", reg:null, say:"soixante-cinq", key:"d10_v_65" },
        { fr:"soixante-neuf", en:"69 — the last ‘easy’ number", reg:null, say:"soixante-neuf", key:"d10_v_69" }
      ],
      tip:"Pattern: ten + hyphen + unit (<b>quarante-trois</b> = 43). The odd one out: numbers ending in 1 use <b>et</b> — vingt <b>et</b> un, trente <b>et</b> un, up through soixante <b>et</b> un. After 69, the rules change. Next week."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Swapping phone numbers",
      body:["Friends — <b>tu</b> — and the very French ritual of reading numbers in pairs."],
      turns:[
        { who:"A", fr:"Tu as un numéro de téléphone ?", en:"Do you have a phone number?", say:"Tu as un numéro de téléphone ?", key:"d10_d1" },
        { who:"B", fr:"Oui ! C'est le zéro six, douze, trente-quatre, cinquante-six, quarante-huit.", en:"Yes! It's 06 12 34 56 48.", say:"Oui ! C'est le zéro six, douze, trente-quatre, cinquante-six, quarante-huit.", key:"d10_d2" },
        { who:"A", fr:"Zéro six, douze, trente-quatre, cinquante-six, quarante-huit ?", en:"06 12 34 56 48?", say:"Zéro six, douze, trente-quatre, cinquante-six, quarante-huit ?", key:"d10_d3" },
        { who:"B", fr:"C'est ça !", en:"That's it!", say:"C'est ça !", key:"d10_d4" }
      ],
      tip:"French phone numbers are ten digits read as <b>five pairs</b> — never digit by digit. Repeating the number back, as A does, is standard and appreciated. <b>C'est ça</b> = ‘that's right’, one of the most useful confirmations in the language."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"45 in French:",
          opts:["quatre-cinq","quarante-cinq","cinquante-quatre","quatorze-cinq"], answer:1,
          ok:"Right — quarante (40) + cinq (5), hyphenated.",
          no:"It's <b>quarante-cinq</b> — the ten, a hyphen, the unit." },
        { prompt:"Which number uses <b>et</b>?",
          opts:["vingt-deux","trente et un","soixante-cinq","quarante-huit"], answer:1,
          ok:"Yes — only the X1 numbers get <em>et</em>: trente <b>et</b> un.",
          no:"Only numbers ending in 1 take <b>et</b>: trente <b>et</b> un." },
        { prompt:"You hear <b>« soixante-deux »</b>. The digit display reads…",
          opts:["52","62","72","26"], answer:1,
          ok:"Exactly — soixante (60) + deux = 62.",
          no:"Soixante is 60, so soixante-deux = <b>62</b>." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Le zéro six",
      body:[
        "French mobile numbers start with <b>06</b> or <b>07</b> — so much so that <em>« ton zéro six »</em> is slang for ‘your number’. Landlines start 01–05 by region (01 is Paris and its suburbs).",
        "Texting is <b>un texto</b> or <b>un SMS</b>, and yes — the French answer unknown calls warily and screen aggressively, just like everyone else. Getting someone's zéro six means the conversation went well."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 10, done.",
      body:["Sixty-nine numbers under your belt and a phone-number ritual mastered. The scenic route to 70 begins next week — you're ready for it."],
      next:"Jour 11 — Ne… pas (saying no, properly and casually)"}
  ]
};

const LESSON_11 = {
  day: 11, week: 2,
  title: "La négation : ne… pas",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Saying what you don't",
      body:[
        "Negation in French is a sandwich: <b>ne</b> + verb + <b>pas</b>. Simple — on paper. In real speech, the <em>ne</em> quietly disappears, and today you learn both versions on purpose.",
        "You also collect the survival phrases that make every hard conversation easier: <em>I don't know, I don't understand.</em>"
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The incredible shrinking ne",
      body:["Same meaning, two registers. Hear the middle drop out:"],
      pairs:[
        { fr:"je ne parle pas", ipa:"/ʒə nə paʁl pa/", en:"full form — careful speech, writing", say:"je ne parle pas", key:"d11_full" },
        { fr:"je parle pas", ipa:"/ʒpaʁl pa/", en:"everyday speech — ne is gone", say:"je parle pas", key:"d11_dropped" },
        { fr:"je ne sais pas", ipa:"/ʒən sɛ pa/", en:"‘I don't know’ — often just ‘chais pas’", say:"je ne sais pas", key:"d11_jesaispas" }
      ],
      tip:"In casual spoken French the <b>ne</b> drops constantly — from everyone, including newsreaders off-air. <b>Pas</b> is the real negator; <em>ne</em> is the formal escort. Understand both; <em>write</em> the full form."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The negative toolkit",
      items:[
        { fr:"ne… pas", en:"not (the sandwich)", reg:null, say:"ne, pas", key:"d11_v_nepas" },
        { fr:"Je ne sais pas", en:"I don't know", reg:null, say:"Je ne sais pas", key:"d11_v_jenesaispas" },
        { fr:"Je ne comprends pas", en:"I don't understand", reg:null, say:"Je ne comprends pas", key:"d11_v_jenecomprends" },
        { fr:"Je ne parle pas anglais", en:"I don't speak English", reg:null, say:"Je ne parle pas anglais", key:"d11_v_jeneparlepas" },
        { fr:"Pas de problème", en:"No problem", reg:null, say:"Pas de problème", key:"d11_v_pasdeprobleme" },
        { fr:"Pas encore", en:"Not yet", reg:null, say:"Pas encore", key:"d11_v_pasencore" },
        { fr:"Moi non plus", en:"Me neither", reg:null, say:"Moi non plus", key:"d11_v_moinonplus" },
        { fr:"Pourquoi pas ?", en:"Why not?", reg:null, say:"Pourquoi pas ?", key:"d11_v_pourquoipas" }
      ],
      tip:"<b>Je ne comprends pas</b> is the single highest-value sentence in this course. Pair it with <b>Parlez lentement, s'il vous plaît</b> (‘speak slowly, please’) and you can survive any conversation by controlling its speed."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A tourist, a local, no shared language",
      body:["Strangers — <b>vous</b> — and negation doing honest work."],
      turns:[
        { who:"A", fr:"Excusez-moi, vous parlez anglais ?", en:"Excuse me, do you speak English?", say:"Excusez-moi, vous parlez anglais ?", key:"d11_d1" },
        { who:"B", fr:"Non, désolé, je ne parle pas anglais.", en:"No, sorry, I don't speak English.", say:"Non, désolé, je ne parle pas anglais.", key:"d11_d2" },
        { who:"A", fr:"Pas de problème ! Euh… le métro ?", en:"No problem! Uh… the metro?", say:"Pas de problème ! Euh… le métro ?", key:"d11_d3" },
        { who:"B", fr:"Ah ! C'est là-bas.", en:"Ah! It's over there.", say:"Ah ! C'est là-bas.", key:"d11_d4" },
        { who:"A", fr:"Merci beaucoup !", en:"Thank you very much!", say:"Merci beaucoup !", key:"d11_d5" }
      ],
      tip:"Notice A's strategy when words run out: one noun plus rising intonation — <b>le métro ?</b> — and it works. <b>Là-bas</b> = over there. Communication first, grammar second; the grammar catches up."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Full written negation of <b>Je travaille</b>:",
          opts:["Je pas travaille","Je ne travaille pas","Ne je travaille pas","Je travaille ne pas"], answer:1,
          ok:"Right — the sandwich: ne + verb + pas.",
          no:"The verb goes inside the sandwich: <b>Je ne travaille pas.</b>" },
        { prompt:"You hear <b>« je sais pas »</b>. What's going on?",
          opts:["It's a grammar mistake","It's normal spoken French, ne dropped","It means ‘I know’","It's Canadian French only"], answer:1,
          ok:"Exactly — everyday speech drops the ne. Fine to say, not to write.",
          no:"It's completely normal <b>spoken</b> French — the ne drops in casual speech everywhere in France." },
        { prompt:"‘I don't understand’:",
          opts:["Je ne sais pas","Je ne comprends pas","Je ne parle pas","Pas encore"], answer:1,
          ok:"Yes — your highest-value sentence. Deploy freely.",
          no:"That's <b>Je ne comprends pas</b> — je ne sais pas is ‘I don't know’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Why textbooks lie about ne",
      body:[
        "Every French textbook drills the full <b>ne… pas</b>; almost no French person says it in relaxed conversation. Both are right: the full form is what French people <em>write</em> and expect in careful contexts; the dropped form is what they <em>say</em>. Learners who know only the textbook version understand slower than they should.",
        "This course teaches you the full form for your mouth and pen, and the short form for your ears. When a Parisian fires <b>« chais pas »</b> at you, you'll recognize <em>je ne sais pas</em> hiding inside it."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 11, done.",
      body:["You can now say no, refuse politely, and — crucially — control the speed of any conversation."],
      next:"Jour 12 — Étudiant, médecin… (professions & nationalities)"}
  ]
};

const LESSON_12 = {
  day: 12, week: 2,
  title: "Professions & nationalités",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Who you are, on paper and at dinner",
      body:[
        "Today: saying what you do and where you're from — with the two traps that catch every anglophone. One is a missing article. The other is a consonant that appears out of nowhere.",
        "Both are fixable today, permanently."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The feminine wakes the consonant — again",
      body:["Day 2's rule (<em>petit/petite</em>) scales to people. The feminine <b>-e</b> switches on the final consonant — and sometimes changes it:"],
      pairs:[
        { fr:"étudiant", ipa:"/e.ty.djɑ̃/", en:"male student — ends on the nasal", say:"étudiant", key:"d12_etudiant" },
        { fr:"étudiante", ipa:"/e.ty.djɑ̃t/", en:"female student — the t appears", say:"étudiante", key:"d12_etudiante" },
        { fr:"française", ipa:"/fʁɑ̃.sɛz/", en:"the silent s returns as /z/!", say:"française", key:"d12_francaise" }
      ],
      tip:"<b>Français</b> /sɛ/ → <b>française</b> /sɛz/ — the feminine doesn't just revive the s, it voices it into a z. Your ear can now sex-type most adjectives without seeing the spelling."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Jobs and origins",
      items:[
        { fr:"étudiant / étudiante", en:"student", reg:null, say:"étudiant, étudiante", key:"d12_v_etudiant" },
        { fr:"médecin", en:"doctor", reg:null, say:"médecin", key:"d12_v_medecin" },
        { fr:"professeur(e)", en:"teacher", reg:null, say:"professeur", key:"d12_v_professeur" },
        { fr:"ingénieur / ingénieure", en:"engineer", reg:null, say:"ingénieur", key:"d12_v_ingenieur" },
        { fr:"serveur / serveuse", en:"waiter / waitress", reg:null, say:"serveur, serveuse", key:"d12_v_serveur" },
        { fr:"américain / américaine", en:"American", reg:null, say:"américain, américaine", key:"d12_v_americain" },
        { fr:"espagnol / espagnole", en:"Spanish", reg:null, say:"espagnol, espagnole", key:"d12_v_espagnol" },
        { fr:"allemand / allemande", en:"German", reg:null, say:"allemand, allemande", key:"d12_v_allemand" }
      ],
      tip:"THE trap: professions after être take <b>no article</b>. <b>Je suis médecin</b>, never <em>je suis un médecin</em>. English demands the ‘a’; French forbids it. Also: nationality adjectives are lowercase (<em>il est français</em>) — capitals only for the person as a noun (<em>un Français</em>)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At a dinner party",
      body:["Adults meeting for the first time — <b>vous</b> — and the classic question."],
      turns:[
        { who:"A", fr:"Qu'est-ce que vous faites dans la vie ?", en:"What do you do for a living?", say:"Qu'est-ce que vous faites dans la vie ?", key:"d12_d1" },
        { who:"B", fr:"Je suis ingénieure. Et vous ?", en:"I'm an engineer. And you?", say:"Je suis ingénieure. Et vous ?", key:"d12_d2" },
        { who:"A", fr:"Moi, je suis professeur d'anglais.", en:"Me, I'm an English teacher.", say:"Moi, je suis professeur d'anglais.", key:"d12_d3" },
        { who:"B", fr:"Ah, vous êtes anglais ?", en:"Oh, are you English?", say:"Ah, vous êtes anglais ?", key:"d12_d4" },
        { who:"A", fr:"Non, je suis américain !", en:"No, I'm American!", say:"Non, je suis américain !", key:"d12_d5" }
      ],
      tip:"<b>Qu'est-ce que vous faites dans la vie ?</b> — ‘what do you do in life?’ — is <em>the</em> profession question. Learn it as one chunk (the verb <em>faire</em> gets its full lesson in week 5). Note B: <em>ingénieure</em> with the feminine -e, standard in France today."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘She is a doctor’:",
          opts:["Elle est une médecin","Elle est médecin","Elle a médecin","Elle est la médecin"], answer:1,
          ok:"Right — no article after être with professions. The English ‘a’ stays home.",
          no:"<b>Elle est médecin</b> — professions after être take no article in French." },
        { prompt:"The feminine of <b>étudiant</b> sounds different because…",
          opts:["the stress moves","the final t is pronounced","the é changes","it doesn't sound different"], answer:1,
          ok:"Exactly — étudiant /djɑ̃/ → étudiante /djɑ̃t/. The -e switches the t on.",
          no:"The feminine -e activates the final consonant: étudian<b>te</b> /djɑ̃t/." },
        { prompt:"Written correctly:",
          opts:["Il est Français","il est français","Il est français","both B and C"], answer:3,
          ok:"Yes — the adjective is lowercase; capitalize only the noun (un Français).",
          no:"Nationality <em>adjectives</em> are lowercase: <b>il est français</b>. Capital F only for the noun." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Jobs at the dinner table",
      body:[
        "<b>Qu'est-ce que vous faites dans la vie ?</b> is common, but the job answer carries less identity-weight than in the US — French dinner conversation drifts faster toward food, films, politics, and ideas than toward careers. Nobody will ask what you earn; that stays private even among friends.",
        "A useful consequence for learners: you can hold your own at a French table with opinions about cheese long before you can discuss your industry. Prioritize accordingly."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 12, done.",
      body:["Identity complete: name, age, origin, profession — all in correct, article-free French."],
      next:"Jour 13 — La famille (+ il y a, est-ce que)"}
  ]
};

const LESSON_13 = {
  day: 13, week: 2,
  title: "La famille + il y a",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Family — and the glue words",
      body:[
        "Family vocabulary today, plus two structural gifts: <b>il y a</b> (‘there is / there are’ — one form for both) and <b>est-ce que</b>, the universal question-maker you bolt onto any sentence.",
        "And the week's phonics thread pays off: family talk is liaison territory."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Liaison, properly this time",
      body:["When a silent final consonant meets a vowel, it wakes up and jumps to the next word. You've heard it all week — now isolate it:"],
      pairs:[
        { fr:"les enfants", ipa:"/le.zɑ̃.fɑ̃/", en:"lé-ZENFANTS — the s becomes z", say:"les enfants", key:"d13_lesenfants" },
        { fr:"un enfant", ipa:"/œ̃.nɑ̃.fɑ̃/", en:"un-NENFANT — the n carries over", say:"un enfant", key:"d13_unenfant" },
        { fr:"deux ans", ipa:"/dø.zɑ̃/", en:"deu-ZANS — numbers liaise too", say:"deux ans", key:"d13_deuxans" }
      ],
      tip:"Liaison isn't decoration — without it you'll <em>hear</em> word boundaries in the wrong places. /le.zɑ̃.fɑ̃/ sounds like ‘lé-zenfant’, and beginners hunt for a word ‘zenfant’ that doesn't exist. Now you know where the z comes from."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The family, gendered as always",
      items:[
        { fr:"le père", en:"the father", reg:null, say:"le père", key:"d13_v_pere" },
        { fr:"la mère", en:"the mother", reg:null, say:"la mère", key:"d13_v_mere" },
        { fr:"le frère", en:"the brother", reg:null, say:"le frère", key:"d13_v_frere" },
        { fr:"la sœur", en:"the sister", reg:null, say:"la sœur", key:"d13_v_soeur" },
        { fr:"le fils", en:"the son", reg:null, say:"le fils", key:"d13_v_fils" },
        { fr:"la fille", en:"the daughter / the girl", reg:null, say:"la fille", key:"d13_v_fille" },
        { fr:"un enfant / des enfants", en:"a child / children", reg:null, say:"un enfant, des enfants", key:"d13_v_enfant" },
        { fr:"Est-ce que… ?", en:"question starter (‘is it that…?’)", reg:null, say:"Est-ce que", key:"d13_v_estceque" }
      ],
      tip:"Two traps in one list: <b>le fils</b> breaks the silent-s rule — it's /fis/, s fully pronounced (silent, it would collide with <em>le fil</em>, the thread). And <b>la fille</b> means both ‘daughter’ and ‘girl’; context sorts it, always."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Showing photos",
      body:["Friends — <b>tu</b> — talking family. Watch negation change <em>un/des</em> into <em>de</em>."],
      turns:[
        { who:"A", fr:"Tu as des frères et sœurs ?", en:"Do you have brothers and sisters?", say:"Tu as des frères et sœurs ?", key:"d13_d1" },
        { who:"B", fr:"Oui, j'ai un frère et deux sœurs. Et toi ?", en:"Yes, I have a brother and two sisters. And you?", say:"Oui, j'ai un frère et deux sœurs. Et toi ?", key:"d13_d2" },
        { who:"A", fr:"Moi, je n'ai pas de frères. Mais on est cinq dans la famille.", en:"Me, I don't have brothers. But we're five in the family.", say:"Moi, je n'ai pas de frères. Mais on est cinq dans la famille.", key:"d13_d3" },
        { who:"B", fr:"Cinq ! Est-ce qu'il y a des enfants ?", en:"Five! Are there children?", say:"Cinq ! Est-ce qu'il y a des enfants ?", key:"d13_d4" },
        { who:"A", fr:"Oui, il y a deux enfants.", en:"Yes, there are two children.", say:"Oui, il y a deux enfants.", key:"d13_d5" }
      ],
      tip:"Grammar gold in turn 3: after <b>pas</b>, the articles <em>un/une/des</em> collapse to <b>de</b> — <em>j'ai un frère</em> but <em>je n'ai pas <b>de</b> frère</em>. And <b>on est cinq</b> — ‘we are five’ — is exactly how the French count their household."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>___ mère et ___ père</b>",
          opts:["le / la","la / le","les / les","la / la"], answer:1,
          ok:"Right — la mère (f), le père (m).",
          no:"<b>La</b> mère, <b>le</b> père — the family comes pre-gendered." },
        { prompt:"Negate: <b>J'ai des sœurs</b> →",
          opts:["Je n'ai pas des sœurs","Je n'ai pas de sœurs","Je ne pas ai des sœurs","Je n'ai de sœurs pas"], answer:1,
          ok:"Yes — after pas, <em>des</em> becomes <b>de</b>.",
          no:"After <b>pas</b>, un/une/des all become <b>de</b>: je n'ai pas <b>de</b> sœurs." },
        { prompt:"<b>Les enfants</b> is pronounced…",
          opts:["lé enfant (pause between)","lé-ZENFANT (liaison)","less-enfants","lé-SENFANT"], answer:1,
          ok:"Exactly — the silent s revives as /z/ and glues on. Liaison.",
          no:"Liaison: the s becomes /z/ and joins the next word — lé-ZENFANT." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Family talk — the warm channel",
      body:[
        "Where salary is taboo and age is delicate, family is warm, safe conversational ground in France. <b>Tu as des frères et sœurs ?</b> is a genuinely friendly question, and showing phone photos of children or the family dog is universal social currency.",
        "The phrase to steal: <b>On est cinq</b> — counting the household with <em>on être + number</em>. It's compact, idiomatic, and instantly native-sounding compared to the textbook workaround."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 13, done.",
      body:["Family, existence (<b>il y a</b>), and a universal question-maker. Tomorrow we consolidate the whole week."],
      next:"Jour 14 — Révision (week 2 review)"}
  ]
};

const LESSON_14 = {
  day: 14, week: 2,
  title: "Révision — la semaine 2",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation day",
      body:[
        "No new material — retrieval only. One long dialogue that chains everything from the last two weeks, six questions on the week's pressure points, and your due flashcards.",
        "Whatever wobbles today is tomorrow's free win: the schedule will bring it back."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Two weeks in one conversation",
      body:["A party, two strangers your age — <b>tu</b> throughout. Introductions, -er verbs, est-ce que, casual negation, languages, age. Full speed first; 🐢 without shame."],
      turns:[
        { who:"A", fr:"Salut ! Moi, c'est Hugo. Et toi ?", en:"Hi! I'm Hugo. And you?", say:"Salut ! Moi, c'est Hugo. Et toi ?", key:"d14_d1" },
        { who:"B", fr:"Salut ! Je m'appelle Aïcha. Tu habites ici ?", en:"Hi! My name's Aïcha. Do you live here?", say:"Salut ! Je m'appelle Aïcha. Tu habites ici ?", key:"d14_d2" },
        { who:"A", fr:"Oui, j'habite ici. Et je travaille à Paris.", en:"Yes, I live here. And I work in Paris.", say:"Oui, j'habite ici. Et je travaille à Paris.", key:"d14_d3" },
        { who:"B", fr:"Est-ce que tu parles anglais ?", en:"Do you speak English?", say:"Est-ce que tu parles anglais ?", key:"d14_d4" },
        { who:"A", fr:"Non, je parle pas anglais. Mais je parle espagnol !", en:"No, I don't speak English. But I speak Spanish!", say:"Non, je parle pas anglais. Mais je parle espagnol !", key:"d14_d5" },
        { who:"B", fr:"Moi aussi ! Tu as quel âge ?", en:"Me too! How old are you?", say:"Moi aussi ! Tu as quel âge ?", key:"d14_d6" },
        { who:"A", fr:"J'ai vingt-quatre ans. Et toi ?", en:"I'm twenty-four. And you?", say:"J'ai vingt-quatre ans. Et toi ?", key:"d14_d7" },
        { who:"B", fr:"Vingt-neuf.", en:"Twenty-nine.", say:"Vingt-neuf.", key:"d14_d8" }
      ],
      tip:"Turn 5 is the week in miniature: <b>je parle pas</b> — casual negation, ne dropped, exactly as taught. Hugo isn't making a mistake; he's speaking normal French at a party."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 2 — the six that matter",
      questions:[
        { prompt:"Complete: <b>J' ___ vingt ans.</b>",
          opts:["suis","ai","as","est"], answer:1,
          ok:"Right — age takes avoir: j'ai vingt ans.",
          no:"Age uses <b>avoir</b>: j'<b>ai</b> vingt ans." },
        { prompt:"<b>« Je parle pas »</b> is…",
          opts:["a grammar error","normal spoken French","only written French","Canadian only"], answer:1,
          ok:"Yes — spoken French drops ne routinely. Write the full form; expect to hear this one.",
          no:"It's <b>normal spoken French</b> — the ne drops in casual speech." },
        { prompt:"‘He is an engineer’:",
          opts:["Il est un ingénieur","Il est ingénieur","Il a ingénieur","Il est l'ingénieur"], answer:1,
          ok:"Right — no article with professions after être.",
          no:"<b>Il est ingénieur</b> — the article stays home with professions." },
        { prompt:"51 in French:",
          opts:["cinquante-un","cinq et un","cinquante et un","soixante et un"], answer:2,
          ok:"Yes — X1 numbers take et: cinquante <b>et</b> un.",
          no:"Numbers ending in 1 use <b>et</b>: cinquante <b>et</b> un." },
        { prompt:"Negate: <b>Il y a des enfants</b> →",
          opts:["Il n'y a pas des enfants","Il n'y a pas d'enfants","Il y a pas de enfants","Il n'y pas a des enfants"], answer:1,
          ok:"Exactly — pas + vowel gives <b>d'</b>: pas d'enfants.",
          no:"After pas, des → de, and de + vowel elides: pas <b>d'</b>enfants." },
        { prompt:"You hear /il-SÕ/ then /il-ZÕ/. In order:",
          opts:["ils ont, ils sont","ils sont, ils ont","il a, ils ont","ils sont, ils sont"], answer:1,
          ok:"Right — S = sont (are), Z = ont (have). Your ear is doing grammar now.",
          no:"/S/ marks ils <b>sont</b>, the /Z/ liaison marks ils <b>ont</b>." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Everything the schedule says is about to fade — from both weeks now. Honest grades only; a missed card just returns sooner."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Two weeks: the honest audit",
      body:[
        "You now hold roughly 140 words and phrases, three verb systems (<b>être</b>, <b>avoir</b>, all of <b>-er</b>), negation in both registers, numbers to 69, and enough pragmatics to enter, navigate, and exit a French interaction without friction.",
        "The honest gap: your listening still trails your reading — everyone's does at this stage. The fix is volume, not cleverness: replay the dialogues at full speed until the 🐢 feels unnecessary. Week 3 moves you into the café, where the listening gets real."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 2 — complète.",
      body:["Fourteen stations. Next week: ordering at the café, the partitive, and — courage — <b>soixante-dix</b>."],
      next:"Semaine 3, Jour 15 — Au café : je voudrais…"}
  ]
};

export const WEEK2 = [LESSON_8, LESSON_9, LESSON_10, LESSON_11, LESSON_12, LESSON_13, LESSON_14];
