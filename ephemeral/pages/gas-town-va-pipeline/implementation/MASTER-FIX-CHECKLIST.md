# MASTER FIX CHECKLIST — Pipeline v3 Implementation

**Generated:** 2026-02-24
**Sources:** 6 analysis reports (Files 13, 14, 14b, 15, 16, 17) + original synthesis findings
**Total Fixes:** 128
**Status:** SINGLE SOURCE OF TRUTH for all implementation work

---

## SUMMARY TABLE

| Wave | Type | Count | Priority Breakdown |
|------|------|-------|--------------------|
| **Wave 1** | Highest-impact, lowest-risk | **42** | 14 CRITICAL, 18 HIGH, 10 MEDIUM |
| **Wave 2** | Medium complexity | **44** | 4 CRITICAL, 14 HIGH, 20 MEDIUM, 6 LOW |
| **Wave 3** | Architectural / meta | **42** | 2 CRITICAL, 10 HIGH, 18 MEDIUM, 12 LOW |
| **TOTAL** | | **128** | 20 CRITICAL, 42 HIGH, 48 MEDIUM, 18 LOW |

| Category | Count |
|----------|-------|
| DEFECT-FIX | 12 |
| NEW-GATE | 14 |
| GATE-REMOVAL | 12 |
| GATE-RECLASSIFY | 7 |
| PA-REWRITE | 10 |
| PA-NEW | 7 |
| PA-REMOVAL | 3 |
| PA-REDISTRIBUTION | 5 |
| RECIPE-EDIT | 9 |
| MANIFEST-EDIT | 12 |
| ARCHITECTURAL | 14 |
| ENRICHMENT | 6 |
| LOGGING | 5 |
| STRUCTURAL-CHANGE | 12 |

---

## WAVE 1: HIGHEST-IMPACT, LOWEST-RISK (42 fixes)

---

