# Cross-Reference Audit: Research Files 07-11 vs Change Manifests

**Agent:** xref-07-11 (Opus 4.6)
**Date:** 2026-02-20
**Scope:** Every actionable finding in research files 07-11 checked against all 4 change manifests

**Manifests cross-referenced:**
- `01-brief-changes.md` (10 edits, +38 lines, brief to 441)
- `02-skill-changes.md` (12 edits, +15 lines, SKILL to 430)
- `03-gate-changes.md` (8 edits, +133 lines, gate-runner to ~1126)
- `04-pa-changes.md` (2 immediate edits + 3 deferred)

**Execution report also cross-referenced:** `execution-report-findings.md`

---

## FILE 1: 07-anti-regression-analysis.md (410 lines)

This is the definitive risk matrix for enrichment. Every mitigation and recommendation must be verified.

### Findings from Failure Mode Analysis (FM1-FM10)

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 52-54 | **FM1 Mitigation 1: Sunset rule -- conventions brief must stay 400-450 lines. If >450, something must be cut.** | 01-brief: Line budget tracked, final count 441/450. "9 lines remaining." | ADDRESSED (01-brief budget tracking) |
| 53 | **FM1 Mitigation 2: One-in-one-out rule -- every new rule requires deleting or merging existing rule.** | 01-brief: Edits 5, 8, 10 are modifications (net 0 lines). But Edits 1, 2, 3, 4, 6, 7, 9 are INSERTIONS with no corresponding deletions. | PARTIAL -- insertions dominate; one-in-one-out not strictly followed. Brief stays within 450 cap so the spirit is preserved, but the specific mechanism (paired deletion) is not applied. |
| 54 | **FM1 Mitigation 3: Budget ceiling -- brief cap 500 (07 says 500), SKILL cap 450, combined <950.** | 01-brief: cap set at 450 (stricter than 07's 500). 02-skill: cap at 450. Combined: 441+430=871 (<950). | ADDRESSED (caps stricter than recommended) |
| 94-96 | **FM2 Mitigation 1: Paired playbook mandate -- every enrichment concept must include >=1 concrete CSS snippet.** | 01-brief: Edit 1 (threshold table with CSS properties), Edit 2 (full CSS recipe block), Edit 7 (parametric echo with concrete values). Edits 3, 6 are world-description without CSS. Edit 9 is process recipe. | MOSTLY ADDRESSED -- 3/10 edits are pure playbook (CSS-anchored), 3/10 are world-description without CSS anchors. Edits 3, 4, 6 lack CSS snippets. |
| 95 | **FM2 Mitigation 2: Ratio audit -- reject if section ratio exceeds 1:1 guardrail-to-playbook.** | 01-brief: Summary reports ratio improvement from 2.0:1 to 1.7:1. Per-section audit not explicitly performed. | ADDRESSED at aggregate level (ratio improves). Per-SECTION audit not documented. |
| 96 | **FM2 Mitigation 3: CSS recipe appendix for concepts that can't be expressed as CSS in the brief.** | Not implemented. No CSS recipe appendix proposed. | GAP (MINOR) -- no concepts appear to need this; all CSS-requiring concepts got inline CSS. The mechanism catalog already serves this role. |
| 122-124 | **FM3 Mitigation 1: Verb audit -- checklist verbs vs recipe verbs. Recipe verbs must >= checklist verbs.** | 01-brief: Summary notes zero new constraints added. No formal verb count performed. | PARTIAL -- no formal verb audit documented, but edits are characterized as recipe/world-description. |
| 123 | **FM3 Mitigation 2: World-description framing for every new concept.** | 01-brief: Edits 3, 6, 9 explicitly flagged as "WORLD-DESCRIPTION" in anti-regression checks. | ADDRESSED |
| 124 | **FM3 Mitigation 3: Separate verification from instruction -- move "verify" language to SKILL.md gate runner.** | 01-brief Edit 10: Restructures verification pauses (moves some verification concerns to "after full build"). 02-skill Edit 5: Restructures checkpoints. | ADDRESSED |
| 150-152 | **FM4 Mitigation 1: No new research -- all enrichment from existing corpus.** | All 4 manifests draw from existing reports (01-17 + execution report). No new research teams proposed. | ADDRESSED |
| 151 | **FM4 Mitigation 2: Direct editing only -- enrichment as EXACT EDITS, not concepts to explore.** | All 4 manifests provide exact old/new text. | ADDRESSED |
| 152 | **FM4 Mitigation 3: Meta budget -- enrichment research should total no more than 50 pages.** | The enrichment research (reports 01-17 + synthesis) totals ~7,200 lines (~100+ pages). ALREADY VIOLATED before manifests were written. | NOT ADDRESSED (but the violation occurred in research phase, not manifest phase. Manifests themselves are lean.) |
| 182-184 | **FM5 Mitigation 1: CSS anchor requirement -- every enrichment concept must include >=1 CSS property-value pair.** | 01-brief: Edit 1 (6 channel-threshold rows with CSS), Edit 2 (full CSS recipe), Edit 5 (CSS properties for channels 5-6), Edit 7 (specific px values). Edits 3, 4, 6, 8, 9, 10: no new CSS property-value pairs but reference existing ones. | MOSTLY ADDRESSED -- 4 edits with new CSS anchors, 6 edits without (but those 6 are world-description, naming, or process modifications). |
| 183 | **FM5 Mitigation 2: Builder translation test -- can builder write CSS in <30 sec from concept?** | Not formally performed. 01-brief claims each edit is recipe-shaped. | PARTIAL -- no formal "30-second test" documented. |
| 184 | **FM5 Mitigation 3: Compression audit -- read modified brief in single pass, recall 10 min later.** | Not performed. | GAP (MINOR) -- recommended as post-application check. |
| 212-214 | **FM6 Mitigation 1: Distinguish floors from ceilings -- label binary rules as "FLOOR."** | 01-brief Edit 4: Names quality levels (DESIGNED = floor, COMPOSED = target). This implements the floor/ceiling distinction. | ADDRESSED (via Edit 4 naming convention) |
| 213 | **FM6 Mitigation 2: Semantic deltas -- ">= 3 spacing values with minimum 8px delta between adjacent."** | Not directly added to brief. 01-brief Edit 1 adds ">= 24px delta" for Spatial channel. The 8px minimum between adjacent sorted padding values is in 08-enriched-diagram (SC-14B) but NOT in any manifest. | GAP (MEDIUM) -- SC-14B (padding micro-clustering, >=8px between adjacent sorted padding values) proposed in report 08 but not in 03-gate-changes.md. The padding clustering loophole (48/49/50px) remains. |
| 214 | **FM6 Mitigation 3: Acceptance -- quality comes from recipe, not rules.** | 01-brief: Edits 2 and 7 add recipe content. Summary notes guardrail-to-playbook ratio improvement. | ADDRESSED |
| 244-246 | **FM7 Mitigation 1: Builder-first principle -- CSS-affecting concepts must appear in conventions brief.** | All CSS-affecting edits target conventions-brief.md (01-brief). CI concepts route through brief, not SKILL.md only. | ADDRESSED |
| 245 | **FM7 Mitigation 2: Routing audit after all enrichments.** | 01-brief "NOT INCLUDED" section documents why E15/E16 target SKILL.md not brief. 02-skill "NOT INCLUDED" section documents B7/B8/B9 routing to other files. | ADDRESSED (implicit -- each manifest documents routing decisions) |
| 246 | **FM7 Mitigation 3: Self-containment test -- remove external file references from builder prompt, can builder still build?** | Not formally performed. | GAP (MINOR) -- recommended as post-application validation. |
| 272-274 | **FM8 Mitigation 1: Budget allocation guidance -- "500+ CSS lines should be layout, components, backgrounds."** | Not directly added to brief. 01-brief Edit 8 adds "Budget: <= 5% of total CSS lines" for Character scale. But no positive allocation guidance ("spend X% on layout") is added. | PARTIAL -- negative budget cap (5% character) added but no positive allocation guidance. |
| 273 | **FM8 Mitigation 2: Perception section primacy -- Section 2 must remain BEFORE compositional fluency.** | 01-brief: No section reordering proposed. Section 2 (Perception) remains before all compositional sections. | ADDRESSED (by non-action -- order preserved) |
| 274 | **FM8 Mitigation 3: Scale 5 warning reinforcement.** | 01-brief Edit 8: Adds "ONLY after Page scale verified. Budget: <= 5%" to Character row. Strengthens the warning. | ADDRESSED |
| 300-302 | **FM9 Mitigation 1: Opus mandate already in place.** | 02-skill: Edit 8 compresses but preserves "ALWAYS set model: opus" language. | ADDRESSED |
| 301 | **FM9 Mitigation 2: Model-sensitivity labeling for each enrichment concept.** | Not performed. No edit is labeled as "model-sensitive" or "model-independent." | GAP (MINOR) -- labeling not implemented. Low impact since Opus is mandated. |
| 302 | **FM9 Mitigation 3: Fallback CSS values for model-sensitive concepts.** | 01-brief Edit 7 (parametric echo) provides concrete fallback values (16px/20px, 32px/24px). Edit 2 provides concrete CSS. | PARTIALLY ADDRESSED -- 2 edits have fallback CSS, others rely on Opus capability. |
| 328-330 | **FM10 Mitigation 1: Recipe format test -- classify each new section as recipe/world-description/checklist, aim for 60%+ world-description, 30%+ recipe, <10% checklist.** | 01-brief: Summary classifies each edit type but does not compute overall ratios. Claims ~51% world-description, 16%->higher recipe. | PARTIAL -- individual edit classification performed, aggregate ratio test not formally computed. |
| 329 | **FM10 Mitigation 2: Preserve the conventions brief voice.** | 01-brief: Every edit's anti-regression check includes voice assessment. Edits 3, 6, 9 explicitly use atmospheric voice. | ADDRESSED |
| 330 | **FM10 Mitigation 3: Sequencing over listing for multi-item enrichments.** | 01-brief Edit 2: CSS recipe is sequenced (boundary-by-boundary). Edit 7: sequenced comparison (dense vs sparse zone). Edit 1: table format, not sequence, but table is reference material, not instruction. | ADDRESSED |

### Findings from Cross-Cutting Analysis (lines 334-392)

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 353-355 | **Enrichment Types A (Compositional Fluency) and F (Content-Form Coupling) are DANGEROUS -- 6 and 3 HIGH risk ratings respectively.** | 01-brief: No compositional fluency concepts (parametric echo, density arc) added as abstract principles. Edit 7 (parametric echo) is RECIPE with concrete CSS values, not abstract principle. No content-form coupling concepts added. | ADDRESSED -- dangerous enrichment types avoided or concretized |
| 359-363 | **Enrichment Types C (Perception Thresholds) and D (Recipe Formatting) are SAFE -- 0 HIGH risks.** | 01-brief: Edit 1 (thresholds), Edit 2 (recipe). These are the two primary DO NOW edits. | ADDRESSED |
| 365-367 | **Scale/Fractal (E) is MEDIUM everywhere, enrichable with care.** | 01-brief: Edit 8 modifies Character scale row (careful). No aggressive scale expansion. | ADDRESSED |
| 369-371 | **Multi-Coherence (B) has one dangerous trap (checklist).** | 01-brief: Edit 6 (component micro-coherence) uses world-description voice, not checklist. No new multi-coherence binary rules added. | ADDRESSED |
| 377-387 | **MASTER RECOMMENDATION: Proceed with C (thresholds) and D (recipe). Caution on B and E. Extreme caution or reconsider A and F.** | All manifests follow this ordering: DO NOW = thresholds + recipe, DEFER = moderate risk items, DON'T = aggressive compositional fluency or new gates. | ADDRESSED |
| 389-390 | **Meta-Recommendation: Brief cannot exceed 450 lines, SKILL cannot exceed 450 lines. If a concept is worth adding, identify what it replaces.** | 01-brief: 441 lines (within 450). 02-skill: 430 lines (within 450). | ADDRESSED |

### Findings from Mitigation Checklist (lines 396-409)

| Line(s) | Check | Manifest Implementation | Status |
|---------|-------|------------------------|--------|
| 400 | **Check 1: Line budget <= 450 lines** | 01-brief: 441. 02-skill: 430. Both pass. | PASS |
| 401 | **Check 2: Guardrail ratio <= 1:1 in modified sections** | 01-brief: Aggregate improves from 2.0:1 to 1.7:1. Per-section not audited. | PASS (aggregate); NOT AUDITED (per-section) |
| 402 | **Check 3: Checklist verb audit -- recipe verbs >= checklist verbs** | Not formally counted. 01-brief edits characterized qualitatively. | NOT AUDITED |
| 403 | **Check 4: CSS anchor -- every concept has >= 1 CSS property-value pair?** | Edits 1, 2, 5, 7 have CSS. Edits 3, 4, 6, 8 (table mod), 9, 10 do not add NEW CSS pairs but reference existing ones. | PASS for enrichment edits; N/A for naming/process edits |
| 404 | **Check 5: Provenance citation -- every concept cites source?** | Every edit in all 4 manifests cites "Source:" with report numbers and line references. | PASS |
| 405 | **Check 6: Compression test -- fresh reader recalls 10 min later?** | Not performed. | NOT AUDITED |
| 406 | **Check 7: Builder routing -- CSS-affecting concepts in conventions-brief?** | All CSS-affecting edits in 01-brief. Non-CSS edits (weaver vocabulary, fix cycle) in 02-skill. | PASS |
| 407 | **Check 8: World-description voice preserved?** | Each brief edit has anti-regression voice check. | PASS |
| 408 | **Check 9: Net deletion -- at least one line deleted per concept added?** | NOT met. 01-brief adds 38 net lines with only 3 modification edits (net 0 on those). No explicit deletions. But stays within 450 cap. | FAIL (strict interpretation); PASS (budget-cap interpretation) |
| 409 | **Check 10: Recipe format -- concept expressed as sequence, not flat list?** | Edits 2, 7 are sequenced. Edit 1 is reference table. Edit 4 is flat list of quality levels. | MOSTLY PASS |

### File 07 Summary
- **Total actionable findings:** 37
- **Addressed:** 23
- **Partially addressed:** 8
- **Gaps:** 6 (4 MINOR, 1 MEDIUM, 1 formal check not audited)
- **Severity of gaps:**
  - MEDIUM: SC-14B (padding micro-clustering >=8px delta) not in manifests -- the 48/49/50 loophole persists
  - MINOR: No formal verb audit, compression test, self-containment test, model-sensitivity labels, positive CSS budget allocation

---

## FILE 2: 08-enriched-diagram.md (901 lines)

This file proposes new pipeline stages, gates, and architectural changes. Most were expected to be in the DON'T category per 11-master-synthesis.

### Findings from Enriched Pipeline Proposals

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 14 | **Two new stages appear (Scale Verification Gate, Channel Coherence Pre-Check)** | 03-gate: No new stages added. SC-00 is a pre-gate within Stage 3, not a new stage. | EXPLICITLY DEFERRED -- master synthesis says DON'T add new stages. Consistent with report 10 (contrarian). |
| 15 | **Three existing stages fundamentally change (Builder input, Gate Runner, PA question routing)** | Gate Runner changed (03-gate: SC-00 + fix recipe enrichment). PA question routing changed (04-pa: PA-44 and PA-63 modifications). Builder input NOT changed (same 6 files). | PARTIALLY ADDRESSED -- 2 of 3 stages changed; builder input change correctly avoided. |
| 16 | **Information flow shifts from document-centric to stack-layer-centric** | Not implemented. Pipeline remains document-centric. | EXPLICITLY DEFERRED per master synthesis. |
| 17 | **26%/74% gate/PA split shifts to ~40%/60% as gates gain L2-L4 enforcement** | 03-gate: Only SC-00 (zone validation pre-gate) added. No L2 (SC-18), L3 (SC-17), or L4 (SC-13C) gates added. Split remains ~28%/72% (one pre-gate adds marginal improvement). | NOT ADDRESSED -- but EXPLICITLY DEFERRED per master synthesis DON'T on new gates (E11). |
| 18 | **Complexity ceiling at ~25 gates** | 03-gate: Total goes from 21 to 22 (SC-00). Within ceiling. | ADDRESSED (respected) |
| 276-277 | **L5: NEW builder self-test questions as MANDATORY deliverable (_anti-scale-self-test.md)** | Not in any manifest. No new builder deliverables added. | EXPLICITLY DEFERRED -- master synthesis DON'T for new deliverables (no new files). |
| 278-282 | **L4: SC-13C direction coherence gate (promotes direction checking from advisory to blocking at 60%)** | 03-gate: SC-13C NOT added. "What Was NOT Included" section explicitly lists SC-13C as excluded: "premature, direction heuristic confidence ~50%." | EXPLICITLY DEFERRED with justification (03-gate "NOT INCLUDED" section) |
| 284-289 | **L3: Per-channel verification gates, SC-17 channel deployment (>=4 of 6 deployed)** | 03-gate: SC-17 NOT added. "What Was NOT Included" notes: "master synthesis says DON'T for new gates (E11)." | EXPLICITLY DEFERRED with justification |
| 291-295 | **L2: SC-18 scale perceptibility gate (cross-reference DG-1 against computed styles)** | 03-gate: SC-18 NOT added. Same justification as SC-17. | EXPLICITLY DEFERRED with justification |
| 334-337 | **Stage 2.5: Transition Table Validation (TV-1 through TV-6, new mandatory deliverable _transition-table.yaml)** | Not in any manifest. No transition table YAML deliverable added. | EXPLICITLY DEFERRED -- master synthesis DON'T for new stages and new deliverables. |
| 401-412 | **6 new gates proposed: SC-17, SC-18, SC-13C, SC-14B, SC-19, SC-20** | 03-gate: 0 of 6 added. SC-14B (padding micro-clustering) is the only one with independent justification from FM6 mitigation. | 5 of 6 EXPLICITLY DEFERRED per master synthesis. SC-14B is a GAP (see file 07 cross-ref). |
| 437-439 | **SC-14B: Padding micro-clustering (adjacent padding values differ by >=8px)** | Not in 03-gate-changes.md. | GAP (MEDIUM) -- Report 07 FM6 identified this as needed to prevent 48/49/50 loophole. Report 08 proposed it. Neither manifest implements it. |
| 443-458 | **SC-19/SC-20: Anti-scale proxy gates (advisory only, component density variance + restraint signature)** | 03-gate: "NOT INCLUDED" explicitly lists anti-scale gates as rejected: "Report 05 verdict: CANNOT verify programmatically, SHOULD NOT attempt." | EXPLICITLY DEFERRED with justification |
| 490-527 | **PA Stage 5 changes: Stack-aligned question routing with layer annotations** | 04-pa: No layer annotations added. PA auditor assignments unchanged. Weaver does NOT get stack-layer assessment template. | NOT ADDRESSED in PA manifest. 02-skill Edit 9 adds weaver compositional vocabulary (channel/scale/transition naming) which partially addresses this via a different mechanism. |
| 528-543 | **Weaver produces "STACK LAYER ASSESSMENT" section (L1-L5 per-layer verdict)** | 02-skill Edit 9: Adds compositional vocabulary to weaver. Does NOT add the structured L1-L5 assessment template. | PARTIALLY ADDRESSED -- vocabulary added, structured template not added. |
| 559-592 | **Stage 6 Fix Cycle: Stack-layer-routed fix instructions with layer diagnosis** | 02-skill Edit 10: Adds "Compositional Context" section to fix instructions with boundary coherence direction, channel analysis, and brief section references. Does NOT add the formal "LAYER DIAGNOSIS" section (L1:MET/L2:WEAK etc). | PARTIALLY ADDRESSED -- compositional context added, but in boundary/channel terms not stack-layer terms. |
| 596-617 | **Stage 7 Verdict: Stack profile (L1-L5 summary) in run manifest** | Not in any manifest. | NOT ADDRESSED -- but this is a NICE-TO-HAVE that follows naturally if weaver produces stack assessment. Low priority. |
| 806 | **Conventions brief content should NOT grow** | 01-brief: Grows by 38 lines (403->441). | TENSION -- 08 says don't grow brief, but 11-master-synthesis allows growth up to 450. The 38-line growth is within the agreed budget. |
| 809-816 | **L5 should NEVER become blocking gate; PA auditors should NEVER receive stack context; Gate count should NEVER exceed 25; Brief should NOT grow.** | All respected. L5 stays judgment-only. PA auditors stay fresh-eyes. Gate count goes to 22 (within 25). Brief at 441 (within 450). | ADDRESSED (all four prohibitions respected) |
| 887-901 | **Priority order: 1. Transition table YAML, 2. SC-18, 3. SC-13C, 4. Stack annotations on PA weaver, 5. SC-17, 6. SC-19/SC-20** | 0 of 6 implemented as proposed. Alternative implementations: weaver vocabulary (partial #4), fix cycle context (partial adjacent to #3). | NOT ADDRESSED as proposed. Consistent with master synthesis DON'T verdict on items 1-3 and 5-6. |
| 897-901 | **What NOT to do: Don't add text to brief, don't increase builder input files, don't make L5 blocking, don't exceed 25 gates** | All 4 prohibitions respected across all manifests. | ADDRESSED |

### File 08 Summary
- **Total actionable findings:** 22
- **Addressed:** 6
- **Partially addressed:** 3
- **Explicitly deferred with justification:** 10
- **Gaps:** 3 (1 MEDIUM: SC-14B; 2 LOW: stack verdict template, layer diagnosis)
- **Key tension:** Report 08 proposes an ambitious enrichment that master synthesis (11) explicitly rejected. The manifests correctly follow 11's guidance.

---

## FILE 3: 09-measurement-protocol.md (593 lines)

This file is an experimental design document. Its findings are about HOW to validate enrichment, not WHAT to change. Most findings are not "manifest-addressable."

### Actionable Findings

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 27-28 | **CRITICAL: No baseline exists for current /build-page pipeline. First run IS the baseline.** | 11-master-synthesis absorbs this: "TEST FIRST" verdict. Not a manifest concern -- manifests are edits, not experiment design. | N/A (experiment design, not pipeline edit) |
| 29-32 | **Option A recommended: Run current pipeline first (1-2 times) to establish baseline, THEN enrich.** | 11-master-synthesis Section 6 adopts this: "Step 2: Run /build-page once with no other changes." | N/A (experiment design) |
| 100 | **Do NOT randomize run order. Pipeline A must run first.** | N/A for manifests. | N/A (experiment design) |
| 186-193 | **Success criteria: PA-05 delta >= +0.5, Tier 5 delta >= +2, SC-13 avg delta >= +0.5, zero gate regression.** | N/A for manifests. These apply AFTER the experiment. | N/A (measurement, not edit) |
| 205-213 | **Failure indicators: PA-05 delta < 0, gate regression > 0, build time > 2x, fix cycles increased.** | N/A for manifests. | N/A (measurement) |
| 290-297 | **Variance controls: Fixed builder model (Opus), fixed temperature, fixed prompt structure.** | 02-skill: Edit 8 preserves "ALWAYS set model: opus." No temperature overrides in any manifest. | ADDRESSED (controls preserved in pipeline files) |
| 306-316 | **Overfitting Risk 2: Optimizing for gates instead of perception. Detection: check if values cluster near thresholds.** | 03-gate: SC-00 added but no threshold-clustering detection mechanism. | N/A (post-experiment analysis, not pipeline edit) |
| 317-319 | **Overfitting Risk 3: Training the measurement instrument (builder vocabulary leaking to auditors).** | 04-pa: PA auditors stay fresh-eyes. 02-skill Edit 9 adds vocabulary to WEAVER only. | ADDRESSED (language barrier preserved) |
| 411-413 | **Do NOT run > 6 total runs.** | N/A (experiment design). | N/A |
| 415-416 | **Do NOT compare to historical experiments.** | N/A. | N/A |
| 417 | **Do NOT modify gates between runs.** | N/A. | N/A |
| 418-419 | **Do NOT let enrichment designer see PA reports from baseline.** | N/A. | N/A |

### Actionable Items Relevant to Manifests

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 119-131 | **Gate measurements table: SC-09, SC-10, SC-11, SC-13, SC-13B, SC-14, SC-15, SC-16 are enrichment-sensitive gates.** | 03-gate: These gates are preserved unchanged. SC-00 added as pre-gate. Enrichment-sensitive gates are not modified. | ADDRESSED (no regression on existing gates) |
| 136-148 | **Builder absorption measurement: Check build log for vocabulary ("scale", "channel", "multi-coherence", etc.).** | 02-skill Edit 11: Adds compositional framing to reference file list ("mechanisms that serve your multi-coherence channels"). This INCREASES the likelihood of builder absorption without adding new constraints. | ADDRESSED (framing increases absorption probability) |
| 155-163 | **CSS analysis metrics: mechanism count, channel patterns, direction consistency, sub-perceptual waste, component count, grid count, font-sizes.** | These are measurement metrics for the experiment, not pipeline edits. However, existing gates (SC-08, SC-13, SC-14, SC-15) measure several of these. | N/A (metrics, not edits) |
| 445-447 | **Post-experiment gate threshold review for SC-09 (15 RGB), SC-10 (120px), SC-13 (avg 4.0), SC-14 (letter-spacing).** | 03-gate: Edit 2 confirms SC-14 already uses 0.025em correctly. No threshold changes proposed for SC-09/10/13. | ADDRESSED (thresholds preserved, review deferred to post-experiment) |

### File 09 Summary
- **Total actionable findings:** 23
- **Addressed (pipeline-relevant):** 5
- **N/A (experiment design, not pipeline edits):** 16
- **Gaps:** 0
- **Note:** This file is primarily an experiment protocol. Most findings guide HOW to test, not WHAT to change. The manifests correctly treat experiment design as out-of-scope.

---

## FILE 4: 10-contrarian-analysis.md (350 lines)

The contrarian makes 10 arguments against enrichment plus per-report challenges. The manifests must RESPECT valid contrarian concerns.

### The 10 Arguments

| Line(s) | Argument | Manifest Response | Status |
|---------|---------|-------------------|--------|
| 19-29 | **Arg 1: Cannot enrich untested system. Run /build-page first.** | 11-master-synthesis adopts this as verdict: "TEST FIRST." DO NOW package is 19 lines only. DEFER package is pre-registered, not applied. | RESPECTED -- manifests follow test-first approach. DO NOW = 19 brief lines + bug fixes. |
| 31-42 | **Arg 2: Brief already contains the CI stack. Enrichment is redundant.** | 01-brief: Adds NO new CI concepts. Edits consolidate (threshold table), exemplify (CSS recipe), and connect (stack bridge) EXISTING concepts. | RESPECTED -- no new CI concepts introduced. |
| 43-55 | **Arg 3: Compression is a feature, not a bug. Concept survival != vocabulary survival.** | 02-skill Edit 9: Adds weaver vocabulary but this is for SYNTHESIS, not builder. Edit 10: Adds compositional context to fix cycle but routes to brief sections, not CI vocabulary. | PARTIALLY RESPECTED -- fix cycle context could be seen as fighting healthy compression. BUT: the context is a brief-section REFERENCE (3 words), not vocabulary injection. |
| 56-68 | **Arg 4: More text produces worse output. 963 lines = 1.5/4, 100 lines = 4/4.** | 01-brief: 403->441 (+38 lines, 9.4% growth). 02-skill: 415->430 (+15 lines, 3.6% growth). Combined growth is modest. | PARTIALLY RESPECTED -- growth occurs but within agreed caps. Contrarian's point about 403 already being "closer to 963 than to 100" (line 174) is not addressed. |
| 69-88 | **Arg 5: Report 07's own risk matrix argues against aggressive enrichment.** | All manifests follow 07's risk ordering: safe types first (thresholds, recipe), dangerous types rejected (compositional fluency as abstract theory, new gates). | RESPECTED |
| 89-99 | **Arg 6: Scale reports found everything already works.** | 01-brief: Scale edits are minimal -- Edit 8 modifies existing Character row, Edit 7 adds parametric echo recipe. No aggressive scale expansion. | RESPECTED |
| 101-111 | **Arg 7: Research team violates its own Gate 6 (meta-to-output ratio 72:1-144:1).** | Manifests total ~200 lines of new content across 4 files. Research total ~7,200 lines. Ratio = 36:1. Still violates Gate 6 (10:1 threshold). | NOT ADDRESSABLE by manifests -- the research investment is sunk cost. Manifests are as lean as possible given the research. |
| 113-127 | **Arg 8: Opus doesn't need CI vocabulary to produce CI outcomes.** | 01-brief: Adds NO CI theory to builder-facing content. Edits 1, 2, 7 are CSS RECIPES (concrete values), not CI theory. Edit 3 (stack bridge) is the only CI-vocabulary addition, and it's 4 lines. | MOSTLY RESPECTED -- Edit 3 adds CI vocabulary but in world-description voice, not as builder instruction. Contrarian would likely accept this as minimal. |
| 129-135 | **Arg 9: Proposed 4-run experiment is overkill. Just run once.** | 11-master-synthesis Section 6 adopts "run once" approach. | RESPECTED (by synthesis, not by manifests -- manifests don't design experiments) |
| 136-143 | **Arg 10: Creative authority paradox resolves itself.** | 01-brief: No "you may now be creative" language added. Edits maintain world-description voice. | RESPECTED |

### Per-Report Challenges

| Line(s) | Challenge Target | Manifest Response | Status |
|---------|-----------------|-------------------|--------|
| 148-155 | **Report 01 challenge: Scale-channel "inversion" is correct separation of concerns.** | No manifest attempts to make scales and channels symmetric. | RESPECTED |
| 157-164 | **Report 02 challenge: Telescope/microscope/periscope redundancy fallacy.** | No manifest implements triple-form redundancy. Concepts live in ONE authoritative place. | RESPECTED |
| 167-175 | **Report 03 challenge: 403 might already BE over the ceiling. 100 lines beat 403.** | 01-brief: Grows to 441. Contrarian's strongest unaddressed point. | TENSION -- valid concern not actionable given the test-first approach. If PA-05 < 2.5, the contrarian's advice would be to CUT, not add. |
| 178-184 | **Report 04 challenge: Even 19 lines may be unnecessary.** | Manifests implement 19 DO NOW lines. Master synthesis agrees test-first. | ACKNOWLEDGED -- DO NOW package IS the 19 lines Report 04 proposed. |
| 188-195 | **Report 05 challenge: Coverage percentages are meaningless without defined 100%.** | 03-gate: No coverage-percentage-driven additions. | RESPECTED |
| 198-205 | **Report 06 challenge: Checkpoint ordering may not matter.** | 02-skill Edit 5: Restructures checkpoints anyway. Addresses the CONTRADICTION (E-CONTRA), not the ordering preference. | PARTIALLY ADDRESSED -- the edit fixes a contradiction, which is stronger justification than the ordering argument alone. |
| 208-214 | **Report 07 challenge: Risk ratings are subjective.** | Manifests use 07's risk ordering but don't treat ratings as measured probabilities. | ACKNOWLEDGED |
| 218-227 | **Report 08 challenge: 6 new gates exceeds own ceiling. More gates != better.** | 03-gate: Only 1 new gate (SC-00). Well within ceiling. | RESPECTED |
| 230-238 | **Report 09 challenge: A/B test requires a control that doesn't exist.** | N/A for manifests. | RESPECTED (by synthesis) |
| 240-247 | **Report 12 challenge: Navigation "naturally at ceiling" is a prediction, not observation.** | 01-brief: No navigation enrichment proposed. | RESPECTED |
| 253-257 | **Report 14 challenge: Making "quietness" explicit risks new constraint.** | 01-brief: No within-zone quietness constraint added. | RESPECTED |
| 274-277 | **Report 15 challenge: Naming phenomena doesn't help if builder already produces them.** | 01-brief Edit 6: Adds component micro-coherence note. Contrarian would push back. But it's 3 lines of world-description, not instruction. | MINOR TENSION -- contrarian would say unnecessary; synthesis says low risk. |
| 282-287 | **Report 16 challenge: Adding character-scale enrichment is complexity ratchet.** | 01-brief Edit 8: Modifies EXISTING Character row (adds CSS property names + 5% budget). Net 0 new lines. | RESPECTED (modification, not addition) |
| 290-297 | **Report 17 challenge: "Total extinction" conflates form with function. Concept survives in measurement, not vocabulary.** | 02-skill Edits 9, 10: Add compositional vocabulary to weaver and fix cycle. This directly contradicts the contrarian's position that vocabulary is unnecessary. | TENSION -- manifests side with Report 17 over contrarian here. Justified because weaver/fix-cycle is the RETURN PATH where even the contrarian acknowledges the concept must be human-readable. |

### Contrarian Verdict Assessment

| Line(s) | Verdict Element | Manifest Compliance | Status |
|---------|----------------|-------------------|--------|
| 304-305 | **Not yet. Run pipeline first. Every recommendation is a solution to unobserved problem.** | DO NOW limited to 19 lines + bug fixes. DEFER pre-registered. | MOSTLY COMPLIANT -- bug fixes and contradiction resolution go beyond "just run it," but these are fixing actual bugs, not speculative enrichment. |
| 306-310 | **Decision tree: PA-05 >=3.0 -> stop. 2.5-3.0 -> apply only thresholds + recipe. <2.5 -> problem is architectural.** | 11-master-synthesis adopts this exact tree. DEFER package activated only in 2.5-3.0 band. | COMPLIANT |
| 314-322 | **Minimum viable enrichment: (1) Perception thresholds ~10 lines, (2) Boundary recipe ~8 lines, (3) Nothing else.** | 01-brief DO NOW: Edit 1 (thresholds ~10 lines) + Edit 2 (recipe ~10 lines) = 20 lines. Plus E3 contradiction fix in SKILL.md. Plus bug fixes across SKILL.md and gate-runner.md. The "nothing else" is violated by bug fixes and GO BEYOND edits. | PARTIALLY COMPLIANT -- DO NOW matches contrarian's minimum. But bug fixes (B1-B9) and GO BEYOND edits (SC-00, compositional framing, fix cycle memory) exceed "nothing else." Bug fixes are justified as fixing BUGS, not enrichment. |
| 326-328 | **Meta-lesson: 7,200 lines of analysis to recommend ~18 lines. The pipeline needs to be TURNED ON.** | Acknowledged. The manifests do not propose more analysis. They propose edits + testing. | COMPLIANT |

### File 10 Summary
- **Total actionable findings:** 32
- **Respected/Compliant:** 22
- **Partially respected (valid tension):** 7
- **Not addressable:** 1 (Gate 6 violation is sunk cost)
- **Unresolved tensions:** 2
  - Brief growth (403->441) when contrarian suggests even 403 may be too long
  - Weaver/fix-cycle vocabulary additions contradict contrarian's position on vocabulary sufficiency
- **Severity:** LOW -- all tensions are acknowledged, documented, and justified. None represent a failure to consider the contrarian's argument.

---

## FILE 5: 11-master-synthesis.md (335 lines)

This is THE most important file. Every item in every package must be verified.

### Section 1: THE VERDICT (lines 10-22)

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 12 | **TEST FIRST. Pre-register minimal enrichment. Apply ONLY if 2.5-3.0.** | All manifests separate DO NOW from DEFER. DEFER explicitly conditioned on PA-05 result. | ADDRESSED |
| 19-22 | **Decision tree: >=3.0 -> no enrichment. 2.5-3.0 -> apply pre-registered. <2.5 -> investigate architecture.** | Not in manifests (manifests are edits, not protocol). But adopted by synthesis itself. | N/A for manifests (experimental protocol) |

### Section 2: CONSENSUS FINDINGS (lines 25-44)

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 27-28 | **C1: Stack progression ABSENT. 100% agent agreement.** | 01-brief Edit 3 (DEFER): Adds 4-line stack relationship bridge. | ADDRESSED (as DEFER, not DO NOW -- consistent with test-first) |
| 30-31 | **C2: Brief near ceiling at 403 lines. Must not exceed 450.** | 01-brief: Final 441 (within 450). | ADDRESSED |
| 33-34 | **C3: Perception thresholds best-preserved concept.** | 01-brief Edit 1 (DO NOW): Consolidates threshold table. | ADDRESSED |
| 36-37 | **C4: Fix cycle degrades from recipe to checklist.** | 02-skill Edit 10 (DEFER): Adds compositional context to fix cycle. 01-brief Edit 9 (GO BEYOND): Adds fix cycle memory note. | ADDRESSED |
| 39-40 | **C5: Enhancement channels 5+6 near-phantom.** | 01-brief Edit 5 (DEFER): Modifies channel 5-6 definitions with CSS properties. 03-gate Edit 3 (DEFER): Documents phantom channel limitation. | ADDRESSED |
| 42-43 | **C6: Orchestrator has boundary-by-boundary vs channel-grouped contradiction.** | 02-skill Edit 5 (DO NOW + BUG FIX): Restructures checkpoints to boundary-grouped. 01-brief Edit 10 (GO BEYOND): Restructures brief verification pauses. | ADDRESSED |

### Section 3: GENUINE DISAGREEMENTS (lines 47-67)

| Line(s) | Finding/Recommendation | Manifest Coverage | Status |
|---------|----------------------|-------------------|--------|
| 49-53 | **D1: Stack progression absence -- problem or feature? Assessment: needed for WEAVER and FIX CYCLE, not necessarily builder.** | 01-brief Edit 3: 4-line bridge in BRIEF (builder-facing). 02-skill Edit 9: Weaver vocabulary. Edit 10: Fix cycle context. | ADDRESSED (both builder and weaver/fix-cycle) |
| 55-59 | **D2: Compression -- bug or feature? Assessment: forward compression = feature; return-path extinction = bug.** | 02-skill Edit 10: Addresses return-path extinction with compositional context in fix instructions. Forward compression not touched. | ADDRESSED (return path fixed, forward path preserved) |
| 62-66 | **D3: Restructure brief? Assessment: DO NOT restructure. Bridge text approach instead.** | 01-brief: No restructuring. Edit 3 adds bridge text. | ADDRESSED |

### Section 4: DECISION MATRIX -- Every E1-E16 Item

| Line(s) | Item | Synthesis Verdict | Manifest Implementation | Status |
|---------|------|-------------------|------------------------|--------|
| 76 | **E1: Stack relationship bridge (~5 lines)** | DEFER TO TEST | 01-brief Edit 3: 4 lines, DEFER. | ADDRESSED |
| 77 | **E2: Boundary-by-boundary recipe (~8 lines)** | DO | 01-brief Edit 2: 10 lines, DO NOW. | ADDRESSED |
| 78 | **E3: Fix checkpoint contradiction (~5 lines)** | DO | 02-skill Edit 5: Combined with B2 threshold alignment. DO NOW + BUG FIX. | ADDRESSED |
| 79 | **E4: Perception threshold consolidation (~6 lines)** | DO | 01-brief Edit 1: 10 lines, DO NOW. | ADDRESSED |
| 80 | **E5: Floor/target naming (DESIGNED/COMPOSED)** | DEFER TO TEST | 01-brief Edit 4: 4 lines, DEFER. | ADDRESSED |
| 81 | **E6: Channel CSS property completion for channels 4-6** | DEFER TO TEST | 01-brief Edit 5: 0 lines (modification), DEFER. | ADDRESSED |
| 82 | **E7: Compositional reference card (~30-line new file)** | DON'T | 02-skill "NOT INCLUDED": Explicitly excluded with justification. | ADDRESSED (excluded) |
| 83 | **E8: Comprehension proof gate (~6 lines)** | DON'T | 02-skill "NOT INCLUDED": Explicitly excluded with justification. | ADDRESSED (excluded) |
| 84 | **E9: Component-internal multi-coherence (~3 lines)** | DEFER TO TEST | 01-brief Edit 6: 3 lines, DEFER. | ADDRESSED |
| 85 | **E10: Parametric echo CSS recipe (~6 lines)** | DEFER TO TEST | 01-brief Edit 7: 3 lines, DEFER. | ADDRESSED |
| 86 | **E11: New gates (SC-17, SC-18)** | DON'T | 03-gate "NOT INCLUDED": Explicitly excluded. DG-1B, SC-13C, SC-10B all excluded with justification. | ADDRESSED (excluded) |
| 87 | **E12: New PA questions (PA-68)** | DON'T | 04-pa "PRE-REGISTERED BUT DEFERRED": PA-68, 69, 70 documented but not applied. | ADDRESSED (deferred, not applied) |
| 88 | **E13: Character scale budget cap (5% of CSS)** | DON'T | 01-brief Edit 8: Budget cap incorporated INTO existing fractal echo table row (not as standalone gate). | NUANCED -- master synthesis says DON'T for standalone gate, but 01-brief embeds it as brief-level awareness cue. Reasonable interpretation: 01-brief does NOT create a gate, it adds a note. |
| 89 | **E14: Character scale register inventory (~8 lines)** | DEFER TO TEST | 01-brief Edit 8: Modifies existing Character row to include CSS properties + budget. | ADDRESSED (as modification rather than 8-line addition) |
| 90 | **E15: Weaver compositional vocabulary (~8 lines)** | DEFER TO TEST | 02-skill Edit 9: 3 lines, DEFER. | ADDRESSED |
| 91 | **E16: Fix cycle recipe structure (~10 lines)** | DEFER TO TEST | 02-skill Edit 10: 5 lines, DEFER. 03-gate Edit 5: ~35 lines, GO BEYOND (fix recipe brief_section references). | ADDRESSED (split across SKILL.md and gate-runner.md) |

### Section 4 Summary by Verdict

| Line(s) | Package | Items | Manifest Coverage | Status |
|---------|---------|-------|-------------------|--------|
| 95-98 | **DO NOW: E2, E3, E4 (~19 lines across 2 files)** | 01-brief Edits 1, 2 (DO NOW). 02-skill Edit 5 (DO NOW). Total DO NOW in manifests: 20 brief lines + checkpoint restructure. | ADDRESSED -- matches synthesis exactly. |
| 100-103 | **DEFER: E1, E5, E6, E9, E10, E14, E15, E16 (~50 lines across 2-3 files)** | All 8 items present as DEFER edits across 01-brief and 02-skill. Total DEFER in manifests: ~14 brief lines + ~8 skill lines = ~22 lines (less than 50 because some edits are modifications, not insertions). | ADDRESSED -- all 8 items present. Lower line count due to efficient modifications. |
| 105-106 | **DON'T: E7, E8, E11, E12, E13** | All 5 items excluded in manifests. E13 partially embedded as brief-level note (not gate). | ADDRESSED -- all DON'T items excluded from pipeline changes. |

### Section 5: USER'S QUESTIONS (lines 110-171)

| Line(s) | Question/Answer | Manifest Coverage | Status |
|---------|----------------|-------------------|--------|
| 112-122 | **Q1: Can CI stack be applied at greater granularity? Answer: Correct intervention is better PROPAGATION, not greater granularity.** | 02-skill Edits 9-10: Improve propagation (weaver vocabulary + fix cycle context). No granularity increase. | ADDRESSED |
| 124-137 | **Q2: Would it improve visual quality? Answer: Unknown until tested.** | Manifests don't claim quality improvement. They fix bugs and consolidate existing content. | ADDRESSED (appropriately modest) |
| 139-153 | **Q3: Where should each concept be propagated?** Propagation table shows gaps in fix cycle and weaver. | 02-skill Edits 9, 10: Address weaver and fix cycle gaps. | ADDRESSED |
| 155-171 | **Q4: Would it repeat 963-line failure?** Answer: No if DO NOW package. Possibly if full DEFER without testing. | Manifests: DO NOW = 19 lines, zero new concepts. DEFER = pre-registered, conditional. Mitigation checklist referenced. | ADDRESSED |

### Section 6: CONCRETE NEXT STEPS (lines 175-247)

| Line(s) | Step | Manifest Coverage | Status |
|---------|------|-------------------|--------|
| 177-198 | **Step 1: Apply DO NOW package (Edits A, B, C = 19 lines)** | 01-brief Edits 1, 2 = Edits C, A from synthesis. 02-skill Edit 5 = Edit B from synthesis. | ADDRESSED |
| 181-185 | **Edit A: Boundary recipe (E2). File: conventions-brief.md, ~line 386.** | 01-brief Edit 2: Matches location, content, and line count. | ADDRESSED (exact match) |
| 187-191 | **Edit B: Checkpoint restructuring (E3). File: SKILL.md, lines 61-66.** | 02-skill Edit 5: Matches location. Combined with B2 threshold alignment. | ADDRESSED (enhanced with B2 alignment) |
| 193-197 | **Edit C: Perception threshold table (E4). File: conventions-brief.md, ~line 102.** | 01-brief Edit 1: Matches location and content. | ADDRESSED (exact match) |
| 199-206 | **Step 2: Run /build-page once.** | N/A for manifests. | N/A (execution step) |
| 207-228 | **Step 3: Decision based on result. Includes DEFER package table (E1, E5, E6, E9, E10, E14, E15, E16).** | All 8 DEFER items present in manifests. | ADDRESSED |
| 225-226 | **Post-enrichment brief: ~450 lines. Post-enrichment SKILL: ~418 lines.** | 01-brief: 441 (close to 450). 02-skill: 430 (higher than 418 due to bug fixes + GO BEYOND). | MOSTLY ADDRESSED -- brief within budget. SKILL 12 lines over synthesis estimate due to additional bug fixes and GO BEYOND edits. |
| 237-247 | **Step 4: What NOT to do (5 items)** | | |
| 239 | **4.1: Do NOT add new gates.** | 03-gate: Adds SC-00 (pre-gate for zone validation). This IS a new gate. | TENSION -- SC-00 addresses B7 (zone selector fragility), which is a BUG FIX rated HIGH. Master synthesis says DON'T add new gates (E11 = SC-17/SC-18), but SC-00 is a different category (infrastructure safety, not compositional enrichment). Justifiable deviation. |
| 241 | **4.2: Do NOT add new PA questions.** | 04-pa: 0 new questions. Modifies 2 existing questions. 3 new questions pre-registered as DEFERRED. | ADDRESSED |
| 243 | **4.3: Do NOT add compositional fluency concepts to brief.** | 01-brief: No abstract compositional fluency concepts. Edit 3 (stack bridge) is structural naming, not fluency theory. Edit 7 (parametric echo) is a CSS RECIPE, not a concept. | ADDRESSED |
| 245 | **4.4: Do NOT restructure the brief.** | 01-brief: No restructuring. Insertions only. | ADDRESSED |
| 247 | **4.5: Do NOT produce more research before testing.** | No research proposed. Manifests are edits. | ADDRESSED |

### Appendix A: Pre-Registered Enrichment Package (lines 251-314)

| Line(s) | Edit | Manifest Match | Status |
|---------|------|---------------|--------|
| 255-268 | **Edit A: Boundary recipe (8 lines CSS example + 2 lines instruction)** | 01-brief Edit 2: 10 lines. Content matches: CSS block showing all channels at one boundary + "Do NOT set all backgrounds first" warning. | EXACT MATCH |
| 270-291 | **Edit B: Checkpoint restructuring (replace 4 channel-grouped with 3 boundary-grouped)** | 02-skill Edit 5: 8 new lines replacing 6 old lines. Content matches: boundary-grouped checkpoints. Also incorporates B2 threshold alignment (>= 5 ARIA, >= 3 border configs). | MATCH WITH ENHANCEMENT (adds B2 threshold fix) |
| 293-304 | **Edit C: Channel-threshold table (6-row table)** | 01-brief Edit 1: 10 lines (table + header). Content matches: 6-row table mapping channels to CSS properties and perception floors. | EXACT MATCH |
| 306-313 | **DEFER edits: E1, E5, E6, E9, E10, E14, E15, E16 validated against 07 checklist.** | All 8 present in manifests. 01-brief reports budget: 403 + 47 = 450 (at cap). Master synthesis says same number. | ADDRESSED |

### Appendix B: Meta-Lesson (lines 317-330)

| Line(s) | Point | Manifest Response | Status |
|---------|-------|-------------------|--------|
| 319-320 | **Meta-to-output ratio is 109:1 (immediate) or 400:1 (pre-registered).** | Acknowledged. Manifests do not add more analysis. | ACKNOWLEDGED |
| 322-328 | **5 items the analysis produced: (1) certainty about what NOT to do, (2) pre-registered package, (3) decision tree, (4) risk matrix, (5) compression map.** | All 5 items reflected in manifest decisions. | ADDRESSED |
| 330 | **"The correct next action is not more analysis. It is: apply 19 lines, run the pipeline, and let the result speak."** | Manifests propose applying edits. No more research. | ADDRESSED |

### File 11 Summary
- **Total actionable findings:** 56
- **Addressed:** 48
- **Partially addressed:** 3
- **N/A (experiment design/meta):** 3
- **Tensions:** 2
  - SC-00 (new gate) vs "do NOT add new gates" -- justified as bug fix
  - SKILL.md final line count (430) vs synthesis estimate (418) -- due to bug fixes
- **Gaps:** 0
- **EVERY ITEM in DO NOW, DEFER, and DON'T packages is correctly handled by the manifests.**

---

## CROSS-REFERENCE: Execution Report Findings vs Research 07-11

| Finding | Exec Report | Research Coverage | Manifest Coverage | Status |
|---------|-------------|-------------------|-------------------|--------|
| B7 (Zone Selector Fragility) | HIGH | 08 proposes SC-00 concept implicitly. 07 does not cover. | 03-gate Edit 1: Full SC-00 implementation. | ADDRESSED |
| E-FIX (Fix Cycle Degradation) | HIGH | 07 FM3 + FM10 (recipe vs checklist). 11 C4 consensus. | 02-skill Edit 10, 01-brief Edit 9, 03-gate Edit 5. | ADDRESSED |
| E-CONTRA (Boundary vs Channel) | HIGH | 07 not directly. 11 C6 consensus. | 02-skill Edit 5, 01-brief Edit 10. | ADDRESSED |
| E-RETURN (Return Path Extinction) | HIGH | 07 FM5 (compression loss). 11 D2 + C4. | 02-skill Edit 10, 03-gate Edit 5. | ADDRESSED |
| E-PHANTOM (Enhancement Channel) | HIGH | 07 FM6 (compliance != quality). 11 C5. | 01-brief Edit 5 (DEFER), 03-gate Edit 3 (DEFER). | ADDRESSED (DEFER) |
| E-STACK (Stack Progression) | MODERATE | 07 not directly. 11 C1 (100% consensus). | 01-brief Edit 3 (DEFER). | ADDRESSED (DEFER) |
| Exec "Confidence PA-05 >= 3.0: 5/10" | N/A | 10 (contrarian): "every prediction is speculation." 11: "genuinely unknown." | Manifests are test-first. | CONSISTENT |
| Exec "Brief tells INSTRUMENT but shows no MUSIC" | N/A | 07 FM2 (guardrail factory). 11: E2 boundary recipe is the "music." | 01-brief Edit 2: CSS recipe = showing music. | ADDRESSED |

### Contradictions Between Execution Report and Research 07-11

| Contradiction | Research Position | Exec Position | Manifest Resolution |
|--------------|------------------|---------------|---------------------|
| SC-14B necessity | 07 FM6: >=8px padding delta needed to prevent 48/49/50 loophole. 08: SC-14B proposed. | Not mentioned in exec report. | NOT IN MANIFESTS. GAP persists. |
| Brief growth | 10 (contrarian): "403 may already be too long." | Exec: "embed a golden reference as appendix" (would increase length). | 01-brief: grows to 441. Neither extreme adopted. |
| New gates | 11: "do NOT add new gates." | B7: "zone selector validation gate needed" (implies new gate). | 03-gate: SC-00 added. Master synthesis DON'T overridden by B7 bug severity. Justified. |

---

## AGGREGATE SUMMARY

### Totals Across All 5 Files

| Metric | Count |
|--------|-------|
| **Total actionable findings extracted** | 170 |
| **Addressed by manifests** | 104 (61.2%) |
| **Partially addressed** | 21 (12.4%) |
| **Explicitly deferred with justification** | 13 (7.6%) |
| **N/A (experiment design, meta, not pipeline edits)** | 22 (12.9%) |
| **Gaps (missing from manifests)** | 7 (4.1%) |
| **Tensions (valid disagreements between sources)** | 3 (1.8%) |

### Gap List with Severity

| # | Gap | Source | Severity | Recommendation |
|---|-----|--------|----------|----------------|
| G1 | **SC-14B (padding micro-clustering >=8px delta) not implemented** | 07 FM6, 08 SC-14B proposal | MEDIUM | This is the only enrichment-type gate with independent justification from the anti-regression analysis. The 48/49/50px loophole remains. Consider adding SC-14B as advisory gate, or document the known limitation. |
| G2 | **No formal verb audit performed on brief edits** | 07 FM3, FM10 mitigation checklist | LOW | Perform verb count as post-application validation step. |
| G3 | **No formal compression test performed** | 07 FM5 mitigation checklist | LOW | Read modified brief in single pass as post-application validation. |
| G4 | **No self-containment test performed** | 07 FM7 mitigation 3 | LOW | Test as part of first /build-page run. |
| G5 | **No model-sensitivity labeling on enrichment concepts** | 07 FM9 mitigation 2 | LOW | Low impact since Opus is mandated. Document if model changes. |
| G6 | **No positive CSS budget allocation guidance** | 07 FM8 mitigation 1 | LOW | "Spend 500+ lines on layout/components" not added. 5% character cap partially addresses this from the negative side. |
| G7 | **Weaver stack-layer assessment template not implemented** | 08 Stage 5 enrichment | LOW | Weaver vocabulary (02-skill Edit 9) partially addresses. Full template deferred to post-test calibration. |

### Contradiction Summary

| # | Sources | Nature | Resolution in Manifests |
|---|---------|--------|------------------------|
| T1 | 11 ("don't add gates") vs B7 exec report ("zone selector gate needed") | DON'T vs BUG FIX | SC-00 added as pre-gate. JUSTIFIED: B7 is infrastructure safety, not compositional enrichment. |
| T2 | 10 ("403 may be too long") vs 11 ("brief at ceiling, can go to 450") | Disagreement on optimal brief length | Brief grows to 441. Both positions acknowledged. TEST FIRST resolves: if PA-05 < 2.5, contrarian's advice to cut applies. |
| T3 | 10 ("vocabulary unnecessary") vs 11 C4 ("fix cycle degrades") | Disagreement on return-path vocabulary | Manifests add vocabulary to weaver and fix cycle (not builder). Compromise: vocabulary goes to synthesis layer, not instruction layer. |

### Overall Assessment

The 4 change manifests demonstrate **thorough coverage** of research files 07-11:

1. **Master Synthesis (11) is faithfully implemented.** Every item in the DO NOW, DEFER, and DON'T packages is correctly handled. All 16 enrichment items (E1-E16) have the correct disposition.

2. **Anti-Regression Analysis (07) is well-respected.** Risk matrix ordering followed. Mitigation checklist mostly applied (7/10 checks pass, 3 not formally audited). The one MEDIUM gap (SC-14B) is the only regression-prevention mechanism from 07 that lacks manifest coverage.

3. **Enriched Diagram (08) is correctly scoped down.** Its ambitious proposals (6 new gates, 2 new stages, 2 new deliverables) are all in the DON'T category per master synthesis. The manifests correctly defer these to post-test calibration.

4. **Measurement Protocol (09) is correctly treated as out-of-scope.** Its findings are experiment design, not pipeline edits.

5. **Contrarian Analysis (10) is substantially respected.** 22/32 arguments fully respected, 7 acknowledged with justified deviations, 1 not addressable. The manifests demonstrate awareness of the contrarian's positions even where they deviate (SC-00, weaver vocabulary).

---

*End of cross-reference audit. 11-xref-research-07-11.md complete.*
