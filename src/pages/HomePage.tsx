import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CompanyIntroSection } from '../components/CompanyIntroSection';
import { GlobalReachSection } from '../components/GlobalReachSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  useDocumentHead({
    title: 'Nexa Sports Management',
    description:
      'Elite football management representing established professional players in contract negotiation, global commercial partnerships, and career strategy.',
    path: '/',
  });

  return (
    <main id="main-content">
      <HeroSection onOpenInquiry={onOpenInquiry} />
      <CompanyIntroSection />
      {/* TrackRecordSection removed for now — its stats (£520M+ negotiated, 94%
          uplift, 100% discretion) were fabricated placeholder figures. Re-add
          once real, defensible numbers exist (component + data untouched). */}
      <GlobalReachSection />
    </main>
  );
};
