# rpai - tmux Multi-Agent Manager

## Source
- **Author:** @radoslav11 (Rado) - ex-Oxford researcher, amplified by @alexocheema
- **Date:** 2026-01-05
- **URL:** https://x.com/alexocheema/status/2008161206541123769
- **Engagement:** 27 likes, 4.7K views

---

## Core Insight

**One-liner:** TUI tool for tmux that makes monitoring and switching between multiple parallel AI agents (Claude, Cursor, Codex) actually usable.

**The Problem:**
> "UX around parallel agents sucks right now."

When running 3+ agents in tmux panes, you're constantly:
- Tabbing between panes
- Losing track of which agent is where
- Missing outputs from background agents

---

## Installation

```bash
cargo install rpai
```

That's it. Run `rpai` in any tmux session.

---

## What It Does

1. **Scans** tmux panes for running AI agents
2. **Displays** TUI with agent list, status, output previews
3. **Jump** to any agent with selection (mouse supported)
4. **Monitor** all agents from one view

### Detected Agents
- Claude
- Cursor
- Codex
- Opencode
- (Likely pattern-matched by process name)

---

## Demo Behavior

From the video:
```
┌─────────────────────────────────────────────┐
│  RPAI - Agent Monitor                       │
├─────────────────────────────────────────────┤
│  [1] CURSOR AGENT    ██████ running         │
│  [2] CLAUDE AGENT    ██████ running         │
│  [3] CODEX AGENT     ██████ idle            │
├─────────────────────────────────────────────┤
│  Preview: Claude is executing Python...     │
│  > import pandas as pd                      │
│  > df = pd.read_csv('data.csv')            │
└─────────────────────────────────────────────┘
```

Select agent → jumps to that tmux pane.

---

## Thread Reactions

**@ManacasterBen:**
> "Cursor has done a decent job of wrapping them up in a good harness, but I'm still tabbing between tabs tabs tabs... tab-flipping thru super intelligence"

**@FutbolmeAI:**
> "Parallel agents feel like herding caffeinated cats. Installing rpai now"

---

## Mental Model

View multi-agent setups like a **control center**:
- Agents run autonomously in panes
- rpai = dashboard for oversight and navigation
- Terminal becomes unified workspace for AI collaboration

---

## Prerequisites

- Rust/Cargo installed
- tmux running
- AI agents active in tmux panes

---

## Caveats

- tmux-only (no GUI workflows)
- Early-stage (weekend project)
- Agent detection based on process names—custom agents may need config
- Augments tmux, doesn't replace knowing tmux basics

---

## Actionability

🟢 **Quick Win** - Install and run in <5 minutes

```bash
# Install
cargo install rpai

# In tmux with agents running
rpai
```

---

## What You'll See When You Run This

**Before running:** You have tmux running with multiple Claude/Cursor/Codex agents in different panes.

### Installing rpai

```bash
$ cargo install rpai
```

**Annotated Output:**
```
    Updating crates.io index             ← Fetching package info
  Downloaded rpai v0.3.2                ← Package found
  Downloaded 1 crate (42.3 KB)
   Compiling libc v0.2.147              ← Building dependencies
   Compiling rpai v0.3.2
    Finished release [optimized]        ← Compilation complete
  Installing /home/user/.cargo/bin/rpai

Installed: rpai v0.3.2

To use: Run 'rpai' inside a tmux session
```

### Launching rpai

```bash
$ rpai
```

