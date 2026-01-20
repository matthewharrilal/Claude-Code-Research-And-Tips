# BMAD-METHOD: AI-Driven Agile Development Framework

---

## You Are Here

**Context:** You're exploring BMAD-METHOD (Breakthrough Method of Agile AI-Driven Development), a comprehensive multi-agent SDLC framework that provides 9+ specialized AI personas across 4 development phases with 50+ guided workflows. This extraction connects to the broader Claude Code orchestration ecosystem alongside Ralph, Gas Town, and Marathon patterns.

**Where This Fits:**
- **In the Complexity Ladder:** Level 5-6 (Multi-Session → Full Autonomous)
- **Compared to Ralph:** Ralph is a simple loop; BMAD is a full SDLC methodology with role-specific agents
- **Compared to Gas Town:** Gas Town is agent factory architecture; BMAD is domain-specific SDLC implementation
- **Compared to CC Mirror:** CC Mirror enables multi-agent; BMAD structures multi-agent for software development

**Prerequisites:**
- Understanding of basic Claude Code usage
- Familiarity with agile/SDLC concepts
- Comfort with YAML configuration

**What You'll Learn:**
- How BMAD structures AI agents across SDLC phases
- The document sharding and workflow approach
- Integration patterns with Ralph, Gas Town, and Marathon
- Configuration and customization options

---

## What This Is

### Overview

BMAD-METHOD is an open-source, MIT-licensed framework that implements **AI-powered agile development** through:

- **9 Core Specialized Agents** covering the full SDLC
- **4 SDLC Phases** (Analysis, Planning, Solutioning, Implementation)
- **50+ Guided Workflows** with progressive disclosure
- **Scale-Adaptive Intelligence** (Levels 0-4 complexity)
- **3 Development Tracks** (Quick Flow, BMad Method, Enterprise)

**The Tagline:** "Build More, Architect Dreams" - BMAD automates project lifecycle management from ideation through deployment.

### Repository Statistics

```
Repository: github.com/bmad-code-org/BMAD-METHOD
Stars: 30.7k
Forks: 4.1k
Contributors: 103
Latest: v4.44.1 (September 2025)
License: MIT
```

### Core Philosophy

BMAD operates on several key principles:

1. **Facilitation Over Generation** - Agents guide rather than dictate
2. **Progressive Disclosure** - Workflows reveal steps sequentially to prevent shortcuts
3. **Role Specialization** - Each agent has distinct persona, expertise, and communication style
4. **Document-Driven Development** - Outputs become inputs for downstream phases
5. **Scale Adaptation** - Complexity adjusts to project scope

---

## Why It Matters

### Problem: AI Code Generation Without Structure

Most AI coding tools suffer from:
- **Context amnesia** - No persistent understanding across sessions
- **Role confusion** - Same AI doing everything poorly
- **Quality degradation** - Tests that "rot in review"
- **Process chaos** - No systematic handoffs between phases
- **Documentation debt** - Ad-hoc artifacts that don't connect

### Solution: Structured Multi-Agent SDLC

BMAD addresses these through:

| Problem | BMAD Solution |
|---------|---------------|
| Context amnesia | Workflow status files + project context documents |
| Role confusion | 9 specialized agents with distinct personas |
| Quality issues | TEA agent spans all phases for testing continuity |
| Process chaos | 4-phase structure with explicit handoffs |
| Documentation debt | Document-project workflow with sharding |

### Key Value Propositions

**For Individual Developers:**
- Quick Flow path: spec → dev → review in minutes
- Barry (Solo Dev agent) handles full-stack without role-switching

**For Teams:**
- Party Mode enables multi-agent collaboration
- Defined handoffs between agents prevent dropped context

**For Enterprises:**
- Compliance-ready with traceability workflows
- Scale-adaptive complexity levels
- Documentation standards enforcement

---

## Architecture Deep Dive

### The 9 Core Agents

BMAD implements a complete SDLC team through specialized AI personas:

#### Phase 1: Analysis

**Mary - Business Analyst**
```yaml
agent: analyst
name: Mary
icon: 📊
role: "Strategic Business Analyst + Requirements Expert"
style: "Excitement of a treasure hunter discovering patterns"

capabilities:
  - Market research and competitive analysis
  - Requirements elicitation
  - Stakeholder alignment
  - Business framework application (Porter's, SWOT, Root Cause)

commands:
  WS: workflow-status
  BP: brainstorm-project
  RS: research
  PB: product-brief
  DP: document-project
```

#### Phase 2: Planning

**John - Product Manager**
```yaml
agent: pm
name: John
icon: 📋
role: "Product Requirements + Stakeholder Alignment"
style: "Relentless questioning to uncover what truly matters"

capabilities:
  - PRD creation through user discovery
  - Jobs-to-be-Done framework
  - Iterative validation over perfection
  - Epic and story generation

commands:
  WS: workflow-status
  CP: create-prd
  VP: validate-prd
  EP: edit-prd
  ES: epics-stories
  IR: implementation-readiness
  CC: correct-course
```

