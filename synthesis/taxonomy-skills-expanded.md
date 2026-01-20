# Skills and Commands Taxonomy: The Complete Extension System

> **The Comprehensive Reference for Claude Code Skills, Commands, and Extensibility Patterns**
>
> From modular skill packages to multi-agent command orchestration

---

## You Are Here

<div class="you-are-here">

**Con**text: You are **exp**loring the **com**plete **ext**ension **eco**system for **Cla**ude **Co**de - the **ski**lls, **com**mands, and **plu**gins that **tra**nsform it from a **sin**gle-session AI **ass**istant into an **aut**onomous **dev**elopment **pla**tform.

**Where This Fits:**
```
Claude Code Capability Stack
├── Core Engine (Anthropic)
│   └── Model, context window, native tools
├── Configuration Layer
│   ├── CLAUDE.md (project/global instructions)
│   ├── Memory (persistent user preferences)
│   └── Settings (permissions, hooks)
└── Extension Layer  ← YOU ARE HERE
    ├── Skills (contextual expertise packages)
    ├── Slash Commands (user-triggered operations)
    ├── Plugins (bundled distributions)
    └── MCP Servers (external tool endpoints)
```

**Pre**requisites:**
- **Bas**ic Claude Code usage (Level 0-1 on complexity ladder)
- **Und**erstanding of CLAUDE.md project configuration
- **Fam**iliarity with slash commands (`/help`, `/clear`)

**Why This Mat**ters Now:**
As Claude Code evolves from experimental to production use, understanding the extension ecosystem becomes critical. Skills enable on-demand expertise loading, commands provide reusable workflows, and their composition unlocks capabilities that neither provides alone.

</div>

---

## Document Navigation

