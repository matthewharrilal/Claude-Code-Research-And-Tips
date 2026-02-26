# Extraction Report: Files 16-18 (Pipeline Synthesis)

**Extractor:** extraction-worker-6
**Date:** 2026-02-16
**Source Files:**
- `16-cross-experiment-analysis.md` (467 lines)
- `17-no-compromise-pipeline.md` (806 lines)
- `18-UNIFIED-ACTION-PLAN.md` (555 lines)

**Total items extracted:** 298

---

## FILE 1: 16-cross-experiment-analysis.md (Cross-Experiment Meta-Analysis)

### ACTION ITEMS

#### ACT-16-01: Test multi-pass agent execution hypothesis in flagship
- **Source:** 16-cross-experiment-analysis.md, lines 187-193
- **Action:** Flagship must implement multi-pass execution (build -> audit -> fix -> re-audit) to test whether iteration alone (without human judgment) can close quality gap with crown jewels
- **Category:** PROCESS
- **Priority:** HIGH
- **Dependencies:** Pipeline design complete

#### ACT-16-02: Implement void budget gate
- **Source:** 16-cross-experiment-analysis.md, lines 314, 258
- **Action:** Add void budget gate to spatial projection phase. Content-to-void ratio must stay below 30%
- **Category:** GATE
- **Priority:** BLOCKING
- **Dependencies:** None
- **Cross-reference:** Report 17 Section 1 (Gate details), Report 18 Gate 0

#### ACT-16-03: Implement programmatic container verification gate
- **Source:** 16-cross-experiment-analysis.md, line 255
- **Action:** Use programmatic (getBoundingClientRect) verification of container width, not manual measurement
- **Category:** GATE
- **Priority:** BLOCKING
- **Dependencies:** None

#### ACT-16-04: Implement binary messaging gates
- **Source:** 16-cross-experiment-analysis.md, line 256
- **Action:** Enforce binary messaging gates (MUST send, not MAY send). "MUST send 1 CLARIFICATION-REQUEST" replaces "MAY use SendMessage"
- **Category:** GATE
- **Priority:** HIGH
- **Dependencies:** None
- **Cross-reference:** Report 06

#### ACT-16-05: Implement phased build execution
- **Source:** 16-cross-experiment-analysis.md, line 278
- **Action:** Use phased build execution (structure first, mechanisms second, proportion third, compliance fourth) to distribute attention across phases
- **Category:** PROCESS
- **Priority:** HIGH
- **Dependencies:** Pipeline architecture

#### ACT-16-06: Use spatial confidence as FIRST gate, not last
- **Source:** 16-cross-experiment-analysis.md, line 353
- **Action:** Spatial confidence gates must be the FIRST gate in the pipeline, not the last
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Cross-reference:** Law 1

#### ACT-16-07: Target 14-16 mechanisms, not 16-18
- **Source:** 16-cross-experiment-analysis.md, line 355
- **Action:** Reduce mechanism target from 16-18 to 14-16 (or 12-14). Sweet spot is 8-12 for single-pass execution.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Cross-reference:** Law 2

#### ACT-16-08: Convert ALL rules to binary or quantified
- **Source:** 16-cross-experiment-analysis.md, line 357
- **Action:** EVERY rule in the flagship prompt must be binary (pass/fail) or quantified (specific threshold). ZERO judgment rules.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Cross-reference:** Law 3

#### ACT-16-09: Implement two-agent pattern for fix passes
- **Source:** 16-cross-experiment-analysis.md, line 361
- **Action:** Use two-agent pattern for revision: Agent A builds, Agent B audits, Agent A revises based on B's findings. Agent A receives EXTERNAL critique rather than trying to self-critique.
- **Category:** PROCESS
- **Priority:** HIGH
- **Dependencies:** Pipeline architecture

#### ACT-16-10: Classify fix-pass root causes correctly
- **Source:** 16-cross-experiment-analysis.md, lines 343-345
- **Action:** Fix passes must correctly classify root causes as CSS vs content vs architecture. The ceiling's fix pass failed because it treated a content problem as a spacing problem.
- **Category:** PROCESS
- **Priority:** HIGH

### BINARY CHECKS

#### BC-16-01: Spatial confidence gate pass
- **Source:** Line 326-327
- **Check:** PA-05c (PROPORTIONATE) passes after void budget gate implemented
- **Pass/Fail:** PROPORTIONATE present in final audit

#### BC-16-02: Void budget gate pass
- **Source:** Lines 333-334
- **Check:** Content-to-void ratio stays below 30%
- **Pass/Fail:** Void < 30% AND spatial confidence improves

#### BC-16-03: Phased execution quality check
- **Source:** Lines 337-339
- **Check:** Phased build execution produces better PA-05c than ceiling's simultaneous execution
- **Pass/Fail:** PA-05c >= 2/4 (ceiling was 1.5/4)

#### BC-16-04: Multi-pass agent effectiveness check
- **Source:** Lines 341-345
- **Check:** Agent-only fix passes correctly classify root causes AND improve quality
- **Pass/Fail:** Quality improves between pass 1 and pass 2+

### CROSS-REFERENCES

| ID | From | References |
|----|------|-----------|
| XREF-16-01 | Line 5 | Master Retrospective (Middle), 07-VERDICT, 05-comparison-report, 06-novelty-assessment, AUDIT-REPORT, 06-failure-analysis, 20-variant-b-recount, 21-variant-b-corrections, DD-006, CD-006 |
| XREF-16-02 | Line 158 | Middle retrospective (50:1 compression) |
| XREF-16-03 | Line 225 | Failure analysis - "faithful execution trap" |
| XREF-16-04 | Line 228 | Ceiling experiment Mode 4 PA audit |
| XREF-16-05 | Line 300 | Two-instance pattern insight |
| XREF-16-06 | Line 355 | Law 2 mechanism diminishing returns |

### PREREQUISITES (from predictions, lines 243-282)

#### PRE-16-01: Void budget gate implemented and calibrated
- **Source:** Line 253
- **Must be true:** Void budget gate prevents catastrophic whitespace failure
- **Verification:** Gate catches void > 30% before build proceeds

#### PRE-16-02: Phased execution designed
- **Source:** Line 278
- **Must be true:** Phased build execution is designed and documented (structure -> mechanisms -> proportion -> compliance)
- **Verification:** Pipeline spec shows separate passes

