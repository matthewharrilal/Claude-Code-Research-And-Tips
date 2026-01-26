---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-operations Section 1 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Observability & Monitoring Patterns

**Status:** Comparative Analysis
**Synthesized:** 2026-01-09
**Sources:** Claude HUD, rpai, Ralph patterns, CC Mirror, Gas Town, and community monitoring practices

> **You Are Here:** This document covers tools and techniques for monitoring Claude Code agent sessions, including Claude HUD, rpai, and custom monitoring scripts. Use this when you need visibility into what your agents are doing, especially during long-running or overnight autonomous workflows.

---

## Why Observability Matters

Agent systems are opaque by default. Unlike traditional software where you can set breakpoints and step through code, AI agents operate as black boxes that consume tokens, make decisions, and produce outputs with minimal visibility into their internal reasoning.

### The Four Pillars of Agent Observability

| Pillar | Purpose | Without It |
|--------|---------|------------|
| **Failure Detection** | Catch issues before they compound | Broken code accumulates silently |
| **Behavior Understanding** | Know what the agent is actually doing | "Staring into the void" - @is_lu_is |
| **Performance Optimization** | Identify bottlenecks and waste | Runaway token consumption |
| **Debugging Capability** | Trace issues to root cause | Hours lost to mysterious failures |

### The Hidden Control Plane Problem

> "Makes the hidden control plane of Claude Code visible, which is critical for debugging long-horizon tasks."
> -- @gurtej__gill_

When running agents for hours or overnight:
- Context silently exhausts
- Quality degrades without warning
- Tasks fail in ways that aren't immediately obvious
- Learning compounds invisibly (good or bad)

---

## Observability Tools

### Claude HUD - Native Session Visibility

**Source:** @jarrodwatts | github.com/jarrodwatts/claude-hud

The most direct solution for Claude Code visibility. A plugin that renders real-time session data in your terminal statusline.

#### Installation
```bash
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup
```

#### What It Shows

| Category | Metrics |
|----------|---------|
| **Session Metadata** | Model (e.g., Opus 4.5), plan tier, project path, git branch |
| **Context Usage** | Percentage bar with color coding (green/yellow/red) |
| **Tool Activity** | Spinners for running tools, checkmarks for completed |
| **Agent Status** | Subagent names, descriptions, elapsed time |
| **Todo Progress** | Current task status, completion counter |
| **Configuration** | Count of CLAUDE.md files, rules, MCPs, hooks |

#### Sample Output
```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ WebFetch x1 | ✓ Skill x1 | ✓ Edit x1
```

#### Color-Coded Context Bar
| Color | Context Level | Action |
|-------|--------------|--------|
| Green | 0-50% | Full capability, continue working |
| Yellow | 50-70% | Monitor closely, consider compacting soon |
| Red | 70-85% | Compact now or wrap up current task |
| (Flashing) | 85%+ | Token breakdown appears, quality degrading |

#### Configuration
```json
// ~/.claude/plugins/claude-hud/config.json
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

**Presets:**
- `Full` - All displays enabled
- `Essential` - Core info only
- `Minimal` - Bare minimum

---

### rpai - tmux Multi-Agent Manager

**Source:** @radoslav11 | `cargo install rpai`

When running multiple agents in parallel, rpai provides a unified TUI for monitoring and navigation.

#### Installation
```bash
cargo install rpai
# Run in any tmux session with agents
rpai
```

#### What It Does
1. **Scans** tmux panes for running AI agents (Claude, Cursor, Codex, Opencode)
2. **Displays** TUI with agent list, status, output previews
3. **Jump** to any agent with selection (mouse supported)
4. **Monitor** all agents from one view

#### Demo Interface
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

#### Use Case
> "Parallel agents feel like herding caffeinated cats."
> -- @FutbolmeAI

rpai turns chaos into a control center.

---

### tmux/Terminal Monitoring

For manual multi-pane setups without rpai.

#### Recommended tmux Layout
```
┌────────────────────────────────────────────┐
│              Agent Output (main)            │
│                                             │
│  claude "Implement feature X..."            │
│                                             │
├─────────────────────┬──────────────────────┤
│    Test Watcher     │    Context HUD       │
│                     │                       │
│  npm test --watch   │  [HUD output here]   │
├─────────────────────┴──────────────────────┤
│              Git Log / Status               │
│  watch -n5 'git log --oneline -5'          │
└────────────────────────────────────────────┘
```

#### Layout Commands
```bash
# Create the layout
tmux split-window -v -p 30
tmux split-window -h
tmux select-pane -t 0

