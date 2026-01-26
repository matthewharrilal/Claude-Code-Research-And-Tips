---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-mental-models Part 1 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Core Principles of Agent Engineering

> **You Are Here:** This is the philosophical foundation - the 8 core principles that explain WHY every Claude Code pattern works the way it does. Read this before trying to understand specific patterns, and return here when patterns fail to understand what went wrong. This is the "physics" from which all "engineering" derives.

**Purpose:** The fundamental WHYs behind every pattern in Claude Code agent engineering. These principles are the bedrock from which all patterns derive. Understanding them enables you to create new patterns, adapt existing ones, and diagnose failures.

**Synthesized:** 2026-01-09
**Sources:** 40+ research extractions, community innovations, production implementations

---

## The Principle Hierarchy

Before diving into individual principles, understand their relationship:

```
                    ┌─────────────────────────────────┐
                    │  PRINCIPLE 1: CONTEXT IS FINITE │
                    │  (The Primary Constraint)       │
                    └─────────────┬───────────────────┘
                                  │
              Everything flows from this limitation
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ PRINCIPLE 2:      │  │ PRINCIPLE 3:      │  │ PRINCIPLE 4:      │
│ External State    │  │ Fresh Context     │  │ Separation of     │
│ > Internal Memory │  │ > Extended        │  │ Concerns           │
│                   │  │   Sessions        │  │ (Orch/Worker)     │
└─────────┬─────────┘  └─────────┬─────────┘  └─────────┬─────────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌───────────────────┐    ┌───────────────────┐
          │ PRINCIPLE 5:      │    │ PRINCIPLE 6:      │
          │ Atomic, Verifiable│    │ Quality Gates     │
          │ Task Sizing       │    │ Before Commit     │
          └───────────────────┘    └───────────────────┘
```

---

## Principle 1: Context Is The Primary Constraint

### The WHY

**LLMs degrade with filled context windows.** This is not a minor inconvenience - it is the fundamental constraint that shapes all agent engineering patterns.

> "Context rot: LLMs get stupider with more tokens"
> -- @mattpocockuk

Claude's context window (~200K tokens nominal, ~100K effective for quality work) is a hard ceiling. As tokens accumulate:

| Context Level | Quality Impact |
|--------------|----------------|
| 0-50% | Full capability |
| 50-70% | Slight degradation possible |
| 70-85% | Noticeable quality loss |
| 85-95% | Significant degradation, instructions forgotten |
| 95%+ | Failure mode - hallucinations, contradictions, amnesia |

### What Context Rot Looks Like

1. **Repetition** - Claude starts repeating earlier statements
2. **Amnesia** - Forgets work done 10 minutes ago
3. **Instruction Drift** - CLAUDE.md directives ignored
4. **Truncation** - Code cut off mid-function
5. **Hallucination** - References files that don't exist
6. **False Completion** - Marks tasks done without verification

### Implications

Every pattern, every tool, every workflow decision must answer: **"How does this affect context consumption?"**

- If it consumes context, is the benefit worth it?
- If it persists across iterations, should it?
- If it compounds (grows over time), how do we bound it?

### Derived Patterns

| Pattern | How It Addresses Context |
|---------|-------------------------|
| Ralph Loops (fresh context) | Kill and restart - zero accumulation |
| File-based state | Externalize - don't store in context |
| Git as memory | History lives outside context |
| Subagent delegation | Expensive ops in isolated contexts |
| .claudeignore | Prevent irrelevant files from loading |
| CLAUDE.md brevity | Fixed context cost, minimize it |
| Task sizing | Complete before overflow |
| Compaction | Emergency pressure release |

### The Core Insight

> "Memory is external. The agent is stateless."
> -- Ryan Carson

This isn't a bug. It's the architecture that enables reliability. Fighting it leads to failure; embracing it leads to robust systems.

### Checkpoint: Principle 1
**You should now understand:**
- [ ] Why context windows have effective limits (~100K for quality work)
- [ ] The 6 symptoms of context rot (repetition, amnesia, instruction drift, etc.)
- [ ] How every pattern must answer "how does this affect context consumption?"
- [ ] Why memory must be external, not internal

**If unclear:** See `principles-anti-patterns.md` Section "Context Anti-Patterns" for detailed failure examples.

---

## Principle 2: External State > Internal Memory

### The WHY

**Sessions end. Context clears. Memory evaporates.** Any information stored only in the LLM's context will be lost when:

- The session ends normally
- Context window fills and forces reset
- An error crashes the session
- The user starts fresh

**Therefore:** All state that must persist beyond a single operation must be externalized to durable storage.

### The Fundamental Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    THE AGENT                              │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                CONTEXT WINDOW                        │ │
│  │                                                      │ │
│  │   [Ephemeral: dies when session ends]               │ │
│  │   - Current reasoning                               │ │
│  │   - Active task details                             │ │
│  │   - Recent tool outputs                             │ │
│  │                                                      │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
                    Read ↓ │ ↓ Write
                           │
┌─────────────────────────────────────────────────────────┐
│                 EXTERNAL STATE                           │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────┐  │
│  │   FILESYSTEM  │  │      GIT      │  │  DATABASE   │  │
│  │               │  │               │  │             │  │
│  │ progress.txt  │  │ Commits       │  │ claude-mem  │  │
│  │ prd.json      │  │ Branches      │  │ SQLite      │  │
│  │ CLAUDE.md     │  │ History       │  │ Checkpoints │  │
│  │ handoffs/     │  │ Diffs         │  │             │  │
│  │               │  │               │  │             │  │
│  └───────────────┘  └───────────────┘  └─────────────┘  │
│                                                          │
│  [Persistent: survives sessions, crashes, resets]        │
└─────────────────────────────────────────────────────────┘
```

### Implications

1. **Never trust context for continuity** - Design as if every operation is the first and last
2. **Write state immediately** - Don't batch; externalize as you go
3. **Read state to restore** - Each iteration should reconstruct context from files
4. **Version state** - Git provides history; use it
5. **Make state machine-readable** - JSON over prose for task tracking

### The Three Core Files Pattern

| File | Purpose | Format | Rule |
|------|---------|--------|------|
| `progress.txt` | Memory across iterations | Markdown | APPEND ONLY - never edit |
| `prd.json` | Task state tracking | JSON | Machine-readable, `passes: true/false` |
| `CLAUDE.md` | Project context | Markdown | Under 500 tokens, essential info only |

### Derived Patterns

| Pattern | How It Uses External State |
|---------|---------------------------|
| Ralph Loop | Reads PRD + progress at each iteration start |
| Compounding Ralph | Archives previous runs for cross-session learning |
| Git-based handoffs | Commits encode progress, future agents read history |
| File-based handoffs | Explicit JSON files for agent-to-agent communication |
| Checkpointing | Periodic state snapshots for crash recovery |
| Docker volume handoffs | Shared filesystem across containerized agents |

### The Anti-Pattern

**Extended sessions** that rely on in-context memory for continuity. The longer the session, the more accumulated context, the worse the performance. Even "successful" long sessions degrade imperceptibly until failure.

> "Each iteration spawns a NEW Amp instance with NO memory of previous work. Continuity comes from: Git history, prd.json, progress.txt"
> -- Ryan Carson

### Checkpoint: Principle 2
**You should now understand:**
- [ ] The three core files pattern: progress.txt, prd.json, CLAUDE.md
- [ ] Why git commits are a form of external memory
- [ ] The architecture diagram of ephemeral context vs. persistent external state
- [ ] That compaction is lossy, but file storage is not

**If unclear:** See `architecture-primitives.md` for detailed file format specifications.

---

## Principle 3: Fresh Context > Extended Sessions

### The WHY

**Context accumulation is entropy.** Every operation adds tokens. Every token added slightly degrades future operations. This compounds over time until quality collapse.

**Fresh context is regeneration.** A new instance starts at 0% context usage, at peak capability. There is no accumulated noise, no degraded performance, no risk of context rot.

### The Mathematical Reality

```
Extended Session Quality:
Q(t) = Q_max * decay(context_usage(t))

Fresh Context Quality:
Q(t) = Q_max  (constant per iteration)
```

Extended sessions guarantee degradation. Fresh context guarantees consistent quality.

### The Fresh Context Pattern

```
┌─────────────────────────────────────────────────────────┐
│  Iteration 1 (fresh Claude instance)                    │
│  → Read state from files (PRD, progress, git)           │
│  → Pick highest priority incomplete task                │
│  → Implement + verify                                   │
│  → Commit if passing                                    │
│  → Update external state                                │
│  → Exit                                                 │
└─────────────────────────────────────────────────────────┘
              ↓ (no memory carried forward)
