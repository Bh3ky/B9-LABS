
import React from 'react';
import { PROJECTS } from '../constants';
import { Folder, Star, Activity, HardDrive, ArrowRight, Github, ExternalLink } from 'lucide-react';

const ArchivePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in slide-in-from-bottom-2 duration-700">
      <div className="mb-20">
        <div className="flex items-center space-x-2 text-purple-500 mb-4">
          <HardDrive size={30} />
        </div>
        <h1 className="text-6xl font-black mb-6 tracking-tighter">PROJECT VAULT</h1>
        <p className="text-neutral-500 max-w-2xl text-lg leading-relaxed">
          A granular view of our technical history. From experimental kernels to stable production libraries, indexed by performance metrics.
        </p>
      </div>

      <div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 border-b border-neutral-800 bg-neutral-900/50 p-4 text-[10px] mono uppercase text-neutral-500 tracking-widest font-bold">
          <div className="col-span-5 px-4">Repository / Project</div>
          <div className="col-span-2 hidden md:block">Status</div>
          <div className="col-span-2 hidden md:block">Stars / Scale</div>
          <div className="col-span-3 px-4 text-right">Actions</div>
        </div>

        <div className="divide-y divide-neutral-800">
          {PROJECTS.map((project) => (
            <div key={project.id} className="grid grid-cols-12 p-6 hover:bg-neutral-800/20 transition-colors group items-center">
              <div className="col-span-12 md:col-span-5 px-4 flex items-center space-x-4">
                <div className="p-3 bg-neutral-800/50 rounded-lg text-purple-500 group-hover:scale-110 transition-transform">
                  <Folder size={20} fill="currentColor" fillOpacity={0.1} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors flex items-center">
                    {project.title}
                    <span className="ml-3 text-[10px] mono px-2 py-0.5 bg-neutral-800 rounded text-neutral-500 group-hover:text-neutral-300">
                      {project.completionYear}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-1">{project.description}</p>
                </div>
              </div>

              <div className="col-span-2 hidden md:flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${
                  project.metrics?.status === 'active' ? 'bg-green-500 animate-pulse' :
                  project.metrics?.status === 'stable' ? 'bg-purple-500' :
                  project.metrics?.status === 'legacy' ? 'bg-neutral-600' : 'bg-yellow-500'
                }`} />
                <span className="text-xs mono uppercase text-neutral-400">{project.metrics?.status}</span>
              </div>

              <div className="col-span-2 hidden md:block">
                <div className="flex items-center space-x-3 text-xs mono">
                  <div className="flex items-center text-neutral-400">
                    <Star size={12} className="mr-1 text-yellow-500/50" />
                    {project.metrics?.stars}
                  </div>
                  <div className="flex items-center text-neutral-400">
                    <Activity size={12} className="mr-1 text-purple-500/50" />
                    {project.metrics?.loc}
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 px-4 flex justify-end space-x-2 mt-4 md:mt-0">
                <a href={project.githubUrl} className="p-2 text-neutral-500 hover:text-white transition-colors" title="GitHub">
                  <Github size={18} />
                </a>
                <a href={project.liveUrl} className="p-2 text-neutral-500 hover:text-white transition-colors" title="Demo">
                  <ExternalLink size={18} />
                </a>
                <button className="flex items-center space-x-2 px-4 py-2 bg-neutral-800/50 hover:bg-white hover:text-black rounded-lg text-[10px] mono font-bold transition-all">
                  <span>METRICS</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Infrastructure Note */}
      <div className="mt-12 p-8 border border-neutral-900 rounded-2xl bg-neutral-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-white font-bold mb-2">Technical Health Monitoring</h4>
          <p className="text-neutral-500 text-sm max-w-lg">All archived projects are automatically scanned every 24 hours for security vulnerabilities and dependency updates.</p>
        </div>
        <div className="flex -space-x-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Contributor" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-purple-600 flex items-center justify-center text-[10px] font-bold">+12</div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
