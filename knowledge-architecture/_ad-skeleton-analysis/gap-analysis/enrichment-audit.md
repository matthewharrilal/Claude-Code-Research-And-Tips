# Enrichment Validation Architecture: Auditor Assessment

**Author:** enrichment-auditor (fresh eyes)
**Date:** 2026-02-09
**Auditing:** enrichment-gaps.md (474 lines, 16 gaps across 3 severity tiers)
**Method:** Cross-referenced architect claims against 8 source files; checked completeness against skeleton Section 4; identified missed gaps

---

## EXECUTIVE ASSESSMENT

The architect's work is **HIGH QUALITY** -- substantially better than average gap analysis. The 16 gaps are well-grounded in source evidence, accurately represent what happened in OD, and propose specific, implementable fixes. The framing insight ("enrichment is document engineering, not pipeline design") is genuinely original and correct.

However, the audit reveals **3 accuracy errors**, **4 missed gaps**, and **2 structural weaknesses** that need attention before the analysis feeds into the final plan.

**Overall Grade: B+ (Strong, with corrections needed)**

---

## 1. VERIFICATION RESULTS: SPOT-CHECKING CLAIMS

### 1.1 CLAIM: "OD-001 header is 75 lines of structured metadata" (GAP-E06, line 134)

**VERIFIED: ACCURATE.** OD-001-conversational.html lines 1-75 contain the Research Application Record. The architect correctly identified all 8 enrichment layers present in this header. The header includes score breakdown, hypothesis, identity, density pairing, DD sources, applied research (original v1 + v2 + v3), anti-patterns avoided, spirit violations fixed, fractal compliance, and OD-F-005 identity statement.

**Auditor note:** The header is actually 75 lines for the RAR PLUS lines 77-120+ for the Inline Threading Header -- the architect correctly identified these as separate layers (Layer 1 and Layer 2). Total metadata is ~120 lines, not 75.

### 1.2 CLAIM: "OD convention spec was written AFTER the audit" (GAP-E01, line 36)

**VERIFIED: ACCURATE.** OD-CONVENTION-SPEC.md's own inline threading header (line 7) states: "BUILT ON: OD-AUDIT-SYNTHESIS, OD-SYNTHESIS, anti-patterns/registry.md, ACCUMULATED-IDENTITY-v1.md". The file manifest in `_od-reenrichment/CLAUDE.md` confirms it was produced in Wave 0 of re-enrichment (NOT the original OD build). The architect correctly identifies that AD's convention spec faces the inverse problem -- being written BEFORE explorations exist.

### 1.3 CLAIM: "5 spirit violations fixed in v3" (GAP-E04, line 65)

**VERIFIED: ACCURATE.** OD-001 header lines 60-65 list exactly 5 spirit violations: semi-transparent offsets, type scale correction, code block color correction, header background change, and 2px border elimination. The architect correctly uses these as evidence that template enforcement has a structural weakness.

### 1.4 CLAIM: "OD-006 had 5 intentional divergences" (GAP-E05, line 114)

**VERIFIED: ACCURATE.** OD-CONVENTION-SPEC.md Section 9 (lines 295-310) lists exactly 5 OD-006 divergences: --type-page 3rem, code block absence, all 5 content modes, drop caps, and --type-meta at 0.75rem. The architect correctly quotes "INTENTIONAL and MUST NOT be unified."

### 1.5 CLAIM: "4 dark matter indexers (dm-a through dm-d)" (GAP-E08, line 234)

**PARTIALLY ACCURATE.** I found dark-matter-index-a.md, dark-matter-index-b.md, and dark-matter-index-d.md -- only 3 files, not 4. The `_od-reenrichment/CLAUDE.md` manifest lists dark-matter-index-c.md with status "IN PROGRESS" -- it was never completed. The architect's claim of "~100 files across 4 underscore directories" is approximately right in count but the dm-c indexer never finished its work.

**Impact on analysis: MINOR.** The gap recommendation (dark matter prevention is insufficient) is still valid regardless of whether 3 or 4 indexers completed.

### 1.6 CLAIM: "Verification report had 9 binary checks per file + 5 shared provenance checks" (GAP-E14, line 339)

**VERIFIED: ACCURATE.** verification-wave1.md confirms exactly 9 per-OD checks (exists, score, soul violations, research rate, convention, OD-F findings, borders, spirit violations, score improvement) and 5 shared provenance checks (outbound-findings, EXT entries, RESEARCH-ACTIVE, RESEARCH-GATE, no dark matter). Total: 23 checks. The architect accurately reproduces this structure.

