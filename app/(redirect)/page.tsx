import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <main className="flex min-h-dvh flex-col justify-center bg-volt px-6 text-on-volt">
        <h1 className="text-5xl font-extrabold uppercase leading-none">Naufal Firoos</h1>
        <p className="mt-4">
          <Link href="/en/" className="underline underline-offset-4">
            English
          </Link>{" "}
          /{" "}
          <Link href="/id/" className="underline underline-offset-4">
            Bahasa Indonesia
          </Link>
        </p>
      </main>
    </>
  );
}
