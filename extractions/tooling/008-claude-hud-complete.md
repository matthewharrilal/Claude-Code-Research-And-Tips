# Claude HUD: Complete Technical Deep Dive

**Version:** 1.0
**Extraction Date:** 2026-01-19
**Status:** Comprehensive reference for Claude HUD plugin
**Lines:** 700+

---

## You Are Here

**Context:** You are exploring Claude HUD, a real-time monitoring plugin for Claude Code that provides visibility into session state, tool execution, agent activity, and task progress.

**Where This Fits:**
```
Claude Code Ecosystem
├── Core CLI (claude-code)
├── Session Management
│   └── Claude HUD ← YOU ARE HERE (observability layer)
├── Orchestration Patterns
│   ├── Ralph Loop (iteration-based)
│   ├── Gas Town (multi-agent factory)
│   └── CC-Mirror (native orchestration)
└── Configuration (.claude/, CLAUDE.md, hooks, MCPs)
```

**Prerequisites:**
- Claude Code v1.0.80+
- Node.js 18+ or Bun runtime
- Pro/Max/Team subscription (for usage display)
- Terminal with ANSI color support

**What You'll Learn:**
1. How Claude HUD works internally
2. All configuration options and customization
3. How to integrate HUD with Ralph, Gas Town, and CC-Mirror
4. Troubleshooting common issues
5. Mental models for effective monitoring

---

## What This Is

### Core Definition

Claude HUD is a **Claude Code plugin** that displays real-time session information in your terminal's statusline. It transforms the invisible control plane of Claude Code into visible, actionable data.

### The Problem It Solves

**Without HUD:**
- Sessions are a black box
- Context limits hit unexpectedly
- No visibility into parallel tool execution
- Subagent activity invisible
- Todo progress hidden

**With HUD:**
- Real-time context percentage with color coding
- Active tool execution visible with spinners
- Subagent tracking with elapsed time
- Todo progress counter
- Usage limits for rate-limited plans

### Source Attribution

| Attribute | Value |
|-----------|-------|
| **Author** | Jarrod Watts (@jarrodwatts) |
| **Repository** | github.com/jarrodwatts/claude-hud |
| **Stars** | 2.5K |
| **License** | MIT |
| **Primary Languages** | TypeScript (47.8%), JavaScript (52.2%) |
| **Version** | v0.0.6 |
| **Contributors** | 14 |

---

## Why It Matters

### The Visibility Principle

> "You can't optimize what you can't measure."
> "Finally a HUD to tell if Claude's actually working... or just staring into the void"
> — @is_lu_is

Claude Code sessions involve complex state that affects output quality:

1. **Context Window Health** - Token usage directly impacts response quality
2. **Tool Execution** - Knowing what's running prevents confusion
3. **Agent Orchestration** - Subagents work in background invisibly
4. **Task Progress** - Todos track completion but need visibility

### Value Proposition by User Type

| User Type | Without HUD | With HUD |
|-----------|-------------|----------|
| **Casual User** | Surprised by context limits | Color-coded warning before limits |
| **Power User** | Guesses at tool activity | Sees exact tool execution in real-time |
| **Orchestration Architect** | Blind to subagent work | Full visibility into agent hierarchy |
| **Ralph Operator** | No iteration visibility | Monitors progress across iterations |

### ROI Calculation

**Installation time:** 2-3 minutes
**Daily time saved:** 5-15 minutes (context management, debugging)
**Break-even:** First day of use

---

## Architecture Deep Dive

### System Architecture

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

### Data Flow

1. **Input Phase**
   - Claude Code streams JSON via stdin
   - Payload includes: model info, context window metrics, token breakdown
   - Updates approximately every 300ms

2. **Processing Phase**
   - Config reader loads `~/.claude/plugins/claude-hud/config.json`
   - Transcript parser processes JSONL for tools, agents, todos
   - Git module queries repository state

3. **Aggregation Phase**
   - Session data combined with configuration counts
   - Usage API called for Pro/Max/Team limits
   - All data assembled into RenderContext

4. **Render Phase**
   - Header line: model, context bar, project, git, configs, usage, duration
   - Activity lines: tools (running/completed), agents, todos
   - Color coding applied based on thresholds
   - Output to stdout for terminal display

