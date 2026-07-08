/* Week 8 — Days 50–56. THE FIRST A2 WEEK. Talking about the past (I): the
   passé composé with the auxiliary AVOIR, built deliberately across the
   whole week rather than crammed into one lesson — the concept + -er
   participles (day 50), the full avoir paradigm + -ir participles (51), the
   high-frequency irregular participles (52), negation (53), questions +
   weekend vocab (54), recounting a weekend (55), review (56).

   SCOPE DISCIPLINE (curriculum-spec.md §3): this week is AVOIR ONLY. The
   être-auxiliary verbs (je suis allé) and participle-agreement, plus the
   full d'abord/ensuite/enfin sequencing set, all belong to WEEK 9 — they are
   deliberately held back here, and flagged as "next week" in the tips. */

const LESSON_50 = {
  day: 50, week: 8,
  title: "Le passé composé : hier, j'ai mangé",
  durationMin: 20,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The past tense arrives",
      body:[
        "Everything so far has been the present. Today the line crosses into A2 with the tense that lets you finally say what you <em>did</em>: the <b>passé composé</b>. It's built from two pieces — the verb <b>avoir</b> (which you've had since week 2) plus a <b>past participle</b>.",
        "This is the biggest single step in the course, so it's spread across the whole week. Today: the formula, and the participle of the huge <b>-er</b> group — <em>manger → mangé</em>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"-é, -er, -ez: three spellings, one sound",
      body:["The trap that defines this week — the participle, the infinitive, and the vous form all sound identical:"],
      pairs:[
        { fr:"j'ai mangé", ipa:"/ʒe mɑ̃.ʒe/", en:"the past participle: -é = /e/", say:"j'ai mangé", key:"d50_jaimange" },
        { fr:"manger", ipa:"/mɑ̃.ʒe/", en:"the infinitive: -er = the very same /e/", say:"manger", key:"d50_manger" },
        { fr:"vous mangez", ipa:"/vu mɑ̃.ʒe/", en:"the vous form: -ez = /e/ again, identical", say:"vous mangez", key:"d50_mangez" }
      ],
      tip:"<b>mangé</b>, <b>manger</b>, <b>mangez</b> are pronounced <em>exactly</em> the same — /mɑ̃.ʒe/ — and only spelling and grammar tell them apart. This is the single most common spelling error in written French, native speakers included. For now, know that a past participle <em>sounds</em> like the infinitive: if you can say the -er verb, you can say its participle."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"avoir + a past participle",
      items:[
        { fr:"le passé composé", en:"the (compound) past tense", reg:null, say:"le passé composé", key:"d50_v_passecompose" },
        { fr:"hier", en:"yesterday", reg:null, say:"hier", key:"d50_v_hier" },
        { fr:"hier soir", en:"last night / yesterday evening", reg:null, say:"hier soir", key:"d50_v_hiersoir" },
        { fr:"j'ai mangé", en:"I ate / I have eaten", reg:null, say:"j'ai mangé", key:"d50_v_jaimange" },
        { fr:"tu as parlé", en:"you spoke (informal)", reg:"informal", say:"tu as parlé", key:"d50_v_tuasparle" },
        { fr:"il a regardé", en:"he watched", reg:null, say:"il a regardé", key:"d50_v_ilaregarde" },
        { fr:"j'ai travaillé", en:"I worked", reg:null, say:"j'ai travaillé", key:"d50_v_jaitravaille" },
        { fr:"j'ai écouté", en:"I listened", reg:null, say:"j'ai écouté", key:"d50_v_jaiecoute" }
      ],
      tip:"The formula: <b>avoir</b> in the present (j'ai, tu as, il a…) + the <b>past participle</b>. For every regular -er verb, the participle is the stem + <b>-é</b>: <em>parler → parlé</em>, <em>regarder → regardé</em>, <em>travailler → travaillé</em> — the -er verbs from week 2, now in the past. One French tense covers both English pasts: <em>j'ai mangé</em> = ‘I ate’ AND ‘I have eaten’."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"How was last night?",
      body:["Two friends the morning after — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Salut ! Tu as passé une bonne soirée hier ?", en:"Hi! Did you have a good evening yesterday?", say:"Salut ! Tu as passé une bonne soirée hier ?", key:"d50_d1" },
        { who:"B", fr:"Oui ! J'ai mangé au restaurant avec Léa.", en:"Yes! I ate at the restaurant with Léa.", say:"Oui ! J'ai mangé au restaurant avec Léa.", key:"d50_d2" },
        { who:"A", fr:"Sympa ! Moi, j'ai travaillé, et après j'ai regardé un film.", en:"Nice! Me, I worked, and afterwards I watched a film.", say:"Sympa ! Moi, j'ai travaillé, et après j'ai regardé un film.", key:"d50_d3" },
        { who:"B", fr:"Un film ? Tu as aimé ?", en:"A film? Did you like it?", say:"Un film ? Tu as aimé ?", key:"d50_d4" },
        { who:"A", fr:"Beaucoup !", en:"A lot!", say:"Beaucoup !", key:"d50_d5" }
      ],
      tip:"Every past verb here is <em>avoir</em> + an -é participle: <b>tu as passé</b>, <b>j'ai mangé</b>, <b>j'ai travaillé</b>, <b>j'ai regardé</b>, <b>tu as aimé</b>. <em>Passer une soirée</em> = to spend an evening; <em>après</em> (afterwards) is the same little word from week 4's directions."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The passé composé is built from…",
          opts:["être + an adjective","avoir + a past participle","two verbs in the present","just the infinitive"], answer:1,
          ok:"Right — (this week) avoir in the present + a past participle.",
          no:"<b>avoir + a past participle</b> — that's the whole formula this week." },
        { prompt:"The past participle of an -er verb like regarder is…",
          opts:["regardi","regardu","regardé","regarder"], answer:2,
          ok:"Yes — stem + -é: regardé.",
          no:"<b>regardé</b> — every regular -er verb takes -é in the participle." },
        { prompt:"‘mangé’, ‘manger’ and ‘mangez’ sound…",
          opts:["all different","all identical (/mɑ̃ʒe/)","only two alike","nothing like each other"], answer:1,
          ok:"Right — all /mɑ̃.ʒe/; only spelling separates them.",
          no:"<b>Identical</b> — /mɑ̃.ʒe/ for all three. The week's signature trap." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"One past for two English ones",
      body:[
        "English carefully splits ‘I ate’ (finished) from ‘I have eaten’ (relevant now) — the passé composé cheerfully covers <em>both</em>. <b>J'ai mangé</b> is whichever one the situation needs, and French speakers don't feel a gap.",
        "That's a relief for the learner: one tense to build, not two. The subtlety French adds instead is a different split — between this ‘completed’ past and the <em>imparfait</em> (the ‘was ~ing / used to’ past), which waits for week 11. For now, the passé composé is your one all-purpose past."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 50, done.",
      body:["You've built your first past tense. Tomorrow: the rest of avoir, and a second participle ending."],
      next:"Jour 51 — avoir au complet : nous avons, ils ont"}
  ]
};

