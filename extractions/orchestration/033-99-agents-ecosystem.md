# 99-Agents Ecosystem: Complete Plugin Architecture for Claude Code

> **Deep Extraction from wshobson/agents**
> Repository: https://github.com/wshobson/agents
> Version: 1.3.7
> Maintainer: Seth Hobson (seth@major7apps.com)
> License: MIT (Apache-2.0 for Conductor plugin)

---

## You Are Here

```
Claude Code Ecosystem
├── Core Claude Code (Anthropic)
│   └── Plugin System ←─── YOU ARE HERE: Understanding 99-agents
├── Orchestration Patterns
│   ├── Ralph Wiggum Loop (continuous iteration)
│   ├── Gas Town (agent factory)
│   ├── CC-Mirror (multi-model)
│   └── 99-agents (plugin ecosystem) ← THIS EXTRACTION
└── Integration Layer
    └── Combining patterns for maximum leverage
```

**What you need to understand first:**
- Claude Code supports a plugin marketplace system
- Plugins package agents, commands, and skills together
- This ecosystem represents the most comprehensive plugin collection available
- Understanding this enables composable AI-assisted development at scale

**Why this matters for your workflow:**
The 99-agents ecosystem provides pre-built specialists you can combine with Ralph loops, Gas Town architectures, or CC-Mirror multi-model setups. Instead of building from scratch, you get 108+ battle-tested agents ready for integration.

---

## What This Is

The wshobson/agents repository is a **comprehensive plugin marketplace** for Claude Code that bundles:

| Component | Count | Purpose |
|-----------|-------|---------|
| **Plugins** | 72 | Self-contained capability packages |
| **Agents** | 108 | Specialized domain experts |
| **Skills** | 129 | Modular knowledge packages |
| **Tools/Commands** | 72 | Scaffolding, testing, deployment workflows |
| **Orchestrators** | 15 | Multi-agent coordination systems |

**Core Philosophy (Three Tenets):**

1. **Single Responsibility** — "Each plugin does one thing well" (Unix philosophy)
2. **Composability** — Mix-and-match focused plugins rather than bundled features
3. **Context Efficiency** — Smaller tools fit better in LLM context windows

**Design Achievement:**
- Average 3.4 components per plugin
- Granular loading (~300 tokens for python-development plugin)
- Clear inter-plugin boundaries without forced bundling
- 100% agent coverage across the ecosystem

---

## Why It Matters

### The Problem This Solves

Claude Code users face a recurring challenge: building specialized AI assistants from scratch for every domain. Want a security auditor? Build prompts. Need a Kubernetes expert? Write more prompts. Database architect? Start over again.

**Before 99-agents:**
```
Every project = Custom agent definitions
Every domain = Reinvent the wheel
Every team = Different quality levels
```

**After 99-agents:**
```
/plugin install security-scanning
/plugin install kubernetes-operations
/plugin install database-design
→ Instant specialist team
```

### The Model Optimization Strategy

The ecosystem strategically assigns Claude models to agents based on task complexity:

| Model Tier | Agent Count | Primary Use Cases |
|------------|-------------|-------------------|
| **Opus 4.5** | 42 agents | Critical architecture, security, code review, production coding |
| **Sonnet 4.5** | 39 agents | Complex reasoning, technology decisions, design reviews |
| **Haiku 4.5** | 18 agents | Fast execution, deterministic tasks, support operations |
| **Inherit** | 42 agents | User-selected model preference for flexibility |

**Selection Criteria:**
- **Haiku** → Generating code from well-defined specifications, operational tasks
- **Sonnet** → Design system architecture, architectural pattern reviews
- **Opus** → Critical architecture decisions requiring maximum reasoning capability

### Token Efficiency Through Progressive Disclosure

Skills implement a three-tier loading system that prevents "context pollution":

```
Tier 1: Metadata (YAML frontmatter)     → Always loaded (~50 tokens)
Tier 2: Instructions                     → Activated when relevant (~200 tokens)
Tier 3: Resources/Templates              → On-demand examples (~500+ tokens)
```

**Result:** Specialized expertise without bloat. A simple API design question loads only the metadata. Complex pattern implementation pulls full resources.

---

## Architecture Deep Dive

### Plugin Structure

Every plugin follows a consistent directory layout:

```
plugin-name/
├── .claude-plugin/        # Plugin configuration and metadata
├── agents/                # Specialized domain expert definitions
│   └── agent-name.md      # Individual agent specifications
├── commands/              # Workflows and tools
│   └── command-name.md    # Slash command implementations
├── skills/                # Modular knowledge packages
│   └── skill-name/        # Skill directories with resources
└── README.md              # Plugin documentation
```

### Agent Definition Format

Agents use structured markdown with YAML frontmatter:

```yaml
---
name: backend-architect
description: Expert backend architect specializing in scalable API design,
             microservices architecture, and distributed systems.
model: inherit
---

## Purpose & Philosophy
Design backend systems with clear boundaries, well-defined contracts,
and resilience patterns built in from the start.

## Capabilities
- API design patterns (REST, GraphQL, gRPC, WebSocket)
- Microservices and event-driven architecture
- Security, resilience, and observability
- Framework expertise across multiple languages
- Testing, deployment, and performance optimization

## Behavioral Traits
- Starts with business requirements
- Designs contract-first APIs
- Builds in resilience from inception
- Emphasizes simplicity over premature complexity

## Workflow Position
- After: database-architect
- Complements: cloud-architect, security-auditor

## Response Approach
1. Gather requirements
2. Define service boundaries
3. Design API contracts
4. Specify resilience patterns
5. Document architectural trade-offs
...
```

### Agent Taxonomy by Domain

```
┌─────────────────────────────────────────────────────────────────┐
│                    108 SPECIALIZED AGENTS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ARCHITECTURE & DESIGN (10)                                      │
│  ├── backend-architect     ├── cloud-architect                  │
│  ├── event-sourcing-architect ├── graphql-architect             │
│  ├── frontend-architect    └── mobile-architect                 │
│                                                                  │
│  PROGRAMMING LANGUAGES (25)                                      │
│  ├── Systems: C, C++, Rust, Go                                  │
│  ├── Web: JavaScript, TypeScript, Python, Ruby, PHP             │
│  ├── Enterprise: Java, Scala, C#                                │
│  └── Specialized: Elixir, Django, FastAPI, Haskell, Unity       │
│                                                                  │
│  INFRASTRUCTURE & OPS (11)                                       │
│  ├── devops-engineer       ├── kubernetes-specialist            │
│  ├── database-architect    ├── incident-responder               │
│  └── network-engineer      └── cloud-security-engineer          │
│                                                                  │
│  QUALITY & SECURITY (11)                                         │
│  ├── code-reviewer         ├── security-auditor                 │
│  ├── threat-modeling-expert ├── test-automator                  │
│  └── tdd-orchestrator      └── penetration-tester               │
│                                                                  │
│  DATA & AI (10)                                                  │
│  ├── data-engineer         ├── ml-engineer                      │
│  ├── ai-engineer           ├── prompt-engineer                  │
│  └── vector-database-engineer                                   │
│                                                                  │
│  DOCUMENTATION (10)                                              │
│  ├── technical-writer      ├── api-documenter                   │
│  └── c4-architecture-analyst                                    │
│                                                                  │
│  BUSINESS & OPERATIONS (9)                                       │
│  ├── business-analyst      ├── quantitative-analyst             │
│  ├── marketing-specialist  └── legal-advisor                    │
│                                                                  │
│  SEO & CONTENT (10)                                              │
│  ├── seo-analyst           ├── content-strategist               │
│  └── keyword-researcher                                         │
│                                                                  │
│  SPECIALIZED DOMAINS (7)                                         │
│  ├── arm-microcontroller-dev ├── blockchain-specialist          │
│  ├── legacy-modernization  └── payment-integration              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Orchestrator Patterns

The 15 multi-agent orchestrators coordinate complex workflows:

**Pattern: Hybrid Execution Flow**
```
Planning (Sonnet) → Implementation (Haiku) → Review (Sonnet)
```

**Full-Stack Feature Development:**
```
backend-architect (design)
    ↓
database-architect (schema)
    ↓
backend-developer (implementation)
    ↓
frontend-architect (UI design)
    ↓
frontend-developer (components)
    ↓
test-automator (test suites)
    ↓
security-auditor (security review)
    ↓
devops-engineer (deployment)
    ↓
observability-engineer (monitoring)
```

**Security Hardening Sequence:**
```
security-auditor (assessment)
    ↓
threat-modeling-expert (threat analysis)
    ↓
penetration-tester (vulnerability scan)
    ↓
security-engineer (remediation)
    ↓
compliance-auditor (verification)
```

**ML Pipeline Orchestration:**
```
data-engineer (pipeline setup)
    ↓
ml-engineer (model training)
    ↓
ml-ops-engineer (deployment)
    ↓
performance-engineer (optimization)
```

### Skill Organization

Skills follow Anthropic's Agent Skills Specification:

```yaml
---
name: api-design-principles
description: Comprehensive patterns for RESTful, GraphQL, and gRPC API design
             including versioning, pagination, error handling, and security.
---

## Instructions
[Activated when relevant - explains patterns and approaches]

## Resources
[On-demand examples and templates]
```

**Skill Categories Across Plugins:**

| Category | Count | Examples |
|----------|-------|----------|
| Backend Development | 9 | API design, microservices, CQRS, event sourcing, saga orchestration |
| Developer Essentials | 11 | Git workflows, SQL optimization, debugging patterns |
| LLM Application Dev | 8 | RAG systems, prompt engineering, embeddings, evaluation |
| UI Design | 9 | Design systems, responsive layouts, accessibility |
| Cloud Infrastructure | 8 | Terraform modules, multi-cloud architecture |
| Python Development | 5 | Async patterns, testing, performance, packaging, uv |
| Security | 6 | SAST config, STRIDE analysis, attack trees, threat modeling |
| Data Engineering | 5 | Spark optimization, dbt patterns, Airflow DAGs |

### Tool Integration

Commands provide direct workflow invocation:

```bash
# Plugin management
/plugin marketplace add wshobson/agents
/plugin install python-development
/plugin install kubernetes-operations

