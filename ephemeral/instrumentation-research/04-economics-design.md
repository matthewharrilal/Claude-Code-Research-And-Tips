# Economics & Cost Instrumentation Design

## 1. Pricing Foundation

All cost estimates use **Claude Opus 4.6 API pricing** (February 2026, source: [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)):

| Rate Category | Price per Million Tokens |
|---|---|
| **Base Input** | $5.00 |
| **Output** | $25.00 |
| **Cache Write (5min)** | $6.25 |
| **Cache Hit** | $0.50 |
| **Batch Input** | $2.50 |
| **Batch Output** | $12.50 |
| **Fast Mode Input** | $30.00 |
| **Fast Mode Output** | $150.00 |

**Claude Code context:** Claude Code runs via API. Each agent (spawned via `Task` tool) is a separate API conversation. The orchestrator (team lead) is itself an API conversation. Costs compound because:
1. Every agent gets the Claude Code system prompt (~2,000 tokens overhead)
2. Every agent gets tool definitions (~346 tokens for tool-use system prompt + per-tool definitions)
3. CLAUDE.md files auto-load on directory entry (design-system/CLAUDE.md alone is ~5,000 words = ~6,700 tokens)
4. Multi-turn conversations accumulate: each new message re-sends the full conversation history

**Key insight for Claude Code agents:** We cannot directly observe token counts per subagent. Claude Code's `Task` tool spawns agents as black boxes -- we see only their file outputs and timing. All cost estimation is therefore PROXY-based.

---

## 2. Token Estimation Methodology

### 2.1 The Words-to-Tokens Conversion

Standard approximation: **1 token ~= 0.75 words** (English text). For code/HTML: **1 token ~= 3-4 characters**.

Calibration from actual pipeline artifacts:

| File | Words | Chars | Est. Tokens (words/0.75) | Est. Tokens (chars/4) | Use |
|---|---|---|---|---|---|
| p0-content-map.md | 832 | 5,659 | 1,109 | 1,415 | ~1,250 |
| p1-execution-brief.md | 3,102 | 20,957 | 4,136 | 5,239 | ~4,500 |
| p2-yegge-gas-town.html | 8,342 | 97,744 | 11,123 | 24,436 | ~18,000* |
| p3b-pa-auditor-A.md | 4,416 | 30,392 | 5,888 | 7,598 | ~6,500 |
| p3c-weaver-diagnostic.md | 4,353 | 29,250 | 5,804 | 7,313 | ~6,300 |

*HTML is character-heavy (CSS, tags, attributes), so token count skews toward the chars/4 estimate.

**Recommended proxy formula:**
- **Markdown/prose:** `tokens = words / 0.75` (word-based)
- **HTML/CSS/JS:** `tokens = chars / 3.5` (char-based)
- **Mixed files:** `tokens = (words / 0.75 + chars / 4) / 2` (average)

### 2.2 Input Token Budget Per Agent Role

Every agent reads a combination of pipeline infrastructure files + task-specific files. The infrastructure overhead is roughly constant; task files vary.

**Fixed overhead per agent (Claude Code system + tools + CLAUDE.md auto-loads):**

| Component | Est. Tokens |
|---|---|
| Claude Code system prompt | ~2,000 |
| Tool definitions (10-15 tools) | ~3,500 |
| design-system/CLAUDE.md (auto-load) | ~6,700 |
| design-system/pipeline/CLAUDE.md (auto-load) | ~2,200 |
| compositional-core/CLAUDE.md (auto-load) | ~1,500 |
| **Subtotal: Fixed overhead** | **~15,900** |

**Note:** Prompt caching likely reduces this. If Claude Code uses 5-min caching, the first agent in a session pays full price, subsequent agents pay cache-hit rate ($0.50/MTok instead of $5.00/MTok = 90% savings on repeated context).

**Variable input by role:**

| Agent Role | Files Read | Words | Est. Input Tokens |
|---|---|---|---|
| **Content Analyst (P0)** | Source content + MANIFEST | ~18,000 | ~24,000 |
| **Brief Assembler (P1)** | Content map + routing + TC brief template + value tables + identity-perception + mechanism catalog | ~30,000 | ~40,000 |
| **Builder Pass A (P2A)** | Brief + recipe + prohibitions + tokens.css + components.css + mechanism catalog | ~25,000 | ~33,000 |
| **Builder Pass B / REFINE (P2B)** | Existing HTML + enrichment recipe + conviction brief + artistic weaver | ~20,000 | ~27,000 |
| **Gate Runner (P3A)** | HTML artifact + gate-runner-core.js (executed, not LLM) | N/A (JS execution) | ~0 LLM tokens |
| **PA Auditor (P3B) x9** | Screenshots (via Read) + PA questions subset + guardrails + HTML | ~12,000 | ~16,000 each |
| **Integrative Auditor (P3B)** | 9 PA reports + deployment protocol | ~35,000 | ~47,000 |
| **Weaver (P3C)** | 9 PA reports + integrative + weaver protocol | ~40,000 | ~53,000 |

