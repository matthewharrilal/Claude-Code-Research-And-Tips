# COMPREHENSIVE AUDIT: Files 14-17 Surgery Plans

**Auditor:** Opus 4.6 comprehensive auditor
**Date:** 2026-02-24
**Scope:** Every surgical edit, line change, consolidation, propagation cascade, orphan risk, and implementation detail from files 14-17.
**Source files:**
- `14-gate-surgery-plan.md` (777 lines)
- `15-manifest-surgery-plan.md` (410 lines)
- `16-pa-surgery-plan.md` (644 lines)
- `17-removal-propagation-map.md` (507 lines)

---

## FILE 14: GATE-RUNNER-CORE.JS SURGICAL REPLACEMENT PLAN

### Line Budget Table (Complete)

| Section | Operation | Lines Freed | Lines Added | Net |
|---------|-----------|------------|-------------|-----|
| 1A | Consolidate GR-05 + GR-07 overlap | 76 | 44 | +32 |
| 1B | Merge GR-12 into GR-18 (remove standalone) | 20 | 5 | +15 |
| 1C | Trim GR-21 verbose slicing code | 52 | 44 | +8 |
| 1D | Trim GR-22 verbose detection code | 56 | 51 | +5 |
| 2A | Add GR-60 (WCAG contrast, REQUIRED) | 0 | 55 | -55 |
| 3A | Fix GR-44 (trailing void measurement) | 34 | 37 | -3 |
| 3B | Fix GR-14 (parent scoping) | 1 | 3 | -2 |
| 4A-C | Tier reclassifications | 0 | 0 | 0 |
| **TOTAL** | | **239** | **239** | **0** |

**Net change: ZERO lines. File stays at 1,436 lines.**

---

### INVENTORY OF ALL ITEMS FROM FILE 14

| Item ID | Type | Description | Target File(s) | Lines Freed/Consumed | Tier | In 8-Change Plan? |
|---------|------|-------------|----------------|---------------------|------|-------------------|
| **GS-01A** Consolidate GR-05+GR-07 | CONSOLIDATION | Delete GR-05 (L234-277, 43 lines) and GR-07 (L309-342, 33 lines) — 76 lines total. Both iterate all DOM elements with overlapping pure B/W checks. Replace with single merged gate (44 lines) producing GR-05a (visible cold, REQUIRED), GR-05b (sub-perceptual, ADVISORY), GR-07 (pure B/W visible-text-only, RECOMMENDED). New code: single `querySelectorAll('*').forEach`, `parseRGB` with alpha, `effectiveVisibility > 20` threshold for cold split, `hasText` filter for pure B/W. | gate-runner-core.js | +32 freed | MUST | YES |
| **GS-01A-sat1** GR-48 REQUIRED_GATES update for GR-07 removal | PROPAGATION | Remove 'GR-07' from REQUIRED_GATES array (L1332). Keep 'GR-05' (now means GR-05a). | gate-runner-core.js L1332 | 0 | MUST | YES |
| **GS-01A-sat2** GR-48 RECOMMENDED_GATES update for GR-07 addition | PROPAGATION | Add 'GR-07' to RECOMMENDED_GATES array (L1338). | gate-runner-core.js L1338 | 0 | MUST | YES |
| **GS-01A-sat3** gate-manifest.json GR-07 tier change | PROPAGATION | Move GR-07 from REQUIRED to RECOMMENDED. Add GR-05b as ADVISORY. | gate-manifest.json | 0 | MUST | PARTIAL (not in 8-change but required) |
| **GS-01A-sat4** gate-runner-spec.md GR-05/GR-07 updates | PROPAGATION | Update GR-05 description (split), note GR-07 tier change to RECOMMENDED, "visible-text-only" scope. | gate-runner-spec.md | 0 | SHOULD | NO |
| **GS-01B** Remove standalone GR-12, merge into GR-18 | CONSOLIDATION | Delete GR-12 (L576-597, 20 lines). Add 5-line letter-spacing sub-check inside GR-18 after opacity check (~L835). Letter-spacing < 0.025em classified as `type: 'sub-perceptual-letter-spacing'` in ghosts array. Effective tier downgrades from REQUIRED to RECOMMENDED. | gate-runner-core.js | +15 freed | MUST | YES |
| **GS-01B-sat1** GR-48 REQUIRED_GATES remove GR-12 | PROPAGATION | Remove 'GR-12' from REQUIRED_GATES array (L1333). | gate-runner-core.js L1333 | 0 | MUST | YES |
| **GS-01B-sat2** gate-manifest.json GR-12 removal | PROPAGATION | Remove GR-12 from REQUIRED, note "absorbed into GR-18". | gate-manifest.json | 0 | MUST | PARTIAL |
| **GS-01B-sat3** gate-runner-spec.md GR-12 removal | PROPAGATION | Remove GR-12 row, add note to GR-18 row about letter-spacing sub-check. | gate-runner-spec.md | 0 | SHOULD | NO |
| **GS-01B-sat4** Verdict summary GR-12 removal | PROPAGATION | Remove GR-12 from perceptionGates list (L756). | gate-runner-core.js L756 | 0 | MUST | YES |
| **GS-01C** Trim GR-21 Cognitive Overload | SURGERY | Delete GR-21 (L927-978, 52 lines). Replace with compacted 40-line version: inline `parseRGBLocal`, combine sliceResults into single maxDistinct tracker, add alpha < 0.1 exclusion, raise threshold from 4 to 6 (ME-028 for COMPOSED mode). | gate-runner-core.js | +8 freed | SHOULD | YES |
| **GS-01D** Trim GR-22 Color Zone Conflict | SURGERY | Delete GR-22 (L980-1035, 56 lines). Replace with 48-line compacted version adding skip-link exemption: `el.classList.contains('skip-link') || el.closest('.skip-link') || el.matches('[class*="skip"]')`. | gate-runner-core.js | +5 freed | SHOULD | YES |
| **GS-02A** Add GR-60 WCAG Contrast Legibility | ADDITION | New REQUIRED gate, 55 lines. Insert at end of Section 2 (~L700). Implements: `relLum()` relative luminance, `contrast()` ratio, `parseRGB()` with alpha, `getEffBg()` DOM tree walker for effective background, targets `p,span,a,li,h1-h6,td,th,label,figcaption,blockquote,cite,dt,dd,summary,caption,text,tspan`. WCAG AA: normal text 4.5:1, large text (>=18px or >=14px bold) 3.0:1. Reports total, passed, failures with samples. | gate-runner-core.js | -55 consumed | MUST | YES (ME-003) |
| **GS-02A-sat1** GR-48 REQUIRED_GATES add GR-60 | PROPAGATION | Add 'GR-60' to REQUIRED_GATES array (L1332). | gate-runner-core.js L1332 | 0 | MUST | YES |
| **GS-02A-sat2** gate-manifest.json add GR-60 | PROPAGATION | Add GR-60 to REQUIRED tier. | gate-manifest.json | 0 | MUST | PARTIAL |
| **GS-02A-sat3** gate-runner-spec.md add GR-60 | PROPAGATION | Add GR-60 row: Perception, REQUIRED, Post-build, Playwright. | gate-runner-spec.md | 0 | SHOULD | NO |
| **GS-02A-sat4** Verdict summary add GR-60 | PROPAGATION | Add GR-60 to perceptionGates list. | gate-runner-core.js | 0 | MUST | YES |
| **GS-03A** Fix GR-44 Trailing Void Measurement | SURGERY | Replace GR-44 (L702-735, 34 lines) with 37-line version. Key fixes: (1) `document.documentElement.scrollHeight` instead of `body.getBoundingClientRect().bottom`, (2) `rect.bottom + scrollTop` for absolute positioning, (3) skip `opacity === 0` elements, (4) report last visible element tag+class. Same gate ID/name/threshold (300px). | gate-runner-core.js | -3 consumed | MUST | YES (ME-007) |
| **GS-03B** Fix GR-14 Structural False Positives | SURGERY | Replace L638 single query with 4-line scoped query: `main, [role="main"], body` as container, `:scope >` for direct children only, fallback to original selector if scoped yields < 2 sections. | gate-runner-core.js L627-678 | -2 consumed | SHOULD | YES (ME-012) |
| **GS-04A** Downgrade GR-43 to RECOMMENDED | SURGERY | In GR-48 (L1332): Remove 'GR-43' from REQUIRED_GATES. In GR-48 (L1338): Add 'GR-43' to RECOMMENDED_GATES. In verdict summary (L760): Remove GR-43 from outputGates filter, add to recommended. | gate-runner-core.js | 0 | SHOULD | YES (ME-026) |
| **GS-04A-exact1** REQUIRED_GATES array full replacement | SURGERY | **Old (L1332):** `'GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-07','GR-08','GR-09','GR-10','GR-11','GR-12','GR-13','GR-14','GR-15','GR-43','GR-44'` **New:** `'GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10','GR-11','GR-13','GR-14','GR-15','GR-44','GR-60'` (Removes GR-07, GR-12, GR-43; adds GR-60) | gate-runner-core.js L1332 | 0 | MUST | YES |
| **GS-04A-exact2** RECOMMENDED_GATES array full replacement | SURGERY | **Old (L1338):** `'GR-17','GR-18','GR-19','GR-20','GR-45','GR-49','GR-51','GR-52'` **New:** `'GR-07','GR-17','GR-18','GR-20','GR-43','GR-45','GR-49','GR-51','GR-52'` (Adds GR-07, GR-43; removes GR-19) | gate-runner-core.js L1338 | 0 | MUST | YES |
| **GS-04A-exact3** identityGates filter update | SURGERY | **L753:** Update to `['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-08','GR-09','GR-10']` (remove GR-07) | gate-runner-core.js L753 | 0 | MUST | YES |
| **GS-04A-exact4** perceptionGates filter update | SURGERY | **L756:** Update to `['GR-11','GR-13','GR-14','GR-15','GR-44','GR-60']` (remove GR-12, add GR-60) | gate-runner-core.js L756 | 0 | MUST | YES |
| **GS-04B** Downgrade GR-19 to ADVISORY | SURGERY | Remove from RECOMMENDED_GATES (done in GS-04A-exact2). gate-manifest.json: move GR-19 to ADVISORY tier. | gate-manifest.json | 0 | SHOULD | YES (ME-027) |
| **GS-04C** Fix GR-17 List Item Threshold | SURGERY | Move `li` from 12px-minimum group to 4px-minimum group. Replace L792: `'p, li, blockquote, .callout'` with `'p, blockquote, .callout'`. Add `li` to table-cell group at L801: `'td, th, li'`. Net zero lines. | gate-runner-core.js L792, L801 | 0 | COULD | YES (ME-029) |

