 "use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
          <div
            className={`mx-auto max-w-fit flex items-center justify-between rounded-2xl border transition-all ${
              isScrolled
                ? 'bg-black/80 backdrop-blur-md border-neutral-800'
                : 'bg-neutral-950/40 border-neutral-800/60'
            } px-8 py-3 gap-12`}
          >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 group">
            <div className="w-6 h-6 bg-purple-800 rounded flex items-center justify-center font-bold text-xs group-hover:rotate-12 transition-transform">
              B9
            </div>
            <span className="font-bold text-base tracking-tight">LABS</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => {
              const isExternal = item.path.startsWith('http');
              const isActive = pathname === item.path;

              return isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`text-xs font-medium transition-colors ${
                    isActive ? 'text-purple-500' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold border border-purple-800 hover:scale-105 transition-all">
            Let's Connect
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 transition-colors"
          >
            <div className="flex flex-col space-y-1">
              <span className="w-4 h-0.5 bg-neutral-200" />
              <span className="w-4 h-0.5 bg-neutral-200" />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-2 md:hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 backdrop-blur-md px-4 py-3 space-y-3">
            {NAV_ITEMS.map((item) => {
              const isExternal = item.path.startsWith('http');
              const isActive = pathname === item.path;

              return isExternal ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-neutral-300 hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`block text-sm font-medium ${
                    isActive ? 'text-purple-500' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button className="w-full bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              Let's Connect
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
