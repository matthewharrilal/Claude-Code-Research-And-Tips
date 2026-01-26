# Methodology: Quality Rubrics

> **Purpose:** Measurable quality criteria for validating content before publishing.
> This is the VALIDATION layer—specific 0-3 scoring criteria, good vs bad examples, and red flags.

---

## Overview

Quality validation happens at three levels:

1. **Section-Level Rubrics** - Each of the 8 Main Panel sections has specific criteria
2. **Type-Level Rubrics** - Each of the 16 Activity Zone types has specific criteria
3. **Generativity Test** - Overall test that content changes thinking, not just adds facts

---

# Part 1: Main Panel Section Rubrics

Each section is scored 0-3:

| Score | Meaning |
|-------|---------|
| 0 | Missing or fundamentally broken |
| 1 | Present but weak (vague, incomplete, generic) |
| 2 | Solid (clear, complete, useful) |
| 3 | Excellent (memorable, actionable, staff-engineer quality) |

**Minimum standard for publishing: All sections score 2+**

---

## Section 1: ESSENCE

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, OR >25 words, OR doesn't capture the pattern |
| 1 | Present, <25 words, but vague or generic (could describe multiple patterns) |
| 2 | Clear, <20 words, captures core concept, unique to this pattern |
| 3 | Unforgettable, <15 words, captures the unique insight, quotable |

### Good Example (Score 3)
> "Ralph loops fresh Claude instances with external state for autonomous overnight development."

**Why it scores 3:**
- 12 words (under 15)
- Contains unique insight (fresh + external state + overnight)
- Couldn't describe any other pattern
- Quotable / memorable

### Bad Example (Score 1)
> "Ralph is a development workflow pattern that helps automate coding tasks using AI."

**Why it scores 1:**
- 14 words but wastes words ("is a", "that helps")
- Generic (could describe any AI coding workflow)
- No unique insight
- Not memorable

### Red Flags
- [ ] Starts with "This is a..." (wastes words)
- [ ] Contains "etc." or "and more" (vague)
- [ ] Could describe a different pattern (not unique)
- [ ] Requires external context to understand
- [ ] >20 words

---

