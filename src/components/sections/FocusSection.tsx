import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from '../UI/Card';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { CircuitBorder } from '../UI/CircuitBorder';
import { engineeringFocusDomains } from '../../data/focus';
import { Cpu, Gauge, Bot, Radio, Terminal, Network } from 'lucide-react';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const FocusSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    Gauge,
    Bot,
    Radio,
    Terminal,
    Network
  };

  return (
    <section id="focus" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      {/* Anchor for Navbar #skills navigation link */}
      <div id="skills" className="h-0 scroll-mt-24 pointer-events-none opacity-0" />

      <Container size="wide">
        <RevealOnScroll>
          <SectionHeader
            number="03"
            category="CAPABILITY MAP"
            title="Engineering Focus Areas"
            subtitle="Core technical domains spanning embedded hardware, cable harness manufacturing, industrial automation, robotics, and electronic design."
          />
        </RevealOnScroll>

        {/* Structured Grid Layout for Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringFocusDomains.map((domain) => {
            const Icon = iconMap[domain.iconName] || Cpu;
            const isCore = domain.category === 'core';
            const isIndustrial = domain.category === 'industrial';

            return isCore ? (
              /* Core Engineering Domain Card with Corner Notches */
              <CircuitBorder key={domain.id} glow className="flex flex-col justify-between h-full bg-[#0f172a] p-6">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 rounded-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">
                        DOMAIN_{domain.index}
                      </span>
                    </div>
                    <StatusDot status="cyan" label="CORE FOCUS" size="sm" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans mb-1">
                    {domain.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mb-3">
                    // {domain.subtitle}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans mb-5">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-2">
                    [TECHNOLOGY STACK]
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.technologies.map((tech) => (
                      <TechBadge key={tech} variant="cyan" size="sm">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              </CircuitBorder>
            ) : (
              /* Industrial & Specialized Focus Domain Card with Header Accent */
              <Card
                key={domain.id}
                variant="interactive"
                headerAccent={isIndustrial}
                className="flex flex-col justify-between h-full bg-[#0f172a] border-[#1e293b]"
              >
                <div>
                  <CardHeader className="mb-3 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-[#121b2d] border border-slate-700/80 text-slate-200 rounded-xs">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                          DOMAIN_{domain.index}
                        </span>
                      </div>
                      <StatusDot status="green" label="ACTIVE" size="sm" />
                    </div>
                  </CardHeader>

                  <CardTitle className="text-lg text-white mb-1">
                    {domain.title}
                  </CardTitle>
                  <CardSubtitle className="mb-3 text-slate-400">
                    // {domain.subtitle}
                  </CardSubtitle>
                  <CardBody className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {domain.description}
                  </CardBody>
                </div>

                <CardFooter className="pt-3 mt-auto border-t border-slate-800/80 flex flex-col items-start gap-2">
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    [FOCUS TECHNOLOGIES]
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.technologies.map((tech) => (
                      <TechBadge key={tech} variant={isIndustrial ? 'blue' : 'default'} size="sm">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
