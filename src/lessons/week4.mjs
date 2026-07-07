/* Week 4 — Days 22–28. The city & directions: aller + au/à la/aux,
   the imperative (tournez, continuez), the métro, prepositions of place,
   and the arrondissements. Leaves the café table for the street. */

const LESSON_22 = {
  day: 22, week: 4,
  title: "Aller : je vais au, à la, aux",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The verb that gets you places",
      body:[
        "Week 4 leaves the table and hits the street. It starts with the one verb every trip needs — <b>aller</b>, ‘to go’ — and the little fused words that ride with it: <b>au</b>, <b>aux</b>.",
        "Good news from week 3: you already own the machinery. à + le = au, à + les = aux — the same fusion you met as du and des, wearing a different hat."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"au, aux, and a vais that isn't ‘vay’",
      body:["Three sounds you'll say every time you go anywhere:"],
      pairs:[
        { fr:"au musée", ipa:"/o my.ze/", en:"à + le, fused to a clean /o/", say:"au musée", key:"d22_aumusee" },
        { fr:"aux Invalides", ipa:"/o.zɛ̃.va.lid/", en:"à + les — the x wakes as /z/ before a vowel", say:"aux Invalides", key:"d22_auxinvalides" },
        { fr:"je vais", ipa:"/ʒə vɛ/", en:"rhymes with ‘mais’, not English ‘vay’", say:"je vais", key:"d22_jevais" }
      ],
      tip:"<b>à + le = au</b>, <b>à + les = aux</b> — mandatory, exactly like week 3's du/des. ‘à le musée’ does not exist. And before a vowel, <b>aux</b> liaises: aux‿Invalides = ‘o-zANvalid’."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"aller, and where it takes you",
      items:[
        { fr:"je vais", en:"I go / I'm going", reg:null, say:"je vais", key:"d22_v_jevais" },
        { fr:"tu vas", en:"you go (informal)", reg:"informal", say:"tu vas", key:"d22_v_tuvas" },
        { fr:"on va", en:"we go (everyday ‘we’)", reg:"informal", say:"on va", key:"d22_v_onva" },
        { fr:"vous allez", en:"you go (formal / plural)", reg:"formal", say:"vous allez", key:"d22_v_vousallez" },
        { fr:"au musée", en:"to the museum (à + le)", reg:null, say:"au musée", key:"d22_v_aumusee" },
        { fr:"à la gare", en:"to the station (à la — no fusion)", reg:null, say:"à la gare", key:"d22_v_alagare" },
        { fr:"aux toilettes", en:"to the toilets (à + les — always plural!)", reg:null, say:"aux toilettes", key:"d22_v_auxtoilettes" },
        { fr:"Je vais à Paris", en:"I'm going to Paris (a city takes plain à)", reg:null, say:"Je vais à Paris", key:"d22_v_apar" }
      ],
      tip:"<b>Aller</b> is irregular — learn it as a block: je vais, tu vas, on/il va, vous allez. Destinations: a <em>city</em> takes bare <b>à</b> (à Paris); a <em>place with an article</em> fuses it (au musée, à la gare, aux toilettes). Note the toilets are always plural in French — <b>aux</b> toilettes, never ‘à la toilette’."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Where are you off to?",
      body:["Two friends crossing paths — <b>tu</b>, quick and casual."],
      turns:[
        { who:"A", fr:"Salut ! Tu vas où ?", en:"Hi! Where are you going?", say:"Salut ! Tu vas où ?", key:"d22_d1" },
        { who:"B", fr:"Je vais au musée. Et toi ?", en:"I'm going to the museum. And you?", say:"Je vais au musée. Et toi ?", key:"d22_d2" },
        { who:"A", fr:"Moi, je vais à la gare. On y va ensemble ?", en:"Me, I'm going to the station. Shall we go together?", say:"Moi, je vais à la gare. On y va ensemble ?", key:"d22_d3" },
        { who:"B", fr:"D'accord ! On y va.", en:"OK! Let's go.", say:"D'accord ! On y va.", key:"d22_d4" }
      ],
      tip:"<b>Tu vas où ?</b> — spoken French happily puts the question word last and skips inversion. <b>On y va</b> is a two-for-one chunk: literally ‘we go there’ (the <em>y</em> = ‘there’), it means both ‘shall we go?’ and ‘let's go!’. Grab it whole; the grammar of <em>y</em> arrives in week 9."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I'm going to the museum’:",
          opts:["Je vais à le musée","Je vais au musée","Je vais le musée","Je vais à musée"], answer:1,
          ok:"Right — à + le fuses to <b>au</b>. ‘à le musée’ can't exist.",
          no:"<b>Je vais au musée</b> — à + le is always fused to au." },
        { prompt:"<b>Je vais</b> rhymes with…",
          opts:["English ‘vay’","‘mais’ (/vɛ/)","‘vee’","‘voh’"], answer:1,
          ok:"Yes — /ʒə vɛ/, the open è vowel, same as mais.",
          no:"It's /vɛ/ — rhymes with <em>mais</em>, not English ‘vay’." },
        { prompt:"‘to the toilets’:",
          opts:["à la toilette","au toilette","aux toilettes","à toilettes"], answer:2,
          ok:"Exactly — always plural, and à + les = aux toilettes.",
          no:"<b>Aux toilettes</b> — French keeps them plural, so à + les = aux." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Où sont les toilettes ?",
      body:[
        "The single most useful destination in this lesson. Public toilets are scarce in Paris and the ones on the street (<em>les sanisettes</em>, the self-cleaning grey pods) are free but often occupied. The reliable move is a café: order something small — <em>un café</em> at the bar is a euro or two — and the toilets are yours.",
        "Ask <b>« Où sont les toilettes, s'il vous plaît ? »</b> (plural <em>sont</em>, because plural toilettes). Downstairs is the usual answer — <em>au sous-sol</em> — down a narrow spiral staircase that is a rite of passage all its own."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 22, done.",
      body:["You can now state a destination in real French. Tomorrow: how to get there — left, right, and straight on."],
      next:"Jour 23 — À droite, à gauche, tout droit"}
  ]
};

