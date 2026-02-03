'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronRight,
  ChevronDown,
  Copy,
  Check,
  Info,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Command,
  X,
  Sun,
  Moon,
  BookOpen,
  Layers,
  GitBranch,
  Terminal,
  Zap,
  Settings,
} from 'lucide-react'

// ============================================================================
// EXACT DESIGN TOKENS
// Structure: Linear (280px sidebar, 40px H1, 21px H2, 15px body)
// Visual: Reference Images (Sanrok Red, Medieval Blue, Cream, Instrument Serif)
// ============================================================================

const tokens = {
  // FROM REFERENCE IMAGES - EXACT
  colors: {
    sanrokRed: '#FF0000',
    medievalBlue: '#1A44B8',
    cream: '#FBF5EF',
    white: '#FFFFFF',
    black: '#08090A', // From Linear
  },

  // FROM LINEAR - EXACT
  typography: {
    h1: { size: '40px', weight: 590, lineHeight: '44px', letterSpacing: '-0.88px' },
    h2: { size: '21px', weight: 590, lineHeight: '27.93px', letterSpacing: '0' },
    h3: { size: '16px', weight: 590, lineHeight: '24px', letterSpacing: '0' },
    body: { size: '15px', weight: 400, lineHeight: '24px' },
    small: { size: '13px', weight: 400, lineHeight: '20px' },
  },

  // FROM LINEAR - EXACT
  layout: {
    sidebarWidth: '280px',
    contentMaxWidth: '720px',
    headerHeight: '56px',
  },
}

// Light/Dark themes combining Linear structure with Sanrok colors
const themes = {
  light: {
    bg: tokens.colors.white,
    bgSubtle: tokens.colors.cream,
    bgCard: tokens.colors.white,
    text: tokens.colors.black,
    textSecondary: '#4A4A4A',
    textMuted: '#8A8F98',
    accent: tokens.colors.sanrokRed,
    accentSecondary: tokens.colors.medievalBlue,
    border: 'rgba(0,0,0,0.08)',
    cardBorder: 'rgba(0,0,0,0.06)',
  },
  dark: {
    bg: tokens.colors.black,
    bgSubtle: '#111111',
    bgCard: '#151515',
    text: '#F7F8F8',
    textSecondary: '#B0B0B0',
    textMuted: '#8A8F98',
    accent: '#FF4444',
    accentSecondary: '#4A7CFF',
    border: 'rgba(255,255,255,0.08)',
    cardBorder: 'rgba(255,255,255,0.06)',
  },
}

// Navigation structure (Linear-style)
const navigation = [
  { title: 'Getting Started', icon: BookOpen, items: ['What is Claude Code?', 'Quick Start', 'Vanilla Workflow'] },
  { title: 'Patterns', icon: Layers, items: ['Ralph Wiggum Loop', 'Gas Town', 'CC Mirror', 'Personal Panopticon'], expanded: true },
  { title: 'Orchestration', icon: GitBranch, items: ['Multi-Agent Basics', 'Complexity Ladder', 'Case Studies'] },
  { title: 'Tools', icon: Terminal, items: ['MCP Servers', 'Hooks & Skills', 'Observability'] },
  { title: 'Reference', icon: Settings, items: ['SOURCE-INDEX', 'MASTER-PLAYBOOK', 'JUDGMENT-GUIDE'] },
]

// Pattern cards (Linear-style grid)
const patterns = [
  { title: 'Ralph Wiggum Loop', desc: 'Continuous iteration until completion', level: 4, icon: Zap },
  { title: 'Gas Town', desc: 'Agent factory with specialized roles', level: 6, icon: GitBranch },
  { title: 'CC Mirror', desc: 'Hidden multi-agent orchestration', level: 5, icon: Layers },
  { title: 'Personal Panopticon', desc: '8 parallel domain-specific agents', level: 5, icon: Terminal },
]

// ============================================================================
// COMPONENTS
// ============================================================================

