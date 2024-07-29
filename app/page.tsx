import { Bars3Icon } from "@heroicons/react/24/outline";

import Quotes from "./quotes";
import About from "./about";
import TechStack from "./tech-stack";
import RecentWorks from "./recent-works";
import Image from "next/image";
import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl">
            <p>naufal</p>
            <p>firoos</p>
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
      <main className="flex min-h-screen flex-col items-center mt-36">
        <Quotes />
        <About />
        <TechStack />
        <RecentWorks />
      </main>
    </>
  );
}
