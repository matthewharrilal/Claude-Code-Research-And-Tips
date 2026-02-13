# Cross-Reference Gap Report: Master Prompt vs Execution Plan

**Auditor:** cross-ref-auditor
**Date:** 2026-02-10
**Master Prompt:** `_perceptual-research/MASTER-PERCEPTUAL-EXECUTION-PROMPT.md` (1,704 lines)
**Execution Plan:** `~/.claude/plans/fizzy-sparking-popcorn.md` (571 lines)

---

## Summary Statistics

| Status | Count |
|--------|-------|
| COVERED | 62 |
| PARTIAL | 18 |
| MISSING | 7 |
| **Total items audited** | **87** |

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| HIGH | 7 |
| MEDIUM | 10 |
| LOW | 5 |

---

## SECTION 1: MISSION STATEMENT

### 1.1 "What You Will Do" (lines 9-11)
- **Master prompt says:** Plan and execute perceptual auditing across 4 stages, 18 HTML pages + 11 base components.
- **Plan coverage:** COVERED -- Context section (lines 5-7) restates this. Phase strategy (lines 11-38) elaborates.
- **Severity:** N/A

### 1.2 "What Perceptual Auditing IS" (lines 14-16)
- **Master prompt says:** Judges visual quality by LOOKING -- not CSS, not source, not rule compliance.
- **Plan coverage:** COVERED -- Context (line 7) states "judged by how they LOOK to a human eye, not whether their CSS is correct."
- **Severity:** N/A

### 1.3 The One Rule (lines 18-21)
- **Master prompt says:** "React to what you see before you check what you know." Temporal ordering: perception MUST precede analysis.
- **Plan coverage:** COVERED -- Referenced in Phase 1A auditor prompts (line 181): "The One Rule injected."
- **Severity:** N/A

### 1.4 The Sovereignty Principle (lines 23-34)
- **Master prompt says:** Three sovereignty categories (ALWAYS-LOCKED, LOCKED, CHALLENGEABLE). Two failure modes (perceptual overreach, research suppression).
- **Plan coverage:** COVERED -- Referenced in Plan line 55 ("3 categories"), Lock Sheet sections (line 165), Weaver task #6 (line 216).
- **Severity:** N/A

### 1.5 The Cascade Requirement (lines 36-40)
- **Master prompt says:** Fixes must be unanimous down to basic components. Every fix propagates to root cause layer.
- **Plan coverage:** COVERED -- Phase 1D (lines 359-394) covers cascade propagation with 7 classes and unanimity verifier.
- **Severity:** N/A

### 1.6 The Three Laws of Perceptual Questions (lines 42-47)
- **Master prompt says:** (1) Answer requires screenshot, (2) describable in plain language, (3) non-designer can validate.
- **Plan coverage:** PARTIAL -- Not explicitly stated in plan. Implicitly enforced via language hard block and auditor prompts, but the three laws themselves are not quoted or referenced as a gatekeeping check.
- **Severity:** LOW -- The laws are design principles baked into the questions themselves, not operational steps.

---

## SECTION 2: PIPELINE OVERVIEW

### 2.1 Pipeline at a Glance (lines 55-72)
- **Master prompt says:** 5 stages with finding counts, scores, crown jewels.
- **Plan coverage:** COVERED -- Phase strategy (lines 13-38) references all stages. Count verification table (lines 73-93) confirms all counts.
- **Severity:** N/A

### 2.2 Stage Descriptions (lines 74-84)
- **Master prompt says:** Detailed description of each stage including finding counts, key discoveries (Soul Pieces, Fractal, OD-F-005, Attention Topology).
- **Plan coverage:** COVERED -- Not restated in plan (correctly -- this is reference material, not operational steps).
- **Severity:** N/A

### 2.3 Key File Locations (lines 86-115)
- **Master prompt says:** 25+ file paths for research, findings, tokens, patterns, anti-patterns, handoffs.
- **Plan coverage:** COVERED -- Pre-flight (lines 112-120) verifies key files. Research Contextualizer sections (lines 149-160, 260-268, 278-285) list specific reads per stage.
- **Severity:** N/A

### 2.4 Dependency Chain Between Stages (lines 117-129)
- **Master prompt says:** Stage 1 ENABLES Stage 2 CONSTRAINS Stage 3 CONSTRAINS Stage 4. 211 total constraints by AD.
- **Plan coverage:** COVERED -- Phase strategy rationale (lines 18-23) explains cascade ordering. Not explicitly diagrammed but operationally reflected in AD-first execution order.
- **Severity:** N/A

### 2.5 Gate Files (lines 131-137)
- **Master prompt says:** Three mandatory handoff files (DD->OD, OD->AD, AD->CD).
- **Plan coverage:** COVERED -- Listed in pre-flight (line 118) and Research Contextualizer reads (lines 154, 264).
- **Severity:** N/A

### 2.6 The 6 Exploration Files Per Stage (lines 139-170)
- **Master prompt says:** 18 HTML files with names, patterns, scores, OD pairings for AD.
- **Plan coverage:** COVERED -- Plan line 111 verifies all 18 exist. Execution order table (lines 128-136) lists all 6 AD pages with modes. OD/DD crown jewels listed in Phase 1B (lines 254-288).
- **Severity:** N/A

---

## SECTION 3: THE PERCEPTUAL AUDITING SKILL

### 3.1 The 28 Core Questions (lines 176-271)

#### 3.1a Tier 1: Mandatory Five (PA-01 through PA-05, lines 177-186)
- **Master prompt says:** 5 questions with dimensions and "What It Catches" descriptions.
- **Plan coverage:** COVERED -- Listed by ID in Standard Alpha prompt (plan line 234), Standalone auditor assignments (lines 173-177). Count verified (line 78).
- **Severity:** N/A

