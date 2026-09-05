'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Zap,
  Database,
  Cpu,
  Server,
  Layers,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Shield,
  Activity,
  Award,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'performance' | 'architecture' | 'devops'>('all');
  const exp = PORTFOLIO_DATA.experience[0];

  const filteredHighlights = exp.highlights.filter((h) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'performance') return h.category === 'Performance';
    if (activeTab === 'architecture') return h.category === 'Architecture';
    if (activeTab === 'devops') return h.category === 'DevOps' || h.category === 'Leadership';
    return true;
  });

  return (
    <section id="experience" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="emerald" pulse>
            KEY PRODUCTION CASE STUDY
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            LeadPluss CRM: Global Mobile Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {exp.summary}
          </p>
        </div>

        {/* LeadPluss Case Study Hero Box */}
        <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-2xl p-6 sm:p-10 mb-12 shadow-2xl">
          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {exp.company}
                </span>
                <Badge variant="cyan" size="sm">
                  PRODUCTION CRM
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-emerald-400">
                <span>{exp.role}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{exp.period}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{exp.location}</span>
              </div>
            </div>

            {/* Quick KPI stats */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                <div className="text-xs text-slate-400 font-mono">SCROLL TARGET</div>
                <div className="text-lg font-mono font-bold text-emerald-400">60 FPS LOCKED</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                <div className="text-xs text-slate-400 font-mono">MEMORY USAGE</div>
                <div className="text-lg font-mono font-bold text-cyan-400">-40% DROP</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/30">
                <div className="text-xs text-slate-400 font-mono">OFFLINE CACHE</div>
                <div className="text-lg font-mono font-bold text-purple-400">&lt; 1ms MMKV v4</div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-8 pb-4">
            <span className="text-xs font-mono text-slate-500 mr-2 uppercase tracking-wider">
              Filter Dimension:
            </span>
            {(
              [
                { id: 'all', label: 'All Architectures' },
                { id: 'performance', label: 'Performance (Shopify FlashList)' },
                { id: 'architecture', label: 'Offline-First (MMKV + TanStack)' },
                { id: 'devops', label: 'DevOps (Linux EAS & Stores)' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)]'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {filteredHighlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        item.category === 'Performance'
                          ? 'emerald'
                          : item.category === 'Architecture'
                          ? 'cyan'
                          : 'purple'
                      }
                      size="sm"
                    >
                      {item.category.toUpperCase()}
                    </Badge>
                    {item.metrics && (
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-sans">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Production Deployed & Battle-Tested</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benchmark Deep Dive: FlashList vs FlatList */}
          <div className="mt-10 pt-8 border-t border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              Engineered Benchmark: Legacy VirtualizedList vs. Shopify FlashList
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Legacy FlatList Box */}
              <div className="p-5 rounded-xl bg-slate-950/70 border border-red-900/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400 font-bold">LEGACY FLATLIST (BEFORE)</span>
                  <span className="text-slate-500">50,000 CRM LEADS</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Frame Drop Frequency:</span>
                    <span className="text-red-400 font-mono">High (22-38 FPS during fast fling)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500/70 h-full w-[45%]" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-400 pt-1">
                    <span>RAM Overhead:</span>
                    <span className="text-red-400 font-mono">~340 MB (Unrecycled DOM nodes)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500/70 h-full w-[85%]" />
                  </div>
                </div>
              </div>

              {/* Overhauled FlashList Box */}
              <div className="p-5 rounded-xl bg-slate-950/70 border border-emerald-500/40 space-y-3 shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">SHOPIFY FLASHLIST (AFTER OVERHAUL)</span>
                  <span className="text-emerald-400">AMOL KHARTADE RE-ARCHITECTED</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Frame Rate:</span>
                    <span className="text-emerald-400 font-mono font-bold">60.0 FPS Locked (Zero Jank)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full shadow-[0_0_10px_#10b981]" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-300 pt-1">
                    <span>RAM Footprint:</span>
                    <span className="text-cyan-400 font-mono font-bold">~204 MB (-40% Memory Drop)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[51%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills for Experience */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2">Ecosystem Stack:</span>
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