### FIX-001: GR-05 Warm Palette — Filter Non-Rendered Elements
- **Source:** File 13, Section 1A (GR-05 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** DEFECT-FIX
- **Description:** GR-05 scans ALL elements via `querySelectorAll('*')` including HEAD/META/TITLE, producing 18 false-positive pure-black detections. Add filter: `if (['HTML','HEAD','META','TITLE','SCRIPT','STYLE','LINK','BR'].includes(el.tagName)) return;` at the start of the forEach loop. Also applies to GR-01 through GR-04 for consistency.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Same filter needed in GR-06. Implement once as a shared helper function.

---

### FIX-002: GR-06 Font Trinity — Filter + Remove PASS* Status
- **Source:** File 13, Section 1A (GR-06 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** DEFECT-FIX
- **Description:** Same `querySelectorAll('*')` problem as GR-05. Additionally, GR-06 reported PASS* (with asterisk) which violates the binary gate principle. Must either filter non-rendered elements OR report FAIL honestly. Remove ability for non-binary status.
- **Line impact:** +5 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on FIX-001 filter function.

---

### FIX-003: GR-09 Border Weight Hierarchy — Tolerance Band Matching
- **Source:** File 13, Section 1A (GR-09 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** Spec says "4/3/1 hierarchy" but code checks `weightValues.length >= 2` which passes ANY 2 weights. Replace with tolerance-band matching: `hasPrimary = weightValues.some(w => w >= 3.5 && w <= 4.5); hasSecondary = weightValues.some(w => w >= 2.5 && w <= 3.5); hasTertiary = weightValues.some(w => w >= 0.5 && w <= 1.5); hasHierarchy = hasPrimary && (hasSecondary || hasTertiary);`
- **Line impact:** +8 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Subpixel rendering means 3px may compute as 2.67px. Tolerance bands account for this.

---

### FIX-004: GR-10 Cross-Page DNA — Add Missing Sub-Checks
- **Source:** File 13, Section 1A (GR-10 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** Only ~40% of specified DNA properties are actually verified. Missing checks: callout 4px border, ::selection red, :focus-visible 3px outline, p max-width 70ch. Add executable JS for each missing property.
- **Line impact:** +25 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** The decomposition into sub-gates is fine but all sub-checks must be present.

---

### FIX-005: GR-14 Total Visual Gap — Structural Transition Handling
- **Source:** File 13, Section 1B (GR-14 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** Gate detected 318px gap at Z5->Z6 which was an INTENTIONAL dark inversion block (D-04). Binary gate has NO exception mechanism. Fix: if a child element between zones has `position: relative/absolute` and a distinct background color from both adjacent zones, exclude that gap from the measurement.
- **Line impact:** +12 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** This is SM-01 from loss taxonomy. Alternative: orchestrator registers known transition elements as exceptions before gate execution.

---

### FIX-006: GR-17 AP-01 Density Stacking — Table Cell Exemption
- **Source:** File 13, Section 1C (GR-17 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** 262 false positives from table cells at 8px padding. The 12px minimum is unreasonable for `<td>/<th>`. Change selector from `'p, li, td, th, blockquote, .callout'` to `'p, li, blockquote, .callout'`. Add separate table cell check: td/th minimum 4px (not 12px).
- **Line impact:** +8 / -3 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Dense data presentation in tables intentionally uses smaller padding.

---

### FIX-007: Brief Assembler — BV-01 Tier Line Budget Gate
- **Source:** File 15, Section Item 5, Fix 5.1
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** NEW-GATE
- **Description:** Add BV-01 gate: parse brief by tier headers, count lines per tier. Thresholds: T1 >= 12, T2 >= 6, T3 >= 40, T4 >= 32, Content Map >= 24. Pass: all tiers at or above 80% budget. Action on fail: return to Brief Assembler with specific under-budget tiers identified.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Runs BETWEEN Phase 1 and Phase 2. Text parsing, not Playwright. Also proposed as GR-47 in File 13.

---

### FIX-008: Brief Assembler — BV-02 Background Delta Verification
- **Source:** File 15, Section Item 5, Fix 5.1
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** NEW-GATE
- **Description:** Every background hex pair in the brief must have true delta >= 15 RGB. Extract all hex pairs from zone background specs, compute actual delta: max(|R1-R2|, |G1-G2|, |B1-B2|). Pass: all pairs >= 15. Action on fail: replace with closest valid pair from value-tables.md. This would have caught the #1 and #2 CRITICAL losses (E-01, E-02).
- **Line impact:** +25 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** The Brief Assembler specified delta 16 but actual was 11. This gate catches that error before it propagates to the builder.

---

### FIX-009: Brief Assembler — BV-03 Recipe Format Verification
- **Source:** File 15, Section Item 5, Fix 5.1
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** NEW-GATE
- **Description:** Count recipe indicators ("Build", "Create", "Derive", "Map", "Read", "Select", "Deploy") vs checklist indicators ("Verify", "Fail if", "Must be", "Ensure"). Ratio must be >= 3:1 recipe:checklist. Action on fail: return to Brief Assembler with checklist language highlighted.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Recipe vs checklist is the single most validated format finding.

---

### FIX-010: Brief Assembler — BV-04 Suppressor Scan
- **Source:** File 15, Section Item 5, Fix 5.1
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** NEW-GATE
- **Description:** Scan brief for known suppressor patterns: "sample 2-4" (S-01), raw prohibition language outside Tier 1 (S-02), "Verify/Fail if/Must be" in builder-facing sections (S-11), count-gates like ">=3 channels" (S-08). Pass: zero patterns detected.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** 20 known suppressors, ALL correlate with degradation.

---

### FIX-011: Brief Assembler Feedback Loop in MANIFEST
- **Source:** File 15, Section Item 5, Fix 5.2
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** MANIFEST-EDIT
- **Description:** Add to Phase 1 description: After Brief Assembler produces brief, orchestrator runs BV-01 through BV-04. If ANY BV gate FAILS: return brief to Brief Assembler with failure details, max 2 revision cycles. If ALL PASS: proceed to Phase 2. Adds ~5 minutes but prevents #1 and #2 CRITICAL losses.
- **Line impact:** +12 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** This is the "missing circuit breaker" from blind-spot analysis.

---

### FIX-012: Background Hex Lock — TC Brief Template
- **Source:** File 15, Section Item 1, Fix 1.3
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** RECIPE-EDIT
- **Description:** In Tier 3 multi-coherence subsection, add "Zone Background Assignments (Tier 2 LOCKED)" section. Builder may modify accents, typography, spacing, components, but zone background hex values are FIXED from value-tables.md. Each adjacent pair must show delta and verify >= 15 RGB. Compositional target: >= 25 RGB at 3+ boundaries.
- **Line impact:** +12 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Prevents the #1 CRITICAL loss. 12 lines. Highest ROI fix.

---

### FIX-013: Specification Conflict Resolution Protocol
- **Source:** File 15, Section Item 1, Fix 1.1
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** RECIPE-EDIT
- **Description:** Add PRIORITY OVERRIDE rule after Tier 2 section: When Tier 3 creative decisions conflict with Tier 2 perception physics, Tier 2 WINS for background deltas, letter-spacing, stacked gaps, single margins. Tier 3 WINS for metaphor, component selection, layout, color accents. Zone backgrounds specified in Tier 3 MUST satisfy Tier 2 delta requirements.
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Resolves the architectural ambiguity that caused creative-authority-vs-threshold conflicts.

---

### FIX-014: Technique Density for Dispositions D-01 through D-08
- **Source:** File 15, Section Item 1, Fix 1.2
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** RECIPE-EDIT
- **Description:** Modify Tier 4 section header: "~40 lines MINIMUM". Add: "CRITICAL: Each disposition MUST include at least ONE specific CSS property:value pair." Provide insufficient vs sufficient examples. Add: "if Tier 4 falls below 35 lines, you are under-specifying technique vocabulary."
- **Line impact:** +7 / -5 net (replace existing 5 lines with 12)
- **Status:** PENDING
- **Quality:**
- **Notes:** D-07 (Edge Intentionality) was only prose, no CSS. D-04 (Second-Half Moment, 95% compliance) had concrete CSS.

---

### FIX-015: OM-15 Builder Self-Evaluation as Required Output
- **Source:** File 16, Section OM-15
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E, Builder Prompt)
- **Wave:** 1
- **Priority:** CRITICAL
- **Type:** MANIFEST-EDIT
- **Description:** Replace 1-line Phase 5 with 6-line self-evaluation block. Builder must answer 4 questions as HTML comment block at TOP of output: (1) Zone transitions = different room? per boundary, (2) Distinct transition types count (need 3+), (3) Skeleton has shape without text? (4) Scroll surprise in second half? These are REQUIRED OUTPUT, not optional.
- **Line impact:** +5 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Prevents trailing void (#3 ranked loss). Gate checks existence of comment. Lowest risk of all omission fixes.

---

### FIX-016: OM-16 Merge Phase 6 into Phase 5 Self-Evaluation
- **Source:** File 16, Section OM-16
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E, Builder Prompt)
- **Wave:** 1
- **Priority:** HIGH
- **Type:** MANIFEST-EDIT
- **Description:** Remove Phase 6 line from builder prompt. Add 3 temporal questions to Phase 5 self-eval: (5) Section height - 3+ different heights? (6) Density arc - does density increase then resolve? Describe in 5 words. (7) Ending - does final viewport feel earned? Total self-eval: 7 questions.
- **Line impact:** +3 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Eliminates redundant phase. Reduces cognitive load. Must implement WITH FIX-015.

---

### FIX-017: Self-Evaluation Comment Existence Gate
- **Source:** File 16, Section OM-15 Fix 2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** NEW-GATE
- **Description:** Add gate checking for `<!-- SELF-EVALUATION:` or `<!-- Self-Evaluation:` in HTML output. Binary check for EXISTENCE, not quality. PASS: comment found. FAIL: comment missing.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Enforces FIX-015 mechanically.

---

### FIX-018: E-001 SAFE Enrichment — Components.css Reference in Brief
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** ENRICHMENT
- **Description:** Add explicit component adoption target to brief template Tier 3: "Aim for 8+ components from components.css. Adapt rather than invent." Currently the brief mentions components but provides no adoption target. The builder used 3/26 in Gas Town.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** E-001. Low risk. Component library at 0% propagation to builder decisions.

---

### FIX-019: E-002 SAFE Enrichment — Mechanism Catalog Quick-Reference
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Add 10-line quick-reference table to recipe Phase 1 (READ VOCABULARY): list the 6 mechanism categories with 2-3 top mechanisms each and their CSS signatures. Prevents the builder from needing to scan 1,200 lines of mechanism-catalog.md.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** E-002. Reduces mechanism-catalog attention bottleneck.

---

### FIX-020: E-004 SAFE Enrichment — Value Tables CSS Snippet Format
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/artifact-value-tables.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Convert value tables from prose descriptions to copy-paste CSS snippets. Instead of "Zone 1 background: warm cream" provide `background-color: #fefcf3; /* Zone 1 warm cream */`. Reduces interpretation step.
- **Line impact:** +0 / -0 net (reformat, no net change)
- **Status:** PENDING
- **Quality:**
- **Notes:** E-004. Zero net line change — reformatting.

---

### FIX-021: E-005 SAFE Enrichment — CD-006 Zone-by-Zone Reference
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Add 6-line CD-006 zone summary to recipe Phase 2 (SELECT DECISIONS): for each of CD-006's major zones, list the key technique used (e.g., "Z3: dark inversion, 4px left border callouts, 16px body text"). Provides concrete exemplar vocabulary.
- **Line impact:** +6 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** E-005. CD-006 is the CEILING reference but rarely referenced by builders.

---

### FIX-022: E-008 SAFE Enrichment — Conviction Statement Template
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E)
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Add 3-line conviction statement template to builder prompt: "Before building, write a 3-sentence conviction: (1) The governing metaphor is ___. (2) The emotional arc goes from ___ to ___. (3) The compositional strategy is ___." Currently conviction is mentioned but not templated.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** E-008. OM-07 found conviction embedded as HTML comment instead of separate structure.

---

### FIX-023: E-010 SAFE Enrichment — Gate Result JSON Format
- **Source:** Original synthesis findings (6 SAFE enrichments)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Standardize gate result output as JSON with consistent schema: `{ gate: "GR-XX", name: "...", status: "PASS"|"FAIL", measured: {...}, threshold: {...} }`. Currently gates output in mixed formats.
- **Line impact:** +5 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** E-010. Enables GR-48 coverage meta-check and GR-49 integrity check.

---

### FIX-024: Gate Runner Subtraction — Remove GR-29 through GR-32 (Verdict Gates)
- **Source:** File 13, Section 1E + Section 6B
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** GATE-REMOVAL
- **Description:** Remove verdict gates GR-29-32 from gate runner. These are orchestrator DECISION RULES, not DOM inspection gates. Move to artifact-orchestrator.md verdict logic section.
- **Line impact:** +0 / -35 net (from gate-runner; +20 to orchestrator)
- **Status:** PENDING
- **Quality:**
- **Notes:** These are already implemented in gate runner summary code (line 1236) as verdict LOGIC.

---

### FIX-025: Gate Runner Subtraction — Remove GR-35 (Layout Driver)
- **Source:** File 13, Section 1F + Section 6B
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** GATE-REMOVAL
- **Description:** Remove GR-35. Artifact says "NOT AUTOMATABLE — requires PA auditor assessment." Already rerouted to PA by council. REMOVE from gate runner.
- **Line impact:** +0 / -10 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Council ruling already in place.

---

### FIX-026: Gate Runner Subtraction — Remove GR-36 through GR-39 (Experiment Gates)
- **Source:** File 13, Section 1G + Section 6B
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** GATE-REMOVAL
- **Description:** Remove all 4 experiment meta-gates. These are experiment protocol gates, not build verification gates. Move to separate experiment protocol document.
- **Line impact:** +0 / -40 net
- **Status:** PENDING
- **Quality:**
- **Notes:** None of these were ever executed against individual builds.

---

### FIX-027: Gate Runner Subtraction — Remove GR-40 through GR-42 (Policy Gates)
- **Source:** File 13, Section 1H + Section 6B
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** GATE-REMOVAL
- **Description:** Remove 3 policy gates. Pipeline architecture checks. Not Playwright gates. GR-42 overlaps with GR-27 (builder gate-free). Move to artifact-orchestrator.md process checks section.
- **Line impact:** +0 / -25 net
- **Status:** PENDING
- **Quality:**
- **Notes:** GR-40/41 = process checks. GR-42 is redundant with GR-27.

---

### FIX-028: Gate Runner Subtraction — Absorb GR-16 into Verdict Logic
- **Source:** File 13, Section 1B (GR-16 row) + Section 6B
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** GATE-REMOVAL
- **Description:** Remove GR-16 (All CSS Perceptible) as standalone gate. It is a meta-gate aggregating GR-11-15 which are already reported individually. Absorb its logic into the verdict/summary section.
- **Line impact:** +0 / -15 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Low standalone value. Just a summary signal.

---

### FIX-029: Gate Runner Header Update — 42 -> 38 Gates
- **Source:** File 13, Section 6B (final count)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** MANIFEST-EDIT
- **Description:** Update gate runner header and summary table: "42 gates" -> count after removals and additions. Update MANIFEST.md Section 3 routing table accordingly.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on all gate removal/addition fixes being finalized first. Final count: 42 - 12 removed + 8 new = 38.

---

### FIX-030: Value Tables Routing Strengthening
- **Source:** File 15, Section Item 2, Fix 2.2
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E)
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** MANIFEST-EDIT
- **Description:** In builder prompt template, change value-tables reference from "use as REFERENCE, not constraints" to differentiate: "BACKGROUND COLOR PAIRS are Tier 2 LOCKED (see brief). For all OTHER values: use as REFERENCE — your creative judgment applies, but pre-computed values are perceptually validated."
- **Line impact:** +3 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Pairs with FIX-012 (background hex lock).

---

### FIX-031: GR-19 Threshold Gaming — Write Executable Code
- **Source:** File 13, Section 2B + File 15, Section Item 3, Fix 3.2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** Write executable Playwright JS for GR-19. Check if >50% of background deltas cluster within 10% of the 15 RGB floor (delta 15-17). If floorRatio > 0.50: FAIL. Full code provided in File 15 Fix 3.2.
- **Line impact:** +25 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Threshold gaming was the Flagship's dominant defect. Currently has no executable code.

---

### FIX-032: PA-05 Conditional Pass Guidance
- **Source:** File 14, Section Part 1 (PA-05 Protocol Gap)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** PA-REWRITE
- **Description:** Add explicit guidance: "If a sub-criterion technically passes but contains a shipping-blocking defect, treat it as CONDITIONAL PASS. Score PA-05 based on the number of clean passes, not conditional passes." Gas Town: Auditor A scored 3/4 despite all 4 sub-criteria technically passing because trailing void made POLISHED a "pass with critical defect."
- **Line impact:** +4 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Protocol gap. The protocol has no guidance for this case.

---

### FIX-033: GR-07 Pure B/W — Standalone Executable Code
- **Source:** File 13, Section 1A (GR-07 row)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** DEFECT-FIX
- **Description:** GR-07 spec defines standalone gate but executable JS merged it into GR-05's palette check. The fresh run renumbered it to "Header DNA" (part of GR-10). Gate ID confusion is severe. ADD standalone executable code for GR-07 that checks for exact rgb(0,0,0) and rgb(255,255,255), separate from GR-05.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Clears up gate ID confusion between GR-05, GR-07, GR-10.

---

### FIX-034: GR-08 No Decorative Elements — Heuristic Code
- **Source:** File 13, Section 1A (GR-08 row) + Section 6D
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** DEFECT-FIX
- **Description:** GR-08 has NO EXECUTABLE CODE and was completely SKIPPED in the fresh run. Add heuristic: check for `<hr>` with no preceding heading, empty `<div>` with height > 10px but no text content, icon-only elements without alt text. Semi-structured but better than nothing.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** "Decorative" vs "functional" has judgment edge cases. Heuristic covers 80-90%.

---

### FIX-035: Non-Rendered Element Filter Helper Function
- **Source:** File 13, Section 2A (SM-02)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** HIGH
- **Type:** DEFECT-FIX
- **Description:** Create shared helper function `isRenderedElement(el)` that filters out HTML, HEAD, META, TITLE, SCRIPT, STYLE, LINK, BR, and elements with display:none/visibility:hidden/zero height. Use in GR-05, GR-06, GR-07, GR-08, GR-09, GR-10. Currently each gate reimplements filtering inconsistently.
- **Line impact:** +12 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Foundation fix. All identity gate element scanning should use this.

---

### FIX-036: GR-25 Suppressor Count — Promote to RECOMMENDED
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** GATE-RECLASSIFY
- **Description:** Promote GR-25 from ADVISORY to RECOMMENDED. High evidence (20 suppressors, ALL correlate with degradation). Automatable with regex. Move to gate-runner-preconditions section.
- **Line impact:** +1 / -1 net (metadata change)
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of precondition gate promotion batch (GR-25, 26, 27, 28).

---

### FIX-037: GR-26 Brief Size Cap — Promote to RECOMMENDED
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** GATE-RECLASSIFY
- **Description:** Promote GR-26 from ADVISORY to RECOMMENDED. Trivially automatable: `brief.split('\n').length < 200`. Strong correlation: 530+ line Flagship = 1.5/4, 100-line Middle = 4/4.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of precondition gate promotion batch.

---

### FIX-038: GR-27 Builder Gate-Free — Promote to RECOMMENDED
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** GATE-RECLASSIFY
- **Description:** Promote GR-27 from ADVISORY to RECOMMENDED. Automatable regex scan of builder input for gate-format language. High value: gate visibility caused threshold gaming in Flagship.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of precondition gate promotion batch.

---

### FIX-039: GR-28 Recipe Format — Promote to RECOMMENDED
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** MEDIUM
- **Type:** GATE-RECLASSIFY
- **Description:** Promote GR-28 from ADVISORY to RECOMMENDED. Partially automatable (verb detection). Recipe vs checklist is the single most validated format finding.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of precondition gate promotion batch.

---

### FIX-040: GR-19 Reclassify to ADVISORY
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** LOW
- **Type:** GATE-RECLASSIFY
- **Description:** Demote GR-19 from RECOMMENDED to ADVISORY. No executable code (but FIX-031 adds code). 50% threshold is arbitrary. Semi-structured at best. NOTE: if FIX-031 is implemented with code, consider keeping as RECOMMENDED.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** CONFLICT with FIX-031. If code is added (FIX-031), may stay RECOMMENDED.

---

### FIX-041: GR-21 Reclassify to ADVISORY
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** LOW
- **Type:** GATE-RECLASSIFY
- **Description:** Demote GR-21 from RECOMMENDED to ADVISORY. Judgment-required (counting "distinct visual channels" requires defining "channel"). Artifact acknowledges automation difficulty.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** File 15 provides simplified code (FIX in Wave 2).

---

### FIX-042: GR-22 Reclassify to ADVISORY
- **Source:** File 13, Section 6C
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 1
- **Priority:** LOW
- **Type:** GATE-RECLASSIFY
- **Description:** Demote GR-22 from RECOMMENDED to ADVISORY. Judgment-required (semantic color role analysis). File 15 provides simplified code (FIX in Wave 2).
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Even with code, distinguishing semantic color roles remains partially subjective.

---

## WAVE 2: MEDIUM COMPLEXITY (44 fixes)

---

### FIX-043: PA-07 — REMOVE (Readability Cluster Redundancy)
- **Source:** File 14, Section Part 7 (Questions to REMOVE)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REMOVAL
- **Description:** Remove PA-07 ("Can you read the longest paragraph without losing your place?"). Fully covered by PA-02 (uncomfortable text) + PA-08 (squint to read). PA-07 adds marginal value. Reduces Auditor B's load.
- **Line impact:** +0 / -8 net
- **Status:** PENDING
- **Quality:**
- **Notes:** PA-02/PA-08 pair covers "general discomfort" and "size/contrast problems" respectively.

---

### FIX-044: PA-21 — REMOVE (PA-30/PA-46 Redundancy)
- **Source:** File 14, Section Part 7 (Questions to REMOVE)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REMOVAL
- **Description:** Remove PA-21 ("Does everything look designed for this width, or squeezed?"). Fully covered by PA-30 at 1440px and PA-46 at 768px. Frees Auditor H slot for PA-72 (accessibility).
- **Line impact:** +0 / -8 net
- **Status:** PENDING
- **Quality:**
- **Notes:** PA-21 is a less specific version of both PA-30 and PA-46.

---

### FIX-045: PA-10 — REMOVE (PA-32 Redundancy)
- **Source:** File 14, Section Part 7 (Questions to REMOVE)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REMOVAL
- **Description:** Remove PA-10 ("Squint until you can't read text — does layout look balanced?"). Fully covered by PA-32 (visual weight distribution, also squint-based but with scroll distribution specificity). Reduces Auditor C overload.
- **Line impact:** +0 / -8 net
- **Status:** PENDING
- **Quality:**
- **Notes:** PA-32 covers same ground with more specificity (scroll distribution).

---

### FIX-046: PA-20 — REWRITE for Fresh-Eyes Compatibility
- **Source:** File 14, Section Part 7 (Questions to REWRITE) + File 14b, Section 2.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-20 from "Describe personality in three words. Does it match intent?" to "Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality?" Shifts from "intent" (unknown in fresh-eyes) to "content personality" (inferrable).
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** File 14 and 14b agree on the rewrite direction.

---

### FIX-047: PA-23 — REWRITE for Screenshot Context
- **Source:** File 14, Section Part 7 + File 14b, Section 2.2 + Section 6.1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-23 from "What breaks if you resize 200px narrower?" to "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?" Current version requires interactive viewport resizing which auditors cannot do.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Files 14 and 14b both flag this. 14b proposes slightly different wording; using 14's version as it is more specific. SEE CONFLICTS section.

---

### FIX-048: PA-28 — REWRITE to Remove Rule Knowledge Requirement
- **Source:** File 14, Section Part 7
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-28 from "How could someone make this look terrible while passing every rule?" to "If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about?" Removes "passing every rule" which requires rule knowledge.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Fresh-eyes auditors do not know pipeline rules.

---

### FIX-049: PA-63 — REWRITE to Add Third Scale (Section Level)
- **Source:** File 14, Section Part 7 + File 14b, Section 2.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Expand PA-63 from 2-scale to 3-scale zoom test: "Zoom into one component. Does its design echo the page's language? Then zoom OUT to section level — does this section's internal structure also echo the same language? Then find the SAME component type in a different section — does it adapt?"
- **Line impact:** +3 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Per Finding 17 in enrichment audit. Adds section-level scale.

---

### FIX-050: PA-67 — REWRITE for Perception-Grounded Novelty
- **Source:** File 14, Section Part 7
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-67 from "Does the page feel like it is doing something you have not seen before?" to "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?" Lowest-rated question (3.8/5). Has never produced clean YES.
- **Line impact:** +3 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Shifts from experience-dependent "novel" to perception-grounded "predictable vs surprising."

---

### FIX-051: PA-24 — REWRITE for Single-Page Context
- **Source:** File 14, Part 7 note + File 14b, Section 2.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-24 from "Does this page belong with its siblings?" (structurally unanswerable for single pages, score 3.4/5) to "Looking at the design language (borders, colors, spacing, typography), does this feel like it belongs to a SYSTEM, or is it one-off custom work?"
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Files 14 and 14b both flag this. 14b has different proposed wording. SEE CONFLICTS.

---

### FIX-052: PA-25 — REWRITE to Remove Design System Knowledge
- **Source:** File 14, Part 7 note + File 14b, Section 2.2 + Section 6.1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-25 from "If you covered the header, could you identify the design system?" (requires system knowledge, score 3.6/5) to "If you covered the header, does the rest of the page still feel like a cohesive design? Does the identity persist throughout, or only in the header?"
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Files 14 and 14b agree on direction. 14b has slightly different wording. SEE CONFLICTS.

---

### FIX-053: PA-26 — REWRITE to Remove Convention Knowledge
- **Source:** File 14b, Section 6.1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-REWRITE
- **Description:** Rewrite PA-26 from "Is any convention CAUSING a visual problem?" to "Is there any element that looks wrong but seems intentional — as if a rule is forcing a bad outcome? Point to it." Removes convention knowledge requirement.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Only flagged in File 14b (not in File 14). Low severity.

---

### FIX-054: PA-51 — REWRITE to Qualitative Assessment
- **Source:** File 14, Part 1 (PA-51 Note)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** PA-REWRITE
- **Description:** Change PA-51 from percentage estimation ("what percentage of scroll is content?") to qualitative: "Does the page feel content-dense, balanced, sparse, or void-dominated?" Percentage estimation is imprecise from screenshots — different auditors estimate 60% vs 75% for same page.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Minor improvement. Not critical.

---

### FIX-055: NEW PA-71 — Content-Form Specificity
- **Source:** File 14, Section Part 7 (NEW Questions)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-NEW
- **Description:** Add PA-71: "If you replaced this page's content with completely different content (say, a cooking recipe instead of whatever this is), would the visual design need to change? Or would it work for anything?" Tier 2, assign to Auditor A. Fills GAP-2 (content-form fit quality). Design that "works for anything" is not content-coupled.
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** No current question tests content-specificity of design.

---

### FIX-056: NEW PA-72 — Accessibility Quick Check
- **Source:** File 14, Section Part 7 + File 14b, Section 2.1 Gap 1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-NEW
- **Description:** Add PA-72: "Is there any text, button, or interactive element that you think would be invisible, unreachable, or confusing to someone using only a keyboard or screen reader? Point to the most likely problem." Tier 3, assign to Auditor H (lightest load). Fills GAP-6 (zero accessibility questions).
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Files 14 and 14b both propose this. 14b assigns to Auditor E, 14 to Auditor H. SEE CONFLICTS. Not comprehensive WCAG, but catches obvious issues.

---

### FIX-057: NEW PA-73 — Coherence Direction Agreement
- **Source:** File 14, Section Part 7 (NEW Questions)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-NEW
- **Description:** Add PA-73: "Pick a boundary where the page changes. Do ALL the changes point in the same direction? For example, if background gets darker, does text get heavier, spacing tighter, borders thicker — all saying 'denser'? Or do some changes contradict others?" Tier 2, assign to Auditor D. Fills GAP-5 (multi-coherence at boundaries).
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently no question directly asks whether boundary changes AGREE.

---

### FIX-058: NEW PA-74 — Completion and Polish Check (OPTIONAL)
- **Source:** File 14, Section Part 7 (PA-74 note)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** PA-NEW
- **Description:** Add PA-74: "Scroll to the very bottom. Does the page end with a DESIGNED conclusion (footer, closing statement, visual bookend), or does it just stop? Is there any area that looks like the designer ran out of time?" Tier 2, assign to Auditor D. May overlap with PA-13 sufficiently to be unnecessary.
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** OPTIONAL. File 14 notes "sufficient overlap with PA-13 to be unnecessary."

---

### FIX-059: NEW PA-76 — Emotional Arc Direct Assessment (from 14b)
- **Source:** File 14b, Section 3.2 + Section 6.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-NEW
- **Description:** Add question as PA-76: "Scroll from top to bottom at reading speed. Does the visual journey have a shape — building, peaking, resolving — or does it feel like the same room repeated? Where is the peak? Does the ending feel earned?" Assign to Auditor A. Emotional arc is now PA-primary (CF-02) but no question directly assesses it. Currently inferred from 5 tangential questions.
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** NUMBER CONFLICT RESOLVED. PA-71 assigned to transition quality (Wave 1 cleanup). File 14's questions shift to PA-72 through PA-75. File 14b's emotional arc = PA-76. File 14b's typographic hierarchy = PA-77.

---

### FIX-060: NEW PA-77 — Typographic Hierarchy as Composition (from 14b)
- **Source:** File 14b, Section 2.1 Gap 3 + Section 6.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** PA-NEW
- **Description:** Add question as PA-77: "Looking only at text sizes and weights (ignore color and spacing), can you identify 3 or more levels of importance? Does the hierarchy guide your reading order?" Assign to Auditor B. Existing typography questions focus on readability/comfort, not hierarchy as compositional tool.
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** NUMBER CONFLICT RESOLVED. Assigned PA-77 (File 14b's original PA-73 shifted to avoid conflict with File 14's numbering).

---

### FIX-061: PA-52 — Reassign from Auditor C to Auditor D
- **Source:** File 14, Section Part 3 (Load Balancing) + File 14b, Section 4.1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-REDISTRIBUTION
- **Description:** Move PA-52 (designed moments per third) from Auditor C (14 questions) to Auditor D (8 questions). PA-52 is a pacing question that aligns with D's PA-35 (interest curve). Reduces C from 14 to 13.
- **Line impact:** +2 / -2 net (assignment table changes)
- **Status:** PENDING
- **Quality:**
- **Notes:** Both files agree on this redistribution.

---

### FIX-062: PA-55 — Reassign from Auditor C to Auditor B
- **Source:** File 14, Section Part 3 (Load Balancing)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** PA-REDISTRIBUTION
- **Description:** Move PA-55 (adjacent sections differ visually) from Auditor C (13 after FIX-061) to Auditor B (6 questions). PA-55 asks "can you DESCRIBE how they differ" which is description, not measurement. Reduces C from 13 to 12.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Only in File 14. File 14b proposes C1/C2 split instead. SEE CONFLICTS.

---

### FIX-063: PA-70 — Reassign from Auditor D to Auditor B
- **Source:** File 14b, Section 2.4 Contradiction 2 + Section 6.4
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** CRITICAL
- **Type:** PA-REDISTRIBUTION
- **Description:** PA-70 (visual treatment responds to content density) is assigned to Auditor D in the protocol but enrichment changelog assigned it to Auditor B. This is a REAL CONTRADICTION. Enrichment changelog reasoning: PA-70 is a density/typography question better suited to B. Reassign to B per original reasoning.
- **Line impact:** +2 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Files 14b Contradiction 2. Currently undocumented discrepancy.

---

### FIX-064: Auditor C Split into C1/C2 (ALTERNATIVE to FIX-061/062)
- **Source:** File 14b, Section 4.1 + Section 6.4
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** CRITICAL
- **Type:** ARCHITECTURAL
- **Description:** Split Auditor C into C1 (Spatial Balance: PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-55 = 8 Qs) and C2 (Void Prevention + Tier 5: PA-50, PA-51, PA-52, PA-53, PA-64, PA-66 = 6 Qs). Requires 10 PA auditors + 1 Integrative + 1 Weaver = 12 agents (up from 11). Cost: ~$5-15 extra per run.
- **Line impact:** +20 / -10 net
- **Status:** PENDING
- **Quality:**
- **Notes:** ALTERNATIVE to FIX-061/062. If both approaches conflict, pick ONE. SEE CONFLICTS.

---

### FIX-065: PA-05 Distributed Cross-Validation
- **Source:** File 14, Section Part 4 (Gap 3)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** CRITICAL
- **Type:** STRUCTURAL-CHANGE
- **Description:** Instead of Auditor A rating all 4 PA-05 sub-criteria alone, distribute cross-validation: DESIGNED->F, COHERENT->G, PROPORTIONATE->C, POLISHED->B. Each cross-validator rates the sub-criterion in their domain as secondary assessment. Weaver receives both primary and cross scores. If they disagree, weaver resolves.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** PA-05 is the PRIMARY success metric. Single-evaluator risk is the biggest protocol weakness.

---

### FIX-066: PA Completion Manifest Requirement
- **Source:** File 14, Section Part 4 (Gap 1)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** STRUCTURAL-CHANGE
- **Description:** Each auditor's report MUST include a completion table as its FINAL section: question ID, Answered YES/NO, evidence screenshot reference. Weaver's FIRST action: verify all 9 manifests are complete (65 YES entries total). Any missing answer = INCOMPLETE.
- **Line impact:** +12 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently 100% compliance (Gas Town) but verified by post-hoc audit, not structurally.

---

### FIX-067: PA Evidence Format Requirements
- **Source:** File 14, Section Part 4 (Gap 2)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** STRUCTURAL-CHANGE
- **Description:** For each question, add explicit evidence format: "ANSWER FORMAT: YES/NO + for each finding: [screenshot reference] + [1-sentence description]". Makes evidence a STRUCTURAL part of the answer, not optional.
- **Line impact:** +30 / -0 net (across all 65 questions)
- **Status:** PENDING
- **Quality:**
- **Notes:** Large line impact but formulaic. Could be added as a general rule rather than per-question.

---

### FIX-068: GR-44 Trailing Whitespace Void Detection — NEW REQUIRED GATE
- **Source:** File 13, Section 2B (GR-44 spec + full JS code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** CRITICAL
- **Type:** NEW-GATE
- **Description:** Add GR-44: vertical distance from last visible content to body bottom must be <= 300px. Finds last visible element (excluding script/style/meta/zero-height), measures gap. Tier: REQUIRED. This was the #1 defect flagged by 9/9 PA auditors and completely undetected by the gate system. Full JS code in File 13.
- **Line impact:** +25 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** The SINGLE most important missing gate. Would have caught the Flagship and Gas Town trailing void.

---

### FIX-069: GR-48 Gate Coverage Completeness — NEW REQUIRED META-GATE
- **Source:** File 13, Section 2B (GR-48 spec + full JS code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** CRITICAL
- **Type:** NEW-GATE
- **Description:** Add GR-48: verify all REQUIRED gates produced results. All 17 REQUIRED gates must have a result. At least 4/6 RECOMMENDED gates must have a result. Any missing REQUIRED gate = INCOMPLETE verdict. Full code in File 13. The "gate that gates the gates."
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Without this, orchestrator can silently skip gates (only 45% coverage in Gas Town).

---

### FIX-070: GR-43 Background Delta Distribution — NEW RECOMMENDED GATE
- **Source:** File 13, Section 2B (GR-43 spec + full JS code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** NEW-GATE
- **Description:** Add GR-43: check background delta DISTRIBUTION, not just individual minimums. Pass: >= 50% of zone boundary deltas >= 25 RGB AND stddev >= 8. Addresses DRIFT pattern (clustering near 15 RGB floor). Full JS code in File 13.
- **Line impact:** +30 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Largest undetected quality gap. Flagship used 15 RGB everywhere.

---

### FIX-071: GR-45 Typography Variation — NEW RECOMMENDED GATE
- **Source:** File 13, Section 2B (GR-45 spec + full JS code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** NEW-GATE
- **Description:** Add GR-45: H2 and H3 elements must use at least 2 distinct computed font-sizes (differ by >= 2px). Counters DRIFT pattern DR-02/DR-03 (all H2s flatten to 28px). Full JS code in File 13.
- **Line impact:** +25 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Second most common DRIFT pattern.

---

### FIX-072: GR-49 Gate Result File Integrity — NEW RECOMMENDED GATE
- **Source:** File 13, Section 2B (GR-49 spec)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** NEW-GATE
- **Description:** Add GR-49: verify exactly 1 gate result file exists with consistent gate IDs matching artifact spec. No duplicates. No renumbering. Prevents SM-08 (two conflicting gate result files). Process check, not Playwright.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Gas Town had 2 conflicting gate result files with different naming.

---

### FIX-073: GR-21 Cognitive Overload — Write Simplified Code
- **Source:** File 15, Section Item 3, Fix 3.2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** DEFECT-FIX
- **Description:** Add simplified executable JS for GR-21: count distinct background colors per 900px vertical slice. PASS if <= 4 distinct backgrounds per viewport. Evidence: THEORETICAL. Full code in File 15.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Simplified from full "visual channel" analysis to background-color-only proxy.

---

### FIX-074: GR-22 Color Zone Conflict — Write Simplified Code
- **Source:** File 15, Section Item 3, Fix 3.2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** DEFECT-FIX
- **Description:** Add simplified executable JS for GR-22: check if primary red (#E83025) is used for borders/emphasis (correct) vs backgrounds (incorrect if > 2 uses). PASS if background uses <= 2. Full code in File 15.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Simplified from full semantic analysis to primary-color-role check.

---

### FIX-075: VALUES Integration — PA Protocol
- **Source:** File 15, Section Item 2, Fix 2.1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Add Part 3.5 "QUALITY FRAMEWORK (10 VALUES Items Integrated)" after Part 3. Includes PA-05 scale definitions (FLAT/ASSEMBLED/COMPOSED/DESIGNED), CCS description, and register definitions. These are CALIBRATION for existing questions, not additional questions.
- **Line impact:** +18 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently the 10 PA-routed VALUES items are NOT in the PA protocol question text.

---

### FIX-076: VALUES Integration — Orchestrator
- **Source:** File 15, Section Item 2, Fix 2.1
- **Target file:** ephemeral/va-extraction/artifact-orchestrator.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** ENRICHMENT
- **Description:** Add "VALUES Context (15 Planning Items)" to Section 0 after master equation. Historical PA-05 scores for calibration, suppressor removal status, budget expectations (25-40% of builds may need REFINE/REBUILD).
- **Line impact:** +16 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Makes mode selection and planning more evidence-based.

---

### FIX-077: OM-09/10 Component Adaptation Recipe Step
- **Source:** File 16, Section OM-09 + OM-10
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** RECIPE-EDIT
- **Description:** Add Step 3.4b after Step 3.4: "Adapt components to zone character (fractal coherence)." 4 properties to adjust (padding, border-weight, background tint, label sizing). CD-006 reference values (Z1: 20px 24px, Z3: 12px 16px). ASSESS question. Plus callback to Phase 2 Step 2.4 selections. Plus forward reference in Step 2.4.
- **Line impact:** +17 / -0 net (Step 3.4b) + 2 (cross-references) = +19
- **Status:** PENDING
- **Quality:**
- **Notes:** OM-09 and OM-10 are the SAME fix from two angles. MANDATORY BUNDLE.

---

### FIX-078: GR-46 Print Stylesheet — NEW ADVISORY GATE
- **Source:** File 13, Section 2B (GR-46 spec + full JS code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** NEW-GATE
- **Description:** Add GR-46: check for at least one `@media print` rule in document stylesheets. Addresses OM-02 (print styling absent). Low severity but easy to implement. Full JS code in File 13.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** ADVISORY tier. Low priority.

---

### FIX-079: GR-50 Conviction Statement Existence — NEW ADVISORY GATE
- **Source:** File 13, Section 2B (GR-50 spec)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** NEW-GATE
- **Description:** Add GR-50: check for conviction statement file (`conviction.md` or similar) or HTML comment with >= 3 sentences covering metaphor, emotional arc, compositional strategy. Partially automatable. Addresses OM-07.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** ADVISORY tier. Content quality requires NLP.

---

### FIX-080: Section Height Variation Gate
- **Source:** File 16, Section OM-16 Fix 2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** NEW-GATE
- **Description:** Add gate: at least 3 distinct section heights (within 50px tolerance bands). Measures bounding boxes of sections. Uniform heights = metronomic. Full JS code in File 16.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Addresses temporal composition measurable aspect.

---

### FIX-081: Density Arc Direction Gate (ADVISORY)
- **Source:** File 16, Section OM-16 Fix 2
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** NEW-GATE
- **Description:** Add ADVISORY gate: densest section should NOT be first or last (suggests arc, not flat). Elements-per-pixel ratio per section. Result: ADVISORY (not binary PASS/FAIL) because crescendo patterns are valid. Full JS code in File 16.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** ADVISORY only. Some valid patterns fail this check.

---

### FIX-082: Per-Agent Output Logging Mechanism
- **Source:** Original synthesis findings (Pipeline logging)
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** LOGGING
- **Description:** Add to Phase execution protocol: each agent spawn must log output to a timestamped file in the output directory. Format: `{phase}-{agent}-{timestamp}.md`. Content Map, Execution Brief, Builder HTML, Gate Results, PA Reports, Weaver Verdict all saved as separate files. Currently some outputs are ephemeral.
- **Line impact:** +10 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Enables post-run analysis and debugging.

---

### FIX-083: Integrative Auditor Role Clarification
- **Source:** File 14b, Section 2.4 Contradiction 3 + Section 4.2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** HIGH
- **Type:** STRUCTURAL-CHANGE
- **Description:** Clarify in Part 4.4: "The Integrative Auditor does NOT score PA-05. Produces: (1) gestalt impression from SCREENSHOTS, (2) cross-cutting patterns not caught by individual auditors, (3) emotional arc observation using 4-register framework. PA-05 scoring is the WEAVER's responsibility." Fix MANIFEST contradiction (says Integrative scores PA-05).
- **Line impact:** +6 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** FUNCTIONAL CONTRADICTION between protocol and MANIFEST about PA-05 ownership.

---

### FIX-084: Weaver-Only Label on Tier Context
- **Source:** File 14b, Section 3.3 + Section 6.5 Change 1
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** STRUCTURAL-CHANGE
- **Description:** In Part 7, add WARNING box: "These tier definitions are for WEAVER use only. They MUST NOT be included in PA Auditor A-I prompts. The fresh-eyes principle (Part 13) prohibits tier context for individual auditors."
- **Line impact:** +4 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Firewall exists by convention but not by specification.

---

### FIX-085: Weaver Calibration Sequencing Note
- **Source:** File 14b, Section 4.3 + Section 6.5 Change 5
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** In Part 4.5, add: "Calibration references are CLASSIFICATION tools, not evaluation rubrics. The Weaver must FIRST describe observations in own words, THEN classify using reference scales." Prevents anchoring on categories.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Subtle but important: reading scales before evidence risks anchoring.

---

### FIX-086: Weaver Diagnostic Vocabulary Guidance
- **Source:** File 14b, Section 6.5 Change 4
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 2
- **Priority:** MEDIUM
- **Type:** STRUCTURAL-CHANGE
- **Description:** After Part 4.5, add "Weaver Diagnostic Vocabulary" subsection. MECHANICAL: fix by changing CSS value (evidence: auditors cite specific elements). STRUCTURAL: reorganize zones/boundaries/grids (evidence: spatial relationship problems). COMPOSITIONAL: re-invoke tension-composition (evidence: absence of unifying logic/metaphor).
- **Line impact:** +8 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently the Weaver must infer diagnostic categories without guidance.

---

## WAVE 3: ARCHITECTURAL / META (42 fixes)

---

### FIX-087: EXECUTION-TRACKER Template — Create New File
- **Source:** File 17, Section 4 (complete template, ~150 lines)
- **Target file:** ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md (NEW FILE)
- **Wave:** 3
- **Priority:** CRITICAL
- **Type:** LOGGING
- **Description:** Create the execution tracker template per File 17's complete design. Pre-flight checklist, per-phase routing verification checkboxes, interleaved log sections, execution summary table. ~150 lines. Auto-generated from MANIFEST routing tables. The orchestrator COPIES this to output directory at pipeline start and fills it in during execution.
- **Line impact:** +150 / -0 net (new file)
- **Status:** PENDING
- **Quality:**
- **Notes:** Single most important architectural addition. Zero disruption to 13 anti-loss mechanisms.

---

### FIX-088: MANIFEST Quickstart — Add Step 0 (Execution Tracker)
- **Source:** File 17, Section 6 (Implementation Plan)
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 3
- **Priority:** HIGH
- **Type:** MANIFEST-EDIT
- **Description:** Add to Quickstart: "Step 0: Copy EXECUTION-TRACKER-TEMPLATE.md to output directory. Fill in BUILD_DATE, CONTENT_PATH, SLUG. This is your working document for the run."
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on FIX-087 template existing.

---

### FIX-089: SKILL.md — Add Execution Tracker Reference
- **Source:** File 17, Section 6
- **Target file:** ephemeral/va-extraction/SKILL.md (build-page)
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Add bullet point to "Execution rules" section: "Use EXECUTION-TRACKER-TEMPLATE.md for per-build accountability tracking."
- **Line impact:** +2 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Minor reference addition.

---

### FIX-090: Gate Splitting Architecture — 1 File to 4 Files + Manifest
- **Source:** File 13, Section 3B (complete architecture)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md (split into multiple)
- **Wave:** 3
- **Priority:** HIGH
- **Type:** ARCHITECTURAL
- **Description:** Split gate runner into: (1) gate-runner-core.js (~250 lines, Playwright code), (2) gate-runner-preconditions.md (~80 lines, text checks), (3) gate-runner-spec.md (~200 lines, human-readable spec), (4) gate-runner-provenance.md (~300 lines, traceability/history), (5) gate-manifest.json (~50 lines, table of contents). Reduces what orchestrator must process from 1,379 to ~300 lines.
- **Line impact:** +880 / -1379 net (split, not deletion)
- **Status:** PENDING
- **Quality:**
- **Notes:** Major architectural change. Reduces per-audience processing by 70-80%.

---

### FIX-091: PA Protocol Splitting Architecture — 1 File to 4 Files + Manifest
- **Source:** File 14, Section Part 5 (complete architecture)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md (split into multiple)
- **Wave:** 3
- **Priority:** HIGH
- **Type:** ARCHITECTURAL
- **Description:** Split PA protocol into: (1) pa-questions.md (~350 lines), (2) pa-deployment.md (~250 lines), (3) pa-weaver.md (~200 lines, weaver ONLY), (4) pa-guardrails.md (~200 lines), (5) pa-manifest.md (~50 lines). Separates question definitions from deployment from weaver protocol from guardrails.
- **Line impact:** +1050 / -1004 net (split, not deletion)
- **Status:** PENDING
- **Quality:**
- **Notes:** Enforces information isolation (weaver context hidden from auditors).

---

### FIX-092: Mode-Conditional Builder Input Set
- **Source:** File 15, Section Item 4, Fix 4.1
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** ARCHITECTURAL
- **Description:** Add MODE CONDITIONAL to builder prompt template: IF COMPOSED: full value-tables + CD-006 MANDATORY. IF APPLIED: abbreviated value-tables + CD-006 OMITTED. Keeps routing table fixed; templates have conditionals.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently COMPOSED and APPLIED receive identical inputs.

---

### FIX-093: Content-Type Conditional in TC Brief Template
- **Source:** File 15, Section Item 4, Fix 4.2
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** ARCHITECTURAL
- **Description:** Add content-type conditional to Tier 3: IF PROSE: focus typography/spacing, atmospheric metaphor, argument-driven arc, 3-4 boundaries. IF MIXED: full multi-coherence, structural metaphor, 4-6 boundaries. IF VISUAL: focus layout/spacing, reduce typography guidance, image containers priority.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** VISUAL content type does not exist yet. Prepares pipeline for diversity.

---

### FIX-094: Gate Runner Reclassification — Move 20 Gates to Orchestrator
- **Source:** File 15, Section Item 3, Fix 3.1
- **Target file:** ephemeral/va-extraction/artifact-orchestrator.md + artifact-gate-runner.md
- **Wave:** 3
- **Priority:** HIGH
- **Type:** ARCHITECTURAL
- **Description:** Move GR-23 through GR-42 OUT of gate-runner INTO orchestrator as "Orchestrator Decision Rules." Organized by phase: Pre-Build (GR-23-28), Verdict (GR-29-32), Mode Detection (GR-33-35), Pipeline Policy (GR-36-42). ~225 lines removed from gate-runner, ~100 lines added to orchestrator.
- **Line impact:** +100 / -225 net
- **Status:** PENDING
- **Quality:**
- **Notes:** OVERLAPS with FIX-024/025/026/027 (individual gate removals). This is the comprehensive version. If gate splitting (FIX-090) happens, this becomes part of that architecture.

---

### FIX-095: OM-11 D-09 Quiet Zone Disposition
- **Source:** File 16, Section OM-11
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** RECIPE-EDIT
- **Description:** Add D-09 "The Quiet Zone" [EXPERIMENTAL] after D-08. Designate at least ONE zone in middle third as deliberately plainer. Vocabulary: fewer mechanisms (2-3 vs 4-5), no bento grid, single-column prose. Preserve: zone background, typography, border-weight (family membership). Anti-pattern: empty zone with uniform cream.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** HIGHEST RISK fix. Medium risk of misinterpretation. Recommend running one build WITHOUT D-09 first to establish baseline, then add incrementally.

---

### FIX-096: D-09 — Update MANIFEST Extraction Guide
- **Source:** File 16, Section OM-11 (cross-cutting)
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Update extraction guide from "D-01 through D-08" to "D-01 through D-09". Update glossary with D-09 definition. Update brief template Tier 4 to include D-09 assembly instructions.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on FIX-095.

---

### FIX-097: Phase 6 Label Change in Recipe
- **Source:** File 16, Section OM-16
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** RECIPE-EDIT
- **Description:** Remove "(Advanced)" from Phase 6 header. Add note: "This phase is verified during Phase 5 self-evaluation. See self-eval questions 5-7." Eliminates signal that Phase 6 is optional.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Pairs with FIX-016.

---

### FIX-098: Orchestrator Decision Rules Section
- **Source:** File 15, Section Item 3, Fix 3.1
- **Target file:** ephemeral/va-extraction/artifact-orchestrator.md
- **Wave:** 3
- **Priority:** HIGH
- **Type:** ARCHITECTURAL
- **Description:** Add new "SECTION 9: ORCHESTRATOR DECISION RULES (formerly GR-23 through GR-42)" with ~100 lines. Organized by execution phase: Pre-Build Checks, Verdict Logic, Mode Detection, Pipeline Policy. Framed as ORCHESTRATOR LOGIC, not Playwright code.
- **Line impact:** +100 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Receives content moved by FIX-094.

---

### FIX-099: MANIFEST Section 3 Routing Table Update
- **Source:** File 15, Section Item 3, Fix 3.1 + File 13, Section 6B
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** MANIFEST-EDIT
- **Description:** Update Section 3 routing table: "42 gates" -> "22 gates (post-split)" or "38 gates (post-addition/removal)" in gate-runner row. Add "Orchestrator Decision Rules (20)" to orchestrator row. Update Section 9 coverage verification.
- **Line impact:** +5 / -5 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on final gate count being settled.

---

### FIX-100: Gate Execution Manifest JSON Template
- **Source:** File 13, Section 6E
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md (or gate-manifest.json)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** LOGGING
- **Description:** Orchestrator produces `gate-execution-manifest.json` after every run: buildId, timestamp, viewports, gates executed per tier, results array, verdict, coverage gate status, result file hash. Full template in File 13 Section 6E.
- **Line impact:** +20 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Enables GR-48 and post-run verification.

---

### FIX-101: Cross-Viewport Comparison Section in PA Protocol
- **Source:** File 14b, Section 6.5 Change 3
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** Add short section noting which questions require multi-viewport evidence (PA-21-23, PA-46) and how auditors should structure analysis (compare 1440px vs 768px side-by-side, then intermediate 1024px).
- **Line impact:** +6 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Currently scattered across assignments.

---

### FIX-102: "SHIP WITH FIXES" as Defined Verdict Category
- **Source:** File 14, Section Part 8 (Finding 5)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** STRUCTURAL-CHANGE
- **Description:** Add "SHIP WITH FIXES" as a protocol-defined verdict category alongside SHIP/REFINE/REBUILD. Currently used in practice but not in protocol. Define criteria: PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes needed.
- **Line impact:** +5 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Compliance audit docked 0.5 for using undefined category.

---

### FIX-103: GR-47 Brief Line Budget — NEW RECOMMENDED GATE (Precondition)
- **Source:** File 13, Section 2B (GR-47 spec + code)
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md (preconditions section)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** NEW-GATE
- **Description:** Add GR-47: verify brief tier line budgets. T1 >= 12, T2 >= 6, T3 >= 40, T4 >= 32. Runs pre-build on brief text. Catches Brief Assembler bottleneck (Tier 4 at 25/40 = 62.5%). NOTE: OVERLAPS with BV-01 (FIX-007). May be redundant if BV gates are implemented.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** POTENTIAL REDUNDANCY with FIX-007 (BV-01). SEE CONFLICTS.

---

### FIX-104: Fix 1.3 + Fix 4.1 Interaction Note
- **Source:** File 15, Section Cross-Cutting Analysis
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** MANIFEST-EDIT
- **Description:** Add to builder prompt: "Zone backgrounds in the brief are LOCKED. CD-006 is for compositional reference (metaphor, zone modulation, transitions), not for color copying." Prevents conflict between background hex lock (FIX-012) and mandatory CD-006 (FIX-092).
- **Line impact:** +2 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Second-order effect. If both FIX-012 and FIX-092 are implemented.

---

### FIX-105: Screenshot Count Specification
- **Source:** File 14b, Section 4.4 Disconnect 2
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** Protocol specifies "cold look + scroll-through at 80% viewport-height steps" but does not specify EXPECTED screenshot count. Mode 4 PA used 102 screenshots but spec implies ~24. Add expected count formula: ~7 scroll shots per viewport x 3 viewports + 3 cold looks = ~24 minimum, plus detail shots as needed.
- **Line impact:** +4 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Spec-practice disconnect. Not critical.

---

### FIX-106: PA Auditor Model Requirement Softening
- **Source:** File 14b, Section 4.4 Disconnect 3
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** Change "MUST be Opus" for PA auditors to "STRONG RECOMMENDATION" per council language alignment. Council used "STRONG RECOMMENDATION, not non-negotiable" for builder. PA protocol uses harder language without justification.
- **Line impact:** +1 / -1 net
- **Status:** PENDING
- **Quality:**
- **Notes:** 11 Opus agents in Phase 3 is the most expensive phase.

---

### FIX-107: Verdict Fix-Type Classification Addition
- **Source:** File 14, Section Part 8 (Finding 5) — compliance deduction
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** STRUCTURAL-CHANGE
- **Description:** Add fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) as REQUIRED section of weaver verdict output. Currently missing from protocol-defined outputs — compliance audit docked 3 points.
- **Line impact:** +5 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Already in the enriched Weaver protocol but not in the required outputs list.

---

### FIX-108: Verdict Emotional Arc Section Addition
- **Source:** File 14, Section Part 8 (Finding 5) — compliance deduction
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** Add emotional arc synthesis as REQUIRED section of weaver verdict output. Currently missing from protocol-defined outputs — compliance audit docked 2 points.
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Emotional arc is now PA-primary (CF-02) but verdict does not require it.

---

### FIX-109: PA-50 Demote to Gate-Verification Note
- **Source:** File 14b, Section 2.3 + Section 6.3
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** PA-REDISTRIBUTION
- **Description:** Demote PA-50 from standalone question to verification note: "Cross-reference with GR-14 gate result. If gate passed but you perceive a void, flag as FALSE NEGATIVE." Near-identical to gate check. Frees 1 question from Auditor C.
- **Line impact:** +2 / -6 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Only from File 14b. File 14 KEEPS PA-50. SEE CONFLICTS.

---

### FIX-110: PA-53 Demote to Gate-Verification Note
- **Source:** File 14b, Section 2.3 + Section 6.3
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** PA-REDISTRIBUTION
- **Description:** Demote PA-53 from standalone question to verification note: "Cross-reference with GR-03 gate result. If gate passed but page feels too narrow/wide, flag as perceptual mismatch." Near-identical to GR-03 (940-960px). Frees another question from Auditor C.
- **Line impact:** +2 / -6 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Only from File 14b. File 14 KEEPS PA-53. SEE CONFLICTS.

---

### FIX-111: Execution Tracker Post-Run Verification Protocol
- **Source:** File 17, Section 4.3
- **Target file:** ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md (NEW FILE)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** LOGGING
- **Description:** Add verification section at end of tracker template: (1) Completeness check — all checkboxes marked? (2) Consistency — log entries match checkbox claims? (3) Output correspondence — claimed outputs exist? Can be automated: parse for `[x]` count, anomaly keywords, file existence.
- **Line impact:** Included in FIX-087
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of the execution tracker template.

---

### FIX-112: SKILL.md Updates (build-page)
- **Source:** All reports (multiple references)
- **Target file:** ephemeral/va-extraction/SKILL.md (build-page)
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Update SKILL.md to reflect: new gate count, new PA question count, execution tracker reference, D-09 disposition, brief verification gates, background hex lock. Summary-level updates only.
- **Line impact:** +10 / -5 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Catch-all for SKILL.md synchronization.

---

### FIX-113: CLAUDE.md Updates
- **Source:** All reports (multiple references)
- **Target file:** design-system/CLAUDE.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Update design-system CLAUDE.md to reference Pipeline v3.1 changes: new gate architecture, PA redistribution, execution tracker, brief verification gates.
- **Line impact:** +5 / -2 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Root navigation file update.

---

### FIX-114: MEMORY.md Updates
- **Source:** All reports (completion status)
- **Target file:** /Users/spacewizardmoneygang/.claude/projects/-Users-spacewizardmoneygang-Desktop-Claude-Research-And-Tips/memory/MEMORY.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Update MEMORY.md with Pipeline v3.1 implementation status, key findings summary, and pointer to implementation directory.
- **Line impact:** +10 / -5 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Session memory update.

---

### FIX-115: Archive Outdated Analysis Files
- **Source:** Post-implementation cleanup
- **Target file:** ephemeral/pages/gas-town-va-pipeline/analysis/ (move to _archive/)
- **Wave:** 3
- **Priority:** LOW
- **Type:** ARCHITECTURAL
- **Description:** After implementation, move superseded analysis files to _archive/ subdirectory. Keep only the master checklist and implementation artifacts as active references.
- **Line impact:** +0 / -0 net (file moves)
- **Status:** PENDING
- **Quality:**
- **Notes:** Housekeeping. Do after all implementation complete.

---

### FIX-116: Gate Manifest JSON File
- **Source:** File 13, Section 3B (gate-manifest.json design)
- **Target file:** ephemeral/va-extraction/gate-manifest.json (NEW FILE)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** ARCHITECTURAL
- **Description:** Create gate-manifest.json (~50 lines): version, date, gates organized by tier (required/recommended/advisory), verdict logic, file references, execution order (7 steps). The orchestrator's primary reference instead of the 1,379-line gate runner artifact.
- **Line impact:** +50 / -0 net (new file)
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of gate splitting architecture (FIX-090). Reduces orchestrator processing from 1,379 to ~50 lines.

---

### FIX-117: PA Execution Manifest Template
- **Source:** File 14, Section Part 7 (PA Execution Manifest template)
- **Target file:** ephemeral/va-extraction/pa-manifest.md (or part of pa-deployment.md)
- **Wave:** 3
- **Priority:** MEDIUM
- **Type:** ARCHITECTURAL
- **Description:** Create PA execution manifest: per-run tracking of auditor report receipt, manifest completeness, PA-05 cross-validation, weaver verification checkboxes. Full template in File 14.
- **Line impact:** +50 / -0 net (new file or section)
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of PA splitting architecture (FIX-091).

---

### FIX-118: Builder Prompt CD-006 Interaction Clarification
- **Source:** File 15, Cross-Cutting Analysis (second-order effects)
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Appendix E)
- **Wave:** 3
- **Priority:** LOW
- **Type:** RECIPE-EDIT
- **Description:** Add note to builder prompt when CD-006 is provided: "CD-006 reference is for studying compositional patterns (zone modulation, transition types, component adaptation). Do NOT copy its specific colors, spacing values, or layout choices — your page serves different content."
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Prevents builder from treating CD-006 as a template to copy.

---

### FIX-119: Pipeline Latency Budget Note
- **Source:** File 15, Cross-Cutting Analysis (second-order effects)
- **Target file:** ephemeral/va-extraction/MANIFEST.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Add note to Phase 1 description: "Brief verification adds ~5 minutes per run (text parsing + potential revision cycle). Maximum additional time: ~15 minutes (if 2 revision cycles). 5 minutes of verification prevents 45+ minutes of wasted builder time on a defective brief."
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Sets expectations for pipeline timing.

---

### FIX-120: Experiment Protocol Document (Moved Gates)
- **Source:** File 13, Section 6B (gates to REMOVE)
- **Target file:** ephemeral/va-extraction/experiment-protocol.md (NEW FILE or section)
- **Wave:** 3
- **Priority:** LOW
- **Type:** ARCHITECTURAL
- **Description:** Create experiment protocol document to receive GR-36 through GR-39 (experiment gates moved from gate runner). Includes Stage 0 Smoke, Stage 1 Q20, Stage 2 H2H, Stage 4 Flagship protocol definitions.
- **Line impact:** +40 / -0 net (new file)
- **Status:** PENDING
- **Quality:**
- **Notes:** Content already exists in gate runner. Just needs relocation.

---

### FIX-121: Tier 5 Scoring Provisional Status Note
- **Source:** File 14, Section Part 8 (Finding 4)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** STRUCTURAL-CHANGE
- **Description:** Add note: "Tier 5 scoring thresholds (8-9 = COMPOSED, 6-7 = APPROACHING) are PROVISIONAL with N=1 validation. Treat as hypotheses until at least N=3 data points exist."
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** All 9 Tier 5 questions are "INITIAL HYPOTHESES."

---

### FIX-122: PA-69 Multi-Coherence Direction Integration
- **Source:** File 14, Part 2 (GAP-5)
- **Target file:** ephemeral/va-extraction/artifact-pa-protocol.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** PA-REWRITE
- **Description:** Augment PA-69 to include coherence direction check: add "Do the changes at each boundary AGREE with each other?" to existing PA-69 transition intensity question. Partial fix for GAP-5; PA-73 (FIX-057) is the fuller fix.
- **Line impact:** +2 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Redundant if PA-73 (FIX-057) is implemented. Minor augmentation.

---

### FIX-123: Builder Recipe Step 2.4 Forward Reference
- **Source:** File 16, Section OM-10 (cross-reference)
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** RECIPE-EDIT
- **Description:** Add to Step 2.4 (callout variant semantics): "> These selections will be deployed in Step 3.4b. Write them down — you will need them." 1-line forward reference that primes builder memory.
- **Line impact:** +1 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of OM-09/10 bundle (FIX-077). Listed separately for tracking.

---

### FIX-124: Builder Recipe Phase 6 Merge Note
- **Source:** File 16, Section OM-16
- **Target file:** ephemeral/va-extraction/artifact-builder-recipe.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** RECIPE-EDIT
- **Description:** In Phase 6 header, add note: "This phase is verified during Phase 5 self-evaluation (questions 5-7). The content below is reference — the builder verifies these aspects in Phase 5 rather than executing Phase 6 as a separate step."
- **Line impact:** +3 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Pairs with FIX-016 and FIX-097.

---

### FIX-125: Extraction Guide D-01 through D-09 Update
- **Source:** File 16, Section OM-11 (cross-cutting)
- **Target file:** ephemeral/va-extraction/MANIFEST.md (Section 3)
- **Wave:** 3
- **Priority:** LOW
- **Type:** MANIFEST-EDIT
- **Description:** Update MANIFEST Section 3 extraction guide from "INCLUDE VERBATIM: disposition D-01-D-08 instructions" to "D-01-D-09." Word change only.
- **Line impact:** +0 / -0 net (word change)
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on FIX-095 (D-09).

---

### FIX-126: Brief Template D-09 Assembly Instructions
- **Source:** File 16, Section OM-11 (cross-cutting)
- **Target file:** ephemeral/va-extraction/artifact-tc-brief-template.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** RECIPE-EDIT
- **Description:** Add D-09 to Tier 4 assembly instructions in the brief template. ~2 lines for the assembler to include D-09 in Tier 4.
- **Line impact:** +2 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** Depends on FIX-095 (D-09).

---

### FIX-127: Gate Coverage Meta-Check Implementation
- **Source:** File 15, Section Item 3, Fix 3.3
- **Target file:** ephemeral/va-extraction/artifact-gate-runner.md
- **Wave:** 3
- **Priority:** HIGH
- **Type:** NEW-GATE
- **Description:** Add meta-gate at end of gate runner: verify all 22 expected gates produced results (after reclassification). Compare executed gate IDs against expected list. Missing = FAIL. Code provided in File 15 Fix 3.3. NOTE: Overlaps with GR-48 (FIX-069). May be same gate.
- **Line impact:** +15 / -0 net
- **Status:** PENDING
- **Quality:**
- **Notes:** POTENTIAL REDUNDANCY with FIX-069 (GR-48). SEE CONFLICTS.

---

### FIX-128: Execution Log Per-Agent Output Paths
- **Source:** File 17, Section 4.1 + Original synthesis findings
- **Target file:** ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md
- **Wave:** 3
- **Priority:** LOW
- **Type:** LOGGING
- **Description:** In each phase section of the execution tracker, add fields for recording output file paths. Content Map path, Brief path, HTML path, Gate results path, PA report paths, Weaver verdict path. Enables post-run verification agent.
- **Line impact:** Included in FIX-087
- **Status:** PENDING
- **Quality:**
- **Notes:** Part of execution tracker template design.

---

## CONFLICTS AND OPEN QUESTIONS

---

### CONFLICT-001: PA-23 Rewrite Wording (File 14 vs File 14b)
- **File 14 proposes:** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"
- **File 14b proposes:** "At 768px, does anything look broken, truncated, or overlapping that worked at 1440px? At what point between viewports does the layout feel most strained?"
- **Recommendation:** Use File 14's version (more specific, references exact screenshot pairs). File 14b's "at what point between viewports" still implies interactive testing.
- **Affects:** FIX-047

---

### CONFLICT-002: PA-24/PA-25 Rewrite Wording (File 14 vs File 14b)
- **File 14:** PA-24 -> "Does this feel like it belongs to a SYSTEM, or is it one-off custom work?" / PA-25 -> "If you covered the header, could you identify the design system?"
- **File 14b:** PA-24 -> keep but rewrite for single-page / PA-25 -> "If you covered the header, does the rest of the page still feel like a cohesive design?"
- **Recommendation:** Use File 14b's PA-25 rewrite (does not require design system knowledge). For PA-24, use File 14's version (more actionable).
- **Affects:** FIX-051, FIX-052

---

### CONFLICT-003: PA-72 Auditor Assignment (File 14 vs File 14b)
- **File 14:** Assign PA-72 (accessibility) to Auditor H (lightest load, responsiveness-adjacent)
- **File 14b:** Assign PA-72 to Auditor E (Grid + Layout)
- **Recommendation:** Use File 14's assignment (H has lightest load; accessibility is responsiveness-adjacent). E already has 6 questions.
- **Affects:** FIX-056

---

### CONFLICT-004: New PA Question Numbering (File 14 vs File 14b) — RESOLVED
- **PA-71:** Transition quality (Wave 1 cleanup addition, assigned to Auditor D)
- **PA-72:** Content-form specificity (File 14's original PA-71, shifted +1)
- **PA-73:** Accessibility quality (File 14's original PA-72, shifted +1)
- **PA-74:** Coherence direction (File 14's original PA-73, shifted +1)
- **PA-75:** Completion (File 14's original PA-74, shifted +1)
- **PA-76:** Emotional arc direct assessment (File 14b's original PA-71)
- **PA-77:** Typographic hierarchy as composition (File 14b's original PA-73)
- **Affects:** FIX-055 through FIX-060 (all renumbered accordingly)

---

### CONFLICT-005: Auditor C Load Reduction Strategy (File 14 vs File 14b)
- **File 14:** Redistribute PA-52 to D, PA-55 to B, remove PA-10. Result: C at 11-12 questions.
- **File 14b:** Split C into C1 (8 Qs) and C2 (5-6 Qs). Requires 10th auditor. Cost: ~$5-15 extra.
- **Recommendation:** Start with File 14's redistribution (cheaper, simpler). If quality degrades with C at 11-12, escalate to C1/C2 split. FIX-064 is the ALTERNATIVE to FIX-061/062.
- **Affects:** FIX-061, FIX-062, FIX-064

---

### CONFLICT-006: PA-50/PA-53 Keep vs Demote (File 14 vs File 14b)
- **File 14:** KEEP PA-50 and PA-53 as standalone questions (scored 5.0 and 4.8 respectively)
- **File 14b:** DEMOTE to gate-verification notes (near-identical to gate checks GR-14 and GR-03)
- **Recommendation:** KEEP as standalone questions (File 14's position). The perceptual assessment adds value beyond the gate's binary check. Auditor C overload is better addressed by redistribution (FIX-061/062) than by removing questions.
- **Affects:** FIX-109, FIX-110

---

### CONFLICT-007: GR-47 vs BV-01 Redundancy
- **File 13 proposes:** GR-47 (Brief Line Budget Compliance) as new RECOMMENDED gate
- **File 15 proposes:** BV-01 (Tier Line Budget Compliance) as brief verification gate
- **These are the SAME check with different names and slightly different thresholds.**
- **Recommendation:** Implement as BV-01 (File 15) in the brief verification section. Do NOT also implement as GR-47. BV-01 runs pre-build; GR-47 was proposed as a gate-runner gate but belongs in preconditions.
- **Affects:** FIX-007, FIX-103

---

### CONFLICT-008: GR-48 vs META-COVERAGE Redundancy
- **File 13 proposes:** GR-48 (Gate Coverage Completeness) as new REQUIRED gate
- **File 15 proposes:** META-COVERAGE function `verifyGateCoverage(results)`
- **These are the SAME check with different names.**
- **Recommendation:** Implement as GR-48 (File 13's naming). Absorb File 15's implementation code. One gate, not two.
- **Affects:** FIX-069, FIX-127

---

### CONFLICT-009: FIX-040 (GR-19 demote to ADVISORY) vs FIX-031 (add code for GR-19)
- **File 13 recommends:** Demote GR-19 to ADVISORY (no code, arbitrary threshold)
- **File 15 provides:** Executable code for GR-19 (threshold gaming detection)
- **If code is added (FIX-031), the rationale for demotion (FIX-040) weakens.**
- **Recommendation:** Implement FIX-031 (add code). Keep GR-19 as RECOMMENDED (do NOT demote). Mark FIX-040 as SUPERSEDED.
- **Affects:** FIX-031, FIX-040

---

### OPEN QUESTION 1: Total Net Line Impact
- The 128 fixes have significant overlap (gate removals partially offset by gate additions, PA removals offset by PA additions). Estimated net: ~+400-500 lines across all artifact files, but ~-500 lines from gate runner after splitting. Overall pipeline may SHRINK slightly in orchestrator-visible lines while growing in total.

### OPEN QUESTION 2: Implementation Order Within Waves
- Wave 1 has 42 fixes. Not all can be done simultaneously. Recommended sub-ordering: (1) Gate defect fixes (FIX-001 through FIX-006, FIX-033-035), (2) Brief verification (FIX-007 through FIX-011), (3) Brief template changes (FIX-012 through FIX-014), (4) Builder prompt changes (FIX-015, FIX-016), (5) Gate removals (FIX-024 through FIX-029), (6) Enrichments (FIX-018 through FIX-023), (7) Gate reclassifications (FIX-036 through FIX-042).

### OPEN QUESTION 3: D-09 (FIX-095) Incremental Testing
- File 16 recommends running one build WITHOUT D-09 first to establish baseline. This means FIX-095 should be deferred until after a validation build with Wave 1+2 changes.

### OPEN QUESTION 4: Auditor C Resolution Path
- If redistribution (FIX-061/062) brings C to 11-12 and that proves insufficient, escalate to C1/C2 split (FIX-064). This is a staged approach. FIX-064 should be marked as CONTINGENT on FIX-061/062 results.

---

*End of Master Fix Checklist. 128 fixes extracted from 6 analysis reports (~4,600 lines). 9 conflicts documented. 4 open questions flagged. This document is the SINGLE SOURCE OF TRUTH for all Pipeline v3.1 implementation work.*
