'use client'

/**
 * Personal Notebook Component
 *
 * Documentation as someone's annotated field notebook.
 * Visual metaphor: "Discovering someone's personal mastery journal"
 *
 * Design Elements:
 * - Cream paper with blue notebook lines (30px intervals)
 * - Red margin line at 60px from left
 * - Handwritten headers (Caveat font) + typed body (Georgia)
 * - Sticky notes for callouts (yellow/pink/blue)
 * - Index cards "taped in" for code blocks
 * - Margin annotations with hand-drawn arrows
 * - Paper grain texture via CSS
 *
 * Colors: Blue #1A44B8, Red #FF0000, Cream #FBF5EF
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, ReactNode } from 'react'

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const BRAND_BLUE = '#1A44B8'
const BRAND_RED = '#FF0000'
const BRAND_CREAM = '#FBF5EF'

const tokens = {
  blue: BRAND_BLUE,
  blueLight: '#3A5EC8',
  blueFaded: 'rgba(26, 68, 184, 0.1)',
  red: BRAND_RED,
  redFaded: 'rgba(255, 0, 0, 0.1)',
  cream: BRAND_CREAM,
  paper: '#F8F4ED',
  paperDark: '#EDE6DB',
  inkDark: '#1A1A2E',
  inkMedium: '#3D3D5C',
  inkLight: '#6B6B8C',
  // Sticky note colors
  stickyYellow: '#FFF9C4',
  stickyPink: '#FCE4EC',
  stickyBlue: '#E3F2FD',
  stickyGreen: '#E8F5E9',
  // Notebook line color
  lineBlue: 'rgba(26, 68, 184, 0.15)',
  marginRed: 'rgba(255, 0, 0, 0.4)',
}

// ============================================================================
// LEVEL DATA
// ============================================================================

interface LevelData {
  level: number
  title: string
  subtitle: string
  description: string
  annotation?: string
  unlockRequirement: string
  codeExample?: string
  stickyNote?: {
    content: string
    color: 'yellow' | 'pink' | 'blue' | 'green'
  }
}

const LEVELS: LevelData[] = [
  {
    level: 0,
    title: 'The Pain You Know',
    subtitle: 'Single Session Supervision',
    description: 'Manual oversight. Context fills by 2PM. Quality degrades by 6PM. You give up at 12:30 AM with an incomplete feature. This is where everyone starts.',
    annotation: 'sound familiar?',
    unlockRequirement: 'Show up',
    stickyNote: {
      content: 'This is Level 0. The pain is familiar.',
      color: 'yellow',
    },
  },
  {
    level: 1,
    title: 'Persistent Context',
    subtitle: 'CLAUDE.md + Slash Commands',
    description: 'Project context persists. Reusable workflows via /commands. Claude remembers your architecture between sessions.',
    annotation: 'first breakthrough!',
    unlockRequirement: 'Document your project patterns',
    codeExample: `# .claude/commands/review.md
Review the current git diff for:
1. Logic errors
2. Missing error handling`,
    stickyNote: {
      content: 'CLAUDE.md = your project\'s memory',
      color: 'blue',
    },
  },
  {
    level: 2,
    title: 'The Helper Squad',
    subtitle: 'Subagents + Hooks',
    description: 'Specialized agents handle specific tasks. Hooks automate responses to events. Claude becomes a small team with different roles.',
    unlockRequirement: 'Understand tool system + shell scripting',
  },
  {
    level: 3,
    title: 'The Ralph Pattern',
    subtitle: 'Basic Continuous Loop',
    description: 'Claude runs in a loop until complete. Fresh context per iteration. External memory via git and files. Your first taste of autonomous work.',
    annotation: 'this changes everything',
    unlockRequirement: 'Trust in unattended operation',
    codeExample: `while :; do
  claude "Check progress.txt, complete next task"
  sleep 5
done`,
    stickyNote: {
      content: 'Named after Ralph Wiggum\'s unwavering persistence',
      color: 'pink',
    },
  },
  {
    level: 4,
    title: 'Full Ralph',
    subtitle: 'PRD-Driven Loops',
    description: 'JSON-based task tracking. Acceptance criteria. Quality gates. Real features shipped overnight while you sleep.',
    unlockRequirement: 'PRD writing skills + test coverage',
  },
  {
    level: 5,
    title: 'The Orchestra',
    subtitle: 'Multi-Agent Coordination',
    description: 'Central orchestrator delegates to workers. Hub-and-spoke topology. Parallel execution with model tiering for cost optimization.',
    annotation: 'CC Mirror unlocks this',
    unlockRequirement: 'CC Mirror setup + coordination skills',
    stickyNote: {
      content: 'Orchestrator = Opus, Workers = Sonnet/Haiku',
      color: 'green',
    },
  },
  {
    level: 6,
    title: 'The Swarm',
    subtitle: 'Parallel Worktrees',
    description: 'Git worktrees for isolation. Multiple Ralph loops simultaneously. Merge orchestration brings work together.',
    unlockRequirement: 'Git worktree mastery + merge strategies',
  },
  {
    level: 7,
    title: 'Gas Town',
    subtitle: 'Factory Scale Operations',
    description: 'Agent factory architecture. 7+ specialized roles: Mayor, Deacon, Refinery, Dogs, Tankers. Self-improving systems. Human becomes Product Manager.',
    annotation: 'the summit',
    unlockRequirement: 'All previous levels + operational maturity',
    codeExample: `# Steve Yegge's Gas Town
Mayor       → strategic decisions
Deacon      → code quality guardian
Refinery    → context distillation
Dogs        → parallel task runners
Tankers     → inter-agent comms`,
    stickyNote: {
      content: 'Human = PM, AI = entire engineering team',
      color: 'yellow',
    },
  },
]

// ============================================================================
// PAPER BACKGROUND COMPONENT
// ============================================================================

function NotebookPaper({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: tokens.cream,
        // Paper texture via CSS
        backgroundImage: `
          linear-gradient(${tokens.lineBlue} 1px, transparent 1px),
          linear-gradient(90deg, ${tokens.marginRed} 1px, transparent 1px)
        `,
        backgroundSize: '100% 30px, 60px 100%',
        backgroundPosition: '0 0, 60px 0',
      }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {children}
    </div>
  )
}

// ============================================================================
// STICKY NOTE COMPONENT
// ============================================================================

interface StickyNoteProps {
  content: string
  color: 'yellow' | 'pink' | 'blue' | 'green'
  rotation?: number
  className?: string
}

function StickyNote({ content, color, rotation = 0, className = '' }: StickyNoteProps) {
  const bgColors = {
    yellow: tokens.stickyYellow,
    pink: tokens.stickyPink,
    blue: tokens.stickyBlue,
    green: tokens.stickyGreen,
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation - 10 }}
      animate={{ scale: 1, rotate: rotation }}
      whileHover={{ scale: 1.05, rotate: rotation + 2, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative p-4 shadow-lg cursor-default ${className}`}
      style={{
        backgroundColor: bgColors[color],
        width: '180px',
        minHeight: '100px',
        // Sticky note curl effect
        boxShadow: '2px 4px 8px rgba(0,0,0,0.15), inset 0 -4px 8px rgba(0,0,0,0.02)',
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Tape effect */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      />
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: '"Caveat", cursive',
          fontSize: '16px',
          color: tokens.inkDark,
        }}
      >
        {content}
      </p>
    </motion.div>
  )
}