### Source Code Structure

```
claude-hud/
├── src/
│   ├── index.ts           # Entry point, main() orchestration
│   ├── stdin.ts           # Reads JSON from Claude Code
│   ├── transcript.ts      # Parses JSONL for tools/agents/todos
│   ├── config.ts          # Configuration schema and defaults
│   ├── config-reader.ts   # Loads and merges config files
│   ├── git.ts             # Git branch, dirty, ahead/behind
│   ├── usage-api.ts       # OAuth usage tracking (Pro/Max/Team)
│   ├── constants.ts       # Static values (autocompact buffer)
│   ├── debug.ts           # Debugging utilities
│   ├── extra-cmd.ts       # Custom command support (--extra-cmd)
│   ├── types.ts           # TypeScript interfaces
│   └── render/
│       ├── index.ts       # Main render orchestration
│       ├── colors.ts      # ANSI color definitions
│       ├── session-line.ts # Header rendering
│       ├── tools-line.ts  # Tool activity rendering
│       ├── agents-line.ts # Agent status rendering
│       └── todos-line.ts  # Todo progress rendering
├── tests/
│   └── fixtures/          # Test data (JSONL samples)
├── dist/                  # Compiled output
├── .claude-plugin/
│   ├── plugin.json        # Plugin manifest
│   └── marketplace.json   # Marketplace metadata
└── package.json           # Dependencies and scripts
```

### Key Interfaces

```typescript
// Input from Claude Code
interface StdinData {
  model: { id: string; display_name: string };
  context_window: {
    context_window_size: number;
    used_percentage: number;
  };
  tokens: {
    input: number;
    cache_creation: number;
    cache_read: number;
  };
}

// Transcript parsing output
interface TranscriptData {
  tools: Map<string, ToolEntry>;
  agents: Map<string, AgentEntry>;
  todos: TodoItem[];
  sessionStart: Date | null;
}

// Tool execution tracking
interface ToolEntry {
  name: string;
  status: 'running' | 'completed' | 'error';
  target?: string;
  startTime: Date;
  endTime?: Date;
}

// Agent activity tracking
interface AgentEntry {
  type: string;
  model?: string;
  description?: string;
  status: 'running' | 'completed';
  startTime: Date;
  endTime?: Date;
}

// Usage data (Pro/Max/Team only)
interface UsageData {
  fiveHour: { percent: number; resetAt: Date };
  sevenDay: { percent: number; resetAt: Date };
  plan: 'Pro' | 'Max' | 'Team';
  unavailable?: boolean;
}
```

---

## Key Features

### 1. Context Window Meter

The most critical feature: a visual indicator of token usage.

**Visual Representation:**
```
████████░░ 35%   ← GREEN: Safe zone, plenty of capacity
█████████░ 65%   ← YELLOW: Caution, monitor closely
██████████ 85%   ← RED: Critical, consider compacting
██████████ 95%   ← RED + token breakdown appears
```

**Color Thresholds (from colors.ts):**
```typescript
function getContextColor(percent: number): string {
  if (percent >= 85) return RED;
  if (percent >= 70) return YELLOW;
  return GREEN;
}
```

**Token Breakdown (appears at 85%+):**
```
Token Breakdown:
  Input:  145,234 / 200,000 (73%)
  Cache:   21,000 tokens cached
```

### 2. Tool Activity Tracking

Real-time visibility into what Claude Code is executing.

**Running Tools (yellow spinner):**
```
◐ Read: src/auth/middleware.ts
◐ Bash: npm run typecheck
```

**Completed Tools (green checkmark with count):**
```
✓ Read ×3 | ✓ Edit ×2 | ✓ Glob ×1
```

**Implementation (from tools-line.ts):**
```typescript
// Running tools: last 2 active
const running = tools
  .filter(t => t.status === 'running')
  .slice(-2)
  .map(t => `${yellow('◐')} ${cyan(t.name)}${t.target ? dim(`: ${truncatePath(t.target)}`) : ''}`);

// Completed tools: top 4 by count
const completed = aggregateCompleted(tools)
  .slice(0, 4)
  .map(({name, count}) => `${green('✓')} ${name} ${dim(`×${count}`)}`);
```

