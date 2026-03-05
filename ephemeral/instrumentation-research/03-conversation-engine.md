# Post-Run Conversation Engine — System Design

**Agent:** Opus 4.6 (conversation-engineer)
**Date:** 2026-02-26
**Scope:** Data layer + artifact architecture that enables productive diagnostic, strategic, and comparative post-run conversations between user and Claude
**Sources:** EXECUTION-TRACKER-TEMPLATE.md, yegge-gas-town-2026-02-25 full artifact corpus (~107 files), retrospective 09-instrumentation.md, crack-analysis 01-crack-taxonomy.md, flagship-analysis 08-SYNTHESIS.md, weaver diagnostic + artistic reports, cross-run comparison report, MEMORY.md historical conversation patterns

---

## 0. Design Principles

### What this system must achieve

After every pipeline run, the user wants to have a conversation with a fresh Claude instance that is:

1. **Data-driven, not opinion-driven.** "The data shows the dark zone had 19 empty viewports" not "I think the dark zone might have been too dark."
2. **Causal, not symptomatic.** "Hover vocabulary was lost because Step 2.7 has no template slot in the brief template" not "There were no hover effects."
3. **Actionable, not observational.** "Adding a template slot for Step 2.7 in artifact-tc-brief-template.md would fix this" not "Hover effects should be improved."
4. **Historically grounded.** "This is the 3rd consecutive run where D-07 dispositions were partially lost -- this is a systemic pattern, not a one-off" not "D-07 was lost this time."
5. **Non-intrusive to the 14 crack dimensions.** Instrumentation must not add attention burden to builders, create new template slots that get skipped, introduce compression-lossy intermediate formats, or require voluntary recording that competes with forward-progress incentives.

### What this system must NOT do

- Add prose recording obligations to any agent (Dimension 4: Execution-Recording Divergence)
- Add late-position items to any document (Dimension 5: Position Effect / Attention Decay)
- Create new voluntary execution steps (Dimension 3: Voluntary Non-Execution)
- Require compression of diagnostic data (Dimension 2: Compression Loss at Junctions)
- Duplicate information across multiple files requiring synchronization (Dimension 8: Multi-Source Conflict)

---

## 1. The Conversation Starter: `RUN-DIGEST.md`

### Purpose

A single document that any fresh Claude instance reads to immediately hold a productive diagnostic conversation. This is NOT a retrospective (analysis). This is NOT a summary (compression). This is a **structured data presentation** -- all facts, zero interpretation, organized to make interpretation easy.

### Target: 200-400 lines

Below 200 lines loses diagnostic detail. Above 400 lines triggers the same attention decay that plagues the pipeline itself. The digest is a MAP, not a TERRITORY -- it tells you where to look, not what to think.

### Structure

