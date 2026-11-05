import type { Locale } from "@/content";

/** Public origin. Override per deploy with NEXT_PUBLIC_SITE_URL (no trailing slash). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://byros.dev").replace(/\/$/, "");

export const OWNER = {
  name: "Naufal Firoos Asy Syarif",
  shortName: "Naufal Firoos",
  email: "itsfiroos@gmail.com",
  sameAs: ["https://github.com/firoos18", "https://www.linkedin.com/in/naufal-firoos-asy-syarif/"],
};

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Canonical and hreflang alternates for a path that exists in every locale, e.g. "/work/tempo/". */
export function alternatesFor(locale: Locale, path = "/") {
  const suffix = path === "/" ? "/" : path;
  return {
    canonical: `/${locale}${suffix}`,
    languages: {
      en: `/en${suffix}`,
      id: `/id${suffix}`,
      "x-default": `/en${suffix}`,
    },
  };
}

export const ogLocale: Record<Locale, string> = { en: "en_US", id: "id_ID" };

/** Serialises JSON-LD for a <script> tag without letting "</script>" through. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
