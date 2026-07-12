/* listening/sets.mjs — L'Entraînement · Compréhension orale (A1–A2, format TEF).

   HONEST SCOPE (CLAUDE.md §7): a leveled library of short A1–A2 LISTENING
   passages in the STYLE of a TEF compréhension-orale task. NOT "TEF prep" — the
   real TEF spans A1–C2. Nothing here claims to ready anyone for the actual exam;
   the UI keeps the "niveau A1–A2, format TEF" label and the explicit
   "Ce n'est pas une préparation à l'examen TEF" disclaimer.

   THE NEW STEP TYPE (`listening`): the learner PLAYS the audio (no visible
   French), answers comprehension questions, and ONLY THEN sees the transcript to
   check what they missed. Replay is UNLIMITED. Showing the text before answering
   would turn listening into reading, so the transcript is never in the DOM until
   after the questions are answered. Questions reuse the EXISTING renderMCQuestion
   shuffle path (§2 one-engine) — the reveal-after-answer is the only new
   rendering behaviour.

   AUDIO: reuses the EXISTING pipeline. Each passage is a list of `lines`
   { who, say, key }; generate-audio.mjs synthesises one clip per line (speaker
   voice by `who`, exactly like dialogue turns), and the player prefers the real
   clip and falls back to browser TTS. Keys are globally unique and `l_`-prefixed
   so they never collide with lesson `d{day}_…` keys; the dryrun checks them
   alongside the lesson keys.

   LEVELING (§8.4 — a wrong listening passage teaches a wrong EAR, harder to
   unlearn than wrong reading):
   - A1 sets: PRESENT tense only (+ the A1 imperative, fixed politeness chunks
     like « je voudrais »). Short announcements, voicemails, quick exchanges.
   - A2 sets: + passé composé / futur proche / imparfait. Slightly longer phone
     messages, short stories, two-person exchanges. No higher grammar in A1.

   ACCURACY DEBT: every passage is Claude-drafted and NOT native-reviewed — folds
   into the SAME §8.2 review gate as the lessons, quiz banks, and reading sets. A
   listening pass matters most here, since the whole point is the ear.

   Question shape is identical to lesson `recall` questions:
     { prompt, opts:[…], answer:<idx>, ok, no }
   Prompts + options are in French (that's the comprehension test); the ok/no
   feedback stays in the app's English teaching voice, as in the lessons.
   `say` doubles as the transcript shown on reveal (numbers spelled out, as in
   real speech). */

