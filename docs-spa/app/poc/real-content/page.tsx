'use client'

/**
 * Real Content POC
 *
 * Renders actual complexity-ladder documentation content
 * with all 3 design variations to show realistic migration preview.
 */

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, AlertTriangle, Flame, CheckCircle } from 'lucide-react'

// Design System colors
const DS_PRIMARY = '#E31E24'
const DS_ACCENT_BG = '#FEF2F2'
const CURRENT_ACCENT = '#0D9373'

// Real data extracted from architecture-complexity-ladder content.html
const realLevelData = [
  {
    level: 0,
    title: 'Single Interactive Session',
    subtitle: 'Basic AI coding assistance',
    description: 'Basic Claude Code usage in a single terminal. No persistence between sessions. Manual approval for all operations. You\'re the driver, Claude is the copilot.',
    unlockText: 'Basic AI coding assistance. Every session starts from scratch.',
    codeExample: null,
  },
  {
    level: 1,
    title: 'CLAUDE.md + Slash Commands',
    subtitle: 'Consistent behavior, workflow shortcuts',
    description: 'Project context via CLAUDE.md files. Reusable workflows via slash commands in .claude/commands/. Claude "remembers" your project\'s architecture across sessions.',
    unlockText: 'Consistent Claude behavior. Commands take seconds instead of paragraphs.',
    codeExample: `# CLAUDE.md in project root
## Tech Stack
- TypeScript + React
- PostgreSQL with Drizzle ORM

## Commands
npm run dev       # Start dev server
npm run typecheck # TypeScript check`,
  },
  {
    level: 2,
    title: 'Subagents + Hooks',
    subtitle: 'Task delegation, automated workflows',
    description: 'Delegate to specialized agents with isolated contexts. Automate responses to lifecycle events with hooks. Claude becomes a small team rather than a single assistant.',
    unlockText: 'Specialized agents for specific tasks. Automatic formatting on file save.',
    codeExample: `# .claude/agents/security-reviewer.yaml
name: Security Reviewer
tools: [Read, Grep, Glob]
prompt: |
  Analyze code for hardcoded secrets,
  SQL injection, XSS vulnerabilities.`,
  },
  {
    level: 3,
    title: 'Simple Loops (Basic Ralph)',
    subtitle: 'Autonomous execution',
    description: 'Claude Code runs in a loop until a task is complete. Each iteration gets fresh context. External memory via git and files. Named after Geoffrey Huntley\'s "Ralph Wiggum" pattern.',
    unlockText: 'Autonomous execution. Come back to find tasks completed.',
    codeExample: `#!/bin/bash
while :; do
  claude "Check progress.txt, complete next task" | tee output.txt
  if grep -q "ALL TASKS COMPLETE" output.txt; then
    break
  fi
  sleep 5
done`,
  },
  {
    level: 4,
    title: 'PRD-Driven Loops (Full Ralph)',
    subtitle: 'Structured autonomous development',
    description: 'JSON-based task tracking with acceptance criteria, priority ordering, and quality gates. Full product requirement documents drive autonomous development.',
    unlockText: 'Real features shipped overnight. Learnings compound across iterations.',
    codeExample: `{
  "userStories": [{
    "id": "US-001",
    "title": "Add login form",
    "acceptanceCriteria": ["Email field renders", "npm run typecheck passes"],
    "priority": 1,
    "passes": false
  }]
}`,
  },
  {
    level: 5,
    title: 'Multi-Agent Orchestration',
    subtitle: 'Parallel specialized work',
    description: 'Central orchestrator delegates to specialized workers. Hub-and-spoke architecture. Agents coordinate via task management and file-based handoffs.',
    unlockText: 'Multiple agents working simultaneously on coordinated tasks.',
    codeExample: `# Worker preamble template
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents`,
  },
  {
    level: 6,
    title: 'Parallel Swarms + Worktrees',
    subtitle: 'Massive parallelization',
    description: 'Git worktrees provide complete isolation for parallel agents. Multiple Ralph loops running simultaneously. True parallel development.',
    unlockText: '10x productivity through true parallel development.',
    codeExample: `# Create isolated worktrees for parallel agents
git worktree add ../wt-auth feature-auth
git worktree add ../wt-payments feature-payments

# Run Ralph in each worktree simultaneously
for feature in auth payments; do
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait`,
  },
  {
    level: 7,
    title: 'Full Agent Factory (Gas Town)',
    subtitle: 'Team-scale productivity solo',
    description: 'Factory architecture for agent production. 7+ specialized roles working continuously. Human becomes Product Manager, agents become the engineering team.',
    unlockText: 'One person with Gas Town = small engineering team output.',
    codeExample: `# Gas Town installation
go install github.com/steveyegge/gastown/cmd/gt@latest
gt init
gt rig add ~/my-project

# Daily workflow
gt status            # Morning standup
gt feature add "Build invoice system"
gt inbox review      # Review completed work`,
  },
]

