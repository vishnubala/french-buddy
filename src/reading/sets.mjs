/* reading/sets.mjs — L'Entraînement · Compréhension écrite (A1–A2, format TEF).

   HONEST SCOPE (CLAUDE.md §7): these are short A1–A2 reading passages in the
   STYLE of a TEF compréhension-écrite task. They are NOT "TEF prep" — the real
   TEF spans A1–C2. Nothing here claims to ready anyone for the actual exam. The
   UI labels this "niveau A1–A2, format TEF" and says so explicitly.

   A reading item = a short French passage (~40–90 words, A1–A2 grammar/vocab:
   present, passé composé, futur proche, everyday text types) + 2–4 MC
   comprehension questions. It renders through the SAME primitives as the rest of
   the app (§2 one-engine): the passage renders like an intro/body block, and the
   questions reuse renderMCQuestion WITH shuffle:true — the same path the quiz
   uses. NO new renderer, NO new question type.

   ACCURACY (§8.4): the French must be natural and correct — a subtly-wrong
   passage teaches wrong French confidently. These are Claude-drafted and NOT
   native-reviewed; they fold into the same review gate as the lessons (§8.2).

   Question shape is identical to lesson `recall` questions:
     { prompt, opts:[…], answer:<idx>, ok, no }
   Prompts + options are in French (that's the comprehension test); the ok/no
   feedback stays in the app's English teaching voice, as in the lessons. */

export const READING = {
  id: "reading_a1a2",
  label: "Compréhension écrite (A1–A2)",
  format: "niveau A1–A2, format TEF",
  passages: [
    {
      id: "r_note_courses",
      type: "Un mot",            /* a note left at home */
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
      id: "r_menu_jour",
      type: "Un menu",           /* a café menu of the day */
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
      id: "r_annonce_studio",
      type: "Une annonce",       /* a rental classified ad */
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
      id: "r_email_rdv",
      type: "Un email",         /* a formal email cancelling an appointment */
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
      id: "r_bio_karim",
      type: "Une présentation",  /* a short self-introduction / bio */
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
  ],
};