```markdown
# Run Digest: {SLUG} ({DATE})

## 1. Result (5 lines)
PA-05: {initial}/4 -> {final}/4 ({delta})
Tier 5: {score}/9
Verdict: {verdict_initial} -> {verdict_final}
Classification: {FLOOR / MIDDLE / CEILING / FLAGSHIP}
Pipeline version: v{N}

## 2. Build Identity (10-15 lines)
Content: {slug} ({word_count} words, {content_type})
Mode: {APPLIED / COMPOSED}
Metaphor: "{metaphor_name}" -- {1-sentence description}
Zone architecture: {zone_count} zones
  Z1: {name} ({bg_hex}) -- {1-word role}
  Z2: {name} ({bg_hex}) -- {1-word role}
  ...
Builder model: {model}
Duration: {total} ({breakdown by phase})

## 3. Compression Chain (10 lines)
Source: {lines} lines ({words} words)
  -> Content Map: {lines} lines [{ratio}:1]
  -> Execution Brief: {lines} lines [{ratio}:1 or expansion]
  -> HTML: {lines} lines, {css_lines} CSS lines [{ratio}:1 or expansion]
Alert: {any compression > 30:1 flagged here}
Recipe keyword survival: {survived}/{total} ({pct}%)
  Missing: {list of recipe steps not found in brief}

## 4. Gate Results (20-30 lines)
Total: {pass}/{total} PASS ({pct}%)
Required: {pass}/{total} ({pct}%)
Skipped: {list with reasons}
Coverage: {executed}/{manifest_total} ({pct}%)

### Failed Gates (sorted by severity)
| Gate | Category | What Failed | Triage |
|------|----------|-------------|--------|
| GR-XX | REQUIRED | {description} | GENUINE / FALSE-POS / INTENTIONAL |

### Persistent Failures (failed in 2+ consecutive runs)
| Gate | Streak | Pattern |
|------|--------|---------|
| GR-08 | 4 runs | Builder consistently produces fractional borders |

## 5. PA Consensus Map (30-40 lines)
### Convergence Findings (3+ auditors agree)
| Finding | Auditors | Severity | Status |
|---------|----------|----------|--------|
| {description} | {count}/9 | CRITICAL/HIGH/MEDIUM | FIXED-BY-REFINE / OPEN / ACCEPTED |

### Dimension Scores (from Weaver)
| Dimension | Score | Anchor Quote |
|-----------|-------|--------------|
| DESIGNED | {Y/N/CONDITIONAL} | "{shortest quote establishing verdict}" |
| COHERENT | {Y/N/CONDITIONAL} | "{...}" |
| PROPORTIONATE | {Y/N/CONDITIONAL} | "{...}" |
| POLISHED | {Y/N/CONDITIONAL} | "{...}" |

### Emotional Arc (from Artistic Impression)
| Register | Score | Evidence |
|----------|-------|----------|
| Authority | {N}/10 | {1-line evidence} |
| Closure | {N}/10 | {1-line evidence} |
| Surprise | {N}/10 | {1-line evidence} |
| Delight | {N}/10 | {1-line evidence} |

## 6. Information Loss Trace (20-30 lines)
### Documented Losses (spec existed, never reached HTML)
| Loss | Source | Junction | Impact |
|------|--------|----------|--------|
| Hover vocabulary | Recipe Step 2.7 | Brief template has no slot | DELIGHT 4/10 |
| Signal declarations | Recipe Step 3.4c | Brief template has no slot | Gate ambiguity |
| {etc} | | | |

### Voluntary Non-Executions
| Item | Spec Location | Why Skipped | Impact |
|------|--------------|-------------|--------|
| GR-48 meta-gate | gate-manifest.json REQUIRED | Orchestrator attention budget | No gate coverage verification |
| {etc} | | | |

## 7. REFINE Analysis (15-20 lines, if applicable)
Initial PA-05: {score}/4
Post-REFINE PA-05: {score}/4
Delta: {delta} (rank: {ordinal} largest in history)
REFINE builder saw: {list of inputs}
REFINE builder did NOT see: {list of things deliberately withheld}
Key changes:
  - {change 1 with CSS/HTML specifics}
  - {change 2}
What REFINE could NOT fix: {list with reasons}

## 8. Cross-Run Delta (15-20 lines)
### vs Previous Run on Same Content
| Metric | Previous | Current | Delta |
|--------|----------|---------|-------|
| PA-05 (final) | {N} | {N} | {+/-N} |
| Tier 5 | {N} | {N} | {+/-N} |
| Gate PASS % | {N}% | {N}% | {+/-N}% |
| CSS lines | {N} | {N} | {+/-N} |
| Duration | {N}m | {N}m | {+/-N}m |
| REFINE delta | {N} | {N} | {+/-N} |

### vs Pipeline-Wide Trend
PA-05 trajectory (last 5 runs): {list}
Gate PASS trajectory: {list}
Trend: {IMPROVING / STABLE / REGRESSING}

## 9. Artifact Manifest (10 lines)
| Category | Path | Size | For Deeper Analysis |
|----------|------|------|---------------------|
| Execution Tracker | EXECUTION-TRACKER.md | {lines} | Phase-by-phase detail |
| Gate Results | p3a-gate-results.json | {lines} | Individual gate data |
| PA Reports (9+1) | p3b-pa-auditor-{A-I}.md | ~{total_lines} | Per-dimension findings |
| Weaver Diagnostic | p3c-weaver-diagnostic.md | {lines} | Score derivation |
| Weaver Artistic | p3c-weaver-artistic.md | {lines} | Experiential assessment |
| Content Map | p0-content-map.md | {lines} | Content analysis |
| Execution Brief | p1-execution-brief.md | {lines} | Brief assembly output |

## 10. Open Questions (5-10 lines)
- {Question generated by pattern detection, not speculation}
- {e.g., "3 consecutive runs show D-07 partial loss -- is this a template slot issue or attention decay?"}
- {e.g., "REFINE delta is increasing (+1.0, +1.0, +1.5) -- is the initial build getting worse or REFINE getting better?"}
```

### Why this structure works

1. **Sections 1-2** orient the reader in 30 seconds -- what happened, what was built.
2. **Sections 3-6** provide the diagnostic data layer -- compression, gates, PA consensus, information losses. A Claude instance can answer "why did this score 3.5 instead of 4.0?" by reading sections 4-6 without opening any other file.
3. **Section 7** isolates the REFINE analysis, which is the highest-leverage diagnostic for this pipeline.
4. **Section 8** provides the comparative layer without requiring the reader to open previous run digests.
5. **Section 9** is the escape hatch -- when the conversation needs to go deeper, the reader knows exactly which file to open.
6. **Section 10** seeds the conversation with data-driven questions, not generic prompts.

### Crack dimension safety

- **Zero prose recording by agents.** RUN-DIGEST.md is generated POST-RUN by the orchestrator (or a dedicated summary agent) from existing structured artifacts. No agent writes to it during the build.
- **Zero compression of diagnostic data.** The digest REFERENCES artifacts; it doesn't compress them. Gate results are summarized as counts with full JSON path for drill-down. PA findings are presented as consensus counts with individual report paths.
- **Zero voluntary execution steps.** The digest is generated from artifacts that already exist as pipeline output. It extracts, it doesn't require new recording.
- **Zero position-dependent items.** The digest is generated after the pipeline completes -- it's not an in-flight document that could be partially filled.

