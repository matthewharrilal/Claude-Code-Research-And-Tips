'use client';

import { ReactNode } from 'react';

interface JustifiedTextBlockProps {
  children: ReactNode;
  hyphenate?: boolean;
  columns?: 1 | 2;
  letterSpacing?: 'normal' | 'tracked';
  className?: string;
}

/**
 * Justified text block styled like medieval manuscripts
 * Uses old-style serif typography with proper justification
 */
export function JustifiedTextBlock({
  children,
  hyphenate = true,
  columns = 1,
  letterSpacing = 'normal',
  className = '',
}: JustifiedTextBlockProps) {
  const trackingClasses = {
    normal: '',
    tracked: 'tracking-wide',
  };

  return (
    <div
      className={`
        font-['Georgia',_'Times_New_Roman',_serif]
        text-base leading-relaxed text-justify text-[#1A44B8]
        ${hyphenate ? '[hyphens:auto] [-webkit-hyphens:auto]' : ''}
        ${columns === 2 ? '[column-count:2] [column-gap:2rem] [column-rule:1px_solid_#1A44B8]' : ''}
        ${trackingClasses[letterSpacing]}
        ${className}
      `}
      style={{
        textAlignLast: 'left',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Medieval-styled section container with border
 */
interface MedievalSectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function MedievalSection({
  children,
  title,
  className = '',
}: MedievalSectionProps) {
  return (
    <section
      className={`
        relative border-2 border-[#1A44B8] p-8
        ${className}
      `}
    >
      {/* Corner flourishes */}
      <span className="absolute -top-3 left-4 bg-white px-2 text-[#1A44B8]">❧</span>
      <span className="absolute -bottom-3 right-4 bg-white px-2 text-[#1A44B8]">❧</span>

      {title && (
        <h2 className="font-['UnifrakturMaguntia'] text-3xl text-[#1A44B8] text-center mb-6">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}

/**
 * Marginal note (like manuscript annotations)
 */
interface MarginalNoteProps {
  children: ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export function MarginalNote({
  children,
  side = 'right',
  className = '',
}: MarginalNoteProps) {
  return (
    <aside
      className={`
        text-xs italic text-[#1A44B8]/70
        ${side === 'left' ? 'float-left mr-4 text-right' : 'float-right ml-4'}
        max-w-[150px]
        ${className}
      `}
    >
      {children}
    </aside>
  );
}

export default JustifiedTextBlock;
