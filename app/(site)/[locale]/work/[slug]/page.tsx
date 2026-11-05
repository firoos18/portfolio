import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, projects } from "@/content";
import { Arrow } from "@/components/Arrow";
import { Header } from "@/components/Header";
import { Shot } from "@/components/Shot";
import { OWNER, absoluteUrl, alternatesFor, jsonLd, ogLocale } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

const frame = "mx-auto w-full max-w-[1440px] px-[clamp(16px,4vw,56px)]";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const project = projects.find((item) => item.slug === slug);
  const copy = project ? getDictionary(locale).details[project.slug] : undefined;

  if (!project || !copy) {
    return {};
  }

  return {
    title: copy.name,
    description: copy.summary,
    alternates: alternatesFor(locale, `/work/${project.slug}/`),
    openGraph: {
      title: copy.name,
      description: copy.summary,
      locale: ogLocale[locale],
      type: "article",
      url: `/${locale}/work/${project.slug}/`,
      images: [{ url: `/${locale}/work/${project.slug}/og.png`, width: 1200, height: 630, alt: copy.name }],
    },
    twitter: { card: "summary_large_image", images: [`/${locale}/work/${project.slug}/og.png`] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const project = projects.find((item) => item.slug === slug);
  const dict = getDictionary(locale);
  const copy = project ? dict.details[project.slug] : undefined;

  if (!project || !copy) {
    notFound();
  }

  const labels = dict.caseStudy;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const nextCopy = dict.details[next.slug];
  const [cover, ...rest] = project.shots;

  const structured = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: copy.name,
    description: copy.summary,
    url: absoluteUrl(`/${locale}/work/${project.slug}/`),
    inLanguage: locale,
    dateCreated: project.year.slice(0, 4),
    keywords: project.stack.join(", "),
    image: project.shots.map((shot) => absoluteUrl(shot.src)),
    creator: { "@type": "Person", name: OWNER.name, url: absoluteUrl(`/${locale}/`) },
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structured) }} />
      <div className="bg-ink pt-3">
        <div className={frame}>
          <Header locale={locale} tone="dark" />
        </div>
      </div>

      <main id="main" className="bg-ink text-on-dark">
        <article>
          <header className={`${frame} pb-[clamp(48px,7vw,96px)] pt-[clamp(40px,6vw,80px)]`}>
            <Link
              href={`/${locale}/#work`}
              className="label inline-flex min-h-11 items-center gap-2 text-on-dark-soft transition-colors duration-200 hover:text-accent-on-dark"
            >
              <Arrow direction="left" />
              {labels.back}
            </Link>

            <h1 className="display mt-6 text-[clamp(4.5rem,15vw,14rem)]">{copy.name}</h1>
            <p className="mt-6 max-w-[40ch] text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-snug">
              {copy.summary}
            </p>

            <dl className="mt-10 grid gap-6 border-t border-on-dark pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="label text-on-dark-soft">{labels.year}</dt>
                <dd className="tabnum mt-1">{project.year}</dd>
              </div>
              <div>
                <dt className="label text-on-dark-soft">{labels.role}</dt>
                <dd className="mt-1">{copy.role}</dd>
              </div>
              <div>
                <dt className="label text-on-dark-soft">{labels.type}</dt>
                <dd className="mt-1">{copy.category}</dd>
              </div>
              <div>
                <dt className="label text-on-dark-soft">{labels.stack}</dt>
                <dd className="mt-1 text-on-dark-soft">{project.stack.join(" · ")}</dd>
              </div>
            </dl>
          </header>

          {cover ? (
            <div className={frame}>
              {project.kind === "mobile" ? (
                <div className="grid grid-cols-2 gap-[clamp(8px,2vw,24px)] bg-volt p-[clamp(16px,4vw,56px)] md:grid-cols-4">
                  {project.shots.slice(0, 4).map((shot, i) => (
                    <Shot
                      key={shot.src}
                      shot={shot}
                      kind="mobile"
                      alt={shot.alt[locale]}
                      priority={i < 2}
                      className={i % 2 === 1 ? "md:translate-y-8" : ""}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-volt p-[clamp(16px,4vw,56px)]">
                  <Shot shot={cover} kind="web" alt={cover.alt[locale]} priority />
                </div>
              )}
            </div>
          ) : null}

          <div className="bg-paper text-on-light">
            <div className={`${frame} py-[clamp(64px,9vw,128px)]`}>
              <Block title={labels.problem}>
                <p className="max-w-[60ch] text-[clamp(1.25rem,2vw,1.6rem)] font-medium leading-snug">{copy.problem}</p>
              </Block>

              <Block title={labels.constraints}>
                <ul className="grid gap-x-10 md:grid-cols-2">
                  {copy.constraints.map((item) => (
                    <li key={item} className="border-t border-paper-line py-4 text-on-light-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title={labels.system}>
                <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                  {copy.system.map((item) => (
                    <div key={item.title} className="border-t border-on-light pt-4">
                      <dt className="display text-3xl">{item.title}</dt>
                      <dd className="mt-3 max-w-[58ch] text-on-light-soft">{item.body}</dd>
                    </div>
                  ))}
                </dl>
              </Block>
            </div>
          </div>

          <div className={`${frame} py-[clamp(64px,9vw,128px)]`}>
            <h2 className="display text-[clamp(3.5rem,9vw,8rem)]">{labels.decisions}</h2>
            <ol className="mt-10 border-t border-on-dark">
              {copy.decisions.map((decision, i) => (
                <li key={decision.title} className="grid gap-4 border-b border-ink-line py-8 md:grid-cols-12 md:gap-6">
                  <p className="display tabnum text-4xl text-accent-on-dark md:col-span-1">{i + 1}.</p>
                  <h3 className="display text-[clamp(1.9rem,3vw,2.75rem)] leading-[0.95] md:col-span-4">
                    {decision.title}
                  </h3>
                  <div className="md:col-span-7">
                    <p className="max-w-[60ch]">{decision.body}</p>
                    <p className="mt-3 max-w-[60ch] text-on-dark-soft">
                      <span className="label text-accent-on-dark">{labels.tradeoff}</span> {decision.tradeoff}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {rest.length > 0 ? (
            <section aria-labelledby="screens-title" className={`${frame} pb-[clamp(64px,9vw,128px)]`}>
              <h2 id="screens-title" className="label text-on-dark-soft">
                {labels.screens}
              </h2>
              <div
                className={`mt-4 grid gap-[clamp(8px,2vw,24px)] ${
                  project.kind === "mobile" ? "grid-cols-2 md:grid-cols-4" : "md:grid-cols-2"
                }`}
              >
                {(project.kind === "mobile" ? project.shots.slice(4) : rest).map((shot) => (
                  <Shot key={shot.src} shot={shot} kind={project.kind} alt={shot.alt[locale]} />
                ))}
              </div>
            </section>
          ) : null}

          <div className={`${frame} grid gap-8 border-t border-ink-line py-10 md:grid-cols-2`}>
            <div>
              <h2 className="label text-on-dark-soft">{labels.status}</h2>
              <p className="mt-2 max-w-[56ch]">{copy.status}</p>
            </div>
            <div>
              <h2 className="label text-on-dark-soft">{labels.evidence}</h2>
              <ul className="mt-2">
                {copy.evidence.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex min-h-11 items-center gap-2 underline decoration-on-dark-soft transition-colors duration-200 hover:text-accent-on-dark"
                      >
                        {item.label}
                        <Arrow direction="up-right" />
                      </a>
                    ) : (
                      <span className="text-on-dark-soft">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <nav aria-label={labels.next} className="bg-volt text-on-volt">
          <Link
            href={`/${locale}/work/${next.slug}`}
            className={`${frame} group flex flex-col gap-2 py-[clamp(48px,7vw,96px)]`}
          >
            <span className="label text-on-volt-soft">{labels.next}</span>
            <span className="display flex items-end justify-between gap-6 text-[clamp(3.5rem,11vw,10rem)]">
              {nextCopy.name}
              <Arrow className="mb-[0.08em] text-[0.5em] transition-transform duration-200 group-hover:translate-x-2" />
            </span>
          </Link>
        </nav>
      </main>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-on-light pt-6 [&:not(:first-child)]:mt-[clamp(48px,7vw,96px)] md:grid-cols-12">
      <h2 className="display text-[clamp(2.25rem,4vw,3.5rem)] md:col-span-3">{title}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}