### Gate Tier Changes Summary (from File 14)

| Gate | Old Tier | New Tier | Mechanism |
|------|----------|----------|-----------|
| GR-05 | REQUIRED (single) | GR-05a REQUIRED + GR-05b ADVISORY | Split via ME-010 |
| GR-07 | REQUIRED | RECOMMENDED | Downgrade via ME-024 |
| GR-12 | REQUIRED | Absorbed into GR-18 (RECOMMENDED) | Merge via ME-025 |
| GR-19 | RECOMMENDED | ADVISORY | Downgrade via ME-027 |
| GR-43 | REQUIRED | RECOMMENDED | Downgrade via ME-026 |
| GR-60 | N/A (new) | REQUIRED | Addition via ME-003 |

**New REQUIRED gate count: 16** (was 18: remove GR-07, GR-12, GR-43 = 15, add GR-60 = 16)

### Satellite Updates Required (outside gate-runner-core.js)

| Target | Edits Needed | Details |
|--------|-------------|---------|
| gate-manifest.json | ~8 edits | REQUIRED: remove GR-07, GR-12, GR-43, add GR-60 (count 18->16). RECOMMENDED: add GR-07, GR-43, remove GR-19 (count 8->9). ADVISORY: add GR-19 (count 5->6). Update verdictLogic REBUILD and REFINE. |
| gate-runner-spec.md | ~10 edits | GR-05 description split, GR-07 tier RECOMMENDED, GR-12 row removed, GR-18 description updated, GR-19 tier ADVISORY, GR-21 threshold 4->6, GR-22 skip-link exempt, GR-43 tier RECOMMENDED, GR-44 scrollHeight note, GR-60 new row, summary counts. |
| MANIFEST.md | ~3 edits | REQUIRED/RECOMMENDED/ADVISORY counts if referenced. |

### Deferred Enrichments (NOT in this surgery)

| ME | Gate | Lines Needed | Reason |
|----|------|-------------|--------|
| ME-011 | GR-06 font check rewrite | ~15 net | Low priority (SIGNIFICANT, rank 11) |
| ME-013 | GR-09 tolerance fix | ~5 net | Requires testing |
| ME-014 | GR-61 (font size) | ~50 net | Would push +50 over budget. RECOMMENDED for next round. |
| ME-030 | Viewport namespacing | ~10 net | Meta-gate schema change |
| ME-040 | GR-62 (text overflow) | ~60 net | Third-priority new gate. RECOMMENDED for next round. |

### Implementation Order (from File 14, Section 8)

1. Consolidate GR-05 + GR-07 (Section 1A) -- largest savings
2. Remove GR-12, merge into GR-18 (Section 1B)
3. Trim GR-21 and GR-22 (Sections 1C, 1D)
4. Add GR-60 (Section 2A) -- consumes freed lines
5. Fix GR-44 (Section 3A)
6. Fix GR-14 (Section 3B)
7. Update GR-48 arrays (Section 4A)
8. Update verdict summary (Section 4A)
9. Fix GR-17 li threshold (Section 4C)

### Risk Assessment (from File 14)

| Risk | Impact | Mitigation |
|------|--------|------------|
| GR-60 false positives on decorative text | LOW | Only checks elements with textContent.trim().length > 0; walks DOM tree for real bg |
| GR-05/GR-07 consolidation edge case | MEDIUM | Opacity threshold 0.3 conservative; effectiveVisibility > 20 catches most visible cold |
| GR-12 removal allows sub-perceptual letter-spacing | LOW | GR-18 absorbs at RECOMMENDED; range invisible to humans |
| GR-44 measurement baseline change | LOW | scrollHeight more accurate; same 300px threshold |
| GR-14 scoping too aggressive | MEDIUM | Fallback: if :scope > yields < 2, use original selector |

---

## FILE 15: MANIFEST.MD SURGICAL REPLACEMENT PLAN

### Compression Opportunities (how 15 lines are freed)

| Opportunity | Location | Old Lines | New Lines | Freed | Method |
|-------------|----------|-----------|-----------|-------|--------|
| R-1: Verdict logic dedup | L275-287 | 13 | 3 | 10 | Replace full 8-rule priority list + combination paragraph with 3-line summary referencing Phase 3C as authoritative copy |
| R-2: Historical failures to table | L652-663 | 14 | 11 | 3 | Convert 7 prose failure modes to compact table (Failure/Suppressor/Gate/Fix columns) |
| R-3: Evidence taxonomy note | L841 | 2 | 1 | 1 | Compress 2-line note to 1-line: "The 6-level version from council-verdict.md CF-04 is authoritative. Some artifacts use subsets." |
| R-5: Known limitations compress | L969-971 | 3 | 2 | 1 | Compress limitation prose from full sentence to parenthetical |
| **TOTAL** | | | | **15** | |

### All 6 Enrichments Absorbed

| Item ID | Type | Description | Target | Lines Added | Lines Freed (offset) | Net | Tier |
|---------|------|-------------|--------|------------|---------------------|-----|------|
| **MS-01** ME-005: Fix Verdict Logic for Mechanical Identity Failures | SURGERY | **Section 3 (L275-285) old:** Full 8-rule verdict priority list (13 lines). **New:** 3-line summary + 2-line MECHANICAL EXCEPTION ("If ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision), verdict is REFINE, not REBUILD"). **Phase 3C (L505-512):** Add 1 line after L512: "MECHANICAL EXCEPTION: If ALL identity gate failures are MECHANICAL..." | MANIFEST.md L275-287, L505-512 | 5 (Section 3) + 1 (Phase 3C) = 6 | 10 (R-1) | -1 | MUST |
| **MS-02** ME-008: Add Usability Circuit Breaker | ADDITION | Insert after L492 ("Output: Gestalt synthesis report..."), before L494 ("Phase 3C: Verdict"). 4-line protocol: scan 9 auditor reports for BLOCKING-severity usability findings, elevate to BLOCKING-USABILITY, annotate for Weaver as "must be Fix #1", verify in SHIP WITH FIXES. | MANIFEST.md L492-494 | 4 | 0 | +4 | MUST |
| **MS-03** ME-017: Add Phase 4: Fix Application Protocol | ADDITION | Insert after L521, before L523 ("Per-Agent Output Logging"). 12-line new phase: trigger on SHIP WITH FIXES + ALL MECHANICAL; steps: apply CSS fixes only, re-run failed gates, update verdict, budget <=15 min / <=50 CSS lines. Also **replace** L605 circuit breaker: "1 REBUILD + 1 REFINE" -> "1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix" (0 net). | MANIFEST.md L521-523, L605 | 12 + 0 | 0 | +12 | MUST |
| **MS-04** ME-042: Update MANIFEST Line Counts | SURGERY | In-place value replacements: L15 (`components.css` line count verify), L67 runtime `80-105` -> `80-180 minutes`, L346-356 complexity table actuals, L921 `components.css` path entry. Add pre-flight parenthetical to L14. All cell/value changes, zero new lines. | MANIFEST.md L15, L67, L346-356, L921 | 0 | 0 | 0 | SHOULD |
| **MS-05** ME-045: Add Context Budget Awareness | ADDITION | Insert after L67 (architecture section). 2-line note: "Context sessions: Typically 2-3 sessions due to context exhaustion. Plan session boundaries between Phase 2 (build) and Phase 3A (gates). Save all state to files before each boundary." Coordinates with ME-042 runtime update. | MANIFEST.md L67-68 | 2 | 0 | +2 | SHOULD |
| **MS-06** ME-046: Corrected Screenshot Recovery Protocol | ADDITION | Insert after L476 ("Output: Complete screenshot set..."). 3-line protocol: "If re-capture needed, corrected screenshots MUST cover entire page at regular intervals (every 900px scroll height), not selected regions. Correction must be algorithmic, not curated." | MANIFEST.md L476 | 3 | 0 | +3 | SHOULD |

### Indirect MANIFEST Updates (PA Question Changes -- Value Replacements Only)