**Sally - UX Designer**
```yaml
agent: ux-designer
name: Sally
icon: 🎨
role: "User Experience Designer + UI Specialist"
style: "Empathetic storytelling for user pain points"

capabilities:
  - User research and journey mapping
  - Wireframe and mockup design
  - Interaction design
  - AI-assisted design tools

commands:
  WS: workflow-status
  UX: ux-design
```

#### Phase 3: Solutioning

**Winston - Architect**
```yaml
agent: architect
name: Winston
icon: 🏗️
role: "System Architect + Technical Design Leader"
style: "Calm, pragmatic - boring technology for stability"

capabilities:
  - Distributed systems design
  - Cloud infrastructure patterns
  - API design and scalability
  - Architecture Decision Records

commands:
  WS: workflow-status
  CA: create-architecture
  IR: implementation-readiness
```

#### Phase 4: Implementation

**Bob - Scrum Master**
```yaml
agent: sm
name: Bob
icon: 🏃
role: "Technical Scrum Master + Story Preparation"
style: "Crisp and checklist-driven. Zero tolerance for ambiguity."

capabilities:
  - Sprint planning and sequencing
  - Story preparation for developers
  - Phase separation enforcement
  - Retrospective facilitation

commands:
  WS: workflow-status
  SP: sprint-planning
  CS: context-story
  ER: epic-retrospective
  CC: course-correction
```

**Amelia - Developer**
```yaml
agent: dev
name: Amelia
icon: 💻
role: "Senior Software Engineer"
style: "Ultra-succinct. Speaks in file paths and AC IDs."

capabilities:
  - Story implementation with TDD
  - Code review execution
  - Test verification (100% pass required)
  - Sequential task execution

commands:
  DS: dev-story
  CR: code-review

critical_actions:
  - All tests must pass 100% before story completion
  - Every task requires comprehensive unit tests
  - Execute tasks sequentially as written
  - Run full test suite after each task
```

#### Cross-Phase Agents

**Murat - Test Architect (TEA)**
```yaml
agent: tea
name: Murat
icon: 🧪
role: "Master Test Architect + Quality Advisor"
style: "Strong opinions, weakly held - data blended with intuition"

capabilities:
  - Risk-based testing strategy
  - Playwright/Cypress framework setup
  - CI/CD pipeline configuration
  - Quality gates and traceability

commands:
  WS: workflow-status
  TF: test-framework
  AT: automated-test-design
  TA: test-automation
  TD: test-design
  TR: trace-requirements
  NR: nfr-assessment
  CI: continuous-integration
  RV: review-tests

phases: [3, 4, "release-gate"]  # Spans multiple phases
```

**Paige - Technical Writer**
```yaml
agent: tech-writer
name: Paige
icon: 📝
role: "Technical Documentation Specialist"
style: "Patient educator using relatable analogies"

capabilities:
  - CommonMark, DITA, OpenAPI expertise
  - Visual documentation (diagrams)
  - Standards enforcement
  - Audience-adaptive complexity

commands:
  WS: workflow-status
  DP: document-project
  WD: write-document
  US: update-standards
  MG: mermaid-generate
  VD: validate-documentation
  EC: explain-concept
```

#### Quick Flow

**Barry - Quick Flow Solo Dev**
```yaml
agent: quick-flow-solo-dev
name: Barry
icon: 🚀
role: "Elite Full-Stack Developer + Quick Flow Specialist"
style: "Direct and implementation-focused. Specs are for building."

capabilities:
  - Rapid spec-to-code execution
  - Brownfield codebase analysis
  - Convention detection
  - End-to-end story implementation

commands:
  TS: tech-spec    # Create implementation-ready specs
  QD: quick-dev    # End-to-end development
  CR: code-review  # Quality assessment
```

### The 4 SDLC Phases

```
┌─────────────────────────────────────────────────────────────────┐
│                    BMAD METHOD PHASES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PHASE 1: ANALYSIS (Mary - Analyst)                            │
│  ├── brainstorm-project (60+ ideation techniques)              │
│  ├── research (market, domain, competitive, technical)         │
│  └── product-brief (concept definition)                        │
│                                                                 │
│  PHASE 2: PLANNING (John - PM, Sally - UX)                     │
│  ├── create-prd (requirements document)                        │
│  ├── ux-design (user journey, wireframes)                      │
│  └── validate-prd (comprehensiveness check)                    │
│                                                                 │
│  PHASE 3: SOLUTIONING (Winston - Architect)                    │
│  ├── create-architecture (technical design)                    │
│  ├── create-epics-and-stories (work breakdown)                 │
│  └── implementation-readiness (validation gate)                │
│                                                                 │
│  PHASE 4: IMPLEMENTATION (Bob - SM, Amelia - DEV, Murat - TEA)│
│  ├── sprint-planning (task sequencing)                         │
│  ├── create-story (developer-ready specs)                      │
│  ├── dev-story (TDD implementation)                            │
│  ├── code-review (quality check)                               │
│  └── retrospective (learning capture)                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Document Sharding Strategy

BMAD implements intelligent document organization across project lifecycle:

**Three Artifact Paths:**
```yaml
configuration:
  planning_artifacts:
    path: "{output_folder}/planning-artifacts"
    contents: "requirements, designs, architecture, epics"

  implementation_artifacts:
    path: "{output_folder}/implementation-artifacts"
    contents: "sprint status, stories, retrospectives"

  project_knowledge:
    path: "docs"
    contents: "documentation, research, reference materials"