### 3. Agent Status Monitoring

Tracks subagents spawned by the Task tool.

**Display Format:**
```
🤖 Agents:
  ◐ research-auth [Opus 4.5]: "Analyzing authentication patterns" (23s)
  ◐ write-tests [Sonnet 4]: "Generating unit tests" (8s)
  ✓ explore-db (completed in 12s)
```

**Implementation (from agents-line.ts):**
```typescript
function formatAgent(agent: AgentEntry): string {
  const icon = agent.status === 'running' ? yellow('◐') : green('✓');
  const model = agent.model ? dim(`[${agent.model}]`) : '';
  const desc = agent.description ? dim(`: "${truncate(agent.description, 40)}"`) : '';
  const elapsed = formatElapsed(agent.startTime, agent.endTime);
  return `${icon} ${magenta(agent.type)}${model}${desc} (${elapsed})`;
}
```

### 4. Todo Progress Counter

Displays TodoWrite progress from Claude Code's built-in task tracking.

**Formats:**
```
▸ Fixing authentication bug | 2/5 complete   ← In progress
✓ All todos complete (5/5)                    ← All done
```

**Implementation (from todos-line.ts):**
```typescript
const inProgress = todos.find(t => t.status === 'in_progress');
if (inProgress) {
  return `${yellow('▸')} ${truncateContent(inProgress.content)} | ${completed}/${total} complete`;
}
if (completed === total) {
  return `${green('✓')} All todos complete ${dim(`(${total}/${total})`)}`;
}
```

### 5. Git Integration

Branch and repository status at a glance.

**Display Options:**
```
git:(main)                    ← Basic branch
git:(main*)                   ← Dirty (uncommitted changes)
git:(main*↑2↓1)               ← Ahead/behind remote
git:(main* !1+2✘1?3)          ← Full file stats (Starship format)
```

**Stat Codes:**
- `!` Modified staged
- `+` Added
- `✘` Deleted
- `?` Untracked

### 6. Usage Limits (Pro/Max/Team)

Rate limit visibility for subscription plans.

**Display:**
```
Usage: 45% (5h) | 12% (7d) | Resets in 2h 15m
```

**Implementation (from usage-api.ts):**
- Reads OAuth credentials from macOS Keychain or legacy file
- Calls `api.anthropic.com/api/oauth/usage`
- Caches results for 60 seconds
- Shows both 5-hour and 7-day windows

**Note:** API key users cannot see usage - this requires OAuth authentication.

### 7. Configuration Counts

Shows what's loaded in the Claude Code environment.

```
📝 1 CLAUDE.md | 3 rules | 2 MCPs | 1 hook
```

**Sources scanned:**
- User scope: `~/.claude/CLAUDE.md`, `~/.claude/settings.json`, `~/.claude.json`
- Project scope: `.claude/CLAUDE.md`, `.claude/CLAUDE.local.md`, `.mcp.json`, `settings.json`

---

## Installation and Setup

### Quick Installation

```bash
# Step 1: Add marketplace
/plugin marketplace add jarrodwatts/claude-hud

# Step 2: Install plugin
/plugin install claude-hud

# Step 3: Configure
/claude-hud:setup
```

**Linux Users:** Set TMPDIR before installation:
```bash
export TMPDIR=~/.cache/tmp
```

### Manual Installation

```bash
# Clone repository
cd ~/.claude/plugins
git clone https://github.com/jarrodwatts/claude-hud.git
cd claude-hud

# Install dependencies and build
npm ci
npm run build

# Test
npm test
```

### Setup Wizard

Running `/claude-hud:setup` presents preset options:

| Preset | Description |
|--------|-------------|
| **Full** | All displays enabled (recommended for new users) |
| **Essential** | Core info + activity (balanced) |
| **Minimal** | Bare minimum (context bar only) |
| **Custom** | Configure each option manually |

---

## Configuration Options

### Configuration File Location

```
~/.claude/plugins/claude-hud/config.json
```

### Complete Schema

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

### Layout Styles