| Item ID | Type | Description | Location | Net Lines |
|---------|------|-------------|----------|-----------|
| **MS-07** ME-021 (PA-80 addition) | PROPAGATION | L153: Auditor E count from 6 to 7, add PA-80 to question list | MANIFEST.md L153 | 0 |
| **MS-08** ME-022 (PA-81 addition) | PROPAGATION | Route to Auditor E or B: update count accordingly | MANIFEST.md L150 or L153 | 0 |
| **MS-09** ME-023 (PA-54 addition) | PROPAGATION | L155: Auditor G count from 7 to 8, add PA-54 to question list | MANIFEST.md L155 | 0 |
| **MS-10** ME-037 retire PA-06 | PROPAGATION | L150: Auditor B count from 8 to 7, remove PA-06 | MANIFEST.md L150 | 0 |
| **MS-11** ME-037 retire PA-09 | PROPAGATION | L151: Auditor C count from 11 to 10, remove PA-09 | MANIFEST.md L151 | 0 |
| **MS-12** ME-037 retire PA-40 | PROPAGATION | L154: Auditor F count from 6 to 5, remove PA-40 | MANIFEST.md L154 | 0 |
| **MS-13** L159 total update | PROPAGATION | Change "69 questions across 9 auditors" to 69 - 3 + 3 = 69 (if PA-80/81/54 added, net zero) or 66 (if only retirements). Formula: 69 - 4 (ME-037) + 3 (ME-021/022/023) = 68 per file 15, or 69 - 3 + 3 = 69 per file 16. | MANIFEST.md L159 | 0 |

### Net Budget Accounting (+12 net within +20 budget)

| Item | Lines Added | Lines Freed | Net |
|------|-----------|------------|-----|
| R-1: Verdict logic compression | -- | 10 | -10 |
| R-2: Historical failures to table | -- | 3 | -3 |
| R-3: Evidence taxonomy note | -- | 1 | -1 |
| R-5: Known limitations compress | -- | 1 | -1 |
| ME-005: Mechanical exception (Section 3) | 5 | (via R-1) | +5 |
| ME-005: Mechanical exception (Phase 3C) | 1 | -- | +1 |
| ME-008: Usability circuit breaker | 4 | -- | +4 |
| ME-017: Phase 4 fix application | 12 | -- | +12 |
| ME-017: Circuit breaker L605 update | 0 | -- | 0 |
| ME-042: Line count updates | 0 | -- | 0 |
| ME-045: Context sessions note | 2 | -- | +2 |
| ME-046: Screenshot recovery protocol | 3 | -- | +3 |
| PA question updates (indirect) | 0 | -- | 0 |
| **TOTAL** | **27** | **15** | **+12** |

**+12 net lines. Within +20 budget. 8 lines headroom remaining.**

### Cross-File Coordination Required (from File 15)

| MANIFEST Change | Other File | Update Needed |
|----------------|-----------|---------------|
| ME-005 mechanical exception | gate-manifest.json L55-59 | Add MECHANICAL exception to verdict logic |
| ME-005 mechanical exception | gate-runner-core.js L752-778 | Auto-classify mechanical failures in verdict summary |
| ME-017 Phase 4 | EXECUTION-TRACKER-TEMPLATE.md | Add Phase 4 tracking fields |
| ME-017 Phase 4 | MANIFEST Section 5 dependency graph | Add Phase 4 node after Phase 3C |
| PA question updates | pa-deployment.md | Assignment table updates |
| PA question updates | pa-manifest.md | Checklist updates |
| PA question updates | pa-questions.md | Question definitions |

### Implementation Order (from File 15)

1. Apply compressions FIRST (R-1, R-2, R-3, R-5) -- frees 15 lines
2. Apply ME-042 (line count replacements) -- 0 net
3. Apply ME-005 (verdict logic) -- uses R-1 freed space
4. Apply ME-008 (usability circuit breaker) -- 4 lines
5. Apply ME-017 (Phase 4) -- 12 lines + L605 update
6. Apply ME-045 (context sessions) -- 2 lines
7. Apply ME-046 (screenshot recovery) -- 3 lines
8. Apply PA question updates (indirect) -- value replacements

---

## FILE 16: PA SURGERY PLAN

### Capacity Budget

| File | Current Lines | Compliance | Safe Addition |
|------|--------------|------------|---------------|
| pa-deployment.md | 237 | 94% | +30 lines |
| pa-questions.md | 418 | 94% | +30 lines (shared with deployment) |
| pa-weaver.md | 376 | 95% | +20 lines |
| pa-guardrails.md | 151 | 94% | +10 lines |
| **Total safe budget** | | | **~90 lines** |

### All 3 Question Retirements

| Item ID | Type | Question | Location | Rationale | Lines Saved |
|---------|------|----------|----------|-----------|-------------|
| **PA-R1** Retire PA-06 | RETIREMENT | "Are any words stacking vertically, one per line, in any column?" | pa-questions.md L163, Auditor B | Near-zero failure rate. Never produced an actionable finding across Middle, Ceiling, Flagship, V3 experiments. | ~2 lines |
| **PA-R2** Retire PA-09 | RETIREMENT | "Is there dead space that serves no purpose?" | pa-questions.md L171, Auditor C | Fully subsumed by PA-33 ("silence in music or dropped signal"). Phase 2 confirmed: under void conditions both collapse to identical answer. Under normal conditions PA-33 is strictly superior. | ~2 lines |
| **PA-R3** Retire PA-40 | RETIREMENT | "Does spacing between sections feel consistent?" | pa-questions.md L204, Auditor F | Subsumed by PA-69 ("count visual properties changing at transitions"). PA-69 is more precise and captures everything PA-40 captures plus transition intensity. | ~2 lines |

**Total lines saved from retirements: ~6 lines in pa-questions.md**
**Auditor load: B 8->7, C 11->10, F 6->5**

**NOT retired (with rationale):**
- PA-50: Quantitative void counting is UNIQUE (no other question counts viewport-heights)
- PA-51: Page-level density characterization provides summary label Weaver uses for tier classification
- PA-33: KEEPER from PA-09/PA-33 pair -- better framing, richer signal

### Void Collapse Rule (Deduplication)

**Type:** ADDITION
**Location:** pa-questions.md Section 3.6 (Void Prevention)
**Lines:** +4
**Text:** If PA-50 detects >= 3 consecutive blank viewports, PA-33 auto-answered as "DROPPED SIGNAL" and PA-51 auto-answered as "VOID-DOMINATED." Auditor C answers PA-50 in detail and references for collapsed questions.

### All 3 New Questions

| Item ID | Type | Question ID | Full Text | Routing | Rationale | Lines Added |
|---------|------|-------------|-----------|---------|-----------|-------------|
| **PA-N1** Content Promise vs Delivery | ADDITION | PA-54 (ME-023) | "Does the page deliver on its structural promises? Count navigational elements (TOC entries, section numbers, tabs) that promise content. How many are fulfilled by visible content? If < 80%, flag as STRUCTURAL PROMISE VIOLATION." | Auditor G (Metaphor+Ideology), G goes 7->8 | Gas Town's Settlement Map promises 12 sections, scroll delivers 3. No current question captures this. | +3 lines in pa-questions.md Section 3.4 |
| **PA-N2** Navigation Usability | ADDITION | PA-80 (ME-021) | "Starting from the middle of the page, can you reach any other section using visible navigation? If the page has TOC/nav, do links appear functional? Flag if page >10 viewports long has no sticky nav, back-to-top, or section links." | Auditor E (Grid+Layout), E goes 6->7 | No current question tests NAVIGATION. | +3 lines in pa-questions.md Section 3.8 |
| **PA-N3** Information Extraction | ADDITION | PA-81 (ME-022) | "For every chart, diagram, or infographic: can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds? If not, the element fails its communicative purpose. Note whether the element is a raster image or HTML/SVG." | Auditor B (Readability+Typography), B goes 7->8 (after PA-06 retirement, net neutral) | Combines ME-022 (information extraction) with PE-006 (image-vs-CSS distinction). | +3 lines in pa-questions.md Section 3.2 |

### Question Count Impact (5-location update for each)

| Auditor | Before | Retirements | Additions | After | Load |
|---------|--------|-------------|-----------|-------|------|
| A | 9 | 0 | 0 | 9 | STABLE |
| B | 8 | -1 (PA-06) | +1 (PA-81) | 8 | STABLE |
| C | 11 | -1 (PA-09) | 0 | 10 | IMPROVED |
| D | 11 | 0 | 0 | 11 | UNCHANGED |
| E | 6 | 0 | +1 (PA-80) | 7 | IMPROVED |
| F | 6 | -1 (PA-40) | 0 | 5 | LIGHTER |
| G | 7 | 0 | +1 (PA-54) | 8 | APPROPRIATE |
| H | 5 | 0 | 0 | 5 | UNCHANGED |
| I | 6 | 0 | 0 | 6 | UNCHANGED |
| **Total** | **69** | **-3** | **+3** | **69** | **NET ZERO** |

### 5-Location Update Pattern for Each PA Routing Change

For EACH question retirement or addition, update:
1. `pa-questions.md` -- question definition row (add or remove)
2. `pa-deployment.md` -- auditor assignment table row + count
3. `MANIFEST.md` -- agent roster question list + count
4. `pa-manifest.md` -- tracking checklist + count
5. `EXECUTION-TRACKER-TEMPLATE.md` -- auditor tracking row + count

Plus totals in:
6. `pa-questions.md` total (L306)
7. `pa-deployment.md` total (L54)
8. `pa-weaver.md` total (L18)
9. `pa-guardrails.md` total (L15)
10. `MANIFEST.md` total (L159)
11. `EXECUTION-TRACKER-TEMPLATE.md` total

