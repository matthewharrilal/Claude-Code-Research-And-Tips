# 38 -- Master Enrichment + Trim Synthesis

**Date:** 2026-02-20
**Input Reports:** 30 (TC trim safety), 31 (PA trim safety), 32 (dependency trace), 33 (adversarial trim), 34 (TC enrichment from surgery), 35 (PA enrichment from surgery), 36 (TC+PA enrichment from analysis core), 37 (TC+PA enrichment from metacognitive)
**Skills:** TC SKILL.md (~2,006 lines), PA SKILL.md (~1,208 lines)

---

## EXECUTIVE SUMMARY

**4 agents audited trimming safety. 4 agents audited enrichment needs. This document consolidates all 8 reports into a single action plan.**

### Net Impact Projection

| Skill | Current | Trims | Enrichments | Projected |
|-------|---------|-------|-------------|-----------|
| TC SKILL.md | ~2,006 | -696 (safe trims) | +180 (CRITICAL + HIGH) | ~1,490 |
| PA SKILL.md | ~1,208 | -306 (safe trims) | +130 (CRITICAL + HIGH) | ~1,032 |
| **Total** | **~3,214** | **-1,002** | **+310** | **~2,522 (-21.5%)** |

Both skills get SMALLER and MORE CAPABLE. Trims remove orphaned/duplicated content. Enrichments add the corpus's highest-leverage operational findings.

---

## PART 1: TRIM PLAN (Updated with Safety Findings)

### TC Trims -- SAFE (Verified by 4 Independent Agents)

| Category | Lines | Items | Safety Status |
|----------|-------|-------|---------------|
| Phase 5+ (standalone-only) | ~318 | Output formatting, divergence verification, edge cases, invocation, test results | SAFE -- orphaned in /build-page mode |
| Phase 4.7B builder verification | ~60 | Builder-facing verification that TC agent never runs | SAFE -- TC agent doesn't build |
| Phase 4.8 section-aware composition | ~88 | Builder composition logic | SAFE -- builder-facing, not TC-facing |
| Phase 4.9 tokenization self-check JS | ~44 | Self-check JavaScript code | SAFE -- remove JS, keep ~30 lines of token SCALE awareness |
| Duplicate soul constraints | ~~120~~ **0** | **BLOCKED** -- TC is the ONLY source of soul constraint awareness for TC agent | **DO NOT TRIM** (B-01) |
| Builder warning TEXT | ~60 | W-DEADZONE through W-IMPLICIT full text | SAFE -- keep 12-line mapping table |
| Stale references | ~50 | Old file paths (already fixed), tier routing remnants | SAFE -- already corrected |
| Builder warning definitions | ~~60~~ **0** | **BLOCKED** -- conventions-brief has ZERO W-code definitions | **DO NOT TRIM** (B-02) |

**TC Safe Trim Total: ~620 lines** (down from original ~850 estimate due to 2 BLOCKED categories)

**Extraction:**
- Phase 5+ moves to `~/.claude/skills/tension-composition/STANDALONE-APPENDIX.md` (~318 lines)
- Phase 4.7B/4.8/4.9-JS deleted (not moved)
- Stale references and builder warning text deleted

### TC Trims -- BLOCKED (Must Fix First)

| Issue | Why Blocked | Fix Required |
|-------|-------------|--------------|
| B-01: Soul constraints | TC agent's /build-page spawn prompt does NOT include prohibitions.md or tokens.css. If soul constraints are trimmed from TC SKILL, the TC agent has ZERO constraint awareness. | Update /build-page TC spawn to include `prohibitions.md` + `tokens.css` in file read list. THEN trim becomes safe. |
| B-02: Builder warnings | Report 33 traced the full warning flow: TC scores risk → selects W-codes → TC brief → builder. But conventions-brief has ZERO W-code definitions. Warning flow is BROKEN even before trimming. | Add W-code definitions to conventions-brief.md (or to the operational recipe). THEN warning text in TC can be trimmed. |

### PA Trims -- SAFE (Verified by 4 Independent Agents)

