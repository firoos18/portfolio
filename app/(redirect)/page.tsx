import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <main className="mx-auto flex min-h-dvh max-w-[40rem] flex-col justify-center px-6">
        <p className="label">Naufal Firoos</p>
        <h1 className="mt-3 font-serif text-4xl">Choose a language</h1>
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
