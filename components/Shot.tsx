import Image from "next/image";
import type { ProjectShot } from "@/content";

type Props = {
  shot: ProjectShot;
  alt: string;
  kind: "mobile" | "web";
  className?: string;
  priority?: boolean;
};

/** A screenshot in a plain frame: phone screens keep their ratio, desktop windows crop to 16:10. */
export function Shot({ shot, alt, kind, className = "", priority = false }: Props) {
  return (
    <Image
      src={shot.src}
      width={shot.width}
      height={shot.height}
      alt={alt}
      priority={priority}
      sizes={kind === "mobile" ? "(min-width: 768px) 22vw, 60vw" : "(min-width: 768px) 60vw, 100vw"}
      className={`block h-auto w-full object-cover object-top ${
        kind === "mobile" ? "aspect-[390/844]" : "aspect-[16/10]"
      } ${className}`}
    />
  );
}