**Expanded (default):**
```
[Opus 4.5] ████████░░ 35% | 📁 myapp | git:(main) | 1 MCP | ⏳ 5m
✓ Read ×2 | ✓ Edit ×1 | ◐ Bash: npm run build
```

**Compact:**
```
[Opus 4.5] 35% | myapp | main | 5m
```

### Path Levels Examples

```
pathLevels: 1 → myapp
pathLevels: 2 → apps/myapp
pathLevels: 3 → workspace/apps/myapp
```

---

## Usage Patterns

### Pattern 1: Basic Monitoring

**Goal:** Track context usage during normal development

**Configuration:**
```json
{
  "lineLayout": "expanded",
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showDuration": true,
    "showTools": false,
    "showAgents": false,
    "showTodos": false
  }
}
```

**Workflow:**
1. Install HUD with Essential preset
2. Watch context bar during work
3. When yellow (70%+), consider summarizing
4. When red (85%+), compact or start fresh

### Pattern 2: Debug Mode

**Goal:** Full visibility for troubleshooting

**Configuration:**
```json
{
  "lineLayout": "expanded",
  "showSeparators": true,
  "gitStatus": {
    "enabled": true,
    "showDirty": true,
    "showAheadBehind": true,
    "showFileStats": true
  },
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showConfigCounts": true,
    "showDuration": true,
    "showTokenBreakdown": true,
    "showUsage": true,
    "showTools": true,
    "showAgents": true,
    "showTodos": true
  }
}
```

**Workflow:**
1. Enable all displays
2. Monitor tool execution patterns
3. Watch for stuck or errored tools
4. Track agent completion times
5. Identify unexpected behavior

### Pattern 3: Performance Monitoring

**Goal:** Minimize overhead while tracking key metrics

**Configuration:**
```json
{
  "lineLayout": "compact",
  "display": {
    "showModel": false,
    "showContextBar": true,
    "showDuration": true,
    "showTools": false,
    "showAgents": false,
    "showTodos": false,
    "usageThreshold": 50
  }
}
```

**Workflow:**
1. Minimal display for fast sessions
2. Usage only appears above 50%
3. Focus on work, not monitoring

---

## Integration Patterns

### With Ralph Loop

**What Ralph Is:** An iterative development pattern where Claude runs in fresh context windows, picking tasks from a PRD and committing progress.

**Why HUD Matters for Ralph:**
- Each iteration burns context
- Progress visibility across iterations
- Tool patterns reveal iteration efficiency
- Context bar predicts when iteration will end

**Configuration for Ralph:**
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

**Integration Setup:**

1. **Add HUD to Ralph prompt.md:**
```markdown
## Session Monitoring

Check the HUD statusline for:
- Context usage (target: <70% per iteration)
- Tool execution counts
- Todo progress

If context exceeds 70%, wrap up current story and prepare for next iteration.
```

2. **Monitor Iteration Patterns:**
```bash
# In tmux watching Ralph:
# Pane 1: Ralph loop running
# Pane 2: HUD visible in active session

# Watch for:
# - Context bar color during iteration
# - Tool counts per iteration (efficiency metric)
# - Todo progress matching prd.json updates
```

3. **Optimize Iteration Size:**
```
If HUD shows:
- Red (85%+) before story complete → Story too large, decompose
- Green (<40%) at story complete → Story might be too small
- Yellow (60-80%) at completion → Ideal story size
```

**Example Ralph + HUD Session:**
```
[Opus 4.5] ████████░░ 45% | 📁 untangle | git:(ralph/auth-fix) | ⏳ 3m
✓ Read ×5 | ✓ Edit ×2 | ✓ Bash ×1
▸ Implementing auth middleware | 1/4 complete
```

### With Gas Town

**What Gas Town Is:** Steve Yegge's factory pattern for running multiple agents in parallel with specialized roles (Mayor, Deacon, Dogs, Refinery, Crew, etc.).

**Why HUD Matters for Gas Town:**
- Visibility into agent hierarchy
- Track Crew worker activity
- Monitor Witness observations
- Context health per agent

**Configuration for Gas Town:**
```json
{
  "lineLayout": "expanded",
  "showSeparators": true,
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showAgents": true,
    "showTools": true,
    "showTodos": true
  }
}
```

**Integration Setup:**

