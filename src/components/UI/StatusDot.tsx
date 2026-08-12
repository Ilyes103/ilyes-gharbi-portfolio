import React from 'react';
import { cn } from '../../utils/cn';

export interface StatusDotProps {
  status?: 'green' | 'cyan' | 'amber';
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  sublabel?: string;
  className?: string;
}

export const StatusDot: React.FC<StatusDotProps> = ({
  status = 'green',
  pulse = true,
  size = 'md',
  label,
  sublabel,
  className
}) => {
  const colorMap = {
    green: {
      dot: 'bg-emerald-400',
      ping: 'bg-emerald-400',
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/30'
    },
    cyan: {
      dot: 'bg-cyan-400',
      ping: 'bg-cyan-400',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/30'
    },
    amber: {
      dot: 'bg-amber-400',
      ping: 'bg-amber-400',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/30'
    }
  };

  const sizeMap = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5'
  };

  const activeColor = colorMap[status];
  const activeSize = sizeMap[size];

  return (
    <div className={cn('inline-flex items-center gap-2 font-mono text-xs tracking-wider select-none', className)}>
      <span className={cn('relative flex items-center justify-center', activeSize)}>
        {pulse && (
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              activeColor.ping
            )}
          />
        )}
        <span className={cn('relative inline-flex rounded-full', activeSize, activeColor.dot)} />
      </span>
      {label && (
        <span className={cn('uppercase font-medium', activeColor.text)}>
          {label}
          {sublabel && <span className="text-slate-500 ml-1 font-normal">[{sublabel}]</span>}
        </span>
      )}
    </div>
  );
};
