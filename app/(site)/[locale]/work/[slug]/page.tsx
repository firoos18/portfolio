import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, projects } from "@/content";

type Props = { params: Promise<{ locale: string; slug: string }> };

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
    alternates: {
      languages: {
        en: `/en/work/${project.slug}`,
        id: `/id/work/${project.slug}`,
      },
    },
    openGraph: {
      title: copy.name,
      description: copy.summary,
      type: "article",
    },
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

  const index = projects.indexOf(project);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <main id="main" className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,72px)]">
      <article className="pt-8 lg:pt-12">
        <Link
          href={`/${locale}/#work`}
          className="label inline-flex min-h-11 items-center gap-2 border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <span aria-hidden="true">←</span>
          {dict.caseStudy.back}
        </Link>

        <header className="mt-6 border-t border-line-strong pt-4">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="label tabnum">
                {project.code} · {project.year}
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.98] tracking-[-0.03em]">
                {copy.name}
              </h1>
              <p className="mt-4 max-w-[56ch] font-serif text-xl leading-snug text-ink-soft">
                {copy.summary}
              </p>
            </div>

            <dl className="lg:col-span-4">
              <div className="border-t border-line pt-2">
                <dt className="label">{dict.caseStudy.role}</dt>
                <dd className="mt-1 text-sm">{copy.role}</dd>
              </div>
              <div className="mt-4 border-t border-line pt-2">
                <dt className="label">{dict.caseStudy.stack}</dt>
                <dd className="mt-1 text-sm leading-relaxed">{project.stack.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="mt-10 grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-serif text-2xl lg:col-span-3">{dict.caseStudy.problem}</h2>
          <p className="max-w-[66ch] text-[1.05rem] leading-[1.7] lg:col-span-8 lg:col-start-5">
            {copy.problem}
          </p>
        </section>

        <section className="mt-10 grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-serif text-2xl lg:col-span-3">{dict.caseStudy.constraints}</h2>
          <ul className="lg:col-span-8 lg:col-start-5">
            {copy.constraints.map((constraint) => (
              <li
                key={constraint}
                className="max-w-[66ch] border-b border-line py-3 text-sm leading-relaxed"
              >
                {constraint}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-serif text-2xl lg:col-span-3">{dict.caseStudy.system}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {copy.system.map((part) => (
              <div key={part.title} className="border-t border-line pt-2">
                <h3 className="font-serif text-xl">{part.title}</h3>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                  {part.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-serif text-2xl lg:col-span-3">{dict.caseStudy.decisions}</h2>
          <div className="lg:col-span-8 lg:col-start-5">
            {copy.decisions.map((decision) => (
              <div key={decision.title} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                <h3 className="font-serif text-xl">{decision.title}</h3>
                <p className="mt-2 max-w-[66ch] text-sm leading-relaxed">{decision.body}</p>
                <p className="mt-2 max-w-[66ch] text-sm leading-relaxed text-ink-soft">
                  <span className="label mr-2">{dict.caseStudy.tradeoff}</span>
                  {decision.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 border-t border-line-strong pt-4 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-serif text-2xl lg:col-span-3">{dict.caseStudy.evidence}</h2>
          <div className="lg:col-span-8 lg:col-start-5">
            <ul>
              {copy.evidence.map((item) => (
                <li key={item.label} className="border-b border-line py-2 text-sm">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {item.label}
                      <span aria-hidden="true" className="ml-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm leading-relaxed">
              <span className="label mr-2">{dict.caseStudy.status}</span>
              {copy.status}
            </p>
          </div>
        </section>

        <nav
          aria-label={dict.caseStudy.back}
          className="mt-12 grid gap-4 border-t border-line-strong pt-4 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/${locale}/work/${previous.slug}`}
              className="group border-b border-line py-3 transition-colors duration-200 hover:text-accent"
            >
              <span className="label">{dict.caseStudy.previous}</span>
              <span className="mt-1 block font-serif text-xl">← {dict.details[previous.slug].name}</span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/${locale}/work/${next.slug}`}
              className="group border-b border-line py-3 text-right transition-colors duration-200 hover:text-accent"
            >
              <span className="label">{dict.caseStudy.next}</span>
              <span className="mt-1 block font-serif text-xl">{dict.details[next.slug].name} →</span>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
