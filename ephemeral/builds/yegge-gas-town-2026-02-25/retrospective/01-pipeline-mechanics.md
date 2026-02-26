# Pipeline Mechanics Analysis — yegge-gas-town-2026-02-25

**Analyst:** Opus agent (pipeline mechanics)
**Build result:** PA-05 3.5/4, SHIP WITH FIXES (after REFINE cycle)

---

## 1. Artifact Routing Fidelity

### Per-Artifact Trace

| # | Artifact | Read? | Routed Correctly? | Content Used? | Verdict |
|---|----------|-------|-------------------|---------------|---------|
| 1 | MANIFEST.md | YES | Orchestrator (self) | Pipeline sequence followed steps 0-11 | CORRECT |
| 2 | artifact-orchestrator.md | YES | Orchestrator | Mode selection, verdict logic, topology all followed | CORRECT |
| 3 | artifact-identity-perception.md | YES | Brief Assembler + Gate Runner | Dual-route: world-descriptions in Tier 1, binary checks in gates | CORRECT |
| 4 | artifact-builder-recipe.md | YES | Brief Assembler | Recipe format preserved. Phases 1-2 verbatim, 3-6 compressed. D-01-D-09 present | PARTIAL — Step 2.7 (hover behaviors) and Step 3.4c (signal declarations) dropped |
| 5 | artifact-tc-brief-template.md | YES | Brief Assembler | 4-tier structure followed, 272 lines produced | CORRECT |
| 6 | artifact-routing.md | YES | Content Analyst + Brief Assembler | Phase 0 protocol followed, 5-axis reader model applied | PARTIAL — S(x) survival function and Content-Form Fit Gate never invoked |
| 7 | artifact-value-tables.md | YES | Brief Assembler | Zone hex values from tables appear in brief. Separate routing to builder UNCERTAIN | PARTIAL — spacing/typography scales may not have reached builder |
| 8 | artifact-worked-examples.md | UNKNOWN | Unknown | No tracker evidence of consumption | UNCERTAIN |
| 9 | gate-runner-core.js | YES | Orchestrator (Playwright) | 30/42 gates executed | PARTIAL — 12 gates never run |
| 10 | gate-runner-spec.md | YES | Orchestrator | Guided interpretation | CORRECT |
| 11 | gate-runner-preconditions.md | UNKNOWN | Orchestrator | Pre-flight claimed complete but L2 unfilled | UNCERTAIN |
| 12 | gate-manifest.json | YES | Orchestrator | Execution order followed | CORRECT |
| 13 | pa-questions.md | YES | PA Auditors | 69 questions across 9 auditors, assignments match MANIFEST exactly | CORRECT |
| 14 | pa-deployment.md | YES | Orchestrator | 9-auditor parallel deployment per spec | CORRECT |
| 15 | pa-weaver.md | YES | Weaver | Verdict logic, calibration, dual-output format all followed | CORRECT |
| 16 | pa-guardrails.md | YES | PA Auditors | Fresh-eyes principle confirmed | CORRECT |
| 17 | pa-guardrails-weaver.md | UNKNOWN | Weaver | No tracker evidence. Weaver's output suggests it was read but not provable | UNCERTAIN |
| 18 | pa-manifest.md | UNKNOWN | Orchestrator | Not referenced in tracker | UNCERTAIN |

**Summary:** 12/18 CORRECT, 4/18 PARTIAL, 4/18 UNCERTAIN. The critical path (identity -> brief -> builder -> gates -> PA -> weaver) is solid. The losses cluster in two areas: (a) recipe deployment details that didn't survive brief compression, and (b) ancillary artifacts with no tracker evidence.

### Key Routing Failures

**F1: artifact-builder-recipe.md Step 2.7 (hover behaviors) never reached the brief.** The recipe explicitly says builders should "select hover behavior patterns." The brief has zero mention of hover states. This directly maps to the Weaver's DELIGHT score of 4/10.

**F2: artifact-value-tables.md as separate builder file — unconfirmed.** Tracker P2-1e shows "[ ]" (unchecked). The MANIFEST says value tables (~262 lines) should be a separate builder reference file, not just hex values in the brief. If the builder only got values through the brief, the 10 spacing progressions, typography scales, and transition values were lost.

