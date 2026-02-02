'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SKETCHBOOK BLEND POC
 *
 * The Vision:
 * - "I'm holding someone's personal notebook, still warm from their hand"
 * - Two modes: Pamphlet (sparse) + Documentation (dense)
 * - Blue dominant (Medieval #1A44B8) with red accent (Sanrok #FF0000)
 * - Right-aligned layout for pamphlet sections
 * - Physical narrow format like a thin Moleskine
 * - Typography that feels like handwriting with colored pens
 */

// ============================================
// DESIGN TOKENS - The Blend
// ============================================
const tokens = {
  // Medieval blue as primary - "blue pen ink"
  blue: '#1A44B8',
  blueLight: '#3A5EC8',
  blueMuted: 'rgba(26, 68, 184, 0.15)',

  // Sanrok red as accent - sparingly
  red: '#FF0000',
  redMuted: 'rgba(255, 0, 0, 0.1)',

  // Warm paper tones
  cream: '#FBF5EF',
  paper: '#F8F4ED',
  paperDark: '#EDE6DB',

  // Ink tones (not pure black - feels digital)
  inkDark: '#1A1A2E',
  inkMedium: '#3D3D5C',
  inkLight: '#6B6B8C',
};

type Mode = 'pamphlet' | 'documentation';

// ============================================
// MODE SWITCHER
// ============================================
function ModeSwitcher({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {(['pamphlet', 'documentation'] as const).map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium
            transition-all duration-200
            ${mode === m
              ? 'text-white shadow-lg'
              : 'bg-white text-[#1A44B8] border border-[#1A44B8]/20 hover:border-[#1A44B8]/40'
            }
          `}
          style={mode === m ? { backgroundColor: tokens.blue } : undefined}
        >
          {m === 'pamphlet' ? 'Pamphlet' : 'Documentation'}
        </button>
      ))}
    </div>
  );
}

// ============================================
// PAMPHLET MODE COMPONENTS
// ============================================

function PamphletCover() {
  return (
    <section
      className="min-h-screen relative"
      style={{
        backgroundColor: tokens.cream,
        padding: '6% 8%',
      }}
    >
      {/* ========================================
          ALL CONTENT STARTS AT CENTER, FLOWS RIGHT
          Left half = empty white space (breathing room)
          ======================================== */}

      {/* TOP SECTION: Title + Description */}
      <div
        style={{
          marginLeft: '45%', // Start at ~center
          paddingTop: '4%',
        }}
      >
        {/* MASSIVE TITLE */}
        <h1
          className="leading-[0.78] tracking-[-0.02em]"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            color: tokens.blue,
            fontSize: 'clamp(80px, 18vw, 240px)',
            marginBottom: '4%',
          }}
        >
          <span className="italic">Claude</span>
        </h1>

        {/* DESCRIPTION BLOCK */}
        <div>
          <p
            className="uppercase leading-[1.6]"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 'clamp(10px, 1.1vw, 14px)',
              letterSpacing: '0.06em',
              color: tokens.inkDark,
              fontWeight: 500,
            }}
          >
            CLAUDE CODE MASTERY: OFFICIAL REFERENCE GUIDE
            <br />
            FOR{'\u00A0\u00A0\u00A0\u00A0'}ORCHESTRATION{'\u00A0\u00A0\u00A0\u00A0'}PATTERNS{'\u00A0\u00A0\u00A0\u00A0'}AND
            <br />
            AUTONOMOUS AGENTS, DEVELOPERS & BUILDERS
          </p>
          {/* Underline rule */}
          <div
            className="mt-3"
            style={{
              height: '2px',
              backgroundColor: tokens.inkDark,
              width: '100%',
            }}
          />
        </div>
      </div>

      {/* MIDDLE-RIGHT: Metadata block */}
      <div
        className="absolute text-right"
        style={{
          right: '8%',
          top: '52%',
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 'clamp(10px, 1.1vw, 14px)',
          lineHeight: 1.7,
          color: tokens.inkMedium,
        }}
      >
        <div>Compiled from 150+ Sources</div>
        <div>Boris Cherny, Matt Pocock, Steve Yegge</div>
        <div>Community Patterns & Innovations</div>
        <div style={{ color: tokens.blue }}>CLAUDE CODE RESEARCH</div>
        <div style={{ color: tokens.inkDark, fontWeight: 600, marginTop: '0.5em' }}>FEBRUARY 2026</div>
        <div style={{ color: tokens.red, fontWeight: 600 }}>FIRST EDITION</div>
      </div>

      {/* BOTTOM-RIGHT: Tiny footer */}
      <div
        className="absolute"
        style={{
          right: '8%',
          bottom: '5%',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: tokens.inkLight,
          textTransform: 'uppercase',
        }}
      >
        TOWARDS MASTERY
      </div>
    </section>
  );
}

function PamphletSpread() {
  return (
    <section
      className="min-h-screen flex flex-col justify-between p-8 md:p-12"
      style={{ backgroundColor: tokens.paper }}
    >
      {/* TOP: Chapter header */}
      <div className="flex justify-between items-start pt-8">
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.inkLight }}
        >
          CHAPTER ONE
        </div>
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.inkLight }}
        >
          01
        </div>
      </div>

      {/* MIDDLE: Content area */}
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-[600px]">
          {/* Large chapter title */}
          <h2
            className="text-5xl md:text-7xl mb-12 leading-[0.9] tracking-[-0.02em]"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: tokens.blue,
            }}
          >
            The Pain<br />
            <span className="italic">You Know</span>
          </h2>

          {/* Body text - justified like Nous */}
          <div
            className="text-base md:text-lg leading-[1.9] text-justify mb-8"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: tokens.inkMedium,
            }}
          >
            <p className="mb-6">
              You sit down at 9 AM with a clear head. By 2 PM, the context window is groaning.
              By 6 PM, Claude is hallucinating imports. By 12:30 AM, you give up with an incomplete feature.
            </p>
            <p>
              This is Level 0. The pain is familiar. The solution is not to push harder—it&apos;s to
              <span style={{ color: tokens.red }}> delegate differently</span>.
            </p>
          </div>

          {/* Underline separator */}
          <div className="border-b-2 mb-4" style={{ borderColor: tokens.inkDark }} />
        </div>
      </div>

      {/* BOTTOM: Page reference */}
      <div className="flex justify-between items-end">
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.inkLight }}
        >
          LEVEL ZERO
        </div>
        <div
          className="text-xs text-right"
          style={{
            fontFamily: "Georgia, serif",
            color: tokens.inkLight,
          }}
        >
          <span style={{ color: tokens.red }}>※</span> See: Ralph Wiggum Loop, page 12
        </div>
      </div>
    </section>
  );
}

function PamphletQuote() {
  return (
    <section
      className="min-h-screen flex flex-col justify-between p-8 md:p-12"
      style={{ backgroundColor: tokens.cream }}
    >
      {/* TOP: Section marker */}
      <div className="flex justify-between items-start pt-8">
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.inkLight }}
        >
          PRINCIPLE
        </div>
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.red }}
        >
          ※
        </div>
      </div>

      {/* MIDDLE: The quote - large and impactful */}
      <div className="flex-1 flex items-center justify-end">
        <blockquote className="max-w-[700px] text-right">
          <p
            className="text-4xl md:text-6xl leading-[1.15] mb-8 italic tracking-[-0.02em]"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: tokens.blue,
            }}
          >
            Fresh context
            <br />per iteration.
            <br />
            <span className="not-italic">External state</span>
            <br />over internal memory.
          </p>
        </blockquote>
      </div>

      {/* BOTTOM: Attribution - right-aligned, stacked */}
      <div className="flex justify-between items-end">
        <div
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: tokens.inkLight }}
        >
          THE RALPH PATTERN
        </div>
        <div className="text-right">
          <div
            className="text-xs uppercase tracking-[0.15em]"
            style={{ color: tokens.inkMedium }}
          >
            MATT POCOCK
          </div>
          <div
            className="text-[10px] uppercase tracking-[0.2em] mt-1"
            style={{ color: tokens.inkLight }}
          >
            @MATTPOCOCKUK
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DOCUMENTATION MODE COMPONENTS
// ============================================

function DocsHeader() {
  return (
    <header
      className="py-6 px-8 border-b"
      style={{
        backgroundColor: tokens.cream,
        borderColor: tokens.blueMuted,
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-baseline gap-4">
          <h1
            className="text-2xl"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: tokens.blue,
            }}
          >
            Claude Code Mastery
          </h1>
          <span className="text-xs uppercase tracking-widest" style={{ color: tokens.inkLight }}>
            Reference Documentation
          </span>
        </div>
      </div>
    </header>
  );
}

function DocsContent() {
  return (
    <main
      className="py-12 px-8"
      style={{ backgroundColor: tokens.paper }}
    >
      <div className="max-w-[800px] mx-auto">
        {/* Dense but readable */}
        <article>
          <h2
            className="text-3xl mb-6"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: tokens.blue,
            }}
          >
            The Complexity Ladder
          </h2>

          <p
            className="text-base leading-[1.8] mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: tokens.inkMedium,
            }}
          >
            Eight levels of orchestration capability, from single-session supervision to
            factory-scale autonomous systems. Each level unlocks new capabilities while
            requiring specific architectural prerequisites.
          </p>

          {/* Dense info table - docs mode */}
          <div
            className="rounded-lg p-6 mb-8"
            style={{ backgroundColor: tokens.cream }}
          >
            <table className="w-full text-sm" style={{ color: tokens.inkMedium }}>
              <thead>
                <tr className="border-b" style={{ borderColor: tokens.blueMuted }}>
                  <th className="text-left py-2 font-medium" style={{ color: tokens.blue }}>Level</th>
                  <th className="text-left py-2 font-medium" style={{ color: tokens.blue }}>Pattern</th>
                  <th className="text-left py-2 font-medium" style={{ color: tokens.blue }}>Unlock Requirement</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "Georgia, serif" }}>
                {[
                  { level: 0, pattern: 'Single Session', unlock: 'Show up' },
                  { level: 1, pattern: 'Ralph Loop', unlock: 'External state + completion markers' },
                  { level: 2, pattern: 'CC Mirror', unlock: 'Task decomposition + verification' },
                  { level: 3, pattern: 'Specialized Workers', unlock: 'Role definition + handoff protocols' },
                  { level: 4, pattern: 'Self-Healing', unlock: 'Error detection + recovery loops' },
                  { level: 5, pattern: 'Swarm Intelligence', unlock: 'Dynamic routing + consensus' },
                ].map((row) => (
                  <tr key={row.level} className="border-b last:border-0" style={{ borderColor: tokens.blueMuted }}>
                    <td className="py-3">
                      <span
                        className="inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: row.level <= 1 ? tokens.inkLight : tokens.blue }}
                      >
                        {row.level}
                      </span>
                    </td>
                    <td className="py-3">{row.pattern}</td>
                    <td className="py-3 text-xs" style={{ color: tokens.inkLight }}>{row.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dense code block */}
          <div
            className="rounded-lg overflow-hidden mb-8"
            style={{ backgroundColor: tokens.inkDark }}
          >
            <div
              className="px-4 py-2 text-xs uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.5)' }}
            >
              Ralph Loop Pattern
            </div>
            <pre className="p-4 text-sm text-white/90 font-mono overflow-x-auto">
{`while :; do
  cat PROMPT.md | claude-code

  if grep -q "DONE" progress.txt; then
    break
  fi
done`}
            </pre>
          </div>

          {/* Annotation callout - red accent for important */}
          <aside
            className="flex gap-3 p-4 rounded-lg mb-8"
            style={{ backgroundColor: tokens.redMuted }}
          >
            <span style={{ color: tokens.red }}>※</span>
            <p className="text-sm" style={{ color: tokens.inkMedium }}>
              <strong style={{ color: tokens.red }}>Important:</strong> The Ralph pattern requires
              external state files (progress.txt, prd.json) to persist across iterations.
              Without these, each session starts from zero context.
            </p>
          </aside>
        </article>
      </div>
    </main>
  );
}

function DocsSidebar() {
  const sections = [
    { title: 'Introduction', active: false },
    { title: 'The Pain You Know', active: false },
    { title: 'Complexity Ladder', active: true },
    { title: 'Ralph Pattern', active: false },
    { title: 'CC Mirror', active: false },
    { title: 'Gas Town', active: false },
  ];

  return (
    <nav
      className="fixed left-0 top-0 bottom-0 w-48 p-6 border-r"
      style={{
        backgroundColor: tokens.cream,
        borderColor: tokens.blueMuted,
      }}
    >
      <div
        className="text-xs uppercase tracking-widest mb-6"
        style={{ color: tokens.inkLight }}
      >
        Contents
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.title}>
            <a
              href="#"
              className="block text-sm py-1 transition-colors"
              style={{
                fontFamily: "Georgia, serif",
                color: section.active ? tokens.blue : tokens.inkLight,
                fontWeight: section.active ? 500 : 400,
              }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function SketchbookBlendPOC() {
  const [mode, setMode] = useState<Mode>('pamphlet');

  return (
    <div className="min-h-screen" style={{ backgroundColor: tokens.cream }}>
      <ModeSwitcher mode={mode} setMode={setMode} />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {mode === 'pamphlet' ? (
            <>
              <PamphletCover />
              <PamphletSpread />
              <PamphletQuote />

              {/* Colophon - edge detail */}
              <footer
                className="py-8 px-8 text-right"
                style={{ backgroundColor: tokens.paperDark }}
              >
                <p className="text-xs uppercase tracking-widest" style={{ color: tokens.inkLight }}>
                  Written with blue pen and red annotations
                </p>
                <p className="text-xs mt-1" style={{ color: tokens.blue }}>
                  A Sketchbook Blend · Medieval × Sanrok × Nous
                </p>
              </footer>
            </>
          ) : (
            <div className="pl-48">
              <DocsSidebar />
              <DocsHeader />
              <DocsContent />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Design system info overlay */}
      <div
        className="fixed bottom-4 left-4 p-4 rounded-lg max-w-xs text-xs"
        style={{
          backgroundColor: 'rgba(26, 68, 184, 0.95)',
          color: 'white',
        }}
      >
        <div className="font-bold mb-2">Blend Formula</div>
        <div className="space-y-1 opacity-80">
          <div>Primary: Medieval Blue #1A44B8</div>
          <div>Accent: Sanrok Red #FF0000</div>
          <div>Display: Instrument Serif</div>
          <div>Body: Georgia (old-style serif)</div>
          <div>Layout: Narrow Moleskine format</div>
        </div>
      </div>
    </div>
  );
}
