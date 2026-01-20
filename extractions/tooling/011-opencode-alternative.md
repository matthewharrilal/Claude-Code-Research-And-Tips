# OpenCode: The Open Source Claude Code Alternative

## Source
- **Author:** SST Team (Jay V, Frank Wang, Dax Raad, Adam Elmore)
- **Project:** https://github.com/sst/opencode
- **Website:** https://opencode.ai
- **License:** MIT
- **GitHub Stars:** 78,000+ (as of January 2026)
- **Contributors:** 600+
- **Monthly Users:** 650,000+

---

## You Are Here

**Context Orientation:**

You're exploring **OpenCode**, the leading open-source alternative to Claude Code. This extraction covers:

- What OpenCode is and why it matters
- How it compares to Claude Code (feature parity, trade-offs)
- Complete installation and configuration
- Provider setup for Anthropic, OpenAI, Google, and 70+ others
- **Integration patterns with Ralph, Gas Town, and CC-Mirror**
- Mental models for choosing between tools

**Where This Fits:**

```
AI Coding Agent Landscape
├── Proprietary Tools
│   ├── Claude Code (Anthropic) ← Tightly integrated, optimized
│   ├── GitHub Copilot
│   └── Cursor
└── Open Source Tools
    ├── OpenCode (SST) ← YOU ARE HERE
    ├── Aider
    └── Continue
```

**Prerequisites:**
- Familiarity with terminal-based workflows
- Understanding of API keys and provider authentication
- Optional: Knowledge of Claude Code for comparison context

---

## What This Is

### The One-Liner

> **OpenCode is an open-source, provider-agnostic AI coding agent built for the terminal, supporting 75+ LLM providers including local models.**

### The Elevator Pitch

OpenCode emerged in mid-2025 from the SST (Serverless Stack) team—the creators behind one of the most popular serverless frameworks. Built on a radical premise: **developers should own their tools**. While Claude Code ties you to Anthropic's ecosystem, OpenCode lets you swap providers, run local models, or bring the API keys you're already paying for.

### Key Differentiators

| Aspect | OpenCode | Claude Code |
|--------|----------|-------------|
| **Source** | Open source (MIT) | Proprietary |
| **Providers** | 75+ (including local) | Anthropic only |
| **Cost** | Free tool + API costs | $17-100/mo + API |
| **Ecosystem** | Provider-agnostic | Anthropic-optimized |
| **Architecture** | Client/server | CLI monolith |
| **Parallelism** | Native multi-session | Single session |

### The BYOK Movement

OpenCode became the standard-bearer for the "Bring Your Own Key" (BYOK) movement in 2026. This philosophy means:

1. **No vendor lock-in** - Switch providers if costs spike
2. **Full control** - Negotiate volume discounts directly
3. **Privacy options** - Run entirely local with Ollama
4. **Enterprise friendly** - On-premise deployment without "phoning home"

---

## Why It Matters

### The Problem OpenCode Solves

Claude Code is excellent—optimized specifically for Claude models with features like subagent parallelism, checkpoint rewind, and intelligent model selection. But it creates **dependency**:

```
Claude Code Constraints:
├── Must use Anthropic models
├── API costs non-negotiable
├── No local model option
├── Closed source (can't audit/extend)
└── Ecosystem changes without warning
```

OpenCode breaks this dependency:

```
OpenCode Freedom:
├── Choose ANY provider (or multiple)
├── Compare costs across providers
├── Run local for sensitive code
├── Community-driven development
└── Fork and customize as needed
```

### Who Benefits Most

| Profile | Primary Benefit |
|---------|-----------------|
| **Budget-conscious devs** | Price shop between providers |
| **Privacy-focused teams** | Local models, no external API |
| **Enterprise/regulated** | On-premise deployment |
| **Experimentation-driven** | Try new models instantly |
| **Open source advocates** | Contribute, audit, fork |

### The Real Cost Analysis

