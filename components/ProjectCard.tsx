
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] mono bg-neutral-800 text-neutral-400 rounded-md border border-neutral-700">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        <div className="grid grid-cols-3 gap-2">
          <a 
            href={project.liveUrl} 
            className="flex items-center justify-center px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-xs font-bold transition-colors"
          >
            LIVE
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-bold transition-colors"
          >
            GITHUB
          </a>
          <a 
            href={project.designerUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2 border border-neutral-700 hover:border-neutral-500 rounded-lg text-xs font-bold transition-colors"
          >
            DESIGN
          </a>
        </div>
      </div>

      {/* Subtle border shine effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </div>
  );
};

export default ProjectCard;
