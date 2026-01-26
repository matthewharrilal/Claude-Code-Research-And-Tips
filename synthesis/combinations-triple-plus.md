# Higher-Order Combinations: Triple+ Pattern Stacks

> **You Are Here:** This is advanced territory - stacks of 3+ patterns working together. These are the configurations used by Claude Code power users shipping production code at 5-10x normal velocity. Only read this after mastering individual patterns and pairwise combinations. Prerequisites: familiarity with Ralph, Hooks, Subagents, and CC Mirror.

---
## D-FINAL Integration
**Cross-references:** [D-FINAL-architecture.md Section 6 for combinations, D-FINAL-implementation.md Section 4 for tools]
**Journey link:** journey-architecture.md, journey-implementation.md
**Last updated:** 2026-01-18 (Phase 2B)
---

This synthesis identifies the most powerful multi-pattern combinations from the Claude Code power user community. These are not individual techniques but **integrated stacks** where each component amplifies the others.

---

## The "Unhobbled" Full Stack
**Source:** @EricBuess (Twitter/X)

The complete maximalist setup that removes all limitations and automates everything:

| Component | Function | Synergy |
|-----------|----------|---------|
| **LSP Integration** | Real-time code intelligence, autocomplete, diagnostics | Provides Claude with IDE-level awareness |
| **Hooks** | Event-driven automation (format, notify, gate) | Automates all deterministic operations |
| **Subagents** | Delegated parallel work with isolated contexts | Handles complex tasks without polluting main context |
| **Adversarial Validation** | Counter-agent reviews for quality control | Catches errors before they compound |
| **Ralph Wiggum Loops** | File-based state for infinite autonomous work | Enables multi-hour/day projects |
| **2-Way Voice (STT/TTS)** | Dictate prompts, hear responses | Enables mobile/hands-free operation |

### What It Unlocks
- **10x productivity** vs vanilla Claude Code
- True "set it and forget it" workflows
- Mobile-first development (code from your couch)
- Multi-day autonomous projects

### Configuration Example
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{ "type": "command", "command": "~/.claude/hooks/notify.sh" }]
    }, {
      "matcher": "Bash",
      "hooks": [{ "type": "command", "command": "~/.claude/hooks/security-gate.sh" }]
    }],
    "PostToolUse": [{
      "matcher": "Edit",
      "hooks": [{ "type": "command", "command": "~/.claude/hooks/smart-format.sh" }]
    }],
    "SessionEnd": [{
      "type": "command",
      "command": "~/.claude/hooks/ralph-continue.sh"
    }]
  }
}
```

### Implementation Order
1. Install hooks (formatting, notifications)
2. Set up subagent delegation pattern
3. Add adversarial validation layer
4. Configure Ralph loops for sustained work
5. Add voice (optional but powerful for mobile)
6. LSP integration for code intelligence

---

## Boris Cherny's Creator Stack
**Source:** Boris Cherny (Claude Code creator) - Interview & Twitter

The workflow used by the creator of Claude Code himself to achieve 100% AI-contributed code:

| Component | Function | Synergy |
|-----------|----------|---------|
| **5-10 Parallel Sessions** | Multiple Claude instances working simultaneously | Maximizes throughput on independent tasks |
| **Always Opus 4.5 + Extended Thinking** | Best model with deep reasoning | Quality output reduces iteration |
| **Shared CLAUDE.md** | Project context shared across all sessions | Consistent behavior without re-explaining |
| **Plan Mode -> Auto-Accept** | Planning phase then full autonomy | Control where needed, speed where safe |
| **Slash Commands + Subagents** | Custom commands triggering delegated work | Repeatable complex workflows |
| **Verification Loops** | Run tests, check output, iterate | Catches errors before commit |

### What It Unlocks
- **100% AI-contributed code** in production applications
- Parallel feature development
- Ship features in hours, not days
- Code quality matches or exceeds human output

### Key Insight: The Planning Phase
```
1. Start in PLAN mode (manual approval)
2. Discuss architecture, constraints, patterns
3. Lock in shared understanding in CLAUDE.md
4. Switch to AUTO-ACCEPT mode
5. Let Claude execute with full autonomy
6. Verify via tests and review
```

### CLAUDE.md Structure for Parallel Sessions
```markdown
# Project Context
[project description, architecture]

