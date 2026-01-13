# Pattern Combination Matrix

A comprehensive guide to combining Claude Code power-user patterns for maximum effectiveness.

---

## Legend

- **Documented** = Community-validated, documented examples exist
- **Synergistic** = Works well, complementary strengths
- **Possible** = Can work together with careful setup
- **Anti-pattern** = Conflicting approaches, don't combine
- **Unexplored** = No known examples, untested

---

## Core Pattern Combinations

### Quick Reference Matrix

|                     | Ralph Loop | CC Mirror | Gas Town | Hooks | Subagents | Git Worktrees | Claude-Mem |
|---------------------|:----------:|:---------:|:--------:|:-----:|:---------:|:-------------:|:----------:|
| **Ralph Loop**      | -          | Possible  | Possible | Documented | Documented | Synergistic | Synergistic |
| **CC Mirror**       | Possible   | -         | Anti-pattern | Synergistic | Documented | Synergistic | Unexplored |
| **Gas Town**        | Possible   | Anti-pattern | -     | Synergistic | Documented | Possible | Unexplored |
| **Hooks**           | Documented | Synergistic | Synergistic | - | Synergistic | Documented | Documented |
| **Subagents**       | Documented | Documented | Documented | Synergistic | - | Synergistic | Unexplored |
| **Git Worktrees**   | Synergistic | Synergistic | Possible | Documented | Synergistic | - | Possible |
| **Claude-Mem**      | Synergistic | Unexplored | Unexplored | Documented | Unexplored | Possible | - |

---

## Detailed Combination Analysis

### Ralph Loop + Hooks (Documented)

**Rating:** Synergistic
**Evidence:** Official Anthropic Ralph Wiggum plugin uses hooks for loop persistence

**How It Works:**
- PreToolUse hooks for notifications (e.g., Poke push notifications)
- Stop hooks for graceful loop termination
- PostToolUse hooks for progress logging

**Benefits:**
- Mobile notifications during AFK runs
- Clean shutdown when human intervention needed
- Automatic progress tracking

**Example:**
```bash
# Hook triggers push notification when Claude needs input
/ralph-loop "Build auth system" --completion-promise "COMPLETE" --max-iterations 25
# Stop hook fires on SIGTERM, saves state to progress.txt
```

---

### Ralph Loop + Subagents (Documented)

**Rating:** Documented
**Evidence:** Matt Pocock's HOTL Ralph pattern, Ryan Carson's production use

**How It Works:**
- Each Ralph iteration can spawn subagents for specific tasks
- Subagents complete, return results, die
- Main loop continues with fresh context

**Benefits:**
- Parallel exploration within sequential loop
- Specialized subagents for specific file types
- Context isolation prevents bloat

**Example:**
```json
{
  "userStory": "Add authentication",
  "subtasks": [
    {"spawn": "security-auditor", "task": "Review JWT implementation"},
    {"spawn": "test-writer", "task": "Generate auth tests"}
  ]
}
```

---

### Ralph Loop + Git Worktrees (Synergistic)

**Rating:** Synergistic
**Evidence:** @0xSero mentioned adding worktrees for parallelization

**How It Works:**
- Multiple Ralph loops run in parallel worktrees
- Each worktree owns a feature branch
- Human merges completed features

**Benefits:**
- Parallel overnight feature development
- No branch conflicts during execution
- Clean merge history

**Implementation:**
```bash
# Spawn parallel Ralph loops in worktrees
for feature in auth payments notifications; do
  git worktree add ../wt-$feature $feature-branch
  (cd ../wt-$feature && ./ralph.sh 20) &
done
wait
```

---

### Ralph Loop + Claude-Mem (Synergistic)

**Rating:** Synergistic
**Evidence:** Logical fit, both solve context persistence differently

**How It Works:**
- Ralph uses file-based state (progress.txt, prd.json)
- Claude-Mem provides semantic project memory
- Combined: Rich context + iteration isolation

**Benefits:**
- New iterations understand project history
- Previous decisions preserved semantically
- Avoids re-explaining codebase

**Caution:**
- May have some redundancy in state tracking
- Claude-Mem's auto-injection could conflict with Ralph's lean prompts

---

### CC Mirror + Hooks (Synergistic)

**Rating:** Synergistic
**Evidence:** CC Mirror uses hooks for auto-compact notifications

**How It Works:**
- CC Mirror orchestrates multi-agent task graphs
- Hooks provide observability and alerts
- PostToolUse hooks track agent activity

**Benefits:**
- Real-time visibility into parallel agents
- Automatic notifications on task completion
- Context auto-compact integration

**Example:**
```javascript
// PostToolUse hook in CC Mirror workflow
hooks.onPostToolUse((tool, result) => {
  if (tool === 'TaskUpdate' && result.status === 'completed') {
    notifyHuman('Agent completed: ' + result.taskId);
  }
});
```

---

### CC Mirror + Subagents (Documented)

**Rating:** Documented
**Evidence:** Core CC Mirror architecture, official demo

**How It Works:**
- Orchestrator uses Task tool to spawn workers
- Workers are specialized subagents (Haiku, Sonnet, Opus)
- Task dependencies managed via addBlocks/addBlockedBy

