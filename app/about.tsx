import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div
        className="mt-20 flex flex-col place-content-center items-center justify-center md:h-screen"
        id="about"
      >
        <p className="place-content-center text-justify md:w-2/3 md:text-center md:text-xl">
          Specialize in mobile development with a focus on Flutter and native
          Android development using Kotlin and Jetpack Compose. My expertise
          lies in building high-performance, scalable applications that deliver
          exceptional user experiences. By combining technical precision with a
          deep understanding of both cross-platform and native solutions, I am
          committed to contributing to innovative and efficient mobile projects.
        </p>
        <div className="mb-16 mt-8 flex flex-row items-center justify-evenly gap-6 md:justify-center">
          <div className="group">
            <div className="flex flex-row items-center rounded-full border px-4 py-2 group-hover:bg-white">
              <EnvelopeIcon className="size-6 group-hover:text-black" />
              <a
                href="mailto:itsfiroos@gmail.com"
                className="ml-2 group-hover:text-black"
              >
                Mail Me!
              </a>
            </div>
          </div>
          <div className="group">
            <div className="flex flex-row items-center rounded-full border px-4 py-2 group-hover:bg-white">
              <DocumentArrowDownIcon className="size-6 group-hover:text-black" />
              <Link
                href={"/cv.pdf"}
                download="cv"
                className="ml-2 group-hover:text-black"
              >
                CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
