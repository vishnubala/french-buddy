/* Week 1 — Days 1–7. Imported by the app AND the audio pipeline. */

const LESSON_1 = {
  day: 1, week: 1,
  title: "Premiers sons & bonjour",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Say hello like you mean it",
      body:[
        "Two jobs today: get your mouth around the sounds English doesn't have, and nail the greetings you'll use every single day in France.",
        "By the end you'll greet a stranger, a shopkeeper, and a friend — each with the <em>right</em> level of formality. That last part matters more here than almost anywhere."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three sounds to feel now",
      body:["French has vowels English doesn't. Tap ▶ and copy out loud — this is the single best thing you can do on day one."],
      pairs:[
        { fr:"bonjour", ipa:"/bɔ̃.ʒuʁ/", en:"the nasal ‘on’ — air through the nose", say:"bonjour", key:"d01_bonjour" },
        { fr:"rue", ipa:"/ʁy/", en:"‘u’ = lips rounded, tongue forward", say:"rue", key:"d01_rue" },
        { fr:"roue", ipa:"/ʁu/", en:"‘ou’ = the English ‘oo’ (contrast!)", say:"roue", key:"d01_roue" }
      ],
      tip:"That last pair — <b>rue</b> (street) vs <b>roue</b> (wheel) — is a real minimal pair. Mixing them up is the classic anglophone tell."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Your first eight words",
      items:[
        { fr:"Bonjour", en:"Hello / Good day", reg:null, say:"Bonjour", key:"d01_v_bonjour" },
        { fr:"Salut", en:"Hi / Bye", reg:"informal", say:"Salut", key:"d01_v_salut" },
        { fr:"Bonsoir", en:"Good evening", reg:null, say:"Bonsoir", key:"d01_v_bonsoir" },
        { fr:"Merci", en:"Thank you", reg:null, say:"Merci", key:"d01_v_merci" },
        { fr:"S'il vous plaît", en:"Please", reg:"formal", say:"S'il vous plaît", key:"d01_v_svp" },
        { fr:"Au revoir", en:"Goodbye", reg:null, say:"Au revoir", key:"d01_v_aurevoir" },
        { fr:"Excusez-moi", en:"Excuse me", reg:"formal", say:"Excusez-moi", key:"d01_v_excusez" },
        { fr:"Enchanté(e)", en:"Nice to meet you", reg:null, say:"Enchanté", key:"d01_v_enchante" }
      ],
      tip:"<b>Enchanté</b> gets an extra <b>-e</b> in writing if you're a woman: <b>enchantée</b> (sounds identical). And <b>s'il vous plaît</b> becomes <b>s'il te plaît</b> with people you'd call <em>tu</em>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At the boulangerie",
      body:["A first exchange with someone you don't know — so it's all <b>vous</b>. Listen at full speed, then tap 🐢 for the slow version."],
      turns:[
        { who:"A", fr:"Bonjour !", en:"Hello!", say:"Bonjour", key:"d01_d1" },
        { who:"B", fr:"Bonjour, ça va ?", en:"Hello, how are you?", say:"Bonjour, ça va ?", key:"d01_d2" },
        { who:"A", fr:"Ça va bien, merci. Et vous ?", en:"I'm well, thanks. And you?", say:"Ça va bien, merci. Et vous ?", key:"d01_d3" },
        { who:"B", fr:"Très bien, merci.", en:"Very well, thank you.", say:"Très bien, merci.", key:"d01_d4" }
      ],
      tip:"Notice <b>Et vous ?</b> — the formal ‘And you?’. With a friend it'd be <b>Et toi ?</b>"},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You walk into a bakery. Your very first word should be…",
          opts:["Merci","Bonjour","Salut","Excusez-moi"], answer:1,
          ok:"Exactly. In France you greet <b>first</b>, before you ask for anything.",
          no:"Not quite — in France, <b>Bonjour</b> comes first, before any request." },
        { prompt:"Which one is informal — for friends, not strangers?",
          opts:["Bonjour","Bonsoir","Salut","Au revoir"], answer:2,
          ok:"Right. <b>Salut</b> is casual, and it works for both hi and bye.",
          no:"It's <b>Salut</b> — casual, and it means both hi and bye." },
        { prompt:"‘Please’, said to a shopkeeper you address as <em>vous</em>:",
          opts:["S'il te plaît","S'il vous plaît","Merci beaucoup","Enchanté"], answer:1,
          ok:"Yes — <b>vous</b> version. <b>S'il te plaît</b> is for people you <em>tu</em>.",
          no:"With <em>vous</em> it's <b>s'il vous plaît</b>. The <em>te</em> version is informal." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The bonjour rule",
      body:[
        "This is the one to internalize on day one: in France you say <b>Bonjour</b> when you enter a shop, a bakery, a small office — <em>before</em> you ask your question. Walking up and launching straight into a request reads as genuinely rude.",
        "It's not politeness theater; it's the price of entry to the conversation. One word, and the whole interaction goes better. Skip it, and you'll feel the temperature drop."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 1, done.",
      body:["You've got the greetings and you've met <b>tu</b> vs <b>vous</b> — the thread we'll pull all week."],
      next:"Jour 2 — Moi, c'est… (introducing yourself)"}
  ]
};

