
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-neutral-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-lg group-hover:rotate-12 transition-transform">
            B9
          </div>
          <span className="font-bold text-xl tracking-tight">LABS</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isExternal = item.path.startsWith('http');
            const isActive = location.pathname === item.path;
            
            return isExternal ? (
              <a 
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-blue-500' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
          Let's Build
        </button>
        
        {/* Mobile menu could be added here for full implementation */}
      </div>
    </header>
  );
};

export default Header;
