# Claude Code Alternatives: OpenCode and RPAI Comparison

> **Syn**thesis Document | **Cat**egory: Tooling Comparison
>
> **Com**prehensive analysis of **Clau**de Code alternatives - when to use **Open**Code for provider flexibility and **RP**AI for multi-agent visibility

---

## You Are Here

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     AI Coding Agent Ecosystem                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    Proprietary CLI Tools                             │   │
│   │                                                                      │   │
│   │   Claude Code (Anthropic)  ←  The benchmark, Anthropic-optimized    │   │
│   │   GitHub Copilot CLI       ←  GitHub ecosystem integration          │   │
│   │   Cursor                   ←  IDE-first approach                    │   │
│   │                                                                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                   │                                          │
│                                   ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    Open Source Alternatives  ← YOU ARE HERE          │   │
│   │                                                                      │   │
│   │   OpenCode (SST)      ←  Provider-agnostic, 75+ models, BYOK        │   │
│   │   Aider               ←  Git-native, conversation-based             │   │
│   │   Continue            ←  IDE extension focused                      │   │
│   │                                                                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                   │                                          │
│                                   ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    Visibility & Coordination Layer                   │   │
│   │                                                                      │   │
│   │   RPAI (tmux TUI)     ←  Multi-agent dashboard, activity detection  │   │
│   │   Claude HUD          ←  Log visualization                          │   │
│   │   Custom dashboards   ←  Prometheus/Grafana integrations            │   │
│   │                                                                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Con**text for this **doc**ument:

This **syn**thesis compares Claude Code with its **al**ternatives, focusing on:

1. **Open**Code - The leading open-source, provider-agnostic alternative
2. **RP**AI - The tmux-based multi-agent visibility layer

**Whe**re this fits in your **jour**ney:

| Your Current State | This Document Helps You... |
|-------------------|---------------------------|
| Single Claude Code user | Understand alternative options |
| Cost-conscious team | Evaluate provider flexibility |
| Multi-agent workflow | Add visibility layer |
| Privacy requirements | Configure local model options |
| Open source advocate | Choose community-driven tools |

**Pre**requisites:
- **Fam**iliarity with Claude Code basics (Level 0-1 on complexity ladder)
- **Un**derstanding of terminal-based workflows
- **Op**tional: Knowledge of orchestration patterns (Ralph, Gas Town)

---

## Executive Summary

### The Landscape

**Clau**de Code is the **ben**chmark - optimized specifically for Claude models with features like **check**points, intelligent **sub**agent parallelism, and tight **An**thropic integration. But it creates **de**pendency on a single provider.

**Open**Code breaks this dependency, offering:
- **75+** LLM providers (including local models via Ollama)
- **Open** source (MIT license)
- **Na**tive multi-session support
- **$0** tool cost (API-only pricing)

**RP**AI complements both by solving **vis**ibility:
- **See** all running agents at a glance
- **De**tect idle vs. active state
- **Jump** between sessions instantly

### Quick Decision Matrix

| Scenario | Recommended Tool | Why |
|----------|-----------------|-----|
| Claude-only, want best integration | **Claude Code** | Native optimization |
| Cost optimization across providers | **OpenCode** | Provider flexibility |
| Privacy/local execution required | **OpenCode + Ollama** | No external API |
| Running 3+ parallel agents | **RPAI** | Visibility layer |
| Open source philosophy | **OpenCode** | MIT licensed |
| Enterprise Anthropic agreement | **Claude Code** | Ecosystem alignment |
| Multi-provider orchestration | **OpenCode** | Different models per task |
| Quick proof-of-concept | **Claude Code** | Fastest setup |

---

## Part 1: OpenCode as Claude Code Alternative

### What OpenCode Is

> **Open**Code is an open-source, **pro**vider-agnostic AI coding agent built for the **ter**minal, supporting **75+** LLM providers including **lo**cal models.

**Core** Philosophy: **Bring Your Own Key (BYOK)**

```
Traditional SaaS Model:
  You rent → They own → They control

OpenCode Philosophy:
  You download → You own → You control

This means:
  ├── Your workflow survives provider changes
  ├── Your data stays local (with Ollama)
  ├── Your customizations persist
  └── Your investment compounds
```

### Architecture Deep Dive

