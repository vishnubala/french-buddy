/* quiz/skills.mjs — the diagnostic taxonomy, as DATA.
   19 skills spanning A1–A2. Each: a stable slug, a human label, the course
   weeks it draws on (used for scope filtering AND the results "revisit"
   links), and a difficulty band 1–3 (used to order deepening hardest-first).
   Pure data — no DOM, no logic beyond a lookup index. */

export const SKILLS = [
  { slug:"etre_avoir",          label:"être & avoir (present)",               weeks:[1,2],      band:2 },
  { slug:"present_verbs",       label:"Regular present (-er/-ir/-re)",        weeks:[2,7,11],   band:2 },
  { slug:"reflexive",           label:"Reflexive verbs & routine",           weeks:[5],        band:2 },
  { slug:"passe_compose",       label:"Passé composé (avoir & être)",        weeks:[8,9],      band:3 },
  { slug:"imparfait",           label:"Imparfait (formation & use)",         weeks:[11],       band:3 },
  { slug:"pc_vs_imparfait",     label:"Passé composé vs imparfait",          weeks:[11],       band:3 },
  { slug:"futur_proche",        label:"Futur proche (aller + inf.)",         weeks:[10],       band:2 },
  { slug:"negation",            label:"Negation (ne…pas, placement)",        weeks:[2,8,9,10], band:2 },
  { slug:"imperative",          label:"Imperative (commands)",               weeks:[4],        band:2 },
  { slug:"gender_articles",     label:"Gender & articles",                   weeks:[1],        band:1 },
  { slug:"partitive_quantity",  label:"Partitive vs quantity + de",          weeks:[3,6],      band:3 },
  { slug:"demonstr_possess",    label:"Demonstratives & possessives",        weeks:[6,7],      band:2 },
  { slug:"adjectives",          label:"Adjective agreement & placement",     weeks:[6],        band:3 },
  { slug:"comparatives",        label:"Comparatives (plus/moins/aussi…que)", weeks:[11],       band:2 },
  { slug:"prepositions",        label:"Prepositions (au/à la; place)",       weeks:[4],        band:2 },
  { slug:"numbers_time",        label:"Numbers, time & dates",               weeks:[1,2,3,5],  band:1 },
  { slug:"vocab_domains",       label:"Everyday vocabulary fields",          weeks:[3,4,6,7],  band:1 },
  { slug:"functional_register", label:"Functional language & register",      weeks:[1,10,11],  band:2 },
  { slug:"pronunciation",       label:"Pronunciation & liaison",             weeks:[1,2,3,4,5,6,7,8,9,10,11,12], band:3 },
];

export const SKILL_BY_SLUG = Object.fromEntries(SKILLS.map(s => [s.slug, s]));