### 2.3 Output Token Budget Per Agent Role

Measured from the Yegge Gas Town live run:

| Agent Role | Output File(s) | Lines | Words | Est. Output Tokens |
|---|---|---|---|---|
| **Content Analyst** | p0-content-map.md | 70 | 832 | ~1,100 |
| **Brief Assembler** | p1-execution-brief.md | 272 | 3,102 | ~4,100 |
| **Builder Pass A** | p2-yegge-gas-town.html | 2,931 | 8,342 | ~18,000 |
| **Builder REFINE** | p2-yegge-gas-town.html (edited) | ~500 delta | ~2,000 delta | ~5,000 |
| **Gate Runner** | p3a-gate-results.json | ~150 | ~500 | ~700 |
| **PA Auditor (avg)** | p3b-pa-auditor-X.md | 315 avg | ~4,000 avg | ~5,300 each |
| **Integrative** | p3b-integrative.md | 217 | ~2,500 | ~3,300 |
| **Weaver (diagnostic)** | p3c-weaver-diagnostic.md | 301 | 4,353 | ~5,800 |
| **Weaver (artistic)** | p3c-weaver-artistic.md | 33 | 921 | ~1,200 |

**Important:** Output tokens also include tool-use responses (thinking, file writes). The actual output token count is typically **1.5-2x** the file content because agents think before writing, make tool calls, and sometimes revise. Apply a **1.75x multiplier** to file-based estimates.

---

## 3. Per-Phase Cost Model

### 3.1 Phase Cost Breakdown (Single Cycle, No REFINE)

Using Opus 4.6 standard rates: $5/MTok input, $25/MTok output.

| Phase | Agent(s) | Input Tokens | Output Tokens | Input Cost | Output Cost | **Phase Total** |
|---|---|---|---|---|---|---|
| **P0: Content Analysis** | 1 | ~40K (15.9K fixed + 24K variable) | ~1.9K (1.1K x 1.75) | $0.20 | $0.05 | **$0.25** |
| **P1: Brief Assembly** | 1 | ~56K (15.9K + 40K) | ~7.2K (4.1K x 1.75) | $0.28 | $0.18 | **$0.46** |
| **P2A: Build Pass A** | 1 | ~49K (15.9K + 33K) | ~31.5K (18K x 1.75) | $0.25 | $0.79 | **$1.04** |
| **P3A: Gates** | 0 LLM | 0 | 0 | $0.00 | $0.00 | **$0.00** |
| **P3B: 9 PA Auditors** | 9 | ~287K (9 x 31.9K) | ~83.5K (9 x 5.3K x 1.75) | $1.44 | $2.09 | **$3.53** |
| **P3B: Integrative** | 1 | ~63K (15.9K + 47K) | ~5.8K (3.3K x 1.75) | $0.32 | $0.15 | **$0.47** |
| **P3C: Weaver** | 1 | ~69K (15.9K + 53K) | ~12.3K (7K x 1.75) | $0.35 | $0.31 | **$0.66** |
| **Orchestrator overhead** | 1 (persistent) | ~100K (accumulated context) | ~15K (coordination msgs) | $0.50 | $0.38 | **$0.88** |
| | | | | | **SINGLE CYCLE TOTAL** | **$7.29** |

### 3.2 REFINE Cycle Marginal Cost

The REFINE cycle repeats P2B + P3A + P3B + P3B-integrative + P3C:

| Phase | Marginal Cost |
|---|---|
| **P2B: REFINE builder** | $0.85 |
| **P3A: Gates (re-run)** | $0.00 |
| **P3B: 9 PA Auditors (2nd pass)** | $3.53 |
| **P3B: Integrative (2nd pass)** | $0.47 |
| **P3C: Weaver (2nd pass)** | $0.66 |
| **Orchestrator (incremental)** | $0.30 |
| **REFINE CYCLE TOTAL** | **$5.81** |

### 3.3 Full Run With One REFINE Cycle

