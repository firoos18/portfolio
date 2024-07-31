import Quotes from "./quotes";
import About from "./about";
import TechStack from "./tech-stack";
import RecentWorks from "./recent-works";
import SocialMedia from "@/components/social-media";
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center mt-36">
        <Quotes />
        <About />
        <TechStack />
        <RecentWorks />
      </main>
    </>
  );
}
