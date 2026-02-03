'use client'

import { useState, useEffect } from 'react'
import './tokens/index.css'
import {
  DocsLayout,
  Sidebar,
  TableOfContents,
  Breadcrumbs,
  Header,
  Callout,
  CodeBlock,
} from './components'

// Sample navigation structure
const navigation = [
  {
    title: 'GETTING STARTED',
    items: [
      {
        title: 'Introduction',
        expanded: true,
        items: [
          { title: 'What is Claude Code?', href: '#what-is' },
          { title: 'Key Concepts', href: '#key-concepts' },
          { title: 'Quick Start', href: '#quick-start' },
        ],
      },
      {
        title: 'Installation',
        items: [
          { title: 'System Requirements', href: '#' },
          { title: 'CLI Setup', href: '#' },
          { title: 'IDE Integration', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'PATTERNS',
    items: [
      {
        title: 'Orchestration',
        expanded: true,
        items: [
          { title: 'Ralph Wiggum Loop', href: '#ralph-wiggum' },
          { title: 'Gas Town Architecture', href: '#gas-town' },
          { title: 'Multi-Agent Patterns', href: '#' },
        ],
      },
      {
        title: 'Context Management',
        items: [
          { title: 'CLAUDE.md Files', href: '#' },
          { title: 'Fresh Context', href: '#' },
          { title: 'Memory Patterns', href: '#' },
        ],
      },
    ],
  },
]

// Sample TOC items
const tocItems = [
  { id: 'what-is', title: 'What is Claude Code?', level: 2 },
  { id: 'key-concepts', title: 'Key Concepts', level: 2 },
  { id: 'context-as-constraint', title: 'Context as Constraint', level: 3 },
  { id: 'verification-loops', title: 'Verification Loops', level: 3 },
  { id: 'quick-start', title: 'Quick Start', level: 2 },
  { id: 'ralph-wiggum', title: 'Ralph Wiggum Loop', level: 2 },
  { id: 'gas-town', title: 'Gas Town Architecture', level: 2 },
]

export default function EditorialDocsPage() {
  const [currentPath, setCurrentPath] = useState('#what-is')

  // Update current path based on hash
  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.hash || '#what-is')
    updatePath()
    window.addEventListener('hashchange', updatePath)
    return () => window.removeEventListener('hashchange', updatePath)
  }, [])

  return (
    <DocsLayout
      header={
        <Header
          logoText="CLAUDE CODE"
          navLinks={[
            { label: 'Documentation', href: '#' },
            { label: 'Patterns', href: '#' },
            { label: 'Community', href: '#' },
          ]}
          showSearch
          signInLabel="Sign in"
          signInHref="#"
          ctaLabel="Get Started"
          ctaHref="#"
        />
      }
      sidebar={<Sidebar navigation={navigation} currentPath={currentPath} />}
      toc={<TableOfContents items={tocItems} />}
    >
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: 'Docs', href: '#' },
            { label: 'Getting Started', href: '#' },
            { label: 'Introduction' },
          ]}
        />
      </div>

      {/* Page Title */}
      <h1
        className="mb-4"
        style={{
          fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
          fontSize: '3rem',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          color: '#171717',
        }}
      >
        CLAUDE CODE MASTERY
      </h1>

      {/* Lead */}
      <p className="text-[var(--typography-lead-size)] text-[var(--color-text-secondary)] mb-8 max-w-[var(--prose-width)]">
        Transform your development workflow with autonomous AI agents. Learn the patterns,
        architectures, and techniques used by power users.
      </p>

      {/* Content */}
      <article className="editorial-content">
        <h2
          id="what-is"
          className="mt-12 mb-4"
          style={{
            fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: '#171717',
          }}
        >
          WHAT IS CLAUDE CODE?
        </h2>

        <p className="mb-4 max-w-[var(--prose-width)]">
          Claude Code is Anthropic's official CLI for Claude, designed for software engineering
          tasks. It enables autonomous coding workflows, from simple bug fixes to complex
          multi-file refactoring.
        </p>

        <Callout variant="tip" title="Why Claude Code?">
          <p>
            Unlike chat interfaces, Claude Code operates directly in your development environment—reading
            files, running tests, and making commits with your approval.
          </p>
        </Callout>

        <h2
          id="key-concepts"
          className="mt-12 mb-4"
          style={{
            fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: '#171717',
          }}
        >
          KEY CONCEPTS
        </h2>

        <h3
          id="context-as-constraint"
          className="mt-8 mb-3"
          style={{
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#171717',
          }}
        >
          Context as Constraint
        </h3>

        <p className="mb-4 max-w-[var(--prose-width)]">
          Context windows are finite. Treat them as a precious resource. Every token spent on
          redundant explanation is a token not available for reasoning.
        </p>

        <CodeBlock
          language="markdown"
          filename="CLAUDE.md"
          code={`# Project Context

## Architecture
- Next.js 14 with App Router
- Tailwind CSS for styling
- PostgreSQL with Prisma ORM

## Commands
- \`npm run dev\` - Start development
- \`npm test\` - Run tests
- \`npm run lint\` - Check code style`}
        />

        <h3
          id="verification-loops"
          className="mt-8 mb-3"
          style={{
            fontFamily: 'Inter, -apple-system, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#171717',
          }}
        >
          Verification Loops
        </h3>

        <p className="mb-4 max-w-[var(--prose-width)]">
          Never trust output without verification. The best Claude Code workflows include
          automated checks: tests, type checking, linting, and visual inspection.
        </p>

        <Callout variant="warning" title="Common Mistake">
          <p>
            Accepting generated code without running tests leads to subtle bugs. Always verify
            before committing.
          </p>
        </Callout>

        <h2
          id="quick-start"
          className="mt-12 mb-4"
          style={{
            fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: '#171717',
          }}
        >
          QUICK START
        </h2>

        <p className="mb-4 max-w-[var(--prose-width)]">
          Get up and running in under 5 minutes:
        </p>

        <CodeBlock
          language="bash"
          code={`# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Navigate to your project
cd your-project

# Start Claude Code
claude

# Or run with a specific task
claude "fix the failing tests"`}
        />

        <h2
          id="ralph-wiggum"
          className="mt-12 mb-4"
          style={{
            fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: '#171717',
          }}
        >
          RALPH WIGGUM LOOP
        </h2>

        <p className="mb-4 max-w-[var(--prose-width)]">
          The Ralph Wiggum Loop is a continuous iteration pattern that enables long-running
          autonomous work sessions. Named after its creator's humor, it's deadly serious in
          capability.
        </p>

        <CodeBlock
          language="bash"
          filename="ralph.sh"
          code={`#!/bin/bash
# The Ralph Wiggum Loop - Continuous iteration

while :; do
  cat PROMPT.md | claude-code --print

  # Optional: Add verification step
  npm test

  # Check for exit condition
  if [ -f ".done" ]; then
    echo "Task complete!"
    break
  fi

  sleep 1
done`}
        />

        <Callout variant="info" title="Pattern Insight">
          <p>
            The loop works because each iteration starts with fresh context (PROMPT.md) while
            external state persists (files, git history). This is the "context as constraint"
            principle in action.
          </p>
        </Callout>

        <h2
          id="gas-town"
          className="mt-12 mb-4"
          style={{
            fontFamily: 'Barlow Condensed, Arial Narrow, sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: '#171717',
          }}
        >
          GAS TOWN ARCHITECTURE
        </h2>

        <p className="mb-4 max-w-[var(--prose-width)]">
          Steve Yegge's Gas Town pattern introduces specialized agents working in concert:
        </p>

        <ul className="mb-4 pl-6 max-w-[var(--prose-width)]">
          <li className="mb-2">
            <strong>Mayor</strong> — Orchestrates the overall workflow
          </li>
          <li className="mb-2">
            <strong>Deacon</strong> — Manages context and memory
          </li>
          <li className="mb-2">
            <strong>Dogs</strong> — Worker agents for specific tasks
          </li>
          <li className="mb-2">
            <strong>Refinery</strong> — Processes and validates outputs
          </li>
        </ul>

        <Callout variant="note">
          <p>
            Gas Town represents Level 5+ on the complexity ladder. Start with simpler patterns
            before attempting multi-agent orchestration.
          </p>
        </Callout>

        {/* Spacer for scroll testing */}
        <div className="h-40" />
      </article>
    </DocsLayout>
  )
}
