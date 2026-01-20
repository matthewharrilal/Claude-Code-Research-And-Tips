# N-Skills: Universal Agent Skills Marketplace

## You Are Here

**Context:** You're exploring n-skills, a curated marketplace of skills that extend Claude Code and other AI agents with new capabilities. This sits at the intersection of Claude Code's extensibility system and multi-agent orchestration patterns.

**Prerequisite Knowledge:**
- Basic Claude Code usage
- Understanding of skills/plugins in Claude Code
- Familiarity with CLAUDE.md and project configuration

**Where This Fits:**
```
Claude Code Extension Ecosystem
├── Built-in Skills (Claude Code native)
├── Custom Skills (your own SKILL.md files)
├── N-Skills Marketplace ← YOU ARE HERE
│   ├── Workflow Skills (orchestration, open-source-maintainer)
│   ├── Tools (gastown, zai-cli)
│   └── Automation (dev-browser)
└── MCP Servers (external capabilities)
```

**Why This Matters:** N-skills provides production-ready, community-vetted skills that implement patterns like Gas Town orchestration, cc-mirror multi-agent coordination, and browser automation - saving you from building these complex capabilities from scratch.

---

## What This Is

**N-Skills** is a curated plugin marketplace for AI agents built on the philosophy of **"Write once. Run everywhere."** Created by Numman Ali, it enables developers to create skills once and deploy them across multiple AI platforms.

### Repository Stats
- **Stars:** 822+
- **Forks:** 80+
- **License:** Apache 2.0
- **Primary Language:** TypeScript (93.4%)
- **Repository:** https://github.com/numman-ali/n-skills

### Core Standards
N-skills implements three universal standards from the agentskills.io specification:

| Standard | Purpose | Description |
|----------|---------|-------------|
| **SKILL.md** | Skill Definition | Universal format for defining agent capabilities |
| **AGENTS.md** | Discovery File | How agents discover and load available skills |
| **openskills** | Installation | Universal CLI tool for skill management |

### Platform Compatibility
Skills work across:
- Claude Code (primary target)
- GitHub Copilot
- Codex
- Cursor
- Windsurf
- Cline
- OpenCode
- Google Gemini
- Factory Droid

---

## Why It Matters

### The Problem
AI agents are increasingly capable, but often lack the context they need to do real work reliably. Each platform has different extension mechanisms, leading to:
- Fragmented skill ecosystems
- Duplicated development effort
- Platform lock-in
- Inconsistent quality

### The Solution
N-skills provides:

1. **Portable Capabilities** - Write a skill once, use it everywhere
2. **Community Curation** - Quality-vetted skills with active maintenance
3. **Domain Expertise Packaging** - Procedural knowledge in version-controlled packages
4. **On-Demand Loading** - Agents extend abilities based on task at hand

### Key Value Propositions

**For Users:**
- Access production-ready orchestration patterns (Gas Town, cc-mirror)
- Browser automation without setup complexity
- GitHub maintenance automation
- Vision and search capabilities via Z.AI

**For Skill Authors:**
- Single development target for multiple platforms
- Automatic sync from external repositories
- Attribution preservation
- Community visibility

---

## Architecture Deep Dive

### Directory Structure

```
n-skills/
├── .claude-plugin/           # Plugin manifest for Claude Code
├── .github/                  # GitHub Actions for auto-sync
├── assets/                   # Repository assets
├── docs/                     # Documentation
├── scripts/                  # Utility scripts
├── skills/                   # Main skills directory
│   ├── automation/
│   │   └── dev-browser/      # Browser automation skill
│   ├── tools/
│   │   ├── gastown/          # Multi-agent orchestrator
│   │   └── zai-cli/          # Z.AI integration
│   └── workflow/
│       ├── orchestration/    # cc-mirror multi-agent
│       └── open-source-maintainer/  # GitHub maintenance
├── AGENTS.md                 # Universal discovery file
├── CLAUDE.md                 # Points to AGENTS.md
├── CONTRIBUTING.md           # Submission guidelines
└── sources.yaml              # Skill registry manifest
```

### Skill Categories

