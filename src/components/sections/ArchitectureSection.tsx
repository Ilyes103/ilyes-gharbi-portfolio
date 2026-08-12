import React, { useState } from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card } from '../UI/Card';
import { CircuitBorder } from '../UI/CircuitBorder';
import { CircuitLines } from '../UI/CircuitLines';
import { DataFlowConnector } from '../UI/DataFlowConnector';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { architectureLayers, engineeringPrinciples } from '../../data/architecture';
import type { ArchitectureLayer } from '../../types';
import { Cpu, Radio, Network, Bot, Server, Database, Monitor, Layers, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<ArchitectureLayer>(architectureLayers[0]);

  const layerIcons: Record<string, React.ElementType> = {
    physical: Radio,
    embedded: Cpu,
    communication: Network,
    control: Bot,
    'edge-software': Server,
    data: Database,
    visualization: Monitor
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      <Container size="wide">
        {/* Section Header */}
        <RevealOnScroll>
          <SectionHeader
            number="SEC_08"
            category="SYSTEM ARCHITECTURE ECOSYSTEM"
            title="FROM HARDWARE TO INTELLIGENT SYSTEMS"
            subtitle="Connecting physical systems, embedded intelligence, industrial communication, software, and data into integrated engineering solutions."
          />
        </RevealOnScroll>

        {/* Core Architecture Message Banner */}
        <div className="mb-10 p-4 bg-[#0f172a] border border-[#1e293b] rounded-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 rounded-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                // ARCHITECTURE CORE PRINCIPLE
              </div>
              <div className="text-slate-200 font-sans text-sm font-medium">
                "I connect physical systems, embedded intelligence, industrial communication, control, software, and data."
              </div>
            </div>
          </div>
          <TelemetryLabel label="ECOSYSTEM" value="7-LAYER PIPELINE" status="nominal" />
        </div>

        {/* Central Layered Architecture Pipeline Visualization */}
        <div className="mb-12">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span>// SYSTEM ARCHITECTURE STACK & DATA FLOW</span>
            <StatusDot status="green" label="INTERACTIVE PIPELINE" size="sm" />
          </div>

          <CircuitBorder glow className="p-5 sm:p-8 bg-[#0f172a] border-[#1e293b]">
            {/* Desktop Horizontal Layer Pipeline */}
            <div className="hidden lg:grid grid-cols-7 gap-3 relative">
              {architectureLayers.map((layer, index) => {
                const Icon = layerIcons[layer.id] || Cpu;
                const isSelected = activeLayer.id === layer.id;

                return (
                  <div key={layer.id} className="relative flex flex-col items-center">
                    <button
                      onClick={() => setActiveLayer(layer)}
                      className={`w-full text-left p-3 rounded-xs border transition-all duration-300 cursor-pointer flex flex-col justify-between h-44 ${
                        isSelected
                          ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                          : 'bg-[#121b2d] border-[#1e293b] hover:border-cyan-500/40 hover:bg-[#162238]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] text-cyan-400 font-bold">
                            {layer.step}
                          </span>
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        </div>
                        <div className="font-mono text-xs font-bold text-white mb-1 tracking-tight">
                          {layer.name}
                        </div>
                        <div className="text-[10px] font-sans text-slate-400 leading-tight">
                          {layer.subtitle}
                        </div>
                      </div>

                      <div className="mt-auto pt-2 border-t border-slate-800/80">
                        <span className="font-mono text-[9px] text-cyan-400 bg-slate-950 px-1.5 py-0.5 border border-slate-800 rounded-xs block truncate text-center">
                          {layer.flowLabel}
                        </span>
                      </div>
                    </button>

                    {/* Horizontal Connector Arrow between desktop steps */}
                    {index < architectureLayers.length - 1 && (
                      <div className="hidden" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Flow Progression Pipeline Ribbon */}
            <div className="hidden lg:flex items-center justify-between mt-4 pt-4 border-t border-slate-800 font-mono text-[11px] text-cyan-400">
              {architectureLayers.map((layer, idx) => (
                <React.Fragment key={layer.id}>
                  <span className="bg-slate-950 px-2.5 py-1 border border-slate-800 rounded-xs">
                    {layer.flowLabel}
                  </span>
                  {idx < architectureLayers.length - 1 && (
                    <span className="text-slate-600 animate-pulse">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile / Tablet Vertical Architecture Flow */}
            <div className="lg:hidden space-y-3">
              {architectureLayers.map((layer, idx) => {
                const Icon = layerIcons[layer.id] || Cpu;
                const isSelected = activeLayer.id === layer.id;

                return (
                  <React.Fragment key={layer.id}>
                    <div
                      onClick={() => setActiveLayer(layer)}
                      className={`p-4 bg-[#121b2d] border rounded-xs transition-all cursor-pointer ${
                        isSelected ? 'border-cyan-400 bg-cyan-950/40' : 'border-[#1e293b]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-slate-950 border border-slate-800 text-cyan-400 rounded-xs">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-mono text-xs font-bold text-white flex items-center gap-2">
                              <span>{layer.step}</span>
                              <span className="text-slate-600">|</span>
                              <span>{layer.name}</span>
                            </div>
                            <div className="text-xs text-slate-400 font-sans">{layer.subtitle}</div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-cyan-400 bg-slate-950 px-2 py-0.5 border border-slate-800">
                          {layer.flowLabel}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {layer.technologies.map((tech) => (
                          <TechBadge key={tech} variant="cyan" size="sm" showBrackets={false}>
                            {tech}
                          </TechBadge>
                        ))}
                      </div>
                    </div>

                    {idx < architectureLayers.length - 1 && (
                      <DataFlowConnector direction="horizontal" label={layer.flowLabel + ' →'} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Detailed Inspection Panel for Active Layer */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <Card variant="panel" className="p-4 sm:p-6 bg-[#121b2d] border-[#1e293b]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <div className="font-mono text-xs text-cyan-400 font-bold mb-1">
                      LAYER {activeLayer.step} // {activeLayer.name} SPECIFICATION
                    </div>
                    <div className="text-lg font-bold text-white font-sans">
                      {activeLayer.subtitle}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    FLOW STATE: <span className="text-cyan-400 font-bold">{activeLayer.flowLabel}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans mb-4">
                  {activeLayer.description}
                </p>

                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2">
                    [TECHNOLOGY ECOSYSTEM COMPONENTS]
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeLayer.technologies.map((tech) => (
                      <TechBadge key={tech} variant="cyan" size="md">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </CircuitBorder>

          {/* Neutral Architecture Disclaimer Notice */}
          <div className="mt-3 text-[11px] font-mono text-slate-500 flex items-center gap-2">
            <CircuitLines variant="bus" className="shrink-0" />
            <span>
              * Note: This architecture diagram represents my engineering technology ecosystem and layering approach across projects rather than a single unified deployment.
            </span>
          </div>
        </div>

        {/* 5 Compact Engineering Principles */}
        <div>
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span>// ENGINEERING PRINCIPLES</span>
            <span className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {engineeringPrinciples.map((principle) => (
              <Card
                key={principle.id}
                variant="panel"
                className="p-4 bg-[#0f172a] border-[#1e293b] hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {principle.number}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white mb-2 leading-tight">
                    {principle.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
