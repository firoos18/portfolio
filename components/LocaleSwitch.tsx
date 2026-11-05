"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content";

type Props = {
  locale: Locale;
  label: string;
};

export function LocaleSwitch({ locale, label }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "";

  return (
    <div className="flex items-center gap-2" aria-label={label} role="group">
      {locales.map((candidate, index) => {
        const current = candidate === locale;

        return (
          <span key={candidate} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-ink-soft">
                /
              </span>
            ) : null}
            <Link
              href={`/${candidate}${rest}`}
              hrefLang={candidate}
              aria-current={current ? "true" : undefined}
              className={`label inline-flex min-h-11 min-w-11 items-center justify-center py-3 text-center transition-colors duration-200 ${
                current
                  ? "text-ink"
                  : "text-ink-soft hover:text-accent"
              }`}
            >
              {candidate.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
