# Swarms Framework - Deep Extraction

---

## You Are Here

**Context:** You're exploring enterprise-grade multi-agent orchestration frameworks that go beyond single-agent patterns like Ralph. Swarms represents the high-complexity end of the orchestration spectrum - designed for spawning and coordinating hundreds to thousands of agents with sophisticated topology patterns.

**In the Complexity Ladder:**
```
Level 0: Single Session     ← You likely started here
Level 1: External Memory
Level 2: Hooks & Automation
Level 3: Subagent Delegation
Level 4: Multi-Agent Native  ← CC Mirror lives here
Level 5: Orchestration       ← Gas Town, Ralph orchestrators
Level 6: Factory Scale       ← Swarms operates here
Level 7: Enterprise Fleet    ← Swarms at full deployment
```

**Prerequisites:**
- Understanding of basic multi-agent patterns
- Familiarity with Python async programming
- Comfort with enterprise-scale systems

**Related Documents:**
- `research-ralph-expanded.md` - Single-agent iteration loops
- `research-gas-town-expanded.md` - Agent factory patterns
- `research-multi-agent-patterns-expanded.md` - Coordination strategies

---

## What This Is

### Overview

**Swarms** is an enterprise-grade, production-ready multi-agent orchestration framework created by Kye Gomez. It provides a comprehensive toolkit for building, deploying, and managing swarms of autonomous AI agents that collaborate to solve complex problems.

**Key Statistics:**
- **Current Version:** 8.9.0 (as of January 2026)
- **GitHub Stars:** 5.6k+
- **Commits:** 4,791+
- **License:** Apache 2.0 / MIT
- **Python Support:** 3.10 - 3.13

### Core Philosophy

Swarms takes inspiration from biological swarm intelligence:

> "Just as a swarm of bees works together, communicating and coordinating their actions for the betterment of the hive, swarming LLM agents can work together."

**Design Principles:**
1. **Enterprise-first:** 99.9%+ uptime guarantee, comprehensive logging
2. **Multi-topology:** Sequential, parallel, hierarchical, graph-based orchestration
3. **Model-agnostic:** OpenAI, Anthropic, Groq, DeepSeek, local models
4. **Production-ready:** Rate limiting, audit logging, security features
5. **Backward compatible:** Works with LangChain, AutoGen, CrewAI agents

### What Makes Swarms Different

| Feature | Swarms | Gas Town | Ralph | CC Mirror |
|---------|--------|----------|-------|-----------|
| **Scale** | 100s-1000s agents | 10-50 agents | 1 agent | 5-20 agents |
| **Topologies** | 14+ built-in | Role-based | Linear loop | DAG-based |
| **Language** | Python | Go | Bash | Native CC |
| **Learning Curve** | High | High | Low | Medium |
| **Cost** | High (scale) | High (accounts) | Low | Medium |
| **Use Case** | Enterprise AI | Product dev | Feature work | Task coordination |

---

## Why It Matters

### The Scale Problem

Most multi-agent frameworks handle 2-10 agents. Real enterprise scenarios demand:
- **Parallel analysis:** 100 documents analyzed simultaneously
- **Market research:** 50 specialized agents covering different sectors
- **Code generation:** Hierarchical teams with architects, developers, testers
- **Customer service:** Routing to domain-specific specialist agents

### Swarms Solves

1. **Topology Selection:** Choose the right coordination pattern for your problem
2. **Agent Lifecycle:** Spawn, coordinate, terminate agents at scale
3. **Communication:** Message passing between agents without N^2 complexity
4. **Resource Management:** Load balancing, rate limiting, cost control
5. **Observability:** Logging, tracing, monitoring across the swarm

### Real-World Applications

From Swarms documentation and community:

| Domain | Use Case | Scale |
|--------|----------|-------|
| Finance | Portfolio analysis across sectors | 50+ parallel agents |
| Healthcare | Multi-specialist diagnostic teams | Hierarchical 10-20 agents |
| Research | Literature review and synthesis | Sequential 5-agent pipeline |
| E-commerce | Product recommendation ensemble | Mixture of 8 expert agents |
| Legal | Contract review with specialists | Graph workflow, 15 agents |

---

## Architecture Deep Dive

### Core Components

