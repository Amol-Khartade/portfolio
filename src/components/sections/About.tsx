'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Crown: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    Zap: <Zap className="h-6 w-6 text-cyan-400" />,
    Database: <Database className="h-6 w-6 text-purple-400" />,
    Cpu: <Cpu className="h-6 w-6 text-emerald-400" />,
  };

  const agenticTools = [
    {
      name: 'Google Antigravity',
      role: 'Autonomous Agent Orchestration',
      impact: 'Deep planning loops, automated multi-step implementations & diagnostics.',
      color: 'border-emerald-500/40 text-emerald-400',
    },
    {
      name: 'Claude Code',
      role: 'Native Terminal Co-Pilot',
      impact: 'Complex native module refactoring, type safety enforcement & atomic git commits.',
      color: 'border-cyan-500/40 text-cyan-400',
    },
    {
      name: 'Gemini CLI',
      role: 'Multimodal & Schema Synthesis',
      impact: 'Fast contextual reasoning, Zod contract verification & API sync logic.',
      color: 'border-purple-500/40 text-purple-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="cyan" pulse>
            ENGINEERING PHILOSOPHY
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Solo Product Ownership Meets Agentic AI Velocity
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.about.leadParagraph}
          </p>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {PORTFOLIO_DATA.about.secondaryParagraph}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                glow={idx % 2 === 0 ? 'emerald' : 'cyan'}
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="text-emerald-400">✓</span>
                  <span>Engineered for Production Resilience</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Agentic Workflow Deep Dive Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-2xl border border-emerald-500/30 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 overflow-hidden shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]">
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      The AI-Augmented Developer Stack
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono">
                      Multiplying solo engineering output by 3x–5x without technical debt
                    </p>
                  </div>
                </div>
                <Badge variant="emerald" size="sm">
                  100% PRODUCTION VERIFIED
                </Badge>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Rather than treating AI as a simple text completion tool, I design autonomous agentic pipelines that pair directly with my local terminal and Linux build runners. This enables instant test generation, exhaustive edge-case discovery, and seamless synchronization between mobile client schemas and backend microservices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {agenticTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-sm text-white">
                        {tool.name}
                      </span>
                      <Terminal className="h-3.5 w-3.5 text-slate-500" />
                    </div>
                    <div className="text-xs font-mono text-emerald-400">
                      {tool.role}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tool.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
