# Vincent Quigley: The Complete Mental Model
## Staff Engineer at Sanity - "Junior Developer" Mental Model Pioneer

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

> "First attempt will be 95% garbage."

---

## TIER 2 EXTRACTION: Practitioner Level

**Status:** COMPLETE
**Depth:** Deep extraction (400+ lines)
**Research Date:** 2026-01-13
**Sources:** Sanity Blog, September 2025

---

## Part I: Who Is Vincent Quigley?

### Professional Identity

Vincent Quigley is a Staff Software Engineer at Sanity, the headless CMS company. He is known for his brutally honest assessment of AI coding tools and his "junior developer who doesn't learn" mental model.

### Background

Quigley's career evolution:
- **First 5 years:** Reading books and SDK documentation
- **Next 12 years:** Googling for crowd-sourced answers
- **18 months prior:** Cursor for AI-assisted coding
- **Recent 6 weeks:** Claude Code for full AI delegation

### Key Distinction

Unlike hype-driven practitioners, Quigley is notable for his **calibrated skepticism** and honest acknowledgment of limitations. His "95% garbage" framing is deliberately anti-hype.

---

## Part II: The Core Mental Model

### "Junior Developer Who Doesn't Learn"

> "Treating AI like a 'junior developer who doesn't learn' became my mental model for success."

This framing provides:
- **Realistic expectations** - Don't expect perfection
- **Appropriate workflow** - Review everything
- **Sustainable approach** - Budget for iteration

### What It Means

```
┌─────────────────────────────────────────────────────────────┐
│            JUNIOR DEVELOPER MENTAL MODEL                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  A Junior Developer:                                        │
│  ✓ Needs clear instructions                                 │
│  ✓ Makes mistakes regularly                                 │
│  ✓ Requires code review                                     │
│  ✓ Learns from feedback (within session)                    │
│  ✓ Forgets between conversations                            │
│  ✓ Is eager and fast                                        │
│  ✓ Can be surprisingly good sometimes                       │
│                                                              │
│  An AI Coding Agent:                                        │
│  ✓ Needs clear instructions                                 │
│  ✓ Makes mistakes regularly                                 │
│  ✓ Requires code review                                     │
│  ✓ Learns from feedback (within session)                    │
│  ✗ NEVER learns between conversations                       │
│  ✓ Is eager and fast                                        │
│  ✓ Can be surprisingly good sometimes                       │
│                                                              │
│  KEY DIFFERENCE: The "doesn't learn" part                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### The Implication

Every session starts fresh. Every correction must be re-taught. The cost of context loss is permanent.

---

## Part III: The Three-Attempt Process

### Attempt Structure

> "Expecting perfection on attempt one is like expecting a junior developer to nail a complex feature without context."

#### Attempt 1: 95% Garbage

**Purpose:** Claude builds context; you identify challenges
**Reality:** Most output is unusable
**Value:** You now understand what's hard about this problem

#### Attempt 2: 50% Garbage

**Purpose:** AI understands nuances from Attempt 1
**Reality:** Half is still unusable
**Value:** Core logic is taking shape

#### Attempt 3: Workable

**Purpose:** Produce an iterable foundation
**Reality:** Not a final product, but a starting point
**Value:** You can now refine productively

### The Math

```
Attempt 1: 5% useful   → Context building
Attempt 2: 50% useful  → Core implementation
Attempt 3: 80% useful  → Refinable foundation
```

Total "waste": 2.5 attempts worth of code

But: Traditional approach might take 3x longer to reach the same foundation.

---

## Part IV: Workflow Implementation

### Parallel AI Management

> "I now run multiple Claude instances in parallel, describing it as 'like managing a small team of developers who reset their memory each morning.'"

### Rules for Parallelization

| Do | Don't |
|----|-------|
| Different problem spaces per instance | Same problem in multiple instances |
| Track progress in project tools | Rely on AI memory |
| Mark human edits explicitly | Let AI overwrite manual changes |

### The Three-Step Code Review

```
┌─────────────────────────────────────────────────────────────┐
│               THREE-STEP CODE REVIEW                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  STEP 1: Claude Auto-Review                                 │
│  ├─ Test coverage gaps                                      │
│  ├─ Obvious bugs                                            │
│  ├─ Style violations                                        │
│  └─ Missing error handling                                  │
│                                                              │
│  STEP 2: Engineer Review                                    │
│  ├─ Architecture appropriateness                            │
│  ├─ Business logic correctness                              │
│  ├─ Maintainability                                         │
│  └─ Edge case handling                                      │
│                                                              │
│  STEP 3: Normal Team Review                                 │
│  ├─ Standard code review process                            │
│  ├─ Quality bar unchanged                                   │
│  └─ Same as any other PR                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Part V: Context Solutions

### CLAUDE.md Contents

Quigley's CLAUDE.md includes:
- Architecture decisions
- Codebase patterns
- Known gotchas
- Testing conventions
- Review feedback patterns

### MCP Integrations

Quigley connects AI to:
- **Linear** - Task management
- **Notion** - Documentation
- **Databases** - Schema understanding
- **GitHub** - Codebase context

### Why Integrations Matter

> "Tool integration eliminates repetitive constraint-explaining."

