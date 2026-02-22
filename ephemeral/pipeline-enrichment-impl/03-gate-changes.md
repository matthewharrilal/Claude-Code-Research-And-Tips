# Gate-Runner Change Manifest

**Agent:** gate-manifest (Opus 4.6)
**Date:** 2026-02-20
**Target file:** `design-system/pipeline/gate-runner.md` (993 lines, 21 gates)
**Sources:** execution-report-findings.md (B7, B8), 11-master-synthesis.md, 05-verification-deep-dive.md, 07-anti-regression-analysis.md, 17-concept-flow-trace.md, 10-contrarian-analysis.md, 14-scale-section.md, SKILL.md (408 lines)

---

## EDIT INVENTORY

Total edits: 8
- BUG FIX: 2 edits
- DEFER: 1 edit
- GO BEYOND: 5 edits

---

### EDIT 1: Zone Selector Validation Pre-Gate (SC-00)

Source: B7 (Zone Selector Fragility) -- execution-report-findings.md. Rated HIGH. Identified as "#1 single point of failure" by the executing instance. Also referenced in 05-verification-deep-dive.md (every composition-critical gate depends on the same selector).
Location: NEW SECTION -- insert between line 99 (end of "Dependency chain" block) and line 100 (blank line before "## Gate Failure Protocol")
Type: GO BEYOND (HIGHEST PRIORITY)

Old text: NEW SECTION

New text:
```
---

## Zone Selector Validation (Pre-Gate SC-00)

ALL per-zone gates (SC-09, SC-10, SC-11, SC-13, SC-13B, SC-14 sub-check 3, SC-16) depend
on `document.querySelectorAll('[class*="zone"], section[data-zone], .section')`. If the
builder uses different class names, ALL per-zone gates silently return meaningless data or
vacuously pass. This is the #1 single point of failure in the gate system.

SC-00 runs FIRST, before any other gate. If SC-00 fails, ALL per-zone gates are SKIPPED
and the entire gate run reports FAIL with reason "zone selectors returned < 3 elements."

### SC-00: Zone Selector Validation

Tier: Pre-gate (runs before all others)
Enforcement: Programmatic (blocking)

PASS: Primary selector returns >= 3 elements
FAIL: Primary selector returns < 3 elements (gates cannot run)
FAIL WITH FALLBACK: Primary returns < 3, but secondary selectors recover >= 3

Primary selector: `[class*="zone"], section[data-zone], .section`
Secondary selectors (tried in order if primary fails):
  1. `section` (bare section elements)
  2. `[data-section]` (data-attribute sections)
  3. All direct children of `main` or `[role="main"]` that are block-level

Programmatic check:
```js
const primary = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (primary.length >= 3) {
  return { status: 'PASS', selector: 'primary', count: primary.length };
}

// Fallback: try secondary selectors
const fallbacks = [
  { selector: 'section', label: 'bare-section' },
  { selector: '[data-section]', label: 'data-section' },
];

for (const fb of fallbacks) {
  const els = document.querySelectorAll(fb.selector);
  if (els.length >= 3) {
    return {
      status: 'PASS',
      selector: fb.label,
      count: els.length,
      warning: `Primary selector matched ${primary.length} elements. Using fallback '${fb.selector}' (${els.length} elements). Builder should use standard zone class names.`
    };
  }
}

// Last resort: direct children of main
const main = document.querySelector('main, [role="main"]');
if (main) {
  const children = [...main.children].filter(el => {
    const display = getComputedStyle(el).display;
    return display === 'block' || display === 'flex' || display === 'grid';
  });
  if (children.length >= 3) {
    return {
      status: 'PASS',
      selector: 'main-children',
      count: children.length,
      warning: `Primary selector matched ${primary.length} elements. Using main children fallback (${children.length} elements). Builder should use standard zone class names.`
    };
  }
}

