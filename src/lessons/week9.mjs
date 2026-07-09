/* Week 9 — Days 57–63. THE SECOND A2 WEEK. Talking about the past (II):
   completing the passé composé that Week 8 built with avoir-only, by picking
   up exactly what Week 8 held back and flagged "next week":
     57 — the être auxiliary + the first movement verbs (aller/venir/…)
     58 — the rest of the être set + the motion/change model + the
          avoir-vs-être split on the same verb (je suis sorti / j'ai sorti)
     59 — participle AGREEMENT with être (-e/-s/-es), and the spec's
          audible-vs-silent phonics
     60 — negation & questions in the être passé composé
     61 — sequencing (d'abord/ensuite/puis/enfin): narrating a trip
     62 — y and en (light intro, per spec)
     63 — review (srs + week-spanning recall)

   Function: tell a short story. Everything leans back on Week 8's avoir
   passé composé — this is the same tense, its other auxiliary. */

const LESSON_57 = {
  day: 57, week: 9,
  title: "Le passé composé avec être : je suis allé(e)",
  durationMin: 20,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The other auxiliary",
      body:[
        "Week 8 built the passé composé with <b>avoir</b>. Today the missing half: a special group of verbs builds it with <b>être</b> instead — <em>je <b>suis</b> allé</em>, not ‘j'ai allé’.",
        "The formula is the same shape — auxiliary + past participle — you just swap the auxiliary. These are the verbs of <em>coming and going</em>: aller, venir, arriver, partir, rester."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"suis / es / est, sliding into the participle",
      body:["The être auxiliary from week 3, now carrying the past — listen for the liaison:"],
      pairs:[
        { fr:"je suis allé", ipa:"/ʒə sɥi.z‿a.le/", en:"the s of suis liaises as /z/ onto allé", say:"je suis allé", key:"d57_jesuisalle" },
        { fr:"tu es parti", ipa:"/ty ɛ paʁ.ti/", en:"es = /ɛ/; parti starts on a consonant, so no liaison", say:"tu es parti", key:"d57_tuesparti" },
        { fr:"il est arrivé", ipa:"/il‿ɛ.ta.ʁi.ve/", en:"est's t liaises onto the vowel of arrivé", say:"il est arrivé", key:"d57_ilestarrive" }
      ],
      tip:"The auxiliary is just <b>être</b> in the present — <em>je suis, tu es, il est…</em> — the same forms from week 3, now followed by a participle. When the participle starts with a vowel, the auxiliary liaises into it: <em>suis‿allé</em> /sɥi.zale/, <em>est‿arrivé</em> /ɛ.taʁive/. Contrast week 8: there you said <em>j'ai</em>; here it's <em>je suis</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The coming-and-going verbs",
      items:[
        { fr:"je suis allé(e)", en:"I went (aller)", reg:null, say:"je suis allé", key:"d57_v_suisalle" },
        { fr:"tu es venu(e)", en:"you came (venir, informal)", reg:"informal", say:"tu es venu", key:"d57_v_esvenu" },
        { fr:"il est arrivé", en:"he arrived (arriver)", reg:null, say:"il est arrivé", key:"d57_v_estarrive" },
        { fr:"elle est partie", en:"she left (partir)", reg:null, say:"elle est partie", key:"d57_v_estpartie" },
        { fr:"je suis resté(e)", en:"I stayed (rester)", reg:null, say:"je suis resté", key:"d57_v_suisreste" },
        { fr:"le voyage", en:"the trip / journey", reg:null, say:"le voyage", key:"d57_v_voyage" },
        { fr:"la gare", en:"the (train) station", reg:null, say:"la gare", key:"d57_v_gare" },
        { fr:"le train", en:"the train", reg:null, say:"le train", key:"d57_v_train" }
      ],
      tip:"A closed group of verbs takes <b>être</b>, not avoir, in the passé composé — and they're mostly verbs of movement: <b>aller</b> (allé), <b>venir</b> (venu), <b>arriver</b> (arrivé), <b>partir</b> (parti), <b>rester</b> (resté). There's no ‘j'ai allé’ — it's always <em>je suis allé</em>. You'll meet the rest of the set tomorrow; today, learn these five cold. (<em>La gare</em> and <em>le train</em> are back from weeks 1 and 4.)"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"You weren't there?",
      body:["Two friends after a party — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu es venu à la fête samedi ?", en:"Did you come to the party on Saturday?", say:"Tu es venu à la fête samedi ?", key:"d57_d1" },
        { who:"B", fr:"Non, je suis resté à la maison. Et toi ?", en:"No, I stayed home. And you?", say:"Non, je suis resté à la maison. Et toi ?", key:"d57_d2" },
        { who:"A", fr:"Je suis allé, mais je suis parti tôt.", en:"I went, but I left early.", say:"Je suis allé, mais je suis parti tôt.", key:"d57_d3" },
        { who:"B", fr:"Ah ? Marc est arrivé à quelle heure ?", en:"Oh? What time did Marc arrive?", say:"Marc est arrivé à quelle heure ?", key:"d57_d4" },
        { who:"A", fr:"Vers minuit, je crois.", en:"Around midnight, I think.", say:"Vers minuit, je crois.", key:"d57_d5" }
      ],
      tip:"Every past verb here rides on <b>être</b>: <em>tu es venu</em>, <em>je suis resté</em>, <em>je suis allé</em>, <em>je suis parti</em>, <em>Marc est arrivé</em>. Compare week 8's party talk, which used avoir (<em>j'ai mangé</em>) — same tense, different auxiliary, because these are motion verbs. <em>Tôt</em> = early; <em>je crois</em> = I think/believe."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I went’ (aller):",
          opts:["j'ai allé","je suis allé","j'ai été","je vais allé"], answer:1,
          ok:"Right — aller takes être: je suis allé. ‘J'ai allé’ doesn't exist.",
          no:"<b>Je suis allé</b> — aller is an être-verb; never ‘j'ai allé’." },
        { prompt:"Which auxiliary do aller, venir, partir take in the past?",
          opts:["avoir","être","both equally","neither"], answer:1,
          ok:"Right — être; they're verbs of movement.",
          no:"<b>Être</b> — the coming-and-going verbs build the passé composé with être." },
        { prompt:"‘Il est arrivé’ — you hear a liaison because…",
          opts:["arrivé is irregular","est's t links onto the vowel of arrivé","il liaises","there's no liaison"], answer:1,
          ok:"Right — /il ɛ.taʁive/, est's t carries onto arrivé.",
          no:"<b>Est's t liaises</b> onto the vowel-initial arrivé: /ɛ.taʁive/." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Why these verbs, and not others",
      body:[
        "There's a logic under the être group, even if the exceptions need memorising: they're overwhelmingly verbs of <em>motion between two points</em> (come, go, arrive, leave) or of <em>staying put</em> — intransitive verbs with no direct object. The mental image some teachers use is a house you move into, through, and out of.",
        "It's a genuinely closed list — maybe a dozen and a half verbs — so unlike vocabulary, you can actually learn all of them. Everything <em>not</em> on the list takes avoir, which is why week 8 (eat, watch, do, see) was all avoir. Tomorrow fills in the rest of the être set."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 57, done.",
      body:["You've met the être auxiliary. Tomorrow: the rest of the group, and a trap where the same verb takes either auxiliary."],
      next:"Jour 58 — Entrer, sortir, monter, descendre"}
  ]
};

