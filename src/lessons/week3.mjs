/* Week 3 — Days 15–21. Café & eating out: je voudrais, the partitive,
   numbers 70–100 (courage), quantities, and the brasserie. */

const LESSON_15 = {
  day: 15, week: 3,
  title: "Au café : je voudrais…",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Order something. For real.",
      body:[
        "Week 3 is the café week — the setting where all your politeness training pays rent. Today: the magic ordering phrase <b>je voudrais</b>, the drinks that matter, and the ritual of the terrace.",
        "Plus a sound distinction hiding in the word <em>café</em> itself."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"é, è — and the vanishing e",
      body:["Three flavors of the letter e, all in words you'll use today:"],
      pairs:[
        { fr:"café", ipa:"/ka.fe/", en:"é — tense, smiling (like day 4's ‘les’)", say:"café", key:"d15_cafe" },
        { fr:"crème", ipa:"/kʁɛm/", en:"è — open, relaxed", say:"crème", key:"d15_creme" },
        { fr:"je voudrais", ipa:"/ʒə vu.dʁɛ/", en:"the plain e often shrinks: ‘j'voudrais’", say:"je voudrais", key:"d15_jevoudrais" }
      ],
      tip:"The accents aren't decoration — they're pronunciation instructions. <b>é</b> = /e/ always; <b>è</b> = /ɛ/ always. The accent-less <b>e</b> is the unstable one: full /ə/ in careful speech, gone entirely in fast speech."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The café order",
      items:[
        { fr:"Je voudrais…", en:"I would like… (the polite key)", reg:null, say:"Je voudrais", key:"d15_v_jevoudrais" },
        { fr:"un café", en:"a coffee — an espresso, by default!", reg:null, say:"un café", key:"d15_v_uncafe" },
        { fr:"un crème", en:"a coffee with steamed milk", reg:null, say:"un crème", key:"d15_v_uncreme" },
        { fr:"un thé", en:"a tea", reg:null, say:"un thé", key:"d15_v_unthe" },
        { fr:"un jus d'orange", en:"an orange juice", reg:null, say:"un jus d'orange", key:"d15_v_jus" },
        { fr:"une carafe d'eau", en:"a jug of tap water (free!)", reg:null, say:"une carafe d'eau", key:"d15_v_carafe" },
        { fr:"un croissant", en:"a croissant", reg:null, say:"un croissant", key:"d15_v_croissant" },
        { fr:"Vous désirez ?", en:"What would you like? (server-speak)", reg:"formal", say:"Vous désirez ?", key:"d15_v_vousdesirez" }
      ],
      tip:"Trap with a twist: the drink is <b>un</b> crème — masculine — even though <em>la crème</em> (the cream) is feminine. It's short for <em>un café crème</em>. And yes: order ‘un café’ in France and an espresso arrives. Want a big milky one? That's <em>un crème</em>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"On the terrace",
      body:["Server and customer — <b>vous</b>, brisk and friendly. Learn the server's lines as listening chunks; you'll hear them daily."],
      turns:[
        { who:"B", fr:"Bonjour ! Vous désirez ?", en:"Hello! What would you like?", say:"Bonjour ! Vous désirez ?", key:"d15_d1" },
        { who:"A", fr:"Bonjour ! Je voudrais un café, s'il vous plaît.", en:"Hello! I'd like a coffee, please.", say:"Bonjour ! Je voudrais un café, s'il vous plaît.", key:"d15_d2" },
        { who:"B", fr:"Un café. Et avec ceci ?", en:"One coffee. Anything else?", say:"Un café. Et avec ceci ?", key:"d15_d3" },
        { who:"A", fr:"Une carafe d'eau, s'il vous plaît.", en:"A jug of water, please.", say:"Une carafe d'eau, s'il vous plaît.", key:"d15_d4" },
        { who:"B", fr:"Très bien, tout de suite !", en:"Very good, right away!", say:"Très bien, tout de suite !", key:"d15_d5" }
      ],
      tip:"<b>Je voudrais</b> is the conditional of <em>vouloir</em> (to want) — ‘I would like’. You don't need the grammar yet; you need the phrase. <em>Je veux</em> (‘I want’) exists but sounds demanding when ordering — <em>voudrais</em> is the courtesy setting. <b>Et avec ceci ?</b> = ‘and with this?’ — the universal ‘anything else?’"},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You order <b>« un café »</b> in Paris. What arrives?",
          opts:["A large filter coffee","An espresso","A milky coffee","An iced coffee"], answer:1,
          ok:"Right — un café = espresso, the default unit of French coffee.",
          no:"An espresso — <b>un café</b> means a small strong one. The milky version is <em>un crème</em>." },
        { prompt:"The polite way to order:",
          opts:["Je veux un thé","Donnez-moi un thé","Je voudrais un thé, s'il vous plaît","Un thé, allez"], answer:2,
          ok:"Yes — voudrais + s'il vous plaît, the full courtesy setting.",
          no:"<b>Je voudrais… s'il vous plaît</b> — <em>je veux</em> reads as a demand at the counter." },
        { prompt:"Free at any French café, if you ask:",
          opts:["un jus d'orange","une carafe d'eau","un crème","un croissant"], answer:1,
          ok:"Exactly — tap water in a carafe is free and completely normal to request.",
          no:"<b>Une carafe d'eau</b> — tap water is free by custom; just ask." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The terrace economy",
      body:[
        "A French café isn't a takeout counter — it's rented time. Order one espresso and the table is yours for an hour; nobody will hurry you. That's the deal, and it's why the terrace is where Paris actually happens.",
        "Two practical notes: prices can differ by where you sit (<em>au comptoir</em> — at the bar — is cheapest, terrace costs most), and you usually pay when the server brings the bill or when you leave, not upfront."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 15, done.",
      body:["You can now occupy a terrace with full legitimacy. The rest of the week builds out the menu."],
      next:"Jour 16 — Du pain, de la confiture (the partitive)"}
  ]
};

