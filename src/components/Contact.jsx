import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    company: '',
    websiteUrl: '',
    projectTypes: [],
    projectStatus: '',
    primaryGoal: '',
    designReferences: '',
    budget: '',
    timeline: ''
  });
  
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectOptions = [
    'E-Commerce', 'Landing Page', 'Corporate Website', 'SaaS/Web App', 'Portfolio', 'Blog'
  ];

  const statusOptions = [
    'Brand New Project', 'Redesign / Revamp', 'Adding features to existing site'
  ];

  const budgetOptions = [
    'Less than $1,000', '$1k - $5k', '$5k - $10k', 'Over $10k'
  ];

  const timelineOptions = [
    'ASAP (Within 2 weeks)', '1 Month', '2-3 Months', 'No strict deadline'
  ];

  const toggleProjectType = (type) => {
    setFormData(prev => {
      if (prev.projectTypes.includes(type)) {
        return { ...prev, projectTypes: prev.projectTypes.filter(t => t !== type) };
      } else {
        return { ...prev, projectTypes: [...prev.projectTypes, type] };
      }
    });
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace this URL with your Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxnR3z2I7sy2fHMJpjWroi2zLZ0zxO5PdJuTV3uqRa-f3ivhtIJHrp3IxkG_mCDqfhY8w/exec';
    
    const submitData = new FormData();
    submitData.append('Name', formData.name);
    submitData.append('Email', formData.email);
    submitData.append('Phone', formData.phone);
    submitData.append('WhatsApp', formData.whatsapp);
    submitData.append('Company', formData.company);
    submitData.append('WebsiteURL', formData.websiteUrl);
    submitData.append('ProjectTypes', formData.projectTypes.join(', '));
    submitData.append('ProjectStatus', formData.projectStatus);
    submitData.append('PrimaryGoal', formData.primaryGoal);
    submitData.append('DesignReferences', formData.designReferences);
    submitData.append('Budget', formData.budget);
    submitData.append('Timeline', formData.timeline);

    try {
      if (scriptURL !== 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
        // Send to Google Sheets
        await fetch(scriptURL, { 
          method: 'POST', 
          body: submitData,
          mode: 'no-cors' // Needed to avoid CORS issues with Apps Script
        });
      } else {
        // Simulate delay if URL isn't set yet
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setIsSubmitted(true);
      setStep(1);
      setFormData({
        name: '', email: '', phone: '', whatsapp: '', company: '', websiteUrl: '',
        projectTypes: [], projectStatus: '', primaryGoal: '', designReferences: '', budget: '', timeline: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error('Error!', error.message);
      alert('Something went wrong while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validation for next buttons
  const canGoToStep2 = formData.name && formData.email && formData.phone && formData.whatsapp;
  const canGoToStep3 = formData.projectTypes.length > 0 && formData.projectStatus;
  const canGoToStep4 = formData.primaryGoal && formData.designReferences;
  const canSubmit = formData.budget && formData.timeline;

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-[#e4ff1a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 relative z-10 border-t border-[#2a2a2a] pt-16">
        
        {/* Header / Intro */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="counter-deco block mb-3">// Start a project</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Let's build <br />
              <span className="text-[#e4ff1a]">something great.</span>
            </h2>
            <p className="text-[#888] font-mono text-sm leading-relaxed mb-12 max-w-md">
              Please take a moment to fill out our project discovery questionnaire. Your answers will help us understand your vision and provide a highly accurate quote.
            </p>
          </div>

          <div className="space-y-6 hidden xl:block">
            {/* Progress steps indicator */}
            {[
              { num: 1, title: 'The Basics', desc: 'Who are you?' },
              { num: 2, title: 'Project Scope', desc: 'What do you need?' },
              { num: 3, title: 'Goals & Vision', desc: 'Why do you need it?' },
              { num: 4, title: 'Logistics', desc: 'Can we work together?' }
            ].map((s) => (
              <div key={s.num} className={`flex items-start gap-4 transition-opacity duration-300 ${step === s.num ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors ${step === s.num ? 'bg-[#e4ff1a] border-[#e4ff1a] text-[#0a0a0a]' : 'bg-[#111] border-[#2a2a2a] text-[#666]'}`}>
                  <span className="font-mono text-xs font-bold">0{s.num}</span>
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${step === s.num ? 'text-white' : 'text-[#666]'}`}>{s.title}</h4>
                  <p className="text-[#555] font-mono text-xs">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#111] border border-[#2a2a2a] p-6 md:p-10 relative overflow-hidden group min-h-[500px] flex flex-col">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#2a2a2a] transition-colors group-hover:border-[#e4ff1a]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#2a2a2a] transition-colors group-hover:border-[#e4ff1a]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#2a2a2a] transition-colors group-hover:border-[#e4ff1a]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#2a2a2a] transition-colors group-hover:border-[#e4ff1a]" />

          {/* Mobile Progress Bar */}
          <div className="xl:hidden w-full bg-[#2a2a2a] h-1 mb-8">
            <div 
              className="h-full bg-[#e4ff1a] transition-all duration-300" 
              style={{ width: `${(step / 4) * 100}%` }} 
            />
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-[#e4ff1a]/10 flex items-center justify-center text-[#e4ff1a] mb-4">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white">Inquiry Sent!</h3>
              <p className="text-[#777] font-mono text-sm max-w-xs">We've received your project details and will be in touch shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 space-y-5"
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Section 1: The Basics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                      <input type="email" required placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                      <input type="tel" required placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                      <input type="tel" required placeholder="WhatsApp Number *" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                    </div>
                    <input type="text" placeholder="Company / Business Name (Optional)" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                    <input type="url" placeholder="Current Website URL (If applicable)" value={formData.websiteUrl} onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors" />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 space-y-8"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Section 2: Project Scope</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-4">What type of website do you need? <span className="text-[#e4ff1a]">*</span></label>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {projectOptions.map(option => (
                          <button key={option} type="button" onClick={() => toggleProjectType(option)} className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${formData.projectTypes.includes(option) ? 'bg-[#e4ff1a] text-[#0a0a0a] border-[#e4ff1a] font-bold' : 'bg-transparent text-[#777] border-[#2a2a2a] hover:border-[#e4ff1a]/50 hover:text-white'}`}>{option}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-4">Is this a brand new project or a redesign? <span className="text-[#e4ff1a]">*</span></label>
                      <div className="flex flex-col gap-2">
                        {statusOptions.map(option => (
                          <button key={option} type="button" onClick={() => setFormData({...formData, projectStatus: option})} className={`w-full text-left px-5 py-4 text-sm font-mono tracking-wider transition-all duration-300 border ${formData.projectStatus === option ? 'bg-[#e4ff1a]/10 text-[#e4ff1a] border-[#e4ff1a]' : 'bg-transparent text-[#777] border-[#2a2a2a] hover:border-[#e4ff1a]/50 hover:text-white'}`}>{option}</button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Section 3: Goals & Vision</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-3">What is the primary goal of this website? <span className="text-[#e4ff1a]">*</span></label>
                      <textarea required placeholder="e.g., Generate more leads, sell products, build brand awareness..." value={formData.primaryGoal} onChange={(e) => setFormData({...formData, primaryGoal: e.target.value})} rows={3} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors resize-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-3">Do you have any design references or websites you really like? <span className="text-[#e4ff1a]">*</span></label>
                      <textarea required placeholder="Paste URLs here and tell us what you like about them..." value={formData.designReferences} onChange={(e) => setFormData({...formData, designReferences: e.target.value})} rows={3} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-5 py-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e4ff1a] transition-colors resize-none" />
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 space-y-8"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Section 4: Logistics</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-white mb-4">What is your estimated budget? <span className="text-[#e4ff1a]">*</span></label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {budgetOptions.map(option => (
                          <button key={option} type="button" onClick={() => setFormData({...formData, budget: option})} className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${formData.budget === option ? 'bg-[#e4ff1a] text-[#0a0a0a] border-[#e4ff1a] font-bold' : 'bg-transparent text-[#777] border-[#2a2a2a] hover:border-[#e4ff1a]/50 hover:text-white'}`}>{option}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-4">When are you hoping to launch? <span className="text-[#e4ff1a]">*</span></label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {timelineOptions.map(option => (
                          <button key={option} type="button" onClick={() => setFormData({...formData, timeline: option})} className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${formData.timeline === option ? 'bg-[#e4ff1a] text-[#0a0a0a] border-[#e4ff1a] font-bold' : 'bg-transparent text-[#777] border-[#2a2a2a] hover:border-[#e4ff1a]/50 hover:text-white'}`}>{option}</button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-12 pt-6 border-t border-[#2a2a2a]">
                {step > 1 && (
                  <button type="button" onClick={handlePrev} className="px-6 py-4 border border-[#2a2a2a] text-white font-mono text-sm uppercase tracking-wider hover:border-[#e4ff1a] transition-colors flex items-center gap-2">
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                
                {step < 4 ? (
                  <button 
                    type="button" 
                    onClick={handleNext} 
                    disabled={(step === 1 && !canGoToStep2) || (step === 2 && !canGoToStep3) || (step === 3 && !canGoToStep4)}
                    className="flex-1 px-6 py-4 bg-[#e4ff1a] text-[#0a0a0a] font-mono font-bold text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:bg-[#d4ef10]"
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="flex-1 px-6 py-4 bg-[#e4ff1a] text-[#0a0a0a] font-mono font-bold text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:shadow-[0_0_30px_rgba(228,255,26,0.3)]"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'} {!isSubmitting && <Send size={16} />}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
