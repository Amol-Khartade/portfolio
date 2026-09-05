'use client';

import React, { useState } from 'react';
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
  Code2,
  Database,
  Copy,
  Check,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';

export const Hero: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'flashlist' | 'mmkv' | 'sync'>('flashlist');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    flashlist: {
      file: 'FlashListEngine.tsx',
      pkg: '@shopify/flash-list',
      icon: <Zap className="h-3.5 w-3.5 text-emerald-400" />,
      metric: '60 FPS LOCKED • VIEW RECYCLING',
      code: `// Deterministic 60fps View Recycling Engine
import { FlashList } from "@shopify/flash-list";

export const CRMLeadFeed = ({ leads }: Props) => (
  <FlashList
    data={leads}
    estimatedItemSize={68}
    renderItem={({ item }) => <LeadCard lead={item} />}
    recycleItems={true}
    getItemType={(item) => item.pipelineStatus}
    keyExtractor={(item) => item.uuid}
  />
);`,
    },
    mmkv: {
      file: 'OfflineStorage.ts',
      pkg: 'react-native-mmkv v4',
      icon: <Database className="h-3.5 w-3.5 text-cyan-400" />,
      metric: '< 1ms COLD READ • C++ DIRECT IO',
      code: `// Sub-millisecond C++ Memory Mapped Persistence
import { MMKV } from "react-native-mmkv";

export const leadCache = new MMKV({ id: "crm-v4" });

export const syncOfflineLeads = (records: Lead[]) => {
  leadCache.set("offline_payload", JSON.stringify(records));
  // Direct C++ memory access: 30x faster than SQLite
};`,
    },
    sync: {
      file: 'RealtimeSync.ts',
      pkg: '@tanstack/react-query',
      icon: <Layers className="h-3.5 w-3.5 text-purple-400" />,
      metric: 'OFFLINE-FIRST REALTIME SYNC',
      code: `// TanStack Query v5 + Supabase Realtime
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const useLeadsQuery = () =>
  useQuery({
    queryKey: ["leads", "offline_first"],
    queryFn: async () => {
      const { data } = await supabase.from("leads").select("*");
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });`,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Cybernetic Ambient Vignette & Readability Gradient Overlay */}
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

          {/* Right Column (5 Cols) - Interactive Architecture & Live Code Terminal */}
          <motion.div
            className="lg:col-span-5 hidden lg:block pointer-events-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Window Header with Traffic Lights and File Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* File Tabs */}
                <div className="flex items-center gap-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('flashlist')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeCodeTab === 'flashlist'
                        ? 'bg-slate-800 text-emerald-400 font-bold border border-emerald-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="h-3 w-3" />
                    <span>FlashList.tsx</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('mmkv')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeCodeTab === 'mmkv'
                        ? 'bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Database className="h-3 w-3" />
                    <span>MMKV.ts</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('sync')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                      activeCodeTab === 'sync'
                        ? 'bg-slate-800 text-purple-400 font-bold border border-purple-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="h-3 w-3" />
                    <span>Sync.ts</span>
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                  title="Copy code to clipboard"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {/* Live Code Area */}
              <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed bg-slate-950/90 overflow-x-auto min-h-[220px]">
                <pre className="text-slate-200 whitespace-pre">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Bottom Telemetry & Ecosystem Status */}
              <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex flex-col gap-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {codeSnippets[activeCodeTab].metric}
                  </span>
                  <span className="text-cyan-400 font-medium">
                    {codeSnippets[activeCodeTab].pkg}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-800/80 text-[10px] text-slate-400">
                  <span className="text-slate-400 font-bold">ECOSYSTEM:</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Ionic &amp; Capacitor</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Supabase</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Firebase</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">MongoDB</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
