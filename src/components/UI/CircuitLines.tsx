import React from 'react';
import { cn } from '../../utils/cn';

export interface CircuitLinesProps {
  variant?: 'horizontal' | 'vertical' | 'corner' | 'bus';
  className?: string;
}

export const CircuitLines: React.FC<CircuitLinesProps> = ({
  variant = 'horizontal',
  className
}) => {
  if (variant === 'horizontal') {
    return (
      <div className={cn('relative w-full h-4 flex items-center', className)}>
        <div className="w-full h-px bg-gradient-to-r from-slate-800 via-cyan-500/30 to-slate-800" />
        <div className="absolute left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
        <div className="absolute right-1/4 w-1.5 h-1.5 rounded-full bg-slate-600" />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={cn('relative h-full w-4 flex justify-center', className)}>
        <div className="h-full w-px bg-gradient-to-b from-slate-800 via-cyan-500/30 to-slate-800" />
        <div className="absolute top-1/3 w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        className={cn('w-12 h-12 text-cyan-500/40', className)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 24H24V48"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="24" cy="24" r="3" fill="#00f0ff" />
      </svg>
    );
  }

  return (
    <div className={cn('flex items-center gap-1 opacity-60', className)}>
      <span className="h-px w-8 bg-cyan-500/40" />
      <span className="w-1 h-1 rounded-full bg-cyan-400" />
      <span className="h-px w-4 bg-slate-700" />
      <span className="w-1 h-1 rounded-full bg-slate-600" />
      <span className="h-px w-12 bg-slate-800" />
    </div>
  );
};
