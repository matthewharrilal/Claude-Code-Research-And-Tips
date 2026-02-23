# Gate Runner — Programmatic Verification Specification
Date: 2026-02-23
Layer: 6 (GATES)
Status: AUTHORITATIVE — conforms to council-verdict.md rulings

---

## Purpose

This document defines every programmatic gate check that runs AFTER the builder completes its work (Phase 3). Gates are BINARY pass/fail only. They catch mechanical defects (~26% of compositional quality). Gates never judge composition quality — that belongs to PA auditors and the orchestrator.

**Critical council rulings applied:**
- Gate-runner checks BINARY ONLY — no quality judgments
- 34 VALUES items rerouted AWAY from gate-runner (see Appendix A)
- S-09 adjusted: <=150px TOTAL stacked gap (was <=96px per-property)
- CCS is NOT gate-checkable (research construct, methodology unstandardized)
- Perception thresholds are DUAL-ROUTE: builder receives as calibration, gate-runner verifies as binary checks
- 10 GATES->BUILDER items reclassified per council (see Appendix B)

---

## Gate Runner Execution Protocol

### When Gates Run

Gates run in Phase 3, AFTER the builder has completed its work. The builder NEVER sees gate thresholds in pass/fail format — only as calibration in the activation brief.

**Execution order:**
1. Orchestrator serves HTML via HTTP, opens Playwright session
2. Gate runner executes all gates at 1440px viewport width
3. Responsive gates re-run at 768px
4. Results collected as structured JSON
5. FAIL gates produce fix recipes; PASS gates produce diagnostic data for PA context

### Output Format

```json
{
  "gate": "GR-XX",
  "status": "PASS" | "FAIL",
  "measured": { },
  "threshold": { },
  "evidence": "FACT | OBSERVED | CONFOUNDED | THEORETICAL"
}
```

### Verdict Logic

- ANY identity gate FAIL = REBUILD (PA-05 < 2.5 equivalent)
- ANY perception gate FAIL = REFINE (targeted CSS fix)
- 3+ anti-pattern gates FAIL = REBUILD
- All gates PASS = proceed to PA audit

---

## SECTION 1: IDENTITY GATES (Soul Constraint Verification)

These verify the non-negotiable soul constraints. DUAL-ROUTE: builder knows these as world-description, gate-runner verifies as binary checks.

### GR-01: Border Radius Zero
- **Source:** ITEM 22 (extract-d01-d03.md L54), ITEM 059 (extract-d15-d17.md L1284)
- **Description:** Every element must have border-radius: 0
- **Check method:** `document.querySelectorAll('*')` — compute `getComputedStyle(el).borderRadius` for all elements
- **Pass:** Every computed border-radius === "0px"
- **Fail:** Any element has border-radius > 0
- **Evidence:** FACT (soul constraint, N=all builds)

### GR-02: Box Shadow None
- **Source:** ITEM 22 (extract-d01-d03.md L54), ITEM 060 (extract-d15-d17.md L1285)
- **Description:** No element may use box-shadow
- **Check method:** `getComputedStyle(el).boxShadow` for all elements
- **Pass:** Every computed box-shadow === "none"
- **Fail:** Any element has box-shadow !== "none"
- **Evidence:** FACT (soul constraint)

### GR-03: Container Width
- **Source:** ITEM 22 (extract-d01-d03.md L54), ITEM 044 (extract-d21-d25.md L1689), ITEM 157 (extract-d21-d25.md L2003)
- **Description:** Primary content container must be 940-960px wide
- **Check method:** Measure computed width of main content container at 1440px viewport
- **Pass:** 940px <= container width <= 960px
- **Fail:** Container width outside 940-960px range
- **Evidence:** FACT (N=5, 60% historically violated — PROVEN non-negotiable)
- **Note:** ITEM 080 (extract-d15-d17.md L1311) documents that container width varies per page (960px vs 1100px). Gate allows 940-960px; wider containers are a builder creative decision that must be JUSTIFIED.

### GR-04: No Gradients
- **Source:** ITEM 23 (extract-d01-d03.md L55)
- **Description:** No gradient backgrounds anywhere
- **Check method:** Check `backgroundImage` for all elements — reject any containing "gradient"
- **Pass:** Zero elements have gradient in backgroundImage
- **Fail:** Any element uses gradient
- **Evidence:** FACT (soul constraint)

### GR-05: Warm Palette Compliance
- **Source:** ITEM 23 (extract-d01-d03.md L55), ITEM 055-058 (extract-d15-d17.md L1280-1283)
- **Description:** All colors must use the defined palette. Primary: #E83025, Background: #FEF9F5, Text: #1A1A1A, plus 5 accent colors
- **Check method:** Extract all computed color, backgroundColor, borderColor values; validate against known palette + reasonable derivatives
- **Pass:** All colors are palette members or documented derivatives
- **Fail:** Rogue color values outside palette
- **Evidence:** FACT (soul constraint)
- **Note:** Builder has creative authority over zone-specific background tints; they must still fall within warm palette (R>=G>=B)

### GR-06: Font Trinity
- **Source:** ITEM 23 (extract-d01-d03.md L55), ITEM 061 (extract-d15-d17.md L1286)
- **Description:** Only three font families permitted: Instrument Serif (headings), Inter (body), JetBrains Mono (code)
- **Check method:** `document.fonts.ready.then(() => ...)` — extract all computed fontFamily values
- **Pass:** All fonts are Instrument Serif, Inter, or JetBrains Mono (or system fallbacks)
- **Fail:** Any unauthorized font family
- **Evidence:** FACT (soul constraint)
- **Critical:** Must wait for `document.fonts.ready` before checking

### GR-07: No Pure Black / Pure White
- **Source:** Soul constraint (from CLAUDE.md)
- **Description:** No #000000 or #FFFFFF anywhere
- **Check method:** Extract all color/background/border color values, convert to hex
- **Pass:** Zero instances of #000000 or #FFFFFF
- **Fail:** Pure black or pure white detected
- **Evidence:** FACT (soul constraint)

### GR-08: No Decorative Elements
- **Source:** ITEM 020 (extract-d21-d25.md L1618)
- **Description:** Zero purely decorative elements (ornamental dividers, decorative icons, etc.)
- **Check method:** Check for `<hr>` with decorative classes, empty `<div>` used as spacers, icon elements without functional purpose
- **Pass:** No decorative-only elements detected
- **Fail:** Decorative elements found
- **Evidence:** OBSERVED (identity constraint)
- **Note:** DUAL-ROUTE — builder receives as world-description ("Zero decorative elements"), gate-runner checks programmatically

### GR-09: Border Weight Hierarchy
- **Source:** ITEM 045 (extract-d21-d25.md L1690), ITEM 065 (extract-d15-d17.md L1290)
- **Description:** Border weights must follow hierarchy: 4px = primary, 3px = secondary, 1px = tertiary
- **Check method:** Extract all computed borderWidth values; verify 4px borders appear on primary elements (callouts, headers), 3px on secondary, 1px on dividers
- **Pass:** Border weights follow hierarchy pattern
- **Fail:** Non-standard border widths or hierarchy violations
- **Evidence:** FACT (8 reports, SOLID)