# Current Sprint
[active features being developed]

# Session Assignment
- Session 1: Feature A (branch: feat/a)
- Session 2: Feature B (branch: feat/b)
- Session 3: Bug fixes (branch: fix/bugs)
- Session 4: Tests (branch: test/coverage)
- Session 5: Docs (branch: docs/update)

# Shared Patterns
[code conventions, patterns to follow]

# Verification Checklist
- [ ] All tests pass
- [ ] Linter clean
- [ ] Build succeeds
- [ ] PR ready for review
```

---

## Production Multi-Agent Stack
**Sources:** CC Mirror (@nummanali), Gas Town (@steve_yegge), Community patterns

Enterprise-scale agentic development for solo operators or small teams:

| Component | Function | Synergy |
|-----------|----------|---------|
| **CC Mirror Orchestration** | Central agent managing worker agents | Optimal model selection per task |
| **Tiered Model Selection** | Haiku for errands, Sonnet for work, Opus for thinking | 50-70% cost reduction |
| **Git Worktrees** | Parallel branches, no context switching | Each agent works in isolation |
| **Specialized Workers** | Agents trained for specific task types | Higher quality, less confusion |
| **Browser Verification** | Playwright/MCP for UI testing | Verify changes visually |
| **Cost Optimization** | Monitor, limit, cache aggressively | Sustainable at scale |

### What It Unlocks
- **Team-scale output as a solo developer**
- Sustainable economics (not $500/day)
- Quality control through specialization
- 24/7 development capacity

### CC Mirror Architecture
```
Orchestrator (Opus/Sonnet)
├── Research Agent (Haiku) - Gather information
├── Implementation Agent (Sonnet) - Write code
├── Test Agent (Sonnet) - Create tests
├── Review Agent (Opus) - Quality check
└── Documentation Agent (Haiku) - Update docs
```

### Worker Preamble Template
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report results with absolute file paths
- Ask orchestrator if blocked

TASK:
[Specific task here]
```

### Git Worktree Setup
```bash
# Create worktrees for each agent
git worktree add ../project-agent1 -b agent1/feature-a
git worktree add ../project-agent2 -b agent2/feature-b
git worktree add ../project-agent3 -b agent3/tests

# Each Claude instance runs in its own worktree
# No merge conflicts, no context pollution
```

### Cost Control Configuration
```json
{
  "model_selection": {
    "default": "sonnet",
    "research_tasks": "haiku",
    "architecture_decisions": "opus",
    "simple_edits": "haiku"
  },
  "budget": {
    "daily_limit": 50,
    "per_session_limit": 10,
    "alert_threshold": 0.8
  }
}
```

---

## Compounding Learning Stack
**Sources:** @ryancarson, @ghuntley, @mattpocockuk

The system that gets smarter with every run:

| Component | Function | Synergy |
|-----------|----------|---------|
| **Ralph Loops** | File-based state for infinite work | Context never lost |
| **Progress.txt Archives** | Append-only memory of all runs | Learnings persist |
| **Parallel Instances (3x)** | Multiple angles of attack | Faster exploration |
| **Cross-Run Learning** | Reference previous attempts | Build on success |
| **PRD Tracking** | JSON task list with passes: true/false | Clear success metrics |

### What It Unlocks
- **Continuous improvement** across sessions
- Claude learns your codebase over time
- Faster completion on similar future tasks
- Institutional memory without human intervention

