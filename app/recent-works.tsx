import Image from "next/image";
import Link from "next/link";

export default function RecentWorks() {
  return (
    <div className="my-24 flex w-full flex-col">
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
      <div className="place-content-center-center hidden content-center items-center justify-evenly md:flex md:flex-row">
        <div className="group/item relative h-[600px] w-[300px]">
          <Image
            src={"silab.svg"}
            alt="silab"
            className="transition-transform duration-700 md:group-hover/item:scale-75"
            fill
            style={{ objectFit: "contain" }}
          />
          <p className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 text-[0px] font-semibold opacity-0 transition-all duration-700 group-hover/item:text-lg group-hover/item:opacity-100 md:group-hover/item:visible">
            SILAB
          </p>
        </div>
        <div className="group/item relative h-[600px] w-[300px]">
          <Image
            src={"sehatin.svg"}
            alt="sehatin"
            className="transition-transform duration-700 md:group-hover/item:scale-75"
            fill
            style={{ objectFit: "contain" }}
          />
          <p className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 text-[0px] font-semibold opacity-0 transition-all duration-700 group-hover/item:text-lg group-hover/item:opacity-100 md:group-hover/item:visible">
            Sehatin
          </p>
        </div>
        <div className="group/item relative h-[600px] w-[300px]">
          <Image
            src={"rentzy.svg"}
            alt="rentzy"
            className="transition-transform duration-700 md:group-hover/item:scale-75"
            fill
            style={{ objectFit: "contain" }}
          />
          <p className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 text-[0px] font-semibold opacity-0 transition-all duration-700 group-hover/item:text-lg group-hover/item:opacity-100 md:group-hover/item:visible">
            Rentzy
          </p>
        </div>
      </div>
    </div>
  );
}
