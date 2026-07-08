/* Week 7 — Days 43–49. Home & neighborhood: possessives (mon/ma/mes and
   the ton/son extensions), the rooms of a home, furniture, regular -ir
   verbs (the finir/choisir 2nd-group pattern), floors and prepositions
   (au 3e étage), and le quartier + the concierge/gardien. This is the LAST
   A1 week — still present-tense, function-first; the passé composé and the
   real jump to A2 begin in week 8. */

const LESSON_43 = {
  day: 43, week: 7,
  title: "Chez moi : mon, ma, mes",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Saying what's yours",
      body:[
        "Week 7 goes home. The first tool is the possessive: <b>mon</b>, <b>ma</b>, <b>mes</b> — ‘my’, in three shapes. Which one you use depends on the noun, exactly like the <em>ce/cet/cette/ces</em> you met last week.",
        "One rule flips the intuition of every English speaker: French possessives agree with the <em>thing owned</em>, not the owner."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"mon vs ma: one nasal, one not",
      body:["The whole masculine/feminine split rides on a single sound — is the vowel nasal or not:"],
      pairs:[
        { fr:"mon frère", ipa:"/mɔ̃ fʁɛʁ/", en:"masculine — mon, a nasal /ɔ̃/ (air through the nose)", say:"mon frère", key:"d43_monfrere" },
        { fr:"ma sœur", ipa:"/ma sœʁ/", en:"feminine — ma, a plain oral /a/", say:"ma sœur", key:"d43_masoeur" },
        { fr:"mon amie", ipa:"/mɔ̃.na.mi/", en:"feminine noun, but vowel-initial — so mon, and the n liaises", say:"mon amie", key:"d43_monamie" }
      ],
      tip:"<b>mon</b> /mɔ̃/ is nasal (the day-1 ‘on’ sound), <b>ma</b> /ma/ is the plain open vowel — that contrast is the whole gender distinction here. The third pair is the twist: before a feminine noun starting with a vowel, French swaps <em>ma</em> for <b>mon</b> to avoid two vowels colliding — <em>ma amie</em> doesn't exist, only <b>mon amie</b> — the exact same instinct behind <em>cet</em> before a vowel last week. And it liaises: mon‿amie = /mɔ̃.na.mi/. (<b>frère</b> and <b>sœur</b> are back from week 2's family.)"},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"My place, my things",
      items:[
        { fr:"mon appartement", en:"my apartment (masc.)", reg:null, say:"mon appartement", key:"d43_v_monappart" },
        { fr:"ma maison", en:"my house (fem.)", reg:null, say:"ma maison", key:"d43_v_mamaison" },
        { fr:"mes affaires", en:"my things / my stuff (plural)", reg:null, say:"mes affaires", key:"d43_v_mesaffaires" },
        { fr:"mon adresse", en:"my address (fem. + vowel → mon)", reg:null, say:"mon adresse", key:"d43_v_monadresse" },
        { fr:"chez moi", en:"at my place / (to) my home", reg:null, say:"chez moi", key:"d43_v_chezmoi" },
        { fr:"la clé", en:"the key", reg:null, say:"la clé", key:"d43_v_cle" },
        { fr:"la porte", en:"the door", reg:null, say:"la porte", key:"d43_v_porte" },
        { fr:"J'habite ici.", en:"I live here.", reg:null, say:"J'habite ici.", key:"d43_v_jhabiteici" }
      ],
      tip:"The rule that trips up English speakers: <b>mon/ma/mes</b> agree with the <em>noun owned</em>, not with you. <em>Ma maison</em> is ‘ma’ because <em>maison</em> is feminine — it says nothing about whether the owner is a man or a woman. And <b>chez moi</b> is a fixed unit: ‘at/to my place’ — you'll meet <em>chez toi</em>, <em>chez elle</em> the same way."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Inviting someone over",
      body:["Two friends making a plan — <b>tu</b>."],
      turns:[
        { who:"A", fr:"On se retrouve chez moi ce soir ?", en:"Shall we meet at my place tonight?", say:"On se retrouve chez moi ce soir ?", key:"d43_d1" },
        { who:"B", fr:"D'accord ! C'est quoi, ton adresse ?", en:"OK! What's your address?", say:"D'accord ! C'est quoi, ton adresse ?", key:"d43_d2" },
        { who:"A", fr:"J'habite au 12, rue Mouffetard. La porte bleue.", en:"I live at 12 Rue Mouffetard. The blue door.", say:"J'habite au 12, rue Mouffetard. La porte bleue.", key:"d43_d3" },
        { who:"B", fr:"Parfait. J'apporte mes affaires et un dessert !", en:"Perfect. I'll bring my stuff and a dessert!", say:"Parfait. J'apporte mes affaires et un dessert !", key:"d43_d4" }
      ],
      tip:"<b>Ton adresse</b> — speaker B uses <em>ton</em> (‘your’), the same nasal-vs-oral system as mon/ma, just for ‘you’: you'll drill it in two days. <b>C'est quoi, ton adresse ?</b> is the relaxed spoken order for ‘what's your address?’ — the same casual question-word-last move from week 4's <em>tu vas où ?</em>"},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘My house’ — la maison is feminine:",
          opts:["mon maison","ma maison","mes maison","ma maisons"], answer:1,
          ok:"Right — ma, agreeing with the feminine noun maison.",
          no:"<b>Ma maison</b> — the possessive matches the noun's gender, and maison is feminine." },
        { prompt:"‘My address’ — adresse is feminine but starts with a vowel:",
          opts:["ma adresse","mon adresse","mes adresse","m'adresse"], answer:1,
          ok:"Yes — mon, swapped in before the vowel to avoid a collision.",
          no:"<b>Mon adresse</b> — feminine + vowel takes mon, exactly like cet from last week." },
        { prompt:"French possessives agree with…",
          opts:["the owner's gender","the gender of the thing owned","nothing, they're fixed","the verb"], answer:1,
          ok:"Right — the noun owned decides mon/ma/mes, never the owner.",
          no:"The <b>thing owned</b> — that's the big flip from English." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Chez moi — more than an address",
      body:[
        "<b>Chez</b> has no clean English equivalent — <em>chez moi</em>, <em>chez le médecin</em>, <em>chez Paul</em> all mean ‘at (the place/home of)…’. It's one of the most useful little words in French, and it carries a whiff of the private, personal space behind it.",
        "That matters in France, where the home is guarded more than in some cultures: being invited <em>chez quelqu'un</em> (to someone's home) rather than meeting at a café is a real mark of closeness, not a casual default. If it happens, bringing something — flowers, a dessert, a good bottle — is expected."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 43, done.",
      body:["You can talk about your place and what's in it. Tomorrow: the rooms inside it."],
      next:"Jour 44 — Les pièces de la maison"}
  ]
};