// Real gotcha data
const realGotchas = [
  {
    title: 'Skipping levels to reach the "cool stuff"',
    symptom: 'Level 5 orchestration keeps failing in mysterious ways',
    why: 'Without Level 1-2 foundations, your CLAUDE.md is missing critical context',
    numbers: '90% of Level 5+ failures trace back to Level 1-2 gaps',
    fix: 'Go back. Pass the checkpoints honestly. The foundations matter.',
  },
  {
    title: 'Confusing "have tried" with "mastered"',
    symptom: '"I\'ve done Level 4 before" but can\'t write a prd.json from scratch',
    why: 'Trying once is not mastery. Mastery is repeatable success without reference docs.',
    fix: 'Use the checkpoints as tests. Can you do each item from memory?',
  },
]

// Level colors
const levelColors: Record<number, { bg: string; border: string }> = {
  0: { bg: '#71717a', border: '#71717a' },
  1: { bg: '#059669', border: '#059669' },
  2: { bg: '#2563eb', border: '#2563eb' },
  3: { bg: '#d97706', border: '#d97706' },
  4: { bg: '#dc2626', border: '#dc2626' },
  5: { bg: '#7c3aed', border: '#7c3aed' },
  6: { bg: '#db2777', border: '#db2777' },
  7: { bg: '#18181b', border: '#18181b' },
}

// ============================================
// VARIATION A: Soft Brutalist (Current Style)
// ============================================
function LevelCardSoft({ level, title, subtitle, description, unlockText, codeExample }: typeof realLevelData[0]) {
  const colors = levelColors[level]
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
      className="bg-white p-6"
      style={{
        borderRadius: '12px',
        border: '1px solid #e4e4e7',
        borderLeftWidth: '4px',
        borderLeftColor: colors.border,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold"
          style={{ backgroundColor: colors.bg, boxShadow: `0 2px 8px ${colors.bg}40` }}
        >
          {level}
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{title}</h3>
          <p className="text-sm text-zinc-500">{subtitle}</p>
        </div>
      </div>

      <p className="text-base text-zinc-600 leading-relaxed mb-4">{description}</p>

      {codeExample && (
        <div className="relative bg-zinc-900 rounded-lg p-4 mb-4">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs rounded flex items-center gap-1"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <pre className="text-sm text-zinc-300 overflow-x-auto font-mono leading-relaxed">{codeExample}</pre>
        </div>
      )}

      <div className="bg-zinc-50 rounded-lg px-4 py-3">
        <span className="text-sm">
          <span className="font-semibold" style={{ color: CURRENT_ACCENT }}>Unlock:</span>{' '}
          <span className="text-zinc-600">{unlockText}</span>
        </span>
      </div>
    </motion.div>
  )
}

// ============================================
// VARIATION B: Pure Brutalist (Design System)
// ============================================
function LevelCardBrutalist({ level, title, subtitle, description, unlockText, codeExample }: typeof realLevelData[0]) {
  const colors = levelColors[level]
  const isHighLevel = level >= 5
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ borderColor: DS_PRIMARY }}
      className="bg-white p-8"
      style={{
        border: '1px solid #D4D4D4',
        borderLeftWidth: '2px',
        borderLeftColor: colors.border,
      }}
    >
      <div className="flex items-start gap-6 mb-6">
        <div
          className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-xl font-bold"
          style={{
            backgroundColor: isHighLevel ? DS_PRIMARY : '#f5f5f5',
            color: isHighLevel ? 'white' : '#171717',
          }}
        >
          {level}
        </div>
        <div>
          <h3 className="text-2xl text-neutral-900 mb-2 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {title}
          </h3>
          <p className="text-sm text-neutral-500 font-light uppercase tracking-wider">{subtitle}</p>
        </div>
      </div>

      <p className="text-base text-neutral-600 leading-relaxed mb-6 font-light">{description}</p>

      {codeExample && (
        <div className="relative bg-neutral-50 border border-neutral-300 p-5 mb-6">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-2 py-1 border border-neutral-400 hover:bg-neutral-200 text-neutral-700 text-xs flex items-center gap-1"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <pre className="text-xs font-mono text-neutral-700 overflow-x-auto leading-relaxed">{codeExample}</pre>
        </div>
      )}

      <div>
        <div className="text-[10px] font-bold text-neutral-500 uppercase mb-3" style={{ letterSpacing: '0.25em' }}>
          Unlocks
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-0.5" style={{ color: DS_PRIMARY }}>→</span>
          <span className="text-sm text-neutral-600 font-light">{unlockText}</span>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================
