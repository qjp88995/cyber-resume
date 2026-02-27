import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TypewriterOptions {
  speed?: number; // ms per char, default 60
  cursor?: boolean; // whether to show cursor, default true
  delay?: number; // delay in seconds before animation starts, default 0
}

export function useTypewriter(
  ref: RefObject<HTMLElement | null>,
  text: string,
  options?: TypewriterOptions,
): void {
  const { speed = 60, cursor = true, delay = 0 } = options ?? {};

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Clear element content on every run to prevent stacking
      el.textContent = "";

      if (!text) return;

      // Respect prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = text;
        return;
      }

      let cursorEl: HTMLSpanElement | null = null;

      if (cursor) {
        cursorEl = document.createElement("span");
        cursorEl.textContent = "_";
        cursorEl.style.cssText =
          "color: inherit; margin-left: 2px; display: inline-block;";
        el.appendChild(cursorEl);

        gsap.to(cursorEl, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
        });
      }

      const tl = gsap.timeline({ delay });

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const timeOffset = i * (speed / 1000);

        tl.call(
          () => {
            const textNode = document.createTextNode(char);
            if (cursorEl) {
              el.insertBefore(textNode, cursorEl);
            } else {
              el.appendChild(textNode);
            }
          },
          undefined,
          timeOffset,
        );
      }

      if (cursor && cursorEl) {
        const removalTarget = cursorEl;
        const totalDuration = text.length * (speed / 1000) + 0.5;

        tl.call(
          () => {
            gsap.killTweensOf(removalTarget);
            removalTarget.remove();
          },
          undefined,
          totalDuration,
        );
      }
    },
    { scope: ref, dependencies: [text] },
  );
}