**Annotated Output:**
```
╔═══════════════════════════════════════════════════════════════╗
║                  RPAI - Agent Monitor                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Detected Agents:                    ← Found 4 agents         ║
║                                                                ║
║  [1] CLAUDE AGENT    ████████ running  ← Working on code      ║
║      Pane: 0:1.0                                               ║
║                                                                ║
║  [2] CURSOR AGENT    ████░░░░ running  ← Processing request   ║
║      Pane: 0:1.1                                               ║
║                                                                ║
║  [3] CODEX AGENT     ░░░░░░░░ idle     ← Waiting for input    ║
║      Pane: 0:2.0                                               ║
║                                                                ║
║  [4] OPENCODE        ████████ running  ← Active development   ║
║      Pane: 0:2.1                                               ║
║                                                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Preview (Agent #1: CLAUDE):                                   ║
║  ─────────────────────────────                                 ║
║  > import pandas as pd                                         ║
║  > df = pd.read_csv('data.csv')                               ║
║  > # Processing 1.2M rows...                                   ║
║                                                                ║
║  [Preview updates as agent outputs]                            ║
║                                                                ║
╠═══════════════════════════════════════════════════════════════╣
║  Controls: ↑↓ navigate | Enter jump | q quit | r refresh     ║
╚═══════════════════════════════════════════════════════════════╝
```

### Jumping to an Agent

```
Select Agent #2 (Cursor) and press Enter
```

**What Happens:**
```
Jumping to pane 0:1.1...               ← rpai switches tmux panes

[Screen switches to Cursor pane]

Cursor Agent running in this pane:
> Analyzing repository structure...
> Found 47 TypeScript files
> Implementing requested changes...

[You're now in the Cursor pane - type normally]

Press Ctrl+B, then : to return to rpai
(or press Prefix + q to see pane numbers)
```

### When No Agents Running

```bash
$ rpai
```

**Output:**
```
╔═══════════════════════════════════════════════════════════════╗
║                  RPAI - Agent Monitor                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  ⚠️  No agents detected                                        ║
║                                                                ║
║  Expected processes not found in any tmux pane:               ║
║    - claude                                                    ║
║    - cursor                                                    ║
║    - codex                                                     ║
║    - opencode                                                  ║
║                                                                ║
║  To use rpai:                                                  ║
║    1. Open a new tmux pane: Ctrl+B, %                         ║
║    2. Start an agent: claude                                   ║
║    3. Run rpai again                                           ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

### Multi-Agent Workflow Example

```
Terminal layout with rpai:

┌─────────────────────────────────────────────────────────────────┐
│ Claude (pane 0) │ Cursor (pane 1) │ rpai dashboard (pane 2)    │
│                 │                  │                            │
│ Working on:     │ Implementing:    │ [1] CLAUDE ███ running    │
│ auth module     │ UI components    │ [2] CURSOR ███ running    │
│                 │                  │ [3] CODEX  ░░░ idle       │
│                 │                  │                            │
│ [agent output]  │ [agent output]   │ Preview: Cursor is...     │
└─────────────────────────────────────────────────────────────────┘

Workflow:
1. Watch rpai dashboard to see which agents need attention
2. Select agent → jump to its pane
3. Interact with agent
4. Return to rpai to monitor overall progress
```

**Timing Expectations:**
- Installation: 1-3 minutes (depends on cargo cache)
- Agent detection: Instant
- Refresh interval: ~1 second
- Pane jumping: Instant

**What to Do While It Runs:**
- Let rpai stay open in one pane
- Agents work in other panes
- rpai shows live preview of active agents
- Jump to any agent that needs attention

**If you skip rpai:** You're constantly tab-flipping through tmux panes trying to track which agent is doing what - "herding caffeinated cats."

**This connects to:** The mobile workflow pattern - rpai on your phone via SSH lets you monitor all agents from anywhere.

---

## Follow-up Questions
1. How does it detect Claude specifically—process name patterns?
2. Can you configure custom agent names?
3. Does it show agent context/token usage?

---

## Synthesis Hooks
- **Combines with:** Mobile tmux setups (monitor agents from phone)
- **Part of pattern:** "Agent swarm" management - human oversight of parallel AI

---

## Troubleshooting

### Installation Issues

#### Error: "cargo: command not found"
**Symptoms:** Cannot run cargo install, command not recognized
**Cause:** Rust/Cargo not installed on system
**Solution:**
```bash
# Install Rust and Cargo via rustup (official installer)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Follow prompts, then reload shell
source ~/.cargo/env

