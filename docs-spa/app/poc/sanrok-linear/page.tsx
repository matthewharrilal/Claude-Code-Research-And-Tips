'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sun,
  Moon,
  Search,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Layers,
  Zap,
  GitBranch,
  Terminal,
  Copy,
  Check,
  Info,
  AlertTriangle,
  Lightbulb,
  Quote,
  ArrowRight,
  ArrowLeft,
  Command,
  X,
  Star,
  Home,
} from 'lucide-react'

// ============================================================================
// DESIGN TOKENS - Exact match to reference images
// ============================================================================
// Image 1: Blue #1A44B8 + White (blackletter, candelabra)
// Image 2 & 3: Sanrok Red #FF0000 + Cream #FBF5EF (Instrument Serif + Inter)

const tokens = {
  light: {
    // Backgrounds (Sanrok cream)
    bgPage: '#FFFFFF',
    bgCream: '#FBF5EF', // Sanrok cream from images
    bgSubtle: '#F8F6F3',
    bgCard: '#FFFFFF',
    bgCode: '#1a1a1a',
    // Text
    textPrimary: '#171717',
    textSecondary: '#4a4a4a',
    textMuted: '#8a8a8a',
    // Accents (from images)
    sanrokRed: '#FF0000', // Exact Sanrok red
    medievalBlue: '#1A44B8', // Exact medieval blue from Image 1
    accentGold: '#C9A227',
    // Status
    success: '#2D6A4F',
    warning: '#C49052',
    error: '#9B2335',
    // Borders
    border: 'rgba(0,0,0,0.06)',
    borderStrong: 'rgba(0,0,0,0.12)',
  },
  dark: {
    bgPage: '#0a0a0a',
    bgCream: '#1a1814',
    bgSubtle: '#141414',
    bgCard: '#1a1a1a',
    bgCode: '#0d0d0d',
    textPrimary: '#fafafa',
    textSecondary: '#b0b0b0',
    textMuted: '#666666',
    sanrokRed: '#FF4444',
    medievalBlue: '#4a7cff',
    accentGold: '#D4B84A',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    border: 'rgba(255,255,255,0.06)',
    borderStrong: 'rgba(255,255,255,0.12)',
  },
}

// ============================================================================
// MOCK DATA
// ============================================================================

const mockNavigation = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    items: [
      { title: 'What is Claude Code?', href: '#' },
      { title: 'Vanilla Workflow', href: '#' },
      { title: 'Your First Pattern', href: '#' },
    ],
  },
  {
    title: 'Patterns',
    icon: Layers,
    expanded: true,
    items: [
      { title: 'Ralph Wiggum Loop', href: '#', active: true, level: 4 },
      { title: 'Gas Town', href: '#', level: 6 },
      { title: 'CC Mirror', href: '#', level: 5 },
      { title: 'Personal Panopticon', href: '#', level: 5 },
    ],
  },
  {
    title: 'Orchestration',
    icon: GitBranch,
    items: [
      { title: 'Multi-Agent Basics', href: '#' },
      { title: 'Complexity Ladder', href: '#' },
      { title: 'Case Studies', href: '#' },
    ],
  },
  {
    title: 'Tools',
    icon: Terminal,
    items: [
      { title: 'MCP Servers', href: '#' },
      { title: 'Hooks & Skills', href: '#' },
    ],
  },
]

