import React, { useState } from 'react';
import { IntroSequence } from './components/IntroSequence';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CompanyIntroSection } from './components/CompanyIntroSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { GlobalReachSection } from './components/GlobalReachSection';
import { PlayerCTASection } from './components/PlayerCTASection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfUse } from './components/legal/TermsOfUse';
import { RegulatoryDisclosures } from './components/legal/RegulatoryDisclosures';
import { ClientDiscretionPolicy } from './components/legal/ClientDiscretionPolicy';
import { CookieNotice } from './components/legal/CookieNotice';
import { useRouter } from './router';
import { useDocumentHead } from './hooks/useDocumentHead';

const HOME_TITLE = 'Nexa Sports Management';
const HOME_DESCRIPTION =
  'Elite football management representing established professional players in contract negotiation, global commercial partnerships, and career strategy.';

const LEGAL_ROUTES: Record<string, React.FC> = {
  '/privacy': PrivacyPolicy,
  '/terms': TermsOfUse,
  '/regulatory-disclosures': RegulatoryDisclosures,
  '/client-discretion-policy': ClientDiscretionPolicy,
  '/cookies': CookieNotice,
};

export default function App() {
  const { path } = useRouter();
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Any path that isn't a recognized legal route renders the homepage below
  // (a deliberate soft-catch-all for typos/deep links) — canonicalize all of
  // those to "/" so search engines never see a wrong-path duplicate of it.
  const isLegalPage = path in LEGAL_ROUTES;
  useDocumentHead({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: '/',
    enabled: !isLegalPage,
  });

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  const LegalPage = LEGAL_ROUTES[path];
  if (LegalPage) {
    return (
      <>
        <LegalPage />
        <CookieBanner />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAF8] antialiased selection:bg-[#C9971F] selection:text-black">
      {/* One-time cinematic opening beat — logo materializes, then dissolves to the hero */}
      <IntroSequence />

      {/* Fixed Translucent Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <a
        href="#main-content"
        className="fixed top-2 left-2 z-[200] -translate-y-24 focus:translate-y-0 transition-transform bg-[#FAFAF8] text-black text-xs font-semibold uppercase tracking-[0.2em] px-4 py-3"
      >
        Skip to content
      </a>

      {/* 1. Opening Statement — Full Viewport, Oversized Headline */}
      <main id="main-content">
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* 2. Company Introduction — 2-4 Sentences, Confident, Minimal Imagery */}
        <CompanyIntroSection />

        {/* 3. Key Services — Oversized Labeled Blocks */}
        <ServicesSection onOpenInquiry={handleOpenInquiry} />

        {/* 4. Specialist Performance Team — Restrained Team Cards */}
        <TeamSection />

        {/* 5. Combined Experience & Track Record — Eased Spring Numbers */}
        <TrackRecordSection />

        {/* 6. International Relationships & Market Reach */}
        <GlobalReachSection />

        {/* 7. Call to Action for Players — Direct, Singular, Confident */}
        <PlayerCTASection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookie Notice — no tracking cookies today, but shown for transparency */}
      <CookieBanner />

      {/* Confidential Player Liaison Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
      />
    </div>
  );
}
