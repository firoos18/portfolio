import Link from "next/link";
import { getDictionary, type Locale } from "@/content";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <footer className="mx-auto mt-[clamp(64px,9vw,128px)] w-full max-w-[1200px] px-[clamp(20px,5vw,72px)] pb-10">
      <div className="border-t border-line-strong pt-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg">{dict.hero.name}</p>
            <p className="label mt-1">{dict.footer.note}</p>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <a
              href={`/${locale}/#contact`}
              className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent"
            >
              {dict.nav.contact}
            </a>
            <Link
              href={`/${locale}`}
              className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent"
            >
              {dict.nav.home}
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.built}</p>
          <a
            href="#top"
            className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent"
          >
            {dict.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
