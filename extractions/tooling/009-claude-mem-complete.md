# Claude-Mem: Complete Extraction & Integration Guide

> **Source:** https://github.com/thedotmack/claude-mem
> **Author:** Alex Newman (@thedotmack)
> **Stars:** 14.6k+ | **License:** AGPL-3.0
> **Version Analyzed:** 9.0.5
> **Extraction Date:** January 2026

---

## You Are Here

**Context:** This is a deep extraction of claude-mem, a persistent memory compression system for Claude Code. If you're building autonomous Claude workflows, this is the **memory layer** that makes cross-session learning possible.

**Where This Fits:**
```
Claude Code Ecosystem
├── Claude Code (base)
├── Orchestration Patterns
│   ├── Ralph Wiggum Loop ← mem enables cross-iteration learning
│   ├── Gas Town ← mem provides colony-wide memory
│   └── CC-Mirror ← mem persists multi-model state
└── Memory Layer
    └── claude-mem ← YOU ARE HERE
```

**Prerequisites:** Working Claude Code installation with plugin support (version with hooks enabled).

**What You'll Learn:**
1. How semantic memory compression works
2. The 3-layer token-efficient retrieval pattern
3. Integration with Ralph, Gas Town, and CC-Mirror
4. Configuration for different use cases
5. Troubleshooting common issues

---

## What This Is

Claude-mem is a **persistent memory compression plugin** that automatically captures tool observations, semantically compresses them, and injects relevant context into future Claude Code sessions.

### The Problem It Solves

Without claude-mem:
```
Session 1: Debug authentication bug for 2 hours
[Session ends]
Session 2: "What authentication bug? I have no memory of this."
```

With claude-mem:
```
Session 1: Debug authentication bug for 2 hours
[Observations captured, compressed, stored]
Session 2: "I see from previous sessions you were debugging
            an auth bug. Here's what we learned..."
```

### Core Capabilities

| Feature | Description |
|---------|-------------|
| **Persistent Memory** | Context survives across sessions |
| **Progressive Disclosure** | Token-efficient 3-layer retrieval |
| **Semantic Search** | Natural language queries via mem-search skill |
| **Web Dashboard** | Visual UI at localhost:37777 |
| **Privacy Controls** | `<private>` tags exclude sensitive data |
| **Citation System** | Reference past observations by ID |
| **Automatic Operation** | Zero manual intervention required |

---

## Why It Matters

### The Context Window Paradox

Claude Code sessions are stateless. Each conversation starts fresh. But real engineering work spans days, weeks, months. The gap between "what Claude remembers" and "what actually happened" grows with every session.

Claude-mem bridges this gap through:

1. **Automatic Observation Capture** - Every tool use becomes a memory
2. **Semantic Compression** - Raw observations → structured summaries
3. **Intelligent Retrieval** - Only relevant memories injected
4. **Cross-Session Learning** - Patterns accumulate over time

### Token Economics

Raw tool observations can consume 10,000+ tokens per session. Claude-mem's compression achieves:

```
Discovery tokens (work performed): 50,000
Read tokens (consumption cost):     5,000
Savings:                              90%
```

The 3-layer progressive disclosure pattern enables ~10x token savings by filtering before fetching full details.

---

## Architecture Deep Dive

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Claude Code Session                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                   Lifecycle Hooks                       │ │
│  │  SessionStart → UserPromptSubmit → PostToolUse         │ │
│  │                                    ↓                    │ │
│  │                               Stop → SessionEnd         │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↓                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Worker Service (port 37777)                │ │
│  │  ┌──────────────┐  ┌─────────────┐  ┌───────────────┐  │ │
│  │  │ HTTP Routes  │  │ Search API  │  │ Context Gen   │  │ │
│  │  └──────────────┘  └─────────────┘  └───────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↓                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  Storage Layer                          │ │
│  │  ┌─────────────────┐        ┌─────────────────────┐    │ │
│  │  │  SQLite + FTS5  │◄──────►│   Chroma VectorDB   │    │ │
│  │  │  Observations   │        │   Semantic Search   │    │ │
│  │  │  Sessions       │        │   Embeddings        │    │ │
│  │  │  Summaries      │        │                     │    │ │
│  │  └─────────────────┘        └─────────────────────┘    │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### The Six Components

#### 1. Lifecycle Hooks (5 + 1 Smart Install)

```
SessionStart      → Load relevant context, inject memories
UserPromptSubmit  → Capture user intentions
PostToolUse       → Record tool observations
Stop              → Generate session summary
SessionEnd        → Finalize and compress
Smart Install     → Verify dependencies (pre-hook)
```

