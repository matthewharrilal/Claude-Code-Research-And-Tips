# Comprehensive Cross-Reference Audit: Research Files 12-17 + Debrief Parts 3-8

**Auditor:** Cross-reference agent (Opus)
**Date:** 2026-02-20
**Scope:** Every finding/recommendation/observation in research files 12-17 (scale analyses) + concept-flow-trace (file 17) + debrief parts 3-8, checked against the CURRENT state of 4 pipeline files

**Pipeline files audited:**
1. `~/.claude/skills/build-page/SKILL.md` (437 lines)
2. `design-system/pipeline/conventions-brief.md` (443 lines)
3. `design-system/pipeline/gate-runner.md` (1,160 lines)
4. `design-system/pipeline/flagship-pa-questions.md` (145 lines)

---

## METHODOLOGY

Each finding from the research files was checked line-by-line against the current pipeline files. Status codes:
- **ADDRESSED:** The finding is directly reflected in the current pipeline state
- **PARTIALLY ADDRESSED:** Some aspect is covered but the finding is not fully resolved
- **NOT ADDRESSED:** The finding has no reflection in the current pipeline
- **CONTRADICTED:** The pipeline contradicts the finding
- **N/A:** The finding is informational/analytical and does not require pipeline action

Severity codes:
- **BLOCKING:** Missing this would cause a build failure or false gate pass
- **SIGNIFICANT:** Missing this meaningfully reduces quality or builder guidance
- **MINOR:** Missing this is a nice-to-have but does not affect core quality
- **INFORMATIONAL:** Analytical observation, no action required

---

## FILE 12: SCALE-NAVIGATION (~1440px)

### 12-1. Channel Strength Summary

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-1a | 12:121-132 | 3 strong channels (Chromatic, Typographic, Spatial), 1 moderate (Structural), 2 weak (Behavioral, Material) at Navigation scale | ADDRESSED | conventions-brief.md lines 97-104: All 6 channels listed with primary/enhancement distinction. Lines 105: "The 4 primary channels are Chromatic, Typographic, Spatial, and Structural... Behavioral and Material are enhancement channels." | INFORMATIONAL |
| 12-1b | 12:132 | Primary 4 vs enhancement 2 distinction aligns with brief | ADDRESSED | conventions-brief.md line 105 explicitly makes this distinction | INFORMATIONAL |

