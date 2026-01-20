# Enterprise Agent Taxonomy: Complete Framework Guide

**Ver**sion: 1.0
**Com**piled: 2026-01-19
**Sour**ces: 3 extraction documents synthesized (99-agents, BMAD, Claude-007)
**Sta**tus: Definitive reference for agent selection and configuration

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [99-Agents Domain Catalog](#99-agents-domain-catalog)
3. [BMAD 9 Agents Deep Dive](#bmad-9-agents-deep-dive)
4. [Claude-007 Agent Patterns](#claude-007-agent-patterns)
5. [Agent Specialization Principles](#agent-specialization-principles)
6. [Domain Catalog vs Methodology Agents](#domain-catalog-vs-methodology-agents)
7. [Combining 99-agents Library with BMAD Execution](#combining-99-agents-library-with-bmad-execution)
8. [Integration Patterns](#integration-patterns)
9. [Mental Models](#mental-models)
10. [Checkpoints](#checkpoints)
11. [Troubleshooting](#troubleshooting)
12. [Source Attribution](#source-attribution)

---

## You Are Here

```
Claude Code Ecosystem
|
+-- Core Claude Code (Anthropic)
|   +-- Plugin System
|   +-- Agent Definitions (.claude/agents/)
|   +-- MCP Integrations
|
+-- Orchestration Patterns
|   +-- Ralph Wiggum Loop (continuous iteration)
|   +-- Gas Town (agent factory architecture)
|   +-- CC-Mirror (multi-model coordination)
|   +-- BMAD (SDLC methodology)
|
+-- AGENT ECOSYSTEMS  <-- YOU ARE HERE
|   +-- 99-Agents (wshobson/agents)
|   |   +-- 108 domain specialists
|   |   +-- 72 plugins
|   |   +-- 129 skills
|   |
|   +-- BMAD-METHOD (bmad-code-org)
|   |   +-- 9 SDLC personas
|   |   +-- 4-phase methodology
|   |   +-- 50+ workflows
|   |
|   +-- Claude-007 (avivl)
|       +-- 117+ pre-built agents
|       +-- Bootstrap system
|       +-- Task Master integration
|
+-- Integration Layer
    +-- Combining ecosystems for maximum leverage
```

**What you need to **un**derstand first:**
- **Cla**ude Code supports custom agent definitions in `.claude/agents/`
- **Age**nts are specialized system prompts that give Claude domain expertise
- **Thr**ee major agent ecosystems exist: 99-Agents (domain catalog), BMAD (methodology), Claude-007 (pre-built library)
- **Und**erstanding when to use each enables optimal AI-assisted development

**Why this mat**ters for your workflow:**
You don't need to write agents from scratch. These ecosystems provide **329+ battle-tested agents** ready for integration. The question is: which ecosystem for which situation? This guide provides the taxonomy and decision framework.

**Pre**requisites:**
- Basic Claude Code usage (Level 0-1 on complexity ladder)
- Familiarity with CLAUDE.md and slash commands
- Understanding of agent definition format

**What you'll **le**arn:**
- Complete catalog of available agents across ecosystems
- When to use domain specialists vs methodology agents
- Integration patterns combining ecosystems
- Decision trees for agent selection

---

## 99-Agents Domain Catalog

The **wsh**obson/agents repository represents the most comprehensive domain-specialized plugin collection for Claude Code.

### Overview Statistics

| **Com**ponent | **Cou**nt | **Pur**pose |
|---------------|-----------|-------------|
| **Plu**gins | 72 | Self-contained capability packages |
| **Age**nts | 108 | Specialized domain experts |
| **Ski**lls | 129 | Modular knowledge packages |
| **Too**ls/Commands | 72 | Scaffolding, testing, deployment workflows |
| **Orc**hestrators | 15 | Multi-agent coordination systems |

### Core Philosophy

The 99-agents ecosystem operates on three tenets:

1. **Sin**gle Responsibility** - "Each plugin does one thing well" (Unix philosophy)
2. **Com**posability** - Mix-and-match focused plugins rather than bundled features
3. **Con**text Efficiency** - Smaller tools fit better in LLM context windows

### Model Assignment Strategy

Agents are strategically assigned to Claude models based on task complexity:

| **Mod**el Tier | **Age**nt Count | **Pri**mary Use Cases |
|----------------|-----------------|----------------------|
| **Opu**s 4.5 | 42 agents | Critical architecture, security, code review, production coding |
| **Son**net 4.5 | 39 agents | Complex reasoning, technology decisions, design reviews |
| **Hai**ku 4.5 | 18 agents | Fast execution, deterministic tasks, support operations |
| **Inh**erit | 42 agents | User-selected model preference for flexibility |

**Sel**ection Criteria:**
- **Hai**ku -> Generating code from well-defined specifications, operational tasks
- **Son**net -> Design system architecture, architectural pattern reviews
- **Opu**s -> Critical architecture decisions requiring maximum reasoning capability

---

### Complete Agent Catalog by Domain

#### Architecture and Design (10 Agents)

| **Age**nt | **Mod**el | **Spe**cialty |
|-----------|-----------|---------------|
| `backend-architect` | inherit | Scalable API design, microservices, distributed systems |
| `cloud-architect` | opus | Multi-cloud strategy, infrastructure patterns |
| `event-sourcing-architect` | sonnet | Event-driven architecture, CQRS patterns |
| `graphql-architect` | sonnet | GraphQL schema design, federation |
| `frontend-architect` | inherit | React/Vue architecture, state management |
| `mobile-architect` | inherit | iOS/Android architecture, cross-platform |
| `database-architect` | opus | Schema design, optimization, migration |
| `microservices-architect` | opus | Service boundaries, communication patterns |
| `api-architect` | sonnet | REST, gRPC, WebSocket API design |
| `c4-architecture-analyst` | sonnet | C4 model documentation, system context |

**Copy-paste configuration:**
```yaml
# .claude-plugin/config.yaml
model_overrides:
  backend-architect: opus
  event-sourcing-architect: sonnet
  frontend-architect: inherit
```

---

#### Programming Languages (25 Agents)

**Sys**tems Programming:**

| **Age**nt | **Lan**guage | **Spe**cialty |
|-----------|--------------|---------------|
| `c-developer` | C | Low-level systems, embedded |
| `cpp-developer` | C++ | Performance-critical applications |
| `rust-developer` | Rust | Memory-safe systems programming |
| `go-developer` | Go | Cloud-native services, concurrency |

**Web Development:**

| **Age**nt | **Lan**guage | **Spe**cialty |
|-----------|--------------|---------------|
| `javascript-developer` | JavaScript | Full-stack JS, Node.js |
| `typescript-developer` | TypeScript | Type-safe web development |
| `python-developer` | Python | Django, FastAPI, data science |
| `ruby-developer` | Ruby | Rails, Sinatra, web backends |
| `php-developer` | PHP | Laravel, WordPress, web apps |

**Ent**erprise:**

| **Age**nt | **Lan**guage | **Spe**cialty |
|-----------|--------------|---------------|
| `java-developer` | Java | Spring, enterprise systems |
| `scala-developer` | Scala | Functional programming, Spark |
| `csharp-developer` | C# | .NET, Unity, enterprise |
| `kotlin-developer` | Kotlin | Android, server-side |

**Spe**cialized:**

| **Age**nt | **Fra**mework | **Spe**cialty |
|-----------|---------------|---------------|
| `elixir-developer` | Phoenix | Distributed systems, real-time |
| `django-specialist` | Django | Python web framework |
| `fastapi-specialist` | FastAPI | High-performance Python APIs |
| `haskell-developer` | Haskell | Pure functional programming |
| `unity-developer` | Unity | Game development, C# |
| `react-developer` | React | Component architecture, hooks |
| `vue-developer` | Vue.js | Vue ecosystem, composition API |
| `nextjs-developer` | Next.js | Full-stack React framework |
| `svelte-developer` | Svelte | Reactive UI framework |
| `angular-developer` | Angular | Enterprise frontend |
| `flutter-developer` | Flutter | Cross-platform mobile |

---

#### Infrastructure and Operations (11 Agents)

| **Age**nt | **Dom**ain | **Cap**abilities |
|-----------|------------|------------------|
| `devops-engineer` | CI/CD | Pipeline configuration, automation |
| `kubernetes-specialist` | K8s | Manifests, Helm, GitOps |
| `database-architect` | Databases | PostgreSQL, MySQL, MongoDB |
| `incident-responder` | SRE | Production incidents, post-mortems |
| `network-engineer` | Networking | VPC, DNS, load balancing |
| `cloud-security-engineer` | Cloud Sec | AWS/Azure/GCP security |
| `terraform-specialist` | IaC | Infrastructure as Code |
| `observability-engineer` | Monitoring | Prometheus, Grafana, tracing |
| `sre-engineer` | Reliability | SLOs, error budgets, toil |
| `deployment-engineer` | Releases | Blue-green, canary, rollback |
| `platform-engineer` | Platform | Internal developer platform |

**Copy-paste orchestration:**
```yaml
# Full-Stack Feature Development Sequence
workflow:
  - backend-architect      # Design
  - database-architect     # Schema
  - backend-developer      # Implementation
  - frontend-architect     # UI design
  - frontend-developer     # Components
  - test-automator         # Test suites
  - security-auditor       # Security review
  - devops-engineer        # Deployment
  - observability-engineer # Monitoring
```

---

#### Quality and Security (11 Agents)

| **Age**nt | **Foc**us | **Too**ling |
|-----------|-----------|-------------|
| `code-reviewer` | Code quality | Linting, standards |
| `security-auditor` | Security | OWASP, SAST, DAST |
| `threat-modeling-expert` | Threats | STRIDE, attack trees |
| `test-automator` | Testing | Unit, integration, E2E |
| `tdd-orchestrator` | TDD | Red-green-refactor discipline |
| `penetration-tester` | Pen testing | Vulnerability exploitation |
| `compliance-auditor` | Compliance | SOC2, HIPAA, GDPR |
| `performance-analyst` | Performance | Load testing, profiling |
| `accessibility-specialist` | A11y | WCAG compliance |
| `comprehensive-reviewer` | Multi-facet | Combined quality review |
| `security-engineer` | Remediation | Fix implementation |

**Sec**urity Hardening Sequence:**
```
security-auditor (assessment)
    |
    v
threat-modeling-expert (threat analysis)
    |
    v
penetration-tester (vulnerability scan)
    |
    v
security-engineer (remediation)
    |
    v
compliance-auditor (verification)
```

---

#### Data and AI (10 Agents)

| **Age**nt | **Dom**ain | **Spe**cialty |
|-----------|------------|---------------|
| `data-engineer` | Data | ETL, pipelines, Spark |
| `ml-engineer` | ML | Model training, deployment |
| `ai-engineer` | AI | LLM applications, agents |
| `prompt-engineer` | Prompts | Prompt optimization |
| `vector-database-engineer` | Vectors | Embeddings, similarity search |
| `data-analyst` | Analysis | SQL, visualization |
| `data-scientist` | Science | Statistics, experimentation |
| `mlops-engineer` | MLOps | Model lifecycle, monitoring |
| `rag-specialist` | RAG | Retrieval augmented generation |
| `llm-integration-engineer` | LLM | API integration, fine-tuning |

**ML Pip**eline Orchestration:**
```
data-engineer (pipeline setup)
    |
    v
ml-engineer (model training)
    |
    v
mlops-engineer (deployment)
    |
    v
performance-analyst (optimization)
```

---

#### Documentation (10 Agents)

| **Age**nt | **Out**put | **For**mat |
|-----------|------------|------------|
| `technical-writer` | Technical docs | Markdown, RST |
| `api-documenter` | API docs | OpenAPI, Swagger |
| `c4-architecture-analyst` | Architecture | C4 diagrams |
| `readme-generator` | READMEs | Project documentation |
| `changelog-generator` | Changelogs | Keep-a-changelog |
| `tutorial-writer` | Tutorials | Step-by-step guides |
| `runbook-author` | Runbooks | Operational guides |
| `architecture-decision-recorder` | ADRs | Decision records |
| `comment-documenter` | Code comments | JSDoc, docstrings |
| `diagram-generator` | Diagrams | Mermaid, PlantUML |

---

#### Business and Operations (9 Agents)

| **Age**nt | **Dom**ain | **Out**put |
|-----------|------------|------------|
| `business-analyst` | Requirements | BRDs, user stories |
| `quantitative-analyst` | Finance | Financial models |
| `marketing-specialist` | Marketing | Content, campaigns |
| `legal-advisor` | Legal | Compliance, contracts |
| `product-manager` | Product | Roadmaps, priorities |
| `project-manager` | Projects | Timelines, resources |
| `stakeholder-analyst` | Stakeholders | Communication plans |
| `market-researcher` | Research | Competitive analysis |
| `pricing-analyst` | Pricing | Pricing strategies |

---

#### SEO and Content (10 Agents)

| **Age**nt | **Foc**us | **Out**put |
|-----------|-----------|------------|
| `seo-analyst` | SEO | Site audits, optimization |
| `content-strategist` | Content | Editorial calendars |
| `keyword-researcher` | Keywords | Keyword analysis |
| `link-builder` | Links | Backlink strategies |
| `technical-seo` | Technical | Core web vitals |
| `local-seo` | Local | Google My Business |
| `content-writer` | Writing | Blog posts, articles |
| `copywriter` | Copy | Marketing copy |
| `social-media-manager` | Social | Platform strategies |
| `analytics-specialist` | Analytics | GA4, reporting |

---

#### Specialized Domains (7 Agents)

| **Age**nt | **Dom**ain | **Use** Case |
|-----------|------------|--------------|
| `arm-microcontroller-dev` | Embedded | ARM Cortex development |
| `blockchain-specialist` | Web3 | Smart contracts, DeFi |
| `legacy-modernization` | Legacy | COBOL to modern stacks |
| `payment-integration` | Payments | Stripe, PayPal |
| `game-developer` | Gaming | Unity, Unreal |
| `iot-engineer` | IoT | Sensor networks |
| `quantum-computing` | Quantum | Qiskit, quantum algorithms |

---

### Plugin Reference Table

| **Cat**egory | **Plu**gin Count | **Exa**mple Plugins |
|--------------|------------------|---------------------|
| Development | 6 | backend-development, frontend-mobile-development, debugging-toolkit |
| Infrastructure | 6 | kubernetes-operations, cloud-infrastructure, cicd-automation |
| Security | 6 | security-scanning, security-compliance, backend-api-security |
| Languages | 11 | python-development, javascript-typescript, systems-programming |
| Specialized | 8 | conductor, blockchain-web3, quantitative-trading |

**Install**ation Commands:**
```bash
# Add marketplace
/plugin marketplace add wshobson/agents

# Install by category
/plugin install backend-development
/plugin install security-scanning
/plugin install kubernetes-operations

# Install specialized
/plugin install conductor
/plugin install llm-application-dev
```

---

## BMAD 9 Agents Deep Dive

The **BMA**D-METHOD (Breakthrough Method of Agile AI-Driven Development) provides 9 specialized AI personas across 4 SDLC phases.

### BMAD Overview

| **Com**ponent | **Det**ails |
|---------------|-------------|
| **Age**nts | 9 specialized personas |
| **Pha**ses | 4 (Analysis, Planning, Solutioning, Implementation) |
| **Wor**kflows | 50+ guided workflows |
| **Tra**cks | 3 (Quick Flow, BMad Method, Enterprise) |
| **Sta**rs | 30.7k GitHub stars |

### The 9 BMAD Personas

#### Phase 1: Analysis

**Mar**y - Business Analyst**

```yaml
agent: analyst
name: Mary
icon: [chart icon]
role: "Strategic Business Analyst + Requirements Expert"
style: "Excitement of a treasure hunter discovering patterns"

capabilities:
  - Market research and competitive analysis
  - Requirements elicitation
  - Stakeholder alignment
  - Business framework application (Porter's, SWOT, Root Cause)

commands:
  WS: workflow-status
  BP: brainstorm-project    # 60+ ideation techniques
  RS: research              # Market, domain, competitive, technical
  PB: product-brief         # Concept definition
  DP: document-project      # Codebase documentation
```

**Key Beh**avioral Traits:**
- Asks probing questions to uncover hidden requirements
- Applies structured frameworks (Porter's Five Forces, SWOT)
- Documents findings in standardized formats
- Validates assumptions before moving to planning

---

#### Phase 2: Planning

**Joh**n - Product Manager**

```yaml
agent: pm
name: John
icon: [clipboard icon]
role: "Product Requirements + Stakeholder Alignment"
style: "Relentless questioning to uncover what truly matters"

capabilities:
  - PRD creation through user discovery
  - Jobs-to-be-Done framework
  - Iterative validation over perfection
  - Epic and story generation

commands:
  WS: workflow-status
  CP: create-prd             # Requirements document
  VP: validate-prd           # Comprehensiveness check
  EP: edit-prd               # PRD refinement
  ES: epics-stories          # Work breakdown
  IR: implementation-readiness  # Validation gate
  CC: correct-course         # Mid-project adjustments
```

**Key Beh**avioral Traits:**
- Focuses on user outcomes, not features
- Asks "why" repeatedly to find root motivations
- Balances stakeholder needs with technical feasibility
- Creates actionable, measurable acceptance criteria

---

**Sal**ly - UX Designer**

```yaml
agent: ux-designer
name: Sally
icon: [art icon]
role: "User Experience Designer + UI Specialist"
style: "Empathetic storytelling for user pain points"

capabilities:
  - User research and journey mapping
  - Wireframe and mockup design
  - Interaction design
  - AI-assisted design tools

commands:
  WS: workflow-status
  UX: ux-design              # User journey, wireframes
```

**Key Beh**avioral Traits:**
- Advocates for user perspective in all decisions
- Creates visual artifacts that communicate clearly
- Tests assumptions with user research
- Balances aesthetics with usability

---

#### Phase 3: Solutioning

**Win**ston - Architect**

```yaml
agent: architect
name: Winston
icon: [construction icon]
role: "System Architect + Technical Design Leader"
style: "Calm, pragmatic - boring technology for stability"

capabilities:
  - Distributed systems design
  - Cloud infrastructure patterns
  - API design and scalability
  - Architecture Decision Records

commands:
  WS: workflow-status
  CA: create-architecture     # Technical design, ADRs
  IR: implementation-readiness # Validation gate
```

**Key Beh**avioral Traits:**
- Prefers proven technology over cutting-edge
- Documents decisions with explicit trade-offs
- Designs for maintainability over cleverness
- Creates clear boundaries and contracts

**Win**ston's Signature Philosophy:**
> "Boring technology for stability. Document the 'why' not just the 'what'."

---

#### Phase 4: Implementation

**Bob** - Scrum Master**

```yaml
agent: sm
name: Bob
icon: [runner icon]
role: "Technical Scrum Master + Story Preparation"
style: "Crisp and checklist-driven. Zero tolerance for ambiguity."

capabilities:
  - Sprint planning and sequencing
  - Story preparation for developers
  - Phase separation enforcement
  - Retrospective facilitation

commands:
  WS: workflow-status
  SP: sprint-planning         # Task sequencing
  CS: context-story           # Developer-ready specs
  ER: epic-retrospective      # Learning capture
  CC: course-correction       # Sprint adjustments
```

**Key Beh**avioral Traits:**
- Breaks work into precise, measurable tasks
- Removes blockers proactively
- Enforces definition of done
- Facilitates learning through retrospectives

---

**Ame**lia - Developer**

```yaml
agent: dev
name: Amelia
icon: [computer icon]
role: "Senior Software Engineer"
style: "Ultra-succinct. Speaks in file paths and AC IDs."

capabilities:
  - Story implementation with TDD
  - Code review execution
  - Test verification (100% pass required)
  - Sequential task execution

commands:
  DS: dev-story               # TDD implementation
  CR: code-review             # Quality assessment

critical_actions:
  - All tests must pass 100% before story completion
  - Every task requires comprehensive unit tests
  - Execute tasks sequentially as written
  - Run full test suite after each task
```

**Key Beh**avioral Traits:**
- Implements exactly what's specified (no gold-plating)
- Writes tests before production code
- Commits frequently with descriptive messages
- Raises blockers immediately

**Ame**lia's Golden Rule:**
> "All tests must pass 100% before story completion."

---

#### Cross-Phase Agents

**Mur**at - Test Architect (TEA)**

```yaml
agent: tea
name: Murat
icon: [flask icon]
role: "Master Test Architect + Quality Advisor"
style: "Strong opinions, weakly held - data blended with intuition"

capabilities:
  - Risk-based testing strategy
  - Playwright/Cypress framework setup
  - CI/CD pipeline configuration
  - Quality gates and traceability

commands:
  WS: workflow-status
  TF: test-framework          # Test harness scaffold
  AT: automated-test-design   # Coverage strategy
  TA: test-automation         # Spec implementation
  TD: test-design             # Risk assessment
  TR: trace-requirements      # Coverage matrix
  NR: nfr-assessment          # Security, performance
  CI: continuous-integration  # Pipeline config
  RV: review-tests            # Quality audit

phases: [3, 4, "release-gate"]  # Spans multiple phases
```

**Mur**at's Key Differentiator:**
TEA is the only agent that spans multiple phases, ensuring testing continuity from architecture through release.

---

**Pai**ge - Technical Writer**

```yaml
agent: tech-writer
name: Paige
icon: [pencil icon]
role: "Technical Documentation Specialist"
style: "Patient educator using relatable analogies"

capabilities:
  - CommonMark, DITA, OpenAPI expertise
  - Visual documentation (diagrams)
  - Standards enforcement
  - Audience-adaptive complexity

commands:
  WS: workflow-status
  DP: document-project        # Project documentation
  WD: write-document          # Specific documents
  US: update-standards        # Style guide updates
  MG: mermaid-generate        # Diagram creation
  VD: validate-documentation  # Quality check
  EC: explain-concept         # Concept explanations
```

---

#### Quick Flow Agent

**Bar**ry - Quick Flow Solo Dev**

```yaml
agent: quick-flow-solo-dev
name: Barry
icon: [rocket icon]
role: "Elite Full-Stack Developer + Quick Flow Specialist"
style: "Direct and implementation-focused. Specs are for building."

capabilities:
  - Rapid spec-to-code execution
  - Brownfield codebase analysis
  - Convention detection
  - End-to-end story implementation

commands:
  TS: tech-spec               # Create implementation-ready specs
  QD: quick-dev               # End-to-end development
  CR: code-review             # Quality assessment
```

**Use Bar**ry When:**
- Bug fixes and small features (1-15 stories)
- Time-constrained projects (~5 min target)
- Brownfield codebase enhancements
- Single-developer workflow

---

### BMAD Phase Flow Visualization

```
+-----------------------------------------------------------------+
|                    BMAD METHOD PHASES                             |
+-----------------------------------------------------------------+
|                                                                   |
|  PHASE 1: ANALYSIS (Mary - Analyst)                              |
|  +-- brainstorm-project (60+ ideation techniques)                |
|  +-- research (market, domain, competitive, technical)           |
|  +-- product-brief (concept definition)                          |
|                                                                   |
|  PHASE 2: PLANNING (John - PM, Sally - UX)                       |
|  +-- create-prd (requirements document)                          |
|  +-- ux-design (user journey, wireframes)                        |
|  +-- validate-prd (comprehensiveness check)                      |
|                                                                   |
|  PHASE 3: SOLUTIONING (Winston - Architect)                      |
|  +-- create-architecture (technical design)                      |
|  +-- create-epics-and-stories (work breakdown)                   |
|  +-- implementation-readiness (validation gate)                  |
|                                                                   |
|  PHASE 4: IMPLEMENTATION (Bob - SM, Amelia - DEV, Murat - TEA)   |
|  +-- sprint-planning (task sequencing)                           |
|  +-- create-story (developer-ready specs)                        |
|  +-- dev-story (TDD implementation)                              |
|  +-- code-review (quality check)                                 |
|  +-- retrospective (learning capture)                            |
|                                                                   |
+-----------------------------------------------------------------+
```

---

### BMAD Scale-Adaptive Complexity

| **Lev**el | **Com**plexity | **Tra**ck | **Sto**ries |
|-----------|----------------|-----------|-------------|
| 0 | Trivial | Quick Flow only | 1-5 |
| 1 | Simple | Quick Flow recommended | 5-15 |
| 2 | Moderate | BMad Method core | 10-30 |
| 3 | Complex | Full BMad Method | 30-50+ |
| 4 | Enterprise | Complete + compliance | 50+ |

**Tra**ck Selection Guide:**

| **Tra**ck | **Tim**e | **Use** Case |
|-----------|----------|--------------|
| Quick Flow | ~5 min | Bug fixes, small features |
| BMad Method | ~15 min | Products, platforms |
| Enterprise | ~30 min | Compliance-heavy systems |

---

## Claude-007 Agent Patterns

The **Cla**ude-007 repository (avivl/claude-007-agents) provides 117+ pre-built agents with a bootstrap system for automatic configuration.

### Claude-007 Overview

| **Com**ponent | **Det**ails |
|---------------|-------------|
| **Age**nts | 117+ across 26 categories |
| **Boo**tstrap | Auto-detects tech stack |
| **MCP** Integration | Memory, GitHub, Task Master |
| **Sta**rs | 233+ GitHub stars |

### Key Differentiators

| **Wit**hout Claude 007 | **Wit**h Claude 007 |
|------------------------|---------------------|
| Write agents from scratch | Select from 117+ pre-built |
| Design coordination yourself | Built-in orchestration patterns |
| No session continuity | Session Manager handles state |
| Manual tech stack config | Bootstrap auto-configures |

---

### Universal Agents (Always Applicable)

| **Age**nt | **Pur**pose |
|-----------|-------------|
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

---

### Backend Specialists (15 Agents)

| **Age**nt | **Tec**hnology | **Spe**cialty |
|-----------|----------------|---------------|
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

---

### Frontend Specialists (9 Agents)

| **Age**nt | **Tec**hnology |
|-----------|----------------|
| `react-expert` | React/JSX |
| `vue-expert` | Vue.js |
| `nextjs-expert` | Next.js |
| `angular-expert` | Angular |
| `design-system-architect` | Component libraries |
| `micro-frontend-architect` | Micro-frontend patterns |
| `mobile-developer` | React Native/mobile |
| `pwa-specialist` | Progressive Web Apps |
| `webassembly-specialist` | WebAssembly |

---

### Context Orchestrators (3 Agents)

| **Age**nt | **Pur**pose |
|-----------|-------------|
| `vibe-coding-coordinator` | 15-20 min preparation before autonomous work |
| `exponential-planner` | Multi-day planning with capability growth awareness |
| `session-manager` | State preservation, checkpoints, recovery |

**Vib**e Coding Workflow:**
```
Phase 1 (5-7 min): Codebase exploration
    |
    v
Phase 2 (8-10 min): Implementation planning
    |
    v
Phase 3 (3-5 min): Context creation
    |
    v
Autonomous execution with safety validation
```

---

### Task Master Suite (5 Agents)

| **Age**nt | **Pur**pose |
|-----------|-------------|
| `task-orchestrator` | Task queue analysis and agent deployment |
| `task-executor` | Implementation of individual tasks |
| `task-checker` | Task verification |
| `task-master-initialization-specialist` | Task Master setup |
| `task-master-template-manager` | Template management |

---

### Choreography Workflows (3 Agents)

| **Age**nt | **Wor**kflow Type |
|-----------|-------------------|
| `feature-development-dance` | Full feature implementation |
| `code-review-waltz` | Code review process |
| `bug-hunting-tango` | Bug investigation |

**Fea**ture Development Dance Sequence:**
```
1. @project-analyst    -> Requirements analysis
2. @system-architect   -> Technical design
3. @security-specialist -> Security review
4. @nodejs-expert      -> Implementation
5. @test-automation-expert -> Test suite
6. @code-reviewer      -> Quality review
7. @documentation-specialist -> Documentation
```

---

### Creative Agents (3 Agents)

| **Age**nt | **Pur**pose |
|-----------|-------------|
| `rubber-duck-debugger` | Socratic debugging through questions |
| `code-archaeologist-time-traveler` | Git history analysis |
| `technical-debt-collector` | Technical debt management |

**Rub**ber Duck Method:**
The rubber duck agent asks questions but never gives answers directly:
- "What happens when you trace the token flow?"
- "Have you checked what the middleware logs?"
- "What assumptions are you making about the session?"

---

### Bootstrap System Architecture

```
+-------------------------------------------------+
|                 BOOTSTRAP ENGINE                  |
+-------------------------------------------------+
|  Phase 1: Environmental Analysis                  |
|  +-- Detect: package.json -> Node.js             |
|  +-- Detect: .py files -> Python                 |
|  +-- Detect: .rb files -> Ruby                   |
|  +-- Classify scenario (NEW/EXISTING/PARTIAL)    |
+-------------------------------------------------+
|  Phase 2: Strategic Configuration                 |
|  +-- Select universal core agents (always on)    |
|  +-- Map tech stack -> specialized agents        |
|  +-- Assess complexity (1-10 scale)              |
|  +-- Configure MCP servers                       |
+-------------------------------------------------+
|  Phase 3: Automated Deployment                    |
|  +-- Generate CLAUDE.md                          |
|  +-- Initialize Task Master                      |
|  +-- Configure development environment           |
+-------------------------------------------------+
|  Phase 4: Validation Testing                      |
|  +-- Verify agent accessibility                  |
|  +-- Test MCP connections                        |
|  +-- Confirm system readiness                    |
+-------------------------------------------------+
```

**Agent Selection Logic:**
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

## Agent Specialization Principles

### When to Specialize vs Generalize

**Spec**ialize When:**

| **Sig**nal | **Why** Specialize |
|------------|-------------------|
| Task requires deep domain knowledge | Generalists lack depth |
| Repeated similar tasks | Amortize specialization cost |
| Quality-critical output | Specialists produce better results |
| Compliance/security requirements | Need verifiable expertise |
| Complex multi-step workflows | Handoffs between specialists work better |

**Gen**eralize When:**

| **Sig**nal | **Why** Generalize |
|------------|-------------------|
| One-off tasks | Specialization overhead not justified |
| Exploratory work | Don't know what expertise is needed |
| Simple tasks | Overkill to invoke specialists |
| Context-limited environment | Can't afford multiple agents |
| Prototyping phase | Speed over quality |

---

### The Specialization Decision Tree

```
START: What type of task?
    |
    +-- Routine, repeated task?
    |   |
    |   +-- YES: Specialize (amortize setup cost)
    |   +-- NO: Continue...
    |
    +-- Quality-critical output?
    |   |
    |   +-- YES: Specialize (higher quality)
    |   +-- NO: Continue...
    |
    +-- Requires deep domain knowledge?
    |   |
    |   +-- YES: Specialize (depth matters)
    |   +-- NO: Continue...
    |
    +-- Complex multi-step workflow?
    |   |
    |   +-- YES: Multiple specialists with handoffs
    |   +-- NO: Single generalist agent
```

---

### Specialization Depth Spectrum

```
SHALLOW <---------------------------------> DEEP

Generic Claude    Single Domain    Multi-Skill    Deep Expert
     |                  |               |              |
     v                  v               v              v
"Help with code"  "@developer"   "@backend-     "@security-
                                  architect"     auditor with
                                                 OWASP focus"

Use for:          Use for:        Use for:       Use for:
- Exploration     - Category      - Design       - Critical
- One-offs          work           decisions      audits
- Unknown         - Implementation- Cross-cutting - Compliance
  domains                          concerns       - Production
```

---

### Agent Composition Patterns

**Pat**tern 1: Sequential Specialization**
```
Request -> Agent A -> Agent B -> Agent C -> Result

Example: Feature Development
User Request
    -> backend-architect (design)
    -> backend-developer (implement)
    -> test-automator (test)
    -> code-reviewer (review)
    -> Result
```

**Pat**tern 2: Parallel Specialization**
```
           +-> Security Agent --+
Request ---+-> Performance Agent+-> Aggregated Result
           +-> Quality Agent ---+

Example: Comprehensive Review
User Request
    +-> security-auditor
    +-> performance-analyst
    +-> code-reviewer
    -> Aggregated findings
```

**Pat**tern 3: Tiered Execution**
```
Planning (Opus) -> Implementation (Haiku) -> Review (Sonnet)

Example: Database Migration
database-architect [Opus]
    -> Design migration strategy

database-developer [Haiku]
    -> Generate migration scripts

database-reviewer [Sonnet]
    -> Validate and approve
```

---

## Domain Catalog vs Methodology Agents

### Understanding the Distinction

| **Asp**ect | **Dom**ain Catalog (99-Agents, 007) | **Met**hodology (BMAD) |
|------------|-------------------------------------|------------------------|
| **Foc**us | Technical expertise | Process execution |
| **Que**stion answered | "How do I build X?" | "What should I build next?" |
| **Org**anization | By technology/domain | By SDLC phase |
| **Per**sonas | Technical specialists | Business personas |
| **Out**put | Code, configs, docs | Decisions, specs, plans |
| **Orc**hestration | User-driven | Workflow-driven |

---

### When to Use Each Approach

**Use Dom**ain Catalog (99-Agents, Claude-007) When:**

| **Sce**nario | **Why** |
|--------------|---------|
| You know what to build | Need technical expertise, not planning |
| Implementation phase | Focus on code quality |
| Brownfield projects | Need tech-specific knowledge |
| Technology-specific tasks | Domain depth matters |
| Ad-hoc development | No structured process needed |

**Use Met**hodology (BMAD) When:**

| **Sce**nario | **Why** |
|--------------|---------|
| Starting from scratch | Need to discover requirements |
| Complex multi-phase projects | Structure prevents chaos |
| Team coordination needed | Clear handoffs between phases |
| Compliance requirements | Traceability through phases |
| Quality gates required | Built-in validation workflows |

---

### Comparison Matrix

| **Cri**terion | **99-**Agents | **BMA**D | **Cla**ude-007 |
|---------------|---------------|----------|----------------|
| Agent count | 108 | 9 | 117+ |
| Focus | Domain expertise | SDLC process | Pre-built library |
| Organization | Plugins by tech | Phases by SDLC | Categories by function |
| Orchestration | Sequential/parallel | Phase-gated | Choreography workflows |
| Setup time | Plugin install | Project init | Bootstrap (~5 min) |
| Memory | Skill tiers | workflow-status.yaml | MCP integration |
| Best for | Implementation | Full project lifecycle | Quick start projects |

---

### Combined Selection Guide

```
START: What's your situation?
    |
    +-- Greenfield project, unknown requirements?
    |   |
    |   +-> BMAD (start with Mary for analysis)
    |
    +-- Brownfield, specific tech enhancement?
    |   |
    |   +-> Domain Catalog (99-Agents or Claude-007)
    |
    +-- Need structured SDLC with compliance?
    |   |
    |   +-> BMAD (full Enterprise track)
    |
    +-- Quick feature implementation?
    |   |
    |   +-> Claude-007 bootstrap OR BMAD Quick Flow (Barry)
    |
    +-- Mixed: planning + implementation?
        |
        +-> COMBINE: BMAD for phases 1-3, Domain agents for phase 4
```

---

## Combining 99-agents Library with BMAD Execution

The most powerful configuration combines BMAD's methodology structure with 99-agents' domain expertise.

### Integration Architecture

```
+------------------------------------------------------------------+
|                    COMBINED ARCHITECTURE                           |
+------------------------------------------------------------------+
|                                                                    |
|  BMAD PHASE STRUCTURE        99-AGENTS DOMAIN EXPERTISE           |
|  (Process)                   (Implementation)                      |
|                                                                    |
|  Phase 1: ANALYSIS                                                 |
|  +-- Mary (Analyst)          + 99-agents: market-researcher       |
|                              + 99-agents: competitive-analyst      |
|                                                                    |
|  Phase 2: PLANNING                                                 |
|  +-- John (PM)               + 99-agents: product-manager         |
|  +-- Sally (UX)              + 99-agents: ui-designer             |
|                                                                    |
|  Phase 3: SOLUTIONING                                              |
|  +-- Winston (Architect)     + 99-agents: backend-architect       |
|                              + 99-agents: cloud-architect         |
|                              + 99-agents: database-architect      |
|                                                                    |
|  Phase 4: IMPLEMENTATION                                           |
|  +-- Bob (SM)                + 99-agents: ALL domain specialists  |
|  +-- Amelia (DEV)            + 99-agents: language specialists    |
|  +-- Murat (TEA)             + 99-agents: test-automator         |
|                                                                    |
+------------------------------------------------------------------+
```

---

### Configuration Example

**BMA**D + 99-Agents Config:**
```yaml
# bmad-99agents-config.yaml
integration:
  methodology: bmad
  domain_experts: 99-agents

phases:
  analysis:
    bmad_agent: analyst  # Mary
    domain_support:
      - market-researcher
      - competitive-analyst

  planning:
    bmad_agents:
      - pm              # John
      - ux-designer     # Sally
    domain_support:
      - product-manager
      - ui-designer
      - business-analyst

  solutioning:
    bmad_agent: architect  # Winston
    domain_support:
      - backend-architect
      - cloud-architect
      - database-architect
      - security-auditor

  implementation:
    bmad_agents:
      - sm              # Bob
      - dev             # Amelia
      - tea             # Murat
    domain_support:
      # Install relevant 99-agents plugins
      plugins:
        - backend-development
        - frontend-mobile-development
        - security-scanning
        - tdd-workflows
```

---

### Workflow Pattern: BMAD Orchestrates, 99-Agents Executes

```
BMAD Phase Gate                    99-Agents Specialists
     |                                    |
     v                                    v
Mary: "Research the market"        -> market-researcher
     |                             -> competitive-analyst
     v                             -> business-analyst
John: "Create PRD"                 -> product-manager
     |                             -> stakeholder-analyst
     v
Sally: "Design UX"                 -> ui-designer
     |                             -> accessibility-specialist
     v
Winston: "Architect system"        -> backend-architect
     |                             -> cloud-architect
     |                             -> database-architect
     v
Bob: "Plan sprint"                 -> (BMAD native)
     |
     v
Amelia: "Implement story"          -> typescript-developer
     |                             -> react-developer
     |                             -> tdd-orchestrator
     v
Murat: "Test coverage"             -> test-automator
     |                             -> security-auditor
     v
COMPLETE
```

---

### Copy-Paste Implementation

**Step 1: Install Both**
```bash
# Install BMAD
npx bmad-method@alpha install

# Install 99-agents plugins
/plugin marketplace add wshobson/agents
/plugin install backend-development
/plugin install security-scanning
/plugin install tdd-workflows
```

**Step 2: BMAD CLAUDE.md Extension**
```markdown
# Project Configuration

## BMAD Integration
Using BMAD-METHOD v4.44.1 for SDLC structure.

## 99-Agents Support
For Phase 4 implementation, the following 99-agents plugins are available:
- backend-development (API design, microservices)
- security-scanning (vulnerability analysis)
- tdd-workflows (test-driven development)

## Phase 4 Instructions
When Bob (SM) assigns a story to Amelia (DEV):
1. Amelia should invoke relevant 99-agents specialists
2. Example: "Use backend-architect for design decisions"
3. Example: "Use tdd-orchestrator for test-first implementation"
4. Example: "Use security-auditor before committing"

## Orchestration
- BMAD controls phase transitions and gates
- 99-agents provide deep technical expertise
- Both systems reference this CLAUDE.md
```

**Step 3: Implementation Phase Prompt**
```markdown
# Phase 4 Implementation with 99-Agents

Load DEV agent (Amelia).

Current story: [STORY-ID]
Story spec: implementation-artifacts/stories/[story-file].md

## Instructions
1. Read story specification
2. Use 99-agents specialists for implementation:
   - For architecture questions: invoke backend-architect
   - For test design: invoke tdd-orchestrator
   - For security review: invoke security-auditor
3. Implement using TDD (red-green-refactor)
4. Run full test suite
5. Mark story complete when 100% tests pass

## Available 99-Agents
- backend-architect
- backend-developer
- tdd-orchestrator
- security-auditor
- code-reviewer
```

---

## Integration Patterns

### Pattern 1: Ralph + Agent Ecosystems

Ralph's continuous iteration loop can invoke different agent specialists each iteration.

**Ral**ph + 99-Agents:**
```markdown
# PROMPT.md for Ralph loop

## Available Agents
Using 99-agents plugins:
- backend-development
- security-scanning
- tdd-workflows

## Current Task
[Task description]

## Workflow
1. Use backend-architect for design decisions
2. Use tdd-orchestrator for test-first implementation
3. Use security-auditor before committing

## State
See STATE.md for current progress.
```

**Ral**ph + BMAD:**
```bash
# Ralph loop for BMAD Phase 4
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

**Ral**ph + Claude-007:**
```bash
# Ralph with 007 specialists
while :; do
  cat << 'EOF' | claude --allowedTools "Read,Write,Edit,Bash,mcp__*"
## Available 007 Agents
@software-engineering-expert - General guidance
@security-specialist - Security review each iteration
@code-reviewer - Quality gates

## Current Task
$(cat TASK.md)

## Instructions
1. Analyze current state
2. If security-relevant: Invoke @security-specialist
3. Implement next step
4. Run @code-reviewer before completing
5. Update progress for next iteration
EOF
  sleep 2
done
```

---

### Pattern 2: Gas Town + Agent Ecosystems

Gas Town's factory architecture maps directly to agent ecosystems.

**Gas Tow**n Role Mapping:**

| **Gas** Town Role | **99-**Agents | **BMA**D | **Cla**ude-007 |
|-------------------|---------------|----------|----------------|
| **May**or | conductor | John (PM) | @vibe-coding-coordinator |
| **Dea**con | security-auditor, code-reviewer | Winston (Architect) | @task-orchestrator |
| **Dog**s | Domain specialists | Amelia (DEV), Barry | @react-expert, @nodejs-expert |
| **Ref**inery | comprehensive-reviewer | Murat (TEA) | @verification-specialist |

**Gas Tow**n + 99-Agents Configuration:**
```yaml
# gas-town-99-config.yaml
roles:
  mayor:
    agent: conductor
    model: opus
    purpose: "Strategic project direction"

  deacons:
    security:
      agent: security-auditor
      model: sonnet
    quality:
      agent: code-reviewer
      model: sonnet

  dogs:
    backend:
      plugin: backend-development
      agents: [backend-developer, tdd-orchestrator]
    frontend:
      plugin: frontend-mobile-development
      agents: [frontend-developer, ui-designer]

  refinery:
    agents: [comprehensive-reviewer, documentation-generator]
    model: sonnet
```

**Gas Tow**n + BMAD Configuration:**
```
+----------------------------------------------------------+
|                    GAS TOWN + BMAD                         |
+----------------------------------------------------------+
|                                                            |
|  MAYOR (PM - John)                                        |
|  +-- Strategic direction, requirement priorities           |
|                                                            |
|  DEACON (Architect - Winston)                             |
|  +-- Technical standards, architecture decisions           |
|                                                            |
|  DOGS (Specialist Agents)                                 |
|  +-- Mary (Analyst) -> Research dog                       |
|  +-- Sally (UX) -> Design dog                             |
|  +-- Murat (TEA) -> Quality dog                           |
|  +-- Paige (Tech Writer) -> Documentation dog             |
|  +-- Barry (Quick Flow) -> Implementation dog             |
|                                                            |
|  REFINERY (SM - Bob + DEV - Amelia)                       |
|  +-- Sprint execution, story implementation                |
|                                                            |
+----------------------------------------------------------+
```

---

### Pattern 3: CC-Mirror + Agent Ecosystems

CC-Mirror's multi-model routing can assign agents to appropriate model tiers.

**CC-Mir**ror + Agent Routing:**
```yaml
# cc-mirror-agents.yaml
models:
  opus:
    role: architect
    agents:
      # 99-agents
      - backend-architect
      - security-auditor
      - incident-responder
      # BMAD
      - Winston (architect)
      # Claude-007
      - "@vibe-coding-coordinator"
      - "@exponential-planner"

  sonnet:
    role: executor
    agents:
      # 99-agents
      - code-reviewer
      - performance-analyst
      - tdd-orchestrator
      # BMAD
      - Amelia (dev)
      # Claude-007
      - "@react-expert"
      - "@nodejs-expert"

  haiku:
    role: support
    agents:
      # 99-agents
      - code-formatter
      - documentation-updater
      # BMAD
      - (not applicable - BMAD agents need reasoning)
      # Claude-007
      - "@code-reviewer" (for quick passes)
```

**Mul**ti-Model Flow:**
```
              +-------------------------+
              |   CC-Mirror Controller   |
              +------------+------------+
                           |
       +-------------------+-------------------+
       |                   |                   |
       v                   v                   v
+-------------+     +-------------+     +-------------+
|   Opus 4.5  |     | Sonnet 4.5  |     |  Haiku 4.5  |
+-------------+     +-------------+     +-------------+
| backend-    |     | code-reviewer|    | code-       |
| architect   |     | performance- |    | formatter   |
| security-   |     | analyst      |    | test-runner |
| auditor     |     | tdd-         |    | doc-updater |
| incident-   |     | orchestrator |    |             |
| responder   |     |              |    |             |
+-------------+     +-------------+     +-------------+
```

---

### Combination Matrix

| **Com**bination | **Use** Case | **Com**plexity | **Val**ue |
|-----------------|--------------|----------------|-----------|
| Ralph + 99-agents | Skill-enhanced iteration | Low | High |
| Ralph + BMAD | Phase-specific loops | Medium | High |
| Ralph + Claude-007 | Pre-built specialists | Low | High |
| Gas Town + 99-agents | Factory with domain experts | Medium | Very High |
| Gas Town + BMAD | SDLC factory structure | High | Very High |
| CC-Mirror + any ecosystem | Multi-model optimization | Medium | High |
| BMAD + 99-agents | Methodology + domain | Medium | Very High |
| All ecosystems combined | Enterprise orchestration | Very High | Maximum |

---

## Mental Models

### Model 1: The Agent Zoo

Think of agent ecosystems as a zoo with different sections:

```
+------------------------------------------------------------------+
|                    THE AGENT ZOO                                   |
+------------------------------------------------------------------+
|                                                                    |
|  99-AGENTS WING                                                   |
|  "Domain Specialists Exhibit"                                     |
|  +-- Each cage contains one species (technology)                  |
|  +-- 108 specialist animals                                       |
|  +-- Visitors (you) pick which animal helps with task             |
|                                                                    |
|  BMAD WING                                                        |
|  "SDLC Process Theater"                                           |
|  +-- 9 actors play roles in a sequential show                     |
|  +-- Each act has specific actors                                 |
|  +-- Show runs from start to finish                               |
|                                                                    |
|  CLAUDE-007 WING                                                  |
|  "Pre-Trained Performers Arena"                                   |
|  +-- 117+ trained performers ready to go                          |
|  +-- Bootstrap trainer picks optimal team                         |
|  +-- Choreographed group performances available                   |
|                                                                    |
+------------------------------------------------------------------+

KEY INSIGHT: You can borrow animals from any wing for your project.
             Mix the domain expert from 99-agents with
             the process structure from BMAD and
             the ready-made choreography from Claude-007.
```

---

### Model 2: The Restaurant Kitchen

Agents are like kitchen staff with different specializations:

```
99-AGENTS = SPECIALTY CHEFS
+-- Sushi chef (fastapi-expert)
+-- Pastry chef (frontend-architect)
+-- Grill master (systems-programming)
+-- Each chef knows one cuisine deeply

BMAD = KITCHEN OPERATIONS
+-- Mary = Restaurant scout ("What should we serve?")
+-- John = Menu planner ("What dishes for tonight?")
+-- Winston = Kitchen designer ("How should we set up?")
+-- Bob = Expeditor ("Order up!")
+-- Amelia = Line cook ("Cooking the dish")
+-- Murat = Health inspector ("Is it safe?")

CLAUDE-007 = PRE-TRAINED KITCHEN TEAM
+-- Bootstrap = Kitchen manager who hires the right staff
+-- Session Manager = Shift coordinator who tracks progress
+-- Vibe Coding = Prep cook who does mise en place

KEY INSIGHT: The best kitchen combines:
- BMAD's operational flow
- 99-agents' specialty chefs
- Claude-007's ready-to-work team
```

---

### Model 3: The Construction Project

Building a house with agent ecosystems:

```
BMAD = PROJECT MANAGEMENT
+-- Mary: Site surveyor (analysis)
+-- John: Project manager (planning)
+-- Sally: Interior designer (UX)
+-- Winston: Architect (solutioning)
+-- Bob: Site foreman (sprint management)
+-- Amelia: Builder (implementation)
+-- Murat: Inspector (quality)

99-AGENTS = SPECIALIZED CONTRACTORS
+-- Electrician (backend-developer)
+-- Plumber (database-architect)
+-- HVAC specialist (devops-engineer)
+-- Security system installer (security-auditor)

CLAUDE-007 = CONTRACTING AGENCY
+-- Knows which contractors to hire
+-- Has pre-vetted specialists ready
+-- Manages handoffs between trades

BUILD PROCESS:
1. BMAD project manager (John) creates the plan
2. BMAD architect (Winston) designs the structure
3. BMAD foreman (Bob) schedules the work
4. 99-agents specialists do their specialty work
5. Claude-007 coordinated workflows handle multi-trade tasks
6. BMAD inspector (Murat) verifies quality
```

---

### Model 4: Agent Depth vs Breadth

```
DEPTH (Specialization)
^
|     +-- security-auditor (deep security knowledge)
|     |
|     +-- backend-architect (deep architecture knowledge)
|     |
|     +-- Winston (BMAD - architecture + process knowledge)
|     |
|     +-- @vibe-coding-coordinator (deep planning knowledge)
|     |
|  +--+-- software-engineering-expert (broad software knowledge)
|  |
|  +-- generic Claude (broad general knowledge)
|
+---------------------------------------------------------> BREADTH (Generalization)

KEY INSIGHT:
- For critical decisions: Use deep specialists
- For exploration: Use broad generalists
- For SDLC: Use methodology agents (BMAD)
- For implementation: Use domain specialists (99-agents)
- For quick setup: Use pre-built library (Claude-007)
```

---

### Model 5: The Assembly Line

Agent ecosystems as manufacturing:

```
RAW MATERIALS (Ideas, Requirements)
       |
       v
+----------------------------------------------+
|  ANALYSIS LINE (BMAD Phase 1)                |
|  Mary + 99-agents market-researcher          |
+----------------------------------------------+
       |
       v
+----------------------------------------------+
|  PLANNING LINE (BMAD Phase 2)                |
|  John + Sally + 99-agents designers          |
+----------------------------------------------+
       |
       v
+----------------------------------------------+
|  SOLUTIONING LINE (BMAD Phase 3)             |
|  Winston + 99-agents architects              |
+----------------------------------------------+
       |
       v
+----------------------------------------------+
|  IMPLEMENTATION LINE (BMAD Phase 4)          |
|  Bob orchestrates                            |
|  Amelia + 99-agents developers execute       |
|  Murat + 99-agents testers verify            |
+----------------------------------------------+
       |
       v
FINISHED PRODUCT (Deployed Software)

KEY INSIGHT: BMAD provides the assembly line structure.
             99-agents provides the specialized workers.
             Claude-007 provides pre-trained teams.
```

---

## Checkpoints

### Checkpoint 1: Understanding the Ecosystems

**Whe**re you are:** You've read about three agent ecosystems.

**Ver**ify your understanding:**
- [ ] Can explain difference between domain (99-agents) and methodology (BMAD) agents
- [ ] Know Claude-007's bootstrap value proposition
- [ ] Understand when to use each ecosystem

**You sho**uld be able to answer:**
1. "I need to implement a React feature" -> Which ecosystem?
2. "I'm starting a new project from scratch" -> Which ecosystem?
3. "I want agents pre-configured for my tech stack" -> Which ecosystem?

**Ans**wers:**
1. 99-agents (domain expertise) or Claude-007 (pre-built react-expert)
2. BMAD (full SDLC methodology)
3. Claude-007 (bootstrap auto-configures)

---

### Checkpoint 2: Agent Selection Mastery

**Whe**re you are:** You understand the ecosystems and need to select agents.

**Com**plete this exercise:**

| **Sce**nario | **You**r Selection |
|--------------|-------------------|
| Security audit before release | _________________ |
| New project requirements gathering | _________________ |
| Implementing Python API endpoint | _________________ |
| Full feature with multiple agents | _________________ |
| Quick bug fix in existing codebase | _________________ |

**Ans**wers:**
| Scenario | Selection |
|----------|-----------|
| Security audit | 99-agents: security-auditor OR BMAD: Murat (TEA) |
| Requirements gathering | BMAD: Mary (analyst) |
| Python API endpoint | 99-agents: fastapi-specialist OR Claude-007: @fastapi-expert |
| Full feature | Claude-007: @feature-development-dance OR BMAD full workflow |
| Quick bug fix | BMAD: Barry (Quick Flow) OR Claude-007: bootstrap |

---

### Checkpoint 3: Integration Configuration

**Whe**re you are:** You're ready to combine ecosystems.

**Ver**ify your state:**

```bash
# Check BMAD installation
ls _bmad/
# Should see: agents/, workflows/, module.yaml

# Check 99-agents
/plugin list
# Should show installed plugins

# Check Claude-007 (if using)
ls .claude/agents/
# Should see agent .md files
```

**Exp**ected output:**
```
_bmad/
  agents/
  workflows/
  module.yaml

Installed plugins:
  - backend-development
  - security-scanning
  - tdd-workflows

.claude/agents/
  backend/
  security/
  orchestration/
```

**If mis**sing:**
- BMAD: Run `npx bmad-method@alpha install`
- 99-agents: Run `/plugin marketplace add wshobson/agents`
- Claude-007: Copy from repository to `.claude/agents/`

---

### Checkpoint 4: Combined Workflow Test

**Whe**re you are:** You have ecosystems installed and want to test integration.

**Test com**mand:**
```
Start a BMAD Phase 1 analysis using Mary, then invoke 99-agents
market-researcher for competitive analysis.
```

**Exp**ected behavior:**
1. Mary (BMAD analyst) loads and introduces herself
2. She begins requirements elicitation
3. When you request competitive analysis, market-researcher activates
4. Both agents contribute to the analysis

**Suc**cess indicators:**
- [ ] Mary's persona style is visible ("treasure hunter excitement")
- [ ] 99-agents specialist provides domain depth
- [ ] Outputs are complementary, not conflicting
- [ ] Clear handoff between agents

---

### Checkpoint 5: Full Integration Mastery

**Whe**re you are:** You can combine ecosystems fluidly.

**Mas**tery test:**

Create a project that:
1. Uses BMAD for Phase 1-3 (Mary, John, Winston)
2. Uses 99-agents backend-development for Phase 4 implementation
3. Uses Claude-007 @security-specialist for security review
4. Uses BMAD Murat (TEA) for final quality gate

**Suc**cess criteria:**
- [ ] All agents load correctly
- [ ] Handoffs between ecosystems are smooth
- [ ] CLAUDE.md documents the integration
- [ ] Project completes with quality artifacts

---

## Troubleshooting

### Agent Loading Issues

<details>
<summary><strong>Prob**lem: "Agent not found" error</strong></summary>

**Cau**ses:**
1. Agent file not in correct location
2. YAML frontmatter syntax error
3. Agent name misspelled

**Sol**utions:**
```bash
# For 99-agents
/plugin list  # Verify plugin installed
/plugin info backend-development  # Check agents in plugin

# For BMAD
ls _bmad/agents/  # Verify agent files exist

# For Claude-007
ls .claude/agents/  # Verify agent directory
```

**Fix:**
```bash
# Reinstall plugin
/plugin uninstall backend-development
/plugin install backend-development

# Or copy agent file manually
cp source/agent.md .claude/agents/
```
</details>

---

<details>
<summary><strong>Prob**lem: Agent persona wrong or generic</strong></summary>

**Cau**ses:**
1. Context pollution from previous agent
2. Agent file not loaded
3. Incorrect agent invocation

**Sol**utions:**
1. Start fresh conversation
2. Explicitly load agent: "Load the BMAD analyst agent Mary"
3. Check agent file has correct persona definition

**Ver**ify:**
```bash
# Ask agent to identify itself
"What is your name and role?"

# Expected response should match agent definition
# Mary should mention "treasure hunter" style
# Winston should mention "boring technology"
```
</details>

---

### Ecosystem Conflicts

<details>
<summary><strong>Prob**lem: Multiple agents responding simultaneously</strong></summary>

**Cau**ses:**
1. Multiple ecosystems active without clear orchestration
2. Ambiguous prompt that triggers multiple agents

**Sol**utions:**
1. Use explicit agent invocation: "@security-auditor review this"
2. Establish orchestration in CLAUDE.md
3. Use phase structure (BMAD) to control which agents are active

**Pre**vention:**
```markdown
# In CLAUDE.md

## Agent Orchestration Rules
1. Only one agent active at a time unless explicitly multi-agent
2. BMAD agents control phase gates
3. 99-agents specialists invoked by BMAD agents as needed
4. Claude-007 @session-manager tracks which agent is active
```
</details>

---

<details>
<summary><strong>Prob**lem: Agents duplicating work</strong></summary>

**Cau**ses:**
1. No shared state between agents
2. Different ecosystems don't know about each other's work

**Sol**utions:**
1. Use BMAD workflow-status.yaml as shared state
2. Add anti-duplication protocol to CLAUDE.md
3. Have one agent (e.g., Bob SM) orchestrate others

**Con**figuration:**
```markdown
# In CLAUDE.md

## Anti-Duplication Protocol
Before any agent generates new code:
1. Check existing codebase for similar implementations
2. Check BMAD implementation-artifacts/ for related work
3. Check 99-agents skill outputs
4. Prefer enhancing existing over creating new
```
</details>

---

### Installation Issues

<details>
<summary><strong>Prob**lem: 99-agents plugin install fails</strong></summary>

**Err**or:**
```
Error: Unable to connect to marketplace
```

**Sol**utions:**
```bash
# Check network
curl https://github.com/wshobson/agents

# Try direct installation
/plugin install https://github.com/wshobson/agents/plugins/backend-development

# Clone and install locally
git clone https://github.com/wshobson/agents
/plugin install ./agents/plugins/backend-development
```
</details>

---

<details>
<summary><strong>Prob**lem: BMAD install creates empty _bmad folder</strong></summary>

**Sol**utions:**
```bash
# Remove and reinstall
rm -rf _bmad
npx bmad-method@alpha install

# If still failing, check Node version
node --version
# Requires v20+

# Try with verbose logging
DEBUG=* npx bmad-method@alpha install
```
</details>

---

<details>
<summary><strong>Prob**lem: Claude-007 bootstrap fails with "Cannot detect project type"</strong></summary>

**Cau**se:** Empty directory or unusual project structure.

**Sol**ution:**
```bash
# Create minimal indicator file
touch package.json  # For Node.js
# OR
touch requirements.txt  # For Python
# OR
touch Gemfile  # For Ruby

# Re-run bootstrap
"Use @bootstrap-orchestrator to analyze and setup this project"
```
</details>

---

### Workflow Issues

<details>
<summary><strong>Prob**lem: BMAD workflow stuck at phase gate</strong></summary>

**Cau**ses:**
1. Missing required artifact
2. Validation failed
3. Agent not completing workflow

**Sol**utions:**
```bash
# Check workflow status
*workflow-status
# or
cat _bmad-output/bmm-workflow-status.yaml

# Identify missing artifact
# Re-run workflow that produces it
# Example: If PRD missing, run *prd with John
```
</details>

---

<details>
<summary><strong>Prob**lem: 99-agents skills not activating</strong></summary>

**Cau**ses:**
1. Trigger phrases not matching
2. Skill file malformed
3. Plugin not fully loaded

**Sol**utions:**
```bash
# Check skill triggers
# Use explicit phrases from skill definition

# Example: Instead of "help with API"
# Use: "REST API design patterns" (exact trigger phrase)

# Manual activation
/plugin activate-skill api-design-principles
```
</details>

---

### Context Issues

<details>
<summary><strong>Prob**lem: Context window exceeded with multiple agents</strong></summary>

**Cau**ses:**
1. Too many plugins loaded
2. All skills at Tier 3 (full resources)
3. Multiple large agent definitions active

**Sol**utions:**
1. Reduce installed plugins to essentials
2. Configure skills for on-demand loading
3. Use phase structure to limit active agents

**Con**figuration:**
```yaml
# .claude-plugin/skills.yaml
skill_activation:
  api-design-principles:
    load_resources: on_demand  # Not always

# Load only needed plugins
/plugin uninstall documentation-generation  # If not needed
/plugin uninstall seo-analysis  # If not needed
```
</details>

---

<details>
<summary><strong>Prob**lem: Session state lost between conversations</strong></summary>

**Sol**utions:**

**For BMAD:**
```bash
# State is in workflow-status.yaml
cat _bmad-output/bmm-workflow-status.yaml

# Resume from checkpoint
*workflow-status
```

**For Claude-007:**
```
# Use Session Manager
"@session-manager list recent sessions"
"@session-manager resume session [session-id]"
```

**For 99-agents:**
```markdown
# Add to PROMPT.md for Ralph loops
## State
See STATE.md for current progress.
Read this file first before taking any action.
```
</details>

---

## Source Attribution

### Primary Sources

**99-**Agents:**
- **Rep**ository:** https://github.com/wshobson/agents
- **Ver**sion:** 1.3.7
- **Aut**hor:** Seth Hobson (seth@major7apps.com)
- **Lic**ense:** MIT (Apache-2.0 for Conductor)

**BMA**D-METHOD:**
- **Rep**ository:** https://github.com/bmad-code-org/BMAD-METHOD
- **Ver**sion:** v4.44.1
- **Sta**rs:** 30.7k
- **Lic**ense:** MIT

**Cla**ude-007:**
- **Rep**ository:** https://github.com/avivl/claude-007-agents
- **Aut**hor:** Aviv Laufer (@avivl)
- **Sta**rs:** 233+
- **Lic**ense:** MIT

---

### Extraction Documents Referenced

| **Doc**ument | **Con**tent |
|--------------|-------------|
| `extractions/orchestration/033-99-agents-ecosystem.md` | Full 99-agents analysis |
| `extractions/orchestration/034-bmad-method.md` | BMAD methodology deep dive |
| `extractions/orchestration/038-claude-007-agents.md` | Claude-007 extraction |

---

### Related Synthesis Documents

| **Doc**ument | **Top**ic |
|--------------|-----------|
| `synthesis/mastery-ralph-complete.md` | Ralph pattern integration |
| `synthesis/architecture-complexity-ladder.md` | Complexity progression |
| `synthesis/JUDGMENT-GUIDE.md` | Architectural decisions |
| `synthesis/MASTER-PLAYBOOK.md` | Complete capability guide |

---

### Reliability Assessment

| **Asp**ect | **99-**Agents | **BMA**D | **Cla**ude-007 |
|------------|---------------|----------|----------------|
| Documentation | A | A | High |
| Community | Growing | A (30.7k stars) | Growing (233+ stars) |
| Maintenance | Active | A (v4.44.1) | Active (121+ commits) |
| Production Use | Reported | Widespread | Reported |
| Integration | High | High | High |

---

## Summary

This taxonomy covers three major agent ecosystems for Claude Code:

**99-**Agents (wshobson/agents):**
- 108 domain specialists across 72 plugins
- Focus: Technical expertise by technology/domain
- Best for: Implementation phase, specific tech needs
- Key feature: Progressive skill disclosure, model tier optimization

**BMA**D-METHOD:**
- 9 SDLC personas across 4 phases
- Focus: Full software development lifecycle
- Best for: Greenfield projects, structured development
- Key feature: Phase gates, workflow progressive disclosure

**Cla**ude-007 (avivl):**
- 117+ pre-built agents with bootstrap
- Focus: Ready-to-use agent library
- Best for: Quick project setup, pre-configured workflows
- Key feature: Auto-detection, MCP integration, choreography

**Key Dec**ision Framework:**
- Know what to build? -> Domain catalog (99-agents, Claude-007)
- Starting from scratch? -> Methodology (BMAD)
- Want quick setup? -> Claude-007 bootstrap
- Need maximum capability? -> Combine all three

**Int**egration Value:**
The most powerful configuration combines BMAD's methodology structure with domain ecosystem expertise. BMAD controls phases and gates; 99-agents and Claude-007 provide deep technical implementation capability.

---

*Syn**thesis completed: 2026-01-19*
*Sou**rces: 3 extraction documents*
*Lin**es: 1,800+*