1. **Per-Rig HUD Monitoring:**
```bash
# Gas Town runs agents across multiple rigs
# Each rig can have HUD visibility

# In tmux (Gas Town's primary UI):
# Layout with HUD in each pane header

tmux set pane-border-status top
tmux set pane-border-format "#{pane_title}"
```

2. **Agent Role Visibility:**
```
HUD Agent Section shows:
◐ Crew [Sonnet 4]: "Implementing API endpoint" (45s)
◐ Dogs [Opus 4.5]: "Running quality gate" (12s)
✓ Refinery (completed in 8s)
```

3. **Multi-Agent Dashboard:**
```bash
# Create Gas Town dashboard with multiple HUD panes
# scripts/gt-dashboard.sh

tmux new-session -d -s gastown

# Rig 1 pane
tmux send-keys "cd ~/rigs/rig1 && mclaude" Enter

# Rig 2 pane
tmux split-window -h
tmux send-keys "cd ~/rigs/rig2 && mclaude" Enter

# Rig 3 pane
tmux split-window -v
tmux send-keys "cd ~/rigs/rig3 && mclaude" Enter

# Each pane shows HUD for its agent
tmux attach -t gastown
```

**Example Gas Town + HUD Session:**
```
[Sonnet 4] █████░░░░░ 28% | 📁 rig-api | git:(feature/endpoints) | ⏳ 2m
🤖 Agents:
  ◐ Crew [Sonnet 4]: "Building REST endpoints" (1m 23s)
  ◐ Witness [Haiku]: "Monitoring test failures" (45s)
✓ Read ×12 | ✓ Edit ×8 | ◐ Bash: npm test
```

### With CC-Mirror

**What CC-Mirror Is:** Numman Ali's tool that enables Claude Code's disabled multi-agent orchestration in an isolated environment.

**Why HUD Matters for CC-Mirror:**
- Native task monitoring built into orchestration
- Worker visibility during coordination
- Context health across orchestrated agents

**Configuration for CC-Mirror:**
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

**Integration Setup:**

1. **Install HUD in CC-Mirror Instance:**
```bash
# Create CC-Mirror instance
npx cc-mirror quick --provider mirror --name mclaude

# Launch instance
mclaude

# In mclaude session:
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

2. **Monitor Orchestration Tasks:**
```
HUD shows orchestration task progression:
☑ #1 Design API architecture      (Agent completed)
☐ #2 Create project structure     (Agent working)
☐ #3 Implement data models        (Queued)
🟠 #4 REST endpoints (blocked by #3)
```

3. **Cross-Agent Visibility:**
```
Agent Section during CC-Mirror orchestration:
◐ orchestrator [Opus 4.5]: "Coordinating task #2" (2m 15s)
◐ worker-1 [Sonnet 4]: "Creating directory structure" (45s)
✓ worker-0 (completed in 3m 12s)
```

**Example CC-Mirror + HUD Session:**
```
[Opus 4.5] ███████░░░ 52% | 📁 ecommerce | git:(main) | ⏳ 8m
🤖 Agents:
  ◐ orchestrator: "Managing task queue" (8m 15s)
  ◐ worker-api: "Implementing checkout flow" (2m 30s)
  ◐ worker-db: "Creating database migrations" (1m 45s)
