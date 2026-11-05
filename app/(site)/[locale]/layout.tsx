import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../../globals.css";

const serif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
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
    title: {
      default: dict.meta.title,
      template: `%s – Naufal Firoos`,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "en" ? "en_US" : "id_ID",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link">
          {getDictionary(locale).nav.skip}
        </a>
        <div id="top" />
        <Header locale={locale} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
