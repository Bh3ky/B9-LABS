
import React from 'react';
import Hero from '../components/Hero';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Counter from '../components/Counter';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col animate-in fade-in duration-700">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">CORE DIRECTORY</h2>
            <p className="text-neutral-500 max-w-lg">
              Engineered for efficiency, stability, and scale. These projects represent the pinnacle of our current technical research.
            </p>
          </div>
          <Link to="/projects" className="text-blue-500 font-bold hover:text-blue-400 transition-colors inline-flex items-center group">
            All Repositories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Lab Stats Section with Real-time Loading Effect */}
      <section className="bg-neutral-900/10 py-32 border-y border-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <Counter target={42} suffix="+" />
              <div className="text-xs mono uppercase text-neutral-500 tracking-widest font-bold">Active Repos</div>
            </div>
            <div>
              <Counter target={1200000} suffix="+" />
              <div className="text-xs mono uppercase text-neutral-500 tracking-widest font-bold">Total Downloads</div>
            </div>
            <div>
              <Counter target={850} />
              <div className="text-xs mono uppercase text-neutral-500 tracking-widest font-bold">Core Authors</div>
            </div>
            <div>
              <Counter target={99} suffix="%" />
              <div className="text-xs mono uppercase text-neutral-500 tracking-widest font-bold">System Health</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
