'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Search, ChevronRight, ChevronDown, Copy, Check,
  BookOpen, Layers, GitBranch, Terminal, Settings,
  Zap, AlertTriangle, Target, Lightbulb, FileCode,
  ArrowRight, Command, Sun, Moon, Link2, Users,
  FlaskConical, Compass, Scale, HelpCircle,
} from 'lucide-react'

// ============================================================================
// DENSE DESIGN TOKENS
// Typography: 14px body, 20px H2 (smaller than standard docs)
// Spacing: Reduced by 40% from typical docs
// Layout: THREE columns (180px | flex | 300px)
// ============================================================================

const dense = {
  layout: {
    leftNav: '180px',
    rightSidebar: '300px',
    contentMax: '680px',
    headerHeight: '48px',
  },
  typography: {
    h1: { size: '28px', weight: 700, lineHeight: '1.2', letterSpacing: '-0.5px' },
    h2: { size: '18px', weight: 600, lineHeight: '1.3' },
    h3: { size: '15px', weight: 600, lineHeight: '1.4' },
    body: { size: '14px', weight: 400, lineHeight: '1.55' },
    small: { size: '12px', weight: 400, lineHeight: '1.5' },
    micro: { size: '11px', weight: 500, lineHeight: '1.4' },
  },
  spacing: {
    section: '20px',
    paragraph: '10px',
    callout: '10px',
    card: '10px',
    inline: '6px',
  },
  colors: {
    // Sanrok + Medieval palette
    red: '#FF0000',
    blue: '#1A44B8',
    cream: '#FBF5EF',
    // Semantic colors for sidebar cards
    invariant: '#2563eb',
    caseStudy: '#f59e0b',
    warning: '#dc2626',
    composition: '#7c3aed',
    frontier: '#059669',
    alternative: '#6b7280',
  },
}

const themes = {
  light: {
    bg: '#ffffff',
    bgSubtle: '#fafafa',
    bgCard: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#4a4a4a',
    textMuted: '#8a8a8a',
    border: 'rgba(0,0,0,0.08)',
  },
  dark: {
    bg: '#0a0a0a',
    bgSubtle: '#111111',
    bgCard: '#161616',
    text: '#f5f5f5',
    textSecondary: '#b0b0b0',
    textMuted: '#707070',
    border: 'rgba(255,255,255,0.08)',
  },
}

// Navigation items
const nav = [
  { title: 'Getting Started', icon: BookOpen, items: ['Quick Start', 'Vanilla Workflow', 'First Pattern'] },
  { title: 'Patterns', icon: Layers, items: ['Ralph Wiggum Loop', 'Gas Town', 'CC Mirror', 'Panopticon'], expanded: true },
  { title: 'Orchestration', icon: GitBranch, items: ['Multi-Agent', 'Complexity Ladder'] },
  { title: 'Tools', icon: Terminal, items: ['MCP Servers', 'Hooks'] },
  { title: 'Reference', icon: Settings, items: ['SOURCE-INDEX', 'PLAYBOOK'] },
]

// RIGHT SIDEBAR: Operational Intelligence Cards
const intelCards = [
  { type: 'invariant', id: 'INV-001', title: 'Context = Memory', content: 'At 80K tokens, quality degrades. Fresh instances outperform extended sessions. This is why Ralph restarts.' },
  { type: 'caseStudy', author: 'Ryan Carson', metric: '14 iterations, ~$12', content: 'Enterprise Legal Agent. 8 user stories run overnight. All completed by morning.' },
  { type: 'warning', title: 'Context Rot', content: 'At ~80K tokens, quality inverts. Instructions get lost. Restart rather than debug.' },
  { type: 'composition', tools: ['Ralph', 'Playwright'], content: 'Combine for verification loops. Run code, test, iterate. Matt Pocock pattern.' },
  { type: 'invariant', id: 'INV-002', title: 'Files > Memory', content: 'External state persists. Internal context decays. Write everything to disk.' },
  { type: 'frontier', status: 'UNSOLVED', title: 'Compaction Window', content: 'When to compact progress.txt? After N iterations? After K bytes? Best practice: manual.' },
  { type: 'caseStudy', author: 'Molly Cantillon', metric: '8 parallel agents', content: 'Personal Panopticon: health, finance, learning, tasks. Each domain has dedicated Claude.' },
  { type: 'alternative', title: 'Not Ralph?', paths: ['Need persistence? → CC Mirror', 'Need human gate? → HOTL', 'Need multi-agent? → Gas Town'] },
]

