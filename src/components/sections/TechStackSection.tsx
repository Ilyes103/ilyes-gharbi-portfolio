import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '../UI/Card';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { DataFlowConnector } from '../UI/DataFlowConnector';
import { techStackCategories, architectureFlow } from '../../data/techStack';

export const TechStackSection: React.FC = () => {
  return (
    <section id="stack" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      <Container size="wide">
        <SectionHeader
          number="04"
          category="TECHNOLOGY STACK"
          title="Technical Stack"
          subtitle="Tools and technologies I use to build, connect, test, and monitor intelligent industrial systems."
        />

        {/* Technology Relationship Architecture Strip */}
        <div className="mb-12 p-5 bg-[#0f172a] border border-[#1e293b] rounded-md">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <StatusDot status="green" label="STACK ARCHITECTURE PIPELINE" size="sm" />
              <span className="font-mono text-xs text-slate-500">// END-TO-END SYSTEM INTEGRATION</span>
            </div>
            <TelemetryLabel label="TELEMETRY" value="NOMINAL" status="nominal" />
          </div>

          {/* Desktop/Tablet Horizontal Pipeline Flow */}
          <div className="hidden md:grid md:grid-cols-6 gap-2 items-center text-center font-mono">
            {architectureFlow.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="p-2.5 bg-[#121b2d] border border-[#1e293b] rounded-xs hover:border-cyan-500/40 transition-colors">
                  <div className="text-[10px] text-cyan-400 font-semibold mb-0.5">
                    [{item.step}]
                  </div>
                  <div className="text-xs font-bold text-white tracking-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans mt-1 line-clamp-1">
                    {item.tech}
                  </div>
                </div>
                {idx < architectureFlow.length - 1 && (
                  <div className="hidden lg:block text-slate-600 text-xs font-bold text-center -mx-2">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Vertical Flow Summary */}
          <div className="md:hidden space-y-2">
            <DataFlowConnector label="HARDWARE → EMBEDDED → COMMUNICATION → CONTROL → SOFTWARE → DATA" />
          </div>
        </div>

        {/* Structured Engineering Technology Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackCategories.map((cat) => (
            <Card
              key={cat.id}
              variant="interactive"
              className="flex flex-col justify-between h-full bg-[#0f172a] border-[#1e293b] p-5 sm:p-6"
            >
              <div>
                {/* Category Header */}
                <CardHeader className="mb-4 border-b border-slate-800 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest">
                      STACK_{cat.index}
                    </span>
                    <StatusDot status="green" label="ACTIVE" size="sm" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white mt-1">
                    {cat.title}
                  </CardTitle>
                </CardHeader>

                {/* Technologies Badges */}
                <CardBody className="mb-5 space-y-0">
                  <div className="flex flex-wrap gap-2">
                    {cat.technologies.map((tech) => (
                      <TechBadge
                        key={tech}
                        variant={cat.variant}
                        size="md"
                        className="hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
                      >
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </CardBody>
              </div>

              {/* Technical Context Footer */}
              <CardFooter className="pt-3 mt-auto border-t border-slate-800/80 flex items-center justify-between">
                <span className="font-mono text-[11px] text-slate-400 tracking-wide">
                  // {cat.contextualLabel}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
