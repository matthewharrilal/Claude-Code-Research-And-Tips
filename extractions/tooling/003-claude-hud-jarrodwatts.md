# Claude HUD - Real-Time Session Visibility Plugin

## Source
- **Author:** @jarrodwatts (Jarrod Watts) - Building @abstractchain, 10+ hrs/day on Claude Code
- **Date:** 2026-01-03
- **URL:** https://x.com/jarrodwatts/status/2007579355762045121
- **Engagement:** 2796 likes, 227K views, 3735 bookmarks
- **Repo:** github.com/jarrodwatts/claude-hud (1.8K stars)

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md [Session Monitoring, Context Visibility, Debugging Tools sections]
**Journey references:** journey-implementation.md [Claude HUD as Level 2-3 observability tool]
**Last enhanced:** 2026-01-18 (Phase 2B)
---

## Core Insight

> "Finally a HUD to tell if Claude's actually working... or just staring into the void"

A Claude Code plugin that shows you:
- Context remaining in the session
- What tools are executing
- Which subagents are running
- Claude's to-do list progress

---

## Installation

```bash
# Add the marketplace
/plugin marketplace add jarrodwatts/claude-hud

# Install the plugin
/plugin install claude-hud

# Configure the statusline
/claude-hud:setup
```

---

## What It Shows

### Session Metadata
- Model in use (e.g., Opus 4.5)
- Plan tier
- **Context percentage with color-coded bar:**
  - Green = low usage
  - Yellow = medium
  - Red = high
- Project path
- Git branch
- Config counts (CLAUDE.md files, rules, MCPs, hooks)
- Usage limits
- Session duration

### Tool Activity
- Spinners for running tools (Read, Edit, Glob, etc.)
- File targets being operated on
- Checkmarks and counts for completed tools

### Agent Status
- Subagent names (Explore, Librarian, etc.)
- Descriptions of what they're doing
- Elapsed time
- Completion indicators

### Todo Progress
- Current task status
- Completion counter (e.g., 5/5)

---

## Configuration

### Interactive Setup
```
/claude-hud:configure
```

Presets:
- **Full** - All displays enabled
- **Essential** - Core info only
- **Minimal** - Bare minimum

### Manual Config

Location: `~/.claude/plugins/claude-hud/config.json`

```json
{
  "layout": "default",
  "pathLevels": 2,
  "gitStatus": {
    "enabled": true,
    "showDirty": true,
    "showAheadBehind": true
  },
  "display": {
    "showModel": true,
    "showContextBar": true,
    "showConfigCounts": true,
    "showDuration": true,
    "showUsage": true,
    "showTokenBreakdown": true,
    "showTools": true,
    "showAgents": true,
    "showTodos": true
  }
}
```

---

## Technical Details

- Updates every ~300ms
- Parses Claude Code's stdin JSON and transcript JSONL
- Extracts native token data, tools, agents, todos
- Renders to stdout in terminal statusline
- Uses native APIs - no tmux or separate windows needed
- Color coding for context bar
- Token breakdown appears at 85%+ usage

---

## Sample Output

```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ WebFetch x1 | ✓ Skill x1 | ✓ Edit x1
```

---

## Thread Gold

### @is_lu_is - The Problem Solved
> "Finally a HUD to tell if Claude's actually working... or just staring into the void"

### @jarrodwatts - Core Motivation
> "Exactly why I made it lmao (also to see context window usage)"

### @gurtej__gill_ - Value Proposition
> "Makes the hidden control plane of Claude Code visible, which is critical for debugging long-horizon tasks."

### @DeeperThrill - Installation Validation
Screenshot showing successful HUD after setup with green 35% context bar.

---

## Prerequisites

- Claude Code v1.0.80+
- Logged in with Claude Pro, Max, or Team account (for usage limits)
- Terminal supporting ANSI colors
- Node.js 18+ or Bun

---

## Caveats

- Usage display only for Pro/Max/Team (not API users)
- Git status requires being in a repo
- Activity lines only appear when relevant (may seem missing if idle)
- Config errors silently revert to defaults
- Updates have ~300ms polling delay

---

## Mental Model

