import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Off the sheet",
  description: "This station is not on the traverse.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1200px] flex-col justify-center px-[clamp(20px,5vw,72px)] py-16">
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      <p className="label tabnum">404 / Off the sheet</p>
      <h1 className="mt-4 max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.03em]">
        This station is not on the traverse.
      </h1>
      <p className="mt-6 max-w-[52ch] text-ink-soft">
        The page moved, or the link was mis-surveyed. Start from the sheet instead.
      </p>
      <p className="mt-6 flex gap-6">
        <Link
          href="/en/"
          className="label inline-flex min-h-11 items-center border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          English
        </Link>
        <Link
          href="/id/"
          className="label inline-flex min-h-11 items-center border-b border-line transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Bahasa Indonesia
        </Link>
      </p>
    </main>
  );
}
