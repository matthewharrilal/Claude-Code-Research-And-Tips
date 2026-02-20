# 07 -- PV2 Diagram Cross-Check Report

**Agent:** Verification Agent (Task #7)
**Date:** 2026-02-19
**Scope:** Structural consistency between PV2-PIPELINE-DIAGRAM.md (1,354 lines) and PIPELINE-V2-IMPLEMENTATION-GUIDE.html (1,443 lines)
**Method:** Full sequential read of both files, dimension-by-dimension comparison

---

## Executive Summary

The guide and diagram are **structurally aligned on the Fat Core architecture** but diverge significantly on several dimensions. The guide presents Fat Core as the DECIDED architecture; the diagram presents it as ONE OF FIVE experimental approaches pending validation. This creates a fundamental framing tension that manifests as specific numerical and structural discrepancies throughout.

**Total discrepancies found: 27** (6 CRITICAL, 9 SIGNIFICANT, 12 MINOR)

---

## 1. AGENT COUNTS

### Guide says: 12 agents everywhere
- Section 2 heading: "12 agents, 7 boundaries, zero destructive" (line 379)
- Section 2 body: "The 12 Agents" (line 483) -- lists 1 orchestrator + 1 core agent + 9 PA auditors + 1 weaver = 12
- Build flow (Section 6): "12-13 across the full run" (line 971)
- Experiment B: "Full 12-agent architecture" (line 1047)

### Diagram says: 12 for Fat Core, 12-14 for Linear Pipeline
- Fat Core comparison table: "12 (same PA shell)" (line 1027)
- Linear Pipeline column: "12-14" (line 1027)
- The 4-architecture comparison table (line 1109): Master Prompt has no agent count column

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-01 | MINOR | Guide says "12-13" in timing breakdown (line 971) but "12" everywhere else. The 13th agent appears to be the weaver counted separately from the PA auditors. Diagram consistently says 12. |
| D-02 | MINOR | Diagram's Linear Pipeline says "12-14" (line 1027). Guide's Flagship comparison table says "19" agents (line 538). These describe different things: diagram's "Linear Pipeline" = Updated PV2, while guide's "Flagship" = the actual Flagship experiment. Not a contradiction, but potentially confusing. |

**Verdict: ALIGNED.** Both agree on 12 agents for Fat Core.

---

## 2. BOUNDARY COUNTS

### Guide says: 7 boundaries, 0 destructive
- Section 2 heading: "7 boundaries, zero destructive" (line 379)
- Section 6 boundary table: 7 rows (B1-B7), all constructive/internal/measurement/necessary/revision (lines 976-983)
- Checkpoint: "7 non-destructive boundaries" (line 990)

### Diagram says: 7 (0 destructive) for Fat Core, 11 (4 destructive) for Linear Pipeline
- Fat Core comparison table: "7 (0 destructive)" (line 1028, 1131)
- Linear Pipeline: "11 (4 destructive)" (line 1028, 1131)
- Diagram lists 11 boundaries (B1-B11) in its detailed boundary section (lines 926-974). These are for the LINEAR PIPELINE, not Fat Core.

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-03 | SIGNIFICANT | The guide's 7 boundaries (Section 6, lines 976-983) have DIFFERENT LABELS than the diagram's Fat Core boundaries. Guide: B1=Content->Core, B2=Core plan->Core build, B3=Core output->Gate runner, B4=Core output->Screenshots, B5=9 PA->Weaver, B6=PA report->Core fixes, B7=Fix cycle->Final output. Diagram does NOT enumerate Fat Core boundaries at all -- it only enumerates the 11 Linear Pipeline boundaries (B1-B11). The guide's 7 boundaries appear to be a NEW enumeration not present in the diagram. |
| D-04 | MINOR | Guide says the Flagship had "11 boundary crossings, 4 destructive" (line 475). Diagram agrees: "11 (4 destr.)" for both original and updated PV2 in the comparison table (line 1131). Consistent. |

**Verdict: PARTIALLY ALIGNED.** Both agree 7/0 for Fat Core. But the guide invented its own boundary enumeration that doesn't exist in the diagram. The diagram's B1-B11 are Linear Pipeline boundaries only.

---

## 3. FLOW ORDER

### Guide's build flow (Section 6, lines 895-949):
1. Orchestrator reads content, determines Track 1/2, assembles input
2. Core agent Phase A: Read content, discover tensions (10-20 min)
3. Core agent Phase B: Derive metaphor, plan layout (10-20 min)
4. G1: structure checks
5. Core agent Phase C: HTML skeleton + CSS (60-120 min)
6. G2: styling checks
7. Core agent Phase D: Refinement + cascade table (10-15 min)
8. G3: ALL 15 gates
9. Screenshot capture (orchestrator)
10. 9 PA auditors (parallel)
11. Weaver synthesizes verdict
12. Fix cycle if needed (max 3 rounds, SAME core agent)
13. Output

### Diagram's Fat Core flow (lines 989-1020):
1. User types /build-page content.md
2. Orchestrator (thin, ~250 lines, mechanical routing only)
3. Spawns ONE Opus CORE AGENT (Plans AND builds in one pass)
   - Phase A: Understand content (10-20 min)
   - Phase B: Plan zones + mechanisms (10-20 min)
   - Phase C: Build HTML+CSS (60-120 min)
   - Phase D: Self-verify cascade table (10-15 min)
4. Between phases: runs 3 phase-locked GATES (G1, G2, G3)
5. After build: Pre-captures screenshots
6. Spawns 9 PA auditors + 1 PA weaver
7. If PA-05 < 3/4: routes fixes to SAME core agent
8. OUTPUT: HTML + PA report + build log

### Diagram's Bird's Eye flow (lines 828-880) -- LINEAR PIPELINE (not Fat Core):
Wave 0: Enriched TC (30-60 min) -> Wave 0.5: Metaphor Validation -> Wave 0.9: Handoff Gate -> Wave 1: Builder -> Wave 2: Verification -> Wave 3: Fix -> Output

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-05 | CRITICAL | **The guide's build flow does NOT include Wave 0 (TC planning), Wave 0.5 (metaphor validation), or Wave 0.9 (handoff gate).** The diagram's Bird's Eye view shows these as part of the linear pipeline. In Fat Core, TC is "MERGED into core agent" (diagram line 1122-1123). The guide correctly omits these as separate waves since the core agent handles planning internally. However, the guide never explicitly states that TC/metaphor validation are subsumed into the core agent's Phase A/B. This is implicit, not explicit. |
| D-06 | SIGNIFICANT | **Gate timing mismatch.** The guide places G1 AFTER Phase B (plan), G2 AFTER Phase C (CSS), G3 AFTER Phase D (cascade table). The diagram says gates run "Between phases" but does not specify exactly when. The guide's G1 checks "ARIA landmarks >= 3, Skip link present, Component library classes >= 3, Zone count 2-5" (lines 766-768) which require HTML to exist. But Phase B is "plan layout" -- no HTML written yet. G1 should run after Phase C starts (skeleton written), not after Phase B. |
| D-07 | MINOR | Guide adds "Track 1 or Track 2" determination at the orchestrator level (line 901). The diagram's Fat Core section does not mention Track 1/Track 2 classification -- it says "ALWAYS FLAGSHIP" (line 157, 892). The guide introduces a track classification step not present in the Fat Core diagram. |

**Verdict: MOSTLY ALIGNED** on the overall flow. The key structural difference is that the guide correctly omits TC as a separate wave for Fat Core, but the gate timing within the build phases has a logical issue.

---

## 4. GATE ASSIGNMENTS (Phase-Locked)

### Guide's gate groupings (Section 5, lines 760-796):
- **G1 (after skeleton):** SC-06, SC-07, SC-08, SC-12 (4 gates)
- **G2 (after styling):** SC-01, SC-02, SC-03, SC-04, SC-05, SC-09, SC-11, SC-15 (8 gates)
- **G3 (comprehensive):** ALL 15, specifically calling out SC-10, SC-13, SC-14 (3 gates unique to G3)

### Diagram's gate groupings:
- The diagram does NOT specify phase-locked gate assignments for Fat Core.
- The diagram lists 15 gates (SC-01 through SC-15) in the Wave 2 verification section (lines 678-703) but these are all POST-BUILD gates for the Linear Pipeline.
- The Fat Core section (line 1005-1008) says: "G1: After skeleton (landmarks, components, zones) / G2: After CSS (bg delta, palette, typography, soul) / G3: Comprehensive (all checks + multi-coherence)" -- but doesn't specify gate numbers.

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-08 | SIGNIFICANT | **SC-11 threshold mismatch.** Guide says SC-11 checks "Typography: display-body >= 10px" (line 781) AND ">= 10px display-body delta" (line 813). Diagram says SC-11 checks "Typography zones >= 2px delta" (line 692). These are different: 10px vs 2px. The diagram's 2px refers to the MINIMUM perceptible font size delta; the guide's 10px refers to the display-to-body heading gap. Both appear in the diagram's L1 threshold table (line 73-74: ">= 2px font") and the gate table (line 692). The guide appears to have changed the gate threshold from the diagram's value. |
| D-09 | MINOR | Guide assigns SC-11 to G2 (after styling, line 781). If SC-11 is truly "typography zones" it logically belongs in G3 (comprehensive) since full typography requires all styling to be complete. The diagram doesn't specify phase assignments for individual gates. |
| D-10 | MINOR | Guide assigns SC-15 (Border Presence) to G2. The diagram doesn't specify when SC-15 runs. G2 (after styling) is reasonable since borders are a styling property. |

**Verdict: PARTIALLY ALIGNED.** Both agree on 3 phase-locked gates and 15 total gates. But SC-11's threshold value differs between diagram (2px) and guide (10px), and the guide invents specific gate-to-phase assignments the diagram doesn't specify.

---

## 5. EXPERIMENT DESIGN

### Guide says 3 experiments (Section 7, lines 1004-1095):
- **Experiment A:** $5 test. 1 Opus agent + conventions brief. No pipeline. ~$5-10, ~2 hours.
- **Experiment B:** Fat Core full test. 12 agents. ~$20-60, ~4 hours.
- **Experiment C:** Recipe comparison (optional). Fat Core + 650-line recipe. ~$40-80.

### Diagram says 5 experiments (lines 438-504):
- **EXP E:** Single Opus, No Pipeline ($5, ~2 hrs). 42-line prompt.
- **EXP D:** Fat Core -- Single Opus Plans + Builds ($15, ~3 hrs). 100-line conventions brief.
- **EXP A:** Opus + Minimal Prompt (42 lines, no pipeline). May merge with EXP E.
- **EXP B:** Opus + Full Recipe (650 lines + TC build plan).
- **EXP C:** Opus + Principles Brief + Gates (100 lines).

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-11 | CRITICAL | **Experiment count: 3 vs 5.** Guide has 3 experiments (A, B, C). Diagram has 5 (A, B, C, D, E). The guide MERGED and RENAMED the experiments: Guide's "Exp A" = Diagram's "EXP E" (single Opus, no pipeline). Guide's "Exp B" = Diagram's "EXP D" (Fat Core). Guide's "Exp C" = roughly Diagram's "EXP B" (recipe comparison). The diagram's EXP A and EXP C are dropped entirely from the guide. |
| D-12 | CRITICAL | **Decision tree differs.** Guide: A >= 3.0 -> pipeline unnecessary; A < 3.0, B >= 3.0 -> Fat Core wins; All < 3.0 -> fundamental problem. Diagram: E >= 3/4 -> pipeline unnecessary; D >= 3/4 -> Fat Core; B > A -> recipe adds value; C >= B -> recipe unnecessary; All < 3/4 -> missed something. The guide's tree is simpler (3 branches) vs diagram's (5 branches). |
| D-13 | SIGNIFICANT | **Experiment costs differ.** Guide's Exp B (Fat Core): "$20-60". Diagram's EXP D (Fat Core): "$15, ~3 hrs" in the experiment list (line 477) but "$15-40" in the comparison table (line 1040) and "$30-50" in the experiment spec (line 1320). Multiple conflicting cost figures for Fat Core even within the diagram. Guide picks the highest range. |
| D-14 | MINOR | Guide says "All experiments use RESEARCH-SYNTHESIS.md" (line 1083). Diagram says "Content: RESEARCH-SYNTHESIS.md (same as Flagship)" (line 1339). Aligned. |
| D-15 | MINOR | Both agree on Mode 4 PA (9 blind Opus auditors) for evaluation. Aligned. |

**Verdict: SIGNIFICANTLY DIVERGENT.** The guide simplified the experiment design from 5 to 3 experiments and renamed them. The decision trees serve different analytical purposes.

---

## 6. ARCHITECTURE CHOICE: Fat Core as DECIDED vs PENDING

### Guide's position:
Fat Core is presented as THE architecture. Section 2 is titled "The Architecture: Fat Core" (line 458). The entire guide is structured around Fat Core as decided. Experiments (Section 7) are described as validation of details, not architecture selection.

### Diagram's position:
Fat Core is ONE OF FIVE approaches "PENDING TESTS" (line 393). The header says "EXPERIMENT FIRST -- 5 experiments before codifying (was 3)" (line 37). The Master Synthesis Verdict (lines 1218-1240) says "VERDICT: FAT CORE ARCHITECTURE" but qualifies it with "WHAT TO DEFER (until experiments prove value)" (line 1253). The overall status is "EXPERIMENT FIRST" not "FAT CORE DECIDED."

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-16 | CRITICAL | **The guide presents Fat Core as decided. The diagram presents it as the recommended but UNVALIDATED candidate.** The diagram's header says "Status: EXPERIMENT FIRST" (line 37). The diagram lists 5 approaches (A-E) with Fat Core as D. The guide eliminates alternatives and presents Fat Core as the only architecture. This is the single largest framing difference between the two documents. |
| D-17 | SIGNIFICANT | The guide's Comparison table (Section 2, lines 537-545) compares "Flagship (Failed)" vs "Fat Core (Pipeline v2)" -- treating Fat Core and PV2 as synonymous. The diagram has a 4-column comparison (Master Prompt / Original PV2 / Updated PV2 / Fat Core, lines 1109-1146) where Fat Core and Updated PV2 are SEPARATE architectures with different properties. |

**Verdict: FUNDAMENTALLY DIFFERENT FRAMING.** This is the root cause of most other discrepancies.

---

## 7. INTELLIGENCE STACK (5 Layers)

### Guide's description (Section 1, not as a standalone section):
- Mentioned indirectly through perception thresholds (L1), gates (L1-L4), PA (L5)
- Conventions brief Section 1 embeds L1 (perception thresholds)
- Gate system covers L1-L4
- PA covers L5 "semantic density x restraint x spatial confidence"
- The 5-layer hierarchy is NOT explicitly described as a named framework in the guide

### Diagram's description (lines 42-82):
Explicit 5-layer hierarchy:
- L1: Perception Thresholds (>= 15 RGB, >= 2px font, >= 0.03em spacing, <= 108px gap)
- L2: Scales (Navigation, Page, Section, Component, Character)
- L3: Channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)
- L4: Multi-Coherence (>= 3 channels shift together at each boundary)
- L5: Anti-Scale Model (semantic density x restraint x spatial confidence)

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-18 | SIGNIFICANT | **The guide does NOT present the 5-layer intelligence stack as a named framework.** The diagram devotes an entire section to "THE COMPOSITIONAL INTELLIGENCE STACK" (lines 42-82) plus a heatmap showing intelligence survival at each stage (lines 86-134). The guide distributes this information across gates (L1-L4) and PA (L5) without naming the layers or showing the hierarchy. A reader of the guide would not know there IS a 5-layer model. |
| D-19 | MINOR | Guide's perception thresholds table (lines 610-617) matches diagram's L1 values (line 73-74) for background (>= 15 RGB) and stacked gap (<= 108px). Letter-spacing differs: guide says ">= 0.5px (0.03em at 16px)" while diagram says ">= 0.03em spacing." These are mathematically equivalent but expressed differently. |

