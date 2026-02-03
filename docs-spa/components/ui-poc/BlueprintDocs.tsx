'use client'

/**
 * BlueprintDocs: HIGH VISUAL DENSITY Reference Documentation
 *
 * Design Priority: MAXIMUM INFORMATION DENSITY
 * - Three-column layout (nav | content | reference cards)
 * - 13-14px base font, line-height 1.4
 * - 8-12px gaps, tight padding
 * - Inline tags/badges, compact code blocks
 * - Stacked reference cards in right sidebar
 *
 * This is REFERENCE documentation, not a journey.
 * Think: technical manuals, API docs, dense knowledge bases.
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import React, { ReactNode, useState } from 'react'

// ============================================================================
// Design Tokens (from design-system/src/styles/tokens.css)
// ============================================================================

const TOKENS = {
  colors: {
    medievalBlue: '#1A44B8',
    sanrokRed: '#FF0000',
    sanrokCream: '#FBF5EF',
    sanrokBlack: '#171717',
    sanrokGrayMuted: '#B0B0B0',
    sanrokGrayLight: '#F5F5F5',
    sanrokBorder: 'rgba(0, 0, 0, 0.08)',
    sanrokBorderStrong: 'rgba(0, 0, 0, 0.15)',
  },
  fonts: {
    display: "'Instrument Serif', 'Playfair Display', Georgia, serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', Monaco, monospace",
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
  }
}

// ============================================================================
// Nav Section Component (Left Column ~180px)
// ============================================================================

interface NavSection {
  title: string
  items: { id: string; label: string; badge?: string }[]
}

interface CompactNavProps {
  sections: NavSection[]
  activeId: string
  onNavigate: (id: string) => void
}

export function CompactNav({ sections, activeId, onNavigate }: CompactNavProps) {
  return (
    <nav
      className="w-[180px] flex-shrink-0 overflow-y-auto border-r"
      style={{
        borderColor: TOKENS.colors.sanrokBorder,
        fontSize: '13px',
        lineHeight: '1.4',
      }}
    >
      {sections.map((section, idx) => (
        <div key={idx} className="py-2 px-3">
          <div
            className="uppercase tracking-wide font-semibold mb-1"
            style={{
              fontSize: '10px',
              color: TOKENS.colors.sanrokGrayMuted,
              fontFamily: TOKENS.fonts.body,
              letterSpacing: '0.05em',
            }}
          >
            {section.title}
          </div>
          <div className="space-y-0.5">
            {section.items.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full text-left px-2 py-1 rounded-sm flex items-center gap-1.5 transition-colors",
                  activeId === item.id
                    ? "bg-[#1A44B8]/10"
                    : "hover:bg-black/5"
                )}
                style={{
                  fontFamily: TOKENS.fonts.body,
                  color: activeId === item.id ? TOKENS.colors.medievalBlue : TOKENS.colors.sanrokBlack,
                  fontWeight: activeId === item.id ? 500 : 400,
                }}
              >
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span
                    className="flex-shrink-0 px-1 py-0 rounded text-[9px] font-medium uppercase"
                    style={{
                      backgroundColor: TOKENS.colors.sanrokRed + '15',
                      color: TOKENS.colors.sanrokRed,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}

// ============================================================================
// Reference Card Component (Right Sidebar)
// ============================================================================

interface ReferenceCard {
  title: string
  type: 'invariant' | 'war-story' | 'composition' | 'note'
  content: ReactNode
  tags?: string[]
}

const cardTypeStyles: Record<ReferenceCard['type'], { accent: string; bg: string; icon: string }> = {
  invariant: { accent: '#1A44B8', bg: '#1A44B8/08', icon: '~' },
  'war-story': { accent: '#FF0000', bg: '#FF0000/08', icon: '!' },
  composition: { accent: '#059669', bg: '#059669/08', icon: '+' },
  note: { accent: '#6B7280', bg: '#6B7280/08', icon: '*' },
}

export function ReferenceCardStack({ cards }: { cards: ReferenceCard[] }) {
  return (
    <aside
      className="w-[260px] flex-shrink-0 overflow-y-auto border-l px-3 py-2"
      style={{
        borderColor: TOKENS.colors.sanrokBorder,
        backgroundColor: TOKENS.colors.sanrokGrayLight + '80',
      }}
    >
      <div
        className="uppercase tracking-wide font-semibold mb-2"
        style={{
          fontSize: '10px',
          color: TOKENS.colors.sanrokGrayMuted,
          fontFamily: TOKENS.fonts.body,
          letterSpacing: '0.05em',
        }}
      >
        Operational Intelligence
      </div>
      <div className="space-y-2">
        {cards.map((card, idx) => {
          const style = cardTypeStyles[card.type]
          return (
            <div
              key={idx}
              className="rounded border"
              style={{
                borderColor: style.accent + '30',
                backgroundColor: '#fff',
                fontSize: '12px',
                lineHeight: '1.4',
              }}
            >
              {/* Card header */}
              <div
                className="px-2 py-1.5 border-b flex items-center gap-1.5"
                style={{ borderColor: style.accent + '20' }}
              >
                <span
                  className="w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-bold"
                  style={{
                    backgroundColor: style.accent + '15',
                    color: style.accent,
                    fontFamily: TOKENS.fonts.mono,
                  }}
                >
                  {style.icon}
                </span>
                <span
                  className="font-semibold truncate"
                  style={{
                    fontFamily: TOKENS.fonts.body,
                    color: TOKENS.colors.sanrokBlack,
                  }}
                >
                  {card.title}
                </span>
              </div>
              {/* Card content */}
              <div
                className="px-2 py-1.5"
                style={{
                  color: '#4B5563',
                  fontFamily: TOKENS.fonts.body,
                }}
              >
                {card.content}
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {card.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-1 py-0 rounded text-[9px]"
                        style={{
                          backgroundColor: TOKENS.colors.sanrokBorder,
                          color: TOKENS.colors.sanrokGrayMuted,
                          fontFamily: TOKENS.fonts.mono,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

// ============================================================================
// Dense Content Components
// ============================================================================

// Section Header - serif display font
export function DenseSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-4">
      <h2
        className="pb-1 mb-2 border-b"
        style={{
          fontFamily: TOKENS.fonts.display,
          fontSize: '18px',
          fontWeight: 400,
          color: TOKENS.colors.sanrokBlack,
          borderColor: TOKENS.colors.sanrokBorder,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
        {children}
      </div>
    </section>
  )
}

// Subsection Header
export function DenseSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-3">
      <h3
        className="mb-1.5"
        style={{
          fontFamily: TOKENS.fonts.body,
          fontSize: '14px',
          fontWeight: 600,
          color: TOKENS.colors.sanrokBlack,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}

// Dense paragraph with inline badges
export function DensePara({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-2"
      style={{
        fontFamily: TOKENS.fonts.body,
        color: '#374151',
      }}
    >
      {children}
    </p>
  )
}

// Inline badge (tag)
export function InlineBadge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'blue' | 'red' | 'green' }) {
  const variants = {
    default: { bg: TOKENS.colors.sanrokBorder, color: TOKENS.colors.sanrokGrayMuted },
    blue: { bg: TOKENS.colors.medievalBlue + '15', color: TOKENS.colors.medievalBlue },
    red: { bg: TOKENS.colors.sanrokRed + '15', color: TOKENS.colors.sanrokRed },
    green: { bg: '#059669' + '15', color: '#059669' },
  }
  const style = variants[variant]

  return (
    <span
      className="inline-flex px-1 py-0 rounded text-[10px] font-medium mx-0.5 align-middle"
      style={{
        backgroundColor: style.bg,
        color: style.color,
        fontFamily: TOKENS.fonts.mono,
      }}
    >
      {children}
    </span>
  )
}

// Compact code block
export function DenseCode({ code, title }: { code: string; title?: string }) {
  const lines = code.trim().split('\n')

  return (
    <div
      className="mb-3 rounded border overflow-hidden"
      style={{
        borderColor: TOKENS.colors.sanrokBorder,
        fontSize: '12px',
        lineHeight: '1.35',
      }}
    >
      {title && (
        <div
          className="px-2 py-1 border-b"
          style={{
            backgroundColor: TOKENS.colors.sanrokGrayLight,
            borderColor: TOKENS.colors.sanrokBorder,
            fontFamily: TOKENS.fonts.mono,
            fontSize: '10px',
            color: TOKENS.colors.sanrokGrayMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </div>
      )}
      <pre
        className="px-2 py-1.5 overflow-x-auto"
        style={{
          fontFamily: TOKENS.fonts.mono,
          color: TOKENS.colors.sanrokBlack,
          margin: 0,
          backgroundColor: '#FAFAFA',
        }}
      >
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span
              className="select-none pr-2 text-right"
              style={{
                minWidth: '20px',
                color: TOKENS.colors.sanrokGrayMuted,
                opacity: 0.5,
              }}
            >
              {i + 1}
            </span>
            <code>{line || ' '}</code>
          </div>
        ))}
      </pre>
    </div>
  )
}

// Inline code
export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code
      className="px-1 py-0 rounded"
      style={{
        fontFamily: TOKENS.fonts.mono,
        fontSize: '12px',
        backgroundColor: TOKENS.colors.sanrokGrayLight,
        color: TOKENS.colors.medievalBlue,
      }}
    >
      {children}
    </code>
  )
}

