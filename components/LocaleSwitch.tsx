"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/content";

type Props = {
  locale: Locale;
  label: string;
  tone: "volt" | "dark" | "light";
};

const tones = {
  volt: { current: "text-on-volt", other: "text-on-volt-soft hover:text-on-volt" },
  dark: { current: "text-on-dark", other: "text-on-dark-soft hover:text-accent-on-dark" },
  light: { current: "text-on-light", other: "text-on-light-soft hover:text-accent-on-light" },
};

export function LocaleSwitch({ locale, label, tone }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "";
  const colors = tones[tone];

  return (
    <div className="flex items-center gap-1" aria-label={label} role="group">
      {locales.map((candidate, index) => {
        const current = candidate === locale;

        return (
          <span key={candidate} className="flex items-center gap-1">
            {index > 0 ? (
              <span aria-hidden="true" className={colors.other}>
                /
              </span>
            ) : null}
            <Link
              href={`/${candidate}${rest}`}
              hrefLang={candidate}
              aria-current={current ? "page" : undefined}
              className={`label inline-flex min-h-11 min-w-9 items-center justify-center transition-colors duration-200 ${
                current ? colors.current : colors.other
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
