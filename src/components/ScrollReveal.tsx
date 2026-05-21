"use client";

import { useEffect } from "react";

/** Adds the `visible` class to every `.reveal` element as it scrolls into
 *  view, with a small stagger — mirrors the prototype's IntersectionObserver.
 *  Renders nothing; it just wires up the behaviour on mount. */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No IntersectionObserver (or reduced motion): just show everything.
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            window.setTimeout(
              () => entry.target.classList.add("visible"),
              i * 80,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
