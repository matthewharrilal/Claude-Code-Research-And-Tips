# GitHub Community Tools for Claude Code - Exhaustive Research

**Research Date:** 2026-01-09
**Research Status:** Compiled from verified community sources. Note: Some live GitHub links may need manual verification as web fetching was limited during research.

---

# Table of Contents

1. [CC Mirror - Multi-Agent Orchestration](#cc-mirror)
2. [Gas Town - Agent Factory](#gas-town)
3. [OpenCode & Alternatives](#opencode-alternatives)
4. [Community Plugins](#community-plugins)
5. [Orchestration Frameworks](#orchestration-frameworks)
6. [MCP Servers](#mcp-servers)
7. [Skill Repositories](#skill-repositories)
8. [Wrapper Scripts & Utilities](#wrapper-utilities)
9. [Integration Tools](#integration-tools)
10. [Monitoring & Visualization](#monitoring-visualization)
11. [Configuration Resources](#configuration-resources)
12. [Related Gas Town Extensions](#gas-town-extensions)
13. [Ralph Loop Variants](#ralph-variants)

---

<a name="cc-mirror"></a>
# CC Mirror

## Source
- **Repo:** https://github.com/numman-ali/cc-mirror
- **Author:** @nummanali (Numman Ali) - CTO at UK FinTech
- **Engagement:** 791 likes, 107K views on announcement thread

## What It Does

CC Mirror unlocks Claude Code's disabled multi-agent orchestration feature by creating an isolated variant environment. The feature exists within Claude Code's codebase but is disabled by default. CC Mirror patches the minified JavaScript to enable these hidden capabilities.

### Native Task Management API Enabled:
- `TaskCreate` - Create with subject, description, acceptance criteria
- `TaskList` - Filter by status, owner, blocked state
- `TaskGet` - Full context with description, comments, dependencies
- `TaskUpdate` - Claim, add comments, resolve, link references
- `addBlocks` / `addBlockedBy` - Dependency management

### Demo Output:
```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
[X] #1 Design API architecture
[ ] #2 Create project structure
[ ] #3 Implement data models
[*] #4 Implement REST API endpoints (blocked by #3)
[*] #5 Write integration tests (blocked by #4)
```

## Installation

```bash
# Step 1: Create isolated variant
npx cc-mirror quick --provider mirror --name mclaude

# Step 2: Launch it
mclaude

# Step 3: In the terminal
"Load the orchestration skill and initiate"
```

## Key Features

- 3-step installation to full multi-agent orchestration
- Isolated from main Claude Code installation
- Provider-flexible: mirror, GLM-4.7, Z.ai, MiniMax, OpenRouter, LiteLLM
- Native task dependency graph with blockedBy/addBlocks
- CLI-based agent monitoring with keyboard navigation
- Pre-packaged orchestration skill (~5,299 tokens)

## Provider Options

```bash
# Mirror provider (default - uses Claude's internal primitives)
npx cc-mirror quick --provider mirror --name mclaude

# GLM-4.7 provider (good multi-agent coordination)
npx cc-mirror quick --provider glm --name glm-claude

# OpenRouter provider
npx cc-mirror quick --provider openrouter --name or-claude

# LiteLLM provider
npx cc-mirror quick --provider litellm --name lite-claude
```

## Why It's Valuable

Covers 80% of orchestration use cases with zero custom development. Native Claude Code infrastructure with task persistence, dependency management, and visual tracking that would take days/weeks to build from scratch.

**Key Trade-off:** High initial skill cost (5,299 tokens) but saves tokens through delegation to workers.

## Actionability

**[GREEN]** - Quick win, under 5 minutes setup

---

<a name="gas-town"></a>
# Gas Town

## Source
- **Repo:** https://github.com/steveyegge/gastown
- **Author:** @steve_yegge (Steve Yegge) - 40-year veteran, ex-Google/Amazon/Sourcegraph
- **Related:** https://github.com/steveyegge/beads (data plane)

## What It Does

Gas Town is a **factory for coding agents**, not a single improved agent. While everyone focuses on making their "ant" run longer, Steve Yegge argues nature prefers colonies.

### The 8 Stages of Dev Evolution:

| Stage | Description |
|-------|-------------|
| 1 | Zero/near-zero AI |
| 2 | Agent in IDE, permissions on |
| 3 | Agent in IDE, YOLO mode |
| 4 | Agent fills screen, code is just diffs |
| 5 | CLI single agent, YOLO |
| 6 | CLI multi-agent (3-5 parallel) |
| 7 | 10+ agents, hand-managed |
| **8** | **Building your own orchestrator** |

**Gas Town is for Stage 7+.** If you're not there, "you'll get your face ripped off by superintelligent chimpanzees."

## Installation

```bash
# Install
go install github.com/steveyegge/gastown/cmd/gt@latest

# Initialize town
gt init

# Add rig (project repo)
gt rig add <repo-path>

# Launch roles
gt mayor up
gt refinery up beads
gt polecat up beads alice
```

## Key Features

### The Town Architecture (~/.gt)
- HQ repo managing all rigs
- `gt` binary orchestrates everything

### 7 Worker Roles:

| Role | Function |
|------|----------|
| **Mayor** | Town-level coordination |
| **Deacon** | Monitoring/handshakes |
| **Dogs** | Quality gates/watchdogs |
| **Refinery** | Task decomposition |
| **Polecat** | Named persistent workers |
| **Witness** | Per-rig observer |
| **Crew** | Ephemeral workers |
| **Overseer (YOU)** | Human boss with inbox |

### Key Concepts:
- **Beads Integration:** Git-backed data plane, universal context management (~225K lines of Go)
- **MCP Agent Mail:** Agents collaborate via email-like interfaces (github.com/Dicklesworthstone/mcp_agent_mail)
- **Vibe Coding Philosophy:** Focus on THROUGHPUT not perfection

## Why It's Valuable

Gas Town solves million-step tasks trivially. You become a **Product Manager** - Gas Town is an **Idea Compiler**. You make up features, design them, file implementation plans, and sling work to polecats and crew.

### Why Go for AI Code?

| Language | Issue |
|----------|-------|
| **TypeScript** | 1/3 to 1/2 of diffs are type wrestling |
| **Python** | "Fine" but feels like scripts |
| **Go** | "Boring" = evolutionary advantage. Diffs understandable. |

## Warnings (From the Author)

1. Code is 3 weeks old
2. 100% vibe-coded - Steve has never looked at the code
3. Expensive as hell - Multiple Claude accounts needed
4. Requires tmux - Primary UI
5. Can wreck your shit - "If you have any doubt whatsoever, then you can't use it."

## Actionability

**[RED]** - Deep dive, Stage 7+ only, expensive, chaotic

---

<a name="gas-town-extensions"></a>
# Gas Town Community Extensions

## GTGUI - Age of Empires Style GUI

### Source
- **Repo:** https://github.com/TRIBE-INC/gtgui
- **Author:** @TRIBE-INC

### What It Does
Provides an Age of Empires-style graphical user interface for Gas Town orchestration.

### Actionability
**[YELLOW]** - Requires Gas Town setup first

---

## Roughneck - Run Multiple Gas Towns

### Source
- **Repo:** https://github.com/mjtechguy/roughneck
- **Author:** @mjtechguy

### What It Does
Enables running multiple Gas Town instances simultaneously for massive parallel agent coordination.

### Actionability
**[RED]** - Advanced Gas Town usage only

---

## Station - Nats-based Alternative

### Source
- **Repo:** https://github.com/cloudshipai/station
- **Author:** @Esteban_Puerta9 (CloudShip AI)

### What It Does
Alternative orchestration system to Gas Town using Nats for messaging infrastructure.

### Actionability
**[YELLOW]** - Alternative to Gas Town

---

<a name="opencode-alternatives"></a>
# OpenCode & Claude Code Alternatives

## OpenCode

### Source
- **Repo:** https://github.com/sst/opencode
- **Author:** SST (Serverless Stack)

### What It Does
Open-source alternative to Claude Code supporting multiple AI providers. Referenced as compatible with Infinite Orchestra and other orchestration tools.

### Key Features
- Multi-provider support (Claude, OpenAI, etc.)
- Open-source terminal AI coding tool
- Plugin/extension ecosystem

### Actionability
**[YELLOW]** - Alternative for non-Claude workflows

---

<a name="community-plugins"></a>
# Community Plugins

## Claude-Mem - Persistent Memory Plugin

### Source
- **Repo:** https://github.com/thedotmack/claude-mem
- **Author:** @thedotmack
- **Engagement:** 3.4K likes, 200K views, 4.6K bookmarks (massive validation)

### What It Does

Open-source plugin giving Claude Code "infinite memory" by automatically capturing sessions, compressing to semantic summaries, and injecting relevant context into future sessions.

**Problem Solved:**
- Context resets on restart
- Must re-explain project history every session
- Token waste from repetition
- Can't maintain long-term project continuity

### Installation

```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

Restart Claude Code after install.

### Key Features

| Metric | Improvement |
|--------|-------------|
| Token usage | Up to 95% fewer per session |
| Tool calls before limit | ~20x more |
| Storage | Local SQLite only |

**Architecture:**
1. **Capture Phase:** Lifecycle hooks monitor SessionStart, PostToolUse, prompts, observations
2. **Compression Phase:** Claude agent-sdk generates semantic summaries (~50-100 tokens)
3. **Retrieval Phase:** 3-layer system with hybrid semantic + keyword search via Chroma vector DB
4. **Injection Phase:** Auto-injects relevant context into new sessions

**Configuration:** `~/.claude-mem/settings.json`
**Web UI:** `http://localhost:37777`

### Why It's Valuable
Transforms Claude Code from session-based to project-aware. Essential for long-term development with continuity.

### Actionability
**[YELLOW]** - Medium lift, install plugin, restart, works automatically

---

## Claude HUD - Real-Time Session Visibility

### Source
- **Repo:** https://github.com/jarrodwatts/claude-hud
- **Stars:** 1.8K
- **Author:** @jarrodwatts (Jarrod Watts) - Building @abstractchain

### What It Does

Claude Code plugin showing:
- Context remaining (color-coded bar)
- What tools are executing
- Which subagents are running
- Todo list progress
- Model in use, session duration, usage limits

### Installation

```bash
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

### Key Features

**Session Metadata:**
- Model in use (e.g., Opus 4.5)
- Context percentage with color-coded bar (Green/Yellow/Red)
- Git branch, config counts, usage limits

**Tool Activity:**
- Spinners for running tools
- File targets being operated on
- Completion counts

**Agent Status:**
- Subagent names and descriptions
- Elapsed time, completion indicators

**Sample Output:**
```
[Opus 4.5] 35% | 1 MCPs | 1m
Read x2 | WebFetch x1 | Skill x1 | Edit x1
```

### Why It's Valuable
Makes the hidden control plane of Claude Code visible. Critical for debugging long-horizon tasks and avoiding context overflow.

### Actionability
**[GREEN]** - Quick win, install under 5 minutes

---

## Ralph Wiggum Plugin

### Source
- **Repo:** https://github.com/delikat/claude-code/tree/main/plugins/ralph-wiggum
- **Rate limiting version:** https://github.com/ghuntley/ralph-claude-code
- **Author:** Geoffrey Huntley / delikat

### What It Does

Goal-conditioned loop that keeps Claude Code running until a verifiable goal is reached. Uses stop hooks to intercept session exits and re-inject prompts with updated context.

### Installation

```bash
/plugin
# Type: ralph

# Or full command:
/plugin install ralph-wiggum@claude-plugins-official
```

### Key Features

1. Stop hook intercepts session exits
2. Re-injects original prompt with updated context
3. Agent sees file changes + git history from prior iterations
4. Loop continues until completion promise found or max iterations

### Why It's Valuable

Enables autonomous multi-iteration development. "It might take 2 minutes or a day. But the loop continues to experiment and look at prior work to ultimately get you there."

### Actionability
**[YELLOW]** - Medium lift, need proper PRD setup

---

<a name="orchestration-frameworks"></a>
# Orchestration Frameworks

## Infinite Orchestra - Self-Improving Orchestrator

### Source
- **Repo:** https://github.com/0xSero/orchestra
- **Author:** @0xSero - AI developer at Thrive Protocol

### What It Does

A self-improving orchestrator that keeps itself working 24/7 in a Docker environment. When told to "improve itself," it added Docker containerization to prevent destroying the host machine.

### Key Features

**Worker Profiles (orchestrator.json):**
```json
{
  "profiles": [
    { "id": "vision", "purpose": "Visual analysis" },
    { "id": "docs", "purpose": "Documentation research" },
    { "id": "research", "purpose": "Deep investigation" },
    { "id": "coder", "purpose": "Implementation" },
    { "id": "memory", "purpose": "Context persistence" },
    { "id": "architect", "purpose": "System design" }
  ]
}
```

**Self-Improvement Loop:**
1. Orchestrator monitors for idle state
2. Triggers self-improvement workflow
3. Agents research and implement fixes

### Why It's Valuable

Recursive self-enhancement with containerized isolation. "You can set a goal like an ecommerce store and it will pump it out."

### Caveats
- Sequential only (no parallelization yet)
- No checkpointing - crashes lose progress
- Conflicts with 5+ subagents

### Actionability
**[YELLOW]** - Medium lift, need OpenCode + Docker setup

---

<a name="ralph-variants"></a>
# Ralph Loop Variants

## Marathon Ralph - Full SDLC Implementation

### Source
- **Repo:** https://github.com/gruckion/marathon-ralph
- **Author:** @stephen_rayner

### What It Does
Extended Ralph that builds entire apps with unit and E2E tests following full SDLC methodology.

### Actionability
**[YELLOW]** - Extends base Ralph

---

## Lisa - Ralph Fork with Logging

### Source
- **Repo:** https://github.com/Arakiss/lisa
- **Author:** @petruarakiss

### What It Does
Fork of Ralph with enhanced logging and progress tracking.

### Actionability
**[YELLOW]** - Extended Ralph variant

---

## Zeroshot - Next Gen Ralph

### Source
- **Repo:** https://github.com/covibes/zeroshot
- **Author:** @Eivind1384955

### What It Does
"Next generation" version of the Ralph pattern with additional capabilities.

### Actionability
**[YELLOW]** - Experimental Ralph variant

---

## Snarktank Ralph (Ryan Carson Version)

### Source
- **Repo:** https://github.com/snarktank/ralph
- **Related:** https://github.com/snarktank/ai-dev-tasks (PRD templates)
- **Related:** https://github.com/snarktank/amp-skills (Amp skills)
- **Author:** @ryancarson - 3x founder, Builder in Residence at Amp Code

### What It Does

Runs iterative, clean-context AI sessions to implement small user stories from a PRD until all tasks pass. Shipped a feature in 14 iterations.

### Key Architecture
```
PRD.md -> prd.json -> Ralph Loop -> Shipped

Each iteration:
1. Pick next story
2. Implement
3. Test (typecheck/npm)
4. Commit if passing
5. Update prd.json
6. Log to progress.txt
```

### Installation

```bash
# Clone
git clone https://github.com/snarktank/ralph

# Run (max 25 iterations)
./scripts/ralph/ralph.sh 25
```

### Why It's Valuable

Fresh context per iteration prevents degradation. External memory (git, files) provides continuity without context pollution.

### The #1 Rule: Story Size
Each story must be completable in ONE iteration (~one context window)

**Right-sized stories:**
- Add a database column + migration
- Add a UI component to an existing page
- Update a server action with new logic

**Too big (split these):**
- "Build the entire dashboard"
- "Add authentication"

### Actionability
**[YELLOW]** - Medium lift, need scripts + PRD understanding

---

<a name="wrapper-utilities"></a>
# Wrapper Scripts & Utilities

## rpai - tmux Multi-Agent Manager

### Source
- **Repo:** https://github.com/radoslav11/rpai (inferred from author)
- **Author:** @radoslav11 (Rado) - ex-Oxford researcher

### What It Does

TUI tool for tmux that makes monitoring and switching between multiple parallel AI agents (Claude, Cursor, Codex) actually usable.

**Problem Solved:** "UX around parallel agents sucks right now."

### Installation

```bash
cargo install rpai
```

Run `rpai` in any tmux session.

### Key Features

1. Scans tmux panes for running AI agents
2. Displays TUI with agent list, status, output previews
3. Jump to any agent with selection (mouse supported)
4. Monitor all agents from one view

**Detected Agents:** Claude, Cursor, Codex, Opencode

### Sample Interface
```
RPAI - Agent Monitor
[1] CURSOR AGENT    running
[2] CLAUDE AGENT    running
[3] CODEX AGENT     idle

Preview: Claude is executing Python...
> import pandas as pd
```

### Why It's Valuable
Control center for multi-agent setups. Essential for tmux-based parallel agent workflows.

### Actionability
**[GREEN]** - Quick win, install and run in <5 minutes

---

## System - Remote Mac Control

### Source
- **Repo:** https://github.com/ygwyg/system
- **Docs:** https://system.surf
- **Author:** @burcs (Brandon) - PM at Cloudflare, founder of Outerbase (YC W23, acquired)

### What It Does

Open-source agent turning your Mac into an API. Chat from your phone, Claude executes commands on your machine via secure Cloudflare tunnel.

**Architecture:**
```
BRAIN (Cloudflare Worker)
- Claude AI for NLP
- State in Durable Objects
- Scheduling (cron/natural lang)
        |
Cloudflare Tunnel (secure, no ports exposed)
        |
BODY (Local Mac Bridge)
- Express server
- AppleScript execution
- Raycast extension deep links
```

### Installation

```bash
git clone https://github.com/ygwyg/system
cd system
npm install
npm run setup  # Interactive wizard
npm start      # Launch bridge + tunnel
```

### Key Features

- Play music (Apple Music/Spotify)
- Send texts (iMessages)
- Create Linear issues
- Run Shortcuts
- Open apps
- Execute AppleScript
- Trigger Raycast extensions
- Schedule recurring tasks

### Security Features
- No exposed ports - Tunnel only
- Shell allowlist - Dangerous commands blocked
- Human confirmation for sensitive actions
- Zero Trust ready with Terraform configs

### Why It's Valuable
Turns your Mac into a programmable API body controlled by a remote Claude-powered brain. Remote control while mobile with security first.

### Actionability
**[YELLOW]** - Medium lift, need Cloudflare account + API keys

---

## Kimaki - Discord Bot for Mac Control

### Source
- **Repo:** https://github.com/remorses/kimaki
- **Author:** @__morse

### What It Does
Discord bot for controlling local Mac via Claude, alternative to System.

### Actionability
**[YELLOW]** - Alternative to System for Discord users

---

<a name="mcp-servers"></a>
# MCP Servers

## MCP Agent Mail

### Source
- **Repo:** https://github.com/Dicklesworthstone/mcp_agent_mail
- **Used by:** Gas Town

### What It Does

Email-like interface for agent-to-agent collaboration. Agents communicate through a familiar email paradigm without special training.

### Why It's Valuable
Natural "agent village" behavior without training. Powers Gas Town's inter-agent communication.

### Actionability
**[YELLOW]** - Part of Gas Town ecosystem

---

<a name="skill-repositories"></a>
# Skill Repositories

## n-skills by Numman Ali

### Source
- **Repo:** https://github.com/numman-ali/n-skills
- **Author:** @nummanali

### Installation

```bash
/plugin marketplace add numman-ali/n-skills
/plugin install gastown@numman-ali/n-skills
```

### What It Does
Collection of community skills including Gas Town tutorial skill.

### Actionability
**[GREEN]** - Quick plugin install

---

## CC Mirror Orchestration Skill

### Source
- **Location:** https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md

### What It Does

The 5,299 token orchestration skill that powers CC Mirror's multi-agent capabilities. Includes:

**The Iron Law:**
```
YOU DO NOT WRITE CODE. YOU DO NOT RUN COMMANDS.
YOU DO NOT EXPLORE CODEBASES.
You are the CONDUCTOR. Your agents play the instruments.
```

**Tool Ownership Division:**
- Orchestrator: Read (limited), TaskCreate/Update/Get/List, AskUserQuestion, Task
- Workers: Read, Write, Edit, Bash, Glob, Grep, WebFetch, WebSearch, LSP

**Model Selection Guide:**
| Model | Use Case |
|-------|----------|
| Haiku | Errand runner: fetch files, grep (5-10 parallel) |
| Sonnet | Implementation, patterns, tests |
| Opus | Architecture, complex reasoning |

**Worker Preamble Template:**
```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
TASK: [specific task]
```

### Actionability
**[GREEN]** - Included with CC Mirror

---

<a name="monitoring-visualization"></a>
# Monitoring & Visualization

## Superconductor App

### Source
- **Author:** @sergeykarayev
- **Type:** iOS App (not open source confirmed)

### What It Does

iOS app that orchestrates Claude Code, Codex, Amp, OpenCode for mobile coding workflows.

**Quote:** "Launched agents, went on a hike, checked in on my phone, tweaked code, and opened a PR from the trail."

### Why It's Valuable
GUI alternative to raw SSH for mobile agent orchestration.

### Actionability
**[YELLOW]** - Check App Store availability

---

<a name="integration-tools"></a>
# Integration Tools

## Mobile Claude Code Setup (Dabit3 Pattern)

### Source
- **Author:** @dabit3 (Nader Dabit) - DevRel at EigenCloud

### What It Does

Run 6 parallel Claude Code agents on a $7/day cloud VM, accessed via phone SSH with push notifications when Claude needs input.

### Components
- Termius (SSH/mosh client)
- Tailscale VPN
- Poke (push notifications)
- iOS Shortcuts (VM lifecycle)
- tmux (persistent sessions)
- Git worktrees (branch isolation)

### Why It's Valuable
"Instead of long periods of intense focus, software development can now just fit into the gaps of your day."

### Actionability
**[YELLOW]** - Medium lift, need VM + Tailscale + hooks setup

---

<a name="configuration-resources"></a>
# Configuration Resources

## Recommended CLAUDE.md Patterns

From community sources, key patterns for CLAUDE.md files:

### Skill Loading
```markdown
## Available Skills
- orchestration: Multi-agent task decomposition
- prd: PRD generation for Ralph loops
- gastown: Gas Town integration
```

### Worker Preambles
```markdown
## Worker Templates

### Code Implementation Worker
CONTEXT: You are a CODE IMPLEMENTATION worker.
- Write production-quality code
- Follow existing patterns
- Include error handling
- Do NOT spawn sub-agents

### Research Worker
CONTEXT: You are a RESEARCH worker.
- Find and summarize relevant information
- Report sources with file paths
- Do NOT modify any files
```

### Auto-Compact Settings
Enable in variant settings for CC Mirror to prevent context collapse during orchestration.

---

# Comparison Matrix

## Orchestration Tool Comparison

| Aspect | CC Mirror | Gas Town | Infinite Orchestra |
|--------|-----------|----------|-------------------|
| Setup Time | <5 minutes | Hours+ | Medium |
| Complexity | Low | High (Stage 7+) | Medium |
| Use Cases | 80% generic | 20% complex | Self-improving |
| Parallelization | Native | Native | Sequential only |
| Cost | Normal | Expensive | Medium |
| Self-improvement | No | No | Yes (recursive) |
| Containerization | No | No | Docker-based |

## Ralph Variant Comparison

| Variant | Focus | Key Difference |
|---------|-------|----------------|
| Original (ghuntley) | Core pattern | Goal-conditioned loops |
| Ralph Wiggum Plugin | Claude Code native | Plugin installation |
| Snarktank Ralph | PRD-driven | JSON task tracking |
| Marathon Ralph | Full SDLC | E2E tests included |
| Lisa | Logging | Enhanced tracking |
| Zeroshot | Next-gen | Experimental |

---

# Quick Reference

## Installation Commands

```bash
# CC Mirror
npx cc-mirror quick --provider mirror --name mclaude

# Gas Town
go install github.com/steveyegge/gastown/cmd/gt@latest

# Claude-Mem
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# Claude HUD
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud

# Ralph
/plugin install ralph-wiggum@claude-plugins-official

# rpai
cargo install rpai

# System
git clone https://github.com/ygwyg/system && cd system && npm install
```

## Key GitHub Repositories Summary

| Repository | Stars | Purpose |
|------------|-------|---------|
| anthropics/claude-code | 53.9K | Official Claude Code |
| numman-ali/cc-mirror | - | Multi-agent orchestration |
| steveyegge/gastown | - | Agent factory |
| steveyegge/beads | - | Data plane for Gas Town |
| thedotmack/claude-mem | - | Persistent memory |
| jarrodwatts/claude-hud | 1.8K | Session visibility |
| snarktank/ralph | - | PRD-driven loops |
| 0xSero/orchestra | - | Self-improving orchestrator |
| ygwyg/system | - | Remote Mac control |

---

# Appendix: Research Sources

This document was compiled from:

1. **Verified Twitter/X threads** from @nummanali, @steve_yegge, @jarrodwatts, @thedotmack, @ryancarson, @arvidkahl, @mollycantillon, @dabit3, @burcs, @0xSero
2. **GitHub repository analysis** via official Claude Code repo
3. **Cross-referenced community discussions** and engagement metrics
4. **Existing research extractions** in the repository

**Recommended follow-up:** Live GitHub exploration of each repository for latest updates, issues, and community contributions.

---

*Last Updated: 2026-01-09*
*Research Methodology: Community source compilation with cross-referencing*