| Component | Cost |
|---|---|
| Initial cycle | $7.29 |
| REFINE cycle | $5.81 |
| **TOTAL (1 REFINE)** | **$13.10** |

### 3.4 Cost Distribution (Pie Chart Data)

**Single cycle (no REFINE):**

| Phase | Cost | Percentage |
|---|---|---|
| PA Audit (9 auditors) | $3.53 | 48.4% |
| Build Pass A | $1.04 | 14.3% |
| Orchestrator | $0.88 | 12.1% |
| Weaver | $0.66 | 9.0% |
| Brief Assembly | $0.46 | 6.3% |
| Integrative | $0.47 | 6.4% |
| Content Analysis | $0.25 | 3.4% |
| Gates | $0.00 | 0.0% |

**Key finding: PA auditing is ~48% of total cost.** The 9-auditor Mode 4 PA is the single most expensive operation. This is the primary lever for cost optimization.

**Full run with 1 REFINE:**

| Phase | Cost | Percentage |
|---|---|---|
| PA Audit (2 rounds x 9) | $7.06 | 53.9% |
| Build (initial + refine) | $1.89 | 14.4% |
| Orchestrator | $1.18 | 9.0% |
| Weaver (2 rounds) | $1.32 | 10.1% |
| Integrative (2 rounds) | $0.94 | 7.2% |
| Brief Assembly | $0.46 | 3.5% |
| Content Analysis | $0.25 | 1.9% |

---

## 4. Cost Metrics Schema

### 4.1 Per-Run Cost Summary (for run-summary.json)

```json
{
  "economics": {
    "estimationMethod": "proxy-v1",
    "currency": "USD",
    "model": "claude-opus-4-6",
    "pricing": {
      "inputPerMTok": 5.00,
      "outputPerMTok": 25.00
    },

    "phases": {
      "p0_content_analysis": {
        "agents": 1,
        "inputTokensEst": 40000,
        "outputTokensEst": 1925,
        "costEst": 0.25,
        "durationSec": null,
        "outputFiles": ["p0-content-map.md"],
        "outputLineCount": 70
      },
      "p1_brief_assembly": {
        "agents": 1,
        "inputTokensEst": 56000,
        "outputTokensEst": 7175,
        "costEst": 0.46,
        "durationSec": null,
        "outputFiles": ["p1-execution-brief.md"],
        "outputLineCount": 272
      },
      "p2a_build": {
        "agents": 1,
        "inputTokensEst": 49000,
        "outputTokensEst": 31500,
        "costEst": 1.04,
        "durationSec": null,
        "outputFiles": ["p2-*.html"],
        "outputLineCount": 2931
      },
      "p3a_gates": {
        "agents": 0,
        "inputTokensEst": 0,
        "outputTokensEst": 0,
        "costEst": 0.00,
        "durationSec": null,
        "outputFiles": ["p3a-gate-results.json"],
        "note": "JS execution, no LLM cost"
      },
      "p3b_pa_audit": {
        "agents": 9,
        "inputTokensEst": 287100,
        "outputTokensEst": 83475,
        "costEst": 3.53,
        "durationSec": null,
        "outputFiles": ["p3b-pa-auditor-A.md", "...through I"],
        "outputLineCount": 2833,
        "perAgentCostEst": 0.39
      },
      "p3b_integrative": {
        "agents": 1,
        "inputTokensEst": 62900,
        "outputTokensEst": 5775,
        "costEst": 0.47,
        "durationSec": null,
        "outputFiles": ["p3b-integrative.md"],
        "outputLineCount": 217
      },
      "p3c_weaver": {
        "agents": 1,
        "inputTokensEst": 68900,
        "outputTokensEst": 12250,
        "costEst": 0.66,
        "durationSec": null,
        "outputFiles": ["p3c-weaver-diagnostic.md", "p3c-weaver-artistic.md"],
        "outputLineCount": 334
      },
      "orchestrator": {
        "agents": 1,
        "inputTokensEst": 100000,
        "outputTokensEst": 15000,
        "costEst": 0.88,
        "note": "Accumulated context, multi-turn"
      }
    },

    "refineCycles": [
      {
        "cycleNumber": 1,
        "p2b_build": { "costEst": 0.85, "outputLineCount": 500 },
        "p3a_gates": { "costEst": 0.00 },
        "p3b_pa_audit": { "costEst": 3.53, "agents": 9, "outputLineCount": 2099 },
        "p3b_integrative": { "costEst": 0.47, "outputLineCount": 148 },
        "p3c_weaver": { "costEst": 0.66, "outputLineCount": 347 },
        "orchestrator_incremental": { "costEst": 0.30 },
        "cycleTotalEst": 5.81,
        "pa05Delta": 1.5,
        "costPerPa05Point": 3.87
      }
    ],

    "totals": {
      "initialCycleCost": 7.29,
      "refineCycleCost": 5.81,
      "totalEstimatedCost": 13.10,
      "totalAgentsSpawned": 26,
      "totalOutputLines": 9431
    },

    "efficiency": {
      "costPerPa05Point": null,
      "costPerOutputLine": null,
      "refineMarginalROI": null,
      "paAuditCostShare": null
    }
  }
}
```

