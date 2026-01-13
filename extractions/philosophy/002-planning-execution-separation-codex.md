# Planning vs Execution Separation - Long-Running Agent Architecture

## Source
- **Platform:** X (via Codex CLI user)
- **Date:** ~January 2026
- **Context:** Codex CLI workflow, but principles transfer directly to Claude Code
- **Note:** Cross-ecosystem mental model - OpenAI Codex patterns applicable to Claude

---

## Core Insight

View the AI as a **specialized dev team**—use a high-level planner model to map codebases and decompose goals into persistent, auditable files (scope, rules, tasks), then switch to an execution-focused model as a disciplined "worker" that grinds through queued tasks autonomously.

**The filesystem becomes a stateful queue** for resilience and oversight.

---

## The Mental Model

### Two-Phase Architecture

```
┌─────────────────────────────────────────┐
│         PLANNING PHASE                  │
│  (High-reasoning model)                 │
│                                         │
│  • Map codebase holistically            │
│  • Decompose goals into tasks           │
│  • Generate scope.md, rules.md          │
│  • Avoid questions - just decompose     │
└─────────────────────────────────────────┘
                    ↓
            [Filesystem Queue]
            scope.md, rules.md, tasks/
                    ↓
┌─────────────────────────────────────────┐
│         EXECUTION PHASE                 │
│  (Execution-focused model)              │
│                                         │
│  • Strict tool-using implementation     │
│  • Follow rules.md guardrails           │
│  • Process queued tasks atomically      │
│  • Commit, test, push                   │
└─────────────────────────────────────────┘
```

### Claude Code Translation

| Codex Pattern | Claude Code Equivalent |
|---------------|------------------------|
| GPT-5.2-XHIGH (planner) | Opus in plan mode |
| gpt-5.2-codex (executor) | Sonnet/Haiku workers |
| scope.md | CLAUDE.md + PRD |
| rules.md | CLAUDE.md rules section |
| Filesystem queue | progress.txt + git history |

---

## Key Principles

### 1. Separate Planning from Execution
- **Planning:** Holistic, question-avoiding decomposition
- **Execution:** Strict, tool-using implementation
- **Don't mix them** → leads to drift or excessive clarifications

### 2. Enforce Guardrails via rules.md
Example rules:
- Always branch before changes
- Test fully before committing
- Reduce bloat in legacy projects
- Commit and push after each task

### 3. Atomic Tasks (15-60 minutes)
- Tasks should be completable in 15-60 minutes
- Minimizes drift
- Enables resumability
- Prevents scope creep

### 4. Filesystem as State
- Queue prompts in files for multi-hour runs
- Survives interruptions
- Enables auditing
- Manual re-queue on failures

### 5. Reliability > Speed
- Prioritize cleaner, functional code over speed
- Let the agent grind through tasks
- CI-grade output is the goal

---

## Don't Do This

| Anti-Pattern | Why |
|--------------|-----|
| Use execution model for planning | "It sucks at it and asks too many questions" |
| Skip tests or delete them to pass | Defeats the purpose of CI-grade output |
| Make tasks too broad | Causes scope creep and failures |
| Neglect reviewing generated files | Planning phase output needs human review |

---

## What Can Go Wrong

- **Poorly defined goals** → suboptimal task breakdowns
- **Long runs (24+ hours)** → require stable environments
- **Large codebases** → may strain context limits during planning
- **Interruptions** → handled via resumability, but need manual re-queue
- **Non-atomic tasks** → scope creep and failures

---

## Relates To (Claude Code)

### Direct Parallels
- **Ralph Wiggum loops:** Same filesystem-as-queue pattern
- **PRD-driven development:** Same task decomposition approach
- **Worker preamble pattern:** Same planning/execution separation
- **progress.txt:** Same external memory concept

### Builds On
- Git workflows
- Testing/linting practices
- Model capability tiers (reasoning vs execution)

### Enables
- Long autonomous sessions (2-24 hours)
- CI-grade, cleaner code
- Scalable refactors, features, migrations
- Easy auditing via filesystem artifacts

---

## Applies To Claude Code

### Planning Phase (Opus/Plan Mode)
```markdown
# scope.md equivalent in CLAUDE.md

## Project Understanding
[Holistic codebase analysis]

## Goals
[Decomposed into atomic tasks]

## Rules
- Always create feature branches
- Run tests before committing
- No deleted tests
- Commit after each task
```

### Execution Phase (Worker Agents)
```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Follow rules.md guardrails
- Test before committing
- Do NOT ask clarifying questions - just execute
TASK:
[Specific 15-60 minute task]
```

---

## Follow-Up Questions

1. Concrete examples of scope.md/rules.md for different project types?
2. How does performance scale on >100k LOC codebases?
3. Can this be parallelized without losing auditability?

---

## Synthesis Hooks

**Combines well with:**
- Multi-model ensembles (Opus planning + Sonnet execution)
- Living specs for dynamic updates
- MCP servers for external integrations
- Notification hooks for long runs

**Part of larger pattern:**
Agentic engineering in 2025-2026 - shifting from prompt engineering to structured workflows with filesystem-based state management for resilience.

---

## Actionability

🟡 **Medium Lift** - Requires setup and learning, but once established, highly repeatable

---

## Tags
`#philosophy` `#mental-model` `#planning-execution` `#long-running` `#filesystem-queue` `#atomic-tasks` `#cross-ecosystem` `#agent-engineering`
