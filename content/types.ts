export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "id" : "en";
}

export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export type ProjectFacts = {
  slug: string;
  code: string;
  year: string;
  stack: string[];
  repo?: string;
};

export const projects: ProjectFacts[] = [
  {
    slug: "e-signature",
    code: "ST-01",
    year: "2025 – now",
    stack: ["Next.js", "Express.js", "NestJS", "PostgreSQL", "React Native", "Docker"],
  },
  {
    slug: "tempo",
    code: "ST-02",
    year: "2026",
    stack: [".NET 10", "PostgreSQL", "Next.js 15", "React 19", "Tailwind v4", "Kubernetes"],
  },
  {
    slug: "dms-platform",
    code: "ST-03",
    year: "2026",
    stack: ["Next.js 16", ".NET 10", "PostgreSQL 17", "MinIO", "TipTap"],
  },
  {
    slug: "bericuan",
    code: "ST-04",
    year: "2025",
    stack: ["Python", "Binance Futures API", "WebSocket", "Next.js 15"],
  },
  {
    slug: "homelab-gitops",
    code: "ST-05",
    year: "2025",
    stack: ["k3s", "Argo CD", "Traefik", "Helm", "Kustomize"],
  },
];

export type CaseStudyCopy = {
  name: string;
  summary: string;
  role: string;
  problem: string;
  constraints: string[];
  system: { title: string; body: string }[];
  decisions: { title: string; body: string; tradeoff: string }[];
  status: string;
  evidence: { label: string; href?: string }[];
};

export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    work: string;
    about: string;
    experience: string;
    contact: string;
    skip: string;
    home: string;
    primary: string;
    language: string;
  };
  hero: {
    name: string;
    role: string;
    location: string;
    datumLabel: string;
    datumValue: string;
    sheetLabel: string;
    sheetValue: string;
    statement: string;
    availability: string;
    primary: string;
    links: { label: string; href: string; external?: boolean }[];
    traverseCaption: string;
  };
  work: {
    heading: string;
    intro: string;
    open: string;
    stackLabel: string;
    earlierHeading: string;
    earlier: { name: string; note: string; href: string }[];
  };
  about: { heading: string; paragraphs: string[] };
  experience: {
    heading: string;
    intro: string;
    roles: { period: string; title: string; org: string; note?: string }[];
    educationLabel: string;
    education: { period: string; title: string; org: string; note: string };
  };
  skills: { heading: string; intro: string; groups: { label: string; items: string[] }[] };
  languages: { heading: string; items: { name: string; level: string }[] };
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
    links: { label: string; href: string }[];
  };
  footer: { note: string; built: string; backToTop: string };
  caseStudy: {
    back: string;
    problem: string;
    constraints: string;
    system: string;
    decisions: string;
    tradeoff: string;
    evidence: string;
    status: string;
    previous: string;
    next: string;
    stack: string;
    role: string;
    year: string;
  };
  details: Record<string, CaseStudyCopy>;
};
