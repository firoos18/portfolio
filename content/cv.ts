import type { Locale } from "./types";

/**
 * CV-only copy. Roles, education, skills, and languages come from the site dictionaries;
 * this file holds what a CV needs on top: the summary, bullets per role, and project lines.
 * Same rule as the site: no metric or claim that is not confirmed.
 */
export type CvCopy = {
  documentTitle: string;
  headings: {
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    languages: string;
  };
  summary: string;
  /** Keyed by organisation name as it appears in the experience dictionary. */
  bullets: Record<string, string[]>;
  projects: { name: string; context: string; period: string; bullets: string[]; link?: string }[];
  download: string;
  downloadHint: string;
};

export const cv: Record<Locale, CvCopy> = {
  en: {
    documentTitle: "Naufal Firoos Asy Syarif – CV",
    headings: {
      summary: "Summary",
      skills: "Skills",
      experience: "Work Experience",
      projects: "Projects",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Full-stack developer in Yogyakarta, Indonesia, building systems end to end: Next.js and React interfaces, .NET and Node.js APIs, PostgreSQL data models, and Docker and Kubernetes deployments. Co-founder of drunkcode.dev, a small software studio. Currently doing R&D on an AI-driven development workflow with Claude Code and omp, with human review at every handoff from planning to end-to-end testing.",
    bullets: {
      "Berijalan Technocenter": [
        "Build a digital e-signature platform with Next.js, Express.js, PostgreSQL, and Docker, covering contract signing end to end.",
        "Integrated third-party identity verification alongside company SSO and MFA.",
        "Built a React Native and NestJS field-survey app with photo capture, geolocation, and push notifications.",
        "Migrated a legacy application to Next.js and Express.js using atomic design.",
      ],
      IDCamp: ["Completed the Flutter learning path through Dicoding: three courses with five-star and four-star assessments."],
      "Bangkit Academy": ["Trained in Android development with Kotlin; built the capstone Teman Tanam, a crop-advisory app."],
    },
    projects: [
      {
        name: "Infinity Gym",
        context: "drunkcode.dev",
        period: "2026 – Present",
        bullets: [
          "Gym management platform: .NET 10 modular monolith API with PostgreSQL, JWT in HttpOnly cookies, and revocable sessions in Redis.",
          "Next.js 16 admin CMS with a token-based design system and permission-driven navigation.",
          "Directed an AI coding agent (omp) to build the mobile-first member app from design frames, reviewing every change against the design and the API contract.",
        ],
      },
      {
        name: "DMS Platform",
        context: "Public site, CMS, and LMS",
        period: "2026",
        link: "dev-dms.byros.dev",
        bullets: [
          ".NET 10 modular monolith with Identity, Content, Catalog, and Learning modules; PostgreSQL 17 and MinIO for media.",
          "Next.js 16 public site, admin CMS, and learner dashboard; TipTap content sanitized on save and on render.",
        ],
      },
      {
        name: "Tempo",
        context: "Time tracking, approvals, and invoicing",
        period: "2026",
        link: "dev-tempo.byros.dev",
        bullets: [
          ".NET 10 minimal API with workspace-scoped multi-tenancy, a timesheet approval state machine, and transactional outbox email.",
          "Next.js 15 and React 19 client with a separate client portal; deployed to a k3s homelab cluster.",
        ],
      },
    ],
    download: "Download CV",
    downloadHint: "PDF",
  },
  id: {
    documentTitle: "Naufal Firoos Asy Syarif – CV",
    headings: {
      summary: "Ringkasan",
      skills: "Keahlian",
      experience: "Pengalaman Kerja",
      projects: "Proyek",
      education: "Pendidikan",
      languages: "Bahasa",
    },
    summary:
      "Full-stack developer di Yogyakarta, Indonesia, yang membangun sistem dari ujung ke ujung: antarmuka Next.js dan React, API .NET dan Node.js, model data PostgreSQL, serta deployment Docker dan Kubernetes. Co-founder drunkcode.dev, sebuah studio perangkat lunak kecil. Saat ini melakukan R&D tentang alur kerja pengembangan berbasis AI dengan Claude Code dan omp, dengan review manusia di setiap serah terima dari perencanaan sampai pengujian end-to-end.",
    bullets: {
      "Berijalan Technocenter": [
        "Membangun platform tanda tangan digital dengan Next.js, Express.js, PostgreSQL, dan Docker, mencakup penandatanganan kontrak dari awal sampai akhir.",
        "Mengintegrasikan verifikasi identitas pihak ketiga bersama SSO dan MFA perusahaan.",
        "Membangun aplikasi survei lapangan React Native dan NestJS dengan foto, geolokasi, dan push notification.",
        "Memigrasikan aplikasi lama ke Next.js dan Express.js dengan atomic design.",
      ],
      IDCamp: ["Menyelesaikan jalur belajar Flutter melalui Dicoding: tiga kursus dengan penilaian bintang lima dan empat."],
      "Bangkit Academy": ["Belajar pengembangan Android dengan Kotlin; membangun capstone Teman Tanam, aplikasi pendamping petani."],
    },
    projects: [
      {
        name: "Infinity Gym",
        context: "drunkcode.dev",
        period: "2026 – Sekarang",
        bullets: [
          "Platform manajemen gym: API modular monolith .NET 10 dengan PostgreSQL, JWT di cookie HttpOnly, dan sesi yang bisa dicabut di Redis.",
          "CMS admin Next.js 16 dengan design system berbasis token dan navigasi berbasis izin.",
          "Mengarahkan agen AI (omp) membangun aplikasi member mobile-first dari frame desain, dengan review setiap perubahan terhadap desain dan kontrak API.",
        ],
      },
      {
        name: "DMS Platform",
        context: "Situs publik, CMS, dan LMS",
        period: "2026",
        link: "dev-dms.byros.dev",
        bullets: [
          "Modular monolith .NET 10 dengan modul Identity, Content, Catalog, dan Learning; PostgreSQL 17 dan MinIO untuk media.",
          "Situs publik, CMS admin, dan dashboard peserta dengan Next.js 16; konten TipTap disanitasi saat disimpan dan saat ditampilkan.",
        ],
      },
      {
        name: "Tempo",
        context: "Pencatatan waktu, persetujuan, dan invoice",
        period: "2026",
        link: "dev-tempo.byros.dev",
        bullets: [
          "Minimal API .NET 10 dengan multi-tenancy per workspace, state machine persetujuan timesheet, dan email lewat transactional outbox.",
          "Klien Next.js 15 dan React 19 dengan portal klien terpisah; di-deploy ke klaster k3s homelab.",
        ],
      },
    ],
    download: "Unduh CV",
    downloadHint: "PDF",
  },
};
