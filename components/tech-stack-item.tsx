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
      className="relative w-12 hover:w-20 h-20 hover:h-20 group/item group-hover/item:block stack items-center transition-all duration-200 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        className="group-hover/item:block group-hover/item:scale-[30%] place-content-center"
      />
      <p className="hidden group-hover/item:block text-[10px] text-center group-hover/item:translate-y-6">
        {mastery}
      </p>
      <div
        ref={radialRef}
        className="radial-progress hidden group-hover/item:block text-violet-700 place-content-center"
        style={{ "--value": 0, "--thickness": "5px" } as React.CSSProperties}
      />
    </div>
  );
}