### All 11 Enrichments Absorbed (Full Inventory)

| # | Item ID | ME | Type | Description | File(s) | Lines Added | Lines Offset | Net |
|---|---------|-----|------|-------------|---------|------------|-------------|-----|
| 1 | **PE-01** | ME-001 | ADDITION | Experiential Pass (MANDATORY before questions). New Section 2.5 in pa-deployment.md. 18-line protocol: look as READER not evaluator, report illegible/effortful/skipped text, section "## 0. Experiential Pass" at TOP of audit report. | pa-deployment.md | +18 | -6 (deployment compression) | +12 |
| 2 | **PE-02** | ME-006 | SURGERY+ADDITION | Screenshot Validation Gate. (a) REPLACE CSS override (1 line -> 6 lines): add `transition:none`, `visibility:visible`, `transform:none` to existing `animation:none, opacity:1`. (b) ADD Section 2.3a (9 lines): validate no >2 consecutive blank screenshots, blanks <20% total, full-page matches scroll-through. | pa-deployment.md | +5 (CSS) + 9 (gate) = +14 | 0 | +14 |
| 3 | **PE-03** | ME-009 | ADDITION | Experiential Detection Threshold Table. Append to pa-questions.md Appendix B. 7-line table: >=3/9 auditors = CONFIRMED illegibility (Weaver Fix #1), 1/9 = POSSIBLE, 0/9 = no action. | pa-questions.md Appendix B | +7 | -3 (Appendix B compression) | +4 |
| 4 | **PE-04** | ME-015 | ADDITION | Data Corruption Escalation Protocol. Split: (a) pa-questions.md Section 1 preamble, 4-line BLOCKED BY DEFECT protocol (>50% invisible -> answer "BLOCKED BY DEFECT" instead of YES/NO). (b) pa-deployment.md Section 2.4, 6-line: First-Auditor Halt (A checks for catastrophic defects, re-capture if >50%), Full-Page Ground Truth (full-page is GROUND TRUTH, cross-reference scroll-throughs). | pa-questions.md + pa-deployment.md | +4 + 6 = +10 | -5 (questions compression) | +5 |
| 5 | **PE-05** | ME-019 | ADDITION | PA-05 Score as Range. 8-line addition to pa-weaver.md Section 1: present PA-05 as range (lower=conservative, upper=corrected), hypothetical score protocol, Tier 5 PARTIAL counts as 0.5. | pa-weaver.md | +8 | -8 (weaver Section 4.2-4.4 source citation compression) | 0 |
| 6 | **PE-06** | ME-002 | ADDITION | Usability Priority Override. 8-line new Section 5.0 in pa-weaver.md: "Is there ANY finding from ANY auditor that describes something a reader CANNOT READ or CANNOT USE?" If yes, that's Fix #1. Fix priority: (1) readability/usability, (2) visual perception, (3) identity compliance. | pa-weaver.md | +8 | -5 (weaver Section 9.1-9.2 compression) | +3 |
| 7 | **PE-07** | ME-033 | ADDITION | Void Question Deduplication Rule. 4-line addition to pa-questions.md Section 3.6. Void Collapse Rule (covered in retirement section above). | pa-questions.md Section 3.6 | +4 | -6 (retirements) | Already counted |
| 8 | **PE-08** | ME-034 | ADDITION | Defect-Bypass for Cross-Viewport Protocol. 3-line append to pa-deployment.md Section 1.2.1: if defect is identical across all viewports, state ONCE and redirect analysis to viewport-specific differences. | pa-deployment.md | +3 | -2 (1.2.1 compression) | +1 |
| 9 | **PE-09** | ME-035 | SURGERY | Footer/Header Explicit Contrast. Extend PA-02 text to include "header, footer, chart labels, and diagram text." In-cell text extension, net 0 structural lines. | pa-questions.md Section 3.2 PA-02 row | +0 (in-cell) | 0 | 0 |
| 10 | **PE-10** | ME-032 | ADDITION | Mark Pipeline-Introspection PA Questions. Add annotation after PA-55, PA-56, PA-69: "> *Pipeline introspection -- tests compositional model, not reader experience. Weaver weights lower than experiential findings.*" | pa-questions.md Sections 3.7, 3.8 | +3 (1 per question) | 0 | +3 |
| 11 | **PE-11** | ME-057 | ADDITION | Weaver Emotional Arc -> Fix Mapping. 3-line append to pa-weaver.md Section 4.3: after emotional arc synthesis, check if any Top-5 fix improves weakest register. If yes, rank higher. If no corresponding fix, add COMPOSITIONAL note. | pa-weaver.md Section 4.3 | +3 | 0 | +3 |

### Compression Targets (All 4 PA Files)

#### pa-deployment.md Compressions (-6 lines)

| Section | Lines | Compression | How |
|---------|-------|-------------|-----|
| 1.2.1 Cross-Viewport | ~10 | -2 | Compress method paragraph |
| 1.3 PA-05 Cross-Validation | ~20 | -3 | Remove Weaver steps 4-5 (duplicated in pa-weaver.md) |
| 2.1.1 Expected Screenshot Count | ~5 | -1 | Remove "historical reference" sentence |

#### pa-questions.md Compressions (-13 lines)

| Section | Lines | Compression | How |
|---------|-------|-------------|-----|
| 1.1 PA-05 The Question | ~15 | -2 | Remove redundant 5th item ("Overall gestalt impression") |
| 1.5 PA-05 as PRIMARY | ~10 | -3 | Replace CCS paragraph with 1-line reference to pa-weaver.md |
| 4 Quality Framework | ~45 | -5 | Remove duplicate from Section 1.4 preamble, merge scoring table |
| Appendix B Quantitative Guardrails | ~35 | -3 | Inline Layout/Grid table to 2 sentences |

#### pa-weaver.md Compressions (-13 lines)

| Section | Lines | Compression | How |
|---------|-------|-------------|-----|
| 4.2-4.4 Emotional Arc detail | ~65 | -8 | Compress each register's source citations to single reference line |
| 9.1-9.2 12 VALUES items | ~40 | -5 | Remove Source and VA Line columns from 25-row table |

#### pa-guardrails.md Compressions (-7 lines)

| Section | Lines | Compression | How |
|---------|-------|-------------|-----|
| 7 Anti-Patterns table | ~12 | -2 | Remove "What It Detects" column |
| 8 Revision Degradation | ~10 | -2 | Merge columns to single sentence per row |
| 11 Fresh-Eyes | ~20 | -3 | Remove duplication with pa-deployment.md Section 3, keep 3-line summary |

### Net Budget (+40 net across 4 files)

| File | Starting | Freed | Added | Final | Net |
|------|----------|-------|-------|-------|-----|
| pa-deployment.md | 237 | -6 | +42 | ~273 | +36 |
| pa-questions.md | 418 | -19 | +24 | ~423 | +5 |
| pa-weaver.md | 376 | -13 | +19 | ~382 | +6 |
| pa-guardrails.md | 151 | -7 | +0 | ~144 | -7 |
| **TOTAL** | **1,182** | **-45** | **+85** | **~1,222** | **+40** |

**Risk assessment:** +40 net against +30 safe budget, but deployment's +36 includes CSS override (+5 CSS lines, F=0.5 multiplier) and screenshot validation gate (+9 binary checks), making effective_lines ~22. WITHIN SAFE CAPACITY per format multipliers.

### PA Location Map (All Exact File+Section Targets)

#### pa-deployment.md (8 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | 1.2 Auditor Assignments | MODIFY rows B,C,E,F,G | ~0 net | Question retirements+additions |
| 2 | 1.2.1 Cross-Viewport | COMPRESS + APPEND defect-uniformity | +1 | ME-034 |
| 3 | 1.3 PA-05 Cross-Validation | COMPRESS | -3 | Deduplication |
| 4 | 2.1.1 Expected Screenshot Count | COMPRESS | -1 | Deduplication |
| 5 | 2.2 Step 3 CSS Override | REPLACE 1-line with 6-line | +5 | ME-006 |
| 6 | NEW 2.3a Screenshot Validation Gate | ADD | +9 | ME-006 |
| 7 | NEW 2.5 Experiential Pass | ADD | +18 | ME-001 |
| 8 | 2.4 Screenshot-Reading Protocol APPEND | ADD First-Auditor Halt + Ground Truth | +6 | ME-015 |

#### pa-questions.md (15 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | NEW preamble | ADD BLOCKED BY DEFECT protocol | +4 | ME-015 |
| 2 | 1.1 PA-05 The Question | COMPRESS | -2 | Compression |
| 3 | 1.5 PA-05 as PRIMARY | COMPRESS | -3 | Compression |
| 4 | 3.1 Tier 1 PA-02 | EXTEND text (in-cell) | +0 | ME-035 |
| 5 | 3.2 Tier 2 PA-06 | REMOVE row | -2 | Retirement |
| 6 | 3.2 Tier 2 PA-09 | REMOVE row | -2 | Retirement |
| 7 | 3.2 Tier 2 PA-40 | REMOVE row | -2 | Retirement |
| 8 | 3.2 Tier 2 | ADD PA-81 | +3 | ME-022 |
| 9 | 3.4 Metaphor | ADD PA-54 | +3 | ME-023 |
| 10 | 3.6 Void Prevention | ADD Void Collapse Rule | +4 | ME-033 |
| 11 | 3.7 Sub-Perceptual PA-55, PA-56 | ADD pipeline-introspection | +2 | ME-032 |
| 12 | 3.8 Pipeline Integration PA-69 | ADD pipeline-introspection | +1 | ME-032 |
| 13 | 3.8 or new 3.8a | ADD PA-80 | +3 | ME-021 |
| 14 | Appendix B | COMPRESS + ADD experiential thresholds | +4 | ME-009 |
| 15 | 4.1 PA-05 Scale Calibration | COMPRESS | -5 | Compression |

#### pa-weaver.md (5 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | Section 1 Weaver Role | ADD Section 1.1 Range+Hypothetical | +8 | ME-019 |
| 2 | Section 4.2-4.4 Emotional Registers | COMPRESS source citations | -8 | Compression |
| 3 | NEW Section 5.0 Priority Override | ADD | +8 | ME-002 |
| 4 | Section 9.1-9.2 VALUES items | COMPRESS (remove Source/VA Line columns) | -5 | Compression |
| 5 | Section 4.3 PA-Question mapping | APPEND emotional-arc fix mapping | +3 | ME-057 |

#### pa-guardrails.md (3 modifications)

| # | Section | Action | Lines | Enrichment |
|---|---------|--------|-------|------------|
| 1 | Section 7 Anti-Patterns table | COMPRESS | -2 | Compression |
| 2 | Section 8 Revision Degradation | COMPRESS | -2 | Compression |
| 3 | Section 11 Fresh-Eyes | COMPRESS | -3 | Deduplication |

### Enrichments Explicitly Not Included (from File 16)

| Enrichment | Reason |
|-----------|--------|
| ME-031 (false affordance scan) | Low severity MINOR, would push E to 8 questions |
| ME-037 retire PA-07 | PA-07 does not exist in current inventory (already absent/renumbered) |
| ME-051 (experiential replacements from reservoir) | PA-87, PA-99, NEW-07, NEW-17 are speculative (never tested); defer to post-validation |
| ME-052 (audience description) | CONSIDER tier, may conflict with fresh-eyes principle |
| PE-008 (adversarial question prioritization) | LOW severity, First-Auditor Halt addresses root cause |
| PE-014 (cross-validators provide hypothetical scores) | LOW severity, ME-019 covers primary evaluator |
| PE-016 (9 auditors is overkill) | Process observation, not an enrichment |

### Propagation Requirements (from File 16, Section 8)

| Location | What Changes | Why |
|----------|-------------|-----|
| MANIFEST.md auditor roster | Update question counts per auditor | Retirements+additions change loads |
| MANIFEST.md Phase 3B | Add "experiential pass" reference | New protocol step |
| MANIFEST.md Phase 3B->3C handoff | Note BLOCKED BY DEFECT tallying | Weaver needs BLOCKED questions |
| artifact-orchestrator.md screenshot protocol | Add DPR validation | ME-006 expanded overrides |
| artifact-orchestrator.md PA deployment | Add screenshot validation gate reference | ME-006 gate is orchestrator responsibility |
| EXECUTION-TRACKER-TEMPLATE.md | Add "Screenshot validation PASSED: [ ]" and "Experiential pass completed: [ ]" | ME-043 tracking fields |

### Implementation Order (from File 16)

**Phase A: Subtract (2 steps)**
1. Retire PA-06, PA-09, PA-40 from pa-questions.md
2. Apply all compressions across 4 files

**Phase B: Core Protocol (3 steps)**
3. Add expanded CSS override + screenshot validation gate (ME-006)
4. Add experiential pass (ME-001)
5. Add BLOCKED BY DEFECT + First-Auditor Halt + Ground Truth (ME-015)

**Phase C: Weaver Enhancements (3 steps)**
6. Add PA-05 range/hypothetical scoring (ME-019)
7. Add priority override rule (ME-002)
8. Add emotional arc -> fix mapping (ME-057)

**Phase D: Question Changes (4 steps)**
9. Add PA-54, PA-80, PA-81
10. Add Void Collapse Rule (ME-033)
11. Add pipeline-introspection annotations (ME-032)
12. Add experiential threshold table (ME-009)

**Phase E: Cleanup (2 steps)**
13. Update pa-deployment.md auditor assignment table
14. Compress pa-guardrails.md

**Phase F: Propagation (1 step)**
15. Update MANIFEST.md, artifact-orchestrator.md, EXECUTION-TRACKER-TEMPLATE.md

### Verification Checklist (from File 16)

- [ ] pa-questions.md question count = 69 (3 retired + 3 added = net zero)
- [ ] pa-deployment.md auditor assignment table totals match 69
- [ ] Each auditor's question list in deployment matches what's in questions
- [ ] Experiential pass appears BEFORE question answering
- [ ] Screenshot validation gate appears BEFORE auditor deployment
- [ ] BLOCKED BY DEFECT in auditor-visible sections
- [ ] Priority Override in Weaver-only content (NOT in auditor prompts)
- [ ] PA-05 range scoring in Weaver-only content
- [ ] Fresh-eyes NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] All Source citations in pa-weaver.md still present (compressed, not deleted)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 only
- [ ] pa-guardrails.md Section 11 still references fresh-eyes
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3

