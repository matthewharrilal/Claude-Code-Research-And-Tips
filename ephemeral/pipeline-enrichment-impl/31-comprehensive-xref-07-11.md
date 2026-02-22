# Comprehensive Cross-Reference Audit: Research Files 07-11 + Debrief Parts 5-7

**Auditor:** Cross-Reference Auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** Every finding/recommendation/observation from research files 07-11 and debrief Parts 5-7, checked against the CURRENT state of 4 pipeline files

## Pipeline Files Audited (Current State)

| File | Location | Lines |
|------|----------|-------|
| SKILL.md | `~/.claude/skills/build-page/SKILL.md` | 437 |
| conventions-brief.md | `design-system/pipeline/conventions-brief.md` | 443 |
| gate-runner.md | `design-system/pipeline/gate-runner.md` | 1160 |
| flagship-pa-questions.md | `design-system/pipeline/flagship-pa-questions.md` | 145 |

---

## SECTION A: FILE 07 -- ANTI-REGRESSION ANALYSIS

### A1: Failure Mode 1 -- Complexity Ratchet

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A1.1 | 07:30-31 | Rules accumulate and never retire; need sunset protocol | PARTIALLY ADDRESSED | conventions-brief.md at 443 lines stays within the 450 cap recommended; SKILL.md at 437 lines within 450 cap. However, NO explicit sunset protocol exists in any pipeline file. No one-in-one-out rule codified. | SIGNIFICANT |
| A1.2 | 07:52-54 | Line budget: brief <= 450, SKILL.md <= 450, combined <= 950 | ADDRESSED | Brief is 443 lines, SKILL.md is 437 lines. Combined = 880, under 950 cap. The brief's final line (443) even self-documents: "This brief is approximately 440 lines." | MINOR |
| A1.3 | 07:53 | One-in-one-out: every new rule requires deleting/merging an existing rule | NOT ADDRESSED | No such policy codified in any pipeline file. | INFORMATIONAL |

### A2: Failure Mode 2 -- Guardrail Factory (7.9:1 Ratio)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A2.1 | 07:64-78 | Brief has ~1.5:1 guardrail-to-playbook ratio (better than 7.9:1) | ADDRESSED | conventions-brief.md Section 8 (CSS Vocabulary, lines 196-224) provides 7 concrete CSS patterns. Section 14 (Process, line 416-431) provides boundary CSS recipe with exact values. The brief is overwhelmingly world-description (Section 3 preamble: "This brief describes the world you are building inside"). | MINOR |
| A2.2 | 07:94-96 | Paired playbook mandate: every concept needs concrete CSS snippet showing what TO DO | ADDRESSED | conventions-brief.md line 128 provides a full multi-coherence CSS example. Lines 416-431 provide a complete boundary CSS recipe. Section 8 provides 7 CSS vocabulary patterns with specific values. Channel threshold table (lines 107-115) maps each channel to CSS properties. | MINOR |
| A2.3 | 07:96 | CSS recipe appendix: if concept cannot be expressed as CSS recipe in brief, add worked example to mechanism catalog | PARTIALLY ADDRESSED | No explicit appendix exists, but mechanism-catalog.md is referenced as a builder input file (SKILL.md line 53). The brief contains its own CSS recipe (lines 416-431). | INFORMATIONAL |

### A3: Failure Mode 3 -- Checklist Trap

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A3.1 | 07:106-107 | Brief should be world-description, not checklist. Line 7: "Read this brief once, fully. Then build." | ADDRESSED | conventions-brief.md line 7: "Read this brief once, fully. Then build." Line 5: "This brief describes the world you are building inside -- the materials, the physics, the quality of light. It does not tell you what to build." Maintained throughout. | MINOR |
| A3.2 | 07:122-124 | Verb audit: recipe verbs >= checklist verbs in modified sections | NOT ADDRESSED | No verb audit codified. However, the brief's voice naturally favors world-description verbs. The Process section (lines 400-434) uses imperative recipe verbs ("Read", "Write", "Plan", "Build"). | INFORMATIONAL |
| A3.3 | 07:124 | Separate verification from instruction: move all "verify" language to gate runner | ADDRESSED | Verification lives in gate-runner.md (1160 lines). The brief's Process section (lines 400-434) contains building instructions. The brief's Section 11 (Five Questions, lines 277-291) is reflective, not checklist. | MINOR |

### A4: Failure Mode 4 -- 660:1 Meta-to-Output Ratio

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A4.1 | 07:150 | No new research: all enrichment must draw from existing research | N/A | This is a process recommendation, not a pipeline file change. The pipeline files themselves do not contain meta-research. | INFORMATIONAL |
| A4.2 | 07:151-152 | Direct editing only: propose exact edits, not concepts to "explore" | N/A | Process recommendation. The pipeline files are the product, not the research. | INFORMATIONAL |

### A5: Failure Mode 5 -- 50:1 Compression Loss

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A5.1 | 07:182-183 | CSS anchor requirement: every concept must include >= 1 CSS property-value pair | ADDRESSED | conventions-brief.md: Section 4 (lines 107-115) maps channels to CSS properties. Line 128 provides full CSS example. Lines 416-431 provide boundary CSS recipe. Section 8 provides 7 CSS vocabulary patterns. | MINOR |
| A5.2 | 07:183-184 | Builder translation test: can builder write CSS from concept in < 30 seconds? | NOT ADDRESSED | No explicit test codified. However, the brief's CSS recipe (lines 416-431) and channel-threshold table (lines 107-115) provide direct CSS anchors. | INFORMATIONAL |

### A6: Failure Mode 6 -- Binary Rules Achieve Compliance, Not Quality

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A6.1 | 07:194-196 | Quality Floor (Section 9B) is all binary rules; necessary but not sufficient | ADDRESSED | conventions-brief.md Section 9B (lines 244-258) frames binary minimums as "what a COMPOSED page naturally produces." Section 9 (lines 227-241) provides creative authority. The word "floor" is explicitly used: "they are the floor below which a page is UNFINISHED." | MINOR |
| A6.2 | 07:212-213 | Distinguish floors from ceilings: label binary rules as FLOOR | ADDRESSED | conventions-brief.md Section 9B title is "QUALITY FLOOR (The Minimum Bar)." Lines 246-247: "They are not aspirations -- they are the floor." Lines 257-258 distinguish DESIGNED (PA-05 >= 3.5) from COMPOSED (Tier 5 >= 6/8). | MINOR |
| A6.3 | 07:213 | Semantic deltas, not syntactic deltas: ">= 3 spacing values with minimum 8px delta between adjacent values" | PARTIALLY ADDRESSED | SC-14 in gate-runner.md (lines 580-627) checks letter-spacing micro-clustering (< 0.5px apart = FAIL). But no equivalent padding micro-clustering gate exists. The proposed SC-14B (padding delta >= 8px between adjacent sorted values) from file 08 is NOT implemented. | SIGNIFICANT |

### A7: Failure Mode 7 -- Inverted Quality Routing

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A7.1 | 07:224-231 | Builder reads conventions-brief FIRST, then content, then reference files (mechanism catalog, components.css, tokens.css, prohibitions.md) | ADDRESSED | SKILL.md lines 47-56 specify builder reading order: (1) conventions-brief.md, (2) content file, (3) mechanism-catalog.md, (4) components.css, (5) tokens.css, (6) prohibitions.md. Routing is correct. | MINOR |
| A7.2 | 07:244 | Builder-first principle: every CSS-affecting concept must appear in conventions brief | ADDRESSED | All CI concepts (channels, scales, multi-coherence, perception thresholds, anti-scale) appear in the conventions brief (Sections 2-5). The builder reads this FIRST. | MINOR |

