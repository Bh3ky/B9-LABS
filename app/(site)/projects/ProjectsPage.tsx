
import React from 'react';
import TimelineTracker from '../../../components/TimelineTracker';
import ProjectCard from '../../../components/ProjectCard';
import { PROJECTS } from '../../../constants';

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in slide-in-from-bottom-4 duration-700">
      <div className="mb-20">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">PROJECT ARCHIVE</h1>
        <p className="text-neutral-500 max-w-xl text-lg">
          Our complete index of builds, tracked chronologically from the inception of B9 Labs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Sidebar: Timeline */}
        <aside className="lg:w-48 flex-shrink-0 hidden lg:block sticky top-32 h-fit">
          <TimelineTracker projects={PROJECTS} />
        </aside>

        {/* Main Content: Projects Grid */}
        <div className="flex-grow">
          <div className="space-y-32">
            {/* Group projects by year */}
            {['2026', '2025', '2024', '2023'].map(year => {
              const yearProjects = PROJECTS.filter(p => p.completionYear === year);
              if (yearProjects.length === 0) return null;

              return (
                <div key={year} className="space-y-12">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-7xl font-black text-neutral-800/30 select-none">
                      {year}
                    </h2>
                    <div className="h-px flex-grow bg-neutral-900" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {yearProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
