# LLM Attention Limitations as Root Cause of Pipeline Cracks

**Analyst:** Opus (llm-limits-analyst)
**Build:** yegge-gas-town-2026-02-25
**Method:** Quantitative analysis of per-agent input sizes, positional loss patterns, compliance by rule type, cross-run empirical attention budgets, and structural fix proposals.

---

## 1. Total Spec Volume: The Attention Budget Problem

### 1.1 Pipeline Artifact Inventory

| Artifact File | Lines | Primary Consumer |
|---------------|-------|------------------|
| MANIFEST.md | 1,253 | Orchestrator |
| artifact-orchestrator.md | 1,129 | Orchestrator |
| artifact-builder-recipe.md | 828 | Brief Assembler (extraction), Builder (via brief) |
| artifact-routing.md | 900 | Content Analyst, Brief Assembler, Orchestrator |
| artifact-identity-perception.md | 556 | Brief Assembler, Gate Runner |
| artifact-value-tables.md | 262 | Brief Assembler, Builder |
| artifact-tc-brief-template.md | 223 | Brief Assembler |
| gate-runner-core.js | ~1,654 | Orchestrator (code execution) |
| gate-runner-spec.md | 223 | Orchestrator |
| gate-manifest.json | ~200 | Orchestrator |
| gate-runner-preconditions.md | 83 | Orchestrator |
| gate-runner-provenance.md | 151 | Orchestrator |
| pa-questions.md | 431 | PA Auditors (subsets) |
| pa-deployment.md | 355 | Orchestrator |
| pa-weaver.md | 449 | Weaver |
| pa-guardrails.md | 113 | PA Auditors |
| pa-guardrails-weaver.md | 59 | Weaver, Orchestrator |
| tokens.css | 183 | Builder (direct) |
| components.css | 1,195 | Builder (direct) |
| mechanism-catalog.md | 1,218 | Builder (direct) |
| EXECUTION-TRACKER-TEMPLATE.md | 597 | Orchestrator |
| **TOTAL** | **~10,061** | |

### 1.2 Per-Agent Input Burden

| Agent | Files Received | Estimated Input Lines | Percentage of Total Spec |
|-------|---------------|----------------------|-------------------------|
| **Orchestrator** | MANIFEST + orchestrator + routing + gate-runner (5 files) + pa-deployment + pa-guardrails-weaver + tracker template | ~4,650 | 46% |
| **Brief Assembler** | TC Brief Template + Content Map + identity-perception + recipe + routing + value-tables | ~2,839 | 28% |
| **Builder** | Execution Brief + tokens.css + components.css + mechanism-catalog + (uncertain: value-tables, CD-006) | ~2,868–4,330 | 28–43% |
| **PA Auditor** (each) | Screenshots + ~8-11 assigned questions (~50-80 lines from pa-questions.md) + pa-guardrails (113 lines) | ~163-193 | 1.6–1.9% |
| **Weaver** | pa-weaver + pa-guardrails-weaver + 9 auditor reports + integrative report + gate results | ~3,500+ | 35%+ |

**Key finding: The orchestrator and brief assembler carry the heaviest attention loads.** The orchestrator must hold ~4,650 lines of spec in context to run the pipeline correctly. This is where 12/42 gates went unexecuted.

---

## 2. Positional Analysis: What Gets Missed and Where

### 2.1 Brief Assembler Losses by Position in Source

The Brief Assembler receives the 828-line recipe and must extract it into ~90 lines of Tier 3+4. Two items were completely lost:

| Lost Item | Recipe Position | Lines from Start | Lines from End | Section |
|-----------|----------------|-----------------|----------------|---------|
| Step 2.7 (hover behavior) | Line ~168-175 | 168 (20%) | 660 (80%) | PHASE 2 (middle) |
| Step 3.4c (signal declarations) | Line ~296-307 | 296 (36%) | 532 (64%) | PHASE 3 (deep middle) |

