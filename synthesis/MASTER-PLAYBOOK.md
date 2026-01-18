# Claude Code Master Playbook

> **The Complete Guide to Orchestration, Context Management, and Agent Engineering**
>
> From single sessions to factory-scale autonomous development

---

## D-FINAL Integration

**Relationship:** This playbook serves as the **user journey entry point** - a guided progression through Claude Code mastery. D-FINAL serves as the **production reference manual** - comprehensive technical documentation for implementation and operations.

**How to use together:**
- **Start here** for learning progression, capability milestones, and understanding "why"
- **Reference D-FINAL** for production-ready code, checklists, and operational procedures

**Validates invariants:**
- INV-001: Context-First Paradigm (Part 1, Principle 1)
- INV-002: External State Over Internal Memory (Part 1, Principle 2)
- INV-003: Fresh Context Beats Extended Sessions (Part 1, Principle 3)
- INV-004: Verification as Trust Boundary (Part 1, Principles 5-6)
- INV-005: Orchestrator/Worker Separation (Part 1, Principle 4)

**Cross-references:**
- [D-FINAL-architecture.md](~/.claude/plans/WAVE-2.9/outputs/D-FINAL-architecture.md) - Pattern decision trees, architecture diagrams
- [D-FINAL-implementation.md](~/.claude/plans/WAVE-2.9/outputs/D-FINAL-implementation.md) - Production code, hook templates
- [D-FINAL-operations.md](~/.claude/plans/WAVE-2.9/outputs/D-FINAL-operations.md) - Checklists, incident response, monitoring
- [D-FINAL-mental-models.md](~/.claude/plans/WAVE-2.9/outputs/D-FINAL-mental-models.md) - 16 mental models with practitioner evidence

**Journey links:**
- [journey-architecture.md](~/.claude/plans/PHASE-2B-REFINED/outputs/journey-architecture.md)
- [journey-implementation.md](~/.claude/plans/PHASE-2B-REFINED/outputs/journey-implementation.md)
- [journey-operations.md](~/.claude/plans/PHASE-2B-REFINED/outputs/journey-operations.md)
- [journey-mental-models.md](~/.claude/plans/PHASE-2B-REFINED/outputs/journey-mental-models.md)

**Last updated:** 2026-01-18 (Phase 2B D-FINAL Integration)

---

## Navigation