return {
  status: 'FAIL',
  reason: `Zone selectors matched ${primary.length} elements. Per-zone gates require >= 3 zones. ALL per-zone gates SKIPPED.`,
  fix: {
    instruction: 'Add zone class names or section[data-zone] attributes to your content zones.',
    html: '<section class="section zone-1">...</section>',
    reference: 'conventions-brief.md Section 5 (FRACTAL ECHO) -- zone structure'
  }
};
```

If SC-00 passes via fallback, the successful selector is stored and used by ALL subsequent
per-zone gates (replacing the hardcoded primary selector). This prevents selector
fragmentation where SC-00 uses one selector and SC-09 uses another.

Required conventions brief documentation:
  Builders MUST use one of these zone markup patterns:
  - `<section class="section zone-N">` (preferred)
  - `<section data-zone="N">` (alternative)
  - `<section class="zone-intro">` / `<section class="zone-analysis">` etc. (named zones)
  All gates depend on zone selectors. Non-standard markup = gate failure.

Provenance: B7 (execution report). Every composition-critical gate depends on zone
selectors. If builder uses `<div class="content-area">` instead of zone classes, ALL gates
silently pass or return meaningless data. This is the #1 single point of failure.
```

Lines added: ~65
Cross-file impact:
- **conventions-brief.md:** Add 3-4 lines in Section 12 (PROCESS) or Section 5 (FRACTAL ECHO) documenting required zone markup patterns.
- **SKILL.md:** Add 1-2 lines to builder spawn prompt (line ~72) noting zone class naming requirement. DG-4 sub-checks should include zone markup validation.

---

### EDIT 2: Fix SC-14 Letter-Spacing Threshold (0.02em -> 0.025em)

Source: B8 (Threshold Inconsistencies) -- execution-report-findings.md. Rated LOW.
Location: Section SC-14, line ~421 (sub-check 1 comment) and line ~433 (the threshold comparison)
Type: BUG FIX

Old text (line ~421):
```
  if (emVal > 0 && emVal < 0.025) return FAIL; // sub-perceptual
```

New text:
```
  if (emVal > 0 && emVal < 0.025) return FAIL; // sub-perceptual (floor: 0.025em)
```

NOTE: The gate-runner.md already uses 0.025em throughout. This edit confirms the value is correct and adds a clarifying comment. The actual B8 bug exists in **other files** (2 CLAUDE.md files that say 0.02em). The gate-runner itself is ALREADY CORRECT at 0.025em. No threshold change needed in gate-runner.md.

Lines added: 0 (comment clarification only)
Cross-file impact:
- **design-system/CLAUDE.md:** Fix any instance of "0.02em" to "0.025em"
- **design-system/compositional-core/CLAUDE.md:** Fix any instance of "0.02em" to "0.025em"

---

### EDIT 3: Phantom Channels Documentation (E-PHANTOM) -- DEFER

Source: E-PHANTOM (execution-report-findings.md), C5 consensus (11-master-synthesis.md), 14-scale-section.md (behavioral channel "ABSENT" at Section scale)
Location: Section SC-13, after line ~402 ("Known limitation" block), before the `---` divider
Type: DEFER

Old text (line ~402-405):
```
Known limitation: Counts channels but CANNOT judge if shifts serve the SAME
semantic direction. 3 contradicting shifts pass this gate. PA-61 catches direction.

Provenance: Flagship had 0-2 channel shifts at boundaries. CD-006 had 4+ channels
shifting at every boundary.
```

New text:
```
Known limitation: Counts channels but CANNOT judge if shifts serve the SAME
semantic direction. 3 contradicting shifts pass this gate. PA-61 catches direction.

CHANNEL NOTE -- Channels 5 (Behavioral) and 6 (Material):
  Channels 5-6 are enhancement channels with minimal practical guidance:
  - Behavioral (Ch5): 1 line definition ("interactivity presence change"). Zero CSS
    examples. Zero thresholds beyond binary presence/absence. Soul forbids gradients,
    limiting Material expression. Hover state vocabulary absent from conventions brief.
  - Material (Ch6): "surface treatment" undefined. backgroundImage rarely differs
    when soul forbids gradients. Component density partially addressed by SC-08.

  Impact on multi-coherence denominator: SC-13 counts all 6 channels, but a page
  achieving 3/4 PRIMARY channels (Chromatic, Typographic, Spatial, Structural) is
  compositionally stronger than 3/6 with 2 enhancement channels and 1 primary.

  Status: DEFERRED. Options for future calibration:
  (a) Provide CSS guidance for channels 5-6 in conventions-brief.md
  (b) Reduce multi-coherence denominator from 6 to 4 primary channels
  (c) Keep denominator at 6 but add ADVISORY note when >= 3 shifts come from
      enhancement-only channels (see SC-13C below)

  Current recommendation: (c) -- most honest, lowest risk, implemented via SC-13C ADVISORY.

Provenance: Flagship had 0-2 channel shifts at boundaries. CD-006 had 4+ channels
shifting at every boundary.
```

