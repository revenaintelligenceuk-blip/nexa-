import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const prefersReducedMotion = useReducedMotion();

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  return (
    <section
      id="services"
      className="relative w-full bg-[#0A0A0A] text-[#FAFAF8] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-16 border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#1C1C1C]">
          <div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={controlledSpring}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C9971F]">
                02 / CORE CAPABILITIES
              </span>
              <div className="h-[1px] w-12 bg-[#2A2A2A]" />
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 1, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.1 }}
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.03em] uppercase leading-[1.05]"
            >
              EXECUTIVE SERVICES.
            </motion.h2>
          </div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...controlledSpring, delay: 0.15 }}
            className="text-sm sm:text-base text-[#FAFAF8]/60 max-w-md mt-6 md:mt-0 font-light"
          >
            Delivered with absolute operational clarity. We manage every variable that dictates a professional player's earnings, legacy, and long-term security.
          </motion.p>
        </div>

        {/* Oversized Labeled Blocks (No busy icon cards, typography carries hierarchy) */}
        <div className="flex flex-col divide-y divide-[#1A1A1A]">
          {SERVICES.map((service, index) => {
            const isExpanded = activeServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-block-${service.id}`}
                initial={prefersReducedMotion ? false : { opacity: 1, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ ...controlledSpring, delay: index * 0.08 }}
                className="group py-8 sm:py-12 transition-colors duration-300"
              >
                <div
                  onClick={() => setActiveServiceId(isExpanded ? '' : service.id)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-6"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveServiceId(isExpanded ? '' : service.id);
                    }
                  }}
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline space-x-6 sm:space-x-12">
                    <span className="text-xl sm:text-2xl font-mono text-[#FAFAF8]/30 group-hover:text-[#C9971F] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] uppercase text-[#FAFAF8] group-hover:text-[#FAFAF8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C9971F] mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Scope badge + Toggle indicator */}
                  <div className="flex items-center justify-between md:justify-end space-x-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#FAFAF8]/65 group-hover:text-[#FAFAF8]/70 transition-colors">
                      {service.scope}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#222222] group-hover:border-[#C9971F] flex items-center justify-center transition-colors">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-[#C9971F]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#FAFAF8]/60 group-hover:text-[#C9971F] transition-colors" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`service-content-${service.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 sm:pt-12 pl-0 sm:pl-16 lg:pl-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Narrative description */}
                        <div className="lg:col-span-6 space-y-6">
                          <p className="text-base sm:text-lg text-[#FAFAF8]/85 leading-relaxed font-light">
                            {service.description}
                          </p>
                          <div>
                            <motion.button
                              whileTap={{ scale: 0.97 }}
                              onClick={onOpenInquiry}
                              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C9971F] hover:text-[#FAFAF8] transition-colors py-2 group"
                            >
                              <span>Discuss Mandate with Lead Agent</span>
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Deliverables / Scope Pillars */}
                        <div className="lg:col-span-6 bg-[#121212] border border-[#1E1E1E] p-6 sm:p-8">
                          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#FAFAF8]/65 mb-6">
                            Key Advisory Deliverables
                          </div>
                          <ul className="space-y-4">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-3 text-sm text-[#FAFAF8]/80 font-normal">
                                <div className="mt-1 w-3.5 h-3.5 rounded-full bg-[#C9971F]/20 border border-[#C9971F] flex items-center justify-center shrink-0">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9971F]" />
                                </div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