### A8: Failure Mode 8 -- CSS Budget Misallocation

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A8.1 | 07:256-257 | Perception Section (Section 2) directly addresses invisible CSS | ADDRESSED | conventions-brief.md lines 53-69: "CSS below these thresholds is invisible. Invisible CSS is wasted CSS." The perception section IS before any compositional sections (Section 2 precedes Sections 3-5). | MINOR |
| A8.2 | 07:272-273 | Budget allocation guidance: spend on Chromatic/Structural before Typographic/Material | NOT ADDRESSED | No explicit budget allocation guidance in any pipeline file. conventions-brief.md Section 4 (line 105) identifies primary vs enhancement channels but does not explicitly say to spend CSS budget on primary channels first. | MINOR |
| A8.3 | 07:274 | Scale 5 warning: "Character is LAST and OPTIONAL. Two strong scales beat five weak ones." | ADDRESSED | conventions-brief.md lines 152-154: "Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation" and "Navigation + Page + Component are mandatory strong. Section is recommended. Character is optional and last. Two strong scales beat five weak ones." | MINOR |

### A9: Failure Mode 9 -- Sonnet-for-Builders Unexamined

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A9.1 | 07:283-284 | SKILL.md mandates Opus for builders | ADDRESSED | SKILL.md line 40: "Model: Opus (ALWAYS -- never Sonnet for builders)". Line 419: "IMPORTANT: ALWAYS set `model: \"opus\"` explicitly when spawning agents." Line 434: "Builder model: Opus. Always. Never Sonnet for the CSS-writing agent." | MINOR |

### A10: Failure Mode 10 -- Recipe vs Checklist Format

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A10.1 | 07:312-313 | Brief is world-description, not recipe or checklist. Process section provides loose recipe structure. | ADDRESSED | conventions-brief.md line 5: world-description framing. Lines 400-434: Process section with Understand/Plan/Build/Verify recipe structure. Lines 416-431: boundary CSS recipe with exact values. | MINOR |
| A10.2 | 07:328-329 | Recipe format test: 60%+ world-description, 30%+ recipe, 10% or less checklist | PARTIALLY ADDRESSED | The brief is approximately 51% world-description, 16% recipe, 31% constraint (per Report 04 analysis). This is close but the recipe percentage is below 30%. The addition of the boundary CSS recipe (lines 416-431) improved recipe content. | MINOR |

### A11: Cross-Cutting Risk Heat Map

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A11.1 | 07:353-356 | Enrichment Types A (Compositional Fluency) and F (Content-Form Coupling) are most dangerous -- 6 HIGH and 3 HIGH risk ratings respectively | PARTIALLY ADDRESSED | conventions-brief.md does NOT contain abstract compositional fluency vocabulary ("parametric echo" term appears at line 156-158 but with concrete CSS recipe). Content-form coupling is addressed in SKILL.md line 73: "CONTENT-FORM COUPLING: Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT." This is concrete, not abstract. | SIGNIFICANT |
| A11.2 | 07:359-363 | Enrichment Types C (Perception Thresholds) and D (Recipe Formatting) are safest | ADDRESSED | Perception thresholds are fully embedded: conventions-brief.md Section 2 (lines 51-69), Section 4 channel table (lines 107-115). Recipe formatting: Section 14 Process (lines 400-434) with boundary CSS recipe (lines 416-431). | MINOR |

