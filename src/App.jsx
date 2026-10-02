import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] font-sans overflow-x-hidden relative">
      <Preloader isLoading={isLoading} />

      <Header />

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-24">
        <Hero isLoading={isLoading} />
        <Showcase isLoading={isLoading} />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
