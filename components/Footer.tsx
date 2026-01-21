
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center font-bold text-xs text-neutral-400">
            B9
          </div>
          <span className="text-sm font-bold text-neutral-500 tracking-wider">LABS / 2024</span>
        </div>

        <div className="flex space-x-8 text-neutral-500 text-xs font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">RSS</a>
        </div>

        <div className="text-neutral-600 text-[10px] mono uppercase tracking-tight">
          Built for the open-source community
        </div>
      </div>
    </footer>
  );
};

export default Footer;