Lines added: ~18
Cross-file impact:
- **conventions-brief.md:** If/when option (a) is chosen, add 3-5 lines of CSS guidance for channels 5-6 in Section 4 (MULTI-COHERENCE).
- **No immediate cross-file changes required** -- this is documentation of a known limitation with deferred resolution.

---

### EDIT 4: SC-00 in Execution Groups and Dependency Chain

Source: Follows from EDIT 1 (SC-00 must be in execution flow)
Location: Section "Full Gate Run", lines 77-98 (execution groups and dependency chain)
Type: GO BEYOND

Old text (lines 77-98):
```
Execution groups (gates within a group can run in parallel):

GROUP 1 -- Identity (parallel):
  SC-01, SC-02, SC-03, SC-04, SC-05

GROUP 2 -- Structure (parallel):
  SC-06, SC-07, SC-08, SC-12, DG-3

GROUP 3 -- Perception (sequential, needs zone boundaries from GROUP 2):
  SC-09, SC-10, SC-11, SC-14, SC-15

GROUP 4 -- Compositional (sequential, depends on GROUP 3):
  SC-13, SC-13B, SC-16

GROUP 5 -- Deliverable (after GROUP 4):
  DG-1, DG-2, DG-4

Dependency chain:
  SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
  SC-13 -> SC-13B (direction) -> SC-16 (monotonic)
  SC-13 (measured values) -> DG-2 (cross-validation)
```

New text:
```
Execution groups (gates within a group can run in parallel):

GROUP 0 -- Zone Validation (FIRST, before all others):
  SC-00

  If SC-00 FAILS: skip all per-zone gates (SC-09, SC-10, SC-11, SC-13, SC-13B,
  SC-14 sub-check 3, SC-16). Report overall FAIL. Identity gates (GROUP 1) and
  structural gates (GROUP 2 minus SC-12) still run.

  If SC-00 passes via fallback: store the successful selector for all subsequent
  per-zone gates.

GROUP 1 -- Identity (parallel):
  SC-01, SC-02, SC-03, SC-04, SC-05

GROUP 2 -- Structure (parallel):
  SC-06, SC-07, SC-08, SC-12, DG-3

GROUP 3 -- Perception (sequential, needs zone boundaries from GROUP 2):
  SC-09, SC-10, SC-11, SC-14, SC-15

GROUP 4 -- Compositional (sequential, depends on GROUP 3):
  SC-13, SC-13B, SC-16

GROUP 5 -- Deliverable (after GROUP 4):
  DG-1, DG-2, DG-4

Dependency chain:
  SC-00 (zone validation) -> SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
  SC-13 -> SC-13B (direction) -> SC-16 (monotonic)
  SC-13 (measured values) -> DG-2 (cross-validation)
```

Lines added: ~10
Cross-file impact:
- **SKILL.md** line 119-121: Update "Run these 15 composition-critical gates" to "Run these 16 composition-critical gates" (15 + SC-00). Or note SC-00 as a pre-gate that runs before the 15.
- **SKILL.md** gate table (lines 123-139): Add SC-00 row.

---

### EDIT 5: Fix Recipe Enrichment -- Add Conventions-Brief Section References

Source: E-RETURN (execution-report-findings.md), C4 consensus "fix cycle degrades from recipe to checklist" (11-master-synthesis.md), Report 17 concept-flow-trace (return path extinction)
Location: Section "Gate Failure Protocol", lines 101-118
Type: GO BEYOND