**F3: artifact-worked-examples.md routing unknown.** Zero evidence it was read by any agent. This file provides "what good looks like" — a worked content map, brief, and build from a previous Gas Town execution. If the Content Analyst and Brief Assembler read it, their output quality may partly derive from it; if not, they produced their strong output from first principles.

**F4: Integrative Auditor ran in parallel with PA auditors, not sequentially after.** Per MANIFEST Step 9, the Integrative should receive all 9 reports. It instead received only screenshots. This demotes the Integrative from "cross-auditor synthesizer" to "10th independent auditor." The orchestrator compensated manually but the designed synthesis role was unfulfilled.

---

## 2. Brief Assembly Quality

### Structure Compliance

| Tier | Template Min (80%) | Actual | Status |
|------|-------------------|--------|--------|
| T1 IDENTITY | 12 lines | ~20 | PASS (all 10 world-descriptions) |
| T2 PERCEPTION | 6 lines | ~22 | PASS (thresholds + calibration + priority override + worked examples) |
| T3 COMPOSITIONAL | 40 lines | ~100 | PASS (zone table, multi-coherence per boundary, metaphor, density arc, coupling) |
| T4 DISPOSITION | 32 lines | ~45 | PASS (all 9 D-01 through D-09 with CSS property:value pairs) |
| Content Map | 24 lines | ~70 | PASS (full verbatim appendix) |
| **Total** | **114** | **272** | **2.4x minimum** |

### What the Brief Got Right

1. **Recipe format preserved.** Verbs: "Build," "Create," "Deploy," "Read," "Select" — not "Verify," "Fail if." BV-03 confirmed >= 3:1 ratio.
2. **Zone backgrounds locked from value tables.** Exact hex values with RGB deltas and intensity labels. BV-02 confirmed >= 15 delta.
3. **Multi-coherence specified boundary-by-boundary.** Z1->Z2: 4 channels. Z2->Z3: 6 channels. Z3->Z4: 5 channels. Z4->Z5: 3 channels. This is the strongest element — the builder knew exactly what to shift at each boundary.
4. **Structural metaphor mapped to CSS custom properties.** `--loading-dock`, `--dispatch-floor`, `--factory-floor`, etc. COMPOSED mode applied correctly.
5. **Each disposition has at least one CSS property:value pair.** D-01 specifies `line-height: 1.8; max-width: 65ch;` for NARRATIVE, `line-height: 1.5;` for CODE. D-06 specifies zone padding per zone.

### What the Brief Got Wrong

1. **S(x) survival function never applied.** The brief is 272 lines (65% over the 165 max target). The extra length is arguably beneficial (more detail for the builder), but the compression governance designed into artifact-routing.md was bypassed entirely. The Brief Assembler used judgment, which worked, but the survival function was designed to make compression systematic and reproducible.
2. **Content Map duplicated verbatim as appendix.** The content map (70 lines) appears in full twice — once as the appendix, and its key data is already woven into Tier 3. The ~70 duplicate lines could have been spent on hover vocabulary, spacing progressions, or component adoption targets.
3. **No Content-Form Fit Gate verification documented.** artifact-routing.md TOC #12 defines this check. No evidence it was run.
4. **Hover behavior entirely absent.** Not a compression choice — this recipe section was simply never extracted.

### Compression Analysis

| Stage | Lines | Ratio | Assessment |
|-------|-------|-------|------------|
| Source extraction | ~1,324 | — | Starting material |
| Content Map (P0) | 70 | 18.9:1 | Healthy compression |
| Execution Brief (P1) | 272 | 0.26:1 (EXPANSION) | Brief adds layers; 3.9x content map |
| Builder input (total confirmed) | ~2,850 | — | Within MANIFEST ~3,600 target |
| HTML output | 2,931 | ~1:1 from input | Builder consumed input effectively |

**The compression ratio is NOT in the danger zone.** The two-stage architecture (compress source -> expand into brief) avoids the catastrophic 50:1+ that plagued the Flagship experiment. The ~19:1 source-to-content-map ratio retains structural information. The brief then re-expands with compositional intelligence. This is the pipeline's architectural win.

