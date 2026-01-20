# CC Mirror: Complete Mastery Guide

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** Primary extraction + existing synthesis documents
**Status:** Definitive reference for CC Mirror native orchestration

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Core Mental Models](#2-core-mental-models)
3. [TaskCreate/TaskUpdate/TaskGet API Deep Dive](#3-taskcreatetaskupdatetaskget-api-deep-dive)
4. [The Iron Law: Orchestrator ≠ Tool User](#4-the-iron-law-orchestrator--tool-user)
5. [Worker Preambles: Anti-Recursion Safety](#5-worker-preambles-anti-recursion-safety)
6. [Model Escalation Pattern](#6-model-escalation-pattern)
7. [Orchestrator Context Budget](#7-orchestrator-context-budget)
8. [The Haiku Army Pattern](#8-the-haiku-army-pattern)
9. [Design Patterns](#9-design-patterns)
10. [Installation and Configuration](#10-installation-and-configuration)
11. [Checkpoints: Implementation Journey](#11-checkpoints-implementation-journey)
12. [Troubleshooting](#12-troubleshooting)
13. [Integration Patterns](#13-integration-patterns)
14. [Production Considerations](#14-production-considerations)
15. [Quick Reference](#15-quick-reference)
16. [Source Attribution](#16-source-attribution)

---

## 1. You Are Here

### **Con**text Box: **CC** **Mir**ror's **Pos**ition

```
+==========================================================================+
|                     YOU ARE HERE: CC MIRROR                              |
+==========================================================================+
|                                                                          |
|  THE COMPLEXITY LADDER                                                   |
|  ════════════════════                                                    |
|                                                                          |
|  Level 7: Gas Town (Factory-Scale)          [ ]  Team-scale solo         |
|           │                                                              |
|  Level 6: Parallel Swarms + Worktrees       [ ]  Massive parallelization |
|           │                                                              |
|  Level 5: Multi-Instance Coordination       [ ]  Named persistent agents |
|           │                                                              |
|  Level 4: NATIVE ORCHESTRATION (CC Mirror)  [*] ◄── YOU ARE HERE        |
|           │                                                              |
|  Level 3: Memory Persistence                [ ]  Skills, hooks, context  |
|           │                                                              |
|  Level 2: Hooks and Automation              [ ]  Event-driven responses  |
|           │                                                              |
|  Level 1: CLAUDE.md + Commands              [ ]  Consistent behavior     |
|           │                                                              |
|  Level 0: Single Interactive Session        [ ]  Basic AI assistance     |
|                                                                          |
+==========================================================================+
```

### **Wh**at **CC** **Mir**ror **Unl**ocks

**CC** **Mir**ror **ena**bles **Lev**el 4-5 **orc**hestration using primitives **Anth**ropic **alr**eady built but **dis**abled. This is **nat**ive **mul**ti-agent capability **hid**den inside **Cla**ude **Co**de itself.

**Bef**ore CC Mirror, reaching this level required:
- Building **cus**tom task management systems from scratch
- Implementing **wor**ker coordination manually
- Managing **dep**endency graphs without tooling
- Creating your own **mon**itoring dashboards

**CC** **Mir**ror gives you all of this in **3 com**mands.

### **Wh**o **Th**is Guide Is For

**Thi**s mastery guide is for developers who:

| **Req**uirement | **Rat**ionale |
|----------------|---------------|
| Want multi-agent orchestration | Without building infrastructure yourself |
| Comfortable with beta features | CC Mirror enables disabled Anthropic code |
| Understand task decomposition | Core skill for effective orchestration |
| Have mastered Levels 0-3 | Foundation required before advancing |

### **Wh**at You Will **Mas**ter

By the end of this guide, you will understand:

1. The **hid**den Task APIs that CC Mirror unlocks
2. Why the **Iro**n Law of orchestrator separation is critical
3. How to write **wor**ker preambles that prevent recursion
4. When to use **Hai**ku vs **Son**net vs **Op**us for workers
5. How to manage the **orc**hestrator's ~100k token budget
6. When to use CC Mirror vs **Gas** **Tow**n vs **Ral**ph loops
7. How to combine patterns for **max**imum effectiveness

### **Co**re **Qu**ote

> "**Cla**ude Code - **Off**icial **Mul**ti Agent **Orc**hestration. This is a **dis**abled feature, but through CC Mirror, I have been able to **ena**ble it. It is so **sim**ple, yet **pow**erful and IMO **bea**ts every orchestration I've seen. There's no point **bui**lding your own."
> -- **Num**man Ali (@nummanali)

---

## 2. Core Mental Models

### **Men**tal Model 1: The Trading Floor

```
+==========================================================================+
|                                                                          |
|   ⚡ You are the Conductor on the trading floor of agents ⚡              |
|                                                                          |
|   FAST. DECISIVE. Commanding a symphony of parallel work.                |
|                                                                          |
|   Users bring dreams. You make them real.                                |
|                                                                          |
|   This is what AGI feels like.                                           |
|                                                                          |
+==========================================================================+
```

This **men**tal model frames the orchestrator as:
- A **dec**ision-maker, NOT an implementer
- Moving **fas**t through parallel work
- Handling **cha**os while radiating simplicity
- Translating **vag**ue dreams into concrete outputs

### **Men**tal Model 2: The Kraken

From **Num**man Ali:

> "Think of **Cla**ude Code orchestration as a **Kra**ken - a powerful, unleashed multi-agent system where you **dir**ect tentacles (agents) via simple speech in an isolated terminal."

**Each** **ten**tacle (agent):
- **Ope**rates independently
- Has its own **con**text and tools
- Reports back to the **cen**tral body
- Can be **spa**wned or retracted on demand

### **Men**tal Model 3: Hub-and-Spoke Architecture

```
+==========================================================================+
|                        HUB-AND-SPOKE ARCHITECTURE                        |
+==========================================================================+
|                                                                          |
|                      +------------------+                                |
|                      |   ORCHESTRATOR   |                                |
|                      |   (Conductor)    |                                |
|                      +--------+---------+                                |
|                               |                                          |
|                               | Task() with run_in_background=True       |
|                               |                                          |
|               +---------------+---------------+                          |
|               |               |               |                          |
|               v               v               v                          |
|          +---------+   +---------+   +---------+                        |
|          | Worker1 |   | Worker2 |   | Worker3 |                        |
|          | (Coder) |   | (Tester)|   | (Docs)  |                        |
|          +---------+   +---------+   +---------+                        |
|                |             |             |                             |
|                +-------------+-------------+                             |
|                              |                                           |
|                       Shared Filesystem                                  |
|                       (handoff files)                                    |
|                                                                          |
+==========================================================================+
```

**Key** **Arc**hitectural Properties:

| **Pro**perty | **Imp**lementation |
|-------------|-------------------|
| **Cen**tral coordination | Orchestrator manages task graph |
| **Wor**ker isolation | Each worker has independent context |
| **Par**allel execution | Workers run simultaneously |
| **Fil**e-based handoff | Results shared via filesystem |
| **Aut**omatic unblocking | Dependencies resolve on completion |

---

## 3. TaskCreate/TaskUpdate/TaskGet API Deep Dive

### **The** **Hid**den APIs

**Anth**ropic built and shipped these tools but **tur**ned them off:

```
+==========================================================================+
|                    HIDDEN TASK MANAGEMENT APIs                           |
+==========================================================================+
|                                                                          |
|  TaskCreate   --> Create task with subject, description, acceptance      |
|  TaskList     --> Filter: status='open', no owner, not blocked           |
|  TaskGet      --> Full context: description, comments, dependencies      |
|  TaskUpdate   --> Claim (set owner), add comments, resolve, link refs    |
|                                                                          |
+==========================================================================+

+==========================================================================+
|                    HIDDEN DEPENDENCY MANAGEMENT                          |
+==========================================================================+
|                                                                          |
|  addBlocks     --> This task blocks another                              |
|  addBlockedBy  --> This task is blocked by another                       |
|                                                                          |
+==========================================================================+
```

These **pri**mitives enable a **com**plete task graph with **aut**omatic dependency resolution.

### **Task**Create **Det**ailed Reference

**Cre**ates new tasks with subject, description, and dependencies:

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

**Cri**tical insight:** **Acc**eptance criteria MUST be **ver**ifiable by the agent itself. **Vag**ue criteria like "works correctly" or "good UX" lead to **fal**se completion signals.

### **Task**Get **Det**ailed Reference

**Ret**rieves full task details by ID:

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

### **Task**Update **Det**ailed Reference

**Upd**ates task status, adds comments, and sets dependencies:

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

**Own**ership protection:** Only the owner or team lead can modify tasks.

### **Task**List **Out**put Example

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

### **Dep**endency Management Flow

```
+==========================================================================+
|                     DEPENDENCY RESOLUTION FLOW                           |
+==========================================================================+
|                                                                          |
|  TASK CREATION:                                                          |
|  ─────────────                                                           |
|  TaskCreate "Design API" (no deps)        --> READY                      |
|  TaskCreate "Implement models"            --> READY                      |
|  TaskCreate "Build endpoints" blockedBy   --> BLOCKED                    |
|                  ["Design API", "models"]                                |
|                                                                          |
|  AUTOMATIC UNBLOCKING:                                                   |
|  ────────────────────                                                    |
|  "Design API" resolves     --> "Build endpoints" still blocked          |
|  "Implement models" resolves --> "Build endpoints" NOW READY            |
|                                                                          |
|  NO MANUAL INTERVENTION REQUIRED                                         |
|                                                                          |
+==========================================================================+
```

### **Task** vs **Tod**oWrite Comparison

| **Fea**ture | **Task**Create | **Tod**oWrite |
|------------|---------------|---------------|
| **Per**sistence | Survives sessions | Ephemeral |
| **Own**ers | Agent IDs | None |
| **Dep**endencies | blocks/blockedBy | None |
| **Tea**m visibility | Yes | No |

**Use** **Tod**oWrite for:** Single-session, personal, linear tasks

**Not**e:** When team mode is enabled, TodoWrite is **blo**cked because team tools offer superior multi-agent coordination.

---

## 4. The Iron Law: Orchestrator ≠ Tool User

### **The** **Fun**damental Rule

```
+==========================================================================+
|                                                                          |
|   ⚠️  THE IRON LAW OF CC MIRROR ORCHESTRATION ⚠️                         |
|                                                                          |
|   YOU DO NOT WRITE CODE.  YOU DO NOT RUN COMMANDS.                      |
|   YOU DO NOT EXPLORE CODEBASES.                                         |
|                                                                          |
|   You are the CONDUCTOR. Your agents play the instruments.              |
|                                                                          |
+==========================================================================+
```

### **Wh**y This **Rul**e Exists

**Vio**lating the Iron Law causes:

| **Vio**lation | **Con**sequence |
|--------------|----------------|
| Orchestrator writes code | **Con**text pollution - loses strategic view |
| Orchestrator explores codebase | **Con**text bloat - less room for coordination |
| Orchestrator runs commands | **Ver**ification bypass - same agent writes and approves |
| Workers spawn sub-workers | **Unc**ontrolled recursion - exponential agent explosion |

### **Too**l Ownership Division

**Orc**hestrator Uses **Dir**ectly:

| **Too**l | **Us**e Case | **Lim**it |
|---------|-------------|----------|
| `Read` | References, guides, agent outputs | **1-2 files max** |
| `TaskCreate` | Create tasks with dependencies | Unlimited |
| `TaskUpdate` | Claim, comment, resolve tasks | Unlimited |
| `TaskGet` | Retrieve task details | As needed |
| `TaskList` | Find available work | As needed |
| `AskUserQuestion` | Clarify requirements | When ambiguous |
| `Task` | Spawn workers | **With preamble** |

**Wor**kers Use **Dir**ectly:

| **Too**l | **Us**e Case | **Not**es |
|---------|-------------|----------|
| `Read` | Examine files | Full access |
| `Write` | Create files | Full access |
| `Edit` | Modify files | Full access |
| `Bash` | Run commands | Full access |
| `Glob` | Find files | Full access |
| `Grep` | Search content | Full access |
| `WebFetch` | Retrieve URLs | Full access |
| `WebSearch` | Search web | Full access |
| `LSP` | Language services | Full access |

**Wor**kers NEVER Use:
- `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`
- `Task` (no sub-worker spawning)

### **The** **Del**egation Threshold

> **If** **rea**ding more than 2 files, spawn an agent instead.

This keeps the orchestrator's context **cle**an for strategic decisions.

---

## 5. Worker Preambles: Anti-Recursion Safety

### **Wh**y **Pre**ambles Are Critical

**Wor**ker preambles are the **pri**mary defense against:
- **Rec**ursion chaos (workers spawning workers)
- **Rol**e confusion (workers trying to orchestrate)
- **Con**text pollution (workers doing orchestrator work)

### **Sta**ndard Worker Preamble

```
+==========================================================================+
|                       WORKER PREAMBLE TEMPLATE                           |
+==========================================================================+

CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths

TASK:
[Your specific task here]

+==========================================================================+
```

### **Cod**ebase Explorer Preamble

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

### **Sec**urity Audit Preamble

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

### **Ref**actoring Worker Preamble

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

### **Doc**umentation Generator Preamble

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

### **Tes**ting Worker Preamble

```
CONTEXT: You are a TESTING worker.
PURPOSE: Write comprehensive tests for code.

RULES:
- Write comprehensive tests
- Follow existing test patterns
- Include edge cases
- Run tests and report results
- Do NOT spawn sub-agents
- Report test file locations with absolute paths

TASK:
[testing task]
```

### **Ful**l Spawning Example

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

---

## 6. Model Escalation Pattern

### **Mod**el Selection by Task Complexity

| **Mod**el | **Us**e Case | **Spa**wn Count | **Cos**t Impact |
|----------|-------------|-----------------|-----------------|
| **Hai**ku | Errand runner: fetch files, grep, simple lookups | 5-10 in parallel | Low |
| **Son**net | Capable worker: structured implementation, following patterns, test generation | 2-5 parallel | Medium |
| **Op**us | Complex reasoning, architecture decisions, ambiguous tasks | 1 (sequential) | High |

### **Esc**alation Decision Tree

```
+==========================================================================+
|                     MODEL ESCALATION DECISION TREE                       |
+==========================================================================+
|                                                                          |
|  What is the task complexity?                                            |
|  │                                                                       |
|  ├── Simple lookup/grep/fetch                                            |
|  │   └── HAIKU (spawn 5-10 in parallel, cheap and fast)                  |
|  │                                                                       |
|  ├── Standard implementation                                             |
|  │   │                                                                   |
|  │   ├── Clear patterns exist?                                           |
|  │   │   ├── Yes --> SONNET (follow the patterns)                        |
|  │   │   └── No --> Consider OPUS (needs judgment)                       |
|  │   │                                                                   |
|  │   └── Test generation, docs, refactoring --> SONNET                   |
|  │                                                                       |
|  └── Complex reasoning needed                                            |
|      │                                                                   |
|      ├── Architecture decisions --> OPUS                                 |
|      ├── Ambiguous requirements --> OPUS                                 |
|      ├── Security-critical code --> OPUS                                 |
|      └── Cross-cutting concerns --> OPUS                                 |
|                                                                          |
+==========================================================================+
```

### **Err**or-Based Escalation

```
+==========================================================================+
|                     ERROR-BASED MODEL ESCALATION                         |
+==========================================================================+
|                                                                          |
|  If Haiku fails on a task:                                               |
|  └── Retry with SONNET (add error context to preamble)                   |
|                                                                          |
|  If Sonnet fails on a task:                                              |
|  └── Retry with OPUS (add error context to preamble)                     |
|                                                                          |
|  If Opus fails on a task:                                                |
|  └── ESCALATE TO HUMAN via AskUserQuestion                               |
|                                                                          |
|  PREAMBLE ADDITION FOR RETRY:                                            |
|  "PRIOR ATTEMPT FAILED: [error summary]                                  |
|   AVOID: [specific pitfall identified]"                                  |
|                                                                          |
+==========================================================================+
```

### **Cos**t Comparison Example

```
# Cost comparison for 10 grep operations:

1 Opus session:     ~$0.50-1.00 (sequential, context accumulation)
10 Haiku workers:   ~$0.05-0.10 (parallel, isolated context)

SAVINGS: 10-20x cost reduction with Haiku Army
BONUS: 10x faster completion (parallel execution)
```

---

## 7. Orchestrator Context Budget

### **Tot**al Budget Allocation

```
+==========================================================================+
|                    ORCHESTRATOR CONTEXT BUDGET                           |
+==========================================================================+
|                                                                          |
|  Total Available: ~100K tokens                                           |
|                                                                          |
|  ├── Skill file (orchestration):     ~5K   (5%)                          |
|  ├── Project context (CLAUDE.md):    ~5K   (5%)                          |
|  ├── Task management overhead:       ~10K  (10%)                         |
|  ├── Reference file reads (1-2 max): ~10K  (10%)                         |
|  ├── Worker result summaries:        ~40K  (40%)                         |
|  ├── Decision reasoning:             ~20K  (20%)                         |
|  └── Buffer:                         ~10K  (10%)                         |
|                                                                          |
+==========================================================================+
```

### **Key** **Con**straint

> **Orc**hestrator should NEVER do deep file exploration. That's worker territory.

**If** you need to understand a codebase:
1. **Spa**wn a **Cod**ebase Explorer worker
2. Worker reports **sum**mary back
3. Orchestrator uses **sum**mary for decisions

### **Con**text Management Strategies

**Str**ategy 1: **Min**imal Reference Reading**

```
BAD:  Read 10 files to understand the codebase
GOOD: Spawn explorer worker, receive 500-token summary
```

**Str**ategy 2: **Pro**active Compaction**

```bash
# Enable auto-compact (critical for long orchestration sessions)
# In variant settings: "auto_compact": true

# Manual compact when approaching limits
/compact
"Reload task state and continue"
```

**Str**ategy 3: **Wor**ker Result Summarization**

```
Worker returns: 2000 tokens of detailed output
Orchestrator stores: 200-token summary of key results
```

### **War**ning Signs of Context Exhaustion

| **Sym**ptom | **Act**ion |
|------------|-----------|
| Orchestrator forgets task state | Compact and reload |
| Quality of coordination drops | Reduce active workers |
| Decisions become inconsistent | Fresh session with task export |
| Context warnings appear | Immediate compact |

---

## 8. The Haiku Army Pattern

### **Wh**at It Is

Instead of one expensive model doing 10 file operations, spawn 10 cheap Haiku workers in parallel.

### **Wh**y It Works

```
+==========================================================================+
|                      THE HAIKU ARMY PATTERN                              |
+==========================================================================+
|                                                                          |
|  TRADITIONAL APPROACH:                                                   |
|  ────────────────────                                                    |
|  One Opus session doing 10 file reads sequentially                       |
|  - Each read accumulates context                                         |
|  - Context pollution reduces quality                                     |
|  - Cost: ~$0.50-1.00                                                     |
|  - Time: 10 sequential operations                                        |
|                                                                          |
|  HAIKU ARMY APPROACH:                                                    |
|  ───────────────────                                                     |
|  10 Haiku workers in parallel, each reading 1 file                       |
|  - Each worker has isolated, clean context                               |
|  - No context pollution                                                  |
|  - Cost: ~$0.05-0.10                                                     |
|  - Time: 1 parallel operation (10x faster)                               |
|                                                                          |
|  RESULT: 10-20x cheaper AND 10x faster                                   |
|                                                                          |
+==========================================================================+
```

### **Wh**en to Use Haiku Army

| **Us**e Case | **Spa**wn Count |
|-------------|-----------------|
| File content retrieval | 5-10 |
| Grep operations across codebase | 5-10 |
| Simple transformations | 5-10 |
| Documentation lookups | 5-10 |
| Format checking | 5-10 |

### **Wh**en NOT to Use Haiku Army

| **Us**e Case | **Us**e Instead |
|-------------|-----------------|
| Requires cross-file reasoning | Sonnet with multiple file reads |
| Complex decision making | Opus single worker |
| Security-critical analysis | Opus with security preamble |
| Architecture decisions | Opus sequential |

### **Imp**lementation Example

```
ORCHESTRATOR INSTRUCTION:

I need to find all usages of the deprecated `oldFunction` across the codebase.

APPROACH: Spawn 8 Haiku workers, each searching a different top-level directory:
- Worker 1: Search src/api/
- Worker 2: Search src/components/
- Worker 3: Search src/hooks/
- Worker 4: Search src/utils/
- Worker 5: Search src/services/
- Worker 6: Search tests/
- Worker 7: Search scripts/
- Worker 8: Search lib/

Each worker preamble:
"CONTEXT: You are a SEARCH worker.
RULES: Use Grep to find 'oldFunction'. Report file:line for each match.
Do NOT modify files. Do NOT spawn sub-agents.
SCOPE: Only search in [assigned directory]"
```

---

## 9. Design Patterns

### **Pat**tern 1: Fan-Out (Parallel Dispatch)

**Mul**tiple workers receive independent tasks simultaneously:

```
+==========================================================================+
|                        FAN-OUT PATTERN                                   |
+==========================================================================+
|                                                                          |
|                      +------------------+                                |
|                      |   ORCHESTRATOR   |                                |
|                      +--------+---------+                                |
|                               |                                          |
|                               | Task(run_in_background=True)             |
|                               |                                          |
|               +---------------+---------------+                          |
|               |               |               |                          |
|               v               v               v                          |
|          +---------+   +---------+   +---------+                        |
|          | Worker1 |   | Worker2 |   | Worker3 |                        |
|          | (Coder) |   | (Tester)|   | (Docs)  |                        |
|          +---------+   +---------+   +---------+                        |
|                  (parallel execution)                                    |
|                                                                          |
+==========================================================================+
```

**Imp**lementation:**

```
Orchestrator flow:
1. TaskCreate "Design API architecture" (no blockers)
2. TaskCreate "Create project structure" (no blockers)
3. Spawn Worker A --> claims and executes #1
4. Spawn Worker B --> claims and executes #2
5. Both run in parallel
```

**Use** when:
- Tasks are **ind**ependent
- No shared state between tasks
- Want **max**imum parallelization
- Time-to-completion is **pri**ority

### **Pat**tern 2: Pipeline (Sequential Handoffs)

**Tas**ks with explicit dependencies flow sequentially:

```
+==========================================================================+
|                        PIPELINE PATTERN                                  |
+==========================================================================+
|                                                                          |
|  +--------+     +--------+     +--------+                               |
|  | Task 1 | --> | Task 2 | --> | Task 3 |                               |
|  | Schema |     | Backend|     |  Tests |                               |
|  +--------+     +--------+     +--------+                               |
|      |             ^   |           ^                                     |
|      +--blocks-----+   +--blocks---+                                     |
|                                                                          |
+==========================================================================+
```

**Imp**lementation:**

```
TaskCreate: "Design data models" (P1, no deps)
TaskCreate: "Implement API endpoints" (P2, blockedBy: P1)
TaskCreate: "Write integration tests" (P3, blockedBy: P2)

Worker A completes P1 --> P2 becomes claimable
Worker B completes P2 --> P3 becomes claimable
```

**Use** when:
- Tasks have **nat**ural ordering
- Later tasks **dep**end on earlier results
- Want **gua**ranteed sequence
- Building on **pre**vious work

### **Pat**tern 3: Map-Reduce (Parallel Processing with Aggregation)

**Fan**-out work, collect results, synthesize:

```
+==========================================================================+
|                        MAP-REDUCE PATTERN                                |
+==========================================================================+
|                                                                          |
|                      +------------------+                                |
|                      |   ORCHESTRATOR   |                                |
|                      +--------+---------+                                |
|                               |                                          |
|               MAP PHASE       |                                          |
|                               |                                          |
|           +-------------------+-------------------+                      |
|           |                   |                   |                      |
|           v                   v                   v                      |
|      +--------+          +--------+          +--------+                 |
|      |Research|          |Research|          |Research|                 |
|      |  Auth  |          | Payment|          |  DB    |                 |
|      +--------+          +--------+          +--------+                 |
|           |                   |                   |                      |
|           +-------------------+-------------------+                      |
|                               |                                          |
|              REDUCE PHASE     v                                          |
|                      +------------------+                                |
|                      |    SYNTHESIZE    |                                |
|                      | (Orchestrator)   |                                |
|                      +------------------+                                |
|                                                                          |
+==========================================================================+
```

**Imp**lementation:**

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

**Use** when:
- Need **com**prehensive analysis
- Multiple perspectives **val**uable
- Want to **agg**regate findings
- Research-then-implement workflow

---

## 10. Installation and Configuration

### **Qui**ck Start (3 Commands)

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal (natural language)
"Load the orchestration skill and initiate"
```

**Tha**t's it. 3 steps to multi-agent orchestration.

### **Sup**ported Providers

| **Pro**vider | **Com**mand | **Mod**els | **Us**e Case |
|-------------|------------|-----------|-------------|
| **mir**ror | `--provider mirror` | Claude models | Default - Claude's internal primitives |
| **Z.ai** | `--provider z.ai` | GLM-4.7, GLM-4.5-Air | Advanced reasoning tasks |
| **Min**iMax | `--provider minimax` | MiniMax-M2.1 | Unified experience |
| **Ope**nRouter | `--provider openrouter` | 100+ models | Flexible model selection |
| **CCR**outer | `--provider ccrouter` | Ollama, DeepSeek, etc. | Local development |
| **Lit**eLLM | `--provider litellm` | Various | Self-hosted option |

**Not**e from @nummanali:** "GLM handles the multi-agent coordination very well."

### **CLI** Commands Reference

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

### **Var**iant Directory Structure

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

### **Ena**bling Auto-Compact (Critical)

From @nummanali:
> "This is using a new beta feature for Claude Code. Just make sure auto compact is on. It did ever break, I've not had it stop once yet"

**CRI**TICAL:** Enable auto-compact to prevent context collapse during orchestration.

**Ver**ify auto-compact is enabled:**
1. Check variant settings in `~/.cc-mirror/<variant>/config/settings.json`
2. Look for `"auto_compact": true`
3. If missing, add it manually

---

## 11. Checkpoints: Implementation Journey

### **Che**ckpoint 1: Prerequisites Verified

**Wha**t you need:**

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

**You** should see:**

```
v18.19.0 (or higher)
9.8.1 (or higher)
Claude Code v2.1.4 (or similar)
sk-ant-... (your API key, partially hidden)
```

<details>
<summary><strong>If something is missing (click to expand)</strong></summary>

- **Nod**e.js:** Install from nodejs.org
- **npm:** Comes with Node.js
- **Cla**ude Code:** `npm install -g @anthropic-ai/claude-code`
- **API** key:** Set with `export ANTHROPIC_API_KEY="your-key"`

</details>

---

### **Che**ckpoint 2: CC Mirror Installed

**Run** installation:**

```bash
npx cc-mirror quick --provider mirror --name mclaude
```

**You** should see:**

```
✅ Variant created successfully!

To launch, run:
  mclaude
```

**Ver**ify installation:**

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

<details>
<summary><strong>If mclaude not found (click to expand)</strong></summary>

- **Che**ck:** Did the npx command complete without errors?
- **Che**ck:** Is `~/.local/bin` in your PATH?
- **Try:** Add to PATH with `export PATH="$HOME/.local/bin:$PATH"`
- **Try:** Re-run installation

</details>

---

### **Che**ckpoint 3: Variant Launches Successfully

**Lau**nch mclaude:**

```bash
mclaude
```

**You** should see:**

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

**Ver**ify skills available:**

```
/skills
```

**You** should see orchestration skill:**

```
Available skills:
  - orchestration    <-- THIS IS WHAT WE NEED
  - research
  - ...
```

<details>
<summary><strong>If orchestration skill missing (click to expand)</strong></summary>

- **Che**ck:** Did you use `--provider mirror`?
- **Che**ck:** Is the cc-mirror version up to date?
- **Try:** Reinstall with correct provider

</details>

---

### **Che**ckpoint 4: Orchestration Skill Loaded

**Loa**d the skill:**

```
Load the orchestration skill and initiate
```

**You** should see:**

```
🎭 Loading orchestration skill...
  ✓ SKILL.md loaded (5299 tokens)
  ✓ Worker preambles configured
  ✓ Domain references available

You are now the CONDUCTOR.

What would you like to build today?
```

**Ver**ify orchestrator mode:**
The response should reference being a "conductor" and ask about what you want to build.

<details>
<summary><strong>If skill doesn't load (click to expand)</strong></summary>

- **Che**ck:** Are you running `mclaude` (not regular `claude`)?
- **Try:** Explicit `/skill orchestration`
- **Try:** Exit and restart mclaude

</details>

---

### **Che**ckpoint 5: First Multi-Agent Task

**Giv**e it a project:**

```
Build a REST API for a todo app with tests and docs
```

**You** should see task decomposition:**

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

**Sig**ns of healthy orchestration:**
- [ ] Orchestrator is NOT writing code directly
- [ ] Workers appear in "Async agents" list
- [ ] Tasks progress from running → completed
- [ ] Worker outputs include absolute file paths
- [ ] Dependencies auto-unblock

<details>
<summary><strong>If no workers spawn (click to expand)</strong></summary>

- **Che**ck:** Did you say "Load the orchestration skill"?
- **Che**ck:** Did you give it a multi-part task to decompose?
- **Che**ck:** Is auto-compact enabled? (prevents context collapse)
- **Try:** Reload the skill with explicit instruction

</details>

---

### **Che**ckpoint 6: Complete Orchestration

**Fin**al state should show:**

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

**Ver**ify deliverables exist:**

```bash
ls -la ~/projects/todo-api/
# Should show created files
```

**You** are now the Conductor. Your agents play the instruments.

---

## 12. Troubleshooting

### **Pro**blem: npx cc-mirror command not found

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Cannot run npx cc-mirror commands

**Cau**ses:**
- npm not installed or outdated
- npx not in PATH

**Sol**utions:**

```bash
# Update npm
npm install -g npm@latest

# Clear npm cache
npm cache clean --force

# Verify npx works
npx --version
```

</details>

---

### **Pro**blem: EACCES permission denied

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Installation fails with permission errors

**Cau**ses:**
- npm global directory needs elevated permissions

**Sol**utions:**

```bash
# Set up user-level npm global directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH (add to .bashrc/.zshrc)
export PATH="$HOME/.npm-global/bin:$PATH"

# Re-run installation
npx cc-mirror quick --provider mirror --name mclaude
```

</details>

---

### **Pro**blem: Windows installation fails

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Various errors on Windows

**Cau**ses:**
- Known Windows compatibility issues

**Sol**utions:**

```bash
# Option 1: Use WSL2
wsl --install
# Then run installation inside WSL

# Option 2: Wait for community PR fixes
# Check: https://github.com/numman-ali/cc-mirror/issues
```

</details>

---

### **Pro**blem: Orchestration skill won't load

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Claude doesn't recognize orchestration features

**Cau**ses:**
- Skill not properly installed
- Wrong variant running

**Sol**utions:**

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

</details>

---

### **Pro**blem: Workers not spawning

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** TaskCreate succeeds but workers never start

**Cau**ses:**
- Model doesn't support tool use properly
- All tasks are blocked
- Worker context too large

**Sol**utions:**

```bash
# Check if workers are blocked
"TaskList --status=blocked"

# Try spawning worker explicitly
"Assign this task to a Haiku worker: <task-id>"

# Verify tool permissions
# Workers need: Read, Write, Edit, Bash, Glob, Grep
```

</details>

---

### **Pro**blem: Multiple workers touching same files

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Edits overwrite each other, corrupted output

**Cau**ses:**
- Task decomposition didn't isolate file ownership
- No locking mechanism

**Sol**utions:**

```bash
# Add explicit file ownership to task descriptions:
"Task: Implement auth
Ownership: src/auth/*.ts
DO NOT MODIFY: src/components/*"

# Use worktrees for true isolation:
git worktree add ../project-worker1 -b worker1
git worktree add ../project-worker2 -b worker2

# Sequence tasks with dependencies:
Task A --> blocks --> Task B
(B waits for A to complete)
```

</details>

---

### **Pro**blem: Context collapse - orchestrator degraded

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** Orchestrator forgets task state, inconsistent decisions

**Cau**ses:**
- Running too long without reset
- Too many workers spawned
- Auto-compact not enabled

**Sol**utions:**

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

</details>

---

### **Pro**blem: Hidden API features disappeared after Claude Code update

<details>
<summary><strong>Click to expand solution</strong></summary>

**Sym**ptoms:** CC Mirror was working, then broke after update

**Cau**ses:**
- Claude Code update changed minified JS
- Anthropic removed/changed internal APIs

**Sol**utions:**

```bash
# Check CC Mirror for updates
npx cc-mirror update

# If no update available, check GitHub issues:
# https://github.com/numman-ali/cc-mirror/issues

# Join CC Mirror Discord for real-time support
# (Link in GitHub repo)
```

</details>

---

### **Eme**rgency Recovery

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

## 13. Integration Patterns

### **CC** **Mir**ror + **Ral**ph Loops

**Pur**pose:** Use Ralph loops within CC Mirror workers for iteration.

```
+==========================================================================+
|                     CC MIRROR + RALPH INTEGRATION                        |
+==========================================================================+
|                                                                          |
|                      +------------------+                                |
|                      |   ORCHESTRATOR   |                                |
|                      | (CC Mirror hub)  |                                |
|                      +--------+---------+                                |
|                               |                                          |
|               +---------------+---------------+                          |
|               |               |               |                          |
|               v               v               v                          |
|          +---------+   +---------+   +---------+                        |
|          | Worker1 |   | Worker2 |   | Worker3 |                        |
|          | (uses   |   | (uses   |   | (uses   |                        |
|          |  Ralph) |   |  Ralph) |   |  Ralph) |                        |
|          +---------+   +---------+   +---------+                        |
|               |             |             |                              |
|               v             v             v                              |
|          [Ralph loop]  [Ralph loop]  [Ralph loop]                       |
|          iterations    iterations    iterations                          |
|                                                                          |
+==========================================================================+
```

**Whe**n to use:**
- Worker task is too complex for single shot
- Need iterative refinement within a domain
- Want persistence + parallelism

**Imp**lementation:**

```
WORKER PREAMBLE:

CONTEXT: You are a FEATURE WORKER using Ralph pattern internally.

RULES:
- Complete the assigned feature using Ralph iteration
- Maintain prd.json and progress.txt in your work area
- Each iteration: pick task, implement, verify, commit
- Do NOT spawn sub-agents
- Report final results with absolute paths

TASK:
Build the authentication feature using Ralph loop pattern.
Your PRD: /worktree-auth/ralph/prd.json
```

### **CC** **Mir**ror + **Git** Worktrees

**Pur**pose:** True file isolation for parallel agents.

```bash
# Orchestrator sets up worktrees
git worktree add ../wt-auth feature-auth
git worktree add ../wt-payments feature-payments

# Workers assigned to isolated worktrees
Worker 1: "Work in ../wt-auth directory"
Worker 2: "Work in ../wt-payments directory"

# No file conflicts possible during work
# Human merges results at the end
```

### **CC** **Mir**ror + **Cla**ude HUD

**Pur**pose:** Monitor orchestrator context usage.

```bash
# Install Claude HUD
/plugin install claude-hud

# Monitor during orchestration
# HUD shows: context usage, tool calls, token consumption
# Helps identify when to compact
```

### **CC** **Mir**ror + **rpa**i

**Pur**pose:** Monitor multiple CC Mirror instances across tmux.

```bash
# Install rpai
cargo install rpai

# Launch rpai
rpai

# Monitor multiple mclaude instances
# Each in separate tmux pane
# rpai aggregates status across all
```

### **CC** **Mir**ror → **Gas** Town Escalation

**Whe**n to escalate from CC Mirror to Gas Town:**

| **Sig**nal | **Mea**ning |
|-----------|------------|
| Running 10+ agents regularly | CC Mirror hitting limits |
| Need named persistent workers | Want "Alice" and "Bob" with memory |
| Want inbox-based async interaction | Beyond task queue model |
| Building production systems at scale | Need factory-level reliability |
| Ready for "agent village" paradigm | Stage 7+ developer |

**Esc**alation path:**

```
1. Master CC Mirror patterns (Level 4-5)
2. Hit coordination limits (>10 agents)
3. Document which patterns need persistence
4. Install Gas Town
5. Map CC Mirror patterns to Gas Town roles
6. Migrate gradually
```

---

## 14. Production Considerations

### **Saf**e Scenarios

**CC** **Mir**ror is safe for:**
- **Per**sonal projects and learning
- **Dem**os and prototypes
- **Wel**l-isolated tasks with clear boundaries
- When you can **tol**erate occasional failures
- **Sin**gle-session projects (not long-running production)

### **Cau**tion Scenarios

**Use** **car**efully when:**
- **Pro**duction systems requiring reliability
- Tasks requiring **cus**tom observability
- Workflows needing **pre**cise state control
- **Hig**h-stakes deployments

### **Not** Recommended

**Avo**id CC Mirror for:**
- **Mis**sion-critical production without backup plans
- When you need **off**icial Anthropic support
- If you're **not** comfortable with beta features
- **Win**dows without WSL (known issues)

### **Pro**duction Gaps

Per @nelsonpadil_:
> "Fine for demos/generic... Production needs: state control, business logic, custom observability, evals"

**For** production deployments, consider adding:**

| **Gap** | **Sol**ution |
|--------|-------------|
| **Sta**te control | Custom checkpointing and recovery |
| **Bus**iness logic gates | Domain-specific validation |
| **Cus**tom observability | Logging, metrics, tracing |
| **Eva**luation framework | Output quality measurement |
| **Cos**t tracking | Per-task, per-agent budget management |

### **Kno**wn Limitations

1. **Bet**a/Disabled Feature** - May change without notice
2. **Rel**ies on editing minified JS** - Updates may break CC Mirror
3. **Con**text Collapse Risk** - Enable auto-compact to mitigate
4. **Par**allel Worker Conflicts** - Multiple workers touching same files
5. **Tok**en Cost** - 5,299 token skill file upfront cost
6. **Win**dows Compatibility** - Issues reported (fixes in progress)
7. **GLM** Quick Install** - May skip team mode

---

## 15. Quick Reference

### **Ins**tallation Commands

```bash
# Install variant
npx cc-mirror quick --provider mirror --name mclaude

# Launch
mclaude

# Load skill
"Load the orchestration skill and initiate"
```

### **Tas**k Management API

```
TaskCreate  - Create task with subject, description, acceptance criteria
TaskList    - List tasks (filter by status, owner, blocked)
TaskGet     - Get full task context
TaskUpdate  - Update task (claim, comment, resolve)
addBlocks   - Mark task as blocking another
addBlockedBy - Mark task as blocked by another
```

### **Mod**el Selection

```
Haiku  --> Simple lookups, file fetching (5-10 parallel)
Sonnet --> Implementation, patterns, tests (2-5 parallel)
Opus   --> Architecture, complex reasoning (1 sequential)
```

### **Too**l Ownership

```
Orchestrator: Read (1-2 files), Task*, AskUserQuestion
Worker: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch
Workers NEVER: Task*, spawn sub-agents
```

### **Wor**ker Preamble Template

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

### **Pro**viders

```
mirror    - Default, Claude's internal primitives
glm       - GLM-4.7 (good multi-agent coordination)
openrouter - OpenRouter integration (100+ models)
litellm   - LiteLLM support (self-hosted)
z.ai      - Z.ai integration (GLM models)
minimax   - MiniMax integration
ccrouter  - Local LLMs (Ollama, DeepSeek)
```

### **CLI** Commands

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

### **Pat**tern Decision Matrix

| **Sce**nario | **Rec**ommendation |
|-------------|-------------------|
| 80% of multi-agent tasks | **CC Mirror** - native, simple, sufficient |
| Factory-scale production | **Gas Town** - named agents, roles, persistence |
| Sequential iteration | **Ralph Loop** - single-agent, fresh context |
| Custom business logic | **External tools** - full control |
| Mission-critical reliability | **Standard Claude** + manual coordination |

---

## 16. Source Attribution

### **Pri**mary Extraction

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/extractions/orchestration/024-cc-mirror-complete.md`
  - Complete CC Mirror extraction (~1,600 lines)
  - Task API documentation
  - Worker preamble templates
  - Comparison matrices

### **Exi**sting Synthesis Files

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/synthesis/multi-agent-cc-mirror-complete.md`
  - Technical reference document
  - Tool ownership details
  - Pattern implementations

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/synthesis/mastery-ralph-complete.md`
  - Ralph pattern mastery guide
  - Integration patterns with CC Mirror
  - Checkpoint format reference

### **Sup**porting Context

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/synthesis/architecture-complexity-ladder.md`
  - Complexity ladder positioning
  - Level 4-5 definition

- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/synthesis/JUDGMENT-GUIDE.md`
  - Decision trees
  - Pattern selection criteria

### **Ori**ginal Sources

**Git**Hub:**
- [CC Mirror Repository](https://github.com/numman-ali/cc-mirror)
- [Orchestration Skill Documentation](https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md)
- [Team Mode Documentation](https://github.com/numman-ali/cc-mirror/blob/main/docs/features/team-mode.md)

**Twi**tter/X Threads:**
- [Numman Ali - Multi-Agent Orchestration](https://x.com/nummanali/status/2007768692659015877) - 791 likes, 107K views
- [Numman Ali - Skill Deep Dive](https://x.com/nummanali/status/2007984449120874681) - 714 likes, 82K views
- [Numman Ali - CC Mirror Release](https://x.com/nummanali/status/2007849823756575084) - 449 likes, 66K views

**Ana**lysis Sources:**
- [The Unwind AI - CC Mirror Analysis](https://www.theunwindai.com/p/claude-code-s-hidden-multi-agent-orchestration-now-open-source)
- [DeepWiki - CC Mirror Overview](https://deepwiki.com/numman-ali/cc-mirror)

---

## Tags

`#cc-mirror` `#nummanali` `#multi-agent` `#orchestration` `#hidden-api` `#task-management` `#hub-and-spoke` `#worker-separation` `#iron-law` `#provider-flexibility` `#native-orchestration` `#anthropic-internals` `#trading-floor` `#conductor-pattern` `#haiku-army` `#model-escalation` `#context-budget` `#mastery-guide`

---

## Cross-References

### **Rel**ated Extractions

- `extractions/orchestration/007-cc-mirror-multiagent-nummanali.md` - Initial discovery notes
- `extractions/orchestration/008-cc-mirror-skill-deepdive-nummanali.md` - Skill file analysis
- `extractions/orchestration/011-cc-mirror-native-orchestration-nummanali.md` - Task API details
- `extractions/orchestration/research-cc-mirror-expanded.md` - Extended research compilation

### **Rel**ated Synthesis

- `synthesis/multi-agent-cc-mirror-complete.md` - Technical reference
- `synthesis/mastery-multi-agent.md` - Multi-agent mastery guide
- `synthesis/compare-orchestration.md` - Orchestration comparison
- `synthesis/architecture-complexity-ladder.md` - Complexity progression

### **Com**plementary Patterns

- **CC** Mirror + **Ral**ph:** Use Ralph loops within CC Mirror workers for iteration
- **CC** Mirror + **Wor**ktrees:** Combine for parallel isolated development
- **CC** Mirror + **Cla**ude HUD:** Monitor orchestrator context usage
- **CC** Mirror + **rpa**i:** Monitor multiple CC Mirror instances across tmux

---

*Compiled: 2026-01-19*
*Agent: Claude Opus 4.5*
*Mission: Complete CC Mirror Mastery Guide*
