import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="hire-us" className="border-t border-[#2a2a2a]">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-20">
          <div>
            <span className="counter-deco block mb-4">// Ready?</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Ready to build your<br />
              <span className="text-[#e4ff1a]">digital presence</span>?
            </h2>
          </div>
          <a href="#contact" className="group self-start lg:self-center px-10 py-5 bg-[#e4ff1a] text-[#0a0a0a] font-mono text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4ef10] flex items-center gap-3 relative">
            Let's Talk
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#0a0a0a]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          </a>
        </div>

        <div className="h-[1px] bg-[#2a2a2a] mb-10" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img src="/LOGO.png" alt="MotionNex Logo" className="h-32 md:h-40 w-auto object-contain" />
          </div>

          {/* Footer links */}
          <div className="flex gap-8">
            {['Home', 'Showcase', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-mono tracking-[0.12em] uppercase text-[#555] hover:text-[#e4ff1a] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>


        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] font-mono tracking-[0.15em] uppercase text-[#444]">
            © 2026 MotionNex. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-[0.65rem] font-mono tracking-[0.15em] uppercase text-[#444] hover:text-[#e4ff1a] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