#### 3.1b Tier 2: Standard Fifteen (PA-06 through PA-20, lines 188-232)
- **Master prompt says:** 15 questions across 6 subcategories (Readability, Spatial, Visual Flow, Grid, Consistency, Color/Emotion).
- **Plan coverage:** COVERED -- Distributed across auditor assignments. Standalone: A gets PA-18/19/20, B gets PA-06/07/08, C gets PA-09/10/11/14/15/17, D gets PA-12/13/16. Standard: Alpha PA-01-11, Beta PA-12-20.
- **Note:** Plan does NOT reproduce the full question text inline -- it references by PA-ID only. The master prompt templates (Section 4.10) do include the text, and the plan states it uses "exact template from Section 4.10" (line 179).
- **Severity:** N/A

#### 3.1c Tier 3: Deep Dive Eight (PA-21 through PA-28, lines 234-262)
- **Master prompt says:** 8 questions (Responsiveness 21-23, Cross-Page 24-25, Architectural 26-27, Adversarial 28).
- **Plan coverage:** COVERED -- PA-21/22/23 assigned to Standalone Auditor B (line 174). PA-24/25 to Auditor D (line 176). PA-26/27/28 to Adversarial (line 177). Standard mode correctly excludes these.
- **Severity:** N/A

#### 3.1d Tier Summary table (lines 264-271)
- **Master prompt says:** Time estimates per tier (3 min, 25 min, 20 min, ~48 min total).
- **Plan coverage:** PARTIAL -- Plan uses per-audit time estimates (70 min standalone, 38 min standard) that roughly align but does not reproduce the per-tier breakdown.
- **Severity:** LOW -- Operational; per-audit estimates are more useful than per-tier.

### 3.2 Four Modes (lines 273-294)
- **Master prompt says:** Embedded (90s, 0 agents), Quick (3 min, 0 agents), Standard (30 min, 4 agents), Standalone (60 min, 7 agents).
- **Plan coverage:** COVERED -- Count verification (line 81). Mode selection per stage (lines 128-136). Cross-page Quick pass (lines 243-250). Embedded mode referenced in Builder/Fixer injection (master lines 987-999) but not as a plan step (correctly -- Embedded is injected into other agents, not a separate audit).
- **Severity:** N/A

### 3.3 Cold Look Protocol (lines 296-316)
- **Master prompt says:** 5-step protocol (CLEAR, LOOK 5s, REACT, LOCK, REPEAT). Locked responses. Template format. Why locking matters.
- **Plan coverage:** COVERED -- Plan line 183: "Cold Look Protocol (Section 3.3): 5-second look -> LOCKED reactions." Weaver task #5 (line 215): "Cold Look concordance." Validation section verifies Cold Look is locked (line 566).
- **Severity:** N/A

### 3.4 Scroll-Through Protocol (lines 317-338)
- **Master prompt says:** Why not full-page screenshots. Start at top, 80% viewport scroll steps, 5-15 screenshots. 5 dimension passes (Readability, Spatial Balance, Hierarchy, Consistency, Ship Test).
- **Plan coverage:** PARTIAL -- Plan line 183 references "Scroll-Through Protocol (Section 3.4): 80% viewport height scroll steps." The 5 dimension passes are NOT explicitly listed in the plan -- they appear only in the master prompt template injection.
- **Severity:** MEDIUM -- The 5 dimension passes are a critical methodology detail. If the plan relies solely on the master prompt template being copied verbatim, this is fragile. The plan should at minimum note "5 dimension passes per Section 3.4."

### 3.5 Visual Auditing Protocol / Playwright (lines 340-418)
- **Master prompt says:** 7 exact Playwright steps (Navigate, Wait fonts, Disable animations, Wait 500ms, Set viewport, Scroll-through). JavaScript code snippets. Viewport specs (1440x900, 1024x768, 768x1024). Screenshot order rationale. Multi-viewport comparison (4 steps).
- **Plan coverage:** COVERED -- Plan line 184: "Visual Auditing Protocol (Section 3.5): fonts.ready, disable animations, wait 500ms." Viewport specs in auditor assignments (lines 173-177). Multi-viewport comparison not explicitly broken out but embedded in Weaver tasks.
- **Note on JavaScript snippets:** The plan does NOT reproduce the animation-disabling CSS or scroll-through JavaScript. It references them via "Section 3.5". This is CORRECT for the plan level -- the actual code lives in the master prompt and gets injected via agent prompts.
- **Severity:** N/A

### 3.5a Multi-Viewport Comparison (lines 420-424)
- **Master prompt says:** 4 comparison steps after all viewports done (Squeeze Test, Content Survival, Identity Survival, Cold Look Reconciliation).
- **Plan coverage:** PARTIAL -- Not explicitly listed in plan. Implicitly part of Weaver synthesis. The plan doesn't mention "Squeeze Test" or "Content Survival" or "Cold Look Reconciliation" by name.
- **Severity:** MEDIUM -- These are Weaver-level synthesis tasks. If the Weaver prompt from Section 4.10 is used verbatim, they'll be present. But the plan's Weaver task list (lines 210-217) doesn't include them.

### 3.6 Research Sovereignty (lines 426-505)

#### 3.6a Lock Sheet Format (lines 428-464)
- **Master prompt says:** Full template with 4 sections (ALWAYS-LOCKED, LOCKED, CHALLENGEABLE, PREVIOUS FINDINGS). Table columns per section.
- **Plan coverage:** COVERED -- Plan line 165: "Lock Sheet file exists with ALWAYS-LOCKED, LOCKED, CHALLENGEABLE, PREVIOUS FINDINGS sections." Research Contextualizer prompt template (master lines 776-817) used per plan line 163.
- **Severity:** N/A

#### 3.6b Research Contextualizer Protocol (lines 466-494)
- **Master prompt says:** 9-item reading order (provenance order). Classification Decision Tree (6-step).
- **Plan coverage:** COVERED -- Plan lines 149-160 list the reading order for AD. Classification tree referenced in master prompt template. Plan line 163 says "Uses Research Contextualizer Prompt from Section 4.10 (exact template, no paraphrase)."
- **Severity:** N/A

#### 3.6c The Temporal Firewall (lines 496-498)
- **Master prompt says:** Visual auditors NEVER see Lock Sheet before completing perceptual work.
- **Plan coverage:** COVERED -- Plan line 185: "MUST NOT read lock-sheet.md (information isolation, Section 4.6)."
- **Severity:** N/A

