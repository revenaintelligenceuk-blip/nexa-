import { ServiceItem, TeamMember, MetricItem, MarketRegion } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'contract-negotiation',
    number: '01',
    title: 'Contract Negotiation',
    subtitle: 'Valuation & Leveraged Club Agreements',
    description:
      'We engineer maximum contractual leverage for senior players. Our negotiators sit across Premier League, La Liga, and Champions League sporting directors with comprehensive algorithmic wage benchmarking, buyout clause calibration, and tax-efficient compensation architectures.',
    deliverables: [
      'Multi-Year Base Wage & Performance Bonus Optimization',
      'Strategic Release Clauses & Exit Mechanism Structuring',
      'Image Rights Separation & Cross-Border Tax Architecture',
      'Contract Extension Timing & Leverage Staging',
    ],
    scope: 'Senior Club & Federation Contracts',
  },
  {
    id: 'brand-deals',
    number: '02',
    title: 'Brand & Endorsements',
    subtitle: 'Global Commercial & Luxury Partnerships',
    description:
      'We do not accept passive sponsorship solicitations. We curate high-yield, long-term commercial alliances with global technical apparel brands, luxury horology, automotive houses, and tier-one consumer entities that elevate personal equity without compromising matchday focus.',
    deliverables: [
      'Global Technical Boot & Apparel Footwear Franchises',
      'Exclusive Luxury, Horology & Lifestyle Ambassadorships',
      'Equity & Venture Co-Investment Placements',
      'Commercial Category Exclusivity Protection',
    ],
    scope: 'Global Tier-1 Commercial Endorsements',
  },
  {
    id: 'career-strategy',
    number: '03',
    title: 'Career Strategy',
    subtitle: 'Tactical Trajectory & Post-Playing Legacy',
    description:
      'A player’s career spans a finite window of peak market value. We formulate multi-season trajectories: analyzing tactical club fit, manager philosophies, international tournament cycles, and succession pathways into post-career sovereign equity and club governance.',
    deliverables: [
      'Tactical & Managerial Compatibility Scouting Analysis',
      'Domestic vs. Continental Transfer Opportunity Modeling',
      'Peak Valuation Timing & Window Sequencing',
      'Family Office & Post-Career Wealth Preservation',
    ],
    scope: 'Multi-Season Trajectory Architecture',
  },
  {
    id: 'media-pr',
    number: '04',
    title: 'Media & Public Relations',
    subtitle: 'Reputation Governance & Crisis Safeguarding',
    description:
      'In an era of relentless scrutiny, we safeguard our players’ public and commercial stature. From tier-one broadcast interviews and documentary feature rights to discrete crisis management during high-stakes transfer windows, your voice is protected and deliberate.',
    deliverables: [
      'Top-Tier Global Media Profiling & Broadcast Access',
      '24/7 Rapid-Response Crisis & Transfer Speculation Safeguard',
      'Controlled Digital Footprint & Narrative Ownership',
      'High-Profile Documentary & Intellectual Property Rights',
    ],
    scope: 'Elite Reputation & Narrative Control',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'julian-vance',
    name: 'Julian Vance',
    role: 'Managing Director & Licensed FIFA Agent',
    credibility: '22 years at the summit of European football negotiations. Overseen 140+ top-flight transactions.',
    bio: 'Former senior football operations executive with deep, direct relationships across Premier League, Serie A, and Bundesliga boardrooms. Regarded as one of the game’s foremost contract architects.',
    specialization: 'Senior Transfer Negotiations & Sovereign Deals',
  },
  {
    id: 'marcella-rossi',
    name: 'Marcella Rossi',
    role: 'Head of Legal & Regulatory Governance',
    credibility: 'Admitted Court of Arbitration for Sport (CAS) Advocate; former legal counsel to top European leagues.',
    bio: 'Specialist in complex international sports arbitration, bilateral FIFA clearing house protocols, cross-border fiscal structures, and airtight multi-jurisdiction player covenants.',
    specialization: 'CAS Arbitration & Contractual Enforceability',
  },
  {
    id: 'henrik-lindqvist',
    name: 'Henrik Lindqvist',
    role: 'Director of Commercial & Global Partnerships',
    credibility: 'Architect of €85M+ in luxury, automotive, and technical boot campaigns across 6 continents.',
    bio: 'Previously led sports marketing divisions across London and Zurich. Directly bridges the gap between our footballers and worldwide consumer giants.',
    specialization: 'Global Brand Deals & Intellectual Property',
  },
  {
    id: 'david-alston',
    name: 'Dr. David Alston',
    role: 'Head of Athletic Longevity & Tactical Analysis',
    credibility: 'Former Head of Performance at European Champions League semi-finalists; Fellow of the Royal College of Surgeons.',
    bio: 'Provides independent medical oversight, biomechanical longevity monitoring, and tactical data analysis to evaluate club playing systems before any contract commitment.',
    specialization: 'Career Longevity & Tactical System Profiling',
  },
];