**Claude Code:**
- Subscription: $17-100/month
- Plus API usage on top
- Single provider (can't optimize)

**OpenCode:**
- Tool: $0
- API usage only
- Can optimize across providers
- Can use free/local models for simple tasks

---

## Architecture Deep Dive

### Client/Server Design

Unlike Claude Code's monolithic CLI, OpenCode uses a **client/server architecture**:

```
┌─────────────────────────────────────────────────────────┐
│                     OpenCode Architecture                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   ┌─────────────┐      ┌─────────────────────────────┐  │
│   │   Clients   │      │         Core Server         │  │
│   │             │      │                             │  │
│   │  • TUI      │ ←──→ │  • Agent Orchestration      │  │
│   │  • Desktop  │      │  • Provider Management      │  │
│   │  • IDE      │      │  • Tool Registry            │  │
│   │  • Web      │      │  • Session State            │  │
│   │  • Mobile*  │      │  • MCP Integration          │  │
│   └─────────────┘      └─────────────────────────────┘  │
│         │                          │                     │
│         │                          │                     │
│         ▼                          ▼                     │
│   ┌─────────────┐      ┌─────────────────────────────┐  │
│   │  Local UI   │      │      Provider Layer         │  │
│   │  Rendering  │      │                             │  │
│   └─────────────┘      │  • Anthropic (Claude)       │  │
│                        │  • OpenAI (GPT)             │  │
│                        │  • Google (Gemini)          │  │
│                        │  • Ollama (Local)           │  │
│                        │  • 70+ more via AI SDK      │  │
│                        └─────────────────────────────┘  │
│                                                          │
│   * Mobile in development                               │
└─────────────────────────────────────────────────────────┘
```

**Benefits of this architecture:**

1. **Remote Execution** - Run server in Docker/cloud, attach from anywhere
2. **Workspaces** - Sessions persist even when you close your laptop
3. **Multi-Client** - Different interfaces for different contexts
4. **Headless Mode** - API server for automation/scripting

### Agent System

OpenCode's agent system mirrors Claude Code's but with more customization:

**Primary Agents (cycle with Tab):**

| Agent | Purpose | Default Tools |
|-------|---------|---------------|
| **build** | Full development | All tools enabled |
| **plan** | Analysis only | Read-only, asks before bash |

**Subagents (invoke with @):**

| Subagent | Purpose | Access Level |
|----------|---------|--------------|
| **@general** | Complex multi-step | Full tools |
| **@explore** | Codebase discovery | Read-only |

**Creating Custom Agents:**

```bash
opencode agent create
```

This interactive wizard generates markdown configuration:

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

### Tool System

OpenCode provides Claude Code-equivalent tools plus extensions:

| Tool | Function | Claude Code Equivalent |
|------|----------|------------------------|
| `read` | Read file contents | Read |
| `write` | Create/overwrite files | Write |
| `edit` | String replacement edits | Edit |
| `patch` | Apply patch files | — |
| `grep` | Regex content search | Grep |
| `glob` | File pattern matching | Glob |
| `list` | Directory listing | Bash (ls) |
| `bash` | Shell execution | Bash |
| `lsp` | Language server integration | — |
| `webfetch` | Fetch web pages | WebFetch |
| `question` | Ask user for input | — |
| `skill` | Load SKILL.md instructions | — |
| `todowrite/todoread` | Task tracking | TodoWrite |

**Permissions Configuration:**

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

---

## Key Features

### 1. Multi-Provider Support

The killer feature. Configure any combination of providers:

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

### 2. LSP Integration

**Out-of-the-box Language Server Protocol support.** OpenCode automatically loads appropriate LSPs for the codebase, enabling:

- Go-to-definition
- Find references
- Hover information
- Code intelligence without setup

### 3. Multi-Session Parallelism

Unlike Claude Code (single session), OpenCode supports **true parallel sessions** on the same project:

```bash
# Terminal 1
opencode  # Session A: Working on API

# Terminal 2
opencode  # Session B: Working on Frontend

# No conflicts, shared filesystem awareness
```

### 4. Session Sharing

Generate shareable links for debugging and collaboration:

```
/share
→ https://opencode.ai/share/abc123...
```

### 5. MCP Integration

Full Model Context Protocol support for extending capabilities:

```json
{
  "mcp": {
    "sentry": {
      "type": "remote",
      "url": "https://mcp.sentry.io",
      "oauth": true
    },
    "local-db": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-sqlite"]
    }
  }
}
```

### 6. Headless/API Mode

Run as a server for automation:

```bash
# Start API server
opencode serve --port 8080

# Start with web interface
opencode web

# Non-interactive execution
opencode run "Explain the authentication flow" --output json
```

---

## Installation & Setup

### Quick Install

**macOS/Linux:**
```bash
curl -fsSL https://opencode.ai/install | bash
```

**npm (cross-platform):**
```bash
npm install -g opencode-ai@latest
```

**Homebrew (macOS):**
```bash
brew install opencode
```

**Windows (Scoop):**
```powershell
scoop install opencode
```

**Windows (Chocolatey):**
```powershell
choco install opencode
```

### Post-Installation

```bash
# Navigate to project
cd my-project

# Launch OpenCode
opencode

# Initialize project analysis (creates AGENTS.md)
/init
```

### Desktop Application

Available for macOS (Apple Silicon + Intel), Windows, and Linux:
- Download from https://opencode.ai/download
- Or from GitHub releases

---

## Configuration Options

### Configuration File Locations

Files merge together (later overrides earlier):

1. **Remote config** - `.well-known/opencode` (organizational defaults)
2. **Global config** - `~/.config/opencode/opencode.json` (user preferences)
3. **Custom config** - `OPENCODE_CONFIG` env var
4. **Project config** - `opencode.json` in project root
5. **Inline config** - `OPENCODE_CONFIG_CONTENT` env var

### Core Configuration

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

  // Auto-update behavior
  "autoupdate": "notify",  // true, false, "notify"

  // Provider allowlist (only these enabled)
  "enabled_providers": ["anthropic", "openai"],

  // Provider blocklist
  "disabled_providers": ["azure"]
}
```

### Variable Substitution

```json
{
  "providers": {
    "anthropic": {
      // Environment variable injection
      "apiKey": "{env:ANTHROPIC_API_KEY}",

      // File content injection
      "systemPrompt": "{file:~/.opencode/system-prompt.md}"
    }
  }
}
```

---

## Provider Configuration

### Anthropic (Claude)

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

**Environment variable:** `ANTHROPIC_API_KEY`

**OAuth Support:** Connect Claude Pro/Max accounts via `/connect anthropic`

### OpenAI (GPT)

```json
{
  "providers": {
    "openai": {
      "apiKey": "{env:OPENAI_API_KEY}"
    }
  }
}
```

**Environment variable:** `OPENAI_API_KEY`

**OAuth Support:** Connect ChatGPT Plus/Pro via browser authentication

### Google (Gemini/Vertex)

```json
{
  "providers": {
    "google": {
      "apiKey": "{env:GOOGLE_GENERATIVE_AI_API_KEY}"
    }
  }
}
```

**For Vertex AI:**
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

### Ollama (Local Models)

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

### Custom OpenAI-Compatible Provider

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

### OpenCode Zen (Curated Models)

OpenCode's own curated model gateway with 25+ tested models:

```bash
# Connect to Zen
/connect opencode