#### PRE-16-03: Binary messaging mandate in place
- **Source:** Line 256, 300-301
- **Must be true:** All messaging rules are MUST, not MAY
- **Verification:** Zero MAY instructions in builder prompt

---

## FILE 2: 17-no-compromise-pipeline.md (No-Compromise Pipeline Design)

### ACTION ITEMS — PIPELINE ARCHITECTURE

#### ACT-17-01: Implement 5-pass pipeline with single-concern passes
- **Source:** 17-no-compromise-pipeline.md, lines 37-49
- **Action:** Decompose into 5 passes: Pass 0 (Content Architecture, Opus), Pass 1 (Spatial Skeleton, Sonnet), Pass 2 (Mechanism Deployment, Sonnet), Pass 3 (Metaphor Integration, Opus), Pass 4 (Intentionality Layer, Opus)
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Dependencies:** None
- **Rationale:** 3-pass architecture combines concerns that caused ceiling failure

#### ACT-17-02: Implement maximum 2 fix cycles per pass
- **Source:** Lines 59-65
- **Action:** Each fix cycle involves: gate failure identification, team-lead diagnosis (CSS fix vs HTML restructure vs architectural redesign), builder fix (targeted), gate re-run. If gate fails after 2 fix cycles, DOWNGRADE scope rather than continue failing.
- **Category:** PROCESS
- **Priority:** HIGH

#### ACT-17-03: Assign specific auditor counts per gate
- **Source:** Lines 69-78
- **Action:** Gate 0: 1 programmatic. Gate 1: 1 programmatic + 1 cold-look. Gate 2: 1 programmatic + 1 mechanism-perception. Gate 3: 2 fresh-eyes. Gate 4: Full Mode 4 (9 auditors). Total: 15 auditors across pipeline.
- **Category:** PROCESS
- **Priority:** HIGH

#### ACT-17-04: Assign specific builders per pass
- **Source:** Lines 83-93
- **Action:** Content Architect (Pass 0, Opus), Skeleton Builder A (Pass 1, Sonnet), Skeleton Builder B (Pass 1, Sonnet competitive), Mechanism Builder (Pass 2, Sonnet), Metaphor Builder (Pass 3, Opus), Intentionality Builder (Pass 4, Opus)
- **Category:** PROCESS
- **Priority:** HIGH

#### ACT-17-05: Deploy 3 metacognitive reviewers (max pipeline) or 1 (recommended)
- **Source:** Lines 98-106
- **Action:** Pre-Mortem (before Pass 0), Mid-Pipeline (after Pass 2), Post-Build (after Pass 4). All Opus with ZERO prior context. Recommended version keeps only Post-Build Reviewer.
- **Category:** PROCESS
- **Priority:** MEDIUM

### ACTION ITEMS — COMPETITIVE BUILD

#### ACT-17-06: Implement competitive skeleton build (Pass 1)
- **Source:** Lines 163-203
- **Action:** Two builders execute Pass 1 in parallel with SAME inputs but DIFFERENT approaches. Team-lead selects better skeleton. Selection criteria: spatial confidence gate pass, squint test comparison, content-container fit, mechanism receptivity.
- **Category:** PROCESS
- **Priority:** HIGH
- **Dependencies:** Pass 0 complete
- **Rationale:** P(good skeleton) goes from 70% to 91%

#### ACT-17-07: Give competitive builders different "approach hints"
- **Source:** Line 787 (Risk R2)
- **Action:** One builder gets "spatial-first" hint, other gets "content-first" hint, to prevent identical outputs.
- **Category:** PROCESS
- **Priority:** MEDIUM

#### ACT-17-08: Consider competitive metaphor derivation (MAYBE)
- **Source:** Lines 205-213
- **Action:** Two metaphor derivation agents working in parallel. Include in MAX pipeline, defer in RECOMMENDED.
- **Category:** PROCESS
- **Priority:** LOW (deferred in recommended pipeline)

### ACTION ITEMS — ITERATIVE REFINEMENT

#### ACT-17-09: Implement up to 3 iteration cycles
- **Source:** Lines 225-283
- **Action:** Iteration 1: Spatial Problems (full Pass 1 rebuild, not CSS patch). Iteration 2: Compositional Interactions (reduce mechanisms, strengthen channels). Iteration 3: Beauty/Intentionality (bookending, self-reference, transitions). Stop at 3 iterations.
- **Category:** PROCESS
- **Priority:** HIGH (Iteration 1); MEDIUM (Iterations 2-3)

