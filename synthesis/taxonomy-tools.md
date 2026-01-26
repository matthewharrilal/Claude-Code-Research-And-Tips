# Tool Integration Taxonomy for Claude Code

---
## D-FINAL Integration
**Cross-references:** [D-FINAL-architecture.md Section 6 for combinations, D-FINAL-implementation.md Section 4 for tools]
**Journey link:** journey-architecture.md, journey-implementation.md
**Last updated:** 2026-01-19 (Wave-3)
---

> **You Are Here:** This is the **master tool reference** for Claude Code extensions. If you're looking to extend Claude Code with hooks, MCP servers, plugins, skills, or sub-agents, this document catalogs every known integration pattern with installation commands and configuration examples. Start here to find the right tool for your use case.

A comprehensive taxonomy of all tools, integrations, and patterns for extending Claude Code's capabilities. This document catalogs every known integration pattern from hooks to MCP servers to plugins and infrastructure.

---

## Table of Contents

1. [Hooks System](#hooks-system)
2. [MCP (Model Context Protocol) Servers](#mcp-model-context-protocol-servers)
3. [Plugins](#plugins)
4. [Skills System](#skills-system)
5. [Sub-Agents](#sub-agents)
6. [Infrastructure Tools](#infrastructure-tools)
7. [Browser Automation](#browser-automation)
8. [Multi-Agent Management](#multi-agent-management)
9. [Memory and Persistence](#memory-and-persistence)
10. [Integration Matrix](#integration-matrix)

---

## Hooks System

Hooks are event-driven shell commands (NOT AI prompts) that execute automatically on Claude Code lifecycle events.

### Hook Types

| Hook Event | Trigger Point | Common Use Cases |
|------------|---------------|------------------|
| `PreToolUse` | Before any tool runs | Validation, security gates, logging, approval flows |
| `PostToolUse` | After any tool completes | Auto-formatting, linting, notifications, metrics |
| `SessionStart` | When session begins | Context loading, environment setup, welcome messages |
| `SessionEnd` | When session ends | Cleanup, summary generation, persistence |
| `Stop` | Exit/completion attempts | Loop continuation (Ralph pattern), cleanup |

### Tool Matchers

Hooks can target specific tools:
- `Edit` - File editing operations
- `Write` - New file creation
- `Bash` - Shell command execution
- `Read` - File reading
- `Glob` - File pattern matching
- `Grep` - Content searching
- `AskUserQuestion` - When Claude needs user input
- `Task` - Subagent operations
- `WebFetch` - URL fetching
- `WebSearch` - Web searches
- `*` or omit matcher - Match all tools

### Configuration Location

```
~/.claude/settings.json           # Global hook config
.claude/settings.json             # Project hook config
```

### Hook Configuration Format

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/security-gate.sh"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Edit",
      "command": "prettier --write $FILE"
    }],
    "SessionStart": [{
      "type": "command",
      "command": "~/.claude/hooks/session-start.sh"
    }]
  }
}
```

### Environment Variables Available

| Variable | Description | Available In |
|----------|-------------|--------------|
| `$EVENT_DATA` | Full JSON event blob | All events |
| `$TOOL_NAME` | Tool being used | Pre/PostToolUse |
| `$FILE` | Target file path | PostToolUse (Edit/Write) |
| `$PROJECT_NAME` | Current project name | All events |
| `$SESSION_ID` | Current session ID | All events |

### Common Hook Patterns

#### 1. Notification Hooks (Push to Mobile)
```bash
#!/bin/bash
# ~/.claude/hooks/poke-notify.sh
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
curl -X POST "$POKE_API_URL" -d "{\"message\": \"$QUESTION\"}"
```

**Services:** Poke, Pushover, ntfy, Telegram Bot, Discord Webhook, Slack

#### 2. Auto-Formatting Hooks
```json
{
  "PostToolUse": [
    { "matcher": "Edit", "command": "prettier --write $FILE" },
    { "matcher": "Edit", "command": "eslint --fix $FILE" }
  ]
}
```

**Languages:** JavaScript/TypeScript (prettier, eslint), Python (black, isort, ruff), Go (gofmt, goimports), Rust (rustfmt), Ruby (rubocop), PHP (php-cs-fixer)

#### 3. Security Gate Hooks
```bash
#!/bin/bash
COMMAND=$(echo "$EVENT_DATA" | jq -r '.tool_input.command')
DANGEROUS_PATTERNS=("rm -rf" "git push --force" "sudo")
for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        echo "BLOCKED: $pattern" >&2
        exit 1  # Non-zero blocks the operation
    fi
done
exit 0
```

#### 4. Ralph Loop Stop Hooks
```bash
#!/bin/bash
# Intercepts session exit, checks for completion
if grep -q "COMPLETE" ./progress.txt; then
    exit 0  # Allow exit
else
    cat PROMPT.md | claude-code  # Restart
fi
```

#### 5. Audit Logging Hooks
```bash
#!/bin/bash
LOG_FILE="$HOME/.claude/audit/$(date +%Y-%m-%d).jsonl"
jq -nc --arg ts "$(date -Iseconds)" --arg tool "$TOOL_NAME" '{ts:$ts,tool:$tool}' >> "$LOG_FILE"
```

---

### Checkpoint: Hooks System
**You should now understand:**
- [ ] The 5 hook event types and when each triggers
- [ ] How to configure hooks in `~/.claude/settings.json`
- [ ] The difference between PreToolUse and PostToolUse
- [ ] How to use environment variables like `$EVENT_DATA` and `$TOOL_NAME`

**If unclear:** Re-read the Hook Configuration Format section above or see `extractions/techniques/research-hooks-expanded.md`

---

## MCP (Model Context Protocol) Servers

MCP is an open protocol (like "USB-C for AI") enabling Claude to connect to external data sources and tools via JSON-RPC 2.0.

### Architecture

```
+--------------------------------------------------+
|            MCP Host (Claude Code)                 |
+-------------------+------------------------------+
                    |
         +----------+----------+
         |          |          |
     +---v--+   +---v--+  +---v--+
     |Client|   |Client|  |Client|
     +---+--+   +---+--+  +---+--+
         |          |          |
    +----v---+ +----v---+ +----v---+
    |Server A| |Server B| |Server C|
    |(STDIO) | |(STDIO) | |(HTTP)  |
    +--------+ +--------+ +--------+
```

### MCP Primitives

| Feature | Purpose | Control |
|---------|---------|---------|
| **Tools** | Functions LLMs can actively call | Model-controlled |
| **Resources** | Passive read-only data sources | Application-controlled |
| **Prompts** | Pre-built instruction templates | User-controlled |

### Configuration Location

```
~/.claude/settings.json  (Claude Code)
~/Library/Application Support/Claude/claude_desktop_config.json  (Claude Desktop - macOS)
```

### Configuration Format

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-name", "arg1"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### Official Reference Servers

| Server | Package | Purpose |
|--------|---------|---------|
| **Filesystem** | `@modelcontextprotocol/server-filesystem` | Secure file operations |
| **Git** | `mcp-server-git` (Python) | Git repository operations |
| **GitHub** | `@modelcontextprotocol/server-github` | GitHub API integration |
| **Memory** | `@modelcontextprotocol/server-memory` | Knowledge graph persistence |
| **Fetch** | `@modelcontextprotocol/server-fetch` | Web content fetching |
| **Sequential Thinking** | `@modelcontextprotocol/server-sequential-thinking` | Reflective problem-solving |
| **Time** | `@modelcontextprotocol/server-time` | Time/timezone operations |

### Popular Third-Party MCP Servers

#### File/Data Servers
- **SQLite**: `mcp-server-sqlite` - Database operations
- **PostgreSQL**: `mcp-server-postgres` - Database operations
- **Google Drive**: Google Drive file access
- **Notion**: Notion workspace integration

#### Communication Servers
- **Slack**: `@modelcontextprotocol/server-slack` - Slack messaging
- **Discord**: Discord integration
- **Linear**: Issue tracking

#### Browser Automation
- **Puppeteer**: `@modelcontextprotocol/server-puppeteer` - Browser automation
- **Playwright**: Cross-browser automation
- **Browserbase**: Cloud browser execution

### MCP SDK Languages

| Language | Package |
|----------|---------|
| TypeScript | `@modelcontextprotocol/sdk` |
| Python | `pip install mcp` |
| Go | `github.com/modelcontextprotocol/go-sdk` |
| Kotlin | Maven/Gradle |
| Swift | Swift Package Manager |
| Java | Maven/Gradle |
| C# | NuGet |
| Ruby | `gem install mcp` |
| Rust | Cargo |
| PHP | Composer |

### MCP Debugging

```bash
# MCP Inspector - interactive testing tool
npx @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /path
```

---

### Checkpoint: MCP Servers
**You should now understand:**
- [ ] The 3 MCP primitives: Tools, Resources, and Prompts
- [ ] How to configure MCP servers in `~/.claude/settings.json`
- [ ] The difference between official reference servers and community servers
- [ ] How to debug MCP servers using the Inspector

**If unclear:** Re-read the MCP Configuration Format section or see the MCP specification at modelcontextprotocol.io

**Terminal verification:**
```bash
# Test MCP server is working
npx @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /path
# You should see: MCP Inspector running at http://localhost:5173
```

---

## Plugins

Plugins are full packages combining code, hooks, commands, skills, and MCP integrations.

### Plugin Installation

```bash
# Add marketplace
/plugin marketplace add author/repo

# Install plugin
/plugin install plugin-name@marketplace

# Or directly
claude plugin install plugin-name
```

### Official Anthropic Plugins

#### agent-sdk-dev
- **Command:** `/new-sdk-app`
- **Purpose:** Development kit for Claude Agent SDK projects
- **Agents:** `agent-sdk-verifier-py`, `agent-sdk-verifier-ts`

#### claude-opus-4-5-migration
- **Purpose:** Automated migration to Opus 4.5
- **Updates:** Model strings, beta headers, prompts

#### code-review
- **Command:** `/code-review`
- **Architecture:** 5 parallel Sonnet agents
- **Agents:** CLAUDE.md Compliance, Bug Detection, Historical Context, PR History, Code Comments

#### code-simplifier
- **Command:** Natural language request
- **Purpose:** Simplify/refine code for clarity
- **Usage:** "Use the code simplifier agent to clean up this code"
- **Source:** Official Anthropic internal tool, open-sourced

#### commit-commands
- **Commands:** `/commit`, `/commit-push-pr`, `/clean_gone`
- **Purpose:** Git workflow automation

#### explanatory-output-style
- **Hook:** SessionStart
- **Purpose:** Educational insights about implementation choices

#### feature-dev
- **Command:** `/feature-dev`
- **Purpose:** 7-phase development workflow
- **Agents:** `code-explorer`, `code-architect`, `code-reviewer`

#### frontend-design
- **Skill:** Auto-invoked for frontend work
- **Purpose:** Production-grade frontend avoiding "AI aesthetic"

#### hookify
- **Commands:** `/hookify`, `/hookify:list`, `/hookify:configure`
- **Purpose:** Meta-hooks - create custom hooks to prevent unwanted behaviors
- **Agent:** `conversation-analyzer`

#### learning-output-style
- **Hook:** SessionStart
- **Purpose:** Interactive learning mode for user growth

#### plugin-dev
- **Command:** `/plugin-dev:create-plugin`
- **Purpose:** Full toolkit for developing Claude Code plugins
- **Agents:** `agent-creator`, `plugin-validator`, `skill-reviewer`
- **Skills (7):** Hook Development, MCP Integration, Plugin Structure, Settings Configuration, Commands Development, Agents Creation, Skill Development

#### pr-review-toolkit
- **Command:** `/pr-review-toolkit:review-pr [aspects]`
- **Aspects:** comments, tests, errors, types, code, simplify, all
- **Agents (6):** `comment-analyzer`, `pr-test-analyzer`, `silent-failure-hunter`, `type-design-analyzer`, `code-reviewer`, `code-simplifier`

#### ralph-wiggum
- **Commands:** `/ralph-loop`, `/cancel-ralph`
- **Hook:** Stop hook for loop continuation
- **Purpose:** Self-perpetuating autonomous loops

#### security-guidance
- **Hook:** PreToolUse
- **Purpose:** Security reminder and vulnerability detection
- **Monitors:** Command injection, XSS, eval, dangerous HTML, pickle, os.system

### Community Plugins

#### Claude HUD (@jarrodwatts)
- **Repo:** github.com/jarrodwatts/claude-hud
- **Install:**
  ```bash
  /plugin marketplace add jarrodwatts/claude-hud
  /plugin install claude-hud
  /claude-hud:setup
  ```
- **Shows:** Context remaining, tools executing, subagents running, todo progress
- **Updates:** Every ~300ms
- **Features:** Color-coded context bar, token breakdown at 85%+ usage

#### Claude-Mem (@thedotmack)
- **Repo:** github.com/thedotmack/claude-mem
- **Install:**
  ```bash
  /plugin marketplace add thedotmack/claude-mem
  /plugin install claude-mem
  ```
- **Purpose:** Persistent memory with semantic compression
- **Architecture:** SQLite + Chroma vector DB + Claude Agent SDK
- **Stats:** Up to 95% fewer tokens, ~20x more tool calls
- **3-Layer Retrieval:** search() -> timeline() -> get_observations()
- **Config:** `~/.claude-mem/settings.json`
- **Web UI:** http://localhost:37777

#### Ralph Wiggum Marketer (@koylanai)
- **Repo:** github.com/muratcankoylan/ralph-wiggum-marketer
- **Commands:** `/ralph-init`, `/ralph-marketer`, `/ralph-status`, `/ralph-cancel`
- **Purpose:** Self-critiquing content loop for marketing copy
- **Workflow:** DISCOVER -> LEARN -> RESEARCH -> IDEATE -> WRITE -> CRITIQUE -> ITERATE

### Plugin Directory Structure

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json              # Manifest
├── commands/
│   ├── init.md
│   └── run.md
├── skills/
│   └── main/
│       └── SKILL.md
├── hooks/
│   ├── hooks.json
│   └── post-edit.sh
├── scripts/
│   └── setup.js
└── templates/
    └── config.json
```

### Plugin Manifest (plugin.json)

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "What this plugin does",
  "author": "yourhandle",
  "commands": [
    {
      "name": "my-command",
      "description": "Command description",
      "file": "commands/my-command.md"
    }
  ],
  "skills": [
    {
      "name": "my-skill",
      "file": "skills/my-skill.md",
      "triggers": ["keyword1", "keyword2"]
    }
  ],
  "hooks": {
    "file": "hooks/hooks.json"
  }
}
```

---

### Checkpoint: Plugins
**You should now understand:**
- [ ] How to install plugins from marketplaces
- [ ] The key official Anthropic plugins and their purposes
- [ ] The plugin directory structure and manifest format
- [ ] The difference between commands, skills, and hooks within plugins

**If unclear:** Re-read the Plugin Manifest section or explore the official plugins at github.com/anthropics/claude-code/tree/main/plugins

**Terminal verification:**
```bash
# List installed plugins
/plugin list
# You should see: a list of installed plugins with their versions
```

---

## Skills System

Skills are Markdown files (.md) that extend Claude Code's capabilities as recipes, templates, or instruction sets.

### Skill Locations

```
.claude/skills/              # Project-specific
~/.claude/skills/            # Global
~/.config/amp/skills/        # Alternative (Amp)
```

### Skill Structure

```markdown
# Skill Name

## Purpose
One-liner description

## Mental Model
Metaphor/framework for understanding the skill

## Instructions
Detailed guidance

## Rules/Constraints
What to do and not do

## Examples
Usage demonstrations
```

### Skill Invocation

1. **Manual:** `"Load the X skill and initiate"`
2. **Slash Command:** `/skill skill-name`
3. **Auto-Trigger:** Query relevance matching skill description

### Skills vs Sub-Agents vs Hooks

| Aspect | Skills | Sub-Agents | Hooks |
|--------|--------|------------|-------|
| What | Instruction sets | Mini-Claudes | Shell commands |
| Context | Main conversation | Isolated window | N/A |
| Trigger | Query relevance/manual | Task tool | Lifecycle events |
| Best For | Complex workflows | Multi-step reasoning | Automation |

### Community Skill Collections

#### CC Mirror (@nummanali)
- **Repo:** github.com/numman-ali/cc-mirror
- **Purpose:** Multi-agent orchestration
- **Key Skill:** orchestration/SKILL.md
- **Install:**
  ```bash
  npx cc-mirror quick --provider mirror --name mclaude
  mclaude
  "Load the orchestration skill and initiate"
  ```

#### Sub-Agents Directory (@shydev69)
- **Site:** https://sub-agents.directory
- **Content:** 200+ ready-to-use sub-agent prompts
- **Features:** MCP server listings, video tutorials, one-click spawning
- **Usage:** Browse -> Copy -> Paste into `.claude/agents/`

#### Vibe Skills
- **Site:** thevibemarketer.com/skills
- **Content:** 10 .md-based marketing skills
- **Skills:** Brand Voice, Keyword Research, Positioning, Content Strategy

#### Amp Skills (@ryancarson)
- **Repo:** github.com/snarktank/amp-skills
- **Skills:** PRD generation, Ralph JSON conversion

---

## Sub-Agents

Sub-agents are specialized mini-Claudes with isolated context windows for focused tasks.

### Sub-Agent Location

```
.claude/agents/
├── react-specialist.yaml
├── python-expert.yaml
├── security-auditor.yaml
└── adversarial-critic.md
```

### Sub-Agent Definition Format

```yaml
name: agent-name
description: What triggers this agent's selection
model: opus|sonnet|haiku
context: fork|shared

# System prompt/instructions follow
```

### Model Selection Guidelines

| Model | Use Case |
|-------|----------|
| **Haiku** | Errand runner: fetch files, grep, simple lookups (spawn 5-10 in parallel) |
| **Sonnet** | Capable worker: structured implementation, pattern following, test generation |
| **Opus** | Complex reasoning, architecture decisions, ambiguous tasks |

### Orchestrator Pattern

```markdown
# Orchestrator Pattern

## You Are
The conductor. You don't play instruments.

## You Do
- Decompose tasks
- Spawn workers via Task tool
- Monitor progress via TaskList
- Synthesize outputs

## You Don't
- Write code directly
- Run bash commands
- Explore files yourself
```

### Worker Preamble Template

```
CONTEXT: You are a WORKER agent, not an orchestrator.
RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report results with absolute file paths
TASK: [specific task]
```

---

## Infrastructure Tools

### Remote Execution

#### System - Remote Mac Control (@burcs)
- **Repo:** github.com/ygwyg/system
- **Docs:** system.surf
- **Purpose:** Turn Mac into an API via Cloudflare tunnel
- **Architecture:**
  ```
  Brain (Cloudflare Worker)
  ├─ Claude AI for NLP
  ├─ State in Durable Objects
  └─ Tool orchestration
           │
    Cloudflare Tunnel (secure)
           │
  Body (Local Mac Bridge)
  ├─ Express server
  ├─ AppleScript execution
  └─ Raycast extensions
  ```
- **Setup:**
  ```bash
  git clone https://github.com/ygwyg/system
  npm install && npm run setup && npm start
  ```
- **Capabilities:** Play music, send texts, create Linear issues, run Shortcuts, trigger Raycast

#### Claude SDK + Cloudflare Sandboxes (@johnturner)
- **Purpose:** Production agent deployment
- **Starter:** github.com/craigsdennis/claude-in-the-box
- **Architecture:**
  ```
  Local Development (Claude Code)
           ↓
      Skills (mini apps)
           ↓
    Claude Agent SDK
           ↓
    Cloudflare Sandbox
           ↓
    Production Deployment
  ```
- **Key Pattern:** Save transcript & session in Durable Object after each method for recovery
- **Requirements:** "standard-2" sandbox tier for >10 second responses

### Sandboxing Options

#### Docker Containerization
```dockerfile
FROM node:20-alpine
RUN npm install -g @anthropic-ai/claude-code
RUN adduser -D claude
USER claude
WORKDIR /workspace
CMD ["claude", "--dangerously-skip-permissions"]
```

#### macOS Sandbox
```bash
sandbox-exec -f ~/.claude/sandbox.sb claude
```

#### Linux Options
- **Firejail:** `firejail --private=~/claude-sandbox --net=none claude`
- **Bubblewrap (bwrap):** Process isolation
- **Systemd:** Unit file sandboxing

#### Network Isolation
```yaml
# Docker - no network
services:
  claude:
    network_mode: none
```

### Claude Agent SDK

- **Purpose:** Programmatic agent building
- **Resources:**
  - Building Agents Guide: anthropic.com/engineering/building-agents-with-the-claude-agent-sdk
  - Computer Use Docs: platform.anthropic.com/docs/agents-and-tools/tool-use/computer-use-tool
  - Reference Implementation: github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo
- **Architecture:**
  ```
  Your Application
         ↓
  Claude Agent SDK (Orchestration)
         ↓
  Claude API (Reasoning Brain)
         ↓
  Tools / Computer
  ```
- **Pattern:** Observe -> Think -> Act -> Repeat

---

## Browser Automation

### Claude for Chrome (MCP)

#### Native Architecture
```
Claude Code (MCP Client)
        ↓
    Binary Protocol (4-byte LE + JSON)
        ↓
Chrome Extension (MCP Server)
        ↓
    Local Browser
```

#### Available Tools (19 total)
Named `mcp__claude-in-chrome__*`:
- navigate
- get_text
- click
- screenshot
- (and more)

### Browserbase Cloud Browsers (@pk_iv)

- **Purpose:** Remote browser execution for security/scale
- **Install:**
  ```bash
  /plugin marketplace add browserbase/claude-code-plugin
  /plugin install browserbase@browserbase-cloud
  ```
- **Architecture:**
  ```
  Claude Code (MCP Client)
          ↓
      Binary Protocol
          ↓
  Intercepting Server (MCP -> CDP Translation)
          ↓
  Browserbase Cloud Browsers
  ```
- **Benefits:** Isolated execution, parallel sessions, production-grade, Claude doesn't know the difference

### Other Browser Tools

- **Puppeteer MCP:** `@modelcontextprotocol/server-puppeteer`
- **Playwright MCP:** Cross-browser automation
- **Stagehand:** Browserbase's open-source agent framework

---

## Multi-Agent Management

### rpai - tmux Multi-Agent Manager
- **Author:** @radoslav11, amplified by @alexocheema
- **Install:** `cargo install rpai`
- **Purpose:** TUI for monitoring/switching between parallel AI agents
- **Detected Agents:** Claude, Cursor, Codex, Opencode
- **Features:**
  - Scans tmux panes for running AI agents
  - Displays TUI with agent list, status, output previews
  - Jump to any agent with selection
  - Mouse support

### CC Mirror Multi-Agent (@nummanali)
- **Repo:** github.com/numman-ali/cc-mirror
- **Purpose:** Enables disabled multi-agent orchestration
- **Install:**
  ```bash
  npx cc-mirror quick --provider mirror --name mclaude
  mclaude
  "Load the orchestration skill and initiate"
  ```
- **Key Feature:** Parallel agent spawning with model selection

### Ralph Loop Pattern
- **Core:**
  ```bash
  while :; do cat PROMPT.md | claude --dangerously-skip-permissions ; done
  ```
- **Continuity:** Git history, prd.json, progress.txt
- **Stop Hook:** Checks for completion promise before allowing exit

---

## Memory and Persistence

### Claude-Mem Plugin
- **Stats:** Up to 95% fewer tokens, ~20x more tool calls
- **Storage:** Local SQLite + Chroma Vector DB
- **3-Layer Retrieval:**
  1. `search()` - Compact index, returns IDs
  2. `timeline()` - Chronological snippets
  3. `get_observations()` - Full details for specific IDs
- **Privacy:** `<private>` tags to exclude sensitive data

### MCP Memory Server
- **Package:** `@modelcontextprotocol/server-memory`
- **Purpose:** Knowledge graph-based persistent memory
- **Configuration:**
  ```json
  {
    "mcpServers": {
      "memory": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"]
      }
    }
  }
  ```

### Session Persistence Patterns

#### Hook-Based State
```bash
#!/bin/bash
# SessionStart: Load state
source ~/.claude/session-state

# SessionEnd: Save state
echo "LAST_SESSION=$(date)" > ~/.claude/session-state
```

#### Durable Objects (Cloudflare)
- Save transcript & session after each method
- Allows resume if sandbox dies

---

## Integration Matrix

### Which Tools Combine With Which Patterns

| Base Pattern | Hooks | MCP | Plugins | Skills | Sub-Agents |
|-------------|-------|-----|---------|--------|------------|
| **Ralph Loop** | Stop hook essential | Optional | Ralph plugins available | Orchestration skill | Worker agents |
| **Mobile Workflow** | Notification hooks | GitHub, Linear | Claude HUD | Minimal | Background |
| **Multi-Agent** | Monitoring hooks | Shared MCP | CC Mirror | Orchestration | Heavy use |
| **Browser Automation** | Pre/Post logging | Browserbase | Playwright | Browser patterns | Parallel scraping |
| **Memory/Persistence** | Session hooks | Memory server | Claude-Mem | Memory-aware | Context sharing |
| **Security** | PreToolUse gates | Filesystem limits | Security-guidance | Security review | Sandboxed workers |

### Recommended Stacks by Use Case

#### Personal Development
```
Hooks: Auto-formatting, notifications
MCP: Filesystem, GitHub
Plugins: Claude HUD
Skills: Project-specific
Sub-Agents: Task-based
```

#### Production Agents
```
Infrastructure: Cloudflare Sandbox + Agent SDK
MCP: Production databases, APIs
Security: PreToolUse gates, audit logging
Persistence: Durable Objects, Memory server
```

#### Autonomous/Ralph Loops
```
Hooks: Stop hook (essential), notifications
Sandboxing: VM or container (required for --dangerously-skip-permissions)
Skills: Orchestration, domain-specific
Sub-Agents: Parallel workers
Persistence: Git + progress files
```

#### Mobile/Remote
```
Infrastructure: System (Mac API), Tailscale
Hooks: Push notifications (Poke/Pushover)
MCP: GitHub, Linear
Plugins: Claude HUD (for context visibility)
```

---

## Quick Reference

### Installation Commands

```bash
# Plugins
/plugin marketplace add author/repo
/plugin install plugin-name

# MCP Servers (TypeScript)
npx -y @modelcontextprotocol/server-name

# MCP Servers (Python)
uvx mcp-server-name

# Multi-Agent Manager
cargo install rpai

# CC Mirror
npx cc-mirror quick --provider mirror --name mclaude
```

### Configuration Files

| Purpose | Location |
|---------|----------|
| Hooks | `~/.claude/settings.json` |
| MCP Servers | `~/.claude/settings.json` |
| Skills | `.claude/skills/*.md` |
| Sub-Agents | `.claude/agents/*.yaml` |
| Plugins | `~/.claude/plugins/` |
| Claude-Mem | `~/.claude-mem/settings.json` |

### Claude Code 2.1 Key Features

- **Shift+Enter:** Multi-line prompts
- **Hooks in Frontmatter:** Add hooks to agents/skills
- **Forked Context:** Isolated sub-contexts for skills
- **Hot Reload:** Automatic skill refresh on edit
- **Agent Persistence After Deny:** Continue working after rejecting tool use
- **Wildcard Permissions:** `Bash(*-h*)`, `Edit(*.ts)`
- **/teleport:** Move session to claude.ai/code

---

## Troubleshooting

### Common Issue: Hook Not Triggering
**Symptom:** Your hook command doesn't execute when expected
**Cause:** Incorrect matcher name, wrong file path, or missing execution permissions
**Fix:**
```bash
# 1. Verify hook configuration
cat ~/.claude/settings.json | jq '.hooks'

# 2. Ensure script is executable
chmod +x ~/.claude/hooks/your-script.sh

# 3. Test script manually
TOOL_NAME="Bash" EVENT_DATA='{"test":true}' ~/.claude/hooks/your-script.sh
# You should see: expected output from your script

# 4. Check matcher names (case-sensitive)
# Valid: Bash, Read, Write, Edit, Glob, Grep, AskUserQuestion, Task, WebFetch, WebSearch
```

### Common Issue: MCP Server Connection Failed
**Symptom:** `Error: Failed to connect to MCP server`
**Cause:** Server not installed, wrong command path, or missing environment variables
**Fix:**
```bash
# 1. Verify server is installed
npx -y @modelcontextprotocol/server-filesystem --help
# You should see: usage information

# 2. Check configuration in settings.json
cat ~/.claude/settings.json | jq '.mcpServers'

# 3. Test server directly
npx @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /tmp
# You should see: Inspector UI at localhost:5173

# 4. Check for required environment variables
echo $YOUR_API_KEY  # Should not be empty
```

### Common Issue: Plugin Installation Fails
**Symptom:** `/plugin install` returns error or plugin doesn't work
**Cause:** Marketplace not added, version incompatibility, or network issues
**Fix:**
```bash
# 1. Verify marketplace is added
/plugin marketplace list
# You should see: list of configured marketplaces

# 2. Add marketplace if missing
/plugin marketplace add author/repo

# 3. Clear plugin cache and retry
rm -rf ~/.claude/plugins/.cache
/plugin install plugin-name

# 4. Check Claude Code version compatibility
claude --version
# Ensure version >= minimum required by plugin
```

### Common Issue: Skill Not Loading
**Symptom:** Skill doesn't auto-trigger or manual load fails
**Cause:** Wrong file location, invalid frontmatter, or conflicting triggers
**Fix:**
```bash
# 1. Verify skill file location
ls -la .claude/skills/
# or
ls -la ~/.claude/skills/

# 2. Check SKILL.md frontmatter syntax
head -20 .claude/skills/my-skill/SKILL.md
# Frontmatter should be valid YAML between --- markers

# 3. Try explicit skill load
"Load the my-skill skill and initiate"
# or
/skill my-skill

# 4. Check for syntax errors in skill content
# Ensure markdown is valid and instructions are clear
```

### Common Issue: Sub-Agent Spawns But Doesn't Return
**Symptom:** Task tool hangs or agent doesn't complete
**Cause:** Task too large, context exhaustion, or missing completion criteria
**Fix:**
```bash
# 1. Check task complexity - should be single, focused task
# BAD: "Implement entire feature"
# GOOD: "Create login function in src/auth.ts"

# 2. Add explicit completion instructions to worker prompt
# Include: "Report your results with absolute file paths when done"

# 3. Use run_in_background: false for debugging
# This keeps output visible

# 4. Check if model is appropriate
# Haiku for simple lookups, Sonnet for implementation, Opus for complex reasoning
```

### Common Issue: Claude-Mem Not Persisting
**Symptom:** Memory not being stored or retrieved between sessions
**Cause:** Worker service not running, port conflict, or database corruption
**Fix:**
```bash
# 1. Check if worker service is running
curl http://localhost:37777/health
# You should see: {"status":"ok"}

# 2. Check for port conflicts
lsof -i :37777
# Should show claude-mem process

# 3. Restart worker service
pkill -f claude-mem
/plugin install claude-mem  # Reinstalls and restarts

# 4. Check database integrity
ls -la ~/.claude-mem/
# Should contain sqlite and chroma directories
```

### Common Issue: Browser Automation Not Working
**Symptom:** Playwright MCP or Chrome extension tools fail
**Cause:** Browser not installed, MCP not configured, or permission denied
**Fix:**
```bash
# For Playwright MCP:
# 1. Install browsers
npx playwright install

# 2. Verify MCP server config in settings.json
cat ~/.claude/settings.json | jq '.mcpServers.playwright'

# For Claude for Chrome:
# 1. Verify extension is installed and enabled
# 2. Check native messaging host is configured
# 3. Restart Chrome completely

# Test browser automation
# In Claude: "Navigate to https://example.com and take a screenshot"
# You should see: navigation success and screenshot saved
```

---

## Sources

- Official Anthropic documentation and plugins
- Claude Code CHANGELOG.md
- Community extractions from Twitter/X, GitHub, Reddit
- Research documents: research-hooks-expanded.md, research-mcp-servers-expanded.md, research-skills-expanded.md, research-security-expanded.md
- Tool-specific extractions from /extractions/tooling/ and /extractions/infrastructure/

---

*Compiled: January 2026 | Wave-3 Enhanced: 2026-01-19*
*Claude Code Version: 2.1.x*
