import Link from "next/link";
import type { CaseStudyCopy, Locale, ProjectFacts } from "@/content";

type Props = {
  locale: Locale;
  project: ProjectFacts;
  copy: CaseStudyCopy;
};

export function StationRow({ locale, project, copy }: Props) {
  return (
    <Link
      href={`/${locale}/work/${project.slug}`}
      className="group grid gap-2 border-b border-line py-5 transition-colors duration-200 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:gap-4 md:px-2"
    >
      <span className="flex items-baseline gap-4 md:col-span-4">
        <span className="label tabnum shrink-0">{project.code}</span>
        <span className="font-serif text-2xl leading-tight transition-colors duration-200 group-hover:text-accent">
          {copy.name}
        </span>
      </span>

      <span className="text-sm text-ink-soft md:col-span-4">{copy.summary}</span>

      <span className="flex items-baseline justify-between gap-4 md:col-span-3 md:flex-col md:items-start md:gap-1">
        <span className="label">{project.stack.slice(0, 2).join(" · ")}</span>
        <span className="label tabnum">{project.year}</span>
      </span>

      <span
        aria-hidden="true"
        className="hidden text-right text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block"
      >
        →
      </span>
    </Link>
  );
}