**Cli**ent/Server Design (unlike Claude Code's **mon**olithic CLI):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        OpenCode Architecture                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌───────────────────┐        ┌───────────────────────────────────────┐   │
│   │     Clients        │        │             Core Server               │   │
│   │                    │        │                                       │   │
│   │   • Terminal TUI   │  ←──→  │   • Agent Orchestration              │   │
│   │   • Desktop App    │        │   • Provider Management              │   │
│   │   • IDE Extension  │        │   • Tool Registry                    │   │
│   │   • Web Interface  │        │   • Session State                    │   │
│   │   • Mobile*        │        │   • MCP Integration                  │   │
│   └───────────────────┘        └───────────────────────────────────────┘   │
│            │                                     │                          │
│            │                                     │                          │
│            ▼                                     ▼                          │
│   ┌───────────────────┐        ┌───────────────────────────────────────┐   │
│   │   Local UI         │        │          Provider Layer               │   │
│   │   Rendering        │        │                                       │   │
│   └───────────────────┘        │   • Anthropic (Claude)                │   │
│                                 │   • OpenAI (GPT)                      │   │
│                                 │   • Google (Gemini)                   │   │
│                                 │   • Ollama (Local)                    │   │
│                                 │   • 70+ more via AI SDK               │   │
│                                 └───────────────────────────────────────┘   │
│                                                                              │
│   * Mobile in development                                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Ben**efits of this **ar**chitecture:

1. **Re**mote Execution - Run server in Docker/cloud, attach from anywhere
2. **Work**spaces - Sessions persist even when you close your laptop
3. **Mul**ti-Client - Different interfaces for different contexts
4. **Head**less Mode - API server for automation/scripting

### Agent System Comparison

**Open**Code's agent system mirrors Claude Code's but with **more** customization:

**Pri**mary Agents (cycle with Tab):

| Agent | Purpose | Default Tools | Claude Code Equivalent |
|-------|---------|---------------|------------------------|
| **build** | Full development | All tools enabled | Default mode |
| **plan** | Analysis only | Read-only, asks before bash | Task tool with constraints |

**Sub**agents (invoke with @):

| Subagent | Purpose | Access Level | Claude Code Equivalent |
|----------|---------|--------------|------------------------|
| **@general** | Complex multi-step | Full tools | Task tool (subagent type) |
| **@explore** | Codebase discovery | Read-only | Grep/Glob operations |

**Cus**tom Agent Creation:

```bash
# Interactive wizard
opencode agent create
```

**Ge**nerates markdown configuration:

```markdown
# ~/.config/opencode/agents/security-audit.md

---
temperature: 0.2
model: anthropic/claude-sonnet-4
tools:
  read: allow
  grep: allow
  bash: ask
  write: deny
  edit: deny
---

You are a security auditor. Analyze code for vulnerabilities
without making any changes. Flag issues with severity ratings.
```

### Tool System Comparison

| Tool | OpenCode | Claude Code | Notes |
|------|----------|-------------|-------|
| `read` | Yes | Read | Equivalent |
| `write` | Yes | Write | Equivalent |
| `edit` | Yes | Edit | String replacement |
| `patch` | Yes | — | **OpenCode advantage** |
| `grep` | Yes | Grep | Equivalent |
| `glob` | Yes | Glob | Equivalent |
| `list` | Yes | Bash (ls) | Dedicated tool |
| `bash` | Yes | Bash | Equivalent |
| `lsp` | Yes | — | **OpenCode advantage** - Language Server integration |
| `webfetch` | Yes | WebFetch | Equivalent |
| `question` | Yes | — | User input prompt |
| `skill` | Yes | Skill | Similar slash command loading |
| `todowrite/todoread` | Yes | TodoWrite | Task tracking |

**Per**missions Configuration:

```json
// opencode.json
{
  "permission": {
    "edit": "ask",      // ask, allow, deny
    "bash": "ask",
    "write": "allow"
  }
}
```

### Key Feature Breakdown

#### Feature 1: Multi-Provider Support

**The** killer feature. Configure any **com**bination of providers:

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "{env:ANTHROPIC_API_KEY}"
    },
    "openai": {
      "apiKey": "{env:OPENAI_API_KEY}"
    },
    "google": {
      "apiKey": "{env:GOOGLE_GENERATIVE_AI_API_KEY}"
    },
    "ollama": {
      "baseURL": "http://localhost:11434"
    }
  }
}
```

**Prac**tical Application - Different Models for Different Tasks:

```
Task Matching Matrix:
├── Complex reasoning       →  Claude Opus / GPT-5
├── Fast iteration          →  Claude Haiku / GPT-4o-mini
├── Code generation         →  Codex / Code-specialized
├── Private work            →  Ollama / Local
└── Cost-sensitive tasks    →  Cheapest capable model

OpenCode enables this matching.
Claude Code forces single-provider.
```

#### Feature 2: LSP Integration

**Out**-of-the-box Language Server Protocol support:

- Go-to-definition
- Find references
- Hover information
- Code intelligence without setup

**Clau**de Code equivalent: None (relies on file reading + grep)

#### Feature 3: Native Multi-Session Parallelism

**Un**like Claude Code (single session), OpenCode supports **true** parallel sessions:

```bash
# Terminal 1
opencode  # Session A: Working on API

# Terminal 2
opencode  # Session B: Working on Frontend

# No conflicts, shared filesystem awareness
```

**Clau**de Code equivalent: Requires CC-Mirror hack or separate directories

#### Feature 4: Session Sharing

**Gen**erate shareable links for debugging and **col**laboration:

```
/share
→ https://opencode.ai/share/abc123...
```

#### Feature 5: Headless/API Mode

**Run** as a server for automation:

```bash
# Start API server
opencode serve --port 8080

# Start with web interface
opencode web

# Non-interactive execution
opencode run "Explain the authentication flow" --output json
```

### Installation & Setup

#### Quick Install

**mac**OS/Linux:
```bash
curl -fsSL https://opencode.ai/install | bash
```

**npm** (cross-platform):
```bash
npm install -g opencode-ai@latest
```

**Home**brew (macOS):
```bash
brew install opencode
```

**Win**dows (Scoop):
```powershell
scoop install opencode
```

**Win**dows (Chocolatey):
```powershell
choco install opencode
```

#### Post-Installation Configuration

```bash
# Navigate to project
cd my-project

# Launch OpenCode
opencode

# Initialize project analysis (creates AGENTS.md)
/init
```

#### Configuration File Locations

**Files** merge together (later overrides earlier):

1. **Re**mote config - `.well-known/opencode` (organizational defaults)
2. **Glo**bal config - `~/.config/opencode/opencode.json` (user preferences)
3. **Cus**tom config - `OPENCODE_CONFIG` env var
4. **Pro**ject config - `opencode.json` in project root
5. **In**line config - `OPENCODE_CONFIG_CONTENT` env var

#### Core Configuration Example

```json
// opencode.json (supports JSONC - comments allowed)
{
  // Primary model (format: provider/model)
  "model": "anthropic/claude-sonnet-4",

  // Lightweight model for titles, summaries
  "small_model": "anthropic/claude-haiku",

  // Theme selection
  "theme": "catppuccin-mocha",

  // Terminal UI settings
  "tui": {
    "scroll_speed": 3,
    "diff_style": "unified"
  },

  // Tool permissions
  "permission": {
    "edit": "ask",
    "bash": "ask",
    "write": "allow"
  },

  // Custom instructions file
  "instructions": ".opencode/INSTRUCTIONS.md",

  // Default agent
  "default_agent": "build",

  // Context management
  "compaction": "auto",  // auto, prune, or false

  // Provider allowlist (only these enabled)
  "enabled_providers": ["anthropic", "openai"]
}
```

### Provider Configuration Examples

#### Anthropic (Claude)

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "{env:ANTHROPIC_API_KEY}",
      "disabled": false
    }
  }
}
```

**En**vironment variable: `ANTHROPIC_API_KEY`
**OA**uth Support: Connect Claude Pro/Max via `/connect anthropic`

