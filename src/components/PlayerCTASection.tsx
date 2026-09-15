import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { NexaLogo } from './NexaLogo';
import { ShieldCheck, ArrowRight, Lock, Check, Send } from 'lucide-react';

interface PlayerCTASectionProps {
  onOpenInquiry: () => void;
}

export const PlayerCTASection: React.FC<PlayerCTASectionProps> = ({ onOpenInquiry }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    roleOrRep: 'Player / Authorized Counsel',
    currentClubOrLeague: '',
    contactChannel: '',
    notes: '',
    website: '', // honeypot — real visitors never see or fill this field
  });

  const prefersReducedMotion = useReducedMotion();

  const controlledSpring = {
    type: 'spring',
    bounce: 0,
    duration: 0.4,
  } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // honeypot tripped — silently drop
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          club: formData.currentClubOrLeague,
          contact: formData.contactChannel,
          message: formData.notes,
          website: formData.website,
          source: 'cta-section',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong sending this — please try again, or reach us directly at the details on the left.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0A0A0A] text-[#FAFAF8] py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-16 border-t border-[#1C1C1C] overflow-hidden"
    >
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Marker */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={controlledSpring}
          className="flex items-center space-x-3 mb-8"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C9971F]">
            06 / CONFIDENTIAL ENGAGEMENT
          </span>
          <div className="h-[1px] w-12 bg-[#262626]" />
        </motion.div>

        {/* Singular, Confident Closing Statement (Not a generic contact wall) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Authoritative Closing Copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 1, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.1 }}
              className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold tracking-[-0.04em] uppercase leading-[0.98] text-[#FAFAF8]"
            >
              YOUR NEXT CONTRACT DEFINES YOUR LEGACY.
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.15 }}
              className="text-base sm:text-xl text-[#FAFAF8]/75 font-light leading-relaxed max-w-xl"
            >
              Senior representation begins with a discrete, peer-to-peer discussion. We evaluate current contractual positioning, upcoming transfer windows, and commercial opportunities under strict non-disclosure.
            </motion.p>

            {/* Direct Discreet Contact Channels */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...controlledSpring, delay: 0.2 }}
              className="pt-6 space-y-4 border-t border-[#1F1F1F]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#121212] border border-[#222222]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold block mb-1">
                    Direct Partner Line (Signal / WhatsApp)
                  </span>
                  <span className="text-sm font-mono text-[#FAFAF8] block">
                    +44 (0) 20 7946 0882
                  </span>
                  <span className="text-[11px] text-[#FAFAF8]/65 mt-1 block">
                    Monitored 24/7 by Senior Partners
                  </span>
                </div>

                <div className="p-4 bg-[#121212] border border-[#222222]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold block mb-1">
                    Private Representation Desk
                  </span>
                  <span className="text-sm font-mono text-[#FAFAF8] block">
                    liaison@nexasports.com
                  </span>
                  <span className="text-[11px] text-[#FAFAF8]/65 mt-1 block">
                    Sent over an encrypted (HTTPS) connection
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-[#FAFAF8]/50 pt-2">
                <Lock className="w-3.5 h-3.5 text-[#C9971F]" />
                <span>A confidentiality agreement can be put in place before any detailed discussion, on request.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Short, Deliberate Player Liaison Form */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 1, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...controlledSpring, delay: 0.25 }}
            className="lg:col-span-5 bg-[#141414] border border-[#242424] p-8 sm:p-10 relative"
          >
            <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C9971F] block">
                  Private Liaison
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#FAFAF8]">
                  Initiate Dialogue
                </h3>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#C9971F]" />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9971F]/10 border border-[#C9971F] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#C9971F]" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight text-white">
                  Mandate Inquiry Received
                </h4>
                <p className="text-xs text-[#FAFAF8]/70 leading-relaxed font-light max-w-xs mx-auto">
                  A Managing Partner will reach out via your designated contact channel within 3 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs tracking-[0.2em] uppercase text-[#C9971F] underline pt-2"
                >
                  Submit additional details
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — hidden from sighted users and screen readers, bots fill every field */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                />

                <div>
                  <label
                    htmlFor="player-name-input"
                    className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1.5"
                  >
                    Player or Representative Name
                  </label>
                  <input
                    id="player-name-input"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Senior International / Legal Counsel"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#C9971F] text-sm text-[#FAFAF8] px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="player-club-input"
                    className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1.5"
                  >
                    Current Club / Domestic Championship
                  </label>
                  <input
                    id="player-club-input"
                    required
                    type="text"
                    value={formData.currentClubOrLeague}
                    onChange={(e) => setFormData({ ...formData, currentClubOrLeague: e.target.value })}
                    placeholder="e.g. Premier League / Serie A"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#C9971F] text-sm text-[#FAFAF8] px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="player-contact-input"
                    className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1.5"
                  >
                    Preferred Confidential Contact (Signal / WhatsApp / Email)
                  </label>
                  <input
                    id="player-contact-input"
                    required
                    type="text"
                    value={formData.contactChannel}
                    onChange={(e) => setFormData({ ...formData, contactChannel: e.target.value })}
                    placeholder="Direct mobile number or verified email"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#C9971F] text-sm text-[#FAFAF8] px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="player-notes-input"
                    className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1.5"
                  >
                    Objective Summary (Optional)
                  </label>
                  <textarea
                    id="player-notes-input"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Upcoming contract cycle, transfer window timeline, or commercial rights query."
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#C9971F] text-sm text-[#FAFAF8] px-4 py-2.5 outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 leading-relaxed" role="alert">
                    {error}
                  </p>
                )}

                <motion.button
                  id="submit-inquiry-btn"
                  type="submit"
                  disabled={submitting}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-[#FAFAF8] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>{submitting ? 'Sending…' : 'Request Private Consultation'}</span>
                  {!submitting && (
                    <ArrowRight className="w-4 h-4 text-[#C9971F] group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
