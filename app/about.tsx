import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="mt-20">
        <p className="text-justify">
          Specialize in mobile development with a focus on Flutter and native
          Android development using Kotlin and Jetpack Compose. My expertise
          lies in building high-performance, scalable applications that deliver
          exceptional user experiences. By combining technical precision with a
          deep understanding of both cross-platform and native solutions, I am
          committed to contributing to innovative and efficient mobile projects.
        </p>
        <div className="flex flex-row mt-8 mb-16 justify-evenly items-center ">
          <div className="group">
            <div className="flex flex-row items-center border py-2 px-4 rounded-full  group-hover:bg-white">
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
            <div className="flex flex-row items-center border py-2 px-4 rounded-full group-hover:bg-white">
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