# Direct agent invocation
/backend-development:feature-development
/security-scanning:vulnerability-analysis
/kubernetes-operations:deploy-application

# Orchestrated workflows
/full-stack-orchestration:new-feature
/incident-response:triage
```

---

## Key Features

### 1. Conductor: Context-Driven Development

The Conductor plugin (Apache 2.0 licensed, adapted from Google's Gemini CLI project) implements a structured workflow:

**Context → Spec & Plan → Implement**

```bash
# Initialize project with foundational documentation
/conductor:setup

# Create feature/bug work units with specifications
/conductor:new-track "Add user authentication"

# Execute phased implementation following TDD patterns
/conductor:implement

# Monitor progress and blockers
/conductor:status

# Undo work by track, phase, or task
/conductor:revert

# Manage track lifecycle
/conductor:manage --archive
```

**Generated Project Structure:**
```
conductor/
├── product.md           # Product vision and guidelines
├── tech-stack.md        # Technology preferences
├── workflow.md          # Development standards
├── code_styleguides/    # Language-specific conventions
│   ├── python.md
│   ├── typescript.md
│   └── ...
└── tracks/              # Feature/bug work units
    ├── auth-feature/
    │   ├── spec.md
    │   └── plan.md
    └── ...
```

### 2. TDD Orchestrator

Coordinates test-driven development across multiple agents:

```yaml
name: tdd-orchestrator
model: Opus
purpose: Master TDD orchestrator specializing in red-green-refactor
         discipline, multi-agent workflow coordination
```

**Seven-Step Workflow:**
1. **Readiness Assessment** — Evaluates TDD adoption readiness
2. **Discipline Establishment** — Implements red-green-refactor enforcement
3. **Test Workflow Orchestration** — Coordinates unit, integration, E2E agents
4. **Metrics Implementation** — Tracks cycle time, coverage, velocity
5. **Refactoring Coordination** — Manages improvements with safety validation
6. **Execution Optimization** — Accelerates feedback loops
7. **Compliance Monitoring** — Enforces continuous improvement

### 3. Incident Responder

Production incident management with SRE best practices:

```yaml
name: incident-responder
model: Opus
purpose: Expert SRE specialist for immediate production incident activation
```

**Incident Response Phases:**

```
IMMEDIATE (0-5 min)
├── Severity evaluation (user impact, business, scope)
├── Incident command establishment
│   ├── Incident Commander
│   ├── Communication Lead
│   └── Technical Lead
└── Stabilization tactics
    ├── Traffic throttling
    ├── Feature flags
    └── Rollback assessment

INVESTIGATION (5-30 min)
├── Observability-driven troubleshooting
│   ├── Distributed tracing
│   ├── Metrics correlation
│   ├── Log aggregation
│   └── APM analysis
├── Change correlation against deployments
├── Service dependency mapping
└── Cascading failure analysis

COMMUNICATION (Continuous)
├── Internal: 15-minute updates during active incidents
├── Technical details → Engineers
├── Business impact → Executives
├── External: Status page, customer outreach
└── Detailed chronology with timestamps

RESOLUTION & RECOVERY
├── Minimal viable fix implementation
├── Staged rollouts
├── Enhanced monitoring
├── SLI validation
└── Capacity headroom verification

POST-INCIDENT
├── Blameless post-mortem
├── Root cause analysis (5-whys)
├── Systems thinking
└── Actionable improvements tracking
```

**Severity Classification:**
| Level | Response Time | Escalation | Communication Cadence |
|-------|---------------|------------|----------------------|
| P0 | Immediate | 24/7 escalation | Every 15 minutes |
| P1 | 15 minutes | On-call + backup | Every 30 minutes |
| P2 | 1 hour | On-call | Hourly |
| P3 | Next business day | Standard ticketing | Daily |

### 4. AI Engineer Agent

Production-grade LLM application development:

```yaml
name: ai-engineer
model: inherit
purpose: Production-grade LLM applications, generative AI systems,
         and intelligent agent architectures
```

**Capabilities:**
- **Model Management**: GPT-5.2, Claude Opus/Sonnet/Haiku 4.5, Llama 3.3, Mixtral, Qwen 2.5
- **Deployment**: Ollama, vLLM, TorchServe
- **RAG Systems**: Pinecone, Qdrant, pgvector with Voyage AI embeddings
- **Agent Frameworks**: LangGraph, LlamaIndex, CrewAI, Claude Agent SDK
- **Production**: FastAPI streaming, semantic caching, rate limiting
- **Observability**: LangSmith integration

### 5. LLM Application Development Plugin

Complete toolkit for AI application construction:

```bash
# Scaffold LangGraph-based agents
/llm-application-dev:langchain-agent