### 4.2 Derived Efficiency Metrics

These are calculated post-run from the raw data:

```
costPerPa05Point = totalEstimatedCost / pa05Final
  Example: $13.10 / 3.5 = $3.74 per PA-05 point

costPerOutputLine = totalEstimatedCost / htmlArtifactLines
  Example: $13.10 / 2931 = $0.0045 per line of HTML

refineMarginalROI = pa05Delta / refineCycleCost
  Example: 1.5 / $5.81 = 0.258 PA-05 points per dollar
  (Compare to initial cycle: 2.0 / $7.29 = 0.274 — REFINE is slightly LESS efficient
  but the 1.5-point jump in the live run suggests high-value when initial PA-05 < 3.0)

paAuditCostShare = paAuditTotalCost / totalEstimatedCost
  Example: $7.06 / $13.10 = 53.9%

improveCycleBreakevenThreshold = if pa05Delta < 0.5, marginal cost was NOT worth it
  Threshold: REFINE at $5.81 is worth it if pa05Delta >= 0.5 (cost per point <= $11.62)
```

---

## 5. ROI Analysis Framework

### 5.1 Is the REFINE Cycle Worth It?

| Scenario | PA-05 Before | PA-05 After | Delta | REFINE Cost | Cost/Point | Verdict |
|---|---|---|---|---|---|---|
| **Yegge Gas Town (actual)** | 2.0 | 3.5 | +1.5 | $5.81 | $3.87 | STRONGLY WORTH IT |
| Hypothetical: small gain | 3.0 | 3.2 | +0.2 | $5.81 | $29.05 | NOT WORTH IT |
| Hypothetical: medium gain | 2.5 | 3.5 | +1.0 | $5.81 | $5.81 | WORTH IT |
| **Breakeven threshold** | any | any | +0.5 | $5.81 | $11.62 | MINIMUM for ROI |

**Decision rule:** REFINE is worth it when expected PA-05 delta >= 0.5. The live run showed +1.5, making it one of the highest-ROI operations in the entire pipeline.

**Predictive signal:** If initial PA-05 < 3.0, REFINE is almost certainly worth it (historical: +1.5 from 2.0). If initial PA-05 >= 3.5, REFINE likely yields < 0.5 delta (diminishing returns near ceiling).

### 5.2 Are 9 PA Auditors Worth It vs Fewer?

| Configuration | PA Cost/Cycle | Total Cost (1 cycle) | Quality Signal |
|---|---|---|---|
| **9 auditors (current)** | $3.53 | $7.29 | 48 questions, 9 perspectives, catches dominant failures |
| 5 auditors | $1.96 | $5.72 | ~30 questions, 5 perspectives |
| 3 auditors | $1.18 | $4.94 | ~18 questions, 3 perspectives |
| 1 auditor | $0.39 | $4.15 | ~8 questions, 1 perspective |

**Savings vs quality tradeoff:**
- 9 → 5 auditors: saves $1.57/cycle ($3.14 with REFINE), loses ~40% question coverage
- 9 → 3 auditors: saves $2.35/cycle ($4.70 with REFINE), loses ~63% question coverage
- **Known risk:** The standalone PA (2 auditors) MISSED the catastrophic whitespace void that 9/9 auditors caught in Mode 4. Breadth of perspectives is the key value.

**Recommendation:** 9 auditors for Flagship builds. Consider 5 for rapid iteration/prototyping where PA-05 threshold is lower. Never fewer than 5 for production builds.

### 5.3 Opus Builder vs Sonnet Builder

| Builder Model | Build Cost (P2A) | Expected PA-05 (initial) | Notes |
|---|---|---|---|
| **Opus 4.6** | $1.04 | 2.0-3.0 | Creative beyond constraints, compositional fluency |
| Sonnet 4.6 | ~$0.32 (3/5 input, 15/25 output) | 1.5-2.0 | Meticulous compliance, less creative composition |