### 1.7 CLAIM: "Verification notes identified code block bg, header bg, and --type-meta issues" (GAP-E15, lines 350-354)

**VERIFIED: ACCURATE.** verification-wave1.md Notes 1-3 match exactly: Note 1 = code block bg #1E1E1E vs spec #1A1A1A (4 units off), Note 2 = header bg white vs spec dark, Note 3 = --type-meta 0.625rem vs spec 0.75rem. The architect correctly identified that these deferred notes have no carry-forward mechanism.

### 1.8 CLAIM: "The Wave 1 identity delta contained 4 surprises + 3 identity refinements + 3 questions" (GAP-E12, line 300)

**VERIFIED: ACCURATE.** identity-delta-wave1.md has exactly:
- 4 items under "What Surprised" (semi-transparent offsets, type scale provenance, zone token naming, progressive disclosure)
- 3 items under "Identity Refinements" (solid offsets quantitative gate, token naming as identity proof, Freytag falling action)
- 1 item under "SOUL FAIL Summary" (6/6 FAILs = ANTI-PHYSICAL pattern)
- 3 items under "New Questions for Wave 2"

Total: 11 substantive elements. The architect's claim of "4 surprises + 3 refinements + 3 questions = 10" undercounts by 1 (omits the SOUL FAIL summary as a separate element). Minor inaccuracy, does not affect the recommendation.

---

## 2. ACCURACY ERRORS FOUND

### ERROR 1: Scribe Operation Target Count (GAP-E07)

**Claim (line 206):** "The skeleton only specifies EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, and PIPELINE-MANIFEST as scribe targets."

**Actual skeleton text (Section 9.1):** "Scribes update SECONDARY chain documents (EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, PIPELINE-MANIFEST) after builder completion."

**What the scribe report actually shows:** The Wave 5 scribe updated OD-AUDIT-SYNTHESIS.md, OD-outbound-findings.md, RE-ENRICHMENT-STATE.md, 6 OD HTML files, and CLAUDE.md manifest. That's 11 files total.

**But:** The architect's 6-category scribe target table (lines 217-223) lists targets that are DIFFERENT from what the Wave 5 scribe did. The Wave 5 scribe was an AUDIT scribe (propagating audit findings), not a BUILD scribe (registering research). The architect is conflating two different scribe roles. OD had multiple scribe instances:
- Wave 1-3 scribes: Registered EXT-* findings, updated RESEARCH-ACTIVE, updated OD-RESEARCH-GATE (build-phase scribe)
- Wave 5 scribe: Updated OD-AUDIT-SYNTHESIS, outbound-findings, state file, HTML status lines (audit-phase scribe)

**Impact: MODERATE.** The recommendation to enumerate all scribe targets is correct, but the architect's table needs to distinguish BUILD scribes from AUDIT scribes. AD needs both types.

### ERROR 2: Dark Matter Indexer Count (GAP-E08)

As noted in verification 1.5 above: 3 completed, not 4. Minor factual error.

### ERROR 3: Identity Delta Element Count (GAP-E12)

As noted in verification 1.8: 11 substantive elements, not 10. The SOUL FAIL summary is a distinct element the architect counted as part of "refinements." Immaterial to the recommendation.

---

## 3. MISSED GAPS (What the Architect Did NOT Cover)

### MISSED GAP M1 [HIGH]: Research Package Format Is Unspecified

The skeleton says builders receive "research-package-ad-{N}.md" but NEVER specifies what a research package contains. The OD research packages (6 files in `_od-reenrichment/research/`) ranged from 264 to 429 lines and contained:
- Chain traversal (what prior findings apply to this specific OD)
- R-1 applicable subset (specific findings with application guidance)
- EXT-* bespoke findings (newly commissioned research)
- SOUL PASS/FAIL classification for every finding
- Specific application instructions (not just "apply R1-001" but "R1-001: use Q&A alternation to create PULSE rhythm -- implement as alternating background zones")

The architect mentions research packages peripherally (GAP-E01 context, line 45) but never flags the package FORMAT as a gap. Without format specification, researchers produce inconsistent packages and builders receive unstructured research dumps.

