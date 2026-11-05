import { getDictionary, isLocale, locales, projects } from "@/content";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const copy = dict.details[slug];
  return ogImage({
    title: copy?.name ?? slug,
    kicker: copy?.category ?? "",
    footer: "Naufal Firoos · Case study",
    tone: "ink",
  });
}