| Category | Purpose | Example Skills |
|----------|---------|----------------|
| **workflow** | Multi-agent orchestration | orchestration, open-source-maintainer |
| **tools** | CLI utilities and integrations | gastown, zai-cli |
| **automation** | Browser/system automation | dev-browser |
| **development** | Language-specific assistance | (category defined, skills TBD) |
| **productivity** | Workflow automation | (category defined, skills TBD) |
| **data** | Database operations | (category defined, skills TBD) |
| **documentation** | Docs, diagrams, specs | (category defined, skills TBD) |

### SKILL.md Format

Each skill requires a `SKILL.md` file with YAML frontmatter:

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

### Plugin Manifest Structure

The `.claude-plugin` directory contains the manifest that Claude Code uses for skill discovery:

```json
{
  "name": "skill-name",
  "description": "Skill description for marketplace",
  "skills": ["skill-name"]
}
```

**Critical Note:** The `plugin.json` manifest must NOT include a `$schema` key to avoid validation errors.

### Auto-Sync Architecture

External skills maintain automatic synchronization:

```
External Repository          n-skills Marketplace
     ┌──────────┐               ┌──────────┐
     │ SKILL.md │               │ sources. │
     │ scripts/ │──────────────▶│ yaml     │
     │ refs/    │   Daily Sync  │          │
     └──────────┘   via GitHub  └──────────┘
                    Actions           │
                                      ▼
                              ┌──────────────┐
                              │ skills/      │
                              │   category/  │
                              │     skill/   │
                              └──────────────┘
```

**Sync Details:**
- GitHub Actions runs daily cron job
- Compares SHA-256 content hashes (not commit hashes)
- Only syncs when actual file changes occur
- Auto-bumps patch versions across config files
- Preserves attribution via `.source.json`

---

## Key Features

### Available Skills Catalog

#### 1. Orchestration Skill (workflow)

**Purpose:** Multi-agent coordination for complex tasks requiring parallel work and dependency tracking.

**Trigger Conditions:** Features, reviews, refactoring, testing, documentation, or any work benefiting from decomposition.

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
```
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

---

#### 2. Gas Town Skill (tools)

**Purpose:** Multi-agent orchestrator optimized for Claude Code and Opus, implementing Steve Yegge's Gas Town pattern.

**Core Philosophy:** Work distribution like a factory assembly line - tasks are "slung" to specialized workers on their "hooks."

**GUPP Principle:** (Gas Town Universal Propulsion Principle)
> "If there's work on your hook, you run it."

**Architecture Components:**

| Component | Role | Description |
|-----------|------|-------------|
| **Polecats** | Ephemeral Workers | Spawn, execute work, vanish |
| **Crew** | Persistent Helpers | Named agents for ongoing projects |
| **Witness** 🦅 | Monitor | Watches stuck workers, nudges back on track |
| **Refinery** 🦡 | QA | Merges completed work, quality control |
| **Mayor** 🦊 | Coordinator | Dispatches work across rigs |
| **Deacon** ⚙️ | Infrastructure | System health daemon |

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
- **⚡ Auto:** Run commands immediately, report results
- **✋ Approve:** Show commands first, wait for approval

**Response Signatures:**
```
━━ ⛽ Gas Town | Learning ━━
━━ ⛽ Gas Town | Setup ━━
━━ ⛽ Gas Town ━━
```

---

#### 3. Dev-Browser Skill (automation)

**Purpose:** Browser automation with persistent page state across script executions.

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

#### 4. ZAI-CLI Skill (tools)

**Purpose:** Z.AI integration via CLI and MCP for vision, search, and repository exploration.

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

**Output Format:**
- Default: Raw data for efficiency
- JSON: `npx zai-cli --output-format json` wraps as `{ success, data, timestamp }`

---

#### 5. Open-Source-Maintainer Skill (workflow)

**Purpose:** End-to-end GitHub repository maintenance automation.

**Capabilities:**
- Issue triaging
- PR review and analysis
- Contributor activity tracking
- Maintenance report generation
- Persistent project memory

**Operating Principles:**

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

**Approval Required For:**
- Public comments
- Opening/closing issues or PRs
- Label modifications
- Any externally-visible action

---

## Installation & Setup

### Method 1: Claude Code Plugin (Recommended)

```bash
# Add the marketplace
/plugin marketplace add numman-ali/n-skills

# Install specific skill
/plugin install orchestration@n-skills
/plugin install gastown@n-skills
/plugin install dev-browser@n-skills
/plugin install zai-cli@n-skills
/plugin install open-source-maintainer@n-skills
```

### Method 2: Universal Installation (openskills)

```bash
# Install openskills globally
npm i -g openskills

