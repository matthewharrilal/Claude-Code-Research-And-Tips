'use client'

/**
 * Dense Brutalist Vision POC
 *
 * OLD design density + NEW component quality + Brutalist typography
 * - Playfair Display headings, Inter Light body
 * - Uppercase labels with wide letter-spacing
 * - Tight spacing, wide content, minimal white space
 * - Multi-color Activity Zone cards (kept from previous design)
 */

import { motion } from 'framer-motion'
import {
  Sparkles, Target, Flame, Link2, TrendingUp, Lightbulb,
  BookOpen, Users, Zap, ChevronRight, FileCode, Copy, Check,
  Layers, GitBranch, Bot, Factory, Network, Brain
} from 'lucide-react'
import { useState, ReactNode } from 'react'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type ActivityCardType = 'pattern' | 'story' | 'connection' | 'constraint' | 'evolution' | 'reflection'

interface ActivityZoneCardProps {
  type: ActivityCardType
  icon: React.ElementType
  label: string
  title: string
  subtitle?: string
  children: ReactNode
}

interface LevelCardProps {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement: string
  codeExample?: string
}

interface GotchaCardProps {
  problem: string
  symptom: string
  recovery: string[]
}

// ============================================================================
// COLOR SYSTEM (Multi-color Activity Cards preserved)
// ============================================================================

const activityColors: Record<ActivityCardType, {
  gradientFrom: string
  gradientTo: string
  accent: string
  border: string
  text: string
}> = {
  pattern: {
    gradientFrom: '#CCFBF1', gradientTo: '#99F6E4',
    accent: '#0D9488', border: '#14B8A6', text: '#134E4A'
  },
  story: {
    gradientFrom: '#FDE8E4', gradientTo: '#F9D5CE',
    accent: '#B86F5A', border: '#D4917E', text: '#7C2D12'
  },
  connection: {
    gradientFrom: '#E0F2FE', gradientTo: '#BAE6FD',
    accent: '#0369A1', border: '#0EA5E9', text: '#0C4A6E'
  },
  constraint: {
    gradientFrom: '#0D2818', gradientTo: '#1A3A2A',
    accent: '#D4AF37', border: '#D4AF37', text: '#FEFCE8'
  },
  evolution: {
    gradientFrom: '#FEF3C7', gradientTo: '#FDE68A',
    accent: '#92400E', border: '#F59E0B', text: '#78350F'
  },
  reflection: {
    gradientFrom: '#F3E8FF', gradientTo: '#E9D5FF',
    accent: '#7E22CE', border: '#9333EA', text: '#581C87'
  },
}

// Level colors - mapped to progression
const levelColors: Record<number, { primary: string; light: string }> = {
  0: { primary: '#64748b', light: '#f1f5f9' },
  1: { primary: '#22c55e', light: '#f0fdf4' },
  2: { primary: '#3b82f6', light: '#eff6ff' },
  3: { primary: '#eab308', light: '#fefce8' },
  4: { primary: '#f97316', light: '#fff7ed' },
  5: { primary: '#a855f7', light: '#faf5ff' },
  6: { primary: '#ec4899', light: '#fdf2f8' },
  7: { primary: '#18181b', light: '#fafafa' },
}

// Brutalist primary accent
const BRAND_RED = '#E31E24'

// ============================================================================
// ACTIVITY ZONE CARD (Dense, kept multi-color)
// ============================================================================

