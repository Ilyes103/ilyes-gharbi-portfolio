import React from 'react';
import { cn } from '../../utils/cn';

export interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'green' | 'blue' | 'amber' | 'default' | 'outline';
  size?: 'sm' | 'md';
  showBrackets?: boolean;
  dot?: boolean;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  showBrackets = true,
  dot = false,
  className
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-950/40 text-cyan-400 border-cyan-500/30 hover:border-cyan-400/60',
    green: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30 hover:border-emerald-400/60',
    blue: 'bg-blue-950/40 text-blue-400 border-blue-500/30 hover:border-blue-400/60',
    amber: 'bg-amber-950/40 text-amber-400 border-amber-500/30 hover:border-amber-400/60',
    default: 'bg-slate-900/80 text-slate-300 border-slate-700/60 hover:border-slate-500',
    outline: 'bg-transparent text-cyan-300 border-cyan-500/40 hover:bg-cyan-950/30'
  };

  const dotColors = {
    cyan: 'bg-cyan-400',
    green: 'bg-emerald-400',
    blue: 'bg-blue-400',
    amber: 'bg-amber-400',
    default: 'bg-slate-400',
    outline: 'bg-cyan-400'
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono tracking-wider uppercase border transition-colors rounded-xs select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full mr-1.5', dotColors[variant])} />
      )}
      {showBrackets && <span className="text-slate-500 mr-1 opacity-70">[</span>}
      <span>{children}</span>
      {showBrackets && <span className="text-slate-500 ml-1 opacity-70">]</span>}
    </span>
  );
};
