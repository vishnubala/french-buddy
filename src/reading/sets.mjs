/* reading/sets.mjs — L'Entraînement · Compréhension écrite (A1–A2, format TEF).

   HONEST SCOPE (CLAUDE.md §7): a leveled library of short A1–A2 reading passages
   in the STYLE of a TEF compréhension-écrite task. NOT "TEF prep" — the real TEF
   spans A1–C2. Nothing here claims to ready anyone for the actual exam; the UI
   keeps the "niveau A1–A2, format TEF" label and the explicit
   "Ce n'est pas une préparation à l'examen TEF" disclaimer.

   STRUCTURE: two levels (A1, A2), each a small number of THEMED sets, each set a
   group of passages. A reading item = a short French passage + 2–4 MC
   comprehension questions. It renders through the SAME primitives as the rest of
   the app (§2 one-engine): the passage renders like an intro/body block, and the
   questions reuse renderMCQuestion WITH shuffle:true — the same path the quiz
   uses. NO new renderer, NO new question type. Reading is NOT skill-tagged.

   LEVELING (§8.4 accuracy — a subtly-wrong or mis-leveled passage teaches wrong
   French confidently):
   - A1 sets: PRESENT tense only (+ the A1 imperative for signs/notices, `il y a`,
     and `aller`-as-motion like "je vais à la plage"). Very short (~40–70 words).
     Concrete everyday text types: notes, signs, menus, ads, messages, schedules.
   - A2 sets: present + passé composé + futur proche + imparfait (description).
     Longer (~70–110 words). Richer text types: emails, articles, reviews, bios,
     itineraries. Two A2 passages (the original note & email) are intentionally at
     the short end — see the fold-in note below.

   FOLD-IN OF THE ORIGINAL 5-PASSAGE SET: the first reading module's passages are
   reused verbatim, each placed by its ACTUAL grammar level rather than kept in a
   single mixed bag (which would leak A2 grammar into A1):
     - present-only  → A1:  r_menu_jour, r_bio_karim (A1-1); r_annonce_studio (A1-2)
     - futur proche  → A2:  r_note_courses (uses "je vais prendre" / "on va dîner")
     - passé composé → A2:  r_email_rdv
   None are discarded; only their grouping is corrected to keep A1 pure.

   ACCURACY DEBT: every passage here is Claude-drafted and NOT native-reviewed —
   folds into the SAME §8.2 review gate as the lessons, the quiz banks, and the
   first reading set. Neural French reads wrong French fluently, so this needs a
   human listening/reading pass before any real learner sees it.

   Question shape is identical to lesson `recall` questions:
     { prompt, opts:[…], answer:<idx>, ok, no }
   Prompts + options are in French (that's the comprehension test); the ok/no
   feedback stays in the app's English teaching voice, as in the lessons. */