```
┌─────────────────────────────────────────────────────────────────┐
│                        SWARMS ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LAYER 1: Agent Foundation                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Agent Class                                             │   │
│  │  ├── LLM Integration (model_name)                        │   │
│  │  ├── Tools (callable functions)                          │   │
│  │  ├── Long-term Memory (vector DBs)                       │   │
│  │  ├── Handoffs (agent delegation)                         │   │
│  │  └── MCP Integration (tool discovery)                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  LAYER 2: Swarm Structures                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Workflows & Swarms                                      │   │
│  │  ├── SequentialWorkflow                                  │   │
│  │  ├── ConcurrentWorkflow                                  │   │
│  │  ├── HierarchicalSwarm                                   │   │
│  │  ├── MixtureOfAgents                                     │   │
│  │  ├── GraphWorkflow                                       │   │
│  │  ├── ForestSwarm                                         │   │
│  │  ├── GroupChat                                           │   │
│  │  └── More (14+ patterns)                                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  LAYER 3: Orchestration                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  SwarmRouter                                             │   │
│  │  ├── Automatic swarm type selection                      │   │
│  │  ├── Batch processing                                    │   │
│  │  ├── Autosave & persistence                              │   │
│  │  └── Multi-output formats (JSON, YAML, etc.)             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  LAYER 4: Enterprise Features                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Production Infrastructure                               │   │
│  │  ├── AutoSwarmBuilder (automatic agent generation)       │   │
│  │  ├── SpreadSheetSwarm (mass agent management)            │   │
│  │  ├── Marketplace integration                             │   │
│  │  ├── MCP / X402 / AOP protocols                          │   │
│  │  └── Multi-provider support                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### The Agent Class

The fundamental building block - each agent combines:

```python
from swarms import Agent

agent = Agent(
    # Identity
    agent_name="Analyst",

    # Brain
    model_name="gpt-4o-mini",  # or "claude-3-5-sonnet", etc.
    system_prompt="You are a financial analyst specializing in tech stocks.",

    # Capabilities
    max_loops="auto",  # Autonomous planning when set to "auto"
    tools=[calculate_roi, fetch_stock_data],  # Callable functions

    # Memory
    long_term_memory=chroma_db_instance,  # Vector database

    # Delegation
    handoffs=[specialist_agent_1, specialist_agent_2],  # For task routing

    # Integration
    mcp_urls=["http://localhost:8080/mcp"],  # MCP server connections
    fallback_models=["claude-3-haiku", "gpt-3.5-turbo"],  # Backup models

    # Behavior
    interactive=True,  # Enable human-in-the-loop
    streaming=True,  # Real-time output
)
```

**Key Methods:**

| Method | Purpose | Use Case |
|--------|---------|----------|
| `run(task)` | Execute single task | Basic agent invocation |
| `run_batched(tasks)` | Process multiple tasks | Parallel analysis |
| `run_multiple_images(task, imgs)` | Analyze images | Vision tasks |
| `continuous_run_with_answer(task, answer, attempts)` | Retry until correct | Self-verification |
| `add_tool() / add_tools()` | Extend capabilities | Dynamic tool addition |
| `save_state() / load_state()` | Persistence | Session recovery |
| `plan(task)` | Create execution plan | Task decomposition |

### Swarm Topologies

Swarms provides 14+ orchestration patterns. Here are the core ones:

#### 1. SequentialWorkflow

**Pattern:** Linear chain where each agent's output becomes the next agent's input.

```
Agent 1 → Agent 2 → Agent 3 → Result
```

**Use Cases:**
- Document processing pipelines
- Step-by-step analysis
- Content refinement chains

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

#### 2. ConcurrentWorkflow

**Pattern:** Multiple agents work simultaneously on the same or different tasks.

```
         ┌─ Agent 1 ─┐
Task ────┼─ Agent 2 ─┼──── Results
         └─ Agent 3 ─┘
```

**Use Cases:**
- Parallel data analysis
- Multi-perspective evaluation
- Speed-critical processing

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

results = concurrent.run(
    "Analyze NVIDIA stock for investment potential"
)
```

#### 3. HierarchicalSwarm

**Pattern:** Director agent coordinates specialized workers with feedback loops.

```
              ┌─────────┐
              │ Director│
              └────┬────┘
        ┌─────────┼─────────┐
        ▼         ▼         ▼
    ┌───────┐ ┌───────┐ ┌───────┐
    │Worker1│ │Worker2│ │Worker3│
    └───────┘ └───────┘ └───────┘
```

**Use Cases:**
- Project management workflows
- Complex task decomposition
- Quality-controlled pipelines

```python
from swarms import Agent, HierarchicalSwarm

# Workers
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
    planning_enabled=True,  # Enable task planning
    interactive=False,  # No dashboard
)

result = swarm.run("Build a REST API for user authentication")
```

