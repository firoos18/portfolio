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

/**
 * Owner portrait for the hero. Drop the file in `public/` and set the path;
 * leave it null and the hero runs type-only.
 */
export const portrait: { src: string; width: number; height: number } | null = null;

export type ProjectShot = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

export type ProjectFacts = {
  slug: string;
  year: string;
  /** Screenshot frame: phone screens or desktop windows. */
  kind: "mobile" | "web";
  stack: string[];
  shots: ProjectShot[];
};

const phone = { width: 780, height: 1688 } as const;
const desktop = { width: 1440, height: 900 } as const;

export const projects: ProjectFacts[] = [
  {
    slug: "infinity-gym",
    year: "2026 – now",
    kind: "mobile",
    stack: [".NET 10", "PostgreSQL", "Redis", "Next.js 16", "React 19", "TanStack Query", "Tailwind v4"],
    shots: [
      {
        src: "/projects/infinity-gym/home.webp",
        ...phone,
        alt: {
          en: "Member home: membership card with days left, check-in status, and a promotion banner",
          id: "Beranda member: kartu membership dengan sisa hari, status check-in, dan banner promo",
        },
      },
      {
        src: "/projects/infinity-gym/classes.webp",
        ...phone,
        alt: { en: "Class schedule with filters and booking slots", id: "Jadwal kelas dengan filter dan slot booking" },
      },
      {
        src: "/projects/infinity-gym/pt.webp",
        ...phone,
        alt: { en: "Personal trainer list and packages", id: "Daftar personal trainer dan paket" },
      },
      {
        src: "/projects/infinity-gym/membership.webp",
        ...phone,
        alt: { en: "Membership detail and renewal", id: "Detail membership dan perpanjangan" },
      },
      {
        src: "/projects/infinity-gym/welcome.webp",
        ...phone,
        alt: { en: "Welcome screen with log-in and sign-up", id: "Layar sambutan dengan masuk dan daftar" },
      },
    ],
  },
  {
    slug: "dms-platform",
    year: "2026",
    kind: "web",
    stack: ["Next.js 16", ".NET 10", "PostgreSQL 17", "MinIO", "TipTap"],
    shots: [
      {
        src: "/projects/dms-platform/course-editor.webp",
        ...desktop,
        alt: {
          en: "CMS course editor: details form beside the curriculum tree",
          id: "Editor kursus di CMS: form detail di samping pohon kurikulum",
        },
      },
      {
        src: "/projects/dms-platform/courses-list.webp",
        ...desktop,
        alt: { en: "CMS course list", id: "Daftar kursus di CMS" },
      },
      {
        src: "/projects/dms-platform/article-editor.webp",
        ...desktop,
        alt: { en: "CMS article editor", id: "Editor artikel di CMS" },
      },
      {
        src: "/projects/dms-platform/section-editor.webp",
        ...desktop,
        alt: { en: "CMS landing-section editor", id: "Editor section landing di CMS" },
      },
    ],
  },
  {
    slug: "tempo",
    year: "2026",
    kind: "web",
    stack: [".NET 10", "PostgreSQL", "Next.js 15", "React 19", "Tailwind v4", "Kubernetes"],
    shots: [],
  },
];

export type CaseStudyCopy = {
  name: string;
  category: string;
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
  meta: { title: string; description: string };
  nav: {
    work: string;
    about: string;
    process: string;
    experience: string;
    contact: string;
    skip: string;
    home: string;
    primary: string;
    language: string;
    menu: string;
    close: string;
  };
  hero: {
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    basedLabel: string;
    location: string;
    timeLabel: string;
    disciplinesLabel: string;
    disciplines: string[];
    statement: string;
    cta: string;
    portraitAlt: string;
  };
  about: { heading: string; lead: string; paragraphs: string[] };
  work: {
    heading: string;
    intro: string;
    open: string;
    earlierHeading: string;
    earlier: { name: string; note: string; href: string }[];
  };
  process: {
    heading: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  experience: {
    heading: string;
    roles: { period: string; title: string; org: string; note?: string }[];
    educationLabel: string;
    education: { period: string; title: string; org: string; note: string };
  };
  skills: { heading: string; groups: { label: string; items: string[] }[] };
  languages: { heading: string; items: { name: string; level: string }[] };
  contact: {
    heading: string[];
    body: string;
    email: string;
    links: { label: string; href: string }[];
  };
  footer: { note: string; backToTop: string };
  caseStudy: {
    back: string;
    problem: string;
    constraints: string;
    system: string;
    decisions: string;
    tradeoff: string;
    evidence: string;
    status: string;
    screens: string;
    previous: string;
    next: string;
    stack: string;
    role: string;
    year: string;
    type: string;
  };
  details: Record<string, CaseStudyCopy>;
};