**Verdict: STRUCTURALLY DIFFERENT.** The diagram treats the 5-layer stack as a core organizing concept. The guide distributes it without attribution.

---

## 8. COST MODEL

### Guide's cost estimates:
- Experiment A: "$5-10" (line 1044)
- Experiment B: "$20-60" (line 1049)
- Experiment C: "$40-80" (implied from Section 7)
- Overall timeline: "15-23 hours" for full implementation (line 1144)
- Fast path: "4-8 hours" if Exp A passes (line 1183)

### Diagram's cost estimates:
- Full pipeline (PV2): "$20-60 per page" (lines 1267-1295)
- Fat Core: "$15-40" per page (line 1288)
- Single Opus (Exp E/A): "$5-10" (line 1289)
- Wave-by-wave breakdown: TC $3-8, Metaphor $1-2, Build $8-25, Verification $5-15, Fix $3-10 (lines 1272-1278)

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-20 | SIGNIFICANT | **The diagram's wave-by-wave cost breakdown is for the LINEAR PIPELINE (includes TC, metaphor validation as separate waves), not Fat Core.** The guide uses "$20-60" for its Experiment B (Fat Core full test) which matches the diagram's full pipeline cost, not the diagram's Fat Core cost of "$15-40". If Fat Core eliminates TC and metaphor validation as separate agents, the cost should be LOWER than the full pipeline. |
| D-21 | MINOR | Diagram gives Fat Core as "$15-40" and guide doesn't give a per-page cost for Fat Core specifically -- only experiment costs. The guide's Experiment B at "$20-60" is the full test cost including PA evaluation, not per-page production cost. These measure different things. |

