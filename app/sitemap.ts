import type { MetadataRoute } from "next";
import { locales, projects } from "@/content";
import { getArticles } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

function entry(path: string, lastModified?: string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(`/${locale}${path}`)]));
  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}${path}`),
    lastModified,
    alternates: { languages },
  }));
}

/** Every page in every locale, each listing its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles("en");
  const latest = articles[0]?.updated ?? articles[0]?.date;

  return [
    ...entry("/"),
    ...projects.flatMap((project) => entry(`/work/${project.slug}/`)),
    ...entry("/articles/", latest),
    ...articles.flatMap((article) => entry(`/articles/${article.slug}/`, article.updated ?? article.date)),
  ];
}
