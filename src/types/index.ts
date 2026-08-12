export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  supportingMessage: string;
  location: string;
  status: string;
  targetRoles: string[];
  domains: string[];
  certifications?: string[];
  languages?: { language: string; level: string }[];
  contact: {
    email: string;
    phone?: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

export interface FocusArea {
  id: string;
  title: string;
  code: string;
  iconName: string;
  description: string;
  keySkills: string[];
  hardwareTech: string[];
  protocols: string[];
}

export interface SkillCategory {
  category: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    tag?: string;
  }[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  targetDomain: string;
  problem: string;
  system: string;
  technology: string[];
  engineeringApproach: string[];
  results: string[];
  protocols: string[];
  hardware: string[];
  githubUrl?: string;
  demoUrl?: string;
  diagramConcept?: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Industrial' | 'Embedded' | 'Academic';
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  location: string;
  keyCoursework: string[];
  achievements: string[];
}

export interface ArchitectureLayer {
  step: string;
  id: string;
  name: string;
  flowLabel: string;
  subtitle: string;
  technologies: string[];
  description: string;
}

export interface EngineeringPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ArchitectureNode {
  id: string;
  stepNumber: string;
  name: string;
  layer: 'SENSORS' | 'MCU / PLC' | 'FIELD / BUS PROTOCOLS' | 'EDGE' | 'DATABASE' | 'SCADA / DASHBOARD' | 'ANALYTICS';
  protocols: string[];
  hardware: string[];
  description: string;
  latencyTarget: string;
  keyMetric: string;
}

export interface PhilosophyPrinciple {
  id: string;
  number: string;
  title: string;
  quote: string;
  description: string;
  bullets: string[];
}

