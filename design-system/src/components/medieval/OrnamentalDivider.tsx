'use client';

type DividerVariant = 'flourish' | 'candelabra' | 'cross' | 'fleur' | 'simple';

interface OrnamentalDividerProps {
  variant?: DividerVariant;
  className?: string;
}

const ornaments: Record<DividerVariant, string> = {
  flourish: '❧',
  candelabra: '⚜',
  cross: '✠',
  fleur: '⚜',
  simple: '•',
};

/**
 * Decorative section divider with medieval ornament
 */
export function OrnamentalDivider({
  variant = 'flourish',
  className = '',
}: OrnamentalDividerProps) {
  return (
    <div
      className={`
        flex items-center justify-center gap-4
        py-6 text-[#1A44B8]
        ${className}
      `}
    >
      <div className="flex-1 h-px bg-current" />
      <span className="text-2xl">{ornaments[variant]}</span>
      <div className="flex-1 h-px bg-current" />
    </div>
  );
}

/**
 * Double line divider variant
 */
export function DoubleDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`py-4 ${className}`}>
      <div className="h-px bg-[#1A44B8]" />
      <div className="h-px bg-[#1A44B8] mt-1" />
    </div>
  );
}

/**
 * Corner ornament for framing sections
 */
interface CornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function CornerOrnament({ position, className = '' }: CornerOrnamentProps) {
  const rotations = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <span
      className={`
        absolute ${positions[position]} ${rotations[position]}
        text-[#1A44B8] text-2xl p-2
        ${className}
      `}
    >
      ┌
    </span>
  );
}

export default OrnamentalDivider;
