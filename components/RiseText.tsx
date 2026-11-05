type Props = {
  lines: string[];
};

/** Display lines whose letters rise into place once. Screen readers get the plain text. */
export function RiseText({ lines }: Props) {
  let index = 0;

  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line) => (
        <span key={line} className="rise-line" aria-hidden="true">
          {Array.from(line).map((char, position) => {
            const i = index++;
            return (
              <span key={position} className="rise-letter" style={{ "--i": i } as React.CSSProperties}>
                {char === " " ? " " : char}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}