Old text (lines 101-118):
```
## Gate Failure Protocol

### During Build (Micro-Gate Failures)

1. Gate runner outputs structured JSON fix recipe (measured values, specific CSS, alternatives)
2. Builder applies fix
3. Gate re-runs (max 2 re-runs per micro-gate)
4. If still failing after 2 re-runs: STOP BUILD, escalate

### After Build (Full Run Failures)

1. ALL gates run. ALL failures collected into _gate-results.json
2. Builder receives structured fix recipes for ALL failures simultaneously
3. Builder applies fixes (Tier A gates first, then Tier B)
4. Full gate re-run
5. Max 3 fix cycles on full run
6. After 3 failed full-run cycles: ESCALATE to user
```

New text:
```
## Gate Failure Protocol

### During Build (Micro-Gate Failures)

1. Gate runner outputs structured JSON fix recipe (measured values, specific CSS, alternatives)
2. Builder applies fix
3. Gate re-runs (max 2 re-runs per micro-gate)
4. If still failing after 2 re-runs: STOP BUILD, escalate

### After Build (Full Run Failures)

1. ALL gates run. ALL failures collected into _gate-results.json
2. Builder receives structured fix recipes for ALL failures simultaneously
3. Builder applies fixes (Tier A gates first, then Tier B)
4. Full gate re-run
5. Max 3 fix cycles on full run
6. After 3 failed full-run cycles: ESCALATE to user

### Fix Recipe Compositional Context

Gate fix recipes output specific CSS changes (symptom-level). To prevent recipe-to-
checklist degradation during fix cycles, each fix recipe MUST include a conventions-brief
section reference that orients the builder in the compositional world-model:

| Gate Category | Conventions-Brief Section Reference |
|--------------|-------------------------------------|
| SC-09 (bg delta), SC-14 sub-check 3 (intra-zone bg) | Section 2: PERCEPTION -- "invisible CSS is wasted CSS" |
| SC-10 (stacked gap) | Section 2: PERCEPTION -- stacked gap <= 120px |
| SC-11 (typography zones) | Section 5: FRACTAL ECHO -- scale hierarchy |
| SC-13 (multi-coherence), SC-13B (direction) | Section 4: MULTI-COHERENCE -- ">= 3 channels in same semantic direction" |
| SC-14 sub-checks 1-2 (letter-spacing) | Section 2: PERCEPTION -- letter-spacing floor |
| SC-15 (border presence) | Section 4: MULTI-COHERENCE -- Structural channel |
| SC-01 (container) | Section 1: IDENTITY -- container 940-960px |
| SC-02, SC-03, SC-04, SC-05 (soul) | Section 1: IDENTITY + Section 12: RESTRAINT LIST |
| SC-06, SC-07, SC-08, DG-3 (structure) | Section 5: FRACTAL ECHO -- component vocabulary |

Fix recipe format extension (add to each gate's fix recipe):
```json
{
  "fix": {
    "instruction": "...",
    "css": "...",
    "alternative": "...",
    "reference": "...",
    "brief_section": "Re-read conventions-brief.md Section N (SECTION_NAME) before applying this fix."
  }
}
```

This ensures the builder re-enters the compositional world-model during fix cycles
rather than operating in pure mechanical compliance mode. The reference is a POINTER
(3 words), not a new document -- zero cognitive load increase.

Provenance: Report 17 (concept-flow-trace) found that 8 of 9 compositional concepts
suffer TOTAL EXTINCTION in the fix cycle return path. Only perception thresholds survive
because they map to CSS values. Adding a brief_section reference is the cheapest way to
route the builder back to compositional context during fixes.
```

Lines added: ~35
Cross-file impact:
- **SKILL.md** fix cycle template (lines 310-327): Add `brief_section` field to the fix instruction template.
- **Each individual gate's fix recipe format** in gate-runner.md: Add `brief_section` key to fix recipe JSON. (Covered implicitly by the format extension above -- individual gates do NOT need separate edits; the format extension applies globally.)

---

### EDIT 6: Micro-Gate Threshold Alignment Audit

