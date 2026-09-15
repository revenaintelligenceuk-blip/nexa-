import React from 'react';
import { LegalLayout } from './LegalLayout';
import { Link } from '../../router';

export const ClientDiscretionPolicy: React.FC = () => {
  return (
    <LegalLayout title="Client Discretion Policy" lastUpdated="14 September 2026">
      <section>
        <h2>Scope</h2>
        <p>
          This policy describes how we handle confidentiality for <strong>signed clients</strong> under
          an active representation mandate. It's separate from our{' '}
          <Link to="/privacy">Privacy Policy</Link>, which covers general website data, and from the
          preliminary inquiries described in our <Link to="/terms">Terms of Use</Link>.
        </p>
      </section>

      <section>
        <h2>When confidentiality applies</h2>
        <p>
          Submitting an unsolicited inquiry through this website does not by itself create any
          confidentiality or non-disclosure obligation. A binding confidentiality undertaking — whether
          a standalone NDA or clauses within a representation agreement — is put in place once both
          parties expressly agree to it in writing, typically as part of onboarding a new client.
        </p>
      </section>

      <section>
        <h2>Our commitments to signed clients</h2>
        <p>Once a representation mandate is in place, we commit to:</p>
        <ul>
          <li>Restricting internal access to a client's contract, commercial, and career information to the individuals directly handling the mandate</li>
          <li>Not disclosing a client's identity, contract terms, or transfer discussions to any third party without their consent, except where required by law or the rules of a governing football body</li>
          <li>Exercising discretion in all media and public-facing dealings on a client's behalf</li>
        </ul>
      </section>

      <section>
        <h2>Exceptions</h2>
        <p>
          We may disclose client information where required by law, by a court or regulator, or by the
          rules of FIFA, the FA, RFEF, FIGC, or another governing football body under whose
          jurisdiction a matter falls.
        </p>
      </section>
    </LegalLayout>
  );
};
