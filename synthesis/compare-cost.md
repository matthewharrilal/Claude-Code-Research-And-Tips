---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-operations Section 2 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Cost-Optimized Architecture Design

A comprehensive guide to balancing cost versus capability when building AI agent systems with Claude Code.

> **You Are Here:** This document provides cost optimization strategies, model selection guidance, and budget engineering for Claude Code usage. Use this when API costs are becoming a concern or when planning budget for autonomous workflows.

---

## Table of Contents

1. [Cost Factors](#cost-factors)
2. [Model Selection Strategy](#model-selection-strategy)
3. [Cost-Saving Patterns](#cost-saving-patterns)
4. [Per-Pattern Cost Analysis](#per-pattern-cost-analysis)
5. [Cost Calculator](#cost-calculator)
6. [Budget Engineering](#budget-engineering)
7. [ROI Analysis](#roi-analysis)
8. [Real-World Cost Reports](#real-world-cost-reports)
9. [Cost Optimization Checklists](#cost-optimization-checklists)
10. [Advanced Strategies](#advanced-strategies)

---

## Cost Factors

Understanding the four primary cost vectors is essential for optimization:

### 1. Model Selection

The most impactful cost lever. Price differential is dramatic:

| Model | Input (per 1M tokens) | Output (per 1M tokens) | Cost Multiplier |
|-------|----------------------|------------------------|-----------------|
| **Claude 3.5 Haiku** | $0.25 | $1.25 | 1x (baseline) |
| **Claude Sonnet 4** | $3.00 | $15.00 | 12x |
| **Claude Opus 4.5** | $15.00 | $75.00 | 60x |

**Key Insight:** Opus output is **60x more expensive** than Haiku output. A 1000-token response costs $0.00125 with Haiku vs $0.075 with Opus.

### 2. Token Usage (Context Size)

Context accumulation is the silent cost killer:

| Context State | Token Range | Cost Implication |
|---------------|-------------|------------------|
| Fresh context | 0-20K | Optimal efficiency |
| Working context | 20K-100K | Normal operation |
| Heavy context | 100K-150K | Diminishing returns |
| Context rot zone | 150K-200K | Quality degrades, waste increases |

**Fresh Context Principle:** Each fresh session avoids the "context rot" problem where LLMs get progressively less effective as context grows.

### 3. Iteration Count

More iterations = more cost, but relationship isn't linear:

| Iterations | Typical Use Case | Cost Curve |
|------------|------------------|------------|
| 1-5 | Simple features | Linear |
| 5-15 | Standard features | Linear + overhead |
| 15-30 | Complex features | Sublinear (learning compounds) |
| 30-50+ | Large systems | Variable (depends on verification) |

**Insight:** Good planning upfront reduces iterations by 50-80%.

### 4. Parallelism

Parallel agents multiply costs but can reduce calendar time:

```
Sequential (1 agent, 10 tasks):
Time: 10 hours | Cost: 10 agent-hours

Parallel (5 agents, 10 tasks):
Time: 2 hours | Cost: 10 agent-hours (same total)

BUT: Parallel often requires coordination overhead (+10-20%)
```

---

## Model Selection Strategy

### When to Use Opus 4.5

**Opus is the premium tier ($15/$75 per 1M tokens)**

Use Opus for:

| Use Case | Why Opus | Cost Justification |
|----------|----------|-------------------|
| **Complex reasoning** | Multi-step logic, nuanced decisions | Fewer retries save money |
| **Orchestration decisions** | Task decomposition, dependency planning | Architecture errors expensive to fix |
| **Architecture planning** | System design, technology choices | Bad architecture = massive rework |
| **Quality-critical work** | Security review, production debugging | Bugs in production cost more than Opus |
| **Ambiguous requirements** | Clarifying vague specs | Misunderstanding wastes entire iterations |

**Rule of Thumb:** If a mistake at this step would cascade into expensive rework, use Opus.

### When to Use Sonnet

**Sonnet is the workhorse tier ($3/$15 per 1M tokens)**

Use Sonnet for:

| Use Case | Why Sonnet | Cost Justification |
|----------|------------|-------------------|
| **General implementation** | Writing code to spec | Fast, capable, cost-effective |
| **Worker tasks** | Following established patterns | Clear instructions don't need Opus |
| **Most coding work** | Features, bug fixes, refactoring | Sweet spot of capability/cost |
| **Test generation** | Writing test cases | Pattern-following task |
| **Code review** | Reviewing PRs, suggesting improvements | Good judgment, not maximum reasoning |

**Default Choice:** Start with Sonnet. Only upgrade to Opus if Sonnet fails or task requires complex reasoning.

### When to Use Haiku

**Haiku is the efficiency tier ($0.25/$1.25 per 1M tokens)**

Use Haiku for:

| Use Case | Why Haiku | Cost Justification |
|----------|-----------|-------------------|
| **Simple tasks** | File lookups, greps, formatting | No reasoning required |
| **Testing/verification** | Running tests, checking status | Pass/fail determination |
| **High-volume work** | Bulk operations, repetitive tasks | Volume makes cost critical |
| **Errand running** | Fetch files, simple transformations | CC Mirror's "spawn 5-10 in parallel" |
| **Health checks** | Monitoring, status polling | Simple queries |

**The Haiku Army:** For embarrassingly parallel tasks, 10 Haiku workers often outperform 1 Opus at 1/60th the cost.

### Model Selection by Role (Gas Town Framework)

| Role | Recommended Model | Hourly Cost Est. | Rationale |
|------|-------------------|------------------|-----------|
| **Mayor** (coordination) | Opus 4.5 | $15-20 | Complex cross-rig decisions |
| **Refinery** (decomposition) | Opus 4.5 | $15-20 | Task breakdown is architectural |
| **Dogs** (quality gates) | Sonnet | $5-8 | Review requires judgment |
| **Polecat** (named workers) | Sonnet | $5-10 | Implementation work |
| **Witness** (observation) | Haiku | $1-3 | Logging, status tracking |
| **Deacon** (health checks) | Haiku | $1-2 | Simple monitoring |
| **Crew** (ephemeral) | Haiku | $0.50-2 | Quick, isolated tasks |

---

### Checkpoint: Cost Factors
**You should now understand:**
- [ ] The four primary cost factors (Model, Tokens, Iterations, Parallelism)
- [ ] The dramatic price differences between Haiku, Sonnet, and Opus
- [ ] When to use each model tier based on task requirements
- [ ] The "context rot" problem and why fresh context saves money

**If unclear:** Re-read the Model Selection Strategy section, especially the tables showing when to use each model.

---

## Cost-Saving Patterns

### Pattern 1: Fresh Context (Ralph Wiggum)

The Ralph pattern uses fresh context per iteration rather than growing conversations.

**How it saves money:**
```
Traditional long session:
├── Iteration 1: 10K context
├── Iteration 5: 50K context (5x input cost)
├── Iteration 10: 100K context (10x input cost)
└── Quality degrading, more retries needed

Ralph fresh context:
├── Iteration 1: 10K context
├── Iteration 5: 10K context (same cost)
├── Iteration 10: 10K context (same cost)
└── Quality maintained, fewer retries
```

**Cost Math:**
- Long session (10 iterations, growing context): ~$5-10
- Ralph (10 iterations, fresh context): ~$2-4
- **Savings: 50-60%**

**Implementation:**
```bash
for (( i=1; i<=$MAX_ITERATIONS; i++ )); do
  claude "Read prd.json and progress.txt. Work on one feature..."
  # Fresh context each iteration!
done
```

### Pattern 2: Worker Model Selection

Tiered model selection for orchestrated systems:

```
orchestrator: opus (planning, coordination)
    └── workers: sonnet (implementation)
            └── verification: haiku (testing)
```

**Cost comparison:**
```
All-Opus workflow:      $100 (baseline)
Tiered workflow:        $35 (-65%)
Aggressive Haiku use:   $20 (-80%)
```

**CC Mirror Worker Preamble:**
```markdown
CONTEXT: You are a WORKER agent, not an orchestrator.

RULES:
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, etc.)
- Do NOT spawn sub-agents
- Do NOT call TaskCreate or TaskUpdate
- Report your results with absolute file paths
```

### Pattern 3: Early Exit (Promise Pattern)

Stop when done, don't iterate unnecessarily:

```bash
if grep -q "<promise>COMPLETE</promise>" output.txt; then
  echo "Done early!"
  break
fi
```

**Cost impact:**
- Without early exit: Always runs MAX_ITERATIONS
- With early exit: Average 60-70% of MAX_ITERATIONS
- **Savings: 30-40% on iteration costs**

### Pattern 4: Prompt Caching

Anthropic's prompt caching provides 90% discount on cached content:

| Model | Cache Write (per 1M) | Cache Read (per 1M) | Savings |
|-------|---------------------|---------------------|---------|
| Haiku | $0.30 | $0.03 | 90% |
| Sonnet | $3.75 | $0.30 | 90% |
| Opus | $18.75 | $1.50 | 90% |

**Implementation:**
```python
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    system=[{
        "type": "text",
        "text": "Large static system prompt...",
        "cache_control": {"type": "ephemeral"}  # Cache this!
    }],
    messages=[{"role": "user", "content": "Variable query"}]
)
```

**Best for:** Large system prompts (1000+ tokens), repeated similar requests

### Pattern 5: Batches API

50% discount for non-urgent workloads:

```python
batch = client.batches.create(
    requests=[
        {"custom_id": "req1", "params": {...}},
        {"custom_id": "req2", "params": {...}},
        # Up to 100,000 requests per batch
    ]
)
```

**Best for:** Bulk document processing, overnight analysis, test generation at scale

### Pattern 6: Subagent Token Isolation

Protect main context from expensive operations:

```
Main Agent (lean)
    │
    └── Subagent: Browser Automation
        └── (High token cost stays isolated)
        └── Returns: Summary only
```

**Quote from @TendiesOfWisdom:**
> "The feedback loop is everything, but put costly tools like browser control in subagents to protect your main context window tokens"

**Savings:** 50-70% for browser/MCP-heavy workflows

### Pattern 7: Output Length Control

Output tokens cost 5x more than input for most models:

```python
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=500,  # Hard limit
    messages=[{
        "role": "user",
        "content": """
        Respond in 3-5 sentences maximum.
        Use bullet points, not paragraphs.
        Skip preambles and conclusions.
        """
    }]
)
```

**Savings:** 50-80% on output tokens

---

## Per-Pattern Cost Analysis

### Pattern Cost Comparison

| Pattern | Typical Cost | Duration | Token Usage | Best For |
|---------|--------------|----------|-------------|----------|
| **Basic Ralph (10 iter)** | $2-5 | 30-60 min | 30K-100K/iter | Single features |
| **Extended Ralph (25 iter)** | $8-15 | 2-4 hours | 75K-375K total | Complex features |
| **Overnight Ralph (50 iter)** | $20-50 | 6-12 hours | 150K-750K total | Full components |
| **CC Mirror (5 workers)** | $5-15 | 30-60 min | Parallel execution | Team coordination |
| **CC Mirror (full team)** | $15-40 | 1-3 hours | Heavy parallel | Complex projects |
| **Gas Town (minimal)** | $50-100/day | Continuous | Multiple accounts | Solo founder |
| **Gas Town (full)** | $200-500/day | Continuous | Heavy multi-agent | Teams, agencies |

### Cost by Orchestration Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                    COST vs COMPLEXITY                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  $$$$$  ┌─────────────────────────────────────┐                │
│         │                        Gas Town     │                │
│  $$$$   │                        (Full)       │                │
│         │                                     │                │
│  $$$    │              Gas Town               │                │
│         │              (Minimal)   Orchestra  │                │
│  $$     │    CC Mirror            ╱           │                │
│         │    (Full)    ╱                      │                │
│  $      │    CC Mirror╱    Ralph (Extended)   │                │
│         │    (3-cmd)       ╱                  │                │
│  ¢      │  Ralph (Basic)  ╱                   │                │
│         └─────────────────────────────────────┘                │
│         SIMPLE ──────────────────────────── COMPLEX            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Real Cost Examples from Community

| User | Pattern | Task | Cost Reported |
|------|---------|------|---------------|
| @arvidkahl | Ralph (50 iter) | Feature build | $50-100+ |
| @ryancarson | Ralph (14 iter) | Income tool | ~$10-15 est. |
| @steve_yegge | Gas Town | Daily usage | "Expensive as hell" |
| @dabit3 | Cloud VM + API | Mobile setup | ~$7/day infra + API |

---

## Cost Calculator

### Formula

```
Total Cost = Context Cost + Iteration Cost + Parallelism Overhead

Where:
  Context Cost = tokens_per_iteration × model_rate × iterations
  Iteration Cost = (setup_tokens + task_tokens + verification_tokens) × model_rate
  Parallelism Overhead = worker_count × coordination_tokens × model_rate
```

### Quick Estimation Table

| Variable | Haiku | Sonnet | Opus |
|----------|-------|--------|------|
| Cost per 1K input tokens | $0.00025 | $0.003 | $0.015 |
| Cost per 1K output tokens | $0.00125 | $0.015 | $0.075 |
| Typical iteration cost | $0.05-0.20 | $0.50-2.00 | $2.00-5.00 |
| Worker-hour estimate | $1-3 | $5-10 | $15-20 |

### Worked Example: 10-Iteration Ralph Loop

**Scenario:** Building a REST API feature

```
Per iteration:
- Input: 8K tokens (prd.json, progress.txt, code context)
- Output: 2K tokens (implementation, commit)
- Model: Sonnet

Cost per iteration:
- Input: 8K × $0.003/1K = $0.024
- Output: 2K × $0.015/1K = $0.030
- Total: $0.054

10 iterations: $0.54

With overhead (tools, verification): ~$1-2 total
```

**Comparison by model:**
- Haiku: ~$0.15-0.30
- Sonnet: ~$1-2
- Opus: ~$6-10

---

## Budget Engineering

### Setting Limits

#### Token Caps

```python
class BudgetManager:
    def __init__(self, daily_limit: float, monthly_limit: float):
        self.daily_limit = daily_limit
        self.monthly_limit = monthly_limit

    def check_budget(self, estimated_cost: float) -> tuple[bool, str]:
        if self.daily_spend + estimated_cost > self.daily_limit:
            return False, f"Daily limit ${self.daily_limit} exceeded"
        return True, "OK"
```

#### Max Iterations

```bash
# Always set a safety backstop
MAX_ITERATIONS=25  # Never more than this
./ralph.sh $MAX_ITERATIONS
```

#### Model Fallbacks

```yaml
# ~/.gt/config.yaml (Gas Town example)
roles:
  polecat:
    primary: sonnet-4
    fallback: haiku-3.5  # Use when rate limited or budget constrained
  crew:
    primary: haiku-3.5
    fallback: none  # Fail rather than escalate
```

### Monitoring

#### Real-time Tracking

```bash
# Track usage per interaction
echo "$(date -Iseconds),${ROLE},${TOKENS},${COST}" >> ~/.claude/cost-log.csv
```

#### Claude HUD Integration

```
[Opus 4.5] ████████░░ 35% | 1 MCPs | ⏳ 1m
✓ Read x2 | ✓ WebFetch x1 | ✓ Skill x1 | ✓ Edit x1
```

Shows context percentage, helping you know when to compact or reset.

### Alert Thresholds

| Level | Trigger | Action |
|-------|---------|--------|
| Warning | 50% of daily budget | Log, continue |
| Critical | 80% of daily budget | Alert (Slack/email) |
| Pause | 95% of daily budget | Pause non-critical work |
| Shutdown | 100% of daily budget | Stop all work |

### Budget Tiers by Use Case

| User Type | Monthly Budget | Recommended Setup |
|-----------|----------------|-------------------|
| **Hobbyist** | $20-50 | Pro subscription, occasional API |
| **Solo dev** | $100-300 | Ralph loops, Sonnet-heavy |
| **Power user** | $500-1000 | CC Mirror, tiered models |
| **Team** | $1000-3000 | Gas Town minimal, shared infra |
| **Agency** | $3000-10000 | Gas Town full, multi-project |

---

## ROI Analysis

### Investment vs Return

| Investment | Setup Cost | Ongoing Cost | Return |
|------------|------------|--------------|--------|
| **Ralph setup** | 1 hour | ~$2-10/feature | Overnight shipping capability |
| **CC Mirror** | 5 minutes | ~$5-20/session | 3-5x parallelism |
| **Gas Town** | Hours/days | $200-500/day | 10+ agent orchestration |
| **Claude HUD** | 5 minutes | Free | Context awareness |
| **Prompt caching** | 30 minutes | -90% on cached | Major savings at scale |

### Break-Even Analysis

**When does optimization pay off?**

```
Prompt caching setup: 30 minutes
Prompt caching savings: 90% on 5K+ token system prompts

Break-even:
- If system prompt = 5K tokens, used 100x/day
- Uncached cost: 5K × 100 × $0.015/1K = $7.50/day
- Cached cost: 5K × 100 × $0.00375/1K = $1.88/day
- Savings: $5.62/day
- Break-even: <1 day
```

**Model tiering setup: 1 hour**
```
Current: All Opus
Optimized: 80% Sonnet, 20% Opus (complex only)

If daily spend = $50 on Opus:
- After optimization: ~$15/day
- Savings: $35/day
- Break-even: <1 hour
```

### Value Multiplication

| Pattern | Cost | Developer Time Saved | Value Multiplier |
|---------|------|---------------------|------------------|
| Ralph overnight | $20 | 8 hours | 40x at $100/hr |
| CC Mirror parallel | $15 | 4 hours | 27x at $100/hr |
| Haiku army for bulk | $5 | 2 hours | 40x at $100/hr |

**The fundamental equation:**
```
If AI_cost < (Developer_hourly_rate × Hours_saved × Quality_factor)
Then: Use AI
```

---

## Real-World Cost Reports

### Community Data Points

| Source | Setup | Usage | Reported Cost |
|--------|-------|-------|---------------|
| **@arvidkahl** | Ralph loops | 50 iterations | $50-100+ |
| **@dabit3** | Cloud VM + API | Mobile setup | ~$7/day (VM) + API |
| **@steve_yegge** | Gas Town | Production | "Multiple Claude accounts" |
| **Pro subscription** | Claude.ai | Interactive | $20/month |
| **Max subscription** | Claude.ai | Heavy use | $100/month (est.) |

### Monthly Cost by Usage Pattern

| Usage Pattern | Model Mix | Estimated Monthly Cost |
|---------------|-----------|------------------------|
| Light (1-2 hrs/day) | Sonnet-heavy | $20-50 |
| Moderate (4-6 hrs/day) | Mixed | $100-200 |
| Heavy (8+ hrs/day) | Opus-heavy | $300-500+ |
| Power user (loops) | Mixed + automation | $500-1000+ |

### Cost Reduction Case Study

**Code Review Pipeline Optimization:**

```
Unoptimized:
- Full codebase context: 100K tokens
- Opus for everything: $1.50/review
- 50 PRs/week = $75/week = $300/month

Optimized:
- Git diff only: 5K tokens
- Tiered: Haiku for lint, Sonnet for logic, Opus for architecture
- Prompt caching for instructions
- $0.05-0.10/review
- 50 PRs/week = $5/week = $20/month

Savings: 93% ($280/month)
```

---

## Cost Optimization Checklists

### Daily Optimization Checklist

- [ ] Start with correct model for task (default: Sonnet, upgrade if needed)
- [ ] Use Claude HUD to monitor context usage
- [ ] Compact or reset before hitting 80% context
- [ ] Keep responses concise (set max_tokens limits)
- [ ] Stop VMs when not in use
- [ ] Check for early exit conditions (promise complete)

### Weekly Optimization Review

- [ ] Review Anthropic Console usage dashboard
- [ ] Identify most expensive sessions/tasks
- [ ] Consider batching for bulk work done this week
- [ ] Update CLAUDE.md with learned patterns (reduces re-explaining)
- [ ] Evaluate if subscription tier is appropriate
- [ ] Archive completed PRD files for future learning

### Per-Project Optimization

- [ ] Set up prompt caching for large system prompts
- [ ] Configure appropriate model defaults in CLAUDE.md
- [ ] Create cost-aware slash commands
- [ ] Set up subagent patterns for expensive tools (browser, etc.)
- [ ] Establish verification loops (fewer wasted iterations)
- [ ] Define early exit conditions

### Before Starting Expensive Work

- [ ] Is this the right model tier? (Haiku → Sonnet → Opus)
- [ ] Can this be parallelized with cheaper models?
- [ ] Is the task well-defined? (vague = expensive)
- [ ] Are verification steps in place? (catch failures early)
- [ ] Is there an early exit condition?
- [ ] Has similar work been cached?

---

## Advanced Strategies

### Dynamic Model Routing

Automatically select model based on task complexity:

```python
def classify_complexity(query: str) -> str:
    simple_patterns = [r'^(list|show|get|find)\s', r'^what is\s']
    complex_patterns = [r'\b(architect|design|strategy)\b', r'\b(why|analyze)\b.*\b(and|vs)\b']

    for pattern in simple_patterns:
        if re.search(pattern, query.lower()):
            return "claude-haiku-3-5-20241022"

    for pattern in complex_patterns:
        if re.search(pattern, query.lower()):
            return "claude-opus-4-5-20251101"

    return "claude-sonnet-4-20250514"  # Default
```

### Fallback Cascade

Start cheap, escalate on failure:

```python
MODELS = ["claude-haiku-3-5-20241022", "claude-sonnet-4-20250514", "claude-opus-4-5-20251101"]

for model in MODELS:
    response = client.messages.create(model=model, ...)
    if is_high_quality(response):
        return response  # Success with cheapest capable model
    # Else try next tier
```

### Semantic Caching

Cache semantically similar queries, not just exact matches:

```python
from sentence_transformers import SentenceTransformer

def semantic_cache_query(new_prompt: str, threshold: float = 0.95):
    new_embedding = embedder.encode(new_prompt)

    for cached_embedding, response in cache.items():
        if similarity(new_embedding, cached_embedding) > threshold:
            return response  # Cache hit on similar query!

    return call_api(new_prompt)  # Cache miss
```

### Token Compression

Reduce input tokens for data-heavy prompts:

```python
# Before (89 tokens prose):
"Based on my analysis, I found three issues..."

# After (47 tokens JSON):
{"issues": [{"line": 42, "type": "null_pointer"}, ...]}

# Savings: 47%
```

### Cost Attribution

Track costs by project/user for accountability:

```python
class CostTracker:
    def track(self, project: str, user: str, cost: float, model: str):
        self.costs[project][user] += cost
        self.costs[project][f"model:{model}"] += cost

    def report(self, project: str) -> dict:
        return dict(self.costs[project])
```

---

## Summary: Top 10 Cost Optimization Strategies

| Rank | Strategy | Potential Savings | Effort |
|------|----------|-------------------|--------|
| 1 | **Model selection** (Haiku/Sonnet over Opus) | 60-95% | Low |
| 2 | **Prompt caching** for large system prompts | 90% on cached | Low |
| 3 | **Batches API** for bulk work | 50% | Medium |
| 4 | **Output length limits** | 50-80% | Low |
| 5 | **Subagent delegation** for expensive tools | 50-70% | Medium |
| 6 | **Fresh context** (Ralph pattern) | 60-80% | Medium |
| 7 | **Early exit conditions** | 30-40% | Low |
| 8 | **Concise prompts** | 10-50% | Low |
| 9 | **Context monitoring** (Claude HUD) | 20-30% | Low |
| 10 | **Model fallback cascade** | 40-60% | Medium |

---

## The Philosophy: Cost as a Feature

Steve Yegge's warning about Gas Town applies broadly:

> "If you care about costs, don't use this."

But for most of us, cost matters. The key is **intentional spending**:

1. **Know your break-even:** Developer time saved vs API cost
2. **Right-size models:** Don't use Opus where Haiku suffices
3. **Invest in infrastructure:** Caching, monitoring, batching pay dividends
4. **Accept imperfection:** Some rework is cheaper than over-engineering
5. **Measure and iterate:** Track costs, optimize what matters

**The winning formula:**
```
Fresh context + Tiered models + Early exit + Verification = Maximum value per dollar
```

---

## Tags

`#cost-optimization` `#model-selection` `#pricing` `#tokens` `#caching` `#batching` `#ralph-wiggum` `#cc-mirror` `#gas-town` `#budget-engineering` `#roi-analysis` `#haiku` `#sonnet` `#opus`

---

## Troubleshooting

### Common Issue: Unexpected High Costs
**Symptom:** API bill much higher than estimated; daily budget exceeded quickly.
**Cause:** Using Opus for simple tasks, context accumulation, or workers spawning sub-workers.
**Fix:** Audit your model selection. Check Claude HUD for context percentage. Review worker preambles.

```bash
# Check Anthropic Console for usage breakdown
# https://console.anthropic.com/settings/usage

# Quick local cost estimation (if tracking)
cat ~/.claude/cost-log.csv | tail -20
```

### Common Issue: Ralph Loop Costs More Than Expected
**Symptom:** 25-iteration loop costs $50+ instead of expected $10-20.
**Cause:** Context not actually resetting between iterations; large progress.txt being loaded.
**Fix:** Verify loop script starts fresh Claude instance each iteration. Prune progress.txt regularly.

```bash
# Check progress.txt size
wc -l scripts/ralph/progress.txt

# If too large, archive and reset
mv scripts/ralph/progress.txt scripts/ralph/progress-archive-$(date +%Y%m%d).txt
echo "# Progress" > scripts/ralph/progress.txt
```

### Common Issue: Model Tier Confusion
**Symptom:** Tasks failing with Haiku that should work; overspending on Opus for simple tasks.
**Cause:** Incorrect task-to-model matching; not testing with cheaper models first.
**Fix:** Default to Sonnet. Only use Haiku for truly simple tasks (lookups, status checks). Only use Opus for complex reasoning or architecture decisions.

### Common Issue: Prompt Caching Not Working
**Symptom:** Expecting 90% savings but seeing full prices.
**Cause:** Cache control not properly configured; prompts too small to cache; TTL expired.
**Fix:** Verify `cache_control` is set on system prompts. Ensure prompts are > 1024 tokens. Check cache hit rates in API response.

```python
# Verify cache is being used
response = client.messages.create(...)
print(f"Cache read tokens: {response.usage.cache_read_input_tokens}")
print(f"Cache creation tokens: {response.usage.cache_creation_input_tokens}")
```

### Common Issue: Budget Alerts Not Firing
**Symptom:** Exceeded budget without notification; discovered overspend days later.
**Cause:** No monitoring in place; Anthropic Console alerts not configured.
**Fix:** Set up Anthropic Console budget alerts. Add local tracking to your workflow.

```bash
# Add to ralph.sh or similar
COST_FILE=~/.claude/cost-log.csv
DAILY_LIMIT=50

TODAY_SPEND=$(awk -F',' -v d=$(date +%Y-%m-%d) '$1 ~ d {sum+=$4} END {print sum}' $COST_FILE)
if (( $(echo "$TODAY_SPEND > $DAILY_LIMIT" | bc -l) )); then
  echo "WARNING: Daily spend ($TODAY_SPEND) exceeds limit ($DAILY_LIMIT)"
  # Send alert via Slack webhook, email, etc.
fi
```

### Common Issue: Parallel Workers Duplicating Work
**Symptom:** Multiple workers doing same task; costs 3-5x higher than expected for parallel work.
**Cause:** Poor task decomposition; workers not aware of each other's assignments.
**Fix:** Ensure orchestrator assigns unique, non-overlapping tasks. Add task ID to each worker context.

---

*Document created: 2026-01-09*
*Sources: Cost optimization research, Ralph research, Gas Town research, CC Mirror research, orchestration taxonomy*
