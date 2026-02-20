# Verification Report: Section 5 -- Gate System

**Verifier:** Gate Verification Agent (Opus 4.6)
**Date:** 2026-02-19
**Task:** #3 -- Cross-reference Section 5 against Report 73
**Guide section:** Lines 752-884 (Section 5: "The Gate System -- All 15 Gates")
**Source of truth:** `ephemeral/compositional-intelligence/73-gate-runner-architecture.md` (1,313 lines)

---

## EXECUTIVE SUMMARY

**Verdict: ACCURATE WITH 5 DISCREPANCIES (2 SIGNIFICANT, 3 MINOR)**

Section 5 faithfully represents 13/15 gates with exact threshold matches. The guide's simplified presentation is appropriate for a tutorial but introduces 2 meaningful deviations from Report 73 that could cause confusion during implementation.

---

## GATE-BY-GATE VERIFICATION

### SC-01: Container Width
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Container Width | Container Width | YES |
| Category | Soul | Soul | YES |
| Threshold | 940-960px | 940-960px | YES |
| Phase | G2 (per phase gates: phase4) | G2 | YES |
| Fix recipe | `main { max-width: 960px; margin: 0 auto; }` | Same | YES |

**Verdict: EXACT MATCH**

### SC-02: Soul Properties
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Soul Properties | Soul Properties | YES |
| Category | Soul | Soul | YES |
| Threshold | border-radius: 0px, box-shadow: none | border-radius: 0, box-shadow: none | YES |
| Phase | G2 (per phase gates: phase4) | G2 | YES |

**Verdict: EXACT MATCH**

### SC-03: Font Trinity
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Font Trinity | Font Trinity | YES |
| Category | Soul | Soul | YES |
| Threshold (R73) | "Only 3 allowed families (Instrument Serif, system-ui serif, system-ui sans)" | ">= 2 font families from trinity" | **DISCREPANCY** |
| Phase | G2 (per phase gates: phase5) | G2 | YES |

**DISCREPANCY #1 (SIGNIFICANT):** Report 73's gate registry says "Only 3 allowed families" (a whitelist check). The guide says ">= 2 font families from trinity" (a minimum count check). These are DIFFERENT checks:
- Report 73 (registry): Checks that ONLY the 3 allowed families are used (restrictive)
- Report 73 (SC-11 pseudocode, line 986): `allFamilies.size >= 2` (minimum count)
- Guide: ">= 2 font families from trinity" (minimum count)

**Note:** Report 73 is internally inconsistent. The gate registry (line 26) says "Only 3 allowed families" but the SC-11 pseudocode (line 986) checks `allFamilies.size >= 2` and the SC-03 gate in the PHASE_GATES section (line 1066) is grouped with typography checks. The guide follows the SC-11 pseudocode interpretation (">= 2"), which is the more practical reading. But the guide's expanded description (line 830) says "Must find >= 2 distinct families from the trinity" which adds the trinity whitelist constraint. The guide is actually MORE precise than Report 73's registry by combining both aspects.

**Recommendation:** No change needed. Guide's formulation is a reasonable synthesis.

### SC-04: Warm Palette
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Warm Palette | Warm Palette | YES |
| Category | Soul | Soul | YES |
| Threshold | R >= G >= B for every computed background-color | R >= G >= B on all backgrounds | YES |
| Phase | G2 (per phase gates: phase3) | G2 | YES |

**Verdict: EXACT MATCH**

### SC-05: No Pure Extremes
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | No Pure Extremes | No Pure Extremes | YES |
| Category | Soul | Soul | YES |
| Threshold | No rgb(0,0,0) and no rgb(255,255,255) | No #000000 or #FFFFFF | YES (equivalent) |
| Phase | G2 (per phase gates: phase3) | G2 | YES |

**Verdict: EXACT MATCH** (rgb notation vs hex notation is cosmetic)

### SC-06: ARIA Landmarks
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | ARIA Landmarks | ARIA Landmarks | YES |
| Category | Structure | Structure | YES |
| Threshold | >= 3 landmarks (header, main, footer/nav/complementary) | >= 3 landmarks | YES |
| Phase | G1 (per phase gates: phase1) | G1 | YES |

**Verdict: EXACT MATCH**

### SC-07: Skip Link
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Skip Link | Skip Link | YES |
| Category | Structure | Structure | YES |
| Threshold | `a[href="#main"]` or `.skip-link` exists | Skip link exists | YES |
| Phase | G1 (per phase gates: phase1) | G1 | YES |

**Verdict: EXACT MATCH**

### SC-08: Component Library
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Component Library | Component Library | YES |
| Category | Structure | Structure | YES |
| Threshold | >= 3 component library classes found | >= 3 component classes | YES |
| Phase | G1 (per phase gates: phase1) | G1 | YES |

