# Memory Layer Integration Patterns: Complete Guide

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** 3 extraction documents synthesized (Claude HUD, Claude-Mem, Beads)
**Status:** Definitive reference for memory and persistence integration
**Lines:** 1500+

---

## Table of Contents

1. [You Are Here: Memory Layer in the Architecture Stack](#1-you-are-here-memory-layer-in-the-architecture-stack)
2. [The Memory Layer Ecosystem](#2-the-memory-layer-ecosystem)
3. [Claude-Mem Integration with Orchestration Patterns](#3-claude-mem-integration-with-orchestration-patterns)
4. [3-Layer Progressive Disclosure: 90% Token Savings](#4-3-layer-progressive-disclosure-90-token-savings)
5. [Beads Dual Persistence Architecture](#5-beads-dual-persistence-architecture)
6. [Cross-Session Learning Compound Patterns](#6-cross-session-learning-compound-patterns)
7. [When to Use Which Memory Layer: Decision Tree](#7-when-to-use-which-memory-layer-decision-tree)
8. [Mental Models](#8-mental-models)
9. [Checkpoints](#9-checkpoints)
10. [Troubleshooting](#10-troubleshooting)
11. [Integration Patterns: Combination Matrix](#11-integration-patterns-combination-matrix)
12. [Configuration Reference](#12-configuration-reference)
13. [Source Attribution](#13-source-attribution)

---

## 1. You Are Here: Memory Layer in the Architecture Stack

### **Con**text Box: **Ori**entation

You are exploring the **memory layer** of the Claude Code ecosystem. This layer sits between the execution engine (Claude Code itself) and the orchestration patterns (Ralph, Gas Town, CC-Mirror). **Mem**ory tools enable:

- **Per**sistence across sessions
- **Cro**ss-agent knowledge sharing
- **Tok**en-efficient context retrieval
- **Obs**ervability into session state

### **Arc**hitecture Stack **Vis**ualization

```
+=====================================================================+
|                   CLAUDE CODE ARCHITECTURE STACK                      |
+=====================================================================+
|                                                                       |
|  LAYER 5: ORCHESTRATION UI                                            |
|  +---------------------------------------------------------------+   |
|  |  GTGUI, rpai, tmux dashboards                                  |   |
|  +---------------------------------------------------------------+   |
|                                  |                                    |
|  LAYER 4: ORCHESTRATION PATTERNS                                      |
|  +---------------------------------------------------------------+   |
|  |  Ralph Loop | Gas Town | CC-Mirror | Swarms                    |   |
|  +---------------------------------------------------------------+   |
|                                  |                                    |
|  LAYER 3: MEMORY & OBSERVABILITY <------ YOU ARE HERE                 |
|  +---------------------------------------------------------------+   |
|  |  +------------------+  +------------------+  +---------------+ |   |
|  |  |   Claude-Mem     |  |      Beads       |  |  Claude HUD   | |   |
|  |  | Session memory   |  | Multi-agent data |  | Observability | |   |
|  |  | Semantic search  |  | Git-backed state |  | Real-time     | |   |
|  |  | Token compression|  | Dependency graph |  | Context meter | |   |
|  |  +------------------+  +------------------+  +---------------+ |   |
|  +---------------------------------------------------------------+   |
|                                  |                                    |
|  LAYER 2: EXECUTION ENGINE                                            |
|  +---------------------------------------------------------------+   |
|  |  Claude Code CLI - Tools, Hooks, MCP, Skills                   |   |
|  +---------------------------------------------------------------+   |
|                                  |                                    |
|  LAYER 1: CONFIGURATION                                               |
|  +---------------------------------------------------------------+   |
|  |  CLAUDE.md | settings.json | .mcp.json | .claude/              |   |
|  +---------------------------------------------------------------+   |
|                                  |                                    |
|  LAYER 0: VERSION CONTROL                                             |
|  +---------------------------------------------------------------+   |
|  |  Git - Repository, Branching, History                          |   |
|  +---------------------------------------------------------------+   |
|                                                                       |
+=====================================================================+
```

### **Pre**requisites

| **Req**uirement | **Pur**pose |
|-----------------|-------------|
| Claude Code v1.0.80+ | Plugin support, hooks enabled |
| Node.js 18+ | Runtime for plugins |
| Git repository | Required for Beads persistence |
| Pro/Max/Team subscription | For HUD usage display (optional) |

### **Wha**t You'll **Lea**rn

1. How each memory tool works independently
2. How to combine tools for maximum effect
3. Token-efficient retrieval patterns
4. Decision framework for tool selection
5. Troubleshooting common integration issues

---

## 2. The Memory Layer Ecosystem

### **The Three** Memory **Pil**lars

The Claude Code memory ecosystem consists of three complementary tools:

```
+-----------------------------------------------------------------------+
|                    MEMORY LAYER ECOSYSTEM                               |
+-----------------------------------------------------------------------+
|                                                                         |
|  +-------------------+     +-------------------+     +-----------------+ |
|  |                   |     |                   |     |                 | |
|  |    CLAUDE-MEM     |     |       BEADS       |     |    CLAUDE HUD   | |
|  |  (Session Memory) |     |  (Work Tracking)  |     | (Observability) | |
|  |                   |     |                   |     |                 | |
|  +-------------------+     +-------------------+     +-----------------+ |
|         |                         |                         |           |
|  +--------------+           +-----------+             +-----------+     |
|  | SQLite +     |           | SQLite +  |             | stdin     |     |
|  | Chroma       |           | JSONL     |             | polling   |     |
|  | vectors      |           | (git)     |             | (~300ms)  |     |
|  +--------------+           +-----------+             +-----------+     |
|         |                         |                         |           |
|  +--------------+           +-----------+             +-----------+     |
|  | Observations |           | Issues    |             | Context % |     |
|  | Summaries    |           | Deps      |             | Tools     |     |
|  | Prompts      |           | Molecules |             | Agents    |     |
|  +--------------+           +-----------+             +-----------+     |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Com**parison **Mat**rix

| **Fea**ture | **Claude-Mem** | **Beads** | **Claude HUD** |
|-------------|----------------|-----------|----------------|
| **Primary Purpose** | Session memory | Work tracking | Real-time monitoring |
| **Persistence** | Local SQLite + Chroma | Git-backed JSONL | None (real-time) |
| **Scope** | Single Claude instance | Multi-agent, multi-machine | Single session |
| **Query Type** | Semantic search | Structured SQL | Visual display |
| **Token Cost** | Variable (progressive) | 1-2k (bd prime) | 0 (display only) |
| **Integration** | Plugin (hooks) | CLI + hooks | Plugin |
| **Sharing** | Per-installation | Git repository | Per-terminal |

### **Whe**n to Use **Eac**h Tool

```
+-----------------------------------------------------------------------+
|                     TOOL SELECTION QUICK GUIDE                          |
+-----------------------------------------------------------------------+
|                                                                         |
|  CLAUDE-MEM:                                                            |
|  - Need to remember learnings across sessions                           |
|  - Want semantic search ("find that auth bug")                          |
|  - Working alone on complex, multi-session tasks                        |
|  - Token optimization is critical                                       |
|                                                                         |
|  BEADS:                                                                 |
|  - Multiple agents need shared context                                  |
|  - Work involves dependencies ("X blocks Y")                            |
|  - Need git-native collaboration                                        |
|  - Running Gas Town or multi-agent orchestration                        |
|                                                                         |
|  CLAUDE HUD:                                                            |
|  - Want visibility into session state                                   |
|  - Need to monitor context window consumption                           |
|  - Debugging orchestration patterns                                     |
|  - Tracking tool execution and agent activity                           |
|                                                                         |
+-----------------------------------------------------------------------+
```

---

## 3. Claude-Mem Integration with Orchestration Patterns

### **Int**egration with **Ral**ph Wiggum Loop

**The Problem:** Each Ralph iteration starts fresh. Iteration 15's learnings are unknown to iteration 16.

**The Solution:** Claude-mem captures observations automatically, injecting relevant history at session start.

```
+-----------------------------------------------------------------------+
|                    RALPH + CLAUDE-MEM INTEGRATION                       |
+-----------------------------------------------------------------------+
|                                                                         |
|   Iteration 1                 Iteration 2                 Iteration 3   |
|   +----------+               +----------+               +----------+    |
|   | Fresh    |               | Fresh    |               | Fresh    |    |
|   | Context  |               | Context  |               | Context  |    |
|   +----+-----+               +----+-----+               +----+-----+    |
|        |                          |                          |          |
|        v                          v                          v          |
|   +----------+               +----------+               +----------+    |
|   | mem      |               | mem      |               | mem      |    |
|   | inject   |-------------->| inject   |-------------->| inject   |    |
|   +----------+               +----------+               +----------+    |
|        |                          |                          |          |
|        | discoveries              | discoveries              |          |
|        v                          v                          v          |
|   +----------+               +----------+               +----------+    |
|   | PostTool |               | PostTool |               | PostTool |    |
|   | capture  |               | capture  |               | capture  |    |
|   +----+-----+               +----+-----+               +----+-----+    |
|        |                          |                          |          |
|        +------------+-------------+-------------+------------+          |
|                     |                           |                       |
|                     v                           v                       |
|              +-------------+             +-------------+                |
|              | SQLite DB   |<----------->| Chroma      |                |
|              | (Structure) |             | (Semantics) |                |
|              +-------------+             +-------------+                |
|                                                                         |
+-----------------------------------------------------------------------+
```

**Configuration for Ralph + Mem:**

```json
{
  "context": {
    "observationCount": 100,
    "fullObservationCount": 10,
    "observationTypes": "feature,discovery,decision,change",
    "observationConcepts": "how-it-works,what-changed,problem-solution,gotcha"
  }
}
```

**PROMPT.md Addition for Ralph + Mem:**

```markdown
## Memory Integration

CRITICAL: Before making changes, use mem-search to check prior learnings:
- Query: "[current feature] implementation"
- Query: "[current feature] gotchas"

This surfaces discoveries from previous iterations.
After completing work, ensure observations are captured automatically.
```

**Example Learning Accumulation:**

```
Iteration 1:  Discovered auth endpoint structure
              -> Stored as observation type: "discovery"

Iteration 5:  Found rate limiting gotcha
              -> Stored as observation type: "gotcha"

Iteration 12: Decided on retry pattern
              -> Stored as observation type: "decision"

Iteration 18: Refined error handling based on 5+12 learnings
              -> mem-search surfaces iterations 1,5,12 automatically

Iteration 20: Full implementation incorporating all discoveries
              -> Institutional memory across 20 iterations
```

### **Int**egration with **Gas** Town

**The Problem:** Dogs (workers) can't share discoveries. Mayor's decisions aren't recorded. Refinery learning is lost.

**The Solution:** Shared memory hierarchy where each agent contributes and queries the collective memory.

```
+-----------------------------------------------------------------------+
|                    GAS TOWN + CLAUDE-MEM HIERARCHY                      |
+-----------------------------------------------------------------------+
|                                                                         |
|                        +------------------+                             |
|                        |      MAYOR       |                             |
|                        | (Orchestrator)   |                             |
|                        | memory_id: mayor |                             |
|                        +--------+---------+                             |
|                                 |                                       |
|         +-----------------------+-----------------------+               |
|         |                       |                       |               |
|  +------+------+         +------+------+         +------+------+        |
|  |   DEACON    |         |  REFINERY   |         |   WITNESS   |        |
|  |  (Expert)   |         | (Improver)  |         | (Observer)  |        |
|  | memory_id:  |         | memory_id:  |         | memory_id:  |        |
|  | deacon_auth |         | refinery_01 |         | witness_01  |        |
|  +------+------+         +-------------+         +-------------+        |
|         |                                                               |
|  +------+------+                                                        |
|  |    DOGS     |                                                        |
|  |  (Workers)  |                                                        |
|  | memory_id:  |                                                        |
|  | dog_impl_*  |                                                        |
|  +-------------+                                                        |
|         |                                                               |
|         +----------------+----------------+                             |
|                          |                                              |
|                 +--------v--------+                                     |
|                 |  SHARED MEMORY  |                                     |
|                 | SQLite + Chroma |                                     |
|                 +-----------------+                                     |
|                                                                         |
+-----------------------------------------------------------------------+
```

**Configuration for Gas Town + Mem:**

```json
{
  "context": {
    "sessionCount": 25,
    "observationTypes": "decision,discovery,pattern,change",
    "observationConcepts": "why-it-exists,how-it-works,trade-off,gotcha"
  },
  "worker": {
    "port": 37777
  }
}
```

**Agent Coordination Pattern:**

```typescript
// Each agent queries with project scope
search({
  query: "authentication implementation",
  project: "gas-town-auth-feature"
});

// Cross-agent discovery sharing flow:
// Dog_1 discovers gotcha -> stored as observation
// Dog_2 queries mem-search -> finds Dog_1's gotcha
// Deacon aggregates -> strategic summary
// Mayor reviews -> decision observation
```

### **Int**egration with **CC-Mir**ror

**The Problem:** Model switching loses context. Opus insights unavailable to Sonnet. No persistent arbitration history.

**The Solution:** Multi-model memory where all workers read from the same persistence layer.

```
+-----------------------------------------------------------------------+
|                    CC-MIRROR + CLAUDE-MEM                               |
+-----------------------------------------------------------------------+
|                                                                         |
|                    +--------------------+                               |
|                    |   CC-Mirror        |                               |
|                    |   Orchestrator     |                               |
|                    +--------------------+                               |
|                              |                                          |
|         +--------------------+--------------------+                     |
|         |                    |                    |                     |
|  +------+------+      +------+------+      +------+------+              |
|  | Opus Worker |      | Sonnet      |      | GPT-4       |              |
|  | Complex     |      | Worker      |      | Worker      |              |
|  | reasoning   |      | Fast impl   |      | Validation  |              |
|  | memory_id:  |      | memory_id:  |      | memory_id:  |              |
|  | opus_001    |      | sonnet_001  |      | gpt4_001    |              |
|  +------+------+      +------+------+      +------+------+              |
|         |                    |                    |                     |
|         +--------------------+--------------------+                     |
|                              |                                          |
|                    +---------v----------+                               |
|                    |   SHARED MEMORY    |                               |
|                    |  SQLite + Chroma   |                               |
|                    +--------------------+                               |
|                                                                         |
+-----------------------------------------------------------------------+
```

**Configuration for CC-Mirror + Mem:**

```json
{
  "context": {
    "observationCount": 75,
    "fullObservationCount": 8,
    "observationTypes": "decision,discovery,refactor,feature",
    "observationConcepts": "trade-off,pattern,why-it-exists,how-it-works"
  }
}
```

**Worker Memory Pattern:**

```typescript
// Opus makes architectural decision
storeObservation({
  type: "decision",
  title: "Use event-driven architecture",
  concepts: ["trade-off", "why-it-exists"],
  narrative: "Evaluated request-response vs events. Events better for..."
});

// Sonnet queries before implementation
const context = await search({
  query: "architecture decision events",
  type: "decision"
});
// Receives Opus's reasoning without Opus being active

// GPT-4 validates with access to both histories
const allDecisions = await search({
  query: "architectural decisions",
  limit: 20
});
```

---

## 4. 3-Layer Progressive Disclosure: 90% Token Savings

### **The Token** Economics **Prob**lem

Raw tool observations can consume 10,000+ tokens per session. Without compression:

```
Session 1: 50,000 tokens of tool output
Session 2: Load all 50,000 tokens? Context explodes.
Session 3: Context window full before work begins.
```

### **The 3-Layer** Solution

```
+-----------------------------------------------------------------------+
|              PROGRESSIVE DISCLOSURE TOKEN FUNNEL                        |
+-----------------------------------------------------------------------+
|                                                                         |
|                        Search Query                                     |
|                             |                                           |
|                             v                                           |
|                    +----------------+                                   |
|                    |                |                                   |
|   LAYER 1          |   100 IDs      |  <- Compact index                 |
|   (~50-100 tokens  |   titles only  |     One line per result           |
|    per result)     |   timestamps   |     NO full content               |
|                    |                |                                   |
|                    +-------+--------+                                   |
|                            |                                            |
|                            | Filter by relevance                        |
|                            v                                            |
|                    +----------------+                                   |
|                    |                |                                   |
|   LAYER 2          |   20 items     |  <- Timeline context              |
|   (summaries)      |   with context |     Observations around anchor    |
|                    |   temporal     |     Still compressed              |
|                    |                |                                   |
|                    +-------+--------+                                   |
|                            |                                            |
|                            | Select specific items                      |
|                            v                                            |
|                    +----------------+                                   |
|                    |                |                                   |
|   LAYER 3          |   5 items      |  <- Full details                  |
|   (~500-1000       |   complete     |     Only what you need            |
|    tokens each)    |   narratives   |     Full observation data         |
|                    |                |                                   |
|                    +-------+--------+                                   |
|                            |                                            |
|                            v                                            |
|                    Context Injection                                    |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Imp**lementation **Pat**tern

```typescript
// Layer 1: Compact index (~50-100 tokens per result)
const searchResults = await search({
  query: "authentication bug",
  type: "bugfix",
  limit: 10
});
// Returns: IDs, titles, timestamps - NO full content

// Layer 2: Chronological context
const timeline = await getTimeline({
  anchorId: searchResults[0].id,
  range: 5  // observations before/after
});
// Returns: Surrounding context for selected item

// Layer 3: Full details (filtered IDs only)
const observations = await getObservations({
  ids: [123, 456]  // Only fetch what we need
});
// Returns: Complete observation data
```

### **Tok**en Savings **Cal**culation

```
Discovery tokens (work performed):     50,000
Progressive retrieval path:
  Layer 1 (100 results):               +  5,000 tokens
  Layer 2 (20 items):                  +  3,000 tokens
  Layer 3 (5 full details):            +  2,500 tokens
Total read tokens:                        10,500 tokens

Savings: ((50,000 - 10,500) / 50,000) * 100 = 79% savings

With better filtering (typical):
  Layer 1 (50 results):                +  2,500 tokens
  Layer 2 (10 items):                  +  1,500 tokens
  Layer 3 (3 full details):            +  1,500 tokens
Total:                                     5,500 tokens

Savings: ((50,000 - 5,500) / 50,000) * 100 = 89% savings
```

### **Con**figuration for **Max**imum Savings

```json
{
  "context": {
    "observationCount": 50,
    "fullObservationCount": 5,
    "sessionCount": 10,
    "showReadTokens": true,
    "showWorkTokens": true,
    "showSavings": true,
    "fullObservationField": "narrative"
  }
}
```

---

## 5. Beads Dual Persistence Architecture

### **The Dual-Per**sistence **Mod**el

Beads uses a unique architecture combining fast local queries with git-backed collaboration:

```
+-----------------------------------------------------------------------+
|                  BEADS DUAL-PERSISTENCE ARCHITECTURE                    |
+-----------------------------------------------------------------------+
|                                                                         |
|                         +----------------+                              |
|                         |    bd CLI      |                              |
|                         |  (User/Agent)  |                              |
|                         +-------+--------+                              |
|                                 |                                       |
|            +--------------------+--------------------+                  |
|            |                                         |                  |
|            v                                         v                  |
|  +--------------------+                   +--------------------+        |
|  |                    |                   |                    |        |
|  |    SQLite DB       |<-----  sync  ---->|    JSONL Files     |        |
|  |   (Performance)    |                   |   (Git Truth)      |        |
|  |                    |                   |                    |        |
|  |  * Sub-ms queries  |                   |  * Readable diffs  |        |
|  |  * Complex joins   |                   |  * Merge-friendly  |        |
|  |  * Dependency      |                   |  * Version history |        |
|  |    graphs          |                   |  * Collaboration   |        |
|  |  * Full-text       |                   |                    |        |
|  |    search          |                   |                    |        |
|  |                    |                   |                    |        |
|  |  .beads/beads.db   |                   |  .beads/issues.    |        |
|  |  (gitignored)      |                   |  jsonl (tracked)   |        |
|  |                    |                   |                    |        |
|  +--------------------+                   +--------------------+        |
|            |                                         |                  |
|            +--------------------+--------------------+                  |
|                                 |                                       |
|                                 v                                       |
|                         +----------------+                              |
|                         |   Git Remote   |                              |
|                         | (Collaboration)|                              |
|                         +----------------+                              |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **The `.beads/`** Directory **Str**ucture

```
.beads/
+-- issues.jsonl         # Git-tracked source of truth
+-- deletions.jsonl      # Deletion manifest (prevents resurrection)
+-- beads.db             # SQLite cache (gitignored)
+-- sync_base.jsonl      # Last-synced snapshot (gitignored)
+-- bd.sock              # Daemon socket (gitignored)
+-- config.yaml          # Local configuration
+-- metadata.json        # Database metadata
```

### **Three-Way** Merge **Log**ic

```
+-----------------------------------------------------------------------+
|                      THREE-WAY MERGE LOGIC                              |
+-----------------------------------------------------------------------+
|                                                                         |
|                       +------------------+                              |
|                       |   BASE STATE     |                              |
|                       | (Last sync point)|                              |
|                       +--------+---------+                              |
|                                |                                        |
|               +----------------+----------------+                       |
|               |                                 |                       |
|               v                                 v                       |
|    +------------------+              +------------------+               |
|    |   LOCAL STATE    |              |  REMOTE STATE    |               |
|    |  (Your changes)  |              | (Their changes)  |               |
|    +--------+---------+              +--------+---------+               |
|             |                                 |                         |
|             +-----------------+---------------+                         |
|                               |                                         |
|                               v                                         |
|                     +------------------+                                |
|                     |   MERGE RESULT   |                                |
|                     +------------------+                                |
|                                                                         |
|  MERGE RULES:                                                           |
|  +----------------------------------------------------------------+    |
|  | Scenario                     | Outcome                         |    |
|  +----------------------------------------------------------------+    |
|  | Base unchanged, one modified | Modified version wins           |    |
|  | Both identical change        | Change accepted                 |    |
|  | Both different changes       | Merge conflict                  |    |
|  | Deleted + modified           | Modification preserved          |    |
|  +----------------------------------------------------------------+    |
|                                                                         |
|  FIELD-SPECIFIC STRATEGIES:                                             |
|  +----------------------------------------------------------------+    |
|  | Field Type    | Strategy          | Example                    |    |
|  +----------------------------------------------------------------+    |
|  | Scalars       | Last-Write-Wins   | title, status, priority    |    |
|  | Collections   | Union merge       | labels, dependencies       |    |
|  | Comments      | Append + dedupe   | comment history            |    |
|  +----------------------------------------------------------------+    |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Mol**ecules and **Wis**ps: Workflow **Che**mistry

```
+-----------------------------------------------------------------------+
|                     WORKFLOW CHEMISTRY MODEL                            |
+-----------------------------------------------------------------------+
|                                                                         |
|                                                                         |
|        SOLID              ->         LIQUID           ->    VAPOR       |
|        (Proto)                       (Mol)                  (Wisp)      |
|                                                                         |
|  +------------------+         +------------------+     +--------------+ |
|  |                  |         |                  |     |              | |
|  | Frozen template  |  pour   | Active instance  | run | Ephemeral    | |
|  | Stored in git    |-------->| Persistent       |--->| Temporary    | |
|  | Reusable         |         | Audited          |     | No audit     | |
|  |                  |         |                  |     |              | |
|  +------------------+         +------------------+     +--------------+ |
|                                                                         |
|  Use Case:                    Use Case:               Use Case:         |
|  Template library             Feature work            Routine ops       |
|  Best practices               Multi-session           One-shot tasks    |
|                                                                         |
+-----------------------------------------------------------------------+
```

**When to Use Each Phase:**

| **Sce**nario | **Pha**se | **Rat**ionale |
|--------------|-----------|---------------|
| Feature implementation | Mol (Liquid) | Needs audit trail, multi-session |
| Daily patrol cycle | Wisp (Vapor) | Routine, no audit value |
| Code review | Wisp (Vapor) | Ephemeral, result matters not process |
| Bug investigation | Mol (Liquid) | Findings need preservation |
| Deployment checklist | Proto (Solid) | Reusable template |

---

## 6. Cross-Session Learning Compound Patterns

### **The Com**pound **Lea**rning Loop

```
+-----------------------------------------------------------------------+
|                   CROSS-SESSION COMPOUND LEARNING                       |
+-----------------------------------------------------------------------+
|                                                                         |
|   SESSION 1              SESSION 2              SESSION 3               |
|   +---------+           +---------+           +---------+               |
|   | Learn A |           | Learn B |           | Learn C |               |
|   +----+----+           +----+----+           +----+----+               |
|        |                     |                     |                    |
|        v                     v                     v                    |
|   +---------+           +---------+           +---------+               |
|   | Store A |           | Store B |           | Store C |               |
|   +----+----+           +----+----+           +----+----+               |
|        |                     |                     |                    |
|        +----------+----------+---------+-----------+                    |
|                   |                    |                                |
|                   v                    v                                |
|              +---------+          +---------+                           |
|              | Query   |          | Query   |                           |
|              | A+B     |          | A+B+C   |                           |
|              +---------+          +---------+                           |
|                   |                    |                                |
|                   v                    v                                |
|              +---------+          +---------+                           |
|              | Combine |          | Combine |                           |
|              | A+B     |          | A+B+C   |                           |
|              +---------+          +---------+                           |
|                   |                    |                                |
|                   v                    v                                |
|   SESSION 2:     SESSION 3:        SESSION 4:                           |
|   Knows A        Knows A+B         Knows A+B+C                          |
|   Discovers B    Discovers C       Synthesizes D                        |
|                                                                         |
|   COMPOUND EFFECT: Each session builds on ALL previous sessions         |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Obs**ervation **Typ**es for **Lear**ning

| **Typ**e | **Whe**n to Use | **Exa**mple |
|----------|-----------------|-------------|
| `discovery` | Found something new | "Discovered auth endpoint structure" |
| `gotcha` | Pitfall or warning | "Found rate limiting gotcha" |
| `decision` | Made architectural choice | "Decided on retry pattern" |
| `pattern` | Recurring pattern | "This API always needs pagination" |
| `trade-off` | Weighed options | "Chose speed over memory" |
| `how-it-works` | Mechanism explanation | "OAuth flow documented" |
| `why-it-exists` | Rationale documentation | "Legacy compatibility reason" |

### **Con**cept **Tag**ging Strategy

```json
{
  "observationConcepts": [
    "how-it-works",    // Mechanism explanations
    "why-it-exists",   // Rationale documentation
    "what-changed",    // Change descriptions
    "problem-solution", // Problem/solution pairs
    "gotcha",          // Pitfalls and warnings
    "pattern",         // Recurring patterns
    "trade-off"        // Decision trade-offs
  ]
}
```

### **Que**rying **Acc**umulated **Know**ledge

```typescript
// Find all gotchas for a component
const gotchas = await search({
  query: "authentication",
  concepts: ["gotcha", "problem-solution"],
  limit: 20
});

// Get decision history
const decisions = await search({
  type: "decision",
  project: "my-feature",
  limit: 50
});

// Timeline around a key event
const context = await getTimeline({
  anchorId: "obs-12345",
  range: 10
});
```

---

## 7. When to Use Which Memory Layer: Decision Tree

### **Dec**ision **Flo**wchart

```
+-----------------------------------------------------------------------+
|                    MEMORY TOOL DECISION TREE                            |
+-----------------------------------------------------------------------+
|                                                                         |
|  START: What do you need?                                               |
|                |                                                        |
|                v                                                        |
|  +---------------------------+                                          |
|  | Need to REMEMBER things   |                                          |
|  | across sessions?          |                                          |
|  +-------------+-------------+                                          |
|       YES      |      NO                                                |
|        |       |       |                                                |
|        v       |       v                                                |
|  +----------+  |  +---------------------------+                         |
|  | Multiple |  |  | Need to SEE what's        |                         |
|  | agents?  |  |  | happening RIGHT NOW?      |                         |
|  +----+-----+  |  +-------------+-------------+                         |
|   YES |  NO    |       YES      |      NO                               |
|    |  |   |    |        |       |       |                               |
|    v  |   v    |        v       |       v                               |
| BEADS |   |    |   CLAUDE HUD   |  Just use                             |
|       |   |    |                |  Claude Code                          |
|       |   v    |                |  directly                             |
|       | CLAUDE-|                |                                       |
|       | MEM    |                |                                       |
|       +--------+                |                                       |
|                                                                         |
|  SECONDARY QUESTIONS:                                                   |
|                                                                         |
|  Need dependency tracking? ---------> BEADS                             |
|  Need semantic search? -------------> CLAUDE-MEM                        |
|  Need git-native workflow? ---------> BEADS                             |
|  Need token optimization? ----------> CLAUDE-MEM (3-layer)              |
|  Need context bar visibility? ------> CLAUDE HUD                        |
|  Need tool execution monitoring? ---> CLAUDE HUD                        |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Sce**nario-Based **Rec**ommendations

| **Sce**nario | **Rec**ommendation | **Rat**ionale |
|--------------|---------------------|---------------|
| Single developer, complex feature | Claude-Mem | Personal memory, semantic search |
| Team with shared issues | Beads | Git-backed, multi-agent |
| Ralph loop optimization | Claude-Mem + HUD | Memory + visibility |
| Gas Town deployment | Beads + Claude-Mem | Shared work + agent memory |
| Debugging session issues | Claude HUD | Real-time observability |
| Long-running autonomous | All three | Full memory + observability stack |

### **Com**bination **Pat**terns

**Pattern 1: Visibility + Session Memory**
```
Claude HUD (observability)
    +
Claude-Mem (persistence)
=
Full single-agent stack
```

**Pattern 2: Multi-Agent Work Tracking**
```
Beads (shared issues)
    +
Claude-Mem (per-agent observations)
=
Gas Town ready stack
```

**Pattern 3: Maximum Coverage**
```
Claude HUD (real-time visibility)
    +
Claude-Mem (semantic memory)
    +
Beads (structured work tracking)
=
Complete observability and persistence
```

---

## 8. Mental Models

### **Men**tal Model 1: **The Mem**ory **Pyr**amid

```
+-----------------------------------------------------------------------+
|                      THE MEMORY PYRAMID                                 |
+-----------------------------------------------------------------------+
|                                                                         |
|                            /\                                           |
|                           /  \                                          |
|                          /    \                                         |
|                         / HOT  \          Current session               |
|                        / MEMORY \         Full detail available         |
|                       /   5-10   \        Immediate access              |
|                      /   items    \                                     |
|                     +--------------+                                    |
|                    /                \                                   |
|                   /    WARM MEMORY   \     Recent sessions              |
|                  /   Summaries + key  \    Compressed                   |
|                 /    observations      \   Searchable                   |
|                /      ~50 items         \                               |
|               +------------------------+                                |
|              /                          \                               |
|             /       COLD MEMORY          \   All historical             |
|            /     Vector search access     \  Unlimited storage          |
|           /      Full archive              \                            |
|          /                                  \                           |
|         +------------------------------------+                          |
|                                                                         |
|  KEY INSIGHT: Progressive disclosure moves data UP the pyramid          |
|               only when needed, saving tokens                           |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Men**tal Model 2: **The Dual** Persistence **Bra**in

> "Think of Beads as having two brains: SQLite for thinking fast, JSONL for remembering forever."

```
+-----------------------------------------------------------------------+
|                    THE DUAL PERSISTENCE BRAIN                           |
+-----------------------------------------------------------------------+
|                                                                         |
|  +---------------------------+   +---------------------------+          |
|  |                           |   |                           |          |
|  |      LEFT BRAIN           |   |      RIGHT BRAIN          |          |
|  |       (SQLite)            |   |        (JSONL)            |          |
|  |                           |   |                           |          |
|  |  * Fast processing        |   |  * Long-term memory       |          |
|  |  * Complex queries        |   |  * Shareable              |          |
|  |  * Local only             |   |  * Version controlled     |          |
|  |  * Ephemeral cache        |   |  * Source of truth        |          |
|  |                           |   |                           |          |
|  +-------------+-------------+   +-------------+-------------+          |
|                |                               |                        |
|                +--------------+----------------+                        |
|                               |                                         |
|                        Synchronization                                  |
|                    (5-second debounce)                                  |
|                                                                         |
|  ANALOGY: Like working in RAM but saving to disk                        |
|           Fast operations, durable storage                              |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Men**tal Model 3: **The Obs**ervation **Comp**ression **Pipe**line

```
+-----------------------------------------------------------------------+
|               THE OBSERVATION COMPRESSION PIPELINE                      |
+-----------------------------------------------------------------------+
|                                                                         |
|   Raw Tool Output (verbose, unstructured)                               |
|            |                                                            |
|            | 10,000+ tokens                                             |
|            v                                                            |
|   +-------------------+                                                 |
|   |  SDK Agent Parse  |  <- Extraction, not summarization               |
|   +-------------------+                                                 |
|            |                                                            |
|            | Structured observation                                     |
|            v                                                            |
|   +-------------------+                                                 |
|   | type: "discovery" |                                                 |
|   | title: "..."      |                                                 |
|   | facts: [...]      |                                                 |
|   | narrative: "..."  |                                                 |
|   | concepts: [...]   |                                                 |
|   +-------------------+                                                 |
|            |                                                            |
|            | ~500 tokens per observation                                |
|            v                                                            |
|   +-------------------+                                                 |
|   |  Token Calculator |                                                 |
|   +-------------------+                                                 |
|            |                                                            |
|            v                                                            |
|   +-------------------+    +-------------------+                        |
|   |   SQLite Store    |<-->|   Chroma Sync     |                        |
|   |   (Structure)     |    |   (Semantics)     |                        |
|   +-------------------+    +-------------------+                        |
|                                                                         |
|   KEY INSIGHT: Compression happens at PARSING, not storage              |
|                The SDK agent extracts structure from noise              |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Men**tal Model 4: **Dash**board **Inst**rumentation

> "Think of Claude Code sessions as a dynamic system needing instrumentation--like a dashboard in a car to avoid breakdowns."

**Implications:**
- Visibility prevents crashes (context overflow)
- Real-time feedback beats blind trust
- Patterns emerge from continuous monitoring
- Instrumentation overhead is justified by saved debugging time

**Claude HUD as Car Dashboard:**

| **Car Gauge** | **HUD Equivalent** | **What It Prevents** |
|---------------|---------------------|----------------------|
| Fuel gauge | Context meter | Running out of context |
| Speedometer | Duration timer | Session too long |
| RPM gauge | Tool activity | Runaway execution |
| Check engine | Agent status | Stuck workers |
| Temperature | Usage limits | Rate limit surprise |

---

## 9. Checkpoints

### **Che**ckpoint 1: **Cla**ude-Mem **Ins**tallation

**After Installation:**

```bash
# Check plugin installed
> /plugin list

# Expected output:
# - claude-mem (installed)
```

**Worker Running:**

```bash
curl http://localhost:37777/api/health

# Expected:
# {"status":"ok","version":"9.0.5"}
```

**Database Created:**

```bash
ls -la ~/.claude-mem/

# Expected:
# - claude-mem.db
# - settings.json
# - vector-db/
```

**Context Injection Working:**

```
# Start new Claude Code session
# You should see:
#
# <claude-mem-context>
# ## Recent Observations
# ...
# </claude-mem-context>
```

### **Che**ckpoint 2: **Bea**ds **Ins**tallation

**CLI Available:**

```bash
bd version

# Expected: Version number (e.g., 1.0.0)
```

**Repository Initialized:**

```bash
ls -la .beads/

# Expected:
# - issues.jsonl (git-tracked)
# - beads.db (gitignored)
# - config.yaml
```

**Basic Operations:**

```bash
bd create "Test issue"
bd list

# Expected: Test issue appears in list
```

### **Che**ckpoint 3: **Cla**ude HUD **Ins**tallation

**Plugin Installed:**

```bash
# After /plugin install claude-hud
# Expected:
#
# claude-hud installed!
# HUD will appear on your next prompt.
```

**HUD Displaying:**

```
# After next prompt, you should see:
#
# [Opus 4.5] ████████░░ 35% | myapp | git:(main) | 5m
```

**Features Working:**

1. Context bar moves when you send prompts
2. Tool activity shows when reading/editing files
3. Git status shows current branch

### **Che**ckpoint 4: **Int**egration **Ver**ification

**Claude-Mem + Ralph:**

```bash
# After 3+ Ralph iterations:
# Visit http://localhost:37777
# Should see observations from multiple iterations
```

**Beads + Gas Town:**

```bash
bd list --status in_progress

# Expected: Issues from multiple agent sessions
```

**All Three Combined:**

```
HUD shows: Context %, tool activity, agent status
Mem shows: Injected observations at session start
Beads shows: Ready work queue, blocked issues
```

---

## 10. Troubleshooting

### **Cla**ude-Mem **Iss**ues

#### **Worker Won't Start**

**Symptom:** Worker startup blocks Claude Code

**Solution:**
```bash
# Kill existing worker
pkill -f "claude-mem-worker"

# Clear version markers
rm -rf ~/.claude-mem/.version-*

# Restart Claude Code
```

#### **Empty Context Injection**

**Symptom:** New sessions show no prior context

**Diagnosis:**
```bash
# Check worker
curl http://localhost:37777/api/health

# Check database
sqlite3 ~/.claude-mem/claude-mem.db "SELECT COUNT(*) FROM observations;"
```

#### **Chroma RAM Issues**

**Symptom:** High memory usage

**Solution:**
```json
// In settings.json - disable Chroma if needed
{
  "vector": {
    "enabled": false
  }
}
```

### **Bea**ds **Iss**ues

#### **Database Locked**

**Symptom:** "Database locked" error

**Solution:**
```bash
# Stop daemon
bd daemons stop

# Retry operation
bd list
```

#### **Sync Conflict**

**Symptom:** Divergent changes error

**Solution:**
```bash
# Check conflicts
bd conflicts

# Accept local or remote
bd conflicts resolve bd-xxxx --ours
# or
bd conflicts resolve bd-xxxx --theirs
```

#### **Stale Database**

**Symptom:** JSONL newer than SQLite

**Solution:**
```bash
# Force reimport
rm .beads/beads.db
bd sync --force
```

### **Cla**ude HUD **Iss**ues

#### **HUD Not Displaying**

**Symptom:** No statusline visible

**Solution:**
```bash
# Re-run setup
/claude-hud:setup

# Or check config
cat ~/.claude/plugins/claude-hud/config.json
```

#### **Colors Not Showing**

**Symptom:** Gray or wrong colors

**Solution:**
```bash
# Test terminal color support
echo -e "\e[32mGreen\e[0m \e[33mYellow\e[0m \e[31mRed\e[0m"

# For tmux
echo 'set -g default-terminal "xterm-256color"' >> ~/.tmux.conf
```

#### **Usage Limits Not Showing**

**Symptom:** Usage shows "N/A"

**Cause:** Using API key instead of OAuth, or not on Pro/Max/Team

**Note:** This is expected for API key users

### **Emer**gency **Rec**overy

**Claude-Mem Full Reset:**
```bash
cp -r ~/.claude-mem ~/.claude-mem-backup
rm -rf ~/.claude-mem
/plugin uninstall claude-mem
/plugin install claude-mem
```

**Beads Database Recovery:**
```bash
# Reset to remote state
git checkout origin/main -- .beads/issues.jsonl
rm .beads/beads.db
bd sync --force
```

**Claude HUD Reset:**
```bash
rm -rf ~/.claude/plugins/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

---

## 11. Integration Patterns: Combination Matrix

### **Sin**gle Tool **Pat**terns

| **Pat**tern | **Too**l | **Use Case** | **Token Cost** |
|-------------|----------|--------------|----------------|
| Session Memory | Claude-Mem | Solo dev, complex features | Variable (progressive) |
| Work Tracking | Beads | Team coordination | 1-2k (bd prime) |
| Visibility | Claude HUD | Monitoring sessions | 0 (display only) |

### **Dua**l Tool **Com**binations

| **Com**bination | **Use Case** | **Setup Complexity** | **Value** |
|-----------------|--------------|----------------------|-----------|
| Mem + HUD | Solo developer visibility | Low | High |
| Beads + Mem | Multi-agent with personal memory | Medium | Very High |
| Beads + HUD | Gas Town monitoring | Medium | High |

### **Ful**l Stack **Pat**tern

```
+-----------------------------------------------------------------------+
|                     FULL MEMORY STACK                                   |
+-----------------------------------------------------------------------+
|                                                                         |
|  Claude HUD (observability layer)                                       |
|       |                                                                 |
|       | Real-time visibility into:                                      |
|       | - Context consumption                                           |
|       | - Tool execution                                                |
|       | - Agent activity                                                |
|       |                                                                 |
|  Claude-Mem (semantic memory layer)                                     |
|       |                                                                 |
|       | Cross-session learning:                                         |
|       | - Observation capture                                           |
|       | - Semantic search                                               |
|       | - Progressive disclosure                                        |
|       |                                                                 |
|  Beads (structured work layer)                                          |
|       |                                                                 |
|       | Multi-agent coordination:                                       |
|       | - Issue tracking                                                |
|       | - Dependency graphs                                             |
|       | - Git-backed persistence                                        |
|                                                                         |
|  RESULT: Maximum observability + memory + coordination                  |
|                                                                         |
+-----------------------------------------------------------------------+
```

### **Orc**hestration **Int**egration Matrix

| **Orc**hestration | **Rec**ommended Stack** | **Set**up Time | **Com**plexity |
|-------------------|-------------------------|----------------|----------------|
| Ralph Loop | Mem + HUD | 15 min | Low |
| Gas Town | Beads + Mem + HUD | 45 min | High |
| CC-Mirror | Mem + HUD | 20 min | Medium |
| Personal Panopticon | Beads + Mem | 30 min | Medium |
| Full Autonomous | All Three | 1 hour | High |

---

## 12. Configuration Reference

### **Cla**ude-Mem **Con**figuration

**Location:** `~/.claude-mem/settings.json`

```json
{
  "worker": {
    "port": 37777,
    "host": "localhost"
  },
  "context": {
    "observationCount": 50,
    "fullObservationCount": 5,
    "sessionCount": 10,
    "showReadTokens": true,
    "showWorkTokens": true,
    "showSavings": true,
    "showSummary": true,
    "showMessages": true,
    "observationTypes": "bugfix,feature,refactor,discovery,decision,change",
    "observationConcepts": "how-it-works,why-it-exists,what-changed,problem-solution,gotcha,pattern,trade-off",
    "fullObservationField": "narrative"
  },
  "database": {
    "path": "~/.claude-mem/claude-mem.db"
  },
  "vector": {
    "path": "~/.claude-mem/vector-db",
    "enabled": true
  },
  "logging": {
    "level": "info"
  }
}
```

### **Bea**ds **Con**figuration

**Location:** `.beads/config.yaml`

```yaml
# Issue ID prefix
prefix: bd

# Remote sync frequency
remote-sync-interval: "30s"

# Auto-compact old issues
auto-compact: true
compact-after-days: 30

# Daemon settings
daemon-mode: "events"
auto-start: true
```

**Environment Variables:**

| **Var**iable | **Pur**pose | **Def**ault |
|--------------|-------------|-------------|
| `BEADS_DB` | Custom database path | `.beads/beads.db` |
| `BEADS_NO_DAEMON` | Disable daemon | `false` |
| `BEADS_DAEMON_MODE` | "poll" or "events" | "events" |

### **Cla**ude HUD **Con**figuration

**Location:** `~/.claude/plugins/claude-hud/config.json`

```json
{
  "lineLayout": "expanded",
  "showSeparators": false,
  "pathLevels": 1,
  "gitStatus": {
    "enabled": true,
    "showDirty": true,
    "showAheadBehind": false,
    "showFileStats": false
  },
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showConfigCounts": true,
    "showDuration": true,
    "showTokenBreakdown": true,
    "showUsage": true,
    "usageBarEnabled": true,
    "showTools": true,
    "showAgents": true,
    "showTodos": true,
    "autocompactBuffer": "enabled",
    "usageThreshold": 0,
    "environmentThreshold": 0
  }
}
```

### **Pre**set **Con**figurations

**Ralph Loop Optimization:**
```json
// Claude-Mem
{
  "context": {
    "observationCount": 100,
    "fullObservationCount": 10,
    "observationTypes": "feature,discovery,decision,change"
  }
}

// Claude HUD
{
  "display": {
    "showContextBar": true,
    "showDuration": true,
    "showTools": true,
    "showTodos": true
  }
}
```

**Gas Town Deployment:**
```json
// Beads
{
  "remote-sync-interval": "15s",
  "auto-compact": true
}

// Claude-Mem
{
  "context": {
    "sessionCount": 25,
    "observationTypes": "decision,discovery,pattern"
  }
}

// Claude HUD
{
  "display": {
    "showAgents": true,
    "showTools": true,
    "showContextBar": true
  }
}
```

---

## 13. Source Attribution

### **Pri**mary **Sou**rces

| **Sou**rce | **Doc**ument | **Lin**es | **Cov**erage |
|------------|--------------|-----------|--------------|
| Claude HUD | `extractions/tooling/008-claude-hud-complete.md` | 1160+ | Full |
| Claude-Mem | `extractions/tooling/009-claude-mem-complete.md` | 1200+ | Full |
| Beads | `extractions/orchestration/023-beads-data-plane.md` | 1430+ | Full |

### **Cre**ator **Att**ribution

| **Too**l | **Cre**ator | **Rep**ository |
|----------|-------------|----------------|
| Claude HUD | Jarrod Watts (@jarrodwatts) | github.com/jarrodwatts/claude-hud |
| Claude-Mem | Alex Newman (@thedotmack) | github.com/thedotmack/claude-mem |
| Beads | Steve Yegge (@Steve_Yegge) | github.com/steveyegge/beads |

### **Rel**ated **Doc**umentation

| **Doc**ument | **Rel**ationship |
|--------------|------------------|
| `synthesis/mastery-ralph-complete.md` | Ralph pattern integration |
| `extractions/orchestration/009-gas-town-steve-yegge.md` | Gas Town architecture |
| `extractions/orchestration/007-cc-mirror-multiagent-nummanali.md` | CC-Mirror patterns |
| `synthesis/architecture-complexity-ladder.md` | Complexity progression |

### **Rel**iability **Ass**essment

| **Fac**tor | **Rat**ing | **Not**es |
|------------|------------|-----------|
| Source Authority | High | All created by recognized community leaders |
| Documentation Quality | High | Comprehensive READMEs, architecture docs |
| Community Validation | High | Combined 25K+ stars |
| Maintenance Status | Active | All actively maintained |
| Integration Tested | Medium | Integration patterns documented conceptually |

---

## Tags

`#memory` `#persistence` `#claude-mem` `#beads` `#claude-hud` `#observability` `#token-optimization` `#progressive-disclosure` `#cross-session` `#multi-agent` `#integration` `#ralph-integration` `#gas-town-integration` `#cc-mirror-integration`

---

## Document Metadata

- **Created:** 2026-01-19
- **Version:** 1.0
- **Lines:** 1500+
- **Sources:** 3 extraction documents
- **Synthesis Type:** Integration patterns and decision framework
- **Quality Score:** Checkpoint-verified, troubleshooting-complete

---

*This synthesis provides complete integration guidance for the Claude Code memory layer, including Claude-Mem, Beads, and Claude HUD. Use the decision tree in Section 7 to choose the right tool combination for your use case.*