# Or use a tmuxinator config
# ~/.tmuxinator/agent-dev.yml
name: agent-dev
windows:
  - main:
      layout: main-vertical
      panes:
        - claude
        - npm test --watch
        - watch -n2 'cat scripts/ralph/progress.txt | tail -20'
```

---

### Git-Based Monitoring

Git history provides the most durable form of agent observability. Changes persist across sessions and agent resets.

#### Key Queries
```bash
# Commit frequency (agent velocity)
git log --oneline --since="1 hour ago" | wc -l

# Branch state
git branch -v

# Recent activity
git log --oneline -10

# What changed in last iteration
git diff HEAD~1

# PR status (if using gh)
gh pr status

# Uncommitted changes
git status --short
```

#### Automated Git Monitoring Script
```bash
#!/bin/bash
# monitor-git.sh - Run in a tmux pane
while true; do
  clear
  echo "=== Git Monitor ==="
  echo ""
  echo "Recent commits:"
  git log --oneline -5
  echo ""
  echo "Status:"
  git status --short
  echo ""
  echo "Last commit: $(git log -1 --format='%ar')"
  sleep 10
done
```

---

### Checkpoint: Observability Tools
**You should now understand:**
- [ ] How to install and configure Claude HUD for context monitoring
- [ ] How to use rpai for multi-agent tmux management
- [ ] How to set up tmux layouts for agent monitoring
- [ ] How to use git-based monitoring for durable tracking

**If unclear:** Re-read the tool installation sections, or try installing Claude HUD first (easiest starting point).

---

## Metrics to Track

### Health Metrics

| Metric | Source | Warning Threshold | Critical Threshold |
|--------|--------|-------------------|-------------------|
| **Context Usage %** | Claude HUD | > 60% | > 85% |
| **Iteration Count** | Ralph loop output | Approaching max | At max |
| **Time Per Task** | Progress log timestamps | > 10 min | > 30 min |
| **Failure Rate** | Test output, git logs | > 1 consecutive | > 3 consecutive |
| **Token Consumption** | Claude HUD, API logs | > 50% of budget | > 80% of budget |

### Progress Metrics

| Metric | Source | How to Track |
|--------|--------|--------------|
| **Tasks Completed** | prd.json `passes: true` count | `jq '.userStories | map(select(.passes)) | length'` |
| **Stories Remaining** | prd.json `passes: false` count | `jq '.userStories | map(select(.passes == false)) | length'` |
| **Velocity Trend** | Git log timestamps | Commits per hour trending |
| **Blocker Rate** | Progress.txt entries | Blocked mentions per iteration |

#### PRD Status Check Command
```bash
# Quick status check
cat scripts/ralph/prd.json | jq '{
  total: (.userStories | length),
  complete: (.userStories | map(select(.passes)) | length),
  remaining: (.userStories | map(select(.passes == false)) | length)
}'
```

### Quality Metrics

| Metric | Source | How to Check |
|--------|--------|--------------|
| **Test Pass Rate** | Test runner output | `npm test 2>&1 | grep -E "(passed|failed)"` |
| **Type Check Status** | TypeScript compiler | `npm run typecheck && echo "PASS" || echo "FAIL"` |
| **Lint Violations** | ESLint output | `npm run lint 2>&1 | tail -5` |
| **Build Status** | Build output | `npm run build && echo "PASS"` |

---

## Monitoring Patterns

### Dashboard Setup

#### Minimal Setup (Single Monitor)
```
┌────────────────────────────────┐
│        Agent + HUD             │
│  [Opus 4.5] ████░░ 45%         │
│                                 │
│  claude "..."                   │
└────────────────────────────────┘
```

#### Standard Setup (Development)
```
┌─────────────────────────────────────────────┐
│              Agent Output (main)             │
│  [Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m │
│  ✓ Read x2 | ✓ Edit x1                       │
├──────────────────────┬──────────────────────┤
│    Test Watcher      │    Progress Log      │
│  ✓ 42 tests pass     │  [Iteration 5]       │
│  ⏱ watching...       │  US-003 complete     │
└──────────────────────┴──────────────────────┘
```

#### Production Setup (Multi-Agent)
```
┌──────────────────┬──────────────────┬──────────────────┐
│   Agent 1        │   Agent 2        │   Agent 3        │
│   (Frontend)     │   (Backend)      │   (Docs)         │
│   ████░░ 45%     │   ██████░░ 60%   │   ██░░░░ 20%     │
├──────────────────┴──────────────────┴──────────────────┤
│                    rpai TUI                             │
│   [1] claude-frontend  ██████ running                  │
│   [2] claude-backend   ██████ running                  │
│   [3] claude-docs      ██████ idle                     │
├─────────────────────────────────────────────────────────┤
│   Git Status: 3 branches active | 12 commits today     │
└─────────────────────────────────────────────────────────┘
```

---

### Alert Triggers

#### Context Alerts
| Condition | Action | Automation |
|-----------|--------|------------|
| Context > 60% | Monitor closely | Log warning |
| Context > 80% | Compact or prepare for fresh session | Alert user |
| Context > 90% | Quality compromised | Force compact or reset |

#### Failure Alerts
| Condition | Action | Automation |
|-----------|--------|------------|
| 1 test failure | Continue, note in progress.txt | Log |
| 3 consecutive failures | Stop and diagnose | Alert + pause |
| Build failure | Block commit | Prevent git commit |
| Type check failure | Block commit | Prevent git commit |

#### Progress Alerts
| Condition | Action | Automation |
|-----------|--------|------------|
| No commit > 10 min | Check if stuck | Warn |
| No progress > 20 min | Likely blocked | Alert |
| Approaching max iterations | Prepare for manual review | Alert |
| Budget > 80% consumed | Consider stopping | Alert |

#### Alert Script Example
```bash
#!/bin/bash
# alert-monitor.sh

LAST_COMMIT_TIME=$(git log -1 --format='%ct')
CURRENT_TIME=$(date +%s)
MINUTES_SINCE=$((($CURRENT_TIME - $LAST_COMMIT_TIME) / 60))

if [ $MINUTES_SINCE -gt 20 ]; then
  osascript -e 'display notification "No commits in 20+ minutes" with title "Agent Alert"'
fi
```

---

### Log Analysis

#### progress.txt Trend Analysis
```bash
# Count iterations
grep -c "## Iteration" scripts/ralph/progress.txt

# Find patterns in learnings
grep -i "learned\|pattern\|gotcha" scripts/ralph/progress.txt

# Find blockers
grep -i "blocker\|blocked\|issue\|error" scripts/ralph/progress.txt

# Time between iterations (if timestamps present)
grep "## Iteration" scripts/ralph/progress.txt | head -5
```

#### Error Pattern Detection
```bash
# Common error signatures
grep -E "(Error|Exception|Failed|Cannot|Unable)" agent-output.log

# Test failure patterns
grep -E "(FAIL|✗|failed)" test-output.log

# TypeScript errors
grep -E "TS[0-9]+" typecheck-output.log
```

#### Learning Accumulation
```bash
# Track learning growth over time
wc -l scripts/ralph/progress.txt

# Extract unique patterns discovered
grep "Pattern:" scripts/ralph/progress.txt | sort -u

# Count "gotchas" discovered
grep -ci "gotcha\|caveat\|note:" scripts/ralph/progress.txt
```

---

## Debugging Agent Issues

### Common Failures

#### 1. Context Exhaustion

**Symptoms:**
- Claude HUD shows 85%+ usage
- Responses become truncated
- Instructions ignored
- Hallucinated file references
- Repetitive statements

**Diagnosis:**
```bash
# Check Claude HUD
# Look for red/flashing context bar

# Or if not using HUD, look for quality signals:
# - Responses getting shorter
# - Missing expected behavior
# - Contradictory statements
```

**Resolution:**
```bash
# Option 1: Compact
/compact

# Option 2: Fresh session
/reset
# Or simply start new Claude instance

# Option 3: In Ralph loop - let iteration end naturally
# Fresh context on next iteration
```

---

#### 2. Quality Gate Loops

**Symptoms:**
- Same test failing repeatedly
- Identical changes being attempted
- No progress in iterations
- Progress.txt shows repeated attempts at same task

**Diagnosis:**
```bash
# Check recent commits
git log --oneline -5

# Look for duplicate changes
git diff HEAD~3..HEAD

# Check progress.txt for repetition
tail -50 scripts/ralph/progress.txt
```

**Resolution:**
1. Stop the loop (`Ctrl+C`)
2. Analyze the failing test
3. Either:
   - Fix the issue manually
   - Provide more guidance in CLAUDE.md
   - Split the task into smaller pieces
   - Mark the task as blocked with notes

---

#### 3. Worker Recursion (Multi-Agent)

**Symptoms:**
- Workers spawning workers spawning workers
- Token costs exploding
- No actual progress
- Many subagent entries in HUD

**Diagnosis:**
```bash
# Count running subagents (if using rpai)
rpai  # Check agent count

# Check for deep nesting in output
grep -c "subagent\|Task\|delegation" agent-output.log
```

**Resolution:**
```markdown
# Add to CLAUDE.md or worker preamble:
RULES:
- Do NOT spawn sub-agents
- Complete ONLY the task described
- If task seems too large, STOP and ask for clarification
```

---

#### 4. Coordination Deadlock (Multi-Agent)

**Symptoms:**
- Multiple agents waiting on each other
- No progress across any agent
- Handoff files not being consumed
- Git branches diverging without merges

**Diagnosis:**
```bash
# Check for stale handoffs
find . -name "handoff-*.json" -mmin +30

# Check branch status across worktrees
git worktree list
for wt in $(git worktree list --porcelain | grep worktree | cut -d' ' -f2); do
  echo "=== $wt ==="
  git -C "$wt" status --short
done
```

**Resolution:**
1. Identify the blocking dependency
2. Either:
   - Manually complete the blocking task
   - Re-assign the blocked task to a different agent
   - Remove the dependency by restructuring tasks

---

### Debug Process

#### Step 1: Check Context %
```bash
# If using Claude HUD - look at statusline
# Or check manually:
# - Are responses getting shorter?
# - Are instructions being ignored?
```

#### Step 2: Review progress.txt
```bash
cat scripts/ralph/progress.txt | tail -30

# Look for:
# - Recent iteration summaries
# - Reported blockers
# - Patterns/learnings that might be wrong
# - Repeated attempts at same task
```

#### Step 3: Examine Git Log
```bash
git log --oneline -10
git diff HEAD~3..HEAD --stat

# Look for:
# - Commit frequency (stopped = problem)
# - Commit messages (patterns in failures)
# - Files being repeatedly modified
```

#### Step 4: Inspect Task State
```bash
cat scripts/ralph/prd.json | jq '.userStories[] | select(.passes == false) | {id, title, priority}'

# Look for:
# - Which tasks are stuck
# - Priority order making sense
# - Acceptance criteria that might be impossible
```

---

## Production Monitoring

### Health Checks

#### Periodic Health Check Script
```bash
#!/bin/bash
# health-check.sh - Run every 5 minutes via cron

HEALTH_LOG="/tmp/agent-health.log"

echo "=== $(date) ===" >> $HEALTH_LOG

# Check if agent process is running
if pgrep -f "claude" > /dev/null; then
  echo "Agent: RUNNING" >> $HEALTH_LOG
else
  echo "Agent: STOPPED" >> $HEALTH_LOG
  # Alert
  curl -X POST "$SLACK_WEBHOOK" -d '{"text":"Agent process stopped"}'
fi

# Check recent commit activity
LAST_COMMIT=$(git log -1 --format='%ar')
echo "Last commit: $LAST_COMMIT" >> $HEALTH_LOG

# Check remaining tasks
REMAINING=$(cat scripts/ralph/prd.json | jq '.userStories | map(select(.passes == false)) | length')
echo "Remaining tasks: $REMAINING" >> $HEALTH_LOG
```

### Automated Alerts

#### Slack Webhook Alert
```bash
#!/bin/bash
# alert-slack.sh

send_alert() {
  local level=$1
  local message=$2

  curl -X POST "$SLACK_WEBHOOK" \
    -H 'Content-type: application/json' \
    -d "{
      \"text\": \"[$level] Agent Alert: $message\"
    }"
}