const LESSON_51 = {
  day: 51, week: 8,
  title: "avoir au complet : nous avons, ils ont",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The whole auxiliary, and a second ending",
      body:[
        "Yesterday used <em>j'ai / tu as / il a</em>. Today the plural halves of the auxiliary — <b>nous avons</b>, <b>vous avez</b>, <b>ils ont</b> — and the second regular participle ending: <b>-i</b>, from the -ir verbs you met in week 7.",
        "And one rule that quietly separates this week from next: with <b>avoir</b>, the participle never changes for who did it."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"ont vs sont, and the -i participle",
      body:["The plural auxiliary liaises — and one pair is a classic mix-up:"],
      pairs:[
        { fr:"ils ont", ipa:"/il.z‿ɔ̃/", en:"‘they have’ (avoir) — the s of ils liaises as /z/", say:"ils ont", key:"d51_ilsont" },
        { fr:"nous avons", ipa:"/nu.z‿a.vɔ̃/", en:"‘we have’ — again the liaison /z/ onto the vowel", say:"nous avons", key:"d51_nousavons" },
        { fr:"j'ai fini", ipa:"/ʒe fi.ni/", en:"the -ir participle: fini, ending in /i/", say:"j'ai fini", key:"d51_jaifini" }
      ],
      tip:"Listen to <b>ils ont</b> /il.zɔ̃/ (‘they have’, avoir) against <b>ils sont</b> /il.sɔ̃/ (‘they are’, être, from week 3): the only difference is /z/ vs /s/, and they mean completely different things. As the past-tense auxiliary you want <em>ont</em> — <em>ils ont mangé</em>, ‘they ate’. And the -ir verbs from week 7 take <b>-i</b>: <em>finir → fini</em>, <em>choisir → choisi</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The full paradigm, and -i participles",
      items:[
        { fr:"nous avons mangé", en:"we ate", reg:null, say:"nous avons mangé", key:"d51_v_nousavonsmange" },
        { fr:"vous avez fini", en:"you finished (formal / plural)", reg:"formal", say:"vous avez fini", key:"d51_v_vousavezfini" },
        { fr:"ils ont regardé", en:"they watched", reg:null, say:"ils ont regardé", key:"d51_v_ilsontregarde" },
        { fr:"on a fini", en:"we finished (everyday ‘we’)", reg:"informal", say:"on a fini", key:"d51_v_onafini" },
        { fr:"j'ai choisi", en:"I chose", reg:null, say:"j'ai choisi", key:"d51_v_jaichoisi" },
        { fr:"elle a travaillé", en:"she worked", reg:null, say:"elle a travaillé", key:"d51_v_elleatravaille" },
        { fr:"la semaine dernière", en:"last week", reg:null, say:"la semaine dernière", key:"d51_v_semainederniere" },
        { fr:"déjà", en:"already", reg:null, say:"déjà", key:"d51_v_deja" }
      ],
      tip:"The full auxiliary: <b>j'ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont</b> + participle. The load-bearing rule for this week: with <b>avoir</b>, the participle does <em>not</em> change for the subject — <em>il a mangé</em>, <em>elle a mangé</em>, <em>ils ont mangé</em>, all just <b>mangé</b>. (That's exactly what flips next week, when <em>être</em>-verbs make the participle agree.)"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"How was the couple's weekend?",
      body:["Catching up with a friend about a shared weekend — <b>tu</b> (and <b>vous</b> as plural ‘you both’)."],
      turns:[
        { who:"A", fr:"Vous avez passé un bon week-end, toi et Marc ?", en:"Did you have a good weekend, you and Marc?", say:"Vous avez passé un bon week-end, toi et Marc ?", key:"d51_d1" },
        { who:"B", fr:"Oui ! On a visité un musée, et on a bien mangé.", en:"Yes! We visited a museum, and we ate well.", say:"Oui ! On a visité un musée, et on a bien mangé.", key:"d51_d2" },
        { who:"A", fr:"Et Marc, il a aimé le musée ?", en:"And Marc, did he like the museum?", say:"Et Marc, il a aimé le musée ?", key:"d51_d3" },
        { who:"B", fr:"Beaucoup ! On a déjà choisi le prochain.", en:"A lot! We've already chosen the next one.", say:"Beaucoup ! On a déjà choisi le prochain.", key:"d51_d4" }
      ],
      tip:"<b>Vous avez</b> here is the <em>plural</em> ‘you’ (toi et Marc), not the formal one — same word, read from context. <b>On a visité / on a mangé / on a choisi</b>: <em>on</em> takes the <em>il/elle</em> form of avoir (<em>a</em>), so <em>on a</em> + participle is the everyday spoken ‘we did’. <b>Déjà</b> = already, slotting in right after the auxiliary."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘They ate’ (ils):",
          opts:["ils sont mangé","ils ont mangé","ils a mangé","ils ont mangés"], answer:1,
          ok:"Right — ils ont mangé; ont is avoir, and the participle doesn't change.",
          no:"<b>Ils ont mangé</b> — ont (avoir), and with avoir the participle stays mangé." },
        { prompt:"The participle of an -ir verb like choisir is…",
          opts:["choisu","choisé","choisi","choisir"], answer:2,
          ok:"Yes — -ir verbs take -i: choisi.",
          no:"<b>choisi</b> — regular -ir verbs form the participle with -i." },
        { prompt:"With avoir, ‘she worked’ is…",
          opts:["elle a travaillée","elle a travaillé","elle est travaillé","elle ont travaillé"], answer:1,
          ok:"Right — elle a travaillé; no agreement with avoir.",
          no:"<b>Elle a travaillé</b> — with avoir the participle doesn't add an -e for ‘she’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"‘On a…’ — how people really say ‘we did’",
      body:[
        "In everyday spoken French, <b>nous avons</b> is correct but a little formal; most people say <b>on a</b> for ‘we did’ — <em>on a mangé</em>, <em>on a visité</em>, <em>on a regardé</em>. It's the same <em>on</em> = ‘we’ you met back in week 2, now carrying the past.",
        "So the natural weekend answer isn't the textbook <em>nous avons visité un musée</em> — it's <em>on a visité un musée</em>. Recognise <em>nous avons</em> when you read or hear it, but reach for <em>on a</em> when you speak."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 51, done.",
      body:["The regular participles are yours. Tomorrow: the irregular ones — and they're the verbs you'll use most."],
      next:"Jour 52 — Les participes irréguliers : eu, fait, vu"}
  ]
};

