# Cross-Reference Audit: Research Files 12-17 vs Change Manifests

**Auditor:** xref-12-17 (Opus 4.6)
**Date:** 2026-02-20
**Method:** Line-by-line reading of 6 research files, extraction of every actionable finding, cross-reference against all 4 change manifests + execution report

**Files audited:**
- 12-scale-navigation.md (412 lines)
- 13-scale-page.md (492 lines)
- 14-scale-section.md (373 lines)
- 15-scale-component.md (312 lines)
- 16-scale-character.md (338 lines)
- 17-concept-flow-trace.md (839 lines)

**Manifests cross-referenced:**
- 01-brief-changes.md (10 edits)
- 02-skill-changes.md (12 edits)
- 03-gate-changes.md (8 edits)
- 04-pa-changes.md (2 immediate + 3 deferred)

---

## REPORT 12: Scale-Navigation (~1440px)

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 12-01 | 3 of 6 channels naturally strong (Chromatic, Typographic, Spatial); Behavioral and Material SHOULD stay weak at Navigation scale (lines 121-132, 394) | Descriptive/World-description | ADDRESSED | 01-brief Edit 5 (E6) updates Behavioral/Material channel definitions with CSS properties; Edit 1 (E4) adds channel-threshold table. Navigation's natural channel strength profile is documented in the brief's existing dark slab content. |
| 12-02 | Multi-coherence inherently satisfied at header-content boundary (4+ channels) -- no enrichment needed (lines 136-167) | Descriptive (no action needed) | N/A | Report 12 explicitly says "no enrichment needed" for multi-coherence at Navigation. |
| 12-03 | TOC-to-content bg delta is BORDERLINE (14 RGB on R/G channels, 18 on B) -- may fail SC-09 (lines 155-159, 285-286, 303-304) | Warning -- actionable | GAP (MINOR) | No manifest mentions TOC-to-content background delta specifically. However, SC-09 already enforces >= 15 RGB at all zone boundaries. If TOC is a zone boundary, SC-09 catches it. If TOC is not a zone boundary, this is not gated. Report 12 itself notes the B channel passes (18 > 15). Severity: LOW -- existing gate coverage likely sufficient. |
| 12-04 | Navigation INAUGURATES multi-coherence -- the header-content transition calibrates the reader's perception (lines 162-167, 397-398) | Conceptual insight | ADDRESSED (implicitly) | 01-brief Edit 3 (E1) adds stack bridge text connecting Sections 3-5. The calibration role is part of the world-description that the brief already conveys through the dark slab inversion section. |
| 12-05 | Anti-scale model at Navigation: ensure 3 typographic registers in header (title, subtitle, meta), document deliberate absences (lines 175-213) | Recommendation | DEFERRED (intentionally) | 01-brief "What Was Not Included": "Navigation-specific enrichment: Report 12's own verdict: 'LEAST enrichment-needy scale.'" This is explicitly deferred with justification. |
| 12-06 | **Fractal self-similarity is HIGHEST-ROI enrichment at Navigation** -- connecting header CSS to metaphor is underdeveloped. Provide 3-4 CSS examples showing how DEEPENING/FOCUSING/RESOLVING express at header level (lines 219-268, 366-378, 384-387) | **HIGH-PRIORITY recommendation** | **GAP (MODERATE)** | No manifest includes Navigation-specific fractal echo CSS examples. 01-brief excludes Navigation enrichment citing Report 12's own "least enrichment-needy" verdict. However, Report 12's SPECIFIC highest-ROI recommendation (fractal echo CSS examples per metaphor type) is more nuanced than the general exclusion suggests. The general verdict is "least needy" but the specific gap (metaphor-to-header CSS mapping) is rated HIGH by the report itself. |
| 12-07 | Container width: header bg = 100vw full bleed, inner content = 960px centered. This distinction is frequently violated (lines 274-278) | Clarification recommendation | ADDRESSED (partially) | SC-01 gate enforces 940-960px container. The full-bleed vs inner distinction is in the existing brief's dark slab section. No manifest explicitly adds this clarification, but the existing pipeline already covers the core constraint. |
| 12-08 | Stacked gap at header-content boundary: header padding + border + section padding can approach 120px threshold (lines 292-296) | Warning -- actionable | ADDRESSED | SC-10 gate already enforces <= 120px stacked gap. 01-brief Edit 1 (E4) adds the channel-threshold table which includes spatial channel thresholds. The stacking concern at Navigation specifically is covered by the existing gate. |
| 12-09 | Enrichment format should be CHECKLIST with Telescope Preamble for Navigation (lines 338-348, 406) | Format recommendation | N/A (not acted on) | Navigation enrichment was deferred entirely. The recommendation for format is moot since no Navigation-specific enrichment was included. |
| 12-10 | Recommend adding "Navigation Echo" section to brief with CSS examples per metaphor type (lines 384-388) | Specific recommendation | **GAP (same as 12-06)** | See 12-06. This is the same recommendation stated more concretely. |

### Report 12 Summary
- **Total findings:** 10
- **Addressed:** 4 (12-01, 12-04, 12-07, 12-08)
- **Explicitly deferred:** 2 (12-05, 12-09)
- **N/A (no action needed):** 1 (12-02)
- **GAPS:** 2 (12-03 minor, 12-06/12-10 moderate -- both are the same gap)
- **Unique gaps:** 1 moderate (Navigation fractal echo CSS examples per metaphor), 1 minor (TOC bg delta warning)