const LESSON_44 = {
  day: 44, week: 7,
  title: "Les pièces de la maison",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Room by room",
      body:[
        "Now the inside: the kitchen, the living room, the bedroom, the bathroom. A handful of nouns lets you describe a whole flat and say what you do in each room.",
        "You already own the tool for locating them — <b>dans</b> (in) plus the prepositions of place from week 4."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"A glide and two nasals, all reviewed",
      body:["Nothing new — three sounds you've already built, on new words:"],
      pairs:[
        { fr:"la cuisine", ipa:"/la kɥi.zin/", en:"the /ɥi/ glide from ‘je suis’ and ‘huit’, right at the start", say:"la cuisine", key:"d44_cuisine" },
        { fr:"la chambre", ipa:"/la ʃɑ̃bʁ/", en:"the ‘an/am’ nasal /ɑ̃/, and ch = /ʃ/, never English ‘ch’", say:"la chambre", key:"d44_chambre" },
        { fr:"la salle de bain", ipa:"/la sal də bɛ̃/", en:"bain = the ‘in’ nasal /bɛ̃/; salle keeps a hard L", say:"la salle de bain", key:"d44_salledebain" }
      ],
      tip:"<b>Cuisine</b> opens with the same rounded /ɥi/ you've said since <em>huit</em> and <em>je suis</em>. And <b>salle</b> is a reminder of week 6's -ille exception rule: double-l here is a hard /l/ (like <em>ville</em>), not the /j/ glide of <em>taille</em>."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The rooms",
      items:[
        { fr:"la pièce", en:"the room (a room in general)", reg:null, say:"la pièce", key:"d44_v_piece" },
        { fr:"la cuisine", en:"the kitchen", reg:null, say:"la cuisine", key:"d44_v_cuisine" },
        { fr:"le salon", en:"the living room", reg:null, say:"le salon", key:"d44_v_salon" },
        { fr:"la chambre", en:"the bedroom", reg:null, say:"la chambre", key:"d44_v_chambre" },
        { fr:"la salle de bain", en:"the bathroom", reg:null, say:"la salle de bain", key:"d44_v_salledebain" },
        { fr:"les toilettes", en:"the toilet (always plural)", reg:null, say:"les toilettes", key:"d44_v_toilettes" },
        { fr:"l'entrée", en:"the entrance / hallway (fem.)", reg:null, say:"l'entrée", key:"d44_v_entree" },
        { fr:"le couloir", en:"the corridor", reg:null, say:"le couloir", key:"d44_v_couloir" }
      ],
      tip:"Two false friends worth separating: <b>la pièce</b> is a room in the counting sense (<em>un deux-pièces</em> = a two-room flat), while <b>la chambre</b> is specifically a <em>bedroom</em>. And in France the toilet is usually a separate little room from the <b>salle de bain</b> (which literally has the bath) — hence <em>les toilettes</em>, still plural, straight from week 4."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"A quick tour",
      body:["A friend showing another around a new flat — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Voici l'entrée, et là, c'est la cuisine.", en:"Here's the entrance, and there, that's the kitchen.", say:"Voici l'entrée, et là, c'est la cuisine.", key:"d44_d1" },
        { who:"B", fr:"Elle est grande ! Et ta chambre, elle est où ?", en:"It's big! And your bedroom, where is it?", say:"Elle est grande ! Et ta chambre, elle est où ?", key:"d44_d2" },
        { who:"A", fr:"Au fond du couloir, à côté de la salle de bain.", en:"At the end of the corridor, next to the bathroom.", say:"Au fond du couloir, à côté de la salle de bain.", key:"d44_d3" },
        { who:"B", fr:"Et le salon donne sur la rue ?", en:"And the living room looks out on the street?", say:"Et le salon donne sur la rue ?", key:"d44_d4" },
        { who:"A", fr:"Oui, avec beaucoup de lumière !", en:"Yes, with lots of light!", say:"Oui, avec beaucoup de lumière !", key:"d44_d5" }
      ],
      tip:"<b>Au fond du couloir</b> = ‘at the end of the corridor’ — <em>au fond de</em> + the week-3/6 <em>de+le=du</em> fusion, still firing. <b>Donner sur</b> is a lovely fixed phrase: a window or room ‘gives onto’ / looks out on something. <b>Beaucoup de lumière</b> — week 6's quantity <em>de</em>, back again."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"You want to sleep. Which room?",
          opts:["la cuisine","le salon","la chambre","l'entrée"], answer:2,
          ok:"Right — la chambre, the bedroom.",
          no:"<b>La chambre</b> — the bedroom. La pièce is just ‘a room’ generally." },
        { prompt:"‘The toilet’ in French is…",
          opts:["le toilette","la toilette","les toilettes","le salle de bain"], answer:2,
          ok:"Yes — les toilettes, plural, and usually its own little room.",
          no:"<b>Les toilettes</b> — always plural, and separate from the salle de bain." },
        { prompt:"In ‘au fond du couloir’, du comes from…",
          opts:["de + la","de + le","de + les","just de"], answer:1,
          ok:"Right — de + le = du, the fusion from weeks 3 and 6.",
          no:"<b>de + le = du</b> — the same contraction you've used since the café week." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Reading a French flat listing",
      body:[
        "French flats are counted by rooms, not bedrooms, and the count excludes the kitchen and bathroom. A <b>studio</b> is one single room; a <b>deux-pièces</b> (T2/F2) is a living room plus one bedroom; a <b>trois-pièces</b> adds another. So ‘un deux-pièces’ is roughly a one-bedroom flat — a common point of confusion for newcomers.",
        "You'll also see <b>séjour</b> (a slightly more formal word for the living/reception room), <b>cuisine équipée</b> (fitted kitchen) and <b>WC séparé</b> (that separate toilet again) — the vocabulary of every listing on a French rental site."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 44, done.",
      body:["You can describe the layout of a home. Tomorrow: the furniture inside it — and ‘your’ and ‘his/her’."],
      next:"Jour 45 — Les meubles : ton, ta, son, sa"}
  ]
};

