import React from 'react';
import { cn } from '../../utils/cn';

export interface DataFlowConnectorProps {
  label?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const DataFlowConnector: React.FC<DataFlowConnectorProps> = ({
  label = 'CAN BUS 2.0B // 500 KBPS',
  direction = 'horizontal',
  className
}) => {
  if (direction === 'vertical') {
    return (
      <div className={cn('flex flex-col items-center py-4 my-2', className)}>
        <div className="h-6 w-px bg-slate-800" />
        <svg className="w-4 h-12 my-1" viewBox="0 0 16 48">
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="48"
            stroke="#00f0ff"
            strokeWidth="1.5"
            className="animate-data-flow opacity-60"
          />
        </svg>
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 my-1 rotate-90">
            {label}
          </span>
        )}
        <div className="h-6 w-px bg-slate-800" />
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-3 py-2 my-2 w-full', className)}>
      <div className="h-px bg-slate-800 flex-1" />
      <div className="relative flex items-center gap-2 px-3 py-1 bg-slate-950/80 border border-slate-800/80 rounded-xs font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
        <svg className="w-12 h-2" viewBox="0 0 48 8">
          <line
            x1="0"
            y1="4"
            x2="48"
            y2="4"
            stroke="#00f0ff"
            strokeWidth="1.5"
            className="animate-data-flow"
          />
        </svg>
        <span>{label}</span>
      </div>
      <div className="h-px bg-slate-800 flex-1" />
    </div>
  );
};
