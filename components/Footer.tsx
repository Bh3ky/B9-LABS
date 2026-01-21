
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 pb-16">
      <div className="max-w-7xl mx-auto rounded-[28px] border border-neutral-800/60 bg-neutral-950/40 px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-purple-800 rounded-md flex items-center justify-center font-bold text-xs text-white">
                B9
              </div>
              <span className="text-sm font-semibold text-neutral-200">B9 Labs</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400 max-w-sm">
              B9 Labs—a hub for distributed systems, high-performance builds, and human-centric designs..
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-300">Product</div>
              <div className="space-y-2 text-sm text-neutral-400">
                <a href="#" className="block hover:text-white transition-colors">Features</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Integrations</a>
                <a href="#" className="block hover:text-white transition-colors">Updates</a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-300">Resources</div>
              <div className="space-y-2 text-sm text-neutral-400">
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">Guides</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Support</a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-300">Company</div>
              <div className="space-y-2 text-sm text-neutral-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
                <a href="#" className="block hover:text-white transition-colors">Partners</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800/60" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 B9 Labs. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