---

## 3. Builder Input Completeness

### MANIFEST Spec vs Actual

| Input | Spec | Delivered? | Lines |
|-------|------|-----------|-------|
| Execution Brief | 100-165 lines | YES (272) | 272 |
| tokens.css | 183 lines, direct file | YES | 183 |
| components.css | ~1,195 lines, direct file | YES | ~1,195 |
| mechanism-catalog.md | varies, direct file | YES | ~1,200 |
| Value tables | ~262 lines, separate file | UNCERTAIN | ~262 (if delivered) |
| CD-006 reference | ~1,200 lines, optional | UNCERTAIN | ~1,200 (if delivered) |
| Gate thresholds | NOT delivered (by design) | CONFIRMED NOT | — |
| Prohibition list | NOT delivered (by design) | CONFIRMED NOT | — |

**Confirmed total: ~2,850 lines. If optional files included: ~4,312 lines.** MANIFEST target: ~3,600.

### Information That Never Reached the Builder

1. **Hover behavior vocabulary** — omitted from brief, no alternative path
2. **Signal declarations (SCROLL-REVEALS)** — omitted from brief
3. **Value table spacing progressions** — uncertain if separate file was routed
4. **CD-006 as concrete reference** — uncertain; tracker P2-1f = "___"
5. **Component adoption target quantified** — brief says "Target 8+" but result was 5-6 types. The number was there; the reinforcement was insufficient.

---

## 4. What Worked

1. **Dual-route pattern is functioning.** Soul as world-description to builder, as binary check to gate runner. Perception as natural law to builder, as threshold to gate runner. This prevents threshold gaming while giving the builder the creative framing it needs.

2. **REFINE protocol achieved +1.5 PA-05 in a single cycle.** The artistic impression + conviction-only handoff worked. The REFINE builder fixed structural issues (dark zone contrast, transitions, heading hierarchy, navigation) without seeing gate numbers. This is the pipeline's strongest validation of the "generative language, not threshold numbers" principle.

3. **Brief assembly produced a strong execution document.** Despite not following S(x) formally, the Brief Assembler made good judgment calls. The boundary-by-boundary multi-coherence spec and CSS-custom-property-by-concept mapping are strong innovations.

4. **Mode selection was correct.** COMPOSED mode for high heterogeneity + high metaphor viability content. The factory metaphor IS the content, making this the lowest-risk metaphor choice possible.

5. **PA auditor deployment was near-flawless.** Fresh-eyes principle upheld, all 69 questions answered, experiential convergence (9/9 on dark zone) drove the REFINE cycle. The PA is the pipeline's most reliable subsystem.

---

## 5. What Didn't Work

1. **12 of 42 gates never executed.** GR-48 (gate coverage) is REQUIRED and never ran. The pipeline lost its self-verification mechanism. GR-07 (font loading), GR-33/34 (mode detection), GR-49 (result integrity) also skipped.

2. **1024px viewport never captured.** DPR limitation prevented the middle breakpoint. 2/3 viewports is a coverage gap — responsive issues at 1024px are untested.

3. **Tracker L2/L3 completeness is poor.** Pre-Flight L2 checkboxes ALL unchecked. Phase 0-2 agent details (model, start, end, output path) ALL "___" placeholders. BV gate per-tier counts unfilled. The tracker tells a PASS story at L0 but reveals gaps at L2.

4. **GR-11 (background delta) reported a false failure post-REFINE.** The gate checks ALL zone pairs including non-adjacent. Z2 vs Z4 delta=6 flagged, but Z3 (dark) sits between them. The gate implementation doesn't account for non-adjacent separation. This is a gate design flaw.

5. **GR-15 (single margin) false positive persists.** 240px margins from `margin: 0 auto` centering on a 960px container in a 1440px viewport. The gate needs to exclude auto centering margins.

6. **Component adoption below target.** 5-6 types vs 8+ target. The brief stated the target clearly; the builder didn't meet it. This suggests the "target 8+" phrasing needs stronger reinforcement — perhaps a recipe step that forces the builder to LIST which components it chose before building.

---

## 6. Actionable Findings

All findings above are mapped to checklist items appended to MASTER-CHECKLIST.md.
