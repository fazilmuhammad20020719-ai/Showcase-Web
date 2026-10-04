import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, ChevronDown, X } from 'lucide-react';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState('English');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Read languages from the Google Translate hidden select
  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select && select.options.length > 1) {
        const langs = [];
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value) {
            langs.push({
              value: select.options[i].value,
              label: select.options[i].text
            });
          }
        }
        setLanguages(langs);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredLanguages = languages.filter(lang =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (lang) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang.value;
      select.dispatchEvent(new Event('change'));
      setSelectedLang(lang.label);
    }
    setIsOpen(false);
    setSearch('');
  };

  const handleReset = () => {
    // Reset to English (original)
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = '';
      select.dispatchEvent(new Event('change'));
    }
    // Also try removing Google translate cookie
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setSelectedLang('English');
    setIsOpen(false);
    setSearch('');
    window.location.reload();
  };

  return (
    <div ref={dropdownRef} className="notranslate relative z-50" translate="no">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-[10px] xl:text-[11px] font-mono tracking-[0.1em] uppercase text-[#999] hover:text-[#e4ff1a] border border-[#2a2a2a] hover:border-[#e4ff1a]/50 transition-all duration-300 bg-[#0a0a0a] whitespace-nowrap"
      >
        <Globe size={12} className="shrink-0" />
        <span className="max-w-[60px] xl:max-w-[80px] truncate">{selectedLang}</span>
        <ChevronDown size={10} className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 lg:left-auto lg:right-0 mt-2 w-56 bg-[#111] border border-[#2a2a2a] shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          {/* Search */}
          <div className="p-2 border-b border-[#2a2a2a]">
            <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-2">
              <Search size={12} className="text-[#555] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search language..."
                className="bg-transparent text-white text-xs font-mono outline-none w-full placeholder-[#555]"
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-[#555] hover:text-white">
                  <X size={10} />
                </button>
              )}
            </div>
          </div>

          {/* Reset to English */}
          <button
            onClick={handleReset}
            className="w-full px-4 py-2.5 text-left text-[11px] font-mono tracking-wider uppercase text-[#e4ff1a] hover:bg-[#e4ff1a]/10 transition-colors border-b border-[#2a2a2a] flex items-center gap-2"
          >
            <span>⟲</span> Reset to English
          </button>

          {/* Language List */}
          <div className="max-h-52 overflow-y-auto custom-lang-scroll">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => handleSelect(lang)}
                  className={`w-full px-4 py-2.5 text-left text-[11px] font-mono tracking-wider uppercase transition-colors ${
                    selectedLang === lang.label 
                      ? 'bg-[#e4ff1a]/10 text-[#e4ff1a]' 
                      : 'text-[#999] hover:bg-[#1a1a1a] hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-[#555] text-xs font-mono">
                No languages found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
