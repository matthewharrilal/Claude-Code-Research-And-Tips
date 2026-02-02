'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// DESIGN TOKENS (inline for POC)
// ============================================
const tokens = {
  sanrok: {
    primary: '#FF0000',
    cream: '#FBF5EF',
    white: '#FFFFFF',
    black: '#171717',
    muted: '#B0B0B0',
  },
  medieval: {
    blue: '#1A44B8',
    white: '#FFFFFF',
  },
  nous: {
    black: '#000000',
    white: '#FFFFFF',
  },
};

type Theme = 'sanrok' | 'medieval' | 'nous';

// ============================================
// THEME SWITCHER
// ============================================
function ThemeSwitcher({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (t: Theme) => void;
}) {
  const themes: { id: Theme; label: string; color: string }[] = [
    { id: 'sanrok', label: 'Sanrok', color: tokens.sanrok.primary },
    { id: 'medieval', label: 'Medieval', color: tokens.medieval.blue },
    { id: 'nous', label: 'Nous', color: tokens.nous.black },
  ];

  return (
    <div className="inline-flex gap-1 rounded-full p-2 bg-white shadow-lg">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium
            transition-colors duration-150
            ${theme === t.id ? 'text-white' : 'text-zinc-700 hover:bg-zinc-100'}
          `}
        >
          {theme === t.id && (
            <motion.div
              layoutId="theme-pill"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: t.color }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
            />
          )}
          <span className="relative z-10">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ============================================
// SANROK COMPONENTS (inline for POC)
// ============================================
function HeroSection({ theme }: { theme: Theme }) {
  if (theme === 'medieval') {
    return (
      <section className="py-24 px-8 bg-white text-center">
        <h1
          className="text-6xl md:text-8xl leading-[0.85] mb-6"
          style={{ fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', serif", color: tokens.medieval.blue }}
        >
          Illuminated
        </h1>
        <p className="text-xl text-[#1A44B8] max-w-xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
          In the manner of ancient manuscripts, where every letter was a work of art
        </p>
      </section>
    );
  }

  if (theme === 'nous') {
    return (
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        {/* Repetition background */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none whitespace-nowrap"
              style={{ color: tokens.nous.black, opacity: 0.06 }}
            >
              RESEARCH · RESEARCH · RESEARCH · RESEARCH · RESEARCH
            </div>
          ))}
        </div>
        <div className="relative z-10 text-center">
          <h1
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
            style={{ color: tokens.nous.black }}
          >
            Maximum<br />Contrast
          </h1>
        </div>
      </section>
    );
  }

  // Default: Sanrok
  return (
    <section className="py-24 px-8" style={{ backgroundColor: tokens.sanrok.cream }}>
      <h1
        className="text-6xl md:text-[clamp(5rem,15vw,14rem)] font-normal leading-[0.85] tracking-[-0.03em] text-center"
        style={{ fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif", color: tokens.sanrok.black }}
      >
        <span className="italic">Creative</span>{' '}
        <span>Agency</span>
      </h1>
      <p className="text-center text-lg text-zinc-600 mt-8 max-w-xl mx-auto">
        Viewport-filling hero text with mixed italic/regular styling
      </p>
    </section>
  );
}

function TeamSection({ theme }: { theme: Theme }) {
  const teamMembers = [
    { name: 'Alex Chen', role: 'Lead Designer', rank: 1 },
    { name: 'Sarah Kim', role: 'Engineer', rank: 2 },
    { name: 'Mike Davis', role: 'Product', rank: 3 },
    { name: 'Emma Wilson', role: 'Research', rank: 4 },
  ];

  if (theme === 'medieval') {
    return (
      <section className="py-16 px-8 bg-white">
        <h2
          className="text-4xl text-center mb-12"
          style={{ fontFamily: "'UnifrakturMaguntia', serif", color: tokens.medieval.blue }}
        >
          The Royal Court
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center p-4 border-2 border-[#1A44B8]">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#1A44B8] flex items-center justify-center text-white text-2xl font-bold">
                {member.name[0]}
              </div>
              <h4 className="font-bold text-[#1A44B8] uppercase tracking-wide text-sm">{member.name}</h4>
              <p className="text-xs text-[#1A44B8]/70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (theme === 'nous') {
    return (
      <section className="py-16 px-8 bg-black text-white">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center p-6 border-4 border-white">
              <div className="w-20 h-20 mx-auto mb-3 border-4 border-white flex items-center justify-center text-2xl font-black">
                {member.name[0]}
              </div>
              <h4 className="font-black uppercase tracking-tight text-sm">{member.name}</h4>
              <p className="text-xs text-white/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Default: Sanrok with duotone
  return (
    <section className="py-16 px-8" style={{ backgroundColor: tokens.sanrok.cream }}>
      <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-900">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {/* Duotone image placeholder */}
            <div className="relative aspect-[3/4] bg-zinc-200">
              <div className="absolute inset-0 bg-[#FF0000] mix-blend-multiply opacity-85" />
              <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#FF0000] text-white rounded-full text-sm font-bold">
                {member.rank}
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wide">{member.name}</h4>
              <p className="text-[10px] text-zinc-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ChatSection({ theme }: { theme: Theme }) {
  const messages = [
    { sender: 'User', message: 'Can you help me design a landing page?', variant: 'user' as const },
    { sender: 'Assistant', message: 'I\'d love to help! Let me understand your brand and goals first.', variant: 'assistant' as const },
  ];

  if (theme !== 'sanrok') {
    return null; // Chat is Sanrok-specific
  }

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-900">Chat Interface</h2>
      <div className="max-w-md mx-auto space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`
              flex gap-3 p-4 rounded-2xl max-w-[360px]
              ${msg.variant === 'user'
                ? 'flex-row-reverse ml-auto bg-zinc-100'
                : 'bg-white border border-zinc-200'
              }
            `}
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#FF0000] flex-shrink-0 bg-zinc-200 flex items-center justify-center text-sm font-medium text-zinc-500">
              {msg.sender[0]}
            </div>
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wide text-zinc-400 mb-1">
                {msg.sender}
              </div>
              <div className="text-sm text-zinc-800">{msg.message}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TypographyScale({ theme }: { theme: Theme }) {
  const primaryColor = theme === 'sanrok' ? tokens.sanrok.black
    : theme === 'medieval' ? tokens.medieval.blue
    : tokens.nous.black;

  const fontDisplay = theme === 'sanrok'
    ? "'Instrument Serif', Georgia, serif"
    : theme === 'medieval'
    ? "'UnifrakturMaguntia', serif"
    : "'Inter', sans-serif";

  return (
    <section className="py-16 px-8" style={{ backgroundColor: theme === 'nous' ? tokens.nous.white : tokens.sanrok.cream }}>
      <h2 className="text-3xl font-semibold text-center mb-12" style={{ color: primaryColor }}>
        Typography Scale
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {[
          { label: 'Hero', size: 'clamp(3rem,8vw,6rem)', weight: theme === 'nous' ? 900 : 400 },
          { label: 'H1', size: '4.209rem', weight: theme === 'nous' ? 900 : 400 },
          { label: 'H2', size: '3.157rem', weight: theme === 'nous' ? 900 : 400 },
          { label: 'H3', size: '2.369rem', weight: 600 },
          { label: 'H4', size: '1.777rem', weight: 600 },
          { label: 'Body', size: '1rem', weight: 400 },
          { label: 'Small', size: '0.875rem', weight: 400 },
        ].map((item) => (
          <div key={item.label} className="flex items-baseline gap-4 border-b border-zinc-200 pb-4">
            <span className="w-16 text-sm text-zinc-500">{item.label}</span>
            <span
              style={{
                fontSize: item.size,
                fontWeight: item.weight,
                fontFamily: item.label.startsWith('H') || item.label === 'Hero' ? fontDisplay : "'Inter', sans-serif",
                color: primaryColor,
                lineHeight: 1.1,
                textTransform: theme === 'nous' && (item.label.startsWith('H') || item.label === 'Hero') ? 'uppercase' : 'none',
                letterSpacing: theme === 'nous' ? '-0.03em' : '-0.02em',
              }}
            >
              Sample Text
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ColorPalette({ theme }: { theme: Theme }) {
  const palettes: Record<Theme, { name: string; value: string }[]> = {
    sanrok: [
      { name: 'Primary (Red)', value: tokens.sanrok.primary },
      { name: 'Cream', value: tokens.sanrok.cream },
      { name: 'White', value: tokens.sanrok.white },
      { name: 'Black', value: tokens.sanrok.black },
      { name: 'Muted', value: tokens.sanrok.muted },
    ],
    medieval: [
      { name: 'Royal Blue', value: tokens.medieval.blue },
      { name: 'White', value: tokens.medieval.white },
    ],
    nous: [
      { name: 'Black', value: tokens.nous.black },
      { name: 'White', value: tokens.nous.white },
    ],
  };

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-900">Color Palette</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {palettes[theme].map((color) => (
          <div key={color.name} className="text-center">
            <div
              className="w-24 h-24 rounded-xl shadow-lg border border-zinc-200 mb-2"
              style={{ backgroundColor: color.value }}
            />
            <p className="text-sm font-medium text-zinc-800">{color.name}</p>
            <p className="text-xs text-zinc-500 font-mono">{color.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DuotoneSection() {
  return (
    <section className="py-16 px-8" style={{ backgroundColor: tokens.sanrok.cream }}>
      <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-900">Duotone Image Treatment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {['Sanrok (Red)', 'Medieval (Blue)', 'Nous (B&W)'].map((label, i) => {
          const colors = [tokens.sanrok.primary, tokens.medieval.blue, 'transparent'];
          const isNous = i === 2;
          return (
            <div key={label} className="text-center">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-300 mb-3">
                {!isNous && (
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-85"
                    style={{ backgroundColor: colors[i] }}
                  />
                )}
                {isNous && (
                  <div className="absolute inset-0 bg-zinc-800" />
                )}
              </div>
              <p className="text-sm font-medium text-zinc-700">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MedievalExtras() {
  return (
    <section className="py-16 px-8 bg-white">
      <h2
        className="text-4xl text-center mb-12"
        style={{ fontFamily: "'UnifrakturMaguntia', serif", color: tokens.medieval.blue }}
      >
        Medieval Elements
      </h2>

      {/* Initial Cap Demo */}
      <div className="max-w-xl mx-auto mb-12">
        <p className="text-[#1A44B8] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          <span
            className="float-left pr-3 pt-1 text-7xl leading-[0.75]"
            style={{ fontFamily: "'UnifrakturMaguntia', serif", color: tokens.medieval.blue }}
          >
            I
          </span>
          n the tradition of illuminated manuscripts, the initial capital letter serves not merely as the beginning of text, but as a gateway into the world of ideas that follow. Each decorated letter was a meditation on the importance of what was to come.
        </p>
      </div>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center gap-4 py-6 text-[#1A44B8] max-w-md mx-auto">
        <div className="flex-1 h-px bg-current" />
        <span className="text-2xl">⚜</span>
        <div className="flex-1 h-px bg-current" />
      </div>

      {/* Two Column Layout */}
      <div
        className="max-w-2xl mx-auto text-[#1A44B8] text-justify leading-relaxed"
        style={{
          fontFamily: 'Georgia, serif',
          columnCount: 2,
          columnGap: '2rem',
          columnRule: '1px solid #1A44B8',
        }}
      >
        <p className="mb-4">
          The medieval period saw the development of extraordinary craftsmanship in the production of books. Scribes worked painstakingly to copy texts by hand.
        </p>
        <p>
          Gold leaf was applied to create radiant initial letters that would catch the light and draw the reader&apos;s eye to the beginning of important passages.
        </p>
      </div>
    </section>
  );
}

function NousExtras() {
  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-12">
        Nous Research Elements
      </h2>

      {/* Logo Frame Demo */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center justify-center p-8 border-8 border-white">
          <span className="text-3xl font-black uppercase tracking-tighter">NOUS</span>
        </div>
      </div>

      {/* Thick Divider */}
      <div className="h-2 bg-white max-w-md mx-auto mb-12" />

      {/* Grid Layout */}
      <div
        className="max-w-2xl mx-auto grid grid-cols-3 gap-6 border-t-2 border-b-2 border-white py-6"
      >
        {['Research', 'Deploy', 'Scale'].map((item, i) => (
          <div key={item} className={`p-4 ${i > 0 ? 'border-l border-white' : ''}`}>
            <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item}</h4>
            <p className="text-sm text-white/60">Maximum impact through maximum contrast.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function DesignSystemPOC() {
  const [theme, setTheme] = useState<Theme>('sanrok');

  return (
    <div className="min-h-screen">
      {/* Fixed Theme Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>

      {/* Page Header */}
      <header className="py-8 px-8 bg-zinc-900 text-white">
        <h1 className="text-2xl font-bold mb-2">Design System POC</h1>
        <p className="text-zinc-400">
          Extracted from Sanrok, Medieval, and Nous Research references
        </p>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero */}
          <HeroSection theme={theme} />

          {/* Color Palette */}
          <ColorPalette theme={theme} />

          {/* Typography Scale */}
          <TypographyScale theme={theme} />

          {/* Theme-specific extras */}
          {theme === 'sanrok' && <DuotoneSection />}
          {theme === 'medieval' && <MedievalExtras />}
          {theme === 'nous' && <NousExtras />}

          {/* Team Section */}
          <TeamSection theme={theme} />

          {/* Chat (Sanrok only) */}
          <ChatSection theme={theme} />
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-8 bg-zinc-100 text-center text-zinc-600">
        <p className="text-sm">
          Design tokens, typography, and components extracted from reference images.
        </p>
        <p className="text-xs text-zinc-400 mt-2">
          Verified via Playwright MCP inspection of live Sanrok site.
        </p>
      </footer>
    </div>
  );
}