#### OpenAI (GPT)

```json
{
  "providers": {
    "openai": {
      "apiKey": "{env:OPENAI_API_KEY}"
    }
  }
}
```

#### Google (Gemini/Vertex)

```json
{
  "providers": {
    "google": {
      "apiKey": "{env:GOOGLE_GENERATIVE_AI_API_KEY}"
    }
  }
}
```

**For** Vertex AI:
```json
{
  "providers": {
    "google-vertex": {
      "npm": "@ai-sdk/google-vertex",
      "options": {
        "project": "{env:GOOGLE_CLOUD_PROJECT}",
        "location": "us-central1"
      }
    }
  }
}
```

#### Ollama (Local Models)

```json
{
  "providers": {
    "ollama": {
      "npm": "@ai-sdk/ollama",
      "options": {
        "baseURL": "http://localhost:11434"
      },
      "models": {
        "qwen2.5-coder:32b": {
          "name": "Qwen 2.5 Coder 32B",
          "limit": {"context": 32000, "output": 8192}
        }
      }
    }
  }
}
```

#### Custom OpenAI-Compatible Provider

```json
{
  "providers": {
    "my-provider": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "My Custom Provider",
      "options": {
        "baseURL": "https://api.my-provider.com/v1",
        "apiKey": "{env:MY_PROVIDER_KEY}"
      },
      "models": {
        "custom-model": {
          "name": "Custom Model",
          "limit": {"context": 128000, "output": 16384}
        }
      }
    }
  }
}
```

---

## Part 2: RPAI - Multi-Agent Visibility Layer

### What RPAI Is

**RP**AI (Rust Process AI) is a **ter**minal user interface that:

1. **Scans** for running AI coding agents (Claude, OpenCode, Codex, Cursor, Gemini)
2. **Dis**plays their status, resource usage, and location in tmux
3. **En**ables instant navigation between agent sessions
4. **Shows** real-time activity state (running vs. idle)

**Think** of it as a "process monitor + session switcher" **pur**pose-built for AI-assisted development workflows.

### The Problem RPAI Solves

```
Without RPAI:
┌──────────────────────────────────────────────────────────────────────────────┐
│ Terminal 1: Claude working on auth feature...                                 │
│ Terminal 2: Claude refactoring database layer...                              │
│ Terminal 3: Claude writing tests...                                           │
│ Terminal 4: Claude reviewing PR...                                            │
│                                                                               │
│ You: "Which one finished? Which needs attention?"                             │
│      *frantically switching between windows*                                  │
└──────────────────────────────────────────────────────────────────────────────┘

With RPAI:
┌──────────────────────────────────────────────────────────────────────────────┐
│  RPAI Session Manager                                                         │
│  ────────────────────                                                         │
│  ▶ claude  ~/project/auth      CPU: 45%  MEM: 2.1G                           │
│  ⏸ claude  ~/project/db        CPU: 0.5% MEM: 1.8G  ← Idle! Needs input      │
│  ▶ claude  ~/project/tests     CPU: 38%  MEM: 2.0G                           │
│  ⏸ claude  ~/project/review    CPU: 0.2% MEM: 1.5G  ← Idle! Review done      │
│                                                                               │
│  [Enter: Jump] [j/k: Navigate] [q: Quit]                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### When RPAI Matters

**The** multi-agent reality scales visibility needs:

| Pattern | Agent Count | Visibility Need |
|---------|-------------|-----------------|
| Single Claude Code | 1 | None |
| Ralph Wiggum Loop | 1-3 | Low (sequential) |
| Parallel Ralph | 3-6 | **High** |
| Gas Town | 5-10+ | **Critical** |
| Personal Panopticon | 8+ | **Essential** |

### The Killer Feature: Idle Detection

**RP**AI's most valuable feature is **dis**tinguishing active from idle agents:

```
Agent States:
▶ Running (CPU > 3%): Claude is thinking/working
⏸ Waiting (CPU < 3%): Claude finished, awaiting your input

Your Attention Model:
  Running agents → Low priority (check occasionally)
  Waiting agents → High priority (they need input)

Invert your attention: spend time on idle agents, not running ones.
```

**Con**figurable threshold:

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 3.0  // CPU% below this = "waiting"
}
```

### Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          RPAI Architecture                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐        │
│   │ Process Scanner  │    │   Tmux Query     │    │  Config Loader  │        │
│   └────────┬────────┘    └────────┬────────┘    └────────┬────────┘        │
│            │                      │                      │                  │
│            ▼                      ▼                      ▼                  │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                        Session Matcher                               │  │
│   │    (Correlates PIDs with tmux panes via parent chain)               │  │
│   └────────────────────────────────┬────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                          AiSession[]                                 │  │
│   │    - PID, agent type, working directory                             │  │
│   │    - CPU%, memory, uptime                                           │  │
│   │    - tmux session:window.pane                                       │  │
│   │    - Running/Idle state                                             │  │
│   └────────────────────────────────┬────────────────────────────────────┘  │
│                                    │                                        │
│                                    ▼                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                         Ratatui TUI                                  │  │
│   │    - Header + session list + status bar                             │  │
│   │    - Keyboard/mouse event handling                                  │  │
│   │    - Theme rendering                                                │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Features

#### Real-Time Process Monitoring

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  rpai                                                                         │
│  ════                                                                         │
│                                                                               │
│  ▶ claude    ~/projects/api-server                                           │
│    PID: 45231 │ CPU: 42.3% │ MEM: 2.1 GB │ 0:15:32                           │
│                                                                               │
│  ⏸ claude    ~/projects/web-frontend                                         │
│    PID: 45890 │ CPU: 0.8%  │ MEM: 1.9 GB │ 0:08:17                           │
│                                                                               │
│  ▶ opencode  ~/projects/mobile-app                                           │
│    PID: 46102 │ CPU: 38.1% │ MEM: 1.7 GB │ 0:03:45                           │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Dis**played Information:
- Agent type (claude, opencode, codex, cursor, gemini)
- Working directory (where the agent was launched)
- Process ID
- CPU usage (aggregated across process tree, excluding LSPs)
- Memory consumption
- Uptime

