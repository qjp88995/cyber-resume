import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./UI";
import type { ResumeData } from "../types";
import { useTimelineDraw } from "../hooks/useTimelineDraw";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Experience = ({ data }: { data: ResumeData }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef, {
    from: { x: -20, opacity: 0 },
    duration: 0.5,
  });

  useTimelineDraw(timelineRef);

  return (
    <section className="mb-16 print:mb-8">
      <div ref={headerRef}>
        <SectionHeader icon={Briefcase} title="Career Timeline" />
      </div>
      <div ref={timelineRef} className="relative">
        {/* 时间轴竖线 */}
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-0.5 bg-neon-blue/10 print:hidden" />
        <div className="pl-6">
          {data.workExperience.map((exp) => (
            <div key={exp.company} className="timeline-item relative mb-12 print:mb-8">
              {/* 节点圆点 */}
              <div className="timeline-dot absolute -left-6.5 top-0 w-3 h-3 bg-bg-dark border-2 border-neon-blue rounded-full shadow-neon-blue-dot print:border-gray-400 print:bg-white print:shadow-none" />
              <div className="flex justify-between mb-4 flex-wrap gap-2 print:mb-2">
                <div>
                  <h3 className="text-neon-blue neon-glow text-xl mb-1 print:text-black print:drop-shadow-none print:font-bold">
                    {exp.company}
                  </h3>
                  <div className="text-neon-purple font-bold text-sm print:text-gray-700">
                    {exp.title}
                  </div>
                </div>
                <div className="bg-neon-blue/5 border border-neon-blue/20 text-neon-blue px-2.5 py-1 text-xs font-mono rounded-0.5 h-fit print:bg-gray-100 print:border-gray-300 print:text-gray-800">
                  {exp.period}
                </div>
              </div>
              <div className="text-[0.95rem] text-text-dim print:text-gray-800">
                {exp.description.map((d, i) => (
                  <p key={i} className="mb-2 print:mb-1.5">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
