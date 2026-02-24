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

## Gate Categorization (from Gas Town retrospective)

Gates are categorized into 4 priority tiers. Only REQUIRED gates block the verdict.

| Category | Gates | Count | Verdict Impact |
|----------|-------|-------|----------------|
| **REQUIRED** | GR-01 through GR-15, GR-43, GR-44, GR-48 (Identity + Perception + Output + Trailing Void + Meta) | 18 | ANY FAIL blocks verdict (Identity FAIL = REBUILD, Perception FAIL = REFINE, GR-48 FAIL = INCOMPLETE) |
| **RECOMMENDED** | GR-17 through GR-20, GR-25 through GR-28, GR-45, GR-49, GR-51, GR-52 (Anti-Pattern + Precondition + Wave 2) | 12 | 3+ FAIL = REBUILD. Flagged in report but do not individually block. |
| **ADVISORY** | GR-21, GR-22, GR-23, GR-24, GR-33, GR-34, GR-46, GR-50, GR-53 (Remaining Precondition + Mode + Wave 2) | 9 | Informational only. |
| **BRIEF VERIFICATION** | BV-01 through BV-04 (Pre-Build) | 4 | ANY FAIL = return brief to assembler (max 2 revision cycles) |

**Gate counts:** 13 removed (GR-16 absorbed, GR-29-32 verdict→orchestrator, GR-35→PA, GR-36-39 experiment→protocol, GR-40-42 policy→orchestrator). 6 added in Wave 1 (BV-01-04 brief verification, GR-43 self-eval, GR-44 trailing void). 8 new gates added in Wave 2 (GR-45, GR-46, GR-48, GR-49, GR-50, GR-51, GR-52, GR-53) plus executable code written for 2 existing gates (GR-21, GR-22). **Total: 43 gates** (42 - 13 + 6 + 8 = 43).

**Practical guidance:** The executable JavaScript in this document covers all REQUIRED gates (15 identity/perception + 1 output verification + 1 trailing void + 1 coverage meta-gate) plus 6 anti-pattern gates (GR-17 through GR-22) plus 7 Wave 2 gates (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53, GR-48). This covers 100% of verdict-relevant verification.

---

## Gate Runner Execution Protocol

### When Gates Run

Gates run in Phase 3, AFTER the builder has completed its work. The builder NEVER sees gate thresholds in pass/fail format — only as calibration in the execution brief.

**Execution order:**
1. Orchestrator serves HTML via HTTP, opens Playwright session
2. Gate runner executes REQUIRED gates (GR-01 through GR-15, GR-43, GR-44) at 1440px viewport width
3. Gate runner executes RECOMMENDED anti-pattern gates (GR-17 through GR-22, GR-45, GR-51) at 1440px
4. Gate runner executes RECOMMENDED measurement gates (GR-52) and ADVISORY gates (GR-46, GR-50, GR-53)
5. Responsive gates re-run at 768px
6. Results collected as structured JSON
7. GR-48 (Gate Coverage Completeness) runs LAST — verifies all required gates produced results
8. GR-49 (Result File Integrity) runs as process check on the output file
9. FAIL gates produce fix recipes; PASS gates produce diagnostic data for PA context

### Output Format

All gates MUST output JSON with this consistent schema:

```json
{
  "gate": "GR-XX",
  "name": "Human-readable gate name",
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

## SECTION 0: BRIEF VERIFICATION GATES (Pre-Build)

These gates run BETWEEN Phase 1 (brief assembly) and Phase 2 (builder execution). They verify the activation brief before it reaches the builder. Text parsing — no Playwright needed.

### BV-01: Tier Line Budget
- **Description:** Parse brief by tier headers, count lines per tier. Each tier must meet minimum line budget.
- **Check method:** Text parsing — split brief by tier headers, count lines per tier section
- **Thresholds:** T1 >= 12, T2 >= 6, T3 >= 40, T4 >= 32, Content Map >= 24
- **Pass:** All tiers at or above 80% of their budget
- **Fail:** Any tier below 80% of budget
- **Action on fail:** Return to Brief Assembler with specific under-budget tiers identified. Max 2 revision cycles.
- **Evidence:** OBSERVED (under-specified tiers correlate with under-built zones)

### BV-02: Background Delta Verification
- **Description:** Every background hex pair specified in the brief must have true delta >= 15 RGB
- **Check method:** Extract all hex pairs from zone background specs, compute: max(|R1-R2|, |G1-G2|, |B1-B2|)
- **Scope note:** This gate checks ALL consecutive hex pairs in the brief text, not just zone backgrounds. This is intentional — any color pair in the brief should maintain perceptual delta. Errs on the side of strictness.
- **Pass:** All pairs >= 15 RGB delta
- **Fail:** Any pair < 15 RGB delta
- **Action on fail:** Replace failing pair with closest valid pair from value-tables.md
- **Evidence:** PROVEN (Brief Assembler specified delta 16 but actual was 11 in Gas Town — this gate catches that error before propagation)

### BV-03: Recipe Format Verification
- **Description:** Count recipe indicators vs checklist indicators. Ratio must be >= 3:1 recipe:checklist.
- **Check method:** Count recipe verbs ("Build", "Create", "Derive", "Map", "Read", "Select", "Deploy", "Assess") vs checklist verbs ("Verify", "Fail if", "Must be", "Ensure", "Check that")
- **Pass:** recipe:checklist ratio >= 3:1
- **Fail:** Ratio < 3:1
- **Action on fail:** Return to Brief Assembler with checklist language highlighted for conversion
- **Evidence:** PROVEN (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)

### BV-04: Suppressor Scan
- **Description:** Scan brief for known quality suppressor patterns
- **Check method:** Regex scan for: "sample 2-4" (S-01), raw prohibition language outside Tier 1 (S-02), "Verify/Fail if/Must be" in builder-facing sections (S-11), count-gates like ">=3 channels" (S-08)
- **Suppressor patterns:** /sample\s+\d+-\d+/i, /must\s+not|shall\s+not|never\s+use/i (outside Tier 1), /verify\s+that|fail\s+if|must\s+be/i, />=?\s*\d+\s+channels?/i
- **Pass:** Zero suppressor patterns detected in builder-facing content
- **Fail:** Any suppressor pattern found
- **Action on fail:** Return to Brief Assembler with specific patterns highlighted
- **Evidence:** OBSERVED (20 known suppressors, ALL correlate with degradation)

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

*GR-16 (All CSS Perceptible) was removed as a standalone gate. It was a meta-gate aggregating GR-11-15 which are already reported individually. Logic absorbed into verdict/summary section of executable code.*

### GR-44: Trailing Whitespace Void Detection
- **Description:** The vertical distance from the last visible content element to the bottom of `<body>` must be <= 300px. "Visible content" excludes elements with display:none, visibility:hidden, or zero height.
- **Check method:** `getBoundingClientRect()` — find last visible element, measure gap to body bottom
- **Pass:** voidHeight <= 300px
- **Fail:** voidHeight > 300px
- **Evidence:** OBSERVED (Gas Town had ~5 viewport-heights of trailing void; 9/9 PA auditors flagged as dominant defect; completely undetected by gate system)
- **Priority:** REQUIRED — the #1 missing gate. Code already written in File 13.

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

### GR-19: AP-10 Threshold Gaming (No Floor-Hugging Values) [RECOMMENDED]
- **Category:** RECOMMENDED (kept as RECOMMENDED — executable Playwright code now implemented)
- **Source:** ITEM 016 (extract-d15-d17.md L1173-1176), ITEM 017 (extract-d15-d17.md L1173-1176)
- **Description:** PERCEPTION FAILURE — values at EXACT threshold floor (16 RGB delta, 0.026em spacing) indicate gaming rather than intentional design
- **Check method:** Count instances where values are within 10% above threshold floor. If >50% of zone backgrounds are at 15-17 RGB delta AND >50% of letter-spacing values are at 0.025-0.028em, flag as gaming.
- **Pass:** Values show intentional spread (not clustered at floor)
- **Fail:** >50% of measurable values hug the threshold floor
- **Evidence:** OBSERVED (Flagship used 15 RGB EVERYWHERE — ITEM 009 extract-d18-d20.md L1371)
- **Note:** Threshold gaming was the Flagship's dominant defect. Executable code in anti-pattern gate section.

### GR-20: AP-11 Structural Echo (No Repetitive Patterns)
- **Source:** ITEM 018 (extract-d15-d17.md L1180)
- **Description:** Same visual pattern (identical component styling, identical spacing, identical layout) must not repeat 3+ times consecutively without variation
- **Check method:** For consecutive sections, compare: background color, padding values, border styles, layout structure. Flag if 3+ consecutive sections have identical visual treatment.
- **Pass:** No pattern repeats 3+ times consecutively
- **Fail:** Same visual pattern appears 3+ times in a row
- **Evidence:** OBSERVED

### GR-21: AP-14 Cognitive Overload (Max 4 Channels Per Viewport) [ADVISORY]
- **Category:** ADVISORY (demoted from RECOMMENDED — judgment-required, counting "distinct visual channels" requires defining "channel")
- **Source:** ITEM 021 (extract-d15-d17.md L1183)
- **Description:** No single viewport (scroll position) should have >4 simultaneous visual channels competing for attention
- **Check method:** At each 900px vertical slice (typical viewport), count distinct visual channels: background zones, typography scales, border styles, spacing rhythms, color accents, component types
- **Pass:** All viewports have <= 4 active visual channels
- **Fail:** Any viewport has > 4 competing channels
- **Evidence:** THEORETICAL (anti-pattern catalog)
- **Note:** Simplified proxy: count distinct background colors per 900px vertical slice. Full code in executable section below.

### GR-22: AP-02 Color Zone Conflict (Hierarchy Agreement) [ADVISORY]
- **Category:** ADVISORY (demoted from RECOMMENDED — judgment-required, semantic color role analysis is partially subjective)
- **Source:** ITEM 005 (extract-d15-d17.md L1144-1148)
- **Description:** Color hierarchy must not DISAGREE between zones — if Zone 1 uses primary red for emphasis, Zone 3 should not use it for background
- **Check method:** Map usage of primary color (#E83025) and accent colors across zones. Verify consistent semantic meaning (primary = emphasis, not decoration).
- **Pass:** Color usage is semantically consistent across zones
- **Fail:** Same color serves conflicting semantic roles in different zones
- **Evidence:** OBSERVED

---

## SECTION 3B: OUTPUT VERIFICATION GATES (Post-Build Output Checks)

### GR-43: Self-Evaluation Comment Existence
- **Description:** Builder must include self-evaluation comment block in HTML output. Binary check for EXISTENCE, not quality.
- **Check method:** Search HTML source for `<!-- SELF-EVALUATION:` or `<!-- Self-Evaluation:` comment
- **Pass:** Self-evaluation comment found
- **Fail:** Self-evaluation comment missing
- **Evidence:** OBSERVED (prevents trailing void — #3 ranked loss)
- **Note:** The self-evaluation comment is REQUIRED OUTPUT, not optional.

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

### GR-25: Precondition — Suppressor Count [RECOMMENDED]
- **Category:** RECOMMENDED (promoted from ADVISORY — high evidence, automatable with regex)
- **Source:** ITEM 134 (extract-d01-d03.md L288-290), ITEM 135 (extract-d01-d03.md L291-292)
- **Description:** Activation brief must contain zero known quality suppressors
- **Check method:** Scan activation brief for known suppressor patterns: "sample 2-4" (S-01), judgment language (S-03), "verify/fail if/must be" compliance voice (S-11), diagnostic language
- **Pass:** Zero suppressor patterns detected in brief
- **Fail:** Suppressor pattern found
- **Evidence:** OBSERVED (20 suppressors identified, ALL correlate with quality degradation)

### GR-26: Precondition — Brief Size Cap [RECOMMENDED]
- **Category:** RECOMMENDED (promoted from ADVISORY — trivially automatable, strong correlation)
- **Source:** ITEM 142 (extract-d01-d03.md L317), ITEM 046 (extract-d06-d08.md L584), ITEM 052 (extract-d06-d08.md L596)
- **Description:** Activation brief must be under 200 lines (threshold for mode collapse). Constraint layer specifically capped at 73 lines.
- **Check method:** Count lines in activation brief; count lines in constraint layer
- **Pass:** Total brief < 200 lines AND constraint layer <= 73 lines
- **Fail:** Brief exceeds 200 lines OR constraint layer exceeds 73 lines
- **Evidence:** OBSERVED (Middle success at 100 lines; Flagship failure at 530+ lines)

### GR-27: Precondition — Builder Does Not Receive Gates [RECOMMENDED]
- **Category:** RECOMMENDED (promoted from ADVISORY — automatable regex, high value)
- **Source:** ITEM 55 (extract-d01-d03.md L112), ITEM 57 (extract-d01-d03.md L114), ITEM 021-027 (extract-d04-d05.md L419-421)
- **Description:** Builder agent must NOT receive: gate thresholds, research archive, fix instructions, 55 prohibitions (beyond soul), count-gates (">=3 channels"), process metadata
- **Check method:** Scan builder's input for gate-format language ("FAIL if", ">= N channels", "pass/fail threshold")
- **Pass:** Zero gate-format language in builder input
- **Fail:** Gate threshold or count-gate detected in builder input
- **Evidence:** OBSERVED (gate visibility caused threshold gaming in Flagship)
- **Note:** ITEM 050 (extract-d15-d17.md L1259) — REFINE agent also never sees gate scores

### GR-28: Precondition — Recipe Format (Not Checklist) [RECOMMENDED]
- **Category:** RECOMMENDED (promoted from ADVISORY — partially automatable, single most validated format finding)
- **Source:** ITEM 138 (extract-d01-d03.md L313), ITEM 137 (extract-d01-d03.md L308)
- **Description:** Builder input must be in recipe format, not checklist. Builder must enter COMPOSING mode.
- **Check method:** Scan builder brief for: sequenced steps with verbs ("Read/Select/Deploy/Assess"), world-description voice ("This world IS"), dispositional instructions (D-01 through D-08). Flag if: "Verify/Fail if/Must be" compliance voice detected.
- **Pass:** Recipe format indicators present; zero compliance voice
- **Fail:** Checklist format or compliance voice detected
- **Evidence:** OBSERVED (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)

---

## SECTION 5: MODE DETECTION GATES (Applied vs Composed Diagnosis)

> GR-29 through GR-32 (Verdict Gates) were removed. These are orchestrator DECISION RULES, not DOM inspection gates. Moved to artifact-orchestrator.md verdict logic section.

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

> GR-35 (Layout Driver) was removed. Already rerouted to PA by council. Not automatable.

---

## SECTION 6: EXPERIMENT STAGE GATES — REMOVED

> GR-36 through GR-39 (Experiment Stage Gates) were removed. These are experiment protocol gates, not build verification gates. Moved to separate experiment protocol document.

---

## SECTION 7: STRUCTURAL / POLICY GATES — REMOVED

> GR-40 through GR-42 (Policy Gates) were removed. These are pipeline architecture checks, not Playwright gates. GR-42 overlaps with GR-27. Moved to artifact-orchestrator.md process checks section.

---

## SECTION 8: WAVE 2 NEW GATES

### GR-45: Typography Variation [RECOMMENDED]
- **Source:** FIX-071 (File 13, Section 2B)
- **Category:** RECOMMENDED
- **Description:** H2 elements must use at least 2 distinct computed font-sizes (differ by >= 4px) WITHIN the H2 population. Counters DRIFT pattern DR-02/DR-03 where all H2s flatten to a single size (e.g., 28px everywhere). Cross-level variation (H2 vs H3) does NOT satisfy this gate — the purpose is zone-differentiated heading sizes.
- **Check method:** Collect all computed font-sizes for H2 elements. Group into 4px tolerance bands. Count distinct bands within H2 only. If < 3 H2 elements exist, fall back to combined H2+H3 check with 4px bands.
- **Pass:** >= 2 distinct font-size bands within H2 population (4px tolerance) OR < 3 H2 elements and >= 2 bands across H2+H3 combined
- **Fail:** All H2 elements use the same font-size (within 4px)
- **Evidence:** OBSERVED (Flagship H2s all 28px; CD-006 H2s vary 24-36px across zones)

### GR-46: Print Stylesheet [ADVISORY]
- **Source:** FIX-078 (File 13, Section 2B)
- **Category:** ADVISORY
- **Description:** Check for at least one `@media print` rule in document stylesheets. Addresses OM-02 (print styling absent).
- **Check method:** Iterate `document.styleSheets` and check for `@media print` rules (CSSMediaRule with conditionText including "print")
- **Pass:** At least one `@media print` rule found
- **Fail:** No print stylesheet rules
- **Evidence:** THEORETICAL (accessibility best practice)

### GR-48: Gate Coverage Completeness [REQUIRED — META-GATE]
- **Source:** FIX-069 (File 13, Section 2B, CONFLICT-008 resolved)
- **Category:** REQUIRED
- **Description:** The "gate that gates the gates." Verifies that all REQUIRED gates produced results. Runs LAST, after all other gates have executed. Prevents silent gate omission (Gas Town had only 45% gate coverage).
- **Check method:** Inspect collected gate results array. Count results by tier.
- **Pass:** All other 17 REQUIRED gate IDs have a result (GR-48 excludes itself from the check) AND at least 4 of 12 RECOMMENDED gates have a result
- **Fail:** Any REQUIRED gate ID missing = INCOMPLETE verdict
- **Evidence:** OBSERVED (Gas Town had 45% gate coverage — orchestrator silently skipped gates)
- **Note:** This gate runs AFTER all others. It checks the results array, not the DOM.

### GR-49: Gate Result File Integrity [RECOMMENDED]
- **Source:** FIX-072 (File 13, Section 2B)
- **Category:** RECOMMENDED
- **Description:** Verify exactly 1 gate result file exists with consistent gate IDs matching this artifact spec. No duplicates. No renumbering. Prevents SM-08 (Gas Town had 2 conflicting gate result files with different naming).
- **Check method:** Process check — verify output file count and gate ID consistency. Not a Playwright gate.
- **Pass:** Exactly 1 gate result file, all gate IDs match spec, no duplicate IDs
- **Fail:** Multiple result files, or ID mismatches, or duplicate gate IDs
- **Evidence:** OBSERVED (Gas Town had 2 conflicting gate result files)

### GR-50: Conviction Statement Existence [ADVISORY]
- **Source:** FIX-079 (File 13, Section 2B)
- **Category:** ADVISORY
- **Description:** Check for conviction statement file (`conviction.md` or similar) OR HTML comment containing conviction metadata with >= 3 sentences covering metaphor, emotional arc, and compositional strategy.
- **Check method:** Search HTML for `<!-- CONVICTION:` comment block or check for adjacent conviction file. Count sentences if found.
- **Pass:** Conviction statement found with >= 3 sentences
- **Fail:** No conviction statement or < 3 sentences
- **Evidence:** THEORETICAL (conviction statements correlate with intentional composition)
- **Note:** Content quality assessment is partially subjective — gate only checks EXISTENCE and minimum length.

### GR-51: Background Delta Distribution [RECOMMENDED]
- **Source:** FIX-070 (File 13, Section 2B — renumbered from GR-43 to GR-51 to avoid collision with existing GR-43 Self-Evaluation)
- **Category:** RECOMMENDED
- **Description:** Check background delta DISTRIBUTION, not just individual minimums. Addresses the DRIFT pattern where all deltas cluster near the 15 RGB floor (technically passing GR-11 but perceptually flat).
- **Check method:** Collect all zone boundary background deltas. Check: >= 50% must be >= 25 RGB AND standard deviation >= 8 AND at least 1 boundary in the middle 50% of boundaries must have delta >= 25 RGB (prevents bookend-gaming where high deltas cluster at header/footer only).
- **Pass:** >= 50% of zone boundary deltas >= 25 RGB AND stddev >= 8 AND middleHasHighDelta === true
- **Fail:** < 50% above 25 RGB OR stddev < 8 OR no high-delta boundary in middle 50%
- **Evidence:** OBSERVED (Flagship used 15 RGB everywhere — GR-11 passed but page looked flat)

### GR-52: Section Height Variation [RECOMMENDED — MEASUREMENT]
- **Source:** FIX-080 (File 16, Section OM-16 Fix 2)
- **Category:** RECOMMENDED
- **Description:** At least 3 distinct section heights (within 50px tolerance bands). Measures bounding boxes of top-level sections. Uniform section heights produce a metronomic visual rhythm.
- **Check method:** `getBoundingClientRect().height` for each section. Group into 50px bands. Count distinct bands.
- **Pass:** >= 3 distinct height bands
- **Fail:** < 3 distinct height bands
- **Evidence:** OBSERVED (metronomic sections correlate with FLAT/ASSEMBLED PA-05 scores)

### GR-53: Density Arc Direction [ADVISORY — MEASUREMENT]
- **Source:** FIX-081 (File 16, Section OM-16 Fix 2)
- **Category:** ADVISORY
- **Description:** The densest section (highest elements-per-pixel ratio) should NOT be the first or last section. A mid-page density peak suggests intentional arc rather than flat distribution. Crescendo/decrescendo patterns are valid exceptions.
- **Check method:** For each section, compute `childElements.length / boundingRect.height`. Identify which section has the maximum ratio.
- **Pass:** Densest section is NOT first or last
- **Fail:** Densest section IS first or last
- **Evidence:** THEORETICAL (some valid patterns fail this check — crescendo endings are intentional)
- **Note:** ADVISORY only. Result is informational. Does not block verdict.

---

## GATE SUMMARY TABLE (Updated per Wave 2 fixes)

| Gate ID | Category | Tier | Description | Threshold | Evidence | Phase |
|---------|----------|------|-------------|-----------|----------|-------|
| **BV-01** | Brief Verification | REQUIRED | Tier line budget | T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 | OBSERVED | Pre-build |
| **BV-02** | Brief Verification | REQUIRED | Background delta verification | All pairs >= 15 RGB | PROVEN | Pre-build |
| **BV-03** | Brief Verification | REQUIRED | Recipe format ratio | recipe:checklist >= 3:1 | PROVEN | Pre-build |
| **BV-04** | Brief Verification | REQUIRED | Suppressor scan | Zero patterns | OBSERVED | Pre-build |
| GR-01 | Identity | REQUIRED | border-radius: 0 | All = 0px | FACT | Post-build |
| GR-02 | Identity | REQUIRED | box-shadow: none | All = none | FACT | Post-build |
| GR-03 | Identity | REQUIRED | Container 940-960px | 940-960px | FACT | Post-build |
| GR-04 | Identity | REQUIRED | No gradients | Zero gradients | FACT | Post-build |
| GR-05 | Identity | REQUIRED | Warm palette | All palette | FACT | Post-build |
| GR-06 | Identity | REQUIRED | Font trinity | 3 fonts only | FACT | Post-build |
| GR-07 | Identity | REQUIRED | No pure B/W | No #000/#FFF | FACT | Post-build |
| GR-08 | Identity | REQUIRED | No decorative elements | Zero decorative | OBSERVED | Post-build |
| GR-09 | Identity | REQUIRED | Border weight hierarchy | 4±0.5 / 3±0.5 / 1±0.5px | FACT | Post-build |
| GR-10 | Identity | REQUIRED | Cross-page DNA | Match tokens.css | FACT | Post-build |
| GR-11 | Perception | REQUIRED | Bg delta >= 15 RGB | >= 15 | PROVEN | Post-build |
| GR-12 | Perception | REQUIRED | Letter-spacing >= 0.025em | >= 0.025em | PROVEN | Post-build |
| GR-13 | Perception | REQUIRED | Stacked gap <= 120px | <= 120px | PROVEN | Post-build |
| GR-14 | Perception | REQUIRED | Total stacked gap <= 150px | <= 150px | OBSERVED | Post-build |
| GR-15 | Perception | REQUIRED | Single margin <= 96px | <= 96px | PROVEN | Post-build |
| **GR-44** | Perception | REQUIRED | Trailing whitespace void | <= 300px void | OBSERVED | Post-build |
| GR-17 | Anti-pattern | RECOMMENDED | AP-01 Density stacking | content >= 12px, td/th >= 4px | OBSERVED | Post-build |
| GR-18 | Anti-pattern | RECOMMENDED | AP-09 Ghost mechanisms | Zero sub-perceptual | OBSERVED | Post-build |
| GR-19 | Anti-pattern | RECOMMENDED | AP-10 Threshold gaming | <50% at floor | OBSERVED | Post-build |
| GR-20 | Anti-pattern | RECOMMENDED | AP-11 Structural echo | <3 consecutive | OBSERVED | Post-build |
| GR-21 | Anti-pattern | ADVISORY | AP-14 Cognitive overload | <=4 channels | THEORETICAL | Post-build |
| GR-22 | Anti-pattern | ADVISORY | AP-02 Color zone conflict | Consistent roles | OBSERVED | Post-build |
| GR-23 | Precondition | ADVISORY | Builder = Opus | Opus model | CONFOUNDED | Pre-build |
| GR-24 | Precondition | ADVISORY | Content heterogeneity | >= moderate | CONFOUNDED | Pre-build |
| GR-25 | Precondition | RECOMMENDED | Suppressor count = 0 | Zero patterns | OBSERVED | Pre-build |
| GR-26 | Precondition | RECOMMENDED | Brief size cap | <200 lines, <=73 constraint | OBSERVED | Pre-build |
| GR-27 | Precondition | RECOMMENDED | Builder gate-free | Zero gate language | OBSERVED | Pre-build |
| GR-28 | Precondition | RECOMMENDED | Recipe format | Recipe indicators | OBSERVED | Pre-build |
| GR-33 | Mode | ADVISORY | CSS naming mode | Reports only | OBSERVED | Post-build |
| GR-34 | Mode | ADVISORY | Component modulation | Reports only | OBSERVED | Post-build |
| **GR-43** | Output | REQUIRED | Self-evaluation comment | Comment exists | OBSERVED | Post-build |
| **GR-45** | Anti-pattern | RECOMMENDED | Typography variation | >= 2 distinct H2 sizes (4px bands, within-level) | OBSERVED | Post-build |
| **GR-46** | Accessibility | ADVISORY | Print stylesheet | >= 1 @media print rule | THEORETICAL | Post-build |
| **GR-48** | Meta | REQUIRED | Gate coverage completeness | All 17 other REQUIRED + 4/12 RECOMMENDED | OBSERVED | Post-build |
| **GR-49** | Meta | RECOMMENDED | Gate result file integrity | 1 file, consistent IDs | OBSERVED | Post-build |
| **GR-50** | Output | ADVISORY | Conviction statement | >= 3 sentences | THEORETICAL | Post-build |
| **GR-51** | Anti-pattern | RECOMMENDED | Bg delta distribution | >= 50% above 25 RGB, stddev >= 8 | OBSERVED | Post-build |
| **GR-52** | Measurement | RECOMMENDED | Section height variation | >= 3 distinct bands | OBSERVED | Post-build |
| **GR-53** | Measurement | ADVISORY | Density arc direction | Peak not first/last | THEORETICAL | Post-build |

**Total gates: 43** (was 35 after Wave 1, +8 new gates in Wave 2, +2 existing gates received code)
- Brief Verification: 4 (BV-01 through BV-04) — Pre-build, text parsing
- Identity: 10 (GR-01 through GR-10) — Post-build, REQUIRED
- Perception: 6 (GR-11 through GR-15, GR-44) — Post-build, REQUIRED (GR-16 absorbed into verdict logic, GR-44 trailing void added)
- Anti-pattern: 8 (GR-17 through GR-22, GR-45, GR-51) — Post-build, 6 RECOMMENDED + 2 ADVISORY
- Output: 2 (GR-43, GR-50) — Post-build, 1 REQUIRED + 1 ADVISORY
- Precondition: 6 (GR-23 through GR-28) — Pre-build, 4 RECOMMENDED + 2 ADVISORY
- Mode: 2 (GR-33, GR-34) — Post-build, ADVISORY
- Meta: 2 (GR-48, GR-49) — Post-build, 1 REQUIRED + 1 RECOMMENDED
- Measurement: 2 (GR-52, GR-53) — Post-build, 1 RECOMMENDED + 1 ADVISORY
- Accessibility: 1 (GR-46) — Post-build, ADVISORY

**Removed gates (13 total):** GR-16 (absorbed into verdict logic), GR-29-32 (moved to orchestrator verdict logic), GR-35 (moved to PA), GR-36-39 (moved to experiment protocol), GR-40-42 (moved to orchestrator process checks).

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
| 3 | extract-d01-d03.md | ITEM 77 | L201-204 | GR-29 | REMOVED — moved to orchestrator verdict logic |
| 4 | extract-d01-d03.md | ITEM 119 | L261 | — | META (old pipeline, historical) |
| 5 | extract-d01-d03.md | ITEM 120 | L261 | GR-42 | REMOVED — reclassified to ORCHESTRATION (council Pattern 1), gate removed |
| 6 | extract-d01-d03.md | ITEM 121 | L262 | — | META (old pipeline, historical) |
| 7 | extract-d01-d03.md | ITEM 122 | L262 | GR-42 | REMOVED — gate moved to orchestrator process checks |
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
| 27 | extract-d06-d08.md | ITEM 54 | L597 | GR-42 | REMOVED — gate moved to orchestrator process checks |
| 28 | extract-d06-d08.md | ITEM 55 | L597 | GR-25 | ACTIVE (precondition) |
| 29 | extract-d06-d08.md | ITEM 64 | L614-615 | GR-17-22 | ACTIVE (anti-pattern gates) |
| 30 | extract-d06-d08.md | ITEM 65 | L615 | GR-17-22 | ACTIVE (anti-pattern gates) |
| 31 | extract-d06-d08.md | ITEM 68 | L621-623 | GR-41 | REMOVED — gate moved to orchestrator process checks |
| 32 | extract-d06-d08.md | ITEM 69 | L621 | GR-41 | REMOVED — gate moved to orchestrator process checks |
| 33 | extract-d06-d08.md | ITEM 70 | L622 | GR-41 | REMOVED — gate moved to orchestrator process checks |
| 34 | extract-d09-d11.md | ITEM 6 | L722 | GR-36 | REMOVED — moved to experiment protocol |
| 35 | extract-d09-d11.md | ITEM 12 | L740 | GR-37 | REMOVED — moved to experiment protocol |
| 36 | extract-d09-d11.md | ITEM 19 | L758-759 | GR-38 | REMOVED — moved to experiment protocol |
| 37 | extract-d09-d11.md | ITEM 30 | L789-790 | GR-39 | REMOVED — moved to experiment protocol |
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
| 50 | extract-d15-d17.md | ITEM 043 | L1251 | GR-30 | REMOVED — moved to orchestrator verdict logic |
| 51 | extract-d15-d17.md | ITEM 047 | L1256 | GR-31 | REMOVED — moved to orchestrator verdict logic |
| 52 | extract-d15-d17.md | ITEM 050 | L1259 | GR-32 | REMOVED — moved to orchestrator verdict logic |
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
| 63 | extract-d18-d20.md | ITEM 76 | L1552 | GR-35 | REMOVED — rerouted to PA |
| 64 | extract-d18-d20.md | ITEM 77 | L1553 | — | RECLASSIFIED to VALUES (CCS not automatable) |
| 65 | extract-d18-d20.md | ITEM 78 | L1554 | — | RECLASSIFIED to ORCHESTRATION (council Pattern 1) |
| 66 | extract-d21-d25.md | ITEM 129 | L1942 | — | ORCHESTRATOR (policy recommendation) |
| 67 | extract-d21-d25.md | ITEM 130 | L1943 | — | ORCHESTRATOR (policy recommendation) |

**Traceability summary:**
- ACTIVE gates: 43 (BV-01-04, GR-01-15, GR-17-28, GR-33-34, GR-43-53; 13 gates removed in Wave 1, 8 new added in Wave 2)
- Wave 1 ADDED: 6 (BV-01-04 brief verification, GR-43 self-eval output, GR-44 trailing void)
- Wave 2 ADDED: 8 new gates (GR-45 typography variation, GR-46 print stylesheet, GR-48 gate coverage, GR-49 file integrity, GR-50 conviction statement, GR-51 bg delta distribution, GR-52 section height variation, GR-53 density arc direction) + executable code for 2 existing gates (GR-21, GR-22)
- REMOVED gates: 13 (GR-16 absorbed, GR-29-32 to orchestrator verdict, GR-35 to PA, GR-36-39 to experiment protocol, GR-40-42 to orchestrator process checks)
- RECLASSIFIED by council: 10 (Pattern 1) + 2 (Pattern 4) = 12
- Routed to PA: 7 (anti-patterns requiring perceptual judgment)
- Routed to META/DOCUMENTATION: 5 (old pipeline historical items)
- Routed to ORCHESTRATOR: 4 (policy recommendations, risk estimates)
- Total items accounted for: 72 (matches classify-by-layer.md Layer 6 count) + additional items from PERCEPTION and VALUES layers that reference gate-runner
- **Note:** GR-47 intentionally skipped (Brief Line Budget already covered by BV-01 per CONFLICT-007). GR-51 renumbered from source GR-43 to avoid collision with existing Self-Evaluation gate.

---

*This artifact conforms to all council-verdict.md rulings. Where this document conflicts with any pre-council classification, this document takes precedence.*

---

## STACKED GAP THRESHOLD CLARIFICATION

**GR-13 (120px) and GR-14 (150px) are COMPLEMENTARY gates, not conflicting thresholds.**

- **GR-13** measures the CSS PROPERTY SUM: `margin-bottom + padding-bottom + margin-top + padding-top` of adjacent elements at a section boundary. Each boundary must total <= 120px.
- **GR-14** measures the VISUAL MEASUREMENT: `getBoundingClientRect()` gap between the last element in one zone and the first element in the next zone. This captures the TOTAL visual gap including all contributing properties, which may exceed the CSS sum due to collapsing margins, nested padding, or other layout effects. Each boundary must total <= 150px.

**Why both are needed:** The S-09 stacking loophole showed that individual CSS properties can each pass per-property checks while their STACKED visual effect creates 210-276px voids. GR-13 catches excessive individual values; GR-14 catches excessive accumulated visual gaps.

**Example:** If Zone 3 has `padding-bottom: 48px` and Zone 4 has `padding-top: 64px`, the CSS sum is 112px (passes GR-13). But if Zone 3's last child also has `margin-bottom: 32px` and Zone 4's first child has `margin-top: 24px`, the VISUAL gap could be 168px (fails GR-14). The gate runner must measure BOTH.

---

## EXECUTABLE GATE RUNNER CODE

This is the pre-built JavaScript code the orchestrator should execute. Organized into 5 sections:
1. **Brief Verification (BV-01 through BV-04)** — text parsing, runs in Phase 1
2. **Core Gate Runner (GR-01 through GR-15, GR-43, GR-44)** — Playwright DOM inspection, runs in Phase 3A
3. **Anti-Pattern Gates (GR-17 through GR-22)** — Playwright heuristic checks, runs in Phase 3A
4. **Wave 2 Gates (GR-45, GR-46, GR-48, GR-50, GR-51, GR-52, GR-53)** — new Playwright checks, runs in Phase 3A
5. **Process Gates (GR-49)** — non-Playwright file/process checks, runs after Phase 3A

### Brief Verification Gates (BV-01 through BV-04) — Text Parsing

```javascript
// Brief Verification Gates — Run AFTER brief assembly, BEFORE builder execution
// Input: briefText (string) — the assembled activation brief
// Output: array of gate results

