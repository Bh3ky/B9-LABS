
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', path: '/projects' },
  { label: 'Archive', path: '/archive' },
  { label: 'Designer', path: 'https://bhekydotdev.vercel.app/' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether Engine',
    description: 'A distributed event streaming platform built for high-throughput microservices architectures.',
    date: '2026-01-15',
    completionYear: '2026',
    image: 'https://picsum.photos/seed/aether/800/600',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/aether',
    designerUrl: 'https://b9labs.dev',
    tags: ['Rust', 'gRPC', 'Kubernetes'],
    metrics: { stars: 1240, loc: '124k', commits: 450, status: 'active' }
  },
  {
    id: '2',
    title: 'Nexus UI',
    description: 'Design system and component library focusing on accessibility and kinetic motion.',
    date: '2025-11-20',
    completionYear: '2025',
    image: 'https://picsum.photos/seed/nexus/800/600',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/nexus-ui',
    designerUrl: 'https://b9labs.dev',
    tags: ['TypeScript', 'Tailwind', 'Framer Motion'],
    metrics: { stars: 890, loc: '45k', commits: 120, status: 'active' }
  },
  {
    id: '3',
    title: 'Synthetix DB',
    description: 'Experimental vector database optimized for edge computing and low-latency RAG workflows.',
    date: '2025-04-05',
    completionYear: '2025',
    image: 'https://picsum.photos/seed/synth/800/600',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/synthetix',
    designerUrl: 'https://b9labs.dev',
    tags: ['Go', 'WASM', 'SQLite'],
    metrics: { stars: 3400, loc: '18k', commits: 89, status: 'stable' }
  },
  {
    id: '4',
    title: 'Void Proxy',
    description: 'Ultra-lightweight reverse proxy and load balancer with zero-trust security layers.',
    date: '2024-12-12',
    completionYear: '2024',
    image: 'https://picsum.photos/seed/void/800/600',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/void',
    designerUrl: 'https://b9labs.dev',
    tags: ['C++', 'eBPF', 'Linux'],
    metrics: { stars: 156, loc: '8k', commits: 210, status: 'experimental' }
  },
  {
    id: '5',
    title: 'Chronos Dashboard',
    description: 'Real-time observability platform for large-scale telemetry visualization.',
    date: '2023-10-30',
    completionYear: '2022',
    image: 'https://picsum.photos/seed/chronos/800/600',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/chronos',
    designerUrl: 'https://b9labs.dev',
    tags: ['Next.js', 'D3.js', 'InfluxDB'],
    metrics: { stars: 560, loc: '92k', commits: 34, status: 'legacy' }
  }
];
