import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useTimelineDraw(ref: RefObject<HTMLElement | null>): void {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      if (window.matchMedia("print").matches) {
        return;
      }

      if (!ref.current) {
        return;
      }

      const line = ref.current.querySelector<HTMLElement>(".timeline-line");
      const dots = ref.current.querySelectorAll<HTMLElement>(".timeline-dot");
      const items = ref.current.querySelectorAll<HTMLElement>(".timeline-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          once: true,
        },
      });

      if (line) {
        tl.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 0.8, ease: "power2.out" },
        );
      }

      if (dots.length > 0) {
        tl.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "<",
        );
      }

      if (items.length > 0) {
        tl.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "expo.out",
          },
          "<0.1",
        );
      }
    },
    { scope: ref },
  );
}
