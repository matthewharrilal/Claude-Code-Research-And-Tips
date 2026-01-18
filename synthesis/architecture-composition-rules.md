---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-architecture Section 6 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Pattern Composition Rules

> **Purpose:** Document how primitives COMPOSE into complex orchestration patterns for Claude Code.
> **Compiled from:** 50+ extraction files documenting real-world orchestration patterns.

---

## Table of Contents

1. [Primitive Inventory](#primitive-inventory)
2. [Composition Equations](#composition-equations)
3. [Composition Operators](#composition-operators)
4. [Valid Compositions](#valid-compositions)
5. [Invalid Compositions (Anti-patterns)](#invalid-compositions-anti-patterns)
6. [Composition Examples](#composition-examples)
7. [Composition Decision Tree](#composition-decision-tree)

---

## Primitive Inventory

### Core Primitives

| Primitive | Type | Function |
|-----------|------|----------|
| **Bash Loop** | Control Flow | `while :; do ... done` - Repeats until condition |
| **Fresh Context** | Memory Strategy | New Claude instance per iteration |
| **JSON Tasks** | State Management | `prd.json` with `passes: true/false` |
| **File State** | Persistence | `progress.txt` for append-only learnings |
| **Git Memory** | Durability | Commits persist across context resets |
| **Stop Hook** | Control Flow | Intercepts session exit, restarts |
| **Completion Promise** | Termination | `<promise>COMPLETE</promise>` signals done |

### Agent Primitives

| Primitive | Type | Function |
|-----------|------|----------|
| **Orchestrator** | Role | Coordinates without tools, delegates |
| **Worker** | Role | Executes with tools, no spawning |
| **Subagent** | Spawning | `Task()` call for isolated context work |
| **TaskCreate/Update** | Coordination | Native task management with dependencies |
| **BlockedBy** | Dependency | Task dependency graph |

### Infrastructure Primitives

| Primitive | Type | Function |
|-----------|------|----------|
| **Isolated Directory** | Isolation | Separate filesystem per domain |
| **Git Worktree** | Isolation | Parallel branches without conflicts |
| **tmux Pane** | Visibility | Visual monitoring of parallel agents |
| **Docker Container** | Isolation | Full process isolation |
| **Hooks** | Automation | Event-driven shell commands |

### Memory Primitives

| Primitive | Type | Function |
|-----------|------|----------|
| **CLAUDE.md** | Static Context | Project-level instructions |
| **progress.txt** | Dynamic Context | Append-only session learnings |
| **SQLite + Chroma** | Semantic Memory | claude-mem vector storage |
| **Beads** | Git-backed Store | Gas Town shared context |
| **File Handoff** | Agent Communication | JSON files for inter-agent data |

---

## Composition Equations

### Ralph = Loop + JSON Tasks + File State + Git Memory

```
RALPH PATTERN
├── Bash while loop         # Repeats until completion
├── prd.json                # Task tracking (passes: true/false)
├── progress.txt            # Learnings across iterations
├── Git commits             # Durability per iteration
├── Fresh context           # Clean slate each iteration
└── Completion promise      # Explicit termination signal
```

**Composition Formula:**
```
Ralph = while(!complete) {
  FreshContext()
  + ReadState(prd.json, progress.txt, git.log)
  + Execute(next_task)
  + Verify(tests, typecheck)
  + UpdateState(prd.json, progress.txt)
  + Commit()
  + CheckCompletion()
}
```

**Why it works:** External memory (files, git) compensates for context reset. Each iteration benefits from accumulated learnings without context rot.

---

### CC Mirror = Orchestrator + Workers + Task API

```
CC MIRROR PATTERN
├── Central Orchestrator    # No tools, pure coordination
│   └── Uses: TaskCreate, TaskUpdate, Task()
├── Worker Agents           # Tools only, no spawning
│   └── Uses: Read, Write, Edit, Bash
├── Task Dependency Graph   # blockedBy/addBlocks
├── Native CLI Monitor      # Arrow keys navigate agents
└── Auto-compact            # Context management
```

**Composition Formula:**
```
CC_Mirror = Orchestrator(TaskAPI) {
  TaskCreate(tasks[])
  + SetDependencies(blockedBy[])
  + for task in unblocked:
      Worker(task, tools=[Read,Write,Edit,Bash])
  + TaskUpdate(status)
}
```

**Why it works:** Clear separation between coordination (orchestrator) and execution (workers). Workers can't spawn, preventing recursion. Task dependencies auto-schedule work.

---

### Gas Town = Factory + Specialized Roles + tmux

```
GAS TOWN PATTERN
├── Town (~/.gt)            # HQ managing all rigs
├── Rig                     # Individual project repo
├── 7 Worker Roles
│   ├── Mayor               # Town-level coordination
│   ├── Deacon              # Monitoring/handshakes
│   ├── Dogs                # Quality gates
│   ├── Refinery            # Task decomposition
│   ├── Polecat             # Named persistent workers
│   ├── Witness             # Per-rig observer
│   └── Crew                # Ephemeral workers
├── Beads                   # Git-backed data plane
├── MCP Agent Mail          # Email-like inter-agent comms
├── tmux                    # Primary UI
└── Human Overseer          # Inbox for decisions
```

**Composition Formula:**
```
Gas_Town = Factory {
  Mayor(coordination)
  + Deacon(monitoring)
  + Dogs(quality_gates)
  + for rig in rigs:
      Witness(rig, observation)
      + Refinery(rig, decomposition)
      + Polecat[](rig, persistent_workers)
      + Crew[](rig, ephemeral_workers)
  + Beads(shared_context)
  + AgentMail(communication)
  + Overseer(human_decisions)
}
```

**Why it works:** Role specialization prevents overload. Factory can scale workers indefinitely. Beads provides shared context. Human stays in loop via inbox.

---

### Panopticon = Isolated Directories + Cron + Subagents

```
PANOPTICON PATTERN
├── 8 Isolated Directories  # Domain separation
│   ├── ~/nox               # Company/product
│   ├── ~/metrics           # Analytics
│   ├── ~/email             # Communications
│   ├── ~/growth            # Marketing
│   ├── ~/trades            # Finance
│   ├── ~/health            # Wellness
│   ├── ~/writing           # Content
│   └── ~/personal          # Life admin
├── Cron Jobs               # Scheduled data pulls
├── Subagents               # Short-lived task execution
├── File Handoffs           # Inter-domain communication
├── Checkpointing           # Text notifications on completion
└── GUI Fallback            # Mouse/keyboard injection when no API
```

**Composition Formula:**
```
Panopticon = for domain in domains:
  IsolatedDirectory(domain)
  + Cron(scheduled_pulls)
  + while(running):
      Claude(domain_tasks)
      + Subagent(specific_tasks)
      + FileHandoff(cross_domain_data)
      + Checkpoint(notify_human)
```

**Why it works:** Domain isolation prevents context pollution. Cron provides automation. File handoffs enable cross-domain awareness without context bloat.

---

### Infinite Orchestra = Self-Improving Loop + Docker + Profiles

```
ORCHESTRA PATTERN
├── Central Orchestrator    # Monitors idle, triggers improvement
├── Specialized Profiles    # vision, docs, research, coder, memory, architect
├── Docker Container        # 24/7 isolation
├── Self-Improvement Loop   # Auto-enhance when idle
└── Goal Orientation        # "Improve itself" or "build X"
```

**Composition Formula:**
```
Orchestra = Docker {
  while(running):
    if idle:
      SelfImprove()
    else:
      for profile in profiles:
        Worker(profile, specialized_task)
    + Monitor(progress)
}
```

**Why it works:** Docker isolation protects host. Self-improvement creates recursive enhancement. Profiles enable specialization.

---

### Ralph + Playwright = UI Verification Loop

```
RALPH + PLAYWRIGHT PATTERN
├── Ralph Loop              # Iteration until complete
├── Playwright MCP          # Browser automation
├── Subagent Isolation      # Expensive ops in subagent
├── Screenshot Verification # Visual confirmation
└── UI Tests                # Automated acceptance
```

**Composition Formula:**
```
Ralph_Playwright = Ralph {
  for task in ui_tasks:
    Implement(task)
    + Subagent(Playwright) {
        Navigate(url)
        + Screenshot()
        + Assert(visual_state)
      }
    + MarkComplete(if_verified)
}
```

**Why it works:** Subagent isolates Playwright's high token cost from main context. Visual verification catches UI regressions Ralph can't see.

---

### Parallel Ralph = Git Worktrees + Multiple Loops

```
PARALLEL RALPH PATTERN
├── Main Repository         # Shared git database
├── Git Worktrees           # Isolated working directories
│   ├── wt-feature-a        # Ralph loop 1
│   ├── wt-feature-b        # Ralph loop 2
│   └── wt-feature-c        # Ralph loop 3
├── Parallel Execution      # Concurrent loops
├── Merge Strategy          # Human reviews, resolves conflicts
└── Shared PRD              # Coordinated task division
```

**Composition Formula:**
```
Parallel_Ralph = for feature in features:
  git_worktree_add(feature)
  + Fork {
      Ralph(feature, worktree=wt-feature)
    }
+ Wait_All()
+ Merge(worktrees)
```

**Why it works:** Git worktrees provide true isolation. No file conflicts during parallel work. Shared git history for context.

---

## Composition Operators

### Sequential (A then B)

**Symbol:** `A → B`

**Pattern:** Complete A before starting B.

```
# Example: Ralph iteration
Read_State() → Execute_Task() → Verify() → Commit() → Update_State()
```

**When to use:**
- Dependencies between operations
- State must be consistent
- Order matters

**Implementation:**
```bash
# Bash sequential
task_a && task_b && task_c

# Hook chain
set -e  # Exit on first failure
```

---

### Parallel (A and B simultaneously)

**Symbol:** `A ‖ B`

**Pattern:** Execute A and B concurrently.

```
# Example: Gas Town Polecats
Polecat_Alice ‖ Polecat_Bob ‖ Polecat_Carol
```

**When to use:**
- Independent tasks
- No shared file access
- Throughput is priority

**Implementation:**
```bash
# Bash parallel
(task_a) & (task_b) & wait

# Git worktrees
for feature in a b c; do
  (cd wt-$feature && ./ralph.sh) &
done
wait
```

**Constraints:**
- Requires isolation (worktrees, containers, directories)
- May cause merge conflicts
- Increases cost (multiple contexts)

---

### Nested (A contains B)

**Symbol:** `A { B }`

**Pattern:** B runs within A's context or scope.

```
# Example: Subagent within main agent
MainAgent {
  Subagent(expensive_task)
}
```

**When to use:**
- Isolate expensive operations
- Specialize a subtask
- Protect main context window

**Implementation:**
```python
# Task tool spawn
Task(
  subagent_type="general-purpose",
  description="Handle Playwright verification",
  prompt="...",
  run_in_background=True
)
```

**Constraints:**
- Subagent has fresh context
- Results must be explicitly returned
- No direct access to parent state

---

### Conditional (if X then A else B)

**Symbol:** `X ? A : B`

**Pattern:** Choose path based on condition.

```
# Example: Model selection
is_complex_task ? use_opus : use_sonnet
```

**When to use:**
- Different paths for different states
- Error recovery
- Optimization (cost, speed)

**Implementation:**
```bash
# Completion check in Ralph
if grep -q "COMPLETE" output.txt; then
  break  # Exit loop
else
  continue  # Next iteration
fi
```

---

### Iterative (Repeat A until condition)

**Symbol:** `while(!done) { A }`

**Pattern:** Repeat until termination condition.

```
# Example: Ralph loop
while [ $ITERATION -le $MAX_ITERATIONS ]; do
  claude @prompt.md
  # Check completion
done
```

**When to use:**
- Unknown number of steps
- Retry until success
- Eventual consistency

**Constraints:**
- MUST have termination condition
- MUST have iteration limit (safety)
- MUST have external memory (avoid amnesia)

---

### Delegation (A spawns B)

**Symbol:** `A → spawn(B)`

**Pattern:** A creates B to handle subtask.

```
# Example: Orchestrator spawns worker
Orchestrator → spawn(Worker(task))
```

**When to use:**
- Work needs isolated context
- Parallel execution
- Specialized skills

**Constraints:**
- Parent can't see child's context
- Child can't spawn (prevents infinite recursion)
- Results returned via Task output

---

## Valid Compositions

### High Synergy Combinations

| Composition | Components | Synergy Reason |
|-------------|------------|----------------|
| **Ralph + Playwright** | Loop + Browser Automation | Visual verification closes feedback loop |
| **CC Mirror + Git Worktrees** | Task API + Isolation | Dependencies + conflict-free parallel |
| **Gas Town + Beads** | Roles + Shared Context | Specialization + coordination |
| **Ralph + Claude-Mem** | Fresh Context + Memory | Context reset + cross-session learning |
| **Panopticon + Hooks** | Domain Isolation + Automation | Schedule + notification |

### Component Compatibility Matrix

```
                Loop  Tasks  Subagent  Worktree  Docker  Hooks  Memory
Loop             ✓     ✓       ✓         ✓        ✓       ✓      ✓
Tasks            ✓     ✓       ✓         △        △       ✓      ✓
Subagent         ✓     ✓       △         ✓        ✓       ✓      ✓
Worktree         ✓     △       ✓         ✓        ✓       ✓      ✓
Docker           ✓     △       ✓         ✓        ✓       ✓      ✓
Hooks            ✓     ✓       ✓         ✓        ✓       ✓      ✓
Memory           ✓     ✓       ✓         ✓        ✓       ✓      ✓

✓ = Works well together
△ = Works with caveats
```

### Composition Tiers

**Tier 1: Solo Developer (Quick Win)**
```
Ralph = Loop + JSON + Git
Effort: 1 hour setup
Cost: Single agent
```

**Tier 2: Power User (Medium Lift)**
```
Ralph + Playwright = Loop + Browser + Subagents
CC Mirror = Orchestrator + Workers + Tasks
Effort: Half-day setup
Cost: Moderate (subagent overhead)
```

**Tier 3: Agent Factory (Deep Dive)**
```
Gas Town = 7 Roles + Beads + tmux + Mail
Parallel Ralph = Worktrees + Multiple Loops
Effort: Days of setup
Cost: High (multiple accounts)
```

---

## Invalid Compositions (Anti-patterns)

### Subagent Recursion
```
ANTI-PATTERN: Worker spawning workers

Worker {
  Subagent {
    Subagent {    # INFINITE RECURSION RISK
      ...
    }
  }
}
```

**Why it breaks:** Unbounded context growth. Each level spawns more. Eventually hits limits or costs explode.

**Fix:** Workers NEVER spawn. Only orchestrators spawn.

---

### Context Pollution
```
ANTI-PATTERN: Multiple domains in single context

claude "
  Fix the auth bug AND
  Update the marketing copy AND
  Analyze financial data AND
  Generate workout plan
"
```

**Why it breaks:** Unrelated concerns bloat context. Model gets confused. Quality degrades.

**Fix:** Isolate domains (directories, sessions). One domain per context.

---

### Parallel Without Isolation
```
ANTI-PATTERN: Multiple agents editing same files

Terminal 1: claude "Edit src/auth.ts"
Terminal 2: claude "Edit src/auth.ts"  # CONFLICT
```

**Why it breaks:** Race conditions. Overwrites. Broken state.

**Fix:** Use git worktrees. Or serialize access. Or file-level locking.

---

### Loop Without External Memory
```
ANTI-PATTERN: Loop with no persistence

while true; do
  claude "Continue working"  # NO STATE BETWEEN ITERATIONS
done
```

**Why it breaks:** Each iteration starts from zero. No learning. No progress tracking. Repeats same mistakes.

**Fix:** Add prd.json, progress.txt, git commits. External memory compensates for context reset.

---

### Loop Without Termination
```
ANTI-PATTERN: Unbounded loop

while true; do
  claude @prompt.md
done
# NO EXIT CONDITION
```

**Why it breaks:** Runs forever. Consumes unlimited tokens. No completion signal.

**Fix:** Add completion promise. Add max iterations. Add stuck detection.

---

### Orchestrator With Tools
```
ANTI-PATTERN: Orchestrator doing implementation

Orchestrator {
  Write(file)     # WRONG - should delegate
  Edit(file)      # WRONG - should delegate
  spawn(Worker)
}
```

**Why it breaks:** Orchestrator context fills with tool output. Loses coordination capacity. Becomes unfocused.

**Fix:** Orchestrator ONLY uses TaskCreate, TaskUpdate, Task(). Workers do implementation.

---

### Memory Without Retrieval Strategy
```
ANTI-PATTERN: Store everything, retrieve nothing

claude-mem.store(everything)
# ... later ...
claude "Do task"  # NO MEMORY INJECTION
```

**Why it breaks:** Memory exists but isn't used. Wasted storage. No benefit.

**Fix:** Use 3-layer retrieval. Search → Timeline → Get. Inject relevant context only.

---

### Verification-Free Loop
```
ANTI-PATTERN: Ralph without tests

for task in tasks:
  Implement(task)
  MarkComplete()  # NO VERIFICATION
```

**Why it breaks:** Errors compound. Later iterations build on broken code. Garbage accumulates.

**Fix:** ALWAYS verify before marking complete. Tests, typecheck, visual confirmation.

---

### Giant Task Sizing
```
ANTI-PATTERN: Tasks larger than context window

{
  "title": "Build the entire e-commerce platform",
  "passes": false
}
```

**Why it breaks:** Can't complete in one context window. Quality degrades as context fills. Gets stuck.

**Fix:** 2-3 sentence rule. If you can't describe it briefly, split it.

---

## Composition Examples

### Example 1: Overnight Feature Shipping

**Goal:** Ship a feature while you sleep.

**Composition:**
```
Ralph + Playwright + Mobile Notifications

= while(!complete):
    FreshContext()
    + ReadState(prd.json, git)
    + Execute(next_task)
    + if(ui_task):
        Subagent(Playwright.verify())
      else:
        Bash(npm test)
    + Commit()
    + UpdateState()
  + Hook(AskUserQuestion) → PushNotification(phone)
```

**Configuration:**
```json
// prd.json
{
  "userStories": [
    {"id": "1", "title": "Create DB schema", "passes": false},
    {"id": "2", "title": "API endpoints", "passes": false},
    {"id": "3", "title": "UI components", "passes": false}
  ]
}

// settings.json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{"type": "command", "command": "~/.claude/hooks/notify.sh"}]
    }]
  }
}
```

**Result:** Wake up to completed feature. Phone notification if human input needed.

---

### Example 2: Parallel API Development

**Goal:** Build multiple API endpoints simultaneously.

**Composition:**
```
Git Worktrees + Parallel Ralph

= for endpoint in [auth, users, products, orders]:
    git_worktree_add(wt-$endpoint, branch-$endpoint)
    + Fork {
        Ralph(endpoint_prd.json, worktree=wt-$endpoint)
      }
  + Wait_All()
  + for worktree in worktrees:
      git_merge(worktree)
```

**Script:**
```bash
#!/bin/bash
ENDPOINTS="auth users products orders"

for ep in $ENDPOINTS; do
  git worktree add ../wt-$ep $ep-branch 2>/dev/null || true
  (cd ../wt-$ep && ./ralph.sh 15) &
done

wait
echo "All endpoints complete"

for ep in $ENDPOINTS; do
  git merge --no-edit $ep-branch
done
```

**Result:** 4x parallelization without merge conflicts.

---

### Example 3: Full-Stack Team Simulation

**Goal:** Simulate a development team with specialized roles.

**Composition:**
```
CC Mirror Orchestration + Model Selection

= Orchestrator(Opus) {
    TaskCreate([
      {title: "Design database schema", type: "architecture"},
      {title: "Implement API", type: "backend"},
      {title: "Build UI", type: "frontend"},
      {title: "Write tests", type: "testing"}
    ])
    + SetDependencies([
        "API blockedBy schema",
        "UI blockedBy API",
        "tests blockedBy UI"
      ])
    + for task in unblocked:
        Worker(
          model = task.type == "architecture" ? Opus : Sonnet,
          task = task
        )
  }
```

**Skill File:**
```
You are the CONDUCTOR. Your agents play the instruments.

## Model Selection
- Architecture decisions: Opus
- Implementation: Sonnet
- Lookups: Haiku

## Tool Ownership
Orchestrator: TaskCreate, TaskUpdate, Task()
Workers: Read, Write, Edit, Bash
```

**Result:** Automated task scheduling with dependency awareness.

---

### Example 4: Life Automation System

**Goal:** Personal operating system across life domains.

**Composition:**
```
Panopticon + Hooks + GUI Fallback

= for domain in [work, email, finance, health]:
    IsolatedDirectory(~/$domain)
    + Cron(nightly_data_pull)
    + while(always):
        claude($domain/brief.md)
        + if(needs_gui):
            InjectMouseKeyboard()
          else:
            API_call()
        + FileHandoff($domain/output.json → ~/shared/)
    + Hook(completion) → SMS(user)
```

**Cron Example:**
```bash
# Pull finance data nightly
0 2 * * * cd ~/trades && claude "Generate morning brief from overnight data"

# Health sync after workout
0 18 * * * cd ~/health && claude "Analyze WHOOP data, update workout plan"
```

**Result:** Cross-domain awareness. Automated life admin. Morning briefs on phone.

---

## Composition Decision Tree

```
START: What are you building?
  │
  ├─ Single feature, well-defined completion
  │    │
  │    └─ Use: RALPH LOOP
  │         Components: Loop + JSON + Git
  │         Effort: Quick Win
  │
  ├─ Multiple features, need parallelization
  │    │
  │    ├─ Same repo, no file conflicts?
  │    │    │
  │    │    └─ Use: PARALLEL RALPH
  │    │         Components: Worktrees + Multiple Loops
  │    │
  │    └─ Need task dependencies?
  │         │
  │         └─ Use: CC MIRROR
  │              Components: Orchestrator + Workers + Task API
  │
  ├─ UI-heavy work
  │    │
  │    └─ Use: RALPH + PLAYWRIGHT
  │         Components: Loop + Browser Subagent
  │         Note: Subagent isolates high token cost
  │
  ├─ Multi-domain life automation
  │    │
  │    └─ Use: PANOPTICON
  │         Components: Isolated Dirs + Cron + Handoffs
  │         Note: Domain isolation prevents context pollution
  │
  ├─ Maximum throughput, cost no object
  │    │
  │    ├─ Stage 7+ developer?
  │    │    │
  │    │    └─ Use: GAS TOWN
  │    │         Components: Factory + Roles + Beads + tmux
  │    │
  │    └─ Stage 5-6 developer?
  │         │
  │         └─ Use: CC MIRROR (80% of value, 10% of effort)
  │
  └─ Self-improving system
       │
       └─ Use: INFINITE ORCHESTRA
            Components: Docker + Profiles + Self-Improvement Loop
            Warning: Experimental
```

---

## Quick Reference: Composition Formulas

| Pattern | Formula |
|---------|---------|
| **Ralph** | `while(!complete) { Fresh + State + Execute + Verify + Commit }` |
| **CC Mirror** | `Orchestrator(TaskAPI) { spawn(Workers) }` |
| **Gas Town** | `Factory { Mayor + Roles[] + Beads + Mail + Human }` |
| **Panopticon** | `Domains[] { Cron + Claude + Handoffs }` |
| **Orchestra** | `Docker { while(true) { if(idle) improve() else work() } }` |
| **Ralph+Play** | `Ralph { Subagent(Playwright.verify()) }` |
| **Parallel Ralph** | `Worktrees[] { Ralph(worktree) } + Merge` |

---

## Tags

`#composition` `#primitives` `#orchestration` `#patterns` `#ralph` `#cc-mirror` `#gas-town` `#panopticon` `#operators` `#anti-patterns` `#decision-tree`

---

*Compiled: 2026-01-09*
*Source: 50+ extraction files in /extractions/*
*Agent: Claude Opus 4.5*