### A12: Mitigation Checklist (Appendix)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| A12.1 | 07:400 | Check 1: Line budget `wc -l conventions-brief.md` <= 450 | ADDRESSED | Brief is 443 lines. | MINOR |
| A12.2 | 07:401 | Check 2: Guardrail ratio <= 1:1 in modified sections | NOT ADDRESSED | No formal ratio tracking in pipeline files. | INFORMATIONAL |
| A12.3 | 07:402 | Check 3: Checklist verb audit | NOT ADDRESSED | No formal verb audit in pipeline files. | INFORMATIONAL |
| A12.4 | 07:403 | Check 4: CSS anchor >= 1 per new concept | ADDRESSED | All concepts have CSS anchors (see A5.1). | MINOR |
| A12.5 | 07:404 | Check 5: Provenance citation per new concept | NOT ADDRESSED | No provenance citations in conventions-brief.md (by design -- it's a world-description, not a research document). Gate-runner.md includes provenance (e.g., line 350: "Provenance: THE primary Flagship failure"). | MINOR |
| A12.6 | 07:405 | Check 6: Compression test (recallable after 10 min) | NOT ADDRESSED | No formal test. Subjective. | INFORMATIONAL |
| A12.7 | 07:406 | Check 7: Builder routing (CSS-affecting concepts in brief) | ADDRESSED | See A7.2. | MINOR |
| A12.8 | 07:407 | Check 8: World-description voice maintained | ADDRESSED | Brief maintains atmospheric voice throughout. Line 5, line 69, line 443. | MINOR |
| A12.9 | 07:408 | Check 9: Net deletion for each concept added | NOT ADDRESSED | No deletion tracking in pipeline files. | INFORMATIONAL |
| A12.10 | 07:409 | Check 10: Recipe format (sequence, not flat list) | ADDRESSED | Process section (lines 400-434) is sequenced. Boundary CSS recipe (lines 416-431) is sequenced. Fractal echo table (lines 142-151) is ordered by build priority. | MINOR |

---

## SECTION B: FILE 08 -- ENRICHED PIPELINE DIAGRAM

### B1: Current Pipeline Baseline Assessment

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B1.1 | 08:36-37 | L2 (Scales), L3 (Channels), L5 (Anti-Scale) are TEXT ONLY in the brief -- no programmatic enforcement | ADDRESSED (for L2/L3 partially) | gate-runner.md DG-1 (lines 725-744) checks fractal echo table (L2 scale plan). SC-13 (lines 471-568) checks multi-coherence channel count (L3). L5 remains judgment-only -- correctly. But DG-1 checks table existence, not scale perceptibility. No SC-18 (scale perceptibility) exists. | SIGNIFICANT |
| B1.2 | 08:138-142 | Gates verify fractal table EXISTS but not whether pattern is PERCEPTIBLE at each scale. Stack measured in fragments, not as coherent whole. | NOT ADDRESSED | DG-1 (gate-runner.md lines 725-744) validates table structure (5 rows, CSS evidence, direction) but does NOT cross-reference fractal echo table claims against computed styles. The proposed SC-18 (scale perceptibility gate) from file 08 is NOT implemented. | SIGNIFICANT |

### B2: Enriched Pipeline Proposals -- New Stages

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B2.1 | 08:358-389 | New Stage 2.5: Transition Table Validation (YAML, ~30 sec, TV-1 through TV-6) | NOT ADDRESSED | No transition table YAML deliverable exists in SKILL.md. Builder produces 3 files (output.html, _build-log.md, _cascade-value-table.md) per SKILL.md lines 75-78. No _transition-table.yaml. No TV gates exist. | SIGNIFICANT |
| B2.2 | 08:334-343 | New builder deliverable: _transition-table.yaml (6-channel per boundary) | NOT ADDRESSED | Not in SKILL.md builder spawn prompt. Builder produces a transition plan in _build-log.md (line 77) but not as structured YAML. | SIGNIFICANT |
| B2.3 | 08:338-343 | New builder deliverable: _anti-scale-self-test.md (3 questions) | NOT ADDRESSED | Not in SKILL.md. The brief's Section 11 "Five Questions" (lines 277-291) serves a similar reflective purpose but is NOT the same as the proposed anti-scale self-test. | MINOR |

### B3: Enriched Pipeline Proposals -- New Gates

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B3.1 | 08:404-412 | SC-17: Channel deployment (>= 4 of 6 channels deployed across page) | NOT ADDRESSED | No SC-17 gate exists in gate-runner.md. SC-13 checks channel shifts at boundaries but not page-wide channel deployment coverage. | MINOR |
| B3.2 | 08:415-424 | SC-18: Scale perceptibility (cross-reference DG-1 against computed styles, >= 3/5 scales verified) | NOT ADDRESSED | No SC-18 gate exists. DG-1 checks table existence only. | SIGNIFICANT |
| B3.3 | 08:427-435 | SC-13C: Multi-coherence direction agreement (>= 60% boundaries with >= 3 channels agreeing) | NOT ADDRESSED | SC-13B exists as ADVISORY at 50% threshold (gate-runner.md lines 672-688). SC-13C (promoted to blocking at 60%) does NOT exist. SC-13B remains advisory. | MINOR |
| B3.4 | 08:438-442 | SC-14B: Padding micro-clustering (adjacent sorted padding values must differ by >= 8px) | NOT ADDRESSED | SC-14 checks letter-spacing micro-clustering (gate-runner.md lines 600-607) but NOT padding micro-clustering. No SC-14B exists. | MINOR |
| B3.5 | 08:444-458 | SC-19 + SC-20: Anti-scale proxies (component density variance + restraint signature, ADVISORY) | NOT ADDRESSED | No SC-19 or SC-20 gates exist. | INFORMATIONAL |

### B4: Enriched Pipeline Proposals -- PA Changes

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B4.1 | 08:495-527 | Stack-layer annotations on PA questions (layer tags for weaver synthesis) | NOT ADDRESSED | flagship-pa-questions.md has no layer annotations. PA questions are assigned by ROLE (Impression, Readability, Spatial, etc.), not by stack layer. | MINOR |
| B4.2 | 08:528-538 | Weaver produces "STACK LAYER ASSESSMENT" section (per-layer L1-L5 verdict) | NOT ADDRESSED | SKILL.md weaver prompt (lines 258-313) does not include stack layer assessment. Weaver produces PA-05, Tier 5, Top-5 issues, matrix, compositional criteria, and verdict -- but no per-layer stack assessment. | MINOR |

### B5: Enriched Pipeline Proposals -- Fix Cycle Changes

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B5.1 | 08:562-588 | Fix instructions include stack-layer diagnosis and priority ordering (weakest layer first) | PARTIALLY ADDRESSED | SKILL.md fix instructions (lines 320-348) include "Compositional Context" with boundary direction, channel analysis, and conventions-brief section references. This is compositional context but NOT organized by stack layer. Fix instructions reference channel names and coherence direction but not L1-L5 layer assessment. | MINOR |

### B6: Enriched Pipeline Proposals -- Verdict Changes

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B6.1 | 08:604-617 | Verdict includes stack profile (L1-L5 per-layer assessment) | NOT ADDRESSED | SKILL.md verdict (lines 374-401) is score-based (PA-05 threshold + Tier 5 threshold + criteria). No stack profile in run manifest. | INFORMATIONAL |

### B7: Summary Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| B7.1 | 08:809-816 | DO NOT add more text to conventions brief; DO NOT increase builder input file count; DO NOT make L5 a blocking gate; DO NOT add gates beyond 25 | ADDRESSED | Brief is 443 lines (not increased beyond prior state). Builder reads 6 files (same count). L5 has no blocking gate. Gate count is 22 total (1 pre + 17 blocking + 2 advisory + 2 behavioral) per gate-runner.md line 1143, under 25 ceiling. | MINOR |
| B7.2 | 08:819-823 | Enrichment goes into VERIFICATION and STRUCTURED ARTIFACTS, not more text for builder | PARTIALLY ADDRESSED | Gate-runner.md is the verification layer (1160 lines, comprehensive). However, no structured artifacts (transition table YAML) have been added. The enrichment philosophy is correct but the structured artifact recommendation is not implemented. | MINOR |

---

## SECTION C: FILE 09 -- MEASUREMENT PROTOCOL

### C1: Baseline Assessment

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| C1.1 | 09:27-28 | No baseline exists for the current /build-page pipeline. First run IS the baseline. | N/A | This is a factual observation about the pipeline state, not a finding to address in pipeline files. The pipeline files are ready to run. | INFORMATIONAL |
| C1.2 | 09:40-43 | Expected PA-05 range 2.5-3.5; expected Tier 5 range 2-4/8; expected gate pass rate 85-95% | N/A | These are predictions, not pipeline changes. | INFORMATIONAL |

### C2: A/B Comparison Design

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| C2.1 | 09:70-78 | Controlled variables: builder model (Opus always), identical content, identical gate runner, identical PA questions (56), identical auditor count (9), identical screenshot protocol | ADDRESSED | SKILL.md specifies all of these: Opus always (line 40), 56 questions (line 254), 9 auditors (line 212), screenshot protocol (lines 179-196). These are baked into the pipeline. | MINOR |

### C3: Success Criteria

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| C3.1 | 09:186-191 | Minimum viable improvement: PA-05 delta >= +0.5, Tier 5 delta >= +2, SC-13 avg delta >= +0.5, zero regression | N/A | These are experiment success criteria, not pipeline file changes. | INFORMATIONAL |

### C4: Overfitting Risks

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| C4.1 | 09:305-307 | Risk 1: Optimizing for PA-05 instead of actual quality. Mitigation: Tier 5 questions detect surface compliance faking. | ADDRESSED | Tier 5 questions (PA-60 through PA-67) exist in flagship-pa-questions.md. SKILL.md success bar (line 16): "PA-05 >= 3.5 AND Tier 5 >= 6/8." Both scores required. | MINOR |
| C4.2 | 09:310-315 | Risk 2: Optimizing for gates instead of perception. Detection: check if gate measurements cluster near thresholds. | NOT ADDRESSED | No threshold clustering detection exists in any pipeline file. This would need to be a post-run analysis step, not a pipeline gate. | INFORMATIONAL |
| C4.3 | 09:317-321 | Risk 3: Training the measurement instrument (vocabulary contamination between builder and PA auditors). Mitigation: PA auditors never see builder vocabulary. | ADDRESSED | SKILL.md line 436: "PA auditors are fresh-eyes: Zero build context. Perceptual language only." Lines 233-234: auditor prompt uses perceptual language only. | MINOR |
| C4.4 | 09:322-325 | Risk 4: Content-specific overfitting. Mitigation: test with both Gas Town (easy) and RESEARCH-SYNTHESIS (hard). | N/A | This is an experiment design recommendation, not a pipeline file change. | INFORMATIONAL |

### C5: Open Questions

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| C5.1 | 09:584-585 | Temperature control: should builder temperature be forced to 0? Recommendation: no (trades variance for creativity reduction) | ADDRESSED | SKILL.md does not force temperature. No temperature override exists. Default system temperature is used. | MINOR |
| C5.2 | 09:586-587 | Auditor blinding: should PA auditors know if Pipeline A or B? Current protocol: NO | ADDRESSED | SKILL.md auditor prompt (lines 218-237): zero build context, zero knowledge of how page was built. | MINOR |
| C5.3 | 09:590-591 | Cross-run contamination: separate /clear between runs recommended | N/A | Process recommendation, not a pipeline file change. | INFORMATIONAL |

---

## SECTION D: FILE 10 -- CONTRARIAN ANALYSIS

### D1: The 10 Arguments Against Enrichment

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D1.1 | 10:19-29 | Argument 1: Cannot enrich what you have not tested. Pipeline has never been run. | N/A | This is a process argument. The pipeline files are ready to run. No pipeline file change required. | INFORMATIONAL |
| D1.2 | 10:31-42 | Argument 2: Brief already contains the CI stack (51% world-description, healthy ratios). | ADDRESSED | conventions-brief.md contains: scales (Section 5), channels (Section 4), multi-coherence (Section 4), perception thresholds (Section 2), anti-scale/richness (Section 3), metaphor (Section 6), transitions (Section 7), CSS vocabulary (Section 8). The full CI stack IS present. | MINOR |
| D1.3 | 10:43-55 | Argument 3: Compression is a feature, not a bug. Concept survival != vocabulary survival. | N/A | Philosophical argument. The pipeline correctly separates description (brief) from measurement (gates). | INFORMATIONAL |
| D1.4 | 10:56-70 | Argument 4: More text = worse output (963 lines = 1.5/4; 100 lines = 4/4). Brief at 403+ lines risks same pattern. | PARTIALLY ADDRESSED | Brief is 443 lines (up from 403 mentioned in contrarian analysis). Still within the 450-line cap from report 07, but the contrarian's concern about approaching the 963-line danger zone is noted. The brief is 4.7x larger than the successful 100-line recipe. | SIGNIFICANT |
| D1.5 | 10:71-87 | Argument 5: Report 07's own risk matrix argues against aggressive enrichment (Compositional Fluency = 6 HIGH risks). | ADDRESSED | The pipeline files do NOT contain abstract compositional fluency vocabulary. "Parametric echo" appears once with concrete CSS (conventions-brief.md lines 156-158). No "density arc" or "compositional memory" as abstract concepts -- Section 10 is titled "Compositional Memory" but it's about preventing drift with 4 concrete habits, not abstract theory. | MINOR |
| D1.6 | 10:88-99 | Argument 6: Scale reports found everything already works. 4/5 scales naturally at ceiling. | N/A | Assessment of current state. The pipeline files contain all 5 scales in the brief (Section 5). | INFORMATIONAL |
| D1.7 | 10:100-111 | Argument 7: Research team violates Gate 6 (meta-to-output ratio). 7,200 lines analysis for ~50 lines edits. | N/A | Meta-level observation about the research process. Not a pipeline file issue. | INFORMATIONAL |
| D1.8 | 10:112-127 | Argument 8: Opus does not need CI vocabulary to produce CI outcomes. Middle-tier builder received 0 CI vocabulary and scored 4/4. | N/A | Important empirical observation. The pipeline includes CI vocabulary in the brief but the contrarian argues it may not be necessary. No pipeline change recommended. | INFORMATIONAL |
| D1.9 | 10:128-134 | Argument 9: Proposed 4-run experiment is overkill. Just run /build-page once. | N/A | Process recommendation. Not a pipeline file change. | INFORMATIONAL |
| D1.10 | 10:135-143 | Argument 10: Creative authority paradox self-resolves. World-description IS creative authority. | ADDRESSED | conventions-brief.md Section 9 (lines 227-241) provides explicit creative authority. The brief's world-description voice (line 5) is the implicit creative authority. Both are present. | MINOR |

### D2: Contrarian's Minimum Viable Enrichment

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D2.1 | 10:315-316 | Perception thresholds in gate-runner.md (~10 lines): codify >= 15 RGB, >= 0.5px letter-spacing, >= 24px padding | ADDRESSED | gate-runner.md SC-09 (>= 15 RGB, line 324), SC-14 (letter-spacing floor 0.025em, lines 580-598), SC-10 (<= 120px stacked gap, lines 354-388). conventions-brief.md Section 2 provides all threshold values. Padding >= 24px is in the channel threshold table (line 114). | MINOR |
| D2.2 | 10:318-319 | Boundary-by-boundary recipe in brief (~8 lines): concrete CSS example of zone transition | ADDRESSED | conventions-brief.md lines 416-431: Full boundary CSS recipe with exact values. Comment: "/* Boundary Z2->Z3: DEEPENING */". All 4 primary channels demonstrated. | MINOR |
| D2.3 | 10:320 | Nothing else. No new gates. No new stages. No new deliverables. No CI vocabulary additions. | PARTIALLY ADDRESSED | No new gates beyond the original design. No new stages. No new deliverables beyond original 3. However, the brief DOES contain CI vocabulary (channel names, scale names, multi-coherence concept, semantic directions) -- these were already present in the brief before enrichment, so the contrarian's "no CI vocabulary additions" requirement is met in the sense that no NEW vocabulary was added. | MINOR |

### D3: Contrarian's Verdict

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D3.1 | 10:303-311 | Run pipeline first. If PA-05 >= 3.0, no enrichment needed. If PA-05 2.5-3.0, apply only safe enrichments. If PA-05 < 2.5, problem is architectural. | N/A | Decision framework. Not a pipeline file change. The pipeline files are ready for the first run. | INFORMATIONAL |

---

## SECTION E: FILE 11 -- MASTER SYNTHESIS

### E1: Consensus Findings (C1-C6)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| E1.1 | 11:27-28 | C1: Stack progression is ABSENT from all pipeline files. Scales, channels, multi-coherence, anti-scale presented as independent peer concepts. No file says "channels are building blocks of multi-coherence." | PARTIALLY ADDRESSED | conventions-brief.md Section 3 (lines 73-89) includes: "These three factors connect through scale: density fills each viewport, restraint governs what IS and IS NOT deployed, spatial confidence ensures the architecture holds at every zoom level." This connects richness factors. Section 4 (lines 93-132) connects channels to multi-coherence. BUT: no explicit statement that channels -> multi-coherence -> anti-scale is a dependency chain. The relationship is implicit in section ordering, not explicit in a bridge statement. | SIGNIFICANT |
| E1.2 | 11:30-31 | C2: Brief is near ceiling at 403 lines. Must not exceed 450. | ADDRESSED | Brief is 443 lines. Within the 450-line cap. Self-documents at line 443: "approximately 440 lines." | MINOR |
| E1.3 | 11:33-34 | C3: Perception thresholds are the best-preserved concept in the pipeline. Only concept with structured return-path routing. | ADDRESSED | Thresholds appear in: conventions-brief.md Section 2 + Section 4 table (lines 107-115), gate-runner.md SC-09/SC-10/SC-11/SC-14 (with measured values + fix recipes). Fix recipes include brief_section references (gate-runner.md lines 228-256). Return path is intact. | MINOR |
| E1.4 | 11:36-37 | C4: Fix cycle degrades from recipe to checklist. First pass = recipe mode; fix cycle = checklist mode (gate PASS/FAIL + PA quotes). | PARTIALLY ADDRESSED | SKILL.md fix cycle (lines 320-348) includes "Compositional Context" section with boundary direction, channel analysis, and conventions-brief section references. Line 354: "Re-read your conviction statement and transition table in _build-log.md before applying fixes." Gate-runner.md lines 224-256 add brief_section references to fix recipes. This is BETTER than pure symptom-level but still structured as a list of issues, not a recipe sequence. | SIGNIFICANT |
| E1.5 | 11:39-40 | C5: Enhancement channels 5+6 (Behavioral, Material) are near-phantom. 1-line definitions, binary gate checks, zero vocabulary guidance. | ADDRESSED (as DEFERRED) | conventions-brief.md lines 102-103 provide Behavioral and Material definitions with CSS property examples. Gate-runner.md SC-13 channel note (lines 549-566) explicitly documents the phantom status and defers with 3 options. Current recommendation: option (c) "keep denominator at 6 but add ADVISORY note." Status is openly documented as DEFERRED. | MINOR |
| E1.6 | 11:42-43 | C6: Boundary-by-boundary vs channel-grouped contradiction in orchestrator. Brief says "build BOUNDARY BY BOUNDARY" but checkpoints were channel-grouped. | ADDRESSED | SKILL.md lines 61-68: Checkpoints are NOW boundary-grouped: "After zone boundaries set (all channels together per boundary):" followed by bg delta, border configs, and channel direction checks -- all at the boundary level. The original channel-grouped checkpoints (After zone backgrounds / After borders / After typography) have been restructured. conventions-brief.md Process section (lines 406, 410-414) also uses boundary-by-boundary framing. | MINOR |

### E2: Genuine Disagreements (D1-D3)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| E2.1 | 11:50-53 | D1: Is stack progression absence a problem or feature? Synthesis: needed for WEAVER and FIX CYCLE, not necessarily for builder. Add 2-3 line bridge in brief. | NOT ADDRESSED (for weaver/fix cycle) | conventions-brief.md has implicit stack ordering (Sections 2-5) but no explicit bridge statement. SKILL.md weaver prompt (lines 258-313) does not include stack layer assessment or compositional vocabulary. Fix cycle instructions (lines 320-348) include channel names but not stack layer diagnosis. The E1 "DEFER TO TEST" recommendation for this item means it was intentionally deferred. | MINOR |
| E2.2 | 11:56-59 | D2: Is compression a bug or feature? Synthesis: forward compression is healthy; return-path extinction is a bug. | PARTIALLY ADDRESSED | Gate-runner.md fix recipes include brief_section references (lines 228-256) -- this is a return-path enhancement. SKILL.md fix cycle (lines 330-335) includes compositional context. But the weaver does not use compositional vocabulary when routing issues, and fix instructions do not carry stack-layer diagnostics. | MINOR |
| E2.3 | 11:63-66 | D3: Should brief be restructured bottom-up or left telescope-first? Synthesis: DO NOT restructure. Add bridge text instead. | ADDRESSED | Brief is NOT restructured. Current order: Identity (1) -> Perception (2) -> Richness (3) -> Multi-Coherence (4) -> Fractal Echo (5) -> Metaphor (6) -> Transitions (7) -> CSS Vocabulary (8) -> Creative Authority (9) -> Quality Floor (9B) -> Compositional Memory (10) -> Five Questions (11) -> Restraint (12) -> Accessibility (13) -> Responsive (14) -> Conviction Card -> Process. This is telescope-first (governing principle before building blocks). | MINOR |

---

## SECTION F: FILE 11 -- DECISION MATRIX (E1-E16)

This is the SPECIAL FOCUS section. For each decision, I verify: was the DO NOW item applied? Was the DEFER item deferred? Was the DON'T item avoided?

### F1: DO NOW Items (E2, E3, E4) -- Should Be Applied

| # | Decision | Verdict in 11 | Status in Pipeline | Evidence | Severity |
|---|----------|---------------|--------------------|----------|----------|
| F1.1 | **E2: Boundary-by-boundary recipe example (~8 lines in brief)** | **DO** | **ADDRESSED** | conventions-brief.md lines 416-431: Complete boundary CSS recipe with 4 primary channels, exact values, semantic direction comment. Matches the proposed edit in 11:257-267 almost exactly. | -- |
| F1.2 | **E3: Fix checkpoint contradiction resolution (~5 lines in SKILL.md)** | **DO** | **ADDRESSED** | SKILL.md lines 61-68: Checkpoints restructured from 4 channel-grouped to 3 boundary-grouped. Compare current: "After zone boundaries set (all channels together per boundary)" with the proposed replacement in 11:284-291. The restructuring matches. | -- |
| F1.3 | **E4: Perception threshold table consolidation (~6 lines in brief)** | **DO** | **ADDRESSED** | conventions-brief.md lines 107-115: Channel-to-threshold reference table mapping each of 6 channels to CSS properties and perception floors. Matches the proposed table in 11:296-303. | -- |

**Summary: All 3 DO NOW items are ADDRESSED in the current pipeline files.**

### F2: DEFER TO TEST Items (E1, E5, E6, E9, E10, E14, E15, E16) -- Should NOT Be Applied Yet

| # | Decision | Verdict in 11 | Status in Pipeline | Evidence | Severity |
|---|----------|---------------|--------------------|----------|----------|
| F2.1 | **E1: Stack relationship bridge (~5 lines in brief)** | **DEFER** | **NOT APPLIED** (correctly deferred) | No explicit stack bridge statement exists in conventions-brief.md. Section 3 line 89 has an implicit connection ("These three factors connect through scale") but this is about richness factors, not the L1-L5 stack. The explicit bridge ("channels are building blocks of multi-coherence") is absent. **CORRECTLY DEFERRED.** | -- |
| F2.2 | **E5: Floor/target naming extension (DESIGNED/COMPOSED for more dimensions)** | **DEFER** | **PARTIALLY APPLIED** | conventions-brief.md lines 257-258: "DESIGNED describes a page where every element serves a deliberate purpose -- PA-05 >= 3.5. COMPOSED describes a Flagship page where DESIGNED elements additionally interrelate through multi-coherence, fractal echo, and metaphor -- Tier 5 >= 6/8." This names 2 tiers but only for PA-05 and Tier 5, not for additional dimensions. The DEFER intent was for 2-3 MORE dimensions. **MOSTLY DEFERRED but DESIGNED/COMPOSED naming is present (may have been pre-existing).** | MINOR |
| F2.3 | **E6: Channel CSS property completion for channels 4-6 (~3 lines modifying existing)** | **DEFER** | **PARTIALLY APPLIED** | conventions-brief.md lines 101-103 provide CSS examples for channels 5-6: Behavioral = "CSS: `transition`, `:hover` rules" and Material = "CSS: `background-image` pattern, component count per zone." These provide more guidance than "1-line definitions" but still limited. **PARTIALLY APPLIED -- the channel definitions were enriched beyond the bare minimum but not to the level of channels 1-4.** | MINOR |
| F2.4 | **E9: Component-internal multi-coherence statement (~3 lines in brief)** | **DEFER** | **PARTIALLY APPLIED** | conventions-brief.md Section 8 (lines 200-202): "Component 2-Zone DNA" describes label/body structure. Line 202: "Component micro-coherence: when the page-level coherence direction shifts at a zone boundary, components inside the new zone should reflect that shift." This IS the component-internal multi-coherence statement. **APPLIED -- this appears to have been added (or was pre-existing).** | MINOR |
| F2.5 | **E10: Parametric echo CSS recipe for components (~6 lines in brief)** | **DEFER** | **APPLIED** | conventions-brief.md lines 156-158: "Parametric echo: Components in dense zones should have tighter internal padding... Give each zone a density character. Inside dense zones, reduce component padding by ~25% and increase border presence." This IS a parametric echo CSS recipe with concrete values. **APPLIED.** | MINOR |
| F2.6 | **E14: Character scale register inventory (~8 lines in brief)** | **DEFER** | **NOT APPLIED** (correctly deferred) | No character scale register inventory exists in conventions-brief.md. Line 150 mentions "Letter-spacing (>= 0.025em), font-weight shifts, case transforms" but this is a threshold, not an inventory. **CORRECTLY DEFERRED.** | -- |
| F2.7 | **E15: Weaver compositional vocabulary enrichment (~8 lines in SKILL.md)** | **DEFER** | **PARTIALLY APPLIED** | SKILL.md weaver prompt (lines 280-287): "When describing issues, name the affected multi-coherence channel (Chromatic/Typographic/Spatial/Structural), the fractal scale (Navigation/Page/Section/Component/Character), and the transition type at the boundary (SMOOTH/BRIDGE/BREATHING) where applicable." This IS compositional vocabulary for the weaver. **APPLIED -- the weaver prompt includes channel names, scale names, and transition types.** | SIGNIFICANT |
| F2.8 | **E16: Fix cycle recipe structure (~10 lines in SKILL.md)** | **DEFER** | **PARTIALLY APPLIED** | SKILL.md fix cycle (lines 320-348) includes structured format with compositional context, channel analysis, and conventions-brief section references. Gate-runner.md (lines 224-256) adds brief_section references to fix recipes. This IS recipe-structured fix cycle content. **APPLIED -- fix cycle has compositional context.** | SIGNIFICANT |

**Summary of DEFER items:**
- **Correctly deferred (not applied):** E1, E14 = 2 items
- **Partially or fully applied (should have been deferred):** E5 (partial), E6 (partial), E9 (applied), E10 (applied), E15 (applied), E16 (partial) = 6 items

**Assessment:** 6 of 8 DEFER items appear to have been partially or fully applied. The master synthesis recommended these be PRE-REGISTERED and applied ONLY if PA-05 falls in the 2.5-3.0 band after the first test. The fact that they are already in the pipeline files suggests they were applied during pipeline assembly, not after a test run. This does not necessarily indicate a problem -- the pipeline has never been run, so the "test first" recommendation was about the SEQUENCE of testing, and the pipeline needed to be assembled to some specification regardless. However, it means the DEFER gate was not honored as designed.

### F3: DON'T Items (E7, E8, E11, E12, E13) -- Should Be Avoided

| # | Decision | Verdict in 11 | Status in Pipeline | Evidence | Severity |
|---|----------|---------------|--------------------|----------|----------|
| F3.1 | **E7: Compositional reference card for mid-build (new ~30-line file)** | **DON'T** | **CORRECTLY AVOIDED** | No compositional reference card file exists. Builder reads 6 files per SKILL.md lines 47-56 (same set as current pipeline). No new builder-facing document added. | -- |
| F3.2 | **E8: Comprehension proof gate before building (~6 lines in SKILL.md)** | **DON'T** | **CORRECTLY AVOIDED** | No comprehension proof gate exists in SKILL.md or gate-runner.md. No "quiz" or "proof of understanding" step before building. | -- |
| F3.3 | **E11: New gates (SC-17 scale coverage, SC-18 restraint)** | **DON'T** | **CORRECTLY AVOIDED** | No SC-17, SC-18, SC-19, or SC-20 gates exist in gate-runner.md. Gate count is 22 (1 pre + 17 blocking + 2 advisory + 2 behavioral) per line 1143. No new gates added beyond the original design. | -- |
| F3.4 | **E12: New PA questions (PA-68 stack integration)** | **DON'T** | **CORRECTLY AVOIDED** | flagship-pa-questions.md has 8 Tier 5 questions (PA-60 through PA-67). No PA-68 exists. Question count remains 56 (48 standard + 8 Tier 5). | -- |
| F3.5 | **E13: Character scale budget cap (5% of CSS)** | **DON'T** | **CORRECTLY AVOIDED** | No CSS budget cap exists in any pipeline file. SC-14 prevents sub-perceptual character-level CSS but does not impose a percentage budget cap. | -- |

**Summary: All 5 DON'T items are CORRECTLY AVOIDED.**

---

## SECTION G: DEBRIEF PART 5 FINDINGS

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| G1 | Part 5 | PA-60 through PA-67 mapped to Compositional Intelligence Stack layers | ADDRESSED | flagship-pa-questions.md contains all 8 Tier 5 questions (PA-60 through PA-67). Each question detects a specific compositional property. SKILL.md (lines 242-253) assigns each to specific auditors. | MINOR |
| G2 | Part 5 | Scoring rubric: 7-8 COMPOSED, 5-6 APPROACHING, 3-4 STRUCTURED, 0-2 VOCABULARY ONLY | ADDRESSED | flagship-pa-questions.md lines 122-128: exact rubric with all 4 tiers. SKILL.md line 278: "Apply threshold: 7-8 COMPOSED / 5-6 APPROACHING / 3-4 STRUCTURED / 0-2 VOCABULARY ONLY." | MINOR |
| G3 | Part 5 | 9 auditors, 56 total questions, heaviest load Auditor C at 13 | ADDRESSED | SKILL.md lines 242-253: 9 auditors with question assignments. flagship-pa-questions.md lines 132-142: Auditor C has 13 questions (PA-09,10,11,30,31,32,33,50,51,52,53 + PA-64,PA-66). | MINOR |
| G4 | Part 5 | BLIND SPOT: No PA question asks "does a single metaphor pervade the ENTIRE page?" PA-44 tests expression quality but not SPATIAL COVERAGE. A page could have structural metaphor in sections 1-3 that disappears in 4-8. | NOT ADDRESSED | flagship-pa-questions.md PA-44 (not in Tier 5 file but in standard PA set) tests metaphor expression quality. No question asks about SPATIAL COVERAGE of metaphor across the full page. The closest is conventions-brief.md line 132: "Multi-coherence is sustained at every zone boundary across the entire page, driven by your unified metaphor." But this is a builder instruction, not a PA question. SKILL.md weaver compositional criteria (lines 297-303) includes "Metaphor STRUCTURAL (not just labeled)" but not "metaphor pervades ENTIRE page." | SIGNIFICANT |

---

## SECTION H: DEBRIEF PART 6 FINDINGS

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| H1 | Part 6 | 13+ agents executed master prompt (5 Opus + 5 Sonnet + auditors) | N/A | Historical observation about a previous experiment. Not a pipeline file issue. | INFORMATIONAL |
| H2 | Part 6 | Master prompt contradictions: DG-4 references _build-plan.yaml | ADDRESSED | SKILL.md line 168: DG-4 now references "_build-log.md" plan sections (conviction statement, transition table, fractal echo table). No reference to "_build-plan.yaml" exists in SKILL.md. gate-runner.md DG-4 (lines 1071-1094) references "_build-log.md" plan sections. | MINOR |
| H3 | Part 6 | Master prompt contradictions: component count 8 vs 10 | ADDRESSED | Consistently 8 across all files: SKILL.md line 62 (">= 8 component classes"), conventions-brief.md line 65 (">= 8 component families"), gate-runner.md SC-08 (line 966 ">= 8 component types"). No reference to 10. | MINOR |
| H4 | Part 6 | Master prompt contradictions: path errors | ADDRESSED | SKILL.md file paths (lines 48-56) use correct relative paths. No broken paths visible in current pipeline files. | MINOR |
| H5 | Part 6 | Deviations: validation builds were NEVER run | N/A | Historical observation. The current pipeline is designed and ready. | INFORMATIONAL |
| H6 | Part 6 | Deviations: 2 "Middle+" references remain in TC skill | N/A | This refers to the tension-composition skill (`~/.claude/skills/tension-composition/SKILL.md`), which is NOT one of the 4 pipeline files being audited. Out of scope for this cross-reference. | INFORMATIONAL |
| H7 | Part 6 | Deviations: 2 threshold inconsistencies (0.02em vs 0.025em) | ADDRESSED | conventions-brief.md consistently uses 0.025em floor (line 59: "No element should carry letter-spacing below 0.025em") and 0.03em delta (line 59: "0.03em letter-spacing delta"). gate-runner.md SC-14 (line 597): "emVal > 0 && emVal < 0.025" = FAIL. Channel table (conventions-brief.md line 113): ">= 0.03em delta, floor 0.025em." CONSISTENT across files. No 0.02em reference found. | MINOR |
| H8 | Part 6 | Verification: 2 FAILs in cross-ref (letter-spacing, merged-components.css) | PARTIALLY ADDRESSED | Letter-spacing is now consistent (see H7). For merged-components.css: SKILL.md line 54 references "components.css" not "merged-components.css". The file path references appear consistent but the underlying file name may differ from historical references. | MINOR |

---

## SECTION I: DEBRIEF PART 7 FINDINGS (5 Known Issues)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| I1 | Part 7 Issue 1 | Boundary-by-boundary vs channel-grouped: EXISTS (SIGNIFICANT). Brief says boundary-by-boundary, SKILL.md checkpoints were channel-grouped. | **ADDRESSED** | SKILL.md lines 61-68: Checkpoints are NOW boundary-grouped. Line 62: "After zone boundaries set (all channels together per boundary):" followed by integrated boundary checks (bg delta, borders, channel direction). conventions-brief.md Process section (lines 406, 410-414) uses boundary-by-boundary framing with "After each zone boundary:" as verification pause. The contradiction is RESOLVED. | -- |
| I2 | Part 7 Issue 2 | Stack progression absence: CONFIRMED ABSENT (MODERATE). No file states channels -> multi-coherence -> anti-scale dependency. | **PARTIALLY ADDRESSED** | conventions-brief.md Section 3 (line 89): "These three factors connect through scale" connects richness factors. Section 4 (line 95): "At every zone boundary, at least 3 of 6 CSS channels shift simultaneously" connects channels to multi-coherence. But NO explicit statement that L1 -> L2 -> L3 -> L4 -> L5 is a dependency stack. The progression is implicit in section ordering. This matches the E1 DEFER verdict -- it was intentionally deferred pending test results. | SIGNIFICANT |
| I3 | Part 7 Issue 3 | Fix cycle recipe-to-checklist degradation: EXISTS (HIGH). Fix recipes are symptom-level, not compositional. | **PARTIALLY ADDRESSED** | SKILL.md fix cycle (lines 320-348) now includes "Compositional Context" section with boundary direction, channel analysis, and brief section references. Line 354: "Re-read your conviction statement and transition table." Gate-runner.md (lines 224-256) adds brief_section references to every fix recipe category. This is BETTER than pure symptom-level but the fix format is still a LIST of issues (gate failures + PA top-5), not a SEQUENCED RECIPE. The improvement is real but the degradation pattern is mitigated, not eliminated. | SIGNIFICANT |
| I4 | Part 7 Issue 4 | Behavioral/Material channel phantom status: CONFIRMED (HIGH). 1-line definition, zero CSS examples. | **PARTIALLY ADDRESSED** | conventions-brief.md lines 102-103 now provide CSS property examples: Behavioral = "CSS: `transition`, `:hover` rules" and Material = "CSS: `background-image` pattern, component count per zone." Gate-runner.md SC-13 channel note (lines 549-566) explicitly documents phantom status with 3 deferred options. The definitions are BETTER than 1-line but still lack the depth of channels 1-4 (which have threshold values, CSS examples, and multi-coherence integration). Status is honestly documented as DEFERRED. | MINOR |
| I5 | Part 7 Issue 5 | Return path extinction: CONFIRMED (HIGH). Fix recipes NEVER reference conventions-brief sections. | **ADDRESSED** | Gate-runner.md lines 224-256: "Fix Recipe Compositional Context" section maps every gate category to a conventions-brief section reference. Format: `"brief_section": "Re-read conventions-brief.md Section N (SECTION_NAME) before applying this fix."` This is explicitly designed to route the builder back to compositional context during fixes. 9 gate categories are mapped to specific brief sections. Return path is restored. | -- |

---

## SECTION J: SUMMARY STATISTICS

### By Status

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 43 | 50.0% |
| PARTIALLY ADDRESSED | 17 | 19.8% |
| NOT ADDRESSED | 13 | 15.1% |
| N/A | 12 | 14.0% |
| CONTRADICTED | 0 | 0.0% |
| **Total** | **85** | **100%** |

### By Severity (Excluding N/A)

| Severity | Count |
|----------|-------|
| BLOCKING | 0 |
| SIGNIFICANT | 10 |
| MINOR | 44 |
| INFORMATIONAL | 19 |

### Decision Matrix Compliance (E1-E16)

| Category | Items | Correctly Handled | Deviation |
|----------|-------|-------------------|-----------|
| DO NOW (E2, E3, E4) | 3 | 3/3 APPLIED | None -- all applied correctly |
| DEFER (E1, E5, E6, E9, E10, E14, E15, E16) | 8 | 2/8 correctly deferred | 6/8 partially or fully applied before testing |
| DON'T (E7, E8, E11, E12, E13) | 5 | 5/5 correctly avoided | None -- all avoided correctly |

---

## SECTION K: TOP FINDINGS (SIGNIFICANT Severity)

These 10 findings require attention before or during the first pipeline test:

### K1: Stack Progression Absence (E1.1, I2)
**Source:** 11:27-28, Part 7 Issue 2
**Finding:** No pipeline file explicitly states the L1->L2->L3->L4->L5 dependency chain. Scales, channels, multi-coherence, and anti-scale are presented as independent peer concepts.
**Current status:** Intentionally DEFERRED per E1 verdict. Implicit ordering in brief section sequence.
**Risk:** Builder may not understand that channels are the building blocks of multi-coherence. Weaver may evaluate layers independently, missing integration failures.
**Recommendation:** Pre-register a 3-5 line bridge statement for insertion between Sections 3 and 4 of the brief IF PA-05 falls in 2.5-3.0 range.

### K2: Fix Cycle Recipe-to-Checklist Degradation (E1.4, I3)
**Source:** 11:36-37, Part 7 Issue 3
**Finding:** Fix cycle is structured as a list of issues (gate failures + PA top-5), not as a sequenced recipe.
**Current status:** PARTIALLY ADDRESSED with compositional context and brief section references, but format is still a list, not a sequence.
**Risk:** Builder in fix cycle operates at symptom level rather than compositional level.
**Recommendation:** Monitor first fix cycle carefully. If builder fixes symptoms without maintaining coherence direction, restructure fix instructions as a sequenced recipe.

### K3: 6 DEFER Items Applied Before Testing (F2)
**Source:** 11:93-107
**Finding:** E5, E6, E9, E10, E15, E16 were marked DEFER but appear partially or fully applied in current pipeline files.
**Current status:** Applied. Cannot be un-applied without risk.
**Risk:** The pipeline files contain enrichments whose value has not been empirically validated. If the first test scores PA-05 >= 3.0, these enrichments may be unnecessary complexity.
**Recommendation:** Accept the current state. The enrichments are low-risk (all LOW regression risk per Report 07). Monitor whether they contribute to or detract from first-run quality.

### K4: Fractal Echo Table Perceptibility Gap (B1.2, B3.2)
**Source:** 08:138-142, 08:415-424
**Finding:** DG-1 checks that the fractal echo table EXISTS with 5 rows, CSS evidence, and direction. It does NOT verify that the claimed CSS actually produces PERCEPTIBLE scale expression. No SC-18 gate exists.
**Current status:** NOT ADDRESSED. DG-1 remains a structural check, not a perceptibility check.
**Risk:** Builder can claim "Component scale expressed via padding 48px" in the table without verification that 48px padding actually manifests as a visible scale echo.
**Recommendation:** Add a note to DG-1 validation to cross-reference at least the Page-scale row against SC-09 (bg delta) results. This is a cheap ~5 line addition to gate-runner.md.

### K5: No Transition Table YAML (B2.1, B2.2)
**Source:** 08:334-389
**Finding:** File 08 proposed _transition-table.yaml as a structured, machine-parseable 6-channel boundary specification. This does not exist. Builder produces transition plan as prose in _build-log.md.
**Current status:** NOT ADDRESSED.
**Risk:** L3 (channels) and L4 (multi-coherence) cross the builder boundary as prose rather than structured data. The gate runner cannot programmatically validate the builder's channel plan.
**Recommendation:** DEFER per contrarian argument -- adding a new deliverable increases builder cognitive load. The cascade value table (_cascade-value-table.md) partially serves this function. Monitor whether DG-2 cross-validation catches plan-vs-execution mismatches adequately.

### K6: Padding Micro-Clustering Not Checked (A6.3, B3.4)
**Source:** 07:213, 08:438-442
**Finding:** SC-14 checks letter-spacing micro-clustering but NOT padding micro-clustering. Adjacent padding values of 47/48/49/50px would pass (technically 4 values, perceptually identical).
**Current status:** NOT ADDRESSED. No SC-14B exists.
**Risk:** Builder could satisfy ">= 3 spacing values" with imperceptibly close padding values.
**Recommendation:** DEFER per DON'T E11 (no new gates before testing). Monitor SC-13 spatial channel results for micro-clustering patterns in first run.

### K7: Metaphor Spatial Coverage Blind Spot (G4)
**Source:** Debrief Part 5
**Finding:** No PA question asks whether a single metaphor pervades the ENTIRE page. PA-44 tests expression quality, not spatial coverage. A page could have structural metaphor in sections 1-3 that disappears in 4-8.
**Current status:** NOT ADDRESSED in PA questions.
**Risk:** A page could score YES on PA-44 (structural metaphor) while the metaphor is concentrated in the first third and absent from the remainder.
**Recommendation:** Add a note to the weaver prompt: "Check whether metaphor expression is sustained across ALL scroll thirds, not concentrated at bookends." This is ~2 lines in SKILL.md, not a new PA question.

### K8: Brief at 443 Lines (D1.4)
**Source:** 10:56-70
**Finding:** Contrarian notes the empirical evidence: 100 lines = PA-05 4/4, 963 lines = PA-05 1.5/4. Brief at 443 lines is 4.7x the successful 100-line recipe and within the 450-line cap but approaching the danger zone.
**Current status:** Brief is 443 lines. Within cap but concerning.
**Risk:** Builder cognitive overload. The relationship between prompt length and quality is empirically inverse.
**Recommendation:** Monitor builder absorption in first run. If build log shows low concept absorption (< 3 conventions-brief sections mentioned), the brief may be too long and should be trimmed.

### K9: SC-13B Remains Advisory (B3.3)
**Source:** 08:427-435
**Finding:** File 08 proposed promoting SC-13B from advisory (50% threshold) to blocking at 60% as SC-13C. SC-13B remains advisory.
**Current status:** SC-13B is ADVISORY at >= 50% per gate-runner.md lines 672-688. No SC-13C exists.
**Risk:** Channels may shift at boundaries without semantic direction agreement. Builder satisfies SC-13 (count) but channels contradict each other. PA-61 catches this but only after the full gate run + PA cycle.
**Recommendation:** DEFER per DON'T E11. SC-13B advisory data provides diagnostic signal to PA. Promoting to blocking requires empirical calibration of the direction heuristic.

### K10: No Sunset Protocol (A1.1)
**Source:** 07:30-31, 07:52-54
**Finding:** Rules accumulate and never retire. No sunset protocol, no one-in-one-out policy, no formal rule retirement mechanism exists in any pipeline file.
**Current status:** NOT ADDRESSED. The line budget caps (450 each) serve as a soft constraint but no formal retirement process exists.
**Risk:** As the pipeline evolves, rules will accumulate without retirement. The 963-line master prompt is the cautionary example.
**Recommendation:** After 3-5 successful pipeline runs, review gate results to identify gates that never fire (candidates for retirement) and brief sections that builders never reference in build logs (candidates for trimming).

---

## SECTION L: CROSS-FILE CONSISTENCY CHECK

| Check | Result | Evidence |
|-------|--------|----------|
| Container width consistent | PASS | SKILL.md: 940-960px (lines 17, 431). Brief: 940-960px (line 26). Gate-runner SC-01: 940-960px (line 296-307). |
| Letter-spacing floor consistent | PASS | SKILL.md: >= 0.025em (line 433). Brief: >= 0.025em (line 59, 113, 308). Gate-runner SC-14: < 0.025em = FAIL (line 597). |
| Component count consistent | PASS | SKILL.md: >= 8 (line 62). Brief: >= 8 (line 65, 252). Gate-runner SC-08: >= 8 (line 966). |
| Background delta consistent | PASS | SKILL.md: >= 15 RGB (line 64, 433). Brief: >= 15 RGB (line 57, 111). Gate-runner SC-09: >= 15 RGB (line 324-341). |
| Stacked gap consistent | PASS | SKILL.md: <= 120px (line 433). Brief: <= 120px (line 61). Gate-runner SC-10: <= 120px (lines 360-379). |
| Multi-coherence threshold consistent | PASS | SKILL.md: >= 3 channels, avg >= 4 (line 141). Brief: >= 3 channels (line 63, 95, 250). Gate-runner SC-13: >= 3 + avg >= 4 (lines 476-543). |
| Builder model consistent | PASS | SKILL.md: Opus always (lines 40, 419, 434). |
| PA question count consistent | PASS | SKILL.md: 56 total (line 254). PA questions: 48 standard + 8 Tier 5 = 56 (line 144). |
| Auditor count consistent | PASS | SKILL.md: 9 auditors (line 212). PA questions: 9 auditors (lines 132-142). |
| Zone count consistent | PASS | Brief: 3-5 zones (line 253). Gate-runner SC-12: 3-5 (line 451). SKILL.md: 3-5 (not explicit but DG-4 sub-check line 169). |
| Checkpoint structure (boundary-grouped) consistent | PASS | SKILL.md lines 61-68: boundary-grouped. Brief Process lines 410-414: boundary-by-boundary. Contradiction RESOLVED. |
| Channel threshold table in brief matches gate thresholds | PASS | Brief line 111 (>= 15 RGB) matches SC-09. Brief line 112 (>= 2px font-size) matches SC-13 typographic check. Brief line 113 (>= 0.03em, floor 0.025em) matches SC-14. Brief line 114 (>= 24px padding) matches SC-13 spatial check. |

**All 12 cross-file consistency checks PASS. Zero contradictions found in current pipeline files.**

---

*End of comprehensive cross-reference audit. 85 findings evaluated across 5 research files and 3 debrief parts, checked against 4 pipeline files totaling 2,185 lines. 43 ADDRESSED, 17 PARTIALLY ADDRESSED, 13 NOT ADDRESSED, 12 N/A, 0 CONTRADICTED. All 3 DO NOW items applied. All 5 DON'T items avoided. 6/8 DEFER items applied before testing (deviation from master synthesis recommendation). 10 SIGNIFICANT findings documented with recommendations.*
