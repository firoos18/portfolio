# PLAN

Portfolio site for Naufal Firoos Asy Syarif. Scope lock for v1.

## 1. Objective

Turn a cold visit into a qualified conversation. A visitor should understand the range — interface, API, data, infrastructure, mobile roots — within two minutes and reach contact in one click.

## 2. Audience and job

- Hiring manager / engineering lead screening a full-stack engineer.
- Potential client or collaborator checking whether the owner can carry a system end to end.
- Peer checking depth: architecture, decisions, shipped code.

## 3. Information architecture

```
/                     language choice → /en
/en                   home
/en/work/infinity-gym  case study
/en/work/dms-platform
/en/work/tempo
/id/...               same routes, Indonesian
```

Home sections, in order (redesign, Nov 2026):

1. **Hero** (volt) — name at poster scale, role, based-in, live local time, statement, disciplines, black-and-white portrait, "Email me".
2. **About** (paper) — one large lead, four short paragraphs: Berijalan, AI-driven workflow R&D, mobile roots, the rest of the stack.
3. **Selected work** (ink) — three stacked sticky cards with real screenshots: Infinity Gym, DMS Platform, Tempo. Earlier mobile work as a compact list.
4. **How I work** (paper) — four steps: Model, Contract, Interface, Ship.
5. **Experience** (ink) — three dated roles plus education, then skills and languages.
6. **Writing** (paper) — latest three articles, link to the index.
7. **Contact** (volt) — "Let's work together", email, GitHub, LinkedIn.

Articles: `/<locale>/articles/` and `/<locale>/articles/<slug>/`, RSS at `/<locale>/feed.xml`. Drafts come from the n8n form as pull requests (`docs/n8n-articles.md`).

SEO: canonical + hreflang on every page, `sitemap.xml`, `robots.txt`, JSON-LD (Person, WebSite, CreativeWork per case study, BlogPosting per article), generated 1200×630 share images at `.../og.png`.

Case study template:

- Header: name, summary, year, role, type, stack.
- Screenshot band, then problem, constraints, system, decisions with tradeoffs, remaining screens, status and evidence.
- "Next project" band.

## 4. Content inventory

| Block | Status | Source |
|---|---|---|
| Name, role, location, email, GitHub, LinkedIn | Confirmed | LinkedIn export, GitHub |
| Education: UAD Information Systems, Aug 2020 — Dec 2024, GPA 3.85 | Confirmed | LinkedIn export, CV |
| Berijalan Technocenter, Full Stack Developer, Feb 2025 — Present | Confirmed | LinkedIn export |
| IDCamp, Oct 2023 — Apr 2024 | Confirmed | LinkedIn export |
| Bangkit Academy, Feb 2023 — Jul 2023 | Confirmed | LinkedIn export |
| E-signature platform | Confirmed; covered in Experience, no longer a case study | LinkedIn export |
| Tempo case study | Confirmed | `~/Documents/Personal/tempo` |
| DMS Platform case study | Confirmed | `~/Documents/Personal/DMS` |
| Infinity Gym case study | Confirmed: owner is part of drunkcode.dev; member-app authorship still to confirm | `~/Documents/Infinity` (drunkcode-dev org) |
| Earlier mobile work (SILAB, Teman Tanam, Sehatin, Rentzy) | Confirmed | old `works.json`, GitHub |
| German A1 | Confirmed by request | user |
| Current CV file | **Absent**; link removed until a current file exists | — |
| Case-study screenshots | Optional; design works without images | — |

Relevance filter: only roles, projects, and skills that help a hirer or client judge capability. Lab-assistant roles, high school, and course certificates are omitted. Berijalan's three internal role phases are combined into one tenure line.

Do not invent metrics, clients, or outcomes. Bericuan is testnet with one live strategy; say that.

## 5. Phases

### Phase 0 — Foundations

- `PRODUCT.md`, `AGENTS.md`, `DESIGN.md`, `PLAN.md`.
- Design direction: surveyor's field book (see `DESIGN.md`).
- Next.js 16 scaffold, bilingual content model, static export.

### Phase 1 — Home

- Title block, traverse, selected work, about, experience, skills, languages, contact.
- Locale switch and metadata for both locales.

### Phase 2 — Case studies

- Five detail routes with problem, constraints, system, decisions, evidence.
- Prev/next navigation, per-route metadata.

### Phase 3 — Content completion

- Add a current CV PDF if the owner provides one, then restore the download link.
- Add real screenshots per case study if provided.

### Phase 4 — Verification

- Build, static serve, 320/390/768/1024/1440 checks, keyboard and reduced-motion pass.
- `impeccable detect`, antislop Delivery Gate, contrast check.

## 6. Acceptance criteria

- `/en` and `/id` render every section with identical facts.
- Five case studies reachable and readable; no dead links.
- Language switch preserves the current route.
- No horizontal overflow at 320px; no layout shift from fonts.
- Keyboard: skip link, visible focus, language switch and station links operable.
- Contrast: body ≥ 4.5:1; large text ≥ 3:1; focus ring ≥ 3:1 against adjacent colors.
- Reduced motion: no traverse animation, no smooth scrolling.
- Build output is fully static; no runtime API calls.
- No invented facts.

## 7. Open decisions

- CV: no current file; link is removed rather than shipping the 2024 version.
- Photography: no portrait; the design works without one. A portrait can be added later as a tipped-in plate.
- Domain: `byros.dev`. Deploy target: not chosen yet (Vercel or Cloudflare Pages; see `docs/n8n-articles.md`).

## 8. Verification run (redesign, 2026-11-05)

- `npx tsc --noEmit` and `npm run lint` pass; `npm run build` emits 12 static routes (2 homes, 6 case studies, redirect, 404, icon).
- Served `out/` on `:4173`; home and every case study render in EN and ID.
- No horizontal overflow at 320 or 390 on any of the 8 locale routes.
- Contrast of every text/ground pairing ≥ 4.8:1 (see DESIGN.md).
- Skip link is first in tab order; mobile menu opens without JS; language switch keeps the route.
- `impeccable detect --json app components` returns no findings.