# Create conversational AI applications
/llm-application-dev:ai-assistant

# Refine prompts for production
/llm-application-dev:prompt-optimize
```

**Eight Specialized Skills:**
1. LangGraph StateGraph patterns with memory and tools
2. RAG systems with hybrid search and reranking
3. Evaluation frameworks for LLM applications
4. Chain-of-thought and few-shot prompting patterns
5. Embedding model selection and optimization
6. Vector similarity search implementation
7. Index tuning (HNSW, IVF, quantization)
8. Hybrid search combining vectors and keywords

---

## Installation & Setup

### Quick Start

```bash
# Step 1: Add marketplace to Claude Code
/plugin marketplace add wshobson/agents

# Step 2: Install desired plugins
/plugin install python-development
/plugin install kubernetes-operations
/plugin install security-scanning
/plugin install llm-application-dev

# Step 3: Verify installation
/plugin list
```

### Recommended Plugin Combinations

**Full-Stack Web Development:**
```bash
/plugin install backend-development
/plugin install frontend-mobile-development
/plugin install database-design
/plugin install api-testing-observability
/plugin install deployment-validation
```

**Security-Focused Development:**
```bash
/plugin install security-scanning
/plugin install security-compliance
/plugin install backend-api-security
/plugin install frontend-mobile-security
```

**Data & ML Engineering:**
```bash
/plugin install data-engineering
/plugin install machine-learning-ops
/plugin install llm-application-dev
/plugin install observability-monitoring
```

**DevOps & SRE:**
```bash
/plugin install kubernetes-operations
/plugin install cicd-automation
/plugin install incident-response
/plugin install observability-monitoring
/plugin install cloud-infrastructure
```

### Plugin Management Commands

```bash
# List all available plugins
/plugin marketplace list

# Search for specific plugins
/plugin marketplace search "security"

# Install specific version
/plugin install backend-development@1.2.0

# Update plugins
/plugin update backend-development

# Uninstall plugins
/plugin uninstall backend-development

# View plugin details
/plugin info backend-development
```

---

## Configuration Options

### Model Override

Override default model assignments per-project:

```yaml
# .claude-plugin/config.yaml
model_overrides:
  backend-architect: opus
  test-automator: sonnet
  code-formatter: haiku
```

### Plugin Composition

Combine plugins for complex workflows:

```yaml
# .claude-plugin/composition.yaml
workflows:
  secure-feature:
    - backend-development:feature-development
    - security-scanning:vulnerability-analysis
    - security-compliance:verify

  ml-pipeline:
    - data-engineering:etl-setup
    - machine-learning-ops:train
    - deployment-validation:canary
```

### Skill Activation Rules

Control when skills activate:

```yaml
# .claude-plugin/skills.yaml
skill_activation:
  api-design-principles:
    triggers:
      - "REST API"
      - "GraphQL"
      - "endpoint design"
    load_resources: on_demand

  rag-implementation:
    triggers:
      - "RAG"
      - "retrieval augmented"
      - "vector search"
    load_resources: always
```

---

## Workflow Coordination Patterns

### Pattern 1: Sequential Orchestration

```
Request → Agent A → Agent B → Agent C → Result

Example: Feature Development
User Request
    → backend-architect (design)
    → backend-developer (implement)
    → test-automator (test)
    → code-reviewer (review)
    → Result
```

### Pattern 2: Parallel Specialization

```
         ┌→ Security Agent ──┐
Request ─┼→ Performance Agent┼→ Aggregated Result
         └→ Quality Agent ───┘

Example: Comprehensive Review
User Request
    ├→ security-auditor
    ├→ performance-analyst
    └→ code-reviewer
    → Aggregated findings
```

### Pattern 3: Tiered Execution

```
Planning (Opus) → Implementation (Haiku) → Review (Sonnet)

Example: Database Migration
database-architect [Opus]
    → Design migration strategy

database-developer [Haiku]
    → Generate migration scripts

database-reviewer [Sonnet]
    → Validate and approve
```

### Pattern 4: Event-Driven Response

```
Trigger Event → Appropriate Agent → Action → Feedback Loop

Example: Incident Response
Alert Trigger
    → incident-responder (triage)
    → devops-troubleshooter (diagnose)
    → incident-responder (resolve)
    → Feedback loop (post-mortem)
```

---

## Integration Patterns

### With Ralph Wiggum Loop

The Ralph pattern uses continuous iteration with external state:

```bash
while :; do cat PROMPT.md | claude-code ; done
```

**99-agents Enhancement:**

```markdown
# PROMPT.md with 99-agents Skills

## Context
You are working on [PROJECT]. Use the following installed plugins:
- backend-development (API design, microservices)
- security-scanning (vulnerability analysis)
- tdd-workflows (test-driven development)

## Current Task
[Task description]

## Workflow
1. Use backend-architect for design decisions
2. Use tdd-orchestrator for test-first implementation
3. Use security-auditor before committing