**Verdict: PARTIALLY ALIGNED.** Both agree on $5-10 for single Opus. The Fat Core production cost differs: diagram says $15-40, guide doesn't quote a production cost.

---

## 9. RISK FACTORS

### Diagram lists 9 risks (lines 1150-1214):
1. Recipe Ceiling at 3/4
2. Transition Table Complexity
3. INHERENT vs BOLTED-ON Gap
4. Content Generalizability (N=2)
5. L5 (Anti-Scale) Remains Absent
6. Cost Blind Spot
7. Content Dependency
8. Temporal Degradation
9. Builder Input Volume as PRIMARY Bottleneck

### Guide addresses risks in Section 9 "What Could Still Go Wrong" (lines 1266-1272):
1. Core agent has a bad day (single point of creative failure)
2. Soul violations (wrong values without recipe)
3. Conventions brief is wrong (N=2 thresholds)
4. Untested content types
5. Opus-dependence

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-22 | SIGNIFICANT | **Different risk framing entirely.** Diagram lists 9 risks from the pipeline analysis reports. Guide lists 5 risks specifically for Fat Core. Only risks 4 (content generalizability) and 6 (cost) partially overlap. The guide does NOT address: Recipe Ceiling (Risk 1 -- irrelevant for Fat Core since it uses conventions, not recipe), Transition Table Complexity (Risk 2 -- irrelevant since Fat Core has no transition table), INHERENT vs BOLTED-ON (Risk 3), L5 Absent (Risk 5), Temporal Degradation (Risk 8), Builder Input Volume (Risk 9 -- irrelevant since Fat Core minimizes input). |
| D-23 | MINOR | The guide addresses the 9 Flagship failures (Section 9, lines 1209-1263) in detail, explaining how Fat Core prevents each. This is a different framing from the diagram's forward-looking risks. Both approaches are valid but serve different purposes. |