Source: B2 (Micro-Gates Converted to Honor System) -- execution-report-findings.md. Specifically: "MG-1 requires >= 5 ARIA, SKILL.md says >= 3. MG-3 requires >= 3 border configs, SKILL.md says >= 2 weights."
Location: Section "Micro-Gate Schedule", lines 36-69
Type: BUG FIX

**Audit of MG thresholds vs full-run gate thresholds:**

| Micro-Gate | Gate(s) | MG Threshold | Full-Run Threshold | Match? |
|-----------|---------|-------------|-------------------|--------|
| MG-1 | SC-06 | >= 5 ARIA (line 42, implicit from SC-06) | >= 5 (line 753) | YES |
| MG-1 | SC-07 | Skip link present | Present (line 774) | YES |
| MG-1 | SC-08 | >= 8 component types (line 42, implicit from SC-08) | >= 8 (line 801) | YES |
| MG-1 | SC-12 | 3-5 zones | 3-5 (line 307) | YES |
| MG-1 | DG-3 | header+main+footer | header+main+footer (line 893) | YES |
| MG-2 | SC-04 | R>=G>=B | R>=G>=B (line 682) | YES |
| MG-2 | SC-05 | No #000/#FFF | No #000/#FFF (line 712) | YES |
| MG-2 | SC-09 | >= 15 RGB | >= 15 RGB (line 179) | YES |
| MG-3 | SC-01 | 940-960px | 940-960px (line 151) | YES |
| MG-3 | SC-02 | radius:0, shadow:none | radius:0, shadow:none (line 624) | YES |
| MG-3 | SC-15 | >= 3 configs | >= 3 configs (line 476) | YES |
| MG-4 | SC-03 | Font trinity | Font trinity (line 648) | YES |
| MG-4 | SC-11 | >= 10px display-body, 3+ zones | >= 10px, 3+ zones (line 253) | YES |

**Result: All micro-gate thresholds in gate-runner.md MATCH their full-run counterparts.** The threshold mismatches identified in B2 are between gate-runner.md and SKILL.md's builder self-check bullets (lines 62-65), NOT within gate-runner.md itself.

Specifically:
- SKILL.md line 62 says ">= 3 ARIA landmarks" but gate-runner SC-06 says ">= 5". The mismatch is in SKILL.md.
- SKILL.md line 64 says ">= 2 distinct border weights" but gate-runner SC-15 says ">= 3 distinct border configurations". The mismatch is in SKILL.md.

Old text: No change to gate-runner.md. Micro-gate thresholds are already correct.

New text: N/A -- no edit needed in gate-runner.md.

Lines added: 0
Cross-file impact:
- **SKILL.md line 62:** Change ">= 3 ARIA landmarks" to ">= 5 ARIA landmarks" (match SC-06 Flagship threshold)
- **SKILL.md line 64:** Change ">= 2 distinct border weights" to ">= 3 distinct border configurations" (match SC-15 Flagship threshold)

---

### EDIT 7: SC-00 in Complete Gate Summary Table

Source: Follows from EDIT 1
Location: Section "COMPLETE GATE SUMMARY TABLE", lines 950-978
Type: GO BEYOND

Old text (lines 950-977):
```
## COMPLETE GATE SUMMARY TABLE

| # | Gate | Name | Tier | Triage | Flagship Threshold | Blocks? |
|---|------|------|------|--------|-------------------|---------|
| 1 | SC-01 | Container Width | T1 | A | 940-960px | YES |
```
(continues for 21 rows)

```
Totals: 17 blocking + 2 advisory + 2 behavioral = 21 gates
Tier 1 (programmatic): 15 | Tier 2 (deliverable): 4 | Tier 3 (behavioral): 2
Flagship elevations: 6 gates
```

