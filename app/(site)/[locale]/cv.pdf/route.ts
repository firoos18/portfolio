import { isLocale, locales } from "@/content";
import { renderCv } from "@/lib/cv-document";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not found", { status: 404 });

  const pdf = await renderCv(locale);
  return new Response(new Uint8Array(pdf), { headers: { "Content-Type": "application/pdf" } });
}