---

## FILE 17: REMOVAL PROPAGATION MAP

### All 154 Cascading Edits Across 13 Files

#### REMOVAL 1: ME-010 -- Split GR-05 into GR-05a/GR-05b (~22 edits across 8 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | GR-05 function (~L140-280) | Single function | Split into GR-05a (visible, opacity>=0.3) + GR-05b (sub-perceptual, opacity<0.3) |
| 2 | gate-runner-core.js | L1331-1335 REQUIRED_GATES | 'GR-05' | Replace with 'GR-05a' |
| 3 | gate-runner-core.js | (no ADVISORY array) | N/A | Add 'GR-05b' to execution |
| 4 | gate-manifest.json | L21 required.gates | "GR-05" | Replace with "GR-05a" |
| 5 | gate-manifest.json | L19 required.count | 18 | Keep 18 (GR-05a replaces GR-05) |
| 6 | gate-manifest.json | L38-40 advisory.gates | 5 gates | Add "GR-05b" |
| 7 | gate-manifest.json | L37 advisory.count | 5 | 6 |
| 8 | gate-manifest.json | L56 verdictLogic.REBUILD | "ANY identity gate (GR-01-10) FAIL" | Clarify GR-05a FAIL=REBUILD, GR-05b=informational |
| 9 | gate-manifest.json | L62-76 executionOrder | "GR-05" in step 2 | Replace with "GR-05a" in step 2; add "GR-05b" to step 3/4 |
| 10 | gate-manifest.json | L140-147 totalGateCount | inGateRunner:31, total:37, grandTotal:41 | inGateRunner:32, total:38, grandTotal:42 |
| 11 | gate-runner-spec.md | L69 GR-05 row | Single GR-05 row | Split into GR-05a (REQUIRED) and GR-05b (ADVISORY) rows |
| 12 | gate-runner-spec.md | L17-20 Gate Categorization | 18 REQUIRED | Keep 18 (GR-05a replaces) |
| 13 | gate-runner-spec.md | L20 ADVISORY row | 5 | 6 |
| 14 | gate-runner-spec.md | L23 Total count | 35 | 36 |
| 15 | gate-runner-spec.md | L149-151 GATE SUMMARY TABLE | Single GR-05 row | Split into GR-05a (REQUIRED) + GR-05b (ADVISORY) |
| 16 | gate-runner-spec.md | L180 Tier totals | 18 REQUIRED, 5 ADVISORY | 18 REQUIRED, 6 ADVISORY, 36 executable |
| 17 | MANIFEST.md | L98 Layer 6 count | 72 | 73 (net +1 gate) |
| 18 | MANIFEST.md | L142 Gate Runner description | 37 programmatic gate checks | 38 |
| 19 | MANIFEST.md | L245 artifact-gate-runner routing | 37 gate-runner gates | 38 |
| 20 | MANIFEST.md | L276 verdict logic | ANY Identity gate FAIL -> REBUILD | Add "GR-05a FAIL=REBUILD. GR-05b is ADVISORY." |
| 21 | EXECUTION-TRACKER-TEMPLATE.md | L158 Identity gates count | 10 | 10 (GR-05a replaces GR-05) |
| 22 | EXECUTION-TRACKER-TEMPLATE.md | L165 Total | 33 | 34 (advisory +1) |
| 23 | artifact-orchestrator.md | Verdict decision tree | "GR-01-10 identity" | Clarify GR-05a is the identity gate |

**Orphan risk:** ME-018 classification must update GR-05 "MIXED" -> GR-05a "HUMAN-PERCEPTIBLE" + GR-05b "SUB-PERCEPTUAL"
**Implicit dependency:** `isCold()` heuristic must be shared between GR-05a and GR-05b

