# Subagent Spawning Best Practices

> **Technical depth guide for when, why, and how to spawn subagents in Claude Code.** Synthesized from Boris Cherny's patterns, Dan Shipper's compound engineering, community innovations, and production lessons learned.

---

## You Are Here

**Context:** You're working with Claude Code and wondering whether to use subagents for your current task. This guide helps you make that decision and implement it correctly.

**Prerequisites:**
- Basic Claude Code familiarity
- Understanding of context windows and their limits
- Familiarity with the main agent vs subagent distinction

**What you'll learn:**
- When spawning is worth the overhead vs overkill
- Sequential, parallel, and hybrid spawning patterns
- File-based coordination strategies
- Anti-patterns that waste tokens and time

---

## Table of Contents

1. [The Spawning Decision Framework](#1-the-spawning-decision-framework)
2. [When to Spawn: Decision Matrix](#2-when-to-spawn-decision-matrix)
3. [Spawning Patterns](#3-spawning-patterns)
4. [Coordination Strategies](#4-coordination-strategies)
5. [Anti-Patterns and Better Alternatives](#5-anti-patterns-and-better-alternatives)
6. [Model Selection for Subagents](#6-model-selection-for-subagents)
7. [Production Patterns](#7-production-patterns)

---

## 1. The Spawning Decision Framework

### The Core Trade-Off

Subagents provide **context isolation** but come with **overhead costs**:

```
┌─────────────────────────────────────────────────────────────────┐
│                    SUBAGENT OVERHEAD                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FIXED COSTS (per spawn):                                        │
│  ├── Context initialization: ~2-5K tokens                        │
│  ├── System prompt loading: ~1-3K tokens                         │
│  ├── CLAUDE.md inheritance: ~1-2K tokens                         │
│  └── Tool initialization: ~1K tokens                             │
│                                                                  │
│  VARIABLE COSTS:                                                 │
│  ├── Task description passage: varies                            │
│  ├── Result communication: varies                                │
│  └── Coordination overhead: depends on complexity                │
│                                                                  │
│  MINIMUM VIABLE SPAWN: ~5-10K tokens overhead                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### The Golden Rule

> "Using a subagent for a one-liner adds unnecessary overhead. Match the tool to the task complexity."
> -- Claude Code Mastery

**Break-even point:** Tasks requiring ~15-20K+ tokens of focused work justify subagent spawn overhead.

---

## 2. When to Spawn: Decision Matrix

### Quick Reference Table

| Scenario | Spawn? | Rationale |
|----------|--------|-----------|
| **Single file, small change** | NO | Main agent sufficient, overhead not justified |
| **Multiple independent files** | YES | Parallel efficiency, no context pollution |
| **Research + implement** | YES | Different skill profiles, research doesn't pollute implementation context |
| **Complex refactor (coupled files)** | MAYBE | Depends on coupling - tightly coupled = single agent better |
| **Testing + fixing** | YES | Separate concerns, test output doesn't fill main context |
| **Code review** | YES | Adversarial review benefits from separate context |
| **Simple grep/lookup** | NO | Main agent tools sufficient |
| **Architecture decision** | YES (multiple) | Benefits from parallel exploration and debate |
| **Documentation generation** | MAYBE | If large, yes; if small update, no |
| **Security audit** | YES | Specialized focus, shouldn't pollute main flow |

### Decision Tree

```
START: Should I spawn a subagent?
│
├─ Will task take < 5K tokens of work?
│   └─ NO → Main agent handles directly
│
├─ Does task need isolated context?
│   └─ YES → Consider spawning
│       ├─ Research that might go tangential?
│       ├─ Review that should be adversarial?
│       ├─ Heavy tool output (browser, large files)?
│       └─ Work that shouldn't pollute main conversation?
│
├─ Are there multiple independent subtasks?
│   └─ YES → Spawn parallel subagents
│       ├─ Different files with no dependencies?
│       ├─ Multiple research directions?
│       └─ Parallel feature implementations?
│
├─ Is specialization valuable?
│   └─ YES → Specialized subagent
│       ├─ Security review (different mindset)
│       ├─ Performance optimization (different focus)
│       └─ Test generation (systematic approach)
│
└─ END: Use main agent if none of above apply
```

### The "Context Pollution" Test

Ask yourself: **"If this task fails or takes 50 tool calls, will it ruin my main conversation?"**

- If YES → Spawn a subagent to contain the potential mess
- If NO → Main agent is fine

---

## 3. Spawning Patterns

### 3.1 Sequential Spawning

**When:** Tasks have dependencies, output of one feeds input of next.

```
┌─────────────────────────────────────────────────────────────────┐
│                    SEQUENTIAL PATTERN                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Main Agent                                                     │
│       │                                                          │
│       ├──► [Subagent 1: Research]                                │
│       │          │                                               │
│       │          ▼ Result                                        │
│       │                                                          │
│       ├──► [Subagent 2: Plan based on research]                  │
│       │          │                                               │
│       │          ▼ Result                                        │
│       │                                                          │
│       └──► [Subagent 3: Implement based on plan]                 │
│                  │                                               │
│                  ▼ Result                                        │
│                                                                  │
│   Main Agent synthesizes final result                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Implementation:**

```python
# Sequential spawning pattern
# Each subagent's output becomes context for the next

# Step 1: Research
Task(
    subagent_type="research",
    description="Research best practices for authentication",
    prompt="Research and document authentication patterns for our stack...",
    run_in_background=False  # Wait for completion
)

# Step 2: Plan (uses research output)
Task(
    subagent_type="architect",
    description="Create implementation plan",
    prompt="Based on the research findings, create a detailed plan...",
    run_in_background=False
)

# Step 3: Implement (uses plan)
Task(
    subagent_type="coder",
    description="Implement authentication",
    prompt="Following the approved plan, implement...",
    run_in_background=False
)
```

**Best for:**
- Research → Plan → Implement workflows
- Tasks with clear phase dependencies
- When you need human review between phases

### 3.2 Parallel Spawning

**When:** Tasks are independent, can run simultaneously.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PARALLEL PATTERN                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Main Agent (Orchestrator)                                      │
│       │                                                          │
│       ├──────────────┬──────────────┬──────────────┐             │
│       │              │              │              │             │
│       ▼              ▼              ▼              ▼             │
│   [Subagent 1]  [Subagent 2]  [Subagent 3]  [Subagent 4]        │
│   Frontend      Backend       Tests         Docs                 │
│       │              │              │              │             │
│       └──────────────┴──────────────┴──────────────┘             │
│                          │                                       │
│                          ▼                                       │
│   Main Agent collects and synthesizes results                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Implementation:**

```python
# Parallel spawning pattern
# All subagents run simultaneously with run_in_background=True

# Spawn all workers in parallel
Task(
    subagent_type="frontend",
    description="Implement login form UI",
    prompt="Create the login form component...",
    run_in_background=True
)

Task(
    subagent_type="backend",
    description="Implement auth API",
    prompt="Create authentication endpoints...",
    run_in_background=True
)

Task(
    subagent_type="tester",
    description="Write auth tests",
    prompt="Create test suite for authentication...",
    run_in_background=True
)

Task(
    subagent_type="docs",
    description="Document auth flow",
    prompt="Write documentation for the auth system...",
    run_in_background=True
)

# Monitor and collect results
# Use TaskList to check completion status
```

**Best for:**
- Independent feature pieces
- Multiple research directions
- Dan Shipper's "4 terminal" workflow: Frontend, Backend, Test, Docs

**Caution:** Parallel agents on **same files** cause conflicts. Use file ownership rules or git worktrees.

### 3.3 Dependent vs Independent Classification

```
┌─────────────────────────────────────────────────────────────────┐
│                 DEPENDENCY CLASSIFICATION                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INDEPENDENT (can parallelize):                                  │
│  ├── Different files, no shared dependencies                     │
│  ├── Different modules, clean interfaces                         │
│  ├── Research on separate topics                                 │
│  ├── Tests for already-written code                              │
│  └── Documentation for different features                        │
│                                                                  │
│  DEPENDENT (must serialize):                                     │
│  ├── Schema change → Backend → Frontend                          │
│  ├── Interface definition → Implementation                       │
│  ├── Research → Planning → Coding                                │
│  ├── Code → Tests (if TDD not used)                              │
│  └── Implementation → Documentation                              │
│                                                                  │
│  HYBRID (partial parallelism):                                   │
│  ├── Schema → (Backend || API Types) → Frontend                  │
│  ├── Research → (Plan || Prototype) → Implement                  │
│  └── Core code → (Tests || Docs) in parallel                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4 Context Sharing Strategies

#### Option 1: File-Based Context Sharing

```
project/
├── .agent-context/
│   ├── research-findings.md      # Subagent 1 writes, others read
│   ├── implementation-plan.md    # Subagent 2 writes, coder reads
│   ├── progress.json             # All agents update
│   └── handoff-notes.md          # Inter-agent communication
```

**Worker reads context file:**
```markdown
CONTEXT: You are a WORKER implementing authentication.

Read the following before starting:
1. .agent-context/research-findings.md - Best practices found
2. .agent-context/implementation-plan.md - Approved approach

After completing your work:
1. Update .agent-context/progress.json with your status
2. Note any issues in .agent-context/handoff-notes.md
```

#### Option 2: Prompt-Based Context Passing

```python
# Research subagent returns findings
research_result = Task(
    subagent_type="research",
    prompt="Research auth best practices...",
    run_in_background=False
)

# Pass findings directly to implementation subagent
Task(
    subagent_type="coder",
    prompt=f"""
    RESEARCH FINDINGS:
    {research_result.summary}

    TASK:
    Implement authentication following these findings...
    """,
    run_in_background=False
)
```

#### Option 3: Git-Based Context (Ralph Pattern)

```
project/
├── plans/
│   ├── prd.json           # Task status (passes: true/false)
│   └── progress.txt       # Append-only learnings log
```

Each iteration's subagent:
1. Reads `prd.json` for task status
2. Reads `progress.txt` for learnings from previous iterations
3. Does work
4. Updates `prd.json` with completion status
5. Appends to `progress.txt` with learnings
6. Commits changes to git

---

## 4. Coordination Strategies

### 4.1 File-Based Coordination

**The `thoughts/` Directory Pattern:**

```
project/
├── thoughts/
│   ├── agent-1-status.json
│   ├── agent-2-status.json
│   ├── shared-decisions.md
│   └── blockers.md
```

**Status File Format:**

```json
{
  "agent_id": "coder-1",
  "current_task": "US-003: Implement login endpoint",
  "status": "in_progress",
  "started_at": "2026-01-13T10:30:00Z",
  "files_touching": ["src/api/auth.ts", "src/models/user.ts"],
  "blockers": [],
  "progress_pct": 60,
  "notes": "Found existing auth utilities in src/utils/auth.ts, will reuse"
}
```

### 4.2 Progress Tracking

**The `progress.txt` Pattern (from Ralph):**

```markdown
# Progress Log - Append Only

## 2026-01-13 10:30 - Coder-1
- Completed: User model with email/password fields
- Learning: Team prefers Zod for validation (found in existing code)
- Next: Need to implement password hashing

## 2026-01-13 10:45 - Coder-1
- Completed: Password hashing with bcrypt (12 rounds per CLAUDE.md)
- Blocker: None
- Next: Login endpoint

## 2026-01-13 11:00 - Coder-2
- Completed: Registration form component
- Learning: Using existing Button component from src/components/ui
- Note for Coder-1: I'm expecting POST /api/auth/register endpoint
```

### 4.3 Completion Signals

**Simple Completion:**
```bash
# Subagent outputs special string when done
if output contains "TASK_COMPLETE":
    mark_complete()
```

**Structured Completion:**
```json
{
  "status": "complete",
  "files_modified": [
    "src/api/auth.ts",
    "src/models/user.ts"
  ],
  "tests_passing": true,
  "typecheck_passing": true,
  "summary": "Implemented login endpoint with JWT tokens",
  "handoff_notes": "Frontend can now integrate with POST /api/auth/login"
}
```

### 4.4 Error Handling

**Subagent Error Protocol:**

```markdown
## Error Handling for Subagents

When you encounter an error:

1. DO NOT repeatedly retry the same approach
2. Log the error to .agent-context/errors.md with:
   - What you tried
   - What failed
   - Your hypothesis about why
3. If blocked for 3+ attempts, signal for human help:
   "BLOCKED: [description of issue]"
4. Continue with other tasks if possible
```

**Orchestrator Error Handling:**

```python
# Monitor for stuck subagents
if subagent.attempts > 3 and not subagent.progress:
    # Kill subagent
    subagent.terminate()

    # Log the failure
    log_to_progress(f"Subagent {subagent.id} stuck on {subagent.task}")

    # Either:
    # 1. Retry with different subagent
    # 2. Escalate to human
    # 3. Skip and continue with other tasks
```

---

## 5. Anti-Patterns and Better Alternatives

### 5.1 Over-Spawning

**The Problem:**
> Subagents add overhead. Spawning for trivial tasks wastes tokens and time.

**Bad Example:**
```python
# DON'T: Spawn subagent for a one-liner
Task(
    subagent_type="coder",
    prompt="Add a comment to line 42 of src/utils.ts"
)
# ~5-10K tokens overhead for a 10-token change
```

**Better Alternative:**
```python
# DO: Main agent handles simple changes directly
Edit(
    file_path="src/utils.ts",
    old_string="function calculate(",
    new_string="// Calculate the total\nfunction calculate("
)
```

**Rule of Thumb:** If the task description is longer than the likely implementation, don't spawn.

### 5.2 Context Pollution

**The Problem:**
> Passing too much context to subagents or letting subagent output flood orchestrator.

**Bad Example:**
```python
# DON'T: Dump entire codebase context into subagent
Task(
    prompt=f"""
    Here's our entire codebase documentation:
    {read_all_docs()}  # 50K tokens

    Now add a button to the login form.
    """
)
```

**Better Alternative:**
```python
# DO: Pass minimal, relevant context
Task(
    prompt="""
    TASK: Add "Forgot Password" button to login form

    RELEVANT FILES:
    - src/components/LoginForm.tsx (where to add)
    - src/components/ui/Button.tsx (button to use)

    CONSTRAINTS:
    - Match existing styling
    - Use existing Button component
    """
)
```

### 5.3 Missing Coordination

**The Problem:**
> Parallel subagents editing same files without awareness of each other.

**Bad Example:**
```python
# DON'T: Spawn parallel agents on same file
Task(prompt="Add login function to src/auth.ts", run_in_background=True)
Task(prompt="Add logout function to src/auth.ts", run_in_background=True)
# Race condition: Both agents will conflict
```

**Better Alternatives:**

```python
# Option 1: Sequential for same-file work
Task(prompt="Add login function to src/auth.ts", run_in_background=False)
Task(prompt="Add logout function to src/auth.ts", run_in_background=False)

# Option 2: File ownership rules
Task(
    prompt="""
    Add login function.
    ONLY modify src/auth.ts lines 1-50 (your section).
    Do NOT touch lines 51+ (other agent's section).
    """
)

# Option 3: Git worktrees (true isolation)
# Each agent works in separate worktree, merge later
```

### 5.4 Deep Nesting

**The Problem:**
> Subagents spawning sub-subagents, creating recursive depth and cost explosion.

**Bad Example:**
```
Main Agent
└── Subagent 1 (spawns)
    └── Sub-subagent A (spawns)
        └── Sub-sub-subagent X
# Each level adds overhead, control is lost
```

**Better Alternative:**

```markdown
# Worker Preamble (prevents recursive spawning)

CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[Your specific task here]
```

**Maximum recommended depth:** 2 levels (Orchestrator → Worker)

### 5.5 Wrong Model for Task

**The Problem:**
> Using expensive Opus for simple tasks, or weak Haiku for complex reasoning.

**Anti-Pattern Examples:**

| Task | Wrong Choice | Cost Waste |
|------|--------------|------------|
| Simple file lookup | Opus | 10x overpay |
| Architecture decision | Haiku | Poor quality, more retries |
| Code review | Haiku | Misses nuanced issues |
| Grep for pattern | Sonnet | 3x overpay |

See [Model Selection](#6-model-selection-for-subagents) for correct mapping.

---

## 6. Model Selection for Subagents

### Model-to-Task Mapping

```
┌─────────────────────────────────────────────────────────────────┐
│                    MODEL SELECTION GUIDE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  HAIKU (Fast, Cheap)                                             │
│  ├── File lookups and grep operations                            │
│  ├── Simple data transformations                                 │
│  ├── Status checks and validation                                │
│  ├── Documentation lookups                                       │
│  └── Spawn 5-10 in parallel for research sweeps                  │
│                                                                  │
│  SONNET (Balanced)                                               │
│  ├── Standard implementation tasks                               │
│  ├── Test generation                                             │
│  ├── Code following established patterns                         │
│  ├── Bug fixes with clear reproduction                           │
│  └── Documentation generation                                    │
│                                                                  │
│  OPUS (Deep Reasoning)                                           │
│  ├── Architecture decisions                                      │
│  ├── Complex debugging with ambiguous symptoms                   │
│  ├── Security review                                             │
│  ├── Performance optimization                                    │
│  ├── Novel problem solving                                       │
│  └── Tasks requiring extended thinking                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Cost Comparison

| Model | Input (per 1M) | Output (per 1M) | Typical Task Cost |
|-------|----------------|-----------------|-------------------|
| Haiku | $0.25 | $1.25 | $0.01-0.05 |
| Sonnet | $3.00 | $15.00 | $0.10-0.50 |
| Opus | $15.00 | $75.00 | $0.50-2.00 |

### The Multi-Model Swarm Pattern

From Dan Shipper's Compound Engineering:

```python
# Use multiple Haiku agents to explore, Sonnet to implement
# Example: Finding where to add a feature

# Phase 1: Parallel Haiku research (cheap exploration)
for search_area in ["src/api/", "src/utils/", "src/models/"]:
    Task(
        model="haiku",
        prompt=f"Search {search_area} for authentication-related code",
        run_in_background=True
    )

# Phase 2: Sonnet implementation (based on Haiku findings)
Task(
    model="sonnet",
    prompt="""
    Based on research findings:
    - Auth utilities in src/utils/auth.ts
    - User model in src/models/user.ts

    Implement the login endpoint in src/api/auth.ts
    """,
    run_in_background=False
)
```

---

## 7. Production Patterns

### 7.1 Boris Cherny's Multiple Reviewers Pattern

From the Claude Code creator's workflow:

```python
# Spawn multiple review subagents with different perspectives
reviewers = [
    ("security", "Review for security vulnerabilities, injection attacks, auth issues"),
    ("performance", "Review for N+1 queries, memory leaks, slow patterns"),
    ("maintainability", "Review for code clarity, naming, abstraction levels"),
    ("correctness", "Review for logic errors, edge cases, type safety")
]

for reviewer_type, focus in reviewers:
    Task(
        subagent_type=f"reviewer-{reviewer_type}",
        prompt=f"""
        You are a {reviewer_type} specialist reviewing this PR.

        FOCUS: {focus}

        Review the following changes:
        {git_diff}

        Report issues as:
        - CRITICAL: Must fix before merge
        - IMPORTANT: Should fix
        - SUGGESTION: Nice to have
        """,
        run_in_background=True
    )
```

### 7.2 Dan Shipper's 4-Terminal Workflow

From Every's Compound Engineering:

```
┌─────────────────────────────────────────────────────────────────┐
│                    4-TERMINAL PATTERN                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Terminal 1: Frontend Specialist                                 │
│  ├── Focus: UI components, styling, user interactions            │
│  ├── Files: src/components/, src/pages/                          │
│  └── Tools: Browser preview, Playwright                          │
│                                                                  │
│  Terminal 2: Backend Specialist                                  │
│  ├── Focus: API endpoints, business logic, database              │
│  ├── Files: src/api/, src/models/, src/services/                 │
│  └── Tools: curl, database queries                               │
│                                                                  │
│  Terminal 3: Test Specialist                                     │
│  ├── Focus: Unit tests, integration tests, E2E tests             │
│  ├── Files: tests/, __tests__/                                   │
│  └── Tools: Jest, Playwright                                     │
│                                                                  │
│  Terminal 4: Docs/Review Specialist                              │
│  ├── Focus: Documentation, code review, CLAUDE.md updates        │
│  ├── Files: docs/, README, CLAUDE.md                             │
│  └── Tools: Read-only access to all                              │
│                                                                  │
│  Coordination: File-based handoffs, git branches                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 The "Team with Daily Amnesia" Model

Treating agents as team members who forget everything overnight:

**Key Principles:**

1. **Everything in files** - No reliance on conversation memory
2. **Self-contained tasks** - Each task includes all needed context
3. **Explicit handoffs** - Write handoff notes for the "next person"
4. **Idempotent operations** - Running same task twice is safe

**Implementation:**

```markdown
# Task Template for Amnesiac Team Member

## Context (read this first)
- Project: [name]
- Your role: [specific role]
- Current sprint goal: [goal]

## Your Assignment
[Specific task description]

## What You Need to Know
- Key files: [list]
- Key patterns: [list]
- Recent decisions: [read decisions.md]

## How to Report Completion
1. Update progress.json with status
2. Write handoff notes in handoff.md
3. Commit with descriptive message
4. Output "TASK_COMPLETE: [summary]"

## If You Get Stuck
- Document the blocker in blockers.md
- Try alternative approach from [suggestions]
- If still stuck after 3 attempts: "BLOCKED: [reason]"
```

### 7.4 Kaushik Gopal's Planning-First Methodology

**Principle:** Always plan before spawning implementation workers.

```
┌─────────────────────────────────────────────────────────────────┐
│                 PLANNING-FIRST WORKFLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Phase 1: PLAN (human reviews before proceeding)                 │
│  ├── Research subagent explores codebase                         │
│  ├── Architect subagent proposes approach                        │
│  ├── Human approves or requests changes                          │
│  └── Plan documented in plans/feature-plan.md                    │
│                                                                  │
│  Phase 2: WORK (parallel execution)                              │
│  ├── Workers execute approved plan                               │
│  ├── Each worker has clear scope from plan                       │
│  └── Progress tracked in prd.json                                │
│                                                                  │
│  Phase 3: REVIEW (quality gates)                                 │
│  ├── Test subagent validates changes                             │
│  ├── Review subagent checks quality                              │
│  └── Human makes final approval                                  │
│                                                                  │
│  Phase 4: COMPOUND (learning extraction)                         │
│  ├── What worked well? → Update CLAUDE.md                        │
│  ├── What failed? → Add to anti-patterns                         │
│  └── New patterns discovered → Document                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Quick Reference: Spawning Checklist

### Before Spawning

- [ ] Is task complex enough to justify overhead? (>15K tokens of work)
- [ ] Would task pollute main context if done directly?
- [ ] Are there multiple independent subtasks? (parallel opportunity)
- [ ] Does task need specialized focus? (security, testing, docs)

### Spawning Configuration

- [ ] Correct model selected (Haiku/Sonnet/Opus based on complexity)
- [ ] Worker preamble included (prevents recursive spawning)
- [ ] Clear task description with acceptance criteria
- [ ] File ownership rules if parallel agents
- [ ] Completion signal defined

### Coordination Setup

- [ ] Progress tracking mechanism (progress.txt, prd.json, status files)
- [ ] Handoff protocol documented
- [ ] Error handling instructions included
- [ ] Human escalation path defined

### After Spawning

- [ ] Monitor for stuck subagents (3+ attempts without progress)
- [ ] Collect and synthesize results
- [ ] Update CLAUDE.md with learnings
- [ ] Clean up coordination files

---

## Summary: The Spawning Philosophy

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  "Subagents are colleagues you call in mid-stream, not          │
│   tools you use for every small task."                          │
│                                                                  │
│  SPAWN when:                                                     │
│  - Context isolation is valuable                                 │
│  - Tasks are parallel and independent                            │
│  - Specialization improves quality                               │
│  - Heavy tool output would flood main context                    │
│                                                                  │
│  DON'T SPAWN when:                                               │
│  - Task is simple (< 5K tokens)                                  │
│  - Main agent has all needed context                             │
│  - Overhead exceeds benefit                                      │
│  - Tasks are tightly coupled (serialize instead)                 │
│                                                                  │
│  COORDINATE via:                                                 │
│  - File-based status and progress                                │
│  - Git for persistent state                                      │
│  - Clear handoff protocols                                       │
│  - Worker preambles preventing recursion                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Sources

### Primary
- Boris Cherny (Claude Code creator) - Subagent philosophy, reviewer patterns
- Dan Shipper (@danshipper) - Compound Engineering, 4-terminal workflow
- CC Mirror documentation (@nummanali) - Worker preamble, orchestration patterns
- Claude Code Mastery - Task tool usage, model selection

### Secondary
- Gas Town (Steve Yegge) - Role specialization, coordination patterns
- Ralph Wiggum pattern - Progress tracking, file-based coordination
- Infinite Orchestra - Worker profiles, Docker isolation
- Production war stories - Error handling, anti-patterns

---

## Tags

`#subagents` `#spawning` `#coordination` `#parallel-agents` `#sequential` `#context-isolation` `#model-selection` `#anti-patterns` `#file-coordination` `#worker-preamble` `#compound-engineering` `#best-practices`

---

*Synthesized: 2026-01-13*
*Agent: Claude Opus 4.5 (Agent T9)*
*Depth: Technical reference guide*
