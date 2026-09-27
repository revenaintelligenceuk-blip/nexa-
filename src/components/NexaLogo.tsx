import React from 'react';

interface NexaLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

// Displayed width per size preset — height is derived below from the actual
// asset's aspect ratio so nothing gets stretched or distorted.
const WIDTHS: Record<NonNullable<NexaLogoProps['size']>, number> = {
  sm: 140,
  md: 190,
  lg: 260,
  xl: 340,
  hero: 440,
};

// Natural pixel dimensions of the source logo files in /public/brand.
const FULL_LOCKUP_ASPECT = 1203 / 477; // wordmark + "SPORTS MANAGEMENT" subtitle
const MARK_ONLY_ASPECT = 1173 / 411; // wordmark + arrow, no subtitle line

export const NexaLogo: React.FC<NexaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const width = WIDTHS[size] ?? WIDTHS.md;
  const aspect = showSubtitle ? FULL_LOCKUP_ASPECT : MARK_ONLY_ASPECT;
  const height = Math.round(width / aspect);

  // variant="dark" = for placement on this site's near-black surfaces (cream
  // wordmark). variant="light" = for a light/white surface (black wordmark),
  // kept for any future light-background use (print, partner decks, etc).
  const color = variant === 'dark' ? 'cream' : 'black';
  const asset = showSubtitle ? 'logo-full' : 'mark';
  const src = `/brand/nexa-${asset}-${color}.png`;

  return (
    <div id="nexa-brand-logo" className={`inline-block select-none ${className}`}>
      <img
        src={src}
        alt="Nexa Sports Management"
        width={width}
        height={height}
        draggable={false}
        style={{ width, height }}
        className="w-auto h-auto max-w-full"
      />
    </div>
  );
};
