# RPAI: Multi-Agent TUI for tmux

> **Deep Extraction** | Source: [github.com/radoslav11/rpai](https://github.com/radoslav11/rpai)
> **Extraction Date:** 2026-01-19 | **Reliability:** HIGH (active development, well-documented)
> **Category:** Tooling / Terminal Multiplexing / Multi-Agent Orchestration

---

## You Are Here

```
Claude Code Ecosystem
├── Single-Agent Tools
│   ├── Claude Code CLI
│   └── OpenCode, Cursor, etc.
├── Orchestration Patterns
│   ├── Ralph Wiggum Loop (continuous iteration)
│   ├── Gas Town (agent factory hierarchy)
│   └── CC-Mirror (multi-worker coordination)
└── Visibility & Coordination Layer  ← YOU ARE HERE
    └── RPAI (tmux-based multi-agent TUI)
```

**Context:** You have multiple AI coding agents running. Maybe several Ralph loops iterating on different features. Maybe a Gas Town hierarchy with Mayor, Deacons, and Dogs. Maybe parallel Claude Code instances across different project directories. **How do you see them all? How do you jump between them?**

RPAI solves the visibility problem for multi-agent workflows. It's not an orchestration system—it's the dashboard that makes orchestration observable.

---

## What This Is

**RPAI** (Rust Process AI) is a terminal user interface that:

1. **Scans** for running AI coding agents (Claude, OpenCode, Codex, Cursor, Gemini)
2. **Displays** their status, resource usage, and location in tmux
3. **Enables** instant navigation between agent sessions
4. **Shows** real-time activity state (running vs. idle)

Think of it as a "process monitor + session switcher" purpose-built for AI-assisted development workflows.

### The Problem It Solves

```
Without RPAI:
┌──────────────────────────────────────────────────────┐
│ Terminal 1: Claude working on auth feature...        │
│ Terminal 2: Claude refactoring database layer...     │
│ Terminal 3: Claude writing tests...                  │
│ Terminal 4: Claude reviewing PR...                   │
│                                                      │
│ You: "Which one finished? Which needs attention?"    │
│      *frantically switching between windows*         │
└──────────────────────────────────────────────────────┘

With RPAI:
┌──────────────────────────────────────────────────────┐
│  RPAI Session Manager                                │
│  ────────────────────                                │
│  ▶ claude  ~/project/auth      CPU: 45%  MEM: 2.1G  │
│  ⏸ claude  ~/project/db        CPU: 0.5% MEM: 1.8G  │ ← Idle! Needs input
│  ▶ claude  ~/project/tests     CPU: 38%  MEM: 2.0G  │
│  ⏸ claude  ~/project/review    CPU: 0.2% MEM: 1.5G  │ ← Idle! Review done
│                                                      │
│  [Enter: Jump] [j/k: Navigate] [q: Quit]            │
└──────────────────────────────────────────────────────┘
```

---

## Why It Matters

### The Multi-Agent Reality

Modern Claude Code workflows increasingly involve multiple parallel agents:

| Pattern | Agent Count | Visibility Need |
|---------|-------------|-----------------|
| Single Claude Code | 1 | None |
| Ralph Wiggum Loop | 1-3 | Low (sequential) |
| Parallel Ralph | 3-6 | **High** |
| Gas Town | 5-10+ | **Critical** |
| Personal Panopticon | 8+ | **Essential** |

As you scale beyond 2-3 agents, manual `tmux list-panes` and window-switching becomes untenable. RPAI provides:

1. **Instant Status Overview** - See all agents at a glance
2. **Activity Detection** - Know which agents need attention (idle = waiting for you)
3. **One-Key Navigation** - Jump directly to any session
4. **Resource Awareness** - Monitor CPU/memory across all agents

### The "Idle Detection" Insight

RPAI's killer feature is distinguishing **active** (▶) from **idle** (⏸) agents:

```
▶ Running (CPU > 3%): Claude is thinking/working
⏸ Waiting (CPU < 3%): Claude finished, awaiting your input
```

This transforms multi-agent management from "check each window" to "scan dashboard, jump to idle ones."

---

## Architecture Deep Dive

### Core Technology Stack

```rust
// Cargo.toml dependencies
[dependencies]
serde = "1.0"           // Configuration persistence
serde_json = "1.0"      // JSON config format
regex = "1"             // Process name matching
sysinfo = "0.32"        // System metrics (CPU, memory, uptime)
crossterm = "0.28"      // Terminal control
ratatui = "0.29"        // TUI framework
```

### Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    RPAI Architecture                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ Process     │    │   Tmux      │    │   Config    │     │
│  │ Scanner     │    │   Query     │    │   Loader    │     │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  Session Matcher                     │   │
│  │  (Correlates PIDs with tmux panes via parent chain) │   │
│  └──────────────────────────┬──────────────────────────┘   │
│                             │                               │
│                             ▼                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   AiSession[]                        │   │
│  │  - PID, agent type, working directory               │   │
│  │  - CPU%, memory, uptime                             │   │
│  │  - tmux session:window.pane                         │   │
│  │  - Running/Idle state                               │   │
│  └──────────────────────────┬──────────────────────────┘   │
│                             │                               │
│                             ▼                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  Ratatui TUI                         │   │
│  │  - Header + session list + status bar               │   │
│  │  - Keyboard/mouse event handling                    │   │
│  │  - Theme rendering                                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Process Scanning Pipeline

RPAI uses a **two-pass optimization** for efficiency:

```rust
// Pseudocode representation of the scanning logic

// Pass 1: Quick filter with regex (fast)
let agent_pattern = r"opencode|claude|codex|cursor|gemini";
let candidates = ps_output
    .filter(|proc| regex.is_match(&proc.command));

// Pass 2: Remove subprocesses (accurate)
let agents = candidates
    .filter(|proc| !candidates.contains(&proc.parent_pid));

// Only load matched PIDs into sysinfo (efficient)
let sessions = agents.map(|pid| {
    sysinfo.load_process(pid);
    AiSession {
        pid,
        cpu: calculate_tree_cpu(pid),  // Aggregate child CPU
        memory: sysinfo.memory(pid),
        // ...
    }
});
```

**Key Optimization:** Rather than loading all system processes into `sysinfo` (slow), RPAI first filters with a lightweight `ps` call, then loads only matched PIDs. This dramatically improves startup time.

### CPU Calculation: The LSP Problem

AI coding agents spawn many child processes, including Language Server Protocol (LSP) servers. These run constantly but don't represent agent activity:

```
claude (main process)
├── node (LSP coordinator)
│   ├── pyright (Python LSP)     ← Always running, low CPU
│   ├── rust-analyzer (Rust LSP) ← Always running, low CPU
│   └── clangd (C/C++ LSP)       ← Always running, low CPU
└── working process              ← Actual agent activity
```

RPAI explicitly **filters out LSP processes** when calculating CPU:

```rust
// Excluded from CPU aggregation
const LSP_EXCLUSIONS: &[&str] = &[
    "pyright", "clangd", "rust-analyzer",
    "typescript-language-server", "gopls"
];
```

This prevents false "running" detection when agents are actually idle.

### Tmux Integration

RPAI queries tmux to map processes to panes:

```bash
# Internal tmux query
tmux list-panes -a -F "#{session_name}:#{window_index}.#{pane_id} #{pane_pid}"
```

It then walks the process parent chain (up to 25 steps) to find which pane owns each agent:

```
Process 12345 (claude)
  ↑ Parent: 12340 (bash)
    ↑ Parent: 12335 (tmux pane)  ← Match! Session: dev:0.%1
```

---

## Key Features

### 1. Real-Time Process Monitoring

```
┌──────────────────────────────────────────────────────────────┐
│  rpai                                                        │
│  ════                                                        │
│                                                              │
│  ▶ claude    ~/projects/api-server                          │
│    PID: 45231 │ CPU: 42.3% │ MEM: 2.1 GB │ 0:15:32          │
│                                                              │
│  ⏸ claude    ~/projects/web-frontend                        │
│    PID: 45890 │ CPU: 0.8%  │ MEM: 1.9 GB │ 0:08:17          │
│                                                              │
│  ▶ opencode  ~/projects/mobile-app                          │
│    PID: 46102 │ CPU: 38.1% │ MEM: 1.7 GB │ 0:03:45          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Displayed Information:**
- Agent type (claude, opencode, codex, cursor, gemini)
- Working directory (where the agent was launched)
- Process ID
- CPU usage (aggregated across process tree, excluding LSPs)
- Memory consumption
- Uptime

### 2. Activity State Detection

The configurable idle threshold (default: 3.0% CPU) determines state:

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 3.0  // CPU% below this = "waiting"
}
```

**State Semantics:**
- `▶ Running`: Agent is actively processing (thinking, editing, running commands)
- `⏸ Waiting`: Agent finished its task, awaiting your input

### 3. Session Navigation

Jump directly to any agent session:

| Action | Keys | Effect |
|--------|------|--------|
| Navigate | `j`/`k` or `↑`/`↓` | Move selection |
| Jump | `Enter` | Switch to selected tmux pane |
| Theme | `t` | Cycle color themes |
| Command | `/` or `:` | Enter command mode |
| Quit | `q`, `Esc`, `Ctrl-C` | Exit RPAI |

### 4. Theme System

Six built-in themes with distinct color palettes:

```
Themes: gruvbox | nord | catppuccin | dracula | tokyo | solarized
```

Switch at runtime with `t` or via command mode:
```
:theme nord
```

Persisted to config file automatically.

### 5. Mouse Support

Full mouse navigation:
- Click to select session
- Scroll to navigate list
- Works within tmux popup

### 6. ASCII/Unicode Modes

For terminals with limited Unicode support:

```json
// ~/.config/rpai/config.json
{
  "ascii_symbols": true  // Use ASCII instead of Unicode
}
```

```
Unicode mode: ▶ Running  ⏸ Waiting
ASCII mode:   > Running  = Waiting
```

---

## Installation & Setup

### Prerequisites

- **Rust/Cargo** (1.70+ recommended)
- **tmux** (for session integration)
- Unix-like OS (macOS, Linux)

### Method 1: Cargo Install (Recommended)

```bash
cargo install rpai
```

Binary installed to `~/.cargo/bin/rpai`. Ensure this is in your PATH.

### Method 2: Build from Source

```bash
git clone https://github.com/radoslav11/rpai.git
cd rpai
./install.sh
```

### Tmux Integration (Critical)

Add to `~/.tmux.conf`:

```bash
# Bind prefix + a to open RPAI in popup
bind-key a display-popup -E "rpai"
```

Reload tmux config:

```bash
tmux source ~/.tmux.conf
```

Now `prefix + a` opens RPAI in a centered popup overlay.

### Verification

```bash
# Check installation
rpai --version

# Manual launch (outside tmux popup)
rpai

# List sessions without TUI
rpai scan
```

---

## Configuration Options

Configuration file: `~/.config/rpai/config.json`

```json
{
  "theme": "gruvbox",
  "idle_threshold": 3.0,
  "refresh_ms": 50,
  "ascii_symbols": false
}
```

### Option Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `"gruvbox"` | Color scheme |
| `idle_threshold` | float | `3.0` | CPU% below which agent is "waiting" |
| `refresh_ms` | integer | `50` | TUI refresh interval in milliseconds |
| `ascii_symbols` | boolean | `false` | Use ASCII instead of Unicode symbols |

### Tuning `idle_threshold`

The default 3.0% works well for most systems. Adjust based on your hardware:

```json
// Older/slower systems: raise threshold
{ "idle_threshold": 5.0 }

// Powerful systems: lower threshold for sensitivity
{ "idle_threshold": 1.5 }

// Noisy environment (background processes): raise
{ "idle_threshold": 8.0 }
```

---

## Usage Patterns

### Pattern 1: Basic Multi-Agent Monitoring

Run multiple Claude Code instances across different projects:

```bash
# Terminal 1
cd ~/projects/api && claude

# Terminal 2
cd ~/projects/frontend && claude

# Terminal 3
cd ~/projects/docs && claude

# In any terminal, open RPAI
prefix + a  # See all three, jump to any
```

### Pattern 2: Activity-Based Workflow

Work based on agent state rather than sequential checking:

```
1. Launch multiple agents with different tasks
2. Open RPAI (prefix + a)
3. Identify ⏸ (waiting) agents
4. Jump to waiting agent, provide next instruction
5. Return to RPAI, repeat
```

This **eliminates wasted time** checking active agents that don't need you.

### Pattern 3: Resource Monitoring

Watch for runaway agents or memory issues:

```
┌─────────────────────────────────────────────────────────────┐
│  ▶ claude  ~/large-codebase     CPU: 95%  MEM: 7.8 GB  ⚠️  │
│  ▶ claude  ~/another-project    CPU: 12%  MEM: 2.1 GB      │
└─────────────────────────────────────────────────────────────┘
```

High CPU + high memory might indicate an agent stuck in a loop or processing a huge file.

### Pattern 4: Command-Line Integration

Use RPAI non-interactively in scripts:

```bash
# List all sessions
rpai scan

# Jump directly to session by ID or name
rpai jump 2        # Jump to session index 2
rpai jump api      # Jump to session matching "api"

# Kill a runaway session
rpai kill 3
```

---

## Integration Patterns

### With Ralph Wiggum Loop

**Scenario:** Running multiple Ralph loops in parallel on different features.

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

**RPAI View:**
```
┌───────────────────────────────────────────────────────────────┐
│  rpai - Ralph Loops                                           │
│  ═══════════════════                                          │
│                                                               │
│  ▶ claude    ~/project/feature-auth     CPU: 45%  [RALPH]    │
│  ⏸ claude    ~/project/feature-api      CPU: 1%   [RALPH]    │ ← Check!
│  ▶ claude    ~/project/feature-ui       CPU: 38%  [RALPH]    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

**Configuration for Ralph:**

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 2.0,  // Lower threshold - Ralph idles between iterations
  "refresh_ms": 100       // Slightly slower refresh for long-running loops
}
```

**Key Insight:** Ralph loops create a "burst then idle" pattern. RPAI's idle detection catches the moments between iterations when you might want to check progress or modify the prompt.

### With Gas Town Architecture

**Scenario:** Steve Yegge's Gas Town with Mayor, Deacons, and Dogs hierarchy.

```
Gas Town Hierarchy:
┌─────────────────────────────────────────────────────┐
│  MAYOR (Orchestrator)                               │
│    ↓                                                │
│  DEACONS (Specialist Agents)                        │
│    ├── Architect Deacon                             │
│    ├── Testing Deacon                               │
│    └── Documentation Deacon                         │
│    ↓                                                │
│  DOGS (Worker Agents)                               │
│    ├── Dog 1: Implementing feature A                │
│    ├── Dog 2: Implementing feature B                │
│    └── Dog 3: Writing tests                         │
│                                                     │
│  REFINERY (Code Quality)                            │
└─────────────────────────────────────────────────────┘
```

**tmux Layout for Gas Town + RPAI:**

```bash
# tmux layout for Gas Town visibility
#
# ┌────────────┬────────────┬────────────┐
# │   MAYOR    │  DEACON 1  │  DEACON 2  │
# ├────────────┼────────────┼────────────┤
# │   DOG 1    │   DOG 2    │   DOG 3    │
# ├────────────┴────────────┴────────────┤
# │              REFINERY                 │
# └───────────────────────────────────────┘
#
# prefix + a → RPAI popup overlays all panes

# Create the layout
tmux new-session -d -s gastown
tmux split-window -h
tmux split-window -h
tmux select-pane -t 0
tmux split-window -v
tmux select-pane -t 2
tmux split-window -v
tmux select-pane -t 4
tmux split-window -v
# ... launch agents in each pane
```

**RPAI View of Gas Town:**
```
┌───────────────────────────────────────────────────────────────┐
│  rpai - Gas Town                                              │
│  ═══════════════                                              │
│                                                               │
│  ▶ claude    ~/town/mayor         CPU: 8%   [ORCHESTRATING]  │
│  ⏸ claude    ~/town/architect     CPU: 0.5% [DEACON-IDLE]    │
│  ▶ claude    ~/town/testing       CPU: 25%  [DEACON-ACTIVE]  │
│  ▶ claude    ~/town/dog-1         CPU: 42%  [DOG-WORKING]    │
│  ⏸ claude    ~/town/dog-2         CPU: 1%   [DOG-DONE]       │ ← Deploy!
│  ▶ claude    ~/town/dog-3         CPU: 38%  [DOG-WORKING]    │
│  ⏸ claude    ~/town/refinery      CPU: 0.8% [WAITING]        │
│                                               │
└───────────────────────────────────────────────────────────────┘
```

**Configuration for Gas Town:**

```json
// ~/.config/rpai/config.json
{
  "idle_threshold": 5.0,  // Higher threshold - Mayor often has low CPU while coordinating
  "refresh_ms": 50        // Fast refresh to catch Dog completion quickly
}
```

**Key Insight:** Gas Town's value comes from quick handoffs. RPAI shows when Dogs complete, so you can trigger Refinery review or assign new tasks to the Mayor.

### With CC-Mirror

**Scenario:** CC-Mirror multi-worker coordination across providers.

```
CC-Mirror Setup:
┌─────────────────────────────────────────────────────┐
│  CC-Mirror Coordinator                              │
│    ├── Worker 1: Claude (main)                      │
│    ├── Worker 2: Claude (review)                    │
│    └── Worker 3: GPT-4 (alternative approach)       │
└─────────────────────────────────────────────────────┘
```

**RPAI Visibility:**
```
┌───────────────────────────────────────────────────────────────┐
│  rpai - CC-Mirror Workers                                     │
│  ═══════════════════════                                      │
│                                                               │
│  ▶ claude    ~/mirror/main        CPU: 45%  [PRIMARY]        │
│  ⏸ claude    ~/mirror/review      CPU: 0.5% [REVIEWER-IDLE]  │
│  ▶ openai    ~/mirror/alt         CPU: 32%  [ALTERNATIVE]    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

**Note:** CC-Mirror workers using non-Claude agents (GPT-4, etc.) may not appear in RPAI unless they run as detectable processes. RPAI's regex (`opencode|claude|codex|cursor|gemini`) may need extension.

### Combination Matrix

| RPAI + | Use Case | Complexity | Value | Configuration Notes |
|--------|----------|------------|-------|---------------------|
| **Ralph** | Parallel Ralph loops | Low | High | Lower `idle_threshold` (2.0) |
| **Gas Town** | Agent hierarchy TUI | Medium | Very High | Higher `idle_threshold` (5.0), fast refresh |
| **CC-Mirror** | Multi-worker visibility | Medium | High | May need process pattern extension |
| **Personal Panopticon** | 8+ domain agents | High | Essential | Consider multiple tmux sessions |
| **Ralph + Gas Town** | Factory-scale parallel | High | Maximum | Separate tmux sessions per "town" |

### Advanced: Multi-Session RPAI

For massive scale (10+ agents), organize into tmux sessions:

```bash
# Session 1: Feature work
tmux new-session -s features
# ... launch feature agents

# Session 2: Testing
tmux new-session -s testing
# ... launch testing agents

# Session 3: Documentation
tmux new-session -s docs
# ... launch doc agents

# RPAI sees ALL sessions
rpai  # Shows agents from features, testing, AND docs
```

---

## Mental Models

### Model 1: The Control Tower

```
RPAI is the control tower for your AI fleet.

Traditional Development:
  You ←→ Single IDE ←→ Single Context

AI-Assisted Development:
  You ←→ RPAI (Tower) ←→ Multiple Agents ←→ Multiple Contexts
         ↑
    Visibility layer
```

You don't fly each plane—you monitor the airspace and intervene when needed.

### Model 2: The "Idle = Done" Pattern

```
Agent States:
  ▶ Running  = "Leave me alone, I'm working"
  ⏸ Waiting  = "I need you—I'm blocked or finished"

Your Attention:
  Running agents → Low priority (check occasionally)
  Waiting agents → High priority (they need input)
```

Invert your attention: spend time on idle agents, not running ones.

### Model 3: tmux as Agent Infrastructure

```
Without RPAI:
  tmux = Terminal multiplexer (for humans)

With RPAI:
  tmux = Agent process manager
  RPAI = Agent monitoring dashboard

tmux provides:
  - Process isolation (each agent in its own pane)
  - Persistence (agents survive disconnection)
  - Navigation (pane/window/session hierarchy)

RPAI adds:
  - Agent-aware view (filters to AI processes only)
  - Activity detection (running vs. waiting)
  - Quick navigation (jump without knowing pane IDs)
```

### Model 4: The Attention Budget

```
Without multi-agent monitoring:
  - 8 agents × 2 minutes checking each = 16 minutes/cycle
  - Most checks find "still working" → wasted time

With RPAI:
  - Open RPAI: 5 seconds
  - Identify 2 idle agents: instant
  - Jump and respond: 2 minutes each
  - Total: ~4.5 minutes/cycle

Attention savings: 70%+
```

---

## Checkpoints

### Installation Verification

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

### tmux Integration Verification

```bash
# Checkpoint 4: tmux config loaded
grep -q "rpai" ~/.tmux.conf && echo "RPAI binding found"
# Expected: "RPAI binding found"

# Checkpoint 5: Keybinding works
# In tmux, press: prefix + a
# Expected: RPAI popup appears (or "No sessions" if no agents)
```

### Agent Detection Verification

```bash
# Checkpoint 6: Start a Claude Code instance
cd /tmp && claude

# In another terminal:
rpai scan
# Expected: Shows the Claude instance with PID and directory
```

### Configuration Verification

```bash
# Checkpoint 7: Config file exists
cat ~/.config/rpai/config.json
# Expected: JSON with theme, idle_threshold, refresh_ms, ascii_symbols

# Checkpoint 8: Theme switching
# In RPAI TUI, press 't'
# Expected: Colors change, theme persists after restart
```

---

## Troubleshooting

### Problem: RPAI Shows No Sessions

**Symptoms:** `rpai scan` returns empty, RPAI TUI shows "No sessions"

**Causes & Solutions:**

1. **No agents running**
   ```bash
   # Check manually
   ps aux | grep -E "claude|opencode|codex|cursor|gemini"
   # If empty, start an agent first
   ```

2. **Agent name not matched**
   ```bash
   # RPAI looks for: opencode|claude|codex|cursor|gemini
   # If using a differently-named agent, it won't appear
   # Workaround: rename the process or modify source
   ```

3. **Not running in tmux**
   ```bash
   # RPAI needs tmux for session correlation
   tmux  # Start tmux first
   claude  # Then start agent
   ```

### Problem: Agent Shows as "Running" When Idle

**Symptoms:** Agent at ▶ despite being at prompt

**Causes & Solutions:**

1. **LSP processes inflating CPU**
   ```bash
   # Check process tree
   pstree -p $(pgrep -f claude)
   # Look for language servers consuming CPU
   ```
   RPAI should filter these, but edge cases exist.

2. **Threshold too low**
   ```json
   // Raise idle_threshold in config
   { "idle_threshold": 5.0 }
   ```

3. **Background compilation or indexing**
   - Wait for it to complete
   - Or raise threshold temporarily

### Problem: Agent Shows as "Waiting" When Working

**Symptoms:** Agent at ⏸ while actively processing

**Causes & Solutions:**

1. **Threshold too high**
   ```json
   // Lower idle_threshold in config
   { "idle_threshold": 2.0 }
   ```

2. **I/O-bound work (not CPU)**
   - Network operations, disk reads appear low-CPU
   - Consider this a limitation

### Problem: "Jump" Doesn't Work

**Symptoms:** Pressing Enter doesn't switch to session

**Causes & Solutions:**

1. **tmux pane correlation failed**
   ```bash
   # Check tmux pane list
   tmux list-panes -a
   # Verify agent's parent process chain includes tmux
   ```

2. **tmux session in different server**
   ```bash
   # RPAI queries default tmux server
   # Ensure all agents run in the same tmux server
   ```

### Problem: Unicode Symbols Not Displaying

**Symptoms:** Garbled characters instead of ▶ and ⏸

**Solution:**
```json
// Enable ASCII mode
{
  "ascii_symbols": true
}
```

Or install a Unicode-capable font in your terminal.

### Problem: High CPU Usage from RPAI Itself

**Symptoms:** RPAI consuming significant CPU

**Solution:**
```json
// Slow down refresh rate
{
  "refresh_ms": 200  // 200ms instead of 50ms
}
```

---

## Extending RPAI

### Adding New Agent Types

RPAI's agent detection is regex-based. To add new agents:

1. Fork the repository
2. Modify the regex pattern in `main.rs`:
   ```rust
   // Original
   let agent_pattern = r"opencode|claude|codex|cursor|gemini";

   // Extended
   let agent_pattern = r"opencode|claude|codex|cursor|gemini|aider|cody";
   ```
3. Rebuild: `cargo install --path .`

### Custom Themes

Add to the theme list in source:

```rust
// In themes section of main.rs
Theme {
    name: "my-theme",
    fg: Color::Rgb(r, g, b),
    accent: Color::Rgb(r, g, b),
    // ...
}
```

### Integration with Other Tools

RPAI's `scan` command outputs parseable text:

```bash
# Pipe to other tools
rpai scan | grep -c "waiting"  # Count idle agents
rpai scan | awk '/waiting/ {print $2}'  # List idle PIDs
```

---

## Source Attribution

**Repository:** [github.com/radoslav11/rpai](https://github.com/radoslav11/rpai)
**Author:** radoslav11
**Contributors:** radoslav11, ntcuong777
**License:** MIT
**Version Analyzed:** 0.1.12 (January 2026)

**Technology:**
- Language: Rust
- TUI Framework: ratatui
- Terminal Control: crossterm
- System Info: sysinfo

**Repository Stats:**
- 11 stars, 1 fork
- 42 commits
- Active development (last commit: January 17, 2026)

---

## Key Takeaways

1. **RPAI solves visibility, not orchestration** - It's the dashboard for multi-agent workflows, not the controller.

2. **Idle detection is the killer feature** - Knowing which agents need attention transforms multi-agent productivity.

3. **tmux popup is the right UX** - `prefix + a` provides instant access without disrupting your current view.

4. **Configuration matters** - Tune `idle_threshold` for your workflow pattern (Ralph vs. Gas Town vs. Panopticon).

5. **Scales linearly** - Whether 3 agents or 30, the mental model and interaction pattern remain consistent.

6. **Complements any orchestration pattern** - Ralph, Gas Town, CC-Mirror all benefit from RPAI visibility.

---

## Related Documents

- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md` - Ralph pattern details
- `extractions/orchestration/015-gas-town-yegge.md` - Gas Town architecture
- `extractions/orchestration/020-cc-mirror.md` - CC-Mirror multi-worker
- `synthesis/mastery-ralph-complete.md` - Complete Ralph analysis
- `synthesis/architecture-complexity-ladder.md` - Complexity progression

---

*Extraction complete. RPAI represents a crucial "visibility layer" in the multi-agent tooling ecosystem, enabling the human-in-the-loop patterns that make scaled Claude Code workflows practical.*