## State
See STATE.md for current progress.
```

**Configuration: Ralph + 99-agents**

```yaml
# ralph-config.yaml
plugins:
  installed:
    - backend-development
    - security-scanning
    - tdd-workflows

agent_preferences:
  design: backend-architect
  implementation: tdd-orchestrator
  review: security-auditor

iteration:
  checkpoint_frequency: 3
  auto_verify: true
```

**Use Case:** Ralph provides the iteration loop; 99-agents provides specialized expertise at each iteration.

### With Gas Town

Gas Town architecture uses specialized roles:
- **Mayor** — Strategic direction
- **Deacon** — Domain experts
- **Dogs** — Task executors
- **Refinery** — Quality processing

**99-agents as Gas Town Dogs:**

```yaml
# gas-town-config.yaml
roles:
  mayor:
    agent: backend-architect
    model: opus
    purpose: "Strategic architecture decisions"

  deacons:
    security:
      agent: security-auditor
      model: sonnet
    performance:
      agent: performance-analyst
      model: sonnet
    quality:
      agent: code-reviewer
      model: sonnet

  dogs:
    backend:
      plugin: backend-development
      agents:
        - backend-developer
        - tdd-orchestrator
    frontend:
      plugin: frontend-mobile-development
      agents:
        - frontend-developer
        - ui-designer
    devops:
      plugin: kubernetes-operations
      agents:
        - kubernetes-specialist
        - deployment-engineer

  refinery:
    agents:
      - comprehensive-reviewer
      - documentation-generator
    model: sonnet
```

**Skill Mapping to Gas Town Roles:**

| Gas Town Role | 99-agents Plugin | Primary Agents |
|---------------|------------------|----------------|
| Mayor | conductor | conductor-orchestrator |
| Deacon (Security) | security-scanning | security-auditor, threat-modeling-expert |
| Deacon (Quality) | code-review-ai | code-reviewer, comprehensive-reviewer |
| Dog (Backend) | backend-development | backend-developer, api-developer |
| Dog (Frontend) | frontend-mobile-development | frontend-developer, ui-designer |
| Dog (Infra) | kubernetes-operations | kubernetes-specialist, devops-engineer |
| Refinery | documentation-generation | technical-writer, api-documenter |

**Use Case:** Gas Town provides organizational structure; 99-agents provides the specialist roles to fill each position.

### With CC-Mirror

CC-Mirror enables multi-model agent coordination:

```yaml
# cc-mirror-config.yaml
models:
  primary: claude-opus-4-5
  secondary: claude-sonnet-4-5
  fast: claude-haiku-4-5

agent_routing:
  # Critical decisions to Opus
  opus_agents:
    - backend-architect
    - security-auditor
    - incident-responder

  # Complex reasoning to Sonnet
  sonnet_agents:
    - code-reviewer
    - performance-analyst
    - tdd-orchestrator

  # Fast execution to Haiku
  haiku_agents:
    - code-formatter
    - test-runner
    - documentation-updater

coordination:
  strategy: "planning-execution-review"
  planning_model: opus
  execution_model: haiku
  review_model: sonnet
```

**Multi-Model Workflow:**
```
                    ┌─────────────────────────┐
                    │   CC-Mirror Controller   │
                    └───────────┬─────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│    Opus 4.5   │       │  Sonnet 4.5   │       │   Haiku 4.5   │
├───────────────┤       ├───────────────┤       ├───────────────┤
│ backend-      │       │ code-reviewer │       │ code-formatter│
│ architect     │       │ performance-  │       │ test-runner   │
│ security-     │       │ analyst       │       │ doc-updater   │
│ auditor       │       │ tdd-          │       │               │
│ incident-     │       │ orchestrator  │       │               │
│ responder     │       │               │       │               │
└───────────────┘       └───────────────┘       └───────────────┘
```

**Use Case:** CC-Mirror provides multi-model routing; 99-agents provides the specialized agents assigned to each model tier.

### Combination Matrix

| 99-Agents + | Use Case | Complexity | Value | Example |
|-------------|----------|------------|-------|---------|
| **Ralph** | Skill-enhanced continuous iteration | Low | High | `ralph-loop.sh` with backend-development plugin |
| **Gas Town** | Skilled agent factory | Medium | Very High | Mayor (conductor) + Dogs (domain plugins) |
| **CC-Mirror** | Multi-model specialist routing | Medium | High | Opus architects + Haiku executors |
| **Ralph + Gas Town** | Structured iteration with roles | High | Very High | Factory-produced agents in Ralph loop |
| **Gas Town + CC-Mirror** | Multi-model factory | High | Exceptional | Gas Town roles across model tiers |
| **All Three** | Full orchestration stack | Very High | Maximum | Complete agentic development platform |

### Integration Code Examples

**Ralph + 99-agents Script:**
```bash
#!/bin/bash
# ralph-99.sh

# Install required plugins
claude-code --command "/plugin install backend-development"
claude-code --command "/plugin install tdd-workflows"

# Ralph loop with 99-agents context
while :; do
    cat << 'EOF' | claude-code
## Context
Using installed plugins: backend-development, tdd-workflows