```

**Document-Project Workflow Scanning:**
```yaml
scan_options:
  quick:
    description: "Config files and directory structure only"
    use_case: "Initial project overview"

  deep:
    description: "Critical directories based on project type"
    use_case: "Comprehensive brownfield documentation"

  exhaustive:
    description: "All source files (excluding node_modules, .git)"
    use_case: "Complete analysis and migration planning"

features:
  resumability: "Progress saved in project-scan-report.json"
  timeout: "24 hours to resume interrupted workflows"
```

**Project Context as Authority:**
```markdown
All agents reference `project-context.md` as the authoritative
planning document when available. This ensures:

1. Consistent understanding across all agents
2. Single source of truth for project state
3. Handoff continuity between phases
4. Context recovery after session loss
```

### Scale-Adaptive Complexity

BMAD automatically calibrates based on project scope:

```
Level 0: Trivial      → Quick Flow only
Level 1: Simple       → Quick Flow recommended
Level 2: Moderate     → BMad Method core workflows
Level 3: Complex      → Full BMad Method + all validations
Level 4: Enterprise   → Complete methodology + compliance
```

**Track Selection:**
| Track | Time | Stories | Use Case |
|-------|------|---------|----------|
| Quick Flow | ~5 min | 1-15 | Bug fixes, small features |
| BMad Method | ~15 min | 10-50+ | Products, platforms |
| Enterprise | ~30 min | 30+ | Compliance-heavy systems |

### Three Core Modules

**BMM (BMad Method):**
- Core agile development framework
- 34 workflows across 4 phases
- 9 specialized agents

**BMB (BMad Builder):**
- Custom agent creation
- Workflow authoring
- Module scaffolding

**CIS (Creative Intelligence Suite):**
- Innovation and problem-solving
- Advanced brainstorming techniques
- Creative ideation tools

---

## Key Features

### Party Mode: Multi-Agent Orchestration

Party Mode enables simultaneous collaboration among multiple agents:

```bash
# Activation
/bmad:core:workflows:party-mode

# Or shorthand from any agent
*party-mode

# With specific agents
*party-mode Mary Winston Amelia
```

**How It Works:**
1. Reads agent manifest configuration
2. Loads all available agents with customizations
3. Master orchestrator selects 2-3 relevant agents per message
4. Agents respond authentically (can agree, disagree, build)
5. Discussion continues until termination

**Use Cases:**
- Post-workflow debriefing
- Strategic decisions requiring multiple perspectives
- Cross-disciplinary brainstorming
- Failure analysis and accountability
- Sprint retrospectives

**Example Interaction:**
```
User: Let's discuss the architecture decision for real-time updates

[Winston - Architect]: From a systems perspective, WebSockets
provide the lowest latency but add infrastructure complexity...

[Amelia - DEV]: Implementation-wise, Socket.io gives us fallback
to polling and better reconnection handling. AC-2.3 requires...

[Murat - TEA]: Testing real-time is tricky. I'd recommend a
fixture-based approach with configurable delays...
```

### Brainstorming: 60+ Ideation Techniques

The brainstorming workflow provides structured creative facilitation:

**10 Technique Categories:**
- **Collaborative** - Team dynamics and group ideation
- **Creative** - Breakthrough thinking methods
- **Deep** - Root cause analysis approaches
- **Structured** - Organized frameworks
- **Theatrical** - Playful perspective shifts
- **Wild** - Boundary-pushing thinking
- **Biomimetic** - Nature-inspired solutions
- **Quantum** - Quantum principle applications
- **Cultural** - Traditional knowledge integration
- **Introspective** - Inner wisdom exploration

**Configuration:**
```yaml
brainstorming:
  topic_focus: "Domain or question specification"
  additional_personas: "Runtime expert injection"
  guardrails: "Ideation constraints"
  output_goals: "Desired accomplishment"
