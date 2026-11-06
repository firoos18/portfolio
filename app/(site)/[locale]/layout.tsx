import type { Metadata } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/content";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { motionBootScript } from "@/lib/motion-boot";
import { OWNER, SITE_URL, alternatesFor, ogLocale } from "@/lib/site";
import "lenis/dist/lenis.css";
import "../../globals.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  adjustFontFallback: false,
  display: "swap",
});

const sans = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s – ${OWNER.shortName}`,
    },
    description: dict.meta.description,
    applicationName: OWNER.shortName,
    authors: [{ name: OWNER.name, url: `${SITE_URL}/${locale}/` }],
    creator: OWNER.name,
    alternates: {
      ...alternatesFor(locale, "/"),
      types: { "application/rss+xml": `/${locale}/feed.xml` },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: OWNER.shortName,
      locale: ogLocale[locale],
      alternateLocale: locale === "en" ? ["id_ID"] : ["en_US"],
      type: "website",
      url: `/${locale}/`,
      images: [{ url: `/${locale}/og.png`, width: 1200, height: 630, alt: dict.meta.title }],
    },
    twitter: { card: "summary_large_image", images: [`/${locale}/og.png`] },
    robots: { index: true, follow: true },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    // The boot script adds the `motion` class before paint, so React must not fight over it.
    <html lang={locale} className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link">
          {getDictionary(locale).nav.skip}
        </a>
        <div id="top" />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
        <Motion />
      </body>
    </html>
  );
}