Cost difference: $0.72 per build pass. Over a full run with REFINE: ~$1.44 total savings.

**BUT:** Sonnet-built pages historically need MORE REFINE cycles (Flagship experiment: Sonnet builder produced PA-05 1.5/4 requiring extensive remediation). The cost of additional REFINE cycles ($5.81 each) far exceeds the $1.44 savings from using Sonnet.

**Recommendation:** Opus for builders is a cost-SAVING measure in practice, because it reduces REFINE cycles needed.

---

## 6. Cost Collection: What Can Be Derived Automatically

### 6.1 Zero-Effort Metrics (from file artifacts alone)

These require NO manual annotation -- derive entirely from examining output files:

| Metric | Source | Calculation |
|---|---|---|
| Agent count | Count p0-*, p1-*, p2-*, p3b-pa-auditor-*, p3b-integrative-*, p3c-weaver-* files | File enumeration |
| REFINE cycles | Count files with `-refine` suffix | File enumeration |
| Output tokens (proxy) | `wc -w` on all output files, divide by 0.75, multiply by 1.75 | Word count formula |
| Phase identification | File prefix (p0-, p1-, p2-, p3a-, p3b-, p3c-) | Naming convention |
| PA auditor count | Count p3b-pa-auditor-[A-I].md files | File enumeration |
| Build artifact size | `wc -l` on HTML file | Line count |
| Gate results | Parse p3a-gate-results.json | JSON parsing |

### 6.2 Low-Effort Metrics (from file timestamps)

| Metric | Source | Calculation |
|---|---|---|
| Phase duration | File modification timestamps | `stat -f "%m"` on first/last file per phase |
| Total run duration | Earliest to latest file timestamp | Timestamp delta |
| Parallel vs sequential | Timestamp clustering | If 9 PA files have timestamps within 30s, they ran in parallel |

### 6.3 Metrics Requiring Estimation

| Metric | Estimation Method | Accuracy |
|---|---|---|
| Input tokens per agent | Role-based lookup table (Section 3.1) | +/- 30% |
| Orchestrator cost | Proportional to agent count x average coordination overhead | +/- 50% |
| Prompt caching benefit | Assume 50% of fixed overhead cached after first agent | +/- 40% |

### 6.4 Metrics Requiring Manual Annotation (Optional)

| Metric | When to Annotate | Format |
|---|---|---|
| Actual API cost | If user checks Anthropic dashboard post-run | `"actualApiCost": 14.50` |
| Builder model used | If switching between Opus/Sonnet | Already in run-summary schema |
| Respawn costs | When agents fail and are re-spawned | Count in agents.totalRespawns |

---

## 7. Cost Trend Analysis (Cross-Run)

### 7.1 Trend Metrics

Track these across runs to identify cost trajectory:

```json
{
  "costTrend": {
    "runs": [
      {
        "slug": "yegge-gas-town-2026-02-25",
        "totalCost": 13.10,
        "pa05Final": 3.5,
        "costPerPoint": 3.74,
        "refineCycles": 1,
        "agents": 26,
        "buildLines": 2931
      }
    ],
    "trends": {
      "avgCostPerRun": null,
      "avgCostPerPoint": null,
      "costDirection": null,
      "refineCycleRate": null,
      "costEfficiencyTrend": null
    }
  }
}
```

### 7.2 Diagnostic Questions for Cost Trends

After N >= 3 runs, these questions become answerable:

1. **Is cost per PA-05 point decreasing?** (pipeline learning)
2. **Is REFINE cycle rate decreasing?** (builder quality improving)
3. **Is PA audit cost share stable at ~50%?** (if it grows, something is wrong)
4. **Is orchestrator overhead growing?** (complexity creep signal)
5. **What's the cheapest SHIP run?** (cost floor)
6. **What's the most expensive REBUILD run?** (cost ceiling for failed runs)

### 7.3 Cost Anomaly Detection

Flag runs where:
- `totalCost > 2x avgCostPerRun` (something went wrong)
- `refineCycles > 2` (builder quality issue or content difficulty)
- `orchestrator.costEst > 20% of totalCost` (coordination overhead bloat)
- `pa05Final < 2.0 AND refineCycles > 0` (REFINE failed to improve quality = wasted money)

---

## 8. The Cost Collection Script

A lightweight script that runs post-pipeline to auto-populate the economics section:

```javascript
// cost-estimator.js — Post-pipeline cost estimation
// Run after pipeline completion. Reads output files, estimates costs.

const fs = require('fs');
const path = require('path');

const PRICING = {
  inputPerMTok: 5.00,
  outputPerMTok: 25.00,
  model: 'claude-opus-4-6'
};

// Words-to-tokens conversion (with 1.75x output multiplier for tool-use overhead)
const wordsToTokens = (words) => Math.ceil(words / 0.75);
const charsToTokens = (chars) => Math.ceil(chars / 3.5);
const outputMultiplier = 1.75;

// Fixed overhead per agent (Claude Code system + tools + CLAUDE.md)
const FIXED_OVERHEAD_TOKENS = 15900;

// Role-specific variable input token estimates
const ROLE_INPUT_TOKENS = {
  'p0-content-analyst':  24000,
  'p1-brief-assembler':  40000,
  'p2a-builder':         33000,
  'p2b-refine-builder':  27000,
  'p3b-pa-auditor':      16000,
  'p3b-integrative':     47000,
  'p3c-weaver':          53000,
  'orchestrator':        100000  // accumulated multi-turn
};

function estimateRunCost(buildDir) {
  const files = fs.readdirSync(buildDir);
  const result = { phases: {}, totals: {} };

  // Count and measure output files
  const phases = {
    p0: files.filter(f => f.startsWith('p0-')),
    p1: files.filter(f => f.startsWith('p1-')),
    p2: files.filter(f => f.startsWith('p2-') && !f.includes('-refine')),
    p2_refine: files.filter(f => f.startsWith('p2-') && f.includes('-refine')),
    p3a: files.filter(f => f.startsWith('p3a-')),
    p3b_pa: files.filter(f => f.match(/p3b-pa-auditor-[A-I]\.md$/)),
    p3b_pa_refine: files.filter(f => f.match(/p3b-pa-auditor-[A-I]-refine\.md$/)),
    p3b_integrative: files.filter(f => f.match(/p3b-integrative(?!-refine)\.md$/)),
    p3b_integrative_refine: files.filter(f => f.match(/p3b-integrative-refine\.md$/)),
    p3c_weaver: files.filter(f => f.match(/p3c-weaver.*(?<!-refine)\.md$/)),
    p3c_weaver_refine: files.filter(f => f.match(/p3c-weaver.*-refine\.md$/))
  };

  function measureFiles(fileList) {
    let totalWords = 0, totalLines = 0;
    for (const f of fileList) {
      const content = fs.readFileSync(path.join(buildDir, f), 'utf8');
      totalWords += content.split(/\s+/).length;
      totalLines += content.split('\n').length;
    }
    return { words: totalWords, lines: totalLines };
  }

  function phaseCost(role, fileList, agentCount = 1) {
    const { words, lines } = measureFiles(fileList);
    const outputTokens = Math.ceil(wordsToTokens(words) * outputMultiplier);
    const inputTokens = (FIXED_OVERHEAD_TOKENS + (ROLE_INPUT_TOKENS[role] || 20000)) * agentCount;

    const inputCost = (inputTokens / 1000000) * PRICING.inputPerMTok;
    const outputCost = (outputTokens / 1000000) * PRICING.outputPerMTok;

    return {
      agents: agentCount,
      inputTokensEst: inputTokens,
      outputTokensEst: outputTokens,
      costEst: Math.round((inputCost + outputCost) * 100) / 100,
      outputLines: lines,
      outputWords: words
    };
  }

  // Calculate per-phase
  result.phases.p0 = phaseCost('p0-content-analyst', phases.p0);
  result.phases.p1 = phaseCost('p1-brief-assembler', phases.p1);
  result.phases.p2a = phaseCost('p2a-builder', phases.p2);
  result.phases.p3a = { agents: 0, costEst: 0.00, note: 'JS execution' };
  result.phases.p3b_pa = phaseCost('p3b-pa-auditor', phases.p3b_pa, phases.p3b_pa.length);
  result.phases.p3b_integrative = phaseCost('p3b-integrative', phases.p3b_integrative);
  result.phases.p3c_weaver = phaseCost('p3c-weaver', phases.p3c_weaver);

  // Detect REFINE cycles
  const hasRefine = phases.p3b_pa_refine.length > 0;
  if (hasRefine) {
    result.phases.p2b_refine = phaseCost('p2b-refine-builder', phases.p2_refine);
    result.phases.p3b_pa_refine = phaseCost('p3b-pa-auditor', phases.p3b_pa_refine, phases.p3b_pa_refine.length);
    result.phases.p3b_integrative_refine = phaseCost('p3b-integrative', phases.p3b_integrative_refine);
    result.phases.p3c_weaver_refine = phaseCost('p3c-weaver', phases.p3c_weaver_refine);
  }

  // Orchestrator estimate (scales with agent count)
  const totalAgents = Object.values(result.phases)
    .reduce((sum, p) => sum + (p.agents || 0), 0);
  result.phases.orchestrator = {
    agents: 1,
    inputTokensEst: ROLE_INPUT_TOKENS['orchestrator'],
    outputTokensEst: 15000,
    costEst: Math.round(((100000 / 1e6) * 5 + (15000 / 1e6) * 25) * 100) / 100
  };

  // Totals
  const allCosts = Object.values(result.phases).map(p => p.costEst || 0);
  result.totals = {
    totalEstimatedCost: Math.round(allCosts.reduce((a, b) => a + b, 0) * 100) / 100,
    totalAgents: totalAgents + 1, // +1 for orchestrator
    refineCycles: hasRefine ? 1 : 0,
    model: PRICING.model
  };

  return result;
}

// Usage: node cost-estimator.js /path/to/build-dir
if (require.main === module) {
  const buildDir = process.argv[2];
  if (!buildDir) {
    console.error('Usage: node cost-estimator.js <build-dir>');
    process.exit(1);
  }
  const result = estimateRunCost(buildDir);
  console.log(JSON.stringify(result, null, 2));
}

module.exports = { estimateRunCost };
```