Think of Claude Code sessions as a dynamic system needing instrumentation:
- Like a dashboard in a car to avoid breakdowns
- Visibility into resource usage prevents context overflow
- Seeing parallel processes (tools/agents) aids debugging
- Real-time feedback beats blind trust

---

## Actionability

🟢 **Quick Win** - Install in under 5 minutes

---

## What You'll See When You Run This

**Before running:** You have Claude Code v1.0.80+ installed with Pro/Max/Team subscription.

### Installing Claude HUD

```
claude> /plugin marketplace add jarrodwatts/claude-hud
```

**Annotated Output:**
```
🔍 Searching marketplace...            ← Finding the plugin
  ✓ Found: claude-hud by jarrodwatts
    Version: 1.5.2
    Stars: 1.8K
    Description: Real-time session visibility

📦 Adding to plugin registry...
  ✓ Marketplace added

Next: Run /plugin install claude-hud
```

```
claude> /plugin install claude-hud
```

**Annotated Output:**
```
📦 Installing claude-hud...

Downloading plugin files...
  ✓ src/statusline/renderer.js
  ✓ src/parsers/session.js
  ✓ src/parsers/tools.js
  ✓ config.json.template

Installing dependencies...
  ✓ chalk (for colors)
  ✓ ora (for spinners)

✅ claude-hud installed!

Run /claude-hud:setup to configure
```

### Running Setup

```
claude> /claude-hud:setup
```

**Annotated Output:**
```
🎨 Claude HUD Setup

Select a preset:

  [1] Full         - All displays enabled (recommended)
  [2] Essential    - Core info only
  [3] Minimal      - Bare minimum
  [4] Custom       - Configure manually

Selection: 1

Applying Full preset...
  ✓ Model display: ON
  ✓ Context bar: ON
  ✓ Config counts: ON
  ✓ Duration: ON
  ✓ Usage limits: ON
  ✓ Token breakdown: ON (at 85%+)
  ✓ Tool activity: ON
  ✓ Agent status: ON
  ✓ Todo progress: ON
  ✓ Git status: ON

✅ Setup complete!

HUD will appear on your next prompt.
```

### The HUD in Action

After setup, your Claude Code terminal shows:

```
╔═══════════════════════════════════════════════════════════════╗
║ [Opus 4.5] ████████░░ 35% | 📁 myapp | 🌿 main | 1 MCP | ⏳ 1m║
╠═══════════════════════════════════════════════════════════════╣
║ ✓ Read x2 | ✓ WebFetch x1 | ⟳ Edit (saving...)             ║
╠═══════════════════════════════════════════════════════════════╣
║ 📋 Todos: 3/5 complete                                        ║
╚═══════════════════════════════════════════════════════════════╝

claude> _
```

**Context Bar Color Guide:**
```
████████░░ 35%   ← GREEN: Low usage, plenty of room
█████████░ 65%   ← YELLOW: Medium usage, be aware
██████████ 85%   ← RED: High usage, consider fresh session
██████████ 95%   ← RED + breakdown appears below
```

### During Active Tool Use

```
╔═══════════════════════════════════════════════════════════════╗
║ [Opus 4.5] ██████████ 72% | 📁 myapp | 🌿 feature/auth | 2 MCP║
╠═══════════════════════════════════════════════════════════════╣
║ ⟳ Read: src/auth/middleware.ts      ← Currently reading file ║
║ ⟳ Bash: npm run typecheck           ← Running in parallel    ║
║ ✓ Edit x3 | ✓ Glob x1               ← Completed tools        ║
╠═══════════════════════════════════════════════════════════════╣
║ 🤖 Agents:                                                    ║
║   ⟳ Explore: Finding auth patterns (15s)   ← Subagent active ║
║   ✓ Librarian: Checked dependencies (done)                   ║
╠═══════════════════════════════════════════════════════════════╣
║ 📋 Todos: [in_progress] Fix auth bug | 2/4 complete          ║
╚═══════════════════════════════════════════════════════════════╝
```

### At High Context Usage (85%+)