### GR-10: Cross-Page DNA Properties
- **Source:** ITEM 054-070 (extract-d15-d17.md L1277-1295), ITEM 071 (extract-d15-d17.md L1298)
- **Description:** ~30 shared DNA properties must match tokens.css values (body line-height, p max-width, header dark bg + red border, callout 4px left border, h3 italic, selection red, focus-visible, skip-link)
- **Check method:** Verify against tokens.css reference values:
  - body: 1rem / 1.7 line-height (ITEM 062, L1287)
  - p: max-width 70ch (ITEM 063, L1288)
  - header: dark bg + 3px red bottom border (ITEM 064, L1289)
  - callout: 4px left border (ITEM 065, L1290)
  - h3: italic (ITEM 066, L1291)
  - ::selection: red background (ITEM 068, L1293)
  - :focus-visible: 3px solid primary (ITEM 069, L1294)
  - skip-link: present, red bg (ITEM 070, L1295)
- **Pass:** All DNA properties match
- **Fail:** Any DNA property deviates from tokens.css
- **Evidence:** FACT (identical across Gas Town + CD-006 independently)
- **Note:** ITEM 092 (extract-d15-d17.md L1327): "No additional cross-page gate needed. The DNA is INHERENT." This gate verifies the inherent DNA was correctly applied, not an ADDITIONAL constraint.

---

## SECTION 2: PERCEPTION GATES (Perceptual Threshold Verification)

These verify that CSS produces PERCEPTIBLE effects. Thresholds are empirically validated (N=12+). DUAL-ROUTE: builder receives as calibration ("Backgrounds must differ by at least 15 RGB points to be perceptible"), gate-runner verifies as binary.

### GR-11: Background Delta >= 15 RGB
- **Source:** ITEM 26 (extract-d01-d03.md L60), ITEM 040 (extract-d21-d25.md L1685), ITEM 159 (extract-d21-d25.md L2005)
- **Description:** Adjacent zone backgrounds must differ by at least 15 RGB points
- **Check method:** For each pair of adjacent zones/sections, compute the maximum channel difference: max(|R1-R2|, |G1-G2|, |B1-B2|)
- **Pass:** All adjacent zone background deltas >= 15 RGB
- **Fail:** Any adjacent zone delta < 15 RGB
- **Evidence:** PROVEN (12 reports, SOLID, N=3 no counterexamples)
- **Note:** ITEM 009 (extract-d18-d20.md L1371) — Flagship builder used 15 RGB EVERYWHERE (threshold gaming). ITEM 047 (extract-d21-d25.md L1697) — 15 RGB = FLOOR, 25-50 RGB = COMPOSITIONAL. Gate checks floor only; calibration range is builder's creative domain.

### GR-12: Letter-Spacing >= 0.025em
- **Source:** ITEM 27 (extract-d01-d03.md L60), ITEM 043 (extract-d21-d25.md L1688), ITEM 159 (extract-d21-d25.md L2005)
- **Description:** Any applied letter-spacing must be at least 0.025em to be perceptible
- **Check method:** For elements with explicit letter-spacing CSS, verify value >= 0.025em
- **Pass:** All explicit letter-spacing values >= 0.025em (or 0 / normal = no letter-spacing applied)
- **Fail:** Any letter-spacing between 0 and 0.025em (sub-perceptual)
- **Evidence:** PROVEN (7 reports, SOLID)
- **Note:** ITEM 125 (extract-d21-d25.md L1929) — P=0.20 micro-typography recurrence risk (letter-spacing <0.5px)

### GR-13: Stacked Gap <= 120px
- **Source:** ITEM 28 (extract-d01-d03.md L61), ITEM 041 (extract-d21-d25.md L1686), ITEM 159 (extract-d21-d25.md L2005)
- **Description:** No single stacked gap (margin-bottom + padding-bottom + margin-top + padding-top at any boundary) may exceed 120px
- **Check method:** At each section/zone boundary, sum: previous-element margin-bottom + previous-element padding-bottom + next-element margin-top + next-element padding-top
- **Pass:** All individual stacked gaps <= 120px
- **Fail:** Any stacked gap > 120px
- **Evidence:** PROVEN (8 reports, SOLID)

### GR-14: Total Stacked Gap <= 150px (S-09 Adjusted)
- **Source:** Council verdict CF-03, ITEM 122 (extract-d21-d25.md L1920)
- **Description:** TOTAL accumulated gap at any section boundary (including ALL contributing properties) must not exceed 150px. This catches the S-09 stacking loophole where individual values pass GR-13 but STACKED values create 210-276px voids.
- **Check method:** At each section boundary, measure TOTAL visual gap in pixels (getBoundingClientRect of last element in zone vs first element in next zone)
- **Pass:** All total boundary gaps <= 150px
- **Fail:** Any total boundary gap > 150px
- **Evidence:** OBSERVED (Flagship had 210-276px voids at section boundaries — all individual values passed per-property check)
- **Council ruling:** S-09 adjusted from <=96px per-property to <=150px total stacked gap. Per-property check (GR-15) is still enforced at <=96px.

### GR-15: Single Margin <= 96px
- **Source:** ITEM 29 (extract-d01-d03.md L61), ITEM 042 (extract-d21-d25.md L1687)
- **Description:** No single margin or padding value may exceed 96px
- **Check method:** For all elements, check computed margin-top, margin-bottom, padding-top, padding-bottom
- **Pass:** All single values <= 96px
- **Fail:** Any single margin or padding > 96px
- **Evidence:** PROVEN (6 reports, SOLID)

### GR-16: All CSS Perceptible
- **Source:** ITEM 30 (extract-d01-d03.md L62)
- **Description:** Meta-gate verifying no sub-perceptual CSS output exists
- **Check method:** Aggregation of GR-11 through GR-15 — if all pass, this passes
- **Pass:** GR-11 through GR-15 all pass
- **Fail:** Any perception gate fails
- **Evidence:** PROVEN (all builds with thresholds had visible CSS; all without had invisible CSS)

---

## SECTION 3: ANTI-PATTERN GATES (Compositional Failure Detection)

These detect the 6 PROGRAMMATICALLY DETECTABLE anti-patterns from the 14 identified in B4. The remaining 8 require PA audit (4) or Compositional Critic (4, EXPERIMENTAL).

**Source:** ITEM 022 (extract-d15-d17.md L1187), ITEM 025 (extract-d15-d17.md L1191), ITEM 064-065 (extract-d06-d08.md L614-615)

### GR-17: AP-01 Density Stacking (No Compression Collapse)
- **Source:** ITEM 003 (extract-d15-d17.md L1136), ITEM 004 (extract-d15-d17.md L1138-1142)
- **Description:** DENSITY FAILURE — mechanisms must not compress each other below perception threshold. Min padding on any element must be >= 12px.
- **Check method:** `min(all computed padding values across all content elements)` >= 12px
- **Pass:** Minimum padding >= 12px (DETECTABLE)
- **Fail:** Any padding < 12px (compression collapse)
- **Evidence:** OBSERVED

### GR-18: AP-09 Ghost Mechanisms (No Sub-Perceptual Values)
- **Source:** ITEM 014 (extract-d15-d17.md L1169), ITEM 015 (extract-d15-d17.md L1171-1172)
- **Description:** PERCEPTION FAILURE — no CSS values below perception thresholds. Catches mechanisms that exist in code but are invisible to the eye.
- **Check method:** Cross-reference with GR-11 (bg delta), GR-12 (letter-spacing), GR-13-15 (spacing). Also check: border-width > 0 where applied, opacity values between 0.01 and 0.1
- **Pass:** Zero sub-perceptual mechanism values
- **Fail:** Any mechanism with imperceptible CSS values
- **Evidence:** OBSERVED (Flagship had imperceptible backgrounds differing by 1-8 RGB points)

