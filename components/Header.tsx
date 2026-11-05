import Link from "next/link";
import { getDictionary, type Locale } from "@/content";
import { LocaleSwitch } from "./LocaleSwitch";

type Props = {
  locale: Locale;
  tone: "volt" | "dark";
};

export function Header({ locale, tone }: Props) {
  const dict = getDictionary(locale);
  const home = `/${locale}`;
  const items = [
    { href: `${home}/#work`, label: dict.nav.work },
    { href: `${home}/#about`, label: dict.nav.about },
    { href: `${home}/#process`, label: dict.nav.process },
    { href: `${home}/articles/`, label: dict.nav.articles },
    { href: `${home}/#experience`, label: dict.nav.experience },
    { href: `${home}/#contact`, label: dict.nav.contact },
  ];
  const soft = tone === "volt" ? "text-on-volt-soft" : "text-on-dark-soft";
  const hover = tone === "volt" ? "hover:text-on-volt" : "hover:text-accent-on-dark";
  const panel = tone === "volt" ? "bg-ink text-on-dark" : "bg-on-dark text-ink";

  return (
    <header className="relative z-20 flex items-center justify-between gap-6">
      <Link href={home} className="display inline-flex min-h-11 items-center text-2xl">
        {dict.hero.firstName} {dict.hero.lastName}
      </Link>

      <nav aria-label={dict.nav.primary} className="hidden items-center gap-6 md:flex">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`label inline-flex min-h-11 items-center transition-colors duration-200 ${soft} ${hover}`}
          >
            {item.label}
          </a>
        ))}
        <LocaleSwitch locale={locale} label={dict.nav.language} tone={tone} />
      </nav>

      <details className="group relative md:hidden">
        <summary
          className={`label flex min-h-11 cursor-pointer list-none items-center px-4 [&::-webkit-details-marker]:hidden ${panel}`}
        >
          <span className="group-open:hidden">{dict.nav.menu}</span>
          <span className="hidden group-open:inline">{dict.nav.close}</span>
        </summary>
        <nav
          aria-label={dict.nav.primary}
          className={`absolute right-0 top-full mt-2 flex w-56 flex-col p-4 ${panel}`}
        >
          {items.map((item) => (
            <a key={item.href} href={item.href} className="display flex min-h-11 items-center text-3xl">
              {item.label}
            </a>
          ))}
          <div className="mt-3 border-t border-current/20 pt-2">
            <LocaleSwitch locale={locale} label={dict.nav.language} tone={tone === "volt" ? "dark" : "light"} />
          </div>
        </nav>
      </details>
    </header>
  );
}
