import Link from "next/link";
import { getDictionary, type Locale } from "@/content";
import { LocaleSwitch } from "./LocaleSwitch";

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const dict = getDictionary(locale);
  const home = `/${locale}`;

  return (
    <header className="mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,72px)] pt-4">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line-strong pb-1">
        <Link
          href={home}
          className="inline-flex min-h-11 items-center font-serif text-lg transition-colors duration-200 hover:text-accent"
        >
          Naufal Firoos
        </Link>

        <nav
          aria-label={dict.nav.primary}
          className="order-3 flex w-full flex-wrap items-center gap-3 border-t border-line pt-1 sm:order-2 sm:w-auto sm:gap-6 sm:border-t-0 sm:pt-0"
        >
          <a href={`${home}/#work`} className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent">
            {dict.nav.work}
          </a>
          <a href={`${home}/#about`} className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent">
            {dict.nav.about}
          </a>
          <a href={`${home}/#experience`} className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent">
            {dict.nav.experience}
          </a>
          <a href={`${home}/#contact`} className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent">
            {dict.nav.contact}
          </a>
        </nav>

        <div className="order-2 sm:order-3">
          <LocaleSwitch locale={locale} label={dict.nav.language} />
        </div>
      </div>
    </header>
  );
}