### File Structure for Compounding
```
plans/
├── prd.json              # Task list with completion status
├── progress.txt          # Append-only memory log
├── archive/
│   ├── run-001-progress.txt
│   ├── run-002-progress.txt
│   └── learnings.md      # Distilled insights
├── PROMPT.md             # Static instructions
└── ralph.sh              # Loop script
```

### prd.json Format
```json
{
  "project": "Feature X Implementation",
  "started": "2026-01-09T10:00:00Z",
  "tasks": [
    {"id": 1, "description": "Setup database schema", "passes": true},
    {"id": 2, "description": "Implement API endpoints", "passes": true},
    {"id": 3, "description": "Add authentication", "passes": false},
    {"id": 4, "description": "Write integration tests", "passes": false}
  ],
  "dependencies": {
    "3": [1, 2],
    "4": [1, 2, 3]
  }
}
```

### ralph.sh with Archiving
```bash
#!/bin/bash
set -e

MAX_ITERATIONS=${1:-50}
RUN_ID=$(date +%Y%m%d_%H%M%S)

for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  echo "=== Iteration $i / $MAX_ITERATIONS ===" | tee -a plans/progress.txt

  claude "Review plans/prd.json and plans/progress.txt.
    Check plans/archive/learnings.md for previous insights.
    Mark completed PRD items as passes: true.
    Append your progress to progress.txt.
    Make a git commit for completed features.
    Work on ONE task at a time.
    If PRD is complete, output PROMISE COMPLETE HERE." | tee output.txt

  if grep -q "PROMISE COMPLETE HERE" output.txt; then
    echo "=== COMPLETE at iteration $i ===" >> plans/progress.txt
    cp plans/progress.txt "plans/archive/run-$RUN_ID-progress.txt"
    break
  fi
done
```

### Learnings Extraction Pattern
After each successful run, extract insights:
```markdown
# Learnings from Run $RUN_ID

## What Worked
- [pattern that succeeded]

## What Failed Initially
- [pattern that required iteration]

## Key Insights
- [reusable insight for future runs]

## Code Patterns Discovered
- [specific patterns that work for this codebase]
```

---

### Checkpoint: Core Triple+ Stacks

**You should now understand:**
- [ ] The 6 components of the "Unhobbled" stack and their synergies
- [ ] Boris Cherny's workflow: 5-10 parallel sessions with shared CLAUDE.md
- [ ] How the Production Multi-Agent Stack uses tiered model selection for cost control
- [ ] The file structure for the Compounding Learning Stack (prd.json, progress.txt, archive/)
- [ ] The difference between additive (1+1=2) and multiplicative (1+1=5) synergies

**If unclear:** Re-read the specific stack section you're unclear on. For the Unhobbled stack, focus on the implementation order. For the Creator Stack, focus on the CLAUDE.md structure for parallel sessions.

---

## Triple+ Combination Matrix

| Combo Name | Components | Unlocks | Complexity | Cost | Audience |
|------------|------------|---------|------------|------|----------|
| **The Unhobbled** | LSP + Hooks + Subagents + Adversarial + Ralph + Voice | 10x productivity, mobile dev | High | High | Power Users |
| **Creator Stack** | Parallel sessions + Opus + CLAUDE.md + Plan->Auto + Verification | 100% AI code | Medium | High | Creators |
| **Production Multi-Agent** | CC Mirror + Tiered models + Worktrees + Specialized workers | Team output solo | High | Medium | Professionals |
| **Compounding Learner** | Ralph + Archives + Parallel + Cross-run | Continuous improvement | Medium | Medium | Long-term projects |
| **Budget Maximalist** | Haiku army + Caching + Subagent isolation + Batch API | 80% cost reduction | Medium | Low | Cost-conscious |
| **Mobile Async** | Hooks + Notifications + Ralph + Cloud VM | Code from anywhere | Medium | Medium | Remote workers |
| **Security First** | Hooks (gates) + Audit logs + Sandbox + Adversarial | Enterprise safety | High | Medium | Enterprise |
| **Speed Demon** | Auto-accept + Parallel + No verification + Haiku | Fastest iteration | Low | Low | Prototyping |
| **Quality Obsessed** | Opus only + Adversarial + Tests + Verification loops | Highest quality | Medium | Very High | Production code |
| **The Full Stack** | All patterns combined | Maximum capability | Very High | Very High | True power users |

