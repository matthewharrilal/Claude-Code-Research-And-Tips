# Audit: Logging Mechanisms and Retrospection Capability — Pipeline v3

**Agent:** logging-retrospection-auditor
**Date:** 2026-02-24
**Sources:** EXECUTION-TRACKER-TEMPLATE.md (328 lines), MANIFEST.md (1,197 lines), artifact-orchestrator.md (1,058 lines), experiment-protocol.md (52 lines), pa-manifest.md (89 lines), 17-manifest-dual-behavior.md (708 lines)
**Scope:** Can the pipeline answer "why did the builder produce X?" after a run completes?

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Inventory of Existing Logging Mechanisms](#2-inventory-of-existing-logging-mechanisms)
3. [Retrospection Capability Assessment](#3-retrospection-capability-assessment)
4. [Agent Prompt Template Metadata Analysis](#4-agent-prompt-template-metadata-analysis)
5. [Experiment Protocol Sufficiency](#5-experiment-protocol-sufficiency)
6. [Missing Logging — Gap Catalog](#6-missing-logging--gap-catalog)
7. [Severity Assessment and Recommendations](#7-severity-assessment-and-recommendations)

---

## 1. Executive Summary

Pipeline v3 has **strong retrospection infrastructure** compared to the pre-v3 pipeline, which had zero execution accountability mechanisms. The Execution Tracker Template (EXECUTION-TRACKER-TEMPLATE.md) combined with the PA Manifest (pa-manifest.md) together capture ~80% of what a post-mortem investigator would need. However, **critical gaps remain** in four areas:

| Area | Coverage | Verdict |
|------|----------|---------|
| Agent spawn times and models | GOOD — metadata tables per phase | Sufficient |
| Gate results | GOOD — structured JSON + summary table | Sufficient |
| PA scores and auditor detail | GOOD — per-auditor tracking + cross-validation | Sufficient |
| Routing verification | GOOD — per-phase checkbox clusters | Sufficient |
| Conviction statement capture | PARTIAL — checkbox exists but no inline capture | Gap |
| Brief content preservation | MISSING — brief existence verified but content not logged | **BLOCKING gap** |
| Builder prompt reconstruction | MISSING — no record of exact prompt sent | **BLOCKING gap** |
| Agent output quality metadata | MISSING — no output size, token count, or structure validation | Gap |
| Decision rationale (mode, verdict) | PARTIAL — fields exist but format is unstructured | Gap |
| Experiment variable tracking | MISSING — experiment protocol has no per-run variable isolation record | Gap |
| Error/anomaly logging | PARTIAL — anomaly keyword scan exists but no structured error log | Gap |
| Cross-run comparison | MISSING — no mechanism to compare two tracker files | Gap |

**Bottom line:** The pipeline can answer "which gates failed?" and "which PA auditors caught what?" with high confidence. It CANNOT reliably answer "why did the builder produce X?" because the builder's exact input (the assembled brief) is verified for existence but not preserved in the tracker, and the builder's prompt is not logged.

---

## 2. Inventory of Existing Logging Mechanisms

### 2.1 Execution Tracker Template (EXECUTION-TRACKER-TEMPLATE.md, 328 lines)

This is the primary per-run accountability document. Architecture: Option B+F Hybrid (checklist + interleaved log sections), as recommended by the dual-behavior analysis (17-manifest-dual-behavior.md).

**What it captures:**

| Category | Fields | Lines | Assessment |
|----------|--------|-------|------------|
| Build Metadata | DATE, CONTENT_PATH, SLUG, MODE, BUILDER_MODEL, START/END/DURATION | 8 fields | GOOD — all essential build parameters |
| Pre-Flight Checklist | 15 file existence checks | 15 checkboxes | GOOD — catches missing prerequisites |
| Phase 0 | Agent, Model, Start, End, Output Path + Content Map summary + Mode decision | ~20 lines | GOOD — captures decision rationale |
| Phase 1 | Agent, Model, Start, End, Output Path + 8 routing verifications + BV gate results | ~25 lines | GOOD — routing verification is thorough |
| Phase 2 | Agent, Model, Start, End, Output Path + 10 routing verifications + conviction/self-eval checks | ~20 lines | PARTIAL — routing checked, content not preserved |
| Phase 3A | Screenshots (9 checkboxes) + Gate Runner summary table (33 gates across 7 categories) | ~35 lines | GOOD — structured gate results |
| Phase 3B | 9 auditor rows (specialty, questions, output path, status) + routing verification (5 checkboxes) + integrative auditor | ~30 lines | GOOD — per-auditor tracking |
| Phase 3C | Weaver metadata + routing verification + PA-05 score with sub-criteria + Tier 5 + verdict | ~25 lines | GOOD — verdict fully decomposed |
| Execution Summary | Duration, agent count, BV cycles, gate pass rate, PA-05, verdict, circuit breaker | 7 fields | GOOD — quick-reference summary |
| Output Files Manifest | 17 file entries with path + existence check | ~20 lines | GOOD — verifies all artifacts exist |
| Post-Run Verification | Completeness + Consistency + Output Correspondence checks | ~30 lines | GOOD — self-verifying structure |

**Total logging capacity:** ~60 checkboxes, ~30 fill-in fields, ~7 structured tables, 1 output manifest.

### 2.2 PA Manifest (pa-manifest.md, 89 lines)

Separate per-run tracking for the perceptual audit specifically.

**What it captures:**

| Category | Fields | Assessment |
|----------|--------|------------|
| Run Information | Page, date, build agent, screenshot count, viewports | GOOD |
| Auditor Report Receipt | 10-row table: auditor letter, role, question count, report received, questions answered, evidence present | GOOD — per-auditor completeness |
| PA-05 Cross-Validation | 4-row table: sub-criterion, primary score, cross-validator identity, cross score, agreement, weaver resolution | GOOD — catches scoring discrepancies |
| Manifest Completeness | 6 verification checkboxes | GOOD |
| Weaver Verdict | PA-05, Tier 5, combined verdict, ship decision, fix-type summary, emotional arc shape | GOOD — verdict fully decomposed |
| Weaver Verification | 5 additional completeness checks | GOOD |

**Assessment:** The PA Manifest is well-designed for PA-specific retrospection. It captures WHO scored WHAT, whether scores agree, and how the weaver resolved disagreements. This is sufficient to answer "which PA auditors caught what?" definitively.

### 2.3 Per-Agent Output Logging (MANIFEST.md Section 4)

The MANIFEST mandates timestamped output files per agent:

```
p0-content-analyst-20260224T1430.md
p1-brief-assembler-20260224T1445.md
p2-builder-20260224T1530.html
p3a-gate-runner-20260224T1535.json
p3b-pa-auditor-{A..I}-20260224T1540.md
p3b-integrative-20260224T1555.md
p3c-weaver-20260224T1600.md
```

This is stated at MANIFEST.md lines 523-540: "Every agent spawn MUST log its output to a timestamped file... No agent output should be ephemeral — all outputs are preserved for the full build lifecycle."

**Assessment:** GOOD in specification. The naming convention enables chronological reconstruction. However, there is no verification that agents actually produced well-structured output (see Gap #4 below).

### 2.4 Gate Runner Results (Structured JSON)

The gate runner outputs structured JSON with PASS/FAIL for all 33 Playwright gates. The Execution Tracker captures a summary table with per-category pass/fail counts. The raw JSON is preserved as `p3a-gate-runner-{timestamp}.json`.

**Assessment:** EXCELLENT. Programmatic gates produce the most reliable logging in the pipeline. The JSON is machine-parseable, the summary table is human-readable, and the raw data is preserved.

### 2.5 Conviction Statement

The Execution Tracker has a checkbox (Phase 2, line 128): `[ ] Conviction statement present (HTML comment at top)`. The MANIFEST specifies the conviction must be a 3-sentence HTML comment at the top of the builder's output.

**Assessment:** PARTIAL. The existence is checked, but the conviction text itself is not captured in the tracker. A retrospective investigator must open the HTML file to read it.

---

## 3. Retrospection Capability Assessment

For each key retrospective question, how well can the pipeline answer it after a completed run?

### 3.1 "Why did the builder produce X?"

**Capability: 60% — INSUFFICIENT**

What we CAN reconstruct:
- The mode selection (APPLIED/COMPOSED) and rationale — from Phase 0/0.5 tracker fields
- What reference files were sent (routing verification checkboxes)
- The builder's conviction statement (from the HTML file)
- The builder's self-evaluation (from the HTML file)
- What the builder did NOT receive (negative routing checkboxes)

What we CANNOT reconstruct:
- **The exact Execution Brief the builder received.** The tracker verifies the brief EXISTS (Phase 1 output path) and checks BV gates against it, but does not preserve its content. The brief is the builder's PRIMARY input — without it, we cannot determine if the builder followed its instructions or deviated.
- **The exact prompt sent to the builder agent.** The prompt templates in Appendix E are static templates with `{VARIABLE}` placeholders. The tracker does not record the filled-in prompt. If the orchestrator deviated from the template or made a substitution error, we have no record.
- **What the builder "saw" from reference files.** The tracker verifies files were sent but not which parts the builder attended to (an LLM attention problem we cannot solve).

### 3.2 "Which gates failed?"

**Capability: 95% — SUFFICIENT**

The gate runner JSON contains per-gate PASS/FAIL with measured values. The tracker summary table shows per-category results. The only gap is that some gates produce nuanced measurements (e.g., GR-13 measures exact stacked gap in pixels) — the summary table reduces these to PASS/FAIL. The raw JSON preserves the measurements.

### 3.3 "Which PA auditors caught what?"

**Capability: 90% — SUFFICIENT**

Per-auditor reports are preserved as timestamped files. The PA Manifest tracks which questions each auditor answered with evidence. The cross-validation table shows scoring agreement. The integrative auditor's gestalt report synthesizes cross-cutting patterns.

Minor gap: The tracker does not record per-auditor START/END times. We know auditors ran in parallel but not individual durations. This matters for identifying auditors that might have been rushed or spent excessive time.

### 3.4 "What was the builder's model and configuration?"

**Capability: 85% — SUFFICIENT**

The Build Metadata table captures BUILDER_MODEL. Phase 2 metadata captures the specific model field. The routing verification confirms whether the builder was Opus or Sonnet.

Gap: No record of model VERSION (e.g., claude-opus-4-6 vs claude-opus-4-5). The tracker captures "Opus" or "Sonnet" but not the exact model ID string.

### 3.5 "How long did each phase take?"

**Capability: 80% — MOSTLY SUFFICIENT**

Each phase has Start/End fields. The Execution Summary captures TOTAL_DURATION. However:
- PA auditors lack individual timing (they run in parallel — only the overall Phase 3B timing is captured)
- BV revision cycles are counted but individual cycle durations are not

### 3.6 "Could we reproduce this build?"

**Capability: 40% — INSUFFICIENT**

To reproduce a build we need:
- Exact input files (CONTENT_PATH captured, but file could change) — PARTIAL
- Exact brief content (not captured) — MISSING
- Exact model versions (not captured) — MISSING
- Exact prompt text (not captured) — MISSING
- Environmental state (not captured) — MISSING

The pipeline is NOT currently designed for reproducibility. This is acceptable for a creative pipeline (the same inputs won't produce identical output from LLMs), but it means we cannot run controlled A/B comparisons without additional logging.

---

## 4. Agent Prompt Template Metadata Analysis

### 4.1 Template Inventory (MANIFEST.md Appendix E)

The MANIFEST provides copy-paste-ready prompts for all 7 agent types:

| Agent | Template Lines | Variables | Metadata Instruction |
|-------|---------------|-----------|---------------------|
| Content Analyst | ~18 lines | `{RAW_CONTENT_MARKDOWN}` | NONE — no instruction to include metadata in output |
| Brief Assembler | ~20 lines | `{APPLIED or COMPOSED}`, `{CONTENT_MAP}` | NONE — no instruction to include metadata in output |
| Builder | ~40 lines | `{EXECUTION_BRIEF}`, `{tokens.css}`, `{components.css}`, `{mechanism-catalog}`, `{value-tables}` | PARTIAL — conviction statement and self-evaluation are required output, but no explicit metadata headers |
| Gate Runner | N/A (Playwright JS) | N/A | N/A — produces structured JSON automatically |
| PA Auditors (x9) | ~15 lines each | `{LETTER}`, `{SPECIALTY}`, `{ASSIGNED_QUESTIONS}`, `{SCREENSHOT_PATHS}` | NONE — answer format specified (YES/NO + evidence + severity) but no metadata headers |
| Integrative Auditor | ~12 lines | `{all 9 reports}`, `{file paths}` | NONE — output format specified but no metadata headers |
| Weaver | ~20 lines | `{integrative_report}`, `{gate_results_json}`, `{all 9 reports}` | PARTIAL — output format is structured (OUTPUT A diagnostic, OUTPUT B artistic) but no explicit metadata |

### 4.2 Assessment

**No agent prompt template instructs the agent to include structured metadata in its output.**

Specifically missing from templates:
- No `## Metadata` section header instruction
- No `Agent: {name}` / `Model: {id}` / `Timestamp: {time}` boilerplate
- No instruction to record which input files were read
- No instruction to record output line count or structure validation

The Builder template comes closest — it requires a conviction statement (3 sentences) and a self-evaluation block (7 questions), which serve as implicit metadata. But these are CONTENT metadata (what the builder intended), not PROCESS metadata (what the builder received, how long it took, what model it used).

**Consequence:** The orchestrator is solely responsible for ALL metadata logging. If the orchestrator fails to fill in tracker fields, the metadata is lost. Agents cannot self-report their own metadata because they are not instructed to.

---

## 5. Experiment Protocol Sufficiency

### 5.1 Current State (experiment-protocol.md, 52 lines)

The experiment protocol defines 5 stages (0-4) with:
- Purpose statement
- Criteria (what to compare)
- Pass condition (binary threshold)
- Cost estimate (time)

### 5.2 Assessment: INSUFFICIENT for controlled experiments

**What is present:**
- Clear stage definitions with pass/fail criteria
- Cost estimates for planning
- Progressive validation (each stage gates the next)
- Reference to detailed Q20 protocol for Stage 1

**What is missing:**

| Missing Element | Impact | Severity |
|-----------------|--------|----------|
| **No variable isolation protocol.** Each stage compares "old vs new" but does not specify which variables are held constant. Stage 2 says "same content, same model" but doesn't specify same prompt length, same reference files, same BV gates. | Cannot determine which change caused the improvement. The contrarian's "4 confounded variables" criticism (from Flagship 4/4 Recipe Team) applies to every experiment. | HIGH |
| **No randomization or blinding protocol.** Stage 2 mentions "blind PA evaluation" but does not specify HOW to blind auditors (are they told which is v3? do they see both pages?). | Confirmation bias in PA scoring. | MEDIUM |
| **No sample size or statistical power guidance.** Each stage specifies "N runs" but does not address whether N=1 or N=2 is sufficient to claim causality. | N=1 results cannot distinguish signal from noise. The project's own history shows N=1 concerns (Middle experiment, per retro-analysis team). | HIGH |
| **No per-experiment tracking template.** The execution tracker captures a single build. Experiments compare MULTIPLE builds. There is no document that captures the comparison itself (which builds, what differed, what the result was). | Experiment results are scattered across individual build trackers with no unified view. | MEDIUM |
| **No regression tracking.** If a change improves PA-05 but regresses gate pass rate, there is no mechanism to flag this. | Improvements in one dimension can mask regressions in another. | MEDIUM |
| **Experiment results storage location.** The protocol says "Results are recorded in the execution tracker under a dedicated experiment section" but the Execution Tracker Template has NO dedicated experiment section. | Results have no home. | HIGH |

### 5.3 The experiment-protocol.md references itself as receiving relocated gates GR-36 through GR-39, but these are framed as validation STAGES, not as per-run experimental controls. The distinction matters: a validation stage asks "does the pipeline work?" while an experiment asks "which variable caused the change?"

---

## 6. Missing Logging — Gap Catalog

### Gap #1: Brief Content Preservation (BLOCKING)

**What:** The Execution Brief (~100-165 lines) is the builder's PRIMARY input. The tracker verifies its existence and checks BV gates against it, but does not preserve its content.

**Why it matters:** The brief is the single most important artifact for retrospection. Every builder decision traces back to what the brief said. Without the brief content in the audit trail, we cannot answer "did the builder follow instructions?" or "was the brief poorly written?"

**Current state:** The brief IS logged as a timestamped file (`p1-brief-assembler-{timestamp}.md`). So the content IS preserved — but the tracker doesn't link to it explicitly or capture key metrics (line count, tier compliance, BV scores).

**Fix:** The tracker Phase 1 section should capture: (a) brief line count, (b) per-tier line counts (T1/T2/T3/T4/CM), (c) BV-01 through BV-04 individual results (already present), (d) explicit output path (already present). The brief FILE itself is sufficient — no need to inline the content.

**Revised severity:** MEDIUM (not BLOCKING, because the timestamped file exists — but the tracker should explicitly link to it and capture structural metrics).

### Gap #2: Builder Prompt Reconstruction (BLOCKING)

**What:** The exact prompt sent to the builder is not logged. The template in Appendix E has `{VARIABLE}` placeholders, but the filled-in prompt is ephemeral.

**Why it matters:** If the orchestrator made a substitution error (wrong file, missing section, extra content), the builder's behavior would be "wrong" but the tracker would show all routing checkboxes as checked.

**Fix:** Either (a) the orchestrator logs the full builder prompt to a file (`p2-builder-prompt-{timestamp}.md`) before spawning the builder, or (b) the orchestrator logs a hash/fingerprint of each input file sent to the builder, enabling a post-hoc reconstruction check.

**Severity:** MEDIUM-HIGH. The routing verification checkboxes partially address this (they verify the orchestrator INTENDED to send the right files), but they cannot verify what was ACTUALLY sent.

### Gap #3: Per-PA-Auditor Timing

**What:** The 9 PA auditors run in parallel. The tracker captures overall Phase 3B timing but not per-auditor start/end.

**Why it matters:** An auditor that takes 2x longer may have encountered difficulties or produced a richer report. An auditor that finishes in 30 seconds may have skimmed.

**Fix:** Add per-auditor Start/End columns to the Phase 3B auditor table.

**Severity:** LOW. Timing variance is informational, not diagnostic.

### Gap #4: Agent Output Structure Validation

**What:** No mechanism verifies that an agent's output has the expected structure. The tracker checks for file existence (Output Files Manifest) but not file STRUCTURE.

**Why it matters:** A Content Map that lacks a density arc assessment, or a PA report that skips 3 of its 6 assigned questions, would not be caught by the tracker.

**Fix:** Add structural validation checks per output type:
- Content Map: has content type, heterogeneity, metaphor viability, section count, density arc
- Brief: has 4 tiers + Content Map appendix (BV gates partially cover this)
- PA Reports: question count matches assignment
- Weaver: has both OUTPUT A and OUTPUT B

The PA Manifest partially addresses this for PA reports (Questions Answered column), but other agent outputs lack structure validation.

**Severity:** MEDIUM. BV gates catch brief structure issues. PA Manifest catches auditor completeness. Content Map and Weaver outputs are unverified.

### Gap #5: Model Version Tracking

**What:** The tracker captures model family (Opus/Sonnet) but not exact model ID (claude-opus-4-6 vs claude-opus-4-5).

**Why it matters:** Model performance can change between versions. When the project's own history notes that "Sonnet-for-builders is unexamined," exact version tracking becomes essential for attribution.

**Fix:** Change the Model field from a text field to a structured field: `{family}-{version}` (e.g., `opus-4.6` or `sonnet-4.6`).

**Severity:** LOW for current work (all agents currently use the same model version within a run). MEDIUM for future cross-run comparisons.

### Gap #6: Experiment Comparison Template

**What:** No document captures the comparison between two or more builds in an experiment. Individual build trackers exist, but there is no "experiment tracker" that records: which builds, what differed, what the comparative result was.

**Fix:** Create an `EXPERIMENT-TRACKER-TEMPLATE.md` with:
- Experiment ID and stage reference
- Control build ID and tracker path
- Treatment build ID and tracker path
- Variables held constant
- Variables changed
- Outcome metrics (PA-05 delta, gate delta, timing delta)
- Conclusion

**Severity:** HIGH for the validation campaign (Stages 0-4). LOW for normal pipeline operation.

### Gap #7: Error and Anomaly Structured Logging

**What:** The Post-Run Verification section includes an anomaly keyword scan (`ABORT|ERROR|TIMEOUT|CRASH`) but there is no structured error log during execution.

**Why it matters:** If the orchestrator retries a failed agent spawn, or if a BV gate fails and triggers a revision cycle, the error context is lost. The tracker records BV revision cycle COUNT but not the specific failure messages.

**Fix:** Add a structured anomaly log section to the tracker:

```markdown
## Anomaly Log (append-only)

| Timestamp | Phase | Event | Detail | Resolution |
|-----------|-------|-------|--------|------------|
```

**Severity:** MEDIUM. BV revision cycle count partially captures brief-assembly retries. Agent spawn failures are not captured at all.

### Gap #8: Content Map Decision Rationale (Mode Selection)

**What:** Phase 0.5 mode selection has a "Rationale: ___" free-text field, but no structured format for the rationale.

**Why it matters:** "COMPOSED because high heterogeneity" vs "COMPOSED because the orchestrator felt like it" are very different rationales. Without structure, this field will be filled inconsistently.

**Fix:** Replace free-text rationale with a structured decision record:

```
Heterogeneity: ___ (LOW / MODERATE / HIGH)
Metaphor Viability: ___ (YES / NO)
Content Type: ___ (PROSE / MIXED / VISUAL)
Decision: ___ (APPLIED / COMPOSED)
Override: ___ (NONE / [reason for overriding the default])
```

The Phase 0 Content Map Summary already has most of these fields. The mode decision rationale should REFERENCE those fields rather than repeating them.

**Severity:** LOW. The information exists in Phase 0 fields; it just needs linking.

### Gap #9: Cross-Run Comparison Mechanism

**What:** Each build produces its own tracker. There is no mechanism to compare two trackers side-by-side.

**Why it matters:** The entire experiment protocol assumes we can compare builds. Without a comparison mechanism, this comparison is manual and error-prone.

**Fix:** (a) Standardized tracker naming convention (already present: `{SLUG}-{TIMESTAMP}`). (b) Machine-parseable fields (the tracker already uses structured tables). (c) A comparison script or template that extracts key metrics from two trackers and diffs them. This could be as simple as a markdown template:

```markdown
## Build Comparison
| Metric | Build A | Build B | Delta |
|--------|---------|---------|-------|
| PA-05 | | | |
| Gate Pass Rate | | | |
| Duration | | | |
| Builder Model | | | |
| Mode | | | |
```

**Severity:** LOW for individual builds. HIGH for experiment campaigns.

### Gap #10: BV Gate Failure Details

**What:** The Phase 1 BV section records PASS/FAIL per gate and revision cycle count, but does not record WHAT specifically failed in each BV gate.

**Why it matters:** "BV-01 FAIL" means a tier was under budget, but doesn't say WHICH tier. "BV-04 FAIL" means a suppressor pattern was found, but doesn't say WHICH pattern.

**Fix:** Add a failure detail field per BV gate:
```
| BV-01 | Tier Line Budget | FAIL — T3: 35 lines (min 40) |
```

**Severity:** MEDIUM. BV failures trigger revision cycles, and the detail determines what the Brief Assembler needs to fix.

---

## 7. Severity Assessment and Recommendations

### Priority-Ordered Fix List

| Priority | Gap | Effort | Impact |
|----------|-----|--------|--------|
| P1 | #2 Builder Prompt Logging | SMALL — add 1 file write before builder spawn | Enables "why did the builder produce X?" |
| P2 | #6 Experiment Comparison Template | MEDIUM — new ~50-line template | Enables controlled experiments |
| P3 | #4 Agent Output Structure Validation | MEDIUM — add structural checks per output type | Catches incomplete agent work |
| P4 | #7 Error/Anomaly Structured Log | SMALL — add 1 table to tracker | Captures retry context |
| P5 | #10 BV Gate Failure Details | SMALL — expand existing BV table | Improves brief assembly debugging |
| P6 | #1 Brief Content Metrics | SMALL — add 3 fields to Phase 1 section | Improves brief quality tracking |
| P7 | #5 Model Version Tracking | TRIVIAL — change text field format | Future-proofs cross-run comparison |
| P8 | #3 Per-Auditor Timing | TRIVIAL — add 2 columns to existing table | Informational |
| P9 | #8 Mode Decision Structure | SMALL — replace free text with structured fields | Consistency |
| P10 | #9 Cross-Run Comparison | MEDIUM — new template or script | Experiment enablement |

### What is Already GOOD (Do Not Change)

1. **Execution Tracker architecture.** The B+F Hybrid (checklist + log) is the right design. The MANIFEST stays immutable; the tracker is per-build. Do not change this.

2. **Per-agent timestamped output files.** The naming convention (`{phase}-{agent}-{timestamp}.{ext}`) is good. The requirement that "no agent output should be ephemeral" is good. Do not weaken this.

3. **Gate runner structured JSON.** This is the gold standard for logging. Machine-parseable, complete, verifiable.

4. **PA Manifest cross-validation.** The 4-row cross-validation table (primary scorer vs cross-validator + weaver resolution) is a sophisticated logging mechanism that catches scoring discrepancies.

5. **Post-Run Verification section.** The three-check structure (Completeness + Consistency + Output Correspondence) with automation hints is well-designed.

6. **Routing verification checkboxes.** 48 distinct routing instructions mapped to ~60 checkboxes. This is thorough.

### What Needs Work (Summary)

The pipeline's logging is designed around WHAT HAPPENED (routing verification, gate results, PA scores). It is weak on WHY THINGS HAPPENED (decision rationale, input preservation, error context) and HOW TO COMPARE (cross-run mechanisms, experiment tracking).

The single highest-leverage fix is **logging the builder's filled-in prompt** (Gap #2). This one addition transforms the tracker from a "what happened" record into a "why it happened" record, because the builder's prompt is the causal chain between pipeline decisions and builder behavior.

### Answering the Three Core Questions

**Q: "Why did the builder produce X?"**
Current: 60%. After fixes (P1 + P5 + P6): ~85%.
Remaining gap: LLM attention is unobservable — we can verify inputs but not how the builder weighted them.

**Q: "Which gates failed?"**
Current: 95%. No fixes needed.

**Q: "Which PA auditors caught what?"**
Current: 90%. After fix P8 (per-auditor timing): 95%.

---

## Appendix: Tracker Completeness Matrix

| Data Point | Execution Tracker | PA Manifest | Agent Output Files | Coverage |
|-----------|:-:|:-:|:-:|----------|
| Build date/time | Y | Y | Y (timestamps) | FULL |
| Content path | Y | | | FULL |
| Mode (APPLIED/COMPOSED) | Y | | | FULL |
| Builder model | Y | | | PARTIAL (family only, not version) |
| Phase durations | Y | | | PARTIAL (overall, not per-auditor) |
| Routing verification | Y (60 checkboxes) | | | FULL |
| Gate results | Y (summary table) | | Y (JSON) | FULL |
| PA-05 score | Y | Y | Y (weaver report) | FULL |
| PA-05 sub-criteria | Y | Y (cross-validation) | Y (weaver report) | FULL |
| Per-auditor reports | Y (paths) | Y (receipt checklist) | Y (files) | FULL |
| Conviction statement | Y (existence check) | | Y (HTML comment) | PARTIAL (content in HTML, not tracker) |
| Self-evaluation | Y (existence check) | | Y (HTML comment) | PARTIAL (content in HTML, not tracker) |
| Brief content | | | Y (timestamped file) | PARTIAL (file exists, tracker doesn't capture metrics) |
| Builder prompt | | | | MISSING |
| BV failure details | Y (PASS/FAIL only) | | | PARTIAL |
| Error/retry context | Y (cycle count) | | | PARTIAL |
| Experiment comparison | | | | MISSING |

---

*End of audit. This report covers all 6 source documents requested.*
