import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

interface ServicesPageProps {
  onOpenInquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry }) => {
  useDocumentHead({
    title: 'Services',
    description:
      'Contract negotiation, brand and endorsement partnerships, career strategy, and media & reputation management for senior professional footballers.',
    path: '/services',
  });

  return (
    <main id="main-content">
      <ServicesSection onOpenInquiry={onOpenInquiry} />
    </main>
  );
};