What was NOT lost:
- Step 2.1 (zone backgrounds) — Line ~88, 11% into file — FULLY preserved
- Step 2.3 (structural metaphor) — Line ~113, 14% into file — FULLY preserved
- D-01 through D-09 — Lines ~331-452, 40-55% into file — ALL preserved

**The lost items are NOT at the end of the file** (where classic attention decay would predict losses). They are in the middle. But they share a different characteristic: they are the SMALLEST creative decision steps in Phase 2. Step 2.7 is 7 lines. Step 3.4c is 11 lines. The surrounding steps (2.1 zone backgrounds at 18 lines, 2.3 metaphor at 10 lines, 2.8 transitions at 17 lines) all survived.

**Hypothesis: Loss correlates with SPECIFICITY MISMATCH, not position.** The template has no placeholder for hover behavior or signal declarations. The brief assembler was looking for recipe content to fill template slots. Steps 2.7 and 3.4c have no corresponding template slot. The assembler didn't "forget" them — it had no place to put them.

### 2.2 Orchestrator Losses by Gate Position

12/42 gates were not executed. Their positions in the gate manifest:

| Skipped Gate | Position in Manifest | Tier | Category |
|-------------|---------------------|------|----------|
| BV-01–BV-04 | TOP (Section 0) | REQUIRED | Already ran in Phase 1, not re-included in Phase 3A JSON |
| GR-05b | Within Section 1 | ADVISORY | Adjacent to executed GR-05 |
| GR-07 | Within Section 1 | RECOMMENDED | Same code block as GR-05 |
| GR-33, GR-34 | Section 5 | DIAGNOSTIC | Explicitly documented as "not run" |
| GR-48 | End of Section 5 | REQUIRED | Meta-gate (self-referential) |
| GR-49 | End of Section 5 | RECOMMENDED | Process check |
| GR-62 | Late section | REQUIRED | Tracked separately in execution tracker |
| GR-64 | Last section | REQUIRED | Post-weaver gate |

**Pattern: Late-positioned gates and meta/process gates are most likely to be skipped.** GR-48 and GR-49 sit at the end of the gate manifest. GR-62 and GR-64 are late-pipeline gates. The orchestrator executed the "meat" of the gate runner (Sections 1-4: identity, perception, anti-pattern, output) and dropped the tail.

This IS a positional attention effect. The orchestrator front-loaded execution on the gates with direct DOM relevance and neglected the meta-gates that verify the process itself.

### 2.3 Tracker Field Completion by Section Position

| Tracker Section | Position | Fill Rate | Category |
|----------------|----------|-----------|----------|
| Pre-Flight (PF-1 to PF-3) | Lines 1-50 | **0%** | First section |
| Phase 0 (P0-1 to P0-2) | Lines 50-100 | **0%** | Early section |
| Phase 1 (P1-1 to P1-2) | Lines 100-180 | **0%** | Early-mid |
| Phase 2 (P2-1 to P2-3) | Lines 180-280 | **0%** | Mid |
| Phase 3A (P3A-0 to P3A-4) | Lines 280-400 | **~60%** | Mid-late |
| Phase 3B (P3B-1 to P3B-4) | Lines 400-520 | **~80%** | Late |
| Phase 3C (P3C-1 to P3C-2) | Lines 520-560 | **~90%** | Late |
| REFINE | Lines 560-638 | **~50%** | Last |

**This is an INVERTED attention pattern.** The orchestrator filled the LATE sections of the tracker (Phase 3) and neglected the EARLY sections (Pre-Flight, Phase 0-2). This makes sense temporally: the orchestrator filled in the tracker AS it executed each phase. By the time Phase 3 was running, the orchestrator was in "tracking mode." But it never went BACK to fill in the earlier phases it had completed before entering tracking mode.

**Root cause: The tracker is a RETROSPECTIVE tool being used in REAL-TIME.** The orchestrator must either fill it in real-time (losing earlier phases to the "I'll fill it in later" fallacy) or fill it retrospectively (requiring a dedicated pass after pipeline completion). Neither happened reliably.

