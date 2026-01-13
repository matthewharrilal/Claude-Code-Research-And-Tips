# Community Extensions as Composition Layer

Extensions transform Claude Code from a single-agent tool into a composable platform. This document maps the extension ecosystem and establishes patterns for combining extensions as building blocks.

---

## Plugin Ecosystem Overview

### Ecosystem Tiers

| Tier | Description | Examples |
|------|-------------|----------|
| **Official Anthropic** | Maintained by Claude Code team | code-simplifier, ralph-wiggum |
| **Community Marketplace** | Installable via `/plugin marketplace` | claude-mem, claude-hud |
| **Standalone Tools** | External utilities that complement Claude Code | rpai, CC Mirror, Infinite Orchestra |
| **MCP Servers** | Protocol-compliant tool integrations | filesystem, github, memory, fetch |

### Installation Patterns

```bash
# Official plugins
/plugin install code-simplifier

# Marketplace plugins
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud

# MCP servers (in settings.json)
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "..." }
    }
  }
}
```

### Plugin Discovery Resources

- **Sub-Agents Directory:** https://sub-agents.directory (200+ prompts)
- **MCP Server Registry:** https://mcp.so, https://smithery.ai
- **VoltAgent Collection:** github.com/VoltAgent/awesome-claude-code-subagents

---

## Key Extension Types

### Visualization Extensions

#### Claude HUD (@jarrodwatts)
**Repo:** github.com/jarrodwatts/claude-hud (1.8K stars)

Real-time visibility into Claude Code sessions.

**What It Shows:**
- Context percentage with color-coded bar (green/yellow/red)
- Model in use, plan tier, session duration
- Tool activity (spinners for running, checkmarks for complete)
- Subagent status and elapsed time
- Todo progress counter

**Installation:**
```bash
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

**Configuration (Full Layout):**
```json
{
  "layout": "default",
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showConfigCounts": true,
    "showDuration": true,
    "showTools": true,
    "showAgents": true,
    "showTodos": true
  }
}
```

**Sample Output:**
```
[Opus 4.5] ########-- 35% | 1 MCPs | timer 1m
check Read x2 | check WebFetch x1 | check Edit x1
```

**Use in Compositions:**
- Monitor Ralph loops for context exhaustion
- Debug multi-agent workflows
- Track token budget during long sessions

---

### Memory Extensions

#### Claude-Mem (@thedotmack)
**Repo:** github.com/thedotmack/claude-mem

Persistent memory across sessions via semantic compression.

**Key Stats:**
| Metric | Improvement |
|--------|-------------|
| Token usage | Up to 95% fewer per session |
| Tool calls before limit | ~20x more |
| Storage | Local SQLite + Chroma vector DB |

**Architecture:**
```
Claude Code Session
  -> Lifecycle Hooks capture events
    -> Worker Service (port 37777)
      -> SQLite (raw data)
      -> Chroma Vector DB (embeddings)
      -> Claude Agent SDK (compression)
    -> Future Session
      -> Auto-inject relevant context
```

**Installation:**
```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
# Restart Claude Code
```

**3-Layer Retrieval System:**
```javascript
// Layer 1: Compact search
search(query="authentication bug", type="bugfix", limit=10)

// Layer 2: Chronological snippets
timeline()

// Layer 3: Full details (always batch!)
get_observations(ids=[123, 456])
```

**Privacy Controls:**
```
<private>
API_KEY=sk-xxx
DATABASE_PASSWORD=secret
</private>
```

**Use in Compositions:**
- Long-term project continuity
- Multi-session feature development
- Team knowledge persistence

---

### Workflow Extensions

#### Code-Simplifier (@bcherny - Official Anthropic)
**Repo:** github.com/anthropics/claude-plugins-official

The actual tool the Claude Code team uses internally for code polish.

**Installation:**
```bash
/plugin marketplace update claude-plugins-official
/plugin install code-simplifier
```

**Usage:**
```
Use the code simplifier agent to clean up this code
```
or
```
Use code-simplifier on this PR
```

**What It Does:**
- Simplifies code structure
- Reduces unnecessary complexity and nesting
- Eliminates redundant code and abstractions
- Improves variable and function names
- Removes obvious comments
- **Preserves functionality** (stylistic changes only)

**Key Rules:**
- Clarity + explicitness > brevity + cleverness
- Avoid nested ternaries - use switch/if-else
- Focus on recently modified code only

**Workflow Pattern:**
```
Feature Agent -> Implementation Agent -> Test Agent -> Code-Simplifier -> Commit
```

#### Ralph Wiggum Plugin (Official)
**Location:** github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

Self-referential loop for autonomous task completion.

**Quick Start:**
```bash
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, input validation, tests. Output <promise>COMPLETE</promise> when done." --completion-promise "COMPLETE" --max-iterations 50
```

**How It Works:**
1. You run `/ralph-loop` once with task description
2. Claude Code works on task
3. Stop hook blocks exit
4. Stop hook feeds SAME prompt back
5. Repeats until completion promise found

**Key Files:**
```
plugins/ralph-wiggum/
  - .claude-plugin/     # Plugin configuration
  - commands/           # Command implementations
  - hooks/              # Stop hook for iteration control
  - scripts/            # Utility scripts