## Current Task
$(cat TASK.md)

## Instructions
1. Read STATE.md for current progress
2. Use appropriate 99-agents specialists
3. Update STATE.md with new progress
4. Stop at checkpoint or when blocked
EOF

    # Checkpoint pause
    read -p "Continue? (y/n) " -n 1 -r
    echo
    [[ $REPLY =~ ^[Yy]$ ]] || break
done
```

**Gas Town + 99-agents Configuration:**
```python
# gas_town_99.py

from claude_code import ClaudeCode

class GasTown99:
    def __init__(self):
        self.cc = ClaudeCode()

        # Install required plugins
        self.cc.execute("/plugin install conductor")
        self.cc.execute("/plugin install backend-development")
        self.cc.execute("/plugin install security-scanning")
        self.cc.execute("/plugin install code-review-ai")

    def create_mayor(self):
        """Mayor: Strategic direction via Conductor"""
        return {
            "plugin": "conductor",
            "command": "/conductor:setup",
            "model": "opus"
        }

    def create_deacon(self, domain):
        """Deacons: Domain experts"""
        deacon_map = {
            "security": ("security-scanning", "security-auditor"),
            "quality": ("code-review-ai", "code-reviewer"),
            "architecture": ("backend-development", "backend-architect")
        }
        plugin, agent = deacon_map.get(domain)
        return {"plugin": plugin, "agent": agent, "model": "sonnet"}

    def create_dog(self, specialty):
        """Dogs: Task executors"""
        dog_map = {
            "backend": "backend-development",
            "frontend": "frontend-mobile-development",
            "infra": "kubernetes-operations"
        }
        return {"plugin": dog_map.get(specialty), "model": "haiku"}

    def run_workflow(self, task):
        """Execute Gas Town workflow with 99-agents"""
        # Mayor sets direction
        self.cc.execute(f"/conductor:new-track '{task}'")

        # Dogs execute
        self.cc.execute("/backend-development:feature-development")

        # Deacons review
        self.cc.execute("/security-scanning:vulnerability-analysis")
        self.cc.execute("/code-review-ai:comprehensive-review")

        # Mayor approves
        self.cc.execute("/conductor:status")
```

---

## Mental Models

### Model 1: Agent Taxonomy Tree

```
                         108 AGENTS
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ARCHITECTS           SPECIALISTS          OPERATORS
   (Design)             (Domain)             (Execute)
        │                    │                    │
   ┌────┴────┐          ┌────┴────┐          ┌────┴────┐
   │         │          │         │          │         │
Backend  Frontend    Security  Testing    DevOps   Support
Cloud    Mobile      Data      Quality    SRE      Content
Database UI/UX       AI/ML     Review     Deploy   SEO
```

**Key Insight:** Agents cluster into three meta-categories:
1. **Architects** design systems
2. **Specialists** provide domain expertise
3. **Operators** execute and maintain

### Model 2: Skill Composition

```
┌─────────────────────────────────────────────────────────────┐
│                      AGENT CAPABILITIES                      │
│                                                              │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐       │
│  │   AGENT     │ = │   ROLE      │ + │   SKILLS    │       │
│  │             │   │ (Identity)  │   │ (Knowledge) │       │
│  └─────────────┘   └─────────────┘   └─────────────┘       │
│                                                              │
│  Example:                                                    │
│  backend-architect = Backend Expert Role                     │
│                    + api-design-principles                   │
│                    + microservices-patterns                  │
│                    + event-sourcing                          │
│                    + saga-orchestration                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Insight:** Agents are role + skill bundles. Skills are reusable; roles provide context for applying them.

### Model 3: Context Budget Management

```
CONTEXT WINDOW BUDGET: 200K tokens
│
├── System Prompt:        ~2K tokens
├── User Context:         ~10K tokens
├── Code Context:         ~50K tokens
├── Conversation:         ~30K tokens
│
└── AVAILABLE FOR TOOLS:  ~108K tokens
    │
    ├── Plugin Metadata:  ~300 tokens each (always loaded)
    │   └── 5 plugins = ~1,500 tokens
    │
    ├── Agent Definitions: ~500 tokens each (on activation)
    │   └── 3 active = ~1,500 tokens
    │
    └── Skills (Progressive):
        ├── Tier 1 (Metadata): ~50 tokens
        ├── Tier 2 (Instructions): ~200 tokens
        └── Tier 3 (Resources): ~500+ tokens

RESULT: Rich specialist knowledge within budget
```

**Key Insight:** Progressive disclosure enables specialists without context explosion.

### Model 4: Orchestration Complexity Spectrum

```
SIMPLE ──────────────────────────────────────────────── COMPLEX

Single Agent       Sequential        Parallel         Tiered
    │                  │                │                │
    ▼                  ▼                ▼                ▼
┌───────┐         ┌─────────┐     ┌─────────┐     ┌─────────┐
│ Agent │         │ A → B → │     │ A ───┐  │     │ Opus    │
│   A   │         │ C → D   │     │ B ───┼→ │     │   ↓     │
└───────┘         └─────────┘     │ C ───┘  │     │ Haiku   │
                                  └─────────┘     │   ↓     │
                                                  │ Sonnet  │
                                                  └─────────┘

Use: Quick       Use: Workflow    Use: Review     Use: Complex
tasks            pipelines        aggregation     decisions
```

