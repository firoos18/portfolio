import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/content";
import { ArticleList, formatDate } from "@/components/ArticleList";
import { Arrow } from "@/components/Arrow";
import { Header } from "@/components/Header";
import { getArticle, getArticles, getArticleSlugs } from "@/lib/articles";
import { OWNER, absoluteUrl, alternatesFor, jsonLd, ogLocale } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

const frame = "mx-auto w-full max-w-[1440px] px-[clamp(16px,4vw,56px)]";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getArticleSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getArticle(locale, slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    alternates: alternatesFor(locale, `/articles/${slug}/`),
    openGraph: {
      title: article.title,
      description: article.description,
      locale: ogLocale[locale],
      type: "article",
      url: `/${locale}/articles/${slug}/`,
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [OWNER.name],
      tags: article.tags,
      images: [{ url: `/${locale}/articles/${slug}/og.png`, width: 1200, height: 630, alt: article.title }],
    },
    twitter: { card: "summary_large_image", images: [`/${locale}/articles/${slug}/og.png`] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const article = getArticle(locale, slug);
  if (!article) notFound();

  const labels = getDictionary(locale).articles;
  const others = getArticles(locale).filter((item) => item.slug !== slug).slice(0, 2);
  const url = absoluteUrl(`/${locale}/articles/${slug}/`);
  const structured = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    inLanguage: locale,
    keywords: article.tags.join(", "),
    mainEntityOfPage: url,
    url,
    image: absoluteUrl(`/${locale}/articles/${slug}/og.png`),
    author: { "@type": "Person", name: OWNER.name, url: absoluteUrl(`/${locale}/`) },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structured) }} />
      <div className="bg-ink pt-3">
        <div className={frame}>
          <Header locale={locale} tone="dark" />
        </div>
      </div>

      <main id="main">
        <article>
          <header className="bg-ink text-on-dark">
            <div className={`${frame} pb-[clamp(48px,7vw,96px)] pt-[clamp(40px,6vw,80px)]`}>
              <Link
                href={`/${locale}/articles/`}
                className="label inline-flex min-h-11 items-center gap-2 text-on-dark-soft transition-colors duration-200 hover:text-accent-on-dark"
              >
                <Arrow direction="left" />
                {labels.back}
              </Link>
              <h1 className="display mt-6 max-w-[18ch] text-[clamp(3rem,8vw,7.5rem)]">{article.title}</h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.15rem,1.8vw,1.4rem)] leading-snug text-on-dark-soft">
                {article.description}
              </p>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-on-dark pt-4 text-sm">
                <div>
                  <dt className="label text-on-dark-soft">{labels.published}</dt>
                  <dd className="tabnum mt-1">
                    <time dateTime={article.date}>{formatDate(locale, article.date)}</time>
                  </dd>
                </div>
                {article.updated ? (
                  <div>
                    <dt className="label text-on-dark-soft">{labels.updated}</dt>
                    <dd className="tabnum mt-1">
                      <time dateTime={article.updated}>{formatDate(locale, article.updated)}</time>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="label text-on-dark-soft">{labels.minutes}</dt>
                  <dd className="tabnum mt-1">{article.readingMinutes}</dd>
                </div>
                {article.tags.length ? (
                  <div>
                    <dt className="label text-on-dark-soft">{labels.tags}</dt>
                    <dd className="mt-1">{article.tags.join(" · ")}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </header>

          <div className="bg-paper text-on-light">
            <div className={`${frame} py-[clamp(56px,8vw,112px)]`}>
              <div className="prose-article mx-auto max-w-[68ch]" dangerouslySetInnerHTML={{ __html: article.html }} />
            </div>
          </div>
        </article>

        {others.length ? (
          <section aria-labelledby="more-title" className="bg-ink text-on-dark">
            <div className={`${frame} py-[clamp(56px,8vw,112px)]`}>
              <h2 id="more-title" className="display text-[clamp(2.5rem,6vw,5rem)]">
                {labels.latest}
              </h2>
              <div className="mt-8">
                <ArticleList locale={locale} articles={others} labels={labels} tone="dark" />
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