const LESSON_58 = {
  day: 58, week: 9,
  title: "Entrer, sortir, monter, descendre",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The rest of the être family",
      body:[
        "Yesterday's five plus today's fill out the group: the paired opposites <b>entrer / sortir</b> (in/out), <b>monter / descendre</b> (up/down), plus <b>tomber</b> (to fall) and <b>retourner</b> (to go back).",
        "And one real trap worth meeting now: a few of these switch to <em>avoir</em> when they take a direct object."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three participles, three endings",
      body:["The être participles don't all end the same way:"],
      pairs:[
        { fr:"je suis venu", ipa:"/ʒə sɥi və.ny/", en:"venir → venu, ending in /y/", say:"je suis venu", key:"d58_suisvenu" },
        { fr:"je suis sorti", ipa:"/ʒə sɥi sɔʁ.ti/", en:"sortir → sorti, ending in /i/", say:"je suis sorti", key:"d58_suissorti" },
        { fr:"je suis descendu", ipa:"/ʒə sɥi de.sɑ̃.dy/", en:"descendre → descendu, ending in /y/", say:"je suis descendu", key:"d58_suisdescendu" }
      ],
      tip:"The participles keep their own family endings — <b>-u</b> (venu, descendu, from the -re/-ir irregulars), <b>-i</b> (sorti, parti), <b>-é</b> (allé, arrivé, monté, resté, tombé, entré, retourné). What unites them isn't the ending — it's that they all take <em>être</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"In, out, up, down, back",
      items:[
        { fr:"je suis entré(e)", en:"I went in / entered", reg:null, say:"je suis entré", key:"d58_v_entre" },
        { fr:"je suis sorti(e)", en:"I went out", reg:null, say:"je suis sorti", key:"d58_v_sorti" },
        { fr:"je suis monté(e)", en:"I went up", reg:null, say:"je suis monté", key:"d58_v_monte" },
        { fr:"je suis descendu(e)", en:"I went down", reg:null, say:"je suis descendu", key:"d58_v_descendu" },
        { fr:"je suis tombé(e)", en:"I fell", reg:null, say:"je suis tombé", key:"d58_v_tombe" },
        { fr:"je suis retourné(e)", en:"I went back", reg:null, say:"je suis retourné", key:"d58_v_retourne" },
        { fr:"l'aéroport", en:"the airport (masc.)", reg:null, say:"l'aéroport", key:"d58_v_aeroport" },
        { fr:"l'avion", en:"the plane (masc.)", reg:null, say:"l'avion", key:"d58_v_avion" }
      ],
      tip:"The being-and-moving model: paired opposites (<em>entrer/sortir</em>, <em>monter/descendre</em>, <em>arriver/partir</em>) plus <em>rester, tomber, retourner</em>. <b>The trap:</b> <em>sortir, monter, descendre</em> switch to <b>avoir</b> when they take a direct object — <em>je suis sorti</em> (I went out, être) but <em>j'ai sorti le chien</em> (I took the dog out, avoir); <em>je suis monté</em> (I went up) but <em>j'ai monté les escaliers</em> (I went up the stairs). Same participle, different auxiliary and meaning. Recognise it for now; it gets drilled later."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A clumsy morning",
      body:["Recounting a small mishap — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Ce matin, je suis sorti sans mon parapluie…", en:"This morning, I went out without my umbrella…", say:"Ce matin, je suis sorti sans mon parapluie…", key:"d58_d1" },
        { who:"B", fr:"Oh non ! Et il a plu ?", en:"Oh no! And it rained?", say:"Oh non ! Et il a plu ?", key:"d58_d2" },
        { who:"A", fr:"Beaucoup. Et je suis tombé dans le métro, sur les escaliers !", en:"A lot. And I fell in the métro, on the stairs!", say:"Beaucoup. Et je suis tombé dans le métro, sur les escaliers !", key:"d58_d3" },
        { who:"B", fr:"Tu es descendu trop vite, non ?", en:"You went down too fast, no?", say:"Tu es descendu trop vite, non ?", key:"d58_d4" },
        { who:"A", fr:"Oui… et je suis retourné à la maison me changer.", en:"Yes… and I went back home to change.", say:"Je suis retourné à la maison me changer.", key:"d58_d5" }
      ],
      tip:"Being-verbs everywhere: <em>je suis sorti</em>, <em>je suis tombé</em>, <em>tu es descendu</em>, <em>je suis retourné</em>. But note <b>il a plu</b> (it rained, <em>pleuvoir</em>) takes <em>avoir</em> — weather isn't a motion verb. That's the système in one line: motion → être, everything else → avoir."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I fell’:",
          opts:["j'ai tombé","je suis tombé","j'ai été tombé","je tombe"], answer:1,
          ok:"Right — tomber is an être-verb: je suis tombé.",
          no:"<b>Je suis tombé</b> — tomber (a change of state/motion) takes être." },
        { prompt:"‘J'ai sorti le chien’ uses avoir because…",
          opts:["it's a mistake","sortir here has a direct object (le chien)","the dog is masculine","it's in the future"], answer:1,
          ok:"Right — with a direct object, sortir flips to avoir (‘took the dog out’).",
          no:"<b>It has a direct object</b> (le chien) — that flips sortir to avoir." },
        { prompt:"‘Il a plu’ (it rained) takes avoir because…",
          opts:["it's a motion verb","weather verbs aren't in the être group","it's irregular","pleuvoir is being"], answer:1,
          ok:"Right — only the motion/change group takes être; everything else, avoir.",
          no:"<b>It's not a motion verb</b> — outside the être list, so avoir." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Learning the list, without the song",
      body:[
        "English-speaking classrooms often teach the être-verbs with a mnemonic — DR & MRS VANDERTRAMP, or a drawing of a house you enter, climb, and leave. Whatever the hook, the point is the same: it's a fixed, learnable set, worth committing to memory as a block rather than deciding verb-by-verb.",
        "The transitive exceptions (sortir/monter/descendre + object → avoir) feel fiddly, but there's a shortcut: if you can put a <em>‘what?’</em> after the verb and answer it (‘I took out <em>what?</em> — the dog’), it's avoir. If the verb just describes your own movement (‘I went out’, full stop), it's être."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 58, done.",
      body:["The whole être group is yours. Tomorrow: the twist that avoir never had — making the participle agree."],
      next:"Jour 59 — L'accord : allé, allée, allés, allées"}
  ]
};