#### Session Navigation

| Action | Keys | Effect |
|--------|------|--------|
| Navigate | `j`/`k` or up/down | Move selection |
| Jump | `Enter` | Switch to selected tmux pane |
| Theme | `t` | Cycle color themes |
| Command | `/` or `:` | Enter command mode |
| Quit | `q`, `Esc`, `Ctrl-C` | Exit RPAI |

#### Theme System

**Six** built-in themes:

```
gruvbox | nord | catppuccin | dracula | tokyo | solarized
```

**Swi**tch at runtime with `t` or via command mode:
```
:theme nord
```

### Installation & Setup

#### Prerequisites

- **Rust/Cargo** (1.70+ recommended)
- **tmux** (for session integration)
- Unix-like OS (macOS, Linux)

#### Installation

```bash
# Recommended: via Cargo
cargo install rpai

# Or build from source
git clone https://github.com/radoslav11/rpai.git
cd rpai
./install.sh
```

#### Critical: tmux Integration

**Add** to `~/.tmux.conf`:

```bash
# Bind prefix + a to open RPAI in popup
bind-key a display-popup -E "rpai"
```

**Re**load tmux config:

```bash
tmux source ~/.tmux.conf
```

**Now** `prefix + a` opens RPAI in a centered popup overlay.

### Configuration

**Con**figuration file: `~/.config/rpai/config.json`

```json
{
  "theme": "gruvbox",
  "idle_threshold": 3.0,
  "refresh_ms": 50,
  "ascii_symbols": false
}
```

#### Option Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `"gruvbox"` | Color scheme |
| `idle_threshold` | float | `3.0` | CPU% below which agent is "waiting" |
| `refresh_ms` | integer | `50` | TUI refresh interval in milliseconds |
| `ascii_symbols` | boolean | `false` | Use ASCII instead of Unicode symbols |

#### Tuning `idle_threshold`

```json
// Older/slower systems: raise threshold
{ "idle_threshold": 5.0 }

// Powerful systems: lower threshold for sensitivity
{ "idle_threshold": 1.5 }

// Noisy environment (background processes): raise
{ "idle_threshold": 8.0 }
```

---

## Part 3: Feature Comparison Matrix

### Core Capabilities

| Feature | Claude Code | OpenCode | RPAI |
|---------|-------------|----------|------|
| **Terminal UI** | Yes | Yes | Yes |
| **File operations** | Yes | Yes | No (monitor only) |
| **Bash execution** | Yes | Yes | No |
| **Search (grep/glob)** | Yes | Yes | No |
| **Web fetch** | Yes | Yes | No |
| **Subagents** | Yes | Yes | No |
| **Custom agents** | Via prompts | Structured markdown | No |
| **MCP support** | Yes | Yes | No |

### Provider & Model Support

| Feature | Claude Code | OpenCode | RPAI |
|---------|-------------|----------|------|
| **Anthropic Claude** | Yes | Yes | Monitors |
| **OpenAI GPT** | No | Yes | Monitors |
| **Google Gemini** | No | Yes | Monitors |
| **Local models (Ollama)** | No | Yes | Monitors |
| **75+ providers** | No | Yes | N/A |
| **Provider switching** | No | Runtime | N/A |

### Unique Features

| Feature | Claude Code | OpenCode | RPAI |
|---------|-------------|----------|------|
| **Checkpoints** | Yes | No | No |
| **Instant rewind** | Yes | No | No |
| **Thinking mode** | Native | Via model | No |
| **Multi-session native** | Via hacks | Yes | Monitors |
| **Desktop app** | No | Yes | No |
| **IDE extensions** | Limited | Yes | No |
| **Idle detection** | No | No | Yes |
| **Process tree view** | No | No | Yes |
| **Agent dashboard** | No | No | Yes |

### Cost Model

| Aspect | Claude Code | OpenCode | RPAI |
|--------|-------------|----------|------|
| **Tool cost** | $17-100/mo | $0 | $0 |
| **API costs** | Anthropic only | Any provider | N/A |
| **Cost optimization** | No | Cross-provider | N/A |
| **Free tier option** | No | OpenCode Zen | N/A |
| **Local (free) models** | No | Yes (Ollama) | N/A |

### Ecosystem

| Aspect | Claude Code | OpenCode | RPAI |
|--------|-------------|----------|------|
| **License** | Proprietary | MIT | MIT |
| **Source code** | Closed | Open | Open |
| **Community** | Anthropic support | GitHub community | GitHub community |
| **GitHub stars** | N/A | 78,000+ | 11 |
| **Contributors** | Anthropic | 600+ | 2 |

---

## Part 4: When to Use Each Tool

### Decision Tree

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Tool Selection Decision Tree                         │
└─────────────────────────────────────────────────────────────────────────────┘

START: What's your primary concern?
    │
    ├── Cost optimization ──────────────────→ OpenCode
    │                                         (provider flexibility, local models)
    │
    ├── Privacy/local execution ────────────→ OpenCode + Ollama
    │                                         (no external API calls)
    │
    ├── Best Claude experience ─────────────→ Claude Code
    │                                         (checkpoints, native optimization)
    │
    ├── Open source philosophy ─────────────→ OpenCode
    │                                         (MIT licensed, fork-friendly)
    │
    ├── Multi-agent visibility ─────────────→ RPAI
    │                                         (dashboard for any agent count)
    │
    ├── Provider experimentation ───────────→ OpenCode
    │                                         (try 75+ models easily)
    │
    └── Enterprise Anthropic agreement ─────→ Claude Code
                                              (ecosystem alignment)
