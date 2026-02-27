import { Layers, Cpu, ShieldCheck, ExternalLink } from "lucide-react";
import { SectionHeader, GlassCard } from "./UI";
import type { ResumeData } from "../types";

export const Projects = ({ data }: { data: ResumeData }) => (
  <section className="mb-16 print:mb-8">
    <SectionHeader icon={Layers} title="Project Repositories" />
    {data.projects.map((proj) => (
      <GlassCard key={proj.name} className="project-card print:mb-4">
        <div className="flex justify-between mb-6 flex-wrap gap-4 print:mb-3">
          <h3 className="text-neon-blue neon-glow text-2xl print:text-black print:drop-shadow-none print:font-bold">
            {proj.name}
          </h3>
          {(proj.role || proj.period) && (
            <span className="bg-neon-purple/10 border border-neon-purple text-neon-purple px-2.5 py-1 text-xs font-mono rounded-0.5 print:bg-gray-100 print:border-gray-300 print:text-gray-800">
              {proj.role}
              {proj.role && proj.period ? " / " : ""}
              {proj.period}
            </span>
          )}
        </div>

        {proj.description && (
          <p className="text-text-dim mb-6 border-l-[3px] border-neon-blue pl-4 print:text-gray-800 print:mb-4 print:border-gray-400">
            {proj.description}
          </p>
        )}

        {proj.techStack && (
          <div className="flex flex-wrap gap-2 mb-6 print:mb-4">
            {proj.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-neon-blue/5 border border-neon-blue/20 text-neon-blue px-2.5 py-1 text-xs font-mono rounded-0.5 print:bg-gray-100 print:border-gray-300 print:text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 print:gap-4 print:mb-2">
          {proj.highlights && proj.highlights.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 print:mb-1">
                <Cpu
                  size={16}
                  className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
                />
                <span className="text-neon-blue neon-glow text-sm print:text-gray-800 print:drop-shadow-none print:font-bold">
                  HIGHLIGHTS
                </span>
              </div>
              {proj.highlights.map((h, i) => (
                <p
                  key={i}
                  className="text-sm text-text-dim mb-1.5 print:text-gray-800 print:mb-1"
                >
                  {"> "} {h}
                </p>
              ))}
            </div>
          )}
          {proj.difficulties && proj.difficulties.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 print:mb-1">
                <ShieldCheck
                  size={16}
                  className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
                />
                <span className="text-neon-blue neon-glow text-sm print:text-gray-800 print:drop-shadow-none print:font-bold">
                  CHALLENGES SOLVED
                </span>
              </div>
              {proj.difficulties.map((d, i) => (
                <p
                  key={i}
                  className="text-sm text-text-dim mb-1.5 print:text-gray-800 print:mb-1"
                >
                  {"> "} {d}
                </p>
              ))}
            </div>
          )}
        </div>

        {(proj.url || proj.github) && (
          <>
            {/* 屏幕：霓虹风格按钮 */}
            <div className="mt-8 flex gap-4 print:hidden">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon-blue no-underline font-mono text-sm inline-flex items-center gap-2 border border-neon-blue px-4 py-2 transition-all duration-300 hover:bg-neon-blue hover:text-bg-dark hover:shadow-neon-blue-link"
                >
                  <ExternalLink size={16} /> GITHUB
                </a>
              )}
              {proj.url && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon-blue no-underline font-mono text-sm inline-flex items-center gap-2 border border-neon-blue px-4 py-2 transition-all duration-300 hover:bg-neon-blue hover:text-bg-dark hover:shadow-neon-blue-link"
                >
                  <ExternalLink size={16} /> LIVE
                </a>
              )}
            </div>
            {/* 打印：文字链接 */}
            <div className="hidden print:flex print:flex-wrap print:gap-x-6 print:gap-y-1 print:mt-2 print:text-xs print:text-gray-600">
              {proj.github && (
                <span>
                  GitHub:{" "}
                  <a href={proj.github} className="text-gray-800 underline">
                    {proj.github}
                  </a>
                </span>
              )}
              {proj.url && (
                <span>
                  Link:{" "}
                  <a href={proj.url} className="text-gray-800 underline">
                    {proj.url}
                  </a>
                </span>
              )}
            </div>
          </>
        )}
      </GlassCard>
    ))}
  </section>
);