✓ Task ×4 | ✓ Read ×23 | ✓ Edit ×15
▸ Implementing checkout | 3/7 complete
```

### Combination Matrix

| HUD + | Use Case | Complexity | Value | Setup Time |
|-------|----------|------------|-------|------------|
| **Ralph** | Iteration visibility, context efficiency | Low | High | 5 min |
| **Gas Town** | Agent hierarchy monitoring, multi-rig dashboard | Medium | Very High | 15 min |
| **CC-Mirror** | Native task monitoring, worker visibility | Medium | High | 10 min |
| **Ralph + Gas Town** | Factory-scale iteration tracking | High | Very High | 30 min |
| **All Three** | Full observability stack | High | Maximum | 45 min |

### Integration Best Practices

1. **Start Simple:** Use HUD standalone before integrating with orchestration
2. **Match Configs:** Align HUD config with orchestration complexity level
3. **Monitor Metrics:** Track tool counts per iteration/agent for optimization
4. **Context Budgets:** Use HUD to enforce context limits in prompt files
5. **Dashboard First:** Set up tmux dashboard before running complex orchestrations

---

## Mental Models

### Model 1: Dashboard Instrumentation

> "Think of Claude Code sessions as a dynamic system needing instrumentation—like a dashboard in a car to avoid breakdowns."

**Implications:**
- Visibility prevents crashes (context overflow)
- Real-time feedback beats blind trust
- Patterns emerge from continuous monitoring
- Instrumentation overhead is justified by saved debugging time

### Model 2: Control Plane Visibility

> "HUD makes the hidden control plane of Claude Code visible, which is critical for debugging long-horizon tasks."
> — @gurtej__gill_

**The Hidden Control Plane:**
- Tools execute behind the scenes
- Subagents spawn without notification
- Context accumulates invisibly
- Rate limits apply silently

**HUD Exposes:**
- Active tool execution
- Agent activity and duration
- Context consumption rate
- Remaining capacity

### Model 3: Polling-Based Observability

**Design Tradeoff:**
- Updates every ~300ms (polling interval)
- Balance: responsiveness vs. CPU overhead
- Not event-driven (would require deeper integration)
- Acceptable latency for human monitoring

**What This Means:**
- Don't expect instant updates
- Rapid tool sequences may appear batched
- Overall trends matter more than microsecond accuracy

### Model 4: External State Over Internal Memory

Claude HUD embodies the same principle as Ralph:
- HUD doesn't track state internally
- Reads from Claude Code's transcript on every update
- Git status fetched fresh each time
- Config reloaded on changes

**This Design:**
- Prevents stale data
- Stays synchronized with Claude Code
- Fails gracefully (defaults on error)
- Enables stateless operation

---

## Checkpoints

### Installation Verification

**After `/plugin install claude-hud`:**

You should see:
```
📦 Installing claude-hud...
✓ Downloaded plugin files
✓ Dependencies installed
✅ claude-hud installed!
```

If you don't see this:
- Check Node.js version (18+ required): `node --version`
- Verify Claude Code version (1.0.80+): `claude --version`
- Check internet connectivity

### Setup Verification

**After `/claude-hud:setup`:**

You should see:
```
🎨 Claude HUD Setup
Select a preset: [Full/Essential/Minimal/Custom]
✅ Setup complete!
HUD will appear on your next prompt.
```

If HUD doesn't appear on next prompt:
- Run `/claude-hud:configure` to verify settings
- Check `~/.claude/plugins/claude-hud/config.json` exists
- Restart Claude Code session

### Functionality Verification

**Test each feature:**

1. **Context Bar:**
   - Send a long prompt
   - Bar should move right and possibly change color

2. **Tool Activity:**
   - Ask: "Read the file package.json"
   - Should see: `✓ Read ×1`

3. **Agent Activity (if using subagents):**
   - Use Task tool for parallel work
   - Should see agent entries appear

4. **Git Status:**
   - Navigate to a git repository
   - Should see: `git:(branch-name)`

5. **Todos:**
   - Ask Claude to create a todo list
   - Should see todo progress counter

---

## Troubleshooting

### Installation Issues

#### Error: "Plugin marketplace not available"

**Symptoms:** `/plugin marketplace` command not recognized

**Cause:** Claude Code version too old or marketplace disabled

**Solution:**
```bash
# Update Claude Code
npm update -g @anthropic-ai/claude-code

# Verify version
claude --version  # Should be 1.0.80+

# If still failing, manual install:
cd ~/.claude/plugins
git clone https://github.com/jarrodwatts/claude-hud.git
cd claude-hud && npm ci && npm run build
```

#### Error: "EXDEV: cross-device link not permitted" (Linux)

**Symptoms:** Installation fails on Linux

**Cause:** tmpfs limitations with npm

**Solution:**
```bash
# Set TMPDIR before installation
export TMPDIR=~/.cache/tmp
mkdir -p ~/.cache/tmp

# Retry installation
/plugin install claude-hud
```

### Configuration Issues

#### HUD Not Displaying

**Symptoms:** Terminal shows normal Claude Code, no statusline

**Cause:** Setup incomplete or display disabled

**Solution:**
```bash
# Re-run setup
/claude-hud:setup