---

## 2. The Diagnostic Layer: From "I think" to "The data shows"

### Problem

Current post-run conversations require 10+ agents to reconstruct what happened because diagnostic data is scattered across ~20 files in inconsistent formats. The user asks "why was delight low?" and Claude has to read 9 PA reports, the weaver diagnostic, the execution brief, and the recipe to trace the causal chain. This is expensive and error-prone.

### Solution: Pre-computed Causal Chains

The RUN-DIGEST.md Section 6 (Information Loss Trace) is the key diagnostic innovation. But it requires a data source: the **Loss Ledger**.

#### Loss Ledger (`loss-ledger.json`)

Generated post-run by comparing:
- Recipe steps (from `artifact-builder-recipe.md`) vs brief contents (from `p1-execution-brief.md`)
- Brief dispositions vs HTML evidence (from `p2-{slug}.html`)
- Gate manifest vs gate execution log
- PA question assignments (from `pa-deployment.md`) vs PA reports filed

```json
{
  "recipe_to_brief": [
    {
      "recipe_step": "2.7",
      "recipe_content": "Hover behavior vocabulary",
      "brief_line": null,
      "status": "ABSENT",
      "mechanism": "template_slot_absence",
      "crack_dimension": 1,
      "downstream_impact": "DELIGHT 4/10 — zero hover states deployed"
    }
  ],
  "brief_to_html": [
    {
      "brief_item": "D-07 edge intentionality",
      "brief_line": 245,
      "html_evidence": "partial — ::selection absent, hover absent, tabular-nums present",
      "status": "PARTIAL",
      "mechanism": "position_effect",
      "crack_dimension": 5,
      "downstream_impact": "3/6 D-07 sub-items implemented"
    }
  ],
  "gate_execution": [
    {
      "gate_id": "GR-48",
      "manifest_status": "REQUIRED",
      "execution_status": "NOT_RUN",
      "mechanism": "voluntary_non_execution",
      "crack_dimension": 3,
      "downstream_impact": "Gate coverage unverified — 12 gates potentially missed"
    }
  ],
  "pa_coverage": [
    {
      "question_id": "PA-05",
      "assigned_to": ["A (primary)", "B (XV-POLISHED)", "C (XV-PROPORTIONATE)", "F (XV-DESIGNED)", "G (XV-COHERENT)"],
      "answered_by": ["A", "B", "C", "F", "G"],
      "status": "COMPLETE"
    }
  ]
}
```

#### Why this enables "the data shows" conversations

With the loss ledger, a fresh Claude instance can answer:

- "Why was delight low?" -> `loss-ledger.json > recipe_to_brief > step 2.7 > ABSENT > template_slot_absence > DELIGHT 4/10`
- "What fell through the cracks?" -> `loss-ledger.json > all entries where status != COMPLETE`
- "Is this a new problem or recurring?" -> Cross-reference with previous runs' loss-ledger.json (same step, same mechanism?)
- "What would fix it?" -> `crack_dimension: 1` -> known fix: add template slot. `crack_dimension: 5` -> known fix: reorder brief to front-load critical items.

The loss ledger maps every gap to a **crack dimension** (1-14), which maps to a **known fix category**. This makes the conversation immediately actionable.

---

## 3. The Strategic Layer: From "this was bad" to "here's what the data suggests"

### Problem

Current strategic conversations rely on Claude re-deriving recommendations from raw data. This produces reasonable but inconsistent advice -- different Claude instances analyzing the same data may propose different (even contradictory) changes.

### Solution: Intervention Registry + Effectiveness Tracking

#### Intervention Registry (`intervention-registry.json`)

A persistent cross-run file tracking every pipeline change, when it was introduced, and its measured effect.

```json
{
  "interventions": [
    {
      "id": "INT-001",
      "name": "D-09 background hex lock",
      "description": "Pre-compute zone background hex values in brief instead of leaving to builder discretion",
      "introduced_at_run": "yegge-gas-town-2026-02-25",
      "pipeline_version": "v3-wave3",
      "crack_dimension_targeted": 2,
      "hypothesis": "Eliminates background delta compression loss",
      "measured_effect": {
        "before": {"adjacent_zone_delta_failures": 3, "runs_measured": 2},
        "after": {"adjacent_zone_delta_failures": 0, "runs_measured": 1}
      },
      "verdict": "EFFECTIVE (n=1, needs confirmation)",
      "side_effects": "None observed"
    },
    {
      "id": "INT-002",
      "name": "REFINE cycle with artistic-only input",
      "description": "Second builder reads only existing HTML + weaver artistic impression, never sees gates/scores/brief",
      "introduced_at_run": "yegge-gas-town-2026-02-25",
      "pipeline_version": "v3-wave3",
      "crack_dimension_targeted": 5,
      "hypothesis": "Fresh attention budget + perception-driven feedback produces better targeted fixes than re-running full build",
      "measured_effect": {
        "before": {"avg_pa05_delta_from_fix_cycle": 0.5, "runs_measured": 3},
        "after": {"avg_pa05_delta_from_fix_cycle": 1.5, "runs_measured": 1}
      },
      "verdict": "HIGHLY EFFECTIVE (n=1, largest single-cycle improvement in history)",
      "side_effects": "New REFINE builder may introduce regressions (GR-52 nav a11y)"
    }
  ]
}
```

