'use client'

/**
 * Full Three-Panel Vision POC
 *
 * Demonstrates the complete design vision:
 * - Left nav (static, simulated)
 * - Main content with rich typography and visual elements
 * - Activity Zone with 8 distinct card types
 *
 * Content: Complexity Ladder (8 levels of Claude Code mastery)
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

interface SectionHeaderProps {
  number: number
  title: string
  color?: string
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
// COLOR SYSTEM
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

const levelColors: Record<number, {
  primary: string
  light: string
  gradient: string
}> = {
  0: { primary: '#64748b', light: '#f1f5f9', gradient: 'from-slate-500 to-slate-600' },
  1: { primary: '#22c55e', light: '#f0fdf4', gradient: 'from-green-500 to-green-600' },
  2: { primary: '#3b82f6', light: '#eff6ff', gradient: 'from-blue-500 to-blue-600' },
  3: { primary: '#eab308', light: '#fefce8', gradient: 'from-yellow-500 to-yellow-600' },
  4: { primary: '#f97316', light: '#fff7ed', gradient: 'from-orange-500 to-orange-600' },
  5: { primary: '#a855f7', light: '#faf5ff', gradient: 'from-purple-500 to-purple-600' },
  6: { primary: '#ec4899', light: '#fdf2f8', gradient: 'from-pink-500 to-pink-600' },
  7: { primary: '#18181b', light: '#fafafa', gradient: 'from-zinc-800 to-zinc-900' },
}

// ============================================================================
// ACTIVITY ZONE CARD COMPONENT
// ============================================================================

function ActivityZoneCard({ type, icon: Icon, label, title, subtitle, children }: ActivityZoneCardProps) {
  const colors = activityColors[type]
  const isDark = type === 'constraint'

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Decorative corner gradient */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-10"
        style={{
          background: `radial-gradient(circle at top right, ${colors.accent}, transparent 70%)`,
        }}
      />

      <div className="relative p-5">
        {/* Type label with icon */}
        <div className="flex items-center gap-2 mb-3">
          <Icon
            className="w-4 h-4"
            style={{ color: isDark ? colors.accent : colors.accent }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ color: isDark ? colors.accent : colors.accent }}
          >
            {label}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-lg font-semibold tracking-tight mb-1"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colors.text,
          }}
        >
          {title}
        </h4>

        {/* Subtitle if present */}
        {subtitle && (
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 opacity-70"
            style={{ color: colors.text }}
          >
            {subtitle}
          </p>
        )}

        {/* Content */}
        <div
          className="text-sm leading-relaxed"
          style={{ color: isDark ? 'rgba(255,255,255,0.85)' : colors.text }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

function SectionHeader({ number, title, color = '#0D9488' }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <h2
        className="text-3xl font-semibold tracking-tight text-zinc-900"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {title}
      </h2>
    </div>
  )
}

// ============================================================================
// LEVEL CARD COMPONENT (Enhanced)
// ============================================================================

