# Task Decomposition for AI Agents: Comprehensive Research

**Purpose:** Exhaustive guide to breaking work into agent-sized chunks for Claude Code and similar AI coding agents.

**Last Updated:** 2026-01-09

---

## Table of Contents

1. [Why Task Decomposition Matters](#why-task-decomposition-matters)
2. [Task Sizing Heuristics](#task-sizing-heuristics)
3. [PRD Strategies for AI Agents](#prd-strategies-for-ai-agents)
4. [Acceptance Criteria Patterns](#acceptance-criteria-patterns)
5. [Dependency Management](#dependency-management)
6. [Priority Ordering Strategies](#priority-ordering-strategies)
7. [Atomic, Verifiable Chunks](#atomic-verifiable-chunks)
8. [Test-Driven Task Specification](#test-driven-task-specification)
9. [Multi-Run Task Handling](#multi-run-task-handling)
10. [Context Window Estimation](#context-window-estimation)
11. [Token Budgeting](#token-budgeting)
12. [Good vs Bad Decomposition Examples](#good-vs-bad-decomposition-examples)
13. [TodoWrite vs External Task Management](#todowrite-vs-external-task-management)
14. [Tools and Frameworks](#tools-and-frameworks)

---

## Why Task Decomposition Matters

### The Core Problem

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted"
> -- Anthropic Best Practices

AI agents fail when:
1. **Tasks exceed context window** - Quality degrades as tokens accumulate ("context rot")
2. **Verification is impossible** - Vague criteria lead to false "done" signals
3. **Dependencies are unclear** - Agent tries to build on non-existent foundations
4. **Scope is ambiguous** - Agent wanders, context fills with tangents

### The Solution: Atomic, Verifiable Work Units

Task decomposition transforms large goals into **small, well-defined, verifiable chunks** that:
- Fit within one context window
- Have clear success criteria
- Can be independently tested
- Build on each other in proper order

---

## Task Sizing Heuristics

### The Golden Rule

> "Each story must be completable in ONE iteration (~one context window)"
> -- Ryan Carson, Ralph Loop

### Sizing Criteria

#### Right-Sized Tasks (GOOD)
- Add a database column + migration
- Create a single UI component
- Implement one API endpoint
- Write tests for one function
- Add a filter dropdown to an existing list
- Update server action with new logic
- Fix a specific, isolated bug

#### Too Large (BAD - Split These)
- "Build the entire dashboard" -> schema, queries, UI, filters, permissions
- "Add authentication" -> schema, middleware, login UI, sessions, forgot password
- "Refactor the API" -> one story per endpoint group
- "Implement feature X" -> requires definition of what X entails

### The 2-3 Sentence Test

**If you can't describe the task in 2-3 sentences, it's too big.**

Good: "Add investorType column to users table with default value 'cold'. Create migration. Run npm typecheck."

Bad: "Implement the investor management system with types, filtering, and reporting."

### Context Window Considerations

Tasks must leave room for:
1. **Initial understanding** - Reading codebase context (~10-20% of window)
2. **Implementation** - Actual code changes (~30-40%)
3. **Testing** - Running tests, interpreting results (~20-30%)
4. **Tool overhead** - MCP tools, file operations, git commands (~10-20%)
5. **Buffer** - Debugging, retries, edge cases (~20%)

### Matt Pocock's Insight

> "Context rot: LLMs get stupider with more tokens. If tasks are too big, fill context window before done, quality drops dramatically, agent loses track."

---

## PRD Strategies for AI Agents

### The JSON PRD Format

#### Source: Ryan Carson / Anthropic Best Practices

```json
{
  "project": "MyApp",
  "branchName": "feature/user-auth",
  "description": "User Authentication System",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login endpoint",
      "description": "As a user, I need a login endpoint that validates credentials",
      "acceptanceCriteria": [
        "POST /api/auth/login accepts email + password",
        "Returns JWT on success",
        "Returns 401 on invalid credentials",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add password hashing",
      "description": "Passwords must be hashed before storage",
      "acceptanceCriteria": [
        "bcrypt with 12 rounds",
        "No plaintext passwords in database",
        "Existing tests still pass"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### Why JSON Over Markdown for PRDs

| Aspect | JSON | Markdown |
|--------|------|----------|
| Parsing | Deterministic | Ambiguous |
| Updates | Structured | Risk of malformed edits |
| State tracking | `passes: true/false` | Manual checkboxes |
| LLM reliability | Higher | Lower |

### The prd.json + progress.txt Pattern

```
plans/
├── prd.json        # Task definitions and state
└── progress.txt    # Append-only learnings log
```

**progress.txt purpose:**
- Notes for "the next person" (next iteration)
- Patterns discovered
- Gotchas to avoid
- APPEND only, never update

### Alternative: Structured Markdown

```markdown
# PRD: User Authentication

## Tasks

### [US-001] Create Login Endpoint
- **Status:** pending
- **Priority:** 1
- **Criteria:**
  - POST /api/auth/login works
  - Returns JWT
  - npm run typecheck passes

### [US-002] Password Hashing
- **Status:** pending
- **Priority:** 2
- **Blocked by:** US-001
- **Criteria:**
  - bcrypt 12 rounds
  - No plaintext
```

---

## Acceptance Criteria Patterns

### The Fundamental Principle

> "Acceptance criteria must be VERIFIABLE by the agent itself"

### Good Criteria (Verifiable)

```json
{
  "acceptanceCriteria": [
    "Column 'investorType' exists with default 'cold'",
    "npm run typecheck passes",
    "npm run test passes",
    "Filter dropdown shows options: All, Cold, Friend, Family",
    "Clicking 'Cold' filters list to cold investors only",
    "API returns 200 for valid input",
    "API returns 400 with error message for invalid input"
  ]
}
```

### Bad Criteria (Vague)

```json
{
  "acceptanceCriteria": [
    "Works correctly",
    "Good UX",
    "Handles edge cases",
    "Feels snappy",
    "Looks nice"
  ]
}
```

### The Typecheck Mandate

**ALWAYS include a verification command as final criterion:**

```json
"acceptanceCriteria": [
  "...",
  "npm run typecheck passes",
  "npm run test passes"
]
```

### Browser-Verifiable Criteria

For UI tasks, include browser verification steps:

```json
{
  "acceptanceCriteria": [
    "Navigate to /dashboard",
    "Click 'Add Item' button",
    "Modal appears with form",
    "Fill form and submit",
    "Item appears in list",
    "Page does not error in console"
  ]
}
```

### Negative Criteria

Specify what should NOT happen:

```json
{
  "acceptanceCriteria": [
    "No console errors",
    "No TypeScript errors",
    "Does not break existing tests",
    "Does not modify unrelated files"
  ]
}
```

---

## Dependency Management

### The Native Solution: TaskCreate Dependencies

From Claude Code's native (beta) task management:

```
TaskCreate  -> Create with blockedBy/blocks relationships
TaskUpdate  -> addBlocks, addBlockedBy
```

**Visual output:**
```
Tasks:
 #1 Design API architecture
 #2 Create project structure
 #3 Implement data models
 #4 Implement REST endpoints (blocked by #3)
 #5 Write integration tests (blocked by #4)
 #6 Create documentation (blocked by #4)
```

### Manual Dependency Declaration

In prd.json:

```json
{
  "userStories": [
    {
      "id": "US-001",
      "title": "Schema changes",
      "blockedBy": [],
      "blocks": ["US-002", "US-003"]
    },
    {
      "id": "US-002",
      "title": "Backend logic",
      "blockedBy": ["US-001"],
      "blocks": ["US-003", "US-004"]
    },
    {
      "id": "US-003",
      "title": "UI components",
      "blockedBy": ["US-001", "US-002"],
      "blocks": []
    }
  ]
}
```

### Dependency Types

1. **Hard dependencies** - Cannot start until blocker complete
2. **Soft dependencies** - Can start, but may need revision
3. **Parallel candidates** - No dependencies, can run simultaneously

### Detecting Missing Dependencies

Watch for agent failures that indicate missing dependencies:
- "Cannot find type X" -> Schema task not complete
- "Function Y is not defined" -> Backend task incomplete
- "Module not found" -> Missing setup task

---

## Priority Ordering Strategies

### The Kanban Mental Model

> "Pick task from board -> Complete -> Back to board -> All done? Exit : Loop"
> -- Matt Pocock

### Standard Priority Order

```
1. Schema/database changes (migrations)
2. Server actions / backend logic
3. Shared utilities and helpers
4. UI components that use the backend
5. Dashboard/summary views that aggregate
6. Tests and documentation
```

### Priority Signals

| Priority | Characteristics |
|----------|-----------------|
| P0 | Blocks everything else |
| P1 | Core functionality, few dependencies |
| P2 | Builds on P1, enables P3 |
| P3 | Nice-to-have, depends on P1/P2 |

### Dynamic Reordering

Agent should reorder based on:
- Completed dependencies
- Discovered blockers
- Failed attempts (may need prerequisite)

### Anti-Pattern: Wrong Order

**WRONG:**
```
1. UI component (depends on schema)
2. Schema changes (should be first!)
```

**RIGHT:**
```
1. Schema changes
2. Backend logic using schema
3. UI component using backend
```

---

## Atomic, Verifiable Chunks

### Definition

An **atomic chunk** is:
1. Self-contained - Does not require external changes
2. Testable - Can verify completion independently
3. Committable - Makes sense as a single git commit
4. Reversible - Can be rolled back cleanly

### Breaking Down Features

#### Feature: "Add user comments to posts"

**Wrong (Monolithic):**
```
- Add comments feature
```

**Right (Atomic):**
```
1. Add comments table + migration
2. Add Comment model with validations
3. Create POST /api/comments endpoint
4. Create GET /api/posts/:id/comments endpoint
5. Create CommentList component
6. Create CommentForm component
7. Integrate comments into PostPage
8. Add tests for comment CRUD
```

### The Commit Test

> "If you can't describe this as a single commit message, break it down further"

Good commit: "Add comments table with user_id and post_id foreign keys"
Bad commit: "Add comments feature with UI and API"

### Verification at Each Step

Each chunk must have a verification:

```json
{
  "chunks": [
    {
      "task": "Add comments table",
      "verify": "npx prisma migrate status shows no pending migrations"
    },
    {
      "task": "Add Comment model",
      "verify": "npm run typecheck passes"
    },
    {
      "task": "POST /api/comments",
      "verify": "curl -X POST returns 201"
    }
  ]
}
```

---

## Test-Driven Task Specification

### TDD for Agents

Write the test first, task becomes "make this test pass":

```json
{
  "task": "Implement addNumbers function",
  "test": "tests/math.test.ts already contains: expect(addNumbers(2,3)).toBe(5)",
  "acceptanceCriteria": [
    "npm run test -- math.test passes"
  ]
}
```

### The Feedback Loop

```
┌─────────────────────────────────────────┐
│  1. Write failing test (or given test)  │
│  2. Agent implements code               │
│  3. Run test                            │
│  4. If fail: Agent fixes, goto 3        │
│  5. If pass: Mark complete, next task   │
└─────────────────────────────────────────┘
```

### Required Test Types

| Code Type | Test Method |
|-----------|-------------|
| Backend | Unit tests (Jest, pytest) |
| API | Integration tests, curl |
| Frontend | Playwright, Cypress |
| Types | TypeScript compiler |
| Linting | ESLint, Prettier |

### Anthropic's Observation

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"

### Browser Automation as TDD

For UI tasks, use Playwright MCP:

```json
{
  "task": "Add delete confirmation dialog",
  "acceptanceCriteria": [
    "Click delete button",
    "Confirmation dialog appears",
    "Click 'Cancel' closes dialog",
    "Click 'Confirm' deletes item",
    "Item no longer in list"
  ],
  "verification": "Run Playwright test suite"
}
```

---

## Multi-Run Task Handling

### The Problem

Some tasks are inherently too large for one context window:
- Large refactors
- Multi-file migrations
- Complex features with many moving parts

### The Ralph Loop Solution

**Principle:** Fresh context per iteration, continuity via external state.

```
┌─────────────────────────────────────────────────────┐
│  PRD.md  →  prd.json  →  Ralph Loop  →  Shipped    │
│                              ↓                      │
│            ┌────────────────────────────┐          │
│            │  Iteration 1 (fresh agent) │          │
│            │  → Pick next story         │          │
│            │  → Implement               │          │
│            │  → Test                    │          │
│            │  → Commit if passing       │          │
│            │  → Update prd.json         │          │
│            │  → Log to progress.txt     │          │
│            └────────────────────────────┘          │
│                        ↓ repeat                    │
│            ┌────────────────────────────┐          │
│            │  Iteration N               │          │
│            │  → All stories pass?       │          │
│            │  → COMPLETE                │          │
│            └────────────────────────────┘          │
└─────────────────────────────────────────────────────┘
```

### State Persistence Across Runs

Continuity comes from external sources, not LLM memory:

| State Type | Storage |
|------------|---------|
| Code changes | Git history |
| Task status | prd.json (`passes: true/false`) |
| Learnings | progress.txt (append-only) |
| Context | CLAUDE.md, README |

### The Script Pattern

```bash
#!/bin/bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  echo "Starting iteration $CURRENT_ITERATION"

  claude "Review plans/prd.json and progress.txt.
    Work on ONE story.
    Run tests.
    Commit if passing.
    Update prd.json.
    Log to progress.txt.
    If all complete: output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    echo "All stories complete!"
    break
  fi

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done
```

### Checkpointing

For crash recovery:

```json
{
  "checkpoint": {
    "lastCompleted": "US-003",
    "currentAttempt": "US-004",
    "attemptCount": 2,
    "lastError": "TypeError: Cannot read property..."
  }
}
```

---

## Context Window Estimation

### Token Budget Framework

**Claude's context window:** ~200K tokens (effective working window smaller)

**Recommended allocation:**
```
Total Available: ~100K effective tokens
├── System prompt + CLAUDE.md:   ~5K (5%)
├── Codebase context:            ~20K (20%)
├── Current task description:    ~2K (2%)
├── Working memory (exploration): ~30K (30%)
├── Tool outputs:                ~20K (20%)
├── Code generation:             ~15K (15%)
└── Buffer for retries:          ~8K (8%)
```

### Estimating Task Token Cost

| Activity | Approximate Tokens |
|----------|-------------------|
| Reading a file | ~1K per 50 lines |
| Git diff | ~500 per small change |
| Test output | ~2K per test run |
| Error messages | ~500 per error |
| MCP tool call | ~1K overhead |

### When to Split Tasks

Split if estimated token cost exceeds:
- **40K tokens** for implementation + testing
- **10 files** need modification
- **5+ test runs** expected
- **3+ MCP tool sequences** required

### Signs of Context Overflow

- Agent repeats earlier statements
- Agent forgets recent changes
- Quality of output degrades
- Agent "hallucinates" non-existent code
- Agent marks incomplete work as done

---

## Token Budgeting

### The 60/20/20 Rule

For each task iteration:
- **60%** - Implementation (writing, editing code)
- **20%** - Verification (running tests, checking results)
- **20%** - Recovery (handling errors, retries)

### Cost Estimation

```
Task Size    | Estimated Cost | Iterations
-------------|----------------|------------
Small (1 fn) | $0.10-0.30    | 1
Medium (1 component) | $0.30-1.00 | 1-2
Large (feature) | $1-5.00    | 3-10
XL (system)  | $5-50+        | 10-50+
```

### Budget Controls

**ralph.sh with iteration limit:**
```bash
./ralph.sh 25  # Maximum 25 iterations (~$25-50 budget)
```

**Cost per iteration:**
- Opus 4.5: ~$0.50-2.00 per iteration
- Sonnet: ~$0.10-0.50 per iteration

### Warning Signs of Budget Bleed

1. Same task attempted 3+ times without progress
2. Agent exploring tangential files
3. Long explanation outputs
4. Excessive tool calls

---

## Good vs Bad Decomposition Examples

### Example 1: User Dashboard

#### BAD Decomposition

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Build user dashboard",
      "description": "Create the user dashboard with all features"
    }
  ]
}
```

**Problems:**
- No clear scope
- No verifiable criteria
- Could mean anything
- Will overflow context

#### GOOD Decomposition

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Add dashboard route",
      "criteria": ["/dashboard returns 200", "npm run typecheck passes"],
      "blockedBy": []
    },
    {
      "id": 2,
      "title": "Create DashboardLayout component",
      "criteria": ["Component renders sidebar + main content", "No console errors"],
      "blockedBy": [1]
    },
    {
      "id": 3,
      "title": "Add user stats API endpoint",
      "criteria": ["GET /api/user/stats returns JSON with totalPosts, totalComments"],
      "blockedBy": []
    },
    {
      "id": 4,
      "title": "Create StatsCard component",
      "criteria": ["Renders label + value", "Accepts props: label, value, icon"],
      "blockedBy": [2]
    },
    {
      "id": 5,
      "title": "Integrate stats on dashboard",
      "criteria": ["Dashboard shows 3 StatsCards", "Cards populate from API"],
      "blockedBy": [2, 3, 4]
    }
  ]
}
```

### Example 2: Authentication System

#### BAD

```
Task: Add authentication
```

#### GOOD

```
1. Add users table (email, password_hash, created_at)
2. Create User model with Prisma
3. Add bcrypt password hashing utility
4. Create POST /api/auth/register endpoint
5. Create POST /api/auth/login endpoint
6. Add JWT token generation
7. Create auth middleware
8. Create LoginForm component
9. Create RegisterForm component
10. Create AuthContext provider
11. Add protected route wrapper
12. Integration tests for auth flow
```

### Example 3: E-commerce Checkout

#### BAD

```
Implement checkout flow with cart, payment, and order confirmation
```

#### GOOD (Phased)

**Phase 1: Cart**
```
1. Add cart_items table
2. Create CartItem model
3. POST /api/cart/add endpoint
4. DELETE /api/cart/:id endpoint
5. GET /api/cart endpoint
6. CartItem component
7. CartPage with items list
8. Cart total calculation
```

**Phase 2: Checkout**
```
9. Add orders table
10. Add order_items table
11. Create Order model
12. POST /api/checkout endpoint
13. CheckoutForm component
14. Address input with validation
```

**Phase 3: Payment**
```
15. Stripe integration setup
16. Create payment intent endpoint
17. StripePaymentForm component
18. Payment confirmation handling
```

**Phase 4: Confirmation**
```
19. OrderConfirmation page
20. Order email notification
21. Order history endpoint
22. OrderHistory page
```

---

## TodoWrite vs External Task Management

### TodoWrite (Built-in)

**What it is:** Claude Code's native todo list tool

**Best for:**
- Single-session work
- Personal, linear tasks
- Quick tracking within one context
- No external dependencies

**Limitations:**
- Ephemeral (does not persist across sessions)
- No owners/team visibility
- No dependency tracking
- No blocking relationships

### External Task Management (prd.json, TaskCreate)

**Best for:**
- Multi-session projects
- Team collaboration
- Complex dependencies
- Long-running work

### Feature Comparison

| Feature | TodoWrite | TaskCreate (Native) | prd.json |
|---------|-----------|---------------------|----------|
| Persistence | Session only | Survives sessions | File-based |
| Dependencies | None | blocks/blockedBy | Manual |
| Owners | None | Agent IDs | Manual |
| Visibility | Self only | Multi-agent | Git-tracked |
| Setup | Zero | CC Mirror needed | Plain file |

### When to Use Which

```
Single session, simple task -> TodoWrite
Multi-session, solo dev -> prd.json
Multi-agent parallel work -> TaskCreate (CC Mirror)
Complex orchestration -> Gas Town / Custom
```

### Hybrid Approach

Use both:
1. **prd.json** for project-level tracking
2. **TodoWrite** for within-task subtasks

```json
// prd.json - project level
{
  "US-001": { "title": "Add user auth", "passes": false }
}

// Within Claude session - use TodoWrite for subtasks
[
  { "content": "Create login endpoint", "status": "completed" },
  { "content": "Add tests", "status": "in_progress" },
  { "content": "Update CLAUDE.md", "status": "pending" }
]
```

---

## Tools and Frameworks

### Ralph Wiggum (Official Plugin)

```bash
/plugin install ralph-wiggum@claude-plugins-official
```

- Stop hook intercepts session exits
- Re-injects original prompt with updated context
- Loops until completion promise found

### Lisa (Ralph Fork with Logging)

```
github.com/Arakiss/lisa
```

- Adds progress tracking
- Better logging
- Fork of Ralph with enhancements

### Marathon Ralph

```
github.com/gruckion/marathon-ralph
```

- SDLC-aware
- Unit and E2E tests built-in
- Full app development focus

### Gas Town (Factory for Agents)

```bash
go install github.com/steveyegge/gastown/cmd/gt@latest
```

**For Stage 7+ developers only:**
- 10+ parallel agents
- Hub-and-spoke worker architecture
- Refinery for task decomposition
- Heavy investment required

### CC Mirror (Native Orchestration)

Enables Claude Code's disabled beta features:
- TaskCreate, TaskList, TaskGet, TaskUpdate
- Native dependency management
- Multi-agent coordination

### Orchestra (Self-Improving)

```
github.com/0xSero/orchestra
```

- Docker containerization
- Self-improvement loops
- 24/7 operation
- Specialized worker profiles

---

## Summary: Task Decomposition Checklist

### Before Starting

- [ ] Can task be described in 2-3 sentences?
- [ ] Are acceptance criteria verifiable by agent?
- [ ] Is typecheck/test pass included in criteria?
- [ ] Are dependencies explicitly declared?
- [ ] Is task order correct (schema -> backend -> frontend)?

### Task Specification

- [ ] Use JSON or structured markdown
- [ ] Include `passes: false` state
- [ ] Add progress.txt for learnings
- [ ] Set max iteration limits
- [ ] Include rollback plan

### Verification Setup

- [ ] Type checking enabled
- [ ] Unit tests written/specified
- [ ] Integration tests ready
- [ ] Browser automation for UI (Playwright MCP)
- [ ] Clear "done" signal defined

### Multi-Run Preparation

- [ ] Git branch strategy defined
- [ ] Checkpoint mechanism in place
- [ ] Fresh context per iteration
- [ ] External state storage ready
- [ ] Cost limits set

---

## Quick Reference: Task Sizing

| Size | Lines of Code | Files | Iterations | Example |
|------|---------------|-------|------------|---------|
| XS | 1-20 | 1 | 1 | Add column, fix typo |
| S | 20-100 | 1-2 | 1 | New component, endpoint |
| M | 100-300 | 2-5 | 1-2 | Feature piece, integration |
| L | 300-1000 | 5-10 | 3-5 | Small feature, refactor |
| XL | 1000+ | 10+ | 5+ | Full feature (decompose!) |

**Rule:** XL tasks MUST be decomposed into S/M tasks.

---

## Sources

### Primary Sources (From Repository)

1. **Ralph Loop (Ryan Carson)** - `002-ralph-loop-ryancarson.md`
2. **Ralph Comprehensive (Arvid Kahl)** - `005-ralph-comprehensive-arvidkahl.md`
3. **Ralph Video Breakdown (Matt Pocock)** - `006-ralph-video-breakdown-mattpocockuk.md`
4. **CC Mirror Native Orchestration (Numman Ali)** - `011-cc-mirror-native-orchestration-nummanali.md`
5. **Gas Town (Steve Yegge)** - `009-gas-town-steve-yegge.md`
6. **Infinite Orchestra (0xSero)** - `010-infinite-orchestra-0xsero.md`
7. **Claude Code Mastery** - `claude-code-mastery.md`

### External References

- Anthropic Cookbook: `github.com/anthropics/anthropic-cookbook`
- Ralph origin: `ghuntley.com/ralph/`
- Gas Town repo: `github.com/steveyegge/gastown`
- Orchestra repo: `github.com/0xSero/orchestra`
- CC Mirror: `@nummanali` Twitter/X threads
- Anthropic Best Practices: Official documentation

---

## Tags

`#task-decomposition` `#context-window` `#prd-strategies` `#acceptance-criteria` `#dependencies` `#priority-ordering` `#atomic-tasks` `#tdd-agents` `#multi-run` `#token-budgeting` `#todowrite` `#orchestration`

---

## Deep Dive Expansion

**Added:** 2026-01-09
**Focus:** Advanced patterns, edge cases, and practical techniques not covered in the main document.

---

### Advanced Task Sizing Heuristics

#### The Cognitive Load Metric

Beyond lines of code and file count, consider cognitive complexity:

| Factor | Weight | Example |
|--------|--------|---------|
| **Novel patterns** | 3x | First time using a library |
| **Cross-boundary work** | 2x | Frontend + Backend + DB |
| **Undocumented dependencies** | 2x | Legacy code without tests |
| **State management complexity** | 2x | Concurrent operations, caching |
| **External API integration** | 1.5x | Third-party service calls |
| **Standard CRUD** | 1x (baseline) | Simple data operations |

**Formula for task budget:**
```
Effective Size = Base Size * max(Cognitive Weights)
```

A 50-line change with 3x cognitive weight = 150 effective lines = split required.

#### The "Can I Explain It To A New Hire" Test

If explaining the task would take:
- **1-2 minutes** -> XS/S task (proceed)
- **5 minutes** -> M task (careful)
- **10+ minutes** -> L/XL task (must split)

#### Time-Based Sizing Alternative

For teams uncomfortable with LOC estimates:

| Duration Target | Task Category | Agent Iterations |
|-----------------|---------------|------------------|
| < 15 min agent time | XS | 1 |
| 15-45 min | S | 1 |
| 45 min - 2 hr | M | 1-2 |
| 2-4 hr | L | 3-5 |
| > 4 hr | XL (SPLIT) | Must decompose |

---

### PRD Template Variations

#### Minimal PRD (Rapid Prototyping)

For quick experiments and spikes:

```json
{
  "goal": "Validate X can work with Y",
  "timebox": "30 minutes",
  "success": ["Proof of concept runs", "npm run typecheck passes"],
  "failure_is_ok": true
}
```

#### Feature PRD (Standard Development)

The Ryan Carson / Matt Pocock format (covered in main doc).

#### Epic PRD (Large Feature Breakdown)

For features requiring multiple Ralph loop sessions:

```json
{
  "epic": "User Authentication System",
  "phases": [
    {
      "phase": 1,
      "name": "Database Foundation",
      "prd_file": "plans/auth-phase1.json",
      "estimated_iterations": 5,
      "gate": ["Schema exists", "Migrations run"]
    },
    {
      "phase": 2,
      "name": "Backend Logic",
      "prd_file": "plans/auth-phase2.json",
      "estimated_iterations": 10,
      "blockedBy": "phase1",
      "gate": ["All API endpoints return expected status codes"]
    },
    {
      "phase": 3,
      "name": "Frontend Integration",
      "prd_file": "plans/auth-phase3.json",
      "estimated_iterations": 8,
      "blockedBy": "phase2",
      "gate": ["E2E login flow passes"]
    }
  ],
  "total_budget": "$50"
}
```

#### Research PRD (Exploration Tasks)

For investigation and spikes:

```json
{
  "type": "research",
  "question": "How should we structure the caching layer?",
  "deliverables": [
    "Document comparing Redis vs Memcached for our use case",
    "Prototype in branch research/caching",
    "Recommendation in plans/caching-decision.md"
  ],
  "timebox_iterations": 5,
  "decision_criteria": [
    "Performance requirements documented",
    "Cost implications analyzed",
    "Implementation complexity assessed"
  ]
}
```

#### Migration PRD (Systematic Changes)

For codebase-wide transformations:

```json
{
  "type": "migration",
  "from": "Jest",
  "to": "Vitest",
  "files_pattern": "**/*.test.ts",
  "total_files": 127,
  "batch_size": 10,
  "batches": [
    {
      "batch": 1,
      "files": ["src/auth/*.test.ts"],
      "passes": false
    },
    {
      "batch": 2,
      "files": ["src/api/*.test.ts"],
      "passes": false
    }
  ],
  "rollback": "git reset --hard pre-migration-tag"
}
```

---

### Acceptance Criteria Patterns

#### The SMART Criteria Framework

Each criterion should be:
- **S**pecific: "Button turns green" not "Button changes"
- **M**easurable: "Response < 200ms" not "Response is fast"
- **A**gent-verifiable: Claude can check it without human help
- **R**epeatable: Same result every time
- **T**ool-based: Uses available verification tools

#### Criteria Templates by Type

**Database Changes:**
```json
{
  "acceptanceCriteria": [
    "Column {name} exists in {table} with type {type}",
    "Default value is {value}",
    "Migration is reversible (down migration works)",
    "npx prisma migrate status shows no pending",
    "npm run typecheck passes"
  ]
}
```

**API Endpoints:**
```json
{
  "acceptanceCriteria": [
    "GET /api/{resource} returns 200 with array",
    "POST /api/{resource} returns 201 with created object",
    "POST /api/{resource} returns 400 for invalid input with error message",
    "Unauthorized requests return 401",
    "Rate limiting returns 429 after {n} requests",
    "npm run test:integration passes"
  ]
}
```

**UI Components:**
```json
{
  "acceptanceCriteria": [
    "Component renders without console errors",
    "Component accepts props: {list props}",
    "Component handles empty state",
    "Component handles loading state",
    "Component handles error state",
    "Accessibility: aria-label present on interactive elements",
    "npm run test:components passes"
  ]
}
```

**Refactoring:**
```json
{
  "acceptanceCriteria": [
    "All existing tests still pass",
    "No new TypeScript errors introduced",
    "Function signatures unchanged (API compatibility)",
    "Performance: no regression > 5% on benchmarks",
    "Code coverage not decreased"
  ]
}
```

#### Negative Criteria Patterns

Always include "don't break" criteria:

```json
{
  "negativeCriteria": [
    "Does not modify files outside {directory}",
    "Does not add new dependencies without approval note",
    "Does not increase bundle size > 5KB",
    "Does not break existing public API",
    "Does not log sensitive data"
  ]
}
```

---

### Dependency Management Patterns

#### Dependency Graph Visualization

For complex projects, generate a dependency graph:

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPENDENCY GRAPH                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [US-001: Schema]                                            │
│       │                                                      │
│       ├──────────────────┬──────────────────┐               │
│       ▼                  ▼                  ▼               │
│  [US-002: Model]   [US-003: Seeds]   [US-004: Types]        │
│       │                  │                  │               │
│       └────────┬─────────┘                  │               │
│                ▼                            │               │
│          [US-005: API]                      │               │
│                │                            │               │
│                └────────────────────────────┘               │
│                            │                                │
│                            ▼                                │
│                    [US-006: UI Component]                   │
│                            │                                │
│                            ▼                                │
│                    [US-007: Integration]                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### Soft vs Hard Dependencies

```json
{
  "dependencies": {
    "hard": {
      "description": "Cannot start until blocker complete",
      "example": "Cannot build UI component until API exists"
    },
    "soft": {
      "description": "Can start with mocks/stubs, integrate later",
      "example": "UI can use mock data while API is built"
    }
  },
  "userStories": [
    {
      "id": "US-005",
      "hardBlockedBy": ["US-002"],
      "softBlockedBy": ["US-003"],
      "notes": "Can start with seed data from US-003 if needed"
    }
  ]
}
```

#### Parallel Execution Opportunities

Identify tasks that can run simultaneously:

```json
{
  "parallelGroups": [
    {
      "group": "A",
      "tasks": ["US-002", "US-003", "US-004"],
      "reason": "All depend only on US-001, no mutual dependencies"
    },
    {
      "group": "B",
      "tasks": ["US-006", "US-007"],
      "reason": "Both can use mock API while US-005 completes"
    }
  ]
}
```

---

### Priority Ordering Strategies

#### The Dependency-First Algorithm

```python
def order_tasks(tasks):
    """Order tasks by dependency depth, then priority"""
    ordered = []
    remaining = tasks.copy()

    while remaining:
        # Find tasks with no pending blockers
        ready = [t for t in remaining
                 if all(b in ordered for b in t.blockedBy)]

        # Sort ready tasks by priority
        ready.sort(key=lambda t: t.priority)

        # Take highest priority ready task
        next_task = ready[0]
        ordered.append(next_task)
        remaining.remove(next_task)

    return ordered
```

#### Risk-Based Prioritization

High-risk items first to fail fast:

| Risk Level | Characteristics | Priority Boost |
|------------|-----------------|----------------|
| High | New technology, external APIs, complex logic | +2 |
| Medium | Moderate complexity, some unknowns | +1 |
| Low | Well-understood, standard patterns | +0 |

```json
{
  "id": "US-008",
  "title": "Stripe payment integration",
  "basePriority": 5,
  "riskLevel": "high",
  "effectivePriority": 3,
  "reason": "Fail fast on external API integration"
}
```

#### Value-Based Prioritization

For product-focused teams:

```json
{
  "id": "US-010",
  "title": "User onboarding flow",
  "valueScore": 9,
  "effortScore": 3,
  "roi": 3.0,
  "priorityOrder": 1
}
```

Formula: `ROI = Value / Effort` -> Higher ROI = Higher Priority

---

### Token Budgeting Techniques

#### Per-Task Token Estimation

```json
{
  "id": "US-001",
  "title": "Add user table",
  "tokenEstimate": {
    "readContext": 3000,
    "implementation": 5000,
    "verification": 2000,
    "toolOverhead": 1500,
    "buffer": 2500,
    "total": 14000
  },
  "costEstimate": {
    "model": "opus",
    "inputCost": "$0.21",
    "outputCost": "$0.75",
    "totalCost": "$0.96"
  }
}
```

#### Context Budget Allocation

```
100K Effective Tokens
├── 10K System/CLAUDE.md (fixed)
├── 20K Codebase context (per task)
├── 40K Working memory (implementation)
├── 15K Tool outputs (verification)
└── 15K Buffer (retries, exploration)
```

**Task must fit in working memory allocation (40K) or split.**

#### Cost Caps and Alerts

```json
{
  "project": "AuthFeature",
  "budgetLimits": {
    "perStory": 5.00,
    "perPhase": 25.00,
    "total": 100.00
  },
  "alerts": {
    "warning": 0.75,
    "critical": 0.90
  },
  "actions": {
    "onWarning": "Log to progress.txt",
    "onCritical": "Stop loop, notify human"
  }
}
```

---

### TDD for Agent Tasks

#### Test-First Task Specification

Write the test before the task:

```markdown
## Task: Implement formatCurrency utility

### The Test (Already Exists)
```typescript
// src/utils/__tests__/formatCurrency.test.ts
describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
  });
  it('handles zero', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
  });
  it('handles negative', () => {
    expect(formatCurrency(-50, 'USD')).toBe('-$50.00');
  });
});
```

### Acceptance Criteria
- `npm run test -- formatCurrency.test.ts` passes
- `npm run typecheck` passes
```

#### Red-Green-Refactor for Agents

```
┌─────────────────────────────────────────────────────┐
│  1. Human writes failing test                        │
│  2. Agent sees test in prd.json                      │
│  3. Agent implements minimal code to pass           │
│  4. Agent runs test (RED -> GREEN)                  │
│  5. Agent refactors if needed                       │
│  6. Agent verifies still GREEN                      │
│  7. Mark story passes: true                         │
└─────────────────────────────────────────────────────┘
```

#### Property-Based Testing for Agents

For mathematical or data transformation tasks:

```json
{
  "id": "US-020",
  "title": "Implement sortByDate utility",
  "testStrategy": "property-based",
  "properties": [
    "Output array length equals input length",
    "All items from input appear in output",
    "Adjacent items satisfy: a.date <= b.date",
    "Idempotent: sort(sort(x)) === sort(x)"
  ],
  "acceptanceCriteria": [
    "npm run test:property -- sortByDate passes 1000 cases"
  ]
}
```

#### Approval Testing Pattern

For complex output generation:

```json
{
  "id": "US-025",
  "title": "Generate API documentation",
  "testStrategy": "approval",
  "workflow": [
    "Generate output to docs/api-generated.md",
    "Compare to docs/api-approved.md",
    "If match: pass",
    "If diff: present diff for human approval",
    "If approved: update approved file, mark pass"
  ]
}
```

---

### Real PRD Examples

#### Example 1: Newsletter Subscription Feature

```json
{
  "project": "BlogPlatform",
  "branchName": "feature/newsletter-subscription",
  "description": "Allow users to subscribe to email newsletters",
  "techStack": "Next.js 14, Prisma, Resend",
  "userStories": [
    {
      "id": "NS-001",
      "title": "Add subscribers table",
      "description": "Create database schema for newsletter subscribers",
      "acceptanceCriteria": [
        "Table 'subscribers' exists with columns: id, email, createdAt, confirmedAt",
        "Unique constraint on email",
        "npx prisma migrate status shows no pending",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    },
    {
      "id": "NS-002",
      "title": "Create subscription API endpoint",
      "description": "POST /api/subscribe accepts email and creates unconfirmed subscriber",
      "acceptanceCriteria": [
        "POST /api/subscribe with valid email returns 201",
        "POST /api/subscribe with invalid email returns 400",
        "POST /api/subscribe with duplicate email returns 409",
        "Subscriber created with confirmedAt: null",
        "npm run test:api passes"
      ],
      "priority": 2,
      "blockedBy": ["NS-001"],
      "passes": false
    },
    {
      "id": "NS-003",
      "title": "Send confirmation email",
      "description": "After subscription, send confirmation email with magic link",
      "acceptanceCriteria": [
        "Resend API called with correct template",
        "Confirmation link contains valid token",
        "Token expires after 24 hours",
        "npm run test:email passes (mocked)"
      ],
      "priority": 3,
      "blockedBy": ["NS-002"],
      "passes": false
    },
    {
      "id": "NS-004",
      "title": "Create confirmation endpoint",
      "description": "GET /api/subscribe/confirm/:token confirms subscription",
      "acceptanceCriteria": [
        "Valid token sets confirmedAt to current timestamp",
        "Invalid token returns 400",
        "Expired token returns 410 Gone",
        "Already confirmed returns 200 (idempotent)",
        "npm run test:api passes"
      ],
      "priority": 4,
      "blockedBy": ["NS-003"],
      "passes": false
    },
    {
      "id": "NS-005",
      "title": "Create SubscribeForm component",
      "description": "Email input form with validation and loading state",
      "acceptanceCriteria": [
        "Form renders email input and submit button",
        "Client-side email validation",
        "Loading state while submitting",
        "Success message on 201 response",
        "Error message on 4xx response",
        "npm run test:components passes"
      ],
      "priority": 5,
      "blockedBy": ["NS-002"],
      "passes": false
    },
    {
      "id": "NS-006",
      "title": "E2E subscription flow test",
      "description": "Playwright test for complete subscription flow",
      "acceptanceCriteria": [
        "Test visits homepage",
        "Enters email in subscribe form",
        "Submits and sees success message",
        "Checks database for subscriber record",
        "npm run test:e2e passes"
      ],
      "priority": 6,
      "blockedBy": ["NS-004", "NS-005"],
      "passes": false
    }
  ]
}
```

#### Example 2: Code Refactoring Migration

```json
{
  "project": "LegacyAPI",
  "branchName": "refactor/callback-to-async",
  "description": "Migrate callback-based code to async/await",
  "estimatedIterations": 15,
  "userStories": [
    {
      "id": "RF-001",
      "title": "Add async utility wrapper",
      "description": "Create promisify utility for legacy callbacks",
      "acceptanceCriteria": [
        "src/utils/promisify.ts exists",
        "Correctly wraps Node-style callbacks",
        "Unit tests pass",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false
    },
    {
      "id": "RF-002",
      "title": "Migrate database layer",
      "description": "Convert src/db/*.ts from callbacks to async",
      "acceptanceCriteria": [
        "All functions in src/db/ use async/await",
        "No callback parameters remain",
        "All existing tests pass",
        "No new TypeScript errors"
      ],
      "priority": 2,
      "blockedBy": ["RF-001"],
      "passes": false,
      "notes": "May need to update test mocks"
    },
    {
      "id": "RF-003",
      "title": "Migrate API handlers",
      "description": "Convert src/handlers/*.ts to async",
      "acceptanceCriteria": [
        "All handlers use async/await",
        "Error handling uses try/catch",
        "All API tests pass",
        "No callback hell patterns remain"
      ],
      "priority": 3,
      "blockedBy": ["RF-002"],
      "passes": false
    },
    {
      "id": "RF-004",
      "title": "Remove promisify after migration",
      "description": "Clean up temporary utility if no longer needed",
      "acceptanceCriteria": [
        "No imports of promisify remain",
        "src/utils/promisify.ts deleted",
        "All tests pass"
      ],
      "priority": 4,
      "blockedBy": ["RF-003"],
      "passes": false
    }
  ]
}
```

---

### Failure Recovery Patterns

#### Checkpointing Protocol

```json
{
  "checkpoint": {
    "enabled": true,
    "frequency": "per_story",
    "storage": "plans/checkpoints/",
    "format": {
      "timestamp": "2026-01-09T10:30:00Z",
      "lastCompleted": "US-003",
      "currentAttempt": "US-004",
      "attemptCount": 2,
      "gitCommit": "abc123f",
      "contextSnapshot": "checkpoints/ctx-001.json"
    }
  }
}
```

#### Rollback Strategies

```markdown
## Rollback Decision Tree

1. **Test failure after code change?**
   - Revert last commit: `git reset --hard HEAD~1`
   - Retry same story with fresh context

2. **Multiple failures on same story (3+)?**
   - Split story into smaller pieces
   - Add notes to progress.txt about blocker
   - Move to next unblocked story

3. **Context degradation detected?**
   - Save progress to checkpoint
   - Kill current session
   - Start fresh with checkpoint context

4. **Budget exceeded?**
   - Stop loop
   - Document incomplete work
   - Notify human for review
```

#### Stuck Detection

```bash
#!/bin/bash
# stuck-detector.sh

SAME_STORY_THRESHOLD=3
LAST_STORY=""
REPEAT_COUNT=0

check_stuck() {
  CURRENT=$(jq -r '.checkpoint.currentAttempt' plans/prd.json)

  if [ "$CURRENT" == "$LAST_STORY" ]; then
    REPEAT_COUNT=$((REPEAT_COUNT + 1))
    if [ $REPEAT_COUNT -ge $SAME_STORY_THRESHOLD ]; then
      echo "STUCK on $CURRENT after $REPEAT_COUNT attempts"
      echo "Consider: Split task, add context, or manual intervention"
      exit 1
    fi
  else
    REPEAT_COUNT=0
  fi

  LAST_STORY=$CURRENT
}
```

---

### Advanced Decomposition Patterns

#### The Strangler Fig Pattern (for Legacy)

Gradually replace legacy code piece by piece:

```
1. Create new module alongside old
2. Route 10% traffic to new
3. Verify behavior matches
4. Increase to 50%, then 100%
5. Remove old module
```

Each step is its own story with rollback capability.

#### The Expand-Contract Pattern (for API Changes)

```json
{
  "phases": [
    {
      "phase": "expand",
      "stories": [
        "Add new field alongside old",
        "Update all writers to populate both",
        "Verify all readers work with both"
      ]
    },
    {
      "phase": "migrate",
      "stories": [
        "Update readers to prefer new field",
        "Monitor for issues",
        "Update documentation"
      ]
    },
    {
      "phase": "contract",
      "stories": [
        "Stop writing to old field",
        "Remove old field from schema",
        "Clean up dead code"
      ]
    }
  ]
}
```

#### The Vertical Slice Pattern

Instead of horizontal layers, decompose by user-visible functionality:

**Traditional (Horizontal):**
```
1. Build all database tables
2. Build all API endpoints
3. Build all UI components
4. Integrate everything
```

**Vertical Slice:**
```
1. Slice 1: User can view profile
   - users table (just needed fields)
   - GET /api/users/:id
   - ProfileView component

2. Slice 2: User can edit profile
   - Add missing columns
   - PUT /api/users/:id
   - ProfileEdit component
```

**Benefits:**
- Each slice is independently shippable
- Early user feedback possible
- Reduces integration risk

---

### Integration with External Tools

#### JIRA/Linear Integration Pattern

```json
{
  "externalTracker": {
    "type": "linear",
    "projectId": "PROJ-123",
    "syncEnabled": true,
    "mapping": {
      "prd.userStories[].id": "linear.issue.identifier",
      "prd.userStories[].passes": "linear.issue.status == 'Done'"
    }
  }
}
```

#### GitHub Issues Sync

```bash
# Create issues from PRD
for story in $(jq -c '.userStories[]' prd.json); do
  TITLE=$(echo $story | jq -r '.title')
  BODY=$(echo $story | jq -r '.description')
  gh issue create --title "$TITLE" --body "$BODY"
done
```

#### Slack Progress Updates

```json
{
  "notifications": {
    "slack": {
      "webhook": "${SLACK_WEBHOOK}",
      "events": {
        "storyComplete": "Story {id} completed: {title}",
        "phaseComplete": "Phase {phase} complete! {n} stories done.",
        "allComplete": "Project complete! All {n} stories shipped.",
        "stuck": "Agent stuck on {id} after {attempts} attempts."
      }
    }
  }
}
```

---

### Common Anti-Patterns

#### Anti-Pattern: The Kitchen Sink Story

```json
{
  "id": "ANTI-001",
  "title": "Implement user management",
  "problem": "Too vague, unbounded scope"
}
```

**Fix:** Split by verb (Create, Read, Update, Delete) and noun (User, Role, Permission).

#### Anti-Pattern: Backwards Dependencies

```json
{
  "id": "ANTI-002",
  "order": ["UI Component", "API Endpoint", "Database"],
  "problem": "UI depends on non-existent API"
}
```

**Fix:** Always database -> backend -> frontend.

#### Anti-Pattern: Testing as Afterthought

```json
{
  "stories": [
    "Build feature A",
    "Build feature B",
    "Write all tests"
  ],
  "problem": "Tests written without understanding implementation"
}
```

**Fix:** Include `npm run test passes` in every story's criteria.

#### Anti-Pattern: Vague Completion

```json
{
  "acceptanceCriteria": ["Works correctly"],
  "problem": "Agent will claim 'done' without verification"
}
```

**Fix:** Every criterion must be a command or observable state.

---

### Quick Reference Cards

#### Task Decomposition Decision Tree

```
START: "I need to implement X"
  │
  ├─ Can I describe in 2-3 sentences?
  │   ├─ YES → Proceed to sizing
  │   └─ NO → Keep breaking down
  │
  ├─ Will it touch > 5 files?
  │   ├─ YES → Split by file/module
  │   └─ NO → Check complexity
  │
  ├─ Does it cross boundaries? (DB + API + UI)
  │   ├─ YES → One story per boundary
  │   └─ NO → Check testing
  │
  ├─ Can I write specific tests?
  │   ├─ YES → Tests become criteria
  │   └─ NO → Not well enough defined
  │
  └─ END: Task is decomposed
```

#### Criteria Verification Checklist

```markdown
For each acceptance criterion, verify:
[ ] Can Claude check this with a tool?
    - Bash command returns expected output
    - File contains expected content
    - Test passes

[ ] Is it specific enough?
    - No "works correctly"
    - No "looks good"
    - No "is fast"

[ ] Is it deterministic?
    - Same result every time
    - No race conditions
    - No external dependencies that change

[ ] Does it have a clear pass/fail?
    - Exit code 0 = pass
    - Exit code != 0 = fail
```

---

### Additional Tags

`#deep-dive` `#cognitive-load` `#prd-templates` `#vertical-slice` `#strangler-fig` `#failure-recovery` `#checkpointing` `#anti-patterns` `#integration-patterns`