- [Part 1: Foundations](#part-1-foundations)
- [Part 2: Your Capability Progression](#part-2-your-capability-progression)
- [Part 3: Deep Pattern Mastery](#part-3-deep-pattern-mastery)
- [Part 4: Transformations (Before/After)](#part-4-transformations-beforeafter)
- [Part 5: Pattern Combinations](#part-5-pattern-combinations)
- [Part 6: Complete Architectures](#part-6-complete-architectures)
- [Part 7: Reference](#part-7-reference)

---

## Who This Playbook Is For

**Your Current State:**
- Single long sessions with subagents that overflow context
- Context degrades mid-task, sessions die, progress lost
- Token costs spiraling
- Overwhelmed by options, unclear on which patterns to use when

**What You'll Learn:**
- WHY each pattern works (not just HOW)
- Judgment to choose between approaches
- How to manage context while maintaining full depth
- Concrete implementations with user journeys
- How patterns combine for compounding value

**How To Read This:**
1. **Start with Part 1** - Understand the foundations everything builds on
2. **Part 2 shows your progression** - Level 0 to Level 7, with clear milestones
3. **Parts 3-5 go deep** - Master specific patterns and combinations
4. **Parts 6-7 are reference** - Return to when you need decisions or lookups

---

# Part 1: Foundations

*Everything builds on these principles. Understand them first.*

## 1.1 The Eight Core Principles

These principles underlie EVERY successful pattern in this playbook. When you understand WHY these are true, you can derive any pattern yourself.

### Principle 1: Context Is The Primary Constraint

**The Reality:**
- Claude's context window is finite (~200K tokens)
- Quality degrades as context fills (observable at 60-70%)
- Long sessions accumulate noise, contradictions, and cruft
- Token costs scale linearly with context size

**What This Means:**
Every pattern in this playbook ultimately optimizes around context limits. This is THE constraint that shapes everything.

> **[+] COMBINES WITH: Fresh Context Pattern** - Use this constraint to your advantage
> See: [Fresh Context](#the-fresh-context-pattern)

---

### Principle 2: External State > Internal Memory

**The Problem:**
- Claude's "memory" lives only in the context window
- When the session ends, everything is lost
- Relying on Claude to "remember" is fragile

**The Solution:**
- Store state in files (prd.json, progress.txt, AGENTS.md)
- Store state in git (commits as memory)
- Store state in external tools (Claude-Mem, databases)

**Why It Works:**
External state survives session death, can be read by fresh agents, and doesn't consume context tokens when not needed.

---

### Principle 3: Fresh Context > Extended Sessions

**The Problem:**
- Long sessions degrade in quality
- Context becomes polluted with false starts, corrections, tangents
- No mechanism to "forget" irrelevant information

**The Solution:**
- Deliberately restart with fresh context
- Let external state provide continuity
- Each iteration gets a clean slate

**The Math:**
```
Quality of 20 five-minute sessions > Quality of one 100-minute session
```

---

### Principle 4: Orchestrator/Worker Separation

**The Iron Law:**
> Orchestrators coordinate. Workers execute. Never mix.

**Orchestrator Role:**
- Creates and assigns tasks
- Monitors progress
- Makes decisions about what to do next
- NEVER writes code or runs commands

**Worker Role:**
- Receives specific tasks
- Executes them fully
- Reports results back
- NEVER spawns other workers or creates tasks

**Why This Works:**
- Clean separation of concerns
- Workers can be specialized
- Prevents infinite recursion
- Orchestrator context stays lean

---

### Principle 5: Atomic, Verifiable Tasks

**The Problem:**
- "Build the auth system" is too big for one context window
- "Make it work better" can't be verified

**The Solution:**
- Break into smallest testable units
- Each task fits in one context window
- Each task has explicit acceptance criteria
- Verification is automated (typecheck, test, screenshot)

**Good Task:**
```json
{
  "title": "Add email validation to login form",
  "acceptanceCriteria": [
    "Validates email format with Zod",
    "Shows error message on invalid email",
    "npm run typecheck passes"
  ]
}
```

---

### Principle 6: Quality Gates Before Commit

**The Pattern:**
Never mark work as "done" without verification.

**Implementation:**
```bash
npm run typecheck &&
npm run test &&
npm run lint &&
git commit
```

**Why This Matters:**
- Broken code compounds (one bug becomes many)
- Early failures save rework
- Passing tests give confidence for next iteration

---

### Principle 7: Isolation For Parallel Work

**The Problem:**
- Multiple agents editing the same files = merge conflicts
- Shared state = race conditions
- Context pollution across domains

**The Solution:**
- Git worktrees for file isolation
- Separate branches per feature
- Domain-specific Claude instances (Panopticon pattern)

---

### Principle 8: Explicit Communication Channels

**The Problem:**
- Agents can't read minds
- Assumptions lead to wrong work
- "I thought you meant..." wastes iterations

**The Solution:**
- Progress files agents can read
- Structured task definitions (JSON)
- Clear acceptance criteria
- Hooks for notifications

---

## 1.2 Building Blocks: The Primitives

Patterns are built from these atomic components. Understand the primitives to understand any pattern.

### Loop Primitives

**Bash While Loop:**
```bash
while [ condition ]; do
  # agent iteration
done
```

**For Loop with Counter:**
```bash
for i in $(seq 1 $MAX_ITERATIONS); do
  # iteration $i
done
```

**Stop Condition Check:**
```bash
if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
  exit 0
fi
```

---

### State Primitives

**JSON Task List (prd.json):**
```json
{
  "userStories": [
    {"id": "US-001", "title": "...", "passes": false}
  ]
}
```

**Append-Only Log (progress.txt):**
```markdown
## 2026-01-09 - US-001
- Implemented: login form
- Learnings: Use Zod for validation
```

**Git As Memory:**
- Commits preserve state
- History is searchable
- Can revert to known-good states

---

### Control Primitives

**Fresh Context:**
```bash
# Each iteration starts new Claude instance
cat prompt.md | claude --dangerously-skip-permissions
```

**Error Recovery:**
```bash
OUTPUT=$(command 2>&1) || handle_error
```

**Iteration Limits:**
```bash
MAX_ITERATIONS=25
```

---

### Quality Gates

**TypeScript Check:**
```bash
npm run typecheck
```

**Test Suite:**
```bash
npm run test
```

**Visual Verification:**
```bash
playwright screenshot /path/to/page
```

---

### Coordination Primitives

**Task Creation (CC Mirror):**
```
TaskCreate: "Implement feature X"
```

**Task Status:**
```
TaskUpdate: task_id, status: completed
```

**Task Query:**
```
TaskGet: task_id
TaskList: status: pending
```

---

### Memory Primitives

**progress.txt Pattern:**
- Append learnings each iteration
- Read at start of next iteration
- Patterns compound

**AGENTS.md Pattern:**
- Permanent documentation
- Survive beyond current task
- For future agents and humans

**Claude-Mem Pattern:**
- Semantic memory across sessions
- Query by concept, not text match
- Automatic context injection

---

### Hook Primitives

**PreToolUse:**
```json
{
  "hooks": {
    "PreToolUse": [{ "matcher": "Edit", "hooks": [{"type": "command", "command": "..."}] }]
  }
}
```

**PostToolUse:**
```json
{
  "hooks": {
    "PostToolUse": [{ "matcher": "Edit", "hooks": [{"type": "command", "command": "prettier --write $FILE"}] }]
  }
}
```

---

### Communication Primitives

**Push Notification (poke/ntfy):**
```bash
curl -d "Claude needs input" ntfy.sh/your-topic
```

**MCP Agent Mail:**
- Inbox/outbox pattern
- Agents check for messages
- Async coordination

---

## 1.3 What Fails & Why: Anti-Patterns

Learn from failures to avoid them.

### Anti-Pattern 1: Context Rot

**What It Is:**
Single long sessions where quality degrades over time.

**Symptoms:**
- Claude "forgets" earlier decisions
- Starts contradicting itself
- Makes errors it wouldn't make fresh
- Gets slower and less coherent

**The Fix:**
Fresh context per iteration + external state.

---

### Anti-Pattern 2: Orchestrators That Write Code

**What It Is:**
An orchestrator agent that also tries to implement.

**Why It Fails:**
- Context fills with implementation details
- Loses big-picture view
- Can't coordinate if it's busy coding

**The Fix:**
Iron Law: Orchestrators coordinate, workers execute.

---

### Anti-Pattern 3: Workers Spawning Workers

**What It Is:**
Worker agents that spawn their own sub-workers.

**Why It Fails:**
- Infinite recursion risk
- Loss of control
- Context explosion
- Can't track what's happening

**The Fix:**
Workers report back to orchestrator. Only orchestrator spawns.

---

### Anti-Pattern 4: Missing Verification

**What It Is:**
Marking tasks complete without checking.

**Why It Fails:**
- Broken code compounds
- "Done" doesn't mean working
- Problems discovered late cost more

**The Fix:**
Quality gates before commit. Always.

---

### Anti-Pattern 5: Vague Tasks

**What It Is:**
Tasks like "make it better" or "fix the issues."

**Why It Fails:**
- No clear completion criteria
- Agent guesses what you want
- Can't verify success

**The Fix:**
Explicit acceptance criteria. Testable conditions.

---

## 1.4 Decision Framework

When to use what? Quick reference.

### Should I Autonomize This Task?

```
Is task well-defined with clear acceptance criteria?
├─ No → Stay interactive, clarify requirements first
└─ Yes → Can it be completed in one context window?
         ├─ Yes → Single Ralph iteration
         └─ No → Break into smaller tasks, then Ralph
```

### Which Model For This Task?

| Task Type | Recommended Model | Why |
|-----------|-------------------|-----|
| Complex reasoning | Opus | Highest capability |
| Standard coding | Sonnet | Good balance |
| Lookups, formatting | Haiku | Fast and cheap |
| Initial exploration | Sonnet | Balance of speed and insight |
| Final review | Opus | Catch subtle issues |

### Which Architecture?

```
How many parallel features?
├─ 1 feature → Ralph Loop
├─ 2-3 features → Parallel Ralph + Worktrees
├─ 3-8 agents → CC Mirror
└─ 10+ agents → Gas Town Factory
```

---

# Part 2: Your Capability Progression

*Your journey from single sessions to factory-scale development.*

## 2.1 Level 0: Where You Are Now

### The Situation
- All work happens in one continuous conversation
- Manual approval for every operation
- Context degrades after 60% fill
- 90 minutes → session death or burnout

### What's Actually Happening

**Token Flow:**
```
Start: 0 tokens
├─ You explain project: +2,000 tokens
├─ Claude responds: +1,500 tokens
├─ You request feature: +500 tokens
├─ Claude implements: +3,000 tokens
├─ You approve: +200 tokens
├─ Claude updates: +2,000 tokens
...
└─ At 60%: Quality starts dropping
└─ At 80%: Visible degradation
└─ At 95%: Session unusable
```

### The Pain Points
1. Re-explaining project context every session
2. Quality drops as you approach token limits
3. Session death means lost progress
4. You must be present the entire time
5. Can't parallelize anything

### Concrete Example: Building Auth

**Level 0 Flow:**
```
11:00 PM - Start session, explain project
11:15 PM - Ask for login form, approve changes
11:30 PM - Ask for validation, approve
11:45 PM - Context at 55%, Claude getting confused
12:00 AM - Ask for server action, Claude repeats earlier mistakes
12:15 AM - Context at 75%, quality noticeably worse
12:30 AM - Give up, feature incomplete
```

**Result:** 90 minutes invested, feature not done, frustrated.

---

## 2.2 Level 1: First Quick Wins (Week 1)

### What You Add
- **CLAUDE.md** - Project context that persists
- **3-5 slash commands** - Common workflows as shortcuts

### The Transformation

**Before:**
```
"I need you to review this code. We're using Next.js 14 with
TypeScript, server actions, Prisma ORM, and Tailwind. The
architecture follows..."
[5 minutes of context every session]
```

**After:**
```
/review
[Claude already knows your stack from CLAUDE.md]
```

### Implementation

**Create CLAUDE.md in project root:**
```markdown
# MyProject

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Prisma + PostgreSQL
- Tailwind CSS
- Server Actions (no API routes)

## Code Standards
- Functional components only
- Zod for all validation
- Never use `any` type
- Error boundaries for all routes

## Testing
- Vitest for unit tests
- Playwright for E2E
- npm run typecheck must pass
```

**Create .claude/commands/review.md:**
```markdown
Review the current git diff for:
1. TypeScript type safety issues
2. Missing error handling
3. Security vulnerabilities
4. Performance concerns

Format: [file:line] - [severity] - [issue]
```

### What You Gain
- **Token savings:** ~20% per session (no re-explaining)
- **Consistency:** Claude behaves the same across sessions
- **Speed:** Common workflows become one-word commands

### Time Investment
- 30-45 minutes initial setup
- Break-even: 3-4 sessions

---

## 2.3 Level 2: Specialization (Week 2)

### What You Add
- **Subagents** - Specialized AI workers
- **Hooks** - Automated responses to events

### The Transformation

**Before:**
One Claude doing everything, context polluted with unrelated work.

**After:**
Specialized agents with clean, focused contexts:
- Security reviewer (reads, doesn't write)
- Test writer (focused on tests)
- Performance auditor (analyzes only)

### Implementation

**Create .claude/agents/security-reviewer.yaml:**
```yaml
name: security-reviewer
description: Security vulnerability scanner
instructions: |
  You are a security expert. Review code for:
  - Hardcoded secrets
  - SQL injection vectors
  - XSS vulnerabilities
  - Auth bypass risks
  Report findings, never modify code.
```

**Add auto-formatting hook (~/.claude/settings.json):**
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{
        "type": "command",
        "command": "prettier --write \"$FILE\""
      }]
    }]
  }
}
```

### What You Gain
- **Isolated contexts:** Each agent stays focused
- **Automation:** Formatting happens automatically
- **Quality:** Specialized agents do specialized work better

### Time Investment
- 2-4 hours setup
- Create 3-4 agents to start

---

## 2.4 Level 3: Autonomy (Week 3-4)

### What You Add
- **Ralph Loop** - Autonomous iteration with fresh context
- **External memory** - State survives across iterations

### The Transformation

**Before:**
You babysit Claude for 90 minutes.

**After:**
```bash
./ralph.sh 25  # Run up to 25 iterations
# Go to sleep
# Wake up to completed feature
```

### Implementation

**ralph.sh:**
```bash
#!/bin/bash
MAX_ITERATIONS=${1:-25}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude --dangerously-skip-permissions 2>&1)

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "All tasks complete!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
```

**prompt.md:**
```markdown
# Ralph Agent

1. Read scripts/ralph/prd.json for tasks
2. Read scripts/ralph/progress.txt for learnings
3. Pick highest priority task where passes: false
4. Implement that ONE task
5. Run: npm run typecheck && npm run test
6. If passing: commit, mark passes: true
7. Append learnings to progress.txt

When ALL tasks pass: <promise>COMPLETE</promise>
```

**prd.json:**
```json
{
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login form",
      "acceptanceCriteria": [
        "Email/password fields render",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

### What You Gain
- **Human time:** 90 min → 10 min (setup only)
- **Fresh context:** Every iteration starts clean
- **Continuity:** progress.txt carries learnings forward
- **Sleep shipping:** Features complete overnight

### Time Investment
- 1-2 hours first setup
- 15-20 minutes per feature (PRD writing)

---

## 2.5 Level 4: Reliability (Month 1)

### What You Add
- **Explicit acceptance criteria** - Verifiable conditions
- **Progress tracking** - Measurable completion
- **Learning accumulation** - Knowledge compounds

### The Transformation

**Before:**
Ralph runs, you hope it worked.

**After:**
```
Story 1: PASS (commit: abc123)
Story 2: PASS (commit: def456)
Story 3: FAIL - typecheck error at auth.ts:42
Story 4: PENDING (blocked by Story 3)
```

### Implementation

**Enhanced prd.json:**
```json
{
  "project": "UserAuth",
  "branchName": "feat/auth",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add users table",
      "acceptanceCriteria": [
        "users table exists with id, email, password_hash",
        "id is primary key auto-increment",
        "Migrations are idempotent (IF NOT EXISTS)",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

**progress.txt patterns section:**
```markdown
## Codebase Patterns (Read First!)
- Migrations: Always use IF NOT EXISTS
- React: useRef<Timeout | null>(null) for timers
- Server Actions: Export from actions.ts, not inline

## 2026-01-09 - US-001
- Implemented: users table
- Files: db/migrations/001_users.sql
- Learnings: PostgreSQL needs explicit IF NOT EXISTS
```

### What You Gain
- **Success rate:** 60% → 95%
- **Debugging:** Know exactly where things failed
- **Compounding:** Next run is smarter than last

---

## 2.6 Level 5: Parallelism (Month 2)

### What You Add
- **CC Mirror** - Hub-and-spoke orchestration
- **Multiple workers** - Parallel execution
- **Model tiering** - Right model for each task

### The Transformation

**Before (Sequential):**
```
Task 1 → Task 2 → Task 3 → Task 4
[60 minutes total]
```

**After (Parallel):**
```
Task 1 ─┐
Task 2 ─┼─► [20 minutes total]
Task 3 ─┘
Task 4 (depends on 1-3) → [+5 minutes]
```

### Implementation

**Orchestrator prompt:**
```markdown
You are the ORCHESTRATOR. You NEVER write code.

Your tools:
- TaskCreate: Assign work to workers
- TaskUpdate: Update task status
- TaskGet: Check task progress
- Read: View 1-2 files for context

Workers have: Read, Write, Edit, Bash, Glob, Grep

Create tasks, monitor progress, coordinate completion.
```

**Task creation:**
```
TaskCreate(
  subject: "Implement user registration",
  description: "Create POST /api/auth/register",
  acceptanceCriteria: [
    "Validates email format",
    "Hashes password with bcrypt",
    "Returns 201 on success"
  ],
  model: "Sonnet"
)
```

### What You Gain
- **Speed:** 2-3x faster (parallel execution)
- **Cost optimization:** Haiku for lookups, Sonnet for coding
- **Specialization:** Each worker focused on their task

---

## 2.7 Level 6: True Parallelization (Month 3)

### What You Add
- **Git worktrees** - Complete file isolation
- **Parallel Ralph loops** - Multiple features simultaneously

### The Transformation

**Before:**
3 features sequentially = 3 hours

**After:**
3 features in parallel worktrees = 1 hour

### Implementation

**spawn-parallel.sh:**
```bash
#!/bin/bash
FEATURES=("auth" "payments" "notifications")

for feature in "${FEATURES[@]}"; do
  git worktree add ../wt-$feature $feature-branch
  (
    cd ../wt-$feature
    ./scripts/ralph/ralph.sh 20
  ) &
done

wait
echo "All features complete!"
```

### What You Gain
- **True 3-5x speedup:** No conflicts during work
- **Sleep shipping at scale:** Multiple features overnight
- **Isolation:** Each feature gets clean environment

---

## 2.8 Level 7: Factory Scale (Month 6+)

### What You Add
- **Persistent workers** - Named agents with memory
- **Self-improving systems** - Factory learns from runs
- **Automatic decomposition** - AI breaks down features

### The Gas Town Architecture

```
Gas Town Factory
├─ HQ (Management)
│  ├─ Mayor (coordination)
│  ├─ Deacon (monitoring)
│  └─ Dogs (quality gates)
├─ Refinery (auto-decomposition)
└─ Rigs (projects)
   ├─ Witness (observer)
   ├─ Polecats (persistent workers)
   └─ Crew (ephemeral workers)
```

### What You Gain
- **Team equivalent:** 3-5 mid-level developers
- **24/7 operation:** Continuous development
- **Self-improvement:** Factory gets better over time

### Prerequisites
- 100+ hours multi-agent experience
- $50-200/day budget tolerance
- Comfort with emergence and chaos

---

## Progression Summary

| Level | Pattern | Human Time | Token Efficiency | Capability |
|-------|---------|------------|------------------|------------|
| 0 | Single Session | 90 min | Low | Basic |
| 1 | CLAUDE.md | 60 min | +20% | Consistent |
| 2 | Subagents | 45 min | +30% | Specialized |
| 3 | Ralph | 10 min | +50% | Autonomous |
| 4 | PRD-driven | 20 min | +60% | Reliable |
| 5 | CC Mirror | 30 min | +40% | Parallel |
| 6 | Worktrees | 15 min | +70% | Scaled |
| 7 | Gas Town | Minimal | Variable | Factory |

---

# Part 3: Deep Pattern Mastery

*Go deep on the patterns that matter most.*

## 3.1 Context Management: The Invisible Constraint

Every optimization pattern in Claude Code ultimately addresses the same fundamental limitation: **context window exhaustion**. Understanding this constraint is the key that unlocks advanced usage.

### Why Context Is THE Primary Constraint

> "Context rot: LLMs get stupider with more tokens"

Claude's context window (~200K tokens, ~100K effective for quality work) is a **hard ceiling** that shapes every workflow decision.

**The Degradation Curve:**

| Context Level | Quality Impact |
|--------------|----------------|
| 0-50% | Full capability |
| 50-70% | Slight degradation possible |
| 70-85% | Noticeable quality loss |
| 85-95% | Significant degradation |
| 95%+ | Failure mode |

### Strategy 1: Fresh Context Per Iteration

**The Pattern:** Spawn a new agent instance for each task. No memory pollution.

```
┌─────────────────────────────────────────────────────┐
│  Iteration 1 (fresh Claude instance)               │
│  → Read state from files (PRD, progress, git)      │
│  → Pick highest priority incomplete task           │
│  → Implement + verify                              │
│  → Commit if passing                               │
│  → Exit                                            │
└─────────────────────────────────────────────────────┘
              ↓ (no memory carried forward)
┌─────────────────────────────────────────────────────┐
│  Iteration 2 (fresh Claude instance)               │
│  → Read state from files (now updated)             │
│  → Repeat...                                       │
└─────────────────────────────────────────────────────┘
```

> **[+] COMBINES WITH: Ralph Loop** - Fresh context per iteration is Ralph's core mechanism

### Strategy 2: File-Based External State

**The Three Core Files:**

1. **progress.txt** - Append-only session memory
2. **prd.json** - Machine-readable task tracking
3. **CLAUDE.md** - Project context onboarding

### Strategy 3: Git as Memory

Git history is the ultimate external memory:
- **Commits as Checkpoints**
- **Diff as Context**
- **History as Narrative**
- **Rollback as Safety**

### Context Budget Quick Reference

```
Total Effective: ~100K tokens
├── System prompt + CLAUDE.md:   ~5K (5%)
├── Codebase context:            ~20K (20%)
├── Current task:                ~2K (2%)
├── Working memory:              ~30K (30%)
├── Tool outputs:                ~20K (20%)
├── Code generation:             ~15K (15%)
└── Buffer for retries:          ~8K (8%)
```

---

## 3.2 The Ralph Loop: Complete Implementation

Ralph Wiggum is a **persistence pattern for AI coding agents**. At its absolute core:

```bash
while :; do cat PROMPT.md | claude ; done
```

### The Mental Model

> "Think of the AI agent as an **eager but somewhat dim junior developer (Ralph)** who never sleeps, happily works on one tiny task at a time, commits often, and tells you when it is truly finished."

### Complete Implementation

**ralph.sh:**
```bash
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-25}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude --dangerously-skip-permissions 2>&1)

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Done!"
    exit 0
  fi
  sleep 2
done
echo "Max iterations reached"
```

### Task Sizing: The Most Critical Factor

> "If you can't describe it in 2-3 sentences, it's too big."

**Right-sized tasks:**
- Add a database column + migration
- Add a UI component to an existing page
- Write tests for one module
- Implement one API endpoint

**Too big (split these):**
- "Build the entire dashboard"
- "Add authentication"
- "Create e-commerce flow"

### Ralph Variants

| Variant | Purpose | When to Use |
|---------|---------|-------------|
| **Basic Ralph** | Standard loop | Normal features |
| **AFK Ralph** | Overnight autonomous | Sleep shipping |
| **HOTL Ralph** | Human review between | Security-sensitive |
| **Compounding Ralph** | Archives past runs | Long-term projects |
| **Parallel Ralph** | Git worktrees | Multi-feature overnight |

---

## 3.3 Multi-Agent Architecture

### The Iron Law of Worker Separation

```
╔═══════════════════════════════════════════════════╗
║  ORCHESTRATORS COORDINATE. WORKERS EXECUTE.       ║
║  NEVER MIX.                                       ║
╚═══════════════════════════════════════════════════╝
```

| Role | What They Do | What They DON'T Do |
|------|-------------|-------------------|
| **Orchestrator** | Decompose tasks, assign workers | Write code, run commands |
| **Workers** | Execute specific tasks | Spawn sub-agents, create tasks |

### Architecture Selection

```
SIMPLE <────────────────────────────> COMPLEX

[Ralph Loop]    [CC Mirror]    [Gas Town]
Single agent    Multi-agent    Agent factory
Bash script     Native CC      Role-based
```

### CC Mirror: Hub-and-Spoke

```bash
# Quick Start
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load the orchestration skill and initiate"
```

### Model Selection for Workers

| Model | Use Case |
|-------|----------|
| **Haiku** | Lookups, simple tasks |
| **Sonnet** | Implementation |
| **Opus** | Complex reasoning, architecture |

---

## 3.4 Domain Isolation: The Panopticon Pattern

Running Claude Code as a **swarm of parallel isolated instances**, each owning a distinct life domain.

### The 8 Parallel Domains

```
~/nox        # Company/product
~/metrics    # Analytics/data
~/email      # Communications
~/growth     # Marketing
~/trades     # Personal finance
~/health     # Fitness/wellness
~/writing    # Content creation
~/personal   # Life admin
```

### Why Domain Isolation Matters

1. **Context Pollution Prevention** - Each domain maintains focused context
2. **Specialized Optimization** - Different tools, schedules, models per domain
3. **Security Boundaries** - Credentials don't leak between domains
4. **Parallel Execution** - All domains run simultaneously

### Implementation

```bash
#!/bin/bash
# start-domains.sh
DOMAINS="nox metrics email growth trades health writing personal"

for domain in $DOMAINS; do
    cd ~/$domain
    tmux new-session -d -s $domain "claude"
done
```

> **[+] COMBINES WITH: Ralph Loop** - Each domain can run its own Ralph loop

---

# Part 4: Transformations (Before/After)

*See the same task done both ways to understand the value.*

## 4.1 Your Transformation: Single Session → Efficient Orchestration

### The Task: Build User Authentication Feature

**Requirements:** Login form, Zod validation, server action with bcrypt, database integration, tests.

---

### BEFORE: Single Session with Naive Subagents

```
$ claude

You: Build a login form for my Next.js app
Claude: [Writes LoginForm.tsx] [500 tokens]

You: Add email validation
Claude: [Updates with regex] [1,200 tokens]

You: Use Zod instead
Claude: [Rewrites] [2,100 tokens]

You: Use a subagent for database
Claude: [Spawns subagent with ALL context]
[Subagent inherits 3,400 tokens + returns 2,000]
[Main context: 5,800 tokens]

You: Spawn subagent for tests
[Subagent inherits 5,800 + returns 1,500]
[Main context: 7,300 tokens]

# 60 minutes in, context at 65%...
# Claude starts forgetting earlier decisions

You: Why did you change validation back to regex?
# Session dies at 85% context
# Feature incomplete
```

**Token Cost:** ~62,000 tokens ($4-8)
**Result:** Incomplete, buggy feature
**Human Time:** 90 minutes active

---

### AFTER: Ralph Pattern

**prd.json:**
```json
{
  "userStories": [
    {"id": "US-001", "title": "Login form", "passes": false},
    {"id": "US-002", "title": "Zod schema", "passes": false},
    {"id": "US-003", "title": "Server action", "passes": false},
    {"id": "US-004", "title": "Tests", "passes": false}
  ]
}
```

**Execution:**
```bash
./ralph.sh 25  # Run at 11 PM, go to sleep
```

**Result:**
- 7 iterations, 7 clean commits
- Each iteration: fresh context (0%)
- Token cost: ~27,000 tokens ($2-3)
- Human time: 5 minutes setup
- Feature: Complete, tested

---

### Side-by-Side Comparison

| Aspect | Before | After |
|--------|--------|-------|
| Human Time | 90 min | 5 min |
| Tokens | 62,000 | 27,000 |
| Cost | $4-8 | $2-3 |
| Context Health | 85%+ (degraded) | Fresh each iteration |
| Result | Incomplete | Complete |

---

## 4.2 Manual Context → Filesystem State

**Before:** Re-explaining context every session.
```
You: I'm continuing work on dashboard. Yesterday we finished US-001.
We learned server actions are required. The migration pattern uses
IF NOT EXISTS...
```

**After:** State in files, sessions read automatically.
```
You: Continue work on user dashboard
[Claude reads progress.txt, prd.json, AGENTS.md]
Claude: I see US-001 is complete. Continuing with US-002...
```

**Knowledge compounds. You never repeat the same mistake twice.**

---

## 4.3 Generalist Agent → Specialized Swarm

**Before:** One agent doing everything.
```
One Context Window:
DB schema + API + React + tests = 85% context, quality drops
```

**After:** Specialized workers with fresh contexts.
```
Orchestrator (Opus)
├── Backend Worker (Sonnet) → Fresh context
├── Frontend Worker (Sonnet) → Fresh context
└── Test Worker (Haiku) → Fresh context
```

**Quality per domain. Parallel execution. 50-70% cost reduction.**

---

# Part 5: Pattern Combinations

*How patterns work together for compounding value.*

## 5.1 Essential Pairwise Combinations

### Ralph + Hooks (Multiplicative)

Push notifications during AFK runs. Auto-format on every edit.

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{"type": "command", "command": "prettier --write $FILE"}]
    }],
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{"type": "command", "command": "~/.claude/hooks/notify.sh"}]
    }]
  }
}
```

**ROI:** 15 min setup. Never miss a blocking question again.

---

### Subagents + Git Worktrees (Multiplicative)

True parallel development with no merge conflicts.

```bash
git worktree add ../auth-agent feature/auth
git worktree add ../payments-agent feature/payments

(cd ../auth-agent && claude "Implement auth...") &
(cd ../payments-agent && claude "Implement payments...") &
wait
```

**This fixes your subagent problem:** Each agent gets fresh context, not inherited pollution.

---

### progress.txt + AGENTS.md (Compounding)

Short-term memory (progress.txt) + Long-term memory (AGENTS.md).

```
Session 1: Learns bcrypt needs 12 rounds → progress.txt
Session 5: Distills to AGENTS.md → "Auth: bcrypt 12 rounds"
Session 50: Agent reads AGENTS.md → Uses 12 rounds automatically
```

---

## 5.2 Triple Stacks

### The Production Multi-Agent Stack

**Components:** CC Mirror + Git Worktrees + Hooks

```
Orchestrator (Opus)
├── Backend Worker (Sonnet) → ../worktrees/backend/
│   └── Hooks: format, notify
├── Frontend Worker (Sonnet) → ../worktrees/frontend/
│   └── Hooks: format, lint
└── Test Worker (Haiku) → ../worktrees/tests/
    └── Hooks: run tests
```

---

## 5.3 Anti-Pattern Combinations (What NOT to Do)

| Pattern A | Pattern B | Why It Fails |
|-----------|-----------|--------------|
| Naive Subagents | Large Context | Inherited pollution |
| CC Mirror | Gas Town | Competing orchestrators |
| Ralph | No Verification | Infinite broken loops |
| Opus | Everything | Budget explosion |

---

## 5.4 Implementation Priority

**Week 1 (Stop the Bleeding):**
1. Create prd.json template (15 min)
2. Set up ralph.sh (30 min)
3. Add formatting hooks (15 min)

**Week 2 (Context Discipline):**
1. Create progress.txt pattern (10 min)
2. Create AGENTS.md (20 min)
3. Replace subagents with worktrees (1 hr)

**Week 3 (Orchestration):**
1. Add CC Mirror (2 hrs)
2. Implement tiered model selection (30 min)

**Result:** 50-70% cost reduction. Better quality. Ship while sleeping.

---

# Part 6: Complete Architectures

*Visual representations and narrative workflows.*

## 6.1 A Day With Ralph: The Overnight Shipping Story

### The Setup (6:47 PM, Wednesday)

You've been staring at the Jira board for three weeks. The authentication feature keeps slipping. Tonight, that changes.

```bash
cd ~/projects/saas-app
git checkout -b feature/auth-flow
```

You've already written the PRD - 5 user stories, each atomic, each with verifiable acceptance criteria.

```bash
./scripts/ralph/ralph.sh 25 2>&1 | tee ralph.log &
```

The loop begins. You grab your jacket and leave.

---

### The Night (Automatic)

**Iteration 1 (6:52 PM):** Fresh Claude instance. Reads prd.json. Implements US-001 (User model). Commits.

**Iteration 2 (7:08 PM):** Fresh context. Reads progress.txt learnings. Implements US-002 (login endpoint). Commits.

**Iteration 3-5:** Database, form component, tests. Each fresh. Each committed.

**Iteration 6:** All stories pass. Outputs `<promise>COMPLETE</promise>`. Loop exits.

---

### The Morning After (7:15 AM, Thursday)

```bash
git log --oneline feature/auth-flow
```

```
a3f2c1d feat(auth): Add protected route middleware
8b4e5f2 feat(auth): Add login form
c7d9a0b feat(auth): Add registration
4e6f8c1 feat(auth): Add login endpoint
9a1b2c3 feat(auth): Add User model
```

Five clean commits. CI green. You run the app. It works.

**Three weeks of Jira tickets - shipped while you slept.**

---

## 6.2 Feature Development: The Complete Journey

| Phase | Mode | Duration | Human Role |
|-------|------|----------|------------|
| **Discovery** | Interactive | 30-60 min | Thinking partner |
| **Planning** | Collaborative | 30-60 min | PRD author |
| **Preparation** | Manual | 15 min | Setup |
| **Execution** | Autonomous | 4-8 hrs | Sleeping |
| **Verification** | Review | 30-60 min | Quality gate |
| **Integration** | Git workflow | Varies | Process |

**Total human time:** 2-3 hours
**Feature shipped:** Overnight

---

## 6.3 ASCII Architecture Diagrams

### Pattern Dependency Graph

```
CLAUDE.md ─────────────────────────────────────────┐
    │                                               │
    ├─► Slash Commands ──┐                         │
    ├─► Hooks ───────────┼──► Ralph Loop ──────────┤
    └─► Skills ──────────┘        │                │
                                  ▼                │
                    ┌─────────────────────┐        │
                    │  progress.txt       │        │
                    │  prd.json           │        │
                    └─────────────────────┘        │
                                  │                │
                                  ▼                │
                    ┌─────────────────────┐        │
                    │  Multi-Agent        │◄───────┘
                    │  (CC Mirror)        │
                    └─────────────────────┘
```

### Orchestrator/Worker Separation

```
┌─────────────────────────────────────────────────────┐
│  ORCHESTRATOR              WORKERS                   │
│  ───────────               ───────                   │
│  TaskCreate               Read, Write, Edit          │
│  TaskUpdate      ═══►     Bash, Glob, Grep          │
│  TaskGet         Delegates                          │
│  Read (1-2 files)◄═══     Reports results           │
│                                                      │
│  "CONDUCTOR"              "MUSICIANS"                │
│  Never codes              Execute only               │
├─────────────────────────────────────────────────────┤
│  THE IRON LAW: Workers NEVER spawn or create tasks  │
└─────────────────────────────────────────────────────┘
```

---

# Part 7: Reference

*Quick lookups and decision support.*

## 7.1 Pattern Vocabulary

### Loop Constructs
| Term | Definition |
|------|------------|
| **while-loop** | Indefinite iteration until signal |
| **for-loop** | Bounded iteration with max |
| **fresh-context** | Zero accumulated context |
| **stop-condition** | `<promise>COMPLETE</promise>` |

### State Containers
| Term | Location | Purpose |
|------|----------|---------|
| **progress.txt** | scripts/ralph/ | Session learnings |
| **prd.json** | scripts/ralph/ | Task tracking |
| **AGENTS.md** | Project root | Permanent learnings |
| **CLAUDE.md** | Project root | Project context |

### Agent Types
| Term | Role |
|------|------|
| **orchestrator** | Coordinates, never executes |
| **worker** | Executes, never coordinates |
| **polecat** | Persistent named worker (Gas Town) |
| **crew** | Ephemeral worker (Gas Town) |

---

## 7.2 Decision Trees

### Which Pattern?

```
Is this a single, simple task?
├─YES→ Single interactive session
└─NO→ Can you walk away (AFK)?
    ├─NO→ CC Mirror (multi-agent)
    └─YES→ Can you write clear acceptance criteria?
         ├─NO→ NOT READY (refine first)
         └─YES→ Need parallelism?
              ├─NO→ Ralph loop
              └─YES→ Parallel Ralph + Worktrees
```

### Which Model?

| Task | Model |
|------|-------|
| Lookups, formatting | Haiku |
| Implementation | Sonnet |
| Architecture, reasoning | Opus |
| Security-critical | Opus |

### Task Sizing

```
Can you describe it in 2-3 sentences?
├─NO→ SPLIT IT
└─YES→ 100-500 lines changed?
     ├─NO (more)→ SPLIT IT
     └─YES→ GOOD SIZE
```

---

## 7.3 Cross-Reference Index

| Pattern | Combines With | Conflicts With |
|---------|--------------|----------------|
| Ralph Loop | Hooks, Playwright, progress.txt | Long sessions |
| CC Mirror | Hooks, Worktrees | Gas Town |
| Hooks | Everything | YOLO mode |
| Worktrees | Ralph, CC Mirror | Single-branch |
| progress.txt | Ralph, AGENTS.md | - |
| Panopticon | Domain-specific tools | Cross-domain work |

---

## 7.4 Configuration Quick Reference

### Essential prd.json
```json
{
  "project": "Name",
  "branchName": "feature/xxx",
  "userStories": [
    {
      "id": "US-001",
      "title": "Task (2-3 sentences)",
      "acceptanceCriteria": ["Verifiable condition", "npm run typecheck passes"],
      "priority": 1,
      "passes": false
    }
  ]
}
```

### Essential ralph.sh
```bash
#!/bin/bash
MAX_ITERATIONS="${1:-25}"
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
    OUTPUT=$(cat prompt.md | claude --dangerously-skip-permissions)
    if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
        exit 0
    fi
done
```

---

## 7.5 Before Going Autonomous Checklist

- [ ] Tasks are atomic (2-3 sentences)
- [ ] Dependencies ordered by priority
- [ ] Acceptance criteria verifiable
- [ ] Every story includes `npm run typecheck passes`
- [ ] Git branch created
- [ ] progress.txt initialized
- [ ] Max iterations set

**If any missing: Stay interactive until ready.**

---

## 7.6 The Iron Law (Always Remember)

```
╔═══════════════════════════════════════════════════════════╗
║                     THE IRON LAW                           ║
╠═══════════════════════════════════════════════════════════╣
║  An agent that ORCHESTRATES must NEVER directly EXECUTE.  ║
║  An agent that EXECUTES must NEVER directly ORCHESTRATE.  ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Appendix: Source Files

This playbook synthesizes these files from the knowledge base:

**Foundations:**
- principles-core.md, architecture-primitives.md, principles-anti-patterns.md

**Mastery:**
- mastery-context-management.md, mastery-ralph-complete.md, mastery-multi-agent.md

**Combinations:**
- combinations-pairwise.md, combinations-triple-plus.md, combinations-unexplored.md

**Reference:**
- grammar-vocabulary.md, taxonomy-cross-reference.md, JUDGMENT-GUIDE.md

---

*Generated from 39 synthesis files (~1MB) extracted from Claude Code community knowledge.*