#### 3.6d When Perception and Research Conflict (lines 500-505)
- **Master prompt says:** 4 conflict resolution paths (INVALID, VALID, VALID+ACTIONABLE, ESCALATE).
- **Plan coverage:** COVERED -- Plan line 216: "Sovereignty classification per finding (INVALID / VALID / VALID+ACTIONABLE / ESCALATE)."
- **Severity:** N/A

### 3.7 Dual Severity Track (lines 507-527)
- **Master prompt says:** Rule Track (3 levels) + Perception Track (3 levels: WOULD-NOT-SHIP, LOOKS-WRONG, COULD-BE-BETTER). 4 critical rules.
- **Plan coverage:** COVERED -- Plan line 56 references "Dual Severity." Weaver tasks (lines 214-217) use perception track ranking. Validation metrics (lines 417-418) track perception finding ratios.
- **Note:** The 4 critical rules (lines 523-527) are not individually listed in the plan but ARE in the Synthesizer/Weaver prompt templates referenced.
- **Severity:** N/A

### 3.8 Anti-Patterns -- 23 across 7 categories (lines 529-582)
- **Master prompt says:** Full taxonomy: AP-01 through AP-23, each with name, tell, organized into 7 categories (A-G: Cognitive Escape, Rule-Checking, Scope, Completion, Aesthetic, Sovereignty, Scale).
- **Plan coverage:** PARTIAL -- Plan line 57 says "23 across 7 categories (AP-01 to AP-23)." Plan line 82 verifies counts. Plan line 202 says "Contamination spot-check (Grep for CSS property names)." Plan line 474 says "Flag CONTAMINATED."
- **Gap:** The plan does NOT reproduce the anti-pattern names or descriptions. It references counts. The Gate 2 contamination check (line 202) only checks for CSS property names (AP-04), not the full 23. The master prompt anti-patterns include subtle failures like "Self-Reference Blindness" (AP-12), "Aesthetic-Usability Blindness" (AP-17), "Post-Lock Revision" (AP-22) that go beyond CSS-property checking.
- **Severity:** HIGH -- Gate 2's contamination check is narrower than the master prompt's anti-pattern taxonomy. The plan should specify that the Weaver/Synthesizer explicitly checks for ALL 23 anti-patterns, not just CSS property leakage. Currently the plan's Gate 2 only catches Category A (Cognitive Escape) anti-patterns.

---

## SECTION 4: TEAM ARCHITECTURE

### 4.1 Team Roles (lines 588-628)
- **Master prompt says:** 7 roles with CAN/CANNOT permissions: Lead, Research Contextualizer, Visual Auditor, Research Validator/Synthesizer, Adversarial, Fixer, Weaver-Synthesizer.
- **Plan coverage:** COVERED -- All roles appear in plan with correct capabilities. Lead's THIN rule (plan line 593 reference). Visual Auditor language hard block (plan line 181). Research Contextualizer file-reading constraint. Adversarial gets Lock Sheet CHALLENGEABLE section (plan line 200).
- **Severity:** N/A

### 4.1a Visual Auditor Language HARD BLOCK (lines 601-603)
- **Master prompt says:** Exhaustive word ban list (px, rem, em, %, hex, rgb, rgba, hsl, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position). Replacement word list.
- **Plan coverage:** COVERED -- Plan line 181: "Language HARD BLOCK on CSS property names (Section 4.1 word list)." Gate 2 contamination check (line 202).
- **Severity:** N/A

### 4.2 Standard Mode Team (lines 629-655)
- **Master prompt says:** 4-agent topology diagram, task graph with blockedBy/blocks.
- **Plan coverage:** COVERED -- Plan lines 225-238 reproduce the Standard mode team with task graph.
- **Severity:** N/A

### 4.3 Standalone Mode Team (lines 657-704)
- **Master prompt says:** 7-agent topology diagram, per-auditor question assignments, task graph.
- **Plan coverage:** COVERED -- Plan lines 141-202 reproduce the Standalone team with sub-wave strategy.
- **Severity:** N/A

### 4.4 Fix Team (lines 706-712)
- **Master prompt says:** Optional fix team (Fixer A, Fixer B, Re-verifier).
- **Plan coverage:** PARTIAL -- Plan does not include a fix phase. This is a deliberate scope decision (audit only, no fixes in this pass), but the plan doesn't explicitly state "Fix mode deferred" or "Fix team not included."
- **Severity:** LOW -- The master prompt says fix team is optional ("if --fix and verdict is not SHIP"). The plan's exclusion is reasonable but should be noted.

### 4.5 Communication Protocol (lines 714-719)
- **Master prompt says:** PRIMARY: File-based. SendMessage ONLY for Lock Sheet completion and critical errors.
- **Plan coverage:** COVERED -- Implicitly through file-based outputs throughout the plan. Not explicitly restated, but plan follows file-based pattern.
- **Severity:** N/A

### 4.6 Information Isolation Barriers (lines 720-728)
- **Master prompt says:** 4 isolation barriers (Research<->Auditors, Research Validator->Auditors, Auditors->Fixers).
- **Plan coverage:** COVERED -- Plan line 185: "MUST NOT read lock-sheet.md (information isolation, Section 4.6)." Plan line 58: "4 barriers."
- **Severity:** N/A

### 4.7 Team Lifecycle (lines 729-754)
- **Master prompt says:** 5 phases (A: Initialization, B: Lock Sheet, C: Visual Auditing, D: Synthesis, E: Completion).
- **Plan coverage:** COVERED -- Per-audit execution (lines 141-223) follows this lifecycle. Phase E explicitly at line 223.
- **Severity:** N/A

### 4.8 Gate Verification (lines 755-761)
- **Master prompt says:** 3 gates (Gate 1: Lock Sheet exists, Gate 2: All findings exist + no CSS, Gate 3: AUDIT-REPORT.md exists).
- **Plan coverage:** COVERED -- Gates explicitly at plan lines 165-166 (Gate 1), 202-203 (Gate 2), 221 (Gate 3).
- **Severity:** N/A

