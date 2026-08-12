import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { GridOverlay } from './components/layout/GridOverlay';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FocusSection } from './components/sections/FocusSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 font-sans relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Visual Technical Grid Overlay */}
      <GridOverlay />

      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FocusSection />
        <TechStackSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