#### ACT-17-10: Iteration 1 must be FULL PASS 1 REBUILD, not CSS patch
- **Source:** Lines 241-247
- **Action:** Rebuild with adjusted content architecture. Do NOT apply CSS patches (this is the ceiling experiment's failed pattern).
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Dependencies:** Mode 4 audit findings

### ACTION ITEMS — EMBEDDED AUDITING

#### ACT-17-11: Implement embedded auditor for Passes 1-2
- **Source:** Lines 287-361
- **Action:** Dedicated Sonnet auditor watches build in real-time. File watch every 60 seconds. Snapshot at defined checkpoints. Binary checks (SC-01 container, SC-02 void budget) after each snapshot.
- **Category:** TOOL
- **Priority:** HIGH

#### ACT-17-12: Define embedded auditor checkpoints
- **Source:** Lines 303-310
- **Action:** Checkpoints: after token definition, after header CSS, after first section CSS, every 100 CSS lines, after major architectural elements, after final CSS write.
- **Category:** PROCESS
- **Priority:** HIGH

#### ACT-17-13: Implement alert protocol for embedded auditor
- **Source:** Lines 330-337
- **Action:** Hard alert (SendMessage, immediate): container width violation or void > 30%. Soft alert (log only): void trending upward, density imbalance. Summary message at pass completion with trend analysis.
- **Category:** PROCESS
- **Priority:** HIGH

#### ACT-17-14: Builder MUST acknowledge hard alerts
- **Source:** Lines 337, 793
- **Action:** Builder is EXPECTED to acknowledge hard alerts ("Intentional" or "Adjusting"). Non-acknowledgment is a yellow flag for team-lead.
- **Category:** GATE
- **Priority:** HIGH

#### ACT-17-15: Embedded auditor controls Playwright EXCLUSIVELY
- **Source:** Lines 324-326
- **Action:** Builder does NOT use Playwright. Embedded auditor has exclusive Playwright access. Sequential scheduling.
- **Category:** PROCESS
- **Priority:** HIGH
- **Cross-reference:** Mode 4 PA pattern (102 screenshots, zero contention)

### ACTION ITEMS — CROWN JEWEL PIPELINE

#### ACT-17-16: Create Crown Jewel Technique Inventory
- **Source:** Lines 408-416
- **Action:** Opus agent reads DD-006 and CD-006 source code, produces inventory of: every self-referential element, every cognitive transition, every structural bookend, every meta-annotation, every reinforcing pair and channel encoding.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** New file (Crown Jewel Technique Inventory)
- **Dependencies:** DD-006 and CD-006 source access

#### ACT-17-17: Quality calibration with crown jewel screenshots
- **Source:** Lines 418-420
- **Action:** Team-lead takes screenshots of DD-006 and CD-006 at 1440px. These become the REFERENCE STANDARD for the Post-Build Metacognitive Reviewer.
- **Category:** PROCESS
- **Priority:** MEDIUM

#### ACT-17-18: Technique transfer to Pass 3-4 builders
- **Source:** Lines 421-423
- **Action:** Metaphor Builder and Intentionality Builder receive Crown Jewel Technique Inventory. Instruction: "match the QUALITY LEVEL, not the specific techniques."
- **Category:** PROCESS
- **Priority:** HIGH
- **Dependencies:** ACT-17-16 (inventory creation)

### ACTION ITEMS — CALIBRATION RUN

#### ACT-17-19: Execute calibration run before flagship
- **Source:** Lines 443-492
- **Action:** Target Ceiling tier (not flagship). DIFFERENT content from flagship. Identical pipeline but simplified: no competitive build, no mid-pipeline review, Mode 2 instead of Mode 4, no iteration cycles. 18 agents, 150-220 min.
- **Category:** PROCESS
- **Priority:** HIGH (STRONGLY recommended)
- **Dependencies:** Pipeline design complete

#### ACT-17-20: Validate pipeline mechanics in calibration
- **Source:** Lines 451-460
- **Action:** Test: 5 passes + 7 gates operational? Spatial Confidence Gate catches void? Embedded auditing works without Playwright contention? Competitive build produces different outputs? Agents actually use SendMessage? Iteration protocol improves quality? Timing accuracy? Crown jewel reference helps vs causes copying?
- **Category:** GATE
- **Priority:** HIGH

### ACTION ITEMS — SPECIFICATION

#### ACT-17-21: Define 24 flagship target metrics
- **Source:** Lines 500-526
- **Action:** 11 gates (must PASS to ship) + 13 scores (optimize, not blocking). See detailed table in file.
- **Category:** GATE
- **Priority:** BLOCKING

#### ACT-17-22: Define quality bands for classification
- **Source:** Lines 553-561
- **Action:** Crown Jewel (4/4, 9/9, 5-6/6), Full Flagship (4/4, 8+/9, 4+/6), Strong Flagship (3.5+/4, 7+/9, 3+/6), Minimum Viable (3/4, 7+/9, 2+/6), Failed Flagship (<3/4, any, any).
- **Category:** GATE
- **Priority:** HIGH

#### ACT-17-23: Define Minimum Viable Flagship (MVF) as fallback
- **Source:** Lines 539-549
- **Action:** MVF = PA-05 3/4, Novelty 7+/9, Soul 8/8, Container 940-960px, Void <20%, Mechanisms 10-12, Intentionality 2+/6, Metaphor recognized. Ship if full flagship unreachable.
- **Category:** GATE
- **Priority:** HIGH

### GATES (from file 17)

#### GATE-17-01: Spatial Budget Gate (Pass 0)
- **Source:** Lines 73
- **Check:** Content-to-void >= 60:40
- **Type:** Binary calculation (1 programmatic auditor)

#### GATE-17-02: Spatial Confidence Gate (Pass 1)
- **Source:** Lines 74, 127-134
- **Checks:** SC-01 through SC-07 (7 binary checks)
- **Type:** Binary + squint test (1 programmatic + 1 cold-look)

#### GATE-17-03: Composition Verification Gate (Pass 2)
- **Source:** Lines 75, 167-171
- **Checks:** CP-01 mechanism count, CP-02 restraint ratio, CP-03 zone visibility, CP-04 spatial re-check
- **Type:** Binary + perceptual (1 programmatic + 1 mechanism-perception)

#### GATE-17-04: Metaphor Coherence Gate (Pass 3)
- **Source:** Lines 76, 185-190
- **Checks:** Metaphor identified without labels? Structural or announced? Zone boundaries visible without labels?
- **Type:** Perceptual (2 fresh-eyes, zero context)
- **Pass criteria:** Both identify metaphor without labels, structural >= 70%

#### GATE-17-05: Ship-Ready Gate (Pass 4)
- **Source:** Lines 77
- **Checks:** Full Mode 4 (9 auditors, 48 PA questions, 3 viewports)
- **Type:** Full Mode 4

### BINARY CHECKS (from file 17)

#### BC-17-01: Container width 940-960px
- **Source:** Line 504
- **Gate:** YES (non-negotiable)

#### BC-17-02: Void budget < 15% contentless
- **Source:** Line 505
- **Gate:** YES (non-negotiable)

#### BC-17-03: Soul compliance 8/8
- **Source:** Line 506
- **Gate:** YES (non-negotiable)

#### BC-17-04: Zero severity-1 findings
- **Source:** Line 507
- **Gate:** YES (non-negotiable)

#### BC-17-05: Content distribution 70%+ of scroll has content
- **Source:** Line 508
- **Gate:** YES (non-negotiable)

#### BC-17-06: Footer reachability < 1 viewport void before footer
- **Source:** Line 509
- **Gate:** YES (non-negotiable)

#### BC-17-07: CPL 45-80 characters
- **Source:** Line 518
- **Gate:** YES (non-negotiable)

#### BC-17-08: Heading spacing ratio >= 1.5:1
- **Source:** Line 519
- **Gate:** YES (non-negotiable)

#### BC-17-09: 4-scale coherence (Nav + Page + Section + Component)
- **Source:** Line 522
- **Gate:** YES (non-negotiable)

#### BC-17-10: PA-05 DESIGNED 4/4
- **Source:** Line 502
- **Gate:** YES (non-negotiable)

#### BC-17-11: PA-05c PROPORTIONATE pass
- **Source:** Line 503
- **Gate:** YES (non-negotiable)

### RISK MITIGATIONS (from Appendix C)

| ID | Risk | Mitigation | Source Line |
|----|------|-----------|-------------|
| RM-17-01 | R1: Metaphor spatial obligations -> void | Spatial Budget Gate (Pass 0) catches before build | 786 |
| RM-17-02 | R2: Competitive builders produce identical skeletons | Different "approach hints" (spatial-first vs content-first) | 787 |
| RM-17-03 | R3: Playwright contention from embedded auditor | Auditor has exclusive Playwright. Builder writes files directly. | 788 |
| RM-17-04 | R4: Handoff degradation across 5 passes | Each pass receives ALL previous outputs (not just immediate predecessor) | 789 |
| RM-17-05 | R5: Mode 4 reveals architectural unfitness | Downgrade to MVF or abort. Pre-mortem review mitigates. | 790 |
| RM-17-06 | R6: Crown jewel reference causes copying | Reference is technique inventory (abstracted), not screenshots. Novelty evaluator catches copying. | 791 |
| RM-17-07 | R7: Pipeline takes >6 hours | Kill criterion at 400 min (max) or 360 min (recommended). Ship at best state. | 792 |
| RM-17-08 | R8: Zero messaging despite protocol | Team-lead checks at Pass 1 completion. If zero, PAUSE and prompt. Hard requirement: builder must acknowledge embedded auditor alerts. | 793 |
| RM-17-09 | R9: Calibration run produces poor results | Calibration targets Ceiling (lower bar). Pipeline data still valuable even if page quality is weak. | 794 |
| RM-17-10 | R10: Too many gates cause gaming | Gates are binary (no room for gaming). Handoffs structurally enforced. | 795 |

### FILE MODIFICATIONS (from file 17)

| ID | Target File | Change | Source Line |
|----|-------------|--------|-------------|
| FM-17-01 | Builder prompt | Must include different "approach hints" for competitive builders | 787 |
| FM-17-02 | Each pass receives ALL previous pass outputs | Handoff protocol file | 789 |
| FM-17-03 | Crown Jewel Technique Inventory | New file to be created from DD-006 + CD-006 analysis | 408-416 |

### CROSS-REFERENCES (from file 17)

| ID | From | References |
|----|------|-----------|
| XREF-17-01 | Line 7 | 05-flagship-architecture.md |
| XREF-17-02 | Line 8 | 01-process-retrospective.md |
| XREF-17-03 | Line 9 | 04-metacognitive-analysis.md |
| XREF-17-04 | Line 10 | 03-diminishing-returns.md |
| XREF-17-05 | Line 11 | CEILING-PREPARATION-BRIEF.md |
| XREF-17-06 | Line 12 | 04-showcase-archaeology.md |
| XREF-17-07 | Line 13 | 06-adversarial-anti-scale.md |
| XREF-17-08 | Line 14 | AUDIT-REPORT.md (Mode 4 PA) |
| XREF-17-09 | Line 94 | Ceiling experiment (combined builder failure) |
| XREF-17-10 | Line 247 | Ceiling CSS-only fix pattern |
| XREF-17-11 | Line 325 | Mode 4 PA screenshot pre-capture pattern |
| XREF-17-12 | Lines 371-392 | CD-006 actual pipeline (24 explorations, 2,500 min) |
| XREF-17-13 | Line 780 | 3-pass architecture (Section E) comparison |

---

## FILE 3: 18-UNIFIED-ACTION-PLAN.md (Unified Action Plan)

### PRE-BUILD CHECKLIST (Section A: Content Preparation)

#### CHK-18-A1: Content inventory completed
- **Source:** Line 32
- **Action:** Complete content inventory (15-20 min). Template from 05-content-first-methodology.md. Must include: word count per section, content type mix, density map, natural groupings, peak/dip locations.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 05

#### CHK-18-A2: Content sections >= 4 with >= 200 words each (KB-01)
- **Source:** Line 33
- **Action:** If fewer than 4: STOP, expand content scope or downgrade to ceiling tier.
- **Category:** PREREQUISITE / GATE
- **Priority:** BLOCKING
- **Cross-reference:** Report 07

#### CHK-18-A3: Density map plotted
- **Source:** Line 34
- **Action:** Peak position identified (first third / middle / final third). Natural groupings documented.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 05

### PRE-BUILD CHECKLIST (Section B: Metaphor Derivation)

#### CHK-18-B1: Metaphor derived through full Phase 1-3 pipeline
- **Source:** Line 38
- **Action:** Library access prohibited until metaphor lock-in (Phase 0E prohibition).
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 10

#### CHK-18-B2: Metaphor soul compatibility verified (KB-05)
- **Source:** Line 39
- **Action:** Zero conflicts with soul channels (no gradients, no shadows, no rounded corners, no cool tones required).
- **Category:** PREREQUISITE / GATE
- **Priority:** BLOCKING
- **Cross-reference:** Report 07

#### CHK-18-B3: Metaphor spatial obligation analyzed
- **Source:** Line 40
- **Action:** Zone count documented. Minimum inter-zone spacing calculated. Cumulative spatial cost < 10% of estimated page height.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 09, FM-3

#### CHK-18-B4: Content/Zone ratio >= 1.5 (KB-02)
- **Source:** Line 41
- **Action:** Content sections must outnumber metaphor-required zones by at least 1.5:1. Example: 4 zones requires >= 6 content sections. The ceiling's 4 zones with 4 sections (ratio = 1.0) produced the void.
- **Category:** PREREQUISITE / GATE
- **Priority:** BLOCKING
- **Cross-reference:** Report 07

#### CHK-18-B5: Metaphor selection criteria applied
- **Source:** Line 42
- **Action:** 6 criteria, minimum score 12/18. Content-form fit has VETO POWER over conceptual elegance.
- **Category:** PREREQUISITE
- **Priority:** HIGH (if competing metaphors)
- **Cross-reference:** Report 05

### PRE-BUILD CHECKLIST (Section C: Spatial Budget)

#### CHK-18-C1: Void budget calculated (KB-03)
- **Source:** Line 46
- **Action:** Formula: predicted_void_pct = total_spacing / (total_spacing + total_content) x 100. Must be <= 30%.
- **Category:** PREREQUISITE / GATE
- **Priority:** BLOCKING
- **Cross-reference:** Reports 03, 07, 08

#### CHK-18-C2: Zone necessity test completed
- **Source:** Line 47
- **Action:** For each zone: content mass >= 800px? Different content TYPE from neighbors? Reader intent shifts at boundary? Three NOs = MERGE.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 08, Check 1.2

#### CHK-18-C3: Spatial budget table written into build plan
- **Source:** Line 48
- **Action:** Per-zone content height, per-zone structural overhead, content-to-void ratio. MUST appear as a table, not prose.
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 08, Check 1.1

### PRE-BUILD CHECKLIST (Section D: Prompt Assembly)

#### CHK-18-D1: Execution prompt <= 200 lines (KB-04)
- **Source:** Line 52
- **Action:** If over 200: compress. Remove all THINKING content, keep only INSTRUCTIONS.
- **Category:** PREREQUISITE / GATE
- **Priority:** BLOCKING
- **Cross-reference:** Reports 07, 10, 20

#### CHK-18-D2: 4-layer architecture applied
- **Source:** Line 53
- **Action:** Layer 1: Conviction (70 lines). Layer 2: Execution Spec (100-120 lines). Layer 3: Coordination Spec (60 lines). Layer 4: Reference Library (existing files, any length).
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Report 10

#### CHK-18-D3: All rules are BINARY
- **Source:** Line 54
- **Action:** Zero MAY rules. Zero judgment criteria in execution spec. All judgment content moved to Layer 1 (Conviction) or Layer 3 (Coordination).
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Reports 10, 20

#### CHK-18-D4: All CAPABILITY rules converted to OBLIGATION rules
- **Source:** Line 55
- **Action:** "Builder CAN message" -> "Builder MUST message."
- **Category:** PREREQUISITE
- **Priority:** BLOCKING
- **Cross-reference:** Reports 06, 10

### PRE-BUILD CHECKLIST (Section E: Design System Enrichment)

#### CHK-18-E1: 7 BLOCKING gaps addressed
- **Source:** Line 59
- **Action:** B1 (max whitespace prohibition), A1 (transition grammar), A2 (restraint principle), A3 (content density minimum), B3 (front-loaded weight prohibition), C3 (max spacing token 96px), D3 (content-form fit guidance). All have insertable text ready in Report 02.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Cross-reference:** Report 02
- **Dependencies:** None (text is ready)

#### CHK-18-E2: Enrichments applied to design system files
- **Source:** Line 60
- **Action:** Apply to 4 files:
  - prohibitions.md (+75 lines: B1, B3)
  - mechanism-catalog.md (+130 lines: A1, A2)
  - tokens.css (+8 lines: C3)
  - semantic-rules.md (+115 lines: A3, D3)
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target files:**
  - `design-system/compositional-core/identity/prohibitions.md`
  - `design-system/compositional-core/grammar/mechanism-catalog.md`
  - `design-system/compositional-core/vocabulary/tokens.css`
  - `design-system/compositional-core/guidelines/semantic-rules.md`
- **Cross-reference:** Report 02

### FILE MODIFICATIONS (from file 18 enrichments)

| ID | Target File | Change | Lines Added | Source |
|----|-------------|--------|-------------|--------|
| FM-18-01 | `design-system/compositional-core/identity/prohibitions.md` | Add B1 (max whitespace) + B3 (front-loaded weight) | +75 | Report 02 |
| FM-18-02 | `design-system/compositional-core/grammar/mechanism-catalog.md` | Add A1 (transition grammar) + A2 (restraint principle) | +130 | Report 02 |
| FM-18-03 | `design-system/compositional-core/vocabulary/tokens.css` | Add C3 (max spacing token 96px: --space-max-zone) | +8 | Report 02 |
| FM-18-04 | `design-system/compositional-core/guidelines/semantic-rules.md` | Add A3 (content density minimum) + D3 (content-form fit) | +115 | Report 02 |

### PIPELINE PASSES (from file 18)

#### PASS-18-00: Content Architecture
- **Source:** Lines 86-103
- **Agent:** Opus 4.6, 20-30 min
- **Inputs:** Raw content + metaphor derivation + content inventory
- **Outputs:** Content zones, section plan, spatial budget table, transition type assignments
- **Deliverables:** Content-to-zone mapping with word counts, spatial budget table, transition type assignments (HARD CUT / SPACING SHIFT / CHECKPOINT), density arc specification
- **Gate 0:** Content-to-void >= 60:40? Zone count <= max? Content/Zone ratio >= 1.5?

#### PASS-18-01: Spatial Skeleton
- **Source:** Lines 105-141
- **Agent:** 2x Sonnet 4.5 (competitive), 35-50 min
- **Innovation:** Competitive build doubles P(good skeleton) from 70% to 91%
- **Embedded Auditor:** Screenshots every 100 CSS lines, hard alert if void > 30%
- **Mandatory Comms:** Checkpoint A (before building), Checkpoint B (after building)
- **Builder Self-Check (7 items):** Container 940-960px, CPL 45-80, void >= 60:40, no empty elements, soul 8/8, header+footer present, token >= 80%
- **Gate 1:** SC-01 through SC-07 (7 binary checks)
- **Gate 2:** Landmark completeness (header, footer, all sections, container confirmed)
- **Max fix cycles:** 2. After 2 failures: ABORT or downgrade.

#### PASS-18-02: Mechanism Deployment
- **Source:** Lines 143-171
- **Agent:** Sonnet 4.5, 25-40 min
- **Key constraints:** Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+), cap <= 16 (hard)/12-14 (recommended), density <= 4 per viewport, distribution >= 2 per third, 2+ reinforcing pairs, 3+ transition types, >= 1 designed moment per quartile
- **Restraint Protocol:** >= 15 planner rejections + >= 6 builder rejections = >= 21 total
- **Signal-to-Silence:** 0.6-0.8:1, >= 2 silence zones (200px+)
- **Gate 3:** CP-01 to CP-04