const LESSON_23 = {
  day: 23, week: 4,
  title: "À droite, à gauche, tout droit",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Left, right, straight — and the command forms",
      body:[
        "You can name a destination; now, the directions to reach it. Three words do most of the work — <b>à droite</b>, <b>à gauche</b>, <b>tout droit</b> — plus the polite command forms (<b>tournez</b>, <b>continuez</b>) you'll hear in every set of directions ever given to you.",
        "And a one-letter trap that flips ‘straight ahead’ into ‘to the right’."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"droit vs droite — a silent t that isn't",
      body:["One added e, one audible t, opposite instruction:"],
      pairs:[
        { fr:"tout droit", ipa:"/tu dʁwa/", en:"straight ahead — final t silent", say:"tout droit", key:"d23_toutdroit" },
        { fr:"à droite", ipa:"/a dʁwat/", en:"to the right — the -e wakes the t", say:"à droite", key:"d23_adroite" },
        { fr:"à gauche", ipa:"/a goʃ/", en:"to the left — clean /ʃ/", say:"à gauche", key:"d23_agauche" }
      ],
      tip:"<b>droit</b> /dʁwa/ = straight; <b>droite</b> /dʁwat/ = right. The feminine -e makes the final t sound — exactly the petit/petite mechanism from day 2. Miss it and you'll send someone the wrong way."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Directions, and orders to follow them",
      items:[
        { fr:"à droite", en:"to the right / on the right", reg:null, say:"à droite", key:"d23_v_droite" },
        { fr:"à gauche", en:"to the left / on the left", reg:null, say:"à gauche", key:"d23_v_gauche" },
        { fr:"tout droit", en:"straight ahead", reg:null, say:"tout droit", key:"d23_v_toutdroit" },
        { fr:"Tournez", en:"Turn (command)", reg:"formal", say:"Tournez", key:"d23_v_tournez" },
        { fr:"Continuez", en:"Keep going (command)", reg:"formal", say:"Continuez", key:"d23_v_continuez" },
        { fr:"Traversez", en:"Cross (command)", reg:"formal", say:"Traversez", key:"d23_v_traversez" },
        { fr:"jusqu'à", en:"up to / as far as", reg:null, say:"jusqu'à", key:"d23_v_jusqua" },
        { fr:"C'est loin ?", en:"Is it far?", reg:null, say:"C'est loin ?", key:"d23_v_cestloin" }
      ],
      tip:"Those <b>-ez</b> commands are the <em>vous</em> imperative — just the vous form with the pronoun dropped (vous tournez → <b>Tournez !</b>). They're what a stranger giving you directions will use. <b>jusqu'à</b> = ‘up to / as far as’: <em>continuez jusqu'au feu</em> — keep going up to the traffic light (jusqu'à + le = jusqu'au, the fusion again)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Finding the métro",
      body:["A stranger gives directions — <b>vous</b>. Note the smart move: repeating them back."],
      turns:[
        { who:"A", fr:"Pardon, la station de métro, s'il vous plaît ?", en:"Excuse me, the métro station, please?", say:"Pardon, la station de métro, s'il vous plaît ?", key:"d23_d1" },
        { who:"B", fr:"Alors… continuez tout droit, puis tournez à droite.", en:"So… keep going straight, then turn right.", say:"Alors… continuez tout droit, puis tournez à droite.", key:"d23_d2" },
        { who:"A", fr:"Tout droit, puis à droite. C'est loin ?", en:"Straight, then right. Is it far?", say:"Tout droit, puis à droite. C'est loin ?", key:"d23_d3" },
        { who:"B", fr:"Non, c'est à cinq minutes. C'est juste là.", en:"No, it's five minutes away. It's right there.", say:"Non, c'est à cinq minutes. C'est juste là.", key:"d23_d4" },
        { who:"A", fr:"Merci beaucoup !", en:"Thank you very much!", say:"Merci beaucoup !", key:"d23_d5" }
      ],
      tip:"Repeating the directions back (<em>tout droit, puis à droite</em>) is normal and smart — it confirms you got them. <b>puis</b> = then; <b>c'est à cinq minutes</b> = it's five minutes away (à + a duration = ‘away’); <b>juste là</b> = right there. <b>Alors…</b> is the French ‘so…/right then…’, the sound of someone gathering their thoughts."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘Straight ahead’:",
          opts:["à droite","tout droit","à gauche","tout de suite"], answer:1,
          ok:"Right — tout droit, the t silent.",
          no:"<b>Tout droit</b> — ‘all straight’. à droite is <em>right</em>." },
        { prompt:"<b>droite</b> has an audible t because of…",
          opts:["stress","the final -e","the r","liaison"], answer:1,
          ok:"Yes — the feminine -e sounds the final t: /dʁwat/. Straight (droit) is /dʁwa/.",
          no:"The <b>-e</b> — it wakes the final t, exactly like petit → petite." },
        { prompt:"A stranger tells you to turn. You'll hear:",
          opts:["Tourne","Tournez","Tournons","Tourner"], answer:1,
          ok:"Right — the vous imperative, <b>Tournez</b>, is the polite default with strangers.",
          no:"<b>Tournez</b> — the vous command form is what a stranger uses. <em>Tourne</em> is the tu version." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"How Parisians actually give directions",
      body:[
        "Two things to expect. First, landmarks over street names: you'll be routed by <em>le feu</em> (the traffic light), <em>la boulangerie</em>, <em>la place</em> — not by ‘Rue de Rivoli for 200 metres’. Second, hands: directions come with generous gesturing, so watch as much as you listen.",
        "And the opener matters. <b>« Pardon… »</b> or <b>« Excusez-moi… »</b> before the question — and ideally a <em>bonjour</em> first — turns a stranger from wary to helpful. Skipping straight to the question reads as brusque. You've been training this reflex since week 1; it pays off on the street."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 23, done.",
      body:["You can follow a set of spoken directions. Tomorrow the directions go underground — the métro."],
      next:"Jour 24 — Le métro : direction, correspondance, sortie"}
  ]
};