```

### Advanced Elicitation: 50+ Reasoning Methods

The inverse of brainstorming - applying techniques to enhance AI output:

**Process:**
1. **Context Analysis** - Evaluate content type, complexity, stakeholders
2. **Smart Method Selection** - Choose 5 methods from library
3. **Iterative Enhancement** - Accept/reject improvements, apply more methods

**11 Method Categories:**
```
Core:         First Principles, 5 Whys, Socratic Questioning
Collaboration: Stakeholder Round Table, Expert Panel, Debate Club
Advanced:     Tree of Thoughts, Graph of Thoughts, Self-Consistency
Competitive:  Red Team vs Blue Team, Shark Tank, Code Review Gauntlet
Technical:    Decision Records, Rubber Duck, Algorithm Olympics
Creative:     SCAMPER, Reverse Engineering, Random Input Stimulus
Research:     Literature Review Personas, Thesis Defense, Comparative Matrix
Risk:         Pre-mortem, Failure Mode Analysis, Chaos Monkey
Learning:     Feynman Technique, Active Recall Testing
Philosophical: Occam's Razor, Ethical Dilemmas
Retrospective: Hindsight Reflection, Lessons Learned
```

### TEA: Test Engineering Architecture

TEA (Test Architect) spans Phases 3-4 plus release gate:

**8 Core Workflows:**
```yaml
workflows:
  framework:    # Test harness scaffold
    outputs: "Playwright/Cypress setup, .env.example, sample specs"

  ci:           # Pipeline configuration
    outputs: "CI workflows, selective test scripts, secrets checklist"

  test-design:  # Risk assessment (system or per-epic)
    outputs: "Coverage strategy, mitigation plans"

  atdd:         # Acceptance test-driven development
    outputs: "Failing acceptance tests, implementation checklist"

  automate:     # Expanded coverage
    outputs: "Prioritized specs, fixture updates, DoD summary"

  test-review:  # Quality audit
    outputs: "0-100 quality score, violation reports"

  nfr-assess:   # Non-functional requirements
    outputs: "Security, performance, reliability assessment"

  trace:        # Traceability and gates
    outputs: "Coverage matrix, PASS/CONCERNS/FAIL/WAIVED decisions"
```

**5 Engagement Models:**
| Model | Description |
|-------|-------------|
| No TEA | Skip entirely, use existing testing |
| TEA Solo | Non-BMad projects with custom requirements |
| TEA Lite | Beginner approach, `*automate` only |
| Integrated Greenfield | New BMad Method projects |
| Integrated Brownfield/Enterprise | Existing codebases, compliance |

### Quick Flow: Rapid Development

For simple features and bug fixes:

```
┌─────────────────────────────────────────┐
│         QUICK FLOW PIPELINE             │
├─────────────────────────────────────────┤
│                                         │
│  1. TECH-SPEC (Barry)                   │
│     ├── Detect project stack            │
│     ├── Analyze codebase patterns       │
│     ├── Identify test frameworks        │
│     └── Confirm conventions             │
│                                         │
│  2. QUICK-DEV (Barry)                   │
│     ├── Auto-generate stories           │
│     ├── Implement with TDD              │
│     └── Verify against specs            │
│                                         │
│  3. CODE-REVIEW (Optional)              │
│     └── Multi-faceted quality check     │
│                                         │
└─────────────────────────────────────────┘
```

**Auto-Detection:**
- Technology stack (Node, Python, Ruby, Java, Go, Rust)
- Brownfield patterns and organization
- Naming conventions and code style
- Testing frameworks and patterns

---

## Installation & Setup

### Prerequisites

- Node.js v20+
- One of: Claude Code, Cursor, Windsurf, or Roo Code

### Quick Install

```bash
# Navigate to your project directory
cd your-project

# Install BMAD
npx bmad-method@alpha install

# This creates _bmad/ folder with:
# - agents/
# - workflows/
# - configuration files
```

### Initial Configuration

```bash
# Load Analyst agent and initialize
*workflow-init

# System prompts for:
# 1. Project concept description
# 2. New vs existing project
# 3. Complexity assessment
```

**Module Configuration (module.yaml):**
```yaml
code: bmm
name: "BMad Method Agile-AI Driven-Development"
default: true

config:
  project_name:
    prompt: "What is your project called?"
    default: "{directory_name}"

  user_skill_level:
    prompt: "Development experience level"
    default: intermediate
    options:
      - beginner   # detailed explanations
      - intermediate  # balanced approach
      - expert     # technical directness

  planning_artifacts:
    path: "{output_folder}/planning-artifacts"

  implementation_artifacts:
    path: "{output_folder}/implementation-artifacts"

  project_knowledge:
    path: "docs"
```

### Core Module Settings

```yaml
# From src/core/module.yaml
core:
  user_name:
    default: "BMad"

  communication_language:
    default: "English"

  document_language:
    default: "English"

  output_folder:
    default: "_bmad-output"
```

---

## Configuration Options

### Agent Configuration

**Simple Agent (Single File):**
```yaml
# example.agent.yaml
id: _bmad/bmm/agents/example.md
name: ExampleAgent
title: "Example Specialist"
icon: 🔧
module: bmm
sidecar: false  # No companion folder

persona:
  role: "Description of expertise"
  style: "Communication approach"

principles:
  - "First guiding principle"
  - "Second guiding principle"

menu:
  - trigger: "CMD"
    workflow: "workflow-name"
    description: "What it does"
```

**Expert Agent (With Sidecar):**
```yaml
# expert.agent.yaml
id: _bmad/bmm/agents/expert.md
name: ExpertAgent
sidecar: true  # Has companion folder

# Companion folder contains:
# - additional instructions
# - specialized workflows
# - memory files for context persistence
```

### Workflow Configuration

```yaml
# workflow structure
workflow:
  name: "workflow-name"
  phases:
    - step: 1
      file: "step-1.md"
      description: "First phase"
    - step: 2
      file: "step-2.md"
      description: "Second phase"

  features:
    multi_session: true  # Track progress in metadata
    resumable: true      # Can pause and continue
