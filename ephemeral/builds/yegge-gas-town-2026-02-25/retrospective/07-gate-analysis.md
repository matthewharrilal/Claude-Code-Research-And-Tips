# Gate Analysis — yegge-gas-town-2026-02-25

**Analyst:** Gate Analysis Specialist (Opus)
**Scope:** Gate coverage, false positives, effectiveness correlation, DPR impact, missing gates

---

## 1. Coverage Audit

### 1.1 Initial Run: 30/42 Gates Executed

**Executed (30):** GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-17, GR-18, GR-19, GR-20, GR-21, GR-22, GR-43, GR-44, GR-45, GR-46, GR-50, GR-51, GR-52, GR-53, GR-60, GR-61, GR-63

**Not Executed (12):**

| Gate | Tier | Reason Not Run | Impact |
|------|------|----------------|--------|
| BV-01–BV-04 | REQUIRED (brief) | Ran in Phase 1, not included in Phase 3A JSON | None (results tracked in execution tracker) |
| GR-05b | ADVISORY | Code exists but result not in JSON | Low — informational only |
| GR-07 | RECOMMENDED | Code shares block with GR-05 but result absent from JSON | Medium — pure B/W check missing |
| GR-33, GR-34 | DIAGNOSTIC | Documented as "not run" in tracker | None — diagnostic only |
| GR-48 | REQUIRED | Never run (meta-gate, requires all results collected first) | **HIGH — INCOMPLETE verdict should have been issued** |
| GR-49 | RECOMMENDED | Never run (process check on output file) | Medium — no integrity verification of results |
| GR-62 | REQUIRED | Result not in initial JSON (tracked in execution tracker separately) | Low — was checked, just not in JSON |
| GR-64 | REQUIRED | Post-weaver gate, tracked separately | Low — was checked, just not in JSON |

### 1.2 Refine Run: 25/42 Gates Executed

**Not re-run (with rationale from refine notes):** GR-04, GR-05, GR-07, GR-08, GR-10, GR-13, GR-15, GR-60, GR-61, plus all gates not run initially. Refine notes say "no REFINE changes affected these." This is defensible for GR-04/GR-10 but **GR-60 (WCAG contrast) was a known failure with 48 violations** — the REFINE cycle explicitly addressed contrast ("turn on the lights"), yet GR-60 was not re-run to verify the fix.

### 1.3 Coverage Verdict

GR-48 (Gate Coverage meta-gate) was NEVER executed in either run. Had it run after the initial pass, it would have flagged: missing GR-07, GR-05b, GR-48 itself, GR-49, and potentially GR-62/GR-64 (depending on whether those were collected before GR-48 ran). The REQUIRED gate count would have been 15-17/19, triggering INCOMPLETE verdict per manifest spec.

---

## 2. False Positive Analysis

### 2.1 GR-15 (Single Margin > 96px): CONFIRMED FALSE POSITIVE
The 240px marginLeft/Right on `.container` is `margin: 0 auto` centering a 960px container in a 1440px viewport. GR-15 checks ALL `marginTop/marginBottom/paddingTop/paddingBottom` per the code (lines 671-688), but the initial result reports marginLeft/Right which are NOT in the code's check list. **This means the initial result JSON was hand-annotated, not code-generated.** The actual gate code only checks vertical spacing properties, so at DPR 0.667 (physical 960px viewport), the auto-centering margins would be 0px (container fills viewport). Conclusion: either the gate was run at true 1440px CSS and auto margins were misidentified, or the result was editorially constructed. Either way, GR-15 needs a filter for `margin: auto` patterns.

### 2.2 GR-05 (Font Trinity): BORDERLINE, NOT FALSE POSITIVE
Reports "4 fonts: Inter, JetBrains Mono, Instrument Serif, monospace." The code (lines 302-341) correctly separates rendered vs fallback violations and exempts generic families. If the code ran correctly, `monospace` is a generic family and would be excluded. The JSON detail says "monospace is generic fallback, 3 real families" — this suggests GR-05 should have PASSED. **The FAIL was incorrectly recorded.** The gate code would produce `renderedViolations: 0` for generic families, which means `PASS`. This is a result-recording error, not a gate logic error.

### 2.3 GR-08 (Border Hierarchy): REAL FAILURE, DPR-CONFOUNDED
Reports 3.75/3/0.75px borders, expected 4/3/1. At DPR 0.667, computed border widths are 4×0.667=2.67, 3×0.667=2.0, 1×0.667=0.67. The observed 3.75/3/0.75 pattern does NOT match a simple DPR scaling of 4/3/1. The tolerance bands (3.5-4.5/2.5-3.5/0.5-1.5) would pass 3.75 as primary, 3.0 as secondary, 0.75 as tertiary. **The gate should have PASSED under its own tolerance bands.** This appears to be another result-recording error.

