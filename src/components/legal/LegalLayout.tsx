import React from 'react';
import { NexaLogo } from '../NexaLogo';
import { Link } from '../../router';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAF8]">
      <header className="max-w-3xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 pb-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/60 hover:text-[#C9971F] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </Link>
        <NexaLogo size="sm" variant="dark" showSubtitle={true} />
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-2">{title}</h1>
        <p className="text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/65 mb-12">Last updated: {lastUpdated}</p>

        <div className="space-y-10 text-sm leading-relaxed text-[#FAFAF8]/80 font-light [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-white [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-3 [&_a]:text-[#C9971F] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-[#FAFAF8] [&_strong]:font-semibold">
          {children}
        </div>
      </main>
    </div>
  );
};
