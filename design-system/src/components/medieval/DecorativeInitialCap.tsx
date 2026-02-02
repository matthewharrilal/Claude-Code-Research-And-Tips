'use client';

import { ReactNode } from 'react';

type InitialCapVariant = 'default' | 'framed' | 'ornate';
type InitialCapSize = 'sm' | 'md' | 'lg';

interface DecorativeInitialCapProps {
  letter: string;
  variant?: InitialCapVariant;
  size?: InitialCapSize;
  dropCap?: boolean;
  className?: string;
}

/**
 * Decorative drop cap letter in Blackletter style
 * Inspired by medieval manuscript illumination
 */
export function DecorativeInitialCap({
  letter,
  variant = 'default',
  size = 'md',
  dropCap = true,
  className = '',
}: DecorativeInitialCapProps) {
  const sizeClasses = {
    sm: 'text-5xl',
    md: 'text-7xl',
    lg: 'text-8xl',
  };

  const baseClasses = `
    font-['UnifrakturMaguntia',_'Old_English_Text_MT',_serif]
    text-[#1A44B8]
    leading-[0.75]
    ${dropCap ? 'float-left pr-3 pt-1' : ''}
    ${sizeClasses[size]}
  `;

  if (variant === 'framed') {
    return (
      <span
        className={`
          ${baseClasses}
          bg-[#1A44B8] text-white
          px-3 py-2 mr-3
          ${className}
        `}
      >
        {letter.charAt(0).toUpperCase()}
      </span>
    );
  }

  if (variant === 'ornate') {
    return (
      <span
        className={`
          ${baseClasses}
          relative
          ${className}
        `}
      >
        <span className="relative z-10">{letter.charAt(0).toUpperCase()}</span>
        {/* Decorative flourish behind */}
        <span
          className="absolute inset-0 text-[#1A44B8]/10 scale-150 -z-10"
          aria-hidden="true"
        >
          ❧
        </span>
      </span>
    );
  }

  return (
    <span className={`${baseClasses} ${className}`}>
      {letter.charAt(0).toUpperCase()}
    </span>
  );
}

/**
 * Wrapper for paragraphs with initial caps
 */
interface InitialCapParagraphProps {
  children: ReactNode;
  initialLetter?: string;
  variant?: InitialCapVariant;
  className?: string;
}

export function InitialCapParagraph({
  children,
  initialLetter,
  variant = 'default',
  className = '',
}: InitialCapParagraphProps) {
  const text = typeof children === 'string' ? children : '';
  const letter = initialLetter || text.charAt(0);
  const restOfText = initialLetter ? children : text.slice(1);

  return (
    <p className={`text-[#1A44B8] leading-relaxed ${className}`}>
      <DecorativeInitialCap letter={letter} variant={variant} />
      {restOfText}
    </p>
  );
}

export default DecorativeInitialCap;