const LESSON_24 = {
  day: 24, week: 4,
  title: "Le métro : direction, correspondance, sortie",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The métro has its own language",
      body:[
        "Sixteen lines, one flat fare, and a small vocabulary that unlocks the whole map. Learn <b>direction</b>, <b>correspondance</b> and <b>sortie</b> and you can cross Paris underground without a word of English.",
        "The trick word is <b>direction</b> — which down here doesn't mean left or right at all."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The sounds the métro says back to you",
      body:["Three you'll hear on the platform and in the announcements:"],
      pairs:[
        { fr:"direction", ipa:"/di.ʁɛk.sjɔ̃/", en:"-tion = /sjɔ̃/, never English ‘shun’", say:"direction", key:"d24_direction" },
        { fr:"correspondance", ipa:"/kɔ.ʁɛs.pɔ̃.dɑ̃s/", en:"two nasals: pɔ̃ then dɑ̃", say:"correspondance", key:"d24_correspondance" },
        { fr:"prochain arrêt", ipa:"/pʁɔ.ʃɛ.na.ʁɛ/", en:"‘next stop’ — the n liaises onto arrêt", say:"prochain arrêt", key:"d24_prochainarret" }
      ],
      tip:"French <b>-tion</b> is always /sjɔ̃/ — direction, station, correspondance's family — never the English ‘shun’. And <b>prochain arrêt</b> (next stop) is the phrase every métro voice repeats; the latent n of <em>prochain</em> links straight onto <em>arrêt</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The map, in words",
      items:[
        { fr:"la station", en:"the (métro) station", reg:null, say:"la station", key:"d24_v_station" },
        { fr:"la ligne", en:"the line (numbered 1–14)", reg:null, say:"la ligne", key:"d24_v_ligne" },
        { fr:"la direction", en:"the direction — i.e. the end-of-line station you head toward", reg:null, say:"la direction", key:"d24_v_direction" },
        { fr:"la correspondance", en:"the connection / transfer between lines", reg:null, say:"la correspondance", key:"d24_v_correspondance" },
        { fr:"la sortie", en:"the exit", reg:null, say:"la sortie", key:"d24_v_sortie" },
        { fr:"le quai", en:"the platform", reg:null, say:"le quai", key:"d24_v_quai" },
        { fr:"le plan", en:"the map", reg:null, say:"le plan", key:"d24_v_plan" },
        { fr:"le Navigo", en:"the Navigo (the transit pass you tap)", reg:null, say:"le Navigo", key:"d24_v_navigo" }
      ],
      tip:"The whole system in one breath: pick your <b>ligne</b>, follow the <b>direction</b> (named by the line's last station), change at a <b>correspondance</b>, leave by the <b>sortie</b>. The word <em>direction</em> is the key mental flip — it names a terminus, not left/right. ‘Ligne 1, direction Château de Vincennes’ means the eastbound platform."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Which platform?",
      body:["Asking a passer-by for help underground — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Excusez-moi, pour aller à Bastille ?", en:"Excuse me, how do I get to Bastille?", say:"Excusez-moi, pour aller à Bastille ?", key:"d24_d1" },
        { who:"B", fr:"Prenez la ligne 1, direction Château de Vincennes.", en:"Take line 1, direction Château de Vincennes.", say:"Prenez la ligne 1, direction Château de Vincennes.", key:"d24_d2" },
        { who:"A", fr:"La ligne 1… et c'est direct ?", en:"Line 1… and is it direct?", say:"La ligne 1… et c'est direct ?", key:"d24_d3" },
        { who:"B", fr:"Oui, direct. Quatre stations. La sortie est bien indiquée.", en:"Yes, direct. Four stations. The exit is well signposted.", say:"Oui, direct. Quatre stations. La sortie est bien indiquée.", key:"d24_d4" },
        { who:"A", fr:"Parfait, merci !", en:"Perfect, thanks!", say:"Parfait, merci !", key:"d24_d5" }
      ],
      tip:"<b>Pour aller à… ?</b> — ‘to get to…?’ — is the single most useful direction question in French; you'll drill it properly tomorrow. <b>Prenez</b> = ‘take’ (the vous command, like yesterday's tournez). <b>C'est direct ?</b> asks whether you can stay on one line — no correspondance."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"In the métro, <b>direction</b> means…",
          opts:["turn left or right","the terminus you're heading toward","the exit","the ticket"], answer:1,
          ok:"Right — it names the last station of the line, telling you which platform.",
          no:"It's the <b>terminus</b> you head toward — the line's end station, which fixes your platform." },
        { prompt:"You need to change lines. You're looking for a…",
          opts:["sortie","correspondance","quai","plan"], answer:1,
          ok:"Yes — a <b>correspondance</b> is the transfer between lines.",
          no:"A <b>correspondance</b> — the connection between lines. <em>Sortie</em> is the exit out." },
        { prompt:"‘How do I get to Bastille?’ — the natural phrasing:",
          opts:["Où Bastille ?","Comment Bastille ?","Pour aller à Bastille ?","Bastille, direction ?"], answer:2,
          ok:"Exactly — <b>Pour aller à…?</b> is the idiomatic ‘how do I get to…?’",
          no:"<b>Pour aller à Bastille ?</b> — the set phrase for asking the way to a place." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Riding it like a local",
      body:[
        "One flat fare crosses the whole métro, no matter how far or how many changes — but keep your ticket or tap your <b>Navigo</b> until you're out, because exits and RER gates check it. The old paper <em>carnet</em> of ten tickets has been phased out; it's now a single <em>ticket t+</em>, a rechargeable <em>Navigo Easy</em> card, or contactless.",
        "Two things worth knowing: the <b>RER</b> (the fast regional trains, lettered A–E) shares central stations with the métro but runs in zones and can cost more — don't board one for a two-stop hop expecting a métro fare. And the last métro leaves around 00:45 on weeknights (about 01:45 Fri–Sat); after that it's Noctilien buses or a long walk."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 24, done.",
      body:["The map is legible now. Tomorrow: what to do when you're above ground and thoroughly lost."],
      next:"Jour 25 — Je suis perdu : demander son chemin"}
  ]
};

