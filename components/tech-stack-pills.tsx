"use client";

import Image from "next/image";

interface TechStackPillsProps {
  stack: string;
}

export default function TechStackPills({ stack }: TechStackPillsProps) {
  return (
    <div
      key={stack}
      className="mt-2 flex flex-row items-center rounded-full border p-2 align-middle"
    >
      <div className="relative mr-2 h-4 w-4">
        <Image
          src={`${stack.toLowerCase()}.svg`}
          alt={stack}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <p className="text-sm">{stack}</p>
    </div>
  );
}
