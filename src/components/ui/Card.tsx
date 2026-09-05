'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: 'emerald' | 'cyan' | 'purple' | 'none';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glow = 'none',
  hoverEffect = true,
  ...props
}) => {
  const glowBorder = {
    emerald: 'hover:border-emerald-500/50 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.2)]',
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.2)]',
    none: 'hover:border-slate-600/60',
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8',
        'transition-all duration-300',
        hoverEffect && 'hover:-translate-y-1',
        glowBorder[glow],
        className
      )}
      {...props}
    >
      {/* Subtle corner light reflection */}
      <div className="pointer-events-none absolute -top-px -left-px h-16 w-16 rounded-tl-2xl bg-gradient-to-br from-white/10 to-transparent" />
      {children}
    </motion.div>
  );
};