const LESSON_2 = {
  day: 2, week: 1,
  title: "Moi, c'est… (se présenter)",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Introduce yourself, both ways",
      body:[
        "Yesterday you greeted people. Today you tell them who you are — and you'll learn <em>two</em> ways to do it, because French splits everything by register.",
        "There's the textbook <b>Je m'appelle…</b> and the everyday <b>Moi, c'est…</b> You'll want both: one for the préfecture, one for the apéro."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The silent final consonant",
      body:["French buries most final consonants. Hear how <b>petit</b> ends on the vowel — until a feminine <b>-e</b> wakes the consonant up."],
      pairs:[
        { fr:"petit", ipa:"/pə.ti/", en:"final t is silent", say:"petit", key:"d02_petit" },
        { fr:"petite", ipa:"/pə.tit/", en:"the -e switches the t on", say:"petite", key:"d02_petite" },
        { fr:"français", ipa:"/fʁɑ̃.sɛ/", en:"final s is silent too", say:"français", key:"d02_francais" }
      ],
      tip:"Rough rule of thumb: most final consonants are silent, but <b>c, r, f, l</b> often sound (<b>avec, bonjour, neuf, mal</b>). Think of the word <b>CaReFuL</b>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Saying who you are",
      items:[
        { fr:"Je m'appelle…", en:"My name is…", reg:null, say:"Je m'appelle", key:"d02_v_jemappelle" },
        { fr:"Moi, c'est…", en:"I'm… (casual intro)", reg:"informal", say:"Moi, c'est", key:"d02_v_moicest" },
        { fr:"Comment vous appelez-vous ?", en:"What's your name?", reg:"formal", say:"Comment vous appelez-vous ?", key:"d02_v_commentvous" },
        { fr:"Tu t'appelles comment ?", en:"What's your name?", reg:"informal", say:"Tu t'appelles comment ?", key:"d02_v_tutappelles" },
        { fr:"Je suis…", en:"I am…", reg:null, say:"Je suis", key:"d02_v_jesuis" },
        { fr:"Monsieur", en:"Sir / Mr", reg:"formal", say:"Monsieur", key:"d02_v_monsieur" },
        { fr:"Madame", en:"Ma'am / Mrs", reg:"formal", say:"Madame", key:"d02_v_madame" },
        { fr:"Et toi ?", en:"And you? (to a friend)", reg:"informal", say:"Et toi ?", key:"d02_v_ettoi" }
      ],
      tip:"Same question, two registers: <b>Comment vous appelez-vous ?</b> puts the verb first (formal); <b>Tu t'appelles comment ?</b> leaves it in place (spoken, everyday). You'll hear the second far more often."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At a friend's apéro",
      body:["Two people your age meeting through friends — so it's all <b>tu</b>. Compare with yesterday's all-<b>vous</b> bakery."],
      turns:[
        { who:"A", fr:"Salut ! Moi, c'est Léa. Et toi ?", en:"Hi! I'm Léa. And you?", say:"Salut ! Moi, c'est Léa. Et toi ?", key:"d02_d1" },
        { who:"B", fr:"Salut Léa ! Je m'appelle Thomas.", en:"Hi Léa! My name's Thomas.", say:"Salut Léa ! Je m'appelle Thomas.", key:"d02_d2" },
        { who:"A", fr:"Enchantée, Thomas !", en:"Nice to meet you, Thomas!", say:"Enchantée, Thomas !", key:"d02_d3" },
        { who:"B", fr:"Enchanté ! Ça va ?", en:"Nice to meet you! How's it going?", say:"Enchanté ! Ça va ?", key:"d02_d4" },
        { who:"A", fr:"Ça va bien !", en:"It's going well!", say:"Ça va bien !", key:"d02_d5" }
      ],
      tip:"Léa says <b>enchantée</b>, Thomas says <b>enchanté</b> — same sound, different spelling. The agreement is written, not heard. That mismatch between page and ear is very French; get used to it early."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You're asking an official at the préfecture for their name. You say…",
          opts:["Tu t'appelles comment ?","Moi, c'est qui ?","Comment vous appelez-vous ?","Salut, c'est quoi ton nom ?"], answer:2,
          ok:"Right — formal situation, <b>vous</b> form with the verb up front.",
          no:"With an official it's <b>vous</b>: <b>Comment vous appelez-vous ?</b> The <em>tu</em> version is for peers." },
        { prompt:"A woman writing ‘nice to meet you’ spells it…",
          opts:["Enchanté","Enchantée","Enchantés","Enchant"], answer:1,
          ok:"Yes — feminine agreement adds <b>-e</b>. It sounds identical; only the page knows.",
          no:"It's <b>enchantée</b> — the extra <b>-e</b> marks feminine agreement, silently." },
        { prompt:"<b>Moi, c'est Karim.</b> Where does this fit?",
          opts:["A job interview","Meeting friends of friends","Speaking to a judge","A formal letter"], answer:1,
          ok:"Exactly — it's the relaxed, everyday intro. Warm, not sloppy.",
          no:"<b>Moi, c'est…</b> is casual — perfect among peers, out of place in formal settings." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Madame, monsieur — no name needed",
      body:[
        "In France, <b>madame</b> and <b>monsieur</b> stand alone: <b>Bonjour, madame</b> to the pharmacist, <b>Merci, monsieur</b> to the bus driver. No surname required — it's the polite default with strangers, and it pairs with <b>vous</b>.",
        "One update worth knowing: <b>mademoiselle</b> was removed from official French forms in 2012 and is fading from polite use. When in doubt, <b>madame</b> — regardless of age or marital status."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 2, done.",
      body:["You can now greet <em>and</em> introduce yourself in both registers — the tu/vous muscle is already working."],
      next:"Jour 3 — Je suis, tu es… (the verb être)"}
  ]
};

