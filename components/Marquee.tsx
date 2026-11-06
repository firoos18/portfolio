type Props = {
  items: string[];
};

/**
 * A slow band of words between the hero and the page. Decorative: every word already
 * appears in the hero, so the whole band is hidden from assistive tech.
 */
export function Marquee({ items }: Props) {
  const run = (copy: number) => (
    <div className="flex shrink-0 items-center gap-[clamp(24px,4vw,56px)] pr-[clamp(24px,4vw,56px)]">
      {items.map((item) => (
        <span key={`${copy}-${item}`} className="flex items-center gap-[clamp(24px,4vw,56px)]">
          <span>{item}</span>
          <span className="block size-[0.32em] bg-volt" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-ink-line bg-ink py-5 text-on-dark" aria-hidden="true">
      <div className="marquee-track display flex w-max text-[clamp(2.25rem,5vw,4.5rem)] leading-none">
        {run(0)}
        {run(1)}
      </div>
    </div>
  );
}
