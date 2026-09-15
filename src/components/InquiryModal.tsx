import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Lock, Check, ArrowRight } from 'lucide-react';
import { NexaLogo } from './NexaLogo';
import { Link } from '../router';
import { useModalA11y } from '../hooks/useModalA11y';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    role: 'Senior Player',
    club: '',
    contact: '',
    message: '',
    website: '', // honeypot — real visitors never see or fill this field
  });

  const panelRef = useModalA11y(isOpen, onClose);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot tripped — silently drop
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          club: form.club,
          contact: form.contact,
          message: form.message,
          website: form.website,
          source: 'hero-modal',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong sending this — please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div
        id="inquiry-modal-backdrop"
        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          ref={panelRef}
          id="inquiry-modal-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-modal-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0D0D0D] border border-[#242424] max-w-lg w-full p-8 sm:p-10 relative text-[#FAFAF8] shadow-2xl"
        >
          {/* Subtle gold top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9971F]" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#FAFAF8]/50 hover:text-white p-2 transition-colors"
            aria-label="Close dialogue"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <NexaLogo size="sm" variant="dark" showSubtitle={false} className="mb-4" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C9971F] block">
              Confidential Player Representation Desk
            </span>
            <h3 id="inquiry-modal-title" className="text-2xl font-bold uppercase tracking-tight text-white mt-1">
              Direct Senior Dialogue
            </h3>
            <p className="text-xs text-[#FAFAF8]/60 mt-2 font-light">
              Sent over an encrypted (HTTPS) connection and routed directly to Managing Partners.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C9971F]/20 border border-[#C9971F] mx-auto flex items-center justify-center">
                <Check className="w-6 h-6 text-[#C9971F]" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tight text-white">
                Inquiry Received
              </h4>
              <p className="text-xs text-[#FAFAF8]/70 leading-relaxed font-light">
                A Partner will contact you via your selected channel within 3 hours. A confidentiality
                agreement can be put in place before any detailed discussion, on request.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#FAFAF8] text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#C9971F] transition-colors"
              >
                Close Dialogue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from sighted users and screen readers, bots fill every field */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
              />

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1">
                  Name / Title
                </label>
                <input
                  required
                  type="text"
                  placeholder="Senior Pro / Designated Counsel"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#050505] border border-[#262626] focus:border-[#C9971F] text-xs text-[#FAFAF8] px-3.5 py-2.5 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1">
                    Current Club / Tier
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Top Flight League"
                    value={form.club}
                    onChange={(e) => setForm({ ...form, club: e.target.value })}
                    className="w-full bg-[#050505] border border-[#262626] focus:border-[#C9971F] text-xs text-[#FAFAF8] px-3.5 py-2.5 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1">
                    Direct Contact
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Signal / Mobile / Email"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full bg-[#050505] border border-[#262626] focus:border-[#C9971F] text-xs text-[#FAFAF8] px-3.5 py-2.5 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#FAFAF8]/60 font-semibold mb-1">
                  Scope of Representation
                </label>
                <textarea
                  rows={2}
                  placeholder="Contract expiration window, international transfer corridor, or commercial portfolio restructuring."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#050505] border border-[#262626] focus:border-[#C9971F] text-xs text-[#FAFAF8] px-3.5 py-2.5 outline-none resize-none"
                />
              </div>

              <div className="flex items-center space-x-2 text-[10px] text-[#FAFAF8]/50 py-1">
                <Lock className="w-3 h-3 text-[#C9971F]" />
                <span>
                  Sent over an encrypted connection. By submitting, you agree to our{' '}
                  <Link to="/privacy" className="underline underline-offset-2 hover:text-[#C9971F]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>

              {error && (
                <p className="text-xs text-red-400 leading-relaxed" role="alert">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 bg-[#FAFAF8] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center space-x-2"
              >
                <span>{submitting ? 'Sending…' : 'Initiate Private Mandate Review'}</span>
                {!submitting && <ArrowRight className="w-3.5 h-3.5 text-[#C9971F]" />}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
