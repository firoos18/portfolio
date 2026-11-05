# DESIGN

Visual system and direction contract for the portfolio. `PRODUCT.md` owns product truth; this file owns durable visual decisions. Surfaces: home and case studies.

## Design Read

- Audience: hiring managers, engineering leads, and clients deciding in under two minutes whether one person can carry a system end to end.
- Mechanism: a loud, poster-scale first impression, then three real systems shown with their actual screens, constraints, and decisions.
- Reference: the owner's chosen inspiration, the "Matteo" motion-artist portfolio template on jiro.build (orange field, giant condensed uppercase type, dark and light bands, stacked work cards, big closing call to action). This site borrows the structure and attitude, not the template's assets, copy, or code.
- Scene: a recruiter's laptop or phone, between other tabs. The page has to be recognisable at a glance and readable at speed.

Dials: **ENERGY 5/5** (poster-scale type, saturated orange), **RHYTHM 4/5** (orange / paper / ink bands alternate), **MOTION 2/5** (one authored letter rise, sticky card stack, 200ms state changes).

## Direction contract

**THESIS.** Big type, one hot colour, real work. The name fills the first screen; the work is shown as actual screenshots in stacked cards; everything else is set small and precise so the display type can be loud.

**OWN-WORLD.** Three grounds: orange `#EE5F28` for the hero, contact, and "next project" bands; ink `#0D0E10` for work, experience, and decisions; warm paper `#ECE8E2` for reading sections. Big Shoulders (variable, opsz) sets every display line in uppercase at weight 800; Archivo sets body, labels, and data. Square corners, 1px rules, no shadows, no gradients, no glass.

**FIRST VIEWPORT.** Orange field. Top: name mark, navigation, language switch. Below it: "Based in" and a live local clock (WIB). Centre: first and last name at poster scale with the letter rise, role underneath. Bottom row: one-sentence statement, disciplines list, and an "Email me" block in ink. A portrait sits behind the type on the right when `portrait` is set in `content/types.ts`; until then the hero is type-only.

**STORY.** Hero → About (paper) → Selected work (ink, stacked sticky cards with screenshots) → How I work (paper, four numbered steps) → Experience, skills, languages (ink) → "Let's work together" (orange) → footer.

**FORM.** Code-led. Imagery is limited to real screenshots of the owner's projects and, later, the owner's own portrait. No stock photography, no invented testimonials, awards, or statistics, even though the reference template has them.

## Palette

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0D0E10` | Dark ground, text on orange and paper |
| `--ink-2` | `#18191C` | Raised dark surface (work cards) |
| `--ink-line` | `#34363B` | Rules on dark, decorative only |
| `--paper` | `#ECE8E2` | Light reading ground |
| `--paper-line` | `#B9B1A6` | Rules on paper, decorative only |
| `--orange` | `#EE5F28` | Hero, contact, next-project bands; hover fill |
| `--on-dark` / `--on-dark-soft` | `#F3EFE9` / `#A39D95` | Text on ink |
| `--on-light` / `--on-light-soft` | `#0D0E10` / `#5A544D` | Text on paper |
| `--on-orange` / `--on-orange-soft` | `#0D0E10` / `#3B1607` | Text on orange |
| `--accent-on-dark` | `#EE5F28` | Labels, links, numerals on ink |
| `--accent-on-light` | `#AD3C0C` | Numerals and accents on paper (orange fails there) |

Measured contrast: on-dark/ink 16.9, on-dark-soft/ink 7.2, on-dark-soft/ink-2 6.5, accent/ink 5.8, accent/ink-2 5.3, on-light/paper 15.8, on-light-soft/paper 6.1, accent-on-light/paper 5.0, on-orange/orange 5.8, on-orange-soft/orange 4.8. Line tokens are never used for text.

## Type

- Display: **Big Shoulders** variable, `opsz 72`, weight 800, uppercase, line-height `.84`. Class `.display`.
- Text: **Archivo** 400 / 500 / 600. Body `1.0625rem / 1.6`, measure ≤ 60ch.
- Labels: Archivo 600, `.75rem`, tracking `.08em`, uppercase. Class `.label`. Labels name data fields and lists; they never sit above a heading as an eyebrow.
- Scale (display): hero name `clamp(4.5rem, 26vw, 14rem)`; section titles `clamp(4rem, 12vw, 11rem)`; case-study title `clamp(4.5rem, 15vw, 14rem)`; contact `clamp(4.5rem, 15vw, 15rem)`; project names in cards `clamp(3rem, 7vw, 6.5rem)`. Poster-scale type is the brief, so it overrides the usual 6rem ceiling.
- Numerals: `tabular-nums` for dates, years, and step numbers.

## Layout

- Max width `1440px`; side padding `clamp(16px, 4vw, 56px)`; 12-column grid from `md`.
- Section padding `clamp(80px, 12vw, 176px)`. More space above a heading than below.
- Bands run full-bleed; content sits in the frame.

## Components

- **Header** — name mark, inline nav and `EN / ID` from `md`; below `md` a `<details>` menu (no JS) with a solid panel. Tone follows the band it sits on (`orange` on home, `dark` on case studies).
- **Hero clock** — `LocalTime` client component, Asia/Jakarta, renders `--:--:--` until hydrated.
- **Primary action** — solid rectangle (ink on orange, on-dark on ink), uppercase label, authored arrow SVG. No pills, no radius.
- **Work card** — `li.stack-card` with `--i` index; sticky from `md` so cards stack while scrolling, normal flow on phones. Left: category label, name, summary, year/role/stack, "Read case study". Right: two phone screens (mobile projects), one desktop window (web), or the decision titles when no screenshots exist.
- **Shot** — `next/image`, unoptimised, phone `390/844`, desktop `16/10`, `object-top`.
- **Process** — four steps, numbered because the order is the content.
- **Experience** — ruled rows: period, role (display), org (accent), note.
- **Case study** — dark header with meta row, orange screenshot band, paper reading section (problem, constraints, system), dark decisions list, remaining screens, status and evidence, orange "Next project" band.
- **Arrow** — one authored SVG, rotated for direction. No Unicode arrows.

## Motion

- One authored moment: the hero name's letters rise out of a clipped line on load (`.rise-letter`, 900ms, expo-out, 45ms stagger). Screen readers get the plain name.
- Sticky card stacking is layout, not animation.
- Everything else: colour or transform changes at 200ms.
- `prefers-reduced-motion`: letters render in place, smooth scrolling off, transitions near-instant.

## States

- Focus-visible: 2px `currentColor` outline, 3px offset, on every interactive element; skip link first in tab order.
- Hover: colour change or orange fill on dark buttons; no transforms on text.
- Selection: orange background, ink text. Caret orange. Scrollbar themed from on-dark-soft over ink.

## Assets

- `public/projects/<slug>/*.webp` — real screenshots, each under 60 KB. Infinity Gym: member app (captured from the mocked local build at 390×844 @2x). DMS: CMS screens from `dms-platform-cms/reports/rebuild-shots`. Tempo: none yet.
- Portrait: not provided yet. Set `portrait` in `content/types.ts` when it arrives.