---

## Synergy Analysis: Why Combinations Beat Singles

### Additive vs Multiplicative Benefits

**Single Pattern:**
- Ralph loop alone: 2x productivity
- Hooks alone: 1.5x productivity
- Subagents alone: 2x productivity

**Combined (Multiplicative):**
- Ralph + Hooks + Subagents: 6-10x productivity (not 5.5x)

### Why?
1. **Hooks remove friction** that would slow Ralph loops
2. **Subagents handle complexity** that would break Ralph's simple loop
3. **Ralph's file-based state** gives subagents persistent memory
4. **Each pattern enables the others** to work at full capacity

### The Feedback Loop Effect
```
More automation (hooks)
    -> Faster iteration
        -> More experiments possible
            -> Better patterns discovered
                -> Encoded into CLAUDE.md
                    -> Claude improves
                        -> More automation possible
```

---

## Anti-Patterns: What NOT to Combine

| Anti-Pattern | Components | Why It Fails |
|--------------|------------|--------------|
| **Opus Everything + No Budget** | Full Opus + Auto-accept + No limits | $500+/day costs |
| **Parallel + Shared State** | Multiple agents + Same branch | Merge conflicts, corruption |
| **Ralph + No Verification** | Infinite loops + No tests | Compounds errors |
| **Mobile + Complex Tasks** | Voice-only + Architecture work | Needs visual context |
| **Haiku + Complex Reasoning** | Cheapest model + Hard problems | Fails, wastes iterations |
| **Adversarial Without Main** | Review agent + No implementation | All criticism, no output |

---

## Implementation Roadmap: Building Up the Stack

### Week 1: Foundation
- [ ] Set up hooks (formatting, notifications)
- [ ] Configure CLAUDE.md with project context
- [ ] Practice plan mode -> auto-accept workflow
- [ ] Monitor costs and set limits

### Week 2: Parallelization
- [ ] Set up git worktrees
- [ ] Run 2-3 parallel sessions
- [ ] Implement shared CLAUDE.md pattern
- [ ] Add verification loops

### Week 3: Automation
- [ ] Implement Ralph loops
- [ ] Add progress.txt archiving
- [ ] Set up subagent delegation
- [ ] Configure tiered model selection

### Week 4: Advanced
- [ ] Add adversarial validation
- [ ] Implement CC Mirror pattern (if applicable)
- [ ] Set up mobile/async workflow
- [ ] Add voice interface (optional)

### Week 5+: Optimization
- [ ] Analyze costs and optimize model selection
- [ ] Refine CLAUDE.md based on learnings
- [ ] Extract patterns to slash commands
- [ ] Build project-specific automations

---

## Real-World Stack Examples

### Example 1: Solo Founder Building SaaS
**Stack:** Creator + Compounding + Budget Maximalist
- 3 parallel sessions (features, tests, docs)
- Sonnet for implementation, Haiku for research
- Ralph loops for overnight work
- Archives for cross-session learning
- Monthly cost: ~$150-300

### Example 2: Consultant Shipping Client Projects
**Stack:** Production Multi-Agent + Quality Obsessed
- CC Mirror orchestration
- Opus for client-facing code
- Adversarial review before delivery
- Git worktrees per client
- Strict verification loops
- Monthly cost: ~$300-500

### Example 3: Side Project Hobbyist
**Stack:** Budget Maximalist + Mobile Async
- Haiku-heavy for exploration
- Notifications for async check-ins
- Ralph loops for background work
- Cloud VM for access anywhere
- Monthly cost: ~$30-50

