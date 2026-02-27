import { useRef } from "react";
import { Terminal, Code2 } from "lucide-react";
import { SectionHeader, GlassCard } from "./UI";
import type { ResumeData } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const CoreModules = ({ data }: { data: ResumeData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef, {
    from: { x: -20, opacity: 0 },
    duration: 0.5,
  });

  useScrollReveal(sectionRef, {
    targets: ".gsap-card",
    stagger: 0.12,
    from: { y: 30, opacity: 0, scale: 0.97 },
  });

  return (
    <section ref={sectionRef} className="mb-16 print:mb-8">
      <div ref={headerRef}>
        <SectionHeader icon={Terminal} title="Core Modules" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 print:grid-cols-2">
        {data.advantages.map((adv) => (
          <div key={adv} className="gsap-card">
            <GlassCard>
              <div className="flex gap-4 items-start">
                <Code2
                  size={20}
                  className="text-neon-blue neon-glow mt-1 shrink-0 print:text-gray-600 print:drop-shadow-none"
                />
                <p className="text-[0.95rem] text-text-dim leading-[1.6] print:text-black">
                  {adv}
                </p>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};