const LESSON_52 = {
  day: 52, week: 8,
  title: "Les participes irréguliers : eu, fait, vu",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The irregulars you can't avoid",
      body:[
        "The regular endings (-é, -i) cover most verbs — but the handful of verbs you use <em>most</em> have irregular participles that simply have to be learned: <b>fait</b>, <b>eu</b>, <b>vu</b>, <b>pris</b>, <b>bu</b>, <b>été</b>.",
        "There's no rule to derive them. The upside: there are only a few, and learning six unlocks most everyday past-tense speech."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"eu is not spelled how it sounds",
      body:["Three irregular participles, each a small pronunciation lesson:"],
      pairs:[
        { fr:"j'ai eu", ipa:"/ʒe y/", en:"eu is written e-u but said /y/ — the day-5 ‘u’ sound", say:"j'ai eu", key:"d52_jaieu" },
        { fr:"j'ai fait", ipa:"/ʒe fɛ/", en:"fait ends in a silent t: /fɛ/, like the infinitive faire's start", say:"j'ai fait", key:"d52_jaifait" },
        { fr:"j'ai vu", ipa:"/ʒe vy/", en:"vu = /vy/, that same rounded /y/ again", say:"j'ai vu", key:"d52_jaivu" }
      ],
      tip:"<b>Eu</b> is the surprise: two written vowels, but pronounced as the single /y/ from <em>rue</em> and <em>tu</em> (week 1). <em>J'ai eu</em> = /ʒe y/, almost ‘jay-ü’. <b>Fait</b> drops its final t to /fɛ/. These aren't derivable — they're memory items, but a short list."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The six workhorse irregulars",
      items:[
        { fr:"j'ai fait", en:"I did / I made (faire)", reg:null, say:"j'ai fait", key:"d52_v_jaifait" },
        { fr:"j'ai eu", en:"I had (avoir)", reg:null, say:"j'ai eu", key:"d52_v_jaieu" },
        { fr:"j'ai vu", en:"I saw (voir)", reg:null, say:"j'ai vu", key:"d52_v_jaivu" },
        { fr:"j'ai pris", en:"I took / I had (prendre)", reg:null, say:"j'ai pris", key:"d52_v_jaipris" },
        { fr:"j'ai bu", en:"I drank (boire)", reg:null, say:"j'ai bu", key:"d52_v_jaibu" },
        { fr:"j'ai été", en:"I was / I've been (être)", reg:null, say:"j'ai été", key:"d52_v_jaiete" },
        { fr:"un verre", en:"a drink / a glass", reg:null, say:"un verre", key:"d52_v_unverre" },
        { fr:"un film", en:"a film", reg:null, say:"un film", key:"d52_v_unfilm" }
      ],
      tip:"Learn these six cold: <b>faire → fait</b>, <b>avoir → eu</b>, <b>voir → vu</b>, <b>prendre → pris</b>, <b>boire → bu</b>, <b>être → été</b>. Two are old friends from the café: <em>j'ai pris un café</em> (prendre, week 3) and <em>j'ai bu un verre</em> (boire) — the present forms you already knew, now with their past participles. Note all six take <b>avoir</b> as their auxiliary — including <em>avoir</em> and <em>être</em> themselves (<em>j'ai eu</em>, <em>j'ai été</em>)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"What did you do last night?",
      body:["Two friends comparing evenings — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Qu'est-ce que tu as fait hier soir ?", en:"What did you do last night?", say:"Qu'est-ce que tu as fait hier soir ?", key:"d52_d1" },
        { who:"B", fr:"J'ai vu un film au cinéma, et après j'ai bu un verre avec des amis.", en:"I saw a film at the cinema, and afterwards I had a drink with friends.", say:"J'ai vu un film au cinéma, et après j'ai bu un verre avec des amis.", key:"d52_d2" },
        { who:"A", fr:"Et tu as pris un dessert quelque part ?", en:"And did you have a dessert somewhere?", say:"Et tu as pris un dessert quelque part ?", key:"d52_d3" },
        { who:"B", fr:"Non, mais j'ai eu une très bonne soirée !", en:"No, but I had a really good evening!", say:"Non, mais j'ai eu une très bonne soirée !", key:"d52_d4" }
      ],
      tip:"Note <b>j'ai vu un film</b>, not ‘I went to the cinema’ — the ‘went’ verb (<em>aller</em>) takes <em>être</em> and waits for next week, so we lean on <em>voir</em> (avoir) instead. <b>J'ai eu une bonne soirée</b> literally ‘I had a good evening’ — eu doing everyday work."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The past participle of faire is…",
          opts:["faisé","fait","fais","fu"], answer:1,
          ok:"Right — faire → fait, /fɛ/.",
          no:"<b>Fait</b> — irregular, /fɛ/ with a silent t." },
        { prompt:"‘J'ai eu’ is pronounced…",
          opts:["/ʒe ø/","/ʒe y/","/ʒe œ/","/ʒe e.y/"], answer:1,
          ok:"Right — eu = /y/, the ‘u’ of rue and tu.",
          no:"<b>/ʒe y/</b> — eu is said as the single rounded /y/, despite the spelling." },
        { prompt:"Which auxiliary do fait, eu, vu, pris, bu take?",
          opts:["être","avoir","both","neither"], answer:1,
          ok:"Right — all take avoir this week (j'ai fait, j'ai eu…).",
          no:"<b>Avoir</b> — these irregulars all pair with avoir." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Six verbs, most of the conversation",
      body:[
        "It's worth knowing just how far these six stretch. <em>Faire</em> alone (<b>fait</b>) covers doing, making, and dozens of set phrases; <em>avoir</em> (<b>eu</b>), <em>voir</em> (<b>vu</b>), <em>prendre</em> (<b>pris</b>) and <em>boire</em> (<b>bu</b>) are the verbs of daily life. Recognising these participles by ear unlocks most of what people say about their day.",
        "A learner's shortcut: when you don't know a verb's participle, there's a decent chance it's a regular -é. When it's one of the very common verbs and -é sounds wrong, it's probably on this irregular list. Guess -é first, then reach for the list."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 52, done.",
      body:["You can now say what you did — regular or irregular. Tomorrow: what you did NOT do."],
      next:"Jour 53 — La négation au passé : je n'ai pas…"}
  ]
};