# Verify installation
cargo --version
rustc --version

# Now install rpai
cargo install rpai
```
**Prevention:** Rust/Cargo is a prerequisite - install before attempting rpai

---

#### Error: "error: could not compile rpai"
**Symptoms:** Compilation errors during cargo install
**Cause:** Missing system dependencies, outdated Rust, or incompatible platform
**Solution:**
```bash
# Update Rust to latest stable
rustup update stable

# On macOS, ensure Xcode command line tools installed
xcode-select --install

# On Ubuntu/Debian, install build essentials
sudo apt install build-essential pkg-config libssl-dev

# On Fedora/RHEL
sudo dnf install gcc openssl-devel

# Retry installation
cargo install rpai
```
**Prevention:** Keep Rust toolchain updated, install system build dependencies

---

#### Error: "Permission denied" during install
**Symptoms:** Cargo install fails with permission errors
**Cause:** Cargo bin directory not writable
**Solution:**
```bash
# Check cargo bin location
echo $CARGO_HOME  # Usually ~/.cargo

# Ensure directory exists and is writable
mkdir -p ~/.cargo/bin
chmod 755 ~/.cargo/bin

# Verify PATH includes cargo bin
echo $PATH | grep -q '.cargo/bin' && echo "OK" || echo "Add to PATH"

# Add to PATH if missing
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Retry
cargo install rpai
```
**Prevention:** Set up Rust with user-level permissions from start

---

### Runtime Issues

#### Error: "rpai: not attached to a tmux session"
**Symptoms:** rpai won't start, shows error about tmux
**Cause:** Not running inside a tmux session
**Solution:**
```bash
# Start a tmux session first
tmux new -s agents

# Or attach to existing session
tmux attach -t agents

# Now run rpai inside tmux
rpai
```
**Prevention:** rpai requires tmux - always start tmux first

---

#### Error: "No agents detected"
**Symptoms:** rpai shows empty list despite agents running
**Cause:** Agents not in tmux panes, or detection pattern not matching
**Solution:**
```bash
# Verify agents are running IN tmux panes
tmux list-panes -a  # Shows all panes

# Check what processes are in each pane
tmux list-panes -a -F "#{pane_id}: #{pane_current_command}"

# Agent must be running one of: claude, cursor, codex, opencode
# If using custom agent name, may need configuration

# Ensure agent is actually running (not just terminal open)
# In agent pane, you should see active claude/cursor/codex process
```
**Detection patterns (likely):**
- `claude` - Claude Code CLI
- `cursor` - Cursor editor agent
- `codex` - OpenAI Codex
- `opencode` - OpenCode

**Prevention:** Launch agents within tmux panes, use recognized agent names

---

#### Error: "Agent list not updating"
**Symptoms:** New agents don't appear, status doesn't refresh
**Cause:** rpai polling not detecting changes
**Solution:**
```bash
# Restart rpai
# Press q or Ctrl+C to exit
rpai

# If still not working, check if agents are in same tmux server
tmux list-sessions
# rpai should be in same session or connected to same server

# Verify agent is running (not just terminal sitting idle)
```
**Prevention:** Keep agents running in same tmux server, restart rpai if needed

---

#### Problem: "Jump to agent not working"
**Symptoms:** Selecting agent doesn't switch to that pane
**Cause:** Pane was closed, tmux layout changed, or selection issue
**Solution:**
```bash
# Manually switch to pane
tmux select-pane -t <pane-id>

# List all panes to find correct ID
tmux list-panes -a

# If pane was closed, agent is gone - need to restart it
tmux split-window
claude  # Or your agent
```
**Prevention:** Keep agent panes open, don't close them accidentally

---

#### Problem: "Output preview not showing content"
**Symptoms:** Preview area empty or shows old content
**Cause:** Agent idle, scrollback buffer empty, or capture failing
**Solution:**
```bash
# Check if agent is actually producing output
# Switch to pane manually
tmux select-pane -t <pane-id>