**Verdict: EXACT MATCH**

### SC-09: Background Delta
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Background Delta | Background Delta | YES |
| Category | Perception | Perception | YES |
| Threshold | >= 15 RGB max-channel delta between adjacent zones | >= 15 RGB max-channel delta | YES |
| Phase | G2 (per phase gates: phase3) | G2 | YES |
| Fix recipe | Includes 3 warm alternatives that satisfy R >= G >= B | Mentions "2-3 warm hex alternatives" | YES |

**Verdict: EXACT MATCH**

### SC-10: Stacked Gap
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Stacked Gap | Stacked Gap | YES |
| Category | Perception | Perception | YES |
| Threshold | <= 108px total gap between adjacent zones | <= 108px total gap | YES |
| Phase | G3 (not in any phase gate; only in full run) | G3 | YES |
| Sparse zone warning | YES (non-blocking, < 2 content elements) | "Includes sparse zone warning" (line 851) | YES |

**Verdict: EXACT MATCH**

### SC-11: Typography Zones
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Typography Zones | Typography Zones | YES |
| Category | Perception | Perception | YES |
| Threshold (R73) | >= 10px display-to-body delta, >= 2px body-to-detail delta | >= 10px display-body delta | **DISCREPANCY** |
| Phase | G3 (per phase gates: phase5) | G3 | **DISCREPANCY** |

**DISCREPANCY #2 (MINOR):** Guide omits the body-to-detail delta (>= 2px) from the quick reference table. However, the expanded description (line 854) says "Body-to-detail delta >= 2px" -- so the information IS present in the guide, just not in the summary table. Acceptable simplification for a summary row.

**DISCREPANCY #3 (SIGNIFICANT):** Phase lock assignment is wrong in the guide table.
- Report 73: SC-11 is in `phase5` gate group (line 1066: `phase5: [gateSC03, gateSC11]`). It also runs in the full gate run. The phase gates (phase1-phase5) map to mid-build checks; G1/G2/G3 map to the guide's simplified 3-gate model.
- Guide phase-locked diagram (line 781): SC-11 is listed under **G2** ("PERCEPTION + SOUL GATES")
- Guide quick reference table (line 813): SC-11 is listed under **G3**

The guide is INTERNALLY INCONSISTENT: the diagram puts SC-11 in G2, but the table puts it in G3.

Report 73's phase gates: SC-11 is in phase5 (after typography work). This maps more naturally to G3 (comprehensive, after all styling done).

**Recommendation:** Fix the diagram at line 781 to move SC-11 from G2 to G3 (matching the table). OR keep SC-11 in G2 and fix the table. The table (G3) appears more correct per Report 73.

### SC-12: Zone Count
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Zone Count | Zone Count | YES |
| Category | Structure | Structure | YES |
| Threshold | 2-5 zones with `[data-zone]` or `main > section` | 2-5 zones | YES |
| Phase | G1 (per phase gates: phase1) | G1 | YES |

**Verdict: EXACT MATCH**

### SC-13: Multi-Coherence
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Multi-Coherence | Multi-Coherence | YES |
| Category | Composition | Composition | YES |
| Threshold | >= 3 of 6 channels shift at every boundary | >= 3/6 channels shift per boundary | YES |
| Phase | G3 (not in any phase gate; only in full run) | G3 | YES |
| 6 channels listed | chromatic, typographic, spatial, structural, behavioral, material | "6 channels" (expanded: "chromatic, typographic, spatial, structural, behavioral, material" at line 860) | YES |
| Confidence | ~70% | ~70% (line 859) | YES |
| Limitation | Cannot assess semantic direction | "Cannot assess whether shifts are semantically coherent" (line 860) | YES |

**Verdict: EXACT MATCH**

### SC-14: Sub-Perceptual Prevention
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Sub-Perceptual Prevention | Sub-Perceptual | YES (abbreviated) |
| Category | Hygiene | Hygiene | YES |
| Threshold | No letter-spacing < 0.02em; no bg deltas 1-14 RGB within a zone | No letter-spacing < 0.02em | **DISCREPANCY** |
| Phase | G3 (not in any phase gate; only in full run) | G3 | YES |

**DISCREPANCY #4 (MINOR):** Guide's quick reference table only mentions the letter-spacing check, omitting the intra-zone background delta check (1-9 RGB, per Report 73 pseudocode line 616). However, the expanded description (line 863) says "Flags intra-zone bg deltas of 1-9 RGB" -- so the information IS present, just not in the summary table.