Each hook returns a standard response:
```typescript
export const STANDARD_HOOK_RESPONSE = JSON.stringify({
  continue: true,
  suppressOutput: true
});
```

#### 2. Worker Service (HTTP API on port 37777)

The Worker Service orchestrates all functionality through specialized route handlers:

```
/api/search          → Query observations
/api/timeline        → Chronological context
/api/observations    → Batch fetch details
/api/context/inject  → Memory injection endpoint
/api/health          → Service status
```

Key architectural decision: **Start HTTP immediately, initialize heavy services in background.** This keeps Claude Code responsive during startup.

#### 3. SQLite Database

Optimized with performance pragmas:
```sql
PRAGMA journal_mode = WAL;        -- Write-Ahead Logging
PRAGMA synchronous = NORMAL;      -- Balance durability/speed
PRAGMA foreign_keys = ON;         -- Referential integrity
PRAGMA temp_store = MEMORY;       -- RAM for temp tables
PRAGMA mmap_size = 268435456;     -- 256MB memory-mapped I/O
PRAGMA cache_size = 10000;        -- 10,000 page cache
```

Tables:
- `sdk_sessions` - Session metadata with dual ID system
- `observations` - Tool use records
- `session_summaries` - Compressed summaries
- `user_prompts` - Captured user inputs

#### 4. Chroma Vector Database

Handles semantic search through MCP protocol:

```typescript
// Connection via uvx with Python 3.13
// Vectors stored in ~/.claude-mem/vector-db

// Document granularity strategy:
// - Observations: Each fact, narrative, text → separate vector
// - Summaries: Each field → separate document
// - Prompts: Single document per input
```

This granular approach enables precise semantic matching across specific content types.

#### 5. MCP Search Tools (4 Tools)

The Model Context Protocol exposes four tools:

| Tool | Purpose | Tokens |
|------|---------|--------|
| `search` | Compact index with IDs | ~50-100/result |
| `timeline` | Chronological context | Variable |
| `get_observations` | Full details | ~500-1,000/result |
| `__IMPORTANT` | Workflow documentation | N/A |

#### 6. SDK Agent Integration

Uses Anthropic's Claude Agent SDK for semantic compression:

```typescript
// Prompt structure for observations
buildObservationPrompt() → XML format:
  - type
  - title
  - facts (array)
  - narrative
  - concepts (array)
  - files_read
  - files_modified

// Summary structure
buildSummaryPrompt() → Checkpoint format:
  - request
  - investigated
  - learned
  - completed
  - next_steps
  - notes
```

### The Dual Session ID Architecture

A critical implementation detail: **two distinct session IDs manage different aspects**:

```
contentSessionId   → User's Claude Code conversation
memorySessionId    → SDK agent's internal session for resume
```

**Flow:**
1. Hook creates session → `contentSessionId` recorded, `memorySessionId` = NULL
2. First SDK message → `memorySessionId` captured via `updateMemorySessionId()`
3. Resume operations → Use `memorySessionId` (never `contentSessionId`)

**Key Invariant:** `session.memorySessionId !== null` determines resume activation.

---

## Key Features

### 3-Layer Progressive Disclosure

The token-efficient retrieval pattern:

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

// Layer 3: Full details (filtered IDs only)
const observations = await getObservations({
  ids: [123, 456]  // Only fetch what we need
});
// Returns: Complete observation data
```

**Result:** ~10x token savings by filtering before fetching.

### Observation Types & Concepts

**Default Types:**
```
bugfix    → Bug fixes and error resolutions
feature   → New functionality implementations
refactor  → Code restructuring
discovery → Technical discoveries and insights
decision  → Architectural decisions
change    → General modifications
```

**Default Concepts:**
```
how-it-works    → Mechanism explanations
why-it-exists   → Rationale documentation
what-changed    → Change descriptions
problem-solution → Problem/solution pairs
gotcha          → Pitfalls and warnings
pattern         → Recurring patterns
trade-off       → Decision trade-offs
```

### Privacy Controls

Wrap sensitive content to exclude from memory:

```xml
<private>
API_KEY=sk-abc123...
DATABASE_PASSWORD=secret
</private>
```

Content within `<private>` tags is never stored or indexed.

### Mode-Based Configuration

ModeManager supports operational profiles:

```typescript
// Default mode for software development
mode: "code"