# If agent is waiting for input, it won't have recent output
# The preview shows recent terminal output, not agent state

# For agents with no recent activity, preview may be empty
```
**Note:** rpai shows terminal output preview, not agent internal state

---

### tmux-Specific Issues

#### Problem: "tmux sessions from multiple terminals not visible"
**Symptoms:** Agents started in different terminal windows not detected
**Cause:** Different tmux servers running
**Solution:**
```bash
# List all tmux sessions across servers
tmux list-sessions

# Connect to specific server socket
tmux -L default list-sessions

# Best practice: use single tmux server
# Always attach to same session from different terminals
tmux attach -t main

# Or use shared session socket
tmux -S /tmp/shared-tmux.sock new -s agents
tmux -S /tmp/shared-tmux.sock attach -t agents  # From other terminal
```
**Prevention:** Use consistent tmux session/server across all terminals

---

#### Error: "tmux environment variables not set"
**Symptoms:** rpai can't detect tmux, despite being in session
**Cause:** $TMUX environment variable not propagating
**Solution:**
```bash
# Check tmux env var
echo $TMUX
# Should show something like: /tmp/tmux-1000/default,12345,0

# If empty but you're in tmux, try:
export TMUX=$(tmux display-message -p '#{socket_path},#{session_id},#{window_id}')

# Verify tmux running
tmux info
```
**Prevention:** Don't unset TMUX variable in shell config

---

### Performance Issues

#### Problem: "rpai using high CPU"
**Symptoms:** System slowing down, rpai consuming resources
**Cause:** Too many panes, rapid polling, or memory issues
**Solution:**
```bash
# Reduce number of monitored panes
# Close unnecessary agent panes

# Check pane count
tmux list-panes -a | wc -l

# If too many agents, consider:
# - Closing idle ones
# - Using different monitoring approach
# - Running fewer parallel agents
```
**Prevention:** Limit to reasonable number of parallel agents (5-10)

---

### When NOT to Use rpai

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| GUI-based workflows | rpai is tmux-only | Cursor/VS Code multi-tab view |
| Single agent | No monitoring needed | Direct terminal |
| Non-tmux terminal | Won't work | iTerm2 tabs, screen, or tmux |
| Custom agent names | May not detect | Configure detection or use standard names |
| Need token/cost tracking | rpai shows output, not metrics | Claude HUD for metrics |
| Windows native terminal | tmux not native | WSL2 with tmux |

### Known Limitations

1. **tmux-only** - Doesn't work with other terminal multiplexers (screen) or GUI terminals
2. **Early-stage project** - "Weekend project" maturity level
3. **Agent detection by process name** - Custom agents may not be recognized
4. **Augments, doesn't replace tmux knowledge** - Need to know basic tmux commands
5. **No context/token usage display** - Shows output, not Claude-specific metrics
6. **Limited to local machine** - Remote agents need separate approach
7. **Detection pattern-based** - May miss renamed or wrapper-launched agents

### Emergency Recovery

#### rpai crashed or frozen
```bash
# Kill rpai process
pkill rpai
# Or Ctrl+C if focused

# Resume normal tmux navigation
tmux select-pane -t {pane-id}
# Or press Ctrl+B then arrow keys
```

#### Lost track of agents
```bash
# List all tmux panes with commands
tmux list-panes -a -F "#{session_name}:#{window_index}.#{pane_index} - #{pane_current_command}"

# Kill a specific pane
tmux kill-pane -t {session}:{window}.{pane}
```

#### Need to restart everything cleanly
```bash
# Kill all Claude agents
pkill -f claude

# List remaining sessions
tmux list-sessions

# Kill specific session
tmux kill-session -t agents

# Start fresh
tmux new -s agents
# Then launch agents in panes
```

---

## Tags
`#tooling` `#tmux` `#multi-agent` `#tui` `#rust` `#quick-win` `#monitoring`