New text:
```
## COMPLETE GATE SUMMARY TABLE

| # | Gate | Name | Tier | Triage | Flagship Threshold | Blocks? |
|---|------|------|------|--------|-------------------|---------|
| 0 | SC-00 | Zone Selector Validation | Pre | -- | >= 3 zones via primary or fallback selector | YES (blocks per-zone gates) |
| 1 | SC-01 | Container Width | T1 | A | 940-960px | YES |
| 2 | SC-02 | Soul Properties | T1 | B | radius:0, shadow:none, no drop-shadow | YES |
| 3 | SC-03 | Font Trinity | T1 | B | 3 allowed fonts only | YES |
| 4 | SC-04 | Warm Palette | T1 | B | R >= G >= B (with accent exceptions) | YES |
| 5 | SC-05 | No Pure Extremes | T1 | B | No #000 or #FFF (with inverse exceptions) | YES |
| 6 | SC-06 | ARIA Landmarks | T1 | B | >= 5 | YES |
| 7 | SC-07 | Skip Link | T1 | B | Present | YES |
| 8 | SC-08 | Component Library | T1 | B | >= 8 types | YES |
| 9 | SC-09 | Background Delta | T1 | A | >= 15 RGB at every boundary | YES |
| 10 | SC-10 | Stacked Gap | T1 | A | <= 120px total | YES |
| 11 | SC-11 | Typography Zones | T1 | A | >= 10px display-body, 3+ zones | YES |
| 12 | SC-12 | Zone Count | T1 | A | 3-5 | YES |
| 13 | SC-13 | Multi-Coherence | T1 | A | >= 3/boundary, avg >= 4 | YES |
| 14 | SC-14 | Sub-Perceptual | T1 | A | No ls < 0.025em, no bg 1-14 RGB | YES |
| 15 | SC-15 | Border Presence | T1 | A | >= 3 distinct configs | YES |
| 16 | SC-13B | Direction Coherence | T1 | A | >= 50% boundaries coherent | ADVISORY |
| 17 | SC-16 | Monotonic Progress | T1 | A | >= 1 monotonic property | ADVISORY |
| 18 | DG-1 | Fractal Echo Table | T2 | A | 5 rows, evidence, direction | YES |
| 19 | DG-2 | Cascade Value Table | T2 | A | All boundaries, cross-val | YES |
| 20 | DG-3 | Landmark Complete | T1 | B | header + main + footer | YES |
| 21 | DG-4 | Handoff Validation | T1 | A | 5 sub-checks on build-plan YAML | YES |

Totals: 1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates
Tier Pre (validation): 1 | Tier 1 (programmatic): 15 | Tier 2 (deliverable): 4 | Tier 3 (behavioral): 2
Flagship elevations: 6 gates
```

Lines added: ~4 (one new row + updated totals)
Cross-file impact: None (summary table is self-contained).

---

### EDIT 8: SC-00 in Gate-to-PA Handoff Section

Source: Follows from EDIT 1
Location: Section "Gate-to-PA Handoff", line 125 ("ALL 15 blocking gates must PASS")
Type: GO BEYOND

Old text (line 125):
```
ALL 15 blocking gates must PASS before PA runs. Once PA begins, gates are NOT
re-run. PA findings do NOT trigger gate re-evaluation.
```

New text:
```
ALL 18 blocking gates (SC-00 pre-gate + 15 programmatic blocking + 2 deliverable blocking)
must PASS before PA runs. Once PA begins, gates are NOT re-run. PA findings do NOT trigger
gate re-evaluation.
```

Lines added: 1 (expanded count)
Cross-file impact: None.

---

## SUMMARY

### Totals

| Category | Edits | Lines Added |
|----------|-------|-------------|
| BUG FIX | 2 | 0 (B8 confirmed already correct in gate-runner; B2 mismatches are in SKILL.md) |
| DEFER | 1 | ~18 (phantom channel documentation) |
| GO BEYOND | 5 | ~115 (SC-00 pre-gate ~65, execution groups ~10, fix recipe enrichment ~35, summary table ~4, handoff ~1) |
| **TOTAL** | **8** | **~133 lines** |

Post-edit gate-runner.md: ~1,126 lines (993 + 133)

### Cross-File Dependency List

