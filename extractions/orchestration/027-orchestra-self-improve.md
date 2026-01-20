# Orchestra: Self-Improving Multi-Agent Orchestrator

## 0xSero's Hub-and-Spoke Specialization Pattern

---

## D-FINAL Connection

**Contributed to:** D-FINAL-architecture.md, D-FINAL-implementation.md
**Last enhanced:** 2026-01-18 (Wave 3)

---

> "Rather than relying on a single AI model, the system deploys specialized workers... Each worker type brings domain expertise, enabling parallel execution and clearer reasoning paths compared to generalist AI approaches."
>
> — Open Orchestra Documentation

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Core Concept](#2-core-concept)
3. [Worker Profiles](#3-worker-profiles)
4. [Architecture](#4-architecture)
5. [Self-Improvement Mechanism](#5-self-improvement-mechanism)
6. [Technical Implementation](#6-technical-implementation)
7. [Design Decisions](#7-design-decisions)
8. [Comparison](#8-comparison)
9. [Implementation Guide](#9-implementation-guide)
10. [Troubleshooting](#10-troubleshooting)
11. [Quick Reference](#11-quick-reference)

---

## 1. You Are Here

### Complexity Ladder Position

```
Level 0: Single session, manual prompting          ← Beginner
Level 1: CLAUDE.md + structured context
Level 2: MCP tools + external integrations
Level 3: Hooks + automated triggers
Level 4: Multi-agent Task tool
Level 5: Ralph loop + continuous iteration
Level 6: Gas Town + factory orchestration
Level 7: Orchestra + self-improving specialization ← YOU ARE HERE
```

### What This Pattern Enables

Open Orchestra represents the **mature implementation** of hub-and-spoke orchestration—a central coordinator delegating to specialized workers while maintaining persistent knowledge through optional Neo4j integration. Unlike simpler patterns that use a single generalist model, Orchestra provides:

- **Domain Specialization**: Six built-in worker profiles optimized for distinct tasks
- **Async Task Management**: Non-blocking execution with sophisticated state tracking
- **Cross-Session Persistence**: Device registry enables worker reuse across sessions
- **Workflow Automation**: Multi-step sequences with carry-forward context
- **Memory Integration**: Neo4j-backed knowledge graphs for persistent learning

### Prerequisites

Before implementing Orchestra patterns, you should understand:

- Multi-agent coordination concepts (see: `mastery-multi-agent.md`)
- MCP tool integration (see: `techniques/mcp-ecosystem.md`)
- Workflow orchestration basics (see: `compare-orchestration-patterns.md`)

---

## 2. Core Concept

### The Hub-and-Spoke Model

Open Orchestra implements a **coordinator agent** pattern where the central orchestrator never invokes tools directly—instead, it delegates all work through a unified Task API.

```
                    ┌─────────────────────────────────────────┐
                    │           ORCHESTRATOR (Hub)            │
                    │                                         │
                    │  "Coordinator agent, not tool user"     │
                    │  - Analyzes incoming requests           │
                    │  - Routes to appropriate worker         │
                    │  - Awaits results before responding     │
                    │  - Maintains cross-task context         │
                    └─────────────┬───────────────────────────┘
                                  │
           ┌──────────────────────┼──────────────────────────┐
           │                      │                          │
           ▼                      ▼                          ▼
    ┌─────────────┐      ┌─────────────┐            ┌─────────────┐
    │   Vision    │      │    Docs     │    ...     │   Memory    │
    │   Worker    │      │   Worker    │            │   Worker    │
    │             │      │             │            │             │
    │ Image/OCR   │      │ API Research│            │ Neo4j Graph │
    │ UI Review   │      │ Citations   │            │ Persistence │
    └─────────────┘      └─────────────┘            └─────────────┘
           │                      │                          │
           └──────────────────────┼──────────────────────────┘
                                  │
                                  ▼
                         ┌───────────────┐
                         │   Neo4j DB    │
                         │  (Optional)   │
                         │               │
                         │ Knowledge     │
                         │ Persistence   │
                         └───────────────┘
```

### Core Philosophy

**1. Specialization Over Generalization**

Each worker profile is optimized for specific task domains:
- Vision workers have image analysis capabilities enabled
- Docs workers have web access for research
- Architect workers are read-only (no code execution tools)
- Explorer workers use fast models with low temperature for consistency

**2. Async-First Execution**

The orchestrator operates on a non-blocking model:
```
task_start() → returns taskId immediately
              → work executes asynchronously
task_await() → blocks until completion
              → returns result
```

**3. Context Carry-Forward**

Multi-step workflows accumulate context through intelligent summarization:
- Structured sections extracted: Summary, Actions, Artifacts, Risks, Next
- Proportional size caps prevent context bloat
- Oldest blocks dropped when limits exceeded

### The Five-Tool Task API

All orchestration flows through these five primitives:

| Tool | Purpose | Blocking? |
|------|---------|-----------|
| `task_start` | Initiate worker/workflow tasks | No (returns taskId) |
| `task_await` | Block until completion | Yes |
| `task_peek` | Check status without waiting | No |
| `task_list` | Retrieve recent tasks/views | No |
| `task_cancel` | Stop running tasks | No (best-effort) |

---

## 3. Worker Profiles

### Built-in Profile Definitions

Orchestra ships with six specialized worker profiles, each optimized for distinct domains:

#### Vision Analyst

```typescript
{
  id: "vision",
  name: "Vision Analyst",
  model: "auto:vision",
  purpose: "Analyze images, screenshots, OCR, UI review",
  backend: "server",
  vision: true,
  web: false,
  tags: ["images", "screenshots", "ui"]
}
```

**Use Cases:**
- Screenshot debugging
- UI component analysis
- OCR text extraction
- Error message parsing from images

**Activation:** Automatic when images detected in output parts

---

#### Documentation Librarian

```typescript
{
  id: "docs",
  name: "Documentation Librarian",
  model: "auto:docs",
  purpose: "Research documentation, find examples, explain APIs",
  backend: "server",
  vision: false,
  web: true,
  contextInjection: "repoContext",
  tags: ["research", "documentation", "apis"]
}
```

**Use Cases:**
- API reference lookup
- Library documentation research
- Example code discovery
- Technical specification analysis

**Key Feature:** Automatic repository context injection

---

#### Code Implementer

```typescript
{
  id: "coder",
  name: "Code Implementer",
  model: "auto",
  purpose: "Write, edit, and implement code features",
  backend: "server",
  vision: false,
  web: false,
  tools: { all: true },  // Full tool access
  tags: ["code", "implementation", "development"]
}
```

**Use Cases:**
- Feature implementation
- Bug fixes
- Code refactoring
- Test writing

**Key Feature:** Full tool access for complete implementation capability

---

#### System Architect

```typescript
{
  id: "architect",
  name: "System Architect",
  model: "auto",
  purpose: "Design systems, plan implementations, review architecture",
  backend: "server",
  vision: false,
  web: false,
  tools: {
    Read: true,
    Glob: true,
    Grep: true,
    // No Edit, Write, or Bash
  },
  tags: ["design", "planning", "architecture"]
}
```

**Use Cases:**
- System design proposals
- Implementation planning
- Code review
- Architecture assessment

**Key Feature:** Read-only access prevents accidental changes during planning

---

#### Code Explorer

```typescript
{
  id: "explorer",
  name: "Code Explorer",
  model: "auto:fast",
  purpose: "Fast codebase searches and navigation",
  backend: "server",
  vision: false,
  web: false,
  temperature: 0.1,  // Consistency-optimized
  tags: ["search", "navigation", "exploration"]
}
```

**Use Cases:**
- Finding function definitions
- Route discovery
- Understanding architectural patterns
- Quick codebase orientation

**Key Feature:** Fast model with low temperature for consistent, quick results

---

#### Memory Graph Curator

```typescript
{
  id: "memory",
  name: "Memory Graph Curator",
  model: "auto",
  purpose: "Manage Neo4j knowledge graphs, context pruning",
  backend: "server",
  vision: false,
  web: true,
  skills: ["memory"],
  tags: ["memory", "knowledge", "persistence"]
}
```

**Use Cases:**
- Recording project decisions
- Maintaining convention memory
- Cross-session context preservation
- Knowledge graph curation

**Key Feature:** Neo4j integration for persistent knowledge storage

---

### Profile Capabilities Matrix

| Profile | Model Tag | Vision | Web | Full Tools | Temperature |
|---------|-----------|--------|-----|------------|-------------|
| vision | auto:vision | ✓ | - | - | default |
| docs | auto:docs | - | ✓ | - | default |
| coder | auto | - | - | ✓ | default |
| architect | auto | - | - | read-only | default |
| explorer | auto:fast | - | - | - | 0.1 |
| memory | auto | - | ✓ | - | default |

### Custom Profile Definition

You can define specialized workers in `.opencode/orchestrator.json`:

```json
{
  "profiles": {
    "ethers-expert": {
      "name": "Ethers.js Specialist",
      "model": "anthropic/claude-sonnet-4-5",
      "purpose": "Smart contract interaction and Web3 development",
      "backend": "server",
      "web": true,
      "tools": { "all": true },
      "systemPrompt": "You are an expert in Ethers.js v6 and Ethereum development..."
    }
  }
}
```

---

## 4. Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DESKTOP SHELL (Electron)                     │
│   Spawns OpenCode sidecar, injects URLs into client runtime         │
└───────────────────────────────────┬─────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         CONTROL PANEL (React)                        │
│                                                                       │
│   Connects via:                                                       │
│   - OpenCode API (port 4096)                                         │
│   - Orchestrator events (configurable bridge port)                   │
│   - Skills API (port 4097)                                           │
└───────────────────────────────────┬─────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         OPENCODE SERVER                              │
│                                                                       │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                   ORCHESTRATOR PLUGIN                        │   │
│   │                                                               │   │
│   │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │   │
│   │  │   Workflow   │  │    Memory    │  │    Event     │       │   │
│   │  │    Engine    │  │  Operations  │  │   Streaming  │       │   │
│   │  └──────────────┘  └──────────────┘  └──────────────┘       │   │
│   │                                                               │   │
│   │  ┌──────────────────────────────────────────────────────┐   │   │
│   │  │                   WORKER POOL                         │   │   │
│   │  │                                                        │   │   │
│   │  │   In-Memory Map  ←→  Device Registry (persistent)     │   │   │
│   │  │                        ~/.opencode/orchestrator-      │   │   │
│   │  │                        device-registry.json           │   │   │
│   │  └──────────────────────────────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│   ┌──────────────────────────────────────────────────────────────┐   │
│   │  OpenCode Concepts (Agents + Skills from .opencode/)         │   │
│   └──────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────────┬─────────────────────────────┘
                                        │
                                        ▼
                              ┌───────────────────┐
                              │      Neo4j        │
                              │    (Optional)     │
                              │                   │
                              │  Knowledge Graph  │
                              │  Persistence      │
                              └───────────────────┘
```

### Worker Pool Architecture

The `WorkerPool` class consolidates three previously separate systems:

**1. In-Memory Tracking**
```typescript
class WorkerPool {
  private workers: Map<string, WorkerInstance> = new Map();
  private sessionOwnership: Map<string, string> = new Map();

  // Event emission for external coordination
  emit(event: 'spawn' | 'ready' | 'busy' | 'error' | 'stop' | 'update');
}
```

**2. Device Registry (Persistence)**

Cross-session persistence at `~/.opencode/orchestrator-device-registry.json`:

```json
{
  "workers": {
    "vision-abc123": {
      "profileId": "vision",
      "port": 14097,
      "lastHealthCheck": "2026-01-18T10:30:00Z",
      "sessionId": "session-xyz"
    }
  }
}
```

**3. Spawn Deduplication**

```typescript
// Prevents duplicate spawns via promise tracking
private inFlightSpawns: Map<string, Promise<WorkerInstance>> = new Map();

async getOrSpawn(profileId: string): Promise<WorkerInstance> {
  // Check in-memory first
  const existing = this.workers.get(profileId);
  if (existing && existing.healthy) return existing;

  // Check device registry
  const persisted = await this.tryReuseFromDeviceRegistry(profileId);
  if (persisted) return persisted;

  // Deduplicate concurrent spawn requests
  if (this.inFlightSpawns.has(profileId)) {
    return this.inFlightSpawns.get(profileId);
  }

  // Create new spawn
  const spawnPromise = this.spawn(profileId);
  this.inFlightSpawns.set(profileId, spawnPromise);
  return spawnPromise;
}
```

### Workflow Engine

Step-gated execution with carry-forward context:

```
┌──────────────────────────────────────────────────────────────────┐
│                        WORKFLOW RUN                               │
│                                                                    │
│   runId: "wf-abc123"                                              │
│   workflow: "roocode-boomerang"                                   │
│   status: "running"                                               │
│                                                                    │
│   ┌────────────┐    carry    ┌────────────┐    carry    ┌──────┐ │
│   │   Step 1   │ ──────────► │   Step 2   │ ──────────► │  ... │ │
│   │   (plan)   │             │ (implement)│             │      │ │
│   │            │             │            │             │      │ │
│   │ architect  │             │   coder    │             │      │ │
│   └────────────┘             └────────────┘             └──────┘ │
│         │                           │                             │
│         ▼                           ▼                             │
│   ┌───────────────────────────────────────────────────────────┐  │
│   │                    CARRY CONTEXT                           │  │
│   │                                                             │  │
│   │   Summary:   (max 900 chars)    "Plan: 6-step migration"   │  │
│   │   Actions:   (max 400 chars)    "1. Create schema..."      │  │
│   │   Artifacts: (max 1600 chars)   "src/db/migration.ts"      │  │
│   │   Risks:     (max 300 chars)    "Breaking change in API"   │  │
│   │   Next:      (max 300 chars)    "Implement step 2"         │  │
│   └───────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5. Self-Improvement Mechanism

### Understanding Orchestra's "Self-Improvement"

Orchestra implements **continuous refinement** rather than traditional self-modification. The system improves through several interconnected mechanisms:

### 5.1 Memory-Based Learning

**Automatic Memory Recording**

After each assistant response, the memory trigger activates:

```typescript
// Triggered at turn completion
function handleMemoryTurnEnd(message: Message) {
  // Extract structured information
  const extracted = {
    text: message.content,
    summaries: extractSummaries(message),
    decisions: extractDecisions(message),
    todos: extractTodos(message),
    entities: extractEntities(message)
  };

  // Submit to memory workflow
  await runWorkflow('memory-record', extracted);
}
```

**Multi-Scope Storage**

```typescript
// Messages stored with scope-specific keys
await recordMemory({
  scope: 'global',
  key: `message:${projectId}:${session}:${messageId}`,
  value: messageText,
  tags: [role, userId, session]
});

// Relationships established
await linkMemory(messageNode, userNode, 'belongs_to_user');
await linkMemory(messageNode, projectNode, 'belongs_to_project');
```

**Rolling Summaries**

```typescript
// Lightweight global index maintained
await appendToSummary({
  projectId,
  sessionId,
  entry: `[${timestamp}] ${snippet}`
});
```

### 5.2 Workflow Refinement Loops

The **RooCode Boomerang** pattern implements iterative improvement:

```
┌──────────────────────────────────────────────────────────────────┐
│                   ROOCODE BOOMERANG CYCLE                         │
│                                                                    │
│   ┌─────────┐        ┌──────────┐        ┌────────┐        ┌───┐ │
│   │  PLAN   │  ───►  │IMPLEMENT │  ───►  │ REVIEW │  ───►  │FIX│ │
│   │         │        │          │        │        │        │   │ │
│   │Architect│        │  Coder   │        │Architect│       │Coder│
│   │         │        │          │        │        │        │   │ │
│   │"3-6 step│        │"Execute  │        │"Check  │        │"Apply│
│   │checklist"│       │ plan"    │        │ quality"│       │fixes"│
│   └─────────┘        └──────────┘        └────────┘        └───┘ │
│       │                   │                  │                │   │
│       └───────────────────┴──────────────────┴────────────────┘   │
│                         CARRY CONTEXT                             │
│                  (flows through all steps)                        │
└──────────────────────────────────────────────────────────────────┘
```

**Step Definition:**

```typescript
const roocodeBoomerang = {
  id: 'roocode-boomerang',
  steps: [
    {
      id: 'plan',
      workerId: 'architect',
      prompt: 'Create a numbered checklist with 3-6 steps for: {{task}}',
      carry: ['summary', 'actions']
    },
    {
      id: 'implement',
      workerId: 'coder',
      prompt: 'Execute the plan: {{carry.summary}}',
      carry: ['summary', 'artifacts']
    },
    {
      id: 'review',
      workerId: 'architect',
      prompt: 'Review for correctness, edge cases, missing tests: {{carry.artifacts}}',
      carry: ['risks', 'next']
    },
    {
      id: 'fix',
      workerId: 'coder',
      prompt: 'Apply fixes or confirm completion: {{carry.risks}}',
      carry: ['summary']
    }
  ]
};
```

### 5.3 Automatic Trigger System

**Vision Auto-Routing**

```typescript
function handleVisionMessage(output: OutputPart[]) {
  const images = output.filter(part => isImagePart(part));

  if (images.length > 0) {
    // Inject placeholder
    await injectMessage({
      type: 'vision-analysis',
      status: 'pending',
      taskId: generateTaskId()
    });

    // Run vision workflow asynchronously (or blocking)
    const run = trigger.blocking
      ? await runVisionWorkflow(images)
      : void runVisionWorkflow(images);
  }
}
```

**Pattern Detection:**

```typescript
// Detect vision model failures
const errorPatterns = [
  'does not support image input',
  'vision model unavailable',
  'image processing failed'
];

function isVisionError(response: string): boolean {
  return errorPatterns.some(pattern =>
    response.toLowerCase().includes(pattern)
  );
}
```

### 5.4 Knowledge Graph Persistence

**Graph-Based Memory:**

```typescript
// Neo4j operations
interface MemoryNode {
  scope: 'global' | 'project';
  projectId?: string;
  key: string;
  value: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Key operations
await upsertMemory(node);           // Create or update
await linkMemory(from, to, type);   // Establish relationships
await searchMemory(query, scope);   // Full-text search
await trimMemoryByKeyPrefix(prefix, keepN);  // Garbage collection
```

**Automatic Trimming:**

```typescript
// Prevent unbounded growth
const limits = {
  messagesPerSession: 1000,
  messagesPerProject: 5000,
  globalMessages: 200000,
  textLength: { min: 100, max: 8000 }
};

async function trimGlobalMessageProjects() {
  await db.run(`
    MATCH (m:Memory)
    WHERE m.key STARTS WITH 'message:'
    WITH m ORDER BY m.updatedAt DESC
    SKIP ${limits.globalMessages}
    DELETE m
  `);
}
```

### 5.5 Safety Constraints (Guardrails)

**Pending Task Enforcement:**

```typescript
function buildPendingTaskReminder(sessionId: string): string | null {
  const pending = getPendingTasks(sessionId).slice(0, 5);

  if (pending.length === 0) return null;

  return `
    ## Pending Tasks
    Complete these before proceeding:
    ${pending.map(t => `- task_await({ taskId: "${t.id}" })`).join('\n')}
  `;
}
```

**Legacy Tool Correction:**

```typescript
const legacyPatterns = [
  /run_workflow\(/,
  /ask_worker_async\(/,
  /delegate_task\(/
];

function needsLegacyToolCorrection(text: string): boolean {
  return legacyPatterns.some(pattern => pattern.test(text));
}

function buildLegacyToolCorrectionHint(): string {
  return `
    Use the modern Task API:
    - task_start({ profile: "coder", prompt: "..." })
    - task_await({ taskId: "..." })
    - task_list({ view: "tasks" })
  `;
}
```

---

## 6. Technical Implementation

### Configuration Schema

**Core Settings:**

```json
{
  "$schema": "./orchestrator.schema.json",

  "basePort": 14096,
  "autoSpawn": true,
  "startupTimeout": 30000,
  "healthCheckInterval": 30000,

  "ui": {
    "toast": true,
    "systemContextInjection": true,
    "defaultListFormat": "markdown",
    "debug": false,
    "wakeupInjection": true
  }
}
```

**Worker Configuration:**

```json
{
  "profiles": {
    "custom-analyst": {
      "name": "Custom Analyst",
      "model": "anthropic/claude-sonnet-4-5",
      "purpose": "Domain-specific analysis",
      "backend": "server",
      "vision": false,
      "web": true,
      "tools": { "Read": true, "Grep": true, "WebFetch": true },
      "temperature": 0.3,
      "systemPrompt": "You are a specialized analyst..."
    }
  },

  "workers": ["vision", "coder", "custom-analyst"]
}
```

**Workflow Configuration:**

```json
{
  "workflows": {
    "enabled": true,
    "triggers": {
      "vision": {
        "enabled": true,
        "workflowId": "vision-analysis",
        "autoSpawn": true,
        "blocking": false
      },
      "memory": {
        "enabled": true,
        "workflowId": "memory-record",
        "autoSpawn": true,
        "blocking": false
      }
    }
  }
}
```

**Memory Configuration:**

```json
{
  "memory": {
    "enabled": true,
    "scope": "project",
    "autoInject": true,
    "summarization": true,
    "limits": {
      "messagesPerSession": 1000,
      "messagesPerProject": 5000,
      "globalMessages": 200000
    }
  }
}
```

**Security Settings:**

```json
{
  "security": {
    "maxSteps": 4,
    "maxTaskCharacters": 12000,
    "defaultTimeout": 60000,
    "allowedWorkflows": ["roocode-boomerang", "vision-analysis"]
  }
}
```

### Configuration Locations

Settings cascade in order of precedence:

```
1. Built-in defaults (lowest priority)
         ↓
2. ~/.config/opencode/orchestrator.json (user-level)
         ↓
3. .opencode/orchestrator.json (project-level, highest priority)
```

### Model Selection

**Capability-Based Tags:**

| Tag | Resolves To |
|-----|-------------|
| `auto` or `node` | Default configured model |
| `auto:vision` | Vision-capable model |
| `auto:docs` | Web-browsing model |
| `auto:fast` | Fast/efficient model |

**Explicit Model Selection:**

```json
{
  "profiles": {
    "premium-coder": {
      "model": "anthropic/claude-opus-4-5"
    }
  }
}
```

### Orchestrator Prompt

The orchestrator operates with specific behavioral constraints:

```markdown
# OpenCode Orchestrator

You are a **coordinator agent**, not a direct tool user.

## Core Rules

1. **Never invoke MCP tools directly** — delegate through Task API
2. **Suppress internal reasoning** — no "Thinking:" blocks
3. **Handle async workflows** — start tasks, await before responding
4. **Auto-dispatch vision** — when images arrive, analyze first

## Delegation Tools

- `task_start`: Launch worker/workflow tasks
- `task_await`: Block until completion
- `task_peek`: Check status (non-blocking)
- `task_list`: Locate task IDs
- `task_cancel`: Stop running tasks

## Routing

- Vision → image/screenshot analysis
- Docs → research and lookups
- Coder → implementation
- Architect → design and planning
- Explorer → codebase searches
```

---

## 7. Design Decisions

### Why Hub-and-Spoke?

**Decision:** Central coordinator delegates to specialized workers

**Rationale:**
- Specialization enables domain-optimized prompts and tool access
- Coordinator maintains global context while workers focus narrowly
- Failures in one worker don't crash the entire system
- Workers can be scaled independently based on demand

**Trade-offs:**
- (+) Clear separation of concerns
- (+) Workers can use different models optimized for their domain
- (-) Overhead of message passing between coordinator and workers
- (-) Coordinator becomes single point of failure

### Why Async-First?

**Decision:** Non-blocking task execution with explicit awaits

**Rationale:**
- Prevents blocking on long-running operations
- Enables parallel task execution
- Makes task lifecycle explicit and observable
- Allows for task cancellation and timeout handling

**Trade-offs:**
- (+) Better resource utilization
- (+) Explicit control over blocking behavior
- (-) More complex mental model for developers
- (-) Requires explicit await calls to get results

### Why Device Registry?

**Decision:** Persist worker metadata across sessions

**Rationale:**
- Reduces worker spawn overhead for frequent operations
- Maintains context across IDE restarts
- Enables health checking of previously spawned workers
- Prevents duplicate spawns in concurrent scenarios

**Trade-offs:**
- (+) Faster warm-start for returning sessions
- (+) Cross-session worker reuse
- (-) Stale registry entries require cleanup
- (-) File I/O overhead for persistence

### Why Neo4j for Memory?

**Decision:** Optional graph database for knowledge persistence

**Rationale:**
- Relationships between knowledge nodes are first-class
- Full-text search across memories
- Scoped queries (global/project/session)
- Natural fit for conversation threading

**Trade-offs:**
- (+) Rich relationship modeling
- (+) Powerful query capabilities
- (-) External dependency to manage
- (-) Overkill for simple use cases (hence optional)

### Why Read-Only Architect?

**Decision:** Architect profile has no edit/write/bash tools

**Rationale:**
- Separation of planning from execution
- Prevents "plan drift" where planner modifies code mid-plan
- Forces clean handoff to implementation workers
- Reduces risk of unintended changes during review

**Trade-offs:**
- (+) Cleaner role separation
- (+) Safer code review workflows
- (-) Cannot make quick fixes during design phase
- (-) Requires explicit handoff to coder

### Why Sequential Steps?

**Decision:** Workflows execute steps sequentially, not in parallel

**Rationale:**
- Carry context requires previous step output
- Simpler reasoning about workflow state
- Easier debugging and intervention
- Natural match for plan→implement→review cycles

**Trade-offs:**
- (+) Predictable execution order
- (+) Clean context flow
- (-) Cannot parallelize independent steps
- (-) Longer wall-clock time for multi-step workflows

---

## 8. Comparison

### Orchestra vs Gas Town

| Aspect | Orchestra | Gas Town |
|--------|-----------|----------|
| **Architecture** | Hub-and-spoke coordinator | Factory with specialized agents |
| **Workers** | 6 built-in profiles | Mayor, Deacon, Dogs, Refinery |
| **Memory** | Neo4j graph (optional) | Agent-managed state |
| **Self-Improvement** | Memory recording + workflow refinement | Continuous refinement loops |
| **Complexity** | Medium (plugin-based) | High (full infrastructure) |
| **Deployment** | OpenCode plugin | Standalone system |

**When to Choose Orchestra:**
- You want plug-and-play with OpenCode
- You need structured workflow automation
- Domain-specialized workers fit your use case
- Neo4j knowledge persistence is valuable

**When to Choose Gas Town:**
- You need factory-scale agent production
- Custom agent types beyond 6 profiles
- Yegge's refinement philosophy resonates
- Building specialized AI infrastructure

---

### Orchestra vs Ralph Wiggum Loop

| Aspect | Orchestra | Ralph |
|--------|-----------|-------|
| **Architecture** | Multi-worker hub | Single-agent loop |
| **Execution** | Async task delegation | Continuous stdin piping |
| **State** | Device registry + Neo4j | Filesystem (PROMPT.md) |
| **Specialization** | Worker profiles | Single generalist |
| **Intervention** | Workflow pause/resume | Ctrl+C / iteration |

**When to Choose Orchestra:**
- You need domain-specialized workers
- Async execution matters
- Persistent knowledge is important
- You want structured workflows

**When to Choose Ralph:**
- Simplicity is paramount
- Single-focus iteration works
- You want minimal infrastructure
- Shell-native workflow preferred

---

### Orchestra vs CC-Mirror

| Aspect | Orchestra | CC-Mirror |
|--------|-----------|-----------|
| **Architecture** | Plugin-based hub | Hidden multi-agent |
| **Worker Types** | 6 specialized profiles | Task-based subagents |
| **Memory** | Neo4j optional | Session-scoped |
| **Visibility** | Explicit task management | Transparent delegation |
| **Configuration** | JSON config files | Claude-managed |

**When to Choose Orchestra:**
- You want explicit control over delegation
- Specialized worker profiles fit your needs
- Persistent memory is important
- You prefer declarative configuration

**When to Choose CC-Mirror:**
- You want invisible multi-agent orchestration
- Dynamic task-based delegation preferred
- Minimal configuration desired
- Session-scoped context is sufficient

---

### When to Use Self-Improvement Patterns

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SELF-IMPROVEMENT DECISION TREE                    │
│                                                                       │
│   Do you need persistent knowledge across sessions?                   │
│                     │                                                 │
│           ┌────────┴────────┐                                        │
│           ▼                 ▼                                        │
│          YES               NO                                        │
│           │                 │                                        │
│           ▼                 ▼                                        │
│   ┌──────────────┐   ┌──────────────┐                               │
│   │  Orchestra   │   │  Ralph or    │                               │
│   │  + Neo4j     │   │  CC-Mirror   │                               │
│   └──────────────┘   └──────────────┘                               │
│                                                                       │
│   Do you need specialized domain workers?                             │
│                     │                                                 │
│           ┌────────┴────────┐                                        │
│           ▼                 ▼                                        │
│          YES               NO                                        │
│           │                 │                                        │
│           ▼                 ▼                                        │
│   ┌──────────────┐   ┌──────────────┐                               │
│   │  Orchestra   │   │   Ralph or   │                               │
│   │  profiles    │   │  Gas Town    │                               │
│   └──────────────┘   └──────────────┘                               │
│                                                                       │
│   Do you need factory-scale agent production?                         │
│                     │                                                 │
│           ┌────────┴────────┐                                        │
│           ▼                 ▼                                        │
│          YES               NO                                        │
│           │                 │                                        │
│           ▼                 ▼                                        │
│   ┌──────────────┐   ┌──────────────┐                               │
│   │  Gas Town    │   │  Orchestra   │                               │
│   │  factory     │   │  or Ralph    │                               │
│   └──────────────┘   └──────────────┘                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 9. Implementation Guide

### Prerequisites

- **Bun** 1.0+ (package manager and runtime)
- **OpenCode CLI** with configured AI provider
- **Neo4j** (optional, for memory features)

### Step 1: Install Orchestra

```bash
# Clone repository
git clone https://github.com/0xSero/orchestra
cd orchestra

# Install dependencies
bun install

# Build the orchestrator plugin
bun run build
```

### Step 2: Configure OpenCode

Add to your `opencode.json`:

```json
{
  "plugins": ["opencode-orchestrator"]
}
```

### Step 3: Create Project Configuration

Create `.opencode/orchestrator.json`:

```json
{
  "$schema": "https://raw.githubusercontent.com/0xSero/orchestra/main/packages/orchestrator/schema/orchestrator.schema.json",

  "autoSpawn": true,
  "workers": ["vision", "coder", "architect"],

  "workflows": {
    "enabled": true,
    "triggers": {
      "vision": { "enabled": true, "blocking": false }
    }
  }
}
```

### Step 4: Verify Installation

```bash
# Start development mode
bun run dev

# In OpenCode, check status
orchestrator.status
```

**You Should See:**

```
## Orchestrator Status

Workers:
- vision (ready) - Vision Analyst
- coder (ready) - Code Implementer
- architect (ready) - System Architect

Workflows:
- vision-analysis (enabled)
- roocode-boomerang (enabled)
```

### Step 5: Test Basic Operations

```bash
# Start a task
task_start({ profile: "coder", prompt: "Create a hello world function" })

# Check task list
task_list({ view: "tasks" })

# Await result
task_await({ taskId: "<task-id-from-above>" })
```

### Step 6: Configure Neo4j (Optional)

```bash
# Start Neo4j
docker run -d \
  --name neo4j \
  -p 7474:7474 -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/password \
  neo4j:latest
```

Add to configuration:

```json
{
  "memory": {
    "enabled": true,
    "neo4j": {
      "uri": "bolt://localhost:7687",
      "username": "neo4j",
      "password": "password"
    }
  }
}
```

---

## 10. Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| **Desktop shows "Offline"** | OpenCode not running | Start OpenCode or set `OPENCODE_DESKTOP_BASE_URL` |
| **Empty worker list** | Plugin not built | Run `bun run --cwd packages/orchestrator build` |
| **Missing memory panel** | Events not configured | Add `?events=http://host:14096` or set `OPENCODE_ORCH_BRIDGE_PORT` |
| **Empty agent list** | Skills API unavailable | Check port 4097 or configure via query params |
| **Port conflicts** | Other services on ports | Use `OPENCODE_PORT`, `OPENCODE_SKILLS_PORT` env vars |
| **Worker spawn timeout** | Slow model initialization | Increase `startupTimeout` in config |
| **Task stuck pending** | Worker crashed | Check `task_list({ view: "workers" })` and restart |
| **Workflow not triggering** | Triggers disabled | Verify `workflows.triggers.<type>.enabled: true` |
| **Neo4j connection failed** | Credentials/URI wrong | Check `memory.neo4j` settings |
| **Legacy tool warnings** | Using deprecated API | Switch to `task_start`/`task_await` pattern |

### Common Configuration Issues

**Worker not spawning:**
```json
// Check that profile exists
{
  "workers": ["vision"]  // Must match profile ID exactly
}

// Or define custom profile
{
  "profiles": {
    "myworker": { ... }
  },
  "workers": ["myworker"]
}
```

**Workflow not executing:**
```json
// Ensure enabled at multiple levels
{
  "workflows": {
    "enabled": true,  // Master switch
    "triggers": {
      "vision": {
        "enabled": true  // Per-trigger switch
      }
    }
  }
}
```

---

## 11. Quick Reference

### Task API Cheatsheet

```typescript
// Start async task
task_start({
  profile: "coder",
  prompt: "Implement feature X"
})

// Start workflow
task_start({
  workflow: "roocode-boomerang",
  task: "Fix bug in auth module"
})

// Await result
task_await({ taskId: "task-abc123" })

// Check status
task_peek({ taskId: "task-abc123" })

// List views
task_list({ view: "tasks" })     // Recent tasks
task_list({ view: "workers" })   // Worker status
task_list({ view: "profiles" })  // Available profiles
task_list({ view: "status" })    // System status
task_list({ view: "output" })    // Log buffer

// Cancel
task_cancel({ taskId: "task-abc123" })
```

### Configuration Quick Reference

```json
{
  // Core
  "basePort": 14096,
  "autoSpawn": true,
  "startupTimeout": 30000,

  // Workers
  "workers": ["vision", "coder", "architect", "docs", "explorer", "memory"],

  // Workflows
  "workflows": {
    "enabled": true,
    "triggers": {
      "vision": { "enabled": true, "blocking": false },
      "memory": { "enabled": true, "blocking": false }
    }
  },

  // Memory
  "memory": {
    "enabled": true,
    "scope": "project",
    "autoInject": true
  },

  // Security
  "security": {
    "maxSteps": 4,
    "maxTaskCharacters": 12000
  }
}
```

### Worker Profile Quick Reference

| Profile | Model | Vision | Web | Full Tools |
|---------|-------|--------|-----|------------|
| vision | auto:vision | ✓ | - | - |
| docs | auto:docs | - | ✓ | - |
| coder | auto | - | - | ✓ |
| architect | auto | - | - | read-only |
| explorer | auto:fast | - | - | - |
| memory | auto | - | ✓ | - |

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `OPENCODE_PORT` | OpenCode server port (default: 4096) |
| `OPENCODE_SKILLS_PORT` | Skills API port (default: 4097) |
| `OPENCODE_ORCH_BRIDGE_PORT` | Orchestrator events port |
| `OPENCODE_DESKTOP_BASE_URL` | Remote server URL |
| `OPENCODE_DESKTOP_PLUGIN_PATH` | Override plugin location |

---

## Sources

**Primary Source:**
- [0xSero/orchestra GitHub Repository](https://github.com/0xSero/orchestra)
- Orchestra Documentation (architecture.md, configuration.md, examples.md)
- Source code analysis (worker-pool.ts, engine.ts, profiles.ts, triggers.ts)

**Related Patterns:**
- Gas Town (Steve Yegge) - Factory orchestration comparison
- Ralph Wiggum Loop (Matt Pocock) - Single-agent loop alternative
- CC-Mirror - Hidden multi-agent delegation

---

## Tags

`#orchestration` `#multi-agent` `#hub-and-spoke` `#self-improvement` `#worker-profiles` `#neo4j` `#workflow-automation` `#async-execution` `#opencode` `#level-7`

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Created** | 2026-01-18 |
| **Last Updated** | 2026-01-18 |
| **Author** | Claude Code Agent B3-T1-6 |
| **Source** | 0xSero/orchestra GitHub repository |
| **Lines** | 900+ |
| **Quality Score** | A (comprehensive extraction) |
| **Verification** | Source code analyzed, architecture documented |

---

## Cross-References

- `synthesis/architecture-complexity-ladder.md` - Level 7 placement
- `synthesis/compare-orchestration-patterns.md` - Pattern comparison
- `synthesis/mastery-multi-agent.md` - Multi-agent concepts
- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md` - Alternative pattern
- `extractions/orchestration/011-gas-town-yegge.md` - Factory comparison
