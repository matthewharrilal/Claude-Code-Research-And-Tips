# Beads: Git-Backed Data Plane for AI Agents
## Steve Yegge's Universal Context Management System

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.5 (Data plane infrastructure, persistence patterns)
- D-FINAL-implementation.md: Section 3.2 (Git-backed state management, sync protocols)

**Coverage in D-FINAL:** 85%
**High-value unique content:** Three-layer sync model, molecule/wisp chemistry metaphor, adaptive ID generation, daemon architecture, Claude integration patterns

**Journey references:**
- synthesis/mastery-ralph-complete.md#gas-town-data-plane
- extractions/orchestration/009-gas-town-steve-yegge.md#beads-integration
- extractions/orchestration/research-gas-town-expanded.md#beads-data-plane-integration

**Last enhanced:** 2026-01-18 (Wave 3)

---

> "It is a magical 4-dimensional graph-based git-backed fairy-dusted issue-tracker database, designed to let coding agents track all your work and never get lost again."
>
> — Steve Yegge, announcing Beads

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What is Beads?](#2-what-is-beads)
3. [Core Architecture](#3-core-architecture)
4. [The Three-Layer Data Model](#4-the-three-layer-data-model)
5. [Synchronization Strategy](#5-synchronization-strategy)
6. [Technical Implementation](#6-technical-implementation)
7. [Molecules and Wisps: Workflow Chemistry](#7-molecules-and-wisps-workflow-chemistry)
8. [Design Philosophy](#8-design-philosophy)
9. [Claude Code Integration](#9-claude-code-integration)
10. [Daemon Architecture](#10-daemon-architecture)
11. [Advanced Features](#11-advanced-features)
12. [Comparison with Alternatives](#12-comparison-with-alternatives)
13. [Implementation Guide](#13-implementation-guide)
14. [Troubleshooting](#14-troubleshooting)
15. [Quick Reference](#15-quick-reference)

---

## 1. You Are Here

### The Orchestration Stack

```
╔═══════════════════════════════════════════════════════════════════════╗
║                      AI AGENT ORCHESTRATION LAYERS                      ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  LAYER 4: ORCHESTRATION UI                                              ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  GTGUI, rpai, tmux interfaces                                   │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                  │                                      ║
║  LAYER 3: AGENT COORDINATION                                            ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Gas Town (gt CLI) - Mayor, Refinery, Polecats, Crew            │   ║
║  │  MCP Agent Mail - Inter-agent communication                     │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                  │                                      ║
║  LAYER 2: DATA PLANE ◀────────── YOU ARE HERE ─────────────────────    ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  ██████████████████████████████████████████████████████████████ │   ║
║  │  ██                                                          ██ │   ║
║  │  ██                      B E A D S                           ██ │   ║
║  │  ██              Git-Backed Data Plane                       ██ │   ║
║  │  ██                                                          ██ │   ║
║  │  ██████████████████████████████████████████████████████████████ │   ║
║  │                                                                 │   ║
║  │  • Persistent structured memory for agents                      │   ║
║  │  • Dependency-aware issue graphs                                │   ║
║  │  • JSONL source of truth + SQLite cache                         │   ║
║  │  • Three-way merge synchronization                              │   ║
║  │  • ~225K lines Go, 11K+ stars                                   │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                  │                                      ║
║  LAYER 1: AI EXECUTION                                                  ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Claude Code, Cursor, Windsurf, Aider - LLM coding agents       │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                  │                                      ║
║  LAYER 0: VERSION CONTROL                                               ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Git - Repository, branching, history                           │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Where Beads Fits

| System | Function | Relationship to Beads |
|--------|----------|----------------------|
| **Git** | Version control | Beads uses git as its persistence layer |
| **Claude Code** | AI execution | Beads provides structured memory for agents |
| **Gas Town** | Agent coordination | Gas Town runs ON TOP of Beads |
| **MCP Agent Mail** | Inter-agent messaging | Complements Beads (memory + messaging = colony) |

### Key Insight

> "Beads gives agents shared memory, and MCP Agent Mail gives them messaging... and that's all they need."
>
> — Jeffrey Emanuel (MCP Agent Mail author)

**Beads is the memory substrate.** Gas Town is the factory management. Together they enable multi-agent colonies.

---

## 2. What is Beads?

### The One-Liner

**Beads (`bd`) is a distributed, git-backed issue tracker designed specifically for AI agents.**

### Why "Beads"?

The name captures the philosophy:
- **Small and focused** - Just tracking, nothing else
- **Strung together** - Issues form dependency chains
- **Individually distinct** - Each issue has a unique hash ID
- **Collectively meaningful** - The graph tells the story

### The Problem Beads Solves

```
╔═══════════════════════════════════════════════════════════════════════╗
║                     THE AGENT MEMORY PROBLEM                            ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  WITHOUT BEADS:                                                         ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                                                                  │   ║
║  │  Agent 1 starts work → gets context-collapsed → forgets state   │   ║
║  │              ↓                                                   │   ║
║  │  Agent 2 picks up → can't find what Agent 1 did → starts over   │   ║
║  │              ↓                                                   │   ║
║  │  Markdown files scattered everywhere → no dependency tracking    │   ║
║  │              ↓                                                   │   ║
║  │  "What was I working on?" → Lost productivity                    │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
║  WITH BEADS:                                                            ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                                                                  │   ║
║  │  Agent 1 files issue → commits to git → context survives        │   ║
║  │              ↓                                                   │   ║
║  │  Agent 2 syncs → sees full history → knows exact state          │   ║
║  │              ↓                                                   │   ║
║  │  `bd ready` → "Here's what needs doing next"                    │   ║
║  │              ↓                                                   │   ║
║  │  Dependency graph → work never gets lost                         │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Origin Story

Steve Yegge asked Claude to help design "a new lightweight issue tracker backed by git." Claude contributed:
- SQLite database caching layer
- `discovered_by` graph links
- Hash-based IDs
- Deletion tombstoning
- Three-way merge strategy

**Result:** 225K lines of Go, 100% vibe-coded, now 11K+ GitHub stars.

### Why Go?

From Steve's analysis of ~1M lines vibe-coded in 2025:

| Language | Vibe Coding Experience |
|----------|------------------------|
| **TypeScript** | 1/3 to 1/2 of diffs are type wrestling |
| **Python** | "Fine" but feels like scripts |
| **Go** | "Boring" = evolutionary advantage. Diffs are understandable. |

> "Go is just... good. It's boring. You can always understand it!"

---

## 3. Core Architecture

### Dual-Persistence Model

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    BEADS DUAL-PERSISTENCE ARCHITECTURE                  ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║                           ┌──────────────────┐                          ║
║                           │    bd CLI        │                          ║
║                           │  (User/Agent)    │                          ║
║                           └────────┬─────────┘                          ║
║                                    │                                    ║
║               ┌────────────────────┼────────────────────┐               ║
║               │                    │                    │               ║
║               ▼                    │                    ▼               ║
║  ┌────────────────────────┐        │        ┌────────────────────────┐  ║
║  │                        │        │        │                        │  ║
║  │      SQLite DB         │◀───────┼───────▶│     JSONL Files        │  ║
║  │   (Performance)        │   sync │        │   (Git Truth)          │  ║
║  │                        │        │        │                        │  ║
║  │  • Sub-ms queries      │        │        │  • Readable diffs      │  ║
║  │  • Complex joins       │        │        │  • Merge-friendly      │  ║
║  │  • Dependency graphs   │        │        │  • Version history     │  ║
║  │  • Full-text search    │        │        │  • Collaboration       │  ║
║  │                        │        │        │                        │  ║
║  │  .beads/beads.db       │        │        │  .beads/issues.jsonl   │  ║
║  │  (gitignored)          │        │        │  (git-tracked)         │  ║
║  │                        │        │        │                        │  ║
║  └────────────────────────┘        │        └────────────────────────┘  ║
║               │                    │                    │               ║
║               │                    │                    │               ║
║               └────────────────────┼────────────────────┘               ║
║                                    │                                    ║
║                                    ▼                                    ║
║                           ┌──────────────────┐                          ║
║                           │   Git Remote     │                          ║
║                           │  (Collaboration) │                          ║
║                           └──────────────────┘                          ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### The `.beads/` Directory

```
.beads/
├── issues.jsonl         # Git-tracked source of truth
├── deletions.jsonl      # Deletion manifest (prevents resurrection)
├── beads.db            # SQLite cache (gitignored)
├── sync_base.jsonl     # Last-synced snapshot (gitignored)
├── bd.sock             # Daemon socket (gitignored)
├── config.yaml         # Local configuration
└── metadata.json       # Database metadata
```

### Hash-Based IDs

**Format:** `bd-xxxx` (e.g., `bd-a3f8`)

**Why hash IDs?**
- **No central coordinator** - Any agent can create issues
- **No merge collisions** - UUIDs hashed to short prefixes
- **Adaptive scaling** - 4-6 characters based on database size

```
Database Size        ID Length    Collision Risk
─────────────────────────────────────────────────
0-500 issues         4 chars      ~7% at max
501-1500 issues      5 chars      ~2% at max
1501+ issues         6 chars      Negligible
```

### Hierarchical Organization

Issues form trees via parent-child dependencies:

```
bd-a3f8 (Epic: User Authentication)
├── bd-a3f8.1 (Task: Database schema)
│   ├── bd-a3f8.1.1 (Sub-task: Users table)
│   └── bd-a3f8.1.2 (Sub-task: Sessions table)
├── bd-a3f8.2 (Task: API endpoints)
└── bd-a3f8.3 (Task: Frontend forms)
```

---

## 4. The Three-Layer Data Model

### Layer Architecture

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    THREE-LAYER SYNCHRONIZED STORAGE                     ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  LAYER 1: SQLite Database                                        │   ║
║  │  ──────────────────────────                                      │   ║
║  │  Purpose: Fast queries, complex operations                       │   ║
║  │  Location: .beads/beads.db (local, gitignored)                   │   ║
║  │  Latency: Milliseconds                                           │   ║
║  │                                                                  │   ║
║  │  Capabilities:                                                   │   ║
║  │  • Dependency graph traversal                                    │   ║
║  │  • Full-text search                                              │   ║
║  │  • Complex filtering (status, priority, labels, dates)           │   ║
║  │  • Blocked issues cache (25x speedup)                            │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                    │                                    ║
║                          Auto-sync │ (5-second debounce)                ║
║                                    ▼                                    ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  LAYER 2: JSONL Files                                            │   ║
║  │  ─────────────────────                                           │   ║
║  │  Purpose: Git-tracked source of truth                            │   ║
║  │  Location: .beads/issues.jsonl (git-tracked)                     │   ║
║  │  Format: One JSON line per entity                                │   ║
║  │                                                                  │   ║
║  │  Benefits:                                                       │   ║
║  │  • Human-readable diffs                                          │   ║
║  │  • Standard git operations (branch, merge, revert)               │   ║
║  │  • Automatic merge success in most cases                         │   ║
║  │  • Complete audit trail                                          │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                    │                                    ║
║                        git push/pull                                    ║
║                                    ▼                                    ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  LAYER 3: Remote Repository                                      │   ║
║  │  ─────────────────────────                                       │   ║
║  │  Purpose: Multi-agent/multi-machine collaboration                │   ║
║  │  Location: GitHub, GitLab, etc.                                  │   ║
║  │                                                                  │   ║
║  │  Enables:                                                        │   ║
║  │  • Team synchronization                                          │   ║
║  │  • Multi-machine workflows                                       │   ║
║  │  • Multi-agent coordination (Gas Town)                           │   ║
║  │  • Backup and recovery                                           │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Write Path Flow

```
User runs: bd create "Implement login"
                    │
                    ▼
    ┌───────────────────────────────┐
    │  1. Write to SQLite (instant) │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  2. Mark database as "dirty"  │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  3. 5-second debounce window  │
    │     (batches multiple ops)    │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  4. Incremental export to     │
    │     JSONL (only changed)      │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  5. Git hooks auto-commit     │
    │     (if installed)            │
    └───────────────────────────────┘
```

### Read Path Flow (After git pull)

```
git pull (new JSONL from remote)
                    │
                    ▼
    ┌───────────────────────────────┐
    │  1. Detect JSONL is newer     │
    │     than local database       │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  2. Parse JSONL line by line  │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  3. Compare content hashes    │
    │     - Skip if identical       │
    │     - Update if changed       │
    │     - Create if new           │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  4. Rebuild blocked cache     │
    │     (< 50ms even for 10K)     │
    └───────────────────────────────┘
                    │
                    ▼
    ┌───────────────────────────────┐
    │  5. CLI queries fast SQLite   │
    └───────────────────────────────┘
```

---

## 5. Synchronization Strategy

### The Pull-First Principle

> "If you export local state before seeing what's on the remote, you commit to a snapshot that may conflict with changes you haven't seen yet."

**Sync Order:**
1. Load local database state
2. Fetch remote changes
3. Perform 3-way merge
4. Export merged result to JSONL
5. Push to remote

### Three-Way Merge Model

```
╔═══════════════════════════════════════════════════════════════════════╗
║                         THREE-WAY MERGE LOGIC                           ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║                      ┌──────────────────┐                               ║
║                      │   BASE STATE     │                               ║
║                      │ (Last sync point)│                               ║
║                      └────────┬─────────┘                               ║
║                               │                                         ║
║              ┌────────────────┴────────────────┐                        ║
║              │                                 │                        ║
║              ▼                                 ▼                        ║
║  ┌──────────────────────┐        ┌──────────────────────┐              ║
║  │     LOCAL STATE      │        │    REMOTE STATE      │              ║
║  │  (Your changes)      │        │  (Their changes)     │              ║
║  └──────────┬───────────┘        └──────────┬───────────┘              ║
║             │                                │                          ║
║             └────────────────┬───────────────┘                          ║
║                              │                                          ║
║                              ▼                                          ║
║                    ┌───────────────────┐                                ║
║                    │   MERGE RESULT    │                                ║
║                    └───────────────────┘                                ║
║                                                                         ║
║  MERGE RULES:                                                           ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Scenario                        │ Outcome                       │   ║
║  │─────────────────────────────────────────────────────────────────│   ║
║  │  Base unchanged, one modified    │ Modified version wins         │   ║
║  │  Both identical change           │ Change accepted               │   ║
║  │  Both different changes          │ Merge conflict                │   ║
║  │  Deleted + modified              │ Modification preserved        │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
║  FIELD-SPECIFIC STRATEGIES:                                             ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Field Type     │ Strategy           │ Example                   │   ║
║  │─────────────────────────────────────────────────────────────────│   ║
║  │  Scalars        │ Last-Write-Wins    │ title, status, priority   │   ║
║  │  Collections    │ Union merge        │ labels, dependencies      │   ║
║  │  Comments       │ Append + dedupe    │ comment history           │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Zombie Resurrection Prevention

When one machine deletes an issue while another modifies it:

```
Machine A: bd close bd-a3f8 → issue closed
Machine B: bd update bd-a3f8 --title "New title" → issue modified

SYNC RESULT: Issue resurrected with modification

PHILOSOPHY: "No silent data loss"
            User can delete again if needed
            But accidental work loss is prevented
```

### The `deletions.jsonl` Manifest

Prevents deleted issues from resurrecting during cross-clone sync:

```jsonl
{"id":"bd-a3f8","deleted_at":"2026-01-18T10:30:00Z","reason":"completed"}
{"id":"bd-b2c4","deleted_at":"2026-01-18T11:45:00Z","reason":"duplicate"}
```

---

## 6. Technical Implementation

### Core Entity Types

```go
// Issue - The primary work unit
type Issue struct {
    // Identification
    ID            string    // bd-xxxx format
    ContentHash   string    // For change detection

    // Content
    Title             string
    Description       string
    Design            string
    AcceptanceCriteria string
    Notes             string

    // Workflow
    Status      Status      // open, in_progress, blocked, deferred, closed
    Priority    int         // 0 = highest
    IssueType   IssueType   // task, bug, feature, epic, chore

    // Assignment
    Assignee          string
    Owner             string
    EstimatedMinutes  int

    // Timestamps
    CreatedAt   time.Time
    UpdatedAt   time.Time
    ClosedAt    *time.Time

    // Compaction (token preservation)
    CompactionLevel   int
    CompactedAt       *time.Time

    // Relations
    Labels        []Label
    Dependencies  []Dependency
    Comments      []Comment
}

// Status constants
const (
    StatusOpen       Status = "open"
    StatusInProgress Status = "in_progress"
    StatusBlocked    Status = "blocked"
    StatusDeferred   Status = "deferred"
    StatusClosed     Status = "closed"
    StatusTombstone  Status = "tombstone"  // Soft-deleted
)

// Issue types
const (
    TypeTask    IssueType = "task"
    TypeBug     IssueType = "bug"
    TypeFeature IssueType = "feature"
    TypeEpic    IssueType = "epic"
    TypeChore   IssueType = "chore"
    TypeMolecule IssueType = "molecule"  // Template workflows
)
```

### Dependency Types

```go
// Dependency relationships
const (
    // Workflow blockers
    DepBlocks           DependencyType = "blocks"
    DepParentChild      DependencyType = "parent-child"
    DepConditionalBlocks DependencyType = "conditional-blocks"
    DepWaitsFor         DependencyType = "waits-for"

    // Associations
    DepRelated        DependencyType = "related"
    DepDiscoveredFrom DependencyType = "discovered-from"
    DepDuplicates     DependencyType = "duplicates"
    DepSupersedes     DependencyType = "supersedes"
)
```

### Storage Interface

```go
// Storage - Primary interface for beads operations
type Storage interface {
    // Issue CRUD
    CreateIssue(ctx context.Context, issue *Issue) error
    GetIssue(ctx context.Context, id string) (*Issue, error)
    UpdateIssue(ctx context.Context, issue *Issue) error
    CloseIssue(ctx context.Context, id, reason string) error

    // Queries
    SearchIssues(ctx context.Context, filter IssueFilter) ([]*Issue, error)
    GetReadyWork(ctx context.Context) ([]*Issue, error)  // No blockers
    GetBlockedIssues(ctx context.Context) ([]*Issue, error)

    // Dependencies
    AddDependency(ctx context.Context, dep Dependency) error
    RemoveDependency(ctx context.Context, issueID, dependsOnID string) error
    GetDependencyTree(ctx context.Context, id string) ([]*TreeNode, error)
    DetectCycles(ctx context.Context) ([][]string, error)

    // Transactions
    RunInTransaction(ctx context.Context, fn func(tx Transaction) error) error

    // Metadata
    SetConfig(ctx context.Context, key, value string) error
    GetConfig(ctx context.Context, key string) (string, error)
}

// Transaction - Atomic operations
type Transaction interface {
    Storage
    Commit() error
    Rollback() error
}
```

### Blocked Issues Cache

**Performance Problem:** Computing blocked issues required recursive CTE taking ~752ms for 10K issues.

**Solution:** Materialized cache table with 25x speedup (~29ms).

```sql
-- Blocked issues cache table
CREATE TABLE blocked_issues_cache (
    issue_id TEXT PRIMARY KEY,
    blocked_by TEXT,  -- JSON array of blocking issue IDs
    FOREIGN KEY (issue_id) REFERENCES issues(id) ON DELETE CASCADE
);

-- Cache rebuild (< 50ms for 10K issues)
DELETE FROM blocked_issues_cache;
INSERT INTO blocked_issues_cache (issue_id, blocked_by)
SELECT DISTINCT child.id, json_group_array(parent.id)
FROM issues child
JOIN dependencies d ON child.id = d.issue_id
JOIN issues parent ON d.depends_on_id = parent.id
WHERE d.type IN ('blocks', 'parent-child')
  AND parent.status NOT IN ('closed', 'tombstone')
GROUP BY child.id;
```

**Cache Invalidation Triggers:**
- `AddDependency` / `RemoveDependency` (blocks and parent-child only)
- `UpdateIssue` (any status change)
- `CloseIssue`

---

## 7. Molecules and Wisps: Workflow Chemistry

### The Chemistry Metaphor

Beads uses a chemistry metaphor for workflow execution:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                      WORKFLOW CHEMISTRY MODEL                           ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                                                                  │   ║
║  │         🧊 SOLID          →        💧 LIQUID        →   ☁️ VAPOR  │   ║
║  │         (Proto)                    (Mol)                (Wisp)   │   ║
║  │                                                                  │   ║
║  │  ┌──────────────────┐    ┌──────────────────┐   ┌─────────────┐ │   ║
║  │  │                  │    │                  │   │             │ │   ║
║  │  │  Frozen template │───▶│  Active instance │───▶│ Ephemeral  │ │   ║
║  │  │  Stored in git   │    │  Persistent      │   │ Temporary   │ │   ║
║  │  │  Reusable        │    │  Audited         │   │ No audit    │ │   ║
║  │  │                  │    │                  │   │             │ │   ║
║  │  └──────────────────┘    └──────────────────┘   └─────────────┘ │   ║
║  │                                                                  │   ║
║  │  Use Case:               Use Case:              Use Case:        │   ║
║  │  Template library        Feature work           Routine ops      │   ║
║  │  Best practices          Multi-session          One-shot tasks   │   ║
║  │                                                                  │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Phase Definitions

| Phase | Name | Storage | Purpose |
|-------|------|---------|---------|
| **Solid** | Proto | `.beads/`, git-synced | Frozen reusable template |
| **Liquid** | Mol | `.beads/`, git-synced | Active persistent workflow |
| **Vapor** | Wisp | Ephemeral (optional) | Temporary, non-audited |

### Workflow Commands

```bash
# Create a template (solid → proto)
bd create "Feature template" --type molecule --proto

# Pour template into active workflow (solid → liquid)
bd mol pour bd-template --var name=authentication --var db=postgres

# Create ephemeral workflow (solid → vapor)
bd mol wisp bd-template  # For routine/one-shot operations

# Compress workflow to permanent record
bd mol squash bd-wisp-123  # Vapor → preserved summary

# Discard without audit trail
bd mol burn bd-wisp-123  # Vapor → nothing (no record)
```

### Bonding: Compound Workflows

```bash
# Create dependency between workflow graphs
bd mol bond bd-auth bd-api

# Now completing bd-auth unlocks work in bd-api
# Agents can traverse between bonded molecules
```

### When to Use Each Phase

| Scenario | Phase | Rationale |
|----------|-------|-----------|
| Feature implementation | Mol (Liquid) | Needs audit trail, multi-session |
| Daily patrol cycle | Wisp (Vapor) | Routine, no audit value |
| Code review | Wisp (Vapor) | Ephemeral, result matters not process |
| Bug investigation | Mol (Liquid) | Findings need preservation |
| Deployment checklist | Proto (Solid) | Reusable template |

---

## 8. Design Philosophy

### Why Git-Backed vs Traditional Database?

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    GIT-BACKED vs TRADITIONAL DATABASE                   ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  TRADITIONAL DATABASE (PostgreSQL, etc.):                               ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  ✓ Excellent query performance                                   │   ║
║  │  ✓ ACID transactions                                             │   ║
║  │  ✓ Concurrent access                                             │   ║
║  │  ✗ Requires server infrastructure                                │   ║
║  │  ✗ Backup/restore complexity                                     │   ║
║  │  ✗ No inherent branching/merging                                 │   ║
║  │  ✗ Network dependency                                            │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
║  GIT-BACKED (Beads):                                                    ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  ✓ No additional infrastructure                                  │   ║
║  │  ✓ Natural branching (feature branches have their own issues)   │   ║
║  │  ✓ Merging is git's core competency                              │   ║
║  │  ✓ Offline-first (sync when connected)                           │   ║
║  │  ✓ Complete history built-in                                     │   ║
║  │  ✓ Backup = git push                                             │   ║
║  │  ✓ Rollback = git revert                                         │   ║
║  │  ✗ Slower complex queries (mitigated by SQLite cache)            │   ║
║  │  ✗ Merge conflicts possible (mitigated by hash IDs)              │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
║  BEADS TRADE-OFF RESOLUTION:                                            ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │  Problem              │ Solution                                 │   ║
║  │─────────────────────────────────────────────────────────────────│   ║
║  │  Slow queries         │ SQLite cache layer                       │   ║
║  │  ID collisions        │ Hash-based adaptive IDs                  │   ║
║  │  Merge conflicts      │ Three-way merge + field strategies       │   ║
║  │  Data loss on delete  │ Tombstone + deletions.jsonl manifest     │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Key Design Decisions

**1. JSONL Over JSON**

```
JSON (single file):
- Large diffs on any change
- Merge conflicts on any edit
- Full file read/write

JSONL (line per entity):
- Small diffs (one line per change)
- Independent line merges
- Incremental read/write
```

**2. SQLite Cache Over Direct JSONL**

```
Direct JSONL queries:
- O(n) for any search
- No indexing
- No joins possible

SQLite cache:
- O(log n) indexed queries
- Complex joins for dependency graphs
- Full-text search capability
```

**3. Daemon Over Direct CLI**

```
Direct CLI (each command):
- Open database connection
- Execute query
- Close connection
- No batching

Daemon:
- Persistent connection
- Batch operations (5-second debounce)
- Background sync
- 60% CPU reduction
```

### Agent-First Design Principles

1. **Non-Interactive Operations**
   - All commands support `--json` output
   - No `bd edit` (launches interactive editor)
   - Use `bd update --field "value"` instead

2. **Session Awareness**
   - Issues track `ClosedBySession`
   - `bd doctor` detects orphaned issues
   - Commit message convention: `"Fix bug (bd-abc)"`

3. **Context Efficiency**
   - `bd prime` injects ~1-2k tokens (vs 10-50k for MCP)
   - Minimal workflow instructions
   - JSON output for parsing

---

## 9. Claude Code Integration

### Integration Philosophy

> "MCP tool schemas can add 10-50k tokens, whereas `bd prime` adds approximately 1-2k tokens."

Beads uses **CLI + Hooks** rather than MCP for context efficiency.

### Why Not MCP or Skills?

| Approach | Token Cost | Complexity |
|----------|------------|------------|
| MCP Server | 10-50k tokens | High (server process) |
| Claude Skill | Variable | Medium (skill loading) |
| **bd prime** | **1-2k tokens** | **Low (single command)** |

### Hook Installation

```bash
# Global installation (all projects)
bd setup claude

# Project-specific
bd setup claude --project

# Stealth mode (minimal, flush only)
bd setup claude --stealth

# Check current status
bd setup claude --check
```

### Installed Hooks

| Hook | Trigger | Action |
|------|---------|--------|
| **SessionStart** | Claude Code initializes | Runs `bd prime` |
| **PreCompact** | Before context compaction | Runs `bd prime` to preserve workflow |

### `bd prime` Output

Injects minimal workflow context:

```markdown
## Beads Workflow Active

Current issue: bd-a3f8 "Implement login"
Status: in_progress
Blockers: None

Ready work:
- bd-b2c4 "Add password validation"
- bd-c3d5 "Create login form"

Session requirements:
- Update issue status on progress
- File new issues for discovered work
- Run `bd sync` before ending session
```

### Agent Session Protocol

**Starting Work:**
```bash
# Agent receives prime context automatically
bd show bd-a3f8           # Get full issue details
bd update bd-a3f8 --status in_progress
```

**During Work:**
```bash
# File discovered subtasks
bd create "Fix validation edge case" --deps discovered-from:bd-a3f8

# Update design notes
bd update bd-a3f8 --design "Using bcrypt for password hashing"
```

**Ending Session (CRITICAL):**
```bash
# 1. File issues for incomplete work
bd create "Remaining: OAuth integration" --deps blocks:bd-a3f8

# 2. Run quality checks
# (tests, linting - agent-specific)

# 3. Update issue status
bd update bd-a3f8 --status in_progress --notes "OAuth pending"

# 4. Sync to remote
bd sync  # Pull → merge → export → commit → push

# 5. Verify clean state
git status  # Must show "up to date with origin"
```

> **"The plane has NOT landed until `git push` completes successfully."**

---

## 10. Daemon Architecture

### Per-Workspace Model

Each workspace runs its own daemon instance:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                        DAEMON ARCHITECTURE                              ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                    WORKSPACE A                                   │   ║
║  │  ┌─────────────┐         ┌─────────────┐                        │   ║
║  │  │  bd CLI     │◀───────▶│   Daemon    │                        │   ║
║  │  └─────────────┘   RPC   │             │                        │   ║
║  │                    via   │  .beads/    │                        │   ║
║  │                   socket │  bd.sock    │                        │   ║
║  │                          │             │                        │   ║
║  │                          │  Manages:   │                        │   ║
║  │                          │  • SQLite   │                        │   ║
║  │                          │  • Sync     │                        │   ║
║  │                          │  • Watch    │                        │   ║
║  │                          └─────────────┘                        │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                    WORKSPACE B                                   │   ║
║  │  ┌─────────────┐         ┌─────────────┐                        │   ║
║  │  │  bd CLI     │◀───────▶│   Daemon    │  (Completely separate) │   ║
║  │  └─────────────┘         └─────────────┘                        │   ║
║  └─────────────────────────────────────────────────────────────────┘   ║
║                                                                         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### Daemon Responsibilities

| Function | Description |
|----------|-------------|
| **Connection Pooling** | Persistent SQLite connection |
| **Batch Operations** | 500ms debounce for exports |
| **Remote Sync** | 30-second interval pulls |
| **File Watching** | Detect external JSONL changes |
| **RPC Interface** | Unix socket (or named pipe on Windows) |

### Daemon Management

```bash
# List all running daemons
bd daemons list --json

# Check daemon health
bd daemons health --json

# Stop specific daemon
bd daemons stop /path/to/project  # or by PID

# View daemon logs
bd daemons logs /path/to/project

# Emergency kill all
bd daemons killall --force
```

### Configuration

```yaml
# .beads/config.yaml
remote-sync-interval: "30s"  # Minimum: 5s
daemon-mode: "events"        # or "poll"
auto-start: true
```

**Environment Variables:**
- `BEADS_DAEMON_MODE` - "poll" or "events"
- `BEADS_NO_DAEMON` - Disable daemon entirely
- `BEADS_AUTO_START_DAEMON` - Control auto-start

### Git Worktree Limitation

> "Daemon is automatically disabled in git worktrees unless sync-branch is configured."

**Problem:** Worktrees share `.git` directory and thus `.beads` database.

**Solution:**
```bash
# For worktree operations
export BEADS_NO_DAEMON=1
# Or
bd --no-daemon create "Issue title"
```

---

## 11. Advanced Features

### Stealth Mode

Run Beads locally without committing infrastructure:

```bash
bd init --stealth
```

**Creates:**
- Local `.beads/` directory (gitignored by default)
- Personal tracking on shared repositories
- No team visibility

### Database Redirects

Share a single database across multiple clones:

```bash
# In clone B, point to clone A's database
echo "/path/to/clone-a/.beads" > .beads/redirect
```

**Use Cases:**
- Multi-agent setups (same issues, different working directories)
- Development + testing clones sharing state

### Prefix Management

Rename issue prefixes across entire database:

```bash
bd rename-prefix kw-  # Changes bd-xxxx to kw-xxxx
```

**Validation:**
- Max 8 characters
- Lowercase letters, numbers, hyphens
- Must start with letter

### Duplicate Detection

```bash
# Find duplicates by content hash
bd doctor --find-duplicates

# Merge duplicates
bd merge bd-a3f8 bd-b2c4 --into bd-c5d6
```

### Memory Compaction

Semantic summarization of completed tasks:

```bash
# Automatically summarizes closed issues to preserve tokens
bd compact --older-than 30d
```

**Compaction preserves:**
- Issue ID and relationships
- Summary of work done
- Links to commits

**Compaction removes:**
- Detailed notes
- Design documents
- Acceptance criteria

---

## 12. Comparison with Alternatives

### Beads vs Traditional Databases

| Feature | Beads | PostgreSQL | MongoDB |
|---------|-------|------------|---------|
| **Infrastructure** | None (git) | Server required | Server required |
| **Branching** | Native (git branches) | Manual schemas | Manual schemas |
| **Merging** | Three-way merge | Not applicable | Not applicable |
| **Offline** | Full capability | Limited | Limited |
| **History** | Complete (git log) | Manual audit tables | Manual audit |
| **Query Speed** | ms (SQLite cache) | sub-ms | sub-ms |
| **Scale** | 10K+ issues tested | Millions | Millions |

### Beads vs Claude-mem

| Feature | Beads | Claude-mem |
|---------|-------|------------|
| **Scope** | Multi-agent, multi-machine | Single Claude Code instance |
| **Persistence** | Git repository | Local SQLite + Chroma |
| **Sharing** | Agents read/write same store | Per-session |
| **Query Type** | Structured (SQL) | Semantic search |
| **Integration** | Gas Town native | Claude Code plugin |
| **Token Cost** | 1-2k (bd prime) | Variable |

### Beads vs File-Based Persistence

| Feature | Beads | progress.txt / TODO.md |
|---------|-------|------------------------|
| **Structure** | Typed issues with fields | Freeform text |
| **Dependencies** | Graph with blockers | Manual notation |
| **Search** | SQL queries | grep |
| **Sync** | Three-way merge | Line conflicts |
| **Agents** | Ready work queue | Parse complexity |

### When to Use Beads

**Use Beads When:**
- Multiple agents need shared context
- Work spans multiple sessions
- Dependency tracking matters
- Git-native workflow preferred
- Gas Town orchestration planned

**Skip Beads When:**
- Single-session task
- Simple TODO list sufficient
- No git repository
- Semantic search more important than structure

---

## 13. Implementation Guide

### Prerequisites

- Git repository
- Go 1.24+ (for source install)
- OR npm/Homebrew (for binary)

### Installation

```bash
# Via npm (recommended)
npm install -g @beads/cli

# Via Homebrew
brew install beads

# Via Go
go install github.com/steveyegge/beads/cmd/bd@latest
```

### Quick Start

```bash
# 1. Initialize in repository
cd /path/to/your/repo
bd init

# 2. Create first issue
bd create "Setup project structure" -p 0

# 3. View ready work
bd ready

# 4. Start working on issue
bd update bd-xxxx --status in_progress

# 5. Complete work
bd close bd-xxxx --reason "Implemented"

# 6. Sync to remote
bd sync
```

### Git Hooks Setup

```bash
# Install git hooks for auto-sync
bd hooks install

# Installed hooks:
# - pre-commit: Export before commit
# - post-merge: Import after merge
# - post-checkout: Import after checkout
# - pre-push: Verify sync before push
```

### Verification Checklist

```markdown
## Beads Setup Verification

### Installation
- [ ] `bd version` returns version number
- [ ] `bd info` shows database path

### Repository Setup
- [ ] `.beads/` directory exists
- [ ] `.beads/issues.jsonl` is git-tracked
- [ ] `.beads/beads.db` is gitignored

### Basic Operations
- [ ] `bd create "Test issue"` succeeds
- [ ] `bd list` shows the test issue
- [ ] `bd ready` shows ready work
- [ ] `bd close bd-xxxx` marks complete

### Sync
- [ ] `bd sync` completes without error
- [ ] `git log` shows beads commit
- [ ] Remote has updated JSONL
```

---

## 14. Troubleshooting

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| `bd: command not found` | Not in PATH | Check installation, add to PATH |
| `No beads repository found` | Not initialized | Run `bd init` in git repo |
| `Database locked` | Multiple access | Stop daemon, retry |
| `Sync conflict` | Divergent changes | Run `bd doctor --fix` |
| `Stale database` | JSONL newer than SQLite | Run `bd sync --force` |
| `Daemon not responding` | Socket issue | `bd daemons stop`, restart |

### Database Recovery

```bash
# Check database health
bd doctor

# Auto-fix common issues
bd doctor --fix

# Force reimport from JSONL (source of truth)
rm .beads/beads.db
bd sync

# Reset to remote state
git checkout origin/main -- .beads/issues.jsonl
bd sync --force
```

### Conflict Resolution

```bash
# View conflicts
bd conflicts

# Accept local version
bd conflicts resolve bd-xxxx --ours

# Accept remote version
bd conflicts resolve bd-xxxx --theirs

# Manual resolution
bd show bd-xxxx --raw  # View conflict markers
bd update bd-xxxx --description "Resolved description"
bd conflicts mark-resolved bd-xxxx
```

### Performance Issues

```bash
# Check cache status
bd info --json | jq '.cache_status'

# Rebuild blocked cache
bd admin rebuild-cache

# Compact old issues
bd compact --older-than 60d

# Check daemon health
bd daemons health --json
```

---

## 15. Quick Reference

### Essential Commands

```bash
# INITIALIZATION
bd init                              # Initialize beads in repo
bd init --stealth                    # Initialize without git tracking

# ISSUE MANAGEMENT
bd create "Title" -p 0               # Create high-priority issue
bd create "Title" --type bug         # Create bug
bd create "Title" --deps blocks:bd-xxxx  # Create with dependency
bd show bd-xxxx                      # Show issue details
bd update bd-xxxx --status in_progress   # Update status
bd update bd-xxxx --description "New desc" # Update field
bd close bd-xxxx --reason "Done"     # Close issue
bd reopen bd-xxxx                    # Reopen issue

# QUERIES
bd list                              # List all open issues
bd list --status closed              # Filter by status
bd ready                             # Show work with no blockers
bd stale --days 7                    # Find stale issues
bd dep tree bd-xxxx                  # Show dependency tree

# LABELS
bd label add bd-xxxx frontend        # Add label
bd label remove bd-xxxx frontend     # Remove label

# SYNC
bd sync                              # Full sync (pull → merge → push)
bd sync --export-only                # Export only (skip pull)
bd sync --local-only                 # Export without push

# DAEMON
bd daemons list                      # List running daemons
bd daemons stop                      # Stop current daemon
bd daemons logs                      # View daemon logs

# MOLECULES
bd mol pour bd-template              # Create from template
bd mol wisp bd-template              # Create ephemeral
bd mol squash bd-wisp                # Compress to summary
bd mol burn bd-wisp                  # Discard without record

# MAINTENANCE
bd doctor                            # Check health
bd doctor --fix                      # Auto-fix issues
bd compact --older-than 30d          # Compact old issues
bd admin cleanup --force             # Remove closed issues
```

### Status Lifecycle

```
┌──────────┐     ┌─────────────┐     ┌─────────┐
│   open   │────▶│ in_progress │────▶│ closed  │
└──────────┘     └─────────────┘     └─────────┘
     │                  │
     │                  │
     ▼                  ▼
┌──────────┐     ┌─────────────┐
│ deferred │     │   blocked   │
└──────────┘     └─────────────┘
```

### Configuration Files

```yaml
# .beads/config.yaml
prefix: bd                    # Issue ID prefix
remote-sync-interval: "30s"   # Sync frequency
auto-compact: true            # Auto-compact old issues
compact-after-days: 30        # Compaction threshold
```

### Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `BEADS_DB` | Custom database path | `.beads/beads.db` |
| `BEADS_NO_DAEMON` | Disable daemon | `false` |
| `BEADS_DAEMON_MODE` | "poll" or "events" | "events" |
| `BEADS_AUTO_START_DAEMON` | Auto-start daemon | `true` |

---

## Sources

- [GitHub Repository: steveyegge/beads](https://github.com/steveyegge/beads)
- [Steve Yegge on X: Beads Announcement](https://x.com/Steve_Yegge/status/1977645937225822664)
- [DeepWiki: steveyegge/beads](https://deepwiki.com/steveyegge/beads)
- Repository documentation: AGENTS.md, AGENT_INSTRUCTIONS.md
- Repository documentation: docs/ARCHITECTURE.md, docs/INTERNALS.md
- Repository documentation: docs/SYNC.md, docs/MOLECULES.md
- Repository documentation: docs/DAEMON.md, docs/CLAUDE_INTEGRATION.md
- Repository documentation: docs/GIT_INTEGRATION.md, docs/CLI_REFERENCE.md
- Repository documentation: docs/ADAPTIVE_IDS.md, docs/ADVANCED.md

---

## Tags

`#orchestration` `#beads` `#data-plane` `#git-backed` `#steve-yegge` `#gas-town` `#multi-agent` `#persistence` `#context-management` `#claude-code` `#go` `#jsonl` `#sqlite` `#three-way-merge` `#molecules` `#wisps`

---

## Document Metadata

- **Created:** 2026-01-18
- **Author:** Agent B3-T1-2
- **Session:** Beads Data Plane Extraction
- **Research Status:** Complete (web + repository analysis)
- **Lines:** 1200+
- **Sources:** 15+
- **Repository Stats:** 11K+ stars, 225K lines Go, 682 forks

---