### 4.9 Error Handling (lines 763-772)
- **Master prompt says:** 6 failure modes with detection and recovery.
- **Plan coverage:** COVERED -- Plan lines 465-475 reproduce all 6 failure modes verbatim.
- **Severity:** N/A

### 4.10 Agent Prompt Templates (lines 774-1011)

#### 4.10a Research Contextualizer Prompt (lines 776-817)
- **Master prompt says:** Full prompt template with reading list, output format, 4 critical items.
- **Plan coverage:** COVERED -- Plan line 163 says "Uses Research Contextualizer Prompt from Section 4.10 (exact template, no paraphrase)."
- **Severity:** N/A

#### 4.10b Visual Auditor Alpha Prompt (lines 819-886)
- **Master prompt says:** Full prompt template with One Rule, questions, exact 8-step procedure, language restrictions, output path, 3 critical items.
- **Plan coverage:** COVERED -- Plan line 179 says "All Visual Auditor prompts use the exact template from Section 4.10."
- **Severity:** N/A

#### 4.10c Visual Auditor Beta Prompt (lines 888-891)
- **Master prompt says:** Same as Alpha but PA-12-PA-20, output findings-beta.md.
- **Plan coverage:** COVERED -- Plan line 235.
- **Severity:** N/A

#### 4.10d Standalone Auditor Prompts (lines 892-899)
- **Master prompt says:** 4 agent variants (A: Impression+Emotion, B: Readability+Resp, C: Spatial+Grid, D: Hierarchy+Coherence) with per-agent question assignments.
- **Plan coverage:** COVERED -- Plan lines 173-176 with question assignments matching master prompt.
- **Severity:** N/A

#### 4.10e Adversarial Agent Prompt (lines 901-929)
- **Master prompt says:** Full template with 3 PA questions, tests (resize 50px increments, content variation, non-standard breakpoints), output format (Convention Challenges, From-Scratch, Fragility Map, Risk Assessment).
- **Plan coverage:** PARTIAL -- Plan line 177 assigns PA-26/27/28 with "Non-standard (900, 1100, 500, 320)" viewports. Plan line 200 says "Uses Adversarial Agent Prompt from Section 4.10."
- **Gap:** The master prompt Adversarial template (lines 921-923) specifies: (a) resize 1440->320 in 50px increments, (b) content length variation checks, (c) non-standard breakpoints. The plan (line 177) only lists 4 specific viewports (900, 1100, 500, 320) instead of the full 50px-increment sweep.
- **Severity:** MEDIUM -- If the plan uses the "exact template from Section 4.10," the 50px sweep will be there. But the plan's summary at line 177 contradicts the template by listing only 4 viewports.

#### 4.10f Synthesizer-Validator Prompt (lines 931-975)
- **Master prompt says:** Full template with 7 tasks, output format, 3 critical items.
- **Plan coverage:** COVERED -- Plan lines 206-221 list all 7 Weaver tasks (with slightly different ordering).
- **Severity:** N/A

#### 4.10g Weaver-Synthesizer Prompt (lines 977-985)
- **Master prompt says:** Extension of Standard Synthesizer with Convention Challenge, Fragility Assessment, cross-reference all 28 questions, fix recommendations, ~300-500 lines.
- **Plan coverage:** COVERED -- Plan line 219 states "~300-500 lines." Weaver tasks (lines 210-217) include synthesis tasks.
- **Gap:** Plan Weaver task list (210-217) does NOT include "Convention Challenge section from PA-26/27" or "Fragility Assessment from PA-28" explicitly. These are listed as Weaver responsibilities in the master prompt (lines 981-982).
- **Severity:** MEDIUM -- If the plan uses the prompt template verbatim, these sections will be present. But the plan's explicit task list omits them.

#### 4.10h Builder/Fixer Embedded Mode Injection (lines 987-999)
- **Master prompt says:** 5-question PA injection before declaring done.
- **Plan coverage:** MISSING -- Plan does not include Embedded mode injection for any agent. This is not an audit step but a quality gate for builder/fixer agents.
- **Severity:** LOW -- Embedded mode is not part of the audit pipeline. It's for builder agents during construction phases. The plan correctly focuses on audit execution.

#### 4.10i Fixer Post-Fix Injection (lines 1001-1011)
- **Master prompt says:** 5-step post-fix verification loop.
- **Plan coverage:** MISSING -- Plan does not include a fix phase, so post-fix injection is irrelevant.
- **Severity:** LOW -- Same rationale as 4.4 (Fix team deferred).

---

## SECTION 5: ENRICHMENT PROTOCOL

### 5.1 Finding ID Format: PA-F-### (lines 1017-1030)
- **Master prompt says:** PA-F- prefix, cross-cutting, globally sequential.
- **Plan coverage:** COVERED -- Plan lines 300-305 describe PA-F ID allocation with sequential ranges per stage.
- **Severity:** N/A

### 5.2 Finding Classification Suffixes (lines 1032-1041)
- **Master prompt says:** 5 suffixes ((none), -R, -C, -E, -S) with meanings and flow-forward rules.
- **Plan coverage:** COVERED -- Plan line 331: "Finding classification suffixes from Section 5.2."
- **Severity:** N/A

### 5.3 Finding Registry Entry Template (lines 1042-1064)
- **Master prompt says:** 14-field template (ID, Title, Source Audit, Target, PA Question, Classification, Rule Track, Perception Track, Sovereignty, Cold Look Quote, Description, Evidence, Fix Status, Fix Applied In, Downstream Impact).
- **Plan coverage:** COVERED -- Plan line 329: "Finding entry format uses the Finding Registry Entry Template from Section 5.3 (14 fields per finding)."
- **Severity:** N/A

### 5.4 The 7 Enrichment Layers (lines 1066-1091)
- **Master prompt says:** 7 layers (PA-outbound-findings, Inline Headers, Light Sections, Stage Provenance, RESEARCH-ACTIVE, PIPELINE-MANIFEST, Accumulated Identity).
- **Plan coverage:** COVERED -- Plan lines 308-338 describe 3-wave enrichment covering all 7 layers. Verification checklist (lines 342-355) checks all layers.
- **Severity:** N/A