const LESSON_59 = {
  day: 59, week: 9,
  title: "L'accord : allé, allée, allés, allées",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The participle that changes with you",
      body:[
        "Here's what être adds that avoir never did: with être, the past participle <b>agrees with the subject</b> — like an adjective. A woman writes <em>je suis allé<b>e</b></em>; a group of men, <em>ils sont allé<b>s</b></em>.",
        "The relief: you write these endings carefully, but — for most verbs — you barely hear them."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Agreement: mostly silent, sometimes not",
      body:["The spec's key contrast — the agreement endings are usually inaudible, with rare exceptions:"],
      pairs:[
        { fr:"il est allé / elle est allée", ipa:"/il‿ɛ.ta.le/ · /ɛl‿ɛ.ta.le/", en:"both /ale/ — the -e is SILENT; only il vs elle differs", say:"elle est allée", key:"d59_estallee" },
        { fr:"ils sont partis / elles sont parties", ipa:"/il sɔ̃ paʁ.ti/ · /ɛl sɔ̃ paʁ.ti/", en:"both /paʁti/ — the -s and -es are SILENT", say:"elles sont parties", key:"d59_sontparties" },
        { fr:"il est mort / elle est morte", ipa:"/il‿ɛ mɔʁ/ · /ɛl‿ɛ mɔʁt/", en:"AUDIBLE: the -e wakes the t of mort", say:"elle est morte", key:"d59_estmorte" }
      ],
      tip:"For a participle ending in a <em>vowel</em> — allé, venu, parti, resté, and nearly all of them — the agreement endings <b>-e / -s / -es are completely silent</b>: <em>allé, allée, allés, allées</em> are all /ale/. You only hear a difference when the participle ends in a <em>latent consonant</em> that the -e wakes up — <b>mort → morte</b> /mɔʁ/ → /mɔʁt/ — the same petit→petite mechanism from day 2. Those are rare in this group, so agreement is mostly a spelling rule, not a sound."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The four agreement forms",
      items:[
        { fr:"il est allé", en:"he went (masc. sing. — no ending)", reg:null, say:"il est allé", key:"d59_v_ilestalle" },
        { fr:"elle est allée", en:"she went (fem. sing. — +e)", reg:null, say:"elle est allée", key:"d59_v_elleestallee" },
        { fr:"ils sont allés", en:"they went (masc./mixed plural — +s)", reg:null, say:"ils sont allés", key:"d59_v_ilssontalles" },
        { fr:"elles sont allées", en:"they went (fem. plural — +es)", reg:null, say:"elles sont allées", key:"d59_v_ellessontallees" },
        { fr:"je suis née", en:"I was born (naître, fem. speaker)", reg:null, say:"je suis née", key:"d59_v_suisnee" },
        { fr:"tu es sortie", en:"you went out (fem., informal)", reg:"informal", say:"tu es sortie", key:"d59_v_essortie" },
        { fr:"nous sommes arrivé(e)s", en:"we arrived", reg:null, say:"nous sommes arrivés", key:"d59_v_sommesarrives" },
        { fr:"une histoire", en:"a story", reg:null, say:"une histoire", key:"d59_v_histoire" }
      ],
      tip:"The four written forms: <b>allé</b> (m sg), <b>allée</b> (f sg, +e), <b>allés</b> (m/mixed pl, +s), <b>allées</b> (f pl, +es) — it agrees with the <em>subject</em>. This is the flip from week 8: with <b>avoir</b>, the participle never changed (<em>elle a mangé</em>); with <b>être</b>, it agrees (<em>elle est allée</em>). Get it right on paper; most of the time nobody hears it."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Where did everyone go?",
      body:["Piecing together a weekend — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Léa et Sophie sont parties en vacances ?", en:"Léa and Sophie left on holiday?", say:"Léa et Sophie sont parties en vacances ?", key:"d59_d1" },
        { who:"B", fr:"Oui, elles sont allées à Nice. Elles sont arrivées hier.", en:"Yes, they went to Nice. They arrived yesterday.", say:"Oui, elles sont allées à Nice. Elles sont arrivées hier.", key:"d59_d2" },
        { who:"A", fr:"Et Marc et toi, vous êtes restés à Paris ?", en:"And Marc and you, you stayed in Paris?", say:"Et Marc et toi, vous êtes restés à Paris ?", key:"d59_d3" },
        { who:"B", fr:"Oui. On est allés au cinéma, c'est tout.", en:"Yes. We went to the cinema, that's all.", say:"On est allés au cinéma, c'est tout.", key:"d59_d4" }
      ],
      tip:"Watch the agreement track the subject: <b>Léa et Sophie… sont parties / allées / arrivées</b> (two women → -es), <b>vous êtes restés</b> (Marc + you → -s). One nice subtlety: <em>on</em> means ‘we’ here, so the participle takes a plural agreement in careful writing — <b>on est allés</b>. Say them aloud: they all sound the same regardless of ending."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"A woman writes ‘I went’:",
          opts:["je suis allé","je suis allée","j'ai allée","je suis allés"], answer:1,
          ok:"Right — allée, with the feminine -e (silent, but written).",
          no:"<b>Je suis allée</b> — être-agreement adds -e for a female subject." },
        { prompt:"‘Elles sont allées’ vs ‘ils sont allés’ — do they sound different?",
          opts:["yes, clearly","no, both /ale/","only the s is heard","only in Paris"], answer:1,
          ok:"Right — both /ale/; the -s/-es are silent. Only ils/elles differs.",
          no:"<b>No</b> — both /ale/. The agreement is written, not heard, here." },
        { prompt:"With avoir (week 8), does the participle agree with the subject?",
          opts:["yes, always","no — only être does that","only for women","only in plural"], answer:1,
          ok:"Right — avoir doesn't agree with the subject; that's être's job.",
          no:"<b>No</b> — ‘elle a mangé’ (no -e). Subject agreement is an être thing." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The agreement you write but don't say",
      body:[
        "This is one of French's neat asymmetries: the être-agreement is a <em>writing</em> rule far more than a speaking one. Say <em>« Je suis allé au marché »</em> and a man and a woman sound identical — the ear can't tell. Write it, and the missing or extra -e is a visible error a French reader clocks instantly.",
        "So don't let the agreement slow your speech — you almost never need to ‘hear’ it to be understood. Save the care for anything you write: a text, an email, a form. That split — relaxed in speech, exact on paper — is worth internalising early."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 59, done.",
      body:["You can make the participle agree. Tomorrow: saying what didn't happen, and asking what did."],
      next:"Jour 60 — Je ne suis pas allé : négation et questions"}
  ]
};

