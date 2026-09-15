import React from 'react';
import { LegalLayout } from './LegalLayout';
import { Link } from '../../router';

export const TermsOfUse: React.FC = () => {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="14 September 2026">
      <section>
        <h2>Acceptance of these terms</h2>
        <p>
          By using this website, you agree to these Terms of Use. If you don't agree, please don't use
          the site.
        </p>
      </section>

      <section>
        <h2>No representation relationship is created by using this site</h2>
        <p>
          This website is informational. Browsing it, or submitting the "Player Liaison" inquiry form,
          is a preliminary, non-binding expression of interest only. It does <strong>not</strong>{' '}
          create a representation relationship, an agency mandate, a fiduciary duty, or any
          confidentiality obligation on our part. Those only arise once both parties sign a separate
          written representation agreement. See our{' '}
          <Link to="/client-discretion-policy">Client Discretion Policy</Link> for how confidentiality
          works once that relationship exists.
        </p>
      </section>

      <section>
        <h2>No professional advice</h2>
        <p>
          Content on this site is general marketing information about our services. It is not legal,
          financial, contractual, or career advice, and shouldn't be relied on as such.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Nexa Sports Management name, logo, and all site content are owned by Nexa Sports
          Management Ltd or our licensors. You may not reproduce, distribute, or create derivative
          works from any part of this site without our prior written consent.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You agree not to use this site to:</p>
        <ul>
          <li>Break any applicable law or regulation</li>
          <li>Scrape, mine, or systematically extract data from the site</li>
          <li>Attempt to gain unauthorised access to our systems</li>
          <li>Submit false, misleading, or malicious content through the inquiry form</li>
        </ul>
      </section>

      <section>
        <h2>Our regulatory status</h2>
        <p>
          See our <Link to="/regulatory-disclosures">Regulatory Disclosures</Link> page for the
          professional registrations we hold and how to verify them.
        </p>
      </section>

      <section>
        <h2>Disclaimer and limitation of liability</h2>
        <p>
          This site is provided "as is" without warranties of any kind, express or implied, including
          as to accuracy or availability. To the fullest extent permitted by law, Nexa Sports
          Management Ltd is not liable for any indirect, incidental, or consequential loss arising from
          your use of this site.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The "last updated" date above reflects the most
          recent revision. Continued use of the site after changes take effect constitutes acceptance
          of the revised terms.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of England and Wales, and any dispute relating to them
          is subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </section>
    </LegalLayout>
  );
};
