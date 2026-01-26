# Methodology: Transformation

> **Purpose:** Step-by-step process for converting markdown content into the POC format.
> This is the HOW—the end-to-end workflow from source material to published page.

---

## Process Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRANSFORMATION WORKFLOW                          │
├─────────────────────────────────────────────────────────────────────┤
│  Phase 1: SOURCE ASSESSMENT        (~10 min)                       │
│  └─ Evaluate what exists, decide what to extract vs synthesize     │
│                          ↓                                          │
│  Phase 2: MAIN PANEL CONSTRUCTION  (~1-2 hours)                    │
│  └─ Build 8 sections, philosophy + implementation woven            │
│                          ↓                                          │
│  Phase 3: ACTIVITY ZONE GENERATION (~1-2 hours)                    │
│  └─ Apply 8 generation questions, produce 28+ items                │
│                          ↓                                          │
│  Phase 4: QUALITY VALIDATION       (~30 min)                       │
│  └─ Score rubrics, generativity test, red flag check               │
│                          ↓                                          │
│  Phase 5: CROSS-PATTERN INTEGRATION (~30 min)                      │
│  └─ Link to related patterns, update cross-references              │
└─────────────────────────────────────────────────────────────────────┘
```

---

# Phase 1: Source Assessment

**Goal:** Understand what source material exists and plan the transformation.

## Step 1.1: Inventory Source Material

Create a checklist of what exists in the source:

| Section | Exists? | Source Location | Notes |
|---------|---------|-----------------|-------|
| Core abstraction | ☐ | | |
| Design decisions (why) | ☐ | | |
| File structure | ☐ | | |
| Step-by-step flow | ☐ | | |
| Known gotchas | ☐ | | |
| Complexity acknowledgment | ☐ | | |
| When to use / alternatives | ☐ | | |
| Production examples | ☐ | | |

## Step 1.2: Decide Extract vs Synthesize

For each section, determine:

| Decision | When to Use |
|----------|-------------|
| **EXTRACT** | Source has this content, copy and reformat |
| **SYNTHESIZE** | Source implies this, must be derived |
| **RESEARCH** | Source doesn't have this, need external info |
| **SKIP** | Not applicable to this pattern |

## Step 1.3: Minimum Viable Source Check

**Required to proceed:**
- [ ] Core abstraction is stated or strongly implied
- [ ] At least one design decision with reasoning exists
- [ ] Some implementation detail exists (code, structure, or flow)

**If missing:** Flag for additional research before transformation.

## Step 1.4: Document Decisions

```markdown
# Source Assessment: [PATTERN NAME]

## Source Files
- [file1.md] - [what it contains]
- [file2.md] - [what it contains]

## Section Plan
| Section | Strategy | Source | Notes |
|---------|----------|--------|-------|
| Essence | SYNTHESIZE | - | Derive from core abstraction |
| Core Abstraction | EXTRACT | file1.md:15-30 | Has philosophy + code |
| Why [Fresh Context]? | EXTRACT | file1.md:45-60 | Clear reasoning |
| File Structure | SYNTHESIZE | file2.md | Implied, need to make explicit |
| Path of a Task | EXTRACT | file1.md:80-120 | Step-by-step exists |
| Gotchas | EXTRACT + SYNTHESIZE | Multiple | Some stated, some implied |
| What's Hard | SYNTHESIZE | file1.md | Implied tensions |
| When to Use | EXTRACT | file2.md:200-220 | Clear criteria |
```

---

# Phase 2: Main Panel Construction

**Goal:** Build all 8 Main Panel sections with philosophy + implementation woven.

## General Principles

1. **Don't separate theory from practice** - Every section should weave them
2. **Complete code blocks** - Never templates or placeholders
3. **Concrete numbers** - Thresholds, timings, sizes
4. **Quality gate after each section** - Score 2+ before moving on

---

## Section 2.1: ESSENCE

### Process

1. Read all source material on this pattern
2. Identify the core insight that makes this pattern unique
3. Write one sentence (<15 words)
4. Test: Could this describe a different pattern? (If yes, rewrite)

### Quality Gate

| Criterion | Check |
|-----------|-------|
| <15 words | ☐ |
| Captures unique insight | ☐ |
| Couldn't describe another pattern | ☐ |
| Memorable / quotable | ☐ |

### Example Transformation

**Before (from source):**
> "Ralph is a development workflow pattern that uses a while loop to repeatedly invoke Claude with fresh context, reading state from external files."

**After (ESSENCE):**
> "Ralph loops fresh Claude instances with external state for autonomous overnight development."

---

## Section 2.2: CORE ABSTRACTION + IMPLEMENTATION

### Process

1. Identify the foundational principle (one sentence)
2. Find or write the minimal code that embodies it
3. Write an anchor statement that crystallizes the relationship
4. Ensure PHILOSOPHY → CODE → ANCHOR are in same visual unit

### Quality Gate

| Criterion | Check |
|-----------|-------|
| Philosophy is one sentence | ☐ |
| Code is minimal (not all options) | ☐ |
| Anchor crystallizes insight | ☐ |
| All three in same visual unit | ☐ |

### Example Transformation

**Before (scattered in source):**
> "The key insight is that context degrades..." (paragraph 1)
> "Here's the basic loop structure:" (paragraph 5)
> [100 lines of code with options]
> "This forms the foundation..." (paragraph 8)

**After (CORE ABSTRACTION + IMPLEMENTATION):**
```
PHILOSOPHY: "Context degrades with tokens. Files persist."
     ↓
