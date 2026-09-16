import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { NexaLogo } from './NexaLogo';
import { ArrowDown, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from '../router';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll depth: tracks progress as the hero scrolls from fully in view to fully past.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Background texture drifts slowly — a distant layer.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  // Foreground content recedes faster and settles back — a near layer.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const parallaxBgStyle = prefersReducedMotion ? undefined : { y: bgY };
  const parallaxContentStyle = prefersReducedMotion
    ? undefined
    : { y: contentY, opacity: contentOpacity, scale: contentScale };

  // Critically damped spring transition (no bounce, high control)
  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-[#FAFAF8] overflow-hidden"
    >
      {/* Full-bleed stadium photography — slow Ken Burns drift gives the still image a cinematic, video-like presence */}
      <motion.div style={parallaxBgStyle} className="absolute -inset-y-[10%] inset-x-0 pointer-events-none overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1546717003-caee5f93a9db?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden="true"
          loading="eager"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.42]"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1, 1.12, 1.06, 1.12], x: [0, -18, 10, 0], y: [0, 10, -6, 0] }
          }
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Dark wash — keeps type legible over the photo */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />

      {/* Faint pitch-marking texture — center circle + halfway line, an understated football cue rather than a literal graphic */}
      <svg
        className="absolute -right-32 -bottom-32 w-[560px] h-[560px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="110" stroke="#FAFAF8" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="3" fill="#FAFAF8" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="#FAFAF8" strokeWidth="1.5" />
      </svg>

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[at_50%_0%] from-white/[0.04] via-transparent to-transparent" />

      {/* Foreground content — recedes and settles back as the hero scrolls away */}
      <motion.div
        style={parallaxContentStyle}
        className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-16"
      >
        {/* Top Brand Marker */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...controlledSpring, delay: 0.1 }}
          className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1C1C1C] pb-6"
        >
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9971F]" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#FAFAF8]/80">
              Professional Football Representation
            </span>
          </div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-[#FAFAF8]/50 flex items-center space-x-6">
            <span>London</span>
            <span className="text-[#C9971F]">•</span>
            <span>Madrid</span>
            <span className="text-[#C9971F]">•</span>
            <span>Milan</span>
            <span className="text-[#C9971F]">•</span>
            <span>Riyadh</span>
          </div>
        </motion.div>

        {/* Primary Statement (Center - Oversized display typography) */}
        <div className="w-full max-w-7xl mx-auto my-auto py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

            {/* Main Headline — a restrained line, not a page-filling billboard; the photo carries the moment */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...controlledSpring, delay: 0.2 }}
              className="lg:col-span-9"
            >
              <h1
                id="hero-statement"
                className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-semibold tracking-[-0.02em] leading-[1.2] text-[#FAFAF8] max-w-2xl"
              >
                We architect the careers of elite footballers.
              </h1>
            </motion.div>

            {/* Right Column Supporting Credibility Block */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...controlledSpring, delay: 0.3 }}
              className="lg:col-span-3 flex flex-col justify-end space-y-6"
            >
              {/* Wordmark Presence */}
              <div className="hidden lg:block pb-2">
                <NexaLogo size="sm" variant="dark" showSubtitle={false} />
              </div>

              <p className="text-sm sm:text-base text-[#FAFAF8]/75 leading-relaxed font-light">
                Contract leverage. Global market access. Precision career architecture. We represent established senior professionals navigating the most demanding negotiations in world football.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.button
                  id="hero-inquiry-btn"
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenInquiry}
                  className="inline-flex items-center justify-between w-full px-6 py-4 bg-[#FAFAF8] hover:bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase transition-colors duration-200 group"
                >
                  <span>Confidential Consultation</span>
                  <ChevronRight className="w-4 h-4 text-[#C9971F] group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <Link
                  to="/services"
                  id="hero-services-link"
                  className="inline-flex items-center justify-between w-full px-6 py-4 bg-[#121212] hover:bg-[#181818] border border-[#222222] text-[#FAFAF8] text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#FAFAF8]/50" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar — Subdued Credibility Markers & Anchor Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-7xl mx-auto pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAFAF8]/50"
        >
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#C9971F]" />
            <span className="tracking-[0.15em] uppercase text-[11px] text-[#FAFAF8]/70">
              FIFA Licensed Football Agency • FFAR Certified Representation
            </span>
          </div>

          <a
            href="#company-intro"
            id="hero-scroll-anchor"
            className="group flex items-center space-x-3 text-[11px] tracking-[0.25em] uppercase text-[#FAFAF8]/60 hover:text-[#FAFAF8] transition-colors"
          >
            <span>Scroll to Perspective</span>
            <div className="w-6 h-6 rounded-full border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#C9971F] transition-colors">
              <ArrowDown className="w-3 h-3 text-[#C9971F] group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
