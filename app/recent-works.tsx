import Link from "next/link";

export default function RecentWorks() {
  return (
    <div className="mt-24">
      <div className="inline-flex items-center w-full">
        <span className="text-3xl w-28 mr-2">
          Recent <span className="font-extrabold">Works</span>
        </span>
        <hr className="w-44 h-px border-[1px] border-gray-500" />
        <Link
          href={""}
          className="font-light text-[14px] ml-2 text-nowrap hover:text-violet-600"
        >
          see more
        </Link>
      </div>
      <div></div>
    </div>
  );
}