function runBriefVerification(briefText) {
  const results = [];
  const lines = briefText.split('\n');

  // BV-01: Tier Line Budget
  const tierHeaders = {
    'T1': { pattern: /^#+\s*Tier\s*1/im, min: 12 },
    'T2': { pattern: /^#+\s*Tier\s*2/im, min: 6 },
    'T3': { pattern: /^#+\s*Tier\s*3/im, min: 40 },
    'T4': { pattern: /^#+\s*Tier\s*4/im, min: 32 },
    'ContentMap': { pattern: /^#+\s*Content\s*Map/im, min: 24 }
  };
  const tierCounts = {};
  let currentTier = null;
  let currentCount = 0;
  for (const line of lines) {
    for (const [tier, config] of Object.entries(tierHeaders)) {
      if (config.pattern.test(line)) {
        if (currentTier) tierCounts[currentTier] = currentCount;
        currentTier = tier;
        currentCount = 0;
        break;
      }
    }
    if (currentTier && line.trim()) currentCount++;
  }
  if (currentTier) tierCounts[currentTier] = currentCount;

  const budgetFailures = Object.entries(tierHeaders).filter(([tier, config]) => {
    const count = tierCounts[tier] || 0;
    return count < config.min * 0.8; // 80% of budget threshold
  }).map(([tier, config]) => ({ tier, actual: tierCounts[tier] || 0, min: config.min }));

  results.push({
    gate: 'BV-01', name: 'Tier Line Budget',
    status: budgetFailures.length === 0 ? 'PASS' : 'FAIL',
    measured: { tierCounts, budgetFailures },
    threshold: tierHeaders
  });

  // BV-02: Background Delta Verification
  const hexPattern = /#([0-9a-fA-F]{6})/g;
  const hexValues = [...briefText.matchAll(hexPattern)].map(m => m[1]);
  const rgbFromHex = (hex) => ({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  });
  const bgDeltaFailures = [];
  // Check consecutive hex pairs that appear in zone/background context
  for (let i = 0; i < hexValues.length - 1; i++) {
    const a = rgbFromHex(hexValues[i]);
    const b = rgbFromHex(hexValues[i + 1]);
    const delta = Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
    if (delta > 0 && delta < 15) {
      bgDeltaFailures.push({ hex1: '#' + hexValues[i], hex2: '#' + hexValues[i + 1], delta });
    }
  }
  results.push({
    gate: 'BV-02', name: 'Background Delta Verification',
    status: bgDeltaFailures.length === 0 ? 'PASS' : 'FAIL',
    measured: { totalHexPairs: hexValues.length, failures: bgDeltaFailures },
    threshold: { minDelta: 15 }
  });

  // BV-03: Recipe Format Verification
  const recipeVerbs = (briefText.match(/\b(Build|Create|Derive|Map|Read|Select|Deploy|Assess)\b/g) || []).length;
  const checklistVerbs = (briefText.match(/\b(Verify|Fail if|Must be|Ensure|Check that)\b/gi) || []).length;
  const ratio = checklistVerbs > 0 ? recipeVerbs / checklistVerbs : recipeVerbs > 0 ? Infinity : 0;
  results.push({
    gate: 'BV-03', name: 'Recipe Format Verification',
    status: ratio >= 3 ? 'PASS' : 'FAIL',
    measured: { recipeVerbs, checklistVerbs, ratio: ratio === Infinity ? 'Infinity' : ratio.toFixed(1) },
    threshold: { minRatio: '3:1' }
  });

  // BV-04: Suppressor Scan
  const suppressorPatterns = [
    { name: 'S-01 sample range', pattern: /sample\s+\d+-\d+/i },
    { name: 'S-02 raw prohibition', pattern: /must\s+not|shall\s+not|never\s+use/i },
    { name: 'S-11 compliance voice', pattern: /verify\s+that|fail\s+if|must\s+be/i },
    { name: 'S-08 count-gate', pattern: />=?\s*\d+\s+channels?/i }
  ];
  const suppressorsFound = suppressorPatterns.filter(sp => sp.pattern.test(briefText));
  results.push({
    gate: 'BV-04', name: 'Suppressor Scan',
    status: suppressorsFound.length === 0 ? 'PASS' : 'FAIL',
    measured: { suppressorsFound: suppressorsFound.map(s => s.name) },
    threshold: { maxSuppressors: 0 }
  });

  return results;
}
```

### Core Gate Runner (GR-01 through GR-15, GR-43)

```javascript
// Gate Runner — Pipeline v3 Programmatic Verification
// Execute via: orchestrator Playwright session against served HTML at 1440px viewport
// Prerequisites: page served via HTTP, document.fonts.ready awaited

async function runGateRunner(page) {
  const results = [];

  // Wait for fonts before any checks
  await page.evaluate(() => document.fonts.ready);

  // ========== SHARED HELPER: isRenderedElement ==========
  // Inject shared helper into page context so all gates can use it.
  // Filters out non-rendered elements (HEAD/META/SCRIPT/etc.) and hidden elements.
  await page.evaluate(() => {
    window.isRenderedElement = function(el) {
      const NON_RENDERED_TAGS = ['HTML', 'HEAD', 'META', 'TITLE', 'SCRIPT', 'STYLE', 'LINK', 'BR'];
      if (NON_RENDERED_TAGS.includes(el.tagName)) return false;
      const style = getComputedStyle(el);
      if (style.display === 'none') return false;
      if (style.visibility === 'hidden') return false;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0 && rect.width === 0) return false;
      return true;
    };
  });

  // ========== SECTION 1: IDENTITY GATES (GR-01 through GR-10) ==========

  // GR-01: Border Radius Zero
  const borderRadiusViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const br = getComputedStyle(el).borderRadius;
      if (br && br !== '0px') {
        violations.push({ tag: el.tagName, class: el.className, value: br });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-01', name: 'Border Radius Zero',
    status: borderRadiusViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: borderRadiusViolations.length, samples: borderRadiusViolations.slice(0, 5) },
    threshold: { borderRadius: '0px' }
  });

  // GR-02: Box Shadow None
  const boxShadowViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const bs = getComputedStyle(el).boxShadow;
      if (bs && bs !== 'none') {
        violations.push({ tag: el.tagName, class: el.className, value: bs });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-02', name: 'Box Shadow None',
    status: boxShadowViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: boxShadowViolations.length, samples: boxShadowViolations.slice(0, 5) },
    threshold: { boxShadow: 'none' }
  });

  // GR-03: Container Width 940-960px
  const containerWidth = await page.evaluate(() => {
    const candidates = [
      ...document.querySelectorAll('[class*="spine"], [class*="container"], [class*="wrapper"], main, article'),
      ...document.querySelectorAll('[style*="max-width"]')
    ];
    const widths = candidates.map(el => ({
      tag: el.tagName, class: el.className,
      maxWidth: getComputedStyle(el).maxWidth,
      computedWidth: el.getBoundingClientRect().width
    })).filter(w => {
      const mw = parseFloat(w.maxWidth);
      return !isNaN(mw) && mw >= 800 && mw <= 1200;
    });
    return widths;
  });
  const containerPass = containerWidth.some(c => {
    const mw = parseFloat(c.maxWidth);
    return mw >= 940 && mw <= 960;
  });
  results.push({
    gate: 'GR-03', name: 'Container Width 940-960px',
    status: containerPass ? 'PASS' : 'FAIL',
    measured: { containers: containerWidth },
    threshold: { minWidth: 940, maxWidth: 960 }
  });

  // GR-04: No Gradients
  const gradientViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('gradient')) {
        violations.push({ tag: el.tagName, class: el.className, value: bg.substring(0, 100) });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-04', name: 'No Gradients',
    status: gradientViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: gradientViolations.length, samples: gradientViolations.slice(0, 5) },
    threshold: { gradients: 0 }
  });

  // GR-05: Warm Palette Compliance
  const paletteCheck = await page.evaluate(() => {
    const pureBlack = [];
    const pureWhite = [];
    const coldColors = [];

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    function isCold(rgb) {
      return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10;
    }

    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGB(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) {
          pureBlack.push({ tag: el.tagName, prop, class: el.className });
        }
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255) {
          pureWhite.push({ tag: el.tagName, prop, class: el.className });
        }
        if (isCold(rgb)) {
          coldColors.push({ tag: el.tagName, prop, class: el.className, value: val });
        }
      });
    });
    return { pureBlack: pureBlack.length, pureWhite: pureWhite.length, coldColors: coldColors.length,
             samples: { black: pureBlack.slice(0, 3), white: pureWhite.slice(0, 3), cold: coldColors.slice(0, 3) } };
  });
  results.push({
    gate: 'GR-05', name: 'Warm Palette Compliance',
    status: (paletteCheck.pureBlack === 0 && paletteCheck.pureWhite === 0 && paletteCheck.coldColors === 0) ? 'PASS' : 'FAIL',
    measured: paletteCheck,
    threshold: { pureBlack: 0, pureWhite: 0, coldColors: 0 }
  });

  // GR-06: Font Trinity
  const fontCheck = await page.evaluate(async () => {
    await document.fonts.ready;
    const allowedFamilies = ['instrument serif', 'inter', 'jetbrains mono'];
    const violations = [];
    const found = new Set();

    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const ff = getComputedStyle(el).fontFamily.toLowerCase();
      const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
      if (primary) {
        const isAllowed = allowedFamilies.some(f => primary.includes(f)) ||
          ['system-ui', '-apple-system', 'sans-serif', 'serif', 'monospace', 'ui-sans-serif', 'ui-serif', 'ui-monospace'].includes(primary);
        if (!isAllowed) {
          violations.push({ tag: el.tagName, class: el.className, font: primary });
        }
        allowedFamilies.forEach(f => { if (primary.includes(f)) found.add(f); });
      }
    });
    return { violations: violations.length, found: [...found], samples: violations.slice(0, 5) };
  });
  const allThreePresent = fontCheck.found.length === 3;
  // Binary PASS/FAIL only — no PASS* status
  results.push({
    gate: 'GR-06', name: 'Font Trinity',
    status: (fontCheck.violations === 0 && allThreePresent) ? 'PASS' : 'FAIL',
    measured: fontCheck,
    threshold: { allowedFonts: ['Instrument Serif', 'Inter', 'JetBrains Mono'], allPresent: true }
  });

  // GR-07: No Pure Black / Pure White
  // Standalone executable code for pure B/W check (separate from GR-05 palette check)
  const pureBWCheck = await page.evaluate(() => {
    const pureBlack = [];
    const pureWhite = [];
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGBLocal(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) {
          pureBlack.push({ tag: el.tagName, class: el.className, prop });
        }
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255) {
          pureWhite.push({ tag: el.tagName, class: el.className, prop });
        }
      });
    });
    return { pureBlack: pureBlack.length, pureWhite: pureWhite.length,
             samples: { black: pureBlack.slice(0, 5), white: pureWhite.slice(0, 5) } };
  });
  results.push({
    gate: 'GR-07', name: 'No Pure Black / Pure White',
    status: (pureBWCheck.pureBlack === 0 && pureBWCheck.pureWhite === 0) ? 'PASS' : 'FAIL',
    measured: pureBWCheck,
    threshold: { pureBlack: 0, pureWhite: 0 }
  });

  // GR-08: No Decorative Elements
  // Heuristic code for decorative element detection
  const decorativeCheck = await page.evaluate(() => {
    const decorative = [];
    // Check for <hr> without adjacent heading (standalone decorative dividers)
    document.querySelectorAll('hr').forEach(hr => {
      const prev = hr.previousElementSibling;
      const next = hr.nextElementSibling;
      const prevIsHeading = prev && /^H[1-6]$/.test(prev.tagName);
      const nextIsHeading = next && /^H[1-6]$/.test(next.tagName);
      // Standalone hr (not a heading separator) = decorative
      if (!prevIsHeading && !nextIsHeading) {
        decorative.push({ type: 'standalone-hr', tag: 'HR' });
      }
    });
    // Check for empty divs used as spacers (height > 10px but no text content)
    document.querySelectorAll('div').forEach(div => {
      if (div.textContent.trim() === '' && div.children.length === 0) {
        const rect = div.getBoundingClientRect();
        if (rect.height > 10) {
          decorative.push({ type: 'empty-spacer-div', height: Math.round(rect.height), class: div.className });
        }
      }
    });
    // Check for icon-only elements without functional purpose (aria-hidden, no text, contains svg/img)
    document.querySelectorAll('[aria-hidden="true"], .icon, [class*="icon"]').forEach(el => {
      if (el.textContent.trim() === '' && !el.closest('button') && !el.closest('a')) {
        decorative.push({ type: 'icon-only-decorative', tag: el.tagName, class: el.className });
      }
    });
    return { decorative: decorative.length, samples: decorative.slice(0, 5) };
  });
  results.push({
    gate: 'GR-08', name: 'No Decorative Elements',
    status: decorativeCheck.decorative === 0 ? 'PASS' : 'FAIL',
    measured: decorativeCheck,
    threshold: { decorativeElements: 0 },
    note: 'Heuristic detection — covers standalone hrs, empty spacer divs, icon-only decorative elements'
  });

  // Header DNA (sub-check of GR-10, kept as diagnostic — was previously mislabeled as GR-07)
  const headerCheck = await page.evaluate(() => {
    const header = document.querySelector('header') || document.querySelector('[class*="header"]') || document.querySelector('[role="banner"]');
    if (!header) return { found: false };

    const style = getComputedStyle(header);
    const bg = style.backgroundColor;
    const bbWidth = parseFloat(style.borderBottomWidth);
    const bbColor = style.borderBottomColor;

    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const isDark = match ? (parseInt(match[1]) + parseInt(match[2]) + parseInt(match[3])) < 200 : false;

    const isRedBorder = bbColor && bbColor.match(/rgba?\((\d+)/) && parseInt(bbColor.match(/rgba?\((\d+)/)[1]) > 200;
    const is3px = bbWidth >= 2.5 && bbWidth <= 3.5;

    return {
      found: true, isDark, bbWidth, bbColor, isRedBorder, is3px, bg,
      pass: isDark && isRedBorder && is3px
    };
  });
  // Header DNA result folded into GR-10 measured data (not a separate gate)

  // GR-09: Border Weight Hierarchy (4/3/1px)
  // Tolerance-band matching for 4/3/1 hierarchy (replaces simple length check)
  const borderWeights = await page.evaluate(() => {
    const weights = new Map();
    document.querySelectorAll('*').forEach(el => {
      if (!isRenderedElement(el)) return;
      const style = getComputedStyle(el);
      ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].forEach(prop => {
        const w = parseFloat(style[prop]);
        if (w > 0) {
          const key = w.toFixed(1);
          if (!weights.has(key)) weights.set(key, []);
          weights.get(key).push({ tag: el.tagName, class: el.className, prop, width: w });
        }
      });
    });
    return Object.fromEntries(weights);
  });
  const weightValues = Object.keys(borderWeights).map(Number).sort((a, b) => b - a);
  // Tolerance-band matching — subpixel rendering means 3px may compute as 2.67px
  const hasPrimary = weightValues.some(w => w >= 3.5 && w <= 4.5);
  const hasSecondary = weightValues.some(w => w >= 2.5 && w <= 3.5);
  const hasTertiary = weightValues.some(w => w >= 0.5 && w <= 1.5);
  const hasHierarchy = hasPrimary && (hasSecondary || hasTertiary);
  results.push({
    gate: 'GR-09', name: 'Border Weight Hierarchy',
    status: hasHierarchy ? 'PASS' : 'FAIL',
    measured: { distinctWeights: weightValues, counts: Object.fromEntries(Object.entries(borderWeights).map(([k, v]) => [k, v.length])), hasPrimary, hasSecondary, hasTertiary },
    threshold: { expectedHierarchy: '4px / 3px / 1px', toleranceBands: '4±0.5 / 3±0.5 / 1±0.5' },
    note: 'Tolerance bands account for subpixel rendering (e.g., 2.67px for 3px)'
  });

  // Typography Foundations (line-height 1.7, h3 italic) — sub-checks folded into GR-10
  const typographyCheck = await page.evaluate(() => {
    const body = document.body;
    const bodyLH = parseFloat(getComputedStyle(body).lineHeight) / parseFloat(getComputedStyle(body).fontSize);

    const h3s = document.querySelectorAll('h3');
    let h3Italic = true;
    h3s.forEach(h3 => {
      if (getComputedStyle(h3).fontStyle !== 'italic') h3Italic = false;
    });

    return { bodyLineHeight: bodyLH.toFixed(2), h3Italic, h3Count: h3s.length };
  });
  // Typography results are folded into GR-10 Cross-Page DNA (no separate gate result)

  // GR-10: Cross-Page DNA Properties
  // Cross-page DNA sub-checks: callout 4px border, ::selection red, :focus-visible 3px, p max-width 70ch
  const dnaCheck = await page.evaluate(() => {
    // Sub-check 1: Skip link exists
    const skipLink = document.querySelector('[class*="skip"], a[href="#main"], a[href="#content"]');

    // Sub-check 2: Heading hierarchy
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
      tag: h.tagName, text: h.textContent.substring(0, 50)
    }));
    let hierarchyOk = true;
    for (let i = 1; i < headings.length; i++) {
      const prev = parseInt(headings[i - 1].tag[1]);
      const curr = parseInt(headings[i].tag[1]);
      if (curr > prev + 1) hierarchyOk = false;
    }

    // Sub-check 3: Callout 4px left border
    const callouts = document.querySelectorAll('.callout, blockquote, [class*="callout"]');
    let calloutBorderOk = true;
    callouts.forEach(c => {
      const blw = parseFloat(getComputedStyle(c).borderLeftWidth);
      if (blw < 3.5 || blw > 4.5) calloutBorderOk = false;
    });

    // Sub-check 4: ::selection red background (check via stylesheet rules)
    let selectionRedOk = false;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText && rule.selectorText.includes('::selection')) {
              const bgProp = rule.style.backgroundColor || rule.style.background || '';
              if (bgProp.toLowerCase().includes('e83025') || bgProp.toLowerCase().includes('red') ||
                  (bgProp.match && bgProp.match(/rgba?\(232/) !== null)) {
                selectionRedOk = true;
              }
            }
          }
        } catch(e) { /* cross-origin stylesheet */ }
      }
    } catch(e) {}

    // Sub-check 5: :focus-visible 3px solid primary (check via stylesheet rules)
    let focusVisibleOk = false;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText && rule.selectorText.includes(':focus-visible')) {
              const outline = rule.style.outline || rule.style.outlineWidth || '';
              if (outline.includes('3px')) focusVisibleOk = true;
            }
          }
        } catch(e) {}
      }
    } catch(e) {}

    // Sub-check 6: p max-width 70ch
    const paragraphs = document.querySelectorAll('p');
    let pMaxWidthOk = true;
    paragraphs.forEach(p => {
      const mw = getComputedStyle(p).maxWidth;
      if (mw !== 'none') {
        // Accept 70ch or equivalent pixel value (~1120px at 16px)
        if (mw === '70ch') { /* ok */ }
        else {
          const px = parseFloat(mw);
          if (px > 0 && px > 1200) pMaxWidthOk = false;
        }
      }
    });

    const ariaLabels = document.querySelectorAll('[aria-label]').length;
    const landmarks = document.querySelectorAll('[role], header, main, nav, footer, section, article, aside').length;

    return {
      skipLink: !!skipLink, hierarchyOk, calloutBorderOk, selectionRedOk,
      focusVisibleOk, pMaxWidthOk, ariaLabels, landmarks,
      headingCount: headings.length, calloutCount: callouts.length
    };
  });
  const bodyLHOk = parseFloat(typographyCheck.bodyLineHeight) >= 1.6;
  const h3ItalicOk = typographyCheck.h3Italic;
  const dnaSubChecks = [dnaCheck.skipLink, dnaCheck.hierarchyOk, dnaCheck.calloutBorderOk, dnaCheck.selectionRedOk, dnaCheck.focusVisibleOk, dnaCheck.pMaxWidthOk, bodyLHOk, h3ItalicOk, headerCheck.pass];
  const dnaCriticalPass = dnaSubChecks.every(Boolean);
  results.push({
    gate: 'GR-10', name: 'Cross-Page DNA Properties',
    status: dnaCriticalPass ? 'PASS' : 'FAIL',
    measured: {
      ...dnaCheck,
      bodyLineHeight: typographyCheck.bodyLineHeight, bodyLHOk,
      h3Italic: h3ItalicOk, h3Count: typographyCheck.h3Count,
      headerDNA: headerCheck
    },
    threshold: { skipLink: true, hierarchyOk: true, calloutBorder: '4px', selectionRed: true, focusVisible: '3px solid primary', pMaxWidth: '70ch', bodyLineHeight: '>=1.6', h3FontStyle: 'italic', headerDarkBg: true, headerRedBorder: '3px' },
    note: '::selection and :focus-visible checked via stylesheet rules (not computed style). Typography and header DNA folded in.'
  });

  // ========== SECTION 2: PERCEPTION GATES (GR-11 through GR-15, GR-44) ==========

  // GR-11: Background Delta >= 15 RGB
  const bgDeltaCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    if (sections.length < 2) return { zones: 0, pass: true, deltas: [] };

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    const backgrounds = [];
    sections.forEach(s => {
      const bg = getComputedStyle(s).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) backgrounds.push({ element: s.className || s.tagName, rgb, raw: bg });
    });

    const deltas = [];
    for (let i = 0; i < backgrounds.length - 1; i++) {
      const a = backgrounds[i].rgb;
      const b = backgrounds[i + 1].rgb;
      const delta = Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
      deltas.push({
        from: backgrounds[i].element, to: backgrounds[i + 1].element,
        delta, fromColor: backgrounds[i].raw, toColor: backgrounds[i + 1].raw,
        pass: delta >= 15
      });
    }
    return { zones: backgrounds.length, deltas, allPass: deltas.every(d => d.pass) };
  });
  results.push({
    gate: 'GR-11', name: 'Background Delta >= 15 RGB',
    status: bgDeltaCheck.allPass ? 'PASS' : 'FAIL',
    measured: bgDeltaCheck,
    threshold: { minDelta: 15 }
  });

  // GR-12: Letter Spacing >= 0.025em
  const letterSpacingCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        const em = px / fs;
        if (em > 0 && em < 0.025) {
          violations.push({ tag: el.tagName, class: el.className, letterSpacing: ls, fontSize: fs + 'px', em: em.toFixed(4) });
        }
      }
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-12', name: 'Letter Spacing >= 0.025em',
    status: letterSpacingCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: letterSpacingCheck,
    threshold: { minLetterSpacing: '0.025em' }
  });

  // GR-13: Stacked Gap <= 120px (CSS property sum at section boundaries)
  const stackedGapCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const curr = sections[i];
      const next = sections[i + 1];
      // Measure CSS property sum
      const currStyle = getComputedStyle(curr);
      const nextStyle = getComputedStyle(next);
      const cssSum = parseFloat(currStyle.paddingBottom) + parseFloat(currStyle.marginBottom) +
                     parseFloat(nextStyle.paddingTop) + parseFloat(nextStyle.marginTop);
      gaps.push({
        from: curr.className || curr.tagName,
        to: next.className || next.tagName,
        cssSum: Math.round(cssSum),
        pass: cssSum <= 120
      });
    }
    return { gaps, allPass: gaps.every(g => g.pass) };
  });
  results.push({
    gate: 'GR-13', name: 'Stacked Gap <= 120px (CSS sum)',
    status: stackedGapCheck.allPass ? 'PASS' : 'FAIL',
    measured: stackedGapCheck,
    threshold: { maxCSSSum: 120 }
  });

  // GR-14: Total Visual Gap <= 150px (getBoundingClientRect measurement)
  // Structural transition handling — if child between zones has position:relative/absolute
  // and distinct background from both adjacent zones, exclude that gap (intentional transition element)
  const visualGapCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    function rgbDelta(a, b) {
      if (!a || !b) return 999;
      return Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
    }

    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const curr = sections[i];
      const next = sections[i + 1];
      const currRect = curr.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      const visualGap = nextRect.top - currRect.bottom;

      // Check for structural transition element between zones
      let isStructuralTransition = false;
      const currBg = parseRGBLocal(getComputedStyle(curr).backgroundColor);
      const nextBg = parseRGBLocal(getComputedStyle(next).backgroundColor);
      // Check siblings between curr and next for transition elements
      let sibling = curr.nextElementSibling;
      while (sibling && sibling !== next) {
        const sibStyle = getComputedStyle(sibling);
        const sibPos = sibStyle.position;
        if (sibPos === 'relative' || sibPos === 'absolute') {
          const sibBg = parseRGBLocal(sibStyle.backgroundColor);
          if (sibBg && rgbDelta(sibBg, currBg) >= 15 && rgbDelta(sibBg, nextBg) >= 15) {
            isStructuralTransition = true;
            break;
          }
        }
        sibling = sibling.nextElementSibling;
      }

      gaps.push({
        from: curr.className || curr.tagName,
        to: next.className || next.tagName,
        gap: Math.round(visualGap),
        isStructuralTransition,
        pass: isStructuralTransition || visualGap <= 150
      });
    }
    return { gaps, allPass: gaps.every(g => g.pass) };
  });
  results.push({
    gate: 'GR-14', name: 'Total Visual Gap <= 150px',
    status: visualGapCheck.allPass ? 'PASS' : 'FAIL',
    measured: visualGapCheck,
    threshold: { maxVisualGap: 150 }
  });

  // GR-15: Single Margin <= 96px
  const singleMarginCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 96) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px' });
        }
      });
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-15', name: 'Single Margin <= 96px',
    status: singleMarginCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: singleMarginCheck,
    threshold: { maxSingleValue: '96px' }
  });

  // ========== SECTION 2B: TRAILING VOID DETECTION ==========

  // GR-44: Trailing Whitespace Void Detection
  // GR-44: Trailing Whitespace Void detection
  // The #1 defect flagged by 9/9 PA auditors, completely undetected by gate system.
  // Source: File 13, Section 2B (GR-44 spec + full JS code)
  const trailingVoid = await page.evaluate(() => {
    const body = document.body;
    const bodyRect = body.getBoundingClientRect();
    const bodyBottom = bodyRect.bottom;

    // Find the last visible content element
    const allElements = [...document.querySelectorAll('body *')];
    let lastVisibleBottom = 0;

    for (const el of allElements) {
      if (['SCRIPT', 'STYLE', 'META', 'LINK'].includes(el.tagName)) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) continue;
      if (rect.bottom > lastVisibleBottom) {
        lastVisibleBottom = rect.bottom;
      }
    }

    const voidHeight = bodyBottom - lastVisibleBottom;
    return {
      bodyBottom: Math.round(bodyBottom),
      lastContentBottom: Math.round(lastVisibleBottom),
      voidHeight: Math.round(voidHeight),
      pass: voidHeight <= 300
    };
  });
  results.push({
    gate: 'GR-44', name: 'Trailing Whitespace Void',
    status: trailingVoid.pass ? 'PASS' : 'FAIL',
    measured: trailingVoid,
    threshold: { maxVoidHeight: '300px' }
  });

  // ========== SECTION 3: OUTPUT VERIFICATION ==========

  // GR-43: Self-Evaluation Comment Existence
  // GR-43: Check for self-evaluation comment in HTML output
  const selfEvalCheck = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    const hasSelfEval = html.includes('<!-- SELF-EVALUATION:') || html.includes('<!-- Self-Evaluation:');
    return { hasSelfEval };
  });
  results.push({
    gate: 'GR-43', name: 'Self-Evaluation Comment Existence',
    status: selfEvalCheck.hasSelfEval ? 'PASS' : 'FAIL',
    measured: selfEvalCheck,
    threshold: { selfEvaluationComment: true }
  });

  // ========== SUMMARY (GR-16 logic absorbed into verdict) ==========
  const identityGates = results.filter(r => ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-07','GR-08','GR-09','GR-10'].includes(r.gate));
  const identityPass = identityGates.filter(g => g.status === 'PASS').length;
  const identityFail = identityGates.filter(g => g.status === 'FAIL').length;
  const perceptionGates = results.filter(r => ['GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15', 'GR-44'].includes(r.gate));
  const perceptionPass = perceptionGates.filter(g => g.status === 'PASS').length;
  const perceptionFail = perceptionGates.filter(g => g.status === 'FAIL').length;
  // GR-16 absorbed — "All CSS Perceptible" is now verdict logic, not a standalone gate
  const allPerceptionPass = perceptionGates.every(g => g.status === 'PASS');
  const outputGates = results.filter(r => ['GR-43'].includes(r.gate));
  const outputFail = outputGates.filter(g => g.status === 'FAIL').length;

  let verdict = 'PROCEED_TO_PA';
  if (identityFail > 0) verdict = 'REBUILD';
  else if (perceptionFail > 0 || !allPerceptionPass) verdict = 'REFINE';
  else if (outputFail > 0) verdict = 'REFINE';

  return {
    results,
    summary: {
      identity: { pass: identityPass, fail: identityFail, total: 10 },
      perception: { pass: perceptionPass, fail: perceptionFail, total: 6 },
      output: { pass: outputGates.length - outputFail, fail: outputFail, total: 1 },
      allPerceptionPass,
      verdict,
      note: 'Run runWave2Gates() and runGateCoverage() after this for complete verification'
    }
  };
}

