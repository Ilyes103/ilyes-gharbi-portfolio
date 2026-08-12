import React from 'react';
import { cn } from '../../utils/cn';

export interface TelemetryLabelProps {
  label: string;
  value: React.ReactNode;
  unit?: string;
  status?: 'nominal' | 'active' | 'warning' | 'neutral';
  className?: string;
}

export const TelemetryLabel: React.FC<TelemetryLabelProps> = ({
  label,
  value,
  unit,
  status = 'neutral',
  className
}) => {
  const statusColors = {
    nominal: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/20',
    active: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20',
    warning: 'text-amber-400 border-amber-500/20 bg-amber-950/20',
    neutral: 'text-slate-300 border-slate-800 bg-slate-900/50'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-2.5 py-1 rounded-xs border font-mono text-xs tracking-wider',
        statusColors[status],
        className
      )}
    >
      <span className="text-slate-500 uppercase text-[11px] font-medium">{label}:</span>
      <span className="font-semibold">{value}</span>
      {unit && <span className="text-slate-400 text-[10px]">{unit}</span>}
    </div>
  );
};
