import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { GLOBAL_REGIONS } from '../data';
import { Globe, MapPin, Building2, Check, ArrowRight } from 'lucide-react';

export const GlobalReachSection: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>(GLOBAL_REGIONS[0].id);

  const prefersReducedMotion = useReducedMotion();

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  const currentRegion = GLOBAL_REGIONS.find((r) => r.id === activeRegionId) || GLOBAL_REGIONS[0];

  return (
    <section
      id="global-reach"
      className="relative w-full bg-[#FAFAF8] text-[#0A0A0A] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#0A0A0A]/10">
          <div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={controlledSpring}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C9971F]">
                05 / INTERNATIONAL NETWORK
              </span>
              <div className="h-[1px] w-12 bg-[#0A0A0A]/20" />
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 1, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.1 }}
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.03em] uppercase leading-[1.05] text-[#0A0A0A]"
            >
              GLOBAL REACH.
            </motion.h2>
          </div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...controlledSpring, delay: 0.15 }}
            className="text-sm sm:text-base text-[#0A0A0A]/60 max-w-md mt-6 md:mt-0 font-light"
          >
            Direct operational presence across Europe's top five domestic championships and key sovereign transfer corridors. Senior players command borderless leverage.
          </motion.p>
        </div>

        {/* Interactive Global Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Region Tabs (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {GLOBAL_REGIONS.map((region, idx) => {
              const isSelected = activeRegionId === region.id;
              return (
                <motion.button
                  key={region.id}
                  id={`region-btn-${region.id}`}
                  onClick={() => setActiveRegionId(region.id)}
                  whileTap={{ scale: 0.98 }}
                  initial={prefersReducedMotion ? false : { opacity: 1, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...controlledSpring, delay: idx * 0.05 }}
                  className={`text-left p-5 transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-[#FAFAF8] border-[#0A0A0A] shadow-md'
                      : 'bg-white text-[#0A0A0A] border-[#E8E8E5] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-[#C9971F]' : 'text-[#0A0A0A]/65 group-hover:text-[#C9971F]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-base font-bold uppercase tracking-tight">
                        {region.region}
                      </div>
                      <div
                        className={`text-xs ${
                          isSelected ? 'text-[#FAFAF8]/60' : 'text-[#0A0A0A]/65'
                        }`}
                      >
                        {region.hub}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase font-semibold px-2 py-1 ${
                        isSelected ? 'bg-white/10 text-[#C9971F]' : 'bg-[#F2F2EE] text-[#0A0A0A]/70'
                      }`}
                    >
                      {region.status}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#C9971F] translate-x-1' : 'text-transparent'
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Region Detailed Intelligence (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A0A0A] text-[#FAFAF8] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border border-[#222222]">
            {/* Subtle background radar/grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentRegion.id}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="relative z-10 space-y-8"
              >
                <div className="flex items-center justify-between border-b border-[#222222] pb-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C9971F] block mb-1">
                      Market Operational Center
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#FAFAF8]">
                      {currentRegion.region}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#FAFAF8]/50">
                    <MapPin className="w-4 h-4 text-[#C9971F]" />
                    <span>{currentRegion.hub}</span>
                  </div>
                </div>

                {/* Focus statement */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/65 font-semibold">
                    Strategic Mandate & Clout
                  </span>
                  <p className="text-base sm:text-lg text-[#FAFAF8]/90 font-light leading-relaxed">
                    {currentRegion.keyFocus}
                  </p>
                </div>

                {/* Covered Competitions */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/65 font-semibold block mb-3">
                    Core Championships & Regulatory Coverage
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentRegion.leagues.map((league, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#171717] border border-[#282828] text-xs font-semibold uppercase tracking-wider text-[#FAFAF8]/90"
                      >
                        {league}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 bg-[#171717] border border-[#282828] text-xs font-semibold uppercase tracking-wider text-[#C9971F]">
                      UEFA Registered
                    </span>
                    <span className="px-3 py-1.5 bg-[#171717] border border-[#282828] text-xs font-semibold uppercase tracking-wider text-[#C9971F]">
                      FIFA Clearing House
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom accreditation note */}
            <div className="relative z-10 pt-8 mt-8 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#FAFAF8]/50">
              <span className="tracking-[0.15em] uppercase text-[11px]">
                Direct Sporting Director & Chief Football Officer Access
              </span>
              <span className="text-[#C9971F] font-mono font-bold text-xs">
                VERIFIED OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
