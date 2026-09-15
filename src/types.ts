export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  scope: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credibility: string;
  bio: string;
  /** Optional — omitted profiles render a monogram card instead of a photo. */
  image?: string;
  specialization: string;
}

export interface MetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface MarketRegion {
  id: string;
  region: string;
  hub: string;
  leagues: string[];
  keyFocus: string;
  status: string;
}
