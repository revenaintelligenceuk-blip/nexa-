import React from 'react';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onOpenInquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry }) => (
  <main className="pt-20 sm:pt-24">
    <ServicesSection onOpenInquiry={onOpenInquiry} />
  </main>
);