| Category | Lines | Items | Safety Status |
|----------|-------|-------|---------------|
| Modes 1-3 (orphaned) | ~32 | Never invoked by /build-page. Collapse to 2-line redirect. | SAFE |
| Mode 4 team structure (duplicated) | ~37 | Identical to /build-page Section 6.1-6.2 | SAFE -- /build-page is authoritative |
| Weaver protocol duplicated content | ~47 | Keep calibration tables (~28 lines), remove rest | SAFE -- /build-page owns weaver protocol |
| Playwright/scroll JS code | ~47 | Auditors never touch Playwright (screenshot pre-capture pattern) | SAFE |
| Screenshot-reading protocol (duplicated) | ~14 | Keep 3-4 lines, rest in /build-page | SAFE |
| Lock sheet format (duplicated) | ~15 | /build-page owns lock sheets | SAFE |
| Team roles full (orphaned) | ~20 | Keep auditor language HARD BLOCK only | SAFE |
| Expanded metaphor section | ~~76~~ **38** | **MODIFIED** -- 57 lines are UNIQUE content (CSS thresholds, warm palette note, etc.) | SAFE to trim 38 genuinely redundant lines only (B-03) |
| Standalone infrastructure | ~50 | Naming, file structure, gates, error handling, validation | SAFE |
| Stale references | ~6 | Old paths, counts (already fixed) | SAFE |

**PA Safe Trim Total: ~306 lines** (down from original ~350 estimate due to B-03 modification)

### PA Trims -- MODIFIED

| Issue | Modification |
|-------|-------------|
| B-03: Expanded metaphor section | Original plan: trim all 76 lines (773-888) as duplicate. Safety audit found 57 lines contain UNIQUE content: CSS percentage thresholds for STRUCTURAL vs ANNOUNCED, warm palette interaction note, zone transition measurement guidance. **Keep 57 unique lines, trim only 38 genuinely redundant lines.** |

---

## PART 2: ENRICHMENT PLAN (De-duplicated Across All 4 Reports)

### TC Enrichments -- CRITICAL (Must Apply)

These 6 items appear across multiple reports with zero dissent. Apply before next pipeline run.

| ID | Finding | Reports | Lines | Summary |
|----|---------|---------|-------|---------|
| TC-ENRICH-01 | **Recipe-format output mode for Phase 4.5** | 36 (TC-E01), 37 (TC-E01) | ~30 | THE single highest-leverage change. Convert TC brief from specification format to recipe format. 8/25 concordance, 0 dissent, Tier 1. Recipe produces PA-05 2.5-4/4; checklist produces 1.5/4. Add verb taxonomy (Tier 1-4 action verbs), sequenced phases, embedded perception checks. |
| TC-ENRICH-02 | **Mechanism density + distribution in TC brief** | 34 (C-1) | ~4 | Density cap (<=4 mechanisms per viewport) and distribution (>=2 per third). Currently ONLY in mechanism catalog (never consulted). 2 lines in Phase 4.5 Section 4. |
| TC-ENRICH-03 | **CSS recipe hints per mechanism** | 34 (C-2) | ~3 | Change "1-line description of HOW it serves the metaphor" to "1-line CSS recipe AND how it serves the metaphor." Bridges mechanism names to CSS in the brief. |
| TC-ENRICH-04 | **Content-form coupling specificity check** | 34 (C-3), 36 (TC-E11) | ~6 | Substitution test after BECAUSE test: "Replace your content with a DIFFERENT topic. Same metaphor still work? Coupling is generic." 3 reports flag this independently. |
| TC-ENRICH-05 | **Fix cycle re-invocation protocol** | 34 (C-4) | ~15 | TYPE A (mechanical) → builder. TYPE B (structural) → builder re-reads TC brief. TYPE C (compositional) → TC re-invocation. 4 surgery files independently identify this gap. |
| TC-ENRICH-06 | **Perception threshold update + cross-reference** | 36 (TC-E03), 37 (TC-E07) | ~20 | Update R-MC-03 values: font-size >=2px, letter-spacing >=0.03em, line-height >=0.15, spatial >=24px. Add font-weight >=100. Add stacked gap <=120px. Duplicate into Phase 4.0 guardrails. |