**Verdict: DIVERGENT but INTENTIONALLY SO.** The guide's risks are Fat Core-specific. The diagram's risks cover the full range of pipeline approaches.

---

## 10. NEW FILES / ARTIFACTS

### Guide says 6 new files (Section 3, lines 563-569):
1. build-page SKILL.md (~350-500 lines)
2. conventions-brief.md (~100 lines)
3. perception-thresholds.md (~80 lines)
4. gate-runner.js (~400 lines)
5. gate-registry.js (~120 lines)
6. experiment-protocol.md (~80 lines)
Total: ~1,130 lines

### Diagram says 4 new files (lines 887-916):
1. build-page SKILL.md (~205 lines)
2. operational-recipe-template.md (~300 lines)
3. perception-thresholds.md (~80 lines)
4. gate-runner.js (~400 lines)
Plus edits to existing files.

### DISCREPANCIES:
| # | Severity | Detail |
|---|----------|--------|
| D-24 | CRITICAL | **File list differs significantly.** Guide has 6 files; diagram has 4. The guide REPLACES the diagram's "operational-recipe-template.md (~300 lines)" with "conventions-brief.md (~100 lines)" -- a fundamentally different document reflecting the Fat Core's convention-based approach vs the linear pipeline's recipe-based approach. Guide ADDS gate-registry.js and experiment-protocol.md not in the diagram. Diagram has no gate-registry.js (thresholds are inline in gate-runner.js) and no experiment-protocol.md. |
| D-25 | CRITICAL | **Orchestrator size differs drastically.** Guide: build-page SKILL.md at "~350-500 lines" (line 564). Diagram: "~205 lines" (line 889). This is a 70-145% difference. The guide's version is much larger because it includes Fat Core-specific routing, tier classification, gate invocation, screenshot capture, PA spawning, and fix cycle management -- all of which the diagram's thinner orchestrator delegates differently. |
| D-26 | MINOR | Guide says total new code is "~1,130 lines" (line 572). Diagram says "~1,350 new lines" (line 917). The difference: diagram includes a 300-line operational-recipe-template that the guide replaces with a 100-line conventions brief (delta: -200), but guide adds gate-registry.js (120 lines) and experiment-protocol.md (80 lines) = net +0 vs diagram's -200. The math doesn't perfectly reconcile. |