const LESSON_60 = {
  day: 60, week: 9,
  title: "Je ne suis pas allé : négation et questions",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Not going, and asking who did",
      body:[
        "The negative and the question, now on the être side. Good news: it works <em>exactly</em> like week 8's avoir version. <b>Ne… pas</b> wraps the auxiliary (<em>je ne suis pas allé</em>), and questions use intonation or <em>est-ce que</em>.",
        "The only extra thing to remember is the one you learned yesterday: the agreement still applies inside a negative."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Wrapping the être auxiliary",
      body:["The negation clamps around <em>suis / es / est</em>, exactly as it did around <em>ai / as / a</em>:"],
      pairs:[
        { fr:"je ne suis pas allé", ipa:"/ʒə nə sɥi pa.z‿a.le/", en:"pas sits before the participle; pas‿allé can liaise", say:"je ne suis pas allé", key:"d60_nesuispasalle" },
        { fr:"je suis pas allé", ipa:"/ʒə sɥi pa a.le/", en:"casual speech: the ne simply drops", say:"je suis pas allé", key:"d60_suispasalle" },
        { fr:"tu es allé où ?", ipa:"/ty ɛ a.le u/", en:"question-word-last, rising tone — the week-4 move", say:"tu es allé où ?", key:"d60_tuesalleou" }
      ],
      tip:"Identical frame to week 8, just with être: <b>ne + [suis/es/est] + pas + [participle]</b> — <em>je ne suis pas allé</em>, the <em>pas</em> before the participle. Casual speech drops the <em>ne</em> (<em>je suis pas allé</em>). Questions work the same too: rising intonation (<em>tu es allé où ?</em>) or <em>est-ce que</em> up front."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Negative and question forms",
      items:[
        { fr:"je ne suis pas allé(e)", en:"I didn't go", reg:null, say:"je ne suis pas allé", key:"d60_v_nesuispasalle" },
        { fr:"tu n'es pas venu(e)", en:"you didn't come (informal)", reg:"informal", say:"tu n'es pas venu", key:"d60_v_tunespasvenu" },
        { fr:"je ne suis jamais allé(e)", en:"I've never been / gone", reg:null, say:"je ne suis jamais allé", key:"d60_v_nesuisjamaisalle" },
        { fr:"Tu es allé(e) où ?", en:"Where did you go? (informal)", reg:"informal", say:"Tu es allé où ?", key:"d60_v_tuesalleou" },
        { fr:"Est-ce que tu es sorti(e) ?", en:"Did you go out? (informal)", reg:"informal", say:"Est-ce que tu es sorti ?", key:"d60_v_estcetuessorti" },
        { fr:"Quand ?", en:"When?", reg:null, say:"Quand ?", key:"d60_v_quand" },
        { fr:"Avec qui ?", en:"With whom?", reg:null, say:"Avec qui ?", key:"d60_v_avecqui" },
        { fr:"seul(e)", en:"alone", reg:null, say:"seul", key:"d60_v_seul" }
      ],
      tip:"Negation wraps the auxiliary, and agreement stays put inside it: a woman writes <em>je ne suis pas allé<b>e</b></em>. <b>Jamais</b> (never) takes <em>pas</em>'s slot, just as in week 8: <em>je ne suis jamais allé</em>. New question words to pair with the past: <b>quand</b> (when), <b>avec qui</b> (with whom), <b>où</b> (where, from week 4)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A quiet weekend",
      body:["Comparing weekends on Monday — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu es sorti ce week-end ?", en:"Did you go out this weekend?", say:"Tu es sorti ce week-end ?", key:"d60_d1" },
        { who:"B", fr:"Non, je ne suis pas sorti. Je suis resté chez moi.", en:"No, I didn't go out. I stayed home.", say:"Non, je ne suis pas sorti. Je suis resté chez moi.", key:"d60_d2" },
        { who:"A", fr:"Tu n'es pas allé au match, alors ?", en:"You didn't go to the match, then?", say:"Tu n'es pas allé au match, alors ?", key:"d60_d3" },
        { who:"B", fr:"Non, je ne suis jamais allé au stade, en fait !", en:"No, I've actually never been to the stadium!", say:"Non, je ne suis jamais allé au stade, en fait !", key:"d60_d4" }
      ],
      tip:"See the frame repeat: <em>je ne suis pas sorti</em>, <em>tu n'es pas allé</em>, <em>je ne suis jamais allé</em> — always ne + être + pas/jamais + participle. <b>En fait</b> = ‘actually / in fact’, a very common little filler. <em>Chez moi</em> is week 7's."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I didn't go out’:",
          opts:["je n'ai pas sorti","je ne suis pas sorti","je ne sorti pas","je suis ne pas sorti"], answer:1,
          ok:"Right — sortir takes être, and pas wraps it: je ne suis pas sorti.",
          no:"<b>Je ne suis pas sorti</b> — être auxiliary, pas before the participle." },
        { prompt:"A woman writes ‘I never went’:",
          opts:["je ne suis jamais allé","je ne suis jamais allée","je n'ai jamais allée","je ne jamais suis allée"], answer:1,
          ok:"Right — allée, because the agreement still applies inside the negative.",
          no:"<b>Je ne suis jamais allée</b> — negation doesn't cancel the -e agreement." },
        { prompt:"The negation frame for être is…",
          opts:["different from avoir","the same as avoir (ne + aux + pas)","only intonation","ne after the participle"], answer:1,
          ok:"Right — identical to week 8, just with suis/es/est.",
          no:"<b>The same as avoir</b> — ne + auxiliary + pas + participle, always." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"« En fait… » and the art of the correction",
      body:[
        "<b>En fait</b> (in fact, actually) is one of the most-used softeners in casual French — dropped in to gently correct, clarify, or add a detail, the way English scatters ‘actually’ and ‘to be honest’. <em>« Non, en fait, je suis resté chez moi. »</em> It buys a half-second and softens the ‘no’.",
        "It pairs naturally with the negative past: a lot of everyday conversation is mild correction of an assumption — <em>« Tu es sorti ? » « Non, en fait, je ne suis pas sorti. »</em> Sprinkle it and your French immediately sounds less like a textbook."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 60, done.",
      body:["You can affirm, deny and question the whole past. Tomorrow: threading it into a real story, in order."],
      next:"Jour 61 — D'abord, ensuite, enfin : raconter un voyage"}
  ]
};

