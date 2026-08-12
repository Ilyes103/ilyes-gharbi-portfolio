import React from 'react';
import { cn } from '../../utils/cn';

interface CircuitBorderProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const CircuitBorder: React.FC<CircuitBorderProps> = ({
  children,
  className,
  glow = false
}) => {
  return (
    <div
      className={cn(
        'relative bg-[#121824] border border-[#1f293d] p-6 transition-all duration-300',
        glow && 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]',
        className
      )}
    >
      {/* Top Left Notch */}
      <span className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
      {/* Bottom Right Notch */}
      <span className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

      {/* Circuit Pin Accents */}
      <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-slate-700/80 rounded-full" />
      <span className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-slate-700/80 rounded-full" />

      {children}
    </div>
  );
};
