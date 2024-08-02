import Link from "next/link";

export default function RecentWorks() {
  return (
    <div className="mt-24 w-full">
      <div className="flex items-center">
        <span className="mr-2 w-28 text-3xl">
          Recent <span className="font-extrabold">Works</span>
        </span>
        <hr className="h-px flex-grow border-[1px] border-gray-500" />
        <Link
          href={""}
          className="ml-2 text-nowrap text-[14px] font-light hover:text-violet-700"
        >
          see more
        </Link>
      </div>
      <div></div>
    </div>
  );
}
