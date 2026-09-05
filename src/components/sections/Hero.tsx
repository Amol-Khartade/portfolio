'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Zap,
  Activity,
  Cpu,
  Smartphone,
  ChevronRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';

// Dynamically import the 3D Desktop PC component to avoid SSR canvas mismatch
const DesktopPC = dynamic(
  () => import('@/components/3d/DesktopPC').then((mod) => mod.DesktopPC),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl flex flex-col items-center justify-center gap-3 font-mono text-xs text-slate-400">
        <div className="h-8 w-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-300 font-bold">INITIALIZING 3D WORKSTATION...</span>
      </div>
    ),
  }
);

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column (6 or 7 Cols) */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" pulse>
                PRODUCTION LEAD
              </Badge>
              <Badge variant="cyan">
                AI-AUGMENTED WORKFLOWS
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                OFFLINE-FIRST CORE
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {PORTFOLIO_DATA.personal.name}
              </motion.h1>

              <motion.div
                className="flex items-center gap-2 text-xl sm:text-2xl font-mono text-emerald-400 font-medium flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span>{PORTFOLIO_DATA.personal.role}</span>
                <span className="text-slate-600">|</span>
                <span className="text-cyan-400">{PORTFOLIO_DATA.personal.subRole}</span>
              </motion.div>
            </div>

            {/* Headline */}
            <motion.p
              className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed border-l-2 border-emerald-500/50 pl-4 py-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              &ldquo;{PORTFOLIO_DATA.personal.headline}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#experience"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wider uppercase font-mono transition-all shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_0_rgba(16,185,129,0.7)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-sm tracking-wide border border-slate-700/80 hover:border-slate-500 transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Metrics Banner */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {PORTFOLIO_DATA.heroMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-3.5 backdrop-blur-md"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive 3D Desktop PC Workstation (6 Cols) */}
          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* The 3D Desktop PC Component */}
            <DesktopPC />

            {/* Telemetry Status Bar below the 3D PC */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                <span className="text-emerald-400 font-bold">STATUS:</span>
                <span>LOCKED 60 FPS • FLASHLIST RECYCLED</span>
              </div>
              <div className="text-slate-500 text-[11px]">
                DRAG ORBIT / SCROLL REACTIVE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
