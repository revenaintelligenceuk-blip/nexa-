import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';
import { Shield, Award, Briefcase, FileCheck, ArrowUpRight, X } from 'lucide-react';
import { useModalA11y } from '../hooks/useModalA11y';
import { MemberAvatar } from './MemberAvatar';

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const closeModal = () => setSelectedMember(null);
  const modalPanelRef = useModalA11y(!!selectedMember, closeModal);

  const prefersReducedMotion = useReducedMotion();

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  return (
    <section
      id="team"
      className="relative w-full bg-[#FAFAF8] text-[#0A0A0A] py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-16"
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
                03 / THE PARTNERSHIP
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
              SPECIALIST TEAM.
            </motion.h2>
          </div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...controlledSpring, delay: 0.15 }}
            className="text-sm sm:text-base text-[#0A0A0A]/60 max-w-md mt-6 md:mt-0 font-light"
          >
            Direct representation by proven principals. No junior associates, no outsourced negotiation. Every client communicates directly with senior decision-makers.
          </motion.p>
        </div>

        {/* Team Grid: Restrained cards (photo, name, role, one-line credibility marker) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              id={`team-card-${member.id}`}
              initial={prefersReducedMotion ? false : { opacity: 1, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ...controlledSpring, delay: index * 0.1 }}
              className="group flex flex-col bg-white border border-[#E5E5E2] hover:border-[#0A0A0A] transition-all duration-300"
            >
              {/* Photo when available, otherwise a monogram card */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1A1A1A]">
                <MemberAvatar
                  name={member.name}
                  image={member.image}
                  className="group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C9971F] hover:text-white"
                  title="View Full Credentials"
                  aria-label={`View full credentials for ${member.name}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] uppercase text-[#0A0A0A] group-hover:text-[#C9971F] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#C9971F] mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0A]/10">
                  <p className="text-xs text-[#0A0A0A]/70 leading-relaxed font-normal">
                    {member.credibility}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="pt-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0A0A0A]/80 hover:text-[#C9971F] flex items-center justify-between transition-colors w-full"
                >
                  <span>Full Mandate History</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Credential Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div
            id="team-modal-backdrop"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              ref={modalPanelRef}
              id="team-modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-title"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] text-[#FAFAF8] border border-[#262626] max-w-2xl w-full p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9971F]" />

              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-[#FAFAF8]/60 hover:text-white p-2"
                aria-label="Close credentials"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start mb-6">
                <div className="w-24 h-32 border border-[#2A2A2A] shrink-0 overflow-hidden">
                  <MemberAvatar name={selectedMember.name} image={selectedMember.image} compact />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold">
                    Executive Profile
                  </span>
                  <h3 id="team-modal-title" className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/70 mt-1">
                    {selectedMember.role}
                  </p>
                  <p className="text-xs font-mono text-[#C9971F] mt-2">
                    {selectedMember.specialization}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#FAFAF8]/80 leading-relaxed pt-4 border-t border-[#1F1F1F]">
                <p>{selectedMember.bio}</p>
                <div className="p-4 bg-[#141414] border border-[#222222]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9971F] font-semibold block mb-1">
                    Authoritative Credibility Record
                  </span>
                  <p className="text-xs text-[#FAFAF8]/90 font-medium">
                    {selectedMember.credibility}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 bg-[#FAFAF8] text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C9971F] hover:text-black transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
