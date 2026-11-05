import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Naufal Firoos – Full-stack developer",
    description:
      "Full-stack developer in Yogyakarta. Interfaces, APIs, data, and the infrastructure under them: a gym platform, a training platform, and a time-tracking tool built end to end.",
  },
  nav: {
    work: "Work",
    about: "About",
    process: "Process",
    articles: "Writing",
    experience: "Experience",
    contact: "Contact",
    skip: "Skip to content",
    home: "Home",
    primary: "Primary",
    language: "Language",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    firstName: "Naufal",
    lastName: "Firoos",
    name: "Naufal Firoos Asy Syarif",
    role: "Full-stack developer",
    basedLabel: "Based in",
    location: "Yogyakarta, Indonesia",
    timeLabel: "Local time",
    disciplinesLabel: "Disciplines",
    disciplines: ["Interface", "API", "Data", "Infrastructure", "Mobile"],
    statement:
      "I build systems from the interface down to the cluster they run on, and I write down the decisions that hold them together.",
    cta: "Email me",
    portraitAlt: "Portrait of Naufal Firoos",
  },
  about: {
    heading: "About",
    lead: "I build systems where the interface, the API, and the data model have to agree. Lately I also review what AI agents write before any of it ships.",
    paragraphs: [
      "At Berijalan Technocenter I work on a digital e-signature platform: contract signing end to end, identity verification, company SSO and MFA, and a React Native app for field surveyors who capture photos and locations on site.",
      "Right now I am doing R&D on an AI-driven development workflow. Agents draft the code, the tests, and the screenshots; I write the brief, set the constraints, read every diff, and decide what merges. The point is not to type less. It is to keep the same bar for architecture, security, and accessibility while the amount of code keeps going up. This portfolio is part of that work.",
      "Before that I trained as a mobile developer: Flutter and Kotlin at Bangkit Academy and IDCamp. Mobile taught me to treat an interface as a sequence of states a person moves through, not a set of components placed on a page. That habit carried into Next.js and React.",
      "Outside work I build the rest of the stack: .NET and PostgreSQL services, Python trading tools, and a k3s homelab managed by Argo CD. The case studies below are about the seams between those parts: how a membership becomes a state machine, how a failed email becomes a retry, how a deploy becomes a commit.",
    ],
  },
  work: {
    heading: "Selected work",
    intro:
      "Three systems carried end to end. Each case study covers the constraints, the decisions, and what is deliberately unfinished.",
    open: "Read case study",
    live: "Dev deployment",
    earlierHeading: "Earlier work",
    earlier: [
      {
        name: "SILAB",
        note: "Class management for the Information Systems laboratory",
        href: "https://github.com/firoos18/silab",
      },
      {
        name: "Teman Tanam",
        note: "Android crop advisory; Bangkit 2023 capstone",
        href: "https://github.com/firoos18/Capstone-Project",
      },
      {
        name: "Sehatin",
        note: "Diet meal ordering app",
        href: "https://github.com/firoos18/sehatin",
      },
      {
        name: "Rentzy",
        note: "Motorcycle rental app",
        href: "https://github.com/firoos18/Rentzy",
      },
    ],
  },
  process: {
    heading: "How I work",
    intro: "The same order on every project, whether the first screen exists yet or not.",
    steps: [
      {
        title: "Model",
        body: "Start with the data and the states it moves through. Memberships, timesheets, and courses are state machines before they are screens.",
      },
      {
        title: "Contract",
        body: "Fix the API shape early: one response envelope, typed errors, permissions checked on the server for every request.",
      },
      {
        title: "Interface",
        body: "Build screens against that contract. When the API lags, the client runs on mocked services with the same shapes, so swapping them is a body change.",
      },
      {
        title: "Ship",
        body: "Containers from the first commit, migrations that run on deploy, and a cluster that takes its state from Git.",
      },
    ],
  },
  experience: {
    heading: "Experience",
    roles: [
      {
        period: "Feb 2025 – Present",
        title: "Full Stack Developer",
        org: "Berijalan Technocenter",
        note: "Digital e-signature platform with Next.js, Express.js, PostgreSQL, and Docker; identity verification, SSO, and MFA. Built a React Native and NestJS field-survey app with photo capture, geolocation, and push notifications. Earlier: legacy migration to Next.js and Express, atomic design.",
      },
      {
        period: "Oct 2023 – Apr 2024",
        title: "Multi-Platform App Developer",
        org: "IDCamp",
        note: "Flutter learning path through Dicoding: three courses, five-star and four-star assessments.",
      },
      {
        period: "Feb 2023 – Jul 2023",
        title: "Mobile Developer",
        org: "Bangkit Academy",
        note: "Android with Kotlin; capstone Teman Tanam, a crop-advisory app.",
      },
    ],
    educationLabel: "Education",
    education: {
      period: "Aug 2020 – Dec 2024",
      title: "Bachelor's degree, Information Systems",
      org: "Universitas Ahmad Dahlan",
      note: "GPA 3.85. Software engineering, algorithms, mobile development, and UI/UX.",
    },
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        label: "Interface",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "React Native",
          "Expo",
          "Tailwind CSS",
          "Flutter",
          "Kotlin / Jetpack Compose",
        ],
      },
      {
        label: "API & data",
        items: [
          "NestJS",
          "Express.js",
          "Node.js",
          "C# / .NET 10",
          "ASP.NET Core",
          "Python",
          "PostgreSQL",
          "PL/pgSQL",
          "MongoDB",
          "Firebase",
        ],
      },
      {
        label: "Infrastructure",
        items: [
          "Docker",
          "k3s",
          "Argo CD",
          "Traefik",
          "Helm",
          "Kustomize",
          "GitHub Actions",
          "Woodpecker",
        ],
      },
      {
        label: "Practice",
        items: [
          "SSO / MFA",
          "HTML Canvas",
          "Firebase Cloud Messaging",
          "xUnit",
          "Playwright",
          "GitOps",
          "Accessibility",
          "AI-assisted development and review",
        ],
      },
    ],
  },
  languages: {
    heading: "Languages",
    items: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Limited working" },
      { name: "Deutsch", level: "A1" },
    ],
  },
  contact: {
    heading: ["Let's work", "together"],
    body: "Email is the fastest way to reach me. Send the problem, the constraints, and the timeline; I will reply with what I can do.",
    email: "itsfiroos@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/firoos18" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/" },
    ],
  },
  articles: {
    heading: "Writing",
    intro: "Notes from the systems on this site: the decisions, what they cost, and what I would change.",
    latest: "Latest writing",
    all: "All articles",
    read: "Read article",
    back: "All articles",
    published: "Published",
    updated: "Updated",
    minutes: "min read",
    tags: "Tags",
    feed: "RSS feed",
    empty: "No articles yet.",
    metaTitle: "Writing",
    metaDescription: "Articles by Naufal Firoos on building full-stack systems: .NET, Next.js, PostgreSQL, infrastructure, and reviewing AI-written code.",
  },
  footer: {
    note: "Built with Next.js. Content lives in version control.",
    backToTop: "Back to top",
  },
  caseStudy: {
    back: "All work",
    problem: "Problem",
    constraints: "Constraints",
    system: "System",
    decisions: "Decisions",
    tradeoff: "Tradeoff",
    evidence: "Evidence",
    status: "Status",
    screens: "Screens",
    previous: "Previous",
    next: "Next project",
    stack: "Stack",
    role: "Role",
    year: "Year",
    type: "Type",
  },
  details: {
    "infinity-gym": {
      name: "Infinity Gym",
      category: "Platform · API, admin, member app",
      summary: "Gym management: a .NET API, an admin CMS, a mobile-first member app, and a bilingual landing page.",
      role: "Full-stack developer at drunkcode.dev",
      problem:
        "A gym runs memberships, freezes, classes, personal training, lockers, payments, and check-in. Staff need one admin surface for all of it, and members need one app on their phone instead of a front desk and a chat thread.",
      constraints: [
        "One domain model for members, subscriptions, payments, attendance, and training, even where the API does not expose it yet.",
        "Sessions must be revocable: signing out or changing a password ends access everywhere, not when a token expires.",
        "The admin menu is driven by permissions, so staff only see what their role allows.",
        "The member app had to cover every flow in the design before the API existed for it.",
      ],
      system: [
        {
          title: "API",
          body: ".NET 10 modular monolith with Admin and Members modules over one shared domain and one PostgreSQL DbContext. Thin controllers, concrete services, typed exceptions mapped by a global handler.",
        },
        {
          title: "Auth",
          body: "JWT access and refresh tokens in HttpOnly cookies, with the session truth in Redis: active sessions, hashed refresh tokens, and a blacklist of revoked token IDs. Permissions are string policies checked per endpoint.",
        },
        {
          title: "Admin CMS",
          body: "Next.js 16 and React 19 with its own token-based design system. Each backend module maps to a vertical slice: page, organism, hook, TanStack Query wrapper, and a server-side API service.",
        },
        {
          title: "Member app and landing",
          body: "A mobile-first Next.js member app covering onboarding, check-in QR, classes, personal training, lockers, and membership payment, built on mocked services with the API's shapes. The landing page is Next.js with next-intl, Indonesian first.",
        },
      ],
      decisions: [
        {
          title: "Modular monolith, one database",
          body: "Two modules, one host, one DbContext. Modules never reference each other; they meet only in the shared domain.",
          tradeoff: "Boundaries are kept by project references and review, not by the network.",
        },
        {
          title: "Redis owns the session",
          body: "Tokens prove identity; Redis decides whether the session still exists. Revocation is a key delete, not a wait for expiry.",
          tradeoff: "Every authenticated request depends on Redis being up.",
        },
        {
          title: "One slice per backend module",
          body: "The CMS mirrors the API: one folder per module with the same three service files. A new endpoint has an obvious home.",
          tradeoff: "More files per feature, and the shape has to be kept even for small screens.",
        },
        {
          title: "Mock first, same shapes",
          body: "The member app's services return the API's response shapes from a shared in-browser store, so screens and states can be finished before the endpoints exist.",
          tradeoff: "Nothing persists yet; the integration work is still ahead.",
        },
      ],
      status:
        "Built with the drunkcode.dev team; in development. Auth, menus, and members are live in the API; subscriptions, payments, attendance, and training exist as entities and seed data; the member app runs on mocked services. Private repositories.",
      evidence: [{ label: "Private repositories" }],
    },
    "dms-platform": {
      name: "DMS Platform",
      category: "Platform · Public site, CMS, LMS",
      summary: "A public site, CMS, and learning platform for a training business.",
      role: "Design and build",
      problem:
        "A training business ran its public site, course catalogue, and learner records in separate places. The platform joins them: one public site, one CMS for editors, and a learning dashboard for participants.",
      constraints: [
        "Three roles with different visibility: editor, reviewer, and administrator.",
        "Rich text is stored as TipTap JSON and sanitized on save and on render.",
        "Indonesian and English content from the same records.",
        "Payments were out of scope for the first release; the data model had to leave room for them.",
      ],
      system: [
        {
          title: "API",
          body: ".NET 10 modular monolith with Identity, Content, Catalog, and Learning modules. ASP.NET Identity with short-lived JWTs and rotating refresh tokens; FluentValidation on every input.",
        },
        {
          title: "Content",
          body: "PostgreSQL 17 for structured content, MinIO for media with presigned URLs. Landing sections, banners, articles, and course records share one audit trail.",
        },
        {
          title: "Clients",
          body: "Next.js 16 for the public site, the admin CMS, and the learner dashboard. shadcn/ui primitives with an atomic component structure; security headers set in the Next config.",
        },
      ],
      decisions: [
        {
          title: "Modular monolith, not services",
          body: "One deployable with explicit module boundaries. Content and Learning can be extracted later without changing the API contract.",
          tradeoff: "Module discipline is enforced by review, not the network.",
        },
        {
          title: "Sanitize twice",
          body: "TipTap JSON is sanitized when saved and again when rendered. Stored content is never trusted.",
          tradeoff: "Rendering costs more; a poisoned record cannot reach a reader.",
        },
        {
          title: "Admin is desktop-only",
          body: "The CMS assumes a 1440px workspace and collapses its rail to icons. The public site and learner dashboard are responsive.",
          tradeoff: "Editors cannot publish from a phone; the editing surface stays legible.",
        },
        {
          title: "DTOs only",
          body: "No entity ever crosses the HTTP boundary. Overposting is impossible by construction.",
          tradeoff: "More mapping code per feature.",
        },
      ],
      status: "MVP in progress, running on a dev deployment. Private repositories.",
      evidence: [
        { label: "Dev deployment: dev-dms.byros.dev", href: "https://dev-dms.byros.dev" },
        { label: "Private repositories" },
      ],
    },
    tempo: {
      name: "Tempo",
      category: "Product · API and web app",
      summary: "Time tracking, approvals, and invoicing for small studios, in one workspace.",
      role: "Design and build",
      problem:
        "Freelancers and agencies track hours in one tool, approve them in another, and invoice from a third. Tempo joins the loop: projects, tasks, timesheets, approvals, invoices, and a client portal in one place.",
      constraints: [
        "The architecture split had to preserve every route, status code, and JSON shape.",
        "Migration history stays linear; no rewrites of shipped migrations.",
        "Multi-workspace permissions with server-side checks on every endpoint.",
        "One deploy target: the homelab k3s cluster, served through a single ingress.",
      ],
      system: [
        {
          title: "API",
          body: ".NET 10 minimal API split into Domain, Shared, Application, Infrastructure, and Api. Business rules are static classes with unit tests; handlers use EF Core directly, with no repository layer.",
        },
        {
          title: "Data and jobs",
          body: "PostgreSQL with EF Core migrations applied at startup behind an advisory lock. An outbox dispatcher handles email; an overdue sweep marks invoices. Timesheet approval is a state machine, not a status field.",
        },
        {
          title: "Client",
          body: "Next.js 15 App Router with React 19, Tailwind v4, and Radix primitives. The client portal and internal workspace share components but not permissions.",
        },
      ],
      decisions: [
        {
          title: "Rules in static classes, not services",
          body: "Invoice totals, time rounding, and the task state machine are pure functions. Integration tests cover the HTTP contract; unit tests cover the arithmetic and transitions.",
          tradeoff: "Less indirection, but handlers must stay thin or the rules leak into them.",
        },
        {
          title: "Outbox instead of direct email",
          body: "Writes commit a message in the same transaction as the business change. A dispatcher retries outside the request.",
          tradeoff: "One more table and a background worker to operate.",
        },
        {
          title: "One workspace per request",
          body: "CurrentWorkspace is resolved once and required by every endpoint. There is no ambient tenant in the database connection.",
          tradeoff: "Every query must carry the workspace predicate; tests enforce it.",
        },
        {
          title: "Migrations on startup",
          body: "A Postgres advisory lock serializes migrations across replicas. Deploys stay one step.",
          tradeoff: "A bad migration takes the API down with it; the lock only prevents races.",
        },
      ],
      status: "Running on a dev deployment from the homelab k3s cluster. Screenshots use a demo workspace. Private repository.",
      evidence: [
        { label: "Dev deployment: dev-tempo.byros.dev (sign-in required)", href: "https://dev-tempo.byros.dev" },
        { label: "Private repository" },
        { label: "GitHub profile", href: "https://github.com/firoos18" },
      ],
    },
  },
};