```
╔═══════════════════════════════════════════════════════════════╗
║ [Opus 4.5] ██████████ 89% | 📁 myapp | 🌿 main | ⚠️ HIGH     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║ ⚠️  Token Breakdown:                 ← Appears at 85%+        ║
║   Input:  145,234 / 200,000 (73%)                             ║
║   Output:  32,451 /  50,000 (65%)                             ║
║   Cache:   21,000 tokens cached      ← Context savings       ║
║                                                                ║
║ 💡 Consider: /compact or starting fresh session               ║
║                                                                ║
╠═══════════════════════════════════════════════════════════════╣
║ ✓ Read x12 | ✓ Edit x8 | ✓ Bash x5                           ║
╚═══════════════════════════════════════════════════════════════╝
```

### During Subagent Work

```
╔═══════════════════════════════════════════════════════════════╗
║ [Opus 4.5] ████████░░ 45% | 📁 myapp | 🌿 main               ║
╠═══════════════════════════════════════════════════════════════╣
║ 🤖 Background Agents:                                         ║
║                                                                ║
║   ⟳ research-auth                                             ║
║     "Analyzing authentication patterns in codebase"           ║
║     Running: 23s                     ← Live timer             ║
║                                                                ║
║   ⟳ write-tests                                               ║
║     "Generating unit tests for UserService"                   ║
║     Running: 8s                                                ║
║                                                                ║
║   ✓ explore-db (completed in 12s)                             ║
║     "Found: Drizzle ORM with SQLite"                          ║
║                                                                ║
╠═══════════════════════════════════════════════════════════════╣
║ ✓ Task x2 | ⟳ Task (research-auth running)                   ║
╚═══════════════════════════════════════════════════════════════╝
```

### When Idle (No Active Operations)

```
╔═══════════════════════════════════════════════════════════════╗
║ [Opus 4.5] ████████░░ 35% | 📁 myapp | 🌿 main | ⏳ 5m       ║
╠═══════════════════════════════════════════════════════════════╣
║ Last activity: ✓ Read x3 | ✓ Edit x1                         ║
╠═══════════════════════════════════════════════════════════════╣
║ 📋 Todos: 5/5 complete ✅                                     ║
╚═══════════════════════════════════════════════════════════════╝

claude> _                              ← Waiting for your next prompt
```

**Timing Expectations:**
- Installation: 2-3 minutes
- HUD refresh: Every ~300ms
- Tool spinners: Appear within 300ms of tool start
- Context bar: Updates with each Claude response

**What to Do While It Runs:**
- Glance at context bar to track usage
- Watch for yellow/red to know when to compact
- Tool spinners show what's happening right now
- Subagent section shows parallel work

**If you skip this plugin:** Claude Code is a black box. You don't know if it's thinking, running tools, or "staring into the void." You'll hit context limits without warning.

**This connects to:** The visibility principle - you can't optimize what you can't see. HUD makes the hidden control plane visible.

---

## Troubleshooting

### Installation Issues

#### Error: "Plugin marketplace not available"
**Symptoms:** `/plugin marketplace` command not recognized
**Cause:** Claude Code version too old, or marketplace not enabled
**Solution:**
```bash
# Update Claude Code to latest
npm update -g @anthropic-ai/claude-code

# Verify version (1.0.80+ required)
claude --version

# If marketplace still not available, try direct install
cd ~/.claude/plugins
git clone https://github.com/jarrodwatts/claude-hud.git
```
**Prevention:** Keep Claude Code updated to access plugin features

---

#### Error: "Failed to install claude-hud"
**Symptoms:** Plugin installation fails with errors
**Cause:** Node.js version incompatible, missing dependencies, or permission issues
**Solution:**
```bash
# Check Node.js version (18+ required)
node --version

# Update Node.js if needed
# Using nvm:
nvm install 18
nvm use 18

# Or with Bun:
curl -fsSL https://bun.sh/install | bash
bun --version

# Clear plugin cache and retry
rm -rf ~/.claude/plugins/claude-hud
/plugin install claude-hud

# If still failing, manual install:
cd ~/.claude/plugins
git clone https://github.com/jarrodwatts/claude-hud.git
cd claude-hud
npm install
```
**Prevention:** Use Node.js 18+ or Bun runtime

---

#### Error: "Permission denied" accessing plugin directory
**Symptoms:** Cannot create or modify plugin files
**Cause:** Directory permissions incorrect
**Solution:**
```bash
# Fix directory permissions
mkdir -p ~/.claude/plugins
chmod 755 ~/.claude/plugins

# If owned by root (from sudo install)
sudo chown -R $(whoami) ~/.claude

# Retry installation
/plugin install claude-hud
```
**Prevention:** Never use sudo for plugin installations

