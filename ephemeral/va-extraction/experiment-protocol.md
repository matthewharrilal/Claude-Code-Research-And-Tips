# Pipeline v3 — Experiment Protocol

> **Authority:** Receives experiment gates GR-36 through GR-39, relocated from the gate runner in Wave 3. These gates define validation stages for pipeline improvements.

---

## Stage 0: Smoke Test (GR-36)

**Purpose:** Verify basic pipeline execution completes without crashes.
**Criteria:** Pipeline runs end-to-end (Phases 0–3C) and produces a verdict. No ABORT.
**Pass condition:** Pipeline completes. Verdict is SHIP, REFINE, or REBUILD (not ABORT/ERROR).
**Cost:** ~80–105 minutes (1 full pipeline run).

## Stage 1: Q20 Experiment (GR-37)

**Purpose:** Isolate the effect of perception thresholds by adding ONLY threshold rules to the original (pre-v3) prompt and re-running.
**Criteria:** Same content, same model, original prompt + perception thresholds only. Compare PA-05 score to original run.
**Pass condition:** PA-05 improves by >= 0.5 points with thresholds alone.
**Cost:** ~4–10 hours (1 full pipeline run + analysis).
**Reference:** `ephemeral/pipeline-analysis/_meta-cognitive/q20-experiment-protocol.md` for full protocol.

## Stage 2: Head-to-Head (GR-38)

**Purpose:** Compare Pipeline v3 output against the best prior artifact (CD-006 or Gas Town v1) on the SAME content.
**Criteria:** Same content processed by both pipelines. Fresh-eyes PA auditors score both without knowing which is which.
**Pass condition:** v3 PA-05 >= prior PA-05 AND v3 has zero soul violations.
**Cost:** ~160–210 minutes (2 full pipeline runs + blind comparison).

## Stage 3: Multi-Content (Reserved)

**Purpose:** Validate pipeline consistency across diverse content types.
**Criteria:** Run pipeline on 3+ content pieces with different routing profiles (PROSE, MIXED, VISUAL). Compare PA-05 variance.
**Pass condition:** All runs achieve PA-05 >= 2.5 AND variance <= 1.0 point.
**Cost:** ~240–315 minutes (3 full pipeline runs + comparison).
**Status:** RESERVED — gate number not yet assigned. Define after Stage 2 results available.

## Stage 4: Flagship (GR-39)

**Purpose:** Validate that the pipeline can produce Flagship-tier output (PA-05 >= 3.5, Tier 5 >= 6/8, metaphor STRUCTURAL).
**Criteria:** Content with high structural heterogeneity + metaphor viability. COMPOSED mode. Opus builder.
**Pass condition:** PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations AND metaphor expression is STRUCTURAL (not ATMOSPHERIC/LABELED/ANNOUNCED).
**Cost:** ~240–400 minutes (1 full Flagship pipeline run + extended PA).

---

## Execution Notes

- Experiments run OUTSIDE normal pipeline execution — they are NOT part of a build.
- The orchestrator references this file when planning validation campaigns.
- Results are recorded in the execution tracker under a dedicated experiment section.
- Stage numbers are NOT sequential requirements — run whichever stage matches your validation need.