#### PASS-18-03: Metaphor Integration
- **Source:** Lines 173-190
- **Agent:** Opus 4.6, 20-35 min
- **Constraint:** No NEW mechanisms added. Metaphor uses existing mechanism deployment.
- **Gate 4:** 2 fresh-eyes, structural >= 70% without labels

#### PASS-18-04: Intentionality Layer
- **Source:** Lines 192-207
- **Agent:** Opus 4.6, 15-25 min
- **6 dimensions:** Self-reference (>= 1), pedagogical sequencing, cognitive transitions (>= 2), structural bookending, meta-annotation, provenance threading
- **Height budget:** <= 10% page height increase from Pass 4
- **Crown Jewel reference:** Technique Inventory provided, "match QUALITY LEVEL not specific patterns"
- **Gate 5:** Full Mode 4 audit

### GATES (detailed from file 18)

#### GATE-18-00: Spatial Budget Gate
- **Source:** Lines 99-103
- **Checks:** Content-to-void >= 60:40, zone count <= max, Content/Zone ratio >= 1.5
- **On FAIL:** Reduce zones, compress spacing, recalculate. Cannot proceed until PASS.

#### GATE-18-01: Spatial Confidence Gate (7 binary checks)
- **Source:** Lines 126-134
- **SC-01:** Container width 940-960px
- **SC-02:** Maximum contiguous void <= 1.5 viewport heights (2,160px)
- **SC-03:** Content distribution >= 70% of scroll depth
- **SC-04:** Squint test -- 3+ distinct content regions at 25% zoom (team-lead judgment)
- **SC-05:** Header <= 20% of first viewport
- **SC-06:** >= 5 content sections with >= 200px content height each
- **SC-07:** Footer reachable, gap <= 1 viewport height