**Recommendation:** Add a research package template to the convention artifacts:
```
RESEARCH PACKAGE TEMPLATE (per AD exploration):
1. CHAIN TRAVERSAL (10-20 lines): What DD-F, OD-F findings apply
2. R-4 APPLICABLE (15-30 lines): Specific R-4 findings with application guidance
3. R-2 APPLICABLE (5-10 lines): Specific R-2 findings with AD targets
4. EXT-AXIS-* (20-40 lines): Bespoke findings, each with SOUL PASS/FAIL
5. APPLICATION INSTRUCTIONS (per finding): Specific CSS/HTML technique, not just ID
```

### MISSED GAP M2 [HIGH]: The Before/After Measurement Problem

The architect mentions screenshot provenance briefly (GAP-E09, 3 lines) but misses the deeper issue: OD re-enrichment created before-measurements.md and after-measurements.md files that captured QUANTITATIVE data (page height, element counts, font metrics) alongside screenshots. These measurements enabled the before-after-comparison.md that verified enrichment actually improved the artifacts.

AD building from scratch has no "before" state to compare against. But it DOES need a measurement baseline against the TEMPLATE. The gap is: how do you verify that a builder's AD-001 is better than the bare template? Without before-after quantitative comparison, the only evidence is subjective score ratings.

**Recommendation:** Establish template baseline measurements in Phase 0:
```
TEMPLATE BASELINE (captured once):
- Element count: N
- :root token count: N
- Page height: Npx
- Section count: 0
- Research citations: 0

POST-BUILD DELTA (per AD):
- Element count increase: >= 200 (meaningful content)
- Research citations: >= minimum per citation table
- Page height: within 10,000-14,000px range
```

### MISSED GAP M3 [MEDIUM]: Weaver Convention Drift Detection Has No Specification

The skeleton says the Weaver monitors "convention drift DURING build" (Section 5.5, item 4) and the architect mentions this (GAP-E04, line 108: "The Weaver's compliance check... should diff the LOCKED layer specifically"). But neither specifies HOW the Weaver detects drift.

In OD, convention drift was detected AFTER build (the 3-dialect gap). The Weaver cross-referenced findings but had no programmatic drift detection mechanism. For AD, the Weaver needs a specific detection protocol.

**Recommendation:** Weaver drift detection protocol:
```
AFTER EACH BUILDER COMPLETION:
1. Read builder's AD-NNN.html :root block
2. Diff against AD-SOUL-TEMPLATE.html :root block
3. Any LOCKED value that differs = CONVENTION DRIFT (flag to Lead)
4. Any AXIS value that deviates from AD-CONVENTION-SPEC.md = check against DEVIATION PROTOCOL
5. Write drift check result to AD-BUILD-STATE.md
```

### MISSED GAP M4 [MEDIUM]: The Comprehensive Audit's 10 Fixes Are NOT Reflected in Convention Spec

The architect partially identifies this as GAP-E11 (lines 276-290) but frames it as "Were these fixes reflected back into OD-CONVENTION-SPEC.md?" and recommends a 15-minute verification.

I checked the actual OD-CONVENTION-SPEC.md. It was written during Wave 0 of re-enrichment (per file manifest). The comprehensive audit (commit 71dc02c) happened AFTER re-enrichment (commit 826ce3a). This means the convention spec PRE-DATES 10 of the fixes:
- rgba opacity cleanup: NOT in convention spec (no prohibition on rgba with alpha < 1)
- Inline code font-size: Convention spec Section 3 says `font-size: 0.9em` for inline code -- was this the fix or the original?
- DD code block palette: Convention spec Section 3 lists syntax colors -- were these updated?
- Off-palette backgrounds: Convention spec Section 7 says "Prohibited: Off-palette colors" -- this IS present
- Skip-link/focus-visible: Convention spec Section 12 specifies these -- unclear if post-fix

**The architect's 15-minute estimate is too low.** This requires reading the 10 Critical/High fixes from the comprehensive audit report, cross-referencing each against the convention spec, and updating any stale values. That's a 30-45 minute task.

---

## 4. STRUCTURAL WEAKNESSES

### WEAKNESS 1: The LOCKED/AXIS Split (GAP-E04) Needs Implementation Detail

