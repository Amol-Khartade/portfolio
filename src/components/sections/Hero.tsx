'use client';

import React from 'react';
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
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column (7 Cols) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
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
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {PORTFOLIO_DATA.personal.name}
              </motion.h1>

              <motion.div
                className="flex items-center gap-2 text-xl sm:text-2xl font-mono text-emerald-400 font-medium"
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
              className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed border-l-2 border-emerald-500/50 pl-4 py-1"
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

          {/* Interactive Agentic Cockpit / Visual Teaser (5 Cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card glow="emerald" className="p-0 overflow-hidden border-slate-700/70">
              {/* Terminal Titlebar */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    agentic-engine://leadpluss-runtime
                  </span>
                </div>
                <Badge variant="cyan" size="sm">
                  v4.1.0-native
                </Badge>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-slate-950/70">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">amol@workstation</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-cyan-400">~/ecosystem</span>
                  <span className="text-slate-400">$</span>
                  <span className="text-slate-200">eas build:status --platform all</span>
                </div>

                <div className="space-y-1 text-slate-400 pl-2 border-l border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>[Linux EAS Runner] Bare-metal native builds: PASS</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>[FlashList v2] Recycled 50k CRM lead cells: 60 FPS</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>[MMKV Storage] Memory-mapped cold read: 0.42ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>[Agent Synergy] Antigravity + Claude Code + Gemini active</span>
                  </div>
                </div>

                {/* Architecture Visualizer mini box */}
                <div className="mt-4 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Activity className="h-3.5 w-3.5" />
                      Runtime Scroll Telemetry
                    </span>
                    <span className="font-mono text-emerald-400">60.0 FPS LOCKED</span>
                  </div>

                  {/* Simulated FPS Graph */}
                  <div className="h-8 flex items-end gap-1 pt-1">
                    {[40, 60, 58, 60, 60, 60, 60, 60, 59, 60, 60, 60, 60, 60, 60, 60, 60, 60].map(
                      (fps, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-emerald-500/30 to-emerald-400 rounded-t"
                          style={{ height: `${(fps / 60) * 100}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Virtual FlatList: 24-38 FPS (Jank)</span>
                    <span className="text-emerald-400 font-semibold">Shopify FlashList: 60 FPS Solid</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-1">
                  <span className="text-emerald-400">▶</span>
                  <span className="text-slate-300">All systems green. Ready for scale.</span>
                  <span className="inline-block h-3.5 w-1.5 bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
