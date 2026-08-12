import React from 'react';

export const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-50" />
      
      {/* Subtle Cyan & Blue Radial Vignettes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      
      {/* Subtle Industrial Grid Lines */}
      <div className="absolute top-0 left-8 sm:left-16 bottom-0 w-px bg-slate-900/60" />
      <div className="absolute top-0 right-8 sm:right-16 bottom-0 w-px bg-slate-900/60" />
    </div>
  );
};
