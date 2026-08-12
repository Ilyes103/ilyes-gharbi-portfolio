import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  category?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  category = 'TELEMETRY SYS',
  className,
  centered = false
}) => {
  return (
    <div className={cn('mb-10 sm:mb-12 border-b border-slate-800/80 pb-6', centered && 'text-center', className)}>
      <div
        className={cn(
          'flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3',
          centered && 'justify-center'
        )}
      >
        <span className="bg-cyan-950/60 px-2 py-0.5 border border-cyan-800/50 rounded-xs font-semibold">
          SEC_{number}
        </span>
        <span className="h-px bg-slate-800 w-12 sm:w-16" />
        <span className="text-slate-500">// {category}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3 text-slate-400 text-sm sm:text-base leading-relaxed font-sans', centered ? 'mx-auto max-w-2xl' : 'max-w-3xl')}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
