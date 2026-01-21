
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Add AnimatePresence to the imports from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">KP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-primary dark:text-blue-400">BPR Karya Parhuta</span>
            <span className="text-[10px] uppercase tracking-widest text-gold dark:text-gold font-medium">Solusi Keuangan Terpercaya</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === item.path 
                  ? 'text-gold' 
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="activeNav" 
                  className="h-0.5 bg-gold mt-1 rounded-full" 
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          
          <Link 
            to="/dashboard"
            className="hidden md:block bg-primary hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Internet Banking
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-center text-white p-3 rounded-lg font-bold"
              >
                Login Nasabah
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