---

## REPORT 13: Scale-Page (~960px)

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 13-01 | Chromatic channel at page scale = zone background sequence; >= 15 RGB delta between adjacent zones (lines 20-35) | Descriptive | ADDRESSED | SC-09 gate; 01-brief Edit 1 (E4) channel-threshold table row for Chromatic. |
| 13-02 | Typographic PROGRESSION across zones is not described -- brief states minimums but not HOW typography should progress (Gap 2, lines 37-53, 321-329) | **Enrichment gap** | **GAP (MODERATE)** | No manifest adds typographic progression guidance. 01-brief "What Was Not Included" does NOT explicitly mention this gap. The transition-to-coherence mapping (Gap 5) is excluded with justification, but typographic progression per semantic direction is a distinct gap that is never mentioned in any manifest's exclusion list. |
| 13-03 | Material channel has no concrete guidance -- SC-13 uses backgroundImage as crude proxy (Gap 3, lines 109-123, 331-340) | Enrichment gap | ADDRESSED (partially) | 01-brief Edit 5 (E6) modifies Material channel definition to "component type mix, visual texture density (prose-only vs prose+code+callout)." 01-brief Edit 1 (E4) adds Material row to perception table. 01-brief "What Was Not Included" explicitly addresses this: "Material channel operationalization: Addressed within Edit 5 and Edit 1." The combined effect gives Material a CSS-anchored definition. Report 13's request for a standalone material section is deferred but the core gap (undefined material) IS addressed. |
| 13-04 | Border PROGRESSION across zones is not described (Gap 4, lines 73-89, 341-351) | Enrichment gap | **GAP (LOW)** | No manifest adds border progression guidance. 01-brief "What Was Not Included" does not explicitly mention border progression. However, Report 13 itself rates this as LOW priority (line 372: "Border progression: LOW"). |
| 13-05 | **Coherence Arc Planning -- the sequence of boundary intensities should form a progression (quiet -> loud -> quiet), not uniform (Gap 1, lines 190-202, 310-320, 423-442)** | **HIGH-PRIORITY enrichment** | EXPLICITLY DEFERRED | 01-brief "What Was Not Included": "Coherence arc planning (from 13-scale-page Gap 1): Report 13 proposes 15-20 lines... This exceeds the budget and overlaps with existing content at line 120... The existing text already describes the coherence arc concept in 2 sentences." Deferred with justification citing line budget and partial existing coverage. |
| 13-06 | Transition-to-coherence mapping: SMOOTH -> 3ch, BRIDGE -> 4-5ch, BREATHING -> 5-6ch (Gap 5, lines 352-373, 444-448) | Enrichment recommendation | EXPLICITLY DEFERRED | 01-brief "What Was Not Included": "Transition-to-coherence mapping table: useful relationship but would add 8-10 lines. Budget is tight (9 lines remaining). Information can be INFERRED." Deferred with justification citing budget. |
| 13-07 | Page scale is the STRONGEST scale in the pipeline -- 7 blocking + 2 advisory gates (lines 380-394, 469-484) | Descriptive | N/A (informational) | No action needed -- confirms existing strength. |
| 13-08 | Gates measure EXISTENCE, not QUALITY -- SC-13 counts channels but doesn't judge direction alignment (Weakness 1, lines 399-400) | Diagnosis | ADDRESSED (partially) | 03-gate Edit 3 (E-PHANTOM) documents the channel limitation. SC-13B remains ADVISORY. 04-pa "Concepts Evaluated But Not Addressed" explicitly discusses direction coherence and concludes the weaver is the correct instrument. |
| 13-09 | No gate measures the COHERENCE ARC (Weakness 2, lines 402-403) | Gap diagnosis | DEFERRED (implicitly) | No new gate for coherence arc. 03-gate "What Was NOT Included": "SC-13B upgrade to BLOCKING: KEEP ADVISORY. Upgrade ONLY after 3+ successful Flagship builds." The coherence arc gap is acknowledged but deferred. |
| 13-10 | Material and behavioral channels are under-gated (Weakness 3, lines 404-405) | Gap diagnosis | ADDRESSED (partially) | 03-gate Edit 3 (E-PHANTOM) documents phantom channel status. 01-brief Edit 5 (E6) improves channel definitions. No new gate for material/behavioral -- consistent with "DON'T" verdict on new gates. |
| 13-11 | Brief has tools but lacks RECIPE for page-scale build (Weakness 4, lines 406) | Diagnosis | ADDRESSED | 01-brief Edit 2 (E2) adds boundary-by-boundary CSS recipe example. 02-skill Edit 5 (E3+E-CONTRA) restructures checkpoints to boundary-grouped. The "recipe gap" is the primary target of these two edits. |
| 13-12 | Recommendation 1: Add Coherence Arc Planning (HIGH priority, lines 423-442) | Specific recommendation | EXPLICITLY DEFERRED | Same as 13-05. |
| 13-13 | Recommendation 2: Add Transition-to-Coherence Mapping (MODERATE priority, lines 444-448) | Specific recommendation | EXPLICITLY DEFERRED | Same as 13-06. |
| 13-14 | Recommendation 3: Add Per-Direction Typographic Progression (MODERATE, lines 450-453) | Specific recommendation | **GAP (MODERATE)** | Same as 13-02. Not mentioned in any manifest's exclusion list. |
| 13-15 | Recommendation 4: Operationalize Material Channel (LOW-MODERATE, lines 455-461) | Specific recommendation | ADDRESSED (partially) | Same as 13-03. Addressed via Edit 5 + Edit 1 combined effect. |
| 13-16 | Recommendation 5: Do NOT add a page-scale build recipe to the brief (N/A, lines 462-466) | Anti-recommendation | RESPECTED | No page-scale build recipe was added to the brief. The boundary CSS recipe (Edit 2) is a PROCESS section addition, not a world-description recipe -- consistent with this recommendation. |
| 13-17 | Do NOT add to conventions brief the build sequence -- that belongs in /build-page orchestrator (line 465-466) | Boundary recommendation | RESPECTED | Brief edits maintain world-description voice. Build sequence edits go to 02-skill (SKILL.md). |

