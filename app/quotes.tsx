import Image from "next/image";

export default function Quotes() {
  return (
    <div className="w-full md:h-screen" id="home">
      <p className="font-extralightlight relative text-[50px] md:mt-32 lg:text-[100px]">
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
        className="absolute mt-44 hidden md:block lg:scale-[90%]"
      />
      <hr className="static mt-11 h-px flex-grow border-[1px] border-gray-500" />
    </div>
  );
}