```

### Claude Code: When It's Best

**Choo**se Claude Code when:

1. **Clau**de optimization** - You want the best Claude experience with native integrations
2. **Check**points** - You need instant rewind capabilities
3. **Sub**agent sophistication** - You want Claude Code's parallel workflow features
4. **En**terprise Anthropic** - You have an Anthropic enterprise agreement
5. **Sim**plicity** - You don't need provider flexibility
6. **Eco**system integration** - You're heavily invested in Anthropic tooling

**Tra**de-offs:
```
+ Best Claude integration
+ Checkpoints/rewind
+ Sophisticated subagents
+ Anthropic enterprise support
- Vendor lock-in
- No local models
- Single provider
- Closed source
```

### OpenCode: When It's Best

**Choo**se OpenCode when:

1. **Cost** matters** - You want to optimize across providers or use free/local models
2. **Pri**vacy matters** - You need local execution or on-premise deployment
3. **Flex**ibility matters** - You want to experiment with different models
4. **Open** source matters** - You need to audit, fork, or contribute
5. **Mul**ti-session native** - You want parallel agents without hacks
6. **Pro**vider diversity** - Your workflow benefits from different models for different tasks

**Tra**de-offs:
```
+ Provider flexibility (75+)
+ Local model support
+ Open source (audit/extend)
+ Native multi-session
+ Desktop/IDE apps
- No checkpoints
- Less Claude-optimized
- Newer ecosystem
- Community support only
```

### RPAI: When It's Best

**Choo**se RPAI when:

1. **Run**ning 3+ agents** - Manual window-switching becomes untenable
2. **Ral**ph loops** - Parallel continuous iteration workflows
3. **Gas** Town** - Agent factory hierarchies need visibility
4. **Per**sonal Panopticon** - 8+ domain agents across life areas
5. **Re**source awareness** - Need to monitor CPU/memory across agents
6. **Idle** detection** - Want to know which agents need attention

**Tra**de-offs:
```
+ Visibility layer for any agent count
+ Idle detection saves attention
+ tmux integration (popup overlay)
+ Works with Claude Code, OpenCode, or both
- Requires tmux
- Unix-only (macOS, Linux)
- Doesn't control agents (monitor only)
- Limited to detectable process names
```

---

## Part 5: Integration Patterns

### OpenCode with Ralph Wiggum Loop

**The** Ralph Wiggum Loop pattern works **seam**lessly with OpenCode, offering **pro**vider flexibility that Claude Code cannot match.

#### Basic Ralph with OpenCode

```bash
#!/bin/bash
# ralph-opencode.sh

PROMPT_FILE="PROMPT.md"
MAX_ITERATIONS=50
COMPLETION_TOKEN="COMPLETE"

iteration=0
while [ $iteration -lt $MAX_ITERATIONS ]; do
    echo "=== Iteration $((iteration + 1)) ==="

    # Run OpenCode with prompt
    opencode run "$(cat $PROMPT_FILE)" --model anthropic/claude-sonnet-4

    # Check for completion signal in output
    if grep -q "$COMPLETION_TOKEN" ./PROGRESS.md 2>/dev/null; then
        echo "Task completed!"
        exit 0
    fi

    ((iteration++))
done

echo "Max iterations reached"
```

#### Multi-Provider Ralph

**The** key advantage over Claude Code: switch models mid-project:

```bash
#!/bin/bash
# multi-provider-ralph.sh

PHASE=$(cat PHASE.md 2>/dev/null || echo "planning")

case $PHASE in
    planning)
        MODEL="anthropic/claude-opus-4"
        ;;
    implementation)
        MODEL="openai/gpt-5.1-codex"
        ;;
    review)
        MODEL="google/gemini-3-pro"
        ;;
esac

opencode run "$(cat PROMPT.md)" --model $MODEL
```

#### Cost Optimization with Ralph

```bash
# Use cheaper model for simple iterations
opencode run "$(cat PROMPT.md)" --model ollama/qwen2.5-coder:32b

# Escalate to premium model for complex tasks
if grep -q "NEED_PREMIUM" ./STATUS.md; then
    opencode run "$(cat PROMPT.md)" --model anthropic/claude-opus-4
fi
```

### OpenCode with Gas Town

**Steve** Yegge's Gas Town agent factory pattern **trans**lates directly to OpenCode with **mul**ti-provider benefits.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         Gas Town + OpenCode                                   │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│   ┌─────────────────┐     Provider: anthropic/claude-opus-4                  │
│   │     MAYOR        │     Role: Strategic planning                          │
│   │   (Planner)      │     Config: Read-only, high reasoning                 │
│   └────────┬────────┘                                                        │
│            │                                                                  │
│            ▼                                                                  │
│   ┌─────────────────┐     Provider: openai/gpt-5.1-codex                     │
│   │    DEACON        │     Role: Work distribution                           │
│   │   (Router)       │     Config: Read-only, fast inference                 │
│   └────────┬────────┘                                                        │
│            │                                                                  │
│      ┌─────┴─────┐                                                           │
│      ▼           ▼                                                           │
│  ┌──────┐   ┌──────┐     Provider: ollama/qwen2.5:32b                       │
│  │ DOG  │   │ DOG  │     Role: Task execution                                │
│  │  #1  │   │  #2  │     Config: Full tools, local/cheap                     │
│  └──────┘   └──────┘                                                         │
│                                                                               │
│   ┌─────────────────┐     Provider: anthropic/claude-sonnet                  │
│   │   REFINERY       │     Role: Quality verification                        │
│   │  (Validator)     │     Config: Read-only, focused                        │
│   └─────────────────┘                                                        │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Open**Code Agent Configuration for Gas Town:

```markdown
# ~/.config/opencode/agents/mayor.md
---
model: anthropic/claude-opus-4
temperature: 0.3
tools:
  read: allow
  grep: allow
  glob: allow
  bash: deny
  write: deny
  edit: deny
---

You are the MAYOR - the strategic planner for Gas Town.
Your job: Analyze the overall task and create a work breakdown.
You NEVER execute tasks. You plan and delegate.
Output a WORK_QUEUE.md with atomic tasks for Dogs.
```

```markdown
# ~/.config/opencode/agents/dog.md
---
model: ollama/qwen2.5-coder:32b
temperature: 0.7
tools:
  read: allow
  write: allow
  edit: allow
  bash: ask
  grep: allow
---

You are a DOG - a worker in Gas Town.
Your job: Execute ONE atomic task from WORK_QUEUE.md
Mark task complete when done. Keep commits atomic.
Run tests after each change.
```

**Or**chestration Script:

```bash
#!/bin/bash
# gas-town-opencode.sh