---

## 3. Binary vs. Judgment Rule Compliance

### 3.1 The 100% vs ~0% Compliance Split

| Rule Type | Example | Compliance | Evidence |
|-----------|---------|------------|----------|
| Binary: `border-radius: 0` | SC-01 | **100%** | GR-01 PASS both runs |
| Binary: `box-shadow: none` | SC-02 | **100%** | GR-02 PASS both runs |
| Binary: `container 940-960px` | SC-03 | **100%** | GR-03 PASS both runs |
| Binary: font trinity only | SC-05 | **100%** | GR-05 PASS (after correcting recording error) |
| Judgment: "Target 8+ components" | Recipe | **~65%** (5-6 of 8+) | Builder undershot |
| Judgment: "3+ channels per boundary" | Multi-coherence | **~50%** (edge zones: 2 channels) | GR-50 FAIL at edges |
| Judgment: "Select hover behavior patterns" | Step 2.7 | **0%** | Complete loss at brief |
| Judgment: "Use the FULL RANGE" | PT calibration | **~40%** | Many values at floor |
| Judgment: S(x) survival function | Routing | **0%** | Never computed |
| Judgment: Content-Form Fit Gate | Routing | **0%** | Never invoked |

### 3.2 Why Binary Achieves 100% and Judgment Achieves ~0%

This is NOT merely an attention/recall problem. It reflects something deeper about how LLMs process instructions:

**Binary rules have three properties that align with LLM processing:**
1. **Unambiguous verification.** The agent can check its own output. `border-radius: 0` — did I write any border-radius that isn't 0? Yes/No.
2. **Single-action implementation.** One CSS rule satisfies the constraint. No sequence of decisions needed.
3. **No context dependency.** The rule is the same regardless of content, zone, or creative interpretation.

**Judgment rules lack all three:**
1. **Ambiguous verification.** "Target 8+ components" — how do I count? Does `.callout` used twice count as 1 or 2? What about adapted variants?
2. **Multi-step implementation.** "Use the full range of 15-50 RGB" requires the agent to: remember the range, choose different values for each boundary, verify no two adjacent values are too close, ensure at least some dramatic values exist. Each step is a decision point where the agent can satisfice.
3. **Context-dependent.** "Select hover behavior patterns" depends on which elements exist, what content they contain, which zone they're in. The agent must simultaneously track the instruction AND the evolving page state.

**The fundamental mechanism:** LLMs process instructions through a priority stack. Binary rules act as ABSOLUTE CONSTRAINTS — they trigger pattern-matching that prevents violations. Judgment rules act as ASPIRATIONAL TARGETS — they inform planning but don't trigger violation-prevention. When the agent is deep in CSS construction (750+ lines), the constraint-prevention system stays active (no border-radius violations) but the aspiration-tracking system has been displaced by the immediate task of making the current CSS block work.

### 3.3 The Satisficing Gradient

Even when judgment rules ARE processed, the agent satisfices at the minimum:

| Metric | Target | Actual | % of Target | Satisficing Pattern |
|--------|--------|--------|-------------|---------------------|
| Component adoption | 8+ types | 5-6 types | 63-75% | "Enough to feel complete" |
| Channel shifts (edge zones) | 3-4 channels | 2 channels | 50-67% | "Background + typography = enough" |
| Hover behavior patterns | Multiple | `tr:hover` only | ~10% | "Tables need hover, done" |
| CSS budget | 800-1200 lines | ~900 lines | 75-100% | Within range (no satisficing) |
| Background deltas | 15-50 RGB (full range) | Most 16-28 RGB | Floor region | "Above 15, good enough" |

The agent reaches a "good enough" threshold and redirects attention to the next element. This is rational satisficing — with 2,850+ lines of input, the agent cannot optimize every dimension. It optimizes the loudest constraints (binary rules, structural elements) and satisfices on the quietest (judgment targets, micro-refinements).

