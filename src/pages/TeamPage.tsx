import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { useDocumentHead } from '../hooks/useDocumentHead';

export const TeamPage: React.FC = () => {
  useDocumentHead({
    title: 'Our Team',
    description:
      "The specialist negotiators, legal counsel, and commercial partners behind Nexa Sports Management's player representation.",
    path: '/team',
  });

  return (
    <main id="main-content" className="pt-20 sm:pt-24">
      <TeamSection />
    </main>
  );
};