CODE: while :; do cat PROMPT.md | claude ; done
     ↓
ANCHOR: "That's the whole pattern. Everything else is scaffolding."
```

---

## Section 2.3: WHY [DECISION]? + WHAT THIS MEANS FOR YOU

### Process

1. List all major design decisions in the pattern
2. For each, find or derive the reasoning (WHY)
3. Translate to concrete implication (WHAT THIS MEANS)
4. Add example that shows implication in action

### Quality Gate (per decision)

| Criterion | Check |
|-----------|-------|
| Constraint named | ☐ |
| Reasoning isn't circular | ☐ |
| Implication is actionable | ☐ |
| Example is concrete | ☐ |

### Example Transformation

**Before (from source):**
> "Use fresh context for each iteration. This avoids context degradation."

**After (WHY [DECISION]?):**
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

## Section 2.4: FILE STRUCTURE

### Process

1. List all files the pattern uses
2. For each, write purpose as a comment
3. Write complete file contents (not templates)
4. Annotate with WHY comments, not just WHAT

### Quality Gate

| Criterion | Check |
|-----------|-------|
| All files listed | ☐ |
| Each has purpose comment | ☐ |
| Complete contents (no placeholders) | ☐ |
| Code would run if copied | ☐ |

---

## Section 2.5: PATH OF A TASK

### Process

1. Identify the entry point (where does a task start?)
2. Trace through the system step by step
3. Number each step
4. Add decision branches (if X, then Y)
5. End with completion condition

### Quality Gate

| Criterion | Check |
|-----------|-------|
| Numbered steps | ☐ |
| Decision branches included | ☐ |
| Completion condition stated | ☐ |
| Shows system in motion | ☐ |

---

## Section 2.6: GOTCHAS

### Process

1. Collect all known problems from source
2. For each, structure as: Symptom → Why → Numbers → Fix
3. Add detection signal where possible
4. Synthesize any implied gotchas

### Quality Gate (per gotcha)

| Criterion | Check |
|-----------|-------|
| Specific symptom | ☐ |
| Root cause explained | ☐ |
| Concrete numbers | ☐ |
| Actionable fix | ☐ |

---

## Section 2.7: WHAT'S HARD

### Process

1. Identify fundamental tensions (not just gotchas)
2. Explain WHY it's hard (the tension)
3. Describe symptoms of hitting this
4. Provide mitigation (that doesn't claim to solve)

### Quality Gate

| Criterion | Check |
|-----------|-------|
| Tension explained | ☐ |
| Acknowledges "no perfect solution" | ☐ |
| Symptoms on both sides | ☐ |
| Honest mitigation | ☐ |

---

## Section 2.8: WHEN TO USE / WHEN NOT

### Process

1. List criteria for when to use (with reasoning)
2. List anti-patterns for when not to use
3. For each anti-pattern, name specific alternative

### Quality Gate

| Criterion | Check |
|-----------|-------|
| Both positive and negative criteria | ☐ |
| Reasoning for each criterion | ☐ |
| Specific alternatives named | ☐ |
| No tautologies | ☐ |

---

# Phase 3: Activity Zone Generation

**Goal:** Apply 8 generation questions to produce 28+ Activity Zone items.

## Step 3.1: Systematic Question Application

Work through each Main Panel section, applying relevant questions:

| Main Panel Section | Questions to Apply |
|--------------------|--------------------|
| Core Abstraction | INVERSION, ANALOGICAL BRIDGE |
| Why [Decision]? | CONSTRAINT CHAIN, TRADE-OFF TENSION |
| File Structure | EXPERTISE GRADIENT, MINIMAL PATTERN |
| Path of a Task | VIOLATION CHAIN, TIME HORIZON |
| Gotchas | FAILURE GRADIENT |
| What's Hard | TRADE-OFF TENSION |
| When to Use | INVERSION (for alternatives) |

## Step 3.2: Generation Workflow

For each question:

1. **Read the question** (from METHODOLOGY-GENERATION-QUESTIONS.md)
2. **Apply to specific content** in Main Panel
3. **Fill the template** (from TEMPLATES-ACTIVITY-ZONE.md)
4. **Score** (minimum 2 from rubric)
5. **Record** which Main Panel section it relates to (for scroll-sync)

## Step 3.3: Foundational Types

Generate these first (factual, connection-oriented):

| Type | Minimum | Generation Approach |
|------|---------|---------------------|
| Invariant Connection | 2 | Cross-reference invariants database |
| Second-Order Effect | 2 | Ask: "What happens at scale?" |
| Composition Case | 2 | Ask: "What combines well/poorly?" |
| Research Frontier | 1 | Ask: "What's still unsolved?" |
| War Story | 2 | Find production examples |
| Alternative Path | 1 section | From "When Not to Use" |

## Step 3.4: Generative Types

Generate these second (change-thinking):

| Type | Minimum | Generation Question |
|------|---------|---------------------|
| Inversion Lens | 2 | INVERSION |
| Constraint Chain | 2 | CONSTRAINT CHAIN |
| Failure Gradient | 2 | FAILURE GRADIENT |
| Time Horizon Shift | 2 | TIME HORIZON |
| Violation Chain | 2 | VIOLATION CHAIN |
| Trade-Off Tension | 2 | TRADE-OFF TENSION |
| Analogical Bridge | 2 | ANALOGICAL BRIDGE |
| Expertise Gradient | 2 | EXPERTISE GRADIENT |
| Minimal Pattern | 1 | Extract from Core Abstraction |
| Inflection Point | 1 | Derive from Gotchas |

## Step 3.5: Tracking Sheet

```markdown
# Activity Zone Generation: [PATTERN]