---

## 4. The Empirical Attention Budget

### 4.1 Per-Agent Effective Processing Capacity

Based on this build and cross-referencing with MEMORY.md findings:

| Agent | Input Lines | Items Perfectly Executed | Items Partially/Missed | Effective Processing | Drop-off Point |
|-------|------------|------------------------|----------------------|---------------------|---------------|
| Content Analyst | ~300 | ~95% | ~5% | HIGH | No drop observed |
| Brief Assembler | ~2,839 | ~85% (25/29 recipe elements) | ~15% (4/29) | MODERATE | ~800 lines into recipe |
| Builder | ~2,868 | ~80% (binary + structural) | ~20% (judgment + micro) | MODERATE | Judgment rules after binary exhaustion |
| Orchestrator | ~4,650 | ~72% (30/42 gates, correct routing) | ~28% (12 gates, tracker) | LOW for procedural tasks | Meta/process items |
| PA Auditor | ~170 | ~95% | ~5% | HIGH | No drop observed |

**The pattern is clear: Compliance degrades as input exceeds ~500-800 lines.**

- PA Auditors at ~170 lines achieve ~95% compliance.
- Content Analyst at ~300 lines achieves ~95% compliance.
- Brief Assembler at ~2,839 lines drops to ~85%.
- Builder at ~2,868 lines drops to ~80%.
- Orchestrator at ~4,650 lines drops to ~72%.

### 4.2 The 75-Line Builder Visibility Cap — Confirmed and Generalized

MEMORY.md documents a "75-line builder visibility cap" from the Flagship experiment. This build provides a cleaner test:

The builder received a 272-line brief. The brief's Tier 3 (compositional frameworks) is ~100 lines and is where the multi-coherence boundary specs live. The builder executed Z2->Z3 (7 channels, EXCEEDING the 6-channel spec) but executed Z1->Z2 and Z4->Z5 at only 2 channels (against specs of 4 and 3 respectively).

The Z2->Z3 boundary is the DRAMATIC transition — it appears in the brief with the most emphasis, the most detail, and the most extreme values. The edge boundaries (Z1->Z2, Z4->Z5) appear as table rows with lower emphasis. The builder's attention tracked SALIENCE, not position.

**The generalized principle:** LLMs don't have a fixed line-count visibility cap. They have a SALIENCE budget. Items with high emphasis (bold, exclamation, extreme values, dramatic language) consume less of the budget. Items with low emphasis (table rows, parenthetical notes, implicit requirements) consume more. The "75-line cap" is approximately the salience-adjusted effective window for a builder agent operating in construction mode (vs. reading mode).

### 4.3 Cross-Run Validation

From MEMORY.md, the same pattern appears across builds:

| Build | Agent | Input | Compliance | Pattern |
|-------|-------|-------|-----------|---------|
| Flagship | Builder (Sonnet) | ~71 lines + ref files | ~40% judgment compliance | Binary: 100%, Judgment: near 0% |
| Middle-Tier | Builder (Sonnet) | ~100-line recipe + ref files | ~85% judgment compliance | Recipe format + lower volume = better |
| Ceiling (CD-006) | Builder (Opus) | ~varies | ~90% | Opus + collaborative communication |
| This build | Builder (Opus) | ~2,868 lines | ~80% judgment compliance | Recipe format helped, volume hurt |

**The Middle-Tier achieved highest judgment compliance at the lowest builder input volume with recipe format.** This confirms: small recipe > large recipe > large checklist > small checklist.

---

## 5. The Attention Architecture Problem

### 5.1 Orchestrator as Bottleneck

The orchestrator must simultaneously:
1. Hold pipeline architecture in memory (MANIFEST: 1,253 lines)
2. Follow execution protocol (orchestrator.md: 1,129 lines)
3. Run gate code (gate-runner-core.js: 1,654 lines + spec: 223 lines)
4. Track execution state (tracker: 597 lines)
5. Route artifacts correctly (routing.md: 900 lines)
6. Deploy PA auditors (pa-deployment.md: 355 lines)
7. Manage verdict logic (pa-guardrails-weaver.md: 59 lines)

