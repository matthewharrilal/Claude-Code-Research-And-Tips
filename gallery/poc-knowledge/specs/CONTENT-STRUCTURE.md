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
│  240px   │           (flexible, largest)           │   480px (resizable 280-900px)  │
│  fixed   │           margin-based                  │   fixed, user-resizable        │
└──────────┴─────────────────────────────────────────┴────────────────────────────────┘
```

**Rationale:**
- Activity Zone is 480px default (was 280px) to accommodate deeper content
- User-resizable 280-900px range with localStorage persistence
- Still smaller than Main Panel to maintain focus hierarchy
- Main Panel is flexible, takes remaining space via margins

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

## Activity Zone: The Mindset

**Staff engineers don't need more facts. They need cognitive tools that change how they think.**

Every piece of Operational Intelligence content should pass this test:
> "Does this change how I REASON about the topic, or just add to what I KNOW?"

### The Mental Shift

| Descriptive (OLD) | Generative (NEW) |
|-------------------|------------------|
| "Ralph shares INV-003 with Gas Town" | "What constraint forced this design? If it didn't exist, what would you build instead?" |
| "Context degrades at 80K tokens" | "How does this fail GRADUALLY before it fails completely? What's invisible?" |
| "Use small tasks" | "When does this help become a hindrance? Where's the inflection point?" |
| "Fresh context beats extended sessions" | "At what time horizon does this feel wrong but work right?" |

### Generation Questions (Use These)

For every main panel concept, ask:

1. **INVERSION**: "What if the opposite were true? Why would it fail?"
2. **CONSTRAINT CHAIN**: "What forced this decision? What would change if the constraint changed?"
3. **FAILURE GRADIENT**: "How does this degrade before it breaks? What's invisible until too late?"
4. **TIME HORIZON**: "At what scale (hour/day/week/month) does this feel different?"
5. **VIOLATION CHAIN**: "If someone skips this, what cascade happens?"
6. **ANALOGICAL BRIDGE**: "What does the reader already know that maps to this?"
7. **EXPERTISE GRADIENT**: "What question would a beginner/intermediate/staff/expert ask?"
8. **TRADE-OFF TENSION**: "What's the genuine dilemma with no perfect answer?"

### The Worldview to Embody

When generating content, think AS a staff engineer:
- **Constraint-first**: Every pattern exists because of a constraint. Name it.
- **Derivation over memorization**: Patterns aren't gospel—they're crystallized solutions. When constraints change, derive new patterns.
- **Failure mode analysis**: Every design decision addresses a specific failure mode. If you can't name it, you're probably creating one.
- **Systems over solutions**: Are you teaching a recipe or teaching how to cook?
- **Judgment over rules**: Real engineering requires trade-offs with no perfect answer.

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

## Activity Zone: Generative Content Types (NEW)

These 10 content types transform the Activity Zone from **descriptive** (what happens) to **generative** (how to think). They place readers in a staff engineer's worldview—not just facts, but judgment patterns and mental machinery.

### Type 1: INVERSION LENS

**Visual indicator:** Indigo left border (#4f46e5), rotate-ccw icon

**Core Question:** "What if the opposite? Why would it fail?"

**Purpose:** Reveals hidden constraints by showing why alternatives don't work.

**Format:**
```
INVERSION: What if [opposite were true]?
You'd design: [The alternative approach]
Why this fails: [The constraint that breaks it]
Hidden constraint revealed: [What this teaches us]
```

**Example:**
```
INVERSION: What if context DIDN'T degrade?
You'd design: One long session per feature, no external files, no restarts.
Why this fails: 80K token context rot is transformer physics, not a bug.
Hidden constraint revealed: Ralph IS the constraint made visible.
```

---

### Type 2: CONSTRAINT CHAIN

**Visual indicator:** Violet left border (#8b5cf6), link-2 icon

**Core Question:** "What forced this? What cascades from it?"

**Purpose:** Shows how one constraint produces 5+ downstream decisions.

**Format:**
```
ROOT CONSTRAINT: [The forcing function]
→ [First downstream decision]
→ [Second downstream decision]
→ [Third downstream decision]
→ [Fourth downstream decision]
→ [Fifth downstream decision]

One constraint, FIVE downstream decisions.
```

**Example:**
```
ROOT CONSTRAINT: Context finite (200K) → Quality degrades as context fills
→ Fresh context beats extended sessions
→ State must persist externally (files)
→ Each iteration must be self-contained
→ Tasks must complete in one context window
→ Verification must be automatable