# Install n-skills marketplace
openskills install numman-ali/n-skills

# Sync skills to your agent
openskills sync
```

### Method 3: Codex Installer

```bash
$skill-installer https://github.com/numman-ali/n-skills/tree/main/skills/tools/gastown
```

### Method 4: Manual Clone

```bash
git clone https://github.com/numman-ali/n-skills.git
# Copy desired skills to your project's skills/ directory
```

---

## Configuration Options

### Skill-Specific Configuration

#### Orchestration
```yaml
# In your CLAUDE.md or project config
orchestration:
  cc-mirror-enabled: true
  todowrite-sync: true
  domain-guides:
    - software-development
    - testing
```

#### Gas Town
```yaml
gastown:
  execution-mode: auto  # or "approve"
  enable-witness: true
  enable-refinery: true
```

#### Dev-Browser
```yaml
dev-browser:
  mode: standalone  # or "extension"
  headless: false
  viewport:
    width: 1920
    height: 1080
```

#### ZAI-CLI
```bash
# Environment variable required
export Z_AI_API_KEY="your-api-key"
```

### sources.yaml Configuration

For skill authors registering external skills:

```yaml
version: "1"
skills:
  - name: your-skill-name
    description: "Single-line marketplace description"
    target:
      category: workflow  # or tools, automation, etc.
      path: skills/workflow/your-skill-name
    author:
      name: Your Name
      github: your-github-handle
      twitter: your-twitter  # optional
    license: Apache-2.0
    homepage: https://github.com/you/your-skill
    native: false  # true if maintained in n-skills repo
    source:
      repo: your-github/your-repo
      path: /  # path in source repo
    sync:
      include:
        - SKILL.md
        - references/
        - scripts/
      exclude:
        - node_modules
        - "*.lock"
```

---

## Integration Patterns

### With Ralph

The Ralph Wiggum Loop (`while :; do cat PROMPT.md | claude-code ; done`) can incorporate n-skills for enhanced capabilities.

**Skills in Ralph Loops:**
```bash
# PROMPT.md with skill invocation
/skill orchestration

## Current Task
Decompose and execute the feature in TODO.md

## Constraints
- Use cc-mirror for task tracking
- Spawn parallel workers for independent tasks
- Report completion status
```

**Configuration Example:**
```yaml
# .claude/settings.yaml
skills:
  enabled:
    - orchestration
    - gastown
ralph:
  prompt-file: PROMPT.md
  loop-delay: 5  # seconds between iterations
```

**Integration Value:**
- Skills provide structured orchestration within Ralph's continuous loop
- cc-mirror persists task state across Ralph iterations
- Gas Town agents spawn as Ralph workers

---

### With Gas Town

N-skills can provide specialized capabilities to Gas Town agents.

**Skills for Gas Town Agents:**
```
Gas Town Rig
├── Mayor (orchestration skill loaded)
│   └── Coordinates using cc-mirror tasks
├── Polecat Workers
│   ├── dev-browser skill for web automation
│   ├── zai-cli skill for vision/search
│   └── (any other n-skill)
└── Refinery (quality verification)
```

**Configuration Example:**
```bash
# In gt configuration
gt config set default-skills "orchestration,dev-browser"

# Sling work with skill context
gt sling "web-scrape-task" --skills dev-browser
```

**Integration Pattern:**
```
┌─────────────┐     ┌──────────────┐
│  Gas Town   │────▶│  N-Skills    │
│  Mayor      │     │  Loader      │
└─────────────┘     └──────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌──────────────┐
│  Polecat    │◀────│  Skill       │
│  Worker     │     │  Context     │
└─────────────┘     └──────────────┘
```

---

### With CC-Mirror

CC-Mirror's multi-model orchestration can leverage n-skills for enhanced agent capabilities.

**Skills with Multi-Model:**
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

**Configuration Example:**
```bash
# Load skills for cc-mirror session
npx cc-mirror config set skills "orchestration,zai-cli"

# Skills available to all agents in session
npx cc-mirror tasks create --subject "Research with vision" \
  --description "Use zai-cli vision to analyze screenshots"
