"use client";

import { useEffect, useRef } from "react";

/** Soft 300px chrome glow that trails the cursor. Disabled for users who
 *  prefer reduced motion and never mounted on touch / coarse pointers. */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