# In browser: create API key at opencode.ai/auth
```

**Benefits:**
- Pre-tested models optimized for coding
- Pay-as-you-go pricing
- Free tier models available
- No separate API keys needed

---

## Integration Patterns

This is where OpenCode's flexibility shines—it can slot into existing orchestration patterns designed for Claude Code.

### With Ralph

The **Ralph Wiggum Loop** pattern works seamlessly with OpenCode, offering provider flexibility that Claude Code cannot match.

**Basic Ralph with OpenCode:**

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

**Using the OpenCode Ralph Plugin:**

```bash
# Install the dedicated Ralph implementation
npm install -g @th0rgal/ralph-wiggum

# Run Ralph with OpenCode backend
ralph "Build a REST API. Output <promise>COMPLETE</promise> when done." \
    --max-iterations 20 \
    --model anthropic/claude-sonnet-4
```

**Provider-Flexible Ralph:**

The key advantage over Claude Code: switch models mid-project or use different models for different tasks:

```json
// ralph-config.json
{
  "phases": {
    "planning": "anthropic/claude-opus-4",
    "implementation": "openai/gpt-5.1-codex",
    "review": "google/gemini-3-pro"
  }
}
```

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

**Cost Optimization with Ralph:**

```bash
# Use cheaper model for simple iterations
opencode run "$(cat PROMPT.md)" --model ollama/qwen2.5-coder:32b