const LESSON_16 = {
  day: 16, week: 3,
  title: "Le partitif : du, de la, des",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Some bread, some jam — the ‘some’ words",
      body:[
        "English says ‘bread’ and ‘some bread’ interchangeably. French insists on an article for unmeasured stuff: <b>du</b> pain, <b>de la</b> confiture, <b>de l'</b>eau. That's the partitive — today's grammar — served over the French breakfast table.",
        "It sounds fussy until you realize you already know the pieces: de + le = du, de + les = des."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three little words, three vowels",
      body:["The partitive articles are distinguished by vowel alone — and one of them collides with a number you know:"],
      pairs:[
        { fr:"du", ipa:"/dy/", en:"the day-1 ‘u’ — lips forward", say:"du", key:"d16_du" },
        { fr:"deux", ipa:"/dø/", en:"the number 2 — different vowel!", say:"deux", key:"d16_deux" },
        { fr:"des", ipa:"/de/", en:"the plural ‘some’ — the ‘les’ vowel", say:"des", key:"d16_des" }
      ],
      tip:"<b>Du pain</b> (some bread) vs <b>deux pains</b> (two loaves) — order the wrong one and you'll carry home the difference. /y/ vs /ø/ is the same lip game as day 1's rue/roue; it keeps paying."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The breakfast table",
      items:[
        { fr:"du pain", en:"(some) bread", reg:null, say:"du pain", key:"d16_v_pain" },
        { fr:"du beurre", en:"(some) butter", reg:null, say:"du beurre", key:"d16_v_beurre" },
        { fr:"de la confiture", en:"(some) jam", reg:null, say:"de la confiture", key:"d16_v_confiture" },
        { fr:"du fromage", en:"(some) cheese", reg:null, say:"du fromage", key:"d16_v_fromage" },
        { fr:"de l'eau", en:"(some) water", reg:null, say:"de l'eau", key:"d16_v_eau" },
        { fr:"du lait", en:"(some) milk", reg:null, say:"du lait", key:"d16_v_lait" },
        { fr:"du sucre", en:"(some) sugar", reg:null, say:"du sucre", key:"d16_v_sucre" },
        { fr:"des œufs", en:"(some) eggs — hear the pronunciation!", reg:null, say:"des œufs", key:"d16_v_oeufs" }
      ],
      tip:"The system: <b>du</b> + masculine, <b>de la</b> + feminine, <b>de l'</b> + vowel, <b>des</b> + plural. And the famous egg trap: <b>un œuf</b> is /œf/ with the f, but <b>des œufs</b> is /de-ZEU/ — the f vanishes in the plural. One egg ‘uf’, several eggs ‘euh’."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Breakfast at a French friend's place",
      body:["Friends — <b>tu</b> — and a small cultural collision."],
      turns:[
        { who:"A", fr:"Il y a du café ?", en:"Is there coffee?", say:"Il y a du café ?", key:"d16_d1" },
        { who:"B", fr:"Oui ! Et il y a du pain, du beurre et de la confiture.", en:"Yes! And there's bread, butter and jam.", say:"Oui ! Et il y a du pain, du beurre et de la confiture.", key:"d16_d2" },
        { who:"A", fr:"Super. Est-ce que tu as des œufs ?", en:"Great. Do you have eggs?", say:"Super. Est-ce que tu as des œufs ?", key:"d16_d3" },
        { who:"B", fr:"Des œufs ?! Au petit déjeuner ?!", en:"Eggs?! For breakfast?!", say:"Des œufs ?! Au petit déjeuner ?!", key:"d16_d4" },
        { who:"A", fr:"…Pas de problème ! Du pain, c'est parfait.", en:"…No problem! Bread is perfect.", say:"Pas de problème ! Du pain, c'est parfait.", key:"d16_d5" }
      ],
      tip:"<b>Le petit déjeuner</b> = breakfast, literally ‘the little lunch’ — and it is little: bread or croissant, butter, jam, coffee. Hot savory breakfasts read as exotic to most French people. B's horror is only slightly exaggerated."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>Je voudrais ___ confiture.</b>",
          opts:["du","de la","des","de l'"], answer:1,
          ok:"Right — la confiture is feminine, so the partitive is <b>de la</b>.",
          no:"<b>De la</b> confiture — feminine noun, feminine partitive." },
        { prompt:"<b>Du pain</b> vs <b>deux pains</b> — the difference you hear:",
          opts:["the final n","the vowel: /y/ vs /ø/","the r","nothing"], answer:1,
          ok:"Exactly — du /dy/, deux /dø/. Lips forward vs lips rounded.",
          no:"It's the vowel: <b>du</b> /dy/ vs <b>deux</b> /dø/ — some bread vs two loaves." },
        { prompt:"<b>Des œufs</b> is pronounced…",
          opts:["day-ZEUF (with f)","day-ZEU (no f)","dess-uhf","day-OOFS"], answer:1,
          ok:"Yes — the f of œuf disappears in the plural: /de.zø/.",
          no:"The plural drops the f: <b>des œufs</b> = /de.zø/, ‘day-ZEU’." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The tartine doctrine",
      body:[
        "The default French breakfast is <b>la tartine</b> — a length of baguette, split, buttered, jammed, and frequently dunked straight into the coffee. Dunking is not bad manners; it's technique.",
        "Eggs, bacon, and other hot savory items belong to <em>le brunch</em>, a weekend import that the French treat as a slightly glamorous foreign custom. Order accordingly, and never ask a boulangerie for scrambled eggs."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 16, done.",
      body:["You can now request unmeasured quantities of anything — which in France means you can eat."],
      next:"Jour 17 — Soixante-dix (the number France warned you about)"}
  ]
};

