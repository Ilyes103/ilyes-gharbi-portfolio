import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { Container } from '../layout/Container';
import { Card } from '../UI/Card';
import { CircuitBorder } from '../UI/CircuitBorder';
import { StatusDot } from '../UI/StatusDot';
import { TelemetryLabel } from '../UI/TelemetryLabel';
import { Button } from '../UI/Button';
import { profileData } from '../../data/profile';
import { NAV_CONFIG } from '../../data/config';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { RevealOnScroll } from '../motion/RevealOnScroll';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#1e293b] relative z-10">
      <Container size="wide">
        <RevealOnScroll>
          <SectionHeader
            number="SEC_09"
            category="DIRECT COMMUNICATION"
            title="LET'S BUILD SOMETHING USEFUL."
            subtitle="Interested in embedded systems, test systems, industrial automation, or Industry 4.0? Let's connect."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <CircuitBorder glow className="p-6 sm:p-10 bg-[#0f172a] border-[#1e293b]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Introduction & GET IN TOUCH CTA */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <StatusDot status="green" label="ONLINE // READY FOR ROLES" size="sm" />
                  <TelemetryLabel label="CHANNEL" value="VERIFIED DIRECT" status="nominal" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                    Open for Engineering Collaboration & Roles
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    Whether you are looking to discuss opportunities in embedded firmware development, automotive wiring harness quality optimization, industrial automation, or smart factory telemetry, feel free to get in touch.
                  </p>
                </div>

                <div className="p-4 bg-[#121b2d] border border-[#1e293b] rounded-xs space-y-2 font-sans">
                  <div className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    // LOCATION & AVAILABILITY
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Based in <strong className="text-white">Sousse, Tunisia</strong> • Available for on-site & remote engineering opportunities.</span>
                  </div>
                </div>

                {/* Primary Call to Action Button */}
                <div className="pt-2">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="inline-block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                    aria-label={`Send email to ${profileData.contact.email}`}
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<Mail className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      GET IN TOUCH
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column: Direct Verified Contact Methods */}
              <div className="lg:col-span-6 space-y-4">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>// VERIFIED CONTACT CHANNELS</span>
                  <span className="text-[10px] text-slate-500 font-normal">DIRECT LINKS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Email Direct */}
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="group block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                    aria-label={`Send email to ${profileData.contact.email}`}
                  >
                    <Card
                      variant="interactive"
                      className="p-4 bg-[#121b2d] border-[#1e293b] group-hover:border-cyan-500/50 transition-colors h-full flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 rounded-xs group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          DIRECT EMAIL
                        </div>
                        <div className="font-sans text-xs font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
                          {profileData.contact.email}
                        </div>
                      </div>
                    </Card>
                  </a>

                  {/* Phone Direct */}
                  {profileData.contact.phone && (
                    <a
                      href={`tel:${profileData.contact.phone}`}
                      className="group block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                      aria-label={`Call phone number ${profileData.contact.phone}`}
                    >
                      <Card
                        variant="interactive"
                        className="p-4 bg-[#121b2d] border-[#1e293b] group-hover:border-emerald-500/50 transition-colors h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 rounded-xs group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                            DIRECT PHONE
                          </div>
                          <div className="font-sans text-xs font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors truncate">
                            {profileData.contact.phone}
                          </div>
                        </div>
                      </Card>
                    </a>
                  )}

                  {/* LinkedIn Professional */}
                  <a
                    href={NAV_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <Card
                      variant="interactive"
                      className="p-4 bg-[#121b2d] border-[#1e293b] group-hover:border-blue-500/50 transition-colors h-full flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 bg-blue-950/60 border border-blue-800/50 text-blue-400 rounded-xs group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          LINKEDIN PROFILE
                        </div>
                        <div className="font-sans text-xs font-semibold text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                          linkedin.com/in/ilyes-gharbi
                        </div>
                      </div>
                    </Card>
                  </a>

                  {/* GitHub Code Repos */}
                  <a
                    href={NAV_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xs"
                    aria-label="Visit GitHub Repositories"
                  >
                    <Card
                      variant="interactive"
                      className="p-4 bg-[#121b2d] border-[#1e293b] group-hover:border-cyan-500/50 transition-colors h-full flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 bg-slate-950 border border-slate-700 text-slate-200 rounded-xs group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                          <GithubIcon className="w-4 h-4" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          GITHUB REPOSITORIES
                        </div>
                        <div className="font-sans text-xs font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
                          github.com/Ilyes103
                        </div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
            </div>
          </CircuitBorder>
        </RevealOnScroll>
      </Container>
    </section>
  );
};
