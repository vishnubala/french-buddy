/* speaking/sets.mjs — L'Entraînement · Lecture à voix haute (A1–A2).

   HONEST SCOPE (CLAUDE.md §7): a leveled library of short A1–A2 READ-ALOUD
   sentences for pronunciation practice. The learner reads a sentence aloud and
   (once the Speaking module is wired, session 3) gets Azure pronunciation
   scores. IMPORTANT: for fr-FR, Azure returns WORD-LEVEL feedback only —
   accuracy / fluency / completeness plus a per-word error type. Phoneme-level
   drilldown and prosody are en-US-only, so this module is designed for
   word-level feedback and NEVER promises phoneme-by-phoneme coaching. It is also
   NOT a preparation for the TEF speaking test. The UI keeps the
   "niveau A1–A2" label and the "retour au niveau des mots" disclaimer.

   REUSE, DON'T AUTHOR (this session = content curation only): every sentence is
   an EXISTING lesson dialogue turn that ALREADY has a generated audio clip. A
   speaking item is:
     { id, ref, say, key }
   where
     - `ref` = the French sentence the learner reads (display; may carry
       punctuation / narrow no-break spaces).
     - `say` = the TTS-clean reference text — this is what the pronunciation
       assessment will later use as its reference text. It is the SAME `say` that
       was already vetted for TTS-safety in the source lesson turn.
     - `key` = an EXISTING audio key (a lesson dialogue-turn key). Reference-audio
       playback ("écouter le modèle") reuses the clip already in AUDIO_CLIPS /
       clips.json. NO new audio is generated for this module — dryrun asserts
       every `key` here already exists in the curriculum's audio-key namespace.

   Because the content is reused verbatim from lessons that are themselves in the
   §8.2 native-review debt, nothing net-new needs review beyond the CURATION
   choice (which sentences, at which level). That curation is noted in STATE.md
   as part of the same §8.2 debt.

   LEVELING (§8.4 — a mis-leveled read-aloud line drills the wrong grammar into
   the ear/mouth, harder to unlearn):
   - A1 sets: PRESENT tense only, plus the A1 essentials already taught in weeks
     1–7 — the A1 imperative for directions (continuez / tournez / prenez), the
     fixed politeness chunk « je voudrais », and `aller`-as-motion
     ("je vais au musée"). No passé composé / futur proche / imparfait.
   - A2 sets: passé composé (weeks 8–9), futur proche (week 10) and imparfait
     (week 11), plus the opinion/comparison frames from weeks 11–12. Kept out of
     the A1 sets entirely.

   STRUCTURE: two levels (A1, A2), each with two themed sets of ~7 sentences —
   the same { label, format, disclaimer, levels:[…] } outer shape as
   reading/sets.mjs and listening/sets.mjs, so the entry card and the
   level→set pickers reuse the existing chrome with no new renderer (§2). */

/* ------------------------------------------------------------------ A1 — set 1 */
const A1_SEPRESENTER = {
  id: "sp_a1_presenter",
  title: "Se présenter",
  theme: "Dire bonjour, se présenter, parler de soi — au présent.",
  items: [
    { id: "sp_d02_d1", key: "d02_d1", ref: "Salut ! Moi, c'est Léa. Et toi ?",            say: "Salut ! Moi, c'est Léa. Et toi ?" },
    { id: "sp_d02_d2", key: "d02_d2", ref: "Salut Léa ! Je m'appelle Thomas.",            say: "Salut Léa ! Je m'appelle Thomas." },
    { id: "sp_d03_d2", key: "d03_d2", ref: "Non, je suis belge. Et vous ?",               say: "Non, je suis belge. Et vous ?" },
    { id: "sp_d09_d2", key: "d09_d2", ref: "Oui, j'habite ici. Et vous ?",                say: "Oui, j'habite ici. Et vous ?" },
    { id: "sp_d12_d1", key: "d12_d1", ref: "Qu'est-ce que vous faites dans la vie ?",     say: "Qu'est-ce que vous faites dans la vie ?" },
    { id: "sp_d12_d2", key: "d12_d2", ref: "Je suis ingénieure. Et vous ?",               say: "Je suis ingénieure. Et vous ?" },
    { id: "sp_d13_d2", key: "d13_d2", ref: "Oui, j'ai un frère et deux sœurs. Et toi ?",  say: "Oui, j'ai un frère et deux sœurs. Et toi ?" },
  ],
};

/* ------------------------------------------------------------------ A1 — set 2 */
const A1_CAFEVILLE = {
  id: "sp_a1_cafeville",
  title: "Au café et en ville",
  theme: "Commander, demander son chemin — présent, impératif, « je voudrais ».",
  items: [
    { id: "sp_d05_d1", key: "d05_d1", ref: "Bonjour ! Deux croissants et une baguette, s'il vous plaît.", say: "Bonjour ! Deux croissants et une baguette, s'il vous plaît." },
    { id: "sp_d15_d2", key: "d15_d2", ref: "Bonjour ! Je voudrais un café, s'il vous plaît.",             say: "Bonjour ! Je voudrais un café, s'il vous plaît." },
    { id: "sp_d19_d2", key: "d19_d2", ref: "Bonjour ! Un kilo de tomates, s'il vous plaît.",              say: "Bonjour ! Un kilo de tomates, s'il vous plaît." },
    { id: "sp_d22_d2", key: "d22_d2", ref: "Je vais au musée. Et toi ?",                                  say: "Je vais au musée. Et toi ?" },
    { id: "sp_d23_d2", key: "d23_d2", ref: "Alors… continuez tout droit, puis tournez à droite.",         say: "Alors… continuez tout droit, puis tournez à droite." },
    { id: "sp_d24_d2", key: "d24_d2", ref: "Prenez la ligne 1, direction Château de Vincennes.",          say: "Prenez la ligne 1, direction Château de Vincennes." },
    { id: "sp_d23_d4", key: "d23_d4", ref: "Non, c'est à cinq minutes. C'est juste là.",                  say: "Non, c'est à cinq minutes. C'est juste là." },
  ],
};

