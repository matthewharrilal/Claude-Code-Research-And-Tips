# Claude-Flow v3: Enterprise Multi-Agent Orchestration Platform

---

## Document Metadata

**File:** `031-claude-flow-enterprise.md`
**Category:** Enterprise Orchestration
**Source:** https://github.com/ruvnet/claude-flow
**Author:** ruvnet
**Repository Stats:** 12.5k stars, 1.5k forks, 298 open issues
**Current Version:** 3.0.0-alpha.104
**Last Updated:** 2026-01-19

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [What Claude-Flow Is](#what-claude-flow-is)
3. [Why It Matters](#why-it-matters)
4. [Architecture Deep Dive](#architecture-deep-dive)
   - [Seven-Layer Architecture](#seven-layer-architecture)
   - [Hive-Mind Swarm Coordination](#hive-mind-swarm-coordination)
   - [AgentDB + ReasoningBank](#agentdb--reasoningbank)
   - [SONA Architecture](#sona-architecture)
   - [Skills System (37 Skills)](#skills-system-37-skills)
   - [MCP Tools (170+)](#mcp-tools-170)
5. [Key Features](#key-features)
6. [Installation and Setup](#installation-and-setup)
7. [Configuration Options](#configuration-options)
8. [Enterprise Patterns](#enterprise-patterns)
9. [Integration Patterns](#integration-patterns)
   - [With Ralph](#with-ralph)
   - [With Gas Town](#with-gas-town)
   - [With CC-Mirror](#with-cc-mirror)
   - [Combination Matrix](#combination-matrix)
10. [Mental Models](#mental-models)
11. [Checkpoints](#checkpoints)
12. [Troubleshooting](#troubleshooting)
13. [Architecture Decision Records](#architecture-decision-records)
14. [Performance Benchmarks](#performance-benchmarks)
15. [Source Attribution](#source-attribution)

---

## You Are Here

```
                        The Enterprise Orchestration Landscape

    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                      │
    │   FACTORY SCALE                                                      │
    │   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
    │   │   Gas Town      │  │  Claude-Flow    │  │   Custom        │     │
    │   │  (8 Roles)      │  │  (54+ Agents)   │  │   Factory       │     │
    │   │  Go Runtime     │  │  Node.js + MCP  │  │   Patterns      │     │
    │   └─────────────────┘  └────────┬────────┘  └─────────────────┘     │
    │                                 │                                    │
    │                                 │ <-- YOU ARE HERE                   │
    │                                 │                                    │
    │   MULTI-AGENT                   │                                    │
    │   ┌─────────────────────────────┴───────────────────────────────┐   │
    │   │            CC Mirror / Parallel Orchestration                │   │
    │   └─────────────────────────────────────────────────────────────┘   │
    │                                 │                                    │
    │   AUTONOMOUS LOOPS              │                                    │
    │   ┌─────────────────────────────┴───────────────────────────────┐   │
    │   │                     Ralph Wiggum Pattern                     │   │
    │   └─────────────────────────────────────────────────────────────┘   │
    │                                 │                                    │
    │   SINGLE AGENT                  │                                    │
    │   ┌─────────────────────────────┴───────────────────────────────┐   │
    │   │              Claude Code (Vanilla Workflows)                 │   │
    │   └─────────────────────────────────────────────────────────────┘   │
    │                                                                      │
    └─────────────────────────────────────────────────────────────────────┘
```

**What this document covers:**

Claude-Flow v3 is an **enterprise-grade multi-agent orchestration platform** that transforms Claude Code into a coordinated swarm intelligence system. This extraction covers:

- Complete architectural breakdown (7 layers)
- Hive-mind coordination with Queen-led swarms
- Self-learning neural architecture (SONA)
- 54+ specialized agents across 5 domains
- 170+ MCP tools for Claude Code integration
- 37 skills for specialized workflows
- Enterprise deployment patterns
- Integration with Ralph, Gas Town, and CC-Mirror

**Prerequisites for this document:**

- Understanding of Claude Code basics
- Familiarity with MCP (Model Context Protocol)
- Node.js 20+ runtime
- Optional: Experience with multi-agent systems

**What makes Claude-Flow different:**

| Aspect | Standard Claude Code | Claude-Flow v3 |
|--------|---------------------|----------------|
| Agents | Single session | 54+ coordinated agents |
| Memory | Context window only | HNSW vector search (150x-12,500x faster) |
| Learning | None | Self-optimizing (SONA) |
| Consensus | N/A | Raft, Byzantine, Gossip protocols |
| Topology | Linear | Hierarchical, Mesh, Ring, Star, Hybrid |
| Cost | Manual optimization | 75% reduction via intelligent routing |

---

## What Claude-Flow Is

### The Elevator Pitch

Claude-Flow v3 is a **production-ready framework** for deploying and coordinating multiple AI agents in intelligent swarms. It provides:

1. **Swarm Intelligence** - 54+ agents working in coordinated colonies
2. **Self-Learning** - Patterns that improve with each execution
3. **Fault Tolerance** - Byzantine fault-tolerant consensus
4. **Enterprise Security** - CVE-hardened with threat detection
5. **Multi-Provider** - Routes across Claude, GPT, Gemini, Cohere, Ollama

### The Core Philosophy

> "Claude Flow coordinates, Claude Code creates."

The critical insight: **MCP tools ONLY COORDINATE** while **Claude Code handles ALL EXECUTION**.

This is implemented through a **single-message pattern**:

```typescript
// WRONG: Separate messages
await mcpInit();      // Message 1
await spawnAgents();  // Message 2

// RIGHT: Same message - MCP + Task Tool together
await mcpInit();
await taskTool.spawn([agent1, agent2, agent3]); // Same response
```

### What Problem Does It Solve?

**Before Claude-Flow:**
- Single Claude instance handles everything
- Context degradation over long sessions
- Manual task routing
- No persistent learning
- No fault tolerance

**After Claude-Flow:**
- 54+ specialized agents with clear roles
- Fresh context per agent (no degradation)
- Intelligent Q-Learning routing
- Patterns improve over time (SONA)
- Byzantine fault tolerance with 5 consensus algorithms

### The 54+ Agent Roster

Claude-Flow deploys agents across 5 domains:

| Domain | Agent Types | Purpose |
|--------|-------------|---------|
| **Queen** | Strategic, Tactical, Adaptive | High-level coordination |
| **Security** | Security Architect | Vulnerability analysis |
| **Core** | Coder, Tester, Reviewer, Architect | Development lifecycle |
| **Integration** | Documentation, Optimizer | Cross-cutting concerns |
| **Support** | Researcher, Analyst | Information gathering |

The 8 core worker types:
1. **Researcher** - Information gathering and analysis
2. **Coder** - Code generation and refactoring
3. **Analyst** - Data analysis and pattern recognition
4. **Tester** - Testing and quality assurance
5. **Architect** - System design and API design
6. **Reviewer** - Code review and quality assessment
7. **Optimizer** - Performance optimization
8. **Documenter** - Documentation generation

---

## Why It Matters

### Enterprise-Grade Patterns You Cannot Build Easily

Claude-Flow provides capabilities that would take months to build from scratch:

**1. Self-Learning Agent Routing**

Traditional routing is static. Claude-Flow learns:

```
Initial: Route all code tasks → Coder agent
After 100 tasks:
  - Route Python tasks → Coder-Python (87% success)
  - Route TypeScript tasks → Coder-TS (91% success)
  - Route refactoring → Coder-Refactor (94% success)
```

**2. Catastrophic Forgetting Prevention**

AI systems typically forget old patterns when learning new ones. Claude-Flow uses **EWC++ (Elastic Weight Consolidation)** to maintain 95%+ knowledge retention:

```
Without EWC++:
  Learn Pattern A → 90% accuracy
  Learn Pattern B → Pattern A drops to 45%

With EWC++:
  Learn Pattern A → 90% accuracy
  Learn Pattern B → Pattern A stays at 88%
```

**3. Byzantine Fault Tolerance**

When agents disagree or fail, consensus algorithms resolve:

```
Scenario: 3 of 8 agents give wrong output (malicious or buggy)

Byzantine Consensus:
1. All agents vote on outcome
2. Supermajority (66%) required for acceptance
3. Faulty agents isolated and flagged
4. Correct result propagates to system
```

**4. Cost Optimization (75% Reduction)**

Three-tier intelligent routing:

```
┌─────────────────────────────────────────────────────────────┐
│                    TASK COMPLEXITY ROUTER                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Simple transforms    → Agent Booster (WASM)               │
│   (rename, format)       <1ms, $0                           │
│                                                              │
│   Low complexity       → Haiku                              │
│   (simple fixes)         ~100ms, $0.001                     │
│                                                              │
│   Complex reasoning    → Sonnet/Opus                        │
│   (architecture)         ~2s, $0.05                         │
│                                                              │
│   Result: 75% API cost reduction                            │
│   Claude Max quota extended 250%                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Performance Improvements Over Standard Approaches

| Metric | Standard | Claude-Flow v3 | Improvement |
|--------|----------|----------------|-------------|
| Vector search | Sequential | HNSW indexed | 150x-12,500x faster |
| Task routing | Manual | Q-Learning | 89% accuracy |
| Pattern retrieval | Linear scan | RuVector | ~61us latency |
| Memory usage | Full precision | LoRA compressed | 128x compression |
| Attention computation | Standard | Flash Attention | 2.49x-7.47x faster |
| SWE-Bench score | ~49% (vanilla) | 84.8% | 72% improvement |

---

## Architecture Deep Dive

### Seven-Layer Architecture

Claude-Flow implements a sophisticated 7-layer architecture:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CLAUDE-FLOW v3 ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  LAYER 1: ENTRY                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ CLI Interface ──────► MCP Server ──────► AIDefence Security        │ │
│  │   (26 commands)    (stdio/HTTP/WS)      (threat detection <10ms)   │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 2: ROUTING                                                        │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Q-Learning      Mixture of       42+ Skills      17 Hooks         │ │
│  │   Router       Experts (8)                                         │ │
│  │  (adaptive)   (specialized)    (domain tasks)  (lifecycle)         │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 3: SWARM COORDINATION                                             │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Topologies: Hierarchical │ Mesh │ Ring │ Star │ Hybrid            │ │
│  │  Consensus: Raft │ Byzantine │ Gossip │ PBFT │ Tendermint          │ │
│  │  Scale: 15 agents default, configurable to 100+                    │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 4: AGENT LAYER                                                    │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  54+ Specialized Agents across 5 Domains                           │ │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │ │
│  │  │  Queen  │ │Security │ │  Core   │ │ Integr. │ │ Support │      │ │
│  │  │ (3 types)│ │(1 type) │ │(4 types)│ │(2 types)│ │(2 types)│      │ │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘      │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 5: INTELLIGENCE (RuVector)                                        │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  SONA (Self-Optimizing)    EWC++ (Anti-Forgetting)                 │ │
│  │  Flash Attention (2.49x-7.47x speedup)                             │ │
│  │  Vector Search (150x-12,500x acceleration)                         │ │
│  │  LoRA/MicroLoRA (128x compression)                                 │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 6: RESOURCES                                                      │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Multi-Provider LLM          AgentDB Memory        12 Background   │ │
│  │  (Claude, GPT, Gemini,      (HNSW + SQLite)        Workers         │ │
│  │   Cohere, Ollama)           (8 memory types)     (auto-triggered)  │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                    │                                     │
│                                    ▼                                     │
│  LAYER 7: LEARNING LOOP                                                  │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  RETRIEVE → JUDGE → DISTILL → CONSOLIDATE → ROUTE                  │ │
│  │     │          │         │          │           │                  │ │
│  │  Find similar  Evaluate  Extract    Prevent     Update             │ │
│  │  patterns      outcomes  learnings  forgetting  routing            │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Hive-Mind Swarm Coordination

The **Queen-led swarm model** is the heart of Claude-Flow's coordination:

#### Three Queen Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         QUEEN COORDINATION HIERARCHY                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                        ┌───────────────────┐                             │
│                        │  STRATEGIC QUEEN  │                             │
│                        │   (Planning)      │                             │
│                        └─────────┬─────────┘                             │
│                                  │                                       │
│                                  │ Decompose tasks                       │
│                                  │ Set priorities                        │
│                                  │ Allocate resources                    │
│                                  ▼                                       │
│           ┌──────────────────────┴───────────────────────┐              │
│           │                                              │               │
│           ▼                                              ▼               │
│   ┌───────────────────┐                      ┌───────────────────┐      │
│   │  TACTICAL QUEEN   │                      │  ADAPTIVE QUEEN   │      │
│   │  (Execution)      │                      │  (Optimization)   │      │
│   └─────────┬─────────┘                      └─────────┬─────────┘      │
│             │                                          │                 │
│             │ Assign workers                           │ Monitor perf    │
│             │ Track progress                           │ Adjust routing  │
│             │ Handle failures                          │ Learn patterns  │
│             ▼                                          ▼                 │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │                        8 WORKER TYPES                            │   │
│   │  Researcher │ Coder │ Analyst │ Tester │ Architect │ ...        │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Swarm Topologies

Claude-Flow supports 5 coordination topologies:

| Topology | Best For | Max Agents | Latency | Use Case |
|----------|----------|------------|---------|----------|
| **Hierarchical** | Queen-led coordination | 100+ | 15-35ms | Enterprise default |
| **Mesh** | Distributed workloads | 20 | 10-40ms | Decentralized tasks |
| **Centralized** | Simple coordination | 50 | 10-20ms | Single-focus projects |
| **Ring** | Pipeline processing | 30 | 20-30ms | Sequential workflows |
| **Hybrid** | Large mixed workloads | 200+ | 20-50ms | Factory-scale |

**Configuration Example:**

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'hierarchical',
    maxAgents: 100,
    domains: ['queen', 'security', 'core', 'integration', 'support']
  },
  consensus: {
    algorithm: 'raft',        // Default: strong consistency
    threshold: 0.66,          // Supermajority
    timeout: 5000             // 5s consensus timeout
  },
  scaling: {
    minAgents: 5,
    maxAgents: 100,
    autoScale: true,
    scaleThreshold: 0.8       // Scale up at 80% utilization
  }
});
```

#### Consensus Algorithms

**1. Raft (Default)**
- Leader-based with strong consistency
- Best for: Most enterprise use cases
- Trade-off: Higher latency, guaranteed consistency

```typescript
// Raft consensus configuration
const raftConfig = {
  algorithm: 'raft',
  electionTimeout: 150,       // ms
  heartbeatInterval: 50,      // ms
  logReplication: true
};
```

**2. Byzantine Fault Tolerant (BFT)**
- Handles malicious/buggy agents
- Best for: Untrusted environments
- Trade-off: Highest overhead, maximum safety

```typescript
// Byzantine consensus configuration
const bftConfig = {
  algorithm: 'byzantine',
  faultTolerance: 0.33,       // Tolerates up to 1/3 faulty
  viewChange: true,
  timeout: 10000              // Longer timeout for consensus
};
```

**3. Gossip Protocol**
- Eventual consistency for large swarms
- Best for: 100+ agent deployments
- Trade-off: Faster, but eventual (not immediate) consistency

```typescript
// Gossip consensus configuration
const gossipConfig = {
  algorithm: 'gossip',
  fanout: 3,                  // Number of peers to gossip to
  interval: 100,              // ms between rounds
  convergenceThreshold: 0.99  // 99% agreement
};
```

### AgentDB + ReasoningBank

The memory system combines **structured storage** (SQLite) with **semantic search** (HNSW vectors):

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HYBRID MEMORY ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌─────────────────────────────┐    ┌─────────────────────────────┐    │
│   │         AgentDB             │    │       ReasoningBank          │    │
│   │    (Vector Storage)         │    │    (Pattern Storage)         │    │
│   ├─────────────────────────────┤    ├─────────────────────────────┤    │
│   │                             │    │                              │    │
│   │  HNSW Index                 │    │  Trajectory Learning         │    │
│   │  ├─ Cosine distance         │    │  ├─ Execution paths          │    │
│   │  ├─ Euclidean distance      │    │  ├─ Rewards mapping          │    │
│   │  ├─ Dot product             │    │  └─ State embeddings         │    │
│   │  └─ Manhattan distance      │    │                              │    │
│   │                             │    │  Pattern Phases:             │    │
│   │  Quantization:              │    │  ├─ RETRIEVE                 │    │
│   │  ├─ Binary (32x compress)   │    │  ├─ JUDGE                    │    │
│   │  ├─ Scalar (4x compress)    │    │  ├─ DISTILL                  │    │
│   │  └─ Product (8x compress)   │    │  └─ CONSOLIDATE              │    │
│   │                             │    │                              │    │
│   │  Performance:               │    │  Query Latency: 2-3ms        │    │
│   │  150x-12,500x faster        │    │  Embedding: 1024-dim         │    │
│   │                             │    │                              │    │
│   └─────────────────────────────┘    └─────────────────────────────┘    │
│                    │                              │                      │
│                    └──────────────┬───────────────┘                      │
│                                   │                                      │
│                                   ▼                                      │
│                    ┌─────────────────────────────┐                       │
│                    │        SQLite Backend       │                       │
│                    │    (Structured Queries)     │                       │
│                    │                             │                       │
│                    │  8 Memory Types:            │                       │
│                    │  ├─ Episodic (experiences)  │                       │
│                    │  ├─ Semantic (knowledge)    │                       │
│                    │  ├─ Procedural (how-to)     │                       │
│                    │  ├─ Working (active)        │                       │
│                    │  ├─ Long-term (persistent)  │                       │
│                    │  ├─ Meta (about memory)     │                       │
│                    │  ├─ Context (situational)   │                       │
│                    │  └─ Cache (LRU, TTL)        │                       │
│                    └─────────────────────────────┘                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Query Builder API:**

```typescript
import { QueryBuilder } from '@claude-flow/memory';

// Semantic search with filters
const results = await QueryBuilder
  .create()
  .semantic('user authentication patterns')
  .filter({ type: 'procedural', domain: 'security' })
  .limit(10)
  .threshold(0.85)  // Minimum similarity
  .execute();

// Combined semantic + keyword search
const hybridResults = await QueryBuilder
  .create()
  .semantic('deployment strategies')
  .keyword('kubernetes')
  .filter({ agent: 'architect' })
  .execute();
```

### RuVector PostgreSQL Integration

For enterprise deployments, RuVector provides 77+ SQL functions:

```sql
-- Create RuVector extension
CREATE EXTENSION IF NOT EXISTS ruvector VERSION '0.1.0';

-- Store embeddings
INSERT INTO embeddings (content, embedding)
VALUES ('pattern description',
        ruvector('[0.1, 0.2, 0.3, ...]'::ruvector));

-- Semantic search (cosine distance)
SELECT content, embedding <=> query_embedding AS distance
FROM embeddings
ORDER BY distance
LIMIT 10;

-- HNSW index for acceleration
CREATE INDEX ON embeddings
USING hnsw (embedding ruvector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

**Performance metrics:**
- Search latency: ~61 microseconds
- Throughput: 16,400 QPS
- Distance operators: `<=>` (cosine), `<->` (L2), `<#>` (inner product)

### SONA Architecture

**Self-Optimizing Neural Architecture** is Claude-Flow's learning engine:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              SONA LEARNING LOOP                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │                         TASK ARRIVES                             │   │
│   └───────────────────────────────┬─────────────────────────────────┘   │
│                                   │                                      │
│                                   ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  STEP 1: RETRIEVE                                                │   │
│   │  ├─ Search similar past patterns                                 │   │
│   │  ├─ Vector similarity threshold: 0.85                            │   │
│   │  └─ Return top-K (default: 5) matches                            │   │
│   └───────────────────────────────┬─────────────────────────────────┘   │
│                                   │                                      │
│                                   ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  STEP 2: JUDGE                                                   │   │
│   │  ├─ Evaluate outcome quality (0.0 - 1.0)                         │   │
│   │  ├─ Compare against historical patterns                          │   │
│   │  └─ Record trajectory with reward signal                         │   │
│   └───────────────────────────────┬─────────────────────────────────┘   │
│                                   │                                      │
│                                   ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  STEP 3: DISTILL                                                 │   │
│   │  ├─ Extract successful patterns                                  │   │
│   │  ├─ Identify failure modes                                       │   │
│   │  └─ Generate routing recommendations                             │   │
│   └───────────────────────────────┬─────────────────────────────────┘   │
│                                   │                                      │
│                                   ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  STEP 4: CONSOLIDATE (EWC++)                                     │   │
│   │  ├─ Update knowledge without forgetting                          │   │
│   │  ├─ Fisher information weighting                                 │   │
│   │  └─ Online consolidation (95%+ retention)                        │   │
│   └───────────────────────────────┬─────────────────────────────────┘   │
│                                   │                                      │
│                                   ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  STEP 5: ROUTE                                                   │   │
│   │  ├─ Update Q-Learning router                                     │   │
│   │  ├─ Adjust agent weights based on success                        │   │
│   │  └─ Similar tasks → proven agents                                │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│   Adaptation Time: <0.05ms                                               │
│   Knowledge Retention: 95%+                                              │
│   Routing Accuracy: 89%                                                  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Five Operating Modes:**

| Mode | Latency | Quality | Use Case |
|------|---------|---------|----------|
| **Real-time** | <0.5ms | 70%+ | Live interactions |
| **Balanced** | <18ms | 75%+ | Default operations |
| **Research** | <100ms | 95%+ | Deep analysis |
| **Edge** | <1ms | 80%+ | Resource-constrained |
| **Batch** | <50ms | 85%+ | Bulk processing |

**Configuration Example:**

```typescript
import { SONAManager } from '@claude-flow/neural';

const sona = new SONAManager({
  mode: 'balanced',
  reinforcementAlgorithm: 'PPO',  // Or: A2C, DQN, SAC, TD3, etc.
  ewc: {
    enabled: true,
    lambda: 5000,                  // EWC regularization strength
    onlineConsolidation: true
  },
  lora: {
    enabled: true,
    rank: 8,
    alpha: 16,
    targetModules: ['query', 'value']
  }
});

// Record a trajectory
sona.recordStep({
  state: currentState,
  action: selectedAction,
  reward: outcomeReward,
  nextState: resultingState
});

// Get similar patterns
const patterns = await sona.findSimilar(taskEmbedding, { topK: 5 });
```

### Skills System (37 Skills)

Claude-Flow provides 37 specialized skills organized by category:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           37 AVAILABLE SKILLS                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   AgentDB Skills (5)                                                     │
│   ├─ agentdb-advanced          Advanced memory operations                │
│   ├─ agentdb-learning          Learning pattern storage                  │
│   ├─ agentdb-memory-patterns   Memory pattern recognition                │
│   ├─ agentdb-optimization      Memory performance tuning                 │
│   └─ agentdb-vector-search     HNSW vector search                        │
│                                                                          │
│   Flow-Nexus Skills (3)                                                  │
│   ├─ flow-nexus-neural         Neural integration                        │
│   ├─ flow-nexus-platform       Platform management                       │
│   └─ flow-nexus-swarm          Swarm coordination                        │
│                                                                          │
│   GitHub Integration Skills (5)                                          │
│   ├─ github-code-review        Automated code review                     │
│   ├─ github-multi-repo         Multi-repository operations               │
│   ├─ github-project-management Project tracking                          │
│   ├─ github-release-management Release automation                        │
│   └─ github-workflow-automation CI/CD workflow automation                │
│                                                                          │
│   Advanced Coordination Skills (6)                                       │
│   ├─ agentic-jujutsu           Git jujutsu integration                   │
│   ├─ hive-mind-advanced        Advanced hive-mind patterns               │
│   ├─ swarm-advanced            Complex swarm operations                  │
│   ├─ swarm-orchestration       Swarm lifecycle management                │
│   ├─ v3-swarm-coordination     V3-specific coordination                  │
│   └─ pair-programming          Human-agent pairing                       │
│                                                                          │
│   V3 Implementation Skills (8)                                           │
│   ├─ v3-cli-modernization      CLI improvements                          │
│   ├─ v3-core-implementation    Core framework development                │
│   ├─ v3-ddd-architecture       Domain-driven design                      │
│   ├─ v3-integration-deep       Deep integration patterns                 │
│   ├─ v3-mcp-optimization       MCP performance tuning                    │
│   ├─ v3-memory-unification     Unified memory system                     │
│   ├─ v3-performance-optimization Performance improvements                │
│   └─ v3-security-overhaul      Security hardening                        │
│                                                                          │
│   Supporting Skills (10)                                                 │
│   ├─ hooks-automation          Lifecycle hook automation                 │
│   ├─ performance-analysis      Performance profiling                     │
│   ├─ reasoningbank-agentdb     ReasoningBank integration                 │
│   ├─ reasoningbank-intelligence Intelligence patterns                    │
│   ├─ skill-builder             Custom skill creation                     │
│   ├─ sparc-methodology         SPARC workflow                            │
│   ├─ stream-chain              Streaming chains                          │
│   ├─ verification-quality      Quality verification                      │
│   ├─ worker-benchmarks         Worker performance testing                │
│   └─ worker-integration        Worker system integration                 │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### MCP Tools (170+)

Claude-Flow exposes 170+ tools via Model Context Protocol:

#### Core Tool Categories

**Agent Tools:**
```typescript
// Spawn a specialized agent
mcp__claude_flow__agent_spawn({
  type: 'coder',
  task: 'Implement user authentication',
  config: {
    model: 'claude-sonnet-4',
    maxTokens: 8000,
    temperature: 0.7
  }
});

// List active agents
mcp__claude_flow__agent_list({
  filter: { status: 'active', domain: 'core' },
  pagination: { limit: 20, offset: 0 }
});

// Terminate an agent
mcp__claude_flow__agent_terminate({
  agentId: 'agent-123',
  graceful: true,
  timeout: 5000
});
```

**Swarm Tools:**
```typescript
// Initialize a swarm
mcp__claude_flow__swarm_init({
  topology: 'hierarchical',
  agents: 15,
  domains: ['queen', 'core', 'support'],
  consensus: 'raft'
});

// Check swarm status
mcp__claude_flow__swarm_status();
// Returns: { agents: 15, active: 12, consensus: 'achieved', health: 0.94 }

// Scale the swarm
mcp__claude_flow__swarm_scale({
  targetAgents: 30,
  strategy: 'gradual',
  domains: ['core']  // Only scale core domain
});
```

**Memory Tools:**
```typescript
// Store a memory
mcp__claude_flow__memory_store({
  content: 'User prefers TypeScript for new projects',
  type: 'semantic',
  metadata: { source: 'user-preference', confidence: 0.95 }
});

// Search memories with HNSW acceleration
mcp__claude_flow__memory_search({
  query: 'user coding preferences',
  type: 'semantic',
  limit: 5,
  threshold: 0.8
});

// List memories with filters
mcp__claude_flow__memory_list({
  filter: { type: 'procedural', agent: 'coder' },
  sort: 'relevance',
  limit: 20
});
```

**Hooks Tools:**
```typescript
// Register a lifecycle hook
mcp__claude_flow__hooks_route({
  event: 'task.complete',
  handler: 'pattern-learning',
  config: { learnFrom: 'success-only' }
});

// Consensus voting
mcp__claude_flow__consensus_vote({
  proposal: 'merge-feature-branch',
  voters: ['reviewer-1', 'reviewer-2', 'reviewer-3'],
  threshold: 0.66
});
```

**Configuration Tools:**
```typescript
// Load configuration
mcp__claude_flow__config_load({
  path: './claude-flow.config.json',
  validate: true
});

// Save configuration with backup
mcp__claude_flow__config_save({
  backup: true,
  format: 'json'
});

// Validate configuration
mcp__claude_flow__config_validate({
  autoFix: true,
  strict: false
});
```

---

## Key Features

### 1. Self-Learning System

```typescript
// The learning cycle happens automatically
// But you can inspect and tune it:

import { SONAManager, TrajectoryStore } from '@claude-flow/neural';

const sona = new SONAManager({ mode: 'balanced' });

// View learned patterns
const patterns = await sona.getLearnedPatterns({
  domain: 'code-generation',
  minSuccess: 0.8
});

console.log(patterns);
// [
//   { pattern: 'TypeScript + Zod validation', successRate: 0.94, uses: 127 },
//   { pattern: 'React hooks + useCallback', successRate: 0.89, uses: 84 },
//   ...
// ]

// Force pattern consolidation
await sona.consolidate({
  ewcLambda: 5000,
  pruneThreshold: 0.5  // Remove patterns below 50% success
});
```

### 2. Multi-Provider LLM Routing

```typescript
// Automatic routing based on task complexity
const llmRouter = createLLMRouter({
  providers: [
    { name: 'claude', models: ['opus-4.5', 'sonnet-4', 'haiku-3.5'] },
    { name: 'openai', models: ['gpt-4o', 'gpt-4o-mini'] },
    { name: 'gemini', models: ['gemini-2-flash', 'gemini-2-pro'] },
    { name: 'ollama', models: ['llama-3.3-70b', 'codellama'] }
  ],
  strategy: 'cost-optimized',  // Or: 'quality-first', 'balanced'
  fallback: {
    enabled: true,
    order: ['claude', 'openai', 'gemini', 'ollama']
  }
});

// Simple task → Haiku or GPT-4o-mini
// Complex task → Opus or GPT-4o
// Local-only → Ollama
```

### 3. Fault Tolerance

```typescript
// Byzantine fault tolerance for critical operations
const criticalTask = await executeWithConsensus({
  task: 'Deploy to production',
  agents: ['deployer-1', 'deployer-2', 'deployer-3', 'deployer-4'],
  consensus: {
    algorithm: 'byzantine',
    threshold: 0.75,  // Need 3/4 agreement
    timeout: 30000
  },
  onDisagreement: 'escalate-to-human'
});

// Result:
// {
//   consensus: true,
//   votes: { approve: 4, reject: 0 },
//   confidence: 1.0,
//   executionAllowed: true
// }
```

### 4. Security Hardening

```typescript
import {
  PasswordHasher,
  SafeExecutor,
  PathValidator,
  InputValidator
} from '@claude-flow/security';

// Secure password hashing (bcrypt, 12+ rounds)
const hasher = new PasswordHasher({ rounds: 12 });
const hash = await hasher.hash('user-password');

// Safe command execution (allowlist-based)
const executor = new SafeExecutor({
  allowlist: ['git', 'npm', 'node', 'tsc'],
  timeout: 30000,
  cwd: '/project'
});
await executor.run('git status');  // Allowed
await executor.run('rm -rf /');    // BLOCKED

// Path traversal prevention
const pathValidator = new PathValidator({
  root: '/project',
  allowSymlinks: false
});
pathValidator.validate('../../etc/passwd');  // Throws SecurityError

// Input validation (Zod-based)
const validator = new InputValidator();
validator.email('user@example.com');        // Valid
validator.password('weak');                 // Throws: Too short
```

### 5. Agent Booster (WASM)

For simple transformations, skip the LLM entirely:

```typescript
import { AgentBooster } from '@claude-flow/performance';

const booster = new AgentBooster();

// <1ms transformations
const result = booster.transform({
  type: 'rename-variable',
  code: 'const foo = 1; console.log(foo);',
  from: 'foo',
  to: 'bar'
});
// Result: 'const bar = 1; console.log(bar);'

// Supported transforms:
// - rename-variable
// - format-code
// - add-import
// - remove-import
// - extract-function
// - inline-function
// - toggle-comment
```

---

## Installation and Setup

### Prerequisites

- **Node.js:** 20.0.0 or higher (required)
- **Claude Code:** Installed globally
- **Optional:** Docker (for RuVector PostgreSQL)

### Basic Installation

```bash
# Install claude-flow globally
npm install -g claude-flow@v3alpha

# Initialize in your project
npx claude-flow@v3alpha init

# Or with wizard for guided setup
npx claude-flow@v3alpha init --wizard
```

### MCP Integration with Claude Code

```bash
# Add claude-flow as MCP server
claude mcp add claude-flow -- npx -y claude-flow@v3alpha

# Verify installation
claude mcp list
# Should show: claude-flow (stdio)

# Start MCP server
npx claude-flow@v3alpha mcp start
```

### Configuration File

After initialization, `claude-flow.config.json` is created:

```json
{
  "version": "3.0.0",
  "topology": {
    "type": "hierarchical",
    "maxAgents": 15,
    "domains": ["queen", "security", "core", "integration", "support"]
  },
  "consensus": {
    "algorithm": "raft",
    "threshold": 0.66,
    "timeout": 5000
  },
  "memory": {
    "backend": "hybrid",
    "hnsw": {
      "m": 16,
      "efConstruction": 200,
      "efSearch": 100
    },
    "cache": {
      "size": 1000,
      "ttl": 3600
    }
  },
  "learning": {
    "mode": "balanced",
    "ewc": {
      "enabled": true,
      "lambda": 5000
    },
    "lora": {
      "enabled": true,
      "rank": 8
    }
  },
  "providers": {
    "primary": "claude",
    "fallback": ["openai", "gemini"],
    "routing": "cost-optimized"
  },
  "security": {
    "threatDetection": true,
    "inputValidation": true,
    "pathTraversal": true
  }
}
```

### Docker Setup (RuVector PostgreSQL)

For enterprise deployments with PostgreSQL:

```bash
# Quick setup via CLI
npx claude-flow ruvector setup --output ./my-ruvector
cd my-ruvector
docker-compose up -d

# Or manually
git clone https://github.com/ruvnet/claude-flow.git
cd claude-flow/docs/ruvector-postgres
docker-compose up -d

# Connection details:
# Host: localhost
# Port: 5432
# Database: claude_flow
# User: claude
# Password: claude-flow-test
```

---

## Configuration Options

### Environment Variables (50+)

```bash
# Core settings
CLAUDE_FLOW_MODE=production
CLAUDE_FLOW_LOG_LEVEL=info
CLAUDE_FLOW_PORT=3000

# Memory configuration
CLAUDE_FLOW_MEMORY_BACKEND=hybrid
CLAUDE_FLOW_HNSW_M=16
CLAUDE_FLOW_HNSW_EF_CONSTRUCTION=200
CLAUDE_FLOW_CACHE_SIZE=1000
CLAUDE_FLOW_CACHE_TTL=3600

# Swarm configuration
CLAUDE_FLOW_TOPOLOGY=hierarchical
CLAUDE_FLOW_MAX_AGENTS=15
CLAUDE_FLOW_CONSENSUS=raft
CLAUDE_FLOW_CONSENSUS_THRESHOLD=0.66

# Learning configuration
CLAUDE_FLOW_LEARNING_MODE=balanced
CLAUDE_FLOW_EWC_ENABLED=true
CLAUDE_FLOW_EWC_LAMBDA=5000
CLAUDE_FLOW_LORA_ENABLED=true
CLAUDE_FLOW_LORA_RANK=8

# Provider configuration
CLAUDE_FLOW_PRIMARY_PROVIDER=claude
CLAUDE_FLOW_FALLBACK_PROVIDERS=openai,gemini
CLAUDE_FLOW_ROUTING_STRATEGY=cost-optimized

# Security configuration
CLAUDE_FLOW_THREAT_DETECTION=true
CLAUDE_FLOW_INPUT_VALIDATION=true
CLAUDE_FLOW_PATH_TRAVERSAL_PROTECTION=true

# Database (for RuVector)
CLAUDE_FLOW_DB_HOST=localhost
CLAUDE_FLOW_DB_PORT=5432
CLAUDE_FLOW_DB_NAME=claude_flow
CLAUDE_FLOW_DB_USER=claude
CLAUDE_FLOW_DB_PASSWORD=your-password
```

### Anti-Drift Configuration

The recommended configuration to prevent goal/context drift:

```json
{
  "antiDrift": {
    "topology": "hierarchical",
    "strategy": "specialized",
    "maxTeamSize": 8,
    "consensus": "raft",
    "validation": {
      "centralCoordinator": true,
      "objectiveTracking": true,
      "driftThreshold": 0.15
    }
  }
}
```

**Why these settings prevent drift:**

1. **Hierarchical topology** - Single coordinator validates all outputs
2. **Specialized strategy** - Clear, non-overlapping roles reduce confusion
3. **Small team size (8 max)** - Reduces coordination overhead
4. **Raft consensus** - Maintains authoritative state via leader

---

## Enterprise Patterns

### Pattern 1: Microservice Development Team

```typescript
// Deploy a team for microservice development
const team = await claude_flow.deployTeam({
  name: 'user-service-team',
  topology: 'hierarchical',
  agents: [
    { type: 'architect', focus: 'api-design' },
    { type: 'coder', focus: 'typescript', count: 3 },
    { type: 'tester', focus: 'integration', count: 2 },
    { type: 'reviewer', focus: 'security' },
    { type: 'documenter', focus: 'openapi' }
  ],
  coordination: {
    queen: 'tactical',
    consensus: 'raft',
    communicationPattern: 'hub-and-spoke'
  }
});

// Assign work
await team.assignTask({
  description: 'Build user authentication service',
  subtasks: [
    'Design REST API endpoints',
    'Implement JWT authentication',
    'Create user CRUD operations',
    'Write integration tests',
    'Generate OpenAPI documentation'
  ],
  constraints: {
    language: 'TypeScript',
    framework: 'Fastify',
    database: 'PostgreSQL',
    deadline: '2 hours'
  }
});
```

### Pattern 2: Legacy Code Migration

```typescript
// Swarm for migrating legacy code
const migrationSwarm = await claude_flow.createSwarm({
  name: 'legacy-migration',
  topology: 'mesh',  // Distributed for parallel analysis
  agents: [
    { type: 'analyst', count: 3, focus: 'code-understanding' },
    { type: 'architect', focus: 'migration-planning' },
    { type: 'coder', count: 5, focus: 'refactoring' },
    { type: 'tester', count: 3, focus: 'regression' }
  ],
  memory: {
    shared: true,  // All agents see same patterns
    persistPatterns: true
  }
});

// Phase 1: Analysis
await migrationSwarm.phase('analyze', {
  input: './legacy-codebase',
  outputs: ['dependency-graph', 'complexity-report', 'risk-assessment']
});

// Phase 2: Planning
await migrationSwarm.phase('plan', {
  strategy: 'strangler-fig',
  prioritization: 'risk-based'
});

// Phase 3: Migration
await migrationSwarm.phase('migrate', {
  parallel: true,
  batchSize: 10,  // 10 files at a time
  verification: 'after-each-batch'
});
```

### Pattern 3: Security Audit Pipeline

```typescript
// Security-focused swarm
const securityAudit = await claude_flow.createPipeline({
  name: 'security-audit',
  stages: [
    {
      name: 'static-analysis',
      agent: 'security-architect',
      tools: ['semgrep', 'bandit', 'eslint-security'],
      output: 'vulnerability-report'
    },
    {
      name: 'dependency-audit',
      agent: 'analyst',
      tools: ['npm-audit', 'snyk'],
      output: 'dependency-report'
    },
    {
      name: 'code-review',
      agents: ['reviewer', 'reviewer'],  // Two reviewers
      focus: 'security-patterns',
      consensus: 'both-must-approve'
    },
    {
      name: 'remediation',
      agent: 'coder',
      input: ['vulnerability-report', 'dependency-report'],
      autoFix: {
        severity: ['critical', 'high'],
        humanApproval: 'critical-only'
      }
    }
  ]
});

// Run the pipeline
const auditResult = await securityAudit.run({
  target: './src',
  severity: 'medium+',
  reportFormat: 'sarif'
});
```

### Pattern 4: Continuous Documentation

```typescript
// Documentation swarm that runs continuously
const docSwarm = await claude_flow.createDaemon({
  name: 'doc-maintenance',
  trigger: 'file-change',
  watchPaths: ['./src/**/*.ts', './src/**/*.tsx'],
  agents: [
    { type: 'analyst', focus: 'code-changes' },
    { type: 'documenter', focus: 'api-docs' },
    { type: 'documenter', focus: 'user-guides' }
  ],
  actions: [
    {
      on: 'function-changed',
      do: 'update-jsdoc',
      condition: 'public-api-only'
    },
    {
      on: 'new-file',
      do: 'generate-module-doc',
      template: 'module-readme'
    },
    {
      on: 'api-changed',
      do: 'update-openapi',
      notify: 'api-team'
    }
  ]
});
```

---

## Integration Patterns

### With Ralph

Claude-Flow can orchestrate Ralph loops at enterprise scale:

#### Enterprise Ralph Configuration

```bash
#!/bin/bash
# enterprise-ralph.sh
# Ralph loop with Claude-Flow orchestration

set -e

MAX_ITERATIONS=${1:-20}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Initialize Claude-Flow swarm
npx claude-flow@v3alpha swarm init \
  --topology hierarchical \
  --agents 8 \
  --consensus raft

echo "Starting Enterprise Ralph with Claude-Flow orchestration"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="

  # Use Claude-Flow for task routing
  AGENT=$(npx claude-flow@v3alpha route-task \
    --prompt "$SCRIPT_DIR/prompt.md" \
    --strategy learned)

  echo "Routing to agent: $AGENT"

  # Execute with selected agent
  OUTPUT=$(npx claude-flow@v3alpha agent run \
    --type "$AGENT" \
    --prompt "$SCRIPT_DIR/prompt.md" \
    2>&1 | tee /dev/stderr) || true

  # Store pattern in Claude-Flow memory
  npx claude-flow@v3alpha memory store \
    --content "$OUTPUT" \
    --type "ralph-iteration" \
    --metadata "{\"iteration\": $i, \"agent\": \"$AGENT\"}"

  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo "Ralph loop complete!"
    npx claude-flow@v3alpha swarm shutdown
    exit 0
  fi

  sleep 2
done

echo "Max iterations reached"
npx claude-flow@v3alpha swarm shutdown
```

#### Claude-Flow + Ralph PRD Integration

```typescript
// ralph-orchestrator.ts
import { createSwarm, memoryStore, routeTask } from 'claude-flow';

interface PRDTask {
  id: string;
  description: string;
  acceptanceCriteria: string[];
  complexity: 'low' | 'medium' | 'high';
}

async function runEnterpriseRalph(prd: { tasks: PRDTask[] }) {
  // Initialize swarm for task execution
  const swarm = await createSwarm({
    topology: 'hierarchical',
    agents: [
      { type: 'coder', count: 3 },
      { type: 'tester', count: 2 },
      { type: 'reviewer', count: 1 }
    ]
  });

  for (const task of prd.tasks) {
    let complete = false;
    let iteration = 0;

    while (!complete && iteration < 10) {
      iteration++;
      console.log(`Task ${task.id}: Iteration ${iteration}`);

      // Route to optimal agent based on learned patterns
      const agent = await routeTask({
        description: task.description,
        complexity: task.complexity,
        strategy: 'learned'  // Use SONA learning
      });

      // Execute task
      const result = await swarm.executeTask({
        agent: agent,
        task: task,
        timeout: 300000  // 5 minutes
      });

      // Store pattern for learning
      await memoryStore({
        content: JSON.stringify(result),
        type: 'task-execution',
        metadata: {
          taskId: task.id,
          agent: agent,
          success: result.success,
          iteration: iteration
        }
      });

      // Check acceptance criteria
      complete = task.acceptanceCriteria.every(
        criteria => result.output.includes(criteria)
      );
    }

    if (!complete) {
      console.warn(`Task ${task.id} incomplete after ${iteration} iterations`);
    }
  }

  await swarm.shutdown();
}
```

### With Gas Town

#### Claude-Flow vs Gas Town Comparison

| Aspect | Claude-Flow v3 | Gas Town |
|--------|----------------|----------|
| **Architecture** | 7-layer + 54 agents | 8-role hierarchy |
| **Runtime** | Node.js + MCP | Go + Beads |
| **Coordination** | Queen-led swarms | Mayor/Deacon/Refinery |
| **Learning** | SONA self-optimizing | External patterns |
| **Memory** | AgentDB + HNSW | Beads data plane |
| **Consensus** | Raft/Byzantine/Gossip | Human Overseer |
| **Focus** | Enterprise automation | Factory-scale human-AI |
| **Cost** | $10-50/day typical | $50-200/day |
| **Team Size** | 15-100+ agents | 20-30 agents |
| **Maturity** | Alpha (v3.0.0-alpha) | Production |

#### When to Use Which

**Choose Claude-Flow when:**
- Need self-learning optimization
- Require multi-model routing
- Want MCP-native integration
- Team is Node.js/TypeScript focused
- Budget constraints ($10-50/day)
- Want automated consensus

**Choose Gas Town when:**
- Need factory-scale production (20-30+ agents)
- Require human-in-the-loop for decisions
- Want Go runtime performance
- Building for mature, high-stakes codebases
- Have budget for premium workflows ($50-200/day)
- Need proven production patterns

#### Hybrid Approach

```typescript
// Use Claude-Flow for autonomous tasks
// Escalate to Gas Town for human-critical decisions

import { createSwarm } from 'claude-flow';
import { GasTownBridge } from './gas-town-bridge';

const hybridOrchestrator = {
  // Claude-Flow handles routine work
  autonomousSwarm: await createSwarm({
    topology: 'hierarchical',
    agents: 15,
    mode: 'autonomous'
  }),

  // Gas Town handles critical decisions
  gasTown: new GasTownBridge({
    overseer: 'human',
    roles: ['refinery', 'witness']
  }),

  async processTask(task: Task) {
    // Classify task criticality
    const criticality = await this.classifyCriticality(task);

    if (criticality === 'routine') {
      // Claude-Flow handles autonomously
      return await this.autonomousSwarm.execute(task);
    } else if (criticality === 'requires-approval') {
      // Claude-Flow proposes, Gas Town approves
      const proposal = await this.autonomousSwarm.propose(task);
      return await this.gasTown.submitForApproval(proposal);
    } else {
      // Gas Town handles entirely
      return await this.gasTown.execute(task);
    }
  }
};
```

### With CC-Mirror

CC-Mirror enables multi-model orchestration. Combined with Claude-Flow:

#### Multi-Model Enterprise Configuration

```typescript
// cc-mirror + claude-flow integration
const multiModelSwarm = await createSwarm({
  topology: 'hierarchical',
  providers: {
    // Different models for different agent types
    queen: {
      provider: 'claude',
      model: 'opus-4.5'  // Best reasoning for coordination
    },
    coder: {
      provider: 'claude',
      model: 'sonnet-4'  // Good balance for coding
    },
    analyst: {
      provider: 'openai',
      model: 'gpt-4o'    // Strong analytical capabilities
    },
    documenter: {
      provider: 'gemini',
      model: 'gemini-2-flash'  // Fast for documentation
    }
  },
  ccMirror: {
    enabled: true,
    hiddenOrchestration: true,
    modelSwitching: 'automatic'
  }
});
```

#### Enterprise Multi-Model Patterns

```typescript
// Pattern: Best-model-for-task routing
const intelligentRouting = {
  tasks: {
    'complex-reasoning': { model: 'opus-4.5', provider: 'claude' },
    'code-generation': { model: 'sonnet-4', provider: 'claude' },
    'data-analysis': { model: 'gpt-4o', provider: 'openai' },
    'simple-transforms': { model: 'haiku-3.5', provider: 'claude' },
    'fast-documentation': { model: 'gemini-2-flash', provider: 'gemini' },
    'local-sensitive': { model: 'llama-3.3-70b', provider: 'ollama' }
  },

  async route(task: Task) {
    const taskType = await classifyTask(task);
    const config = this.tasks[taskType];

    return {
      model: config.model,
      provider: config.provider,
      fallback: this.getFallback(taskType)
    };
  }
};
```

### Combination Matrix

| Claude-Flow + | Use Case | Complexity | Value | Implementation |
|---------------|----------|------------|-------|----------------|
| **Ralph** | Enterprise Ralph loops | Medium | Very High | Self-learning task routing + fresh contexts |
| **Gas Town** | Hybrid autonomous/human | High | Very High | Autonomous routine + human escalation |
| **CC-Mirror** | Multi-model enterprise | High | High | Best model per task type |
| **Ralph + Gas Town** | Factory-scale autonomous | Very High | Extreme | Full orchestration stack |
| **All Three** | Maximum capability | Expert | Maximum | Complete AI factory |

#### Full Stack Integration Example

```typescript
// The ultimate orchestration: Claude-Flow + Ralph + Gas Town + CC-Mirror

import { createSwarm, memoryStore, routeTask } from 'claude-flow';
import { GasTownBridge, InboxType } from 'gas-town';
import { CCMirror, ModelSelector } from 'cc-mirror';

class UltimateOrchestrator {
  private swarm: Swarm;
  private gasTown: GasTownBridge;
  private ccMirror: CCMirror;

  async initialize() {
    // Claude-Flow for swarm coordination
    this.swarm = await createSwarm({
      topology: 'hierarchical',
      agents: 30,
      consensus: 'raft'
    });

    // Gas Town for human-critical decisions
    this.gasTown = new GasTownBridge({
      roles: ['overseer', 'mayor', 'refinery', 'witness']
    });

    // CC-Mirror for multi-model routing
    this.ccMirror = new CCMirror({
      providers: ['claude', 'openai', 'gemini', 'ollama'],
      strategy: 'cost-quality-optimized'
    });
  }

  async processWork(workItem: WorkItem) {
    // 1. Classify work complexity
    const complexity = await this.classifyComplexity(workItem);

    // 2. Select execution path
    if (complexity === 'simple') {
      // Ralph loop with Claude-Flow
      return await this.runRalphLoop(workItem);
    } else if (complexity === 'medium') {
      // Claude-Flow swarm execution
      return await this.runSwarmExecution(workItem);
    } else {
      // Gas Town with human oversight
      return await this.runGasTownExecution(workItem);
    }
  }

  private async runRalphLoop(work: WorkItem) {
    let complete = false;
    let iteration = 0;

    while (!complete && iteration < 10) {
      iteration++;

      // CC-Mirror selects optimal model
      const model = await this.ccMirror.selectModel({
        task: work.description,
        constraints: { cost: 'low', quality: 'medium' }
      });

      // Claude-Flow routes to optimal agent
      const agent = await routeTask({
        description: work.description,
        model: model
      });

      // Execute
      const result = await this.swarm.execute({
        agent: agent,
        task: work,
        model: model
      });

      // Learn from result
      await memoryStore({
        content: JSON.stringify(result),
        type: 'ralph-execution',
        metadata: { iteration, agent, model, success: result.success }
      });

      complete = result.acceptanceCriteriaMet;
    }
  }

  private async runSwarmExecution(work: WorkItem) {
    // Full swarm with consensus
    return await this.swarm.executeWithConsensus({
      task: work,
      consensus: 'raft',
      threshold: 0.66,
      modelSelection: this.ccMirror
    });
  }

  private async runGasTownExecution(work: WorkItem) {
    // Submit to Gas Town for human oversight
    const proposal = await this.swarm.createProposal(work);

    // Mayor reviews and routes
    const routing = await this.gasTown.submitToMayor(proposal);

    // Execute with oversight
    const result = await this.swarm.executeWithOversight({
      task: routing.task,
      witness: this.gasTown.getWitness(),
      escalation: InboxType.OVERSEER
    });

    // Refinery manages merge
    return await this.gasTown.submitToRefinery(result);
  }
}
```

---

## Mental Models

### Mental Model 1: The Ant Colony

> "Claude Code is the world's biggest ant. Everyone is focused on making their ant run longer... when nature prefers colonies."

**The Insight:**

Single Claude instances are powerful but limited. Claude-Flow transforms the paradigm:

- **Single ant** = Single Claude session (powerful but finite)
- **Colony** = 54+ specialized agents (exponentially more capable)
- **Queen** = Coordination (Strategic, Tactical, Adaptive)
- **Workers** = Specialized execution (Coder, Tester, Analyst, etc.)
- **Pheromones** = Shared memory (AgentDB patterns)

**Application:**

Don't optimize the single ant. Build the colony.

### Mental Model 2: Self-Improving Factory

Traditional automation is static. Claude-Flow is self-improving:

```
Traditional Factory:
  Input → Fixed Process → Output
  (Same process forever)

Claude-Flow Factory:
  Input → Adaptive Process → Output
            ↑              ↓
            └── Learning ──┘
  (Process improves with each execution)
```

**The Loop:**

1. **RETRIEVE** - Find similar past patterns
2. **JUDGE** - Evaluate outcome quality
3. **DISTILL** - Extract successful patterns
4. **CONSOLIDATE** - Update without forgetting
5. **ROUTE** - Better decisions next time

### Mental Model 3: Byzantine Generals

In distributed systems, agents can fail or disagree. Byzantine fault tolerance handles this:

**The Problem:**

```
General 1: "Attack!"
General 2: "Attack!"
General 3: "Retreat!" (faulty/malicious)
General 4: "Attack!"
```

**The Solution:**

Consensus algorithms ensure correct operation despite faulty components:

- **Raft** - Leader election, strong consistency
- **Byzantine** - Tolerates up to 1/3 faulty agents
- **Gossip** - Eventual consistency for scale

**Application in Claude-Flow:**

When deploying critical code, multiple agents vote. Even if some fail or give wrong answers, the correct result emerges through consensus.

### Mental Model 4: Three-Tier Intelligence

Not all tasks need the most expensive model:

```
                            ┌─────────────────┐
                            │   Complex       │
                            │   Reasoning     │
                            │   (Opus/Sonnet) │
                            │   ~2s, $0.05    │
                            └────────┬────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
         ┌──────────▼──────────┐    │    ┌───────────▼───────────┐
         │   Low Complexity    │    │    │   Simple Transforms   │
         │   (Haiku/Mini)      │    │    │   (WASM Booster)      │
         │   ~100ms, $0.001    │    │    │   <1ms, $0            │
         └─────────────────────┘    │    └───────────────────────┘
                                    │
                              ┌─────▼─────┐
                              │   TASK    │
                              └───────────┘
```

**Application:**

- Variable rename? → WASM Booster ($0, <1ms)
- Fix simple bug? → Haiku ($0.001, ~100ms)
- Design system architecture? → Opus ($0.05, ~2s)

Result: 75% cost reduction, 250% quota extension.

---

## Checkpoints

### Checkpoint 1: After Installation

**Where you are:** Claude-Flow is installed but not configured.

**Verify your state:**

```bash
# Check installation
npx claude-flow@v3alpha --version
# Should show: @claude-flow/cli@3.0.0-alpha.XXX

# Check MCP integration
claude mcp list
# Should show: claude-flow (stdio)
```

**You should see:**

```
@claude-flow/cli@3.0.0-alpha.104
```

**If you don't see this:**
- Run: `npm install -g claude-flow@v3alpha`
- Check Node.js version: `node --version` (need 20+)

**This connects to:** Configuration setup (creating claude-flow.config.json)

---

### Checkpoint 2: After Configuration

**Where you are:** Configuration file created, ready to initialize swarm.

**Verify your state:**

```bash
# Check config exists
cat claude-flow.config.json

# Validate configuration
npx claude-flow@v3alpha config validate
```

**You should see:**

```json
{
  "version": "3.0.0",
  "topology": { "type": "hierarchical" },
  ...
}
```

**Validation output:**

```
Configuration valid: 0 errors, 0 warnings
```

**If you see errors:**
- Check JSON syntax (missing commas, brackets)
- Verify required fields (version, topology)
- Run with auto-fix: `npx claude-flow@v3alpha config validate --fix`

**This connects to:** Swarm initialization

---

### Checkpoint 3: After Swarm Initialization

**Where you are:** Swarm is initialized and agents are spawned.

**Verify your state:**

```bash
# Check swarm status
npx claude-flow@v3alpha swarm status

# List agents
npx claude-flow@v3alpha agent list
```

**You should see:**

```
Swarm Status:
  Topology: hierarchical
  Agents: 15/15 active
  Consensus: raft (achieved)
  Health: 0.94

Active Agents:
  queen-strategic (queen) - active
  queen-tactical (queen) - active
  coder-1 (core) - active
  coder-2 (core) - active
  ...
```

**If agents aren't spawning:**
- Check available memory (need ~2GB for 15 agents)
- Verify API keys are set
- Check logs: `npx claude-flow@v3alpha logs`

**This connects to:** Running your first task

---

### Checkpoint 4: After First Task Execution

**Where you are:** First task completed, patterns stored.

**Verify your state:**

```bash
# Check memory for stored patterns
npx claude-flow@v3alpha memory search --query "task execution"

# Check learning metrics
npx claude-flow@v3alpha neural stats
```

**You should see:**

```
Memory Search Results:
  1. [0.92] task-execution: "Implemented user auth..."

Neural Statistics:
  Patterns stored: 1
  Learning mode: balanced
  Routing accuracy: N/A (need more data)
```

**If patterns aren't storing:**
- Check memory backend configuration
- Verify write permissions
- Check disk space for SQLite

**This connects to:** Self-learning improvement over time

---

## Troubleshooting

### Common Issues

#### Issue 1: MCP Connection Failures

**Symptom:**
```
Error: Failed to connect to MCP server
```

**Diagnosis:**
```bash
# Check if MCP server is running
ps aux | grep claude-flow

# Check MCP registration
claude mcp list

# Check logs
npx claude-flow@v3alpha logs --level error
```

**Solutions:**

1. **Restart MCP server:**
   ```bash
   npx claude-flow@v3alpha mcp restart
   ```

2. **Re-register with Claude:**
   ```bash
   claude mcp remove claude-flow
   claude mcp add claude-flow -- npx -y claude-flow@v3alpha
   ```

3. **Check port conflicts:**
   ```bash
   lsof -i :3000  # Default MCP port
   ```

---

#### Issue 2: Memory Store Failures

**Symptom:**
```
Error: Column type error in memory store
```

**Diagnosis:**
```bash
# Check memory backend
npx claude-flow@v3alpha config get memory.backend

# Check database status
npx claude-flow@v3alpha db status
```

**Solutions:**

1. **Reset memory database:**
   ```bash
   npx claude-flow@v3alpha db reset --confirm
   ```

2. **Migrate from v2 schema:**
   ```bash
   npx claude-flow@v3alpha db migrate --from v2
   ```

3. **Switch to fresh SQLite:**
   ```bash
   rm -f ~/.claude-flow/memory.db
   npx claude-flow@v3alpha init --memory-only
   ```

---

#### Issue 3: Agent Spawn Failures

**Symptom:**
```
Error: Failed to spawn agent: undefined parameters
```

**Diagnosis:**
```bash
# Check agent configuration
npx claude-flow@v3alpha agent validate --type coder

# Check available resources
npx claude-flow@v3alpha system status
```

**Solutions:**

1. **Provide all required parameters:**
   ```typescript
   // WRONG
   agent_spawn({ type: 'coder' });

   // RIGHT
   agent_spawn({
     type: 'coder',
     task: 'Implement feature',
     config: { model: 'sonnet-4' }
   });
   ```

2. **Check model availability:**
   ```bash
   npx claude-flow@v3alpha providers check
   ```

3. **Reduce agent count:**
   ```bash
   npx claude-flow@v3alpha swarm scale --target 8
   ```

---

#### Issue 4: Consensus Not Achieving

**Symptom:**
```
Consensus timeout: could not reach agreement
```

**Diagnosis:**
```bash
# Check consensus status
npx claude-flow@v3alpha consensus status

# Check agent health
npx claude-flow@v3alpha agent health --all
```

**Solutions:**

1. **Increase timeout:**
   ```json
   {
     "consensus": {
       "timeout": 10000  // 10 seconds instead of 5
     }
   }
   ```

2. **Lower threshold:**
   ```json
   {
     "consensus": {
       "threshold": 0.5  // Simple majority instead of 2/3
     }
   }
   ```

3. **Switch algorithm for large swarms:**
   ```json
   {
     "consensus": {
       "algorithm": "gossip"  // Better for 50+ agents
     }
   }
   ```

---

#### Issue 5: High Latency / Slow Performance

**Symptom:**
```
Tasks taking 10x longer than expected
```

**Diagnosis:**
```bash
# Run performance diagnostics
npx claude-flow@v3alpha perf diagnose

# Check bottlenecks
npx claude-flow@v3alpha perf bottlenecks
```

**Solutions:**

1. **Enable caching:**
   ```json
   {
     "memory": {
       "cache": {
         "enabled": true,
         "size": 1000,
         "ttl": 3600
       }
     }
   }
   ```

2. **Use HNSW indexing:**
   ```json
   {
     "memory": {
       "hnsw": {
         "m": 16,
         "efConstruction": 200,
         "efSearch": 100
       }
     }
   }
   ```

3. **Enable Agent Booster for simple tasks:**
   ```json
   {
     "performance": {
       "agentBooster": {
         "enabled": true,
         "wasmPath": "./node_modules/@claude-flow/performance/wasm"
       }
     }
   }
   ```

---

## Architecture Decision Records

Claude-Flow v3 documents 20 Architecture Decision Records:

| ADR | Title | Key Decision |
|-----|-------|--------------|
| ADR-001 | Adopt agentic-flow as Core Foundation | Use agentic-flow for base agent primitives |
| ADR-002 | Domain-Driven Design Structure | Organize by domain (queen, core, support) |
| ADR-003 | Single Coordination Engine | Unified SwarmCoordinator, not multiple |
| ADR-004 | Plugin Architecture | Extensible via plugin system |
| ADR-005 | MCP-First API Design | All APIs exposed via MCP protocol |
| ADR-006 | Unified Memory Service | Single memory abstraction across agents |
| ADR-007 | Event Sourcing | Event-driven architecture for audit/replay |
| ADR-008 | Vitest Testing | Vitest over Jest for 10x faster tests |
| ADR-009 | Hybrid Memory Backend | SQLite + HNSW, not pure vector DB |
| ADR-010 | Node.js Only | No browser/Deno, Node.js 20+ required |
| ADR-011 | LLM Provider System | Multi-provider with automatic fallback |
| ADR-012 | MCP Security Features | Security baked into MCP layer |
| ADR-013 | Core Security Module | Dedicated @claude-flow/security package |
| ADR-014 | Workers System | 12 background workers for optimization |
| ADR-015 | Unified Plugin System | Single plugin interface for all extensions |
| ADR-016 | Collaborative Issue Claims | Work ownership for human-agent handoffs |
| ADR-017 | RuVector Integration | PostgreSQL vector DB for enterprise |
| ADR-018 | Claude Code Integration | Native MCP integration with Claude Code |
| ADR-019 | Headless Runtime Package | Server-side execution without CLI |
| ADR-020 | Headless Worker Integration | Background worker for headless mode |

---

## Performance Benchmarks

### Official Performance Targets

| Metric | Target | Achieved | Status |
|--------|--------|----------|--------|
| CLI cold-start | <500ms | ~400ms | PASS |
| Vector search | <1ms | ~0.5ms | PASS |
| Swarm coordination | <50ms | ~35ms | PASS |
| HNSW acceleration | 150x | 150x-12,500x | PASS |
| Flash Attention | 2.49x | 2.49x-7.47x | PASS |
| Memory reduction | 50% | 50-75% | PASS |
| LoRA compression | 128x | 128x | PASS |
| SWE-Bench | 84%+ | 84.8% | PASS |

### Benchmark Results

**Vector Search (HNSW vs Sequential):**

```
Dataset: 100,000 embeddings (1024 dimensions)
Query: Single vector, top-10 results

Sequential scan: 847ms
HNSW index (m=16): 0.5ms

Improvement: 1,694x faster
```

**Swarm Spawning (Batch vs Individual):**

```
Configuration: 15 agents, hierarchical topology

Individual spawn: 4.2s (280ms each)
Batch spawn: 210ms

Improvement: 20x faster
```

**Memory Usage (Standard vs LoRA):**

```
Model weights: 7B parameters

Standard: 28GB
LoRA (rank=8): 218MB

Compression: 128x
```

---

## Source Attribution

### Primary Sources

- **Repository:** https://github.com/ruvnet/claude-flow
- **Author:** ruvnet
- **License:** MIT
- **Stars:** 12.5k
- **Forks:** 1.5k

### Documentation Sources

- README.md (main documentation)
- CLAUDE.md (Claude Code integration)
- /v3/docs/adr/ (20 Architecture Decision Records)
- /docs/ruvector-postgres/ (RuVector documentation)

### Version Information

- **Current Version:** 3.0.0-alpha.104
- **Package:** @claude-flow/cli
- **NPM Tag:** v3alpha
- **Node.js Requirement:** 20.0.0+

### Community Resources

- **Issues:** 298 open (active development)
- **Pull Requests:** 53 open
- **Created:** June 2, 2025
- **Last Release:** January 2026 (v3.0.0-alpha.79+)

### Reliability Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation | HIGH | Comprehensive README, ADRs |
| Stability | ALPHA | Active development, known issues |
| Community | HIGH | 12.5k stars, active issues |
| Production-Ready | MEDIUM | Alpha status, but feature-complete |
| Integration | HIGH | Native MCP, Claude Code support |

### Related Patterns in This Repository

- `synthesis/mastery-ralph-complete.md` - Ralph pattern (integrates with Claude-Flow)
- `extractions/orchestration/gas-town-complete-8-roles.md` - Gas Town (comparison/hybrid)
- `extractions/orchestration/cc-mirror-*.md` - CC-Mirror (multi-model integration)

---

## Appendix A: CLI Command Reference

### Core Commands (26 Total)

```bash
# Initialization
npx claude-flow@v3alpha init [--wizard]
npx claude-flow@v3alpha config load <path>
npx claude-flow@v3alpha config save [--backup]
npx claude-flow@v3alpha config validate [--fix]

# Agent Management
npx claude-flow@v3alpha agent spawn --type <type> --task <task>
npx claude-flow@v3alpha agent list [--filter <status>]
npx claude-flow@v3alpha agent terminate <id> [--force]
npx claude-flow@v3alpha agent status <id>

# Swarm Coordination
npx claude-flow@v3alpha swarm init [--topology <type>] [--agents <n>]
npx claude-flow@v3alpha swarm status
npx claude-flow@v3alpha swarm scale --target <n>
npx claude-flow@v3alpha swarm shutdown

# Memory Operations
npx claude-flow@v3alpha memory store --content <content> --type <type>
npx claude-flow@v3alpha memory search --query <query> [--limit <n>]
npx claude-flow@v3alpha memory list [--filter <type>]

# MCP Server
npx claude-flow@v3alpha mcp start
npx claude-flow@v3alpha mcp stop
npx claude-flow@v3alpha mcp restart
npx claude-flow@v3alpha mcp status

# Neural/Learning
npx claude-flow@v3alpha neural stats
npx claude-flow@v3alpha neural consolidate
npx claude-flow@v3alpha neural export

# Security
npx claude-flow@v3alpha security scan [--depth full]
npx claude-flow@v3alpha security audit
npx claude-flow@v3alpha security fix

# Utilities
npx claude-flow@v3alpha --version
npx claude-flow@v3alpha --help
npx claude-flow@v3alpha logs [--level <level>]
```

---

## Appendix B: Agent YAML Configuration

### Example: Coder Agent

```yaml
# agents/coder.yaml
type: coder
version: 3.0.0
created: 2026-01-17

capabilities:
  - code-generation
  - refactoring
  - debugging

optimizations:
  - flash-attention
  - token-reduction

config:
  model: claude-sonnet-4
  maxTokens: 8000
  temperature: 0.7

memory:
  type: episodic
  persistence: true

hooks:
  pre-execution:
    - validate-task
    - check-context
  post-execution:
    - store-pattern
    - update-learning
```

### Example: Architect Agent

```yaml
# agents/architect.yaml
type: architect
version: 3.0.0
created: 2026-01-17

capabilities:
  - system-design
  - api-design
  - documentation

optimizations:
  - context-caching
  - memory-persistence

config:
  model: claude-opus-4.5
  maxTokens: 16000
  temperature: 0.5

memory:
  type: semantic
  persistence: true

hooks:
  pre-execution:
    - load-architecture-context
    - validate-constraints
  post-execution:
    - update-architecture-docs
    - notify-team
```

---

## Appendix C: MCP Tool Schemas

### agent_spawn Schema

```typescript
interface AgentSpawnInput {
  type: 'coder' | 'tester' | 'reviewer' | 'architect' | 'analyst' |
        'researcher' | 'documenter' | 'optimizer' | 'security-architect';
  task: string;
  config?: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
    timeout?: number;
  };
  metadata?: Record<string, unknown>;
}

interface AgentSpawnOutput {
  agentId: string;
  type: string;
  status: 'spawning' | 'active' | 'error';
  startTime: string;
}
```

### swarm_init Schema

```typescript
interface SwarmInitInput {
  topology: 'hierarchical' | 'mesh' | 'ring' | 'star' | 'hybrid';
  agents?: number;
  domains?: string[];
  consensus?: 'raft' | 'byzantine' | 'gossip';
  config?: {
    maxAgents?: number;
    consensusThreshold?: number;
    consensusTimeout?: number;
  };
}

interface SwarmInitOutput {
  swarmId: string;
  topology: string;
  agentCount: number;
  status: 'initializing' | 'active' | 'error';
  coordinatorId: string;
}
```

### memory_search Schema

```typescript
interface MemorySearchInput {
  query: string;
  type?: 'semantic' | 'keyword' | 'hybrid';
  filter?: {
    memoryType?: string;
    agent?: string;
    timeRange?: { start: string; end: string };
  };
  limit?: number;
  threshold?: number;
}

interface MemorySearchOutput {
  results: Array<{
    id: string;
    content: string;
    similarity: number;
    metadata: Record<string, unknown>;
    timestamp: string;
  }>;
  totalResults: number;
  searchTime: number;
}
```

---

**Document Statistics:**
- Lines: 1,850+
- Sections: 15 major sections
- Code examples: 50+
- Diagrams: 12
- Tables: 25+
- Checkpoints: 4
- Troubleshooting entries: 5

**Last Updated:** 2026-01-19
**Extraction Status:** COMPLETE
