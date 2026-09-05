export interface ProjectAchievement {
  title: string;
  metric: string;
  description: string;
  tag: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: {
    category: 'Performance' | 'Architecture' | 'DevOps' | 'Leadership';
    title: string;
    details: string;
    metrics?: string;
  }[];
  techStack: string[];
}

export interface TechSkill {
  name: string;
  category: 'Core Mobile' | 'Performance & State' | 'DevOps & Tooling' | 'AI & Automation';
  proficiency: string;
  description: string;
  highlight?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  username: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Amol Khartade',
    role: 'Lead Mobile Engineer',
    subRole: 'AI-Augmented Developer',
    headline: 'Architecting high-performance, offline-first mobile ecosystems at scale.',
    status: 'SYSTEM STATUS: PRODUCTION ONLINE',
    fpsTarget: 'LOCKED 60 FPS',
    summary:
      'Lead Mobile Engineer and solo product owner architecting mission-critical, offline-first enterprise mobile ecosystems. Known for relentless performance optimization, native build automation, and multiplying engineering velocity through modern AI agentic workflows.',
    location: 'Global / Remote',
    email: 'amol.khartade@example.com',
    github: 'https://github.com/amolkhartade',
    linkedin: 'https://linkedin.com/in/amol-khartade',
  },

  heroMetrics: [
    { label: 'Scroll Target', value: '60 FPS', sub: 'Shopify FlashList Locked' },
    { label: 'Memory Drop', value: '-40%', sub: 'Massive CRM Datasets' },
    { label: 'Cold Start Latency', value: '< 1ms', sub: 'MMKV v4 + TanStack Query' },
    { label: 'Deployment', value: 'Zero Touch', sub: 'Solo Linux EAS Pipelines' },
  ],

  about: {
    title: 'High-Velocity Solo Product Ownership & Agentic Engineering',
    leadParagraph:
      'I operate as a solo product owner managing the end-to-end lifecycle of production enterprise CRMs—from initial system architecture and native mobile engineering to automated deployment and app store releases.',
    secondaryParagraph:
      'My core focus centers on extreme operational efficiency, robust automated CI/CD pipelines, and integrating state-of-the-art AI agentic workflows (Claude Code, Gemini CLI, Google Antigravity). By orchestrating autonomous agents directly into my development lifecycle, I multiply engineering velocity, eliminating bottlenecks and maintaining ruthless code quality at scale.',
    pillars: [
      {
        id: 'solo-ownership',
        title: 'Solo Product Ownership',
        description:
          'Single-handedly leading mobile architecture, technical roadmap, native modules, and production delivery for mission-critical enterprise CRMs.',
        icon: 'Crown',
      },
      {
        id: 'performance',
        title: 'Extreme Performance & 60 FPS Scroll',
        description:
          'Eliminating React Native bridge friction, recycling views with Shopify FlashList, and benchmarking memory consumption to ensure silky-smooth performance.',
        icon: 'Zap',
      },
      {
        id: 'offline-first',
        title: 'Offline-First Resilience',
        description:
          'Architecting sub-millisecond local-first persistence with C++ MMKV v4 and TanStack Query, enabling instantaneous app launches and automatic background sync.',
        icon: 'Database',
      },
      {
        id: 'ai-workflows',
        title: 'AI-Augmented Velocity',
        description:
          'Leveraging Claude Code, Gemini CLI, and Google Antigravity to automate boilerplate, generate resilient test suites, and accelerate feature shipping.',
        icon: 'Cpu',
      },
    ],
  },

  experience: [
    {
      company: 'LeadPluss CRM',
      role: 'Lead Mobile Engineer & Solo Product Owner',
      period: '2023 — Present',
      location: 'Production Enterprise Ecosystem',
      summary:
        'Single-handedly architected, scaled, and maintained the global enterprise mobile application for LeadPluss CRM, empowering sales teams with instantaneous offline data access and seamless desktop-class mobile workflows.',
      highlights: [
        {
          category: 'Performance',
          title: 'Shopify FlashList Rendering Overhaul',
          details:
            'Completely redesigned the CRM lead feed rendering engine from legacy FlatList to Shopify FlashList. Implemented intelligent view recycling and memoized cell layout estimation, locking scroll performance at a deterministic 60 FPS and slashing runtime memory consumption by 40% across datasets exceeding 50,000+ records.',
          metrics: '60 FPS Locked • -40% Memory Usage',
        },
        {
          category: 'Architecture',
          title: 'Deterministic Offline-First Sync Layer',
          details:
            'Engineered an offline-first data layer pairing TanStack Query (v5) with react-native-mmkv v4 via native C++ bindings. Enabled instantaneous cold boot reads (<1ms), optimistic UI mutations, and conflict-free background synchronizations during erratic mobile connectivity.',
          metrics: '0ms Latency • Instantaneous Cold Boot',
        },
        {
          category: 'DevOps',
          title: 'Native Build Pipelines & Local Linux EAS',
          details:
            'Configured and maintained self-hosted Linux EAS (Expo Application Services) build workers and automated fastlane distribution scripts. Solo-managed iOS Code Signing, Android Keystores, and zero-touch continuous submissions directly to the Apple App Store and Google Play Store.',
          metrics: '100% Automated • Zero-Touch Store Releases',
        },
        {
          category: 'Leadership',
          title: 'AI Agentic Workflow Integration',
          details:
            'Established an autonomous development workflow leveraging Claude Code, Gemini CLI, and Google Antigravity. Automated regression tests, migration scripts, and component scaffolds, cutting development turnarounds by more than half.',
          metrics: '2.5x Feature Velocity',
        },
      ],
      techStack: [
        'React Native',
        'Expo',
        'TypeScript',
        'Shopify FlashList',
        'TanStack Query',
        'react-native-mmkv v4',
        'Zod',
        'Tailwind CSS',
        'EAS Build',
        'Azure DevOps',
      ],
    },
  ],

  techStackCategories: [
    {
      name: 'Core Mobile & Languages',
      skills: [
        {
          name: 'React Native',
          category: 'Core Mobile' as const,
          proficiency: 'Architect Level',
          description: 'Production architecture, custom native bridges, gesture orchestration, and rendering optimization.',
          highlight: true,
        },
        {
          name: 'Expo & EAS',
          category: 'Core Mobile' as const,
          proficiency: 'Advanced',
          description: 'Expo Config Plugins, custom native runtime builds, prebuilds, and self-hosted build infrastructure.',
          highlight: true,
        },
        {
          name: 'TypeScript',
          category: 'Core Mobile' as const,
          proficiency: 'Mastery',
          description: 'Strict typing, generic inference, automated API schema contracts, and bulletproof codebases.',
          highlight: true,
        },
        {
          name: 'Tailwind CSS',
          category: 'Core Mobile' as const,
          proficiency: 'Advanced',
          description: 'Design system tokenization, NativeWind styling, and performant utility-first cross-platform UI.',
        },
        {
          name: 'Zod',
          category: 'Core Mobile' as const,
          proficiency: 'Advanced',
          description: 'Runtime payload validation, schema-driven forms, and type-safe offline payload sanitization.',
        },
      ],
    },
    {
      name: 'Performance, State & Storage',
      skills: [
        {
          name: 'Shopify FlashList',
          category: 'Performance & State' as const,
          proficiency: 'Specialist',
          description: 'View recycling, estimated item sizes, locked 60fps rendering, and massive dataset virtualization.',
          highlight: true,
        },
        {
          name: 'react-native-mmkv v4',
          category: 'Performance & State' as const,
          proficiency: 'Specialist',
          description: 'Sub-millisecond direct C++ memory-mapped disk IO for lightning-fast offline cache storage.',
          highlight: true,
        },
        {
          name: 'TanStack Query',
          category: 'Performance & State' as const,
          proficiency: 'Advanced',
          description: 'Optimistic mutations, intelligent caching, offline persistence garbage collection, and retry logic.',
          highlight: true,
        },
      ],
    },
    {
      name: 'DevOps & Native Infrastructure',
      skills: [
        {
          name: 'Azure DevOps',
          category: 'DevOps & Tooling' as const,
          proficiency: 'Advanced',
          description: 'Enterprise CI/CD pipelines, automated testing gates, branch policies, and artifact management.',
          highlight: true,
        },
        {
          name: 'Local Linux EAS Build',
          category: 'DevOps & Tooling' as const,
          proficiency: 'Specialist',
          description: 'Self-hosted bare-metal Linux workers, Android NDK compilation, and custom build concurrency.',
          highlight: true,
        },
        {
          name: 'App Store & Google Play',
          category: 'DevOps & Tooling' as const,
          proficiency: 'Expert',
          description: 'Certificate provisioning, fastlane metadata synchronization, compliance audits, and staged rollouts.',
          highlight: true,
        },
        {
          name: 'Git & Version Control',
          category: 'DevOps & Tooling' as const,
          proficiency: 'Advanced',
          description: 'Trunk-based development, semantic release automation, and atomic rebase workflows.',
        },
      ],
    },
    {
      name: 'AI Agentic Tooling',
      skills: [
        {
          name: 'Claude Code',
          category: 'AI & Automation' as const,
          proficiency: 'Pioneer',
          description: 'Automated refactoring, architectural unit generation, and test synthesis.',
          highlight: true,
        },
        {
          name: 'Gemini CLI & API',
          category: 'AI & Automation' as const,
          proficiency: 'Pioneer',
          description: 'Multimodal diagnostics, automated schema generation, and code explanation.',
          highlight: true,
        },
        {
          name: 'Google Antigravity',
          category: 'AI & Automation' as const,
          proficiency: 'Pioneer',
          description: 'Autonomous multi-agent execution, planning loops, and full-stack workflow acceleration.',
          highlight: true,
        },
      ],
    },
  ],

  contact: {
    heading: 'Initiate Communication',
    subheading:
      'Looking for a Lead Mobile Engineer to architect high-performance offline mobile platforms or scale engineering velocity with AI agentic workflows? Let’s connect.',
    email: 'amol.khartade@example.com',
    links: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/amol-khartade',
        label: 'Connect on LinkedIn',
        username: 'in/amol-khartade',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/amolkhartade',
        label: 'Explore Repositories',
        username: '@amolkhartade',
      },
      {
        platform: 'Email',
        url: 'mailto:amol.khartade@example.com',
        label: 'Direct Email',
        username: 'amol.khartade@example.com',
      },
    ],
  },
};