// ============================================================================
// MARGIN ANNOTATION COMPONENT
// ============================================================================

interface MarginAnnotationProps {
  text: string
  side?: 'left' | 'right'
}

function MarginAnnotation({ text, side = 'right' }: MarginAnnotationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'right' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`absolute ${side === 'right' ? '-right-4' : 'left-0'} flex items-center gap-2`}
      style={{ width: '200px' }}
    >
      {side === 'left' && (
        <span style={{ color: tokens.red, fontSize: '24px' }}>←</span>
      )}
      <span
        className="italic"
        style={{
          fontFamily: '"Caveat", cursive',
          fontSize: '18px',
          color: tokens.red,
        }}
      >
        {text}
      </span>
      {side === 'right' && (
        <span style={{ color: tokens.red, fontSize: '24px' }}>→</span>
      )}
    </motion.div>
  )
}

// ============================================================================
// INDEX CARD (CODE BLOCK) COMPONENT
// ============================================================================

interface IndexCardProps {
  code: string
  label?: string
  rotation?: number
}

function IndexCard({ code, label, rotation = 1 }: IndexCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, rotate: rotation - 2 }}
      animate={{ y: 0, opacity: 1, rotate: rotation }}
      whileHover={{ y: -4, rotate: 0, boxShadow: '4px 8px 16px rgba(0,0,0,0.2)' }}
      className="relative bg-white rounded-sm p-4 cursor-pointer"
      style={{
        boxShadow: '2px 4px 8px rgba(0,0,0,0.15)',
        border: '1px solid #e5e5e5',
        // Index card lines
        backgroundImage: 'linear-gradient(transparent 0px, transparent 23px, #93c5fd 24px)',
        backgroundSize: '100% 24px',
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={handleCopy}
    >
      {/* Tape pieces */}
      <div
        className="absolute -top-2 left-4 w-8 h-3"
        style={{
          background: 'rgba(255, 255, 200, 0.8)',
          transform: 'rotate(-3deg)',
        }}
      />
      <div
        className="absolute -top-2 right-4 w-8 h-3"
        style={{
          background: 'rgba(255, 255, 200, 0.8)',
          transform: 'rotate(3deg)',
        }}
      />

      {label && (
        <div
          className="mb-2 text-xs uppercase tracking-widest"
          style={{ color: tokens.blue, fontWeight: 600 }}
        >
          {label}
        </div>
      )}

      <pre
        className="text-sm overflow-x-auto"
        style={{
          fontFamily: 'ui-monospace, monospace',
          color: tokens.inkDark,
          lineHeight: 1.6,
        }}
      >
        {code}
      </pre>

      {/* Copy indicator */}
      <div
        className="absolute bottom-2 right-2 text-xs transition-opacity"
        style={{
          color: copied ? tokens.blue : tokens.inkLight,
          opacity: copied ? 1 : 0.5,
        }}
      >
        {copied ? 'Copied!' : 'Click to copy'}
      </div>
    </motion.div>
  )
}