The architect's recommendation to split the template into a LOCKED layer and AXIS layer (lines 102-108) is the single most important recommendation in the document. But it lacks implementation detail. Questions unanswered:
- How are the layers physically separated in the HTML? Separate `<style>` blocks? CSS comments? CSS custom property naming convention?
- Can the Weaver's diff tool distinguish locked from axis CSS automatically? If it requires manual parsing of CSS comments, it won't be binary-enforceable.
- What happens if an axis layout NEEDS to override a locked value? (Example: a Bento Grid might need different `max-width` than the template's 860px inner wrapper.)

**Recommendation:** The layers should be physically separated as two `<style>` blocks with identifying comments:
```html
<style id="locked-layer">
  /* DO NOT MODIFY — any diff here = FAIL */
  :root { ... }
  /* base styles */
</style>
<style id="axis-layer">
  /* Builder: modify this block only */
  /* Axis-specific grid/flex layouts */
</style>
```

This enables programmatic verification: `diff locked-layer` between template and builder output.

### WEAKNESS 2: Priority Ordering Doesn't Match Dependency Order

The architect's priority table (lines 402-433) organizes by "MUST FIX / SHOULD FIX / CAN FIX" but doesn't account for dependencies between gaps. Specifically:
- GAP-E01 (convention agent inputs) must be resolved BEFORE GAP-E03 (convention validation) -- you can't validate what you haven't specified
- GAP-E04 (LOCKED/AXIS split) must be resolved BEFORE GAP-E02 (convention freezing lifecycle) -- you can't decide what to freeze if you don't know what's locked vs axis
- GAP-E06 (enrichment layer checklist) should be resolved BEFORE GAP-E05 (deviation protocol) -- you need to know the standard before specifying how to deviate

The current ordering implies parallel execution, but these have serial dependencies.

**Recommendation:** Add a dependency column:
```
| # | Gap | Depends On | Fix |
|---|-----|-----------|-----|
| 1 | GAP-E04 (LOCKED/AXIS) | None | First -- defines template architecture |
| 2 | GAP-E01 (inputs) | None | Parallel with E04 |
| 3 | GAP-E06 (checklist) | E04 | Needs LOCKED/AXIS to enumerate layers |
| 4 | GAP-E02 (lifecycle) | E04 | Needs to know what's locked vs axis |
| 5 | GAP-E03 (validation) | E01 | Needs inputs specified first |
```

---

## 5. CONVENTION VALIDATION ACCURACY CHECK

The architect's analysis of how conventions get validated (GAP-E03, lines 73-81) is **CORRECT in diagnosis but incomplete in prescription.**

**Correct diagnosis:** The skeleton's Gate 0-06 ("exists, >= 300 lines") and 0-07 ("all values labeled T1/T2") prove existence and labeling, not correctness.

**Incomplete prescription:** The architect recommends Playwright verification that computed styles match convention values. This is good but insufficient. It only checks the TEMPLATE, not whether the convention VALUES THEMSELVES are correct.

OD's convention spec was correct because it was extracted from empirically validated artifacts. AD's convention spec includes T2 values (agent-authored, untested). Playwright can verify that the template embeds the values correctly, but it cannot verify that those values are the RIGHT values for axis geometry.

**The missing validation layer:** After Wave 1A builds, a RETROSPECTIVE convention validation should check:
1. Did the builders encounter situations where convention values were wrong?
2. Did any builder use the DEVIATION PROTOCOL?
3. Are there deviations that suggest the convention spec needs updating?

This is the two-phase lifecycle (GAP-E02) applied to validation, not just freezing.

---

## 6. AUTHORITY LAUNDERING ASSESSMENT

The architect addresses authority laundering (T1/T2 labeling) competently across multiple gaps:
- GAP-E01 line 53: "T2: CONVENTION -- untested assumption, to be validated by first builder"
- GAP-E02: Two-phase lifecycle prevents freezing untested T2 values
- GAP-E10: Standalone spec with inheritance labels makes provenance visible

**Assessment: ADEQUATE.** The architect correctly identifies that T2 values in AD's convention spec are inherently less trustworthy than T1 values and proposes mechanisms to surface this difference. The escape hatch (GAP-E01 line 55: "if Wave 1A builders discover a T2 convention is wrong") is the right approach.

**One nuance missed:** The architect doesn't address what happens when a T2 value is VALIDATED by Wave 1A. Does it get promoted to T1? If so, who updates the label? The convention spec is supposed to be frozen. The two-phase lifecycle (GAP-E02) partially addresses this but doesn't explicitly mention T2->T1 promotion as a lifecycle event.

**Recommendation:** Add to the two-phase lifecycle: "During VALIDATE phase, T2 values that are confirmed by builder output are promoted to T1 with evidence citation: 'T1 (validated by AD-001, convention confirmed in practice)'. T2 values that were contradicted are removed or revised."

---

## 7. ACTIONABILITY ASSESSMENT

The architect's recommendations are generally actionable -- they include specific formats, checklists, and effort estimates. The recommendations fall into three categories:

**Highly actionable (copy-paste into prompts):**
- GAP-E06: Enrichment layer checklist (8 items, can be embedded verbatim)
- GAP-E05: Deviation protocol (5-step process, binary decisions)
- GAP-E12: Identity delta quality gate (5 checks)
- GAP-E13: SOUL FAIL accumulator template
- GAP-E15: Deferred issues table template

**Actionable but needs elaboration:**
- GAP-E04: LOCKED/AXIS split (concept clear, implementation detail needed -- see Weakness 1)
- GAP-E02: Two-phase lifecycle (concept clear, who does the validation pass needs specification)
- GAP-E16: Signature elements (concept good, actual signature definitions need to be written per-research-finding)

**Directional but vague:**
- GAP-E08: "Formalize Weaver as dark matter indexer" (what does formalization look like?)
- GAP-E09: "Add screenshot provenance template" (no template provided)

---

## 8. OVERALL ASSESSMENT

### Strengths
1. **Deep source grounding:** Every gap cites specific line numbers, file contents, and empirical evidence from OD. This is not armchair analysis.
2. **Document engineering framing:** The insight that enrichment is document engineering (not pipeline design) is the correct framing and should be elevated to the top-level skeleton.
3. **Practical recommendations:** Most fixes include specific formats, templates, or checklists that can be directly embedded in agent prompts.
4. **GAP-E04 (LOCKED/AXIS split):** This is the single most impactful recommendation in the entire gap analysis. If only one gap is fixed, it should be this one.
5. **GAP-E06 (enrichment layer checklist):** The 8-layer enumeration is something the skeleton badly needed. Well-researched.

### Weaknesses
1. **Missing research package format specification** (Missed Gap M1) -- this is a HIGH gap that should have been caught.
2. **Scribe role conflation** -- the architect treats build scribes and audit scribes as one role (Error 1).
3. **Dependency ordering absent** -- gap fixes have serial dependencies that the prioritization table ignores (Weakness 2).
4. **Convention spec staleness depth underestimated** -- the 15-minute estimate for GAP-E11 is likely 30-45 minutes.

### Verdict

**APPROVE with corrections.** The enrichment architect produced a thorough, evidence-based analysis that identifies the skeleton's most critical enrichment gaps. The 3 accuracy errors are minor. The 4 missed gaps should be added. The 2 structural weaknesses should be addressed. After these corrections, this document is ready to inform the final plan.

**Top 5 gaps by impact (auditor-revised ranking):**
1. GAP-E04 (LOCKED/AXIS template split) -- prevents the OD dialect problem entirely
2. GAP-E06 (enrichment layer checklist) -- defines what "complete" means
3. MISSED M1 (research package format) -- defines what builders actually receive
4. GAP-E02 (two-phase convention lifecycle) -- prevents frozen wrong decisions
5. GAP-E01 (convention agent inputs) -- ensures conventions have valid inputs

---

## COMPACTION-SAFE SUMMARY

- **Enrichment architect work: B+ (approve with corrections)**
- **3 accuracy errors:** scribe role conflation (MODERATE), dark matter indexer count 3 not 4 (MINOR), identity delta count 11 not 10 (MINOR)
- **4 missed gaps:** M1-research package format (HIGH), M2-before/after measurement baseline (HIGH), M3-Weaver drift detection protocol (MEDIUM), M4-convention spec staleness depth (MEDIUM)
- **2 structural weaknesses:** LOCKED/AXIS split needs implementation detail, priority ordering ignores dependencies
- **Core insight validated:** "Enrichment is document engineering" is correct and should be elevated
- **Top recommendation: GAP-E04 (LOCKED/AXIS split)** -- the single highest-impact fix
- **Convention validation: correct diagnosis, incomplete prescription** -- needs retrospective validation after Wave 1A, not just Playwright template checks
- **Authority laundering: adequately addressed** -- add T2->T1 promotion as lifecycle event
- **Total gaps after audit: 20** (16 original + 4 missed)