### 5.5 Enrichment Execution Sequence -- 8 Steps (lines 1092-1119)
- **Master prompt says:** 8-step sequence (READ, CREATE/UPDATE PA-outbound, UPDATE inline headers, UPDATE light sections, UPDATE stage provenance, UPDATE RESEARCH-ACTIVE, UPDATE PIPELINE-MANIFEST, FLAG identity updates).
- **Plan coverage:** COVERED -- Plan lines 316-325 list a 9-step sequence (the plan splits step 5 into STAGE-HEADER and AUDIT-SYNTHESIS explicitly and adds "APPEND to RESEARCH-ACTIVE" as step 9). All 8 master-prompt steps are represented.
- **Severity:** N/A

### 5.6 Enrichment Verification Checklist (lines 1121-1135)
- **Master prompt says:** 11-point checklist.
- **Plan coverage:** COVERED -- Plan lines 342-355 reproduce the exact 11-point checklist.
- **Severity:** N/A

---

## SECTION 6: CASCADE PROPAGATION

### 6.1 The 5-Layer Dependency Chain (lines 1141-1164)
- **Master prompt says:** 5 layers (Tokens -> Patterns -> Research/Findings -> Explorations -> Downstream). Key insight: Layer 4-only fixes invisible to Layer 5.
- **Plan coverage:** COVERED -- Plan line 63: "5-layer chain."
- **Severity:** N/A

### 6.2 Root Cause Classification -- 7 Classes (lines 1166-1177)
- **Master prompt says:** S, T, P, C, R, I, F with fix locations and cascade scopes.
- **Plan coverage:** COVERED -- Plan line 63: "7 classes (S, T, P, C, R, I, F)." Plan line 84 verifies count.
- **Severity:** N/A

### 6.3 Classification Decision Tree (lines 1178-1212)
- **Master prompt says:** 5-question decision tree (Q1-Q5) with branching logic.
- **Plan coverage:** COVERED -- Plan lines 369-375 reproduce the decision tree (condensed but all 5 questions present).
- **Severity:** N/A

### 6.4 Cascade Propagation Protocol -- 6 Phases (lines 1214-1226)
- **Master prompt says:** 6 phases (CLASSIFY, TRACE, FIX AT SOURCE, PROPAGATE DOWN, VERIFY UNANIMITY, DOCUMENT).
- **Plan coverage:** PARTIAL -- Plan lines 365-394 cover classification (Phase 1), fix (Phases 3-4 via cascade fix agents), and unanimity verification (Phase 5). But Phases 2 (TRACE) and 6 (DOCUMENT) are implicit rather than explicit.
- **Gap:** Phase 2 (TRACE -- identify root file, list consuming files, build IMPACT SET) is not explicitly called out. The CASCADE-LOG.md output (line 376) implies Phase 6 happens, but "record in CASCADE-LOG, update PIPELINE-MANIFEST, update RESEARCH-ACTIVE" is not listed as explicit cascade-phase steps.
- **Severity:** MEDIUM -- The classifier agent (lines 365-376) likely performs tracing implicitly, but the plan should mention TRACE and DOCUMENT as explicit sub-steps.

### 6.5 Cross-Stage Impact Matrix (lines 1228-1236)
- **Master prompt says:** What to check for each change type (Token -> check all CSS, Pattern -> check explorations, Convention -> check all stages, Finding -> check downstream).
- **Plan coverage:** MISSING -- Plan does not reproduce the impact matrix. The cascade classifier reads tokens/patterns/conventions (line 367) but the plan doesn't specify what to CHECK per change type.
- **Severity:** MEDIUM -- The impact matrix tells agents WHERE to look. Without it, the classifier agent must derive this from the master prompt. Since the plan states it uses Section 6, this is reference-adequate but the plan should note "see Section 6.5 impact matrix for per-class check scope."

### 6.6 The Unanimity Guarantee -- 7 Conditions (lines 1238-1251)
- **Master prompt says:** 7 conditions with verification methods.
- **Plan coverage:** COVERED -- Plan lines 386-393 list all 7 conditions.
- **Severity:** N/A

### 6.7 Fix Order (lines 1252-1256)
- **Master prompt says:** Layer 1 first -> Layer 2 -> Layer 3 -> Layer 4. Dependency order within layers.
- **Plan coverage:** COVERED -- Plan line 380: "Fix order per Section 6.7: Layer 1 (tokens) -> Layer 2 (patterns) -> Layer 3 (conventions) -> Layer 4 (explorations)."
- **Severity:** N/A

---

## SECTION 7: EXECUTION SEQUENCE

### 7.1 Stage-by-Stage Mode Selection (lines 1262-1270)
- **Master prompt says:** Decision matrix: DD=Standard, OD=Standard, AD=Standalone, CD=Standalone, Components=Quick. Escalation triggers per stage.
- **Plan coverage:** COVERED -- Plan lines 128-136 follow this. AD pages in Standalone/Standard per score. OD/DD in Standard.
- **Gap:** Escalation triggers are not explicitly listed in plan (e.g., "Escalate to Standalone if DO-NOT-SHIP" for DD).
- **Severity:** LOW -- Phase 2 defers these decisions anyway.

### 7.2 Recommended Full-Pipeline Audit Sequence (lines 1272-1303)
- **Master prompt says:** Phase 1: AD first, Phase 2: OD, Phase 3: DD, Phase 4: Cross-stage synthesis. Within AD: AD-006 first, then AD-003+AD-005 Standalone, then AD-001/002/004 Standard, then cross-page Quick.
- **Plan coverage:** COVERED -- Plan follows this order exactly (lines 124-250).
- **Gap:** Master prompt Phase 4 "Cross-Stage Synthesis" (lines 1296-1302: write PA-AUDIT-SYNTHESIS.md, identify cross-stage patterns, classify as CASCADE, run enrichment, run cascade) is NOT explicitly listed as a plan step. The plan has enrichment (Phase 1C) and cascade (Phase 1D) but NOT the "PA-AUDIT-SYNTHESIS.md" cross-stage aggregation document.
- **Severity:** HIGH -- The master prompt explicitly calls for a PA-AUDIT-SYNTHESIS.md aggregating all stage verdicts, identifying cross-stage patterns, and classifying cross-stage findings as CASCADE. The plan's enrichment phase (Phase 1C) handles per-stage enrichment but does not produce this cross-stage synthesis. This is a missing deliverable.