const LESSON_45 = {
  day: 45, week: 7,
  title: "Les meubles : ton, ta, son, sa",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Furniture, and two more owners",
      body:[
        "The furniture that fills those rooms — a bed, a table, a sofa — plus the next two possessives: <b>ton/ta/tes</b> (‘your’, informal) and <b>son/sa/ses</b> (‘his’ AND ‘her’).",
        "That last set hides the single most counter-intuitive rule in French possessives, and today's the day to nail it."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Silent endings and the /wa/ spelling",
      body:["Three furniture words, three sound-and-spelling reminders:"],
      pairs:[
        { fr:"le lit", ipa:"/lə li/", en:"the final t is silent — /li/, not ‘litt’", say:"le lit", key:"d45_lit" },
        { fr:"le bureau", ipa:"/lə by.ʁo/", en:"‘eau’ = a single /o/, and the /y/ from day 1", say:"le bureau", key:"d45_bureau" },
        { fr:"une armoire", ipa:"/yn aʁ.mwaʁ/", en:"‘oi’ = /wa/, the sound in trois and moi", say:"une armoire", key:"d45_armoire" }
      ],
      tip:"All three are pure review: the <b>silent final consonant</b> of <em>lit</em> (week 1), the <b>eau → /o/</b> of <em>bureau</em>, and the <b>oi → /wa/</b> of <em>armoire</em> (as in <em>trois</em>, <em>moi</em>). By week 7 these should feel like reading, not decoding."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Furniture, and ‘your’ / ‘his’ / ‘her’",
      items:[
        { fr:"le lit", en:"the bed", reg:null, say:"le lit", key:"d45_v_lit" },
        { fr:"la table", en:"the table", reg:null, say:"la table", key:"d45_v_table" },
        { fr:"la chaise", en:"the chair", reg:null, say:"la chaise", key:"d45_v_chaise" },
        { fr:"le canapé", en:"the sofa", reg:null, say:"le canapé", key:"d45_v_canape" },
        { fr:"l'armoire", en:"the wardrobe (fem.)", reg:null, say:"l'armoire", key:"d45_v_armoire" },
        { fr:"le bureau", en:"the desk", reg:null, say:"le bureau", key:"d45_v_bureau" },
        { fr:"ta chambre", en:"your bedroom (informal, fem.)", reg:"informal", say:"ta chambre", key:"d45_v_tachambre" },
        { fr:"sa maison", en:"his / her house (fem.)", reg:null, say:"sa maison", key:"d45_v_samaison" }
      ],
      tip:"The rule that surprises everyone: <b>son/sa/ses</b> means ‘his’ <em>or</em> ‘her’ — it agrees with the <em>object</em>, never the person. <b>Sa maison</b> is ‘his house’ OR ‘her house’; the noun <em>maison</em> is feminine, so it's <em>sa</em> regardless. To specify the owner you add it separately (<em>la maison de Marie</em>). And <b>ton/ta/tes</b> works exactly like mon/ma/mes: <em>ton</em> even before a feminine vowel-noun (<em>ton amie</em>)."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Whose is this?",
      body:["Two flatmates sorting furniture — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Ce canapé, il est à toi ?", en:"This sofa, is it yours?", say:"Ce canapé, il est à toi ?", key:"d45_d1" },
        { who:"B", fr:"Non, c'est le canapé de Julie. Sa mère le donne.", en:"No, it's Julie's sofa. Her mother's giving it away.", say:"Non, c'est le canapé de Julie. Sa mère le donne.", key:"d45_d2" },
        { who:"A", fr:"Et cette petite table ?", en:"And this little table?", say:"Et cette petite table ?", key:"d45_d3" },
        { who:"B", fr:"Ça, c'est ma table. Mets-la dans ta chambre !", en:"That's my table. Put it in your bedroom!", say:"Ça, c'est ma table. Mets-la dans ta chambre !", key:"d45_d4" }
      ],
      tip:"<b>Il est à toi ?</b> = ‘is it yours?’ — <em>être à</em> + a person is the everyday way to say who something belongs to. <b>Sa mère</b> shows the rule live: <em>sa</em> because <em>mère</em> is feminine, and here it happens to mean <em>her</em> mother. <b>Mets-la</b> is a command with the object stuck on — a light taste of week 9."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘His house’ and ‘her house’ are…",
          opts:["different: son vs sa","the same: sa maison for both"," son maison for both","impossible to say"], answer:1,
          ok:"Right — sa maison covers both; the noun's gender decides, not the owner's.",
          no:"<b>The same</b> — sa maison is ‘his’ or ‘her’; French doesn't mark the owner here." },
        { prompt:"‘Your bed’ (informal) — le lit is masculine:",
          opts:["ta lit","ton lit","tes lit","ton lits"], answer:1,
          ok:"Yes — ton, matching the masculine lit.",
          no:"<b>Ton lit</b> — ton for a masculine noun, just like mon." },
        { prompt:"‘Le lit’ — the final t is…",
          opts:["pronounced","silent","a /d/","nasal"], answer:1,
          ok:"Right — silent: /li/. A week-1 rule, still holding.",
          no:"<b>Silent</b> — /li/. French drops most final consonants." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Furnished, or not at all",
      body:[
        "French rentals come in two sharply different kinds. A <b>location vide</b> (unfurnished) can mean genuinely empty — sometimes no light fixtures, no kitchen units, just bare rooms — on a standard three-year lease. A <b>location meublée</b> (furnished) comes with the legally-required basics (a bed, a table, chairs, cooking equipment) on a shorter one-year lease.",
        "So ‘furnished’ vs ‘unfurnished’ is a bigger decision here than the words suggest — an unfurnished flat may need you to buy or bring every <em>meuble</em> in today's lesson, hence the popularity of the <em>friperies</em> and second-hand culture from week 6."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 45, done.",
      body:["You can say what's in a room and whose it is. Tomorrow: a whole new verb group — the -ir verbs."],
      next:"Jour 46 — Les verbes en -ir : finir, choisir"}
  ]
};