### GR-19: AP-10 Threshold Gaming (No Floor-Hugging Values)
- **Source:** ITEM 016 (extract-d15-d17.md L1173-1176), ITEM 017 (extract-d15-d17.md L1173-1176)
- **Description:** PERCEPTION FAILURE — values at EXACT threshold floor (16 RGB delta, 0.026em spacing) indicate gaming rather than intentional design
- **Check method:** Count instances where values are within 10% above threshold floor. If >50% of zone backgrounds are at 15-17 RGB delta AND >50% of letter-spacing values are at 0.025-0.028em, flag as gaming.
- **Pass:** Values show intentional spread (not clustered at floor)
- **Fail:** >50% of measurable values hug the threshold floor
- **Evidence:** OBSERVED (Flagship used 15 RGB EVERYWHERE — ITEM 009 extract-d18-d20.md L1371)
- **Note:** This is an ADVISORY gate — it flags risk but does not block. Builder may have intentional reasons for low-contrast zones.

### GR-20: AP-11 Structural Echo (No Repetitive Patterns)
- **Source:** ITEM 018 (extract-d15-d17.md L1180)
- **Description:** Same visual pattern (identical component styling, identical spacing, identical layout) must not repeat 3+ times consecutively without variation
- **Check method:** For consecutive sections, compare: background color, padding values, border styles, layout structure. Flag if 3+ consecutive sections have identical visual treatment.
- **Pass:** No pattern repeats 3+ times consecutively
- **Fail:** Same visual pattern appears 3+ times in a row
- **Evidence:** OBSERVED

### GR-21: AP-14 Cognitive Overload (Max 4 Channels Per Viewport)
- **Source:** ITEM 021 (extract-d15-d17.md L1183)
- **Description:** No single viewport (scroll position) should have >4 simultaneous visual channels competing for attention
- **Check method:** At each 900px vertical slice (typical viewport), count distinct visual channels: background zones, typography scales, border styles, spacing rhythms, color accents, component types
- **Pass:** All viewports have <= 4 active visual channels
- **Fail:** Any viewport has > 4 competing channels
- **Evidence:** THEORETICAL (anti-pattern catalog)
- **Note:** This gate is difficult to automate precisely. Implementation should focus on countable signals: distinct background colors, distinct font sizes, distinct border patterns within viewport.