#### REMOVAL 2: ME-024 -- Downgrade GR-07 REQUIRED->RECOMMENDED (~24 edits across 9 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | L1331-1335 REQUIRED_GATES | Contains 'GR-07' | Remove 'GR-07' |
| 2 | gate-runner-core.js | L1337-1340 RECOMMENDED_GATES | 8 gates | Add 'GR-07' |
| 3 | gate-runner-core.js | GR-07 function body | Checks all elements | Add visible-text-only filter |
| 4 | gate-manifest.json | L20-24 required.gates | Includes "GR-07" | Remove "GR-07" |
| 5 | gate-manifest.json | L19 required.count | 18 | 17 |
| 6 | gate-manifest.json | L29-32 recommended.gates | 8 gates | Add "GR-07" (9 gates) |
| 7 | gate-manifest.json | L28 recommended.count | 8 | 9 |
| 8 | gate-manifest.json | L56 verdictLogic.REBUILD | "ANY identity gate (GR-01-10) FAIL" | "ANY identity gate (GR-01-06, GR-08-10) FAIL = REBUILD. GR-07 counted toward recommended 3+ threshold." |
| 9 | gate-manifest.json | L74 step 2 gates | Includes "GR-07" | Keep in step 2 execution, move to step 3 result tracking |
| 10 | gate-manifest.json | L135 requiredPresent | "17/17" | "16/16" (adjust to new count) |
| 11 | gate-manifest.json | L136 recommendedPresent | "N/8" | "N/9" |
| 12 | gate-runner-spec.md | L17 REQUIRED count | 18 | 17 |
| 13 | gate-runner-spec.md | L19 RECOMMENDED count | 8 | 9 |
| 14 | gate-runner-spec.md | L71 GR-07 row | Under "SECTION 1: IDENTITY GATES (REQUIRED)" | Move to RECOMMENDED section |
| 15 | gate-runner-spec.md | L153 SUMMARY TABLE GR-07 | Identity / REQUIRED | Identity / RECOMMENDED |
| 16 | gate-runner-spec.md | L30 Execution Protocol | "Execute REQUIRED gates (GR-01 through GR-15, GR-43, GR-44)" | Note GR-07 tier exception |
| 17 | gate-runner-spec.md | L53-57 Verdict Logic | "ANY identity gate FAIL = REBUILD" | "ANY identity gate (GR-01-06, GR-08-10) FAIL = REBUILD" |
| 18 | MANIFEST.md | L276 | "ANY Identity gate FAIL -> REBUILD" | Add GR-07 exception note |
| 19 | MANIFEST.md | L646 | Identity gate FAIL / GR-01-GR-10 / REBUILD | Clarify GR-07 exception or update range |
| 20 | MANIFEST.md | L714 | SECTION 1: IDENTITY GATES (GR-01-GR-10) / ANY fail = REBUILD | Update GR-07 exception |
| 21 | artifact-orchestrator.md | Section 0 verdict | "ANY identity gate FAIL -> REBUILD" | Add GR-07 exception |
| 22 | artifact-orchestrator.md | L474 | "ANY identity gate (GR-01-GR-10) fails" | Update to exclude GR-07 |
| 23 | pa-weaver.md | L53 verdict logic | Not directly referencing GR-07 | Check for implicit reference |
| 24 | EXECUTION-TRACKER-TEMPLATE.md | L158 | Identity (GR-01-GR-10) / 10 | Identity (GR-01-GR-06, GR-08-GR-10) / 9 + GR-07 to recommended |
| 25 | EXECUTION-TRACKER-TEMPLATE.md | L31 | gate-runner-core.js line count | May change |

**Orphan risk:** Any documentation listing "10 identity gates" or "GR-01-10" as a unit (multiple locations in MANIFEST and orchestrator)
**Implicit dependency:** GR-48 coverage check -- moving GR-07 out means 16/16 required (not 17/17)

#### REMOVAL 3: ME-025 -- Downgrade GR-12 REQUIRED->RECOMMENDED (~18 edits across 8 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | L1331-1335 REQUIRED_GATES | Contains 'GR-12' | Remove 'GR-12' |
| 2 | gate-runner-core.js | L1337-1340 RECOMMENDED_GATES | 8 gates | Add 'GR-12' |
| 3 | gate-manifest.json | L20-24 required.gates | Includes "GR-12" | Remove |
| 4 | gate-manifest.json | L19 required.count | 18 | Reduce by 1 |
| 5 | gate-manifest.json | L29-32 recommended.gates | 8 gates | Add "GR-12" |
| 6 | gate-manifest.json | L28 recommended.count | 8 | +1 |
| 7 | gate-manifest.json | L57 verdictLogic.REFINE | "ANY perception gate (GR-11-15, GR-44) FAIL" | "ANY perception gate (GR-11, GR-13-15, GR-44) FAIL. GR-12 is RECOMMENDED." |
| 8 | gate-manifest.json | L74 step 2 gates | Includes GR-12 | Keep in execution, track as RECOMMENDED |
| 9 | gate-runner-spec.md | L17-19 tier counts | 18 REQUIRED, 8 RECOMMENDED | Adjust -1/+1 |
| 10 | gate-runner-spec.md | L83 GR-12 row | Under "SECTION 2: PERCEPTION GATES (REQUIRED)" | Move to RECOMMENDED |
| 11 | gate-runner-spec.md | L89 complementary note | References perception gate block | GR-12 no longer in block |
| 12 | gate-runner-spec.md | L157 SUMMARY TABLE GR-12 | Perception / REQUIRED | Perception / RECOMMENDED |
| 13 | MANIFEST.md | L260 | "SECTION 2: PERCEPTION GATES" (GR-11-GR-15, GR-44) | Note GR-12 RECOMMENDED |
| 14 | MANIFEST.md | L278 | ANY Perception gate FAIL -> REFINE | Add GR-12 exception |
| 15 | MANIFEST.md | L647 | Perception gate FAIL / GR-11-GR-15, GR-44 / REFINE | Update range |
| 16 | MANIFEST.md | L715 | "SECTION 2: PERCEPTION GATES" / ANY fail = REFINE | Update to exclude GR-12 |
| 17 | artifact-orchestrator.md | Verdict decision tree | "ANY Perception gate FAIL -> REFINE" | Add GR-12 exception |
| 18 | EXECUTION-TRACKER-TEMPLATE.md | L159 | Perception (GR-11-GR-15, GR-44) / 6 | 5 (GR-12 to recommended) |

**Orphan risk:** GR-18 (Ghost Mechanisms, RECOMMENDED) already catches sub-perceptual letter-spacing -- partial overlap
**Implicit dependency:** Perception threshold table in pa-questions.md Appendix A (L370) lists letter-spacing >=0.025em -- PA reference stays unchanged

#### REMOVAL 4: ME-026 -- Downgrade GR-43 REQUIRED->RECOMMENDED (~17 edits across 8 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | L1331-1335 REQUIRED_GATES | Contains 'GR-43' | Remove 'GR-43' |
| 2 | gate-runner-core.js | L1337-1340 RECOMMENDED_GATES | 8 gates | Add 'GR-43' |
| 3 | gate-manifest.json | L20-24 required.gates | Includes "GR-43" | Remove |
| 4 | gate-manifest.json | L19 required.count | 18 | -1 |
| 5 | gate-manifest.json | L29-32 recommended.gates | 8 gates | Add "GR-43" |
| 6 | gate-manifest.json | L28 recommended.count | 8 | +1 |
| 7 | gate-manifest.json | L57 verdictLogic.REFINE | Includes "OR output gate (GR-43) FAIL" | Remove GR-43 from REFINE triggers |
| 8 | gate-manifest.json | L74 step 2 gates | Includes "GR-43" | Keep execution, change tier tracking |
| 9 | gate-runner-spec.md | L17 REQUIRED count | 18 | -1 |
| 10 | gate-runner-spec.md | L19 RECOMMENDED count | 8 | +1 |
| 11 | gate-runner-spec.md | L110 GR-43 row | Self-Evaluation Comment / REQUIRED | RECOMMENDED |
| 12 | gate-runner-spec.md | L53-57 Verdict Logic | Implicit GR-43 in REFINE | Remove from REFINE triggers |
| 13 | gate-runner-spec.md | L169 SUMMARY TABLE GR-43 | Output / REQUIRED | Output / RECOMMENDED |
| 14 | MANIFEST.md | L262 | "SECTION 3B: OUTPUT VERIFICATION" (GR-43) | Add note: now RECOMMENDED |
| 15 | MANIFEST.md | L278 verdict logic | Implicit GR-43 in REFINE | Clarify no longer triggers REFINE |
| 16 | artifact-orchestrator.md | Verdict decision tree | GR-43 contributes to REFINE | Remove from REFINE triggers |
| 17 | EXECUTION-TRACKER-TEMPLATE.md | L164 Output GR-43 | 1 | Move to recommended category |

**Orphan risk:** pa-manifest.md and pa-weaver.md do not reference GR-43 directly -- SAFE
**Implicit dependency:** GR-50 (Conviction Statement, ADVISORY) is related -- both output verification gates now non-blocking

#### REMOVAL 5: ME-027 -- Downgrade GR-19 RECOMMENDED->ADVISORY (~14 edits across 7 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | L1337-1340 RECOMMENDED_GATES | Contains 'GR-19' | Remove 'GR-19' |
| 2 | gate-runner-core.js | (no ADVISORY_GATES in GR-48) | N/A | GR-19 no longer in "3+ recommended FAIL = REBUILD" threshold |
| 3 | gate-manifest.json | L29-32 recommended.gates | Contains "GR-19" | Remove |
| 4 | gate-manifest.json | L28 recommended.count | 8 | -1 |
| 5 | gate-manifest.json | L38-40 advisory.gates | 5 gates | Add "GR-19" |
| 6 | gate-manifest.json | L37 advisory.count | 5 | +1 |
| 7 | gate-manifest.json | L34 verdictImpact | "3+ FAIL = REBUILD" | GR-19 no longer counts toward threshold |
| 8 | gate-manifest.json | L81 step 3 gates | Includes GR-19 | Keep execution, reclassify |
| 9 | gate-runner-spec.md | L19 RECOMMENDED count | 8 | -1 |
| 10 | gate-runner-spec.md | L20 ADVISORY count | 5 | +1 |
| 11 | gate-runner-spec.md | L99 GR-19 row | AP-10 Threshold Gaming / RECOMMENDED | ADVISORY |
| 12 | gate-runner-spec.md | L163 SUMMARY TABLE GR-19 | Anti-pattern / RECOMMENDED | Anti-pattern / ADVISORY |
| 13 | gate-runner-spec.md | L180 totals | Update recommended/advisory counts | Adjust |
| 14 | MANIFEST.md | L716 | "SECTION 3: ANTI-PATTERN GATES" 3+ fail = REBUILD | GR-19 no longer counts toward 3+ |
| 15 | MANIFEST.md | L656 | "Anti-pattern gate GR-19 detects this" | Still detects at ADVISORY tier |
| 16 | EXECUTION-TRACKER-TEMPLATE.md | L160 | Anti-Pattern (GR-17-GR-22) / 6 | GR-19 to advisory or annotate |