### 2.4 GR-19 (Empty Containers): INTENTIONAL DESIGN, NOT FALSE POSITIVE
4 empty boundary divs (`boundary-z1-z2` through `boundary-z4-z5`) flagged. These are zone transition elements. The gate code (lines 363-369) flags empty divs with `height > 10`. The gate is working correctly — the question is whether boundary divs should be exempted. Recommendation: add a class-name exemption for `boundary-*` or `transition-*` patterns.

### 2.5 GR-11 Refine (Background Delta): GATE LOGIC BUG
Refine run reports "NON-ADJACENT PAIR: Z2 vs Z4 delta=6. All ADJACENT deltas >= 16." The gate code (lines 546-581) iterates `sections` in DOM order and checks `i` vs `i+1` — this IS adjacent pairs only. For Z2 vs Z4 to appear, either: (a) Z3 was not matched by the selector `section, [class*="zone"], [class*="section"]`, or (b) the result was manually computed for all pairs. If (a), the selector is failing to find the dark zone. If (b), the gate is working but the result JSON includes non-adjacent analysis the gate doesn't perform. **Likely (b) — the orchestrator computed all-pairs deltas outside the gate code.** This creates a mismatch between what the gate specification says and what was recorded.

---

## 3. Gate-PA Effectiveness Correlation

### 3.1 Gates that PASSED — Did PA Agree?

| Gate | Status | PA Agreement | Notes |
|------|--------|-------------|-------|
| GR-01 (Border Radius) | PASS | YES | No auditor flagged border-radius issues |
| GR-03 (Container Width) | PASS | YES | Container correctly 940-960px |
| GR-11 initial (Bg Delta) | PASS | YES | Auditors found zone differentiation effective |
| GR-14 (Stacked Gap) | PASS | YES | No excessive gaps flagged by auditors |
| GR-44 (Trailing Void) | PASS | YES | No trailing whitespace void flagged |

### 3.2 Gates that FAILED — Did PA Find Same Issues?

| Gate | Status | PA Agreement | Notes |
|------|--------|-------------|-------|
| GR-60 (WCAG Contrast) | FAIL (48) | **STRONG YES** | 9/9 auditors flagged dark zone invisibility — the dominant finding |
| GR-50 (Multi-Coherence) | FAIL | PARTIAL | Z3->Z4 single-channel noted by some auditors, but not dominant concern |
| GR-51 initial (Heading Hierarchy) | FAIL | WEAK | Some auditors noted heading structure but not a primary finding |

### 3.3 False Negatives — Gates PASSED but PA Found Problems

| Gate | Status | PA Finding | Gap Analysis |
|------|--------|-----------|-------------|
| GR-13 (Stacked Gap CSS) | PASS | Auditors flagged dark zone as "wall of text" — pacing issue not captured by gap measurement | GR-13 measures CSS gap between sections, not within-section density. No gate measures content density per viewport. |
| GR-45 (Typography Variation) | PASS | Auditors noted "somewhat monotonous typography within zones" | GR-45 checks H2 font-size bands. Does not check body text variation, weight variation, or tracking variation within zones. |
| All identity gates | PASS | Auditors noted navigation rail dots lacked labels (GR-52 refine caught this) | Gap between initial and refine — identity gates don't check newly added elements |

---

## 4. GR-48 Coverage Meta-Gate

**Status:** Never executed in either run.

**What it would have caught (initial):**
- Missing from REQUIRED (19 needed): GR-07 (if counted, but GR-07 is RECOMMENDED not REQUIRED), GR-62, GR-64 — both tracked outside JSON
- Missing from RECOMMENDED (>=5/9): GR-07, GR-49 — likely still 7/9 present, would PASS recommended threshold
- **True coverage gap:** GR-48 itself is self-referential (excluded from its own array), but the real issue is that results were split across JSON + execution tracker + orchestrator notes, making aggregation impossible for GR-48.

**How to ensure it runs next time:** The orchestrator must collect ALL gate results into a single array before calling `runGateCoverage()`. Currently, BV gates, GR-61, GR-62, and GR-64 are tracked separately. Solution: gate runner should produce a single unified results array that includes ALL gate results, regardless of execution phase.

---

## 5. GR-50 Multi-Coherence Calibration

Initial run: "Z3→Z4 boundary has only 1 channel shift (background)." Refine run: "Z1→Z2: 2 channels, Z4→Z5: 2 channels."

**The gate code for GR-50 is actually the Conviction Statement check (lines 1189-1221), NOT a multi-coherence check.** The gate-manifest.json lists GR-50 as "Conviction Statement" under ADVISORY. The multi-coherence results in the JSON appear to be manually assessed by the orchestrator, not gate-runner-core.js output.

