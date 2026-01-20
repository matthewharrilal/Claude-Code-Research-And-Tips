# CC-Mirror: Hidden Multi-Agent Orchestration
## Numman Ali's Discovery of Native Claude Code Task APIs

---
## D-FINAL Connection
**Contributed to:** D-FINAL-architecture.md, D-FINAL-implementation.md
**Last enhanced:** 2026-01-18 (Wave 3)
---

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- Numman Ali (@nummanali)

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [The Discovery](#2-the-discovery)
3. [Core Architecture](#3-core-architecture)
4. [Installation & Setup](#4-installation--setup)
5. [Technical Implementation](#5-technical-implementation)
6. [Design Patterns](#6-design-patterns)
7. [Comparison Matrix](#7-comparison-matrix)
8. [Implementation Guide](#8-implementation-guide)
9. [Troubleshooting](#9-troubleshooting)
10. [Exact Quotes](#10-exact-quotes)
11. [Quick Reference Card](#11-quick-reference-card)

---

## 1. You Are Here

### Position on the Complexity Ladder

```
+=========================================================================+
|                     COMPLEXITY LADDER POSITION                          |
+=========================================================================+
|                                                                         |
|  Level 0: Single session, one task            [ ]                       |
|  Level 1: Hooks and automation                [ ]                       |
|  Level 2: Skills and enhanced context         [ ]                       |
|  Level 3: Memory persistence                  [ ]                       |
|  Level 4: NATIVE ORCHESTRATION (CC Mirror)    [*] <-- YOU ARE HERE      |
|  Level 5: Multi-instance coordination         [ ]                       |
|  Level 6: External tool integration           [ ]                       |
|  Level 7: Factory-scale (Gas Town)            [ ]                       |
|                                                                         |
+=========================================================================+
```

### Why CC Mirror Matters

CC Mirror unlocks **Level 4-5 orchestration** using primitives Anthropic already built but disabled. This is native multi-agent capability hidden inside Claude Code itself. Before CC Mirror, reaching this level required:

- Building custom task management systems
- Implementing worker coordination from scratch
- Managing dependency graphs manually
- Creating your own monitoring dashboards

CC Mirror gives you all of this in **3 commands**.

### Who This Is For

**This extraction is for developers who:**
- Want multi-agent orchestration without building infrastructure
- Are comfortable with beta/experimental features
- Understand the trade-offs of using undocumented APIs
- Need to decompose complex projects into parallel work streams

**Prerequisites:**
- Familiarity with Claude Code basics
- Node.js and npm installed
- Understanding of task decomposition principles
- Comfort with command-line tools

### What You'll Learn

By the end of this extraction, you will understand:

1. How Numman Ali discovered hidden Task APIs in Claude Code
2. The hub-and-spoke architecture for multi-agent coordination
3. How to install and configure CC Mirror variants
4. Worker preamble patterns that prevent recursion
5. When to use CC Mirror vs Gas Town vs Ralph loops
6. Production considerations and known limitations

---

## 2. The Discovery

### How Numman Ali Found It

Numman Ali, CTO at a UK FinTech company and creator of CC Mirror and OpenSkills, reverse-engineered Claude Code's source and discovered that Anthropic had built a complete multi-agent orchestration system but **disabled it in production**.

From @nummanali:
> "All it took was getting the orchestration skill to the point where the bare primitives could go full throttle"

The discovery came from examining what he calls the "minified JS" of Claude Code. The key insight: **Claude Code already contains the orchestration primitives. They just need to be unlocked.**

### What's Hidden in Claude Code

Anthropic built and shipped these tools but turned them off:

```
+===========================================================================+
|                    HIDDEN TASK MANAGEMENT APIs                            |
+===========================================================================+
|                                                                           |
|  TaskCreate   -> Create task with subject, description, acceptance criteria
|  TaskList     -> Filter: status='open', no owner, not blocked             |
|  TaskGet      -> Full context: description, comments, dependencies        |
|  TaskUpdate   -> Claim (set owner), add comments, resolve, link references|
|                                                                           |
+===========================================================================+

+===========================================================================+
|                    HIDDEN DEPENDENCY MANAGEMENT                           |
+===========================================================================+
|                                                                           |
|  addBlocks     -> This task blocks another                                |
|  addBlockedBy  -> This task is blocked by another                         |
|                                                                           |
+===========================================================================+
```

These primitives enable a complete **task graph with automatic dependency resolution**. When you mark Task A as blocking Task B, the system automatically prevents Task B from being claimed until Task A resolves.

### Why Anthropic Disabled It

Based on thread discussions and community insights, Anthropic likely disabled these features due to:

**Theory 1: Beta Quality**
The features work but may have edge cases that break under heavy use. From the thread:
> "Relies on editing minified JS via CC Mirror"

This suggests the feature exists but isn't polished for general consumption.

**Theory 2: Cost Management**
Multi-agent orchestration can generate significant API costs. Without proper guardrails:
- Workers could spawn infinite sub-workers
- Context explosion across many agents
- No built-in budget controls

**Theory 3: Support Burden**
Complex orchestration creates complex failure modes:
- Difficult to debug multi-agent issues
- Harder to reproduce problems
- More support tickets

**Theory 4: Strategic Timing**
Anthropic may be:
- Saving for enterprise tier
- Waiting for more robust implementation
- Building additional safeguards
- Planning tiered feature release

### What This Reveals About Anthropic's Plans

The existence of these hidden features suggests Anthropic:

1. **Sees multi-agent as the future** - They invested in building it
2. **Wants native orchestration** - Not leaving it to external tools
3. **Is being cautious** - Preferring to disable until ready vs. ship broken
4. **Plans to enable eventually** - Code exists and works

From @nelsonpadil_:
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

This hints at why Anthropic might want to add more infrastructure before enabling these features publicly.

---

## 3. Core Architecture

### Hub-and-Spoke Model

CC Mirror implements a **hub-and-spoke architecture** where a central orchestrator coordinates specialized workers:

```
+===========================================================================+
|                        HUB-AND-SPOKE ARCHITECTURE                         |
+===========================================================================+
|                                                                           |
|                      +------------------+                                 |
|                      |   ORCHESTRATOR   |                                 |
|                      |   (Conductor)    |                                 |
|                      +--------+---------+                                 |
|                               |                                           |
|                               | Task() with run_in_background=True        |
|                               |                                           |
|               +---------------+---------------+                           |
|               |               |               |                           |
|               v               v               v                           |
|          +---------+   +---------+   +---------+                         |
|          | Worker1 |   | Worker2 |   | Worker3 |                         |
|          | (Coder) |   | (Tester)|   | (Docs)  |                         |
|          +---------+   +---------+   +---------+                         |
|                |             |             |                              |
|                +-------------+-------------+                              |
|                              |                                            |
|                       Shared Filesystem                                   |
|                       (handoff files)                                     |
|                                                                           |
+===========================================================================+
```

**Key architectural properties:**

| Property | Implementation |
|----------|---------------|
| **Central coordination** | Orchestrator manages task graph |
| **Worker isolation** | Each worker has independent context |
| **Parallel execution** | Workers run simultaneously |
| **File-based handoff** | Results shared via filesystem |
| **Automatic unblocking** | Dependencies resolve on completion |

### The Trading Floor Mental Model

From the SKILL.md file:

```
+===========================================================================+
|                                                                           |
|   ⚡ You are the Conductor on the trading floor of agents ⚡               |
|                                                                           |
|   Fast. Decisive. Commanding a symphony of parallel work.                 |
|   Users bring dreams. You make them real.                                 |
|                                                                           |
|   This is what AGI feels like.                                            |
|                                                                           |
+===========================================================================+
```

This mental model frames the orchestrator as:
- A decision-maker, not an implementer
- Moving fast through parallel work
- Handling chaos while radiating simplicity
- Translating vague dreams into concrete outputs

### The Iron Law

```
+===========================================================================+
|                                                                           |
|   ⚠️  THE IRON LAW OF CC MIRROR ORCHESTRATION ⚠️                          |
|                                                                           |
|   YOU DO NOT WRITE CODE.  YOU DO NOT RUN COMMANDS.                       |
|   YOU DO NOT EXPLORE CODEBASES.                                          |
|                                                                           |
|   You are the CONDUCTOR. Your agents play the instruments.               |
|                                                                           |
+===========================================================================+
```

This is the foundational rule of CC Mirror orchestration. **Violating it causes:**

| Violation | Consequence |
|-----------|-------------|
| Orchestrator writes code | Context pollution - loses strategic view |
| Orchestrator explores codebase | Context bloat - less room for coordination |
| Orchestrator runs commands | Verification bypass - same agent writes and approves |
| Workers spawn sub-workers | Uncontrolled recursion - exponential agent explosion |

### Tool Ownership Division

**Orchestrator Uses Directly:**

| Tool | Use Case | Limit |
|------|----------|-------|
| `Read` | References, guides, agent outputs | 1-2 files max |
| `TaskCreate` | Create tasks with dependencies | Unlimited |
| `TaskUpdate` | Claim, comment, resolve tasks | Unlimited |
| `TaskGet` | Retrieve task details | As needed |
| `TaskList` | Find available work | As needed |
| `AskUserQuestion` | Clarify requirements | When ambiguous |
| `Task` | Spawn workers | With preamble |

**Workers Use Directly:**

| Tool | Use Case | Notes |
|------|----------|-------|
| `Read` | Examine files | Full access |
| `Write` | Create files | Full access |
| `Edit` | Modify files | Full access |
| `Bash` | Run commands | Full access |
| `Glob` | Find files | Full access |
| `Grep` | Search content | Full access |
| `WebFetch` | Retrieve URLs | Full access |
| `WebSearch` | Search web | Full access |
| `LSP` | Language services | Full access |

**Workers NEVER Use:**
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `Task` (no sub-worker spawning)

### State Sharing Mechanisms

**Task Storage Architecture:**

Tasks are stored locally in isolated directories per variant:

```
~/.cc-mirror/<variant>/config/tasks/<team_name>/
├── 1.json
├── 2.json
└── 3.json
```

Each CC Mirror variant maintains completely isolated storage via `CLAUDE_CONFIG_DIR`, preventing cross-variant task pollution.

**Dynamic Team Naming (v1.2.0+):**

Team names automatically scope by project folder at runtime:
- Running `mclaude` in `/Users/you/projects/my-api` creates team name `mclaude-my-api`
- `TEAM=api mclaude` creates `mclaude-my-api-api`
- `TEAM=frontend mclaude` creates `mclaude-my-api-frontend`

**Agent Configuration Environment Variables:**

| Variable | Purpose | Example |
|----------|---------|---------|
| `TEAM` | Short alias appended to auto-generated team name | "api" |
| `CLAUDE_CODE_TEAM_NAME` | Base team name | "project-alpha" |
| `CLAUDE_CODE_AGENT_ID` | Unique agent identifier | "worker-001" |
| `CLAUDE_CODE_AGENT_TYPE` | Agent role | "team-lead" or "worker" |

---

## 4. Installation & Setup

### Prerequisites

Before installing CC Mirror, ensure you have:

- **Node.js 18+** installed (`node --version`)
- **npm 9+** installed (`npm --version`)
- **Claude Code** already installed and working
- **Anthropic API key** set in environment (`ANTHROPIC_API_KEY`)

### Quick Start (3 Commands)

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal (natural language)
"Load the orchestration skill and initiate"
```

**That's it. 3 steps to multi-agent orchestration.**

### What the Installation Does

When you run `npx cc-mirror quick`:

1. **Checks Claude Code installation** - Verifies prerequisites
2. **Downloads CC Mirror** - Installs the package
3. **Creates isolated variant** - Separate config, sessions, credentials
4. **Patches Claude Code** - Enables disabled Task APIs
5. **Installs orchestration skill** - Pre-packages the conductor skill
6. **Creates launcher command** - `mclaude` (or your chosen name)

### Full Installation Output

```
$ npx cc-mirror quick --provider mirror --name mclaude

🔍 Checking Claude Code installation...
  ✓ Claude Code found: v2.1.4

📦 Installing CC Mirror...
  ✓ cc-mirror@1.6.3 installed

🔧 Creating isolated variant...
  Name: mclaude
  Provider: mirror
  Location: ~/.cc-mirror/mclaude/

🔓 Enabling orchestration primitives...
  ✓ TaskCreate enabled
  ✓ TaskList enabled
  ✓ TaskUpdate enabled
  ✓ TaskGet enabled
  ✓ Multi-agent background tasks enabled

🎨 Applying brand theme...
  ✓ Mirror theme (silver/electric blue)

✅ Variant created successfully!

To launch, run:
  mclaude
```

### Supported Providers

CC Mirror supports multiple LLM providers:

| Provider | Command | Models | Authentication | Use Case |
|----------|---------|--------|----------------|----------|
| **mirror** | `--provider mirror` | Claude models | OAuth/API key | Default - Claude's internal primitives |
| **Z.ai** | `--provider z.ai` | GLM-4.7, GLM-4.5-Air | API Key | Advanced reasoning tasks |
| **MiniMax** | `--provider minimax` | MiniMax-M2.1 | API Key | Unified experience |
| **OpenRouter** | `--provider openrouter` | 100+ models | Auth Token | Flexible model selection |
| **CCRouter** | `--provider ccrouter` | Ollama, DeepSeek, etc. | Optional | Local development |
| **LiteLLM** | `--provider litellm` | Various | Optional | Self-hosted option |

**Provider-specific notes:**
- GLM-4.7: "Handles multi-agent coordination very well" (@nummanali)
- Quick install may skip team mode for GLM - use variant options or update after

### CLI Commands Reference

```bash
# Interactive TUI (full wizard)
npx cc-mirror

# Fast setup
npx cc-mirror quick --provider <provider> --name <name>

# Full wizard
npx cc-mirror create

# List variants
npx cc-mirror list

# Update variant(s)
npx cc-mirror update [name]

# Health check
npx cc-mirror doctor

# Remove variant
npx cc-mirror remove <name>

# Task management
npx cc-mirror tasks [operation] [id] [options]
```

### Variant Directory Structure

After installation, the variant creates:

```
~/.cc-mirror/
├── mclaude/
│   ├── npm/              # Claude Code installation
│   ├── config/           # API keys, sessions
│   │   └── tasks/        # Task storage per team
│   ├── tweakcc/          # Theme customizations
│   └── variant.json      # Variant metadata
```

### Enabling Auto-Compact (Critical)

From @nummanali responding to context collapse concerns:
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**CRITICAL:** Enable auto-compact beta feature to prevent context collapse during orchestration.

To verify auto-compact is enabled:
1. Check variant settings in `~/.cc-mirror/<variant>/config/settings.json`
2. Look for `"auto_compact": true`
3. If missing, add it manually

---

## 5. Technical Implementation

### Task API Details

#### TaskCreate

Creates new tasks with subject, description, and dependencies:

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

Retrieves full task details by ID:

```json
{
  "taskId": "task-id-002",
  "subject": "Implement authentication middleware",
  "description": "Create Express middleware...",
  "status": "in_progress",
  "owner": "worker-agent-id",
  "comments": ["Found edge case in token parsing"],
  "references": ["/src/middleware/auth.ts"],
  "blockedBy": ["task-id-001"],
  "blocks": ["task-id-003"],
  "createdAt": "2026-01-18T10:30:00Z",
  "updatedAt": "2026-01-18T11:15:00Z"
}
```

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

Lists all tasks with summary information:

```
TaskList (filter: status='open', not blocked)

Open and ready:
  ☐ #6 Write integration tests

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

### Worker Spawning Patterns

**Full Spawning Example (TypeScript/JavaScript style):**

```javascript
Task({
  subagent_type: "general-purpose",
  description: "Implement auth routes",
  prompt: `CONTEXT: You are a WORKER agent, not an orchestrator.

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
`,
  run_in_background: true
});
```

### Worker Preamble Template (Complete)

The worker preamble is **critical** for preventing recursion and maintaining role separation:

```
+===========================================================================+
|                       WORKER PREAMBLE TEMPLATE                            |
+===========================================================================+

CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[Your specific task here]

+===========================================================================+
```

### Specialized Worker Preambles

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

#### Documentation Generator Worker

```
CONTEXT: You are a DOCUMENTATION GENERATOR worker.
PURPOSE: Create developer documentation from code analysis.

RULES:
- Read actual code, don't guess
- Include concrete examples from the codebase
- Use consistent formatting (markdown)
- Link to source files with line numbers
- Do NOT modify source code
- Do NOT spawn sub-agents

OUTPUT:
- README sections or standalone docs
- API documentation with examples
- Architecture decision records
- Setup/installation guides

TASK:
[documentation task]
```

#### Testing Worker

```
CONTEXT: You are a TESTING worker.
PURPOSE: Write comprehensive tests for code.

RULES:
- Write comprehensive tests
- Follow existing test patterns
- Include edge cases
- Run tests and report results
- Do NOT spawn sub-agents
- Report test file locations

TASK:
[testing task]
```

### Model Selection by Task Complexity

| Model | Use Case | Spawn Count | Cost Impact |
|-------|----------|-------------|-------------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups | 5-10 in parallel | Low |
| **Sonnet** | Capable worker: structured implementation, following patterns, test generation | 2-5 parallel | Medium |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks | 1 (sequential) | High |

**The "Haiku Army" pattern from cost research:**

Instead of one Opus doing 10 file operations:
- Spawn 10 Haiku workers in parallel
- Each gets isolated context (cheaper)
- Complete 10x faster
- ~10-20x cost reduction

```
# Cost comparison for 10 grep operations:
# 1 Opus session:    ~$0.50-1.00 (sequential, context accumulation)
# 10 Haiku workers:  ~$0.05-0.10 (parallel, isolated context)
```

### Domain Reference Files

Load the right guide before decomposing tasks:

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

---

## 6. Design Patterns

### Pattern 1: Fan-Out (Parallel Dispatch)

Multiple workers receive independent tasks simultaneously:

```
+===========================================================================+
|                        FAN-OUT PATTERN                                    |
+===========================================================================+
|                                                                           |
|                      +------------------+                                 |
|                      |   ORCHESTRATOR   |                                 |
|                      +--------+---------+                                 |
|                               |                                           |
|                               | Task(run_in_background=True)              |
|                               |                                           |
|               +---------------+---------------+                           |
|               |               |               |                           |
|               v               v               v                           |
|          +---------+   +---------+   +---------+                         |
|          | Worker1 |   | Worker2 |   | Worker3 |                         |
|          | (Coder) |   | (Tester)|   | (Docs)  |                         |
|          +---------+   +---------+   +---------+                         |
|                  (parallel execution)                                     |
|                                                                           |
+===========================================================================+
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

**Use when:**
- Tasks are independent
- No shared state between tasks
- Want maximum parallelization
- Time-to-completion is priority

### Pattern 2: Pipeline (Sequential Handoffs)

Tasks with explicit dependencies flow sequentially:

```
+===========================================================================+
|                        PIPELINE PATTERN                                   |
+===========================================================================+
|                                                                           |
|  +--------+     +--------+     +--------+                                |
|  | Task 1 | --> | Task 2 | --> | Task 3 |                                |
|  | Schema |     | Backend|     |  Tests |                                |
|  +--------+     +--------+     +--------+                                |
|      |             ^   |           ^                                      |
|      +--blocks-----+   +--blocks---+                                      |
|                                                                           |
+===========================================================================+
```

**Implementation:**
```
TaskCreate: "Design data models" (P1, no deps)
TaskCreate: "Implement API endpoints" (P2, blockedBy: P1)
TaskCreate: "Write integration tests" (P3, blockedBy: P2)

Worker A completes P1 -> P2 becomes claimable
Worker B completes P2 -> P3 becomes claimable
```

**Use when:**
- Tasks have natural ordering
- Later tasks depend on earlier results
- Want guaranteed sequence
- Building on previous work

### Pattern 3: Map-Reduce (Parallel Processing with Aggregation)

Fan-out work, collect results, synthesize:

```
+===========================================================================+
|                        MAP-REDUCE PATTERN                                 |
+===========================================================================+
|                                                                           |
|                      +------------------+                                 |
|                      |   ORCHESTRATOR   |                                 |
|                      +--------+---------+                                 |
|                               |                                           |
|               MAP PHASE       |                                           |
|                               |                                           |
|           +-------------------+-------------------+                       |
|           |                   |                   |                       |
|           v                   v                   v                       |
|      +--------+          +--------+          +--------+                  |
|      |Research|          |Research|          |Research|                  |
|      |  Auth  |          | Payment|          |  DB    |                  |
|      +--------+          +--------+          +--------+                  |
|           |                   |                   |                       |
|           +-------------------+-------------------+                       |
|                               |                                           |
|              REDUCE PHASE     v                                           |
|                      +------------------+                                 |
|                      |    SYNTHESIZE    |                                 |
|                      | (Orchestrator)   |                                 |
|                      +------------------+                                 |
|                                                                           |
+===========================================================================+
```

**Implementation:**
```
Phase 1 (Map):
- Spawn 3 research workers in parallel
- Each investigates one component of the codebase
- Workers return summaries to orchestrator

Phase 2 (Reduce):
- Orchestrator reads all summaries
- Synthesizes unified understanding
- Creates execution tasks based on synthesis
```

**Use when:**
- Need comprehensive analysis
- Multiple perspectives valuable
- Want to aggregate findings
- Research-then-implement workflow

### When to Use CC Mirror vs External Tools

| Use Case | Recommendation |
|----------|---------------|
| 80% of multi-agent tasks | **CC Mirror** - native, simple, sufficient |
| Factory-scale production | **Gas Town** - named agents, roles, persistence |
| Sequential iteration | **Ralph Loop** - single-agent, fresh context |
| Custom business logic | **External tools** - full control |
| Mission-critical reliability | **Standard Claude** + manual coordination |

### Scaling Considerations

**Context Budget for Orchestrator:**

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

**Key constraint:** Orchestrator should NEVER do deep file exploration. That's worker territory.

### Error Handling Strategies

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

---

## 7. Comparison Matrix

### CC Mirror vs Gas Town

| Aspect | CC Mirror | Gas Town |
|--------|-----------|----------|
| **Setup Time** | <5 minutes | Hours+ |
| **Complexity** | Low | High (Stage 7+) |
| **Use Cases** | 80% generic | 20% complex |
| **Customization** | Limited | Extensive |
| **Cost** | Normal | "Expensive as hell" |
| **Author** | @nummanali | @steve_yegge |
| **Philosophy** | Simplicity | Factory metaphor |
| **Roles** | Orchestrator + Workers | 7+ specialized roles |
| **Persistence** | Task-based | Named agents (Polecats) |
| **Communication** | Task queue | Inbox-based |
| **Production readiness** | Demo/prototype | Production-capable |

**When to escalate to Gas Town:**
- Running 10+ agents regularly
- Need named persistent workers
- Want inbox-based async interaction
- Building production systems at scale
- Ready for "agent village" paradigm

### CC Mirror vs Ralph Wiggum Loop

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
| **Cost Profile** | Higher (parallel workers) | Lower (sequential) |
| **Author Philosophy** | Parallelization | Context freshness |

**Complementary usage:** Can use Ralph loops within CC Mirror workers for iteration.

### CC Mirror vs Standard Task() Tool

| Aspect | CC Mirror | Standard Task() |
|--------|-----------|-----------------|
| **Scope** | Full task graph with dependencies | Single subagent invocation |
| **Persistence** | Tasks survive across sessions | Ephemeral subagent context |
| **Ownership** | Agent IDs claim tasks | No ownership concept |
| **Dependencies** | blocks/blockedBy relationships | No dependency tracking |
| **Team Visibility** | Shared task queue | Isolated conversations |
| **Monitoring** | Built-in CLI dashboard | No native monitoring |
| **Setup** | 3 commands | None |

### CC Mirror vs Infinite Orchestra

| Aspect | CC Mirror | Infinite Orchestra |
|--------|-----------|-------------------|
| **Self-improvement** | No | Yes (recursive) |
| **Parallelization** | Native | Sequential only |
| **Containerization** | No | Docker-based |
| **24/7 Operation** | No | Yes |
| **Author** | @nummanali | @0xSero |
| **Philosophy** | Simplicity | Continuous evolution |

### Native vs External Orchestration Trade-offs

| Capability | Native (CC Mirror) | External Tools |
|------------|-------------------|----------------|
| Task creation | TaskCreate API | Custom database |
| Dependencies | addBlocks/addBlockedBy | Manual tracking |
| Task claiming | TaskUpdate + owner | Custom locking |
| Progress tracking | TaskList filtering | Custom dashboard |
| Worker spawning | Task() with subagent_type | External process spawn |
| Visual monitoring | Built-in CLI | Custom TUI |
| **Setup effort** | Zero | Days/weeks |
| **Customization** | Limited | Unlimited |
| **Production control** | Limited | Full |

### Architecture Pattern Summary

| Pattern | Description | Best For |
|---------|-------------|----------|
| **Hub-and-Spoke (CC Mirror)** | Central orchestrator delegates to workers | Clear task decomposition, predictable workflow |
| **Factory (Gas Town)** | Named agents with specialized roles | Large-scale production, persistent agents |
| **Kanban Loop (Ralph)** | Single agent picks from board, iterates | Overnight features, sequential tasks |
| **Peer-to-Peer** | Agents communicate directly | Emergent collaboration, resilience |
| **Personal Panopticon** | Isolated instances per life domain | Domain specialization, isolation |

---

## 8. Implementation Guide

### Step-by-Step with Checkpoints

#### Checkpoint 1: Prerequisites Verified

**What you need:**
```bash
# Check Node.js
node --version   # Should be 18+

# Check npm
npm --version    # Should be 9+

# Check Claude Code
claude --version # Should be installed

# Check API key
echo $ANTHROPIC_API_KEY # Should be set
```

**You should see:**
```
v18.19.0 (or higher)
9.8.1 (or higher)
Claude Code v2.1.4 (or similar)
sk-ant-... (your API key, partially hidden)
```

**If something is missing:**
- Node.js: Install from nodejs.org
- npm: Comes with Node.js
- Claude Code: `npm install -g @anthropic-ai/claude-code`
- API key: Set with `export ANTHROPIC_API_KEY="your-key"`

---

#### Checkpoint 2: CC Mirror Installed

**Run installation:**
```bash
npx cc-mirror quick --provider mirror --name mclaude
```

**You should see:**
```
✅ Variant created successfully!

To launch, run:
  mclaude
```

**Verify installation:**
```bash
# Check mclaude command exists
which mclaude || echo "mclaude not found in PATH"

# Should show path like:
/Users/you/.local/bin/mclaude

# Verify it's different from regular claude
which claude
which mclaude
# These should be different paths
```

**If mclaude not found:**
- Check: Did the npx command complete without errors?
- Check: Is `~/.local/bin` in your PATH?
- Try: Add to PATH with `export PATH="$HOME/.local/bin:$PATH"`
- Try: Re-run installation

---

#### Checkpoint 3: Variant Launches Successfully

**Launch mclaude:**
```bash
mclaude
```

**You should see:**
```
╔═══════════════════════════════════════════════════════════════╗
║                     CC MIRROR - mclaude                        ║
║              Isolated Claude Code with Orchestration           ║
╚═══════════════════════════════════════════════════════════════╝

Provider: mirror (reflects Claude internals)
Orchestration: ENABLED
Auto-compact: ON (beta)

claude> _
```

**Verify skills available:**
```
/skills
```

**You should see orchestration skill:**
```
Available skills:
  - orchestration    ← THIS IS WHAT WE NEED
  - research
  - ...
```

**If orchestration skill missing:**
- Check: Did you use `--provider mirror`?
- Check: Is the cc-mirror version up to date?
- Try: Reinstall with correct provider

---

#### Checkpoint 4: Orchestration Skill Loaded

**Load the skill:**
```
Load the orchestration skill and initiate
```

**You should see:**
```
🎭 Loading orchestration skill...
  ✓ SKILL.md loaded (5299 tokens)
  ✓ Worker preambles configured
  ✓ Domain references available

You are now the CONDUCTOR.

What would you like to build today?
```

**Verify orchestrator mode:**
The response should reference being a "conductor" and ask about what you want to build.

**If skill doesn't load:**
- Check: Are you running `mclaude` (not regular `claude`)?
- Try: Explicit `/skill orchestration`
- Try: Exit and restart mclaude

---

#### Checkpoint 5: First Multi-Agent Task

**Give it a project:**
```
Build a REST API for a todo app with tests and docs
```

**You should see task decomposition:**
```
🎯 Analyzing request...

Creating task graph:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📋 TASK DECOMPOSITION
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  #1 Design API architecture              [ready]
  #2 Create project structure             [ready]
  #3 Implement data models                [blocked by #2]
  #4 Implement REST endpoints             [blocked by #3]
  #5 Write integration tests              [blocked by #4]
  #6 Create API documentation             [blocked by #4]

Spawning parallel workers...
```

**Signs of healthy orchestration:**
- [ ] Orchestrator is NOT writing code directly
- [ ] Workers appear in "Async agents" list
- [ ] Tasks progress from running -> completed
- [ ] Worker outputs include absolute file paths
- [ ] Dependencies auto-unblock

**If no workers spawn:**
- Check: Did you say "Load the orchestration skill"?
- Check: Did you give it a multi-part task to decompose?
- Check: Is auto-compact enabled? (prevents context collapse)
- Try: Reload the skill with explicit instruction

---

#### Checkpoint 6: Complete Orchestration

**Final state should show:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ ORCHESTRATION COMPLETE!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tasks completed: 6/6
Agents spawned: 6
Total time: 4m 23s
Total tokens: 18,432

Deliverables:
  📁 FastAPI REST API
     - 12 endpoints (CRUD + filters)
     - SQLite + SQLAlchemy ORM
     - Pydantic models

  📁 Tests
     - 17 integration tests
     - pytest + httpx

  📁 Documentation
     - README.md
     - API_ENDPOINTS.md
     - ARCHITECTURE.md
```

**Verify deliverables exist:**
```bash
ls -la ~/projects/todo-api/
# Should show created files
```

**You are now the Conductor. Your agents play the instruments.**

---

### Common Configurations

**High-throughput configuration (many simple tasks):**
```bash
# Use Haiku army pattern
# Spawn 5-10 Haiku workers for file operations
# Reserve Sonnet for implementation
# Opus only for architecture decisions
```

**Cost-optimized configuration:**
```bash
# Disable team mode if not needed
# In variant settings, set team_mode: false
# Use TodoWrite for single-session work
```

**GLM-4.7 configuration:**
```bash
npx cc-mirror quick --provider glm --name glm-claude
# Note: May need to enable team mode manually after
```

### Production Considerations

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

---

## 9. Troubleshooting

| Symptom | Cause | Solution |
|---------|-------|----------|
| `npx cc-mirror: command not found` | npm not installed or outdated | `npm install -g npm@latest`, clear cache with `npm cache clean --force` |
| `EACCES: permission denied` | npm global directory needs elevated permissions | Set up user-level npm: `mkdir ~/.npm-global && npm config set prefix '~/.npm-global'` |
| Windows installation fails | Known Windows compatibility issues | Use WSL2, or wait for community PR fixes |
| `Provider not found` or API key errors | Missing or incorrect API keys | Verify with `echo $ANTHROPIC_API_KEY`, set in shell profile |
| GLM quick install skips team mode | Quick install limitation | Use `npx cc-mirror variant --provider glm --name mclaude --team-mode` |
| Orchestration skill won't load | Skill not properly installed | Reinstall variant, verify skill file at `~/.claude/skills/orchestration/` |
| Workers not spawning | Model doesn't support tools, or blocked tasks | Check `TaskList --status=blocked`, try explicit worker assignment |
| Multiple workers touching same files | Task decomposition didn't isolate ownership | Add file ownership to task descriptions, use git worktrees |
| Context collapse - orchestrator degraded | Running too long, too many workers | Enable auto-compact, proactively `/compact`, limit worker count |
| Hidden API features disappeared | Claude Code update changed internals | `npx cc-mirror update`, check GitHub issues |
| Tasks not showing dependencies | Incorrect TaskCreate or addBlocks usage | Verify task structure, manually fix with `TaskUpdate addBlockedBy=["id"]` |
| Context window exhausted | Multi-agent orchestration consumes significant context | Enable auto-compact, break tasks smaller, use Haiku for simple tasks |

### Emergency Recovery

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

### When NOT to Use CC Mirror

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| Single simple task | Orchestration overhead not worth it | Plain Claude Code |
| Team production deployment | Beta/disabled feature may change | Standard Claude Code + manual coordination |
| Windows without WSL | Known compatibility issues | Wait for fixes or use WSL |
| Need guaranteed stability | Relies on editing minified JS | Official plugins only |
| Strict security requirements | Isolated environment = less visibility | Audited tooling |
| Simple sequential tasks | Orchestration unnecessary | Ralph loop |

---

## 10. Exact Quotes

### Core Claims

> "Claude Code - Official Multi Agent Orchestration. This is a disabled feature, but through CC Mirror, I have been able to enable it. It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- @nummanali

> "It is so simple, yet powerful and IMO beats every orchestration I've seen. There's no point building your own."
> -- @nummanali

> "All it took was getting the orchestration skill to the point where the bare primitives could go full throttle."
> -- @nummanali

### Philosophy

> "Think of Claude Code orchestration as a Kraken - a powerful, unleashed multi-agent system where you direct tentacles (agents) via simple speech in an isolated terminal."
> -- @nummanali (mental model)

> "You are the Conductor on the trading floor of agents. Fast. Decisive. Commanding a symphony of parallel work. Users bring dreams. You make them real. This is what AGI feels like."
> -- SKILL.md

> "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS. YOU DO NOT EXPLORE CODEBASES. You are the CONDUCTOR. Your agents play the instruments."
> -- SKILL.md (The Iron Law)

### Implementation Guidance

> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet."
> -- @nummanali (context management)

> "The additional instructions guide the orchestrator to manage sub agents, saving its own tokens significantly... You can disable the team feature under variant settings."
> -- @nummanali (token cost)

> "GLM handles the multi-agent coordination very well."
> -- @nummanali (provider recommendation)

### Comparison Insights

> "Simplicity covers 80% with zero effort - mass-market ease"
> -- @nummanali (CC Mirror vs Gas Town)

> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"
> -- @nelsonpadil_ (production caveat)

### Community Contributions

> "Another person has already put up a PR"
> -- @nummanali (on Windows fix)

> "Your last tweets about that got me downloading cc-mirror for my GLM 4.7 coding plan"
> -- @stableAPY

---

## 11. Quick Reference Card

### Installation

```bash
# Install variant
npx cc-mirror quick --provider mirror --name mclaude

# Launch
mclaude

# Load skill
"Load the orchestration skill and initiate"
```

### Task Management API

```
TaskCreate  - Create task with subject, description, acceptance criteria
TaskList    - List tasks (filter by status, owner, blocked)
TaskGet     - Get full task context
TaskUpdate  - Update task (claim, comment, resolve)
addBlocks   - Mark task as blocking another
addBlockedBy - Mark task as blocked by another
```

### Model Selection

```
Haiku  -> Simple lookups, file fetching (5-10 parallel)
Sonnet -> Implementation, patterns, tests (2-5 parallel)
Opus   -> Architecture, complex reasoning (1 sequential)
```

### Tool Ownership

```
Orchestrator: Read (1-2 files), Task*, AskUserQuestion
Worker: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
Workers NEVER: Task*, spawn sub-agents
```

### Worker Preamble

```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
TASK: [specific task]
```

### Providers

```
mirror    - Default, Claude's internal primitives
glm       - GLM-4.7 (good multi-agent coordination)
openrouter - OpenRouter integration (100+ models)
litellm   - LiteLLM support (self-hosted)
z.ai      - Z.ai integration (GLM models)
minimax   - MiniMax integration
ccrouter  - Local LLMs (Ollama, DeepSeek)
```

### CLI Commands

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

### Primary Sources

- [CC Mirror GitHub Repository](https://github.com/numman-ali/cc-mirror)
- [Orchestration Skill Documentation](https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md)
- [Team Mode Documentation](https://github.com/numman-ali/cc-mirror/blob/main/docs/features/team-mode.md)

### Twitter/X Threads

- [Numman Ali - Multi-Agent Orchestration](https://x.com/nummanali/status/2007768692659015877) - 791 likes, 107K views, 1K bookmarks
- [Numman Ali - Skill Deep Dive](https://x.com/nummanali/status/2007984449120874681) - 714 likes, 82K views, 1.7K bookmarks
- [Numman Ali - CC Mirror Release](https://x.com/nummanali/status/2007849823756575084) - 449 likes, 66K views, 659 bookmarks

### Analysis Sources

- [The Unwind AI - CC Mirror Analysis](https://www.theunwindai.com/p/claude-code-s-hidden-multi-agent-orchestration-now-open-source)
- [DeepWiki - CC Mirror Overview](https://deepwiki.com/numman-ali/cc-mirror)

---

## Tags

`#cc-mirror` `#nummanali` `#multi-agent` `#orchestration` `#hidden-api` `#task-management` `#hub-and-spoke` `#worker-separation` `#iron-law` `#provider-flexibility` `#native-orchestration` `#anthropic-internals` `#trading-floor` `#conductor-pattern`

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Extraction ID** | 024 |
| **Category** | orchestration |
| **Target** | numman-ali/cc-mirror |
| **Word Count** | ~8,000 |
| **Line Count** | ~1,200 |
| **Created** | 2026-01-18 |
| **Sources** | 10+ primary documents, 150K+ tokens of research |
| **D-FINAL Integration** | architecture.md, implementation.md |
| **Complexity Level** | 4-5 (Native Orchestration) |

---

## Cross-References

- **Related extractions:**
  - `007-cc-mirror-multiagent-nummanali.md` - Initial discovery notes
  - `008-cc-mirror-skill-deepdive-nummanali.md` - Skill file analysis
  - `011-cc-mirror-native-orchestration-nummanali.md` - Task API details
  - `research-cc-mirror-expanded.md` - Extended research compilation

- **Synthesis files:**
  - `synthesis/multi-agent-cc-mirror-complete.md` - Technical reference
  - `synthesis/mastery-multi-agent.md` - Multi-agent mastery guide
  - `synthesis/compare-orchestration.md` - Orchestration comparison

- **Complementary patterns:**
  - CC Mirror + Ralph: Use Ralph loops within CC Mirror workers for iteration
  - CC Mirror + Worktrees: Combine for parallel isolated development
  - CC Mirror + Claude HUD: Monitor orchestrator context usage
  - CC Mirror + rpai: Monitor multiple CC Mirror instances across tmux

---

*Extracted: 2026-01-18*
*Agent: B3-T1-3*
*Mission: Complete CC-Mirror Deep Extraction*