// Alternative modes
mode: "email-investigation"
mode: "code--ko"  // Parent--override pattern

// Environment variable override
CLAUDE_MEM_MODE=email-investigation
```

Modes define:
- Observation types and concepts
- Prompt templates
- Display configurations

---

## Installation & Setup

### Quick Start

```bash
# In Claude Code terminal
> /plugin marketplace add thedotmack/claude-mem
> /plugin install claude-mem

# Restart Claude Code
# Previous session context now auto-injects
```

### System Requirements

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | 18.0.0+ | Required |
| Bun | 1.0.0+ | Auto-installed |
| uv | Latest | Auto-installed (Python package manager) |
| SQLite 3 | Bundled | No install needed |
| Claude Code | Latest | Plugin support required |

### Dependencies

Core packages:
```json
{
  "@anthropic-ai/claude-agent-sdk": "^0.1.76",
  "@modelcontextprotocol/sdk": "^1.25.1",
  "express": "^4.18.2",
  "react": "^18.3.1",
  "yaml": "^2.8.2"
}
```

---

## Configuration Options

### Settings File Location

```
~/.claude-mem/settings.json
```

Auto-generated with defaults on first run.

### Key Configuration Parameters

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

### Context Injection Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `observationCount` | 50 | Total observations to load |
| `fullObservationCount` | 5 | Observations with full detail |
| `sessionCount` | 10 | Sessions to include |
| `observationTypes` | All 6 | Filter by type |
| `observationConcepts` | All 7 | Filter by concept |
| `fullObservationField` | narrative | 'narrative' or 'facts' |

---

## Memory Management Patterns

### Observation Storage Flow

```
Tool Execution
     ↓
PostToolUse Hook
     ↓
SDK Agent Parses → XML Observation Format
     ↓
storeObservation()
     ↓
SQLite INSERT (observations table)
     ↓
ChromaSync.syncObservation()
     ↓
Vector Document Creation (granular)
```

### Session Summary Flow

```
Stop/SessionEnd Hook
     ↓
buildSummaryPrompt()
     ↓
SDK Agent Generates Summary
     ↓
storeSummary() → SQLite
     ↓
ChromaSync.syncSummary() → Vectors
```

### Memory Retrieval Flow

```
SessionStart Hook
     ↓
ContextBuilder.generateContext()
     ↓
├── loadContextConfig()
├── queryObservations() / queryObservationsMulti()
├── querySummaries() / querySummariesMulti()
├── buildTimeline()
└── renderContext()
     ↓
Context Injection → Claude Code Session
```

### Token Budget Management

The TokenCalculator tracks two metrics:

```typescript
// Read Tokens: What Claude consumes
readTokens = observationCharacters / CHARS_PER_TOKEN_ESTIMATE

// Discovery Tokens: Work investment represented
discoveryTokens = totalToolOutputCharacters

// Savings Calculation
savings = ((discoveryTokens - readTokens) / discoveryTokens) * 100
```

---

## Integration Patterns

### With Ralph Wiggum Loop

**Ralph** is the autonomous iteration pattern: `while :; do cat PROMPT.md | claude-code ; done`

**Problem Without Mem:**
Each Ralph iteration starts fresh. Learnings from iteration 15 are unknown to iteration 16.

**Solution With Mem:**

```bash
# PROMPT.md for Ralph + Mem
You are implementing feature X iteratively.

CRITICAL: Use the mem-search skill before making changes.
Query: "feature X implementation"
This will show what previous iterations learned.

After completing work, ensure observations are captured.
The system will automatically persist learnings for the next iteration.
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

**Example: Learnings Across 20+ Iterations:**
```
Iteration 1:  Discovered auth endpoint structure
Iteration 5:  Found rate limiting gotcha
Iteration 12: Decided on retry pattern
Iteration 18: Refined error handling based on 5+12 learnings
Iteration 20: Full implementation incorporating all discoveries
              (mem-search surfaces iterations 1,5,12,18 automatically)
```

**Key Pattern:** The `discovery` observation type accumulates across iterations, creating institutional memory for the Ralph loop.

### With Gas Town

**Gas Town** is Steve Yegge's agent factory architecture with hierarchical agents.

**Problem Without Mem:**
Dogs (worker agents) can't share discoveries. Mayor's decisions aren't recorded. Refinery learning is lost.

**Solution With Mem - Shared Memory Hierarchy:**