## Foundational Types
| Type | Count | Relates To | Score |
|------|-------|------------|-------|
| Invariant Connection | 0/2 | | |
| Second-Order Effect | 0/2 | | |
| Composition Case | 0/2 | | |
| Research Frontier | 0/1 | | |
| War Story | 0/2 | | |
| Alternative Path | 0/1 | | |

## Generative Types
| Type | Count | Relates To | Score |
|------|-------|------------|-------|
| Inversion Lens | 0/2 | | |
| Constraint Chain | 0/2 | | |
| Failure Gradient | 0/2 | | |
| Time Horizon Shift | 0/2 | | |
| Violation Chain | 0/2 | | |
| Trade-Off Tension | 0/2 | | |
| Analogical Bridge | 0/2 | | |
| Expertise Gradient | 0/2 | | |
| Minimal Pattern | 0/1 | | |
| Inflection Point | 0/1 | | |

Total: 0/28 minimum
```

---

# Phase 4: Quality Validation

**Goal:** Ensure all content meets quality standards before publishing.

## Step 4.1: Main Panel Rubric Check

For each of 8 sections:

1. Read the rubric criteria (from METHODOLOGY-QUALITY-RUBRICS.md)
2. Score 0-3
3. If <2, revise and re-score
4. Document score

**Minimum: All sections score 2+**

## Step 4.2: Activity Zone Rubric Check

For each of 28+ items:

1. Read the type-specific rubric
2. Score 0-3
3. If <2, revise using relevant Generation Question
4. Document score

**Minimum: All items score 2+**

## Step 4.3: Generativity Test

For each Activity Zone item, apply 6-question test:

1. Did this change how I THINK? (not just know)
2. Can I name the constraint?
3. Can I trace violation consequences?
4. Does this map to something familiar?
5. Do I know my expertise level?
6. Do I know when this stops being true?

**Scoring:**
- 4+ YES → Generative (keep)
- 2-3 YES → Descriptive (rewrite)
- <2 YES → Fact (remove or reframe)

## Step 4.4: Red Flag Check

Review against red flags:

**Universal:**
- [ ] No vague language ("some", "various")
- [ ] No missing numbers
- [ ] No circular reasoning
- [ ] No "it depends" without heuristic

**Main Panel:**
- [ ] Essence <20 words
- [ ] Philosophy + code bound
- [ ] Numbered steps in Path
- [ ] Gotchas have fixes
- [ ] Alternatives in When Not

**Activity Zone:**
- [ ] All items have required elements per type
- [ ] Invariants reference specific INV codes
- [ ] War Stories attributed
- [ ] Constraint Chains start at root

## Step 4.5: Validation Summary

```markdown
# Quality Validation: [PATTERN]

## Main Panel Scores
| Section | Score | Notes |
|---------|-------|-------|
| Essence | /3 | |
| Core Abstraction | /3 | |
| Why [Decision]? | /3 | |
| File Structure | /3 | |
| Path of a Task | /3 | |
| Gotchas | /3 | |
| What's Hard | /3 | |
| When to Use | /3 | |

## Activity Zone Summary
- Total items: X
- Items scoring 2+: X
- Items scoring 3: X
- Generativity test: X/X passed

## Red Flags Found
- [ ] None / [ ] List them