function ActivityZoneCard({ type, icon: Icon, label, title, subtitle, children }: ActivityZoneCardProps) {
  const colors = activityColors[type]
  const isDark = type === 'constraint'

  return (
    <motion.div
      whileHover={{ x: -2 }}
      transition={{ duration: 0.15 }}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
      }}
    >
      <div className="p-3.5">
        {/* Type label with icon - Brutalist uppercase */}
        <div className="flex items-center gap-1.5 mb-2">
          <Icon className="w-3.5 h-3.5" style={{ color: colors.accent }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: colors.accent }}
          >
            {label}
          </span>
        </div>

        {/* Title - Playfair Display */}
        <h4
          className="text-sm font-semibold leading-tight mb-1"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colors.text,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h4>

        {subtitle && (
          <p
            className="text-[9px] font-bold uppercase tracking-[0.15em] mb-2 opacity-70"
            style={{ color: colors.text }}
          >
            {subtitle}
          </p>
        )}

        {/* Content - Inter Light */}
        <div
          className="text-[13px] leading-relaxed"
          style={{
            color: isDark ? 'rgba(255,255,255,0.9)' : colors.text,
            fontWeight: 300,
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================================
// SECTION HEADER (Brutalist)
// ============================================================================

function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 pb-2 border-b border-zinc-300">
      <div
        className="w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: BRAND_RED }}
      >
        {number}
      </div>
      <h2
        className="text-2xl font-bold text-zinc-900"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
    </div>
  )
}

// ============================================================================
// LEVEL CARD (Dense Brutalist)
// ============================================================================

function LevelCard({ level, title, subtitle, description, unlockRequirement, codeExample }: LevelCardProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(level === 1)
  const colors = levelColors[level]
  const isDark = level === 7

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Level 7 - Dark premium
  if (isDark) {
    return (
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
        }}
      >
        <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-20" style={{ backgroundColor: '#D4AF37' }} />
        <div className="relative p-4">
          <div className="flex items-start gap-3 mb-2">
            <div
              className="w-10 h-10 rounded flex items-center justify-center text-base font-bold"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #B8860B)', color: '#0A0A0A' }}
            >
              {level}
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="text-base font-bold text-white leading-tight"
                style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">{subtitle}</p>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-3" style={{ fontWeight: 300 }}>{description}</p>
          <div className="px-3 py-2 rounded text-xs" style={{ background: 'rgba(212, 175, 55, 0.1)', borderLeft: '2px solid #D4AF37' }}>
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[10px]">UNLOCK</span>
            <span className="text-zinc-500 ml-1.5" style={{ fontWeight: 300 }}>{unlockRequirement}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden bg-white"
      style={{ borderLeft: `3px solid ${colors.primary}` }}
    >
      <div className="p-4">
        <div className="flex items-start gap-3 mb-2">
          <div
            className="w-10 h-10 rounded flex items-center justify-center text-base font-bold text-white"
            style={{ backgroundColor: colors.primary }}
          >
            {level}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-base font-bold text-zinc-900 leading-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.01em' }}
            >
              {title}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">{subtitle}</p>
          </div>
          {codeExample && (
            <button onClick={() => setExpanded(!expanded)} className="text-zinc-400 hover:text-zinc-600">
              <ChevronRight className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          )}
        </div>

        <p className="text-zinc-600 text-sm leading-relaxed mb-3" style={{ fontWeight: 300 }}>{description}</p>

        {codeExample && expanded && (
          <div className="relative mb-3">
            <div className="rounded p-3 font-mono text-xs overflow-x-auto" style={{ backgroundColor: '#1E1E2E', color: '#CDD6F4' }}>
              <button onClick={handleCopy} className="absolute top-2 right-2 p-1.5 rounded bg-white/10 hover:bg-white/20">
                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
              </button>
              <pre className="whitespace-pre">{codeExample}</pre>
            </div>
          </div>
        )}

        <div className="px-3 py-2 rounded text-xs" style={{ backgroundColor: colors.light }}>
          <span style={{ color: colors.primary }} className="font-semibold uppercase tracking-wider text-[10px]">UNLOCK</span>
          <span className="text-zinc-600 ml-1.5" style={{ fontWeight: 300 }}>{unlockRequirement}</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// IRON LAW BOX
// ============================================================================

function IronLawBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative rounded-lg overflow-hidden my-4" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}>
      {/* Red accent lines (Brutalist) */}
      <div className="absolute top-0 left-0 w-12 h-[2px]" style={{ backgroundColor: BRAND_RED }} />
      <div className="absolute top-0 left-0 w-[2px] h-12" style={{ backgroundColor: BRAND_RED }} />
      <div className="absolute bottom-0 right-0 w-12 h-[2px]" style={{ backgroundColor: BRAND_RED }} />
      <div className="absolute bottom-0 right-0 w-[2px] h-12" style={{ backgroundColor: BRAND_RED }} />

      <div className="relative p-5">
        <h4 className="text-sm font-bold mb-3 uppercase tracking-[0.15em]" style={{ color: BRAND_RED }}>
          {title}
        </h4>
        <div className="text-zinc-300 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// GOTCHA CARD
// ============================================================================

function GotchaCard({ problem, symptom, recovery }: GotchaCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: '#F59E0B', backgroundColor: '#FFFBEB' }}>
      <div className="p-4">
        <div className="flex items-start gap-2 mb-3">
          <Zap className="w-4 h-4 text-amber-600 mt-0.5" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-600">PROBLEM</span>
            <p className="text-zinc-800 text-sm font-medium mt-0.5">{problem}</p>
          </div>
        </div>
        <div className="pl-6 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-500">SYMPTOM</span>
          <p className="text-zinc-600 text-sm mt-0.5" style={{ fontWeight: 300 }}>{symptom}</p>
        </div>
        <div className="pl-6 pt-3 border-t border-amber-200">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-green-600">RECOVERY</span>
          <ol className="mt-1.5 space-y-1">
            {recovery.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-zinc-700" style={{ fontWeight: 300 }}>
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// BLOCKQUOTE
// ============================================================================

function Blockquote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <blockquote className="relative pl-4 py-3 my-4 rounded-r-lg" style={{ backgroundColor: '#F8FAFC', borderLeft: `3px solid ${BRAND_RED}` }}>
      <p className="text-lg leading-relaxed text-zinc-700 italic" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
        {children}
      </p>
      {author && <cite className="block mt-2 text-xs text-zinc-500 not-italic uppercase tracking-[0.1em]">— {author}</cite>}
    </blockquote>
  )
}

