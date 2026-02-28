import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Mail, MapPin, Phone, Printer } from 'lucide-react';

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTypewriter } from '../hooks/useTypewriter';
import type { ResumeData } from '../types';

export const Header = ({ data }: { data: ResumeData }) => {
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const systemTextRef = useRef<HTMLDivElement>(null);

  // Header 容器入场动画
  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        ease: 'expo.out',
        clearProps: 'all',
        onComplete: () => {
          headerRef.current?.classList.add('transition-all', 'duration-300');
        },
      });

      // system text 持续闪烁
      gsap.to(systemTextRef.current, {
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    },
    { scope: headerRef }
  );

  // 职位 typewriter
  useTypewriter(titleRef, `${data.title} | 10 YEARS EXP`, {
    speed: 35,
    cursor: true,
    delay: 0.5,
  });

  // 联系信息 stagger reveal
  useScrollReveal(contactRef, {
    targets: 'a, span',
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

      <h1 className="text-neon-blue neon-glow text-4xl md:text-[3.5rem] mb-2 font-mono uppercase tracking-[2px] print:text-black print:drop-shadow-none print:font-bold print:text-3xl print:mb-1">
        {data.name}
      </h1>

      <div
        ref={titleRef}
        className="text-xl text-text-dim mb-8 min-h-lh print:text-gray-800 print:mb-2 print:text-lg"
      />

      <div
        ref={contactRef}
        className="flex flex-wrap justify-center gap-6 text-sm"
      >
        <span className="flex items-center gap-2 text-text-dim print:text-gray-700">
          <MapPin
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{' '}
          {data.info.targetCity}
        </span>
        <a
          href={`tel:${data.info.phone}`}
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <Phone
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{' '}
          {data.info.phone}
        </a>
        <a
          href={`mailto:${data.info.email}`}
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <Mail
            size={16}
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          />{' '}
          {data.info.email}
        </a>
        <a
          href={data.social.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-text-dim hover:text-neon-blue transition-colors print:text-gray-700"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-neon-blue neon-glow print:text-gray-600 print:drop-shadow-none"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>{' '}
          {data.social.github.replace('https://', '')}
        </a>
      </div>
    </header>
  );
};
