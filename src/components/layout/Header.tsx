import React, { useState, useEffect, useRef, useMemo } from 'react';

import { Download, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { Button } from '../UI/Button';
import { StatusDot } from '../UI/StatusDot';
import { Container } from '../layout/Container';
import { NAV_CONFIG } from '../../data/config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Ref to suppress scroll-spy briefly after a click so the indicator
  // doesn't flicker back to the wrong section during smooth-scroll.
  const clickLockRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClickLocked = useRef(false);


  const navItems = useMemo(
    () => [
      { id: 'home', label: 'HOME' },
      { id: 'about', label: 'ABOUT' },
      { id: 'focus', label: 'FOCUS' },
      { id: 'skills', label: 'SKILLS' },
      { id: 'projects', label: 'PROJECTS' },
      { id: 'architecture', label: 'ARCHITECTURE' },
      { id: 'experience', label: 'EXPERIENCE' },
      { id: 'education', label: 'EDUCATION' },
      { id: 'contact', label: 'CONTACT' }
    ],
    []
  );

  useEffect(() => {
    // Build a lookup: DOM element id  →  nav item id
    // Handles cases where the section id differs from the nav id
    // (e.g. TechStackSection has id="stack" but nav uses id "skills").
    const getSectionNavId = (el: HTMLElement): string => {
      return el.dataset.navId ?? el.id;
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // While a click-triggered scroll is in progress, don't override
      // the active state that was set immediately on click.
      if (isClickLocked.current) return;

      // Collect all navigable section elements in order.
      const candidates = navItems
        .map((item) => {
          // Primary: element whose data-nav-id matches this nav item
          const byNavId = document.querySelector<HTMLElement>(`[data-nav-id="${item.id}"]`);
          // Fallback: element whose DOM id matches this nav item
          const byDomId = document.getElementById(item.id);
          return byNavId ?? byDomId;
        })
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;

      for (let i = candidates.length - 1; i >= 0; i--) {
        const el = candidates[i];
        if (el.offsetTop <= scrollPosition) {
          // Resolve the nav id (may differ from DOM id)
          const navId = getSectionNavId(el);
          // Find the matching navItem id: prefer data-nav-id, fall back to dom id
          const matched = navItems.find(
            (item) => item.id === navId || item.id === el.id
          );
          if (matched) setActiveSection(matched.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set correct initial state (handles /#skills deep links)
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);


  // Lock body scroll & ESC key handling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    // Immediately mark the clicked section as active so the indicator
    // moves at once without waiting for the scroll event.
    setActiveSection(id);
    // Lock the scroll-spy for 800 ms so smooth-scroll doesn't cause it
    // to jump back to a partially-visible section mid-animation.
    isClickLocked.current = true;
    if (clickLockRef.current) clearTimeout(clickLockRef.current);
    clickLockRef.current = setTimeout(() => {
      isClickLocked.current = false;
    }, 800);
    // Scroll to the correct DOM element:
    // For "skills" the section has id="stack", so check data-nav-id first.
    const byNavId = document.querySelector<HTMLElement>(`[data-nav-id="${id}"]`);
    const byDomId = document.getElementById(id);
    const element = byNavId ?? byDomId;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleCvDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    fetch(NAV_CONFIG.cvDownloadPath, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          e.preventDefault();
          alert(`[CV Download]\nPath: ${NAV_CONFIG.cvDownloadPath}\nPlease add cv.pdf file to the /public directory.`);
        }
      })
      .catch(() => {
        e.preventDefault();
        alert(`[CV Download]\nPath: ${NAV_CONFIG.cvDownloadPath}\nPlease add cv.pdf file to the /public directory.`);
      });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-[#1e293b] py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <Container size="wide" className="flex items-center justify-between">
        {/* Logo & Subtitle Identity */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded-xs"
          aria-label="Ilyes Gharbi Portfolio Home"
        >
          <div className="font-mono font-black text-sm sm:text-base text-cyan-400 bg-cyan-950/60 border border-cyan-500/40 group-hover:border-cyan-400 px-2.5 py-1 rounded-xs transition-colors shadow-[0_0_10px_rgba(0,240,255,0.1)]">
            IG
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
              ILYES GHARBI
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider mt-0.5 leading-none">
              ELECTRICAL ENGINEER
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 transition-colors cursor-pointer rounded-xs tracking-wider ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border-b-2 border-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: Social Links & CV Download */}
        <div className="hidden md:flex items-center gap-3">
          <StatusDot status="green" label="ONLINE" className="hidden xl:inline-flex mr-2" />
          
          {/* GitHub Action */}
          <a
            href={NAV_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 bg-[#0f172a] rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Action */}
          <a
            href={NAV_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 bg-[#0f172a] rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Download CV Action */}
          <a
            href={NAV_CONFIG.cvDownloadPath}
            download="Ilyes_Gharbi_CV.pdf"
            onClick={handleCvDownload}
            aria-label="Download Curriculum Vitae PDF"
          >
            <Button variant="outline" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 border border-slate-800 bg-[#0f172a] rounded-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080c14]/95 backdrop-blur-xl border-b border-[#1e293b] px-4 py-5 shadow-2xl">
          <Container size="wide" className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <StatusDot status="green" label="TELEMETRY ONLINE" />
              <div className="flex items-center gap-2">
                <a
                  href={NAV_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 bg-[#0f172a] rounded-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={NAV_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 bg-[#0f172a] rounded-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1.5 font-mono text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-3 py-2.5 rounded-xs transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-cyan-950/40 text-cyan-400 font-bold border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href={NAV_CONFIG.cvDownloadPath}
                download="Ilyes_Gharbi_CV.pdf"
                onClick={handleCvDownload}
                className="block w-full"
              >
                <Button variant="outline" size="md" fullWidth icon={<Download className="w-4 h-4" />}>
                  Download CV
                </Button>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
