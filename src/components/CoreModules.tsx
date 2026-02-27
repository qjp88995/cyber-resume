import { Terminal, Code2 } from "lucide-react";
import { SectionHeader, GlassCard } from "./UI";
import type { ResumeData } from "../types";

export const CoreModules = ({ data }: { data: ResumeData }) => (
  <section className="mb-16 print:mb-8">
    <SectionHeader icon={Terminal} title="Core Modules" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 print:grid-cols-2">
      {data.advantages.map((adv) => (
        <GlassCard key={adv}>
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
      ))}
    </div>
  </section>
);
