import Link from "next/link";

export default function RecentWorks() {
  return (
    <div className="mt-24 w-full">
      <div className="flex items-center">
        <span className="text-3xl w-28 mr-2">
          Recent <span className="font-extrabold">Works</span>
        </span>
        <hr className="flex-grow h-px border-[1px] border-gray-500" />
        <Link
          href={""}
          className="font-light text-[14px] ml-2 text-nowrap hover:text-violet-700"
        >
          see more
        </Link>
      </div>
      <div></div>
    </div>
  );
}
