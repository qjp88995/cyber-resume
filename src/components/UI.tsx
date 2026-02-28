import { type ElementType, useRef } from 'react';

import { useHoverScan } from '@/hooks/useHoverScan';

export const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: ElementType;
  title: string;
}) => (
  <div className="text-2xl mb-10 flex items-center gap-4 border-b border-neon-blue/10 pb-2">
    <Icon
      className="text-neon-blue neon-glow print:text-black print:drop-shadow-none"
      size={24}
    />
    <span className="text-neon-blue neon-glow print:text-black print:drop-shadow-none print:font-bold">
      {title}
    </span>
  </div>
);

export const GlassCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useHoverScan(cardRef);

  return (
    <div
      ref={cardRef}
      className={`neon-card p-8 mb-8 print:bg-transparent print:border-gray-300 print:before:hidden print:after:hidden print:shadow-none print:p-4 print:mb-4 ${className}`}
    >
      {children}
    </div>
  );
};
