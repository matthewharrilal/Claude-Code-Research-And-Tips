# Cross-Pattern Migration Guide
## Scaling Your Orchestration: From Ralph to Gas Town to Enterprise

---

**Document Type:** Synthesis Migration Guide
**Version:** 1.0
**Created:** 2026-01-19
**Target:** 1,200+ lines
**Status:** Complete migration pathways across all orchestration levels

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [I Outgrew Ralph, What's Next?](#2-i-outgrew-ralph-whats-next)
3. [Ralph to Gas Town Migration Path](#3-ralph-to-gas-town-migration-path)
4. [Gas Town to Claude-Flow Scaling](#4-gas-town-to-claude-flow-scaling)
5. [State Preservation During Migration](#5-state-preservation-during-migration)
6. [Downgrade Paths](#6-downgrade-paths)
7. [Anti-Patterns During Migration](#7-anti-patterns-during-migration)
8. [Mental Models](#8-mental-models)
9. [Intermediate Patterns: CC Mirror](#9-intermediate-patterns-cc-mirror)
10. [Checkpoints](#10-checkpoints)
11. [Troubleshooting](#11-troubleshooting)
12. [Source Attribution](#12-source-attribution)

---

## 1. You Are Here

<div class="you-are-here" style="background: linear-gradient(135deg, #f0ebe3 0%, #fefcf3 100%); border-left: 4px solid #2a7d7d; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">

### **Con**text **Ori**entation

This **doc**ument **gui**des you through **mig**ration **bet**ween **orc**hestration **pat**terns. You're **rea**ding this **bec**ause you've **out**grown your **cur**rent **app**roach or **nee**d to **sca**le **dow**n from **ove**rkill.

### Where This Fits in the Knowledge Base

```
ORCHESTRATION COMPLEXITY LADDER
═══════════════════════════════

Level 7: Claude-Flow v3 (Enterprise)     ← Maximum automation
    ↑
Level 6-7: Gas Town (Factory-Scale)      ← 20-30+ agents
    ↑
Level 5-6: CC Mirror + Parallel          ← THIS DOC COVERS TRANSITIONS
    ↑
Level 4-5: Zeroshot / Marathon Ralph     ← Multi-agent Ralph
    ↑
Level 3-4: Production Ralph              ← PRD-driven
    ↑
Level 3: Original Ralph                  ← Fresh context loop
    ↑
Level 1-2: CLAUDE.md + Extended          ← Basic persistence
    ↑
Level 0: Single Interactive Session      ← Entry point
```

### What This Document Enables

After reading this guide, you will be able to:

1. **Recognize** when you've outgrown your current pattern
2. **Plan** migration to the next complexity level
3. **Preserve** learnings and state during transitions
4. **Execute** step-by-step migration with verification
5. **Downgrade** when simpler approaches suffice
6. **Avoid** common migration anti-patterns

### Pre**req**uisites

| Concept | Required Understanding |
|---------|----------------------|
| **Ralph fundamentals** | Fresh context, external state, prd.json |
| **Git worktrees** | Branch isolation for parallel work |
| **MCP basics** | Model Context Protocol tools |
| **tmux** (for Gas Town) | Terminal multiplexing |

### Cross-References

| Related Document | Use For |
|-----------------|---------|
| `compare-ralph-variants-complete.md` | Choosing Ralph variant |
| `mastery-gastown-complete.md` | Gas Town deep dive |
| `mastery-ralph-complete.md` | Ralph mastery |
| `architecture-complexity-ladder.md` | Level definitions |

</div>

---

## 2. I Outgrew Ralph, What's Next?

### **Rec**ognizing the **Sig**ns

You've **out**grown **Ral**ph when you **obs**erve these **pat**terns **con**sistently:

#### Signs You Need Multi-Agent (CC Mirror / Parallel Ralph)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   RALPH → MULTI-AGENT TRIGGER SIGNALS                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   SYMPTOM                           WHAT IT MEANS                        │
│   ───────                           ──────────────                        │
│                                                                          │
│   1. "I'm waiting on Ralph"         Single-threaded bottleneck          │
│      while other work exists                                             │
│                                                                          │
│   2. Stories have no dependencies   Could run in parallel               │
│      between them                                                        │
│                                                                          │
│   3. Feature branches conflict      Need isolated worktrees             │
│      on merge                                                            │
│                                                                          │
│   4. Overnight runs complete        Could do 3-4 features overnight     │
│      one feature only                                                    │
│                                                                          │
│   5. Context isolation would        Different features need             │
│      improve quality                 different context                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Signs You Need Factory-Scale (Gas Town)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   MULTI-AGENT → GAS TOWN TRIGGER SIGNALS                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   SYMPTOM                           WHAT IT MEANS                        │
│   ───────                           ──────────────                        │
│                                                                          │
│   1. Running 5+ Claude instances    Need role specialization            │
│      simultaneously                                                      │
│                                                                          │
│   2. Agents overwriting each        Need merge queue (Refinery)         │
│      other's work                                                        │
│                                                                          │
│   3. Codebase > 100K LOC            Scale requires coordination         │
│                                                                          │
│   4. Want persistent named          Polecats vs ephemeral workers       │
│      agents                                                              │
│                                                                          │
│   5. Need human-in-the-loop         Overseer role pattern               │
│      for decisions                                                       │
│                                                                          │
│   6. $50-200/day API budget         Factory economics viable            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Signs You Need Enterprise (Claude-Flow v3)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   GAS TOWN → CLAUDE-FLOW TRIGGER SIGNALS                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   SYMPTOM                           WHAT IT MEANS                        │
│                                                                          │
│   1. Want self-learning routing     Need SONA architecture              │
│      (patterns improve over time)                                        │
│                                                                          │
│   2. Need consensus algorithms      Byzantine fault tolerance           │
│      (Raft, Byzantine, Gossip)                                          │
│                                                                          │
│   3. Want multi-provider LLM        OpenAI, Gemini, Ollama fallbacks    │
│      routing                                                             │
│                                                                          │
│   4. MCP-native is important        170+ tools via MCP                  │
│                                                                          │
│   5. Team prefers Node.js/TS        vs Go (Gas Town)                    │
│      over Go                                                             │
│                                                                          │
│   6. Want lower cost profile        $10-50/day vs $50-200               │
│      with automation                                                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Decision Tree: What's Next?

```
                    ┌────────────────────────────────────────────┐
                    │  ARE YOU CONSISTENTLY WAITING FOR RALPH    │
                    │  WHILE PARALLELIZABLE WORK EXISTS?          │
                    └──────────────────────┬─────────────────────┘
                                           │
                               ┌───────────┴───────────┐
                               │                       │
                              YES                      NO
                               │                       │
                               ▼                       ▼
             ┌─────────────────────────┐   ┌─────────────────────────┐
             │   CC MIRROR OR          │   │   STAY WITH RALPH       │
             │   PARALLEL RALPH        │   │   (Optimize stories)    │
             └───────────┬─────────────┘   └─────────────────────────┘
                         │
                         ▼
         ┌────────────────────────────────────────────┐
         │  ARE AGENTS OVERWRITING EACH OTHER'S WORK  │
         │  OR DO YOU NEED SPECIALIZED ROLES?          │
         └──────────────────────┬─────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                   YES                      NO
                    │                       │
                    ▼                       ▼
      ┌─────────────────────────┐   ┌─────────────────────────┐
      │      GAS TOWN           │   │   STAY WITH CC MIRROR   │
      │  (Factory with roles)   │   │   (Simpler multi-agent) │
      └───────────┬─────────────┘   └─────────────────────────┘
                  │
                  ▼
      ┌────────────────────────────────────────────┐
      │  DO YOU NEED SELF-LEARNING, MULTI-PROVIDER │
      │  OR MCP-NATIVE ENTERPRISE FEATURES?        │
      └──────────────────────┬─────────────────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                YES                      NO
                 │                       │
                 ▼                       ▼
   ┌─────────────────────────┐   ┌─────────────────────────┐
   │    CLAUDE-FLOW v3       │   │   STAY WITH GAS TOWN    │
   │  (Enterprise features)  │   │   (Proven production)   │
   └─────────────────────────┘   └─────────────────────────┘
```

### Complexity Cost Matrix

Before migrating, understand the trade-offs:

| Level | Pattern | Daily Cost | Setup Time | Maintenance |
|-------|---------|------------|------------|-------------|
| 3-4 | **Production Ralph** | $10-30 | 30 minutes | Low |
| 4-5 | **CC Mirror** | $30-80 | 1-2 hours | Low-Medium |
| 5-6 | **Parallel Ralph** | $30-80 | 1 hour | Low |
| 6-7 | **Gas Town** | $50-200 | 4-8 hours | Medium-High |
| 7+ | **Claude-Flow v3** | $10-50 | 2-4 hours | Medium |

---

## 3. Ralph to Gas Town Migration Path

### The **Tra**nsition **Arc**hitecture

Migrating from Ralph to Gas Town involves these key transformations:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   RALPH → GAS TOWN TRANSFORMATION                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   RALPH CONCEPT           →    GAS TOWN CONCEPT                         │
│   ────────────                 ─────────────────                         │
│                                                                          │
│   prd.json                →    Beads ledger (.beads/)                   │
│   progress.txt            →    Beads task notes                         │
│   CLAUDE.md               →    Rig CLAUDE.md + hooks                    │
│   Single Claude instance  →    8 specialized roles                      │
│   while loop bash         →    gt commands                              │
│   Story by story          →    Convoy-based work bundles               │
│   Self-verification       →    Dogs quality gates                       │
│   Manual branch           →    Refinery merge queue                     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Migration Script

#### Phase 1: Prerequisites (30 minutes)

```bash
#!/bin/bash
# ralph-to-gastown-phase1.sh
# Verify prerequisites for Gas Town

set -e

echo "=== Phase 1: Prerequisites Check ==="

# Check Go version
GO_VERSION=$(go version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+' | head -1)
if [[ "$GO_VERSION" < "1.23" ]]; then
  echo "ERROR: Go 1.23+ required. Current: $GO_VERSION"
  echo "Install: brew install go"
  exit 1
fi
echo "✓ Go version: $GO_VERSION"

# Check Git version
GIT_VERSION=$(git --version | grep -oE '[0-9]+\.[0-9]+' | head -1)
if [[ "$GIT_VERSION" < "2.25" ]]; then
  echo "ERROR: Git 2.25+ required for worktrees"
  exit 1
fi
echo "✓ Git version: $GIT_VERSION"

# Check tmux
if ! command -v tmux &> /dev/null; then
  echo "ERROR: tmux required. Install: brew install tmux"
  exit 1
fi
echo "✓ tmux installed"

# Check Claude Code
if ! command -v claude &> /dev/null; then
  echo "ERROR: Claude Code CLI not found"
  exit 1
fi
echo "✓ Claude Code installed"

echo ""
echo "=== All prerequisites met ==="
echo "Proceed to Phase 2: Installation"
```

**Checkpoint 1:** All prerequisites pass. You should see 4 checkmarks.

#### Phase 2: Install Gas Town (15 minutes)

```bash
#!/bin/bash
# ralph-to-gastown-phase2.sh
# Install Gas Town

set -e

echo "=== Phase 2: Gas Town Installation ==="

# Install gt command
echo "Installing Gas Town CLI..."
go install github.com/steveyegge/gastown/cmd/gt@latest

# Verify installation
if ! command -v gt &> /dev/null; then
  echo "ERROR: gt command not found"
  echo "Add ~/go/bin to your PATH"
  exit 1
fi
echo "✓ gt command installed: $(gt version)"

# Initialize workspace
GT_HOME="${GT_HOME:-$HOME/gt}"
echo "Initializing Gas Town workspace at $GT_HOME..."
gt install "$GT_HOME" --git

echo ""
echo "=== Installation complete ==="
echo "Workspace: $GT_HOME"
echo "Proceed to Phase 3: Migration"
```

**Checkpoint 2:** `gt version` returns version info. `$GT_HOME/.gt/` directory exists.

#### Phase 3: Migrate Ralph Project (30 minutes)

```bash
#!/bin/bash
# ralph-to-gastown-phase3.sh
# Migrate existing Ralph project to Gas Town rig

set -e

RALPH_PROJECT="${1:?Usage: $0 <ralph-project-path>}"
RIG_NAME="${2:-$(basename $RALPH_PROJECT)}"
GT_HOME="${GT_HOME:-$HOME/gt}"

echo "=== Phase 3: Project Migration ==="
echo "Ralph project: $RALPH_PROJECT"
echo "Rig name: $RIG_NAME"

# Verify Ralph project has expected structure
if [[ ! -f "$RALPH_PROJECT/scripts/ralph/prd.json" ]]; then
  echo "WARNING: No prd.json found at expected location"
fi

# Add project as rig
echo "Adding rig: $RIG_NAME"
cd "$GT_HOME"
gt rig add "$RIG_NAME" "$RALPH_PROJECT"

# Convert prd.json to Beads
if [[ -f "$RALPH_PROJECT/scripts/ralph/prd.json" ]]; then
  echo "Converting prd.json to Beads tasks..."

  # Parse prd.json and create Beads
  jq -r '.userStories[] | select(.passes == false) | .id + "|||" + .title + "|||" + .description' \
    "$RALPH_PROJECT/scripts/ralph/prd.json" | while IFS='|||' read -r id title desc; do
    echo "Creating bead: $title"
    cd "$GT_HOME/$RIG_NAME"
    bd create "$title" --note "Migrated from Ralph $id: $desc"
  done
fi

# Migrate progress.txt patterns to AGENTS.md
if [[ -f "$RALPH_PROJECT/scripts/ralph/progress.txt" ]]; then
  echo "Extracting patterns from progress.txt..."

  # Append patterns section to rig's AGENTS.md
  AGENTS_MD="$GT_HOME/$RIG_NAME/AGENTS.md"
  echo "" >> "$AGENTS_MD"
  echo "## Patterns from Ralph Migration" >> "$AGENTS_MD"
  echo "" >> "$AGENTS_MD"

  # Extract patterns section
  grep -A 100 "## Codebase Patterns" "$RALPH_PROJECT/scripts/ralph/progress.txt" \
    | head -50 >> "$AGENTS_MD" 2>/dev/null || true
fi

# Create crew workspace
echo "Creating crew workspace..."
gt crew add "$RIG_NAME" --name "yourname"

echo ""
echo "=== Migration complete ==="
echo "Rig added: $RIG_NAME"
echo "Start with: gt mayor attach"
```

**Checkpoint 3:** `gt rig list` shows your project. `bd ready` shows converted tasks.

#### Phase 4: Start Gas Town Workflow

```bash
#!/bin/bash
# ralph-to-gastown-phase4.sh
# Start Gas Town with migrated rig

GT_HOME="${GT_HOME:-$HOME/gt}"
RIG_NAME="${1:?Usage: $0 <rig-name>}"

echo "=== Phase 4: Starting Gas Town ==="

# Create tmux session
SESSION="gastown"

tmux new-session -d -s $SESSION -n 'overview'

# Window 1: Mayor (your primary interface)
tmux new-window -t $SESSION -n 'mayor'
tmux send-keys -t $SESSION:mayor "cd $GT_HOME && gt mayor attach" C-m

# Window 2: Infrastructure (Dogs only - skip Deacon in v0.3.x)
tmux new-window -t $SESSION -n 'dogs'
tmux send-keys -t $SESSION:dogs "cd $GT_HOME && gt dogs up" C-m

# Window 3: Rig (Witness + Refinery)
tmux new-window -t $SESSION -n "rig-$RIG_NAME"
tmux split-window -h -t "rig-$RIG_NAME"
tmux send-keys -t $SESSION:"rig-$RIG_NAME".0 "cd $GT_HOME && gt witness up $RIG_NAME" C-m
tmux send-keys -t $SESSION:"rig-$RIG_NAME".1 "cd $GT_HOME && gt refinery up $RIG_NAME" C-m

# Window 4-6: Polecats (named workers)
for POLECAT in alice bob carol; do
  tmux new-window -t $SESSION -n "$POLECAT"
  tmux send-keys -t $SESSION:$POLECAT "cd $GT_HOME && gt polecat up $RIG_NAME $POLECAT" C-m
done

# Window 7: Inbox
tmux new-window -t $SESSION -n 'inbox'
tmux send-keys -t $SESSION:inbox "watch -n 5 gt inbox" C-m

# Attach to session
echo "Starting tmux session..."
tmux select-window -t $SESSION:mayor
tmux attach -t $SESSION
```

**Checkpoint 4:** `gt status` shows all roles running. Mayor responds to commands.

### Post-Migration Verification

```bash
# Verify rig is properly connected
gt rig status $RIG_NAME

# Verify Beads converted correctly
cd ~/gt/$RIG_NAME && bd ready

# Test sling workflow
bd create "Test migration verification"
# Note the bead ID (e.g., bd-xyz123)
gt sling bd-xyz123 $RIG_NAME

# Watch polecat pick it up
# Switch to alice/bob/carol window to observe
```

### Preserving Ralph Patterns During Migration

Your Ralph learnings shouldn't be lost. Here's how they map:

| Ralph Artifact | Gas Town Location | Migration Action |
|----------------|------------------|------------------|
| prd.json stories | Beads ledger | `bd create` for each story |
| progress.txt patterns | AGENTS.md | Append to rig's AGENTS.md |
| Archive folder | Beads history | Git history preserved |
| Story sizing knowledge | Bead descriptions | Document in bead notes |

---

## 4. Gas Town to Claude-Flow Scaling

### Why Migrate to Claude-Flow?

| Gas Town Limitation | Claude-Flow Solution |
|---------------------|---------------------|
| Go runtime only | Node.js ecosystem |
| Manual human oversight | Self-learning SONA |
| Single provider (Claude) | Multi-provider routing |
| Fixed role hierarchy | Dynamic agent spawning |
| ~$50-200/day | ~$10-50/day (cost optimized) |

### Architecture Comparison

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    GAS TOWN vs CLAUDE-FLOW                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   GAS TOWN                           CLAUDE-FLOW v3                     │
│   ────────                           ─────────────                       │
│                                                                          │
│   Overseer (YOU)                     Strategic Queen                    │
│   Mayor (Coordination)               Tactical Queen                     │
│   Deacon (Heartbeat)                 Adaptive Queen (learning)          │
│   Dogs (Quality)                     Security Architect                 │
│   Refinery (Merge)                   Consensus algorithms               │
│   Witness (Monitoring)               Swarm health checks                │
│   Polecats (Workers)                 54+ specialized agents             │
│   Crew (Personal)                    Worker types by domain             │
│                                                                          │
│   Beads (Memory)                     AgentDB + ReasoningBank            │
│   MCP Agent Mail                     Hooks + Event system               │
│   Go CLI (gt)                        Node.js MCP server                 │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Migration Steps: Gas Town to Claude-Flow

#### Step 1: Install Claude-Flow

```bash
# Install Claude-Flow v3
npm install -g claude-flow@v3alpha

# Initialize in existing project
cd ~/gt/myproject  # Your Gas Town rig
npx claude-flow@v3alpha init --wizard

# Add as MCP server
claude mcp add claude-flow -- npx -y claude-flow@v3alpha
```

#### Step 2: Migrate Beads to AgentDB

```bash
#!/bin/bash
# gastown-to-claudeflow-beads.sh
# Migrate Beads ledger to Claude-Flow memory

RIG_PATH="${1:?Usage: $0 <rig-path>}"

echo "=== Migrating Beads to AgentDB ==="

# Export Beads as JSON
cd "$RIG_PATH"
bd list --json > /tmp/beads-export.json

# Import to Claude-Flow memory
npx claude-flow@v3alpha memory import /tmp/beads-export.json \
  --type "beads-migration" \
  --metadata '{"source": "gas-town"}'

echo "Migrated $(jq length /tmp/beads-export.json) beads to AgentDB"
```

#### Step 3: Map Gas Town Roles to Claude-Flow Agents

```typescript
// gastown-to-claudeflow-mapping.ts
// Configure Claude-Flow swarm to match Gas Town patterns

import { createSwarm } from 'claude-flow';

const gastownEquivalentSwarm = await createSwarm({
  topology: 'hierarchical',
  agents: [
    // Queens replace Mayor/Deacon coordination
    { type: 'queen-strategic', role: 'Mayor equivalent' },
    { type: 'queen-tactical', role: 'Witness equivalent' },
    { type: 'queen-adaptive', role: 'Learning (no GT equivalent)' },

    // Core workers replace Polecats
    { type: 'coder', count: 3, role: 'Polecat workers' },
    { type: 'tester', count: 2, role: 'Quality validation' },
    { type: 'reviewer', count: 1, role: 'Dogs equivalent' },

    // Supporting roles
    { type: 'documenter', count: 1, role: 'Documentation' },
    { type: 'architect', count: 1, role: 'Design decisions' }
  ],
  consensus: {
    algorithm: 'raft',  // Similar to Gas Town's explicit coordination
    threshold: 0.66
  }
});
```

#### Step 4: Configure SONA Learning

```json
// claude-flow.config.json
{
  "learning": {
    "mode": "balanced",
    "ewc": {
      "enabled": true,
      "lambda": 5000,
      "comment": "Preserves Gas Town patterns while learning new ones"
    },
    "initialPatterns": {
      "import": "./beads-patterns.json",
      "comment": "Import Gas Town Beads patterns"
    }
  }
}
```

### Hybrid Operation: Gas Town + Claude-Flow

For gradual migration, run both systems:

```typescript
// hybrid-orchestrator.ts
// Use Claude-Flow for autonomous, Gas Town for human decisions

const hybridOrchestrator = {
  // Route based on task criticality
  async processTask(task: Task) {
    const criticality = await classifyCriticality(task);

    if (criticality === 'routine') {
      // Claude-Flow handles autonomously
      return await claudeFlowSwarm.execute(task);
    } else if (criticality === 'requires-human') {
      // Gas Town with Overseer approval
      await gtInboxSend(task);
      return await waitForOverseerApproval();
    }
  }
};
```

---

## 5. State Preservation During Migration

### The **Gold**en **Rul**e

> **Nev**er **los**e **lea**rnings. **Ext**ract, **doc**ument, **tra**nsfer.

### State Preservation Checklist

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   MIGRATION STATE PRESERVATION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   BEFORE MIGRATION                                                       │
│   ─────────────────                                                      │
│                                                                          │
│   □ Export progress.txt patterns to standalone doc                      │
│   □ Archive prd.json as migration-source.json                           │
│   □ Git commit all pending changes                                      │
│   □ Document working verification commands                              │
│   □ Export successful prompt templates                                  │
│   □ Note any custom modifications to scripts                            │
│                                                                          │
│   DURING MIGRATION                                                       │
│   ────────────────                                                       │
│                                                                          │
│   □ Create mapping document (old → new concepts)                        │
│   □ Test each component before moving to next                           │
│   □ Keep old system running until new is verified                       │
│   □ Document any translation/conversion logic                           │
│                                                                          │
│   AFTER MIGRATION                                                        │
│   ───────────────                                                        │
│                                                                          │
│   □ Verify all tasks transferred                                        │
│   □ Run test task through new system                                    │
│   □ Confirm learnings accessible in new format                          │
│   □ Archive old system config (don't delete yet)                        │
│   □ Update CLAUDE.md to reference new patterns                          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Pattern Export Scripts

#### Export Ralph Patterns

```bash
#!/bin/bash
# export-ralph-patterns.sh
# Extract and format Ralph learnings for migration

RALPH_DIR="${1:-./scripts/ralph}"
OUTPUT_DIR="${2:-./migration-export}"

mkdir -p "$OUTPUT_DIR"

echo "=== Exporting Ralph Patterns ==="

# 1. Extract prd.json schema patterns
echo "Extracting PRD patterns..."
cat "$RALPH_DIR/prd.json" | jq '{
  project: .project,
  storyFormat: .userStories[0] | keys,
  criteriaPatterns: [.userStories[].acceptanceCriteria] | flatten | unique,
  totalStories: .userStories | length,
  completedStories: [.userStories[] | select(.passes == true)] | length
}' > "$OUTPUT_DIR/prd-patterns.json"

# 2. Extract progress.txt learnings
echo "Extracting progress learnings..."
if [[ -f "$RALPH_DIR/progress.txt" ]]; then
  # Extract codebase patterns section
  sed -n '/## Codebase Patterns/,/^---/p' "$RALPH_DIR/progress.txt" \
    > "$OUTPUT_DIR/codebase-patterns.md"

  # Extract all learnings
  grep -E "^\s+- (Learnings|Pattern|Gotcha):" "$RALPH_DIR/progress.txt" \
    > "$OUTPUT_DIR/learnings-raw.txt"
fi

# 3. Export prompt.md for reference
cp "$RALPH_DIR/prompt.md" "$OUTPUT_DIR/original-prompt.md"

# 4. Archive entire structure
tar -czf "$OUTPUT_DIR/ralph-archive-$(date +%Y%m%d).tar.gz" "$RALPH_DIR"

echo ""
echo "=== Export Complete ==="
ls -la "$OUTPUT_DIR"
```

#### Export Gas Town Patterns

```bash
#!/bin/bash
# export-gastown-patterns.sh
# Extract Gas Town state for Claude-Flow migration

GT_HOME="${GT_HOME:-$HOME/gt}"
RIG_NAME="${1:?Usage: $0 <rig-name>}"
OUTPUT_DIR="${2:-./migration-export}"

mkdir -p "$OUTPUT_DIR"

echo "=== Exporting Gas Town Patterns ==="

# 1. Export Beads ledger
echo "Exporting Beads..."
cd "$GT_HOME/$RIG_NAME"
bd list --json > "$OUTPUT_DIR/beads-ledger.json"
bd list --format md > "$OUTPUT_DIR/beads-readable.md"

# 2. Export AGENTS.md
cp "$GT_HOME/$RIG_NAME/AGENTS.md" "$OUTPUT_DIR/agents-patterns.md"

# 3. Export convoy history
gt convoy list --json > "$OUTPUT_DIR/convoy-history.json" 2>/dev/null || true

# 4. Export rig configuration
gt rig status "$RIG_NAME" --json > "$OUTPUT_DIR/rig-config.json" 2>/dev/null || true

# 5. Archive .beads directory
tar -czf "$OUTPUT_DIR/beads-archive-$(date +%Y%m%d).tar.gz" \
  "$GT_HOME/$RIG_NAME/.beads"

echo ""
echo "=== Export Complete ==="
ls -la "$OUTPUT_DIR"
```

### State Transformation Templates

#### Ralph prd.json to Beads

```bash
# Transform prd.json stories to Beads commands
jq -r '.userStories[] | "bd create \"" + .title + "\" --note \"" + .description + "\""' \
  prd.json > beads-import.sh
chmod +x beads-import.sh
./beads-import.sh
```

#### Beads to Claude-Flow Memory

```typescript
// Transform Beads JSON to Claude-Flow memory store
import { memoryStore } from 'claude-flow';

async function importBeads(beadsFile: string) {
  const beads = JSON.parse(fs.readFileSync(beadsFile, 'utf8'));

  for (const bead of beads) {
    await memoryStore({
      content: JSON.stringify({
        title: bead.title,
        description: bead.note,
        status: bead.status,
        dependencies: bead.blockedBy
      }),
      type: 'task',
      metadata: {
        migrationSource: 'gas-town-beads',
        originalId: bead.id,
        migratedAt: new Date().toISOString()
      }
    });
  }
}
```

---

## 6. Downgrade Paths

### When Enterprise is Overkill

**Rec**ognize when to **sim**plify:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   DOWNGRADE TRIGGER SIGNALS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   FROM CLAUDE-FLOW → GAS TOWN                                           │
│   ──────────────────────────                                             │
│   • Self-learning not providing value                                   │
│   • Prefer explicit human oversight                                     │
│   • Team more comfortable with Go                                       │
│   • Multi-provider routing unnecessary                                  │
│                                                                          │
│   FROM GAS TOWN → CC MIRROR / PARALLEL RALPH                            │
│   ───────────────────────────────────────────                           │
│   • Only 3-5 agents needed, not 20+                                     │
│   • Role specialization adds overhead without value                     │
│   • Budget constraints ($50-200/day too high)                           │
│   • Merge wall problem not occurring                                    │
│                                                                          │
│   FROM MULTI-AGENT → PRODUCTION RALPH                                   │
│   ─────────────────────────────────────                                  │
│   • Parallelization not needed (sequential is fine)                     │
│   • Single feature focus at a time                                      │
│   • Lower API costs important                                           │
│   • Simpler debugging preferred                                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Claude-Flow to Gas Town Downgrade

```bash
#!/bin/bash
# downgrade-claudeflow-to-gastown.sh

echo "=== Downgrading from Claude-Flow to Gas Town ==="

# 1. Export Claude-Flow memory
npx claude-flow@v3alpha memory export --output ./cf-memory-export.json

# 2. Stop Claude-Flow
npx claude-flow@v3alpha swarm shutdown
claude mcp remove claude-flow

# 3. Convert memory to Beads
jq -r '.[] | select(.type == "task") | "bd create \"" + .content.title + "\""' \
  ./cf-memory-export.json > import-to-beads.sh

# 4. Import to Gas Town
cd ~/gt/myproject
chmod +x import-to-beads.sh
./import-to-beads.sh

echo "Downgrade complete. Start Gas Town: gt mayor attach"
```

### Gas Town to CC Mirror Downgrade

```bash
#!/bin/bash
# downgrade-gastown-to-ccmirror.sh

echo "=== Downgrading from Gas Town to CC Mirror ==="

# 1. Export Beads as prd.json format
cd ~/gt/myproject
bd list --json | jq '{
  project: "migrated-from-gastown",
  branchName: "ccmirror/main",
  userStories: [.[] | {
    id: .id,
    title: .title,
    description: .note,
    passes: (.status == "done"),
    priority: .priority
  }]
}' > scripts/ralph/prd.json

# 2. Stop Gas Town
gt town down

# 3. Install CC Mirror if not present
npx cc-mirror quick --provider mirror --name mclaude

# 4. Start CC Mirror
mclaude

# In mclaude session:
# "Load the orchestration skill and initiate"

echo "Downgrade complete. Run: mclaude"
```

### Multi-Agent to Production Ralph Downgrade

```bash
#!/bin/bash
# downgrade-to-production-ralph.sh

echo "=== Downgrading to Production Ralph ==="

PROJECT_DIR="${1:-.}"

# 1. Ensure ralph directory exists
mkdir -p "$PROJECT_DIR/scripts/ralph"

# 2. Create or restore prd.json
# (If coming from CC Mirror, tasks may already be there)

# 3. Reset to single-agent prompt
cat > "$PROJECT_DIR/scripts/ralph/prompt.md" << 'EOF'
# Ralph Agent Instructions

## Workflow
1. Read prd.json - find highest priority story where passes: false
2. Read progress.txt - check Codebase Patterns section
3. Verify correct branch
4. Implement ONE story
5. Run typecheck and tests
6. Commit: `feat: [US-XXX] - [Title]`
7. Update prd.json: passes: true
8. APPEND to progress.txt

## Stop Condition
If ALL stories have passes: true, reply:
<promise>COMPLETE</promise>
EOF

# 4. Create ralph.sh loop
cat > "$PROJECT_DIR/scripts/ralph/ralph.sh" << 'EOF'
#!/bin/bash
set -e
MAX_ITERATIONS=${1:-10}

for i in $(seq 1 $MAX_ITERATIONS); do
  echo "=== Iteration $i ==="
  cat prompt.md | claude --dangerously-skip-permissions 2>&1 | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "Done!"
    exit 0
  fi
  sleep 5
done
EOF

chmod +x "$PROJECT_DIR/scripts/ralph/ralph.sh"

echo "Downgrade complete. Run: ./scripts/ralph/ralph.sh"
```

---

## 7. Anti-Patterns During Migration

### Critical **Mis**takes to **Avo**id

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                     MIGRATION ANTI-PATTERNS                                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #1: BIG BANG MIGRATION                                         ║
║   ─────────────────────────────────────                                        ║
║                                                                                ║
║   ✗ WRONG: Switch everything overnight, delete old system                     ║
║   ✓ RIGHT: Incremental migration, parallel operation period                   ║
║                                                                                ║
║   WHY: If new system fails, you need fallback.                                ║
║   HOW: Run both systems for 1-2 weeks. Migrate one workflow at a time.        ║
║                                                                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #2: LOSING LEARNED PATTERNS                                    ║
║   ─────────────────────────────────────────                                    ║
║                                                                                ║
║   ✗ WRONG: Start fresh, ignore progress.txt and AGENTS.md                     ║
║   ✓ RIGHT: Export, transform, import all patterns                             ║
║                                                                                ║
║   WHY: Patterns represent weeks of iteration. Don't lose them.                ║
║   HOW: Use export scripts before migration. Verify import after.              ║
║                                                                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #3: SKIPPING VERIFICATION CHECKPOINTS                          ║
║   ───────────────────────────────────────────────────                          ║
║                                                                                ║
║   ✗ WRONG: Run full migration script without stopping                         ║
║   ✓ RIGHT: Verify each phase before proceeding                                ║
║                                                                                ║
║   WHY: Errors compound. Catch early.                                          ║
║   HOW: Use checkpoint verifications in this document.                         ║
║                                                                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #4: OVER-ENGINEERING THE MIGRATION                             ║
║   ─────────────────────────────────────────────────                            ║
║                                                                                ║
║   ✗ WRONG: Build custom tools to automate every aspect                        ║
║   ✓ RIGHT: Use existing tools, manual steps are OK                            ║
║                                                                                ║
║   WHY: Migration is one-time. Don't spend more time automating than doing.    ║
║   HOW: Simple scripts + manual verification beats over-engineered automation. ║
║                                                                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #5: MIGRATING WITHOUT UNDERSTANDING DESTINATION                ║
║   ─────────────────────────────────────────────────────────────                ║
║                                                                                ║
║   ✗ WRONG: "Gas Town sounds cool, let me migrate"                             ║
║   ✓ RIGHT: Understand prerequisites, daily workflow, costs first              ║
║                                                                                ║
║   WHY: Each system has different requirements and tradeoffs.                  ║
║   HOW: Read full documentation. Run example project first.                    ║
║                                                                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   ANTI-PATTERN #6: KEEPING BOTH SYSTEMS INDEFINITELY                          ║
║   ────────────────────────────────────────────────────                         ║
║                                                                                ║
║   ✗ WRONG: Run old and new forever "just in case"                             ║
║   ✓ RIGHT: Set deadline, fully commit after verification period               ║
║                                                                                ║
║   WHY: Split attention reduces effectiveness of both.                         ║
║   HOW: 2-week parallel period. Then archive old, commit to new.               ║
║                                                                                ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### Migration Timeline Best Practices

```
RECOMMENDED MIGRATION TIMELINE
══════════════════════════════

Week 0:
├── Document current state
├── Export all patterns
├── Read destination documentation
└── Set up destination (don't migrate yet)

Week 1:
├── Run test project on new system
├── Verify basic functionality
├── Start ONE workflow on new system
└── Keep production on old system

Week 2:
├── Migrate more workflows to new system
├── Run parallel for critical paths
├── Document any translation issues
└── Build confidence in new system

Week 3:
├── All new work on new system
├── Old system for reference only
├── Address any remaining issues
└── Prepare to archive old system

Week 4:
├── Archive old system (don't delete)
├── Full commitment to new system
├── Update all documentation
└── Migration complete
```

---

## 8. Mental Models

### Mental Model 1: The **Sca**ffolding **Met**aphor

When **con**structing a **bui**lding, you **don**'t **rem**ove **sca**ffolding **unt**il the **str**ucture is **sta**ble.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   OLD SYSTEM (Scaffolding)          NEW SYSTEM (Building)               │
│   ────────────────────────          ─────────────────────               │
│                                                                          │
│   Phase 1: Old supports everything, new being constructed               │
│            ┌─────────────┐                                              │
│            │ OLD SYSTEM  │────────►  [under construction]              │
│            └─────────────┘                                              │
│                                                                          │
│   Phase 2: New takes partial load, old still supporting                 │
│            ┌─────────────┐        ┌─────────────┐                       │
│            │ OLD SYSTEM  │──────► │ NEW SYSTEM  │                       │
│            └─────────────┘        └─────────────┘                       │
│                                                                          │
│   Phase 3: New stable, old for emergency only                           │
│            ┌─────────────┐        ┌─────────────┐                       │
│            │ (standby)   │        │ NEW SYSTEM  │ ◄── primary           │
│            └─────────────┘        └─────────────┘                       │
│                                                                          │
│   Phase 4: Remove scaffolding, archive old                              │
│                                   ┌─────────────┐                       │
│            [archived]             │ NEW SYSTEM  │ ◄── only system       │
│                                   └─────────────┘                       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Application:** Keep old system running until new system is proven stable.

### Mental Model 2: The **Con**text **Tra**nsfer **Pip**eline

Think of migration as a **data pipeline** with three stages:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   EXTRACT              TRANSFORM              LOAD                       │
│   ───────              ─────────              ────                       │
│                                                                          │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                │
│   │ Old System  │───►│ Translation │───►│ New System  │                │
│   │ Patterns    │    │ Layer       │    │ Format      │                │
│   └─────────────┘    └─────────────┘    └─────────────┘                │
│                                                                          │
│   EXAMPLES:                                                              │
│                                                                          │
│   prd.json ─────────► jq transform ─────────► Beads                    │
│   progress.txt ─────► grep/sed ────────────► AGENTS.md                 │
│   Beads ────────────► JSON export ──────────► AgentDB                  │
│                                                                          │
│   KEY INSIGHT: Transformation is where data loss occurs.                │
│   Document the transformation. Verify after loading.                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Application:** Every migration has ETL. Make the Transform step explicit and verifiable.

### Mental Model 3: The **Org**anizational **Str**ucture **Evo**lution

Organizations scale through structure changes. So do orchestration patterns:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   STARTUP (Ralph)              GROWTH (CC Mirror)                       │
│   ───────────────              ──────────────────                        │
│   • Single person              • Small team                             │
│   • Does everything            • Parallel tracks                        │
│   • Fast but limited           • Coordination needed                    │
│                                                                          │
│        ┌─────┐                    ┌─────┐   ┌─────┐                     │
│        │ You │                    │ You │   │ You │                     │
│        └─────┘                    └──┬──┘   └──┬──┘                     │
│                                      │         │                         │
│                                   Task A    Task B                       │
│                                                                          │
│   SCALE-UP (Gas Town)          ENTERPRISE (Claude-Flow)                 │
│   ───────────────────          ────────────────────────                  │
│   • Departments                • Self-organizing                        │
│   • Specialized roles          • Learning systems                       │
│   • Explicit hierarchy         • Adaptive structure                     │
│                                                                          │
│        ┌────────────┐              ┌────────────┐                       │
│        │  Overseer  │              │   Queens   │                       │
│        └─────┬──────┘              └─────┬──────┘                       │
│              │                           │                               │
│     ┌────────┼────────┐         ┌────────┼────────┐                     │
│     │        │        │         │        │        │                     │
│   Mayor   Refinery  Dogs      Coder  Tester  Arch                       │
│     │                           │        │        │                     │
│  Polecats                    SONA learns optimal routing                │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

**Application:** Match your orchestration to your actual scale. Don't build enterprise structure for startup needs.

---

## 9. Intermediate Patterns: CC Mirror

### CC Mirror as the **Mid**dle **Gro**und

CC Mirror occupies the **cri**tical **mid**dle **ter**ritory between Ralph and Gas Town:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   COMPLEXITY SPECTRUM                                                    │
│   ═══════════════════                                                    │
│                                                                          │
│   SIMPLE ◄───────────────────────────────────────────────────► COMPLEX  │
│                                                                          │
│   [Ralph]        [CC Mirror]              [Gas Town]    [Claude-Flow]   │
│      │               │                        │               │          │
│   Single         Multi-agent              Factory          Enterprise   │
│   Sequential     Parallel                 Roles            Self-learn   │
│   $10-30/day     $30-80/day              $50-200/day      $10-50/day   │
│                                                                          │
│              CC MIRROR SWEET SPOT:                                       │
│              ─────────────────────                                       │
│              • Need parallelization                                      │
│              • Don't need specialized roles                              │
│              • Don't need merge queue management                         │
│              • Budget-conscious                                          │
│              • Simpler than Gas Town, more than Ralph                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Ralph to CC Mirror Migration

```bash
#!/bin/bash
# ralph-to-ccmirror.sh

echo "=== Migrating Ralph to CC Mirror ==="

PROJECT_DIR="${1:-.}"

# 1. Preserve Ralph state
cp -r "$PROJECT_DIR/scripts/ralph" "$PROJECT_DIR/scripts/ralph-backup"

# 2. Install CC Mirror
npx cc-mirror quick --provider mirror --name mclaude

# 3. Convert prd.json to CC Mirror tasks
# (CC Mirror uses TaskCreate API, not prd.json)
# Start mclaude and load orchestration skill

echo "Migration prepared."
echo ""
echo "In mclaude session:"
echo "1. 'Load the orchestration skill and initiate'"
echo "2. 'Import tasks from scripts/ralph/prd.json'"
echo "3. CC Mirror will create TaskCreate calls for each story"
```

### CC Mirror to Gas Town Migration

Use CC Mirror as a stepping stone:

```
MIGRATION PATH: CC Mirror → Gas Town
════════════════════════════════════

1. Run CC Mirror until you hit multi-agent coordination limits
2. Notice: agents overwriting, need merge queue, want named workers
3. Export CC Mirror task state
4. Install Gas Town
5. Import tasks as Beads
6. Configure roles (Mayor, Refinery, Witness, Polecats)
7. Parallel operation period
8. Full Gas Town commitment
```

---

## 10. Checkpoints

### Checkpoint 1: Pre-Migration Readiness

**Where you are:** Deciding to migrate, haven't started.

**Verify:**

```bash
# Have you documented current state?
ls -la ./migration-export/ 2>/dev/null || echo "✗ Create export directory"

# Have you exported patterns?
[[ -f ./migration-export/codebase-patterns.md ]] && echo "✓ Patterns exported" || echo "✗ Run export script"

# Have you read destination documentation?
echo "Manual check: Have you read the destination system docs?"

# Do you understand the cost implications?
echo "Manual check: Have you calculated new daily/monthly costs?"
```

**You should see:** Export directory with patterns, affirmative answers to manual checks.

**If something is missing:** Return to Section 5 (State Preservation).

---

### Checkpoint 2: Destination System Operational

**Where you are:** New system installed, not yet migrated data.

**Verify:**

```bash
# For Gas Town migration:
gt version && echo "✓ Gas Town installed"
gt rig list && echo "✓ Can list rigs"

# For Claude-Flow migration:
npx claude-flow@v3alpha --version && echo "✓ Claude-Flow installed"
claude mcp list | grep claude-flow && echo "✓ MCP registered"

# For CC Mirror migration:
which mclaude && echo "✓ CC Mirror installed"
```

**You should see:** Version numbers, successful command outputs.

**If something is missing:** Return to installation steps for your target system.

---

### Checkpoint 3: Test Task Completion

**Where you are:** Data migrated, testing new system.

**Verify:**

```bash
# Create test task
# For Gas Town:
cd ~/gt/myproject && bd create "Test: verify migration"
gt sling $(bd ready | head -1 | awk '{print $1}') myproject

# For Claude-Flow:
npx claude-flow@v3alpha agent spawn --type coder --task "Echo: migration test"

# For CC Mirror:
# In mclaude: "Create a test task: echo migration success"
```

**You should see:** Task completes successfully, output visible.

**If test fails:** Check logs, verify configuration, consult troubleshooting section.

---

### Checkpoint 4: Pattern Accessibility Verified

**Where you are:** Migrated, verifying learnings transferred.

**Verify:**

```bash
# For Gas Town:
cat ~/gt/myproject/AGENTS.md | grep -i "pattern" && echo "✓ Patterns in AGENTS.md"

# For Claude-Flow:
npx claude-flow@v3alpha memory search --query "pattern" --limit 5

# Verify conversion accuracy:
# Compare source and destination pattern counts
```

**You should see:** Patterns accessible in new system format.

**If patterns missing:** Re-run export/import scripts, verify transformation logic.

---

### Checkpoint 5: Parallel Operation Stable

**Where you are:** Running both systems, new system handling production.

**Verify:**

```
Manual verification checklist:
□ New system handling daily workflow for 1+ week
□ No data loss incidents
□ Performance acceptable
□ Team comfortable with new patterns
□ Fallback to old system not needed
```

**You should see:** All boxes checked.

**If not ready:** Extend parallel period, investigate issues.

---

### Checkpoint 6: Migration Complete

**Where you are:** Ready to archive old system.

**Verify:**

```bash
# Final backup of old system
tar -czf ./migration-archive-$(date +%Y%m%d).tar.gz ./scripts/ralph

# Confirm new system is sole source of truth
echo "Manual: All documentation updated to reference new system?"
echo "Manual: Team notified of migration completion?"

# Archive old system config (don't delete)
mv ./scripts/ralph ./scripts/ralph-archived-$(date +%Y%m%d)
```

**You should see:** Archive created, old system moved to archived location.

**Post-migration:** Monitor new system closely for 2 more weeks.

---

## 11. Troubleshooting

### Migration Error Glossary

<details>
<summary><strong>ERROR: "bd: command not found" during Beads operations</strong></summary>

**Cause:** Beads CLI not in PATH or not installed with Gas Town.

**Solution:**
```bash
# Verify Beads installation
which bd || echo "Beads not found"

# If missing, install Beads separately
go install github.com/steveyegge/beads/cmd/bd@latest

# Add to PATH if needed
export PATH="$HOME/go/bin:$PATH"
```
</details>

<details>
<summary><strong>ERROR: "jq: command not found" during prd.json parsing</strong></summary>

**Cause:** jq JSON processor not installed.

**Solution:**
```bash
# macOS
brew install jq

# Linux
apt install jq  # Debian/Ubuntu
yum install jq  # RHEL/CentOS
```
</details>

<details>
<summary><strong>ERROR: "Permission denied" when running migration scripts</strong></summary>

**Cause:** Scripts not marked executable.

**Solution:**
```bash
chmod +x ./migration-script.sh
./migration-script.sh
```
</details>

<details>
<summary><strong>ERROR: Patterns missing after import</strong></summary>

**Cause:** Transformation script failed silently, or patterns in unexpected format.

**Solution:**
```bash
# Verify source has patterns
cat ./migration-export/codebase-patterns.md

# Re-run export with verbose output
bash -x ./export-ralph-patterns.sh

# Check destination format
# For Gas Town:
cat ~/gt/myproject/AGENTS.md

# For Claude-Flow:
npx claude-flow@v3alpha memory list --type "task"
```
</details>

<details>
<summary><strong>ERROR: "EACCES: permission denied" during npm install</strong></summary>

**Cause:** npm global directory permission issue.

**Solution:**
```bash
# Fix npm permissions
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"

# Add to shell profile
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc
```
</details>

<details>
<summary><strong>ERROR: Gas Town tmux session won't start</strong></summary>

**Cause:** Existing session, tmux not running, or permission issue.

**Solution:**
```bash
# Kill existing session
tmux kill-session -t gastown 2>/dev/null

# Start fresh
tmux new-session -d -s gastown
tmux attach -t gastown

# If tmux fails entirely
brew reinstall tmux  # macOS
```
</details>

<details>
<summary><strong>ERROR: MCP server fails to connect</strong></summary>

**Cause:** Port conflict, server not started, or registration issue.

**Solution:**
```bash
# Check if server is running
ps aux | grep claude-flow

# Check port
lsof -i :3000

# Re-register MCP
claude mcp remove claude-flow
claude mcp add claude-flow -- npx -y claude-flow@v3alpha

# Restart
npx claude-flow@v3alpha mcp restart
```
</details>

### Recovery Procedures

#### If Migration Corrupts Data

```bash
# 1. Stop new system immediately
gt town down  # Gas Town
# OR
npx claude-flow@v3alpha swarm shutdown  # Claude-Flow

# 2. Restore from pre-migration backup
tar -xzf ./migration-archive-*.tar.gz

# 3. Resume on old system
cd ./scripts/ralph
./ralph.sh

# 4. Investigate what went wrong before retrying
```

#### If New System is Unstable

```bash
# 1. Document the instability
echo "$(date): [describe issue]" >> ./migration-issues.log

# 2. Revert to old system for production
# Keep new system for testing

# 3. File issue with system maintainer
# Gas Town: github.com/steveyegge/gastown/issues
# Claude-Flow: github.com/ruvnet/claude-flow/issues

# 4. Wait for fix or workaround
```

#### If Patterns Don't Transfer Correctly

```bash
# 1. Manual pattern recovery
# Open source progress.txt
# Manually copy patterns to destination AGENTS.md

# 2. Verify each pattern individually
grep "Pattern:" ./scripts/ralph/progress.txt | while read pattern; do
  echo "Checking: $pattern"
  # Verify in new system
done

# 3. Document any patterns that couldn't transfer
```

---

## 12. Source Attribution

### Primary Sources

| Document | Purpose | Location |
|----------|---------|----------|
| `025-ralph-original.md` | Original Ralph pattern | `extractions/orchestration/` |
| `026-ralph-production.md` | Production Ralph implementation | `extractions/orchestration/` |
| `022-gas-town-deep-dive.md` | Gas Town architecture | `extractions/orchestration/` |
| `024-cc-mirror-complete.md` | CC Mirror orchestration | `extractions/orchestration/` |
| `031-claude-flow-enterprise.md` | Claude-Flow v3 | `extractions/orchestration/` |

### Synthesis References

| Document | Purpose | Location |
|----------|---------|----------|
| `compare-ralph-variants-complete.md` | Ralph variant comparison | `synthesis/` |
| `mastery-gastown-complete.md` | Gas Town mastery guide | `synthesis/` |
| `architecture-complexity-ladder.md` | Complexity levels | `synthesis/` |

### Pattern Creators

| Pattern | Creator | Source |
|---------|---------|--------|
| **Ralph Wiggum** | Geoffrey Huntley | ghuntley.com/ralph |
| **Production Ralph** | Ryan Carson | github.com/snarktank/ralph |
| **Gas Town** | Steve Yegge | github.com/steveyegge/gastown |
| **CC Mirror** | Numman Ali | github.com/numman-ali/cc-mirror |
| **Claude-Flow v3** | ruvnet | github.com/ruvnet/claude-flow |

### Related Documents in This Repository

| For... | See... |
|--------|--------|
| Choosing Ralph variant | `compare-ralph-variants-complete.md` |
| Gas Town deep dive | `mastery-gastown-complete.md` |
| Ralph fundamentals | `mastery-ralph-complete.md` |
| Complexity levels explained | `architecture-complexity-ladder.md` |
| Orchestration comparison | `compare-orchestration.md` |

---

## Quick Reference Card

### Migration Decision Matrix

| From | To | Key Trigger | Effort |
|------|----|----|--------|
| Ralph | CC Mirror | Need parallelization | 1-2 hours |
| Ralph | Gas Town | Need roles + merge queue | 4-8 hours |
| CC Mirror | Gas Town | Agents overwriting | 2-4 hours |
| Gas Town | Claude-Flow | Need self-learning | 2-4 hours |
| Gas Town | CC Mirror | Roles are overkill | 2-3 hours |
| CC Mirror | Ralph | Parallelization not needed | 1 hour |

### State Preservation Commands

```bash
# Export Ralph patterns
./export-ralph-patterns.sh ./scripts/ralph ./migration-export

# Export Gas Town patterns
./export-gastown-patterns.sh myproject ./migration-export

# Convert prd.json to Beads
jq -r '.userStories[] | "bd create \"" + .title + "\""' prd.json

# Convert Beads to Claude-Flow
npx claude-flow@v3alpha memory import beads-export.json
```

### Rollback Commands

```bash
# Gas Town emergency stop
gt town down

# Claude-Flow emergency stop
npx claude-flow@v3alpha swarm shutdown

# CC Mirror stop
pkill -f "mclaude"

# Restore Ralph backup
tar -xzf ./migration-archive-*.tar.gz
```

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Document ID** | cross-pattern-migration |
| **Category** | synthesis |
| **Created** | 2026-01-19 |
| **Line Count** | 1,500+ |
| **Primary Focus** | Migration between orchestration patterns |
| **Complexity Coverage** | Levels 3-7 |
| **Target Audience** | Users outgrowing current patterns |

---

**The Bottom Line:** Migration between orchestration patterns is a **sta**ged **pro**cess, not a **swi**tch. **Pre**serve **pat**terns, **ver**ify **check**points, and **mai**ntain **fal**lback **cap**ability until the new **sys**tem is **pro**ven.

---

*Cross-references: mastery-ralph-complete.md, mastery-gastown-complete.md, architecture-complexity-ladder.md*