One constraint, FIVE downstream decisions.
```

---

### Type 3: FAILURE GRADIENT

**Visual indicator:** Rose left border (#f43f5e), trending-down icon

**Core Question:** "How does this fail gradually?"

**Purpose:** Prevents overconfidence by showing invisible degradation before the cliff.

**Format:**
```
FAILURE GRADIENT: [What degrades]
[High%] → [Range]: [Subtle symptoms]
[Mid%] → [Range]: [Noticeable symptoms]
[Low%] → [Range]: [Serious symptoms]
[Cliff] → [Range]: [Catastrophic symptoms]

Critical: [The key insight about invisibility]
```

**Example:**
```
FAILURE GRADIENT: Context Quality
100% → 90% (40-60K): Subtle drift, you won't notice
90% → 70% (60-80K): Repetition, compression
70% → 50% (80-100K): Instructions forgotten
50% → CLIFF (100K+): Hallucinations, amnesia

Critical: The gradient is invisible until the cliff.
```

---

### Type 4: TIME HORIZON SHIFT

**Visual indicator:** Cyan left border (#06b6d4), clock icon

**Core Question:** "At what scale is this right?"

**Purpose:** Fixes short-term optimization bias by showing how judgments flip over time.

**Format:**
```
TIME HORIZON: [The thing being evaluated]
[Early point]: "[How it feels]"
[Mid point]: "[How perception shifts]"
[Late point]: "[The opposite feeling]"
[Very late]: "[The mature understanding]"

[Heuristic about when to judge]
```

**Example:**
```
TIME HORIZON: progress.txt Reading (Step 5)
ITERATION 3: "Reading progress.txt feels like overhead"
ITERATION 8: "Wait, Claude is repeating solved mistakes"
ITERATION 15: "progress.txt is why late iterations are FASTER"
ITERATION 30: "This is institutional memory"

Don't judge Ralph by iteration 2.
```

---

### Type 5: VIOLATION CHAIN

**Visual indicator:** Orange left border (#f97316), alert-octagon icon

**Core Question:** "If I skip this, what cascade happens?"

**Purpose:** Shows causal consequences that make rules feel necessary, not arbitrary.

**Format:**
```
IF: [The thing you might skip]
THEN: [First consequence]
THEN: [Second consequence]
THEN: [Third consequence]
FINALLY: [Ultimate failure]

THE FIX: [What to do instead]
```

**Example:**
```
IF: You skip "run typecheck and tests" (step 7)
THEN: Claude marks tasks done without verification
THEN: Broken code enters git
THEN: Future iterations inherit broken foundation
THEN: Errors compound faster than learnings
FINALLY: Morning reveals 20 bad commits

THE FIX: Never skip verification. One bad commit poisons all future iterations.
```

---

### Type 6: TRADE-OFF TENSION

**Visual indicator:** Amber left border (#f59e0b), scale icon

**Core Question:** "What's the genuine dilemma?"

**Purpose:** Presents both-valid tensions that require judgment, not rules.

**Format:**
```
THE DILEMMA: [The tension]
• [Option A]: [Benefit], but [cost]
• [Option B]: [Benefit], but [cost]
• [Option C]: [Benefit], but [cost]

WHY NO PERFECT ANSWER: [Why this is hard]

HEURISTIC: [Rule of thumb]
```

**Example:**
```
THE DILEMMA: Task Size
• Very small tasks: Safe, but spawn overhead dominates
• Medium tasks: Balanced, but judgment required
• Large tasks: Efficient, but context collapse risk

WHY NO PERFECT ANSWER: Optimal varies by codebase, task type, and Claude model.

HEURISTIC: If the task description is longer than the code change,
you've decomposed too far.
```

---

### Type 7: ANALOGICAL BRIDGE

**Visual indicator:** Fuchsia left border (#d946ef), git-compare icon

**Core Question:** "What do I already know that applies?"

**Purpose:** Maps to familiar concepts, making new patterns learnable faster.

**Format:**
```
[NEW CONCEPT] = [FAMILIAR CONCEPT]
[Element A] → [Familiar element A]
[Element B] → [Familiar element B]
[Element C] → [Familiar element C]
[Element D] → [Familiar element D]

If you've [done familiar thing], you already understand [new concept].
```

**Example:**
```
RALPH = Stateless Web Servers
HTTP stateless → Fresh context per iteration
Database → prd.json, progress.txt, git
Session cookie → Files read at iteration start
Horizontal scaling → Parallel Ralph loops

If you've designed stateless web services, you already understand Ralph.
```

---

### Type 8: EXPERTISE GRADIENT

**Visual indicator:** Emerald left border (#10b981), bar-chart-3 icon

**Core Question:** "How deeply do I understand?"

**Purpose:** Self-calibration through questions at each expertise level.

**Format:**
```
EXPERTISE GRADIENT: [Topic]

BEGINNER: "[Beginner question]"
→ [Beginner answer]

