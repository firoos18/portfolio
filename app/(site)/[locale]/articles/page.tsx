import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/content";
import { ArticleList } from "@/components/ArticleList";
import { Arrow } from "@/components/Arrow";
import { Header } from "@/components/Header";
import { getArticles } from "@/lib/articles";
import { alternatesFor, ogLocale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const frame = "mx-auto w-full max-w-[1440px] px-[clamp(16px,4vw,56px)]";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { articles } = getDictionary(locale);

  return {
    title: articles.metaTitle,
    description: articles.metaDescription,
    alternates: {
      ...alternatesFor(locale, "/articles/"),
      types: { "application/rss+xml": `/${locale}/feed.xml` },
    },
    openGraph: {
      title: articles.metaTitle,
      description: articles.metaDescription,
      locale: ogLocale[locale],
      type: "website",
      url: `/${locale}/articles/`,
      images: [{ url: `/${locale}/og.png`, width: 1200, height: 630, alt: articles.metaTitle }],
    },
    twitter: { card: "summary_large_image", images: [`/${locale}/og.png`] },
  };
}

export default async function ArticlesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const list = getArticles(locale);

  return (
    <>
      <div className="bg-ink pt-3">
        <div className={frame}>
          <Header locale={locale} tone="dark" />
        </div>
      </div>
      <main id="main" className="bg-ink text-on-dark">
        <div className={`${frame} pb-[clamp(80px,12vw,176px)] pt-[clamp(40px,6vw,80px)]`}>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h1 className="display text-[clamp(4.5rem,15vw,14rem)] md:col-span-8">{dict.articles.heading}</h1>
            <div className="md:col-span-4">
              <p className="max-w-[44ch] text-on-dark-soft">{dict.articles.intro}</p>
              <a
                href={`/${locale}/feed.xml`}
                className="label mt-4 inline-flex min-h-11 items-center gap-2 text-on-dark-soft underline decoration-ink-line underline-offset-4 transition-colors duration-200 hover:text-accent-on-dark"
              >
                {dict.articles.feed}
                <Arrow direction="up-right" />
              </a>
            </div>
          </div>
          <div className="mt-[clamp(40px,6vw,80px)]">
            <ArticleList locale={locale} articles={list} labels={dict.articles} tone="dark" />
          </div>
        </div>
      </main>
    </>
  );
}
