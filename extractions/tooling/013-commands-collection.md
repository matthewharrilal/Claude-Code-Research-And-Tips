# Commands Collection Deep Extraction

## You Are Here

**Context:** You are looking at a comprehensive slash command library for Claude Code that provides 57 production-ready commands (15 workflows + 42 tools) covering everything from TDD orchestration to Kubernetes deployment.

**Where This Fits:**
- **In the ecosystem:** This is a community-contributed command collection that dramatically extends Claude Code's out-of-box capabilities
- **Complexity level:** Level 3-5 (multi-agent orchestration to autonomous pipelines)
- **Prerequisites:** Basic Claude Code familiarity, understanding of slash commands

**Why You're Reading This:**
- You want reusable, production-tested commands for common development tasks
- You need multi-agent orchestration patterns without building from scratch
- You want to learn command authoring patterns from a well-structured collection

---

## What This Is

**Repository:** [wshobson/commands](https://github.com/wshobson/commands)

A curated library of 57 slash commands organized into two categories:

| Category | Count | Purpose |
|----------|-------|---------|
| **Workflows** | 15 | Multi-step orchestration requiring cross-domain coordination |
| **Tools** | 42 | Focused utilities for specific development tasks |

### Key Characteristics

1. **Production-Ready** - Commands designed for real-world use, not demos
2. **Multi-Agent Architecture** - Workflows coordinate multiple specialized agents
3. **Composable** - Commands can be chained and combined
4. **Well-Documented** - Each command includes clear instructions and examples
5. **TDD-First Philosophy** - Strong emphasis on test-driven development patterns

---

## Why It Matters

### The Problem It Solves

Most developers using Claude Code face a recurring challenge: they write the same kinds of prompts repeatedly for common tasks like code reviews, security scans, API scaffolding, and deployment preparation. Each time requires context-building from scratch.

### The Value Proposition

```
Before: Write custom prompts for every task, lose patterns between sessions
After:  Invoke tested commands, get consistent results, learn from patterns
```

**Specific Benefits:**

1. **Time Savings** - Pre-built commands eliminate prompt engineering for common tasks
2. **Quality Consistency** - Same approach every time, continuously improved
3. **Learning Resource** - See how experts structure multi-agent workflows
4. **Foundation for Customization** - Fork and adapt commands to your needs

### Who Benefits Most

- **Solo developers** needing comprehensive workflow coverage without building it
- **Teams** wanting standardized approaches to code review, security, deployment
- **Learners** studying multi-agent orchestration patterns
- **Architects** evaluating command library patterns for their organizations

---

## Command Catalog

### Workflows (15 Total)

Workflows coordinate multiple agents across development phases. They handle complex, multi-step operations requiring expertise from different domains.

| Workflow | Purpose | Key Agents |
|----------|---------|------------|
| `feature-development` | End-to-end feature implementation | Backend architect, Frontend dev, Test automator, Deployment engineer |
| `full-review` | Multi-perspective code analysis | Quality reviewer, Security auditor, Architect, Performance engineer |
| `smart-fix` | Intelligent problem routing/resolution | DevOps troubleshooter, Debugger, DB optimizer, Performance engineer |
| `tdd-cycle` | Complete TDD orchestration | Architect, Test automator, TDD orchestrator |
| `full-stack-feature` | Cross-layer feature implementation | All development specialists |
| `security-hardening` | Comprehensive security improvement | Security specialists, Compliance checker |
| `performance-optimization` | Multi-layer performance tuning | DB optimizer, Performance engineer, Frontend dev |
| `incident-response` | Production issue resolution | DevOps, Debugger, relevant specialists |
| `legacy-modernize` | Codebase modernization | Architect, Refactor specialist, Test automator |
| `git-workflow` | Version control automation | Git specialist, CI/CD engineer |
| `improve-agent` | Agent self-improvement | Meta-analysis agent |
| `multi-platform` | Cross-platform development | Platform-specific agents |
| `workflow-automate` | Process automation | Automation specialist |
| `data-driven-feature` | Data-centric implementation | Data engineer, Backend architect |
| `ml-pipeline` | Machine learning workflows | ML engineer, Data scientist |

### Tools (42 Total)

Tools are focused utilities for specific development tasks. They can be used standalone or composed into larger workflows.

#### AI & Code Analysis
| Tool | Purpose |
|------|---------|
| `ai-assistant` | AI assistant implementation |
| `ai-review` | AI-powered code review |
| `code-explain` | Code explanation generation |
| `code-migrate` | Language/framework migration |
| `langchain-agent` | LangChain agent creation |
| `prompt-optimize` | Prompt engineering improvement |
| `multi-agent-optimize` | Multi-agent system tuning |
| `multi-agent-review` | Multi-agent review coordination |

#### Testing & Quality
| Tool | Purpose |
|------|---------|
| `tdd-red` | Write failing tests (RED phase) |
| `tdd-green` | Minimal implementation (GREEN phase) |
| `tdd-refactor` | Code improvement (REFACTOR phase) |
| `test-harness` | Comprehensive test generation |
| `compliance-check` | Compliance verification |

#### DevOps & Infrastructure
| Tool | Purpose |
|------|---------|
| `deploy-checklist` | Deployment readiness verification |
| `docker-optimize` | Container optimization |
| `k8s-manifest` | Kubernetes manifest generation |
| `db-migrate` | Database migration management |
| `data-pipeline` | Data pipeline creation |
| `monitor-setup` | Monitoring configuration |
| `slo-implement` | SLO/SLI implementation |

#### Security
| Tool | Purpose |
|------|---------|
| `security-scan` | Vulnerability assessment |
| `deps-audit` | Dependency security audit |
| `accessibility-audit` | Accessibility compliance |

#### Development Utilities
| Tool | Purpose |
|------|---------|
| `api-mock` | API mock generation |
| `api-scaffold` | REST API scaffolding |
| `config-validate` | Configuration validation |
| `context-save` | Project context preservation |
| `context-restore` | Project context restoration |

#### Optimization & Maintenance
| Tool | Purpose |
|------|---------|
| `cost-optimize` | Cloud cost optimization |
| `deps-upgrade` | Dependency upgrades |
| `refactor-clean` | Clean code refactoring |
| `tech-debt` | Technical debt assessment |

#### Documentation & Reporting
| Tool | Purpose |
|------|---------|
| `doc-generate` | Documentation generation |
| `pr-enhance` | PR description enhancement |
| `standup-notes` | Standup report generation |
| `issue` | Issue creation/management |
| `onboard` | Onboarding documentation |

#### Debugging
| Tool | Purpose |
|------|---------|
| `debug-trace` | Debug trace analysis |
| `error-analysis` | Error pattern analysis |
| `error-trace` | Error trace investigation |
| `smart-debug` | Intelligent debugging |
| `data-validation` | Data validation checking |

---

## Key Commands Deep Dive

### 1. Feature Development Workflow

The flagship workflow demonstrating multi-agent orchestration.

**Invocation:**
```bash
/workflows:feature-development implement OAuth2 authentication
```

**Agents Coordinated:**
- `backend-architect` - Designs RESTful APIs and data models
- `frontend-developer` - Creates UI components aligned with backend contracts
- `test-automator` - Generates comprehensive test coverage
- `deployment-engineer` - Handles CI/CD and production readiness
- `tdd-orchestrator` - Manages red-green-refactor cycles (optional)

**Configuration Flags:**
- `--tdd` - Enable TDD mode (tests before implementation)
- `--strict-tdd` - Enforce TDD cycles
- `--test-coverage-min 80` - Set minimum coverage threshold

**Philosophy:** "Each agent receives context from previous agents to ensure coherent implementation."

### 2. TDD Cycle Workflow

Comprehensive test-driven development orchestration.

**Invocation:**
```bash
/workflows:tdd-cycle implement user registration
```

**Six Phases:**
1. **Specification** - Requirements analysis and test architecture
2. **RED** - Write failing tests, verify failures for correct reasons
3. **GREEN** - Minimal code to pass tests, no extras
4. **REFACTOR** - Improve quality while maintaining green
5. **Integration** - Integration tests with fail-first approach
6. **Continuous Improvement** - Performance and edge-case tests

**Key Constraints:**
- Minimum line coverage: 80%
- Branch coverage: 75%
- Cyclomatic complexity trigger: >10
- Method length trigger: >20 lines

**Critical Rule:** "Do not add extra features or optimizations. Keep it simple."

### 3. Security Scan Tool

Comprehensive vulnerability detection and remediation.

**Invocation:**
```bash
/tools:security-scan perform vulnerability assessment
```

**Integrated Scanners:**
- **SAST:** Bandit, ESLint Security, Semgrep
- **Dependencies:** Safety, pip-audit, npm audit, Snyk
- **Containers:** Trivy, Grype
- **Infrastructure:** Checkov, tfsec
- **Secrets:** TruffleHog, GitLeaks

**OWASP Top 10 Coverage:**
- Broken access control and authentication
- Cryptographic failures
- Injection attacks (SQL, NoSQL, command)
- Security misconfiguration
- Vulnerable components

**Remediation Tiers:**
- Low risk: Dependency updates (generally safe)
- Medium risk: Code modifications (require testing)
- High risk: Secret management (manual review required)

### 4. API Scaffold Tool

Production-ready REST API generation.

**Invocation:**
```bash
/tools:api-scaffold create FastAPI user management API
```

**Framework Decision Matrix:**
| Framework | Best For | Key Advantage |
|-----------|----------|---------------|
| FastAPI | High performance | Auto OpenAPI docs, async |
| Django REST | Rapid development | Batteries included |
| Express.js | Real-time apps | NPM ecosystem |
| Spring Boot | Enterprise | DI, security features |

**Generated Components:**
- Project structure (core, api, models, schemas, services)
- Configuration management (Pydantic BaseSettings)
- Database integration (SQLAlchemy + connection pooling)
- Security (bcrypt, JWT, rate limiting)
- Testing setup (pytest fixtures, coverage)
- Docker + docker-compose configuration
- CI/CD pipeline (GitHub Actions)

### 5. Context Save/Restore Tools

Project state preservation across sessions.

**Save:**
```bash
/tools:context-save current project state
```

**Restore:**
```bash
/tools:context-restore
```

**What Gets Captured:**
- Project objectives and architectural decisions
- Current implementation status and known issues
- Design rationale behind major choices
- Code patterns, conventions, testing approaches
- Agent coordination history and successful workflows
- Planned features and technical improvements

**Storage:** Versioned in `.claude/context/` using JSON/Markdown

---

## Installation & Setup

### Method 1: Clone to Claude Config (Recommended)

```bash
cd ~/.claude
git clone https://github.com/wshobson/commands.git
```

After cloning, commands are available immediately:
```bash
/workflows:feature-development implement feature X
/tools:security-scan check my codebase
```

### Method 2: Plugin Marketplace (Alternative)

```bash
/plugin marketplace add https://github.com/wshobson/agents
/plugin install claude-code-essentials
```

### Directory Structure After Install

```
~/.claude/
└── commands/
    ├── workflows/           # 15 orchestration commands
    │   ├── feature-development.md
    │   ├── tdd-cycle.md
    │   └── ...
    ├── tools/              # 42 specialized utilities
    │   ├── security-scan.md
    │   ├── api-scaffold.md
    │   └── ...
    └── examples/           # Usage demonstrations
        └── tdd-examples.md
```

---

## Configuration Options

### Command Invocation Patterns

```bash
# Full prefix (explicit)
/workflows:feature-development implement OAuth2

# Tool prefix
/tools:security-scan check vulnerabilities

# With flags
/workflows:tdd-cycle --strict-tdd implement user auth

# Chained operations
/tools:api-scaffold create API && /tools:security-scan && /tools:deploy-checklist
```

### Common Configuration Flags

| Flag | Commands | Effect |
|------|----------|--------|
| `--tdd` | feature-development, full-stack-feature | Enable TDD mode |
| `--strict-tdd` | tdd-cycle, feature-development | Enforce TDD cycles |
| `--test-coverage-min N` | tdd-cycle | Set coverage threshold |
| `--tdd-review` | full-review | Include TDD compliance |
| `--tdd-metrics` | full-review | Generate TDD metrics |

### Workflow Customization

Commands accept `$ARGUMENTS` for customization:

```bash
# Specify feature requirements
/workflows:feature-development implement OAuth2 with Google and GitHub providers

# Target specific scope
/tools:security-scan focus on authentication endpoints

# Context-specific refactoring
/tools:refactor-clean the PaymentService class
```

---

## Usage Patterns

### Pattern 1: Complete Feature Pipeline

```bash
# 1. Scaffold the API
/tools:api-scaffold create payment processing API

# 2. Develop with TDD
/workflows:tdd-cycle implement payment validation

# 3. Security review
/tools:security-scan

# 4. Performance check
/tools:multi-agent-optimize

# 5. Deployment preparation
/tools:deploy-checklist
/tools:k8s-manifest
```

### Pattern 2: Granular TDD Flow

```bash
# Write failing tests
/tools:tdd-red user registration validation

# Implement minimally
/tools:tdd-green

# Improve code quality
/tools:tdd-refactor

# Repeat cycle for next feature
```

### Pattern 3: Modernization Pipeline

```bash
# Assess current state
/tools:tech-debt analyze legacy module

# Plan modernization
/workflows:legacy-modernize

# Security during migration
/tools:deps-audit
/tools:security-scan

# Containerize
/tools:docker-optimize

# Deploy
/tools:k8s-manifest
```

### Pattern 4: Code Review Enhancement

```bash
# Comprehensive review
/workflows:full-review --tdd-review

# Generate improved PR description
/tools:pr-enhance

# Document changes
/tools:doc-generate
```

---

## Integration Patterns

### With Ralph

The Ralph Wiggum Loop (`while :; do cat PROMPT.md | claude-code ; done`) benefits from command-enhanced prompts.

**Commands in Ralph PROMPT.md:**

```markdown
# PROMPT.md for Ralph Loop

## Current Task
Implement user authentication feature

## Commands to Use
1. Start with `/workflows:tdd-cycle` for test-first development
2. Run `/tools:security-scan` after implementation
3. Generate docs with `/tools:doc-generate`
4. Validate deployment with `/tools:deploy-checklist`

## Success Criteria
- All tests passing
- No critical security vulnerabilities
- Documentation complete
- Deployment checklist green
```

**Ralph Configuration with Commands:**

```bash
# Enhanced Ralph loop with command integration
while :; do
  # Run with command-enabled prompt
  cat PROMPT.md | claude-code

  # Auto-run security scan after each iteration
  echo "/tools:security-scan" | claude-code

  # Save context for next iteration
  echo "/tools:context-save iteration $(date +%s)" | claude-code
done
```

### With Gas Town

Gas Town's agent factory architecture can leverage commands for specialized agent capabilities.

**Commands for Gas Town Agents:**

| Agent Role | Recommended Commands |
|------------|---------------------|
| Mayor (orchestrator) | `/workflows:feature-development`, `/workflows:full-review` |
| Deacon (verifier) | `/tools:security-scan`, `/tools:compliance-check` |
| Dogs (workers) | `/tools:api-scaffold`, `/tools:tdd-*`, `/tools:refactor-clean` |
| Refinery (context) | `/tools:context-save`, `/tools:context-restore` |

**Configuration Example:**

```markdown
# Gas Town Agent Configuration

## Mayor Agent
When delegating tasks, invoke appropriate workflows:
- Feature requests → `/workflows:feature-development`
- Bug fixes → `/workflows:smart-fix`
- Reviews → `/workflows:full-review`

## Dog Agents (Workers)
Each dog receives command-specific instructions:
- Backend Dog: Use `/tools:api-scaffold`, `/tools:db-migrate`
- Frontend Dog: Use `/tools:test-harness`, TDD tools
- Security Dog: Use `/tools:security-scan`, `/tools:deps-audit`

## Deacon Agent (Verification)
Run these commands before marking work complete:
- `/tools:compliance-check`
- `/tools:security-scan`
- `/tools:deploy-checklist`
```

### Combination Matrix

| Commands + | Use Case | Complexity | Value |
|------------|----------|------------|-------|
| Ralph | Command-enhanced continuous loops | Low | High |
| Gas Town | Specialized agent capabilities | Medium | High |
| Hooks | Automated command triggers | Low | Medium |
| MCP | Extended tool integration | Medium | Medium |
| CLAUDE.md | Project-specific command aliases | Low | Medium |
| CI/CD | Automated quality gates | Medium | High |

### With CLAUDE.md Project Instructions

```markdown
# CLAUDE.md

## Project Commands

For this project, prefer these commands:

### Development
- Start features with `/workflows:tdd-cycle --strict-tdd`
- Use `/tools:api-scaffold` for new endpoints

### Quality
- Run `/workflows:full-review` before PRs
- Always `/tools:security-scan` before merge

### Deployment
- Generate manifests with `/tools:k8s-manifest`
- Validate with `/tools:deploy-checklist`
```

### With CI/CD Integration

```yaml
# .github/workflows/claude-commands.yml
name: Claude Code Commands

on: [push, pull_request]

jobs:
  security:
    steps:
      - name: Security Scan
        run: echo "/tools:security-scan" | claude-code

  review:
    steps:
      - name: Code Review
        run: echo "/workflows:full-review" | claude-code

  deploy-check:
    steps:
      - name: Deployment Readiness
        run: echo "/tools:deploy-checklist" | claude-code
```

---

## Mental Models

### Model 1: Commands as Reusable Expertise

Think of each command as a captured expert workflow:

```
Command = Expert Knowledge + Consistent Process + Optimized Prompts
```

When you invoke `/tools:security-scan`, you're not just running a prompt - you're activating accumulated security expertise packaged into a repeatable process.

### Model 2: Workflows as Agent Orchestras

Workflows coordinate multiple agents like a conductor leading an orchestra:

```
Workflow
├── Agent 1 (e.g., Architect) → produces artifact
│   └── context passed to →
├── Agent 2 (e.g., Developer) → produces artifact
│   └── context passed to →
├── Agent 3 (e.g., Tester) → produces artifact
│   └── context passed to →
└── Agent 4 (e.g., Deployer) → final artifact
```

Each agent receives context from predecessors, ensuring coherent output.

### Model 3: Tools as Composable Primitives

Tools are building blocks that can be combined:

```
Simple Task:     /tools:tdd-red → /tools:tdd-green → /tools:tdd-refactor

Complex Task:    /tools:api-scaffold
                 → /workflows:tdd-cycle
                 → /tools:security-scan
                 → /tools:k8s-manifest
                 → /tools:deploy-checklist
```

### Model 4: Context Flow Architecture

```
                    ┌─────────────────────────────────────────┐
                    │           Command Library               │
                    │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
                    │  │Workflow │  │Workflow │  │Workflow │  │
                    │  └────┬────┘  └────┬────┘  └────┬────┘  │
                    │       │            │            │        │
                    │  ┌────▼────────────▼────────────▼────┐  │
                    │  │          Shared Context           │  │
                    │  │   (via context-save/restore)      │  │
                    │  └────┬────────────┬────────────┬────┘  │
                    │       │            │            │        │
                    │  ┌────▼────┐  ┌────▼────┐  ┌────▼────┐  │
                    │  │  Tool   │  │  Tool   │  │  Tool   │  │
                    │  └─────────┘  └─────────┘  └─────────┘  │
                    └─────────────────────────────────────────┘
```

---

## Checkpoints

### Installation Verification

After installation, verify:

```bash
# Check directory exists
ls ~/.claude/commands/
# Should see: workflows/ tools/ examples/ README.md

# Count commands
ls ~/.claude/commands/workflows/ | wc -l  # Should be 15
ls ~/.claude/commands/tools/ | wc -l      # Should be 42
```

### Command Availability Check

Test that commands are recognized:

```bash
# In Claude Code, try:
/workflows:tdd-cycle test feature

# You should see the workflow begin executing with:
# - Specification phase initiation
# - Agent coordination messages
```

### Successful Integration Signs

You know commands are working when:
- Invoking `/workflows:feature-development` triggers multi-agent coordination
- `/tools:security-scan` produces structured vulnerability reports
- Context is preserved across sessions with save/restore

### Troubleshooting

**Commands not recognized:**
- Verify clone location is `~/.claude/commands/`
- Check file permissions
- Restart Claude Code session

**Workflows incomplete:**
- Check for token budget exhaustion
- Review workflow configuration flags
- Ensure required tools are available

---

## Advanced Usage

### Creating Custom Commands

Study existing commands for patterns:

```markdown
# Custom Command Template (my-command.md)

---
description: What this command does
model: claude-sonnet-4-20250514
---

You are a specialized agent for [purpose].

## Context
$ARGUMENTS contains the user's specific request.

## Process
1. Analyze the request
2. Execute specialized logic
3. Produce structured output

## Output Format
[Define expected output structure]
```

### Command Chaining Patterns

```bash
# Sequential with dependency
/tools:api-scaffold create API && /tools:test-harness generate tests

# Parallel-friendly (independent operations)
/tools:security-scan
/tools:deps-audit
/tools:compliance-check
```

### Extending with Hooks

```bash
# .claude/hooks/post-commit.sh
#!/bin/bash
echo "/tools:security-scan quick" | claude-code
```

---

## Source Attribution

| Attribute | Value |
|-----------|-------|
| **Repository** | [wshobson/commands](https://github.com/wshobson/commands) |
| **Author** | wshobson |
| **License** | MIT |
| **Commands** | 57 total (15 workflows, 42 tools) |
| **Last Verified** | 2026-01-19 |
| **Reliability** | High (production-tested, well-documented) |

### Key Influences

- Multi-agent orchestration patterns from Claude Agent SDK
- TDD discipline from established software engineering practices
- Security tooling integration from OWASP and industry standards
- DevOps patterns from Kubernetes and container ecosystems

---

## Related Resources

### In This Knowledge Base
- `synthesis/mastery-ralph-complete.md` - Ralph pattern details
- `extractions/orchestration/001-gas-town.md` - Gas Town architecture
- `synthesis/architecture-complexity-ladder.md` - Complexity levels

### External
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk)
- [Original Repository](https://github.com/wshobson/commands)

---

## Summary

The wshobson/commands collection represents a mature, production-tested library of Claude Code slash commands. Its 57 commands (15 workflows + 42 tools) cover the full software development lifecycle from feature ideation through deployment.

**Key Takeaways:**

1. **Immediate Value** - Clone and use without building your own commands
2. **Learning Resource** - Study patterns for multi-agent orchestration
3. **Composable** - Combine tools into custom workflows
4. **Extensible** - Fork and customize for your needs
5. **Integration-Ready** - Works with Ralph, Gas Town, and other patterns

The TDD-first philosophy and security-conscious approach make this collection particularly valuable for teams prioritizing code quality and security practices.