---

## 9. Prompt Caching Impact Analysis

### 9.1 Cache Opportunity

Claude Code likely implements prompt caching for the system prompt and tool definitions. Additionally, within a single orchestrator session, the CLAUDE.md files and pipeline context are cached after the first read.

**Potential caching savings:**

| Cached Component | Tokens | Full Price | Cache Hit Price | Savings per Agent |
|---|---|---|---|---|
| System prompt + tools | ~5,500 | $0.028 | $0.003 | $0.025 |
| CLAUDE.md auto-loads | ~10,400 | $0.052 | $0.005 | $0.047 |
| **Per-agent savings** | | | | **$0.072** |
| **x26 agents** | | | | **$1.87** |

If prompt caching is active, total run cost drops from ~$13.10 to ~$11.23 (14% savings).

### 9.2 Cache Effectiveness by Phase

| Phase | Caching Benefit | Reason |
|---|---|---|
| PA Auditors (x9) | HIGH | 9 agents with nearly identical fixed context, spawned close together |
| REFINE PA (x9) | HIGH | Same context as initial PA, still in cache window |
| Builder | LOW | Unique context (brief, recipe), little shared with other agents |
| Weaver | LOW | Unique context (9 PA reports), reads different files |

**Best optimization:** Ensure PA auditors are spawned within the 5-minute cache window. If the first PA auditor's system prompt + CLAUDE.md context is cached, the remaining 8 auditors pay only $0.50/MTok for those tokens instead of $5.00/MTok.

---

## 10. Scenario Cost Matrix

### 10.1 Common Scenarios

| Scenario | Cycles | Est. Cost | PA-05 | Cost/Point |
|---|---|---|---|---|
| **Perfect initial build** (SHIP, no REFINE) | 1 | $7.29 | 3.5+ | $2.08 |
| **Typical build** (1 REFINE) | 2 | $13.10 | 3.5 | $3.74 |
| **Difficult build** (2 REFINE) | 3 | $18.91 | 3.5 | $5.40 |
| **Failed build** (REBUILD triggered) | 1-2 | $7-13 | <2.0 | WASTED |
| **Rapid iteration** (5 auditors, no REFINE) | 1 | $5.72 | ~3.0 | $1.91 |
| **Maximum quality** (9 auditors, 2 REFINE, Opus) | 3 | $18.91 | 3.5-4.0 | $4.73-5.40 |

### 10.2 Monthly Cost Projections

| Pages/Month | Config | Monthly Cost |
|---|---|---|
| 5 | Typical (1 REFINE) | $65.50 |
| 10 | Typical (1 REFINE) | $131.00 |
| 20 | Typical (1 REFINE) | $262.00 |
| 10 | Rapid iteration (5 PA, no REFINE) | $57.20 |
| 10 | Maximum quality (2 REFINE) | $189.10 |

---

## 11. Cost Optimization Recommendations

### 11.1 Highest-Impact Optimizations

**1. Reduce PA auditors for early iterations (SAVE ~$1.57/cycle)**
- Use 5 auditors during initial build, full 9 for REFINE cycle
- Rationale: Initial build often needs REFINE anyway; save the thorough audit for the refined version
- Estimated savings: $3.14 per run (24% savings)

