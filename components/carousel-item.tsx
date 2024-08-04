import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface CarouselItemInterface {
  workItem: WorksItemInterface;
  index: number;
}

export default function CarouselItem({
  workItem,
  index,
}: CarouselItemInterface) {
  return (
    <div
      id={`carousel-item-${index}`}
      className="carousel-item relative w-full justify-center"
    >
      <div className="relative flex flex-col">
        <Image
          src={workItem.image}
          alt={workItem.title}
          width={200}
          height={200}
          className="h-full"
          style={{ objectFit: "contain" }}
        />
        <Link
          href={workItem.slug}
          className="group/item w-[200px] self-center md:w-3/4"
        >
          <div className="mt-2 flex flex-row items-center justify-between gap-2 rounded-full border px-4 py-2 align-middle transition-all duration-500 group-hover/item:bg-violet-500">
            <p>{workItem.title}</p>
            <ArrowRightIcon className="size-4 transition-all duration-500 group-hover/item:-rotate-45" />
          </div>
        </Link>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Link
          href={`#carousel-item-${index === 0 ? 2 : index - 1}`}
          className="btn btn-circle"
        >
          ❮
        </Link>
        <Link
          href={`#carousel-item-${index === 2 ? 0 : index + 1}`}
          className="btn btn-circle"
        >
          ❯
        </Link>
      </div>
    </div>
  );
}
