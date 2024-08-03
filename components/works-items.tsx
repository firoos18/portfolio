import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function WorksItem({ title, image, slug }: WorksItemInterface) {
  return (
    <div className="group/item relative h-[600px] w-[300px]">
      <Image
        src={image}
        alt={title}
        className="transition-transform duration-700 md:group-hover/item:scale-75"
        fill
        style={{ objectFit: "contain" }}
      />
      <div className="group/desc invisible absolute bottom-0 flex h-12 w-full flex-row place-content-center items-center align-middle text-[0px] font-semibold opacity-0 transition-all duration-700 group-hover/item:text-lg group-hover/item:opacity-100 md:group-hover/item:visible">
        <p className="">{title}</p>
        <Link href={`${slug}`}>
          <ArrowRightIcon className="ml-1 size-0 rounded-full border p-1 transition-all duration-500 group-hover/item:size-6 group-hover/desc:-rotate-45" />
        </Link>
      </div>
    </div>
  );
}