## Section 2: CORE ABSTRACTION + IMPLEMENTATION

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, OR philosophy and code in separate sections |
| 1 | Present but binding weak (code doesn't embody philosophy, or no anchor) |
| 2 | Clear PHILOSOPHY → CODE → ANCHOR sequence, binding is logical |
| 3 | Unforgettable binding, anchor crystallizes insight, code is minimal essence |

### Good Example (Score 3)
```
PHILOSOPHY: "Context degrades with tokens. Files persist."
     ↓
CODE: while :; do cat PROMPT.md | claude ; done
     ↓
ANCHOR: "That's the whole pattern. Everything else is scaffolding."
```

**Why it scores 3:**
- Philosophy is one sentence
- Code is the minimal embodiment
- Anchor crystallizes insight (everything else is scaffolding)
- Unforgettable binding

### Bad Example (Score 1)
```
Ralph uses a loop to repeatedly call Claude. Here's the basic structure:

[100 lines of code with all options]

This provides an automated workflow.
```

**Why it scores 1:**
- No explicit PHILOSOPHY statement
- Code is not minimal (includes all options)
- No ANCHOR that crystallizes
- Weak binding

### Red Flags
- [ ] Philosophy section without code in same visual unit
- [ ] Code block without preceding philosophy
- [ ] Anchor that just summarizes (doesn't crystallize insight)
- [ ] Code that includes all options instead of minimal essence

---

## Section 3: WHY [DECISION]? + WHAT THIS MEANS FOR YOU

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, OR decision stated without reasoning |
| 1 | Reasoning present but implication vague or missing example |
| 2 | Clear WHY + WHAT THIS MEANS + example |
| 3 | Deep reasoning (constraint → decision → implication chain), memorable example |

### Good Example (Score 3)
```
WHY FRESH CONTEXT?
  At 80K tokens, Claude's quality degrades. This is "context rot."

WHAT THIS MEANS FOR YOU:
  Kill and restart. Don't try to extend sessions.

EXAMPLE:
  If iteration 20 starts producing worse code than iteration 5,
  your context is rotting. The fix is to restart, not debug.
```

**Why it scores 3:**
- Names the constraint (80K tokens)
- Names the phenomenon (context rot)
- Clear actionable implication
- Memorable example with detection signal

### Bad Example (Score 1)
```
WHY FRESH CONTEXT?
  Fresh context is better for quality.

WHAT THIS MEANS FOR YOU:
  Use fresh context when you can.
```

**Why it scores 1:**
- No constraint named (circular reasoning)
- Implication is vague ("when you can")
- No example

### Red Flags
- [ ] "Because it's better" (circular reasoning)
- [ ] Missing concrete constraint
- [ ] Missing actionable implication
- [ ] Missing example

---

## Section 4: FILE STRUCTURE

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, OR only abstract description |
| 1 | File structure shown but contents are templates/placeholders |
| 2 | Complete file contents, copy-paste ready, would run |
| 3 | Complete + annotated (comments explain WHY, not just WHAT) |

### Good Example (Score 3)
```
project/
├── scripts/ralph/
│   ├── ralph.sh       # The loop - fresh context per iteration
│   ├── prompt.md      # Task definition Claude reads each time
│   ├── prd.json       # Task registry with pass/fail tracking
│   └── progress.txt   # Iteration learnings (append-only)

--- ralph.sh ---
#!/bin/bash
# Fresh context every iteration prevents context rot
while :; do
  cat prompt.md | claude --model claude-sonnet-4-20250514
  sleep 1  # Brief pause prevents rate limiting
done
```

**Why it scores 3:**
- Complete tree with explanations
- Full file contents (not templates)
- Comments explain WHY (prevents context rot, prevents rate limiting)

### Bad Example (Score 1)
```
You'll need:
- A shell script for the loop
- A prompt file
- A task tracking file
- A log file
```

**Why it scores 1:**
- No actual file structure
- No contents
- Couldn't copy and use

### Red Flags
- [ ] `[YOUR CODE HERE]` placeholders
- [ ] `# TODO: implement` comments
- [ ] Files mentioned in Path of a Task but not shown
- [ ] Code that wouldn't run if copied

---

## Section 5: PATH OF A TASK

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing, OR only component list (no flow) |
| 1 | Flow present but steps vague, missing decision points |
| 2 | Clear numbered steps, includes decision branches |
| 3 | Complete flow with decisions, completion conditions, and what happens at each step |

### Good Example (Score 3)
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

**Why it scores 3:**
- Clear numbered sequence
- Decision branches (if pass/if fail)
- Completion conditions (all tasks pass OR max iterations)
- Specific file names and commands

### Bad Example (Score 1)
```
Ralph works by running Claude in a loop. Claude reads the prompt,
does the task, and then the loop continues until everything is done.
```

**Why it scores 1:**
- No numbered steps
- No decision branches
- Vague completion condition
- No specifics

### Red Flags
- [ ] Paragraph form instead of numbered steps
- [ ] Missing decision points (what if X?)
- [ ] Missing completion condition
- [ ] Steps could be in any order

---

## Section 6: GOTCHAS

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing OR "be careful" without specifics |
| 1 | Gotchas listed but vague (no numbers, no concrete fixes) |
| 2 | Clear Symptom + Why + Fix structure |
| 3 | Symptom + Why + Numbers + Fix + Detection signal |

### Good Example (Score 3)
```
GOTCHA: progress.txt grows unbounded
  Symptom: After 50 iterations, Claude spends more time reading than thinking
  Why: Append-only log has no compaction
  Numbers: >20KB progress.txt starts degrading quality
  Fix: Truncate to last 10 entries between runs
  Detection: Late iterations worse than early ones? Check file size.
```

**Why it scores 3:**
- Specific symptom
- Root cause
- Concrete threshold (20KB)
- Actionable fix
- Detection signal

### Bad Example (Score 1)
```
GOTCHA: Log files can get big
  Be careful with how much you log.
```

**Why it scores 1:**
- Vague symptom
- No cause
- No threshold
- No actionable fix

### Red Flags
- [ ] "Be careful with X" without fix
- [ ] Missing concrete thresholds
- [ ] Fix that doesn't solve the problem
- [ ] Gotcha that's documented behavior

---

## Section 7: WHAT'S HARD

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing OR claims everything is easy |
| 1 | Acknowledges difficulty but no explanation of tension |
| 2 | Clear tension + symptoms |
| 3 | Tension + symptoms + mitigation (that doesn't pretend to solve) |

### Good Example (Score 3)
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

**Why it scores 3:**
- Names the tension explicitly
- Acknowledges no perfect solution
- Provides symptoms for both sides
- Mitigation is honest (doesn't claim to solve)

### Bad Example (Score 1)
```
WHAT'S HARD: Context management
  Context management can be tricky. Use best practices.
```

**Why it scores 1:**
- No tension explained
- No symptoms
- "Best practices" is not a mitigation

### Red Flags
- [ ] "This is hard" without explaining why
- [ ] Mitigation claims to "solve" fundamental tension
- [ ] Missing symptoms
- [ ] Downplaying real complexity

---

## Section 8: WHEN TO USE / WHEN NOT

### Scoring Criteria

| Score | Criteria |
|-------|----------|
| 0 | Missing OR only describes what pattern does |
| 1 | Lists criteria but no reasoning or alternatives |
| 2 | Clear USE WHEN + DON'T USE WHEN with reasoning |
| 3 | Criteria + reasoning + specific alternatives for each anti-pattern |

### Good Example (Score 3)
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

**Why it scores 3:**
- Clear criteria with reasoning
- Clear anti-patterns with alternatives
- Alternatives are specific patterns, not vague

### Bad Example (Score 1)
```
USE RALPH WHEN:
✓ You want autonomous development

DON'T USE RALPH WHEN:
✗ It's not appropriate
```

**Why it scores 1:**
- Criterion is vague
- Anti-pattern is tautology
- No alternatives

### Red Flags
- [ ] Only positive (USE WHEN) without negative
- [ ] Tautological anti-patterns
- [ ] Missing alternatives
- [ ] Criteria that are always true

---

# Part 2: Activity Zone Type Rubrics

Each Activity Zone item is scored 0-3:

| Score | Meaning |
|-------|---------|
| 0 | Missing required elements, or wrong format |
| 1 | Format correct but content weak (vague, generic) |
| 2 | Solid content, follows format, actionable |
| 3 | Excellent (memorable, changes thinking, generative) |

**Minimum for publishing: Score 2+**

---

## Foundational Types Quick Rubrics

### Invariant Connection
- **0:** Wrong format, no invariant named
- **1:** Format correct, but connection vague
- **2:** Specific invariant, specific patterns, clear "why this matters"
- **3:** Reveals non-obvious connection, changes understanding

### Second-Order Effect
- **0:** No threshold, no emergence
- **1:** Threshold vague ("at scale...")
- **2:** Specific threshold, clear implication
- **3:** Concrete numbers, explains why invisible at small scale

### Composition Case
- **0:** Missing verdict or recommendation
- **1:** Verdict without danger/benefit
- **2:** Complete Verdict + Why + Danger + Recommendation
- **3:** Nuanced caveats, actionable recommendation

### Research Frontier
- **0:** Problem already solved, or no best practice
- **1:** Problem stated but no "why it's hard"
- **2:** Complete Question + Why Hard + Best Practice
- **3:** Illuminates fundamental tension, useful best practice

### War Story
- **0:** Anonymous or no concrete numbers
- **1:** Attributed but generic learning
- **2:** Attributed + numbers + specific learning
- **3:** Transferable insight, memorable details

### Alternative Path
- **0:** <3 alternatives, or alternatives vague
- **1:** 3+ alternatives but conditions unclear
- **2:** Clear conditions → specific alternatives
- **3:** Complete decision tree, helps reader navigate

---

## Generative Types Quick Rubrics

### Inversion Lens
- **0:** Straw man opposite
- **1:** Genuine opposite but failure vague
- **2:** Genuine opposite + specific failure + constraint revealed
- **3:** Non-obvious constraint, changes mental model

### Constraint Chain
- **0:** <5 decisions, starts at symptom
- **1:** 5 decisions but not causal chain
- **2:** Root constraint + 5 logical cascading decisions
- **3:** Reveals derivability, reader can derive new patterns

### Failure Gradient
- **0:** Binary fail (works/doesn't)
- **1:** Gradient but no thresholds
- **2:** 4 stages with thresholds + invisibility insight
- **3:** Detection signals, explains why invisible

### Time Horizon Shift
- **0:** No time points
- **1:** Time points but no perception change
- **2:** Clear perception flip over time + heuristic
- **3:** Memorable heuristic, prevents premature judgment

### Violation Chain
- **0:** <3 steps, no causation
- **1:** Causal chain but fix vague
- **2:** Complete IF → THEN chain + actionable fix
- **3:** Memorable cascade, makes rule feel necessary

### Trade-Off Tension
- **0:** Obvious winner (not a real tension)
- **1:** Tension but missing benefit or cost
- **2:** Complete 3-option tension + heuristic
- **3:** Acknowledges no perfect answer, useful heuristic

### Analogical Bridge
- **0:** <3 mappings, or unfamiliar domain
- **1:** Familiar domain but mappings weak
- **2:** 4+ specific mappings + "If you've...you understand"
- **3:** Accelerates learning, memorable mapping

### Expertise Gradient
- **0:** <5 levels, or levels don't increase depth
- **1:** 5 levels but answers generic
- **2:** Clear progression, specific answers
- **3:** Enables self-calibration, questions are memorable

### Minimal Pattern
- **0:** Not actually minimal (could remove something)
- **1:** Minimal but doesn't identify essential vs refinement
- **2:** Genuinely minimal + essential vs refinement distinction
- **3:** Crystallizes essence, code would work

### Inflection Point
- **0:** No threshold, no detection
- **1:** Threshold but no before/after rules
- **2:** Complete threshold + rules + detection
- **3:** Memorable inflection, prevents over-application

---

# Part 3: Generativity Verification Process

After all content is written, apply this final verification.

## The 6-Question Test

For each Activity Zone item, ask:

| # | Question | Pass If... |
|---|----------|------------|
| 1 | "Did this change how I THINK about the topic?" | Reader thinks differently, not just knows more |
| 2 | "Can I name the constraint that forced this design?" | Constraint is explicit in content |
| 3 | "Can I trace what happens if I violate this?" | Consequences are explicit |
| 4 | "Do I now see this maps to something I already know?" | Analogy exists or is created |
| 5 | "Do I know which expertise level I'm at?" | Self-calibration enabled |
| 6 | "Do I know when this advice STOPS being true?" | Limits/inflection points explicit |

## Scoring

| YES Count | Verdict | Action |
|-----------|---------|--------|
| 4+ | Generative | Publish |
| 2-3 | Descriptive | Rewrite using relevant Generation Question |
| <2 | Fact | Remove or completely reframe |

## Rewriting Descriptive Content

If content scores 2-3 YES:

1. **Identify which questions returned NO**
2. **Map to Generation Question:**
   - Q1 (thinking change) → INVERSION or CONSTRAINT CHAIN
   - Q2 (constraint) → CONSTRAINT CHAIN
   - Q3 (violation) → VIOLATION CHAIN
   - Q4 (analogy) → ANALOGICAL BRIDGE
   - Q5 (calibration) → EXPERTISE GRADIENT
   - Q6 (limits) → INFLECTION POINT or TIME HORIZON
3. **Apply the Generation Question**
4. **Rewrite**
5. **Re-test**

---

# Part 4: Good vs Bad Examples Reference

## Main Panel Examples

### Essence: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| "A pattern for automated AI development" | "Fresh context + external state = autonomous overnight AI development" |
| "Ralph helps you build features" | "Ralph loops fresh Claude instances with external state for autonomous overnight development" |

### Core Abstraction: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| "Here's the code: [long block]" | PHILOSOPHY → CODE → ANCHOR sequence |
| Philosophy in intro, code in section 4 | Philosophy and code in same visual unit |

### Gotchas: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| "Watch out for large files" | "After 50 iterations... >20KB... truncate to last 10" |
| "Be careful with context" | Symptom + Why + Numbers + Fix + Detection |

---

## Activity Zone Examples

### Inversion Lens: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| "What if we didn't use AI?" (straw man) | "What if context didn't degrade?" (genuine, reveals physics) |
| "It would fail because it's worse" | "80K token rot is transformer physics, not a bug" |

### Constraint Chain: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| Starts with "fresh context" (symptom) | Starts with "context finite → quality degrades" (root) |
| 3 random decisions | 5+ decisions in logical cascade |

### Failure Gradient: Good vs Bad

| Bad (Score 1) | Good (Score 3) |
|---------------|----------------|
| "Quality: Good → Bad" (binary) | "100%→90%→70%→50%→CLIFF" (gradient) |
| "At some point it fails" | "40-60K subtle, 60-80K noticeable, 80-100K serious, 100K+ cliff" |

---

# Part 5: Red Flags Quick Reference

## Universal Red Flags

- [ ] Vague language ("some", "various", "can be")
- [ ] Missing concrete numbers
- [ ] Circular reasoning ("X because X is good")
- [ ] "It depends" without heuristic
- [ ] Generic examples that could apply anywhere
- [ ] Placeholders or TODOs

## Main Panel Red Flags

- [ ] Essence >20 words
- [ ] Philosophy and code in different sections
- [ ] Path of a Task as paragraph (not numbered)
- [ ] Gotchas without fixes
- [ ] "What's Hard" that claims to solve it
- [ ] "When Not to Use" without alternatives

## Activity Zone Red Flags

- [ ] Invariant Connection without specific invariant code
- [ ] Second-Order Effect without threshold
- [ ] War Story without attribution
- [ ] Inversion with straw man opposite
- [ ] Constraint Chain starting at symptom
- [ ] Failure Gradient as binary (works/doesn't)
- [ ] Trade-Off with obvious winner
- [ ] Expertise Gradient with <5 levels

---

# Part 6: Final Review Checklist

Before publishing any pattern page:

## Structure Check
- [ ] All 8 Main Panel sections present
- [ ] Activity Zone has minimum counts (see METHODOLOGY-CONTENT-TYPES.md)
- [ ] Cross-references work (Activity Zone → Main Panel)

## Quality Check
- [ ] All Main Panel sections score 2+
- [ ] All Activity Zone items score 2+
- [ ] At least 3 Activity Zone items score 3

## Generativity Check
- [ ] Applied 6-question test to Activity Zone items
- [ ] All items score 4+ YES (generative)
- [ ] Descriptive items rewritten or removed

## Red Flag Check
- [ ] No universal red flags
- [ ] No Main Panel red flags
- [ ] No Activity Zone red flags

## Final Read
- [ ] Read entire page as if first time
- [ ] Does it feel like "staff engineer level"?
- [ ] Would you use this to implement the pattern?

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - The quality standards these rubrics enforce
- `METHODOLOGY-CONTENT-TYPES.md` - What each type should contain
- `METHODOLOGY-GENERATION-QUESTIONS.md` - How to improve low-scoring content
- `METHODOLOGY-TRANSFORMATION.md` - Where validation fits in the process

---

## Source Traceability

| Section | Source Document | Line References |
|---------|-----------------|-----------------|
| Quality Signals | CONTENT-STRUCTURE.md | Lines 803-812 |
| Generativity Test | CONTENT-STRUCTURE.md | Lines 850-861 |
| Section Format Requirements | CONTENT-STRUCTURE.md | Lines 54-240 (all section specs) |

---

## Tags

`#methodology` `#quality-rubrics` `#validation` `#scoring` `#red-flags`