**Total orchestrator cognitive load: ~6,170 lines.** This is a SINGLE AGENT maintaining context on nearly the entire pipeline simultaneously.

The human analogy: this is like asking a project manager to simultaneously run a construction project while reading the architectural plans, operating the inspection equipment, filling out compliance forms, and briefing the quality auditors — all from memory, without referring back to the documents.

### 5.2 The Cascade Effect

The orchestrator's attention failures cascade:

```
Orchestrator misses GR-48 (gate coverage meta-gate)
  → No detection that GR-07, GR-49 were missed
    → No flag that results are incomplete
      → Weaver receives incomplete gate data
        → Verdict based on partial evidence
```

```
Orchestrator doesn't fill tracker L2 for Phase 0-2
  → No record of what the Brief Assembler received
    → Cannot trace why hover behavior was lost
      → Same loss will recur without the tracker evidence to diagnose it
```

### 5.3 Why Code Enforcement Beats Spec Compliance

The gate runner (code) achieved a fundamentally different reliability pattern than spec-driven agent behavior:

| Enforcement Method | Compliance | Failure Mode |
|-------------------|-----------|-------------|
| Gate runner JS (code) | 100% for executed gates | Gates not called |
| Binary rules in spec | ~100% | None observed |
| Judgment rules in spec | 0-65% | Satisficing, omission |
| Tracker fields (manual) | 67% | Recency bias, "later" fallacy |
| Meta-process (S(x), Content-Form Fit) | 0% | Never invoked |

**Code-enforced verification has zero compliance failures.** Every gate that was CALLED produced correct results (the 3 "false positives" were recording errors, not gate logic errors). The problem is entirely in CALLING the gates, which is orchestrator attention.

---

## 6. The Fundamental Limit

### 6.1 It IS a Fundamental Attention Limit

Yes, there is a fundamental limit. The evidence converges on:

1. **Compliance degrades predictably with input volume.** ~95% at <500 lines, ~85% at ~2,800 lines, ~72% at ~4,600 lines.

2. **Binary rules are immune to attention limits; judgment rules are not.** This is structural: binary rules trigger constraint-checking circuits that operate in parallel with construction. Judgment rules compete for the same sequential attention budget as construction.

3. **Positional effects exist but are secondary to salience effects.** Dramatic, emphasized content survives at any position. Quiet, parenthetical content drops at any position.

4. **Meta-process tasks are most vulnerable.** Tasks about the process itself (tracking, self-verification, coverage checking) are always lowest priority because they don't contribute to the immediate output.

### 6.2 The Limit Is Not Fixable by Better Specs

The instinct is "write clearer specs." But the data shows:

- The hover behavior instruction IS clear in the recipe (Step 2.7, its own section, own heading)
- The gate coverage check IS specified (GR-48, REQUIRED tier, in the manifest)
- The tracker fields DO exist with explicit "must be populated" language
- The S(x) function IS defined with a formula and explanation

**Clarity is not the problem. Volume is the problem.** At ~4,650 lines, the orchestrator cannot reliably hold all procedural requirements active. Improving the wording of those requirements doesn't change the cognitive load — it changes which 72% get executed, not whether the number stays at 72%.

### 6.3 Where the Fix Must Go

The fix must REDUCE per-agent cognitive load and MOVE judgment-dependent items into code-enforced paths.

---

## 7. Structural Fix Proposals

### 7.1 Reduce Orchestrator Load: Split the Orchestrator Role

Current: 1 orchestrator holding ~4,650 lines.
Proposed: 3 specialized orchestrator phases.

