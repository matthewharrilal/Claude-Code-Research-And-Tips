'use client';

import { ReactNode } from 'react';

interface HeroTypographyProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Viewport-filling hero text in Instrument Serif
 * Supports mixed italic/regular via HeroSpan components
 *
 * Usage:
 * <HeroTypography>
 *   <HeroSpan italic>Creative</HeroSpan>
 *   <HeroSpan>Agency</HeroSpan>
 * </HeroTypography>
 */
export function HeroTypography({
  children,
  size = 'lg',
  className = '',
}: HeroTypographyProps) {
  const sizeClasses = {
    sm: 'text-[clamp(3rem,8vw,6rem)]',
    md: 'text-[clamp(4rem,12vw,10rem)]',
    lg: 'text-[clamp(5rem,15vw,14rem)]',
    xl: 'text-[clamp(6rem,18vw,18rem)]',
  };

  return (
    <h1
      className={`
        font-['Instrument_Serif',_'Playfair_Display',_Georgia,_serif]
        font-normal
        leading-[0.85]
        tracking-[-0.03em]
        text-[#171717]
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </h1>
  );
}

interface HeroSpanProps {
  children: ReactNode;
  italic?: boolean;
  outline?: boolean;
  className?: string;
}

export function HeroSpan({
  children,
  italic = false,
  outline = false,
  className = '',
}: HeroSpanProps) {
  return (
    <span
      className={`
        ${italic ? 'italic' : 'not-italic'}
        ${outline ? '[--webkit-text-stroke:2px_#171717] [-webkit-text-fill-color:transparent]' : ''}
        ${className}
      `}
      style={outline ? {
        WebkitTextStroke: '2px #171717',
        WebkitTextFillColor: 'transparent',
      } : undefined}
    >
      {children}
    </span>
  );
}

/**
 * Character substitution component (4→A, Ø→O style)
 */
interface HeroCharSubProps {
  children: string;
  className?: string;
}

export function HeroCharSub({ children, className = '' }: HeroCharSubProps) {
  return (
    <span className={`font-feature-settings-['salt'] ${className}`}>
      {children}
    </span>
  );
}

export default HeroTypography;
