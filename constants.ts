
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', path: '/projects' },
  { label: 'Archive', path: '/archive' },
  { label: 'Designer', path: 'https://www.threads.com/@bheky.io' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ComingSoon UI',
    description: 'Coming soon landing page placeholder.',
    date: '2026-02-03',
    completionYear: '2026',
    image: '/images/comingsoon.png',
    liveUrl: 'https://comingsoonn.vercel.app/',
    githubUrl: 'https://github.com/Bh3ky/comingsoon',
    designerUrl: '#',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    metrics: { stars: 0, loc: '1k+', commits: 5, status: 'active' }
  },
  {
    id: '2',
    title: 'lagom marketing OS',
    description: 'A modern marketing OS dashboard with AI-powered strategy generation.',
    date: '2026-01-20',
    completionYear: '2026',
    image: '/images/lagom.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Bh3ky/lagom',
    designerUrl: '#',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript', 'Gemini API'],
    metrics: { stars: 0, loc: '4k+', commits: 2, status: 'active' }
  },
  {
    id: '3',
    title: 'StudyForge',
    description: 'Turn your PDFs and handwritten notes into structured study materials and infographics using Gemini.',
    date: '2025-12-29',
    completionYear: '2025',
    image: '/images/studyforge.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Bh3ky/studyforge',
    designerUrl: '#',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Clerk Auth', 'TailwindCSS', 'shadcn UI'],
    metrics: { stars: 0, loc: '8k+', commits: 6, status: 'stable' }
  },
  {
    id: '4',
    title: 'Personal Portfolio',
    description: 'Personal website where I showcase my projects and learning experiments.',
    date: '2025-10-12',
    completionYear: '2025',
    image: '/images/personal-website.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/b9labs/void',
    designerUrl: '#',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    metrics: { stars: 0, loc: '8k', commits: 10, status: 'active' }
  },
];