# Or check config directly
cat ~/.claude/plugins/claude-hud/config.json

# Reset to defaults
rm ~/.claude/plugins/claude-hud/config.json
/claude-hud:configure
```

#### Colors Not Showing

**Symptoms:** Bar is gray or wrong colors

**Cause:** Terminal doesn't support ANSI colors

**Solution:**
```bash
# Test terminal color support
echo -e "\e[32mGreen\e[0m \e[33mYellow\e[0m \e[31mRed\e[0m"

# For tmux, enable 256 colors
echo 'set -g default-terminal "xterm-256color"' >> ~/.tmux.conf
tmux source-file ~/.tmux.conf

# Check TERM variable
echo $TERM  # Should be xterm-256color or similar
```

### Runtime Issues

#### Usage Limits Not Showing

**Symptoms:** Usage display empty or shows "N/A"

**Cause:** Using API key instead of OAuth, or not on Pro/Max/Team

**Solution:**
- Usage display requires Pro/Max/Team subscription
- Must be logged in via OAuth (not API key)
- This is expected behavior for API users

#### Activity Lines Empty

**Symptoms:** No tools/agents showing despite activity

**Cause:** Activity lines are transient—they disappear when idle

**Solution:**
- Activity only shows during active operations
- Trigger an action: "Read the file package.json"
- Should see: `✓ Read ×1`
- Empty when idle is normal behavior

#### HUD Updates Laggy

**Symptoms:** Display feels delayed or jerky

**Cause:** 300ms polling interval is by design

**Solution:**
- This is expected behavior
- 300ms is the balance between responsiveness and CPU
- For smoother updates, consider contributing a patch

### Emergency Recovery

```bash
# Complete removal and reinstall
rm -rf ~/.claude/plugins/claude-hud
/plugin install claude-hud
/claude-hud:setup

# Config reset only
rm ~/.claude/plugins/claude-hud/config.json
/claude-hud:configure

# If causing crashes
mv ~/.claude/plugins/claude-hud ~/.claude/plugins/claude-hud.bak
claude  # Start without HUD
```

---

## Source Attribution

### Primary Sources

| Source | Type | URL |
|--------|------|-----|
| GitHub Repository | Code | github.com/jarrodwatts/claude-hud |
| Original Tweet | Announcement | x.com/jarrodwatts/status/2007579355762045121 |
| README.md | Documentation | github.com/jarrodwatts/claude-hud/blob/main/README.md |
| CONTRIBUTING.md | Dev Guide | github.com/jarrodwatts/claude-hud/blob/main/CONTRIBUTING.md |

### Author Information

**Jarrod Watts (@jarrodwatts)**
- Building @abstractchain
- 10+ hours/day on Claude Code
- Plugin created to solve personal visibility needs
- Active engagement with community feedback

### Related Documentation

| Document | Relationship |
|----------|--------------|
| `003-claude-hud-jarrodwatts.md` | Original extraction (superseded) |
| `009-gas-town-steve-yegge.md` | Gas Town integration context |
| `007-cc-mirror-multiagent-nummanali.md` | CC-Mirror integration context |
| `002-ralph-loop-ryancarson.md` | Ralph integration context |

### Reliability Assessment

| Factor | Rating | Notes |
|--------|--------|-------|
| Source Authority | High | Creator is power user, active maintainer |
| Documentation Quality | High | Comprehensive README, CONTRIBUTING, TESTING |
| Community Validation | High | 2.5K stars, 14 contributors, active PRs |
| Maintenance Status | Active | Recent commits, responsive to issues |
| Integration Tested | Medium | Integrations documented conceptually |

---

## Tags

`#tooling` `#plugin` `#hud` `#monitoring` `#context-management` `#visibility` `#debugging` `#statusline` `#observability` `#ralph-integration` `#gas-town-integration` `#cc-mirror-integration` `#quick-win`

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-19 | 1.0 | Initial comprehensive extraction |

---

*This extraction provides complete technical documentation for Claude HUD, including architecture, configuration, integration patterns, and troubleshooting. For quick start, see Installation and Setup section.*
