import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const CompanyIntroSection: React.FC = () => {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageParallaxStyle = prefersReducedMotion ? undefined : { y: imageY };

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  return (
    <section
      id="company-intro"
      className="relative w-full bg-[#FAFAF8] text-[#0A0A0A] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 1, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={controlledSpring}
          className="flex items-center space-x-3 mb-8 sm:mb-12"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C9971F]">
            01 / PERSPECTIVE
          </span>
          <div className="h-[1px] w-12 bg-[#0A0A0A]/20" />
        </motion.div>

        {/* 2-4 Sentences, Confident, Peer-to-Peer, Zero Padding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...controlledSpring, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h2
              id="intro-headline"
              className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-semibold tracking-[-0.02em] leading-[1.25] text-[#0A0A0A]"
            >
              Representation at the senior level is not advisory. It is executive leverage.
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ ...controlledSpring, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between pt-2 space-y-8"
          >
            <div className="space-y-6 text-base sm:text-lg text-[#0A0A0A]/85 leading-relaxed font-normal">
              <p>
                Nexa operates as the private office for elite footballers. We safeguard sporting value, engineer commercial leverage across transfer windows, and command institutional respect at the negotiation table.
              </p>
              <p className="text-sm sm:text-base text-[#0A0A0A]/60 font-light leading-relaxed">
                Our partners manage a concentrated portfolio of proven internationals, ensuring every contract cycle receives direct principal attention, algorithmic valuation modeling, and uncompromising confidentiality.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0A0A0A]/60">
                Operating Mandate
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9971F] flex items-center space-x-1">
                <span>Concentrated Roster</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Full-bleed, high-impact monochrome imagery showcasing senior football intensity */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 1, y: 30, scale: 1.04 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ ...controlledSpring, delay: 0.25, duration: 0.6 }}
          className="mt-16 sm:mt-24 relative overflow-hidden bg-black"
        >
          <div
            ref={imageWrapRef}
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden"
          >
            {/* Oversized + parallax-shifted so it drifts within the crop as the page scrolls, never exposing an edge */}
            <motion.div style={imageParallaxStyle} className="absolute -inset-y-[8%] inset-x-0">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=85"
                alt="Elite football player under stadium floodlights"
                loading="lazy"
                className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
            {/* Minimal atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

            {/* In-image quiet accreditation label */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-white flex items-center space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9971F]" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/90 font-medium">
                European Matchday Stature • UEFA Champions League Caliber
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