const LESSON_46 = {
  day: 46, week: 7,
  title: "Les verbes en -ir : finir, choisir",
  durationMin: 19,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"A second verb family",
      body:[
        "Since week 2 you've conjugated <b>-er</b> verbs (parler, habiter). Today: the second big regular group, the <b>-ir</b> verbs — <em>finir</em> (to finish), <em>choisir</em> (to choose), <em>réfléchir</em> (to think it over).",
        "They have one signature feature that makes them instantly recognizable in the plural."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Where the -iss- appears",
      body:["The singular and plural of an -ir verb sound genuinely different — listen for the extra /s/:"],
      pairs:[
        { fr:"je finis", ipa:"/ʒə fi.ni/", en:"singular — silent final s, just /fi.ni/", say:"je finis", key:"d46_jefinis" },
        { fr:"nous finissons", ipa:"/nu fi.ni.sɔ̃/", en:"plural — the -iss- wakes up: /fi.ni.sɔ̃/", say:"nous finissons", key:"d46_nousfinissons" },
        { fr:"ils finissent", ipa:"/il fi.nis/", en:"the -iss- is audible /nis/, but the -ent stays silent", say:"ils finissent", key:"d46_ilsfinissent" }
      ],
      tip:"The tell of a regular -ir verb: the plural forms grow an <b>-iss-</b> that the singular doesn't have. Singular <em>je/tu finis</em>, <em>il finit</em> all sound identical — /fi.ni/ — while <em>nous finissons</em>, <em>vous finissez</em>, <em>ils finissent</em> all carry that /s/. And <em>ils finissent</em> keeps its <b>-ent</b> silent, the same silent ending as every -er verb's <em>ils parlent</em> from week 2."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The -ir verbs, and their forms",
      items:[
        { fr:"finir", en:"to finish", reg:null, say:"finir", key:"d46_v_finir" },
        { fr:"choisir", en:"to choose", reg:null, say:"choisir", key:"d46_v_choisir" },
        { fr:"réfléchir", en:"to think (it over)", reg:null, say:"réfléchir", key:"d46_v_reflechir" },
        { fr:"réussir", en:"to succeed / to pass (an exam)", reg:null, say:"réussir", key:"d46_v_reussir" },
        { fr:"Je finis à 18h.", en:"I finish at 6pm.", reg:null, say:"Je finis à dix-huit heures.", key:"d46_v_jefinis" },
        { fr:"Tu choisis ?", en:"Are you choosing? / Your pick? (informal)", reg:"informal", say:"Tu choisis ?", key:"d46_v_tuchoisis" },
        { fr:"On réfléchit.", en:"We're thinking about it.", reg:null, say:"On réfléchit.", key:"d46_v_onreflechit" },
        { fr:"Nous finissons.", en:"We're finishing.", reg:null, say:"Nous finissons.", key:"d46_v_nousfinissons" }
      ],
      tip:"Full pattern for <b>finir</b>: je finis, tu finis, il/elle/on finit, nous finiss<b>ons</b>, vous finiss<b>ez</b>, ils/elles finiss<b>ent</b>. <em>Choisir, réfléchir, réussir</em> all follow it exactly. Honest caveat: not every verb ending in -ir belongs to this group — a few very common ones (<em>partir, sortir, dormir</em>) follow a different, irregular pattern with no -iss-, and they arrive later. Today's four are the reliable regular core."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Deciding on a flat",
      body:["A couple weighing two apartments — <b>tu</b>."],
      turns:[
        { who:"A", fr:"Alors, on choisit quel appartement ?", en:"So, which apartment are we choosing?", say:"Alors, on choisit quel appartement ?", key:"d46_d1" },
        { who:"B", fr:"Je réfléchis encore… Le studio est petit, mais moins cher.", en:"I'm still thinking… The studio's small, but cheaper.", say:"Je réfléchis encore… Le studio est petit, mais moins cher.", key:"d46_d2" },
        { who:"A", fr:"C'est vrai. On finit de visiter, et on choisit demain ?", en:"True. Shall we finish viewing, and choose tomorrow?", say:"C'est vrai. On finit de visiter, et on choisit demain ?", key:"d46_d3" },
        { who:"B", fr:"Bonne idée. Je réfléchis ce soir.", en:"Good idea. I'll think it over tonight.", say:"Bonne idée. Je réfléchis ce soir.", key:"d46_d4" }
      ],
      tip:"<b>On choisit</b>, <b>on finit</b>, <b>on réfléchit</b> — with <em>on</em> (the everyday ‘we’ from week 2) an -ir verb takes the same ending as <em>il/elle</em>: /-i/, silent final consonant. Note <b>moins cher</b> and <b>le studio</b>, both straight from week 6."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘We finish’ (nous):",
          opts:["nous finons","nous finissons","nous finisons","nous finissent"], answer:1,
          ok:"Right — nous finissons, with the plural -iss-.",
          no:"<b>Nous finissons</b> — regular -ir verbs add -iss- in the plural." },
        { prompt:"‘I finish’ and ‘he finishes’ — do they sound the same?",
          opts:["yes: both /fini/","no, totally different","only in writing","no, the s is heard"], answer:0,
          ok:"Right — je finis and il finit are both /fi.ni/; the endings are silent.",
          no:"<b>Yes</b> — /fi.ni/ for both; the singular endings are all silent." },
        { prompt:"Which of these is NOT a regular -ir verb like finir?",
          opts:["choisir","réussir","dormir","réfléchir"], answer:2,
          ok:"Right — dormir is the irregular kind, with no -iss-.",
          no:"<b>Dormir</b> — it's one of the irregular -ir verbs; the other three take -iss-." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Réussir — passing, not just succeeding",
      body:[
        "<b>Réussir</b> stretches further than English ‘succeed’. You <em>réussir un examen</em> (pass an exam), <em>réussir un plat</em> (nail a dish you cooked), or just <em>réussir</em> at something in general. The noun <b>la réussite</b> is success in that same broad sense.",
        "It surfaces constantly around one national fixation: <b>le bac</b> (le baccalauréat), the exam at the end of lycée. ‘Réussir son bac’ is a rite of passage the whole country talks about every June — useful cultural shorthand, even before you sit any exam yourself."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 46, done.",
      body:["You've doubled your verb toolkit. Tomorrow: which floor you live on, and how to get up there."],
      next:"Jour 47 — J'habite au troisième étage"}
  ]
};

