'use client';

import { ReactNode } from 'react';

interface RepetitionPatternProps {
  text: string;
  repetitions?: number;
  rotation?: number;
  opacity?: number;
  className?: string;
  children?: ReactNode;
}

/**
 * Text repeated as background texture
 * Creates the bold condensed sans pattern seen in Nous Research design
 */
export function RepetitionPattern({
  text,
  repetitions = 8,
  rotation = 0,
  opacity = 0.08,
  className = '',
  children,
}: RepetitionPatternProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background repetition layer */}
      <div
        className="absolute inset-0 flex flex-col justify-center pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-hidden="true"
      >
        {Array.from({ length: repetitions }).map((_, i) => (
          <div
            key={i}
            className="font-['Inter_Tight',_'Roboto_Condensed',_sans-serif] text-4xl font-bold uppercase tracking-tight leading-none whitespace-nowrap text-black"
            style={{ opacity }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Content layer */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * Single line repetition for borders/dividers
 */
interface RepetitionLineProps {
  text: string;
  className?: string;
}

export function RepetitionLine({ text, className = '' }: RepetitionLineProps) {
  const repeated = Array(20).fill(text).join(' · ');

  return (
    <div
      className={`
        overflow-hidden whitespace-nowrap
        font-['Inter_Tight'] text-sm font-bold uppercase tracking-wide
        text-black/10
        ${className}
      `}
    >
      {repeated}
    </div>
  );
}

export default RepetitionPattern;