const LESSON_53 = {
  day: 53, week: 8,
  title: "La négation au passé : je n'ai pas…",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Saying what you didn't do",
      body:[
        "The negative past. You already know <b>ne… pas</b> from week 2 — in the passé composé it wraps the <em>auxiliary</em>, not the participle: <b>je n'ai pas mangé</b>.",
        "Get the placement right and the whole negative past falls into place — including <em>rien</em> (nothing) and <em>jamais</em> (never)."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Where the pas lands",
      body:["The negation clamps around the short auxiliary, and in speech it often loosens:"],
      pairs:[
        { fr:"je n'ai pas", ipa:"/ʒə ne pa/", en:"ne elides to n' before ai; pas ends in a silent s", say:"je n'ai pas", key:"d53_jenaipas" },
        { fr:"je n'ai pas mangé", ipa:"/ʒə ne pa mɑ̃.ʒe/", en:"pas sits BEFORE the participle, wrapping only the auxiliary", say:"je n'ai pas mangé", key:"d53_jenaipasmange" },
        { fr:"j'ai pas mangé", ipa:"/ʒe pa mɑ̃.ʒe/", en:"casual speech: the ne simply drops", say:"j'ai pas mangé", key:"d53_jaipasmange" }
      ],
      tip:"The frame is <b>ne + [avoir] + pas + [participle]</b>: <em>je <u>n'</u>ai <u>pas</u> mangé</em>. The <em>pas</em> comes right after the auxiliary and <em>before</em> the participle — never after it. And exactly as in week 2, casual spoken French drops the <em>ne</em>: <em>j'ai pas mangé</em>. You write the ne; you often don't hear it."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The negative past",
      items:[
        { fr:"je n'ai pas…", en:"I didn't… / I haven't…", reg:null, say:"je n'ai pas fini", key:"d53_v_jenaipas" },
        { fr:"tu n'as pas…", en:"you didn't… (informal)", reg:"informal", say:"tu n'as pas fini", key:"d53_v_tunaspas" },
        { fr:"je n'ai rien fait", en:"I didn't do anything", reg:null, say:"je n'ai rien fait", key:"d53_v_jenairienfait" },
        { fr:"je n'ai jamais vu", en:"I've never seen", reg:null, say:"je n'ai jamais vu", key:"d53_v_jenaijamaisvu" },
        { fr:"je n'ai pas eu le temps", en:"I didn't have time", reg:null, say:"je n'ai pas eu le temps", key:"d53_v_pasleutemps" },
        { fr:"pourquoi ?", en:"why?", reg:null, say:"pourquoi ?", key:"d53_v_pourquoi" },
        { fr:"parce que", en:"because", reg:null, say:"parce que", key:"d53_v_parceque" },
        { fr:"trop fatigué(e)", en:"too tired", reg:null, say:"trop fatigué", key:"d53_v_tropfatigue" }
      ],
      tip:"<b>Rien</b> (nothing) and <b>jamais</b> (never) take <em>pas</em>'s slot, between the auxiliary and the participle: <em>je n'ai <u>rien</u> fait</em>, <em>je n'ai <u>jamais</u> vu</em> — you don't add <em>pas</em> as well. <b>Parce que</b> = because, answering <b>pourquoi ?</b> — the pair you need to explain yourself. <em>Trop</em> (too) is week 6's quantity word."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"An unfinished job",
      body:["A colleague following up — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu as fini le travail ?", en:"Did you finish the work?", say:"Tu as fini le travail ?", key:"d53_d1" },
        { who:"B", fr:"Non, je n'ai pas fini. Je n'ai pas eu le temps.", en:"No, I didn't finish. I didn't have time.", say:"Non, je n'ai pas fini. Je n'ai pas eu le temps.", key:"d53_d2" },
        { who:"A", fr:"Pourquoi ?", en:"Why?", say:"Pourquoi ?", key:"d53_d3" },
        { who:"B", fr:"Parce que j'ai travaillé tard, et après je n'ai rien fait — trop fatigué !", en:"Because I worked late, and afterwards I did nothing — too tired!", say:"Parce que j'ai travaillé tard, et après je n'ai rien fait — trop fatigué !", key:"d53_d4" }
      ],
      tip:"See the frame twice: <b>je n'ai pas fini</b>, <b>je n'ai pas eu</b> — pas before the participle each time. Then <b>je n'ai rien fait</b> swaps <em>rien</em> into the same slot. <em>Tard</em> = late; <em>trop fatigué</em> reuses week 6's <em>trop</em>."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I didn't eat’:",
          opts:["je n'ai mangé pas","je ne mangé pas","je n'ai pas mangé","je pas ai mangé"], answer:2,
          ok:"Right — ne + ai + pas + mangé; pas before the participle.",
          no:"<b>Je n'ai pas mangé</b> — pas wraps the auxiliary, sitting before the participle." },
        { prompt:"‘I did nothing’:",
          opts:["je n'ai pas rien fait","je n'ai rien fait","je n'ai fait rien","je ne fait rien"], answer:1,
          ok:"Right — rien takes pas's place: je n'ai rien fait.",
          no:"<b>Je n'ai rien fait</b> — rien replaces pas; you don't use both." },
        { prompt:"In casual speech, ‘j'ai pas mangé’ drops the…",
          opts:["pas","ne","participle","auxiliary"], answer:1,
          ok:"Right — the ne drops in speech, just like week 2.",
          no:"<b>Ne</b> — spoken French routinely drops it; the pas stays." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"‘Rien de spécial’ — the modest default",
      body:[
        "Ask a French person how their weekend was and a very common reply is a modest <b>« Rien de spécial »</b> (nothing special) or <b>« Oh, pas grand-chose »</b> (not much) — even from someone who did plenty. Understatement is the polite default; launching into a triumphant list can read as boastful.",
        "So the negative past isn't only for actual nothings — it's a social register. <em>Je n'ai rien fait de spécial</em> is often the opening move before, if pressed, the person actually tells you what they did. Which is exactly the conversation the next two lessons build."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 53, done.",
      body:["You can affirm and deny in the past. Tomorrow: asking someone else what they did."],
      next:"Jour 54 — Qu'est-ce que tu as fait ?"}
  ]
};

