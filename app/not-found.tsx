import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Page not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col justify-center bg-volt px-[clamp(16px,4vw,56px)] py-16 text-on-volt">
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      <h1 className="text-[clamp(6rem,24vw,20rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.02em]">404</h1>
      <p className="mt-6 max-w-[40ch] text-lg font-medium">
        This page does not exist. It may have moved when the portfolio was rebuilt.
      </p>
      <p className="mt-6 flex gap-6">
        <Link href="/en/" className="label inline-flex min-h-11 items-center underline underline-offset-4">
          English
        </Link>
        <Link href="/id/" className="label inline-flex min-h-11 items-center underline underline-offset-4">
          Bahasa Indonesia
        </Link>
      </p>
    </main>
  );
}
