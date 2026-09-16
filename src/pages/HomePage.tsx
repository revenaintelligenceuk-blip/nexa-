import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CompanyIntroSection } from '../components/CompanyIntroSection';
import { TrackRecordSection } from '../components/TrackRecordSection';
import { GlobalReachSection } from '../components/GlobalReachSection';

interface HomePageProps {
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => (
  <main>
    <HeroSection onOpenInquiry={onOpenInquiry} />
    <CompanyIntroSection />
    <TrackRecordSection />
    <GlobalReachSection />
  </main>
);