### Example 4: Enterprise Team Member
**Stack:** Security First + Production Multi-Agent
- Hook-based security gates
- Audit logging for compliance
- Tiered model selection (approved by finance)
- Sandbox execution
- Monthly cost: Corporate budget

---

## Metrics for Stack Success

### Productivity Metrics
| Metric | Baseline | With Stack | Target |
|--------|----------|------------|--------|
| Features/week | 2 | 6-10 | 5x |
| Lines of code/day | 200 | 1000+ | 5x |
| Bug fix time | 2 hours | 20 min | 6x |
| PR turnaround | 1 day | 2 hours | 12x |

### Cost Efficiency Metrics
| Metric | Unoptimized | Optimized Stack | Improvement |
|--------|-------------|-----------------|-------------|
| Cost per feature | $50 | $15 | 70% reduction |
| Model efficiency | 100% Opus | 20/60/20 split | 60% savings |
| Wasted iterations | 40% | 10% | 75% reduction |
| Context resets | 5/day | 1/day | 80% reduction |

### Quality Metrics
| Metric | Without Stack | With Stack | Improvement |
|--------|---------------|------------|-------------|
| Test coverage | 40% | 80%+ | 2x |
| Bugs in production | 5/sprint | 1/sprint | 80% reduction |
| Code review feedback | 10 comments | 2 comments | 80% reduction |
| Refactor frequency | Monthly | Rarely | 90% reduction |

---

---

## Troubleshooting

### Common Issue: Parallel Sessions Stepping on Each Other

**Symptom:** Running 5 parallel sessions as Boris Cherny recommends, but agents are making conflicting changes to the same files.

**Cause:** Sessions share the codebase but aren't assigned to isolated branches/worktrees.

**Fix:**
1. Always assign each session to its own branch:
```markdown
# CLAUDE.md Session Assignment
- Session 1: Feature A (branch: feat/a)
- Session 2: Feature B (branch: feat/b)
```
2. Use git worktrees for true isolation:
```bash
git worktree add ../session-1 -b feat/a
git worktree add ../session-2 -b feat/b
# Run each Claude session in its own worktree directory
```
3. Add file-path guards to each session's instructions:
```markdown
Session 1: ONLY modify files under src/auth/
Session 2: ONLY modify files under src/payments/
```

### Common Issue: Unhobbled Stack Overwhelming Beginners

**Symptom:** Tried to set up the full Unhobbled stack and now nothing works - hooks conflict, subagents fail, Ralph doesn't iterate.

**Cause:** Implementing all components at once without understanding each one individually.

**Fix:**
Follow the implementation order strictly:
```
Week 1: Just Hooks (formatting, notifications)
Week 2: Add subagent delegation
Week 3: Add adversarial validation
Week 4: Configure Ralph loops
Week 5: Add voice (optional)
Week 6: LSP integration
```

If stuck, strip back to basics:
```bash
# Remove all advanced configuration
rm ~/.claude/settings.json
rm -rf ~/.claude/hooks/
# Start fresh with just one component
```

### Common Issue: Compounding Learning Stack Not Compounding

**Symptom:** Running Ralph loops with archives, but learnings from previous runs aren't being applied to new iterations.

**Cause:** The prompt doesn't instruct Claude to check archives, or learnings.md is empty/outdated.

**Fix:**
1. Verify the archive check is in your prompt:
```bash
# ralph.sh should include:
claude "Review plans/prd.json and plans/progress.txt.
  Check plans/archive/learnings.md for previous insights.
  ..."
```
2. After each run, extract learnings (human-in-loop):
```bash
# Manually or with Claude
claude "Review plans/archive/run-*-progress.txt and extract 3-5 key learnings.
  Append to plans/archive/learnings.md"
```
3. Check that learnings.md has content:
```bash
cat plans/archive/learnings.md
# Should show patterns, not be empty
```

