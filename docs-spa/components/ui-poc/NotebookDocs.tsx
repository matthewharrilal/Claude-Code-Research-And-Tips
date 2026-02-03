'use client'

/**
 * NotebookDocs Component - HIGH VISUAL DENSITY
 *
 * Clean Notion/Linear style reference documentation.
 * NOT a journey. Maximum information density.
 *
 * Design Tokens:
 * - medieval-blue: #1A44B8 (primary accents)
 * - sanrok-red: #FF0000 (sparse warning accent)
 * - sanrok-cream: #FBF5EF (page background)
 * - text-sm: 0.875rem (14px base - compact but readable)
 * - text-xs: 0.625rem (10px for labels)
 * - line-height: 1.4-1.5 (tight)
 * - font-body: Inter
 * - font-mono: JetBrains Mono
 *
 * Layout:
 * - Left: Sticky compact TOC (180px)
 * - Center: Dense main content
 * - Right: Quick reference cards (280px)
 */

import { useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight, Copy, Check,
  FileCode, Zap, AlertTriangle, Bookmark,
  Hash
} from 'lucide-react'

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const tokens = {
  // Brand colors
  blue: '#1A44B8',
  blueLight: 'rgba(26, 68, 184, 0.08)',
  blueBorder: 'rgba(26, 68, 184, 0.2)',

  red: '#FF0000',
  redLight: 'rgba(255, 0, 0, 0.06)',
  redBorder: 'rgba(255, 0, 0, 0.2)',

  // Background
  cream: '#FBF5EF',
  surface: '#FFFFFF',
  surfaceAlt: '#F8F6F3',

  // Text
  textPrimary: '#1A1A2E',
  textSecondary: '#4A4A5A',
  textMuted: '#8A8A9A',

  // Borders
  border: '#E5E3DE',
  borderLight: '#F0EDE8',

  // Code
  codeBg: '#1E1E2E',
  codeText: '#CDD6F4',
}

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

const typography = {
  // 14px base for density
  body: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
    fontWeight: 400,
  },
  bodySmall: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '0.8125rem', // 13px
    lineHeight: 1.4,
    fontWeight: 400,
  },
  label: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '0.625rem', // 10px
    lineHeight: 1.2,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },
  mono: {
    fontFamily: '"JetBrains Mono", "SF Mono", Monaco, monospace',
    fontSize: '0.8125rem', // 13px
    lineHeight: 1.5,
  },
  monoSmall: {
    fontFamily: '"JetBrains Mono", "SF Mono", Monaco, monospace',
    fontSize: '0.75rem', // 12px
    lineHeight: 1.4,
  },
}

// ============================================================================
// TOC ITEM TYPE
// ============================================================================

interface TocItem {
  id: string
  label: string
  level: number // 1 = h2, 2 = h3
}

// ============================================================================
// COLLAPSIBLE SECTION
// ============================================================================

interface CollapsibleSectionProps {
  id: string
  title: string
  defaultOpen?: boolean
  children: ReactNode
  badge?: string
}

