import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, portrait, projects, type Locale } from "@/content";
import { Arrow } from "@/components/Arrow";
import { Header } from "@/components/Header";
import { LocalTime } from "@/components/LocalTime";
import { RiseText } from "@/components/RiseText";
import { ArticleList } from "@/components/ArticleList";
import { Shot } from "@/components/Shot";
import { getArticles } from "@/lib/articles";
import { OWNER, absoluteUrl, jsonLd } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const frame = "mx-auto w-full max-w-[1440px] px-[clamp(16px,4vw,56px)]";
const sectionSpace = "py-[clamp(80px,12vw,176px)]";

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale: Locale = raw;

  const dict = getDictionary(locale);
  const structured = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: OWNER.name,
      alternateName: OWNER.shortName,
      jobTitle: dict.hero.role,
      email: `mailto:${OWNER.email}`,
      url: absoluteUrl(`/${locale}/`),
      image: portrait ? absoluteUrl(portrait.src) : undefined,
      sameAs: OWNER.sameAs,
      address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
      worksFor: { "@type": "Organization", name: "Berijalan Technocenter" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Ahmad Dahlan" },
      knowsLanguage: ["id", "en", "de"],
      knowsAbout: dict.skills.groups.flatMap((group) => group.items),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: OWNER.shortName,
      url: absoluteUrl(`/${locale}/`),
      inLanguage: locale,
      author: { "@id": absoluteUrl("/#person") },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structured) }} />
      <Hero locale={locale} />
      <main id="main">
        <About locale={locale} />
        <Work locale={locale} />
        <Process locale={locale} />
        <Experience locale={locale} />
        <Writing locale={locale} />
        <Contact locale={locale} />
      </main>
    </>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale);

  return (
    <section className="bg-volt text-on-volt">
      <div className={`${frame} flex min-h-dvh flex-col pb-[clamp(20px,3vw,40px)] pt-3`}>
        <Header locale={locale} tone="volt" />

        <div className="mt-6 grid flex-1 gap-8 md:grid-cols-12 md:gap-6">
          <div className="flex flex-col md:col-span-7">
            <dl className="grid grid-cols-2 gap-4 sm:max-w-md">
              <div>
                <dt className="label text-on-volt-soft">{hero.basedLabel}</dt>
                <dd className="mt-1 font-medium">{hero.location}</dd>
              </div>
              <div>
                <dt className="label text-on-volt-soft">{hero.timeLabel}</dt>
                <dd className="mt-1 font-medium">
                  <LocalTime />
                </dd>
              </div>
            </dl>

            <div className="flex flex-1 flex-col justify-center py-10">
              <h1 className="display text-[clamp(4.5rem,26vw,14rem)] md:text-[min(14rem,15.5vw)]">
                <RiseText lines={[hero.firstName, hero.lastName]} />
              </h1>
              <p className="display mt-4 text-[clamp(1.5rem,3vw,2.5rem)] leading-none">{hero.role}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
              <div>
                <p className="display text-[clamp(2rem,3.4vw,3rem)]">{hero.motto}</p>
                <p className="mt-3 max-w-[40ch] font-medium leading-snug">{hero.statement}</p>
              </div>
              <div>
                <p className="label text-on-volt-soft">{hero.disciplinesLabel}</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-medium">
                  {hero.disciplines.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-5">
            {portrait ? (
              <div className="relative aspect-[4/5] bg-ink md:aspect-auto md:min-h-0 md:flex-1">
                <Image
                  src={portrait.src}
                  fill
                  alt={hero.portraitAlt}
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[50%_12%]"
                />
              </div>
            ) : (
              <div className="flex-1" />
            )}
            <a
              href="mailto:itsfiroos@gmail.com"
              className="label inline-flex min-h-12 items-center justify-between gap-4 bg-ink px-5 text-on-dark transition-colors duration-200 hover:bg-ink-2"
            >
              {hero.cta}
              <Arrow direction="up-right" className="text-accent-on-dark" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ locale }: { locale: Locale }) {
  const { about } = getDictionary(locale);

  return (
    <section id="about" aria-labelledby="about-title" className={`bg-paper text-on-light ${sectionSpace}`}>
      <div className={`${frame} grid gap-10 md:grid-cols-12`}>
        <h2 id="about-title" className="display text-[clamp(3rem,7vw,6rem)] md:col-span-4">
          {about.heading}
        </h2>
        <div className="md:col-span-8">
          <p className="text-[clamp(1.6rem,3.2vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.015em]">
            {about.lead}
          </p>
          <div className="mt-12 grid gap-6 text-on-light-soft md:grid-cols-2 md:gap-x-10">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[60ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { work, caseStudy } = dict;

  return (
    <section id="work" aria-labelledby="work-title" className={`bg-ink text-on-dark ${sectionSpace}`}>
      <div className={frame}>
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="work-title" className="display text-[clamp(4rem,12vw,11rem)] md:col-span-8">
            {work.heading}
          </h2>
          <p className="max-w-[44ch] text-on-dark-soft md:col-span-4">{work.intro}</p>
        </div>

        <ol className="mt-[clamp(48px,7vw,96px)] flex flex-col gap-6 md:gap-10">
          {projects.map((project, index) => {
            const copy = dict.details[project.slug];
            const href = `/${locale}/work/${project.slug}`;
            const shots = project.kind === "mobile" ? project.shots.slice(0, 2) : project.shots.slice(0, 1);

            return (
              <li
                key={project.slug}
                className="stack-card border border-ink-line bg-ink-2"
                style={{ "--i": index } as React.CSSProperties}
              >
                <article className="grid gap-8 p-[clamp(20px,3vw,40px)] md:min-h-[78vh] md:grid-cols-12">
                  <div className="flex flex-col md:col-span-5">
                    <p className="label text-accent-on-dark">{copy.category}</p>
                    <h3 className="display mt-3 text-[clamp(3rem,7vw,6.5rem)]">
                      <Link href={href} className="transition-colors duration-200 hover:text-accent-on-dark">
                        {copy.name}
                      </Link>
                    </h3>
                    <p className="mt-5 max-w-[42ch] text-lg">{copy.summary}</p>

                    <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-line pt-4 text-sm">
                      <div>
                        <dt className="label text-on-dark-soft">{caseStudy.year}</dt>
                        <dd className="tabnum mt-1">{project.year}</dd>
                      </div>
                      <div>
                        <dt className="label text-on-dark-soft">{caseStudy.role}</dt>
                        <dd className="mt-1">{copy.role}</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="label text-on-dark-soft">{caseStudy.stack}</dt>
                        <dd className="mt-1 text-on-dark-soft">{project.stack.join(" · ")}</dd>
                      </div>
                    </dl>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-auto">
                      <Link
                        href={href}
                        className="label inline-flex min-h-12 w-fit items-center gap-4 bg-on-dark px-5 text-ink transition-colors duration-200 hover:bg-volt"
                      >
                        {work.open}
                        <span className="sr-only">: {copy.name}</span>
                        <Arrow />
                      </Link>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          className="label inline-flex min-h-11 items-center gap-2 text-on-dark-soft underline decoration-ink-line underline-offset-4 transition-colors duration-200 hover:text-accent-on-dark"
                        >
                          {work.live}
                          <span className="sr-only">: {copy.name}</span>
                          <Arrow direction="up-right" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    {shots.length === 0 ? (
                      <DecisionPanel decisions={copy.decisions.map((d) => d.title)} label={caseStudy.decisions} />
                    ) : project.kind === "mobile" ? (
                      <div className="grid h-full grid-cols-2 items-center gap-4 bg-ink p-[clamp(12px,3vw,40px)]">
                        {shots.map((shot, i) => (
                          <Shot
                            key={shot.src}
                            shot={shot}
                            kind="mobile"
                            alt={shot.alt[locale]}
                            className={i === 1 ? "md:translate-y-10" : "md:-translate-y-6"}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full items-center bg-ink p-[clamp(12px,3vw,40px)]">
                        <Shot shot={shots[0]} kind="web" alt={shots[0].alt[locale]} />
                      </div>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-[clamp(64px,9vw,128px)] grid gap-6 border-t border-ink-line pt-6 md:grid-cols-12">
          <h3 className="label text-on-dark-soft md:col-span-3">{work.earlierHeading}</h3>
          <ul className="grid gap-x-10 sm:grid-cols-2 md:col-span-9">
            {work.earlier.map((item) => (
              <li key={item.name} className="border-b border-ink-line">
                <a
                  href={item.href}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors duration-200 hover:text-accent-on-dark"
                >
                  <span>
                    <span className="font-semibold">{item.name}</span>
                    <span className="block text-sm text-on-dark-soft">{item.note}</span>
                  </span>
                  <Arrow direction="up-right" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DecisionPanel({ decisions, label }: { decisions: string[]; label: string }) {
  return (
    <div className="flex h-full flex-col justify-end bg-ink p-[clamp(20px,3vw,40px)]">
      <p className="label text-on-dark-soft">{label}</p>
      <ul className="mt-4">
        {decisions.map((decision) => (
          <li
            key={decision}
            className="display border-t border-ink-line py-3 text-[clamp(1.75rem,3.4vw,3rem)] leading-[0.95] text-on-dark-soft"
          >
            {decision}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Process({ locale }: { locale: Locale }) {
  const { process } = getDictionary(locale);

  return (
    <section id="process" aria-labelledby="process-title" className={`bg-paper text-on-light ${sectionSpace}`}>
      <div className={frame}>
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="process-title" className="display text-[clamp(4rem,10vw,9rem)] md:col-span-7">
            {process.heading}
          </h2>
          <p className="max-w-[40ch] text-on-light-soft md:col-span-4 md:col-start-9">{process.intro}</p>
        </div>

        <ol className="mt-[clamp(48px,7vw,96px)] grid border-t border-on-light lg:grid-cols-5">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="border-b border-paper-line py-6 lg:border-b-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="display tabnum text-[clamp(3rem,5vw,4.5rem)] text-accent-on-light">{index + 1}.</p>
              <h3 className="display mt-6 text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-[40ch] text-on-light-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Experience({ locale }: { locale: Locale }) {
  const { experience, skills, languages } = getDictionary(locale);
  const rows = [
    ...experience.roles,
    { ...experience.education, educationLabel: experience.educationLabel },
  ];

  return (
    <section id="experience" aria-labelledby="experience-title" className={`bg-ink text-on-dark ${sectionSpace}`}>
      <div className={frame}>
        <h2 id="experience-title" className="display text-[clamp(4rem,12vw,11rem)]">
          {experience.heading}
        </h2>

        <ul className="mt-[clamp(40px,6vw,80px)] border-t border-on-dark">
          {rows.map((row) => (
            <li key={row.org} className="grid gap-3 border-b border-ink-line py-6 md:grid-cols-12 md:gap-6">
              <p className="label tabnum text-on-dark-soft md:col-span-3 md:pt-2">
                {"educationLabel" in row ? `${row.educationLabel} · ` : null}
                {row.period}
              </p>
              <div className="md:col-span-4">
                <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-[0.95]">{row.title}</h3>
                <p className="mt-1 text-accent-on-dark">{row.org}</p>
              </div>
              {row.note ? <p className="max-w-[60ch] text-on-dark-soft md:col-span-5">{row.note}</p> : null}
            </li>
          ))}
        </ul>

        <div className="mt-[clamp(64px,9vw,128px)] grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">{skills.heading}</h2>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              {skills.groups.map((group) => (
                <div key={group.label} className="border-t border-ink-line pt-3">
                  <dt className="label text-on-dark-soft">{group.label}</dt>
                  <dd className="mt-2">{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-4">
            <h2 className="display text-[clamp(2.5rem,5vw,4rem)]">{languages.heading}</h2>
            <dl className="mt-6">
              {languages.items.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-4 border-t border-ink-line py-3">
                  <dt>{item.name}</dt>
                  <dd className="label text-on-dark-soft">{item.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Writing({ locale }: { locale: Locale }) {
  const { articles } = getDictionary(locale);
  const latest = getArticles(locale).slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section aria-labelledby="writing-title" className={`bg-paper text-on-light ${sectionSpace}`}>
      <div className={frame}>
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="writing-title" className="display text-[clamp(4rem,12vw,11rem)] md:col-span-8">
            {articles.heading}
          </h2>
          <div className="md:col-span-4">
            <p className="max-w-[44ch] text-on-light-soft">{articles.intro}</p>
            <Link
              href={`/${locale}/articles/`}
              className="label mt-4 inline-flex min-h-12 items-center gap-4 bg-ink px-5 text-on-dark transition-colors duration-200 hover:bg-ink-2"
            >
              {articles.all}
              <Arrow />
            </Link>
          </div>
        </div>
        <div className="mt-[clamp(40px,6vw,80px)]">
          <ArticleList locale={locale} articles={latest} labels={articles} tone="light" />
        </div>
      </div>
    </section>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const { contact, hero } = getDictionary(locale);

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-volt text-on-volt">
      <div className={`${frame} ${sectionSpace}`}>
        <h2 id="contact-title" className="display text-[clamp(4.5rem,15vw,15rem)]">
          {contact.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-[clamp(40px,6vw,80px)] grid gap-10 md:grid-cols-12 md:items-end">
          <p className="max-w-[44ch] text-lg font-medium md:col-span-5">{contact.body}</p>

          <div className="md:col-span-7 md:justify-self-end">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex max-w-full items-center gap-4 border-b-2 border-on-volt pb-2 text-[clamp(1.5rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] transition-colors duration-200 hover:border-ink hover:text-ink"
            >
              <span className="break-all">{contact.email}</span>
              <Arrow direction="up-right" className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <ul className="mt-6 flex flex-wrap gap-6">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="label inline-flex min-h-11 items-center gap-2 underline decoration-on-volt-soft underline-offset-4 transition-colors duration-200 hover:decoration-on-volt"
                  >
                    {link.label}
                    <Arrow direction="up-right" />
                  </a>
                </li>
              ))}
              <li className="label inline-flex min-h-11 items-center text-on-volt-soft">
                {hero.location}
                {" · "}
                <LocalTime />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