// ============================================================================
// COMPONENTS
// ============================================================================

function LeftNav({ theme }: { theme: typeof themes.light }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['Patterns']))
  const toggle = (t: string) => setExpanded(p => { const n = new Set(p); n.has(t) ? n.delete(t) : n.add(t); return n })

  return (
    <aside style={{ width: dense.layout.leftNav, backgroundColor: theme.bgSubtle, borderRight: `1px solid ${theme.border}` }} className="fixed left-0 top-0 h-screen flex flex-col">
      {/* Logo */}
      <div className="h-12 px-3 flex items-center gap-2" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-black" style={{ backgroundColor: dense.colors.red }}>CC</div>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px', color: theme.text }}>Docs</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {nav.map(s => (
          <div key={s.title} className="mb-0.5">
            <button onClick={() => toggle(s.title)} className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded text-xs" style={{ color: theme.textSecondary }}>
              {expanded.has(s.title) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <s.icon className="w-3 h-3" />
              <span className="font-medium">{s.title}</span>
            </button>
            {expanded.has(s.title) && (
              <div className="ml-5 mt-0.5 space-y-0.5">
                {s.items.map(item => (
                  <a key={item} href="#" className="block px-2 py-1 text-xs rounded transition-colors" style={{ color: item === 'Ralph Wiggum Loop' ? dense.colors.red : theme.textMuted, fontWeight: item === 'Ralph Wiggum Loop' ? 600 : 400, backgroundColor: item === 'Ralph Wiggum Loop' ? `${dense.colors.red}10` : 'transparent' }}>{item}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

function IntelCard({ card, theme }: { card: typeof intelCards[0], theme: typeof themes.light }) {
  const typeConfig: Record<string, { color: string, icon: any, label: string }> = {
    invariant: { color: dense.colors.invariant, icon: Target, label: 'INVARIANT' },
    caseStudy: { color: dense.colors.caseStudy, icon: Zap, label: 'CASE STUDY' },
    warning: { color: dense.colors.warning, icon: AlertTriangle, label: 'WARNING' },
    composition: { color: dense.colors.composition, icon: Layers, label: 'COMPOSITION' },
    frontier: { color: dense.colors.frontier, icon: FlaskConical, label: 'FRONTIER' },
    alternative: { color: dense.colors.alternative, icon: Compass, label: 'ALTERNATIVES' },
  }
  const cfg = typeConfig[card.type]
  const Icon = cfg.icon

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${cfg.color}30`, backgroundColor: `${cfg.color}08` }}>
      {/* Header */}
      <div className="px-2.5 py-1.5 flex items-center gap-1.5" style={{ backgroundColor: `${cfg.color}15`, borderBottom: `1px solid ${cfg.color}20` }}>
        <Icon className="w-3 h-3" style={{ color: cfg.color }} />
        <span className="text-[10px] font-bold tracking-wide" style={{ color: cfg.color }}>{cfg.label}</span>
        {card.id && <span className="text-[9px] ml-auto" style={{ color: cfg.color }}>{card.id}</span>}
      </div>
      {/* Body */}
      <div className="px-2.5 py-2">
        {card.title && <div className="text-[12px] font-semibold mb-1" style={{ color: theme.text }}>{card.title}</div>}
        {card.author && <div className="text-[11px] font-medium mb-0.5" style={{ color: cfg.color }}>{card.author} · {card.metric}</div>}
        {card.tools && <div className="text-[11px] font-medium mb-0.5" style={{ color: cfg.color }}>{card.tools.join(' + ')}</div>}
        {card.status && <div className="text-[10px] font-bold mb-0.5" style={{ color: cfg.color }}>{card.status}</div>}
        <div className="text-[11px] leading-[1.45]" style={{ color: theme.textSecondary }}>{card.content}</div>
        {card.paths && (
          <div className="mt-1.5 space-y-0.5">
            {card.paths.map(p => <div key={p} className="text-[10px]" style={{ color: theme.textMuted }}>→ {p}</div>)}
          </div>
        )}
      </div>
    </div>
  )
}

function RightSidebar({ theme }: { theme: typeof themes.light }) {
  return (
    <aside style={{ width: dense.layout.rightSidebar, backgroundColor: theme.bgSubtle, borderLeft: `1px solid ${theme.border}` }} className="fixed right-0 top-0 h-screen overflow-y-auto">
      {/* Header */}
      <div className="px-3 py-2.5 flex items-center gap-2" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: `${dense.colors.blue}15` }}>
          <Zap className="w-3 h-3" style={{ color: dense.colors.blue }} />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: dense.colors.blue }}>Operational Intelligence</div>
          <div className="text-[9px]" style={{ color: theme.textMuted }}>{intelCards.length} insights</div>
        </div>
      </div>

      {/* Cards - DENSE spacing */}
      <div className="p-2 space-y-2">
        {intelCards.map((card, i) => <IntelCard key={i} card={card} theme={theme} />)}
      </div>
    </aside>
  )
}

function EssenceBox({ theme }: { theme: typeof themes.light }) {
  return (
    <div className="rounded-lg p-3 mb-4" style={{ backgroundColor: `${dense.colors.blue}08`, borderLeft: `3px solid ${dense.colors.blue}` }}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ backgroundColor: dense.colors.blue, color: 'white' }}>ESSENCE</span>
        <span className="text-[10px]" style={{ color: theme.textMuted }}>15 words</span>
      </div>
      <p className="text-[13px] font-medium" style={{ color: theme.text }}>Ralph loops fresh Claude instances with external state for autonomous overnight development.</p>
    </div>
  )
}

function CoreAbstraction({ theme }: { theme: typeof themes.light }) {
  return (
    <div className="rounded-lg p-3 mb-4 text-center" style={{ backgroundColor: theme.bgSubtle, border: `1px solid ${theme.border}` }}>
      <p className="text-[13px] italic mb-2" style={{ color: theme.textSecondary }}>"Context degrades with tokens. Files persist."</p>
      <div className="rounded px-3 py-2 mb-2 font-mono text-[12px]" style={{ backgroundColor: '#0d0d0d', color: '#50fa7b' }}>
        while :; do cat PROMPT.md | claude ; done
      </div>
      <p className="text-[11px]" style={{ color: theme.textMuted }}>That's the whole pattern. Everything else is scaffolding.</p>
    </div>
  )
}

function CodeBlock({ filename, code, theme }: { filename: string, code: string, theme: typeof themes.light }) {
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) }

  return (
    <div className="rounded-lg overflow-hidden mb-3" style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-[11px] font-mono text-gray-400">{filename}</span>
        <button onClick={copy} className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white">
          {copied ? <><Check className="w-3 h-3 text-green-400" /><span className="text-green-400">Copied</span></> : <><Copy className="w-3 h-3" /><span>Copy</span></>}
        </button>
      </div>
      <pre className="p-3 text-[12px] font-mono leading-[1.5] overflow-x-auto text-gray-300"><code>{code}</code></pre>
    </div>
  )
}

function Callout({ type, title, children, theme }: { type: 'info' | 'warning' | 'tip', title?: string, children: React.ReactNode, theme: typeof themes.light }) {
  const cfg = { info: { bg: `${dense.colors.blue}10`, border: dense.colors.blue, icon: Lightbulb }, warning: { bg: '#fef3c7', border: '#f59e0b', icon: AlertTriangle }, tip: { bg: '#ecfdf5', border: '#10b981', icon: Target } }
  const c = cfg[type]
  const Icon = c.icon
  return (
    <div className="rounded-lg p-2.5 mb-3" style={{ backgroundColor: c.bg, borderLeft: `3px solid ${c.border}` }}>
      <div className="flex gap-2">
        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: c.border }} />
        <div>
          {title && <div className="text-[12px] font-semibold mb-0.5" style={{ color: c.border }}>{title}</div>}
          <div className="text-[12px] leading-[1.5]" style={{ color: theme.textSecondary }}>{children}</div>
        </div>
      </div>
    </div>
  )
}

function FileStructure({ theme }: { theme: typeof themes.light }) {
  return (
    <div className="rounded-lg overflow-hidden mb-3" style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-[11px] font-mono text-gray-400">project/scripts/ralph/</span>
        <button className="flex items-center gap-1 text-[10px] text-gray-400"><Copy className="w-3 h-3" /></button>
      </div>
      <pre className="p-3 text-[11px] font-mono leading-[1.6] text-gray-300">
{`├── ralph.sh        # The loop engine
├── prompt.md       # Instructions per iteration
├── prd.json        # Task state (minimal)
└── progress.txt    # Learnings log (append-only)`}
      </pre>
    </div>
  )
}

// ============================================================================
// MAIN PAGE - THREE COLUMNS, DENSE
// ============================================================================

export default function DenseMatchPOC() {
  const [isDark, setIsDark] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const theme = isDark ? themes.dark : themes.light

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true) } if (e.key === 'Escape') setSearchOpen(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg }}>
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      <LeftNav theme={theme} />
      <RightSidebar theme={theme} />

      {/* Main Content - Between left and right sidebars */}
      <div style={{ marginLeft: dense.layout.leftNav, marginRight: dense.layout.rightSidebar }}>
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-4" style={{ height: dense.layout.headerHeight, backgroundColor: `${theme.bg}f0`, backdropFilter: 'blur(8px)', borderBottom: `1px solid ${theme.border}` }}>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span style={{ color: theme.textMuted }}>Patterns</span>
            <ChevronRight className="w-3 h-3" style={{ color: theme.textMuted }} />
            <span style={{ color: dense.colors.red, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>Ralph Wiggum Loop</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(true)} className="flex items-center gap-1.5 px-2 py-1 text-[11px] rounded" style={{ backgroundColor: theme.bgSubtle, color: theme.textMuted }}>
              <Search className="w-3 h-3" /><span>Search</span><kbd className="px-1 text-[9px] rounded" style={{ backgroundColor: theme.bg }}><Command className="w-2.5 h-2.5 inline" />K</kbd>
            </button>
            <button onClick={() => setIsDark(!isDark)} className="p-1.5 rounded" style={{ color: dense.colors.red }}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="px-5 py-5" style={{ maxWidth: dense.layout.contentMax }}>
          {/* Level badge + Title */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-[10px] font-bold rounded text-white" style={{ backgroundColor: dense.colors.red }}>LEVEL 4</span>
            <span className="text-[10px] uppercase tracking-wider" style={{ color: theme.textMuted }}>Pattern</span>
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: dense.typography.h1.size, fontWeight: dense.typography.h1.weight, lineHeight: dense.typography.h1.lineHeight, letterSpacing: dense.typography.h1.letterSpacing, color: theme.text, marginBottom: '8px' }}>
            Ralph Wiggum <span style={{ color: dense.colors.red }}>Loop</span>
          </h1>

          <p className="mb-4" style={{ fontSize: dense.typography.body.size, lineHeight: dense.typography.body.lineHeight, color: theme.textSecondary }}>
            Continuous iteration pattern for autonomous overnight development. Named after the Simpsons character who never stops trying.
          </p>

          <EssenceBox theme={theme} />
          <CoreAbstraction theme={theme} />

          {/* Section: Why Fresh Context */}
          <section style={{ marginBottom: dense.spacing.section }}>
            <h2 style={{ fontSize: dense.typography.h2.size, fontWeight: dense.typography.h2.weight, color: dense.colors.blue, marginBottom: '8px', cursor: 'pointer' }}>
              Why Fresh Context?
            </h2>
            <p style={{ fontSize: dense.typography.body.size, lineHeight: dense.typography.body.lineHeight, color: theme.textSecondary, marginBottom: dense.spacing.paragraph }}>
              At 80K tokens, Claude's quality degrades. Instructions get lost. This is "context rot"—a fundamental limitation of transformer attention.
            </p>
            <Callout type="info" title="What This Means" theme={theme}>
              Kill and restart. Don't try to extend sessions. If iteration 20 produces worse code than iteration 5, your context is rotting. The fix is to restart, not debug.
            </Callout>
          </section>

          {/* Section: File Structure */}
          <section style={{ marginBottom: dense.spacing.section }}>
            <h2 style={{ fontSize: dense.typography.h2.size, fontWeight: dense.typography.h2.weight, color: theme.text, marginBottom: '8px' }}>File Structure</h2>
            <FileStructure theme={theme} />
            <Callout type="tip" title="Minimal State" theme={theme}>
              Keep prd.json minimal. Only store what can't be regenerated. progress.txt is append-only—learnings compound across iterations.
            </Callout>
          </section>

          {/* Section: The Loop Engine */}
          <section style={{ marginBottom: dense.spacing.section }}>
            <h2 style={{ fontSize: dense.typography.h2.size, fontWeight: dense.typography.h2.weight, color: theme.text, marginBottom: '8px' }}>The Loop Engine</h2>
            <CodeBlock filename="ralph.sh" theme={theme} code={`#!/bin/bash
set -e
MAX_ITERATIONS=\${1:-10}
SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="
  cat "$SCRIPT_DIR/prompt.md" | claude-code --json
  sleep 2
done`} />
            <CodeBlock filename="prompt.md" theme={theme} code={`# Task
Continue implementing the features in prd.json.

# Context
- Read progress.txt for learnings
- Check prd.json for remaining tasks
- Write code, run tests, commit

# Output
Update progress.txt with what you learned.`} />
          </section>

          {/* Section: When To Use */}
          <section style={{ marginBottom: dense.spacing.section }}>
            <h2 style={{ fontSize: dense.typography.h2.size, fontWeight: dense.typography.h2.weight, color: theme.text, marginBottom: '8px' }}>When To Use</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3" style={{ backgroundColor: '#ecfdf5', border: '1px solid #10b98130' }}>
                <h3 className="text-[12px] font-semibold mb-2" style={{ color: '#10b981' }}>✓ Good For</h3>
                <ul className="space-y-1 text-[11px]" style={{ color: theme.textSecondary }}>
                  <li>• Overnight autonomous work</li>
                  <li>• Repetitive implementation</li>
                  <li>• Well-defined PRDs</li>
                  <li>• Solo developer projects</li>
                </ul>
              </div>
              <div className="rounded-lg p-3" style={{ backgroundColor: '#fef2f2', border: '1px solid #ef444430' }}>
                <h3 className="text-[12px] font-semibold mb-2" style={{ color: '#ef4444' }}>✗ Avoid When</h3>
                <ul className="space-y-1 text-[11px]" style={{ color: theme.textSecondary }}>
                  <li>• Need human review gates</li>
                  <li>• Undefined requirements</li>
                  <li>• Multi-agent coordination</li>
                  <li>• Budget constraints</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Trade-offs */}
          <section style={{ marginBottom: dense.spacing.section }}>
            <h2 style={{ fontSize: dense.typography.h2.size, fontWeight: dense.typography.h2.weight, color: theme.text, marginBottom: '8px' }}>Trade-offs</h2>
            <Callout type="warning" title="Cost Awareness" theme={theme}>
              14 iterations × ~$0.80/iteration = ~$11 per overnight run. Set MAX_ITERATIONS to control budget.
            </Callout>
          </section>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 pt-4 mt-6" style={{ borderTop: `1px solid ${theme.border}`, color: dense.colors.red }}>
            <ArrowRight className="w-4 h-4" />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '14px' }}>CLAUDE-CODE.DEV</span>
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
        </main>
      </div>
    </div>
  )
}