/* ------------------------------------------------------------------ A1 — set 1 */
const A1_QUOTIDIEN = {
  id: "a1_quotidien",
  title: "Vie quotidienne",
  theme: "Notes, messages et petits textes du quotidien.",
  passages: [
    {
      id: "r_menu_jour",
      type: "Un menu",
      title: "Le menu du jour",
      text: [
        "<b>Café de la Gare — Menu du jour · 14&nbsp;€</b>",
        "Entrée&nbsp;: soupe de légumes <i>ou</i> salade verte",
        "Plat&nbsp;: poulet avec des frites <i>ou</i> poisson avec du riz",
        "Dessert&nbsp;: tarte aux pommes <i>ou</i> glace au chocolat",
        "Un café ou un thé est compris. Le menu est servi de midi à quatorze heures.",
      ],
      questions: [
        { prompt: "Combien coûte le menu du jour&nbsp;?",
          opts: ["12 euros", "14 euros", "40 euros"], answer: 1,
          ok: "Yes — the menu is <b>14&nbsp;€</b>, drink included.",
          no: "The price is <b>14&nbsp;€</b> — it's written right after the café's name." },
        { prompt: "Comme plat, qu'est-ce qu'on peut choisir&nbsp;?",
          opts: ["Une soupe ou une salade", "Du poulet ou du poisson", "Une tarte ou une glace"], answer: 1,
          ok: "Correct — the <b>plat</b> is <b>poulet</b> or <b>poisson</b>. Soup/salad are the starter, tart/ice cream the dessert.",
          no: "Soup and salad are the <i>entrée</i>; tart and ice cream are the <i>dessert</i>. The <b>plat</b> is poulet or poisson." },
        { prompt: "Quand peut-on prendre ce menu&nbsp;?",
          opts: ["Le matin", "Entre midi et 14 heures", "Le soir"], answer: 1,
          ok: "Right — <b>« de midi à quatorze heures »</b> means from noon to 2 p.m.",
          no: "It's served <b>de midi à quatorze heures</b> — noon to 2 p.m., so lunchtime, not the morning or evening." },
      ],
    },
    {
      id: "r_bio_karim",
      type: "Une présentation",
      title: "Karim se présente",
      text: [
        "Je m'appelle Karim et j'habite à Marseille. J'ai vingt-cinq ans.",
        "Je suis cuisinier dans un petit restaurant italien. Je travaille du lundi au vendredi. Le samedi et le dimanche, je ne travaille pas.",
        "Le week-end, j'aime aller à la plage avec mes amis. J'adore mon métier parce que j'aime beaucoup cuisiner.",
      ],
      questions: [
        { prompt: "Quel âge a Karim&nbsp;?",
          opts: ["15 ans", "25 ans", "35 ans"], answer: 1,
          ok: "Yes — <b>« J'ai vingt-cinq ans »</b> = 25 years old.",
          no: "<b>Vingt-cinq</b> is 25. So Karim is 25 years old." },
        { prompt: "Quel est le métier de Karim&nbsp;?",
          opts: ["Il est serveur", "Il est cuisinier", "Il est étudiant"], answer: 1,
          ok: "Correct — <b>« Je suis cuisinier »</b>: he's a cook, in an Italian restaurant.",
          no: "He says <b>Je suis cuisinier</b> — a cook. He works <i>in</i> a restaurant, but as the cook." },
        { prompt: "Quels jours est-ce qu'il ne travaille pas&nbsp;?",
          opts: ["Le lundi et le mardi", "Le samedi et le dimanche", "Le mercredi"], answer: 1,
          ok: "Right — he works Monday to Friday, so he's off <b>le samedi et le dimanche</b> (the weekend).",
          no: "He works <i>du lundi au vendredi</i> (Mon–Fri). His days off are <b>le samedi et le dimanche</b>." },
      ],
    },
    {
      id: "r_sms_cinema",
      type: "Un message",
      title: "Un SMS entre amies",
      text: [
        "Coucou Léa&nbsp;! Tu es libre ce soir&nbsp;? Il y a un nouveau film au cinéma près de chez moi.",
        "Le film commence à vingt heures. On peut manger une pizza avant, si tu veux. C'est moi qui invite&nbsp;!",
        "Réponds-moi vite. À ce soir, j'espère&nbsp;! Bisous, Emma",
      ],
      questions: [
        { prompt: "Qu'est-ce qu'Emma propose à Léa&nbsp;?",
          opts: ["Aller au cinéma", "Aller à la plage", "Travailler ensemble"], answer: 0,
          ok: "Yes — <b>« Il y a un nouveau film au cinéma »</b>: she's inviting Léa to the cinema.",
          no: "She mentions a new film at the cinema — <b>aller au cinéma</b> is the plan." },
        { prompt: "À quelle heure commence le film&nbsp;?",
          opts: ["À huit heures du matin", "À vingt heures", "À midi"], answer: 1,
          ok: "Correct — <b>« à vingt heures »</b> is 8 p.m. on the 24-hour clock.",
          no: "<b>Vingt heures</b> = 20:00 = 8 p.m., in the evening — not eight in the morning." },
        { prompt: "Qui va payer&nbsp;?",
          opts: ["Léa", "Emma", "Personne"], answer: 1,
          ok: "Right — <b>« C'est moi qui invite »</b>, and Emma is the one writing.",
          no: "Emma writes <b>« C'est moi qui invite »</b> — \"it's my treat\". So Emma pays." },
      ],
    },
    {
      id: "r_horaires_biblio",
      type: "Des horaires",
      title: "Les horaires de la bibliothèque",
      text: [
        "<b>Bibliothèque municipale — Horaires</b>",
        "Du mardi au vendredi&nbsp;: de 10h à 18h.",
        "Le samedi&nbsp;: de 10h à 12h30.",
        "Fermé le dimanche et le lundi.",
        "La carte est gratuite pour les étudiants. Le silence est demandé dans les salles. Merci&nbsp;!",
      ],
      questions: [
        { prompt: "Quels jours la bibliothèque est-elle fermée&nbsp;?",
          opts: ["Le dimanche et le lundi", "Le samedi", "Le mardi"], answer: 0,
          ok: "Yes — <b>« Fermé le dimanche et le lundi »</b>.",
          no: "The sign says <b>Fermé le dimanche et le lundi</b>. Saturday it's open in the morning." },
        { prompt: "Combien coûte la carte pour les étudiants&nbsp;?",
          opts: ["Elle est gratuite", "10 euros", "Elle coûte cher"], answer: 0,
          ok: "Correct — <b>« La carte est gratuite pour les étudiants »</b>.",
          no: "For students the card is <b>gratuite</b> — free of charge." },
        { prompt: "Le samedi, la bibliothèque ferme à quelle heure&nbsp;?",
          opts: ["À 18h", "À 12h30", "À 10h"], answer: 1,
          ok: "Right — Saturday hours are <b>« de 10h à 12h30 »</b>, so it closes at 12h30.",
          no: "10h is when it opens on Saturday; it closes at <b>12h30</b>. 18h is the weekday closing time." },
      ],
    },
    {
      id: "r_panneau_parc",
      type: "Un panneau",
      title: "Les règles du parc",
      text: [
        "<b>Parc de la Tête d'Or — Règles du parc</b>",
        "Le parc est ouvert tous les jours de 7h à 21h.",
        "Les chiens sont acceptés, mais ils doivent rester en laisse. Il est interdit de marcher sur les fleurs.",
        "Merci de mettre vos déchets dans les poubelles. Bonne promenade&nbsp;!",
      ],
      questions: [
        { prompt: "À quelle heure le parc ferme-t-il&nbsp;?",
          opts: ["À 7h", "À 21h", "Il ne ferme jamais"], answer: 1,
          ok: "Yes — <b>« ouvert tous les jours de 7h à 21h »</b>: it closes at 21h.",
          no: "7h is the opening time; the park closes at <b>21h</b> (9 p.m.)." },
        { prompt: "Est-ce que les chiens sont acceptés&nbsp;?",
          opts: ["Oui, mais en laisse", "Non, jamais", "Oui, sans laisse"], answer: 0,
          ok: "Correct — <b>« Les chiens sont acceptés, mais ils doivent rester en laisse »</b>.",
          no: "Dogs are allowed, but <b>en laisse</b> — on a lead. Not freely, and not forbidden." },
        { prompt: "Qu'est-ce qui est interdit dans le parc&nbsp;?",
          opts: ["Marcher sur les fleurs", "Promener son chien", "Manger un pique-nique"], answer: 0,
          ok: "Right — <b>« Il est interdit de marcher sur les fleurs »</b>.",
          no: "Walking dogs is allowed (on a lead). What's forbidden is <b>marcher sur les fleurs</b>." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A1 — set 2 */
const A1_VILLE = {
  id: "a1_ville",
  title: "En ville & services",
  theme: "Annonces, panneaux et informations pratiques.",
  passages: [
    {
      id: "r_annonce_studio",
      type: "Une annonce",
      title: "À louer",
      text: [
        "À louer&nbsp;: joli studio à Lyon, tout près du métro.",
        "Le studio fait 25&nbsp;m². Il y a une petite cuisine, une salle de bains et un grand lit. L'immeuble est calme et il y a un parc juste à côté.",
        "Le loyer est de 500 euros par mois. C'est idéal pour un étudiant. Pour visiter, appelez le 06 12 34 56 78.",
      ],
      questions: [
        { prompt: "Où se trouve le studio&nbsp;?",
          opts: ["À Lyon, près du métro", "À Paris, près d'un parc", "À Lyon, loin de tout"], answer: 0,
          ok: "Yes — <b>« à Lyon, tout près du métro »</b>. There's a park nearby too, but the city is Lyon.",
          no: "The ad says <b>à Lyon, tout près du métro</b>. (There is a park next door, but the city is Lyon, not Paris.)" },
        { prompt: "Combien coûte le loyer&nbsp;?",
          opts: ["25 euros par mois", "500 euros par mois", "600 euros par mois"], answer: 1,
          ok: "Correct — <b>500 euros par mois</b>. The 25 is the size (25&nbsp;m²), not the price.",
          no: "<b>500 euros par mois</b> is the rent. The <b>25</b> is the size in square metres, not the price." },
        { prompt: "Pour qui ce studio est-il idéal&nbsp;?",
          opts: ["Pour une grande famille", "Pour un étudiant", "Pour un couple avec un chien"], answer: 1,
          ok: "Right — <b>« idéal pour un étudiant »</b>. A studio with one bed suits one person.",
          no: "The ad says <b>idéal pour un étudiant</b> — one room, one bed, so one person." },
      ],
    },
    {
      id: "r_annonce_velo",
      type: "Une annonce",
      title: "À vendre",
      text: [
        "À vendre&nbsp;: vélo de ville bleu, en très bon état.",
        "Il est parfait pour aller au travail. Il a un panier devant et une lumière. Je vends mon vélo parce que je déménage à Paris.",
        "Prix&nbsp;: 90 euros. Je suis disponible le week-end. Contactez-moi par email.",
      ],
      questions: [
        { prompt: "Qu'est-ce que la personne vend&nbsp;?",
          opts: ["Un vélo", "Une voiture", "Un panier"], answer: 0,
          ok: "Yes — <b>« vélo de ville bleu »</b>. The basket is just a feature of the bike.",
          no: "It's a <b>vélo</b> (bike). The basket (<i>panier</i>) is a part of it, not the item for sale." },
        { prompt: "Pourquoi vend-elle son vélo&nbsp;?",
          opts: ["Parce qu'il est cassé", "Parce qu'elle déménage à Paris", "Parce qu'il est trop cher"], answer: 1,
          ok: "Correct — <b>« parce que je déménage à Paris »</b>.",
          no: "The reason given is the move — <b>je déménage à Paris</b>. The bike is <i>en très bon état</i>." },
        { prompt: "Combien coûte le vélo&nbsp;?",
          opts: ["19 euros", "90 euros", "900 euros"], answer: 1,
          ok: "Right — <b>« Prix : 90 euros »</b>.",
          no: "The price is <b>90 euros</b>." },
      ],
    },
    {
      id: "r_pharmacie",
      type: "Un panneau",
      title: "Sur la porte de la pharmacie",
      text: [
        "<b>Pharmacie du Centre</b>",
        "La pharmacie est fermée aujourd'hui, dimanche. Pour une urgence, la pharmacie de garde est la Pharmacie Pasteur, 12 rue Victor Hugo.",
        "Elle est ouverte jour et nuit. Le numéro de téléphone est en bas de la porte. Prenez soin de vous&nbsp;!",
      ],
      questions: [
        { prompt: "Pourquoi la Pharmacie du Centre est-elle fermée&nbsp;?",
          opts: ["C'est dimanche", "Elle déménage", "Il est trop tard"], answer: 0,
          ok: "Yes — <b>« fermée aujourd'hui, dimanche »</b>: it's Sunday.",
          no: "The note says it's closed because it's <b>dimanche</b> (Sunday)." },
        { prompt: "Où aller en cas d'urgence&nbsp;?",
          opts: ["À la Pharmacie Pasteur", "À la Pharmacie du Centre", "Chez le médecin"], answer: 0,
          ok: "Correct — the <i>pharmacie de garde</i> is the <b>Pharmacie Pasteur</b>, rue Victor Hugo.",
          no: "For an emergency, go to the on-duty pharmacy: the <b>Pharmacie Pasteur</b>. The Pharmacie du Centre is the closed one." },
        { prompt: "Quand la pharmacie de garde est-elle ouverte&nbsp;?",
          opts: ["Seulement le matin", "Jour et nuit", "Seulement le lundi"], answer: 1,
          ok: "Right — <b>« Elle est ouverte jour et nuit »</b>.",
          no: "The on-duty pharmacy is open <b>jour et nuit</b> — day and night." },
      ],
    },
    {
      id: "r_objets_trouves",
      type: "Un panneau",
      title: "Objets trouvés",
      text: [
        "Vous cherchez un objet perdu&nbsp;? Un téléphone noir est au bureau d'accueil.",
        "Le bureau est près de la grande porte, à gauche. Il est ouvert de 9h à 17h.",
        "Pour récupérer votre téléphone, apportez une pièce d'identité. Adressez-vous à la personne à l'accueil.",
      ],
      questions: [
        { prompt: "Quel objet est au bureau d'accueil&nbsp;?",
          opts: ["Un téléphone noir", "Un sac rouge", "Des clés"], answer: 0,
          ok: "Yes — <b>« Un téléphone noir est au bureau d'accueil »</b>.",
          no: "The item waiting at the desk is a <b>téléphone noir</b> (a black phone)." },
        { prompt: "Où se trouve le bureau d'accueil&nbsp;?",
          opts: ["Près de la grande porte, à gauche", "Au premier étage", "Dans le parc"], answer: 0,
          ok: "Correct — <b>« près de la grande porte, à gauche »</b>.",
          no: "It's <b>près de la grande porte, à gauche</b> — near the big door, on the left." },
        { prompt: "Que faut-il apporter pour récupérer l'objet&nbsp;?",
          opts: ["De l'argent", "Une pièce d'identité", "Un ami"], answer: 1,
          ok: "Right — <b>« apportez une pièce d'identité »</b> (an ID).",
          no: "You need to bring <b>une pièce d'identité</b> — a form of ID." },
      ],
    },
    {
      id: "r_metro_avis",
      type: "Un avis",
      title: "Avis aux voyageurs",
      text: [
        "<b>Avis aux voyageurs</b>",
        "La station Bellecour est fermée pour travaux jusqu'au 15 mars. Pour aller au centre-ville, prenez la ligne A jusqu'à la station Perrache.",
        "Un bus de remplacement passe toutes les dix minutes. Nous sommes désolés pour la gêne. Merci de votre patience.",
      ],
      questions: [
        { prompt: "Pourquoi la station Bellecour est-elle fermée&nbsp;?",
          opts: ["Pour des travaux", "Pour une fête", "Parce que c'est dimanche"], answer: 0,
          ok: "Yes — <b>« fermée pour travaux »</b> (closed for construction work).",
          no: "It's closed <b>pour travaux</b> — for works — until 15 March." },
        { prompt: "Comment aller au centre-ville&nbsp;?",
          opts: ["En taxi", "Prendre la ligne A jusqu'à Perrache", "À pied seulement"], answer: 1,
          ok: "Correct — <b>« prenez la ligne A jusqu'à la station Perrache »</b>.",
          no: "The notice says take <b>la ligne A jusqu'à Perrache</b>." },
        { prompt: "Le bus de remplacement passe tous les combien&nbsp;?",
          opts: ["Toutes les heures", "Toutes les dix minutes", "Une fois par jour"], answer: 1,
          ok: "Right — <b>« toutes les dix minutes »</b>.",
          no: "The replacement bus comes <b>toutes les dix minutes</b> — every ten minutes." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A2 — set 1 */
const A2_MESSAGES = {
  id: "a2_messages",
  title: "Messages & projets",
  theme: "Mots, e-mails et souvenirs — plusieurs temps.",
  passages: [
    {
      id: "r_note_courses",
      type: "Un mot",
      title: "Un mot sur la table",
      text: [
        "Salut Julie,",
        "Je suis au supermarché. Il n'y a plus de lait ni de pain à la maison, alors j'achète tout. Je vais aussi prendre des œufs pour ce soir.",
        "Je rentre vers six heures. Ce soir, on va dîner chez Marc à huit heures. Est-ce que tu peux préparer le dessert&nbsp;?",
        "Bises, Thomas",
      ],
      questions: [
        { prompt: "Où est Thomas quand il écrit ce mot&nbsp;?",
          opts: ["Chez Marc", "Au supermarché", "À la maison"], answer: 1,
          ok: "Yes — <b>« Je suis au supermarché »</b> says exactly where he is.",
          no: "Look again: <b>« Je suis au supermarché »</b> — that's where he is right now." },
        { prompt: "Qu'est-ce que Julie doit préparer&nbsp;?",
          opts: ["Le dessert", "Le pain", "Les œufs"], answer: 0,
          ok: "Right — <b>« tu peux préparer le dessert&nbsp;? »</b> is the one thing he asks Julie to do.",
          no: "He buys the eggs and bread himself; he asks Julie for <b>le dessert</b>." },
        { prompt: "À quelle heure vont-ils dîner chez Marc&nbsp;?",
          opts: ["À six heures", "À huit heures", "À midi"], answer: 1,
          ok: "Correct — dinner is <b>« à huit heures »</b>. Six o'clock is just when Thomas gets home.",
          no: "Six o'clock is when he comes home. Dinner at Marc's is <b>à huit heures</b> (8 p.m.)." },
      ],
    },
    {
      id: "r_email_rdv",
      type: "Un email",
      title: "Un email pour annuler un rendez-vous",
      text: [
        "Bonjour Madame Lefèvre,",
        "Je vous écris pour annuler mon rendez-vous de jeudi. J'ai attrapé un rhume et je suis très fatiguée. Le médecin m'a dit de rester à la maison toute la semaine.",
        "Est-ce qu'on peut trouver une autre date&nbsp;? Je suis libre lundi prochain ou mardi matin.",
        "Merci beaucoup et à bientôt.",
        "Cordialement, Claire Dubois",
      ],
      questions: [
        { prompt: "Pourquoi Claire écrit-elle cet email&nbsp;?",
          opts: ["Pour annuler son rendez-vous", "Pour dire bonjour", "Pour prendre des vacances"], answer: 0,
          ok: "Yes — the first line says it: <b>« pour annuler mon rendez-vous de jeudi »</b>.",
          no: "She states her reason straight away: <b>pour annuler mon rendez-vous</b> — to cancel her appointment." },
        { prompt: "Pourquoi ne peut-elle pas venir jeudi&nbsp;?",
          opts: ["Elle est en voyage", "Elle est malade", "Elle travaille"], answer: 1,
          ok: "Correct — <b>« J'ai attrapé un rhume »</b> and the doctor told her to stay home: she's ill.",
          no: "She caught a cold — <b>« J'ai attrapé un rhume »</b> — and the doctor told her to rest. She's malade." },
        { prompt: "Quand est-elle libre pour un nouveau rendez-vous&nbsp;?",
          opts: ["Jeudi après-midi", "Lundi prochain ou mardi matin", "Ce week-end"], answer: 1,
          ok: "Right — she offers <b>« lundi prochain ou mardi matin »</b>.",
          no: "She proposes <b>lundi prochain ou mardi matin</b>. Thursday is the day she's cancelling." },
      ],
    },
    {
      id: "r_email_weekend",
      type: "Un email",
      title: "Un week-end à la montagne",
      text: [
        "Salut Nicolas,",
        "Merci pour ton message&nbsp;! Ce week-end, je suis allé à la montagne avec ma famille. Il faisait très beau et il n'y avait pas beaucoup de monde.",
        "Samedi, nous avons fait une longue randonnée et nous avons pique-niqué au bord d'un lac. Le soir, j'étais fatigué mais très content.",
        "Dimanche, il a plu, alors nous sommes restés à l'hôtel et nous avons joué aux cartes. C'était un week-end parfait. Et toi, qu'est-ce que tu as fait&nbsp;?",
        "À bientôt, Julien",
      ],
      questions: [
        { prompt: "Où Julien est-il allé ce week-end&nbsp;?",
          opts: ["À la mer", "À la montagne", "À Paris"], answer: 1,
          ok: "Yes — <b>« je suis allé à la montagne »</b>.",
          no: "He went <b>à la montagne</b> (to the mountains) with his family." },
        { prompt: "Qu'est-ce qu'ils ont fait samedi&nbsp;?",
          opts: ["Une randonnée et un pique-nique", "Ils ont visité un musée", "Ils ont travaillé"], answer: 0,
          ok: "Correct — <b>« nous avons fait une longue randonnée et nous avons pique-niqué »</b>.",
          no: "Saturday they did <b>une randonnée</b> and had a picnic by a lake. The cards were on Sunday." },
        { prompt: "Pourquoi sont-ils restés à l'hôtel dimanche&nbsp;?",
          opts: ["Parce qu'il a plu", "Parce qu'ils étaient malades", "Parce que c'était fermé"], answer: 0,
          ok: "Right — <b>« Dimanche, il a plu, alors nous sommes restés à l'hôtel »</b>.",
          no: "It rained on Sunday — <b>il a plu</b> — so they stayed in and played cards." },
      ],
    },
    {
      id: "r_message_espagne",
      type: "Un message",
      title: "Des vacances en Espagne",
      text: [
        "Coucou tout le monde&nbsp;!",
        "Pour les vacances d'été, on va enfin partir en Espagne&nbsp;! Voici le programme. Nous allons prendre le train jeudi matin, très tôt. Le voyage va durer environ six heures.",
        "À Barcelone, nous allons dormir dans un petit hôtel près de la plage. Le premier jour, on va visiter la vieille ville et le soir, on va manger des tapas.",
        "Je vais réserver les billets ce week-end. Si vous avez des questions, appelez-moi&nbsp;! Bises, Sofia",
      ],
      questions: [
        { prompt: "Où le groupe va-t-il partir&nbsp;?",
          opts: ["En Italie", "En Espagne", "En France"], answer: 1,
          ok: "Yes — <b>« on va enfin partir en Espagne »</b>, to Barcelona.",
          no: "They're going <b>en Espagne</b> (to Spain) — the city is Barcelona." },
        { prompt: "Comment vont-ils voyager&nbsp;?",
          opts: ["En avion", "En train", "En voiture"], answer: 1,
          ok: "Correct — <b>« Nous allons prendre le train jeudi matin »</b>.",
          no: "They're taking the <b>train</b> on Thursday morning." },
        { prompt: "Que va faire Sofia ce week-end&nbsp;?",
          opts: ["Réserver les billets", "Visiter la vieille ville", "Manger des tapas"], answer: 0,
          ok: "Right — <b>« Je vais réserver les billets ce week-end »</b>.",
          no: "This weekend Sofia will <b>réserver les billets</b> (book the tickets). The sightseeing and tapas happen during the trip." },
      ],
    },
    {
      id: "r_souvenir_enfance",
      type: "Un souvenir",
      title: "Chez ma grand-mère",
      text: [
        "Quand j'étais petite, j'habitais dans un petit village à la campagne. Ma grand-mère avait une grande maison avec un jardin magnifique.",
        "Chaque été, je passais les vacances chez elle. Le matin, nous allions au marché ensemble et l'après-midi, je jouais avec les chats.",
        "Il n'y avait pas de télévision, mais je ne m'ennuyais jamais. Le soir, ma grand-mère me racontait des histoires. Ces vacances étaient les plus belles de mon enfance.",
      ],
      questions: [
        { prompt: "Où habitait la narratrice quand elle était petite&nbsp;?",
          opts: ["Dans une grande ville", "Dans un village à la campagne", "Au bord de la mer"], answer: 1,
          ok: "Yes — <b>« j'habitais dans un petit village à la campagne »</b>.",
          no: "As a child she lived <b>dans un petit village à la campagne</b> — a village in the countryside." },
        { prompt: "Que faisaient-elles le matin&nbsp;?",
          opts: ["Elles allaient au marché", "Elles regardaient la télévision", "Elles travaillaient"], answer: 0,
          ok: "Correct — <b>« Le matin, nous allions au marché ensemble »</b>.",
          no: "There was no TV — <b>« Il n'y avait pas de télévision »</b>. In the morning they went to the market." },
        { prompt: "Que faisait la grand-mère le soir&nbsp;?",
          opts: ["Elle cuisinait", "Elle racontait des histoires", "Elle dormait"], answer: 1,
          ok: "Right — <b>« le soir, ma grand-mère me racontait des histoires »</b>.",
          no: "In the evening the grandmother <b>racontait des histoires</b> — told stories." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A2 — set 2 */
const A2_DECOUVERTES = {
  id: "a2_decouvertes",
  title: "Découvertes & avis",
  theme: "Avis, articles et portraits — lire pour s'informer.",
  passages: [
    {
      id: "r_avis_resto",
      type: "Un avis",
      title: "Un avis sur un restaurant",
      text: [
        "Hier soir, nous avons dîné au restaurant « Chez Mario » et nous avons passé un très bon moment. Le serveur était gentil et le service était rapide.",
        "J'ai pris des pâtes aux fruits de mer et mon mari a choisi une pizza. Tout était délicieux&nbsp;! Les prix sont raisonnables et le restaurant est bien situé, en plein centre.",
        "Le seul problème, c'est qu'il y avait beaucoup de bruit. Nous allons certainement revenir. Je recommande ce restaurant à tout le monde&nbsp;!",
      ],
      questions: [
        { prompt: "Qu'est-ce que la personne a mangé&nbsp;?",
          opts: ["Une pizza", "Des pâtes aux fruits de mer", "Une salade"], answer: 1,
          ok: "Yes — <b>« J'ai pris des pâtes aux fruits de mer »</b>. The pizza was her husband's choice.",
          no: "Careful: <b>her husband</b> had the pizza. She took <b>des pâtes aux fruits de mer</b>." },
        { prompt: "Quel est le seul problème du restaurant&nbsp;?",
          opts: ["Le prix", "Le bruit", "Le service"], answer: 1,
          ok: "Correct — <b>« Le seul problème, c'est qu'il y avait beaucoup de bruit »</b>.",
          no: "Prices are <i>raisonnables</i> and the service was <i>rapide</i>. The one downside is the <b>bruit</b> (noise)." },
        { prompt: "Est-ce qu'elle recommande le restaurant&nbsp;?",
          opts: ["Oui, elle le recommande", "Non, jamais", "Elle ne sait pas"], answer: 0,
          ok: "Right — <b>« Je recommande ce restaurant à tout le monde »</b>.",
          no: "She ends with <b>« Je recommande ce restaurant à tout le monde »</b> — a clear yes." },
      ],
    },
    {
      id: "r_article_marche",
      type: "Un article",
      title: "Le marché de la Croix-Rousse",
      text: [
        "Le marché de la Croix-Rousse est un des plus grands marchés de Lyon. Il a lieu tous les matins, sauf le lundi.",
        "On y trouve des fruits, des légumes, du fromage et des fleurs. Les produits viennent souvent de la région. Beaucoup de gens y vont le week-end pour faire leurs courses et pour discuter avec les vendeurs.",
        "La semaine dernière, j'y ai acheté d'excellentes fraises. Si vous visitez Lyon, ne manquez pas ce marché&nbsp;: c'est une vraie tradition&nbsp;!",
      ],
      questions: [
        { prompt: "Quand le marché a-t-il lieu&nbsp;?",
          opts: ["Tous les matins, sauf le lundi", "Seulement le dimanche", "Le soir"], answer: 0,
          ok: "Yes — <b>« Il a lieu tous les matins, sauf le lundi »</b>.",
          no: "It's held <b>tous les matins, sauf le lundi</b> — every morning except Monday." },
        { prompt: "Qu'est-ce qu'on peut acheter au marché&nbsp;?",
          opts: ["Des vêtements", "Des fruits et des légumes", "Des livres"], answer: 1,
          ok: "Correct — <b>« des fruits, des légumes, du fromage et des fleurs »</b>.",
          no: "The market sells food and flowers — <b>fruits, légumes, fromage, fleurs</b> — not clothes or books." },
        { prompt: "D'où viennent souvent les produits&nbsp;?",
          opts: ["De l'étranger", "De la région", "De Paris"], answer: 1,
          ok: "Right — <b>« Les produits viennent souvent de la région »</b>.",
          no: "They often come <b>de la région</b> — from the local area." },
      ],
    },
    {
      id: "r_bio_actrice",
      type: "Un portrait",
      title: "Camille Martin, actrice",
      text: [
        "Camille Martin est une jeune actrice française. Elle est née à Bordeaux en 1995. Quand elle était enfant, elle rêvait déjà de faire du théâtre.",
        "À dix-huit ans, elle est partie à Paris pour étudier dans une grande école. Elle a joué dans son premier film en 2018 et elle a tout de suite eu beaucoup de succès.",
        "Aujourd'hui, elle habite à Paris, mais elle voyage beaucoup pour son travail. L'année prochaine, elle va tourner un nouveau film en Italie. Elle dit qu'elle adore son métier.",
      ],
      questions: [
        { prompt: "Où Camille est-elle née&nbsp;?",
          opts: ["À Paris", "À Bordeaux", "En Italie"], answer: 1,
          ok: "Yes — <b>« Elle est née à Bordeaux en 1995 »</b>. She moved to Paris later.",
          no: "She was born <b>à Bordeaux</b>. She lives in Paris now, but that's not where she was born." },
        { prompt: "De quoi rêvait-elle quand elle était enfant&nbsp;?",
          opts: ["De faire du théâtre", "De faire du sport", "De faire la cuisine"], answer: 0,
          ok: "Correct — <b>« elle rêvait déjà de faire du théâtre »</b>.",
          no: "As a child she dreamed of <b>faire du théâtre</b> — doing theatre." },
        { prompt: "Que va-t-elle faire l'année prochaine&nbsp;?",
          opts: ["Déménager à Bordeaux", "Tourner un film en Italie", "Arrêter le cinéma"], answer: 1,
          ok: "Right — <b>« L'année prochaine, elle va tourner un nouveau film en Italie »</b>.",
          no: "Next year she's going to <b>tourner un film en Italie</b> — shoot a film in Italy." },
      ],
    },
    {
      id: "r_itineraire_paris",
      type: "Un programme",
      title: "Une journée à Paris",
      text: [
        "Demain, nous allons passer la journée à Paris. Le matin, nous allons visiter le musée du Louvre&nbsp;; il vaut mieux arriver tôt parce qu'il y a toujours beaucoup de monde.",
        "Vers midi, nous allons déjeuner dans un café près du musée. L'après-midi, nous allons nous promener le long de la Seine et prendre des photos.",
        "Si le temps le permet, nous allons monter à la tour Eiffel. Le soir, nous allons rentrer à l'hôtel, fatigués mais heureux. Ça va être une belle journée&nbsp;!",
      ],
      questions: [
        { prompt: "Que vont-ils visiter le matin&nbsp;?",
          opts: ["La tour Eiffel", "Le musée du Louvre", "La cathédrale"], answer: 1,
          ok: "Yes — <b>« Le matin, nous allons visiter le musée du Louvre »</b>.",
          no: "The morning is for the <b>musée du Louvre</b>. The Eiffel Tower is only <i>if the weather allows</i>, later." },
        { prompt: "Pourquoi faut-il arriver tôt au musée&nbsp;?",
          opts: ["Parce qu'il ferme tôt", "Parce qu'il y a beaucoup de monde", "Parce que c'est gratuit le matin"], answer: 1,
          ok: "Correct — <b>« il vaut mieux arriver tôt parce qu'il y a toujours beaucoup de monde »</b>.",
          no: "You arrive early because <b>il y a toujours beaucoup de monde</b> — it's always crowded." },
        { prompt: "Que vont-ils faire l'après-midi&nbsp;?",
          opts: ["Se promener le long de la Seine", "Dormir à l'hôtel", "Déjeuner au café"], answer: 0,
          ok: "Right — <b>« L'après-midi, nous allons nous promener le long de la Seine »</b>.",
          no: "Lunch is at midday and the hotel is for the evening. The afternoon is a walk <b>le long de la Seine</b>." },
      ],
    },
  ],
};

export const READING = {
  label: "Compréhension écrite (A1–A2)",
  format: "niveau A1–A2, format TEF",
  disclaimer: "Ce n'est pas une préparation à l'examen TEF.",
  levels: [
    {
      id: "A1",
      label: "Niveau A1",
      blurb: "Textes très courts, au présent : notes, panneaux, annonces.",
      sets: [A1_QUOTIDIEN, A1_VILLE],
    },
    {
      id: "A2",
      label: "Niveau A2",
      blurb: "Textes plus longs, plusieurs temps : e-mails, articles, portraits.",
      sets: [A2_MESSAGES, A2_DECOUVERTES],
    },
  ],
};
