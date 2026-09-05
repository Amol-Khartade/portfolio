'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Zap,
  Database,
  Cpu,
  Layers,
  Smartphone,
  Box,
  Flame,
  Binary,
  GitBranch,
  Sparkles,
} from 'lucide-react';

interface CodeSnippet {
  id: string;
  code: string;
  lang: string;
  tag: string;
  color: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
}

interface TechPackageBadge {
  id: string;
  name: string;
  pkg: string;
  icon: React.ReactNode;
  color: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
}

export const TechCodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. High-Performance Canvas Matrix & Constellation Stream (Runs at Locked 60 FPS)
  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Mouse coordinates for reactive parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Floating Cyber Nodes (Constellation Graph)
    const nodeCount = Math.min(Math.floor(width / 22), 65);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = ['#10b981', '#06b6d4', '#8b5cf6', '#38bdf8'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Streaming Syntax Drops (Matrix Code Rain in Cyberspace)
    const syntaxSnippets = [
      'const [leads, setLeads] = useState<Lead[]>([]);',
      '<FlashList estimatedItemSize={68} data={leads} />',
      'await mmkv.set("offline_cache_v4", json);',
      'supabase.from("pipeline").select("*").eq("status", "won");',
      'useQuery({ queryKey: ["leads"], queryFn: fetchLeads });',
      'type LeadRecord = z.infer<typeof LeadSchema>;',
      'await Capacitor.Plugins.Storage.set({ key, value });',
      'eas build --platform all --profile production',
      'db.collection("accounts").aggregate([{ $match: { active: true } }]);',
      'const queryClient = new QueryClient();',
      'runOnJS(updateLeadCache)(nextPayload);',
      'MMKV.getString("auth_token_v4");',
      '60 FPS LOCKED • 0ms READ LATENCY',
      'Claude Code Agentic Loop Active',
      'Google Antigravity Orchestrator',
      'Tailwind CSS • NativeWind v4',
    ];

    const streamCount = Math.min(Math.floor(width / 130), 14);
    const streams: {
      x: number;
      y: number;
      speed: number;
      text: string;
      color: string;
      opacity: number;
    }[] = [];

    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: (width / streamCount) * i + Math.random() * 40 - 20,
        y: Math.random() * height,
        speed: Math.random() * 0.4 + 0.25,
        text: syntaxSnippets[Math.floor(Math.random() * syntaxSnippets.length)],
        color: i % 2 === 0 ? '#10b981' : '#06b6d4',
        opacity: Math.random() * 0.25 + 0.08,
      });
    }

    // Animation Loop
    let isVisible = true;
    const onVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isVisible) return;

      // Subtle parallax dampening
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Streaming Syntax Text
      ctx.font = '11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      for (const s of streams) {
        s.y += s.speed;
        if (s.y > height + 50) {
          s.y = -40;
          s.text = syntaxSnippets[Math.floor(Math.random() * syntaxSnippets.length)];
          s.opacity = Math.random() * 0.25 + 0.08;
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity;
        ctx.fillText(s.text, s.x, s.y);
      }
      ctx.globalAlpha = 1.0;

      // 2. Draw Constellation Connections
      const maxDistSq = 110 * 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.14;
            ctx.strokeStyle = '#06b6d4';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw Nodes & Move
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse proximity reaction (gentle magnetic push)
        const dxMouse = node.x - mouseX;
        const dyMouse = node.y - mouseY;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < 120 * 120 && distMouseSq > 0) {
          const force = (120 - Math.sqrt(distMouseSq)) * 0.012;
          node.x += (dxMouse / Math.sqrt(distMouseSq)) * force;
          node.y += (dyMouse / Math.sqrt(distMouseSq)) * force;
        }

        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [mounted]);

  // Floating Animated Code Snippets & Syntax Blocks
  const codeCards: CodeSnippet[] = [
    {
      id: 'flashlist',
      tag: 'Shopify FlashList',
      lang: 'TSX',
      code: '<FlashList\n  data={leads}\n  estimatedItemSize={68}\n  renderItem={LeadRow}\n  recycleRows={true}\n/>',
      color: 'border-emerald-500/40 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      top: '14%',
      right: '6%',
      delay: 0,
      duration: 7,
    },
    {
      id: 'mmkv',
      tag: 'react-native-mmkv v4',
      lang: 'TS',
      code: 'const storage = new MMKV();\nawait storage.set(\n  "lead_cache_v4",\n  JSON.stringify(records)\n); // <1ms cold read',
      color: 'border-cyan-500/40 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.15)]',
      top: '38%',
      right: '3%',
      delay: 1.5,
      duration: 8.5,
    },
    {
      id: 'tanstack',
      tag: 'TanStack Query v5',
      lang: 'TS',
      code: 'useQuery({\n  queryKey: ["leads", "offline"],\n  queryFn: fetchLeads,\n  staleTime: 1000 * 60 * 5\n});',
      color: 'border-purple-500/40 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.15)]',
      top: '62%',
      right: '8%',
      delay: 2.2,
      duration: 8,
    },
    {
      id: 'supabase',
      tag: 'Supabase Realtime',
      lang: 'TS',
      code: 'supabase\n  .from("leads")\n  .on("UPDATE", handleRealtime)\n  .subscribe();',
      color: 'border-emerald-500/40 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      top: '26%',
      left: '3%',
      delay: 0.8,
      duration: 9,
    },
    {
      id: 'eas',
      tag: 'Expo EAS Linux',
      lang: 'YAML',
      code: 'eas build:\n  platform: all\n  profile: production\n  autoSubmit: true',
      color: 'border-cyan-500/40 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.15)]',
      top: '74%',
      left: '4%',
      delay: 3.1,
      duration: 7.5,
    },
  ];

  // Floating Animated Tech Badges & Packages
  const techBadges: TechPackageBadge[] = [
    {
      id: 'react-native',
      name: 'React Native',
      pkg: '@react-native/core',
      icon: <Smartphone className="h-3.5 w-3.5" />,
      color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-200',
      top: '8%',
      left: '12%',
      delay: 0.2,
      duration: 6,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      pkg: 'typescript@5.x',
      icon: <Code2 className="h-3.5 w-3.5" />,
      color: 'border-blue-500/50 bg-blue-950/40 text-blue-200',
      top: '18%',
      left: '26%',
      delay: 1.2,
      duration: 7.2,
    },
    {
      id: 'flashlist-pkg',
      name: 'Shopify FlashList',
      pkg: '@shopify/flash-list',
      icon: <Zap className="h-3.5 w-3.5 text-emerald-400" />,
      color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200',
      top: '6%',
      right: '28%',
      delay: 0.5,
      duration: 6.8,
    },
    {
      id: 'mmkv-pkg',
      name: 'MMKV v4',
      pkg: 'react-native-mmkv',
      icon: <Database className="h-3.5 w-3.5 text-purple-400" />,
      color: 'border-purple-500/50 bg-purple-950/40 text-purple-200',
      top: '52%',
      right: '22%',
      delay: 2.5,
      duration: 7.5,
    },
    {
      id: 'ionic-cap',
      name: 'Ionic & Capacitor',
      pkg: '@capacitor/core',
      icon: <Layers className="h-3.5 w-3.5 text-sky-400" />,
      color: 'border-sky-500/50 bg-sky-950/40 text-sky-200',
      top: '84%',
      right: '18%',
      delay: 1.8,
      duration: 8,
    },
    {
      id: 'supabase-pkg',
      name: 'Supabase',
      pkg: '@supabase/supabase-js',
      icon: <Database className="h-3.5 w-3.5 text-emerald-400" />,
      color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200',
      top: '48%',
      left: '14%',
      delay: 1.4,
      duration: 6.5,
    },
    {
      id: 'firebase-pkg',
      name: 'Firebase',
      pkg: 'firebase/firestore',
      icon: <Flame className="h-3.5 w-3.5 text-amber-400" />,
      color: 'border-amber-500/50 bg-amber-950/40 text-amber-200',
      top: '68%',
      left: '20%',
      delay: 2.8,
      duration: 7,
    },
    {
      id: 'mongodb-pkg',
      name: 'MongoDB',
      pkg: 'mongodb',
      icon: <Database className="h-3.5 w-3.5 text-green-400" />,
      color: 'border-green-500/50 bg-green-950/40 text-green-200',
      top: '88%',
      left: '32%',
      delay: 3.3,
      duration: 7.8,
    },
    {
      id: 'ai-tools',
      name: 'Claude & Antigravity',
      pkg: 'agentic-engineering',
      icon: <Cpu className="h-3.5 w-3.5 text-pink-400" />,
      color: 'border-pink-500/50 bg-pink-950/40 text-pink-200',
      top: '32%',
      right: '32%',
      delay: 0.9,
      duration: 8.2,
    },
  ];

  if (!mounted) {
    return <div className="fixed inset-0 bg-[#080c14] z-0 pointer-events-none" />;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. HTML5 Canvas: Interactive Cyber Matrix Rain & Constellation Nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* 2. Cyber Perspective Horizon & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_65%,rgba(6,182,212,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_75%,rgba(168,85,247,0.08),transparent_70%)]" />

      {/* 3. Perspective Cyberspace Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080c14] via-transparent to-transparent z-[1]" />

      {/* 4. Floating Animated Syntax Cards (Desktop & Large Screens) */}
      <div className="hidden lg:block absolute inset-0">
        {codeCards.map((card) => (
          <motion.div
            key={card.id}
            className={`absolute rounded-xl border bg-slate-950/65 backdrop-blur-md p-3.5 font-mono text-[11px] leading-relaxed transition-all ${card.color}`}
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.35, 0.75, 0.45, 0.75],
              y: [-8, 8, -8],
              rotate: [-0.8, 0.8, -0.8],
            }}
            transition={{
              duration: card.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: card.delay,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5 font-bold text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{card.tag}</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                {card.lang}
              </span>
            </div>

            {/* Code */}
            <pre className="text-slate-300 font-mono whitespace-pre overflow-hidden">
              {card.code}
            </pre>
          </motion.div>
        ))}
      </div>

      {/* 5. Floating Animated Tech & Package Badges (All Screen Sizes) */}
      <div className="absolute inset-0 overflow-hidden">
        {techBadges.map((badge) => (
          <motion.div
            key={badge.id}
            className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono shadow-lg transition-all ${badge.color}`}
            style={{
              top: badge.top,
              left: badge.left,
              right: badge.right,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0.3, 0.85, 0.4, 0.85],
              y: [-10, 10, -10],
              x: [-4, 4, -4],
            }}
            transition={{
              duration: badge.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
          >
            {badge.icon}
            <span className="font-bold text-white tracking-wide">
              {badge.name}
            </span>
            <span className="text-[10px] opacity-70 border-l border-white/20 pl-1.5 font-mono">
              {badge.pkg}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 6. Ambient Readability Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/40 via-transparent to-[#080c14]/75 pointer-events-none" />
    </div>
  );
};