**Tool Ownership:**
- Orchestrator: Task tools, AskUserQuestion, limited Read
- Workers: Read, Write, Edit, Bash, Glob, Grep

**Benefits:**
- Clear separation of concerns
- Model-appropriate task assignment
- Dependency tracking built-in

---

### CC Mirror + Git Worktrees (Synergistic)

**Rating:** Synergistic
**Evidence:** Natural extension of branch-based parallel work

**How It Works:**
- Each CC Mirror worker operates in its own worktree
- Orchestrator assigns worktree paths to tasks
- Workers can't interfere with each other's files

**Benefits:**
- True filesystem isolation
- Parallel agents on same codebase
- Clean merge strategy

**Implementation:**
```javascript
Task({
  subagent_type: "coder",
  prompt: "Implement auth in " + WORKTREE_PATH,
  worktree: "../worktrees/feature-auth"
});
```

---

### CC Mirror + Gas Town (Anti-pattern)

**Rating:** Anti-pattern
**Evidence:** Competing orchestration paradigms

**Why It Conflicts:**
- Both try to be the "conductor"
- Different task graph models (CC Mirror: Linear-style, Gas Town: inbox-based)
- Different agent lifecycle management
- Overlapping role definitions (Deacon vs CC Mirror orchestrator)

**Instead:**
- Choose one orchestration system
- Use CC Mirror for 80% of cases (simpler)
- Use Gas Town only at Stage 7+ (10+ agents)

---

### Gas Town + Hooks (Synergistic)

**Rating:** Synergistic
**Evidence:** Gas Town architecture includes Deacon (monitoring role)

**How It Works:**
- Hooks provide low-level event capture
- Gas Town roles (Deacon, Dogs, Witness) consume hook data
- Quality gates trigger via PostToolUse hooks

**Benefits:**
- Observable agent village
- Automatic quality enforcement
- Human inbox notifications

---

### Gas Town + Subagents (Documented)

**Rating:** Documented
**Evidence:** Core Gas Town concept (Polecats, Crew)

**How It Works:**
- Mayor coordinates town-level activities
- Polecats are named persistent workers (subagents)
- Crew are ephemeral workers (short-lived subagents)
- Refinery decomposes tasks for distribution

**Terminology Mapping:**
- Polecat = Long-running specialized subagent
- Crew = Ephemeral task subagent
- Witness = Per-rig observer subagent

---

### Git Worktrees + Hooks (Documented)

**Rating:** Documented
**Evidence:** Nader Dabit's mobile workflow uses both

**How It Works:**
- Worktrees provide branch isolation
- PreToolUse hooks send push notifications
- Stop hooks checkpoint worktree state

**Benefits:**
- Parallel development from phone
- Notifications when human input needed
- Clean state preservation

**Example:**
```bash
# Each worktree has hooks configured
cd ~/worktrees/feature-auth
# PreToolUse hook → Poke notification
# Human responds via phone SSH
```

---

### Subagents + Git Worktrees (Synergistic)

**Rating:** Synergistic
**Evidence:** AI-Maestro pattern with Docker containers (similar isolation)

**How It Works:**
- Each subagent operates in assigned worktree
- No file conflicts between agents
- Parent orchestrator manages merges

**Benefits:**
- True parallel development
- Atomic feature branches
- Conflict-free execution

**Implementation:**
```bash
spawn_agent() {
  local worktree="./worktrees/agent-$1"
  git worktree add $worktree feature-$1
  claude --worktree $worktree "$2"
}
```

---

### Hooks + Claude-Mem (Documented)

**Rating:** Documented
**Evidence:** Claude-Mem uses lifecycle hooks for capture

**How It Works:**
- Claude-Mem installs hooks for: SessionStart, PostToolUse, prompts
- Hooks capture events to SQLite
- Semantic compression runs asynchronously

**This is the foundation:** Claude-Mem is built on hooks

---

### Claude-Mem + Git Worktrees (Possible)

**Rating:** Possible
**Evidence:** No known examples, but logically compatible

**How It Would Work:**
- Shared Claude-Mem database across worktrees
- Each worktree agent queries same memory
- Project context available everywhere

**Considerations:**
- Memory may need worktree-aware filtering
- Some memories may not apply cross-branch
- Database concurrency needs testing

---

## Combination ROI Matrix

| Combination | Setup Effort | Ongoing Effort | Payoff | ROI | Notes |
|-------------|:------------:|:--------------:|:------:|:---:|-------|
| Ralph + Hooks | Low | None | High | 5/5 | Push notifications during AFK runs |
| Hooks + Subagents | Low | Low | High | 5/5 | Observable multi-agent workflows |
| Subagents + Worktrees | Medium | Low | High | 4/5 | True parallel feature development |
| Ralph + Worktrees | Medium | Low | High | 4/5 | Parallel overnight loops |
| CC Mirror + Hooks | Low | None | High | 4/5 | Built-in observability |
| CC Mirror + Subagents | None | Low | High | 5/5 | Already integrated |
| Ralph + Claude-Mem | Medium | None | Medium | 3/5 | Redundant state tracking possible |
| CC Mirror + Worktrees | Medium | Medium | High | 3/5 | Requires custom integration |
| Gas Town + Hooks | Medium | Low | High | 3/5 | Complex but powerful |
| Gas Town + Subagents | High | Medium | Very High | 3/5 | Full agent factory (Stage 7+) |
| Claude-Mem + Worktrees | Medium | Medium | Medium | 2/5 | Needs testing for concurrency |