```

### Team Configuration

```yaml
# team-fullstack.yaml
name: "Team Plan and Architect"
bundle: "BMAD-CORE™"
description: "Team capable of project analysis, design, and architecture"
icon: 🚀

agents:
  - analyst
  - architect
  - pm
  - sm
  - ux-designer

party_config: "./default-party.csv"
```

---

## SDLC Workflow Patterns

### Full BMad Method Flow

```bash
# PHASE 1: ANALYSIS (Optional but recommended)
# Load: Mary (Analyst)
*brainstorm-project          # 60+ ideation techniques
*research domain:fintech     # Market/domain research
*product-brief               # Concept definition

# PHASE 2: PLANNING (Required)
# Load: John (PM)
*prd                         # Create requirements document
# Load: Sally (UX)
*ux-design                   # User journey, wireframes

# PHASE 3: SOLUTIONING (Recommended)
# Load: Winston (Architect)
*create-architecture         # Technical design, ADRs
# Load: John (PM)
*epics-stories               # Work breakdown
*implementation-readiness    # Validation gate

# PHASE 4: IMPLEMENTATION (Required)
# Load: Bob (SM)
*sprint-planning             # Task sequencing

# Per story:
*create-story                # Developer-ready spec
# Load: Amelia (DEV)
*dev-story                   # TDD implementation
# Load: Murat (TEA) - optional
*automate                    # Test coverage
# Load: Amelia (DEV)
*code-review                 # Quality check

# Per epic:
# Load: Bob (SM)
*retrospective               # Learning capture
```

### Quick Flow Pattern

```bash
# Load: Barry (Quick Flow Solo Dev)
*tech-spec                   # Analyze and spec
*quick-dev                   # Implement
*code-review                 # Optional review
```

### Brownfield Integration Pattern

```bash
# Step 1: Document existing codebase
# Load: Mary (Analyst) or Paige (Tech Writer)
*document-project scan:deep

# Step 2: Generate project context
# Creates project-context.md for all agents

# Step 3: Use Quick Flow for changes
# Load: Barry
*tech-spec                   # Detects existing patterns
*quick-dev                   # Follows conventions
```

---

## Integration Patterns

### With Ralph

BMAD's structured phases integrate naturally with Ralph's continuous iteration:

**BMAD + Ralph for SDLC:**
```bash
# Ralph loop for Phase 4 implementation
while :; do
  cat STORY-PROMPT.md | claude-code
done

# Where STORY-PROMPT.md contains:
# 1. Load DEV agent (Amelia)
# 2. Read current story from implementation-artifacts/
# 3. Execute dev-story workflow
# 4. Run tests
# 5. Update story status
```

**Phase-Specific Ralph Loops:**
```bash
# Analysis Ralph (Phase 1)
PROMPT="Load Analyst. Run research for: {topic}"
while :; do echo "$PROMPT" | claude-code; done

# Architecture Ralph (Phase 3)
PROMPT="Load Architect. Review and refine architecture.md"
while :; do echo "$PROMPT" | claude-code; done

# Implementation Ralph (Phase 4)
PROMPT="Load DEV. Continue dev-story from last checkpoint"
while :; do echo "$PROMPT" | claude-code; done
```

**Configuration Example:**
```yaml
# bmad-ralph-config.yaml
ralph_integration:
  phase: 4  # Implementation
  agent: dev
  workflow: dev-story

  prompt_template: |
    Load DEV agent.
    Read story from: {story_path}
    Continue from last checkpoint.
    Run full test suite after each task.

  success_condition: "All tasks complete, tests passing"
  max_iterations: 50
```

### With Gas Town

BMAD agents can be organized as a Gas Town hierarchy:

**BMAD Agents as Gas Town Roles:**
```
┌─────────────────────────────────────────────────────────────┐
│                    GAS TOWN + BMAD                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MAYOR (PM - John)                                         │
│  └── Strategic direction, requirement priorities            │
│                                                             │
│  DEACON (Architect - Winston)                              │
│  └── Technical standards, architecture decisions            │
│                                                             │
│  DOGS (Specialist Agents)                                  │
│  ├── Mary (Analyst) → Research dog                         │
│  ├── Sally (UX) → Design dog                               │
│  ├── Murat (TEA) → Quality dog                             │
│  ├── Paige (Tech Writer) → Documentation dog               │
│  └── Barry (Quick Flow) → Implementation dog               │
│                                                             │
│  REFINERY (SM - Bob + DEV - Amelia)                        │
│  └── Sprint execution, story implementation                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Document Sharding in Factory:**
```yaml
# gas-town-bmad-factory.yaml
factory:
  input_hopper:
    - planning_artifacts/     # From Phase 1-3
    - project-context.md      # Authority document

  processing:
    mayor:
      agent: pm
      input: "requirements, stakeholder feedback"
      output: "prioritized backlog"

    deacon:
      agent: architect
      input: "backlog, technical constraints"
      output: "architecture decisions, ADRs"

    dogs:
      - agent: analyst
        trigger: "research needed"
      - agent: ux-designer
        trigger: "design review"
      - agent: tea
        trigger: "quality gate"

    refinery:
      sm_agent: sm
      dev_agent: dev
      input: "approved stories"
      output: "implemented features"

  output_conveyor:
    - implementation_artifacts/
    - project_knowledge/docs/
```

