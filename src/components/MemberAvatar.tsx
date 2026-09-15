import React from 'react';

interface MemberAvatarProps {
  name: string;
  image?: string;
  className?: string;
  compact?: boolean;
}

function initials(name: string): string {
  const parts = name.replace(/^Dr\.\s*/i, '').trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/**
 * Photo when we have one; otherwise a monogram card rather than a stock
 * photo standing in for a named person. Fits the brand's own "Absolute
 * Client Discretion" positioning, not just a placeholder.
 */
export const MemberAvatar: React.FC<MemberAvatarProps> = ({ name, image, className = '', compact = false }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`w-full h-full object-cover object-center grayscale contrast-125 brightness-95 ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative w-full h-full bg-[#0A0A0A] flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      <span
        className={`relative font-extrabold tracking-[-0.03em] text-[#FAFAF8]/90 ${
          compact ? 'text-xl' : 'text-4xl sm:text-5xl'
        }`}
      >
        {initials(name)}
      </span>
      <span
        className={`absolute left-1/2 -translate-x-1/2 bg-[#C9971F] ${
          compact ? 'bottom-2.5 w-5 h-[1.5px]' : 'bottom-4 w-8 h-[2px]'
        }`}
      />
    </div>
  );
};
