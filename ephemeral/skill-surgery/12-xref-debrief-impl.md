# 12 -- Cross-Reference: Debrief + Implementation Audits vs Surgery Plan + Skills

**Agent:** xref-debrief-impl auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** 15 debrief discrepancies, 7 implementation audit files, existing cross-reference (file 06), current state of 3 skill files, master enrichment-trim synthesis

---

## SECTION 1: 15 DEBRIEF DISCREPANCIES -- STATUS IN CURRENT SURGERY

### 1. Mechanism count 14 DROPPED -- only per-category minimums remain

**ADDRESSED**

Debrief (Part 4, P4-3) identified that SKILL.md said ">= 1 per category" while gate-runner.md required ">= 14 total AND >= 1 per category." This meant SKILL.md allowed a 5-mechanism floor.

Evidence: SKILL.md DG-4 now reads ">= 14 total AND >= 1 in each of 5 categories" (confirmed by anti-regression audit 09, Section 2 row B1; surgical placement audit 05, SKILL-EDIT 1/6; existing xref 06, P4-3). gate-runner.md DG-4 line ~916 already had the correct value. Cross-manifest consistency confirmed (09, Section 4.1).

### 2. Micro-gates: honor system vs orchestrator-enforced

**PARTIALLY ADDRESSED**

Debrief (Part 4, P4-4) identified that gate-runner.md defines MG-1 through MG-4 as orchestrator-run Playwright checks, but SKILL.md converts them to builder self-checks (honor system with ~0% enforcement power).

Current state: SKILL.md has 3 boundary-grouped builder self-checkpoints with ALIGNED thresholds (>= 5 ARIA, >= 3 border configs -- matching gate-runner). Thresholds are synchronized. But enforcement remains honor-system DURING the build. Post-build full gate run catches failures but at higher fix cost.

