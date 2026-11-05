# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router, TypeScript), Tailwind CSS v4, static export. Bilingual EN/ID with route-based locales (`/en`, `/id`). Content lives in typed dictionaries under `content/`, not in JSX. Deploy target: any static host (Vercel/Netlify/Cloudflare Pages).

## Users

- Hiring managers and engineering leads screening a full-stack engineer, usually in under two minutes, on desktop and phone.
- Potential freelance clients or collaborators checking whether the owner can carry a system from interface to infrastructure.
- Peers evaluating depth: architecture decisions, tradeoffs, and shipped code, not marketing copy.

## Product Purpose

A personal portfolio for Naufal Firoos Asy Syarif. It exists to turn a cold visit into a qualified conversation by showing real, shipped systems and the decisions behind them. Success: a visitor understands the range (web, API, data, infrastructure, mobile roots) and has an obvious way to make contact.

## Positioning

An engineer who ships the whole system: the interface, the API, the data model, and the cluster it runs on. Mobile-native roots (Flutter, Kotlin) explain the interface discipline; current work spans .NET, Next.js, Python, Postgres, and a self-hosted Kubernetes homelab.

## Operating Context

The portfolio is read in a browser, often in a tab next to a CV or LinkedIn profile. Visitors skim headings, project names, and stack labels, then decide whether to open a case study. The owner edits content as projects ship, so content must be data, not markup. The site is static: no server, no database, no runtime secrets.

## Capabilities and Constraints

- Sections: hero, about, selected work (case studies), earlier work, process, experience, skills, languages, writing, contact.
- Languages: Indonesian (native), English (limited working), German (A1). German A1 is required content.
- Every case study states the problem, the constraints, the decisions, and the stack. No invented metrics, employers, clients, or outcomes.
- Experience is confirmed from the owner's LinkedIn profile export (`/Users/firoos/Downloads/Profile.pdf`): Full Stack Developer at Berijalan Technocenter, Feb 2025 — Present; IDCamp, Oct 2023 — Apr 2024; Bangkit Academy, Feb 2023 — Jul 2023. Education: Bachelor's degree, Information Systems, Universitas Ahmad Dahlan, Aug 2020 — Dec 2024. Do not invent dates or employers.
- Public contact: email `itsfiroos@gmail.com`, GitHub `firoos18`, LinkedIn `naufal-firoos-asy-syarif`. Phone number is intentionally omitted.
- Articles: Markdown in `content/articles/{en,id}/`, drafted through n8n as pull requests and published only after review (`docs/n8n-articles.md`). No testimonials, pricing, or newsletter.

## Brand Commitments

- Name: Naufal Firoos Asy Syarif. Short form: Naufal Firoos.
- Voice: direct, technical, calm; first person; no hype adjectives.
- Existing assets: GitHub avatar, real project repositories, LinkedIn profile.
- Bilingual parity is required: every visible string exists in EN and ID.

## Evidence on Hand

- LinkedIn profile export: `/Users/firoos/Downloads/Profile.pdf` (experience, education, languages, top skills).
- Repositories on this machine: `~/Documents/Infinity/` (gym platform: .NET 10 API, Next.js admin CMS, member app, landing page), `tempo/` (.NET 10 API + Next.js 15), `DMS/` (Next.js 16 web/CMS/LMS + .NET 10 API), `rsi-bot/` (Python engine + Next.js 15 dashboard), `homelab-gitops/` (k3s, Argo CD, Traefik, Helm, Kustomize), `project-planner/`, plus earlier Flutter/Kotlin apps in GitHub `firoos18`.
- GitHub profile: 57 public repos; oldest work is mobile (Flutter, Kotlin, Jetpack Compose).
- Absent: client names, production metrics, testimonials, and a current CV file. Do not fabricate them.

## Product Principles

1. Evidence over adjectives: every claim points to a repository, a running system, or a dated role.
2. Show the whole stack: interface, API, data, and operations in the same case study.
3. Skimmable first, deep second: two-minute scan, then optional depth per project.
4. Bilingual parity: EN and ID carry the same facts, never a shortened translation.
5. Fast and quiet: static output, no tracking, no decorative motion that blocks reading.

## Accessibility & Inclusion

WCAG 2.2 AA: keyboard-operable navigation and language switch, visible focus, 4.5:1 body contrast, reduced-motion support, semantic landmarks and headings, no color-only meaning.