**Additional note:** Report 73's registry (line 37) says "no bg deltas 1-14 RGB" but the pseudocode (line 616) uses `delta < 10` (i.e., 1-9 RGB). The guide's expanded text (line 863) says "1-9 RGB". This is an internal inconsistency in Report 73. The guide follows the pseudocode (correct behavior).

### SC-15: Border Presence
| Property | Report 73 | Guide | Match? |
|----------|-----------|-------|--------|
| Name | Border Presence | Border Presence | YES |
| Category | Perception | Perception | YES |
| Threshold | >= 1 element with border-left >= 3px OR >= 2 `<hr>` dividers | >= 1 border or >= 2 dividers | YES |
| Phase | G2 (per phase gates: phase4) | G2 | YES |

**Verdict: EXACT MATCH** (guide simplifies "border-left >= 3px" to "border" but expanded text at line 866 clarifies "border-left >= 3px")

---

## PHASE-LOCK VERIFICATION

### Report 73 Phase Gates (Section 4.1, lines 266-287)
| Phase Gate | Gates | Maps to Guide |
|------------|-------|---------------|
| phase1 (after Phase 1) | SC-06, SC-07, SC-08, SC-12 | G1 |
| phase3 (after Phase 3) | SC-04, SC-05, SC-09 | G2 (partial) |
| phase4 (after Phase 4) | SC-01, SC-02, SC-15 | G2 (partial) |
| phase5 (after Phase 5) | SC-03, SC-11 | G2 (partial) / G3 |
| Full run (after Phase 8) | SC-01 through SC-15 | G3 |

### Guide's 3-Gate Model (lines 764-796)
| Gate | Gates Listed |
|------|-------------|
| G1 | SC-06, SC-07, SC-08, SC-12 |
| G2 | SC-01, SC-02, SC-03, SC-04, SC-05, SC-09, SC-11, SC-15 |
| G3 | ALL 15 (SC-10, SC-13, SC-14 added) |

### Mapping Analysis

The guide collapses Report 73's 4 mid-build phase gates (phase1, phase3, phase4, phase5) into 2 checkpoints (G1, G2). This is a reasonable simplification for a tutorial. The mapping:

- **G1 = phase1.** EXACT MATCH: SC-06, SC-07, SC-08, SC-12.
- **G2 = phase3 + phase4 + phase5 merged.** Contains SC-01, SC-02, SC-03, SC-04, SC-05, SC-09, SC-11, SC-15. This is all 8 gates from phase3 (3) + phase4 (3) + phase5 (2).
- **G3 = full run.** All 15 gates, with SC-10, SC-13, SC-14 explicitly called out as additions.

**DISCREPANCY #5 (SIGNIFICANT -- INTERNAL INCONSISTENCY):** As noted in SC-11 above, the diagram (line 781) places SC-11 in G2, but the quick reference table (line 813) places it in G3. Both cannot be correct. Per Report 73, SC-11 runs in phase5 (the last mid-build gate), which the guide maps to G2. But the table says G3. The diagram is consistent with Report 73's phase5 placement.

**Recommendation:** Fix the table at line 813 to say G2 for SC-11 (matching the diagram), OR fix the diagram to move SC-11 to G3 (matching the table). Given that SC-03 is also in phase5 and is placed in G2 in both diagram and table, the table's G3 for SC-11 appears to be a typo. **Fix the table: SC-11 should be G2, not G3.**

---

## FIX CYCLE LIMITS VERIFICATION

| Property | Report 73 | Guide |
|----------|-----------|-------|
| Per-phase gate max re-runs | 2 (line 337) | Not explicitly stated in Section 5 |
| Full gate run max fix cycles | 3 (line 338) | "max 3 cycles" (line 922, Section 6) |
| Total max gate runner invocations | 8 (line 339) | Not stated in Section 5 |
| Escalation on per-phase failure | "return to TC planner" (line 337) | Not stated |
| Escalation on full run failure | "escalate to user" (line 338) | Not stated |

**Note:** Fix cycle limits are covered in Section 6 (build flow) rather than Section 5 (gates). This is an appropriate structural choice. Section 6 at line 922 shows "max 3 cycles" for G3. The per-phase max 2 re-runs is not explicitly stated in either section.

---

## GATE CONFIDENCE TIERS VERIFICATION

| Tier | Report 73 Gates | Guide |
|------|-----------------|-------|
| Binary Threshold (~95%) | SC-01, SC-02, SC-04, SC-05, SC-06, SC-07, SC-09, SC-10, SC-11, SC-12 (10 gates) | "binary threshold ~95%" (line 883) |
| Structural Presence (~90%) | SC-03, SC-08, SC-15 (3 gates) | "structural presence ~90%" (line 883) |
| Compositional (~70%) | SC-13, SC-14 (2 gates) | "compositional ~70%" (line 883) |