const LESSON_25 = {
  day: 25, week: 4,
  title: "Je suis perdu : demander son chemin",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The lost-traveller survival kit",
      body:[
        "Everything you need for the moment the map fails you: <b>I'm lost</b>, <b>I'm looking for…</b>, <b>where is…?</b>, <b>is it near?</b>, and the repair phrase <b>can you repeat?</b>. With these you can stop anyone and get yourself unstuck.",
        "One phrase does the heavy lifting: <b>Pour aller à… ?</b>"
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Two /y/-ish traps and a question melody",
      body:["The sounds inside the survival phrases:"],
      pairs:[
        { fr:"je suis perdu", ipa:"/ʒə sɥi pɛʁ.dy/", en:"the day-1 /y/ again — lips tight and forward", say:"je suis perdu", key:"d25_perdu" },
        { fr:"je cherche", ipa:"/ʒə ʃɛʁʃ/", en:"two /ʃ/ sounds bracketing the r", say:"je cherche", key:"d25_cherche" },
        { fr:"Où est… ?", ipa:"/u ɛ/", en:"where is…? — a rising melody marks the question", say:"Où est la gare ?", key:"d25_ouest" }
      ],
      tip:"<b>perdu</b> ends in the /y/ from day 1 (lips as if for ‘ee’, then say ‘oo’). And in casual speech a wh-question often keeps statement order with a rising tone — <em>La gare, c'est où ?</em> works as well as <em>Où est la gare ?</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Getting yourself unstuck",
      items:[
        { fr:"Je suis perdu(e)", en:"I'm lost (add -e if you're female)", reg:null, say:"Je suis perdu", key:"d25_v_perdu" },
        { fr:"Je cherche…", en:"I'm looking for…", reg:null, say:"Je cherche", key:"d25_v_cherche" },
        { fr:"Où est… ?", en:"Where is…?", reg:null, say:"Où est", key:"d25_v_ouest" },
        { fr:"Pour aller à… ?", en:"How do I get to…?", reg:null, say:"Pour aller à", key:"d25_v_pouraller" },
        { fr:"C'est près ?", en:"Is it nearby?", reg:null, say:"C'est près ?", key:"d25_v_cestpres" },
        { fr:"à pied", en:"on foot", reg:null, say:"à pied", key:"d25_v_apied" },
        { fr:"Vous pouvez répéter ?", en:"Can you repeat? (formal)", reg:"formal", say:"Vous pouvez répéter ?", key:"d25_v_repeter" },
        { fr:"sur le plan", en:"on the map", reg:null, say:"sur le plan", key:"d25_v_surleplan" }
      ],
      tip:"<b>Pour aller à… ?</b> + a place is the most useful direction question you own — it politely implies the whole ‘excuse me, how would I get to…’. Pair it with <b>Je suis perdu(e)</b> to open and <b>Vous pouvez répéter ?</b> to recover, and you can never get truly stranded. (A woman writes and says <em>perdue</em> — the extra e is silent but correct.)"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Looking for the Louvre",
      body:["A lost visitor and a helpful local — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Excusez-moi, je suis perdu. Je cherche le Louvre.", en:"Excuse me, I'm lost. I'm looking for the Louvre.", say:"Excusez-moi, je suis perdu. Je cherche le Louvre.", key:"d25_d1" },
        { who:"B", fr:"Le Louvre ? Vous êtes tout près ! C'est au bout de la rue.", en:"The Louvre? You're very close! It's at the end of the street.", say:"Le Louvre ? Vous êtes tout près ! C'est au bout de la rue.", key:"d25_d2" },
        { who:"A", fr:"Ah ! C'est loin à pied ?", en:"Ah! Is it far on foot?", say:"Ah ! C'est loin à pied ?", key:"d25_d3" },
        { who:"B", fr:"Non, deux minutes. Tout droit, et c'est sur votre gauche.", en:"No, two minutes. Straight ahead, and it's on your left.", say:"Non, deux minutes. Tout droit, et c'est sur votre gauche.", key:"d25_d4" },
        { who:"A", fr:"Merci infiniment !", en:"Thank you so much!", say:"Merci infiniment !", key:"d25_d5" }
      ],
      tip:"<b>tout près</b> = very close; <b>au bout de la rue</b> = at the end of the street; <b>à pied</b> = on foot; <b>sur votre gauche</b> = on your left (yesterday's à gauche, now possessive). <b>Merci infiniment</b> is a warmer thank-you than <em>merci beaucoup</em> — good for when someone's genuinely rescued you."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘I'm looking for the station’:",
          opts:["Je suis la station","Je cherche la station","Je vais la station","Je regarde la station"], answer:1,
          ok:"Right — <b>chercher</b> = to look for. (No ‘for’ needed — it's built in.)",
          no:"<b>Je cherche la station</b> — chercher already means ‘look <em>for</em>’, so no extra word." },
        { prompt:"The politest way to ask the way to the Louvre:",
          opts:["Où Louvre ?","Le Louvre où ?","Pour aller au Louvre, s'il vous plaît ?","Louvre ?"], answer:2,
          ok:"Yes — Pour aller à + le = au Louvre, capped with s'il vous plaît.",
          no:"<b>Pour aller au Louvre, s'il vous plaît ?</b> — the full polite form (and à + le = au)." },
        { prompt:"A woman writes ‘I'm lost’:",
          opts:["Je suis perdu","Je suis perdue","Je suis perdus","Je suis perds"], answer:1,
          ok:"Right — feminine agreement adds a silent -e: perdue.",
          no:"<b>Je suis perdue</b> — the feminine adds -e (silent, but written)." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Will a Parisian actually help you?",
      body:[
        "The reputation is worse than the reality. Lead with <b>bonjour</b> and an attempt at French — even a broken one — and most Parisians will stop and help, often walking you part of the way. The stereotype of the icy local usually comes from tourists who open in English with no greeting, which reads as rude, not efficient.",
        "So the formula is: <em>Bonjour</em>, then <b>« Excusez-moi, je cherche… »</b>, then let them help. Your phone's map is always the backup — but the human version is faster, friendlier, and quietly good French practice."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 25, done.",
      body:["You can rescue yourself anywhere now. Tomorrow: pinpointing exactly where things are — next to, across from, between."],
      next:"Jour 26 — À côté de, en face de, entre"}
  ]
};