const LESSON_3 = {
  day: 3, week: 1,
  title: "Être : je suis, tu es…",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Your first verb — the big one",
      body:[
        "<b>Être</b> (to be) is the most-used verb in French, and the most irregular. You've already been using it — <b>je suis</b>, <b>c'est</b> — today you get the whole set.",
        "Along the way you'll meet <b>on</b>, the little pronoun that does most of the work of ‘we’ in real spoken French."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"The nasal trio",
      body:["Day 1 gave you one nasal vowel. French has more — and they distinguish real words. This trio is the classic test:"],
      pairs:[
        { fr:"vin", ipa:"/vɛ̃/", en:"wine — mouth in a smile", say:"vin", key:"d03_vin" },
        { fr:"vent", ipa:"/vɑ̃/", en:"wind — mouth open, jaw down", say:"vent", key:"d03_vent" },
        { fr:"vont", ipa:"/vɔ̃/", en:"(they) go — lips rounded", say:"vont", key:"d03_vont" }
      ],
      tip:"Three different words, distinguished <em>only</em> by which nasal vowel you make. Cycle through them out loud until the three mouth shapes feel distinct."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Être — the full set",
      items:[
        { fr:"Je suis", en:"I am", reg:null, say:"je suis", key:"d03_v_jesuis" },
        { fr:"Tu es", en:"You are (informal)", reg:"informal", say:"tu es", key:"d03_v_tues" },
        { fr:"Il est", en:"He is / It is", reg:null, say:"il est", key:"d03_v_ilest" },
        { fr:"Elle est", en:"She is / It is", reg:null, say:"elle est", key:"d03_v_elleest" },
        { fr:"On est", en:"We are (everyday spoken)", reg:"informal", say:"on est", key:"d03_v_onest" },
        { fr:"Nous sommes", en:"We are (careful / written)", reg:"formal", say:"nous sommes", key:"d03_v_noussommes" },
        { fr:"Vous êtes", en:"You are (formal or plural)", reg:"formal", say:"vous êtes", key:"d03_v_vousetes" },
        { fr:"Ils sont", en:"They are", reg:null, say:"ils sont", key:"d03_v_ilssont" }
      ],
      tip:"Listen to <b>vous êtes</b>: the silent s of <em>vous</em> comes alive and glues onto <em>êtes</em> — ‘vou-ZÊT’. That's <b>liaison</b>, and it's everywhere. Also: <b>elles sont</b> (all-female ‘they’) sounds identical to <b>ils sont</b>."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"At a language exchange",
      body:["Strangers at a Paris language meetup — polite <b>vous</b>, and your first nationalities."],
      turns:[
        { who:"A", fr:"Bonsoir ! Vous êtes français ?", en:"Good evening! Are you French?", say:"Bonsoir ! Vous êtes français ?", key:"d03_d1" },
        { who:"B", fr:"Non, je suis belge. Et vous ?", en:"No, I'm Belgian. And you?", say:"Non, je suis belge. Et vous ?", key:"d03_d2" },
        { who:"A", fr:"Moi, je suis canadienne.", en:"Me, I'm Canadian.", say:"Moi, je suis canadienne.", key:"d03_d3" },
        { who:"B", fr:"Ah, super !", en:"Oh, great!", say:"Ah, super !", key:"d03_d4" }
      ],
      tip:"<b>Moi, je suis…</b> — doubling the pronoun for emphasis is completely natural spoken French. And note <b>canadienne</b>: she's a woman, so the adjective takes the feminine form (a man would say <b>canadien</b>)."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>Vous ___ français ?</b>",
          opts:["es","est","êtes","sont"], answer:2,
          ok:"Right — <b>vous êtes</b>, with the liaison: vou-ZÊT.",
          no:"With <em>vous</em> it's <b>êtes</b> — and the liaison makes it sound like vou-ZÊT." },
        { prompt:"In everyday spoken French, ‘we are’ is usually…",
          opts:["nous sommes","on est","ils sont","vous êtes"], answer:1,
          ok:"Exactly. <b>On est</b> dominates casual speech; <b>nous sommes</b> is for careful or written French.",
          no:"It's <b>on est</b> — spoken French strongly prefers <em>on</em> over <em>nous</em> for ‘we’." },
        { prompt:"<b>Vin</b>, <b>vent</b>, <b>vont</b> differ only by…",
          opts:["the consonant","the nasal vowel","the stress","nothing — they sound the same"], answer:1,
          ok:"Yes — three nasal vowels, three different words. Your ear will get there.",
          no:"They differ by the <b>nasal vowel</b> — /ɛ̃/, /ɑ̃/, /ɔ̃/. Three mouth shapes, three words." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Tu or vous? The actual rules",
      body:[
        "Default to <b>vous</b> with strangers, shopkeepers, officials, colleagues you've just met, and anyone clearly older. Use <b>tu</b> with friends, family, children, fellow students — and online, where <em>tu</em> is the norm.",
        "The switch from <em>vous</em> to <em>tu</em> is a small social event. Often someone proposes it: <b>On peut se tutoyer ?</b> (‘Shall we switch to tu?’). Until invited, staying with <em>vous</em> is never wrong; jumping to <em>tu</em> too early can be."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 3, done.",
      body:["One verb down — the biggest one. <b>Être</b> plus the pronouns unlocks half of what beginners need to say."],
      next:"Jour 4 — Le, la, les (gender & articles)"}
  ]
};