**2. Skip REFINE if initial PA-05 >= 3.0 (SAVE ~$5.81)**
- Historical data shows diminishing returns above PA-05 3.0
- Need more data points to validate threshold

**3. Implement prompt caching awareness (SAVE ~$1.87)**
- Spawn PA auditors rapidly (within 5-min window) to maximize cache hits
- Structure orchestrator to read shared context early

**4. Batch API for PA auditors (SAVE ~$1.77 on PA phases)**
- PA auditors don't need real-time results
- Batch API gives 50% discount on input and output
- Caveat: Only works if Claude Code supports batch API for Task tool (unlikely currently)

### 11.2 Anti-Optimizations (Don't Do These)

- **Don't drop below 5 PA auditors:** The whitespace void lesson -- 2 auditors missed what 9/9 caught
- **Don't use Sonnet for builders:** Saves $0.72/pass but costs $5.81+ in additional REFINE cycles
- **Don't skip P0/P1 to save costs:** $0.71 combined, and brief quality directly determines build quality
- **Don't remove the Weaver:** $0.66/cycle, but the artistic brief is what enables REFINE quality jumps

---

## 12. Implementation Plan

### 12.1 Phase 1: Collection (Zero-Effort, Immediate)

Add to the post-pipeline summary generation:

1. Count output files by naming convention (p0-, p1-, p2-, p3b-pa-auditor-*, etc.)
2. Run `wc -w` on each output file
3. Apply role-based input token lookup table
4. Calculate costs using the formulas above
5. Write `economics` section into run-summary.json

**LOE:** ~50 lines added to the summary generation step. Can be done in the orchestrator's final phase.

### 12.2 Phase 2: Timestamp Collection (Low-Effort, Next Sprint)

Add file timestamp collection:

1. Record `stat` timestamps on all output files
2. Derive phase durations from timestamp deltas
3. Detect parallel vs sequential execution patterns
4. Calculate tokens/second throughput estimates

### 12.3 Phase 3: Cross-Run Trends (After N >= 3 Runs)

1. Maintain a `cost-history.json` with per-run summaries
2. Calculate rolling averages and trend lines
3. Detect anomalies (>2x average cost, REFINE yielding <0.5 delta)
4. Generate cost-efficiency recommendations

### 12.4 Phase 4: Dashboard Integration (Future)

1. Cost pie chart per run
2. Cost-per-PA-05-point trend over time
3. REFINE ROI scatter plot (cost vs quality delta)
4. Phase cost distribution evolution across runs

---

## 13. Confidence Assessment

| Estimate | Confidence | Error Range | Bottleneck |
|---|---|---|---|
| Output token count (from files) | HIGH | +/- 25% | Tool-use overhead multiplier (1.75x is a guess) |
| Input token count (per role) | MEDIUM | +/- 40% | Conversation history accumulation varies |
| Orchestrator cost | LOW | +/- 60% | Multi-turn context growth is unpredictable |
| Prompt caching savings | LOW | +/- 50% | Don't know if/how Claude Code caches |
| Total run cost | MEDIUM | +/- 35% | Compounds input/output uncertainties |
| Phase distribution percentages | HIGH | +/- 10% | Relative proportions are stable even if absolute values vary |

**Validation strategy:** After 3 runs, compare estimated costs to actual Anthropic dashboard billing. Calibrate the multipliers (especially the 1.75x output multiplier and the orchestrator estimate) to match observed costs.

---

## 14. Key Findings Summary

1. **A typical pipeline run costs ~$13 with one REFINE cycle.** This is the all-in estimate for a single page from content to PA-05 3.5.

2. **PA auditing is 48-54% of total cost.** The 9-auditor Mode 4 PA dominates the cost structure. It is also the phase most responsible for quality assurance.

3. **REFINE is cost-effective when initial PA-05 < 3.0.** The Yegge Gas Town run showed +1.5 PA-05 points for $5.81 = $3.87/point. Below PA-05 3.0, REFINE is almost always worth it.

4. **Opus builders are a cost-SAVING measure** despite higher per-token price, because they reduce the need for REFINE cycles.

5. **Prompt caching could save ~14% if active.** Especially for the PA auditor batch (9 agents with identical fixed context).

6. **All cost data can be derived from output files alone** -- no manual annotation required for basic economics tracking. File names, word counts, and timestamps provide sufficient proxy data.

7. **Monthly cost for a 10-page pipeline: ~$131.** This is the "typical" scenario. Rapid iteration mode drops to ~$57; maximum quality mode rises to ~$189.