```

**Best Practices:**
- Clear completion criteria (not "make it good")
- Incremental goals (phases, not monoliths)
- Self-correction instructions (TDD pattern)
- Escape hatches (`--max-iterations`)

---

#### Ralph Variants

| Variant | Author | Purpose | Repo |
|---------|--------|---------|------|
| **Marathon Ralph** | @gruckion | Full SDLC with E2E tests | github.com/gruckion/marathon-ralph |
| **Dr. Ralph** | @MikeEndale | Confidence thresholds (80%+ to advance) | - |
| **Lisa** | @Arakiss | Enhanced logging + progress tracking | github.com/Arakiss/lisa |
| **Zeroshot** | @covibes | "Next gen version" | github.com/covibes/zeroshot |
| **Ralph Marketer** | @koylanai | Self-critiquing content loop | github.com/muratcankoylan/ralph-wiggum-marketer |
| **Ralph Orchestrator** | @mikeyobrien | Multi-agent coordination | github.com/mikeyobrien/ralph-orchestrator |
| **Rate-Limited Ralph** | @ghuntley | API rate limit handling | github.com/ghuntley/ralph-claude-code |

---

### Multi-Agent Extensions

#### CC Mirror (@nummanali)
**Repo:** github.com/numman-ali/cc-mirror

Unlocks Claude Code's disabled multi-agent orchestration feature.

**Setup (3 commands):**
```bash
npx cc-mirror quick --provider mirror --name mclaude
mclaude
"Load the orchestration skill and initiate"
```

**What You Get:**
- Agents break down tasks
- Track dependencies/blockers
- Collaborate on implementation
- Natural language direction

**Sample Output:**
```
Agent #1 completed! It chose FastAPI (Python)

Task List:
[x] #1 Design API architecture
[ ] #2 Create project structure
[ ] #3 Implement data models
[blocked] #4 Implement REST API endpoints (blocked by #3)
```

**Provider Options:**
- `mirror` - Default, reflects Claude's internal primitives
- `GLM-4.7` - Handles multi-agent coordination well
- OpenRouter, LiteLLM, others

#### Infinite Orchestra (@0xSero)
**Repo:** github.com/0xSero/orchestra

Self-improving orchestrator running 24/7 in Docker.

**Architecture:**
```
Central Orchestrator
  -> Monitors idle + activity
  -> Triggers self-improvement
      |
      v
Specialized Workers
  - Coder (Implementation)
  - Architect (Design)
  - Research (Investigation)
  - Memory (Context persistence)
      |
      v
Docker Container
  - Isolation from host
  - 24/7 operation
  - Resource limits
```

**Key Demo:** Set goal to "improve itself" -> it added Docker containerization to prevent destroying host machine.

---

### Tool Extensions (MCP Servers)

#### Official Reference Servers

| Server | Package | Purpose |
|--------|---------|---------|
| **Filesystem** | `@modelcontextprotocol/server-filesystem` | Secure file operations |
| **Git** | `mcp-server-git` (Python) | Repository operations |
| **GitHub** | `@modelcontextprotocol/server-github` | Issues, PRs, repos |
| **Memory** | `@modelcontextprotocol/server-memory` | Knowledge graph persistence |
| **Fetch** | `@modelcontextprotocol/server-fetch` | Web content fetching |
| **Sequential Thinking** | `@modelcontextprotocol/server-sequential-thinking` | Reflective problem-solving |

#### Browser Automation

**Puppeteer Server:**
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

**Playwright Integration:**
Used heavily in Ralph + Opus 4.5 combinations for UI verification.

**Browserbase Cloud (@pk_iv):**
MCP -> CDP translation layer for remote browser execution. Solves security risks of local browser automation.

```
Claude Code (MCP Client)
    -> Binary Protocol
    -> Intercepting Server (MCP -> CDP Translation)
    -> Browserbase Cloud Browsers
```

#### Database Servers

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/path/to/data.db"]
    },
    "postgres": {
      "command": "uvx",
      "args": ["mcp-server-postgres"],
      "env": { "DATABASE_URL": "postgresql://user:pass@host:5432/db" }
    }
  }
}
```

---

### Monitoring Extensions

#### rpai - Multi-Agent Dashboard (@radoslav11)

TUI tool for tmux that monitors multiple parallel AI agents.

