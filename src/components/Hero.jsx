import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero({ isLoading }) {
  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Response Time' },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 mb-24">
      {/* Top tag line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <span className="tag-accent">
          <Sparkles size={10} />
          Now Accepting Projects
        </span>
      </motion.div>

      {/* Main heading — asymmetric, bold */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          <span className="block">High-Performance</span>
          <span className="block mt-2">
            Websites by{' '}
            <span className="relative inline-block">
              <span className="text-[#e4ff1a]">Motion</span>
              <span className="text-outline">Nex</span>
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] bg-[#e4ff1a]"
                initial={{ width: 0 }}
                animate={{ width: isLoading ? 0 : '100%' }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-[#777] max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Select an industry to view our ready-to-launch demos.
          <br className="hidden md:block" />
          Crafted with precision & performance in mind.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          <button className="group relative px-8 py-4 bg-[#e4ff1a] text-[#0a0a0a] font-bold text-sm tracking-[0.1em] uppercase font-mono transition-all duration-300 hover:bg-[#d4ef10] flex items-center justify-center gap-2">
            Explore Demos
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            {/* Corner notch */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-[#0a0a0a]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          </button>

          <button className="group px-8 py-4 border-2 border-[#2a2a2a] text-[#999] font-mono text-sm tracking-[0.1em] uppercase hover:border-[#e4ff1a] hover:text-[#e4ff1a] transition-all duration-300 flex items-center justify-center gap-2">
            Contact Us
            <span className="w-4 h-[1px] bg-current transition-all group-hover:w-6" />
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-[#2a2a2a] border border-[#2a2a2a]">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 md:px-12 py-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-[#e4ff1a] mb-1">{stat.number}</div>
              <div className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-[#666]">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 hidden lg:block pointer-events-none">
        <div className="w-16 h-16 border border-[#2a2a2a] spin-slow" />
      </div>
      <div className="absolute top-40 right-12 hidden lg:block pointer-events-none">
        <div className="text-[#2a2a2a] font-mono text-[0.6rem] tracking-widest uppercase writing-mode-vertical"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