const LESSON_4 = {
  day: 4, week: 1,
  title: "Le, la, les — le genre",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Every noun picks a side",
      body:[
        "French nouns are masculine or feminine — all of them, with no logic you can safely guess from. <b>Le café</b> but <b>la rue</b>. Today you learn to hear the difference and to store every new noun <em>with</em> its article.",
        "You also get <b>c'est</b> and the question that unlocks every unknown thing around you: <b>Qu'est-ce que c'est ?</b>"
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Le vs les — a vowel, not an s",
      body:["Singular and plural often <em>look</em> different but the noun sounds the same — the article carries the whole difference:"],
      pairs:[
        { fr:"le café", ipa:"/lə/", en:"‘uh’ — relaxed, central", say:"le café", key:"d04_lecafe" },
        { fr:"les cafés", ipa:"/le/", en:"‘ay’ — tense, smiling", say:"les cafés", key:"d04_lescafes" },
        { fr:"la rue", ipa:"/la/", en:"‘ah’ — open", say:"la rue", key:"d04_larue" }
      ],
      tip:"<b>Café</b> and <b>cafés</b> are pronounced identically — the final s is silent. The <em>only</em> audible plural marker here is le /lə/ → les /le/. Miss that vowel and you miss the plural."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Eight nouns — with their articles",
      items:[
        { fr:"le café", en:"the coffee / the café", reg:null, say:"le café", key:"d04_v_cafe" },
        { fr:"la rue", en:"the street", reg:null, say:"la rue", key:"d04_v_rue" },
        { fr:"le métro", en:"the metro", reg:null, say:"le métro", key:"d04_v_metro" },
        { fr:"la ville", en:"the city", reg:null, say:"la ville", key:"d04_v_ville" },
        { fr:"le pain", en:"the bread", reg:null, say:"le pain", key:"d04_v_pain" },
        { fr:"la boulangerie", en:"the bakery", reg:null, say:"la boulangerie", key:"d04_v_boulangerie" },
        { fr:"le musée", en:"the museum", reg:null, say:"le musée", key:"d04_v_musee" },
        { fr:"la gare", en:"the train station", reg:null, say:"la gare", key:"d04_v_gare" }
      ],
      tip:"Store the article as <em>part of the word</em>: not ‘café = coffee’, but ‘<b>le café</b>’. Endings mislead — <b>le musée</b> ends in -ée and is still masculine. The article is the only reliable label."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Pointing around the neighborhood",
      body:["A visitor and a local — <b>vous</b> — naming what they see."],
      turns:[
        { who:"A", fr:"Qu'est-ce que c'est ?", en:"What is that?", say:"Qu'est-ce que c'est ?", key:"d04_d1" },
        { who:"B", fr:"C'est la gare de Lyon.", en:"That's the Gare de Lyon.", say:"C'est la gare de Lyon.", key:"d04_d2" },
        { who:"A", fr:"Et ça, c'est le métro ?", en:"And that, is that the metro?", say:"Et ça, c'est le métro ?", key:"d04_d3" },
        { who:"B", fr:"Oui, c'est la ligne une.", en:"Yes, that's line 1.", say:"Oui, c'est la ligne une.", key:"d04_d4" }
      ],
      tip:"<b>Qu'est-ce que c'est ?</b> looks monstrous on the page but it's one smooth chunk in speech: ‘kess-kuh-SAY’. Learn it as a single word."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Complete: <b>___ boulangerie</b>",
          opts:["le","la","les","l'"], answer:1,
          ok:"Right — <b>la boulangerie</b>. Feminine, like <em>la rue</em> and <em>la gare</em>.",
          no:"It's <b>la</b> boulangerie — feminine. Store the article with the noun." },
        { prompt:"You hear /le kafe/ — <b>les cafés</b>. How do you know it's plural?",
          opts:["the final s is pronounced","the vowel of the article","the noun changes","you can't know"], answer:1,
          ok:"Exactly — /lə/ vs /le/. The article's vowel does all the work.",
          no:"The final s is silent — the plural lives in the article's vowel: le /lə/ vs les /le/." },
        { prompt:"To ask ‘what is that?’ you say…",
          opts:["Comment ça va ?","Qu'est-ce que c'est ?","Vous êtes quoi ?","C'est qui ?"], answer:1,
          ok:"Yes — kess-kuh-SAY. Your key to naming the world.",
          no:"It's <b>Qu'est-ce que c'est ?</b> — one smooth chunk: kess-kuh-SAY." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Gender errors: how the French actually hear them",
      body:[
        "Say <b>le rue</b> instead of <b>la rue</b> and every French person still understands you perfectly — gender mistakes almost never block communication. So don't let fear of <em>le/la</em> silence you.",
        "But natives never make these errors themselves, so consistent gender is one of the clearest fluency markers there is. The fix costs nothing: from today, never learn a naked noun. It's always <b>le pain</b>, never just <em>pain</em>."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 4, done.",
      body:["Eight nouns, correctly gendered, plus the question that names everything else. The world is now labelable."],
      next:"Jour 5 — Un, deux, trois… (numbers to 20)"}
  ]
};