```
Mayor (Orchestrator)
├── memory_session_id: "mayor_session_001"
├── Observations: strategic decisions, resource allocation
│
├── Deacon (Domain Expert)
│   ├── memory_session_id: "deacon_auth_001"
│   ├── Observations: domain expertise, gotchas
│   │
│   └── Dogs (Workers)
│       ├── dog_1: memory_session_id: "dog_impl_001"
│       ├── dog_2: memory_session_id: "dog_impl_002"
│       └── Observations: implementation details, bugs
│
└── Refinery (Improvement)
    ├── memory_session_id: "refinery_001"
    └── Observations: patterns, optimizations
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

// Cross-agent discovery sharing
// Dog_1 discovers gotcha → stored as observation
// Dog_2 queries mem-search → finds Dog_1's gotcha
// Deacon aggregates → strategic summary
// Mayor reviews → decision observation
```

### With CC-Mirror

**CC-Mirror** enables multi-model orchestration (Claude + GPT + local models).

**Problem Without Mem:**
Model switching loses context. Opus insights unavailable to Sonnet. No persistent arbitration history.

**Solution With Mem - Multi-Model Memory:**

```
CC-Mirror Orchestrator
├── Claude Opus Worker
│   ├── Observations: complex reasoning, architecture decisions
│   └── memory_session_id: "opus_worker_001"
│
├── Claude Sonnet Worker
│   ├── Observations: implementation details, quick iterations
│   └── memory_session_id: "sonnet_worker_001"
│
├── GPT-4 Worker (via MCP bridge)
│   ├── Observations: alternative perspectives, validations
│   └── memory_session_id: "gpt4_worker_001"
│
└── Shared Memory Layer
    └── All workers read from same SQLite + Chroma
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

### Combination Matrix

| Mem + | Use Case | Complexity | Value | Key Configuration |
|-------|----------|------------|-------|-------------------|
| **Ralph** | Cross-iteration learning | Low | Very High | High observation count, discovery type |
| **Gas Town** | Agent colony memory | Medium | High | Multi-session, decision/pattern types |
| **CC-Mirror** | Multi-model memory | Medium | High | Cross-worker sharing, trade-off concepts |
| **Ralph + Gas Town** | Autonomous agent colony | High | Very High | Combined config, session isolation |
| **All Three** | Full autonomous stack | High | Maximum | Careful session ID management |

### Session ID Strategy for Multi-Agent

**Critical:** Each agent needs distinct session tracking:

```typescript
// Pattern for multi-agent session IDs
const sessionId = `${agentType}_${agentInstance}_${timestamp}`;

// Examples
"ralph_iteration_001_1705678900"
"gastown_mayor_001_1705678900"
"gastown_dog_auth_002_1705678910"
"ccmirror_opus_001_1705678920"
```

**Querying Across Agents:**
```typescript
// All agent observations for a project
search({ project: "my-feature" });

// Specific agent type
search({
  project: "my-feature",
  query: "from:gastown_mayor"  // semantic search
});
```

---

## Mental Models

### The Memory Compression Pipeline

```
Raw Tool Output (verbose, unstructured)
         ↓
    SDK Agent Parsing
         ↓
Structured Observation (type, title, facts, narrative, concepts)
         ↓
    Token Calculation
         ↓
SQLite Storage (searchable, persistent)
         ↓
    Chroma Sync (async)
         ↓
Vector Embedding (semantic search ready)
```

**Key Insight:** Compression happens at parsing, not storage. The SDK agent's job is extraction, not summarization.

### Memory Tiers

```
┌─────────────────────────────────────────┐
│           Tier 1: Hot Memory            │
│  - Current session observations         │
│  - Full detail available                │
│  - ~5-10 items injected                 │
├─────────────────────────────────────────┤
│           Tier 2: Warm Memory           │
│  - Recent sessions (configurable)       │
│  - Summaries + key observations         │
│  - ~50 items searchable                 │
├─────────────────────────────────────────┤
│           Tier 3: Cold Memory           │
│  - All historical data                  │
│  - Vector search accessible             │
│  - Unlimited storage                    │
└─────────────────────────────────────────┘
```

### The Progressive Disclosure Funnel

```
     Search Query
          ↓
    ┌─────────────┐
    │  100 IDs    │  ← Layer 1: Compact index
    └─────────────┘
          ↓
    ┌─────────────┐
    │  20 items   │  ← Layer 2: Timeline filter
    └─────────────┘
          ↓
    ┌─────────────┐
    │  5 items    │  ← Layer 3: Full details
    └─────────────┘
          ↓
    Context Injection
