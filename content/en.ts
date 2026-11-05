import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Naufal Firoos – Full-stack engineer",
    description:
      "Full-stack engineer in Yogyakarta. Interface, API, data, and infrastructure: five systems built end to end.",
    ogAlt: "Naufal Firoos, full-stack engineer – survey sheet portfolio",
  },
  nav: {
    work: "Work",
    about: "About",
    experience: "Experience",
    contact: "Contact",
    skip: "Skip to content",
    home: "Home",
    primary: "Primary",
    language: "Language",
  },
  hero: {
    name: "Naufal Firoos Asy Syarif",
    role: "Full-stack engineer",
    location: "Yogyakarta, Indonesia",
    datumLabel: "Datum",
    datumValue: "Information Systems, Universitas Ahmad Dahlan",
    sheetLabel: "Sheet",
    sheetValue: "Portfolio / 2026",
    statement:
      "I build systems from the interface down to the cluster they run on, and I document the decisions that hold them together.",
    availability: "Full-stack and platform work, from interface to cluster.",
    primary: "Read the survey",
    links: [
      { label: "Email", href: "mailto:itsfiroos@gmail.com" },
      { label: "GitHub", href: "https://github.com/firoos18", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
        external: true,
      },
    ],
    traverseCaption: "Five stations, one traverse: interface, API, data, infrastructure.",
  },
  work: {
    heading: "Selected work",
    intro:
      "Five systems, each carried end to end. Open a sheet for the constraints, the decisions, and what is deliberately unfinished.",
    open: "Open sheet",
    stackLabel: "Stack",
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
  about: {
    heading: "About",
    paragraphs: [
      "I build software where the interface, the API, and the data model have to agree. At Berijalan Technocenter that is a digital e-signature platform: contract signing end to end, identity verification, company SSO and MFA, and a React Native app for field surveyors who capture photos and locations on site.",
      "Before that I trained as a mobile developer: Flutter and Kotlin at Bangkit Academy and IDCamp. Mobile taught me to treat an interface as a sequence of states a person moves through, not a set of components placed on a page. That habit carried into Next.js and React.",
      "Outside work I build the rest of the stack: .NET and PostgreSQL services, Python trading tools, and a k3s homelab managed by Argo CD. The case studies below are about the seams between those parts: how a state machine becomes a row on screen, how a failed email becomes a retry, how a deploy becomes a commit.",
    ],
  },
  experience: {
    heading: "Experience",
    intro: "Roles that matter for the work above, newest first.",
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
    intro: "Grouped by where the evidence sits, not by logo.",
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
    heading: "Contact",
    body: "Email is the fastest way to reach me. Send the problem, the constraints, and the timeline; I will reply with what I can do.",
    emailLabel: "itsfiroos@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/firoos18" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
      },
    ],
  },
  footer: {
    note: "Portfolio of Naufal Firoos Asy Syarif.",
    built: "Built with Next.js. Content lives in version control, not a CMS.",
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
    previous: "Previous station",
    next: "Next station",
    stack: "Stack",
    role: "Role",
    year: "Year",
  },
  details: {
    "e-signature": {
      name: "E-signature platform",
      summary: "Contract signing end to end, from identity check to a signed document.",
      role: "Full-stack developer",
      problem:
        "Contract signing moved between paper, email, and storage. The platform makes the flow digital: prepare a contract, verify the signer, capture a signature, and keep an auditable record, on the web and in the field.",
      constraints: [
        "Company-managed SSO and MFA, plus a third-party identity-verification provider.",
        "Signatures are drawn in the browser and must work with a mouse, trackpad, and touch.",
        "The field-survey app needs photo capture, geolocation, and push notifications.",
        "Existing identity providers had to integrate without creating a second login.",
      ],
      system: [
        {
          title: "Web",
          body: "Next.js on the client, Express.js on the API, PostgreSQL for contracts and signatures, Docker for identical environments.",
        },
        {
          title: "Identity",
          body: "Third-party identity verification sits beside company SSO and MFA. Authentication is centralized; the signing flow never owns a password.",
        },
        {
          title: "Signature capture",
          body: "An HTML Canvas surface records the drawn signature and submits it with the contract, so the signer never uploads a scan.",
        },
        {
          title: "Field app",
          body: "React Native for surveyors, NestJS for its API. Photos, geolocation, and Firebase Cloud Messaging keep field work and the office in the same record.",
        },
      ],
      decisions: [
        {
          title: "Draw the signature, do not upload it",
          body: "Canvas capture keeps the signature tied to the signing session and removes a file-upload step.",
          tradeoff: "Input handling across pointer, touch, and stylus needs its own testing.",
        },
        {
          title: "Central identity, no local accounts",
          body: "SSO and MFA stay with the company identity provider; the platform only consumes the result.",
          tradeoff: "The platform inherits every outage and policy change of that provider.",
        },
        {
          title: "One API for web and field",
          body: "NestJS serves the mobile app while Express.js keeps the existing web API contract.",
          tradeoff: "Two Node frameworks in one product; the boundary has to stay deliberate.",
        },
        {
          title: "Docker from the first commit",
          body: "Every service runs in the same container shape locally and in deployment.",
          tradeoff: "Image builds add a step to every dependency change.",
        },
      ],
      status: "Platform at Berijalan Technocenter. Private codebase.",
      evidence: [
        {
          label: "LinkedIn profile",
          href: "https://www.linkedin.com/in/naufal-firoos-asy-syarif/",
        },
      ],
    },
    tempo: {
      name: "Tempo",
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
      status: "Deployment target: homelab k3s cluster. Private repository.",
      evidence: [
        { label: "Private repository" },
        { label: "GitHub profile", href: "https://github.com/firoos18" },
      ],
    },
    "dms-platform": {
      name: "DMS Platform",
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
      status: "MVP in progress. Private repositories.",
      evidence: [{ label: "Private repositories" }],
    },
    bericuan: {
      name: "Bericuan",
      summary: "A multi-strategy crypto futures engine with a monitoring dashboard.",
      role: "Design and build",
      problem:
        "Run several Binance USDT-M futures strategies on one host, with risk controls that act before a strategy does, and a dashboard that shows what the engine is doing without a second backend.",
      constraints: [
        "Python standard library only: no requests, pandas, or numpy.",
        "One host process with an in-process event bus.",
        "Testnet by default; a strategy cannot place orders before it passes a validity gate.",
        "Documentation lives only in docs/, with a folder-local index rule.",
      ],
      system: [
        {
          title: "Engine",
          body: "An event bus connects the screener, open-interest tracker, strategies, executor, and risk manager. Signals, entries, exits, rejects, and errors are separate events with exception boundaries.",
        },
        {
          title: "Venue",
          body: "Signed and unsigned REST calls to Binance Futures, with Cloudflare DNS-over-HTTPS and direct IP pinning to survive ISP DNS interference. Kline streams reconnect with exponential backoff.",
        },
        {
          title: "Risk and execution",
          body: "Circuit breakers on drawdown, position caps, a global single-position constraint, cooldowns, and volatility-parity sizing. Orders are place-first reduceOnly stop-loss and take-profit, with rollback on failure.",
        },
        {
          title: "Dashboard",
          body: "Next.js 15 App Router for multi-user Binance API login, positions, signals, and engine health. The engine stays the only source of truth.",
        },
      ],
      decisions: [
        {
          title: "Standard library over pandas",
          body: "Indicators and sizing are written directly against lists and dicts. The dependency surface stays small and deployable on any Python host.",
          tradeoff: "More code to own; slower research iteration.",
        },
        {
          title: "A validity gate before promotion",
          body: "A strategy must pass six layers of the research gate before it enters the live strategy list.",
          tradeoff: "Most ideas never ship; the ones that do are measurable.",
        },
        {
          title: "One live strategy",
          body: "The engine can run several, but only one is enabled on testnet. The others are closed empirically and kept for evidence.",
          tradeoff: "Less impressive surface area, more honest operations.",
        },
      ],
      status: "Testnet, one live strategy. Private repository.",
      evidence: [
        { label: "Private repository" },
        {
          label: "Public dashboard subset",
          href: "https://github.com/firoos18/signaldash",
        },
      ],
    },
    "homelab-gitops": {
      name: "Homelab GitOps",
      summary: "GitOps for the cluster that runs the rest of the work.",
      role: "Design and operate",
      problem:
        "The projects needed a place to run that behaved like production: reproducible deploys, ingress, secrets outside the repository, and a rollback path that did not depend on memory.",
      constraints: [
        "One k3s cluster on home hardware.",
        "No secrets in Git.",
        "Every application deployable from a commit, not a terminal session.",
      ],
      system: [
        {
          title: "Cluster",
          body: "k3s with Traefik as the ingress controller. Namespaces separate platform services from applications.",
        },
        {
          title: "Delivery",
          body: "Argo CD watches the repository. Helm charts for third-party services, Kustomize overlays for per-application configuration.",
        },
        {
          title: "Bootstrap",
          body: "A bootstrap directory installs Argo CD and hands the cluster to Git. After that, changes arrive as commits.",
        },
      ],
      decisions: [
        {
          title: "Git as the only source of truth",
          body: "Manual kubectl edits are treated as drift. Argo CD reconciles them away.",
          tradeoff: "A bad commit reaches the cluster quickly; review is the gate.",
        },
        {
          title: "Helm for upstream, Kustomize for ours",
          body: "Third-party charts stay close to upstream. Application overlays stay small and readable.",
          tradeoff: "Two templating tools to know.",
        },
        {
          title: "One ingress, many hosts",
          body: "Applications share Traefik and are separated by host and namespace.",
          tradeoff: "A single ingress misconfiguration affects everything.",
        },
      ],
      status: "Homelab cluster managed through Argo CD. Private repository.",
      evidence: [{ label: "Private repository" }],
    },
  },
};