**Installation:**
```bash
cargo install rpai
rpai  # Run in tmux session
```

**What It Does:**
- Scans tmux panes for running agents (Claude, Cursor, Codex)
- Displays TUI with agent list, status, output previews
- Jump to any agent with selection
- Mouse support

**Sample View:**
```
+-------------------------------------------+
|  RPAI - Agent Monitor                      |
+-------------------------------------------+
|  [1] CURSOR AGENT    ====== running        |
|  [2] CLAUDE AGENT    ====== running        |
|  [3] CODEX AGENT     ====== idle           |
+-------------------------------------------+
|  Preview: Claude is executing Python...    |
|  > import pandas as pd                     |
+-------------------------------------------+
```

---

## Extensions as Primitives

### The Primitive Mental Model

Extensions are not monolithic features - they are **composable primitives** that stack:

| Extension Type | Primitive Capability |
|---------------|---------------------|
| **Claude HUD** | Observability |
| **Claude-Mem** | Persistence |
| **Code-Simplifier** | Polish |
| **Ralph** | Iteration |
| **CC Mirror** | Coordination |
| **MCP Servers** | External Integration |
| **Hooks** | Event Automation |

### Composition Philosophy

> "Think of extensions as LEGO blocks. Each provides one capability. Power comes from combination."

**Single Extension = Capability**
**Multiple Extensions = Workflow**
**Coordinated Extensions = System**

---

## Extension Composition Patterns

### Pattern 1: Chain Extensions (A -> B -> C)

**Ralph + Code-Simplifier Chain:**
```
1. Ralph iterates on feature implementation
2. On completion, trigger code-simplifier
3. Final polish before commit
```

**Implementation:**
```bash
/ralph-loop "Build user auth. When done, use code-simplifier agent. Output <promise>COMPLETE</promise> after polish."
```

### Pattern 2: Parallel Extensions

**Multi-Agent with Monitoring:**
```
Terminal 1: Ralph for backend   (tmux session: backend)
Terminal 2: Ralph for frontend  (tmux session: frontend)
Terminal 3: rpai monitoring all sessions
```

```bash
# Terminal 1
tmux new-session -d -s backend "cd ~/project/backend && ./ralph.sh 20"

# Terminal 2
tmux new-session -d -s frontend "cd ~/project/frontend && ./ralph.sh 20"

# Terminal 3
rpai  # Monitor all
```

### Pattern 3: Conditional Extensions

**HUD-Triggered Actions:**
```
IF context > 80% (via HUD observation)
THEN trigger new Ralph iteration (fresh context)
ELSE continue current session
```

**With Hooks:**
```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "*",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/check-context-threshold.sh"
      }]
    }]
  }
}
```

### Pattern 4: Stacked Persistence

**Claude-Mem + Ralph + Progress.txt:**
```
Claude-Mem: Long-term semantic memory
     |
Ralph prd.json: Task state tracking
     |
progress.txt: Append-only session learnings
     |
Git: Code change history
```

Each layer provides different persistence granularity.

---

## Proven Extension Combinations

### Combo 1: "AGI Stack" (Opus 4.5 + Ralph + Playwright)

**Source:** @weswinder

| Component | Role |
|-----------|------|
| Opus 4.5 | Strong reasoning model |
| Ralph Wiggum | Iterative persistence |
| Playwright | Browser verification |

**Why It Works:**
- Ralph feeds same prompt repeatedly until success
- Playwright enables real-world UI verification
- Opus 4.5 reduces iterations needed

**Critical Optimization:**
> "Put costly tools like browser control in subagents to protect your main context window tokens" - @TendiesOfWisdom

### Combo 2: Long-Session Development

**Stack:**
- Claude-Mem (memory persistence)
- Claude HUD (context monitoring)
- Code-Simplifier (periodic polish)
- Auto-formatting hooks

**Flow:**
```
1. Claude-Mem loads relevant context from past sessions
2. HUD shows real-time context usage
3. At 85%, HUD token breakdown appears
4. Every N edits, trigger code-simplifier
5. PostToolUse hooks auto-format files
```

### Combo 3: Overnight Autonomous Development

**Stack:**
- Ralph loop (iteration)
- Mobile notifications (hooks)
- CC Mirror (multi-agent if needed)
- Git worktrees (parallel isolation)

**Setup:**
```bash
# Create worktrees for parallel work
git worktree add ../wt-auth auth-branch
git worktree add ../wt-api api-branch

# Run Ralph in each (separate terminals)
(cd ../wt-auth && ./ralph.sh 25) &
(cd ../wt-api && ./ralph.sh 25) &

# Notifications on AskUserQuestion
# (configured in hooks)
```

### Combo 4: Production Agent Deployment

