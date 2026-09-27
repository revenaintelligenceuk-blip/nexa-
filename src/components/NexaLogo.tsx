import React from 'react';

interface NexaLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

// variant="dark" = for placement on DARK backgrounds -> cream wordmark asset
// variant="light" = for placement on LIGHT backgrounds -> black wordmark asset
const LOGO_SRC = {
  full: {
    dark: '/brand/nexa-logo-full-cream.png',
    light: '/brand/nexa-logo-full-black.png',
  },
  mark: {
    dark: '/brand/nexa-mark-cream.png',
    light: '/brand/nexa-mark-black.png',
  },
};

export const NexaLogo: React.FC<NexaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeStyles = {
    sm: { width: 140 },
    md: { width: 190 },
    lg: { width: 260 },
    xl: { width: 340 },
    hero: { width: 440 },
  };

  const { width } = sizeStyles[size] || sizeStyles.md;
  const src = showSubtitle ? LOGO_SRC.full[variant] : LOGO_SRC.mark[variant];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`} id="nexa-brand-logo">
      <img
        src={src}
        alt="Nexa Sports Management"
        width={width}
        style={{ width, height: 'auto' }}
        className="max-w-full transition-opacity duration-300"
      />
    </div>
  );
};