// Tight table (8px cell padding)
interface TableRow {
  cells: (string | ReactNode)[]
}

export function DenseTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  return (
    <div
      className="mb-3 rounded border overflow-hidden"
      style={{
        borderColor: TOKENS.colors.sanrokBorder,
        fontSize: '12px',
        lineHeight: '1.35',
      }}
    >
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: TOKENS.colors.sanrokGrayLight }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-2 py-1.5 border-b font-semibold"
                style={{
                  borderColor: TOKENS.colors.sanrokBorder,
                  fontFamily: TOKENS.fonts.body,
                  color: TOKENS.colors.sanrokBlack,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              style={{
                backgroundColor: rowIdx % 2 === 1 ? TOKENS.colors.sanrokGrayLight + '50' : 'transparent',
              }}
            >
              {row.cells.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-2 py-1.5 border-b"
                  style={{
                    borderColor: TOKENS.colors.sanrokBorder,
                    fontFamily: cellIdx === 0 ? TOKENS.fonts.mono : TOKENS.fonts.body,
                    color: cellIdx === 0 ? TOKENS.colors.medievalBlue : '#374151',
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

// Quote block (compact)
export function DenseQuote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <blockquote
      className="mb-3 pl-2 border-l-2"
      style={{
        borderColor: TOKENS.colors.medievalBlue,
        color: '#6B7280',
        fontStyle: 'italic',
        fontFamily: TOKENS.fonts.body,
        fontSize: '12px',
        lineHeight: '1.4',
      }}
    >
      {children}
      {source && (
        <cite
          className="block mt-1 not-italic"
          style={{ fontSize: '10px', color: TOKENS.colors.sanrokGrayMuted }}
        >
          - {source}
        </cite>
      )}
    </blockquote>
  )
}

// Definition list (compact)
export function DenseDefinitions({ items }: { items: { term: string; def: ReactNode }[] }) {
  return (
    <dl className="mb-3 space-y-1">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <dt
            className="flex-shrink-0 font-semibold"
            style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '12px',
              color: TOKENS.colors.medievalBlue,
              minWidth: '100px',
            }}
          >
            {item.term}
          </dt>
          <dd
            style={{
              fontFamily: TOKENS.fonts.body,
              fontSize: '13px',
              color: '#374151',
            }}
          >
            {item.def}
          </dd>
        </div>
      ))}
    </dl>
  )
}

