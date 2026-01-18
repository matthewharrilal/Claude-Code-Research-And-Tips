---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-architecture Sections 2.1-2.8 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Agent Pattern Primitives

A comprehensive catalog of the atomic building blocks that compose complex AI agent orchestration patterns. These primitives are the smallest reusable units extracted from Ralph, Gas Town, CC Mirror, Panopticon, and other production agent architectures.

---

## Table of Contents

1. [Loop Primitives](#loop-primitives)
2. [State Primitives](#state-primitives)
3. [Control Primitives](#control-primitives)
4. [Quality Gate Primitives](#quality-gate-primitives)
5. [Coordination Primitives](#coordination-primitives)
6. [Memory Primitives](#memory-primitives)
7. [Hook Primitives](#hook-primitives)
8. [Communication Primitives](#communication-primitives)
9. [How Primitives Compose](#how-primitives-compose)

---

## Loop Primitives

### Basic While Loop

```bash
while :; do
  cat prompt.md | claude
done
```

**What it does:** Infinite loop that continuously spawns fresh Claude sessions with the same prompt.

**Key properties:**
- Each iteration gets a fresh context window
- No memory between iterations (relies on external state)
- Will run forever unless externally stopped

**Variations:**
```bash
# Simple infinite loop
while :; do claude @prompt.md ; done

# With sleep between iterations
while :; do claude @prompt.md; sleep 2; done
```

**Used in:** Ralph (basic form), Panopticon cron jobs

---

### Iteration-Limited Loop

```bash
MAX_ITERATIONS=${1:-10}

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "Iteration $i / $MAX_ITERATIONS"

  claude "$PROMPT" | tee output.txt

  # Check for early exit condition
  if grep -q "COMPLETE" output.txt; then
    break
  fi
done
```

**What it does:** Runs a bounded number of iterations with an early exit condition.

**Key properties:**
- Prevents runaway costs
- Supports early exit on completion
- Logs iteration number for debugging

**Variations:**
```bash
# Using seq for POSIX compatibility
for i in $(seq 1 $MAX_ITERATIONS); do ... done

# With set -e for strict error handling
set -e
for i in $(seq 1 $MAX_ITERATIONS); do ... done
```

**Used in:** Ralph (primary form), Marathon Ralph, Lisa

---

### jq-Based Conditional Loop

```bash
while jq '.tasks[] | select(.passes == false)' prd.json | grep -q .; do
  claude --chrome -p "$PROMPT"
done
```

**What it does:** Loops until all tasks in a JSON file are marked as passed.

**Key properties:**
- State-driven termination
- Relies on agent updating JSON file
- More semantic than grep for completion

**Source:** @maurice_kleine in Matt Pocock's thread

---

### Self-Improvement Loop

```
┌─────────────────────────────────────────┐
│  Central Orchestrator                   │
│  └─ Monitors idle + activity            │
│  └─ Triggers self-improvement           │
└─────────────────────────────────────────┘
          │
          ▼ (when idle)
┌─────────────────────────────────────────┐
│  "Improve yourself"                     │
│  → Agents research and implement fixes  │
└─────────────────────────────────────────┘
```

**What it does:** When idle, orchestrator triggers agents to improve the system itself.

**Key properties:**
- Recursive enhancement
- Requires isolation (Docker) for safety
- Goal-directed rather than task-directed

**Source:** 0xSero's Orchestra

---

## State Primitives

### progress.txt (Append-Only Log)

```markdown
# Ralph Progress Log
Started: 2026-01-09

## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- Types: Export from actions.ts

## Key Files
- db/schema.ts
- app/auth/actions.ts

---

## 2026-01-09 - US-001
- What was implemented: Login endpoint
- Files changed: src/api/auth.ts
- **Learnings:**
  - bcrypt needs salt rounds of 12
  - JWT expiry should be configurable
---
```

**Format:**
- Markdown with dated sections
- Append-only (never update previous entries)
- Two sections: "Codebase Patterns" at top (persistent learnings), entries below (per-iteration)

**Key properties:**
- Human-readable
- Git-tracked
- Cross-iteration memory
- Pattern accumulation over time

**Append pattern:**
```bash
# Agent appends after each story
echo "## $(date) - $STORY_ID
- Implemented: $DESCRIPTION
- Files: $FILES_CHANGED
- Learnings: $LEARNINGS
---" >> progress.txt
```

---

### prd.json (Task Status Tracking)

```json
{
  "project": "MyApp",
  "branchName": "ralph/feature-auth",
  "description": "User Authentication System",
  "userStories": [
    {
      "id": "US-001",
      "title": "Create login endpoint",
      "description": "As a user, I need a login endpoint",
      "acceptanceCriteria": [
        "POST /api/auth/login accepts email + password",
        "Returns JWT on success",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "title": "Add password hashing",
      "priority": 2,
      "blockedBy": ["US-001"],
      "passes": false,
      "notes": ""
    }
  ]
}
```

**Key fields:**
| Field | Purpose |
|-------|---------|
| `branchName` | Git branch for this feature set |
| `id` | Unique story identifier |
| `priority` | Lower number = execute first |
| `passes` | `false` = needs work, `true` = complete |
| `blockedBy` | Dependencies (optional) |
| `acceptanceCriteria` | Verifiable completion conditions |
| `notes` | Agent can add learnings |

**Update pattern:**
```bash
# Agent updates after completing story
jq '.userStories[] | select(.id == "US-001") | .passes = true' prd.json > tmp && mv tmp prd.json
```

---

### Simple Task JSON (Alternative Format)

```json
{
  "delete_video_shows_confirmation": {
    "description": "Delete video shows confirmation dialog",
    "passes": true
  },
  "beats_display": {
    "description": "Beats display as three orange ellipses",
    "details": "Add beat to clip, verify 3 orange dots appear",
    "passes": false
  }
}
```

**Key properties:**
- Simpler than userStories format
- Task ID is the object key
- Minimal overhead

**Source:** Matt Pocock's original Ralph format

---

### Checkpoint State

```json
{
  "checkpoint": {
    "timestamp": "2026-01-09T10:30:00Z",
    "lastCompleted": "US-003",
    "currentAttempt": "US-004",
    "attemptCount": 2,
    "lastError": "TypeError: Cannot read property...",
    "gitCommit": "abc123f"
  }
}
```

**What it does:** Enables crash recovery by tracking exactly where the agent was.

**Key properties:**
- Saves git state reference
- Tracks failed attempts
- Enables resume from last known good state

---

### Archive Structure (Compounding Runs)

```
archives/
├── run-2026-01-05/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
├── run-2026-01-06/
│   ├── prd.json
│   ├── progress.txt
│   └── learnings.md
└── run-2026-01-08/
    └── ...
```

**What it does:** Preserves history of previous runs so future agents can learn from past successes and failures.

**Prompt pattern:**
```markdown
## Learning from Previous Runs

Before starting, review archives in `archives/` folder:
- What patterns worked well?
- What caused failures?
- What shortcuts were discovered?

Apply these learnings to current implementation.
```

**Source:** Ryan Carson's "Compounding Ralph"

---

## Control Primitives

### Promise/Stop Condition

```markdown
If ALL stories pass, reply with:
<promise>COMPLETE</promise>

Otherwise end normally.
```

**Detection:**
```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "All stories complete!"
  exit 0
fi
```

**Variations:**
```
PROMISE COMPLETE HERE
<complete/>
##DONE##
```

**Key properties:**
- Unambiguous signal (unlikely to appear in normal output)
- XML-style tags for reliability
- Searched via grep in shell wrapper

---

### Max Iteration Guard

```bash
MAX_ITERATIONS=${1:-10}
CURRENT_ITERATION=1

while [ $CURRENT_ITERATION -le $MAX_ITERATIONS ]; do
  # ... do work ...

  CURRENT_ITERATION=$((CURRENT_ITERATION + 1))
done

echo "Max iterations reached"
exit 1
```

**What it does:** Prevents infinite loops and runaway costs.

**Typical values:**
- 10-25 for feature development
- 50+ for large migrations
- Cost scales linearly with iterations

---

### Story Selection Logic

```markdown
## Your Task

1. Read `scripts/ralph/prd.json`
2. Read `scripts/ralph/progress.txt` (check Codebase Patterns first)
3. Pick highest priority story where `passes: false`
4. Implement that ONE story
5. Run typecheck and tests
6. Update prd.json: `passes: true`
7. Append learnings to progress.txt
```

**Key properties:**
- Priority-ordered selection
- Single story per iteration (prevents context overload)
- External state check before each iteration

---

### Branch Management

```bash
# Create feature branch from prd.json
BRANCH_NAME=$(jq -r '.branchName' prd.json)
git checkout main && git pull
git checkout -b $BRANCH_NAME || git checkout $BRANCH_NAME
```

**What it does:** Ensures agent works on isolated branch, creates if needed.

---

## Quality Gate Primitives

### Typecheck Gate

```bash
npm run typecheck
# or
tsc --noEmit
# or
pnpm typecheck
```

**What it does:** Verifies type safety before marking task complete.

**Always include in acceptance criteria:**
```json
"acceptanceCriteria": [
  "...",
  "npm run typecheck passes"
]
```

---

### Test Gate

```bash
npm test
# or
npm run test -- --related
# or
pytest
```

**What it does:** Runs test suite to verify correctness.

**Variations:**
```bash
# Run only related tests
npm test -- --findRelatedTests $FILE

# Run with coverage
npm test -- --coverage --coverageThreshold='{"global":{"lines":80}}'
```

---

### Lint Gate

```bash
npm run lint
# or
eslint --fix $FILE
# or
prettier --write $FILE
```

**What it does:** Enforces code style consistency.

---

### CI Green Gate

```markdown
Every commit must pass all checks:
1. npm run typecheck
2. npm run test
3. npm run lint

If ANY fail, do NOT mark story as passed.
```

**Key insight from Matt Pocock:**
> "If you don't do this, you're hamstringing future agent runs with bad code, and they'll need to bisect to find bugs."

---

### Browser Verification Gate

```bash
# Start browser server
~/.config/amp/skills/dev-browser/server.sh &

# Write verification script
cd ~/.config/amp/skills/dev-browser && npx tsx <<'EOF'
import { connect, waitForPageLoad } from "@/client.js";

const client = await connect();
const page = await client.page("test");
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(`http://localhost:${process.env.PORT}/your-page`);
await waitForPageLoad(page);
await page.screenshot({ path: "tmp/screenshot.png" });
await client.disconnect();
EOF
```

**What it does:** Visual verification for UI changes using Playwright MCP.

**Key principle:**
> "Not complete until verified with screenshot."

---

## Coordination Primitives

### TaskCreate / TaskUpdate (Native)

```
TaskCreate  → Create with subject, description, acceptance criteria
TaskList    → Filter: status='open', no owner, not blocked
TaskGet     → Full context: description, comments, dependencies
TaskUpdate  → Claim (set owner), add comments, resolve, link references
```

**Dependency management:**
```
addBlocks     → This task blocks another
addBlockedBy  → This task is blocked by another
```

**Visual output:**
```
Tasks:
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST endpoints (blocked by #3)
🟠 #5 Write integration tests (blocked by #4)
```

**Source:** CC Mirror (beta feature enabled)

---

### Worker Preamble Template

```markdown
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

**What it does:** Constrains worker agents to execution only, prevents recursion.

**Key properties:**
- Explicit tool ownership
- No meta-operations allowed
- Must report with absolute paths

---

### Model Selection Matrix

| Model | Use Case | Parallel Capacity |
|-------|----------|-------------------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups | Spawn 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns | 3-5 parallel |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks | 1-2 (expensive) |

---

### Task Spawning Pattern

```python
Task(
  subagent_type="general-purpose",
  description="Implement auth routes",
  prompt="""CONTEXT: You are a WORKER agent...
TASK:
Create src/routes/auth.ts with:
- POST /login - verify credentials, return JWT
- POST /signup - create user, hash password
- Use bcrypt for hashing, jsonwebtoken for tokens
""",
  run_in_background=True
)
```

---

## Memory Primitives

### Git as Memory

```bash
# Future agent understands context from git history
git log --oneline -10
git diff HEAD~5
```

**What it does:** Code changes persist across iterations via version control.

**Key properties:**
- Immutable history
- Diff-based understanding
- Commit messages as documentation

---

### Filesystem as Memory (Panopticon)

```
~/nox        # Company/product
~/metrics    # Analytics/data
~/email      # Communications
~/growth     # Marketing/acquisition
~/trades     # Personal finance/trading
~/health     # Fitness/sleep/wellness
~/writing    # Content creation
~/personal   # Life admin
```

**What it does:** Each domain has isolated directory that persists agent state.

**Key properties:**
- Domain isolation (no cross-contamination)
- Read/write to directory as persistent memory
- Handoffs through explicit file exchanges

---

### AGENTS.md (Permanent Documentation)

```markdown
# AGENTS.md

## Project-Specific Knowledge

- When modifying X, also update Y
- This module uses pattern Z
- Tests require dev server running

## File Relationships

- src/api/auth.ts depends on src/db/users.ts
- Changing schema requires migration
```

**What it does:** Permanent documentation for humans and future agents (not session-specific).

**Contrast with progress.txt:**
- **progress.txt** = session memory for Ralph iterations
- **AGENTS.md** = permanent docs for everyone

---

### CLAUDE.md Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│ Layer 1: Enterprise Policy                                      │
│ /Library/Application Support/ClaudeCode/CLAUDE.md               │
├─────────────────────────────────────────────────────────────────┤
│ Layer 2: Project Memory                                          │
│ ./CLAUDE.md or ./.claude/CLAUDE.md                               │
├─────────────────────────────────────────────────────────────────┤
│ Layer 3: Modular Rules                                           │
│ ./.claude/rules/*.md                                             │
├─────────────────────────────────────────────────────────────────┤
│ Layer 4: Personal + Local                                        │
│ ~/.claude/CLAUDE.md (user global)                                │
│ ./CLAUDE.local.md (project local, gitignored)                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Hook Primitives

### Hook Events

| Event | Trigger | Common Use Cases |
|-------|---------|------------------|
| `PreToolUse` | Before a tool runs | Validation, notifications, approval gates |
| `PostToolUse` | After a tool completes | Formatting, linting, logging |
| `SessionStart` | When session begins | Context loading, environment setup |
| `SessionEnd` | When session ends | Cleanup, summary generation |
| `Stop` | Exit/completion attempts | Loop continuation (Ralph) |

---

### Stop Hook (Loop Continuation)

```bash
#!/bin/bash
# .claude/hooks/stop-hook.sh

# Check if completion promise found
if grep -q "COMPLETE" ./progress.txt; then
    exit 0  # Allow exit
else
    # Restart with prompt
    cat PROMPT.md | claude-code
fi
```

**hooks.json:**
```json
{
  "SessionEnd": [{
    "type": "command",
    "command": "./.claude/hooks/stop-hook.sh"
  }]
}
```

**What it does:** Intercepts session exit and restarts if not complete.

---

### Notification Hook

```bash
#!/bin/bash
# ~/.claude/hooks/poke-notify.sh

QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
MESSAGE="$PROJECT_NAME: Claude needs input - $QUESTION"
curl -X POST "$POKE_API_URL" -d "{\"message\": \"$MESSAGE\"}"
```

**Configuration:**
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

**What it does:** Sends push notification when Claude needs human input.

---

### Auto-Format Hook

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "command": "prettier --write $FILE"
      },
      {
        "matcher": "Write",
        "command": "black $FILE"
      }
    ]
  }
}
```

**What it does:** Automatically formats files after Claude edits them.

---

### Security Gate Hook

```bash
#!/bin/bash
# ~/.claude/hooks/security-gate.sh

COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command')

DANGEROUS_PATTERNS=(
    "rm -rf /"
    "git push --force"
    "DROP TABLE"
    "sudo"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        echo "BLOCKED: Dangerous command pattern detected" >&2
        exit 1  # Non-zero blocks the operation
    fi
done

exit 0  # Allow
```

**Exit code behavior:**
- `0` = Allow operation
- Non-zero = Block operation, show stderr to user

---

## Communication Primitives

### File-Based Handoffs

```
~/shared/
  ├── handoff-agent1-to-agent2.json
  └── status.json
```

```json
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

**Source:** Panopticon pattern

---

### Git-Based Handoffs

```markdown
## progress.txt serves as handoff log

Each iteration:
1. Agent reads progress.txt (context from previous iterations)
2. Agent does work
3. Agent appends learnings to progress.txt
4. Agent commits changes to git
5. Next iteration starts fresh, reads progress.txt + git history
```

---

### MCP Agent Mail

```
Agents communicate via email-like interfaces:
- No training needed (natural behavior)
- Async by default
- Message queue abstraction
```

**Source:** github.com/Dicklesworthstone/mcp_agent_mail (used in Gas Town)

---

### Cron-Based Scheduling

```bash
# Cron job for scheduled agent runs
0 6 * * * cd ~/trades && claude "Generate morning brief" > brief.md

# Keep system awake during long runs
caffeinate -i

# Simple alias for natural language CLI
alias c='claude'
```

**Source:** Panopticon pattern

---

## How Primitives Compose

### Ralph Loop = Basic Composition

```
┌─────────────────────────────────────────────────────────────────┐
│                       RALPH LOOP                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Iteration-Limited Loop                                          │
│       │                                                          │
│       ├── prd.json (State)                                       │
│       │       └── Tracks: passes: true/false                     │
│       │                                                          │
│       ├── Story Selection Logic                                  │
│       │       └── Pick highest priority where passes == false    │
│       │                                                          │
│       ├── Quality Gates                                          │
│       │       ├── Typecheck                                      │
│       │       └── Tests                                          │
│       │                                                          │
│       ├── progress.txt (Memory)                                  │
│       │       └── Append learnings each iteration                │
│       │                                                          │
│       ├── Git Commit                                             │
│       │       └── Persist code changes                           │
│       │                                                          │
│       └── Promise/Stop Condition                                 │
│               └── <promise>COMPLETE</promise>                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### CC Mirror Orchestration = Hub-and-Spoke Composition

```
┌─────────────────────────────────────────────────────────────────┐
│                    CC MIRROR ORCHESTRATION                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ╔═════════════════════════════════════════════════════════╗    │
│  ║              ORCHESTRATOR (Conductor)                    ║    │
│  ║  Tools: TaskCreate, TaskUpdate, Task (spawn), Read       ║    │
│  ║  Role: Decompose, delegate, synthesize                   ║    │
│  ╚═════════════════════════════════════════════════════════╝    │
│                          │                                       │
│         ┌────────────────┼────────────────┐                     │
│         │                │                │                     │
│         ▼                ▼                ▼                     │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐                  │
│   │ Worker 1 │    │ Worker 2 │    │ Worker 3 │                  │
│   │ (Haiku)  │    │ (Sonnet) │    │ (Opus)   │                  │
│   └──────────┘    └──────────┘    └──────────┘                  │
│        │                │                │                      │
│        └── Worker Preamble (prevents recursion) ──┘             │
│                                                                  │
│   Coordination: TaskCreate dependencies (blockedBy/blocks)       │
│   Memory: Native task persistence                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### Gas Town = Factory Composition

```
┌─────────────────────────────────────────────────────────────────┐
│                        GAS TOWN                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ~/.gt (Town HQ)                                                 │
│       │                                                          │
│       ├── Mayor (Town-level coordination)                        │
│       ├── Deacon (Monitoring/handshakes)                         │
│       ├── Dogs (Quality gates/watchdogs)                         │
│       ├── Refinery (Task decomposition)                          │
│       ├── Witness (Per-rig observer)                             │
│       └── Overseer (YOU - human with inbox)                      │
│                                                                  │
│  Workers:                                                        │
│       ├── Polecat (Named persistent workers)                     │
│       └── Crew (Ephemeral workers)                               │
│                                                                  │
│  Communication: MCP Agent Mail                                   │
│  Memory: Beads (Git-backed data plane)                           │
│  UI: tmux (primary interface)                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### Panopticon = Domain Isolation Composition

```
┌─────────────────────────────────────────────────────────────────┐
│                      PANOPTICON                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  8 Parallel Isolated Instances                                   │
│                                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                │
│  │ ~/nox   │ │~/metrics│ │ ~/email │ │~/growth │                │
│  │ Product │ │Analytics│ │ Comms   │ │Marketing│                │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘                │
│       │          │          │          │                        │
│       └──────────┴──────────┴──────────┘                        │
│                     │                                            │
│                     ▼                                            │
│              File-Based Handoffs                                 │
│              ~/shared/handoff-*.json                             │
│                                                                  │
│  Automation:                                                     │
│       ├── Cron jobs for scheduled runs                           │
│       ├── caffeinate -i (keep awake)                            │
│       └── Text notifications on completion                       │
│                                                                  │
│  Memory: Filesystem + Git per domain                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### Primitive Composition Matrix

| Pattern | Loop | State | Control | Quality | Coordination | Memory | Hooks |
|---------|------|-------|---------|---------|--------------|--------|-------|
| **Ralph** | Iteration-Limited | prd.json + progress.txt | Promise/Stop | Typecheck + Tests | Single-agent | Git + Files | Stop hook |
| **CC Mirror** | Event-driven | TaskCreate native | Task dependencies | Per-task gates | Hub-and-spoke | Task persistence | - |
| **Gas Town** | Continuous | Beads (Git-backed) | Role-based | Dogs (watchdogs) | Factory model | MCP Agent Mail | - |
| **Panopticon** | Cron-scheduled | Filesystem | Domain isolation | Domain-specific | File handoffs | Dir per domain | Notifications |
| **Orchestra** | Self-improving | JSON profiles | Idle detection | Docker isolation | Specialized workers | Neo4j optional | - |

---

## Quick Reference: Primitive Selection

### When to use which primitive:

**For overnight feature development:**
- Iteration-Limited Loop + prd.json + Promise/Stop + Quality Gates

**For parallel life automation:**
- Cron scheduling + Filesystem memory + Domain isolation + Notification hooks

**For complex multi-agent work:**
- TaskCreate coordination + Worker Preamble + Model Selection Matrix

**For safe autonomous operation:**
- Security Gate hooks + Docker isolation + Max Iteration Guard + Checkpointing

**For cross-iteration learning:**
- progress.txt (append-only) + AGENTS.md (permanent) + Archive structure

---

## Sources

1. Ralph Loop - Geoffrey Huntley, Ryan Carson, Matt Pocock
2. CC Mirror - Numman Ali
3. Gas Town - Steve Yegge
4. Panopticon - Molly Cantillon
5. Orchestra - 0xSero
6. Anthropic Best Practices - Official documentation
7. Community patterns from Claude Code ecosystem

---

## Tags

`#primitives` `#loops` `#state` `#control` `#quality-gates` `#coordination` `#memory` `#hooks` `#composition` `#ralph` `#gas-town` `#cc-mirror` `#panopticon` `#orchestration`
