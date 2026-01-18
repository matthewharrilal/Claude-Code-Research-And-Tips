# CC Mirror and Multi-Agent Orchestration: Complete Technical Reference

**The Hidden Multi-Agent API That Anthropic Built But Disabled**

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- Numman Ali (@nummanali)

---

## Table of Contents

1. [What CC Mirror Is](#1-what-cc-mirror-is)
2. [Architecture: How Agents Communicate](#2-architecture-how-agents-communicate)
3. [Implementation: Setup and Configuration](#3-implementation-setup-and-configuration)
4. [The Orchestration Skill](#4-the-orchestration-skill)
5. [Task Management API](#5-task-management-api)
6. [Worker Agent Patterns](#6-worker-agent-patterns)
7. [Comparison with Other Patterns](#7-comparison-with-other-patterns)
8. [Production Considerations](#8-production-considerations)
9. [Alternative Multi-Agent Tools](#9-alternative-multi-agent-tools)
10. [Quick Reference](#10-quick-reference)

---

## 1. What CC Mirror Is

### 1.1 The Discovery

Numman Ali reverse-engineered Claude Code's source and discovered that Anthropic had built a complete multi-agent orchestration system but **disabled it in production**. The discovery came from examining what he calls the "minified JS" of Claude Code.

**Core insight:** Claude Code already contains the orchestration primitives. They just need to be unlocked.

### 1.2 How CC Mirror Works

CC Mirror is an opinionated Claude Code distribution that creates isolated instances with multi-agent capabilities:

1. **Patches Claude Code binary** - Modifies the minified JavaScript to enable disabled features
2. **Creates isolated instances** - The `--name mclaude` creates a separate executable/alias
3. **Injects skill system** - Pre-packages the orchestration skill for loading
4. **Provider abstraction** - Routes requests through configurable LLM providers

### 1.3 What's Hidden in Claude Code

Anthropic built and shipped these tools but turned them off:

```
TaskCreate   -> Create with subject, description, acceptance criteria
TaskList     -> Filter: status='open', no owner, not blocked
TaskGet      -> Full context: description, comments, dependencies
TaskUpdate   -> Claim (set owner), add comments, resolve, link references
```

**Dependency Management (also hidden):**
```
addBlocks     -> This task blocks another
addBlockedBy  -> This task is blocked by another
```

These primitives enable a complete task graph with automatic dependency resolution. When you mark Task A as blocking Task B, the system automatically prevents Task B from being claimed until Task A resolves.

### 1.4 How CC Mirror Differs from Task() Tool

| Aspect | CC Mirror Orchestration | Standard Task() Tool |
|--------|------------------------|---------------------|
| **Scope** | Full task graph with dependencies | Single subagent invocation |
| **Persistence** | Tasks survive across sessions | Ephemeral subagent context |
| **Ownership** | Agent IDs claim tasks | No ownership concept |
| **Dependencies** | blocks/blockedBy relationships | No dependency tracking |
| **Team Visibility** | Shared task queue | Isolated conversations |
| **Monitoring** | Built-in CLI dashboard | No native monitoring |

### 1.5 When to Use CC Mirror

**Use CC Mirror when:**
- Building features with clear task decomposition
- Need parallel execution with dependency ordering
- Want quick setup without infrastructure
- Projects benefit from task persistence across sessions
- Budget allows for parallel workers

**Use standard Task() when:**
- Simple subagent delegation for isolated work
- Don't need cross-session task tracking
- Single-shot parallel exploration
- Lighter overhead needed

---

## 2. Architecture: How Agents Communicate

### 2.1 Hub-and-Spoke Model

CC Mirror implements a hub-and-spoke architecture where a central orchestrator coordinates specialized workers:

```
              +------------------+
              |   ORCHESTRATOR   |
              |   (Conductor)    |
              +--------+---------+
                       |
                       | Task() with run_in_background=True
                       |
       +---------------+---------------+
       |               |               |
       v               v               v
  +---------+   +---------+   +---------+
  | Worker1 |   | Worker2 |   | Worker3 |
  | (Coder) |   | (Tester)|   | (Docs)  |
  +---------+   +---------+   +---------+
        |             |             |
        +-------------+-------------+
                      |
               Shared Filesystem
               (handoff files)
```

### 2.2 State Sharing Mechanisms

#### Task Storage Architecture

Tasks are stored locally in isolated directories per variant:

```
~/.cc-mirror/<variant>/config/tasks/<team_name>/
├── 1.json
├── 2.json
└── 3.json
```

Each cc-mirror variant maintains completely isolated storage via `CLAUDE_CONFIG_DIR`, preventing cross-variant task pollution.

#### Dynamic Team Naming (v1.2.0+)

Team names automatically scope by project folder at runtime:
- Running `mc` in `/Users/you/projects/my-api` creates team name `mc-my-api`
- `TEAM=api mc` creates `mc-my-api-api`
- `TEAM=frontend mc` creates `mc-my-api-frontend`

#### Agent Configuration Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `TEAM` | Short alias appended to auto-generated team name | "api" |
| `CLAUDE_CODE_TEAM_NAME` | Base team name | "project-alpha" |
| `CLAUDE_CODE_AGENT_ID` | Unique agent identifier | "worker-001" |
| `CLAUDE_CODE_AGENT_TYPE` | Agent role | "team-lead" or "worker" |

### 2.3 Coordination Patterns

#### Pattern 1: Fan-Out (Parallel Dispatch)

Multiple workers receive independent tasks simultaneously:

```
           +------------------+
           |   ORCHESTRATOR   |
           +--------+---------+
                    |
    +---------------+---------------+
    |               |               |
    v               v               v
+--------+   +--------+   +--------+
|Worker A|   |Worker B|   |Worker C|
+--------+   +--------+   +--------+
  (parallel execution)
```

**Implementation:**
```
Orchestrator flow:
1. TaskCreate "Design API architecture" (no blockers)
2. TaskCreate "Create project structure" (no blockers)
3. Spawn Worker A -> claims and executes #1
4. Spawn Worker B -> claims and executes #2
5. Both run in parallel
```

#### Pattern 2: Pipeline (Sequential Handoffs)

Tasks with explicit dependencies flow sequentially:

```
+--------+     +--------+     +--------+
| Task 1 | --> | Task 2 | --> | Task 3 |
| Schema |     | Backend|     |  Tests |
+--------+     +--------+     +--------+
    |             ^   |           ^
    +--blocks-----+   +--blocks---+
```

**Implementation:**
```
TaskCreate: "Design data models" (P1, no deps)
TaskCreate: "Implement API endpoints" (P2, blockedBy: P1)
TaskCreate: "Write integration tests" (P3, blockedBy: P2)

Worker A completes P1 -> P2 becomes claimable
Worker B completes P2 -> P3 becomes claimable
```

#### Pattern 3: Map-Reduce (Parallel Processing with Aggregation)

Fan-out work, collect results, synthesize:

```
              +------------------+
              |   ORCHESTRATOR   |
              +--------+---------+
                       |
         MAP PHASE     |
                       |
   +-------------------+-------------------+
   |                   |                   |
   v                   v                   v
+--------+        +--------+        +--------+
|Research|        |Research|        |Research|
|  Auth  |        | Payment|        |  DB    |
+--------+        +--------+        +--------+
   |                   |                   |
   +-------------------+-------------------+
                       |
        REDUCE PHASE   v
              +------------------+
              |    SYNTHESIZE    |
              | (Orchestrator)   |
              +------------------+
```

---

## 3. Implementation: Setup and Configuration

### 3.1 Quick Start (3 Commands)

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

That's it. 3 steps to multi-agent orchestration.

### 3.2 Supported Providers

| Provider | Command | Notes |
|----------|---------|-------|
| **mirror** | `--provider mirror` | Default, Claude's internal primitives |
| **GLM-4.7** | `--provider glm` | "Handles multi-agent coordination very well" |
| **OpenRouter** | `--provider openrouter` | Multi-model routing |
| **LiteLLM** | `--provider litellm` | Self-hosted option |
| **Z.ai** | `--provider z.ai` | GLM models |
| **MiniMax** | `--provider minimax` | MiniMax-M2.1 |
| **CCRouter** | `--provider ccrouter` | Local LLMs (Ollama, DeepSeek) |

**Note:** Quick install may skip team mode for GLM - use variant options or update after.

### 3.3 Variant Management Commands

```bash
# List all variants
npx cc-mirror list

# Update variant(s)
npx cc-mirror update [name]

# Delete variant
npx cc-mirror remove <name>

# Health check
npx cc-mirror doctor
```

### 3.4 Enabling Auto-Compact (Critical)

From @nummanali responding to context collapse concerns:
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**Critical:** Enable auto-compact beta feature to prevent context collapse during orchestration.

### 3.5 Full Installation Example Output

```
$ npx cc-mirror quick --provider mirror --name mclaude

Checking Claude Code installation...
  ✓ Claude Code found: v2.1.4

Installing CC Mirror...
  ✓ cc-mirror@1.3.2 installed

Creating isolated variant...
  Name: mclaude
  Provider: mirror
  Location: ~/.mclaude/

Enabling orchestration primitives...
  ✓ TaskCreate enabled
  ✓ TaskList enabled
  ✓ TaskUpdate enabled
  ✓ TaskGet enabled
  ✓ Multi-agent background tasks enabled

✅ Variant created successfully!

To launch, run:
  mclaude
```

---

## 4. The Orchestration Skill

### 4.1 The Trading Floor Mental Model

```
+===============================================================+
|                                                               |
|   You are the Conductor on the trading floor of agents        |
|   Fast. Decisive. Commanding a symphony of parallel work.     |
|   Users bring dreams. You make them real.                     |
|                                                               |
|   This is what AGI feels like.                               |
|                                                               |
+===============================================================+
```

### 4.2 The Iron Law

```
+===============================================================+
|                                                               |
|   YOU DO NOT WRITE CODE.  YOU DO NOT RUN COMMANDS.           |
|   YOU DO NOT EXPLORE CODEBASES.                              |
|                                                               |
|   You are the CONDUCTOR. Your agents play the instruments.   |
|                                                               |
+===============================================================+
```

This is the foundational rule of CC Mirror orchestration. Violating it causes:
- Context pollution (orchestrator loses strategic view)
- Verification bypass (same agent writes and approves)
- Uncontrolled recursion (workers spawning workers)

### 4.3 Core Philosophy (From SKILL.md)

```
+-------------------------------------------------------------+
|                                                             |
|  1. ABSORB COMPLEXITY, RADIATE SIMPLICITY                  |
|     They describe outcomes. You handle the chaos.          |
|                                                             |
|  2. PARALLEL EVERYTHING                                     |
|     Why do one thing when you can do five?                 |
|                                                             |
|  3. NEVER EXPOSE THE MACHINERY                              |
|     No jargon. No "I'm launching subagents." Just magic.   |
|                                                             |
|  4. CELEBRATE WINS                                          |
|     Every milestone deserves a moment.                     |
|                                                             |
|  5. BE GENUINELY HELPFUL                                    |
|     Not performatively. Actually care about their success. |
|                                                             |
+-------------------------------------------------------------+
```

### 4.4 Tool Ownership Division

**Orchestrator Uses Directly:**
- `Read` (references, guides, agent outputs - 1-2 files max)
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `AskUserQuestion`
- `Task` (to spawn workers)

**Workers Use Directly:**
- `Read`, `Write`, `Edit`, `Bash`
- `Glob`, `Grep`, `WebFetch`, `WebSearch`, `LSP`
- **PROHIBITED:** Spawn sub-agents or manage task graph

**Delegation threshold:** If reading more than 2 files, spawn an agent instead.

### 4.5 Model Selection by Task Complexity

| Model | Use Case | Spawn Count |
|-------|----------|-------------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups | 5-10 in parallel |
| **Sonnet** | Capable worker: structured implementation, following patterns, test generation | 2-5 parallel |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks | 1 (sequential) |

### 4.6 Domain Reference Files

Load the right guide before decomposing:

| Task Type | Reference |
|-----------|-----------|
| Feature, bug, refactor | software-development.md |
| PR review, security | code-review.md |
| Codebase exploration | research.md |
| Test generation | testing.md |
| Docs, READMEs | documentation.md |
| CI/CD, deployment | devops.md |
| Data analysis | data-analysis.md |
| Project planning | project-management.md |

### 4.7 Token Cost Reality

The skill file is approximately **5,299 tokens**. This is a one-time context cost that saves tokens through efficient delegation.

From @nummanali responding to token cost concerns:
> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings"

**Token Budget Allocation:**
```
Total Available: ~100K tokens
├── Skill file (orchestration):     ~5K (5%)
├── Project context (CLAUDE.md):    ~5K (5%)
├── Task management overhead:       ~10K (10%)
├── Reference file reads (1-2 max): ~10K (10%)
├── Worker result summaries:        ~40K (40%)
├── Decision reasoning:             ~20K (20%)
└── Buffer:                         ~10K (10%)
```

---

## 5. Task Management API

### 5.1 Task Tools Reference

#### TaskCreate

Creates new tasks with subject and description:

```json
{
  "subject": "Implement authentication middleware",
  "description": "Create Express middleware for JWT verification",
  "acceptanceCriteria": [
    "Middleware validates JWT signature",
    "Returns 401 on invalid/expired token",
    "Attaches user object to request",
    "npm run typecheck passes"
  ],
  "priority": 1,
  "blockedBy": ["task-id-001"],
  "blocks": ["task-id-003", "task-id-004"]
}
```

**Key insight:** Acceptance criteria MUST be verifiable by the agent itself. Vague criteria like "works correctly" or "good UX" lead to false completion signals.

#### TaskGet

Retrieves full task details by ID, returning status, owner, blocking relationships, and comments with enriched metadata.

#### TaskUpdate

Updates task status, adds comments, and sets dependencies:

```json
{
  "taskId": "task-id-002",
  "owner": "worker-agent-id",
  "status": "in_progress",
  "comments": ["Found edge case in token parsing"],
  "references": ["/src/middleware/auth.ts"],
  "addBlockedBy": ["task-id-001"]
}
```

**Ownership protection:** Only the owner or team lead can modify tasks.

#### TaskList

Lists all tasks with summary information, including status, owner, and blocking relationships.

### 5.2 Dependency Management

Tasks support blocking relationships:

```json
{"taskId": "2", "addBlockedBy": ["1"]}
{"taskId": "3", "addBlockedBy": ["2"]}
```

The system prevents workers from claiming blocked tasks and automatically unblocks dependent tasks when a blocking task resolves.

### 5.3 Task vs TodoWrite

| Feature | TaskCreate | TodoWrite |
|---------|------------|-----------|
| Persistence | Survives sessions | Ephemeral |
| Owners | Agent IDs | None |
| Dependencies | blocks/blockedBy | None |
| Team visibility | Yes | No |

**Use TodoWrite for:** Single-session, personal, linear tasks

**Note:** When team mode is enabled, TodoWrite is blocked because team tools offer superior multi-agent coordination.

### 5.4 CLI Task Management

Commands follow the structure: `npx cc-mirror tasks [operation] [id] [options]`

**Operations:**
- `list` (default) - List open tasks
- `show <id>` - Display detailed task info
- `create` - Create new task
- `update <id>` - Modify existing task
- `delete <id>` - Permanently remove task
- `archive <id>` - Move to archive (preserves history)
- `clean` - Bulk cleanup
- `graph` - Visualize dependencies

**Key Flags:**
- `--variant <name>` - Target specific variant
- `--all-variants` - Show tasks across all variants
- `--team <name>` - Target team name
- `--all` - Show all teams in variant(s)
- `--json` - Output enriched JSON with computed fields
- `--ready` - Filter to ready tasks (open + not blocked)

### 5.5 Demo Output

```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
[done] #1 Design API architecture
[ ]    #2 Create project structure
[ ]    #3 Implement data models
[wait] #4 Implement REST API endpoints (blocked by #3)
[wait] #5 Write integration tests (blocked by #4)
[wait] #6 Create API documentation (blocked by #4)
```

---

## 6. Worker Agent Patterns

### 6.1 Worker Preamble Template

Every spawned worker must receive this explicit boundary:

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

### 6.2 Specialized Worker Preambles

#### Codebase Explorer Worker

```
CONTEXT: You are a CODEBASE EXPLORER worker.
PURPOSE: Deep investigation of code structure and patterns.

RULES:
- Use Glob and Grep extensively to map the codebase
- Build mental model of architecture from code, not assumptions
- Report findings as structured notes
- Do NOT modify any files
- Do NOT spawn sub-agents
- Include absolute file paths in all references

OUTPUT FORMAT:
- File: [absolute path]
- Purpose: [what this file/module does]
- Dependencies: [imports, calls to other modules]
- Patterns: [notable patterns or conventions used]

TASK:
[exploration task]
```

#### Security Audit Worker

```
CONTEXT: You are a SECURITY AUDIT worker.
PURPOSE: Identify security vulnerabilities in code.

RULES:
- Check for OWASP Top 10 vulnerabilities
- Scan for hardcoded secrets (API keys, passwords)
- Identify SQL injection, XSS, CSRF risks
- Review authentication/authorization patterns
- Do NOT modify code, only report
- Do NOT spawn sub-agents

OUTPUT FORMAT:
- File: [absolute path]
- Line: [line number]
- Severity: [critical/high/medium/low]
- Issue: [description]
- Recommendation: [fix suggestion]

TASK:
[security audit task]
```

#### Refactoring Worker

```
CONTEXT: You are a REFACTORING worker.
PURPOSE: Improve code structure without changing behavior.

RULES:
- Run tests BEFORE any changes to establish baseline
- Make small, atomic changes
- Run tests AFTER each change
- If tests fail, revert immediately
- Commit each successful refactor separately
- Do NOT spawn sub-agents
- Report all modified files with absolute paths

SAFETY:
- If you break tests, your refactor is rejected
- Prefer multiple small PRs over one large refactor

TASK:
[refactoring task]
```

### 6.3 Full Spawning Example

```python
Task(
  subagent_type="general-purpose",
  description="Implement auth routes",
  prompt="""CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
TASK:
Create src/routes/auth.ts with:
- POST /login - verify credentials, return JWT
- POST /signup - create user, hash password
- Use bcrypt for hashing, jsonwebtoken for tokens
- Follow existing patterns in src/routes/
""",
  run_in_background=True
)
```

### 6.4 CLI Monitoring View

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

**Controls:**
- Up/Down: Select agent
- Enter: View details (prompt, tokens, tools, duration)
- k: Kill agent
- Esc: Exit

---

## 7. Comparison with Other Patterns

### 7.1 CC Mirror vs Gas Town

| Aspect | CC Mirror | Gas Town |
|--------|-----------|----------|
| **Setup Time** | <5 minutes | Hours+ |
| **Complexity** | Low | High (Stage 7+) |
| **Use Cases** | 80% generic | 20% complex |
| **Customization** | Limited | Extensive |
| **Cost** | Normal | "Expensive as hell" |
| **Author** | @nummanali | @steve_yegge |
| **Philosophy** | Simplicity | Factory metaphor |
| **Roles** | Orchestrator + Workers | 7 specialized roles |
| **Persistence** | Task-based | Named agents (Polecats) |
| **Communication** | Task queue | Inbox-based |

**When to escalate to Gas Town:**
- Running 10+ agents regularly
- Need named persistent workers
- Want inbox-based async interaction
- Building production systems at scale
- Ready for "agent village" paradigm

### 7.2 CC Mirror vs Ralph Wiggum Loop

| Aspect | CC Mirror | Ralph Loop |
|--------|-----------|------------|
| **Type** | Multi-agent parallel | Single-agent iterative |
| **Task Decomposition** | Parallel fan-out | Sequential iterations |
| **State Management** | TaskCreate/Update API | File-based (prd.json) |
| **Dependencies** | blocks/blockedBy | Manual ordering |
| **Context Strategy** | Worker isolation | Fresh per iteration |
| **Setup Complexity** | Medium | Low |
| **Use Case** | Complex projects with dependencies | Overnight single-feature shipping |
| **Human Role** | Minimal (set and go) | Review each iteration |
| **Recovery** | Re-spawn workers | Next iteration |

### 7.3 CC Mirror vs Standard Task() Tool

| Aspect | CC Mirror | Standard Task() |
|--------|-----------|-----------------|
| **Parallelization** | Native with dependency management | Manual coordination |
| **Task Persistence** | Survives sessions | Ephemeral |
| **Dependency Tracking** | Built-in blocks/blockedBy | None |
| **Visual Monitoring** | Built-in CLI | None |
| **Setup** | 3 commands | None |
| **Context Isolation** | Automatic per worker | Automatic per subagent |

### 7.4 Architecture Pattern Comparison

| Pattern | Description | Best For |
|---------|-------------|----------|
| **Hub-and-Spoke (CC Mirror)** | Central orchestrator delegates to workers | Clear task decomposition, predictable workflow |
| **Factory (Gas Town)** | Named agents with specialized roles | Large-scale production, persistent agents |
| **Kanban Loop (Ralph)** | Single agent picks from board, iterates | Overnight features, sequential tasks |
| **Peer-to-Peer** | Agents communicate directly | Emergent collaboration, resilience |
| **Personal Panopticon** | Isolated instances per life domain | Domain specialization, isolation |

### 7.5 The 80/20 Rule

From @nummanali:
> "Simplicity covers 80% with zero effort - mass-market ease"

**Positioning:**
- **CC Mirror:** 80% of use cases, zero effort, mass-market
- **Gas Town:** 20% complex cases, heavy customization, Stage 7+ developers only
- **Ralph Loop:** Orthogonal (sequential iteration, can combine with CC Mirror workers)

---

## 8. Production Considerations

### 8.1 Known Limitations

1. **Beta/Disabled Feature** - May change without notice
2. **Relies on editing minified JS** - Updates to Claude Code may break CC Mirror
3. **Context Collapse Risk** - Enable auto-compact to mitigate
4. **Parallel Worker Conflicts** - Multiple workers touching same files
5. **Token Cost** - 5,299 token skill file upfront cost
6. **Windows Compatibility** - Issues reported (fixes in progress via community PRs)
7. **GLM Quick Install** - May skip team mode

### 8.2 Error Handling and Recovery

#### Worker Failure Recovery

**Strategy 1: Retry with Enhanced Context**
```
If worker fails with error:
1. Parse error message for root cause
2. Add error context to new worker preamble:
   "PRIOR ATTEMPT FAILED: [error summary]
    AVOID: [specific pitfall]"
3. Retry with fresh worker
```

**Strategy 2: Decompose Further**
```
If worker consistently fails on task:
1. Split task into smaller subtasks
2. Assign prerequisite tasks first
3. Verify prerequisites before retrying original
```

**Strategy 3: Escalate Model**
```
If Haiku fails -> Retry with Sonnet
If Sonnet fails -> Retry with Opus
If Opus fails -> Escalate to human via AskUserQuestion
```

### 8.3 Production Gaps

Per @nelsonpadil_:
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

**For production deployments, consider:**
1. **State control** - Custom checkpointing and recovery
2. **Business logic gates** - Domain-specific validation
3. **Custom observability** - Logging, metrics, tracing
4. **Evaluation framework** - Output quality measurement
5. **Cost tracking** - Per-task, per-agent budget management

### 8.4 When It's Safe to Use

**Safe scenarios:**
- Personal projects and learning
- Demos and prototypes
- Well-isolated tasks with clear boundaries
- When you can tolerate occasional failures
- Single-session projects (not long-running production)

**Caution scenarios:**
- Production systems requiring reliability
- Tasks requiring custom observability
- Workflows needing precise state control
- High-stakes deployments

**Not recommended:**
- Mission-critical production without backup plans
- When you need official Anthropic support
- If you're not comfortable with beta features

### 8.5 Conflict Resolution Strategies

**Branch Isolation (Primary):**
> "Parallel agents cause merge conflicts - use serial" - Matt Pocock

Each agent works on its own branch. Human merges.

**File-Level Assignment:**
Include in task descriptions: "Only modify files in src/api/ - do not touch src/ui/"

**Git Worktrees for Parallel Isolation:**
```bash
git worktree add ../agent-1 task-1-branch
git worktree add ../agent-2 task-2-branch
```

---

## 9. Alternative Multi-Agent Tools

### 9.1 CC Mirror Ecosystem

**n-skills (Community Extensions):**
```bash
# Add to Claude Code
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

### 9.2 Related Community Tools

| Tool | Purpose | Command |
|------|---------|---------|
| **rpai** | tmux multi-agent manager | `cargo install rpai && rpai` |
| **Claude HUD** | Context/tool monitoring | `/plugin install claude-hud` |
| **Claude Mem** | Persistent memory | `/plugin install claude-mem` |
| **Gas Town** | Factory-scale orchestration | `go install github.com/steveyegge/gastown/cmd/gt@latest` |
| **Orchestra** | Self-improving orchestrator | github.com/0xSero/orchestra |

### 9.3 Multi-Agent Framework Patterns (Transferable)

**AutoGen-Style Group Chat:**
Multiple agents share a conversation thread, taking turns based on topic relevance or orchestrator direction.

**CrewAI-Style Role Definitions:**
Agents with explicit roles, goals, and backstories for specialized behavior.

**LangGraph State Machines:**
Multi-agent workflows as state machines with explicit transitions.

---

## 9.5 Troubleshooting

### Problem: "CC Mirror skill not loading"

**Symptoms:** Claude says it doesn't know about orchestration features. TaskCreate/TaskUpdate not recognized.

**Causes:**
1. `cc_mirror_mode: true` not set in settings.json
2. Skill file not in correct location
3. JavaScript patch not applied to Claude

**Solutions:**
```bash
# Verify installation
npx cc-mirror doctor

# Check settings
cat ~/.claude/settings.json | grep cc_mirror

# Re-run quick install if needed
npx cc-mirror quick --provider mirror --name mclaude

# Verify skill file exists
ls -la ~/.claude/skills/orchestration/
```

---

### Problem: "Workers not spawning"

**Symptoms:** TaskCreate succeeds but workers never start. Tasks stay in OPEN status.

**Causes:**
1. Model doesn't support tool use properly
2. Insufficient permissions in CLAUDE.md
3. Worker context too large

**Solutions:**
```bash
# Check if workers are blocked
"TaskList --status=blocked"

# Try spawning worker explicitly
"Assign this task to a Haiku worker: <task-id>"

# Verify tool permissions
# Workers need: Read, Write, Edit, Bash, Glob, Grep
```

---

### Problem: "Workers touching same files - conflicts"

**Symptoms:** Multiple workers modify same file. Edits overwrite each other. Corrupted output.

**Causes:**
1. Task decomposition didn't isolate file ownership
2. Workers not respecting task boundaries
3. No locking mechanism

**Solutions:**
```bash
# Add explicit file ownership to task descriptions:
"Task: Implement auth
Ownership: src/auth/*.ts
DO NOT MODIFY: src/components/*"

# Use worktrees for true isolation:
git worktree add ../project-worker1 -b worker1
git worktree add ../project-worker2 -b worker2

# Sequence tasks with dependencies:
Task A -> blocks -> Task B
(B waits for A to complete)
```

---

### Problem: "Context collapse - orchestrator degraded"

**Symptoms:** Orchestrator forgets task state. Makes inconsistent decisions. Quality drops.

**Causes:**
1. Running too long without reset
2. Too many workers spawned (context overflow)
3. Auto-compact not enabled

**Solutions:**
```bash
# Enable auto-compact
# In settings.json: "auto_compact": true

# For long sessions, proactively reset:
/compact
"Reload task state and continue"

# Monitor context:
/context
# If >70%, compact before continuing
```

---

### Problem: "Hidden API features disappeared after update"

**Symptoms:** CC Mirror was working, then Claude Code updated, now broken.

**Causes:**
1. Claude Code update changed minified JS
2. Anthropic removed/changed internal APIs
3. CC Mirror patch no longer applies

**Solutions:**
```bash
# Check CC Mirror for updates
npx cc-mirror update

# If no update available, check GitHub issues:
# https://github.com/numman-ali/cc-mirror/issues

# Temporary rollback (if you have old version):
# This is a beta feature - expect breakage

# Join CC Mirror Discord for real-time support:
# (Link in GitHub repo)
```

---

## Emergency Recovery

```bash
# Kill all stuck workers
pkill -f "claude"

# Check task state
npx cc-mirror tasks list --all

# Clear stuck tasks
npx cc-mirror tasks clean --stuck

# Full reset (preserves no task state)
npx cc-mirror tasks clean --all

# Re-initialize fresh
npx cc-mirror remove mclaude
npx cc-mirror quick --provider mirror --name mclaude

# If Git worktrees in chaos:
git worktree list
git worktree remove ../project-worker1 --force
git checkout main
git branch -D worker1-branch

# If CC Mirror completely broken, fallback to:
# 1. Standard Task() tool for subagents
# 2. Manual parallel tmux sessions
# 3. Ralph loops for sequential work
```

---

## 10. Quick Reference

### 10.1 Installation Commands

```bash
# Install variant
npx cc-mirror quick --provider mirror --name mclaude

# Launch
mclaude

# Load skill
"Load the orchestration skill and initiate"
```

### 10.2 Task Management API

```
TaskCreate  - Create task with subject, description, acceptance criteria
TaskList    - List tasks (filter by status, owner, blocked)
TaskGet     - Get full task context
TaskUpdate  - Update task (claim, comment, resolve)
addBlocks   - Mark task as blocking another
addBlockedBy - Mark task as blocked by another
```

### 10.3 Model Selection

```
Haiku  -> Simple lookups, file fetching (5-10 parallel)
Sonnet -> Implementation, patterns, tests (2-5 parallel)
Opus   -> Architecture, complex reasoning (1 sequential)
```

### 10.4 Tool Ownership

```
Orchestrator: Read (1-2 files), Task*, AskUserQuestion
Worker: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
Workers NEVER: Task*, spawn sub-agents
```

### 10.5 Providers

```
mirror    - Default, Claude's internal primitives
glm       - GLM-4.7 (good multi-agent coordination)
openrouter - OpenRouter integration (100+ models)
litellm   - LiteLLM support (self-hosted)
z.ai      - Z.ai integration (GLM models)
minimax   - MiniMax integration
ccrouter  - Local LLMs (Ollama, DeepSeek)
```

### 10.6 CLI Commands

```bash
# Variant management
npx cc-mirror list
npx cc-mirror update [name]
npx cc-mirror remove <name>
npx cc-mirror doctor

# Task management
npx cc-mirror tasks list
npx cc-mirror tasks show <id>
npx cc-mirror tasks create
npx cc-mirror tasks update <id>
npx cc-mirror tasks graph
npx cc-mirror tasks clean --resolved
```

---

## Sources

- [CC Mirror GitHub Repository](https://github.com/numman-ali/cc-mirror)
- [Orchestration Skill Documentation](https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md)
- [Team Mode Documentation](https://github.com/numman-ali/cc-mirror/blob/main/docs/features/team-mode.md)
- [Numman Ali on X - Multi-Agent Orchestration](https://x.com/nummanali/status/2007768692659015877)
- [Numman Ali on X - Skill Deep Dive](https://x.com/nummanali/status/2007984449120874681)
- [Numman Ali on X - CC Mirror Release](https://x.com/nummanali/status/2007849823756575084)
- [The Unwind AI - CC Mirror Analysis](https://www.theunwindai.com/p/claude-code-s-hidden-multi-agent-orchestration-now-open-source)
- [DeepWiki - CC Mirror Overview](https://deepwiki.com/numman-ali/cc-mirror)

---

## Tags

`#cc-mirror` `#nummanali` `#multi-agent` `#orchestration` `#hidden-api` `#task-management` `#hub-and-spoke` `#worker-separation` `#iron-law` `#provider-flexibility` `#native-orchestration` `#anthropic-internals`

---

*Document compiled: 2026-01-13*
*Research sources: 10+ primary documents, 150K+ tokens of research*
