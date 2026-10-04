import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { categories, demos } from '../data';

export default function Showcase({ isLoading }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredDemos = activeCategory === 'All'
    ? demos
    : demos.filter(demo => demo.category === activeCategory);

  const displayedDemos = filteredDemos.slice(0, visibleCount);

  return (
    <>
      {/* Section header */}
      <section id="showcase" className="max-w-7xl mx-auto px-6 mb-6 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="counter-deco block mb-3">// Our Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-[#e4ff1a]">Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2 text-xs font-mono tracking-[0.12em] uppercase transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-[#e4ff1a] text-[#0a0a0a] border-[#e4ff1a] font-bold'
                    : 'bg-transparent text-[#777] border-[#2a2a2a] hover:border-[#e4ff1a]/50 hover:text-[#e4ff1a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active filter indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[1px] flex-1 bg-[#2a2a2a]" />
          <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-[#555]">
            Showing {displayedDemos.length} of {filteredDemos.length} {activeCategory === 'All' ? 'projects' : activeCategory.toLowerCase()}
          </span>
          <div className="h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 min-h-[60vh] flex flex-col items-center">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {displayedDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', bounce: 0.15 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredId(demo.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => demo.link && window.open(demo.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="corner-brackets relative overflow-hidden aspect-video bg-[#111]">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      hoveredId === demo.id ? 'scale-105 grayscale-0' : 'grayscale-[30%]'
                    }`}
                  />

                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-[#0a0a0a]/70 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 ${
                    hoveredId === demo.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex items-center gap-2 px-6 py-3 bg-[#e4ff1a] text-[#0a0a0a] font-mono text-xs font-bold tracking-[0.15em] uppercase transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                      <Eye size={14} />
                      View Demo
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Index number */}
                  <div className="absolute top-4 left-4 font-mono text-[0.6rem] tracking-[0.2em] text-white/30 uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a0a0a]/60 backdrop-blur-sm font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/60">
                    {demo.category}
                  </div>

                  {/* Watermark */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 opacity-30">
                    <img src="/LOGO.png" alt="MotionNex Logo" className="w-4 h-4 object-contain brightness-0 invert" />
                    <span className="text-[0.55rem] font-mono font-bold text-white tracking-[0.2em] uppercase">MotionNex</span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-4 px-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-[#e4ff1a] transition-colors duration-300">{demo.title}</h3>
                    <p className="text-xs font-mono text-[#555] tracking-wider uppercase">{demo.category}</p>
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className="text-[#444] group-hover:text-[#e4ff1a] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredDemos.length && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 px-8 py-3 bg-transparent border border-[#2a2a2a] text-[#777] font-mono text-sm tracking-[0.15em] uppercase hover:border-[#e4ff1a]/50 hover:text-[#e4ff1a] transition-all duration-300"
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            See More Projects
          </motion.button>
        )}
      </section>

      {/* Infinite Marquee */}
      <section className="mt-20 py-6 border-y border-[#2a2a2a] overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex items-center gap-0 shrink-0">
              {['Salon', 'Restaurant', 'Hotel', 'Gym', 'Hospital', 'E-Commerce', 'Portfolio', 'SaaS'].map((word, i) => (
                <span key={`${repeatIndex}-${i}`} className="flex items-center gap-6 px-6">
                  <span className="font-display text-2xl md:text-4xl font-bold text-[#1a1a1a] whitespace-nowrap hover:text-[#e4ff1a] transition-colors duration-300 cursor-default">
                    {word}
                  </span>
                  <span className="text-[#e4ff1a] text-lg">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