const LESSON_5 = {
  day: 5, week: 1,
  title: "Les nombres 0–20",
  durationMin: 20,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Count to twenty, pay for bread",
      body:[
        "Numbers are pure frequency: prices, times, métro lines, addresses. Today you get 0–20 — enough to shop, and enough to survive most price tags.",
        "French numbers have famous quirks waiting at 70 and 90. Not today's problem — but today builds the base that makes them manageable in week 3."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Number sounds — including the fourth nasal",
      body:["Three number sounds that need your attention:"],
      pairs:[
        { fr:"un", ipa:"/œ̃/", en:"the fourth nasal vowel — completes the set", say:"un", key:"d05_un" },
        { fr:"deux", ipa:"/dø/", en:"rounded lips, not ‘duh’ or ‘doo’", say:"deux", key:"d05_deux" },
        { fr:"vingt", ipa:"/vɛ̃/", en:"sounds exactly like vin (wine)!", say:"vingt", key:"d05_vingt" }
      ],
      tip:"Yes — <b>vingt</b> (20) and <b>vin</b> (wine) are pronounced identically. Context does the sorting, as it will surprisingly often in French."},
    { type:"vocab",
      eyebrow:"Le vocabulaire · 1–10",
      h:"The first ten",
      items:[
        { fr:"un", en:"1", reg:null, say:"un", key:"d05_v_1" },
        { fr:"deux", en:"2", reg:null, say:"deux", key:"d05_v_2" },
        { fr:"trois", en:"3", reg:null, say:"trois", key:"d05_v_3" },
        { fr:"quatre", en:"4", reg:null, say:"quatre", key:"d05_v_4" },
        { fr:"cinq", en:"5", reg:null, say:"cinq", key:"d05_v_5" },
        { fr:"six", en:"6", reg:null, say:"six", key:"d05_v_6" },
        { fr:"sept", en:"7", reg:null, say:"sept", key:"d05_v_7" },
        { fr:"huit", en:"8", reg:null, say:"huit", key:"d05_v_8" },
        { fr:"neuf", en:"9", reg:null, say:"neuf", key:"d05_v_9" },
        { fr:"dix", en:"10", reg:null, say:"dix", key:"d05_v_10" }
      ],
      tip:"(<b>Zéro</b> is the freebie — same as English.) Counting quirk: <b>six</b> and <b>dix</b> end in an /s/ sound when counting, but that sound often drops before a noun starting with a consonant: <b>six croissants</b> → ‘si croissants’."},
    { type:"vocab",
      eyebrow:"Le vocabulaire · 11–20",
      h:"Eleven to twenty",
      items:[
        { fr:"onze", en:"11", reg:null, say:"onze", key:"d05_v_11" },
        { fr:"douze", en:"12", reg:null, say:"douze", key:"d05_v_12" },
        { fr:"treize", en:"13", reg:null, say:"treize", key:"d05_v_13" },
        { fr:"quatorze", en:"14", reg:null, say:"quatorze", key:"d05_v_14" },
        { fr:"quinze", en:"15", reg:null, say:"quinze", key:"d05_v_15" },
        { fr:"seize", en:"16", reg:null, say:"seize", key:"d05_v_16" },
        { fr:"dix-sept", en:"17", reg:null, say:"dix-sept", key:"d05_v_17" },
        { fr:"dix-huit", en:"18", reg:null, say:"dix-huit", key:"d05_v_18" },
        { fr:"dix-neuf", en:"19", reg:null, say:"dix-neuf", key:"d05_v_19" },
        { fr:"vingt", en:"20", reg:null, say:"vingt", key:"d05_v_20" }
      ],
      tip:"11–16 are their own words; 17–19 switch to compounds (<b>dix-sept</b> = ten-seven). That ‘build it from pieces’ logic returns with a vengeance at 70 (<em>soixante-dix</em> = sixty-ten). You've been warned — kindly."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Paying at the boulangerie",
      body:["Back at the bakery from Day 1 — but now you can handle the price."],
      turns:[
        { who:"A", fr:"Bonjour ! Deux croissants et une baguette, s'il vous plaît.", en:"Hello! Two croissants and a baguette, please.", say:"Bonjour ! Deux croissants et une baguette, s'il vous plaît.", key:"d05_d1" },
        { who:"B", fr:"Voilà. Quatre euros dix, s'il vous plaît.", en:"Here you go. Four euros ten, please.", say:"Voilà. Quatre euros dix, s'il vous plaît.", key:"d05_d2" },
        { who:"A", fr:"Tenez. Merci !", en:"Here you are. Thanks!", say:"Tenez. Merci !", key:"d05_d3" },
        { who:"B", fr:"Merci, bonne journée !", en:"Thank you, have a good day!", say:"Merci, bonne journée !", key:"d05_d4" }
      ],
      tip:"<b>Une baguette</b> — <em>une</em> is the feminine ‘a’ (masculine: <em>un croissant</em>). And prices skip the word for cents: <b>quatre euros dix</b> = €4.10. <b>Tenez</b> = ‘here you are’ when handing something over."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You hear <b>« quinze »</b>. How many?",
          opts:["5","12","15","16"], answer:2,
          ok:"Right — quinze = 15. (Seize is 16; they're easy to mix at speed.)",
          no:"<b>Quinze</b> is 15 — <em>seize</em> is 16. This pair takes a few reps." },
        { prompt:"18 in French:",
          opts:["dix-sept","dix-huit","dix-neuf","huit"], answer:1,
          ok:"Yes — ten-eight. The compound logic.",
          no:"It's <b>dix-huit</b> — literally ‘ten-eight’." },
        { prompt:"The baker says <b>« quatre euros dix »</b>. The till shows…",
          opts:["€4.00","€4.10","€10.04","€14.00"], answer:1,
          ok:"Exactly — €4.10. The word for cents is simply skipped.",
          no:"€4.10 — French prices go ‘euros’ then the cents number, no extra word." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Paying, the French way",
      body:[
        "Card — and especially contactless, <b>sans contact</b> — is accepted nearly everywhere in France now, including at bakeries for a €1.30 croissant. You'll hear <b>Par carte ?</b> (‘By card?’) as the default assumption.",
        "And a heads-up delivered with sympathy: French counting takes a scenic route above 69. <b>Soixante-dix</b> (60+10 = 70) and <b>quatre-vingt-dix</b> (4×20+10 = 90) are waiting in week 3. Today's 0–20 are exactly the pieces they're built from."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 5, done.",
      body:["Twenty numbers and a real transaction, start to finish. You could now walk out of a boulangerie having done the whole thing in French."],
      next:"Jour 6 — Ça va ? (small talk & politeness)"}
  ]
};