### GR-22: AP-02 Color Zone Conflict (Hierarchy Agreement)
- **Source:** ITEM 005 (extract-d15-d17.md L1144-1148)
- **Description:** Color hierarchy must not DISAGREE between zones — if Zone 1 uses primary red for emphasis, Zone 3 should not use it for background
- **Check method:** Map usage of primary color (#E83025) and accent colors across zones. Verify consistent semantic meaning (primary = emphasis, not decoration).
- **Pass:** Color usage is semantically consistent across zones
- **Fail:** Same color serves conflicting semantic roles in different zones
- **Evidence:** OBSERVED

---

## SECTION 4: INPUT PRECONDITION GATES (Pre-Build Verification)

These run BEFORE the builder starts (Phase 0-1). They verify the pipeline is correctly configured.

### GR-23: Precondition — Builder Model = Opus
- **Source:** ITEM 128 (extract-d01-d03.md L288-289), ITEM 129 (extract-d01-d03.md L290-291)
- **Description:** Builder agent must be Opus model (STRONG RECOMMENDATION per council)
- **Check method:** Verify model ID of builder agent
- **Pass:** Model is claude-opus-*
- **Fail:** Model is not Opus
- **Evidence:** OBSERVED/CONFOUNDED (Opus correlates with better output but not isolated — council ruling)
- **Note:** Council downgraded from "non-negotiable" to "STRONG RECOMMENDATION pending experiment #19." FAIL produces WARNING, not BLOCK.

### GR-24: Precondition — Content Has Heterogeneity
- **Source:** ITEM 131 (extract-d01-d03.md L288-289)
- **Description:** Content source must have structural heterogeneity (multiple section types) and metaphor viability
- **Check method:** Phase 0 Content Analyst output must include heterogeneity assessment >= "moderate" and metaphor viability >= "viable"
- **Pass:** Content map confirms heterogeneity + metaphor viability
- **Fail:** Content is homogeneous or metaphor-hostile
- **Evidence:** CONFOUNDED (maps to Content Affordance factor in master equation)

### GR-25: Precondition — Suppressor Count
- **Source:** ITEM 134 (extract-d01-d03.md L288-290), ITEM 135 (extract-d01-d03.md L291-292)
- **Description:** Activation brief must contain zero known quality suppressors
- **Check method:** Scan activation brief for known suppressor patterns: "sample 2-4" (S-01), judgment language (S-03), "verify/fail if/must be" compliance voice (S-11), diagnostic language
- **Pass:** Zero suppressor patterns detected in brief
- **Fail:** Suppressor pattern found
- **Evidence:** OBSERVED (20 suppressors identified, ALL correlate with quality degradation)

### GR-26: Precondition — Brief Size Cap
- **Source:** ITEM 142 (extract-d01-d03.md L317), ITEM 046 (extract-d06-d08.md L584), ITEM 052 (extract-d06-d08.md L596)
- **Description:** Activation brief must be under 200 lines (threshold for mode collapse). Constraint layer specifically capped at 73 lines.
- **Check method:** Count lines in activation brief; count lines in constraint layer
- **Pass:** Total brief < 200 lines AND constraint layer <= 73 lines
- **Fail:** Brief exceeds 200 lines OR constraint layer exceeds 73 lines
- **Evidence:** OBSERVED (Middle success at 100 lines; Flagship failure at 530+ lines)

### GR-27: Precondition — Builder Does Not Receive Gates
- **Source:** ITEM 55 (extract-d01-d03.md L112), ITEM 57 (extract-d01-d03.md L114), ITEM 021-027 (extract-d04-d05.md L419-421)
- **Description:** Builder agent must NOT receive: gate thresholds, research archive, fix instructions, 55 prohibitions (beyond soul), count-gates (">=3 channels"), process metadata
- **Check method:** Scan builder's input for gate-format language ("FAIL if", ">= N channels", "pass/fail threshold")
- **Pass:** Zero gate-format language in builder input
- **Fail:** Gate threshold or count-gate detected in builder input
- **Evidence:** OBSERVED (gate visibility caused threshold gaming in Flagship)
- **Note:** ITEM 050 (extract-d15-d17.md L1259) — REFINE agent also never sees gate scores

### GR-28: Precondition — Recipe Format (Not Checklist)
- **Source:** ITEM 138 (extract-d01-d03.md L313), ITEM 137 (extract-d01-d03.md L308)
- **Description:** Builder input must be in recipe format, not checklist. Builder must enter COMPOSING mode.
- **Check method:** Scan builder brief for: sequenced steps with verbs ("Read/Select/Deploy/Assess"), world-description voice ("This world IS"), dispositional instructions (D-01 through D-08). Flag if: "Verify/Fail if/Must be" compliance voice detected.
- **Pass:** Recipe format indicators present; zero compliance voice
- **Fail:** Checklist format or compliance voice detected
- **Evidence:** OBSERVED (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)

---

## SECTION 5: REVISION QUALITY GATES (Post-PA Verdict)

These run after PA audit returns a verdict, determining what happens next.

### GR-29: Ship Threshold
- **Source:** ITEM 77 (extract-d01-d03.md L201-204)
- **Description:** Page is shippable if PA-05 >= 3.5 AND zero soul violations
- **Check method:** Read PA weaver verdict; check PA-05 score and soul violation count
- **Pass:** PA-05 >= 3.5 AND soul violations = 0
- **Fail:** PA-05 < 3.5 OR soul violations > 0
- **Evidence:** THEORETICAL (target threshold, not yet achieved by pipeline)

### GR-30: Rebuild Threshold
- **Source:** ITEM 043 (extract-d15-d17.md L1251), ITEM 079 (extract-d01-d03.md L212-215)
- **Description:** If PA-05 < 2.5, page must be REBUILT (not refined). Fresh Opus builder in COMPOSING mode.
- **Check method:** Read PA weaver verdict PA-05 score
- **Pass:** PA-05 >= 2.5 (proceed to refine or ship)
- **Fail:** PA-05 < 2.5 (REBUILD required)
- **Evidence:** OBSERVED (revision below 2.5 degrades composition — ITEM 051 extract-d15-d17.md L1261-1262: "You cannot fix your way to Flagship")

### GR-31: Refine Threshold
- **Source:** ITEM 047 (extract-d15-d17.md L1256), ITEM 078 (extract-d01-d03.md L206-210)
- **Description:** PA-05 between 2.5 and 3.5 triggers REFINE — DIFFERENT Opus agent, reads conviction + PA artistic impressions, never sees gate scores.
- **Check method:** Read PA weaver verdict PA-05 score
- **Pass:** 2.5 <= PA-05 < 3.5 (REFINE)
- **Fail:** Outside refine range (either REBUILD or SHIP)
- **Evidence:** OBSERVED

### GR-32: Refine Agent Isolation
- **Source:** ITEM 050 (extract-d15-d17.md L1259)
- **Description:** REFINE agent must never see gate scores or threshold numbers
- **Check method:** Verify refine agent's input contains no numeric thresholds, no gate IDs, no pass/fail language
- **Pass:** Refine agent input is clean of gate data
- **Fail:** Gate data leaked to refine agent
- **Evidence:** OBSERVED (gate visibility causes threshold gaming)

---

## SECTION 6: MODE DETECTION GATES (Applied vs Composed Diagnosis)

These are DIAGNOSTIC gates — they do not block builds but provide signal about the builder's operating mode. Per council ruling on Pattern 1 (GATES->BUILDER), mode determinants are reclassified but some contain binary-extractable checks.

### GR-33: CSS Custom Property Naming (Mode Indicator)
- **Source:** ITEM 057 (extract-d18-d20.md L1502), ITEM 060 (extract-d18-d20.md L1512)
- **Description:** DIAGNOSTIC — custom property naming reveals builder mode. Position-based (--bg-z1) = Applied; Concept-based (--dispatch-open) = Composed.
- **Check method:** Extract all CSS custom properties from `<style>` blocks. Classify naming: position-based (z1, z2, section-1, etc.) vs concept-based (semantic names derived from content)
- **Result:** ADVISORY (reports mode indicator, does not block)
- **Evidence:** OBSERVED (ITEM 073 extract-d18-d20.md L1547 — distinction is REAL, operationally definable)
- **Note:** Council reclassified ITEM 057 from GATES to vocabulary exemplar. Gate-runner REPORTS but does not JUDGE.

### GR-34: Component Zone-Modulation (Mode Indicator)
- **Source:** ITEM 075 (extract-d18-d20.md L1551)
- **Description:** DIAGNOSTIC — whether components adapt to zone context. Applied: callouts styled identically. Composed: callouts adapt (different padding/border per zone).
- **Check method:** Compare computed styles of same component type across different zones. Measure variance in padding, border-width, font-size.
- **Result:** ADVISORY (reports modulation level)
- **Evidence:** OBSERVED (ITEM 064-068 extract-d18-d20.md L1520-1526 — Gas Town callouts identical vs CD-006 callouts zone-adapted)

### GR-35: Layout Choice Driver (Mode Indicator)
- **Source:** ITEM 076 (extract-d18-d20.md L1552)
- **Description:** DIAGNOSTIC — whether layout choices are driven by content-type (Applied) or metaphor (Composed)
- **Check method:** NOT AUTOMATABLE — requires PA auditor assessment
- **Result:** ADVISORY (flagged for PA attention)
- **Evidence:** OBSERVED
- **Note:** Council reclassified ITEM 076 to PA (L7). Gate-runner only flags for PA, does not assess.

---

## SECTION 7: EXPERIMENT STAGE GATES (Pipeline Validation)

These are meta-gates for the experiment protocol — they don't run on individual builds but on experiment results.

### GR-36: Stage 0 Smoke Test
- **Source:** ITEM 006 (extract-d09-d11.md L722)
- **Description:** Pipeline v3 on Gas Town content: PA-05 >= 2.0?
- **Check method:** PA weaver verdict from smoke test
- **Pass:** PA-05 >= 2.0
- **Fail:** PA-05 < 2.0 (STOP & DEBUG — brief broken)
- **Evidence:** THEORETICAL (experiment gate)

### GR-37: Stage 1 Q20 Shortcut
- **Source:** ITEM 012 (extract-d09-d11.md L740)
- **Description:** Old Flagship prompt + 25-line threshold appendix: delta PA-05 >= +0.5?
- **Check method:** Compare PA-05 before/after threshold addition
- **Pass:** Delta >= +0.5
- **Fail:** Delta < +0.5
- **Evidence:** THEORETICAL

### GR-38: Stage 2 Head-to-Head
- **Source:** ITEM 019 (extract-d09-d11.md L758-759)
- **Description:** v3 > old pipeline on BOTH content types (Gas Town + RESEARCH-SYNTHESIS)?
- **Check method:** Blind PA comparison on both content types
- **Pass:** v3 wins on both
- **Fail:** v3 loses on either
- **Evidence:** THEORETICAL

### GR-39: Stage 4 Flagship Existence
- **Source:** ITEM 030 (extract-d09-d11.md L789-790)
- **Description:** PA-05 >= 3.5 AND Tier 5 >= 6/8?
- **Check method:** PA weaver verdict from maximum-investment build
- **Pass:** Both thresholds met
- **Fail:** Either threshold missed
- **Evidence:** THEORETICAL

---

## SECTION 8: STRUCTURAL / POLICY GATES (Pipeline Architecture)

These verify pipeline architecture decisions are correctly implemented.

### GR-40: Single-Pass Default
- **Source:** Council verdict Contradiction B, ITEM 098 (extract-d01-d03.md L243)
- **Description:** Pipeline operates in single-pass mode by default. 3-pass architecture is EXPERIMENTAL (blocked until experiment #21 validates).
- **Check method:** Verify pipeline executed single-pass unless explicit 3-pass flag set AND experiment #21 passed
- **Pass:** Single-pass execution OR 3-pass with experiment #21 validation
- **Fail:** 3-pass execution without experiment #21 validation
- **Evidence:** OBSERVED (single-pass: N=1 at 4/4, N=1 at 3.5; 3-pass: N=0)

### GR-41: Rebuild Not Fix
- **Source:** ITEM 068-069 (extract-d06-d08.md L621-623), ITEM 110 (extract-d01-d03.md L253)
- **Description:** Failed builds must be REBUILT with fresh builder in COMPOSING mode, not FIXED with same builder in REPAIR mode
- **Check method:** Verify that post-PA-failure rebuilds use a new builder instance (different agent ID) and receive generative language (not diagnostic)
- **Pass:** Fresh builder instance + generative language
- **Fail:** Same builder reused OR diagnostic language in rebuild prompt
- **Evidence:** OBSERVED (fix cycles degrade composition — ITEM 028 extract-d15-d17.md L1199)

### GR-42: Gates Hidden From Builder
- **Source:** ITEM 054 (extract-d06-d08.md L597), ITEM 119-124 (extract-d01-d03.md L261-263)
- **Description:** Builder must not see gate specifications, thresholds, or pass/fail results
- **Check method:** Cross-reference with GR-27 (precondition check)
- **Pass:** Zero gate data in builder context
- **Fail:** Gate data found in builder context
- **Evidence:** OBSERVED (builder optimizes for gates when visible — old pipeline failure mode)
- **Note:** ITEM 122 (extract-d01-d03.md L262) — gates in orchestrator ONLY (new pipeline)

---

## GATE SUMMARY TABLE

| Gate ID | Category | Description | Threshold | Evidence | Phase |
|---------|----------|-------------|-----------|----------|-------|
| GR-01 | Identity | border-radius: 0 | All = 0px | FACT | Post-build |
| GR-02 | Identity | box-shadow: none | All = none | FACT | Post-build |
| GR-03 | Identity | Container 940-960px | 940-960px | FACT | Post-build |
| GR-04 | Identity | No gradients | Zero gradients | FACT | Post-build |
| GR-05 | Identity | Warm palette | All palette | FACT | Post-build |
| GR-06 | Identity | Font trinity | 3 fonts only | FACT | Post-build |
| GR-07 | Identity | No pure B/W | No #000/#FFF | FACT | Post-build |
| GR-08 | Identity | No decorative elements | Zero decorative | OBSERVED | Post-build |
| GR-09 | Identity | Border weight hierarchy | 4/3/1px | FACT | Post-build |
| GR-10 | Identity | Cross-page DNA | Match tokens.css | FACT | Post-build |
| GR-11 | Perception | Bg delta >= 15 RGB | >= 15 | PROVEN | Post-build |
| GR-12 | Perception | Letter-spacing >= 0.025em | >= 0.025em | PROVEN | Post-build |
| GR-13 | Perception | Stacked gap <= 120px | <= 120px | PROVEN | Post-build |
| GR-14 | Perception | Total stacked gap <= 150px | <= 150px | OBSERVED | Post-build |
| GR-15 | Perception | Single margin <= 96px | <= 96px | PROVEN | Post-build |
| GR-16 | Perception | All CSS perceptible | GR-11-15 pass | PROVEN | Post-build |
| GR-17 | Anti-pattern | AP-01 Density stacking | min padding >= 12px | OBSERVED | Post-build |
| GR-18 | Anti-pattern | AP-09 Ghost mechanisms | Zero sub-perceptual | OBSERVED | Post-build |
| GR-19 | Anti-pattern | AP-10 Threshold gaming | <50% at floor | OBSERVED | Post-build |
| GR-20 | Anti-pattern | AP-11 Structural echo | <3 consecutive | OBSERVED | Post-build |
| GR-21 | Anti-pattern | AP-14 Cognitive overload | <=4 channels | THEORETICAL | Post-build |
| GR-22 | Anti-pattern | AP-02 Color zone conflict | Consistent roles | OBSERVED | Post-build |
| GR-23 | Precondition | Builder = Opus | Opus model | CONFOUNDED | Pre-build |
| GR-24 | Precondition | Content heterogeneity | >= moderate | CONFOUNDED | Pre-build |
| GR-25 | Precondition | Suppressor count = 0 | Zero patterns | OBSERVED | Pre-build |
| GR-26 | Precondition | Brief size cap | <200 lines, <=73 constraint | OBSERVED | Pre-build |
| GR-27 | Precondition | Builder gate-free | Zero gate language | OBSERVED | Pre-build |
| GR-28 | Precondition | Recipe format | Recipe indicators | OBSERVED | Pre-build |
| GR-29 | Verdict | Ship threshold | PA-05>=3.5, 0 soul | THEORETICAL | Post-PA |
| GR-30 | Verdict | Rebuild threshold | PA-05<2.5 | OBSERVED | Post-PA |
| GR-31 | Verdict | Refine threshold | 2.5<=PA-05<3.5 | OBSERVED | Post-PA |
| GR-32 | Verdict | Refine agent isolation | Zero gate data | OBSERVED | Post-PA |
| GR-33 | Mode (ADVISORY) | CSS naming mode | Reports only | OBSERVED | Post-build |
| GR-34 | Mode (ADVISORY) | Component modulation | Reports only | OBSERVED | Post-build |
| GR-35 | Mode (ADVISORY) | Layout driver | Flags for PA | OBSERVED | Post-build |
| GR-36 | Experiment | Stage 0 smoke test | PA-05>=2.0 | THEORETICAL | Experiment |
| GR-37 | Experiment | Stage 1 Q20 | Delta>=+0.5 | THEORETICAL | Experiment |
| GR-38 | Experiment | Stage 2 H2H | v3 wins both | THEORETICAL | Experiment |
| GR-39 | Experiment | Stage 4 Flagship | PA-05>=3.5 + T5>=6/8 | THEORETICAL | Experiment |
| GR-40 | Policy | Single-pass default | No unauthorized 3-pass | OBSERVED | Pre-build |
| GR-41 | Policy | Rebuild not fix | Fresh builder | OBSERVED | Post-PA |
| GR-42 | Policy | Gates hidden | Zero gate data | OBSERVED | Pre-build |

**Total gates: 42**
- Identity: 10 (GR-01 through GR-10)
- Perception: 6 (GR-11 through GR-16)
- Anti-pattern: 6 (GR-17 through GR-22)
- Precondition: 6 (GR-23 through GR-28)
- Verdict: 4 (GR-29 through GR-32)
- Mode (Advisory): 3 (GR-33 through GR-35)
- Experiment: 4 (GR-36 through GR-39)
- Policy: 3 (GR-40 through GR-42)

---

## APPENDIX A: NOT GATE-CHECKED — 34 VALUES Items Rerouted

Per council verdict Pattern 5: "BOTH ADVOCATES AGREE. REAL contradiction for the majority." Gate-runner checks BINARY constraints only. These 34 items were originally classified as VALUES -> GATE-RUNNER and have been rerouted to ORCHESTRATOR, PA-AUDITOR, or DOCUMENTATION.

### Category A: REROUTED to ORCHESTRATOR (17 items)
Planning tools, historical data points, or predictions. Inform pipeline design, not runtime verification.

| # | Item ID | Source | VA Line | Text | New Agent |
|---|---------|--------|---------|------|-----------|
| 1 | ITEM 31 | extract-d04-d05.md | L437 | SUPPRESSOR REMOVAL CURVE | ORCHESTRATOR |
| 2 | ITEM 32 | extract-d04-d05.md | L443 | 4.0 FLAGSHIP TARGET | ORCHESTRATOR |
| 3 | ITEM 34 | extract-d04-d05.md | L447-448 | Gas Town PA-05 3.5 (old pipeline, Opus, 610 lines) | ORCHESTRATOR |
| 4 | ITEM 35 | extract-d04-d05.md | L451-452 | PA-05 3.0: Suppressors removed + soul + thresholds only | ORCHESTRATOR |
| 5 | ITEM 36 | extract-d04-d05.md | L455-456 | PA-05 2.5: Middle (old pipeline, recipe format, 100 lines) | ORCHESTRATOR |
| 6 | ITEM 37 | extract-d04-d05.md | L459-460 | PA-05 2.0: Current spec baseline (20 suppressors active) | ORCHESTRATOR |
| 7 | ITEM 38 | extract-d04-d05.md | L462-463 | PA-05 1.5: Flagship experiment (all 14 original suppressors) | ORCHESTRATOR |
| 8 | ITEM 39 | extract-d04-d05.md | L465-466 | Suppressors remaining: 20 16 12 8 4 0 | ORCHESTRATOR |
| 9 | ITEM 43 | extract-d04-d05.md | L473 | S-01 removal should be prioritized (highest individual impact) | ORCHESTRATOR |
| 10 | ITEM 44 | extract-d04-d05.md | L475 | After S-01, next priority: S-08, S-03, S-09, S-13 (Inflection 2) | ORCHESTRATOR |
| 11 | ITEM 45 | extract-d04-d05.md | L470-472 | Total predicted gain: +1.3 to +2.0 PA-05 points | ORCHESTRATOR |
| 12 | ITEM 46 | extract-d04-d05.md | L447-448 | Gas Town PA-05 3.5 used Opus builder + 610-line prompt | ORCHESTRATOR |
| 13 | ITEM 47 | extract-d04-d05.md | L462-463 | 1.0-point gap between Flagship(1.5) and Middle(2.5) | ORCHESTRATOR |
| 14 | ITEM 75 | extract-d06-d08.md | L643-644 | Gas Town: 10-Dimension Flagship Gap | ORCHESTRATOR |
| 15 | ITEM 039 | extract-d21-d25.md | L1675-1676 | 347 claims, 83.3% consistent | DOCUMENTATION |
| 16 | ITEM 036 | extract-d15-d17.md | L1228 | Flagship target: PA-05 3.5-4.0/4 | ORCHESTRATOR |
| 17 | ITEM 033 | extract-d15-d17.md | L1225 | Start PA-05 1.5/4 baseline | DOCUMENTATION |

### Category B: REROUTED to PA-AUDITOR (12 items)
Quality assessment framework. PA auditor uses them; gate-runner does not.

| # | Item ID | Source | VA Line | Text | New Agent |
|---|---------|--------|---------|------|-----------|
| 1 | ITEM 22 | extract-d18-d20.md | L1406 | PA-05 measures: PERCEIVED design quality | PA-AUDITOR |
| 2 | ITEM 23 | extract-d18-d20.md | L1408 | Does it look DESIGNED? | PA-AUDITOR |
| 3 | ITEM 27 | extract-d18-d20.md | L1412 | 1-4 scale FLAT/ASSEMBLED/COMPOSED/DESIGNED | PA-AUDITOR |
| 4 | ITEM 28 | extract-d18-d20.md | L1415 | CCS measures: MECHANISM INTERDEPENDENCE | PA-AUDITOR |
| 5 | ITEM 29 | extract-d18-d20.md | L1417 | Do mechanisms INTERACT or just COEXIST? | PA-AUDITOR |
| 6 | ITEM 30 | extract-d18-d20.md | L1418-1419 | Removal test: remove mechanism, quality drops? | PA-AUDITOR |
| 7 | ITEM 31 | extract-d18-d20.md | L1420 | CCS 0.00-1.00 scale | PA-AUDITOR |
| 8 | ITEM 32 | extract-d18-d20.md | L1426-1429 | MIDDLE: PA-05=4/4, CCS~0.10-0.15 | PA-AUDITOR |
| 9 | ITEM 33 | extract-d18-d20.md | L1431-1434 | GAS TOWN: PA-05=3.5/4, CCS~0.45-0.55 | PA-AUDITOR |
| 10 | ITEM 34 | extract-d18-d20.md | L1436-1439 | CD-006: PA-05=3.5/4, CCS~0.40 | PA-AUDITOR |
| 11 | ITEM 35 | extract-d18-d20.md | L1441-1443 | FLAGSHIP (failed): PA-05=1.5/4, CCS=N/A | PA-AUDITOR |
| 12 | ITEM 43-45 | extract-d18-d20.md | L1463-1473 | Register 1/2/3 definitions | PA-AUDITOR |

### Category C: REROUTED to DOCUMENTATION (5 items)
Historical facts and research data. Not operational.

| # | Item ID | Source | VA Line | Text | New Agent |
|---|---------|--------|---------|------|-----------|
| 1 | ITEM 031 | extract-d15-d17.md | L1219 | CCS > 0.35 = generative mode indicator | DOCUMENTATION (CCS not automatable) |
| 2 | ITEM 034 | extract-d15-d17.md | L1226 | After remediation PA-05 2.5/4 (+1.0) | DOCUMENTATION |
| 3 | ITEM 035 | extract-d15-d17.md | L1227 | After fixes ~3.0-3.2/4 (projected) | DOCUMENTATION |
| 4 | ITEM 033 (D15) | extract-d15-d17.md | L1225 | Start PA-05 1.5/4 | DOCUMENTATION |
| 5 | ITEM 055-056 | extract-d18-d20.md | L1498-1499 | APPLIED/COMPOSED removal test descriptions | DOCUMENTATION |

**Council note on CCS:** "CCS measurement varies by +/- 0.15 depending on methodology (5 contradictions in CCS values alone). CCS thresholds CANNOT be gate-checked until methodology is standardized. CCS is a RESEARCH CONSTRUCT, not an operational metric."

---

## APPENDIX B: RECLASSIFIED GATES ITEMS (Council Verdicts)

These items were originally classified as Layer 6 GATES but reclassified by the council.

### Pattern 1: GATES -> BUILDER (10 items reclassified)

Per council Pattern 1 ruling: "ACTIONABILITY WINS on the core principle. The 'builder sees no thresholds' rule is wrong."

| # | Item ID | Source | VA Line | Original | Reclassified To | Reason |
|---|---------|--------|---------|----------|-----------------|--------|
| 1 | ITEM 120 | extract-d01-d03.md | L261 | GATES/BUILDER | ORCHESTRATION | Routing policy |
| 2 | ITEM 124 | extract-d01-d03.md | L263 | GATES/BUILDER | DISPOSITION | Builder-facing disposition |
| 3 | ITEM 137 | extract-d01-d03.md | L308 | GATES/BUILDER | DISPOSITION | Builder-facing mode instruction |
| 4 | ITEM 138 | extract-d01-d03.md | L313 | GATES/BUILDER | ORCHESTRATION | Format specification |
| 5 | ITEM 057 | extract-d18-d20.md | L1502 | GATES/BUILDER | VALUES | CSS vocabulary exemplar |
| 6 | ITEM 061 | extract-d18-d20.md | L1512 | GATES/BUILDER | VALUES | CSS vocabulary exemplar |
| 7 | ITEM 066 | extract-d18-d20.md | L1524 | GATES/BUILDER | VALUES | Value table entry |
| 8 | ITEM 067 | extract-d18-d20.md | L1525 | GATES/BUILDER | VALUES | Value table entry |
| 9 | ITEM 068 | extract-d18-d20.md | L1526 | GATES/BUILDER | VALUES | Value table entry |
| 10 | ITEM 078 | extract-d18-d20.md | L1554 | GATES/BUILDER | ORCHESTRATION | Mode selection logic |

### Pattern 4: ROUTING -> GATE-RUNNER (2 items reclassified)

Per council Pattern 4 ruling: survival function is a curation function for prompt assembly, not a runtime gate.

| # | Item ID | Source | VA Line | Original | Reclassified To | Reason |
|---|---------|--------|---------|----------|-----------------|--------|
| 1 | ITEM 005 | extract-d18-d20.md | L1346-1357 | ROUTING/GATE-RUNNER | GATES/ORCHESTRATOR | Runs during prompt assembly |
| 2 | ITEM 007 | extract-d18-d20.md | L1356-1357 | ROUTING/GATE-RUNNER | GATES/ORCHESTRATOR | Survival function threshold |

---

## APPENDIX C: ITEMS THAT REMAIN GATE-ADJACENT BUT ARE NOT GATES

These items reference gates or thresholds but are properly classified elsewhere. Included for completeness.

### Anti-Pattern Items Routed to PA (Not Gate-Runner)

Per ITEM 023 (extract-d15-d17.md L1188): "4 require PERCEPTUAL AUDIT (PA-05 questions)"

| Item ID | Source | VA Line | Anti-Pattern | Destination |
|---------|--------|---------|-------------|-------------|
| ITEM 011 | extract-d15-d17.md | L1161-1162 | AP-06 Channel Isolation | PA-AUDITOR |
| ITEM 012 | extract-d15-d17.md | L1163-1164 | AP-07 Metaphor Bleed | PA-AUDITOR |
| ITEM 013 | extract-d15-d17.md | L1165-1166 | AP-08 Component Orphan | PA-AUDITOR |
| ITEM 019 | extract-d15-d17.md | L1181 | AP-12 Restraint Erosion | PA-AUDITOR |
| ITEM 020 | extract-d15-d17.md | L1182 | AP-13 Bookend Asymmetry | PA-AUDITOR |

Per ITEM 024 (extract-d15-d17.md L1189): "4 can only be caught by COMPOSITIONAL CRITIC"
(Compositional Critic is EXPERIMENTAL per council CF-02 ruling — these remain unaddressed in default pipeline)

### Perception Items with VALUES Secondary Layer

These items define calibration RANGES (not binary thresholds) and route to VALUES/builder, not gate-runner.

| Item ID | Source | VA Line | Text | Destination |
|---------|--------|---------|------|-------------|
| ITEM 047 | extract-d21-d25.md | L1697 | Bg delta: 15=FLOOR, 25-50=COMPOSITIONAL | VALUES (builder calibration) |
| ITEM 048 | extract-d21-d25.md | L1698 | Letter-spacing: 0.025em=FLOOR, 0.03-0.05=COMP | VALUES (builder calibration) |
| ITEM 049 | extract-d21-d25.md | L1699 | Stacked gap: 120px=CEILING, 60-90px=COMP | VALUES (builder calibration) |
| ITEM 050 | extract-d21-d25.md | L1700 | Mechanisms: 8=FLOOR, 14-16=COMPOSITIONAL | VALUES (builder calibration) |
| ITEM 051 | extract-d21-d25.md | L1701 | CSS lines: 350=FLOOR, 800-1200=TARGET | VALUES (builder calibration) |
| ITEM 052 | extract-d21-d25.md | L1702 | CCS: 0.15=FLOOR, 0.55+=FLAGSHIP TARGET | VALUES (NOT gate-checkable) |

### Gas Town Dimension Scores (Diagnostic, Not Gates)

These are dimension-specific scores from Gas Town analysis — used for pipeline planning, not runtime verification.

| Item ID | Source | VA Line | Text | Destination |
|---------|--------|---------|------|-------------|
| ITEM 76 | extract-d06-d08.md | L649-650 | Pervading Metaphor: 2.5/5 | ORCHESTRATOR |
| ITEM 77 | extract-d06-d08.md | L652-653 | Multi-coherence: 1.5/5 | ORCHESTRATOR |
| ITEM 78 | extract-d06-d08.md | L655-656 | Compositional Intelligence: 2.0/5 | ORCHESTRATOR |
| ITEM 79 | extract-d06-d08.md | L658-659 | Material Authenticity: 1.5/5 | BUILDER (prompt enrichment) |
| ITEM 80 | extract-d06-d08.md | L661-662 | Detail Density: 2.0/5 | BUILDER (prompt enrichment) |
| ITEM 81 | extract-d06-d08.md | L664-665 | Typographic Craft: 2.0/5 | BUILDER (prompt enrichment) |
| ITEM 82 | extract-d06-d08.md | L667-668 | Scale Hierarchy CSS: 3.0/5 | ORCHESTRATOR |
| ITEM 83 | extract-d06-d08.md | L670-671 | Channel Shifts CSS: 3.0/5 | ORCHESTRATOR |
| ITEM 84 | extract-d06-d08.md | L673-674 | Emotional Arc CSS: 3.5/5 | ORCHESTRATOR |
| ITEM 85 | extract-d06-d08.md | L676-677 | Spatial Confidence CSS: 3.5/5 | ORCHESTRATOR |

### Failure Probability Estimates

| Item ID | Source | VA Line | Text | Destination |
|---------|--------|---------|------|-------------|
| ITEM 121 | extract-d21-d25.md | L1917 | P=0.40 Container width violation | ORCHESTRATOR (risk assessment) |
| ITEM 122 | extract-d21-d25.md | L1920 | P=0.35 Whitespace voids | ORCHESTRATOR (risk assessment) |
| ITEM 125 | extract-d21-d25.md | L1929 | P=0.20 Micro-typography recurrence | ORCHESTRATOR (risk assessment) |

### Recommendations About Gates

| Item ID | Source | VA Line | Text | Destination |
|---------|--------|---------|------|-------------|
| ITEM 129 | extract-d21-d25.md | L1942 | REC-03 Keep programmatic gates for binary constraints | ORCHESTRATOR (policy) |
| ITEM 130 | extract-d21-d25.md | L1943 | REC-04 Phase suppressor removal (keep S-09, letter-spacing) | ORCHESTRATOR (policy) |

---

## APPENDIX D: COMPLETE LAYER 6 ITEM TRACEABILITY

Every item classified as Layer 6 GATES in classify-by-layer.md, with its final disposition in this artifact.

| # | Source | Item ID | VA Line | Gate ID | Status |
|---|--------|---------|---------|---------|--------|
| 1 | extract-d01-d03.md | ITEM 55 | L112 | GR-27 | ACTIVE (precondition) |
| 2 | extract-d01-d03.md | ITEM 57 | L114 | GR-27 | ACTIVE (precondition) |
| 3 | extract-d01-d03.md | ITEM 77 | L201-204 | GR-29 | ACTIVE (verdict) |
| 4 | extract-d01-d03.md | ITEM 119 | L261 | — | META (old pipeline, historical) |
| 5 | extract-d01-d03.md | ITEM 120 | L261 | GR-42 | RECLASSIFIED to ORCHESTRATION (council Pattern 1) |
| 6 | extract-d01-d03.md | ITEM 121 | L262 | — | META (old pipeline, historical) |
| 7 | extract-d01-d03.md | ITEM 122 | L262 | GR-42 | ACTIVE (policy) |
| 8 | extract-d01-d03.md | ITEM 123 | L263 | — | META (old pipeline, historical) |
| 9 | extract-d01-d03.md | ITEM 124 | L263 | — | RECLASSIFIED to DISPOSITION (council Pattern 1) |
| 10 | extract-d01-d03.md | ITEM 127 | L278-280 | GR-23/24/25 | ACTIVE (preconditions) |
| 11 | extract-d01-d03.md | ITEM 128 | L288-289 | GR-23 | ACTIVE (precondition) |
| 12 | extract-d01-d03.md | ITEM 131 | L288-289 | GR-24 | ACTIVE (precondition) |
| 13 | extract-d01-d03.md | ITEM 134 | L288-290 | GR-25 | ACTIVE (precondition) |
| 14 | extract-d01-d03.md | ITEM 137 | L308 | — | RECLASSIFIED to DISPOSITION (council Pattern 1) |
| 15 | extract-d01-d03.md | ITEM 138 | L313 | GR-28 | RECLASSIFIED to ORCHESTRATION but CHECKED by GR-28 |
| 16 | extract-d01-d03.md | ITEM 142 | L317 | GR-26 | ACTIVE (precondition) |
| 17 | extract-d04-d05.md | ITEM 21 | L419-421 | GR-27 | ACTIVE (precondition) |
| 18 | extract-d04-d05.md | ITEM 22 | L420 | GR-27 | ACTIVE (precondition) |
| 19 | extract-d04-d05.md | ITEM 23 | L420 | GR-27 | ACTIVE (precondition) |
| 20 | extract-d04-d05.md | ITEM 24 | L420 | GR-27 | ACTIVE (precondition) |
| 21 | extract-d04-d05.md | ITEM 26 | L421 | GR-27 | ACTIVE (precondition) |
| 22 | extract-d04-d05.md | ITEM 27 | L421 | GR-27 | ACTIVE (precondition) |
| 23 | extract-d06-d08.md | ITEM 46 | L584 | GR-26 | ACTIVE (precondition) |
| 24 | extract-d06-d08.md | ITEM 51 | L595-597 | GR-25/26 | ACTIVE (precondition) |
| 25 | extract-d06-d08.md | ITEM 52 | L596 | GR-26 | ACTIVE (precondition) |
| 26 | extract-d06-d08.md | ITEM 53 | L596 | GR-25 | ACTIVE (precondition) |
| 27 | extract-d06-d08.md | ITEM 54 | L597 | GR-42 | ACTIVE (policy) |
| 28 | extract-d06-d08.md | ITEM 55 | L597 | GR-25 | ACTIVE (precondition) |
| 29 | extract-d06-d08.md | ITEM 64 | L614-615 | GR-17-22 | ACTIVE (anti-pattern gates) |
| 30 | extract-d06-d08.md | ITEM 65 | L615 | GR-17-22 | ACTIVE (anti-pattern gates) |
| 31 | extract-d06-d08.md | ITEM 68 | L621-623 | GR-41 | ACTIVE (policy) |
| 32 | extract-d06-d08.md | ITEM 69 | L621 | GR-41 | ACTIVE (policy) |
| 33 | extract-d06-d08.md | ITEM 70 | L622 | GR-41 | ACTIVE (policy) |
| 34 | extract-d09-d11.md | ITEM 6 | L722 | GR-36 | ACTIVE (experiment) |
| 35 | extract-d09-d11.md | ITEM 12 | L740 | GR-37 | ACTIVE (experiment) |
| 36 | extract-d09-d11.md | ITEM 19 | L758-759 | GR-38 | ACTIVE (experiment) |
| 37 | extract-d09-d11.md | ITEM 30 | L789-790 | GR-39 | ACTIVE (experiment) |
| 38 | extract-d15-d17.md | ITEM 003 | L1136 | GR-17 | ACTIVE (anti-pattern) |
| 39 | extract-d15-d17.md | ITEM 006 | L1150 | GR-20 | ACTIVE (anti-pattern) |
| 40 | extract-d15-d17.md | ITEM 010 | L1159 | GR-22 | ACTIVE (anti-pattern) |
| 41 | extract-d15-d17.md | ITEM 014 | L1169 | GR-18 | ACTIVE (anti-pattern) |
| 42 | extract-d15-d17.md | ITEM 018 | L1180 | GR-20 | ACTIVE (anti-pattern) |
| 43 | extract-d15-d17.md | ITEM 021 | L1183 | GR-21 | ACTIVE (anti-pattern) |
| 44 | extract-d15-d17.md | ITEM 022 | L1187 | — | META (summary statement) |
| 45 | extract-d15-d17.md | ITEM 023 | L1188 | — | Routed to PA (not gate-runner) |
| 46 | extract-d15-d17.md | ITEM 024 | L1189 | — | Routed to PA (EXPERIMENTAL Critic) |
| 47 | extract-d15-d17.md | ITEM 025 | L1191 | GR-17-22 | ACTIVE (anti-pattern summary) |
| 48 | extract-d15-d17.md | ITEM 026 | L1192 | — | Routed to PA |
| 49 | extract-d15-d17.md | ITEM 027 | L1193 | — | Routed to PA (EXPERIMENTAL Critic) |
| 50 | extract-d15-d17.md | ITEM 043 | L1251 | GR-30 | ACTIVE (verdict) |
| 51 | extract-d15-d17.md | ITEM 047 | L1256 | GR-31 | ACTIVE (verdict) |
| 52 | extract-d15-d17.md | ITEM 050 | L1259 | GR-32 | ACTIVE (verdict) |
| 53 | extract-d18-d20.md | ITEM 57 | L1502 | GR-33 | RECLASSIFIED to VALUES (council); ADVISORY gate |
| 54 | extract-d18-d20.md | ITEM 60 | L1512 | GR-33 | ACTIVE (mode indicator) |
| 55 | extract-d18-d20.md | ITEM 61 | L1512 | GR-33 | RECLASSIFIED to VALUES (council); ADVISORY gate |
| 56 | extract-d18-d20.md | ITEM 66 | L1524 | — | RECLASSIFIED to VALUES (council) |
| 57 | extract-d18-d20.md | ITEM 67 | L1525 | — | RECLASSIFIED to VALUES (council) |
| 58 | extract-d18-d20.md | ITEM 68 | L1526 | — | RECLASSIFIED to VALUES (council) |
| 59 | extract-d18-d20.md | ITEM 71 | L1535 | — | RECLASSIFIED to VALUES (CCS not automatable) |
| 60 | extract-d18-d20.md | ITEM 73 | L1547 | — | META (verdict statement) |
| 61 | extract-d18-d20.md | ITEM 74 | L1550 | GR-33 | ACTIVE (mode indicator) |
| 62 | extract-d18-d20.md | ITEM 75 | L1551 | GR-34 | ACTIVE (mode indicator) |
| 63 | extract-d18-d20.md | ITEM 76 | L1552 | GR-35 | ACTIVE (mode indicator, PA route) |
| 64 | extract-d18-d20.md | ITEM 77 | L1553 | — | RECLASSIFIED to VALUES (CCS not automatable) |
| 65 | extract-d18-d20.md | ITEM 78 | L1554 | — | RECLASSIFIED to ORCHESTRATION (council Pattern 1) |
| 66 | extract-d21-d25.md | ITEM 129 | L1942 | — | ORCHESTRATOR (policy recommendation) |
| 67 | extract-d21-d25.md | ITEM 130 | L1943 | — | ORCHESTRATOR (policy recommendation) |

**Traceability summary:**
- ACTIVE gates: 42 (mapped to GR-01 through GR-42)
- RECLASSIFIED by council: 10 (Pattern 1) + 2 (Pattern 4) = 12
- Routed to PA: 7 (anti-patterns requiring perceptual judgment)
- Routed to META/DOCUMENTATION: 5 (old pipeline historical items)
- Routed to ORCHESTRATOR: 4 (policy recommendations, risk estimates)
- Total items accounted for: 72 (matches classify-by-layer.md Layer 6 count) + additional items from PERCEPTION and VALUES layers that reference gate-runner

---

*This artifact conforms to all council-verdict.md rulings. Where this document conflicts with any pre-council classification, this document takes precedence.*