### 7.3 Recommended Abbreviated Audit (lines 1304-1312)
- **Master prompt says:** One page per stage: AD-006, OD-006, DD-006.
- **Plan coverage:** COVERED -- Plan Phase 1 includes these exact pages.
- **Severity:** N/A

### 7.4 Research Context Per Stage (lines 1314-1340)
- **Master prompt says:** Reading lists for DD, OD, AD Research Contextualizers (specific files per stage).
- **Plan coverage:** COVERED -- Plan lines 149-160 (AD), 260-268 (OD), 278-285 (DD) reproduce these reading lists.
- **Gap:** OD reading list in master prompt (line 1324) says "in addition to DD" -- implying OD Contextualizer reads DD files too. Plan line 260-268 does NOT list DD files for OD Contextualizer. Similarly AD "in addition to DD + OD" (line 1333) -- plan doesn't list the cumulative reading.
- **Severity:** HIGH -- The master prompt specifies CUMULATIVE reading: OD reads DD context + OD context, AD reads DD + OD + AD context. The plan lists each stage's contextualizer reading list independently. For OD-006 (plan lines 260-268), the plan does NOT include R3 (DD primary research), COMP-F findings, or DD-outbound-findings. For AD contextualizer, the plan DOES include HANDOFF-OD-TO-AD (which carries OD context) but not DD files directly. This may cause OD/DD contextualizers to produce incomplete Lock Sheets.

### 7.5 Stage-Specific Auditor Focus Annotations (lines 1342-1351)
- **Master prompt says:** DD focus on density rhythm. OD focus on organizational coherence. AD focus on intentional misalignment, cross-page, 860px bottleneck.
- **Plan coverage:** COVERED -- Plan lines 189-198 (AD), 270-272 (OD), 286-288 (DD) reproduce these annotations.
- **Severity:** N/A

### 7.6 HTTP Server Setup (lines 1353-1370)
- **Master prompt says:** Command, verification, URL patterns per stage.
- **Plan coverage:** COVERED -- Plan lines 102-106 reproduce setup steps.
- **Severity:** N/A

### 7.7 Estimated Timeline (lines 1372-1382)
- **Master prompt says:** ~15 hours total for 18 pages.
- **Plan coverage:** PARTIAL -- Plan estimates ~7-8 hours for Phase 1 (8 pages, line 13). Phase 2 ~7-8 hours (line 30). Combined ~14-16 hours. Roughly aligned.
- **Severity:** N/A

---

## SECTION 8: VALIDATION CRITERIA

### 8.1 The Bento Grid Litmus Test (lines 1388-1400)
- **Master prompt says:** 7 specific requirements for AD-003 (PA-02, PA-06, PA-14, PA-10, CHALLENGEABLE classification, fixer constraint, Weaver top 3).
- **Plan coverage:** COVERED -- Plan lines 401-411 list 6 of the 7 checks (omits the fixer constraint since fix mode is not included).
- **Severity:** N/A

### 8.2 Ongoing Metrics (lines 1401-1412)
- **Master prompt says:** 8 metrics with targets and red flags.
- **Plan coverage:** COVERED -- Plan lines 413-424 reproduce all 8 metrics.
- **Severity:** N/A

### 8.3 Red Flags (lines 1414-1423)
- **Master prompt says:** 8 red flags.
- **Plan coverage:** COVERED -- Plan lines 426-435 reproduce all 8 red flags.
- **Severity:** N/A

### 8.4 The "Would They Tweet It" Test (lines 1425-1427)
- **Master prompt says:** Informal quality test -- would someone screenshot this as great design?
- **Plan coverage:** MISSING -- Not mentioned in the plan.
- **Severity:** LOW -- This is a philosophical framing, not an operational step.

### 8.5 Calibration Examples (lines 1429-1467)
- **Master prompt says:** 4 calibration examples (good/bad Cold Look, good/bad Zone Sweep).
- **Plan coverage:** MISSING -- Not included in the plan.
- **Severity:** MEDIUM -- These examples are CRITICAL for agent calibration. The plan references "exact template from Section 4.10" which doesn't include Section 8.5 examples. The master prompt auditor templates don't reference Section 8.5 either. However, these are used by the Lead to evaluate agent output quality, and the plan's validation section (lines 396-445) covers this functionally via red flag checking.

---

## SECTION 9: FILE MANIFEST

### 9.1 Files You Must Read (lines 1473-1488)
- **Master prompt says:** Universal reads (5 files) + per-stage reads.
- **Plan coverage:** COVERED -- Pre-flight (lines 112-120) and contextualizer reads (lines 149-160, 260-268, 278-285).
- **Severity:** N/A

### 9.2 Files You Will Produce (lines 1490-1540)
- **Master prompt says:** Per single-page outputs, per full-stage outputs, cross-stage outputs, updated files.
- **Plan coverage:** COVERED -- Plan lines 499-545 reproduce the output manifest.
- **Severity:** N/A

### 9.3 Output Directory Convention (lines 1542-1551)
- **Master prompt says:** `{exploration-dir}/_perceptual-audit/{target-id}/`
- **Plan coverage:** COVERED -- Plan lines 108-110 create these directories.
- **Severity:** N/A

### 9.4 Team Naming Convention (lines 1553-1562)
- **Master prompt says:** `pa-{stage}-{exploration-id}-{mode}-{date}`
- **Plan coverage:** COVERED -- Plan lines 478-495 list all team names following this convention.
- **Severity:** N/A

---

## APPENDIX A: SCROLL-THROUGH ADAPTATIONS BY STAGE (lines 1566-1588)

### DD Pages (lines 1568-1572)
- **Master prompt says:** Length 10,000-15,000px. Focus on density rhythm. Dead zones are red flags. Expected 8-12 screenshots.
- **Plan coverage:** COVERED -- Plan lines 286-288 reference DD scroll-through adaptations.
- **Severity:** N/A