#### 4. MixtureOfAgents (MoA)

**Pattern:** Multiple experts work in parallel, then an aggregator synthesizes their outputs.

```
         ┌─ Expert 1 ─┐
Task ────┼─ Expert 2 ─┼──── Aggregator ──── Final Result
         └─ Expert 3 ─┘
```

**Use Cases:**
- Complex problem solving
- Multi-domain expertise
- Consensus building

```python
from swarms import Agent
from swarms.structs.swarm_router import SwarmRouter, SwarmType

# Experts
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

# Aggregator
aggregator = Agent(
    agent_name="Aggregator",
    system_prompt="Synthesize expert opinions into actionable recommendations.",
    model_name="gpt-4o",
)

router = SwarmRouter(
    swarm_type=SwarmType.MixtureOfAgents,
    agents=[python_expert, security_expert, architecture_expert],
    aggregator_agent=aggregator,
)

result = router.run("Review this codebase for production readiness")
```

#### 5. GraphWorkflow

**Pattern:** Directed Acyclic Graph (DAG) for complex dependencies.

```
        A
       / \
      B   C
       \ / \
        D   E
         \ /
          F
```

**Use Cases:**
- Build system-like dependencies
- Complex data pipelines
- Research workflows

```python
from swarms import Agent
from swarms.structs.graph_workflow import GraphWorkflow

# Create agents
data_collector = Agent(agent_name="DataCollector", model_name="gpt-4o-mini")
analyzer_1 = Agent(agent_name="Analyzer1", model_name="gpt-4o-mini")
analyzer_2 = Agent(agent_name="Analyzer2", model_name="gpt-4o-mini")
synthesizer = Agent(agent_name="Synthesizer", model_name="gpt-4o")

# Build graph
workflow = GraphWorkflow(backend="networkx")  # or "rustworkx" for performance

# Add nodes
workflow.add_nodes([data_collector, analyzer_1, analyzer_2, synthesizer])

# Add edges (dependencies)
workflow.add_edge(data_collector, analyzer_1)
workflow.add_edge(data_collector, analyzer_2)
workflow.add_edges_to_target([analyzer_1, analyzer_2], synthesizer)

# Execute
workflow.compile()  # Optimize for faster execution
result = workflow.run("Analyze market trends in AI sector")

# Visualize
workflow.visualize("workflow_diagram.png")
```

#### 6. ForestSwarm

**Pattern:** Dynamic agent selection using semantic similarity.

```
Task ──── Embedding ──── Tree Selection ──── Agent Selection
              │                │                    │
              ▼                ▼                    ▼
         [0.2, 0.8...]    "Finance Tree"      "Tax Specialist"
```

**Use Cases:**
- Large agent pools with specialization
- Dynamic task routing
- Expertise matching

```python
from swarms.structs.forest_swarm import ForestSwarm, Tree, TreeAgent

# Create specialized agents
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

# Organize into trees
finance_tree = Tree(
    name="Finance-Tree",
    agents=[tax_agent, investment_agent],
)

# Create forest
forest = ForestSwarm(trees=[finance_tree])

# Task automatically routes to best agent
result = forest.run("What are the tax implications of selling stocks?")
```

#### 7. AgentRearrange

**Pattern:** Dynamic flow definition using arrow syntax.

```python
from swarms import Agent, AgentRearrange

researcher = Agent(agent_name="researcher", model_name="gpt-4o-mini")
writer = Agent(agent_name="writer", model_name="gpt-4o-mini")
editor = Agent(agent_name="editor", model_name="gpt-4o-mini")
critic = Agent(agent_name="critic", model_name="gpt-4o-mini")

# Sequential: researcher → writer → editor
# Parallel then merge: researcher → writer, critic → editor

workflow = AgentRearrange(
    agents=[researcher, writer, editor, critic],
    flow="researcher -> writer, critic -> editor",  # Einstein-inspired syntax
    team_awareness=True,
)

result = workflow.run("Create a blog post about AI safety")
```

**Flow Syntax:**
- `a -> b` = Sequential (a then b)
- `a, b -> c` = Parallel a and b, then c
- `a -> b, c` = a then parallel b and c

---

## Key Features

### AutoSwarmBuilder

Automatically generates specialized agent swarms:

```python
from swarms.structs.auto_swarm_builder import AutoSwarmBuilder
import json

swarm = AutoSwarmBuilder(
    name="Accounting-Team",
    description="Analyze cryptocurrency transactions",
    verbose=True,
    max_loops=1,
    return_agents=True,  # Return agent configs
    model_name="gpt-4o-mini",
)

result = swarm.run(
    task="Create an accounting team with 5 agents for crypto analysis. "
    "Include detailed prompts for each specialist role."
)

print(json.dumps(result, indent=4))
```

