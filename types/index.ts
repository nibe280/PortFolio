// ─── Types globaux du portfolio ───────────────────────────────────────────────

export interface EcoMetric {
  label: string;
  value: number;
  icon: string;
  tip: string;
}

export interface Project {
  title: string;
  type: "SITE WEB" | "APPLICATION WEB" | "OUTIL MÉTIER";
  desc: string;
  tags: string[];
  co2: string;
  color: string;
  link?: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  org: string;
  type: "edu" | "exp";
  desc: string;
}

export interface SkillCategory {
  [key: string]: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
