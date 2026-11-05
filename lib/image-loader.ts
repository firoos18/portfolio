"use client";

// Static export cannot resize on request, so scripts/images.mjs pre-renders 480 and 960 wide
// copies of every WebP in public/. Wider requests get the original file.
const VARIANTS = [480, 960];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/") || !src.endsWith(".webp")) return src;
  const variant = VARIANTS.find((candidate) => width <= candidate);
  return variant ? `/_v${src.replace(/\.webp$/, "")}-${variant}.webp` : src;
}
