import Image from "next/image";

export default function Quotes() {
  return (
    <div className="w-full md:h-screen" id="home">
      <p className="relative text-[50px] lg:text-[100px] font-extralightlight md:mt-32">
        <span className="font-extrabold text-violet-500">Clean code</span> is
        another word of{" "}
        <span className="font-extrabold text-violet-500">art</span>, while
        <span className="font-extrabold text-violet-500">
          {" "}
          maintainable code
        </span>{" "}
        is some{" "}
        <span className="font-extrabold text-violet-500">satisfaction.</span>
      </p>
      <Image
        src={"hero-image.svg"}
        fill
        alt="hero image"
        className="absolute lg:scale-[90%] mt-44 hidden md:block"
      />
      <hr className="static flex-grow h-px mt-11 border-[1px] border-gray-500" />
    </div>
  );
}