const LESSON_54 = {
  day: 54, week: 8,
  title: "Qu'est-ce que tu as fait ?",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Asking about the past",
      body:[
        "You can say what you did and didn't do; now, how to ask someone else. Two everyday ways: the front-loaded <b>Qu'est-ce que tu as fait ?</b>, and the casual, question-word-last <b>Tu as fait quoi ?</b>",
        "Plus the weekend vocabulary that these questions almost always fish for."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"A reused question chunk, and hier",
      body:["Two question sounds and one time word:"],
      pairs:[
        { fr:"qu'est-ce que", ipa:"/kɛs.kə/", en:"one smooth chunk, ‘kess-kuh’ — straight from week 1", say:"qu'est-ce que", key:"d54_questceque" },
        { fr:"tu as fait quoi ?", ipa:"/ty a fɛ kwa/", en:"quoi = /kwa/, thrown to the end in casual speech", say:"tu as fait quoi ?", key:"d54_tuasfaitquoi" },
        { fr:"hier", ipa:"/jɛʁ/", en:"starts with the /j/ glide — ‘yair’, not ‘ee-air’", say:"hier", key:"d54_hier" }
      ],
      tip:"<b>Qu'est-ce que</b> /kɛs.kə/ is the same chunk you learned in week 1 for <em>qu'est-ce que c'est ?</em> — memorise it whole, don't parse it. Casual speech prefers the shorter <b>tu as fait quoi ?</b>, dropping <em>quoi</em> to the end with a rising tone, the exact move from week 4's <em>tu vas où ?</em>"},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Asking, and weekend answers",
      items:[
        { fr:"Qu'est-ce que tu as fait ?", en:"What did you do?", reg:"informal", say:"Qu'est-ce que tu as fait ?", key:"d54_v_questcequetuasfait" },
        { fr:"le week-end", en:"the weekend", reg:null, say:"le week-end", key:"d54_v_leweekend" },
        { fr:"Tu as passé un bon week-end ?", en:"Did you have a good weekend?", reg:"informal", say:"Tu as passé un bon week-end ?", key:"d54_v_tuaspasse" },
        { fr:"j'ai joué au foot", en:"I played football", reg:null, say:"j'ai joué au foot", key:"d54_v_jaijoue" },
        { fr:"j'ai visité", en:"I visited", reg:null, say:"j'ai visité un musée", key:"d54_v_jaivisite" },
        { fr:"j'ai dansé", en:"I danced", reg:null, say:"j'ai dansé", key:"d54_v_jaidanse" },
        { fr:"rien de spécial", en:"nothing special", reg:null, say:"rien de spécial", key:"d54_v_riendespecial" },
        { fr:"Et toi ?", en:"And you?", reg:"informal", say:"Et toi ?", key:"d54_v_ettoi" }
      ],
      tip:"<b>Passer un bon week-end</b> takes <em>avoir</em> (→ <em>passé</em>), so ‘did you have a good weekend?’ is <b>Tu as passé un bon week-end ?</b> — the standard Monday opener. Bat it straight back with <b>Et toi ?</b> The activity verbs (<em>jouer, visiter, danser</em>) are all regular -er, so all -é participles."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Monday morning",
      body:["Colleagues on Monday — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Salut ! Tu as passé un bon week-end ?", en:"Hi! Did you have a good weekend?", say:"Salut ! Tu as passé un bon week-end ?", key:"d54_d1" },
        { who:"B", fr:"Oui, super ! J'ai visité le Louvre, et dimanche j'ai joué au foot. Et toi ?", en:"Yes, great! I visited the Louvre, and on Sunday I played football. And you?", say:"Oui, super ! J'ai visité le Louvre, et dimanche j'ai joué au foot. Et toi ?", key:"d54_d2" },
        { who:"A", fr:"Oh, rien de spécial. J'ai travaillé samedi, et dimanche j'ai regardé la télé.", en:"Oh, nothing special. I worked Saturday, and Sunday I watched TV.", say:"Oh, rien de spécial. J'ai travaillé samedi, et dimanche j'ai regardé la télé.", key:"d54_d3" },
        { who:"B", fr:"Qu'est-ce que tu as regardé ?", en:"What did you watch?", say:"Qu'est-ce que tu as regardé ?", key:"d54_d4" },
        { who:"A", fr:"Un vieux film. J'ai bien aimé !", en:"An old film. I really liked it!", say:"Un vieux film. J'ai bien aimé !", key:"d54_d5" }
      ],
      tip:"This is the real Monday ritual, top to bottom. <em>Samedi</em> and <em>dimanche</em> are week 5's days; <em>un vieux film</em> puts week 6's BAGS adjective in front; <b>j'ai bien aimé</b> = ‘I really liked it’, with <em>bien</em> tucked between auxiliary and participle for emphasis."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"The front-loaded ‘what did you do?’:",
          opts:["Tu fait quoi ?","Qu'est-ce que tu as fait ?","Quoi tu as fait ?","Tu as quoi fait ?"], answer:1,
          ok:"Right — Qu'est-ce que tu as fait ?, the full form.",
          no:"<b>Qu'est-ce que tu as fait ?</b> — the qu'est-ce que opener from week 1." },
        { prompt:"‘Tu as passé un bon week-end ?’ uses which auxiliary?",
          opts:["être","avoir","both","none"], answer:1,
          ok:"Right — passer takes avoir here: tu as passé.",
          no:"<b>Avoir</b> — passer un week-end → tu as passé." },
        { prompt:"‘Hier’ begins with which sound?",
          opts:["a hard h","the /j/ glide (‘y’)","a vowel /i/","silent, then /ɛʁ/"], answer:1,
          ok:"Right — /jɛʁ/, starting on the y-glide.",
          no:"<b>The /j/ glide</b> — hier is /jɛʁ/, ‘yair’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"« Tu as passé un bon week-end ? »",
      body:[
        "Monday morning in a French office runs on this exact question, traded before anyone talks about work — <b>« Bon week-end ? »</b> as a greeting almost as fixed as <em>bonjour</em>. It's small talk, so the expected answer is short and modest: <em>« Tranquille »</em>, <em>« Rien de spécial »</em>, <em>« Sympa, et toi ? »</em>",
        "Two register notes worth keeping straight: on <em>Friday</em> the same words are a farewell — <b>« Bon week-end ! »</b> means ‘have a good one’. And with someone you <em>vous</em>, it becomes <em>« Vous avez passé un bon week-end ? »</em> — same ritual, formal dress."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 54, done.",
      body:["You can ask and answer about the past. Tomorrow: stringing it into a whole weekend."],
      next:"Jour 55 — Raconter son week-end"}
  ]
};

