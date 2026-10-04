import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Sparkles, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Sparkles size={24} className="text-[#e4ff1a]" />,
      title: "Design Excellence",
      description: "We craft visually stunning interfaces that captivate users and elevate your brand identity."
    },
    {
      icon: <Code size={24} className="text-[#e4ff1a]" />,
      title: "Technical Mastery",
      description: "Built on modern stacks, ensuring robust performance, scalability, and seamless user experiences."
    },
    {
      icon: <Zap size={24} className="text-[#e4ff1a]" />,
      title: "Rapid Execution",
      description: "Agile methodologies that transform your ideas into market-ready products with unprecedented speed."
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32 mt-20 relative overflow-hidden">
      {/* Section header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="counter-deco">// About Us</span>
          <div className="h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            We Build Digital <br />
            <span className="text-[#e4ff1a]">Masterpieces</span>
          </h2>
          <p className="text-base text-[#777] max-w-md font-light leading-relaxed">
            MotionNex is a premier digital agency dedicated to transforming ambitious concepts into high-performance web experiences.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image/Visual */}
        <div className="relative group corner-brackets p-2">
          <div className="absolute inset-0 bg-[#e4ff1a]/5 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4 group-hover:bg-[#e4ff1a]/10 transition-colors duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="About Our Team" 
            className="relative z-10 w-full h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
          
          <div className="absolute bottom-6 left-6 z-20 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#2a2a2a] p-6 max-w-[200px]">
            <div className="font-display text-4xl font-bold text-[#e4ff1a] mb-1">5+</div>
            <div className="text-xs font-mono tracking-widest text-[#777] uppercase">Years of Innovation</div>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="flex flex-col gap-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-6 group"
            >
              <div className="w-16 h-16 shrink-0 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#e4ff1a] transition-colors duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e4ff1a] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#777] leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}

          <button className="self-start group px-8 py-4 border-2 border-[#2a2a2a] text-[#999] font-mono text-sm tracking-[0.1em] uppercase hover:border-[#e4ff1a] hover:text-[#e4ff1a] transition-all duration-300 flex items-center gap-2 mt-4">
            Meet the Team
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