**Configuration Example:**
```yaml
# bmad-gas-town-config.yaml
gas_town_integration:
  mayor:
    bmad_agent: pm
    responsibilities:
      - backlog_prioritization
      - stakeholder_alignment
      - release_planning

  deacon:
    bmad_agent: architect
    responsibilities:
      - technical_standards
      - architecture_review
      - integration_decisions

  dogs:
    research:
      bmad_agent: analyst
      trigger_conditions:
        - "unknown domain"
        - "competitive analysis needed"
    quality:
      bmad_agent: tea
      trigger_conditions:
        - "test coverage below threshold"
        - "release gate"

  refinery:
    orchestrator: sm
    workers: [dev, dev, dev]  # Multiple dev instances
    batch_size: 3  # Stories per sprint
```

### With Marathon Ralph

BMAD planning phases feed into Marathon execution:

**BMAD Planning + Marathon Execution:**
```
┌─────────────────────────────────────────────────────────────┐
│            BMAD + MARATHON RALPH PIPELINE                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  BMAD PHASES 1-3 (Planning)                                │
│  ├── Analysis: brainstorm, research, product-brief         │
│  ├── Planning: PRD, UX design                              │
│  └── Solutioning: architecture, epics-stories              │
│                                                             │
│         ↓ Output: implementation-ready stories              │
│                                                             │
│  MARATHON RALPH (Phase 4 Execution)                        │
│  ├── Load: stories from planning-artifacts/                │
│  ├── Loop: dev-story → test → review                       │
│  ├── Checkpoint: sprint status after each story            │
│  └── Gate: retrospective after each epic                   │
│                                                             │
│         ↓ Output: shipped features                          │
│                                                             │
│  TEA RELEASE GATE                                          │
│  ├── trace workflow: coverage matrix                       │
│  ├── nfr-assess: security, performance                     │
│  └── Decision: PASS/CONCERNS/FAIL/WAIVED                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Full SDLC Pipeline Configuration:**
```yaml
# bmad-marathon-pipeline.yaml
pipeline:
  planning_phase:
    runner: "bmad-agents"
    steps:
      - agent: analyst
        workflow: brainstorm-project
      - agent: analyst
        workflow: research
      - agent: pm
        workflow: create-prd
      - agent: architect
        workflow: create-architecture
      - agent: pm
        workflow: epics-stories
      - agent: pm
        workflow: implementation-readiness
        gate: true  # Must pass to continue

  execution_phase:
    runner: "marathon-ralph"
    input: "planning-artifacts/stories/"

    marathon_config:
      prompt: |
        Load SM agent.
        Get next story from backlog.
        Load DEV agent.
        Run dev-story workflow.
        Verify all tests pass.
        Mark story complete.

      success_criteria:
        - "Story status: DONE"
        - "Test coverage >= 80%"
        - "Code review: APPROVED"

      checkpoint_interval: 1  # After each story
      epic_retrospective: true

  release_gate:
    runner: "bmad-tea"
    steps:
      - workflow: trace
        required: true
      - workflow: nfr-assess
        required: false
    decision: "PASS/FAIL"
```

### Combination Matrix

| BMAD + | Use Case | Complexity | Value | Setup Time |
|--------|----------|------------|-------|------------|
| **Ralph** | Continuous story implementation | Medium | High | 15 min |
| **Gas Town** | Enterprise factory with roles | High | Very High | 2-4 hours |
| **Marathon** | Full SDLC pipeline automation | High | Very High | 1-2 hours |
| **Ralph + Marathon** | Phase 4 autonomous execution | Medium-High | High | 30 min |
| **Gas Town + Marathon** | Factory-scale autonomous | Very High | Maximum | 4-8 hours |

### Integration Decision Guide

```
When to use BMAD + Ralph:
├── Single developer workflow
├── Iterating on specific phase
├── Story-by-story implementation
└── Quick feedback loops

When to use BMAD + Gas Town:
├── Team of AI agents
├── Enterprise compliance requirements
├── Complex multi-domain projects
└── Persistent agent specialization

When to use BMAD + Marathon:
├── Full project automation
├── Multi-day execution
├── Checkpoint-driven development
└── Release pipeline integration
```

---

## Mental Models

### Model 1: The Assembly Line

Think of BMAD as a software factory assembly line:

```
RAW MATERIALS (Ideas)
    ↓
PHASE 1: ANALYSIS (Quality Control on Input)
- Mary checks viability
- Research validates market
    ↓
PHASE 2: PLANNING (Design Department)
- John creates blueprints (PRD)
- Sally designs experience
    ↓
PHASE 3: SOLUTIONING (Engineering)
- Winston architects structure
- Stories become work orders
    ↓
PHASE 4: IMPLEMENTATION (Assembly)
- Bob sequences the line
- Amelia builds components
- Murat tests quality
    ↓
