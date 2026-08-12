import React from 'react';
import { Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { profileData } from '../../data/profile';
import { NAV_CONFIG } from '../../data/config';
import { StatusDot } from '../UI/StatusDot';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'FOCUS', href: '#focus' },
    { label: 'STACK', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ARCHITECTURE', href: '#architecture' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer className="bg-[#080b11] border-t border-[#1e293b] text-slate-400 font-mono text-xs py-12 relative z-10">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-slate-800/80">
          {/* Identity & Professional Subtitle */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-sans font-bold text-base tracking-tight">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>{profileData.name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-sans">
              Electrical Engineer — Embedded Systems, Industrial Automation, Cable Harness Manufacturing & Robotics.
            </p>
            <div className="pt-2">
              <StatusDot status="green" label="SYSTEM STATUS: PORTFOLIO ONLINE" size="sm" />
            </div>
          </div>

          {/* Navigation Anchors */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-cyan-400 font-bold uppercase text-[11px] tracking-widest mb-3">
              // NAVIGATION
            </div>
            <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                  >
                    • {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-cyan-400 font-bold uppercase text-[11px] tracking-widest mb-3">
              // SOCIAL CHANNELS
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={NAV_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={NAV_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Technical Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-mono text-slate-400">
            <span>SYSTEM STATUS: PORTFOLIO ONLINE</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
