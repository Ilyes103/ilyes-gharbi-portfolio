import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card } from '../UI/Card';
import { CircuitBorder } from '../UI/CircuitBorder';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { DataFlowConnector } from '../UI/DataFlowConnector';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const AboutSection: React.FC = () => {
  const spectrumNodes = [
    { label: 'ELECTRICAL', desc: 'Circuitry, Power & Hardware Integration', code: 'NODE_01' },
    { label: 'EMBEDDED', desc: 'STM32 / ESP32 Firmware & HAL Execution', code: 'NODE_02' },
    { label: 'CONNECTED', desc: 'CAN bus, Modbus RTU & MQTT Communication', code: 'NODE_03' },
    { label: 'INTELLIGENT', desc: 'Edge Microservices & HMI Telemetry UI', code: 'NODE_04' },
    { label: 'INDUSTRIAL', desc: 'Automated Test Benches & Industry 4.0', code: 'NODE_05' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      <Container size="wide">
        <RevealOnScroll>
          <SectionHeader
            number="02"
            category="ENGINEERING PROFILE"
            title="About & Technical Spectrum"
            subtitle="Connecting physical hardware, embedded firmware, fieldbus communication, and intelligent industrial systems."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Concise Professional Profile */}
          <div className="lg:col-span-7 space-y-5">
            <RevealOnScroll delay={150} direction="right">
              <div className="flex items-center gap-3 mb-4">
                <StatusDot status="green" label="PROFILE VERIFIED" size="sm" />
                <span className="font-mono text-xs text-slate-500">// ELECTRICAL ENGINEERING</span>
              </div>

              <p className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed font-sans font-medium mb-4">
                I am <strong className="text-white font-bold">Ilyes Gharbi</strong>, an <strong className="text-cyan-400 font-bold">Electrical Engineer</strong> specialized in Embedded Systems with hands-on experience in the automotive wiring harness industry at SEBN Jendouba.
              </p>

              <div className="space-y-2.5 text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                <div>
                  <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-0.5">// WHAT I STUDIED</span>
                  Hold an <strong className="text-slate-100 font-semibold">Engineering Degree in Electrical Engineering</strong> from the International Multidisciplinary School of Sousse (2022–2025) and a <strong className="text-slate-100 font-semibold">Bachelor’s Degree in Electrical Engineering</strong> from the Higher Institute of Technological Studies of Jendouba (2018–2022).
                </div>

                <div>
                  <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-0.5">// WHAT I BUILD</span>
                  Engineered ROS2 & LiDAR autonomous robots with robotic arm product handling, React Native mobile supervision apps, ESP32-based Industrial IoT telemetry nodes, and SCADA monitoring dashboards (STEG Gas Station & Smart Factory Environmental Monitoring).
                </div>

                <div>
                  <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-0.5">// WHAT INTERESTS ME</span>
                  Passionate about industrial processes, automation, cable harness manufacturing, smart factory telemetry, process improvement methodologies, and analytical problem solving.
                </div>
              </div>

              {/* Certifications & Languages Badges */}
              <div className="pt-3 mt-4 border-t border-[#1e293b] space-y-3">
                <div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-1.5">
                    // CERTIFICATIONS & METHODOLOGIES:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge variant="green">Node-RED Fundamentals</TechBadge>
                    <a
                      href="https://www.6sigmastudy.com/certification/verify?type=SSYB&number=1119216"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Verify Six Sigma Yellow Belt certification"
                      className="rounded-xs focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-1 hover:opacity-90 transition-opacity"
                    >
                      <TechBadge variant="amber">Six Sigma Yellow Belt ↗</TechBadge>
                    </a>
                    <TechBadge variant="cyan">Process Improvement</TechBadge>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-1.5">
                    // LANGUAGES:
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-300">
                    <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded-xs">Arabic: Native</span>
                    <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded-xs">French: Autonomous (B1)</span>
                    <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded-xs">English: Autonomous (B1)</span>
                    <span className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded-xs">German: Basic (A1)</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Engineering Spectrum Visualization + Contextual Image */}
          <div className="lg:col-span-5 space-y-4">
            <RevealOnScroll delay={250} direction="left">
              <CircuitBorder glow className="p-5 sm:p-6 bg-[#0f172a] border-[#1e293b]">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                    // SPECTRUM MATRIX
                  </div>
                  <TelemetryLabel label="SYSTEM" value="INTEGRATED" status="nominal" />
                </div>

                <div className="space-y-2">
                  {spectrumNodes.map((node, idx) => (
                    <React.Fragment key={node.label}>
                      <Card variant="panel" className="p-3 border-[#1e293b] hover:border-cyan-500/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                              <span className="text-cyan-400 font-semibold">{node.code}</span>
                              <span className="text-slate-600">|</span>
                              <span>{node.label}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                              {node.desc}
                            </div>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400/80 shrink-0 ml-2" />
                        </div>
                      </Card>
                      {idx < spectrumNodes.length - 1 && (
                        <div className="py-0.5">
                          <DataFlowConnector direction="horizontal" label="" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CircuitBorder>

              {/* Embedded electronics contextual image */}
              <div className="group relative overflow-hidden rounded-xs border border-[#1e293b] hover:border-cyan-500/30 transition-colors duration-300">
                <div className="aspect-video w-full">
                  <img
                    src="/images/about-embedded-electronics.webp"
                    alt="STM32 PCB with embedded electronics and oscilloscope probe during development"
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="506"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-90"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-cyan-400/60 uppercase tracking-wider">// EMBEDDED SYSTEMS DOMAIN</span>
                  <span className="font-mono text-[9px] text-slate-600">REF</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
};
