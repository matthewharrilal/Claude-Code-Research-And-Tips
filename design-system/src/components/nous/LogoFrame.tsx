'use client';

import { ReactNode } from 'react';

type FrameVariant = 'single' | 'double' | 'thick';
type FrameShape = 'square' | 'rounded';

interface LogoFrameProps {
  children: ReactNode;
  borderWidth?: number;
  variant?: FrameVariant;
  shape?: FrameShape;
  className?: string;
}

/**
 * Thick-bordered container for logos and key content
 * Inspired by Nous Research's bold framing style
 */
export function LogoFrame({
  children,
  borderWidth = 8,
  variant = 'single',
  shape = 'square',
  className = '',
}: LogoFrameProps) {
  const shapeClasses = {
    square: 'rounded-none',
    rounded: 'rounded-lg',
  };

  const variantStyles = {
    single: { borderWidth: `${borderWidth}px`, borderStyle: 'solid' },
    double: { borderWidth: `${borderWidth * 1.5}px`, borderStyle: 'double' },
    thick: { borderWidth: `${borderWidth * 1.5}px`, borderStyle: 'solid' },
  };

  return (
    <div
      className={`
        inline-flex items-center justify-center
        p-6 bg-white border-black
        ${shapeClasses[shape]}
        ${className}
      `}
      style={variantStyles[variant]}
    >
      {children}
    </div>
  );
}

/**
 * Inverted frame (white border on black)
 */
export function InvertedFrame({
  children,
  borderWidth = 8,
  className = '',
}: Omit<LogoFrameProps, 'variant' | 'shape'>) {
  return (
    <div
      className={`
        inline-flex items-center justify-center
        p-6 bg-black border-white
        ${className}
      `}
      style={{ borderWidth: `${borderWidth}px`, borderStyle: 'solid' }}
    >
      <div className="text-white">
        {children}
      </div>
    </div>
  );
}

export default LogoFrame;
