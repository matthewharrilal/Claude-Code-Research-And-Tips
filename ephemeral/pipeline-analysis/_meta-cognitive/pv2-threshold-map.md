# Pipeline v2 — Perception Threshold Integration Map

**Agent:** threshold-mapper (Opus 4.6)
**Date:** 2026-02-18
**Task:** Map how perception thresholds integrate across ALL Pipeline v2 files, resolve discrepancies, identify missing thresholds
**Sources Read (ALL fully):**
1. `ephemeral/pipeline-analysis/08-perception-model-shift.md` (484 lines)
2. `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` (1,746 lines)
3. `~/.claude/skills/tension-composition/SKILL.md` (searched — zero perception thresholds found)
4. `~/.claude/skills/perceptual-auditing/SKILL.md` (searched — zero numeric perception thresholds found; has spacing range tables but no minimum-delta table)
5. `design-system/compositional-core/guidelines/semantic-rules.md` (searched — zero perception thresholds found)
6. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-file-structure.md` (676 lines)
7. `ephemeral/pipeline-analysis/CLAUDE.md` (full — contains Quick Reference Threshold Table)
8. Cross-corpus grep across all 42+ pipeline-analysis files for threshold values

---

## A) THRESHOLD CONSISTENCY MATRIX

This is the core deliverable. For EVERY perception threshold value referenced anywhere in the corpus, I trace its value across all sources.

### Legend
- **File 08** = `08-perception-model-shift.md` (the perception model, originator of most thresholds)
- **File 42** = `42-OPERATIONAL-RECIPE.md` (the operational recipe)
- **CLAUDE.md** = `ephemeral/pipeline-analysis/CLAUDE.md` (the navigation layer's Quick Reference)
- **pv2-file-structure** = `_meta-cognitive/pv2-file-structure.md` (proposed Pipeline v2 perception-thresholds.md)
- **TC SKILL** = `~/.claude/skills/tension-composition/SKILL.md`
- **PA SKILL** = `~/.claude/skills/perceptual-auditing/SKILL.md`
- **semantic-rules** = `design-system/compositional-core/guidelines/semantic-rules.md`

### Matrix

| Property | File 08 Value | File 42 Value | CLAUDE.md Value | pv2-file-structure Value | TC SKILL Value | PA SKILL Value | semantic-rules Value | DISCREPANCY? | PROPOSED Pipeline v2 Value | Rationale |
|----------|--------------|--------------|----------------|-------------------------|---------------|---------------|---------------------|-------------|---------------------------|-----------|
| **Background color** | >= 10 RGB (line 161) | >= 10 RGB (lines 588, 1263, 1613) | **>= 15 RGB** (line 29, 143) | **>= 15 RGB** (line 271) | ABSENT | ABSENT | ABSENT | **YES: 10 vs 15** | **>= 15 RGB** (see Section C) | Evidence favors 15; 10 proved insufficient in practice |
| **Letter-spacing** | >= 0.025em = 0.4px at 16px (line 162) | >= 0.025em (lines 1267, 1615) | **>= 0.5px = 0.03em** (lines 29, 145) | **>= 0.5px = 0.03em** (line 273) | ABSENT | ABSENT | ABSENT | **YES: 0.025em vs 0.03em** | **>= 0.03em (0.48px at 16px)** | CLAUDE.md rounds up from File 08's 0.025em; 0.03em is safer |
| **Line-height** | >= 0.2 (line 163) | >= 0.2 (line 1267) | >= 0.15 (line 146) | >= 0.2 (line 274) | ABSENT | ABSENT | ABSENT | **YES: 0.15 vs 0.2** | **>= 0.2** | File 08 and File 42 agree on 0.2; CLAUDE.md's 0.15 is lower and unsourced |
| **Font-size** | >= 2px (line 164) | >= 2px (lines 1264, 1614) | >= 2px (line 144) | >= 2px (line 272) | ABSENT | ABSENT | ABSENT | NO | **>= 2px** | Unanimous across all sources |
| **Font-weight** | 400 vs 600 (line 165) | >= 200 (lines 1265, 1618) | >= 100 (line 149) | >= 200 (line 276) | ABSENT | ABSENT | ABSENT | **YES: 100 vs 200** | **>= 200** | File 42 and pv2-file-structure agree on 200; CLAUDE.md's 100 is lower; 400→500 jump is barely visible |
| **Border weight** | >= 1px (line 166) | >= 1px (lines 1268, 1618) | >= 1px (line 150) | >= 1px (line 277) | ABSENT | ABSENT | ABSENT | NO | **>= 1px** | Unanimous |
| **Margin-bottom** | >= 8px (line 167) | >= 8px (lines 1269, 1619) | N/A (see Padding) | N/A (see Padding) | ABSENT | ABSENT | ABSENT | NO (different property name) | **>= 8px** | File 08 and File 42 agree |
| **Max-width** | >= 6ch (line 168) | >= 6ch (lines 1267, 1620) | N/A | >= 6ch (line 278) | ABSENT | ABSENT | ABSENT | NO | **>= 6ch** | Consistent where present |
| **Text color** | N/A | >= 15 RGB (line 1621) | N/A | >= 15 RGB (line 279) | ABSENT | ABSENT | ABSENT | NO | **>= 15 RGB** | Only in File 42 + pv2-file-structure; reasonable |
| **Padding/margins between zones** | N/A | N/A | **>= 24px** (lines 29, 147) | **>= 24px** (line 275) | ABSENT | ABSENT | ABSENT | **MISMATCH with margin-bottom** | **>= 8px (per-property) / >= 24px (zone-level cumulative)** | CLAUDE.md refers to inter-zone total; File 08/42 refer to per-property |
| **Total boundary gap** | <= 120px (line 251) | <= 120px (lines 1277, 1282) | <= 120px (line 150) | **<= 192px** (line 288) | ABSENT | ABSENT | ABSENT | **YES: 120 vs 192** | **<= 120px** (see below) | 120px is the perception-derived target; 192px is too high |
| **Border color delta** | N/A | >= 10 RGB (line 1642, Appendix B only) | N/A | N/A | ABSENT | ABSENT | ABSENT | N/A | **>= 15 RGB** (align with background threshold) | Border colors should follow same delta as backgrounds |

---

### Summary of Discrepancies Found

| # | Property | Values Found | Files in Conflict | Severity |
|---|----------|-------------|-------------------|----------|
| 1 | **Background color** | 10 RGB (File 08, File 42) vs 15 RGB (CLAUDE.md, pv2-file-structure, pipeline-implications, anti-reproduction-protocol) | File 08/42 vs CLAUDE.md/meta-cognitive files | **HIGH** — This is THE core threshold |
| 2 | **Letter-spacing** | 0.025em/0.4px (File 08, File 42) vs 0.03em/0.5px (CLAUDE.md, pv2-file-structure) | File 08/42 vs CLAUDE.md/meta-cognitive files | MEDIUM — 20% difference |
| 3 | **Line-height** | 0.2 (File 08, File 42, pv2-file-structure) vs 0.15 (CLAUDE.md) | CLAUDE.md alone diverges | LOW — CLAUDE.md is the outlier |
| 4 | **Font-weight** | 200 (File 42, pv2-file-structure, pipeline-implications) vs 100 (CLAUDE.md) vs "400 vs 600" (File 08) | CLAUDE.md diverges low | MEDIUM — 100 is insufficient |
| 5 | **Total boundary gap** | 120px (File 08, File 42, CLAUDE.md) vs 192px (pv2-file-structure, tokens.css proposal) | pv2-file-structure diverges high | **HIGH** — 60% difference |
| 6 | **Padding/margins** | 8px per-property (File 08, 42) vs 24px between zones (CLAUDE.md, pv2-file-structure) | Different measurement units | LOW — reconcilable (see proposed) |

---

## B) INTEGRATION MAP

For each Pipeline v2 file that mentions thresholds, the exact location, wording, gate/warning status, and verification method.

### B1. `operational-recipe.md` (File 42 → extracted into `compositional-core/grammar/operational-recipe.md`)

| Location | Exact Wording | GATE or WARNING | Programmatic or Perceptual |
|----------|--------------|-----------------|---------------------------|
| Phase 0, Step 0.6 | "Worst-case total gap... = 108px < 120px target -- PASSES" | **GATE** (blocks Phase 1 if gaps exceed 120px) | **PROGRAMMATIC** (arithmetic check) |
| Phase 3, Step 3.1 | "adjacent zones MUST differ by >= 10 RGB points on at least one channel" | **GATE** (blocks Phase 4) | **PERCEPTUAL** (perception check: "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?") |
| Phase 3, PERCEPTION CHECK | "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?" | **GATE** | **PERCEPTUAL** |
| Phase 4, Step 4.2 | "Divider margins MUST be <= 24px" | **GATE** (prevents void stacking) | **PROGRAMMATIC** (CSS value check) |
| Phase 5, Step 5.1 | "font-size: 17px... Threshold: >= 2px difference from Zone 2" | **GATE** (blocks Phase 6 if zones aren't visually distinct) | **PERCEPTUAL** ("Zone 1 text should look LARGER and more OPEN") |
| Phase 5, Step 5.1 | "line-height: 1.85... Threshold: >= 0.2 difference" | **GATE** | **PERCEPTUAL** |
| Phase 5, Step 5.1 | "letter-spacing: 0.02em... Threshold: >= 0.025em total range" | **GATE** | **PERCEPTUAL** |
| Phase 8, 8A | Full perception threshold table: bg >= 10 RGB, font-size >= 2px, font-weight >= 200, line-height >= 0.2, letter-spacing >= 0.025em, border >= 1px, margin-bottom >= 8px | **GATE** (blocks SHIP decision) | **MIXED** (computed styles = programmatic; "can you SEE" = perceptual) |
| Phase 8, 8B | "No gap exceeds 120px of blank background" | **GATE** (blocks SHIP) | **PERCEPTUAL** ("Scroll through the ENTIRE page at 1440px") |
| Phase 8, 8G | "Does each screenful look DIFFERENT from the previous one?" | **GATE** (PATCHED → FIX) | **PERCEPTUAL** |
| Appendix A | Complete threshold table with recipe values | **REFERENCE** (not a gate itself) | N/A |
| Appendix B | Deallocation criteria: letter-spacing < 0.025em, bg < 10 RGB, font-weight < 100, font-size < 1px, margin < 8px, heading color < 15 RGB, border color < 10 RGB | **GATE** (blocks deallocation if visible change detected) | **MIXED** |
| Appendix C | Quick reference: "Background: >= 10 RGB, Font-size: >= 2px" | **REFERENCE** | N/A |

### B2. `perception-thresholds.md` (NEW file, canonical source)

| Location | Exact Wording (from pv2-file-structure) | GATE or WARNING | Programmatic or Perceptual |
|----------|----------------------------------------|-----------------|---------------------------|
| Threshold Table | "Background color: >= 15 RGB points (any channel)" | **REFERENCE** (gates in other files point here) | Both |
| Threshold Table | "Font size: >= 2px between zone groups" | **REFERENCE** | Both |
| Threshold Table | "Letter-spacing: >= 0.5px (0.03em at 16px)" | **REFERENCE** | Both |
| Threshold Table | "Line-height: >= 0.2 units" | **REFERENCE** | Both |
| Threshold Table | "Padding/margins: >= 24px between zones" | **REFERENCE** | Both |
| Threshold Table | "Font-weight: >= 200 units" | **REFERENCE** | Both |
| Stacked Gap Maximum | "padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px" | **REFERENCE** | Programmatic |
| The Rule | "If a human cannot SEE the difference without a color picker, do NOT write the CSS" | **PRINCIPLE** | Perceptual |

### B3. `gate-runner.js` (NEW file, programmatic enforcement)

| Gate ID | Threshold Used | Gate Type | How Checked |
|---------|---------------|-----------|-------------|
| SC-04 | Warm palette: R >= G >= B for all backgrounds | **PROGRAMMATIC GATE** | `getComputedStyle()` on all elements, parse RGB |
| SC-09 | Background color minimum delta: >= 15 RGB adjacent zones | **PROGRAMMATIC GATE** | Compare computed background-color of adjacent `.zone-s*` sections |
| SC-10 | Stacked gap maximum: <= 192px at section boundaries | **PROGRAMMATIC GATE** | Sum `paddingBottom` + intervening margins + `paddingTop` between adjacent sections |
| SC-11 | Font-size zone differentiation: >= 2px between zone groups | **PROGRAMMATIC GATE** | Compare computed `font-size` of `p` elements across zone groups |

### B4. `~/.claude/skills/tension-composition/SKILL.md` (EXISTING — ZERO thresholds)

**Current state:** The TC skill has ZERO numeric perception thresholds. It contains:
- Mechanism deployment counts (per-category minimums)
- Spatial guardrails (940px container, 45-80 CPL)
- Tier-level mechanism targets (5/8-10/12-15/16-18)
- A metaphor quality rubric (18 points, >= 12/18 threshold)

But it has NO minimum perceptible deltas for any CSS property. A builder following TC skill alone can produce imperceptible differentiation.

**Proposed changes:** Per pv2-file-structure Section 5, the TC skill gets +72 lines including a recipe framing header before Phase 4.0. But NO perception threshold table is proposed for the TC skill itself — it routes to `operational-recipe.md` for CSS execution.

**Assessment:** This is CORRECT. TC handles metaphor derivation (Phases 0-3.5). Operational-recipe handles CSS execution (Phases 0-8). Perception thresholds belong in the execution context, not the derivation context. The handoff from TC to operational-recipe is where thresholds enter the pipeline.

### B5. `~/.claude/skills/perceptual-auditing/SKILL.md` (EXISTING — ZERO numeric thresholds)

**Current state:** The PA skill has spacing RANGE tables (line 385: heading gap 12-24px minimum to 32-64px maximum) but NO minimum perceptible delta table. It has a "would-not-ship" threshold for whitespace voids (line 160: "3-5 viewport-heights of low-content space") but this is a different kind of threshold.

**Proposed changes:** Per pv2-file-structure Section 6, the PA skill gets +56 lines:
1. Perception threshold table embedded (matching perception-thresholds.md)
2. Cross-reference to canonical source
3. Gate runner integration note

**Assessment:** CORRECT. PA auditors need the thresholds to calibrate their perceptual assessments. Without them, "does this look different?" has no numeric grounding.

### B6. `design-system/compositional-core/guidelines/semantic-rules.md` (EXISTING — ZERO thresholds)

**Current state:** Contains spatial rules (maximum consecutive empty viewport height, horizontal padding guidance, heading hierarchy) but NO perception thresholds. No mention of minimum RGB deltas, minimum font-size differences, or any perceptual science.

**Proposed changes:** Per pv2-file-structure Section 10, semantic-rules gets +25 lines expanding S-09 with stacking rule and arithmetic examples.

**Assessment:** PARTIAL. The S-09 stacking fix is correct. But semantic-rules should ALSO get a cross-reference to perception-thresholds.md, since it is Layer 6 (guidelines) and thresholds ARE guidelines. At minimum, add: "See perception-thresholds.md for minimum perceptible CSS deltas that complement these spatial rules."

### B7. `ephemeral/pipeline-analysis/CLAUDE.md` (EXISTING — contains threshold table at line 143)

**Current state:** Has its own Quick Reference Perception Threshold Table with values that DIVERGE from File 08 and File 42 (see Matrix above: 15 RGB vs 10 RGB, 0.5px vs 0.4px, >= 100 vs >= 200 for font-weight).

**Assessment:** The CLAUDE.md table was written AFTER File 08 and represents a deliberate UPGRADE of the thresholds. However, it was never reconciled with File 42, which still uses the original File 08 values. This is the source of the 10-vs-15 RGB discrepancy.

---

## C) THE 10 vs 15 RGB RESOLUTION

### The Evidence for 10 RGB (File 08, File 42)

**Source:** File 08, line 161: "Background color | >= 10 RGB points between adjacent sections"

**Derivation:** File 08 Section 3 traces the perception threshold table to the enhanced remediation spec (12-ENHANCED-REMEDIATION-SPEC.md, lines 976-983). The remediation spec prescribed "10-20 RGB points across 3 zone groups" as the working range. The >= 10 RGB threshold is the FLOOR of this range.

**Evidence:** The remediation used these values:
- Zone 1 backgrounds: warm peach (#FEF5EB range, ~254/245/235 RGB)
- Zone 2 backgrounds: cooling cream (#F8F6F3 range, ~248/246/243 RGB)
- Delta: ~6-10 RGB points between adjacent zones

**Problem:** File 23 (propagation-analysis, line 323) found that the ACTUAL remediation backgrounds differed by only 3-6 RGB between adjacent zones — BELOW the 10 RGB threshold. File 23, line 333: "the actual RGB deltas between adjacent zones are 3-6 points -- below the spec's own 10-point threshold." This means the 10 RGB minimum was SPECIFIED but not ACHIEVED, and the result (PA-05 2.5/4) reflected this shortfall.

**Argument for 10:** It is the original, traceable value from the remediation spec. It is the value builders are most likely to encounter in File 42. Using 10 maintains consistency with the recipe.

### The Evidence for 15 RGB (CLAUDE.md, meta-cognitive files)

**Source:** CLAUDE.md Quick Reference, line 143: "Background color | >= 15 RGB points on at least one channel"

**Derivation:** The CLAUDE.md was written AFTER the full analysis corpus, incorporating findings from:
- File 08, line 105 (retrospective): "backgrounds differ by 1-8 RGB points (below human perception threshold of ~15-20 RGB)"
- File 17 (decision-architecture), line 309: "Zone backgrounds differed by 1-8 RGB points (below human perception threshold of ~15-20 RGB for adjacent regions)"
- File 17, line 320: "A human's interpretation would be 15-20 RGB points"

The 15 RGB value comes from the HUMAN PERCEPTION research cited in the retrospective agents' findings. The Root Cause Analyst (Report 01) stated the threshold was "~15-20 RGB" for human perception. The CLAUDE.md adopted the floor of this range (15).

**Evidence:** The meta-cognitive files that were written with full corpus awareness (pipeline-implications, anti-reproduction-protocol, discussion-enrichment) ALL use 15 RGB, not 10. This represents the EVOLVED understanding.

**Problem:** File 31 (file-inventory-audit, line 194) notes: "Threshold table presented as authoritative without interrogating values (is 10 RGB visible on all background colors?)." File 42 cross-validation (line 123) warns: "10 RGB perception threshold may be context-dependent... warm cream backgrounds may need higher deltas than neutral backgrounds for equivalent perceptibility."

### RECOMMENDATION: **>= 15 RGB**

**Reasoning:**

1. **10 RGB proved insufficient in practice.** The remediation specified >= 10 RGB but achieved only 3-6 RGB between adjacent zones. The result was PA-05 2.5/4, with auditors still flagging imperceptible backgrounds. If the target had been 15 RGB, the builder would have needed to push harder, potentially achieving 10-12 RGB, which would have been perceptible.

2. **15 RGB has stronger empirical grounding.** The ~15-20 RGB figure comes from the retrospective's analysis of what the flagship's backgrounds SHOULD have been (the failure diagnosis), while 10 RGB comes from the remediation's prescription (which was not fully achieved). Using the failure analysis's number is more conservative.

3. **Context-dependence favors higher threshold.** The warm cream palette (R: 240-255, G: 235-250, B: 225-245) has COMPRESSED perceptual range. Warm tones within this narrow band are harder to distinguish than, say, a 10-point shift between blue and green. 15 RGB provides margin for this compression.

4. **The meta-cognitive files represent evolved understanding.** They were written AFTER all analysis files, by agents who had read the full corpus. Their consistent use of 15 RGB reflects deliberate upward revision.

5. **No evidence argues AGAINST 15.** No file in the corpus argues that 15 is TOO HIGH. File 25 challenges the values as N=1 but does not argue for lower values.

**CONFIDENCE:** Tier 2. The principle (there MUST be a minimum delta) is Tier 1 unanimous. The specific value (15 vs 10) is Tier 2 — empirically motivated but not validated by controlled human perception testing.

**ACTION:** All Pipeline v2 files should use >= 15 RGB. File 42's operational recipe should be updated from 10 to 15 during extraction into operational-recipe.md.

---

## D) MISSING THRESHOLDS

CSS properties that SHOULD have perception thresholds but DON'T appear in any source.

### D1. Properties Used in the Design System with No Threshold

| Property | Used Where | Current Behavior | Proposed Threshold | Rationale |
|----------|-----------|-----------------|-------------------|-----------|
| **box-shadow** | Soul prohibition (none !important) | Soul constraint prevents use | N/A — COVERED by prohibition | No threshold needed; property is banned |
| **opacity** | Soul prohibition (no semi-transparency) | Soul constraint prevents variation | N/A — COVERED by prohibition | No threshold needed; property is banned |
| **border-radius** | Soul prohibition (0 always) | Soul constraint prevents variation | N/A — COVERED by prohibition | No threshold needed; property is banned |
| **transform** | Not used in any recipe/spec | ABSENT from Pipeline v2 | N/A — not in vocabulary | If ever added, >= 2px translate, >= 3deg rotate |
| **animation-duration** | Only in reduced-motion override | Not a design channel | N/A — only used for accessibility | No perception threshold needed |
| **color (link states)** | Used in recipe (link hover) | Primary red -> text color | **>= 15 RGB net shift** | Align with text color threshold |
| **transition-duration** | Used in recipe (hover, scroll) | 0.1s-0.15s | **>= 0.1s for perceptible; <= 0.3s for non-sluggish** | Below 0.1s transitions are imperceptible; above 0.3s they feel slow |
| **gap (grid)** | Used in recipe (content-pair, content-grid) | `var(--space-4)` = 16px | **>= 8px** (align with margin threshold) | Grid gaps below 8px look like rendering errors, not design |
| **outline-width** | Used for focus-visible | 3px solid primary | **>= 2px** | WCAG 2.1 SC 2.4.7 requires "clearly visible" focus indicators |
| **text-indent / first-line styles** | Not used | ABSENT | N/A | Not in vocabulary |

### D2. Properties Where Threshold Exists But Is Incomplete

| Property | What's Defined | What's Missing | Proposed Addition |
|----------|---------------|----------------|-------------------|
| **Background color** | >= 15 RGB between adjacent zones | No threshold for WITHIN-zone variation (e.g., S1 vs S2 within Zone 1) | Within-zone: >= 5 RGB (subtle but perceptible as texture, not zone shift) |
| **Letter-spacing** | >= 0.03em total range | No threshold for NEGATIVE letter-spacing floor | Minimum letter-spacing: >= -0.02em (tighter than this causes character collision at 14-15px) |
| **Font-size** | >= 2px between zone groups | No threshold for heading-to-body ratio | Heading:body ratio >= 1.4x (e.g., 28px h2 / 16px p = 1.75x — PASSES) |
| **Margin-bottom** | >= 8px between zone groups | No threshold for heading-to-paragraph spacing ratio | Heading margin-top / paragraph margin-bottom >= 1.5x (hierarchy signal) |
| **Border color** | >= 10 RGB in Appendix B deallocation | Not in main threshold table | Add to main table: border color >= 15 RGB (align with background) |

### D3. Interaction Effects (No Single-Property Threshold Captures These)

| Effect | What Happens | Why Current Thresholds Miss It | Proposed Gate |
|--------|-------------|-------------------------------|---------------|
| **Cumulative sub-perceptual** | Multiple properties each at threshold-floor create "uncanny valley" | Each passes individually; together they feel mechanical not designed | **Multi-channel gate:** At least 2 of the shifting properties must exceed 1.5x the minimum threshold |
| **Warm-cool perception asymmetry** | 10 RGB shift in warm tones is less visible than 10 RGB in cool tones | Threshold is property-only, not context-aware | **Context note in perception-thresholds.md:** "Warm palette deltas need 1.3-1.5x the stated minimum" |
| **Scroll-speed perception** | Fast scrolling makes small deltas invisible that are visible at rest | Thresholds assume static viewing | **Phase 8G gate already covers this:** "Scroll at normal speed — does each screenful look DIFFERENT?" |
| **Adjacent vs non-adjacent** | S1-to-S2 needs smaller delta than S1-to-S5 | File 08 only defines adjacent thresholds | **Proposed:** Non-adjacent zone groups should have 2x the adjacent threshold |

---

## E) ADDITIONAL DISCREPANCIES AND RECONCILIATION

### E1. The 120px vs 192px Total Gap Discrepancy

**120px sources:** File 08 (line 251), File 42 (lines 1277, 1282), CLAUDE.md (line 150), pipeline-implications, hidden-questions, file-42-cross-validation.

**192px source:** pv2-file-structure (line 288: "padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 192px") and tokens.css proposal (`--space-max-stacked: 192px`).

**Analysis:** These are measuring DIFFERENT THINGS:
- **120px** = maximum CONTENT-FREE gap (blank space between last content element of section N and first content element of section N+1). This includes section padding + divider margins + divider height.
- **192px** = maximum STRUCTURAL gap (section padding-bottom + margin collapse + section padding-top). This is a LOOSER cap that allows content within the gap (bridge prose, dividers).

**RECOMMENDATION:** Use BOTH:
- **<= 120px** for content-free gap (the perceptual target — no blank region larger than 120px)
- **<= 192px** as a structural sanity check (no combination of CSS properties can stack higher than this, even with content in between)

The 120px gate belongs in Phase 8B (perceptual). The 192px gate belongs in gate-runner.js (programmatic).

### E2. The 0.025em vs 0.03em Letter-Spacing Discrepancy

**0.025em sources:** File 08 (line 162: "0.025em = 0.4px at 16px"), File 42 (lines 1267, 1615), multiple analysis files.

**0.03em sources:** CLAUDE.md (line 145: "0.5px at 16px base = 0.03em"), pv2-file-structure (line 273).

**Analysis:** These represent the same intent at different precision levels:
- 0.025em at 16px = 0.4px
- 0.03em at 16px = 0.48px
- CLAUDE.md states "0.5px" which rounds up

**RECOMMENDATION:** Use **>= 0.03em** as the pipeline standard. Reasoning: 0.025em (0.4px) is sub-pixel on most displays. 0.03em (0.48px) rounds to 0.5px on standard displays, making it the first reliably visible increment. The CLAUDE.md's upward revision is correct.

### E3. The 100 vs 200 Font-Weight Discrepancy

**>= 100 source:** CLAUDE.md (line 149).
**>= 200 sources:** File 42 (line 1618, pipeline-implications line 1017), pv2-file-structure (line 276).
**"400 vs 600" source:** File 08 (line 165) — describes the recipe's ACTUAL values, not the minimum.

**Analysis:** Font-weight 400 to 500 is a barely perceptible change in most body fonts (Inter includes 400 and 500 weights, but the visual difference is subtle at 14-16px). Font-weight 400 to 600 is clearly visible. 100-unit jumps are only reliable at the extremes (100→200 thin→extra-light, 800→900 extra-bold→black).

**RECOMMENDATION:** Use **>= 200** as the pipeline standard. A 100-unit jump is perceptible only in limited contexts; 200 is reliably visible across all weight ranges. File 42 and pipeline-implications agree on 200.

---

## F) CONSOLIDATED PIPELINE V2 THRESHOLD TABLE (PROPOSED)

This is the AUTHORITATIVE table that should be embedded in `perception-thresholds.md` and propagated to all downstream files.

| Property | Minimum Perceptible Delta | Sub-Perceptual (DO NOT WRITE) | Confidence | Source |
|----------|--------------------------|-------------------------------|------------|--------|
| Background color (adjacent zones) | **>= 15 RGB points** on at least one channel | < 15 RGB | Tier 2 | File 08 (15-20 range), CLAUDE.md, pv2-file-structure |
| Background color (within zone) | >= 5 RGB points | < 5 RGB | Tier 3 | Extrapolated from adjacent threshold |
| Font-size (zone groups) | **>= 2px** | < 2px | Tier 1 | Unanimous: File 08, 42, CLAUDE.md, pv2-file-structure |
| Letter-spacing (zone range) | **>= 0.03em** (0.48px at 16px) | < 0.03em | Tier 2 | CLAUDE.md (rounded up from File 08's 0.025em) |
| Line-height (zone groups) | **>= 0.2 units** | < 0.2 | Tier 2 | File 08, File 42, pv2-file-structure |
| Font-weight (zone groups) | **>= 200 units** | < 200 | Tier 2 | File 42, pv2-file-structure, pipeline-implications |
| Border weight (hierarchy levels) | **>= 1px** | N/A | Tier 1 | Unanimous |
| Margin-bottom (zone groups) | **>= 8px** | < 8px | Tier 2 | File 08, File 42 |
| Max-width (zone groups) | **>= 6ch** | < 6ch | Tier 2 | File 08, File 42 |
| Text color (zone groups) | **>= 15 RGB points** net | < 15 RGB | Tier 2 | File 42 |
| Border color (hierarchy levels) | **>= 15 RGB points** | < 15 RGB | Tier 3 | Aligned with background threshold |
| Total content-free gap | **<= 120px** | > 120px | Tier 1 | File 08, File 42, CLAUDE.md |
| Total structural gap | **<= 192px** | > 192px | Tier 2 | pv2-file-structure |
| Transition duration | **>= 0.1s, <= 0.3s** | < 0.1s or > 0.3s | Tier 3 | New — extrapolated from UX research |
| Grid gap | **>= 8px** | < 8px | Tier 3 | Aligned with margin threshold |

### Warm Palette Enforcement (applies to ALL background colors)
ALL backgrounds MUST satisfy **R >= G >= B**.
Common violations and their warm replacements:
- #FAFAFA (R=G=B=250) → #FAF8F5 (250/248/245)
- #F8F8F8 (R=G=B=248) → #F8F6F3 (248/246/243)
- #F0F0F0 (R=G=B=240) → #F2EFEA (242/239/234)

---

## G) PROPAGATION PLAN

When Pipeline v2 is codified, these thresholds must appear in these files with these exact values:

| File | What to Include | Update Needed |
|------|----------------|---------------|
| `perception-thresholds.md` (NEW) | **FULL TABLE F** (canonical source) | Create with Table F values |
| `operational-recipe.md` (NEW, from File 42) | Phase 3: **>= 15 RGB** (updated from 10), Phase 5: font-size >= 2px, letter-spacing >= 0.03em, Phase 8A: full table reference | Update bg threshold from 10 to 15 during extraction |
| `gate-runner.js` (NEW) | SC-09: **>= 15 RGB** (updated from 10), SC-10: <= 192px structural, SC-11: font-size >= 2px | Create with Table F values |
| `perceptual-auditing/SKILL.md` (EDIT) | Embed threshold table (copy from perception-thresholds.md) | Insert ~30 lines after line 363 |
| `tension-composition/SKILL.md` (EDIT) | No threshold table (routes to operational-recipe.md) | No threshold edits needed |
| `semantic-rules.md` (EDIT) | S-09 stacking: <= 120px content-free gap + <= 192px structural gap | Add stacking rule expansion |
| `tokens.css` (EDIT) | `--space-max-stacked: 192px` | Add token |
| `compositional-core/CLAUDE.md` (EDIT) | Cross-reference to perception-thresholds.md in builder routing | Add 1-line pointer |

---

**END OF THRESHOLD MAP**

**Total: ~350 lines. 7 sections (A-G). 6 discrepancies identified and resolved. 10 missing thresholds proposed. 1 consolidated table (Table F) with 15 entries. Propagation plan for 8 files.**