// ============================================================================
// LEVEL ENTRY COMPONENT
// ============================================================================

interface LevelEntryProps {
  level: LevelData
  isExpanded: boolean
  onToggle: () => void
}

function LevelEntry({ level, isExpanded, onToggle }: LevelEntryProps) {
  return (
    <motion.article
      layout
      className="relative mb-12 cursor-pointer"
      style={{ marginLeft: '80px', marginRight: '220px' }}
      onClick={onToggle}
    >
      {/* Level number in margin */}
      <div
        className="absolute -left-16 top-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
        style={{ backgroundColor: level.level <= 3 ? tokens.blue : tokens.red }}
      >
        {level.level}
      </div>

      {/* Handwritten title */}
      <motion.h2
        layout="position"
        className="mb-2"
        style={{
          fontFamily: '"Caveat", cursive',
          fontSize: '32px',
          color: tokens.blue,
          lineHeight: 1.2,
        }}
      >
        {level.title}
      </motion.h2>

      {/* Typed subtitle */}
      <p
        className="uppercase tracking-widest text-xs mb-4"
        style={{ color: tokens.inkLight }}
      >
        {level.subtitle}
      </p>

      {/* Description - Georgia body text */}
      <p
        className="leading-relaxed mb-4"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          color: tokens.inkMedium,
          lineHeight: 1.8,
        }}
      >
        {level.description}
      </p>

      {/* Margin annotation */}
      {level.annotation && (
        <div className="absolute -right-48 top-8 transform translate-x-full">
          <MarginAnnotation text={level.annotation} />
        </div>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Unlock requirement */}
            <div
              className="mb-6 p-3 rounded"
              style={{
                backgroundColor: tokens.blueFaded,
                borderLeft: `3px solid ${tokens.blue}`,
              }}
            >
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: tokens.blue }}>
                Unlock Requirement
              </span>
              <p className="mt-1" style={{ fontFamily: 'Georgia, serif', color: tokens.inkMedium }}>
                {level.unlockRequirement}
              </p>
            </div>

            {/* Code example as index card */}
            {level.codeExample && (
              <div className="mb-6">
                <IndexCard
                  code={level.codeExample}
                  label={`Level ${level.level} Pattern`}
                  rotation={Math.random() * 4 - 2}
                />
              </div>
            )}

            {/* Sticky note */}
            {level.stickyNote && (
              <div className="absolute -right-56 top-32">
                <StickyNote
                  content={level.stickyNote.content}
                  color={level.stickyNote.color}
                  rotation={Math.random() * 8 - 4}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand indicator */}
      <div
        className="text-xs mt-4"
        style={{ color: tokens.inkLight }}
      >
        {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
      </div>

      {/* Underline separator */}
      <div
        className="mt-6 border-b"
        style={{ borderColor: tokens.lineBlue, borderWidth: '1px' }}
      />
    </motion.article>
  )
}

