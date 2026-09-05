import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Background3D } from '@/components/3d/Background3D';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Amol Khartade | Lead Mobile Engineer | AI-Augmented Developer',
  description:
    'Architecting high-performance, offline-first mobile ecosystems at scale. Solo product owner managing global CRMs, locked 60fps Shopify FlashList rendering, MMKV v4 storage, and AI agentic engineering.',
  keywords: [
    'Amol Khartade',
    'Lead Mobile Engineer',
    'React Native Architect',
    'Shopify FlashList',
    'Offline-First Mobile',
    'TanStack Query',
    'react-native-mmkv',
    'Expo EAS Linux',
    'AI-Augmented Developer',
    'Claude Code',
    'Google Antigravity',
  ],
  authors: [{ name: 'Amol Khartade' }],
  creator: 'Amol Khartade',
  openGraph: {
    title: 'Amol Khartade | Lead Mobile Engineer & AI-Augmented Developer',
    description:
      'Architecting high-performance, offline-first mobile ecosystems at scale. Solo product owner managing global CRMs, locked 60fps scroll, and AI agentic workflows.',
    url: 'https://amolkhartade.github.io',
    siteName: 'Amol Khartade Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amol Khartade | Lead Mobile Engineer',
    description:
      'Architecting high-performance, offline-first mobile ecosystems at scale.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c14] text-slate-100 antialiased min-h-screen relative selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Full-Screen Interactive Three.js Background Canvas */}
        <Background3D />

        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent blur-3xl pointer-events-none z-0" />

        {/* Application Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