**Stack:**
- Claude Agent SDK
- Skills (local development)
- Cloudflare Sandboxes
- Durable Objects (session persistence)

**Pattern:**
```
Local (Claude Code)
  -> Develop skills fast
  -> Test locally

Cloud (Cloudflare)
  -> Claude Agent SDK harness
  -> Sandbox for code execution
  -> Durable Objects for resume
```

---

## Building Custom Extensions

### Plugin API Basics

**Plugin Structure:**
```
my-plugin/
  - .claude-plugin/
    - plugin.json       # Manifest
  - commands/
    - my-command.md     # Slash commands
  - hooks/
    - hooks.json        # Hook configuration
    - my-hook.sh        # Hook scripts
  - agents/
    - my-agent.yaml     # Custom agents
```

**plugin.json:**
```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "My custom extension",
  "author": "me",
  "commands": ["commands/my-command.md"],
  "hooks": "hooks/hooks.json"
}
```

### Integration Points

| Point | Type | Use Case |
|-------|------|----------|
| `/commands` | Slash commands | Quick actions |
| `hooks/` | Event handlers | Automation on events |
| `agents/` | Sub-agents | Specialized tasks |
| `skills/` | Skills | Reusable capabilities |
| MCP servers | External tools | API/DB/browser access |

### Hook Configuration

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{ "type": "command", "command": "./validate.sh" }]
    }],
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{ "type": "command", "command": "./format.sh" }]
    }],
    "SessionStart": [{
      "type": "command",
      "command": "./init.sh"
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "./cleanup.sh"
    }]
  }
}
```

### Sub-Agent Definition (YAML)

```yaml
name: my-specialist
description: Handles specific domain tasks
model: opus
---
You are an expert in [domain].

When invoked:
1. Analyze the request
2. Apply domain-specific patterns
3. Return structured output

Always follow these rules:
- Rule 1
- Rule 2
```

---

## Extension Gaps

What the ecosystem currently lacks:

### Missing Extensions

| Gap | Description | Workaround |
|-----|-------------|------------|
| **Visual Diff Viewer** | Side-by-side code diffs in terminal | Use git diff, external tools |
| **Cost Tracker** | Real-time token/$ spending | Manual estimation |
| **Session Recording** | Full replay of sessions | Log to files manually |
| **Team Collaboration** | Shared memory across users | External DB, shared files |
| **Automated Testing** | Built-in test runner integration | Hooks + external runners |
| **Rollback Manager** | Undo sequences of changes | Git reset |
| **Context Compactor** | Automatic context summarization | Manual or Claude-Mem |
| **Multi-Model Router** | Route tasks to best model | CC Mirror partial support |

### Infrastructure Gaps

| Gap | Impact | Status |
|-----|--------|--------|
| **Windows Support** | Limited extension compatibility | Active development |
| **Plugin Marketplace UI** | CLI-only discovery | Requested |
| **Extension Dependencies** | No dependency resolution | Manual install order |
| **Hot Reload All Plugins** | Restart required | Partial support in 2.1 |

### Integration Gaps

| Gap | Desired Integration |
|-----|---------------------|
| **IDE Plugins** | VS Code, JetBrains sync |
| **Slack/Discord** | Native workspace integration |
| **Jira/Linear** | Issue tracking sync |
| **Figma** | Design-to-code pipeline |
| **CI/CD** | GitHub Actions, CircleCI |

---

## Quick Reference: Extension Installation

```bash
# HUD - Visibility
/plugin marketplace add jarrodwatts/claude-hud && /plugin install claude-hud

# Memory - Persistence
/plugin marketplace add thedotmack/claude-mem && /plugin install claude-mem

# Code-Simplifier - Polish
/plugin install code-simplifier

# Ralph - Iteration
# (Built-in or use bash scripts)

# CC Mirror - Multi-Agent
npx cc-mirror quick --provider mirror --name mclaude

# rpai - Monitoring
cargo install rpai
```

---

## Summary

Extensions transform Claude Code from a chat interface into a **composable agentic platform**:

| Capability | Extension |
|------------|-----------|
| See what Claude is doing | Claude HUD |
| Remember across sessions | Claude-Mem |
| Iterate until done | Ralph |
| Polish code automatically | Code-Simplifier |
| Coordinate multiple agents | CC Mirror |
| Connect external tools | MCP Servers |
| Automate on events | Hooks |
| Monitor parallel agents | rpai |
| Deploy to production | Claude SDK + Cloudflare |

The power is in **combination**. Stack primitives. Build workflows. Create systems.

---

## Tags

`#extensions` `#plugins` `#composition` `#claude-hud` `#claude-mem` `#code-simplifier` `#ralph` `#cc-mirror` `#mcp-servers` `#hooks` `#multi-agent` `#primitives`
