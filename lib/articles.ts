import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";
import { locales, type Locale } from "@/content";

/**
 * Articles live in content/articles/<locale>/<slug>.md, one file per locale, same slug in both.
 * Front matter (a small YAML subset):
 *
 *   ---
 *   title: "Why Redis owns the session"
 *   description: "120–160 characters for search results and share cards."
 *   date: 2026-11-05
 *   tags: [auth, redis, dotnet]
 *   draft: true
 *   ---
 *
 * Drafts never build. A published slug must exist in every locale, and a published body may not
 * contain "[CHECK: ...]" review markers, or the build fails.
 */

export type ArticleMeta = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  readingMinutes: number;
};

export type Article = ArticleMeta & { html: string };

const ROOT = path.join(process.cwd(), "content", "articles");
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const markdown = new Marked({
  gfm: true,
  renderer: {
    // Posts arrive through automation; raw HTML is shown as text, never rendered.
    html({ text }) {
      return escapeHtml(text);
    },
    link({ href, title, tokens }) {
      const label = this.parser.parseInline(tokens);
      const safe = /^(https?:|mailto:|\/|#)/i.test(href) ? href : "#";
      const external = /^https?:/i.test(safe) ? ' rel="noopener"' : "";
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      return `<a href="${escapeHtml(safe)}"${titleAttr}${external}>${label}</a>`;
    },
    image({ href, title, text }) {
      const safe = /^(https?:|\/)/i.test(href) ? href : "";
      if (!safe) return escapeHtml(text);
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      return `<img src="${escapeHtml(safe)}" alt="${escapeHtml(text)}"${titleAttr} loading="lazy" />`;
    },
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type FrontMatter = Record<string, string | string[] | boolean>;

function parseFrontMatter(source: string, file: string): { data: FrontMatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(source);
  if (!match) throw new Error(`${file}: missing front matter`);

  const data: FrontMatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const pair = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line);
    if (!pair) throw new Error(`${file}: cannot read front matter line "${line}"`);
    const [, key, raw] = pair;
    const value = raw.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => unquote(item.trim()))
        .filter(Boolean);
    } else if (value === "true" || value === "false") {
      data[key] = value === "true";
    } else {
      data[key] = unquote(value);
    }
  }
  return { data, body: match[2] };
}

function unquote(value: string): string {
  const double = /^"([\s\S]*)"$/.exec(value);
  if (double) return double[1].replace(/\\(["\\])/g, "$1");
  return value.replace(/^'([\s\S]*)'$/, "$1");
}

function readLocale(locale: Locale): Article[] {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const slug = name.replace(/\.md$/, "");
      const file = `content/articles/${locale}/${name}`;
      if (!SLUG.test(slug)) throw new Error(`${file}: slug must be lowercase-kebab-case`);

      const { data, body } = parseFrontMatter(fs.readFileSync(path.join(dir, name), "utf8"), file);
      if (data.draft !== true && body.includes("[CHECK:")) {
        throw new Error(`${file}: resolve the [CHECK: ...] markers before publishing`);
      }
      const title = data.title;
      const description = data.description;
      const date = data.date;
      if (typeof title !== "string" || !title) throw new Error(`${file}: title is required`);
      if (typeof description !== "string" || !description) throw new Error(`${file}: description is required`);
      if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error(`${file}: date must be YYYY-MM-DD`);
      }

      return {
        slug,
        locale,
        title,
        description,
        date,
        updated: typeof data.updated === "string" ? data.updated : undefined,
        tags: Array.isArray(data.tags) ? data.tags : [],
        draft: data.draft === true,
        readingMinutes: Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200)),
        html: markdown.parse(body, { async: false }) as string,
      };
    })
    .filter((article) => !article.draft);
}

let cache: Record<Locale, Article[]> | null = null;

function load(): Record<Locale, Article[]> {
  if (cache) return cache;

  const byLocale = Object.fromEntries(locales.map((locale) => [locale, readLocale(locale)])) as Record<
    Locale,
    Article[]
  >;

  const [first, ...rest] = locales;
  const expected = new Set(byLocale[first].map((a) => a.slug));
  for (const locale of rest) {
    const actual = new Set(byLocale[locale].map((a) => a.slug));
    const missing = [...expected].filter((slug) => !actual.has(slug)).map((slug) => `${locale}/${slug}`);
    const extra = [...actual].filter((slug) => !expected.has(slug)).map((slug) => `${first}/${slug}`);
    if (missing.length || extra.length) {
      throw new Error(
        `Published articles must exist in every locale. Missing: ${[...missing, ...extra].join(", ")}`,
      );
    }
  }

  for (const locale of locales) {
    byLocale[locale].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  }

  cache = byLocale;
  return cache;
}

export function getArticles(locale: Locale): ArticleMeta[] {
  return load()[locale].map((article) => ({
    slug: article.slug,
    locale: article.locale,
    title: article.title,
    description: article.description,
    date: article.date,
    updated: article.updated,
    tags: article.tags,
    readingMinutes: article.readingMinutes,
  }));
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return load()[locale].find((article) => article.slug === slug);
}

export function getArticleSlugs(): string[] {
  return load()[locales[0]].map((article) => article.slug);
}