---

### Configuration Issues

#### Error: "Config not loading" or defaults being used
**Symptoms:** Settings changes have no effect, HUD shows unexpected layout
**Cause:** Invalid JSON in config, wrong file location, or syntax errors
**Solution:**
```bash
# Check config location
ls -la ~/.claude/plugins/claude-hud/config.json

# Validate JSON syntax
cat ~/.claude/plugins/claude-hud/config.json | jq .

# If jq shows errors, fix the JSON:
# Common issues:
# - Trailing commas
# - Missing quotes
# - Unclosed braces

# Reset to defaults if corrupted
rm ~/.claude/plugins/claude-hud/config.json
/claude-hud:configure
# Select "Full" preset
```
**Note:** Config errors silently revert to defaults - always validate JSON
**Prevention:** Use `/claude-hud:configure` for interactive config instead of manual editing

---

#### Problem: "Context bar not showing colors correctly"
**Symptoms:** Bar is gray or wrong color, not changing with usage
**Cause:** Terminal doesn't support ANSI colors, or terminal theme interference
**Solution:**
```bash
# Verify terminal supports colors
echo -e "\e[32mGreen\e[0m \e[33mYellow\e[0m \e[31mRed\e[0m"
# Should show colored text

# If using tmux, enable 256 colors
echo 'set -g default-terminal "xterm-256color"' >> ~/.tmux.conf
tmux source-file ~/.tmux.conf

# For iTerm2: Preferences > Profiles > Terminal > Report Terminal Type: xterm-256color

# Check TERM variable
echo $TERM
# Should be xterm-256color or similar
```
**Prevention:** Use modern terminal with full color support

---

#### Problem: "Usage limits not showing"
**Symptoms:** Usage display empty or shows "N/A"
**Cause:** Not on Pro/Max/Team plan, or using API directly
**Solution:**
```
# Usage display requires:
# - Claude Pro, Max, or Team subscription
# - NOT available for API-only users

# Verify your plan:
# Check claude.ai account settings

# If on correct plan but still not showing:
# Restart Claude Code session
exit
claude
```
**Known limitation:** API users cannot see usage limits - this is expected behavior
**Prevention:** Subscribe to Pro/Max/Team for usage visibility

---

### Runtime Issues

#### Problem: "HUD not appearing after setup"
**Symptoms:** No statusline visible, looks like normal Claude Code
**Cause:** Setup not completed, plugin not activated, or display disabled
**Solution:**
```bash
# Run setup again
/claude-hud:setup

# Check if display options enabled
/claude-hud:configure
# Select "Full" preset to enable everything

# Manually check config:
cat ~/.claude/plugins/claude-hud/config.json | jq '.display'
# All values should be true

# Restart session to apply
exit
claude
```
**Prevention:** Complete setup wizard fully, don't skip steps

---

#### Problem: "Activity lines not appearing"
**Symptoms:** Tools/agents section empty despite activity
**Cause:** Activity lines only show when relevant operations happening
**Solution:**
```
# Activity lines appear ONLY during:
# - Tool execution (Read, Edit, Bash, etc.)
# - Subagent runs
# - Active task processing

# If session is idle, no activity will show - this is expected

# To test, trigger an action:
"Read the file package.json"
# You should see: ✓ Read x1

# Activity disappears after operations complete
# This is normal behavior
```
**Note:** Empty activity section when idle is expected, not an error
**Prevention:** Understand that activity is transient, not persistent

---

#### Problem: "Git status not showing"
**Symptoms:** No branch name or dirty status in HUD
**Cause:** Not in a git repository, or gitStatus disabled
**Solution:**
```bash
# Check if in git repo
git status
# If "not a git repository", this is expected

# If in git repo but still not showing:
# Check config
cat ~/.claude/plugins/claude-hud/config.json | jq '.gitStatus'

# Enable git status
# Edit config or use:
/claude-hud:configure
# Enable git status options
```
**Prevention:** Initialize git repo before expecting git status display

---