const LESSON_17 = {
  day: 17, week: 3,
  title: "Soixante-dix : 70–79",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The scenic route begins",
      body:[
        "Here it is. France has no separate word for seventy: it says <b>soixante-dix</b> — ‘sixty-ten’. 71 is ‘sixty-eleven’, 79 is ‘sixty-ten-nine’. Every French speaker does this math instantly; today you start building the same reflex.",
        "The good news: you already own every piece. This is assembly, not new vocabulary."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Compound rhythm",
      body:["Long numbers are pronounced as one smooth word — no pauses at the hyphens:"],
      pairs:[
        { fr:"soixante", ipa:"/swa.sɑ̃t/", en:"the base — two syllables", say:"soixante", key:"d17_soixante" },
        { fr:"soixante-dix", ipa:"/swa.sɑ̃t.dis/", en:"…-ten = 70, one breath", say:"soixante-dix", key:"d17_soixantedix" },
        { fr:"soixante et onze", ipa:"/swa.sɑ̃.te.ɔ̃z/", en:"71 keeps the ‘et’ — like 21", say:"soixante et onze", key:"d17_soixanteetonze" }
      ],
      tip:"French gives all syllables near-equal weight with a slight lean on the last — so <b>soixante-dix-neuf</b> rolls out evenly, ‘swa-sant-dis-NEUF’. Resist the English urge to stress the front."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The seventies, assembled",
      items:[
        { fr:"soixante-dix", en:"70 (sixty-ten)", reg:null, say:"soixante-dix", key:"d17_v_70" },
        { fr:"soixante et onze", en:"71 (sixty-and-eleven)", reg:null, say:"soixante et onze", key:"d17_v_71" },
        { fr:"soixante-douze", en:"72", reg:null, say:"soixante-douze", key:"d17_v_72" },
        { fr:"soixante-quinze", en:"75", reg:null, say:"soixante-quinze", key:"d17_v_75" },
        { fr:"soixante-dix-sept", en:"77 (sixty-ten-seven)", reg:null, say:"soixante-dix-sept", key:"d17_v_77" },
        { fr:"soixante-dix-neuf", en:"79", reg:null, say:"soixante-dix-neuf", key:"d17_v_79" },
        { fr:"le numéro", en:"the number", reg:null, say:"le numéro", key:"d17_v_numero" },
        { fr:"C'est quoi… ?", en:"What's… ? (casual)", reg:"informal", say:"C'est quoi ?", key:"d17_v_cestquoi" }
      ],
      tip:"Pattern: 70–76 = soixante + the teens (dix, onze, douze…), with <b>et</b> only at 71. From 77 it's soixante-dix + units. Your day-5 teens just got a second job. (Belgium and Switzerland say <em>septante</em> — logical, charming, and never used in France.)"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A number with teeth",
      body:["Swapping numbers again — <b>tu</b> — but now the pairs bite back."],
      turns:[
        { who:"A", fr:"C'est quoi, ton numéro ?", en:"What's your number?", say:"C'est quoi, ton numéro ?", key:"d17_d1" },
        { who:"B", fr:"Zéro sept, soixante-douze, quinze, soixante et onze, dix-huit.", en:"07 72 15 71 18.", say:"Zéro sept, soixante-douze, quinze, soixante et onze, dix-huit.", key:"d17_d2" },
        { who:"A", fr:"Soixante et onze… avec « et » ?", en:"Seventy-one… with ‘et’?", say:"Soixante et onze… avec « et » ?", key:"d17_d3" },
        { who:"B", fr:"Oui ! Comme vingt et un.", en:"Yes! Like twenty-one.", say:"Oui ! Comme vingt et un.", key:"d17_d4" }
      ],
      tip:"<b>C'est quoi… ?</b> is the casual cousin of <em>Qu'est-ce que c'est ?</em> — everyday spoken French, <em>tu</em> territory. <b>Ton</b> = your (informal); the full possessive family arrives in week 7."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You hear <b>« soixante-quinze »</b>. The digits:",
          opts:["65","75","85","615"], answer:1,
          ok:"Right — 60 + 15 = 75. The assembly reflex is forming.",
          no:"Sixty + fifteen = <b>75</b>. Add, don't translate." },
        { prompt:"71 in French:",
          opts:["soixante-onze","soixante et onze","septante et un","soixante-dix-un"], answer:1,
          ok:"Yes — 71 keeps the <em>et</em>, like 21, 31… 61.",
          no:"<b>Soixante et onze</b> — the X1 pattern holds one last time at 71." },
        { prompt:"<b>Septante</b> is…",
          opts:["wrong French","the word for 70 in Belgium & Switzerland","old-fashioned Parisian","the word for 17"], answer:1,
          ok:"Exactly — real, logical, and simply not used in France. Recognize it; don't say it in Paris.",
          no:"It's the Belgian/Swiss 70 — perfectly real French, just not French-of-France." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Why sixty-ten? An honest history",
      body:[
        "The culprit is an old base-twenty counting habit — counting by scores, as in the English ‘fourscore’ — that survived in medieval France. Most of it was eventually cleaned up into tens; the stretch from 70 to 99 never was. Belgium and Switzerland finished the cleanup (<em>septante, nonante</em>); France kept the antiques.",
        "So when French numbers feel absurd, you're not confused — you're hearing a fossil. Every French child grumbles through the same arithmetic. Solidarity."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 17, done.",
      body:["Sixty-ten conquered. Tomorrow the system goes fully baroque: four-twenties."],
      next:"Jour 18 — Quatre-vingts (80–100)"}
  ]
};