function LevelCard({ level, title, subtitle, description, unlockRequirement, codeExample }: LevelCardProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(level === 1) // Ralph loop expanded by default
  const colors = levelColors[level]
  const isDark = level === 7

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Level 7 gets special dark treatment
  if (isDark) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Gold accent glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#D4AF37' }}
        />

        <div className="relative p-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                color: '#0A0A0A',
                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
              }}
            >
              {level}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
              <p className="text-zinc-400 text-sm font-medium">{subtitle}</p>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-4">{description}</p>

          <div
            className="px-4 py-3 rounded-lg"
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              borderLeft: '2px solid #D4AF37',
            }}
          >
            <span className="text-[#D4AF37] font-semibold text-sm">Unlock:</span>
            <span className="text-zinc-400 ml-2 text-sm">{unlockRequirement}</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200"
      style={{
        borderLeftWidth: '4px',
        borderLeftColor: colors.primary,
      }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg bg-gradient-to-br ${colors.gradient}`}
          >
            {level}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h3>
            <p className="text-zinc-500 text-sm font-medium">{subtitle}</p>
          </div>
          {codeExample && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <ChevronRight
                className={`w-5 h-5 transition-transform ${expanded ? 'rotate-90' : ''}`}
              />
            </button>
          )}
        </div>

        <p className="text-zinc-600 leading-relaxed mb-4">{description}</p>

        {/* Code example (collapsible) */}
        {codeExample && expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative mb-4"
          >
            <div
              className="rounded-xl p-4 font-mono text-sm overflow-x-auto"
              style={{
                backgroundColor: '#1E1E2E',
                color: '#CDD6F4',
              }}
            >
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400" />
                )}
              </button>
              <pre className="whitespace-pre-wrap">{codeExample}</pre>
            </div>
          </motion.div>
        )}

        <div
          className="px-4 py-3 rounded-lg"
          style={{ backgroundColor: colors.light }}
        >
          <span style={{ color: colors.primary }} className="font-semibold text-sm">Unlock:</span>
          <span className="text-zinc-600 ml-2 text-sm">{unlockRequirement}</span>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================================
// IRON LAW BOX (Dark Emphasis)
// ============================================================================

function IronLawBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden my-8"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
        />
        <div
          className="absolute top-0 left-0 w-[2px] h-full"
          style={{ background: 'linear-gradient(180deg, #D4AF37, transparent)' }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div
          className="absolute bottom-0 right-0 w-full h-[2px]"
          style={{ background: 'linear-gradient(270deg, #D4AF37, transparent)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[2px] h-full"
          style={{ background: 'linear-gradient(0deg, #D4AF37, transparent)' }}
        />
      </div>

      <div className="relative p-8">
        <h4
          className="text-lg font-bold mb-4"
          style={{ color: '#D4AF37' }}
        >
          {title}
        </h4>
        <div className="text-zinc-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// GOTCHA CARD (Three-Section)
// ============================================================================

function GotchaCard({ problem, symptom, recovery }: GotchaCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden border-2"
      style={{
        borderColor: '#F59E0B',
        backgroundColor: '#FFFBEB',
      }}
    >
      <div className="p-6">
        {/* Problem */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#FEF3C7' }}
          >
            <Zap className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Problem</span>
            <p className="text-zinc-800 font-medium mt-1">{problem}</p>
          </div>
        </div>

        {/* Symptom */}
        <div className="flex items-start gap-3 mb-4 pl-11">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Symptom</span>
            <p className="text-zinc-600 mt-1">{symptom}</p>
          </div>
        </div>

        {/* Recovery */}
        <div className="pl-11 pt-4 border-t border-amber-200">
          <span className="text-xs font-bold uppercase tracking-wider text-green-600">Recovery</span>
          <ol className="mt-2 space-y-2">
            {recovery.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}
                >
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
// BLOCKQUOTE COMPONENT
// ============================================================================

function Blockquote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <blockquote
      className="relative pl-6 py-4 my-6 rounded-r-xl"
      style={{
        backgroundColor: '#F8FAFC',
        borderLeft: '4px solid #0D9488',
      }}
    >
      <p
        className="text-xl leading-relaxed text-zinc-700 italic"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {children}
      </p>
      {author && (
        <cite className="block mt-3 text-sm text-zinc-500 not-italic">
          — {author}
        </cite>
      )}
    </blockquote>
  )
}

// ============================================================================
// LEFT NAV (Static)
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
    <nav className="py-6 px-4">
      {navItems.map((group) => (
        <div key={group.category} className="mb-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 px-3">
            {group.category}
          </h3>
          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`
                    block px-3 py-2 rounded-lg text-sm transition-colors
                    ${item.active
                      ? 'bg-teal-50 text-teal-700 font-medium'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                    }
                  `}
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
// LEVEL DATA
// ============================================================================

const levels: LevelCardProps[] = [
  {
    level: 0,
    title: 'Single Session',
    subtitle: 'The Pain You Know',
    description: 'Manual supervision. Context window fills. Quality degrades. You give up at 12:30 AM with incomplete feature.',
    unlockRequirement: 'Show up',
  },
  {
    level: 1,
    title: 'Ralph Wiggum Loop',
    subtitle: 'Autonomy Begins',
    description: 'Fresh context per iteration. External state in files. You write the PRD, then sleep. Wake up to completed feature.',
    unlockRequirement: 'Progress tracking + completion markers',
    codeExample: `while :; do
  cat PROMPT.md | claude-code --print
  sleep 5
done`,
  },
  {
    level: 2,
    title: 'CC Mirror',
    subtitle: 'Multi-Agent',
    description: 'Hub-and-spoke orchestration. Opus orchestrator coordinates Sonnet/Haiku workers. Parallel execution. Model tiering for cost.',
    unlockRequirement: 'Task decomposition + verification loops',
  },
  {
    level: 3,
    title: 'Specialized Workers',
    subtitle: 'Role Definition',
    description: 'Workers get domain expertise. Dedicated test writers, doc generators, security auditors. Each knows their constraints.',
    unlockRequirement: 'Clear boundaries + handoff protocols',
  },
  {
    level: 4,
    title: 'Self-Modifying Prompts',
    subtitle: 'Adaptive Systems',
    description: 'System learns from failures. Prompts evolve based on outcomes. Error patterns trigger automatic refinement.',
    unlockRequirement: 'Feedback loops + metric tracking',
  },
  {
    level: 5,
    title: 'Memory Networks',
    subtitle: 'Persistent Intelligence',
    description: 'Cross-session learning. Vector stores for retrieval. Context survives restarts. Institutional knowledge accumulates.',
    unlockRequirement: 'External memory + retrieval systems',
  },
  {
    level: 6,
    title: 'Agent Swarms',
    subtitle: 'Emergent Coordination',
    description: 'Agents spawn agents. Dynamic team composition. Problems define structure. Self-organizing hierarchies.',
    unlockRequirement: 'Meta-orchestration + resource management',
  },
  {
    level: 7,
    title: 'Factory Scale',
    subtitle: 'Industrial Automation',
    description: 'Continuous deployment of agent systems. Quality gates. Human oversight at checkpoints. Production-grade reliability.',
    unlockRequirement: 'All previous levels + operational maturity',
  },
]

// ============================================================================
// ACTIVITY ZONE DATA
// ============================================================================

const activityItems: {
  type: ActivityCardType
  icon: React.ElementType
  label: string
  title: string
  subtitle?: string
  content: ReactNode
}[] = [
  {
    type: 'pattern',
    icon: Target,
    label: 'Irresistible Pattern',
    title: 'The Core Formula',
    subtitle: '8 PRINCIPLES × 8 LEVELS',
    content: (
      <p>Every level follows the same invariant: <strong>context is finite</strong>, so externalize state. The ladder isn't about complexity—it's about constraint management.</p>
    ),
  },
  {
    type: 'story',
    icon: Flame,
    label: 'War Story',
    title: "Boris's Vanilla Philosophy",
    content: (
      <p>Boris Cherny runs Claude Code without frameworks. "Just put it in files." The simplicity isn't limitation—it's the foundation every level builds on.</p>
    ),
  },
  {
    type: 'connection',
    icon: Link2,
    label: 'Important Connection',
    title: 'All Patterns Share INV-001',
    content: (
      <p>Ralph, CC Mirror, Gas Town—every orchestration pattern traces back to one invariant: <em>fresh context beats extended context</em>.</p>
    ),
  },
  {
    type: 'constraint',
    icon: Layers,
    label: 'Constraint Chain',
    title: 'Context Finite → 8 Principles',
    subtitle: 'THE FORCING FUNCTION',
    content: (
      <ul className="space-y-1 text-sm">
        <li>1. Context is the constraint</li>
        <li>2. External state {'>'} internal memory</li>
        <li>3. Fresh context {'>'} extended sessions</li>
        <li>4. Verification at every step</li>
      </ul>
    ),
  },
  {
    type: 'evolution',
    icon: TrendingUp,
    label: 'Evolution Guide',
    title: 'Skip Level 3, Expect Failures',
    content: (
      <p>Teams that jump from L1 (Ralph) to L5 (Memory Networks) without mastering worker specialization hit cascading failures. The ladder is sequential.</p>
    ),
  },
  {
    type: 'reflection',
    icon: Lightbulb,
    label: 'Reflection Point',
    title: 'When Level 3 Stops Being Enough',
    content: (
      <p>You'll know it's time for L4 when your workers make the same mistakes repeatedly. That's not a bug—it's the signal to add feedback loops.</p>
    ),
  },
  {
    type: 'pattern',
    icon: GitBranch,
    label: 'Irresistible Pattern',
    title: 'Ralph Is Just A While Loop',
    content: (
      <p>The most powerful pattern in Claude Code is 4 lines of bash. <code className="bg-teal-100 px-1.5 py-0.5 rounded text-teal-800 text-xs">while :; do cat PROMPT.md | claude-code; done</code></p>
    ),
  },
  {
    type: 'story',
    icon: Factory,
    label: 'War Story',
    title: "Steve Yegge's Gas Town",
    content: (
      <p>Yegge's agent factory runs 24/7. Mayor assigns, Dogs execute, Deacon reviews, Refinery extracts. Level 7 isn't theory—it's production.</p>
    ),
  },
]

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function VisionFullPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header / Breadcrumb */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>Synthesis</span>
            <ChevronRight className="w-4 h-4" />
            <span>Architecture</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900 font-medium">Complexity Ladder</span>
          </div>
        </div>
      </header>

      {/* Three-Panel Layout */}
      <div className="flex">
        {/* Left Nav */}
        <aside
          className="w-[240px] border-r border-zinc-200 bg-white min-h-[calc(100vh-57px)] shrink-0"
        >
          <LeftNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-8 py-12">
            {/* Hero / Essence Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl overflow-hidden mb-12"
              style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at top right, #D4AF37, transparent 60%)',
                  }}
                />
              </div>

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    Architecture Guide
                  </span>
                </div>

                <h1
                  className="text-4xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  The Complexity Ladder
                </h1>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  8 levels of Claude Code mastery. From single sessions to factory-scale automation.
                  Each level unlocks only after mastering the previous.
                </p>

                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm text-zinc-400">8 Levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm text-zinc-400">Sequential Mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-zinc-500" />
                    <span className="text-sm text-zinc-400">Pattern-Based</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 1: Core Abstraction */}
            <section className="mb-16">
              <SectionHeader number={1} title="The Core Abstraction" />

              <Blockquote author="Boris Cherny, Claude Code Creator">
                Context is finite. Everything else follows from this single constraint.
              </Blockquote>

              <IronLawBox title="The Iron Law of Agent Systems">
                <p className="mb-4">
                  <strong className="text-white">Every orchestration pattern exists to manage one constraint:</strong> the context window is finite, but work is infinite.
                </p>
                <p>
                  Ralph loops refresh context. CC Mirror distributes it across agents. Gas Town structures it into roles.
                  Different solutions, same problem. Master the constraint, master the ladder.
                </p>
              </IronLawBox>
            </section>

            {/* Section 2: The 8 Levels */}
            <section className="mb-16">
              <SectionHeader number={2} title="The 8 Levels" color="#3B82F6" />

              <div className="space-y-6">
                {levels.map((level, index) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <LevelCard {...level} />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section 3: Gotchas */}
            <section className="mb-16">
              <SectionHeader number={3} title="Common Gotchas" color="#F59E0B" />

              <div className="space-y-6">
                <GotchaCard
                  problem="Jumping from Level 1 to Level 5"
                  symptom="Memory systems hallucinate because there's no worker verification layer to validate retrieved context."
                  recovery={[
                    'Fall back to Level 3 (Specialized Workers)',
                    'Add verification loops to each worker output',
                    'Only then introduce memory retrieval',
                  ]}
                />

                <GotchaCard
                  problem="Running Level 7 without Level 4"
                  symptom="Factory produces consistent garbage. Same errors repeat across all production runs."
                  recovery={[
                    'Implement feedback loops (Level 4)',
                    'Track error patterns across runs',
                    'Let prompts evolve before scaling',
                  ]}
                />
              </div>
            </section>
          </div>
        </main>

        {/* Activity Zone */}
        <aside
          className="w-[400px] border-l border-zinc-200 bg-white min-h-[calc(100vh-57px)] shrink-0"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
              </motion.div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-teal-600">
                  Operational Intelligence
                </div>
                <div className="text-[10px] text-zinc-400">
                  {activityItems.length} insights for this page
                </div>
              </div>
            </div>

            {/* Activity Cards */}
            <div className="space-y-4">
              {activityItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ActivityZoneCard
                    type={item.type}
                    icon={item.icon}
                    label={item.label}
                    title={item.title}
                    subtitle={item.subtitle}
                  >
                    {item.content}
                  </ActivityZoneCard>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
