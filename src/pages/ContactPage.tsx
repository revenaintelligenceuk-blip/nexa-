import React from 'react';
import { PlayerCTASection } from '../components/PlayerCTASection';

interface ContactPageProps {
  onOpenInquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiry }) => (
  <main className="pt-20 sm:pt-24">
    <PlayerCTASection onOpenInquiry={onOpenInquiry} />
  </main>
);