const mockPatterns = [
  {
    name: 'Ralph Wiggum Loop',
    level: 4,
    origin: 'Matt Pocock',
    description: 'Continuous iteration loop that never stops until you do',
    tags: ['autonomous', 'iteration'],
  },
  {
    name: 'Gas Town',
    level: 6,
    origin: 'Steve Yegge',
    description: 'Agent factory with Mayor, Deacon, Dogs, and Refinery roles',
    tags: ['factory', 'agents'],
  },
  {
    name: 'CC Mirror',
    level: 5,
    origin: 'Community',
    description: 'Hidden multi-agent orchestration enablement pattern',
    tags: ['multi-agent', 'orchestration'],
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

// Theme Toggle with animated icons
function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'light' | 'dark'
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="w-5 h-5" style={{ color: tokens.light.sanrokRed }} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="w-5 h-5" style={{ color: tokens.dark.sanrokRed }} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

// Search Modal (Linear/Vercel style)
function SearchModal({
  isOpen,
  onClose,
  theme,
}: {
  isOpen: boolean
  onClose: () => void
  theme: 'light' | 'dark'
}) {
  const [query, setQuery] = useState('')
  const t = theme === 'light' ? tokens.light : tokens.dark

  useEffect(() => {
    if (isOpen) setQuery('')
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[12vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a',
            border: `1px solid ${t.border}`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div
            className="flex items-center px-5 py-4"
            style={{ borderBottom: `1px solid ${t.border}` }}
          >
            <Search className="w-5 h-5 mr-4" style={{ color: t.textMuted }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search patterns, concepts, guides..."
              className="flex-1 bg-transparent outline-none text-lg"
              style={{
                color: t.textPrimary,
                fontFamily: 'var(--font-sans)',
              }}
              autoFocus
            />
            <kbd
              className="px-2 py-1 text-xs rounded"
              style={{
                backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                color: t.textMuted,
              }}
            >
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto p-3">
            <div
              className="px-3 py-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: t.textMuted }}
            >
              Popular Patterns
            </div>
            {mockPatterns.map((pattern) => (
              <button
                key={pattern.name}
                className="w-full px-4 py-3 rounded-xl text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: t.sanrokRed }}
                  >
                    {pattern.level}
                  </span>
                  <div className="flex-1">
                    <div
                      className="font-semibold transition-colors"
                      style={{
                        color: t.textPrimary,
                        fontFamily: "'Instrument Serif', Georgia, serif",
                      }}
                    >
                      {pattern.name}
                    </div>
                    <div className="text-sm" style={{ color: t.textMuted }}>
                      {pattern.description}
                    </div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: t.sanrokRed }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div
            className="px-5 py-3 flex items-center justify-between text-xs"
            style={{
              borderTop: `1px solid ${t.border}`,
              color: t.textMuted,
            }}
          >
            <span>Type to search across all documentation</span>
            <div className="flex items-center gap-2">
              <kbd
                className="px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                }}
              >
                <ArrowRight className="w-3 h-3 inline" />
              </kbd>
              <span>to navigate</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Sidebar (Linear style structure)
function Sidebar({ theme }: { theme: 'light' | 'dark' }) {
  const t = theme === 'light' ? tokens.light : tokens.dark
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['Patterns'])
  )

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }

  return (
    <aside
      className="w-[280px] h-full flex flex-col"
      style={{
        borderRight: `1px solid ${t.border}`,
        backgroundColor: theme === 'light' ? '#fafafa' : '#0f0f0f',
      }}
    >
      {/* Logo - Sanrok style bold typography */}
      <div
        className="h-16 px-5 flex items-center gap-3"
        style={{ borderBottom: `1px solid ${t.border}` }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: t.sanrokRed }}
        >
          CC
        </div>
        <div>
          <div
            className="text-lg tracking-tight"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontStyle: 'italic',
              color: t.textPrimary,
            }}
          >
            Claude Code
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {mockNavigation.map((section) => (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              style={{ color: t.textSecondary }}
            >
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <section.icon className="w-4 h-4" />
              <span>{section.title}</span>
            </button>

            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-7 mt-1 space-y-0.5">
                    {section.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all"
                        style={{
                          backgroundColor: item.active
                            ? `${t.sanrokRed}15`
                            : 'transparent',
                          color: item.active ? t.sanrokRed : t.textSecondary,
                          fontWeight: item.active ? 600 : 400,
                        }}
                      >
                        <span>{item.title}</span>
                        {item.level !== undefined && (
                          <span
                            className="text-xs px-1.5 py-0.5 rounded font-medium"
                            style={{
                              backgroundColor: item.active
                                ? t.sanrokRed
                                : theme === 'light'
                                  ? '#e5e5e5'
                                  : '#333',
                              color: item.active ? '#fff' : t.textMuted,
                            }}
                          >
                            L{item.level}
                          </span>
                        )}
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
      <div className="p-4" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="text-xs" style={{ color: t.textMuted }}>
          144 pages · Last updated today
        </div>
      </div>
    </aside>
  )
}

// Code Block (Vercel style)
function CodeExample({ theme }: { theme: 'light' | 'dark' }) {
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
      style={{
        backgroundColor: '#0d0d0d',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
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

      {/* Code */}
      <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
        <code>
          <span className="text-gray-500"># The Ralph Wiggum Loop</span>
          {'\n'}
          <span className="text-[#FF79C6]">while</span>{' '}
          <span className="text-[#8BE9FD]">:</span>
          <span className="text-white">;</span>{' '}
          <span className="text-[#FF79C6]">do</span>
          {'\n'}
          {'  '}
          <span className="text-[#50FA7B]">cat</span>{' '}
          <span className="text-[#F1FA8C]">PROMPT.md</span>{' '}
          <span className="text-white">|</span>{' '}
          <span className="text-[#50FA7B]">claude-code</span>{' '}
          <span className="text-[#8BE9FD]">--json</span>
          {'\n'}
          {'  '}
          <span className="text-[#50FA7B]">sleep</span>{' '}
          <span className="text-[#BD93F9]">1</span>
          {'\n'}
          <span className="text-[#FF79C6]">done</span>
        </code>
      </pre>
    </div>
  )
}

// Callout Component
function Callout({
  type,
  title,
  children,
  theme,
}: {
  type: 'info' | 'warning' | 'tip' | 'quote'
  title?: string
  children: React.ReactNode
  theme: 'light' | 'dark'
}) {
  const t = theme === 'light' ? tokens.light : tokens.dark

  const styles = {
    info: {
      bg: theme === 'light' ? '#EBF0FF' : 'rgba(26, 68, 184, 0.15)',
      border: t.medievalBlue,
      icon: <Info className="w-5 h-5" style={{ color: t.medievalBlue }} />,
      titleColor: t.medievalBlue,
    },
    warning: {
      bg: theme === 'light' ? '#FFF8EB' : 'rgba(196, 144, 82, 0.15)',
      border: t.warning,
      icon: <AlertTriangle className="w-5 h-5" style={{ color: t.warning }} />,
      titleColor: t.warning,
    },
    tip: {
      bg: theme === 'light' ? '#ECFDF5' : 'rgba(45, 106, 79, 0.15)',
      border: t.success,
      icon: <Lightbulb className="w-5 h-5" style={{ color: t.success }} />,
      titleColor: t.success,
    },
    quote: {
      bg: theme === 'light' ? t.bgCream : 'rgba(251, 245, 239, 0.05)',
      border: t.sanrokRed,
      icon: <Quote className="w-5 h-5" style={{ color: t.sanrokRed }} />,
      titleColor: t.sanrokRed,
    },
  }

  const style = styles[type]

  return (
    <div
      className="rounded-xl p-5"
      style={{
        backgroundColor: style.bg,
        borderLeft: `4px solid ${style.border}`,
      }}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4
              className="font-semibold mb-2"
              style={{
                color: style.titleColor,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
            >
              {title}
            </h4>
          )}
          <div className="text-sm leading-relaxed" style={{ color: t.textSecondary }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// Pattern Card (Sanrok style)
function PatternCard({
  pattern,
  theme,
}: {
  pattern: (typeof mockPatterns)[0]
  theme: 'light' | 'dark'
}) {
  const t = theme === 'light' ? tokens.light : tokens.dark

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl p-5 cursor-pointer transition-shadow"
      style={{
        backgroundColor: t.bgCream,
        border: `1px solid ${t.border}`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: t.sanrokRed }}
        >
          {pattern.level}
        </div>
        <div className="flex-1">
          <h3
            className="text-lg mb-1"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: 'italic',
              color: t.textPrimary,
            }}
          >
            {pattern.name}
          </h3>
          <p className="text-sm mb-3" style={{ color: t.textMuted }}>
            by {pattern.origin}
          </p>
          <p className="text-sm" style={{ color: t.textSecondary }}>
            {pattern.description}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 mt-1" style={{ color: t.textMuted }} />
      </div>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function SanrokLinearPOC() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [searchOpen, setSearchOpen] = useState(false)
  const t = theme === 'light' ? tokens.light : tokens.dark

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: t.bgPage }}
    >
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} theme={theme} />

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar theme={theme} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header
            className="h-14 flex items-center justify-between px-6"
            style={{
              borderBottom: `1px solid ${t.border}`,
              backgroundColor: theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(10,10,10,0.8)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Home className="w-4 h-4" style={{ color: t.textMuted }} />
              <ChevronRight className="w-4 h-4" style={{ color: t.textMuted }} />
              <span style={{ color: t.textMuted }}>Patterns</span>
              <ChevronRight className="w-4 h-4" style={{ color: t.textMuted }} />
              <span
                style={{
                  color: t.sanrokRed,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
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
                style={{
                  backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
                  color: t.textSecondary,
                }}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd
                  className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs rounded"
                  style={{
                    backgroundColor: theme === 'light' ? '#fff' : '#333',
                    color: t.textMuted,
                  }}
                >
                  <Command className="w-3 h-3" />K
                </kbd>
              </button>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-8 py-12">
              {/* Hero Section - Sanrok Editorial Style */}
              <div className="mb-12">
                {/* Level Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1.5 text-sm font-semibold rounded-lg text-white"
                    style={{ backgroundColor: t.sanrokRed }}
                  >
                    LEVEL 4
                  </span>
                  <span
                    className="text-sm uppercase tracking-wider"
                    style={{ color: t.textMuted }}
                  >
                    Pattern
                  </span>
                </div>

                {/* Title - Sanrok Bold Editorial Typography */}
                <h1
                  className="text-5xl md:text-6xl mb-6 leading-tight"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: t.textPrimary,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ralph Wiggum{' '}
                  <span style={{ color: t.sanrokRed }}>Loop</span>
                </h1>

                {/* Subtitle */}
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: t.textSecondary }}
                >
                  A continuous iteration pattern that keeps running until you manually
                  stop it. Named after the Simpsons character who never stops trying.
                </p>
              </div>

              {/* Quick Facts Box - Sanrok Cream Style */}
              <div
                className="rounded-2xl p-6 mb-12"
                style={{
                  backgroundColor: t.bgCream,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: t.textMuted }}
                    >
                      Complexity
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: t.sanrokRed }}
                    >
                      Level 4
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: t.textMuted }}
                    >
                      Origin
                    </div>
                    <div
                      className="text-lg"
                      style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontStyle: 'italic',
                        color: t.textPrimary,
                      }}
                    >
                      Matt Pocock
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: t.textMuted }}
                    >
                      Related
                    </div>
                    <div
                      className="text-lg"
                      style={{ color: t.medievalBlue }}
                    >
                      CC Mirror
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Definition */}
              <section className="mb-12">
                <h2
                  className="text-3xl mb-6"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    color: t.textPrimary,
                  }}
                >
                  Definition
                </h2>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: t.textSecondary }}
                >
                  The Ralph Wiggum Loop is named after the Simpsons character known for
                  his persistent, unwavering nature. The pattern embodies the same
                  philosophy: keep iterating until you achieve your goal or the user
                  manually intervenes.
                </p>
                <Callout type="info" title="Core Concept" theme={theme}>
                  Unlike traditional scripts that run once, Ralph loops forever. This
                  enables autonomous workflows where Claude continuously improves until
                  the task is complete.
                </Callout>
              </section>

              {/* Section: Implementation */}
              <section className="mb-12">
                <h2
                  className="text-3xl mb-6"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    color: t.textPrimary,
                  }}
                >
                  Implementation
                </h2>
                <p className="text-lg mb-6" style={{ color: t.textSecondary }}>
                  The basic implementation is surprisingly simple:
                </p>
                <CodeExample theme={theme} />
                <div className="mt-6">
                  <Callout type="tip" title="Pro Tip" theme={theme}>
                    Add a{' '}
                    <code
                      className="px-1.5 py-0.5 rounded text-sm font-mono"
                      style={{
                        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                        color: t.sanrokRed,
                      }}
                    >
                      sleep
                    </code>{' '}
                    statement to prevent overwhelming the API and give yourself time to
                    review outputs.
                  </Callout>
                </div>
              </section>

              {/* Section: Trade-offs */}
              <section className="mb-12">
                <h2
                  className="text-3xl mb-6"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    color: t.textPrimary,
                  }}
                >
                  Trade-offs
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: theme === 'light' ? '#ECFDF5' : 'rgba(45, 106, 79, 0.15)',
                      border: `1px solid ${t.success}30`,
                    }}
                  >
                    <h3
                      className="font-semibold mb-4 flex items-center gap-2"
                      style={{ color: t.success }}
                    >
                      <Check className="w-5 h-5" />
                      Advantages
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ color: t.textSecondary }}>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.success }} />
                        <span>Autonomous operation - set and forget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.success }} />
                        <span>Self-healing - recovers from errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.success }} />
                        <span>Continuous improvement until done</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: theme === 'light' ? '#FEF2F2' : 'rgba(155, 35, 53, 0.15)',
                      border: `1px solid ${t.error}30`,
                    }}
                  >
                    <h3
                      className="font-semibold mb-4 flex items-center gap-2"
                      style={{ color: t.error }}
                    >
                      <X className="w-5 h-5" />
                      Disadvantages
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ color: t.textSecondary }}>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.error }} />
                        <span>Can consume significant API credits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.error }} />
                        <span>Requires clear termination conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.error }} />
                        <span>May loop infinitely on impossible tasks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Warning */}
              <section className="mb-12">
                <Callout type="warning" title="Cost Awareness" theme={theme}>
                  Ralph loops can accumulate significant API costs if left running
                  unattended. Always set budget limits and monitoring alerts when using
                  autonomous patterns.
                </Callout>
              </section>

              {/* Related Patterns */}
              <section className="mb-12">
                <h2
                  className="text-3xl mb-6"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    color: t.textPrimary,
                  }}
                >
                  Related Patterns
                </h2>
                <div className="grid gap-4">
                  {mockPatterns.slice(1).map((pattern) => (
                    <PatternCard key={pattern.name} pattern={pattern} theme={theme} />
                  ))}
                </div>
              </section>

              {/* Quote Attribution - Sanrok Editorial Style */}
              <section
                className="pt-8 mt-12"
                style={{ borderTop: `1px solid ${t.border}` }}
              >
                <Callout type="quote" theme={theme}>
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontStyle: 'italic',
                    }}
                  >
                    &quot;The Ralph Wiggum Loop isn&apos;t about being smart. It&apos;s about being
                    persistent. Sometimes that&apos;s all you need.&quot;
                  </p>
                  <p className="mt-4 text-sm" style={{ color: t.textMuted }}>
                    <span style={{ color: t.sanrokRed }}>—</span> Matt Pocock,
                    original author
                  </p>
                </Callout>
              </section>

              {/* Arrows decoration (Sanrok style) */}
              <div
                className="flex items-center justify-center gap-4 mt-12 text-2xl"
                style={{ color: t.sanrokRed }}
              >
                <ArrowRight className="w-6 h-6" />
                <span
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                  }}
                >
                  CLAUDE-CODE.DEV
                </span>
                <ArrowLeft className="w-6 h-6" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
