# Antislop Delivery Gate

Mode: during. Run: 2026-11-02. Target: portfolio home and five case studies, EN/ID.

## Block 1: Hard Gate

| Rule | Status | Evidence |
|---|---|---|
| R-02 em dash | PASS | `grep -ro "—" out` returns 0; UI uses en dashes for date ranges. |
| R-03 mobile | PASS | 0 horizontal overflow at 320/390/768/1024/1440 on /en, /id, and case pages. |
| R-17 statistics | PASS | No unsourced statistics. GPA 3.85 comes from the LinkedIn export/CV. |
| R-18 testimonials | PASS | No testimonials section. |
| R-23 assets | PASS | No avatar or photo invented. `app/icon.svg` is documented as a placeholder. |
| R-24 navbar | PASS | All nav anchors resolve; 15 static routes return 200. |
| R-25 contrast | PASS | Rendered-text contrast audit: 0 failures at 4.5:1 / 3:1. |
| R-26 dead controls | PASS | Every control is a native link with a real href; no fake buttons or forms. |
| R-27 states | PASS | Static site with no async data; custom 404 at `out/404.html`. |
| R-28 FAQ | PASS | No FAQ section. |
| R-32 keyboard | PASS | Skip link first on Tab, 2px focus ring, nav/station/prev-next clicked. |
| R-33 patching | PASS | No external scripts or CSS patches; all behavior in source. |
| R-34 theme toggle | PASS | No toggle; light theme is the committed decision. |
| R-35 built and clicked | PASS | `npm run build` passed; served `out/`; click-through recorded below. |
| R-36 claims | PASS | Unverified "production", "running", and "available on request" claims removed. |
| R-37 direction | PASS | Survey direction, seed, and dials recorded in DESIGN.md. |
| R-38 fabricated content | PASS | Facts trace to the LinkedIn PDF, CV, or local repositories. |
| R-39 semantics and motion | PASS | Native links, lang per locale, title, header/main/footer, reduced motion, no zoom block. |
| R-40 media and performance | PASS | No media; fonts via next/font; no third-party scripts; no reported metrics. |

Click-through: nav anchor → `#work`; ST-02 → `/en/work/tempo/`; next → `/en/work/dms-platform/`; language switch → `/id/`; GitHub → 200; 404 renders with title and lang.

## Block 2: Purpose Gate

| Rule | Status | Evidence |
|---|---|---|
| R-01 gradients and glow | PASS | None used. |
| R-04 icons | PASS | No icon set; only directional arrows. |
| R-06 type and labels | PASS | Source Serif 4 + Archivo with a written survey-sheet reason. |
| R-07 background grid | PASS | None; the traverse carries the survey language. |
| R-08 arrows | PASS | Arrows are wayfinding only and documented in DESIGN.md. |
| R-09 capsule badges | PASS | None. |
| R-10 glass | PASS | None. |
| R-12 shadows | PASS | None; depth comes from rules. |
| R-13 glow | PASS | None. |
| R-14 feature cards | PASS | None; work uses ruled rows, not cards. |
| R-19 template animations | PASS | One authored traverse draw; state changes are 200ms. |
| R-22 generic illustrations | PASS | None. |

## Block 3: Liveliness

| Check | Status | Evidence |
|---|---|---|
| Dials explicit | PASS | ENERGY 4 / RHYTHM 4 / MOTION 3 in DESIGN.md. |
| Output matches dials | PASS | Varied section structures; one bold traverse; quiet state changes. |
| Focal point per screen | PASS | Hero title block plus traverse; case-study headline. |
| Structural whitespace | PASS | Section rules and spacing scale, not leftover gaps. |
| One accent | PASS | Survey orange only for active station, focus, links. |
| Identity motif | PASS | Station codes, traverse, title block, ruled sheets. |
| Design Read declared | PASS | Audience, mechanism, cultural home, scene in DESIGN.md. |

## Block 4: Craftsmanship and Quality Locks

| Check | Status | Evidence |
|---|---|---|
| C-1 Intentionality | PASS | Palette, type, composition, and motion have written reasons. |
| C-2 Functional completeness | PASS | All links work; no dead controls. |
| C-3 Content-driven composition | PASS | Sections come from capability evidence, no template sections. |
| C-4 Resilience | PASS | Breakpoints, reduced motion, 404; no async states to break. |
| C-5 Evidence over claims | PASS | Five case studies trace to LinkedIn or local repos. |
| R-05 layout | PASS | No hero+cards, bento, fake terminal, or three-step template. |
| R-11 radius | PASS | Square corners throughout. |
| R-15 CTA | PASS | "Read the survey", "Open sheet", "Email" are specific actions. |
| R-16 buzzwords | PASS | No "seamless", "powerful", "next-generation" copy. |
| R-20 identity | PASS | Specific palette, type, and traverse composition. |
| R-21 theme | PASS | Light field-sheet scene chosen deliberately; documented. |
| R-29 palette | PASS | Two cores (paper, ink) plus one accent. |
| R-30 cloning | PASS | No popular-product clone. |
| R-31 reasons written | PASS | DESIGN.md records palette, type, layout, motion, and arrow reasons. |

Result: **PASS**.
