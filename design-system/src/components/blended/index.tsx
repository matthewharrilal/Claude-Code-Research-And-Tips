'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// ============================================
// DESIGN TOKENS (inline for component usage)
// ============================================
const tokens = {
  primary: '#FF0000',
  primaryDark: '#CC0000',
  bgPage: '#FBF5EF',
  bgCard: '#FFFFFF',
  textPrimary: '#171717',
  textSecondary: '#4A4A4A',
  textMuted: '#B0B0B0',
  textInverse: '#FFFFFF',
  accentGold: '#C4A35A',
  textureOpacity: 0.04,
};

// ============================================
// HERO WITH TEXTURE (Sanrok + Nous)
// ============================================
interface BlendedHeroProps {
  title: ReactNode;
  subtitle?: string;
  textureWord?: string;
  showDivider?: boolean;
  className?: string;
}

export function BlendedHero({
  title,
  subtitle,
  textureWord = 'INNOVATION',
  showDivider = true,
  className = '',
}: BlendedHeroProps) {
  const textureLines = Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      style={{
        fontFamily: "'Inter Tight', 'Roboto Condensed', sans-serif",
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        color: tokens.primary,
        opacity: tokens.textureOpacity,
      }}
    >
      {`${textureWord} · `.repeat(8)}
    </div>
  ));

  return (
    <section
      className={className}
      style={{
        background: tokens.bgPage,
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Nous-style repetition texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {textureLines}
      </div>

      {/* Sanrok-style hero text */}
      <h1
        style={{
          fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
          fontSize: 'clamp(4rem, 12vw, 11rem)',
          fontWeight: 400,
          lineHeight: 0.85,
          letterSpacing: '-0.03em',
          color: tokens.textPrimary,
          position: 'relative',
          zIndex: 1,
          margin: 0,
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '1.333rem',
            color: tokens.textSecondary,
            marginTop: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Medieval ornamental divider */}
      {showDivider && (
        <BlendedDivider variant="fleur" style={{ marginTop: '2rem' }} />
      )}
    </section>
  );
}

// ============================================
// HERO SPAN (for italic/regular mixing)
// ============================================
interface HeroSpanProps {
  children: ReactNode;
  italic?: boolean;
}

export function HeroSpan({ children, italic = false }: HeroSpanProps) {
  return <span style={{ fontStyle: italic ? 'italic' : 'normal' }}>{children}</span>;
}

// ============================================
// ORNAMENTAL DIVIDER (Medieval + Sanrok)
// ============================================
type DividerVariant = 'fleur' | 'flourish' | 'star' | 'simple';

interface BlendedDividerProps {
  variant?: DividerVariant;
  className?: string;
  style?: React.CSSProperties;
}

const ornaments: Record<DividerVariant, string> = {
  fleur: '⚜',
  flourish: '❧',
  star: '✦',
  simple: '•',
};

export function BlendedDivider({
  variant = 'fleur',
  className = '',
  style = {},
}: BlendedDividerProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem 0',
        maxWidth: '400px',
        margin: '0 auto',
        ...style,
      }}
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: tokens.primary,
          opacity: 0.5,
        }}
      />
      <span
        style={{
          fontSize: '1.5rem',
          color: tokens.primary,
          lineHeight: 1,
        }}
      >
        {ornaments[variant]}
      </span>
      <div
        style={{
          flex: 1,
          height: '1px',
          background: tokens.primary,
          opacity: 0.5,
        }}
      />
    </div>
  );
}

// ============================================
// TEAM MEMBER CARD (Sanrok + Medieval)
// ============================================
interface BlendedTeamCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  rank?: number;
  showGoldStar?: boolean;
  className?: string;
}

