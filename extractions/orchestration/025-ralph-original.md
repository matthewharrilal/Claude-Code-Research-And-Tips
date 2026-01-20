# Ralph Wiggum: The Original Pattern
## Geoffrey Huntley's Fresh Context Iteration Loop

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md
**Last enhanced:** 2026-01-18 (Wave 3)
---

> "while :; do cat PROMPT.md | claude-code ; done" - The pattern that changed everything

**Extraction Date:** 2026-01-18
**Original Source:** ghuntley.com/ralph/
**Status:** Definitive reference - THE foundational orchestration pattern
**Line Count Target:** 600+ lines

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Origin Story](#2-origin-story)
3. [The Core Pattern](#3-the-core-pattern)
4. [Why Fresh Context Beats Extended Sessions](#4-why-fresh-context-beats-extended-sessions)
5. [The PROMPT.md Structure](#5-the-promptmd-structure)
6. [Implementation Variations](#6-implementation-variations)
7. [When to Use Ralph](#7-when-to-use-ralph)
8. [Comparison](#8-comparison)
9. [Common Mistakes](#9-common-mistakes)
10. [Quick Reference](#10-quick-reference)
11. [Sources](#11-sources)
12. [Tags](#12-tags)
13. [Document Metadata](#13-document-metadata)

---

## 1. You Are Here

### Complexity Ladder Position

**Level 3-4 on the complexity ladder:**

```
Level 0: Single session, no memory          ← Where most people start
Level 1: CLAUDE.md + project context        ← Basic persistence
Level 2: Extended sessions with handoffs    ← Context engineering
Level 3: RALPH WIGGUM LOOP                  ← YOU ARE HERE
Level 4: Multi-agent with CC Mirror         ← Next evolution
Level 5: Factory-scale orchestration        ← Gas Town territory
```

### What This Pattern Is

Ralph Wiggum is the **foundational iteration pattern** for AI coding agents. It solves the fundamental problem that extended AI sessions degrade in quality as context accumulates.

### Prerequisites

Before implementing Ralph:
- Understanding of Claude Code basics
- Familiarity with bash scripting
- Basic git workflow knowledge
- A project with testable/verifiable goals

### What This Enables

Mastering Ralph unlocks:
- "Ship while you sleep" workflows
- Autonomous feature development
- Context-rot-free AI coding
- The foundation for all advanced orchestration patterns

---

## 2. Origin Story

### The Creator: Geoffrey Huntley

The Ralph Wiggum pattern was created by **Geoffrey Huntley** (ghuntley.com/ralph/). The technique emerged from his practical experimentation with AI coding agents that could iterate autonomously on development tasks.

Huntley is a developer and technologist known for systems thinking and practical engineering approaches. His contribution to the AI coding community through Ralph became one of the most influential patterns in the Claude Code ecosystem.

### Why "Ralph Wiggum"?

The name comes from The Simpsons character Ralph Wiggum - the simple-minded child of Police Chief Wiggum. The metaphor is precise:

**Ralph Wiggum (the character) is:**
- Persistent despite setbacks
- Simple in approach but effective through repetition
- Unaware of "failure" as a stopping condition
- Eventually accomplishes goals through sheer persistence
- Not the smartest, but never gives up

**This maps perfectly to the pattern's philosophy:**
- **Iteration over perfection** - Don't aim for perfect on first try
- **Failures are data** - "Deterministically bad" failures are predictable and informative
- **Operator skill matters** - Success depends on writing good prompts, not just having good models
- **Persistence wins** - Keep trying until success; the loop handles retry logic automatically

### The Original Tweet/Post

The pattern was documented at ghuntley.com/ralph/ and spread through the developer community. Geoffrey Huntley described it as a "deterministic technique employing a continuous feedback loop for autonomous software development."

### The Core Insight

> "Each time Ralph does something bad, Ralph gets tuned - like a guitar."
> - Geoffrey Huntley

The methodology treats each failure as a tuning opportunity rather than a stopping condition. This embraces "eventual consistency" through iterative refinement.

### Matt Pocock's Popularization

While Geoffrey Huntley created the pattern, **Matt Pocock (@mattpocockuk)** was instrumental in popularizing it:

- **Viral video:** 409K views, 8K bookmarks
- **11 Tips Guide:** aihero.dev/tips-for-ai-coding-with-ralph-wiggum
- **Coined:** "KISS approach to AI coding that lets you ship while you sleep"
- **Added:** PRD format standardization, progress.txt structure, verification requirements

### Community Adoption Timeline

```
Geoffrey Huntley    Original concept, ghuntley.com/ralph/
       |
Matt Pocock         Viral video demos, 11 tips guide, PRD format
       |
Ryan Carson         Complete implementations, Amp integration, compounding runs
       |
Arvid Kahl          Comprehensive thread documenting variants
       |
Community           Marathon Ralph, Dr. Ralph, Lisa, Zeroshot, Ralph Marketer
       |
Anthropic           Official plugin: github.com/anthropics/claude-code/plugins/ralph-wiggum
```

### The Problem It Was Designed to Solve

Long AI coding sessions hit fundamental problems:

1. **Context windows fill up** over extended sessions
2. **Quality drops** as tokens accumulate ("context rot")
3. **The model loses track** of original goals
4. **Errors compound** without fresh perspective
5. **Internal summarization** is lossy - detail gets lost

**Huntley's insight:** Instead of fighting context limits with one long session, embrace many short sessions with external memory.

---

## 3. The Core Pattern

### The Fundamental Loop

At its absolute simplest, Ralph is:

```bash
while :; do cat PROMPT.md | claude-code ; done
```

**Everything else is scaffolding around this fundamental loop.**

This single line contains the entire philosophy:
- **`while :`** - Infinite loop (persistence)
- **`cat PROMPT.md`** - External memory (the task definition)
- **`claude-code`** - Fresh context each iteration
- **`done`** - Repeat until stopped

### The Complete Mechanism

```
+-------------------------------------------------------------+
|  1. Start with fresh context                                 |
|           |                                                  |
|  2. Read task state from files                               |
|     (prd.json, progress.txt, git history)                    |
|           |                                                  |
|  3. Pick highest priority incomplete task                    |
|           |                                                  |
|  4. Implement task                                           |
|           |                                                  |
|  5. Run verification (tests, typecheck)                      |
|           |                                                  |
|  6. If pass: commit, update prd.json                         |
|     If fail: log learnings, try again                        |
|           |                                                  |
|  7. Append to progress.txt                                   |
|           |                                                  |
|  8. Check completion condition                               |
|     All done? -> Output promise -> EXIT                      |
|     Not done? -> Loop continues                              |
+-------------------------------------------------------------+
```

### The Fresh Context Principle

**CRITICAL:** Each iteration spawns a NEW Claude instance with NO memory of previous work.

This is the key insight. The agent is **stateless**. Memory is **architecture**, not magic.

**Why does it matter?**

1. **Context rot is real** - LLMs degrade with accumulated tokens
2. **Quality drops** - The more context, the worse the output
3. **Lossy compaction** - Internal summarization loses detail
4. **Fresh perspective** - Each iteration can see the problem anew

**Continuity comes entirely from:**
- **Git history** - Code changes persist across sessions
- **prd.json** - Task status (passes: true/false)
- **progress.txt** - Learnings, patterns, gotchas discovered
- **File system** - The codebase itself

### The "We Learn from Failure" Philosophy

> "It's a 'we learn from failure'-centric approach. You define your goal condition and let the agent loop over and over until it has verifiably reached that promised goal."
> - @arvidkahl describing Huntley's concept

Key principles from this philosophy:

1. **Deterministically bad** - Failures are predictable, not random
2. **Each failure refines** - Bad output teaches what NOT to do
3. **Eventual consistency** - Given enough iterations, success emerges
4. **Operator skill > model capability** - Your prompts matter more than the model version

### External State Architecture

| Artifact | Purpose | Lifespan |
|----------|---------|----------|
| prd.json | Task tracking, completion status | Per-feature |
| progress.txt | Session learnings, patterns | Per-feature |
| CLAUDE.md | Permanent project knowledge | Project-wide |
| AGENTS.md | Agent-specific documentation | Project-wide |
| Git history | Code changes, implicit context | Forever |
| Archives | Previous run learnings | Cross-run |

---

## 4. Why Fresh Context Beats Extended Sessions

### The Context Rot Problem

Context rot is the phenomenon where LLM quality degrades as the context window fills up. This happens because:

1. **Attention dilutes** - More tokens = less attention per token
2. **Recency bias** - Recent context dominates over earlier context
3. **Summarization is lossy** - When the model compacts context, detail is lost
4. **Goal drift** - Original objectives become fuzzy

### Comparison: Long Sessions vs Fresh Context

| Long Sessions | Fresh Context (Ralph) |
|---------------|----------------------|
| Context fills up | Always starts at 0% |
| Quality degrades over time | Peak quality each iteration |
| Errors compound | Each iteration can self-correct |
| Hard to recover from mistakes | Easy to resume from any point |
| Lossy internal compaction | Full external history preserved |
| One chance to get it right | Unlimited iterations to succeed |

### Token Economics

Fresh context has better token economics for complex tasks:

**Extended session (10-hour task):**
- Accumulates tokens throughout
- Pays for context repeatedly as it grows
- Quality degrades, requiring more fixes
- Often requires restart anyway

**Ralph approach (same task):**
- Each iteration: fresh context + state files
- Pays only for current iteration + small state overhead
- Peak quality every iteration
- Natural checkpoints for intervention

### The Microservices Analogy

Ralph applies microservices thinking to AI agents:

- **Stateless:** Each iteration is independent
- **Externalized state:** Files and git are the database
- **Small units:** Each task is atomic
- **Failure isolation:** One bad iteration doesn't corrupt the system
- **Scalability:** Can run multiple instances in parallel

---

## 5. The PROMPT.md Structure

### Required Sections

A complete PROMPT.md for Ralph needs:

```markdown
# Ralph Agent Instructions

## Your Task

1. Read `scripts/ralph/prd.json`
2. Read `scripts/ralph/progress.txt` (check Codebase Patterns first)
3. Check you're on the correct branch
4. Pick highest priority story where `passes: false`
5. Implement that ONE story
6. Run typecheck and tests
7. Commit: `feat: [ID] - [Title]`
8. Update prd.json: `passes: true`
9. Append learnings to progress.txt

## Progress Format

APPEND to progress.txt:

---
## [Date] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered

## Codebase Patterns

Add reusable patterns to the TOP of progress.txt:

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- React: useRef<Timeout | null>(null)

## Stop Condition

If ALL stories pass, reply:
<promise>COMPLETE</promise>

Otherwise end normally.
```

### State Management via Filesystem

**prd.json** - The task board:
```json
{
  "project": "Project Name",
  "branchName": "ralph/feature-name",
  "userStories": [
    {
      "id": "US-001",
      "title": "Task title",
      "acceptanceCriteria": ["Test passes", "Typecheck passes"],
      "priority": 1,
      "passes": false
    }
  ]
}
```

**progress.txt** - The learning log:
```markdown
# Ralph Progress Log
Started: 2026-01-09

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- Zod: Always use .optional() for nullable

---

## 2026-01-09 10:00 - US-001
- Completed: Login form skeleton
- Learnings: Use orange (#FF6B35) for dark backgrounds
```

### How to Pass Context Between Iterations

Context flows through external state:

1. **Git** - Code changes persist, agent reads file system
2. **prd.json** - Agent reads to find incomplete tasks
3. **progress.txt** - Agent reads to learn from past iterations
4. **CLAUDE.md** - Agent reads for permanent project context

The agent has NO internal memory of previous iterations. All continuity comes from files.

---

## 6. Implementation Variations

### Basic Rate-Limited Version

```bash
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-10}
RATE_LIMIT_SLEEP=5

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  cat PROMPT.md | claude --dangerously-skip-permissions 2>&1 | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Done!"
    exit 0
  fi

  sleep $RATE_LIMIT_SLEEP
done

echo "Max iterations reached"
exit 1
```

### With Error Handling

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "=== Iteration $CURRENT_ITERATION / $MAX_ITERATIONS ==="

  # Run Claude and capture output
  OUTPUT=$(cat PROMPT.md | claude 2>&1) || true
  echo "$OUTPUT" | tee output.txt

  # Check for rate limiting
  if echo "$OUTPUT" | grep -q "rate_limit"; then
    echo "Rate limited, waiting 60s..."
    sleep 60
    continue  # Don't increment, retry this iteration
  fi

  # Check for completion
  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "All stories complete!"
    exit 0
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
  sleep 5
done

echo "Max iterations reached"
exit 1
```

### With Logging

```bash
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-10}
LOG_FILE="ralph-$(date +%Y%m%d-%H%M%S).log"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting Ralph with max $MAX_ITERATIONS iterations"

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  log "=== Iteration $i / $MAX_ITERATIONS ==="

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude 2>&1)
  echo "$OUTPUT" >> "$LOG_FILE"
  echo "$OUTPUT" | tee output.txt

  # Log git status
  log "Git status after iteration:"
  git log --oneline -1 >> "$LOG_FILE"

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    log "SUCCESS: All stories complete in $i iterations"
    exit 0
  fi

  sleep 5
done

log "INCOMPLETE: Max iterations reached"
exit 1
```

### With Iteration Counting

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1
TOTAL_TOKENS=0
START_TIME=$(date +%s)

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  ITER_START=$(date +%s)

  echo "════════════════════════════════════════"
  echo "  Iteration $CURRENT_ITERATION of $MAX_ITERATIONS"
  echo "  Elapsed: $(($(date +%s) - START_TIME))s"
  echo "════════════════════════════════════════"

  cat PROMPT.md | claude 2>&1 | tee output.txt

  ITER_END=$(date +%s)
  ITER_DURATION=$((ITER_END - ITER_START))

  echo ""
  echo "Iteration $CURRENT_ITERATION took ${ITER_DURATION}s"

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    TOTAL_TIME=$(($(date +%s) - START_TIME))
    echo ""
    echo "════════════════════════════════════════"
    echo "  COMPLETE"
    echo "  Total iterations: $CURRENT_ITERATION"
    echo "  Total time: ${TOTAL_TIME}s"
    echo "════════════════════════════════════════"
    exit 0
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
  sleep 5
done

echo "Max iterations reached after $(($(date +%s) - START_TIME))s"
exit 1
```

### With Stuck Detection

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
STUCK_THRESHOLD=3
LAST_COMMIT=""
STUCK_COUNT=0
CURRENT_ITERATION=1

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "=== Iteration $CURRENT_ITERATION ==="

  cat PROMPT.md | claude 2>&1 | tee output.txt

  # Check if we made progress
  CURRENT_COMMIT=$(git rev-parse HEAD 2>/dev/null)

  if [ "$CURRENT_COMMIT" = "$LAST_COMMIT" ]; then
    STUCK_COUNT=$((STUCK_COUNT + 1))
    echo "WARNING: No git progress ($STUCK_COUNT/$STUCK_THRESHOLD)"

    if [ $STUCK_COUNT -ge $STUCK_THRESHOLD ]; then
      echo "ERROR: Stuck for $STUCK_COUNT iterations. Manual intervention needed."
      echo "Last commit: $LAST_COMMIT"
      exit 1
    fi
  else
    STUCK_COUNT=0
    LAST_COMMIT=$CURRENT_COMMIT
    echo "Progress: $CURRENT_COMMIT"
  fi

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Done!"
    exit 0
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
  sleep 5
done
```

### jq-Based Completion (Maurice Kleine Style)

```bash
#!/bin/bash
# No max iterations - runs until PRD is complete

while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  echo "Incomplete tasks remaining..."
  cat PROMPT.md | claude
  sleep 5
done

echo "All tasks complete!"
```

---

## 7. When to Use Ralph

### Good Fit Scenarios

| Scenario | Why It Works |
|----------|--------------|
| Feature with clear specs | Verifiable completion criteria |
| Migrations (Jest to Vitest) | Mechanical, repetitive tasks |
| Overnight development | Can run unattended |
| Greenfield projects | No legacy constraints |
| Architecture implementation | Well-defined patterns to apply |
| Test suite generation | Clear pass/fail criteria |
| Database schema changes | Verifiable via migrations |

### Bad Fit Scenarios

| Scenario | Why It Fails |
|----------|--------------|
| "Make it pretty" | No verifiable completion |
| Security-critical code | Needs human review |
| Ambiguous requirements | Wastes tokens on exploration |
| One-shot operations | Loop overhead not justified |
| Design decisions | Ralph implements, humans decide |
| Complex debugging | Needs human intuition |
| Legacy without tests | No verification possible |

### Decision Framework

```
Does the task have a clear, verifiable end state?
  |
  YES -> Can completion be checked programmatically?
  |         |
  |         YES -> Is it worth > 1 iteration of work?
  |         |         |
  |         |         YES -> USE RALPH
  |         |         NO -> Single Claude session
  |         |
  |         NO -> Add tests/verification first, then Ralph
  |
  NO -> Define clear success criteria first
```

---

## 8. Comparison

### Ralph vs Manual Iteration

| Aspect | Manual Iteration | Ralph |
|--------|------------------|-------|
| **Attention required** | Constant | None (AFK mode) |
| **Context management** | Manual handoffs | Automatic via files |
| **Overnight work** | Not possible | Native capability |
| **Consistency** | Varies by human energy | Consistent every iteration |
| **Learning compound** | In human memory | In progress.txt |

### Ralph vs Extended Sessions

| Aspect | Extended Session | Ralph |
|--------|------------------|-------|
| **Context decay** | Gets worse over time | Fresh every iteration |
| **Recovery from errors** | Difficult | Automatic retry |
| **Checkpointing** | Manual save points | Every iteration is checkpoint |
| **Cost efficiency** | Pays for growing context | Pays only for current iteration |
| **Quality** | Degrades over time | Peak quality each iteration |

### Ralph vs Orchestration Tools (CC Mirror, Gas Town)

| Aspect | Ralph | CC Mirror / Gas Town |
|--------|-------|---------------------|
| **Complexity** | Simple bash loop | Multi-agent coordination |
| **Use case** | Single feature stream | Parallel work streams |
| **Setup time** | 15 minutes | Hours to days |
| **Learning curve** | Low | High |
| **When to use** | Most tasks | Large, parallelizable projects |

### The Progression

```
Start with Ralph (single stream, simple)
       |
       v
When you need parallel work:
       |
       v
Add git worktrees (Parallel Ralph)
       |
       v
When you need coordination:
       |
       v
Consider CC Mirror or Gas Town
```

---

## 9. Common Mistakes

| Mistake | Why It Fails | Solution |
|---------|--------------|----------|
| Tasks too large | Context overflow, broken code | 2-3 sentence rule for each task |
| No verification | Errors compound across iterations | Require typecheck + tests in criteria |
| Vague acceptance criteria | Agent interprets differently | Be explicit: "dropdown has 3 options" |
| Editing progress.txt | Learnings lost | Use "APPEND" explicitly in prompt |
| No max iterations | Runaway costs, infinite loops | Always set MAX_ITERATIONS |
| Dependencies wrong order | Agent builds on non-existent schema | Order: Schema -> Backend -> Frontend |
| Skipping tests for UI | Visual bugs despite "passes" | Add browser verification |
| Non-idempotent migrations | Database inconsistency | Use IF NOT EXISTS, explicit defaults |
| Interactive prompts | Script hangs | Pipe empty input or use --yes flags |
| No stuck detection | Silent failures | Check git diff between iterations |

### The Most Critical Mistake

> "If you don't do this [verification], you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs. Super nasty."
> - Matt Pocock

**Every acceptance criteria must include:**
```json
{
  "acceptanceCriteria": [
    "Feature implemented as specified",
    "npm run typecheck passes",
    "npm run test passes"
  ]
}
```

---

## 10. Quick Reference

### Minimal Setup (15 minutes)

```bash
mkdir -p scripts/ralph
cd scripts/ralph

# Create ralph.sh
cat > ralph.sh << 'EOF'
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="
  cat prompt.md | claude 2>&1 | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Done!"
    exit 0
  fi
  sleep 5
done
EOF
chmod +x ralph.sh

# Create prompt.md, prd.json, progress.txt...
```

### Pre-Flight Checklist

- [ ] Tasks are small enough (2-3 sentence rule)
- [ ] Dependencies ordered correctly (schema -> backend -> frontend)
- [ ] Acceptance criteria are verifiable (not "works correctly")
- [ ] Tests exist or will be created
- [ ] Git branch created for this feature
- [ ] progress.txt initialized with Codebase Patterns section
- [ ] Max iterations set
- [ ] Verification commands work (`npm test`, `npm run typecheck`)

### File Structure

```
project/
├── scripts/ralph/
│   ├── ralph.sh         # The loop script (executable)
│   ├── prompt.md        # Instructions for each iteration
│   ├── prd.json         # Task tracking
│   └── progress.txt     # Learnings/patterns
├── CLAUDE.md            # Project context (optional)
└── src/                 # Your code
```

### The Core Command

```bash
./scripts/ralph/ralph.sh 25  # Run with max 25 iterations
```

### Stop Conditions

**Prompt-based:**
```markdown
If ALL stories pass, reply:
<promise>COMPLETE</promise>
```

**Detection:**
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done!"
  exit 0
fi
```

---

## 11. Sources

### Official
- **Original Pattern:** ghuntley.com/ralph/
- **Official Plugin:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- **Plugin Commands:** `/ralph-loop`, `/cancel-ralph`

### Key Contributors
- **Geoffrey Huntley** - Creator, ghuntley.com/ralph/
- **Matt Pocock (@mattpocockuk)** - Popularizer, 11 tips guide
- **Ryan Carson (@ryancarson)** - Compounding Ralph, complete implementations
- **Arvid Kahl (@arvidkahl)** - Comprehensive documentation thread

### Community Implementations
- github.com/snarktank/ralph - Ryan Carson's implementation
- github.com/gruckion/marathon-ralph - SDLC integration
- github.com/Arakiss/lisa - Logging fork
- github.com/ghuntley/ralph-claude-code - Rate limiting
- github.com/muratcankoylan/ralph-wiggum-marketer - Content generation

### Articles and Videos
- aihero.dev/tips-for-ai-coding-with-ralph-wiggum - Matt Pocock's 11 tips
- youtube.com/watch?v=O2bBWDoxO4s - Ralph demo video
- awesomeclaude.ai/ralph-wiggum - Community guide

---

## 12. Tags

`#orchestration` `#ralph-wiggum` `#ralph-loop` `#geoffrey-huntley` `#original-pattern` `#fresh-context` `#autonomous-agent` `#prd-driven` `#feedback-loops` `#afk-coding` `#ship-while-sleep` `#iteration-over-perfection` `#external-memory` `#stateless-agent`

---

## 13. Document Metadata

| Field | Value |
|-------|-------|
| **Created** | 2026-01-18 |
| **Agent** | B3-T1-4 |
| **Mission** | Original Ralph Reference Extraction |
| **Target** | 600+ lines |
| **Actual** | 650+ lines |
| **Category** | extractions/orchestration |
| **Related** | mastery-ralph-complete.md, research-ralph-expanded.md |
| **Status** | Complete |

---

## Checkpoint: After Reading This Document

**Where you are:** You understand the ORIGINAL Ralph Wiggum pattern as created by Geoffrey Huntley.

**What this enables:**
- Implementing Ralph from first principles
- Understanding WHY the pattern works (not just HOW)
- Avoiding common mistakes
- Building on the pattern for advanced orchestration

**Verify your understanding:**
1. Can you explain why fresh context beats extended sessions?
2. Do you understand what "stateless agent, persistent state" means?
3. Can you identify when Ralph is NOT the right tool?

**You should be able to:**
- Write a basic Ralph loop from scratch
- Set up prd.json and progress.txt correctly
- Explain the "we learn from failure" philosophy

**If you're missing something:**
- Re-read Section 3 (The Core Pattern) for mechanics
- Re-read Section 4 (Fresh Context) for philosophy
- Re-read Section 9 (Common Mistakes) for pitfalls

**This connects to:**
- Ralph variants (Compounding, Marathon, Parallel) build on this foundation
- CC Mirror and Gas Town are natural progressions
- Understanding Ralph is prerequisite for all advanced orchestration

---

## The Bottom Line

Ralph Wiggum is not about making the agent smarter. It is about:

1. **Working around context limitations** through fresh starts
2. **Leveraging persistence** through external memory
3. **Building feedback loops** that catch errors
4. **Compounding progress** across iterations
5. **Accepting imperfection** while achieving eventual consistency

> "Given excellent upfront specification, we can already achieve meaningful unattended software production in 2026."

**The transformation:**

| Human Role | AI Role |
|------------|---------|
| Product Manager | Implementation Army |
| Architect | Tireless Executor |
| 25-30 min planning | 8 hours grinding |
| Morning review | Overnight shipping |

**Real results:**
- One engineer delivered a $50,000 contract for $297 in API costs
- Features ship while developers sleep
- Learning compounds across runs

The pattern is simple. The power is in the discipline.

---

*Original pattern created by Geoffrey Huntley. Popularized by Matt Pocock. Community-refined through countless iterations.*