const LESSON_61 = {
  day: 61, week: 9,
  title: "D'abord, ensuite, enfin : raconter un voyage",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Putting events in order",
      body:[
        "Now the storytelling payoff: connectors that mark <em>sequence</em>, so a pile of past actions becomes an ordered account. <b>D'abord</b> (first), <b>ensuite</b> / <b>puis</b> (then), <b>enfin</b> (finally).",
        "You'll narrate a trip — mixing être-verbs (je suis parti) and avoir-verbs (j'ai visité) freely, because a real story uses both."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The sequence words",
      body:["Three new connectors, each with a sound worth placing:"],
      pairs:[
        { fr:"d'abord", ipa:"/da.bɔʁ/", en:"first — the final d is silent", say:"d'abord", key:"d61_dabord" },
        { fr:"ensuite", ipa:"/ɑ̃.sɥit/", en:"next — the ‘en’ nasal, then the /ɥi/ glide", say:"ensuite", key:"d61_ensuite" },
        { fr:"enfin", ipa:"/ɑ̃.fɛ̃/", en:"finally — two nasals back to back: ɑ̃ then ɛ̃", say:"enfin", key:"d61_enfin" }
      ],
      tip:"<b>D'abord</b> ends in a silent d — /da.bɔʁ/. <b>Ensuite</b> and <b>enfin</b> both open with the ‘an/en’ nasal from day 1; enfin then closes on the ‘in’ nasal, stacking two. You already have <b>puis</b> and <b>après</b> (weeks 4 and 8) — these three complete the set."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Sequencing, and trip words",
      items:[
        { fr:"d'abord", en:"first / to begin with", reg:null, say:"d'abord", key:"d61_v_dabord" },
        { fr:"ensuite", en:"next / then", reg:null, say:"ensuite", key:"d61_v_ensuite" },
        { fr:"puis", en:"then", reg:null, say:"puis", key:"d61_v_puis" },
        { fr:"enfin", en:"finally / at last", reg:null, say:"enfin", key:"d61_v_enfin" },
        { fr:"l'année dernière", en:"last year", reg:null, say:"l'année dernière", key:"d61_v_anneederniere" },
        { fr:"les vacances", en:"the holidays / vacation", reg:null, say:"les vacances", key:"d61_v_vacances" },
        { fr:"un billet", en:"a ticket", reg:null, say:"un billet", key:"d61_v_billet" },
        { fr:"pendant", en:"during / for", reg:null, say:"pendant une semaine", key:"d61_v_pendant" }
      ],
      tip:"The order of the order-words: <b>d'abord</b> opens, <b>ensuite</b> / <b>puis</b> carry the middle, <b>enfin</b> closes. Drop them in front of each action and a list becomes a story: <em>D'abord je suis parti, ensuite j'ai visité…, enfin je suis rentré.</em> Notice how <em>être</em> and <em>avoir</em> verbs sit side by side — that's normal narration."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"How was the trip?",
      body:["Recounting a holiday to a friend — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Alors, ton voyage en Italie ? Raconte !", en:"So, your trip to Italy? Tell me!", say:"Alors, ton voyage en Italie ? Raconte !", key:"d61_d1" },
        { who:"B", fr:"D'abord, je suis allé à Rome. J'ai visité le Colisée, c'était magnifique.", en:"First, I went to Rome. I visited the Colosseum, it was magnificent.", say:"D'abord, je suis allé à Rome. J'ai visité le Colisée, c'était magnifique.", key:"d61_d2" },
        { who:"A", fr:"Et ensuite ?", en:"And then?", say:"Et ensuite ?", key:"d61_d3" },
        { who:"B", fr:"Ensuite, je suis parti à Florence, puis à Venise. Enfin, je suis rentré dimanche.", en:"Then I left for Florence, then Venice. Finally, I came back Sunday.", say:"Ensuite, je suis parti à Florence, puis à Venise. Enfin, je suis rentré dimanche.", key:"d61_d4" },
        { who:"A", fr:"Quel beau voyage !", en:"What a lovely trip!", say:"Quel beau voyage !", key:"d61_d5" }
      ],
      tip:"The whole story runs on the sequence words + both auxiliaries: <em>d'abord je suis allé</em> (être), <em>j'ai visité</em> (avoir), <em>ensuite je suis parti… enfin je suis rentré</em> (être). <b>Rentrer</b> = to go/come back home, another être-verb. <em>C'était</em> (it was) is a first taste of the imparfait — full story in week 11."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Which word opens a sequence (‘first’)?",
          opts:["enfin","d'abord","ensuite","après"], answer:1,
          ok:"Right — d'abord opens; enfin closes.",
          no:"<b>D'abord</b> — ‘first / to begin with’. Enfin is ‘finally’." },
        { prompt:"In ‘j'ai visité le Colisée, puis je suis parti’, why two auxiliaries?",
          opts:["it's an error","visiter takes avoir, partir takes être","tenses differ","one is future"], answer:1,
          ok:"Right — visiter → avoir, partir → être; stories mix both.",
          no:"<b>Different verbs, different auxiliaries</b> — visiter (avoir) + partir (être)." },
        { prompt:"‘Enfin’ is pronounced…",
          opts:["/ɑ̃.fɛ̃/ (two nasals)","/ɛn.fin/","/ɑ̃.fin/","/e.fɛ̃/"], answer:0,
          ok:"Right — /ɑ̃.fɛ̃/, the ‘an’ then ‘in’ nasal.",
          no:"<b>/ɑ̃.fɛ̃/</b> — two nasal vowels, no audible n." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Les vacances — a serious matter",
      body:[
        "The French take <b>les vacances</b> seriously — five weeks of paid leave is standard, and where you went and what you did is prime returning-to-work conversation. <em>« Tu es parti où, cet été ? »</em> is asked in earnest; a well-told trip story earns real attention.",
        "Two useful patterns fall out of it: <b>partir en vacances</b> (to go off on holiday, être) and naming the destination with <em>à</em> for cities (<em>à Rome</em>) but <em>en</em> for feminine countries (<em>en Italie</em>). You'll refine the country prepositions later; for now, <em>en Italie / en France</em> and <em>à Rome / à Paris</em> cover most trips."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 61, done.",
      body:["You can tell an ordered story. Tomorrow: two tiny words that keep it from getting repetitive — y and en."],
      next:"Jour 62 — Y et en : petits mots, grand effet"}
  ]
};