const LESSON_55 = {
  day: 55, week: 8,
  title: "Raconter son week-end",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Telling the whole story",
      body:[
        "The payoff: stringing several past actions into a short account of your day. You don't need new grammar — just the passé composé you've built all week, joined with connectors you already own: <b>et</b>, <b>puis</b>, <b>après</b>.",
        "A fuller set of storytelling links (<em>d'abord, ensuite, enfin</em>) arrives next week; today, the three you have already carry a whole weekend."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three participles, mid-story",
      body:["The sounds you'll chain when you recount:"],
      pairs:[
        { fr:"j'ai regardé", ipa:"/ʒe ʁə.ɡaʁ.de/", en:"another regular -é, mid-flow", say:"j'ai regardé", key:"d55_jairegarde" },
        { fr:"on a joué", ipa:"/ɔ̃.na ʒwe/", en:"on‿a liaises its n; joué = /ʒwe/", say:"on a joué", key:"d55_onajoue" },
        { fr:"j'ai bu un café", ipa:"/ʒe by œ̃ ka.fe/", en:"bu = the irregular /y/ from day 52", say:"j'ai bu un café", key:"d55_jaibucafe" }
      ],
      tip:"<b>On a</b> liaises the n onto the vowel — <em>on‿a joué</em> /ɔ̃.na ʒwe/ — the same enchaînement you've heard since <em>on a</em> first appeared. Mixing regular participles (<em>regardé, joué</em>) with the irregular ones (<em>bu</em>) is exactly what a real recount sounds like."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Connectors and more activities",
      items:[
        { fr:"puis", en:"then / next", reg:null, say:"puis", key:"d55_v_puis" },
        { fr:"après", en:"after / afterwards", reg:null, say:"après", key:"d55_v_apres" },
        { fr:"le matin", en:"(in) the morning", reg:null, say:"le matin", key:"d55_v_lematin" },
        { fr:"l'après-midi", en:"(in) the afternoon", reg:null, say:"l'après-midi", key:"d55_v_lapresmidi" },
        { fr:"j'ai rangé", en:"I tidied (up)", reg:null, say:"j'ai rangé", key:"d55_v_jairange" },
        { fr:"j'ai fait les courses", en:"I did the shopping", reg:null, say:"j'ai fait les courses", key:"d55_v_jaifaitcourses" },
        { fr:"j'ai vu des amis", en:"I saw friends", reg:null, say:"j'ai vu des amis", key:"d55_v_jaivuamis" },
        { fr:"toute la journée", en:"all day (long)", reg:null, say:"toute la journée", key:"d55_v_toutelajournee" }
      ],
      tip:"You already own the connectors: <b>et</b> (week 1), <b>puis</b> and <b>après</b> (week 4's directions). String actions with them and you have a story — <em>le matin j'ai fait les courses, puis j'ai rangé, et l'après-midi j'ai vu des amis</em>. Note <b>j'ai fait les courses</b>: week 5's <em>faire les courses</em>, now in the past with the irregular <em>fait</em>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"So, your Saturday?",
      body:["A friend asking for the full account — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Raconte, ton samedi ?", en:"Tell me, your Saturday?", say:"Raconte, ton samedi ?", key:"d55_d1" },
        { who:"B", fr:"Alors, le matin j'ai fait les courses, puis j'ai rangé l'appartement.", en:"So, in the morning I did the shopping, then I tidied the apartment.", say:"Alors, le matin j'ai fait les courses, puis j'ai rangé l'appartement.", key:"d55_d2" },
        { who:"A", fr:"Et l'après-midi ?", en:"And the afternoon?", say:"Et l'après-midi ?", key:"d55_d3" },
        { who:"B", fr:"J'ai vu des amis, on a pris un café, et après on a joué aux cartes toute la journée !", en:"I saw friends, we had a coffee, and afterwards we played cards all day!", say:"J'ai vu des amis, on a pris un café, et après on a joué aux cartes toute la journée !", key:"d55_d4" }
      ],
      tip:"<b>Raconte !</b> — ‘tell me (about it)!’, the command form of <em>raconter</em> — is how a friend invites the whole story. The answer is pure week-8 machinery: avoir-participles (<em>fait, rangé, vu, pris, joué</em>) threaded on <em>le matin / puis / l'après-midi / après</em>. <em>Jouer aux cartes</em> = to play cards (aux = à + les, week 4)."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I did the shopping’ uses which participle of faire?",
          opts:["faisé","faire","fait","fais"], answer:2,
          ok:"Right — j'ai fait les courses; fait is irregular.",
          no:"<b>Fait</b> — j'ai fait les courses, the irregular participle from day 52." },
        { prompt:"Which connectors did you already know before today?",
          opts:["d'abord, ensuite, enfin","et, puis, après","alors, donc, car","d'abord, puis, enfin"], answer:1,
          ok:"Right — et (wk1), puis and après (wk4). The fuller set comes next week.",
          no:"<b>et, puis, après</b> — already yours; d'abord/ensuite/enfin are next week." },
        { prompt:"‘on a joué’ — the n of on…",
          opts:["is silent","liaises onto a (/ɔ̃.na/)","becomes m","drops entirely"], answer:1,
          ok:"Right — on‿a, the n links onto the vowel.",
          no:"<b>Liaises onto a</b> — /ɔ̃.na ʒwe/, the n carries over." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"« Raconte ! »",
      body:[
        "<b>Raconter</b> — to tell, to recount — sits at the heart of French sociability. <em>« Raconte ! »</em> or <em>« Alors, raconte… »</em> is a genuine invitation to give the details, not the quick summary an English ‘how was it?’ might expect. The good weekend story, told well over a coffee or a meal, is a small social pleasure in itself.",
        "It pairs with the modesty from day 53: the ritual is often to open with <em>« Oh, rien de spécial »</em> and then, once asked again — <em>« Mais si, raconte ! »</em> — to actually tell it. Knowing both halves lets you play your part in the exchange."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 55, done.",
      body:["You can tell the story of your day. Tomorrow we tie the whole week — your first A2 week — together."],
      next:"Jour 56 — Révision (week 8 review)"}
  ]
};

