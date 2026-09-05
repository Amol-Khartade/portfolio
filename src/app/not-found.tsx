'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-mono z-20 relative">
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl max-w-md w-full space-y-4 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="font-bold text-slate-200">SYSTEM ERROR 404</span>
          </div>
          <Terminal className="h-4 w-4 text-slate-500" />
        </div>

        <div className="space-y-2 py-4">
          <div className="text-5xl font-extrabold text-emerald-400">404</div>
          <p className="text-sm text-slate-300">
            Requested memory address not found in production registry.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Workstation</span>
        </Link>
      </div>
    </div>
  );
}