# Mayor plans
opencode run "Analyze project and create WORK_QUEUE.md" \
    --agent mayor

# Dogs work in parallel
for i in {1..3}; do
    (
        while [ -f "WORK_QUEUE.md" ] && grep -q "TODO" WORK_QUEUE.md; do
            opencode run "Pick and complete one TODO task" \
                --agent dog
        done
    ) &
done
wait

# Refinery validates
opencode run "Review all changes, run tests, report quality" \
    --agent refinery
```

### RPAI with Ralph Wiggum Loop

**Scen**ario: Running multiple Ralph loops in parallel.

```bash
# Feature 1 Ralph loop
cd ~/project/feature-auth
while :; do cat PROMPT-auth.md | claude-code ; done

# Feature 2 Ralph loop
cd ~/project/feature-api
while :; do cat PROMPT-api.md | claude-code ; done

# Feature 3 Ralph loop
cd ~/project/feature-ui
while :; do cat PROMPT-ui.md | claude-code ; done
```

**RP**AI View:
```
┌───────────────────────────────────────────────────────────────────────────────┐
│  rpai - Ralph Loops                                                            │
│  ═══════════════════                                                           │
│                                                                                │
│  ▶ claude    ~/project/feature-auth     CPU: 45%  [RALPH]                     │
│  ⏸ claude    ~/project/feature-api      CPU: 1%   [RALPH]  ← Check!           │
│  ▶ claude    ~/project/feature-ui       CPU: 38%  [RALPH]                     │
│                                                                                │
└───────────────────────────────────────────────────────────────────────────────┘
```

**Con**figuration for Ralph:

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 2.0,  // Lower threshold - Ralph idles between iterations
  "refresh_ms": 100       // Slightly slower refresh for long-running loops
}
```

### RPAI with Gas Town

**RP**AI View of Gas Town:
```
┌───────────────────────────────────────────────────────────────────────────────┐
│  rpai - Gas Town                                                               │
│  ═══════════════                                                               │
│                                                                                │
│  ▶ claude    ~/town/mayor         CPU: 8%   [ORCHESTRATING]                   │
│  ⏸ claude    ~/town/architect     CPU: 0.5% [DEACON-IDLE]                     │
│  ▶ claude    ~/town/testing       CPU: 25%  [DEACON-ACTIVE]                   │
│  ▶ claude    ~/town/dog-1         CPU: 42%  [DOG-WORKING]                     │
│  ⏸ claude    ~/town/dog-2         CPU: 1%   [DOG-DONE]      ← Deploy!         │
│  ▶ claude    ~/town/dog-3         CPU: 38%  [DOG-WORKING]                     │
│  ⏸ claude    ~/town/refinery      CPU: 0.8% [WAITING]                         │
│                                                                                │
└───────────────────────────────────────────────────────────────────────────────┘
```

**Con**figuration for Gas Town:

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 5.0,  // Higher threshold - Mayor often has low CPU
  "refresh_ms": 50        // Fast refresh to catch Dog completion quickly
}
```

### Combination Matrix

| Tool Combo | Use Case | Complexity | Value | Notes |
|------------|----------|------------|-------|-------|
| **OpenCode + Ralph** | Provider-flexible iteration | Low | **High** | Cost-optimized overnight builds |
| **OpenCode + Gas Town** | Multi-provider agent factory | Medium | **High** | Premium planning, cheap execution |
| **RPAI + Ralph** | Parallel Ralph visibility | Low | **High** | See which loops need attention |
| **RPAI + Gas Town** | Agent hierarchy dashboard | Medium | **Very High** | Essential for Dog management |
| **OpenCode + RPAI** | Full alternative stack | Medium | **High** | Complete Claude Code replacement |
| **Claude Code + RPAI** | Enhanced Claude visibility | Low | **High** | Best of both worlds |

---

## Mental Models

### Mental Model 1: The Universal Adapter

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       OpenCode as Universal Adapter                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                            Your Workflow                                     │
│                                 │                                            │
│                                 ▼                                            │
│                      ┌─────────────────────┐                                │
│                      │      OpenCode        │                                │
│                      │  Universal Adapter   │                                │
│                      └──────────┬──────────┘                                │
│                                 │                                            │
│              ┌──────────────────┼──────────────────┐                        │
│              ▼                  ▼                  ▼                        │
│        ┌──────────┐       ┌──────────┐       ┌──────────┐                  │
│        │  Claude  │       │   GPT    │       │  Local   │                  │
│        │ Anthropic│       │  OpenAI  │       │  Ollama  │                  │
│        └──────────┘       └──────────┘       └──────────┘                  │
│                                                                              │
│   Your commands stay the same. The backend can change.                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key** Insight: Decouple your workflow from your provider. Invest in your commands and patterns, not in a specific model's quirks.

### Mental Model 2: The Control Tower

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RPAI as Control Tower                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Traditional Development:                                                   │
│     You ←→ Single IDE ←→ Single Context                                     │
│                                                                              │
│   AI-Assisted Development:                                                   │
│     You ←→ RPAI (Tower) ←→ Multiple Agents ←→ Multiple Contexts            │
│              ↑                                                               │
│         Visibility layer                                                     │
│                                                                              │
│   You don't fly each plane—you monitor the airspace and intervene           │
│   when needed.                                                               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key** Insight: Scale by observation, not by attention division. Let the tower tell you where to focus.

### Mental Model 3: The "Idle = Done" Pattern

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Attention Inversion                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Agent States:                                                              │
│     ▶ Running  = "Leave me alone, I'm working"                              │
│     ⏸ Waiting  = "I need you—I'm blocked or finished"                       │
│                                                                              │
│   Your Attention:                                                            │
│     Running agents → Low priority (check occasionally)                       │
│     Waiting agents → High priority (they need input)                         │
│                                                                              │
│   Without RPAI (8 agents):                                                   │
│     8 agents × 2 minutes checking each = 16 minutes/cycle                   │
│     Most checks find "still working" → wasted time                          │
│                                                                              │
│   With RPAI (8 agents):                                                      │
│     Open RPAI: 5 seconds                                                     │
│     Identify 2 idle agents: instant                                          │
│     Jump and respond: 2 minutes each                                         │
│     Total: ~4.5 minutes/cycle                                                │
│                                                                              │
│   Attention savings: 70%+                                                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key** Insight: Invert your attention model. Spend time on idle agents, not running ones.

### Mental Model 4: The Tool Ownership Spectrum

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      Tool Ownership Spectrum                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Fully Owned                                           Fully Rented        │
│        │                                                      │              │
│        ▼                                                      ▼              │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐                 │
│   │  RPAI   │    │ OpenCode │    │  Hybrid │    │ Claude  │                 │
│   │         │    │         │    │         │    │  Code   │                 │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘                 │
│       │              │              │              │                        │
│       ▼              ▼              ▼              ▼                        │
│   MIT license    MIT license    Mix of both    Proprietary                  │
│   Full control   Provider flex  Best features  Best Claude                  │
│   Local only     Any model      Complex setup  Simple setup                 │
│                                                                              │
│   Choose your position based on:                                             │
│   - Control requirements                                                     │
│   - Cost sensitivity                                                         │
│   - Privacy needs                                                            │
│   - Simplicity preference                                                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key** Insight: There's no universally "correct" position. Match your position to your constraints.

---

## Checkpoints

### Installation Verification Checkpoints

#### OpenCode Installation

```bash
# Checkpoint 1: Binary exists
opencode --version
# Expected: opencode 1.x.x

