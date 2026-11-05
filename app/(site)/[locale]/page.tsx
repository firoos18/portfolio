import { notFound } from "next/navigation";
import { getDictionary, isLocale, projects, locales } from "@/content";
import { Traverse } from "@/components/Traverse";
import { StationRow } from "@/components/StationRow";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const home = `/${locale}`;

  return (
    <main id="main" className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)]">
      <section className="pt-8 lg:pt-12" aria-labelledby="hero-name">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="sheet-frame">
              <div className="border-b border-line p-5 sm:p-6">
                <h1
                  id="hero-name"
                  className="font-serif text-[clamp(2.5rem,5vw,3.9rem)] leading-[0.98] tracking-[-0.03em]"
                >
                  {dict.hero.name}
                </h1>
                <p className="mt-4 text-ink-soft">
                  {dict.hero.role} · {dict.hero.location}
                </p>
              </div>

              <dl className="grid grid-cols-1 border-b border-line sm:grid-cols-2 sm:divide-x sm:divide-line">
                <div className="border-b border-line p-4 sm:border-b-0">
                  <dt className="label">{dict.hero.datumLabel}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{dict.hero.datumValue}</dd>
                </div>
                <div className="p-4">
                  <dt className="label">{dict.hero.sheetLabel}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{dict.hero.sheetValue}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-x-5 gap-y-1 p-4">
                {dict.hero.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="label inline-flex min-h-11 items-center border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {link.label}
                    {link.external ? (
                      <span aria-hidden="true" className="ml-1">
                        ↗
                      </span>
                    ) : null}
                  </a>
                ))}
              </div>
            </div>

            <p className="label mt-4">{dict.hero.availability}</p>
          </div>

          <div className="lg:col-span-7">
            <p className="font-serif text-[clamp(1.6rem,2.7vw,2.5rem)] leading-[1.14] tracking-[-0.02em]">
              {dict.hero.statement}
            </p>

            <div className="mt-8">
              <Traverse locale={locale} />
            </div>

            <p className="label mt-3">{dict.hero.traverseCaption}</p>

            <a
              href={`${home}/#work`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-accent pb-1 font-serif text-xl text-accent transition-colors duration-200 hover:text-ink"
            >
              {dict.hero.primary}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mt-[clamp(64px,9vw,128px)]" aria-labelledby="work-heading">
        <div className="border-t border-line-strong pt-4">
          <h2 id="work-heading" className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">
            {dict.work.heading}
          </h2>
          <p className="mt-3 max-w-[62ch] text-ink-soft">{dict.work.intro}</p>
        </div>

        <div className="mt-8 border-t border-line-strong">
          {projects.map((project) => (
            <StationRow
              key={project.slug}
              locale={locale}
              project={project}
              copy={dict.details[project.slug]}
            />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="label">{dict.work.earlierHeading}</h3>
          <ul className="mt-2 grid gap-x-8 sm:grid-cols-2">
            {dict.work.earlier.map((item) => (
              <li key={item.name} className="border-b border-line">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-11 flex-wrap items-baseline gap-x-3 py-3 transition-colors duration-200 hover:text-accent"
                >
                  <span className="font-serif text-lg">{item.name}</span>
                  <span className="text-sm text-ink-soft group-hover:text-accent">
                    {item.note}
                  </span>
                  <span aria-hidden="true" className="ml-auto">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="mt-[clamp(64px,9vw,128px)]" aria-labelledby="about-heading">
        <div className="grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 id="about-heading" className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] lg:col-span-3">
            {dict.about.heading}
          </h2>
          <div className="max-w-[66ch] space-y-5 text-[1.05rem] leading-[1.7] lg:col-span-8 lg:col-start-5">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mt-[clamp(64px,9vw,128px)]"
        aria-labelledby="experience-heading"
      >
        <div className="border-t border-line-strong pt-4">
          <h2
            id="experience-heading"
            className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]"
          >
            {dict.experience.heading}
          </h2>
          <p className="mt-3 text-ink-soft">{dict.experience.intro}</p>
        </div>

        <ol className="mt-8 border-t border-line-strong">
          {dict.experience.roles.map((role) => (
            <li
              key={`${role.period}-${role.title}`}
              className="grid gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-4"
            >
              <span className="label tabnum md:col-span-3">{role.period}</span>
              <div className="md:col-span-8">
                <h3 className="font-serif text-xl leading-snug">{role.title}</h3>
                <p className="label mt-1">{role.org}</p>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
                  {role.note}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-4">
          <span className="label tabnum md:col-span-3">{dict.experience.education.period}</span>
          <div className="md:col-span-8">
            <p className="label">{dict.experience.educationLabel}</p>
            <h3 className="mt-1 font-serif text-xl leading-snug">
              {dict.experience.education.title}
            </h3>
            <p className="label mt-1">{dict.experience.education.org}</p>
            <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
              {dict.experience.education.note}
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mt-[clamp(64px,9vw,128px)]" aria-labelledby="skills-heading">
        <div className="grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h2 id="skills-heading" className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05]">
              {dict.skills.heading}
            </h2>
            <p className="mt-3 text-sm text-ink-soft">{dict.skills.intro}</p>
          </div>

          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {dict.skills.groups.map((group) => (
              <div key={group.label} className="border-t border-line pt-2">
                <dt className="label">{group.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="languages"
        className="mt-[clamp(64px,9vw,128px)]"
        aria-labelledby="languages-heading"
      >
        <div className="grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2
            id="languages-heading"
            className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] lg:col-span-3"
          >
            {dict.languages.heading}
          </h2>
          <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-3 lg:col-span-8 lg:col-start-5">
            {dict.languages.items.map((language) => (
              <div key={language.name} className="flex items-baseline justify-between gap-4 border-t border-line pt-2">
                <dt className="font-serif text-lg">{language.name}</dt>
                <dd className="label">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="contact"
        className="mt-[clamp(64px,9vw,128px)]"
        aria-labelledby="contact-heading"
      >
        <div className="grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2
            id="contact-heading"
            className="text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] lg:col-span-3"
          >
            {dict.contact.heading}
          </h2>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="max-w-[60ch] text-ink-soft">{dict.contact.body}</p>

            <a
              href={`mailto:${dict.contact.emailLabel}`}
              className="mt-6 inline-block font-serif text-[clamp(1.5rem,4vw,2.8rem)] leading-tight tracking-[-0.02em] underline decoration-1 underline-offset-[0.2em] transition-colors duration-200 hover:text-accent"
            >
              {dict.contact.emailLabel}
            </a>

            <div className="mt-6 flex flex-wrap gap-x-6">
              {dict.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label inline-flex min-h-11 items-center border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden="true" className="ml-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