**Generated Agents Include:**
- Intelligent role assignment
- Optimized system prompts
- Appropriate tool configurations
- Workflow recommendations

### SwarmRouter

Universal interface for any swarm type:

```python
from swarms import Agent
from swarms.structs.swarm_router import SwarmRouter, SwarmType

agents = [agent1, agent2, agent3]
task = "Analyze this dataset"

# Sequential
sequential = SwarmRouter(swarm_type=SwarmType.SequentialWorkflow, agents=agents)
result = sequential.run(task)

# Concurrent
concurrent = SwarmRouter(swarm_type=SwarmType.ConcurrentWorkflow, agents=agents)
result = concurrent.run(task)

# Auto-select best swarm type
auto = SwarmRouter(swarm_type="auto", agents=agents)
result = auto.run(task)  # Automatically chooses based on task
```

**Supported Types:**
- `SequentialWorkflow`
- `ConcurrentWorkflow`
- `HierarchicalSwarm`
- `MixtureOfAgents`
- `AgentRearrange`
- `MajorityVoting`
- `GroupChat`
- `LLMCouncil`
- `CouncilAsAJudge`
- `DebateWithJudge`
- `HeavySwarm`
- And more...

### SpreadSheetSwarm

Mass agent management for scale:

```python
from swarms.structs.spreadsheet_swarm import SpreadSheetSwarm

# Create many agents
agents = [
    Agent(agent_name=f"Analyst-{i}", model_name="gpt-4o-mini")
    for i in range(100)
]

swarm = SpreadSheetSwarm(
    agents=agents,
    autosave_on=True,  # Auto-persist metadata
    output_dir="./swarm_outputs",
)

# Run with task distribution
results = swarm.run("Analyze quarterly report", distribute_tasks=True)

# Or load from CSV configuration
results = swarm.run_from_config("agent_configs.csv")
```

### HeavySwarm

Five-phase comprehensive analysis:

```python
from swarms.structs.heavy_swarm import HeavySwarm

swarm = HeavySwarm(
    timeout=300,  # 5 minute timeout
    worker_count=4,  # CPU-based parallelism
    tools=[custom_search, custom_calculator],
)

result = swarm.run("Develop a comprehensive market entry strategy for AI SaaS")

# Phases executed:
# 1. Task Decomposition
# 2. Question Generation (role-specific)
# 3. Parallel Execution (Research, Analysis, Alternatives, Verification)
# 4. Result Collection
# 5. Synthesis
```

---

## Installation & Setup

### Installation Methods

```bash
# Recommended: pip with upgrade
pip3 install -U swarms

# Alternative: uv (faster)
uv pip install swarms

# Alternative: poetry
poetry add swarms

# From source (development)
git clone https://github.com/kyegomez/swarms.git
cd swarms
pip install -r requirements.txt
pip install -e .
```

### Environment Configuration

```bash
# .env file
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GROQ_API_KEY=gsk_...

# Optional
WORKSPACE_DIR=/path/to/workspace
SWARMS_LOG_LEVEL=INFO
SWARMS_TELEMETRY=false
```

### Quick Start

```python
# Minimal example
from swarms import Agent

agent = Agent(
    model_name="gpt-4o-mini",
    max_loops=1,
)

response = agent.run("What is swarm intelligence?")
print(response)
```

### Verification Checkpoint

After installation, verify:

```python
# test_swarms.py
from swarms import Agent, SequentialWorkflow

# Test 1: Single agent
agent = Agent(model_name="gpt-4o-mini", max_loops=1)
result = agent.run("Say 'Hello from Swarms!'")
assert "Hello" in result or "Swarms" in result

# Test 2: Sequential workflow
agents = [
    Agent(agent_name="A", model_name="gpt-4o-mini"),
    Agent(agent_name="B", model_name="gpt-4o-mini"),
]
workflow = SequentialWorkflow(agents=agents)
result = workflow.run("Count to 3")
assert result is not None

print("All tests passed!")
```

---

## Configuration Options