| Phase Orchestrator | Receives | Lines | Responsibility |
|-------------------|----------|-------|---------------|
| **Phase 0-1 Orchestrator** | MANIFEST quickstart + routing.md + identity-perception.md | ~1,400 | Content analysis + Brief assembly + BV gates |
| **Phase 2-3A Orchestrator** | Brief output + gate-runner-core.js + gate-manifest.json | ~2,100 | Builder spawn + Screenshots + ALL gate execution |
| **Phase 3B-3C Orchestrator** | Gate results + pa-deployment.md + pa-weaver.md + pa-guardrails-weaver.md | ~1,000 | PA deployment + Weaver + Verdict |

Each phase orchestrator writes its state to the execution tracker. The next phase orchestrator reads the tracker as state input. This transforms the tracker from a retrospective document into a state-transfer mechanism.

**Expected improvement:** Each sub-orchestrator operates at ~1,000-2,100 lines instead of ~4,650. Based on the empirical curve, this moves from ~72% compliance to ~85-90%.

### 7.2 Codify the Brief Template Completeness Check

The Brief Assembler missed hover behavior because the template had no slot for it.

**Fix:** Add a programmatic BV-05 gate: template slot coverage.

```javascript
// BV-05: Verify brief covers all recipe Phase 2 creative decisions
const recipeSteps = ['2.1 zone backgrounds', '2.2 type scale', '2.3 metaphor',
  '2.4 callout variants', '2.5 component selection', '2.6 container width',
  '2.7 hover behavior', '2.8 transition types', '2.9 coherence'];
const brief = readFile(briefPath);
const missing = recipeSteps.filter(step => !brief.match(new RegExp(step.split(' ').slice(1).join('.*'), 'i')));
if (missing.length > 0) return { status: 'FAIL', missing };
```

This converts a judgment task (the assembler must REMEMBER to include all recipe steps) into a binary check (code scans the brief for each step).

### 7.3 Codify Gate Execution Completeness

GR-48 failed because it was itself an LLM-dependent task. The meta-gate should be code, not spec.

**Fix:** The gate runner function should iterate `gate-manifest.json` and auto-execute ALL gates marked REQUIRED. Currently, the orchestrator manually calls individual gate functions. Instead:

```javascript
async function runAllRequiredGates(page, manifest) {
  const required = manifest.gates.filter(g => g.tier === 'REQUIRED');
  const results = [];
  for (const gate of required) {
    results.push(await runGate(gate.id, page));
  }
  // Auto-check: did we run all REQUIRED?
  const missing = required.filter(g => !results.find(r => r.id === g.id));
  results.push({ id: 'GR-48', status: missing.length === 0 ? 'PASS' : 'FAIL', missing });
  return results;
}
```

This removes the orchestrator's burden of remembering which gates to call. The code iterates the manifest. GR-48 becomes a structural property of the runner, not a separate gate.

### 7.4 Convert Judgment Rules to Binary Where Possible

| Current Judgment Rule | Binary Conversion | Gate |
|----------------------|-------------------|------|
| "Target 8+ components" | Count `.callout`, `.table-wrapper`, etc. classes in HTML >= 8 | GR-66 |
| "3+ channels per boundary" | Compare computed styles of adjacent zones on 6 properties | GR-50 (fix ID collision) |
| "Hover behavior exists" | Count `:hover` selectors in CSS >= 5 | GR-65 |
| "Use full RGB range (not just floor)" | Max adjacent delta >= 35 RGB AND min >= 15 | Extend GR-11 |
| "Typographic spectacle moment" | At least 1 element with font-size >= 28px outside headers | GR-70 |

Each conversion moves a judgment-dependent requirement off the agent's attention budget and onto the code-enforced path.

### 7.5 Implement the "Tracker as State Machine" Pattern

Current: Tracker is a flat document with 375 fields the orchestrator fills retrospectively.
Proposed: Tracker is a structured state machine where each phase READS its inputs and WRITES its outputs.