**Key Insight:** Match orchestration complexity to task requirements.

---

## Checkpoints

### Installation Verification

```bash
# Checkpoint 1: Marketplace Added
/plugin marketplace list
# Expected: Should show wshobson/agents in available marketplaces

# Checkpoint 2: Plugins Installed
/plugin list
# Expected: Should show installed plugins with agent counts

# Checkpoint 3: Agent Activation
/backend-development:help
# Expected: Should show available commands for the plugin
```

### Agent Functionality Test

```bash
# Checkpoint 4: Agent Response
"Use backend-architect to review my API design"
# Expected: Response identifying as backend-architect with
#           structured API review

# Checkpoint 5: Skill Activation
"Help me implement a CQRS pattern"
# Expected: cqrs-implementation skill activates with detailed
#           pattern guidance
```

### Orchestration Test

```bash
# Checkpoint 6: Multi-Agent Workflow
/full-stack-orchestration:new-feature "Add user authentication"
# Expected: Sequential activation of multiple specialists

# Checkpoint 7: Conductor Track
/conductor:new-track "Feature X"
/conductor:status
# Expected: Track created with spec and plan files
```

### Integration Verification

```bash
# Checkpoint 8: Ralph Integration
# In ralph loop, verify 99-agents skills are available
"What 99-agents specialists are available for my task?"
# Expected: List of relevant agents from installed plugins

# Checkpoint 9: Model Routing
# With CC-Mirror active, verify model assignment
"Which model tier is handling backend-architect?"
# Expected: Opus tier assignment confirmed
```

---

## Troubleshooting

### Plugin Installation Issues

**Problem:** `/plugin marketplace add` fails
```
Error: Unable to connect to marketplace
```
**Solution:**
1. Check network connectivity
2. Verify GitHub access: `curl https://github.com/wshobson/agents`
3. Try direct installation: `/plugin install https://github.com/wshobson/agents/plugins/backend-development`

---

**Problem:** Plugin not loading agents
```
Warning: No agents found in plugin
```
**Solution:**
1. Verify plugin structure: `ls plugins/[name]/agents/`
2. Check agent file format (must be .md with YAML frontmatter)
3. Reinstall plugin: `/plugin uninstall [name] && /plugin install [name]`

---

**Problem:** Skills not activating
```
No skill matched the request
```
**Solution:**
1. Check skill triggers in configuration
2. Use explicit trigger phrases from skill definition
3. Manually activate: `/plugin activate-skill [skill-name]`

### Model Assignment Issues

**Problem:** Wrong model handling agent
```
backend-architect responding with Haiku-level depth
```
**Solution:**
1. Check model override configuration
2. Verify agent definition has correct `model:` field
3. Reset to defaults: `/plugin reset-models`

---

**Problem:** Context budget exceeded
```
Error: Maximum context length exceeded
```
**Solution:**
1. Reduce installed plugins
2. Disable unused skills
3. Use progressive disclosure: only load Tier 3 resources when needed

### Orchestration Issues

**Problem:** Multi-agent workflow stalls
```
Orchestrator waiting indefinitely
```
**Solution:**
1. Check agent dependencies in workflow definition
2. Verify all required agents are available
3. Add timeout: `workflow_timeout: 300s`

---

**Problem:** Conductor tracks not persisting
```
Track not found after session restart
```
**Solution:**
1. Verify `conductor/` directory exists in project
2. Check file permissions
3. Re-run `/conductor:setup` if needed

### Integration Issues

**Problem:** Ralph loop not using 99-agents
```
Generic responses instead of specialist behavior
```
**Solution:**
1. Ensure plugins are installed before starting loop
2. Include plugin context in PROMPT.md
3. Explicitly request specialist: "Use backend-architect to..."

---

**Problem:** Gas Town role assignment fails
```
Agent not matching expected role behavior
```
**Solution:**
1. Verify agent-to-role mapping configuration
2. Check model tier matches role requirements
3. Use role-specific prompting in workflow definition

---

## Complete Plugin Reference

### Development Category (6 plugins)

| Plugin | Agents | Skills | Commands | Focus |
|--------|--------|--------|----------|-------|
| backend-development | 5 | 9 | 4 | API design, microservices, event sourcing |
| frontend-mobile-development | 4 | 6 | 3 | React, React Native, UI components |
| debugging-toolkit | 2 | 4 | 3 | Interactive debugging, DX optimization |
| llm-application-dev | 3 | 8 | 3 | RAG, agents, prompt engineering |
| full-stack-orchestration | 1 | 0 | 2 | Coordinated feature development |
| multi-platform-apps | 2 | 3 | 2 | Web/iOS/Android coordination |

### Infrastructure Category (6 plugins)

