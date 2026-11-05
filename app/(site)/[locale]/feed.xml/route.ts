import { getDictionary, isLocale, locales } from "@/content";
import { getArticle, getArticles } from "@/lib/articles";
import { OWNER, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not found", { status: 404 });

  const dict = getDictionary(locale);
  const items = getArticles(locale)
    .map((meta) => {
      const article = getArticle(locale, meta.slug)!;
      const url = absoluteUrl(`/${locale}/articles/${meta.slug}/`);
      return `    <item>
      <title>${escape(meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${meta.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(meta.description)}</description>
${meta.tags.map((tag) => `      <category>${escape(tag)}</category>`).join("\n")}
      <content:encoded><![CDATA[${article.html.replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escape(`${dict.articles.metaTitle} – ${OWNER.shortName}`)}</title>
    <link>${absoluteUrl(`/${locale}/articles/`)}</link>
    <atom:link href="${absoluteUrl(`/${locale}/feed.xml`)}" rel="self" type="application/rss+xml" />
    <description>${escape(dict.articles.metaDescription)}</description>
    <language>${locale === "id" ? "id-ID" : "en"}</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
