import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Corner decorations */}
            <div className="absolute -inset-12 pointer-events-none">
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#e4ff1a]/40" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#e4ff1a]/40" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#e4ff1a]/40" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#e4ff1a]/40" />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/LOGO.png" alt="MotionNex Logo" className="h-40 md:h-50 w-auto object-contain" />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-[#222] overflow-hidden">
              <motion.div
                className="h-full bg-[#e4ff1a]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-[#555]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Experience
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