### Agent Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `agent_name` | str | "Agent" | Identifier for the agent |
| `model_name` | str | Required | LLM model identifier |
| `system_prompt` | str | "" | Instructions for the agent |
| `max_loops` | int/"auto" | 1 | Execution iterations |
| `tools` | List[Callable] | [] | Available functions |
| `long_term_memory` | BaseVectorDB | None | Vector database for memory |
| `handoffs` | List[Agent] | [] | Agents for task delegation |
| `mcp_urls` | List[str] | [] | MCP server connections |
| `mcp_config` | dict | None | MCP configuration |
| `fallback_models` | List[str] | [] | Backup models |
| `streaming` | bool | False | Stream output tokens |
| `interactive` | bool | False | Enable human input |
| `verbose` | bool | False | Detailed logging |

### Workflow Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `agents` | List[Agent] | Required | Agent pool |
| `max_loops` | int | 1 | Workflow iterations |
| `team_awareness` | bool | False | Position awareness |
| `output_type` | str | "str" | Output format |

### SwarmRouter Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `swarm_type` | SwarmType/str | Required | Orchestration pattern |
| `agents` | List[Agent] | Required | Agent pool |
| `aggregator_agent` | Agent | None | For MoA pattern |
| `autosave` | bool | False | Auto-persist state |
| `output_type` | str | "str" | Result format |
| `rules` | str | None | Injected rules |

---

## Topology Patterns Summary

### Pattern Selection Guide

```
┌─────────────────────────────────────────────────────────────────┐
│                  WHICH SWARM TOPOLOGY?                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Question: What's your coordination need?                       │
│                                                                 │
│  Linear dependency (A→B→C)?                                     │
│  └─→ SequentialWorkflow                                         │
│                                                                 │
│  Independent parallel work?                                     │
│  └─→ ConcurrentWorkflow                                         │
│                                                                 │
│  Boss delegates to workers?                                     │
│  └─→ HierarchicalSwarm                                          │
│                                                                 │
│  Experts synthesize opinions?                                   │
│  └─→ MixtureOfAgents                                            │
│                                                                 │
│  Complex dependencies (DAG)?                                    │
│  └─→ GraphWorkflow                                              │
│                                                                 │
│  Dynamic routing to specialists?                                │
│  └─→ ForestSwarm                                                │
│                                                                 │
│  Conversational collaboration?                                  │
│  └─→ GroupChat                                                  │
│                                                                 │
│  Voting/consensus?                                              │
│  └─→ MajorityVoting or CouncilAsAJudge                          │
│                                                                 │
│  Comprehensive analysis (5 phases)?                             │
│  └─→ HeavySwarm                                                 │
│                                                                 │
│  Don't know? Let Swarms decide:                                 │
│  └─→ SwarmRouter with swarm_type="auto"                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Topology Comparison Matrix

| Topology | Agents | Parallelism | Coordination | Best For |
|----------|--------|-------------|--------------|----------|
| Sequential | 2-10 | None | Linear | Pipelines |
| Concurrent | 2-20 | Full | None | Speed |
| Hierarchical | 3-20 | Partial | Director | Projects |
| MixtureOfAgents | 3-10 | Full | Aggregator | Expertise |
| GraphWorkflow | 5-50 | DAG-based | Edges | Complex deps |
| ForestSwarm | 10-100 | Dynamic | Semantic | Large pools |
| GroupChat | 3-8 | Turn-based | Conversation | Discussion |
| HeavySwarm | 5 | Phased | Protocol | Deep analysis |

---

## Integration Patterns

### With Ralph

**Use Case:** Parallel Ralph loops using Swarms for coordination.

**Pattern:** Each Swarms agent runs an internal Ralph-style iteration loop.

```
┌─────────────────────────────────────────────────────────────────┐
│                    SWARMS + RALPH INTEGRATION                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SwarmRouter (ConcurrentWorkflow)                               │
│  ├── Agent "Feature-Auth" (runs Ralph internally)               │
│  │   └── while incomplete: implement → test → commit            │
│  ├── Agent "Feature-API" (runs Ralph internally)                │
│  │   └── while incomplete: implement → test → commit            │
│  └── Agent "Feature-UI" (runs Ralph internally)                 │
│      └── while incomplete: implement → test → commit            │
│                                                                 │
│  Each agent has its own:                                        │
│  - prd.json (task tracking)                                     │
│  - progress.txt (learnings)                                     │
│  - Git branch (isolation)                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Implementation:**

