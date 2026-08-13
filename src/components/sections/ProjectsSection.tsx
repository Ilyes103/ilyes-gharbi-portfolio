import React, { useState, lazy, Suspense } from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '../UI/Card';
import { TechBadge } from '../UI/TechBadge';
import { StatusDot } from '../UI/StatusDot';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { CircuitBorder } from '../UI/CircuitBorder';
import { DataFlowConnector } from '../UI/DataFlowConnector';
import { Button } from '../UI/Button';
import { projectsData, type ProjectItem } from '../../data/projects';
import { Bot, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../motion/RevealOnScroll';

const ProjectDetailModal = lazy(() =>
  import('../UI/ProjectDetailModal').then((module) => ({ default: module.ProjectDetailModal }))
);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      <Container size="wide">
        <RevealOnScroll>
          <SectionHeader
            number="05"
            category="FEATURED PROJECTS"
            title="Engineering Projects"
            subtitle="Selected projects combining embedded systems, industrial automation, robotics, software, communication, and Industry 4.0."
          />
        </RevealOnScroll>

        {/* FEATURED PROJECT 01 — LARGE CASE STUDY PRESENTATION */}
        <div className="mb-14">
          <RevealOnScroll delay={150}>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
              <StatusDot status="green" label="FEATURED CASE STUDY" size="sm" />
              <span className="text-slate-600">// PROJECT_01</span>
            </div>

            <CircuitBorder glow className="p-6 sm:p-8 bg-[#0f172a] border-[#1e293b]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Side: System Architecture Visual + Project Image */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 bg-[#121b2d] border border-[#1e293b] rounded-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
                        <Bot className="w-4 h-4" />
                        <span>AMR SYSTEM PIPELINE</span>
                      </div>
                      <TelemetryLabel label="NAV" value="ROS2 HUMBLE" status="nominal" />
                    </div>

                    <DataFlowConnector label="SENSORS → PERCEPTION → ROS2 → NAVIGATION → ACTUATION" />

                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                      <div className="p-2 bg-slate-950/80 border border-slate-800 rounded-xs">
                        <div className="text-slate-500">PERCEPTION</div>
                        <div className="text-slate-200 font-semibold">2D LiDAR + YOLO</div>
                      </div>
                      <div className="p-2 bg-slate-950/80 border border-slate-800 rounded-xs">
                        <div className="text-slate-500">SIMULATION</div>
                        <div className="text-cyan-400 font-semibold">GAZEBO PHYSICS</div>
                      </div>
                    </div>
                  </div>

                  {/* Project contextual image */}
                  {featuredProject.image && (
                    <div className="group relative overflow-hidden rounded-xs border border-[#1e293b] hover:border-cyan-500/30 transition-colors duration-300">
                      <div className="aspect-video w-full">
                        <img
                          src={featuredProject.image.src}
                          alt={featuredProject.image.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      {/* Subtle cyan overlay gradient on bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2">
                        <span className="font-mono text-[9px] text-cyan-400/60 uppercase tracking-wider">
                          // ILLUSTRATIVE — DOMAIN REFERENCE
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Title, Description, Focus Points, Technologies & CTA */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <TechBadge variant="cyan" showBrackets={false}>
                      {featuredProject.category}
                    </TechBadge>
                    <span className="font-mono text-xs text-slate-500">// PROJECT_{featuredProject.number}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {featuredProject.description}
                  </p>

                  {/* Engineering Focus Points List */}
                  <div>
                    <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2">
                      [ENGINEERING FOCUS]
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.engineeringFocus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2.5 py-1 text-xs font-mono bg-[#121b2d] text-slate-300 border border-[#1e293b] rounded-xs"
                        >
                          • {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div>
                    <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2">
                      [TECHNOLOGY STACK]
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.technologies.map((tech) => (
                        <TechBadge key={tech} variant="cyan" size="sm">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>

                  {/* Case Study CTA Button */}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleOpenCaseStudy(featuredProject)}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      CASE STUDY
                    </Button>
                  </div>
                </div>
              </div>
            </CircuitBorder>
          </RevealOnScroll>
        </div>

        {/* SECONDARY PROJECTS GRID */}
        <div>
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span>// ADDITIONAL ENGINEERING PROJECTS</span>
            <span className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <Card
                key={project.id}
                variant="interactive"
                className="flex flex-col justify-between h-full bg-[#0f172a] border-[#1e293b] overflow-hidden p-0"
              >
                {/* Project image strip at top of card */}
                {project.image && (
                  <div className="group relative w-full aspect-[16/7] overflow-hidden border-b border-[#1e293b]">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent pointer-events-none" />
                    <div className="absolute top-2 right-2">
                      <span className="font-mono text-[8px] text-cyan-400/50 uppercase tracking-wider bg-[#0b0f17]/70 px-1.5 py-0.5 rounded-xs">
                        DOMAIN REF
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div>
                    {/* Card Header */}
                    <CardHeader className="mb-3 border-b border-slate-800 pb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <TechBadge variant="blue" size="sm" showBrackets={false}>
                          {project.category}
                        </TechBadge>
                        <span className="font-mono text-xs text-cyan-400 font-bold">
                          PROJECT_{project.number}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-white">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardBody className="space-y-4">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* System Architecture Pipeline Flow */}
                      <div className="p-3 bg-[#121b2d] border border-[#1e293b] rounded-xs font-mono text-[10px] text-cyan-400">
                        <div className="text-slate-500 uppercase tracking-wider mb-1">// SYSTEM PIPELINE:</div>
                        <div className="truncate">{project.systemPipeline.join(' → ')}</div>
                      </div>

                      {/* Engineering Focus Badges */}
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1.5">
                          [ENGINEERING FOCUS]
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.engineeringFocus.slice(0, 3).map((focus) => (
                            <span
                              key={focus}
                              className="px-2 py-0.5 text-[11px] font-mono bg-[#121b2d] text-slate-300 border border-[#1e293b] rounded-xs"
                            >
                              • {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                  </div>

                  {/* Card Footer with Case Study CTA Button */}
                  <CardFooter className="pt-4 mt-auto border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} variant="default" size="sm">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenCaseStudy(project)}
                    >
                      CASE STUDY
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          {/* Contextual image disclaimer */}
          <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-slate-600">
            <span className="h-px bg-slate-800 w-8 shrink-0" />
            <span>// Images are domain-context references. Project outcomes described are factual.</span>
            <span className="h-px bg-slate-800 flex-1" />
          </div>
        </div>

        {/* Case Study Detail Modal */}
        <Suspense fallback={null}>
          <ProjectDetailModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      </Container>
    </section>
  );
};
