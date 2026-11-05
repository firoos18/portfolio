import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "node_modules", "@fontsource");
const display = fs.readFileSync(path.join(fontDir, "big-shoulders/files/big-shoulders-latin-800-normal.woff"));
const text = fs.readFileSync(path.join(fontDir, "archivo/files/archivo-latin-600-normal.woff"));

const palette = {
  volt: { bg: "#c6f432", fg: "#0d0e10", soft: "#3a4a00" },
  ink: { bg: "#0d0e10", fg: "#f3efe9", soft: "#a39d95", accent: "#c6f432" },
};

type Props = {
  title: string;
  kicker: string;
  footer: string;
  tone: keyof typeof palette;
};

/** Share card in the site's own type: display title, one small line of context, owner and domain. */
export function ogImage({ title, kicker, footer, tone }: Props) {
  const colors = palette[tone];
  const size = title.length > 34 ? 92 : title.length > 18 ? 120 : 168;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: colors.bg,
          color: colors.fg,
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: "accent" in colors ? colors.accent : colors.soft }}>
          {kicker}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Big Shoulders",
            fontSize: size,
            lineHeight: 0.86,
            textTransform: "uppercase",
            maxWidth: 1050,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: colors.soft,
            borderTop: `2px solid ${colors.fg}`,
            paddingTop: 20,
          }}
        >
          <span>{footer}</span>
          <span>byros.dev</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Big Shoulders", data: display, weight: 800, style: "normal" },
        { name: "Archivo", data: text, weight: 600, style: "normal" },
      ],
    },
  );
}
