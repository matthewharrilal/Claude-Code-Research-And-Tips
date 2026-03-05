# Wave 1 Gate Runner Changes Summary

**File:** `ephemeral/va-extraction/artifact-gate-runner.md`
**Before:** 1,379 lines, 42 gates
**After:** 1,719 lines (+340 net), 35 gates (42 - 12 removed + 5 added)
**Executable JS blocks:** 24 (4 BV + 16 core/output + 4 anti-pattern)

---

## Fix Status (29 fixes)

### Group A: Foundation Fix
| FIX | Status | Details |
|-----|--------|---------|
| FIX-035 | DONE | `isRenderedElement(el)` helper injected into page context via `window.isRenderedElement`. Filters HTML/HEAD/META/TITLE/SCRIPT/STYLE/LINK/BR + display:none + visibility:hidden + zero-dimension elements. |

### Group B: Gate Defect Fixes
| FIX | Status | Details |
|-----|--------|---------|
| FIX-001 | DONE | GR-05 warm palette: added `if (!isRenderedElement(el)) return;` to forEach loop. Also added to GR-01, GR-02, GR-04 for consistency. |
| FIX-002 | DONE | GR-06 font trinity: added `isRenderedElement` filter + added comment "Binary PASS/FAIL only — no PASS* status". |
| FIX-003 | DONE | GR-09 border hierarchy: replaced `weightValues.length >= 2` with tolerance-band matching: `hasPrimary(3.5-4.5)`, `hasSecondary(2.5-3.5)`, `hasTertiary(0.5-1.5)`. Requires primary + (secondary OR tertiary). |
| FIX-004 | DONE | GR-10 cross-page DNA: added 5 new sub-checks (callout 4px border, ::selection red, :focus-visible 3px, p max-width 70ch, h3 italic). Typography foundations + header DNA folded into GR-10. |
| FIX-005 | DONE | GR-14 total visual gap: added structural transition detection. If element between zones has position:relative/absolute + distinct background (>=15 RGB delta from both adjacent zones), gap is excluded from measurement. |
| FIX-006 | DONE | GR-17 density stacking: split selectors — content elements (p, li, blockquote, .callout) keep 12px min, table cells (td, th) use 4px min. |
| FIX-033 | DONE | GR-07: added standalone executable code for pure B/W check (separate from GR-05). Scans all rendered elements for exact rgb(0,0,0) and rgb(255,255,255). |
| FIX-034 | DONE | GR-08: added heuristic decorative element detection — standalone hrs, empty spacer divs (>10px height, no content), icon-only elements without functional context. |
| FIX-031 | DONE | GR-19: added full executable Playwright JS for threshold gaming detection. Checks bg deltas (>50% clustering at 15-17 RGB = FAIL) and letter-spacing gaming (>50% at 0.025-0.028em). |

### Group C: New Gates
| FIX | Status | Details |
|-----|--------|---------|
| FIX-007 | DONE | BV-01: Tier Line Budget gate. Text parsing. Thresholds: T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24. 80% budget pass threshold. Full JS code. |
| FIX-008 | DONE | BV-02: Background Delta Verification. Extracts all hex pairs from brief, computes max RGB channel delta, requires >=15. Full JS code. |
| FIX-009 | DONE | BV-03: Recipe Format Verification. Counts recipe verbs vs checklist verbs, requires >=3:1 ratio. Full JS code. |
| FIX-010 | DONE | BV-04: Suppressor Scan. Regex patterns for S-01, S-02, S-11, S-08. Zero tolerance. Full JS code. |
| FIX-017 | DONE | GR-43: Self-evaluation comment existence gate. Checks HTML source for `<!-- SELF-EVALUATION:` or `<!-- Self-Evaluation:`. Binary PASS/FAIL. Full JS code. |

### Group D: Gate Result Format
| FIX | Status | Details |
|-----|--------|---------|
| FIX-023 | DONE | Added standardized JSON schema to Output Format section. All existing gates already used this format; formalized as mandatory. |

### Group E: Gate Removals
| FIX | Status | Details |
|-----|--------|---------|
| FIX-024 | DONE | GR-29 through GR-32 (verdict gates): Section 5 DELETED. Noted as moved to orchestrator. |
| FIX-025 | DONE | GR-35 (layout driver): DELETED. Noted as rerouted to PA. |
| FIX-026 | DONE | GR-36 through GR-39 (experiment gates): Section 7 DELETED. Noted as moved to experiment protocol. |
| FIX-027 | DONE | GR-40 through GR-42 (policy gates): Section 8 DELETED. Noted as moved to orchestrator. |
| FIX-028 | DONE | GR-16 (All CSS Perceptible): Removed as standalone gate. Logic absorbed into verdict summary code (allPerceptionPass check). |

### Group F: Gate Reclassifications
| FIX | Status | Details |
|-----|--------|---------|
| FIX-036 | DONE | GR-25: ADVISORY -> RECOMMENDED. Category label + summary table updated. |
| FIX-037 | DONE | GR-26: ADVISORY -> RECOMMENDED. Category label + summary table updated. |
| FIX-038 | DONE | GR-27: ADVISORY -> RECOMMENDED. Category label + summary table updated. |
| FIX-039 | DONE | GR-28: ADVISORY -> RECOMMENDED. Category label + summary table updated. |
| FIX-040 | DONE | GR-19: Kept as RECOMMENDED (not demoted to ADVISORY) since FIX-031 added executable code. Note and category label updated. |
| FIX-041 | DONE | GR-21: RECOMMENDED -> ADVISORY. Category label + summary table updated. |
| FIX-042 | DONE | GR-22: RECOMMENDED -> ADVISORY. Category label + summary table updated. |

### Group G: Header Updates
| FIX | Status | Details |
|-----|--------|---------|
| FIX-029 | DONE | Summary table rebuilt: 35 gates total. Categorization table updated with 4 tiers (REQUIRED/RECOMMENDED/ADVISORY/BRIEF VERIFICATION). Section numbering updated. |

---

## Structural Changes

1. **New Section 0:** "Brief Verification Gates" added before Section 1. Contains BV-01 through BV-04 specs.
2. **New Section 3B:** "Output Verification Gates" added between anti-pattern and precondition sections. Contains GR-43.
3. **Section renumbering:** Sections 5-8 became 5-7, with 5 (Mode Detection) absorbing old 6, and 6-7 being removal stubs for experiment/policy gates.
4. **Summary table rebuilt:** From 42 rows to 34 rows (35 gates minus 1 header row). Added Tier column.
5. **Executable code restructured:** Brief verification function `runBriefVerification()` added as separate callable. Core runner now includes GR-43. Anti-pattern runner now includes GR-19.
6. **Gate ID corrections:** Old GR-07 (Header DNA) and GR-08 (Border Weight Hierarchy) were mislabeled in code. Now correctly: GR-07 = No Pure B/W, GR-08 = No Decorative Elements, GR-09 = Border Weight Hierarchy. Header DNA + Typography folded into GR-10.

## Additional Changes Beyond Fix List

- Added `isRenderedElement` filter to GR-01, GR-02, GR-04 (not in original fix list but consistent with FIX-035 intent)
- Corrected gate ID mismatch between spec and code (GR-07/08/09 were wrong in original code)
- Typography Foundations (originally mislabeled GR-09) folded into GR-10 Cross-Page DNA
- Header DNA (originally mislabeled GR-07) folded into GR-10 Cross-Page DNA