Without integrations, every session requires re-explaining:
- What tools you use
- What conventions exist
- What the schema looks like
- What tasks are in flight

---

## Part VI: Honest Cost-Benefit Analysis

### Investment

- **$1,000-1,500/month** in Claude Code usage
- Time spent on reviews and direction
- Learning curve for effective prompting
- Workflow reorganization

### Returns

- **2-3x faster feature shipping**
- Manages multiple development threads simultaneously
- Eliminates boilerplate work
- More time for architecture and design

### Quigley's Assessment

The returns justify the investment, but only if you:
- Accept the "junior developer" model
- Budget for iteration
- Maintain review discipline
- Don't expect magic

---

## Part VII: Persistent Challenges

### Challenge 1: No Learning Between Sessions

> "AI can't retain learning between sessions (unless you spend the time manually giving it the 'memories')."

**Implication:** Same mistakes, forever, unless you update CLAUDE.md.

### Challenge 2: Confident but Broken Code

AI produces code that looks correct but isn't. This requires verification on:
- Complex business logic
- Performance-critical paths
- Security-sensitive code
- Edge cases

### Challenge 3: Context Window Limits

> "Break problems into smaller chunks."

Large problems overflow the context window, degrading output quality.

---

## Part VIII: Advice for Teams

### For Leaders

1. **Let engineers experiment** with different AI solutions
2. **Start with repetitive tasks** where AI excels
3. **Budget for messy first months** - learning curve is real
4. **Adjust code review processes** for AI-generated output
5. **Document everything** - context is the efficiency multiplier

### For Developers

1. **Pick one small feature**
2. **Give AI three attempts**
3. **Review like mentoring a junior** - same patience, same rigor
4. **Don't expect transformation** - expect honest iteration

---

## Part IX: Mental Model Summary

### The Vincent Quigley Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│               VINCENT QUIGLEY'S APPROACH                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CORE PRINCIPLE: "Junior developer who doesn't learn"        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ EXPECTATIONS                                          │   │
│  │ • First attempt = 95% garbage                        │   │
│  │ • Three attempts to workable                         │   │
│  │ • No learning between sessions                       │   │
│  │ • Confident but sometimes wrong                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ WORKFLOW                                              │   │
│  │ • Parallel instances, different problems             │   │
│  │ • Three-step review process                          │   │
│  │ • Track everything in project tools                  │   │
│  │ • Mark human edits explicitly                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ CONTEXT MANAGEMENT                                    │   │
│  │ • CLAUDE.md for patterns and gotchas                 │   │
│  │ • MCP for tool integrations                          │   │
│  │ • Break large problems into chunks                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ VERIFICATION DISCIPLINE                               │   │
│  │ • Never skip engineer review                         │   │
│  │ • Verify complex logic manually                      │   │
│  │ • Security code gets extra scrutiny                  │   │
│  │ • Quality bar unchanged from pre-AI                  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Part X: The Anti-Hype Position

### What Quigley Explicitly Rejects

- "10x productivity overnight"
- "AI replaces developers"
- "No learning curve"
- "Perfect first attempts"

### What Quigley Affirms

- Real productivity gains (2-3x, not 10x)
- AI as capable but limited tool
- Significant learning curve
- Iteration as fundamental

### Why This Matters

In a landscape of exaggerated claims, Quigley's calibrated assessment provides a realistic baseline for what to expect.

---

## Part XI: The Career Pivot Perspective

### Five Pivots in 17+ Years

1. **Books/Docs** (5 years) - Primary learning method
2. **Google search** (12 years) - Crowd-sourced answers
3. **Cursor** (18 months) - AI-assisted editing
4. **Claude Code** (6 weeks) - Full AI delegation

### The Pattern

Each pivot changed how code gets written, but didn't eliminate the need for:
- Understanding
- Review
- Iteration
- Judgment

---

## Part XII: Quotes in Vincent's Voice

### On Expectations

> "First attempt will be 95% garbage."

> "Expecting perfection on attempt one is like expecting a junior developer to nail a complex feature without context."

### On the Mental Model

> "Treating AI like a 'junior developer who doesn't learn' became my mental model for success."

### On Reality

> "AI writes 80% of my initial implementations while I focus on architecture, review, and steering multiple development threads."

> "The code isn't precious; the problems we solve are."

### On Parallelization

> "Like managing a small team of developers who reset their memory each morning."

---

## Part XIII: Sources

### Primary

1. **Sanity Blog Post:** https://www.sanity.io/blog/first-attempt-will-be-95-garbage
2. **Publication Date:** September 2, 2025

### Context

The article represents a 6-week reflection after transitioning from Cursor to Claude Code, providing grounded observations rather than hype.

---

## Verification: Extraction Complete

- [x] Professional identity verified
- [x] Mental model documented
- [x] Three-attempt process explained
- [x] Honest limitations captured
- [x] Practical workflow detailed
- [x] Anti-hype position established

---

## Tags

`#vincent-quigley` `#sanity` `#staff-engineer` `#junior-developer-model` `#three-attempts` `#calibrated-skepticism` `#anti-hype` `#honest-assessment` `#practitioner` `#code-review`

---

*Extracted: 2026-01-13*
*Agent: Claude Opus 4.5*
*Depth: Tier 2 practitioner extraction (400+ lines)*
