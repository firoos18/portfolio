# Articles and the n8n draft workflow

Articles are Markdown files in the repo. n8n only ever **opens a draft pull request**; a person reviews, edits, and merges it. Nothing reaches the site without a merge.

```
n8n form (topic + facts)
  → Claude (claude-opus-5-5) drafts EN + ID as JSON
  → n8n creates branch article/<slug>-<id>, adds both files, opens a draft PR
  → CI builds the PR (types, lint, static export)
  → you edit, resolve [CHECK: ...] markers, mark ready, merge
  → the host rebuilds from main
```

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
2. **Anthropic credential.** Create a *Header Auth* credential named `Anthropic API key`: name `x-api-key`, value your API key. Select it on the *Claude draft* node.
3. **GitHub credential.** Create a fine-grained personal access token limited to `firoos18/portfolio` with **Contents: read and write** and **Pull requests: read and write**. Create a *Header Auth* credential named `GitHub portfolio token`: name `Authorization`, value `Bearer <token>`. Select it on the five GitHub nodes.
4. Optional: set an n8n variable `PORTFOLIO_REPO` if the repo moves (default `firoos18/portfolio`).
5. **Activate** the workflow and open the form URL from the *Article form* node.

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
