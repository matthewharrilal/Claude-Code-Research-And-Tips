# Swarm Topologies: Complete Architecture Guide

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** Claude-Flow v3, CCSwarm, Swarms Framework, Station NATS
**Status:** Definitive reference for multi-agent topology selection and implementation

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [14+ Topologies Catalog](#14-topologies-catalog)
3. [Rust-Based CCSwarm Coordination](#rust-based-ccswarm-coordination)
4. [NATS Messaging Backbone Patterns](#nats-messaging-backbone-patterns)
5. [Swarm Consensus and Byzantine Fault Tolerance](#swarm-consensus-and-byzantine-fault-tolerance)
6. [When to Use Which Topology](#when-to-use-which-topology)
7. [Mental Models](#mental-models)
8. [Checkpoints](#checkpoints)
9. [Troubleshooting](#troubleshooting)
10. [Integration Patterns](#integration-patterns)
11. [Performance Comparison Tables](#performance-comparison-tables)
12. [Source Attribution](#source-attribution)

---

## You Are Here

```
                     THE SWARM TOPOLOGY LANDSCAPE

    +-----------------------------------------------------------------+
    |                                                                   |
    |   SINGLE AGENT                                                    |
    |   +-----------------------------------------------------------+  |
    |   |  Claude Code (vanilla) - Level 0-1                        |  |
    |   |  One agent, one context, manual control                   |  |
    |   +-----------------------------------------------------------+  |
    |                            |                                      |
    |                            v                                      |
    |   AUTONOMOUS LOOPS                                                |
    |   +-----------------------------------------------------------+  |
    |   |  Ralph Wiggum Pattern - Level 2-4                         |  |
    |   |  Single agent, iterative execution, external memory       |  |
    |   +-----------------------------------------------------------+  |
    |                            |                                      |
    |                            v                                      |
    |   MULTI-AGENT (Basic)                                             |
    |   +-----------------------------------------------------------+  |
    |   |  CC Mirror, Subagents - Level 3-4                         |  |
    |   |  Multiple agents, simple coordination                     |  |
    |   +-----------------------------------------------------------+  |
    |                            |                                      |
    |                            v                                      |
    |   TOPOLOGY-AWARE SWARMS   <-- YOU ARE HERE                        |
    |   +-----------------------------------------------------------+  |
    |   |  Sequential | Concurrent | Hierarchical | Mesh | Ring     |  |
    |   |  Mixture-of-Agents | GraphWorkflow | ForestSwarm           |  |
    |   |  Level 5-6: Structured multi-agent with explicit topology |  |
    |   +-----------------------------------------------------------+  |
    |                            |                                      |
    |                            v                                      |
    |   FACTORY SCALE                                                   |
    |   +-----------------------------------------------------------+  |
    |   |  Gas Town, Claude-Flow Hive-Mind - Level 6-7              |  |
    |   |  54+ agents, consensus protocols, self-learning           |  |
    |   +-----------------------------------------------------------+  |
    |                                                                   |
    +-----------------------------------------------------------------+
```

**What this document covers:**

**Sw**arm **to**pologies are the **str**uctural **pat**terns that define how **mul**tiple AI **ag**ents **co**ordinate, **com**municate, and **col**laborate. This **syn**thesis extracts **to**pology **pat**terns from **fou**r major **fra**meworks:

- **Claude-Flow v3** - Enterprise swarm orchestration with 54+ agents and 5 topologies
- **CCSwarm** - Rust-native coordination with type-state safety
- **Swarms Framework** - 14+ Python-based topology patterns
- **Station** - NATS-powered distributed messaging backbone

**Pre**requisites for this document:

- **Un**derstanding of multi-agent **co**ncepts (see `synthesis/mastery-multi-agent.md`)
- **Fa**miliarity with Claude Code **ba**sics
- **Co**mfort with distributed **sy**stems concepts (helpful but **no**t required)

**Wh**at you'll learn:

1. **Ho**w to select the **ri**ght topology for **yo**ur use case
2. **Wh**en consensus **pr**otocols matter and **wh**ich to choose
3. **Pe**rformance tradeoffs **bet**ween topology **op**tions
4. **In**tegration patterns for **com**bining topologies

---

## 14+ Topologies Catalog

### Overview Matrix

| # | Topology | Agent Count | Parallelism | Coordination | Best For |
|---|----------|-------------|-------------|--------------|----------|
| 1 | Sequential | 2-10 | None | Linear chain | Pipelines, refinement |
| 2 | Concurrent | 2-50 | Full | Independent | Speed, parallel analysis |
| 3 | Hierarchical | 3-100+ | Partial | Queen/Director | Enterprise, projects |
| 4 | Mesh | 5-20 | Full | Peer-to-peer | Distributed workloads |
| 5 | Ring | 3-30 | Partial | Circular pass | Pipeline processing |
| 6 | Star/Centralized | 3-50 | Full | Hub-spoke | Simple coordination |
| 7 | Hybrid | 10-200+ | Mixed | Multi-pattern | Factory scale |
| 8 | Mixture-of-Agents | 3-10 | Full | Aggregator | Expert synthesis |
| 9 | GraphWorkflow | 5-50 | DAG-based | Edge dependencies | Complex pipelines |
| 10 | ForestSwarm | 10-100+ | Dynamic | Semantic routing | Large agent pools |
| 11 | GroupChat | 3-8 | Turn-based | Conversation | Discussion, debate |
| 12 | MajorityVoting | 3-9 (odd) | Full | Consensus | Decision making |
| 13 | AgentRearrange | 2-20 | Configurable | Flow syntax | Dynamic workflows |
| 14 | HeavySwarm | 5 | Phased | Protocol-driven | Deep analysis |

---

### Topology 1: Sequential Workflow

**Pat**tern: **Li**near chain where **ea**ch agent's **ou**tput becomes the **ne**xt agent's input.

```
+----------+     +----------+     +----------+     +----------+
|  Agent 1 | --> |  Agent 2 | --> |  Agent 3 | --> |  Result  |
| Research |     |  Writer  |     |  Editor  |     |          |
+----------+     +----------+     +----------+     +----------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | None - strictly sequential |
| Latency | Sum of all agent latencies |
| Best agent count | 2-10 |
| Failure mode | Single point - any failure stops chain |
| Memory usage | Low - one agent active at a time |

**Use Cases:**

- **Do**cument processing **pi**pelines (research -> write -> edit)
- **St**ep-by-step analysis **cha**ins
- **Co**ntent refinement **wor**kflows
- **Qu**ality improvement **cha**ins (draft -> review -> polish)

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent, SequentialWorkflow

researcher = Agent(
    agent_name="Researcher",
    system_prompt="Research the given topic thoroughly.",
    model_name="gpt-4o-mini",
)

writer = Agent(
    agent_name="Writer",
    system_prompt="Write engaging content based on research.",
    model_name="gpt-4o-mini",
)

editor = Agent(
    agent_name="Editor",
    system_prompt="Polish and improve the written content.",
    model_name="gpt-4o-mini",
)

workflow = SequentialWorkflow(
    agents=[researcher, writer, editor],
    max_loops=1,
    team_awareness=True,  # Agents know their position
)

result = workflow.run("Write about quantum computing trends in 2026")
```

**Imp**lementation (Claude-Flow):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'ring',  // Sequential in Claude-Flow
    maxAgents: 10,
    domains: ['research', 'writing', 'editing']
  }
});
```

---

### Topology 2: Concurrent Workflow

**Pat**tern: **Mul**tiple agents work **sim**ultaneously on the **sa**me or **dif**ferent tasks.

```
                  +------------+
              +-->|  Agent 1   |--+
              |   | Market     |  |
              |   +------------+  |
              |                   |
+-------+     |   +------------+  |     +---------+
| Task  |-----+-->|  Agent 2   |--+---->| Results |
|       |     |   | Financial  |  |     |         |
+-------+     |   +------------+  |     +---------+
              |                   |
              |   +------------+  |
              +-->|  Agent 3   |--+
                  | Risk       |
                  +------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Full - all agents execute simultaneously |
| Latency | Max of individual agent latencies |
| Best agent count | 2-50 |
| Failure mode | Independent - one failure doesn't stop others |
| Memory usage | High - all agents active simultaneously |

**Use Cases:**

- **Pa**rallel data **an**alysis
- **Mul**ti-perspective **ev**aluation
- **Sp**eed-critical **pro**cessing
- **In**dependent task **ex**ecution

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent, ConcurrentWorkflow

market_analyst = Agent(
    agent_name="Market-Analyst",
    system_prompt="Analyze market trends and opportunities.",
    model_name="gpt-4o-mini",
)

financial_analyst = Agent(
    agent_name="Financial-Analyst",
    system_prompt="Evaluate financial metrics and risks.",
    model_name="gpt-4o-mini",
)

risk_analyst = Agent(
    agent_name="Risk-Analyst",
    system_prompt="Assess risks and mitigation strategies.",
    model_name="gpt-4o-mini",
)

concurrent = ConcurrentWorkflow(
    agents=[market_analyst, financial_analyst, risk_analyst],
    max_loops=1,
)

results = concurrent.run("Analyze NVIDIA stock for investment potential")
```

---

### Topology 3: Hierarchical Swarm

**Pat**tern: **Di**rector/Queen agent **co**ordinates specialized **wor**kers with **fee**dback loops.

```
                    +-------------------+
                    |   STRATEGIC QUEEN |
                    |     (Planning)    |
                    +---------+---------+
                              |
              +---------------+---------------+
              |               |               |
              v               v               v
      +-------+-------+ +-----+-----+ +-------+-------+
      | TACTICAL      | | ADAPTIVE  | |   SECURITY    |
      | QUEEN         | | QUEEN     | |   ARCHITECT   |
      | (Execution)   | | (Learning)| |   (Review)    |
      +-------+-------+ +-----+-----+ +-------+-------+
              |               |               |
    +---------+---------+     |     +---------+---------+
    |         |         |     |     |         |         |
    v         v         v     v     v         v         v
+------+ +------+ +------+ +------+ +------+ +------+ +------+
|Coder1| |Coder2| |Tester| |Analyt| |Review| |Docmtr| |Optim |
+------+ +------+ +------+ +------+ +------+ +------+ +------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Partial - workers parallel, coordination serial |
| Latency | Director overhead + max worker latency |
| Best agent count | 3-100+ |
| Failure mode | Director is critical, workers replaceable |
| Memory usage | Medium - workers share through director |

**Use Cases:**

- **En**terprise development **tea**ms
- **Pr**oject management **wor**kflows
- **Co**mplex task **dec**omposition
- **Qu**ality-controlled **pi**pelines

**Imp**lementation (Claude-Flow v3):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'hierarchical',
    maxAgents: 100,
    domains: ['queen', 'security', 'core', 'integration', 'support']
  },
  consensus: {
    algorithm: 'raft',
    threshold: 0.66,
    timeout: 5000
  },
  scaling: {
    minAgents: 5,
    maxAgents: 100,
    autoScale: true,
    scaleThreshold: 0.8
  }
});
```

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent, HierarchicalSwarm

developer = Agent(
    agent_name="Developer",
    system_prompt="Implement code based on specifications.",
    model_name="gpt-4o-mini",
)

tester = Agent(
    agent_name="Tester",
    system_prompt="Write and run tests for the implementation.",
    model_name="gpt-4o-mini",
)

reviewer = Agent(
    agent_name="Reviewer",
    system_prompt="Review code for quality and best practices.",
    model_name="gpt-4o-mini",
)

swarm = HierarchicalSwarm(
    agents=[developer, tester, reviewer],
    max_loops=3,  # Feedback iterations
    director_model_name="gpt-4o",  # Smarter director
    planning_enabled=True,
    interactive=False,
)

result = swarm.run("Build a REST API for user authentication")
```

---

### Topology 4: Mesh Network

**Pat**tern: **Ag**ents connect **di**rectly to each **ot**her in a **pe**er-to-peer **net**work.

```
        +----------+
        | Agent A  |
        +----+-----+
            /|\
           / | \
          /  |  \
         /   |   \
        /    |    \
       v     v     v
+------+  +------+  +------+
|Agent B|<->|Agent C|<->|Agent D|
+------+  +------+  +------+
    \        |        /
     \       |       /
      \      |      /
       \     |     /
        v    v    v
        +----------+
        | Agent E  |
        +----------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Full - any agent can communicate with any other |
| Latency | Variable - depends on communication pattern |
| Best agent count | 5-20 |
| Failure mode | Resilient - no single point of failure |
| Memory usage | High - maintaining multiple connections |

**Use Cases:**

- **Di**stributed workloads **wi**thout central **co**ordinator
- **De**centralized **de**cision making
- **Fau**lt-tolerant **sy**stems
- **Pe**er review **net**works

**Imp**lementation (Claude-Flow v3):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'mesh',
    maxAgents: 20,
  },
  consensus: {
    algorithm: 'gossip',  // Best for mesh
    fanout: 3,
    interval: 100,
    convergenceThreshold: 0.99
  }
});
```

**Imp**lementation (Station NATS):

```yaml
# Each agent is a Station Member in the mesh
lattice:
  mode: member
  station_name: "mesh-node-1"
  nats:
    url: "nats://orchestrator:4222"

# Mesh communication via NATS subjects
# lattice.station.{id}.agent.invoke
```

---

### Topology 5: Ring Topology

**Pat**tern: **Ag**ents pass **wo**rk in a **cir**cular pattern.

```
        +----------+
        | Agent 1  |
        +----+-----+
             |
             v
+----------+ | +----------+
| Agent 4  |<--| Agent 2  |
+-----+----+   +----+-----+
      |             |
      v             v
      +-------------+
      |   Agent 3   |
      +-------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Partial - pipeline style |
| Latency | Sum around the ring (if full pass) |
| Best agent count | 3-30 |
| Failure mode | Single break disrupts ring |
| Memory usage | Low - one active handoff at a time |

**Use Cases:**

- **Pi**peline processing **wi**th feedback
- **It**erative refinement **cy**cles
- **To**ken passing **pro**tocols
- **Rou**nd-robin **di**stribution

**Imp**lementation (Claude-Flow v3):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'ring',
    maxAgents: 30,
  }
});
```

---

### Topology 6: Star/Centralized

**Pat**tern: **Ce**ntral hub **co**ordinates all **sp**oke agents.

```
                  +--------+
                  |Agent 1 |
                  +---+----+
                      |
        +-------+     |     +-------+
        |Agent 2|<----|---->|Agent 3|
        +-------+     |     +-------+
                      |
              +-------+-------+
              |  CENTRAL HUB  |
              |  (Coordinator)|
              +-------+-------+
                      |
        +-------+     |     +-------+
        |Agent 4|<----|---->|Agent 5|
        +-------+     |     +-------+
                      |
                  +---+----+
                  |Agent 6 |
                  +--------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Full - hub coordinates parallel execution |
| Latency | Hub latency + max spoke latency |
| Best agent count | 3-50 |
| Failure mode | Hub is single point of failure |
| Memory usage | Medium - hub manages state |

**Use Cases:**

- **Si**mple coordination **ne**eds
- **Ce**ntralized logging/**mo**nitoring
- **Ea**sy debugging/**ob**servability
- **Si**ngle-focus **pr**ojects

**Imp**lementation (Claude-Flow v3):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'centralized',  // Star topology
    maxAgents: 50,
  }
});
```

---

### Topology 7: Hybrid

**Pat**tern: **Com**bination of **mul**tiple topologies **fo**r large-scale **de**ployments.

```
+---------------------------------------------------------------+
|                        HYBRID TOPOLOGY                         |
+---------------------------------------------------------------+
|                                                               |
|   +--------------------+      +--------------------+          |
|   | HIERARCHICAL TEAM  |      | HIERARCHICAL TEAM  |          |
|   |     (Backend)      |      |    (Frontend)      |          |
|   |  +----+   +----+   |      |  +----+   +----+   |          |
|   |  |Lead|   |Lead|   |      |  |Lead|   |Lead|   |          |
|   |  +-+--+   +-+--+   |      |  +-+--+   +-+--+   |          |
|   |    |        |      |      |    |        |      |          |
|   |  +-+-+    +-+-+    |      |  +-+-+    +-+-+    |          |
|   |  |W1|W2|  |W3|W4|  |      |  |W5|W6|  |W7|W8|  |          |
|   |  +--+--+  +--+--+  |      |  +--+--+  +--+--+  |          |
|   +--------+---+-------+      +--------+---+-------+          |
|            |   |                       |   |                  |
|            +---+-----------+-----------+---+                  |
|                            |                                  |
|                    +-------+-------+                          |
|                    |  MESH NETWORK |                          |
|                    | (Cross-team)  |                          |
|                    +---------------+                          |
|                                                               |
+---------------------------------------------------------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Mixed - depends on sub-topologies |
| Latency | Varies by path |
| Best agent count | 10-200+ |
| Failure mode | Depends on sub-topology failures |
| Memory usage | High - multiple coordination patterns |

**Use Cases:**

- **Fac**tory-scale **de**ployments
- **Mul**ti-team **or**ganizations
- **Com**plex enterprise **sy**stems
- **Lar**ge mixed **wor**kloads

**Imp**lementation (Claude-Flow v3):

```typescript
const coordinator = createUnifiedSwarmCoordinator({
  topology: {
    type: 'hybrid',
    maxAgents: 200,
    subTopologies: [
      { type: 'hierarchical', domain: 'backend', agents: 50 },
      { type: 'hierarchical', domain: 'frontend', agents: 50 },
      { type: 'mesh', domain: 'coordination', agents: 10 }
    ]
  }
});
```

---

### Topology 8: Mixture-of-Agents (MoA)

**Pat**tern: **Mul**tiple experts work in **pa**rallel, then an **ag**gregator synthesizes **th**eir outputs.

```
                  +----------------+
              +-->| Python Expert  |--+
              |   +----------------+  |
              |                       |
+-------+     |   +----------------+  |     +------------+     +--------+
| Task  |-----+-->| Security Expert|--+---->| AGGREGATOR |---->| Result |
|       |     |   +----------------+  |     | (Synthesis)|     |        |
+-------+     |                       |     +------------+     +--------+
              |   +----------------+  |
              +-->| Arch Expert    |--+
                  +----------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Full for experts, serial for aggregation |
| Latency | Max expert latency + aggregator latency |
| Best agent count | 3-10 experts + 1 aggregator |
| Failure mode | Expert failures reduce quality, aggregator critical |
| Memory usage | Medium - expert contexts can be discarded |

**Use Cases:**

- **Com**plex problem **so**lving
- **Mul**ti-domain **ex**pertise
- **Con**sensus building
- **Ex**pert panel **si**mulation

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent
from swarms.structs.swarm_router import SwarmRouter, SwarmType

python_expert = Agent(
    agent_name="Python-Expert",
    system_prompt="You are a Python optimization specialist.",
    model_name="gpt-4o-mini",
)

security_expert = Agent(
    agent_name="Security-Expert",
    system_prompt="You are a security and vulnerability specialist.",
    model_name="gpt-4o-mini",
)

architecture_expert = Agent(
    agent_name="Architecture-Expert",
    system_prompt="You are a software architecture specialist.",
    model_name="gpt-4o-mini",
)

aggregator = Agent(
    agent_name="Aggregator",
    system_prompt="Synthesize expert opinions into actionable recommendations.",
    model_name="gpt-4o",  # Smarter for synthesis
)

router = SwarmRouter(
    swarm_type=SwarmType.MixtureOfAgents,
    agents=[python_expert, security_expert, architecture_expert],
    aggregator_agent=aggregator,
)

result = router.run("Review this codebase for production readiness")
```

---

### Topology 9: GraphWorkflow (DAG)

**Pat**tern: **Di**rected Acyclic **Gr**aph for **com**plex dependencies.

```
              +---+
              | A |  (Data Collection)
              +-+-+
               /|\
              / | \
             /  |  \
            v   v   v
         +---+ +---+ +---+
         | B | | C | | D |  (Parallel Analysis)
         +-+-+ +-+-+ +-+-+
           |     |     |
           |     v     |
           |   +---+   |
           +-->| E |<--+  (Synthesis)
               +-+-+
                 |
                 v
               +---+
               | F |  (Final Report)
               +---+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | DAG-based - parallel where no dependencies |
| Latency | Critical path through DAG |
| Best agent count | 5-50 |
| Failure mode | Dependent nodes blocked by upstream failure |
| Memory usage | Medium - active branch contexts |

**Use Cases:**

- **Bu**ild system-like **de**pendencies
- **Com**plex data **pi**pelines
- **Re**search workflows **wi**th prerequisites
- **Co**nditional execution **pa**ths

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent
from swarms.structs.graph_workflow import GraphWorkflow

data_collector = Agent(agent_name="DataCollector", model_name="gpt-4o-mini")
analyzer_1 = Agent(agent_name="Analyzer1", model_name="gpt-4o-mini")
analyzer_2 = Agent(agent_name="Analyzer2", model_name="gpt-4o-mini")
synthesizer = Agent(agent_name="Synthesizer", model_name="gpt-4o")

workflow = GraphWorkflow(backend="networkx")  # or "rustworkx" for performance

# Add nodes
workflow.add_nodes([data_collector, analyzer_1, analyzer_2, synthesizer])

# Add edges (dependencies)
workflow.add_edge(data_collector, analyzer_1)
workflow.add_edge(data_collector, analyzer_2)
workflow.add_edges_to_target([analyzer_1, analyzer_2], synthesizer)

# Compile and execute
workflow.compile()
result = workflow.run("Analyze market trends in AI sector")

# Visualize
workflow.visualize("workflow_diagram.png")
```

---

### Topology 10: ForestSwarm

**Pat**tern: **Dy**namic agent **se**lection using **se**mantic similarity.

```
+----------+      +-----------+      +---------------+      +---------------+
|   Task   | ---> | Embedding | ---> | Tree Selection| ---> | Agent Select  |
+----------+      | [0.2,0.8] |      | "Finance Tree"|      | "Tax Speclist"|
                  +-----------+      +---------------+      +---------------+
                                            |
                                            v
                  +------------------------------------------------+
                  |                    FOREST                       |
                  |  +-------------+  +-------------+  +----------+ |
                  |  |Finance Tree |  | Legal Tree  |  | Tech Tree| |
                  |  | -Tax Agent  |  | -Contract   |  | -Backend | |
                  |  | -Invest Agt |  | -IP Agent   |  | -Frontend| |
                  |  | -Audit Agt  |  | -Comp Agent |  | -DevOps  | |
                  |  +-------------+  +-------------+  +----------+ |
                  +------------------------------------------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Dynamic - routes to best agent |
| Latency | Routing overhead + selected agent latency |
| Best agent count | 10-100+ |
| Failure mode | Fallback to next-best agent |
| Memory usage | Low per task - only one agent active |

**Use Cases:**

- **Lar**ge agent pools **wi**th specialization
- **Dy**namic task **rou**ting
- **Ex**pertise matching
- **Sc**alable specialist **ne**tworks

**Imp**lementation (Swarms Framework):

```python
from swarms.structs.forest_swarm import ForestSwarm, Tree, TreeAgent

tax_agent = TreeAgent(
    agent_name="Tax-Specialist",
    system_prompt="You specialize in tax law and compliance.",
    model_name="gpt-4o-mini",
)

investment_agent = TreeAgent(
    agent_name="Investment-Specialist",
    system_prompt="You specialize in investment strategies.",
    model_name="gpt-4o-mini",
)

finance_tree = Tree(
    name="Finance-Tree",
    agents=[tax_agent, investment_agent],
)

forest = ForestSwarm(trees=[finance_tree])

# Task automatically routes to best agent
result = forest.run("What are the tax implications of selling stocks?")
```

---

### Topology 11: GroupChat

**Pat**tern: **Con**versational collaboration **wi**th turn-based **dis**cussion.

```
+--------------------------------------------------+
|                   GROUP CHAT                      |
|                                                  |
|   [Manager]: "Let's discuss the architecture"    |
|       |                                          |
|       v                                          |
|   [Backend]: "I suggest microservices..."        |
|       |                                          |
|       v                                          |
|   [Frontend]: "That affects state management..." |
|       |                                          |
|       v                                          |
|   [Security]: "We need auth between services..." |
|       |                                          |
|       v                                          |
|   [Manager]: "Good points, consensus on..."      |
|                                                  |
+--------------------------------------------------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | None - turn-based |
| Latency | Sum of all turns |
| Best agent count | 3-8 |
| Failure mode | Moderator critical |
| Memory usage | Growing - conversation history |

**Use Cases:**

- **De**sign discussions
- **De**bate and argumentation
- **Con**sensus building
- **Br**ainstorming sessions

---

### Topology 12: MajorityVoting

**Pat**tern: **Ag**ents vote on **ou**tcomes, majority **wi**ns.

```
+-------+     +----------+
| Agent |---->|  VOTE 1  |----+
+-------+     +----------+    |
                              |
+-------+     +----------+    |    +-----------+     +--------+
| Agent |---->|  VOTE 2  |----+--->| TALLY     |---->| WINNER |
+-------+     +----------+    |    | (Majority)|     |        |
                              |    +-----------+     +--------+
+-------+     +----------+    |
| Agent |---->|  VOTE 3  |----+
+-------+     +----------+
```

**Char**acteristics:**

| Aspect | Value |
|--------|-------|
| Parallelism | Full - all vote simultaneously |
| Latency | Max voter latency + tally |
| Best agent count | 3-9 (odd numbers preferred) |
| Failure mode | Ties need resolution mechanism |
| Memory usage | Low - just vote collection |

**Use Cases:**

- **De**cision making
- **An**swer verification
- **Con**flict resolution
- **Qu**ality gates

---

### Topology 13: AgentRearrange

**Pat**tern: **Dy**namic flow **def**inition using **ar**row syntax.

```
Flow: "researcher -> writer, critic -> editor"

                  +------------+
              +-->|   writer   |--+
              |   +------------+  |
+----------+  |                   |   +----------+
| researcher|-+                   +-->|  editor  |
+----------+  |                   |   +----------+
              |   +------------+  |
              +-->|   critic   |--+
                  +------------+
```

**Syn**tax Rules:**

- `a -> b` = Sequential (a then b)
- `a, b -> c` = Parallel a and b, then c
- `a -> b, c` = a then parallel b and c

**Imp**lementation (Swarms Framework):

```python
from swarms import Agent, AgentRearrange

researcher = Agent(agent_name="researcher", model_name="gpt-4o-mini")
writer = Agent(agent_name="writer", model_name="gpt-4o-mini")
editor = Agent(agent_name="editor", model_name="gpt-4o-mini")
critic = Agent(agent_name="critic", model_name="gpt-4o-mini")

workflow = AgentRearrange(
    agents=[researcher, writer, editor, critic],
    flow="researcher -> writer, critic -> editor",
    team_awareness=True,
)

result = workflow.run("Create a blog post about AI safety")
```

---

### Topology 14: HeavySwarm

**Pat**tern: **Fi**ve-phase comprehensive **an**alysis protocol.

```
+-------------------------------------------------------------------+
|                        HEAVY SWARM                                 |
+-------------------------------------------------------------------+
|                                                                   |
|  PHASE 1: Task Decomposition                                      |
|  +-------------------------------------------------------+       |
|  | Break complex task into analyzable components         |       |
|  +-------------------------------------------------------+       |
|                            |                                      |
|                            v                                      |
|  PHASE 2: Question Generation                                     |
|  +-------------------------------------------------------+       |
|  | Generate role-specific questions for each component   |       |
|  +-------------------------------------------------------+       |
|                            |                                      |
|                            v                                      |
|  PHASE 3: Parallel Execution                                      |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|  | Researcher  |  | Analyst     |  | Alternatives|  | Verifier  | |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|                            |                                      |
|                            v                                      |
|  PHASE 4: Result Collection                                       |
|  +-------------------------------------------------------+       |
|  | Gather all outputs, identify conflicts/consensus      |       |
|  +-------------------------------------------------------+       |
|                            |                                      |
|                            v                                      |
|  PHASE 5: Synthesis                                               |
|  +-------------------------------------------------------+       |
|  | Combine insights into comprehensive recommendation    |       |
|  +-------------------------------------------------------+       |
|                                                                   |
+-------------------------------------------------------------------+
```

**Imp**lementation (Swarms Framework):

```python
from swarms.structs.heavy_swarm import HeavySwarm

swarm = HeavySwarm(
    timeout=300,
    worker_count=4,
    tools=[custom_search, custom_calculator],
)

result = swarm.run("Develop a comprehensive market entry strategy for AI SaaS")
```

---

## Rust-Based CCSwarm Coordination

**CCS**warm provides **pe**rformance-oriented **pa**tterns using **Ru**st's type **sy**stem for **co**mpile-time **sa**fety.

### Type-State Pattern

**Th**e type-state **pa**ttern encodes **va**lid state **ma**chine transitions **in** the type **sy**stem. **In**valid sequences **be**come compile **er**rors, not **ru**ntime crashes.

```rust
// States are types, not runtime values
struct Uninitialized;
struct Configured;
struct Connected;
struct Executing;

struct Agent<State> {
    config: Option<Config>,
    connection: Option<Connection>,
    _state: PhantomData<State>,
}

// Only valid transitions compile
impl Agent<Uninitialized> {
    fn configure(self, config: Config) -> Agent<Configured> {
        Agent {
            config: Some(config),
            connection: None,
            _state: PhantomData,
        }
    }
}

impl Agent<Configured> {
    fn connect(self) -> Agent<Connected> {
        // Connection logic...
    }
}

impl Agent<Connected> {
    fn execute_task(self, task: Task) -> Agent<Executing> {
        // Execution logic...
    }
}

// COMPILE ERROR: No such method on Agent<Uninitialized>
// let agent: Agent<Uninitialized> = Agent::new();
// agent.execute_task(task);  // Won't compile!
```

**Ben**efits:**

- **Ze**ro runtime **ch**ecks needed for **st**ate validation
- **Im**possible to **cr**eate invalid **st**ate sequences
- **ID**E autocomplete **on**ly shows **va**lid operations
- **Re**factoring is **sa**fe - compiler **ca**tches all **vi**olations

### Channel-Based Orchestration

**CCS**warm replaces **loc**k-based coordination **wi**th channel-based **me**ssage passing.

```
Lock-Based (Traditional):
+----------+     +----------+     +----------+
| Agent 1  |     | Agent 2  |     | Agent 3  |
+----+-----+     +----+-----+     +----+-----+
     |               |               |
     +---------------+---------------+
                     |
              +------+------+
              | Shared Lock |  <-- Contention point
              |  (Mutex)    |
              +-------------+

Channel-Based (CCSwarm):
+----------+     +----------+     +----------+
| Agent 1  |     | Agent 2  |     | Agent 3  |
+----+-----+     +----+-----+     +----+-----+
     |               |               |
     v               v               v
   +---+           +---+           +---+
   |ch1|           |ch2|           |ch3|  <-- Independent channels
   +-+-+           +-+-+           +-+-+
     |               |               |
     +---------------+---------------+
                     |
              +------+------+
              | Coordinator |  <-- Receives from all, no locking
              +-------------+
```

```rust
use tokio::sync::mpsc;

#[derive(Debug)]
enum OrchestratorMessage {
    TaskAssigned { agent_id: AgentId, task: Task },
    TaskCompleted { agent_id: AgentId, result: TaskResult },
    AgentError { agent_id: AgentId, error: AgentError },
    Shutdown,
}

struct ChannelOrchestrator {
    agent_senders: HashMap<AgentId, mpsc::Sender<AgentCommand>>,
    result_receiver: mpsc::Receiver<OrchestratorMessage>,
}

impl ChannelOrchestrator {
    async fn run(&mut self) {
        while let Some(msg) = self.result_receiver.recv().await {
            match msg {
                OrchestratorMessage::TaskCompleted { agent_id, result } => {
                    self.handle_completion(agent_id, result).await;
                }
                OrchestratorMessage::AgentError { agent_id, error } => {
                    self.handle_error(agent_id, error).await;
                }
                OrchestratorMessage::Shutdown => break,
            }
        }
    }
}
```

**Ben**efits:**

- **No** lock contention **un**der high **co**ncurrency
- **Na**tural backpressure **vi**a bounded **ch**annels
- **Cl**ear ownership - **no** data races **po**ssible
- **Sc**ales linearly **wi**th agent **co**unt

### Performance Characteristics

| Metric | CCSwarm | Python Alternatives |
|--------|---------|---------------------|
| Memory usage | ~70% reduction | Baseline |
| API cost | ~93% reduction (claimed) | Variable |
| State validation | Compile-time | Runtime checks |
| Concurrency model | Lock-free channels | Often Arc<Mutex> |

---

## NATS Messaging Backbone Patterns

**St**ation uses **NA**TS with **Je**tStream for **pr**oduction-grade **me**ssaging infrastructure.

### Lattice Architecture

```
+------------------------------------------------------------------+
|                         LATTICE MESH                              |
|  +---------------+    +---------------+    +---------------+      |
|  |  Station A    |    |  Station B    |    |  Station C    |      |
|  |  (Security)   |<-->|  (Orchestr.)  |<-->|   (SRE)       |      |
|  |               |    |               |    |               |      |
|  | VulnScanner   |    | Coordinator   |    | K8sHealth     |      |
|  | CVELookup     |    |               |    | LogAnalyzer   |      |
|  | NetworkAudit  |    |               |    | Deployer      |      |
|  +---------------+    +---------------+    +---------------+      |
|          |                   |                   |                 |
|          +-------------------+-------------------+                 |
|                              |                                    |
|                     +--------+--------+                           |
|                     |   NATS Server   |                           |
|                     |   + JetStream   |                           |
|                     +-----------------+                           |
+------------------------------------------------------------------+
```

### Operating Modes

| Mode | Command | Purpose |
|------|---------|---------|
| **Standalone** | `stn serve` | Default single-station, no mesh |
| **Orchestrator** | `stn serve --orchestration` | Runs embedded NATS (port 4222) |
| **Member** | `stn serve --lattice <url>` | Joins orchestrator mesh |

### Subject Hierarchy

```
lattice.
+-- presence.
|   +-- announce        # Station startup
|   +-- heartbeat       # Health signals
|   +-- goodbye         # Graceful shutdown
+-- station.{id}.
|   +-- agent.invoke    # Agent invocation
+-- work.
|   +-- {stationID}.assign  # Work assignment
|   +-- {workID}.response   # Work responses
+-- events.
    +-- StationJoined
    +-- StationLeft
    +-- AgentRegistered
    +-- WorkAssigned
    +-- WorkCompleted
    +-- ...
```

### Message Patterns

**Re**quest-Reply Pattern:

```go
// Publisher (Orchestrator)
client.Request("lattice.station.{id}.agent.invoke", request, timeout)

// Subscriber (Member Station)
client.Subscribe("lattice.station.{myID}.agent.invoke", handler)
```

**Qu**eue Group Pattern (Load Balancing):

```go
// Multiple workers, one receives
client.QueueSubscribe(subject, "agent-workers", handler)
```

**St**reaming Pattern (Progress Updates):

```go
// Publisher sends progress
client.Publish("lattice.work.{workID}.response", progressUpdate)

// Consumer streams
for msg := range subscription.Messages() {
    handleProgress(msg)
}
```

### JetStream Configuration

```go
type StreamConfig struct {
    StreamName string
    Subjects   []string
    MaxAge     time.Duration  // Default: 7 days
    MaxBytes   int64          // Default: 1GB
    MaxMsgs    int64
    Replicas   int
    Storage    nats.StorageType  // File-based
}

// Audit trail guarantees
DenyDelete: true  // No message deletion
DenyPurge: true   // No stream purging
// Append-only semantics
```

---

## Swarm Consensus and Byzantine Fault Tolerance

### Consensus Algorithm Comparison

| Algorithm | Consistency | Fault Tolerance | Best For | Latency | Throughput |
|-----------|-------------|-----------------|----------|---------|------------|
| **Raft** | Strong | f < n/2 | Enterprise default | 15-35ms | Medium |
| **Byzantine (PBFT)** | Strong | f < n/3 | Untrusted environments | 50-100ms | Low |
| **Gossip** | Eventual | f < n/2 | Large swarms (100+) | 10-40ms | High |
| **Tendermint** | Strong | f < n/3 | Blockchain-style | 100-500ms | Low |

### Raft Consensus (Default)

**Le**ader-based with **st**rong consistency.

```
+-----------------------------------------------------------+
|                     RAFT CONSENSUS                         |
+-----------------------------------------------------------+
|                                                           |
|   +----------+                                            |
|   |  LEADER  |  <-- Elected via voting                    |
|   | (Queen)  |                                            |
|   +----+-----+                                            |
|        |                                                  |
|        | Heartbeats + Log Replication                     |
|        |                                                  |
|   +----+----+----+----+----+                              |
|   |    |    |    |    |    |                              |
|   v    v    v    v    v    v                              |
| +--+ +--+ +--+ +--+ +--+ +--+                             |
| |F1| |F2| |F3| |F4| |F5| |F6|  Followers                  |
| +--+ +--+ +--+ +--+ +--+ +--+                             |
|                                                           |
|   Leader fails? --> New election                          |
|   Follower fails? --> Continue with majority              |
|                                                           |
+-----------------------------------------------------------+
```

**Con**figuration (Claude-Flow):

```typescript
const raftConfig = {
  algorithm: 'raft',
  electionTimeout: 150,      // ms
  heartbeatInterval: 50,     // ms
  logReplication: true
};
```

### Byzantine Fault Tolerant (BFT)

**Ha**ndles malicious/**bu**ggy agents.

```
Scenario: 3 of 8 agents give wrong output

Byzantine Consensus:
1. All agents vote on outcome
2. Supermajority (66%) required for acceptance
3. Faulty agents isolated and flagged
4. Correct result propagates to system
```

**Con**figuration (Claude-Flow):

```typescript
const bftConfig = {
  algorithm: 'byzantine',
  faultTolerance: 0.33,      // Tolerates up to 1/3 faulty
  viewChange: true,
  timeout: 10000             // Longer timeout for consensus
};
```

### Gossip Protocol

**Ev**entual consistency **fo**r large **sw**arms.

```
+-----------------------------------------------------------+
|                    GOSSIP PROTOCOL                         |
+-----------------------------------------------------------+
|                                                           |
|  Round 1:  Node A gossips to B, C, D                      |
|            +---+                                          |
|            | A | ----> B, C, D                            |
|            +---+                                          |
|                                                           |
|  Round 2:  B, C, D gossip to their neighbors              |
|            B ----> E, F                                   |
|            C ----> G, H                                   |
|            D ----> I, J                                   |
|                                                           |
|  Round N:  Eventually all nodes converge                  |
|            (Exponential spread)                           |
|                                                           |
|  Convergence: 99%+ agreement                              |
|                                                           |
+-----------------------------------------------------------+
```

**Con**figuration (Claude-Flow):

```typescript
const gossipConfig = {
  algorithm: 'gossip',
  fanout: 3,                 // Number of peers to gossip to
  interval: 100,             // ms between rounds
  convergenceThreshold: 0.99 // 99% agreement
};
```

### Consensus Selection Guide

```
+-------------------------------------------------------------------+
|              CONSENSUS ALGORITHM SELECTION                         |
+-------------------------------------------------------------------+
|                                                                   |
|  How many agents?                                                 |
|  +-- < 20: Raft (simple, strong consistency)                      |
|  +-- 20-100: Consider Raft or Gossip based on consistency needs   |
|  +-- > 100: Gossip (eventual consistency, scales well)            |
|                                                                   |
|  Do you need Byzantine tolerance (untrusted agents)?              |
|  +-- Yes: Byzantine/PBFT (higher latency, lower throughput)       |
|  +-- No: Raft or Gossip                                           |
|                                                                   |
|  Is strong consistency required?                                  |
|  +-- Yes: Raft or Byzantine                                       |
|  +-- No: Gossip (faster, scales better)                           |
|                                                                   |
|  Default recommendation: Start with Raft, scale to Gossip         |
|                                                                   |
+-------------------------------------------------------------------+
```

---

## When to Use Which Topology

### Decision Tree

```
+-------------------------------------------------------------------+
|                 TOPOLOGY SELECTION DECISION TREE                   |
+-------------------------------------------------------------------+
|                                                                   |
|  What's your coordination need?                                   |
|                                                                   |
|  Linear dependency (A must complete before B)?                    |
|  +---> SequentialWorkflow                                         |
|                                                                   |
|  Independent parallel work?                                       |
|  +---> ConcurrentWorkflow                                         |
|                                                                   |
|  Boss delegates to workers with feedback?                         |
|  +---> HierarchicalSwarm                                          |
|                                                                   |
|  Experts synthesize opinions?                                     |
|  +---> MixtureOfAgents                                            |
|                                                                   |
|  Complex dependencies (DAG)?                                      |
|  +---> GraphWorkflow                                              |
|                                                                   |
|  Dynamic routing to specialists?                                  |
|  +---> ForestSwarm                                                |
|                                                                   |
|  Peer-to-peer without central coordinator?                        |
|  +---> Mesh                                                       |
|                                                                   |
|  Conversational collaboration?                                    |
|  +---> GroupChat                                                  |
|                                                                   |
|  Voting/consensus needed?                                         |
|  +---> MajorityVoting or CouncilAsAJudge                          |
|                                                                   |
|  Comprehensive analysis (5 phases)?                               |
|  +---> HeavySwarm                                                 |
|                                                                   |
|  Don't know? Let the framework decide:                            |
|  +---> SwarmRouter with swarm_type="auto"                         |
|                                                                   |
+-------------------------------------------------------------------+
```

### Scale-Based Selection

| Agent Count | Recommended Topologies | Notes |
|-------------|------------------------|-------|
| 1 | Plain Agent class | No orchestration needed |
| 2-5 | Sequential, Concurrent | Simple coordination |
| 5-20 | Hierarchical, MoA, Mesh | Medium complexity |
| 20-50 | GraphWorkflow, Star | Structured dependencies |
| 50-100 | ForestSwarm, Hybrid | Large agent pools |
| 100+ | Hybrid with Gossip consensus | Factory scale |

### Use Case Matrix

| Use Case | Primary Topology | Alternative | Why |
|----------|------------------|-------------|-----|
| Document pipeline | Sequential | GraphWorkflow | Linear refinement |
| Multi-analyst research | Concurrent | MoA | Parallel perspectives |
| Development team | Hierarchical | Hybrid | Manager/worker pattern |
| Expert consultation | MoA | GroupChat | Synthesis needed |
| Build system | GraphWorkflow | Sequential | Complex dependencies |
| Customer routing | ForestSwarm | Star | Semantic matching |
| Design review | GroupChat | MajorityVoting | Discussion needed |
| Quality gate | MajorityVoting | MoA | Consensus required |
| Full audit | HeavySwarm | Hierarchical | Comprehensive analysis |

---

## Mental Models

### Mental Model 1: The Factory Floor

**Th**ink of swarm **to**pologies like a **ma**nufacturing facility.

```
+-------------------------------------------------------------------+
|                        FACTORY FLOOR MODEL                         |
+-------------------------------------------------------------------+
|                                                                   |
|  SEQUENTIAL = Assembly Line                                       |
|  +-------+     +-------+     +-------+     +-------+              |
|  |Station| --> |Station| --> |Station| --> |Product|              |
|  |   1   |     |   2   |     |   3   |     |       |              |
|  +-------+     +-------+     +-------+     +-------+              |
|  Work flows linearly through stations                             |
|                                                                   |
|  CONCURRENT = Parallel Workstations                               |
|  +-------+  +-------+  +-------+                                  |
|  |Work A |  |Work B |  |Work C |  --> All finish --> Collect      |
|  +-------+  +-------+  +-------+                                  |
|  Independent work, collected at end                               |
|                                                                   |
|  HIERARCHICAL = Management Structure                              |
|         [Factory Manager]                                         |
|              /    \                                               |
|      [Line Lead] [Line Lead]                                      |
|         /  \         /  \                                         |
|     [W1] [W2]    [W3] [W4]                                        |
|  Manager coordinates, workers execute                             |
|                                                                   |
|  MESH = Flexible Manufacturing Cell                               |
|  Any station can send work to any other                           |
|  Self-organizing based on demand                                  |
|                                                                   |
+-------------------------------------------------------------------+
```

### Mental Model 2: The Orchestra

**Ea**ch topology is a **dif**ferent musical **ar**rangement.

```
+-------------------------------------------------------------------+
|                        ORCHESTRA MODEL                             |
+-------------------------------------------------------------------+
|                                                                   |
|  SEQUENTIAL = Round (Row, Row, Row Your Boat)                     |
|  One section starts, next joins, next joins...                    |
|                                                                   |
|  CONCURRENT = Full Orchestra Tutti                                |
|  All sections play simultaneously                                 |
|                                                                   |
|  HIERARCHICAL = Conductor + Sections                              |
|  Conductor coordinates, section leaders manage players            |
|                                                                   |
|  MIXTURE-OF-AGENTS = Soloists + Orchestra                         |
|  Each soloist plays their part, orchestra combines                |
|                                                                   |
|  GROUPCHAT = Jazz Improvisation                                   |
|  Musicians trade solos, respond to each other                     |
|                                                                   |
+-------------------------------------------------------------------+
```

### Mental Model 3: The Nervous System

**To**pologies mirror **dif**ferent neural **ar**chitectures.

```
+-------------------------------------------------------------------+
|                    NERVOUS SYSTEM MODEL                            |
+-------------------------------------------------------------------+
|                                                                   |
|  SEQUENTIAL = Reflex Arc                                          |
|  Stimulus -> Sensory Neuron -> Interneuron -> Motor Neuron        |
|  Direct pathway, predictable response                             |
|                                                                   |
|  HIERARCHICAL = Brain Hierarchy                                   |
|  Cortex (planning) -> Basal Ganglia (coordination) -> Motor       |
|  Higher centers coordinate lower centers                          |
|                                                                   |
|  MESH = Neural Network                                            |
|  Distributed processing, no single control point                  |
|  Emergent behavior from connections                               |
|                                                                   |
|  GOSSIP = Hormone System                                          |
|  Slow broadcast, eventually reaches all cells                     |
|  No direct addressing, chemical signals spread                    |
|                                                                   |
+-------------------------------------------------------------------+
```

---

## Checkpoints

### Checkpoint 1: After Topology Selection

**Wh**ere you are:** You've **cho**sen a topology **ba**sed on your **us**e case.

**Ver**ify your state:**

```python
# For Swarms Framework
from swarms.structs.swarm_router import SwarmType

# Verify you can enumerate available types
available_types = [t.value for t in SwarmType]
print(f"Available topologies: {available_types}")
# Should include: SequentialWorkflow, ConcurrentWorkflow, etc.
```

```bash
# For Claude-Flow
npx claude-flow@v3alpha config get topology.type
# Should return: hierarchical, mesh, ring, star, or hybrid
```

**Yo**u should see:**

- **Cl**ear understanding of **wh**y your topology **fi**ts the use case
- **Ab**ility to articulate **tra**deoffs (latency vs parallelism, etc.)
- **Co**nfidence in agent **co**unt range

**If** you're uncertain:**

- **Re**view the Decision **Tr**ee section
- **St**art with Sequential/**Co**ncurrent for simple cases
- **Us**e SwarmRouter with **sw**arm_type="auto" to **le**t framework decide

**Th**is connects to:** Agent **co**nfiguration -> Topology **im**plementation -> Consensus **se**lection

---

### Checkpoint 2: After Agent Configuration

**Wh**ere you are:** Agents **ar**e defined with **ro**les and capabilities.

**Ver**ify your state:**

```python
# Swarms Framework
for agent in agents:
    print(f"Agent: {agent.agent_name}")
    print(f"  Model: {agent.model_name}")
    print(f"  Tools: {len(agent.tools) if agent.tools else 0}")
    print(f"  System Prompt Length: {len(agent.system_prompt)}")
```

```bash
# Claude-Flow
npx claude-flow@v3alpha agent list --detailed
# Should show: agent names, types, status
```

**Yo**u should see:**

- **Ea**ch agent has **di**stinct role/system prompt
- **Mo**del selection matches **ta**sk complexity
- **To**ols are assigned **ap**propriately
- **No** duplicate agent **na**mes in pool

**If** agents seem wrong:**

- **Sp**ecialize prompts more **fo**r each role
- **Ma**tch model tier to **ta**sk difficulty
- **En**sure tool access **al**igns with responsibilities

**Th**is connects to:** Workflow/Swarm **cr**eation -> Execution -> **Mo**nitoring

---

### Checkpoint 3: After First Execution

**Wh**ere you are:** Your **sw**arm has completed **on**e full task.

**Ver**ify your state:**

```python
# Swarms Framework
print(f"Result length: {len(result)}")
print(f"Result preview: {result[:200]}...")

# Check for errors in output
if "error" in result.lower() or "failed" in result.lower():
    print("WARNING: Possible errors in output")
```

```bash
# Claude-Flow
npx claude-flow@v3alpha swarm status
# Should show: all agents completed, no errors

npx claude-flow@v3alpha memory search --query "last task"
# Should show: stored patterns from execution
```

**Yo**u should see:**

- **Re**sult is coherent **an**d addresses task
- **No** agent errors **or** timeouts
- **Ex**ecution time **re**asonable for topology
- **Pa**tterns stored for **le**arning (if applicable)

**If** execution failed:**

- **Ch**eck agent timeouts/**li**mits
- **Ve**rify API keys **an**d quotas
- **Re**view agent system **pr**ompts for clarity
- **Co**nsider simpler topology **fi**rst

**Th**is connects to:** Optimization -> **Sc**aling -> Production **de**ployment

---

### Checkpoint 4: After Scaling

**Wh**ere you are:** Swarm **is** handling production **lo**ad.

**Ver**ify your state:**

```bash
# Claude-Flow with metrics
npx claude-flow@v3alpha perf diagnose
# Should show: latency, throughput, memory metrics

npx claude-flow@v3alpha swarm status --detailed
# Should show: agent utilization, queue depths
```

```python
# Swarms with logging
import logging
logging.basicConfig(level=logging.INFO)

# Monitor execution times
import time
start = time.time()
result = swarm.run(task)
elapsed = time.time() - start
print(f"Execution time: {elapsed:.2f}s")
```

**Yo**u should see:**

- **La**tency within expected **ra**nge for topology
- **Me**mory usage stable/**pr**edictable
- **No** agent starvation/**bo**ttlenecks
- **Co**nsensus achieving **co**nsistently (if applicable)

**If** scaling issues:**

- **Co**nsider Gossip consensus **fo**r large swarms
- **En**able caching/compression
- **Re**duce agent count **or** add load balancing
- **Re**view topology choice **fo**r scale

---

## Troubleshooting

### Topology-Specific Failures

#### Sequential Workflow Issues

**Pro**blem: Chain breaks **mi**d-execution

```
Agent 1 completes -> Agent 2 fails -> Agent 3 never starts
```

**So**lutions:**

1. **Ad**d retry logic **pe**r agent:
   ```python
   workflow = SequentialWorkflow(
       agents=agents,
       max_loops=3,  # Retry entire chain
   )
   ```

2. **Im**plement per-agent **fa**llback:
   ```python
   agent = Agent(
       model_name="gpt-4o",
       fallback_models=["gpt-4o-mini", "gpt-3.5-turbo"],
   )
   ```

3. **Ad**d checkpointing between **ag**ents to resume **fr**om failure point

---

#### Concurrent Workflow Issues

**Pro**blem: Inconsistent **re**sults from **pa**rallel agents

```
Agent 1: "Price is $100"
Agent 2: "Price is $150"
Agent 3: "Price is $120"
```

**So**lutions:**

1. **Ad**d aggregation step:
   ```python
   aggregator = Agent(
       agent_name="Aggregator",
       system_prompt="Synthesize and reconcile conflicting information.",
   )
   ```

2. **Us**e MixtureOfAgents **in**stead for **bu**ilt-in synthesis

3. **Ad**d MajorityVoting **fo**r factual **qu**estions

---

#### Hierarchical Swarm Issues

**Pro**blem: Director **bo**ttleneck

```
Director overwhelmed with 50+ workers
Response times increasing
```

**So**lutions:**

1. **Ad**d intermediate **le**aders:
   ```python
   # Instead of 1 director + 50 workers
   # Use 1 director + 5 team leads + 10 workers each
   ```

2. **Re**duce feedback **lo**op frequency:
   ```python
   swarm = HierarchicalSwarm(
       max_loops=2,  # Reduce from 5
   )
   ```

3. **Sw**itch to Hybrid **to**pology with **mul**tiple hierarchies

---

#### Mesh Network Issues

**Pro**blem: Message **st**orms in **la**rge mesh

```
N^2 communication complexity
Network congestion
```

**So**lutions:**

1. **Us**e Gossip instead **of** full mesh:
   ```typescript
   consensus: {
     algorithm: 'gossip',
     fanout: 3,  // Only gossip to 3 peers
   }
   ```

2. **Ad**d message batching/**th**rottling

3. **Co**nsider Hierarchical **fo**r structured **co**mmunication

---

#### Consensus Failures

**Pro**blem: Consensus **ne**ver achieves

```
Timeout: could not reach agreement
```

**So**lutions:**

1. **In**crease timeout:
   ```json
   {
     "consensus": {
       "timeout": 10000
     }
   }
   ```

2. **Lo**wer threshold:
   ```json
   {
     "consensus": {
       "threshold": 0.5
     }
   }
   ```

3. **Sw**itch algorithm for **sc**ale:
   ```json
   {
     "consensus": {
       "algorithm": "gossip"
     }
   }
   ```

4. **Ch**eck for network **pa**rtitions or **ag**ent failures

---

#### NATS/Station Issues

**Pro**blem: Agent **no**t appearing in **me**sh

```
Agent registered locally but not visible to other stations
```

**So**lutions:**

1. **Ch**eck station registration:
   ```bash
   stn lattice status
   ```

2. **Ve**rify agent name **un**iqueness across mesh

3. **Ch**eck presence heartbeat:
   ```bash
   stn lattice --nats nats://localhost:4222 presence
   ```

4. **Re**view conflict detection **lo**gs

---

### General Debugging Commands

```bash
# Claude-Flow diagnostics
npx claude-flow@v3alpha doctor
npx claude-flow@v3alpha perf diagnose
npx claude-flow@v3alpha perf bottlenecks
npx claude-flow@v3alpha logs --level error

# Station diagnostics
stn doctor
stn status
stn lattice status

# CCSwarm diagnostics
ccswarm doctor
ccswarm health --agent <name>
CCSWARM_LOG_LEVEL=debug ccswarm start
```

---

## Integration Patterns

### Combining Topologies

#### Pattern 1: Sequential + Concurrent

**Us**e case: Research **pi**peline with **pa**rallel analysis.

```
            +----------------+
            |   Researcher   |  Sequential: Data Collection
            +-------+--------+
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
    +-------+   +-------+   +-------+
    |Analyst|   |Analyst|   |Analyst|  Concurrent: Analysis
    |   1   |   |   2   |   |   3   |
    +---+---+   +---+---+   +---+---+
        |           |           |
        +-----------+-----------+
                    |
                    v
            +-------+-------+
            |  Synthesizer  |  Sequential: Synthesis
            +---------------+
```

```python
# Implementation with AgentRearrange
workflow = AgentRearrange(
    agents=[researcher, analyst1, analyst2, analyst3, synthesizer],
    flow="researcher -> analyst1, analyst2, analyst3 -> synthesizer",
)
```

---

#### Pattern 2: Hierarchical + MoA

**Us**e case: Expert **co**nsultation with **ma**nagement oversight.

```
                 +-------------+
                 |   Manager   |  Hierarchical: Coordination
                 +------+------+
                        |
           +------------+------------+
           |                         |
           v                         v
    +------+------+           +------+------+
    |Expert Team 1|           |Expert Team 2|  MoA: Each team
    |   (MoA)     |           |    (MoA)    |
    +------+------+           +------+------+
           |                         |
    +------+------+           +------+------+
    | Aggregator 1|           | Aggregator 2|
    +------+------+           +------+------+
           |                         |
           +------------+------------+
                        |
                        v
                 +------+------+
                 |Final Synth. |
                 +-------------+
```

---

#### Pattern 3: ForestSwarm + GraphWorkflow

**Us**e case: Dynamic **rou**ting with **com**plex dependencies.

```
+-------+     +-------------+     +---------------+
| Task  | --> | ForestSwarm | --> | Best Agent    |
+-------+     | (Routing)   |     | for this task |
              +-------------+     +-------+-------+
                                          |
                                          v
                               +----------+----------+
                               | GraphWorkflow       |
                               | (Agent executes     |
                               |  with dependencies) |
                               +---------------------+
```

---

### Framework Integration

#### Swarms + Station

**Us**e Station as **me**ssaging backbone **fo**r Swarms.

```python
# Swarms agent with Station coordination
from swarms import Agent
import nats

async def station_coordinator(task: str) -> str:
    nc = await nats.connect("nats://localhost:4222")

    # Publish work assignment
    await nc.publish(
        f"lattice.work.swarms-agent.assign",
        task.encode()
    )

    # Wait for result
    sub = await nc.subscribe(f"lattice.work.*.response")
    msg = await sub.next_msg()
    return msg.data.decode()

agent = Agent(
    agent_name="Station-Backed-Agent",
    tools=[station_coordinator],
)
```

---

#### Claude-Flow + CCSwarm

**Us**e Claude-Flow **fo**r orchestration, **CCS**warm for **pe**rformance-critical paths.

```rust
// CCSwarm handles performance-critical tasks
let high_perf_agent = Agent::<Connected>::new()
    .configure(config)
    .connect();

// Results sent to Claude-Flow for coordination
// via shared state or message queue
```

---

## Performance Comparison Tables

### Latency Comparison

| Topology | Latency Formula | Example (3 agents @ 2s each) |
|----------|-----------------|------------------------------|
| Sequential | Sum(all agents) | 6s |
| Concurrent | Max(all agents) | 2s |
| Hierarchical | Director + Max(workers) | ~3s |
| MoA | Max(experts) + Aggregator | ~4s |
| GraphWorkflow | Critical path | Varies |
| Ring | N * per-hop latency | ~6s (full pass) |

### Throughput Comparison

| Topology | Tasks/Hour (10 agents) | Scaling Factor |
|----------|------------------------|----------------|
| Sequential | 60 | O(1/n) |
| Concurrent | 600 | O(n) |
| Hierarchical | 300 | O(n/2) |
| Mesh | 500 | O(n) with overhead |
| ForestSwarm | 550 | O(n) with routing |

### Memory Usage Comparison

| Topology | Memory Factor | Notes |
|----------|---------------|-------|
| Sequential | 1x | One agent active |
| Concurrent | Nx | All agents active |
| Hierarchical | 1.5x | Director + active workers |
| Mesh | 2x | Connection overhead |
| MoA | Nx + 1 | Experts + aggregator |

### Cost Comparison (API Calls)

| Topology | API Calls per Task | Cost Factor |
|----------|-------------------|-------------|
| Sequential | N (number of agents) | 1x |
| Concurrent | N | 1x |
| Hierarchical | N + coordination | 1.2x |
| MoA | N + 1 (aggregator) | 1.1x |
| MajorityVoting | N | 1x |
| HeavySwarm | 5+ phases | 2-3x |

---

## Source Attribution

### Primary Sources

| Source | Framework | Key Contribution |
|--------|-----------|------------------|
| `031-claude-flow-enterprise.md` | Claude-Flow v3 | 5 topologies, consensus algorithms, 54+ agents |
| `032-ccswarm-rust.md` | CCSwarm | Type-state patterns, channel coordination |
| `035-swarms-framework.md` | Swarms | 14+ topologies, SwarmRouter |
| `037-station-nats.md` | Station | NATS messaging backbone, Lattice mesh |

### Framework Details

| Framework | Version | Language | License | Stars |
|-----------|---------|----------|---------|-------|
| Claude-Flow | 3.0.0-alpha.104 | TypeScript | MIT | 12.5k |
| CCSwarm | 0.3.8 | Rust | MIT | 84 |
| Swarms | 8.9.0 | Python | Apache 2.0 | 5.6k+ |
| Station | Latest | Go | Apache 2.0 | Active |

### Key Authors/Maintainers

- **Claude-Flow:** ruvnet
- **CCSwarm:** nwiizo
- **Swarms:** Kye Gomez (@kyegomez)
- **Station:** CloudShip AI

### Reliability Assessment

| Framework | Documentation | Stability | Community | Production-Ready |
|-----------|---------------|-----------|-----------|------------------|
| Claude-Flow | HIGH | ALPHA | HIGH | MEDIUM |
| CCSwarm | MEDIUM | BETA | LOW | MEDIUM |
| Swarms | HIGH | STABLE | HIGH | HIGH |
| Station | HIGH | BETA | MEDIUM | MEDIUM |

### Related Documents in This Repository

- `synthesis/mastery-multi-agent.md` - Multi-agent patterns overview
- `synthesis/mastery-ralph-complete.md` - Ralph pattern (integrates with topologies)
- `synthesis/architecture-complexity-ladder.md` - Complexity progression
- `extractions/orchestration/006-gas-town-*.md` - Gas Town factory pattern

---

## Document Metadata

- **Created:** 2026-01-19
- **Lines:** 1,650+
- **Sections:** 12 major sections
- **Topologies Covered:** 14+
- **Code Examples:** 40+
- **ASCII Diagrams:** 25+
- **Tables:** 20+
- **Checkpoints:** 4
- **Troubleshooting Entries:** 10+
- **Mental Models:** 3

---

*End of Swarm Topologies Architecture Guide*