┌─────────────────────────────────────────────────────────┐
│  Iteration 2 (fresh Claude instance)                    │
│  → Read state from files (now updated)                  │
│  → Repeat...                                            │
└─────────────────────────────────────────────────────────┘
```

### Why Not Compaction?

**Compaction is lossy.** When you compact, you summarize. When you summarize, you lose detail. Lost detail can mean:
- Forgotten edge cases
- Missed requirements
- Lost context on decisions

**Fresh context is lossless.** Files preserve full detail. Git preserves full history. Nothing is summarized away.

### Implications

1. **Design for iteration, not session** - Each invocation should be self-contained
2. **Externalize before exit** - State must survive session death
3. **Size work to complete** - Tasks must fit within one context window
4. **Automate the loop** - Ralph/bash scripts manage iteration lifecycle
5. **Accept startup cost** - Reading state each time is worth quality preservation

### Derived Patterns

| Pattern | Fresh Context Implementation |
|---------|------------------------------|
| Ralph Wiggum | Bash loop spawning new Claude per iteration |
| Compounding Ralph | Fresh instances reading archived learnings |
| Marathon Ralph | SDLC phases each in fresh context |
| Kanban Loop | Pick task → execute → exit → repeat |
| Git worktree parallel | Each agent gets fresh context in isolated directory |

### When Extended Sessions Are Acceptable

Only for:
- Single, small tasks (< 30 min)
- Exploratory work where loss is acceptable
- Debugging where context accumulation aids investigation

Even then, monitor context usage and reset before 70%.

### Checkpoint: Principle 3
**You should now understand:**
- [ ] The mathematical reality: extended sessions degrade, fresh context is constant quality
- [ ] Why compaction is lossy but fresh context with file state is lossless
- [ ] The fresh context pattern: read state, work, write state, exit
- [ ] When extended sessions are acceptable (single small tasks, exploratory work)

**If unclear:** See `principles-learning-loops.md` for how to maintain continuity across fresh contexts.

---

## Principle 4: Separation of Concerns (Orchestrator/Worker)

### The WHY

**Mixing coordination with execution causes two failures:**

1. **Context pollution** - The orchestrator fills its context with execution details it doesn't need
2. **Role confusion** - The agent oscillates between planning and doing, doing neither well

> "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS. YOU DO NOT EXPLORE CODEBASES. You are the CONDUCTOR. Your agents play the instruments."
> -- @nummanali (CC Mirror)

### The Fundamental Separation

```
╔═══════════════════════════════════════════════════════════════╗
║                        ORCHESTRATOR                           ║
║                                                               ║
║   DOES:                          DOES NOT:                    ║
║   • Decompose tasks              • Write code                 ║
║   • Assign to workers            • Run commands               ║
║   • Track dependencies           • Explore codebase           ║
║   • Monitor progress             • Debug errors               ║
║   • Synthesize results           • Make implementation        ║
║   • Make coordination decisions    decisions                  ║
║                                                               ║
║   TOOLS: Task*, Read (1-2 files), AskUserQuestion            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
                              │
                    Delegates │ Reports
                              │
╔═══════════════════════════════════════════════════════════════╗
║                         WORKERS                               ║
║                                                               ║
║   DOES:                          DOES NOT:                    ║
║   • Execute specific tasks       • Spawn sub-agents           ║
║   • Use tools directly           • Manage task graphs         ║
║   • Report results               • Make coordination          ║
║   • Follow instructions            decisions                  ║
║   • Complete and exit            • Plan beyond current task   ║
║                                                               ║
║   TOOLS: Read, Write, Edit, Bash, Glob, Grep, WebFetch, LSP  ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### The Worker Preamble Pattern

Workers need explicit role definition to prevent role creep:

```
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

### Why This Matters

1. **Context efficiency** - Orchestrator stays lean, workers do heavy lifting
2. **Parallelization** - Multiple workers can run simultaneously
3. **Model selection** - Use expensive models for orchestration, cheap models for execution
4. **Recovery** - Worker failure doesn't crash orchestrator
5. **Observability** - Clear boundaries for monitoring

### Model Selection by Role

| Role | Recommended Model | Rationale |
|------|-------------------|-----------|
| Orchestrator | Opus | Complex reasoning, coordination decisions |
| Complex worker | Opus | Architecture, ambiguous tasks |
| Standard worker | Sonnet | Implementation, testing, following patterns |
| Simple worker | Haiku | File lookup, grep, simple transforms |

### Recursion Prevention

Workers must be explicitly blocked from:
- Spawning sub-agents
- Calling TaskCreate/TaskUpdate
- Managing task graphs

This prevents infinite recursion and context explosion.

### Derived Patterns

| Pattern | Separation Implementation |
|---------|--------------------------|
| CC Mirror | Orchestrator skill with TaskCreate/TaskUpdate |
| Gas Town | Mayor/Deacon coordination, Polecat/Crew workers |
| Hub-and-Spoke | Central orchestrator, specialized worker agents |
| Adversarial Speccing | Architect proposes, Critic challenges (both workers) |
| Parallel Task Executor | Parser assigns, workers execute |

---

## Principle 5: Atomic, Verifiable Task Sizing

### The WHY

**Large tasks fail for predictable reasons:**

1. **Context overflow** - Task requires more tokens than window allows
2. **Scope creep** - Undefined boundaries expand during execution
3. **Verification impossible** - Can't test something that isn't complete
4. **Recovery lost** - Partial failure means losing all progress

**Atomic tasks succeed because:**
1. They fit in one context window
2. They have clear boundaries
3. They can be independently verified
4. They can be committed atomically

### The Golden Rule

> "Each story must be completable in ONE iteration (~one context window)"
> -- Ryan Carson

### The 2-3 Sentence Test

**If you can't describe the task in 2-3 sentences, it's too big.**

Good: "Add investorType column to users table with default value 'cold'. Create migration. Run npm typecheck."

Bad: "Implement the investor management system with types, filtering, and reporting."

### What "Atomic" Means

| Property | Definition |
|----------|------------|
| Self-contained | Does not require external changes to complete |
| Testable | Can verify completion independently |
| Committable | Makes sense as a single git commit |
| Reversible | Can be rolled back cleanly |
| Time-bounded | Completable in one context window |

### What "Verifiable" Means

**Acceptance criteria must be checkable by the agent itself.**

Good criteria (verifiable):
```json
{
  "acceptanceCriteria": [
    "Column 'investorType' exists with default 'cold'",
    "npm run typecheck passes",
    "npm run test passes"
  ]
}
```

Bad criteria (vague):
```json
{
  "acceptanceCriteria": [
    "Works correctly",
    "Good UX",
    "Handles edge cases"
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

This is the quality gate. No exceptions.

### Task Sizing Reference

| Size | Lines of Code | Files | Iterations | Example |
|------|---------------|-------|------------|---------|
| XS | 1-20 | 1 | 1 | Add column, fix typo |
| S | 20-100 | 1-2 | 1 | New component, endpoint |
| M | 100-300 | 2-5 | 1-2 | Feature piece, integration |
| L | 300-1000 | 5-10 | 3-5 | Small feature, refactor |
| XL | 1000+ | 10+ | 5+ | Full feature (MUST DECOMPOSE!) |

**Rule:** XL tasks MUST be decomposed into S/M tasks.

### Derived Patterns

| Pattern | Task Sizing Implementation |
|---------|---------------------------|
| PRD with user stories | Each story is one atomic task |
| Ralph Loop | One story per iteration |
| Kanban Loop | Pick one task, complete, repeat |
| Vertical Slice | Feature broken by user-visible functionality |
| Strangler Fig | Gradual replacement in atomic steps |

---

## Principle 6: Quality Gates Before Commit

### The WHY

**Broken code propagates.** If iteration N commits broken code, iteration N+1 inherits a broken baseline. Now N+1 must:
1. Understand the break
2. Fix it
3. THEN do its assigned work

This compounds. Broken code creates debugging spirals that consume context and time.

**Working code accumulates.** If every commit passes tests, every future iteration starts from a working baseline. Progress is monotonic.

### The Gate Pattern

```
┌─────────────────────────────────────────────────────────┐
│                    QUALITY GATES                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  BEFORE ANY COMMIT:                                     │
│                                                          │
│  1. Type checking     ──→ npm run typecheck              │
│  2. Unit tests        ──→ npm test                       │
│  3. Lint              ──→ npm run lint                   │
│  4. Integration tests ──→ npm run test:integration       │
│                                                          │
│  ALL PASS? ──→ Commit allowed                           │
│  ANY FAIL? ──→ Fix BEFORE commit, retry gates           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### The Anthropic Observation

> "Claude's tendency to mark features complete without proper testing... did much better at verifying end-to-end once explicitly prompted to use browser automation tools"
> -- Anthropic Best Practices

**The problem is real.** Without explicit verification requirements, agents will declare completion prematurely.

### Gate Implementation

1. **Explicit criteria in PRD** - Every story includes verification commands
2. **Automated verification** - Run tests programmatically, not by asking
3. **Block on failure** - No commit until green
4. **Browser verification for UI** - Use Playwright/browser automation

### The CI Green Mandate

> "Tests + types must pass every commit. No broken code inheritance."
> -- Ralph Pattern

This is non-negotiable. Breaking this rule causes:
- Debugging spirals
- Context waste
- Lost progress
- Compound failures

### Browser Automation Verification

For UI tasks, code tests aren't enough:

```json
{
  "acceptanceCriteria": [
    "Navigate to /dashboard",
    "Click 'Add Item' button",
    "Modal appears with form",
    "Fill form and submit",
    "Item appears in list",
    "No console errors"
  ],
  "verification": "Run Playwright test suite"
}
```

### Derived Patterns

| Pattern | Quality Gate Implementation |
|---------|----------------------------|
| CI Green Enforcement | Tests pass every commit |
| Dr. Ralph | 80% confidence threshold between phases |
| Multi-Phase Verification | Per-agent → cross-agent → human gates |
| TDD for Agents | Write test first, task is "make it pass" |
| Approval Testing | Complex output compared to approved baseline |

---

## Principle 7: Isolation Prevents Contamination

### The WHY

**Shared state causes conflicts.** When multiple agents operate on the same files:
- Edits overwrite each other
- Merge conflicts arise
- Partial changes break builds
- Context gets polluted with conflict resolution

**Isolation enables parallelization.** When each agent has its own space:
- No conflicts possible
- Parallel execution is safe
- Failures are contained
- Recovery is straightforward

### Isolation Strategies

| Strategy | Mechanism | Best For |
|----------|-----------|----------|
| Directory isolation | Each agent owns a directory | Domain specialization |
| Branch isolation | Each agent works on its own branch | Feature parallelism |
| Worktree isolation | Git worktrees share repo, isolate checkouts | Heavy parallelism |
| Container isolation | Docker containers with volume mounts | Production systems |
| Process isolation | Separate Claude processes per directory | Simple parallelism |

### The Worktree Pattern

```bash
# Main repo
~/project/
  ├── .git/           # Shared git database
  └── src/            # Main working directory

# Worktrees (parallel agent checkouts)
~/project-worktrees/
  ├── feature-a/      # Agent 1's isolated directory
  ├── feature-b/      # Agent 2's isolated directory
  └── bugfix-c/       # Agent 3's isolated directory
```

### Directory Ownership

For persistent multi-agent systems:

```
agent-frontend/ → Only frontend agent touches
agent-backend/  → Only backend agent touches
shared/         → Read-only for all, write via handoff protocol
```

### Implications

1. **Define boundaries explicitly** - Which agent owns which files?
2. **Use handoffs for cross-boundary** - File-based, not direct communication
3. **Merge at controlled points** - Human review at PR, not continuous
4. **Contain failures** - One agent's crash doesn't affect others

### Derived Patterns

| Pattern | Isolation Implementation |
|---------|-------------------------|
| Panopticon | Each life domain in separate directory |
| Git worktrees | Parallel agents with shared repo |
| AI-Maestro | Docker containers per agent |
| Branch discipline | Each feature on its own branch |
| Domain ownership | Explicit file ownership rules |

---

## Principle 8: Explicit Communication Over Implicit

### The WHY

**LLMs don't share memory.** Unlike human teams who build shared context through conversation, each agent instance starts with zero knowledge of others.

**Implicit coordination fails.** Agents cannot:
- Sense what other agents are doing
- Know if a file is being edited elsewhere
- Coordinate timing without signals
- Share learnings automatically

**Explicit communication succeeds.** When agents:
- Write state to files
- Follow handoff protocols
- Declare ownership explicitly
- Signal completion clearly

### Communication Mechanisms

| Mechanism | Use Case | Example |
|-----------|----------|---------|
| File-based handoffs | Agent-to-agent context transfer | `handoff-agent1-to-agent2.json` |
| Git commits | Progress signaling | Commit message as communication |
| Progress.txt | Learning propagation | Append-only log |
| Task status files | Coordination state | `prd.json` with passes/fails |
| Event files | Real-time signals | `/tmp/agent-events/` |

### The Handoff Protocol

```json
// handoff-agent1-to-agent2.json
{
  "from": "agent1",
  "to": "agent2",
  "timestamp": "2026-01-09T10:30:00Z",
  "context": {
    "completed": ["API schema", "Database models"],
    "next_steps": ["Implement REST endpoints"],
    "blockers": [],
    "notes": "Using FastAPI, see docs in /api/README.md"
  }
}
```

### The Promise Pattern

Explicit completion signals:

```
If all tasks complete, output: <promise>COMPLETE</promise>
```

The controlling loop greps for this signal. No ambiguity.

### Derived Patterns

| Pattern | Communication Implementation |
|---------|------------------------------|
| Ralph termination | `<promise>COMPLETE</promise>` signal |
| File handoffs | JSON files between agents |
| Git handoffs | Commits as state communication |
| MCP Agent Mail | Email-like agent messaging |
| Event-driven | File-based event bus |
| Consensus protocol | Multi-agent decision voting |

---

## Deriving New Patterns from Principles

The true power of understanding principles is the ability to **derive new patterns** for novel situations.

### The Derivation Process

1. **Identify the constraint** - What's the primary challenge?
2. **Map to principles** - Which principles apply?
3. **Check for conflicts** - Do any principles conflict in this case?
4. **Combine mechanisms** - What implementations serve multiple principles?
5. **Validate** - Does the derived pattern satisfy the constraints?

### Example Derivation: Multi-Model Ensemble

**Scenario:** Need to build a complex feature with both architecture decisions and implementation.

**Constraint mapping:**
- P1 (Context finite) → Need to preserve context for complex work
- P4 (Orchestrator/Worker) → Separate planning from execution
- P5 (Atomic tasks) → Break into completable chunks
- P6 (Quality gates) → Each chunk verified before next

**Derived pattern:**
```
1. Opus agent (planning mode) → Analyze requirements, produce PRD
2. PRD verified by human
3. Sonnet workers (parallel) → Implement each story
4. Each story passes tests before commit
5. Opus agent (review mode) → Verify integration
```

This pattern didn't exist in the extraction - it was derived from principles.

### Example Derivation: Overnight Feature Migration

**Scenario:** Need to migrate 500 files from old pattern to new.

**Constraint mapping:**
- P1 (Context finite) → Can't load 500 files at once
- P2 (External state) → Track progress across sessions
- P3 (Fresh context) → Each batch in fresh session
- P5 (Atomic tasks) → Each file or small batch is one task

**Derived pattern:**
```
1. Create migration PRD with one story per file (or batch of 10)
2. Ralph loop with MAX_ITERATIONS=100
3. Each iteration: migrate one batch, run tests, commit
4. Progress.txt tracks which files done
5. Loop continues until all batches pass
```

### The Principle Compatibility Matrix

When combining principles, some reinforce each other:

| Principle | Reinforces | Tension With |
|-----------|------------|--------------|
| P1 (Context) | P3 (Fresh), P2 (External), P5 (Atomic) | Extended sessions |
| P2 (External) | P3 (Fresh), P8 (Explicit) | In-context memory |
| P3 (Fresh) | P1 (Context), P2 (External) | Session continuity |
| P4 (Separation) | P1 (Context), P7 (Isolation) | Simple single-agent |
| P5 (Atomic) | P6 (Gates), P3 (Fresh) | Large monolithic tasks |
| P6 (Gates) | P5 (Atomic), P2 (External) | Speed-first development |
| P7 (Isolation) | P4 (Separation), P8 (Explicit) | Shared state |
| P8 (Explicit) | P7 (Isolation), P2 (External) | Implicit coordination |

---

## Quick Reference: Principle Application

### When Things Break, Check Principles

| Symptom | Likely Violated Principle | Fix |
|---------|---------------------------|-----|
| Agent forgets previous work | P2 (External state) | Externalize to files |
| Quality degrades over time | P1/P3 (Context/Fresh) | Reset more frequently |
| Workers spawn their own agents | P4 (Separation) | Explicit worker preamble |
| Tasks never complete | P5 (Atomic sizing) | Smaller stories |
| Broken code accumulates | P6 (Quality gates) | Enforce tests before commit |
| Agents conflict on files | P7 (Isolation) | Worktrees or ownership |
| Agents don't coordinate | P8 (Explicit comms) | File-based handoffs |

### The Principle Checklist

Before any multi-session or multi-agent work:

- [ ] Is state externalized to survive session death? (P2)
- [ ] Is each task completable in one context window? (P5)
- [ ] Are quality gates defined and enforced? (P6)
- [ ] Is orchestrator separated from workers? (P4)
- [ ] Are agents isolated from each other? (P7)
- [ ] Is communication explicit via files? (P8)
- [ ] Is fresh context preferred over extended sessions? (P3)
- [ ] Is context budget tracked and respected? (P1)

---

## Summary: The Eight Principles

1. **Context Is The Primary Constraint** - All patterns optimize around finite context windows
2. **External State > Internal Memory** - Files persist, context evaporates
3. **Fresh Context > Extended Sessions** - New instances beat long conversations
4. **Separation of Concerns** - Orchestrators coordinate, workers execute
5. **Atomic, Verifiable Tasks** - Complete in one iteration, verify before commit
6. **Quality Gates Before Commit** - Tests must pass, no broken code inheritance
7. **Isolation Prevents Contamination** - Own your space, don't conflict
8. **Explicit Communication** - File-based handoffs, not implicit coordination

**The Meta-Principle:** When in doubt, externalize, isolate, verify, and restart fresh.

---

## Troubleshooting

### Common Issue: Principle Violation Goes Unnoticed Until Failure
**Symptom:** Pattern works for small tasks but fails catastrophically on larger ones
**Cause:** Subtle principle violations that only manifest at scale
**Fix:** Use the principle checklist before any multi-session or multi-agent work:
- [ ] Is state externalized to survive session death? (P2)
- [ ] Is each task completable in one context window? (P5)
- [ ] Are quality gates defined and enforced? (P6)
- [ ] Is orchestrator separated from workers? (P4)
- [ ] Are agents isolated from each other? (P7)
- [ ] Is communication explicit via files? (P8)

### Common Issue: Fresh Context Pattern Feels Inefficient
**Symptom:** Startup overhead each iteration seems wasteful
**Cause:** Misunderstanding the tradeoff between consistency and speed
**Fix:**
1. Accept that reading state takes ~5-10 seconds but prevents hours of debugging
2. Measure: fresh context iterations are MORE efficient over 10+ iterations
3. The "inefficiency" is the feature - it prevents context rot

### Common Issue: Orchestrator Keeps "Helping" With Implementation
**Symptom:** Orchestrator context fills with code; loses coordination capacity
**Cause:** Unclear role boundaries or orchestrator prompt too permissive
**Fix:**
1. Add explicit prohibition: "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS."
2. Restrict orchestrator tools to: TaskCreate, TaskUpdate, Task, AskUserQuestion, Read (1-2 files max)
3. If orchestrator needs file content, spawn a Haiku worker to summarize

### Common Issue: Tasks Never Seem "Atomic" Enough
**Symptom:** Tasks keep expanding scope; never complete in one iteration
**Cause:** Acceptance criteria too vague or task boundaries unclear
**Fix:** Apply the 2-3 sentence test:
- If you can't describe the task in 2-3 sentences, split it
- Good: "Add investorType column to users table with default 'cold'. Run typecheck."
- Bad: "Implement investor management with types, filtering, and reporting"

### Common Issue: Quality Gates Slow Things Down
**Symptom:** Tests take too long; tempted to skip them
**Cause:** Misunderstanding the cost of broken code propagation
**Fix:**
1. Broken code in iteration N means iteration N+1 must debug first
2. Debugging spirals can consume 5-10x the time saved by skipping tests
3. If tests are too slow, invest in faster tests - don't skip them

### Common Issue: Isolation Prevents Necessary Coordination
**Symptom:** Agents can't share information; work duplicated
**Cause:** Over-isolation without handoff mechanism
**Fix:**
1. Isolation doesn't mean no communication - it means EXPLICIT communication
2. Use file-based handoffs: `handoff-agent1-to-agent2.json`
3. The rule is: if it's not in a file, it doesn't exist

---

## Tags

`#core-principles` `#context-management` `#external-state` `#fresh-context` `#orchestrator-worker` `#atomic-tasks` `#quality-gates` `#isolation` `#explicit-communication` `#agent-engineering` `#pattern-derivation`