```

**Multi-Model Skill Flow:**
```
                    ┌──────────────┐
                    │  CC-Mirror   │
                    │  Controller  │
                    └──────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌───────────┐    ┌───────────┐    ┌───────────┐
   │  Opus     │    │  Sonnet   │    │  Haiku    │
   │  Agent    │    │  Agent    │    │  Agent    │
   │  +zai-cli │    │  +browser │    │  +orch    │
   └───────────┘    └───────────┘    └───────────┘
```

---

### Combination Matrix

| N-Skills + | Use Case | Complexity | Value | Notes |
|------------|----------|------------|-------|-------|
| **Ralph** | Skill-enhanced continuous iteration | Low | High | Skills persist across Ralph loops |
| **Gas Town** | Skilled agent factory | Low | High | Skills loaded per-polecat |
| **CC-Mirror** | Multi-model skill sharing | Low | Medium | Skills available to all agents |
| **Ralph + Gas Town** | Skilled factory in loops | Medium | Very High | Full autonomous operation |
| **CC-Mirror + Gas Town** | Multi-model factory | Medium | High | Different models with different skills |
| **All Three** | Complete orchestration stack | High | Maximum | Production-grade autonomous systems |

### Skill Stacking Patterns

**Pattern 1: Research + Implementation**
```
orchestration + zai-cli + dev-browser
└── Decompose task
    └── Research via web search/vision
        └── Implement via browser automation
```

**Pattern 2: Maintenance Pipeline**
```
open-source-maintainer + orchestration
└── Triage issues/PRs
    └── Decompose fixes to parallel workers
        └── Implement and test
```

**Pattern 3: Full Automation**
```
gastown + all skills
└── Mayor coordinates
    └── Polecats with specialized skills
        └── Each polecat uses appropriate skill