**TC CRITICAL subtotal: ~78 lines**

### TC Enrichments -- HIGH (Apply Before Next Flagship)

| ID | Finding | Reports | Lines | Summary |
|----|---------|---------|-------|---------|
| TC-ENRICH-07 | **S-09 stacking fix** | 34 (N-1), 36 (TC-E04) | ~10 | STACKING CHECK: sum all gaps at section boundary, total <=120px. Example PASS/FAIL. 8/25 concordance, Tier 1. |
| TC-ENRICH-08 | **Layout diversity mandate** | 36 (TC-E05) | ~8 | >=2 sections must use non-single-column layouts for pages with 8+ sections. Fresh-eyes independently flagged this. |
| TC-ENRICH-09 | **Deallocation principle** | 36 (TC-E02) | ~10 | Phase 4.0-PRE: comment out CSS blocks one at a time; if no visual change, DELETE. Partially present as one sentence; needs structural promotion. |
| TC-ENRICH-10 | **Builder visibility of mechanism catalog** | 36 (TC-E07), 37 (TC-E06) | ~6 | TC Phase 4.5 output must include mechanism catalog impact profiles, not just names. Inverted quality routing is a root cause. |
| TC-ENRICH-11 | **PA expectation map (optional Output C)** | 34 (I-1) | ~10 | Optional Section 6 in TC brief: detection expectations per mechanism, squint test, zone boundary CSS channels. |
| TC-ENRICH-12 | **Scope-dependent quality floors** | 34 (I-3), 37 (TC-E05) | ~8 | SHORT (100-500 words): 8-10 mechanisms, 3-scale fractal. STANDARD: full. LONG: full + unifying pass. |
| TC-ENRICH-13 | **Builder absorption anchors** | 34 (I-4) | ~5 | Section 6 footer: "3 things the builder MUST NOT violate" -- page-specific. |
| TC-ENRICH-14 | **Metaphor lock escalation path** | 34 (I-6) | ~5 | If builder can't express metaphor: document specific constraint, trigger TYPE C fix cycle. No silent substitution. |

**TC HIGH subtotal: ~62 lines**

### TC Enrichments -- MEDIUM (Apply When Convenient)

| ID | Finding | Reports | Lines |
|----|---------|---------|-------|
| TC-ENRICH-15 | Mechanism PA detection annotations | 34 (I-2) | ~8 |
| TC-ENRICH-16 | Pacing pre-check in Phase 3.5 | 34 (I-5) | ~4 |
| TC-ENRICH-17 | Zone count ceiling (Alexander) | 36 (TC-E06) | ~6 |
| TC-ENRICH-18 | Component library reference in Phase 4 | 36 (TC-E07) | ~8 |
| TC-ENRICH-19 | Warm palette enforcement rule | 36 (TC-E08) | ~8 |
| TC-ENRICH-20 | Verb taxonomy for TC brief output | 36 (TC-E09) | ~12 |
| TC-ENRICH-21 | Phase-sequential architecture | 36 (TC-E12) | ~20 |
| TC-ENRICH-22 | Propagation reliability self-test | 36 (TC-E15) | ~10 |
| TC-ENRICH-23 | Content-appropriateness gate | 37 (TC-E02) | ~6 |

**TC MEDIUM subtotal: ~82 lines (defer unless doing comprehensive overhaul)**

### TC Enrichments -- LOW (Track Only)

| ID | Finding | Reports |
|----|---------|---------|
| TC-ENRICH-24 | CSS budget allocation note | 34 (N-2) |
| TC-ENRICH-25 | Component class names in brief | 34 (N-3) |
| TC-ENRICH-26 | TC-PA vocabulary bridge | 34 (N-5) |
| TC-ENRICH-27 | Sunset protocol | 34 (N-6), 37 (TC-E04) |
| TC-ENRICH-28 | Accessibility as mandatory phase | 36 (TC-E10) |
| TC-ENRICH-29 | Conviction/execution separation | 36 (TC-E13) |
| TC-ENRICH-30 | Single-builder documentation | 36 (TC-E14) |
| TC-ENRICH-31 | Content-form coupling reuse classification | 36 (TC-E11) |
| TC-ENRICH-32 | Post-recipe deviation phase | 37 (TC-E03) |

