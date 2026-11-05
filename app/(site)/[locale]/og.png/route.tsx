import { getDictionary, isLocale, locales } from "@/content";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return ogImage({
    title: `${dict.hero.firstName} ${dict.hero.lastName}`,
    kicker: `${dict.hero.role} · ${dict.hero.location}`,
    footer: dict.hero.disciplines.join(" · "),
    tone: "volt",
  });
}