---

## Recommended First Combinations

### For Beginners (Stage 1-3)

1. **Hooks + HUD Plugin**
   - Install claude-hud for visibility
   - Add PreToolUse hook for notifications
   - Zero code required
   ```bash
   /plugin install claude-hud
   ```

2. **Subagents Only**
   - Use Task tool for parallel work
   - Let Claude manage spawning
   - Simplest multi-agent entry point

### For Intermediate Users (Stage 4-5)

1. **Ralph + Hooks**
   - Run overnight feature loops
   - Get notified when done
   - File-based state management
   - *Setup time: 30 minutes*

2. **Subagents + Worktrees**
   - Parallel feature development
   - No merge conflicts during work
   - Human reviews and merges
   - *Setup time: 1 hour*

3. **CC Mirror + Hooks**
   - Native orchestration unlocked
   - Observable agent activity
   - Covers 80% of multi-agent needs
   - *Setup time: 15 minutes*

### For Advanced Users (Stage 6-7)

1. **Ralph + Worktrees + Hooks**
   - Multiple parallel Ralph loops
   - Push notifications per loop
   - Ship multiple features overnight
   - *Setup time: 2 hours*

2. **CC Mirror + Subagents + Worktrees**
   - Full orchestration with isolation
   - Model-appropriate task routing
   - Production-grade parallel work
   - *Setup time: 2-3 hours*

3. **Claude-Mem + Any Pattern**
   - Persistent project memory
   - Reduces context re-explanation
   - Worth adding to any workflow
   - *Setup time: 30 minutes*

---

## Advanced Combinations

### The Full Stack (Stage 7+)

**Pattern:** Ralph + CC Mirror (alternating) + Worktrees + Hooks + Claude-Mem

**How It Works:**
1. Claude-Mem provides project memory
2. CC Mirror orchestrates daytime interactive work
3. Ralph loops run overnight on separate worktrees
4. Hooks notify human of completion/blocks
5. Human reviews and merges in morning

**Cost:** High setup, high payoff
**Best for:** Solo devs or small teams shipping fast

---

### The Gas Town Stack (Stage 8)

**Pattern:** Gas Town + Full Agent Hierarchy

**Prerequisites:**
- 10+ agent experience
- Comfortable with chaos
- Significant budget ($50-200/day)
- Tmux as primary UI

**Architecture:**
```
HQ (town-level management)
├── Mayor (coordination)
├── Deacon (monitoring via hooks)
├── Dogs (quality gates)
├── Refinery (task decomposition)
├── Rigs (project repos with Witnesses)
│   ├── Polecats (persistent workers)
│   └── Crew (ephemeral workers)
└── Overseer (YOU with inbox)
```

**Warning from Steve Yegge:**
> "If you have any doubt whatsoever, then you can't use it"

---

## Anti-Patterns to Avoid

### 1. CC Mirror + Gas Town
**Why:** Competing orchestrators fight for control

### 2. Multiple Orchestrators
**Why:** Conflicting task graphs, agent confusion

### 3. Ralph + CC Mirror (Simultaneous)
**Why:** Both try to manage iteration state

### 4. Deep Subagent Nesting (>3 levels)
**Why:** Context loss, coordination overhead, cost explosion

### 5. Claude-Mem + Very Short Sessions
**Why:** Overhead exceeds benefit for quick tasks

### 6. Worktrees Without Merge Strategy
**Why:** Features diverge, merge becomes nightmare

---

## Decision Flowchart

```
What's your use case?
│
├── Single overnight feature
│   └── Ralph + Hooks
│
├── Multiple parallel features
│   └── Ralph + Worktrees + Hooks
│
├── Interactive multi-agent work
│   └── CC Mirror + Subagents
│
├── Complex project with memory
│   └── Claude-Mem + (Ralph or CC Mirror)
│
├── Mobile-first development
│   └── Worktrees + Hooks (Poke) + Cloud VM
│
├── 10+ agents, factory-scale
│   └── Gas Town (if Stage 7+)
│
└── Just starting out?
    └── Subagents only → add Hooks → add HUD
```

---

## Quick Start Commands

```bash
# Basic observability
/plugin install claude-hud

# Memory persistence
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# CC Mirror orchestration
npx cc-mirror quick --provider mirror --name mclaude

# Ralph loop
./ralph.sh 25

# Git worktree for parallel agent
git worktree add ../worktrees/feature-x feature-x-branch

# tmux agent manager (for multiple instances)
cargo install rpai && rpai
```

---

## Tags

`#combinations` `#patterns` `#ralph` `#cc-mirror` `#gas-town` `#hooks` `#subagents` `#git-worktrees` `#claude-mem` `#orchestration` `#multi-agent` `#decision-guide` `#roi-matrix`
