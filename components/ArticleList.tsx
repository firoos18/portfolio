import Link from "next/link";
import type { Dictionary, Locale } from "@/content";
import type { ArticleMeta } from "@/lib/articles";
import { Arrow } from "./Arrow";

type Props = {
  locale: Locale;
  articles: ArticleMeta[];
  labels: Dictionary["articles"];
  tone: "dark" | "light";
};

export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function ArticleList({ locale, articles, labels, tone }: Props) {
  const soft = tone === "dark" ? "text-on-dark-soft" : "text-on-light-soft";
  const rule = tone === "dark" ? "border-ink-line" : "border-paper-line";
  const hover = tone === "dark" ? "hover:text-accent-on-dark" : "hover:text-accent-on-light";

  if (articles.length === 0) {
    return <p className={soft}>{labels.empty}</p>;
  }

  return (
    <ol className={`border-t ${tone === "dark" ? "border-on-dark" : "border-on-light"}`}>
      {articles.map((article) => (
        <li key={article.slug} className={`border-b ${rule}`}>
          <Link
            href={`/${locale}/articles/${article.slug}/`}
            className={`group grid gap-3 py-6 transition-colors duration-200 md:grid-cols-12 md:gap-6 ${hover}`}
          >
            <span className={`label tabnum md:col-span-2 md:pt-2 ${soft}`}>
              <time dateTime={article.date}>{formatDate(locale, article.date)}</time>
            </span>
            <span className="md:col-span-7">
              <span className="display block text-[clamp(1.9rem,3.4vw,3rem)] leading-[0.95]">{article.title}</span>
              <span className={`mt-3 block max-w-[62ch] ${soft}`}>{article.description}</span>
            </span>
            <span className={`label flex items-center gap-3 md:col-span-3 md:justify-end md:pt-2 ${soft}`}>
              {article.readingMinutes} {labels.minutes}
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
