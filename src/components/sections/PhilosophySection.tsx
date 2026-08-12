import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { philosophyPrinciples } from '../../data/philosophy';
import { CircuitBorder } from '../UI/CircuitBorder';
import { CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          title="Engineering Philosophy & System Principles"
          subtitle="Non-negotiable engineering principles guiding execution across real-time embedded firmware, noise-immune fieldbus networks, hardware validation, and edge integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyPrinciples.map((item) => (
            <CircuitBorder key={item.id} glow className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 border border-cyan-800/60">
                    PRINCIPLE {item.number}
                  </span>
                  <span className="font-mono text-xs text-slate-500">// NON-NEGOTIABLE SPEC</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 font-sans mb-2">
                  {item.title}
                </h3>

                <blockquote className="border-l-2 border-cyan-400 pl-3 py-1 my-3 bg-slate-900/60 font-mono text-xs text-cyan-300 italic">
                  {item.quote}
                </blockquote>

                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  [PRACTICAL IMPLEMENTATION RULES]
                </div>
                <ul className="space-y-1.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CircuitBorder>
          ))}
        </div>
      </div>
    </section>
  );
};