export function BlendedTeamCard({
  name,
  role,
  imageUrl,
  rank,
  showGoldStar = true,
  className = '',
}: BlendedTeamCardProps) {
  return (
    <motion.div
      className={className}
      style={{
        background: tokens.bgCard,
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06)',
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Image with duotone */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          overflow: 'hidden',
          background: '#e0e0e0',
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.3) brightness(1.1)',
            }}
          />
        )}
        {/* Red duotone overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: tokens.primary,
            mixBlendMode: 'multiply',
            opacity: 0.85,
          }}
        />

        {/* Rank badge with medieval gold star */}
        {rank && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              background: tokens.primary,
              color: tokens.textInverse,
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '0.625rem',
              fontWeight: 700,
            }}
          >
            {showGoldStar && (
              <span style={{ color: tokens.accentGold }}>✦</span>
            )}
            <span>{rank}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1rem' }}>
        <h4
          style={{
            fontSize: '14px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: tokens.textPrimary,
            margin: '0 0 4px 0',
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontSize: '10px',
            fontWeight: 500,
            color: tokens.textMuted,
            margin: 0,
          }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================
// FEATURE BOX (Nous + Medieval)
// ============================================
interface BlendedFeatureBoxProps {
  title: string;
  children: ReactNode;
  linkText?: string;
  linkHref?: string;
  showCornerOrnaments?: boolean;
  className?: string;
}

export function BlendedFeatureBox({
  title,
  children,
  linkText,
  linkHref,
  showCornerOrnaments = true,
  className = '',
}: BlendedFeatureBoxProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        background: tokens.bgCard,
        border: '4px solid ' + tokens.textPrimary,
        padding: '2rem',
        margin: '2rem 0',
      }}
    >
      {/* Corner ornaments (Medieval) */}
      {showCornerOrnaments && (
        <>
          <span
            style={{
              position: 'absolute',
              top: '-0.75rem',
              left: '1rem',
              fontSize: '1.25rem',
              color: tokens.primary,
              background: tokens.bgPage,
              padding: '0 0.5rem',
              lineHeight: 1,
            }}
          >
            ❧
          </span>
          <span
            style={{
              position: 'absolute',
              bottom: '-0.75rem',
              right: '1rem',
              fontSize: '1.25rem',
              color: tokens.primary,
              background: tokens.bgPage,
              padding: '0 0.5rem',
              lineHeight: 1,
              transform: 'rotate(180deg)',
            }}
          >
            ❧
          </span>
        </>
      )}

      <h3
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: '2.369rem',
          fontWeight: 400,
          color: tokens.textPrimary,
          margin: '0 0 1rem 0',
        }}
      >
        {title}
      </h3>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          lineHeight: 1.6,
          color: tokens.textSecondary,
          marginBottom: linkText ? '1.5rem' : 0,
        }}
      >
        {children}
      </div>

      {linkText && linkHref && (
        <a
          href={linkHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: tokens.primary,
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          {linkText}
          <span>→</span>
        </a>
      )}
    </div>
  );
}

// ============================================
// PILL NAVIGATION (Sanrok + Medieval accent)
// ============================================
interface NavItem {
  id: string;
  label: string;
}

interface BlendedNavProps {
  items: NavItem[];
  activeId: string;
  onChange: (id: string) => void;
  showOrnament?: boolean;
  className?: string;
}

export function BlendedNav({
  items,
  activeId,
  onChange,
  showOrnament = true,
  className = '',
}: BlendedNavProps) {
  return (
    <nav
      className={className}
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: '4px',
          background: tokens.bgCard,
          padding: '8px',
          borderRadius: '9999px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        }}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              style={{
                position: 'relative',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive ? tokens.textInverse : tokens.textPrimary,
                background: isActive ? tokens.textPrimary : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              {/* Medieval ornament above active */}
              {isActive && showOrnament && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.5rem',
                    color: tokens.primary,
                  }}
                >
                  ⚜
                </span>
              )}
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ============================================
// CTA BUTTON (Sanrok style)
// ============================================
interface BlendedCTAProps {
  children: ReactNode;
  variant?: 'filled' | 'outline';
  size?: 'default' | 'large';
  onClick?: () => void;
  className?: string;
}

export function BlendedCTA({
  children,
  variant = 'filled',
  size = 'default',
  onClick,
  className = '',
}: BlendedCTAProps) {
  const isFilled = variant === 'filled';
  const isLarge = size === 'large';

  return (
    <motion.button
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: isLarge ? '1rem 2rem' : '0.75rem 1.25rem',
        background: isFilled ? tokens.textPrimary : 'transparent',
        color: isFilled ? tokens.textInverse : tokens.textPrimary,
        border: isFilled ? 'none' : '2px solid ' + tokens.textPrimary,
        borderRadius: '9999px',
        fontSize: isLarge ? '1rem' : '0.875rem',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      whileHover={{
        backgroundColor: tokens.primary,
        color: tokens.textInverse,
        y: -2,
      }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
}

// ============================================
// SECTION WITH BACKGROUND TEXT (Nous texture)
// ============================================
interface BlendedSectionProps {
  children: ReactNode;
  bgText?: string;
  className?: string;
}

export function BlendedSection({
  children,
  bgText,
  className = '',
}: BlendedSectionProps) {
  return (
    <section
      className={className}
      style={{
        position: 'relative',
        padding: '4rem 2rem',
        background: tokens.bgPage,
        overflow: 'hidden',
      }}
    >
      {bgText && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: 'clamp(80px, 15vw, 200px)',
            fontWeight: 700,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            color: tokens.primary,
            opacity: 0.03,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          {bgText}
        </div>
      )}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
}

// ============================================
// EXPORTS
// ============================================
export default {
  BlendedHero,
  HeroSpan,
  BlendedDivider,
  BlendedTeamCard,
  BlendedFeatureBox,
  BlendedNav,
  BlendedCTA,
  BlendedSection,
};
