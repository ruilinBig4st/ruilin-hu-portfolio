import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  href?: string;
  icon: LucideIcon;
  external?: boolean;
  disabledReason?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  detail: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: LucideIcon;
  bullets: string[];
};

export type ProjectLink = {
  label: string;
  href?: string;
  external?: boolean;
  disabledReason?: string;
};

export type ProjectScreenshot = {
  title: string;
  description: string;
  kind: "map" | "terminal" | "dashboard";
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  stack: string[];
  businessValue: string;
  highlights: string[];
  overview: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  details: string[];
  links: ProjectLink[];
  screenshots: ProjectScreenshot[];
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  items: string[];
};
