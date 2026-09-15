import React from 'react';
import { LegalLayout } from './LegalLayout';
import { Link } from '../../router';

export const CookieNotice: React.FC = () => {
  return (
    <LegalLayout title="Cookie Notice" lastUpdated="14 September 2026">
      <section>
        <h2>What we use today</h2>
        <p>
          We do not currently use analytics, advertising, or tracking cookies. The only thing stored on
          your device is a small local flag remembering that you've dismissed the cookie banner — it
          isn't used to track you and isn't shared with anyone.
        </p>
      </section>

      <section>
        <h2>Google Fonts</h2>
        <p>
          This site loads typefaces from Google Fonts' servers, which may log your IP address as part
          of serving the font files. See our <Link to="/privacy">Privacy Policy</Link> for more detail.
        </p>
      </section>

      <section>
        <h2>If that changes</h2>
        <p>
          If we add analytics or advertising cookies in future, we'll update this notice and ask for
          your consent first via the cookie banner, in line with UK PECR and GDPR requirements.
        </p>
      </section>
    </LegalLayout>
  );
};
