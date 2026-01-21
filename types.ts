
export interface Project {
  id: string;
  title: string;
  description: string;
  date: string; // ISO format
  completionYear: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  designerUrl: string;
  tags: string[];
  longDescription?: string;
  metrics?: {
    stars: number;
    loc: string;
    commits: number;
    status: 'active' | 'stable' | 'legacy' | 'experimental';
  };
}

export interface NavItem {
  label: string;
  path: string;
}
