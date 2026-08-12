import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../UI/SectionHeader';
import { Button } from '../UI/Button';
import { TechBadge } from '../UI/TechBadge';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from '../UI/Card';
import { StatusDot } from '../UI/StatusDot';
import { CircuitBorder } from '../UI/CircuitBorder';
import { TechLink } from '../UI/TechLink';
import { CircuitLines } from '../UI/CircuitLines';
import { DataFlowConnector } from '../UI/DataFlowConnector';

export const DesignSystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components' | 'primitives' | 'accessibility'>('tokens');

  return (
    <div className="py-12 sm:py-16 lg:py-24 relative z-10 text-slate-200 font-sans">
      <Container size="wide">
        {/* Top Identity Header */}
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <StatusDot status="green" label="DESIGN SYSTEM v1.0" sublabel="STABLE" />
              <span className="text-slate-600 font-mono text-xs">|</span>
              <span className="font-mono text-xs text-slate-400">ENGINEERING INTELLIGENCE</span>
            </div>
            <div className="flex items-center gap-2">
              <TechBadge variant="cyan" showBrackets={false}>EMBEDDED</TechBadge>
              <TechBadge variant="blue" showBrackets={false}>TEST SYSTEMS</TechBadge>
              <TechBadge variant="green" showBrackets={false}>AUTOMATION</TechBadge>
              <TechBadge variant="outline" showBrackets={false}>INDUSTRY 4.0</TechBadge>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            Ilyes Gharbi — Visual Design System
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Electrical Engineer specializing in Embedded Systems, Test Engineering, Industrial IoT & Automotive Electronics. Reusable, high-performance visual foundation.
          </p>

          {/* Tab Navigation */}
          <nav className="flex flex-wrap gap-2 mt-8 border-t border-slate-800/80 pt-6" aria-label="Design System Sections">
            {[
              { id: 'tokens', label: '01 // COLOR & TOKENS' },
              { id: 'typography', label: '02 // TYPOGRAPHY SCALE' },
              { id: 'components', label: '03 // UI COMPONENTS' },
              { id: 'primitives', label: '04 // VISUAL PRIMITIVES' },
              { id: 'accessibility', label: '05 // ACCESSIBILITY & LAYOUT' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer rounded-xs border ${
                  activeTab === tab.id
                    ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        {/* SECTION 1: COLOR TOKENS */}
        {activeTab === 'tokens' && (
          <section className="space-y-10">
            <SectionHeader
              number="01"
              category="COLOR SYSTEM"
              title="Design Tokens & Color Palette"
              subtitle="Curated, high-contrast dark color palette engineered for legibility, low cognitive load, and subtle industrial interface aesthetics."
            />

            {/* Background Surfaces */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">// BACKGROUND & SURFACES</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#080c14] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-[#080c14] rounded border border-slate-800 mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-400">#080c14</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-bg</div>
                  <div className="text-xs text-slate-400">Near Black background root</div>
                </div>

                <div className="p-4 bg-[#0b0f17] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-[#0b0f17] rounded border border-slate-800 mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-400">#0b0f17</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-navy</div>
                  <div className="text-xs text-slate-400">Deep Navy page backdrop</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-[#0f172a] rounded border border-slate-800 mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-400">#0f172a</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-surface</div>
                  <div className="text-xs text-slate-400">Card & container surface</div>
                </div>

                <div className="p-4 bg-[#121b2d] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-[#121b2d] rounded border border-slate-800 mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-400">#121b2d</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-panel</div>
                  <div className="text-xs text-slate-400">Elevated panel surface</div>
                </div>
              </div>
            </div>

            {/* Primaries & Secondaries */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">// PRIMARIES & STATUS INDICATORS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-cyan-400 rounded mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-950 font-bold">#00f0ff</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-cyan</div>
                  <div className="text-xs text-slate-400">Electric Cyan highlight</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-blue-600 rounded mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-white font-bold">#2563eb</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-blue</div>
                  <div className="text-xs text-slate-400">Electric Blue primary</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-emerald-500 rounded mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-950 font-bold">#10b981</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-green</div>
                  <div className="text-xs text-slate-400">Subtle status indicator</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-16 bg-amber-500 rounded mb-3 flex items-end p-2">
                    <span className="font-mono text-[10px] text-slate-950 font-bold">#f59e0b</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">eng-amber</div>
                  <div className="text-xs text-slate-400">Standby / test warning</div>
                </div>
              </div>
            </div>

            {/* Typography & Border Colors */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">// BORDERS & TEXT CONTRAST</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-12 bg-white rounded mb-2 flex items-center justify-center">
                    <span className="font-mono text-xs text-slate-950 font-bold">White text</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">text-white (#ffffff)</div>
                  <div className="text-xs text-slate-400">Display headings</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-12 bg-slate-300 rounded mb-2 flex items-center justify-center">
                    <span className="font-mono text-xs text-slate-950 font-bold">Light Gray text</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">text-slate-300</div>
                  <div className="text-xs text-slate-400">Body & description</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-12 bg-slate-400 rounded mb-2 flex items-center justify-center">
                    <span className="font-mono text-xs text-slate-950 font-bold">Muted Gray</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">text-slate-400</div>
                  <div className="text-xs text-slate-400">Subtitles & captions</div>
                </div>

                <div className="p-4 bg-[#0f172a] border border-[#1e293b] rounded-md">
                  <div className="h-12 bg-[#1e293b] rounded mb-2 border border-slate-700 flex items-center justify-center">
                    <span className="font-mono text-xs text-slate-300">Border token</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">border-slate-800 (#1e293b)</div>
                  <div className="text-xs text-slate-400">Subtle dark blue/gray</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: TYPOGRAPHY SCALE */}
        {activeTab === 'typography' && (
          <section className="space-y-10">
            <SectionHeader
              number="02"
              category="TYPOGRAPHY SCALE"
              title="Sans-Serif & Monospace Hierarchy"
              subtitle="Dual typography system combining modern sans-serif (Inter) for human-readable content with monospace (JetBrains Mono) for engineering precision."
            />

            <div className="space-y-8 bg-[#0f172a] p-6 sm:p-8 rounded-lg border border-[#1e293b]">
              <div className="border-b border-slate-800 pb-6">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// DISPLAY HEADING (48px - 60px)</div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  Embedded Systems Engineering
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// SECTION HEADING (24px - 36px)</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Automotive Test Systems & Industrial Automation
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// SUBTITLE (18px - 20px)</div>
                <div className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
                  Architecting real-time firmware, CAN/Modbus communication protocols, and Hardware-in-the-Loop (HIL) test platforms.
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// BODY (16px)</div>
                <div className="text-base text-slate-300 leading-relaxed font-sans max-w-3xl">
                  Specialized in microcontrollers (STM32, ESP32, AVR), real-time operating systems (FreeRTOS), and industrial control networks. Experienced in building automated test benches and IoT edge telemetry gateways for Industry 4.0 applications.
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// CAPTION (12px - 14px)</div>
                <div className="text-xs sm:text-sm text-slate-400 font-sans">
                  * Hardware design verified with oscilloscope and logic analyzer telemetry.
                </div>
              </div>

              <div>
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">// TECHNICAL MONOSPACE LABEL (12px uppercase)</div>
                <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider bg-cyan-950/40 p-3 rounded border border-cyan-900/50 inline-block">
                  BAUD_RATE: 500000 | PROTOCOL: CAN_BUS_2.0B | LATENCY: 1.2MS | STATUS: OK
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: REUSABLE UI COMPONENTS */}
        {activeTab === 'components' && (
          <section className="space-y-12">
            <SectionHeader
              number="03"
              category="COMPONENT FOUNDATION"
              title="Reusable UI Components"
              subtitle="Production-ready buttons, badges, telemetry labels, cards, status indicators, and link elements."
            />

            {/* BUTTONS */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400">// BUTTONS & CTA CONTROLS</h3>
              <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Primary Engineering CTA</Button>
                  <Button variant="secondary">Secondary Technical CTA</Button>
                  <Button variant="outline">Outline CTA</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="primary" disabled>Disabled State</Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                  <Button variant="primary" size="sm">Small CTA</Button>
                  <Button variant="primary" size="md">Medium CTA</Button>
                  <Button variant="primary" size="lg">Large CTA</Button>
                  <Button variant="outline" icon={<span className="text-xs">⚙</span>}>With Icon</Button>
                </div>
              </div>
            </div>

            {/* BADGES & TELEMETRY LABELS */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400">// BADGES & TELEMETRY METADATA</h3>
              <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg space-y-6">
                <div>
                  <div className="text-xs text-slate-400 mb-2 font-mono">Tech Badges:</div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge variant="cyan">STM32F4</TechBadge>
                    <TechBadge variant="green" dot>FreeRTOS</TechBadge>
                    <TechBadge variant="blue">CAN Bus 2.0B</TechBadge>
                    <TechBadge variant="amber">MODBUS RTU</TechBadge>
                    <TechBadge variant="default">C/C++</TechBadge>
                    <TechBadge variant="outline">Industry 4.0</TechBadge>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 mb-2 font-mono">Telemetry Labels:</div>
                  <div className="flex flex-wrap gap-3">
                    <TelemetryLabel label="CPU_LOAD" value="14.2" unit="%" status="nominal" />
                    <TelemetryLabel label="BUS_SPEED" value="500" unit="KBPS" status="active" />
                    <TelemetryLabel label="TEMP_SENSOR" value="42.8" unit="°C" status="warning" />
                    <TelemetryLabel label="FW_BUILD" value="v2.4.1" status="neutral" />
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS INDICATORS */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400">// LIVE STATUS INDICATORS</h3>
              <div className="p-6 bg-[#0f172a] border border-[#1e293b] rounded-lg flex flex-wrap gap-6 items-center">
                <StatusDot status="green" label="SYSTEM NOMINAL" sublabel="ONLINE" />
                <StatusDot status="cyan" label="TELEMETRY STREAMING" sublabel="ACTIVE" />
                <StatusDot status="amber" label="TEST BENCH STANDBY" sublabel="WAITING" />
              </div>
            </div>

            {/* CARDS */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400">// CARDS & CONTAINERS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="interactive" headerAccent>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-1">
                      <TechBadge variant="cyan" size="sm">FIRMWARE</TechBadge>
                      <StatusDot status="green" size="sm" />
                    </div>
                    <CardTitle>STM32 HIL Test Rig</CardTitle>
                    <CardSubtitle>Automotive CAN Communication</CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    Automated Hardware-in-the-Loop test bench executing real-time validation for automotive ECU firmware.
                  </CardBody>
                  <CardFooter>
                    <span className="text-slate-400">LATENCY: 850µs</span>
                    <TechLink href="#0">DETAILS</TechLink>
                  </CardFooter>
                </Card>

                <Card variant="panel" notch>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-1">
                      <TechBadge variant="blue" size="sm">IOT GATEWAY</TechBadge>
                      <StatusDot status="cyan" size="sm" />
                    </div>
                    <CardTitle>Industrial Edge Telemetry</CardTitle>
                    <CardSubtitle>Modbus to MQTT Broker</CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    Edge gateway converting RS485 Modbus RTU telemetry from industrial sensors to secure MQTT stream.
                  </CardBody>
                  <CardFooter>
                    <span className="text-slate-400">UPTIME: 99.9%</span>
                    <TechLink href="#0">SPEC</TechLink>
                  </CardFooter>
                </Card>

                <CircuitBorder glow>
                  <div className="flex justify-between items-center mb-3">
                    <TechBadge variant="green" size="sm">AUTOMATION</TechBadge>
                    <StatusDot status="green" size="sm" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Siemens PLC Control</h4>
                  <p className="text-xs text-slate-400 font-mono mb-3">// TIA PORTAL v18</p>
                  <p className="text-sm text-slate-300 mb-4">
                    Programmable Logic Controller architecture for automated conveyor assembly lines.
                  </p>
                  <TechLink href="#0">VIEW SYSTEM ARCHITECTURE</TechLink>
                </CircuitBorder>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: VISUAL PRIMITIVES */}
        {activeTab === 'primitives' && (
          <section className="space-y-10">
            <SectionHeader
              number="04"
              category="ENGINEERING PRIMITIVES"
              title="Subtle Circuit Lines & Data Connectors"
              subtitle="Restrained visual primitives providing technical context without obscuring content."
            />

            <div className="space-y-8 bg-[#0f172a] p-6 sm:p-8 rounded-lg border border-[#1e293b]">
              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 mb-3">// DATA FLOW CONNECTOR</h4>
                <DataFlowConnector label="CAN BUS 2.0B // 500 KBPS TELEMETRY" />
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 mb-3">// HORIZONTAL CIRCUIT BUS TRACE</h4>
                <CircuitLines variant="horizontal" />
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 mb-3">// BUS JUNCTION & CORNER primitive</h4>
                <div className="flex items-center gap-6">
                  <CircuitLines variant="corner" />
                  <CircuitLines variant="bus" />
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-slate-400 mb-3">// CIRCUIT BORDER CONTAINER</h4>
                <CircuitBorder className="max-w-md">
                  <p className="font-mono text-xs text-cyan-400">// CIRCUIT BORDER PRIMITIVE</p>
                  <p className="text-sm text-slate-300 mt-2">
                    Features precision PCB corner notches and corner pin accents for industrial engineering aesthetics.
                  </p>
                </CircuitBorder>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: ACCESSIBILITY & LAYOUT */}
        {activeTab === 'accessibility' && (
          <section className="space-y-10">
            <SectionHeader
              number="05"
              category="SYSTEM COMPLIANCE"
              title="Accessibility & Responsive Layout"
              subtitle="Full keyboard navigation support, high WCAG contrast standards, reduced-motion preferences, and adaptive single-to-multi column container layouts."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="panel">
                <CardTitle className="mb-2">Keyboard Navigation & Focus Ring</CardTitle>
                <CardBody>
                  All interactive controls (buttons, links, badges, tab controls) include explicit <code className="text-cyan-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 border border-slate-700">:focus-visible</code> styling with high-contrast 2px cyan ring offset.
                </CardBody>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <Button variant="outline" size="sm">Press TAB key to test focus</Button>
                </div>
              </Card>

              <Card variant="panel">
                <CardTitle className="mb-2">Reduced Motion & Performance</CardTitle>
                <CardBody>
                  Animations (signal pulses, data-flow connectors, smooth scroll) strictly respect <code className="text-cyan-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 border border-slate-700">prefers-reduced-motion: reduce</code> media queries to prevent discomfort.
                </CardBody>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                  <StatusDot status="green" label="LIGHTWEIGHT zero dependencies" />
                </div>
              </Card>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};
