import { ReactNode } from 'react';

// Essence Box - Page-top summary
interface EssenceBoxProps {
  summary: string;
}

export function EssenceBox({ summary }: EssenceBoxProps) {
  return (
    <div className="bg-white border border-neutral-300 p-8 mb-12">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-[1px] w-8 bg-[#E31E24]" />
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.25em]">
          Essence (15 words)
        </div>
      </div>
      <p className="text-xl text-neutral-900 leading-relaxed font-light" style={{ fontFamily: 'var(--font-serif)' }}>
        {summary}
      </p>
    </div>
  );
}

// Section Header - Numbered section title
interface SectionHeaderProps {
  number: number;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-12 pb-6 border-b border-neutral-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-[#E31E24] text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-3 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 font-light leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
}

// Subsection Header
interface SubsectionHeaderProps {
  title: string;
  level?: 3 | 4;
}

export function SubsectionHeader({ title, level = 3 }: SubsectionHeaderProps) {
  const sizes = {
    3: 'text-3xl',
    4: 'text-2xl',
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-[1px] w-8 bg-neutral-300" />
      </div>
      <h3 className={`${sizes[level]} text-neutral-900 tracking-tight`} style={{ fontFamily: 'var(--font-serif)' }}>
        {title}
      </h3>
    </div>
  );
}

// Two-Column Grid
interface TwoColumnGridProps {
  children: ReactNode;
  gap?: 'sm' | 'md' | 'lg';
}

export function TwoColumnGrid({ children, gap = 'md' }: TwoColumnGridProps) {
  const gaps = {
    sm: 'gap-4',
    md: 'gap-5',
    lg: 'gap-8',
  };

  return (
    <div className={`grid md:grid-cols-2 ${gaps[gap]}`}>
      {children}
    </div>
  );
}

// Taxonomy Section
interface TaxonomySectionProps {
  category: string;
  description: string;
  children: ReactNode;
}

export function TaxonomySection({ category, description, children }: TaxonomySectionProps) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
            {category}
          </span>
          <div className="h-[1px] flex-1 bg-neutral-300/50" />
        </div>
        <p className="text-base text-neutral-600 font-light leading-relaxed">{description}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

// Page Container
interface PageContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export function PageContainer({ children, maxWidth = 'lg' }: PageContainerProps) {
  const widths = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  };

  return (
    <div className={`${widths[maxWidth]} mx-auto px-6 md:px-12 py-12 md:py-16`}>
      {children}
    </div>
  );
}