**Verdict: SIGNIFICANTLY DIVERGENT.** The file lists reflect different architectural choices (recipe vs convention).

---

## 11. ADDITIONAL DISCREPANCIES

| # | Severity | Detail |
|---|----------|--------|
| D-27 | MINOR | **TC Skill line count.** Guide says TC SKILL.md is "1,878 lines" (line 405). Diagram says TC narrowed to "~660 lines (was 1,878)" (lines 12, 178). The guide references the CURRENT size (1,878), while the diagram references both current and proposed (1,878 -> 660). For Fat Core, TC is merged into the core agent so the 660-line narrowing may be irrelevant. The guide does not mention the 660-line narrowing. |

---

## Summary Table

| Category | Discrepancy Count | Critical | Significant | Minor |
|----------|------------------|----------|-------------|-------|
| Agent Counts | 2 | 0 | 0 | 2 |
| Boundary Counts | 2 | 0 | 1 | 1 |
| Flow Order | 3 | 1 | 1 | 1 |
| Gate Assignments | 3 | 0 | 1 | 2 |
| Experiment Design | 5 | 2 | 1 | 2 |
| Architecture Framing | 2 | 1 | 1 | 0 |
| Intelligence Stack | 2 | 0 | 1 | 1 |
| Cost Model | 2 | 0 | 1 | 1 |
| Risk Factors | 2 | 0 | 1 | 1 |
| New Files | 3 | 2 | 0 | 1 |
| Additional | 1 | 0 | 0 | 1 |
| **TOTAL** | **27** | **6** | **9** | **12** |