// VARIATION C: Hybrid (Recommended)
// ============================================
function LevelCardHybrid({ level, title, subtitle, description, unlockText, codeExample }: typeof realLevelData[0]) {
  const colors = levelColors[level]
  const isHighLevel = level >= 5
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}
      className="bg-white p-6"
      style={{
        border: '1px solid #e4e4e7',
        borderLeftWidth: '3px',
        borderLeftColor: colors.border,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white text-lg font-bold"
          style={{
            backgroundColor: colors.bg,
            borderRadius: '8px',
            boxShadow: isHighLevel ? `0 0 12px ${DS_PRIMARY}40` : 'none',
          }}
        >
          {level}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{title}</h3>
          <p className="text-xs text-zinc-500 uppercase tracking-wide mt-0.5">{subtitle}</p>
        </div>
        {isHighLevel && (
          <div
            className="px-2 py-1 text-xs font-bold uppercase"
            style={{ backgroundColor: DS_ACCENT_BG, color: DS_PRIMARY, letterSpacing: '0.1em' }}
          >
            Advanced
          </div>
        )}
      </div>

      <p className="text-base text-zinc-600 leading-relaxed mb-4">{description}</p>

      {codeExample && (
        <div className="relative bg-zinc-900 p-4 mb-4">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs flex items-center gap-1"
            style={{ borderRadius: '4px' }}
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <pre className="text-sm text-zinc-300 overflow-x-auto font-mono leading-relaxed">{codeExample}</pre>
        </div>
      )}

      <div
        className="px-4 py-3"
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '6px',
          borderLeft: `2px solid ${isHighLevel ? DS_PRIMARY : CURRENT_ACCENT}`,
        }}
      >
        <span className="text-sm">
          <span className="font-semibold" style={{ color: isHighLevel ? DS_PRIMARY : CURRENT_ACCENT }}>Unlock:</span>{' '}
          <span className="text-zinc-600">{unlockText}</span>
        </span>
      </div>
    </motion.div>
  )
}

// Gotcha Box Components
function GotchaSoft({ title, symptom, why, fix }: typeof realGotchas[0]) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-5" style={{ borderLeftWidth: '4px', borderLeftColor: '#f59e0b' }}>
      <div className="flex items-center gap-2 font-semibold text-amber-800 mb-3">
        <AlertTriangle className="w-4 h-4" />
        {title}
      </div>
      <div className="text-sm text-amber-900 space-y-2">
        <p><strong>Symptom:</strong> {symptom}</p>
        <p><strong>Why:</strong> {why}</p>
        <p><strong>Fix:</strong> {fix}</p>
      </div>
    </div>
  )
}

function GotchaBrutalist({ title, symptom, why, fix }: typeof realGotchas[0]) {
  return (
    <div className="bg-[#FFFBEB] p-6 border border-[#FCD34D]" style={{ borderLeftWidth: '2px', borderLeftColor: '#F59E0B' }}>
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="w-5 h-5 text-amber-600" />
        <h4 className="text-sm font-bold uppercase tracking-wider text-amber-900">{title}</h4>
      </div>
      <div className="space-y-3 text-sm text-amber-800 font-light">
        <p><span className="font-medium uppercase text-xs tracking-wide">Symptom:</span> {symptom}</p>
        <p><span className="font-medium uppercase text-xs tracking-wide">Why:</span> {why}</p>
        <p><span className="font-medium uppercase text-xs tracking-wide">Fix:</span> {fix}</p>
      </div>
    </div>
  )
}