const LESSON_56 = {
  day: 56, week: 8,
  title: "Révision — la semaine 8",
  durationMin: 17,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — your first past tense",
      body:[
        "Retrieval day, and the close of your first A2 week. One chained Monday conversation running the whole passé composé — affirming, denying, asking, recounting — six questions on the week's pressure points, then your due flashcards, now spanning eight weeks.",
        "The week's real theme: one tense, built from parts you already had — <b>avoir</b> + a <b>past participle</b> — does all the work of the past. Next week adds the other half of the system."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"The whole week, in one Monday",
      body:["Two colleagues comparing weekends — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Salut ! Tu as passé un bon week-end ?", en:"Hi! Did you have a good weekend?", say:"Salut ! Tu as passé un bon week-end ?", key:"d56_d1" },
        { who:"B", fr:"Oui, très bon ! Samedi, j'ai fait les courses, puis j'ai vu des amis.", en:"Yes, very good! Saturday, I did the shopping, then I saw friends.", say:"Oui, très bon ! Samedi, j'ai fait les courses, puis j'ai vu des amis.", key:"d56_d2" },
        { who:"A", fr:"Qu'est-ce que vous avez fait ?", en:"What did you (all) do?", say:"Qu'est-ce que vous avez fait ?", key:"d56_d3" },
        { who:"B", fr:"On a mangé au restaurant, et après on a regardé un film. Et toi ?", en:"We ate at a restaurant, and afterwards we watched a film. And you?", say:"On a mangé au restaurant, et après on a regardé un film. Et toi ?", key:"d56_d4" },
        { who:"A", fr:"Moi, rien de spécial. Je n'ai pas eu le temps — j'ai travaillé tout le week-end.", en:"Me, nothing special. I didn't have time — I worked all weekend.", say:"Moi, rien de spécial. Je n'ai pas eu le temps — j'ai travaillé tout le week-end.", key:"d56_d5" },
        { who:"B", fr:"Oh non ! Tu n'as pas aimé, alors ?", en:"Oh no! You didn't enjoy it, then?", say:"Oh non ! Tu n'as pas aimé, alors ?", key:"d56_d6" },
        { who:"A", fr:"Bof… mais j'ai eu une bonne surprise : mon frère a visité Paris !", en:"Meh… but I had a nice surprise: my brother visited Paris!", say:"Bof… mais j'ai eu une bonne surprise : mon frère a visité Paris !", key:"d56_d7" }
      ],
      tip:"Every thread fires: the formula (<em>j'ai fait, on a mangé, on a regardé</em>), irregulars (<em>vu, eu</em>), negation (<em>je n'ai pas eu</em>, <em>tu n'as pas aimé</em>), a question (<em>qu'est-ce que vous avez fait</em>), the no-agreement rule (<em>mon frère a visité</em>, not ‘visitée’), and time markers (<em>samedi</em>, <em>tout le week-end</em>). <em>Bof</em> = the very French ‘meh’, from week 2."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Semaine 8 — the six that matter",
      questions:[
        { prompt:"The passé composé this week is built with…",
          opts:["être + participle","avoir + past participle","two infinitives","the present alone"], answer:1,
          ok:"Right — avoir + a past participle.",
          no:"<b>Avoir + a past participle</b> — être-verbs come next week." },
        { prompt:"Participle of the -er verb travailler:",
          opts:["travailli","travaillu","travaillé","travailler"], answer:2,
          ok:"Right — -er → -é: travaillé.",
          no:"<b>Travaillé</b> — regular -er verbs take -é." },
        { prompt:"The irregular participle of faire:",
          opts:["faisé","fait","fu","fini"], answer:1,
          ok:"Right — faire → fait.",
          no:"<b>Fait</b> — one of the six irregulars to know cold." },
        { prompt:"‘I didn't do anything’:",
          opts:["je n'ai pas rien fait","je n'ai rien fait","je n'ai fait rien","je ne fais rien"], answer:1,
          ok:"Right — rien takes pas's slot: je n'ai rien fait.",
          no:"<b>Je n'ai rien fait</b> — rien replaces pas, between auxiliary and participle." },
        { prompt:"With avoir, ‘she watched’ is…",
          opts:["elle a regardée","elle a regardé","elle est regardé","elle ont regardé"], answer:1,
          ok:"Right — elle a regardé; no agreement with avoir.",
          no:"<b>Elle a regardé</b> — with avoir the participle doesn't agree with the subject." },
        { prompt:"‘ils ont’ (they have) vs ‘ils sont’ (they are) differ by…",
          opts:["nothing","a /z/ vs /s/ sound","the participle","word order"], answer:1,
          ok:"Right — /il.zɔ̃/ vs /il.sɔ̃/; ont is your past-tense auxiliary.",
          no:"<b>/z/ vs /s/</b> — ils ont /ilzɔ̃/ (avoir) vs ils sont /ilsɔ̃/ (être)." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Eight weeks of vocabulary now feed this queue — through greetings, the café, the streets, the clock, shopping, home, and now the whole passé composé. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Eight weeks: A2 has begun",
      body:[
        "You've crossed the biggest threshold in the course. Through all of A1 you could describe the present; now you can tell someone what <em>happened</em> — what you did, didn't do, and what you'd ask them about their own day. That single tense, the passé composé with <em>avoir</em>, is the largest expansion of what you can say since week 1.",
        "The honest boundary — and next week's job: the passé composé isn't finished. A set of very common verbs (the movement/change ones — <em>aller, venir, sortir, arriver…</em>) build it with <b>être</b> instead of avoir, and then the participle <em>does</em> agree with the subject (<em>elle est allé<b>e</b></em>). That's week 9: the second half of the past, plus the little pronouns <em>y</em> and <em>en</em>."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 8 — complète. Bienvenue en A2.",
      body:["Fifty-six stations — two thirds of the line, and the first week of A2 behind you. Next week: the être half of the past tense, and telling a fuller story."],
      next:"Semaine 9, Jour 57 — Le passé composé avec être : je suis allé(e)"}
  ]
};

export const WEEK8 = [LESSON_50, LESSON_51, LESSON_52, LESSON_53, LESSON_54, LESSON_55, LESSON_56];
