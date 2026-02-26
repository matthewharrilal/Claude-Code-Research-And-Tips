# Pipeline v3 Execution Audit — yegge-gas-town-2026-02-25

**Auditor:** Opus agent (execution audit specialist)
**Date:** 2026-02-25
**Scope:** Trace the ACTUAL execution of the Pipeline v3 build against the AUTHORITATIVE spec (MANIFEST.md + 16 artifact files). Identify every instance of information loss, compression loss, uninvoked artifacts, skipped steps, or manifest/checklist failures.

**Build result:** PA-05 3.5/4 (REFINE cycle), SHIP WITH FIXES. This is a SUCCESS by pipeline standards. The audit examines what worked, what was lost, and what was never invoked -- not to declare failure but to understand the gap between the spec's full potential and what was actually realized.

---

## A. Manifest Compliance (Steps 0-11)

| Step | MANIFEST Description | Executed? | Notes |
|------|---------------------|-----------|-------|
| **0** | Create output dir, copy EXECUTION-TRACKER-TEMPLATE, fill metadata | **YES** | Output dir `ephemeral/builds/yegge-gas-town-2026-02-25/` created. EXECUTION-TRACKER.md present with metadata filled (BUILD_DATE, CONTENT_PATH, SLUG, MODE, BUILDER_MODEL). |
| **1** | Verify all prerequisite files exist | **PARTIAL** | L0 summary says "All 16 artifact files + 5 reference files verified" but L2 detail checkboxes (PF-1a through PF-2e) are ALL UNCHECKED. The L0 claim contradicts L2 evidence. The pre-flight was CLAIMED but not TRACKED at granular level. |
| **2** | Spawn Content Analyst with raw content + protocol from artifact-routing.md | **YES** | Content Map produced: 70 lines (exceeds 30-50 target, acceptable). Content type: MIXED. Heterogeneity: HIGH. Metaphor viability: HIGH. |
| **3** | Determine mode: APPLIED or COMPOSED | **YES** | Mode: COMPOSED (correct -- content has both high heterogeneity AND metaphor viability). Documented in tracker. |
| **4** | Spawn Brief Assembler with Content Map + TC Brief Template + soul + thresholds + recipe + disposition | **YES** | Brief produced: 272 lines (exceeds 100-165 target by 65%). This is a POSITIVE deviation -- more compositional detail serves the builder. |
| **4a** | Brief Verification: BV-01 through BV-04 | **YES** | All 4 BV gates PASS on first attempt. 0 revision cycles needed. Per-gate results NOT recorded in L3 detail (BV-01 through BV-04 result fields in tracker show "___" placeholders). But L0 says "all PASS." |
| **5** | Spawn Builder (Opus STRONGLY recommended) with Brief + tokens.css + components.css + mechanism-catalog.md | **YES** | Builder: Opus. HTML produced: 2,671 lines initially, 2,931 post-REFINE. Conviction statement present. Self-evaluation present. |
| **6** | Serve HTML, capture screenshots at 3 viewports (1440, 1024, 768) | **PARTIAL** | 2 of 3 viewports captured. **1024px viewport MISSING** (DPR limitation). 53 screenshots at 1440px (24 + zones) and 768px (22). Animations disabled. fonts.ready awaited. DPR workaround applied (960x600 physical -> 1440x900 CSS). |
| **7** | Run Gate Runner programmatically | **YES** | 30 gates run: 22 PASS, 7 FAIL, 1 ENV. Gate results in structured JSON. |
| **8** | Spawn 9 PA Auditors (A-I) in parallel with screenshots + assigned questions ONLY | **YES** | All 9 deployed per pa-deployment.md assignments. Fresh-eyes principle upheld (no brief/intent leaked). Guardrails provided. Experiential pass enforced. 2 auditors (A, B) required respawn. |
| **9** | Spawn Integrative Auditor with all 9 reports | **YES** | Integrative report produced (21k). Note: Integrative ran in PARALLEL with auditors (received screenshots only, not reports). This deviates from spec (should receive all 9 reports). See Section F. |
| **10** | Spawn Weaver with integrative report + gate results | **YES** | Weaver scored PA-05 2.0/4 (initial), issued REFINE verdict. Both diagnostic and artistic impression outputs produced. |
| **11** | REFINE cycle | **YES** | Different Opus builder spawned. Received conviction + artistic impression ONLY (not gate scores). HTML updated 2,671->2,931 lines. Post-REFINE: 9 PA auditors re-deployed, Weaver re-scored PA-05 3.5/4, issued SHIP WITH FIXES. |

**Summary: 10/12 steps executed fully. 2 PARTIAL:**
1. Step 1 (pre-flight): Claimed complete but L2 checkboxes unfilled -- verification was done but not tracked at the specified granularity.
2. Step 6 (screenshots): 1024px viewport MISSING entirely. 2/3 viewports captured.

---

