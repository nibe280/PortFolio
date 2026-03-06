import type { EcoMetric, Project, TimelineItem, SkillCategory, NavItem } from "@/types";
export type { EcoMetric, Project, TimelineItem, SkillCategory, NavItem } from "@/types";

// ─── Navigation ────────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { id: "home",     label: "Accueil",     href: "#home" },
  { id: "about",    label: "À propos",    href: "#about" },
  { id: "skills",   label: "Compétences", href: "#skills" },
  { id: "projects", label: "Projets",     href: "#projects" },
  { id: "contact",  label: "Contact",     href: "#contact" },
];

// ─── Éco ───────────────────────────────────────────────────────────────────────
export const ECO_METRICS: EcoMetric[] = [
  { label: "Dark mode natif",    value: 100, icon: "🌑", tip: "−40% conso écran OLED" },
  { label: "0 tracker / cookie", value: 100, icon: "🔒", tip: "Aucune donnée collectée" },
  { label: "Police système",     value: 95,  icon: "🔤", tip: "0 requête Google Fonts" },
  { label: "SVG & CSS only",     value: 92,  icon: "🎨", tip: "Aucune image bitmap" },
  { label: "JS minimal",         value: 88,  icon: "⚡", tip: "Bundle < 60 KB" },
  { label: "0 vidéo auto",       value: 100, icon: "🎬", tip: "−500 KB/s de bande passante" },
  { label: "Cache agressif",     value: 82,  icon: "💾", tip: "Moins de requêtes réseau" },
  { label: "Hébergement vert",   value: 90,  icon: "☁️", tip: "Serveur 100% renouvelable" },
];

export const ECO_SCORE: number = Math.round(
  ECO_METRICS.reduce((a, m) => a + m.value, 0) / ECO_METRICS.length
);

// ─── Compétences ───────────────────────────────────────────────────────────────
export const SKILLS: SkillCategory = {
  TOUT:     ["HTML","CSS","JavaScript","React","Next.js","Tailwind CSS","Vue.js","Node.js","Spring Boot","PHP","Symfony","SQL","MySQL","PostgreSQL","Sage X3","Crystal Reports","Git","Jenkins","Python"],
  FRONTEND: ["HTML","CSS","JavaScript","React","Next.js","Tailwind CSS","Vue.js"],
  BACKEND:  ["Node.js","Spring Boot","PHP","Symfony","Python","SQL","MySQL","PostgreSQL"],
  MOBILE:   ["Flutter","Dart","React Native"],
};

export const SKILL_ICONS: Record<string, string> = {
  HTML: "🟧", CSS: "🟦", JavaScript: "🟨", React: "⚛️", "Next.js": "▲",
  "Tailwind CSS": "🌊", "Vue.js": "💚", "Node.js": "🟩", "Spring Boot": "🍃",
  PHP: "🐘", Symfony: "⚙️", SQL: "🗄️", MySQL: "🐬", PostgreSQL: "🐘",
  "Sage X3": "📊", "Crystal Reports": "💎", Git: "🔴", Jenkins: "🏗️",
  Python: "🐍", Flutter: "💙", Dart: "🎯", "React Native": "📱",
};

export const SKILL_CATEGORY_LABEL: Record<string, string> = {
  HTML: "FRONTEND", CSS: "FRONTEND", JavaScript: "FRONTEND", React: "FRONTEND",
  "Next.js": "FRONTEND", "Tailwind CSS": "FRONTEND", "Vue.js": "FRONTEND",
  Flutter: "MOBILE", Dart: "MOBILE", "React Native": "MOBILE",
};

// ─── Projets ───────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    title: "Portfolio Personnel",
    type: "SITE WEB",
    desc: "Portfolio éco-responsable développé avec Next.js & TypeScript. Éco-score 91%.",
    tags: ["Next.js", "TypeScript", "Green IT"],
    co2: "0.05g CO₂",
    color: "#f5a020",
  },
  {
    title: "Bomberman 2D",
    type: "APPLICATION WEB",
    desc: "Jeu Bomberman multijoueur en alternance chez Sarber — canvas, gestion d'état temps réel.",
    tags: ["JavaScript", "Canvas", "WebSocket"],
    co2: "0.06g CO₂",
    color: "#4ecb71",
  },
  {
    title: "Crystal Reports BI",
    type: "OUTIL MÉTIER",
    desc: "Rapports décisionnels Sage X3 — création, maintenance, optimisation SQL.",
    tags: ["Crystal Reports", "Sage X3", "SQL"],
    co2: "0.04g CO₂",
    color: "#3ab8f5",
  },
  {
    title: "Apps Internes Sarber",
    type: "APPLICATION WEB",
    desc: "Développement fonctionnalités métier en Code Soft, amélioration outils internes.",
    tags: ["Code Soft", "Web", "Sage X3"],
    co2: "0.07g CO₂",
    color: "#a78bfa",
  },
];

export const PROJECT_FILTERS = ["Tous", "SITE WEB", "APPLICATION WEB", "OUTIL MÉTIER"] as const;
export type ProjectFilter = typeof PROJECT_FILTERS[number];

// ─── Timeline ──────────────────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 – auj.",
    role: "Développeur applicatif – Alternance",
    org: "Sarber",
    type: "exp",
    desc: "Développement web interne, Crystal Reports, Sage X3, Code Soft.",
  },
  {
    year: "2023 – auj.",
    role: "BUT Informatique — 3ᵉ année",
    org: "IUT de Lens — Université d'Artois",
    type: "edu",
    desc: "Spécialisation Data & IA. React, Spring Boot, Jenkins CI/CD, RL, Selenium.",
  },
  {
    year: "2023–2024",
    role: "Technicien d'entretien réseaux d'évacuation",
    org: "Sater, Saint-Laurent-Blangy",
    type: "exp",
    desc: "Maintenance réseaux d'évacuation, interventions curatives.",
  },
  {
    year: "2022–2023",
    role: "Agent logistique",
    org: "ScarpArtois, Arras",
    type: "exp",
    desc: "Gestion stocks, préparation commandes, logistique transport.",
  },
  {
    year: "2021–2023",
    role: "BUT Génie Mécanique",
    org: "IUT Béthune",
    type: "edu",
    desc: "Systèmes industriels et développement durable.",
  },
  {
    year: "2018–2021",
    role: "Terminal STI2D",
    org: "Lycée Gambetta, Arras",
    type: "edu",
    desc: "Sciences et technologies de l'industrie et du développement durable.",
  },
];
