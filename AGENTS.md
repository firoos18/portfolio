# AGENTS.md

Project guide for the personal portfolio of Naufal Firoos Asy Syarif.

## Stack and commands

- Next.js 16 App Router, TypeScript, Tailwind CSS v4, static export (`output: "export"`).
- Node 24 / npm 11. No server runtime, no database, no secrets.
- `npm run dev` — local dev at http://localhost:3000
- `npm run build` — produces `out/`
- `npm run start` — serve the exported `out/` locally
- TypeScript stays on 6.x until typescript-eslint supports TypeScript 7.
- `npm run images` — after adding or replacing a WebP in `public/`, regenerate the 480/960 copies in `public/_v/` (served through `lib/image-loader.ts`). Commit them.
- `npm run lint` — `tsc --noEmit` plus Next lint when configured

## Structure

```
app/
  globals.css             tokens, base styles, motion
  icon.svg                placeholder mark
  (redirect)/
    layout.tsx            root layout for the language chooser
    page.tsx              meta refresh to /en
  (site)/
    [locale]/
      layout.tsx          root layout: fonts, lang, header/footer, metadata
      page.tsx            home
      work/[slug]/page.tsx  case study (+ og.png route)
      articles/             article index and [slug] pages (+ og.png route)
      feed.xml/route.ts     RSS per locale
      og.png/route.ts       home share image
      cv.pdf/route.ts       one-page ATS CV per locale (lib/cv-document.tsx, content/cv.ts)
  sitemap.ts, robots.ts   static SEO files
components/               shared UI (server components unless marked "use client")
content/                  typed dictionaries: profile, projects, experience, skills
content/articles/{en,id}/ Markdown articles, same slug in both locales
lib/                      site URL + SEO helpers, article loader, share-image renderer
docs/                     n8n article workflow (import JSON) and setup guide
public/projects/<slug>/   real project screenshots (WebP); portrait goes in public/ and is set in content/types.ts
public/_v/                generated responsive copies (npm run images)
public/_redirects         Cloudflare: / → /en/ (301)
PRODUCT.md                durable product truth (impeccable)
DESIGN.md                 visual system and direction contract
PLAN.md                   scope, phases, acceptance criteria
```

## Content rules

- Every visible string exists in both `content/en.ts` and `content/id.ts`. Never ship a key in one locale only.
- Articles ship in pairs (`content/articles/en/<slug>.md` and `id/<slug>.md`); the build fails otherwise, or if a `[CHECK: ...]` marker is left in a published post. Automated drafts arrive as pull requests and are merged only after review.
- No invented employers, dates, clients, metrics, testimonials, or outcomes. If a fact is unconfirmed, omit it or label it `Pending confirmation` in the data file, never in the rendered page.
- Project claims must be traceable to a repository under `~/Documents/Personal` or GitHub `firoos18`.
- Public contact: `itsfiroos@gmail.com`, GitHub `firoos18`, LinkedIn `naufal-firoos-asy-syarif`. Do not publish a phone number.
- Languages: Indonesian (native), English (intermediate), German (A1). German A1 is required.

## UI work

For any interface change:

1. Read `DESIGN.md` for direction and tokens. Do not invent a parallel palette or type scale.
2. Load the antislop core skill and `antislop-ui`; mode is **during** for this project. Run the Delivery Gate before reporting done.
3. Use `ui-ux-pro-max` for targeted UX checks (accessibility, responsive behavior, interaction) and `impeccable` for craft passes (`critique`, `audit`, `polish`).
4. Follow `impeccable/reference/craft-floor.md`. Absolute bans: kicker/eyebrow labels above headings, gradient text, decorative glass, icon+heading+text card grids as the page structure, hard offset shadows outside a neobrutalist world.

## Design constraints

- Mode: Experience. Work leads; chrome recedes.
- Visual world: poster-scale type on volt / ink / paper bands, inspired by the "Matteo" template on jiro.build (see `DESIGN.md`). Keep it. Do not add a second visual language.
- 1px rules, square corners, no shadows, no gradients; depth comes from the band colours.
- One fixed palette, no theme toggle; `color-scheme: light` for form controls.
- Motion: one authored moment (hero letter rise). Sticky work cards are layout, not animation. Everything else is instant or a 200ms state change. Honor `prefers-reduced-motion`. Do not add a Framer Motion dependency for what CSS already does.
- No testimonials, awards, or statistics, even though the reference template has them.
- WCAG 2.2 AA. Body text ≥ 4.5:1, large text ≥ 3:1. Keyboard reachable, visible focus, semantic landmarks.

## Bilingual routing

- `/` redirects to `/en`.
- Locales: `en`, `id`. `generateStaticParams` emits both for every route.
- Language switch links to the same path in the other locale and preserves the current page.
- `hreflang` alternate links and a canonical for every route; `<html lang>` matches the locale. Site origin comes from `NEXT_PUBLIC_SITE_URL` (default `https://byros.dev`).

## Verification

Before reporting done:

- `npm run build` passes and `out/` contains both locales and all case studies.
- Serve `out/` and check `/en`, `/id`, one case study, and the 390px layout.
- Check keyboard order, focus visible, reduced motion, and that no section overflows at 320px.
- Run `impeccable detect --json` over changed UI files and resolve findings that contradict `DESIGN.md`.
