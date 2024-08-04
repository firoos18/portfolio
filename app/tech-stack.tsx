import TechStackItem from "@/components/tech-stack-item";

export default function TechStack() {
  return (
    <div className="mt-20 w-full" id="tech-stack">
      <div className="flex items-center">
        <span className="text-nowrap text-3xl">
          Tech <span className="mr-4 font-extrabold">Stack</span>
        </span>
        <hr className="my-8 h-px flex-grow border-[1px] border-gray-500" />
      </div>
      <div className="mt-14 grid grid-cols-4 place-items-center gap-y-10 md:flex md:flex-row md:place-items-center md:justify-between">
        <TechStackItem
          imageSrc="dart.svg"
          alt="dart"
          proficiency={80}
          mastery="Advanced"
        />
        <TechStackItem
          imageSrc="flutter.svg"
          alt="flutter"
          proficiency={80}
          mastery="Advanced"
        />
        <TechStackItem
          imageSrc="android.svg"
          alt="android"
          proficiency={60}
          mastery="Intermediate - Advanced"
        />
        <TechStackItem
          imageSrc="kotlin.svg"
          alt="kotlin"
          proficiency={60}
          mastery="Intermediate - Advanced"
        />
        <TechStackItem
          imageSrc="jetpack-compose.svg"
          alt="jetpack-compose"
          proficiency={60}
          mastery="Intermediate - Advanced"
        />
        <TechStackItem
          imageSrc="js.svg"
          alt="javascript"
          proficiency={60}
          mastery="Intermediate"
        />
        <TechStackItem
          imageSrc="nodejs.svg"
          alt="nodeJs"
          proficiency={60}
          mastery="Intermediate"
        />
        <TechStackItem
          imageSrc="python.svg"
          alt="python"
          proficiency={60}
          mastery="Intermediate"
        />
      </div>
    </div>
  );
}