const LESSON_47 = {
  day: 47, week: 7,
  title: "J'habite au troisième étage",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Which floor, and how you get there",
      body:[
        "The vertical version of last week's directions: which floor you live on, plus the stairs and the lift to reach it. It brings back the ordinals from week 4 — <em>premier, deuxième, troisième</em> — now counting floors.",
        "And one number trap that catches every visitor: the French <b>ground floor</b> isn't the first floor."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"étage, and the ordinal glide",
      body:["Three sounds for talking about floors:"],
      pairs:[
        { fr:"l'étage", ipa:"/le.taʒ/", en:"l' + é /e/, ending in -age /aʒ/", say:"l'étage", key:"d47_etage" },
        { fr:"le rez-de-chaussée", ipa:"/ʁe.də.ʃo.se/", en:"the z of rez is silent; -ée ends in a clean /e/", say:"le rez-de-chaussée", key:"d47_rezdechaussee" },
        { fr:"le troisième", ipa:"/lə tʁwa.zjɛm/", en:"the ordinal -ième = /jɛm/, and oi = /wa/", say:"le troisième", key:"d47_troisieme" }
      ],
      tip:"<b>Rez-de-chaussée</b> looks fierce but is tame: the z of <em>rez</em> is silent, and <em>chaussée</em> ends in the same clean /e/ as any -é. And the ordinal <b>-ième</b> /jɛm/ is exactly the ending from week 4's <em>cinquième</em>, <em>dix-huitième</em> — arrondissements then, floors now, identical machinery."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"Floors and how to reach them",
      items:[
        { fr:"le rez-de-chaussée", en:"the ground floor", reg:null, say:"le rez-de-chaussée", key:"d47_v_rezdechaussee" },
        { fr:"le premier étage", en:"the first floor (one up from the ground)", reg:null, say:"le premier étage", key:"d47_v_premieretage" },
        { fr:"l'étage", en:"the floor / storey", reg:null, say:"l'étage", key:"d47_v_etage" },
        { fr:"l'ascenseur", en:"the lift / elevator", reg:null, say:"l'ascenseur", key:"d47_v_ascenseur" },
        { fr:"l'escalier", en:"the stairs / staircase", reg:null, say:"l'escalier", key:"d47_v_escalier" },
        { fr:"un studio", en:"a studio flat", reg:null, say:"un studio", key:"d47_v_studio" },
        { fr:"un immeuble", en:"an apartment building", reg:null, say:"un immeuble", key:"d47_v_immeuble" },
        { fr:"J'habite au troisième étage.", en:"I live on the third floor.", reg:null, say:"J'habite au troisième étage.", key:"d47_v_jhabiteau" }
      ],
      tip:"<b>Au</b> + ordinal + <b>étage</b>: <em>au premier</em>, <em>au deuxième</em>, <em>au troisième étage</em> — the <em>au</em> is the <em>à + le</em> fusion from week 4, and the ordinals are week 4's too. The one true trap: the French <b>rez-de-chaussée</b> is the ground floor, so the <em>premier étage</em> is one flight up — what an American calls the ‘second floor’. Off-by-one, every time."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Finding the right door",
      body:["A visitor buzzing an apartment building — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Bonjour, j'ai rendez-vous avec Madame Leroy.", en:"Hello, I have an appointment with Madame Leroy.", say:"Bonjour, j'ai rendez-vous avec Madame Leroy.", key:"d47_d1" },
        { who:"B", fr:"Oui, c'est au quatrième étage. L'ascenseur est au fond.", en:"Yes, it's on the fourth floor. The lift is at the back.", say:"Oui, c'est au quatrième étage. L'ascenseur est au fond.", key:"d47_d2" },
        { who:"A", fr:"L'ascenseur est en panne, non ?", en:"The lift's out of order, isn't it?", say:"L'ascenseur est en panne, non ?", key:"d47_d3" },
        { who:"B", fr:"Ah oui, pardon ! Prenez l'escalier, à droite.", en:"Oh yes, sorry! Take the stairs, on the right.", say:"Ah oui, pardon ! Prenez l'escalier, à droite.", key:"d47_d4" }
      ],
      tip:"<b>En panne</b> = ‘broken down / out of order’ — a genuinely essential phrase for an old Paris building's lift. <b>Prenez l'escalier</b> reuses week 4's <em>prenez</em> command and <em>à droite</em> direction, now pointed at a staircase."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"In France, the floor at street level is the…",
          opts:["premier étage","rez-de-chaussée","deuxième étage","sous-sol"], answer:1,
          ok:"Right — the rez-de-chaussée; the premier étage is one flight up.",
          no:"<b>Le rez-de-chaussée</b> — street level. The premier étage is above it." },
        { prompt:"‘I live on the third floor’:",
          opts:["J'habite à le troisième étage","J'habite au troisième étage","J'habite le troisième étage","J'habite en troisième étage"], answer:1,
          ok:"Yes — au = à + le, and the ordinal troisième.",
          no:"<b>Au troisième étage</b> — à + le fuses to au, exactly as in week 4." },
        { prompt:"‘L'ascenseur est en panne’ means the lift is…",
          opts:["fast","free","out of order","on the top floor"], answer:2,
          ok:"Right — en panne = broken down / out of order.",
          no:"<b>Out of order</b> — en panne. Time for l'escalier." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"The étage that isn't there",
      body:[
        "The ground-floor counting difference is a genuine daily trap: a French <b>‘premier étage’</b> is one flight above the street, matching the British first floor but sitting where an American would say ‘second floor’. Lift buttons make it visible — you'll see <b>0</b> or <b>RC</b> (rez-de-chaussée) for street level, then 1, 2, 3 above.",
        "Older Paris buildings add texture: a grand <b>escalier</b> at the front, sometimes a narrower <em>escalier de service</em> at the back, and lifts that are tiny, ancient, or — as in today's dialogue — reliably <em>en panne</em>. Living <em>au sixième sans ascenseur</em> (sixth floor, no lift) is a rite of passage, and often a cheaper rent."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 47, done.",
      body:["You can place your home on the right floor of the right building. Tomorrow: stepping outside your door into the quartier."],
      next:"Jour 48 — Le quartier et les voisins"}
  ]
};

