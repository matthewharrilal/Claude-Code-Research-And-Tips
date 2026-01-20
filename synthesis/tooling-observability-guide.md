# Tooling Observability Guide: Real-Time Monitoring for Agentic Workflows

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** Claude HUD, Gas Town GUI, and community observability patterns
**Status:** Comprehensive reference for multi-agent visibility

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [Claude HUD Real-Time Monitoring](#claude-hud-real-time-monitoring)
3. [Gas Town GUI as RTS Interface](#gas-town-gui-as-rts-interface)
4. [Multi-Agent Visibility Patterns](#multi-agent-visibility-patterns)
5. [When Visual Oversight Beats Terminal Logs](#when-visual-oversight-beats-terminal-logs)
6. [Debugging Multi-Agent Failures](#debugging-multi-agent-failures)
7. [Mental Models](#mental-models)
8. [Checkpoints](#checkpoints)
9. [Troubleshooting](#troubleshooting)
10. [Integration Patterns](#integration-patterns)
11. [Source Attribution](#source-attribution)

---

## You Are Here

```
                    Claude Code Observability Stack

    ┌─────────────────────────────────────────────────────────────┐
    │                   VISIBILITY LAYER                           │
    │                                                              │
    │   Terminal-Based              Browser-Based                  │
    │   ┌────────────┐              ┌────────────┐                │
    │   │ Claude HUD │              │ Gas Town   │                │
    │   │            │              │   GUI      │                │
    │   │ • Context% │              │ • RTS Map  │                │
    │   │ • Tools    │              │ • Units    │                │
    │   │ • Agents   │              │ • Commands │                │
    │   │ • Todos    │              │ • Minimap  │                │
    │   └─────┬──────┘              └─────┬──────┘                │
    │         │                           │                        │
    │         │                           │                        │
    │         ▼                           ▼                        │
    │   ┌─────────────────────────────────────────────────────┐   │
    │   │                ORCHESTRATION LAYER                   │   │
    │   │                                                      │   │
    │   │    Ralph Loops    CC-Mirror    Gas Town Backend      │   │
    │   │                                                      │   │
    │   └─────────────────────────────────────────────────────┘   │
    │                              │                               │
    │                              ▼                               │
    │   ┌─────────────────────────────────────────────────────┐   │
    │   │                  EXECUTION LAYER                     │   │
    │   │                                                      │   │
    │   │      Claude Code Sessions (1 to N parallel)          │   │
    │   │                                                      │   │
    │   └─────────────────────────────────────────────────────┘   │
    └─────────────────────────────────────────────────────────────┘

                        ◆ YOU ARE HERE ◆
            Learning to see inside the invisible control plane
```

**Con**text: You are exploring the **obs**ervability layer for **Cla**ude Code workflows. This layer makes **vis**ible the **hid**den state that determines whether your agents succeed or fail.

**Whe**re This Fits:
- **Bel**ow you: The orchestration patterns (Ralph, CC-Mirror, Gas Town) that coordinate agents
- **Aro**und you: The tools that render invisible state into actionable displays
- **Abo**ve you: Your human judgment, which observability enables

**Pre**requisites:
- Understanding of at least one orchestration pattern (Ralph, CC-Mirror, or Gas Town)
- Claude Code v1.0.80+ installed
- Comfort with terminal-based interfaces
- For Gas Town GUI: Node.js 18+, Gas Town backend running

**Wha**t You'll Learn:
1. How to monitor Claude Code sessions in real-time
2. Visual management patterns for multi-agent systems
3. When to use terminal monitoring vs. graphical interfaces
4. Debugging strategies using observability tools
5. Integration patterns combining multiple visibility layers

---

## Claude HUD Real-Time Monitoring

### What Claude HUD Is

**Cla**ude HUD is a **ter**minal-based plugin that displays real-time session information in your statusline. It transforms the **inv**isible control plane of Claude Code into **vis**ible, actionable data.

> "**Fin**ally a HUD to tell if Claude's actually working... or just staring into the void"
> -- @is_lu_is

### The Problem It Solves

**With**out HUD:
- Sessions are a **bla**ck box
- Context limits hit **une**xpectedly
- No visibility into **par**allel tool execution
- Subagent activity **inv**isible
- Todo progress **hid**den
- Rate limits applied **sil**ently

**Wit**h HUD:
- Real-time context **per**centage with color coding
- Active tool execution **vis**ible with spinners
- Subagent tracking with **ela**psed time
- Todo progress **cou**nter
- Usage limits for **rat**e-limited plans

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Claude Code Runtime                       │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │   Session   │  │  Transcript  │  │  Tool Execution  │   │
│  │   State     │  │   JSONL      │  │      State       │   │
│  └──────┬──────┘  └──────┬───────┘  └────────┬─────────┘   │
│         │                │                    │              │
│         └────────────────┼────────────────────┘              │
│                          │                                   │
│                    ┌─────▼─────┐                             │
│                    │  stdin    │  JSON payload              │
│                    │  (JSON)   │  ~every 300ms              │
│                    └─────┬─────┘                             │
└──────────────────────────┼───────────────────────────────────┘
                           │
                    ┌──────▼───────┐
                    │  Claude HUD  │
                    │   Plugin     │
                    └──────┬───────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐
    │ Config  │      │ Transcript│     │   Git     │
    │ Reader  │      │  Parser   │     │  Status   │
    └────┬────┘      └─────┬─────┘     └─────┬─────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
                    ┌──────▼──────┐
                    │   Render    │
                    │   Engine    │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   stdout    │
                    │ (statusline)│
                    └─────────────┘
```

### Key Features Deep Dive

#### 1. Context Window Meter

The **mos**t critical feature: a visual indicator of token usage.

```
████████░░ 35%   ← GREEN: Safe zone, plenty of capacity
█████████░ 65%   ← YELLOW: Caution, monitor closely
██████████ 85%   ← RED: Critical, consider compacting
██████████ 95%   ← RED + token breakdown appears
```

**Col**or Thresholds:
- **Gre**en (0-69%): Safe operating zone
- **Yel**low (70-84%): Approaching limits, plan accordingly
- **Red** (85-100%): Critical, expect quality degradation

**Whe**n context hits 85%+, a token breakdown appears:
```
Token Breakdown:
  Input:  145,234 / 200,000 (73%)
  Cache:   21,000 tokens cached
```

#### 2. Tool Activity Tracking

**Run**ning Tools (yellow spinner):
```
◐ Read: src/auth/middleware.ts
◐ Bash: npm run typecheck
```

**Com**pleted Tools (green checkmark with count):
```
✓ Read ×3 | ✓ Edit ×2 | ✓ Glob ×1
```

**Wha**t This Tells You:
- Active operations in progress
- Historical pattern of tool usage this session
- Tool efficiency (many small reads vs. few large ones)

#### 3. Agent Status Monitoring

**Tra**cks subagents spawned by the Task tool:

```
🤖 Agents:
  ◐ research-auth [Opus 4.5]: "Analyzing authentication patterns" (23s)
  ◐ write-tests [Sonnet 4]: "Generating unit tests" (8s)
  ✓ explore-db (completed in 12s)
```

**Key** Information Per Agent:
- **Sta**tus icon: Running (◐) or completed (✓)
- **Age**nt type: What role it serves
- **Mod**el: Which model powers it
- **Des**cription: What it's working on (truncated)
- **Tim**e: How long it's been running

#### 4. Todo Progress Counter

**For**mats:
```
▸ Fixing authentication bug | 2/5 complete   ← In progress
✓ All todos complete (5/5)                    ← All done
```

**Whe**n to Watch This:
- During PRD-driven Ralph loops
- When using TodoWrite for task tracking
- For measuring iteration efficiency

#### 5. Git Integration

```
git:(main)                    ← Basic branch
git:(main*)                   ← Dirty (uncommitted changes)
git:(main*↑2↓1)               ← Ahead/behind remote
git:(main* !1+2✘1?3)          ← Full file stats (Starship format)
```

**Sta**t Codes:
- `!` Modified staged
- `+` Added
- `✘` Deleted
- `?` Untracked

#### 6. Usage Limits (Pro/Max/Team)

```
Usage: 45% (5h) | 12% (7d) | Resets in 2h 15m
```

**Not**e: This requires OAuth authentication, not API key usage.

### Configuration Options

**Con**figuration File Location:
```
~/.claude/plugins/claude-hud/config.json
```

**Com**plete Schema:

```json
{
  "lineLayout": "expanded",      // "expanded" | "compact"
  "showSeparators": false,       // Visual divider between sections
  "pathLevels": 1,               // 1 | 2 | 3 (directory depth)

  "gitStatus": {
    "enabled": true,
    "showDirty": true,           // Show * for uncommitted changes
    "showAheadBehind": false,    // Show ↑↓ commits
    "showFileStats": false       // Show !+✘? file counts
  },

  "display": {
    "showModel": true,           // [Opus 4.5]
    "showContextBar": true,      // ████████░░ 35%
    "showConfigCounts": true,    // 📝 1 CLAUDE.md | 3 rules
    "showDuration": true,        // ⏳ 5m
    "showTokenBreakdown": true,  // Appears at 85%+
    "showUsage": true,           // Pro/Max/Team limits
    "usageBarEnabled": true,     // Visual usage bar
    "showTools": true,           // ✓ Read ×3
    "showAgents": true,          // 🤖 Agents section
    "showTodos": true,           // Todo progress
    "autocompactBuffer": "enabled",  // Buffer display
    "usageThreshold": 0,         // 0-100, hide below threshold
    "environmentThreshold": 0    // 0-100, hide env below threshold
  }
}
```

### HUD Display Examples

**Exp**anded Layout (Default):
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Opus 4.5] ████████░░ 35% | 📁 myapp | git:(main*) | 1 MCP | ⏳ 5m          │
│ ✓ Read ×2 | ✓ Edit ×1 | ◐ Bash: npm run build                              │
│ ▸ Implementing auth middleware | 1/4 complete                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Com**pact Layout:
```
┌───────────────────────────────────────────────────┐
│ [Opus 4.5] 35% | myapp | main | 5m                │
└───────────────────────────────────────────────────┘
```

**Deb**ug Mode (All Features):
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Opus 4.5] ████████░░ 35% | 📁 myapp | git:(main*↑2) | 📝 1 MD | 3 rules   │
│ Token Breakdown: 70,234 / 200,000 (35%) | Cache: 15,000                     │
│ Usage: 45% (5h) | 12% (7d) | Resets in 2h 15m                               │
│─────────────────────────────────────────────────────────────────────────────│
│ 🤖 Agents:                                                                   │
│   ◐ research [Opus 4.5]: "Analyzing codebase patterns" (45s)                │
│   ✓ scan (completed in 8s)                                                   │
│─────────────────────────────────────────────────────────────────────────────│
│ ✓ Read ×5 | ✓ Edit ×3 | ✓ Glob ×2 | ◐ Bash: npm run test                   │
│ ▸ Adding authentication layer | 2/6 complete                                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Gas Town GUI as RTS Interface

### What Gas Town GUI Is

**gtg**ui is a browser-based graphical user interface that transforms Gas Town's multi-agent orchestration into an interactive **Rea**l-Time Strategy (RTS) game experience. Built with Phaser 3, it renders your agent factory as an **iso**metric map.

### The Core Insight

> "**Gas** Town feels like Claude Code in 'limitless mode' but there's really too much going on for you to reasonably comprehend."
> -- Tim Sehn, DoltHub

**gtg**ui addresses the fundamental challenge of **par**allel agent orchestration: **cog**nitive overload. When running 20-30 Claude instances simultaneously, terminal output becomes **inc**omprehensible. Visual metaphors provide the abstraction layer humans need.

### The RTS Metaphor

**Rea**l-Time Strategy games solved a similar problem decades ago: **man**aging many units across a complex battlefield. Players learn to:

- **Sca**n the minimap for activity hotspots
- **Use** color coding to instantly identify unit states
- **Iss**ue commands through spatial selection
- **Tru**st the abstraction layer rather than micromanaging

**gtg**ui applies these battle-tested UX patterns to agent orchestration.

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER LAYER                             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Phaser 3 Game Engine                      ││
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ││
│  │  │  BootScene   │ │  GameScene   │ │   UIScene    │        ││
│  │  │  • Assets    │ │  • Iso Map   │ │  • HUD       │        ││
│  │  │  • Sprites   │ │  • Units     │ │  • Commands  │        ││
│  │  │  • Progress  │ │  • Buildings │ │  • Minimap   │        ││
│  │  └──────────────┘ └──────────────┘ └──────────────┘        ││
│  │                           │                                  ││
│  │                           ▼                                  ││
│  │              ┌──────────────────────┐                       ││
│  │              │    GasTownAPI.js     │                       ││
│  │              │  • Fetch wrapper     │                       ││
│  │              │  • State management  │                       ││
│  │              └──────────────────────┘                       ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│                              │ HTTP/REST                         │
│                              ▼                                   │
├─────────────────────────────────────────────────────────────────┤
│                        SERVER LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   server.js (Express)                        ││
│  │  • Static file serving                                       ││
│  │  • API route handlers                                        ││
│  │  • CLI command execution                                     ││
│  │  • SSE activity feed                                         ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│                              │ Shell execution                   │
│                              ▼                                   │
├─────────────────────────────────────────────────────────────────┤
│                      GAS TOWN LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                     gt CLI Binary                            ││
│  │  • Go-based orchestrator                                     ││
│  │  • tmux session management                                   ││
│  │  • Beads work tracking                                       ││
│  │  • Agent lifecycle control                                   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### Key Features Deep Dive

#### 1. Isometric Map Rendering

A **20x20** tile isometric grid representing your Gas Town workspace:

**Ter**rain Tiles:
- Grass, dirt, stone with procedural variation
- Grid lines for visual clarity

**Bui**ldings (Infrastructure):

| Building | Represents | Visual Style |
|----------|-----------|--------------|
| **Tow**n Hall | Mayor HQ | Large central structure |
| **Ref**inery | Merge queue processing | Industrial with pipes |
| **Bar**racks | Spawn point | Military aesthetic |
| **Oil** Rig | Per-project container | Platform structure |

**Uni**ts (Agents):
- Polecats as selectable game units
- Color-coded by status
- Selection rings when clicked

#### 2. Unit Status Visualization

**Col**or Coding:

| Color | Status | Meaning | Action |
|-------|--------|---------|--------|
| **Blu**e | Idle | Waiting for assignment | Assign work |
| **Gre**en | Active/Working | Processing a task | Monitor |
| **Red** | Error/Stuck | Needs attention | Investigate |
| **Gol**d | Mayor | The orchestrator | Strategic role |
| **Pur**ple | Deacon | Central pulse daemon | System health |
| **Ora**nge | Refinery | Merge queue manager | Queue status |

**Int**eraction:
- **Hov**er: Tooltip with agent details
- **Cli**ck: Select individual unit
- **Dra**g: Box selection for groups

#### 3. RTS-Style HUD

**Res**ource Bar (Top):
```
┌─────────────────────────────────────────────────────────────────┐
│ 🔷 Tokens: 145,234 | 📋 Issues: 23 | 📦 Convoys: 5 | GAS TOWN   │
└─────────────────────────────────────────────────────────────────┘
```

**Min**imap (Bottom-Right):
```
┌─────────────┐
│ ▪ ▪   ▪     │
│   ▪ ◆ ▪     │  ← Buildings and units
│ ▪     ▪ ▪   │
│   ┌─┐       │  ← Viewport rectangle
│   └─┘       │
└─────────────┘
```

**Com**mand Panel (Above Minimap):
```
┌─────────────────┐
│ [Assign Work]   │
│ [View Logs]     │
│ [Stop Agent]    │
│ [Send Mail]     │
└─────────────────┘
```

#### 4. Camera Controls

| Input | Action |
|-------|--------|
| WASD / Arrow Keys | Pan camera |
| Mouse Wheel | Zoom in/out |
| Right-Drag | Drag camera |
| Left-Click | Select unit |
| Left-Drag | Box selection |
| Right-Click | Issue command |

#### 5. Real-Time State Synchronization

**Pol**ling Interval: 3 seconds

**Sta**te Update Flow:
1. Fetch current status from `/api/status`
2. Update unit sprite textures based on state
3. Refresh resource bar values
4. Emit events to UI scene

**SSE** Feed:
- Real-time activity streaming via `/api/feed`
- Complements polling for immediate updates

### GUI Display Example (ASCII Mockup)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ 🔷 45,234 | 📋 12 | 📦 3 | MY GAS TOWN                          [─][□][×] │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│                    ◇◇◇                                                     │
│                   ◇▓▓▓◇         ← Town Hall                                │
│                    ◇◇◇                                                     │
│                                                                            │
│        🟢           🟢           🔴          ← Units (polecats)            │
│      [Alice]      [Bob]       [Carol]                                      │
│                                                                            │
│   ◇◇◇                              ◇◇◇                                    │
│  ◇▒▒▒◇  ← Refinery                ◇░░░◇  ← Oil Rig                        │
│   ◇◇◇                              ◇◇◇                                    │
│                                                                            │
│                 🟢            🔵                                           │
│               [Dave]       [Eve]                                           │
│                           (idle)                                           │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│ Selected: Carol (Polecat)                         ┌──────────────────────┐ │
│ Status: ERROR - TypeScript check failed           │ ▪ ▪   ▪    [Assign] │ │
│ Task: US-007 Implement checkout flow              │   ▪ ◆ ▪    [Logs  ] │ │
│ Time: 23m 45s                                     │ ▪     ▪ ▪  [Stop  ] │ │
│                                                   │   ┌─┐      [Mail  ] │ │
│                                                   │   └─┘               │ │
│                                                   └──────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Multi-Agent Visibility Patterns

### Pattern 1: Hub-and-Spoke Dashboard

**Use** Case: CC-Mirror orchestration with central coordinator

```
                    ┌──────────────────────┐
                    │   ORCHESTRATOR HUD   │
                    │   ████████░░ 52%     │
                    │   🤖 Coordinating    │
                    └──────────┬───────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│  WORKER 1   │      │  WORKER 2   │      │  WORKER 3   │
│  ██░░░░ 28% │      │  ████░░ 45% │      │  ██████ 73% │
│  🟢 Active  │      │  🟢 Active  │      │  🟡 Warning │
│  Read ×5    │      │  Edit ×3    │      │  Bash ×2    │
└─────────────┘      └─────────────┘      └─────────────┘
```

**Imp**lementation:
- Each worker has Claude HUD running
- Orchestrator dashboard summarizes all workers
- Color coding propagates: any red worker = red overall

### Pattern 2: Grid Monitor

**Use** Case: Parallel Ralph loops across git worktrees

```
┌─────────────────────────────────────────────────────────────┐
│                   PARALLEL RALPH MONITOR                     │
├─────────────────┬─────────────────┬─────────────────────────┤
│ WORKTREE: auth  │ WORKTREE: pay   │ WORKTREE: notify        │
│                 │                 │                         │
│ Iteration: 7/20 │ Iteration: 12/20│ Iteration: 5/20         │
│ ███████░░░ 68%  │ ██████░░░░ 55%  │ ████████░░ 82%          │
│                 │                 │                         │
│ Stories: 3/8    │ Stories: 6/10   │ Stories: 2/5            │
│ 🟢 On track     │ 🟢 On track     │ 🔴 Stuck (3 iters)      │
│                 │                 │                         │
│ Last: US-003 ✓  │ Last: US-006 ✓  │ Last: US-002 (fail)     │
├─────────────────┴─────────────────┴─────────────────────────┤
│ Overall: 11/23 stories | 3 active | 1 stuck | ETA: 2h 15m   │
└─────────────────────────────────────────────────────────────┘
```

**Imp**lementation with tmux:

```bash
#!/bin/bash
# parallel-monitor.sh

tmux new-session -d -s monitor

# Create 3-pane layout
tmux split-window -h
tmux split-window -v -t 0

# Run HUD-enabled Ralph in each pane
tmux send-keys -t 0 "cd ../wt-auth && ./ralph.sh 20" Enter
tmux send-keys -t 1 "cd ../wt-pay && ./ralph.sh 20" Enter
tmux send-keys -t 2 "cd ../wt-notify && ./ralph.sh 20" Enter

# Attach
tmux attach -t monitor
```

### Pattern 3: Factory Floor View (Gas Town)

**Use** Case: Full Gas Town deployment with 10+ agents

```
┌───────────────────────────────────────────────────────────────────────────┐
│                          GAS TOWN FACTORY FLOOR                            │
│                                                                           │
│  ┌─────────────────────────────────┐    ┌──────────────────────────────┐ │
│  │           HEADQUARTERS           │    │          METRICS            │ │
│  │                                  │    │                             │ │
│  │  👑 Mayor: [Opus 4.5]           │    │  Active Agents: 12          │ │
│  │     Status: Coordinating         │    │  Completed Tasks: 47        │ │
│  │     Inbox: 3 pending             │    │  Avg Task Time: 8.5m        │ │
│  │                                  │    │  Error Rate: 4.2%           │ │
│  │  💜 Deacon: [Sonnet 4]          │    │  Token Spend: $23.45        │ │
│  │     Health checks: ✓             │    │                             │ │
│  │                                  │    │  ─────────────────────────  │ │
│  │  🐕 Dogs: [Haiku]               │    │  Throughput (tasks/hour)    │ │
│  │     Quality gates: Active        │    │  ▁▂▃▅▆█▇▅▄▃ 5.2            │ │
│  └─────────────────────────────────┘    └──────────────────────────────┘ │
│                                                                           │
│  ┌─────────────────────────────────┐    ┌──────────────────────────────┐ │
│  │        RIG: frontend             │    │       RIG: backend          │ │
│  │                                  │    │                             │ │
│  │  🟢 Alice [Sonnet] - components  │    │  🟢 Dave [Sonnet] - API     │ │
│  │  🟢 Bob [Sonnet] - styling       │    │  🔴 Eve [Sonnet] - DB       │ │
│  │  🔵 Carol [idle]                 │    │  🟢 Frank [Haiku] - tests   │ │
│  │                                  │    │                             │ │
│  │  Tasks: 12/18 | Queue: 4         │    │  Tasks: 8/15 | Queue: 7     │ │
│  └─────────────────────────────────┘    └──────────────────────────────┘ │
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐│
│  │                            ACTIVITY FEED                              ││
│  │                                                                       ││
│  │  10:23:45  Alice ✓ Completed: US-015 Button component                 ││
│  │  10:23:12  Eve ✗ Failed: US-022 Database migration (TypeScript)       ││
│  │  10:22:58  Dave → Started: US-021 REST endpoint for orders            ││
│  │  10:22:30  Refinery → Merged: PR #47 (Bob's styling updates)          ││
│  └───────────────────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────────────────┘
```

### Pattern 4: Alert-Based Monitoring

**Use** Case: "Set and forget" overnight runs with notifications

```
┌─────────────────────────────────────────────────────────────┐
│                    ALERT CONFIGURATION                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🔴 CRITICAL ALERTS (immediate notification)                 │
│     □ Any agent stuck for >3 iterations                      │
│     □ Context >95% on any session                            │
│     □ Test failure after previous pass                       │
│     □ API rate limit hit                                     │
│                                                              │
│  🟡 WARNING ALERTS (hourly digest)                           │
│     □ Context >80% on any session                            │
│     □ Task taking >2x average time                           │
│     □ Cost exceeding hourly budget                           │
│                                                              │
│  🟢 INFO ALERTS (morning summary)                            │
│     □ All tasks completed                                    │
│     □ Iteration counts per agent                             │
│     □ Total cost breakdown                                   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Notification channels:                                      │
│     ✓ Mobile push (Poke/Pushover)                           │
│     ✓ Slack webhook                                          │
│     ○ Email digest                                           │
└─────────────────────────────────────────────────────────────┘
```

**Imp**lementation via Hooks:

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/check-alerts.sh"
      }]
    }]
  }
}
```

---

## When Visual Oversight Beats Terminal Logs

### Decision Matrix

| Scenario | Terminal Logs | Claude HUD | Gas Town GUI |
|----------|---------------|------------|--------------|
| **Sin**gle session, focused work | ✓ Best | ✓ Good | Overkill |
| **Sin**gle session, need context awareness | OK | ✓ Best | Overkill |
| **2-3** parallel agents | OK | ✓ Best | OK |
| **5-10** parallel agents | Difficult | OK | ✓ Best |
| **10+** parallel agents (factory) | Impossible | Limited | ✓ Best |
| **Ove**rnight unattended | Need logging | Need logging | ✓ Best + alerts |
| **Deb**ugging specific failure | ✓ Best | Helpful | Context only |
| **Tra**cking progress over hours | Tedious | ✓ Good | ✓ Best |

### Cognitive Load Analysis

**Ter**minal Logs:
- **Adv**antages: Full detail, searchable, scriptable
- **Dis**advantages: Sequential, no spatial memory, overwhelming at scale
- **Cog**nitive ceiling: ~3 agents before information overload

**Cla**ude HUD:
- **Adv**antages: Glanceable, color-coded, integrated with workflow
- **Dis**advantages: Per-session only, no cross-agent view
- **Cog**nitive ceiling: ~5 agents with multiple terminals

**Gas** Town GUI:
- **Adv**antages: Spatial reasoning, pattern recognition, intuitive interaction
- **Dis**advantages: Setup overhead, browser requirement, learning curve for non-gamers
- **Cog**nitive ceiling: ~30+ agents (tested by Steve Yegge)

### The Glanceability Spectrum

```
                    INFORMATION DENSITY VS. GLANCEABILITY

HIGH DETAIL                                              HIGH GLANCEABILITY
LOW GLANCE                                               LOW DETAIL
     │                                                         │
     ▼                                                         ▼
Terminal ────────► Claude HUD ────────► gtgui Minimap ────────► Unit Colors
 Logs              StatusLine            Overview              Status

 "Read                "████░░░░            "4 red dots           "Red = Bad"
  /foo/bar             45%"                 bottom right"
  at line 47..."
```

**Gui**dance:
1. Start with **Cla**ude HUD for single sessions
2. Add **tmux** splits for 2-3 parallel agents
3. Move to **Gas** Town GUI when you exceed 5 agents
4. Keep **ter**minal logs for post-mortem debugging

---

## Debugging Multi-Agent Failures

### Failure Pattern 1: Stuck Agent

**Sym**ptoms:
- One unit red in GUI
- Same task attempted 3+ times
- No commits for extended period

**Deb**ugging Flow:

```
┌───────────────────────────────────────────────────────────────┐
│                    STUCK AGENT DIAGNOSIS                       │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  1. IDENTIFY (gtgui or HUD)                                    │
│     └─► Which agent? How long stuck?                           │
│                                                                │
│  2. ISOLATE (terminal logs)                                    │
│     └─► gt logs AGENT_NAME | tail -100                         │
│     └─► What error repeats?                                    │
│                                                                │
│  3. DIAGNOSE                                                   │
│     ├─► Task too large? Split it                               │
│     ├─► Impossible criteria? Revise them                       │
│     ├─► Environment issue? Reset state                         │
│     └─► Model limitation? Add context or use better model      │
│                                                                │
│  4. INTERVENE                                                  │
│     ├─► gt stop AGENT_NAME                                     │
│     ├─► Edit prd.json with notes                               │
│     ├─► gt sling AGENT_NAME REVISED_TASK                       │
│     └─► Resume monitoring                                      │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

### Failure Pattern 2: Context Explosion

**Sym**ptoms:
- Context bar red (>85%)
- Quality degrading
- Agent forgetting earlier instructions

**Deb**ugging Flow:

```
┌───────────────────────────────────────────────────────────────┐
│                 CONTEXT EXPLOSION DIAGNOSIS                    │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  1. CHECK HUD                                                  │
│     └─► What's the actual percentage?                          │
│     └─► Token breakdown: input vs. cache?                      │
│                                                                │
│  2. IDENTIFY CAUSE                                             │
│     ├─► Too many file reads? Use Glob more selectively         │
│     ├─► Large file contents? Read specific lines only          │
│     ├─► Long conversation? Start fresh iteration               │
│     └─► Subagent outputs? Summarize before returning           │
│                                                                │
│  3. INTERVENE                                                  │
│     ├─► If Ralph: Let it complete, next iter fresh             │
│     ├─► If interactive: /compact or start new session          │
│     ├─► If Gas Town: Stop agent, reassign with smaller task    │
│     └─► Future: Split task smaller in PRD                      │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

### Failure Pattern 3: Coordination Failure

**Sym**ptoms:
- Multiple agents working on same file
- Merge conflicts accumulating
- Refinery queue growing

**Deb**ugging Flow:

```
┌───────────────────────────────────────────────────────────────┐
│               COORDINATION FAILURE DIAGNOSIS                   │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  1. VISUAL SCAN (gtgui)                                        │
│     └─► Are multiple units clustered on same rig?              │
│     └─► Is Refinery (orange) overloaded?                       │
│                                                                │
│  2. CHECK TASK ASSIGNMENTS                                     │
│     └─► gt status --json | jq '.polecats[].currentTask'        │
│     └─► Are tasks overlapping in file scope?                   │
│                                                                │
│  3. IDENTIFY ROOT CAUSE                                        │
│     ├─► Unclear task boundaries? Revise PRD                    │
│     ├─► Missing file ownership rules? Add to prompts           │
│     ├─► Workers spawning sub-agents? Enforce rules             │
│     └─► Parallelism too high? Reduce agent count               │
│                                                                │
│  4. INTERVENE                                                  │
│     ├─► Pause conflicting agents                               │
│     ├─► Resolve merge conflicts manually                       │
│     ├─► Reassign with clearer boundaries                       │
│     └─► Consider git worktrees for true isolation              │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

### Failure Pattern 4: Silent Failure

**Sym**ptoms:
- Agent appears green (working)
- No errors visible
- No actual progress

**Deb**ugging Flow:

```
┌───────────────────────────────────────────────────────────────┐
│                  SILENT FAILURE DIAGNOSIS                      │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  1. CHECK INDICATORS                                           │
│     ├─► HUD: Is tool activity showing?                         │
│     ├─► gtgui: Any movement or state changes?                  │
│     └─► Git: Any commits in last N minutes?                    │
│                                                                │
│  2. EXAMINE LOGS                                               │
│     └─► gt logs AGENT_NAME | grep -E "(Error|Warning|TODO)"    │
│     └─► Is agent "thinking" without acting?                    │
│                                                                │
│  3. COMMON CAUSES                                              │
│     ├─► Infinite planning loop (analysis paralysis)            │
│     ├─► Waiting for external dependency                        │
│     ├─► Model API timeout (check network)                      │
│     └─► Prompt ambiguity causing indecision                    │
│                                                                │
│  4. INTERVENE                                                  │
│     ├─► Stop and restart with clearer prompt                   │
│     ├─► Add explicit "do this first" instruction               │
│     ├─► Reduce task scope                                      │
│     └─► Use more decisive model (Opus for ambiguity)           │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

---

## Mental Models

### Mental Model 1: The Control Room

> "**Thi**nk of observability tools as the control room of a power plant. The indicators exist because you **can**not be everywhere at once."

**The** Control Room Analogy:

```
                    POWER PLANT CONTROL ROOM

    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  ○ ○ ○    Reactor Core         [===========]       │
    │  ● ● ○    Temperature: 342°C   [NOMINAL   ]       │
    │  ○ ● ○    Pressure: 15.2 MPa   [WARNING   ]       │
    │           Coolant Flow: 98%    [NOMINAL   ]       │
    │                                                     │
    └─────────────────────────────────────────────────────┘
                            ↓
                    CLAUDE CODE OBSERVABILITY

    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  🟢 🟢 🟡   Agent Health         ████████░░        │
    │  Context: 72%                    [CAUTION  ]       │
    │  Tools Running: 2                [NORMAL   ]       │
    │  Task Progress: 4/7              [ON TRACK ]       │
    │                                                     │
    └─────────────────────────────────────────────────────┘
```

**Imp**lications:
- You **don**'t watch every gauge constantly
- **Col**or coding draws attention to problems
- **Tre**nds matter more than absolute values
- **Ala**rms exist so you can look away

### Mental Model 2: The War Room

> "**gtg**ui is a military command center. The map shows your forces. Colors show readiness. You issue orders and watch outcomes."

**The** War Room Analogy:

```
    TRADITIONAL WAR ROOM                 GTGUI WAR ROOM

    ┌──────────────────────┐         ┌──────────────────────┐
    │        MAP           │         │    ISOMETRIC MAP     │
    │                      │         │                      │
    │  ▲ ▲   ← Troops      │         │  🟢 🟢   ← Agents    │
    │    ▲                 │         │    🔴                │
    │  ★   ← HQ            │         │  🏛️   ← Town Hall   │
    │                      │         │                      │
    │  Resources: $$$      │         │  Tokens: 45,234     │
    │  Intel: Reports      │         │  Issues: 12         │
    │  Comms: Radio        │         │  Commands: Panel    │
    └──────────────────────┘         └──────────────────────┘
```

**Imp**lications:
- You **don**'t micromanage every soldier
- You **iss**ue strategic orders
- You **res**pond to color changes (red = problem)
- The **map** gives spatial memory of state

### Mental Model 3: The Ant Farm

> "**Cla**ude Code is the world's biggest fuckin' ant."
> -- Steve Yegge

**The** Ant Farm Analogy:

```
    ANT FARM                         AGENT FACTORY

    ┌──────────────────────┐         ┌──────────────────────┐
    │ │   │                │         │                      │
    │ │ 🐜│  ← Ants work   │         │ 🤖 🤖   ← Agents    │
    │ │   │    autonomously│         │      work            │
    │       🐜              │         │    🤖   autonomously │
    │    🐜     🐜          │         │ 🤖     🤖           │
    │                      │         │                      │
    │  GLASS WALL          │         │  OBSERVABILITY       │
    │  lets you observe    │         │  lets you observe    │
    └──────────────────────┘         └──────────────────────┘
```

**Imp**lications:
- Agents work **aut**onomously (that's the point)
- You **obs**erve patterns emerge
- You **occ**asionally tap the glass (intervene)
- The **gla**ss wall IS the observability layer

### Mental Model 4: Polling vs. Events

> "**Cla**ude HUD polls every 300ms. gtgui polls every 3 seconds. This is not real-time--it's **nea**r-real-time."

**Und**erstanding Latency:

```
    ACTUAL STATE          OBSERVED STATE

    t=0:   Agent starts   (not yet visible)
    t=300: ...            HUD updates: "Running"
    t=600: Agent errors   (not yet visible)
    t=900: ...            HUD updates: "Error"

    IMPLICATION: Rapid tool sequences may appear batched
```

**Wha**t This Means:
- Don't expect **ins**tant updates
- Overall **tre**nds matter more than microsecond accuracy
- If something **loo**ks wrong, wait one update cycle before panicking

---

## Checkpoints

### Checkpoint 1: Claude HUD Installation Verified

**Whe**re you are: You have installed Claude HUD and run setup.
**Wha**t this enables: Real-time visibility into single Claude Code sessions.

**Ver**ify your state:
```bash
# Check plugin is installed
ls ~/.claude/plugins/claude-hud/

# Check config exists
cat ~/.claude/plugins/claude-hud/config.json
```

**You** should see:
```
config.json        ← Configuration file
dist/              ← Compiled plugin
package.json       ← Dependencies
src/               ← Source code
```

**If** you don't see this:
- Check: Did `/plugin install claude-hud` complete without errors?
- Check: Node.js version 18+ (`node --version`)
- Check: Claude Code version 1.0.80+ (`claude --version`)
- Go back to: Installation and Setup section

**Thi**s connects to: Next you'll verify HUD displays correctly in a session.

---

### Checkpoint 2: Claude HUD Displaying Correctly

**Whe**re you are: HUD is installed and should be visible.
**Wha**t this enables: Confidence that monitoring is active.

**Ver**ify your state:
1. Start a new Claude Code session
2. Send any prompt
3. Look for statusline at top of output

**You** should see:
```
[Opus 4.5] ████░░░░░░ 15% | 📁 yourproject | git:(main) | ⏳ 1m
```

**If** you don't see this:
- Check: Run `/claude-hud:setup` if not done
- Check: Your terminal supports ANSI colors (`echo -e "\e[32mGreen\e[0m"`)
- Check: Config file exists and is valid JSON
- Go back to: Configuration Options section

**Thi**s connects to: You can now monitor context usage and tool activity.

---

### Checkpoint 3: Gas Town GUI Running

**Whe**re you are: gtgui is installed and server is running.
**Wha**t this enables: Visual RTS-style interface for Gas Town.

**Ver**ify your state:
```bash
# Check server is running
curl http://localhost:3000

# Check Gas Town connection
curl http://localhost:8080/api/status
```

**You** should see:
- Browser at localhost:3000 shows isometric map
- Terrain tiles render correctly
- No JavaScript console errors
- API returns JSON with town status

**If** you don't see this:
- Check: Gas Town backend is running (`gt status`)
- Check: Environment variables set (PORT, GT_PATH, TOWN_ROOT)
- Check: No port conflicts on 3000 or 8080
- Go back to: Gas Town GUI Installation section

**Thi**s connects to: You can now visually monitor multi-agent systems.

---

### Checkpoint 4: Multi-Agent Visibility Working

**Whe**re you are: Running multiple agents with visibility configured.
**Wha**t this enables: Simultaneous awareness of all agent states.

**Ver**ify your state:
1. Start 2+ agents (via Gas Town, CC-Mirror, or parallel Ralph)
2. Check visibility tool shows all agents
3. Verify status updates reflect actual state

**You** should see:
- Each agent visible with distinct status
- Color coding matches actual state (green = working, red = error)
- Updates happen within polling interval (3 seconds for gtgui)

**If** you don't see this:
- Check: All agents registered with orchestration system
- Check: Polling/API connections working
- Check: No firewall blocking local connections
- Go back to: Multi-Agent Visibility Patterns section

---

### Checkpoint 5: Alert System Configured

**Whe**re you are: Alerts set up for overnight runs.
**Wha**t this enables: "Set and forget" with notification safety net.

**Ver**ify your state:
```bash
# Test notification hook
echo '{"type": "test"}' | ~/.claude/hooks/check-alerts.sh

# Check your phone/Slack for test message
```

**You** should see:
- Test notification arrives on configured channel
- Hook script has execute permission
- Notification latency is acceptable (<30 seconds)

**If** you don't see this:
- Check: Webhook URLs are correct
- Check: Hook script is executable (`chmod +x`)
- Check: Network allows outbound webhook calls
- Go back to: Alert-Based Monitoring pattern

---

## Troubleshooting

### Claude HUD Issues

#### Problem: "HUD not appearing"

**Sym**ptoms:** Terminal shows normal Claude Code output, no statusline

**Cau**se:** Plugin not loaded or display disabled

**Sol**ution:**
```bash
# Re-run setup
/claude-hud:setup

# Or reset config
rm ~/.claude/plugins/claude-hud/config.json
/claude-hud:configure

# Verify plugin active
/plugin list
```

**Pre**vention:** Always run setup after installation

---

#### Problem: "Colors not showing"

**Sym**ptoms:** Context bar is gray or wrong colors

**Cau**se:** Terminal doesn't support ANSI colors

**Sol**ution:**
```bash
# Test terminal color support
echo -e "\e[32mGreen\e[0m \e[33mYellow\e[0m \e[31mRed\e[0m"

# For tmux, enable 256 colors
echo 'set -g default-terminal "xterm-256color"' >> ~/.tmux.conf
tmux source-file ~/.tmux.conf

# Check TERM variable
echo $TERM  # Should be xterm-256color or similar
```

**Pre**vention:** Use modern terminal emulators (iTerm2, Kitty, Alacritty)

---

#### Problem: "Usage limits not showing"

**Sym**ptoms:** Usage display empty or shows "N/A"

**Cau**se:** Using API key instead of OAuth, or not on Pro/Max/Team

**Sol**ution:**
- Usage display requires Pro/Max/Team subscription
- Must be logged in via OAuth (not API key)
- This is expected behavior for API key users

**Pre**vention:** None - this is a feature limitation

---

#### Problem: "Activity lines empty"

**Sym**ptoms:** No tools/agents showing despite activity

**Cau**se:** Activity lines are transient - they disappear when idle

**Sol**ution:**
- Activity only shows during active operations
- Trigger an action: "Read the file package.json"
- Should see: `✓ Read ×1`
- Empty when idle is normal behavior

**Pre**vention:** Understand this is expected behavior

---

### Gas Town GUI Issues

#### Problem: "Cannot connect to Gas Town"

**Sym**ptoms:** API errors in console, resource bar shows zeros

**Cau**se:** Gas Town backend not running or misconfigured

**Sol**ution:**
```bash
# Verify Gas Town running
gt status

# Check environment variables
echo $GT_PATH
echo $TOWN_ROOT

# Test API directly
curl http://localhost:8080/api/status

# Restart with correct env
PORT=3000 GT_PATH=$(which gt) TOWN_ROOT=~/gt npm run server
```

**Pre**vention:** Always verify Gas Town is running before starting GUI

---

#### Problem: "Units not updating"

**Sym**ptoms:** Colors stay stale, new agents don't appear

**Cau**se:** Polling failing or state sync broken

**Sol**ution:**
```bash
# Check browser console for errors
# F12 → Console tab

# Verify polling happening
# Network tab should show /api/status calls every 3 seconds

# Hard refresh
Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

# Check Gas Town logs
gt logs | tail -50
```

**Pre**vention:** Keep browser console open during debugging

---

#### Problem: "Map not rendering"

**Sym**ptoms:** Black or colored rectangle only, no isometric tiles

**Cau**se:** WebGL issue or asset loading failure

**Sol**ution:**
```bash
# Check WebGL support
# Visit: https://get.webgl.org

# Try different browser (Chrome recommended)

# Check BootScene completion in console
# Should see: "Assets loaded successfully"

# Rebuild
npm run build
npm run server
```

**Pre**vention:** Use Chrome for best Phaser 3 compatibility

---

#### Problem: "Controls not responding"

**Sym**ptoms:** WASD does nothing, clicks don't select

**Cau**se:** Canvas not focused or event listeners broken

**Sol**ution:**
- Click inside game canvas to focus it
- Right-click showing browser context menu? Phaser should prevent this
- Disable browser extensions that might interfere
- Check if scene is paused

**Pre**vention:** Click canvas once before using keyboard controls

---

### General Observability Issues

#### Problem: "Information overload"

**Sym**ptoms:** Too much data, can't focus on what matters

**Cau**se:** All features enabled, not tuned for workflow

**Sol**ution:**
1. Start with minimal config
2. Add features one at a time
3. Use presets:
   - Essential: Core metrics only
   - Minimal: Just context bar
   - Full: Everything (for debugging)

**Pre**vention:** Match config complexity to task complexity

---

#### Problem: "Missed critical alert"

**Sym**ptoms:** Agent was stuck for hours, no notification received

**Cau**se:** Alerting not configured or not working

**Sol**ution:**
```bash
# Test alert system
echo "test" | ~/.claude/hooks/notify.sh

# Verify webhook
curl -X POST $WEBHOOK_URL -d '{"message":"test"}'

# Check hook permissions
ls -la ~/.claude/hooks/
# Should show execute permission (rwx)
```

**Pre**vention:** Test alerting before every overnight run

---

#### Problem: "Observability overhead slowing work"

**Sym**ptoms:** Sessions feel slower with monitoring enabled

**Cau**se:** Polling overhead or resource contention

**Sol**ution:**
- HUD: 300ms polling is minimal overhead
- gtgui: 3 second polling, reduce if needed
- Close unused browser tabs
- Use production build: `npm run build && npm run server`

**Pre**vention:** Observability overhead is typically <1% - if significant, investigate other causes

---

## Integration Patterns

### Pattern 1: HUD + Ralph Loop

**Pur**pose:** Monitor iteration progress and context efficiency

**Con**figuration for Ralph:**
```json
{
  "lineLayout": "expanded",
  "display": {
    "showContextBar": true,
    "showDuration": true,
    "showTools": true,
    "showTodos": true,
    "autocompactBuffer": "enabled"
  }
}
```

**Int**egration Setup:**

1. Add HUD awareness to prompt.md:
```markdown
## Session Monitoring

The HUD statusline shows context usage:
- Target: Complete task before context exceeds 70%
- If approaching 70%, wrap up current work
- Tool counts indicate iteration efficiency
```

2. Monitor iteration patterns:
```bash
# In tmux watching Ralph:
# Pane 1: Ralph loop running
# Pane 2: HUD visible in active session
```

3. Optimize iteration size using HUD data:
```
If HUD shows:
- Red (85%+) before story complete → Story too large, split it
- Green (<40%) at completion → Story might be too small
- Yellow (60-80%) at completion → Ideal story size
```

**Exa**mple Ralph + HUD Session:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Opus 4.5] ████████░░ 45% | 📁 myapp | git:(ralph/auth-fix) | ⏳ 3m        │
│ ✓ Read ×5 | ✓ Edit ×2 | ✓ Bash ×1                                          │
│ ▸ Implementing auth middleware | 1/4 complete                               │
└─────────────────────────────────────────────────────────────────────────────┘

=== Iteration 7 ===
Completing US-004: Auth middleware...
```

---

### Pattern 2: gtgui + Gas Town

**Pur**pose:** Visual factory management for 10+ agents

**Con**figuration:**
- Gas Town backend running (`gt start`)
- gtgui server running on port 3000
- All agents registered as polecats

**Wor**kflow:**

```
┌───────────────────────────────────────────────────────────────────────────┐
│                    DAILY WORKFLOW WITH GTGUI                               │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  MORNING (5 min)                                                          │
│  ├─► Open gtgui in browser                                                │
│  ├─► Scan map for red units (problems)                                    │
│  ├─► Check resource bar (cost, issues, convoys)                           │
│  └─► Review Mayor inbox (gt inbox)                                        │
│                                                                           │
│  THROUGHOUT DAY (as needed)                                               │
│  ├─► Glance at gtgui minimap periodically                                 │
│  ├─► Click on red units to diagnose                                       │
│  ├─► Issue commands via context menu                                      │
│  └─► Monitor Refinery queue                                               │
│                                                                           │
│  EVENING (5 min)                                                          │
│  ├─► Check completed task count                                           │
│  ├─► Review any stuck agents                                              │
│  ├─► Approve/reject inbox items                                           │
│  └─► Set up overnight work                                                │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

---

### Pattern 3: HUD + CC-Mirror Orchestration

**Pur**pose:** Monitor orchestrated multi-agent coordination

**Con**figuration:**
```json
{
  "lineLayout": "expanded",
  "display": {
    "showContextBar": true,
    "showAgents": true,
    "showTodos": true,
    "showTools": true
  }
}
```

**Arc**hitecture:**
```
         ┌──────────────────────────────────────────┐
         │          ORCHESTRATOR SESSION            │
         │                                          │
         │  HUD: ██████░░░░ 52% | 🤖 Agents: 3     │
         │                                          │
         │  Agents:                                 │
         │    ◐ coder: "Implementing feature"       │
         │    ◐ tester: "Writing unit tests"        │
         │    ✓ docs: (completed)                   │
         │                                          │
         └──────────────────────────────────────────┘
```

---

### Pattern 4: Combined Stack (Maximum Visibility)

**Pur**pose:** Full observability for complex operations

**Sta**ck:**
1. **Cla**ude HUD per session (terminal statusline)
2. **gtg**ui for factory overview (browser)
3. **Ale**rts for critical events (mobile push)
4. **Log**ging for post-mortem (file)

**Lay**out Example (tmux):**
```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│                                       │                                       │
│         GTGUI (BROWSER)               │         TERMINAL LOGS                 │
│                                       │                                       │
│  [isometric map with agents]          │  gt logs --follow                     │
│                                       │                                       │
│                                       │  10:23 Alice: Reading config...       │
│                                       │  10:23 Bob: Edit complete            │
│                                       │  10:24 Carol: ERROR TypeScript        │
│                                       │                                       │
├───────────────────────────────────────┼───────────────────────────────────────┤
│                                       │                                       │
│    SESSION 1 (with HUD)               │    SESSION 2 (with HUD)               │
│                                       │                                       │
│  [Opus] ████░░ 42% | myapp | 5m      │  [Sonnet] ██████░░ 65% | tests | 3m   │
│  ✓ Read ×3 | ◐ Bash                   │  ✓ Read ×8 | ✓ Edit ×2                │
│                                       │                                       │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

### Integration Matrix

| Integration | Setup Time | Best For | Complexity |
|-------------|------------|----------|------------|
| **HUD** alone | 5 min | Single sessions, basic awareness | Level 1-3 |
| **HUD** + tmux | 10 min | 2-5 parallel agents | Level 3-4 |
| **gtg**ui alone | 30 min | Gas Town visual management | Level 6-7 |
| **HUD** + gtgui | 35 min | Gas Town + detail on demand | Level 6-7 |
| **Full** stack | 1 hour | Maximum visibility, overnight runs | Level 6-7 |

---

## Source Attribution

### Primary Sources

| Source | Type | Reliability | URL |
|--------|------|-------------|-----|
| **Cla**ude HUD Repository | Code | Primary (9/10) | github.com/jarrodwatts/claude-hud |
| **gtg**ui Repository | Code | Primary (9/10) | github.com/TRIBE-INC/gtgui |
| **Gas** Town Blog | Documentation | Primary (10/10) | steve-yegge.medium.com/welcome-to-gas-town |
| **Dol**tHub Experience Report | Experience | Secondary (8/10) | dolthub.com/blog/2026-01-15-a-day-in-gas-town |

### Author Information

**Jar**rod Watts (@jarrodwatts) - Claude HUD:
- Building @abstractchain
- 10+ hours/day on Claude Code
- Plugin created to solve personal visibility needs
- Active engagement with community feedback

**Ste**ve Yegge - Gas Town & Philosophy:
- Google veteran, Amazon principal engineer
- Prolific technical writer and speaker
- Gas Town creator and "vibe coding" pioneer
- Pushed boundaries of autonomous agent scale

### Related Documentation

| Document | Relationship |
|----------|--------------|
| `extractions/tooling/008-claude-hud-complete.md` | Full HUD technical reference |
| `extractions/tooling/012-gas-town-gui.md` | Full gtgui technical reference |
| `synthesis/mastery-ralph-complete.md` | Ralph pattern (integrates with HUD) |
| `extractions/orchestration/research-ralph-expanded.md` | Ralph implementation details |
| `synthesis/architecture-complexity-ladder.md` | Where observability fits in progression |

### Reliability Assessment

| Factor | HUD | gtgui |
|--------|-----|-------|
| **Sou**rce Authority | High (active maintainer) | High (Gas Town ecosystem) |
| **Doc**umentation Quality | High | Medium |
| **Com**munity Validation | High (2.5K stars) | Medium (newer) |
| **Mai**ntenance Status | Active | Active |
| **Int**egration Tested | Conceptually documented | Conceptually documented |

---

## Quick Reference

### Essential Commands

```bash
# Claude HUD
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
/claude-hud:configure

# Gas Town GUI
cd gtgui && npm install
npm run dev                    # Development with hot reload
npm run build && npm run server # Production

# Gas Town CLI (backend)
gt status                      # Town health
gt polecats                    # List agents
gt logs AGENT_NAME             # Agent logs
gt stop AGENT_NAME             # Stop agent
gt sling AGENT ISSUE           # Assign work
```

### Color Quick Reference

| Color | HUD Meaning | gtgui Meaning |
|-------|-------------|---------------|
| **Gre**en | Context safe (0-69%) | Agent working normally |
| **Yel**low | Context warning (70-84%) | Caution/monitoring |
| **Red** | Context critical (85%+) | Agent stuck/errored |
| **Blu**e | N/A | Agent idle |
| **Gol**d | N/A | Mayor role |
| **Pur**ple | N/A | Deacon role |

### Keyboard Shortcuts (gtgui)

| Key | Action |
|-----|--------|
| W / Up Arrow | Pan camera up |
| A / Left Arrow | Pan camera left |
| S / Down Arrow | Pan camera down |
| D / Right Arrow | Pan camera right |
| Mouse Wheel | Zoom in/out |
| Left Click | Select unit |
| Right Click | Issue command |

---

## Tags

`#observability` `#monitoring` `#claude-hud` `#gas-town-gui` `#visibility` `#multi-agent` `#debugging` `#dashboard` `#real-time` `#rts-interface` `#context-management` `#tooling` `#synthesis`

---

*This guide synthesizes Claude HUD and Gas Town GUI documentation to provide comprehensive observability patterns for Claude Code workflows. For detailed technical implementation of either tool, refer to the extraction documents in `extractions/tooling/`.*