// Usage in Playwright orchestrator:
// const gateResults = await runGateRunner(page);
// console.log(JSON.stringify(gateResults, null, 2));
```

### Anti-Pattern Gate Implementations (GR-17 through GR-22)

These are more heuristic and may require tolerance tuning per content type.

```javascript
// Anti-Pattern Gates — execute after core gates pass
async function runAntiPatternGates(page) {
  const results = [];

  // GR-17: Density Stacking (min padding >= 12px for content, >= 4px for table cells)
  // Split td/th into separate check with 4px minimum (was 12px — 262 false positives from tables)
  const densityCheck = await page.evaluate(() => {
    const violations = [];
    // Content elements: 12px minimum
    document.querySelectorAll('p, li, blockquote, .callout').forEach(el => {
      const style = getComputedStyle(el);
      ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 0 && val < 12) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px', minExpected: '12px' });
        }
      });
    });
    // Table cells: 4px minimum (dense data presentation intentionally uses smaller padding)
    document.querySelectorAll('td, th').forEach(el => {
      const style = getComputedStyle(el);
      ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 0 && val < 4) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px', minExpected: '4px' });
        }
      });
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-17', name: 'AP-01 Density Stacking',
    status: densityCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: densityCheck,
    threshold: { minPadding: '12px on content elements' }
  });

  // GR-18: Ghost Mechanisms (sub-perceptual CSS values)
  // Cross-references with GR-11 (bg delta) and GR-12 (letter-spacing)
  const ghostCheck = await page.evaluate(() => {
    const ghosts = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      // Check for border-width between 0 and 0.5px
      ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].forEach(prop => {
        const w = parseFloat(style[prop]);
        if (w > 0 && w < 0.5) {
          ghosts.push({ tag: el.tagName, class: el.className, prop, value: w + 'px', type: 'sub-perceptual-border' });
        }
      });
      // Check for opacity between 0.01 and 0.1
      const opacity = parseFloat(style.opacity);
      if (opacity > 0 && opacity < 0.1) {
        ghosts.push({ tag: el.tagName, class: el.className, value: opacity, type: 'sub-perceptual-opacity' });
      }
    });
    return { ghosts: ghosts.length, samples: ghosts.slice(0, 5) };
  });
  results.push({
    gate: 'GR-18', name: 'AP-09 Ghost Mechanisms',
    status: ghostCheck.ghosts === 0 ? 'PASS' : 'FAIL',
    measured: ghostCheck,
    threshold: { ghostMechanisms: 0 }
  });

  // GR-19: AP-10 Threshold Gaming (>50% of deltas cluster at floor)
  // GR-19: Executable Playwright JS for threshold gaming detection
  const gamingCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }
    // Collect all adjacent zone background deltas
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const deltas = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const aBg = parseRGBLocal(getComputedStyle(sections[i]).backgroundColor);
      const bBg = parseRGBLocal(getComputedStyle(sections[i + 1]).backgroundColor);
      if (aBg && bBg) {
        const delta = Math.max(Math.abs(aBg.r - bBg.r), Math.abs(aBg.g - bBg.g), Math.abs(aBg.b - bBg.b));
        if (delta > 0) deltas.push(delta);
      }
    }
    // Check: if >50% of deltas cluster within 10% of the 15 RGB floor (delta 15-17)
    const floorRange = deltas.filter(d => d >= 15 && d <= 17);
    const floorRatio = deltas.length > 0 ? floorRange.length / deltas.length : 0;

    // Collect letter-spacing gaming
    const lsValues = [];
    document.querySelectorAll('*').forEach(el => {
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs > 0) {
          const em = px / fs;
          if (em > 0) lsValues.push(em);
        }
      }
    });
    const lsFloorRange = lsValues.filter(v => v >= 0.025 && v <= 0.028);
    const lsFloorRatio = lsValues.length > 0 ? lsFloorRange.length / lsValues.length : 0;

    const isGaming = floorRatio > 0.50 || (floorRatio > 0.30 && lsFloorRatio > 0.50);

    return {
      bgDeltas: deltas, bgFloorCount: floorRange.length, bgFloorRatio: floorRatio.toFixed(2),
      lsValues: lsValues.length, lsFloorCount: lsFloorRange.length, lsFloorRatio: lsFloorRatio.toFixed(2),
      isGaming
    };
  });
  results.push({
    gate: 'GR-19', name: 'AP-10 Threshold Gaming',
    status: gamingCheck.isGaming ? 'FAIL' : 'PASS',
    measured: gamingCheck,
    threshold: { maxFloorRatio: 0.50, floorRange: '15-17 RGB' }
  });

  // GR-20: Structural Echo (3+ consecutive identical sections)
  const echoCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"]');
    const signatures = [];
    sections.forEach(s => {
      const style = getComputedStyle(s);
      signatures.push({
        bg: style.backgroundColor,
        padding: style.padding,
        borderBottom: style.borderBottom
      });
    });
    let maxConsecutive = 1;
    let currentRun = 1;
    for (let i = 1; i < signatures.length; i++) {
      if (signatures[i].bg === signatures[i-1].bg &&
          signatures[i].padding === signatures[i-1].padding &&
          signatures[i].borderBottom === signatures[i-1].borderBottom) {
        currentRun++;
        maxConsecutive = Math.max(maxConsecutive, currentRun);
      } else {
        currentRun = 1;
      }
    }
    return { maxConsecutive, pass: maxConsecutive < 3 };
  });
  results.push({
    gate: 'GR-20', name: 'AP-11 Structural Echo',
    status: echoCheck.pass ? 'PASS' : 'FAIL',
    measured: echoCheck,
    threshold: { maxConsecutiveIdentical: 2 }
  });

  // GR-21: AP-14 Cognitive Overload — Simplified proxy (Wave 2)
  // Counts distinct background colors per 900px vertical slice.
  // PASS if <= 4 distinct backgrounds per viewport.
  const overloadCheck = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return `${match[1]},${match[2]},${match[3]}`;
      return null;
    }
    const docHeight = document.documentElement.scrollHeight;
    const sliceHeight = 900;
    const sliceCount = Math.ceil(docHeight / sliceHeight);
    const sliceResults = [];
    let maxDistinct = 0;

    for (let i = 0; i < sliceCount; i++) {
      const sliceTop = i * sliceHeight;
      const sliceBottom = sliceTop + sliceHeight;
      const bgColors = new Set();

      document.querySelectorAll('*').forEach(el => {
        if (!window.isRenderedElement(el)) return;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elTop = rect.top + scrollTop;
        const elBottom = rect.bottom + scrollTop;
        // Element overlaps with this slice
        if (elBottom > sliceTop && elTop < sliceBottom) {
          const bg = getComputedStyle(el).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const rgb = parseRGBLocal(bg);
            if (rgb) bgColors.add(rgb);
          }
        }
      });

      const distinct = bgColors.size;
      if (distinct > maxDistinct) maxDistinct = distinct;
      sliceResults.push({ slice: i, top: sliceTop, bottom: sliceBottom, distinctBgs: distinct });
    }

    return {
      slices: sliceResults,
      maxDistinctPerViewport: maxDistinct,
      pass: maxDistinct <= 4
    };
  });
  results.push({
    gate: 'GR-21', name: 'AP-14 Cognitive Overload (Bg Proxy)',
    status: overloadCheck.pass ? 'PASS' : 'FAIL',
    measured: { maxDistinctPerViewport: overloadCheck.maxDistinctPerViewport, sliceCount: overloadCheck.slices.length },
    threshold: { maxDistinctBackgrounds: 4, sliceHeight: '900px' },
    evidence: 'THEORETICAL',
    note: 'Simplified proxy — counts distinct bg colors per 900px slice, not full visual channel analysis'
  });

  // GR-22: AP-02 Color Zone Conflict — Simplified proxy (Wave 2)
  // Checks if primary red (#E83025) is used for borders/emphasis (correct) vs backgrounds (incorrect if > 2 uses).
  const colorConflictCheck = await page.evaluate(() => {
    function isRedColor(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return false;
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      // Primary red #E83025 = rgb(232, 48, 37) — allow tolerance
      return r >= 220 && r <= 245 && g <= 60 && b <= 50;
    }

    let borderUses = 0;
    let bgUses = 0;
    let textUses = 0;
    const bgElements = [];

    document.querySelectorAll('*').forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const style = getComputedStyle(el);

      // Check borders for red
      ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
        const val = style[prop];
        if (val && isRedColor(val)) {
          const w = parseFloat(style[prop.replace('Color', 'Width')]);
          if (w > 0) borderUses++;
        }
      });

      // Check background for red
      const bg = style.backgroundColor;
      if (bg && isRedColor(bg)) {
        bgUses++;
        bgElements.push({ tag: el.tagName, class: el.className });
      }

      // Check text color for red
      const color = style.color;
      if (color && isRedColor(color)) {
        textUses++;
      }
    });

    return {
      borderUses,
      bgUses,
      textUses,
      bgElements: bgElements.slice(0, 5),
      pass: bgUses <= 2
    };
  });
  results.push({
    gate: 'GR-22', name: 'AP-02 Color Zone Conflict (Red Role)',
    status: colorConflictCheck.pass ? 'PASS' : 'FAIL',
    measured: colorConflictCheck,
    threshold: { maxRedBackgrounds: 2 },
    evidence: 'OBSERVED',
    note: 'Simplified proxy — checks primary red is used for borders/emphasis, not backgrounds (>2 bg uses = conflict)'
  });

  return results;
}
```

### Wave 2 Gates (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53)

```javascript
// Wave 2 Gates — execute after anti-pattern gates
// These include new RECOMMENDED and ADVISORY gates added in Wave 2.
async function runWave2Gates(page) {
  const results = [];

  // GR-45: Typography Variation — H2s must use >= 2 distinct font-sizes WITHIN H2 population
  const typoVariation = await page.evaluate(() => {
    const h2Sizes = new Map();
    const h3Sizes = new Map();
    const h2Elements = document.querySelectorAll('h2');
    const h3Elements = document.querySelectorAll('h3');

    h2Elements.forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h2Sizes.set(fs, (h2Sizes.get(fs) || 0) + 1);
    });
    h3Elements.forEach(el => {
      if (!window.isRenderedElement(el)) return;
      const fs = Math.round(parseFloat(getComputedStyle(el).fontSize));
      h3Sizes.set(fs, (h3Sizes.get(fs) || 0) + 1);
    });

    // Group into 4px tolerance bands (perceptually meaningful at heading sizes)
    function toBands(sizeMap) {
      const sorted = [...sizeMap.keys()].sort((a, b) => a - b);
      const bands = [];
      for (const size of sorted) {
        const existing = bands.find(b => Math.abs(b.center - size) <= 4);
        if (existing) {
          existing.count += sizeMap.get(size);
        } else {
          bands.push({ center: size, count: sizeMap.get(size) });
        }
      }
      return bands;
    }

    const h2Bands = toBands(h2Sizes);
    const h3Bands = toBands(h3Sizes);

    // Primary check: within-H2 variation (>= 2 bands)
    // Fallback: if < 3 H2 elements, allow combined H2+H3 check
    const allSizes = new Map([...h2Sizes]);
    h3Sizes.forEach((count, size) => allSizes.set(size, (allSizes.get(size) || 0) + count));
    const combinedBands = toBands(allSizes);

    const h2Count = [...h2Sizes.values()].reduce((s, c) => s + c, 0);
    const useFallback = h2Count < 3;
    const pass = useFallback ? combinedBands.length >= 2 : h2Bands.length >= 2;

    return {
      h2Count,
      h3Count: [...h3Sizes.values()].reduce((s, c) => s + c, 0),
      h2Bands: h2Bands.length,
      h2BandDetails: h2Bands,
      h3Bands: h3Bands.length,
      combinedBands: combinedBands.length,
      usedFallback: useFallback,
      pass
    };
  });
  results.push({
    gate: 'GR-45', name: 'Typography Variation',
    status: typoVariation.pass ? 'PASS' : 'FAIL',
    measured: typoVariation,
    threshold: { minDistinctBands: 2, bandTolerance: '4px', mode: 'within-H2 primary, H2+H3 fallback if <3 H2s' },
    evidence: 'OBSERVED'
  });

  // GR-46: Print Stylesheet — check for @media print rule
  const printCheck = await page.evaluate(() => {
    let hasPrintRule = false;
    let printRuleCount = 0;
    try {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText && rule.conditionText.includes('print')) {
              hasPrintRule = true;
              printRuleCount++;
            }
          }
        } catch (e) { /* cross-origin stylesheet */ }
      }
    } catch (e) {}
    return { hasPrintRule, printRuleCount };
  });
  results.push({
    gate: 'GR-46', name: 'Print Stylesheet',
    status: printCheck.hasPrintRule ? 'PASS' : 'FAIL',
    measured: printCheck,
    threshold: { minPrintRules: 1 },
    evidence: 'THEORETICAL'
  });

  // GR-50: Conviction Statement Existence
  const convictionCheck = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    // Check for conviction HTML comment
    const convictionMatch = html.match(/<!--\s*CONVICTION:([\s\S]*?)-->/i);
    let convictionText = '';
    if (convictionMatch) {
      convictionText = convictionMatch[1].trim();
    }
    // Count sentences (rough: split by period followed by space or end)
    const sentences = convictionText
      ? convictionText.split(/\.\s+|\.$/).filter(s => s.trim().length > 10).length
      : 0;

    // Check for keywords: metaphor, emotional arc, compositional strategy
    const hasMetaphor = /metaphor/i.test(convictionText);
    const hasArc = /arc|emotional|journey/i.test(convictionText);
    const hasStrategy = /strateg|composition|approach/i.test(convictionText);

    return {
      found: !!convictionMatch,
      sentences,
      hasMetaphor,
      hasArc,
      hasStrategy,
      textPreview: convictionText.substring(0, 200),
      pass: !!convictionMatch && sentences >= 3
    };
  });
  results.push({
    gate: 'GR-50', name: 'Conviction Statement Existence',
    status: convictionCheck.pass ? 'PASS' : 'FAIL',
    measured: convictionCheck,
    threshold: { minSentences: 3, requiredTopics: ['metaphor', 'arc', 'strategy'] },
    evidence: 'THEORETICAL'
  });

  // GR-51: Background Delta Distribution
  const bgDistribution = await page.evaluate(() => {
    function parseRGBLocal(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const deltas = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const aBg = parseRGBLocal(getComputedStyle(sections[i]).backgroundColor);
      const bBg = parseRGBLocal(getComputedStyle(sections[i + 1]).backgroundColor);
      if (aBg && bBg) {
        const delta = Math.max(Math.abs(aBg.r - bBg.r), Math.abs(aBg.g - bBg.g), Math.abs(aBg.b - bBg.b));
        if (delta > 0) deltas.push(delta);
      }
    }

    if (deltas.length === 0) {
      return { deltas: [], above25Count: 0, above25Ratio: 0, stddev: 0, pass: true, note: 'No zone boundaries found' };
    }

    // Count deltas >= 25 RGB
    const above25 = deltas.filter(d => d >= 25);
    const above25Ratio = above25.length / deltas.length;

    // Compute standard deviation
    const mean = deltas.reduce((sum, d) => sum + d, 0) / deltas.length;
    const variance = deltas.reduce((sum, d) => sum + Math.pow(d - mean, 2), 0) / deltas.length;
    const stddev = Math.sqrt(variance);

    // Positional check: at least 1 boundary in the middle 50% must have delta >= 25 RGB
    // Prevents bookend-gaming (high deltas only at header/footer)
    const middleStart = Math.floor(deltas.length * 0.25);
    const middleEnd = Math.ceil(deltas.length * 0.75);
    const middleDeltas = deltas.slice(middleStart, middleEnd);
    const middleHasHighDelta = middleDeltas.some(d => d >= 25);

    return {
      deltas,
      above25Count: above25.length,
      totalDeltas: deltas.length,
      above25Ratio: above25Ratio.toFixed(2),
      mean: mean.toFixed(1),
      stddev: stddev.toFixed(1),
      middleHasHighDelta,
      middleDeltaCount: middleDeltas.length,
      pass: above25Ratio >= 0.50 && stddev >= 8 && middleHasHighDelta
    };
  });
  results.push({
    gate: 'GR-51', name: 'Background Delta Distribution',
    status: bgDistribution.pass ? 'PASS' : 'FAIL',
    measured: bgDistribution,
    threshold: { minAbove25Ratio: 0.50, minStddev: 8 },
    evidence: 'OBSERVED'
  });

  // GR-52: Section Height Variation — at least 3 distinct height bands
  const heightVariation = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const heights = [];
    sections.forEach(s => {
      if (!window.isRenderedElement(s)) return;
      const rect = s.getBoundingClientRect();
      if (rect.height > 0) {
        heights.push(Math.round(rect.height));
      }
    });

    if (heights.length < 3) {
      return { heights, bands: heights.length, pass: heights.length >= 3, note: 'Fewer than 3 sections found' };
    }

    // Group into 50px tolerance bands
    const sorted = [...heights].sort((a, b) => a - b);
    const bands = [];
    for (const h of sorted) {
      const existingBand = bands.find(b => Math.abs(b.center - h) <= 50);
      if (existingBand) {
        existingBand.members.push(h);
        existingBand.center = existingBand.members.reduce((s, v) => s + v, 0) / existingBand.members.length;
      } else {
        bands.push({ center: h, members: [h] });
      }
    }

    return {
      heights,
      sectionCount: heights.length,
      bands: bands.length,
      bandDetails: bands.map(b => ({ center: Math.round(b.center), count: b.members.length })),
      pass: bands.length >= 3
    };
  });
  results.push({
    gate: 'GR-52', name: 'Section Height Variation',
    status: heightVariation.pass ? 'PASS' : 'FAIL',
    measured: heightVariation,
    threshold: { minDistinctBands: 3, bandTolerance: '50px' },
    evidence: 'OBSERVED'
  });

  // GR-53: Density Arc Direction — densest section should not be first or last
  const densityArc = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const densities = [];

    sections.forEach((s, index) => {
      if (!window.isRenderedElement(s)) return;
      const rect = s.getBoundingClientRect();
      if (rect.height <= 0) return;
      // Count child elements as density proxy
      const childCount = s.querySelectorAll('*').length;
      const density = childCount / rect.height;
      densities.push({
        index,
        className: s.className || s.tagName,
        height: Math.round(rect.height),
        childCount,
        density: density.toFixed(4)
      });
    });

    if (densities.length < 3) {
      return { densities, densestIndex: -1, pass: true, note: 'Fewer than 3 sections — arc check not applicable' };
    }

    // Find densest section
    let maxDensity = 0;
    let densestIndex = 0;
    densities.forEach((d, i) => {
      const val = parseFloat(d.density);
      if (val > maxDensity) {
        maxDensity = val;
        densestIndex = i;
      }
    });

    const isFirstOrLast = densestIndex === 0 || densestIndex === densities.length - 1;

    return {
      sectionCount: densities.length,
      densestIndex,
      densestSection: densities[densestIndex],
      isFirstOrLast,
      pass: !isFirstOrLast
    };
  });
  results.push({
    gate: 'GR-53', name: 'Density Arc Direction',
    status: densityArc.pass ? 'PASS' : 'FAIL',
    measured: densityArc,
    threshold: { densestNotFirstOrLast: true },
    evidence: 'THEORETICAL',
    note: 'ADVISORY only — crescendo/decrescendo patterns are valid exceptions'
  });

  return results;
}
```

### Gate Coverage Completeness (GR-48) — Meta-Gate

```javascript
// GR-48: Gate Coverage Completeness — runs LAST after all other gates
// This is the "gate that gates the gates"
// Input: allResults — array of all gate results collected from runGateRunner, runAntiPatternGates, runWave2Gates
function runGateCoverage(allResults) {
  // Define expected gate IDs by tier
  const REQUIRED_GATES = [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05', 'GR-06', 'GR-07', 'GR-08', 'GR-09', 'GR-10',
    'GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15',
    'GR-43', 'GR-44'
  ]; // 17 REQUIRED gates (not counting GR-48 itself)

  const RECOMMENDED_GATES = [
    'GR-17', 'GR-18', 'GR-19', 'GR-20',
    'GR-25', 'GR-26', 'GR-27', 'GR-28',
    'GR-45', 'GR-49', 'GR-51', 'GR-52'
  ]; // 12 RECOMMENDED gates

  const collectedGateIds = new Set(allResults.map(r => r.gate));

  const missingRequired = REQUIRED_GATES.filter(id => !collectedGateIds.has(id));
  const presentRecommended = RECOMMENDED_GATES.filter(id => collectedGateIds.has(id));
  const missingRecommended = RECOMMENDED_GATES.filter(id => !collectedGateIds.has(id));

  const requiredComplete = missingRequired.length === 0;
  const recommendedSufficient = presentRecommended.length >= 4;

  const pass = requiredComplete && recommendedSufficient;

  return {
    gate: 'GR-48', name: 'Gate Coverage Completeness',
    status: pass ? 'PASS' : 'FAIL',
    measured: {
      totalCollected: collectedGateIds.size,
      requiredPresent: REQUIRED_GATES.length - missingRequired.length,
      requiredTotal: REQUIRED_GATES.length,
      missingRequired,
      recommendedPresent: presentRecommended.length,
      recommendedTotal: RECOMMENDED_GATES.length,
      missingRecommended
    },
    threshold: {
      requiredCoverage: '17/17 (100%)',
      recommendedCoverage: '>=4/12'
    },
    evidence: 'OBSERVED',
    note: missingRequired.length > 0
      ? 'INCOMPLETE — missing REQUIRED gates: ' + missingRequired.join(', ')
      : 'All REQUIRED gates present'
  };
}
```

### Gate Result File Integrity (GR-49) — Process Check

```javascript
// GR-49: Gate Result File Integrity — non-Playwright process check
// This runs after gate results are written to file.
// Input: resultFiles — array of file paths found in output directory matching gate result pattern
// Input: resultData — parsed JSON from the gate result file
function checkGateResultIntegrity(resultFiles, resultData) {
  const issues = [];

  // Check 1: Exactly 1 gate result file
  if (resultFiles.length === 0) {
    issues.push('No gate result file found');
  } else if (resultFiles.length > 1) {
    issues.push('Multiple gate result files found: ' + resultFiles.join(', '));
  }

  if (resultData) {
    // Check 2: No duplicate gate IDs
    const gateIds = resultData.map(r => r.gate);
    const seen = new Set();
    const duplicates = [];
    for (const id of gateIds) {
      if (seen.has(id)) duplicates.push(id);
      seen.add(id);
    }
    if (duplicates.length > 0) {
      issues.push('Duplicate gate IDs: ' + duplicates.join(', '));
    }

    // Check 3: All gate IDs follow GR-XX or BV-XX pattern
    const invalidIds = gateIds.filter(id => !/^(GR-\d{2}|BV-\d{2})$/.test(id));
    if (invalidIds.length > 0) {
      issues.push('Invalid gate ID format: ' + invalidIds.join(', '));
    }

    // Check 4: All results have required fields
    const missingFields = resultData.filter(r => !r.gate || !r.name || !r.status || !r.measured || !r.threshold);
    if (missingFields.length > 0) {
      issues.push('Results missing required fields: ' + missingFields.map(r => r.gate || 'unknown').join(', '));
    }
  }

  return {
    gate: 'GR-49', name: 'Gate Result File Integrity',
    status: issues.length === 0 ? 'PASS' : 'FAIL',
    measured: { fileCount: resultFiles.length, issues },
    threshold: { files: 1, duplicates: 0, invalidFormats: 0 },
    evidence: 'OBSERVED'
  };
}
```

### Gate Runner Usage Instructions

```
// Full execution sequence for the orchestrator:

// 1. Serve HTML via HTTP
// npx serve -p 3000 ./output-directory

// 2. Open Playwright session
// const { chromium } = require('playwright');
// const browser = await chromium.launch();
// const page = await browser.newPage();
// await page.setViewportSize({ width: 1440, height: 900 });
// await page.goto('http://localhost:3000/output.html');

// 3. Run core gates (REQUIRED: GR-01 through GR-15, GR-43, GR-44)
// const coreResults = await runGateRunner(page);

// 4. Run anti-pattern gates (RECOMMENDED + ADVISORY: GR-17 through GR-22)
// const apResults = await runAntiPatternGates(page);

// 5. Run Wave 2 gates (GR-45, GR-46, GR-50, GR-51, GR-52, GR-53)
// const wave2Results = await runWave2Gates(page);

// 6. For responsive gates, resize and re-run perception gates at 768px
// await page.setViewportSize({ width: 768, height: 1024 });
// const responsiveResults = await runGateRunner(page);

// 7. Collect all gate results into a single array
// const allGateResults = [
//   ...coreResults.results,
//   ...apResults,
//   ...wave2Results,
//   ...responsiveResults.results
// ];

// 8. Run GR-48 (Gate Coverage Completeness) — LAST
// const coverageResult = runGateCoverage(allGateResults);
// allGateResults.push(coverageResult);

// 9. Write results to file, then run GR-49 (Result File Integrity)
// fs.writeFileSync('gate-results.json', JSON.stringify(allGateResults, null, 2));
// const integrityResult = checkGateResultIntegrity(['gate-results.json'], allGateResults);

// 10. Determine final verdict
// const coreVerdict = coreResults.summary.verdict;
// const apFails = apResults.filter(r => r.status === 'FAIL').length;
// const wave2RecommendedFails = wave2Results.filter(r =>
//   ['GR-45', 'GR-51', 'GR-52'].includes(r.gate) && r.status === 'FAIL'
// ).length;
// const totalRecommendedFails = apFails + wave2RecommendedFails;
//
// let finalVerdict = coreVerdict;
// if (finalVerdict === 'PROCEED_TO_PA' && totalRecommendedFails >= 3) {
//   finalVerdict = 'REBUILD';
// }
// if (coverageResult.status === 'FAIL') {
//   finalVerdict = 'INCOMPLETE';
// }
```