**Orphan risk:** None significant
**Cross-file consistency:** GR-21 and GR-22 already ADVISORY and run in same function -- consistent

#### REMOVAL 6: ME-037 -- Retire 3 PA Questions (~42 total edits across 7 files per question)

**CRITICAL NOTE:** ME-037 references "PA-07 (old)" but current pa-questions.md has NO PA-07. Only 3 confirmed retirements: PA-06, PA-09, PA-40.

##### PA-06 Retirement Cascade (~12 edits)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | pa-questions.md | L163 | PA-06 row | Remove |
| 2 | pa-questions.md | L306 total | 69 questions | -1 |
| 3 | pa-questions.md | L54 subtotal | 49 standard... | 48 standard... |
| 4 | pa-deployment.md | L45 Auditor B | PA-02, PA-06, PA-08... / 8 | Remove PA-06, count=7 |
| 5 | pa-deployment.md | L54 total | 69 across 9 | -1 |
| 6 | pa-manifest.md | L26 Auditor B | 8 / [ ] /8 | 7 / [ ] /7 |
| 7 | pa-manifest.md | L36 total | 69 answered | -1 |
| 8 | pa-weaver.md | Section 1 manifest verification | 69 answered | -1 |
| 9 | MANIFEST.md | L150 Auditor B | PA-02,PA-06,PA-08... (8) | Remove PA-06, count=7 |
| 10 | MANIFEST.md | L159 total | 69 across 9 | -1 |
| 11 | EXECUTION-TRACKER-TEMPLATE.md | L181 Auditor B | PA-02,06,08... (8) | Remove 06, count=7 |
| 12 | pa-guardrails.md | No direct PA-06 ref | N/A | Safe |

##### PA-09 Retirement Cascade (~10 edits)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | pa-questions.md | L171 | PA-09 row | Remove |
| 2 | pa-deployment.md | L46 Auditor C | PA-09, PA-11, PA-30-33... / 11 | Remove PA-09, count=10 |
| 3 | pa-manifest.md | L27 Auditor C | 11 / [ ] /11 | 10 / [ ] /10 |
| 4 | pa-weaver.md | Section 1 | 69 answered | -1 |
| 5 | MANIFEST.md | L151 Auditor C | PA-09, PA-11... (11) | Remove PA-09, count=10 |
| 6 | EXECUTION-TRACKER-TEMPLATE.md | L182 Auditor C | PA-09,11... (11) | Remove 09, count=10 |
| 7 | pa-guardrails.md | No direct PA-09 ref | N/A | Safe |

##### PA-40 Retirement Cascade (~12 edits)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | pa-questions.md | L204 | PA-40 row | Remove |
| 2 | pa-deployment.md | L49 Auditor F | PA-16, PA-17, PA-40, PA-41 / 6 | Remove PA-40, count=5 |
| 3 | pa-manifest.md | L31 Auditor F | 6 / [ ] /6 | 5 / [ ] /5 |
| 4 | pa-weaver.md | Section 1 | 69 answered | -1 |
| 5 | MANIFEST.md | L154 Auditor F | PA-16,17,40,41... (6) | Remove PA-40, count=5 |
| 6 | EXECUTION-TRACKER-TEMPLATE.md | L185 Auditor F | PA-16,17,40,41... (6) | Remove 40, count=5 |
| 7 | pa-guardrails.md | L78 AP-05 row | "PA-40 (spacing), PA-66 (negative space)" | Remove PA-40, replace with PA-69 or PA-66 only |
| 8 | pa-weaver.md | L254 AP-05 row | "PA-40, PA-66" | Remove PA-40 |

##### Combined Retirement Impact
- Total questions: 69 -> 66 (before additions)
- Auditor B: 8->7, Auditor C: 11->10, Auditor F: 6->5
- Every "69 questions" reference must update (11+ locations)

#### REMOVAL 7: ME-005 -- MECHANICAL Exception to Verdict Logic (~11 edits across 7 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | MANIFEST.md | L276 | ANY Identity gate FAIL -> REBUILD | Add MECHANICAL exception |
| 2 | MANIFEST.md | L285 | Identity failures override all else | Add mechanical exception clause |
| 3 | MANIFEST.md | L505-506 | ANY Identity gate FAIL -> REBUILD (highest priority) | Add MECHANICAL exception |
| 4 | MANIFEST.md | L605 | Max iterations: 1 REBUILD + 1 REFINE | Update: + 1 Phase 4 mechanical fix |
| 5 | MANIFEST.md | L646 | Identity gate FAIL / GR-01-GR-10 / REBUILD | Add "unless ALL are MECHANICAL -> REFINE" |
| 6 | MANIFEST.md | L1144 | ANY identity gate FAIL => REBUILD | Add MECHANICAL exception |
| 7 | gate-manifest.json | L56 verdictLogic.REBUILD | "ANY identity gate (GR-01-10) FAIL" | Add MECHANICAL exception |
| 8 | gate-runner-core.js | L752-778 verdict summary | Current verdict logic | Add auto-classification: mechanical true/false |
| 9 | gate-runner-spec.md | L53 | ANY identity gate FAIL = REBUILD | Add MECHANICAL exception |
| 10 | artifact-orchestrator.md | Verdict decision tree | ANY Identity gate FAIL -> REBUILD | Add MECHANICAL exception |
| 11 | pa-weaver.md | Section 3 Diagnostic Vocabulary | MECHANICAL/STRUCTURAL/COMPOSITIONAL defs | Already compatible, no change |

**Orphan risk:** None -- MECHANICAL concept already exists in pa-weaver.md Section 3
**Implicit dependency:** Orchestrator early termination (MANIFEST L474) must be updated: early termination only for NON-MECHANICAL identity failures

#### REMOVAL 8: ME-028 -- GR-21 Threshold + GR-22 Skip-Link (~4 edits across 2 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | GR-21 function | Threshold <= 4 | Change to <= 6, add alpha < 0.1 exclusion |
| 2 | gate-runner-core.js | GR-22 function | No skip-link exemption | Add skip-link check |
| 3 | gate-runner-spec.md | L101 GR-21 row | <= 4 distinct bg colors | Update threshold |
| 4 | gate-runner-spec.md | L102 GR-22 row | No skip-link mention | Add exemption note |

**Minimal cascade:** Both ADVISORY, no verdict/tier/routing changes needed.

#### REMOVAL 9: ME-029 -- GR-17 List Item Threshold (~2 edits across 2 files)

| # | File | Location | Current | Required Change |
|---|------|----------|---------|-----------------|
| 1 | gate-runner-core.js | GR-17 function | `li` minimum: 12px | Change to 4px (same as td/th) |
| 2 | gate-runner-spec.md | L97 GR-17 row | Content padding >= 12px, table cell >= 4px | Add: list item >= 4px |

**Minimal cascade:** GR-17 is RECOMMENDED, threshold change only.

---

### All 5 Orphan Risks (from File 17)

| # | Orphan Risk | Source | Impact | Mitigation |
|---|------------|--------|--------|------------|
| OR-1 | ME-018 classification of GR-05 as "MIXED" must update to GR-05a "HUMAN-PERCEPTIBLE" + GR-05b "SUB-PERCEPTUAL" | ME-010 (GR-05 split) | MEDIUM | Update ME-018 simultaneously with GR-05 split |
| OR-2 | "GR-01-10" range notation used as unit in multiple MANIFEST and orchestrator locations | ME-024 (GR-07 downgrade) | HIGH | Search-and-replace all "GR-01-10" ranges to "GR-01-06, GR-08-10" or add exception notes |
| OR-3 | GR-18 overlap with GR-12 at RECOMMENDED tier (both check sub-perceptual letter-spacing) | ME-025 (GR-12 downgrade) | LOW | Document relationship between GR-12 and GR-18 |
| OR-4 | ME-033 (Void Collapse Rule) references PA-09 auto-answer. If PA-09 retired, reference is orphaned | ME-037 (PA-09 retirement) | MEDIUM | Update ME-033 to remove PA-09 auto-answer |
| OR-5 | AP-05 (Spacing Flat-Line) anti-pattern detection relies on PA-40. Without PA-40, AP-05 weakens (only PA-66 remains). Affects pa-guardrails.md Section 7 and pa-weaver.md Section 6.1. | ME-037 (PA-40 retirement) | MEDIUM | Replace PA-40 with PA-69 in AP-05 mapping |

### All 6 Implicit Dependencies (from File 17)

