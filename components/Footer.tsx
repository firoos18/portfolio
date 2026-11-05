import { getDictionary, type Locale } from "@/content";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-on-dark-soft">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-[clamp(16px,4vw,56px)] py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {dict.hero.name}
        </p>
        <a
          href="#top"
          className="label inline-flex min-h-11 items-center transition-colors duration-200 hover:text-accent-on-dark"
        >
          {dict.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