const LESSON_26 = {
  day: 26, week: 4,
  title: "À côté de, en face de, entre",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"From ‘over there’ to ‘exactly there’",
      body:[
        "The prepositions of place — <b>next to</b>, <b>across from</b>, <b>in front of</b>, <b>behind</b>, <b>between</b>, <b>at the corner of</b>. They turn a vague gesture into a precise location.",
        "And here's the payoff from week 3: most of them end in <b>de</b>, so your du/de la/des fusion springs right back to life."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"de, du, des — the fusion returns",
      body:["Same contraction as the partitive, now inside location phrases:"],
      pairs:[
        { fr:"à côté du", ipa:"/a ko.te dy/", en:"next to the — de + le = du", say:"à côté du café", key:"d26_acotedu" },
        { fr:"en face de la", ipa:"/ɑ̃ fas də la/", en:"across from the — de la, no fusion", say:"en face de la gare", key:"d26_enfacedela" },
        { fr:"au coin des", ipa:"/o kwɛ̃ de/", en:"at the corner of the — de + les = des", say:"au coin des rues", key:"d26_aucoindes" }
      ],
      tip:"These phrases end in <b>de</b>, so week 3's rule fires automatically: <b>de + le = du</b>, <b>de + les = des</b> (de la and de l' don't fuse). à côté <b>du</b> café, en face <b>de la</b> gare, au coin <b>des</b> rues."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Locating things precisely",
      items:[
        { fr:"à côté de", en:"next to", reg:null, say:"à côté de", key:"d26_v_acote" },
        { fr:"en face de", en:"across from / opposite", reg:null, say:"en face de", key:"d26_v_enface" },
        { fr:"devant", en:"in front of", reg:null, say:"devant", key:"d26_v_devant" },
        { fr:"derrière", en:"behind", reg:null, say:"derrière", key:"d26_v_derriere" },
        { fr:"entre", en:"between", reg:null, say:"entre", key:"d26_v_entre" },
        { fr:"au coin de", en:"at the corner of", reg:null, say:"au coin de", key:"d26_v_aucoin" },
        { fr:"près de", en:"near", reg:null, say:"près de", key:"d26_v_presde" },
        { fr:"loin de", en:"far from", reg:null, say:"loin de", key:"d26_v_loinde" }
      ],
      tip:"Split them into two groups. <b>devant</b>, <b>derrière</b> and <b>entre</b> stand alone — <em>devant la gare</em>, no ‘de’. The rest take <b>de</b> and fuse it: <em>près du parc</em>, <em>en face de l'église</em>, <em>à côté des toilettes</em>. Small pattern, big precision gain."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Where exactly is the café?",
      body:["Two friends pinpointing a meeting spot — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Le café est où, exactement ?", en:"Where's the café, exactly?", say:"Le café est où, exactement ?", key:"d26_d1" },
        { who:"B", fr:"Il est en face de la gare, à côté de la pharmacie.", en:"It's across from the station, next to the pharmacy.", say:"Il est en face de la gare, à côté de la pharmacie.", key:"d26_d2" },
        { who:"A", fr:"En face de la gare… d'accord. Et le métro ?", en:"Across from the station… OK. And the métro?", say:"En face de la gare… d'accord. Et le métro ?", key:"d26_d3" },
        { who:"B", fr:"Juste derrière toi ! Au coin de la rue.", en:"Right behind you! On the corner.", say:"Juste derrière toi ! Au coin de la rue.", key:"d26_d4" },
        { who:"A", fr:"Ah, parfait. Je le vois !", en:"Ah, perfect. I see it!", say:"Ah, parfait. Je le vois !", key:"d26_d5" }
      ],
      tip:"Stacking two prepositions — <em>en face de la gare, à côté de la pharmacie</em> — is exactly how the French zero in on a spot. <b>derrière toi</b> = behind you; <b>je le vois</b> = I see it (the <em>le</em> stands in for <em>le café</em> — object pronouns, a taste before week 9)."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: ‘next to the café’ — <b>à côté ___ café</b>",
          opts:["à côté de le café","à côté du café","à côté le café","à côté des café"], answer:1,
          ok:"Right — de + le = du. The week-3 fusion, back again.",
          no:"<b>à côté du café</b> — de + le fuses to du, every time." },
        { prompt:"<b>en face de</b> means…",
          opts:["behind","next to","across from","far from"], answer:2,
          ok:"Yes — opposite / facing.",
          no:"<b>Across from</b> / opposite. Behind is <em>derrière</em>." },
        { prompt:"Which one takes NO ‘de’ after it?",
          opts:["près","à côté","devant","en face"], answer:2,
          ok:"Right — devant (like derrière and entre) stands alone: <em>devant la gare</em>.",
          no:"<b>devant</b> — it, derrière and entre attach directly, with no de." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"A city that navigates by landmarks",
      body:[
        "Paris has no tidy grid and street numbers can be maddening (they don't always run the way you expect), so Parisians locate everything by relation: <em>en face du tabac</em>, <em>à côté de la boulangerie</em>, <em>au coin de la rue</em>. Learning to hear and give these is worth more than any street name.",
        "And the café is the universal fixed point. <b>« On se retrouve au café d'en face ? »</b> — ‘shall we meet at the café across the way?’ — assumes everyone knows which café, because there's always one, and it's always <em>en face</em> of something."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 26, done.",
      body:["You can now pin a location to the exact corner. Tomorrow: the bigger map — the arrondissements and the two banks of the Seine."],
      next:"Jour 27 — Les arrondissements : rive gauche, rive droite"}
  ]
};

