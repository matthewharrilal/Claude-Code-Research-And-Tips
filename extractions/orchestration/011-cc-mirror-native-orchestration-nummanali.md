# CC Mirror - Native Multi-Agent Orchestration (Detailed)

## Source
- **Author:** @nummanali (Numman Ali) - Creator CC Mirror, CTO UK FinTech
- **Date:** 2026-01-04
- **URL:** https://x.com/nummanali/status/2007768692659015877
- **Engagement:** 791 likes, 107K views, 1K bookmarks

---

## Core Insight

> "It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."

**What it is:** Disabled beta feature in Claude Code, enabled via CC Mirror.

---

## What You Get

### Task Management Tools
```
TaskCreate  → Create with subject, description, acceptance criteria
TaskList    → Filter: status='open', no owner, not blocked
TaskGet     → Full context: description, comments, dependencies
TaskUpdate  → Claim (set owner), add comments, resolve, link references
```

### Dependency Management
```
addBlocks     → This task blocks another
addBlockedBy  → This task is blocked by another
```

### Demo Output
```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST API endpoints (blocked by #3)
🟠 #5 Write integration tests (blocked by #4)
🟠 #6 Create API documentation (blocked by #4)
```

---

## Why This Beats Custom Orchestrators

| Aspect | Native | Custom Build |
|--------|--------|--------------|
| Setup | Zero effort | Days/weeks |
| Dependencies | Automatic | Manual wiring |
| Persistence | Built-in | Build yourself |
| Visual tracking | CLI included | Build yourself |
| Recovery | Native | Build yourself |

**Covers 80% of use cases with zero effort.** Gas Town for remaining 20%.

---

## Workflow

1. **Create tasks** with TaskCreate
2. **Set dependencies** via blockedBy/addBlocks
3. **Launch agents** in parallel
4. Agents auto-claim open, unblocked tasks
5. **Monitor via CLI:**
   - ↑/↓ select agent
   - Enter view details
   - k kill agent
   - Esc exit

---

## Agent Monitoring View

```
Background Tasks: 1 active

Async agents (6):
> Implement data models (running)
  Create API documentation (completed)
  Write integration tests (completed)
  Implement REST API endpoints (completed)
  Create project structure (completed)
  Design API architecture (completed)
```

Expand any for:
- Prompt given
- Tokens used
- Tools called
- Duration

---

## Demo Result

Built in one session:
- FastAPI REST API with 12 endpoints
- SQLite database with SQLAlchemy ORM
- 17 integration tests with pytest
- Complete docs (README.md, API_ENDPOINTS.md, ARCHITECTURE.md)

---

## Thread Gold: Parallel Task Executor

**@LLMJunky** shared custom slash command:
```markdown
# Parallel Task Executor

You are a task orchestration agent.
Parse plan file, extract tasks, execute in parallel using subagents.

## Execution Process
1. Read plan file (extract phase tasks)
2. For each task: Launch background subagent
3. Prompt template: "You are a focused task agent..."
4. Monitor for completion
5. Report all results
```

---

## vs TodoWrite

| Feature | TaskCreate | TodoWrite |
|---------|------------|-----------|
| Persistence | Survives sessions | Ephemeral |
| Owners | Agent IDs | None |
| Dependencies | blocks/blockedBy | None |
| Team visibility | Yes | No |

**Use TodoWrite for:** Single-session, personal, linear tasks

---

## Thread Gold: Comparisons

**@muhalgor on Gas Town:**
> "Why do you think it beats other orchestration like Gas Town?"

**@nummanali:**
> "Simplicity covers 80% with zero effort—mass-market ease"

**@nelsonpadil_ (Production caveat):**
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

---

## Caveats

- **Beta/disabled feature** - May change
- **Relies on editing minified JS** via CC Mirror
- **Generic limits** - Production may need custom
- **Agent autonomy risks** - Watch for uncontrolled actions

---

## Actionability

🟡 **Medium Lift** - Need CC Mirror setup

---

---

## What You'll See When You Run This

**Before running:** CC Mirror mclaude variant is installed and ready.

### Using Task Management Tools

**Creating Tasks with Dependencies:**

```
mclaude> Create a task graph for building user authentication

Creating tasks...
```

**Annotated Output:**
```
📋 TaskCreate: Design auth architecture
  → ID: #1
  → Status: open
  → Dependencies: none

📋 TaskCreate: Implement user model
  → ID: #2
  → Status: open
  → Dependencies: blocked by #1

📋 TaskCreate: Add password hashing
  → ID: #3
  → Status: open
  → Dependencies: blocked by #2

📋 TaskCreate: Create JWT service
  → ID: #4
  → Status: open
  → Dependencies: blocked by #3

📋 TaskCreate: Build auth endpoints
  → ID: #5
  → Status: open
  → Dependencies: blocked by #4

📋 TaskCreate: Write auth tests
  → ID: #6
  → Status: open
  → Dependencies: blocked by #5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 TASK GRAPH CREATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#1 Design auth architecture         [ready]
 └→ #2 Implement user model         [wait] blocked by #1
     └→ #3 Add password hashing     [wait] blocked by #2
         └→ #4 Create JWT service   [wait] blocked by #3
             └→ #5 Build endpoints  [wait] blocked by #4
                 └→ #6 Write tests  [wait] blocked by #5
```