---

## Root Cause Analysis

Most discrepancies trace to ONE root cause:

**The diagram documents ALL investigated approaches (5 experiments, 4 architectures, linear + Fat Core). The guide commits to ONE approach (Fat Core) and reinterprets everything through that lens.**

This means:
- Experiment count shrinks from 5 to 3 (only Fat Core-relevant ones survive)
- The file list changes (recipe -> conventions brief)
- Risks are reframed for Fat Core specifically
- The intelligence stack becomes implicit rather than explicit
- The 11-boundary linear pipeline analysis disappears
- Gate assignments are invented for the phase-locked model

This is a **defensible editorial decision** -- the guide is an implementation guide for the chosen architecture, not a research document. But it means the guide and diagram serve different purposes and cannot be cross-referenced without understanding this framing shift.

---

## Recommendations

1. **CRITICAL FIX: SC-11 threshold.** Resolve whether SC-11 checks ">= 2px" (diagram) or ">= 10px" (guide). These are different measurements (minimum perceptible font delta vs display-to-body heading gap). The guide may be conflating two different checks.

2. **CRITICAL FIX: Gate timing logic.** G1 checks structural elements (landmarks, component classes, zones) that require HTML to exist. But the guide places G1 after Phase B (planning), before Phase C (HTML writing). G1 should run after Phase C begins or after the HTML skeleton portion of Phase C.

3. **SIGNIFICANT: Acknowledge framing difference.** The guide should explicitly state that it commits to Fat Core as the architecture, noting that the diagram documents multiple approaches pending experimental validation. A single sentence in the "You Are Here" box would suffice.

4. **SIGNIFICANT: Include the 5-layer intelligence stack.** The diagram's L1-L5 hierarchy is a powerful organizing framework. The guide distributes this information but never names it. Adding a brief diagram or table would improve comprehension.

5. **MINOR: Reconcile orchestrator size.** 205 lines (diagram) vs 350-500 lines (guide) is a large gap. Either the diagram underestimates or the guide overestimates.

6. **MINOR: Reconcile experiment naming.** If someone reads both documents, the experiment labels (Guide's A/B/C vs Diagram's A/B/C/D/E) will cause confusion. A mapping note would help.

---

*Report complete. 27 discrepancies documented across 11 dimensions.*