FINISHED PRODUCT (Shipped Software)
```

**Key Insight:** Each station has specialists. You wouldn't ask the welder to design the car.

### Model 2: The Restaurant Kitchen

BMAD agents are like kitchen staff:

```
FRONT OF HOUSE → BACK OF HOUSE

Mary (Analyst) = Host
"What brings you here? What are you looking for?"

John (PM) = Server
"Let me take your order and make sure we get it right"

Sally (UX) = Menu Designer
"How should this be presented? What's the experience?"

Winston (Architect) = Head Chef
"Here's how we'll prepare this dish technically"

Bob (SM) = Expeditor
"Order up! Story 3 ready for implementation"

Amelia (DEV) = Line Cook
"Executing the prep list exactly as specified"

Murat (TEA) = Health Inspector
"Is this safe? Does it meet standards?"

Barry (Quick Flow) = Short Order Cook
"Quick! Burger, no complications, out in 5"
```

**Key Insight:** Party Mode is the kitchen huddle where everyone coordinates.

### Model 3: Document as DNA

Project documents carry the "genetic code" through phases:

```
project-context.md (Master Gene)
    ↓
product-brief.md (Trait Expression)
    ↓
prd.md (Protein Synthesis)
    ↓
architecture.md (Organism Structure)
    ↓
epics/ (Organ Systems)
    ↓
stories/ (Individual Cells)
    ↓
code (Living System)
```

**Key Insight:** Each document inherits from and references parents. Mutations (changes) must propagate.

### Model 4: Scale-Adaptive Zoom

BMAD's complexity levels work like camera zoom:

```
Level 0-1 (Wide shot)
Quick Flow only. See the whole picture, act fast.
"Fix this bug" → Tech spec → Implement → Done

Level 2-3 (Medium shot)
Full method, core workflows. See details, plan thoughtfully.
"Build this feature" → Analysis → Plan → Architect → Build

Level 4 (Close-up)
Enterprise with compliance. See everything, document thoroughly.
"Build this system" → Full SDLC + Traceability + Audits
```

**Key Insight:** Match zoom level to project scope. Don't use a microscope to find your car.

---

## Checkpoints

### Installation Verification

```bash
# After running npx bmad-method@alpha install
ls _bmad/

# You should see:
# agents/
# workflows/
# module.yaml
# (other configuration files)
```

**Checkpoint 1: Successful Install**
- [ ] `_bmad/` folder exists
- [ ] `agents/` contains .agent.yaml files
- [ ] `workflows/` contains subdirectories
- [ ] `module.yaml` is present

### Agent Loading Verification

```bash
# In Claude Code or compatible IDE
# Load an agent and check menu

# Type: Load the Analyst agent
# Then: Show menu

# You should see:
# [WS] Workflow Status
# [BP] Brainstorm Project
# [RS] Research
# [PB] Product Brief
# [DP] Document Project
```

**Checkpoint 2: Agent Functional**
- [ ] Agent loads without errors
- [ ] Menu displays all commands
- [ ] Command triggers work

### Workflow Execution Verification

```bash
# After running *workflow-init

# Check for workflow status file
ls _bmad-output/

# You should see:
# bmm-workflow-status.yaml
```

**Checkpoint 3: Workflow Initialized**
- [ ] Status file created
- [ ] Track recommendation provided
- [ ] Can proceed to Phase 1 workflows

### Phase Completion Verification

```yaml
# Check bmm-workflow-status.yaml after each phase

# Phase 1 complete:
phase_1:
  status: complete
  artifacts:
    - product-brief.md
    - research-summary.md

# Phase 2 complete:
phase_2:
  status: complete
  artifacts:
    - prd.md
    - ux-design.md

# Phase 3 complete:
phase_3:
  status: complete
  artifacts:
    - architecture.md
    - epics/
    - implementation-readiness: PASS
```

**Checkpoint 4: Phase Complete**
- [ ] Status file shows phase complete
- [ ] Expected artifacts exist
- [ ] No validation errors

### Implementation Verification

```bash
# After completing a story

# Check story file
cat implementation-artifacts/stories/story-001.md

# Should show:
# status: DONE
# all tasks: [x] marked complete
# tests: PASSING
```

**Checkpoint 5: Story Complete**
- [ ] Story status is DONE
- [ ] All acceptance criteria met
- [ ] Tests passing (TEA verification)
- [ ] Code review approved

---

## Troubleshooting

### Installation Issues

**Problem: npx command not found**
```bash
# Ensure Node.js v20+ installed
node --version
# Should show v20.x.x or higher

# If not, install Node.js:
# https://nodejs.org/
```

**Problem: Permission denied during install**
```bash
# Try with sudo (Unix)
sudo npx bmad-method@alpha install

# Or fix npm permissions:
# https://docs.npmjs.com/resolving-eacces-permissions-errors
```

**Problem: _bmad folder empty or incomplete**
```bash
# Remove and reinstall
rm -rf _bmad
npx bmad-method@alpha install
```

### Agent Issues

**Problem: Agent not loading**
```
Possible causes:
1. Wrong agent name - check exact spelling
2. Module not installed - verify bmm module present
3. YAML syntax error - validate agent configuration

