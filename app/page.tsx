import Quotes from "./quotes";
import About from "./about";
import TechStack from "./tech-stack";
import RecentWorks from "./recent-works";
import SocialMedia from "@/components/social-media";
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <main className="mt-36 flex min-h-screen flex-col items-center">
        <Quotes />
        <About />
        <TechStack />
        <RecentWorks />
      </main>
    </>
  );
}