export const TRACK_RECORD_METRICS: MetricItem[] = [
  {
    id: 'deal-volume',
    value: 520,
    prefix: '£',
    suffix: 'M+',
    label: 'Total Career Value Negotiated',
    context: 'Across Premier League, La Liga, Serie A, and Champions League agreements.',
  },
  {
    id: 'years-experience',
    value: 28,
    suffix: ' Years',
    label: 'Combined Football Experience',
    context: 'Direct boardroom and technical involvement at the highest tier of the sport.',
  },
  {
    id: 'renegotiation-increase',
    value: 94,
    suffix: '%',
    label: 'Average Value Increase',
    context: 'Compound uplift achieved in second-cycle senior contract renegotiations.',
  },
  {
    id: 'discretion-record',
    value: 100,
    suffix: '%',
    label: 'Confidential Discretion',
    context: 'Airtight privacy record. Zero non-authorized media leaks across our roster.',
  },
];

export const GLOBAL_REGIONS: MarketRegion[] = [
  {
    id: 'uk-premier',
    region: 'United Kingdom',
    hub: 'London — Mayfair Office',
    leagues: ['Premier League', 'Championship'],
    keyFocus: 'Unrivaled broadcast revenue contracts, direct sporting director access across all Big Six and emerging elite clubs.',
    status: 'Primary Hub',
  },
  {
    id: 'iberian-corridor',
    region: 'Spain & Portugal',
    hub: 'Madrid — Salamanca District',
    leagues: ['La Liga', 'Liga Portugal'],
    keyFocus: 'Deep technical scouting ties, statutory release clause expertise, and Latin American visa pathways.',
    status: 'Direct Operations',
  },
  {
    id: 'italy-serie-a',
    region: 'Italy',
    hub: 'Milan — Quadrilatero',
    leagues: ['Serie A'],
    keyFocus: 'Specialized fiscal optimization under Italian sports residency rules, tactical placement with UEFA contenders.',
    status: 'Direct Operations',
  },
  {
    id: 'dach-central',
    region: 'Germany & Central Europe',
    hub: 'Munich & Zurich',
    leagues: ['Bundesliga', 'Swiss Super League'],
    keyFocus: 'Data-led recruitment partnerships, modern athletic development facilities, and direct club supervisory ties.',
    status: 'Direct Operations',
  },
  {
    id: 'middle-east',
    region: 'Gulf & Middle East',
    hub: 'Riyadh & Dubai',
    leagues: ['Saudi Pro League', 'UAE Pro League'],
    keyFocus: 'Direct governmental and sovereign fund access, tax-free marquee contracts, and institutional investment.',
    status: 'Strategic Corridor',
  },
  {
    id: 'americas',
    region: 'North America',
    hub: 'New York & Miami',
    leagues: ['Major League Soccer', 'Commercial IP'],
    keyFocus: 'Expanding US commercial rights, lifestyle sponsorships, and Designated Player contract structuring.',
    status: 'Commercial Hub',
  },
];

export const CREDIBILITY_PILLARS = [
  {
    title: 'FIFA Licensed Representation',
    subtitle: 'Fully certified under latest FIFA Football Agent Regulations (FFAR).',
  },
  {
    title: 'Absolute Client Discretion',
    subtitle: 'Strict non-disclosure protocols and private communication channels.',
  },
  {
    title: 'Senior-Level Peer Relationships',
    subtitle: 'Direct dialogue with Club Presidents, Sporting Directors, and Global Brand CMOs.',
  },
  {
    title: 'Comprehensive Wealth Architecture',
    subtitle: 'Integration with elite family offices, tax counsel, and asset preservation partners.',
  },
];