There is NO programmatic multi-coherence gate in the codebase. The spec lists GR-50 as "Conviction Statement" but the results use it for multi-coherence reporting. **This is a gate ID collision** — the manifest says GR-50 = Conviction Statement, but the build used it for multi-coherence.

---

## 6. GR-64 Usability Priority

The orchestrator overrode GR-64 because the regex patterns were too strict. The code (lines 1574-1621) checks for patterns like `/readab/i`, `/legib/i`, `/font.?size/i` in Fix #1. The weaver used "text too small" / "reading size" which would match `/readab/i` (via "reading") and `/text\s+size/i`. **The override may have been unnecessary** — the patterns seem broad enough. However, the note says patterns didn't match, suggesting the actual Fix #1 text used different phrasing.

---

## 7. BV-01 through BV-04 (Brief Verification)

All 4 PASS with no detail recorded in the gate results JSON. BV results live only in the execution tracker (Phase 1 section). The tracker confirms all PASS but provides no measured values (tier counts, delta values, verb ratios, suppressor list). **These are rubber stamps as recorded.** The code (lines 33-138) produces detailed measurements, but the orchestrator did not preserve them.

---

## 8. DPR Problem Impact

**DPR 0.667 on Retina Mac MCP.** Workaround: set viewport to 960x600 physical = 1440x900 CSS.

**Gates affected by DPR:**
- GR-05/GR-07: Color checks — NOT affected (colors are DPR-independent)
- GR-08: Border hierarchy — POTENTIALLY affected (subpixel rendering at non-integer DPR)
- GR-09: Border weight hierarchy — POTENTIALLY affected (same reason as GR-08)
- GR-15: Single margin — AFFECTED (auto margins change with physical viewport)
- GR-60: WCAG contrast — NOT affected (contrast ratios are DPR-independent)
- GR-61: DPR validation — DIRECTLY affected (FAIL by definition)
- GR-62: Screenshot quality — AFFECTED (screenshot dimensions differ)
- GR-14: Visual gap — POTENTIALLY affected (getBoundingClientRect at non-1.0 DPR)

**Count: 5-6 gates give potentially unreliable results at non-1.0 DPR.**

**Fix:** The gate-runner-core.js `checkDPR()` (lines 1483-1510) already documents the correct fix: recreate browser context with `{ deviceScaleFactor: 1 }`. The orchestrator should do this BEFORE any gate execution, not just before screenshots. Alternatively, add a DPR correction factor to border/margin measurements.

---

## 9. Gate Execution Performance

No timing data was captured for individual gates. The execution tracker shows:
- Full initial run (30 gates): ~10-15 minutes (estimated from timestamps)
- Full refine run (25 gates): ~5-10 minutes (fewer gates, no screenshots)

The most expensive gates are likely GR-60 (WCAG contrast — iterates all text elements with luminance calculations) and GR-21 (Cognitive Overload — iterates all elements per viewport slice). Without instrumentation, optimization is guesswork.

---

## 10. Missing Gate Dimensions

Quality dimensions with NO gate coverage:

| Dimension | Impact | Proposed Gate |
|-----------|--------|--------------|
| **Hover states** | Interactive feedback missing entirely | GR-65: Check `:hover` rules exist for links/buttons |
| **Component library adoption** | Builder may ignore components.css | GR-66: Compare class names in HTML against components.css selectors |
| **Within-section density** | Dark zone "wall of text" not caught | GR-67: Max content height without visual break per section |
| **Animation/transition quality** | Scroll animations, transitions | GR-68: Check `transition` or `animation` properties exist |
| **Responsive breakpoint count** | Only 1440 and 768 tested | Already addressed by GR-62 but 1024 was skipped |
| **Inter-zone content balance** | One zone 5x taller than another | Partially covered by GR-52 but no max ratio check |
| **Color palette count** | Warm palette check exists but no total palette audit | GR-69: Total distinct colors used (prevent visual noise) |
| **Semantic landmark depth** | ARIA coverage beyond skip-link | Partially in GR-10 but no depth check |

---

## Key Findings Summary

1. **GR-48 never ran** — the one gate designed to catch missing gates was itself missing. Circular failure.
2. **Result recording diverged from code** — at least 3 gates (GR-05, GR-08, GR-15) have JSON results that don't match what the code would produce. The orchestrator appears to have manually constructed or editorially adjusted results.
3. **GR-50 gate ID collision** — manifest says Conviction Statement, build used it for multi-coherence. No programmatic multi-coherence gate exists.
4. **GR-11 non-adjacent pair bug** — refine results include non-adjacent zone comparisons the code doesn't perform, creating a false failure.
5. **BV gates are rubber stamps** — PASS recorded with zero evidence preserved.
6. **5-6 gates unreliable at DPR 0.667** — the workaround is incomplete; DPR should be corrected before ANY gate execution.
7. **No within-section density gate** — the dominant PA finding (dark zone wall of text) has no programmatic detection.
