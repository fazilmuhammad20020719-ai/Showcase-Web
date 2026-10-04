import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '7,500',
    currency: 'LKR',
    originalPrice: '10,000 LKR',
    period: '',
    description: 'Perfect for small businesses getting started online.',
    features: ['3 Page Landing Site', 'Responsive Design', 'Basic SEO Setup', 'Email Support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '17,500',
    currency: 'LKR',
    originalPrice: '20,000 LKR',
    period: '',
    description: 'Everything you need to grow your digital presence.',
    features: ['Up to 10 Pages', 'Premium Animations', 'Advanced SEO', 'Priority Support', 'Custom Domain'],
    cta: 'Choose Pro',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Custom',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'For large-scale businesses with custom requirements.',
    features: ['Unlimited Pages', 'E-commerce Integration', 'Custom Backend', '24/7 Dedicated Support', 'Dedicated Account Manager'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32">
      {/* Section header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="counter-deco">// Pricing</span>
          <div className="h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Transparent<br />
            <span className="text-[#e4ff1a]">Pricing</span>
          </h2>
          <p className="text-base text-[#777] max-w-md font-light leading-relaxed">
            Choose the perfect plan to launch your beautiful, high-performance website. No hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-0 border border-[#2a2a2a]">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative p-8 md:p-10 flex flex-col transition-all duration-500 ${index < plans.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#2a2a2a]' : ''
              } ${plan.highlighted
                ? 'bg-[#111] stripe-pattern'
                : 'bg-transparent hover:bg-[#111]/50'
              } ${hoveredIndex === index ? 'z-10' : ''
              }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-[1px] left-8 tag-accent flex items-center gap-1">
                <Zap size={10} />
                {plan.badge}
              </div>
            )}

            {/* Plan number */}
            <div className="font-mono text-[0.6rem] tracking-[0.3em] text-[#444] uppercase mb-6">
              Plan 0{index + 1}
            </div>

            <h3 className={`text-xl font-semibold mb-4 ${plan.highlighted ? 'text-[#e4ff1a]' : 'text-white'}`}>
              {plan.name}
            </h3>

            <div className="flex flex-col mb-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl md:text-5xl font-bold">{plan.price}</span>
                {plan.currency && <span className="text-[#999] font-mono text-sm">{plan.currency}</span>}
                {plan.period && <span className="text-[#555] font-mono text-sm">{plan.period}</span>}
              </div>
              {plan.originalPrice ? (
                <div className="text-sm font-mono text-[#555] line-through mt-1">
                  {plan.originalPrice}
                </div>
              ) : (
                <div className="h-5 mt-1" />
              )}
            </div>

            <p className="text-sm text-[#555] mb-8 leading-relaxed">{plan.description}</p>

            <div className="h-[1px] bg-[#2a2a2a] mb-8" />

            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#999]">
                  <Check size={14} className={`flex-shrink-0 ${plan.highlighted ? 'text-[#e4ff1a]' : 'text-[#555]'}`} />
                  {feature}
                </li>
              ))}
            </ul>


          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-16 bg-[#111] border border-[#2a2a2a] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group shadow-[0_0_30px_rgba(228,255,26,0.05)] hover:shadow-[0_0_50px_rgba(228,255,26,0.15)] transition-shadow duration-500 rounded-sm">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#e4ff1a] shadow-[0_0_15px_rgba(228,255,26,0.8)]" />
        <div>
          <h4 className="text-xl font-bold text-white mb-2">Need a custom quote or have more details?</h4>
          <p className="text-[#888] font-mono text-sm max-w-2xl">
            Fill out our project discovery form below. Our team reviews submissions constantly and will connect with you <span className="text-[#e4ff1a] font-bold drop-shadow-[0_0_8px_rgba(228,255,26,0.5)]">within 2 hours</span>.
          </p>
        </div>
        <a 
          href="#contact" 
          className="shrink-0 px-8 py-4 bg-[#e4ff1a]/10 border border-[#e4ff1a]/30 text-[#e4ff1a] font-mono text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#e4ff1a] hover:text-[#0a0a0a] transition-all hover:shadow-[0_0_20px_rgba(228,255,26,0.4)]"
        >
          Fill The Form
        </a>
      </div>
    </section>
  );
}