```

---

## Mental Models

### The Skill as Context Injection

Think of skills as **contextual expertise packages** that agents load on-demand:

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

### The Marketplace as Capability Library

N-skills is a **curated library** where each skill is:
- Vetted for quality
- Maintained actively
- Portable across platforms
- Composable with other skills

### Skills vs MCP Servers

| Aspect | Skills | MCP Servers |
|--------|--------|-------------|
| **Nature** | Instructions + context | Tool endpoints |
| **Loading** | On-demand per session | Persistent connections |
| **Scope** | Procedural knowledge | External capabilities |
| **Portability** | Cross-platform | Platform-specific |
| **Composition** | Easy stacking | Requires orchestration |

### The Iron Law of Orchestration

From the orchestration skill:
> "Absorb complexity, radiate simplicity."

This applies to all skill usage:
1. Skills absorb domain complexity
2. Users experience simple, capable agents
3. The machinery stays hidden

---

## Checkpoints

### Installation Verification

After installing n-skills, verify:

**Checkpoint 1: Marketplace Added**
```bash
/plugin marketplace list
# You should see: numman-ali/n-skills
```

**Checkpoint 2: Skills Visible**
```bash
/plugin list
# You should see installed skills
```

**Checkpoint 3: Skill Loads**
```bash
/skill orchestration
# Skill should activate without errors
```

### Skill-Specific Verification

**Orchestration:**
```bash
npx cc-mirror tasks --json
# Should return task list (empty initially)
```

**Gas Town:**
```bash
gt status
# Should show Gas Town engine state
```

**Dev-Browser:**
```bash
./skills/dev-browser/server.sh &
# Should output "Ready" message
```

**ZAI-CLI:**
```bash
npx zai-cli --help
# Should display available commands
```

### Integration Verification

**Ralph + Skills:**
```bash
# Run one Ralph iteration
cat PROMPT.md | claude-code
# Skills should be invoked as specified in PROMPT.md
```

**Gas Town + Skills:**
```bash
gt sling test-bead my-rig
# Polecat should spawn with skill context
```

---

## Troubleshooting

### Common Issues

<details>
<summary><strong>Plugin not found after installation</strong></summary>

**Symptoms:**
- `/plugin list` doesn't show n-skills
- Skills fail to load

**Solutions:**
1. Verify marketplace is added: `/plugin marketplace list`
2. Reinstall: `/plugin marketplace remove numman-ali/n-skills` then re-add
3. Check Claude Code version (skills require recent version)
4. Restart Claude Code session
</details>

<details>
<summary><strong>Skill validation errors</strong></summary>

**Symptoms:**
- "Schema validation failed" errors
- Plugin won't load

**Solutions:**
1. Ensure `plugin.json` has NO `$schema` key
2. Verify SKILL.md has valid YAML frontmatter
3. Check name field matches directory name
4. Run validator: `npx @agentskills/skills-ref validate ./skill-path`
</details>

<details>
<summary><strong>cc-mirror tasks not working</strong></summary>

**Symptoms:**
- "cc-mirror not found" errors
- Tasks not persisting

**Solutions:**
1. Install cc-mirror: `npm i -g cc-mirror`
2. Verify installation: `npx cc-mirror --version`
3. Initialize in project: `npx cc-mirror init`
4. Check permissions on task storage directory
</details>

<details>
<summary><strong>Dev-browser connection failed</strong></summary>

**Symptoms:**
- "Connection refused" errors
- Browser not launching

**Solutions:**
1. Ensure server is running: `./skills/dev-browser/server.sh &`
2. Wait for "Ready" message before running scripts
3. Check port availability (default: varies)
4. For extension mode: verify extension is installed in Chrome
5. Try headless mode: `--headless` flag
</details>

<details>
<summary><strong>ZAI-CLI authentication errors</strong></summary>

**Symptoms:**
- "Unauthorized" or "Invalid API key" errors

**Solutions:**
1. Set environment variable: `export Z_AI_API_KEY="your-key"`
2. Get key from: https://z.ai/manage-apikey/apikey-list
3. Verify key is valid and not expired
4. Check for typos in key value
</details>

<details>
<summary><strong>Gas Town engine won't start</strong></summary>

**Symptoms:**
- `gt up` fails
- "Engine not found" errors

**Solutions:**
1. Install Gas Town: `npm i -g gastown`
2. Initialize: `gt init`
3. Run diagnostics: `gt doctor --fix`
4. Check for port conflicts
5. Verify Node.js version compatibility
</details>

### Skill Submission Failures

<details>
<summary><strong>PR rejected for format issues</strong></summary>

**Checklist:**
- [ ] SKILL.md filename is case-sensitive (not skill.md)
- [ ] Name field ≤64 characters
- [ ] Name matches directory name exactly
- [ ] Description includes use cases and keywords
- [ ] Valid SPDX license identifier
- [ ] No hardcoded secrets or API keys
- [ ] examples/ directory has working examples
</details>

---

## Source Attribution

### Repository Information
- **Name:** n-skills
- **Author:** Numman Ali (@numman-ali)
- **Repository:** https://github.com/numman-ali/n-skills
- **License:** Apache 2.0
- **Stars:** 822+ (as of extraction)
- **Forks:** 80+

### Related Projects
- **openskills:** Universal installation tool
- **agentskills.io:** Open standard specification
- **cc-mirror:** Multi-agent orchestration tool
- **dev-browser:** Originally by SawyerHood

### Key Contributors
- Numman Ali (primary maintainer)
- SawyerHood (dev-browser original author)
- 4 total contributors

### Standard Foundation
N-skills implements the **agentskills.io** open standard, originally developed by **Anthropic** and released for community adoption.

### Reliability Rating
- **Source Quality:** High (822+ stars, active maintenance)
- **Documentation:** Complete (CONTRIBUTING.md, examples)
- **Community:** Active (80+ forks, multiple contributors)
- **Compatibility:** Broad (7+ AI platforms supported)

---

## Version Information

- **Extraction Date:** 2026-01-19
- **Repository State:** Active development
- **Version Scheme:** v1.MAJOR.MINOR
  - MAJOR: New skills or breaking updates
  - MINOR: Bug fixes and documentation

---

## Further Reading

### Within This Knowledge Base
- `synthesis/mastery-ralph-complete.md` - Ralph pattern details
- `extractions/orchestration/` - Gas Town and CC-Mirror extractions
- `synthesis/architecture-complexity-ladder.md` - Where skills fit in complexity

### External Resources
- [N-Skills Repository](https://github.com/numman-ali/n-skills)
- [Agent Skills Specification](https://agentskills.io)
- [Anthropic Skills Examples](https://github.com/anthropics/skills)
- [Dev-Browser Original](https://github.com/SawyerHood/dev-browser)
- [CC-Mirror Documentation](https://github.com/anthropics/cc-mirror)

---

*Extraction complete. This document captures the n-skills marketplace architecture, available skills, integration patterns with Ralph/Gas Town/CC-Mirror, and practical usage guidance.*
