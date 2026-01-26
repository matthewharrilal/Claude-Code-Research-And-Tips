# Methodology: Content Types

> **Purpose:** Complete reference for all 24 content types (8 Main Panel + 16 Activity Zone).
> This is the WHAT—every content type fully specified with purpose, format, example, and quality criteria.

---

## Overview

The POC uses **24 distinct content types** organized into two categories:

| Category | Count | Location | Purpose |
|----------|-------|----------|---------|
| Main Panel Sections | 8 | Center column | Canonical documentation (philosophy + implementation woven) |
| Activity Zone Types | 16 | Right column | Operational intelligence (cross-pattern, scale effects, evidence) |

This document provides the complete specification for each type.

---

# Part 1: Main Panel Sections (8 Sections)

Each section weaves philosophy ("why this works") with implementation ("here's the code") with gotchas ("here's what breaks").

---

## Section 1: ESSENCE (The Rust Rule)

### Purpose
Capture the core abstraction in 15 words or less.

### Why It Works
Forces clarity. If you can't say it in 15 words, you don't understand it. This discipline comes from Rust standard library documentation, where every item opens with a single sentence that captures the complete abstraction.

### Format
```
One sentence that captures what this fundamentally IS.
```

### Example
> "Ralph loops fresh Claude instances with external state for autonomous overnight development."

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing or >20 words |
| 1 | Present but vague or generic |
| 2 | Clear, captures core concept, <20 words |
| 3 | Unforgettable, <15 words, captures the unique insight |

### Red Flags
- Starts with "This is a..." (waste of words)
- Contains "etc." or "and more" (not specific)
- Requires domain knowledge not in the document (context-dependent)
- Could describe a different pattern (not unique)

### Good vs Bad

| Bad | Good |
|-----|------|
| "Ralph is a development workflow pattern" | "Ralph loops fresh Claude instances with external state for autonomous overnight development" |
| "A way to do things automatically overnight" | "Fresh context + external state = autonomous multi-hour AI development" |

---

## Section 2: THE CORE ABSTRACTION + IMPLEMENTATION

### Purpose
Philosophy and code bound together inseparably.

### Why It Works
Staff engineers want to see the principle AND the code immediately. No separation. The binding makes the philosophy concrete and the code meaningful.

### Format
```
PHILOSOPHY: "[The principle in one sentence]"
     ↓
CODE: [The minimal code that embodies it]
     ↓
ANCHOR: "[Emphasizes what's essential vs scaffolding]"
```

### Example
```
PHILOSOPHY: "Context degrades with tokens. Files persist."
     ↓
CODE: while :; do cat PROMPT.md | claude ; done
     ↓
ANCHOR: "That's the whole pattern. Everything else is scaffolding."
```

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, or philosophy/code separated into different sections |
| 1 | Present but connection weak or unclear |
| 2 | Clear binding, principle leads to code logically |
| 3 | Unforgettable binding, anchor statement crystallizes insight |

### Red Flags
- Philosophy section without code
- Code section without philosophy
- Philosophy that doesn't explain why the code is this way
- Code that doesn't embody the stated philosophy

### Good vs Bad

| Bad | Good |
|-----|------|
| "Here's the code: [code block]" (no philosophy) | PHILOSOPHY → CODE → ANCHOR sequence |
| Philosophy in section 1, code in section 4 | Philosophy and code in same visual unit |

---

## Section 3: WHY [DESIGN DECISION]? + WHAT THIS MEANS FOR YOU

### Purpose
Each design decision explained with reasoning AND concrete implication.

### Why It Works
Staff engineers don't accept "do X" without "because Y." They need to understand reasoning to adapt when their constraints differ. The "What This Means For You" section translates theory to action.

### Format
```
WHY [DECISION]?
  The reasoning (theory)

WHAT THIS MEANS FOR YOU:
  The concrete implication (practice)

EXAMPLE:
  Concrete scenario showing the implication
```

### Example
```
WHY FRESH CONTEXT?
  At 80K tokens, Claude's quality degrades. This is "context rot."

WHAT THIS MEANS FOR YOU:
  Kill and restart. Don't try to extend sessions.

EXAMPLE:
  If iteration 20 starts producing worse code than iteration 5,
  your context is rotting. The fix is to restart, not debug.
```

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, or decision stated without reasoning |
| 1 | Reasoning present but implication vague |
| 2 | Clear reasoning + clear implication |
| 3 | Reasoning + implication + concrete example |

