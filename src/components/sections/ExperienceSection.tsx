import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { experienceData } from '../../data/experience';
import { TechBadge } from '../UI/TechBadge';
import { CircuitBorder } from '../UI/CircuitBorder';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeader
            number="07"
            title="Engineering Experience & Track Record"
            subtitle="Chronological track record in Embedded Systems, Industrial Automation, Test Bench Validation, and Robotics engineering."
          />
        </RevealOnScroll>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-10">
          {experienceData.map((exp, idx) => (
            <RevealOnScroll key={exp.id} delay={100 + idx * 100}>
              <div className="relative pl-6 md:pl-8 group">
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300" />

                <CircuitBorder glow className="p-6 hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                    <div>
                      <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2 py-0.5 border border-cyan-800/60 mb-1 inline-block">
                        [{exp.type} ENGINEERING]
                      </span>
                      <h3 className="text-xl font-bold text-slate-100 font-sans">{exp.role}</h3>
                      <div className="text-sm font-sans text-slate-300 font-semibold">{exp.company}</div>
                    </div>

                    <div className="flex flex-col md:items-end font-mono text-xs text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm font-sans leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    [KEY ENGINEERING DELIVERABLES]
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <TechBadge key={tech} variant="default">
                      {tech}
                    </TechBadge>
                  ))}
                </div>
              </CircuitBorder>
            </div>
          </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