/* ------------------------------------------------------------------ A2 — set 1 */
const A2_WEEKEND = {
  id: "sp_a2_weekend",
  title: "Le week-end dernier",
  theme: "Raconter au passé composé (avoir et être).",
  items: [
    { id: "sp_d50_d2", key: "d50_d2", ref: "Oui ! J'ai mangé au restaurant avec Léa.",                             say: "Oui ! J'ai mangé au restaurant avec Léa." },
    { id: "sp_d52_d2", key: "d52_d2", ref: "J'ai vu un film au cinéma, et après j'ai bu un verre avec des amis.",   say: "J'ai vu un film au cinéma, et après j'ai bu un verre avec des amis." },
    { id: "sp_d54_d2", key: "d54_d2", ref: "Oui, super ! J'ai visité le Louvre, et dimanche j'ai joué au foot. Et toi ?", say: "Oui, super ! J'ai visité le Louvre, et dimanche j'ai joué au foot. Et toi ?" },
    { id: "sp_d55_d2", key: "d55_d2", ref: "Alors, le matin j'ai fait les courses, puis j'ai rangé l'appartement.", say: "Alors, le matin j'ai fait les courses, puis j'ai rangé l'appartement." },
    { id: "sp_d57_d3", key: "d57_d3", ref: "Je suis allé, mais je suis parti tôt.",                                say: "Je suis allé, mais je suis parti tôt." },
    { id: "sp_d59_d2", key: "d59_d2", ref: "Oui, elles sont allées à Nice. Elles sont arrivées hier.",             say: "Oui, elles sont allées à Nice. Elles sont arrivées hier." },
    { id: "sp_d61_d2", key: "d61_d2", ref: "D'abord, je suis allé à Rome. J'ai visité le Colisée, c'était magnifique.", say: "D'abord, je suis allé à Rome. J'ai visité le Colisée, c'était magnifique." },
  ],
};

/* ------------------------------------------------------------------ A2 — set 2 */
const A2_PROJETSSOUVENIRS = {
  id: "sp_a2_projets_souvenirs",
  title: "Projets et souvenirs",
  theme: "Parler du futur (futur proche) et du passé (imparfait), donner son avis.",
  items: [
    { id: "sp_d64_d2", key: "d64_d2", ref: "Je vais travailler le matin, et l'après-midi je vais voir des amis.", say: "Je vais travailler le matin, et l'après-midi je vais voir des amis." },
    { id: "sp_d68_d2", key: "d68_d2", ref: "Oui ! Mais demain, il va pleuvoir, je crois.",                        say: "Oui ! Mais demain, il va pleuvoir, je crois." },
    { id: "sp_d69_d2", key: "d69_d2", ref: "Avec plaisir ! Je vais apporter un dessert.",                         say: "Avec plaisir ! Je vais apporter un dessert." },
    { id: "sp_d71_d2", key: "d71_d2", ref: "J'habitais à Lyon. J'avais un petit appartement près du parc.",       say: "J'habitais à Lyon. J'avais un petit appartement près du parc." },
    { id: "sp_d72_d2", key: "d72_d2", ref: "Chez mes grands-parents, à la campagne. Il faisait toujours beau.",   say: "Chez mes grands-parents, à la campagne. Il faisait toujours beau." },
    { id: "sp_d75_d2", key: "d75_d2", ref: "À mon avis, c'était génial. Je trouve que l'histoire était originale.", say: "À mon avis, c'était génial. Je trouve que l'histoire était originale." },
    { id: "sp_d77_d4", key: "d77_d4", ref: "À mon avis, c'est plus animé qu'avant, mais moins tranquille.",        say: "À mon avis, c'est plus animé qu'avant, mais moins tranquille." },
  ],
};

export const SPEAKING = {
  label: "Lecture à voix haute (A1–A2)",
  format: "niveau A1–A2",
  disclaimer: "Un retour au niveau des mots (précision, fluidité), pas son par son. Ce n'est pas une préparation à l'épreuve orale du TEF.",
  levels: [
    {
      id: "A1", label: "Niveau A1",
      blurb: "Phrases courtes, au présent : se présenter, commander, demander son chemin.",
      sets: [A1_SEPRESENTER, A1_CAFEVILLE],
    },
    {
      id: "A2", label: "Niveau A2",
      blurb: "Phrases plus longues, plusieurs temps : raconter, projeter, donner son avis.",
      sets: [A2_WEEKEND, A2_PROJETSSOUVENIRS],
    },
  ],
};