// ============================================================================
// LEFT NAV (Dense)
// ============================================================================

function LeftNav() {
  const navItems = [
    { category: 'GUIDES', items: [
      { label: 'Complexity Ladder', active: true },
      { label: 'Ralph Pattern', active: false },
      { label: 'CC Mirror', active: false },
      { label: 'Gas Town', active: false },
    ]},
    { category: 'MASTERS', items: [
      { label: 'Boris Cherny', active: false },
      { label: 'Steve Yegge', active: false },
      { label: 'Matt Pocock', active: false },
    ]},
    { category: 'PRINCIPLES', items: [
      { label: '8 Core Principles', active: false },
      { label: 'Anti-Patterns', active: false },
      { label: 'Judgment Guide', active: false },
    ]},
  ]

  return (
    <nav className="py-4 px-3">
      {navItems.map((group) => (
        <div key={group.category} className="mb-4">
          <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 px-2">
            {group.category}
          </h3>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`block px-2 py-1.5 text-xs transition-colors ${
                    item.active
                      ? 'text-zinc-900 font-medium border-l-2'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded'
                  }`}
                  style={{
                    fontWeight: item.active ? 500 : 300,
                    borderColor: item.active ? BRAND_RED : 'transparent',
                    backgroundColor: item.active ? '#FEF2F2' : undefined,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

// ============================================================================
// DATA
// ============================================================================

const levels: LevelCardProps[] = [
  { level: 0, title: 'Single Session', subtitle: 'The Pain You Know', description: 'Manual supervision. Context window fills. Quality degrades. You give up at 12:30 AM with incomplete feature.', unlockRequirement: 'Show up' },
  { level: 1, title: 'Ralph Wiggum Loop', subtitle: 'Autonomy Begins', description: 'Fresh context per iteration. External state in files. You write the PRD, then sleep. Wake up to completed feature.', unlockRequirement: 'Progress tracking + completion markers', codeExample: `while :; do\n  cat PROMPT.md | claude-code --print\n  sleep 5\ndone` },
  { level: 2, title: 'CC Mirror', subtitle: 'Multi-Agent', description: 'Hub-and-spoke orchestration. Opus orchestrator coordinates Sonnet/Haiku workers. Parallel execution. Model tiering for cost.', unlockRequirement: 'Task decomposition + verification loops' },
  { level: 3, title: 'Specialized Workers', subtitle: 'Role Definition', description: 'Workers get domain expertise. Dedicated test writers, doc generators, security auditors. Each knows their constraints.', unlockRequirement: 'Clear boundaries + handoff protocols' },
  { level: 4, title: 'Self-Modifying Prompts', subtitle: 'Adaptive Systems', description: 'System learns from failures. Prompts evolve based on outcomes. Error patterns trigger automatic refinement.', unlockRequirement: 'Feedback loops + metric tracking' },
  { level: 5, title: 'Memory Networks', subtitle: 'Persistent Intelligence', description: 'Cross-session learning. Vector stores for retrieval. Context survives restarts. Institutional knowledge accumulates.', unlockRequirement: 'External memory + retrieval systems' },
  { level: 6, title: 'Agent Swarms', subtitle: 'Emergent Coordination', description: 'Agents spawn agents. Dynamic team composition. Problems define structure. Self-organizing hierarchies.', unlockRequirement: 'Meta-orchestration + resource management' },
  { level: 7, title: 'Factory Scale', subtitle: 'Industrial Automation', description: 'Continuous deployment of agent systems. Quality gates. Human oversight at checkpoints. Production-grade reliability.', unlockRequirement: 'All previous levels + operational maturity' },
]

const activityItems: { type: ActivityCardType; icon: React.ElementType; label: string; title: string; subtitle?: string; content: ReactNode }[] = [
  { type: 'pattern', icon: Target, label: 'Irresistible Pattern', title: 'The Core Formula', subtitle: '8 PRINCIPLES × 8 LEVELS', content: <p>Every level follows the same invariant: <strong>context is finite</strong>, so externalize state.</p> },
  { type: 'story', icon: Flame, label: 'War Story', title: "Boris's Vanilla Philosophy", content: <p>Boris Cherny runs Claude Code without frameworks. "Just put it in files."</p> },
  { type: 'connection', icon: Link2, label: 'Important Connection', title: 'All Patterns Share INV-001', content: <p>Ralph, CC Mirror, Gas Town—every pattern traces to: <em>fresh context beats extended context</em>.</p> },
  { type: 'constraint', icon: Layers, label: 'Constraint Chain', title: 'Context Finite → 8 Principles', subtitle: 'THE FORCING FUNCTION', content: <ul className="space-y-0.5"><li>1. Context is the constraint</li><li>2. External state {'>'} internal memory</li><li>3. Fresh context {'>'} extended sessions</li><li>4. Verification at every step</li></ul> },
  { type: 'evolution', icon: TrendingUp, label: 'Evolution Guide', title: 'Skip Level 3, Expect Failures', content: <p>Teams that jump from L1 to L5 without worker specialization hit cascading failures.</p> },
  { type: 'reflection', icon: Lightbulb, label: 'Reflection Point', title: 'When Level 3 Stops Being Enough', content: <p>You'll know it's time for L4 when workers make the same mistakes repeatedly.</p> },
  { type: 'pattern', icon: GitBranch, label: 'Irresistible Pattern', title: 'Ralph Is Just A While Loop', content: <p>4 lines of bash. <code className="bg-teal-100 px-1 py-0.5 rounded text-teal-800 text-[10px]">while :; do cat PROMPT.md | claude-code; done</code></p> },
  { type: 'story', icon: Factory, label: 'War Story', title: "Steve Yegge's Gas Town", content: <p>Mayor assigns, Dogs execute, Deacon reviews, Refinery extracts. Level 7 in production.</p> },
]

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function VisionDensePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Brutalist minimal */}
      <header className="border-b-2 border-zinc-900">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold uppercase tracking-[0.1em]" style={{ color: BRAND_RED }}>Claude Code</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">Synthesis</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">Architecture</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-900 font-medium">Complexity Ladder</span>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-400">Knowledge Base</div>
        </div>
      </header>

      {/* Three-Panel Layout - DENSE */}
      <div className="flex">
        {/* Left Nav - 200px */}
        <aside className="w-[200px] border-r border-zinc-200 min-h-[calc(100vh-41px)] shrink-0 bg-zinc-50">
          <LeftNav />
        </aside>

        {/* Main Content - WIDE */}
        <main className="flex-1 min-w-0 bg-white">
          <div className="max-w-5xl px-6 py-6">
            {/* Hero - Compact Brutalist */}
            <div
              className="relative rounded-lg overflow-hidden mb-6"
              style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Red accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: BRAND_RED }} />

              <div className="relative p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: BRAND_RED }}>
                    Architecture Guide
                  </span>
                </div>
                <h1
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '-0.02em' }}
                >
                  The Complexity Ladder
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl" style={{ fontWeight: 300 }}>
                  8 levels of Claude Code mastery. From single sessions to factory-scale automation. Each level unlocks only after mastering the previous.
                </p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-zinc-400" />
                    <span className="text-[10px] text-zinc-400 uppercase tracking-[0.1em]">8 Levels</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-zinc-400" />
                    <span className="text-[10px] text-zinc-400 uppercase tracking-[0.1em]">Sequential</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Brain className="w-3 h-3 text-zinc-400" />
                    <span className="text-[10px] text-zinc-400 uppercase tracking-[0.1em]">Pattern-Based</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Core Abstraction */}
            <section className="mb-8">
              <SectionHeader number={1} title="The Core Abstraction" />
              <Blockquote author="Boris Cherny, Claude Code Creator">
                Context is finite. Everything else follows from this single constraint.
              </Blockquote>
              <IronLawBox title="The Iron Law of Agent Systems">
                <p className="mb-2">
                  <strong className="text-white">Every orchestration pattern exists to manage one constraint:</strong> the context window is finite, but work is infinite.
                </p>
                <p>
                  Ralph loops refresh context. CC Mirror distributes it across agents. Gas Town structures it into roles. Different solutions, same problem.
                </p>
              </IronLawBox>
            </section>

            {/* Section 2: The 8 Levels - Two column grid for density */}
            <section className="mb-8">
              <SectionHeader number={2} title="The 8 Levels" />
              <div className="grid grid-cols-2 gap-3">
                {levels.map((level) => (
                  <LevelCard key={level.level} {...level} />
                ))}
              </div>
            </section>

            {/* Section 3: Gotchas */}
            <section className="mb-8">
              <SectionHeader number={3} title="Common Gotchas" />
              <div className="grid grid-cols-2 gap-3">
                <GotchaCard
                  problem="Jumping from Level 1 to Level 5"
                  symptom="Memory systems hallucinate because there's no worker verification layer."
                  recovery={['Fall back to Level 3', 'Add verification loops', 'Then introduce memory']}
                />
                <GotchaCard
                  problem="Running Level 7 without Level 4"
                  symptom="Factory produces consistent garbage. Same errors repeat."
                  recovery={['Implement feedback loops (L4)', 'Track error patterns', 'Let prompts evolve']}
                />
              </div>
            </section>
          </div>
        </main>

        {/* Activity Zone - 280px TIGHT */}
        <aside className="w-[280px] border-l border-zinc-200 min-h-[calc(100vh-41px)] shrink-0 bg-zinc-50">
          <div className="p-3">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-200">
              <Sparkles className="w-3 h-3 text-teal-600" />
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-teal-600">
                  Operational Intelligence
                </div>
                <div className="text-[8px] text-zinc-400">{activityItems.length} insights</div>
              </div>
            </div>

            {/* Cards - TIGHT spacing */}
            <div className="space-y-2.5">
              {activityItems.map((item, index) => (
                <ActivityZoneCard
                  key={index}
                  type={item.type}
                  icon={item.icon}
                  label={item.label}
                  title={item.title}
                  subtitle={item.subtitle}
                >
                  {item.content}
                </ActivityZoneCard>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