### OD Pages (lines 1574-1577)
- **Master prompt says:** Length 12,000-18,000px. Focus on organizational coherence. Expected 10-15 screenshots.
- **Plan coverage:** COVERED -- Plan lines 270-272 reference OD adaptations.
- **Severity:** N/A

### AD Pages (lines 1579-1588)
- **Master prompt says:** Variable length. Per-pattern focus (Z-Pattern eye path, Bento Grid crushed columns, Spiral flow/confusion, Compound transitions). Expected 8-20 screenshots.
- **Plan coverage:** COVERED -- Plan lines 194-198 reproduce AD scroll-through adaptations by pattern.
- **Severity:** N/A

---

## APPENDIX B: PRE-FLIGHT CHECKLIST (lines 1592-1605)

- **Master prompt says:** 8-item checklist (HTTP server, page loads, output dir, target stage, correct mode, file paths, Playwright available, no contention).
- **Plan coverage:** COVERED -- Plan lines 97-120 reproduce all 8 items (slightly reorganized).
- **Severity:** N/A

---

## APPENDIX C: RETROACTIVE CASCADE CHECKLISTS (lines 1609-1642)

### DD Retroactive Cascade (lines 1611-1619)
- **Master prompt says:** 6-item checklist (geometry tokens, color tokens, spacing tokens, density patterns CSS, DD findings accuracy, PIPELINE-MANIFEST consistency).
- **Plan coverage:** MISSING -- Plan does not include retroactive cascade checklists.
- **Severity:** HIGH -- The master prompt provides stage-specific retroactive cascade checklists as part of the cascade verification process. The plan's unanimity verifier (lines 386-393) checks the 7 generic conditions but does NOT include the stage-specific retroactive items. For example, checking "OD-CONVENTION-SPEC unified 3 dialects -- verify all 6 ODs match" (line 1626) or "2px border epidemic (OD-F-AP-001): zero 2px structural borders remain" (line 1629) would require explicit instructions.

### OD Retroactive Cascade (lines 1624-1631)
- **Plan coverage:** MISSING -- Same as DD retroactive cascade.
- **Severity:** (Counted with DD above)

### AD Retroactive Cascade (lines 1633-1642)
- **Plan coverage:** MISSING -- Same rationale.
- **Severity:** (Counted with DD above)

---

## APPENDIX D: THE SEVERITY SYSTEM THAT KILLED PERCEPTION (lines 1646-1665)

- **Master prompt says:** Historical data showing ~100% rule fix rate vs ~4% perception fix rate. Why Perception Track exists.
- **Plan coverage:** COVERED -- Plan context (line 7) states "~4% fix rate for perceptual findings." This is motivational context, not an operational step.
- **Severity:** N/A

---

## APPENDIX E: ESCALATION PROTOCOL FORMAT (lines 1669-1698)

- **Master prompt says:** Full template for escalation entries (Perceptual Evidence, Research Lock, Attempted Resolution, Escalation Question, 3 Options).
- **Plan coverage:** PARTIAL -- Plan line 71 references "Escalation protocol format." Plan line 216 includes sovereignty classification with ESCALATE. But the plan does NOT reproduce the escalation entry template itself.
- **Severity:** MEDIUM -- If escalations occur, the agent needs to know the format. The plan references Section 4.10 templates which reference the Weaver/Synthesizer output format, but the escalation template from Appendix E is not in those templates. The Weaver would need to read the master prompt directly to produce correctly-formatted escalations.

---

## CROSS-CUTTING GAPS (not tied to a single section)

### CC-1: PA-AUDIT-SYNTHESIS.md (Cross-Stage Aggregation)
- **Master prompt Section 7.2 (line 1298):** "Write PA-AUDIT-SYNTHESIS.md aggregating all stage verdicts."
- **Master prompt Section 9.2 (line 1523):** Listed as output: `PA-STAGE-SYNTHESIS.md` per stage.
- **Plan coverage:** MISSING -- Plan has no step to produce PA-AUDIT-SYNTHESIS.md or PA-STAGE-SYNTHESIS.md. Plan Phase 1C enrichment (lines 292-355) handles per-stage enrichment but not cross-stage synthesis.
- **Severity:** CRITICAL -- This is a named deliverable in the master prompt that the plan does not produce. It's the cross-stage pattern identification step that catches systemic issues appearing across DD, OD, and AD.

### CC-2: Per-Stage PA-STAGE-SYNTHESIS.md
- **Master prompt Section 9.2 (line 1523):** Each stage audit produces a `PA-STAGE-SYNTHESIS.md` for cross-page synthesis within a stage.
- **Plan coverage:** PARTIAL -- Plan has the "AD Cross-Page Quick Pass" (lines 243-250) that produces `cross-page-quick.md`. But this is a Quick-mode pass (PA-24/PA-25 only), not a full stage synthesis. The master prompt envisions a `PA-STAGE-SYNTHESIS.md` that aggregates all 6 per-page audit reports within a stage.
- **Severity:** HIGH -- The plan's cross-page Quick pass is much narrower than the master prompt's PA-STAGE-SYNTHESIS.md. The cross-page pass only answers 2 questions at Cold Look level. The stage synthesis should aggregate all findings, identify within-stage patterns, and rank cross-page concerns.

### CC-3: Plan Relies on "Exact Template" Without Embedding
- **Observation:** The plan repeatedly says "Uses exact template from Section 4.10" (lines 163, 179, 200, 206). This means the executing instance must read the master prompt to extract templates at runtime.
- **Gap:** If the executing instance hits context limits or can't read the full 1,704-line master prompt, the templates are unavailable. The plan should either (a) embed the templates inline, or (b) explicitly state "Step X: Read MASTER-PERCEPTUAL-EXECUTION-PROMPT.md Section 4.10 and extract template."
- **Severity:** CRITICAL -- The plan's operational correctness depends entirely on runtime access to the master prompt. If the executing instance is a separate session without access, or if the file is too large to read in context alongside all the other research files, the agent prompts will be incomplete. The plan should include a step to extract and cache the templates in a smaller working file.