# Escalate to premium model for complex tasks
if grep -q "NEED_PREMIUM" ./STATUS.md; then
    opencode run "$(cat PROMPT.md)" --model anthropic/claude-opus-4
fi
```

### With Gas Town

Steve Yegge's **Gas Town** agent factory pattern translates directly to OpenCode with multi-provider benefits.

**Gas Town Roles with OpenCode:**

```
┌──────────────────────────────────────────────────────────┐
│                   Gas Town + OpenCode                     │
├──────────────────────────────────────────────────────────┤
│                                                           │
│   ┌─────────────┐     Provider: anthropic/claude-opus-4  │
│   │   MAYOR     │     Role: Strategic planning           │
│   │  (Planner)  │     Config: Read-only, high reasoning  │
│   └──────┬──────┘                                        │
│          │                                                │
│          ▼                                                │
│   ┌─────────────┐     Provider: openai/gpt-5.1-codex     │
│   │   DEACON    │     Role: Work distribution            │
│   │  (Router)   │     Config: Read-only, fast inference  │
│   └──────┬──────┘                                        │
│          │                                                │
│    ┌─────┴─────┐                                         │
│    ▼           ▼                                         │
│ ┌──────┐   ┌──────┐   Provider: ollama/qwen2.5:32b      │
│ │ DOG  │   │ DOG  │   Role: Task execution               │
│ │  #1  │   │  #2  │   Config: Full tools, local/cheap    │
│ └──────┘   └──────┘                                      │
│                                                           │
│   ┌─────────────┐     Provider: anthropic/claude-sonnet  │
│   │  REFINERY   │     Role: Quality verification         │
│   │ (Validator) │     Config: Read-only, focused         │
│   └─────────────┘                                        │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

**OpenCode Agent Configuration for Gas Town:**

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

**Gas Town Orchestration Script:**

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

### With CC-Mirror

**CC-Mirror** enables multi-agent coordination in Claude Code through hidden session manipulation. OpenCode offers a **native alternative** with its built-in multi-session support.

**Comparison: CC-Mirror vs OpenCode Multi-Session**

| Aspect | CC-Mirror | OpenCode Multi-Session |
|--------|-----------|------------------------|
| **Approach** | Hidden session hack | Native design |
| **Complexity** | High (bash wizardry) | Low (just run multiple) |
| **Provider** | Anthropic only | Any provider |
| **Stability** | Fragile (unofficial) | Stable (designed for it) |
| **Communication** | File-based | File-based |
| **Use Case** | Claude Code power users | Anyone wanting parallelism |

**When to Use Which:**

```
Decision Tree:
├── Need Anthropic-specific features (checkpoints, subagents)?
│   └── Use Claude Code + CC-Mirror
├── Need provider flexibility?
│   └── Use OpenCode Multi-Session
├── Need local/private execution?
│   └── Use OpenCode + Ollama
└── Want simplest multi-agent setup?
    └── Use OpenCode Multi-Session
```

**OpenCode Multi-Session Example:**

