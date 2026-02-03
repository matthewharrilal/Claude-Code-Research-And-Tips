'use client'

/**
 * VISION POC: Complexity Ladder Reimagined
 *
 * Design Principles:
 * 1. Visual Progression - L0 feels different from L7
 * 2. Structured Breathing - Clear sections, deliberate whitespace
 * 3. Premium Code - Code blocks that feel like a product
 * 4. Color with Purpose - Communicates level, type, importance
 * 5. Typography that Commands - Clear hierarchy you feel
 *
 * Feel: Publication that becomes Tool
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronDown, ChevronRight, Sparkles, Zap, Target, Rocket, Crown } from 'lucide-react'

// ============================================
// DESIGN TOKENS - Our New Visual Language
// ============================================

const tokens = {
  // Level colors - progression from grounded to intense
  levels: {
    0: { bg: '#f8fafc', border: '#94a3b8', accent: '#64748b', badge: '#475569', label: 'Foundation' },
    1: { bg: '#f0fdf4', border: '#86efac', accent: '#22c55e', badge: '#16a34a', label: 'Foundation' },
    2: { bg: '#eff6ff', border: '#93c5fd', accent: '#3b82f6', badge: '#2563eb', label: 'Foundation' },
    3: { bg: '#fefce8', border: '#fde047', accent: '#eab308', badge: '#ca8a04', label: 'Growth' },
    4: { bg: '#fff7ed', border: '#fdba74', accent: '#f97316', badge: '#ea580c', label: 'Growth' },
    5: { bg: '#faf5ff', border: '#d8b4fe', accent: '#a855f7', badge: '#9333ea', label: 'Advanced' },
    6: { bg: '#fdf2f8', border: '#f9a8d4', accent: '#ec4899', badge: '#db2777', label: 'Advanced' },
    7: { bg: '#18181b', border: '#3f3f46', accent: '#fafafa', badge: '#fafafa', label: 'Mastery', dark: true },
  },
  // Typography
  fonts: {
    display: '"Playfair Display", Georgia, serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", monospace',
  },
  // Spacing rhythm
  space: {
    section: '80px',
    component: '48px',
    element: '24px',
    tight: '12px',
  },
}

// ============================================
// REAL CONTENT - From complexity-ladder
// ============================================

const levels = [
  {
    level: 0,
    title: 'Single Interactive Session',
    subtitle: 'Basic AI coding assistance',
    essence: 'You\'re the driver, Claude is the copilot.',
    description: 'Basic Claude Code usage in a single terminal. No persistence between sessions. Manual approval for all operations. Run `claude`, ask questions, approve each operation manually, session ends, context is lost.',
    unlock: 'Basic AI coding assistance. Every session starts from scratch.',
    code: null,
    icon: Target,
  },
  {
    level: 1,
    title: 'CLAUDE.md + Slash Commands',
    subtitle: 'Consistent behavior, workflow shortcuts',
    essence: 'Claude "remembers" your project.',
    description: 'Project context via CLAUDE.md files. Reusable workflows via slash commands. Claude knows your architecture, coding standards, and preferences across sessions.',
    unlock: 'Consistent Claude behavior. Commands take seconds instead of paragraphs.',
    code: `# CLAUDE.md in project root
## Tech Stack
- TypeScript + React
- PostgreSQL with Drizzle ORM

## Commands
npm run dev       # Start dev server
npm run typecheck # TypeScript check`,
    icon: Target,
  },
  {
    level: 2,
    title: 'Subagents + Hooks',
    subtitle: 'Task delegation, automated workflows',
    essence: 'Claude becomes a small team.',
    description: 'Delegate to specialized agents with isolated contexts. Automate responses to lifecycle events with hooks. Security reviewers, formatters, test runners - each with their own expertise.',
    unlock: 'Specialized agents for specific tasks. Automatic formatting on file save.',
    code: `# .claude/agents/security-reviewer.yaml
name: Security Reviewer
tools: [Read, Grep, Glob]
prompt: |
  Analyze code for hardcoded secrets,
  SQL injection, XSS vulnerabilities.`,
    icon: Zap,
  },
  {
    level: 3,
    title: 'Simple Loops (Basic Ralph)',
    subtitle: 'Autonomous execution',
    essence: 'Come back to find tasks completed.',
    description: 'Claude Code runs in a loop until complete. Each iteration gets fresh context. External memory via git and files. Named after the "Ralph Wiggum" pattern.',
    unlock: 'Autonomous execution. Sleep, wake up to results.',
    code: `#!/bin/bash
while :; do
  claude "Check progress.txt, complete next task" | tee output.txt
  if grep -q "ALL TASKS COMPLETE" output.txt; then
    break
  fi
  sleep 5
done`,
    icon: Zap,
  },
  {
    level: 4,
    title: 'PRD-Driven Loops (Full Ralph)',
    subtitle: 'Structured autonomous development',
    essence: 'Real features shipped overnight.',
    description: 'JSON-based task tracking with acceptance criteria, priority ordering, and quality gates. Full product requirement documents drive autonomous development.',
    unlock: 'Features shipped overnight. Learnings compound across iterations.',
    code: `{
  "userStories": [{
    "id": "US-001",
    "title": "Add login form",
    "acceptanceCriteria": [
      "Email field renders",
      "npm run typecheck passes"
    ],
    "priority": 1,
    "passes": false
  }]
}`,
    icon: Rocket,
  },
  {
    level: 5,
    title: 'Multi-Agent Orchestration',
    subtitle: 'Parallel specialized work',
    essence: 'Multiple agents, coordinated tasks.',
    description: 'Central orchestrator delegates to specialized workers. Hub-and-spoke architecture. Opus orchestrator coordinates Sonnet/Haiku workers for parallel execution.',
    unlock: 'Multiple agents working simultaneously on coordinated tasks.',
    code: `# Worker preamble template
CONTEXT: You are a WORKER agent, not orchestrator.
RULES:
- Complete ONLY the task below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents
- Report results with absolute file paths`,
    icon: Rocket,
  },
  {
    level: 6,
    title: 'Parallel Swarms + Worktrees',
    subtitle: 'Massive parallelization',
    essence: '10x productivity through true parallel development.',
    description: 'Git worktrees provide complete isolation for parallel agents. Multiple Ralph loops running simultaneously. Merge orchestration handles conflicts.',
    unlock: '10x productivity through true parallel development.',
    code: `# Create isolated worktrees
git worktree add ../wt-auth feature-auth
git worktree add ../wt-payments feature-payments

# Run Ralph in each simultaneously
for feature in auth payments; do
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait`,
    icon: Crown,
  },
  {
    level: 7,
    title: 'Full Agent Factory (Gas Town)',
    subtitle: 'Team-scale productivity solo',
    essence: 'You\'re the PM. Agents are your team.',
    description: 'Factory architecture for agent production. 7+ specialized roles working continuously. Self-improving systems. Human becomes Product Manager, agents become the engineering team.',
    unlock: 'One person with Gas Town = small engineering team output.',
    code: `# Gas Town daily workflow
gt status             # Morning standup
gt feature add "Build invoice system"
gt inbox review       # Review completed work
gt ship               # Deploy approved changes`,
    icon: Crown,
  },
]

// ============================================
// COMPONENTS
// ============================================

function CodeBlock({ code, level }: { code: string; level: number }) {
  const [copied, setCopied] = useState(false)
  const colors = tokens.levels[level as keyof typeof tokens.levels]
  const isDark = level === 7

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="relative group"
      style={{
        background: isDark ? '#09090b' : '#1e1e2e',
        borderRadius: '8px',
        border: `1px solid ${isDark ? '#27272a' : '#313244'}`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-4"
        style={{
          background: isDark ? '#18181b' : '#262637',
          borderRadius: '8px 8px 0 0',
          borderBottom: `1px solid ${isDark ? '#27272a' : '#313244'}`,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors"
          style={{
            background: copied ? '#22c55e' : 'rgba(255,255,255,0.1)',
            color: copied ? '#fff' : '#a1a1aa',
          }}
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>
      <pre
        className="p-4 pt-12 overflow-x-auto text-sm leading-relaxed"
        style={{
          fontFamily: tokens.fonts.mono,
          color: '#e4e4e7',
        }}
      >
        {code}
      </pre>
    </div>
  )
}

function LevelCard({ data, index }: { data: typeof levels[0]; index: number }) {
  const [expanded, setExpanded] = useState(index < 2)
  const colors = tokens.levels[data.level as keyof typeof tokens.levels]
  const isDark = data.level === 7
  const Icon = data.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className="relative overflow-hidden transition-all duration-300"
        style={{
          background: colors.bg,
          borderRadius: '16px',
          border: `2px solid ${colors.border}`,
          boxShadow: expanded
            ? `0 20px 40px -12px ${colors.accent}25`
            : '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        {/* Level indicator bar */}
        <div
          className="absolute top-0 left-0 w-1.5 h-full"
          style={{ background: colors.accent }}
        />

        {/* Header - Always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 pl-8"
        >
          <div className="flex items-start gap-5">
            {/* Level badge */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #3f3f46 0%, #27272a 100%)'
                  : `linear-gradient(135deg, ${colors.accent} 0%, ${colors.badge} 100%)`,
                color: '#fff',
                fontFamily: tokens.fonts.display,
              }}
            >
              {data.level}
            </div>

            {/* Title area */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{
                    background: isDark ? '#27272a' : `${colors.accent}20`,
                    color: isDark ? '#a1a1aa' : colors.badge,
                  }}
                >
                  Level {data.level} · {colors.label}
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: tokens.fonts.display,
                  color: isDark ? '#fafafa' : '#18181b',
                }}
              >
                {data.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: isDark ? '#a1a1aa' : '#64748b' }}
              >
                {data.subtitle}
              </p>
            </div>

            {/* Expand indicator */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                background: isDark ? '#27272a' : `${colors.accent}10`,
                color: isDark ? '#a1a1aa' : colors.accent,
              }}
            >
              {expanded ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* Essence - one line summary */}
          <div
            className="mt-4 pl-[76px] text-lg font-medium"
            style={{
              fontFamily: tokens.fonts.display,
              color: isDark ? '#d4d4d8' : colors.badge,
              fontStyle: 'italic',
            }}
          >
            "{data.essence}"
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className="px-6 pb-6 pl-8 space-y-5"
                style={{
                  borderTop: `1px solid ${isDark ? '#27272a' : colors.border}`,
                  paddingTop: '24px',
                  marginTop: '0',
                }}
              >
                {/* Description */}
                <p
                  className="text-base leading-relaxed pl-[60px]"
                  style={{
                    color: isDark ? '#d4d4d8' : '#475569',
                    fontFamily: tokens.fonts.body,
                  }}
                >
                  {data.description}
                </p>

                {/* Code block */}
                {data.code && (
                  <div className="pl-[60px]">
                    <CodeBlock code={data.code} level={data.level} />
                  </div>
                )}

                {/* Unlock box */}
                <div
                  className="ml-[60px] p-4 rounded-lg flex items-start gap-3"
                  style={{
                    background: isDark ? '#27272a' : `${colors.accent}10`,
                    border: `1px solid ${isDark ? '#3f3f46' : `${colors.accent}30`}`,
                  }}
                >
                  <Sparkles
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: isDark ? '#fafafa' : colors.accent }}
                  />
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: isDark ? '#a1a1aa' : colors.badge }}
                    >
                      What This Unlocks
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: isDark ? '#d4d4d8' : '#374151' }}
                    >
                      {data.unlock}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function VisionPOC() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%)',
        fontFamily: tokens.fonts.body,
      }}
    >
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #18181b 100%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <span className="text-zinc-500">Architecture</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-medium">Complexity Ladder</span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: tokens.fonts.display }}
          >
            The Complexity Ladder
          </h1>

          {/* Essence box */}
          <div
            className="inline-block px-6 py-4 rounded-xl mb-8"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
              Essence
            </div>
            <div
              className="text-xl text-white font-medium leading-relaxed"
              style={{ fontFamily: tokens.fonts.display }}
            >
              Eight levels from interactive prompts to autonomous agent factories.
              <br />
              Master each before advancing.
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>8 Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Progressive Mastery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span>$20 → $800+/mo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Section: The Core Abstraction */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                fontFamily: tokens.fonts.display,
              }}
            >
              1
            </div>
            <h2
              className="text-3xl font-bold text-zinc-900"
              style={{ fontFamily: tokens.fonts.display }}
            >
              The Core Abstraction
            </h2>
          </div>

          <div
            className="p-6 rounded-xl mb-8"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            <p
              className="text-lg text-zinc-600 italic mb-4"
              style={{ fontFamily: tokens.fonts.display }}
            >
              "Everything builds on 8 principles. Understand them, and you can derive any pattern."
            </p>
            <div
              className="p-5 rounded-lg text-center"
              style={{
                background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
              }}
            >
              <p className="text-emerald-400 text-lg font-medium">
                Context is finite. External state persists. Fresh builds transcend.
                <br />
                Orchestration cascades, and judgment scales.
              </p>
              <p className="text-zinc-500 text-sm mt-3 italic">...only.</p>
            </div>
          </div>

          <p className="text-zinc-600 leading-relaxed">
            The Complexity Ladder maps the journey from basic interactive sessions to full team-scale
            autonomous development. Each level represents a distinct capability plateau with specific
            prerequisites, patterns, and cost implications. <strong>Don't skip levels.</strong>
          </p>
        </section>

        {/* Section: The 8 Levels */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                fontFamily: tokens.fonts.display,
              }}
            >
              2
            </div>
            <h2
              className="text-3xl font-bold text-zinc-900"
              style={{ fontFamily: tokens.fonts.display }}
            >
              The 8 Levels
            </h2>
          </div>

          {/* Level cards */}
          <div className="space-y-6">
            {levels.map((level, i) => (
              <LevelCard key={level.level} data={level} index={i} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: '#e4e4e7' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-zinc-500">
          <p className="mb-2">
            <strong className="text-zinc-700">Vision POC</strong> — Complexity Ladder reimagined
          </p>
          <p>
            Professional technical documentation with visual prestige.
          </p>
        </div>
      </footer>
    </div>
  )
}