/* ------------------------------------------------------------------ A1 — set 1 */
const A1_ANNONCES = {
  id: "l_a1_annonces",
  title: "Annonces & lieux publics",
  theme: "Des annonces courtes dans une gare, un magasin, un musée…",
  passages: [
    {
      id: "l_gare", type: "Une annonce", title: "À la gare",
      lines: [
        { who: "A", key: "l_gare", say: "Mesdames et messieurs, votre attention s'il vous plaît. Le train pour Paris part à quatorze heures, quai numéro trois. Merci de ne pas oublier vos bagages." },
      ],
      questions: [
        { prompt: "Où va le train&nbsp;?", opts: ["À Lyon", "À Paris", "À Marseille"], answer: 1,
          ok: "Yes — <b>« Le train pour Paris »</b>.", no: "The announcement says the train is <b>pour Paris</b>." },
        { prompt: "À quelle heure part-il&nbsp;?", opts: ["À quatre heures", "À treize heures", "À quatorze heures"], answer: 2,
          ok: "Correct — <b>« à quatorze heures »</b> (14:00).", no: "It leaves <b>à quatorze heures</b> — 14:00, i.e. 2 p.m." },
        { prompt: "De quel quai part le train&nbsp;?", opts: ["Quai numéro trois", "Quai numéro deux", "Quai numéro treize"], answer: 0,
          ok: "Right — <b>« quai numéro trois »</b>.", no: "It's <b>quai numéro trois</b> (platform 3)." },
      ],
    },
    {
      id: "l_supermarche", type: "Une annonce", title: "Au supermarché",
      lines: [
        { who: "A", key: "l_supermarche", say: "Chers clients, le supermarché ferme dans quinze minutes. Merci de vous diriger vers les caisses. N'oubliez pas nos promotions sur les fruits et les légumes. Bonne soirée et à bientôt." },
      ],
      questions: [
        { prompt: "Dans combien de temps ferme le supermarché&nbsp;?", opts: ["Dans cinq minutes", "Dans quinze minutes", "Dans cinquante minutes"], answer: 1,
          ok: "Yes — <b>« ferme dans quinze minutes »</b>.", no: "It closes <b>dans quinze minutes</b> — in fifteen minutes." },
        { prompt: "Sur quoi sont les promotions&nbsp;?", opts: ["Sur le pain", "Sur les fruits et les légumes", "Sur le fromage"], answer: 1,
          ok: "Correct — <b>« nos promotions sur les fruits et les légumes »</b>.", no: "The special offers are on <b>les fruits et les légumes</b>." },
        { prompt: "Que doivent faire les clients&nbsp;?", opts: ["Aller vers les caisses", "Sortir tout de suite", "Rester dans le magasin"], answer: 0,
          ok: "Right — <b>« Merci de vous diriger vers les caisses »</b>.", no: "They're asked to head <b>vers les caisses</b> — towards the checkouts." },
      ],
    },
    {
      id: "l_aeroport", type: "Une annonce", title: "À l'aéroport",
      lines: [
        { who: "A", key: "l_aeroport", say: "Les passagers du vol pour Nice sont priés de se présenter porte douze. L'embarquement commence maintenant. Merci de préparer votre carte d'embarquement." },
      ],
      questions: [
        { prompt: "Le vol va où&nbsp;?", opts: ["À Paris", "À Nice", "À Lille"], answer: 1,
          ok: "Yes — <b>« le vol pour Nice »</b>.", no: "It's the flight <b>pour Nice</b>." },
        { prompt: "À quelle porte faut-il aller&nbsp;?", opts: ["Porte deux", "Porte douze", "Porte vingt"], answer: 1,
          ok: "Correct — <b>« porte douze »</b> (gate 12).", no: "Passengers go to <b>porte douze</b> — gate 12." },
        { prompt: "Que faut-il préparer&nbsp;?", opts: ["Son passeport", "Sa carte d'embarquement", "Ses bagages"], answer: 1,
          ok: "Right — <b>« préparer votre carte d'embarquement »</b>.", no: "You're asked to get your <b>carte d'embarquement</b> (boarding pass) ready." },
      ],
    },
    {
      id: "l_musee", type: "Une annonce", title: "Au musée",
      lines: [
        { who: "A", key: "l_musee", say: "Bonjour et bienvenue au musée. Le musée est ouvert de dix heures à dix-huit heures. L'entrée est gratuite pour les enfants. Les photos sont interdites dans les salles. Bonne visite&nbsp;!" },
      ],
      questions: [
        { prompt: "À quelle heure ouvre le musée&nbsp;?", opts: ["À huit heures", "À dix heures", "À dix-huit heures"], answer: 1,
          ok: "Yes — <b>« ouvert de dix heures à dix-huit heures »</b>: it opens at 10.", no: "It opens <b>à dix heures</b> (10:00). 18:00 is the closing time." },
        { prompt: "Pour qui l'entrée est-elle gratuite&nbsp;?", opts: ["Pour les étudiants", "Pour les enfants", "Pour tout le monde"], answer: 1,
          ok: "Correct — <b>« gratuite pour les enfants »</b>.", no: "Entry is free <b>pour les enfants</b> — for children." },
        { prompt: "Qu'est-ce qui est interdit&nbsp;?", opts: ["Les photos", "Les sacs", "Les enfants"], answer: 0,
          ok: "Right — <b>« Les photos sont interdites dans les salles »</b>.", no: "Photos are forbidden — <b>les photos sont interdites</b>." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A1 — set 2 */
const A1_MESSAGES = {
  id: "l_a1_messages",
  title: "Messages & échanges courts",
  theme: "Un répondeur, une boulangerie, une question dans la rue…",
  passages: [
    {
      id: "l_rdv_medecin", type: "Un message", title: "Sur le répondeur",
      lines: [
        { who: "A", key: "l_rdv_medecin", say: "Bonjour, ici le cabinet du docteur Petit. Nous appelons pour confirmer votre rendez-vous de demain à dix heures. Si vous n'êtes pas disponible, merci de nous rappeler. Bonne journée." },
      ],
      questions: [
        { prompt: "Qui laisse ce message&nbsp;?", opts: ["Le cabinet du docteur Petit", "Un ami", "La pharmacie"], answer: 0,
          ok: "Yes — <b>« ici le cabinet du docteur Petit »</b>.", no: "The message is from <b>le cabinet du docteur Petit</b> — the doctor's office." },
        { prompt: "Quand est le rendez-vous&nbsp;?", opts: ["Aujourd'hui à dix heures", "Demain à dix heures", "Demain à dix-huit heures"], answer: 1,
          ok: "Correct — <b>« votre rendez-vous de demain à dix heures »</b>.", no: "The appointment is <b>demain à dix heures</b> — tomorrow at 10." },
        { prompt: "Que faire si on n'est pas disponible&nbsp;?", opts: ["Rappeler le cabinet", "Venir quand même", "Ne rien faire"], answer: 0,
          ok: "Right — <b>« merci de nous rappeler »</b>.", no: "If you can't make it, you should <b>rappeler</b> — call back." },
      ],
    },
    {
      id: "l_boulangerie", type: "Un échange", title: "À la boulangerie",
      lines: [
        { who: "A", key: "l_boulangerie_1", say: "Bonjour, je voudrais une baguette et deux croissants, s'il vous plaît." },
        { who: "B", key: "l_boulangerie_2", say: "Voilà. Ça fait quatre euros vingt. Vous désirez autre chose&nbsp;?" },
        { who: "A", key: "l_boulangerie_3", say: "Non merci, c'est tout. Bonne journée&nbsp;!" },
      ],
      questions: [
        { prompt: "Qu'est-ce que le client achète&nbsp;?", opts: ["Une baguette et deux croissants", "Deux baguettes", "Un gâteau"], answer: 0,
          ok: "Yes — <b>« une baguette et deux croissants »</b>.", no: "He asks for <b>une baguette et deux croissants</b>." },
        { prompt: "Combien ça coûte&nbsp;?", opts: ["Quatre euros vingt", "Quatorze euros", "Deux euros"], answer: 0,
          ok: "Correct — <b>« Ça fait quatre euros vingt »</b>.", no: "The total is <b>quatre euros vingt</b> (4,20 €)." },
        { prompt: "Le client veut-il autre chose&nbsp;?", opts: ["Oui, un café", "Non, c'est tout", "Oui, du pain"], answer: 1,
          ok: "Right — <b>« Non merci, c'est tout »</b>.", no: "He says <b>« c'est tout »</b> — that's all, nothing else." },
      ],
    },
    {
      id: "l_direction", type: "Un échange", title: "Dans la rue",
      lines: [
        { who: "A", key: "l_direction_1", say: "Excusez-moi, où est la gare, s'il vous plaît&nbsp;?" },
        { who: "B", key: "l_direction_2", say: "La gare&nbsp;? C'est tout droit, puis à gauche après la banque. C'est à cinq minutes à pied." },
        { who: "A", key: "l_direction_3", say: "Merci beaucoup&nbsp;!" },
      ],
      questions: [
        { prompt: "Que cherche la personne&nbsp;?", opts: ["La gare", "La banque", "La poste"], answer: 0,
          ok: "Yes — <b>« où est la gare&nbsp;? »</b>.", no: "She's looking for <b>la gare</b> — the station. The bank is just a landmark." },
        { prompt: "Où faut-il tourner&nbsp;?", opts: ["À droite", "À gauche après la banque", "Nulle part, c'est tout droit"], answer: 1,
          ok: "Correct — <b>« tout droit, puis à gauche après la banque »</b>.", no: "Go straight, then turn <b>à gauche après la banque</b> — left after the bank." },
        { prompt: "C'est loin&nbsp;?", opts: ["À cinq minutes à pied", "À une heure", "Très loin"], answer: 0,
          ok: "Right — <b>« à cinq minutes à pied »</b>.", no: "It's only <b>cinq minutes à pied</b> — five minutes on foot." },
      ],
    },
    {
      id: "l_parc_manon", type: "Un message", title: "Un message de Manon",
      lines: [
        { who: "A", key: "l_parc_manon", say: "Salut, c'est Manon. Je suis au parc avec Léo. Il fait très beau aujourd'hui&nbsp;! Tu veux venir&nbsp;? On est près de la grande fontaine. À tout à l'heure, j'espère&nbsp;!" },
      ],
      questions: [
        { prompt: "Qui laisse le message&nbsp;?", opts: ["Manon", "Léo", "Léa"], answer: 0,
          ok: "Yes — <b>« c'est Manon »</b>. Léo is the friend with her.", no: "The caller says <b>« c'est Manon »</b>. Léo is who she's with." },
        { prompt: "Où est-elle&nbsp;?", opts: ["Au parc", "Au café", "À la maison"], answer: 0,
          ok: "Correct — <b>« Je suis au parc »</b>.", no: "She's <b>au parc</b> — at the park." },
        { prompt: "Où exactement&nbsp;?", opts: ["Près de la grande fontaine", "À l'entrée", "Près du lac"], answer: 0,
          ok: "Right — <b>« On est près de la grande fontaine »</b>.", no: "They're <b>près de la grande fontaine</b> — by the big fountain." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A2 — set 1 */
const A2_TELEPHONE = {
  id: "l_a2_telephone",
  title: "Au téléphone & petits récits",
  theme: "Des messages vocaux et de courtes histoires — plusieurs temps.",
  passages: [
    {
      id: "l_ecoute_julien", type: "Un message", title: "Un message de Julien",
      lines: [
        { who: "B", key: "l_ecoute_julien", say: "Salut Thomas, c'est Julien. Je t'appelle parce que j'ai oublié mon écharpe chez toi hier soir. On a passé une super soirée, merci encore&nbsp;! Est-ce que tu peux la garder&nbsp;? Je vais passer la chercher ce week-end. Rappelle-moi quand tu as un moment. À bientôt&nbsp;!" },
      ],
      questions: [
        { prompt: "Pourquoi Julien appelle-t-il&nbsp;?", opts: ["Il a oublié son écharpe", "Il est malade", "Il annule la soirée"], answer: 0,
          ok: "Yes — <b>« j'ai oublié mon écharpe chez toi »</b>.", no: "He calls because <b>il a oublié son écharpe</b> — he left his scarf behind." },
        { prompt: "Quand va-t-il venir la chercher&nbsp;?", opts: ["Ce soir", "Ce week-end", "Demain matin"], answer: 1,
          ok: "Correct — <b>« Je vais passer la chercher ce week-end »</b>.", no: "He'll come by <b>ce week-end</b> — this weekend." },
        { prompt: "Comment était la soirée&nbsp;?", opts: ["Super", "Ennuyeuse", "Trop courte"], answer: 0,
          ok: "Right — <b>« On a passé une super soirée »</b>.", no: "He says they had <b>une super soirée</b> — a great evening." },
      ],
    },
    {
      id: "l_panne", type: "Un récit", title: "Une mauvaise journée",
      lines: [
        { who: "A", key: "l_panne", say: "Hier, je suis allée au travail en voiture. Sur l'autoroute, ma voiture est tombée en panne. Il pleuvait et il n'y avait personne. J'ai attendu le dépanneur pendant une heure. Finalement, je suis arrivée au bureau très en retard. Quelle journée&nbsp;!" },
      ],
      questions: [
        { prompt: "Comment allait-elle au travail&nbsp;?", opts: ["En voiture", "En train", "À pied"], answer: 0,
          ok: "Yes — <b>« je suis allée au travail en voiture »</b>.", no: "She went <b>en voiture</b> — by car." },
        { prompt: "Quel était le problème&nbsp;?", opts: ["Sa voiture est tombée en panne", "Elle a raté le train", "Elle était malade"], answer: 0,
          ok: "Correct — <b>« ma voiture est tombée en panne »</b> (broke down).", no: "The problem: <b>sa voiture est tombée en panne</b> — her car broke down." },
        { prompt: "Quel temps faisait-il&nbsp;?", opts: ["Il pleuvait", "Il faisait beau", "Il neigeait"], answer: 0,
          ok: "Right — <b>« Il pleuvait »</b> — it was raining.", no: "The weather: <b>il pleuvait</b> — it was raining." },
      ],
    },
    {
      id: "l_info_travail", type: "Un message", title: "Un message du travail",
      lines: [
        { who: "B", key: "l_info_travail", say: "Bonjour Madame Roche, c'est Antoine, du service informatique. Votre nouvel ordinateur est arrivé. Je vais l'installer demain matin, vers neuf heures. L'installation va durer environ une heure. Si ça ne vous convient pas, appelez-moi. Merci et bonne journée." },
      ],
      questions: [
        { prompt: "Qui laisse le message&nbsp;?", opts: ["Antoine, du service informatique", "Madame Roche", "Le directeur"], answer: 0,
          ok: "Yes — <b>« c'est Antoine, du service informatique »</b>.", no: "The caller is <b>Antoine</b>, from IT. Madame Roche is the person he's calling." },
        { prompt: "Que va faire Antoine demain&nbsp;?", opts: ["Installer un ordinateur", "Réparer le téléphone", "Livrer un colis"], answer: 0,
          ok: "Correct — <b>« Je vais l'installer demain matin »</b> (the new computer).", no: "He's going to <b>installer l'ordinateur</b> — set up the new computer." },
        { prompt: "Combien de temps va durer l'installation&nbsp;?", opts: ["Environ une heure", "Toute la journée", "Dix minutes"], answer: 0,
          ok: "Right — <b>« L'installation va durer environ une heure »</b>.", no: "It will take <b>environ une heure</b> — about an hour." },
      ],
    },
    {
      id: "l_resa_resto", type: "Un échange", title: "Réserver une table",
      lines: [
        { who: "A", key: "l_resa_resto_1", say: "Bonjour, je voudrais réserver une table pour ce soir, pour quatre personnes." },
        { who: "B", key: "l_resa_resto_2", say: "Bien sûr. À quelle heure souhaitez-vous venir&nbsp;?" },
        { who: "A", key: "l_resa_resto_3", say: "Vers vingt heures, si c'est possible." },
        { who: "B", key: "l_resa_resto_4", say: "Parfait, c'est noté. C'est à quel nom&nbsp;?" },
        { who: "A", key: "l_resa_resto_5", say: "Au nom de Dubois. Merci beaucoup&nbsp;!" },
      ],
      questions: [
        { prompt: "Pour combien de personnes est la réservation&nbsp;?", opts: ["Pour deux", "Pour quatre", "Pour six"], answer: 1,
          ok: "Yes — <b>« pour quatre personnes »</b>.", no: "The table is <b>pour quatre personnes</b> — for four." },
        { prompt: "À quelle heure&nbsp;?", opts: ["Vers dix-huit heures", "Vers vingt heures", "À midi"], answer: 1,
          ok: "Correct — <b>« Vers vingt heures »</b> (around 8 p.m.).", no: "The client wants <b>vers vingt heures</b> — around 20:00." },
        { prompt: "À quel nom est la table&nbsp;?", opts: ["Au nom de Dupont", "Au nom de Dubois", "Au nom de Durand"], answer: 1,
          ok: "Right — <b>« Au nom de Dubois »</b>.", no: "The booking is <b>au nom de Dubois</b>." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ A2 — set 2 */
const A2_PROJETS = {
  id: "l_a2_projets",
  title: "Sorties & projets",
  theme: "La météo, une invitation, des projets — surtout le futur proche.",
  passages: [
    {
      id: "l_meteo", type: "La météo", title: "La météo de demain",
      lines: [
        { who: "A", key: "l_meteo", say: "Et maintenant, la météo pour demain. Le matin, il va faire gris et froid sur tout le pays. L'après-midi, le soleil va revenir dans le sud, mais il va pleuvoir dans le nord. Les températures vont baisser un peu. Bonne soirée&nbsp;!" },
      ],
      questions: [
        { prompt: "Quel temps va-t-il faire le matin&nbsp;?", opts: ["Gris et froid", "Chaud et ensoleillé", "Orageux"], answer: 0,
          ok: "Yes — <b>« il va faire gris et froid »</b> le matin.", no: "In the morning it'll be <b>gris et froid</b> — grey and cold." },
        { prompt: "Où va-t-il pleuvoir l'après-midi&nbsp;?", opts: ["Dans le sud", "Dans le nord", "Partout"], answer: 1,
          ok: "Correct — <b>« il va pleuvoir dans le nord »</b>. Le soleil revient dans le sud.", no: "Rain is in <b>le nord</b>; the sun comes back in the south." },
        { prompt: "Les températures vont…", opts: ["Monter", "Baisser un peu", "Rester stables"], answer: 1,
          ok: "Right — <b>« Les températures vont baisser un peu »</b>.", no: "Temperatures are going to <b>baisser</b> — drop a little." },
      ],
    },
    {
      id: "l_ciné_emma", type: "Un message", title: "Une invitation au cinéma",
      lines: [
        { who: "A", key: "l_cine_emma", say: "Coucou Sarah, c'est Emma. Ce soir, on va aller au cinéma avec des amis. Le film commence à vingt heures trente. On va se retrouver devant le cinéma à huit heures. Tu veux venir avec nous&nbsp;? Ça va être sympa&nbsp;! Rappelle-moi vite. Bisous&nbsp;!" },
      ],
      questions: [
        { prompt: "Où vont-ils aller ce soir&nbsp;?", opts: ["Au cinéma", "Au restaurant", "À un concert"], answer: 0,
          ok: "Yes — <b>« on va aller au cinéma »</b>.", no: "They're going <b>au cinéma</b> — to the cinema." },
        { prompt: "À quelle heure commence le film&nbsp;?", opts: ["À vingt heures", "À vingt heures trente", "À dix-huit heures trente"], answer: 1,
          ok: "Correct — <b>« Le film commence à vingt heures trente »</b> (20:30).", no: "The film starts <b>à vingt heures trente</b> — 20:30. They meet earlier, at 8." },
        { prompt: "Où vont-ils se retrouver&nbsp;?", opts: ["Devant le cinéma", "Chez Emma", "Au café"], answer: 0,
          ok: "Right — <b>« On va se retrouver devant le cinéma »</b>.", no: "They'll meet <b>devant le cinéma</b> — in front of the cinema." },
      ],
    },
    {
      id: "l_demenagement", type: "Un message", title: "Une bonne nouvelle",
      lines: [
        { who: "B", key: "l_demenagement", say: "Tu sais quoi&nbsp;? J'ai enfin trouvé un nouvel appartement&nbsp;! Il est plus grand et plus près de mon travail. Je vais déménager le mois prochain. Ce week-end, je vais commencer à faire les cartons. Est-ce que tu peux m'aider samedi&nbsp;? Je t'invite à manger après, bien sûr&nbsp;!" },
      ],
      questions: [
        { prompt: "Qu'est-ce que la personne a trouvé&nbsp;?", opts: ["Un nouvel appartement", "Un nouveau travail", "Une voiture"], answer: 0,
          ok: "Yes — <b>« J'ai enfin trouvé un nouvel appartement »</b>.", no: "The good news: <b>un nouvel appartement</b> — a new flat." },
        { prompt: "Quand va-t-elle déménager&nbsp;?", opts: ["La semaine prochaine", "Le mois prochain", "Demain"], answer: 1,
          ok: "Correct — <b>« Je vais déménager le mois prochain »</b>.", no: "The move is <b>le mois prochain</b> — next month." },
        { prompt: "Qu'est-ce qu'elle demande à son ami&nbsp;?", opts: ["De l'aider samedi", "De l'argent", "Un conseil"], answer: 0,
          ok: "Right — <b>« Est-ce que tu peux m'aider samedi&nbsp;? »</b>.", no: "She asks for help — <b>m'aider samedi</b> — on Saturday." },
      ],
    },
    {
      id: "l_vacances_italie", type: "Un échange", title: "Après les vacances",
      lines: [
        { who: "A", key: "l_vacances_italie_1", say: "Alors, tes vacances en Italie, c'était comment&nbsp;?" },
        { who: "B", key: "l_vacances_italie_2", say: "C'était magnifique&nbsp;! On a visité Rome et Venise. Il faisait très chaud, mais on a adoré." },
        { who: "A", key: "l_vacances_italie_3", say: "Vous avez mangé de bonnes choses&nbsp;?" },
        { who: "B", key: "l_vacances_italie_4", say: "Oui, des pâtes et des glaces tous les jours&nbsp;! Je vais y retourner l'année prochaine, c'est sûr." },
      ],
      questions: [
        { prompt: "Où B est-il allé en vacances&nbsp;?", opts: ["En Espagne", "En Italie", "En Grèce"], answer: 1,
          ok: "Yes — <b>« tes vacances en Italie »</b>: Rome and Venice.", no: "The holiday was <b>en Italie</b> — they visited Rome and Venice." },
        { prompt: "Quel temps faisait-il&nbsp;?", opts: ["Très chaud", "Très froid", "Pluvieux"], answer: 0,
          ok: "Correct — <b>« Il faisait très chaud »</b>.", no: "It was <b>très chaud</b> — very hot." },
        { prompt: "Que va faire B l'année prochaine&nbsp;?", opts: ["Y retourner", "Rester à la maison", "Aller ailleurs"], answer: 0,
          ok: "Right — <b>« Je vais y retourner l'année prochaine »</b>.", no: "He's going to <b>y retourner</b> — go back there next year." },
      ],
    },
  ],
};

export const LISTENING = {
  label: "Compréhension orale (A1–A2)",
  format: "niveau A1–A2, format TEF",
  disclaimer: "Ce n'est pas une préparation à l'examen TEF.",
  levels: [
    {
      id: "A1", label: "Niveau A1",
      blurb: "Annonces et messages courts, au présent. Écoute, puis réponds.",
      sets: [A1_ANNONCES, A1_MESSAGES],
    },
    {
      id: "A2", label: "Niveau A2",
      blurb: "Messages vocaux et récits, plusieurs temps. Un peu plus longs.",
      sets: [A2_TELEPHONE, A2_PROJETS],
    },
  ],
};