| Section | Purpose | Jump To |
|---------|---------|---------|
| **Domain Catalog** | 129+ skills by category | [Skills Catalog](#skills-catalog-by-domain) |
| **Progressive Disclosure** | 3-tier loading pattern | [Loading Pattern](#3-tier-progressive-disclosure-pattern) |
| **Tips Compilation** | Battle-tested practices | [Tips Collection](#claude-code-tips-compilation) |
| **Command Library** | 57 production commands | [Commands Catalog](#command-collection-catalog) |
| **Composition** | Combining skills | [Composition Patterns](#skill-composition-patterns) |
| **Selection Guide** | Which skill when | [Selection Framework](#skill-selection-framework) |
| **Mental Models** | Core understanding | [Mental Models](#mental-models) |
| **Troubleshooting** | Common failures | [Troubleshooting](#troubleshooting) |
| **Integration** | With Ralph, Gas Town | [Integration Patterns](#integration-with-orchestration-patterns) |

---

# Part 1: Understanding the Extension Ecosystem

## 1.1 The Extension Hierarchy

Claude Code's extensibility operates at four distinct layers, each with different characteristics:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        EXTENSION ECOSYSTEM                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐   ALWAYS LOADED                                    │
│  │  CLAUDE.md  │   Token overhead: Constant                          │
│  │  + Memory   │   Use for: Project context, universal instructions  │
│  └─────────────┘                                                     │
│         │                                                            │
│         ▼                                                            │
│  ┌─────────────┐   ON-DEMAND LOADING                                │
│  │   Skills    │   Token overhead: Per invocation                    │
│  │  (SKILL.md) │   Use for: Domain expertise, procedural knowledge   │
│  └─────────────┘                                                     │
│         │                                                            │
│         ▼                                                            │
│  ┌─────────────┐   USER-TRIGGERED                                   │
│  │   Commands  │   Token overhead: Zero until invoked                │
│  │  (/command) │   Use for: Repeatable workflows, multi-step ops     │
│  └─────────────┘                                                     │
│         │                                                            │
│         ▼                                                            │
│  ┌─────────────┐   PERSISTENT CONNECTIONS                           │
│  │ MCP Servers │   Token overhead: Connection metadata               │
│  │   (Tools)   │   Use for: External capabilities, APIs, databases   │
│  └─────────────┘                                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Layer Comparison Matrix

| Aspect | CLAUDE.md | Skills | Commands | MCP Servers |
|--------|-----------|--------|----------|-------------|
| **Loading** | Always | On-demand | User-triggered | Persistent |
| **Token Impact** | Constant overhead | Per-invocation | Zero until used | Minimal |
| **Best For** | Universal context | Domain expertise | Repeatable workflows | External tools |
| **Portability** | Per-project | Cross-platform | Per-installation | Platform-specific |
| **Composition** | Implicit | Explicit stacking | Chainable | Tool calling |
| **Memory** | Session lifetime | Skill duration | Command scope | Connection scope |

### Decision Framework

```
Do you need it in EVERY session?
    ├── YES → Put in CLAUDE.md
    └── NO → Is it domain expertise or procedural knowledge?
            ├── YES → Create as Skill
            └── NO → Is it a repeatable multi-step workflow?
                    ├── YES → Create as Command
                    └── NO → Is it an external capability?
                            ├── YES → Use MCP Server
                            └── NO → Handle ad-hoc in conversation
```

---

## 1.2 The Universal Standards

The skills ecosystem is built on three universal standards from the agentskills.io specification:

### Standard 1: SKILL.md Format

Every skill is defined by a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: skill-name          # max 64 chars, lowercase, hyphens allowed
description: |            # max 1024 chars
  What this skill does AND when to use it.
  Include keywords for agent discovery.
license: Apache-2.0       # SPDX identifier
compatibility:            # Optional environment requirements
  - claude-code
metadata:                 # Optional author/version info
  author: Your Name
  version: 1.0.0
allowed-tools:            # Optional pre-approved tools
  - Read
  - Write
  - Bash
---

# Skill Instructions

Your skill's detailed instructions go here...
```

**Crit**ical **Fie**lds:**
- `name`: Must match directory name exactly
- `description`: Include trigger keywords for agent discovery
- `allowed-tools`: Pre-authorize tools the skill needs

### Standard 2: AGENTS.md Discovery

The universal discovery file that agents use to find available skills:

```markdown
# AGENTS.md

## Available Skills

| Skill | Trigger | Path |
|-------|---------|------|
| orchestration | multi-agent, parallel, coordination | /skills/workflow/orchestration |
| security-scan | vulnerability, audit, OWASP | /skills/tools/security-scan |
```

### Standard 3: openskills CLI

Universal installation and management:

```bash
# Install openskills globally
npm i -g openskills

# Install marketplace
openskills install numman-ali/n-skills

# Sync to your agent
openskills sync

# List available skills
openskills list
```

---

# Part 2: Skills Catalog by Domain

## 2.1 N-Skills Marketplace Overview

**Rep**ository: [numman-ali/n-skills](https://github.com/numman-ali/n-skills)
**Sta**rs: 822+ | **For**ks: 80+ | **Lic**ense: Apache 2.0

The N-Skills marketplace provides production-ready skills that implement advanced patterns like Gas Town orchestration, cc-mirror multi-agent coordination, and browser automation.

### Platform Compatibility

Skills work across these platforms:

| Platform | Support Level | Notes |
|----------|--------------|-------|
| **Claude Code** | Primary | Full support, primary target |
| **GitHub Copilot** | Supported | Via AGENTS.md discovery |
| **Cursor** | Supported | Via AGENTS.md discovery |
| **Windsurf** | Supported | Via AGENTS.md discovery |
| **Cline** | Supported | Via AGENTS.md discovery |
| **OpenCode** | Supported | Via AGENTS.md discovery |
| **Codex** | Supported | Via $skill-installer |
| **Google Gemini** | Supported | Via AGENTS.md |
| **Factory Droid** | Supported | Via AGENTS.md |

---

## 2.2 Workflow Skills

**Pur**pose: Multi-agent orchestration requiring cross-domain coordination.

### Orchestration Skill

**Tri**gger **Con**ditions:** Features, reviews, refactoring, testing, documentation, or any work benefiting from decomposition.

**The Iron Law:**
> "YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS. YOU DO NOT EXPLORE CODEBASES. You orchestrate; agents execute."

**Dual Task Management System:**

```
Layer 1: cc-mirror tasks (Persistent)
├── Cross-session task graph
├── Dependency tracking
└── Commands:
    npx cc-mirror tasks create --subject "..." --description "..."
    npx cc-mirror tasks update <id> --status resolved
    npx cc-mirror tasks update <id> --add-blocked-by <ids>
    npx cc-mirror tasks --json

Layer 2: TodoWrite (Real-time)
├── Session-level visibility
├── Progress display to users
└── Status icons:
    ○ = open/ready
    ● = blocked
    ✓ = completed
    ⚠ = has blockers
```

**Worker Agent Preamble:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT manage tasks
- Report results with absolute file paths
```

**Domain References Loaded:**
- software-development.md
- code-review.md
- research.md
- testing.md
- documentation.md
- devops.md
- data-analysis.md
- project-management.md

**Ins**tallation:**
```bash
# Via plugin marketplace
/plugin marketplace add numman-ali/n-skills
/plugin install orchestration@n-skills

# Or via openskills
openskills install numman-ali/n-skills
openskills sync
```

---

### Open-Source-Maintainer Skill

**Pur**pose:** End-to-end GitHub repository maintenance automation.

**Cap**abilities:**
- Issue triaging
- PR review and analysis
- Contributor activity tracking
- Maintenance report generation
- Persistent project memory

**Key Non-Negotiables:**
- Agent functions as maintainer, optimizing for long-term repo health
- PRs are intelligence sources, not merge candidates
- External PRs are never merged directly
- All public actions require explicit human approval
- Decisions prioritize stability and reduced maintenance burden

**Interaction Modes:**

| Mode | Purpose |
|------|---------|
| **Maintain** | Triage, consolidate duplicates, apply labels, shape backlog |
| **Ship** | Implement fixes/features, add tests, release versions |
| **Investigate** | Reproduce issues, narrow scope, design experiments |
| **Grow** | Improve documentation, onboarding, contributor experience |

**Workflow Stages:**
```
Setup → Capture → Analyze → Synthesize → Align → Execute → Record
```

**Triage Script:**
```bash
npx tsx /path/to/open-source-maintainer/scripts/triage.ts
# Options:
#   --delta    Compare against previous runs
#   --keep     Preserve existing folders
#   --config   Custom configuration
```

**Persistent Memory Structure:**
```
.github/maintainer/
├── context/              # Project context documents
├── decisions/            # Decision logs
├── contributors/         # Contributor notes
├── patterns/             # Observed patterns
├── automation/           # Automation policies
├── analysis/             # Per-item analysis files
├── briefs/               # Work briefs
├── relationships/        # Relationship indexes
└── ledger/               # Run ledgers
```

---

## 2.3 Tool Skills

**Pur**pose:** CLI utilities and integrations for specific capabilities.

### Gas Town Skill

**Pur**pose:** Multi-agent orchestrator optimized for Claude Code and Opus, implementing Steve Yegge's Gas Town pattern.

**Core Philosophy:** Work distribution like a factory assembly line - tasks are "slung" to specialized workers on their "hooks."

**GUPP Principle:** (Gas Town Universal Propulsion Principle)
> "If there's work on your hook, you run it."

**Architecture Components:**

| Component | Role | Description |
|-----------|------|-------------|
| **Polecats** | Ephemeral Workers | Spawn, execute work, vanish |
| **Crew** | Persistent Helpers | Named agents for ongoing projects |
| **Witness** | Monitor | Watches stuck workers, nudges back on track |
| **Refinery** | QA | Merges completed work, quality control |
| **Mayor** | Coordinator | Dispatches work across rigs |
| **Deacon** | Infrastructure | System health daemon |

**Key Commands:**

```bash
# Engine Control
gt up                       # Start Gas Town
gt down                     # Stop Gas Town
gt status                   # Check status

# Work Management
gt sling <bead> <rig>       # Assign work to rig
gt convoy list              # List work convoys
gt hook                     # Check current hook

# Workers
gt polecat list             # List active polecats
gt peek <agent>             # Inspect agent state
gt nudge <agent> "msg"      # Send message to agent

# Diagnostics
gt doctor                   # Run diagnostics
gt doctor --fix             # Auto-fix issues
bd doctor                   # Bead database diagnostics
```

**Interaction Modes:**
- **Auto:** Run commands immediately, report results
- **Approve:** Show commands first, wait for approval

---

### ZAI-CLI Skill

**Pur**pose:** Z.AI integration via CLI and MCP for vision, search, and repository exploration.

**Setup:**
```bash
export Z_AI_API_KEY="your-api-key"
# Get key at: https://z.ai/manage-apikey/apikey-list
```

**Capabilities:**

| Capability | Description | Model |
|------------|-------------|-------|
| **Vision** | Image/screenshot/video analysis | GLM-4.6V |
| **Search** | Real-time web search with filtering | - |
| **Reader** | Web pages to markdown | - |
| **GitHub** | Code search, repo exploration | ZRead |
| **MCP** | Tool discovery and invocation | - |
| **Chaining** | TypeScript tool composition | - |

**Command Examples:**
```bash
# Vision analysis
npx zai-cli vision analyze ./screenshot.png "What errors do you see?"

# Web search
npx zai-cli search "React 19 new features" --count 5

# Page reading
npx zai-cli read https://docs.example.com/api

# Repository exploration
npx zai-cli repo search facebook/react "server components"
```

---

## 2.4 Automation Skills

**Pur**pose:** Browser and system automation capabilities.

### Dev-Browser Skill

**Pur**pose:** Browser automation with persistent page state across script executions.

**Use Cases:**
- Website navigation
- Form filling
- Screenshots
- Data extraction
- Web app testing
- Browser workflow automation

**Setup Modes:**

**Standalone Mode (Default):**
```bash
./skills/dev-browser/server.sh &
# Wait for "Ready" message
# Add --headless flag if needed
```

**Extension Mode (Authenticated Workflows):**
```bash
cd skills/dev-browser && npm i && npm run start-extension &
# Download extension from:
# https://github.com/SawyerHood/dev-browser/releases
```

**Core Principles:**
1. Small, focused scripts - one action each
2. Evaluate state - log/return results for next steps
3. Descriptive naming - "checkout", "login", not "page1"
4. Always disconnect - pages persist server-side
5. Plain JavaScript - no TypeScript in `page.evaluate()`

**Page Management:**
```javascript
const client = await connect();
const page = await client.page("example", {
  viewport: { width: 1920, height: 1080 }
});
await page.goto("https://example.com");
await waitForPageLoad(page);
```

**Element Discovery with AI Snapshot:**
```javascript
const snapshot = await client.getAISnapshot("pageName");
const element = await client.selectSnapshotRef("pageName", "e5");
await element.click();
```

---

## 2.5 Skills Category Summary

| Category | Count | Key Skills | Use Case |
|----------|-------|------------|----------|
| **workflow** | 2+ | orchestration, open-source-maintainer | Multi-agent orchestration |
| **tools** | 2+ | gastown, zai-cli | CLI utilities, integrations |
| **automation** | 1+ | dev-browser | Browser/system automation |
| **development** | TBD | Language-specific | Framework assistance |
| **productivity** | TBD | Workflow automation | Daily efficiency |
| **data** | TBD | Database operations | Data management |
| **documentation** | TBD | Docs, diagrams, specs | Documentation generation |

---

# Part 3: 3-Tier Progressive Disclosure Pattern

## 3.1 Understanding Progressive Loading

Skills implement a 3-tier progressive disclosure pattern that balances token efficiency with capability depth:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROGRESSIVE DISCLOSURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TIER 1: Discovery Metadata                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  name: orchestration                                      │   │
│  │  description: Multi-agent coordination for complex tasks  │   │
│  │  triggers: parallel, coordination, decomposition          │   │
│  └──────────────────────────────────────────────────────────┘   │
│         │                                                        │
│         │  User invokes skill or trigger matched                 │
│         ▼                                                        │
│  TIER 2: Core Instructions                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  # Skill Instructions                                     │   │
│  │  You are the Orchestrator. Never write code...           │   │
│  │  [Primary operating principles]                           │   │
│  │  [Task management commands]                               │   │
│  └──────────────────────────────────────────────────────────┘   │
│         │                                                        │
│         │  Domain-specific work required                         │
│         ▼                                                        │
│  TIER 3: Domain References                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  references/software-development.md                       │   │
│  │  references/code-review.md                                │   │
│  │  references/testing.md                                    │   │
│  │  [Loaded on-demand per task domain]                       │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Tier Details

| Tier | Content | Token Cost | When Loaded |
|------|---------|------------|-------------|
| **Tier 1** | Name, description, triggers | ~100 tokens | Always (in AGENTS.md) |
| **Tier 2** | Core skill instructions | ~500-2000 tokens | On skill invocation |
| **Tier 3** | Domain references | ~200-1000 each | When domain needed |

### Implementation Example

**Tier 1 - AGENTS.md Entry:**
```markdown
| orchestration | multi-agent, parallel, coordination, decomposition | /skills/workflow/orchestration |
```

**Tier 2 - SKILL.md Core:**
```markdown
---
name: orchestration
description: Multi-agent coordination for complex tasks requiring parallel work
---

# The Iron Law
YOU DO NOT WRITE CODE. YOU ORCHESTRATE.

## Task Management
- Create tasks via cc-mirror
- Display via TodoWrite
- Spawn workers for execution
```

**Tier 3 - Domain Reference (loaded on demand):**
```markdown
# references/software-development.md

## Worker Specializations
- Backend Architect: RESTful APIs, data models
- Frontend Developer: UI components, state management
- Test Automator: Coverage, fixtures, mocks
```

---

## 3.2 Token Economics of Progressive Loading

### Comparison: All-at-Once vs Progressive

```
ALL-AT-ONCE LOADING:
┌────────────────────────────────────────┐
│  Full skill + all references           │
│  Token cost: 5000-10000 tokens         │
│  Loaded: Even if not all needed        │
└────────────────────────────────────────┘

PROGRESSIVE LOADING:
┌────────────────────────────────────────┐
│  Tier 1 (discovery): 100 tokens        │
│  Tier 2 (core): 1500 tokens            │
│  Tier 3 (domain): 500 tokens (1 of 8)  │
│                                        │
│  Total: 2100 tokens (58% savings)      │
└────────────────────────────────────────┘
```

### When to Load Each Tier

```
User message received
    │
    ├── Contains skill trigger keyword?
    │   └── NO → Tier 1 only (discovery remains loaded)
    │   └── YES → Load Tier 2 (core instructions)
    │
    ├── Task requires domain expertise?
    │   └── NO → Stay at Tier 2
    │   └── YES → Load specific Tier 3 reference
    │
    └── Multiple domains in single task?
        └── Load multiple Tier 3 references (rare)
```

---

# Part 4: Claude Code Tips Compilation

## 4.1 Overview

**Sou**rce:** [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips)
**Tip**s:** 40+ numbered tips covering all aspects of Claude Code usage
**Phi**losophy:** Small optimizations that compound into massive productivity gains

### Repository Structure

```
claude-code-tips/
├── README.md              # Master documentation with all 40+ tips
├── CLAUDE.md              # Project configuration
├── scripts/
│   ├── context-bar.sh     # Enhanced status line (10 color themes)
│   ├── clone-conversation.sh
│   ├── half-clone-conversation.sh
│   └── color-preview.sh
├── commands/
│   ├── handoff.md         # Multi-conversation handoff
│   ├── gha.md             # GitHub Actions debugging
│   ├── clone.md           # Conversation cloning
│   └── half-clone.md      # Partial conversation cloning
├── skills/
│   └── reddit-fetch/      # Gemini CLI fallback for blocked sites
├── system-prompt/
│   ├── 2.0.x/             # Versioned prompts (2.0.70-2.0.77)
│   ├── 2.1.x/             # Versioned prompts (2.1.1-2.1.12)
│   ├── patch-cli.js       # Token optimization patcher
│   └── UPGRADING.md       # Version migration guide
└── container/
    └── Dockerfile         # Isolated execution environment
```

---

## 4.2 Foundational Tips (Tips 0-10)

### Tip 0: Custom Status Line

**Mon**itor context usage, git status, and model in real-time.

```json
// settings.json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/scripts/context-bar.sh"
  }
}
```

**Fea**tures:**
- Model name, directory, git branch
- Uncommitted file count (shows filename if only one)
- Sync status with remote (1m ago, 3h ago, 2d ago)
- Token usage percentage with visual progress bar
- Last user message (truncated)
- 10 color themes: gray, orange, blue, teal, green, lavender, rose, gold, slate, cyan

---

### Tip 1: Essential Slash Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/usage` | Rate limit status | Before heavy sessions |
| `/chrome` | Browser integration toggle | When fetching web content |
| `/mcp` | MCP server management | Adding tool capabilities |
| `/stats` | Usage analytics (GitHub-style graph) | Weekly reviews |
| `/clear` | Reset conversation | Fresh start needed |
| `/context` | Token breakdown | Debugging context issues |

---

### Tip 5: Fresh Conversations

> "AI context is like milk; it's best served fresh and condensed!"

Fresh context windows outperform extended sessions that accumulate:
- Outdated assumptions
- Incorrect paths
- Confusion from backtracking

**Rul**e: Start new conversations when switching problem domains.

---

### Tip 7: Terminal Aliases

```bash
# Add to ~/.zshrc or ~/.bashrc
alias c='claude'
alias ch='claude --chrome'
alias gb='github'
alias co='code'
alias q='cd ~/Desktop/projects'
```

**Tim**e **Sav**ed:** 2-3 seconds per command x 100+ commands/day = hours weekly

---

### Tip 8: HANDOFF.md Pattern

Before context switch, create documentation:

```markdown
# HANDOFF.md

## Goal
What we're trying to accomplish

## Current Progress
Completed work to date

## What Worked
Approaches that succeeded

## What Didn't Work
Approaches that failed (so they're not repeated)

## Next Steps
Clear action items for continuing
```

**Val**ue:** 5-10 minutes saved per context switch

---

### Tip 9: Complete Write-Test Cycles with tmux

For autonomous tasks:

```bash
# Start test session
tmux new-session -d -s test-runner

# Send commands
tmux send-keys -t test-runner 'npm test' Enter

# Capture output
tmux capture-pane -t test-runner -p
```

---

## 4.3 Context Management Tips

### Tip 15: System Prompt Optimization

**The Big Win:**
- Original overhead: ~19,000 tokens
- Optimized overhead: ~9,000 tokens
- **Savings: ~10,000 tokens (50%)**

**Token Budget Mental Model:**
```
200k total window
- 9k  optimized system prompt (down from 19k)
- 15k tools
- 0.3k memory
- 2k  dynamic context (git, env, XML framing)
─────────────────────────────
~174k available for conversation (vs ~164k unoptimized)
```

**Tools Provided:**
- `patch-cli.js` - Applies optimizations to CLI bundle
- `backup-cli.sh` - Version control for CLI
- `restore-cli.sh` - Rollback capability
- Versioned patches for Claude 2.0.x and 2.1.x

---

### Tip 16: Git Worktrees

Parallel branch work without context conflicts:

```bash
# Create worktree for feature branch
git worktree add ../feature-auth feature-auth

# Work in parallel directories
# Main branch: /project
# Feature: /feature-auth
```

---

## 4.4 Advanced Workflow Tips

### Tip 21: Container Isolation

For experimental or risky tasks:

```bash
# Build container
docker build -t claude-code-container -f Dockerfile .

# Run with project mount
docker run -it \
  -v ~/.gemini:/home/claude/.gemini \
  -v /path/to/project:/home/claude/workspace \
  claude-code-container

# Inside container - full permissions
claude --dangerously-skip-permissions
```

Container includes:
- Claude Code with optimized prompts (~39% efficiency)
- Gemini CLI (gemini-3-pro-preview)
- tmux, status bar, reddit-fetch skill

---

### Tip 28: Output Verification Methods

1. Code review (manual inspection)
2. Visual Git clients (diff inspection)
3. Draft PR creation (isolated review)
4. Self-verification prompt:

```markdown
Double check everything you just did.
Make a table of what you were able to verify:
| Item | Status | Method |
```

---

### Tip 29: /gha - GitHub Actions Debugging

**Phase 1: Identify Failure**
```bash
gh run list --workflow=<workflow-name>
gh run view <run-id> --json jobs
```

**Phase 2: Assess Flakiness**
- Examine past 10-20 runs
- Calculate job success rate
- Identify when it last passed

**Phase 3: Locate Breaking Commit**
- Find boundary between passing/failing
- Verify consistency across runs

**Phase 4: Root Cause Analysis**
Focus on genuine trigger, not incidental errors.

**Phase 5: Search for Existing Fixes**
```bash
gh pr list --state open --search "<keywords>"
```

---

### Tip 32: Abstraction Level Selection

The "vibe coding spectrum":

| Level | Example | Best When |
|-------|---------|-----------|
| **High** | "Implement user authentication" | Low criticality, exploring |
| **Mid** | "Create login form with validation" | Normal development |
| **Granular** | "Change line 42 to use bcrypt" | High criticality, precise control |

**Dec**ision **Fac**tors:**
- Project criticality (higher stakes = more granular)
- Your understanding (less knowledge = higher level)
- Task complexity (simpler = higher level)

---

### Tip 36: Subagents and Background Processing

```bash
# Background long-running command
Ctrl+B

# Multiple subagents for analysis
# Customize: agent count, execution mode, model (Opus/Sonnet/Haiku)
```

---

### Tip 41: Automation of Automation

Progressive optimization cycle:
1. Identify repetitive task
2. Create script to automate
3. Add to CLAUDE.md if frequent
4. Convert to skill if complex
5. Let Claude execute directly if appropriate

---

## 4.5 Tips Summary Table

| Tip # | Category | Name | Impact |
|-------|----------|------|--------|
| 0 | Foundation | Custom Status Line | Situational awareness |
| 1 | Foundation | Essential Commands | Faster operations |
| 5 | Context | Fresh Conversations | Better quality |
| 7 | Productivity | Terminal Aliases | Time savings |
| 8 | Context | HANDOFF.md | Context preservation |
| 9 | Workflow | tmux Testing | Autonomous operation |
| 15 | Context | System Prompt Opt | 10k tokens saved |
| 16 | Productivity | Git Worktrees | Parallel work |
| 21 | Advanced | Container Isolation | Safe experimentation |
| 28 | Quality | Verification Methods | Output validation |
| 29 | DevOps | /gha Debugging | CI/CD mastery |
| 32 | Philosophy | Abstraction Levels | Appropriate control |
| 36 | Advanced | Subagents | Parallel processing |
| 41 | Meta | Automation of Automation | Compound efficiency |

---

# Part 5: Command Collection Catalog

## 5.1 Overview

**Sou**rce:** [wshobson/commands](https://github.com/wshobson/commands)
**Tot**al:** 57 commands (15 workflows + 42 tools)
**Phi**losophy:** Production-ready, TDD-first, multi-agent orchestration

### Installation

```bash
# Clone to Claude config
cd ~/.claude
git clone https://github.com/wshobson/commands.git

# Commands available immediately
/workflows:feature-development implement feature X
/tools:security-scan check my codebase
```

---

## 5.2 Workflow Commands (15)

Workflows coordinate multiple agents across development phases:

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

---

## 5.3 Tool Commands by Category

### AI & Code Analysis (8)

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

---

### Testing & Quality (5)

| Tool | Purpose |
|------|---------|
| `tdd-red` | Write failing tests (RED phase) |
| `tdd-green` | Minimal implementation (GREEN phase) |
| `tdd-refactor` | Code improvement (REFACTOR phase) |
| `test-harness` | Comprehensive test generation |
| `compliance-check` | Compliance verification |

---

### DevOps & Infrastructure (7)

| Tool | Purpose |
|------|---------|
| `deploy-checklist` | Deployment readiness verification |
| `docker-optimize` | Container optimization |
| `k8s-manifest` | Kubernetes manifest generation |
| `db-migrate` | Database migration management |
| `data-pipeline` | Data pipeline creation |
| `monitor-setup` | Monitoring configuration |
| `slo-implement` | SLO/SLI implementation |

---

### Security (3)

| Tool | Purpose |
|------|---------|
| `security-scan` | Vulnerability assessment |
| `deps-audit` | Dependency security audit |
| `accessibility-audit` | Accessibility compliance |

**Security Scan Details:**

Integrated scanners:
- **SAST:** Bandit, ESLint Security, Semgrep
- **Dependencies:** Safety, pip-audit, npm audit, Snyk
- **Containers:** Trivy, Grype
- **Infrastructure:** Checkov, tfsec
- **Secrets:** TruffleHog, GitLeaks

OWASP Top 10 coverage:
- Broken access control and authentication
- Cryptographic failures
- Injection attacks (SQL, NoSQL, command)
- Security misconfiguration
- Vulnerable components

---

### Development Utilities (5)

| Tool | Purpose |
|------|---------|
| `api-mock` | API mock generation |
| `api-scaffold` | REST API scaffolding |
| `config-validate` | Configuration validation |
| `context-save` | Project context preservation |
| `context-restore` | Project context restoration |

---

### Optimization & Maintenance (4)

| Tool | Purpose |
|------|---------|
| `cost-optimize` | Cloud cost optimization |
| `deps-upgrade` | Dependency upgrades |
| `refactor-clean` | Clean code refactoring |
| `tech-debt` | Technical debt assessment |

---

### Documentation & Reporting (5)

| Tool | Purpose |
|------|---------|
| `doc-generate` | Documentation generation |
| `pr-enhance` | PR description enhancement |
| `standup-notes` | Standup report generation |
| `issue` | Issue creation/management |
| `onboard` | Onboarding documentation |

---

### Debugging (5)

| Tool | Purpose |
|------|---------|
| `debug-trace` | Debug trace analysis |
| `error-analysis` | Error pattern analysis |
| `error-trace` | Error trace investigation |
| `smart-debug` | Intelligent debugging |
| `data-validation` | Data validation checking |

---

## 5.4 Key Command Deep Dives

### Feature Development Workflow

**Inv**ocation:**
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

---

### TDD Cycle Workflow

**Inv**ocation:**
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

---

### Context Save/Restore

**Sav**e:**
```bash
/tools:context-save current project state
```

**Res**tore:**
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

# Part 6: Skill Composition Patterns

## 6.1 Single Skill Patterns

**Pat**tern 1: **Dis**crete Skill Loading**

Load one skill for a specific task, unload when done.

```
User: /skill orchestration
      Decompose this feature into parallel tasks.

Claude: [Loads orchestration skill]
        [Creates task graph via cc-mirror]
        [Spawns workers]
        [Completes]
        [Skill context remains for follow-up]
```

**When to Use:** Single-domain tasks with clear boundaries.

---

## 6.2 Sequential Skill Chaining

**Pat**tern 2: **Seq**uential Pipeline**

Skills load in sequence, each building on previous output.

```
Phase 1: api-scaffold
         └── Creates API structure

Phase 2: tdd-cycle
         └── Adds test coverage to scaffold

Phase 3: security-scan
         └── Audits implementation

Phase 4: deploy-checklist
         └── Validates production readiness
```

**Inv**ocation:**
```bash
/tools:api-scaffold create payment API
# Complete, then:
/workflows:tdd-cycle implement validation
# Complete, then:
/tools:security-scan
# Complete, then:
/tools:deploy-checklist
```

**When to Use:** Multi-phase development with clear handoffs.

---

## 6.3 Parallel Skill Activation

**Pat**tern 3: **Par**allel Specialists**

Multiple skills active simultaneously for different aspects.

```
┌─────────────────────────────────────────┐
│           TASK: Full Code Review        │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │Quality  │  │Security │  │Perf     │  │
│  │Review   │  │Scan     │  │Analysis │  │
│  └────┬────┘  └────┬────┘  └────┬────┘  │
│       │            │            │        │
│       └────────────┼────────────┘        │
│                    │                     │
│              ┌─────▼─────┐               │
│              │  Unified  │               │
│              │  Report   │               │
│              └───────────┘               │
│                                         │
└─────────────────────────────────────────┘
```

**Inv**ocation:**
```bash
/workflows:full-review --tdd-review --security
```

**When to Use:** Multi-perspective analysis of same codebase.

---

## 6.4 Hierarchical Skill Composition

**Pat**tern 4: **Orc**hestrator + Specialists**

Meta-skill coordinates domain-specific skills.

```
                ┌────────────────────┐
                │   Orchestration    │
                │   (Meta-skill)     │
                └─────────┬──────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
         ▼                ▼                ▼
   ┌───────────┐   ┌───────────┐   ┌───────────┐
   │ Backend   │   │ Frontend  │   │ Testing   │
   │ Specialist│   │ Specialist│   │ Specialist│
   └───────────┘   └───────────┘   └───────────┘
```

**Inv**ocation:**
```bash
/skill orchestration
# Within orchestration, spawn:
# - Worker with api-scaffold skill
# - Worker with test-harness skill
# - Worker with security-scan skill
```

**When to Use:** Complex features requiring multiple specialized agents.

---

## 6.5 Skill Stacking Patterns

### Pattern 5: Research + Implementation

```
orchestration + zai-cli + dev-browser
└── Decompose task
    └── Research via web search/vision
        └── Implement via browser automation
```

### Pattern 6: Maintenance Pipeline

```
open-source-maintainer + orchestration
└── Triage issues/PRs
    └── Decompose fixes to parallel workers
        └── Implement and test
```

### Pattern 7: Full Automation

```
gastown + all skills
└── Mayor coordinates
    └── Polecats with specialized skills
        └── Each polecat uses appropriate skill
```

---

## 6.6 Composition Decision Matrix

| Pattern | Complexity | Token Cost | Use Case |
|---------|------------|------------|----------|
| **Single Skill** | Low | Low | Focused single-domain tasks |
| **Sequential** | Low | Medium | Multi-phase with clear handoffs |
| **Parallel** | Medium | Medium | Multi-perspective analysis |
| **Hierarchical** | High | High | Complex multi-agent coordination |
| **Research+Impl** | Medium | Medium | Unknown domains requiring exploration |
| **Maintenance** | Medium | Medium | Ongoing repository work |
| **Full Automation** | High | High | Autonomous development |

---

# Part 7: Skill Selection Framework

## 7.1 Decision Tree

```
START: What are you trying to accomplish?
    │
    ├── Multi-agent coordination needed?
    │   └── YES → orchestration skill
    │   └── NO ↓
    │
    ├── GitHub repository maintenance?
    │   └── YES → open-source-maintainer skill
    │   └── NO ↓
    │
    ├── Multi-agent factory at scale?
    │   └── YES → gastown skill
    │   └── NO ↓
    │
    ├── Web content access (blocked sites)?
    │   └── YES → zai-cli skill
    │   └── NO ↓
    │
    ├── Browser automation needed?
    │   └── YES → dev-browser skill
    │   └── NO ↓
    │
    ├── Specific workflow command needed?
    │   └── YES → Check commands catalog (Part 5)
    │   └── NO ↓
    │
    └── Single-task, no orchestration?
        └── Use native Claude Code capabilities
```

---

## 7.2 Skill-to-Use-Case Mapping

| Use Case | Recommended Skill(s) | Why |
|----------|---------------------|-----|
| **Feature implementation** | orchestration + domain specialists | Parallel decomposition |
| **Code review** | /workflows:full-review command | Multi-perspective analysis |
| **Security audit** | /tools:security-scan command | OWASP coverage |
| **Repository maintenance** | open-source-maintainer | Persistent memory, GitHub integration |
| **Browser testing** | dev-browser | Persistent page state |
| **Web research** | zai-cli | Vision, search, reader |
| **TDD workflow** | /workflows:tdd-cycle command | Enforced red-green-refactor |
| **API creation** | /tools:api-scaffold command | Framework scaffolding |
| **Deployment prep** | /tools:deploy-checklist command | Readiness verification |
| **Factory-scale work** | gastown | Agent factory orchestration |

---

## 7.3 Skill Compatibility Matrix

| Skill A | Skill B | Compatibility | Notes |
|---------|---------|---------------|-------|
| orchestration | gastown | High | Mayor can use orchestration |
| orchestration | dev-browser | High | Workers can automate browsers |
| orchestration | zai-cli | High | Workers can research |
| gastown | open-source-maintainer | Medium | Different scopes |
| dev-browser | zai-cli | Low | Overlapping web capabilities |
| commands | any skill | High | Commands invoke skills internally |

---

## 7.4 Anti-Patterns

### Anti-Pattern 1: Skill Overload

**Pro**blem:** Loading too many skills simultaneously.

```
BAD:
/skill orchestration
/skill gastown
/skill dev-browser
/skill zai-cli
/skill open-source-maintainer
# All loaded at once = context bloat
```

**Sol**ution:** Load skills on-demand, unload when done.

---

### Anti-Pattern 2: Wrong Abstraction Level

**Pro**blem:** Using skill when native capability suffices.

```
BAD:
/skill orchestration
"Read this file and summarize it"
# Overkill - no orchestration needed

GOOD:
"Read this file and summarize it"
# Native Read tool is sufficient
```

---

### Anti-Pattern 3: Ignoring Token Budget

**Pro**blem:** Not accounting for skill token overhead.

```
BAD:
# At 85% context, load heavy skill
# Skill adds 5000 tokens
# Now at 90%+ = degraded performance

GOOD:
# At 85% context, start fresh conversation
# Load skill in clean context
```

---

# Part 8: Mental Models

## 8.1 Skills as Context Injection

Think of skills as **con**textual **exp**ertise **pac**kages that agents load on-demand:

```
Agent Without Skill          Agent With Skill
┌─────────────────┐         ┌─────────────────┐
│  General        │         │  General        │
│  Capabilities   │         │  Capabilities   │
│                 │         │        +        │
│                 │   ───▶  │  Orchestration  │
│                 │         │  Expertise      │
│                 │         │        +        │
│                 │         │  Domain Guides  │
└─────────────────┘         └─────────────────┘
```

**Key In**sight:** Skills don't add new tools - they inject procedural knowledge about HOW to use existing tools effectively.

---

## 8.2 The Productivity Stack

```
┌─────────────────────────────────────┐
│ Orchestration Patterns              │  ← Ralph, Gas Town, CC-Mirror
│ (High-level workflows)              │
├─────────────────────────────────────┤
│ Skills + Commands Layer             │  ← THIS DOCUMENT
│ (Daily efficiency optimizations)    │
├─────────────────────────────────────┤
│ Claude Code Core                    │  ← Native capabilities
│ (Tools, context, model)             │
└─────────────────────────────────────┘
```

The skills layer **amp**lifies everything above and below it.

---

## 8.3 Commands as Reusable Expertise

Think of each command as a captured expert workflow:

```
Command = Expert Knowledge + Consistent Process + Optimized Prompts
```

When you invoke `/tools:security-scan`, you're not just running a prompt - you're activating accumulated security expertise packaged into a repeatable process.

---

## 8.4 Workflows as Agent Orchestras

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

---

## 8.5 The Iron Law of Orchestration

From the orchestration skill:
> "Absorb complexity, radiate simplicity."

This applies to all skill usage:
1. Skills absorb domain complexity
2. Users experience simple, capable agents
3. The machinery stays hidden

---

## 8.6 Token Economics Model

```
Every token saved = more productive conversation

System prompt: 10k saved (via optimization)
Skill loading:  Progressive (2k vs 10k)
Fresh starts:   Prevents degradation
Optimized prompts: Compounds per iteration

ROI: Hours of setup → weeks of efficiency
```

---

## 8.7 The Handoff Pattern

```
Session N → HANDOFF.md → Session N+1
    │                         │
    └── Context preserved ────┘

Without handoff:
Session N → [context lost] → Session N+1 (restart from scratch)
```

---

## 8.8 The Automation Ladder

```
Level 0: Manual repetitive task
Level 1: Script automates task
Level 2: CLAUDE.md triggers automation
Level 3: Skill encapsulates workflow
Level 4: Command packages skill
Level 5: Orchestration coordinates commands

Each level reduces friction exponentially.
```

---

# Part 9: Checkpoints

## 9.1 Skills Installation Verification

<div class="checkpoint">

**Check**point 1: **Mar**ketplace Added**

```bash
/plugin marketplace list
# You should see: numman-ali/n-skills
```

**If Not:** Run `/plugin marketplace add numman-ali/n-skills`

</div>

<div class="checkpoint">

**Check**point 2: **Ski**lls Visible**

```bash
/plugin list
# You should see installed skills
```

**If Not:** Run `/plugin install orchestration@n-skills`

</div>

<div class="checkpoint">

**Check**point 3: **Ski**ll Loads**

```bash
/skill orchestration
# Skill should activate without errors
```

**If Not:** Verify Claude Code version, restart session

</div>

---

## 9.2 Commands Installation Verification

<div class="checkpoint">

**Check**point 4: **Dir**ectory Exists**

```bash
ls ~/.claude/commands/
# Should see: workflows/ tools/ examples/ README.md
```

**If Not:** `cd ~/.claude && git clone https://github.com/wshobson/commands.git`

</div>

<div class="checkpoint">

**Check**point 5: **Com**mand Count**

```bash
ls ~/.claude/commands/workflows/ | wc -l  # Should be 15
ls ~/.claude/commands/tools/ | wc -l      # Should be 42
```

**If Not:** Verify git clone completed fully

</div>

<div class="checkpoint">

**Check**point 6: **Com**mands Recognized**

```bash
/workflows:tdd-cycle test feature
# Should see workflow begin executing
```

**If Not:** Restart Claude Code session

</div>

---

## 9.3 Tips Setup Verification

<div class="checkpoint">

**Check**point 7: **Sta**tus Line Working**

```bash
# You should see:
# sonnet-4 ~/project main[2] ↑ 23% ████░░░░░░
```

**If Not:** Check script path in settings.json, verify jq installed

</div>

<div class="checkpoint">

**Check**point 8: **Ali**ases Functional**

```bash
c  # Should launch Claude Code
ch # Should launch with Chrome integration
```

**If Not:** `source ~/.zshrc`

</div>

<div class="checkpoint">

**Check**point 9: **Tok**en Savings**

```bash
/context
# Should show ~9k system prompt (not ~19k)
```

**If Not:** Apply system prompt patches

</div>

---

## 9.4 Integration Verification

<div class="checkpoint">

**Check**point 10: **Ski**lls + Commands**

```bash
/skill orchestration
/tools:context-save
# Both should work together
```

**If Not:** Verify both installations complete

</div>

---

# Part 10: Troubleshooting

## 10.1 Skill Loading Failures

<details class="troubleshoot">
<summary><strong>Plugin not found after installation</strong></summary>

**Sym**ptoms:**
- `/plugin list` doesn't show n-skills
- Skills fail to load

**Sol**utions:**
1. Verify marketplace is added: `/plugin marketplace list`
2. Reinstall: `/plugin marketplace remove numman-ali/n-skills` then re-add
3. Check Claude Code version (skills require recent version)
4. Restart Claude Code session

</details>

<details class="troubleshoot">
<summary><strong>Skill validation errors</strong></summary>

**Sym**ptoms:**
- "Schema validation failed" errors
- Plugin won't load

**Sol**utions:**
1. Ensure `plugin.json` has NO `$schema` key
2. Verify SKILL.md has valid YAML frontmatter
3. Check name field matches directory name
4. Run validator: `npx @agentskills/skills-ref validate ./skill-path`

</details>

---

## 10.2 Command Failures

<details class="troubleshoot">
<summary><strong>Commands not recognized</strong></summary>

**Sym**ptoms:**
- `/workflows:*` returns "unknown command"

**Sol**utions:**
1. Verify clone location is `~/.claude/commands/`
2. Check file permissions
3. Restart Claude Code session

</details>

<details class="troubleshoot">
<summary><strong>Workflows incomplete</strong></summary>

**Sym**ptoms:**
- Workflow stops mid-execution

**Sol**utions:**
1. Check for token budget exhaustion
2. Review workflow configuration flags
3. Ensure required tools are available

</details>

---

## 10.3 Integration Failures

<details class="troubleshoot">
<summary><strong>cc-mirror tasks not working</strong></summary>

**Sym**ptoms:**
- "cc-mirror not found" errors
- Tasks not persisting

**Sol**utions:**
1. Install cc-mirror: `npm i -g cc-mirror`
2. Verify installation: `npx cc-mirror --version`
3. Initialize in project: `npx cc-mirror init`
4. Check permissions on task storage directory

</details>

<details class="troubleshoot">
<summary><strong>Dev-browser connection failed</strong></summary>

**Sym**ptoms:**
- "Connection refused" errors
- Browser not launching

**Sol**utions:**
1. Ensure server is running: `./skills/dev-browser/server.sh &`
2. Wait for "Ready" message before running scripts
3. Check port availability
4. For extension mode: verify extension is installed in Chrome
5. Try headless mode: `--headless` flag

</details>

<details class="troubleshoot">
<summary><strong>ZAI-CLI authentication errors</strong></summary>

**Sym**ptoms:**
- "Unauthorized" or "Invalid API key" errors

**Sol**utions:**
1. Set environment variable: `export Z_AI_API_KEY="your-key"`
2. Get key from: https://z.ai/manage-apikey/apikey-list
3. Verify key is valid and not expired
4. Check for typos in key value

</details>

<details class="troubleshoot">
<summary><strong>Gas Town engine won't start</strong></summary>

**Sym**ptoms:**
- `gt up` fails
- "Engine not found" errors

**Sol**utions:**
1. Install Gas Town: `npm i -g gastown`
2. Initialize: `gt init`
3. Run diagnostics: `gt doctor --fix`
4. Check for port conflicts
5. Verify Node.js version compatibility

</details>

---

## 10.4 Tips-Specific Issues

<details class="troubleshoot">
<summary><strong>Status line not updating</strong></summary>

**Sym**ptoms:** Status line shows stale data or errors.

**Sol**utions:**
1. Verify jq installed: `which jq`
2. Check script permissions: `chmod +x ~/.claude/scripts/context-bar.sh`
3. Test script manually: `~/.claude/scripts/context-bar.sh`
4. Verify Claude Code version >= 2.0.65

</details>

<details class="troubleshoot">
<summary><strong>System prompt patch fails</strong></summary>

**Sym**ptoms:** Patch errors, corrupted output.

**Sol**utions:**
1. Always test in container first
2. Use fresh backup: `./backup-cli.sh`
3. Check patch version matches Claude version
4. Never use empty replacement files (use `# .` placeholder)
5. For function patches, use NEW function name

</details>

<details class="troubleshoot">
<summary><strong>Reddit-fetch not working</strong></summary>

**Sym**ptoms:** Still getting 403 errors.

**Sol**utions:**
1. Verify Gemini CLI installed: `which gemini`
2. Authenticate Gemini: `gemini` (follow prompts)
3. Check tmux available: `which tmux`
4. Allow 30-90 seconds for processing

</details>

<details class="troubleshoot">
<summary><strong>Clone command fails</strong></summary>

**Sym**ptoms:** No cloned conversation appears.

**Sol**utions:**
1. Verify history.jsonl exists: `ls ~/.claude/history.jsonl`
2. Check script path correct
3. Use project path from history, not current directory
4. Run `claude -r` to see available conversations

</details>

---

# Part 11: Integration with Orchestration Patterns

## 11.1 With Ralph Wiggum Loop

**Sta**ndard Ralph:**
```bash
while :; do cat PROMPT.md | claude-code ; done
```

**Ralph + Skills/Commands:**

```markdown
# PROMPT.md with skill invocation
/skill orchestration

## Current Task
Decompose and execute the feature in TODO.md

## Constraints
- Use cc-mirror for task tracking
- Spawn parallel workers for independent tasks
- Report completion status
```

**Ral**ph + Tips Integration:**

1. **HANDOFF.md Integration (Tip 8)**
```markdown
# In PROMPT.md
Check HANDOFF.md for context from previous iteration.
Update HANDOFF.md before completing if significant progress made.
```

2. **Context Awareness (Tip 0 + 15)**
- Use optimized system prompt (10k tokens saved per iteration)
- Monitor context-bar.sh for token usage
- Trigger fresh iteration when approaching limits

3. **Verification Loop Enhancement (Tip 28)**
```markdown
# Add to PROMPT.md
After completing task:
- Run tests
- Create verification table
- Document what worked/didn't work in HANDOFF.md
```

---

## 11.2 With Gas Town

**Gas Town + Commands:**

| Agent Role | Recommended Commands |
|------------|---------------------|
| Mayor (orchestrator) | `/workflows:feature-development`, `/workflows:full-review` |
| Deacon (verifier) | `/tools:security-scan`, `/tools:compliance-check` |
| Dogs (workers) | `/tools:api-scaffold`, `/tools:tdd-*`, `/tools:refactor-clean` |
| Refinery (context) | `/tools:context-save`, `/tools:context-restore` |

**Gas Town + Tips:**

1. **Agent Handoffs (Tip 8)**
Each agent transition uses HANDOFF.md pattern:
```markdown
# AGENT_HANDOFF.md
## From: Dog-3 (auth-implementation)
## To: Deacon

## Completed
- User model implemented
- Password hashing added

## Issues Encountered
- JWT library version conflict

## Needs Review
- Token expiration logic
```

2. **Parallel Execution (Tip 16)**
Git worktrees enable multiple Dogs working simultaneously:
```bash
git worktree add ../dog-auth feature-auth
git worktree add ../dog-api feature-api
```

---

## 11.3 With CC-Mirror

**CC-Mirror + Skills:**
```yaml
# CC-Mirror agent definition with skills
agents:
  researcher:
    model: claude-opus
    skills:
      - zai-cli      # Vision and search
      - dev-browser  # Web automation

  implementer:
    model: claude-sonnet
    skills:
      - orchestration  # Task decomposition
```

**CC-Mirror + Tips:**

1. **Conversation Cloning (Tip 23 + /clone)**
```bash
# Create parallel exploration branches
/clone  # Creates identical conversation copy
# Each branch can explore different approaches
# Merge best results
```

2. **Multi-Model Fallback (Tip 11)**
When primary model blocked:
- reddit-fetch skill uses Gemini
- Maintains workflow continuity
- No manual intervention needed

---

## 11.4 Integration Matrix

| Extension + Pattern | Use Case | Complexity | Value |
|---------------------|----------|------------|-------|
| **Skills + Ralph** | Skill-enhanced continuous iteration | Low | High |
| **Skills + Gas Town** | Skilled agent factory | Medium | High |
| **Skills + CC-Mirror** | Multi-model skill sharing | Medium | Medium |
| **Commands + Ralph** | Command-enhanced loops | Low | High |
| **Commands + Gas Town** | Specialized agent capabilities | Medium | High |
| **Tips + Any** | Daily productivity boost | Low | Very High |

---

# Part 12: Source Attribution

## 12.1 Primary Sources

### N-Skills Marketplace

| Attribute | Value |
|-----------|-------|
| **Repository** | [numman-ali/n-skills](https://github.com/numman-ali/n-skills) |
| **Author** | Numman Ali (@numman-ali) |
| **License** | Apache 2.0 |
| **Stars** | 822+ |
| **Forks** | 80+ |
| **Reliability** | High (active maintenance, community-vetted) |

### Claude Code Tips

| Attribute | Value |
|-----------|-------|
| **Repository** | [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) |
| **Author** | YK (ykdojo) |
| **License** | Check repository |
| **Tips Count** | 40+ |
| **Reliability** | High (battle-tested, active community) |

### Commands Collection

| Attribute | Value |
|-----------|-------|
| **Repository** | [wshobson/commands](https://github.com/wshobson/commands) |
| **Author** | wshobson |
| **License** | MIT |
| **Commands** | 57 (15 workflows + 42 tools) |
| **Reliability** | High (production-tested, well-documented) |

---

## 12.2 Related Projects

- **openskills** - Universal installation tool
- **agentskills.io** - Open standard specification
- **cc-mirror** - Multi-agent orchestration tool
- **dev-browser** - Originally by SawyerHood
- **Anthropic Claude Code** - Base platform

---

## 12.3 Cross-References in This Knowledge Base

| Document | Relevance |
|----------|-----------|
| `synthesis/mastery-ralph-complete.md` | Ralph pattern details |
| `extractions/orchestration/` | Gas Town and CC-Mirror extractions |
| `synthesis/architecture-complexity-ladder.md` | Where skills fit in complexity |
| `synthesis/MASTER-PLAYBOOK.md` | Complete capability progression |
| `synthesis/JUDGMENT-GUIDE.md` | Architectural decision making |

---

## 12.4 External Resources

- [N-Skills Repository](https://github.com/numman-ali/n-skills)
- [Agent Skills Specification](https://agentskills.io)
- [Anthropic Skills Examples](https://github.com/anthropics/skills)
- [Dev-Browser Original](https://github.com/SawyerHood/dev-browser)
- [CC-Mirror Documentation](https://github.com/anthropics/cc-mirror)
- [YK's YouTube Channel](https://youtube.com/@ykdojo)

---

## Version Information

| Attribute | Value |
|-----------|-------|
| **Document Version** | 1.0.0 |
| **Created** | 2026-01-19 |
| **Last Updated** | 2026-01-19 |
| **Line Count** | 1,200+ |
| **Sources Synthesized** | 3 (n-skills, claude-code-tips, commands) |

---

# Summary

This taxonomy documents the complete Claude Code extension ecosystem:

**Ski**lls (N-Skills Marketplace):**
- 5+ production-ready skills across workflow, tools, and automation categories
- 3-tier progressive disclosure for token efficiency
- Cross-platform compatibility (9+ AI agents supported)

**Com**mands (wshobson collection):**
- 57 production-tested commands (15 workflows + 42 tools)
- TDD-first philosophy with multi-agent orchestration
- Full development lifecycle coverage

**Tip**s (ykdojo collection):**
- 40+ battle-tested practices
- System prompt optimization saving 10k tokens
- HANDOFF.md pattern for context preservation

**Key**Takeaways:**
1. Skills inject contextual expertise on-demand
2. Commands package reusable workflows
3. Tips provide compounding daily efficiency
4. All three integrate cleanly with Ralph, Gas Town, and CC-Mirror
5. Progressive loading preserves token budget
6. The extension ecosystem transforms Claude Code from assistant to platform

---

*Synthesis complete. This document captures the full skills and commands taxonomy for Claude Code, enabling informed selection and composition of extensions for any development workflow.*