#### How this enables strategic conversations

Instead of Claude deriving interventions from scratch, the conversation becomes:

- "What should we change for next time?" -> Read `loss-ledger.json` for this run's losses, cross-reference with `intervention-registry.json` for what's already been tried, propose NEW interventions only for unaddressed crack dimensions.
- "Did the hex lock help?" -> `intervention-registry.json > INT-001 > measured_effect > before: 3 failures, after: 0 failures > EFFECTIVE`
- "Are we making the same mistakes?" -> Compare this run's loss-ledger crack dimensions with previous runs'. If dimension 5 (position effect) appears in 4+ consecutive runs, the interventions targeting it (INT-xxx) are insufficient.

#### Recommendation Engine Logic

The conversation agent can follow this algorithm:

```
1. Read loss-ledger.json for current run
2. For each loss:
   a. Look up crack_dimension in intervention-registry.json
   b. If an intervention exists AND was effective: "This should have been fixed by INT-xxx but wasn't — investigate why"
   c. If an intervention exists AND was NOT effective: "INT-xxx was tried but didn't work — propose alternative"
   d. If NO intervention exists: "This is a new/unaddressed gap — propose intervention"
3. Rank proposals by:
   a. Frequency (how many runs has this loss appeared?)
   b. Impact (what quality gap does it create?)
   c. Implementability (is this a file edit, a new gate, or an architecture change?)
```

---

## 4. The Comparative Layer: Cross-Run Intelligence

### Problem

Cross-run comparison currently requires reading multiple run directories and manually aligning data. The comparison report in the yegge-gas-town retrospective was manually constructed by a dedicated agent.

### Solution: `run-summary.json` + `PIPELINE-HISTORY.json`

#### Per-Run Summary (`run-summary.json`)

Generated automatically after every run. 60-80 fields of structured data:

```json
{
  "meta": {
    "build_id": "yegge-gas-town-2026-02-25",
    "date": "2026-02-25",
    "pipeline_version": "v3.1-wave3",
    "content_slug": "yegge-gas-town",
    "content_words": 5270,
    "content_type": "MIXED",
    "mode": "COMPOSED",
    "metaphor": "Factory/Refinery",
    "zone_count": 5,
    "builder_model": "Opus"
  },
  "quality": {
    "pa05_initial": 2.0,
    "pa05_final": 3.5,
    "pa05_delta": 1.5,
    "tier5_score": 9,
    "tier5_max": 9,
    "verdict_initial": "REFINE",
    "verdict_final": "SHIP WITH FIXES",
    "classification": "CEILING",
    "designed": "CONDITIONAL_FAIL_THEN_PASS",
    "coherent": "CONDITIONAL_PASS",
    "proportionate": "FAIL_THEN_PASS",
    "polished": "CONDITIONAL_PASS"
  },
  "emotional_arc": {
    "authority": 8,
    "closure": 7,
    "surprise": 6,
    "delight": 4
  },
  "gates": {
    "total_in_manifest": 42,
    "total_executed": 30,
    "total_pass": 22,
    "total_fail": 7,
    "total_skip": 1,
    "required_pass_rate": 0.78,
    "persistent_failures": ["GR-08", "GR-09", "GR-60"]
  },
  "compression": {
    "source_lines": 1324,
    "content_map_lines": 71,
    "brief_lines": 272,
    "html_lines": 2931,
    "css_lines_est": 1100,
    "source_to_map_ratio": 18.9,
    "recipe_keyword_survival_pct": 85
  },
  "losses": {
    "template_slot_absence": 2,
    "compression_loss": 1,
    "voluntary_non_execution": 4,
    "recording_divergence": 3,
    "position_effect": 2,
    "total_documented": 12
  },
  "process": {
    "duration_minutes": 200,
    "agents_spawned": 30,
    "agent_respawns": 2,
    "refine_cycles": 1,
    "screenshots_total": 68,
    "pa_question_coverage_pct": 100,
    "experiential_convergence": 9,
    "brief_recipe_checklist_ratio": 6.0
  },
  "fixes": {
    "mechanical": 3,
    "structural": 2,
    "compositional": 0
  }
}
```

#### Pipeline History (`PIPELINE-HISTORY.json`)

A persistent file that accumulates run-summary entries. Enables:

```json
{
  "runs": [
    {"build_id": "gas-town-steve-yegge-2026-02-20", "pa05_final": 3.5, "...": "..."},
    {"build_id": "gas-town-va-pipeline-2026-02-23", "pa05_final": 3.0, "...": "..."},
    {"build_id": "V3-yegge-gas-town-2026-02-24", "pa05_final": 3.0, "...": "..."},
    {"build_id": "yegge-gas-town-2026-02-25", "pa05_final": 3.5, "...": "..."}
  ],
  "trends": {
    "pa05_trajectory": [3.5, 3.0, 3.0, 3.5],
    "gate_pass_rate_trajectory": [0.96, 0.74, 0.74, 0.76],
    "refine_delta_trajectory": [null, null, 1.0, 1.5],
    "css_lines_trajectory": [null, 800, 900, 1100],
    "persistent_failure_gates": {
      "GR-08": {"streak": 4, "first_seen": "2026-02-20"},
      "GR-09": {"streak": 3, "first_seen": "2026-02-23"}
    },
    "persistent_loss_dimensions": {
      "position_effect": {"streak": 3, "runs": ["2026-02-23", "2026-02-24", "2026-02-25"]},
      "voluntary_non_execution": {"streak": 2, "runs": ["2026-02-24", "2026-02-25"]}
    }
  }
}
```

#### Content-Difficulty Normalization

Comparing PA-05 across runs with different content is misleading. A 3.5 on a dense technical document may represent more skill than a 4.0 on a narrative essay. The run-summary includes content metrics (word count, content type, zone count, metaphor complexity) that enable rough normalization:

```
difficulty_index = (word_count / 1000) * content_type_weight * zone_count
  where content_type_weight = {PROSE: 0.8, MIXED: 1.0, VISUAL: 1.2}

normalized_pa05 = pa05_final * (difficulty_index / baseline_difficulty)
```

This is approximate but better than raw score comparison.

---

## 5. The Question Bank: Structured Diagnostic Conversation

### Always-Ask Questions (Every Run)

These questions are productive for EVERY run regardless of outcome. They are ordered from most actionable to most exploratory.

#### Tier 1: Result Interpretation (3 questions)

1. **"What is the single largest quality gap between current classification and the next tier?"**
   - Data source: PA dimension scores + Tier 5 sub-scores + emotional arc
   - Expected answer format: "{dimension} at {score} -- specifically {evidence} -- which maps to {crack_dimension} via {loss_ledger_entry}"

2. **"What specific information reached the builder, and what was lost?"**
   - Data source: loss-ledger.json recipe_to_brief + brief_to_html sections
   - Expected answer format: "{N} recipe steps survived, {M} lost. Highest-impact losses: {list with downstream quality impacts}"

3. **"If we re-ran this exact content tomorrow with zero pipeline changes, what would be different?"**
   - Data source: loss-ledger voluntary_non_execution + recording_divergence entries
   - Expected answer format: "Stochastic losses: {list -- agent attention varies}. Deterministic losses: {list -- template slots still missing}. Expected PA-05 range: {min}-{max}"

#### Tier 2: Causal Analysis (3 questions)

4. **"Which crack dimensions contributed to this result?"**
   - Data source: loss-ledger.json crack_dimension distribution
   - Expected answer format: Histogram of losses by dimension. "Dimension 5 (position effect) caused {N} losses, the most of any dimension. Pattern: {evidence}"

5. **"What did the REFINE cycle fix, and what couldn't it fix?"**
   - Data source: REFINE section of RUN-DIGEST + pre/post gate comparison + pre/post PA comparison
   - Expected answer format: "Fixed: {list with mechanisms}. Could not fix: {list with structural reasons why REFINE is insufficient}"

6. **"Where did the pipeline's self-verification mechanisms fail?"**
   - Data source: gate coverage, GR-48 status, tracker fill rate, BV gate evidence quality
   - Expected answer format: "{N} verification mechanisms worked, {M} failed. The pipeline claimed {X} but evidence shows {Y}"

#### Tier 3: Strategic Planning (3 questions)