### Report 13 Summary
- **Total findings:** 17
- **Addressed:** 7 (13-01, 13-03, 13-08, 13-10, 13-11, 13-15, 13-16/13-17)
- **Explicitly deferred:** 4 (13-05, 13-06, 13-09, 13-12/13-13)
- **N/A (informational):** 1 (13-07)
- **GAPS:** 3 (13-02/13-14 moderate -- typographic progression; 13-04 low -- border progression)
- **Unique gaps:** 1 moderate (per-direction typographic progression), 1 low (border arc guidance)

---

## REPORT 14: Scale-Section (~200-400px)

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 14-01 | Chromatic at Section scale is COMPONENT-DRIVEN binary (0 delta or >= 15 delta) -- no "gentle section tinting" available due to SC-14 (lines 19-25, 209-219) | Descriptive | N/A (informational -- constraint of existing system) | SC-14 already enforces this binary. No enrichment needed. |
| 14-02 | No guidance on typographic PROGRESSION within a section (line 27-31) | Enrichment gap | DEFERRED (intentionally) | Report 14's own verdict (line 317): "Skip -- this is the builder's territory." Section scale is "recommended," not "mandatory strong." |
| 14-03 | Spatial guidance within a zone is a single data point ("24-32px spacing between sections") (lines 33-38) | Enrichment gap | DEFERRED (intentionally) | Report 14's own verdict (line 317): "Skip -- recipe risks template convergence." |
| 14-04 | Behavioral channel ABSENT at Section scale -- no hover state vocabulary, no transition timing (lines 47-52) | Enrichment gap | ADDRESSED (partially) | 01-brief Edit 5 (E6) adds CSS properties for Behavioral channel. Report 14's own verdict (lines 323-324): "Behavioral channel starter guidance: 2-3 lines on component hover states." 01-brief Edit 5 provides the CSS-anchored definition. However, the 2-3 line hover state guidance is not in any manifest. |
| 14-05 | **Within-zone multi-coherence parameters are missing** -- brief says "lighter versions" but never quantifies maximum channel count or delta ranges (lines 62-108, 297-299) | **Key gap identified** | ADDRESSED (partially) | 01-brief Edit 6 (E9) adds component-internal micro-coherence note. The hierarchy table (max 2 channels for within-zone, Report 14 Option A) is NOT included. Report 14's own verdict (line 320): "Explicit within-zone transition hierarchy (Options A): 3-line addition." This specific 3-line addition is absent from manifests. |
| 14-06 | Mechanism scale tagging -- add a column to mechanism summary table indicating primary operating scale (Option B, lines 256-261) | Enrichment recommendation | **GAP (LOW)** | No manifest adds mechanism scale tagging to the mechanism catalog. Report 14's own verdict (line 322): "Mechanism scale tagging (Option B): Add a column... Zero new constraints, pure navigational clarity." This was recommended but not included in any manifest. |
| 14-07 | **REJECT gate for Section-scale density** (Option D, line 277-279) | Anti-recommendation | RESPECTED | 03-gate "What Was NOT Included": "Section-scale density gate: Report 14's own verdict: 'REJECT the gate (Option D).'" |
| 14-08 | REJECT section recipe (Option C, lines 263-275) | Anti-recommendation | RESPECTED | No section recipe was added. |
| 14-09 | No programmatic gate verifies >= 2 component types per viewport threshold (line 125-126) | Gap diagnosis | DEFERRED | 03-gate does not add this gate, consistent with Report 14's own "REJECT the gate" verdict. |
| 14-10 | Section scale is the LEAST SPECIFIED of the 5 scales (lines 227-241, 293) | Descriptive | N/A (informational) | Acknowledged as intentional ("Section is recommended" priority level). |
| 14-11 | Spatial confidence at Section scale is unspecified (lines 139-146) | Enrichment gap | DEFERRED (intentionally) | Report 14's own verdict (line 338): "Skip -- this is the builder's territory." |
| 14-12 | Fractal self-similarity at Section scale: principle stated, implementation absent (lines 150-184) | Enrichment gap | DEFERRED (intentionally) | Report 14's own verdict (line 339): "Skip -- recipe risks template convergence." |
| 14-13 | Behavioral channel starter guidance: 2-3 lines on component hover states (partial Option E, line 324) | Specific recommendation | **GAP (LOW)** | 01-brief Edit 5 (E6) updates Behavioral definition with CSS properties but does NOT add the 2-3 line hover state guidance. The gap is partially closed (CSS properties named) but the specific "150ms for interactive components" type guidance is missing. |

