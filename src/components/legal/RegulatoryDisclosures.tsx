import React from 'react';
import { LegalLayout } from './LegalLayout';
import { LegalPlaceholder } from './LegalPlaceholder';

export const RegulatoryDisclosures: React.FC = () => {
  return (
    <LegalLayout title="Regulatory Disclosures" lastUpdated="14 September 2026">
      <section>
        <h2>Our registrations</h2>
        <p>
          Nexa Sports Management Ltd operates under the following football-agent registrations and
          certifications. Registration/license numbers are available on request — contact{' '}
          <LegalPlaceholder>PRIVACY CONTACT EMAIL — TBC</LegalPlaceholder> to verify any of the below.
        </p>
        <ul>
          <li>FIFA Football Agent Registration (FFAR) — Registered</li>
          <li>The FA Registered Intermediary — Registered</li>
          <li>RFEF (Real Federación Española de Fútbol) Certified Counsel — Registered</li>
          <li>FIGC (Federazione Italiana Giuoco Calcio) Registered Agent — Registered</li>
        </ul>
      </section>

      <section>
        <h2>Independent verification</h2>
        <p>
          You can independently verify football-agent registrations directly with the relevant
          governing body — FIFA, the FA, RFEF, or FIGC — via their official agent registers, rather
          than relying solely on this page.
        </p>
      </section>

      <section>
        <h2>Regulatory conduct</h2>
        <p>
          We conduct client representation in accordance with the FIFA Football Agent Regulations
          (FFAR) and applicable national association rules, including disclosure of any dual
          representation and adherence to applicable service-fee limits. Specific terms for any
          individual engagement are set out in the relevant signed representation agreement, not on
          this website.
        </p>
      </section>

      <section>
        <h2>Complaints</h2>
        <p>
          If you have a complaint about our conduct as a registered intermediary/agent, contact us
          directly at <LegalPlaceholder>PRIVACY CONTACT EMAIL — TBC</LegalPlaceholder>. You may also
          escalate a complaint to the relevant registering body listed above.
        </p>
      </section>
    </LegalLayout>
  );
};
