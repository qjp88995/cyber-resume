import { useRef } from "react";
import { GraduationCap, Trophy } from "lucide-react";
import { SectionHeader, GlassCard } from "./UI";
import type { ResumeData } from "../types";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const EducationAwards = ({ data }: { data: ResumeData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftHeaderRef = useRef<HTMLDivElement>(null);
  const rightHeaderRef = useRef<HTMLDivElement>(null);

  useScrollReveal(leftHeaderRef, {
    from: { x: -20, opacity: 0 },
    duration: 0.5,
  });

  useScrollReveal(rightHeaderRef, {
    from: { x: -20, opacity: 0 },
    duration: 0.5,
  });

  useScrollReveal(sectionRef, {
    targets: ".gsap-card",
    stagger: 0.15,
    from: { y: 30, opacity: 0, scale: 0.97 },
  });

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 print:mb-4"
    >
      <div>
        <div ref={leftHeaderRef}>
          <SectionHeader icon={GraduationCap} title="Education" />
        </div>
        <div className="gsap-card">
          <GlassCard>
            {data.education.map((edu) => (
              <div key={edu.school} className="mb-4 last:mb-0 print:mb-3">
                <div className="text-neon-blue neon-glow text-lg mb-1 print:text-black print:drop-shadow-none print:font-bold">
                  {edu.school}
                </div>
                <div className="text-text-dim text-sm print:text-gray-800">
                  {edu.major} · {edu.degree}
                </div>
                <div className="text-neon-purple text-[0.8rem] mt-2 print:text-gray-600 print:mt-1">
                  {edu.period}
                </div>
              </div>
            ))}
          </GlassCard>
        </div>
      </div>
      <div>
        <div ref={rightHeaderRef}>
          <SectionHeader icon={Trophy} title="Recognition" />
        </div>
        <div className="gsap-card">
          <GlassCard>
            {data.awards.map((award) => (
              <div
                key={award}
                className="flex gap-2 text-text-dim mb-3 last:mb-0 print:text-gray-800 print:mb-2"
              >
                <span className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none">
                  {">"}
                </span>{" "}
                {award}
              </div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