const LESSON_27 = {
  day: 27, week: 4,
  title: "Les arrondissements : rive gauche, rive droite",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Paris, by neighborhood",
      body:[
        "How Parisians actually carry the city in their heads: twenty <b>arrondissements</b> spiralling outward, the <b>Seine</b> splitting <b>rive gauche</b> from <b>rive droite</b>, and a handful of landmarks everyone steers by.",
        "Plus the ordinal numbers — <em>premier, cinquième, dix-huitième</em> — that name the districts."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Ordinals: number + -ième",
      body:["The endings that turn 5 into ‘fifth’:"],
      pairs:[
        { fr:"le premier", ipa:"/lə pʁə.mje/", en:"the 1st — the one irregular ordinal", say:"le premier", key:"d27_premier" },
        { fr:"le cinquième", ipa:"/lə sɛ̃.kjɛm/", en:"the 5th — -ième sounds /jɛm/", say:"le cinquième", key:"d27_cinquieme" },
        { fr:"rive gauche", ipa:"/ʁiv goʃ/", en:"left bank — the day-23 gauche returns", say:"rive gauche", key:"d27_rivegauche" }
      ],
      tip:"Ordinals = number + <b>-ième</b> (deux → deuxième, cinq → cinquième, dix-huit → dix-huitième), pronounced /jɛm/. Only <b>premier / première</b> (1st) is irregular. Arrondissements live on these: <em>le 5e</em> (cinquième), <em>le 16e</em> (seizième)."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The shape of the city",
      items:[
        { fr:"un arrondissement", en:"a district of Paris (there are 20)", reg:null, say:"un arrondissement", key:"d27_v_arrondissement" },
        { fr:"le premier (1er)", en:"the 1st (arrondissement)", reg:null, say:"le premier", key:"d27_v_premier" },
        { fr:"la Seine", en:"the Seine (the river through Paris)", reg:null, say:"la Seine", key:"d27_v_seine" },
        { fr:"la rive gauche", en:"the Left Bank (south of the Seine)", reg:null, say:"la rive gauche", key:"d27_v_rivegauche" },
        { fr:"la rive droite", en:"the Right Bank (north of the Seine)", reg:null, say:"la rive droite", key:"d27_v_rivedroite" },
        { fr:"la Tour Eiffel", en:"the Eiffel Tower (feminine!)", reg:null, say:"la Tour Eiffel", key:"d27_v_toureiffel" },
        { fr:"le pont", en:"the bridge", reg:null, say:"le pont", key:"d27_v_pont" },
        { fr:"le quartier", en:"the neighborhood (the lived-in unit)", reg:null, say:"le quartier", key:"d27_v_quartier" }
      ],
      tip:"The 20 arrondissements spiral <em>clockwise</em> from the 1st in the centre outward — locals say <b>« j'habite dans le 11e »</b>. The Seine cuts the city in two: <b>rive gauche</b> to the south, <b>rive droite</b> to the north. And note <em>la</em> Tour Eiffel is feminine. <b>Quartier</b> ≠ arrondissement: the quartier is your small, lived-in patch; the arrondissement is the administrative box around it."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Which arrondissement do you live in?",
      body:["Two acquaintances comparing neighborhoods — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Tu habites dans quel arrondissement ?", en:"Which arrondissement do you live in?", say:"Tu habites dans quel arrondissement ?", key:"d27_d1" },
        { who:"B", fr:"Dans le 5e, sur la rive gauche. Et toi ?", en:"In the 5th, on the Left Bank. And you?", say:"Dans le cinquième, sur la rive gauche. Et toi ?", key:"d27_d2" },
        { who:"A", fr:"Moi, dans le 18e, à côté de Montmartre.", en:"Me, in the 18th, next to Montmartre.", say:"Moi, dans le dix-huitième, à côté de Montmartre.", key:"d27_d3" },
        { who:"B", fr:"Ah, la rive droite ! C'est loin de mon quartier.", en:"Ah, the Right Bank! That's far from my neighborhood.", say:"Ah, la rive droite ! C'est loin de mon quartier.", key:"d27_d4" },
        { who:"A", fr:"Oui, mais il y a un métro direct !", en:"Yes, but there's a direct métro!", say:"Oui, mais il y a un métro direct !", key:"d27_d5" }
      ],
      tip:"<b>dans quel arrondissement ?</b> = ‘in which district?’ — the standard get-to-know-you question in Paris. Note the audio reads the ordinals in full (<em>le cinquième</em>, <em>le dix-huitième</em>) even though writing abbreviates them <em>5e, 18e</em>. And <em>loin de</em> and <em>à côté de</em> from yesterday, already at work."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘The 5th’ (arrondissement):",
          opts:["le cinq","le cinquième","le cinqé","la cinquième"], answer:1,
          ok:"Right — cinq + -ième = cinquième, /sɛ̃.kjɛm/.",
          no:"<b>le cinquième</b> — ordinal = number + -ième." },
        { prompt:"<b>La rive gauche</b> is…",
          opts:["a bridge","the Left Bank","an arrondissement","the river itself"], answer:1,
          ok:"Yes — the Left Bank, south of the Seine.",
          no:"The <b>Left Bank</b> — the southern side of the Seine. The river is <em>la Seine</em>." },
        { prompt:"‘Which arrondissement do you live in?’ (to a friend):",
          opts:["Où arrondissement ?","Tu habites dans quel arrondissement ?","Quel tu habites ?","Vous habitez quel ?"], answer:1,
          ok:"Right — the everyday tu form, with quel = which.",
          no:"<b>Tu habites dans quel arrondissement ?</b> — quel = which, tu for a friend." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The snail, and the two banks",
      body:[
        "The arrondissements coil out from the centre like a snail's shell — the French even call the shape <em>l'escargot</em>. The 1st is dead centre on the Right Bank; the numbers spiral clockwise to the 20th out east. This is why a Parisian's neighborhood is social shorthand: <em>le 16e</em> reads posh-and-quiet, <em>le 20e</em> reads young-and-mixed.",
        "The <b>rive gauche</b> / <b>rive droite</b> split is half geography, half myth: the Left Bank carries a bookish, café-philosopher reputation (the Sorbonne, Saint-Germain), the Right Bank a more commercial, fashion-and-business one. And a neat callback to week 3's numbers: the postcode encodes the district — <b>750</b>05 is the 5th, <b>750</b>18 the 18th."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 27, done.",
      body:["You can place yourself on the map of Paris the way locals do. Tomorrow we tie the whole week together."],
      next:"Jour 28 — Révision (week 4 review)"}
  ]
};