### CC-4: Enrichment Scratchpad Location
- **Master prompt Section 5.5 (line 1096):** Step 1 reads "AUDIT-REPORT.md" without specifying full path.
- **Plan coverage:** Plan line 306: `_pa-enrichment-scratchpad/`
- **Gap:** Plan creates scratchpad at a generic path but master prompt doesn't specify this. This is a plan ADDITION (good), not a gap. No issue.
- **Severity:** N/A

### CC-5: Components Stage
- **Master prompt Section 2 (line 59):** Lists Components (Stage 1, 11 React components) as auditable. Section 7.1 (line 1270): Components = Quick mode, 0 agents.
- **Plan coverage:** MISSING -- Plan does not include Component audits. Phase 1 focuses on explorations (AD/OD/DD pages) and Phase 2 is remaining OD+DD.
- **Severity:** MEDIUM -- The master prompt's Component stage is the lowest-priority audit (Quick mode, inline, no team). The plan's phased approach reasonably defers this. However, the plan should explicitly state "Component audits deferred to Phase 3 or later" rather than silently omitting them.

---

## FINDINGS RANKED BY SEVERITY

### CRITICAL (3)

| # | Gap | Section | Impact |
|---|-----|---------|--------|
| 1 | **CC-1: No PA-AUDIT-SYNTHESIS.md** cross-stage aggregation step | Section 7.2, 9.2 | Missing deliverable. Cross-stage systemic patterns won't be caught. |
| 2 | **CC-3: Plan relies on "exact template" without embedding or extraction step** | Section 4.10 | If executing instance can't read 1,704-line master prompt at runtime, all agent prompts are incomplete. |
| 3 | **Appendix C: No retroactive cascade checklists** | Appendix C | Stage-specific cascade verification items (2px border epidemic, 3 dialects, specific fix counts) not available to unanimity verifier. |

### HIGH (4)

| # | Gap | Section | Impact |
|---|-----|---------|--------|
| 4 | **Anti-pattern taxonomy not operationalized** | Section 3.8 | Gate 2 only checks CSS property names (AP-04). 19 other anti-patterns unchecked at gate level. |
| 5 | **CC-2: PA-STAGE-SYNTHESIS.md much narrower than specified** | Section 9.2 | Cross-page Quick pass (PA-24/PA-25 only) != full within-stage synthesis. |
| 6 | **OD/DD contextualizer cumulative reading** | Section 7.4 | OD contextualizer doesn't read DD context files. Master prompt says "in addition to DD." |
| 7 | **Section 7.2 Phase 4 cross-stage synthesis** entirely absent | Section 7.2 | Post-all-audits aggregation, cross-stage CASCADE classification missing. |

### MEDIUM (6)

| # | Gap | Section | Impact |
|---|-----|---------|--------|
| 8 | **Scroll-through 5 dimension passes** not mentioned in plan | Section 3.4 | Relies on template injection but plan summary omits. |
| 9 | **Multi-viewport comparison** 4 steps not in plan | Section 3.5 | Squeeze Test, Content Survival, etc. not in Weaver task list. |
| 10 | **Adversarial viewport sweep** plan lists 4 viewports vs master's 50px increments | Section 4.10e | Narrower adversarial testing. |
| 11 | **Cascade TRACE and DOCUMENT phases** implicit not explicit | Section 6.4 | Impact set building and documentation steps buried. |
| 12 | **Cross-stage impact matrix** not referenced | Section 6.5 | Cascade classifier doesn't know per-class check scope. |
| 13 | **Appendix E escalation template** not reproduced or referenced in agent prompts | Appendix E | Escalation entries may lack required format. |

### LOW (5)

| # | Gap | Section | Impact |
|---|-----|---------|--------|
| 14 | Three Laws of Perceptual Questions not referenced | Section 1.6 | Design principle, not operational. |
| 15 | Fix team not explicitly marked as deferred | Section 4.4 | Reasonable omission but should be noted. |
| 16 | "Would They Tweet It" test not mentioned | Section 8.4 | Philosophical framing, not operational. |
| 17 | Calibration examples not included | Section 8.5 | Useful for Lead evaluation but not agent steps. |
| 18 | Component audits not mentioned as deferred | CC-5 | Reasonable but should be explicitly noted. |

---

## RECOMMENDATIONS

1. **Add PA-AUDIT-SYNTHESIS.md step** (CRITICAL): After Phase 1C enrichment, add a step where one agent reads ALL audit reports and produces a cross-stage synthesis identifying patterns across DD/OD/AD.

2. **Add template extraction step** (CRITICAL): Add a Step 0.5 where the lead reads the master prompt Section 4.10 and extracts all 9 prompt templates into a working file (`_perceptual-audit/PROMPT-TEMPLATES.md`, <400 lines) that agents can reference without needing the full 1,704-line document.

3. **Add retroactive cascade checklists** (CRITICAL): Include the stage-specific retroactive items from Appendix C in the cascade verifier's instructions.

4. **Expand Gate 2 anti-pattern checking** (HIGH): Beyond CSS property names, Gate 2 should also check for: spec values (AP-06), compliance statements (AP-05), pixel measurements (AP-07). At minimum, add "check for numbers followed by 'px'" to the contamination grep.

5. **Add PA-STAGE-SYNTHESIS.md per stage** (HIGH): After all 6 AD audits + cross-page Quick, add a synthesis step that aggregates all per-page findings into a stage-level synthesis document.

6. **Fix OD contextualizer reading list** (HIGH): Add DD context files (R3, COMP-F, DD-outbound-findings) to OD-006 contextualizer reads per master prompt Section 7.4 "in addition to DD" instruction.

7. **Add Weaver Convention Challenge + Fragility sections** (MEDIUM): Explicitly list "Convention Challenge section" and "Fragility Assessment" in the Weaver task list.

8. **Add cross-stage synthesis as Phase 1E.5** (HIGH): Between Phase 1E validation and Phase 2, add cross-stage pattern analysis per Section 7.2 Phase 4.