| # | Dependency | Source | Details |
|---|-----------|--------|---------|
| ID-1 | `isCold()` heuristic shared between GR-05a and GR-05b | ME-010 | Both split gates must share this utility function; refactor must preserve it |
| ID-2 | GR-48 coverage arrays are AUTHORITATIVE source for required/recommended | ME-024 | Moving GR-07 out means 16/16 required (not 17/17) -- may confuse cross-version comparisons |
| ID-3 | Perception threshold table in pa-questions.md Appendix A (L370) lists letter-spacing >=0.025em | ME-025 | PA reference stays unchanged but former REQUIRED enforcement is gone; may confuse PA auditors |
| ID-4 | GR-50 (Conviction Statement, ADVISORY) is related output gate | ME-026 | Both output verification gates (GR-43, GR-50) now non-blocking; may reduce self-eval compliance |
| ID-5 | Orchestrator early termination optimization (MANIFEST L474) | ME-005 | "if ANY identity gate fails, MAY skip PA" must now be: only for NON-MECHANICAL identity failures |
| ID-6 | GR-48 REQUIRED_GATES/RECOMMENDED_GATES arrays (L1331-1340) | ALL tier changes | Failure to update = GR-48 false positives/negatives on every future run |

### "69 Questions" Reference Locations (11+)

| # | File | Location | Current Text |
|---|------|----------|-------------|
| 1 | pa-questions.md | L306 | 69 questions |
| 2 | pa-questions.md | L145 | Section header |
| 3 | pa-deployment.md | L54 | 69 across 9 auditors |
| 4 | pa-guardrails.md | L15 | 69 questions |
| 5 | pa-weaver.md | L18 | 69 questions |
| 6 | pa-manifest.md | L36 | 69 answered questions |
| 7 | MANIFEST.md | L159 | 69 questions across 9 auditors |
| 8 | MANIFEST.md | L784 | 69 questions |
| 9 | EXECUTION-TRACKER-TEMPLATE.md | Multiple | 69 questions |

### Verdict Logic Locations (7+)

| # | File | Location | Content |
|---|------|----------|---------|
| 1 | MANIFEST.md | L276-285 | Full 8-rule priority list + combination paragraph |
| 2 | MANIFEST.md | L505-512 | Full 7-rule priority list (Phase 3C, authoritative) |
| 3 | MANIFEST.md | L646-650 | Failure mode table |
| 4 | MANIFEST.md | L714-716 | Critical path table |
| 5 | MANIFEST.md | L1144-1150 | Execution sequence |
| 6 | gate-manifest.json | L55-59 | verdictLogic object |
| 7 | gate-runner-spec.md | L53-57 | Verdict Logic section |
| 8 | artifact-orchestrator.md | Verdict decision tree | Decision tree section |

### Cumulative Gate Tier Impact (Before/After All 5 Downgrades)

**BEFORE:**
| Tier | Count | Gates |
|------|-------|-------|
| REQUIRED | 18 | GR-01-15, GR-43, GR-44, GR-48 |
| RECOMMENDED | 8 | GR-17-20, GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 5 | GR-21, GR-22, GR-46, GR-50, GR-53 |

**AFTER (all 5 downgrades + GR-60 addition):**
| Tier | Count | Gates |
|------|-------|-------|
| REQUIRED | 16 | GR-01-06, GR-08-11, GR-13-15, GR-44, GR-48, GR-60 (note: GR-05->GR-05a) |
| RECOMMENDED | 10 | GR-07, GR-12, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 8 | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 |

**If ME-014 (GR-61) and ME-040 (GR-62) also applied:**
- RECOMMENDED: +2 more = 12
- Total executable: 16 + 12 + 8 = 36 (+ 4 BV + 2 diagnostic = 42 grand total)

### Implementation Order (from File 17)

1. **Gate tier downgrades first** (ME-024, ME-025, ME-026, ME-027, ME-010) -- self-contained
2. **Gate additions second** (ME-003, ME-014, ME-040) -- build on new tier counts
3. **Verdict logic changes third** (ME-005) -- depends on final gate tier config
4. **PA question retirements fourth** (ME-037) -- self-contained removal
5. **PA question additions fifth** (ME-021, ME-022, ME-023, ME-031, ME-051, ME-055) -- coordinated with retirements
6. **Total count updates LAST** -- compute final numbers only after all changes

Within each step: (1) code, (2) manifest/JSON, (3) spec docs, (4) MANIFEST.md routing, (5) deployment/tracker templates.

### Summary Table (from File 17)

| Enrichment | Type | Files Affected | Edits Required | Orphan Risks | Implicit Deps |
|-----------|------|---------------|----------------|-------------|---------------|
| ME-010 (GR-05 split) | SPLIT+DOWNGRADE | 8 files | ~22 edits | ME-018 classification | isCold() shared utility |
| ME-024 (GR-07->RECOMMENDED) | DOWNGRADE | 9 files | ~24 edits | "GR-01-10" range notation | GR-48 coverage arrays |
| ME-025 (GR-12->RECOMMENDED) | DOWNGRADE | 8 files | ~18 edits | GR-18 overlap | Perception threshold table |
| ME-026 (GR-43->RECOMMENDED) | DOWNGRADE | 8 files | ~17 edits | Output gate both non-blocking | Builder self-eval compliance |
| ME-027 (GR-19->ADVISORY) | DOWNGRADE | 7 files | ~14 edits | None | Threshold in anti-pattern count |
| ME-037 (retire 3 PA Qs) | REMOVAL | 7 files per Q | ~42 total edits | ME-033 PA-09 ref, AP-05 PA-40 ref | Question total in 11 locations |
| ME-005 (MECHANICAL exception) | RECLASSIFICATION | 7 files | ~11 edits | None | Early termination optimization |
| ME-028 (GR-21/22 adjust) | THRESHOLD | 2 files | ~4 edits | None | None |
| ME-029 (GR-17 adjust) | THRESHOLD | 2 files | ~2 edits | None | None |
| **TOTALS** | | **13 files** | **~154 edits** | **5 orphan risks** | **6 implicit deps** |

---

## CROSS-FILE DISCREPANCIES BETWEEN FILES 14-17

### Discrepancy 1: File 14 vs File 17 on GR-05 Split

File 14 (gate surgery plan) proposes consolidating GR-05+GR-07 into a SINGLE merged function that reports three sub-results (GR-05a visible cold, GR-05b sub-perceptual, GR-07 pure B/W). File 17 (propagation map) describes splitting GR-05 into two SEPARATE functions (`checkWarmPalette_a()` and `checkWarmPalette_b()`). These are different approaches:
- **File 14:** One function, three result objects pushed to `results[]`
- **File 17:** Two separate functions

**Resolution needed:** File 14's approach is more line-efficient (single DOM iteration) and should be authoritative.

### Discrepancy 2: File 15 vs File 16 on Question Total

File 15 says "69 - 4 (retired) + 3 (ME-021/022/023) = 68" (counting 4 retirements including PA-07-old). File 16 says "69 - 3 + 3 = 69" (counting only 3 retirements since PA-07 doesn't exist). File 17 notes PA-07 doesn't exist in current inventory.
- **Resolution:** 3 confirmed retirements. Net total stays at 69 if 3 additions applied.

### Discrepancy 3: File 14 Gate Count vs File 17 Gate Count

File 14 says "new REQUIRED gate count: 16 (was 18)." File 17's cumulative table also shows REQUIRED 16 after all changes. These agree. However, File 14 also says GR-12 is "absorbed into GR-18" while File 17 treats GR-12 as still existing at RECOMMENDED tier.
- **Resolution:** File 14's approach (absorption, GR-12 ceases to exist as standalone) saves more lines than File 17's approach (downgrade to RECOMMENDED, still executes independently). The surgical plan should clarify which approach wins.

### Discrepancy 4: GR-48 Coverage Check Arrays

File 14 specifies exact old/new text for L1332 and L1338. File 17 specifies individual adds/removes per downgrade. If applied independently, they would conflict. File 14's exact arrays are the COORDINATED final state and should be authoritative.

---

## MASTER STATISTICS

| Metric | Value |
|--------|-------|
| Total items inventoried | 154+ edits (per File 17 estimate) |
| Files affected | 13 |
| Gate consolidations | 2 (GR-05+GR-07 merge, GR-12 into GR-18) |
| Gate additions | 1 confirmed (GR-60), 2 deferred (GR-61, GR-62) |
| Gate tier changes | 5 (GR-07, GR-12, GR-43 down from REQUIRED; GR-19 down from RECOMMENDED; GR-05 split) |
| PA question retirements | 3 (PA-06, PA-09, PA-40) |
| PA question additions | 3 (PA-54, PA-80, PA-81) |
| MANIFEST enrichments | 6 (ME-005, ME-008, ME-017, ME-042, ME-045, ME-046) |
| PA enrichments | 11 (ME-001, ME-002, ME-006, ME-009, ME-015, ME-019, ME-032, ME-033, ME-034, ME-035, ME-057) |
| Orphan risks | 5 |
| Implicit dependencies | 6 |
| "69 questions" locations | 9+ across 6 files |
| Verdict logic locations | 7+ across 4 files |
| Net line change (gate-runner-core.js) | 0 (1,436 stays at 1,436) |
| Net line change (MANIFEST.md) | +12 (within +20 budget) |
| Net line change (PA files total) | +40 (within ~90 budget with format multipliers) |

---

*End of comprehensive audit. All items from files 14-17 inventoried. 4 cross-file discrepancies identified. All line numbers, old->new diffs, cascades, orphan risks, and dependencies extracted.*
