import React from 'react';

// Loud, unmissable marker for facts that must be filled in with real company
// details before this site goes live (registration number, registered
// office address, privacy contact email, etc). Intentionally ugly so nobody
// ships it by accident.
export const LegalPlaceholder: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-red-950/60 text-red-300 border border-red-800/60 px-1.5 py-0.5 mx-0.5 font-mono text-[0.85em] rounded-sm">
    {children}
  </span>
);