const LESSON_18 = {
  day: 18, week: 3,
  title: "Quatre-vingts : 80–100",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Four twenties and the finish line",
      body:[
        "The summit: <b>quatre-vingts</b> — literally ‘four twenties’ — is 80, and <b>quatre-vingt-dix</b> (‘four-twenties-ten’) is 90. Reach <b>cent</b> (100) today and every French price tag on Earth is readable.",
        "Plus the phrase that makes shopping possible: <b>C'est combien ?</b>"
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The s that comes and goes",
      body:["Quatre-vingts has a final s with rules of its own:"],
      pairs:[
        { fr:"quatre-vingts", ipa:"/ka.tʁə.vɛ̃/", en:"80 alone — s written, silent", say:"quatre-vingts", key:"d18_quatrevingts" },
        { fr:"quatre-vingts ans", ipa:"/ka.tʁə.vɛ̃.zɑ̃/", en:"before a vowel the s liaises: -ZANS", say:"quatre-vingts ans", key:"d18_quatrevingtsans" },
        { fr:"quatre-vingt-un", ipa:"/ka.tʁə.vɛ̃.œ̃/", en:"81 — no s, and NO liaison", say:"quatre-vingt-un", key:"d18_quatrevingtun" }
      ],
      tip:"Compare with day 10: <b>vingt et un</b> made the t sing, but <b>quatre-vingt-un</b> keeps it silent — no <em>et</em>, no liaison. The 80s and 90s drop the <em>et</em> entirely: quatre-vingt-un, quatre-vingt-onze."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Eighty to one hundred",
      items:[
        { fr:"quatre-vingts", en:"80 (four-twenties)", reg:null, say:"quatre-vingts", key:"d18_v_80" },
        { fr:"quatre-vingt-un", en:"81 — no ‘et’!", reg:null, say:"quatre-vingt-un", key:"d18_v_81" },
        { fr:"quatre-vingt-cinq", en:"85", reg:null, say:"quatre-vingt-cinq", key:"d18_v_85" },
        { fr:"quatre-vingt-dix", en:"90 (four-twenties-ten)", reg:null, say:"quatre-vingt-dix", key:"d18_v_90" },
        { fr:"quatre-vingt-onze", en:"91", reg:null, say:"quatre-vingt-onze", key:"d18_v_91" },
        { fr:"quatre-vingt-dix-neuf", en:"99 — the full stack", reg:null, say:"quatre-vingt-dix-neuf", key:"d18_v_99" },
        { fr:"cent", en:"100 — blessedly simple", reg:null, say:"cent", key:"d18_v_100" },
        { fr:"C'est combien ?", en:"How much is it?", reg:null, say:"C'est combien ?", key:"d18_v_combien" }
      ],
      tip:"Don't compute — memorize <b>quatre-vingts</b> and <b>quatre-vingt-dix</b> as words for 80 and 90, then bolt your day-5 units and teens onto them. Natives don't do arithmetic either; the words are fused in their heads. (Belgium/Switzerland: <em>nonante</em> for 90. Same story as septante.)"},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Sticker shock, politely",
      body:["A shop — <b>vous</b> — and prices that use everything you've got."],
      turns:[
        { who:"A", fr:"Excusez-moi, c'est combien ?", en:"Excuse me, how much is this?", say:"Excusez-moi, c'est combien ?", key:"d18_d1" },
        { who:"B", fr:"Quatre-vingt-neuf euros.", en:"Eighty-nine euros.", say:"Quatre-vingt-neuf euros.", key:"d18_d2" },
        { who:"A", fr:"Quatre-vingt-neuf… Et ça, c'est combien ?", en:"Eighty-nine… And this, how much?", say:"Quatre-vingt-neuf… Et ça, c'est combien ?", key:"d18_d3" },
        { who:"B", fr:"Ça, c'est quatre-vingts euros.", en:"That one is eighty euros.", say:"Ça, c'est quatre-vingts euros.", key:"d18_d4" },
        { who:"A", fr:"D'accord, merci !", en:"OK, thanks!", say:"D'accord, merci !", key:"d18_d5" }
      ],
      tip:"Repeating the price back — as A does — is the universal comprehension check, and nobody finds it odd. <b>D'accord</b> = OK/agreed, one of the highest-frequency words in spoken French. <b>Ça</b> = this/that thing; point and it works."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"<b>Quatre-vingt-onze</b> is…",
          opts:["81","91","480+11","71"], answer:1,
          ok:"Right — four-twenties (80) + eleven = 91.",
          no:"80 + 11 = <b>91</b>. The 90s reuse the teens, like the 70s did." },
        { prompt:"81 in French:",
          opts:["quatre-vingt et un","quatre-vingt-un","quatre-vingts-un","octante et un"], answer:1,
          ok:"Yes — no <em>et</em>, no s: quatre-vingt-un.",
          no:"<b>Quatre-vingt-un</b> — the 80s and 90s drop the <em>et</em> that 21–71 used." },
        { prompt:"You hear a price: /ka.tʁə.vɛ̃.dis.nœf/ euros. The tag reads…",
          opts:["€79","€89","€99","€19"], answer:2,
          ok:"Exactly — quatre-vingt-dix-neuf = 99. You just decoded the hardest number in French.",
          no:"That's <b>quatre-vingt-dix-neuf</b> — 80 + 19 = €99." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Numbers you'll actually face",
      body:[
        "Where the hard numbers ambush you in real life: prices ending in 90 and 99 (<em>dix-neuf quatre-vingt-dix</em> = 19,90 €), Paris postal codes (750<b>xx</b>), and the départements — 75 is Paris, 92, 93, 94 ring it, and people say them constantly (<em>le quatre-vingt-treize</em>, usually shortened to <em>le neuf-trois</em>, is a whole cultural identity).",
        "Survival move while the reflex builds: ask for the digits — <b>Vous pouvez l'écrire ?</b> (‘can you write it down?’) — or just read the card machine. Everyone does."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 18, done.",
      body:["Zero to one hundred, fully operational. Every price in France now speaks to you."],
      next:"Jour 19 — Au marché (quantities: un kilo de…)"}
  ]
};