### 12-2. Multi-Coherence at Navigation

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-2a | 12:140-149 | Header-to-first-content boundary is the STRONGEST boundary (4+ channels), multi-coherence inherently satisfied | ADDRESSED | conventions-brief.md lines 206-207: Dark Slab Inversion documented. Line 132: "coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels" | INFORMATIONAL |
| 12-2b | 12:153-159 | TOC-to-content bg delta may fail >= 15 RGB threshold (#F0EBE3 vs #FEF9F5 = 14 on R and G channels) | NOT ADDRESSED | No specific guidance in brief or gate-runner about TOC/sub-nav backgrounds needing 15 RGB delta. SC-09 checks zone boundaries but TOC may not be classified as a separate zone. | MINOR |
| 12-2c | 12:160-167 | Navigation INAUGURATES multi-coherence -- sets the ceiling for what "a zone change" looks like | N/A | Analytical observation about reader psychology. The brief captures this implicitly through the dark slab inversion description. | INFORMATIONAL |

### 12-3. Anti-Scale Model at Navigation

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-3a | 12:176-181 | Header should contain 3 semantic layers: title, subtitle, meta (3 typographic registers) | PARTIALLY ADDRESSED | conventions-brief.md lines 200-210: Section Meta Self-Documentation mentions meta labels. Component 2-Zone DNA mentions label register. But no explicit "header must contain 3 typographic registers" rule. | MINOR |
| 12-3b | 12:185-194 | Restraint at Navigation: document deliberate absences (no accent colors, no components, no grids in header) | NOT ADDRESSED | No explicit navigation-scale restraint documentation in brief. The restraint concept (Section 3, lines 83-84) applies at page scale, not specifically at navigation scale. | MINOR |
| 12-3c | 12:198-205 | Spatial confidence: header visible as distinct zone at 20% zoom with internal structure | ADDRESSED | conventions-brief.md line 146: "Header padding >= 48px, visible at 20% zoom" in fractal echo table. | MINOR |

### 12-4. Fractal Self-Similarity at Navigation

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-4a | 12:217-266 | No CSS examples showing how different metaphors (DEEPENING, FOCUSING, RESOLVING) express at header level | NOT ADDRESSED | conventions-brief.md Section 5 (lines 138-162): Fractal echo described but no navigation-specific CSS per metaphor type. The PROCESS section (lines 416-430) has a boundary CSS recipe example but only for zone-to-zone DEEPENING, not header-specific metaphor expressions. | SIGNIFICANT |
| 12-4b | 12:264-268 | Parametric echo at Navigation: header internal spacing should match density level the header represents in page gradient | PARTIALLY ADDRESSED | conventions-brief.md lines 156-158: Parametric echo described generically ("Components in dense zones should have tighter internal padding than components in sparse zones"). Not applied specifically to header. | MINOR |

### 12-5. Perception Thresholds at Navigation

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-5a | 12:274-278 | Container width applies to header INNER container, not header full-bleed background | PARTIALLY ADDRESSED | conventions-brief.md line 26: "The page container is 940-960px wide, centered." Gate-runner SC-01 (line 301): checks container max-width. But no explicit distinction between header full-bleed vs inner container in either file. | SIGNIFICANT |
| 12-5b | 12:292-296 | Stacked gap at header-content boundary: header padding + border + section padding can accumulate. Example: 64px + 3px + 48px = 115px (close to 120px limit) | ADDRESSED | conventions-brief.md line 61: "Individual spacing maxes at 96px, but section-bottom padding + divider margins + section-top padding can accumulate beyond 120px. Measure the total, not the parts." Gate-runner SC-10 measures total gap. | INFORMATIONAL |

### 12-6. Enrichment Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-6a | 12:326-336 | Add NAV-01 through NAV-10 navigation checklist items | NOT ADDRESSED | No navigation-specific checklist in any pipeline file. The fractal echo table (brief line 146) has a Navigation row but only with threshold "Header padding >= 48px, visible at 20% zoom." | MINOR |
| 12-6b | 12:338-348 | Recommendation: CHECKLIST with Telescope Preamble for Navigation scale | NOT ADDRESSED | No navigation-specific enrichment format in pipeline files. | MINOR |
| 12-6c | 12:384-388 | HIGHEST-LEVERAGE: Add "Navigation Echo" section showing CSS examples per metaphor type | NOT ADDRESSED | No navigation-specific CSS examples per metaphor in brief. This was the research file's top recommendation. | SIGNIFICANT |

### 12-7. Summary Findings

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 12-7a | 12:394-396 | 3 of 6 channels naturally strong at Navigation | N/A | Analytical observation | INFORMATIONAL |
| 12-7b | 12:398-399 | Navigation does not CREATE multi-coherence, it INAUGURATES it | N/A | Analytical observation | INFORMATIONAL |
| 12-7c | 12:401-402 | Anti-scale model naturally expressed but undocumented at Navigation | NOT ADDRESSED | No navigation-specific anti-scale documentation | MINOR |
| 12-7d | 12:404-406 | Fractal self-similarity is HIGHEST-ROI enrichment target for Navigation | NOT ADDRESSED | Same as 12-6c | SIGNIFICANT |
| 12-7e | 12:408 | Full stack at Navigation produces marginal improvements | N/A | Assessment | INFORMATIONAL |

---

## FILE 13: SCALE-PAGE (~960px)

### 13-1. Six Channels at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-1a | 13:20-36 | Chromatic (zone bg sequence) is STRONGEST signal at page scale | ADDRESSED | conventions-brief.md line 98: "background-color shift (the strongest visual signal)". SC-09 enforces >= 15 RGB delta. | INFORMATIONAL |
| 13-1b | 13:37-53 | Typographic progression: brief does NOT describe HOW typography should PROGRESS across zones | PARTIALLY ADDRESSED | conventions-brief.md Section 4 (lines 117-124): 4 semantic directions defined with typography references ("denser typography" for DEEPENING, "more air" for OPENING). But no explicit per-zone typography progression table. | SIGNIFICANT |
| 13-1c | 13:55-71 | Spatial progression (section padding) well-specified | ADDRESSED | conventions-brief.md lines 28, 61, 100. Gate-runner SC-10 (stacked gap). Brief Section 7 (transition grammar) describes spacing shifts. | INFORMATIONAL |
| 13-1d | 13:73-89 | Border PROGRESSION across zones not described at page scale | PARTIALLY ADDRESSED | conventions-brief.md lines 203-204: 3-tier border budget described. SC-15 requires >= 3 distinct configs. But no guidance on how border treatment should PROGRESS across zones. | MINOR |
| 13-1e | 13:91-106 | Behavioral channel: barely described, SC-13 treats as binary | ADDRESSED | conventions-brief.md lines 102, 105: Behavioral listed as "enhancement channel." gate-runner.md lines 549-566: CHANNEL NOTE acknowledges phantom status and lists options for future calibration. | INFORMATIONAL |
| 13-1f | 13:108-123 | Material channel: no concrete guidance, SC-13 checks backgroundImage | ADDRESSED | gate-runner.md lines 549-566: Material acknowledged as practically unreachable when soul forbids gradients. Status: DEFERRED with 3 calibration options. | INFORMATIONAL |

### 13-2. Multi-Coherence at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-2a | 13:127-145 | 5-channel shift example at DEEPENING boundary | ADDRESSED | conventions-brief.md lines 128: Full 5-channel DEEPENING example. Lines 416-430: Boundary CSS recipe example. | INFORMATIONAL |
| 13-2b | 13:149-162 | 3-channel quiet boundary example (SMOOTH transition) | ADDRESSED | conventions-brief.md lines 184-186: SMOOTH transition described. | INFORMATIONAL |
| 13-2c | 13:164-187 | 4 semantic directions at zone boundaries | ADDRESSED | conventions-brief.md lines 119-124: All 4 directions defined with CSS mappings. | INFORMATIONAL |
| 13-2d | 13:189-202 | Page-scale COHERENCE ARC (quiet --> loud --> quiet) | NOT ADDRESSED | conventions-brief.md line 132 mentions "coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels -- creating a narrative arc." But this is descriptive, not prescriptive. No explicit coherence arc planning guidance. | SIGNIFICANT |

### 13-3. Anti-Scale at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-3a | 13:209-217 | Density = component variety per viewport-height screenful | ADDRESSED | conventions-brief.md line 79: ">= 2 distinct component types per viewport-height screenful." | INFORMATIONAL |
| 13-3b | 13:219-227 | Restraint = NOT every zone maximally dense | ADDRESSED | conventions-brief.md lines 83-84: Restraint defined. | INFORMATIONAL |
| 13-3c | 13:229-237 | Spatial confidence = designed at arm's length squint | ADDRESSED | conventions-brief.md lines 281-282: "The Squint" in Five Questions. | INFORMATIONAL |

### 13-4. Fractal Self-Similarity at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-4a | 13:241-262 | Zone sequence echoes metaphor; fractal echo table at Page scale | ADDRESSED | conventions-brief.md lines 140-162: Fractal echo section with Page row in table. | INFORMATIONAL |

### 13-5. Perception Thresholds at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-5a | 13:272-286 | All page-scale thresholds stated and gate-enforced | ADDRESSED | SC-09, SC-10, SC-11, SC-12, SC-13, SC-14, SC-15 all present in gate-runner.md. | INFORMATIONAL |

### 13-6. Enrichment Gaps

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-6a | 13:310-319 | GAP 1: Coherence arc planning not explicitly stated | NOT ADDRESSED | Brief line 132 describes the arc phenomenon but provides no planning guidance. No "plan your coherence arc before building" instruction. | SIGNIFICANT |
| 13-6b | 13:321-329 | GAP 2: Typographic PROGRESSION across zones not described | NOT ADDRESSED | No per-direction typographic progression table mapping DEEPENING/OPENING/FOCUSING/RESOLVING to specific heading size changes. | SIGNIFICANT |
| 13-6c | 13:331-340 | GAP 3: Material channel has no concrete guidance | PARTIALLY ADDRESSED | gate-runner.md lines 549-566 acknowledges the gap and defers. No concrete guidance added to brief. | MINOR |
| 13-6d | 13:342-351 | GAP 4: Border progression not described at page scale | NOT ADDRESSED | No border-arc guidance in brief. 3-tier budget exists (lines 203-204) but no guidance on how border treatment should progress. | MINOR |
| 13-6e | 13:353-363 | GAP 5: Transition types (Section 7) to multi-coherence channel count mapping not explicit | NOT ADDRESSED | No explicit table mapping SMOOTH->3ch, BRIDGE->4-5ch, BREATHING->5-6ch in any pipeline file. | SIGNIFICANT |

### 13-7. Enrichment Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-7a | 13:423-442 | Rec 1: Add Coherence Arc Planning (~15-20 lines) | NOT ADDRESSED | Not present in brief | SIGNIFICANT |
| 13-7b | 13:444-448 | Rec 2: Add transition-to-coherence mapping table | NOT ADDRESSED | Not present in brief | SIGNIFICANT |
| 13-7c | 13:450-454 | Rec 3: Add per-direction typographic progression | NOT ADDRESSED | Not present in brief | SIGNIFICANT |
| 13-7d | 13:456-460 | Rec 4: Operationalize material channel | PARTIALLY ADDRESSED | gate-runner.md acknowledges gap but defers action | MINOR |
| 13-7e | 13:462-465 | Rec 5: Do NOT add page-scale build recipe to brief (belongs in orchestrator) | ADDRESSED | Brief remains world-description; SKILL.md contains the process/recipe (Phase A-D). | INFORMATIONAL |

### 13-8. Pipeline Weaknesses at Page Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 13-8a | 13:400 | Weakness 1: Gates measure EXISTENCE, not QUALITY | PARTIALLY ADDRESSED | gate-runner.md SC-13B is ADVISORY for direction coherence (line 676-688). PA questions (PA-61, PA-62, PA-65) measure quality perceptually. | INFORMATIONAL |
| 13-8b | 13:402 | Weakness 2: No gate measures the COHERENCE ARC | NOT ADDRESSED | No gate checks whether boundary intensities form a progression. | MINOR |
| 13-8c | 13:404 | Weakness 3: Material and behavioral channels under-gated | ADDRESSED | gate-runner.md lines 549-566: Explicitly acknowledged, status DEFERRED with options. | INFORMATIONAL |
| 13-8d | 13:406 | Weakness 4: Brief has tools but lacks RECIPE | ADDRESSED | SKILL.md lines 58-69 provide the Phase A-D recipe. Conventions brief remains world-description by design (line 465 of Rec 5). | INFORMATIONAL |

---

## FILE 14: SCALE-SECTION (~200-400px)

### 14-1. Six Channels at Section Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-1a | 14:19-25 | Chromatic at Section: COMPONENT-DRIVEN, not section-driven. SC-14 forbids intra-zone bg 1-14 RGB, creating BINARY (0 or >= 15 RGB) | ADDRESSED | gate-runner.md SC-14 sub-check 3 (lines 609-624): Explicitly enforces no intra-zone bg deltas 1-14 RGB. | INFORMATIONAL |
| 14-1b | 14:27-31 | Typographic within-section: no guidance on progression beyond heading/body/meta | NOT ADDRESSED | No within-section typographic progression guidance in any pipeline file. | MINOR |
| 14-1c | 14:33-38 | Spatial: "24-32px spacing between sections" is only data point for within-zone spacing | ADDRESSED | conventions-brief.md line 192: "a 1px rule with 24-32px spacing between sections, or simply a heading change with 16px extra margin." | INFORMATIONAL |
| 14-1d | 14:40-45 | Structural: 1px for within-section, 3px for zone boundaries -- clear and well-specified | ADDRESSED | conventions-brief.md lines 203-204: 3-tier border budget. | INFORMATIONAL |
| 14-1e | 14:47-52 | Behavioral at Section: ABSENT. Zero CSS guidance, zero thresholds. | PARTIALLY ADDRESSED | gate-runner.md lines 549-566 acknowledges phantom status. Brief line 102 lists as "enhancement channel." No Section-specific behavioral guidance. | MINOR |
| 14-1f | 14:54-59 | Material at Section: >= 2 types threshold exists but WHAT constitutes good material variation unaddressed | PARTIALLY ADDRESSED | conventions-brief.md line 79: ">= 2 distinct component types per viewport-height screenful." Gate SC-08 counts types but not distribution. | MINOR |

### 14-2. Multi-Coherence Within a Zone

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-2a | 14:67-69 | Brief says within-zone transitions should be "lighter versions" | ADDRESSED | conventions-brief.md line 192: Within-zone transitions described. | INFORMATIONAL |
| 14-2b | 14:87-99 | Within-zone hierarchy: zone boundary = 3-5 channels, within-zone = 1-2, within-section = 0-1. IMPLICIT but never EXPLICITLY stated. | NOT ADDRESSED | No explicit max channel count for within-zone transitions. The hierarchy is implied by "lighter versions" but no numeric parameters given. | MINOR |
| 14-2c | 14:104-108 | Builder would not know: max channels for within-zone, whether within-zone needs coherent direction, whether 3-channel zone minimum creates implicit 2-channel within-zone max | NOT ADDRESSED | No explicit parameters for within-zone transition limits. | MINOR |

### 14-3. Anti-Scale at Section Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-3a | 14:117-125 | Density: >= 2 component types per viewport -- EXPLICIT in brief but no gate enforces per-viewport | PARTIALLY ADDRESSED | conventions-brief.md line 148: Threshold stated. No gate in gate-runner.md checks per-viewport component density (only total SC-08 >= 8 types). | MINOR |
| 14-3b | 14:129-135 | Restraint: 4-mechanism density cap per viewport is section-scale restraint | ADDRESSED | conventions-brief.md Section 9B (line 248): ">= 14 mechanisms deployed across all 5 categories." Mechanism catalog referenced in SKILL.md line 53. | INFORMATIONAL |
| 14-3c | 14:139-146 | Spatial confidence at Section: LEAST specified of 3 anti-scale factors | NOT ADDRESSED | No section-scale spatial confidence guidance. | MINOR |

### 14-4. Fractal Self-Similarity at Section Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-4a | 14:150-177 | Fractal echo at Section: principle stated, threshold stated (>= 2 types), implementation guidance absent. No CSS recipe for section-scale echo. | NOT ADDRESSED | conventions-brief.md line 148: Threshold only. No section-scale echo recipe. | MINOR |

### 14-5. Enrichment Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-5a | 14:249-251 | Option A: Specify within-zone max 2 channel shifts, max 16px spacing delta, 1px structural only | NOT ADDRESSED | No within-zone transition parameters in any pipeline file. | MINOR |
| 14-5b | 14:257-261 | Option B: Tag each mechanism by operating scale (Page/Section/Component/Cross-scale) | NOT ADDRESSED | Mechanism catalog referenced but no scale tagging in any pipeline file. | MINOR |
| 14-5c | 14:282-286 | Option E: Behavioral channel hover state guidance (150ms for interactive components) | NOT ADDRESSED | Zero behavioral guidance at any scale in pipeline files. | MINOR |
| 14-5d | 14:318-326 | VERDICT: Light enrichment -- hierarchy table + mechanism scale tags + behavioral starter | NOT ADDRESSED | None of these 3 additions were made. | MINOR |

### 14-6. Section Scale Specification Gap

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 14-6a | 14:227-243 | Section is LEAST SPECIFIED scale: 1 threshold, 0 CSS patterns, 0 examples, 0 gates. Only ~60 words of Section-scale guidance in 400-line brief. | NOT ADDRESSED | The brief has the same ~60 words. No enrichment was made to Section-scale specification. | MINOR |

---

## FILE 15: SCALE-COMPONENT (~40-100px)

### 15-1. Six Channels Inside a Component

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-1a | 15:20-29 | Channel imbalance: 2 strong (Typographic, Structural/Material), 4 weak/absent (Chromatic, Spatial, Behavioral, Material-as-surface) | N/A | Analytical observation about component internals. | INFORMATIONAL |
| 15-1b | 15:33-36 | Label-to-body boundary inside a component IS a boundary -- brief says nothing about multi-coherence at this scale | NOT ADDRESSED | No component-internal multi-coherence guidance in brief. | SIGNIFICANT |

### 15-2. Multi-Coherence at Component Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-2a | 15:39-76 | Label-to-body transition is a 2-3 channel shift (Typographic + Spatial + optional Structural). Components WITH separator achieve 3 channels; WITHOUT achieve only 2. | NOT ADDRESSED | Brief describes 2-Zone DNA (line 200) but does not frame it as a multi-coherence event. | SIGNIFICANT |
| 15-2b | 15:54-60 | Brief does NOT say: label/body IS multi-coherence; direction should echo page-level; components in DEEPENING zone should have tighter contrast | NOT ADDRESSED | conventions-brief.md lines 200-202 describe component micro-coherence but do not connect to multi-coherence vocabulary or direction echoing. Brief line 202 says "A callout in a DEEPENING zone has a darker tinted background and tighter padding" which PARTIALLY addresses parametric echo but not the multi-coherence framing. | PARTIALLY ADDRESSED |

### 15-3. Anti-Scale at Component Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-3a | 15:100-104 | Brief never maps anti-scale formula to component scale. Only threshold is "label/body padding delta >= 4px." | NOT ADDRESSED | conventions-brief.md line 149: Only the padding delta threshold. No density/restraint/confidence at component scale. | MINOR |

### 15-4. Fractal Self-Similarity at Component Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-4a | 15:116-119 | Parametric echo EXPLICIT in brief | ADDRESSED | conventions-brief.md lines 156-158: Parametric echo described. | INFORMATIONAL |
| 15-4b | 15:130-148 | Parametric echo CSS recipe ABSENT -- principle stated but no concrete values | NOT ADDRESSED | Brief says "reduce component padding by ~25%" (line 158) which is SOMEWHAT concrete. But no zone-specific CSS (e.g., .zone--dense .callout { padding: 16px 20px }). The boundary CSS recipe (lines 416-430) shows zone-level CSS but not component parametric variation. | SIGNIFICANT |

### 15-5. Perception Thresholds at Component Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-5a | 15:158-165 | Only stated Component-scale threshold: label/body padding delta >= 4px | ADDRESSED | conventions-brief.md line 149. | INFORMATIONAL |
| 15-5b | 15:179-181 | No minimum contrast between label and body TEXT COLOR | NOT ADDRESSED | No text-color delta threshold in brief or gates. | MINOR |

### 15-6. Enrichment Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-6a | 15:199-205 | Priority 1: Add component multi-coherence to brief (2-3 lines) | NOT ADDRESSED | No component-internal multi-coherence statement in brief. | SIGNIFICANT |
| 15-6b | 15:207-217 | Priority 2: Add parametric echo CSS recipe (5-8 lines) | NOT ADDRESSED | Brief has the principle but no concrete padding values per zone density. | SIGNIFICANT |
| 15-6c | 15:223-227 | Priority 3: Add internal separator as standard practice (1-2 lines) | NOT ADDRESSED | Brief line 200 mentions "1px bottom border separator" in DNA description but does not recommend it for ALL component families. | MINOR |
| 15-6d | 15:229-233 | Priority 4 (optional): Update components.css callout family with separator | NOT ADDRESSED | This is a components.css change, not a pipeline file change. Out of scope for the 4 pipeline files. | N/A |

### 15-7. CD-006 vs Flagship Component Analysis

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 15-7a | 15:265-269 | Flagship had ZERO borders, ZERO internal separators, ALL text 16px/400. Root cause: builder received CHECKLIST not RECIPE. | ADDRESSED | SKILL.md lines 58-85 provide recipe structure (Phase A-D). Brief is world-description. Gate-runner fixes include conventions-brief section references (lines 226-256). The builder spawn prompt is recipe-structured. | INFORMATIONAL |
| 15-7b | 15:271-277 | Component scale enrichment is SECOND-HIGHEST leverage after Page-scale zone differentiation. HIGHEST leverage RECIPE enrichment. | PARTIALLY ADDRESSED | SKILL.md builder prompt references components.css (line 54) and mechanism-catalog.md (line 53). But no component-specific recipe in spawn prompt. | SIGNIFICANT |

---

## FILE 16: SCALE-CHARACTER (~12-20px)

### 16-1. Six Channels at Character Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-1a | 16:20-27 | Character is overwhelmingly a Typographic-channel-only scale. Cannot contribute 3 channels independently. | N/A | Analytical observation. | INFORMATIONAL |
| 16-1b | 16:33-36 | Multi-coherence enrichment at Character scale is a CATEGORY ERROR. | N/A | Analytical insight. | INFORMATIONAL |

### 16-2. Anti-Scale at Character Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-2a | 16:72-74 | Density at Character is BINARY: perceptible or not. | ADDRESSED | conventions-brief.md line 59: Letter-spacing floor 0.025em. SC-14 enforces this. | INFORMATIONAL |
| 16-2b | 16:78-87 | Restraint = FINITE register set (6 registers). Flagship had 107+ micro-registers. | PARTIALLY ADDRESSED | conventions-brief.md Section 8 (lines 196-224): CSS vocabulary describes registers implicitly. But no CLOSED SET enumeration of 6 registers. | SIGNIFICANT |
| 16-2c | 16:91-94 | Spatial confidence = register consistency. If labels vary, spatial confidence collapses. | ADDRESSED | conventions-brief.md line 200: "This DNA repeats identically across callouts, code blocks, data tables..." | INFORMATIONAL |

### 16-3. Fractal Self-Similarity at Character Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-3a | 16:99-122 | Character scale is CONDITIONAL: "ONLY after Page scale verified." Dependency chain: Navigation -> Page -> Section -> Component -> Character. | ADDRESSED | conventions-brief.md line 150: "ONLY after Page scale verified" in fractal echo table. Line 152: Dependency rule stated explicitly. | INFORMATIONAL |

### 16-4. Perception Thresholds at Character Scale

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-4a | 16:150-156 | SC-14 is the ONLY gate designed specifically for Character-scale failure prevention | ADDRESSED | gate-runner.md SC-14 (lines 573-628): Three sub-checks documented. | INFORMATIONAL |
| 16-4b | 16:162-168 | CSS budget trap: Flagship 238 lines on Character (22%). CD-006 ~20 lines (3%). | ADDRESSED | conventions-brief.md lines 53, 81: Flagship failure described. "Those lines could have funded 6 grid layouts, 4 callout variants, and 3 breakpoints." | INFORMATIONAL |

### 16-5. Enrichment Recommendations

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-5a | 16:203-208 | E1: Character Scale Budget Cap (5% of CSS, <= 40 lines at 800-line minimum) | NOT ADDRESSED | No CSS budget cap for Character scale in any pipeline file. | MINOR |
| 16-5b | 16:210-215 | E2: Character Scale Dependency Gate (make "ONLY after Page verified" a programmatic gate) | NOT ADDRESSED | The dependency is stated in brief line 150 but not enforced programmatically. No gate checks whether Page scale is working before allowing Character-scale CSS. | MINOR |
| 16-5c | 16:217-236 | E3: Character Scale Register Inventory (6 registers as closed set) | NOT ADDRESSED | conventions-brief.md Section 8 describes registers implicitly but does not enumerate them as a CLOSED SET. No explicit "6 registers, do not invent 7th" rule. | SIGNIFICANT |
| 16-5d | 16:238-243 | E4: Letter-Spacing Whitelist (0 / 0.05em / 0.1em) -- restrict vocabulary to 3 values | NOT ADDRESSED | SC-14 prevents values below 0.025em and prevents micro-clustering, but does not restrict to a whitelist. Any value >= 0.025em is allowed. | MINOR |

### 16-6. What NOT to Enrich

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 16-6a | 16:299-303 | Do NOT add new Character-scale mechanisms, multi-coherence rules, parametric echo guidelines, or word-spacing | ADDRESSED | None of these were added. The pipeline correctly does NOT enrich Character scale beyond existing constraints. | INFORMATIONAL |

---

## FILE 17: CONCEPT-FLOW-TRACE (9 Concepts Through 6 Pipeline Stages)

### 17-CONCEPT 1: 6 Channels

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-1a | 17:28-34 | 27 lines of channel content in brief | ADDRESSED | conventions-brief.md lines 92-134: Full 6-channel model present. | INFORMATIONAL |
| 17-1b | 17:36-41 | Spawn prompt: channels NOT named. Word "channel" does not appear. | PARTIALLY ADDRESSED | SKILL.md lines 63-67: Self-check bullets reference "bg deltas >= 15 RGB" (Chromatic), "border configurations" (Structural), "font-size delta >= 2px" (Typographic) but the word "channel" still does not appear. Lines 284: Weaver instructions now include "name the affected multi-coherence channel (Chromatic/Typographic/Spatial/Structural)" for issue descriptions. | SIGNIFICANT |
| 17-1c | 17:94-107 | RETURN PATH: 27 lines in -> 0 lines of structured channel feedback to builder in fix cycle. Total loss at return. | PARTIALLY ADDRESSED | SKILL.md lines 331-335: Fix cycle now includes "Compositional Context" section with "Which channels currently shift there and which are missing" and "Re-read conventions-brief.md Section [N]." gate-runner.md lines 226-256: Fix Recipe Compositional Context added with brief_section references. This is a SIGNIFICANT improvement over the research finding. | SIGNIFICANT |

### 17-CONCEPT 2: 5 Scales

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-2a | 17:124-128 | Spawn prompt: word "scale" does not appear. "fractal" does not appear. Scale names do not appear. | NOT ADDRESSED | SKILL.md builder spawn prompt (lines 43-86): No mention of scales, fractal, or 5 scale names. Builder must discover scales from the conventions brief. | MINOR |
| 17-2b | 17:135-147 | Only 1 of 5 scales (Page via SC-12 zone count) gets programmatic measurement. DG-1 validates table existence, not CSS implementation. | ADDRESSED | gate-runner.md DG-1 (lines 725-744): Still validates deliverable (table with 5 rows), not CSS manifestation. SC-12 still the only scale with programmatic measurement. This is a KNOWN LIMITATION, not a gap -- DG-1 is intentionally a deliverable gate. | INFORMATIONAL |
| 17-2c | 17:172-177 | A page could pass all gates with strong Page-scale and zero Navigation/Character expression | PARTIALLY ADDRESSED | conventions-brief.md line 154: "Navigation + Page + Component are mandatory strong." DG-1 requires 5 rows with CSS evidence. But no programmatic verification that CSS evidence IS the implementation. PA-63 checks Component-Page echo. | MINOR |

### 17-CONCEPT 3: Multi-Coherence

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-3a | 17:199-200 | Spawn prompt: "multi-coherence" does not appear | NOT ADDRESSED | SKILL.md builder spawn prompt: Term "multi-coherence" absent. Builder sees it in the brief. Lines 66: ">= 3 channels shift in same semantic direction at each boundary" covers the concept without naming it. | MINOR |
| 17-3b | 17:219 | SC-13B (direction coherence) is ADVISORY only, 50% confidence | ADDRESSED | gate-runner.md lines 672-688: SC-13B remains ADVISORY. This is by design -- direction heuristic is imprecise. | INFORMATIONAL |
| 17-3c | 17:255-261 | Semantic direction gap: DEEPENING + OPENING simultaneously at same boundary PASSES SC-13. Directionality survives only in brief and PA auditor judgment. | ADDRESSED | gate-runner.md lines 546-547: "Counts channels but CANNOT judge if shifts serve the SAME semantic direction." SC-13B attempts direction check at 50% confidence. PA-61/PA-62 catch perceptual quality. This is a known limitation. | INFORMATIONAL |

### 17-CONCEPT 4: 4 Semantic Directions

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-4a | 17:269-278 | 7 lines in brief, beautifully defined | ADDRESSED | conventions-brief.md lines 117-126: Full 4-direction model with CSS mappings. | INFORMATIONAL |
| 17-4b | 17:281-283 | Spawn prompt: direction names do not appear | NOT ADDRESSED | SKILL.md builder spawn prompt: DEEPENING/OPENING/FOCUSING/RESOLVING not mentioned. Line 66 says "same semantic direction" but does not name them. | MINOR |
| 17-4c | 17:289-295 | Gate: 4 directions COLLAPSED to 2 binary categories (INTENSIFYING/RELAXING) at 50% confidence, ADVISORY only | ADDRESSED | gate-runner.md SC-13B (lines 680-681): Still binary INTENSIFYING(+)/RELAXING(-). This is acknowledged as imprecise. | INFORMATIONAL |
| 17-4d | 17:297-308 | TOTAL EXTINCTION: 7 lines --> 0 lines past gates. No PA question, no weaver, no fix cycle mentions directions. | PARTIALLY ADDRESSED | SKILL.md lines 331-335: Fix cycle now includes "The boundary's planned coherence direction (from transition table in _build-log.md)" and "Fix bg while maintaining DEEPENING." This routes direction context to the builder during fixes -- a direct response to the extinction finding. PA still has no explicit direction question. | SIGNIFICANT |

### 17-CONCEPT 5: Anti-Scale Model

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-5a | 17:336-350 | Spawn prompt: "density" / "restraint" / "spatial confidence" / "richness" / "anti-scale" do not appear | NOT ADDRESSED | SKILL.md builder spawn prompt: None of these terms present. Builder discovers them in brief. | MINOR |
| 17-5b | 17:356-364 | No gate directly measures anti-scale formula or its 3 factors. No gate measures restraint. | NOT ADDRESSED | No anti-scale gate exists. Restraint is build-log attestation only (brief line 83: "document which ones and why"). SC-14 partially enforces density; SC-08/SC-15/SC-11 partially enforce spatial confidence. | MINOR |
| 17-5c | 17:386-393 | TOTAL EXTINCTION: 16 lines --> 0 in weaver/fix. Multiplicative zero-factor insight never verified. | NOT ADDRESSED | No verification of the anti-scale model anywhere in the downstream pipeline. PA-64 asks about restraint but finding is never fed back as anti-scale formula context. | MINOR |

### 17-CONCEPT 6: Fractal Self-Similarity

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-6a | 17:417-419 | DG-1 validates the DELIVERABLE (table exists), NOT the implementation (CSS manifests) | ADDRESSED | gate-runner.md DG-1 (lines 725-744): Known design choice. PA-63 supplements with perceptual check. | INFORMATIONAL |
| 17-6b | 17:447-450 | Deliverable-reality gap: builder could write "header padding 48px" in table and ship with padding 24px | PARTIALLY ADDRESSED | gate-runner.md DG-2 (lines 748-770): Cross-validates builder-claimed values against SC-13 measured values. But DG-2 only covers boundary values (bg, font-size, letter-spacing), not navigation-scale properties like header padding. | MINOR |

### 17-CONCEPT 7: Perception Thresholds

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-7a | 17:477-483 | Spawn prompt: 6 lines reference thresholds (self-check bullets) | ADDRESSED | SKILL.md lines 63-67: Self-check references bg delta, borders, typography. | INFORMATIONAL |
| 17-7b | 17:488-496 | ~293 lines in gates, MOST gate coverage of any concept | ADDRESSED | gate-runner.md: SC-09, SC-10, SC-11, SC-14, SC-15, SC-13 all enforce thresholds. | INFORMATIONAL |
| 17-7c | 17:509-513 | ONLY concept with structured return path (gate JSON with CSS fix recipe) | ADDRESSED | gate-runner.md: All gates produce fix recipes. SKILL.md fix cycle (lines 327-328) routes gate failures with measured values. | INFORMATIONAL |
| 17-7d | 17:527-530 | LOWEST LOSS of any concept through pipeline | N/A | Confirmed by pipeline audit. | INFORMATIONAL |

### 17-CONCEPT 8: Recipe vs Checklist

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-8a | 17:558-568 | Spawn prompt IS recipe-structured (Phase A-D, sequential self-checks) | ADDRESSED | SKILL.md lines 58-69: Phase A-D recipe preserved. | INFORMATIONAL |
| 17-8b | 17:619-625 | Fix cycle degrades from recipe to checklist. Builder gets recipe for FIRST pass but CHECKLIST for fix cycles. | PARTIALLY ADDRESSED | SKILL.md lines 330-335: "Compositional Context" section added to fix instructions with boundary direction, channel analysis, and brief section references. Line 354: "Re-read your conviction statement and transition table in _build-log.md before applying fixes." This significantly improves over pure checklist, though the fix template still contains gate JSON (checklist) alongside context (recipe-adjacent). | SIGNIFICANT |
| 17-8c | 17:779-784 | The pipeline ITSELF undergoes recipe-to-checklist degradation | PARTIALLY ADDRESSED | Same as 17-8b. The degradation is reduced but not eliminated. Fix instructions are now mixed recipe/checklist rather than pure checklist. | SIGNIFICANT |

### 17-CONCEPT 9: Stack Progression

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-9a | 17:636-648 | Stack progression NEVER EXPLICITLY CODIFIED anywhere. Only implicit via brief section ordering. | NOT ADDRESSED | No explicit stack progression codification in any pipeline file. The brief's section ordering (Identity -> Perception -> Richness -> Multi-Coherence -> Fractal Echo -> Metaphor -> Transition Grammar -> CSS Vocabulary) implies a progression but never states it. | MINOR |
| 17-9b | 17:658-664 | Gate dependency chain (SC-12 -> SC-09 -> SC-13) captures partial mechanical ordering but not conceptual architecture | ADDRESSED | gate-runner.md lines 104-107: Dependency chain documented. | INFORMATIONAL |
| 17-9c | 17:672-681 | Weaver's 6-item checklist decomposes integrated concepts into independent atoms | PARTIALLY ADDRESSED | SKILL.md weaver instructions (lines 297-304): Compositional criteria are listed as 6 items. But the weaver is also instructed to "name the affected multi-coherence channel, the fractal scale, and the transition type" (line 284-287), which bridges concepts. | MINOR |

### 17-SYNTHESIS: Master Findings

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 17-Sa | 17:788-801 | Pipeline has ONE-WAY VALVE: concepts flow richly TO builder but ZERO concepts flow back structurally in fix cycles. Only exception: perception thresholds. | PARTIALLY ADDRESSED | SKILL.md fix cycle (lines 330-347): Now includes compositional context (direction, channels, brief section references). gate-runner.md (lines 226-256): Fix recipes now include brief_section reference. The one-way valve has been PARTIALLY OPENED. 1 of 9 concepts (thresholds) has FULL return path; 2-3 more (channels, directions) now have PARTIAL return paths via fix template improvements. 5-6 concepts (anti-scale, stack progression, fractal, recipe framing) still have zero return path. | SIGNIFICANT |
| 17-Sb | 17:742-748 | Three critical bottlenecks: (1) spawn prompt transmits zero concepts by name, (2) weaver collapses all to binary, (3) fix cycle routes symptoms not concepts | PARTIALLY ADDRESSED | (1) Spawn prompt still doesn't name most concepts but checkpoints cover key thresholds. (2) Weaver still binary MET/FAILED but now adds channel/scale/transition naming in Top-5 Issues (SKILL.md line 284-287). (3) Fix cycle now includes compositional context section (SKILL.md lines 330-335). Bottleneck 3 is the most improved. | SIGNIFICANT |
| 17-Sc | 17:795-801 | Option (c) is cheapest fix: route builder back to conventions-brief sections rather than forward to CSS fixes | ADDRESSED | gate-runner.md lines 226-256: Fix Recipe Compositional Context now includes "brief_section: Re-read conventions-brief.md Section N." This implements Option (c) directly. | INFORMATIONAL |

---

## DEBRIEF PARTS 3-8

### Part 3: SKILL.md Orchestration Details

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D3-1 | Debrief 3 | Fix template does NOT reference conventions-brief sections (recipe-to-checklist degradation) | ADDRESSED | SKILL.md lines 330-335: Fix instructions now include "Re-read conventions-brief.md Section [N] for the relevant concept" with example. gate-runner.md lines 226-256: brief_section added to fix recipes. | INFORMATIONAL |
| D3-2 | Debrief 3 | File reading order: conventions-brief FIRST (world model), content SECOND, reference files as-needed, prohibitions LAST | ADDRESSED | SKILL.md lines 47-56: Exact order specified. "Read these files IN THIS ORDER (order matters -- primacy establishes world model, recency keeps soul constraints fresh)." | INFORMATIONAL |
| D3-3 | Debrief 3 | TeamCreate vs Task tool ambiguity | ADDRESSED | SKILL.md line 30: "Spawn agents using the Task tool." Line 40: "Model: Opus." No TeamCreate reference. Unified to Task tool only. | INFORMATIONAL |
| D3-4 | Debrief 3 | Output directory structure | ADDRESSED | SKILL.md lines 426-427: Complete file structure specified. | INFORMATIONAL |

### Part 4: Gate Runner Analysis

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D4-1 | Debrief 4 | BG-1 and BG-2 exist in gate-runner.md but ENTIRELY ABSENT from SKILL.md | ADDRESSED | SKILL.md lines 175-177: "BG-1: Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation" and "BG-2: Metaphor is STRUCTURAL (suggests CSS properties), not ANNOUNCED (label-only)." Both now present. | INFORMATIONAL |
| D4-2 | Debrief 4 | Mechanism count discrepancy: gate-runner >= 14 total AND per-category, SKILL.md only per-category (5 possible) | ADDRESSED | SKILL.md line 171: "mechanisms: >= 14 total AND >= 1 in each of 5 categories." DG-4 in SKILL.md now matches gate-runner.md. | INFORMATIONAL |
| D4-3 | Debrief 4 | Micro-gate architecture converted to honor-system questions in SKILL.md | PARTIALLY ADDRESSED | SKILL.md lines 61-68: 3 self-check checkpoints described for builder (reduced from 4). gate-runner.md lines 35-69: 4 micro-gates described for orchestrator. SKILL.md does NOT describe orchestrator-run micro-gates during build. The builder self-checks are honor-system. However, the orchestrator runs full gates after build (Step 3), which catches any failures. The micro-gate gap means failures caught later (more expensive to fix) rather than during build. | SIGNIFICANT |
| D4-4 | Debrief 4 | Gate-to-PA context: gate results NOT routed to auditors per SKILL.md | ADDRESSED | SKILL.md lines 216-238: PA auditors receive ONLY screenshots and questions. Line 208: "Do NOT give it to PA auditors -- they must remain fresh-eyes with zero build context." This is INTENTIONAL DESIGN -- fresh-eyes auditors should not be biased by gate data. Gate diagnostic data goes to WEAVER (line 262-263). | INFORMATIONAL |
| D4-5 | Debrief 4 | Fix recipe format discrepancy (gate-runner embedded vs SKILL.md manual) | PARTIALLY ADDRESSED | SKILL.md lines 160-161: "If any gate FAILS: produce a structured fix instruction with measured values, threshold, and specific CSS fix." gate-runner.md provides embedded fix recipes in each gate. The orchestrator is expected to extract these. Format is aligned but extraction is manual. | MINOR |
| D4-6 | Debrief 4 | Micro-gate threshold differences (MG-1: 5 landmarks vs SKILL.md 3; MG-3: 3 configs vs SKILL.md 2) | PARTIALLY ADDRESSED | SKILL.md checkpoint 1 (line 62): ">= 8 component classes?" (matches SC-08 Flagship). ">= 5 ARIA landmarks?" (matches SC-06 Flagship). Checkpoint 2 (line 65): ">= 3 distinct border configurations" (matches SC-15 Flagship). The thresholds now align with Flagship gates. | INFORMATIONAL |

### Part 5: PA Questions Analysis

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D5-1 | Debrief 5 | Metaphor pervasion BLIND SPOT: no question asks "Does a single metaphor pervade the entire page?" | NOT ADDRESSED | flagship-pa-questions.md: No question tests metaphor SPATIAL COVERAGE (present in all scroll thirds). PA-44 tests expression quality. BG-2 tests structural vs announced. But no question asks "is the metaphor present in sections 4-8, not just 1-3?" | SIGNIFICANT |
| D5-2 | Debrief 5 | 8 Tier 5 questions mapping to CI stack layers | ADDRESSED | flagship-pa-questions.md: All 8 questions present (PA-60 through PA-67). | INFORMATIONAL |
| D5-3 | Debrief 5 | Auditor assignments: 9 auditors, 56 total questions, Auditor C heaviest at 13 | ADDRESSED | SKILL.md lines 242-253 and flagship-pa-questions.md lines 130-143: Assignments match. | INFORMATIONAL |

### Part 6: Process Reconstruction

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D6-1 | Debrief 6 | DG-4 references _build-plan.yaml but builder never produces it | ADDRESSED | SKILL.md lines 165-173: DG-4 now references _build-log.md (not _build-plan.yaml). Sub-checks validate conviction statement, transition table, and fractal echo table from _build-log.md. | INFORMATIONAL |
| D6-2 | Debrief 6 | Validation builds never run | N/A | This is a process observation about the master prompt creation, not a pipeline file issue. | INFORMATIONAL |

### Part 7: Known Issues Verification

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D7-1 | Debrief 7 | Issue 1: Boundary-by-boundary vs channel-grouped -- brief says boundary-by-boundary, SKILL.md checkpoints are channel-grouped | ADDRESSED | conventions-brief.md lines 406-414: Build process now explicitly says "working BOUNDARY BY BOUNDARY rather than channel by channel" and "After each zone boundary: background delta >= 15 RGB, border configuration appropriate for transition type, typography shift >= 2px, spacing shift aligns with coherence direction." SKILL.md lines 63-67: Checkpoint 2 says "After zone boundaries set (all channels together per boundary)" -- now boundary-grouped, not channel-grouped. | INFORMATIONAL |
| D7-2 | Debrief 7 | Issue 2: Stack Progression absence | NOT ADDRESSED | Same as 17-9a. No explicit stack progression codification. | MINOR |
| D7-3 | Debrief 7 | Issue 3: Fix cycle recipe-to-checklist degradation | PARTIALLY ADDRESSED | Same as 17-8b. Compositional Context section added but degradation not fully eliminated. | SIGNIFICANT |
| D7-4 | Debrief 7 | Issue 4: Behavioral/Material channel phantom status | ADDRESSED | gate-runner.md lines 549-566: CHANNEL NOTE explicitly acknowledges phantom status, lists 3 calibration options, recommends option (c). Status: DEFERRED. | INFORMATIONAL |
| D7-5 | Debrief 7 | Issue 5: Return path extinction | PARTIALLY ADDRESSED | Same as 17-Sa. Return path partially opened via compositional context in fix instructions and brief_section in gate fix recipes. | SIGNIFICANT |

### Part 8: Honest Assessment

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| D8-1 | 8.1 | Would fresh Opus builder know HOW to build? MOSTLY YES but needs mechanism-catalog.md and components.css | ADDRESSED | SKILL.md lines 53-54: "design-system/compositional-core/grammar/mechanism-catalog.md" and "design-system/compositional-core/components/components.css" both listed as reference files for builder. | INFORMATIONAL |
| D8-2 | 8.2 | SINGLE WEAKEST PART: Zone selector assumption. Every gate depends on querySelectorAll('[class*="zone"]...'). If builder uses different class names, EVERY gate silently passes. SINGLE POINT OF FAILURE. | **ADDRESSED** | gate-runner.md SC-00 (lines 111-201): Zone Selector Validation gate added. Runs FIRST before all other gates. Primary selector -> 3 fallback selectors. If ALL fail, entire gate run reports FAIL. Successful fallback selector stored and used by ALL subsequent per-zone gates. conventions-brief.md lines 407-408: Zone markup requirement explicitly stated ("Use `<section class="section zone-N">` or `<section data-zone="N">` for each content zone. All programmatic gates depend on zone selectors -- non-standard markup causes gate failures."). SKILL.md line 128: SC-00 in gate table. **This was the #1 debrief concern and it is FULLY addressed.** | BLOCKING |
| D8-3 | 8.3 | SINGLE STRONGEST PART: Conventions brief's world-description voice (80% playbook, 20% guardrail) | ADDRESSED | conventions-brief.md: Confirmed -- world-description tone maintained throughout. Line 5: "This brief describes the world you are building inside." Line 69: "These are not rules to comply with. They are the physics of human perception." Constraint language density remains ~0.2%. | INFORMATIONAL |
| D8-4 | 8.4 | ONE CHANGE: Embed a golden reference (completed conventions brief example) as appendix showing how CD-006 maps to brief's framework | **NOT ADDRESSED** | No golden reference, appendix, or CD-006 mapping exists in any of the 4 pipeline files. The conventions brief has a boundary CSS recipe example (lines 416-430) but this is a SINGLE boundary, not a full-page golden reference. **This was the debrief's recommended single change and it was NOT implemented.** | SIGNIFICANT |
| D8-5 | 8.5 | Confidence 5/10 -- concerns: never tested end-to-end, zone selector fragility, 75-line builder visibility problem, will Opus ABSORB 403 lines? | PARTIALLY ADDRESSED | Zone selector: FIXED (SC-00). End-to-end testing: NOT done (still N=0). 75-line builder visibility: The builder spawn prompt is now ~43 lines (SKILL.md lines 43-86), but the builder reads the full 443-line conventions brief. The concern was whether Opus absorbs 403+ lines -- this cannot be resolved without a test run. | SIGNIFICANT |

---

## SPECIAL FOCUS ANALYSIS

### SF-1: Concept-Flow-Trace (File 17) -- 9 Concepts Compression Analysis

| Concept | Original Compression Rating | Current State | Improvement? |
|---------|---------------------------|---------------|-------------|
| **6 Channels** | RETURN PATH EXTINCTION (27 -> 0 structured) | PARTIALLY IMPROVED. Fix cycle now includes channel naming in compositional context. Weaver instructed to name channels in Top-5 Issues. Still no structured per-channel feedback. | YES -- moderate |
| **5 Scales** | 7.3:1 (22 -> 3 template) | UNCHANGED. Spawn prompt still doesn't mention scales. DG-1 still validates table not CSS. PA-63 still checks only Component-Page echo. | NO |
| **Multi-Coherence** | RETURN PATH EXTINCTION (32 -> 0) | PARTIALLY IMPROVED. Fix cycle compositional context names channels and direction. Brief section references route builder back. | YES -- moderate |
| **4 Semantic Directions** | TOTAL EXTINCTION (7 -> 0) | PARTIALLY IMPROVED. Fix cycle example says "Fix bg while maintaining DEEPENING." Direction names now in fix instructions. Still no PA question, no weaver evaluation. | YES -- significant |
| **Anti-Scale Model** | TOTAL EXTINCTION (16 -> 0) | UNCHANGED. No gates, no weaver criteria, no fix routing for anti-scale formula. | NO |
| **Fractal Self-Similarity** | 7.3:1 (22 -> 3 template) | UNCHANGED. DG-1 still deliverable-only. DG-2 cross-validates some values. | NO -- negligible |
| **Perception Thresholds** | LOWEST LOSS (31 -> STRUCTURED) | MAINTAINED. Still the best-preserved concept. Now enhanced with brief_section references in fix recipes. | YES -- slight improvement |
| **Recipe vs Checklist** | 8.4:1 with structure degradation | IMPROVED. Fix cycle now mixed recipe/checklist rather than pure checklist. Compositional Context section adds recipe framing to fix instructions. | YES -- moderate |
| **Stack Progression** | NEVER CODIFIED (0 -> 0) | UNCHANGED. Still implicit in brief section ordering. | NO |

**Summary:** 5 of 9 concepts show improvement in pipeline preservation. 4 remain unchanged. The most improved are: 4 Semantic Directions (from total extinction to partial presence in fix cycles), Recipe vs Checklist (from pure checklist fix cycles to mixed recipe/checklist). The least improved are: Anti-Scale Model (still total extinction), Stack Progression (still never codified), and 5 Scales (still no spawn prompt mention).

### SF-2: Scale Files (12-16) -- Specific Gaps Assessment

| Scale | Total Findings | ADDRESSED | PARTIALLY | NOT ADDRESSED | Key Remaining Gap |
|-------|---------------|-----------|-----------|---------------|-------------------|
| **Navigation (12)** | 18 | 5 | 2 | 6 | No metaphor-specific header CSS examples (12-6c) |
| **Page (13)** | 22 | 10 | 2 | 8 | No coherence arc planning, no transition-to-coherence mapping (13-6a, 13-6e) |
| **Section (14)** | 15 | 4 | 3 | 7 | No within-zone transition parameters, no section-scale enrichment (14-5d) |
| **Component (15)** | 15 | 2 | 3 | 8 | No component-internal multi-coherence, no parametric echo recipe (15-6a, 15-6b) |
| **Character (16)** | 11 | 5 | 1 | 4 | No register inventory as closed set, no budget cap (16-5c, 16-5a) |

**Pattern:** The Page scale is best-served by the pipeline (highest ADDRESSED rate). Navigation and Component scales have the most significant remaining gaps. Section is intentionally under-specified. Character is appropriately constrained.

### SF-3: Zone Selector Concern (Debrief 8.2) -- SC-00 Assessment

**Was SC-00 added?** YES.

**Evidence:**
- gate-runner.md lines 111-201: Full SC-00 implementation
- Primary selector: `[class*="zone"], section[data-zone], .section`
- 3 fallback selectors tried in order
- If ALL fail: entire gate run FAILS (no silent passes)
- Successful fallback stored for all subsequent per-zone gates
- conventions-brief.md lines 407-408: Zone markup requirement documented
- SKILL.md line 128: SC-00 in gate table

**Verdict:** The #1 debrief concern is FULLY RESOLVED. SC-00 with fallback chain eliminates the single point of failure. The brief now explicitly instructs builders on required zone markup. This is the highest-impact fix in the entire enrichment implementation.

### SF-4: Golden Reference Suggestion (Debrief 8.4)

**Was any golden reference added?** NO.

**Evidence:** No golden reference, CD-006 mapping, or completed example exists in any of the 4 pipeline files. The closest is:
- conventions-brief.md lines 416-430: Boundary CSS recipe (single boundary, not full page)
- SKILL.md lines 80-85: Brief reflection requirement (builder documents post-hoc, not a pre-existing example)

**Verdict:** The debrief's recommended single change before re-execution was NOT implemented. The brief "tells the builder everything about the INSTRUMENT but shows no MUSIC." A 50-line appendix mapping CD-006 to the brief's framework remains unwritten.

### SF-5: 75-Line Builder Visibility Problem

**Has the builder's view been expanded?** PARTIALLY.

**Previous state (per concept-flow-trace):** Builder spawn prompt was ~39 lines. Builder reads full 403-line brief.

**Current state:**
- SKILL.md builder spawn prompt: lines 43-86 = ~43 lines of instructions
- Builder reads full conventions-brief.md (443 lines)
- Builder reads content file (variable)
- Builder has access to mechanism-catalog.md, components.css, tokens.css, prohibitions.md as reference files
- Total builder visibility: ~43 lines instruction + 443 lines brief + reference files = well over 500 lines

**Verdict:** The builder's view was never limited to 75 lines -- the concept-flow-trace's "75-line builder visibility" referred to the SPAWN PROMPT ONLY (what the orchestrator ADDS beyond the brief). The brief IS the primary guidance. The spawn prompt adds process framing (Phase A-D), self-check bullets, and creative authority statement. The builder has access to ALL reference files. The visibility problem is not about LINE COUNT but about ABSORPTION -- will an Opus builder actually internalize 443 lines of world-description? This cannot be resolved without a test run.

---

## AGGREGATE STATISTICS

### By Status

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 43 | 39.4% |
| PARTIALLY ADDRESSED | 21 | 19.3% |
| NOT ADDRESSED | 33 | 30.3% |
| N/A / INFORMATIONAL | 12 | 11.0% |
| **Total findings audited** | **109** | **100%** |

### By Severity (excluding N/A)

| Severity | Total | ADDRESSED | PARTIAL | NOT ADDRESSED |
|----------|-------|-----------|---------|---------------|
| BLOCKING | 1 | 1 (100%) | 0 | 0 |
| SIGNIFICANT | 25 | 6 (24%) | 8 (32%) | 11 (44%) |
| MINOR | 40 | 5 (12.5%) | 8 (20%) | 27 (67.5%) |
| INFORMATIONAL | 43 | 31 (72%) | 5 (12%) | 7 (16%) |

### Key Observations

1. **The single BLOCKING finding (zone selector fragility) is FULLY ADDRESSED.** SC-00 with fallback chain is the highest-impact fix in the enrichment.

2. **SIGNIFICANT findings are 44% NOT ADDRESSED.** The most impactful gaps:
   - No coherence arc planning (13-6a)
   - No transition-to-coherence mapping (13-6e)
   - No typographic progression per direction (13-6b)
   - No component-internal multi-coherence framing (15-6a)
   - No parametric echo CSS recipe (15-6b)
   - No navigation-specific metaphor CSS examples (12-6c)
   - No golden reference / CD-006 mapping (D8-4)
   - No metaphor spatial coverage PA question (D5-1)
   - No character-scale register inventory as closed set (16-5c)
   - Micro-gate architecture still honor-system in SKILL.md (D4-3)

3. **MINOR findings are 67.5% NOT ADDRESSED.** Most of these are Section-scale and Character-scale enrichments that were explicitly flagged as low-priority by the research itself (Section is "recommended," Character is "optional and last").

4. **The return path gap is PARTIALLY CLOSED.** The compositional context section in fix instructions (SKILL.md lines 330-335) and brief_section references in gate fix recipes (gate-runner.md lines 226-256) are the most impactful additions. They implement the concept-flow-trace's cheapest fix recommendation (option c: route builder back to brief sections).

5. **The recipe-vs-checklist finding is the most meta-applicable finding.** The pipeline has improved its own fix cycle structure from pure checklist to mixed recipe/checklist, but the degradation is reduced rather than eliminated.

---

## TOP 10 UNADDRESSED FINDINGS BY IMPACT

| Rank | Finding | Source | Why It Matters |
|------|---------|--------|----------------|
| 1 | **No golden reference** (CD-006 mapping to brief) | D8-4 | Debrief's recommended single change. Bridges "world understanding" to "built artifact." |
| 2 | **No coherence arc planning** | 13-6a, 13-7a | Builder has no guidance on planning boundary intensity progression. Pages may have uniform 3-channel shifts. |
| 3 | **No transition-to-coherence mapping** (SMOOTH->3ch, BRIDGE->4-5ch, BREATHING->5-6ch) | 13-6e, 13-7b | Builder sees transition types and channel counts as separate concepts. |
| 4 | **No component-internal multi-coherence** framing | 15-6a | Builders see components as "boxes with labels" rather than micro-coherence events. |
| 5 | **No parametric echo CSS recipe** | 15-6b | Principle stated but no concrete padding values per zone density. Recipe beats checklist finding applies. |
| 6 | **No typographic progression per direction** | 13-6b | DEEPENING/OPENING/FOCUSING/RESOLVING defined for bg/spacing/borders but typography not specified per direction. |
| 7 | **No metaphor spatial coverage PA question** | D5-1 | A page can have metaphor in sections 1-3 and none in 4-8, undetected. |
| 8 | **No navigation metaphor CSS examples** | 12-6c | Every header looks the same regardless of page metaphor. |
| 9 | **No character-scale register inventory** (closed set) | 16-5c | Implicit registers not enumerated. Risk of micro-register proliferation like Flagship. |
| 10 | **Micro-gate architecture remains honor-system** | D4-3 | Builder self-checks have ~0% enforcement. Failures caught at full run rather than mid-build. |

---

*END OF COMPREHENSIVE CROSS-REFERENCE AUDIT*
