import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Showcase', 'About', 'Hire Us'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer group">
          <img src="/LOGO.png" alt="MotionNex Logo" className="h-40 md:h-50 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative px-5 py-2 text-xs font-mono tracking-[0.15em] uppercase text-[#999] hover:text-[#e4ff1a] transition-colors duration-300 group"
            >
              <span className="text-[#444] mr-1.5 font-mono">0{i + 1}</span>
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#e4ff1a] transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-[#2a2a2a]">
            <button className="px-5 py-2 text-xs font-mono tracking-[0.15em] uppercase bg-[#e4ff1a] text-[#0a0a0a] font-bold hover:bg-[#d4ef10] transition-colors duration-300">
              Start Project
            </button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#999] hover:text-[#e4ff1a] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] px-6 pb-6"
        >
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block py-4 text-sm font-mono tracking-[0.15em] uppercase text-[#999] hover:text-[#e4ff1a] border-b border-[#1a1a1a] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-[#444] mr-3">0{i + 1}</span>
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
