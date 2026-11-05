# DESIGN

Visual system and direction contract for the portfolio. `PRODUCT.md` owns product truth; this file owns durable visual decisions. Surface: home and case studies.

## Design Read

- Audience: hiring managers and engineering leads screening a full-stack engineer, plus clients checking whether one person can carry a system end to end.
- Mechanism: five shipped systems plotted as one traverse, each with constraints and decisions, not a gallery of screenshots.
- Cultural home: the surveyor's field book. Measured sheets, station codes, a title block, one traverse line, annotations in the margin.
- Scene: a desk in daylight, a printed sheet next to a browser tab. Light ground, ink, one survey-orange mark.

Dials: **ENERGY 4/5** (confident, not loud), **RHYTHM 4/5** (title block, ruled rows, two-column prose, tables, inline lists), **MOTION 3/5** (one authored traverse draw, quiet state changes).

## Direction contract

**THESIS.** The portfolio is a surveyor's field book: the work is plotted, measured, and annotated, and the visitor reads the traverse of a career rather than a stack of cards. It refuses the category default of a dark hero, a logo wall, and identical project cards.

**OWN-WORLD.** Lichen field paper, ink, and one burnt survey-orange used only for the active station and measured marks. 1px rules and double rules form the sheet; a title block carries the owner's details the way a survey sheet carries its datum. Source Serif 4 sets names and prose; Archivo sets labels, navigation, and tabular data. No shadows, no rounded cards, no textures or faux paper.

**STORY.** The visitor sees five stations on a traverse, each a shipped system, then opens the sheet for the one that matches their need. They leave knowing the range — interface, API, data, infrastructure, mobile roots — and with a direct way to make contact.

**FIRST VIEWPORT.** A full-height survey sheet. Top-left title block: name, role, location, datum line, and contact links. Centre-right: the traverse with five labelled stations and measured segments. A short serif statement sits beside it, not as a centred hero. The primary action opens the work index; every station is named in the first viewport, so the work leads before any scrolling.

**FORM.** Code-led, not comp-led. The world is carried by layout, rules, type, and one SVG traverse; no painted poster, no image dependency. Seed: `seed:525959a689b0164e`. Risk: a survey motif can become costume; every mark must encode a real project, date, or link.

## Palette

| Token | Value | Use |
|---|---|---|
| `--paper` | `#E2E3D6` | Page ground |
| `--paper-2` | `#D5D7C7` | Hover wash, inset fields |
| `--ink` | `#1B211C` | Headings, body |
| `--ink-soft` | `#4A544A` | Secondary text, metadata |
| `--line` | `#9BA492` | Rules, decorative only, never body text |
| `--line-strong` | `#6F7A6D` | Frame and table rules where contrast matters |
| `--accent` | `#A93B17` | Active station, focus, links, measured marks |
| `--accent-ink` | `#FFF8F0` | Text on accent fills (rare) |

Contrast: ink/paper 12.8:1, ink-soft/paper 6.0:1, accent/paper 4.9:1. Line colors are never used for text.

## Type

- Display and prose: **Source Serif 4** (400, 600, italic 400). Loaded via `next/font/google`, subsets `latin`, `latin-ext`.
- Labels, navigation, data: **Archivo** (400, 500, 600). Uppercase labels at `.75rem`, tracking `.08em`.
- Scale:
  - display `clamp(2.75rem, 6.4vw, 5.5rem)` / line-height `.96` / tracking `-0.03em`
  - h2 `clamp(1.9rem, 3.4vw, 3rem)` / `1.05`
  - h3 `1.35rem` / `1.25`
  - body `1.0625rem` / `1.65`, measure `66ch`
  - small `0.875rem` / `1.5`
- Numerals: `font-variant-numeric: tabular-nums` for dates, station codes, measurements.
- No monospace anywhere except literal code identifiers in case studies.

## Grid and spacing

- Max width `1200px`; outer margin `clamp(20px, 5vw, 72px)`.
- 12 columns, `24px` gutter; content may span 7–9 columns, annotations sit in the outer 3.
- Spacing scale `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- More space above a heading than below. Sections separated by a `1px` rule plus `clamp(64px, 9vw, 128px)` padding.

## Components

- **Title block** — `1px` frame, internal rules, fields: name, role, location, datum, sheet. No rounded corners.
- **Station marker** — 9px ring with crosshair; accent for the current station. Always paired with a text label.
- **Traverse** — single SVG path connecting five stations with measured segments. Decorative (`aria-hidden`); the real navigation is the station list.
- **Station row** — full-width ruled row: code, name, one-line problem, stack, year, arrow. Hover washes `--paper-2` and thickens the bottom rule to `2px` accent. No card container, no shadow.
- **Experience table** — ruled rows; dates in Archivo tabular, role in serif, organization in soft ink.
- **Skill ledger** — definition list with four groups; comma-separated, not logo tiles.
- **Language switch** — `EN / ID` text links; current locale `aria-current="page"`, other locale in soft ink.
- **Primary action** — text link with `→`, accent underline offset `0.25em`. No filled pill buttons.
- **Footer** — repeat of the title block fields plus year and source link.

## States

- Hover: `--paper-2` wash or accent underline; `200ms` ease-out.
- Focus-visible: `2px` accent ring, `3px` offset, on all links and the skip link.
- Active/pressed: accent text, no transform.
- Selection: accent background, `--accent-ink` text.
- Caret and scrollbar: ink on paper; themed where practical.

## Motion

One authored moment: the traverse path draws once on first load (`900ms`, `cubic-bezier(.16,1,.3,1)`), stations fade in with a `90ms` stagger. Under `prefers-reduced-motion: reduce`, everything renders in its final state and smooth scrolling is off. All other transitions are `200ms` state changes; only opacity and transform animate. Motion follows `animation-micro-interaction-pack`: purpose, GPU-safe properties, reduced-motion fallback.

## Responsive

- `≥1024px`: title block left, traverse right, margin annotations visible.
- `768–1023px`: single column; traverse above the station rows; annotations fold into the body.
- `<768px`: title block full width, statement, then a vertical route list. The SVG is hidden; the route list carries the same labels and links. No horizontal scroll at `320px`.
- Touch targets ≥ `44px` for rows and links.

## Purpose notes

- Uppercase tracked labels are the sheet's metadata voice, not decoration: they carry station codes, dates, and stack names.
- Arrows are wayfinding, not ornament. `→` marks a traversable row, `↗` marks an external destination, `←`/`→` move between stations, `↓` moves to the work index. They are the only repeated glyph and always pair with a real link.
- `app/icon.svg` is a placeholder survey mark. Replace it with a personal mark before launch; it is not a finished identity asset.
- No background grid: the traverse and rules carry the survey language, so graph paper would be redundant texture.

## Rules

- No eyebrows/kickers above headings.
- No gradient text, decorative glass, glow, or icon+heading+text card grids.
- No shadows; depth comes from rules.
- No section numbers unless the sequence is meaningful; station codes are content and stay.
- No fake paper texture, torn edges, compass roses, or stock surveyor imagery.
- Do not add a portrait as a background; if one arrives, treat it as a tipped-in plate with a caption.

## Content voice

First person, declarative, no adjectives that cannot be evidenced. Case studies state the problem, the constraints, the decisions and their tradeoffs, and what is deliberately unfinished. Labels name their action.
