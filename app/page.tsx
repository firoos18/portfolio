import Image from "next/image";
import Quotes from "./quotes";
import About from "./about";
import TechStack from "./tech-stack";
import RecentWorks from "./recent-works";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl">
            <p>naufal</p>
            <p>firoos</p>
          </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </p>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center mt-64">
        <Quotes />
        <About />
        <TechStack />
        <RecentWorks />
      </main>
    </>
  );
}