```python
from swarms import Agent, ConcurrentWorkflow
import subprocess

def run_ralph_loop(agent_name: str, prd_path: str, max_iters: int = 20) -> str:
    """Run Ralph loop as a tool within a Swarms agent."""
    result = subprocess.run(
        ["./ralph.sh", str(max_iters), prd_path],
        capture_output=True,
        text=True,
        cwd=f"./worktrees/{agent_name}"
    )
    return result.stdout

# Create agents with Ralph capability
auth_agent = Agent(
    agent_name="Feature-Auth",
    system_prompt="Implement authentication features using the Ralph loop pattern.",
    model_name="gpt-4o",
    tools=[run_ralph_loop],
)

api_agent = Agent(
    agent_name="Feature-API",
    system_prompt="Implement API endpoints using the Ralph loop pattern.",
    model_name="gpt-4o",
    tools=[run_ralph_loop],
)

# Run parallel Ralph loops
workflow = ConcurrentWorkflow(agents=[auth_agent, api_agent])
results = workflow.run("Build the user management system")
```

**Topology Selection for Ralph:**

| Ralph Task Type | Recommended Swarm Topology |
|-----------------|---------------------------|
| Single PRD, single feature | No Swarm (plain Ralph) |
| Multiple independent features | ConcurrentWorkflow |
| Features with dependencies | SequentialWorkflow or GraphWorkflow |
| Feature requiring specialists | HierarchicalSwarm with Ralph workers |

### With Gas Town

**Philosophy Comparison:**

| Aspect | Swarms | Gas Town |
|--------|--------|----------|
| **Mental Model** | API-driven orchestration | Vibe-coded factory |
| **Agent Model** | Defined in code | Roles (Mayor, Polecat, etc.) |
| **Communication** | Method calls, async | Agent Mail (email metaphor) |
| **Persistence** | Optional vector DBs | Beads (git-backed) |
| **UI** | Python API | tmux-native |
| **Philosophy** | Enterprise formality | "Work becomes fluid" |

**When to Use Which:**

```
Use Swarms when:
├── Building enterprise/production systems
├── Need well-defined API boundaries
├── Team has Python expertise
├── Want 14+ topology options
└── Need marketplace/protocol integrations

Use Gas Town when:
├── Building products (vibe coding)
├── Want tmux-native workflow
├── Prefer role-based organization
├── Need Beads data plane
└── Comfortable with chaos
```

**Hybrid Pattern:**

Swarms can spawn Gas Town-style role specializations:

```python
# Gas Town roles reimagined in Swarms
mayor = Agent(
    agent_name="Mayor",
    system_prompt="You coordinate work across the team. Route tasks to specialists.",
    model_name="gpt-4o",  # Smarter coordinator
)

polecat_alice = Agent(
    agent_name="Polecat-Alice",
    system_prompt="You implement frontend features. Follow existing patterns.",
    model_name="gpt-4o-mini",
)

polecat_bob = Agent(
    agent_name="Polecat-Bob",
    system_prompt="You implement backend features. Follow existing patterns.",
    model_name="gpt-4o-mini",
)

dogs = Agent(
    agent_name="Dogs",
    system_prompt="You review code for quality. Reject if tests fail.",
    model_name="gpt-4o-mini",
)

# Hierarchical like Gas Town
swarm = HierarchicalSwarm(
    agents=[polecat_alice, polecat_bob, dogs],
    director_model_name="gpt-4o",  # Mayor role
    planning_enabled=True,
)
```

### With Claude-Flow (Comparison)

**Note:** Claude-Flow is another multi-agent framework in the ecosystem.

| Feature | Swarms | Claude-Flow |
|---------|--------|-------------|
| **Primary Focus** | Enterprise scale | Claude Code native |
| **Scale** | 100s-1000s agents | 10s agents |
| **Native Tools** | Python functions | Claude Code tools |
| **Memory** | Vector DBs | CLAUDE.md hierarchy |
| **Deployment** | Any Python env | Claude Code terminal |

**When Claude-Flow is Better:**
- Working within Claude Code specifically
- Need CLAUDE.md memory hierarchy
- Prefer slash commands over Python API

**When Swarms is Better:**
- Multi-model (not just Claude)
- Need 100+ agents
- Want pre-built topologies
- Building standalone applications

### Combination Matrix

| Swarms + | Use Case | Complexity | Value | Implementation |
|----------|----------|------------|-------|----------------|
| **Ralph** | Parallel feature development | High | High | Each agent runs internal Ralph loop |
| **Gas Town** | Philosophy comparison | N/A | Reference | Choose one based on team culture |
| **Claude-Flow** | Scale comparison | N/A | Reference | Swarms for scale, CF for Claude-native |
| **CC Mirror** | Task DAG + Swarms scale | Medium | High | CC Mirror for tasks, Swarms for execution |
| **MCP** | Tool discovery | Medium | High | Native Swarms MCP support |
| **Playwright** | UI verification | Medium | High | Swarms agents + Playwright tools |

