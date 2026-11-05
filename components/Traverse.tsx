import Link from "next/link";
import { projects, getDictionary, type Locale } from "@/content";

type Props = { locale: Locale };

const positions: Record<string, { x: number; y: number; anchor: "start" | "end" }> = {
  "homelab-gitops": { x: 62, y: 306, anchor: "start" },
  bericuan: { x: 142, y: 214, anchor: "start" },
  "dms-platform": { x: 282, y: 256, anchor: "start" },
  tempo: { x: 382, y: 152, anchor: "start" },
  "e-signature": { x: 486, y: 58, anchor: "end" },
};

export function Traverse({ locale }: Props) {
  const dict = getDictionary(locale);
  const stations = [...projects].reverse();

  return (
    <div>
      <svg
        viewBox="0 0 560 360"
        className="hidden h-auto w-full lg:block"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M62 300 L142 208 L282 250 L382 146 L486 52"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1"
          pathLength={1}
          className="traverse-path"
        />

        {stations.map((project, index) => {
          const position = positions[project.slug];
          const copy = dict.details[project.slug];
          const active = project.slug === "e-signature";
          const delay = `${180 + index * 90}ms`;

          return (
            <g
              key={project.slug}
              transform={`translate(${position.x} ${position.y})`}
              className="station-mark"
              style={{ animationDelay: delay }}
            >
              <line x1="-9" y1="0" x2="-4" y2="0" stroke="var(--line-strong)" strokeWidth="1" />
              <line x1="4" y1="0" x2="9" y2="0" stroke="var(--line-strong)" strokeWidth="1" />
              <line x1="0" y1="-9" x2="0" y2="-4" stroke="var(--line-strong)" strokeWidth="1" />
              <line x1="0" y1="4" x2="0" y2="9" stroke="var(--line-strong)" strokeWidth="1" />
              <circle
                cx="0"
                cy="0"
                r="5.5"
                fill="var(--paper)"
                stroke={active ? "var(--accent)" : "var(--line-strong)"}
                strokeWidth="1.5"
              />
              <circle cx="0" cy="0" r="2" fill={active ? "var(--accent)" : "var(--ink)"} />

              <text
                x={position.anchor === "end" ? -18 : 16}
                y="-6"
                textAnchor={position.anchor}
                fill="var(--ink-soft)"
                fontSize="10"
                letterSpacing="0.08em"
              >
                {project.code}
              </text>
              <text
                x={position.anchor === "end" ? -18 : 16}
                y="9"
                textAnchor={position.anchor}
                fill="var(--ink)"
                fontSize="13"
              >
                {copy.name}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="border-t border-line lg:hidden">
        {stations.map((project) => {
          const copy = dict.details[project.slug];

          return (
            <li key={project.slug} className="border-b border-line">
              <Link
                href={`/${locale}/work/${project.slug}`}
                className="flex min-h-11 items-center gap-4 py-3 transition-colors duration-200 hover:text-accent"
              >
                <span className="label tabnum w-14 shrink-0">{project.code}</span>
                <span className="font-serif text-lg">{copy.name}</span>
                <span aria-hidden="true" className="ml-auto">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