const LESSON_19 = {
  day: 19, week: 3,
  title: "Au marché : un kilo de…",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Measured amounts — and a grammar shortcut",
      body:[
        "Yesterday you could ask prices; today you can specify amounts: a kilo of tomatoes, a piece of cheese, a bottle of water. And here's the gift: after a quantity word, all those partitive articles collapse into plain <b>de</b>.",
        "Setting: the weekly market, the best French classroom that exists."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Euros and their liaisons",
      body:["Money talk is liaison talk — the number's silent consonant wakes up on <em>euros</em>:"],
      pairs:[
        { fr:"deux euros", ipa:"/dø.zø.ʁo/", en:"deu-ZEUROS — the x sounds as z", say:"deux euros", key:"d19_deuxeuros" },
        { fr:"dix euros", ipa:"/di.zø.ʁo/", en:"di-ZEUROS", say:"dix euros", key:"d19_dixeuros" },
        { fr:"vingt euros", ipa:"/vɛ̃.tø.ʁo/", en:"vin-TEUROS — the t this time", say:"vingt euros", key:"d19_vingteuros" }
      ],
      tip:"This is why prices sound faster than they read: <em>deux euros dix</em> is really ‘deuzeuro-dis’, one flowing chunk. Train the chunk, not the words."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Amounts and market moves",
      items:[
        { fr:"Ça fait…", en:"That comes to… (totals)", reg:null, say:"Ça fait", key:"d19_v_cafait" },
        { fr:"un kilo de", en:"a kilo of", reg:null, say:"un kilo de", key:"d19_v_kilo" },
        { fr:"une bouteille de", en:"a bottle of", reg:null, say:"une bouteille de", key:"d19_v_bouteille" },
        { fr:"un morceau de", en:"a piece of", reg:null, say:"un morceau de", key:"d19_v_morceau" },
        { fr:"beaucoup de", en:"a lot of", reg:null, say:"beaucoup de", key:"d19_v_beaucoup" },
        { fr:"un peu de", en:"a little / a bit of", reg:null, say:"un peu de", key:"d19_v_unpeu" },
        { fr:"C'est tout", en:"That's all", reg:null, say:"C'est tout", key:"d19_v_cesttout" },
        { fr:"Et avec ceci ?", en:"Anything else? (vendor-speak)", reg:"formal", say:"Et avec ceci ?", key:"d19_v_avecceci" }
      ],
      tip:"The shortcut rule: after quantity expressions, no article — just <b>de</b>. <em>Du fromage</em> (some cheese) but <em>un morceau <b>de</b> fromage</em>, <em>beaucoup <b>de</b> fromage</em>. Same collapse you saw with negation's <em>pas de</em> — French loves this move."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At the Sunday market",
      body:["Vendor and customer — <b>vous</b>, brisk, warm, transactional."],
      turns:[
        { who:"B", fr:"Bonjour ! Vous désirez ?", en:"Hello! What would you like?", say:"Bonjour ! Vous désirez ?", key:"d19_d1" },
        { who:"A", fr:"Bonjour ! Un kilo de tomates, s'il vous plaît.", en:"Hello! A kilo of tomatoes, please.", say:"Bonjour ! Un kilo de tomates, s'il vous plaît.", key:"d19_d2" },
        { who:"B", fr:"Voilà. Et avec ceci ?", en:"There you go. Anything else?", say:"Voilà. Et avec ceci ?", key:"d19_d3" },
        { who:"A", fr:"Un morceau de fromage. C'est tout. Ça fait combien ?", en:"A piece of cheese. That's all. How much does that come to?", say:"Un morceau de fromage. C'est tout. Ça fait combien ?", key:"d19_d4" },
        { who:"B", fr:"Ça fait neuf euros soixante-dix.", en:"That comes to nine euros seventy.", say:"Ça fait neuf euros soixante-dix.", key:"d19_d5" },
        { who:"A", fr:"Voilà. Merci, bonne journée !", en:"Here you go. Thanks, have a good day!", say:"Voilà. Merci, bonne journée !", key:"d19_d6" }
      ],
      tip:"<b>C'est combien ?</b> asks the price of a thing; <b>Ça fait combien ?</b> asks for the total. And there's yesterday's <em>soixante-dix</em>, already earning its keep in a real price."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>un peu ___ sucre</b>",
          opts:["du","de la","de","des"], answer:2,
          ok:"Right — quantity word, so plain <b>de</b>. The article collapses.",
          no:"After a quantity expression it's bare <b>de</b>: un peu <b>de</b> sucre." },
        { prompt:"To ask for the total of several items:",
          opts:["C'est combien ?","Ça fait combien ?","Combien ça ?","C'est tout ?"], answer:1,
          ok:"Yes — <b>ça fait</b> = the running total; the vendor answers ‘Ça fait…’",
          no:"<b>Ça fait combien ?</b> — ‘what does that come to?’ C'est combien asks about one item." },
        { prompt:"<b>Dix euros</b> sounds like…",
          opts:["dee euro (pause)","di-ZEUROS (liaison)","dis-euros (s sound)","deez-euro"], answer:1,
          ok:"Exactly — the x liaises as /z/ straight onto euros.",
          no:"Liaison: <b>di-ZEUROS</b> — number + euros always fuse." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Market rules of engagement",
      body:[
        "Nearly every French town has its market days, and the etiquette is specific: at most produce stalls <em>you don't handle the goods</em> — you say what you want and the vendor picks. Pointing plus <b>celui-là</b> (‘that one’) is fine; squeezing the peaches is not.",
        "Vendors are also the best free French teachers in the country: transactions are short, formulaic, repeated weekly, and they'll correct your numbers with a grin. Ten markets from now, this whole lesson will be muscle memory."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 19, done.",
      body:["Prices, totals, quantities — the full transactional toolkit. One setting left this week: the restaurant."],
      next:"Jour 20 — À la brasserie (le menu, la carte)"}
  ]
};