function GotchaHybrid({ title, symptom, why, fix }: typeof realGotchas[0]) {
  return (
    <div className="bg-amber-50 p-5" style={{ borderLeft: '3px solid #f59e0b' }}>
      <div className="flex items-center gap-2 font-semibold text-amber-800 mb-3">
        <AlertTriangle className="w-4 h-4" />
        {title}
      </div>
      <div className="text-sm text-amber-900 space-y-2">
        <p><strong className="text-xs uppercase tracking-wide">Symptom:</strong> {symptom}</p>
        <p><strong className="text-xs uppercase tracking-wide">Why:</strong> {why}</p>
        <p><strong className="text-xs uppercase tracking-wide">Fix:</strong> {fix}</p>
      </div>
    </div>
  )
}

// Main Page
export default function RealContentPOC() {
  const [variation, setVariation] = useState<'A' | 'B' | 'C'>('C')

  const LevelCard = variation === 'A' ? LevelCardSoft : variation === 'B' ? LevelCardBrutalist : LevelCardHybrid
  const GotchaBox = variation === 'A' ? GotchaSoft : variation === 'B' ? GotchaBrutalist : GotchaHybrid

  return (
    <div className="min-h-screen bg-zinc-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            Real Content POC: Complexity Ladder
          </h1>
          <p className="text-zinc-600 mb-6">
            Actual documentation content rendered with design variations
          </p>

          {/* Variation Selector */}
          <div className="inline-flex bg-white border border-zinc-200 rounded-lg p-1">
            {(['A', 'B', 'C'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVariation(v)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  variation === v
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
                style={{ borderRadius: v === 'B' ? '0' : '6px' }}
              >
                {v}: {v === 'A' ? 'Soft' : v === 'B' ? 'Brutalist' : 'Hybrid'}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div
          className="p-6 md:p-8"
          style={{
            backgroundColor: variation === 'B' ? '#fafafa' : '#ffffff',
            borderRadius: variation === 'B' ? '0' : '16px',
            border: '1px solid #e4e4e7',
          }}
        >
          {/* Essence Box */}
          <div
            className="mb-8 p-6 text-white"
            style={{
              background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
              borderRadius: variation === 'B' ? '0' : '12px',
            }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Essence (15 words)
            </div>
            <div className="text-xl font-medium leading-relaxed">
              Eight levels from interactive prompts to autonomous agent factories. Master each before advancing.
            </div>
          </div>

          {/* Level Cards - Show first 4 */}
          <h2
            className="text-2xl font-bold text-zinc-900 mb-6"
            style={{ fontFamily: variation === 'B' ? 'Georgia, serif' : 'inherit' }}
          >
            The 8 Levels (showing 0-3)
          </h2>

          <div className="space-y-5 mb-12">
            {realLevelData.slice(0, 4).map((level) => (
              <LevelCard key={level.level} {...level} />
            ))}
          </div>

          {/* Advanced Levels Teaser */}
          <div
            className="mb-12 p-6"
            style={{
              backgroundColor: variation === 'B' ? '#FEF2F2' : '#fef2f2',
              border: `1px solid ${DS_PRIMARY}33`,
              borderRadius: variation === 'B' ? '0' : '8px',
            }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: DS_PRIMARY, fontFamily: variation === 'B' ? 'Georgia, serif' : 'inherit' }}
            >
              Advanced Levels (5-7)
            </h3>
            <div className="space-y-4">
              {realLevelData.slice(5).map((level) => (
                <LevelCard key={level.level} {...level} />
              ))}
            </div>
          </div>

          {/* Gotchas Section */}
          <h2
            className="text-2xl font-bold text-zinc-900 mb-6"
            style={{ fontFamily: variation === 'B' ? 'Georgia, serif' : 'inherit' }}
          >
            Gotchas
          </h2>

          <div className="space-y-4">
            {realGotchas.map((gotcha, i) => (
              <GotchaBox key={i} {...gotcha} />
            ))}
          </div>
        </div>

        {/* Variation Info Footer */}
        <div className="mt-8 text-center text-sm text-zinc-500">
          Currently viewing: <strong>Variation {variation}</strong>
          {variation === 'A' && ' — Rounded corners, subtle shadows, teal accents'}
          {variation === 'B' && ' — Sharp edges, serif headings, red accents'}
          {variation === 'C' && ' — Sharp cards, rounded badges, progressive color'}
        </div>
      </div>
    </div>
  )
}
