import React from 'react';
import { NexaLogo } from './NexaLogo';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { Link } from '../router';
import { LegalPlaceholder } from './legal/LegalPlaceholder';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] text-[#FAFAF8] border-t border-[#171717] py-16 sm:py-24 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Upper Level: Brand & Worldwide Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-[#1A1A1A]">
          <div className="md:col-span-5 space-y-6">
            <NexaLogo size="md" variant="dark" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-[#FAFAF8]/60 max-w-sm leading-relaxed font-light">
              Nexa Sports Management provides executive-level representation, contract architecture, and commercial rights governance exclusively for senior professional football players.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold block mb-4">
                Primary Hubs
              </span>
              <ul className="space-y-2.5 text-[#FAFAF8]/70 font-light">
                <li>London — Mayfair</li>
                <li>Madrid — Salamanca</li>
                <li>Milan — Montenapoleone</li>
                <li>Munich — Maxvorstadt</li>
                <li>Riyadh — King Fahd Dist.</li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold block mb-4">
                Core Scope
              </span>
              <ul className="space-y-2.5 text-[#FAFAF8]/70 font-light">
                <li>Senior Contract Negotiation</li>
                <li>Global Brand Franchises</li>
                <li>Tactical Career Trajectory</li>
                <li>Reputation & Crisis Counsel</li>
                <li>Post-Career Sovereign Equity</li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9971F] font-bold block mb-4">
                Regulatory Standards
              </span>
              <ul className="space-y-2.5 text-[#FAFAF8]/70 font-light">
                <li>FIFA Football Agent Reg. (FFAR)</li>
                <li>The FA Registered Intermediary</li>
                <li>RFEF Certified Counsel</li>
                <li>FIGC Registered Agent</li>
                <li>Strict Bilateral Discretion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Level: Legal, Disclaimers, and Top Scroll */}
        <div className="flex flex-col gap-6 text-[11px] text-[#FAFAF8]/65">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2 text-center sm:text-left">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9971F] flex-shrink-0" />
              <span>
                © {new Date().getFullYear()} Nexa Sports Management Ltd. All rights reserved. Confidential representation.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/privacy" className="hover:text-[#C9971F] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#C9971F] transition-colors">Terms of Use</Link>
              <Link to="/regulatory-disclosures" className="hover:text-[#C9971F] transition-colors">Regulatory Disclosures</Link>
              <Link to="/client-discretion-policy" className="hover:text-[#C9971F] transition-colors">Client Discretion Policy</Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1.5 text-[#FAFAF8]/60 hover:text-[#C9971F] transition-colors uppercase tracking-[0.2em]"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-center sm:text-left text-[10px] leading-relaxed">
            Nexa Sports Management Ltd is registered in England and Wales under company number{' '}
            <LegalPlaceholder>COMPANY NUMBER — TBC</LegalPlaceholder>. Registered office:{' '}
            <LegalPlaceholder>REGISTERED OFFICE ADDRESS — TBC</LegalPlaceholder>.
          </p>
        </div>
      </div>
    </footer>
  );
};