const LESSON_6 = {
  day: 6, week: 1,
  title: "Ça va ? — la politesse",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"The politeness toolkit",
      body:[
        "You can greet, introduce yourself, and pay. Today fills in the connective tissue: asking how someone is, answering honestly, apologizing, and leaving gracefully.",
        "Plus the secret behind all those apostrophes you've been reading since Day 1."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Elision — where apostrophes come from",
      body:["When a little word ending in <b>e</b> meets a word starting with a vowel, the e drops and the words fuse. You've been saying these all week:"],
      pairs:[
        { fr:"c'est", ipa:"/sɛ/", en:"ce + est → one syllable", say:"c'est", key:"d06_cest" },
        { fr:"s'il vous plaît", ipa:"/sil/", en:"si + il → s'il", say:"s'il vous plaît", key:"d06_sil" },
        { fr:"je m'appelle", ipa:"/ma.pɛl/", en:"me + appelle → m'appelle", say:"je m'appelle", key:"d06_mappelle" }
      ],
      tip:"Elision isn't optional style — it's mandatory. <em>Ce est</em> simply doesn't exist. French systematically refuses to let two vowels collide; elision (and liaison, its cousin) are how it keeps speech flowing."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"How are you — and everything after",
      items:[
        { fr:"Comment allez-vous ?", en:"How are you?", reg:"formal", say:"Comment allez-vous ?", key:"d06_v_commentallez" },
        { fr:"Ça va ?", en:"How's it going?", reg:null, say:"Ça va ?", key:"d06_v_cava" },
        { fr:"Pas mal", en:"Not bad", reg:null, say:"Pas mal", key:"d06_v_pasmal" },
        { fr:"Bof", en:"Meh…", reg:"informal", say:"Bof", key:"d06_v_bof" },
        { fr:"De rien", en:"You're welcome", reg:null, say:"De rien", key:"d06_v_derien" },
        { fr:"Pardon", en:"Sorry / excuse me", reg:null, say:"Pardon", key:"d06_v_pardon" },
        { fr:"Désolé(e)", en:"Sorry (apologizing)", reg:null, say:"Désolé", key:"d06_v_desole" },
        { fr:"Bonne journée !", en:"Have a good day!", reg:null, say:"Bonne journée !", key:"d06_v_bonnejournee" }
      ],
      tip:"<b>Bof</b> is gloriously French — a one-syllable shrug. Use it with friends, not with your boss. Evening version of the send-off: <b>bonne soirée</b>. And <b>pardon</b> is what you say squeezing through a crowded métro car."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Leaving the shop",
      body:["The graceful exit — as ritualized as the <b>bonjour</b> entrance."],
      turns:[
        { who:"A", fr:"Merci beaucoup, madame.", en:"Thank you very much, ma'am.", say:"Merci beaucoup, madame.", key:"d06_d1" },
        { who:"B", fr:"De rien. Bonne journée !", en:"You're welcome. Have a good day!", say:"De rien. Bonne journée !", key:"d06_d2" },
        { who:"A", fr:"Merci, vous aussi. Au revoir !", en:"Thanks, you too. Goodbye!", say:"Merci, vous aussi. Au revoir !", key:"d06_d3" },
        { who:"B", fr:"Au revoir !", en:"Goodbye!", say:"Au revoir !", key:"d06_d4" }
      ],
      tip:"<b>Vous aussi</b> — ‘you too’. The exit ritual (thanks → wish → goodbye, returned in kind) is as fixed as the entrance <em>bonjour</em>. Bookend every shop visit with both and you'll be treated noticeably better."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"Someone says <b>« Merci beaucoup »</b>. You reply…",
          opts:["Pardon","De rien","Bof","Enchanté"], answer:1,
          ok:"Right — <b>de rien</b>, ‘it's nothing’.",
          no:"The standard reply is <b>de rien</b> — literally ‘of nothing’." },
        { prompt:"<b>« Bof »</b> means roughly…",
          opts:["Fantastic!","Meh / so-so","Watch out!","Goodbye"], answer:1,
          ok:"Exactly — the verbal shrug. Friends only.",
          no:"<b>Bof</b> = meh. A whole mood in one informal syllable." },
        { prompt:"Leaving a shop at 3 in the afternoon, you say…",
          opts:["Bonne soirée !","Bonsoir !","Bonne journée !","Salut !"], answer:2,
          ok:"Yes — day hours get <b>bonne journée</b>; evening flips to <em>bonne soirée</em>.",
          no:"At 3 pm it's <b>bonne journée</b> — <em>bonne soirée</em> takes over in the evening." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"La bise, or a handshake?",
      body:[
        "Among friends and family, the French greet with <b>la bise</b> — light cheek kisses, usually two in Paris (the count varies by region, a genuine national debate). In professional settings and between men who don't know each other well, it's a handshake.",
        "As a learner: never initiate, just mirror. If a cheek is offered, it's la bise; if a hand, shake it. Hesitating is completely normal — even the French sometimes negotiate it mid-greeting."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 6, done.",
      body:["Entrance ritual, exit ritual, and everything between. Tomorrow: no new material — we consolidate the whole week."],
      next:"Jour 7 — Révision (week 1 review)"}
  ]
};

