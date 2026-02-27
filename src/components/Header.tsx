import { useRef } from "react";
import { MapPin, Phone, Mail, Github, Printer } from "lucide-react";
import type { ResumeData } from "../types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "../hooks/useTypewriter";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Header = ({ data }: { data: ResumeData }) => {
  const headerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const systemTextRef = useRef<HTMLDivElement>(null);

  // Header 容器入场动画
  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.6,
        ease: "expo.out",
        clearProps: "all",
        onComplete: () => {
          headerRef.current?.classList.add("transition-all", "duration-300");
        },
      });

      // system text 持续闪烁
      gsap.to(systemTextRef.current, {
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: headerRef },
  );

  // 名字打字机（容器 fade-in 后启动）
  useTypewriter(nameRef, data.name, { speed: 55, cursor: false, delay: 0.5 });

  // 职位 typewriter（名字打完后接续）
  const nameDuration = (data.name.length * 55) / 1000;
  useTypewriter(titleRef, `${data.title} | 10 YEARS EXP`, {
    speed: 35,
    cursor: true,
    delay: 0.5 + nameDuration + 0.2,
  });

  // 联系信息 stagger reveal
  useScrollReveal(contactRef, {
    targets: "a, span",
    stagger: 0.08,
    from: { y: 12, opacity: 0 },
    duration: 0.4,
  });

  return (
    <header
      ref={headerRef}
      className="neon-card py-16 px-8 mb-8 text-center print:bg-transparent print:border-none print:before:hidden print:after:hidden print:p-0 print:mb-4 print:pb-4"
    >
      <button
        onClick={() => window.print()}
        className="absolute top-6 right-6 text-neon-blue hover:text-white hover:scale-110 transition-all cursor-pointer print:hidden z-10"
        title="Print Resume"
        aria-label="打印简历"
      >
        <Printer
          size={24}
          className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        />
      </button>

      <div
        ref={systemTextRef}
        className="text-neon-blue neon-glow font-mono text-sm mb-4 print:text-gray-500 print:drop-shadow-none"
      >
        [ SYSTEM.LOG: QIN_JIAPENG_ACTIVE ]
      </div>

      <h1
        ref={nameRef}
        className="text-neon-blue neon-glow text-4xl md:text-[3.5rem] mb-2 font-mono uppercase tracking-[2px] print:text-black print:drop-shadow-none print:font-bold print:text-3xl print:mb-1"
      />

      <div
        ref={titleRef}
        className="text-xl text-text-dim mb-8 print:text-gray-800 print:mb-2 print:text-lg"
      />

      <div ref={contactRef} className="flex flex-wrap justify-center gap-6 text-sm">
        <span className="flex items-center gap-2 text-text-dim print:text-gray-700">
          <MapPin
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{" "}
          {data.info.targetCity}
        </span>
        <a
          href={`tel:${data.info.phone}`}
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <Phone
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{" "}
          {data.info.phone}
        </a>
        <a
          href={`mailto:${data.info.email}`}
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <Mail
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{" "}
          {data.info.email}
        </a>
        <a
          href={data.social.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <Github
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{" "}
          {data.social.github.replace("https://", "")}
        </a>
      </div>
    </header>
  );
};