#### GATE-18-02: Landmark Completeness Gate
- **Source:** Lines 137-141
- **Checks:** Header exists with content, footer exists with content, all planned sections present, container width confirmed

#### GATE-18-03: Composition Verification Gate
- **Source:** Lines 166-171
- **CP-01:** Mechanism count <= 16
- **CP-02:** Restraint ratio >= 1.5
- **CP-03:** Zone boundaries perceptible without labels (invisible <= 1)
- **CP-04:** Spatial re-check (SC-01 + SC-03 still passing)
- **On CP-04 FAIL:** ROLLBACK to Pass 1 skeleton, re-attempt with reduced elaboration

#### GATE-18-04: Metaphor Coherence Gate
- **Source:** Lines 185-190
- **Checks:** 2 fresh-eyes agents identify metaphor, structural vs announced, zone boundaries without labels
- **PASS:** Both identify metaphor without labels, structural >= 70%
- **FAIL:** Label-dependent -> FLAG. < 50% structural -> REDESIGN.

#### GATE-18-05: Ship-Ready Gate (Full Mode 4)
- **Source:** Lines 209-224
- **Pre-audit:** Post-Build Metacognitive Reviewer + team-lead screenshot pre-capture
- **Mode 4:** 9 auditors, 48 PA questions, 3 viewports, screenshot pre-capture pattern
- **Additional (parallel):** Programmatic audit, comparative audit (vs Middle), blind novelty evaluation

