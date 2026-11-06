"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * The site's motion layer, one client island for every page:
 * smooth scroll, the scroll progress rule, scroll reveals, and the pointer cursor.
 * Nothing here runs under prefers-reduced-motion, and content never depends on it:
 * the `motion` class that hides reveal targets is removed if this never mounts.
 */
export function Motion() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);

  // Smooth scroll, progress rule, in-page anchors.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setProgress = (progress: number) => {
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };
    const nativeProgress = () => {
      const max = root.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    if (reduced) {
      nativeProgress();
      window.addEventListener("scroll", nativeProgress, { passive: true });
      return () => window.removeEventListener("scroll", nativeProgress);
    }

    const instance = new Lenis({ autoRaf: true, lerp: 0.1 });
    lenis.current = instance;
    instance.on("scroll", ({ progress }: Lenis) => setProgress(progress));
    nativeProgress();

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link || link.classList.contains("skip-link")) return;
      const url = new URL(link.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      link.closest("details")?.removeAttribute("open");
      history.pushState(null, "", url.hash);
      instance.scrollTo(url.hash === "#top" ? 0 : target, {
        duration: 1.2,
        onComplete: () => {
          if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        },
      });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // New page: start at the top and recalculate the scroll height.
  useEffect(() => {
    lenis.current?.resize();
  }, [pathname]);

  // Scroll reveals. Re-scanned on every route change.
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Pointer cursor: a dot that follows exactly and a square that trails it.
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !dot.current || !ring.current) return;

    const root = document.documentElement;
    const mouse = { x: -100, y: -100 };
    const trail = { x: -100, y: -100 };
    let frame = 0;

    const tick = () => {
      trail.x += (mouse.x - trail.x) * 0.18;
      trail.y += (mouse.y - trail.y) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      const interactive = (event.target as Element).closest("a, button, summary, [role='button'], label[for]");
      root.toggleAttribute("data-cursor-hover", Boolean(interactive));
    };
    const onLeave = () => root.setAttribute("data-cursor-away", "");
    const onEnter = () => root.removeAttribute("data-cursor-away");

    root.classList.add("has-cursor");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div ref={bar} className="scroll-progress-bar" />
      </div>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

