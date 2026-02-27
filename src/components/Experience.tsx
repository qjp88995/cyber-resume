import { Briefcase } from "lucide-react";
import { SectionHeader } from "./UI";
import type { ResumeData } from "../types";

export const Experience = ({ data }: { data: ResumeData }) => (
  <section className="mb-16 print:mb-8">
    <SectionHeader icon={Briefcase} title="Career Timeline" />
    <div>
      {data.workExperience.map((exp) => (
        <div
          key={exp.company}
          className="border-l-2 border-neon-blue/10 pl-6 relative mb-12 print:mb-8 print:border-gray-300 before:content-[''] before:absolute before:-left-1.75 before:top-0 before:w-3 before:h-3 before:bg-bg-dark before:border-2 before:border-neon-blue before:rounded-full before:shadow-neon-blue-dot print:before:border-gray-400 print:before:bg-white print:before:shadow-none"
        >
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
  </section>
);