function CollapsibleSection({ id, title, defaultOpen = true, children, badge }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section id={id} className="border-b" style={{ borderColor: tokens.border }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 py-2.5 px-1 text-left hover:bg-black/[0.02] transition-colors"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ChevronRight className="w-3.5 h-3.5" style={{ color: tokens.textMuted }} />
        </motion.div>
        <h2
          className="flex-1 font-semibold"
          style={{
            ...typography.body,
            fontWeight: 600,
            color: tokens.textPrimary,
          }}
        >
          {title}
        </h2>
        {badge && (
          <span
            className="px-1.5 py-0.5 rounded text-[10px] font-medium"
            style={{
              backgroundColor: tokens.blueLight,
              color: tokens.blue,
            }}
          >
            {badge}
          </span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-5 pr-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ============================================================================
// CODE BLOCK (COMPACT)
// ============================================================================

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div
      className="rounded-md overflow-hidden my-2"
      style={{ border: `1px solid ${tokens.border}` }}
    >
      {/* Header - compact */}
      {(filename || language) && (
        <div
          className="flex items-center justify-between px-2.5 py-1"
          style={{
            backgroundColor: tokens.surfaceAlt,
            borderBottom: `1px solid ${tokens.border}`,
          }}
        >
          <span style={{ ...typography.monoSmall, color: tokens.textMuted }}>
            {filename || language}
          </span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-black/5 transition-colors"
          >
            {copied ? (
              <Check className="w-3 h-3" style={{ color: '#22c55e' }} />
            ) : (
              <Copy className="w-3 h-3" style={{ color: tokens.textMuted }} />
            )}
          </button>
        </div>
      )}
      {/* Code - dense padding */}
      <div style={{ backgroundColor: tokens.codeBg }}>
        <pre
          className="p-2.5 overflow-x-auto"
          style={{
            ...typography.monoSmall,
            color: tokens.codeText,
            margin: 0,
          }}
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

// ============================================================================
// INLINE CODE
// ============================================================================

function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code
      className="px-1 py-0.5 rounded"
      style={{
        ...typography.monoSmall,
        backgroundColor: tokens.blueLight,
        color: tokens.blue,
      }}
    >
      {children}
    </code>
  )
}

// ============================================================================
// DENSE TABLE
// ============================================================================

interface TableRow {
  cells: (string | ReactNode)[]
}

interface DenseTableProps {
  headers: string[]
  rows: TableRow[]
}

function DenseTable({ headers, rows }: DenseTableProps) {
  return (
    <div className="overflow-x-auto my-2 rounded-md" style={{ border: `1px solid ${tokens.border}` }}>
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ backgroundColor: tokens.surfaceAlt }}>
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left px-2 py-1.5"
                style={{
                  ...typography.label,
                  color: tokens.textMuted,
                  borderBottom: `1px solid ${tokens.border}`,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-black/[0.02] transition-colors"
              style={{
                borderBottom: i < rows.length - 1 ? `1px solid ${tokens.borderLight}` : undefined,
              }}
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className="px-2 py-1.5"
                  style={{
                    ...typography.bodySmall,
                    color: tokens.textSecondary,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ============================================================================
// COMPACT CALLOUT
// ============================================================================

interface CalloutProps {
  type: 'info' | 'warning' | 'tip'
  children: ReactNode
}

function Callout({ type, children }: CalloutProps) {
  const styles = {
    info: { bg: tokens.blueLight, border: tokens.blue, icon: Zap, color: tokens.blue },
    warning: { bg: tokens.redLight, border: tokens.red, icon: AlertTriangle, color: tokens.red },
    tip: { bg: 'rgba(34, 197, 94, 0.08)', border: '#22c55e', icon: Bookmark, color: '#16a34a' },
  }
  const s = styles[type]
  const Icon = s.icon

  return (
    <div
      className="flex gap-2 p-2.5 rounded-md my-2"
      style={{
        backgroundColor: s.bg,
        borderLeft: `2px solid ${s.border}`,
      }}
    >
      <Icon className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: s.color }} />
      <div style={{ ...typography.bodySmall, color: tokens.textSecondary }}>
        {children}
      </div>
    </div>
  )
}

// ============================================================================
// METADATA LINE
// ============================================================================

interface MetadataProps {
  items: { label: string; value: string }[]
}

function MetadataLine({ items }: MetadataProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span style={{ ...typography.label, color: tokens.textMuted }}>
            {item.label}
          </span>
          <span style={{ ...typography.bodySmall, color: tokens.textSecondary, fontWeight: 500 }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// STICKY TOC (180px, compact)
// ============================================================================

interface StickyTocProps {
  items: TocItem[]
  activeId: string
}

function StickyToc({ items, activeId }: StickyTocProps) {
  return (
    <nav className="sticky top-4">
      <div
        className="text-[10px] font-semibold uppercase tracking-wider mb-2 px-2"
        style={{ color: tokens.textMuted }}
      >
        On this page
      </div>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block px-2 py-1 rounded transition-colors hover:bg-black/[0.04]"
              style={{
                ...typography.bodySmall,
                color: activeId === item.id ? tokens.blue : tokens.textMuted,
                fontWeight: activeId === item.id ? 500 : 400,
                paddingLeft: item.level === 2 ? '1rem' : '0.5rem',
                borderLeft: activeId === item.id ? `2px solid ${tokens.blue}` : '2px solid transparent',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ============================================================================
// QUICK REFERENCE CARD
// ============================================================================

interface QuickRefCardProps {
  title: string
  items: { term: string; desc: string }[]
}

function QuickRefCard({ title, items }: QuickRefCardProps) {
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{ border: `1px solid ${tokens.border}` }}
    >
      <div
        className="px-2.5 py-1.5"
        style={{
          backgroundColor: tokens.surfaceAlt,
          borderBottom: `1px solid ${tokens.border}`,
        }}
      >
        <h4 style={{ ...typography.label, color: tokens.textMuted }}>
          {title}
        </h4>
      </div>
      <div className="divide-y" style={{ borderColor: tokens.borderLight }}>
        {items.map((item, i) => (
          <div key={i} className="px-2.5 py-1.5">
            <div style={{ ...typography.monoSmall, color: tokens.blue, fontWeight: 500 }}>
              {item.term}
            </div>
            <div style={{ ...typography.bodySmall, color: tokens.textMuted, marginTop: 1 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// BODY TEXT COMPONENTS
// ============================================================================

function Para({ children }: { children: ReactNode }) {
  return (
    <p className="my-2" style={{ ...typography.body, color: tokens.textSecondary }}>
      {children}
    </p>
  )
}

function List({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="my-2 space-y-0.5 pl-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative"
          style={{ ...typography.body, color: tokens.textSecondary }}
        >
          <span
            className="absolute -left-3"
            style={{ color: tokens.blue }}
          >
            -
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// ============================================================================
// MAIN COMPONENT - Ralph Pattern Reference
// ============================================================================

export function NotebookDocs() {
  const [activeSection, setActiveSection] = useState('core-loop')

  const tocItems: TocItem[] = [
    { id: 'core-loop', label: 'The Core Loop', level: 1 },
    { id: 'why-fresh', label: 'Why Fresh Context?', level: 1 },
    { id: 'file-structure', label: 'File Structure', level: 1 },
    { id: 'prd-format', label: 'PRD Format', level: 2 },
    { id: 'prompt-format', label: 'Prompt Format', level: 2 },
    { id: 'variants', label: 'Ralph Variants', level: 1 },
    { id: 'gotchas', label: 'Common Gotchas', level: 1 },
    { id: 'when-to-use', label: 'When to Use', level: 1 },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: tokens.cream }}>
      {/* Header - minimal */}
      <header
        className="border-b px-4 py-2"
        style={{ borderColor: tokens.border, backgroundColor: tokens.surface }}
      >
        <div className="flex items-center gap-2 text-xs">
          <span style={{ ...typography.label, color: tokens.blue }}>Claude Code</span>
          <span style={{ color: tokens.textMuted }}>/</span>
          <span style={{ color: tokens.textMuted }}>Patterns</span>
          <span style={{ color: tokens.textMuted }}>/</span>
          <span style={{ ...typography.body, color: tokens.textPrimary, fontWeight: 500 }}>
            Ralph Wiggum
          </span>
        </div>
      </header>

      {/* Three-Panel Layout */}
      <div className="flex">
        {/* Left: TOC (180px) */}
        <aside
          className="w-[180px] shrink-0 p-3 border-r min-h-[calc(100vh-37px)]"
          style={{ borderColor: tokens.border, backgroundColor: tokens.surface }}
        >
          <StickyToc items={tocItems} activeId={activeSection} />
        </aside>

        {/* Center: Main Content */}
        <main
          className="flex-1 min-w-0 px-6 py-4"
          style={{ backgroundColor: tokens.surface }}
        >
          <div className="max-w-3xl">
            {/* Page Title */}
            <div className="mb-4">
              <h1
                className="text-xl font-semibold mb-1"
                style={{ color: tokens.textPrimary }}
              >
                The Ralph Wiggum Pattern
              </h1>
              <MetadataLine
                items={[
                  { label: 'Source', value: 'Geoffrey Huntley' },
                  { label: 'Level', value: '1-2' },
                  { label: 'Type', value: 'Persistence Loop' },
                ]}
              />
            </div>

            {/* Essence - tight */}
            <div
              className="p-2.5 rounded-md mb-4"
              style={{
                backgroundColor: tokens.blueLight,
                borderLeft: `2px solid ${tokens.blue}`,
              }}
            >
              <p style={{ ...typography.body, color: tokens.textPrimary, fontWeight: 500 }}>
                Persistence loop with fresh context per iteration, using external memory via files and git.
              </p>
            </div>

            {/* Sections */}
            <CollapsibleSection id="core-loop" title="The Core Loop" badge="Essential">
              <Para>
                At its core, Ralph is a bash loop that pipes instructions to Claude repeatedly
                until a completion signal is detected:
              </Para>

              <CodeBlock
                language="bash"
                code={`while :; do cat PROMPT.md | claude ; done`}
              />

              <Para>
                Everything else—PRDs, progress files, acceptance criteria—is scaffolding
                around this fundamental loop. The pattern gets its name from The Simpsons
                character who persists at tasks regardless of obstacles.
              </Para>

              <Callout type="tip">
                The <InlineCode>{'--dangerously-skip-permissions'}</InlineCode> flag enables
                truly autonomous operation but requires careful PRD design.
              </Callout>
            </CollapsibleSection>

            <CollapsibleSection id="why-fresh" title="Why Fresh Context?">
              <Para>
                Extended sessions accumulate "context rot"—the model gradually loses track
                of goals, hallucinates file contents, and quality degrades past ~60K tokens.
              </Para>

              <DenseTable
                headers={['Aspect', 'Extended Session', 'Fresh Context']}
                rows={[
                  { cells: ['Token accumulation', 'Degrades quality', 'Always clean'] },
                  { cells: ['Memory', 'Internal (ephemeral)', 'External (files, git)'] },
                  { cells: ['Crash recovery', 'Lost', 'State preserved'] },
                  { cells: ['Reasoning capacity', 'Decreases over time', 'Full each iteration'] },
                ]}
              />

              <Callout type="info">
                Memory lives in external artifacts, not the model. Git history for code,
                <InlineCode>prd.json</InlineCode> for tasks, <InlineCode>progress.txt</InlineCode> for learnings.
              </Callout>
            </CollapsibleSection>

            <CollapsibleSection id="file-structure" title="File Structure">
              <CodeBlock
                filename="project layout"
                code={`project/
├── scripts/ralph/
│   ├── ralph.sh        # The loop script
│   ├── prompt.md       # Instructions per iteration
│   ├── prd.json        # Task list with acceptance criteria
│   └── progress.txt    # Append-only learnings log
└── CLAUDE.md           # Project context (optional)`}
              />

              <CollapsibleSection id="prd-format" title="PRD Format" defaultOpen={false}>
                <CodeBlock
                  filename="prd.json"
                  language="json"
                  code={`{
  "branchName": "ralph/feature-name",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add login form",
      "acceptanceCriteria": [
        "Email/password fields render",
        "Validates email format",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}`}
                />

                <List items={[
                  <><InlineCode>priority</InlineCode> determines execution order (1 = highest)</>,
                  <><InlineCode>passes</InlineCode> tracks completion state</>,
                  'Acceptance criteria must be programmatically verifiable',
                  'Always include typecheck/test requirements',
                ]} />
              </CollapsibleSection>

              <CollapsibleSection id="prompt-format" title="Prompt Format" defaultOpen={false}>
                <CodeBlock
                  filename="prompt.md"
                  language="markdown"
                  code={`# Ralph Agent Instructions

## Your Task
1. Read prd.json
2. Read progress.txt (check Codebase Patterns first)
3. Pick highest priority story where passes: false
4. Implement that ONE story
5. Run typecheck and tests
6. Commit: feat: [ID] - [Title]
7. Update prd.json: passes: true
8. Append learnings to progress.txt

## Stop Condition
If ALL stories pass, reply:
<promise>COMPLETE</promise>`}
                />

                <Callout type="warning">
                  The word "APPEND" must be explicit. Without it, agents overwrite progress.txt,
                  losing learnings from previous iterations.
                </Callout>
              </CollapsibleSection>
            </CollapsibleSection>

            <CollapsibleSection id="variants" title="Ralph Variants">
              <DenseTable
                headers={['Variant', 'Use Case', 'Key Difference']}
                rows={[
                  { cells: [<InlineCode key="1">AFK Ralph</InlineCode>, 'Overnight runs', 'No human intervention'] },
                  { cells: [<InlineCode key="2">HOTL Ralph</InlineCode>, 'Learning codebases', 'Human review each iteration'] },
                  { cells: [<InlineCode key="3">Marathon Ralph</InlineCode>, 'Full SDLC', 'Includes test generation'] },
                  { cells: [<InlineCode key="4">Dr. Ralph</InlineCode>, 'Complex tasks', 'Confidence thresholds'] },
                  { cells: [<InlineCode key="5">Compounding Ralph</InlineCode>, 'Long-term projects', 'Archives learnings'] },
                  { cells: [<InlineCode key="6">Parallel Ralph</InlineCode>, 'Multiple features', 'Git worktrees'] },
                ]}
              />
            </CollapsibleSection>

            <CollapsibleSection id="gotchas" title="Common Gotchas">
              <div className="space-y-2">
                <div
                  className="p-2.5 rounded-md"
                  style={{ backgroundColor: tokens.redLight, borderLeft: `2px solid ${tokens.red}` }}
                >
                  <div style={{ ...typography.body, fontWeight: 600, color: tokens.textPrimary, marginBottom: 4 }}>
                    Stories Too Large
                  </div>
                  <div style={{ ...typography.bodySmall, color: tokens.textSecondary }}>
                    <strong>Symptom:</strong> Context overflow, broken code mid-task<br />
                    <strong>Fix:</strong> If you can't describe it in 2-3 sentences, split it
                  </div>
                </div>

                <div
                  className="p-2.5 rounded-md"
                  style={{ backgroundColor: tokens.redLight, borderLeft: `2px solid ${tokens.red}` }}
                >
                  <div style={{ ...typography.body, fontWeight: 600, color: tokens.textPrimary, marginBottom: 4 }}>
                    No Verification Layer
                  </div>
                  <div style={{ ...typography.bodySmall, color: tokens.textSecondary }}>
                    <strong>Symptom:</strong> Errors compound, future iterations inherit broken code<br />
                    <strong>Fix:</strong> Always include <InlineCode>npm run typecheck passes</InlineCode> in criteria
                  </div>
                </div>

                <div
                  className="p-2.5 rounded-md"
                  style={{ backgroundColor: tokens.redLight, borderLeft: `2px solid ${tokens.red}` }}
                >
                  <div style={{ ...typography.body, fontWeight: 600, color: tokens.textPrimary, marginBottom: 4 }}>
                    Stuck Loop Detection
                  </div>
                  <div style={{ ...typography.bodySmall, color: tokens.textSecondary }}>
                    <strong>Symptom:</strong> Same task repeated with no git commits<br />
                    <strong>Fix:</strong> After 3 iterations with no commit, halt and investigate
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection id="when-to-use" title="When to Use">
              <DenseTable
                headers={['Scenario', 'Recommendation']}
                rows={[
                  { cells: ['Feature with clear acceptance criteria', <span key="1" style={{ color: '#16a34a', fontWeight: 500 }}>Full Ralph with PRD</span>] },
                  { cells: ['Overnight development run', <span key="2" style={{ color: '#16a34a', fontWeight: 500 }}>AFK Ralph + max iterations</span>] },
                  { cells: ['Multiple isolated features', <span key="3" style={{ color: '#16a34a', fontWeight: 500 }}>Parallel Ralph + worktrees</span>] },
                  { cells: ['Learning a new codebase', <span key="4" style={{ color: '#16a34a', fontWeight: 500 }}>HOTL Ralph (human review)</span>] },
                  { cells: ['Subjective "make it pretty"', <span key="5" style={{ color: tokens.red }}>Not Ralph - no verifiable end</span>] },
                  { cells: ['Security-critical code', <span key="6" style={{ color: tokens.red }}>Not AFK - needs human oversight</span>] },
                  { cells: ['One-off simple changes', <span key="7" style={{ color: tokens.red }}>Single session - overhead not worth it</span>] },
                ]}
              />
            </CollapsibleSection>

            {/* Complete Script Reference */}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: tokens.border }}>
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-4 h-4" style={{ color: tokens.blue }} />
                <h3 style={{ ...typography.body, fontWeight: 600, color: tokens.textPrimary }}>
                  Complete Loop Script
                </h3>
              </div>
              <CodeBlock
                filename="ralph.sh"
                language="bash"
                code={`#!/bin/bash
set -e

MAX_ITERATIONS=\${1:-25}
SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"

echo "Starting Ralph (max $MAX_ITERATIONS iterations)"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \\
    | claude --dangerously-skip-permissions 2>&1 \\
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All stories complete!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1`}
              />
            </div>
          </div>
        </main>

        {/* Right: Quick Reference (280px) */}
        <aside
          className="w-[280px] shrink-0 p-3 border-l min-h-[calc(100vh-37px)]"
          style={{ borderColor: tokens.border, backgroundColor: tokens.surfaceAlt }}
        >
          <div className="sticky top-4 space-y-3">
            <QuickRefCard
              title="Key Files"
              items={[
                { term: 'ralph.sh', desc: 'Loop engine' },
                { term: 'prompt.md', desc: 'Per-iteration instructions' },
                { term: 'prd.json', desc: 'Task board (passes: bool)' },
                { term: 'progress.txt', desc: 'Append-only learnings' },
              ]}
            />

            <QuickRefCard
              title="Completion Signal"
              items={[
                { term: '<promise>COMPLETE</promise>', desc: 'Output when all tasks pass' },
              ]}
            />

            <QuickRefCard
              title="Task Ordering"
              items={[
                { term: '1. Schema', desc: 'Database/types first' },
                { term: '2. Backend', desc: 'Server actions' },
                { term: '3. Frontend', desc: 'UI components last' },
              ]}
            />

            <QuickRefCard
              title="Cost Estimates"
              items={[
                { term: '10 iterations', desc: '$0.50-$2' },
                { term: '25 iterations', desc: '$1-$5' },
                { term: '50 iterations', desc: '$2-$10' },
              ]}
            />

            {/* Links */}
            <div
              className="rounded-md p-2.5"
              style={{ border: `1px solid ${tokens.border}` }}
            >
              <h4 style={{ ...typography.label, color: tokens.textMuted, marginBottom: 8 }}>
                Related
              </h4>
              <div className="space-y-1.5">
                {[
                  { label: 'CC Mirror', href: '#' },
                  { label: 'Gas Town', href: '#' },
                  { label: 'Complexity Ladder', href: '#' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1.5 hover:underline"
                    style={{ ...typography.bodySmall, color: tokens.blue }}
                  >
                    <Hash className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

// ============================================================================
// DEMO WRAPPER
// ============================================================================

export function NotebookDocsDemo() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <NotebookDocs />
    </>
  )
}

export default NotebookDocs