#### Problem: "Token breakdown not appearing at high usage"
**Symptoms:** Context at 85%+ but no breakdown visible
**Cause:** Feature disabled in config, or threshold not reached
**Solution:**
```bash
# Token breakdown appears at 85%+ usage
# Check current percentage - if below 85%, breakdown won't show

# Verify showTokenBreakdown enabled
cat ~/.claude/plugins/claude-hud/config.json | jq '.display.showTokenBreakdown'

# Should return: true

# If false, enable it:
/claude-hud:configure
# Select options that include token breakdown
```
**Prevention:** Ensure showTokenBreakdown is true in config

---

#### Problem: "HUD updates lagging or jerky"
**Symptoms:** Display not smooth, updates feel delayed
**Cause:** ~300ms polling interval is inherent design
**Solution:**
```
# The 300ms polling delay is expected behavior
# It's a tradeoff between:
# - Lower: More CPU usage, more responsive
# - Higher: Less CPU, but delayed updates

# Current design uses 300ms as balance

# If updates feel too slow:
# This is working as designed, not an error

# If updates are MUCH slower than 300ms:
# Check system CPU usage
# Close other heavy applications
# Restart Claude Code session
```
**Known limitation:** 300ms polling delay is by design
**Prevention:** Accept the polling interval or consider contributing a patch

---

### Platform-Specific Issues

#### Problem: "HUD works in iTerm2 but not Terminal.app"
**Symptoms:** Display issues in Apple's default Terminal
**Cause:** Terminal.app has limited ANSI/unicode support
**Solution:**
```bash
# Recommended: Switch to iTerm2 or Warp
# https://iterm2.com/
# https://www.warp.dev/

# If must use Terminal.app:
# Preferences > Profiles > Advanced >
# Set "Declare terminal as: xterm-256color"
```
**Prevention:** Use modern terminal emulator (iTerm2, Warp, Alacritty)

---

#### Problem: "Display broken in VS Code terminal"
**Symptoms:** Characters garbled, layout wrong
**Cause:** VS Code terminal rendering differences
**Solution:**
```json
// In VS Code settings.json:
{
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.rendererType": "canvas"
}
```
**Prevention:** Use dedicated terminal outside IDE for best experience

---

### When NOT to Use Claude HUD

| Scenario | Problem | Use Instead |
|----------|---------|-------------|
| API-only usage | Usage limits won't show | Track via API dashboard |
| Minimal terminal setup | Plugin overhead | Basic Claude Code |
| Remote/SSH sessions | Rendering issues possible | Check context manually |
| Very slow machine | 300ms polling adds load | Monitor less frequently |
| Short quick tasks | Overhead not worth setup | Skip monitoring |
| Automated/headless runs | No visual output | Log-based monitoring |

### Known Limitations

1. **Usage display Pro/Max/Team only** - API users see nothing
2. **Git status requires being in repo** - No display outside repos
3. **Activity lines transient** - Disappear after operations complete
4. **~300ms polling delay** - Not instantaneous
5. **Config errors silent** - Bad JSON reverts to defaults without warning
6. **Terminal must support ANSI** - Basic terminals may have issues
7. **Token breakdown at 85%+ only** - Not visible at lower usage levels

### Emergency Recovery

#### HUD completely broken
```bash
# Remove and reinstall
rm -rf ~/.claude/plugins/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

#### Config corrupted beyond repair
```bash
# Delete config to reset to defaults
rm ~/.claude/plugins/claude-hud/config.json
/claude-hud:configure
# Select "Full" preset
```

#### Plugin causing Claude Code to crash
```bash
# Remove plugin temporarily
mv ~/.claude/plugins/claude-hud ~/.claude/plugins/claude-hud.bak

# Start Claude Code without HUD
claude

# If stable, reinstall fresh
rm -rf ~/.claude/plugins/claude-hud.bak
/plugin install claude-hud
```

#### Need to see context without HUD
```bash
# Manual context check (if HUD broken)
# Check session duration - longer = higher usage
# Watch for degradation signs:
# - Repetition
# - Forgetting recent work
# - Ignoring instructions
```

---

## Tags
`#tooling` `#plugin` `#hud` `#context-management` `#visibility` `#debugging` `#quick-win` `#statusline`
