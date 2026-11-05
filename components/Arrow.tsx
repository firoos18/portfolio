type Props = {
  direction?: "up-right" | "right" | "left";
  className?: string;
};

const rotation = { "up-right": "-rotate-45", right: "", left: "rotate-180" };

export function Arrow({ direction = "right", className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      className={`shrink-0 ${rotation[direction]} ${className}`}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