### Common Issue: Cost Explosion with Production Multi-Agent

**Symptom:** Multi-agent setup is working but costs $200+/day, making it unsustainable.

**Cause:** Opus is being used for everything, or agents are doing unnecessary work.

**Fix:**
1. Implement strict tiered model selection:
```json
{
  "model_selection": {
    "research_tasks": "haiku",
    "simple_edits": "haiku",
    "implementation": "sonnet",
    "architecture_decisions": "opus"
  }
}
```
2. Add task filtering - not everything needs an agent:
```markdown
# Before spawning an agent, ask:
- Is this task >10 minutes for a human? → Agent
- Is this <5 lines of code? → Direct edit, no agent
```
3. Set daily budget caps:
```bash
# Track spending
echo "$(date): $DAILY_SPEND" >> ~/.claude/cost-log.txt
# Alert at threshold
if [ "$DAILY_SPEND" -gt 50 ]; then
  curl -d "Budget alert: $DAILY_SPEND" ntfy.sh/my-alerts
fi
```

### Common Issue: Adversarial Validation Blocking All Progress

**Symptom:** Added adversarial review agents but they keep rejecting implementations, and nothing gets merged.

**Cause:** Adversarial agent is too strict, or there's no escalation path for disagreements.

**Fix:**
1. Calibrate the adversarial agent's threshold:
```markdown
# In adversarial agent prompt
Reject ONLY for:
- Security vulnerabilities
- Breaking existing tests
- Clear logic errors

Do NOT reject for:
- Style preferences
- "Could be cleaner"
- Minor performance concerns
```
2. Add escalation for disagreements:
```markdown
If you reject 3 implementations in a row for the same task:
1. Summarize the core disagreement
2. Ask orchestrator to involve human
3. Do not block further iterations
```
3. Use "soft" rejection (suggestion) vs "hard" rejection (block):
```markdown
Output "SUGGESTION: ..." for style issues (implementation continues)
Output "BLOCKED: ..." for critical issues (implementation stops)
```

### Common Issue: Voice Interface Misinterpreting Prompts

**Symptom:** Using STT/TTS for mobile development but Claude frequently misunderstands dictated instructions.

**Cause:** Speech recognition errors compound into confusing prompts, especially with technical terms.

**Fix:**
1. Use code words for common technical terms:
```markdown
# Train yourself to say:
"open paren" → (
"close curly" → }
"snake case" → _
"camel case" → uppercase next letter
```
2. Confirm before executing:
```markdown
# Configure Claude to repeat back understanding
Always restate my request before executing:
"I understood: [paraphrase]. Is this correct?"
```
3. Keep dictated prompts high-level:
```markdown
# Good (voice): "Add error handling to the auth module"
# Bad (voice): "Add try catch with error dot message logging"
```
4. Use voice for direction, keyboard for precision:
```markdown
# Voice: "Find the auth bug"
# Claude shows options
# Keyboard: "Fix option 2, use bcrypt"
```

---

## Tags

`#higher-order` `#combinations` `#stacks` `#synergy` `#unhobbled` `#boris-cherny` `#cc-mirror` `#ralph` `#compounding` `#multi-agent` `#production` `#cost-optimization` `#parallel-sessions` `#hooks` `#subagents` `#adversarial` `#voice` `#mobile` `#enterprise`

---

## Sources

1. @EricBuess - "Unhobbled" Claude Code philosophy
2. Boris Cherny - Claude Code creator workflow
3. @steve_yegge - Gas Town multi-agent patterns
4. @nummanali - CC Mirror orchestration
5. @ryancarson - Ralph compounding patterns
6. @ghuntley - Original Ralph concept
7. @mattpocockuk - Ralph popularization
8. @dabit3 - Mobile/async workflows
9. Community patterns from extractions

---

*This document synthesizes patterns from the Claude Code power user community. Implementation difficulty varies; start with foundations and build up.*