const LESSON_20 = {
  day: 20, week: 3,
  title: "À la brasserie",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"A full meal, start to finish",
      body:[
        "The week's finale setting: a proper sit-down meal. Today you learn the false friend that trips every tourist (<b>menu</b> does not mean menu), the three-course skeleton, and how to order like you've done it before.",
        "Plus a pair of near-identical words where the difference is dinner or disaster."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"One s or two — /z/ or /s/",
      body:["Between vowels, a single s buzzes as /z/; a double ss stays crisp /s/. Two famous pairs live on every menu:"],
      pairs:[
        { fr:"un dessert", ipa:"/de.sɛʁ/", en:"ss = /s/ — the sweet course", say:"un dessert", key:"d20_dessert" },
        { fr:"un désert", ipa:"/de.zɛʁ/", en:"s = /z/ — the Sahara", say:"un désert", key:"d20_desert" },
        { fr:"du poisson", ipa:"/pwa.sɔ̃/", en:"ss = /s/ — fish. (One s = poison!)", say:"du poisson", key:"d20_poisson" }
      ],
      tip:"<b>Poisson</b> /s/ is fish; <b>poison</b> /z/ is poison. <b>Dessert</b> /s/ is pudding; <b>désert</b> /z/ is sand. Order carefully — the buzz matters. Rule: vowel-<b>s</b>-vowel buzzes; <b>ss</b> never does."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The restaurant skeleton",
      items:[
        { fr:"la carte", en:"the menu (the full list) — false friend!", reg:null, say:"la carte", key:"d20_v_carte" },
        { fr:"le menu", en:"the fixed-price set (starter+main+dessert)", reg:null, say:"le menu", key:"d20_v_menu" },
        { fr:"une entrée", en:"a starter — not the main!", reg:null, say:"une entrée", key:"d20_v_entree" },
        { fr:"un plat", en:"a main course", reg:null, say:"un plat", key:"d20_v_plat" },
        { fr:"un dessert", en:"a dessert", reg:null, say:"un dessert", key:"d20_v_dessert" },
        { fr:"une boisson", en:"a drink", reg:null, say:"une boisson", key:"d20_v_boisson" },
        { fr:"Je prends…", en:"I'll have… (ordering chunk)", reg:null, say:"Je prends", key:"d20_v_jeprends" },
        { fr:"L'addition, s'il vous plaît", en:"The bill, please", reg:"formal", say:"L'addition, s'il vous plaît", key:"d20_v_addition" }
      ],
      tip:"Double false-friend alert: ask for <em>le menu</em> and you get the fixed-price deal, not the list — the list is <b>la carte</b> (hence ‘à la carte’). And <b>une entrée</b> is the <em>entry</em> to the meal — the starter — despite what American menus did to the word. <b>Je prends</b> (‘I take’) is the native ordering verb; grab it as a chunk, full conjugation in week 11."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Ordering the menu",
      body:["Server and diner — <b>vous</b> — and the ‘comme + course’ pattern that structures every French food order."],
      turns:[
        { who:"B", fr:"Bonsoir ! Vous avez choisi ?", en:"Good evening! Have you decided?", say:"Bonsoir ! Vous avez choisi ?", key:"d20_d1" },
        { who:"A", fr:"Oui. Je prends le menu à dix-neuf euros.", en:"Yes. I'll have the €19 set menu.", say:"Oui. Je prends le menu à dix-neuf euros.", key:"d20_d2" },
        { who:"B", fr:"Très bien. Et comme entrée ?", en:"Very good. And for the starter?", say:"Très bien. Et comme entrée ?", key:"d20_d3" },
        { who:"A", fr:"La soupe, s'il vous plaît. Et comme plat, le poisson.", en:"The soup, please. And for the main, the fish.", say:"La soupe, s'il vous plaît. Et comme plat, le poisson.", key:"d20_d4" },
        { who:"B", fr:"Parfait. Et comme boisson ?", en:"Perfect. And to drink?", say:"Parfait. Et comme boisson ?", key:"d20_d5" },
        { who:"A", fr:"Une carafe d'eau… et un verre de vin.", en:"A jug of water… and a glass of wine.", say:"Une carafe d'eau… et un verre de vin.", key:"d20_d6" }
      ],
      tip:"<b>Comme entrée / comme plat / comme boisson</b> — ‘as a starter / main / drink’ — is the scaffolding of every restaurant exchange. And <em>un verre <b>de</b> vin</em>: yesterday's quantity rule, pouring itself a glass."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You want to see the full list of dishes. You ask for…",
          opts:["le menu","la carte","l'entrée","l'addition"], answer:1,
          ok:"Right — <b>la carte</b> is the list; <em>le menu</em> is the fixed-price bundle.",
          no:"The list is <b>la carte</b> — asking for <em>le menu</em> gets you the set-price formula." },
        { prompt:"<b>Une entrée</b> is…",
          opts:["the main course","the starter","the dessert","the doorway"], answer:1,
          ok:"Yes — the entry to the meal. The main is <em>un plat</em>.",
          no:"It's the <b>starter</b> — French kept the word's logic; the main course is <em>un plat</em>." },
        { prompt:"On the menu: <b>poisson</b>. You're ordering…",
          opts:["poison","fish","peas","chicken"], answer:1,
          ok:"Fish — the double s keeps it /s/ and keeps it edible.",
          no:"Double s = /s/ = <b>fish</b>. Single-s <em>poison</em> is the one to avoid, in every sense." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The tipping question, settled",
      body:[
        "French law bakes service into the price — bills say <b>service compris</b>, and servers earn a real wage. Tipping is therefore genuinely optional: locals round up or leave small coins for good service, a euro or two at dinner. Nobody expects 20%, and no one will chase you down the street.",
        "Also free and normal: the bread basket and the carafe d'eau. And the bill never comes until you ask — lingering is the point. <b>L'addition, s'il vous plaît</b> is your closing move, often accompanied by the universal air-signature gesture."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 20, done.",
      body:["Café, breakfast, market, brasserie — you can now be fed in France entirely in French. Tomorrow we consolidate."],
      next:"Jour 21 — Révision (week 3 review)"}
  ]
};

