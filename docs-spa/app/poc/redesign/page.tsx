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
  Sparkles,
  Command,
  X,
} from 'lucide-react'

// ============================================================================
// DESIGN TOKENS - New color system per plan
// ============================================================================

const tokens = {
  light: {
    // Backgrounds
    bgPage: '#ffffff',
    bgSubtle: '#fafafa',
    bgCard: '#ffffff',
    bgCode: '#f5f5f5',
    bgCodeDark: '#1f1f1f',
    // Text
    textPrimary: '#171717',
    textSecondary: '#666666',
    textMuted: '#999999',
    // Accents
    accentPrimary: '#FF0000', // Sanrok red - bold energy
    accentSecondary: '#1A44B8', // Medieval blue - key actions
    accentGold: '#C9A227', // Medieval gold - special highlights
    // Status
    success: '#2D6A4F',
    warning: '#C49052',
    error: '#9B2335',
    // Borders
    border: 'rgba(0,0,0,0.08)',
    borderStrong: 'rgba(0,0,0,0.15)',
  },
  dark: {
    // Backgrounds
    bgPage: '#0a0a0a',
    bgSubtle: '#141414',
    bgCard: '#1a1a1a',
    bgCode: '#1f1f1f',
    bgCodeDark: '#0d0d0d',
    // Text
    textPrimary: '#fafafa',
    textSecondary: '#a0a0a0',
    textMuted: '#666666',
    // Accents
    accentPrimary: '#FF4444', // Brightened red
    accentSecondary: '#4a7cff', // Brightened blue
    accentGold: '#D4B84A',
    // Status
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#f87171',
    // Borders
    border: 'rgba(255,255,255,0.08)',
    borderStrong: 'rgba(255,255,255,0.15)',
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
      { title: 'What is Claude Code?', href: '#', active: false },
      { title: 'Vanilla Workflow', href: '#', active: false },
      { title: 'Your First Pattern', href: '#', active: false },
    ],
  },
  {
    title: 'Patterns',
    icon: Layers,
    expanded: true,
    items: [
      { title: 'Ralph Wiggum Loop', href: '#', active: true, level: 4 },
      { title: 'Gas Town', href: '#', active: false, level: 6 },
      { title: 'CC Mirror', href: '#', active: false, level: 5 },
      { title: 'Personal Panopticon', href: '#', active: false, level: 5 },
    ],
  },
  {
    title: 'Orchestration',
    icon: GitBranch,
    items: [
      { title: 'Multi-Agent Basics', href: '#', active: false },
      { title: 'Complexity Ladder', href: '#', active: false },
      { title: 'Case Studies', href: '#', active: false },
    ],
  },
  {
    title: 'Tools',
    icon: Terminal,
    items: [
      { title: 'MCP Servers', href: '#', active: false },
      { title: 'Hooks & Skills', href: '#', active: false },
    ],
  },
]

