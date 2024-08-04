import TechStackPills from "@/components/tech-stack-pills";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import CarouselItem from "@/components/carousel-item";
import CarouselProjectDetails from "@/components/carousel-project-details";

export default async function WorksDetails({
  params,
}: {
  params: { slug: string };
}) {
  const file = await fs.readFile(
    path.join(process.cwd() + "/app/data/works.json"),
    "utf-8",
  );
  const data: WorksItemInterface[] = JSON.parse(file);

  const work = data.find((work) => work.slug === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="mt-12 flex flex-col-reverse content-center justify-center pt-4 md:mt-6 md:h-screen md:flex-row md:items-center md:pt-0">
      <div className="relative mt-4 h-full w-full md:mt-0 md:h-3/4 md:w-1/4">
        <div className="carousel hidden h-full md:flex">
          {work.detailImages.map((_, i) => {
            return (
              <CarouselProjectDetails
                index={i}
                images={work.detailImages}
                key={i}
              />
            );
          })}
        </div>
        <div className="carousel carousel-center flex h-full space-x-2 p-2 md:hidden">
          {work.detailImages.map((_, i) => {
            return (
              <CarouselProjectDetails
                index={i}
                images={work.detailImages}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:ml-2 md:w-1/2">
        <div className="mb-2 flex flex-row justify-between">
          <div className="w-1/2">
            <h1 className="text-nowrap text-xs font-bold text-gray-500 md:text-sm">
              Project Title
            </h1>
            <p className="text-lg font-normal text-white">{work.title}</p>
          </div>
          <div className="mb-2 flex w-full flex-col items-end md:hidden">
            <h1 className="text-end text-sm font-bold text-gray-500">
              Link to Project
            </h1>
            <div className="w-[200px]">
              <Link href={work.links} className="group/links">
                <div className="mt-2 flex w-[200px] flex-row items-center justify-between rounded-full border border-white px-4 py-2 align-middle transition-all duration-500 group-hover/links:bg-violet-500 group-hover/links:text-white">
                  <p>{work.title}</p>
                  <ArrowRightIcon className="size-5 transition-all duration-500 group-hover/links:-rotate-45" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-2 md:w-4/6">
          <h1 className="text-xs font-bold text-gray-500 md:text-sm">
            Project Description
          </h1>
          <p className="text-lg font-normal text-white">{work.desc}</p>
        </div>
        <div className="md:1/2 mb-2">
          <h1 className="text-xs font-bold text-gray-500 md:text-sm">
            Technologies Used
          </h1>
          <div className="flex flex-row gap-2 text-lg font-normal text-white">
            {work.stacks.map((stack) => {
              return <TechStackPills stack={stack} key={stack} />;
            })}
          </div>
        </div>
        <div className="mb-2 hidden md:block md:w-1/2">
          <h1 className="text-sm font-bold text-gray-500">Link to Project</h1>
          <div className="w-[200px]">
            <Link href={work.links} className="group/links">
              <div className="mt-2 flex w-[200px] flex-row items-center justify-between rounded-full border border-white px-4 py-2 align-middle transition-all duration-500 group-hover/links:bg-violet-500 group-hover/links:text-white">
                <p>{work.title}</p>
                <ArrowRightIcon className="size-5 transition-all duration-500 group-hover/links:-rotate-45" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