// Bullet list (compact)
export function DenseList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-3 space-y-0.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-1.5"
          style={{
            fontFamily: TOKENS.fonts.body,
            color: '#374151',
          }}
        >
          <span style={{ color: TOKENS.colors.medievalBlue }}>-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ============================================================================
// Main Three-Column Layout
// ============================================================================

interface BlueprintDocsLayoutProps {
  navSections: NavSection[]
  referenceCards: ReferenceCard[]
  children: ReactNode
}

export function BlueprintDocsLayout({ navSections, referenceCards, children }: BlueprintDocsLayoutProps) {
  const [activeId, setActiveId] = useState(navSections[0]?.items[0]?.id || '')

  const handleNavigate = (id: string) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        backgroundColor: TOKENS.colors.sanrokCream,
      }}
    >
      {/* Left: Compact Nav (~180px) */}
      <CompactNav sections={navSections} activeId={activeId} onNavigate={handleNavigate} />

      {/* Center: Main Content */}
      <main
        className="flex-1 overflow-y-auto px-4 py-3"
        style={{
          maxWidth: '720px',
        }}
      >
        {children}
      </main>

      {/* Right: Reference Cards (~260px) */}
      <ReferenceCardStack cards={referenceCards} />
    </div>
  )
}

// ============================================================================
// Document Header (Compact)
// ============================================================================