### Red Flags
- "Do X" without "because Y"
- Abstract reasoning without concrete implication
- Missing example that shows the implication in action

### Good vs Bad

| Bad | Good |
|-----|------|
| "Use fresh context" | WHY + WHAT THIS MEANS + EXAMPLE |
| "Fresh context is better" (assertion) | "At 80K tokens, quality degrades" (mechanism) |

---

## Section 4: THE FILE STRUCTURE (Gritty Implementation)

### Purpose
Actual files you'll create. Complete, copy-paste ready.

### Why It Works
Staff engineers want to see real code they can copy and modify, not abstract templates. This section provides the gritty "how am I going to build with this" details.

### Format
```
project/
├── path/to/file       # [explanation of purpose]
├── path/to/another    # [explanation of purpose]
└── path/to/third      # [explanation of purpose]

Then: Complete file contents for each, not templates.
```

### Example
```
project/
├── scripts/ralph/
│   ├── ralph.sh       # The loop script
│   ├── prompt.md      # Task definition Claude reads each iteration
│   ├── prd.json       # Task registry with pass/fail status
│   └── progress.txt   # Iteration learnings (append-only)

--- ralph.sh ---
#!/bin/bash
while :; do
  cat prompt.md | claude --model claude-sonnet-4-20250514
  sleep 1
done

--- prompt.md ---
# Current Task
Read prd.json and find the first task where passes: false.
Implement it, run tests, mark passes: true if tests pass.
Append what you learned to progress.txt.
...
```

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing or only abstract description |
| 1 | File structure shown but contents are templates with [PLACEHOLDER] |
| 2 | Complete file contents, copy-paste ready |
| 3 | Complete + annotated (comments explain why, not just what) |

### Red Flags
- `[YOUR CODE HERE]` placeholders
- "Implement your logic" comments
- Missing files that are mentioned elsewhere
- File contents that won't actually run

### Good vs Bad

| Bad | Good |
|-----|------|
| "Create a shell script that loops" | Actual shell script with real code |
| `# TODO: Add your task definition` | Complete task definition content |

---

## Section 5: THE PATH OF A TASK (PostgreSQL Style)

### Purpose
Follow a task through the system step by step.

