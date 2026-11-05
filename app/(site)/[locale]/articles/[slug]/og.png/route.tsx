import { isLocale, locales } from "@/content";
import { getArticle, getArticleSlugs } from "@/lib/articles";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.flatMap((locale) => getArticleSlugs().map((slug) => ({ locale, slug })));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const article = getArticle(isLocale(locale) ? locale : "en", slug);
  return ogImage({
    title: article?.title ?? slug,
    kicker: article?.tags.join(" · ") ?? "",
    footer: `Naufal Firoos · ${article?.date ?? ""}`,
    tone: "ink",
  });
}