# Usage
send_alert "WARNING" "No commits in 20 minutes"
send_alert "CRITICAL" "3 consecutive test failures"
```

#### Desktop Notification (macOS)
```bash
alert_desktop() {
  osascript -e "display notification \"$1\" with title \"Agent Monitor\" sound name \"Ping\""
}

alert_desktop "Ralph iteration 10 complete - 5 tasks remaining"
```

### Cost Tracking

#### Token Usage Tracking
```bash
# From Claude HUD config, token breakdown appears at 85%+
# For API users, track via response:

# Track usage in each response
# response.usage.input_tokens
# response.usage.output_tokens

# Calculate cost per iteration
# Opus: $15/$75 per 1M tokens (input/output)
# Sonnet: $3/$15 per 1M tokens
# Haiku: $0.25/$1.25 per 1M tokens
```

#### Cost Alert Thresholds
| Threshold | Action |
|-----------|--------|
| 50% of daily budget | Log warning |
| 80% of daily budget | Alert user |
| 95% of daily budget | Consider pausing |

### Performance Dashboards

#### Simple CLI Dashboard
```bash
#!/bin/bash
# dashboard.sh

while true; do
  clear
  echo "╔══════════════════════════════════════════╗"
  echo "║         Agent Dashboard                   ║"
  echo "╠══════════════════════════════════════════╣"

  # Git stats
  COMMITS_TODAY=$(git log --since="midnight" --oneline | wc -l | tr -d ' ')
  LAST_COMMIT=$(git log -1 --format='%ar' 2>/dev/null || echo "none")
  echo "║ Commits today: $COMMITS_TODAY"
  echo "║ Last commit: $LAST_COMMIT"

  # Task stats
  if [ -f scripts/ralph/prd.json ]; then
    TOTAL=$(cat scripts/ralph/prd.json | jq '.userStories | length')
    DONE=$(cat scripts/ralph/prd.json | jq '.userStories | map(select(.passes)) | length')
    echo "║ Tasks: $DONE / $TOTAL complete"
  fi

  # Progress log tail
  if [ -f scripts/ralph/progress.txt ]; then
    echo "╠══════════════════════════════════════════╣"
    echo "║ Recent Progress:"
    tail -5 scripts/ralph/progress.txt | sed 's/^/║ /'
  fi

  echo "╚══════════════════════════════════════════╝"
  sleep 30