### Launching Parallel Agents

```
mclaude> Execute the task graph
```

**Annotated Output:**
```
🚀 Starting orchestration...

Scanning for open, unblocked tasks:
  ✓ #1 Design auth architecture (ready, no owner)

Spawning Agent #1...
  → Task: Design auth architecture
  → Mode: background
  → Status: running

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARALLEL EXECUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Agent #1 working...]                     ← Only one can start initially
                                            (others are blocked)

Agent #1 completed!
  → Decision: FastAPI (Python) with SQLAlchemy
  → Created: docs/ARCHITECTURE.md

TaskUpdate #1:
  → status: done
  → resolution: "Chose FastAPI + SQLAlchemy"

Dependency cascade triggered:
  → #2 unblocked                          ← Now can run!

Spawning Agent #2...
  → Task: Implement user model

[Agent #2 working...]

Agent #2 completed!
  → Created: src/models/user.py

TaskUpdate #2: status = done

Dependency cascade:
  → #3 unblocked

[...]                                     ← Continues through graph
```

### Live Monitoring View

Press `/agents` or `Ctrl+Shift+A`:

```
╔═══════════════════════════════════════════════════════════════╗
║              Background Tasks: 1 active                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Async agents (6):                                             ║
║  > Implement data models              [running]  45s           ║
║    Create API documentation           [completed] 23s          ║
║    Write integration tests            [completed] 67s          ║
║    Implement REST API endpoints       [completed] 89s          ║
║    Create project structure           [completed] 12s          ║
║    Design API architecture            [completed] 34s          ║
║                                                                ║
║  ─────────────────────────────────────────────────────────────║
║  Controls:                                                     ║
║    ↑/↓  Select agent                                          ║
║    Enter View details                                          ║
║    k    Kill selected agent                                    ║
║    Esc  Exit view                                              ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### Agent Details on Enter

```
╔═══════════════════════════════════════════════════════════════╗
║  Agent: Create API documentation                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Status: completed                                             ║
║  Duration: 23 seconds                                          ║
║  Tokens: 2,847                                                 ║
║                                                                ║
║  Prompt given:                                                 ║
║    CONTEXT: You are a WORKER agent...                         ║
║    TASK: Create comprehensive API documentation...             ║
║                                                                ║
║  Tools called:                                                 ║
║    - Read: src/routes/*.py (3 files)                          ║
║    - Write: docs/API_ENDPOINTS.md                             ║
║    - Write: docs/README.md                                    ║
║                                                                ║
║  Output summary:                                               ║
║    Created 2 documentation files                               ║
║    - API_ENDPOINTS.md: 12 endpoints documented                ║
║    - README.md: Project overview with setup instructions       ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### TaskList - Filtering Open Tasks

```
mclaude> Show remaining tasks
```

**Output:**
```
📋 TaskList (filter: status='open', not blocked)

Open and ready:
  ☐ #6 Write integration tests          ← Can work on this

Open but blocked:
  (none)

Completed:
  ☑ #1 Design API architecture
  ☑ #2 Create project structure
  ☑ #3 Implement data models
  ☑ #4 Implement REST endpoints
  ☑ #5 Create documentation

Progress: 5/6 complete (83%)
```

### Comparison: Native vs TodoWrite

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TASK SYSTEMS COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TaskCreate (CC Mirror):
  ✓ Survives across sessions
  ✓ Has owner/agent assignment
  ✓ Supports blocks/blockedBy dependencies
  ✓ Team visibility
  ✓ Built-in CLI monitoring

TodoWrite (Standard Claude):
  ✗ Ephemeral (session only)
  ✗ No ownership concept
  ✗ No dependency tracking
  ✗ Single user only
  ✗ Basic list only

Use TaskCreate for: Multi-agent orchestration, complex projects
Use TodoWrite for: Single-session personal tracking
```

**Timing Expectations:**
- Task creation: Near instant
- Per agent (simple task): 20-60 seconds
- Per agent (complex task): 60-180 seconds
- Full 6-task orchestration: 5-15 minutes
- Dependency resolution: Instant on completion

**What to Do While It Runs:**
- Watch the agent view for live status
- Tasks auto-unblock when dependencies complete
- You can kill stuck agents with `k`
- Add new tasks with TaskCreate if needed

**If you skip dependencies:** Agents may work on tasks out of order, creating broken state (e.g., building endpoints before models exist).

**This connects to:** The insight that native orchestration "covers 80% of use cases with zero effort" - only build custom for the remaining 20%.

---

## Tags
`#orchestration` `#cc-mirror` `#native-feature` `#task-management` `#dependencies` `#parallel-agents`
