
import React from 'react';
import { Project } from '../types';

interface TimelineTrackerProps {
  projects: Project[];
}

const TimelineTracker: React.FC<TimelineTrackerProps> = ({ projects }) => {
  // Sort projects by date descending for the timeline
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative h-full w-full py-12">
      {/* Central Line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-neutral-800 z-0" />
      
      <div className="space-y-24 relative z-10">
        {sortedProjects.map((project, index) => (
          <div key={project.id} className="flex items-start">
            {/* Timeline Dot & Label */}
            <div className="flex flex-col items-center mr-8">
              <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center group">
                <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
              </div>
              <div className="mt-2 text-[10px] mono text-neutral-500 font-bold tracking-widest uppercase">
                {project.completionYear}
              </div>
            </div>

            {/* Content Mirror (Implicit link via layout) */}
            <div className="flex-1">
              <span className="text-xs mono text-blue-500/80 mb-1 block uppercase font-medium">
                {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineTracker;
