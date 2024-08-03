import TechStackPills from "@/components/tech-stack-pills";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { promises as fs } from "fs";

export default async function WorksDetails({
  params,
}: {
  params: { slug: string };
}) {
  const file = await fs.readFile(
    process.cwd() + "/public/data/works.json",
    "utf-8",
  );
  const data: WorksItemInterface[] = JSON.parse(file);

  const work = data.find((work) => work.slug === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="mt-6 flex h-screen w-full flex-row items-center">
      <div className="relative h-3/4 w-1/4">
        <Image
          src={work.image}
          alt={work.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-1/2">
        <div className="mb-2">
          <h1 className="text-sm font-bold text-gray-500">Project Title</h1>
          <p className="text-lg font-normal text-white">{work.title}</p>
        </div>
        <div className="mb-2">
          <h1 className="text-sm font-bold text-gray-500">
            Project Description
          </h1>
          <p className="text-lg font-normal text-white">{work.desc}</p>
        </div>
        <div className="mb-2">
          <h1 className="text-sm font-bold text-gray-500">Technologies Used</h1>
          <div className="flex flex-row gap-2 text-lg font-normal text-white">
            {work.stacks.map((stack) => {
              return <TechStackPills stack={stack} key={stack} />;
            })}
          </div>
        </div>
        <div className="mb-2">
          <h1 className="text-sm font-bold text-gray-500">Link to Project</h1>
          <Link href={work.links} className="group/links">
            <div className="mt-2 flex w-[150px] flex-row items-center justify-between rounded-full border border-white p-2 align-middle transition-all duration-500 group-hover/links:bg-violet-500 group-hover/links:text-white">
              <p>{work.title}</p>
              <ArrowRightIcon className="size-5 transition-all duration-500 group-hover/links:-rotate-45" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
