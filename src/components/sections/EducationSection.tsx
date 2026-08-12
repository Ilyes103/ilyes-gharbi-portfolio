import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { educationData } from '../../data/education';
import { CircuitBorder } from '../UI/CircuitBorder';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            number="07-B"
            title="Academic Grounding & Qualifications"
            subtitle="Formal academic preparation in Electrical Engineering, Control Systems, Embedded Firmware, and Preparatory Mathematics & Physics."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <RevealOnScroll key={edu.id} delay={100 + idx * 100}>
              <CircuitBorder glow className="flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-900 border border-slate-700 text-cyan-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-bold">
                        [{edu.period}]
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-400">{edu.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 font-sans mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-sans text-cyan-400 font-semibold mb-2">
                    {edu.specialization}
                </p>
                <div className="text-xs font-mono text-slate-400 mb-4">{edu.institution}</div>

                <div className="space-y-2 mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    [KEY COURSEWORK & RIGOR]
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 font-sans">
                    {edu.keyCoursework.map((course, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  [ACADEMIC HIGHLIGHTS]
                </div>
                <ul className="space-y-1 text-xs text-emerald-400 font-sans">
                  {edu.achievements.map((achieve, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CircuitBorder>
          </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
