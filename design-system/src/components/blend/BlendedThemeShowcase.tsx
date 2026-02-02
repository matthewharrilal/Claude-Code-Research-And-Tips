'use client';

import { ReactNode } from 'react';

/**
 * BLENDED THEME: NOUS-DOMINANT
 *
 * Combines:
 * - NOUS (70%): Maximum contrast, bold condensed sans, thick borders, repetition patterns
 * - Medieval (15%): Blackletter accent typography, ornamental dividers, drop caps
 * - Sanrok (15%): Pure red accent color, duotone images, interactive energy
 */

// ============================================
// DESIGN TOKENS (inline for showcase)
// ============================================
const tokens = {
  black: '#000000',
  white: '#FFFFFF',
  accent: '#FF0000',
  accentHover: '#CC0000',
  muted: '#333333',
  medievalBlue: '#1A44B8',
};

// ============================================
// 1. HERO SECTION WITH REPETITION PATTERN
// ============================================
interface BlendedHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  repetitionText?: string;
}

export function BlendedHero({
  title,
  subtitle,
  ctaText = 'Explore System',
  onCtaClick,
  repetitionText = 'RESEARCH',
}: BlendedHeroProps) {
  // Split title on line breaks
  const titleLines = title.split('\n');

  return (
    <section className="relative py-24 px-8 bg-white overflow-hidden">
      {/* Repetition background - Nous signature */}
      <div
        className="absolute inset-0 flex flex-col justify-center pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="text-5xl md:text-7xl font-black uppercase tracking-[-0.04em] leading-none whitespace-nowrap"
            style={{ color: tokens.black, opacity: 0.06 }}
          >
            {Array(8).fill(`${repetitionText} \u00B7 `).join('')}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className="font-black uppercase tracking-[-0.04em] leading-[0.9] mb-8"
          style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            color: tokens.black,
            fontFamily: "'Inter Tight', 'Roboto Condensed', sans-serif",
          }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p
            className="text-xl max-w-xl mx-auto mb-8"
            style={{ color: tokens.muted }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA - Sanrok red energy */}
        <button
          onClick={onCtaClick}
          className="px-8 py-4 font-bold uppercase tracking-wide text-sm transition-colors duration-200"
          style={{
            backgroundColor: tokens.accent,
            color: tokens.white,
            border: `4px solid ${tokens.black}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = tokens.black;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = tokens.accent;
          }}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}

// ============================================
// 2. LOGO FRAME - Thick Nous Borders
// ============================================
interface BlendedLogoFrameProps {
  children: ReactNode;
  inverted?: boolean;
  borderWidth?: number;
  className?: string;
}

export function BlendedLogoFrame({
  children,
  inverted = false,
  borderWidth = 8,
  className = '',
}: BlendedLogoFrameProps) {
  return (
    <div
      className={`inline-flex items-center justify-center p-8 ${className}`}
      style={{
        backgroundColor: inverted ? tokens.black : tokens.white,
        border: `${borderWidth}px solid ${inverted ? tokens.white : tokens.black}`,
      }}
    >
      <span
        className="text-3xl font-black uppercase tracking-[-0.03em]"
        style={{
          color: inverted ? tokens.white : tokens.black,
          fontFamily: "'Inter Tight', sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// Helper: Logo text with red accent dot
export function LogoWithAccent({ text }: { text: string }) {
  return (
    <>
      {text}
      <span style={{ color: tokens.accent }}>.</span>
    </>
  );
}

// ============================================
// 3. TEAM CARD WITH HALFTONE + RED BADGE
// ============================================
interface BlendedTeamCardProps {
  name: string;
  role: string;
  rank: number;
  imageSrc?: string;
}

export function BlendedTeamCard({
  name,
  role,
  rank,
  imageSrc,
}: BlendedTeamCardProps) {
  return (
    <div
      className="bg-white"
      style={{ border: `4px solid ${tokens.black}` }}
    >
      {/* Halftone image - Nous effect */}
      <div className="relative aspect-square bg-zinc-300 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.5)' }}
          />
        ) : (
          <div className="w-full h-full bg-zinc-400" />
        )}

        {/* Halftone overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${tokens.black} 1px, transparent 1px)`,
            backgroundSize: '4px 4px',
            mixBlendMode: 'multiply',
            opacity: 0.25,
          }}
          aria-hidden="true"
        />

        {/* Rank badge - Sanrok red */}
        <div
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center font-black text-lg"
          style={{
            backgroundColor: tokens.accent,
            color: tokens.white,
          }}
        >
          {rank}
        </div>
      </div>

      {/* Info */}
      <div
        className="p-4"
        style={{ borderTop: `4px solid ${tokens.black}` }}
      >
        <h4
          className="font-black uppercase tracking-wide text-sm"
          style={{ color: tokens.black }}
        >
          {name}
        </h4>
        <p
          className="text-[10px] uppercase tracking-wider mt-1"
          style={{ color: tokens.muted }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

// ============================================
// 4. ARTICLE BLOCK WITH MEDIEVAL DROP CAP
// ============================================
interface BlendedArticleBlockProps {
  heading: string;
  children: ReactNode;
  dropCapLetter?: string;
  showOrnament?: boolean;
}

export function BlendedArticleBlock({
  heading,
  children,
  dropCapLetter,
  showOrnament = true,
}: BlendedArticleBlockProps) {
  return (
    <article className="max-w-2xl mx-auto py-16 px-8">
      {/* Medieval-style Blackletter heading */}
      <h2
        className="text-5xl text-center mb-8"
        style={{
          fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', fantasy",
          color: tokens.black,
        }}
      >
        {heading}
      </h2>

      {/* Thick divider - Nous */}
      <div
        className="h-2 w-32 mx-auto mb-12"
        style={{ backgroundColor: tokens.black }}
      />

      {/* Body content */}
      <div
        className="leading-relaxed text-justify"
        style={{ color: tokens.black }}
      >
        {children}
      </div>

      {/* Ornamental divider - Medieval accent */}
      {showOrnament && (
        <div
          className="flex items-center justify-center gap-4 py-8"
          style={{ color: tokens.black }}
        >
          <div className="flex-1 h-px bg-current" />
          <span className="text-2xl">⚜</span>
          <div className="flex-1 h-px bg-current" />
        </div>
      )}
    </article>
  );
}

// Drop Cap component for use within article
export function BlendedDropCap({
  letter,
  accent = false,
}: {
  letter: string;
  accent?: boolean;
}) {
  return (
    <span
      className="float-left pr-4 pt-2 leading-[0.7]"
      style={{
        fontFamily: "'UnifrakturMaguntia', fantasy",
        fontSize: '5rem',
        color: accent ? tokens.accent : tokens.black,
      }}
    >
      {letter.charAt(0).toUpperCase()}
    </span>
  );
}

// ============================================
// 5. GRID SECTION WITH THICK BORDERS
// ============================================
interface GridItem {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface BlendedGridSectionProps {
  heading: string;
  items: GridItem[];
  inverted?: boolean;
}

export function BlendedGridSection({
  heading,
  items,
  inverted = true,
}: BlendedGridSectionProps) {
  const bgColor = inverted ? tokens.black : tokens.white;
  const textColor = inverted ? tokens.white : tokens.black;
  const borderColor = inverted ? tokens.white : tokens.black;

  return (
    <section
      className="py-16 px-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2
        className="text-4xl font-black uppercase tracking-tight text-center mb-12"
        style={{ fontFamily: "'Inter Tight', sans-serif" }}
      >
        {heading}
      </h2>

      {/* Grid with thick borders - Nous structure */}
      <div
        className="max-w-4xl mx-auto"
        style={{
          borderTop: `4px solid ${borderColor}`,
          borderBottom: `4px solid ${borderColor}`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="p-8"
              style={{
                borderLeft: i > 0 ? `2px solid ${borderColor}` : 'none',
              }}
            >
              <h3
                className="text-2xl font-black uppercase tracking-tight mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ opacity: 0.7 }}
              >
                {item.description}
              </p>

              {/* Red accent link - Sanrok energy */}
              {item.linkText && (
                <a
                  href={item.linkHref || '#'}
                  className="inline-block text-sm font-bold uppercase tracking-wide hover:underline"
                  style={{ color: tokens.accent }}
                >
                  {item.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FULL SHOWCASE PAGE
// ============================================
export function BlendedThemeShowcase() {
  const teamMembers = [
    { name: 'Alex Chen', role: 'Lead Designer', rank: 1 },
    { name: 'Sarah Kim', role: 'Engineer', rank: 2 },
    { name: 'Mike Davis', role: 'Product', rank: 3 },
    { name: 'Emma Wilson', role: 'Research', rank: 4 },
  ];

  const gridItems = [
    {
      title: 'Research',
      description: 'Deep analysis and pattern extraction from design references.',
      linkText: 'Learn More',
    },
    {
      title: 'Design',
      description: 'Maximum contrast visual systems with bold typography.',
      linkText: 'Learn More',
    },
    {
      title: 'Deploy',
      description: 'Production-ready components with full accessibility.',
      linkText: 'Learn More',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className="py-6 px-8"
        style={{ backgroundColor: tokens.black, color: tokens.white }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <BlendedLogoFrame inverted borderWidth={4}>
            <LogoWithAccent text="BLEND" />
          </BlendedLogoFrame>

          <nav className="flex gap-6">
            {['System', 'Components', 'Tokens'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold uppercase tracking-wide hover:underline"
                style={{ color: tokens.white }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = tokens.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = tokens.white;
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 1. Hero */}
      <BlendedHero
        title={"Maximum\nContrast"}
        subtitle="A brutalist design system combining Nous, Medieval, and Sanrok aesthetics."
        ctaText="Explore System"
      />

      {/* Logo Frames Demo */}
      <section className="py-16 px-8 bg-zinc-100 text-center">
        <h2
          className="text-2xl font-black uppercase tracking-tight mb-8"
          style={{ color: tokens.black }}
        >
          Logo Frames
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <BlendedLogoFrame>
            <LogoWithAccent text="PATTERN" />
          </BlendedLogoFrame>
          <BlendedLogoFrame inverted>
            <LogoWithAccent text="LIBRARY" />
          </BlendedLogoFrame>
        </div>
      </section>

      {/* 3. Team Cards */}
      <section className="py-16 px-8 bg-white">
        <h2
          className="text-3xl font-black uppercase tracking-tight text-center mb-12"
          style={{ color: tokens.black }}
        >
          Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <BlendedTeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              rank={member.rank}
            />
          ))}
        </div>
      </section>

      {/* 4. Article Block */}
      <BlendedArticleBlock heading="The Archive">
        <p>
          <BlendedDropCap letter="I" />
          n the tradition of rigorous documentation, we present a system
          built upon maximum contrast and unwavering clarity. Each element
          serves a purpose. Each decision is deliberate. The stark opposition
          of black and white creates a visual hierarchy that demands attention
          and rewards careful observation.
        </p>
        <p className="mt-4">
          This is not minimalism for its own sake, but rather a commitment
          to the essential. Typography speaks loudly. Borders define space.
          Red punctuates with energy and urgency. The Medieval heritage provides
          moments of ceremony, while Sanrok warmth prevents sterility.
        </p>
      </BlendedArticleBlock>

      {/* 5. Grid Section */}
      <BlendedGridSection
        heading="Capabilities"
        items={gridItems}
        inverted
      />

      {/* Footer */}
      <footer
        className="py-8 px-8 text-center"
        style={{ backgroundColor: tokens.white }}
      >
        <p
          className="text-sm uppercase tracking-wide"
          style={{ color: tokens.muted }}
        >
          Blended Theme Showcase
        </p>
        <p
          className="text-xs mt-2"
          style={{ color: tokens.muted, opacity: 0.6 }}
        >
          NOUS (70%) + Medieval (15%) + Sanrok (15%)
        </p>
      </footer>
    </div>
  );
}

export default BlendedThemeShowcase;
