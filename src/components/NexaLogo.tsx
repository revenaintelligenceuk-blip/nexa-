import React from 'react';

interface NexaLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

export const NexaLogo: React.FC<NexaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  // Variant colors
  const nexaColor = variant === 'dark' ? '#FAFAF8' : '#0A0A0A';
  const goldColor = '#C9971F';

  // Dimension presets
  const sizeStyles = {
    sm: { width: 140, height: showSubtitle ? 48 : 34 },
    md: { width: 190, height: showSubtitle ? 64 : 44 },
    lg: { width: 260, height: showSubtitle ? 88 : 60 },
    xl: { width: 340, height: showSubtitle ? 116 : 80 },
    hero: { width: 440, height: showSubtitle ? 150 : 100 },
  };

  const { width, height } = sizeStyles[size] || sizeStyles.md;

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`} id="nexa-brand-logo">
      <svg
        viewBox="0 0 380 120"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto max-w-full transition-opacity duration-300"
      >
        {/* === N === */}
        {/* Left vertical */}
        <polygon points="12,18 29,18 29,86 12,86" fill={nexaColor} />
        {/* Diagonal stroke */}
        <polygon points="27,18 45,18 72,86 54,86" fill={nexaColor} />
        {/* Right vertical */}
        <polygon points="62,18 79,18 79,86 62,86" fill={nexaColor} />

        {/* === E === */}
        {/* Vertical backbone */}
        <polygon points="98,18 116,18 116,86 98,86" fill={nexaColor} />
        {/* Top bar */}
        <polygon points="116,18 168,18 168,33 116,33" fill={nexaColor} />
        {/* Mid bar */}
        <polygon points="116,44 158,44 158,58 116,58" fill={nexaColor} />
        {/* Bottom bar with angled modern cut */}
        <polygon points="116,71 168,71 160,86 116,86" fill={nexaColor} />

        {/* === X === */}
        {/* Top-Left to Bottom-Right segment (split behind the arrow) */}
        <polygon points="186,18 206,18 256,86 236,86" fill={nexaColor} />

        {/* Bottom-left segment of other leg */}
        <polygon points="190,86 210,86 218,74 201,74" fill={nexaColor} />

        {/* === GOLD ARROW CUTTING THROUGH THE X === */}
        {/* The dynamic upward-trending arrow cutting from bottom-left up through the X */}
        <g id="nexa-arrow">
          {/* Arrow shaft */}
          <polygon
            points="162,102 173,102 278,24 266,24"
            fill={goldColor}
          />
          {/* Arrow head pointing top-right */}
          <polygon
            points="256,12 300,10 293,48 280,38 282,26 270,27"
            fill={goldColor}
          />
        </g>

        {/* === A === */}
        {/* Bold angled chevron without crossbar */}
        {/* Left diagonal */}
        <polygon points="320,18 338,18 368,86 350,86 338,58 328,58" fill={nexaColor} />
        {/* Right diagonal */}
        <polygon points="320,18 338,18 308,86 290,86 302,58 312,58" fill={nexaColor} />

        {/* === SUBTITLE: SPORTS MANAGEMENT FLANKED BY RULES === */}
        {showSubtitle && (
          <g id="nexa-subtitle" transform="translate(0, 102)">
            {/* Left rule */}
            <line
              x1="12"
              y1="6"
              x2="78"
              y2="6"
              stroke={goldColor}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Center text with wide tracking */}
            <text
              x="190"
              y="10"
              textAnchor="middle"
              fill={goldColor}
              fontSize="12.5"
              fontWeight="600"
              letterSpacing="0.32em"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            >
              SPORTS MANAGEMENT
            </text>
            {/* Right rule */}
            <line
              x1="302"
              y1="6"
              x2="368"
              y2="6"
              stroke={goldColor}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