---

### PA Enrichments -- CRITICAL (Must Apply)

| ID | Finding | Reports | Lines | Summary |
|----|---------|---------|-------|---------|
| PA-ENRICH-01 | **Perception threshold reference table** | 36 (PA-E01), 37 (PA-E01) | ~20 | 8-property table: background >=15 RGB, font-size >=2px, letter-spacing >=0.03em, line-height >=0.15, padding >=24px, border >=1px, font-weight >=100, stacked gap <=120px. THE most actionable artifact in the corpus. |
| PA-ENRICH-02 | **PA-68 Tier 5 scoring verification** | 35 (F2) | ~5 | Verify PA-68 is in Tier 5 definition section with /9 scoring throughout (not /8). Internal contradiction if unresolved. |
| PA-ENRICH-03 | **15 RGB canonical (not 10)** | 37 (PA-E08) | ~0 | Conditional on PA-ENRICH-01. Threshold table MUST use 15 RGB. All meta-cognitive files converge on 15, not 10. |

**PA CRITICAL subtotal: ~25 lines**

Note: PA-03/24/25 assignment and question count 63 were already fixed earlier this session.

### PA Enrichments -- HIGH (Apply Before Next Flagship)

| ID | Finding | Reports | Lines | Summary |
|----|---------|---------|-------|---------|
| PA-ENRICH-04 | **S-09 stacking check** | 36 (PA-E02), 37 (PA-E05) | ~15 | New PA question or guidance: estimate TOTAL gap at section boundaries. Individual values look reasonable; SUM exceeds 120px. 8/25 concordance. |
| PA-ENRICH-05 | **Channel activation vs deployment distinction** | 36 (PA-E03), 37 (PA-E07) | ~15 | DEPLOYED (CSS exists) vs ACTIVE (exceeds perception threshold). Count only ACTIVE channels. Updated multi-coherence scale. |
| PA-ENRICH-06 | **Coherence verification magnitude check** | 37 (PA-E04) | ~8 | For each channel counted as "shifting," does delta exceed perception threshold? Count only shifts that exceed threshold. |
| PA-ENRICH-07 | **Sub-perceptual CSS detection questions** | 36 (PA-E05) | ~15 | PA-55 (sub-perceptual detection), PA-56 (CSS budget allocation), PA-57 (micro-typography detection). Fills the skill's largest diagnostic gap. |
| PA-ENRICH-08 | **Fix-type classification in Weaver Top-5** | 35 (F8) | ~5 | MECHANICAL / STRUCTURAL / COMPOSITIONAL classification. Prevents compositional fixes from getting mechanical treatment. |
| PA-ENRICH-09 | **Metaphor failure root-cause diagnosis** | 35 (F9) | ~8 | When PA-44/PA-68 fail: IMPLEMENTATION failure (builder labels) vs STRUCTURAL failure (TC derivation) vs COVERAGE failure (builder ran out of steam). Each routes differently. |
| PA-ENRICH-10 | **Coherence ARC detection guidance** | 35 (F15) | ~20 | 4 ARC types: BUILD-PEAK-RESOLVE / SUSTAINED / FRONT-LOADED / RANDOM. Lens for PA-35, PA-52, PA-62, PA-65. Catches front-loaded visual interest (flagship's worst failure). |

**PA HIGH subtotal: ~86 lines**

### PA Enrichments -- IMPORTANT (Apply When Convenient)

| ID | Finding | Reports | Lines |
|----|---------|---------|-------|
| PA-ENRICH-11 | PA-63 expand to 3 scales (add section-level) | 35 (F17) | ~2 |
| PA-ENRICH-12 | Fix cycle PA Mode 2F protocol | 35 (F19) | ~15 |
| PA-ENRICH-13 | Weaver reads TC brief for diagnosis | 35 (F20) | ~3 |
| PA-ENRICH-14 | Warm palette multiplier note | 36 (PA-E06), 37 (PA-E02) | ~5 |
| PA-ENRICH-15 | Structural border rhythm question | 36 (PA-E08) | ~8 |
| PA-ENRICH-16 | Layout shape diversity question | 36 (PA-E09) | ~8 |
| PA-ENRICH-17 | Metaphor structural vs announced calibration | 36 (PA-E11) | ~10 |
| PA-ENRICH-18 | Cascade value table for multi-coherence | 36 (PA-E04) | ~12 |
| PA-ENRICH-19 | Mid-build perceptual self-checks (Mode 1 expansion) | 35 (F12) | ~10 |

**PA IMPORTANT subtotal: ~73 lines**

### PA Enrichments -- LOW (Track Only)

| ID | Finding | Reports |
|----|---------|---------|
| PA-ENRICH-20 | Content-form coupling as broader lens | 35 (F11) |
| PA-ENRICH-21 | Auditor C overload monitoring | 35 (F10) |
| PA-ENRICH-22 | Perceptual language reinforcement | 35 (F22) |
| PA-ENRICH-23 | Font trinity discrepancy | 35 (F23) |
| PA-ENRICH-24 | Tier 5 weight differentiation | 35 (F24) |
| PA-ENRICH-25 | PA-FUNCTIONAL/PA-TRUST metrics | 37 (PA-E03) |
| PA-ENRICH-26 | Perception check theater detection | 37 (PA-E06) |
| PA-ENRICH-27 | Deallocation detection | 36 (PA-E10) |
| PA-ENRICH-28 | WCAG color contrast | 36 (PA-E12) |
| PA-ENRICH-29 | Recipe vs specification awareness | 36 (PA-E07) |
| PA-ENRICH-30 | CSS budget misallocation detection | 35 (F14) |

---

## PART 3: CONVERGENCE ANALYSIS

### Findings That Appear in ALL 4 Reports (Highest Confidence)

1. **Recipe format > checklist format** -- TC-ENRICH-01. Reports 36 and 37 both flag this as #1 priority. Report 34 captures the downstream effects (CSS recipe hints, mechanism density). 8/25 concordance, 0 dissent.

2. **Perception thresholds must be codified** -- TC-ENRICH-06 + PA-ENRICH-01. Reports 34, 36, 37 all flag threshold gaps in both skills. 11/25 concordance on the principle.

3. **S-09 stacking loophole** -- TC-ENRICH-07 + PA-ENRICH-04. Reports 34, 36, 37 all flag this. 8/25 concordance. The MOST damaging spatial failure mode.

4. **Channel counting without magnitude verification** -- PA-ENRICH-05 + PA-ENRICH-06. Reports 36 and 37 flag from different angles. Binary counting (Y/N) without magnitude check = the core paradigm gap.

### Findings Unique to One Report (Lower Confidence, Worth Tracking)

- TC-ENRICH-11 (PA expectation map) -- only in report 34. Novel concept, untested.
- PA-ENRICH-10 (Coherence ARC) -- only in report 35. Strong conceptual basis but no empirical validation.
- PA-ENRICH-12 (Mode 2F) -- only in report 35. No fix cycle has ever been tested.

---

## PART 4: PRE-EXISTING ISSUES DISCOVERED

The trim safety audit uncovered issues that exist REGARDLESS of trimming:

| Issue | Description | Severity |
|-------|-------------|----------|
| Builder Warning Flow BROKEN | TC scores perceptual risk → selects W-codes → TC brief should have warnings → builder. BUT: (a) TC brief template has no warnings section, (b) conventions-brief has ZERO W-code definitions, (c) warnings are a dead-end. | HIGH -- warnings are theater, not functional |
| Phase 4.9 tokenization | JavaScript self-check code serves no purpose in /build-page mode (TC agent doesn't generate HTML). Keep token SCALE awareness (~30 lines), remove self-check JS (~44 lines). | MEDIUM -- bloat, not broken |

---

## PART 5: RECOMMENDED EXECUTION ORDER

### Phase A: Unblock Trims (2 prerequisite fixes)

1. Update `/build-page` TC spawn prompt to include `prohibitions.md` + `tokens.css` in read list
2. Add W-code warning definitions to conventions-brief.md OR operational recipe

### Phase B: Apply Trims (2 parallel agents)

1. **TC trim agent (Opus):** Extract Phase 5+ to STANDALONE-APPENDIX.md. Remove Phase 4.7B, 4.8, 4.9 JS. Remove builder warning text (keep mapping table). Remove stale references. Target: ~1,386 lines (from 2,006).

2. **PA trim agent (Opus):** Collapse Modes 1-3 to redirect. Remove duplicated team structure, weaver content, Playwright JS, screenshot protocol, lock sheet format, team roles. Trim 38 genuinely redundant lines from expanded metaphor section. Remove standalone infrastructure. Target: ~902 lines (from 1,208).

### Phase C: Apply CRITICAL + HIGH Enrichments (2 parallel agents)

3. **TC enrichment agent (Opus):** Apply TC-ENRICH-01 through TC-ENRICH-14 (~140 lines net). Most edits target Phase 4.5 output template and Phase 4.0 guardrails.

4. **PA enrichment agent (Opus):** Apply PA-ENRICH-01 through PA-ENRICH-10 (~111 lines net). Most edits target Weaver protocol and quantitative guardrails.

### Phase D: Cross-Validation (1 agent)

5. **Cross-validator (Opus):** Re-run 7-file consistency check. Verify question counts, gate counts, thresholds, color values. Verify all 63 PA questions still have full text. Update line counts in CLAUDE.md, MEMORY.md, pipeline CLAUDE.md.

### Phase E: Medium-Priority Enrichments (Optional, defer to separate session)

6. Apply TC-ENRICH-15 through TC-ENRICH-23 and PA-ENRICH-11 through PA-ENRICH-19 if doing a comprehensive overhaul.

---

## PART 6: DECISION POINTS FOR USER

1. **Trim scope:** Apply all safe trims (recommended) or be more conservative?

2. **Enrichment scope:**
   - **Option A: CRITICAL only** (~78 TC + ~25 PA = ~103 lines added). Fastest. Addresses the top findings.
   - **Option B: CRITICAL + HIGH** (~140 TC + ~111 PA = ~251 lines added). Recommended. Comprehensive coverage of validated findings.
   - **Option C: CRITICAL + HIGH + MEDIUM** (~222 TC + ~184 PA = ~406 lines added). Full overhaul. Risk of over-stuffing.

3. **Execution order:** Trims first then enrichments (cleaner), or enrichments first then trims (preserves context during editing)?

4. **Phase A prerequisites:** Fix the 2 blockers before trimming, or trim the SAFE categories now and fix blockers separately?

5. **Recipe-format output (TC-ENRICH-01):** This is the single biggest structural change. It converts Phase 4.5 from specification output to recipe output. Apply now, or defer to Pipeline v2 codification?

---

## APPENDIX: Anti-Reproduction Gate Status

From report 37's assessment:

| Gate | TC Status | PA Status |
|------|-----------|-----------|
| G1: 50:1 Compression | PARTIAL | PARTIAL |
| G2: Judgment Rule | MOSTLY PRESENT | MOSTLY PRESENT |
| G3: Guardrail:Playbook | **MISSING** | N/A (audit skill) |
| G4: Builder Visibility | N/A (derivation) | PARTIAL |
| G5: Quality Routing | N/A | N/A |
| G6: Meta:Output Ratio | IMPLICIT | IMPLICIT |
| G7: Recipe vs Checklist | **MISSING** | N/A (audit skill) |

TC-ENRICH-01 (recipe format) addresses BOTH G3 and G7. This is why it's the highest-leverage single change.
