"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { ROOMS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, Observer);

/** Observer-driven room slider (after the GSAP swipe-slider demo).
 *
 *  ScrollTrigger pins the section full-screen; while pinned, an Observer
 *  captures wheel / touch / swipe and advances one room per gesture with a
 *  GSAP transition. At the first/last room the next gesture releases — the
 *  page scrolls on to the hero / How It Works.
 *
 *  Only runs on ≥769px with motion allowed (gsap.matchMedia). On mobile or
 *  with reduced motion it never activates, so the rooms stay as plain
 *  stacked, natively-scrolling panels — phones get normal smooth scroll. */
export default function RoomsSlider() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const slides = gsap.utils.toArray<HTMLElement>(".room-slide", el);
          const dots = gsap.utils.toArray<HTMLElement>(".room-progress li", el);
          const n = slides.length;
          if (n < 2) return;

          el.classList.add("gsap-active");

          let index = 0;
          let animating = false;
          let st: ScrollTrigger;

          const setDot = (i: number) =>
            dots.forEach((d, di) => d.classList.toggle("is-active", di === i));

          const contentOf = (s: HTMLElement) =>
            s.querySelectorAll(".room-number, .room-name, .room-desc");

          const showOnly = (i: number) => {
            gsap.set(slides, { autoAlpha: 0, zIndex: 0, yPercent: 0 });
            gsap.set(slides[i], { autoAlpha: 1, zIndex: 1 });
            index = i;
            setDot(i);
          };

          const gotoSection = (i: number, dir: number) => {
            animating = true;
            const prev = index;
            gsap.set(slides[i], { autoAlpha: 1, zIndex: 1 });
            gsap.set(slides[prev], { zIndex: 0 });

            const tl = gsap.timeline({
              defaults: { duration: 0.9, ease: "power2.inOut" },
              onComplete: () => {
                animating = false;
                gsap.set(slides[prev], { autoAlpha: 0 });
              },
            });
            tl.fromTo(slides[i], { yPercent: 100 * dir }, { yPercent: 0 }, 0)
              .fromTo(slides[prev], { yPercent: 0 }, { yPercent: -18 * dir }, 0)
              .fromTo(
                contentOf(slides[i]),
                { autoAlpha: 0, yPercent: 40 * dir },
                { autoAlpha: 1, yPercent: 0, duration: 0.7, stagger: 0.06 },
                0.2,
              );

            index = i;
            setDot(i);
          };

          const release = (dir: number) => {
            observer.disable();
            if (dir === 1) {
              document.querySelector("#experience")?.scrollIntoView();
            } else {
              window.scrollTo(
                0,
                Math.max(0, st.start - Math.round(window.innerHeight * 0.5)),
              );
            }
          };

          const observer = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            tolerance: 10,
            preventDefault: true,
            onUp: () => {
              if (animating) return;
              if (index < n - 1) gotoSection(index + 1, 1);
              else release(1);
            },
            onDown: () => {
              if (animating) return;
              if (index > 0) gotoSection(index - 1, -1);
              else release(-1);
            },
          });
          observer.disable();

          st = ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "+=" + window.innerHeight,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
              showOnly(0);
              observer.enable();
            },
            onEnterBack: () => {
              showOnly(n - 1);
              observer.enable();
            },
            onLeave: () => observer.disable(),
            onLeaveBack: () => observer.disable(),
          });

          showOnly(0);

          return () => {
            observer.kill();
            el.classList.remove("gsap-active");
          };
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className="rooms-slider" ref={root}>
      {ROOMS.map((room) => (
        <article className="room-panel room-slide" key={room.number}>
          <div className="room-panel-bg" aria-hidden="true" />
          <span className="room-jp" aria-hidden="true" lang="ja">
            {room.kanji}
          </span>
          <div className="room-panel-content">
            <p className="room-number">{room.number}</p>
            <h3 className="room-name">{room.name}</h3>
            <p className="room-desc">{room.description}</p>
          </div>
        </article>
      ))}
      <ol className="room-progress" aria-hidden="true">
        {ROOMS.map((room) => (
          <li key={room.number} />
        ))}
      </ol>
    </div>
  );
}