const LESSON_28 = {
  day: 28, week: 4,
  title: "Révision — la semaine 4",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — the getting-around week",
      body:[
        "Retrieval day. One chained dialogue that navigates from ‘I'm lost’ to a platform, six questions on the week's pressure points, then your due flashcards — now spanning four weeks.",
        "The week's real theme: <b>aller</b> plus the du/de/des fusion, showing up in destinations (au musée) and locations (à côté du café) alike. Same machinery, everywhere."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Lost, then routed to the platform",
      body:["A full navigation, start to finish — <b>vous</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Pardon, je suis perdu. Pour aller au Louvre ?", en:"Excuse me, I'm lost. How do I get to the Louvre?", say:"Pardon, je suis perdu. Pour aller au Louvre ?", key:"d28_d1" },
        { who:"B", fr:"Prenez le métro, ligne 1, direction La Défense.", en:"Take the métro, line 1, direction La Défense.", say:"Prenez le métro, ligne 1, direction La Défense.", key:"d28_d2" },
        { who:"A", fr:"La ligne 1… et c'est loin, la station ?", en:"Line 1… and is the station far?", say:"La ligne 1… et c'est loin, la station ?", key:"d28_d3" },
        { who:"B", fr:"Non. Tout droit, puis à gauche. C'est en face de la pharmacie.", en:"No. Straight ahead, then left. It's across from the pharmacy.", say:"Non. Tout droit, puis à gauche. C'est en face de la pharmacie.", key:"d28_d4" },
        { who:"A", fr:"Tout droit, à gauche, en face de la pharmacie. Merci !", en:"Straight, left, across from the pharmacy. Thanks!", say:"Tout droit, à gauche, en face de la pharmacie. Merci !", key:"d28_d5" },
        { who:"B", fr:"Je vous en prie. Bonne visite !", en:"You're welcome. Enjoy your visit!", say:"Je vous en prie. Bonne visite !", key:"d28_d6" }
      ],
      tip:"Everything from the week fires here: <em>je suis perdu</em>, <em>pour aller au</em>, a métro <em>direction</em>, <em>tout droit / à gauche</em>, <em>en face de la</em>. <b>Je vous en prie</b> is the warm, formal ‘you're welcome’ (a notch above <em>de rien</em>); <b>bonne visite !</b> sends you off well."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 4 — the six that matter",
      questions:[
        { prompt:"‘I'm going to the museum’:",
          opts:["Je vais à le musée","Je vais au musée","Je vais musée","Je vais du musée"], answer:1,
          ok:"Right — à + le = au musée.",
          no:"<b>Je vais au musée</b> — à + le always fuses to au." },
        { prompt:"‘Straight ahead, then right’:",
          opts:["à droite, puis tout droit","tout droit, puis à droite","tout droit, puis à gauche","à gauche, puis tout droit"], answer:1,
          ok:"Yes — tout droit (straight) then à droite (right).",
          no:"<b>Tout droit, puis à droite</b> — straight first, then the right turn." },
        { prompt:"In the métro, <b>direction</b> tells you…",
          opts:["left or right","the terminus you head toward","the ticket price","the exit number"], answer:1,
          ok:"Right — the end-of-line station, which fixes your platform.",
          no:"The <b>terminus</b> you're heading toward — that's how you pick the right platform." },
        { prompt:"Complete: ‘next to the pharmacy’ — <b>à côté ___ pharmacie</b>",
          opts:["du","de la","des","de le"], answer:1,
          ok:"Right — pharmacie is feminine, so de la (no fusion).",
          no:"<b>à côté de la pharmacie</b> — de la doesn't fuse (only de+le and de+les do)." },
        { prompt:"The 20 districts of Paris are called…",
          opts:["les quartiers","les arrondissements","les rives","les banlieues"], answer:1,
          ok:"Right — les arrondissements, spiralling out from the 1st.",
          no:"<b>Les arrondissements</b> — 20 of them. A <em>quartier</em> is the smaller neighborhood inside one." },
        { prompt:"‘How do I get to the station?’ (polite):",
          opts:["Où gare ?","Pour aller à la gare, s'il vous plaît ?","La gare, c'est ?","Gare, direction ?"], answer:1,
          ok:"Exactly — Pour aller à + la gare, capped with s'il vous plaît.",
          no:"<b>Pour aller à la gare, s'il vous plaît ?</b> — the set polite phrasing." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Four weeks of vocabulary now feed this queue — greetings, identity, the café, and this week's streets. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Four weeks: the honest audit",
      body:[
        "You can now move through Paris in French: state where you're going, follow spoken directions, ride the métro, rescue yourself when lost, pin a place to the exact corner, and read the city by arrondissement and riverbank. Paired with weeks 1–3, that's greetings, identity, eating, and getting around — the core of independent daily life as a visitor.",
        "The honest gap is the same shape as last week's: <em>comprehension at speed</em>. A local rattling off directions in a noisy station will still outrun you for a while. Your tools are the repair phrase (<b>Vous pouvez répéter ?</b>), the map, and patience. Week 5 slows the world down in a useful way — telling time and describing the daily routine."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 4 — complète.",
      body:["Twenty-eight stations — a third of the line. Next week: l'heure, the days, and the shape of an ordinary Parisian day."],
      next:"Semaine 5, Jour 29 — Quelle heure est-il ? (time & routine)"}
  ]
};

export const WEEK4 = [LESSON_22, LESSON_23, LESSON_24, LESSON_25, LESSON_26, LESSON_27, LESSON_28];