```

### Hybrid Search Strategy

```
SQLite FTS5                    Chroma Vectors
     │                              │
     │ Structural Queries           │ Semantic Queries
     │ - Filter by type            │ - Natural language
     │ - Date ranges               │ - Concept similarity
     │ - File paths                │ - Cross-reference
     │ - Exact matches             │ - Fuzzy matching
     │                              │
     └──────────┬───────────────────┘
                │
         Merged Results
                │
          Deduplication
                │
         Ranked Output
```

---

## Checkpoints

### Installation Verification

**Checkpoint 1: Plugin Installed**
```bash
# In Claude Code
> /plugin list

# You should see:
# - claude-mem (installed)
```

**Checkpoint 2: Worker Running**
```bash
# Check if worker is active
curl http://localhost:37777/api/health

# Expected response:
# {"status":"ok","version":"9.0.5"}
```

**Checkpoint 3: Database Created**
```bash
ls -la ~/.claude-mem/

# You should see:
# - claude-mem.db
# - settings.json
# - vector-db/
```

**Checkpoint 4: Context Injection Working**
```
# Start new Claude Code session
# You should see injected context like:
#
# <claude-mem-context>
# ## Recent Observations
# ...
# </claude-mem-context>
```

### Memory Capture Verification

**Checkpoint 5: Observations Recording**
```bash
# After some tool use, visit:
open http://localhost:37777

# Web UI should show:
# - Recent observations
# - Session list
# - Search functionality
```

**Checkpoint 6: Semantic Search Working**
```
# In Claude Code session:
"Use mem-search to find observations about authentication"

# Should return relevant past observations
```

### Integration Verification

**Checkpoint 7: Ralph Integration**
```bash
# After 3+ Ralph iterations:
# Check observation count in web UI

# Should see observations from multiple iterations
# with incrementing session IDs
```

**Checkpoint 8: Cross-Session Memory**
```
# Session 1: "I'm working on feature X"
# [Work, observations captured]
# [End session]

# Session 2:
# Context should auto-inject feature X observations
```

---

## Troubleshooting

### Common Issues & Solutions

#### Worker Won't Start

**Symptom:** `Worker startup blocks Claude Code entirely when not ready within 15 seconds`

**Cause:** Heavy initialization blocking HTTP server

**Solution:**
```bash
# Kill existing worker
pkill -f "claude-mem-worker"

# Clear version markers
rm -rf ~/.claude-mem/.version-*

# Restart Claude Code
```

#### Database Initialization Failures (Windows)

**Symptom:** SQLite errors on Windows 11

**Cause:** Native module compilation issues

**Solution:**
```bash
# Reinstall with rebuild
npm rebuild better-sqlite3

# Or use Bun's bundled SQLite
bun install
```

#### Zombie Subagent Processes

**Symptom:** Worker spawns processes that don't terminate

**Cause:** SDK agent resume logic not cleaning up

**Solution:**
```bash
# Find and kill orphaned processes
ps aux | grep claude-mem | grep -v grep | awk '{print $2}' | xargs kill

# Check for accumulation
watch "ps aux | grep claude-mem | wc -l"
```

#### Chroma RAM Issues

**Symptom:** High memory usage, system slowdown

**Cause:** Vector database growing unbounded

**Solution:**
```json
// In settings.json - disable Chroma if needed
{
  "vector": {
    "enabled": false
  }
}
```

#### CLAUDE.md Files Everywhere

**Symptom:** Unwanted CLAUDE.md files in all directories including .git

**Cause:** Aggressive context file generation

**Solution:**
```bash
# Find and remove unwanted files
find . -name "CLAUDE.md" -path "*/.git/*" -delete

# Check settings for generation options
```

#### Empty Context Injection

**Symptom:** New sessions show no prior context

**Cause:** Worker not running or database empty

**Diagnosis:**
```bash
# Check worker
curl http://localhost:37777/api/health

# Check database
sqlite3 ~/.claude-mem/claude-mem.db "SELECT COUNT(*) FROM observations;"
```

#### Hook Errors

**Symptom:** Hook errors blocking operations

**Cause:** Service connection failures during hook execution

**Solution:**
```bash
# Check hook scripts
ls -la ~/.claude/hooks/

# Verify hook response format
# Should return: {"continue": true, "suppressOutput": true}
```

### Diagnostic Commands

```bash
# Full system check
npm run diagnostics

# Generate bug report
npm run bug-report

# Check worker status
curl http://localhost:37777/api/status

# View recent logs
tail -f ~/.claude-mem/logs/worker.log