### SUCCESS CRITERIA — GATES (11 total)

| ID | Criterion | Threshold | Source Line |
|----|-----------|-----------|-------------|
| G1 | PA-05 DESIGNED avg | >= 3/4 across both PAs | 371 |
| G2 | Container width | 940-960px | 372 |
| G3 | Void budget | < 15% contentless | 373 |
| G4 | Soul compliance | 8/8 | 374 |
| G5 | No severity-1 | Zero WOULD-NOT-SHIP | 375 |
| G6 | Footer reachability | < 1 viewport gap | 376 |
| G7 | Header ratio | <= 20% viewport | 377 |
| G8 | CPL | 45-80 chars | 378 |
| G9 | Heading spacing | >= 1.5:1 ratio | 379 |
| G10 | 4-scale coherence | Nav+Page+Section+Component | 380 |
| G11 | Content sections | >= 5 with >= 200px height | 381 |

### SUCCESS CRITERIA — SCORES (12 total)

| ID | Criterion | Target | Source Line |
|----|-----------|--------|-------------|
| S1 | Novelty | 8+/9 | 386 |
| S2 | Better than Ceiling | >= 3 improvements | 387 |
| S3 | Mechanism count | 12-14 deployed | 388 |
| S4 | Restraint ratio | >= 1.5 reject-to-deploy | 389 |
| S5 | Intentionality dimensions | 4+/6 | 390 |
| S6 | Token compliance | >= 85% var() | 391 |
| S7 | Inter-agent messaging | >= 12 substantive | 392 |
| S8 | Reinforcing pairs | >= 3 documented | 393 |
| S9 | Transition variation | >= 4 different types | 394 |
| S10 | Silence zones | >= 3 documented | 395 |
| S11 | Metaphor structural | >= 70% without labels | 396 |
| S12 | Signal-to-silence | 0.6-0.8:1 | 397 |

### KILL CRITERIA (24 total, from lines 499-524)

| ID | Stage | Criterion | Threshold | On FAIL |
|----|-------|-----------|-----------|---------|
| KB-01 | Pre-Build | Content sections | >= 4, >= 200 words | ABORT or expand |
| KB-02 | Pre-Build | Content/Zone ratio | >= 1.5 | Redesign metaphor |
| KB-03 | Pre-Build | Predicted void | <= 30% | Compress plan spacing |
| KB-04 | Pre-Build | Prompt length | <= 200 lines | COMPRESS (mandatory) |
| KB-05 | Pre-Build | Soul channel conflicts | Zero | Redesign metaphor |
| SP-01 | Pass 1 | Container width | 940-960px | Fix CSS (2 cycles max) |
| SP-02 | Pass 1 | Max void | <= 1620px | Fix spacing (2 cycles max) |
| SP-03 | Pass 1 | Content distribution | >= 70% | Add content / reduce zones |
| SP-04 | Pass 1 | Header ratio | <= 25% viewport | Reduce header padding |
| SP-05 | Pass 1 | Footer reachable | Present + gap <= 1080px | Add/fix footer |
| CP-01 | Pass 2 | Mechanism count | <= 16 | Remove mechanisms |
| CP-02 | Pass 2 | Restraint ratio | >= 1.5 | Document more rejections |
| CP-03 | Pass 2 | Zone visibility | <= 1 invisible boundary | Redesign differentiation |
| CP-04 | Pass 2 | Spatial re-check | SP-01 + SP-03 pass | ROLLBACK to Pass 1 |
| IT-01 | Pass 3 | Height increase | <= 10% | Revert heaviest additions |
| IT-02 | Pass 3 | Intentionality elements | >= 2 present | Add missing elements |
| IT-03 | Pass 3 | Self-reference consensus | 2/2 INTEGRAL | Remove self-reference |
| FK-01 | Final | PA-05 average | >= 3/4 | DO NOT SHIP |
| FK-02 | Final | Soul violations | Zero | Fix CSS (allowed) |
| FK-03 | Final | Spatial final check | SP-01+SP-02+SP-03 pass | DO NOT SHIP |
| FK-04 | Final | Novelty | >= 6/9 flagship | Classify at correct tier |
| FK-05 | Final | Dual spatial WNS | Zero | ABORT if >= 2 |
| TK-01 | Ongoing | Total time | <= 240 min | Ship at current state |