done
```

---

## Observability Anti-Patterns

### What NOT to Do

| Anti-Pattern | Problem | Better Approach |
|--------------|---------|-----------------|
| **No monitoring at all** | Silent failures, wasted tokens | At minimum use Claude HUD |
| **Polling too frequently** | Performance overhead | 10-30 second intervals sufficient |
| **Ignoring context warnings** | Quality degradation | Act on yellow, definitely on red |
| **Manual-only checking** | Miss overnight issues | Automated alerts for production |
| **Logging everything** | Log noise, storage bloat | Structured logs with levels |
| **No baseline metrics** | Can't detect anomalies | Establish normal ranges first |

---

## Tool Comparison Matrix

| Tool | Visibility Level | Setup Effort | Best For |
|------|-----------------|--------------|----------|
| **Claude HUD** | Session-level | Quick (5 min) | Single-agent development |
| **rpai** | Multi-agent | Quick (Rust install) | Parallel agents in tmux |
| **tmux layout** | Terminal-level | Medium | Custom monitoring needs |
| **Git monitoring** | Commit-level | Low | All workflows, durability |
| **Custom scripts** | Any level | High | Production, automation |
| **Progress.txt review** | Semantic | None | Understanding agent reasoning |

---

## Quick Reference: Monitoring Checklist

### Per-Session
- [ ] Claude HUD installed and visible
- [ ] Context usage below 70%
- [ ] Recent commits appearing
- [ ] Tests passing

### Per-Iteration (Ralph)
- [ ] Progress.txt updated
- [ ] Git commit made
- [ ] prd.json task marked complete
- [ ] No repeated failures

### Daily (Production)
- [ ] Review progress.txt for patterns
- [ ] Check token/cost usage
- [ ] Verify test pass rates
- [ ] Look for stuck tasks

### Weekly
- [ ] Analyze learning accumulation
- [ ] Review error patterns
- [ ] Optimize based on metrics
- [ ] Archive completed PRDs

---

## Mental Model

Think of agent observability like monitoring a distributed system:

- **Agents are nodes** - Each has health metrics, can fail independently
- **Context is memory** - Finite resource that degrades under pressure
- **Git is the event log** - Durable record of all meaningful actions
- **Progress.txt is the semantic trace** - Why decisions were made
- **Claude HUD is the metrics collector** - Real-time visibility
- **rpai is the orchestration dashboard** - Multi-node overview

Without observability, you're running a distributed system blind. With it, you can debug issues in minutes instead of hours, catch problems before they compound, and optimize your agent workflows based on real data.

---

## Resources

### Essential Tools
- github.com/jarrodwatts/claude-hud - Context monitoring
- cargo install rpai - tmux multi-agent TUI
- github.com/snarktank/ralph - Ralph loop implementation

### Community Patterns
- Gas Town Witness role - Per-rig observer pattern
- CC Mirror Task system - Built-in dependency tracking
- Deacon role - Gas Town monitoring/handshake agent

### Further Reading
- Context Management mastery guide (synthesis/mastery-context-management.md)
- Orchestration patterns taxonomy (synthesis/taxonomy-orchestration.md)
- Cost optimization research (extractions/cross-cutting/research-cost-optimization-expanded.md)

---

## Troubleshooting

> **Note:** See the "Debugging Agent Issues" section above for detailed troubleshooting of context exhaustion, quality gate loops, worker recursion, and coordination deadlock.

### Common Issue: Claude HUD Not Displaying
**Symptom:** Installed Claude HUD but statusline is empty or shows errors.
**Cause:** Plugin not properly activated, or terminal doesn't support required features.
**Fix:** Verify plugin installation and run setup command.

```bash
# Verify installation
/plugin list