const LESSON_7 = {
  day: 7, week: 1,
  title: "Révision — la semaine 1",
  durationMin: 15,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Nothing new. That's the point.",
      body:[
        "Review day. No new vocabulary, no new sounds — just retrieval, which is where learning actually consolidates. Six questions spanning the whole week, plus one longer dialogue that uses everything you've got.",
        "If something feels shaky, that's the system working: the wobble tells you what to revisit."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"The whole week in one conversation",
      body:["Two strangers at a café counter — greetings, introductions, être, nationality, a number. Everything from Days 1–6, at natural speed. Use 🐢 freely."],
      turns:[
        { who:"A", fr:"Bonsoir ! Moi, c'est Nadia. Et vous ?", en:"Good evening! I'm Nadia. And you?", say:"Bonsoir ! Moi, c'est Nadia. Et vous ?", key:"d07_d1" },
        { who:"B", fr:"Bonsoir ! Je m'appelle Marc. Enchanté.", en:"Good evening! My name's Marc. Nice to meet you.", say:"Bonsoir ! Je m'appelle Marc. Enchanté.", key:"d07_d2" },
        { who:"A", fr:"Enchantée ! Vous êtes français ?", en:"Nice to meet you! Are you French?", say:"Enchantée ! Vous êtes français ?", key:"d07_d3" },
        { who:"B", fr:"Oui, oui. Et vous ?", en:"Yes, yes. And you?", say:"Oui, oui. Et vous ?", key:"d07_d4" },
        { who:"A", fr:"Moi, je suis suisse.", en:"Me, I'm Swiss.", say:"Moi, je suis suisse.", key:"d07_d5" },
        { who:"B", fr:"Un café ?", en:"A coffee?", say:"Un café ?", key:"d07_d6" },
        { who:"A", fr:"Oui, merci ! Deux cafés, s'il vous plaît !", en:"Yes, thanks! Two coffees, please!", say:"Oui, merci ! Deux cafés, s'il vous plaît !", key:"d07_d7" }
      ],
      tip:"<b>Un café ?</b> — spoken French happily drops everything but the essentials; the question lives entirely in the rising melody. You'll hear this ellipsis constantly."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Week 1 — the six that matter",
      questions:[
        { prompt:"You enter a pharmacy. Your first word:",
          opts:["Excusez-moi","Merci","Bonjour","Pardon"], answer:2,
          ok:"Still <b>bonjour</b> — always bonjour. The rule of rules.",
          no:"<b>Bonjour</b>, before anything else. Day 1's rule is forever." },
        { prompt:"The formal ‘What's your name?’:",
          opts:["Tu t'appelles comment ?","Comment vous appelez-vous ?","C'est quoi ?","Qui es-tu ?"], answer:1,
          ok:"Right — <em>vous</em> plus inverted verb: full formal.",
          no:"Formal = <b>Comment vous appelez-vous ?</b> The <em>tu</em> version is for peers." },
        { prompt:"Complete: <b>Vous ___ suisse ?</b>",
          opts:["es","êtes","est","sommes"], answer:1,
          ok:"Yes — vous êtes, sounding like vou-ZÊT.",
          no:"<b>Vous êtes</b> — with the liaison: vou-ZÊT." },
        { prompt:"Complete: <b>___ gare</b>",
          opts:["le","la","les","un"], answer:1,
          ok:"Right — <b>la gare</b>, feminine.",
          no:"It's <b>la gare</b> — feminine, like la rue and la ville." },
        { prompt:"<b>« Seize »</b> is…",
          opts:["6","13","15","16"], answer:3,
          ok:"Yes — 16. (Quinze is 15 — the classic mix-up, now un-mixed.)",
          no:"<b>Seize</b> = 16. Its trap partner <em>quinze</em> = 15." },
        { prompt:"First day at a new job, meeting a colleague your age. You use…",
          opts:["tu right away","vous, until invited to switch","neither, just English","alternate randomly"], answer:1,
          ok:"Exactly — <b>vous</b> is never wrong; wait for « On peut se tutoyer ? »",
          no:"Start with <b>vous</b> — it's never wrong. The invitation to <em>tu</em> will come." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["These are the words the schedule says are about to fade. Grade yourself honestly — a wrong answer here just means the card comes back sooner, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"What one week actually bought you",
      body:[
        "Roughly seventy words and phrases, both registers of address, the verb <b>être</b>, gendered articles, numbers to twenty, and the two social rituals — <em>bonjour</em> in, <em>bonne journée</em> out — that shape every small interaction in France.",
        "Honest note: a week is a foundation, not fluency. These items will resurface in later lessons on a spacing schedule, because retrieval at intervals — not rereading — is what moves them into long-term memory. See you at Station 8."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 1 — complète.",
      body:["Seven stations down. Next week: the French R, talking about where you're from, and your first regular verbs."],
      next:"Semaine 2, Jour 8 — Le R français"}
  ]
};

export const WEEK1 = [LESSON_1, LESSON_2, LESSON_3, LESSON_4, LESSON_5, LESSON_6, LESSON_7];
