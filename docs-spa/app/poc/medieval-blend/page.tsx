'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Medieval-Dominant Blend Theme Showcase
 *
 * Design Philosophy:
 * - Medieval (60%): Royal blue #1A44B8, Blackletter, ornamental dividers
 * - Sanrok (25%): Warm cream #FBF5EF backgrounds, rounded corners
 * - Nous (15%): Thick borders, high contrast structural weight
 */

// ============================================
// DESIGN TOKENS
// ============================================
const tokens = {
  colors: {
    // Primary (Medieval)
    primary: '#1A44B8',
    primaryDark: '#132F80',
    primaryLight: '#2857D9',

    // Background (Sanrok)
    bg: '#FBF5EF',
    bgAlt: '#F5EDE3',
    surface: '#FFFFFF',

    // Neutral
    black: '#000000',
    white: '#FFFFFF',

    // Text
    text: '#2D2A26',
    textMuted: '#6B6560',

    // Accent
    gold: '#C9A227',
    burgundy: '#8B1E3F',
  },
  fonts: {
    display: "'UnifrakturMaguntia', 'Old English Text MT', serif",
    heading: "'Instrument Serif', 'Playfair Display', Georgia, serif",
    body: "'Crimson Text', 'EB Garamond', Georgia, serif",
    ui: "'Inter', -apple-system, sans-serif",
  },
  borders: {
    thin: '1px',
    medium: '2px',
    thick: '3px',
    heavy: '4px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
};

const t = tokens;

const MEDIEVAL_SYMBOLS = {
  fleurDeLis: '\u269C',  // ⚜
  cross: '\u2720',       // ✠
  rotunda: '\u2767',     // ❧
  heart: '\u2766',       // ❦
  fourTeardrop: '\u2725', // ✥
};

// ============================================
// HERO SECTION
// ============================================
function MedievalHero() {
  return (
    <section
      className="py-24 px-8 text-center"
      style={{ backgroundColor: t.colors.bg }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="leading-[0.85] mb-6"
        style={{
          fontFamily: t.fonts.display,
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          color: t.colors.primary,
          letterSpacing: '-0.02em',
        }}
      >
        Illuminated
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl mx-auto"
        style={{
          fontFamily: t.fonts.heading,
          fontSize: '1.5rem',
          color: t.colors.textMuted,
          fontStyle: 'italic',
        }}
      >
        In the manner of ancient manuscripts, where every letter was a work of art
      </motion.p>
    </section>
  );
}

// ============================================
// ORNAMENTAL DIVIDER
// ============================================
function OrnamentalDivider({
  symbol = MEDIEVAL_SYMBOLS.fleurDeLis,
  variant = 'normal',
}: {
  symbol?: string;
  variant?: 'normal' | 'heavy';
}) {
  const lineHeight = variant === 'heavy' ? t.borders.heavy : t.borders.medium;

  return (
    <div
      className="flex items-center justify-center gap-4 py-6"
      style={{ color: t.colors.primary }}
    >
      <div
        className="flex-1 max-w-[200px]"
        style={{
          height: lineHeight,
          background: `linear-gradient(90deg, transparent, ${t.colors.primary}, transparent)`,
        }}
      />
      <span className="text-2xl">{symbol}</span>
      <div
        className="flex-1 max-w-[200px]"
        style={{
          height: lineHeight,
          background: `linear-gradient(90deg, transparent, ${t.colors.primary}, transparent)`,
        }}
      />
    </div>
  );
}

// ============================================
// ILLUMINATED CARD
// ============================================
function IlluminatedCard({
  title,
  children,
  goldAccent = false,
}: {
  title: string;
  children: ReactNode;
  goldAccent?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="p-6"
      style={{
        backgroundColor: t.colors.surface,
        borderRadius: t.radius.lg,
        border: `${t.borders.thick} solid ${t.colors.primary}`,
        borderTopWidth: goldAccent ? t.borders.heavy : t.borders.thick,
        borderTopColor: goldAccent ? t.colors.gold : t.colors.primary,
        boxShadow: '0 4px 6px rgba(26, 68, 184, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
      }}
    >
      <h3
        className="mb-4"
        style={{
          fontFamily: t.fonts.display,
          fontSize: '1.777rem',
          color: t.colors.primary,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontFamily: t.fonts.body,
          color: t.colors.text,
          lineHeight: 1.7,
          textAlign: 'justify',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// ============================================
// CONTENT WITH DROP CAP
// ============================================
function ContentWithDropCap({
  children,
  initialColor = 'primary',
}: {
  children: string;
  initialColor?: 'primary' | 'gold';
}) {
  const initial = children.charAt(0);
  const rest = children.slice(1);

  return (
    <div className="max-w-2xl mx-auto">
      <p
        style={{
          fontFamily: t.fonts.body,
          fontSize: '1.125rem',
          lineHeight: 1.8,
          color: t.colors.text,
          textAlign: 'justify',
        }}
      >
        <span
          className="float-left pr-3 pt-1"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '5rem',
            lineHeight: 0.75,
            color: initialColor === 'gold' ? t.colors.gold : t.colors.primary,
            textShadow: initialColor === 'gold' ? '1px 1px 2px rgba(0,0,0,0.15)' : 'none',
          }}
        >
          {initial}
        </span>
        {rest}
      </p>
    </div>
  );
}

// ============================================
// PROFILE CARD
// ============================================
function ProfileCard({
  name,
  role,
  initial,
}: {
  name: string;
  role: string;
  initial?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="text-center overflow-hidden"
      style={{
        backgroundColor: t.colors.surface,
        borderRadius: t.radius.lg,
        border: `${t.borders.thick} solid ${t.colors.primary}`,
        boxShadow: '0 4px 6px rgba(26, 68, 184, 0.08)',
      }}
    >
      <div
        className="w-20 h-20 mx-auto mt-6 mb-4 flex items-center justify-center"
        style={{
          borderRadius: '50%',
          backgroundColor: t.colors.primary,
          color: t.colors.white,
          fontFamily: t.fonts.display,
          fontSize: '2rem',
        }}
      >
        {initial || name.charAt(0)}
      </div>
      <h4
        className="px-4"
        style={{
          fontFamily: t.fonts.ui,
          fontSize: '0.875rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: t.colors.primary,
        }}
      >
        {name}
      </h4>
      <p
        className="px-4 pb-6 pt-1"
        style={{
          fontFamily: t.fonts.ui,
          fontSize: '0.75rem',
          color: t.colors.textMuted,
        }}
      >
        {role}
      </p>
    </motion.div>
  );
}

// ============================================
// HEADER
// ============================================
function MedievalHeader() {
  const navItems = [
    { label: 'Scriptorium', href: '#' },
    { label: 'Codices', href: '#codices' },
    { label: 'Illuminations', href: '#illuminations' },
  ];

  return (
    <header
      className="flex items-center justify-between px-8 py-4"
      style={{
        backgroundColor: t.colors.bg,
        borderBottom: `${t.borders.heavy} solid ${t.colors.primary}`,
      }}
    >
      <div
        style={{
          fontFamily: t.fonts.display,
          fontSize: '1.75rem',
          color: t.colors.primary,
        }}
      >
        Scriptorium
      </div>
      <nav className="flex gap-8">
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors duration-150"
            style={{
              fontFamily: t.fonts.ui,
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: i === 0 ? t.colors.primary : t.colors.text,
              textDecoration: i === 0 ? 'underline' : 'none',
              textDecorationStyle: i === 0 ? 'wavy' : undefined,
              textUnderlineOffset: '4px',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

// ============================================
// BUTTON
// ============================================
function MedievalButton({
  children,
  variant = 'primary',
}: {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'gold';
}) {
  const styles = {
    primary: {
      backgroundColor: t.colors.primary,
      color: t.colors.white,
      borderColor: t.colors.primary,
    },
    outline: {
      backgroundColor: 'transparent',
      color: t.colors.primary,
      borderColor: t.colors.primary,
    },
    gold: {
      backgroundColor: t.colors.gold,
      color: t.colors.black,
      borderColor: t.colors.gold,
    },
  };

  const style = styles[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-3 cursor-pointer"
      style={{
        fontFamily: t.fonts.ui,
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderRadius: t.radius.md,
        border: `${t.borders.thick} solid ${style.borderColor}`,
        backgroundColor: style.backgroundColor,
        color: style.color,
        transition: 'all 150ms ease',
      }}
    >
      {children}
    </motion.button>
  );
}

// ============================================
// TYPOGRAPHY SCALE
// ============================================
function TypographyScale() {
  const scale = [
    { label: 'Hero', size: 'clamp(3rem,8vw,5rem)', font: t.fonts.display, weight: 400 },
    { label: 'Display', size: '3.157rem', font: t.fonts.display, weight: 400 },
    { label: 'H1', size: '2.369rem', font: t.fonts.heading, weight: 400 },
    { label: 'H2', size: '1.777rem', font: t.fonts.heading, weight: 400 },
    { label: 'H3', size: '1.333rem', font: t.fonts.heading, weight: 600 },
    { label: 'Body', size: '1.125rem', font: t.fonts.body, weight: 400 },
    { label: 'Small', size: '0.875rem', font: t.fonts.ui, weight: 400 },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {scale.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline gap-4 pb-4"
          style={{ borderBottom: `1px solid ${t.colors.bgAlt}` }}
        >
          <span
            className="w-20"
            style={{
              fontFamily: t.fonts.ui,
              fontSize: '0.875rem',
              color: t.colors.textMuted,
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontSize: item.size,
              fontFamily: item.font,
              fontWeight: item.weight,
              color: item.label.includes('H') || item.label === 'Hero' || item.label === 'Display'
                ? t.colors.primary
                : t.colors.text,
              lineHeight: 1.1,
            }}
          >
            Sample Text
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================
// COLOR PALETTE
// ============================================
function ColorPalette() {
  const colors = [
    { name: 'Royal Blue', value: t.colors.primary },
    { name: 'Blue Dark', value: t.colors.primaryDark },
    { name: 'Warm Cream', value: t.colors.bg },
    { name: 'Gold', value: t.colors.gold },
    { name: 'Burgundy', value: t.colors.burgundy },
    { name: 'Text', value: t.colors.text },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {colors.map((color) => (
        <div key={color.name} className="text-center">
          <div
            className="w-24 h-24 rounded-xl shadow-lg mb-2"
            style={{
              backgroundColor: color.value,
              border: color.value === t.colors.bg ? `1px solid ${t.colors.bgAlt}` : 'none',
            }}
          />
          <p
            className="text-sm font-medium"
            style={{ color: t.colors.text, fontFamily: t.fonts.ui }}
          >
            {color.name}
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: t.colors.textMuted }}
          >
            {color.value}
          </p>
        </div>
      ))}
    </div>
  );
}

// ============================================
// DESIGN SYSTEM CONTRIBUTION INFO
// ============================================
function ContributionInfo() {
  const contributions = [
    {
      source: 'Medieval',
      percentage: '60%',
      color: t.colors.primary,
      items: [
        'Royal Blue #1A44B8 as primary color',
        'UnifrakturMaguntia Blackletter for display',
        'Ornamental dividers with fleur-de-lis',
        'Drop caps / Initial letters',
        'Justified body text',
        'Gold accents (#C9A227)',
      ],
    },
    {
      source: 'Sanrok',
      percentage: '25%',
      color: '#FF0000',
      items: [
        'Warm cream #FBF5EF backgrounds',
        'Rounded corners (12px radius)',
        'Instrument Serif for H1-H4',
        'Soft shadows with blue tint',
        'Humanizing warmth',
      ],
    },
    {
      source: 'Nous',
      percentage: '15%',
      color: t.colors.black,
      items: [
        'Thick borders (3-4px)',
        'High contrast anchors',
        'Bold visual weight',
        'Strong dividers',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {contributions.map((c) => (
        <div
          key={c.source}
          className="p-6"
          style={{
            backgroundColor: t.colors.surface,
            borderRadius: t.radius.lg,
            border: `${t.borders.thick} solid ${c.color}`,
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              style={{
                fontFamily: t.fonts.ui,
                fontWeight: 700,
                color: c.color,
              }}
            >
              {c.source}
            </h4>
            <span
              className="px-2 py-1 rounded text-sm font-bold"
              style={{
                backgroundColor: c.color,
                color: c.color === t.colors.black ? t.colors.white : t.colors.white,
              }}
            >
              {c.percentage}
            </span>
          </div>
          <ul className="space-y-2">
            {c.items.map((item, i) => (
              <li
                key={i}
                className="text-sm"
                style={{
                  fontFamily: t.fonts.ui,
                  color: t.colors.text,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function MedievalBlendShowcase() {
  const teamMembers = [
    { name: 'Alexander', role: 'Lead Scribe', initial: 'A' },
    { name: 'Beatrice', role: 'Illuminator', initial: 'B' },
    { name: 'Constantine', role: 'Bookbinder', initial: 'C' },
    { name: 'Diana', role: 'Archivist', initial: 'D' },
  ];

  return (
    <div style={{ backgroundColor: t.colors.bg, minHeight: '100vh' }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=UnifrakturMaguntia&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <MedievalHeader />

      {/* Hero */}
      <MedievalHero />

      {/* Divider */}
      <OrnamentalDivider />

      {/* Design System Info */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.surface }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Design Contribution
        </h2>
        <ContributionInfo />
      </section>

      {/* Divider */}
      <OrnamentalDivider symbol={MEDIEVAL_SYMBOLS.cross} variant="heavy" />

      {/* Color Palette Section */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.bg }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Color Palette
        </h2>
        <ColorPalette />
      </section>

      {/* Divider */}
      <OrnamentalDivider symbol={MEDIEVAL_SYMBOLS.heart} />

      {/* Typography Section */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.surface }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Typography Scale
        </h2>
        <TypographyScale />
      </section>

      {/* Divider */}
      <OrnamentalDivider symbol={MEDIEVAL_SYMBOLS.rotunda} />

      {/* Content with Drop Cap */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.bg }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Illuminated Text
        </h2>
        <ContentWithDropCap initialColor="gold">
          In the tradition of illuminated manuscripts, the initial capital letter serves not merely
          as the beginning of text, but as a gateway into the world of ideas that follow. Each
          decorated letter was a meditation on the importance of what was to come. The scribes who
          crafted these works understood that beauty and meaning are inseparable, that the form of
          communication shapes its reception. This blend of aesthetics draws from that ancient wisdom
          while embracing modern sensibilities.
        </ContentWithDropCap>
      </section>

      {/* Divider */}
      <OrnamentalDivider />

      {/* Cards Section */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.surface }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Illuminated Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <IlluminatedCard title="The Manuscript" goldAccent>
            <p>
              The medieval manuscript tradition represents one of humanity&apos;s greatest
              achievements in the preservation and transmission of knowledge across generations.
            </p>
          </IlluminatedCard>
          <IlluminatedCard title="The Scriptorium">
            <p>
              Within monastery walls, dedicated scribes labored by candlelight to copy texts that
              would survive centuries, their work a bridge between ancient and modern worlds.
            </p>
          </IlluminatedCard>
        </div>
      </section>

      {/* Divider */}
      <OrnamentalDivider symbol={MEDIEVAL_SYMBOLS.fourTeardrop} variant="heavy" />

      {/* Team Section */}
      <section className="py-16 px-8" style={{ backgroundColor: t.colors.bg }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          The Royal Court
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              role={member.role}
              initial={member.initial}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <OrnamentalDivider />

      {/* Buttons Section */}
      <section className="py-16 px-8 text-center" style={{ backgroundColor: t.colors.surface }}>
        <h2
          className="mb-12"
          style={{
            fontFamily: t.fonts.display,
            fontSize: '2.369rem',
            color: t.colors.primary,
          }}
        >
          Actions
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <MedievalButton variant="primary">Primary Action</MedievalButton>
          <MedievalButton variant="outline">Secondary</MedievalButton>
          <MedievalButton variant="gold">Royal Decree</MedievalButton>
        </div>
      </section>

      {/* Final Divider */}
      <OrnamentalDivider symbol={MEDIEVAL_SYMBOLS.fleurDeLis} variant="heavy" />

      {/* Footer */}
      <footer
        className="py-8 px-8 text-center"
        style={{
          backgroundColor: t.colors.primary,
          color: t.colors.white,
        }}
      >
        <p style={{ fontFamily: t.fonts.ui, fontSize: '0.875rem' }}>
          Medieval-Dominant Blend Theme
        </p>
        <p
          className="mt-2"
          style={{ fontFamily: t.fonts.ui, fontSize: '0.75rem', opacity: 0.7 }}
        >
          Medieval (60%) + Sanrok (25%) + Nous (15%)
        </p>
      </footer>
    </div>
  );
}
