'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'purple' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  pulse = false,
  className,
}) => {
  const variantStyles = {
    emerald:
      'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]',
    cyan:
      'bg-cyan-950/60 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_-3px_rgba(6,182,212,0.3)]',
    purple:
      'bg-purple-950/60 text-purple-300 border-purple-500/40 shadow-[0_0_12px_-3px_rgba(168,85,247,0.3)]',
    slate:
      'bg-slate-900/80 text-slate-300 border-slate-700/60',
    outline:
      'bg-transparent text-slate-400 border-slate-700/80 hover:border-slate-500',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider',
    md: 'text-xs md:text-sm px-3 py-1 tracking-wide',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono font-medium rounded-full border backdrop-blur-md transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              variant === 'emerald' && 'bg-emerald-400',
              variant === 'cyan' && 'bg-cyan-400',
              variant === 'purple' && 'bg-purple-400',
              variant === 'slate' && 'bg-slate-400'
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              variant === 'emerald' && 'bg-emerald-500',
              variant === 'cyan' && 'bg-cyan-500',
              variant === 'purple' && 'bg-purple-500',
              variant === 'slate' && 'bg-slate-500'
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
};