## B. Artifact Invocation

| Artifact File | Lines | READ by Orchestrator? | PASSED to Correct Agent? | Content USED in Output? | Information Lost? |
|--------------|-------|----------------------|-------------------------|------------------------|-------------------|
| **MANIFEST.md** | ~650 | YES | Orchestrator (self) | YES -- pipeline sequence followed | NO -- pipeline execution closely follows quickstart steps 0-11 |
| **artifact-builder-recipe.md** | ~828 | YES | Brief Assembler -> Builder (via brief) | PARTIALLY -- recipe format preserved in brief Tier 3-4, but Phase 3 deployment details (Step 3.1 6-channel framework, Step 3.2 zone heights, Step 3.3 density arc, Step 3.4b fractal coherence) were SUMMARIZED not included verbatim | YES -- see Section H. The recipe's worked deployment examples (CD-006 zone-by-zone reference, specific padding values, callout modulation tables) were compressed. Builder got the framework but not the concrete CSS examples. |
| **artifact-tc-brief-template.md** | ~223 | YES | Brief Assembler | YES -- brief follows template structure (4 tiers + content map appendix). Tier 1 verbatim. Tier 2 verbatim with calibration. Tier 3 synthesized. Tier 4 with content-specific observations. | MINIMAL -- template was followed closely. Brief is 272 lines (over the 100-165 target), which means MORE information survived than expected. |
| **artifact-identity-perception.md** | 556 | YES | Brief Assembler (world-descriptions) + Gate Runner (binary checks) | YES -- Tier 1 has all 10 soul world-descriptions. Tier 2 has perception thresholds as natural laws. Calibration table present. | NO -- dual-route pattern correctly applied. Builder saw world-descriptions, gate runner saw binary checks. |
| **artifact-routing.md** | ~900 | YES | Content Analyst (Phase 0 protocol) + Brief Assembler (Phase 1 assembly process) | YES -- Content Analyst produced a well-structured content map following the protocol. Brief Assembler followed the tier structure. | PARTIAL -- Content-Form Fit Gate (TOC #12) not explicitly referenced in tracker. Compression Physics S(x) survival function (TOC #8, #13) not explicitly applied or documented. See Section C. |
| **artifact-orchestrator.md** | ~1,100 | YES | Orchestrator (self) | YES -- pipeline sequence, mode selection, verdict logic all followed | MINOR -- GR-23 through GR-28 (orchestrator decision rules) not individually tracked in the execution tracker, though the orchestrator appears to have applied them implicitly (Opus builder selected, mode documented, etc.) |
| **artifact-value-tables.md** | ~262 | YES | Brief Assembler -> Builder (via brief) | YES -- zone backgrounds in the brief use exact hex values from the value tables. Z1=#FEF9F5, Z2=#EDE6DA, Z3=#1E1E1E, Z4=#F0EBE0, Z5=#E5DDD0. These match table pairs 6, 13, 18, 11. | NO -- value tables were correctly invoked and their values appear in both the brief and the HTML CSS custom properties. |
| **artifact-worked-examples.md** | ~80+ | UNKNOWN | Unknown | UNCERTAIN -- the worked examples show a previous Gas Town build (6 zones, 8,500 words). The current build used 5 zones on a shorter content version (~5,270 words). The examples may have been consulted but there is no evidence in the tracker. | UNCERTAIN -- the worked examples provide "what good looks like" reference points. Whether the Content Analyst or Brief Assembler actually read them is undocumented. |
| **gate-runner-core.js** | ~1,654 | YES | Orchestrator (Playwright execution) | YES -- gate-runner-core.js was copied to the build directory (73k file present). 30 gates executed via Playwright. | PARTIAL -- not all 42 gates were executed (30 of 42 run). See Section E. |
| **gate-runner-spec.md** | ~223 | YES | Orchestrator reference | YES -- gate specifications guided interpretation of results | NO |
| **gate-runner-preconditions.md** | 83 | UNKNOWN | Orchestrator | UNCERTAIN -- pre-flight claims all files verified but L2 checkboxes unfilled. Preconditions may have been checked informally. | UNCERTAIN |
| **gate-manifest.json** | ~200 | YES | Orchestrator | YES -- gate execution order followed the manifest's execution sequence | NO |
| **pa-questions.md** | ~431 | YES | PA Auditors (per assignment) | YES -- initial round: 82 questions answered (exceeds 69 minimum). REFINE round: 69 questions answered (exact match). | NO -- all 69 questions covered across both rounds. |
| **pa-deployment.md** | ~363 | YES | Orchestrator (deployment protocol) | YES -- 9 auditors deployed per the thematic groupings. Question assignments match MANIFEST Section 2 exactly. | MINOR -- see Section F for Integrative Auditor deviation. |
| **pa-weaver.md** | ~455 | YES | Weaver | YES -- Weaver scored PA-05 with sub-criteria, used calibration scale, issued verdict using the decision tree from pa-weaver.md. | NO |
| **pa-guardrails.md** | ~113 | YES | PA Auditors | YES -- fresh-eyes principle upheld (confirmed in tracker P3B-1a through P3B-1e). Visual verification principle enforced. | NO |
| **pa-guardrails-weaver.md** | ~59 | UNKNOWN | Weaver + Orchestrator | UNCERTAIN -- the tracker does not specifically confirm this file was routed to the Weaver. The Weaver's S-09 stacking analysis and Tier 1 equivalents suggest it was, but no explicit confirmation. | POSSIBLY -- if the Weaver did not receive this file, the anti-pattern context and revision degradation warnings were lost. |
| **EXECUTION-TRACKER-TEMPLATE.md** | ~200 | YES | Orchestrator | PARTIALLY -- template was copied and metadata filled, but L2/L3 detail fields remain largely unfilled (checkboxes unchecked, "___" placeholders). The template's hierarchical verification structure was not fully utilized. | YES -- the tracker's 4-level hierarchy (L0/L1/L2/L3) was designed to prevent exactly the kind of partial tracking observed. L0 shows everything complete, but L2 reveals gaps. |

**Summary: 14 of 18 artifacts confirmed READ and USED. 2 UNCERTAIN (worked examples, pa-guardrails-weaver.md). 2 PARTIALLY used (execution tracker template, gate-runner-core.js -- not all gates run).**

---

## C. Brief Assembly Quality

### Tier Structure Compliance

| Tier | Template Min Lines | Actual Lines (estimated) | Meets Minimum? |
|------|-------------------|-------------------------|----------------|
| Tier 1: IDENTITY | 12 (at 80%) | ~20 | YES -- all 10 soul world-descriptions present, verbatim from template |
| Tier 2: PERCEPTION | 6 (at 80%) | ~22 | YES -- 5 natural law statements + priority override section + worked examples |
| Tier 3: COMPOSITIONAL | 40 (at 80%) | ~100 | YES -- zone background table, multi-coherence per boundary, structural metaphor, density arc, content-form coupling, creative authority, CSS value table |
| Tier 4: DISPOSITION | 32 (at 80%) | ~45 | YES -- all 9 dispositions (D-01 through D-09) with content-specific observations and CSS property:value pairs |
| Content Map | 24 (at 80%) | ~70 | YES -- full content map appended (duplicated from p0-content-map.md) |
| **Total** | ~114 minimum | **~272** | **YES** -- 272 lines, 2.4x minimum |

### Brief Quality Assessment

**STRENGTHS:**
1. Recipe format PRESERVED -- verbs like "Build," "Create," "Deploy," not "Verify," "Fail if"
2. Zone backgrounds LOCKED from value tables with explicit hex values and RGB deltas
3. Multi-coherence specified BOUNDARY BY BOUNDARY with channel shift counts (4, 6, 5, 3)
4. Structural metaphor mapped to CSS custom properties by CONCEPT (--loading-dock, --dispatch-floor, etc.)
5. Each disposition has at least one specific CSS property:value pair
6. Perception calibration included with full range (15 subtle, 25 confident, 50 dramatic)
7. Content-form coupling specified per zone (register -> CSS implications)

**WEAKNESSES:**
1. **S(x) survival function NOT explicitly applied or documented.** The MANIFEST and artifact-routing.md specify that compression follows S(x) = 1/(1+C(x)). There is no evidence the Brief Assembler computed or applied this function. The brief's 272-line size suggests the assembler erred toward inclusion rather than compression, which is the right instinct but the survival function was designed to GUIDE that decision, not replace it.
2. **Content-Form Fit Gate (artifact-routing.md TOC #12) not explicitly checked.** This gate verifies content-form alignment before passing the brief to the builder. Not mentioned in the tracker.
3. **Content-Volume-to-Zone-Count Map (artifact-routing.md TOC #11) partially applied.** The content map recommended 5 zones for ~5,270 words. The map says 5,000-10,000 words should have 5-7 zones. 5 zones is at the low end, which is appropriate for a ~5,270 word piece. But this was the Content Analyst's judgment -- no explicit reference to the volume-to-zone map.

### Information Loss from Content Map to Brief

The content map (70 lines) was appended VERBATIM to the brief. Therefore: **zero information loss from content map to brief**. This is a strength -- the brief preserves the full content map rather than summarizing it.

However, the content map's 4 content tensions were only partially reflected in Tier 3/4:
- Tension #1 (Single Agent vs Colony): FULLY reflected -- drives the factory metaphor
- Tension #2 (Chaos vs Control): PARTIALLY reflected in D-03 authority framing
- Tension #3 (Accessibility vs Exclusivity): REFLECTED in D-03 ("the content gatekeeps -- let the design gatekeep too")
- Tension #4 (Philosophy vs Practice): FULLY reflected -- drives the density arc and zone architecture

---

## D. Builder Input Completeness

### What the Builder ACTUALLY Received vs MANIFEST Spec

| Input | MANIFEST Spec | Actually Received? | Notes |
|-------|--------------|-------------------|-------|
| Execution Brief | ~100-165 lines | YES: 272 lines | 1.65x-2.72x over target. More is better for the builder. |
| tokens.css | 183 lines | YES | Direct file route, uncompressed |
| components.css | ~1,195 lines | YES | Direct file route, uncompressed |
| mechanism-catalog.md | 1,200+ lines | YES | Direct file route, uncompressed |
| Value tables | ~262 lines | UNCERTAIN | Brief CONTAINS value table hex values, but it is unclear if artifact-value-tables.md was passed as a SEPARATE file to the builder. The brief's Zone Background Assignments table functionally replaces this for background colors, but the value table also has spacing progressions and typography scales. |
| CD-006 reference | ~1,200 lines (optional) | UNCERTAIN | Tracker P2-1f shows "___" (unfilled). The brief references CD-006 in Step 2 creative decisions section, but it is unclear if the full HTML was passed to the builder. |
| Content source | varies | YES | The raw content markdown was at CONTENT_PATH |
| Gate thresholds | NOT received (by design) | CONFIRMED NOT received | Tracker P2-1g: builder did NOT see gates |
| Prohibition list | NOT received (by design) | CONFIRMED NOT received | Tracker P2-1h: builder did NOT see raw prohibitions |

### Total Builder Input Lines

| Component | Lines | Source |
|-----------|-------|--------|
| Execution Brief | 272 | p1-execution-brief.md |
| tokens.css | 183 | Direct file |
| components.css | ~1,195 | Direct file |
| mechanism-catalog.md | ~1,200 | Direct file |
| Value tables | ~262 (uncertain) | May or may not have been separate |
| CD-006 | ~1,200 (uncertain) | May or may not have been passed |
| **Total (confirmed)** | **~2,850** | -- |
| **Total (if all optional)** | **~4,312** | -- |
| **MANIFEST target** | **~3,600** | -- |

The builder received approximately 2,850-4,312 lines of input, bracketing the MANIFEST's ~3,600 estimate. The uncertainty is whether value tables and CD-006 were passed as separate files.

---

## E. Gate Coverage

### Specified vs Actually Run

| Category | Specified in gate-manifest.json | Actually Run (Initial) | Actually Run (REFINE) | Notes |
|----------|--------------------------------|----------------------|---------------------|-------|
| REQUIRED | 20 | 15 | 12 | GR-07 (not run either round), GR-48 "not run (meta-gates)", GR-05/GR-08/GR-15/GR-60/GR-61 not re-run in REFINE. GR-62/GR-64 run post-screenshot/post-weaver. |
| RECOMMENDED | 9 | 5 | 6 | GR-07, GR-49 not run |
| ADVISORY | 7 | 4 | 5 | GR-05b not run, GR-12 absorbed |
| BRIEF VERIFICATION | 4 | 4 | 0 | BV-01 through BV-04 run in Phase 1 only (correct) |
| DIAGNOSTIC | 2 | 0 | 0 | GR-33, GR-34 (mode detection) never executed |
| **TOTAL** | **42** | **30** | **25** | |

### Gates NEVER Run

| Gate | Name | Tier | Why Skipped | Impact |
|------|------|------|-------------|--------|
| **GR-07** | Font Loading | RECOMMENDED | Not mentioned in results | LOW -- fonts loaded correctly per visual evidence |
| **GR-33** | APPLIED Mode Indicator | DIAGNOSTIC | "Not run (mode detection)" | NONE -- mode was determined by orchestrator in Phase 0.5 |
| **GR-34** | COMPOSED Mode Indicator | DIAGNOSTIC | "Not run (mode detection)" | NONE -- same as GR-33 |
| **GR-48** | Gate Coverage Check | REQUIRED | "Not run (meta-gates)" | **HIGH** -- GR-48 is a meta-gate that verifies all other required gates were run. By not running it, there is no programmatic verification that required gates were complete. This is a REQUIRED gate that was skipped. |
| **GR-49** | Result Integrity | RECOMMENDED | "Not run (meta-gates)" | MEDIUM -- verifies gate result JSON is well-formed |
| **GR-05b** | Cold Colors | ADVISORY | Not mentioned | LOW -- advisory only |

**CRITICAL FINDING: GR-48 (Gate Coverage Check) is REQUIRED but was never run.** Per gate-manifest.json verdict logic, GR-48 FAIL = INCOMPLETE. The pipeline should not have proceeded without verifying gate coverage. The MANIFEST explicitly states "GR-48 FAIL = INCOMPLETE." By skipping this gate, the pipeline lost its self-verification mechanism.

### Were Preconditions Checked?

**UNCERTAIN.** The tracker's Pre-Flight section has no L2 checkboxes filled. `gate-runner-preconditions.md` (83 lines of text-based pre-build checks) is not explicitly referenced in the tracker. The orchestrator appears to have checked prerequisites informally (all files were available and the pipeline ran) but the formal precondition gate structure was not documented.

### Were BV-01 through BV-04 Run on the Brief?

**YES.** The tracker records "BV-01 through BV-04 all PASS" at L0, with 0 revision cycles. However, the L2 detail (per-gate results, per-tier line counts, zone pair deltas, verb ratio, suppressor scan results) are all "___" placeholders.

---

## F. PA Protocol Compliance

### 9-Auditor Deployment

| Check | Compliant? | Evidence |
|-------|-----------|---------|
| All 9 auditors deployed per pa-deployment.md assignments | **YES** | Tracker P3B-1: question assignments match MANIFEST Section 2 exactly. A=9 questions, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6 = 69 total. |
| Fresh-eyes principle (screenshots + assigned questions ONLY) | **YES** | Tracker P3B-1a through P3B-1e all checked. No brief, content map, or build intent leaked. |
| Guardrails (pa-guardrails.md) included | **YES** | Tracker P3B-1c confirmed. |
| Experiential pass (Section 0) enforced | **YES** | All 9 auditors have experiential passes. 9/9 convergence on dark zone invisibility (initial round). |
| All 69 questions answered | **YES** | Initial round: 82 answered (exceeds 69 -- some auditors answered sub-questions). REFINE round: 69 exact. |
| PA Auditors did NOT receive pa-guardrails-weaver.md | **UNCERTAIN** | Not explicitly tracked. This is a critical information isolation requirement. |

### Integrative Auditor Deviation

**DEVIATION FOUND:** Per MANIFEST Step 9, the Integrative Auditor should receive "all 9 reports." However, the tracker at P3B-4a states: "Integrative Auditor received screenshots (no PA reports -- ran in parallel)."

The Integrative Auditor ran in PARALLEL with the 9 auditors, receiving only screenshots. This means:
- The Integrative Auditor could NOT synthesize the 9 individual reports
- Cross-auditor pattern detection was limited to the Integrative's own observations
- Convergence analysis (e.g., 9/9 on dark zone) was performed by the ORCHESTRATOR, not the Integrative

**Impact:** MODERATE. The Integrative report (21k) still provided valuable gestalt synthesis from fresh-eyes screenshots, but its designed role -- finding cross-auditor patterns, convergence, contradictions, and blind spots -- was not fulfilled. The orchestrator compensated by doing this manually when compiling the Weaver's input.

**Why this happened:** Running Integrative in parallel saves ~15 minutes (it doesn't wait for all 9 auditors to complete). This is a reasonable time-cost tradeoff, but it deviates from the spec. The MANIFEST should either be updated to reflect this pattern or the pipeline should wait.

---

## G. Orchestrator Decision Rules (GR-23 through GR-28)

These 6 rules were reclassified from gate-runner to orchestrator in Wave 3. They are text/config checks, not DOM inspection.

| Rule | Description | Applied? | Evidence |
|------|-------------|----------|---------|
| **GR-23** | Builder Model = Opus | **YES** | Tracker BUILDER_MODEL = Opus. Both initial and REFINE builders were Opus. |
| **GR-24** | Content Heterogeneity Assessment | **YES** | Content map classified heterogeneity as HIGH. Mode set to COMPOSED. |
| **GR-25** | Suppressor Count = 0 in Brief | **IMPLICIT** | BV-04 (suppressor scan) PASS implies 0 suppressors. But GR-25 specifically checks the constraint layer -- this may be the same check or a separate one. Not explicitly documented as GR-25. |
| **GR-26** | Brief Size Check | **IMPLICIT** | Brief is 272 lines. The tracker does not explicitly reference GR-26 or a brief size limit. BV-01 checks tier line budgets, which is related but not identical. |
| **GR-27** | Builder Gate-Free | **YES** | Tracker P2-1g confirms builder did NOT receive gate thresholds. |
| **GR-28** | Recipe Format in Brief | **IMPLICIT** | BV-03 checks recipe:checklist verb ratio >= 3:1. PASS implies recipe format. But GR-28 as a named rule is not explicitly referenced. |

**Summary:** GR-23-28 were applied IMPLICITLY through the BV gates and orchestrator behavior, but none were explicitly tracked by their GR-ID. This is acceptable since they overlap with BV gates, but it means the tracker cannot prove GR-25, GR-26, and GR-28 were specifically checked as distinct orchestrator decision rules.

---

## H. Information Loss Map

| Source Artifact | Key Information | Reached Builder? | Reached HTML? | Loss Type |
|----------------|----------------|-----------------|---------------|-----------|
| **artifact-builder-recipe.md** Step 3.1 | "6-channel framework" -- builder deploys 6 channels that shift across zone boundaries | YES (via brief Tier 3 multi-coherence section) | PARTIALLY -- initial build had weak Z3->Z4 transition (1 channel). REFINE improved to 3 channels. Edge transitions (Z1->Z2, Z4->Z5) still only 2 channels. | COMPRESSION -- the recipe's detailed deployment guidance was compressed to a summary. The builder understood channels conceptually but didn't achieve minimum 3 per boundary at all edges. |
| **artifact-builder-recipe.md** Step 3.4b | "Fractal coherence" -- components should adapt per zone (callout padding 20px generous -> 12px compressed) | YES (brief mentions component modulation) | YES -- REFINE PA shows "STRONG YES" on PA-63 fractal zoom coherence. | NONE -- this information propagated successfully. |
| **artifact-builder-recipe.md** Step 3.4c | "Builder signal declarations" -- `<!-- SCROLL-REVEALS: true -->` comment | NO (not in brief) | NO | COMPLETE LOSS -- this builder-facing instruction (MUST-12) was not included in the brief. The builder did not add the scroll-reveals declaration. This may have contributed to the initial dark zone invisibility (if scroll-triggered reveals were used without the declaration, screenshot validation could not distinguish intentional hidden content from bugs). |
| **artifact-builder-recipe.md** "Typographic spectacle requirement" | "At least 1 typographic moment exceeding normal hierarchy -- 28-32px pull quote, 36-48px display numerals" | PARTIALLY (brief D-04 mentions scale break `font-size: 28px` pull-quote) | YES -- "ENTERING THE FACTORY FLOOR" threshold divider is a typographic spectacle moment cited by multiple auditors | RECOVERED -- the brief compressed this to a single D-04 mention, but the builder created typographic moments anyway. |
| **artifact-builder-recipe.md** "Layout variety requirement" | "At least 2 distinct layout patterns. Single-column must not exceed 60% of zones." | YES (brief: "Layout variety: single-column must not exceed 50% of zones") | PARTIALLY -- Auditor E (PA-37) notes some grids but the dark zone has mostly single-column. Post-REFINE, E gives PASS on PA-37 but notes layout variety is "adequate, not abundant." | PARTIAL COMPRESSION -- the brief correctly stated the requirement, but the builder's execution was at the minimum threshold. |
| **artifact-builder-recipe.md** "Component adoption requirement" | "Check components.css BEFORE writing custom CSS. Aim for 8+ component library classes." | YES (brief: "Target 8+ components") | PARTIALLY -- GR-46 reports 6 component types (initial) and 5 (REFINE). Below the 8+ target. | SPECIFICATION COMPLIANCE GAP -- the information reached the builder but was not fully executed. |
| **artifact-builder-recipe.md** Step 2.7 | "Select hover behavior patterns" | NO (not in brief Tier 3) | MINIMAL -- REFINE weaver notes DELIGHT 4/10, "no hover states revealing content." | COMPLETE LOSS -- hover behavior selection was not passed to the builder. This is a direct contributor to the low DELIGHT score. |
| **artifact-builder-recipe.md** Step 2.8 | "Select transition type vocabulary -- at least 3 distinct transition types" | YES (brief Tier 3 specifies 3 types: light/medium/heavy, mapped to boundaries) | YES -- transitions present (threshold dividers at Z2->Z3 and Z3->Z4, lighter at edges) | NONE -- this propagated successfully. |
| **artifact-value-tables.md** Section 2 | "10 zone padding progressions" -- specific padding values for zone density progressions | UNCERTAIN (may have been in builder's file set but not proven) | PARTIALLY -- zone paddings are present and varied, but the SPECIFIC progressions from the value tables were not explicitly applied. Builder used custom spacing. | UNCERTAIN -- if the value tables were not passed as a separate file, these 10 spacing progressions were lost. The brief only references "spacing scale (4-96px in 4px increments)." |
| **artifact-value-tables.md** Sections 3-5 | Typography scales, transition values, hover state values | UNCERTAIN | MINIMAL -- typography varies across zones but doesn't follow the pre-computed scales precisely | PROBABLE LOSS -- same uncertainty as above. |
| **artifact-worked-examples.md** | Complete worked examples from previous Gas Town build: content map, brief, build, gate results | UNCERTAIN | N/A | UNCERTAIN -- if the Content Analyst and Brief Assembler did not read the worked examples, they missed reference points for "what good looks like." The current build's content map is SIMPLER than the worked example (5 zones vs 6, 5,270 words vs 8,500) which is appropriate for different content but raises the question of whether the examples were consulted. |
| **artifact-routing.md** "Compression Physics" S(x) | S(x) = 1/(1+C(x)) survival function | NO (not applied to brief) | N/A | COMPLETE LOSS -- the survival function was designed to guide compression decisions. It was never applied. The Brief Assembler instead used judgment (which produced a good result at 272 lines, but the survival function was designed to make this systematic). |
| **pa-guardrails-weaver.md** | Anti-patterns, revision degradation, S-09 stacking, Tier 1 equivalents, Tier 5 provisional scoring | UNCERTAIN to Weaver | N/A | UNCERTAIN -- if the Weaver did not receive this file, the calibrated anti-pattern detection and S-09 stacking analysis were performed from memory rather than specification. |

---

## I. Compression Ratios

| Stage | Lines | Compression Ratio | Notes |
|-------|-------|-------------------|-------|
| Raw content source (extraction) | ~1,324 (per worked example) | -- | Starting material |
| Content Map (Phase 0 output) | 70 | 18.9:1 from source | Within acceptable range. Content maps are by design compressed. |
| Execution Brief (Phase 1 output) | 272 | 0.26:1 from content map (EXPANSION) | The brief is 3.9x LARGER than the content map. This is correct -- the brief adds identity, perception, compositional frameworks, and disposition to the content map. Not a compression step. |
| Builder CSS output (Phase 2) | ~1,100 CSS lines (estimated from 2,931 HTML lines) | -- | CSS lines are generated, not compressed from input |
| **Total pipeline compression: source -> content map** | **18.9:1** | Within acceptable range (not in 50:1 danger zone) |
| **Brief assembly: content map -> brief** | **Expansion** | Brief ADDS layers, not compresses |
| **Builder input -> HTML output** | **~2,850 input -> 2,931 HTML** | ~1:1 | Builder consumed its inputs effectively |

**The compression ratio is NOT in the danger zone (>50:1).** The pipeline's two-stage design (source -> content map at ~19:1, then EXPANSION into the brief with added layers) avoids the catastrophic compression that plagued the Flagship experiment (50:1+). The content map compresses content; the brief then RE-EXPANDS with compositional intelligence. This is the pipeline's key architectural improvement.

---

## J. What Was Never Invoked

### Dead or Uninvoked Specifications

| Specification | File | Description | Status |
|--------------|------|-------------|--------|
| **S(x) Survival Function** | artifact-routing.md TOC #8, #13 | S(x) = 1/(1+C(x)) -- governs compression from input to brief | NEVER INVOKED. The Brief Assembler produced a good brief without it. |
| **Content-Form Fit Gate** | artifact-routing.md TOC #12 | Verify content-form alignment before passing brief to builder | NEVER INVOKED or at least never documented as checked. |
| **GR-33/34 Mode Detection** | gate-manifest.json | Diagnostic gates reporting APPLIED vs COMPOSED indicators in built HTML | NEVER RUN. Mode was determined by orchestrator, not detected in output. |
| **GR-48 Gate Coverage Check** | gate-manifest.json | Meta-gate verifying all REQUIRED gates were executed | NEVER RUN. This is the most significant omission -- it's a REQUIRED gate. |
| **GR-49 Result Integrity** | gate-manifest.json | Meta-gate verifying JSON result structure | NEVER RUN. |
| **GR-07 Font Loading** | gate-manifest.json | Verify all fonts loaded correctly | NEVER RUN. |
| **GR-05b Cold Colors** | gate-manifest.json | Check for sub-perceptual cold color presence | NEVER RUN. |
| **Builder signal declarations (Step 3.4c)** | artifact-builder-recipe.md | `<!-- SCROLL-REVEALS: true -->` if page uses scroll-triggered animations | NEVER COMMUNICATED to builder, therefore never deployed. |
| **Hover behavior patterns (Step 2.7)** | artifact-builder-recipe.md | Builder selects hover behavior vocabulary | NEVER INCLUDED in brief. |
| **1024px viewport screenshots** | MANIFEST Step 6, pa-deployment.md | 3 viewports: 1440, 1024, 768 | 1024px NEVER CAPTURED (DPR limitation). |
| **pa-manifest.md** | Per-run tracking template | Per-run auditor report checklist, PA-05 cross-validation status | UNCERTAIN if used. Not referenced in tracker. |
| **Experiment protocol** | artifact-orchestrator.md later sections | Active experiments, toggles, evidence requirements | NOT RELEVANT (no experiments active this run). |
| **Suppressor management** | artifact-orchestrator.md later sections | 20 historical suppressors, phased removal | NOT RELEVANT (all suppressors already inactive). |

### Not Dead, Just Implicit

| Specification | Status |
|--------------|--------|
| GR-23 through GR-28 (orchestrator decision rules) | Applied implicitly through BV gates and orchestrator behavior, but not tracked by ID |
| pa-guardrails-weaver.md | Probably read by Weaver but not confirmed in tracker |
| Experiment gates (GR-36-39) | Correctly excluded (moved to experiment protocol) |
| Policy gates (GR-40-42) | Correctly excluded (moved to orchestrator verdict logic) |
| Verdict gates (GR-29-32) | Correctly excluded (moved to orchestrator verdict logic) |

---

## K. Execution Tracker Integrity

The EXECUTION-TRACKER-TEMPLATE.md was designed with 4 levels (L0/L1/L2/L3) to prevent information loss during tracking. Here is how well it was utilized:

| Level | Purpose | Completeness |
|-------|---------|-------------|
| **L0** (Pipeline Phase) | "Did the phase complete?" | **HIGH** -- all 16 L0 phases marked with statuses and notes |
| **L1** (Phase Steps) | "Did each step execute?" | **MODERATE** -- most L1 steps have statuses, but some remain unchecked |
| **L2** (Step Checklists) | "Did each specific thing happen?" | **LOW** -- Pre-Flight L2 checkboxes ALL unchecked. Phase 0-2 L2 checkboxes ALL unchecked (showing "[ ]" and "___" placeholders). Phase 3+ L2 is more complete. |
| **L3** (Item Details) | "Evidence, values, notes" | **LOW** -- most L3 agent detail tables unfilled (Model "___", Start "___", End "___", Output Path "___"). BV gate detail fields unfilled. |

**The tracker tells TWO stories depending on which level you read:**
- **L0 story:** Everything completed successfully. All phases run, all agents spawned, PA-05 3.5/4 achieved.
- **L2 story:** Significant gaps in tracking. Pre-flight verification not documented at item level. Phase 0-2 agent details missing. BV gate per-tier counts missing. Builder routing not confirmed at L2.

This is not a failure of the PIPELINE -- it is a failure of the TRACKING. The pipeline executed well (PA-05 3.5/4 proves it). But the tracker, designed to provide complete audit trail, was only populated at the summary level. This means future debugging or reproduction will have less evidence than designed.

---

## L. Summary Findings

### What Worked Well

1. **Brief quality is excellent.** 272 lines, recipe format, all 4 tiers present, zone backgrounds locked from value tables, multi-coherence specified boundary-by-boundary, structural metaphor mapped to CSS custom properties by concept. The brief is the pipeline's strongest artifact.

2. **PA protocol is near-flawless.** 9 auditors deployed correctly, fresh-eyes principle upheld, experiential passes enforced, all 69 questions answered, cross-validation complete. The Mode 4 PA caught the dark zone invisibility (9/9 convergence) that drove the REFINE cycle.

3. **REFINE cycle achieved +1.5 PA-05 improvement** (2.0 -> 3.5), the largest single-cycle improvement in pipeline history. The Weaver's artistic impression + conviction-only protocol worked -- the REFINE builder fixed structural issues without seeing gate numbers.

4. **Compression ratio is healthy.** 18.9:1 from source to content map, then EXPANSION into the brief. No catastrophic 50:1+ compression. The two-stage architecture works.

5. **Artifact routing is correct.** Identity as world-description to builder, binary checks to gate runner. Perception as natural laws to builder, as thresholds to gate runner. Fresh-eyes to PA auditors. The dual-route pattern is functioning.

### What Was Lost

1. **Hover behavior vocabulary (Step 2.7) never reached the builder.** Direct contributor to DELIGHT 4/10 -- the weakest emotional register.

2. **Builder signal declarations (Step 3.4c) never reached the builder.** May have contributed to the initial dark zone visibility failure.

3. **S(x) survival function never applied.** The Brief Assembler produced a good brief anyway, but the designed compression governance was bypassed.

4. **1024px viewport never captured.** 2/3 viewports only. Responsive testing at the middle breakpoint was entirely absent.

5. **GR-48 (gate coverage) never run.** The pipeline's self-verification mechanism was skipped. A REQUIRED gate.

6. **Execution tracker L2/L3 unfilled.** The audit trail is incomplete at the detail level. Future reproduction will be harder.

7. **Component adoption below target.** 5-6 component types used vs 8+ target. The builder created custom CSS for elements that exist in the component library.

### The Central Trade-off

The pipeline achieved **PA-05 3.5/4** (CEILING tier, approaching FLAGSHIP) and **Tier 5 9/9** -- an excellent result. The information losses identified above are real but they did not prevent success. The question is whether addressing them would push the result from CEILING (3.5/4) to FLAGSHIP (4.0/4):

- **Hover behaviors** would directly improve DELIGHT (currently 4/10)
- **Component adoption** at 8+ would improve POLISHED consistency
- **1024px viewport** would verify responsive behavior at the middle breakpoint
- **Edge zone multi-coherence** (currently 2 channels at Z1->Z2 and Z4->Z5) would strengthen spatial composition
- **Dark zone internal relief** (Fix #5 from REFINE weaver) would address the strongest auditor concern (6/10)

The gap from CEILING to FLAGSHIP is not about pipeline failure -- it is about the small accumulation of these information losses. Each one is individually minor. Together, they define the distance from 3.5/4 to 4.0/4.

---

*Pipeline execution audit complete. 2026-02-25.*