# Database integrity
sqlite3 ~/.claude-mem/claude-mem.db "PRAGMA integrity_check;"

# Vector DB stats
curl http://localhost:37777/api/vector/stats
```

### Error Recovery Patterns

**Pattern 1: Full Reset**
```bash
# Backup data first
cp -r ~/.claude-mem ~/.claude-mem-backup

# Remove and reinstall
rm -rf ~/.claude-mem
/plugin uninstall claude-mem
/plugin install claude-mem
```

**Pattern 2: Database Recovery**
```bash
# Export observations
sqlite3 ~/.claude-mem/claude-mem.db ".dump observations" > obs-backup.sql

# Recreate database
rm ~/.claude-mem/claude-mem.db
# Restart worker - will recreate schema

# Reimport if needed
sqlite3 ~/.claude-mem/claude-mem.db < obs-backup.sql
```

**Pattern 3: Vector DB Rebuild**
```bash
# Clear vector storage
rm -rf ~/.claude-mem/vector-db

# Force re-sync on restart
# Worker will backfill from SQLite
```

---

## Advanced Configuration

### Multi-Project Setup

```json
{
  "projects": {
    "isolation": true,
    "worktree_support": true
  },
  "context": {
    "cross_project_search": false
  }
}
```

### Custom Observation Types

Create mode file at `~/.claude-mem/modes/custom.json`:

```json
{
  "id": "custom",
  "name": "Custom Development",
  "observationTypes": [
    {
      "id": "security",
      "label": "Security Finding",
      "icon": "shield",
      "emoji": "🛡️"
    },
    {
      "id": "performance",
      "label": "Performance Insight",
      "icon": "zap",
      "emoji": "⚡"
    }
  ],
  "observationConcepts": [
    {
      "id": "vulnerability",
      "label": "Vulnerability"
    },
    {
      "id": "optimization",
      "label": "Optimization"
    }
  ]
}
```

Activate: `CLAUDE_MEM_MODE=custom`

### Endless Mode (Beta)

Biomimetic memory architecture for extended sessions:

```json
{
  "beta": {
    "endless_mode": true
  }
}
```

Access via Settings panel in web UI.

---

## Source Attribution

### Primary Sources

| Source | Type | Reliability |
|--------|------|-------------|
| GitHub Repository | Code | Authoritative |
| README.md | Documentation | High |
| Wiki Pages | Community Docs | High |
| Issue Tracker | Bug Reports | Medium-High |
| Discussions | Community Input | Medium |

### Key Implementation Files

```
src/services/context/ContextBuilder.ts    # Context generation
src/services/sync/ChromaSync.ts           # Vector sync
src/services/sqlite/Database.ts           # SQLite layer
src/servers/mcp-server.ts                 # MCP tools
src/sdk/prompts.ts                        # Agent prompts
src/hooks/hook-response.ts                # Hook standard
```

### Related Resources

- Official X: @Claude_Memory
- Discord: discord.com/invite/J4wttp9vDu
- Author: Alex Newman (@thedotmack)
- License: AGPL-3.0 (ragtime/ under PolyForm Noncommercial)

---

## Key Takeaways

1. **Memory is Automatic** - No manual intervention needed after installation
2. **Progressive Disclosure Saves Tokens** - 3-layer pattern achieves ~10x savings
3. **Dual Database Architecture** - SQLite for structure, Chroma for semantics
4. **Integration Ready** - Works with Ralph, Gas Town, CC-Mirror out of the box
5. **Session ID Management Critical** - Understand contentSessionId vs memorySessionId
6. **Granular Vector Storage** - Each fact/narrative becomes its own document
7. **Mode-Based Configuration** - Customize for different workflows
8. **Privacy First** - `<private>` tags give control over sensitive data

---

## Quick Reference Card

```
INSTALLATION
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

CONFIGURATION
~/.claude-mem/settings.json

WEB UI
http://localhost:37777

SEARCH (in Claude Code)
"Use mem-search to find [topic]"

PRIVACY
<private>sensitive data</private>

DIAGNOSTIC
curl http://localhost:37777/api/health

RESET
rm -rf ~/.claude-mem && reinstall

OBSERVATION TYPES
bugfix, feature, refactor, discovery, decision, change

OBSERVATION CONCEPTS
how-it-works, why-it-exists, what-changed,
problem-solution, gotcha, pattern, trade-off
```

---

*Extraction complete. Mental models transferred. Integration patterns documented.*
*Last updated: January 2026 | claude-mem v9.0.5*
