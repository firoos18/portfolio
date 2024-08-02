"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface TechStackProps {
  imageSrc: string;
  alt: string;
  proficiency: number;
  mastery: string;
}

export default function TechStackItem({
  imageSrc,
  alt,
  proficiency,
  mastery,
}: TechStackProps) {
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const radial = radialRef.current;
    if (radial) {
      radial.style.setProperty("--value", "0");
    }
  }, []);

  const animateValue = (start: number, end: number, duration: number) => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + (end - start) * progress;

      if (radialRef.current) {
        radialRef.current.style.setProperty("--value", value.toString());
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleMouseEnter = () => {
    animateValue(0, proficiency, 500);
  };

  const handleMouseLeave = () => {
    animateValue(proficiency, 0, 1000);
  };

  return (
    <div
      className="group/item stack relative h-20 w-12 items-center transition-all duration-200 ease-in-out hover:h-20 hover:w-20 group-hover/item:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        className="place-content-center group-hover/item:block group-hover/item:scale-[30%]"
      />
      <p className="hidden text-center text-[10px] group-hover/item:block group-hover/item:translate-y-6">
        {mastery}
      </p>
      <div
        ref={radialRef}
        className="radial-progress hidden place-content-center text-violet-700 group-hover/item:block"
        style={{ "--value": 0, "--thickness": "5px" } as React.CSSProperties}
      />
    </div>
  );
}