INTERMEDIATE: "[Intermediate question]"
→ [Intermediate answer]

ADVANCED: "[Advanced question]"
→ [Advanced answer]

STAFF: "[Staff question]"
→ [Staff answer]

EXPERT: "[Expert question]"
→ [Expert answer]
```

**Example:**
```
EXPERTISE GRADIENT: File Structure

BEGINNER: "What files do I need?"
→ The 4 files: ralph.sh, prompt.md, prd.json, progress.txt

INTERMEDIATE: "Why these specific files?"
→ Each file serves exactly ONE purpose in the task path

ADVANCED: "What's the minimal file set?"
→ Just while loop + prompt. Everything else is reliability.

STAFF: "When would I add more files?"
→ When you need: confidence scoring (Dr. Ralph), human gates (HOTL)

EXPERT: "How do these files compose with other patterns?"
→ prd.json = Gas Town inbox. progress.txt = Refinery analog.
```

---

### Type 9: MINIMAL PATTERN

**Visual indicator:** Lime left border (#84cc16), minimize-2 icon

**Core Question:** "What's the simplest version?"

**Purpose:** Reveals essence by stripping to the minimum that still works.

**Format:**
```
MINIMAL VIABLE [PATTERN]:
[The absolute minimum code/config]

[Component A] is essential.
[Component B] is essential.
Everything else is refinement for [quality attribute].
```

**Example:**
```
MINIMAL VIABLE RALPH:
while :; do cat PROMPT.md | claude; done
+ a PROMPT.md that says "Do task X, exit when done"

The loop is essential. Fresh context is essential.
Everything else is refinement for reliability.
```

---

### Type 10: INFLECTION POINT

**Visual indicator:** Yellow left border (#eab308), activity icon

**Core Question:** "When does benefit flip to cost?"

**Purpose:** Shows where compound benefits become compound liabilities.

**Format:**
```
INFLECTION POINT: [What's being measured]
[Range A]: [Net benefit description]
[Range B]: [Diminishing returns description]
[Range C]: [Neutral description]
[Range D+]: [Net negative description]

THE INFLECTION: ~[threshold]

BEFORE INFLECTION: "[Rule that applies]"
AFTER INFLECTION: "[Opposite rule that applies]"

DETECTION: [How to know you've crossed it]
```

**Example:**
```
INFLECTION POINT: progress.txt Size
0-10KB: Pure benefit (learnings compound)
10-20KB: Diminishing returns (more to read)
20-30KB: Neutral (reading cost = thinking benefit)
30KB+: Net negative (context wasted on history)

THE INFLECTION: ~20KB

BEFORE INFLECTION: "Always append. Never delete."
AFTER INFLECTION: "Archive to AGENTS.md. Start fresh."

DETECTION: Late iterations worse than early ones? Check file size.
```

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

Activity Zone - Original Content Types (Foundational):
- [ ] At least 2 Invariant Connections
- [ ] At least 2 Second-Order Effects
- [ ] At least 2 Composition Cases
- [ ] At least 1 Research Frontier item
- [ ] At least 2 Production War Stories
- [ ] Alternative Paths section

Activity Zone - Generative Content Types (Advanced):
- [ ] At least 2 Inversion Lenses (reveal hidden constraints)
- [ ] At least 2 Constraint Chains (show cascade from root constraint)
- [ ] At least 2 Failure Gradients (show invisible degradation)
- [ ] At least 2 Time Horizon Shifts (show how judgments flip)
- [ ] At least 2 Violation Chains (show consequences of skipping)
- [ ] At least 2 Trade-Off Tensions (present genuine dilemmas)
- [ ] At least 2 Analogical Bridges (map to familiar concepts)
- [ ] At least 2 Expertise Gradients (questions by level)
- [ ] At least 1 Minimal Pattern (essence stripped down)
- [ ] At least 1 Inflection Point (where benefit flips to cost)

---

## Quality Test for Generative Content

Content is "generative" (not just "descriptive") when the reader can answer YES to any of:

1. **Changed reasoning**: "Did this change how I THINK about the topic?"
2. **Constraint awareness**: "Can I name the constraint that forced this design?"
3. **Cascade tracing**: "Can I trace what happens if I violate this?"
4. **Analogy unlocked**: "Do I now see this maps to something I already know?"
5. **Self-calibration**: "Do I know which expertise level I'm at?"
6. **Inflection awareness**: "Do I know when this advice STOPS being true?"

If the reader can only answer "I now know more facts," the content is descriptive, not generative. Rewrite it.

---

## Tags

`#spec` `#content-structure` `#main-panel` `#activity-zone` `#staff-engineer` `#documentation-depth` `#generative-content` `#cognitive-tools`