## Ready to Publish: ☐ YES / ☐ NO (needs revisions)
```

---

# Phase 5: Cross-Pattern Integration

**Goal:** Connect the pattern to the broader ecosystem.

## Step 5.1: Update Cross-References

1. Review Invariant Connections - do they reference correct INV codes?
2. Review Alternative Paths - do links work?
3. Add links to related patterns in Left Nav

## Step 5.2: Verify Related Pattern References

For each pattern mentioned:
- [ ] Link exists and works
- [ ] Description is accurate
- [ ] Relationship is reciprocal (other pattern links back)

## Step 5.3: Add to Index

Update master index/navigation to include new pattern.

## Step 5.4: Final Read

Read the entire page as if encountering for first time:

- [ ] Does it feel like "staff engineer level"?
- [ ] Would I use this to implement the pattern?
- [ ] Are there any gaps or confusion?
- [ ] Is the flow logical?

---

# Worked Example: Ralph Pattern

## Phase 1: Source Assessment

**Sources:**
- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md`
- `synthesis/mastery-ralph-complete.md`
- Twitter thread from Ryan Carson

**Section Plan:**

| Section | Strategy | Source |
|---------|----------|--------|
| Essence | SYNTHESIZE | Derive from multiple |
| Core Abstraction | EXTRACT | mastery-ralph:20-45 |
| Why Fresh Context | EXTRACT | 005-ralph:80-100 |
| File Structure | EXTRACT | mastery-ralph:150-200 |
| Path of a Task | EXTRACT | mastery-ralph:250-300 |
| Gotchas | EXTRACT + SYNTHESIZE | Multiple |
| What's Hard | SYNTHESIZE | Implied in gotchas |
| When to Use | EXTRACT | 005-ralph:300-350 |

---

## Phase 2: Main Panel (Excerpt)

### ESSENCE (Final)

> "Ralph loops fresh Claude instances with external state for autonomous overnight development."

**Score: 3** (12 words, captures unique insight, memorable)

### CORE ABSTRACTION (Final)

```
PHILOSOPHY: "Context degrades with tokens. Files persist."
     ↓
CODE: while :; do cat PROMPT.md | claude ; done
     ↓
ANCHOR: "That's the whole pattern. Everything else is scaffolding."
```

**Score: 3** (Unforgettable binding, minimal code, crystallizing anchor)

---

## Phase 3: Activity Zone Generation (Excerpt)

### Applying INVERSION to Core Abstraction

**Question:** "What if context DIDN'T degrade?"

**Output (Inversion Lens):**
```
INVERSION: What if context DIDN'T degrade?
You'd design: One long session per feature, no external files, no restarts.
Why this fails: 80K token context rot is transformer physics, not a bug.
Hidden constraint revealed: Ralph IS the constraint made visible.
```

**Relates to:** Core Abstraction section
**Score: 3** (Non-obvious constraint, changes mental model)

### Applying CONSTRAINT CHAIN to Why Fresh Context

**Question:** "What forced this? What cascades?"

**Output (Constraint Chain):**
```
ROOT CONSTRAINT: Context finite (200K) → Quality degrades as context fills
→ Fresh context beats extended sessions
→ State must persist externally (files)
→ Each iteration must be self-contained
→ Tasks must complete in one context window
→ Verification must be automatable

One constraint, FIVE downstream decisions.
```

**Relates to:** Why Fresh Context section
**Score: 3** (Root level, 5+ cascade, derivable)

---

## Phase 4: Quality Validation (Summary)

| Section | Score |
|---------|-------|
| Essence | 3 |
| Core Abstraction | 3 |
| Why Fresh Context | 3 |
| File Structure | 2 |
| Path of a Task | 3 |
| Gotchas | 2 |
| What's Hard | 2 |
| When to Use | 3 |

**Activity Zone:** 32 items, all scoring 2+, 18 scoring 3

**Generativity Test:** 30/32 passed (2 rewritten)

**Red Flags:** None found

**Ready to Publish:** ☐ YES

---

## Related Documents

- `METHODOLOGY-PHILOSOPHY.md` - The principles this process implements
- `METHODOLOGY-CONTENT-TYPES.md` - What goes in each section
- `METHODOLOGY-GENERATION-QUESTIONS.md` - How to generate Activity Zone content
- `METHODOLOGY-QUALITY-RUBRICS.md` - How to score everything
- `TEMPLATES-ACTIVITY-ZONE.md` - Templates to fill
- `METHODOLOGY-PATTERN-ADAPTATION.md` - How this process adapts for different patterns

---

## Source Traceability

| Section | Derived From |
|---------|--------------|
| Overall workflow | Implicit in POC creation process |
| Phase structure | Standard transformation methodology |
| Tracking sheets | Quality audit practices |

---

## Tags

`#methodology` `#transformation` `#workflow` `#step-by-step` `#process`