const LESSON_48 = {
  day: 48, week: 7,
  title: "Le quartier et les voisins",
  durationMin: 18,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Just outside your door",
      body:[
        "Step outside the flat and into the <b>quartier</b> — the neighborhood, and the people in it: the neighbors, and the very French figure of the <b>gardien</b> or <b>concierge</b> who watches over the building.",
        "<em>Quartier</em> is back from week 4, but there it was a map label; today it's where you actually live."
      ]},
    { type:"phonics",
      eyebrow:"Les sons",
      h:"Three neighbors, three nasals-and-glides",
      body:["The people of the building, and the sounds in their names:"],
      pairs:[
        { fr:"le voisin", ipa:"/lə vwa.zɛ̃/", en:"oi = /wa/, then the ‘in’ nasal /ɛ̃/", say:"le voisin", key:"d48_voisin" },
        { fr:"le gardien", ipa:"/lə ɡaʁ.djɛ̃/", en:"-ien = the glide-plus-nasal /jɛ̃/", say:"le gardien", key:"d48_gardien" },
        { fr:"la concierge", ipa:"/la kɔ̃.sjɛʁʒ/", en:"con- nasal /kɔ̃/, ending in a soft -ge /ʒ/", say:"la concierge", key:"d48_concierge" }
      ],
      tip:"<b>Voisin</b> stacks two week-1 sounds you own: /wa/ (as in <em>trois</em>) then the ‘in’ nasal /ɛ̃/ (as in <em>vin</em>, <em>vingt</em>). Its feminine <b>voisine</b> /vwa.zin/ un-nasalizes and sounds the n — the exact petit→petite mechanism from day 2, one more time."},
    { type:"vocab",
      eyebrow:"Le vocabulaire",
      h:"The neighborhood and its people",
      items:[
        { fr:"le voisin / la voisine", en:"the neighbor", reg:null, say:"le voisin", key:"d48_v_voisin" },
        { fr:"le gardien / la gardienne", en:"the building caretaker", reg:null, say:"le gardien", key:"d48_v_gardien" },
        { fr:"la concierge", en:"the concierge / building keeper", reg:null, say:"la concierge", key:"d48_v_concierge" },
        { fr:"le quartier", en:"the neighborhood", reg:null, say:"le quartier", key:"d48_v_quartier" },
        { fr:"l'immeuble", en:"the (apartment) building", reg:null, say:"l'immeuble", key:"d48_v_immeuble" },
        { fr:"la boîte aux lettres", en:"the mailbox", reg:null, say:"la boîte aux lettres", key:"d48_v_boiteauxlettres" },
        { fr:"le code", en:"the entry code (door code)", reg:null, say:"le code", key:"d48_v_code" },
        { fr:"Vous habitez ici ?", en:"Do you live here? (formal)", reg:"formal", say:"Vous habitez ici ?", key:"d48_v_voushabitezici" }
      ],
      tip:"<b>La boîte aux lettres</b> literally ‘the box for letters’ — note <em>aux</em> = à + les, the week-4 fusion once more. Most Paris buildings open with a keypad <b>code</b> (a <em>digicode</em>) rather than a key at the street door — ‘c'est quoi, le code ?’ is a question you'll ask often."},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Meeting a neighbor",
      body:["A new arrival and a neighbor in the entryway — <b>vous</b>."],
      turns:[
        { who:"A", fr:"Bonjour ! Vous êtes la nouvelle voisine ?", en:"Hello! Are you the new neighbor?", say:"Bonjour ! Vous êtes la nouvelle voisine ?", key:"d48_d1" },
        { who:"B", fr:"Oui, j'habite au deuxième maintenant. Enchantée !", en:"Yes, I live on the second floor now. Nice to meet you!", say:"Oui, j'habite au deuxième maintenant. Enchantée !", key:"d48_d2" },
        { who:"A", fr:"Bienvenue ! Pour le courrier, votre boîte aux lettres est là.", en:"Welcome! For post, your mailbox is there.", say:"Bienvenue ! Pour le courrier, votre boîte aux lettres est là.", key:"d48_d3" },
        { who:"B", fr:"Merci ! Et le code de la porte, c'est quoi ?", en:"Thanks! And the door code, what is it?", say:"Merci ! Et le code de la porte, c'est quoi ?", key:"d48_d4" },
        { who:"A", fr:"La gardienne vous le donne. Elle est très gentille.", en:"The caretaker will give it to you. She's very kind.", say:"La gardienne vous le donne. Elle est très gentille.", key:"d48_d5" }
      ],
      tip:"<b>Votre</b> boîte aux lettres — <em>votre</em> is the formal/plural ‘your’, the vous-companion to <em>ton/ta</em>; it doesn't change for gender (votre maison, votre code). <b>Enchantée</b> with an extra -e because speaker B is female — the silent-agreement rule from way back in week 1."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Quick check",
      questions:[
        { prompt:"‘La boîte aux lettres’ — aux comes from…",
          opts:["à + le","à + la","à + les","de + les"], answer:2,
          ok:"Right — à + les = aux, the week-4 fusion.",
          no:"<b>à + les = aux</b> — the same contraction as ‘aux toilettes’ in week 4." },
        { prompt:"The formal ‘your’ (with vous) is…",
          opts:["ton","ta","votre","tes"], answer:2,
          ok:"Yes — votre, and it doesn't change for gender.",
          no:"<b>Votre</b> — the vous form of ‘your’, invariable for gender." },
        { prompt:"‘La voisine’ vs ‘le voisin’ — the feminine…",
          opts:["sounds identical","sounds the final n","drops the s","adds a nasal"], answer:1,
          ok:"Right — voisine /vwazin/ sounds the n; voisin /vwazɛ̃/ is nasal.",
          no:"<b>Sounds the n</b> — the feminine -e un-nasalizes it, like petit→petite." }
      ]},
    { type:"culture",
      eyebrow:"En France",
      h:"Le gardien, la concierge — a fading institution",
      body:[
        "The <b>gardien(ne)</b> or <b>concierge</b> — who traditionally lived in a small flat (<em>la loge</em>) by the entrance, sorted the post, cleaned the common areas, and quietly knew everything about the building — is a real Parisian institution, though a shrinking one as buildings switch to intercoms, digicodes and outside cleaning firms.",
        "Where one still exists, a good relationship matters: a friendly <em>bonjour</em> every day, a card at the holidays. And the everyday etiquette of the <b>immeuble</b> is real — greeting neighbors in the stairwell, keeping noise down after about 22h. The <em>quartier</em>, from week 4's map, is where daily French life actually happens."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Station 48, done.",
      body:["You can describe your home, your building, and your neighborhood. Tomorrow we tie the whole week — and the whole A1 block — together."],
      next:"Jour 49 — Révision (week 7 review)"}
  ]
};