What is NOT addressed: SKILL.md does not orchestrate mid-build Playwright verification. The micro-gate architecture (MG-1 through MG-4) from gate-runner.md remains unimplemented at the orchestrator level. Existing xref 06 lists this as BLOCKING-3 (Task #4, still PENDING at time of audit). Meta-cognitive audit (file 33) independently flagged this as BLOCKING-3.

**Gap severity: MEDIUM.** The post-build full gate run catches all failures. Mid-build gates would catch them cheaper (less rework). The honor system plus post-build verification is operationally viable but suboptimal.

### 3. BG-1/BG-2 behavioral gates absent

**ADDRESSED**

Debrief (Part 4, lines 74-76) identified BG-1 and BG-2 as entirely absent from SKILL.md.

Evidence: SKILL.md now lists BG-1 (Metaphor Independence) and BG-2 (Metaphor Structural) in the structured output section and under a Behavioral gates subsection. Confirmed by anti-regression audit (09, row B3), surgical placement audit (05, SKILL-EDIT 3 and 3B), existing xref (06, P4-2).

Context harmony audit (07) notes Edit 3B uses a bare label format that breaks the dash-list pattern of DG-1/DG-2/DG-4. Recommendation: reformat to `- BG-N:` dash-list format.

### 4. Gate-to-PA context not routed

**ADDRESSED**

Debrief (Part 4, lines 88-92) found that gate-runner.md describes gate results as "PA CONTEXT" but SKILL.md does not route _gate-results.json to PA auditors.

Current state: SKILL.md routes gate results to the WEAVER (not auditors), correctly preserving the fresh-eyes principle. The weaver receives _gate-results.json for diagnostic context. Confirmed by anti-regression audit (09, row B4), surgical placement audit (05, SKILL-EDIT 4), existing xref (06, P4-6).

### 5. Tier 5: 8 questions vs 9 (PA-68)

**NOT ADDRESSED**

The debrief mentions Tier 5 has 8 questions (PA-60 through PA-67). The master synthesis (38) identifies PA-ENRICH-02: "Verify PA-68 is in Tier 5 definition section with /9 scoring throughout (not /8). Internal contradiction if unresolved."

Current state: flagship-pa-questions.md contains 8 Tier 5 questions. The scoring rubric uses 7-8/8 for COMPOSED, 5-6/8 for APPROACHING, etc. PA-68 was pre-registered as a DEFERRED question in manifest 04. If PA-68 is added, all Tier 5 thresholds need updating to /9.

The surgery plan (38) lists this as PA-ENRICH-02 (CRITICAL). Task #22 (pa-enricher-2) is in_progress but its scope is unknown from here. If PA-68 is added without updating the scoring denominators, a scoring inconsistency results.

**Gap severity: LOW if PA-68 remains deferred. MEDIUM if PA-68 is added without denominator update.**

### 6. Metaphor pervasion blind spot

**PARTIALLY ADDRESSED**

Debrief (Part 5, lines 140-144) identified that no PA question tests whether a single metaphor pervades the ENTIRE page spatially. PA-44 tests expression quality (structural vs announced), not spatial coverage.

Current state: Manifest 04 (PA Edit 1) modifies PA-44 to add "Does the metaphor persist across the ENTIRE page, or does it fade or disappear in some sections?" This addresses spatial coverage by expanding an existing question. However, the holistic implications audit (08, Section 2 "PA Edit 1") warns that PA-44 is now a dual-question item, which is a known anti-pattern in survey design -- auditors may anchor on one sub-question and conflate the other.

Existing xref (06) lists this as NOT ADDRESSED (P5-4), but this was before the PA manifest edits were applied. Task #22 (pa-enricher-2) may be applying this.

**Gap depends on whether PA-44 modification was applied to perceptual-auditing/SKILL.md.** The dual-question risk is noted but accepted per holistic audit recommendation R8.

### 7. Boundary-by-boundary vs channel-grouped contradiction

**ADDRESSED**

Debrief (Part 7, P7-1, SIGNIFICANT) found that conventions-brief says "working BOUNDARY BY BOUNDARY" but SKILL.md checkpoints were channel-grouped.

Current state: SKILL.md checkpoints restructured from 4 channel-grouped to 3 boundary-grouped. conventions-brief PROCESS section uses boundary-by-boundary framing. Contradiction RESOLVED. Confirmed by anti-regression audit (09, row B2/E3), context harmony audit (07, M01 Edit 10), surgical placement audit (05, SKILL-EDIT 5), existing xref (06, P7-1).

However, context harmony audit (07) identified a residual micro-divergence: brief checkpoint 2 says "Border-left in 3+ sections" while SKILL.md checkpoint 2 says ">= 3 distinct border configurations." These test different things (presence vs variety). Holistic implications audit (08, Section 3 "Contradiction Loops") also flags this.

**Residual gap: MINOR.** The contradiction is resolved at the structural level (boundary-grouped). The threshold wording divergence is a polish item.

### 8. Stack progression absence

**NOT ADDRESSED (INTENTIONALLY DEFERRED)**

Debrief (Part 7, P7-2, MODERATE) confirmed that no file explicitly codifies how scales, channels, multi-coherence, and anti-scale relate as an architectural stack.

Current state: The stack bridge text (Brief Edit 3, E1) was marked DEFER in the manifest and has NOT been applied. Post-edit surgical audit (20) confirms "NOT FOUND in the actual file... NOT APPLIED (DEFERRED)." Compression funnel audit (24, Concept 9) confirms: "Stack progression was never explicitly codified and remains not explicitly codified."

The master synthesis (38) classifies this as a DEFER enrichment (E1), not a DO NOW. Task #5 (conventions-surgeon, completed) may have partially addressed this.

**Gap severity: LOW.** The debrief rated this MODERATE. It is the least operationally impactful of the 15 items. The brief's section ordering provides implicit progression.

### 9. Fix cycle degradation

**ADDRESSED**

Debrief (Part 7, P7-3, HIGH) confirmed that fix cycles degrade from recipe to checklist -- fix templates reference gate IDs and tokens.css but never conventions-brief sections, metaphor, conviction statement, or coherence direction.

Current state: Three-pronged fix:
1. conventions-brief Edit 9: "Fix cycle memory" habit -- "re-read conviction statement before writing CSS"
2. SKILL.md Edit 10: "Compositional Context" section in fix instructions with boundary direction, channel analysis, brief section reference, and worked example
3. gate-runner.md Edit 5: brief_section references added to gate fix recipes

All three confirmed by anti-regression audit (09, rows E-FIX), failure mode audit (06, Section 2.2 S-10), context harmony audit (07, Section 4.3), recipe-checklist audit (25, overall CLEAN verdict), compression funnel audit (24, Concept 8: "SIGNIFICANTLY IMPROVED").

The compression funnel audit (24) confirms: fix cycle went from 1/9 concepts with structured routing to 5/9. The return path extinction finding is SUBSTANTIALLY RESOLVED.

### 10. Phantom channels

**PARTIALLY ADDRESSED**

Debrief (Part 7, P7-4, HIGH) confirmed channels 5-6 (Behavioral/Material) have "1 line definition, zero CSS examples, zero thresholds beyond binary presence/absence."

Current state:
- conventions-brief lines 102-103 now have CSS property examples (transition, :hover for Behavioral; background-image, component count for Material). Post-edit audit (20) confirms this but notes the modification differs from the manifest spec (retained vague descriptions alongside CSS anchors rather than replacing them).
- gate-runner.md has explicit CHANNEL NOTE (lines ~549-566) acknowledging phantom status with 3 deferred options.

Better than "1 line definition" but channels 5-6 still lack the depth of channels 1-4. Gate measurements remain trivial binary (transition presence, background-image change). The master synthesis (38) does not have a specific enrichment targeting phantom channel resolution -- it is acknowledged as a deferred decision.

**Gap severity: LOW.** Phantom channels inflate multi-coherence denominator but the brief already states "Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four." The deferred status is documented.

### 11. Return path extinction

**ADDRESSED**

Debrief (Part 7, P7-5, HIGH) confirmed that fix recipes never reference conventions-brief sections.

Current state: gate-runner.md lines 224-256 contain "Fix Recipe Compositional Context" section mapping every gate category to a conventions-brief section. SKILL.md fix cycle includes "Re-read conventions-brief.md Section [N]." Weaver receives _gate-results.json. Confirmed by all audit files (06 P7-5, 09 E-RETURN, 24 Concept 8, 25 Gate Edit 5).

Compression funnel audit (24) provides the definitive assessment: 5 of 9 concepts now have some return path presence, up from 1 of 9. The return path is RESTORED for perception thresholds, multi-coherence, 6 channels, semantic directions, and recipe vs checklist.

### 12. Zone selector single point of failure

**ADDRESSED**

Debrief (Part 8, P8-2) identified zone selector assumption as the "SINGLE WEAKEST PART" -- every gate depends on the same selector, and if the builder uses different class names, ALL gates silently pass.

Current state: gate-runner.md has full SC-00 (Zone Selector Validation) pre-gate with primary selector + 3 fallback selectors. Runs FIRST before all other gates in GROUP 0. If all fail, entire gate run FAILS. Confirmed by all audits.

**HOWEVER:** 4 cross-file propagation items remain missing (identified by surgical placement audit 05, anti-regression audit 09 M1/M3):
1. conventions-brief.md needs 3-4 lines documenting zone markup patterns -- NOT in brief manifest
2. SKILL.md needs zone class naming note in builder prompt -- NOT in skill manifest
3. SKILL.md gate count "15" needs update to include SC-00 -- NOT in skill manifest
4. SKILL.md gate table needs SC-00 row -- NOT in skill manifest

Existing xref (06) rates these as BLOCKING. The holistic implications audit (08, I2) calls this a "GHOST DEPENDENCY" -- SC-00 enforces a requirement that no file teaches. The builder learns about zone class naming only when SC-00 fails.

**Gap severity: MEDIUM.** The gate itself works correctly. But the builder is not told about zone markup before building, creating unnecessary failure-and-fix cycles. The fix is 5-6 lines across 2 files.

### 13. 0.02em vs 0.025em threshold inconsistency

**PARTIALLY ADDRESSED**

Debrief (Part 6, P6-6) identified 2 CLAUDE.md files with 0.02em instead of 0.025em.

Current state: gate-runner.md confirmed correct at 0.025em. The 4 pipeline files all use correct values. The real bug is in design-system/CLAUDE.md and design-system/compositional-core/CLAUDE.md. Anti-regression audit (09, M2) confirms: "No manifest covers the actual CLAUDE.md edits."

There is also a pre-existing discrepancy between conventions-brief (0.03em as perception threshold) and gate-runner (0.025em as sub-perceptual floor). These are compatible (0.025em = floor below which sub-perceptual; 0.03em = threshold for visible character-scale variation) but the distinction is not documented. Anti-regression audit (09, I1) and surgical placement audit (05, BRIEF-EDIT 8) both flag this.

**Gap severity: LOW.** The pipeline files are internally correct. CLAUDE.md files are navigation files, not builder-facing. A find-replace of 0.02em -> 0.025em in 2 files resolves it.

### 14. DG-4 _build-plan.yaml reference

**PARTIALLY ADDRESSED**

Debrief (Part 6, P6-1) found DG-4 references _build-plan.yaml but the builder never produces this file.

Current state: SKILL.md Edit 6 restructured DG-4 to validate from _build-log.md. HOWEVER, gate-runner.md DG-4 definition (line ~913) may still reference _build-plan.yaml. Surgical placement audit (05, SKILL-EDIT 6) flags: "CRITICAL: gate-runner.md DG-4 (line 913) references `_build-plan.yaml` -- SKILL.md Edit 6 changes SKILL.md to validate from `_build-log.md` instead, but the gate-runner manifest does NOT include a matching fix."

Holistic implications audit (08, Section 3 "Ghost Dependencies") confirms: "After applying both manifests, SKILL.md validates DG-4 from _build-log.md while gate-runner.md DG-4 still references _build-plan.yaml."

Existing xref (06, P4-8) says "ADDRESSED" based on checking current files, suggesting the gate-runner DG-4 may have been updated independently. Requires verification.

**Gap severity: MEDIUM if unfixed (cross-file inconsistency). May already be resolved -- needs file-level verification.**

### 15. 5/10 confidence assessment

**PARTIALLY ADDRESSED -- CONFIDENCE LIKELY IMPROVED**

Debrief (Part 8, P8-5) gave 5/10 confidence that /build-page produces PA-05 >= 3.0 on first run. Reasons for doubt: pipeline never tested end-to-end, zone selector fragility, 75-line builder visibility, Opus absorption of 403+ lines, threshold inconsistencies, DG-4 residual.

Current state of each concern:
- Zone selector fragility: **RESOLVED** (SC-00)
- End-to-end testing: **STILL N=0** -- pipeline has never been run
- Opus absorption of 443 lines: **UNKNOWN** -- cannot verify without a test run
- Threshold inconsistencies: **MOSTLY RESOLVED** (2 CLAUDE.md files remain)
- DG-4 residual: **MOSTLY RESOLVED** (SKILL.md fixed; gate-runner status uncertain)
- 75-line builder visibility: **IMPROVED** -- builder now receives _tc-brief.md from TC agent (BLOCKING-1 fix), increasing compositional context

Debrief's suggested single change ("embed a golden reference / CD-006 mapping"): **NOT ADDRESSED.** This remains the debrief's #1 recommended improvement. No task targets this. Existing xref (06, P8-4) confirms NOT ADDRESSED.

**Estimated confidence post-surgery: 6-7/10** based on: zone selector fixed (+1), thresholds aligned (+0.5), TC integration added (+0.5), return path restored (+0.5), still N=0 (-0.5).

---

## SECTION 2: IMPLEMENTATION AUDIT FILES -- FINDINGS NOT CAPTURED IN SURGERY PLAN

### File 06 (Failure Mode Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **W-01:** gate-runner.md aggregate growth +133 lines (993 -> 1,126). Soft cap recommended at 1,100. | **NOT IN PLAN** -- no line cap for gate-runner exists. The 450-line cap applies only to builder-facing files. |
| **B-08 CAUTION:** 5% CSS budget cap is constraint without sized recipe. | **PARTIALLY** -- brief Edit 8 adds CSS property names but not a sized example ("typically 15-25 lines on 2-3 key elements"). |
| **I-03 CAUTION:** SC-00 cross-file propagation (brief + SKILL.md). | **NOT IN PLAN** -- identified by multiple audits, not yet added to any manifest. |
| **Interaction 1:** Brief at 441/450 with only 9 lines remaining. | **ACKNOWLEDGED** -- compression funnel (24) notes brief at 443. No action needed but constrains future edits. |
| **Interaction 5:** Combined line growth creates invisible cognitive load increase. | **ACKNOWLEDGED** -- addressed by master synthesis TEST FIRST protocol. |

### File 07 (Context Harmony Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **CRITICAL:** Brief Edit 9 orphans "Three habits" reference. Line 247 says "Three habits" but Edit 9 adds a fourth. | **NOT IN PLAN.** Must update "Three" to "Four" when applying Edit 9. |
| Gate-Runner Edit 1 (SC-00) needs compression from ~65 to ~35-40 lines. | **NOT IN PLAN.** SC-00 is 3-4x denser than peer gates. |
| Gate-Runner Edit 5 (Fix Recipe Context) should move lookup table to appendix. | **NOT IN PLAN.** Table triples the Gate Failure Protocol section length. |
| SKILL.md Edit 3B should use `- BG-N:` dash-list format. | **NOT IN PLAN.** Structural formatting issue. |
| Brief Edit 2: "Do NOT" prohibition voice should be world-description voice. | **ACKNOWLEDGED** -- post-edit audit (20) confirms the "Do NOT" sentence was NOT applied to the actual file. |
| PA Edit 2: "STRONG YES" scoring creates 3-tier ambiguity. | **NOT IN PLAN.** No other Tier 5 question has 3-tier scoring. |
| SKILL.md Edit 3: BG-1/BG-2 not in programmatic gate table. | **NOT IN PLAN.** Gate table at lines 123-139 may lack BG-1/BG-2 rows. |

### File 08 (Holistic Implications Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **I1: Template Attractor.** Brief Edit 2 (CSS recipe) creates gravitational pull toward one specific CSS pattern. | **NOT IN PLAN.** Holistic audit recommends "these values are illustrative" disclaimer (1 line from 9-line budget). |
| **I2: SC-00 Ghost Dependency.** Builder never learns zone markup before gate fails. | **CAPTURED** by multiple audits (05, 09) as MISSING cross-file edits. **NOT YET APPLIED.** |
| **I3: Fix cycle competing frames.** Compositional Context (SKILL.md) + brief_section pointers (gate-runner) arrive through different routes. | **NOT IN PLAN.** Integration question between two correct but differently-framed interventions. LOW severity -- complementary, not contradictory. |
| **I4: Silent difficulty increase in PA.** PA-44 and PA-63 now ask TWO things each, making YES harder. Tier 5 thresholds unchanged. | **NOT IN PLAN.** Pages that previously scored COMPOSED might now score APPROACHING. |
| **I5: Brief genre shift** from world-description toward operational manual. | **ACKNOWLEDGED** -- monitored by TEST FIRST protocol. |
| **R7:** Brief Edit 6 gamification language ("gains a Structural channel for free"). | **NOT IN PLAN.** Incentivizes mechanical optimization. |
| **R9:** No SUNSET clause for DEFER package. | **NOT IN PLAN.** If PA-05 >= 3.0, DEFER edits should be archived, not applied. |
| **Challenge 2:** Manifests propose ~196 lines of changes (3x the master synthesis ~66 line recommendation). | **PARTIALLY** -- manifests include bug fixes not in synthesis scope. Adjusted enrichment-only is ~110 lines (1.7x synthesis). |
| **Section 6.3:** Zone concept travels through pipeline with implicit HTML assumption never made explicit. | **SAME AS I2** -- SC-00 ghost dependency. |

### File 09 (Anti-Regression Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **M1 (BLOCKING):** SC-00 cross-file propagation -- brief needs 3-4 lines, SKILL.md needs 1-2 lines. | **NOT IN PLAN.** Identified by 05, 07, 08, 09 -- 4 independent audits. |
| **M2 (BLOCKING):** B8 CLAUDE.md fixes (0.02em -> 0.025em in 2 files). | **NOT IN PLAN.** Simple find-replace. |
| **M3 (BLOCKING):** SKILL.md gate table needs SC-00 row + count update. | **NOT IN PLAN.** Identified by 05, 08, 09. |
| **I5:** SKILL.md fix template should note `brief_section` JSON field from gate-runner. | **NOT IN PLAN.** Connects two complementary edits. |
| Brief Edit 1 table format improved from manifest spec. | **ACKNOWLEDGED** -- actual is better than spec. No action needed. |
| 6/8 DEFER edits applied before testing. | **ACKNOWLEDGED** -- accepted deviation. |

### File 05 (Surgical Placement Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| Gate-Edit 8: blocking gate count breakdown is imprecise. | **NOT IN PLAN.** Recommend "ALL blocking gates" without specific number. |
| SKILL-Edit 6 / DG-4 cross-file: gate-runner.md DG-4 still says _build-plan.yaml. | **NOT IN PLAN.** Creates post-edit inconsistency. |
| 5 HIGH missing cross-file edits (4 SC-00 + 1 DG-4). | **NOT IN PLAN.** See M1, M3 above. |

### File 24 (Compression Funnel Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **Weaver unreformed.** Still flat binary checklist. THE most impactful remaining bottleneck. | **PARTIALLY** -- master synthesis has PA-ENRICH-08 (fix-type classification in Weaver Top-5) and weaver vocab in SKILL.md Edit 9. But weaver MET/FAILED structure unchanged. |
| **Stack progression still not codified (Concept 9).** | **DEFERRED** per synthesis. |
| **Anti-scale model at PARTIAL IMPLICIT (Concept 5).** No direct verification. | **NOT IN PLAN.** Governing formula (Richness = density x restraint x spatial confidence) has zero pipeline verification. |
| **4 Semantic Directions collapsed to 2 binary in gate (Concept 4).** | **NOT IN PLAN.** SC-13B remains ADVISORY at ~50% confidence with 2-value (INTENSIFYING/RELAXING) model. |
| **Deliverable-reality gap for fractal echo (Concept 6).** DG-1 validates table, not CSS. | **INTENTIONALLY EXCLUDED** per master synthesis DON'T verdict on new gates. |
| **Compression ratio improved from ~50:1 to ~6.5:1.** | **NO ACTION NEEDED** -- positive finding. |
| **No PA questions address semantic directions, anti-scale, or stack progression.** | **NOT IN PLAN.** PA remains the pipeline stage where architectural concepts are least represented. |

### File 25 (Recipe-Checklist Audit)

| Finding | In Surgery Plan? |
|---------|-----------------|
| **SC-13 lacks embedded fix recipe.** When SC-13 fails, builder gets measurement but no guidance on which channels to add. | **PARTIALLY** -- mitigated by cross-file references (brief Edit 1 threshold table, brief Edit 2 CSS recipe, gate Edit 5 brief_section pointer). Distributed recipe exists but not embedded. |
| Zone markup needs 2 lines in conventions-brief PROCESS section. | **SAME AS M1** -- SC-00 ghost dependency. |
| Guardrail-to-playbook ratio improved from 2.0:1 to 1.7:1. | **NO ACTION NEEDED** -- positive finding. |
| Adjusted recipe:checklist ratio of new edits is 6:1 recipe-dominant. | **NO ACTION NEEDED** -- positive finding. |

---

## SECTION 3: COMPARISON WITH EXISTING CROSS-REFERENCE (file 06)

### What Was Already Known in File 06

File 06 (existing xref, 427 lines) covered:
- 36 debrief findings across Parts 3-8 (24 ADDRESSED, 5 PARTIAL, 3 NOT ADDRESSED, 4 N/A)
- 35 manifest edits tracked (25 applied, 5 correctly deferred, 5 unknown)
- 348 xref findings from files 30-32 (153 ADDRESSED, 80 PARTIAL, 82 NOT ADDRESSED)
- 14 meta-cognitive audit items (5 ADDRESSED, 3 PARTIAL, 6 NOT ADDRESSED)
- 17 gap items (8 being addressed, 9 not being addressed)

### What Is NEW in This Report

| Category | File 06 Had | This Report Adds |
|----------|------------|-----------------|
| SC-00 ghost dependency | Listed as BG-2 (SKILL.md gate count) + SG-13 | Traced through 4 independent audits (05, 07, 08, 09) with specific line items. Promoted to TOP PRIORITY. |
| "Three habits" orphan | Not mentioned | CRITICAL formatting bug from harmony audit. |
| Template attractor risk | Not mentioned | From holistic audit (08 I1). Most dangerous single edit risk. |
| PA dual-question anti-pattern | Not mentioned | From holistic audit (08 I4). PA-44 and PA-63 now harder to answer. |
| DG-4 cross-file inconsistency | Listed as P4-8 "ADDRESSED" | CONTRADICTED by surgical placement audit (05, SKILL-EDIT 6). SKILL.md fixed but gate-runner.md DG-4 may not be. |
| Brief genre shift | Not mentioned | From holistic audit (08 I5). Cumulative effect of 10 edits shifts brief from manifesto toward reference manual. |
| Fix cycle competing frames | Not mentioned | From holistic audit (08 I3). Two correct interventions with different framing. |
| SC-13 missing embedded fix recipe | Not mentioned | From recipe-checklist audit (25). Mitigated by cross-file but not self-contained. |
| Weaver as unreformed bottleneck | Listed as SG-12 | Elevated by compression funnel audit (24) as THE most impactful remaining bottleneck. |
| Gamification language in Edit 6 | Not mentioned | From holistic audit (08 R7). "Gains a Structural channel for free." |
| SUNSET clause absent | Listed as SG-14 | Reinforced by holistic audit (08 R9). No protocol for archiving DEFER edits if PA-05 >= 3.0. |
| Confidence estimate update | Listed as P8-5 | Updated from 5/10 to estimated 6-7/10 based on resolved concerns. |

### What File 06 Had That Remains Accurate

- DG-1B deliverable-reality gap (3 BLOCKING from file 30) -- still intentionally excluded per DON'T verdict
- Golden reference / CD-006 mapping (P8-4) -- still not addressed
- BLOCKING-2 stale gate-runner cross-reference -- still pending (Task #3)
- BLOCKING-3 micro-gate orchestration -- still pending (Task #4)
- 8 SIGNIFICANT gaps not being addressed (SG-1 through SG-14)

---

## SECTION 4: SUMMARY -- TOP 10 ITEMS THE SURGERY PLAN SHOULD ADD OR MODIFY

Ranked by impact (product of severity x likelihood of causing problems in the next /build-page run):

### RANK 1: SC-00 Cross-File Propagation (M1 + M3)
**Impact: HIGH. Fix effort: 10 minutes.**

The builder will not know about zone markup patterns before building. SC-00 will fail on first run, requiring a fix cycle for a problem that a 5-line addition could prevent.

Required additions:
- conventions-brief.md PROCESS section: 3 lines listing accepted zone markup patterns
- SKILL.md builder spawn prompt: 1 line noting zone class naming
- SKILL.md gate table: 1 row for SC-00
- SKILL.md gate count reference: update "15" to include SC-00

4 audits independently flagged this (05, 07, 08, 09). It is the most unanimously identified gap.

### RANK 2: DG-4 _build-plan.yaml Residual in gate-runner.md
**Impact: MEDIUM-HIGH. Fix effort: 5 minutes.**

SKILL.md was fixed to validate DG-4 from _build-log.md. If gate-runner.md DG-4 still references _build-plan.yaml, the orchestrator may face contradictory instructions. Surgical placement audit (05) flags this as a "CRITICAL" cross-file gap.

Required: Verify gate-runner.md DG-4 definition and update to _build-log.md if needed.

### RANK 3: "Three habits" -> "Four habits" in conventions-brief
**Impact: MEDIUM. Fix effort: 1 minute.**

If Brief Edit 9 (fix cycle memory) is applied, line 247 says "Three habits prevent drift" but there are now four habits. Context harmony audit (07) rates this CRITICAL.

Required: Change "Three" to "Four" on the line preceding the habits list.

### RANK 4: SKILL.md Stale Gate-Runner Cross-Reference
**Impact: MEDIUM. Fix effort: 1 minute.**

SKILL.md line ~124 references "992 lines, 21 gates" but gate-runner.md is ~1,159 lines with 22 gates. Meta-cognitive audit (33) rates this BLOCKING-2. Existing xref (06) confirms Task #3 is PENDING.

Required: Update cross-reference line to current values.

### RANK 5: Template Attractor Disclaimer on Brief Edit 2
**Impact: MEDIUM. Fix effort: 1 line.**

The boundary CSS recipe example creates gravitational pull toward one specific pattern. Holistic implications audit (08) identifies this as the highest-risk single edit. Post-edit audit (20) confirms the "Do NOT" anti-pattern sentence was NOT applied.

Required: Add "These values are illustrative -- adapt to your metaphor and direction" (confirmed present at line 432) OR restore the anti-pattern instruction. Budget: 1 of 9 remaining lines.

### RANK 6: B8 CLAUDE.md Threshold Fixes
**Impact: LOW-MEDIUM. Fix effort: 2 minutes.**

design-system/CLAUDE.md and design-system/compositional-core/CLAUDE.md have 0.02em instead of 0.025em. Anti-regression audit (09, M2) rates BLOCKING.

Required: Find-replace 0.02em -> 0.025em in 2 files.

### RANK 7: PA Dual-Question Risk Monitoring
**Impact: LOW-MEDIUM. No fix now -- monitor.**

PA-44 (metaphor structural + spatial) and PA-63 (fractal echo + parametric echo) now ask TWO things each. The Tier 5 scoring thresholds are unchanged, creating a silent difficulty increase. Holistic implications audit (08, I4) and context harmony audit (07, PA Edit 2) both flag this.

Required: No immediate fix. Monitor first /build-page run. If Tier 5 scores drop unexpectedly, the dual-question items are the likely cause. Consider splitting back into separate items.

### RANK 8: SC-13 Embedded Fix Recipe
**Impact: LOW-MEDIUM. Fix effort: 10 minutes.**

SC-13 (multi-coherence) is a blocking Tier A gate with no embedded fix recipe. When it fails, the builder gets a channel count but no guidance. Cross-file references mitigate (brief threshold table + CSS recipe + gate brief_section pointer) but the recipe is distributed, not self-contained.

Required: Add 5-line `fix` section to SC-13 with CSS guidance and brief_section reference.

### RANK 9: Weaver Reform
**Impact: MEDIUM-HIGH long-term. Fix effort: 30+ minutes.**

The weaver still uses a flat binary checklist (MET/FAILED). Compression funnel audit (24) identifies this as THE most impactful remaining bottleneck. It is the only Report 17 bottleneck that received zero improvement.

Required: Not for this surgery round. Track for next iteration. Master synthesis has PA-ENRICH-08 (fix-type classification) as a starting point.

### RANK 10: SUNSET Protocol for DEFER Package
**Impact: LOW. Fix effort: 5 minutes.**

No protocol exists for archiving DEFER edits if PA-05 >= 3.0 on first run. Holistic implications audit (08, R9) warns that pre-registered edits create application pressure.

Required: Add 3-line note: "If PA-05 >= 3.0 on first run, DEFER edits are ARCHIVED to ephemeral/pipeline-enrichment-impl/archived-defer-edits.md."

---

## APPENDIX: QUICK-REFERENCE STATUS TABLE

| # | Debrief Discrepancy | Status |
|---|---------------------|--------|
| 1 | Mechanism count 14 dropped | ADDRESSED |
| 2 | Micro-gates honor system | PARTIALLY ADDRESSED |
| 3 | BG-1/BG-2 absent | ADDRESSED |
| 4 | Gate-to-PA context not routed | ADDRESSED |
| 5 | Tier 5: 8 vs 9 questions (PA-68) | NOT ADDRESSED (deferred) |
| 6 | Metaphor pervasion blind spot | PARTIALLY ADDRESSED |
| 7 | Boundary vs channel contradiction | ADDRESSED |
| 8 | Stack progression absence | NOT ADDRESSED (deferred) |
| 9 | Fix cycle degradation | ADDRESSED |
| 10 | Phantom channels | PARTIALLY ADDRESSED |
| 11 | Return path extinction | ADDRESSED |
| 12 | Zone selector SPOF | ADDRESSED (cross-file gaps remain) |
| 13 | 0.02em vs 0.025em | PARTIALLY ADDRESSED |
| 14 | DG-4 _build-plan.yaml | PARTIALLY ADDRESSED |
| 15 | 5/10 confidence | PARTIALLY ADDRESSED (est. 6-7/10) |

**TOTALS: 6 ADDRESSED, 6 PARTIALLY ADDRESSED, 3 NOT ADDRESSED (2 intentionally deferred)**

---

*End of cross-reference report. 12-xref-debrief-impl.md complete.*
*Sources: debrief-parts-3-8.md, 05-surgical-placement-audit.md, 06-failure-mode-audit.md, 07-context-harmony-audit.md, 08-holistic-implications.md, 09-anti-regression-audit.md, 20-post-edit-surgical-audit.md, 21-holistic-implications-audit.md, 24-compression-funnel-audit.md, 25-recipe-checklist-audit.md, 06-debrief-xref.md, 38-master-enrichment-trim-synthesis.md, build-page/SKILL.md, perceptual-auditing/SKILL.md, tension-composition/SKILL.md*
*Total source material: ~6,500+ lines audited*