interface DocHeaderProps {
  title: string
  subtitle?: string
  version?: string
  lastUpdated?: string
  tags?: string[]
}

export function DocHeader({ title, subtitle, version, lastUpdated, tags }: DocHeaderProps) {
  return (
    <header className="mb-4 pb-3 border-b" style={{ borderColor: TOKENS.colors.sanrokBorderStrong }}>
      <div className="flex items-baseline gap-2 mb-1">
        <h1
          style={{
            fontFamily: TOKENS.fonts.display,
            fontSize: '28px',
            fontWeight: 400,
            color: TOKENS.colors.sanrokBlack,
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
          }}
        >
          {title}
        </h1>
        {version && (
          <span
            className="px-1.5 py-0 rounded text-[10px] font-medium"
            style={{
              backgroundColor: TOKENS.colors.medievalBlue + '15',
              color: TOKENS.colors.medievalBlue,
              fontFamily: TOKENS.fonts.mono,
            }}
          >
            v{version}
          </span>
        )}
      </div>
      {subtitle && (
        <p
          className="mb-1"
          style={{
            fontFamily: TOKENS.fonts.body,
            fontSize: '14px',
            color: TOKENS.colors.sanrokGrayMuted,
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-3">
        {lastUpdated && (
          <span
            style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '10px',
              color: TOKENS.colors.sanrokGrayMuted,
            }}
          >
            Updated {lastUpdated}
          </span>
        )}
        {tags && tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-1 py-0 rounded text-[9px]"
                style={{
                  backgroundColor: TOKENS.colors.sanrokBorder,
                  color: TOKENS.colors.sanrokGrayMuted,
                  fontFamily: TOKENS.fonts.mono,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

// ============================================================================
// Pre-built Ralph Pattern Demo Content
// ============================================================================

export function RalphPatternDemo() {
  const navSections: NavSection[] = [
    {
      title: 'Essence',
      items: [
        { id: 'core-abstraction', label: 'Core Abstraction' },
        { id: 'mental-model', label: 'Mental Model' },
      ]
    },
    {
      title: 'Principles',
      items: [
        { id: 'fresh-context', label: 'Fresh Context', badge: 'key' },
        { id: 'external-state', label: 'External State', badge: 'key' },
        { id: 'small-tasks', label: 'Small Tasks' },
        { id: 'feedback-loops', label: 'Feedback Loops' },
      ]
    },
    {
      title: 'Implementation',
      items: [
        { id: 'files', label: 'File Structure' },
        { id: 'loop-script', label: 'Loop Script' },
        { id: 'prd-format', label: 'PRD Format' },
      ]
    },
    {
      title: 'Variants',
      items: [
        { id: 'afk-ralph', label: 'AFK Ralph' },
        { id: 'hotl-ralph', label: 'HOTL Ralph' },
        { id: 'parallel-ralph', label: 'Parallel Ralph' },
      ]
    },
  ]

  const referenceCards: ReferenceCard[] = [
    {
      type: 'invariant',
      title: 'Fresh Context Every Iteration',
      content: (
        <span>Each loop spawns NEW Claude instance. No memory across iterations. Prevents context rot.</span>
      ),
      tags: ['context', 'memory'],
    },
    {
      type: 'invariant',
      title: 'External State > Internal Memory',
      content: (
        <span>Memory lives in files: <code className="text-[10px] px-0.5 bg-gray-100 rounded">prd.json</code>, <code className="text-[10px] px-0.5 bg-gray-100 rounded">progress.txt</code>, git history.</span>
      ),
      tags: ['state', 'files'],
    },
    {
      type: 'war-story',
      title: 'Ryan Carson: 14 Iterations',
      content: (
        <span>Built Income Upsert Tool overnight. 6 user stories, all completed by morning. Cost ~$15.</span>
      ),
      tags: ['case-study'],
    },
    {
      type: 'war-story',
      title: 'Matt Pocock: Playwright Verify',
      content: (
        <span>UI features need browser verification. Claude claimed complete but visually broken until Playwright added.</span>
      ),
      tags: ['verification'],
    },
    {
      type: 'composition',
      title: 'Ralph + Opus 4.5 + Playwright',
      content: (
        <span>Strong reasoning + persistence + real verification = "AGI stack" per @weswinder.</span>
      ),
      tags: ['stack'],
    },
    {
      type: 'note',
      title: 'When NOT to Use',
      content: (
        <span>Subjective tasks, security-critical code, ambiguous requirements, one-shot operations, exploratory work.</span>
      ),
      tags: ['anti-pattern'],
    },
  ]

  return (
    <BlueprintDocsLayout navSections={navSections} referenceCards={referenceCards}>
      <DocHeader
        title="Ralph Wiggum Pattern"
        subtitle="Persistent AI coding loop with external memory"
        version="1.0"
        lastUpdated="2026-01-09"
        tags={['orchestration', 'autonomous', 'loop']}
      />

      <DenseSection id="core-abstraction" title="Core Abstraction">
        <DensePara>
          Ralph is a <InlineBadge variant="blue">persistence pattern</InlineBadge> for AI coding agents. At its absolute core:
        </DensePara>
        <DenseCode code={`while :; do cat PROMPT.md | claude ; done`} title="ralph.sh" />
        <DensePara>
          Everything else—PRDs, progress files, verification—is scaffolding around this fundamental loop.
          Named after The Simpsons character who persists at tasks regardless of obstacles.
        </DensePara>
      </DenseSection>

      <DenseSection id="mental-model" title="Mental Model">
        <DenseQuote source="Matt Pocock">
          Think of the AI agent as an eager but somewhat dim junior developer (Ralph) who never sleeps,
          happily works on one tiny task at a time, commits often, and tells you when it's truly finished.
        </DenseQuote>
        <DenseTable
          headers={['Human Role', 'AI Role']}
          rows={[
            { cells: ['Product Manager', 'Implementation Army'] },
            { cells: ['Architect', 'Tireless Executor'] },
            { cells: ['25-30 min planning', '8 hours grinding'] },
            { cells: ['Morning review', 'Overnight shipping'] },
          ]}
        />
      </DenseSection>

      <DenseSection id="fresh-context" title="Why Fresh Context?">
        <DensePara>
          LLMs degrade with accumulated context <InlineBadge variant="red">context rot</InlineBadge>. Quality drops as tokens accumulate.
          Agent loses track of goals. Fresh start each iteration avoids this.
        </DensePara>
        <DenseDefinitions
          items={[
            { term: 'Token limit', def: 'Context window is finite; cramming more = worse quality' },
            { term: 'Recency bias', def: 'Recent tokens weighted higher; early instructions forgotten' },
            { term: 'Fresh slate', def: 'New instance = full capacity, clean focus' },
          ]}
        />
      </DenseSection>

      <DenseSection id="external-state" title="Why External State?">
        <DensePara>
          Memory must survive context boundaries. Lives in files, not model weights.
        </DensePara>
        <DenseTable
          headers={['File', 'Purpose', 'Access Pattern']}
          rows={[
            { cells: [<InlineCode key="1">prd.json</InlineCode>, 'Task board with user stories', 'Read first, write after task'] },
            { cells: [<InlineCode key="2">progress.txt</InlineCode>, 'Append-only learnings log', 'Read for patterns, append learnings'] },
            { cells: [<InlineCode key="3">CLAUDE.md</InlineCode>, 'Project context', 'Read only'] },
            { cells: ['Git history', 'Code changes', 'Commit after each task'] },
          ]}
        />
      </DenseSection>

      <DenseSection id="small-tasks" title="Why Small Tasks?">
        <DensePara>
          <InlineBadge variant="green">Golden Rule</InlineBadge> Each task completable in ONE iteration (~one context window).
        </DensePara>
        <DenseSubsection title="Right-sized">
          <DenseList
            items={[
              'Add a database column + migration',
              'Add a UI component to existing page',
              'Update a server action with new logic',
              'Write tests for one module',
            ]}
          />
        </DenseSubsection>
        <DenseSubsection title="Too big (split these)">
          <DenseList
            items={[
              '"Build entire dashboard" -> schema, queries, UI, filters',
              '"Add authentication" -> schema, middleware, login UI, sessions',
              '"Refactor the API" -> one story per endpoint',
            ]}
          />
        </DenseSubsection>
        <DenseQuote source="Ryan Carson">
          If you can't describe it in 2-3 sentences, it's too big.
        </DenseQuote>
      </DenseSection>

      <DenseSection id="files" title="File Structure">
        <DenseCode
          code={`project/
├── scripts/ralph/
│   ├── ralph.sh          # The loop script
│   ├── prompt.md         # Instructions per iteration
│   ├── prd.json          # Task board
│   └── progress.txt      # Append-only learnings
└── CLAUDE.md             # Project context`}
          title="Directory Layout"
        />
      </DenseSection>

      <DenseSection id="loop-script" title="Loop Script">
        <DenseCode
          title="scripts/ralph/ralph.sh"
          code={`#!/bin/bash
set -e

MAX_ITERATIONS=\${1:-10}
SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" \\
    | claude --dangerously-skip-permissions 2>&1 \\
    | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Done!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
exit 1`}
        />
      </DenseSection>

      <DenseSection id="prd-format" title="PRD Format">
        <DenseCode
          title="prd.json"
          code={`{
  "project": "Feature Name",
  "branchName": "ralph/feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add login form",
      "acceptanceCriteria": [
        "Email/password fields render",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}`}
        />
        <DensePara>
          <InlineBadge variant="red">Required</InlineBadge> Always include <InlineCode>npm run typecheck passes</InlineCode> in acceptance criteria.
        </DensePara>
      </DenseSection>

      <DenseSection id="afk-ralph" title="AFK Ralph (Away From Keyboard)">
        <DensePara>
          Full autonomous loop designed to run overnight. All acceptance criteria must be programmatically verifiable.
          Max iterations set high (50-100). Wake up to completed work.
        </DensePara>
        <DenseQuote source="Matt Pocock">
          KISS approach to AI coding that lets you ship while you sleep.
        </DenseQuote>
      </DenseSection>

      <DenseSection id="hotl-ralph" title="HOTL Ralph (Human On The Loop)">
        <DensePara>
          Single-iteration variant with human review between runs. Use for security-sensitive code, learning a new codebase, debugging stuck loops.
        </DensePara>
        <DenseCode
          title="ralph-hotl.sh"
          code={`#!/bin/bash
claude "Review prd.json, pick ONE feature, implement, test, commit."

echo "=== Changes ==="
git diff HEAD~1 --stat

read -p "Continue? (y/n) " -n 1 -r
[[ $REPLY =~ ^[Yy]$ ]] && ./ralph-hotl.sh`}
        />
      </DenseSection>

      <DenseSection id="parallel-ralph" title="Parallel Ralph">
        <DensePara>
          Multiple Ralph instances on different features/branches using git worktrees for true isolation.
        </DensePara>
        <DenseCode
          code={`for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait`}
        />
      </DenseSection>
    </BlueprintDocsLayout>
  )
}

// Default export the demo
export default RalphPatternDemo