---

## Mental Models

### Swarm Intelligence Principles

1. **Decentralization:** No single point of failure
2. **Self-organization:** Agents adapt to task requirements
3. **Scalability:** Add agents without redesigning system
4. **Fault tolerance:** Individual failures don't collapse the swarm
5. **Emergent behavior:** Complex outcomes from simple rules

### Topology Selection Mental Model

```
Task Characteristics → Topology Selection

Sequential dependency:
  Task A must complete before Task B
  → SequentialWorkflow

Independent parallelism:
  Tasks A, B, C are unrelated
  → ConcurrentWorkflow

Expertise aggregation:
  Need multiple perspectives synthesized
  → MixtureOfAgents

Command hierarchy:
  One leader, many workers
  → HierarchicalSwarm

Complex dependencies:
  A→B, A→C, B→D, C→D
  → GraphWorkflow

Dynamic routing:
  Don't know which agent until runtime
  → ForestSwarm
```

### Scale Decision Model

```
Number of Agents Needed:

1 agent:        Use plain Agent class
2-5 agents:     SequentialWorkflow or ConcurrentWorkflow
5-20 agents:    HierarchicalSwarm or MixtureOfAgents
20-100 agents:  ForestSwarm or GraphWorkflow
100+ agents:    SpreadSheetSwarm or custom orchestration
```

---

## Checkpoints

### Installation Checkpoint

```bash
# Verify installation
python -c "from swarms import Agent; print('Swarms installed successfully')"

# Check version
python -c "import swarms; print(f'Version: {swarms.__version__}')"

# Verify API keys
python -c "import os; print('OpenAI:', 'OK' if os.getenv('OPENAI_API_KEY') else 'MISSING')"
python -c "import os; print('Anthropic:', 'OK' if os.getenv('ANTHROPIC_API_KEY') else 'MISSING')"
```

**You should see:**
```
Swarms installed successfully
Version: 8.9.0
OpenAI: OK
Anthropic: OK
```

### Single Agent Checkpoint

```python
from swarms import Agent

agent = Agent(
    agent_name="Test-Agent",
    model_name="gpt-4o-mini",
    max_loops=1,
)

result = agent.run("What is 2 + 2?")
print(f"Result: {result}")
assert "4" in result
print("Single agent checkpoint PASSED")
```

### Workflow Checkpoint

```python
from swarms import Agent, SequentialWorkflow

agent1 = Agent(agent_name="Counter", model_name="gpt-4o-mini")
agent2 = Agent(agent_name="Validator", model_name="gpt-4o-mini")

workflow = SequentialWorkflow(agents=[agent1, agent2], max_loops=1)
result = workflow.run("Count from 1 to 3, then validate the count")

print(f"Workflow result: {result[:100]}...")
assert result is not None and len(result) > 0
print("Workflow checkpoint PASSED")
```

### Concurrent Checkpoint

```python
from swarms import Agent, ConcurrentWorkflow
import time

agents = [
    Agent(agent_name=f"Worker-{i}", model_name="gpt-4o-mini")
    for i in range(3)
]

workflow = ConcurrentWorkflow(agents=agents, max_loops=1)

start = time.time()
results = workflow.run("What is your agent name?")
elapsed = time.time() - start

print(f"Concurrent execution completed in {elapsed:.2f}s")
print(f"Results: {results[:200]}...")
assert "Worker" in str(results)
print("Concurrent checkpoint PASSED")
```

---

## Troubleshooting

### Common Issues

#### Issue: "No API key found"

**Symptom:**
```
AuthenticationError: No API key found for provider 'openai'
```

**Solution:**
```bash
# Set environment variables
export OPENAI_API_KEY="sk-..."

# Or in Python before importing
import os
os.environ["OPENAI_API_KEY"] = "sk-..."

# Or use .env file with python-dotenv
from dotenv import load_dotenv
load_dotenv()
```

#### Issue: "Rate limit exceeded"

**Symptom:**
```
RateLimitError: Rate limit reached for model
```

**Solution:**
```python
# Use fallback models
agent = Agent(
    model_name="gpt-4o",
    fallback_models=["gpt-4o-mini", "gpt-3.5-turbo"],
)

# Or implement retry logic
from tenacity import retry, wait_exponential

@retry(wait=wait_exponential(min=1, max=60))
def run_with_retry(agent, task):
    return agent.run(task)
```

#### Issue: "Context length exceeded"