function SearchModal({ isOpen, onClose, theme }: { isOpen: boolean; onClose: () => void; theme: typeof themes.light }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (isOpen) setQuery('')
  }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        className="w-full max-w-[600px] rounded-xl overflow-hidden"
        style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <Search className="w-5 h-5 mr-3" style={{ color: theme.textMuted }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent outline-none"
            style={{ color: theme.text, fontSize: '15px' }}
            autoFocus
          />
          <kbd className="px-2 py-1 text-xs rounded" style={{ backgroundColor: theme.bgSubtle, color: theme.textMuted }}>
            ESC
          </kbd>
        </div>
        <div className="p-3 max-h-80 overflow-y-auto">
          <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider" style={{ color: theme.textMuted }}>
            Popular
          </div>
          {patterns.map((p) => (
            <button
              key={p.title}
              className="w-full px-3 py-2.5 rounded-lg text-left flex items-center gap-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.accent }}
              >
                {p.level}
              </div>
              <div className="flex-1">
                <div style={{ color: theme.text, fontWeight: 590, fontSize: '15px' }}>{p.title}</div>
                <div style={{ color: theme.textMuted, fontSize: '13px' }}>{p.desc}</div>
              </div>
              <ArrowRight className="w-4 h-4" style={{ color: theme.textMuted }} />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Sidebar({ theme, activeItem }: { theme: typeof themes.light; activeItem: string }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['Patterns']))

  const toggle = (title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  return (
    <aside
      className="fixed top-0 left-0 h-screen flex flex-col"
      style={{
        width: tokens.layout.sidebarWidth, // EXACT: 280px from Linear
        backgroundColor: theme.bgSubtle,
        borderRight: `1px solid ${theme.border}`,
      }}
    >
      {/* Logo - Sanrok style bold */}
      <div
        className="h-14 px-5 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm"
          style={{ backgroundColor: theme.accent }}
        >
          CC
        </div>
        <span
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '18px',
            color: theme.text,
          }}
        >
          Claude Code
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {navigation.map((section) => (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggle(section.title)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ color: theme.textSecondary }}
            >
              {expanded.has(section.title) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <section.icon className="w-4 h-4" />
              <span>{section.title}</span>
            </button>
            <AnimatePresence>
              {expanded.has(section.title) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="ml-7 mt-1 space-y-0.5">
                    {section.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-3 py-1.5 text-sm rounded-lg transition-colors"
                        style={{
                          backgroundColor: item === activeItem ? `${theme.accent}15` : 'transparent',
                          color: item === activeItem ? theme.accent : theme.textSecondary,
                          fontWeight: item === activeItem ? 590 : 400,
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4" style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="text-xs" style={{ color: theme.textMuted }}>
          144 pages · v1.0.0
        </div>
      </div>
    </aside>
  )
}

function CodeBlock({ theme }: { theme: typeof themes.light }) {
  const [copied, setCopied] = useState(false)

  const code = `# The Ralph Wiggum Loop
while :; do
  cat PROMPT.md | claude-code --json
  sleep 1
done`

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <span className="text-xs font-mono text-gray-400">ralph-loop.sh</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto text-gray-300">
        <code>
          <span className="text-gray-500"># The Ralph Wiggum Loop</span>{'\n'}
          <span className="text-[#FF79C6]">while</span> <span className="text-[#8BE9FD]">:</span>; <span className="text-[#FF79C6]">do</span>{'\n'}
          {'  '}<span className="text-[#50FA7B]">cat</span> <span className="text-[#F1FA8C]">PROMPT.md</span> | <span className="text-[#50FA7B]">claude-code</span> <span className="text-[#8BE9FD]">--json</span>{'\n'}
          {'  '}<span className="text-[#50FA7B]">sleep</span> <span className="text-[#BD93F9]">1</span>{'\n'}
          <span className="text-[#FF79C6]">done</span>
        </code>
      </pre>
    </div>
  )
}

function Callout({ type, title, children, theme }: { type: 'info' | 'warning' | 'tip'; title?: string; children: React.ReactNode; theme: typeof themes.light }) {
  const styles = {
    info: { bg: theme.accentSecondary + '15', border: theme.accentSecondary, icon: Info },
    warning: { bg: '#FEF3C7', border: '#F59E0B', icon: AlertTriangle },
    tip: { bg: '#ECFDF5', border: '#10B981', icon: Lightbulb },
  }
  const s = styles[type]
  const Icon = s.icon

  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: s.bg, borderLeft: `4px solid ${s.border}` }}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: s.border }} />
        <div>
          {title && (
            <h4 className="font-semibold mb-1" style={{ color: s.border }}>
              {title}
            </h4>
          )}
          <div className="text-sm" style={{ color: theme.textSecondary }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function PatternCard({ pattern, theme }: { pattern: typeof patterns[0]; theme: typeof themes.light }) {
  const Icon = pattern.icon
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      className="block rounded-xl p-5 transition-shadow"
      style={{
        backgroundColor: theme.bgCard,
        border: `1px solid ${theme.cardBorder}`,
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: theme.accent + '15' }}
      >
        <Icon className="w-5 h-5" style={{ color: theme.accent }} />
      </div>
      <h3
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontStyle: 'italic',
          fontSize: tokens.typography.h3.size,
          fontWeight: 590,
          color: theme.text,
          marginBottom: '8px',
        }}
      >
        {pattern.title}
      </h3>
      <p style={{ fontSize: tokens.typography.small.size, color: theme.textMuted, lineHeight: '20px' }}>
        {pattern.desc}
      </p>
    </motion.a>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function ExactMatchPOC() {
  const [isDark, setIsDark] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const theme = isDark ? themes.dark : themes.light

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg }}>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;590;600;700&display=swap');
      `}</style>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />

      <Sidebar theme={theme} activeItem="Ralph Wiggum Loop" />

      {/* Main Content */}
      <div style={{ marginLeft: tokens.layout.sidebarWidth }}>
        {/* Header */}
        <header
          className="sticky top-0 z-40 flex items-center justify-between px-8"
          style={{
            height: tokens.layout.headerHeight,
            backgroundColor: theme.bg + 'E6',
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <span style={{ color: theme.textMuted }}>Home</span>
            <ChevronRight className="w-4 h-4" style={{ color: theme.textMuted }} />
            <span style={{ color: theme.textMuted }}>Patterns</span>
            <ChevronRight className="w-4 h-4" style={{ color: theme.textMuted }} />
            <span
              style={{
                color: theme.accent,
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
              }}
            >
              Ralph Wiggum Loop
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors"
              style={{ backgroundColor: theme.bgSubtle, color: theme.textSecondary }}
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
              <kbd
                className="ml-1 px-1.5 py-0.5 text-xs rounded"
                style={{ backgroundColor: theme.bg, color: theme.textMuted }}
              >
                <Command className="w-3 h-3 inline" />K
              </kbd>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: theme.accent }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="px-8 py-12" style={{ maxWidth: tokens.layout.contentMaxWidth, margin: '0 auto' }}>
          {/* Hero - Sanrok Bold Editorial Typography */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 text-sm font-bold rounded-lg text-white"
                style={{ backgroundColor: theme.accent }}
              >
                LEVEL 4
              </span>
              <span className="text-sm uppercase tracking-wider" style={{ color: theme.textMuted }}>
                Pattern
              </span>
            </div>

            {/* H1 - EXACT Linear sizing with Sanrok typography */}
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: tokens.typography.h1.size, // 40px
                fontWeight: tokens.typography.h1.weight, // 590
                lineHeight: tokens.typography.h1.lineHeight, // 44px
                letterSpacing: tokens.typography.h1.letterSpacing, // -0.88px
                color: theme.text,
                marginBottom: '16px',
              }}
            >
              Ralph Wiggum <span style={{ color: theme.accent }}>Loop</span>
            </h1>

            <p
              style={{
                fontSize: tokens.typography.body.size, // 15px
                lineHeight: tokens.typography.body.lineHeight, // 24px
                color: theme.textSecondary,
              }}
            >
              A continuous iteration pattern that keeps running until you manually stop it. Named after
              the Simpsons character who never stops trying.
            </p>
          </div>

          {/* Quick Facts - Sanrok Cream Box */}
          <div
            className="rounded-xl p-6 mb-12"
            style={{ backgroundColor: theme.bgSubtle, border: `1px solid ${theme.border}` }}
          >
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.textMuted }}>
                  Complexity
                </div>
                <div className="text-lg font-bold" style={{ color: theme.accent }}>
                  Level 4
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.textMuted }}>
                  Origin
                </div>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '18px',
                    color: theme.text,
                  }}
                >
                  Matt Pocock
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.textMuted }}>
                  Related
                </div>
                <div style={{ color: theme.accentSecondary, fontSize: '18px' }}>CC Mirror</div>
              </div>
            </div>
          </div>

          {/* Definition Section */}
          <section className="mb-12">
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: tokens.typography.h2.size, // 21px
                fontWeight: tokens.typography.h2.weight, // 590
                lineHeight: tokens.typography.h2.lineHeight, // 27.93px
                color: theme.text,
                marginBottom: '16px',
              }}
            >
              Definition
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '24px', color: theme.textSecondary, marginBottom: '16px' }}>
              The Ralph Wiggum Loop is named after the Simpsons character known for his persistent,
              unwavering nature. The pattern embodies the same philosophy: keep iterating until you
              achieve your goal or the user manually intervenes.
            </p>
            <Callout type="info" title="Core Concept" theme={theme}>
              Unlike traditional scripts that run once, Ralph loops forever. This enables autonomous
              workflows where Claude continuously improves until the task is complete.
            </Callout>
          </section>

          {/* Implementation */}
          <section className="mb-12">
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: tokens.typography.h2.size,
                fontWeight: tokens.typography.h2.weight,
                color: theme.text,
                marginBottom: '16px',
              }}
            >
              Implementation
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '24px', color: theme.textSecondary, marginBottom: '16px' }}>
              The basic implementation is surprisingly simple:
            </p>
            <CodeBlock theme={theme} />
            <div className="mt-6">
              <Callout type="tip" title="Pro Tip" theme={theme}>
                Add a <code className="px-1.5 py-0.5 rounded text-sm font-mono" style={{ backgroundColor: theme.bgSubtle, color: theme.accent }}>sleep</code> statement to prevent overwhelming the API.
              </Callout>
            </div>
          </section>

          {/* Trade-offs */}
          <section className="mb-12">
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: tokens.typography.h2.size,
                fontWeight: tokens.typography.h2.weight,
                color: theme.text,
                marginBottom: '16px',
              }}
            >
              Trade-offs
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: '#ECFDF5', border: '1px solid #10B98130' }}>
                <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#10B981' }}>
                  <Check className="w-5 h-5" /> Advantages
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: theme.textSecondary }}>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    Autonomous operation - set and forget
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    Self-healing - recovers from errors
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                    Continuous improvement until done
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: '#FEF2F2', border: '1px solid #EF444430' }}>
                <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#EF4444' }}>
                  <X className="w-5 h-5" /> Disadvantages
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: theme.textSecondary }}>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} />
                    Can consume significant API credits
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} />
                    Requires clear termination conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} />
                    May loop infinitely on impossible tasks
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Warning */}
          <section className="mb-12">
            <Callout type="warning" title="Cost Awareness" theme={theme}>
              Ralph loops can accumulate significant API costs if left running unattended. Always set
              budget limits and monitoring alerts when using autonomous patterns.
            </Callout>
          </section>

          {/* Related Patterns - Linear-style 4-column grid */}
          <section className="mb-12">
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: tokens.typography.h2.size,
                fontWeight: tokens.typography.h2.weight,
                color: theme.text,
                marginBottom: '16px',
              }}
            >
              Related Patterns
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {patterns.map((p) => (
                <PatternCard key={p.title} pattern={p} theme={theme} />
              ))}
            </div>
          </section>

          {/* Footer decoration - Sanrok arrow style */}
          <div
            className="flex items-center justify-center gap-4 pt-8 mt-12"
            style={{ borderTop: `1px solid ${theme.border}`, color: theme.accent }}
          >
            <ArrowRight className="w-5 h-5" />
            <span
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '18px',
              }}
            >
              CLAUDE-CODE.DEV
            </span>
            <ArrowRight className="w-5 h-5 rotate-180" />
          </div>
        </main>
      </div>
    </div>
  )
}
