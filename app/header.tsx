import SocialMedia from "@/components/social-media";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex h-14 flex-row items-center justify-between px-[14px] text-3xl">
          <div className="text-2xl">
            <p className="hidden md:block">naufal firoos</p>
            <p className="md:hidden">naufal</p>
            <p className="md:hidden">firoos</p>
          </div>
          <div className="hidden h-full flex-row items-center gap-[40px] text-xl md:flex">
            <Link href={"#home"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#tech-stack"}>Stack</Link>
            <p>Works</p>
          </div>
          <div className="flex flex-row gap-2">
            <SocialMedia
              alt="Github Account"
              icon="github.svg"
              link="https://github.com/firoos18"
            />
            <SocialMedia
              alt="Instagram Account"
              icon="instagram.svg"
              link="https://www.instagram.com/firoos__/"
            />
            <SocialMedia
              alt="LinkedIn Account"
              icon="linkedin.svg"
              link="https://id.linkedin.com/in/naufal-firoos-asy-syarif-986219218"
            />
          </div>
        </div>
      </header>
    </>
  );
}