# Re-run setup
/claude-hud:setup

# Check config file exists
cat ~/.claude/plugins/claude-hud/config.json
```

### Common Issue: rpai Not Detecting Agents
**Symptom:** rpai shows empty list even though agents are running in tmux.
**Cause:** Agents not running in tmux panes, or rpai not recognizing agent process names.
**Fix:** Ensure agents are in tmux (not separate terminal windows). Check that process names match expected patterns.

```bash
# Verify tmux session exists
tmux list-sessions

# Check for agent processes
pgrep -f "claude\|cursor\|codex"

# Run rpai with verbose output
rpai --debug
```

### Common Issue: Git Monitoring Shows No Activity
**Symptom:** monitoring script reports no commits, but agent appears to be working.
**Cause:** Agent not committing changes, or checking wrong branch/repo.
**Fix:** Verify agent is configured to commit. Check you're in the correct directory.

```bash
# Check current directory and branch
pwd
git branch

# Look for uncommitted changes
git status

# Check if agent is set to auto-commit
grep -i "commit" CLAUDE.md
```

### Common Issue: Alerts Not Sending
**Symptom:** Threshold exceeded but no Slack/desktop notification received.
**Cause:** Webhook URL incorrect, or notification script not running.
**Fix:** Test webhook manually. Verify monitoring script is running.

```bash
# Test Slack webhook
curl -X POST "$SLACK_WEBHOOK" -d '{"text":"Test alert"}'

# Test desktop notification (macOS)
osascript -e 'display notification "Test" with title "Agent Monitor"'

# Check if monitoring script is running
ps aux | grep "monitor\|alert"
```

### Common Issue: Dashboard Shows Stale Data
**Symptom:** Dashboard displays old metrics; doesn't update in real-time.
**Cause:** Refresh interval too long, or script stopped.
**Fix:** Reduce sleep interval. Check script is still running.

```bash
# Check if dashboard script is running
ps aux | grep dashboard

# Restart with shorter interval
./dashboard.sh  # Default is 30 seconds
```

---

## Tags

`#observability` `#monitoring` `#claude-hud` `#rpai` `#tmux` `#debugging` `#metrics` `#alerts` `#dashboards` `#production` `#health-checks` `#cost-tracking`
