import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a]">
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
          <button className="group self-start lg:self-center px-10 py-5 bg-[#e4ff1a] text-[#0a0a0a] font-mono text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#d4ef10] flex items-center gap-3 relative">
            Let's Talk
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#0a0a0a]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          </button>
        </div>

        <div className="h-[1px] bg-[#2a2a2a] mb-10" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img src="/LOGO.png" alt="MotionNex Logo" className="h-32 md:h-40 w-auto object-contain" />
          </div>

          {/* Footer links */}
          <div className="flex gap-8">
            {['Home', 'Showcase', 'About', 'Hire Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-mono tracking-[0.12em] uppercase text-[#555] hover:text-[#e4ff1a] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              /* Twitter */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
              /* Instagram */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
              /* LinkedIn */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#e4ff1a] hover:text-[#e4ff1a] transition-all duration-300"
              >
                {icon}
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