const LESSON_62 = {
  day: 62, week: 9,
  title: "Y et en : petits mots, grand effet",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Two words that stop the repetition",
      body:[
        "A light first look at two tiny pronouns that make speech flow. <b>Y</b> replaces a place (‘there’); <b>en</b> replaces ‘some / of it’. Instead of repeating <em>à Paris</em> or <em>du café</em>, you point back with one syllable.",
        "You already use both without knowing it — <em>on y va</em> (week 4) and <em>il y a</em> (week 2) are both this <b>y</b>."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Where y and en attach",
      body:["Both hook onto the front of the verb — listen to the links:"],
      pairs:[
        { fr:"j'y suis allé", ipa:"/ʒi sɥi.z‿a.le/", en:"y = there; j' + y = /ʒi/, right before the auxiliary", say:"j'y suis allé", key:"d62_jysuisalle" },
        { fr:"j'en ai pris", ipa:"/ʒɑ̃.n‿e pʁi/", en:"en = some; the n liaises onto ai", say:"j'en ai pris", key:"d62_jenaipris" },
        { fr:"on y va", ipa:"/ɔ̃.ni.va/", en:"the week-4 chunk — on‿y, the n links to y", say:"on y va", key:"d62_onyva" }
      ],
      tip:"Both pronouns sit <b>before the verb</b> — and in the passé composé, before the auxiliary: <em>j'<b>y</b> suis allé</em>, <em>j'<b>en</b> ai pris</em>. <b>Y</b> /i/ and <b>en</b> /ɑ̃/ are single syllables that glue on: <em>j'y</em> = /ʒi/, <em>j'en</em> = /ʒɑ̃/. You've said <em>on y va</em> since week 4 — same y, meaning ‘there’."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"There, and some",
      items:[
        { fr:"y", en:"there (replaces à + a place)", reg:null, say:"j'y vais", key:"d62_v_y" },
        { fr:"j'y suis allé(e)", en:"I went there", reg:null, say:"j'y suis allé", key:"d62_v_jysuisalle" },
        { fr:"On y va !", en:"Let's go! / Let's go there!", reg:null, say:"On y va !", key:"d62_v_onyva" },
        { fr:"en", en:"some / of it (replaces de + a noun)", reg:null, say:"j'en veux", key:"d62_v_en" },
        { fr:"j'en ai pris", en:"I took some (of it)", reg:null, say:"j'en ai pris", key:"d62_v_jenaipris" },
        { fr:"j'en ai mangé", en:"I ate some", reg:null, say:"j'en ai mangé", key:"d62_v_jenaimange" },
        { fr:"Tu y es allé(e) ?", en:"Did you go there? (informal)", reg:"informal", say:"Tu y es allé ?", key:"d62_v_tuyesalle" },
        { fr:"il y en a", en:"there is/are some (of it)", reg:null, say:"il y en a", key:"d62_v_ilyena" }
      ],
      tip:"<b>Y</b> = ‘there’, standing in for <em>à</em> + a place: <em>Tu vas à Nice ? — Oui, j'y vais.</em> <b>En</b> = ‘some / of it’, standing in for <em>de</em> + a noun or a quantity: <em>Tu as pris du café ? — J'en ai pris.</em> This is a light intro — enough to recognise them and use a few set phrases; the full pronoun system comes later. The one rule to keep: they go <em>before</em> the verb."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"You've been there?",
      body:["Chatting about a restaurant — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu connais le petit resto rue de Seine ? Tu y es allé ?", en:"Do you know the little restaurant on Rue de Seine? Have you been there?", say:"Tu connais le petit resto rue de Seine ? Tu y es allé ?", key:"d62_d1" },
        { who:"B", fr:"Oui, j'y suis allé le mois dernier. C'est très bon.", en:"Yes, I went there last month. It's very good.", say:"Oui, j'y suis allé le mois dernier. C'est très bon.", key:"d62_d2" },
        { who:"A", fr:"Ils ont de bons desserts ?", en:"Do they have good desserts?", say:"Ils ont de bons desserts ?", key:"d62_d3" },
        { who:"B", fr:"Oui ! J'en ai pris un, délicieux. On y va ensemble ?", en:"Yes! I had one, delicious. Shall we go there together?", say:"J'en ai pris un, délicieux. On y va ensemble ?", key:"d62_d4" }
      ],
      tip:"<b>Tu y es allé ?</b> → <b>j'y suis allé</b> — y stands in for ‘to the restaurant’, saving the repeat. <b>J'en ai pris un</b> — en = ‘of them (the desserts)’. And the old friend <b>on y va</b> closes it. <em>Resto</em> is casual for <em>restaurant</em>; <em>le mois dernier</em> = last month."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Y’ stands in for…",
          opts:["a person","a place (à + …)","a quantity","a time"], answer:1,
          ok:"Right — y = ‘there’, replacing à + a place.",
          no:"<b>A place</b> — y = ‘there’, standing in for à + a location." },
        { prompt:"‘I went there’:",
          opts:["je suis allé y","j'y suis allé","je y suis allé","j'ai y allé"], answer:1,
          ok:"Right — y goes before the auxiliary: j'y suis allé.",
          no:"<b>J'y suis allé</b> — y attaches in front of the verb/auxiliary." },
        { prompt:"‘Tu as pris du café ? — J'___ ai pris.’",
          opts:["y","en","le","la"], answer:1,
          ok:"Right — en replaces ‘du café’: j'en ai pris.",
          no:"<b>En</b> — it stands in for de + noun (‘du café’ → en)." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The little words that mark a real speaker",
      body:[
        "<b>Y</b> and <b>en</b> are tiny, but dropping them is one of the clearest tells of a beginner. A native never says <em>« Je suis allé à Paris et j'ai aimé Paris »</em> — they say <em>« J'y suis allé et j'ai aimé »</em>, letting the little words carry what was already said. Learning to lean on them makes your French sound lived-in rather than translated.",
        "You don't need the full grammar to start — just a handful of high-frequency chunks. <em>J'y vais</em> (I'm going / I'm off), <em>on y va</em> (let's go), <em>j'en ai</em> (I've got some), <em>il y en a</em> (there's some) will carry you a long way before you ever parse the rule."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 62, done.",
      body:["The past tense is now complete, and your speech flows better. Tomorrow we tie the whole week together."],
      next:"Jour 63 — Révision (week 9 review)"}
  ]
};

