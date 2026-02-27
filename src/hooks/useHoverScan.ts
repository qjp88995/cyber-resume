import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useHoverScan(ref: RefObject<HTMLElement | null>): void {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      if (!ref.current) {
        return;
      }

      const container = ref.current;

      const beam = document.createElement("div");
      beam.setAttribute("data-hover-beam", "");
      Object.assign(beam.style, {
        position: "absolute",
        inset: "0",
        background:
          "linear-gradient(to right, transparent 0%, rgba(0,242,255,0.06) 50%, transparent 100%)",
        transform: "scaleX(0)",
        transformOrigin: "left center",
        pointerEvents: "none",
        zIndex: "1",
        borderRadius: "inherit",
      });
      container.appendChild(beam);

      let anim: gsap.core.Tween | null = null;

      const onMouseEnter = () => {
        if (anim) {
          anim.kill();
        }
        anim = gsap.fromTo(
          beam,
          { scaleX: 0, opacity: 1 },
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              anim = gsap.to(beam, { opacity: 0, duration: 0.3 });
            },
          },
        );
      };

      const onMouseLeave = () => {
        if (anim) {
          anim.kill();
        }
        gsap.set(beam, { scaleX: 0, opacity: 1 });
      };

      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
        if (beam.parentNode) {
          beam.parentNode.removeChild(beam);
        }
      };
    },
    { scope: ref },
  );
}