**Verdict: EXACT MATCH** -- Guide checkpoint at line 883 correctly summarizes all three tiers with correct confidence percentages.

---

## MISSING FROM GUIDE (present in Report 73, absent from Section 5)

1. **Selector strategy details** (Report 73 Section 2.2, lines 84-117): The specific CSS selectors for each gate are not in Section 5. This is appropriate -- too implementation-specific for a tutorial.

2. **Playwright integration details** (Report 73 Section 2): Single session, headless chromium, 1440x900 viewport, `document.fonts.ready`, animation disabling. The guide mentions `document.fonts.ready` in SC-03 expanded text (line 830) but does not detail the full Playwright setup. Appropriate for tutorial level.

3. **Fix recipe JSON structure** (Report 73 Section 3.1): The structured JSON format with `measured`, `fix`, `alternatives` fields. Not in Section 5. Appropriate omission.

4. **SC-14 intra-zone bg delta threshold discrepancy**: Report 73 registry says "1-14 RGB" but pseudocode says "< 10" (1-9 RGB). Guide expanded text says "1-9 RGB" (follows pseudocode). This is correct behavior by the guide.

5. **Adversarial counterpoint** (Report 73 Section 11, lines 1263-1271): Report 30's argument that gates create false confidence. Not in Section 5. Could be a useful addition to the guide but is not a factual error.

---

## PRESENT IN GUIDE, NOT IN REPORT 73

Nothing. All gates in the guide exist in Report 73. No fabricated gates.

---

## SUMMARY OF DISCREPANCIES

| # | Severity | Gate | Issue | Fix |
|---|----------|------|-------|-----|
| 1 | Minor | SC-03 | R73 registry says "Only 3 allowed families" vs guide says ">= 2 from trinity" | Guide's formulation is a reasonable synthesis; no fix needed |
| 2 | Minor | SC-11 | Table omits body-to-detail delta (>= 2px) | Info is in expanded text; could add to table for completeness |
| 3 | **SIGNIFICANT** | SC-11 | Guide diagram puts SC-11 in G2, table puts it in G3 -- INTERNAL INCONSISTENCY | Fix table: SC-11 should be G2 (matching diagram + Report 73 phase5 placement) |
| 4 | Minor | SC-14 | Table omits intra-zone bg delta check | Info is in expanded text; could add to table |
| 5 | **SIGNIFICANT** | SC-11 | Same as #3 -- noted separately for phase-lock section clarity | Same fix as #3 |

**Discrepancies #3 and #5 are the same issue viewed from different angles. Net unique discrepancies: 4 (1 SIGNIFICANT, 3 MINOR).**

---

## RECOMMENDED FIXES (priority order)

### FIX 1 (SIGNIFICANT): SC-11 phase assignment in table
**Line 813:** Change `<td>G3</td>` to `<td>G2</td>` for SC-11 Typography Zones.
**Reason:** The diagram at line 781 correctly places SC-11 in G2. The table contradicts the diagram. Report 73 places SC-11 in phase5 (the last mid-build gate, alongside SC-03 which is already G2 in the table).

### FIX 2 (MINOR): SC-11 threshold completeness in table
**Line 813:** Change threshold from `>= 10px display-body delta` to `>= 10px display-body, >= 2px body-detail delta`
**Reason:** Report 73 specifies both thresholds. The expanded text includes both but the table only shows one.

### FIX 3 (MINOR): SC-14 threshold completeness in table
**Line 816:** Change threshold from `No letter-spacing < 0.02em` to `No letter-spacing < 0.02em; no intra-zone bg delta 1-9`
**Reason:** Report 73 specifies both checks. The expanded text includes both but the table only shows one.

---

## OVERALL ACCURACY SCORE

| Metric | Score |
|--------|-------|
| Gate IDs (SC-01 through SC-15) | 15/15 present, 0 missing, 0 fabricated |
| Gate names | 15/15 match (SC-14 abbreviated, acceptable) |
| Gate categories | 15/15 match |
| Gate thresholds | 13/15 exact match, 2/15 incomplete but not wrong |
| Phase-lock assignments | 14/15 match, 1/15 internal inconsistency (SC-11) |
| Fix cycle limits | Covered in Section 6, not Section 5 (appropriate) |
| Confidence tiers | 3/3 tiers with correct percentages |
| 70/30 boundary | Accurately represented |
| Missing gates from R73 | 0 |
| Fabricated gates not in R73 | 0 |

**Section 5 accuracy: ~95%. One significant internal inconsistency (SC-11 G2 vs G3). All other content is faithful to Report 73.**