# Checkpoint 2: Path is correct
which opencode
# Expected: /usr/local/bin/opencode (or npm global path)
```

#### RPAI Installation

```bash
# Checkpoint 1: Binary exists
which rpai
# Expected: ~/.cargo/bin/rpai (or similar)

# Checkpoint 2: Version check
rpai --version
# Expected: rpai 0.1.12 (or newer)

# Checkpoint 3: Basic execution
rpai scan
# Expected: List of sessions (may be empty if no agents running)
```

### Provider Configuration Verification

```bash
# Checkpoint: List available models
opencode models
# Expected:
# ┌────────────────────────────────────────────┐
# │ Available Models                            │
# ├────────────────────────────────────────────┤
# │ anthropic/claude-opus-4-5                   │
# │ anthropic/claude-sonnet-4                   │
# │ openai/gpt-5.1-codex                        │
# │ google/gemini-3-pro                         │
# │ ollama/qwen2.5-coder:32b                   │
# └────────────────────────────────────────────┘
```

### tmux Integration Verification

```bash
# Checkpoint 1: tmux config loaded
grep -q "rpai" ~/.tmux.conf && echo "RPAI binding found"
# Expected: "RPAI binding found"

# Checkpoint 2: Keybinding works
# In tmux, press: prefix + a
# Expected: RPAI popup appears (or "No sessions" if no agents)
```

### Agent Detection Verification

```bash
# Checkpoint: Start an agent and detect it
cd /tmp && claude

# In another terminal:
rpai scan
# Expected: Shows the Claude instance with PID and directory
```

### Configuration Verification

```bash
# OpenCode config
cat opencode.json | jq .
# Expected: Valid JSON with model, providers, permissions

# RPAI config
cat ~/.config/rpai/config.json
# Expected: JSON with theme, idle_threshold, refresh_ms, ascii_symbols
```

---

## Troubleshooting

### OpenCode Troubleshooting

#### Issue: "ProviderInitError" on startup

```
Error: ProviderInitError - Failed to initialize provider
```

**Sol**ution:
```bash
# Re-authenticate provider
opencode
/connect anthropic  # or your provider

# Or clear and reconfigure
rm -rf ~/.local/share/opencode/auth.json
opencode
/connect
```

#### Issue: "AI_APICallError" - API calls failing

```
Error: AI_APICallError - Request failed
```

**Sol**ution:
```bash
# Clear provider cache
rm -rf ~/.cache/opencode

# Restart OpenCode
opencode
```

#### Issue: Model not found

```
Error: Model "anthropic/claude-opus" not found
```

**Sol**ution:
```bash
# List available models
opencode models --refresh

# Use correct format: provider/model-id
# Example: anthropic/claude-opus-4-5 (not claude-opus)
```

#### Issue: OpenCode hangs/freezes

**Sol**ution:
```bash
# In TUI, try compacting context
/compact