const LESSON_49 = {
  day: 49, week: 7,
  title: "Révision — la semaine 7",
  durationMin: 16,
  steps: [
    { type:"intro",
      eyebrow:"Aujourd'hui",
      h:"Consolidation — the whole home",
      body:[
        "Retrieval day, and the last of A1. One chained dialogue — showing a friend a new flat, top to bottom — six questions on the week's pressure points, then your due flashcards, now spanning all seven weeks.",
        "The week's real theme: possessives, rooms, furniture and floors all lean on machinery you already built — gender agreement, the au/du fusions, the ordinals. New words, familiar rules."
      ]},
    { type:"dialogue",
      eyebrow:"L'écoute",
      h:"Showing the new flat",
      body:["A friend giving a full tour of a new apartment — <b>tu</b>. Everything from the week, in one exchange."],
      turns:[
        { who:"A", fr:"Alors, voici mon appartement ! J'habite au troisième étage.", en:"So, here's my apartment! I live on the third floor.", say:"Alors, voici mon appartement ! J'habite au troisième étage.", key:"d49_d1" },
        { who:"B", fr:"Il est beau ! Ta chambre est où ?", en:"It's lovely! Where's your bedroom?", say:"Il est beau ! Ta chambre est où ?", key:"d49_d2" },
        { who:"A", fr:"Au fond du couloir, à côté de la salle de bain.", en:"At the end of the corridor, next to the bathroom.", say:"Au fond du couloir, à côté de la salle de bain.", key:"d49_d3" },
        { who:"B", fr:"Et ce canapé, il est à toi ?", en:"And this sofa, is it yours?", say:"Et ce canapé, il est à toi ?", key:"d49_d4" },
        { who:"A", fr:"Oui ! Bon, je finis de ranger, et on prend un café ?", en:"Yes! Right, I'll finish tidying up, and we'll have a coffee?", say:"Oui ! Bon, je finis de ranger, et on prend un café ?", key:"d49_d5" },
        { who:"B", fr:"Avec plaisir. Ton quartier est vraiment sympa !", en:"With pleasure. Your neighborhood is really nice!", say:"Avec plaisir. Ton quartier est vraiment sympa !", key:"d49_d6" }
      ],
      tip:"Every thread fires: <em>mon appartement</em> / <em>ta chambre</em> / <em>ton quartier</em> (possessives), <em>au troisième étage</em> (floors), <em>au fond du couloir</em> / <em>à côté de la salle de bain</em> (rooms + prepositions), <em>il est à toi</em> (ownership), <em>je finis de ranger</em> (an -ir verb). <b>Sympa</b> = ‘nice/friendly’, a very common casual word — informal, so never in a vous context."},
    { type:"recall",
      eyebrow:"On vérifie",
      h:"Semaine 7 — the six that matter",
      questions:[
        { prompt:"‘My address’ — adresse is feminine, vowel-initial:",
          opts:["ma adresse","mon adresse","mes adresse","m'adresse"], answer:1,
          ok:"Right — mon, swapped in before the vowel.",
          no:"<b>Mon adresse</b> — feminine + vowel takes mon, like cet/mon amie." },
        { prompt:"‘His house’ / ‘her house’:",
          opts:["son maison / sa maison","sa maison for both","sa maison / son maison","different words entirely"], answer:1,
          ok:"Right — sa maison covers both; the noun's gender decides.",
          no:"<b>Sa maison</b> for both — French marks the object's gender, not the owner's." },
        { prompt:"‘We finish’ (nous, finir):",
          opts:["nous finons","nous finissons","nous finent","nous finissez"], answer:1,
          ok:"Yes — nous finissons, the -iss- plural.",
          no:"<b>Nous finissons</b> — regular -ir verbs grow -iss- in the plural (finissez is the vous form)." },
        { prompt:"The French floor at street level:",
          opts:["le premier étage","le rez-de-chaussée","le sous-sol","le deuxième étage"], answer:1,
          ok:"Right — the rez-de-chaussée; premier étage is one up.",
          no:"<b>Le rez-de-chaussée</b> — street level, below the premier étage." },
        { prompt:"For sleeping, the room is la…",
          opts:["cuisine","salle de bain","chambre","entrée"], answer:2,
          ok:"Right — la chambre, the bedroom.",
          no:"<b>La chambre</b> — the bedroom; la pièce is just ‘a room’." },
        { prompt:"‘Au troisième étage’ — au is…",
          opts:["à + la","à + le","de + le","à + les"], answer:1,
          ok:"Right — à + le = au, the week-4 fusion.",
          no:"<b>à + le = au</b> — the same contraction as ‘au musée’ in week 4." }
      ]},
    { type:"srs",
      eyebrow:"Répétition espacée",
      h:"Your due cards",
      body:["Seven weeks of vocabulary now feed this queue — greetings, identity, the café, the streets, the clock, shopping, and this week's home and neighborhood. Grade honestly; the misses come back tomorrow, which is the system doing its job."]},
    { type:"culture",
      eyebrow:"Le bilan",
      h:"Seven weeks: the end of A1",
      body:[
        "This is the A1 finish line. You can greet and introduce yourself, order and shop, get around and give directions, tell the time, describe your day, describe and buy things, and now describe where you live — your home, your building, your quartier — with correct possessives and a second whole verb group. That's a genuine, functioning A1: the survival core of daily life in French.",
        "The honest boundary: everything so far is the <em>present</em>. You can describe your life as it is right now, but you can't yet say what you <em>did</em> yesterday or what you <em>will</em> do tomorrow. That's exactly where A2 begins — and week 8 opens it with the <b>passé composé</b>, the past tense that lets you finally tell someone what happened."
      ]},
    { type:"wrap",
      eyebrow:"Terminus",
      h:"Semaine 7 — complète. Fin du niveau A1.",
      body:["Forty-nine stations — seven weeks, the whole of A1 behind you. Next week the line crosses into A2: the past tense, and the ability to tell your story."],
      next:"Semaine 8, Jour 50 — Le passé composé : hier, j'ai…"}
  ]
};

export const WEEK7 = [LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47, LESSON_48, LESSON_49];
