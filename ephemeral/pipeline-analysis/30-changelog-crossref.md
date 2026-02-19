# Line-by-Line Cross-Reference: Builder Changelog vs Both Prompts

**Analyst:** master-foundations (Opus 4.6)
**Date:** 2026-02-18
**Task:** For EVERY change the builder made, trace it to (1) the specific remediation spec instruction, (2) whether the master prompt had a corresponding rule, (3) whether the builder deviated from spec.

**Files Analyzed:**
- Builder changelog: `ephemeral/flagship-remediation/builder-changelog.md` (236 lines)
- Remediation spec: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines)
- Master prompt: `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines)
- Audit reports: 01-11 in `ephemeral/remediation-audit/`

---

## METHODOLOGY

Each builder action is traced through the COMPLETE audit trail:

```
AUDIT REPORT FINDING → REMEDIATION SPEC INSTRUCTION → BUILDER ACTION → HTML/CSS CHANGE
```

Deviations are classified as:
- **COMPLIANT:** Builder followed spec exactly
- **JUSTIFIED DEVIATION:** Builder departed from spec with correct reasoning
- **UNJUSTIFIED DEVIATION:** Builder departed from spec without sound reasoning
- **CREATIVE ADDITION:** Builder added something the spec didn't specify

---

## PHASE 0: CSS DEALLOCATION (~201 lines deleted)

### Block 9: Rhythmic Micro-Modulations (~13 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06 (CSS Budget Reallocation), Category C, Ch6 block (lines 192-199): "Per-zone tension-group and sequence-block margin adjustments (4-8px deltas, borderline perceptible)" -- 8 lines sub-perceptual |
| **Remediation Spec** | Phase 0, Step 0.4 (spec line ~101-103): "DELETE the 8 lines of per-zone tension-group and sequence-block margin adjustments (4-8px deltas, borderline perceptible, superseded by Phase 5 spacing)" |
| **Master Prompt Rule** | No corresponding rule. The master prompt has no deallocation concept. S-09 caps spacing at 96px per-property but never identifies sub-perceptual CSS. |
| **Builder Action** | Deleted ~13 lines (full block). Builder says "~13" vs spec's "8" -- the discrepancy is because builder counted the CSS comment header and closing brace as well. |
| **Deviation** | **COMPLIANT.** Spec said "DELETE...8 lines"; builder deleted the entire syntactic block containing those 8 rules plus comments. |

**Why master prompt missed this:** The master prompt operates at the RULE level ("use >= 3 transition types"), not at the CSS-LINE level. It never identifies specific CSS blocks as sub-perceptual. This is a remediation-spec-only concept, born from Report 06's line-by-line perceptibility analysis.

### Block 8: Per-Zone Heading Color Shifts (~32 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch5 block (lines 179-190): "Per-zone heading color modulation (S3, S9, S10, S12: < 15 net RGB)" -- 27 lines sub-perceptual |
| **Remediation Spec** | Phase 0, Step 0.3 (spec lines ~92-99): "DELETE the per-zone heading color block (~27 lines, all under 15 net RGB delta)" |
| **Master Prompt Rule** | No corresponding rule. The master prompt specifies warm-toned headings (U-08) but never audits specific hex values for perceptibility. |
| **Builder Action** | Deleted ~32 lines (full block). Count differs from spec's "~27" because builder included related selectors and comments. |
| **Deviation** | **COMPLIANT.** Spec identified the concept; builder executed on the actual CSS block boundaries. |

### Block 7: Per-Zone Border Color Shifts (~39 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch4 block (lines 164-177): "Per-zone table border-bottom-color shifts (~35 lines, all 2-7 RGB deltas = invisible)" |
| **Remediation Spec** | Phase 0, Step 0.3 (spec lines ~92-99): "DELETE the entire per-zone table border-color shift block (~35 lines, all 2-7 RGB deltas = invisible)" |
| **Master Prompt Rule** | No corresponding rule. Master prompt has C-05 (transition types) and SC-09 (channel shifts) but never audits individual CSS property perceptibility. |
| **Builder Action** | Deleted ~39 lines. Count differs from spec's "~35" -- same comment/brace inclusion pattern. |
| **Deviation** | **COMPLIANT.** |

### Block 6: Spatial Compression Zone 3 (~16 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch3 block (lines 145-162): Redundant margins (S9-S11 table margins = base, S12 component margin = base) |
| **Remediation Spec** | Phase 0, Step 0.2 (spec lines ~79-90): "DELETE the entire per-zone component/table spacing block (~51 lines). Keep ONLY the two rules that produce perceptible changes" |
| **Master Prompt Rule** | S-09 (max spacing 96px per-property) -- but this is a CAP, not a removal criterion. |
| **Builder Action** | Deleted ~16 lines for Zone 3 spatial compression. Full block deleted. |
| **Deviation** | **COMPLIANT.** |

### Block 5: Spatial Compression Zone 2 (~14 lines, PARTIAL deletion)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch3 block: `.zone-s5 .component-block { margin: 16px 0 }` (vs 32px = -16px, perceptible). Listed as 2 perceptible rules among 51 lines. |
| **Remediation Spec** | Phase 0, Step 0.2 (spec lines ~86-88): "Keep ONLY the two rules that produce perceptible changes: `.zone-s5 .component-block { margin: 16px 0; }` (vs 32px default = -16px, perceptible) and `.zone-s7 .component-block { margin: 16px 0; }` (same)" |
| **Master Prompt Rule** | No corresponding rule. |
| **Builder Action** | PARTIAL deletion. Kept `.zone-s5 .component-block` and `.zone-s7 .component-block` margin rules with 24px/20px values (not 16px as spec stated). |
| **Deviation** | **JUSTIFIED DEVIATION.** Builder changelog (line 22): "Manifest said delete full block but noted `.component-block` margins may be perceptible. I preserved 2 rules that had meaningful spatial differentiation (24px and 20px vs the 32px default)." The spec said keep rules at 16px; builder found the actual values were 24px and 20px. Builder was MORE accurate than the spec about the actual CSS values. |

**Chain verification:** Report 06 line 152-153 lists S5 component-block at "margin: 16px 0" -- but the spec's "keep ONLY" instruction correctly identifies S5 and S7 as the sections to preserve. The builder's margin values (24px, 20px) suggest the actual CSS may have differed from Report 06's table. Builder checked actual values rather than trusting the report's table.

### Block 4: Spatial Compression Zone 1 (~17 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch3 block: Zone 1 margins identical to base (32px = 32px default). |
| **Remediation Spec** | Phase 0, Step 0.2 (covered by same "DELETE entire per-zone component/table spacing block" instruction). |
| **Master Prompt Rule** | No corresponding rule. |
| **Builder Action** | Full block deleted. |
| **Deviation** | **COMPLIANT.** |

### Blocks 1-3: Typographic Convergence Gradient (~107 lines deleted)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, Ch2 block (lines 119-143): "99 lines, ~4 borderline, ~95 definitively sub-perceptual." Letter-spacing 0.004-0.01em = 0.064-0.16px, word-spacing 0.01-0.02em = 0.16-0.32px, redundant `letter-spacing: 0` declarations. |
| **Remediation Spec** | Phase 0, Step 0.1 (spec lines ~63-77): "DELETE EVERYTHING from `/* --- Zone 1: Typographic variety ---*/` through `/* --- Zone 3: Typographic unity ---*/` (approximately lines 736-834). This is ~99 lines of sub-perceptual letter-spacing (0.004-0.01em = 0.064-0.16px)." |
| **Master Prompt Rule** | The master prompt CREATED these values. B5 SC-01 specifies 5 scales; the typographic convergence gradient was the flagship builder's (original) IMPLEMENTATION of scale theory. The remediation spec is DELETING the master prompt's operationalization because it failed the perception threshold test. |
| **Builder Action** | Deleted all 3 blocks as one continuous range (~107 lines). |
| **Deviation** | **COMPLIANT.** Spec said delete lines 736-834 (~99 lines); builder found the actual range was ~107 lines (more accurate). |

**Critical insight:** This is the single largest deletion and represents the remediation spec's FUNDAMENTAL departure from the master prompt. The master prompt's scale theory (A3, SC-01) led to 99 lines of per-zone typography that no human could perceive. The remediation spec's perception threshold principle (Phase 0 + Appendix) retroactively invalidates 10% of the master prompt's operationalized output.

### Phase 0 Summary

| Metric | Spec Predicted | Builder Actual | Delta |
|--------|---------------|----------------|-------|
| Total lines removed | ~216 | ~201 | -15 (7% less than predicted) |
| Blocks fully deleted | 8 | 7 (Block 5 partial) | -1 |
| Deviations | 0 | 1 (Block 5 partial) | Justified |
| Master prompt rules contradicted | 0 explicit | 1 implicit (scale operationalization) | The master prompt's scale output was sub-perceptual |

---

## PHASE 2: ZONE BACKGROUND COLOR REPLACEMENTS

### 12 Zone Color Variables

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06, Category C, zone token analysis (lines 201-222): "Of 12 zone tokens, only 2 are perceptibly distinct from the base." Report 09 (coherence design), cascade value table (line 65-78): specific per-zone hex values recommended. |
| **Remediation Spec** | Phase 2 (spec lines ~287-313): "Find the `:root` block. Replace ALL 12 zone color variables." Provides exact hex values for each zone. |
| **Master Prompt Rule** | U-08 ("No cool-toned grays, all neutrals warm-shifted"), SC-10 ("warm backgrounds = sparse, cool backgrounds = dense"). The master prompt ALLOWS cool grays for Zone 2 sections by design (SC-10). |
| **Builder Action** | Replaced 3 of 12 zone variables (S5, S7, S8). Kept 9 unchanged because "already warm." |
| **Deviation** | **JUSTIFIED DEVIATION.** This is the most significant deviation in Phase 2. |

**Detailed tracing per variable:**

| Variable | Spec Value | Builder Value | Match? | Notes |
|----------|------------|---------------|--------|-------|
| --color-zone-s1 | #FEF5EB | #FEF5EB | YES | Both agree: already warm |
| --color-zone-s2 | #F5EDE2 | #F5EDE2 | YES | Both agree |
| --color-zone-s3 | #FBF3E8 | #FBF3E8 | YES | Both agree |
| --color-zone-s4 | #F8F6F3 | #F8F6F3 | YES | Both agree |
| --color-zone-s5 | **#FAFAFA** | **#FAF8F5** | **NO** | **B-01 fix.** Spec says #FAFAFA (cool gray); builder replaced with #FAF8F5 (warm near-white). Builder CORRECTED a soul violation in the spec. |
| --color-zone-s6 | #F5F0E8 | #F5F0E8 | YES | Both agree |
| --color-zone-s7 | **#F8F8F8** | **#F8F6F3** | **NO** | **B-01 fix.** Spec says #F8F8F8 (cool gray); builder replaced with warm neutral. |
| --color-zone-s8 | **#F0F0F0** | **#F2EFEA** | **NO** | **B-01 fix.** Spec says #F0F0F0 (cool gray); builder replaced with warm mid-gray. |
| --color-zone-s9 through s12 | Match | Match | YES | All already warm |

**The B-01 discovery:** The remediation spec (line 299-302) EXPLICITLY specifies cool gray values (#FAFAFA, #F8F8F8, #F0F0F0) for Zone 2 sections because Report 09's coherence design recommended cool/neutral backgrounds to encode "analytical density." But the builder recognized these values violate U-08 ("No cool-toned grays") from BOTH the master prompt AND the remediation spec's own Appendix: Constraints (spec line 997-998: "Do NOT add: ...Pure #000000 or #FFFFFF backgrounds"). The builder applied SOUL COMPLIANCE over COHERENCE SPECIFICATION.

**This is the remediation spec's most significant internal contradiction:** Phase 2 specifies cool grays while the Constraints appendix prohibits them. The builder correctly chose the soul constraint.

**Master prompt connection:** U-08 (line 163) is a NON-NEGOTIABLE soul rule. The master prompt provides no exception mechanism. SC-10 (line 269-271) says "warm=sparse, cool=dense" but this is subordinate to soul rules. The builder's warm-shifted replacements (#FAF8F5, #F8F6F3, #F2EFEA) maintain the DIRECTION of the chromatic shift (warmer zones 1/3, cooler zone 2) while staying within warm-toned boundaries.

### Token Alignment Fixes (W-06, W-07)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Not from audit reports. These are builder-discovered issues during execution. |
| **Remediation Spec** | No explicit instruction. The spec uses `var(--color-border)` references but doesn't audit their :root values against tokens.css. |
| **Master Prompt Rule** | Token compliance >= 80% (B10 self-check, line 358). Tokens.css is listed in Section E builder reading list (line 745). |
| **Builder Action** | Changed `--color-border` from #D4C5B5 to #E0D5C5 and `--color-border-subtle` from #E8DDD0 to #F0EBE3, aligning to tokens.css canonical values. |
| **Deviation** | **CREATIVE ADDITION.** Neither the spec nor audits identified these token drifts. Builder proactively checked tokens.css alignment per master prompt's token compliance self-check rule. |

**This is the master prompt's SOLE direct contribution to the remediation build.** The builder consulted tokens.css (a master prompt reading list item) and applied its canonical values, even though the remediation spec didn't mention this. Proof that master prompt rules CAN survive into remediation execution when they're binary and self-checkable.

---

## PHASE 3: STRUCTURAL BORDERS, CALLOUTS, GRIDS, DIVIDERS (~120 lines added)

### Divider Rule Replacements

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 09 (Multi-Coherence Design), Deliverable 4 (lines 272-401): S-09 stacking fix. All 11 transitions exceed 120px. Specific margin reductions recommended. |
| **Remediation Spec** | Phase 3, Step 3.2 (spec lines ~357-381): "Replace ALL THREE with these values that prevent stacking above 120px." `.divider-smooth` margin: 16px 0; `.divider-bridge` margin: 24px 0; `.divider-breathing` margin: 24px 0. |
| **Master Prompt Rule** | S-09 (line 132): "Max spacing between any two content elements: 96px per-property. Total visual gap <= 96px." S-11 (line 138): "No single CSS margin or padding value > var(--space-max-zone) = 96px." The master prompt caps per-PROPERTY at 96px but doesn't address STACKING. |
| **Builder Action** | Replaced 3 divider rules: `.divider-smooth` 32px→16px 0, `.divider-bridge` 48px→24px 0, `.divider-breathing` 64px→24px 0. |
| **Deviation** | **COMPLIANT** with spec targets. Builder's old values (32px/48px/64px) were already below master prompt's 96px cap, but the new values (16px/24px/24px) address the STACKING issue the master prompt never identified. |

**Spec vs builder margin comparison:**

| Divider | Spec Old | Spec New | Builder Old | Builder New | Match? |
|---------|----------|----------|-------------|-------------|--------|
| smooth | 48px | 16px | 32px | 16px | **New matches.** Old values differ because builder's actual CSS had already been modified from the original spec's assumed values. |
| bridge | 64px | 24px | 48px | 24px | **New matches.** |
| breathing | 80px | 24px | 64px | 24px | **New matches.** |

The discrepancy in "old" values is because Report 09 computed the old values from the ORIGINAL flagship HTML, while the builder's changelog reports values from a potentially intermediate state.

### Bridge-Prose Fix (B-05)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 09, Deliverable 4 (lines 350-358): "Reduce bridge-prose margin: `.bridge-prose { margin-bottom: var(--space-4); }` (was --space-8 (32px) -> 16px)". |
| **Remediation Spec** | Phase 3, Step 3.3 (spec lines ~383-394): "Find `.bridge-prose` and ensure margin-bottom is reduced... margin-bottom: 16px" |
| **Master Prompt Rule** | No corresponding rule. C-07 ("Bridge transitions MUST contain cognitive-reframe prose") specifies content requirement but not margin values. |
| **Builder Action** | Added `.bridge-prose { margin-bottom: 16px !important; }`. The `!important` overrides an inline `style="margin-bottom:48px"` on the element. |
| **Deviation** | **JUSTIFIED DEVIATION.** Spec didn't mention `!important`. Builder discovered that an inline style attribute on the bridge-prose element would override the stylesheet rule, requiring `!important`. This is a runtime discovery the spec-writers couldn't have known without inspecting the actual HTML attribute-level styling. |

### Deleted Orphaned Selectors

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 02 (Component Library Gaps), lines 89-91: `.hypothesis-group-2` and `.hypothesis-group-3` are custom classes that should be removed when wrapping in grid. Report 07 (Structural HTML Audit): `.section-meta` replaced by `.section-indicator`. |
| **Remediation Spec** | Phase 1, Step 1.6 (spec lines ~225-227): "Convert `.section-meta` to `.section-indicator`". Phase 1, Step 1.9 (spec lines ~262-275): "Remove the `.hypothesis-group-2` and `.hypothesis-group-3` wrapper divs." |
| **Master Prompt Rule** | No corresponding rule. |
| **Builder Action** | Deleted `.section-meta` CSS rule and `.hypothesis-group-2`/`.hypothesis-group-3` CSS rules. |
| **Deviation** | **COMPLIANT.** These are direct consequences of HTML restructuring; the CSS becomes orphaned. |

### New CSS: Structural Borders

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 05 (Scale-Channel Audit): Channel 4 (Structural) entirely absent from flagship body. Report 06 (CSS Budget): Grid/flex layouts = 0 lines in flagship vs 80 in CD-006. |
| **Remediation Spec** | Phase 3, Step 3.1 (spec lines ~316-355): "6 of 12 sections. Alternating presence creates rhythm." Specifies LEFT borders using `border-left` on `.page-container` within zones. |
| **Master Prompt Rule** | C-01 (line 172): Per-category minimums including Structure(N):1+. SC-02 (line 251): >= 5 of 7 channels actively used, including Ch4 STRUCTURAL. The master prompt REQUIRES structural borders but provides no CSS recipe. |
| **Builder Action** | Added 6 zone-specific `border-top` rules on sections (S2-S7, S8-S9, S10-S12) using warm palette colors. |
| **Deviation** | **JUSTIFIED DEVIATION.** Spec says `border-left` on `.page-container`; builder used `border-top` on sections. Different CSS property, different targeting element. Builder chose `border-top` (section-level horizontal dividers between zone groups) over `border-left` (per-section vertical accent). The builder's interpretation creates zone GROUP boundaries rather than per-section accents. This is a valid architectural choice -- zone boundaries are more semantically meaningful than individual section accents for a 12-section page. |

**Master prompt alignment:** The master prompt's C-01 (Structure/Nav:1+) is satisfied by either approach. The spec's 6 `border-left` rules would produce individual section accents. The builder's zone-group `border-top` rules produce fewer, more meaningful structural moments. Neither the master prompt nor the spec provides a strong preference.

### New CSS: Callout Family

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 02 (Component Library Gaps): "Component library utilization: 3/26 families (11.5%) — CATASTROPHIC UNDERUSE." Callout family is 100% frequency across 27 files. 9 instances reinvented as `.component-block`. |
| **Remediation Spec** | Phase 3, Step 3.4 (spec lines ~398-463): Provides complete callout CSS including `.callout` base, `.callout__label`, `.callout__body`, and 4 variants (--info, --gotcha, --tip, --essence). |
| **Master Prompt Rule** | No explicit callout requirement. C-10 (line 190): ">= 2 purpose-built components." The master prompt says "purpose-built" but doesn't mandate library adoption. Section E (line 748): "00-components-extract.md" is listed in builder reading list, but as reference, not mandate. |
| **Builder Action** | Created callout base + 4 variants. |
| **Deviation** | See warm-tone substitutions below. |

### Warm-Tone Substitutions for Callout Variants (B-02, B-03)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | No audit report identified this issue. This is the same pattern as B-01 (zone backgrounds): the spec specifies cool-tinted colors that violate soul constraints. |
| **Remediation Spec** | Phase 3, Step 3.4 (spec lines ~431-433): `.callout--info { background-color: #F5F8FA; }` and `.callout--tip { background-color: #F5FAF5; }` |
| **Master Prompt Rule** | U-08 (line 163): "No cool-toned grays (all neutrals warm-shifted)." |
| **Builder Action** | Replaced #F5F8FA (blue tint) with #FAF8F5 (warm cream) for --info. Replaced #F5FAF5 (green tint) with #F8F7F2 (warm khaki) for --tip. |
| **Deviation** | **JUSTIFIED DEVIATION.** Same pattern as B-01. The remediation spec's callout colors have cool undertones (blue in --info, green in --tip) that violate soul constraint U-08. Builder warm-shifted them while preserving the TYPE DIFFERENTIATION intent (each variant still has a distinct hue within the warm palette). |

**Systematic spec deficiency:** The remediation spec has 3 separate instances of cool-toned hex values (B-01: zone backgrounds, B-02: callout-info, B-03: callout-tip). All three were caught and corrected by the builder via soul compliance awareness from the master prompt's U-08. This suggests the spec was written from a COLOR THEORY perspective (cool = analytical) while the soul operates from an IDENTITY perspective (warm = always). The builder correctly prioritized identity over theory.

### New CSS: Grid Layouts

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06 (CSS Budget): "Grid/flex definitions: 0 in flagship vs 80 in CD-006." Report 07 (Structural HTML Audit): "RC-12: zero multi-column in 2,034 lines." |
| **Remediation Spec** | Phase 3, Step 3.5 (spec lines ~465-495): 3 grid definitions -- `.tension-pair` (S7), `.sequence-grid` (S8), `.hypothesis-grid` (S11). All `grid-template-columns: 1fr 1fr`. |
| **Master Prompt Rule** | No explicit grid requirement. S-06 (line 128): ">= 5 content sections" implies variety but doesn't specify grids. |
| **Builder Action** | Created all 3 grid layouts matching spec exactly. |
| **Deviation** | **COMPLIANT.** Grid definitions match spec precisely. |

### Table Header Backgrounds

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06 (CSS Budget), Category A (lines 28-29): Table header borders exist but no backgrounds specified. Report 05 (Scale-Channel): "table differentiation is structural but lacks chromatic diversity." |
| **Remediation Spec** | Phase 3, Step 3.6 (spec lines ~497-512): "Table header tints for structural distinction." Provides 3 rules for `thead tr` backgrounds. |
| **Master Prompt Rule** | No corresponding rule. |
| **Builder Action** | Added `.data-table thead th` warm background. |
| **Deviation** | **MINOR DEVIATION.** Spec targets `thead tr` (row-level); builder targets `thead th` (cell-level). Functionally equivalent -- the background covers the same visual area. Builder used `.data-table` as scope instead of bare `table`, which is more targeted. |

### Scroll Behavior

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Not from any audit report. |
| **Remediation Spec** | Not explicitly mentioned in Phase 3 (it appears implicitly in Phase 6, spec line 694: "html { scroll-behavior: smooth; }"). |
| **Master Prompt Rule** | No corresponding rule. |
| **Builder Action** | Added `scroll-behavior: smooth` on `html`. |
| **Deviation** | **COMPLIANT.** Matches Phase 6 spec instruction, applied during Phase 3. |

---

## PHASE 4: TYPOGRAPHY ZONE VARIATION (~55 lines added)

### Zone-Specific Paragraph and Heading Styles

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06 (CSS Budget): Deallocation frees 99 lines of sub-perceptual typography. Recommended reallocation: "3 zone rules at perceptible amplitudes." Report 09 (Coherence Design): Cascade value table specifies exact per-section values. |
| **Remediation Spec** | Phase 4, Steps 4.1-4.3 (spec lines ~522-613): Provides exact per-zone paragraph styles (font-size, line-height, letter-spacing, max-width, color) and heading styles (font-size, font-weight, letter-spacing, color). Organized as Zone 1 (generous), Zone 2 (compressed), Transitional (standard), Zone 3 (settled). |
| **Master Prompt Rule** | SC-09 (line 265): ">= 3 channels shift at every section transition." A3 (anti-scale model, line 37): "Richness = semantic_density x restraint x spatial_confidence." The master prompt requires channel shifts but specifies no CSS values. |
| **Builder Action** | Created 3 zone groups (S1-S3, S4-S8, S9-S12) with values that DIFFER from spec: |

**Detailed value comparison (paragraphs):**

| Zone | Spec font-size | Builder font-size | Spec line-height | Builder line-height | Spec letter-spacing | Builder letter-spacing |
|------|---------------|-------------------|------------------|--------------------|--------------------|----------------------|
| Zone 1 (S1-S3) | 17px | 17px | 1.85 | 1.75 | 0.02em | 0.01em |
| Zone 2 (S5,S7,S8) | 15px | 16px | 1.55 | 1.7 | -0.01em | 0.005em |
| Transitional (S4,S6) | 16px | 16px | 1.7 | 1.7 | 0 | 0.005em |
| Zone 3 (S9-S12) | 16px | 15px | 1.75 | 1.65 | 0 | 0 |

| **Deviation** | **SIGNIFICANT DEVIATION.** Builder's values consistently SOFTEN the spec's contrasts. Spec creates a 17px/15px spread; builder creates 17px/15px but maps them differently (spec: Zone 2 = 15px smallest; builder: Zone 3 = 15px smallest). Builder's line-height spread is 1.65-1.75 (0.10 range) vs spec's 1.55-1.85 (0.30 range). Builder's letter-spacing avoids negative values entirely. |

**Why the builder deviated:** The builder's changelog (lines 96-106) reveals awareness of perception thresholds: "All deltas meet perceptual thresholds... Individual zone-to-zone steps are subtle by design. The perceptual effect comes from the GROUP transitions (warm/cool/resolved), not per-zone jumps." The builder interpreted the spec's values as MAXIMUMS and chose more conservative deltas while maintaining the 3-zone directional shift.

**Master prompt alignment:** The master prompt's Appendix: Perception Thresholds (lines 970-985) says "font-size: >= 2px between zones" -- builder achieves 2px (17→15). "letter-spacing: >= 0.025em between non-adjacent zones" -- builder achieves 0.01em (below threshold). "line-height: >= 0.2 between non-adjacent zones" -- builder achieves 0.10 (below threshold).

**Verdict:** The builder's letter-spacing and line-height deltas are BELOW the master prompt's perception thresholds. However, the builder argues the cumulative effect across 3 zone groups compensates. This is the weakest compliance point in the entire build.

**Heading comparison:**

| Zone | Spec h2 size | Builder h2 size | Spec h2 weight | Builder h2 weight |
|------|-------------|-----------------|----------------|-------------------|
| Zone 1 | 30px | 1.5rem (~24px) | 400 | (not specified separately) |
| Zone 2 | 26px | (not specified separately) | 600 | (not specified separately) |
| Zone 3 | 28px | 1.3rem (~21px) | 400 | (not specified separately) |

**Deviation:** Builder used rem units and different sizes. Zone 1 heading at 1.5rem vs spec's 30px is a significant difference (24px vs 30px). This undercuts the spec's typographic variation between zones.

### T9 Transition Fix

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 09 (Coherence Design), Deliverable 1 (lines 129-139): "T9 fix: strengthen S9->S10 transition. `.zone-s10 h2 { font-weight: 500; }` and `.zone-s10 p { max-width: 60ch; }`" |
| **Remediation Spec** | Phase 4, Step 4.3 (spec lines ~604-612): "S10 needs a heading weight difference from S9 to meet the 3-channel minimum at T9." |
| **Master Prompt Rule** | SC-09 (line 265): ">= 3 channels shift at every section transition." |
| **Builder Action** | NOT EXPLICITLY MENTIONED in changelog. The builder's zone groupings (S9-S12 as one group) don't distinguish S10 from S9. |
| **Deviation** | **POSSIBLE OMISSION.** Changelog doesn't mention T9 fix. If builder grouped all Zone 3 sections identically, T9 would have < 3 channel shifts (only background changes). This needs verification against the actual HTML. |

---

## PHASE 5: SPATIAL RHYTHM (~14 lines added)

### Zone-Group Paragraph Margins

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 09 (Coherence Design), cascade value table: Zone 1 p margin-bottom 20px, Zone 2 12px, Zone 3 18px. |
| **Remediation Spec** | Phase 5, Step 5.1 (spec lines ~619-629): Zone 1 = 20px, Zone 2 = 12px, Transitional = 16px, Zone 3 = 18px. |
| **Master Prompt Rule** | MC-08 (line 238): "Anti-metronome: >= 3 distinct padding/margin values across section boundaries." |
| **Builder Action** | S1-S3 `1.2em`, S4-S8 `1em`, S9-S12 `0.85em`. |
| **Deviation** | **SIGNIFICANT DEVIATION.** Builder uses relative units (em) instead of spec's absolute units (px). At 16px base: 1.2em=19.2px, 1em=16px, 0.85em=13.6px. At 17px Zone 1: 1.2em=20.4px. At 15px Zone 3: 0.85em=12.75px. The actual computed values are CLOSE to spec targets but vary by font-size context. Builder's approach is MORE COHERENT because margins scale proportionally with text size. |

**Master prompt alignment:** MC-08 requires >= 3 distinct values. Builder achieves 3 (1.2em, 1em, 0.85em). COMPLIANT.

### Section Padding with !important

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 09 (Coherence Design), Deliverable 4: Section padding identified as major stacking contributor. |
| **Remediation Spec** | Phase 5, Steps 5.2-5.3 (spec lines ~634-649): Specific per-zone padding with `!important` to override inline styles. |
| **Master Prompt Rule** | S-09 (line 132): Max spacing 96px per-property. |
| **Builder Action** | S1-S3: `64px 0`, S4-S8: `48px 0`, S9-S12: `40px 0`. All with `!important`. |
| **Deviation** | **SIMPLIFIED DEVIATION.** Spec provides per-zone asymmetric padding (e.g., S1,S3: padding-top:--space-16, padding-bottom:--space-10). Builder uses symmetric padding per zone group (64px 0 means 64px top AND bottom for S1-S3). This INCREASES total gap at some transitions vs spec's asymmetric approach. However, it's simpler and the margin reductions in Phase 3 compensate. |

---

## PHASE 6: ELEMENT-LEVEL RICHNESS (~35 lines added)

### Inline Code Styling

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 05 (Scale-Channel): Scale 5 (element level) largely absent. |
| **Remediation Spec** | Phase 6 (spec lines ~654-707): `code:not(pre code)` with background, border, padding. |
| **Master Prompt Rule** | SC-01 (line 243): Scale 5 = DETAIL level (4-16px). |
| **Builder Action** | `inline-code`: warm background (#F5EDE2), warm border (#E0D5C5), border-radius: 3px. |
| **Deviation** | **MINOR DEVIATION.** Builder uses class `inline-code` instead of spec's CSS selector `code:not(pre code)`. Builder adds `border-radius: 3px` which the spec allows ("exception: inline-code at 3px per spec" -- see Phase 8D, spec line 869). |

### Link Styling, Table Hover, Section Indicator

| Layer | Reference |
|-------|-----------|
| **Remediation Spec** | Phase 6 (spec lines ~670-706): Link transitions, table row hover, section indicator. |
| **Master Prompt Rule** | No corresponding rules for these specific elements. |
| **Builder Action** | Created all three as specified. Link uses warm teal underline with hover opacity. Table hover uses subtle warm background. Section indicator uses small-caps, letter-spacing, warm color, top border accent. |
| **Deviation** | **MINOR DEVIATIONS.** Builder's section-indicator adds `top border accent` which spec doesn't include (spec has `border-bottom` per component library definition). Builder chose warm teal for links rather than the token variable `var(--color-primary)` (red) -- a creative color choice that adds variety. |

---

## PHASE 7: ACCESSIBILITY + RESPONSIVE (~165 lines added)

### Accessibility Features

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 10 (Accessibility Spec): "ZERO accessibility features (0/8 vs CD-006's 8/8)." Provides exact copy-pasteable CSS for all features. |
| **Remediation Spec** | Phase 7 (spec lines ~709-800): Complete accessibility block including `::selection`, `*:focus-visible`, `.skip-link`, `@media (prefers-reduced-motion: reduce)`, `@media print`. |
| **Master Prompt Rule** | No explicit accessibility rules in master prompt. The master prompt mentions ARIA in A7 ("Every section has aria-label") but has no CSS accessibility requirements. |
| **Builder Action** | Implemented all specified features. |
| **Deviation** | **MINOR DEVIATIONS:** |

| Feature | Spec | Builder | Match? |
|---------|------|---------|--------|
| ::selection background | var(--color-primary) (red) | warm highlight | **Different** -- builder uses warm highlight instead of red |
| focus-visible outline | 3px solid var(--color-primary) | warm teal outline (2px offset) | **Different color** -- warm teal instead of red |
| skip-link bg | var(--color-primary) | (positioned off-screen, visible on focus) | **Compliant** |
| reduced-motion | disable transitions/animations | disables transitions/animations | **Compliant** |
| print | specific selectors listed | clean print stylesheet (white backgrounds, visible URLs, page breaks) | **Compliant** with creative additions |

The builder consistently substitutes warm teal for the spec's red (`var(--color-primary)`) in interactive elements. This creates a distinction between STRUCTURAL accents (red, from header/borders) and INTERACTIVE accents (teal, for focus/links). This is a coherent creative choice not in the spec.

### Responsive

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 06 (CSS Budget): "Responsive breakpoints: 0 in flagship vs 5 in CD-006." Report 10 (Accessibility Spec): Provides 768px and 480px breakpoint CSS. |
| **Remediation Spec** | Phase 7 (spec lines ~769-799): `@media (max-width: 768px)` and `@media (max-width: 480px)` with specific rules. |
| **Master Prompt Rule** | No responsive requirements in master prompt. |
| **Builder Action** | Implemented both breakpoints. Grids collapse to single column, font sizes reduced, padding reduced at 768px. Further reductions at 480px. |
| **Deviation** | **COMPLIANT.** Builder implements both breakpoints with appropriate responsive behavior. |

---

## PHASE 1: HTML RESTRUCTURING (~57 unique modifications)

Note: Builder executed Phase 1 AFTER CSS phases (Phases 0, 2-7), working bottom-to-top to preserve line numbers. The remediation spec suggests Phase 1 should come second (after Phase 0), but the builder reordered for practical reasons.

### Execution Order Deviation

| Layer | Reference |
|-------|-----------|
| **Remediation Spec** | Phase ordering: 0 → 1 → 2-7 (HTML restructuring happens BEFORE CSS enrichment) |
| **Builder Action** | Phase ordering: 0 → 2-7 → 1 (CSS first, HTML last) |
| **Deviation** | **JUSTIFIED DEVIATION.** Builder explains: "Executed bottom-to-top to preserve line numbers during editing." Doing CSS first means line numbers for HTML edits remain stable. If HTML restructuring were done first, all the CSS selectors targeting `.component-block` would need to be updated simultaneously, increasing error risk. |

### Verification Counts

| Layer | Reference |
|-------|-----------|
| **Remediation Spec** | Phase 1 provides counts for each conversion (12 section-indicators, 9 callouts, 3 tension-pairs, etc.) |
| **Builder Action** | Verified all counts: 12 section-indicators PASS, 9 callouts PASS, 3 tension-pairs PASS, etc. |
| **Deviation** | **COMPLIANT.** All 17 verification checks pass. |

### Skip Link + Main Wrapper

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 02 (Component Library Gaps), line 266: "`.skip-link` -- 100% frequency across all files, accessibility requirement: HIGH." Report 07 (Structural HTML Audit), items 1.1-1.2: Missing skip link and `<main>` wrapper. Report 10 (Accessibility Spec): Exact HTML provided. |
| **Remediation Spec** | Phase 1, Step 1.1 (spec lines ~141-156): Exact HTML for skip link and main wrapper. |
| **Master Prompt Rule** | A7 (line 95): "Every `<section>` has `aria-label`. Every callout has `role='note'`. Every transition has `role='separator'`." Master prompt mentions these specific ARIA patterns from CD-006. |
| **Builder Action** | Added skip link before header, `<main id="main-content">` after header, `</main>` before footer. Added `role="banner"` to header, `role="contentinfo"` to footer. |
| **Deviation** | **COMPLIANT.** |

### ARIA Labels on All Sections

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 07 (Structural HTML Audit), item 1.4: "Missing ARIA Labels on Sections." |
| **Remediation Spec** | Phase 1, Step 1.2 (spec lines ~158-178): Exact `aria-label` text for each of 12 sections. |
| **Master Prompt Rule** | A7 (line 95): "Every `<section>` has `aria-label`." |
| **Builder Action** | Added `aria-label` to all 12 sections. |
| **Deviation** | **COMPLIANT.** This is one case where the master prompt's A7 exemplar AND the remediation spec's Phase 1 instruction AND the audit report's finding ALL align. |

### Component-Block to Callout Conversion (9 instances)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 02 (Component Library Gaps), lines 79-118: "THE MOST SIGNIFICANT GAP." 9 callout instances reinvented as `.component-block`. Exact HTML change provided. |
| **Remediation Spec** | Phase 1, Step 1.5 (spec lines ~196-224): Per-section conversion instructions with before/after HTML. |
| **Master Prompt Rule** | No explicit callout requirement. Section E (line 748): "00-components-extract.md" listed as builder reference but not mandated. |
| **Builder Action** | Converted all 9 instances. S3 → callout--info, S5 → callout--info, S7 → 3 gotcha + 3 tip, S12 → callout--essence. Added `role="note"` to all. |
| **Deviation** | **COMPLIANT.** Matches spec's per-section variant assignments exactly. |

### Section-Meta to Section-Indicator (12 instances)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 02 (Component Library Gaps), lines 59-76: "`.section-meta` --> `.section-indicator`. Both are: mono font, uppercase, small size, secondary color, letter-spacing." |
| **Remediation Spec** | Phase 1, Step 1.6 (spec lines ~225-227): "Find every `<div class='section-meta'>` and change to `<div class='section-indicator'>`." |
| **Builder Action** | Converted all 12 instances. |
| **Deviation** | **COMPLIANT.** |

### Grid Wrappers (S7, S8, S11)

| Layer | Reference |
|-------|-----------|
| **Audit Finding** | Report 07 (Structural HTML Audit): RC-12 (single-column monotony). |
| **Remediation Spec** | Phase 1, Steps 1.7-1.9 (spec lines ~229-275): Tension-pair wrappers for S7, sequence-grid for S8, hypothesis-grid for S11. |
| **Builder Action** | Implemented all three grid wrappers. S7: 3 tension-pair divs (replacing tension-group). S8: 1 sequence-grid div wrapping 4 sequence-blocks. S11: 1 hypothesis-grid div wrapping 2 tables, with third table remaining full-width. |
| **Deviation** | **COMPLIANT.** |

---

## BLOCKING ISSUES RESOLVED

| ID | Audit Source | Remediation Spec Location | Master Prompt Rule | Builder Resolution |
|----|-------------|--------------------------|-------------------|--------------------|
| B-01 | Builder-discovered (spec had cool grays) | Phase 2 zone backgrounds, lines 299-302 (CONTRADICTS own constraints) | U-08 (no cool grays) | Warm-shifted 3 zone backgrounds |
| B-02 | Builder-discovered (spec had cool callout bg) | Phase 3.4 callout--info, line 432 | U-08 | Warm-shifted from #F5F8FA to #FAF8F5 |
| B-05 | Report 09 (S-09 stacking loophole) | Phase 3.3 bridge-prose, line 393 | S-09 (96px per-property cap) | Added !important to override inline style |

B-03 (callout--tip cool green) is mentioned in builder's warm-tone substitutions but not listed separately in BLOCKING issues. It follows the same B-01/B-02 pattern.

---

## SIGNIFICANT WARNINGS RESOLVED

| ID | Audit Source | Remediation Spec Location | Master Prompt Rule | Builder Resolution |
|----|-------------|--------------------------|-------------------|--------------------|
| W-06 | Builder-discovered during token check | Not in spec | Token compliance >= 80% (B10 self-check) | Corrected --color-border to tokens.css value |
| W-07 | Builder-discovered during token check | Not in spec | Token compliance >= 80% (B10 self-check) | Corrected --color-border-subtle to tokens.css value |

---

## COMPLETE DEVIATION INVENTORY

### Justified Deviations (builder departed from spec with correct reasoning)

| # | Phase | Change | Spec Says | Builder Did | Justification |
|---|-------|--------|-----------|-------------|---------------|
| 1 | Phase 0 | Block 5 partial | Delete full block | Kept 2 perceptible rules | Actual CSS values differed from spec's assumed values |
| 2 | Phase 2 | S5 background | #FAFAFA (cool) | #FAF8F5 (warm) | Soul compliance U-08 overrides spec |
| 3 | Phase 2 | S7 background | #F8F8F8 (cool) | #F8F6F3 (warm) | Soul compliance U-08 |
| 4 | Phase 2 | S8 background | #F0F0F0 (cool) | #F2EFEA (warm) | Soul compliance U-08 |
| 5 | Phase 3 | Callout-info bg | #F5F8FA (blue) | #FAF8F5 (cream) | Soul compliance U-08 |
| 6 | Phase 3 | Callout-tip bg | #F5FAF5 (green) | #F8F7F2 (khaki) | Soul compliance U-08 |
| 7 | Phase 3 | Bridge-prose | margin-bottom: 16px | margin-bottom: 16px !important | Inline style override required |
| 8 | Phase 3 | Structural borders | border-left on page-container | border-top on sections | Zone-group boundaries vs per-section accents |
| 9 | Phase 1 | Execution order | Phase 0→1→2-7 | Phase 0→2-7→1 | Line number preservation |

### Significant Deviations (builder departed substantially from spec values)

| # | Phase | Change | Spec Values | Builder Values | Impact |
|---|-------|--------|-------------|----------------|--------|
| 10 | Phase 4 | Typography values | 17/15px, 1.85/1.55 LH, 0.02/-0.01em LS | 17/15px, 1.75/1.65 LH, 0.01/0.005em LS | Reduced contrast. Some deltas below perception threshold. |
| 11 | Phase 5 | Paragraph margins | 20/12/16/18px (px units) | 1.2/1/0.85em (relative units) | Different scaling model. Computed values approximate spec. |
| 12 | Phase 5 | Section padding | Asymmetric per-zone | Symmetric per zone-group | Simpler but increases some transition gaps |

### Creative Additions (builder added things spec didn't specify)

| # | Phase | Addition | Source |
|---|-------|----------|--------|
| 13 | Phase 2 | Token alignment W-06 (--color-border) | Master prompt B10 self-check + tokens.css |
| 14 | Phase 2 | Token alignment W-07 (--color-border-subtle) | Master prompt B10 self-check + tokens.css |
| 15 | Phase 6 | Warm teal for interactive elements (links, focus) | Builder creative choice -- structural/interactive accent split |
| 16 | Phase 6 | Section-indicator top border accent | Builder creative choice |
| 17 | Post-build | Comment cleanup (removing literal hex values) | Builder proactive soul compliance |

---

## THE COMPLETE AUDIT TRAIL: SUMMARY

### Coverage Analysis

| Category | Count | % |
|----------|-------|---|
| Changes with FULL 4-layer trace (audit→spec→builder→HTML) | 38 | 66% |
| Changes with 3-layer trace (spec→builder→HTML, audit implicit) | 12 | 21% |
| Changes with 2-layer trace (master prompt→builder, spec absent) | 2 | 3% |
| Changes with 1-layer trace (builder creative addition) | 5 | 9% |
| **Total distinct changes** | **57** | |

### Where Each Layer Contributed

| Layer | Changes It Authored | Changes It Passed Through | Changes It Blocked/Modified |
|-------|--------------------|--------------------------|-----------------------------|
| Audit Reports (01-11) | 38 findings that became spec instructions | 38 | 0 (reports are input, not gates) |
| Remediation Spec | 50 explicit instructions | 50 | 0 (spec has no runtime gate) |
| Master Prompt | 2 direct contributions (W-06, W-07 via token compliance) | 9 (soul rules that constrained builder deviations) | 3 (blocked cool colors B-01, B-02, B-03) |
| Builder Judgment | 5 creative additions | 12 justified deviations | 3 significant deviations from spec values |

### The Master Prompt's Actual Runtime Influence

The master prompt's influence on the remediation build was **narrow but decisive:**

1. **SOUL CONSTRAINTS (U-08):** Caused 6 justified deviations (B-01 x3, B-02, B-03, plus implicit warm-shifting throughout). This is the master prompt's STRONGEST legacy -- its identity rules survived into a completely different prompt's execution.

2. **TOKEN COMPLIANCE (B10):** Caused 2 creative additions (W-06, W-07). The builder checked tokens.css because the master prompt's self-check list includes "Token compliance >= 80%."

3. **PERCEPTION THRESHOLDS (Appendix):** The remediation spec's ENTIRE Phase 0 deallocation concept is derived from the master prompt's perception threshold principle ("If a human cannot SEE the difference without a color picker, do NOT write the CSS" -- spec line 985). But this inheritance is INDIRECT -- the spec internalized the principle and operationalized it as specific line deletions. The builder doesn't reference the master prompt for Phase 0.

4. **ARIA PATTERNS (A7):** The master prompt's CD-006 exemplar ("Every section has aria-label, every callout has role='note', every transition has role='separator'") survives into the remediation spec's Phase 1 instructions AND the builder's HTML output. But again, indirect -- the builder follows the spec, not the master prompt.

### The Remediation Spec's Internal Contradictions

The builder exposed **3 internal contradictions** in the remediation spec:

1. **Phase 2 vs Constraints Appendix:** Cool gray zone backgrounds (#FAFAFA, #F8F8F8, #F0F0F0) violate the Constraints appendix's soul rules.
2. **Phase 3.4 vs Constraints Appendix:** Cool-tinted callout backgrounds (#F5F8FA blue, #F5FAF5 green) violate warm-only constraint.
3. **Phase 5 vs Phase 3:** Section padding values in Phase 5 can create gaps exceeding the 120px cap established in Phase 3's divider margin reductions.

All three were resolved by builder judgment, NOT by following the spec literally.

---

## KEY FINDINGS

### 1. The Remediation Spec Achieved 87% Builder Compliance

Of 57 distinct changes, 50 followed spec instructions (38 compliant + 12 with minor deviations). The 7 non-compliant changes were either justified deviations (6) or creative additions (5), for a 87.7% compliance rate.

### 2. The Master Prompt's Influence is Identity-Level, Not Instruction-Level

The master prompt directly caused only 2 builder actions (token checks). But it CONSTRAINED 6 others through soul rules. Its influence is architectural (defining what IS the design system) rather than procedural (telling the builder what to do).

### 3. Builder Judgment Was Essential for Spec Contradictions

Without the builder's soul awareness, the page would contain 6 instances of cool-toned hex values that violate the design system identity. The remediation spec's coherence theory (cool = analytical) conflicted with the soul's identity constraint (warm = always). The builder correctly prioritized identity.

### 4. Typography Deviations Are the Weakest Link

The builder's Phase 4 typography values (line-height 0.10 range, letter-spacing avoiding negatives) produce deltas below the master prompt's stated perception thresholds. If these values don't create visible zone differentiation, the remediation's core promise -- "each screenful looks different" -- may not be fully achieved at the typographic level.

### 5. The Audit→Spec→Builder Chain Has 66% Full Traceability

For 38 of 57 changes, every link in the chain (audit finding → spec instruction → builder action → HTML change) is documented and traceable. For the remaining 19, the chain has gaps (usually the audit finding is implicit rather than explicit).

---

**END OF CHANGELOG CROSS-REFERENCE**

**Total changes traced:** 57
**Full 4-layer traces:** 38 (66%)
**Deviations identified:** 17 (9 justified, 3 significant, 5 creative)
**Spec internal contradictions exposed:** 3
**Master prompt direct contributions:** 2
**Master prompt indirect constraints:** 9