const LESSON_21 = {
  day: 21, week: 3,
  title: "Révision — la semaine 3",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — the food week",
      body:[
        "Retrieval day: one dialogue chaining the week's settings, six questions on its pressure points, then your due flashcards — which now span three weeks of vocabulary.",
        "Numbers above 69 will keep feeling slow for a while. That's normal; the reflex comes from reps, and today is reps."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Morning run: café, then the bakery counter",
      body:["One customer, one busy counter — <b>vous</b>. Includes a repair move worth stealing: asking for a repeat."],
      turns:[
        { who:"A", fr:"Bonjour ! Un café et un croissant, s'il vous plaît.", en:"Hello! A coffee and a croissant, please.", say:"Bonjour ! Un café et un croissant, s'il vous plaît.", key:"d21_d1" },
        { who:"B", fr:"Voilà ! Deux euros quatre-vingt-dix.", en:"There you go! Two euros ninety.", say:"Voilà ! Deux euros quatre-vingt-dix.", key:"d21_d2" },
        { who:"A", fr:"Pardon… c'est combien ?", en:"Sorry… how much?", say:"Pardon… c'est combien ?", key:"d21_d3" },
        { who:"B", fr:"Deux euros quatre-vingt-dix !", en:"Two euros ninety!", say:"Deux euros quatre-vingt-dix !", key:"d21_d4" },
        { who:"A", fr:"Ah oui ! Voilà. Et je voudrais du pain.", en:"Ah right! Here you go. And I'd like some bread.", say:"Ah oui ! Voilà. Et je voudrais du pain.", key:"d21_d5" },
        { who:"B", fr:"On n'a pas de pain. Mais il y a des croissants !", en:"We don't have bread. But there are croissants!", say:"On n'a pas de pain. Mais il y a des croissants !", key:"d21_d6" },
        { who:"A", fr:"D'accord, deux croissants alors !", en:"OK, two croissants then!", say:"D'accord, deux croissants alors !", key:"d21_d7" }
      ],
      tip:"Turn 3 is a life skill: a soft <b>Pardon… c'est combien ?</b> gets any number repeated, no embarrassment involved. <b>Alors</b> = ‘then / in that case’, the great French conversation-greaser. And note <em>pas de pain</em> — the negation collapse, live."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 3 — the six that matter",
      questions:[
        { prompt:"The polite ordering phrase:",
          opts:["Je veux","Donnez-moi","Je voudrais","J'ai"], answer:2,
          ok:"Right — the conditional courtesy: je voudrais.",
          no:"<b>Je voudrais</b> — <em>je veux</em> works grammatically but lands as a demand." },
        { prompt:"Complete: <b>Je voudrais ___ eau.</b>",
          opts:["du","de la","de l'","des"], answer:2,
          ok:"Yes — eau starts with a vowel, so the partitive elides: de l'eau.",
          no:"Before a vowel the partitive is <b>de l'</b>: de l'eau." },
        { prompt:"<b>Soixante-quinze</b> and <b>quatre-vingt-quinze</b>:",
          opts:["75 and 95","65 and 85","75 and 85","615 and 495"], answer:0,
          ok:"Right — 60+15 and 80+15. The teens do double duty up here.",
          no:"They're <b>75</b> (60+15) and <b>95</b> (80+15)." },
        { prompt:"Complete: <b>un kilo ___ tomates</b>",
          opts:["des","de la","de","du"], answer:2,
          ok:"Yes — after a quantity word, bare <b>de</b>.",
          no:"Quantity + <b>de</b>, no article: un kilo <b>de</b> tomates." },
        { prompt:"You ask for <b>le menu</b>. You've requested…",
          opts:["the full list of dishes","the fixed-price set","the wine list","the bill"], answer:1,
          ok:"Right — the set formula. The list is la carte.",
          no:"<b>Le menu</b> = the fixed-price bundle; the list of everything is <b>la carte</b>." },
        { prompt:"<b>Service compris</b> on your bill means…",
          opts:["service was slow","a big tip is expected","service is included — tipping optional","you must pay in cash"], answer:2,
          ok:"Exactly — it's in the price by law. Round up if you're happy; that's it.",
          no:"It means service is <b>included</b> — French bills bake it in; tips are small and optional." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Three weeks of vocabulary now feed this queue. Honest grades — the missed ones come back tomorrow, and that's the system working, not you failing."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Three weeks: the honest audit",
      body:[
        "You can now survive every food-adjacent transaction in France: order, specify quantities, read any price to 100, decode a menu's false friends, and exit with the ritual intact. That's most of a tourist's daily language needs, three weeks in.",
        "The honest gap: numbers at native speed. When a cashier machine-guns <em>quatre-vingt-dix-sept</em>, you'll still lag — everyone does for months. Use the repair phrase, read the card terminal, keep going. Week 4 leaves the table and takes you into the métro."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 3 — complète.",
      body:["Twenty-one stations — a quarter of the line. Next week: directions, the métro, and the verb aller."],
      next:"Semaine 4, Jour 22 — Où est… ? (directions & le métro)"}
  ]
};

export const WEEK3 = [LESSON_15, LESSON_16, LESSON_17, LESSON_18, LESSON_19, LESSON_20, LESSON_21];
