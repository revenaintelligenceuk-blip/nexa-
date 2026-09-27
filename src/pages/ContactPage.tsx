import React from 'react';
import { PlayerCTASection } from '../components/PlayerCTASection';
import { useDocumentHead } from '../hooks/useDocumentHead';

interface ContactPageProps {
  onOpenInquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenInquiry }) => {
  useDocumentHead({
    title: 'Contact',
    description:
      'Start a confidential conversation with Nexa Sports Management about representation, contract negotiation, or commercial partnerships.',
    path: '/contact',
  });

  return (
    <main id="main-content" className="pt-20 sm:pt-24">
      <PlayerCTASection onOpenInquiry={onOpenInquiry} />
    </main>
  );
};
