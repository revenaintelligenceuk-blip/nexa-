import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TRACK_RECORD_METRICS, CREDIBILITY_PILLARS } from '../data';
import { AnimatedCounter } from './AnimatedCounter';
import { CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const TrackRecordSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  const dealHighlights = [
    {
      label: 'Premier League Free Transfer Restructuring',
      value: '£64.5M Total Value',
      category: 'Contract Architecture',
      detail: 'Record sign-on fee and image rights split structured across 5-season term.',
    },
    {
      label: 'Champions League Buyout Clause Trigger',
      value: '€58.0M Valuation',
      category: 'Transfer Execution',
      detail: 'Strategic exit execution during summer transfer window with zero sporting friction.',
    },
    {
      label: 'Global Technical Boot Franchise',
      value: 'Multi-Year Landmark',
      category: 'Commercial Partnership',
      detail: 'Tier-1 global sportswear partnership covering signature footwear and international campaigns.',
    },
    {
      label: 'Continental Mid-Career Extension',
      value: '+118% Wage Escalation',
      category: 'Renegotiation Leverage',
      detail: 'Full restructuring of base salary and performance clauses following trophy-winning campaign.',
    },
  ];

  return (
    <section
      id="track-record"
      className="relative w-full bg-[#0A0A0A] text-[#FAFAF8] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-16 border-t border-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
                04 / PROVEN TRACK RECORD
              </span>
              <div className="h-[1px] w-12 bg-[#2A2A2A]" />
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 1, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold tracking-[-0.04em] uppercase leading-[0.96]"
            >
              RECORD IN NUMBERS.
            </motion.h2>
          </div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...controlledSpring, delay: 0.15 }}
            className="text-sm sm:text-base text-[#FAFAF8]/60 max-w-md mt-6 md:mt-0 font-light"
          >
            Senior representation measured in verifiable outcomes. We provide the institutional leverage that turns athletic momentum into generational equity.
          </motion.p>
        </div>

        {/* Eased Spring Count-Up Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {TRACK_RECORD_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              id={`metric-${metric.id}`}
              initial={prefersReducedMotion ? false : { opacity: 1, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ...controlledSpring, delay: idx * 0.08 }}
              className="p-8 bg-[#111111] border border-[#1E1E1E] hover:border-[#C9971F]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C9971F] mb-4">
                  Verified Metric
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#FAFAF8] mb-3">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={1500}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#FAFAF8]/90 mb-2">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-[#FAFAF8]/50 leading-relaxed font-light mt-4 pt-4 border-t border-[#1C1C1C]">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Plain & Specific Advisory Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8">
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C9971F]">
              Transaction Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#FAFAF8]">
              Precision Deal Structuring for Senior Professionals
            </h3>
            <p className="text-sm text-[#FAFAF8]/70 leading-relaxed font-light">
              We do not rely on standard boilerplate agreements. Every contract negotiated by our team includes custom covenants guarding against manager turnover, tactical shifts, and sudden regulatory amendments.
            </p>

            <div className="space-y-3 pt-2">
              {CREDIBILITY_PILLARS.map((pillar, index) => (
                <div key={index} className="flex items-start space-x-3 text-xs text-[#FAFAF8]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C9971F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">{pillar.title}</span>
                    <span className="text-[#FAFAF8]/50 text-[11px]">{pillar.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dealHighlights.map((deal, idx) => (
              <motion.div
                key={idx}
                initial={prefersReducedMotion ? false : { opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...controlledSpring, delay: idx * 0.08 }}
                className="p-6 bg-[#141414] border border-[#222222] hover:border-[#333333] transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#C9971F] mb-3">
                  <span className="uppercase tracking-wider">{deal.category}</span>
                  <span className="font-semibold">{deal.value}</span>
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  {deal.label}
                </h4>
                <p className="text-xs text-[#FAFAF8]/60 font-light leading-relaxed">
                  {deal.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