const mockPatterns = [
  {
    name: 'Ralph Wiggum Loop',
    level: 4,
    origin: 'Matt Pocock',
    description: 'Continuous iteration loop that never stops until you do',
    tags: ['autonomous', 'iteration', 'persistence'],
  },
  {
    name: 'Gas Town',
    level: 6,
    origin: 'Steve Yegge',
    description: 'Agent factory with Mayor, Deacon, Dogs, and Refinery roles',
    tags: ['factory', 'agents', 'organization'],
  },
  {
    name: 'CC Mirror',
    level: 5,
    origin: 'Community',
    description: 'Hidden multi-agent orchestration enablement pattern',
    tags: ['multi-agent', 'orchestration', 'hidden'],
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

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
            <Sun className="w-5 h-5 text-gray-600" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="w-5 h-5 text-gray-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (isOpen) {
      setQuery('')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-xl bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-3 border-b border-black/5 dark:border-white/5">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation..."
              className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-base"
              autoFocus
            />
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-white/10 rounded">
              ESC
            </kbd>
          </div>

          {/* Quick Results */}
          <div className="max-h-80 overflow-y-auto p-2">
            {query ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                Searching for &quot;{query}&quot;...
              </div>
            ) : (
              <>
                <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
                  Popular Patterns
                </div>
                {mockPatterns.map((pattern) => (
                  <button
                    key={pattern.name}
                    className="w-full px-3 py-2 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-[#FF0000] dark:group-hover:text-[#FF4444]">
                        {pattern.name}
                      </span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-500">
                        L{pattern.level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {pattern.description}
                    </p>
                  </button>
                ))}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span>Type to search</span>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-white/10 rounded">
                <ArrowRight className="w-3 h-3 inline" />
              </kbd>
              <span>to select</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Sidebar({ theme }: { theme: 'light' | 'dark' }) {
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
    <aside className="w-[280px] h-full border-r border-black/5 dark:border-white/5 flex flex-col">
      {/* Logo */}
      <div className="h-14 px-4 flex items-center border-b border-black/5 dark:border-white/5">
        <Sparkles className="w-6 h-6 text-[#FF0000] dark:text-[#FF4444] mr-2" />
        <span className="font-semibold text-gray-900 dark:text-white">
          Claude Code
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {mockNavigation.map((section) => (
          <div key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
                  <div className="ml-6 mt-1 space-y-0.5">
                    {section.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors ${
                          item.active
                            ? 'bg-[#FF0000]/10 text-[#FF0000] dark:bg-[#FF4444]/10 dark:text-[#FF4444] font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                        }`}
                      >
                        <span>{item.title}</span>
                        {item.level !== undefined && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
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
      <div className="p-4 border-t border-black/5 dark:border-white/5">
        <div className="text-xs text-gray-400">Version 1.0.0</div>
      </div>
    </aside>
  )
}

function PatternCard({
  pattern,
}: {
  pattern: (typeof mockPatterns)[0]
}) {
  const levelColors: Record<number, string> = {
    4: 'bg-red-500',
    5: 'bg-purple-500',
    6: 'bg-pink-500',
  }

  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      className="bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-xl p-5 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-lg ${levelColors[pattern.level] || 'bg-gray-500'} flex items-center justify-center text-white font-bold text-sm`}
          >
            {pattern.level}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {pattern.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              by {pattern.origin}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {pattern.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {pattern.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function CodeExample() {
  const [copied, setCopied] = useState(false)

  const code = `# The Ralph Wiggum Loop
while :; do
  cat PROMPT.md | claude-code --json
  sleep 1  # Brief pause between iterations
done`

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1f1f1f] border border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <span className="text-xs text-gray-400 font-mono">ralph-loop.sh</span>
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

      {/* Code with pseudo-syntax highlighting */}
      <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
        <code>
          <span className="text-gray-500"># The Ralph Wiggum Loop</span>
          {'\n'}
          <span className="text-purple-400">while</span>{' '}
          <span className="text-blue-400">:</span>
          <span className="text-white">;</span>{' '}
          <span className="text-purple-400">do</span>
          {'\n'}
          {'  '}
          <span className="text-green-400">cat</span>{' '}
          <span className="text-yellow-300">PROMPT.md</span>{' '}
          <span className="text-white">|</span>{' '}
          <span className="text-green-400">claude-code</span>{' '}
          <span className="text-blue-300">--json</span>
          {'\n'}
          {'  '}
          <span className="text-green-400">sleep</span>{' '}
          <span className="text-orange-300">1</span>{' '}
          <span className="text-gray-500"># Brief pause between iterations</span>
          {'\n'}
          <span className="text-purple-400">done</span>
        </code>
      </pre>
    </div>
  )
}

function Callout({
  type,
  title,
  children,
}: {
  type: 'info' | 'warning' | 'tip' | 'quote'
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-[#1A44B8] dark:border-[#4a7cff]',
      icon: <Info className="w-5 h-5 text-[#1A44B8] dark:text-[#4a7cff]" />,
      titleColor: 'text-[#1A44B8] dark:text-[#4a7cff]',
    },
    warning: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-500',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      titleColor: 'text-amber-700 dark:text-amber-400',
    },
    tip: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-500',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      titleColor: 'text-emerald-700 dark:text-emerald-400',
    },
    quote: {
      bg: 'bg-gray-50 dark:bg-gray-900/50',
      border: 'border-gray-300 dark:border-gray-600',
      icon: <Quote className="w-5 h-5 text-gray-500" />,
      titleColor: 'text-gray-700 dark:text-gray-300',
    },
  }

  const style = styles[type]

  return (
    <div className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-4`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold mb-1 ${style.titleColor}`}>{title}</h4>
          )}
          <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function RedesignPOC() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [searchOpen, setSearchOpen] = useState(false)

  // Keyboard shortcut for search
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
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'dark bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar theme={theme} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Patterns</span>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <span className="text-gray-900 dark:text-white font-medium">
                Ralph Wiggum Loop
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 dark:bg-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-white/15 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-white dark:bg-white/10 rounded">
                  <Command className="w-3 h-3" />K
                </kbd>
              </button>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-8 py-12">
              {/* POC Notice */}
              <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#FF0000]/10 to-[#1A44B8]/10 dark:from-[#FF4444]/20 dark:to-[#4a7cff]/20 border border-[#FF0000]/20 dark:border-[#FF4444]/30">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FF0000] dark:text-[#FF4444]" />
                  <div>
                    <h2 className="font-semibold text-gray-900 dark:text-white">
                      Design System POC
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Preview of the new Sanrok + Medieval + Vercel hybrid design direction
                    </p>
                  </div>
                </div>
              </div>

              {/* Page Title */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                    Level 4
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Pattern
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Ralph Wiggum Loop
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  A continuous iteration pattern that keeps running until you manually
                  stop it. Named after the Simpsons character who never stops trying.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-3 gap-4 mb-10 p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Complexity
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Level 4
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Origin
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Matt Pocock
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Related
                  </div>
                  <div className="font-semibold text-[#1A44B8] dark:text-[#4a7cff]">
                    CC Mirror
                  </div>
                </div>
              </div>

              {/* Section: Definition */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Definition
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The Ralph Wiggum Loop is named after the Simpsons character known for
                  his persistent, unwavering nature. The pattern embodies the same
                  philosophy: keep iterating until you achieve your goal or the user
                  manually intervenes.
                </p>
                <Callout type="info" title="Core Concept">
                  Unlike traditional scripts that run once, Ralph loops forever. This
                  enables autonomous workflows where Claude continuously improves until
                  the task is complete.
                </Callout>
              </section>

              {/* Section: Implementation */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Implementation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The basic implementation is surprisingly simple:
                </p>
                <CodeExample />
                <div className="mt-4">
                  <Callout type="tip" title="Pro Tip">
                    Add a{' '}
                    <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-sm font-mono">
                      sleep
                    </code>{' '}
                    statement to prevent overwhelming the API and give yourself time to
                    review outputs.
                  </Callout>
                </div>
              </section>

              {/* Section: Trade-offs */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Trade-offs
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                    <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                      Advantages
                    </h3>
                    <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-300">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Autonomous operation - set and forget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Self-healing - recovers from errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Continuous improvement until done</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                      Disadvantages
                    </h3>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Can consume significant API credits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Requires clear termination conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>May loop infinitely on impossible tasks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section: Warning */}
              <section className="mb-10">
                <Callout type="warning" title="Cost Awareness">
                  Ralph loops can accumulate significant API costs if left running
                  unattended. Always set budget limits and monitoring alerts when using
                  autonomous patterns.
                </Callout>
              </section>

              {/* Section: Related Patterns */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Patterns
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockPatterns.slice(1).map((pattern) => (
                    <PatternCard key={pattern.name} pattern={pattern} />
                  ))}
                </div>
              </section>

              {/* Attribution */}
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <Callout type="quote">
                  <p className="italic">
                    &quot;The Ralph Wiggum Loop isn&apos;t about being smart. It&apos;s about being
                    persistent. Sometimes that&apos;s all you need.&quot;
                  </p>
                  <p className="mt-2 text-gray-500 not-italic">
                    — Matt Pocock, original author
                  </p>
                </Callout>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
