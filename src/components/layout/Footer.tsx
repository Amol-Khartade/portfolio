'use client';

import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-mono font-bold text-slate-100 tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {PORTFOLIO_DATA.personal.headline}
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-xs text-emerald-400/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFLINE-FIRST ARCHITECTURE • LOCKED 60 FPS • AI-AUGMENTED</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About & Philosophy
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">
                  LeadPluss CRM Case Study
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-emerald-400 transition-colors">
                  Production Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connectivity */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Direct Channels
            </h4>
            <div className="space-y-2.5">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin className="h-4 w-4 text-slate-500 group-hover:text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors group"
              >
                <Github className="h-4 w-4 text-slate-500 group-hover:text-emerald-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.contact.links[2].url}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors group"
              >
                <Mail className="h-4 w-4 text-slate-500 group-hover:text-purple-400" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built for GitHub Pages (Next.js Static Export).
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-lg transition-all"
            aria-label="Scroll to top of page"
          >
            <span>RETURN TO APEX</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
