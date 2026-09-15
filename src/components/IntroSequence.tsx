import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NexaLogo } from './NexaLogo';

const SESSION_KEY = 'nexa-intro-played';
const HOLD_MS = 1100;

export const IntroSequence: React.FC = () => {
  // Decided once, synchronously, during the first render — not inside an
  // effect. React 18 StrictMode double-invokes effects in dev, and checking
  // + writing sessionStorage inside the effect body means the second
  // invocation sees the first invocation's own write and bails out, leaving
  // the dissolve timer killed by cleanup with nothing left to reschedule it.
  // A render-time ref sidesteps that: it's stable across the double-render.
  const shouldPlayRef = useRef<boolean | null>(null);
  if (shouldPlayRef.current === null) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY);
    shouldPlayRef.current = !prefersReducedMotion && !alreadyPlayed;
    if (shouldPlayRef.current) {
      sessionStorage.setItem(SESSION_KEY, '1');
    }
  }

  const [visible, setVisible] = useState(shouldPlayRef.current);
  const dismiss = () => setVisible(false);

  useEffect(() => {
    if (!shouldPlayRef.current) return;
    const holdTimer = window.setTimeout(dismiss, HOLD_MS);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') dismiss();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(holdTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="intro-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
          onClick={dismiss}
          role="button"
          tabIndex={0}
          aria-label="Skip intro"
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          >
            <NexaLogo size="lg" variant="dark" showSubtitle={true} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute bottom-10 text-[11px] tracking-[0.25em] uppercase text-[#FAFAF8]/40"
          >
            Tap to skip
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