// ============================================================================
// NOTEBOOK HEADER COMPONENT
// ============================================================================

function NotebookHeader() {
  return (
    <header
      className="pt-16 pb-12 relative"
      style={{ marginLeft: '80px', marginRight: '80px' }}
    >
      {/* Date stamp in corner */}
      <div
        className="absolute top-4 right-4 text-xs uppercase tracking-widest"
        style={{
          fontFamily: 'ui-monospace, monospace',
          color: tokens.inkLight,
        }}
      >
        February 2026
      </div>

      {/* Main title - handwritten style */}
      <h1
        className="mb-4"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontSize: 'clamp(48px, 8vw, 80px)',
          color: tokens.blue,
          lineHeight: 0.9,
        }}
      >
        <span className="italic">Claude Code</span>
        <br />
        Mastery Notes
      </h1>

      {/* Subtitle underline */}
      <div
        className="w-64 h-0.5 mb-6"
        style={{ backgroundColor: tokens.inkDark }}
      />

      <p
        className="max-w-xl"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          color: tokens.inkMedium,
          lineHeight: 1.7,
        }}
      >
        A personal journey through 8 levels of Claude orchestration.
        From single-session pain to factory-scale autonomy.
      </p>

      {/* Opening sticky note */}
      <div className="absolute -right-4 top-16">
        <StickyNote
          content="Start at Level 0. No shortcuts. Each level unlocks the next."
          color="yellow"
          rotation={3}
        />
      </div>
    </header>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function PersonalNotebook() {
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(new Set([0]))

  const toggleLevel = useCallback((level: number) => {
    setExpandedLevels(prev => {
      const next = new Set(prev)
      if (next.has(level)) {
        next.delete(level)
      } else {
        next.add(level)
      }
      return next
    })
  }, [])

  return (
    <NotebookPaper>
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <NotebookHeader />

        {/* Level entries */}
        <main className="mt-8">
          {LEVELS.map(level => (
            <LevelEntry
              key={level.level}
              level={level}
              isExpanded={expandedLevels.has(level.level)}
              onToggle={() => toggleLevel(level.level)}
            />
          ))}
        </main>

        {/* Footer note */}
        <footer className="mt-16 text-center">
          <p
            style={{
              fontFamily: '"Caveat", cursive',
              fontSize: '20px',
              color: tokens.inkLight,
            }}
          >
            ~ end of notes ~
          </p>
          <p
            className="mt-2 text-xs uppercase tracking-widest"
            style={{ color: tokens.blue }}
          >
            Personal Notebook · Claude Code Research
          </p>
        </footer>
      </div>
    </NotebookPaper>
  )
}

// ============================================================================
// DEMO WRAPPER
// ============================================================================

export function PersonalNotebookDemo() {
  return (
    <>
      {/* Import Caveat font for handwriting */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <PersonalNotebook />
    </>
  )
}

export default PersonalNotebook