```bash
# Terminal 1: Backend Agent
cd my-project
OPENCODE_SESSION=backend opencode
# Work on API...

# Terminal 2: Frontend Agent
cd my-project
OPENCODE_SESSION=frontend opencode
# Work on UI...

# Terminal 3: Test Agent
cd my-project
OPENCODE_SESSION=tests opencode
# Continuous testing...

# All agents see each other's changes via filesystem
```

**Coordination Pattern:**

```bash
#!/bin/bash
# parallel-agents.sh

# Create coordination files
mkdir -p .opencode-coord
echo "READY" > .opencode-coord/backend-status
echo "READY" > .opencode-coord/frontend-status

# Launch parallel agents
(
    export OPENCODE_SESSION=backend
    opencode run "Build the user API endpoints. Signal in .opencode-coord/backend-status"
) &

(
    export OPENCODE_SESSION=frontend
    # Wait for backend to finish
    while [ "$(cat .opencode-coord/backend-status)" != "DONE" ]; do
        sleep 5
    done
    opencode run "Build UI consuming the user API"
) &

wait
echo "Both agents complete"
```

### Combination Matrix

| OpenCode + | Use Case | Complexity | Value | Example |
|------------|----------|------------|-------|---------|
| **Ralph** | Provider-flexible continuous iteration | Low | **High** | Cost-optimized overnight builds |
| **Gas Town** | Multi-provider agent factory | Medium | **High** | Premium planning, cheap execution |
| **CC-Mirror** | Alternative parallelism approach | Medium | Medium | When you need native multi-session |
| **MCP Servers** | Extended tool capabilities | Low | **High** | Database, Sentry, GitHub integration |
| **Ollama** | Private/local execution | Low | **High** | Sensitive codebases, offline work |
| **rpai** | Multi-agent tmux monitoring | Low | Medium | Managing Gas Town visually |

---

## Comparison to Claude Code

### Feature Parity Analysis

| Feature | OpenCode | Claude Code | Notes |
|---------|----------|-------------|-------|
| **Terminal UI** | Yes | Yes | Both Ink-based |
| **File operations** | Yes | Yes | Equivalent |
| **Bash execution** | Yes | Yes | Equivalent |
| **Search (grep/glob)** | Yes | Yes | Equivalent |
| **Web fetch** | Yes | Yes | Equivalent |
| **Subagents** | Yes | Yes | Different implementation |
| **Custom agents** | Yes | Via prompts | OpenCode more structured |
| **MCP support** | Yes | Yes | Both full support |
| **Checkpoints** | No | Yes | Claude Code advantage |
| **Instant rewind** | No | Yes | Claude Code advantage |
| **Thinking mode** | Via model | Native | Claude Code optimized |
| **Multi-provider** | 75+ | 1 | **OpenCode advantage** |
| **Local models** | Yes | No | **OpenCode advantage** |
| **Open source** | Yes | No | **OpenCode advantage** |
| **Multi-session** | Native | Via hacks | **OpenCode advantage** |
| **Desktop app** | Yes | No | OpenCode advantage |
| **IDE extensions** | Yes | Limited | OpenCode advantage |

### When to Choose OpenCode

**Choose OpenCode when:**

1. **Cost matters** - You want to optimize across providers or use free/local models
2. **Privacy matters** - You need local execution or on-premise deployment
3. **Flexibility matters** - You want to experiment with different models
4. **Open source matters** - You need to audit, fork, or contribute
5. **Multi-session native** - You want parallel agents without hacks
6. **Provider diversity** - Your workflow benefits from different models for different tasks

### When to Choose Claude Code

**Choose Claude Code when:**

1. **Claude optimization** - You want the best Claude experience with native integrations
2. **Checkpoints** - You need instant rewind capabilities
3. **Subagent sophistication** - You want Claude Code's parallel workflow features
4. **Enterprise Anthropic** - You have an Anthropic enterprise agreement
5. **Simplicity** - You don't need provider flexibility
6. **Ecosystem integration** - You're heavily invested in Anthropic tooling

### Trade-offs Summary