7. **"What is the highest-leverage single change for the next run?"**
   - Data source: loss-ledger.json (frequency x impact ranking) + intervention-registry.json (what's already been tried)
   - Expected answer format: "{intervention} targeting crack dimension {N} would address {M} documented losses with estimated PA-05 impact of {delta}"

8. **"Are we making progress or treading water?"**
   - Data source: PIPELINE-HISTORY.json trend trajectories
   - Expected answer format: "PA-05 trajectory: {trend}. Gate pass rate: {trend}. Persistent failures: {streak analysis}. Assessment: {IMPROVING/STABLE/REGRESSING}"

9. **"What experiment would resolve the most uncertainty?"**
   - Data source: intervention-registry.json (interventions with verdict NEEDS_CONFIRMATION) + loss-ledger persistent patterns
   - Expected answer format: "{experiment} would test whether {hypothesis}. Cost: {effort}. Information value: resolves {N} open questions"

### Conditional Questions (Triggered by Patterns)

These questions are asked ONLY when specific conditions are detected in the run data.

| Trigger Condition | Question | Data Source |
|-------------------|----------|-------------|
| PA-05 delta > 1.0 in REFINE | "What made the REFINE cycle unusually effective? Was it the builder, the artistic input, or the content?" | Weaver artistic diff, REFINE builder input set |
| PA-05 < 2.5 initial | "Is this a content-difficulty problem, a brief quality problem, or a builder execution problem?" | Content map complexity, brief metrics, HTML analysis |
| Gate PASS rate < 70% | "Are the gates too strict or is the build genuinely failing?" | Per-gate triage (GENUINE vs FALSE-POS), gate code review |
| Same gate fails 3+ runs | "Is this gate measuring the right thing? Should it be FIXED, RECALIBRATED, or REMOVED?" | Gate history, false positive rate |
| Emotional arc has any register < 5/10 | "What specific spec item would have raised {register} above 5?" | Loss ledger entries mapping to that register |
| Loss ledger shows > 5 losses in one crack dimension | "Is crack dimension {N} getting worse? What structural change would eliminate it?" | Cross-run dimension frequency |
| Metaphor matches a previous run | "Is this metaphor convergence or derivation failure?" | Previous metaphor names, divergence table |
| Duration > 4 hours | "Where did the time go? Is this pipeline overhead or content complexity?" | Timing ledger per-phase breakdown |
| Agent respawns > 3 | "Why are agents failing? Is this a prompt problem or a resource problem?" | Agent metrics, respawn reasons |
| Experiential convergence < 5/9 | "Is the PA detecting real issues or are auditors disagreeing about quality?" | Per-auditor findings, cross-validator scores |

### Never-Ask Questions (Anti-Pattern List)

| Anti-Pattern | Why It's Wasteful | What to Ask Instead |
|-------------|-------------------|---------------------|
| "How could we make this page better?" | Too generic -- no data constraint, invites speculation | "What specific information loss caused the largest quality gap?" |
| "What do you think of the design?" | Subjective -- different Claude instances give different answers | "What do the 9 PA auditors agree on?" (convergence findings) |
| "Should we change the pipeline?" | Binary question without evidence | "Which intervention has the best measured effectiveness?" |
| Re-analyzing things already covered by gates | Gates already measured this -- redundant work | "Which gate results are surprising? Which contradict PA findings?" |
| "What would a human designer do differently?" | Speculative, untestable, not actionable | "What did CD-006 do at this junction that this page didn't?" |
| Proposing changes without checking intervention history | May duplicate an already-tried intervention | "Has this been tried before? What was the measured effect?" |
| Discussing crack dimensions abstractly | Theoretical without run-specific grounding | "How many losses in this run map to dimension {N}?" |
| Comparing to an ideal that has never been achieved | Flagship 4/4 may not exist as a discrete register (per contrarian finding) | "What is the smallest concrete change that would measurably improve the weakest dimension?" |

---

## 6. The Anti-Pattern List: Conversational Waste Elimination

### Category A: Redundant Analysis

| Pattern | Cost | Signal |
|---------|------|--------|
| Re-reading all 9 PA reports to "understand quality" | ~40K tokens, 15 minutes | The weaver already synthesized these. Read weaver diagnostic first, PA reports only for drill-down on specific findings. |
| Running programmatic analysis on the HTML | Variable | Gates already did this. Gate results JSON has all measurements. Duplicate analysis adds noise. |
| Asking Claude to "score" the page | Unreliable | PA-05 already exists from 9 calibrated auditors + weaver. A single Claude instance's re-scoring adds zero information. |

### Category B: Speculation Without Data

| Pattern | Cost | Signal |
|---------|------|--------|
| "Maybe the builder didn't understand the metaphor" | Unfalsifiable | Check the loss ledger. Was the metaphor present in the brief? Did the builder's conviction statement reference it? |
| "The pipeline might be adding too many constraints" | Unmeasured | Check the brief recipe:checklist ratio. Is it above 3:1? If yes, constraints are NOT the problem. |
| "Perhaps we need a different content type to test" | Avoids current data | The current run has data. Analyze it before proposing new experiments. |

### Category C: Crack Dimension Violations

| Pattern | Risk | Mitigation |
|---------|------|------------|
| Proposing a new recording field for builders | Creates Dimension 4 (recording divergence) -- builders won't fill it under attention budget pressure | Make it automated or post-hoc |
| Proposing a new gate for each discovered problem | Creates Dimension 5 (position effect) -- more gates = later gates get skipped | Consolidate into existing gates or make them automated meta-checks |
| Proposing longer briefs to "capture more detail" | Creates Dimension 2 (compression loss at junctions) -- more brief content = more builder attention decay | Keep brief at 100-300 lines. Add detail to value tables (separate files the builder references) |
| Proposing new mandatory steps | Creates Dimension 3 (voluntary non-execution) -- voluntary steps get skipped | Make new steps automated (code) not voluntary (agent behavior) |

---

## 7. System Architecture: How the Pieces Connect

### Information Flow

```
PIPELINE RUN
    |
    v
[Existing Artifacts]                    [New Automated Outputs]
- EXECUTION-TRACKER.md                  - loss-ledger.json
- p3a-gate-results.json                 - run-summary.json
- p3b-pa-auditor-{A-I}.md              - RUN-DIGEST.md
- p3c-weaver-diagnostic.md
- p3c-weaver-artistic.md
- p0-content-map.md
- p1-execution-brief.md
- p2-{slug}.html
    |                                        |
    v                                        v
[Post-Run Generator]  ----reads---->  [Persistent Files]
  (orchestrator or                    - PIPELINE-HISTORY.json
   summary agent)                     - intervention-registry.json
                                      - crack-dimension-stats.json
                                            |
                                            v
                                    [CONVERSATION]
                                    Fresh Claude reads:
                                    1. RUN-DIGEST.md (200-400 lines)
                                    2. If needed: loss-ledger.json
                                    3. If needed: PIPELINE-HISTORY.json
                                    4. If needed: intervention-registry.json
                                    5. Deep dive: specific artifact files
```

### Generation Sequence

After the pipeline produces its verdict, the orchestrator (or a dedicated summary agent) runs the following sequence:

1. **loss-ledger.json** -- Diff recipe vs brief keywords, brief dispositions vs HTML evidence, gate manifest vs gate execution, PA manifest vs PA reports.
2. **run-summary.json** -- Extract structured metrics from tracker, gate JSON, weaver diagnostic, content map.
3. **RUN-DIGEST.md** -- Render the digest template using run-summary.json + loss-ledger.json + cross-reference with PIPELINE-HISTORY.json for trends.
4. **PIPELINE-HISTORY.json** -- Append run-summary to persistent history, recompute trends.
5. **intervention-registry.json** -- Update measured_effect fields for any interventions active in this run.

Total generation cost: ~15 minutes of orchestrator time (or 1 summary agent). Produces ~500 lines of structured diagnostic data that replaces ~10 retrospective agents (~50K lines of analysis).

### File Locations

All conversation engine files live in two places:

**Per-run (in build output directory):**
```
ephemeral/builds/{slug}-{date}/
  RUN-DIGEST.md          # The conversation starter
  loss-ledger.json       # Causal chain data
  run-summary.json       # Structured metrics
```

**Persistent (in pipeline root):**
```
ephemeral/va-extraction/
  PIPELINE-HISTORY.json       # Cross-run accumulator
  intervention-registry.json  # What's been tried and measured
  crack-dimension-stats.json  # Persistent crack dimension frequencies
```

### Conversation Initialization Protocol

When the user starts a post-run conversation, Claude should:

1. Read `RUN-DIGEST.md` (mandatory -- 200-400 lines, all orientation needed)
2. State the result and classification in the first message
3. Present the top 3 open questions from Section 10
4. Wait for the user's direction before reading any deeper artifacts
5. When drilling down, read the specific artifact referenced in Section 9 -- NOT all artifacts

This prevents the "boil the ocean" anti-pattern where Claude reads every file before the conversation starts.

---

## 8. The Crack Dimension Safety Assessment

Every component of this system is evaluated against the 14 crack dimensions:

| Component | Dim 1 (Template Slot) | Dim 2 (Compression) | Dim 3 (Non-Execution) | Dim 4 (Recording) | Dim 5 (Position) | Risk |
|-----------|----------------------|---------------------|----------------------|-------------------|------------------|------|
| RUN-DIGEST.md | N/A -- post-run | N/A -- references, doesn't compress | LOW -- generated, not voluntary | N/A -- no agent recording | N/A -- post-run | SAFE |
| loss-ledger.json | N/A | N/A | MEDIUM -- orchestrator must run diff | N/A | N/A | MONITOR |
| run-summary.json | N/A | N/A | MEDIUM -- orchestrator must extract | N/A | N/A | MONITOR |
| PIPELINE-HISTORY.json | N/A | N/A | LOW -- append-only, simple | N/A | N/A | SAFE |
| intervention-registry.json | N/A | N/A | MEDIUM -- manual updates needed | N/A | N/A | MONITOR |

The two MEDIUM-risk items (loss-ledger generation and run-summary extraction) could be mitigated by making them automated scripts rather than orchestrator tasks. A `generate-diagnostics.sh` script that reads gate JSON, PA reports, and the execution tracker would eliminate the voluntary non-execution risk entirely.

---

## 9. What This System Does NOT Do (And Why)

### It does not replace deep analysis sessions

When something genuinely novel happens (new failure mode, architecture question, strategic pivot), the RUN-DIGEST is insufficient. It provides the data for conversation but not the analysis. Deep sessions with multiple Opus agents remain the right tool for novel problems. The conversation engine makes these sessions RARER (by handling routine diagnostics) and MORE PRODUCTIVE (by providing structured data input).

### It does not automate recommendations

The intervention-registry tracks what has been tried and measured. It does NOT automatically select the next intervention. That decision requires understanding user priorities, resource constraints, and strategic context that only the conversation can provide.

### It does not score quality

The PA protocol scores quality. The conversation engine presents those scores with context and causal chains. Attempting to have the conversation engine derive its own quality assessment would create a competing signal that undermines the PA protocol.

### It does not require pipeline changes during the build

Everything in this system is POST-RUN. The pipeline itself is untouched. No new agent roles, no new gates, no new recording obligations. The only addition is a ~15-minute generation step after the pipeline verdict.

---

## 10. Implementation Priority

| Priority | Component | Effort | Impact |
|----------|-----------|--------|--------|
| P0 | RUN-DIGEST.md template + generation protocol | 2-3 hours | Replaces 10-agent retrospective for routine runs |
| P0 | run-summary.json schema | 1 hour | Enables cross-run comparison |
| P1 | loss-ledger.json generation | 3-4 hours | Enables "the data shows" diagnostic conversations |
| P1 | PIPELINE-HISTORY.json | 1 hour | Enables trend analysis |
| P2 | intervention-registry.json | 2 hours initial + ongoing | Enables strategic conversations |
| P2 | Question bank integration | 1 hour | Structures conversations productively |
| P3 | Automated generation script | 4-6 hours | Eliminates voluntary non-execution risk on diagnostics |
| P3 | crack-dimension-stats.json | 2 hours | Enables cross-run crack pattern detection |

**Total P0+P1 effort: ~8 hours.** This is the minimum viable conversation engine.

**Total all priorities: ~18 hours.** This is the complete system.

---

## 11. Worked Example: Conversation Using This System

### Scenario: Post-run conversation for yegge-gas-town-2026-02-25

**User opens conversation. Claude reads RUN-DIGEST.md.**

> **Claude:** This run scored PA-05 3.5/4 after REFINE (+1.5 from 2.0 initial), classified as CEILING tier approaching Flagship. Tier 5: 9/9. Verdict: SHIP WITH FIXES (5 fixes: 3 mechanical, 2 structural).
>
> Three data-driven questions stand out:
> 1. Hover vocabulary (recipe Step 2.7) never reached the builder -- this is the 2nd consecutive run with this loss. Is this the template slot problem or was it deliberately omitted?
> 2. The REFINE delta (+1.5) is the largest ever. The previous REFINE deltas were +0.5 (average) and +1.0 (run A). Is the initial build getting worse or is REFINE getting better?
> 3. GR-48 meta-gate was REQUIRED but never run -- 3rd consecutive skip. This crack dimension (voluntary non-execution) now has a 3-run streak.

**User:** "Let's dig into why REFINE was so effective this time."

> **Claude:** The loss ledger shows what the REFINE builder received vs the initial builder:
>
> | | Initial Builder | REFINE Builder |
> |---|---|---|
> | Input lines | ~3,100 (brief + references) | ~2,704 (existing HTML + 33-line artistic) |
> | Disposition items | 9 (at position 193-272 of brief) | 0 (no brief) |
> | Feedback type | Prescriptive (recipe steps) | Perceptive ("someone forgot to turn on the lights") |
> | Attention split | 9 dispositions + identity + recipe + references | 1 page + 6 instructions |
>
> The data suggests three factors:
> 1. **Attention budget release.** Initial builder held 3,100 lines across 5 files. REFINE builder held 1 file + 33 lines of artistic feedback. The attention budget was concentrated on targeted improvements rather than distributed across the full spec.
> 2. **Perception vs prescription.** The artistic impression contains zero thresholds, zero gate references, zero compliance language. It describes the EXPERIENCE of scrolling through the page. The initial builder received thresholds; the REFINE builder received a perceptual account.
> 3. **Working from reality vs imagination.** The initial builder constructed from scratch. The REFINE builder edited an existing artifact. Construction requires holding the entire architecture in working memory; editing requires holding only the delta.
>
> Cross-run comparison from PIPELINE-HISTORY: REFINE deltas are trending UP (null, null, +1.0, +1.5). Initial PA-05 scores are trending DOWN (n/a, n/a, ~2.0, 2.0). This suggests the initial build is NOT improving but REFINE is getting better at rescuing it. The intervention-registry shows REFINE-with-artistic-only (INT-002) was introduced this run. Measuring its effect requires at least one more run.

**User:** "So what should we change for next time?"

> **Claude:** The loss ledger for this run shows 12 documented losses across 5 crack dimensions. The highest-frequency dimension is Dimension 3 (voluntary non-execution) with 4 entries. The highest-impact loss is Step 2.7 (hover vocabulary, Dimension 1: template slot absence) which directly caused DELIGHT 4/10.
>
> Checking the intervention registry: no intervention targets Step 2.7 yet. No intervention targets the GR-48 non-execution streak.
>
> Recommended interventions (ranked by impact x frequency):
> 1. **Add template slot for Step 2.7 in artifact-tc-brief-template.md.** Addresses Dimension 1 (template slot absence). Effort: 15 minutes. Expected impact: DELIGHT should rise from 4/10. This is a file edit, not an architecture change.
> 2. **Make GR-48 the automatic final step of gate-runner-core.js.** Addresses Dimension 3 (voluntary non-execution). Effort: 30 minutes. Expected impact: ensures gate coverage verification on every run. Eliminates the 3-run skip streak.
> 3. **Front-load D-07 dispositions in brief.** Addresses Dimension 5 (position effect). Move edge intentionality from position 245 to position 50 in the brief. Effort: 15 minutes. Expected impact: D-07 sub-items should improve from 3/6 to 5-6/6.
>
> All three are file edits. None add new agent roles, new gates, or new recording obligations. None violate crack dimension safety.

---

*Conversation engine design complete. Total output: ~400 lines of system spec + ~200 lines of worked example.*