**Kill criteria summary:** 8 abort triggers, 12 fix-and-retry conditions, 1 mandatory compression (KB-04), 1 judgment call (IT-03, requires 2-person consensus)

### EXECUTION PROMPT OUTLINE (from lines 230-334)

#### PROMPT-18-L1: Layer 1 CONVICTION (70 lines)
- **Source:** Lines 232-245
- **Content:** Thesis ("difference is restraint"), load-bearing metaphor test, "point of view," beauty definition, personality (Warm/Authoritative/Unhurried), 4 resolved tensions, quality exemplar (20 lines CD-006, 20 lines DD-006)

#### PROMPT-18-L2: Layer 2 EXECUTION SPEC (100-120 lines)
- **Source:** Lines 248-300
- **Sections:**
  - Section 1: Mission (10 lines) -- content source, tier, output dir, naming
  - Section 2: Spatial Rules (15 lines) -- container, CPL, void, empty elements, heading spacing, max spacing token
  - Section 3: Soul Rules (10 lines) -- 8/8 soul check, warm palette, typography locked
  - Section 4: Compositional Rules (15 lines) -- per-category minimums, reinforcing pairs, transitions, designed moments, cap
  - Section 5: Process Rules (15 lines) -- Phase 0E, two-instance, checkpoints A+B, alert acknowledgment
  - Section 6: Builder Self-Check (15 lines) -- container, CPL, void, tokens, soul, landmarks, rhythm, transitions
  - Section 7: Success Criteria (10 lines) -- PA-05 >= 3/4, D3 >= 6/9, better than Middle, no sev-1, void, metaphor
  - Section 8: Kill Criteria Summary (10 lines) -- void < 40:60 STOP, spatial gate 2x fail ABORT, time >= 240 ship, PA-05 < 3 DNP, 2+ dual WNS ABORT

#### PROMPT-18-L3: Layer 3 COORDINATION SPEC (60 lines)
- **Source:** Lines 302-334
- **Sections:**
  - Section A: Agent Roster (25 lines) -- 10+ agents with models and roles
  - Section B: Communication Obligations (20 lines) -- 5 mandatory checkpoints (A-E), minimum 8 messages, team-lead checks
  - Section C: Audit Protocol (15 lines) -- gate sequence 0-5, screenshot pre-capture, 9 auditors, dual PA, blind novelty, comparative

#### PROMPT-18-L4: Layer 4 REFERENCE LIBRARY (existing files)
- **Source:** Lines 336-344
- **Files:**
  - `~/.claude/skills/tension-composition/SKILL.md`
  - `~/.claude/skills/perceptual-auditing/SKILL.md`
  - `design-system/compositional-core/grammar/mechanism-catalog.md`
  - `design-system/compositional-core/vocabulary/tokens.css`
  - `design-system/compositional-core/identity/prohibitions.md`
  - `design-system/compositional-core/guidelines/semantic-rules.md`
  - Crown jewels: DD-006, CD-006 (planner + intentionality builder only)

### RISK REGISTER (from file 18, lines 349-361)

