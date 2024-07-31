import TechStackItem from "@/components/tech-stack-item";

export default function TechStack() {
  return (
    <div className="mt-20 w-full">
      <div className="flex items-center">
        <span className="text-3xl text-nowrap">
          Tech <span className="font-extrabold mr-4">Stack</span>
        </span>
        <hr className="flex-grow h-px my-8 border-[1px] border-gray-500" />
      </div>
      <div className="grid grid-cols-4 place-items-center gap-y-10 mt-14">
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