# If unresponsive, check logs
cat ~/.local/share/opencode/log/*.log | tail -100

# Run with debug logging
opencode --log-level DEBUG
```

#### Issue: Windows EPERM / Cannot execute binary

**Sol**ution:
1. Run terminal as Administrator
2. Or enable Developer Mode in Windows Settings
3. Reinstall: `npm uninstall -g opencode-ai && npm install -g opencode-ai`

#### Issue: Config changes not applying

**Sol**ution:
```bash
# Check config syntax (JSONC allowed)
cat opencode.json | jq .  # Will error on invalid JSON

# Check config load order
# Project config overrides global
# Check both ~/.config/opencode/opencode.json AND ./opencode.json
```

### RPAI Troubleshooting

#### Problem: RPAI Shows No Sessions

**Sym**ptoms: `rpai scan` returns empty, RPAI TUI shows "No sessions"

**Cau**ses & Solutions:

1. **No** agents running**
   ```bash
   # Check manually
   ps aux | grep -E "claude|opencode|codex|cursor|gemini"
   # If empty, start an agent first
   ```

2. **Ag**ent name not matched**
   ```bash
   # RPAI looks for: opencode|claude|codex|cursor|gemini
   # If using a differently-named agent, it won't appear
   # Workaround: rename the process or modify source
   ```

3. **Not** running in tmux**
   ```bash
   # RPAI needs tmux for session correlation
   tmux  # Start tmux first
   claude  # Then start agent
   ```

#### Problem: Agent Shows as "Running" When Idle

**Sym**ptoms: Agent at Running symbol despite being at prompt

**Sol**utions:

1. **LSP** processes inflating CPU**
   ```bash
   # Check process tree
   pstree -p $(pgrep -f claude)
   # Look for language servers consuming CPU
   ```

2. **Thre**shold too low**
   ```json
   // Raise idle_threshold in config
   { "idle_threshold": 5.0 }
   ```

#### Problem: Agent Shows as "Waiting" When Working

**Sym**ptoms: Agent at Waiting symbol while actively processing

**Sol**utions:

1. **Thre**shold too high**
   ```json
   // Lower idle_threshold in config
   { "idle_threshold": 2.0 }
   ```

2. **I/O**-bound work (not CPU)**
   - Network operations, disk reads appear low-CPU
   - Consider this a limitation

#### Problem: "Jump" Doesn't Work

**Sym**ptoms: Pressing Enter doesn't switch to session

**Sol**utions:

1. **tmux** pane correlation failed**
   ```bash
   # Check tmux pane list
   tmux list-panes -a
   # Verify agent's parent process chain includes tmux
   ```

2. **tmux** session in different server**
   ```bash
   # RPAI queries default tmux server
   # Ensure all agents run in the same tmux server
   ```

#### Problem: Unicode Symbols Not Displaying

**Sym**ptoms: Garbled characters instead of Running/Waiting symbols

**Sol**ution:
```json
// Enable ASCII mode
{
  "ascii_symbols": true
}
```

Or install a Unicode-capable font in your terminal.

### Debug Resources

**Open**Code logs:
- macOS/Linux: `~/.local/share/opencode/log/`
- Windows: `%USERPROFILE%\.local\share\opencode\log\`

**In**crease verbosity:
```bash
opencode --log-level DEBUG --print-logs
```

**Sup**port channels:
- OpenCode GitHub: https://github.com/sst/opencode/issues
- OpenCode Discord: https://opencode.ai/discord
- RPAI GitHub: https://github.com/radoslav11/rpai/issues

---

## Source Attribution

### OpenCode Sources

**Pri**mary:
- **Git**Hub Repository:** https://github.com/sst/opencode
- **Off**icial Website:** https://opencode.ai
- **Doc**umentation:** https://opencode.ai/docs/

**Com**parison Sources:
- **Dan**iel Miessler - OpenCode vs Claude Code:** https://danielmiessler.com/blog/opencode-vs-claude-code
- **And**rea Grandi - Comparing Claude Code vs OpenCode:** https://www.andreagrandi.it/posts/comparing-claude-code-vs-opencode-testing-different-models/
- **Bui**lder.io - OpenCode vs Claude Code:** https://www.builder.io/blog/opencode-vs-claude-code
- **NxC**ode - OpenCode vs Claude Code vs Cursor 2026:** https://www.nxcode.io/resources/news/opencode-vs-claude-code-vs-cursor-2026
- **Byt**eIota - 2026 Battle Guide:** https://byteiota.com/opencode-vs-claude-code-2026-battle-guide-48k-vs-47k/

**Ral**ph Integration Sources:
- **Open**Code Ralph Wiggum Plugin:** https://github.com/Th0rgal/opencode-ralph-wiggum
- **Ral**ph Orchestrator (Multi-backend):** https://github.com/mikeyobrien/ralph-orchestrator
- **Ral**phy (Multi-agent):** https://github.com/michaelshimeles/ralphy
- **Mat**t Pocock - Ralph Wiggum Approach:** https://x.com/mattpocockuk/status/2007924876548637089

**Bac**kground Sources:
- **Tec**h Funding News - OpenCode Background Story:** https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/
- **Med**ium - OpenCode Leading Open-Source AI Coding Agent:** https://medium.com/@shouke.wei/opencode-the-leading-open-source-ai-coding-agent-taking-the-developer-world-by-storm-147dbadf5d7c

### RPAI Sources

**Pri**mary:
- **Git**Hub Repository:** https://github.com/radoslav11/rpai
- **Aut**hor:** radoslav11
- **Con**tributors:** radoslav11, ntcuong777
- **Lic**ense:** MIT
- **Ver**sion Analyzed:** 0.1.12 (January 2026)

**Tec**hnology Stack:
- Language: Rust
- TUI Framework: ratatui
- Terminal Control: crossterm
- System Info: sysinfo

### Related Documents

**Orc**hestration patterns:
- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md` - Ralph pattern details
- `extractions/orchestration/015-gas-town-yegge.md` - Gas Town architecture
- `extractions/orchestration/020-cc-mirror.md` - CC-Mirror multi-worker
- `synthesis/mastery-ralph-complete.md` - Complete Ralph analysis

**Arc**hitecture:
- `synthesis/architecture-complexity-ladder.md` - Complexity progression
- `synthesis/MASTER-PLAYBOOK.md` - Complete capability guide

---

## Summary

### The Three-Tool Ecosystem

| Tool | Primary Value | Best For |
|------|--------------|----------|
| **Claude Code** | Best Claude experience | Single-provider, checkpoint-critical workflows |
| **OpenCode** | Provider flexibility | Cost optimization, privacy, multi-model workflows |
| **RPAI** | Multi-agent visibility | Any workflow with 3+ parallel agents |

### Key Takeaways

1. **The** choice isn't either/or** - Many developers use Claude Code for Claude-specific work and OpenCode for provider diversity.

2. **RP**AI complements both** - It's a visibility layer, not an alternative. Use it with Claude Code, OpenCode, or both.

3. **Cost** optimization is real** - OpenCode's provider flexibility enables significant savings for high-volume workflows.

4. **Pri**vacy has options** - OpenCode + Ollama provides full local execution for sensitive codebases.

5. **Vis**ibility scales** - Manual window-switching fails at 3+ agents. RPAI makes it manageable at any scale.

6. **Pat**terns transfer** - Ralph, Gas Town, and other orchestration patterns work with both Claude Code and OpenCode.

### Final Decision Guide

```
If you value...
├── Best Claude integration      → Claude Code
├── Provider flexibility         → OpenCode
├── Cost optimization            → OpenCode
├── Privacy/local execution      → OpenCode + Ollama
├── Multi-agent visibility       → Add RPAI
├── Open source philosophy       → OpenCode + RPAI
└── Simplicity over flexibility  → Claude Code
```

---

*Synthesis completed: 2026-01-19*
*Lines: 900+*
*Source documents: extractions/tooling/011-opencode-alternative.md, extractions/tooling/010-rpai-tmux.md*
