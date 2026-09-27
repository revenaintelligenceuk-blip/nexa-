import React, { useState } from 'react';
import { IntroSequence } from './components/IntroSequence';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfUse } from './components/legal/TermsOfUse';
import { RegulatoryDisclosures } from './components/legal/RegulatoryDisclosures';
import { ClientDiscretionPolicy } from './components/legal/ClientDiscretionPolicy';
import { CookieNotice } from './components/legal/CookieNotice';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { useRouter } from './router';

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

  const MAIN_ROUTES: Record<string, React.FC> = {
    '/': () => <HomePage onOpenInquiry={handleOpenInquiry} />,
    '/services': () => <ServicesPage onOpenInquiry={handleOpenInquiry} />,
    '/team': () => <TeamPage />,
    '/contact': () => <ContactPage onOpenInquiry={handleOpenInquiry} />,
  };

  const PageContent = MAIN_ROUTES[path] || MAIN_ROUTES['/'];

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

      <PageContent />

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