Fix:
# Verify agent file exists
ls _bmad/agents/

# Check for syntax errors
# Use YAML validator on agent file
```

**Problem: Menu command not working**
```
Possible causes:
1. Typo in trigger command
2. Workflow file missing
3. Agent not fully loaded

Fix:
# Use fuzzy matching - triggers are flexible
# "BP" "brainstorm" "brainstorm-project" all work

# Verify workflow exists
ls _bmad/workflows/
```

**Problem: Agent persona seems wrong**
```
Possible causes:
1. Wrong agent loaded
2. Context pollution from previous agent
3. Configuration override

Fix:
# Start fresh context
# Explicitly load desired agent
# Check for .bmad-config overrides
```

### Workflow Issues

**Problem: Workflow stuck or not progressing**
```
Possible causes:
1. Missing required input
2. Validation gate failed
3. Session context lost

Fix:
# Check workflow status file
cat _bmad-output/bmm-workflow-status.yaml

# Resume from checkpoint
*workflow-status

# Provide missing inputs if requested
```

**Problem: Documents not being created**
```
Possible causes:
1. Output path misconfigured
2. Permission issues
3. Workflow incomplete

Fix:
# Check output path in module.yaml
# Verify write permissions on output folder
# Run workflow to completion
```

**Problem: Implementation readiness failing**
```
The implementation-readiness workflow validates:
- PRD exists and complete
- Architecture documented
- Epics and stories created
- All cross-references valid

Fix:
# Check which validation failed
# Return to appropriate agent
# Complete missing artifacts
# Re-run validation
```

### Integration Issues

**Problem: Ralph loop not processing BMAD stories**
```
Possible causes:
1. Story path incorrect in prompt
2. Story format incompatible
3. Agent not loading in loop

Fix:
# Verify story path exists
ls implementation-artifacts/stories/

# Check story format matches DEV expectations
# Include explicit agent loading in prompt
```

**Problem: Party Mode not including all agents**
```
Possible causes:
1. Agents not installed
2. Module mismatch
3. Manifest not updated

Fix:
# Check agent manifest
cat _bmad/agent-manifest.yaml

# Reinstall modules if missing
# Explicitly name agents in party-mode call
```

**Problem: TEA traceability incomplete**
```
Possible causes:
1. Requirements not tagged
2. Tests not linked to ACs
3. Coverage gaps

Fix:
# Use TEA trace workflow
*trace

# Follow prompts to link tests to requirements
# Generate coverage matrix
# Address gaps before release gate
```

---

## Source Attribution

### Primary Source

**Repository:** github.com/bmad-code-org/BMAD-METHOD
**Documentation:** docs.bmad-method.org
**License:** MIT (Open Source)

### Research Method

This extraction was compiled through:
1. GitHub repository analysis (structure, files, configurations)
2. Raw documentation files (README, docs/, agent configs)
3. Source code inspection (src/bmm/, src/core/)
4. Official documentation site

### Reliability Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation Quality | A | Comprehensive, well-structured |
| Code Examples | B+ | YAML configs throughout, some gaps in advanced usage |
| Community Activity | A | 30.7k stars, 103 contributors |
| Maintenance | A | v4.44.1 (Sept 2025), active development |
| Integration Patterns | B | Some derived, not all documented |

### Version Information

- **BMAD Version Analyzed:** v4.44.1
- **Extraction Date:** January 2026
- **Documentation URL:** https://docs.bmad-method.org
- **GitHub URL:** https://github.com/bmad-code-org/BMAD-METHOD

### Related Extractions

- `005-ralph-wiggum-loop-pocock.md` - Ralph pattern details
- `010-gas-town-agent-factory.md` - Gas Town architecture
- `research-ralph-expanded.md` - Marathon Ralph patterns
- `mastery-ralph-complete.md` - Complete Ralph synthesis

---

## Summary

BMAD-METHOD provides a comprehensive, production-ready framework for AI-driven software development through:

**Core Strengths:**
1. **Role Clarity** - 9 specialized agents with distinct personas
2. **Phase Structure** - 4 SDLC phases with explicit handoffs
3. **Scale Adaptation** - Quick Flow to Enterprise tracks
4. **Document Authority** - project-context.md as single source of truth
5. **Quality Integration** - TEA spans all phases for testing continuity

**Key Differentiators:**
- Party Mode for multi-agent collaboration
- 60+ brainstorming and 50+ elicitation techniques
- Workflow progressive disclosure prevents shortcuts
- Resumable workflows with checkpoint persistence

**Integration Value:**
- Combines naturally with Ralph for continuous iteration
- Maps to Gas Town hierarchy for enterprise scale
- Feeds Marathon Ralph for autonomous execution

**When to Use:**
- Multi-phase software projects
- Team-based AI development
- Compliance-heavy environments
- Projects needing structure beyond ad-hoc prompting

BMAD transforms Claude Code from an AI coding assistant into a full SDLC methodology with role specialization, phase gates, and document-driven handoffs.
