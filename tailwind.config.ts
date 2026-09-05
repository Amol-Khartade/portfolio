import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080c14',
        foreground: '#f8fafc',
        muted: {
          DEFAULT: '#1e293b',
          foreground: '#94a3b8',
        },
        primary: {
          DEFAULT: '#10b981',
          foreground: '#041d14',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          glow: 'rgba(6, 182, 212, 0.25)',
        },
        surface: {
          50: '#1e2638',
          100: '#171e2e',
          200: '#111726',
          300: '#0c111c',
          card: 'rgba(17, 24, 39, 0.75)',
        },
        border: {
          DEFAULT: 'rgba(51, 65, 85, 0.6)',
          glow: 'rgba(16, 185, 129, 0.4)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'neon-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.3)',
        'neon-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.3)',
        'neon-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};

export default config;
