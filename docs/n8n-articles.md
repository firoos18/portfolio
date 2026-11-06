# Articles and the n8n draft workflow

Articles are Markdown files in the repo. n8n only ever **opens a draft pull request**; a person reviews, edits, and merges it. Nothing reaches the site without a merge.

The workflow has two entry points that share the same exit:

```
A. Article form (any time)            B. Every Monday 08:00 WIB
   topic + your facts                    Google News: gym, tech, quant (last 7 days)
        │                                + Hacker News best + existing article slugs
        │                                      │
        ▼                                      ▼
   Claude drafts EN + ID                 Claude picks ONE trend that connects to your
   from your facts only                  confirmed work, reads the sources with web
        │                                search, drafts EN + ID with a Sources section
        └──────────────┬───────────────────────┘
                       ▼
   n8n: branch article/<slug>-<id>, both files, DRAFT pull request
   → CI builds the PR → you review, edit, merge → Cloudflare rebuilds
```

Regenerate the importable JSON after editing `scripts/n8n-workflow.mjs`: `npm run n8n`.

## Weekly trend drafts

- **Areas:** gym and training, software and AI tooling, quant and algorithmic trading. Edit the search queries in `scripts/n8n-workflow.mjs` (`news(...)`).
- **Picking rule:** a trend only qualifies if it connects honestly to your confirmed work (the `PROFILE` block in the script). It skips topics already covered, celebrity news, promotions, price predictions, and rumours.
- **Sources:** Claude must read at least two sources with web search and list them under `## Sources` / `## Sumber`. They are also listed in the PR body with a "why now" line.
- **Personal claims:** only from `PROFILE`. No invented lifts, returns, anecdotes, or numbers; anything unconfirmed becomes `[CHECK: ...]`, which CI refuses to publish.
- **Safety notes added automatically:** quant posts end with a not-financial-advice line; gym posts end with a not-medical-advice line (both languages).
- **Keep `PROFILE` current.** When something new is true (a new project, a German level, a training milestone you are happy to share), add it there and run `npm run n8n`; otherwise the drafts cannot mention it.
- **Web search** must be allowed for your API organisation (Claude Console → settings). If a run stops with "paused mid-research", run it again.
- Cost is higher than a form draft because of web search and a longer answer: roughly USD 0.30–0.60 per weekly draft at Opus 5.5 prices, plus search fees.
- To pause the weekly drafts, deactivate the *Every Monday* node; the form keeps working.

## File format

`content/articles/<locale>/<slug>.md`, same slug in `en` and `id`:

```md
---
title: "Why Tempo sends email through an outbox"
description: "120–160 characters. Used for search snippets, share cards, and the RSS feed."
date: 2026-11-05
updated: 2026-11-20      # optional
tags: [dotnet, postgresql]
draft: true              # optional; drafts never build
---

Body in Markdown, no H1. Use ## for sections.
```

The build fails on purpose when:

- a published slug exists in one locale but not the other,
- front matter is missing a title, description, or `YYYY-MM-DD` date,
- a published body still contains a `[CHECK: ...]` marker.

Raw HTML in a post is shown as text, never rendered. Links must be `http(s):`, `mailto:`, relative, or `#anchors`.

Each published article gets: `/<locale>/articles/<slug>/`, a generated share image at `.../og.png`, `BlogPosting` structured data, an entry in `/sitemap.xml` with hreflang alternates, an item in `/<locale>/feed.xml`, and a slot in the home page "Writing" section.

## Set up the workflow

1. **Import** `docs/n8n/article-draft.workflow.json` in n8n (Workflows → Import from file).
2. **Anthropic credential.** Create a *Header Auth* credential named `Anthropic API key`: name `x-api-key`, value your API key. Select it on *Claude draft* and *Claude trend draft*.
3. **GitHub credential.** Create a fine-grained personal access token limited to `firoos18/portfolio` with **Contents: read and write** and **Pull requests: read and write**. Create a *Header Auth* credential named `GitHub portfolio token`: name `Authorization`, value `Bearer <token>`. Select it on the six GitHub nodes (including *Existing articles*).
4. Optional: set an n8n variable `PORTFOLIO_REPO` if the repo moves (default `firoos18/portfolio`).
5. **Activate** the workflow. The form URL is on the *Article form* node; the weekly run starts on the next Monday 08:00 WIB (run *Every Monday* manually once to test it).

The Claude request uses structured output (`output_config.format` with a JSON schema), `effort: high`, and `fallbacks: "default"` (beta header `server-side-fallback-2026-07-01`) so a safety decline is retried on Anthropic's recommended fallback model instead of failing. A request can take a few minutes; the node timeout is 10 minutes. The *Build files* node stops the run on a refusal or a `max_tokens` cut-off.

## Review checklist (also in every PR body)

- Every fact is true and yours to share. The prompt forbids invented metrics, clients, and outcomes, and asks Claude to mark doubts as `[CHECK: ...]`, but the review is the real gate.
- EN and ID say the same thing.
- Title and description read well as a search result.
- No `[CHECK: ...]` markers remain (CI fails if they do).

Write from your own systems. Thin or generic posts published at volume can be treated as scaled content abuse by Google and hurt the whole domain, portfolio included.

## Deploying (host not chosen yet)

The site is a static export in `out/`. Any host that builds on push works; it must set:

- `NEXT_PUBLIC_SITE_URL=https://byros.dev` (the default; set it for preview deploys to their own URL if wanted)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>` once Search Console gives you one

**Vercel:** import the repo, framework Next.js, production branch `main`, add the domain `byros.dev` and redirect `www`. **Cloudflare Pages:** build command `npm run build`, output directory `out`, Node 24.

After the first deploy: verify the domain in Google Search Console and submit `https://byros.dev/sitemap.xml`, then update the website field on GitHub and LinkedIn to `https://byros.dev`.
