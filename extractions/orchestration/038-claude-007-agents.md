# Claude 007 Agents: Deep Extraction

**Source:** [github.com/avivl/claude-007-agents](https://github.com/avivl/claude-007-agents)
**Author:** Aviv Laufer (@avivl)
**Version:** Active development (121+ commits, 233+ stars)
**License:** MIT
**Last Updated:** January 2026
**Extraction Date:** 2026-01-19

---

## You Are Here

```
Claude Code Ecosystem
├── Core Claude Code (vanilla CLI)
├── Configuration Patterns
│   ├── CLAUDE.md (project context)
│   ├── Agent definitions (`.claude/agents/`)
│   └── MCP integrations
├── Orchestration Patterns
│   ├── Ralph Wiggum Loop (continuous iteration)
│   ├── Gas Town (agent factory architecture)
│   ├── CC-Mirror (multi-model orchestration)
│   └── Claude 007 Agents  ← YOU ARE HERE
│       └── Pre-built agent library (117+ agents)
└── Production Patterns
    └── Enterprise workflows
```

**What you need to know first:** Claude Code supports agent definitions in `.claude/agents/` that provide specialized system prompts and capabilities. Claude 007 Agents is a **pre-built library of 117+ production-ready agents** covering backend, frontend, infrastructure, security, orchestration, and more. Instead of writing agents from scratch, you configure which pre-built agents your project needs.

**Why this matters for your journey:** This represents the largest public collection of Claude Code agents. It transforms agent creation from "write everything yourself" to "select and configure what you need."

---

## What This Is

Claude 007 Agents is an **open-source AI agent orchestration framework** comprising 117+ specialized agents organized across 26 categories. Think of it as a "starter kit" or "agent marketplace" for Claude Code projects.

### The Core Value Proposition

| Without Claude 007 | With Claude 007 |
|-------------------|-----------------|
| Write agents from scratch | Select from 117+ pre-built |
| Figure out agent coordination | Built-in orchestration patterns |
| Design security/resilience yourself | Production-tested specialists |
| No session continuity | Session Manager handles state |
| Manual tech stack detection | Bootstrap auto-configures |

### Key Statistics

- **117+ Agents** across 26 categories
- **MIT Licensed** - free for commercial use
- **Bootstrap System** - auto-detects tech stack, selects optimal agents
- **Task Master Integration** - codebase-aware autonomous development
- **MCP Integration** - persistent memory, GitHub operations, sequential thinking

---

## Why It Matters

### 1. Eliminates Agent Creation Overhead

Most Claude Code users reinvent the wheel when creating agents. Claude 007 provides battle-tested implementations for common needs:

```markdown
# Instead of writing this from scratch...
You are a security specialist who...
[500 lines of security expertise encoding]

# You get this pre-built:
@security-specialist - Comprehensive security expert combining
application security, vulnerability assessment, penetration testing,
compliance auditing, and threat modeling.
```

### 2. Solves Coordination Problem

Individual agents are easy. Getting them to work together is hard. Claude 007 includes:

- **Orchestration agents** - Route tasks to optimal specialists
- **Choreography workflows** - Multi-agent handoff sequences
- **Session management** - State preservation across interruptions
- **Parallel coordination** - Concurrent agent execution without conflicts

### 3. Encodes Production Patterns

The agents embed hard-won knowledge:

- **Resilience engineering** - Circuit breakers, retry logic, logging
- **Security scanning** - OWASP, STRIDE, compliance frameworks
- **Exponential planning** - Future-proofing for AI capability growth
- **Verification systems** - Human-readable acceptance criteria

### 4. Technology Breadth

Coverage spans the modern stack:

| Domain | Technologies |
|--------|-------------|
| Backend | Rails, Django, FastAPI, Laravel, Go, Node.js |
| Frontend | React, Vue, Next.js, Angular, WebAssembly |
| Infrastructure | AWS, Kubernetes, Terraform, Pulumi |
| Data | PostgreSQL, Redis, Elasticsearch |
| DevOps | Docker, CI/CD, Observability |

---

## Architecture Deep Dive

### Directory Structure

```
claude-007-agents/
├── .claude/
│   └── agents/                    # All agent definitions
│       ├── ai/                    # ML, NLP, Computer Vision (3)
│       ├── ai-analysis/           # Error detective, GraphQL, Prompts (3)
│       ├── automation/            # CI/CD, QA, Release (3)
│       ├── backend/               # Django, Rails, Go, Node.js, etc. (15)
│       ├── business/              # Analyst, PM, Payments (5)
│       ├── choreography/          # Multi-agent workflows (3)
│       ├── context-orchestrators/ # Vibe Coding, Session Mgr (3)
│       ├── creative/              # Rubber Duck, Archaeologist (3)
│       ├── data/                  # Analytics, BI, Search (4)
│       ├── database/              # Database Architect (1)
│       ├── design/                # UX Designer (1)
│       ├── devops/                # Deployment Specialist (1)
│       ├── frontend/              # React, Vue, Angular, etc. (9)
│       ├── infrastructure/        # Cloud, SRE, Terraform (10)
│       ├── orchestration/         # Core orchestration (14)
│       ├── orchestrators/         # Task Master suite (5)
│       ├── performance-optimizers/# Parallel, Batch, Session (3)
│       ├── personalities/         # Agent variants/flavors (8)
│       ├── product/               # Rapid Prototyper (1)
│       ├── safety-specialists/    # Verification, Permissions (4)
│       ├── security/              # DevSecOps, Privacy (3)
│       ├── templates/             # Agent templates
│       ├── testing/               # Test Automation (1)
│       └── universal/             # Cross-cutting (13)
│
├── src/
│   └── bootstrap/
│       └── bootstrap-engine.js    # Auto-configuration system
│
├── agents.json                    # Unified agent registry
├── CLAUDE.md                      # Project configuration template
├── HIGHLIGHTS.md                  # Key differentiators
└── README.md                      # Getting started
```

### Agent Definition Format

Agents are defined as Markdown files with YAML frontmatter:

```markdown
---
name: security-specialist
description: Comprehensive security expert
tools:
  - Read
  - Edit
  - Bash
  - mcp__basic-memory
  - mcp__sequential-thinking
triggers:
  - security review
  - vulnerability scan
  - penetration test
  - compliance audit
---

# Security Specialist

You are a comprehensive security expert combining application security,
vulnerability assessment, penetration testing, compliance auditing,
and threat modeling.

## Core Capabilities
[Detailed expertise encoding...]

## Integration Points
[Collaboration with other agents...]

## Mandatory Requirements
[Quality gates, commit attribution...]
```

### Bootstrap System Architecture

The bootstrap engine performs intelligent project analysis:

```
┌─────────────────────────────────────────────────────┐
│                 BOOTSTRAP ENGINE                     │
├─────────────────────────────────────────────────────┤
│  Phase 1: Environmental Analysis                     │
│  ├── Detect: package.json → Node.js                 │
│  ├── Detect: .py files → Python                     │
│  ├── Detect: .rb files → Ruby                       │
│  └── Classify scenario (NEW/EXISTING/PARTIAL)       │
├─────────────────────────────────────────────────────┤
│  Phase 2: Strategic Configuration                    │
│  ├── Select universal core agents (always on)       │
│  ├── Map tech stack → specialized agents            │
│  ├── Assess complexity (1-10 scale)                 │
│  └── Configure MCP servers                          │
├─────────────────────────────────────────────────────┤
│  Phase 3: Automated Deployment                       │
│  ├── Generate CLAUDE.md                             │
│  ├── Initialize Task Master                         │
│  └── Configure development environment              │
├─────────────────────────────────────────────────────┤
│  Phase 4: Validation Testing                         │
│  ├── Verify agent accessibility                     │
│  ├── Test MCP connections                           │
│  └── Confirm system readiness                       │
└─────────────────────────────────────────────────────┘
```

### Agent Selection Logic

```javascript
// Universal core agents (always included)
const UNIVERSAL_CORE = [
  '@software-engineering-expert',
  '@code-reviewer',
  '@orchestrator',
  '@vibe-coding-coordinator',
  '@security-specialist'
];

// Technology mapping
const TECH_AGENTS = {
  'nodejs': ['@nodejs-expert', '@typescript-pino-logging'],
  'python': ['@fastapi-expert', '@python-hyx-resilience'],
  'react':  ['@react-expert', '@design-system-architect'],
  'rails':  ['@rails-expert', '@resilience-engineer'],
  'go':     ['@gin-expert', '@fiber-expert', '@go-resilience-engineer']
};

// Complexity scaling
// Low (1-3):    15-20 agents
// Medium (4-6): 25-35 agents
// High (7-10):  40+ agents + @system-architect + @performance-optimizer
```

---

## Agent Catalog

### Universal Agents (Always Applicable)

| Agent | Purpose |
|-------|---------|
| `bootstrap-orchestrator` | Project initialization and configuration |
| `software-engineering-expert` | General software engineering practices |
| `code-reviewer` | Code quality and standards enforcement |
| `documentation-specialist` | Technical documentation |
| `git-expert` | Version control workflows |
| `pr-reviewer-specialist` | Pull request analysis |
| `pr-description-composer` | PR description generation |
| `resilience-engineer` | Fault tolerance patterns |
| `logging-concepts-engineer` | Structured logging design |
| `performance-optimizer` | Performance analysis and tuning |
| `quality-system-engineer` | Quality assurance systems |
| `legacy-modernization-specialist` | Legacy code transformation |
| `developer-experience-optimizer` | DX improvements |

### Backend Specialists (15 Agents)

| Agent | Technology | Specialty |
|-------|------------|-----------|
| `django-expert` | Python | Django framework |
| `fastapi-expert` | Python | FastAPI/async Python |
| `rails-expert` | Ruby | Ruby on Rails |
| `laravel-expert` | PHP | Laravel framework |
| `nodejs-expert` | JavaScript | Node.js runtime |
| `fastify-expert` | JavaScript | Fastify framework |
| `gin-expert` | Go | Gin web framework |
| `fiber-expert` | Go | Fiber framework |
| `prisma-expert` | TypeScript | Prisma ORM |
| `go-resilience-engineer` | Go | Go resilience patterns |
| `go-zap-logging` | Go | Zap structured logging |
| `python-hyx-resilience` | Python | Hyx resilience library |
| `typescript-cockatiel-resilience` | TypeScript | Cockatiel patterns |
| `typescript-pino-logging` | TypeScript | Pino logging |
| `resilience-engineer` | Universal | Cross-language resilience |

### Frontend Specialists (9 Agents)

| Agent | Technology |
|-------|------------|
| `react-expert` | React/JSX |
| `vue-expert` | Vue.js |
| `nextjs-expert` | Next.js |
| `angular-expert` | Angular |
| `design-system-architect` | Component libraries |
| `micro-frontend-architect` | Micro-frontend patterns |
| `mobile-developer` | React Native/mobile |
| `pwa-specialist` | Progressive Web Apps |
| `webassembly-specialist` | WebAssembly |

### Infrastructure Specialists (10 Agents)

| Agent | Domain |
|-------|--------|
| `cloud-architect` | Multi-cloud strategy |
| `terraform-specialist` | Infrastructure as Code |
| `pulumi-typescript-specialist` | Pulumi IaC |
| `serverless-architect` | Serverless patterns |
| `site-reliability-engineer` | SRE practices |
| `observability-engineer` | Monitoring/tracing |
| `network-engineer` | Network architecture |
| `database-admin` | Database operations |
| `incident-responder` | Incident management |
| `devops-troubleshooter` | DevOps debugging |

### Orchestration Agents (14 Agents)

| Agent | Purpose |
|-------|---------|
| `activation-system` | Agent activation management |
| `agent-communication-protocol` | Inter-agent messaging |
| `auto-detection-engine` | Context-based orchestration |
| `choreography-engine` | Multi-agent workflows |
| `context-aware-activator` | Smart activation |
| `enhanced-agent-template` | Agent creation template |
| `intelligent-agent-selector` | Task-agent matching |
| `knowledge-graph-manager` | Knowledge organization |
| `learning-system` | Pattern learning |
| `personality-engine` | Agent personality management |
| `predictive-orchestrator` | Predictive task routing |
| `smart-agent-router` | Intelligent routing |
| `success-pattern-learner` | Success pattern extraction |
| `workflow-coordinator` | Workflow management |

### Context Orchestrators (3 Agents)

| Agent | Purpose |
|-------|---------|
| `vibe-coding-coordinator` | 15-20 min preparation before autonomous work |
| `exponential-planner` | Multi-day planning with capability growth awareness |
| `session-manager` | State preservation, checkpoints, recovery |

### Safety Specialists (4 Agents)

| Agent | Purpose |
|-------|---------|
| `verification-specialist` | Human-readable acceptance criteria |
| `permission-escalator` | Permission management |
| `leaf-node-detector` | Dependency analysis |
| `agent-environment-simulator` | Environment simulation |

### Security Specialists (3 Agents)

| Agent | Specialty |
|-------|-----------|
| `security-specialist` | AppSec, PenTest, Compliance |
| `devsecops-engineer` | Security in CI/CD |
| `privacy-engineer` | Data privacy/GDPR |

### Creative Agents (3 Agents)

| Agent | Purpose |
|-------|---------|
| `rubber-duck-debugger` | Socratic debugging through questions |
| `code-archaeologist-time-traveler` | Git history analysis |
| `technical-debt-collector` | Technical debt management |

### Task Master Suite (5 Agents)

| Agent | Purpose |
|-------|---------|
| `task-orchestrator` | Task queue analysis and agent deployment |
| `task-executor` | Implementation of individual tasks |
| `task-checker` | Task verification |
| `task-master-initialization-specialist` | Task Master setup |
| `task-master-template-manager` | Template management |

### Choreography Workflows (3 Agents)

| Agent | Workflow Type |
|-------|---------------|
| `feature-development-dance` | Full feature implementation |
| `code-review-waltz` | Code review process |
| `bug-hunting-tango` | Bug investigation |

### Business & Product (6 Agents)

| Agent | Domain |
|-------|--------|
| `business-analyst` | Business requirements |
| `product-manager` | Product strategy |
| `financial-modeling-agent` | Financial analysis |
| `healthcare-compliance-agent` | HIPAA compliance |
| `payment-integration-agent` | Payment systems |
| `rapid-prototyper` | Quick prototyping |

### AI/ML Specialists (6 Agents)

| Agent | Specialty |
|-------|-----------|
| `machine-learning-engineer` | ML pipelines |
| `computer-vision-specialist` | CV applications |
| `nlp-llm-integration-expert` | LLM integration |
| `prompt-engineer` | Prompt optimization |
| `error-detective` | Error analysis |
| `graphql-architect` | GraphQL design |

### Data Specialists (5 Agents)

| Agent | Domain |
|-------|--------|
| `data-engineer` | Data pipelines |
| `analytics-implementation-specialist` | Analytics systems |
| `business-intelligence-developer` | BI dashboards |
| `search-specialist` | Search systems |
| `database-architect` | Database design |

---

## Installation & Setup

### Prerequisites

```bash
# Required
- Claude Code CLI installed
- Node.js v18+ (for bootstrap engine)

# Optional but recommended
- Task Master AI MCP
- Basic Memory MCP
- GitHub MCP
- Sequential Thinking MCP
```

### Method 1: Per-Project Bootstrap (Recommended)

```bash
# Clone the repository
git clone https://github.com/avivl/claude-007-agents.git

# Navigate to your project
cd /path/to/your/project

# In Claude Code, invoke the bootstrap
claude

# Then type:
"Use @bootstrap-orchestrator to analyze and setup this project"
```

The bootstrap will:
1. Analyze your codebase
2. Detect technology stack
3. Select optimal agents
4. Generate CLAUDE.md configuration
5. Configure MCP integrations
6. Validate system readiness

### Method 2: Global Installation

```bash
# Copy agents to global location
cp -r claude-007-agents/.claude/agents ~/.claude/agents

# Copy templates
cp claude-007-agents/agents.json ~/.claude/
```

### Method 3: Selective Agent Copy

```bash
# Copy only specific categories
cp -r claude-007-agents/.claude/agents/backend ~/.claude/agents/
cp -r claude-007-agents/.claude/agents/security ~/.claude/agents/
cp -r claude-007-agents/.claude/agents/orchestration ~/.claude/agents/
```

### Post-Installation Verification

```bash
# In Claude Code, verify agents are accessible
"List available agents"

# Test a specific agent
"Use @security-specialist to review this file for vulnerabilities"
```

---

## Configuration Options

### CLAUDE.md Configuration

The bootstrap generates a project-specific CLAUDE.md:

```markdown
# Project Configuration

## Active Agents
- @software-engineering-expert
- @code-reviewer
- @security-specialist
- @react-expert
- @nodejs-expert
- @vibe-coding-coordinator

## Commit Attribution (REQUIRED)
All commits must follow format:
`type(scope): description - @agent1 @agent2`

Example:
`feat(auth): add OAuth2 flow - @security-specialist @nodejs-expert`

## MCP Servers
- basic-memory: Organizational knowledge
- github: Repository operations
- task-master: Project management
- sequential-thinking: Complex reasoning

## Quality Gates
- Security review required for auth changes
- Performance review for database queries
- Documentation required for API changes
```

### agents.json Registry

The central registry defines agent metadata:

```json
{
  "version": "1.0.0",
  "categories": {
    "backend": {
      "agents": ["django-expert", "fastapi-expert", "rails-expert"],
      "description": "Backend framework specialists"
    },
    "orchestration": {
      "agents": ["smart-agent-router", "workflow-coordinator"],
      "description": "Task routing and coordination"
    }
  },
  "workflows": {
    "backend-resilience": {
      "phases": ["analysis", "design", "implementation", "testing"],
      "agents": ["resilience-engineer", "go-resilience-engineer"]
    },
    "full-stack-development": {
      "phases": ["planning", "backend", "frontend", "integration"],
      "agents": ["vibe-coding-coordinator", "react-expert", "nodejs-expert"]
    }
  },
  "settings": {
    "default_timeout": 300,
    "max_concurrent_agents": 5,
    "retry_attempts": 3
  }
}
```

### MCP Server Configuration

```json
{
  "mcpServers": {
    "basic-memory": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-basic-memory"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "task-master": {
      "command": "npx",
      "args": ["-y", "@task-master/mcp-server"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-sequential-thinking"]
    }
  }
}
```

---

## Usage Patterns

### Pattern 1: Direct Agent Invocation

```
# Simple invocation
"@security-specialist review src/auth/login.ts for vulnerabilities"

# Multiple agents
"@react-expert and @design-system-architect help me refactor
 this component to use our design system"
```

### Pattern 2: Workflow-Based Development

```
# Invoke choreography workflow
"@feature-development-dance implement user authentication feature"

# This triggers sequence:
# 1. @project-analyst → Requirements analysis
# 2. @system-architect → Technical design
# 3. @security-specialist → Security review
# 4. @nodejs-expert → Implementation
# 5. @test-automation-expert → Test suite
# 6. @code-reviewer → Quality review
# 7. @documentation-specialist → Documentation
```

### Pattern 3: Vibe Coding Session

```
# Start preparation phase
"@vibe-coding-coordinator prepare for implementing payment integration"

# Coordinator runs 15-20 minute analysis:
# - Phase 1 (5-7 min): Codebase exploration
# - Phase 2 (8-10 min): Implementation planning
# - Phase 3 (3-5 min): Context creation

# Then autonomous execution with safety validation
```

### Pattern 4: Long-Running Session

```
# Initialize session management
"@session-manager start session for multi-day refactoring project"

# Session manager:
# - Creates unique session ID
# - Enables auto-checkpoints (every 10 min)
# - Tracks file changes and progress
# - Enables recovery from interruption

# Later, after interruption:
"@session-manager resume last session"
```

### Pattern 5: Task Master Integration

```
# Initialize Task Master for project
"@task-master-initialization-specialist setup task management"

# Orchestrate task execution
"@task-orchestrator analyze task queue and deploy optimal agents"

# Execute individual tasks
"@task-executor implement task TASK-123"

# Verify completion
"@task-checker validate implementation meets acceptance criteria"
```

### Pattern 6: Socratic Debugging

```
# Invoke rubber duck for debugging
"@rubber-duck-debugger help me understand why authentication fails"

# Rubber duck asks questions (never gives answers):
# - "What happens when you trace the token flow?"
# - "Have you checked what the middleware logs?"
# - "What assumptions are you making about the session?"
```

---

## Integration Patterns

### With Ralph Wiggum Loop

Claude 007 agents integrate naturally with Ralph loops, providing specialized expertise in each iteration.

**Configuration Example:**

```markdown
# PROMPT.md for Ralph loop with 007 agents

## Available Agents
@software-engineering-expert - General guidance
@security-specialist - Security review each iteration
@code-reviewer - Quality gates

## Current Task
[Task description]

## Instructions
1. Analyze current state
2. If security-relevant: Invoke @security-specialist
3. Implement next step
4. Run @code-reviewer before completing
5. Update progress for next iteration
```

**Ralph Loop Script:**

```bash
#!/bin/bash
# ralph-007.sh

while :; do
  # Each iteration can invoke different 007 agents
  cat PROMPT.md | claude --allowedTools "Read,Write,Edit,Bash,mcp__*"

  # Optional: Rotate focus agents per iteration
  sleep 2
done
```

**Use Cases:**
| Ralph + 007 Agent | Scenario |
|-------------------|----------|
| Ralph + `@security-specialist` | Security-first iteration |
| Ralph + `@resilience-engineer` | Fault-tolerance iteration |
| Ralph + `@performance-optimizer` | Optimization iteration |
| Ralph + `@code-reviewer` | Quality-gated iteration |

### With Gas Town Architecture

Claude 007 agents can serve as pre-built "Dogs" (worker agents) in Gas Town's factory architecture.

**Role Mapping:**

| Gas Town Role | 007 Agent Equivalent |
|---------------|---------------------|
| Mayor | `@vibe-coding-coordinator` |
| Deacon | `@task-orchestrator` |
| Dogs | `@react-expert`, `@nodejs-expert`, `@security-specialist`, etc. |
| Refinery | `@verification-specialist` + `@code-reviewer` |

**Configuration Example:**

```markdown
# Gas Town with 007 Dogs

## Mayor (Planning)
@vibe-coding-coordinator runs 15-20 min preparation phase

## Deacon (Coordination)
@task-orchestrator analyzes dependencies and routes to Dogs

## Dogs (Execution)
Available specialists from 007:
- @react-expert - Frontend implementation
- @nodejs-expert - Backend services
- @security-specialist - Security concerns
- @test-automation-expert - Test suite

## Refinery (Quality)
@verification-specialist creates acceptance criteria
@code-reviewer enforces standards
```

**Invocation:**

```bash
# Gas Town style orchestration with 007 agents
"@vibe-coding-coordinator plan the feature, then @task-orchestrator
 coordinate @react-expert and @nodejs-expert for implementation,
 with @verification-specialist validating output"
```

### With CC-Mirror

Claude 007 agents can be deployed across multiple models via CC-Mirror's orchestration.

**Configuration Example:**

```yaml
# cc-mirror-007.yaml
agents:
  opus:
    role: architect
    agents:
      - "@vibe-coding-coordinator"
      - "@system-architect"
      - "@exponential-planner"

  sonnet:
    role: executor
    agents:
      - "@react-expert"
      - "@nodejs-expert"
      - "@task-executor"

  haiku:
    role: reviewer
    agents:
      - "@code-reviewer"
      - "@verification-specialist"
```

**Multi-Model Flow:**

```
┌─────────────────────────────────────────────────────┐
│                    CC-Mirror                         │
├─────────────────────────────────────────────────────┤
│  Opus + @vibe-coding-coordinator                    │
│  └── Plans and coordinates (high reasoning)         │
│                                                      │
│  Sonnet + @react-expert + @nodejs-expert            │
│  └── Implements (balance of speed/quality)          │
│                                                      │
│  Haiku + @code-reviewer                             │
│  └── Reviews (fast iteration on quality checks)     │
└─────────────────────────────────────────────────────┘
```

### Combination Matrix

| 007 Agents + | Use Case | Complexity | Value Add |
|--------------|----------|------------|-----------|
| **Ralph** | Agent-enhanced iterations | Low | High - Specialized expertise each loop |
| **Gas Town** | Pre-built factory workers | Medium | Very High - Eliminates Dog creation |
| **CC-Mirror** | Multi-model specialists | Medium | High - Right model for each agent |
| **Ralph + Gas Town** | Factory-powered Ralph | High | Very High - Autonomous factories |
| **All Three** | Enterprise orchestration | Very High | Maximum - Full automation |

### Integration Code Examples

**Ralph + 007:**
```bash
# PROMPT.md
Use @security-specialist to review changes, then @task-executor to implement.
Current task: [auto-updated by previous iteration]
```

**Gas Town + 007:**
```bash
# mayor-prompt.md
You are the Mayor using @vibe-coding-coordinator patterns.
Available Dogs: @react-expert, @nodejs-expert, @security-specialist
```

**CC-Mirror + 007:**
```python
# cc_mirror_config.py
AGENT_MODEL_MAP = {
    "vibe-coding-coordinator": "opus",
    "react-expert": "sonnet",
    "code-reviewer": "haiku"
}
```

---

## Mental Models

### Model 1: Agent Library vs Agent Framework

```
┌─────────────────────────────────────────────────────┐
│                MENTAL MODEL                          │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Traditional Approach:                               │
│  ┌─────────────────────────────────────────────────┐│
│  │ You write every agent from scratch              ││
│  │ You design coordination patterns               ││
│  │ You test and iterate on prompts                ││
│  └─────────────────────────────────────────────────┘│
│                                                      │
│  Claude 007 Approach:                                │
│  ┌─────────────────────────────────────────────────┐│
│  │ Library: 117+ pre-built agents                  ││
│  │ Framework: Orchestration patterns included      ││
│  │ Bootstrap: Auto-configuration for your stack    ││
│  └─────────────────────────────────────────────────┘│
│                                                      │
│  Analogy:                                            │
│  - Without 007: Building React from scratch         │
│  - With 007: npm install react                      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Model 2: The Specialization Ladder

```
Level 0: Generic Claude
├── No agent definitions
├── Context provided inline
└── All prompting manual

Level 1: Custom Agents
├── You write agent .md files
├── Basic role definitions
└── Manual coordination

Level 2: 007 Individual Agents
├── Pre-built specialists
├── Invoke as needed: "@react-expert"
└── No orchestration

Level 3: 007 Choreography
├── Multi-agent workflows
├── "@feature-development-dance"
└── Automated handoffs

Level 4: 007 + Orchestration Patterns
├── Combine with Ralph/Gas Town/CC-Mirror
├── Factory-scale automation
└── Enterprise workflows
```

### Model 3: The Bootstrap Mental Model

```
Traditional Setup:                    007 Bootstrap:

1. Analyze project structure         1. "Bootstrap this project"
2. Decide which agents needed        2. Auto-detects everything
3. Write agent definitions           3. Selects from library
4. Configure orchestration           4. Generates CLAUDE.md
5. Set up MCP servers                5. Configures MCPs
6. Test everything works             6. Validates readiness

Time: Hours to days                   Time: < 5 minutes
```

### Model 4: Agents as Team Members

```
┌─────────────────────────────────────────────────────┐
│           YOUR AI DEVELOPMENT TEAM                   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Tech Lead:        @vibe-coding-coordinator         │
│  ├── Runs discovery sessions                        │
│  ├── Creates implementation plans                   │
│  └── Writes context documents                       │
│                                                      │
│  Backend Dev:      @nodejs-expert / @rails-expert   │
│  ├── Implements features                            │
│  └── Follows tech lead's plan                       │
│                                                      │
│  Frontend Dev:     @react-expert                    │
│  ├── Builds UI components                           │
│  └── Coordinates with backend                       │
│                                                      │
│  Security:         @security-specialist             │
│  ├── Reviews all changes                            │
│  └── Blocks insecure code                           │
│                                                      │
│  QA:               @verification-specialist         │
│  ├── Writes acceptance criteria                     │
│  └── Creates test plans                             │
│                                                      │
│  DevOps:           @site-reliability-engineer       │
│  ├── Handles infrastructure                         │
│  └── Monitors and responds to incidents             │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### Model 5: MCP as Persistent Memory

```
Without MCP:                         With MCP:

Each session starts fresh            Basic Memory MCP stores:
├── No history                       ├── Project patterns
├── Repeat explanations              ├── Architectural decisions
├── Re-discover patterns             ├── Past solutions
└── No organizational learning       └── Team knowledge

Agent: "What's our auth pattern?"    Agent: "Loading auth pattern
       [searches codebase]                  from organizational memory..."

Result: Rediscovers JWT pattern      Result: Instantly knows pattern
        in 5 minutes                        and its history
```

---

## Checkpoints

### Checkpoint 1: Repository Cloned

**You should see:**
```bash
$ ls claude-007-agents/
.claude/  agents.json  CLAUDE.md  docs/  README.md  src/  ...

$ ls claude-007-agents/.claude/agents/
ai/  backend/  business/  choreography/  context-orchestrators/
creative/  data/  database/  design/  devops/  frontend/
infrastructure/  orchestration/  orchestrators/  ...
```

### Checkpoint 2: Bootstrap Completed

**You should see:**
```
$ cat your-project/CLAUDE.md
# Project Configuration

## Active Agents
- @software-engineering-expert
- @code-reviewer
[... your tech stack agents ...]

## MCP Servers
[... configured servers ...]
```

**Signs of success:**
- CLAUDE.md generated in your project
- Agent list matches your tech stack
- No bootstrap errors

### Checkpoint 3: Agent Invocation Works

**Test command:**
```
"@software-engineering-expert describe your capabilities"
```

**Expected response:**
Agent introduces itself and lists its specialties.

**If it fails:**
- Check agent files are in `.claude/agents/`
- Verify CLAUDE.md references correct agents
- Restart Claude Code

### Checkpoint 4: Multi-Agent Workflow Works

**Test command:**
```
"@feature-development-dance analyze requirements for adding user settings page"
```

**Expected behavior:**
1. Project analyst activates
2. Requirements breakdown appears
3. Handoff to architect mentioned
4. Security considerations noted

### Checkpoint 5: MCP Integration Works

**Test command:**
```
"@session-manager create a checkpoint for current progress"
```

**Expected response:**
Session manager acknowledges and references MCP storage.

**If MCP fails:**
- Check MCP server configuration in settings
- Verify npx can access MCP packages
- Check environment variables (GITHUB_TOKEN, etc.)

---

## Troubleshooting

<details>
<summary><strong>Bootstrap fails with "Cannot detect project type"</strong></summary>

**Cause:** Empty directory or unusual project structure.

**Solution:**
```bash
# Create minimal indicator file
touch package.json  # For Node.js
# OR
touch requirements.txt  # For Python
# OR
touch Gemfile  # For Ruby

# Re-run bootstrap
```

</details>

<details>
<summary><strong>Agent not found: "@react-expert"</strong></summary>

**Cause:** Agent files not in correct location.

**Solution:**
```bash
# Check agent exists
ls ~/.claude/agents/frontend/react-expert.md

# If missing, copy from 007 repo
cp claude-007-agents/.claude/agents/frontend/react-expert.md \
   ~/.claude/agents/frontend/
```

</details>

<details>
<summary><strong>MCP connection fails</strong></summary>

**Cause:** MCP server not installed or configured.

**Solution:**
```bash
# Test MCP server manually
npx -y @anthropic/mcp-basic-memory

# Check Claude Code settings
# File > Settings > MCP Servers
# Verify server configuration

# Check environment variables
echo $GITHUB_TOKEN  # Should be set for GitHub MCP
```

</details>

<details>
<summary><strong>Commit attribution format rejected</strong></summary>

**Cause:** Pre-commit hook enforcing 007 format.

**Solution:**
```bash
# Use correct format
git commit -m "feat(auth): add OAuth2 - @security-specialist @nodejs-expert"

# Format: type(scope): description - @agent1 @agent2
```

</details>

<details>
<summary><strong>Too many agents activated, confusing responses</strong></summary>

**Cause:** Over-aggressive agent routing.

**Solution:**
```markdown
# In CLAUDE.md, limit active agents
## Active Agents (Core Only)
- @software-engineering-expert
- @code-reviewer
- @security-specialist

## On-Demand Agents (Invoke Explicitly)
- @react-expert
- @nodejs-expert
```

</details>

<details>
<summary><strong>Session state lost after interruption</strong></summary>

**Cause:** Session Manager not initialized or MCP not connected.

**Solution:**
```
# Always start sessions with:
"@session-manager start session for [task description]"

# To recover:
"@session-manager list recent sessions"
"@session-manager resume session [session-id]"
```

</details>

<details>
<summary><strong>Agents duplicating work or conflicting</strong></summary>

**Cause:** Anti-duplication protocol not followed.

**Solution:**
```markdown
# Add to CLAUDE.md
## Anti-Duplication Protocol
Before generating new code, ALL agents MUST:
1. Search existing codebase for similar implementations
2. Prefer enhancing existing code over creating new
3. Reference existing patterns via MCP memory
```

</details>

---

## Source Attribution

### Primary Source

- **Repository:** [github.com/avivl/claude-007-agents](https://github.com/avivl/claude-007-agents)
- **Author:** Aviv Laufer (@avivl)
- **License:** MIT

### Key Files Referenced

| File | Content |
|------|---------|
| `README.md` | Overview, installation, features |
| `CLAUDE.md` | Configuration template |
| `HIGHLIGHTS.md` | Key differentiators |
| `CONTRIBUTING.md` | Agent creation guidelines |
| `agents.json` | Unified agent registry |
| `src/bootstrap/bootstrap-engine.js` | Auto-configuration logic |
| `.claude/agents/**/*.md` | Individual agent definitions |

### Related Work

| Source | Relationship |
|--------|-------------|
| [Claude Code Official Docs](https://docs.anthropic.com/claude-code) | Foundation |
| [Ralph Wiggum Loop](../synthesis/mastery-ralph-complete.md) | Composable pattern |
| [Gas Town Architecture](./006-gas-town-yegge-detailed.md) | Factory pattern |
| [CC-Mirror](./024-cc-mirror-complete.md) | Multi-model orchestration |

### Reliability Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation | High | Comprehensive README, examples |
| Code Quality | High | 121+ commits, active maintenance |
| Community | Growing | 233+ stars, MIT license |
| Production-Ready | Medium-High | Real-world usage reported |
| Integration | High | Standard Claude Code patterns |

---

## Summary

Claude 007 Agents represents a significant evolution in Claude Code workflows: a pre-built library of 117+ production-ready agents that eliminates the need to write agents from scratch. Key innovations include:

1. **Bootstrap System** - Auto-detects tech stack, selects optimal agents, generates configuration
2. **Orchestration Layer** - Built-in coordination patterns for multi-agent workflows
3. **Session Management** - State preservation and recovery for long-running work
4. **MCP Integration** - Persistent organizational memory across sessions
5. **Choreography Workflows** - Pre-defined multi-agent sequences for common tasks

For teams already using Ralph, Gas Town, or CC-Mirror patterns, Claude 007 provides ready-made "worker agents" that slot directly into existing architectures. For teams new to Claude Code orchestration, it provides a complete starting point.

The MIT license and active development make this a practical choice for both personal and commercial projects.