| ID | Risk | P | Impact | Mitigation | Source Reports |
|----|------|---|--------|-----------|----------------|
| R1 | Spatial gate false positive (structurally adequate but perceptually sparse) | HIGH | Gate passes bad page | Add SC-08: Content Weight Check (3+ visual elements/section, 2+ content types) | Report 09, FM-1 |
| R2 | Pass 2 breaks Pass 1's spatial quality | HIGH | Cumulative spacing | Re-run SC-02 + SC-03 AUTOMATICALLY after Pass 2. 10% degradation threshold triggers ROLLBACK. | Report 09, FM-2 |
| R3 | Metaphor spatial obligations conflict with void budget | MED-HIGH | Metaphor-structural void | Phase 3.5: Spatial Obligation Analysis after derivation, before planning. Cost < 10% page height. | Report 09, FM-3 |
| R4 | Mandatory messaging produces noise (Goodhart's Law) | HIGH | Right count, wrong content | Mandate INFORMATION EXCHANGE (deliverable files with numbers), not MESSAGE COUNT. | Report 09, FM-4 |
| R5 | Intentionality layer is cosmetic, not structural | MED-HIGH | Bolted-on quality | Include intentionality requirements in Pass 0. Pass 4 EXECUTES plan, not invents it. | Report 09, FM-5 |
| R6 | Restraint protocol documented but not felt | MED | Ratio measures decisions not perception | Silence zones must be PERCEPTUALLY VERIFIABLE via screenshots. | Report 09, FM-6 |
| R7 | "Wall of Content" overcorrection | MED | Too dense | Single breathing zone exception. Signal-to-silence 0.6-0.8:1. | Reports 02, 04, 09 |
| R8 | 150+ rules exceed attention budget (~100 units) | HIGH | Preparation paradox | Builder prompt ~55 lines execution spec. Everything else -> GATES. | Report 20 |
| R9 | Zero messaging despite MUST protocol | MED | Same as ceiling | Team-lead enforces at Gate 1. PAUSE if zero messages. | Report 06 |
| R10 | Pipeline takes > 360 min | MED | Cost overrun | TK-01: Hard stop at 240 min. Expected: ~320 min. | Report 07 |

### CROSS-CUTTING THEMES (10 confirmed principles, lines 412-455)

| # | Theme | Source Reports |
|---|-------|---------------|
| 1 | Spatial Confidence Is THE Gate | Reports 01, 02, 03, 07, 08, 09, 15, 16 |
| 2 | Binary Rules -> 100% Compliance; Judgment -> ~0% | Reports 06, 07, 08, 10, 20 |
| 3 | Attention Is the Limiting Resource (~100 units) | Report 20 |
| 4 | Restraint > Saturation | Reports 04, 11, 13, 19 |
| 5 | Compositional Fluency Is the Real Differentiator | Report 13 |
| 6 | "Wall of Content" Is Next Risk (Overcorrection) | Reports 02, 04, 09, 15 |
| 7 | Intentionality Requires NO Extra CSS | Report 14 |
| 8 | Prompt Must Be ~240 Lines Max | Reports 10, 20 |
| 9 | Beauty = Confident Intention at Every Scale | Report 12 |
| 10 | Content Inventory Has VETO POWER Over Metaphor | Report 05 |

### OPEN QUESTIONS (6 total, lines 458-491)

| # | Question | Recommendation | Source |
|---|----------|---------------|--------|
| Q1 | Should flagship include calibration run? | YES. Costs ~180 min, reduces failure probability ~20%. | Report 17, Section 6 |
| Q2 | Should Pass 4 be separate or integrated into Pass 0? | COMPROMISE: Requirements in Pass 0, execution in Pass 4. | Report 09, FM-5 |
| Q3 | What content for flagship page? | Not specified. >= 4 sections, >= 200 words each, mixed types, DIFFERENT from ceiling. | Pipeline requirements |
| Q4 | Is competitive skeleton build worth cost? | YES. P(good) 70% -> 91%. 1 extra Sonnet. | Report 17, Section 2 |
| Q5 | How should embedded auditor handle Playwright? | Exclusive Playwright access. Builder never uses Playwright. | Report 17, Section 4 |
| Q6 | Maximum time before abort? | TK-01: 240 min hard stop. Ship at current state. | Report 07 |

### RECOMMENDED NEXT STEPS (ordered, lines 533-546)

| Order | Step | Prerequisite | Est. Time |
|-------|------|-------------|-----------|
| 1 | Select content topic | None | ~15 min |
| 2 | Apply 7 BLOCKING enrichments | Content ready in Report 02 | ~45 min |
| 3 | Assemble 4-layer execution prompt | Enrichments applied | ~60 min |
| 4 | Run calibration on different content | Prompt assembled | 150-220 min |
| 5 | Execute flagship | Calibration validated | ~320 min |
| 6 | Post-experiment retrospective | Flagship complete | ~30 min |

### COMMUNICATION OBLIGATIONS (5 mandatory checkpoints, lines 318-326)

| Checkpoint | Trigger | From -> To | Content |
|------------|---------|-----------|---------|
| A | Post-plan read-through | Builder -> Planner | Biggest spatial concern, whitespace calculation, plan read confirmation |
| B | Post-build report | Builder -> Team-lead | Total page height, content-to-void ratio, section count, deviations |
| C | Anomaly flag | Any agent -> Team-lead | Any unexpected issue |
| D | Spatial alert acknowledgment | Builder -> Embedded auditor | "Intentional" or "Adjusting" response |
| E | Pre-handoff confirmation | Each pass -> Next pass | Ready-to-proceed confirmation |

### KEY NUMBERS (from summary, line 554)

- **Agents:** 22
- **Passes:** 5
- **Gates:** 7
- **Time estimate:** ~320 min (5.3 hrs)
- **Prompt length:** ~240 lines (Layers 1-3)
- **P(Full Flagship):** 55-65%
- **P(MVF or better):** 85-90%
- **Pre-build checklist items:** 24
- **Kill criteria:** 24
- **Success gate targets:** 11
- **Success score targets:** 12
- **Risk mitigations:** 10
- **Cross-cutting themes:** 10
- **Open questions:** 6
- **Next steps:** 6

---

## SUMMARY STATISTICS

| Category | File 16 | File 17 | File 18 | TOTAL |
|----------|---------|---------|---------|-------|
| Action Items | 10 | 23 | 6 (next steps) | 39 |
| Enrichments | 2 | 1 | 4 (file mods) | 7 |
| Prerequisites | 3 | 0 | 17 (checklist) | 20 |
| Binary Checks | 4 | 11 | 11 (gates) | 26 |
| Gates | 0 | 5 | 6 (named gates) | 11 |
| Kill Criteria | 0 | 0 | 24 | 24 |
| Success Scores | 0 | 13 | 12 | 25 |
| File Modifications | 0 | 3 | 4 | 7 |
| Cross-References | 6 | 13 | 10+ | 29+ |
| Risk Mitigations | 0 | 10 | 10 | 20 |
| Open Questions | 0 | 0 | 6 | 6 |
| Communication Obligations | 0 | 0 | 5 | 5 |
| Pipeline Passes | 0 | 5 | 5 | 5 (same) |
| Quality Bands | 0 | 5 | 5 | 5 (same) |
| Prompt Sections | 0 | 0 | 8 (L2) + 3 (L3) | 11 |
| **TOTAL EXTRACTED ITEMS** | **25** | **84** | **189** | **298** |

### BLOCKING ITEMS (must be done before flagship can start)

1. **CHK-18-E1 + CHK-18-E2:** Apply 7 BLOCKING enrichments to 4 design system files (+328 lines)
2. **CHK-18-D1:** Execution prompt <= 200 lines
3. **CHK-18-D2:** 4-layer architecture applied
4. **CHK-18-D3:** All rules binary (zero MAY)
5. **CHK-18-D4:** All CAPABILITY -> OBLIGATION conversion
6. **CHK-18-A1:** Content inventory completed
7. **CHK-18-A2:** Content sections >= 4 with >= 200 words (KB-01)
8. **CHK-18-A3:** Density map plotted
9. **CHK-18-B1:** Metaphor derived through full pipeline
10. **CHK-18-B2:** Soul compatibility verified (KB-05)
11. **CHK-18-B3:** Spatial obligation analyzed
12. **CHK-18-B4:** Content/Zone ratio >= 1.5 (KB-02)
13. **CHK-18-C1:** Void budget calculated (KB-03)
14. **CHK-18-C2:** Zone necessity test completed
15. **CHK-18-C3:** Spatial budget table written
16. **ACT-16-02:** Void budget gate implemented
17. **ACT-16-03:** Programmatic container verification gate
18. **ACT-16-06:** Spatial confidence as FIRST gate
19. **ACT-16-08:** ALL rules binary or quantified
20. **ACT-17-01:** 5-pass pipeline with single-concern passes designed
21. **ACT-17-21:** 24 target metrics defined (11 gates + 13 scores)

---

**EXTRACTION COMPLETE. 298 items extracted across 3 files (467 + 806 + 555 = 1,828 source lines).**