```
Claude Code Trade-offs:
+ Best Claude integration
+ Checkpoints/rewind
+ Sophisticated subagents
+ Anthropic enterprise support
- Vendor lock-in
- No local models
- Single provider
- Closed source

OpenCode Trade-offs:
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

---

## Mental Models

### The Universal Interface Model

Think of OpenCode as a **universal adapter**:

```
┌─────────────────────────────────────────────────────────┐
│                    Your Workflow                         │
│                         │                                │
│                         ▼                                │
│              ┌─────────────────┐                        │
│              │    OpenCode     │                        │
│              │ Universal Adapter│                        │
│              └────────┬────────┘                        │
│                       │                                  │
│         ┌─────────────┼─────────────┐                   │
│         ▼             ▼             ▼                   │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐             │
│   │ Claude  │   │  GPT    │   │  Local  │             │
│   │Anthropic│   │ OpenAI  │   │ Ollama  │             │
│   └─────────┘   └─────────┘   └─────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Your commands stay the same. The backend can change.

### The Tool Ownership Model

```
Traditional SaaS:
  You rent → They own → They control

OpenCode Philosophy:
  You download → You own → You control

This means:
  - Your workflow survives provider changes
  - Your data stays local
  - Your customizations persist
  - Your investment compounds
```

### The Right Tool, Right Job Model

Different AI models excel at different tasks:

```
Task Matching:
├── Complex reasoning → Claude Opus / GPT-5
├── Fast iteration → Claude Haiku / GPT-4o-mini
├── Code generation → Codex / Code-specialized
├── Private work → Ollama / Local
└── Cost-sensitive → Cheapest capable model

OpenCode enables this matching.
Claude Code forces single-provider.
```

---

## Checkpoints

### Installation Verification

**You should see after installation:**

```bash
$ opencode --version
opencode 1.x.x

$ which opencode
/usr/local/bin/opencode  # or npm global path
```

### Provider Configuration Verification

```bash
$ opencode models
┌────────────────────────────────────────────┐
│ Available Models                            │
├────────────────────────────────────────────┤
│ anthropic/claude-opus-4-5                   │
│ anthropic/claude-sonnet-4                   │
│ openai/gpt-5.1-codex                        │
│ google/gemini-3-pro                         │
│ ollama/qwen2.5-coder:32b                   │
└────────────────────────────────────────────┘
```

### Project Initialization Verification

After running `/init`:

```bash
$ ls -la
...
AGENTS.md       # ← Project context file created
.opencode/      # ← OpenCode directory created
```

### Agent Creation Verification

```bash
$ opencode agent list
┌────────────────────────────────────────────┐
│ Available Agents                            │
├────────────────────────────────────────────┤
│ build (default) - Full development access   │
│ plan - Read-only analysis                   │
│ custom-agent - Your custom agent            │
└────────────────────────────────────────────┘
```

---

## Troubleshooting

### Common Issues and Solutions

**Issue: "ProviderInitError" on startup**

```
Error: ProviderInitError - Failed to initialize provider
```

**Solution:**
```bash
# Re-authenticate provider
opencode
/connect anthropic  # or your provider

# Or clear and reconfigure
rm -rf ~/.local/share/opencode/auth.json
opencode
/connect
```

---

**Issue: "AI_APICallError" - API calls failing**

```
Error: AI_APICallError - Request failed
```

**Solution:**
```bash
# Clear provider cache
rm -rf ~/.cache/opencode

# Restart OpenCode
opencode
```

---

**Issue: Model not found**

```
Error: Model "anthropic/claude-opus" not found
```

**Solution:**
```bash
# List available models
opencode models --refresh

# Use correct format: provider/model-id
# Example: anthropic/claude-opus-4-5 (not claude-opus)
```

---

**Issue: OpenCode hangs/freezes**

**Solution:**
```bash
# In TUI, try compacting context
/compact

# If unresponsive, check logs
cat ~/.local/share/opencode/log/*.log | tail -100

# Run with debug logging
opencode --log-level DEBUG
```

