"use client";

import { useEffect } from "react";

// False for the first page a visitor lands on, so the hero paints at once (no LCP delay);
// every later in-app navigation fades in.
let navigated = false;

/** Re-mounts on every navigation. */
export default function Template({ children }: { children: React.ReactNode }) {
  const animate = navigated;

  useEffect(() => {
    navigated = true;
  }, []);

  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
