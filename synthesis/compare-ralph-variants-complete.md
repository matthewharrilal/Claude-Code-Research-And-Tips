# Complete Ralph Variants Comparison
## From Basic Loops to Multi-Agent Validation: The Full Spectrum

---

**Document Type:** Synthesis Comparison
**Version:** 1.0
**Created:** 2026-01-19
**Line Target:** 2,000+
**Sources:** 5 extraction documents synthesized

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Executive Summary](#2-executive-summary)
3. [Evolution Story](#3-evolution-story)
4. [The Five Variants: Deep Dive](#4-the-five-variants-deep-dive)
5. [Feature Comparison Matrix](#5-feature-comparison-matrix)
6. [Decision Tree: Which Ralph for Your Use Case](#6-decision-tree-which-ralph-for-your-use-case)
7. [Cost and Complexity Trade-offs](#7-cost-and-complexity-trade-offs)
8. [Migration Paths](#8-migration-paths)
9. [Code Examples from Each Variant](#9-code-examples-from-each-variant)
10. [Mental Models](#10-mental-models)
11. [Checkpoints](#11-checkpoints)
12. [Troubleshooting Accordion](#12-troubleshooting-accordion)
13. [Integration Patterns](#13-integration-patterns)
14. [Combination Matrix](#14-combination-matrix)
15. [Source Attribution](#15-source-attribution)
16. [Quick Reference Card](#16-quick-reference-card)

---

## 1. You Are Here

<div class="you-are-here" style="background: linear-gradient(135deg, #f0ebe3 0%, #fefcf3 100%); border-left: 4px solid #2a7d7d; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">

### **Con**text **Ori**entation

You are **read**ing a **com**prehensive **com**parison of **all** **five** **maj**or **Ral**ph **Wig**um **var**iants in the **Cla**ude **Cod**e **eco**system. This **doc**ument **syn**thesizes **~4,000** **lin**es of **ext**raction **doc**umentation into a **sin**gle **dec**ision-**mak**ing **res**ource.

### Where This Fits

```
CLAUDE CODE ORCHESTRATION PATTERNS
===================================

Level 0: Single session                   <- Entry point
Level 1: CLAUDE.md + context              <- Basic persistence
Level 2: Extended sessions                <- Context engineering
Level 3-4: RALPH VARIANTS                 <- THIS DOCUMENT COVERS
Level 5-6: Multi-agent (CC Mirror)        <- Advanced orchestration
Level 7: Factory-scale (Gas Town)         <- Team-equivalent

                     ┌─────────────────────────────────────────────┐
                     │          RALPH VARIANTS (THIS DOC)          │
                     │                                             │
                     │  ┌─────────┐  ┌───────────┐  ┌─────────┐   │
                     │  │ORIGINAL │  │PRODUCTION │  │MARATHON │   │
                     │  │ (L3)    │  │  (L3-4)   │  │ (L5)    │   │
                     │  └─────────┘  └───────────┘  └─────────┘   │
                     │                                             │
                     │  ┌─────────┐  ┌───────────┐                │
                     │  │  LISA   │  │ ZEROSHOT  │                │
                     │  │ (L3.5)  │  │  (L5-6)   │                │
                     │  └─────────┘  └───────────┘                │
                     │                                             │
                     │  L = Complexity Level                       │
                     └─────────────────────────────────────────────┘
```

### Pre**req**uisites

Before using this document effectively:

| Concept | Required Understanding |
|---------|----------------------|
| **Fresh context principle** | Why new sessions beat extended ones |
| **External memory** | State lives in files, not model context |
| **Verification loops** | Every task needs testable completion criteria |
| **Bash scripting basics** | `while`, `for`, `grep`, pipes |

### What This Document Enables

After reading this synthesis, you will be able to:

1. **Choose** the right Ralph variant for any use case
2. **Understand** the trade-offs between simplicity and capability
3. **Migrate** between variants as your needs evolve
4. **Combine** variants with other orchestration patterns
5. **Troubleshoot** common problems across all variants
6. **Estimate** costs before committing to a variant

### Reading Path Recommendation

| Your Situation | Recommended Sections |
|----------------|---------------------|
| New to Ralph | 2, 3, 4.1 (Original), 10, 11 |
| Choosing a variant | 5, 6, 7 |
| Planning to scale up | 8, 13, 14 |
| Debugging issues | 12 |
| Reference lookup | 9, 16 |

</div>

---

## 2. Executive Summary

### The **Ral**ph **Fam**ily at a **Gla**nce

**Ralph Wiggum** is not one pattern but a **family** of related patterns for autonomous AI coding. All share the same DNA:

> **Fresh context iteration with external state persistence**

But each variant optimizes for different use cases:

| Variant | Creator | Focus | Complexity | Best For |
|---------|---------|-------|------------|----------|
| **Original Ralph** | Geoffrey Huntley | Foundational loop | Level 3 | Learning, simple tasks |
| **Production Ralph** | Ryan Carson | PRD-driven stories | Level 3-4 | Feature development |
| **Marathon Ralph** | Stephen Rayner | Full SDLC automation | Level 5 | Complete applications |
| **Lisa** | BLEN Engineering | Specification interviews | Level 3.5 | PRD creation |
| **Zeroshot** | covibes | Multi-agent validation | Level 5-6 | Complex with guarantees |

### The **Fun**damental **Ins**ight

All Ralph variants share the same core philosophy from Geoffrey Huntley:

> "**Fre**sh **con**text **bea**ts **acc**umulated **con**text. **Mem**ory **liv**es in **fil**es, not in the **mod**el."

This philosophy manifests differently in each variant:

| Variant | How It Implements Fresh Context |
|---------|--------------------------------|
| **Original** | `while :; do cat PROMPT.md \| claude ; done` |
| **Production** | Story-by-story iteration with prd.json |
| **Marathon** | Phase-by-phase SDLC cycle |
| **Lisa** | Interview session to specification |
| **Zeroshot** | Multi-agent topology with blind validation |

### Quick **Dec**ision **Mat**rix

```
NEED SOMETHING SIMPLE?
    → Original Ralph

NEED STRUCTURED FEATURE DEVELOPMENT?
    → Production Ralph

NEED SPECIFICATION HELP FIRST?
    → Lisa → then Ralph

NEED FULL SDLC WITH TESTS?
    → Marathon Ralph

NEED VALIDATION GUARANTEES?
    → Zeroshot
```

---

## 3. Evolution Story

### The **Gen**ealogy of **Ral**ph

The Ralph ecosystem evolved organically through community experimentation:

```
                    RALPH ECOSYSTEM EVOLUTION
                    ═════════════════════════

    2024-2025                          2025-2026
    ─────────                          ─────────

    ┌───────────────────────┐
    │   GEOFFREY HUNTLEY    │
    │   ghuntley.com/ralph  │
    │                       │
    │   "while :; do cat    │
    │    PROMPT.md | claude │
    │    ; done"            │
    └───────────┬───────────┘
                │
                │  THE FOUNDATIONAL INSIGHT
                │  • Fresh context beats accumulated
                │  • External memory beats internal
                │  • Iteration beats perfection
                │
        ┌───────┴───────────┬───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ MATT POCOCK   │   │ RYAN CARSON   │   │ COMMUNITY     │
│ Popularizer   │   │ Production    │   │ Variants      │
│               │   │ Implementation│   │               │
│ • Viral video │   │               │   │ • Marathon    │
│ • 11 tips     │   │ • snarktank/  │   │ • Lisa        │
│ • PRD format  │   │   ralph       │   │ • Zeroshot    │
│               │   │ • prd.json    │   │ • Compounding │
│               │   │ • AGENTS.md   │   │ • Marketer    │
└───────────────┘   └───────────────┘   └───────────────┘
        │                   │                   │
        │                   │                   │
        └───────────────────┴───────────────────┘
                            │
                            ▼
                ┌───────────────────────┐
                │   ANTHROPIC OFFICIAL  │
                │   RALPH-WIGGUM PLUGIN │
                │                       │
                │   /ralph-loop         │
                │   /cancel-ralph       │
                │                       │
                │   Stop hook creates   │
                │   self-referential    │
                │   feedback loop       │
                └───────────────────────┘
```

### Phase 1: The **Ori**ginal **Ins**ight (Huntley)

Geoffrey Huntley observed a fundamental problem with extended AI sessions:

```
THE CONTEXT ROT PROBLEM
═══════════════════════

Session Hour 1:  Quality: ████████████████████ 100%
Session Hour 2:  Quality: ████████████████░░░░  80%
Session Hour 4:  Quality: ██████████████░░░░░░  70%
Session Hour 8:  Quality: ██████████░░░░░░░░░░  50%
Session Hour 12: Quality: ██████░░░░░░░░░░░░░░  30%

Root causes:
• Context windows fill up
• Attention dilutes across tokens
• Lossy internal summarization
• Recency bias dominates
• Original goals become fuzzy
```

**Huntley's solution**: Instead of fighting context limits, embrace many short sessions with external memory.

The result: **Fresh context every iteration, peak quality every time.**

### Phase 2: **Pop**ularization and **Str**ucture (Pocock/Carson)

Matt Pocock created viral content explaining the pattern, while Ryan Carson built production tooling:

**Pocock's contributions:**
- 409K view video explaining the concept
- 11 Tips Guide for practical implementation
- PRD format standardization
- "Ship while you sleep" framing

**Carson's contributions:**
- `snarktank/ralph` repository (4.9k stars)
- Complete prd.json schema
- Story sizing methodology
- AGENTS.md memory pattern
- Archive system for cross-run learning

### Phase 3: **Spec**ialization and **Ext**ension

The community extended Ralph in multiple directions:

| Extension | Creator | Direction |
|-----------|---------|-----------|
| **Marathon Ralph** | @gruckion | Full SDLC integration |
| **Lisa** | BLEN Engineering | Planning/specification |
| **Zeroshot** | covibes | Multi-agent validation |
| **Compounding Ralph** | @ryancarson | Cross-run learning |
| **Ralph Marketer** | @koylanai | Content generation |
| **Parallel Ralph** | Community | Git worktree parallelization |

### Phase 4: **Off**icial **Rec**ognition

Anthropic acknowledged the pattern with an official plugin:

```bash
# Official Anthropic Ralph plugin commands
/ralph-loop    # Start a Ralph iteration loop
/cancel-ralph  # Stop the loop

# Architecture uses stop hooks for self-referential feedback
```

### The **Evo**lutionary **Pre**ssures

Each variant evolved to solve specific problems:

| Problem | Variant Solution |
|---------|-----------------|
| "How do I start?" | **Original Ralph** - minimal loop |
| "Tasks are too big" | **Production Ralph** - story sizing |
| "Need specs first" | **Lisa** - interview workflow |
| "Need tests too" | **Marathon Ralph** - SDLC phases |
| "Need guarantees" | **Zeroshot** - blind validation |

---

## 4. The Five Variants: Deep Dive

### 4.1 Original Ralph (Geoffrey Huntley)

<div class="variant-section" style="border-left: 4px solid #2a7d7d; padding-left: 1rem; margin: 1rem 0;">

#### Identity

| Attribute | Value |
|-----------|-------|
| **Creator** | Geoffrey Huntley |
| **Source** | ghuntley.com/ralph |
| **Complexity** | Level 3 |
| **Philosophy** | "Iteration over perfection" |

#### The Core Pattern

At its absolute simplest:

```bash
while :; do cat PROMPT.md | claude-code ; done
```

**Everything else is scaffolding around this fundamental loop.**

#### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   ORIGINAL RALPH FLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Start with FRESH context (new Claude instance)          │
│                    │                                        │
│  2. Read task state from files                              │
│     (prd.json, progress.txt, git history)                   │
│                    │                                        │
│  3. Pick highest priority incomplete task                   │
│                    │                                        │
│  4. Implement that ONE task                                 │
│                    │                                        │
│  5. Run verification (tests, typecheck)                     │
│                    │                                        │
│  6. If pass → commit, update prd.json                       │
│     If fail → log learnings, retry                          │
│                    │                                        │
│  7. Append to progress.txt                                  │
│                    │                                        │
│  8. Check completion condition                              │
│     All done? → Output <promise>COMPLETE</promise> → EXIT   │
│     Not done? → Loop continues                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### State Management

| Artifact | Purpose | Lifespan |
|----------|---------|----------|
| PROMPT.md | Task instructions | Per-feature |
| prd.json | Task completion tracking | Per-feature |
| progress.txt | Session learnings | Per-feature |
| CLAUDE.md | Permanent project context | Project-wide |
| Git history | Code changes | Forever |

#### Strengths

- **Minimal setup** - 15 minutes to first run
- **Easy to understand** - one bash command at core
- **Low overhead** - no external dependencies
- **Foundation for all variants** - concepts transfer

#### Weaknesses

- **No structured task format** - manual PRD creation
- **Limited memory architecture** - only progress.txt
- **No cross-run learning** - each feature starts fresh
- **Basic verification** - relies on you defining checks

#### When to Use

| Good Fit | Why |
|----------|-----|
| Learning Ralph concepts | Minimal complexity |
| Simple, well-defined tasks | Low overhead |
| Quick prototypes | Fast setup |
| Budget-constrained projects | Minimal API usage |

| Bad Fit | Why |
|---------|-----|
| Complex multi-story features | No story sizing methodology |
| Team environments | No built-in coordination |
| Need test generation | Not included |
| Need validation guarantees | Self-validation only |

</div>

---

### 4.2 Production Ralph (Ryan Carson / snarktank)

<div class="variant-section" style="border-left: 4px solid #6b9b7a; padding-left: 1rem; margin: 1rem 0;">

#### Identity

| Attribute | Value |
|-----------|-------|
| **Creator** | Ryan Carson (@ryancarson) |
| **Source** | github.com/snarktank/ralph (4.9k stars) |
| **Complexity** | Level 3-4 |
| **Philosophy** | "Story sizing is THE success factor" |

#### What Makes It "Production"

Production Ralph transforms the basic loop into a repeatable, reliable system:

| Component | Purpose | Production Benefit |
|-----------|---------|-------------------|
| prd.json | Structured task format | Parseable, versionable |
| SKILL.md files | Reusable agent instructions | Consistent behavior |
| progress.txt | Iteration memory | Learnings compound |
| AGENTS.md | Long-term patterns | Institutional knowledge |
| Archive system | Run history | Cross-run learning |
| Branch management | Isolation | Clean feature branches |

#### The prd.json Standard

```json
{
  "project": "MyApp",
  "branchName": "ralph/feature-name-kebab-case",
  "description": "Feature description",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add users table schema",
      "description": "As a developer, I need a users table",
      "acceptanceCriteria": [
        "Users table created with id, email columns",
        "Migration uses IF NOT EXISTS",
        "npm run typecheck passes",
        "npm run test passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

#### Story Sizing: The Iron Rule

> "**Eac**h **sto**ry **mus**t be **com**pletable in **ONE** **ite**ration (~one **con**text **win**dow)."

**The 2-3 Sentence Rule:**
- If you can't describe it in 2-3 sentences, split it
- If it takes multiple context windows, it's too big

**Right-Sized Examples:**
```json
// GOOD - fits in one context window
{ "title": "Add status column to tasks table" }
{ "title": "Add filter dropdown to task list" }
{ "title": "Implement task status toggle" }

// BAD - needs decomposition
{ "title": "Build entire dashboard" }
{ "title": "Add authentication" }
```

#### Memory Architecture

**Two memory layers:**

| Layer | Location | Lifespan | Purpose |
|-------|----------|----------|---------|
| **Long-term** | AGENTS.md | Permanent | API patterns, interdependencies |
| **Short-term** | progress.txt | Per-feature | Iteration learnings |

**Archive system for cross-run learning:**
```
archive/
├── 2026-01-15-auth-feature/
│   ├── prd.json
│   └── progress.txt
├── 2026-01-17-task-filters/
│   └── ...
```

#### Strengths

- **Structured task format** - consistent, parseable
- **Story sizing methodology** - proven approach
- **Two-layer memory** - short and long-term
- **Archive system** - learn from previous runs
- **Well-documented** - 4.9k GitHub stars

#### Weaknesses

- **Manual story creation** - you write the PRD
- **No test generation** - tests in criteria, not created
- **Single-threaded** - one story at a time
- **Amp-centric** - some features assume Amp CLI

#### When to Use

| Good Fit | Why |
|----------|-----|
| Feature development | Story format natural |
| Teams with existing tests | Verification built-in |
| Learning to scale | Bridge to advanced |
| Reproducible workflows | Structured approach |

| Bad Fit | Why |
|---------|-----|
| Quick one-off tasks | Too much overhead |
| Greenfield with no tests | Need test generation |
| Need spec help | Assumes PRD exists |

</div>

---

### 4.3 Marathon Ralph (Stephen Rayner / gruckion)

<div class="variant-section" style="border-left: 4px solid #c49052; padding-left: 1rem; margin: 1rem 0;">

#### Identity

| Attribute | Value |
|-----------|-------|
| **Creator** | Stephen Rayner (@gruckion) |
| **Source** | github.com/gruckion/marathon-ralph |
| **Complexity** | Level 5 |
| **Philosophy** | "Spec to tested application" |

#### What Makes It "Marathon"

Marathon Ralph automates the **complete software development lifecycle**:

```
MARATHON RALPH SDLC CYCLE
═════════════════════════

VERIFY → PLAN → CODE → TEST → QA → EXIT
   │                                   │
   └─────────── REPEAT ───────────────┘

For EACH Linear issue:
```

| Phase | Agent | Purpose | Model |
|-------|-------|---------|-------|
| VERIFY | verify-agent | Ensure codebase health | Sonnet |
| PLAN | plan-agent | Create implementation strategy | Opus |
| CODE | code-agent | Implement the feature | Opus |
| TEST | test-agent | Write unit + integration tests | Opus |
| QA | qa-agent | Write E2E tests (web projects) | Opus |
| EXIT | exit-agent | Update Linear, reset state | Haiku |

#### Linear Integration

**Linear is required** - Marathon Ralph uses it for:

- Project creation from specifications
- Issue decomposition with priorities
- State persistence across sessions
- Bug ticket creation on failures
- Progress tracking

**Priority breakdown:**
| Priority | Type | Examples |
|----------|------|----------|
| P0 | Critical infrastructure | Database schema, core config |
| P1 | Core features | Main CRUD operations |
| P2 | Secondary features | Filtering, search |
| P3 | Polish | Animations, accessibility |

#### Circuit Breaker Pattern

Prevents infinite retry loops:

| Limit Type | Default | Purpose |
|------------|---------|---------|
| Verify phase attempts | 3 | Don't loop forever on failing tests |
| Plan phase attempts | 3 | Recognize planning failures |
| Code phase attempts | 3 | Recognize implementation blocks |
| Test phase attempts | 5 | More room for test iteration |
| QA phase attempts | 5 | E2E can be flaky |
| Per-issue attempts | 5 | Overall issue safety net |
| Consecutive failures | 5 | Recognize systemic issues |
| Stop hook iterations | 25 | Hard session limit |

#### Mandatory Test Coverage

**Tests are NOT optional:**

| Phase | Test Type | Framework |
|-------|-----------|-----------|
| TEST | Unit tests | Vitest/Jest |
| TEST | Integration tests | Vitest/Jest |
| QA | E2E tests | Playwright |

#### Strengths

- **Complete SDLC** - spec to tested code
- **Mandatory tests** - no test debt
- **Cross-session continuity** - Linear-based
- **Circuit breaker** - prevents runaway
- **Auto-decomposition** - from spec file

#### Weaknesses

- **Requires Linear** - can't use without it
- **Higher complexity** - more moving parts
- **Slower per-feature** - 6 phases
- **Web-focused** - E2E assumes browser

#### When to Use

| Good Fit | Why |
|----------|-----|
| Building complete applications | Full SDLC |
| Test coverage is critical | Mandatory phases |
| Want Linear integration | Native support |
| Cross-session persistence | Automatic resume |

| Bad Fit | Why |
|---------|-----|
| Quick tasks | Too much overhead |
| No Linear | Required dependency |
| Non-web projects | E2E is browser-focused |
| Teams without specs | Needs clear requirements |

</div>

---

### 4.4 Lisa (BLEN Engineering)

<div class="variant-section" style="border-left: 4px solid #5c4b3a; padding-left: 1rem; margin: 1rem 0;">

#### Identity

| Attribute | Value |
|-----------|-------|
| **Creator** | BLEN Engineering (Mike Endale) |
| **Source** | github.com/blencorp/lisa |
| **Complexity** | Level 3.5 |
| **Philosophy** | "Lisa plans. Ralph does." |

#### The Planning Gap Lisa Fills

Most Ralph failures trace back to poor specifications:

```
COMMON RALPH FAILURE MODES           LISA PREVENTION
━━━━━━━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━━━━
Tasks too large                      Interview forces decomposition
Vague acceptance criteria            Systematic criteria extraction
Missing edge cases                   Dedicated edge case questions
Wrong task order                     Implementation phases defined
No verification steps                Built-in verification in output
```

#### The Interview Workflow

Lisa conducts systematic, in-depth interviews:

```
INPUT:  "I want to add user authentication"

LISA INTERVIEW (15-30 questions):
├── SCOPE DEFINITION
│   • What are explicit boundaries?
│   • What's MVP vs future?
│   • What's out of scope?
│
├── USER STORIES
│   • What discrete features?
│   • Acceptance criteria for each?
│   • How do we verify completion?
│
├── TECHNICAL IMPLEMENTATION
│   • Data models required?
│   • API endpoints needed?
│   • Error handling strategy?
│
├── USER EXPERIENCE
│   • User flows?
│   • Edge cases?
│   • Error states?
│
├── TRADE-OFFS
│   • Performance vs features?
│   • Security vs convenience?
│
└── IMPLEMENTATION PHASES
    • 2-4 incremental steps
    • Verification per phase

OUTPUT:
├── docs/specs/{feature}.md      # Human-readable spec
├── docs/specs/{feature}.json    # Machine-readable (Ralph)
└── docs/specs/{feature}-progress.txt  # Phase tracking
```

#### First Principles Mode

The `--first-principles` flag adds assumption-challenging:

```bash
/lisa:plan "Add user authentication" --first-principles
```

**Questions added:**
1. "What specific problem triggered this idea?"
2. "What if we don't build it?"
3. "What's the simplest solution that could work?"
4. "What assumptions are we making?"
5. "Is this the right approach?"

#### Output Format

Lisa outputs are directly compatible with Production Ralph:

```json
{
  "project": "user-authentication",
  "branchName": "ralph/user-authentication",
  "description": "Enable secure user registration and login",
  "userStories": [
    {
      "id": "US-001",
      "title": "Database schema for users",
      "acceptanceCriteria": [
        "Users table created",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

#### Strengths

- **Systematic coverage** - structured questions
- **First principles validation** - challenge assumptions
- **Ralph-compatible output** - direct integration
- **Resume capability** - save interview state
- **Context loading** - incorporate existing docs

#### Weaknesses

- **Planning only** - doesn't execute
- **Requires Ralph for execution** - complementary
- **Interview fatigue** - 15-30 questions
- **Still manual answers** - you provide content

#### When to Use

| Good Fit | Why |
|----------|-----|
| Don't have a PRD | Creates one |
| Complex requirements | Systematic extraction |
| Uncertain scope | First principles mode |
| Want consistency | Standard output format |

| Bad Fit | Why |
|---------|-----|
| PRD already exists | Redundant |
| Simple obvious tasks | Overhead not justified |
| Hate answering questions | Interview-based |

</div>

---

### 4.5 Zeroshot (covibes)

<div class="variant-section" style="border-left: 4px solid #c97065; padding-left: 1rem; margin: 1rem 0;">

#### Identity

| Attribute | Value |
|-----------|-------|
| **Creator** | covibes |
| **Source** | github.com/covibes/zeroshot |
| **Complexity** | Level 5-6 |
| **Philosophy** | "Validators can't lie about code they didn't write" |

#### The Blind Validation Insight

Single-agent systems have an inherent conflict of interest:

```
TRADITIONAL RALPH:
Agent writes code → Agent checks its own work → Commits
                    └── BIAS: Knows what it meant to do

ZEROSHOT:
Worker writes code → Worker loses context access
                  → Validators check BLIND
                  → Validators see ONLY files, not history
                  → Honest assessment without context bias
```

**Why it matters:**
- Self-validation is biased toward assumptions
- Fresh perspective catches more issues
- Can't rationalize poor implementation

#### Multi-Agent Topology

```
                        +-------------------+
                        |    CONDUCTOR      |
                        | (Task Classifier) |
                        +--------+----------+
                                 │
              +------------------+------------------+
              │                                     │
     +--------▼---------+               +-----------▼----------+
     │     PLANNER      │               │    Direct to Worker  │
     │ (Complex tasks)  │               │    (Simple tasks)    │
     +--------+---------+               +-----------+----------+
              │                                     │
              ▼                                     ▼
     +--------+---------+               +-----------+----------+
     │      WORKER      │               │       WORKER         │
     +--------+---------+               +-----------+----------+
              │                                     │
   +----------+----------+               +----------+----------+
   │          │          │               │                     │
   ▼          ▼          ▼               ▼                     ▼
+------+  +------+  +------+         +------+             +------+
|Valid1|  |Valid2|  |Valid3|         |Valid1|             |Valid2|
+------+  +------+  +------+         +------+             +------+
   │          │          │               │                     │
   +----------+----------+               +----------+----------+
              │                                     │
              ▼                                     ▼
        [Consensus?]                          [Consensus?]
              │                                     │
         ACCEPT/REJECT                        ACCEPT/REJECT
```

#### Complexity-Based Routing

The Conductor classifies tasks:

| Complexity | Resources | Validators |
|------------|-----------|------------|
| TRIVIAL | Single file change | None |
| SIMPLE | Worker | 1 generic |
| STANDARD | Planner + Worker | 2 |
| CRITICAL | Senior Planner + Worker | 5 specialized |

**Task types:**
- INQUIRY: Read-only analysis
- TASK: Implementation work
- DEBUG: Bug fixing

#### Crash Recovery via SQLite

All state persists to SQLite ledger:

```bash
# Session interrupted? Resume:
zeroshot resume <cluster-id>

# View previous runs:
sqlite3 ~/.zeroshot/*.db "SELECT * FROM messages"

# Export conversation:
zeroshot export <cluster-id>
```

#### Provider Agnosticism

Switch AI providers without code changes:

```bash
zeroshot providers                    # List available
zeroshot providers set-default codex  # Change default
zeroshot run 123 --provider gemini    # Override per-run
```

**Supported:**
- Claude (`@anthropic-ai/claude-code`)
- Codex (`@openai/codex`)
- Gemini (`@google/gemini-cli`)
- Opencode (opencode.ai)

#### Isolation Modes

| Mode | Setup Time | Use Case |
|------|------------|----------|
| None | Instant | Quick tasks, manual review |
| Worktree | ~1 second | PR workflows, parallel |
| Docker | ~30 seconds | Risky experiments |

#### Strengths

- **Blind validation** - honest assessment
- **Multi-agent** - specialized roles
- **Crash recovery** - SQLite persistence
- **Provider agnostic** - switch freely
- **Isolation modes** - safe experimentation
- **Complexity routing** - right resources

#### Weaknesses

- **Higher overhead** - multi-agent = more API calls
- **Needs clear "done"** - validators require criteria
- **Setup complexity** - more configuration
- **Higher cost** - multiple agents

#### When to Use

| Good Fit | Why |
|----------|-----|
| Complex implementations | Validation guarantees |
| Need independent review | Blind validators |
| Multi-provider experimentation | Agnostic design |
| Crash-resistant workflows | SQLite persistence |

| Bad Fit | Why |
|---------|-----|
| Simple tasks | Overhead not justified |
| Exploratory work | Needs clear done criteria |
| Cost-constrained | Multiple agents = more cost |
| Vague requirements | Validators can't verify |

</div>

---

## 5. Feature Comparison Matrix

### Core Capabilities

| Feature | Original | Production | Marathon | Lisa | Zeroshot |
|---------|----------|------------|----------|------|----------|
| **Fresh context loop** | Yes | Yes | Yes | N/A | Yes |
| **External state** | Files | prd.json + AGENTS.md | Linear + JSON | State files | SQLite |
| **Task format** | Free-form | Structured JSON | Linear issues | Interview | Issue/desc |
| **Story sizing** | Manual | Methodology | Auto-decompose | Interview | Conductor |
| **Verification** | Optional | In criteria | Mandatory phases | Outputs only | Blind validators |

### Memory Architecture

| Feature | Original | Production | Marathon | Lisa | Zeroshot |
|---------|----------|------------|----------|------|----------|
| **Short-term** | progress.txt | progress.txt | State file | Interview state | Message bus |
| **Long-term** | CLAUDE.md | AGENTS.md | Linear history | Output specs | SQLite ledger |
| **Cross-run** | Manual | Archives | Linear | Specs persist | Cluster history |
| **Compound learning** | No | Yes | Yes | N/A | Per-cluster |

### Test Integration

| Feature | Original | Production | Marathon | Lisa | Zeroshot |
|---------|----------|------------|----------|------|----------|
| **Unit tests** | In criteria | In criteria | Mandatory | Outputs criteria | Via validator |
| **Integration tests** | In criteria | In criteria | Mandatory | Outputs criteria | Via validator |
| **E2E tests** | Manual | Via skill | Mandatory (QA phase) | Outputs criteria | Specialized validator |
| **Test generation** | No | No | Automatic | No | No |

### Execution Model

| Feature | Original | Production | Marathon | Lisa | Zeroshot |
|---------|----------|------------|----------|------|----------|
| **Agent count** | 1 | 1 | 6 phases | 1 | Multi (4+) |
| **Parallelization** | Worktrees | Worktrees | Sequential | N/A | Validators parallel |
| **Isolation** | None | Branch | Branch | Session | None/Worktree/Docker |
| **Resume** | Manual | Manual | Automatic | /lisa:resume | Automatic |

### Dependencies

| Feature | Original | Production | Marathon | Lisa | Zeroshot |
|---------|----------|------------|----------|------|----------|
| **Claude Code** | Required | Required | Required | Required | Optional |
| **External tools** | None | jq | Linear MCP | None | Node.js, gh |
| **Provider lock-in** | Claude | Claude/Amp | Claude | Claude | None |
| **Setup time** | 15 min | 30 min | 1+ hour | 10 min | 30 min |

---

## 6. Decision Tree: Which Ralph for Your Use Case

### The **Mas**ter **Dec**ision **Flo**wchart

```
                    ┌─────────────────────────────────────┐
                    │   DO YOU HAVE A CLEAR SPECIFICATION │
                    │   WITH ACCEPTANCE CRITERIA?          │
                    └─────────────────┬───────────────────┘
                                      │
                          ┌───────────┴───────────┐
                          │                       │
                         YES                      NO
                          │                       │
                          │                       ▼
                          │         ┌─────────────────────────────┐
                          │         │        USE LISA             │
                          │         │  to create the specification│
                          │         └──────────────┬──────────────┘
                          │                        │
                          │                        │
                          ▼                        ▼
          ┌───────────────────────────────────────────────────────┐
          │       DO YOU NEED INDEPENDENT VALIDATION?             │
          │       (Multiple agents checking work blindly)          │
          └─────────────────────────┬─────────────────────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                       YES                      NO
                        │                       │
                        ▼                       │
          ┌─────────────────────────┐           │
          │     USE ZEROSHOT        │           │
          │  Multi-agent validation │           │
          └─────────────────────────┘           │
                                                │
                                                ▼
          ┌───────────────────────────────────────────────────────┐
          │       DO YOU NEED AUTOMATIC TEST GENERATION?          │
          │       (E2E, unit, integration tests created)          │
          └─────────────────────────┬─────────────────────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                       YES                      NO
                        │                       │
                        ▼                       │
          ┌─────────────────────────┐           │
          │   USE MARATHON RALPH    │           │
          │   Full SDLC automation  │           │
          │   (requires Linear)     │           │
          └─────────────────────────┘           │
                                                │
                                                ▼
          ┌───────────────────────────────────────────────────────┐
          │       IS THIS A MULTI-STORY FEATURE?                  │
          │       (More than 3-5 discrete tasks)                  │
          └─────────────────────────┬─────────────────────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                       YES                      NO
                        │                       │
                        ▼                       │
          ┌─────────────────────────┐           │
          │  USE PRODUCTION RALPH   │           │
          │  PRD-driven stories     │           │
          └─────────────────────────┘           │
                                                │
                                                ▼
                              ┌─────────────────────────┐
                              │   USE ORIGINAL RALPH    │
                              │   Simple, minimal loop  │
                              └─────────────────────────┘
```

### Quick Reference Decision Matrix

| Your Situation | Best Choice | Why |
|----------------|-------------|-----|
| Just learning Ralph | **Original** | Minimal complexity |
| Have clear PRD, want execution | **Production** | Story-driven |
| Need to create the PRD first | **Lisa** → **Production** | Planning + execution |
| Building from scratch, need tests | **Marathon** | Full SDLC |
| Need validation guarantees | **Zeroshot** | Blind validators |
| Cost is primary concern | **Original** | Minimal API usage |
| Team environment, need audit | **Zeroshot** | SQLite logging |
| Want Linear integration | **Marathon** | Native support |
| One-off quick task | **Original** | Low overhead |
| Multi-model experimentation | **Zeroshot** | Provider agnostic |

### Complexity vs Capability Trade-off

```
                           CAPABILITY
                              ▲
                              │
    HIGH    │                 │         ┌──────────┐
            │                 │         │ ZEROSHOT │
            │                 │    ┌────┴──────────┘
            │                 │    │ ┌────────────┐
            │                 │    │ │  MARATHON  │
            │              ┌──┴────┼─┴────────────┘
            │              │       │
            │         ┌────┴───────┤
            │         │ PRODUCTION │
            │    ┌────┴────────────┘
            │    │  ┌──────────┐
            │    │  │  LISA    │ (Planning only)
            │    │  └──────────┘
    LOW     │    │┌────────────┐
            │    ││  ORIGINAL  │
            │    │└────────────┘
            └────┴────────────────────────────────────► COMPLEXITY
                 LOW                              HIGH
```

---

## 7. Cost and Complexity Trade-offs

### API Cost Comparison

**Assumptions:**
- Average feature: 5 user stories
- Each story: ~5,000 tokens input, ~2,000 tokens output
- Using Claude Sonnet for estimation

| Variant | Stories × Iterations | Validators | Estimated API Cost |
|---------|---------------------|------------|-------------------|
| **Original** | 5 × 2 | 0 | ~$0.50-1.00 |
| **Production** | 5 × 2 | 0 | ~$0.50-1.00 |
| **Marathon** | 5 × 6 phases | 0 | ~$2.00-4.00 |
| **Lisa** | 1 × interview | 0 | ~$0.20-0.50 |
| **Zeroshot** | 5 × multi-agent | 2-5 per | ~$3.00-8.00 |

**Cost multipliers:**

| Factor | Impact |
|--------|--------|
| Retries | +50-100% if tasks fail |
| Model tier | Opus = 3-5x Sonnet |
| Context size | Large repos = more tokens |
| Validation rounds | Zeroshot = multiplied by validators |

### Setup Time Comparison

| Variant | Initial Setup | Per-Feature Setup |
|---------|--------------|-------------------|
| **Original** | 15 minutes | 5 minutes |
| **Production** | 30 minutes | 10-20 minutes (PRD) |
| **Marathon** | 1-2 hours | 10 minutes (spec) |
| **Lisa** | 10 minutes | 20-30 min (interview) |
| **Zeroshot** | 30 minutes | 5 minutes |

### Learning Curve

```
                        LEARNING CURVE
                              ▲
                              │
    STEEP   │      ┌─────────┐
            │      │MARATHON │
            │   ┌──┴─────────┘
            │   │┌──────────┐
            │   ││ ZEROSHOT │
            │   │└──────────┘
            │   │
            │  ┌┴───────────┐
            │  │ PRODUCTION │
            │  └────────────┘
            │ ┌─────────────┐
            │ │    LISA     │
            │ └─────────────┘
    GENTLE  │┌──────────────┐
            ││   ORIGINAL   │
            │└──────────────┘
            └─────────────────────────────────────────►
                                               TIME
```

### Total Cost of Ownership (per feature)

| Variant | API Cost | Human Time | Risk of Rework |
|---------|----------|------------|----------------|
| **Original** | $ | 1-2 hours | Medium-High |
| **Production** | $ | 2-3 hours | Low-Medium |
| **Marathon** | $$ | 1 hour | Low |
| **Lisa + Production** | $ | 2-3 hours | Low |
| **Zeroshot** | $$$ | 0.5 hours | Very Low |

### The Sweet Spot Analysis

**For most individual developers:**
- **Lisa + Production Ralph** is the sweet spot
- Planning investment reduces execution rework
- Moderate cost, moderate complexity, good reliability

**For teams needing guarantees:**
- **Zeroshot** provides independent validation
- Higher cost justified by reduced defect rate
- SQLite audit trail for compliance

**For rapid prototyping:**
- **Original Ralph** minimizes everything
- Accept higher rework for faster first-pass
- Good for exploration, not production

---

## 8. Migration Paths

### 8.1 Original → Production

**When to migrate:**
- Tasks are getting more complex
- You want learning to compound
- You're spending time on PRD structure anyway

**Migration steps:**

```bash
# Step 1: Convert PROMPT.md to prd.json
# Your existing:
# - Do task A
# - Do task B
# - Do task C

# Becomes:
{
  "project": "your-project",
  "branchName": "ralph/feature-name",
  "userStories": [
    { "id": "US-001", "title": "Task A", "passes": false },
    { "id": "US-002", "title": "Task B", "passes": false },
    { "id": "US-003", "title": "Task C", "passes": false }
  ]
}

# Step 2: Add AGENTS.md for long-term patterns
echo "# agents.md\n\n## Codebase Patterns" > AGENTS.md

# Step 3: Create archive directory
mkdir -p scripts/ralph/archive

# Step 4: Update prompt.md to reference prd.json
```

**What you gain:**
- Structured task tracking
- Persistent learning via AGENTS.md
- Cross-run archives

**What changes:**
- Must maintain prd.json format
- More upfront structure required

---

### 8.2 Production → Marathon

**When to migrate:**
- Need automatic test generation
- Want Linear integration
- Building complete applications

**Migration steps:**

```bash
# Step 1: Install Marathon Ralph plugin
claude plugin marketplace add gruckion/marathon-ralph
claude plugin install marathon-ralph

# Step 2: Configure Linear MCP
claude mcp add --transport http linear https://mcp.linear.app/mcp

# Step 3: Authenticate Linear
/mcp
# Select linear -> Authenticate

# Step 4: Convert prd.json to specification format
# Your prd.json stories become XML spec features:

<project_specification>
  <project_name>Your Project</project_name>
  <features>
    <feature>Task A from US-001</feature>
    <feature>Task B from US-002</feature>
  </features>
  <success_criteria>
    <criterion>All features work</criterion>
    <criterion>Tests pass</criterion>
  </success_criteria>
</project_specification>

# Step 5: Run marathon
/marathon-ralph:run your-spec.txt
```

**What you gain:**
- Automatic test generation
- Full SDLC phases
- Linear integration
- Crash recovery

**What changes:**
- Linear dependency (required)
- Different task format
- More phases per task
- Higher API cost

---

### 8.3 Any → Lisa (Planning Enhancement)

**When to add Lisa:**
- PRD creation is a bottleneck
- Requirements are often unclear
- Want systematic specification

**Adding Lisa to existing workflow:**

```bash
# Step 1: Install Lisa plugin
/plugin marketplace add blencorp/lisa
/plugin install lisa

# Step 2: Run Lisa interview BEFORE your current workflow
/lisa:plan "Your Feature" --first-principles

# Step 3: Answer interview questions (15-30)

# Step 4: Lisa outputs:
# - docs/specs/your-feature.json  <- Use with Production Ralph
# - docs/specs/your-feature.md    <- Human review

# Step 5: Copy to your Ralph setup
cp docs/specs/your-feature.json scripts/ralph/prd.json

# Step 6: Run your existing Ralph variant
./scripts/ralph/ralph.sh 25
```

**Lisa enhances ANY variant:**

| Your Variant | Lisa's Role |
|--------------|-------------|
| Original | Creates structured PROMPT.md |
| Production | Creates prd.json directly |
| Marathon | Creates spec.txt for decomposition |
| Zeroshot | Creates clear "done" criteria |

---

### 8.4 Any → Zeroshot (Validation Enhancement)

**When to migrate:**
- Need validation guarantees
- Want independent code review
- Compliance requires audit trail

**Migration steps:**

```bash
# Step 1: Install Zeroshot
npm install -g @covibes/zeroshot

# Step 2: Set up provider
zeroshot providers set-default claude

# Step 3: Convert your workflow
# Instead of running Ralph on a prd.json story,
# create a GitHub issue for each task

# Step 4: Run Zeroshot
zeroshot run 123  # GitHub issue number

# Step 5: Review validator feedback
# If rejected, Zeroshot provides findings
# If accepted, code is verified by independent agents
```

**What you gain:**
- Blind validation
- Crash recovery
- Provider flexibility
- Isolation modes

**What changes:**
- Higher API cost
- Need clear done criteria
- Different task format (issues)

---

### Migration Decision Matrix

| From | To | Difficulty | Time | Benefit |
|------|-----|-----------|------|---------|
| Original → Production | Easy | 1 hour | Structured tasks |
| Original → Lisa | Easy | 30 min | Better specs |
| Production → Marathon | Medium | 2 hours | Full SDLC |
| Production → Zeroshot | Medium | 1 hour | Validation |
| Marathon → Zeroshot | Hard | 4+ hours | Both comprehensive |
| Any + Lisa | Easy | 30 min | Better planning |

---

## 9. Code Examples from Each Variant

### 9.1 Original Ralph: The Core Loop

```bash
#!/bin/bash
# Original Ralph - Minimal implementation
# Source: ghuntley.com/ralph/

set -e
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  cat PROMPT.md | claude --dangerously-skip-permissions 2>&1 | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Done!"
    exit 0
  fi

  sleep 5
done

echo "Max iterations reached"
exit 1
```

**PROMPT.md template:**

```markdown
# Ralph Agent Instructions

## Your Task

1. Read the codebase context
2. Pick the highest priority incomplete task
3. Implement that ONE task
4. Run verification: `npm run typecheck && npm run test`
5. Commit if passing
6. Repeat until all tasks complete

## Tasks

- [ ] Add login form
- [ ] Add form validation
- [ ] Connect to auth API

## Stop Condition

If ALL tasks are complete, reply:
<promise>COMPLETE</promise>
```

---

### 9.2 Production Ralph: PRD-Driven Stories

```bash
#!/bin/bash
# Production Ralph - snarktank implementation
# Source: github.com/snarktank/ralph

set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRD_FILE="$SCRIPT_DIR/prd.json"
PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
ARCHIVE_DIR="$SCRIPT_DIR/archive"
LAST_BRANCH_FILE="$SCRIPT_DIR/.last-branch"

# Archive previous run if branch changed
if [ -f "$PRD_FILE" ] && [ -f "$LAST_BRANCH_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null)
  LAST_BRANCH=$(cat "$LAST_BRANCH_FILE" 2>/dev/null)

  if [ -n "$CURRENT_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
    DATE=$(date +%Y-%m-%d)
    FOLDER_NAME=$(echo "$LAST_BRANCH" | sed 's|^ralph/||')
    ARCHIVE_FOLDER="$ARCHIVE_DIR/$DATE-$FOLDER_NAME"

    mkdir -p "$ARCHIVE_FOLDER"
    cp "$PRD_FILE" "$ARCHIVE_FOLDER/" 2>/dev/null || true
    cp "$PROGRESS_FILE" "$ARCHIVE_FOLDER/" 2>/dev/null || true
    echo "Archived to: $ARCHIVE_FOLDER"
  fi
fi

# Track current branch
jq -r '.branchName // empty' "$PRD_FILE" > "$LAST_BRANCH_FILE" 2>/dev/null || true

echo "Starting Ralph - Max iterations: $MAX_ITERATIONS"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "═══════════════════════════════════════════════════════"
  echo "  Ralph Iteration $i of $MAX_ITERATIONS"
  echo "═══════════════════════════════════════════════════════"

  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude --dangerously-skip-permissions 2>&1 | tee /dev/stderr) || true

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Ralph completed all tasks!"
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached ($MAX_ITERATIONS)"
exit 1
```

**prd.json example:**

```json
{
  "project": "TaskApp",
  "branchName": "ralph/task-filters",
  "description": "Add filtering capability to task list",
  "userStories": [
    {
      "id": "US-001",
      "title": "Add task status enum",
      "description": "As a developer, I need status types defined",
      "acceptanceCriteria": [
        "TaskStatus enum with: pending, active, completed",
        "Exported from types.ts",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add status column to tasks table",
      "description": "As a user, I want tasks to have status",
      "acceptanceCriteria": [
        "Migration adds status column with default 'pending'",
        "Uses IF NOT EXISTS for idempotency",
        "npm run db:migrate succeeds",
        "npm run typecheck passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-003",
      "title": "Create filter dropdown component",
      "description": "As a user, I want to filter by status",
      "acceptanceCriteria": [
        "FilterDropdown shows: All, Pending, Active, Completed",
        "Uses shadcn/ui Select component",
        "Verify in browser using dev-browser skill",
        "npm run typecheck passes"
      ],
      "priority": 3,
      "passes": false,
      "notes": ""
    }
  ]
}
```

---

### 9.3 Marathon Ralph: SDLC Phase Agents

**Example init agent (init.md):**

```markdown
# Marathon Ralph - Init Agent

## Your Mission

Convert the provided specification into a Linear project with prioritized issues.

## Six-Phase Workflow

### Phase 1: Specification Analysis
- Extract features and requirements
- Identify technical stack
- Note success criteria

### Phase 2: Project Detection
- Detect language (TypeScript, Python, etc.)
- Detect package manager (bun, npm, pnpm)
- Check for monorepo structure

### Phase 3: Linear Setup
- Create new Linear project
- Select appropriate team
- Set project description

### Phase 4: Issue Breakdown
- Create issues for each feature
- Assign priorities (P0-P3)
- P0: Critical infrastructure
- P1: Core features
- P2: Secondary features
- P3: Polish

### Phase 5: Project Setup (Greenfield only)
- Initialize project structure
- Set up basic configuration

### Phase 6: Finalization
- Create state file at .claude/marathon-ralph.json
- Initialize git if needed
- Output summary

## Priority Guidelines

| Priority | Type | Examples |
|----------|------|----------|
| P0 | Infrastructure | DB schema, core config |
| P1 | Core | Main CRUD operations |
| P2 | Secondary | Filtering, search |
| P3 | Polish | Animations, a11y |

## Output

State file at .claude/marathon-ralph.json with structure:
{
  "active": true,
  "phase": "initialized",
  "project": { "linear_id": "...", "name": "..." },
  "stats": { "completed": 0, "pending": N }
}
```

**Example verify agent (verify.md):**

```markdown
# Marathon Ralph - Verify Agent

## Your Mission

Ensure codebase health before starting new work.

## Five Check Categories

Run ALL of these:

### 1. Unit Tests
```bash
npm run test:unit
```
If fails: Create P1 bug issue

### 2. Integration Tests
```bash
npm run test:integration
```
If fails: Create P1 bug issue

### 3. E2E Tests
```bash
npm run test:e2e
```
If fails: Create P1 bug issue

### 4. Linting
```bash
npm run lint
```
If fails: Create P2 issue

### 5. Type Checking
```bash
npm run typecheck
```
If fails: Create P1 bug issue

## Failure Handling

If ANY check fails:
1. Create Linear bug issue with appropriate priority
2. Set state phase to "blocked"
3. Exit to allow bug fix iteration

## Success Condition

ALL checks pass → Update state → Proceed to PLAN phase
```

---

### 9.4 Lisa: Interview Command

```markdown
# Lisa Plan Command

## Initialization

```bash
/lisa:plan "Feature Name" [--first-principles] [--context file]
```

## Interview Flow

### Scope Definition Questions

- "What are the explicit boundaries of this feature?"
- "What functionality is MVP vs future work?"
- "What is explicitly out of scope?"

### User Stories Questions

- "What discrete features are needed?"
- "For [feature], what are the specific acceptance criteria?"
- "How do we verify [feature] is complete?"

### Technical Questions

- "What data models are required?"
- "What API endpoints are needed?"
- "How should errors be handled?"
- "What authentication/authorization is needed?"

### UX Questions

- "What are the main user flows?"
- "What edge cases should we handle?"
- "How should errors be displayed to users?"

### Trade-off Questions

- "What's the priority: performance or feature completeness?"
- "Any security vs convenience trade-offs?"

### Phase Questions

- "What are the implementation phases (2-4)?"
- "What verification command per phase?"

## Output Generation

When user says "done", "finalize", or "complete":

1. Compile all answers into specification
2. Write docs/specs/{feature}.md
3. Write docs/specs/{feature}.json (Ralph compatible)
4. Write docs/specs/{feature}-progress.txt
5. Delete state file
6. Output "SPEC COMPLETE" and STOP
```

**Lisa output (JSON):**

```json
{
  "project": "user-authentication",
  "branchName": "ralph/user-authentication",
  "description": "Enable secure user registration and login",
  "userStories": [
    {
      "id": "US-001",
      "category": "setup",
      "title": "Database schema for users",
      "description": "As a developer, I need a users table",
      "acceptanceCriteria": [
        "Users table with id, email, password_hash",
        "Email has unique constraint",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

---

### 9.5 Zeroshot: Multi-Agent Validation

**Basic usage:**

```bash
# Implement GitHub issue with validation
zeroshot run 123

# Create PR on completion
zeroshot run 123 --pr

# Full automation: implement, PR, merge
zeroshot run 123 --ship

# With Docker isolation
zeroshot run "Risky refactor" --docker

# Resume interrupted run
zeroshot resume <cluster-id>
```

**Cluster topology configuration (simplified):**

```javascript
// Zeroshot message flow
const workflow = {
  conductor: {
    role: "classifier",
    triggers: ["task_start"],
    outputs: ["complexity_level", "task_type"]
  },

  planner: {
    role: "strategist",
    triggers: ["complexity >= STANDARD"],
    outputs: ["implementation_plan"]
  },

  worker: {
    role: "implementer",
    triggers: ["plan_complete OR simple_task"],
    outputs: ["code_changes"]
  },

  validators: [
    {
      role: "requirements_validator",
      triggers: ["code_changes"],
      context: "BLIND - sees only current files",
      outputs: ["pass_fail", "findings"]
    },
    {
      role: "code_validator",
      triggers: ["code_changes"],
      context: "BLIND - sees only current files",
      outputs: ["pass_fail", "findings"]
    }
  ],

  consensus: {
    triggers: ["all_validators_complete"],
    outputs: ["accept OR reject"]
  }
};
```

**SQLite state query:**

```bash
# View all messages for a cluster
sqlite3 ~/.zeroshot/*.db "
SELECT
  sender,
  topic,
  substr(content, 1, 100) as preview,
  timestamp
FROM messages
WHERE cluster_id = '<your-cluster-id>'
ORDER BY timestamp
"

# Export to markdown
zeroshot export <cluster-id> > debug-output.md
```

---

## 10. Mental Models

### 10.1 The Fresh Context Factory

```
              THE FRESH CONTEXT FACTORY
              ══════════════════════════

    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │   RAW MATERIALS (External State)                        │
    │   • prd.json (task list)                               │
    │   • progress.txt (learnings)                           │
    │   • Git history (code state)                           │
    │   • CLAUDE.md (project context)                        │
    │                                                         │
    └─────────────────────────┬───────────────────────────────┘
                              │
                              ▼
    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │   ASSEMBLY LINE (The Loop)                              │
    │                                                         │
    │   ┌──────────┐   ┌──────────┐   ┌──────────┐          │
    │   │ Worker 1 │   │ Worker 2 │   │ Worker 3 │   ...    │
    │   │ (Fresh)  │   │ (Fresh)  │   │ (Fresh)  │          │
    │   └────┬─────┘   └────┬─────┘   └────┬─────┘          │
    │        │              │              │                 │
    │        │              │              │                 │
    │   Iteration 1    Iteration 2    Iteration 3           │
    │                                                         │
    └─────────────────────────┬───────────────────────────────┘
                              │
                              ▼
    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │   FINISHED PRODUCT (Updated State)                      │
    │   • prd.json (tasks marked complete)                   │
    │   • progress.txt (new learnings added)                 │
    │   • Git history (new commits)                          │
    │   • Working code                                        │
    │                                                         │
    └─────────────────────────────────────────────────────────┘


    KEY INSIGHT:
    Each worker is BRAND NEW.
    Memory is in the MATERIALS, not the WORKERS.
    Quality stays HIGH because context never degrades.
```

**Why this matters:**

Unlike a human who gets tired or an LLM that accumulates context rot, each Ralph iteration starts fresh. The "factory" produces consistent quality because:

1. Workers don't get tired (fresh context)
2. All knowledge is in materials (external state)
3. Any worker can pick up where another left off
4. Failure of one worker doesn't corrupt others

---

### 10.2 The Variant Spectrum

```
              THE VARIANT SPECTRUM
              ════════════════════

    PLANNING ◄────────────────────────────────────► VALIDATION
    FOCUS                                           FOCUS

    ┌───────┐   ┌───────────┐   ┌─────────┐   ┌──────────┐
    │ LISA  │   │ ORIGINAL  │   │MARATHON │   │ ZEROSHOT │
    │       │   │PRODUCTION │   │         │   │          │
    └───────┘   └───────────┘   └─────────┘   └──────────┘
        │              │              │              │
        │              │              │              │
        ▼              ▼              ▼              ▼

    Creates         Executes        Generates      Validates
    specifications  tasks           tests          independently

    ────────────────────────────────────────────────────────────

    HUMAN INVOLVEMENT:

    HIGH ◄─────────────────────────────────────────────► LOW

    Lisa:       Marathon:      Production:    Zeroshot:
    Interview   Spec review    PRD creation   Issue creation
    answers     only           per story      only

    ────────────────────────────────────────────────────────────

    AUTOMATION:

    LOW ◄──────────────────────────────────────────────► HIGH

    Lisa:       Original:      Production:    Marathon:    Zeroshot:
    Planning    Simple loop    PRD loop       Full SDLC    Multi-agent
    only                                                   auto-retry
```

**The insight:**

Each variant optimizes for a different part of the development lifecycle:

| Variant | Optimizes For |
|---------|---------------|
| Lisa | Getting requirements right |
| Original | Simple execution |
| Production | Structured execution |
| Marathon | Complete lifecycle |
| Zeroshot | Validation guarantees |

---

### 10.3 The Complexity Cost Curve

```
              COMPLEXITY vs BENEFIT
              ═════════════════════

    BENEFIT     │
    (Capability │                                  ┌─ Zeroshot
    + Safety)   │                              ┌───┘
                │                          ┌───┘
                │                      ┌───┘  Marathon
                │                  ┌───┘
                │              ┌───┘
                │          ┌───┘
                │      ┌───┘  Production
                │  ┌───┘
                │──┘  Original
                │
                └────────────────────────────────────────────►
                                                      COMPLEXITY
                                                      (Setup + Cost)


    THE DIMINISHING RETURNS INSIGHT:

    Each step up the ladder provides LESS MARGINAL BENEFIT
    for MORE MARGINAL COMPLEXITY.

    Original → Production:
    +50% benefit for +20% complexity  ← GREAT VALUE

    Production → Marathon:
    +30% benefit for +50% complexity  ← GOOD VALUE

    Marathon → Zeroshot:
    +20% benefit for +80% complexity  ← SITUATIONAL VALUE


    CHOOSE BASED ON YOUR CONSTRAINT:

    Cost-constrained?     → Original or Production
    Time-constrained?     → Production or Marathon
    Quality-constrained?  → Marathon or Zeroshot
    Compliance-required?  → Zeroshot
```

---

### 10.4 The Blind Validator Courtroom

```
              THE BLIND VALIDATOR COURTROOM
              ═════════════════════════════

    TRADITIONAL RALPH (Self-Validation):
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ┌─────────────────────────────────────────────┐
    │                                             │
    │   JUDGE (Same Agent)                        │
    │   "Did I write good code? Let me check..."  │
    │   "Well, I meant to do X, and I did X..."   │
    │   "APPROVED!"                               │
    │                                             │
    │   PROBLEM: Conflict of interest             │
    │   • Knows what was intended                 │
    │   • Can rationalize poor implementation     │
    │   • Implicit knowledge biases assessment    │
    │                                             │
    └─────────────────────────────────────────────┘


    ZEROSHOT (Blind Validation):
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ┌─────────────────────────────────────────────┐
    │                                             │
    │   WORKER (Defendant)                        │
    │   - Writes the code                         │
    │   - Knows the intent                        │
    │   - Context-rich                            │
    │                                             │
    │              INFORMATION                    │
    │                BARRIER                      │
    │              ═══════════                    │
    │                                             │
    │   VALIDATOR (Judge)                         │
    │   - Sees ONLY the current files             │
    │   - NO access to worker's reasoning         │
    │   - NO knowledge of intent                  │
    │   - Judges purely on code quality           │
    │                                             │
    │   "Does this code meet the criteria?"       │
    │   "I can only judge what I see."            │
    │   "PASS or FAIL based on evidence."         │
    │                                             │
    └─────────────────────────────────────────────┘


    WHY IT WORKS:

    1. Can't rationalize poor implementation
       (doesn't know what was "meant")

    2. Fresh perspective catches issues
       (no context blindness)

    3. Honest assessment
       (no reason to rubber-stamp)

    4. Actionable rejection feedback
       (specific findings, not excuses)
```

---

## 11. Checkpoints

### Checkpoint 1: After Understanding the Variants

<div class="checkpoint" style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Where you are:** You've read sections 1-4 and understand all five variants conceptually.

**What this enables:** You can now make an informed choice about which variant to use.

**Verify your understanding:**

Can you answer these questions?

| Question | Your Answer Should Include |
|----------|---------------------------|
| What is the core loop of Original Ralph? | `while :; do cat PROMPT.md \| claude ; done` |
| What makes Production Ralph "production"? | prd.json, story sizing, AGENTS.md |
| What does Marathon Ralph generate that others don't? | Tests (unit, integration, E2E) |
| What does Lisa produce? | Specifications in JSON format |
| What is "blind validation" in Zeroshot? | Validators check work without implementation context |

**If you can't answer:**
- Re-read section 4 for the variant you're unclear on
- Focus on the "Architecture" subsection

**This connects to:** Now you're ready to choose a variant (section 6) or compare features (section 5).

</div>

---

### Checkpoint 2: After Choosing a Variant

<div class="checkpoint" style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Where you are:** You've used section 6's decision tree and chosen a variant.

**What this enables:** You can now implement your chosen variant.

**Verify your choice:**

| Check | Description |
|-------|-------------|
| **Constraints match** | Your cost/time constraints align with variant |
| **Dependencies available** | You have required tools (Linear for Marathon, etc.) |
| **Complexity appropriate** | Variant complexity matches your experience |
| **Use case fits** | Variant's optimization matches your need |

**Common mistakes at this stage:**

| Mistake | Why It Happens | Fix |
|---------|----------------|-----|
| Choosing Marathon without Linear | Didn't read dependencies | Check section 4.3 |
| Choosing Zeroshot for simple task | Overkill | Use Original instead |
| Skipping Lisa when specs unclear | Rushing | Planning saves execution time |

**If you're still unsure:**
- Start with Original Ralph (lowest commitment)
- You can always migrate later (section 8)

**This connects to:** Implement your variant using code examples (section 9).

</div>

---

### Checkpoint 3: After First Successful Run

<div class="checkpoint" style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Where you are:** You've completed at least one task using your chosen variant.

**What this enables:** You understand the variant in practice, not just theory.

**Verify your run:**

For **Original Ralph:**
```bash
# Check completion
grep "COMPLETE" output.txt

# Check git history shows commits
git log --oneline -5
```

For **Production Ralph:**
```bash
# Check stories complete
cat prd.json | jq '[.userStories[] | select(.passes == true)] | length'

# Check progress has learnings
wc -l progress.txt  # Should have content
```

For **Marathon Ralph:**
```bash
# Check state file
cat .claude/marathon-ralph.json | jq '.stats'

# Check Linear has "Done" issues
/marathon-ralph:status
```

For **Lisa:**
```bash
# Check outputs exist
ls -la docs/specs/

# Verify JSON is valid
cat docs/specs/*.json | jq .
```

For **Zeroshot:**
```bash
# Check cluster completed
zeroshot list  # Should show completed status

# View validator results
zeroshot export <cluster-id> | grep -A5 "VALIDATOR"
```

**If your run failed:**
- Check troubleshooting section (12)
- Verify you have all dependencies
- Try a simpler task first

**This connects to:** You're ready to scale up or integrate with other patterns (sections 13-14).

</div>

---

### Checkpoint 4: After Integration with Other Patterns

<div class="checkpoint" style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Where you are:** You've combined your Ralph variant with another pattern (Lisa, Gas Town, etc.)

**What this enables:** You're operating at Level 5+ on the complexity ladder.

**Verify your integration:**

| Integration | Success Indicator |
|-------------|-------------------|
| Lisa + Ralph | Lisa JSON used as Ralph prd.json |
| Ralph + Worktrees | Multiple branches progressing in parallel |
| Ralph in Gas Town | Ralph responding to factory task queue |
| Zeroshot + CC Mirror | Different providers for different roles |

**Signs of healthy integration:**

- [ ] State flows correctly between systems
- [ ] Failures are caught and logged
- [ ] You can resume from any point
- [ ] Cost is within expected range

**If integration is failing:**
- Check state file formats match
- Verify network connectivity between components
- Review logs for error messages

**This connects to:** You've mastered Ralph variants and can now customize for your specific needs.

</div>

---

## 12. Troubleshooting Accordion

### Original Ralph Issues

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Loop runs forever without completing</strong>
</summary>

**Symptoms:** Ralph keeps iterating but never outputs `<promise>COMPLETE</promise>`

**Causes:**
1. Completion condition not in prompt
2. Tasks don't have clear "done" criteria
3. Verification always fails

**Solutions:**

```bash
# Check 1: Ensure prompt has stop condition
grep -i "promise" PROMPT.md

# Check 2: Verify tasks have completion criteria
cat PROMPT.md | grep -A3 "Task"

# Check 3: Run verification manually
npm run typecheck && npm run test
```

**Prevention:**
- Always include explicit stop condition in prompt
- Make every task verifiable
- Test verification commands before starting Ralph

</details>

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Context overflow errors</strong>
</summary>

**Symptoms:** Claude returns context limit errors

**Causes:**
1. PROMPT.md too long
2. Codebase too large
3. Task scope too broad

**Solutions:**

```bash
# Check prompt size
wc -c PROMPT.md  # Should be < 10KB

# Check codebase size
find . -name "*.ts" -o -name "*.tsx" | xargs wc -l | tail -1

# Split large tasks
# BAD: "Build entire dashboard"
# GOOD: "Add dashboard route" → "Add metrics component" → etc.
```

**Prevention:**
- Keep PROMPT.md focused
- Use .gitignore to exclude large files
- Split tasks into context-window-sized chunks

</details>

---

### Production Ralph Issues

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Same story fails repeatedly</strong>
</summary>

**Symptoms:** Story US-003 fails 3+ times in a row

**Causes:**
1. Story too large (doesn't fit in context)
2. Acceptance criteria impossible
3. Missing dependency from earlier story

**Solutions:**

```bash
# Check story size - can you describe in 2-3 sentences?
cat prd.json | jq '.userStories[] | select(.id == "US-003")'

# Check if criteria are achievable
# Look for: "works correctly" (too vague)
# Should be: "returns 200 with {field: value}"

# Check dependencies
cat prd.json | jq '.userStories | sort_by(.priority) | .[0:3]'
# Are earlier stories complete?
```

**Prevention:**
- Apply 2-3 sentence rule to all stories
- Make criteria specific and verifiable
- Order stories by dependency (schema → backend → frontend)

</details>

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: progress.txt gets overwritten</strong>
</summary>

**Symptoms:** Learnings from previous iterations disappear

**Causes:**
1. Prompt says "write" instead of "append"
2. Agent misunderstands instruction

**Solutions:**

```bash
# Check prompt wording
grep -i "progress" prompt.md

# Should say:
# "APPEND to progress.txt (never overwrite)"
# Not: "Write learnings to progress.txt"
```

**Prevention:**
- Use explicit language: "APPEND (never overwrite)"
- Check prompt.md template against reference

</details>

---

### Marathon Ralph Issues

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Linear MCP not found</strong>
</summary>

**Symptoms:** Marathon commands fail with MCP connection errors

**Causes:**
1. Linear MCP not installed
2. Linear MCP not authenticated

**Solutions:**

```bash
# Install Linear MCP
claude mcp add --transport http linear https://mcp.linear.app/mcp

# Verify installation
claude mcp list | grep linear

# Authenticate
/mcp
# Select linear → Authenticate → Complete OAuth
```

**Prevention:**
- Complete all setup steps before first run
- Test `/mcp` command before starting marathon

</details>

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Circuit breaker triggers too early</strong>
</summary>

**Symptoms:** Marathon stops after few attempts on difficult task

**Causes:**
1. Default limits too low for your task
2. Repeated errors have same signature

**Solutions:**

```bash
# Check current attempt counts
cat .claude/marathon-ralph.json | jq '.failure_tracking'

# Adjust limits in stop-hook.sh if needed
# Default: 3 attempts for verify/plan/code

# Check for error signature repetition
cat .claude/marathon-ralph.json | jq '.failure_tracking.error_signatures'
```

**Prevention:**
- Understand circuit breaker limits before starting
- For complex tasks, consider adjusting defaults

</details>

---

### Lisa Issues

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Interview goes too long (50+ questions)</strong>
</summary>

**Symptoms:** Lisa keeps asking questions, losing focus

**Causes:**
1. Scope creep during interview
2. No limits set

**Solutions:**

```bash
# Limit questions
/lisa:plan "Feature" --max-questions 20

# Or steer during interview
"Let's focus on MVP only. Out of scope: [list]"
```

**Prevention:**
- Use `--max-questions` for time-boxed interviews
- Define scope early in interview

</details>

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: JSON output incompatible with Ralph</strong>
</summary>

**Symptoms:** Production Ralph can't parse Lisa's JSON

**Causes:**
1. Version mismatch
2. Custom Ralph setup expects different format

**Solutions:**

```bash
# Check Lisa output format
cat docs/specs/feature.json | jq 'keys'
# Expected: ["branchName", "description", "project", "userStories"]

# Compare with Ralph expectation
cat scripts/ralph/prd.json.example | jq 'keys'
```

**Prevention:**
- Use latest Lisa version
- Verify JSON compatibility before workflow

</details>

---

### Zeroshot Issues

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Validators always reject</strong>
</summary>

**Symptoms:** Every validation cycle returns REJECT

**Causes:**
1. Acceptance criteria too vague
2. Done criteria not defined
3. Worker output doesn't match expectations

**Solutions:**

```bash
# Check validator findings
zeroshot export <cluster-id> | grep -A10 "REJECT"

# Review criteria clarity
# BAD: "Works correctly"
# GOOD: "Returns 200 with { success: true }"

# Ensure done is verifiable
# "If you cannot describe what 'done' means, validators cannot verify it"
```

**Prevention:**
- Write specific, testable criteria
- Include exact expected outputs
- Test criteria manually first

</details>

<details>
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065; border-radius: 8px; margin: 0.5rem 0;">
<strong>Problem: Docker isolation fails</strong>
</summary>

**Symptoms:** `--docker` flag causes errors

**Causes:**
1. Docker daemon not running
2. Credentials not mounted
3. Resource limits

**Solutions:**

```bash
# Check Docker is running
docker info

# Mount credentials explicitly
zeroshot run 123 --docker --mount gh --mount aws

# Check Docker resource allocation
docker system info | grep -A5 "Resources"
```

**Prevention:**
- Start Docker Desktop before running
- Know which credentials your project needs

</details>

---

## 13. Integration Patterns

### 13.1 Lisa + Ralph Pipeline

The most common integration - planning followed by execution:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LISA + RALPH PIPELINE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  STEP 1: Run Lisa interview                                        │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ /lisa:plan "My Feature" --first-principles                   │  │
│  │                                                               │  │
│  │ [Answer 15-30 questions]                                      │  │
│  │ [Say "done" when complete]                                    │  │
│  │                                                               │  │
│  │ Output: docs/specs/my-feature.json                            │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  STEP 2: Copy spec to Ralph location                               │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ cp docs/specs/my-feature.json scripts/ralph/prd.json         │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  STEP 3: Run Ralph loop                                            │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ ./scripts/ralph/ralph.sh 25                                  │  │
│  │                                                               │  │
│  │ Ralph reads prd.json, executes user stories                   │  │
│  │ Marks passes: true as each completes                          │  │
│  │ Outputs <promise>COMPLETE</promise> when done                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Benefits:**
- Lisa ensures PRD quality before execution
- Production Ralph optimized for Lisa's output format
- Clear handoff point for human review

**Setup:**
```bash
# One-time setup
/plugin marketplace add blencorp/lisa
/plugin install lisa
mkdir -p scripts/ralph docs/specs

# Per-feature workflow
/lisa:plan "Feature Name"
# ... answer questions ...
cp docs/specs/feature-name.json scripts/ralph/prd.json
./scripts/ralph/ralph.sh 25
```

---

### 13.2 Ralph + Git Worktrees (Parallel Ralph)

Run multiple Ralph instances on separate branches:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PARALLEL RALPH WITH WORKTREES                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MAIN REPO                 WORKTREE 1              WORKTREE 2      │
│  ./project/               ./project-auth/         ./project-api/   │
│  (coordination)           (auth feature)          (api feature)    │
│                                                                     │
│  ┌─────────────┐          ┌─────────────┐        ┌─────────────┐  │
│  │ Main branch │          │feature/auth │        │feature/api  │   │
│  │             │          │             │        │             │   │
│  │ ┌─────────┐ │          │ ┌─────────┐ │        │ ┌─────────┐ │   │
│  │ │Planning │ │          │ │ Ralph   │ │        │ │ Ralph   │ │   │
│  │ │ Review  │ │          │ │ Loop 1  │ │        │ │ Loop 2  │ │   │
│  │ └─────────┘ │          │ └─────────┘ │        │ └─────────┘ │   │
│  └──────┬──────┘          └──────┬──────┘        └──────┬──────┘   │
│         │                        │                      │          │
│         │                        ▼                      ▼          │
│         │                   ┌────────┐            ┌────────┐      │
│         │                   │  PR 1  │            │  PR 2  │      │
│         │                   └────┬───┘            └────┬───┘      │
│         │                        │                      │          │
│         ▼                        └──────────┬───────────┘          │
│    ┌────────────────────────────────────────▼──────────────────┐   │
│    │                    MERGED TO MAIN                          │   │
│    └────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Setup:**
```bash
# Create worktrees
git worktree add ../project-auth feature/auth
git worktree add ../project-api feature/api

# Terminal 1
cd ../project-auth
./scripts/ralph/ralph.sh 25

# Terminal 2
cd ../project-api
./scripts/ralph/ralph.sh 25

# Cleanup when done
git worktree remove ../project-auth
git worktree remove ../project-api
```

**Benefits:**
- True parallelization
- Isolated file systems
- Separate git histories
- No context bleeding

**Cautions:**
- Watch API rate limits
- Coordinate shared resources
- Merge conflicts possible

---

### 13.3 Ralph in Gas Town

Using Ralph as a worker ("Dog") in Steve Yegge's factory pattern:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    RALPH IN GAS TOWN FACTORY                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  GAS TOWN ARCHITECTURE:                                             │
│                                                                     │
│  ┌───────────────┐                                                 │
│  │    MAYOR      │  Coordination, task routing                      │
│  │    (Opus)     │                                                  │
│  └───────┬───────┘                                                 │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                 │
│  │   REFINERY    │  Decomposes features into tasks                 │
│  │   (Opus)      │                                                  │
│  └───────┬───────┘                                                 │
│          │                                                          │
│          ├──────────────────┬────────────────────┐                 │
│          │                  │                    │                  │
│          ▼                  ▼                    ▼                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│  │ RALPH DOG 1 │    │ RALPH DOG 2 │    │ RALPH DOG 3 │            │
│  │ (Module A)  │    │ (Module B)  │    │ (Module C)  │             │
│  │             │    │             │    │             │             │
│  │ Own worktree│    │ Own worktree│    │ Own worktree│            │
│  │ Own prd.json│    │ Own prd.json│    │ Own prd.json│            │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘            │
│         │                  │                    │                   │
│         └──────────────────┼────────────────────┘                  │
│                            │                                        │
│                            ▼                                        │
│                   ┌─────────────────┐                              │
│                   │     DEACON      │  Integration, quality gate    │
│                   │     (Opus)      │                               │
│                   └─────────────────┘                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Configuration concept:**
```yaml
# gas-town-config.yaml
dogs:
  ralph-module-a:
    role: "implementation"
    command: "./ralph.sh"
    worktree: "../module-a"
    input: "tasks/module-a-prd.json"
    output: "pull_request"

  ralph-module-b:
    role: "implementation"
    command: "./ralph.sh"
    worktree: "../module-b"
    input: "tasks/module-b-prd.json"
    output: "pull_request"

coordination:
  mayor: true
  refinery: true
  deacon: true  # Integration checks
```

**Benefits:**
- Factory-scale parallelization
- Coordination handles dependencies
- Quality gates via Deacon
- Multiple features in parallel

**Complexity:** High
**Value:** Very High for large projects

---

### 13.4 Zeroshot + Multi-Model

Leveraging Zeroshot's provider agnosticism for optimization:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ZEROSHOT MULTI-MODEL OPTIMIZATION                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ROLE-BASED MODEL SELECTION:                                        │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │  CONDUCTOR  │  │   PLANNER   │  │   WORKER    │                │
│  │             │  │             │  │             │                 │
│  │  Claude     │  │  Claude     │  │  Claude     │                │
│  │  Haiku      │  │  Opus       │  │  Sonnet     │                │
│  │  (Fast)     │  │  (Smart)    │  │  (Balanced) │                │
│  │             │  │             │  │             │                 │
│  │  Cost: $    │  │  Cost: $$$  │  │  Cost: $$   │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │ VALIDATOR 1 │  │ VALIDATOR 2 │  │ VALIDATOR 3 │                │
│  │             │  │             │  │             │                 │
│  │  Gemini     │  │  Codex      │  │  Claude     │                │
│  │  Flash      │  │  Mini       │  │  Haiku      │                │
│  │             │  │             │  │             │                 │
│  │  Cost: $    │  │  Cost: $    │  │  Cost: $    │                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
│                                                                     │
│  CONFIGURATION:                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ ZEROSHOT_CONDUCTOR_PROVIDER=claude                           │  │
│  │ ZEROSHOT_CONDUCTOR_MODEL=level1  # Haiku                     │  │
│  │                                                               │  │
│  │ ZEROSHOT_PLANNER_PROVIDER=claude                             │  │
│  │ ZEROSHOT_PLANNER_MODEL=level3    # Opus                      │  │
│  │                                                               │  │
│  │ ZEROSHOT_WORKER_PROVIDER=claude                              │  │
│  │ ZEROSHOT_WORKER_MODEL=level2     # Sonnet                    │  │
│  │                                                               │  │
│  │ # Validators can be different providers entirely              │  │
│  │ ZEROSHOT_VALIDATOR_PROVIDER=codex                            │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  COST OPTIMIZATION:                                                 │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │  Single-provider (all Opus):     $$$$$                       │  │
│  │  Optimized multi-model:          $$$                         │  │
│  │                                                               │  │
│  │  SAVINGS: ~40% without sacrificing quality                   │  │
│  │                                                               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Benefits:**
- Cost optimization per role
- Best model for each job
- A/B test different providers
- No code changes to switch

---

## 14. Combination Matrix

### Pattern Combination Value Matrix

| Base Pattern | + Lisa | + Worktrees | + Gas Town | + HUD | + Zeroshot |
|--------------|--------|-------------|------------|-------|------------|
| **Original Ralph** | HIGH | MEDIUM | MEDIUM | LOW | N/A |
| **Production Ralph** | HIGH | HIGH | HIGH | MEDIUM | N/A |
| **Marathon Ralph** | MEDIUM | MEDIUM | HIGH | HIGH | N/A |
| **Lisa** | N/A | N/A | HIGH | HIGH | N/A |
| **Zeroshot** | HIGH | BUILT-IN | HIGH | HIGH | N/A |

### Recommended Combinations by Use Case

| Use Case | Recommended Stack | Complexity |
|----------|-------------------|------------|
| **Solo developer, simple features** | Original Ralph | Low |
| **Solo developer, complex features** | Lisa + Production Ralph | Medium |
| **Solo developer, full apps** | Lisa + Marathon Ralph | Medium-High |
| **Solo developer, validation needed** | Lisa + Zeroshot | High |
| **Team, parallel features** | Production Ralph + Worktrees | Medium |
| **Team, factory-scale** | Lisa + Production Ralph + Gas Town | Very High |
| **Enterprise, compliance** | Lisa + Zeroshot + HUD | Very High |

### Anti-Patterns to Avoid

| Combination | Why It's Bad |
|-------------|--------------|
| Marathon + Zeroshot | Redundant validation, excessive cost |
| Original + Gas Town | Factory overhead for simple loop |
| Lisa only | Planning without execution |
| Zeroshot for trivial tasks | Overhead >> benefit |
| Multiple Ralphs same branch | Git conflicts, state confusion |

### The Optimal Progression

```
START
  │
  ▼
Original Ralph (learn the concepts)
  │
  ▼
Lisa + Original (better planning)
  │
  ▼
Lisa + Production Ralph (structured execution)
  │
  ├─────────────────────────────────┬─────────────────────┐
  │                                 │                     │
  ▼                                 ▼                     ▼
Production Ralph + Worktrees    Marathon Ralph        Zeroshot
(parallel features)             (full SDLC)          (validation)
  │                                 │                     │
  └─────────────────────────────────┴─────────────────────┘
                                    │
                                    ▼
                             Gas Town Factory
                          (team-scale automation)
```

---

## 15. Source Attribution

### Primary Extraction Sources

| Variant | Extraction File | Source URL |
|---------|----------------|------------|
| Original Ralph | `extractions/orchestration/025-ralph-original.md` | ghuntley.com/ralph/ |
| Production Ralph | `extractions/orchestration/026-ralph-production.md` | github.com/snarktank/ralph |
| Marathon Ralph | `extractions/orchestration/028-marathon-ralph.md` | github.com/gruckion/marathon-ralph |
| Lisa | `extractions/orchestration/029-lisa-ralph.md` | github.com/blencorp/lisa |
| Zeroshot | `extractions/orchestration/030-zeroshot-ralph.md` | github.com/covibes/zeroshot |

### Related Synthesis Documents

| Document | Path | Relevance |
|----------|------|-----------|
| Ralph Complete Mastery | `synthesis/mastery-ralph-complete.md` | Deep dive on Production Ralph |
| Complexity Ladder | `synthesis/architecture-complexity-ladder.md` | Level definitions |
| Judgment Guide | `synthesis/JUDGMENT-GUIDE.md` | Architectural decisions |
| Master Playbook | `synthesis/MASTER-PLAYBOOK.md` | Full capability progression |

### Key Contributors

| Person | Role | Contributions |
|--------|------|---------------|
| **Geoffrey Huntley** | Creator | Original Ralph concept, ghuntley.com/ralph |
| **Matt Pocock** | Popularizer | 11 tips, PRD format, viral content |
| **Ryan Carson** | Production | snarktank/ralph, story sizing |
| **Stephen Rayner** | Marathon | gruckion/marathon-ralph, SDLC |
| **Mike Endale** | Lisa | blencorp/lisa, specification interviews |
| **covibes** | Zeroshot | Multi-agent validation |

### Community Resources

| Resource | Type | URL |
|----------|------|-----|
| Anthropic Ralph Plugin | Official | github.com/anthropics/claude-code/plugins/ralph-wiggum |
| Awesome Claude AI | Community | awesomeclaude.ai/ralph-wiggum |
| Matt Pocock 11 Tips | Guide | aihero.dev/tips-for-ai-coding-with-ralph-wiggum |
| snarktank Documentation | Interactive | snarktank.github.io/ralph/ |

### Reliability Ratings

| Source | Rating | Notes |
|--------|--------|-------|
| ghuntley.com/ralph | Very High | Primary source, creator |
| snarktank/ralph | Very High | 4.9k stars, production use |
| marathon-ralph | High | Active development, documented |
| blencorp/lisa | High | Well-documented plugin |
| covibes/zeroshot | High | Comprehensive architecture |

---

## 16. Quick Reference Card

```
╔══════════════════════════════════════════════════════════════════════════╗
║                     RALPH VARIANTS QUICK REFERENCE                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  ORIGINAL RALPH                                                          ║
║  ──────────────                                                          ║
║  while :; do cat PROMPT.md | claude ; done                               ║
║  Level: 3  |  Cost: $  |  Setup: 15 min                                  ║
║  Best for: Learning, simple tasks                                        ║
║                                                                          ║
║  PRODUCTION RALPH (snarktank)                                            ║
║  ────────────────────────────                                            ║
║  prd.json + story sizing + AGENTS.md                                     ║
║  Level: 3-4  |  Cost: $  |  Setup: 30 min                                ║
║  Best for: Feature development, teams                                    ║
║                                                                          ║
║  MARATHON RALPH (gruckion)                                               ║
║  ─────────────────────────                                               ║
║  VERIFY → PLAN → CODE → TEST → QA → EXIT                                 ║
║  Level: 5  |  Cost: $$  |  Setup: 1+ hour  |  Requires: Linear           ║
║  Best for: Full applications, test generation                            ║
║                                                                          ║
║  LISA (blencorp)                                                         ║
║  ───────────────                                                         ║
║  /lisa:plan "Feature" --first-principles                                 ║
║  Level: 3.5  |  Cost: $  |  Setup: 10 min  |  Output: prd.json           ║
║  Best for: Creating specifications before Ralph                          ║
║                                                                          ║
║  ZEROSHOT (covibes)                                                      ║
║  ─────────────────                                                       ║
║  zeroshot run 123 --pr                                                   ║
║  Level: 5-6  |  Cost: $$$  |  Setup: 30 min  |  Features: Blind valid.   ║
║  Best for: Validation guarantees, multi-provider                         ║
║                                                                          ║
║──────────────────────────────────────────────────────────────────────────║
║                                                                          ║
║  DECISION QUICK GUIDE:                                                   ║
║                                                                          ║
║  No PRD?           → Lisa first                                          ║
║  Simple task?      → Original Ralph                                      ║
║  Multi-story?      → Production Ralph                                    ║
║  Need tests?       → Marathon Ralph                                      ║
║  Need validation?  → Zeroshot                                            ║
║                                                                          ║
║──────────────────────────────────────────────────────────────────────────║
║                                                                          ║
║  KEY COMMANDS:                                                           ║
║                                                                          ║
║  # Original                                                              ║
║  ./ralph.sh 25                                                           ║
║                                                                          ║
║  # Production                                                            ║
║  cat prd.json | jq '.userStories[] | {id, passes}'                       ║
║                                                                          ║
║  # Marathon                                                              ║
║  /marathon-ralph:run spec.txt                                            ║
║  /marathon-ralph:status                                                  ║
║                                                                          ║
║  # Lisa                                                                  ║
║  /lisa:plan "Feature"                                                    ║
║  /lisa:resume                                                            ║
║                                                                          ║
║  # Zeroshot                                                              ║
║  zeroshot run 123 --pr                                                   ║
║  zeroshot resume <cluster-id>                                            ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Document** | compare-ralph-variants-complete.md |
| **Type** | Synthesis Comparison |
| **Created** | 2026-01-19 |
| **Version** | 1.0 |
| **Line Count** | 2,500+ |
| **Input Files** | 5 extraction documents |
| **Total Source Lines** | ~4,000 |
| **Categories Covered** | orchestration |
| **Complexity Levels** | 3-6 |
| **Status** | Complete |

---

## Tags

`#synthesis` `#ralph-wiggum` `#orchestration` `#comparison` `#original-ralph` `#production-ralph` `#marathon-ralph` `#lisa` `#zeroshot` `#decision-guide` `#migration` `#integration-patterns` `#mental-models`

---

*This synthesis document combines insights from all five Ralph variant extractions to provide a comprehensive decision-making resource. For deeper dives on individual variants, see the source extraction files listed in Section 15.*
