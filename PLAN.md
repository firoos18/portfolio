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
/en/work/e-signature  case study
/en/work/tempo
/en/work/dms-platform
/en/work/bericuan
/en/work/homelab-gitops
/id/...               same routes, Indonesian
```

Home sections, in order:

1. **Title block / hero** — name, role, location, availability, primary links, traverse diagram of the five stations.
2. **Selected work** — five ruled sheets: station code, name, one-line problem, stack, year, case study link.
3. **About** — three short paragraphs: current platform work, mobile roots, the rest of the stack.
4. **Experience** — three dated roles plus education.
5. **Skills** — grouped by evidence: Interface, API & data, Infrastructure, Practice.
6. **Languages** — Indonesian native, English limited working, German A1.
7. **Contact** — email, GitHub, LinkedIn.

Case study template:

- Sheet header: station code, project name, period, role, stack.
- Problem and constraints.
- System: how the pieces connect.
- Decisions worth defending: three to five, each with the tradeoff.
- Evidence: repository link or honest note, running status.
- Previous / next station.

## 4. Content inventory

| Block | Status | Source |
|---|---|---|
| Name, role, location, email, GitHub, LinkedIn | Confirmed | LinkedIn export, GitHub |
| Education: UAD Information Systems, Aug 2020 — Dec 2024, GPA 3.85 | Confirmed | LinkedIn export, CV |
| Berijalan Technocenter, Full Stack Developer, Feb 2025 — Present | Confirmed | LinkedIn export |
| IDCamp, Oct 2023 — Apr 2024 | Confirmed | LinkedIn export |
| Bangkit Academy, Feb 2023 — Jul 2023 | Confirmed | LinkedIn export |
| E-signature platform case study | Confirmed | LinkedIn export |
| Tempo case study | Confirmed | `~/Documents/Personal/tempo` |
| DMS Platform case study | Confirmed | `~/Documents/Personal/DMS` |
| Bericuan case study | Confirmed | `~/Documents/Personal/rsi-bot` |
| Homelab GitOps case study | Confirmed | `~/Documents/Personal/homelab-gitops` |
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
- Custom domain and deploy target: not chosen.

## 8. Verification run

- `npm run lint` passes; `npm run build` emits 16 static routes into `out/`.
- Served `out/` on `:4173`; `/en/`, `/id/`, five EN case studies, and `/id/work/e-signature/` return 200.
- `/` meta-refreshes to `/en/`; `/en` language switch lands on `/id/` and keeps the case-study route.
- No horizontal overflow at 320, 390, 768, 1024, or 1440 on home or case-study pages.
- Contrast audit over rendered text: 0 failures at AA thresholds.
- Keyboard: skip link appears on first Tab, focus ring 2px, station rows and prev/next links navigate.
- Reduced motion: traverse animation `none`, dash offset `0`, scroll behavior `auto`.
- `impeccable detect --json` returns no findings; no em dash remains in rendered HTML.
- Click-through: nav anchors, station row, next-station link, locale switch, and external GitHub links verified.