const LESSON_63 = {
  day: 63, week: 9,
  title: "Révision — la semaine 9",
  durationMin: 17,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — the whole past, in one story",
      body:[
        "Retrieval day. One chained travel story running the être passé composé, agreement, negation and the sequence words — six questions on the week's pressure points, then your due flashcards, now spanning nine weeks.",
        "The week's real theme: the passé composé is now <em>complete</em>. Avoir for most verbs (week 8), être for the coming-and-going set with agreement (this week), threaded with d'abord/ensuite/enfin into a real narrative."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A weekend away, start to finish",
      body:["Recounting a short trip — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Tu es parti ce week-end ? Raconte !", en:"Did you go away this weekend? Tell me!", say:"Tu es parti ce week-end ? Raconte !", key:"d63_d1" },
        { who:"B", fr:"Oui ! D'abord, je suis allé à Lyon en train, vendredi soir.", en:"Yes! First, I went to Lyon by train, Friday evening.", say:"Oui ! D'abord, je suis allé à Lyon en train, vendredi soir.", key:"d63_d2" },
        { who:"A", fr:"Et sur place, tu as fait quoi ?", en:"And there, what did you do?", say:"Et sur place, tu as fait quoi ?", key:"d63_d3" },
        { who:"B", fr:"Ensuite, j'ai visité le vieux Lyon, et j'y ai mangé une vraie spécialité. Mais je suis tombé malade !", en:"Then I visited old Lyon, and I ate a real speciality there. But I got sick!", say:"Ensuite, j'ai visité le vieux Lyon, et j'y ai mangé une vraie spécialité. Mais je suis tombé malade !", key:"d63_d4" },
        { who:"A", fr:"Oh non ! Tu n'es pas resté longtemps, alors ?", en:"Oh no! You didn't stay long, then?", say:"Tu n'es pas resté longtemps, alors ?", key:"d63_d5" },
        { who:"B", fr:"Non, je suis rentré dimanche matin. Enfin, je suis arrivé chez moi à midi.", en:"No, I came back Sunday morning. Well, I got home at noon.", say:"Non, je suis rentré dimanche matin. Enfin, je suis arrivé chez moi à midi.", key:"d63_d6" }
      ],
      tip:"Every thread fires: être-verbs (<em>suis allé, suis tombé, suis rentré, suis arrivé</em>), an avoir-verb beside them (<em>j'ai visité, j'ai mangé</em>), negation (<em>tu n'es pas resté</em>), the sequence words (<em>d'abord, ensuite, enfin</em>), and <em>y</em> (<em>j'y ai mangé</em>). <em>Tomber malade</em> = to get sick, a set phrase using être."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Semaine 9 — the six that matter",
      questions:[
        { prompt:"‘I arrived’ (arriver):",
          opts:["j'ai arrivé","je suis arrivé","j'ai été arrivé","je arrive"], answer:1,
          ok:"Right — arriver takes être: je suis arrivé.",
          no:"<b>Je suis arrivé</b> — arriver is an être-verb (motion)." },
        { prompt:"A woman writes ‘I stayed’:",
          opts:["je suis resté","je suis restée","j'ai restée","je suis restés"], answer:1,
          ok:"Right — restée, with the feminine agreement (silent, but written).",
          no:"<b>Je suis restée</b> — être-agreement adds -e for a female subject." },
        { prompt:"‘J'ai sorti le chien’ takes avoir because…",
          opts:["it's wrong","sortir has a direct object here (le chien)","the dog is masculine","it's plural"], answer:1,
          ok:"Right — with a direct object, sortir flips to avoir.",
          no:"<b>It has a direct object</b> — that flips sortir from être to avoir." },
        { prompt:"‘Elles sont allées’ vs ‘ils sont allés’ sound…",
          opts:["different","the same (both /ale/)","only -es is heard","only -s is heard"], answer:1,
          ok:"Right — both /ale/; the endings are silent.",
          no:"<b>The same</b> — agreement here is written, not heard." },
        { prompt:"Which opens a sequence?",
          opts:["enfin","ensuite","d'abord","pendant"], answer:2,
          ok:"Right — d'abord (first); enfin closes.",
          no:"<b>D'abord</b> — ‘first’. Enfin means ‘finally’." },
        { prompt:"‘I went there’ — replacing the place with y:",
          opts:["je suis allé y","j'y suis allé","je y suis allé","j'en suis allé"], answer:1,
          ok:"Right — j'y suis allé; y sits before the auxiliary.",
          no:"<b>J'y suis allé</b> — y (‘there’) goes in front of the verb." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Nine weeks of vocabulary now feed this queue — through the café, the streets, the clock, shopping, home, and both halves of the past tense. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Nine weeks: you can tell a story",
      body:[
        "The past tense is complete. With week 8's avoir and this week's être-plus-agreement, you can now narrate: what you did, where you went, what didn't happen, and in what order — <em>d'abord… ensuite… enfin</em>. That's the jump from stating facts to <em>telling a story</em>, and it's most of what everyday conversation actually is.",
        "The honest boundary — and next week's turn: so far you can talk about now (present) and before (past), but not yet <em>ahead</em>. Week 10 adds the near future — <b>le futur proche</b> (<em>je vais partir</em>, ‘I'm going to leave’) — plus making plans, inviting, and turning someone down politely. Past, present, and future: the full timeline by the end of next week."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 9 — complète.",
      body:["Sixty-three stations — three quarters of the line, and the past tense finished. Next week: plans, invitations, and the near future."],
      next:"Semaine 10, Jour 64 — Le futur proche : je vais partir"}
  ]
};

export const WEEK9 = [LESSON_57, LESSON_58, LESSON_59, LESSON_60, LESSON_61, LESSON_62, LESSON_63];