**Symptom:**
```
InvalidRequestError: max_tokens is too large
```

**Solution:**
```python
# Reduce max_tokens
agent = Agent(
    model_name="gpt-4o-mini",
    max_tokens=4000,  # Reduce from default
)

# Or use chunking for large inputs
def chunk_task(task, chunk_size=3000):
    return [task[i:i+chunk_size] for i in range(0, len(task), chunk_size)]
```

#### Issue: "Workflow hangs indefinitely"

**Symptom:** Workflow never completes, no output

**Solution:**
```python
# Set explicit timeouts
import asyncio

async def run_with_timeout(workflow, task, timeout=300):
    try:
        return await asyncio.wait_for(
            asyncio.to_thread(workflow.run, task),
            timeout=timeout
        )
    except asyncio.TimeoutError:
        print(f"Workflow timed out after {timeout}s")
        return None

# Or use max_loops as safety
workflow = SequentialWorkflow(
    agents=agents,
    max_loops=5,  # Hard limit
)
```

#### Issue: "Agents not coordinating"

**Symptom:** Agents seem to work independently, no context sharing

**Solution:**
```python
# Enable team_awareness
workflow = SequentialWorkflow(
    agents=agents,
    team_awareness=True,  # Agents know their position
    multi_agent_collab_prompt=True,  # Add collaboration prompts
)

# Or use explicit handoffs
agent.handoffs = [other_agent1, other_agent2]
```

### Debugging Tips

```python
# Enable verbose logging
import logging
logging.basicConfig(level=logging.DEBUG)

# Enable agent verbose mode
agent = Agent(
    model_name="gpt-4o-mini",
    verbose=True,
)

# Inspect agent state
print(agent.state_dict())

# Check workflow structure
print(workflow.agents)
print(workflow.flow)  # For AgentRearrange
```

---

## Source Attribution

### Primary Sources

| Source | Type | URL | Reliability |
|--------|------|-----|-------------|
| Swarms GitHub | Repository | github.com/kyegomez/swarms | Official |
| Swarms Docs | Documentation | docs.swarms.world | Official |
| Swarms PyPI | Package | pypi.org/project/swarms | Official |
| Swarms Website | Platform | swarms.world | Official |

### Author

- **Creator:** Kye Gomez (@kyegomez)
- **Organization:** Agora
- **Maintainer:** apacai

### Version History

| Version | Date | Notable Changes |
|---------|------|-----------------|
| 8.9.0 | Jan 2026 | Current stable |
| 8.x | 2025-2026 | Enterprise features, MCP support |
| 5.x-7.x | 2024-2025 | Topology expansion |
| 1.x-4.x | 2023-2024 | Initial development |

### License

Apache 2.0 / MIT - permissive for commercial use.

---

## Quick Reference

### Installation

```bash
pip3 install -U swarms
```

### Minimal Agent

```python
from swarms import Agent
agent = Agent(model_name="gpt-4o-mini")
result = agent.run("Hello, Swarms!")
```

### Sequential Workflow

```python
from swarms import Agent, SequentialWorkflow
workflow = SequentialWorkflow(agents=[agent1, agent2])
result = workflow.run("Task")
```

### Concurrent Workflow

```python
from swarms import Agent, ConcurrentWorkflow
workflow = ConcurrentWorkflow(agents=[agent1, agent2, agent3])
results = workflow.run("Task")
```

### Hierarchical Swarm

```python
from swarms import Agent, HierarchicalSwarm
swarm = HierarchicalSwarm(agents=[worker1, worker2], planning_enabled=True)
result = swarm.run("Task")
```

### SwarmRouter (Universal)

```python
from swarms.structs.swarm_router import SwarmRouter, SwarmType
router = SwarmRouter(swarm_type=SwarmType.MixtureOfAgents, agents=agents)
result = router.run("Task")
```

---

## Tags

`#swarms` `#multi-agent` `#orchestration` `#enterprise` `#topology` `#sequential` `#concurrent` `#hierarchical` `#mixture-of-agents` `#graph-workflow` `#forest-swarm` `#kye-gomez` `#agora` `#python` `#production-ready` `#scalable`

---

## Document Metadata

- **Created:** 2026-01-19
- **Agent:** B3-T3-6 (Claude Opus 4.5)
- **Task:** Deep extraction of kyegomez/swarms
- **Sources:** GitHub repository, official docs, PyPI, web research
- **Lines:** 1377
- **Quality:** Comprehensive extraction with integration patterns

---

*End of Swarms Framework Extraction*
