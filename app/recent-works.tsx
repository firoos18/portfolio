import Link from "next/link";
import WorksItem from "@/components/works-items";
import { promises as fs } from "fs";
import CarouselItem from "@/components/carousel-item";

export default async function RecentWorks() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/works.json",
    "utf-8",
  );
  const worksList: WorksItemInterface[] = JSON.parse(file);

  return (
    <div className="my-24 flex w-full flex-col" id="works">
      <div className="flex items-center">
        <span className="mr-2 w-28 text-3xl">
          Recent <span className="font-extrabold">Works</span>
        </span>
        <hr className="h-px flex-grow border-[1px] border-gray-500" />
        <Link
          href={""}
          className="ml-2 text-nowrap rounded-full text-[14px] font-light hover:text-violet-700 md:border md:px-6 md:py-2 md:hover:border-violet-500 md:hover:bg-violet-500 md:hover:text-white"
        >
          see more
        </Link>
      </div>

      <div className="place-content-center-center hidden content-center items-center justify-evenly md:mt-6 md:flex md:flex-row">
        {worksList.map((workItem) => {
          return (
            <WorksItem
              key={workItem.id}
              desc={workItem.desc}
              image={workItem.image}
              stacks={workItem.stacks}
              title={workItem.title}
              links={workItem.links}
              id={workItem.id}
              slug={workItem.slug}
              detailImages={workItem.detailImages}
            />
          );
        })}
      </div>
      <div className="carousel mt-4 w-full md:hidden">
        {worksList.map((worksItem, i) => {
          return <CarouselItem workItem={worksItem} index={i} key={i} />;
        })}
      </div>
    </div>
  );
}