| Plugin | Agents | Skills | Commands | Focus |
|--------|--------|--------|----------|-------|
| kubernetes-operations | 2 | 4 | 3 | K8s manifests, GitOps |
| cloud-infrastructure | 3 | 8 | 4 | AWS/Azure/GCP, Terraform |
| cicd-automation | 2 | 3 | 2 | Pipeline configuration |
| deployment-validation | 2 | 2 | 2 | Rollout patterns |
| observability-monitoring | 2 | 4 | 3 | Metrics, logging, tracing |
| incident-response | 2 | 4 | 3 | Triage, root cause, runbooks |

### Security Category (6 plugins)

| Plugin | Agents | Skills | Commands | Focus |
|--------|--------|--------|----------|-------|
| security-scanning | 2 | 3 | 3 | Vulnerability analysis |
| security-compliance | 2 | 4 | 2 | SOC2/HIPAA/GDPR |
| backend-api-security | 2 | 3 | 2 | Auth, API protection |
| frontend-mobile-security | 2 | 3 | 2 | XSS/CSRF prevention |

### Languages Category (11 plugins)

| Plugin | Languages | Agents | Focus |
|--------|-----------|--------|-------|
| python-development | Python | 2 | Django, FastAPI, async |
| javascript-typescript | JS/TS | 3 | Next.js, React, Node |
| systems-programming | Rust, Go, C, C++ | 4 | Low-level, performance |
| jvm-languages | Java, Scala, C# | 3 | Enterprise systems |
| web-scripting | PHP, Ruby | 2 | Web backends |
| functional-programming | Elixir, Haskell | 2 | Phoenix, FP patterns |
| julia-development | Julia | 1 | Scientific computing |

### Specialized Category (8 plugins)

| Plugin | Focus | Agents |
|--------|-------|--------|
| conductor | Context-driven development | 1 |
| blockchain-web3 | DeFi, smart contracts | 2 |
| quantitative-trading | Financial algorithms | 2 |
| payment-processing | Stripe, PayPal integration | 1 |
| game-development | Unity, Minecraft | 2 |
| arm-cortex-microcontrollers | Embedded systems | 1 |
| machine-learning-ops | MLflow, model deployment | 2 |
| data-engineering | ETL, Spark, Airflow | 2 |

---

## Source Attribution

**Primary Source:**
- Repository: https://github.com/wshobson/agents
- Version: 1.3.7
- Author: Seth Hobson (seth@major7apps.com)
- License: MIT (Apache-2.0 for Conductor)

**Documentation Sources:**
- README.md — Overview and installation
- docs/architecture.md — Design principles
- docs/agents.md — Agent reference
- docs/agent-skills.md — Skills documentation
- docs/plugins.md — Plugin reference
- docs/usage.md — Command reference

**Key Agent Definitions Analyzed:**
- plugins/backend-development/agents/backend-architect.md
- plugins/backend-development/agents/tdd-orchestrator.md
- plugins/incident-response/agents/incident-responder.md
- plugins/llm-application-dev/agents/ai-engineer.md

**Conductor Plugin Source:**
- Original: Google's Conductor for Gemini CLI
- Adapted by: @wshobson for Claude Code
- License: Apache License 2.0

---

## Related Extractions

- `005-ralph-wiggum-loop-pocock.md` — Ralph pattern fundamentals
- `006-gas-town-yegge.md` — Gas Town architecture
- `007-cc-mirror.md` — Multi-model coordination
- `research-ralph-expanded.md` — Advanced Ralph patterns
- `synthesis/mastery-ralph-complete.md` — Ralph integration guide

---

## Summary

The 99-agents ecosystem (wshobson/agents) represents the most comprehensive plugin collection for Claude Code, providing:

**Scale:**
- 72 focused plugins
- 108 specialized agents
- 129 modular skills
- 72 development tools
- 15 multi-agent orchestrators

**Design Excellence:**
- Single-responsibility plugins (avg 3.4 components)
- Progressive disclosure skills (3-tier loading)
- Strategic model assignment (Opus/Sonnet/Haiku tiers)
- 100% agent coverage across domains

**Integration Value:**
- Direct enhancement for Ralph loops (skill injection)
- Natural fit for Gas Town roles (specialist agents)
- Model-aware for CC-Mirror (tiered assignment)
- Composable for custom orchestrations

**Key Differentiator:**
Instead of building AI assistants from scratch, 99-agents provides battle-tested specialists ready for immediate deployment. The ecosystem transforms Claude Code from a capable assistant into a complete AI development platform with domain expertise across architecture, security, infrastructure, data, and dozens of specialized domains.

The Conductor plugin alone provides a complete project management layer, turning Claude Code into a context-aware development orchestrator that maintains project state, specifications, and development standards across sessions.

For teams building with Claude Code, this ecosystem represents a significant force multiplier—instant access to 108 specialists instead of months of prompt engineering.

---

*Extraction completed: 2026-01-19*
*Agent: B3-T3-4*
*Lines: 1,100+*