### Why It Works
Shows the system in motion, not just static components. This narrative approach (inspired by PostgreSQL's "path of a query" documentation) helps readers understand how parts relate by watching them work together.

### Format
```
1. [First step in the flow]
2. [Second step]
3. [Third step]
...
N. [Final step / completion condition]
```

### Example
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

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing or only component list (no flow) |
| 1 | Flow present but steps are vague |
| 2 | Clear numbered steps showing system in motion |
| 3 | Steps include decision points, branches, and completion conditions |

### Red Flags
- List of components without flow
- Missing decision points (what happens if X?)
- Missing completion condition
- Steps that could be in any order (not a flow)

### Good vs Bad

| Bad | Good |
|-----|------|
| "Ralph has a loop, prompt, tasks, and log" | Step 1 → Step 2 → ... → Step N |
| Steps without decision branches | "If tests pass: X. If tests fail: Y." |

---

## Section 6: GOTCHAS (Practical Problems)

### Purpose
Real problems you'll hit, with concrete numbers and fixes.

### Why It Works
Prevents morning-after surprises. Staff engineers want to know failure modes before they hit them, not after. Concrete numbers (thresholds, timings) make gotchas actionable.

### Format
```
GOTCHA: [Problem name]
  Symptom: What you'll observe
  Why: The underlying cause
  Numbers: Concrete thresholds/data
  Fix: What to do about it
```

### Example
```
GOTCHA: progress.txt grows unbounded
  Symptom: After 50 iterations, Claude spends more time reading than thinking
  Why: Append-only log has no compaction
  Numbers: >20KB progress.txt starts degrading quality
  Fix: Truncate to last 10 entries between runs, or start fresh progress.txt
```

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing gotchas section |
| 1 | Gotchas listed but vague (no numbers, no fixes) |
| 2 | Clear symptoms, causes, and fixes |
| 3 | Concrete numbers + detection signals + verified fixes |

### Red Flags
- "Be careful with X" (vague warning without actionable fix)
- Missing numbers/thresholds
- Fix that doesn't actually solve the problem
- Gotcha that's actually documented behavior (not a gotcha)

### Good vs Bad

| Bad | Good |
|-----|------|
| "progress.txt can get big" | "After 50 iterations... >20KB... truncate to last 10 entries" |
| "Watch out for context" | Concrete symptoms + threshold + fix |

---

## Section 7: WHAT'S HARD (Honest About Complexity)

### Purpose
Acknowledge real failure modes with symptoms.

### Why It Works
Honesty about difficulty builds trust and helps readers calibrate expectations. Pretending everything is easy leads to frustration when they hit real complexity.

### Format
```
WHAT'S HARD: [Challenge name]
  Why it's hard: The fundamental tension
  Symptoms: How you'll know you're hitting it
  Mitigation: What reduces (doesn't eliminate) the problem
```

### Example
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

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing or claims everything is easy |
| 1 | Acknowledges difficulty but doesn't explain why |
| 2 | Clear tension + symptoms |
| 3 | Tension + symptoms + mitigation that doesn't pretend to solve |

### Red Flags
- "This is hard" without explaining the tension
- Mitigation that claims to "solve" a fundamental tension
- Missing symptoms (how do you know you're hitting it?)
- Downplaying real complexity

### Good vs Bad

| Bad | Good |
|-----|------|
| "Context management is complex" | "Why it's hard: Fresh context avoids rot but loses learnings. No perfect solution exists." |
| "Just do X to solve it" | "Mitigation: What reduces (doesn't eliminate) the problem" |

---

## Section 8: WHEN TO USE / WHEN NOT

### Purpose
Clear decision criteria with alternatives.

### Why It Works
Staff engineers need to know when this pattern is the right choice and when something else is better. This section provides decision support, not just description.

### Format
```
USE [PATTERN] WHEN:
✓ [Criterion] → [Why this criterion matters]
✓ [Criterion] → [Why this criterion matters]
✓ [Criterion] → [Why this criterion matters]

DON'T USE [PATTERN] WHEN:
✗ [Anti-pattern] → [What to use instead]
✗ [Anti-pattern] → [What to use instead]
✗ [Anti-pattern] → [What to use instead]
```

### Example
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

### Quality Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing or only describes what pattern does |
| 1 | Lists criteria but no reasoning |
| 2 | Clear criteria with reasoning |
| 3 | Criteria + reasoning + specific alternatives |

### Red Flags
- Only positive criteria (when to use) without negative (when not)
- "Don't use when it's not appropriate" (tautology)
- Missing alternatives (what SHOULD they use?)
- Criteria that are always true (not discriminating)

### Good vs Bad

| Bad | Good |
|-----|------|
| "Use Ralph for autonomous work" | "USE RALPH WHEN: Tasks have verifiable acceptance criteria → Can detect completion" |
| "Don't use for other things" | "✗ Need real-time parallelism → Use CC Mirror" |

---

# Part 2: Activity Zone Content Types (16 Types)

The Activity Zone provides **operational intelligence**: cross-pattern reasoning, system-level effects, and real-world evidence.

---

## Foundational Types (6)

These are the original Activity Zone content types—factual, experience-based, connection-oriented.

---

### Type 1: Invariant Connection

**Purpose:** Show cross-pattern DNA and underlying principles.

**Visual Indicator:** Blue left border (#3b82f6), link icon

**What It Answers:** "Why are these patterns related at the deepest level?"

### Format
```
INVARIANT CONNECTION
[Pattern A], [Pattern B], [Pattern C] all share [INV-XXX]: [Invariant name]

WHY THIS MATTERS:
The same principle forces the same architectural choice across patterns.
If you understand this invariant, you understand all three.
```

### Example
```
INVARIANT CONNECTION
Ralph, Gas Town, CC Mirror all share INV-003: External state > internal memory

WHY THIS MATTERS:
The same principle forces the same architectural choice across patterns.
If you understand this invariant, you understand all three.
```

### Quality Criteria
- Must name specific patterns (not "many patterns")
- Must reference a specific invariant
- Must explain why the connection matters

---

### Type 2: Second-Order Effect

**Purpose:** System properties that emerge at scale.

**Visual Indicator:** Amber left border (#f59e0b), chart icon

**What It Answers:** "What happens at scale that I won't see in my first run?"

### Format
```
SECOND-ORDER EFFECT
At [scale/threshold], [phenomenon occurs]

IMPLICATION:
[What this means for practitioners]

THRESHOLD: [Concrete numbers]
```

### Example
```
SECOND-ORDER EFFECT
At iteration 50+, reading state costs more than thinking

IMPLICATION:
progress.txt compounds. What started as useful memory becomes
drag. The pattern that helps at iteration 5 hurts at iteration 50.

THRESHOLD: ~20KB progress.txt, ~50 iterations
```

### Quality Criteria
- Must specify a threshold/scale
- Must describe emergence (not obvious from small scale)
- Must include concrete numbers

---

### Type 3: Composition Case

**Purpose:** What combines well and what doesn't.

**Visual Indicator:** Purple left border (#8b5cf6), layers icon

**What It Answers:** "What should I combine this with, and what's the catch?"

### Format
```
COMPOSITION: [Pattern A] + [Component B]
WORKS? [Yes/No/With caveats]

WHY IT WORKS/DOESN'T:
[Explanation]

THE DANGER/BENEFIT:
[What to watch for]

RECOMMENDATION:
[Actionable guidance]
```

### Example
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

### Quality Criteria
- Must specify both components being combined
- Must give clear verdict (works/doesn't/caveats)
- Must explain danger or benefit
- Must provide actionable recommendation

---

### Type 4: Research Frontier

**Purpose:** What nobody has figured out yet.

**Visual Indicator:** Red left border (#ef4444), flask icon

**What It Answers:** "What are the open problems I should watch for?"

### Format
```
UNSOLVED: [Problem name]

THE QUESTION:
[The specific question that's unanswered]

WHY IT'S HARD:
[What makes this difficult]

CURRENT BEST PRACTICE:
[What people do today without a real solution]
```

### Example
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

### Quality Criteria
- Must be genuinely unsolved (not just undocumented)
- Must explain why it's hard
- Must provide current best practice

---

### Type 5: Production War Story

**Purpose:** Real experiences from practitioners with concrete outcomes.

**Visual Indicator:** Green left border (#22c55e), user icon

**What It Answers:** "What actually happened when someone used this?"

### Format
```
WAR STORY: [Person's name/handle]'s [brief description]

CONTEXT:
[What they were doing]

OUTCOME:
[Concrete results with numbers]

KEY LEARNING:
[The insight from the experience]
```

### Example
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

### Quality Criteria
- Must be attributed (real person/handle)
- Must include concrete numbers
- Must have a specific learning (not generic)

---

### Type 6: Alternative Path

**Purpose:** Navigate to other options when this isn't right.

**Visual Indicator:** Gray left border (#6b7280), arrow-right icon

**What It Answers:** "If this isn't for me, where should I go?"

### Format
```
IF [PATTERN] ISN'T RIGHT:

[Condition]?
→ [Alternative] ([why])

[Condition]?
→ [Alternative] ([why])

[Condition]?
→ [Alternative] ([why])
```

### Example
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

### Quality Criteria
- Must provide at least 3 alternatives
- Each alternative must have a condition (when to use it)
- Must link to actual patterns/pages (not vague suggestions)

---

## Generative Types (10)

These content types transform the Activity Zone from **descriptive** (what happens) to **generative** (how to think). They place readers in a staff engineer's worldview—not just facts, but judgment patterns and mental machinery.

---

### Type 7: Inversion Lens

**Core Question:** "What if the opposite were true? Why would it fail?"

**Purpose:** Reveals hidden constraints by showing why alternatives don't work.

**Visual Indicator:** Indigo left border (#4f46e5), rotate-ccw icon

### Format
```
INVERSION: What if [opposite were true]?
You'd design: [The alternative approach]
Why this fails: [The constraint that breaks it]
Hidden constraint revealed: [What this teaches us]
```

### Example
```
INVERSION: What if context DIDN'T degrade?
You'd design: One long session per feature, no external files, no restarts.
Why this fails: 80K token context rot is transformer physics, not a bug.
Hidden constraint revealed: Ralph IS the constraint made visible.
```

### Quality Criteria
- Must propose a genuine alternative (not straw man)
- Must identify specific failure mode
- Must reveal non-obvious constraint

---

### Type 8: Constraint Chain

**Core Question:** "What forced this? What cascades from it?"

**Purpose:** Shows how one constraint produces 5+ downstream decisions.

**Visual Indicator:** Violet left border (#8b5cf6), link-2 icon

### Format
```
ROOT CONSTRAINT: [The forcing function]
→ [First downstream decision]
→ [Second downstream decision]
→ [Third downstream decision]
→ [Fourth downstream decision]
→ [Fifth downstream decision]

One constraint, FIVE downstream decisions.
```

### Example
```
ROOT CONSTRAINT: Context finite (200K) → Quality degrades as context fills
→ Fresh context beats extended sessions
→ State must persist externally (files)
→ Each iteration must be self-contained
→ Tasks must complete in one context window
→ Verification must be automatable

One constraint, FIVE downstream decisions.
```

### Quality Criteria
- Must start with root constraint (not symptom)
- Must show at least 5 cascading decisions
- Must trace logical chain (not random list)

---

### Type 9: Failure Gradient

**Core Question:** "How does this fail gradually?"

**Purpose:** Prevents overconfidence by showing invisible degradation before the cliff.

**Visual Indicator:** Rose left border (#f43f5e), trending-down icon

### Format
```
FAILURE GRADIENT: [What degrades]
[High%] → [Range]: [Subtle symptoms]
[Mid%] → [Range]: [Noticeable symptoms]
[Low%] → [Range]: [Serious symptoms]
[Cliff] → [Range]: [Catastrophic symptoms]

Critical: [The key insight about invisibility]
```

### Example
```
FAILURE GRADIENT: Context Quality
100% → 90% (40-60K): Subtle drift, you won't notice
90% → 70% (60-80K): Repetition, compression
70% → 50% (80-100K): Instructions forgotten
50% → CLIFF (100K+): Hallucinations, amnesia

Critical: The gradient is invisible until the cliff.
```

### Quality Criteria
- Must show gradual degradation (not binary fail)
- Must include concrete thresholds/ranges
- Must identify the "invisible" phase

---

### Type 10: Time Horizon Shift

**Core Question:** "At what scale is this right?"

**Purpose:** Fixes short-term optimization bias by showing how judgments flip over time.

**Visual Indicator:** Cyan left border (#06b6d4), clock icon

### Format
```
TIME HORIZON: [The thing being evaluated]
[Early point]: "[How it feels]"
[Mid point]: "[How perception shifts]"
[Late point]: "[The opposite feeling]"
[Very late]: "[The mature understanding]"

[Heuristic about when to judge]
```

### Example
```
TIME HORIZON: progress.txt Reading (Step 5)
ITERATION 3: "Reading progress.txt feels like overhead"
ITERATION 8: "Wait, Claude is repeating solved mistakes"
ITERATION 15: "progress.txt is why late iterations are FASTER"
ITERATION 30: "This is institutional memory"

Don't judge Ralph by iteration 2.
```

### Quality Criteria
- Must show perception change over time
- Must include concrete time points
- Must end with heuristic about when to judge

---

### Type 11: Violation Chain

**Core Question:** "If I skip this, what cascade happens?"

**Purpose:** Shows causal consequences that make rules feel necessary, not arbitrary.

**Visual Indicator:** Orange left border (#f97316), alert-octagon icon

### Format
```
IF: [The thing you might skip]
THEN: [First consequence]
THEN: [Second consequence]
THEN: [Third consequence]
FINALLY: [Ultimate failure]

THE FIX: [What to do instead]
```

### Example
```
IF: You skip "run typecheck and tests" (step 7)
THEN: Claude marks tasks done without verification
THEN: Broken code enters git
THEN: Future iterations inherit broken foundation
THEN: Errors compound faster than learnings
FINALLY: Morning reveals 20 bad commits

THE FIX: Never skip verification. One bad commit poisons all future iterations.
```

### Quality Criteria
- Must start with tempting shortcut
- Must show causal chain (not random bad outcomes)
- Must end with actionable fix

---

### Type 12: Trade-Off Tension

**Core Question:** "What's the genuine dilemma?"

**Purpose:** Presents both-valid tensions that require judgment, not rules.

**Visual Indicator:** Amber left border (#f59e0b), scale icon

### Format
```
THE DILEMMA: [The tension]
• [Option A]: [Benefit], but [cost]
• [Option B]: [Benefit], but [cost]
• [Option C]: [Benefit], but [cost]

WHY NO PERFECT ANSWER: [Why this is hard]

HEURISTIC: [Rule of thumb]
```

### Example
```
THE DILEMMA: Task Size
• Very small tasks: Safe, but spawn overhead dominates
• Medium tasks: Balanced, but judgment required
• Large tasks: Efficient, but context collapse risk

WHY NO PERFECT ANSWER: Optimal varies by codebase, task type, and Claude model.

HEURISTIC: If the task description is longer than the code change,
you've decomposed too far.
```

### Quality Criteria
- Must present genuine tension (not obvious winner)
- Must show each option's benefit AND cost
- Must provide heuristic (not "it depends")

---

### Type 13: Analogical Bridge

**Core Question:** "What do I already know that applies?"

**Purpose:** Maps to familiar concepts, making new patterns learnable faster.

**Visual Indicator:** Fuchsia left border (#d946ef), git-compare icon

### Format
```
[NEW CONCEPT] = [FAMILIAR CONCEPT]
[Element A] → [Familiar element A]
[Element B] → [Familiar element B]
[Element C] → [Familiar element C]
[Element D] → [Familiar element D]

If you've [done familiar thing], you already understand [new concept].
```

### Example
```
RALPH = Stateless Web Servers
HTTP stateless → Fresh context per iteration
Database → prd.json, progress.txt, git
Session cookie → Files read at iteration start
Horizontal scaling → Parallel Ralph loops

If you've designed stateless web services, you already understand Ralph.
```

### Quality Criteria
- Must choose familiar domain (known to target audience)
- Must map 3+ elements specifically
- Must end with "If you've... you already understand..."

---

### Type 14: Expertise Gradient

**Core Question:** "How deeply do I understand?"

**Purpose:** Self-calibration through questions at each expertise level.

**Visual Indicator:** Emerald left border (#10b981), bar-chart-3 icon

### Format
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

### Example
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

### Quality Criteria
- Must have all 5 levels (beginner through expert)
- Questions must genuinely increase in depth
- Answers must be specific (not "it's complicated")

---

### Type 15: Minimal Pattern

**Core Question:** "What's the simplest version?"

**Purpose:** Reveals essence by stripping to the minimum that still works.

**Visual Indicator:** Lime left border (#84cc16), minimize-2 icon

### Format
```
MINIMAL VIABLE [PATTERN]:
[The absolute minimum code/config]

[Component A] is essential.
[Component B] is essential.
Everything else is refinement for [quality attribute].
```

### Example
```
MINIMAL VIABLE RALPH:
while :; do cat PROMPT.md | claude; done
+ a PROMPT.md that says "Do task X, exit when done"

The loop is essential. Fresh context is essential.
Everything else is refinement for reliability.
```

### Quality Criteria
- Must be genuinely minimal (can't remove anything)
- Must identify what's essential vs refinement
- Must work if copied (not pseudocode)

---

### Type 16: Inflection Point

**Core Question:** "When does benefit flip to cost?"

**Purpose:** Shows where compound benefits become compound liabilities.

**Visual Indicator:** Yellow left border (#eab308), activity icon

### Format
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

### Example
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

### Quality Criteria
- Must identify specific threshold
- Must show rules flip before/after
- Must provide detection signal

---

# Part 3: Content Density Guidelines

## Main Panel

- **Dense but scannable** - Every sentence earns its place
- **Code blocks are complete** - Not snippets, not pseudocode
- **Every concept connects to concrete implementation** - No pure theory
- **No more than 3 paragraphs without a code block or diagram** - Visual breaks

## Activity Zone

- **Shorter items** - 3-5 sentences typical (exceptions: Expertise Gradient, Violation Chain)
- **Always has a concrete takeaway** - Not just observations
- **Links to Main Panel sections when relevant** - Cross-reference with `data-relates-to`
- **Scroll-synced** - Items highlight based on visible main content

---

# Part 4: Implementation Checklist

## Main Panel Minimum Requirements

- [ ] **Essence** (15 words max)
- [ ] **Core Abstraction + Implementation** (bound together)
- [ ] **Why [Decision]? + What This Means** (for each major design choice)
- [ ] **File Structure** (complete, copy-paste ready)
- [ ] **Path of a Task** (numbered flow)
- [ ] **Gotchas** (with concrete numbers)
- [ ] **What's Hard** (honest about complexity)
- [ ] **When to Use / When Not** (with alternatives)

## Activity Zone Minimum Requirements

### Foundational Types
- [ ] At least 2 Invariant Connections
- [ ] At least 2 Second-Order Effects
- [ ] At least 2 Composition Cases
- [ ] At least 1 Research Frontier item
- [ ] At least 2 Production War Stories
- [ ] Alternative Paths section

### Generative Types
- [ ] At least 2 Inversion Lenses
- [ ] At least 2 Constraint Chains
- [ ] At least 2 Failure Gradients
- [ ] At least 2 Time Horizon Shifts
- [ ] At least 2 Violation Chains
- [ ] At least 2 Trade-Off Tensions
- [ ] At least 2 Analogical Bridges
- [ ] At least 2 Expertise Gradients
- [ ] At least 1 Minimal Pattern
- [ ] At least 1 Inflection Point

---

# Part 5: Visual Reference

## Color Quick Reference

| Type | Color Name | Hex | Use For |
|------|------------|-----|---------|
| Invariant Connection | Blue | #3b82f6 | Cross-pattern DNA |
| Second-Order Effect | Amber | #f59e0b | Scale effects |
| Composition Case | Purple | #8b5cf6 | Component combinations |
| Research Frontier | Red | #ef4444 | Unsolved problems |
| War Story | Green | #22c55e | Real experiences |
| Alternative Path | Gray | #6b7280 | Navigation |
| Inversion Lens | Indigo | #4f46e5 | Opposite scenarios |
| Constraint Chain | Violet | #8b5cf6 | Cascade from constraint |
| Failure Gradient | Rose | #f43f5e | Gradual degradation |
| Time Horizon Shift | Cyan | #06b6d4 | Perception over time |
| Violation Chain | Orange | #f97316 | Skip consequences |
| Trade-Off Tension | Amber | #f59e0b | Genuine dilemmas |
| Analogical Bridge | Fuchsia | #d946ef | Familiar mappings |
| Expertise Gradient | Emerald | #10b981 | Level-based questions |
| Minimal Pattern | Lime | #84cc16 | Stripped-down essence |
| Inflection Point | Yellow | #eab308 | Benefit/cost flip |

## Icon Quick Reference

| Type | Lucide Icon |
|------|-------------|
| Invariant Connection | link |
| Second-Order Effect | bar-chart-2 |
| Composition Case | layers |
| Research Frontier | flask-conical |
| War Story | user |
| Alternative Path | arrow-right |
| Inversion Lens | rotate-ccw |
| Constraint Chain | link-2 |
| Failure Gradient | trending-down |
| Time Horizon Shift | clock |
| Violation Chain | alert-octagon |
| Trade-Off Tension | scale |
| Analogical Bridge | git-compare |
| Expertise Gradient | bar-chart-3 |
| Minimal Pattern | minimize-2 |
| Inflection Point | activity |

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - Why this content structure
- `METHODOLOGY-THREE-PANELS.md` - Where content types live
- `METHODOLOGY-GENERATION-QUESTIONS.md` - How to generate generative types
- `TEMPLATES-ACTIVITY-ZONE.md` - Copy-paste templates for all 16 types
- `METHODOLOGY-QUALITY-RUBRICS.md` - Scoring criteria for each type

---

## Source Traceability

| Section | Source Document | Line References |
|---------|-----------------|-----------------|
| 8 Main Panel Sections | CONTENT-STRUCTURE.md | Lines 54-240 |
| 6 Foundational Types | CONTENT-STRUCTURE.md | Lines 288-433 |
| 10 Generative Types | CONTENT-STRUCTURE.md | Lines 437-783 |
| Content Density | CONTENT-STRUCTURE.md | Lines 787-799 |
| Implementation Checklist | CONTENT-STRUCTURE.md | Lines 816-846 |

---

## Tags

`#methodology` `#content-types` `#main-panel` `#activity-zone` `#reference`
