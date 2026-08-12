import React from 'react';
import { Modal } from './Modal';
import { TechBadge } from './TechBadge';
import { StatusDot } from './StatusDot';
import { TelemetryLabel } from './TelemetryLabel';
import { DataFlowConnector } from './DataFlowConnector';
import { Card } from './Card';
import type { ProjectItem } from '../../data/projects';

export interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`${project.category} // PROJECT_${project.number}`}
    >
      {/* 01 — OVERVIEW */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
          <StatusDot status="green" size="sm" />
          <span>01 — OVERVIEW</span>
        </div>
        <p className="text-slate-200 text-sm leading-relaxed font-sans">
          {project.overview}
        </p>
      </section>

      {/* 02 — ENGINEERING CHALLENGE & FOCUS */}
      <section className="space-y-3 pt-4 border-t border-slate-800/80">
        <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
          02 — ENGINEERING CHALLENGE & FOCUS
        </div>
        <p className="text-slate-300 text-sm leading-relaxed font-sans">
          {project.challenge}
        </p>

        <div className="pt-2">
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2">
            [CORE ENGINEERING FOCUS]
          </div>
          <div className="flex flex-wrap gap-2">
            {project.engineeringFocus.map((focus) => (
              <span
                key={focus}
                className="px-2.5 py-1 text-xs font-mono bg-[#121824] text-slate-300 border border-[#1f293d] rounded-xs"
              >
                • {focus}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — SYSTEM ARCHITECTURE PIPELINE */}
      <section className="space-y-3 pt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
            03 — SYSTEM ARCHITECTURE PIPELINE
          </div>
          <TelemetryLabel label="DATA FLOW" value="END-TO-END" status="nominal" />
        </div>

        <Card variant="panel" className="p-4 border-[#1e293b]">
          <DataFlowConnector label={project.systemPipeline.join(' → ')} />
          <p className="text-xs text-slate-400 font-mono mt-3 leading-relaxed bg-slate-950/60 p-3 rounded-xs border border-slate-800">
            {project.architectureDetails}
          </p>
        </Card>
      </section>

      {/* 04 — TECHNOLOGIES USED */}
      <section className="space-y-3 pt-4 border-t border-slate-800/80">
        <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
          04 — TECHNOLOGIES USED
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} variant="cyan" size="md">
              {tech}
            </TechBadge>
          ))}
        </div>
      </section>

      {/* 05 — ENGINEERING APPROACH */}
      <section className="space-y-2 pt-4 border-t border-slate-800/80">
        <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
          05 — ENGINEERING APPROACH
        </div>
        <p className="text-slate-300 text-sm leading-relaxed font-sans">
          {project.approach}
        </p>
      </section>
    </Modal>
  );
};