```
Phase 0 orchestrator:
  READ:  tracker.preflight (auto-populated by code checking file existence)
  WRITE: tracker.phase0 = { content_type, zones, density_arc, metaphor }

Phase 1 orchestrator:
  READ:  tracker.phase0
  WRITE: tracker.phase1 = { brief_lines, bv_results: {01: {status, values}}, mode }

Phase 2-3A orchestrator:
  READ:  tracker.phase1.brief_path
  WRITE: tracker.phase2 = { html_path, css_lines, mechanisms }
  WRITE: tracker.phase3a = { gate_results: [...all 42...], screenshots: [...paths...] }
```

The key insight: **fields that CAN be auto-populated SHOULD be.** File existence checks, line counts, CSS property counts, gate results — all of these are currently MANUAL tracker entries that should be CODE-GENERATED. The tracker should have ~50 manual fields (creative decisions, observations) not ~375.

---

## 8. Verdicts

### 8.1 Is LLM Attention the Root Cause?

**PARTIALLY YES.** LLM attention limits explain:
- WHY binary rules achieve 100% and judgment rules achieve ~0-65% (different processing pathways)
- WHY meta-process tasks (tracking, self-verification) are most vulnerable (lowest salience)
- WHY the orchestrator at ~4,650 lines is the weakest link (highest cognitive load)
- WHY edge-zone multi-coherence was under-executed (salience gradient)

But attention limits do NOT explain:
- WHY hover behavior was lost (template gap — structural issue, not attention)
- WHY S(x) was never computed (never integrated into any gate or template — architectural issue)
- WHY the integrative auditor ran in parallel instead of sequentially (orchestrator protocol error — possibly attention, possibly tooling)

### 8.2 Is the Fix Better Specs or Fewer Specs + More Code?

**FEWER SPECS + MORE CODE.** The evidence is overwhelming:

1. Code-enforced gates achieve 100% reliability for executed gates. Spec-stated judgment rules achieve 0-65%.
2. The orchestrator's ~72% compliance at ~4,650 lines WILL NOT improve with better wording — only with reduced volume.
3. The Brief Assembler's hover loss was caused by a missing template slot (structural) — adding more spec about "remember to include hover" would just add to the volume that already causes losses.

**The structural fix hierarchy:**
1. **First:** Move everything code-enforceable into code (gates, template completeness, tracker auto-population). This is highest ROI.
2. **Second:** Split the orchestrator role to keep each sub-orchestrator under ~2,000 lines.
3. **Third:** For remaining judgment rules, convert from aspirational targets ("use the full range") to binary minimums ("at least 1 delta >= 35 RGB") that code can check.
4. **Last resort only:** Add more spec. Only for genuinely creative dimensions that cannot be gate-checked (metaphor quality, emotional arc, compositional fluency).

### 8.3 The Paradox of Comprehensive Specification

Pipeline v3 has 10,061 lines of specification. The pipeline it specifies runs with ~72% fidelity. If we doubled the spec to 20,000 lines with more detail on every missed item, we would expect LOWER fidelity (maybe ~60%), because the additional spec volume would push MORE items past the attention threshold.

**The spec is eating itself.** Every line added to prevent a previous failure reduces the probability that other lines will be followed. The only way out is to move requirements OFF the spec and INTO code. The spec should shrink, not grow, with each iteration.

### 8.4 Empirical Attention Budget Summary

| Per-Agent Input | Expected Compliance | Category |
|----------------|-------------------|----------|
| < 300 lines | 95%+ | PA Auditors, Content Analyst |
| 300-800 lines | 85-95% | Well-focused single-task agents |
| 800-2,000 lines | 75-85% | Brief Assembler, Builder (recipe format helps) |
| 2,000-5,000 lines | 65-75% | Orchestrator, multi-responsibility agents |
| > 5,000 lines | < 65% | Danger zone — structural refactoring needed |

**Target for all agents: < 800 lines of spec input.** This is achievable by splitting the orchestrator, auto-populating the tracker, and routing only role-specific content to each agent.
