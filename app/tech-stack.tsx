import Image from "next/image";

export default function TechStack() {
  return (
    <div className="mt-20">
      <div className="inline-flex items-center w-full">
        <span className="text-3xl">
          Tech <span className="font-extrabold mr-4">Stack</span>
        </span>
        <hr className="w-52 h-px my-8 border-[1px] border-gray-500" />
      </div>
      <div className="grid grid-cols-4 place-items-center gap-y-6 mt-14">
        <Image src={"dart.svg"} alt="android" width={"40"} height={"40"} />
        <Image src={"flutter.svg"} alt="android" width={"40"} height={"40"} />
        <Image src={"android.svg"} alt="android" width={"40"} height={"40"} />
        <Image src={"kotlin.svg"} alt="android" width={"40"} height={"40"} />
        <Image
          src={"jetpack-compose.svg"}
          alt="android"
          width={"40"}
          height={"40"}
        />
        <Image src={"js.svg"} alt="android" width={"40"} height={"40"} />
        <Image src={"nodejs.svg"} alt="android" width={"40"} height={"40"} />
        <Image src={"python.svg"} alt="android" width={"40"} height={"40"} />
      </div>
    </div>
  );
}
