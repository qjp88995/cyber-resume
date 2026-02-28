import { type RefObject } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  targets?: string;
  stagger?: number;
  from?: gsap.TweenVars;
  duration?: number;
  ease?: string;
}

export function useScrollReveal(
  ref: RefObject<Element | null>,
  options?: ScrollRevealOptions
): void {
  const {
    targets,
    stagger = 0,
    from = { y: 40, opacity: 0, filter: 'blur(8px)' },
    duration = 0.6,
    ease = 'expo.out',
  } = options ?? {};

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (window.matchMedia('print').matches) {
        return;
      }

      if (!ref.current) {
        return;
      }

      const elements = targets
        ? ref.current.querySelectorAll(targets)
        : ref.current;

      gsap.fromTo(
        elements,
        { ...from },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    },
    { scope: ref, dependencies: [] } // options 不加入 dependencies：动画只在组件挂载时初始化一次，这是故意的
  );
}
