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
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';

// Dynamically import DesktopPC with SSR disabled for static export compatibility
const DesktopPC = dynamic(
  () => import('@/components/3d/DesktopPC').then((mod) => mod.DesktopPC),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[#080c14] flex flex-col items-center justify-center gap-3 font-mono text-xs text-slate-500">
        <div className="h-8 w-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
        <span>INITIALIZING 3D STAGE...</span>
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
      {/* 1. Full-Bleed 3D Desktop PC Background Canvas */}
      <div className="absolute inset-0 z-0">
        <DesktopPC asBackground={true} />
      </div>

      {/* 2. Cybernetic Ambient Vignette & Readability Gradient Overlay */}
      {/* Left side gradient ensures hero copy contrast exceeds 4.5:1 WCAG standards */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/95 via-[#080c14]/75 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none z-[1]" />

      {/* 3. Hero Content Foreground Layer (pointer-events-none on wrapper so canvas can receive drag events) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Column (7 Cols) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-3 pointer-events-auto">
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
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans drop-shadow-lg"
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
              className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light max-w-2xl leading-relaxed border-l-2 border-emerald-500/60 pl-4 py-1 drop-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              &ldquo;{PORTFOLIO_DATA.personal.headline}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-sm tracking-wide border border-slate-700/80 hover:border-slate-500 transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Metrics Banner */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {PORTFOLIO_DATA.heroMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-3.5 backdrop-blur-md shadow-lg hover:border-slate-700 transition-colors"
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

          {/* Right Column (5 Cols) - Interactive Hologram Telemetry Card */}
          <motion.div
            className="lg:col-span-5 hidden lg:block pointer-events-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl p-5 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                  <span className="font-mono text-xs font-bold text-slate-200">
                    REALTIME 3D TELEMETRY
                  </span>
                </div>
                <Badge variant="cyan" size="sm">
                  GLTF 360°
                </Badge>
              </div>

              <div className="space-y-2 font-mono text-xs text-slate-400">
                <div className="flex justify-between items-center">
                  <span>ORBIT AXIS:</span>
                  <span className="text-emerald-400 font-bold">HORIZONTAL &amp; VERTICAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SCROLL PARALLAX:</span>
                  <span className="text-cyan-400 font-bold">ACTIVE (60 FPS)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>RENDER ENGINE:</span>
                  <span className="text-slate-300">THREE.JS / ACES FILMIC</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400">✦</span>
                <span>Click &amp; drag anywhere to rotate the 3D PC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
