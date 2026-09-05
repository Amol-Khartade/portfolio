'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Zap,
  Terminal,
  Cpu,
  GitBranch,
  ShieldCheck,
  Smartphone,
  Server,
  Database,
  CheckCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    ...PORTFOLIO_DATA.techStackCategories.map((c) => c.name),
  ];

  const allSkills = PORTFOLIO_DATA.techStackCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryGroup: cat.name }))
  );

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter((skill) => skill.categoryGroup === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Core Mobile':
        return <Smartphone className="h-5 w-5 text-emerald-400" />;
      case 'Performance & State':
        return <Zap className="h-5 w-5 text-cyan-400" />;
      case 'Cloud & Databases':
        return <Database className="h-5 w-5 text-cyan-400" />;
      case 'DevOps & Tooling':
        return <Server className="h-5 w-5 text-purple-400" />;
      case 'AI & Automation':
        return <Cpu className="h-5 w-5 text-emerald-400" />;
      default:
        return <Layers className="h-5 w-5 text-slate-400" />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <Badge variant="purple" pulse>
            SYSTEM ARCHITECTURE & CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Tech Stack & Tools
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every tool in this stack has been rigorously battle-tested in high-throughput enterprise production—delivering instant-on offline reliability, locked 60fps rendering, and automated deployment pipelines.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  glow={
                    skill.category === 'Core Mobile'
                      ? 'emerald'
                      : skill.category === 'Performance & State' || skill.category === 'Cloud & Databases'
                      ? 'cyan'
                      : 'purple'
                  }
                  className="h-full flex flex-col justify-between p-6 bg-slate-950/70 border-slate-800/80 hover:border-slate-700"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                          {getCategoryIcon(skill.category)}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">
                        {skill.proficiency}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-400/90">
                      <CheckCircle className="h-3 w-3" />
                      Production Caliber
                    </span>
                    <span className="text-slate-600">MISSION-READY</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack Summary Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-cyan-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-sans">
              Need a Custom Native Module or Enterprise CRM Audit?
            </h4>
            <p className="text-sm text-slate-400">
              From zero-touch EAS deployments to 60fps FlashList rendering migrations, I engineer high-throughput solutions.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
          >
            Schedule Technical Discussion
          </a>
        </div>
      </div>
    </section>
  );
};
