# Pairwise Combination Analysis

> **You Are Here:** This document goes deep on two-pattern combinations, showing exactly what happens when you combine patterns in pairs. While combinations-matrix.md tells you WHAT works together, this document explains HOW and WHY those combinations unlock new capabilities. Use this when planning your first multi-pattern workflow.

---
## D-FINAL Integration
**Cross-references:** [D-FINAL-architecture.md Section 6 for combinations, D-FINAL-implementation.md Section 4 for tools]
**Journey link:** journey-architecture.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

**Generated:** 2026-01-09
**Purpose:** Identify synergies when combining Claude Code patterns in pairs

This document analyzes what happens when you combine two patterns together, revealing emergent capabilities that neither pattern provides alone.

---

## Table of Contents

1. [Loop + Tool Combinations](#loop--tool-combinations)
2. [Orchestration + Verification Combinations](#orchestration--verification-combinations)
3. [Memory + Learning Combinations](#memory--learning-combinations)
4. [Mobility + Notification Combinations](#mobility--notification-combinations)
5. [Isolation + Coordination Combinations](#isolation--coordination-combinations)
6. [Tooling + Workflow Combinations](#tooling--workflow-combinations)
7. [Philosophy + Implementation Combinations](#philosophy--implementation-combinations)
8. [Combination Matrix](#combination-matrix)

---

## Loop + Tool Combinations

### Ralph + Playwright (Browser Automation)

**Source:** @weswinder - "opus 4.5 with ralph wiggum and playwright is agi"

**What It Enables:**
- Visual verification in iterative loops
- UI changes confirmed via screenshot, not just tests
- Real-world feedback prevents "feature complete but broken" syndrome
- Each iteration can prove the UI actually works

**Implementation Notes:**
```bash
# In prd.json acceptance criteria
"acceptanceCriteria": [
  "Button renders correctly",
  "npm run typecheck passes",
  "Playwright screenshot shows button at expected position"
]
```

**Critical Optimization (@TendiesOfWisdom):**
> "Put costly tools like browser control in subagents to protect your main context window tokens"

**Architecture:**
```
Ralph Loop (Main Agent)
    │
    ├─ Pick story
    ├─ Implement
    ├─ Run typecheck/tests
    │
    └─ Spawn Playwright Subagent ─→ Take screenshot
                                    Return verification
    │
    └─ If verified: commit, mark passes: true
```

**ROI:** Very High - Catches visual regressions that unit tests miss

---

### Ralph + MCP Tools

**What It Enables:**
- Database operations verified per iteration
- API integrations tested automatically
- File operations across multiple systems
- Each story can verify end-to-end functionality

**Implementation Notes:**
```json
// prd.json with MCP verification
{
  "id": "US-003",
  "title": "Add user to database",
  "acceptanceCriteria": [
    "User created in PostgreSQL",
    "MCP verify: SELECT * FROM users WHERE email = 'test@test.com' returns 1 row",
    "npm run typecheck passes"
  ],
  "passes": false
}
```

**Architecture:**
```
Ralph Iteration
    │
    ├─ Implement database change
    ├─ Run migration
    │
    └─ MCP SQLite/Postgres ─→ Verify data state
    │
    └─ Tests pass → Commit
```

**ROI:** High - Database state validated automatically

---

### Ralph + Claude-Mem (Persistent Memory)

**What It Enables:**
- Semantic memory augments file-based memory
- Avoid repeating mistakes from previous sessions (not just iterations)
- Pattern recognition across projects, not just within
- "Did I solve this before?" becomes queryable

**Implementation Notes:**
```bash
# Before each Ralph iteration, inject relevant memories
claude "Load relevant context from memory for authentication patterns, then: $(cat prompt.md)"
```

**Architecture:**
```
Claude-Mem (Background Service)
    │
    ├─ Captures: All tool calls, decisions, patterns
    └─ Stores: SQLite + Chroma Vector DB
           │
           ▼
Ralph Loop (Iteration N)
    │
    ├─ Query: "Authentication patterns from last week"
    ├─ Inject: Relevant memories into context
    ├─ Execute: Current story with enriched context
    └─ Log: New learnings back to Claude-Mem
```

**Avoids Dead Ends:**
- Memory surfaces "Last time this approach failed because..."
- Reduces iteration count by learning from past sessions

**ROI:** High - Compounds learning across days/weeks, not just iterations

---

### Ralph + Claude HUD (Monitoring)

**What It Enables:**
- Real-time visibility into Ralph's progress
- Context usage tracking prevents overflow mid-story
- Subagent activity visible during verification
- Early warning when iteration is going wrong

**Implementation Notes:**
```bash
# Terminal 1: Run Ralph
./ralph.sh 25

# Terminal 2 (visible): HUD shows
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 5m
✓ Read x4 | ✓ Edit x2 | ⟳ Bash (npm test)
Todo: 3/7 complete
```

**Key Insight:**
If context hits 80%+ before story complete, the story is too big - split it.

**ROI:** Medium-High - Debugging and confidence in autonomous runs

---

## Orchestration + Verification Combinations

### CC Mirror + Hooks (Quality Gates)

**What It Enables:**
- PostToolUse hooks enforce formatting on all agent outputs
- PreToolUse hooks can block dangerous operations
- Multi-agent work stays consistent with auto-formatting
- Security gates apply to all agents uniformly

**Implementation Notes:**
```json
// ~/.claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [{ "type": "command", "command": "prettier --write $FILE" }]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{ "type": "command", "command": "~/.claude/hooks/security-gate.sh" }]
      }
    ]
  }
}
```

**Architecture:**
```
CC Mirror Orchestrator
    │
    ├─ Spawns Worker Agent 1 ─→ Edits file.ts
    │                              │
    │                              └─ PostToolUse Hook: prettier --write
    │
    ├─ Spawns Worker Agent 2 ─→ Edits file.py
    │                              │
    │                              └─ PostToolUse Hook: black --quiet
    │
    └─ All outputs consistently formatted
```

**ROI:** High - Quality enforcement without manual intervention

---

### Subagents + Git Worktrees

**What It Enables:**
- True isolation: Each agent works in separate worktree
- No file conflicts between parallel agents
- Git-based coordination (shared history, separate working copies)
- Merge at the end with human review

**Implementation Notes:**
```bash
# Spawn isolated agent in worktree
spawn_isolated_agent() {
  local task_id=$1
  local branch="agent-$task_id"

  git worktree add ../worktrees/$branch -b $branch
  (cd ../worktrees/$branch && claude "Implement feature X") &
}

# Merge results
merge_agent_work() {
  local branch=$1
  git merge ../worktrees/$branch
  git worktree remove ../worktrees/$branch
}
```

**Architecture:**
```
Main Repo (.git/)
    │
    ├─ Worktree A (/auth-agent/)
    │   └─ Agent 1: Implements auth
    │
    ├─ Worktree B (/payment-agent/)
    │   └─ Agent 2: Implements payments
    │
    └─ Worktree C (/ui-agent/)
        └─ Agent 3: Implements UI

All share git history, no conflicts during work.
Human merges at end.
```

**ROI:** Very High - Enables true parallel development without pain

---

### CC Mirror + Task Decomposition

**What It Enables:**
- Automatic dependency tracking (blocked_by relationships)
- Agents self-organize around available tasks
- Visual tracking of multi-agent progress
- Recovery when agents fail (task reverts to pending)

**Implementation Notes:**
```
TaskCreate: "Implement auth routes"
  blocked_by: ["Design API architecture"]

TaskCreate: "Write auth tests"
  blocked_by: ["Implement auth routes"]
```

**Demo Output:**
```
Tasks:
☑ #1 Design API architecture
☐ #2 Create project structure
☐ #3 Implement data models
🟠 #4 Implement REST API endpoints (blocked by #3)
🟠 #5 Write integration tests (blocked by #4)
```

**ROI:** High - Natural workflow without manual orchestration

---

### Gas Town + Beads (Data Plane)

**What It Enables:**
- Git-backed data storage for all agents
- Universal context management across many agents
- Agents can query shared knowledge base
- No external database needed - everything in git

**Implementation Notes:**
```bash
# Gas Town uses Beads for storage
gt init  # Creates ~/.gt with Beads integration
gt rig add /path/to/project

# Agents access shared context via Beads
# All state persisted in git
```

**Architecture:**
```
Gas Town (Orchestrator)
    │
    ├─ Mayor (coordination)
    ├─ Deacon (monitoring)
    ├─ Refinery (task decomposition)
    │
    └─ All backed by Beads ─→ Git-based data plane
                               ~225K lines of Go
                               Universal context
```

**ROI:** Very High for Scale - When you have 10+ agents

---

## Memory + Learning Combinations

### progress.txt + AGENTS.md

**What It Enables:**
- Short-term memory (progress.txt) informs current session
- Long-term memory (AGENTS.md) compounds across all sessions
- Patterns discovered in iteration 3 help iteration 13
- Human-readable documentation as side effect

**Implementation Notes:**
```markdown
# progress.txt (ephemeral, session-scoped)
## Codebase Patterns
- Migrations: Use IF NOT EXISTS
- React: useRef<Timeout | null>(null)

## 2026-01-09 - US-003
- Implemented auth middleware
- Learned: Always check token expiry

---

# AGENTS.md (permanent, in repo)
## Authentication Module
When modifying auth:
- Tokens expire after 24h
- Refresh tokens in separate table
- Always hash with bcrypt, never SHA
```

**Compounding Effect:**
```
Iteration 1: Learns migration pattern
  → Appends to progress.txt

Iteration 5: Reads pattern, avoids mistake
  → Updates AGENTS.md with key insight

Future Session: Agent reads AGENTS.md
  → Applies learning immediately
```

**ROI:** Very High - Knowledge compounds exponentially

---

### Git History + Claude-Mem

**What It Enables:**
- Structured memory (git) + semantic memory (Claude-Mem)
- "Why did we change this file?" becomes queryable
- Commit messages + vector search = rich context
- Debug by asking "What happened to auth last week?"

**Implementation Notes:**
```bash
# Git provides structured history
git log --oneline --since="1 week ago" -- src/auth/

# Claude-Mem provides semantic recall
claude "Search memory for: authentication changes reasoning"
```

**Architecture:**
```
Git History
    │
    ├─ Commit: "feat: add JWT refresh"
    ├─ Commit: "fix: token expiry bug"
    └─ Structured, exact, searchable
           │
           ▼
Claude-Mem Vector DB
    │
    ├─ Observation: "Refresh tokens needed because..."
    ├─ Pattern: "Always verify token in middleware"
    └─ Semantic, fuzzy, contextual
```

**ROI:** High - Two memory systems complement each other

---

### prd.json + Git Commits

**What It Enables:**
- Each commit maps to a user story
- Bisect failures to specific features
- Rollback atomic: revert story, not random changes
- Audit trail: who/what/when for each feature

**Implementation Notes:**
```bash
# Ralph commit pattern
git commit -m "feat: [US-003] - Add login form"

# Easy to find what changed for a story
git log --grep="US-003"

# Rollback entire feature
git revert $(git log --grep="US-003" --format="%H")
```

**Architecture:**
```
prd.json
    │
    ├─ US-001: "Add login form" → commit a1b2c3
    ├─ US-002: "Add validation" → commit d4e5f6
    └─ US-003: "Add auth action" → commit g7h8i9

Each story = one atomic commit
Easy bisect, revert, audit
```

**ROI:** High - Clean git history enables debugging

---

## Mobility + Notification Combinations

### Mobile Claude Code + Hooks (Poke/ntfy)

**What It Enables:**
- Work starts on desktop, continues on phone
- Push notification when Claude needs input
- Reply from anywhere to unblock agent
- Truly async development workflow

**Implementation Notes:**
```json
// ~/.claude/settings.json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh"
      }]
    }]
  }
}
```

```bash
#!/bin/bash
# ~/.claude/hooks/poke-notify.sh
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
curl -X POST "$POKE_API_URL" -d "{\"message\": \"Claude needs input: $QUESTION\"}"
```

**Architecture:**
```
Desktop (start task) ─→ Claude runs autonomously
                           │
                           └─ Needs input
                                  │
                                  └─ Hook fires ─→ Push notification
                                                       │
Mobile ←─────────────────────────────────────────────←┘
    │
    └─ SSH to VM ─→ Answer question ─→ Claude continues
```

**ROI:** Very High - Multiplies productive time

---

### tmux + rpai (Multi-Agent Monitor)

**What It Enables:**
- Run multiple agents in tmux panes
- rpai provides unified dashboard view
- Jump to any agent with one keystroke
- See all agent outputs simultaneously

**Implementation Notes:**
```bash
# Start agents in tmux
tmux new-session -d -s agents
tmux split-window -h
tmux send-keys -t agents:0.0 'claude "Build auth"' Enter
tmux send-keys -t agents:0.1 'claude "Build payments"' Enter

# Monitor all with rpai
cargo install rpai
rpai
```

**Dashboard View:**
```
┌─────────────────────────────────────────────┐
│  RPAI - Agent Monitor                       │
├─────────────────────────────────────────────┤
│  [1] CLAUDE: Build auth    ██████ running   │
│  [2] CLAUDE: Build payments██████ idle      │
│  [3] CLAUDE: Write tests   ██████ running   │
├─────────────────────────────────────────────┤
│  Preview: Claude is editing auth.ts...      │
└─────────────────────────────────────────────┘
```

**ROI:** Medium-High - Essential for parallel agent workflows

---

### Panopticon + Cron Jobs

**What It Enables:**
- Scheduled agent runs across life domains
- Morning briefs generated overnight
- Continuous monitoring without manual triggers
- "Autonomous departments" for different areas

**Implementation Notes:**
```bash
# crontab -e
0 6 * * * cd ~/trades && claude "Generate morning brief" > brief.md
0 2 * * * cd ~/metrics && claude "Analyze yesterday's data" > report.md
*/30 * * * * cd ~/email && claude "Draft replies to urgent" > drafts.md
```

**Architecture:**
```
Cron Scheduler
    │
    ├─ 6:00 AM: ~/trades agent ─→ Morning brief
    ├─ 2:00 AM: ~/metrics agent ─→ Daily report
    ├─ Every 30m: ~/email agent ─→ Draft replies
    │
    └─ All run independently, file-based memory
```

**ROI:** Very High - Continuous automation without supervision

---

## Isolation + Coordination Combinations

### Panopticon + File-Based Handoffs

**What It Enables:**
- Isolated agents share context explicitly
- No cross-contamination of context windows
- Handoff files as "messages" between domains
- Agents can build on each other's work

**Implementation Notes:**
```json
// ~/shared/handoff-metrics-to-growth.json
{
  "from": "metrics-agent",
  "to": "growth-agent",
  "timestamp": "2026-01-09T06:00:00Z",
  "context": {
    "top_performing_content": ["post-123", "post-456"],
    "engagement_patterns": "Morning posts perform 2x better",
    "suggested_actions": ["Schedule more AM content"]
  }
}
```

**Architecture:**
```
~/metrics (Agent A)
    │
    ├─ Analyzes performance
    └─ Writes: ~/shared/handoff-metrics-to-growth.json
                   │
                   ▼
~/growth (Agent B)
    │
    ├─ Reads handoff file
    └─ Acts on recommendations
```

**ROI:** High - Coordination without shared context overhead

---

### Docker Containers + Shared Volumes

**What It Enables:**
- Per-agent isolated environments
- Shared filesystem for coordination
- Different agents can have different dependencies
- Reproducible environments per agent type

**Implementation Notes:**
```yaml
# docker-compose.yml
services:
  agent-frontend:
    image: claude-agent
    volumes:
      - ./project:/workspace:ro
      - ./shared:/shared
    environment:
      - AGENT_ROLE=frontend

  agent-backend:
    image: claude-agent
    volumes:
      - ./project:/workspace:ro
      - ./shared:/shared
    environment:
      - AGENT_ROLE=backend
```

**Architecture:**
```
┌─────────────────────────────────────────────┐
│  Docker Compose                             │
├─────────────────────────────────────────────┤
│  Container A        Container B             │
│  (Frontend Agent)   (Backend Agent)         │
│       │                  │                  │
│       └────────┬─────────┘                  │
│                │                            │
│         Shared Volume                       │
│         (coordination)                      │
└─────────────────────────────────────────────┘
```

**ROI:** High for Production - Clean isolation with coordination

---

### Gas Town Roles + MCP Agent Mail

**What It Enables:**
- Named roles (Polecat, Crew) with email-like communication
- Async messaging without blocking
- Natural "agent village" behavior
- No training needed - agents understand email

**Implementation Notes:**
```bash
# Agents send messages via MCP
mcp_agent_mail send --to polecat-alice --subject "Need review" --body "PR ready"

# Recipient checks inbox
mcp_agent_mail check --agent polecat-bob
```

**Architecture:**
```
Gas Town
    │
    ├─ Mayor ─────────────────→ MCP Agent Mail
    ├─ Polecat (Alice) ──────→ Inbox/Outbox
    ├─ Polecat (Bob) ────────→ Inbox/Outbox
    └─ Crew (ephemeral) ─────→ Inbox/Outbox

All communicate via email-like messages
No shared context, explicit coordination
```

**ROI:** High at Scale - When agents need loose coupling

---

## Tooling + Workflow Combinations

### Skills (.md) + Sub-Agents Directory

**What It Enables:**
- Pre-built prompts from directory (200+)
- Load as skills for on-demand use
- Specialization without building from scratch
- Community-maintained, battle-tested

**Implementation Notes:**
```bash
# Download from sub-agents.directory
# Copy to .claude/agents/
.claude/agents/
├── react-specialist.yaml
├── security-auditor.yaml
└── python-expert.yaml

# Use in Claude Code
/agents  # Lists available specialists
```

**Architecture:**
```
sub-agents.directory
    │
    └─ 200+ prompts (YAML/Markdown)
           │
           ▼
.claude/agents/
    │
    └─ Loaded on-demand by Claude Code
           │
           ▼
/agents command
    │
    └─ Spawns specialist for task
```

**ROI:** Very High - Instant access to specialized agents

---

### Claude HUD + Context-Aware Task Sizing

**What It Enables:**
- Real-time context percentage visible
- Split stories before they overflow
- Predictable iteration success
- "Story too big" signal early

**Implementation Notes:**
```
HUD shows: ████████░░░░░░ 82%

Decision: Story is consuming too much context
Action: Split into smaller acceptance criteria
        Commit what's done
        Continue in next iteration
```

**Decision Matrix:**
| Context % | Action |
|-----------|--------|
| <50% | Full speed ahead |
| 50-70% | Monitor closely |
| 70-85% | Consider splitting |
| >85% | Split now or abort |

**ROI:** High - Prevents wasted iterations

---

### Hooks + Auto-Formatting

**What It Enables:**
- Every file Claude touches is formatted
- Consistent code style without prompting
- Works across all agents automatically
- Zero manual intervention

**Implementation Notes:**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [{ "type": "command", "command": "~/.claude/hooks/smart-format.sh" }]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# ~/.claude/hooks/smart-format.sh
case "${FILE##*.}" in
  ts|tsx|js|jsx) prettier --write "$FILE" ;;
  py) black --quiet "$FILE" ;;
  go) gofmt -w "$FILE" ;;
  rs) rustfmt "$FILE" ;;
esac
```

**ROI:** High - Consistent quality with no effort

---

### Checkpoint: Tooling + Workflow Patterns

**You should now understand:**
- [ ] How skills from sub-agents.directory integrate with Claude Code
- [ ] The context percentage thresholds for task sizing decisions (50%, 70%, 85%)
- [ ] How auto-formatting hooks maintain code quality automatically
- [ ] The relationship between HUD visibility and workflow decisions

**If unclear:** Re-read the Skills + Sub-Agents Directory section for skill loading patterns, and Claude HUD + Context-Aware Task Sizing for the decision matrix.

---

## Philosophy + Implementation Combinations

### .md Files (Context) + Ralph Loop

**What It Enables:**
- Rich project context from CLAUDE.md
- Ralph loop reads context each iteration
- Consistent behavior across all iterations
- "Project personality" persists

**Implementation Notes:**
```markdown
# CLAUDE.md
## Architecture
- FastAPI for backend
- React for frontend
- PostgreSQL for storage

## Conventions
- Use Zod for validation
- Always add tests
- Follow existing patterns

## Ralph Instructions
When running Ralph:
- Read prd.json first
- Check progress.txt patterns
- One story per iteration
```

**ROI:** High - Context + automation = consistent quality

---

### Adversarial Speccing + Subagents

**What It Enables:**
- Architect proposes design
- Critic challenges from persona (DHH, Security Engineer)
- Iterate until critic approves
- Better designs through debate

**Implementation Notes:**
```bash
# Spawn architect subagent
architect_output=$(claude "Design auth system for requirements: ...")

# Spawn critic subagent (DHH persona)
critic_output=$(claude "As DHH, critique this design for over-engineering: $architect_output")

# If critique is harsh, iterate
if [[ "$critic_output" == *"too complex"* ]]; then
  architect_output=$(claude "Simplify design based on: $critic_output")
fi
```

**Architecture:**
```
Orchestrator
    │
    ├─ Architect Subagent: "Here's my design..."
    │
    └─ Critic Subagent (DHH): "Too many services, merge them"
           │
           └─ Architect revises
                  │
                  └─ Critic approves
```

**ROI:** High - Better designs through structured disagreement

---

### Planning/Execution Separation + Model Selection

**What It Enables:**
- Opus for planning (needs reasoning)
- Sonnet for implementation (needs speed)
- Haiku for lookups (needs cost efficiency)
- Right model for right job

**Implementation Notes:**
```bash
# Plan with Opus
plan=$(claude --model opus "Analyze requirements and create implementation plan")

# Implement with Sonnet
implementation=$(claude --model sonnet "Implement based on: $plan")

# Verify with Haiku
verification=$(claude --model haiku "Check if $implementation matches $plan")
```

**Cost Matrix:**
| Phase | Model | Rationale |
|-------|-------|-----------|
| Planning | Opus | Complex reasoning needed |
| Implementation | Sonnet | Pattern-following, speed |
| Verification | Haiku | Simple checks, cost |

**ROI:** Very High - 10x cost savings with better results

---

## Combination Matrix

### High-Impact Pairings

| Pattern A | Pattern B | Combined Result | ROI |
|-----------|-----------|-----------------|-----|
| Ralph | Playwright | Verified UI loops | Very High |
| Ralph | Claude-Mem | Cross-session learning | High |
| Ralph | Claude HUD | Visible progress | High |
| CC Mirror | Hooks | Quality gates for all agents | High |
| Subagents | Worktrees | True parallel isolation | Very High |
| progress.txt | AGENTS.md | Short + long-term memory | Very High |
| Mobile | Poke Hooks | Async development | Very High |
| Panopticon | Cron | Continuous automation | Very High |
| Skills | Sub-Agents Dir | Instant specialization | Very High |
| Planning | Model Selection | Cost-optimized quality | Very High |

### Effort vs Impact

```
                        HIGH IMPACT
                            │
    ┌───────────────────────┼───────────────────────┐
    │                       │                       │
    │  Ralph + Playwright   │   Worktrees + Subagents
    │  Mobile + Hooks       │   Gas Town + Beads    │
    │  progress + AGENTS    │                       │
    │                       │                       │
LOW │───────────────────────┼───────────────────────│ HIGH
EFFORT                      │                       EFFORT
    │                       │                       │
    │  HUD + Ralph          │   Panopticon + Cron   │
    │  Hooks + Formatting   │   Docker + Volumes    │
    │  Skills + Directory   │                       │
    │                       │                       │
    └───────────────────────┼───────────────────────┘
                            │
                        LOW IMPACT
```

### Synergy Categories

#### Multiplicative Synergies (1+1 = 5)
These combinations create capabilities neither pattern has alone:

1. **Ralph + Playwright** - Verification impossible without browser, persistence impossible without Ralph
2. **Worktrees + Subagents** - Isolation impossible without worktrees, parallelism impossible without subagents
3. **progress.txt + AGENTS.md** - Short-term learning useless without long-term, long-term empty without short-term

#### Additive Synergies (1+1 = 2)
These combinations improve both patterns but don't create new capabilities:

1. **Claude HUD + Ralph** - Both work alone, together they're better
2. **Hooks + CC Mirror** - Hooks work anywhere, CC Mirror works without hooks
3. **Mobile + Poke** - Both solve problems independently, together they're seamless

#### Enabling Synergies (1+0 = 1)
One pattern enables the other to function:

1. **tmux + rpai** - rpai requires tmux to function
2. **Git + Claude-Mem** - Both need history, but can work independently
3. **MCP + Any Workflow** - MCP enables tool access, workflows use it

---

## Implementation Priority

### Start Here (Quick Wins)
1. **Hooks + Auto-Formatting** - 5 minutes, immediate benefit
2. **Claude HUD** - 5 minutes, visibility into everything
3. **Sub-Agents Directory** - Browse, copy, paste - instant specialists

### Build Foundation (Medium Effort)
1. **Ralph + progress.txt + AGENTS.md** - Sets up compounding learning
2. **Mobile + Poke Hooks** - Enables async workflow
3. **Worktrees + Basic Subagents** - Parallel work capability

### Scale Up (Deep Investment)
1. **CC Mirror Full Orchestration** - Multi-agent coordination
2. **Panopticon Architecture** - Life OS across domains
3. **Gas Town** - Factory-scale agent production

---

## Anti-Patterns to Avoid

### Combinations That Conflict

| Pattern A | Pattern B | Why It Fails |
|-----------|-----------|--------------|
| Ralph (fresh context) | Large shared context | Defeats fresh context purpose |
| Parallel agents | Single branch | Merge conflicts inevitable |
| Heavy MCP tools | Main context | Token explosion |
| Many Opus subagents | Cost constraints | Budget blown |
| Strict hooks | YOLO mode | Contradictory philosophy |

### Overhead Traps

1. **Too Many Monitoring Tools** - rpai + HUD + custom logging = more monitoring than work
2. **Over-Orchestration** - CC Mirror + Gas Town + custom coordinator = chaos
3. **Memory Overload** - Claude-Mem + progress.txt + AGENTS.md + git notes = context bloat

---

## Summary

The most powerful Claude Code workflows emerge from thoughtful pattern combinations:

1. **Ralph + Browser Automation** enables verified UI development
2. **Subagents + Worktrees** enables true parallel development
3. **progress.txt + AGENTS.md** enables compounding knowledge
4. **Mobile + Hooks** enables async work from anywhere
5. **Model Selection + Task Phases** enables cost-optimized quality

The key insight: **Patterns are LEGO blocks**. Each is useful alone, but the real power comes from combining them into systems greater than their parts.

---

---

## Troubleshooting

### Common Issue: Ralph + Playwright Screenshots Not Verifying

**Symptom:** Ralph loop claims UI verification passed, but screenshots show broken layouts or missing elements.

**Cause:** Playwright may be taking screenshots before the page fully renders, or the verification prompt isn't specific enough.

**Fix:**
1. Add explicit wait conditions before screenshots:
```javascript
await page.waitForLoadState('networkidle');
await page.waitForSelector('.expected-element');
```
2. Make acceptance criteria more specific:
```json
"acceptanceCriteria": [
  "Screenshot shows button with text 'Submit' at y < 500px",
  "No console errors in browser",
  "Element .login-form is visible"
]
```
3. Put Playwright in a subagent to isolate browser context issues

### Common Issue: Claude-Mem Injecting Irrelevant Context

**Symptom:** Ralph iterations receive memories from unrelated past sessions, wasting context tokens on irrelevant information.

**Cause:** Claude-Mem's semantic search is matching on general terms, not the specific story/task.

**Fix:**
1. Query with story ID explicitly: `search(query="US-003 authentication", type="pattern")`
2. Use the timeline layer for recent context instead of broad search
3. Tag memories with project identifiers during capture

```bash
# Before Ralph iteration, query specifically
claude-mem search --query "US-003" --project "my-app" --limit 5
```

### Common Issue: Worktree Subagents Diverging Too Far

**Symptom:** When merging worktree branches back to main, conflicts are massive because agents made incompatible architectural decisions.

**Cause:** Agents worked in isolation without shared architectural constraints.

**Fix:**
1. Create shared AGENTS.md with architectural rules all worktrees read
2. Use periodic "sync points" where agents check in before major decisions
3. Assign a dedicated "merge agent" that monitors divergence:

```bash
# Check divergence before it gets too big
git diff main..feature-auth --stat | tail -1
# If changes exceed threshold, trigger sync
```

### Common Issue: Mobile + Poke Notifications Not Arriving

**Symptom:** Hooks are configured for push notifications but phone never receives them during AFK runs.

**Cause:** Common issues include wrong API URL, missing auth token, or the hook script failing silently.

**Fix:**
1. Test the notification script manually first:
```bash
# Test Poke directly
curl -X POST "https://poke-api.com/send" \
  -H "Authorization: Bearer $POKE_TOKEN" \
  -d '{"message": "Test notification"}'
```
2. Add logging to the hook script:
```bash
#!/bin/bash
echo "$(date): Hook triggered" >> ~/.claude/hooks/notify.log
curl -X POST "$POKE_API_URL" -d "{\"message\": \"$1\"}" 2>> ~/.claude/hooks/notify.log
```
3. Verify the PreToolUse matcher is correct (should be `AskUserQuestion`, not `Ask`)

### Common Issue: progress.txt + AGENTS.md Getting Out of Sync

**Symptom:** Learnings in progress.txt contradict guidance in AGENTS.md, causing inconsistent agent behavior.

**Cause:** progress.txt is append-only and may contain outdated patterns that were later refined.

**Fix:**
1. Periodically distill progress.txt into AGENTS.md (human-in-loop)
2. Have Claude summarize and deduplicate at session end
3. Use clear sections in AGENTS.md that override progress.txt:

```markdown
# AGENTS.md

## Authoritative Patterns (override progress.txt)
- Always use async/await, never callbacks
- Always hash with bcrypt, never SHA

## Historical Context (see progress.txt)
- For detailed decision history, check progress.txt
```

---

## Tags

`#synthesis` `#combinations` `#patterns` `#synergies` `#ralph` `#playwright` `#worktrees` `#subagents` `#memory` `#hooks` `#mobile` `#orchestration` `#verification` `#isolation` `#coordination`
