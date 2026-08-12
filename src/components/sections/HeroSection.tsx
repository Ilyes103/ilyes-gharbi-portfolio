import React from 'react';
import { ArrowRight, Download, Radio, Cpu, Server, Monitor } from 'lucide-react';
import { Button } from '../UI/Button';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { CircuitBorder } from '../UI/CircuitBorder';
import { DataFlowConnector } from '../UI/DataFlowConnector';
import { Container } from '../layout/Container';
import { NAV_CONFIG } from '../../data/config';
import { RevealOnScroll } from '../motion/RevealOnScroll';
import { BlurText } from '../motion/BlurText';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'projects';
    }
  };

  const handleCvDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    fetch(NAV_CONFIG.cvDownloadPath, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          alert(`[CV Download]\nPath: ${NAV_CONFIG.cvDownloadPath}\nPlease add cv.pdf to /public.`);
        }
      })
      .catch(() => {
        e.preventDefault();
        alert(`[CV Download]\nPath: ${NAV_CONFIG.cvDownloadPath}\nPlease add cv.pdf to /public.`);
      });
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-center">
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity, Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Technical Eyebrow */}
            <RevealOnScroll delay={50} direction="down">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-xs">
                  ELECTRICAL ENGINEER
                </span>
                <span className="text-slate-600 font-mono text-xs">•</span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  EMBEDDED SYSTEMS
                </span>
                <span className="text-slate-600 font-mono text-xs">•</span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  AUTOMOTIVE WIRING HARNESS
                </span>
                <span className="text-slate-600 font-mono text-xs">•</span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  INDUSTRIAL AUTOMATION
                </span>
              </div>
            </RevealOnScroll>

            {/* Main Headline BlurText Reveal */}
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold">
              <BlurText
                text="I BUILD INTELLIGENT SYSTEMS FOR THE INDUSTRIAL WORLD."
                highlightText="INTELLIGENT SYSTEMS"
                delay={150}
              />
            </div>

            {/* Supporting Description */}
            <RevealOnScroll delay={250} direction="up">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                Embedded Systems Engineer with experience in the automotive wiring harness industry, passionate about industrial processes, automation, and smart manufacturing.
              </p>
            </RevealOnScroll>

            {/* Target Specialization Badges */}
            <RevealOnScroll delay={350} direction="up">
              <div className="pt-2">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2.5">
                  // KEY ENGINEERING SPECIALIZATIONS:
                </div>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant="cyan">Embedded Systems</TechBadge>
                  <TechBadge variant="green">Automotive Cable Harness</TechBadge>
                  <TechBadge variant="blue">Industrial Automation</TechBadge>
                  <TechBadge variant="amber">Industrial IoT & SCADA</TechBadge>
                  <TechBadge variant="outline">ROS2 & Robotics</TechBadge>
                  <TechBadge variant="default">Process Improvement</TechBadge>
                </div>
              </div>
            </RevealOnScroll>

            {/* CTAs */}
            <RevealOnScroll delay={450} direction="up">
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToProjects}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Projects
                </Button>

                <a
                  href={NAV_CONFIG.cvDownloadPath}
                  download="Ilyes_Gharbi_CV.pdf"
                  onClick={handleCvDownload}
                  aria-label="Download CV PDF"
                >
                  <Button variant="outline" size="lg" icon={<Download className="w-4 h-4" />}>
                    Download CV
                  </Button>
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Engineering System Visualization & Status Panel */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll delay={300} direction="left">
              {/* Custom Engineering System Pipeline Node Visualization */}
              <CircuitBorder glow className="p-5 sm:p-6 bg-[#0f172a] border-[#1e293b]">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="font-mono text-xs text-cyan-400 tracking-wider font-semibold">
                  // INDUSTRIAL DATA PIPELINE
                </div>
                <StatusDot status="green" label="LIVE PIPELINE" size="sm" />
              </div>

              {/* Data Pipeline Nodes */}
              <div className="space-y-2.5">
                {/* Stage 1: Sensors */}
                <div className="p-3 bg-[#121b2d] border border-[#1e293b] rounded-xs hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 rounded-xs">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                          <span>SENSORS</span>
                          <span className="text-[10px] text-slate-400 font-normal">[DHT • MQ • IO]</span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Thermocouples, Encoders, 4-20mA, SPI
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400/80 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      ANALOG / SPI
                    </span>
                  </div>
                </div>

                {/* Connector 1 */}
                <div className="py-0.5">
                  <DataFlowConnector label="RAW SENSORY TELEMETRY" />
                </div>

                {/* Stage 2: MCU / PLC */}
                <div className="p-3 bg-[#121b2d] border border-[#1e293b] rounded-xs hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-blue-950/60 border border-blue-800/50 text-blue-400 rounded-xs">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                          <span>MCU / PLC</span>
                          <span className="text-[10px] text-slate-400 font-normal">[ESP32 • STM32]</span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          FreeRTOS task control & Siemens S7 PLC
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-blue-400/80 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      REAL-TIME HAL
                    </span>
                  </div>
                </div>

                {/* Connector 2: Protocol Bus */}
                <div className="py-0.5">
                  <DataFlowConnector label="CAN 2.0B / MQTT / OPC UA" />
                </div>

                {/* Stage 3: Edge */}
                <div className="p-3 bg-[#121b2d] border border-[#1e293b] rounded-xs hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 rounded-xs">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                          <span>EDGE PROCESSING</span>
                          <span className="text-[10px] text-slate-400 font-normal">[GATEWAY]</span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Docker containers, Queue broker, Microservices
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400/80 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      WEBSOCKETS
                    </span>
                  </div>
                </div>

                {/* Connector 3 */}
                <div className="py-0.5">
                  <DataFlowConnector label="SCADA TELEMETRY BUS" />
                </div>

                {/* Stage 4: SCADA / Web Dashboard */}
                <div className="p-3 bg-[#121b2d] border border-[#1e293b] rounded-xs hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-amber-950/60 border border-amber-800/50 text-amber-400 rounded-xs">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                          <span>SCADA / DASHBOARD</span>
                          <span className="text-[10px] text-slate-400 font-normal">[HMI UI]</span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Real-time telemetry interface & alarm system
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-amber-400/80 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      HMI VISUAL
                    </span>
                  </div>
                </div>
              </div>
            </CircuitBorder>

            {/* System Status Panel */}
            <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>// SYSTEM STATUS PANEL</span>
                <span className="text-[10px] text-slate-500 font-normal">DIAGNOSTIC VERIFIED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-2 bg-[#121b2d] border border-slate-800 rounded-xs flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-300">EMBEDDED SYSTEMS</span>
                  <StatusDot status="green" label="ACTIVE" size="sm" />
                </div>

                <div className="p-2 bg-[#121b2d] border border-slate-800 rounded-xs flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-300">INDUSTRIAL IoT</span>
                  <StatusDot status="green" label="ACTIVE" size="sm" />
                </div>

                <div className="p-2 bg-[#121b2d] border border-slate-800 rounded-xs flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-300">TEST SYSTEMS</span>
                  <StatusDot status="green" label="ACTIVE" size="sm" />
                </div>

                <div className="p-2 bg-[#121b2d] border border-slate-800 rounded-xs flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-300">AUTOMATION</span>
                  <StatusDot status="cyan" label="READY" size="sm" />
                </div>

                <div className="p-2 bg-[#121b2d] border border-slate-800 rounded-xs flex items-center justify-between sm:col-span-2">
                  <span className="font-mono text-xs text-slate-300">ROBOTICS & INDUSTRY 4.0</span>
                  <StatusDot status="cyan" label="READY" size="sm" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
};