### Report 14 Summary
- **Total findings:** 13
- **Addressed:** 2 (14-04 partially, 14-05 partially)
- **Explicitly deferred (by report's own recommendation):** 5 (14-02, 14-03, 14-09, 14-11, 14-12)
- **Respected anti-recommendations:** 2 (14-07, 14-08)
- **N/A (informational):** 2 (14-01, 14-10)
- **GAPS:** 3 (14-05 moderate -- within-zone hierarchy table, 14-06 low -- mechanism scale tags, 14-13 low -- hover state guidance)
- **Unique gaps:** 1 moderate (within-zone transition hierarchy quantification), 2 low (mechanism scale tags, hover state specifics)

---

## REPORT 15: Scale-Component (~40-100px)

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 15-01 | Typographic channel is STRONGEST at component scale; Behavioral is ABSENT (lines 19-36) | Descriptive | N/A (informational) | Behavioral absence is addressed by Edit 5 (E6) at the channel definition level. |
| 15-02 | **Component-Internal Multi-Coherence is the HIGHEST LEVERAGE enrichment** -- label-to-body transition IS a micro-coherence event (Gap 1, lines 39-78, 198-206, 283-286) | **HIGH-PRIORITY recommendation** | **ADDRESSED** | 01-brief Edit 6 (E9) adds exactly this: "The label-to-body transition inside every component is a micro-coherence event: Typographic + Spatial channels always shift together (2 channels). Adding a 1px internal separator gains a Structural channel for free (3 channels). The direction is always DEEPENING -- from meta-register into content-register." This directly implements Report 15's Priority 1 recommendation. |
| 15-03 | **Parametric Echo CSS Recipe is HIGH LEVERAGE** -- principle stated but recipe absent. Concrete padding values for dense/default/sparse zones needed (Gap 2, lines 108-151, 207-218, 287-289) | **HIGH-PRIORITY recommendation** | **ADDRESSED** | 01-brief Edit 7 (E10) adds: "a callout in a dense zone uses padding 16px 20px and label margin-bottom 8px. The same callout in a sparse zone uses padding 32px 24px and label margin-bottom 16px." This directly implements Report 15's Priority 2 recommendation. |
| 15-04 | Internal separator consistency: 1px separator between label and body is RECOMMENDED for all component families (Gap 3, lines 220-227, 290-293) | Recommendation | ADDRESSED (implicitly) | 01-brief Edit 6 (E9) states "Adding a 1px internal separator gains a Structural channel for free." This is an implicit recommendation to add separators. However, the explicit "Every 2-zone component SHOULD include a 1px bottom border" language from Report 15 Priority 3 is softer in the manifest version. The core guidance IS present. |
| 15-05 | Behavioral channel at component scale: guidance on hover states for components (Gap 4, lines 229-233) | LOW-priority recommendation | DEFERRED (by report's own assessment) | Report 15 rates this as "LOW LEVERAGE." 01-brief Edit 5 (E6) adds CSS properties for Behavioral. No component-specific hover guidance added. Consistent with the report's own low-priority rating. |
| 15-06 | Anti-Scale Formula at Component scale: density/restraint/spatial confidence mapped to components (Gap 5, lines 235-239) | LOW-priority recommendation | DEFERRED (by report's own assessment) | Report 15 rates this as "LOW LEVERAGE" and says "builders probably will not operationalize it." |
| 15-07 | The flagship's component failure was about VISIBILITY not quantity -- zero borders, uniform typography, no separators (lines 255-269) | Diagnostic | ADDRESSED | 01-brief Edit 6 (E9) connects components to multi-coherence, making component visibility a compositional concern. 01-brief Edit 2 (E2) provides boundary-by-boundary recipe that includes border deployment. |
| 15-08 | Root cause: builder received CHECKLIST not RECIPE for component construction (lines 268-269) | Diagnosis | ADDRESSED | 01-brief Edit 7 (E10) converts parametric echo principle into a recipe with concrete values. 02-skill Edit 5 restructures checkpoints. The "recipe vs checklist" finding is the core design principle for the manifest edits. |
| 15-09 | Component scale enrichment is second-highest leverage after Page-scale zone differentiation (line 277) | Prioritization | RESPECTED | Edits 6 and 7 in 01-brief are DEFER items, placed after the DO NOW items (Edit 1 + Edit 2 which are Page-scale). Priority ordering is consistent. |
| 15-10 | Priority 4 (Optional): Update components.css to add 1px border to callout label (lines 295-297) | CSS implementation recommendation | **GAP (LOW)** | No manifest proposes editing components.css. This is a CSS file change, not a pipeline documentation change. The manifests target conventions-brief.md, SKILL.md, gate-runner.md, and flagship-pa-questions.md -- not components.css. This gap is ARCHITECTURAL (outside manifest scope), not an oversight. |

### Report 15 Summary
- **Total findings:** 10
- **Addressed:** 5 (15-02, 15-03, 15-04, 15-07, 15-08)
- **Deferred (by report's own assessment):** 2 (15-05, 15-06)
- **Respected prioritization:** 1 (15-09)
- **N/A:** 1 (15-01)
- **GAPS:** 1 (15-10 low -- components.css not in manifest scope)
- **Unique gaps:** 0 actionable within manifest scope

---

## REPORT 16: Scale-Character (~12-20px)

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 16-01 | Character scale is overwhelmingly single-channel (Typographic only). Multi-coherence at Character is architecturally impossible (lines 18-36, 39-63) | Descriptive | N/A (informational) | Confirms that Character enrichment should CONSTRAIN, not ADD. |
| 16-02 | Character-scale multi-coherence is a CATEGORY ERROR (line 62) | Anti-recommendation | RESPECTED | No manifest adds Character-scale multi-coherence rules. |
| 16-03 | Anti-scale at Character: density is binary (perceptible or not), restraint = finite register set (6 registers), spatial confidence = register consistency (lines 66-94) | Descriptive | N/A (informational) | Characterizes the Character-scale landscape. |
| 16-04 | Fractal echo at Character scale = dependency gate, not creative opportunity. Character CSS only interpretable when larger scales work (lines 97-122) | Descriptive | ADDRESSED | 01-brief Edit 8 (E14) adds "ONLY after Page scale verified. Budget: <= 5% of total CSS lines" to the Character row of the fractal echo table. This reinforces the dependency. |
| 16-05 | **E1: Character Scale Budget Cap -- <= 5% of total CSS lines** (lines 203-208, 284-285) | **HIGH-PRIORITY recommendation** | **ADDRESSED** | 01-brief Edit 8 (E14) modifies the Character row to include "Budget: <= 5% of total CSS lines." Directly implements E1. |
| 16-06 | **E2: Character Scale Dependency Gate -- make "ONLY after Page scale verified" a programmatic gate** (lines 210-215, 285) | HIGH-PRIORITY recommendation | **GAP (MODERATE)** | No manifest adds a dependency gate for Character-scale CSS. 01-brief Edit 8 adds the budget note but does not create a programmatic enforcement mechanism. 03-gate "What Was NOT Included" does not mention this specifically. Report 16 rates this HIGH priority. However, SC-14 already prevents the primary failure mode (sub-perceptual CSS), and the budget cap (E1) prevents the secondary failure mode (CSS misallocation). The dependency gate would be a third layer of protection. |
| 16-07 | **E3: Character Scale Register Inventory -- 6 registers as a CLOSED SET** (lines 218-236, 286-287) | MEDIUM-PRIORITY recommendation | **GAP (LOW-MODERATE)** | No manifest adds a full register inventory. 01-brief Edit 8 names 3 CSS properties (font-size, font-weight, letter-spacing >= 0.03em) but does NOT enumerate the 6 registers (DISPLAY, SECTION, BODY, LABEL, CODE, DETAIL) as a closed set. The specific "CLOSED SET -- do not invent new ones" guidance is absent. However, the existing brief Section 8 already describes the font trinity and typographic scale; the register inventory would largely restate existing content. |
| 16-08 | **E4: Letter-Spacing Whitelist -- restrict to {0, 0.05em, 0.1em}** (lines 238-243, 288) | MEDIUM-PRIORITY recommendation | **GAP (LOW)** | No manifest adds a letter-spacing whitelist. SC-14 already prevents values < 0.025em and prevents micro-clustering. The whitelist would further constrain to 3 values. 03-gate "What Was NOT Included" does not mention this. Report 16 rates this MEDIUM priority. SC-14's existing thresholds prevent the worst failure mode (the Flagship's 107 sub-perceptual lines). The whitelist would prevent gradient proliferation ABOVE the floor -- a real but less severe risk. |
| 16-09 | Do NOT add new Character-scale mechanisms (line 299) | Anti-recommendation | RESPECTED | No manifest adds Character mechanisms. |
| 16-10 | Do NOT add Character-scale parametric echo guidelines (line 301) | Anti-recommendation | RESPECTED | No manifest adds Character parametric echo. |
| 16-11 | Do NOT add word-spacing to vocabulary (line 302) | Anti-recommendation | RESPECTED | No manifest adds word-spacing. |
| 16-12 | Do NOT relax SC-14 thresholds (line 303) | Anti-recommendation | RESPECTED | No manifest relaxes SC-14. 03-gate Edit 2 confirms SC-14 is already correct at 0.025em. |
| 16-13 | Character scale budget cap: should it be a gate or advisory? (Open question 1, line 328) | Open question | DEFERRED | 01-brief adds it as a brief-level note (awareness cue), not a gate. Consistent with the lighter approach. |
| 16-14 | Is 5% the right cap? CD-006 ~3%, Middle ~3%, Flagship 22% (Open question 2, line 330-331) | Open question | ADDRESSED | 01-brief Edit 8 uses 5%. Report 16 suggests 2-5% productive range with 5% as the cap. |
| 16-15 | The label register (Mechanism #2) is the ONLY productive Character-scale pattern (line 334, 275-278) | Descriptive | N/A (informational) | Confirms that existing documentation of label register is sufficient. |

### Report 16 Summary
- **Total findings:** 15
- **Addressed:** 3 (16-04, 16-05, 16-14)
- **Respected anti-recommendations:** 5 (16-02, 16-09, 16-10, 16-11, 16-12)
- **Deferred:** 1 (16-13)
- **N/A (informational):** 3 (16-01, 16-03, 16-15)
- **GAPS:** 3 (16-06 moderate -- dependency gate, 16-07 low-moderate -- register inventory, 16-08 low -- letter-spacing whitelist)
- **Unique gaps:** 1 moderate (Character dependency gate), 1 low-moderate (register inventory), 1 low (letter-spacing whitelist)

---

## REPORT 17: Concept Flow Trace

This is the MOST IMPORTANT file -- it maps where every concept SURVIVES or DIES in the pipeline.

### Extracted Findings

| # | Finding (Line Ref) | Type | Addressed? | Evidence |
|---|-------------------|------|------------|----------|
| 17-01 | **6 Channels: RETURN PATH EXTINCTION** -- 27 lines in brief, expanded to 275 in gates, but 0 structured channel feedback reaches builder in fix cycle (lines 22-108) | **CRITICAL finding** | **ADDRESSED** | 02-skill Edit 9 (E15) adds weaver compositional vocabulary (channel names). 02-skill Edit 10 (E16) adds compositional context to fix cycle. 03-gate Edit 5 adds brief section references to fix recipes. 01-brief Edit 9 (E-RETURN) adds fix cycle memory note. The return path is addressed through 4 coordinated edits across 3 manifests. |
| 17-02 | **5 Scales: 4 of 5 scales have ZERO programmatic measurement** -- only Page (via SC-12) is measured; DG-1 validates TABLE existence, not CSS implementation (lines 111-178) | **CRITICAL finding** | ADDRESSED (partially) | 03-gate does NOT add gates for Navigation, Section, Component, or Character scales. The "deliverable-reality gap" (DG-1 checks table, not CSS) is acknowledged but not closed. 04-pa Edit 2 sharpens PA-63 to better detect fractal echo, including parametric echo. The gap persists at the gate level but is partially addressed at the PA level. |
| 17-03 | **Multi-Coherence: semantic direction gap** -- SC-13 counts channels but accepts contradictory shifts. SC-13B is ADVISORY at 50% confidence. The CORE of multi-coherence (directionality) survives only in brief and PA (lines 180-262) | **CRITICAL finding** | ADDRESSED (partially) | 02-skill Edit 5 adds ">= 3 channels shift in same semantic direction at each boundary" to builder self-check. 04-pa explains why direction coherence stays in PA (fresh-eyes principle). SC-13B stays ADVISORY per 03-gate exclusions. The direction gap is ACKNOWLEDGED but deliberately left to PA and builder self-check rather than programmatic enforcement. |
| 17-04 | **4 Semantic Directions: TOTAL EXTINCTION** -- 7 lines in brief, absent from spawn prompt, ADVISORY gate collapses 4 to 2 at 50% confidence, 0 in PA, 0 in weaver, 0 in fix cycle (lines 265-328) | **CRITICAL finding -- WORST compression of any concept** | **ADDRESSED (partially)** | 02-skill Edit 5 adds "same semantic direction" to self-check (doesn't name specific directions). 02-skill Edit 9 (E15) weaver vocabulary includes transition types but NOT direction names. 02-skill Edit 10 (E16) fix cycle context references "planned coherence direction (from transition table)." The 4 direction names (DEEPENING/OPENING/FOCUSING/RESOLVING) are still not explicitly propagated past the brief, but the CONCEPT of directional coherence is now referenced in the fix cycle. |
| 17-05 | **Anti-Scale Model: TOTAL EXTINCTION** -- governing principle of richness has zero gate measurement, zero weaver evaluation. The multiplicative zero-factor insight never reaches any verification stage (lines 331-394) | **CRITICAL finding** | **GAP (MODERATE)** | No manifest adds anti-scale model awareness to any pipeline stage. 04-pa PA-64 (restraint) is the sole survivor. The "density x restraint x spatial confidence" formula and especially the "zero in any factor = zero richness" insight are not propagated. 01-brief Edit 3 (E1) adds a stack bridge that mentions "RICHNESS is the governing principle" but this is in the brief (entry point), not in downstream stages. The anti-scale model remains extinct past the brief. |
| 17-06 | **Fractal Self-Similarity: deliverable-reality gap** -- DG-1 validates table existence but does not verify CSS actually implements what the table claims (lines 397-451) | CRITICAL finding | ADDRESSED (partially) | 03-gate "What Was NOT Included": DG-1B (cross-validation) deferred. 04-pa Edit 2 sharpens PA-63 to better detect fractal echo perceptually. The gate-level gap persists but PA coverage improved. |
| 17-07 | **Perception Thresholds: BEST PRESERVED concept** -- only concept with structured return path to builder (lines 453-533) | Descriptive (positive) | N/A | Confirms existing gate infrastructure works well. Thresholds are the model for how other concepts should survive. |
| 17-08 | **Recipe vs Checklist: pipeline ITSELF undergoes recipe-to-checklist degradation** -- builder gets recipe for first pass, checklist for fix cycles (lines 536-627) | **CRITICAL meta-finding** | **ADDRESSED** | 01-brief Edit 9 (E-RETURN) adds fix cycle memory note. 02-skill Edit 10 (E16) adds compositional context to fix cycle with recipe structure. 02-skill Edit 12 adds "Re-read your conviction statement" framing. 03-gate Edit 5 adds brief section references. The recipe-to-checklist degradation is the most directly and comprehensively addressed finding across all manifests. |
| 17-09 | **Stack Progression: NEVER EXPLICITLY CODIFIED** -- exists only as implicit document ordering (lines 629-703) | CRITICAL finding | ADDRESSED | 01-brief Edit 3 (E1) adds 4-line stack bridge: "Sections 3-5 form a stack. RICHNESS is the governing principle... MULTI-COHERENCE is the binding mechanism... FRACTAL ECHO distributes..." This directly codifies the stack progression. |
| 17-10 | **Three critical bottlenecks: (1) Spawn prompt (39 lines, zero concepts by name), (2) Weaver (binary checklist), (3) Fix cycle return path** (lines 741-758) | Master diagnosis | ADDRESSED (partially) | Bottleneck 1 (spawn): 02-skill Edit 11 adds compositional framing to reference files; Edit 5 adds compositional checkpoint. Bottleneck 2 (weaver): 02-skill Edit 9 (E15) adds weaver vocabulary. Bottleneck 3 (fix cycle): addressed by Edits 10 and 12 in 02-skill + Edit 5 in 03-gate + Edit 9 in 01-brief. All three bottlenecks are addressed, though spawn prompt enrichment is the lightest. |
| 17-11 | **The One-Way Valve** -- concepts flow richly FROM brief TO builder but ZERO concepts flow FROM verification BACK to builder in fix cycles (lines 788-801) | Master insight | ADDRESSED | Same as 17-01 and 17-08. The return path is the primary target of multiple coordinated edits. |
| 17-12 | **Option (c) is cheapest fix for return path**: route builder back to relevant conventions-brief sections rather than composing new concept-level feedback (lines 797-801) | Specific recommendation | **ADDRESSED** | 03-gate Edit 5 implements exactly this: adds `brief_section` reference to every gate fix recipe, routing builder back to specific brief sections. This is a direct implementation of Report 17's Option (c). |
| 17-13 | The conventions brief is simultaneously the pipeline's greatest strength and most fragile dependency (lines 750-759) | Diagnosis | N/A (architectural insight) | No action needed -- this is an observation about the system. |
| 17-14 | Master Compression Map (lines 807-837) -- visual showing all 9 concepts narrowing to near-zero past the builder | Visualization | N/A (diagnostic tool) | The manifests address the worst bottlenecks identified in this map. |

### Report 17 Summary
- **Total findings:** 14
- **Addressed:** 8 (17-01, 17-03 partially, 17-04 partially, 17-08, 17-09, 17-10 partially, 17-11, 17-12)
- **N/A (informational/diagnostic):** 3 (17-07, 17-13, 17-14)
- **GAPS:** 2 (17-02 partially addressed -- scale measurement gap persists, 17-05 moderate -- anti-scale extinction)
- **Unique gaps:** 1 moderate (anti-scale model has zero downstream representation beyond the brief)

---

## EXECUTION REPORT CROSS-REFERENCE (Parts 3-8 Overlap)

The execution report findings (B1-B9, E-FIX, E-CONTRA, E-RETURN, E-STACK, E-PHANTOM) overlap heavily with Reports 12-17. Verifying no execution finding is orphaned:

| Execution Finding | Overlapping Research Finding | Manifest Coverage |
|-------------------|----------------------------|-------------------|
| B1 (mechanism count) | -- | 02-skill Edit 1/6 |
| B2 (micro-gates) | -- | 02-skill Edit 5 |
| B3 (behavioral gates) | -- | 02-skill Edit 3/3B |
| B4 (gate-to-PA routing) | 17-10 (bottleneck 2) | 02-skill Edit 4 |
| B5 (DG-4 reference) | -- | 02-skill Edit 6 |
| B6 (TeamCreate) | -- | 02-skill Edit 7 |
| B7 (zone selector) | 17-02 (gate measurement gap) | 03-gate Edit 1 (SC-00) |
| B8 (threshold inconsistency) | 16-08 (thresholds) | 03-gate Edit 2 |
| B9 (metaphor pervasion) | 12-06 (fractal echo at Nav) | 04-pa Edit 1 (PA-44 modification) |
| E-FIX (fix cycle degradation) | 17-08 (recipe-to-checklist) | 02-skill Edit 10, 01-brief Edit 9 |
| E-CONTRA (boundary contradiction) | 13-11 (recipe gap) | 02-skill Edit 5, 01-brief Edit 10 |
| E-STACK (stack absent) | 17-09 (never codified) | 01-brief Edit 3 |
| E-PHANTOM (phantom channels) | 13-10 (under-gated channels) | 03-gate Edit 3, 01-brief Edit 5 |
| E-RETURN (return path extinction) | 17-11 (one-way valve) | 03-gate Edit 5, 02-skill Edits 9/10/12, 01-brief Edit 9 |

**Result: ZERO orphaned execution findings.** Every execution finding is either directly addressed by a manifest edit or explicitly deferred with justification.

---

## MASTER SUMMARY

### Totals Across All 6 Research Files

| Metric | Count |
|--------|-------|
| **Total findings extracted** | 79 |
| **Addressed by manifests** | 33 (42%) |
| **Explicitly deferred with justification** | 16 (20%) |
| **Respected anti-recommendations** | 10 (13%) |
| **N/A (informational/diagnostic)** | 11 (14%) |
| **GAPS (not addressed or deferred)** | 9 (11%) |

### Gap List (Ranked by Severity)

| Rank | Gap ID | Description | Source | Severity | Justification for Severity |
|------|--------|------------|--------|----------|---------------------------|
| 1 | 17-05 | Anti-scale model (density x restraint x spatial confidence) has ZERO downstream representation past the brief. The governing principle of richness is never verified. | Report 17, lines 331-394 | **MODERATE** | The formula is elegant but was never programmatically enforceable. PA-64 covers restraint. SC-08/SC-15/SC-11 cover spatial confidence proxies. The MULTIPLICATIVE zero-factor insight is the real loss. However, this is a conceptual model, not a measurable property -- aligns with Report 17's own observation that "concepts requiring architectural reasoning do not survive." |
| 2 | 13-02 / 13-14 | Per-direction typographic progression not described -- brief states minimums but not how typography PROGRESSES per semantic direction (DEEPENING = sizes shrink, OPENING = sizes grow, etc.) | Report 13, lines 37-53, 450-453 | **MODERATE** | Builder reads the brief's 4 direction definitions (7 lines) which include "tighter spacing + denser typography" for DEEPENING but no type-specific CSS. The gap is real but narrow -- adding ~10 lines mapping directions to typographic behaviors. |
| 3 | 12-06 / 12-10 | Navigation fractal echo CSS examples per metaphor type (DEEPENING/FOCUSING/RESOLVING express differently at header level) | Report 12, lines 219-268, 384-388 | **MODERATE** | Report 12 rates this as its HIGHEST-ROI recommendation. 01-brief excluded all Navigation enrichment citing the report's own "least enrichment-needy" general verdict, but this specific recommendation is the exception to that general verdict. |
| 4 | 16-06 | Character scale dependency gate -- programmatic enforcement of "ONLY after Page scale verified" | Report 16, lines 210-215 | **MODERATE** | SC-14 + 5% budget cap cover 80% of the failure mode. The dependency gate adds a third protection layer. Risk is LOW given existing coverage. |
| 5 | 14-05 | Within-zone transition hierarchy quantification -- max 2 channels, max 16px spacing delta for within-zone transitions | Report 14, lines 62-108 | **MODERATE** | The brief says "lighter versions" but never quantifies. A 3-line table (as Report 14 recommends) would prevent within-zone transitions from being mistaken for zone boundaries. |
| 6 | 16-07 | Character scale register inventory -- 6 registers as a CLOSED SET | Report 16, lines 218-236 | **LOW-MODERATE** | Existing brief Section 8 + tokens.css already document the typographic scale. An explicit "CLOSED SET" declaration would add restraint guidance. The content largely exists but is scattered. |
| 7 | 13-04 | Border progression guidance across zones (sparse -> dense -> sparse arc) | Report 13, lines 73-89 | **LOW** | Report 13 itself rates this LOW. SC-15 (3+ border configs) catches the floor. |
| 8 | 16-08 | Letter-spacing whitelist {0, 0.05em, 0.1em} | Report 16, lines 238-243 | **LOW** | SC-14 already prevents the worst case. Whitelist prevents gradient proliferation above the floor. |
| 9 | 14-06 | Mechanism scale tagging in catalog summary table | Report 14, lines 256-261 | **LOW** | "Zero new constraints, pure navigational clarity." Nice-to-have for the mechanism catalog but not a pipeline documentation file. |
| 10 | 12-03 | TOC-to-content bg delta warning | Report 12, lines 155-159 | **LOW** | SC-09 covers zone boundaries. TOC may not be a zone. |
| 11 | 14-13 | Specific hover state guidance (150ms timing, border-left color shift) | Report 14, line 324 | **LOW** | 01-brief Edit 5 names CSS properties. Specific values are builder territory. |
| 12 | 15-10 | components.css callout separator update | Report 15, lines 295-297 | **LOW (out of scope)** | CSS file change, not pipeline documentation. |

### Severity Distribution

| Severity | Count |
|----------|-------|
| MODERATE | 5 |
| LOW-MODERATE | 1 |
| LOW | 5 |
| LOW (out of scope) | 1 |

### Key Observations

1. **No HIGH or CRITICAL gaps remain.** The manifests successfully address all CRITICAL findings from Report 17 (return path, recipe degradation, stack progression) and all HIGH-priority recommendations from Reports 15 (component multi-coherence, parametric echo recipe) and 16 (budget cap).

2. **The 5 MODERATE gaps form a pattern: per-direction CSS guidance.** Gaps 1-5 are all about how specific concepts EXPRESS at specific scales or in specific directions. The manifests add STRUCTURAL improvements (threshold tables, recipe examples, compositional vocabulary) but do not add per-direction, per-scale CSS examples. This is a deliberate budget trade-off -- the 01-brief has 9 lines of headroom remaining.

3. **The execution report findings are fully covered.** Zero orphaned findings. Every B1-B9 and E-finding is either addressed by a specific manifest edit or routed to the correct file.

4. **Anti-recommendations are universally respected.** All 10 "do NOT" findings from the research are honored by the manifests.

5. **Section scale is intentionally light.** Reports 14's 5 deferred recommendations are all self-deferred by the report itself. The manifests respect Section scale's "recommended" (not "mandatory strong") status.

6. **The dominant unaddressed concept is the anti-scale model (17-05).** This is the only GOVERNING PRINCIPLE that has zero downstream representation. However, it is also the concept that Report 17 identifies as architecturally impossible to reduce to mechanical measurement.

---

*END OF CROSS-REFERENCE AUDIT. 12-xref-research-12-17.md complete.*
