# Content Structure Specification

> **Purpose:** Defines the content structure for Main Panel and Activity Zone.
> Based on research into best-in-class technical documentation.

---

## Core Philosophy

**The problem:** Documentation that's too shallow for staff engineers.

**The solution:** Documentation that weaves together:
- **Philosophy** (why this works)
- **Implementation** (here's the code)
- **Gotchas** (here's what breaks)
- **Path** (how it flows in practice)
- **Honesty** (what's hard)

**Key insight:** Philosophy and gritty implementation are WOVEN TOGETHER, not separated into "theory" and "practice" sections.

---

## Research Backing

| Source | Key Technique | Applied How |
|--------|---------------|-------------|
| **Rust Docs** | 15-word opening sentence | Essence section |
| **PostgreSQL** | "Path of a query" narrative | Path of a Task section |
| **Kleppmann (DDIA)** | Theory ↔ Practice binding | Philosophy + Implementation woven |
| **AOSA** | Components → Interactions → Lessons | Activity Zone content types |
| **Stripe** | Transparent constraints upfront | When to Use / When Not |
| **Kafka** | Explicit "This is hard" sections | What's Hard section |

---

## Panel Sizing

```
┌──────────┬─────────────────────────────────────────┬────────────────────────────────┐
│ LEFT NAV │           MAIN PANEL                    │      ACTIVITY ZONE             │
│  240px   │           (flexible, largest)           │        (~400-450px)            │
│          │                                         │   (larger than nav)            │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

**Rationale:**
- Activity Zone is larger than old 280px to accommodate deeper content
- Still smaller than Main Panel to maintain focus hierarchy
- Main Panel is flexible, takes remaining space

---

## Main Panel: Section Structure

Each section weaves philosophy ("why this works") with implementation ("here's the code") with gotchas ("here's what breaks").

### 1. ESSENCE (The Rust Rule)

**Purpose:** Capture the core abstraction in 15 words or less.

**Format:**
```
One sentence that captures what this fundamentally IS.
```

**Example:**
> "Ralph loops fresh Claude instances with external state for autonomous overnight development."

**Why it works:** Forces clarity. If you can't say it in 15 words, you don't understand it.

---

### 2. THE CORE ABSTRACTION + IMPLEMENTATION

**Purpose:** Philosophy and code bound together inseparably.

**Format:**
```
PHILOSOPHY: "Context degrades with tokens. Files persist."
     ↓
CODE: while :; do cat PROMPT.md | claude ; done
     ↓
ANCHOR: "That's the whole pattern. Everything else is scaffolding."
```

**Why it works:** Staff engineers want to see the principle AND the code immediately. No separation.

---

### 3. WHY [DESIGN DECISION]? + WHAT THIS MEANS FOR YOU

**Purpose:** Each design decision explained with reasoning AND concrete implication.

**Format:**
```
WHY [DECISION]?
  The reasoning (theory)

WHAT THIS MEANS FOR YOU:
  The concrete implication (practice)

EXAMPLE:
  Concrete scenario
```

**Example:**
```
WHY FRESH CONTEXT?
  At 80K tokens, Claude's quality degrades. This is "context rot."

WHAT THIS MEANS FOR YOU:
  Kill and restart. Don't try to extend sessions.

EXAMPLE:
  If iteration 20 starts producing worse code than iteration 5,
  your context is rotting. The fix is to restart, not debug.
```

---

### 4. THE FILE STRUCTURE (Gritty Implementation)

**Purpose:** Actual files you'll create. Complete, copy-paste ready.

**Format:**
```
project/
├── scripts/ralph/
│   ├── ralph.sh       # [explanation]
│   ├── prompt.md      # [explanation]
│   ├── prd.json       # [explanation]
│   └── progress.txt   # [explanation]
```

Followed by COMPLETE file contents for each, not templates.

**Why it works:** Staff engineers want to see real code they can copy and modify, not abstract templates.

---

### 5. THE PATH OF A TASK (PostgreSQL Style)

**Purpose:** Follow a task through the system step by step.

**Format:** Numbered flow showing the system in motion:
```
1. You write PROMPT.md with task definition
2. Loop starts: bash executes ralph.sh
3. Claude reads PROMPT.md (fresh context)
4. Claude reads prd.json to find first `passes: false` task
5. Claude implements the task
6. Claude runs tests (`npm test`, `npm run typecheck`)
7. If tests pass: Claude marks task `passes: true`, commits
8. If tests fail: Claude tries to fix, or moves to next iteration
9. Claude appends learnings to progress.txt
10. Loop restarts with fresh Claude instance
11. Repeat until all tasks pass OR max iterations reached
12. Final Claude outputs `<promise>COMPLETE</promise>`
```

**Why it works:** Shows the system in motion, not just static components.

---

### 6. GOTCHAS (Practical Problems)

**Purpose:** Real problems you'll hit, with concrete numbers and fixes.

**Format:**
```
GOTCHA: [Problem name]
  Symptom: What you'll observe
  Why: The underlying cause
  Numbers: Concrete thresholds/data
  Fix: What to do about it
```

**Example:**
```
GOTCHA: progress.txt grows unbounded
  Symptom: After 50 iterations, Claude spends more time reading than thinking
  Why: Append-only log has no compaction
  Numbers: >20KB progress.txt starts degrading quality
  Fix: Truncate to last 10 entries between runs, or start fresh progress.txt
```

---

### 7. WHAT'S HARD (Honest About Complexity)

**Purpose:** Acknowledge real failure modes with symptoms.

**Format:**
```
WHAT'S HARD: [Challenge name]
  Why it's hard: The fundamental tension
  Symptoms: How you'll know you're hitting it
  Mitigation: What reduces (doesn't eliminate) the problem
```

**Example:**
```
WHAT'S HARD: Context Rot vs. Memory Loss
  Why it's hard: Fresh context avoids rot but loses learnings.
                 progress.txt helps but grows unbounded.
                 No perfect solution exists.
  Symptoms: Quality drops in late iterations, OR early iterations
            repeat mistakes from archived runs
  Mitigation: Keep progress.txt under 20KB. Start fresh runs from
              AGENTS.md (permanent) not progress.txt (session).
```

---

### 8. WHEN TO USE / WHEN NOT

**Purpose:** Clear decision criteria with alternatives.

**Format:**
```
USE RALPH WHEN:
✓ [Criterion] → [Why this criterion matters]

DON'T USE RALPH WHEN:
✗ [Anti-pattern] → [What to use instead]
```

**Example:**
```
USE RALPH WHEN:
✓ Tasks have verifiable acceptance criteria → Can detect completion
✓ Overnight execution is acceptable → Fresh context needs restarts
✓ Feature can be split into <30min subtasks → Fits context window

DON'T USE RALPH WHEN:
✗ Need real-time parallelism → Use CC Mirror
✗ Subjective quality goals → Requires human judgment
✗ Security-critical code → Use HOTL Ralph with human review gates
```

---

## Activity Zone: Content Types

The Activity Zone provides **operational intelligence**: cross-pattern reasoning, system-level effects, and real-world evidence.

### 1. Invariant Connections (Theory ↔ Practice)

**Purpose:** Show cross-pattern DNA and underlying principles.

**Visual indicator:** Blue left border, link icon

**Format:**
```
INVARIANT CONNECTION
Ralph, Gas Town, CC Mirror all share INV-003: External state > internal memory

WHY THIS MATTERS:
The same principle forces the same architectural choice across patterns.
If you understand this invariant, you understand all three.
```

**What it answers:** "Why are these patterns related at the deepest level?"

---

### 2. Second-Order Effects (Trade-off Analysis)

**Purpose:** System properties that emerge at scale.

**Visual indicator:** Amber left border, chart icon

**Format:**
```
SECOND-ORDER EFFECT
At iteration 50+, reading state costs more than thinking

IMPLICATION:
progress.txt compounds. What started as useful memory becomes
drag. The pattern that helps at iteration 5 hurts at iteration 50.

THRESHOLD: ~20KB progress.txt, ~50 iterations
```

**What it answers:** "What happens at scale that I won't see in my first run?"

---

### 3. Composition Cases (Component Interactions)

**Purpose:** What combines well and what doesn't.

**Visual indicator:** Purple left border, layers icon

**Format:**
```
COMPOSITION: Ralph + Playwright
WORKS? Yes, but with caveats

WHY IT WORKS:
Visual verification catches UI bugs Ralph would miss.

THE DANGER:
Browser context consumes tokens. Put Playwright in subagents
to protect main context window.

RECOMMENDATION:
Use Playwright for UI stories only, not for every task.
```

**What it answers:** "What should I combine this with, and what's the catch?"

---

### 4. Research Frontier (Transparency About Complexity)

**Purpose:** What nobody has figured out yet.

**Visual indicator:** Red left border, flask icon

**Format:**
```
UNSOLVED: Optimal compaction window

THE QUESTION:
When should progress.txt be compacted? After N iterations?
After K bytes? After time T?

WHY IT'S HARD:
Too early = lose useful learnings
Too late = context bloat
Optimal varies by project and task type

CURRENT BEST PRACTICE:
Manual compaction when quality degrades. No automation yet.
```

**What it answers:** "What are the open problems I should watch for?"

---

### 5. Production War Stories (Lessons Learned)

**Purpose:** Real experiences from practitioners with concrete outcomes.

**Visual indicator:** Green left border, user icon

**Format:**
```
WAR STORY: Ryan Carson's 14-iteration feature

CONTEXT:
Untangle Legal Agent, Income Upsert Tool
6 user stories, ran overnight

OUTCOME:
14 iterations, ~$10-15, 2 hours autonomous
All stories completed by morning

KEY LEARNING:
"Learnings compound. By story 10, Ralph knew our patterns."
The progress.txt paid off in later iterations.
```

**What it answers:** "What actually happened when someone used this?"

---

### 6. Alternative Paths (Multiple Entry Points)

**Purpose:** Navigate to other options when this isn't right.

**Visual indicator:** Gray left border, arrow-right icon

**Format:**
```
IF RALPH ISN'T RIGHT:

Need parallelism?
→ CC Mirror (multi-agent coordination)

Need human review gates?
→ HOTL Ralph (human-on-the-loop variant)

Need content generation, not code?
→ Ralph Wiggum Marketer (self-critique loop)

Need debugging, not building?
→ Single Claude session with human guidance
```

**What it answers:** "If this isn't for me, where should I go?"

---

## Content Density Guidelines

**Main Panel:**
- Dense but scannable
- Code blocks are complete, not snippets
- Every concept connects to concrete implementation
- No more than 3 paragraphs without a code block or diagram

**Activity Zone:**
- Shorter items (3-5 sentences typical)
- Always has a concrete takeaway
- Links to Main Panel sections when relevant
- Scroll-synced to show relevant context

---

## Quality Signals

Content is "staff engineer level" when it:

1. **Assumes competence** - No basic explanations
2. **Shows WHY** - Reasoning, not just commands
3. **Gives constraints/tradeoffs** - What breaks, costs, limits
4. **Respects time** - Dense, scannable, no fluff
5. **Holistic view** - Everything visible, not buried
6. **Honest about limits** - What doesn't work, what's unsolved

---

## Implementation Checklist

Main Panel sections:
- [ ] Essence (15 words max)
- [ ] Core Abstraction + Implementation (bound together)
- [ ] Why [Decision]? + What This Means (for each major design choice)
- [ ] File Structure (complete, copy-paste ready)
- [ ] Path of a Task (numbered flow)
- [ ] Gotchas (with concrete numbers)
- [ ] What's Hard (honest about complexity)
- [ ] When to Use / When Not (with alternatives)

Activity Zone content types:
- [ ] At least 2 Invariant Connections
- [ ] At least 2 Second-Order Effects
- [ ] At least 2 Composition Cases
- [ ] At least 1 Research Frontier item
- [ ] At least 2 Production War Stories
- [ ] Alternative Paths section

---

## Tags

`#spec` `#content-structure` `#main-panel` `#activity-zone` `#staff-engineer` `#documentation-depth`