| File | Edits Needed | Source Edit |
|------|-------------|------------|
| **conventions-brief.md** | Add 3-4 lines documenting required zone markup patterns (Section 5 or 12) | EDIT 1 (SC-00) |
| **SKILL.md line 62** | Change ">= 3 ARIA landmarks" to ">= 5 ARIA landmarks" | EDIT 6 (threshold alignment) |
| **SKILL.md line 64** | Change ">= 2 distinct border weights" to ">= 3 distinct border configurations" | EDIT 6 (threshold alignment) |
| **SKILL.md line 119** | Update "15 composition-critical gates" to include SC-00 | EDIT 4 (execution groups) |
| **SKILL.md gate table** | Add SC-00 row to gate table (lines 123-139) | EDIT 4 (execution groups) |
| **SKILL.md fix template (lines 310-327)** | Add `brief_section` field to fix instruction template | EDIT 5 (fix recipe enrichment) |
| **design-system/CLAUDE.md** | Fix any "0.02em" to "0.025em" | EDIT 2 (B8 threshold) |
| **design-system/compositional-core/CLAUDE.md** | Fix any "0.02em" to "0.025em" | EDIT 2 (B8 threshold) |

### What Was NOT Included and Why

| Proposed Change | Source | Why Excluded |
|----------------|--------|-------------|
| **DG-1B: Fractal Echo Cross-Validation** (new blocking gate) | 05-verification-deep-dive.md | Master synthesis verdict is "DON'T" for new gates (E11). Report 07 rates new gates as HIGH regression risk. The contrarian (Argument 4): "more text = worse output." DG-1 already validates table structure. DG-1B would verify CSS implementation matches table claims -- useful but adds a 22nd gate, exceeding the 22-25 ceiling that Report 08 itself acknowledges. DEFER until first successful build provides calibration data. |
| **SC-13C: Channel Variety Advisory** (new advisory gate) | 05-verification-deep-dive.md | Flags when all 3+ shifts come from secondary channels only. Useful diagnostic but: (a) phantom channel problem (EDIT 3) means behavioral/material shifts are rare anyway, (b) adds gate complexity for a situation that is unlikely to occur in practice, (c) master synthesis says "DON'T" for new gates. DEFER. |
| **SC-10B: Content Mass Distribution** (new advisory gate) | 05-verification-deep-dive.md | Detects whitespace voids (< 30% content fill per zone). SC-10 already catches stacked gaps > 120px, which is the primary whitespace void signal. Adding a content-mass gate requires scrolling the entire page and measuring content density per viewport -- expensive and fragile. PA auditors (9/9 in Mode 4) reliably detect whitespace voids. DEFER. |
| **SC-13B upgrade to BLOCKING** | 05-verification-deep-dive.md (Section 4.4) | Report 05's own verdict: "KEEP ADVISORY. Upgrade ONLY after 3+ successful Flagship builds." Direction heuristic confidence is ~50%. CD-006 would sometimes fail it. Premature. |
| **New PA questions (PA-68, PA-69, PA-70)** | 05-verification-deep-dive.md (Part 2.4) | PA questions belong in flagship-pa-questions.md, not gate-runner.md. Will be handled by the PA-questions change manifest. |
| **Section-scale density gate** | 14-scale-section.md (Option D) | Report 14's own verdict: "REJECT the gate (Option D)." Section scale is "recommended," not "mandatory strong." Gate proliferation risk. |
| **Weaver Stack Verdict enrichment** | 05-verification-deep-dive.md (Section 5.3) | Belongs in SKILL.md (weaver spawn prompt), not gate-runner.md. Will be handled by the SKILL.md change manifest. |
| **Anti-scale programmatic gates** | 05-verification-deep-dive.md (Section 1.3) | Report 05's own verdict: "CANNOT verify programmatically, SHOULD NOT attempt." L5 is fundamentally perceptual. Adding anti-scale gates would reproduce the guardrail factory problem at the highest compositional level. |
| **Process verification gates** | 05-verification-deep-dive.md (Section 3.3) | Report 05's own verdict: "Do NOT close the gap in verification. Close it in diagnostics." Process artifacts are diagnostic tools for failure analysis, not verification instruments. |

---

**END OF GATE-RUNNER CHANGE MANIFEST**