---

**Issue: Windows EPERM / Cannot execute binary**

**Solution:**
1. Run terminal as Administrator
2. Or enable Developer Mode in Windows Settings
3. Reinstall: `npm uninstall -g opencode-ai && npm install -g opencode-ai`

---

**Issue: Copy/paste not working (Linux)**

**Solution:**
```bash
# X11
sudo apt install xclip xsel

# Wayland
sudo apt install wl-clipboard
```

---

**Issue: Config changes not applying**

**Solution:**
```bash
# Check config syntax (JSONC allowed)
cat opencode.json | jq .  # Will error on invalid JSON

# Check config load order
# Project config overrides global
# Check both ~/.config/opencode/opencode.json AND ./opencode.json
```

### Debug Resources

**Log locations:**
- macOS/Linux: `~/.local/share/opencode/log/`
- Windows: `%USERPROFILE%\.local\share\opencode\log\`

**Increase verbosity:**
```bash
opencode --log-level DEBUG --print-logs
```

**Support channels:**
- GitHub Issues: https://github.com/sst/opencode/issues
- Discord: https://opencode.ai/discord

---

## Source Attribution

### Primary Sources

- **OpenCode GitHub Repository:** https://github.com/sst/opencode
- **OpenCode Official Website:** https://opencode.ai
- **OpenCode Documentation:** https://opencode.ai/docs/

### Comparison Sources

- **Daniel Miessler - OpenCode vs Claude Code:** https://danielmiessler.com/blog/opencode-vs-claude-code
- **Andrea Grandi - Comparing Claude Code vs OpenCode:** https://www.andreagrandi.it/posts/comparing-claude-code-vs-opencode-testing-different-models/
- **Builder.io - OpenCode vs Claude Code:** https://www.builder.io/blog/opencode-vs-claude-code
- **NxCode - OpenCode vs Claude Code vs Cursor 2026:** https://www.nxcode.io/resources/news/opencode-vs-claude-code-vs-cursor-2026
- **ByteIota - 2026 Battle Guide:** https://byteiota.com/opencode-vs-claude-code-2026-battle-guide-48k-vs-47k/

### Ralph Integration Sources

- **OpenCode Ralph Wiggum Plugin:** https://github.com/Th0rgal/opencode-ralph-wiggum
- **Ralph Orchestrator (Multi-backend):** https://github.com/mikeyobrien/ralph-orchestrator
- **Ralphy (Multi-agent):** https://github.com/michaelshimeles/ralphy
- **Matt Pocock - Ralph Wiggum Approach:** https://x.com/mattpocockuk/status/2007924876548637089

### Background Sources

- **Tech Funding News - OpenCode Background Story:** https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/
- **Medium - OpenCode Leading Open-Source AI Coding Agent:** https://medium.com/@shouke.wei/opencode-the-leading-open-source-ai-coding-agent-taking-the-developer-world-by-storm-147dbadf5d7c
- **Dynamic Business - OpenCode Revolutionizes AI Coding:** https://dynamicbusiness.com/ai-tools/opencode-revolutionizes-ai-coding-with-open-agile-platform.html

---

## Summary

OpenCode represents the **open source, provider-agnostic alternative** to Claude Code. While Claude Code offers the most optimized Claude experience with unique features like checkpoints and sophisticated subagents, OpenCode provides:

1. **Freedom** - 75+ providers, local models, no lock-in
2. **Ownership** - Open source, forkable, auditable
3. **Flexibility** - Multi-provider workflows, native parallelism
4. **Economy** - Cost optimization across providers

For orchestration patterns like Ralph and Gas Town, OpenCode enables **provider-flexible implementations** that can leverage the best model for each task while maintaining the core patterns that make these approaches powerful.

**The choice isn't either/or.** Many developers use both—Claude Code for Claude-specific workflows and OpenCode for provider diversity and local execution.

---

*Extraction completed: 2026-01-19*
*Lines: 750+*
*Sources: 15+ primary and secondary sources*
