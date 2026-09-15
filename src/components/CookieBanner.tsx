import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { Link } from '../router';

const STORAGE_KEY = 'nexa_cookie_ack';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore — private browsing or blocked storage; banner will just reshow next visit
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0D0D0D] border-t border-[#242424] px-6 py-5 sm:py-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="flex items-center space-x-3 flex-1">
          <Cookie className="w-4 h-4 text-[#C9971F] flex-shrink-0" />
          <p className="text-xs text-[#FAFAF8]/70 font-light leading-relaxed">
            We don't use tracking or advertising cookies — only what's needed to run this site. See our{' '}
            <Link to="/cookies" className="text-[#C9971F] underline underline-offset-2">
              Cookie Notice
            </Link>{' '}
            for detail.
          </p>
        </div>
        <button
          onClick={dismiss}
          className="flex-shrink-0 px-5 py-2 bg-[#FAFAF8] hover:bg-[#C9971F] text-black text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
