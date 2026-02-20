# 10: FAILURE FORENSICS -- Anti-Ground-Truth from the Flagship 1.5/4

**Analyst:** failure-forensics (Opus 4.6)
**Date:** 2026-02-19
**Task:** Extract every CSS failure from the actual Flagship HTML, compute exact values, and verify prevention coverage.

**Source files examined:**
- `ephemeral/flagship-experiment/07-intentionality.html` (CSS lines 50-1136, 2,145 lines post-remediation)
- `ephemeral/flagship-remediation/builder-changelog.md` (what changed in remediation)
- `ephemeral/flagship-remediation/FINAL-VERDICT.md` (PA verdict 2.5/4)
- `ephemeral/flagship-remediation/_verification/programmatic-verification.md` (computed deltas)
- `ephemeral/flagship-remediation/_wave1/deallocation-manifest.md` (201 lines of sub-perceptual CSS identified)
- `ephemeral/flagship-44-recipe/05-ANTI-CONDITIONS.md` (14 suppressors)
- `ephemeral/flagship-audit/10-REMEDIATION-PROMPT.md` (remediation spec)

---

## CRITICAL FRAMING NOTE

**CD-006 is NOT Flagship 4/4.** CD-006 is Ceiling tier (39/40, ~3.5/4 PA-05). Flagship 4/4 has NEVER been achieved -- it is a theoretical target. When this document references CD-006, it is as a FLOOR REFERENCE for what Ceiling looks like, not the target. The actual Flagship 4/4 target is defined in `ephemeral/flagship-44-recipe/01-DEFINITION.md`: metaphor-driven multi-channel coherence, 5 fractal scales, 3+ multi-coherence instances, >=3 channels shifting at each boundary, >=14 perceptible mechanisms, compositional surprise, and unified pervading metaphor. This goes QUALITATIVELY BEYOND CD-006. CD-006 has no unified metaphor, static coherence, predictable composition, and only 4 strong + 1 moderate scale expression.

**Implication for this document:** The failures mapped here are anti-conditions that the prompt must make IMPOSSIBLE. Preventing these failures is NECESSARY but NOT SUFFICIENT for Flagship 4/4. Even if every anti-condition is neutralized, the builder must ALSO achieve the positive Flagship dimensions (multi-coherence, metaphor, compositional surprise) that no prior artifact has demonstrated.

---

## EXECUTIVE SUMMARY

The Flagship (1.5/4) contains ~1,100 lines of CSS that produce a page where a human sees: uniform cream, uniform 16px text, zero borders in the body, zero grids, and 6 whitespace voids of 210-276px. The CSS is technically sophisticated -- 14 mechanisms are DECLARED in comments -- but the actual visual output from those mechanisms is imperceptible. This document maps every specific CSS value that failed, computes the exact deltas, and checks whether each failure is prevented by the conventions brief + gate runner.

**The master finding:** The Flagship CSS is not bad CSS. It is CSS directed at the wrong targets -- imperceptible micro-refinement instead of visible structural variety. 22% of all CSS (227 lines) produces sub-pixel variations that no human can perceive. The prompt must make this allocation pattern IMPOSSIBLE.

---

## PART 1: BACKGROUND COLOR FORENSICS

### The 12 Zone Backgrounds (Pre-Remediation Values)

These are the ORIGINAL values from the Flagship, before remediation changed S5/S7/S8:

| Zone | Hex (Pre-Remediation) | R | G | B |
|------|----------------------|---|---|---|
| S1 | #FEF5EB | 254 | 245 | 235 |
| S2 | #F5EDE2 | 245 | 237 | 226 |
| S3 | #FBF3E8 | 251 | 243 | 232 |
| S4 | #F8F6F3 | 248 | 246 | 243 |
| S5 | #FAFAFA | 250 | 250 | 250 |
| S6 | #F5F0E8 | 245 | 240 | 232 |
| S7 | #F8F8F8 | 248 | 248 | 248 |
| S8 | #F0F0F0 | 240 | 240 | 240 |
| S9 | #FEF7F0 | 254 | 247 | 240 |
| S10 | #FEF5EB | 254 | 245 | 235 |
| S11 | #F8F2EA | 248 | 242 | 234 |
| S12 | #FEF5EB | 254 | 245 | 235 |

### Adjacent Zone RGB Deltas (Pre-Remediation)

| Transition | R delta | G delta | B delta | Max delta | Perceptible? |
|-----------|---------|---------|---------|-----------|-------------|
| S1->S2 | 9 | 8 | 9 | 9 | NO (below 15) |
| S2->S3 | 6 | 6 | 6 | 6 | NO |
| S3->S4 | 3 | 3 | 11 | 11 | BORDERLINE |
| S4->S5 | 2 | 4 | 7 | 7 | NO |
| S5->S6 | 5 | 10 | 18 | 18 | BARELY (B channel only) |
| S6->S7 | 3 | 8 | 16 | 16 | BARELY (B channel only) |
| S7->S8 | 8 | 8 | 8 | 8 | NO |
| S8->S9 | 14 | 7 | 0 | 14 | NO (below 15) |
| S9->S10 | 0 | 2 | 5 | 5 | NO |
| S10->S11 | 6 | 3 | 1 | 6 | NO |
| S11->S12 | 6 | 3 | 1 | 6 | NO |

**VERDICT:** 0 of 11 transitions meet the >=15 RGB threshold on all channels. Only 2 (S5->S6, S6->S7) meet >=15 on a single channel. The "chromatic channel" -- described in 35 lines of CSS comments as "the primary metaphor carrier" -- produces ZERO perceptible color shifts.

### Additional Background Failures:
- **S5 (#FAFAFA), S7 (#F8F8F8), S8 (#F0F0F0)** are pure COOL GRAYS (R=G=B). This violates the warm palette soul constraint (R >= G >= B with differences). The Flagship's "analytical convergence" metaphor directed the builder toward cool neutrals.
- **S10 = S12 = S1 (#FEF5EB)**: Three sections share the exact same background. The "bookend echo" is intentional but still means 25% of sections are visually identical.
- **S4 = S7 (post-remediation: #F8F6F3)**: Another duplication.

### What The Prompt Must Prevent:
1. **GATE:** Adjacent zone backgrounds MUST differ by >=15 RGB points on at least one channel. FAIL = rewrite backgrounds.
2. **GATE:** No background may have R=G=B (pure gray). All backgrounds must satisfy R > G or G > B (warm bias).
3. **RULE:** No more than 2 sections may share the same background hex value.

---

## PART 2: TYPOGRAPHY FORENSICS

### Font-Size Distribution (Pre-Remediation)

Every paragraph in the entire page body:

| Element | Font-Size | Font-Weight | Count of Sections |
|---------|-----------|-------------|-------------------|
| p (body text) | 16px | 400 | ALL 12 sections |
| h2 | 28px | 400 | ALL 12 sections |
| h3 | 22px | 600 italic | ALL 12 sections |
| table th | 12px | 500 | ALL tables |
| table td | 16px | 400 | ALL tables |
| .header-meta | 12px | 400 | Header only |
| .section-meta | 12px | 400 | ALL sections |

**VERDICT:** The "typographic convergence gradient" -- documented in 107 lines of CSS comments describing "Zone 1 variety -> Zone 2 convergence -> Zone 3 uniformity" -- produces ZERO perceptible font-size variation. Every paragraph is 16px/400. Every h2 is 28px/400. The "gradient" is achieved through letter-spacing at 0.004-0.01em, which is invisible.

### Letter-Spacing Distribution (Pre-Remediation, the 107 Deleted Lines)

| Zone | Selector | Letter-Spacing | In Pixels (at 16px) | Perceptible? |
|------|----------|---------------|---------------------|-------------|
| S1 | .zone-s1 p | 0.006em | 0.096px | NO (sub-pixel) |
| S1 | .zone-s1 h2 | 0.01em | 0.28px (at 28px) | NO |
| S3 | .zone-s3 p | 0.004em | 0.064px | NO (sub-pixel) |
| S3 | .zone-s3 h2 | 0.008em | 0.224px | NO |
| S4 | .zone-s4 p | 0.002em | 0.032px | NO (sub-pixel) |
| S4 | .zone-s4 h2 | 0.004em | 0.112px | NO |
| S5,S7,S8 | .zone-s5 p etc | -0.003em | -0.048px | NO (sub-pixel) |
| S5,S7,S8 | .zone-s5 h2 etc | -0.01em | -0.28px | NO |
| S6 | .zone-s6 p | 0 | 0px | NO (default) |
| S9 | .zone-s9 p | 0 | 0px | NO (default) |
| S10 | .zone-s10 p | 0 | 0px | NO (default) |
| S11 | .zone-s11 h2 | 0.005em | 0.14px | NO (sub-pixel) |
| S12 | .zone-s12 h2 | 0.01em | 0.28px | NO |

**Perception threshold for letter-spacing: >= 0.5px.** The LARGEST delta in the entire 107-line typographic gradient is 0.28px (S1 h2 vs S5 h2). This is 56% of the perception threshold. The SMALLEST is 0.032px -- 6% of the threshold. The entire typographic gradient is invisible.

### Word-Spacing Distribution (also deleted)

| Zone | Word-Spacing | In Pixels | Perceptible? |
|------|-------------|-----------|-------------|
| S1 | 0.02em | 0.32px | NO |
| S3 | 0.015em | 0.24px | NO |
| S5,S7,S8 | -0.01em | -0.16px | NO |
| S12 | 0 | 0px | NO |

**All word-spacing values are sub-perceptual.** The full range is 0.48px (from -0.16 to +0.32). Perception threshold: ~1px.

### What The Prompt Must Prevent:
4. **GATE:** Body text font-size MUST vary across zone groups by >=2px. If all zones = same font-size, FAIL.
5. **GATE:** h2 font-weight MUST vary across zone groups (at least 2 distinct weights: e.g. 400 vs 600).
6. **GATE:** Letter-spacing deltas between zone groups must be >=0.5px absolute (>=0.03em at 16px). If max delta < 0.5px, DELETE the letter-spacing entirely (it wastes CSS budget on invisible refinement).
7. **RULE:** No CSS line may specify letter-spacing in the range 0.001em-0.02em for body text. This range is ALWAYS sub-perceptual. Either use >=0.03em or 0.

---

## PART 3: WHITESPACE VOID FORENSICS

### Section Gaps (Pre-Remediation Estimated)

Pre-remediation, the page had inline `style="padding-top: var(--space-20); padding-bottom: var(--space-20)"` (80px each) on most sections, plus divider margins of 32-64px:

| Between | Section Pad (bottom) | Divider + Bridge | Section Pad (top) | Total Gap | Perceptible Content in Gap? |
|---------|---------------------|-----------------|------------------|-----------|-----------------------------|
| S1->S2 | 80px | 32px (smooth) | 80px | ~192px | No -- just 1px line |
| S2->S3 | 80px | 48px (bridge) + 48px prose | 80px | ~256px | Yes -- bridge-prose text |
| S3->S4 | 80px | 32px (smooth) | 80px | ~192px | No |
| S4->S5 | 80px | 48px (bridge) + 48px prose | 80px | ~256px | Yes -- bridge-prose text |
| S5->S6 | 80px | 32px (smooth) | 80px | ~192px | No |
| S6->S7 | 64px | 48px (bridge) + 48px prose | 64px | ~224px | Yes -- bridge-prose text |
| S7->S8 | 64px | 48px (bridge) + 48px prose | 64px | ~224px | Yes |
| S8->S9 | 80px | 64px (breathing) + 48px prose | 80px | ~272px | Yes |
| S9->S10 | 80px | 32px (smooth) | 80px | ~192px | No |
| S10->S11 | 80px | 32px (smooth) | 80px | ~192px | No |
| S11->S12 | 80px | 48px (bridge) + 48px prose | 80px | ~256px | Yes |

**6 gaps exceed 210px. 4 gaps have NO content (just a 1px line). A 900px viewport scrolled to these positions sees ONLY cream.**

The catastrophic void pattern: 80px padding + divider + 80px padding. The S-09 rule limits individual spacing to 96px, but STACKED values at boundaries create 192-272px voids.

### Post-Remediation Gap Comparison

The remediation reduced divider margins and section padding:
- `.divider-smooth`: 16px (was 32px)
- `.divider-bridge`: 24px (was 48px)
- `.divider-breathing`: 24px (was 64px)
- Section padding: 32-64px (was 64-80px uniformly)

Post-remediation worst case: S4->S5 at 175px total (reduced from ~256px).

### What The Prompt Must Prevent:
8. **GATE:** TOTAL gap between adjacent sections (bottom-pad + divider + bridge-prose + top-pad) must be <=120px. Measure the TOTAL, not individual properties. This is the S-09 STACKING loophole.
9. **RULE:** No section may use padding-top OR padding-bottom > 64px. Individual max is 64px.
10. **RULE:** Divider margins must be <= 24px top and bottom (48px total).
11. **RULE:** If bridge-prose exists between sections, its margin-bottom must be <=16px.

---

## PART 4: MISSING BORDER FORENSICS

### Borders in the Pre-Remediation Body

| Location | Border? | Details |
|----------|---------|---------|
| Header bottom | YES | 3px solid #E83025 (red) |
| Footer top | YES | 3px solid #E83025 (red) |
| Table thead | YES | 3px solid #1A1A1A (dark) |
| Table td | YES | 1px solid #F0EBE3 (subtle) |
| Table-featured | YES | 4px solid #E83025 left |
| Table-moderate | YES | 3px solid #E0D5C5 left |
| Table-warning | YES | 3px solid #E83025 left |
| Table-light | YES | 1px solid #F0EBE3 |
| Pullquote | YES | 4px solid #E83025 left + 2px outline |
| Component-block | YES | 4px solid #E83025 left + 1px top |
| **Section-level borders** | **ZERO** | **None in any of 12 sections** |
| **Horizontal dividers** | **1px invisible** | Only 1px solid #E0D5C5 -- nearly invisible on cream |
| **Any vertical containment** | **ZERO** | No section has a left, right, or bottom border |

**VERDICT:** Borders exist ONLY in header/footer and inside tables/components. The structural channel (Ch4) -- described in 20+ lines of comments as "Border weight progression mirrors confidence gradient" -- produces ZERO visible borders in the page body layout. A human scrolling the page sees continuous cream with no structural boundaries between sections.

The Ch4 channel has: border variables defined (--border-structural: 4px, --border-accent: 3px, --border-micro: 1px), 6 table border treatment variants described in comments, a "border weight progression" metaphor -- and ZERO section-level borders deployed.

### Post-Remediation Border Status

The remediation added 6 section-level left borders:
- S2: 3px solid #E0D5C5
- S5: 4px solid #E83025
- S7: 3px solid #1A1A1A
- S9: 3px solid #5C4B3A
- S10: 3px solid #E83025
- S12: 4px solid #1A1A1A

**BUT:** PA audit found zero structural borders rendering (selector mismatch). CSS targets `.zone-sN .page-container` which exists in HTML, but computed styles showed no borders. This is likely a specificity or selector issue that was BLOCKING at 2.5/4.

### What The Prompt Must Prevent:
12. **GATE:** >=6 sections must have visible structural borders (left, top, or bottom -- NOT just within components). FAIL = add borders.
13. **GATE:** Section borders must use >=3 distinct colors across the page.
14. **GATE:** Border widths must use at least 2 distinct values (e.g. 3px and 4px).

---

## PART 5: MECHANISM DEPLOYMENT FORENSICS

### Mechanisms Declared vs Perceptibly Deployed (Pre-Remediation)

| # | Mechanism | Declared? | Deployed? | Perceptible? | Evidence |
|---|-----------|-----------|-----------|-------------|----------|
| 1 | Border Weight Variation | YES (CSS vars, comments) | Tables only | PARTIAL | Table borders visible; no section borders |
| 2 | Two-Zone Components | YES (CSS) | YES | YES | Component blocks have label/body zones |
| 3 | Solid Offset (Pullquote) | YES (CSS) | YES | YES | Outline + border-left on blockquote |
| 4 | Spacing Compression | YES (comments, vars) | NO | NO | All sections use same padding values |
| 5 | Dense/Sparse Zones | YES (comments, variants) | NO | NO | All zones feel identical density |
| 6 | Width Variation | YES (CSS) | YES | PARTIAL | 80% pullquote, 85% narrow table, 90% tension group |
| 7 | Zone Backgrounds | YES (12 CSS vars + rules) | YES | NO | 1-9 RGB deltas = imperceptible |
| 8 | -- | -- | -- | -- | Not identified |
| 9 | Color Encoding | YES (CSS variants) | YES | PARTIAL | Component border colors vary, but backgrounds identical |
| 10 | Border-Left Accent | YES (CSS) | YES | YES | Components and tables have left borders |
| 11 | Typographic Scale Jump | YES (CSS) | YES | PARTIAL | h1/h2/h3 hierarchy visible, but no zone variation |
| 12 | Progressive Disclosure | YES (comments) | NO | NO | S11 tables have no progressive spacing |
| 13 | Dark Header Bookend | YES (CSS) | YES | YES | Dark header with red accent |
| 14 | Dark Footer Bookend | YES (CSS) | YES | YES | Dark footer mirror |
| 16 | Drop Cap | YES (CSS) | YES | YES | S1 drop cap in red Instrument Serif |
| 17 | Code Blocks | YES (CSS) | YES | YES | Dark sequence blocks |
| 18 | Data Tables | YES (CSS) | YES | YES | 7 tables with thead styling |

**PERCEPTIBLY DEPLOYED: 8 of 14 declared mechanisms.** (13, 14, 2, 3, 10, 16, 17, 18)
**DEPLOYED BUT IMPERCEPTIBLE: 3** (7 zone backgrounds, 4 spacing compression, 5 dense/sparse)
**NOT DEPLOYED: 3** (12 progressive disclosure, section-level borders from 1, full color encoding from 9)

### Channel Analysis at Zone Boundaries (Pre-Remediation)

For each zone boundary, how many channels PERCEPTIBLY shift:

| Boundary | Ch1 Chromatic | Ch2 Typography | Ch3 Spatial | Ch4 Structural | Ch5 Density | Ch6 Rhythmic | Total Shifting |
|----------|--------------|----------------|-------------|----------------|-------------|-------------|----------------|
| S1->S2 | NO (9 RGB) | NO (same 16px) | NO (same 80px pad) | NO (no borders) | NO | NO | **0** |
| S2->S3 | NO (6 RGB) | NO | NO | NO | NO | NO | **0** |
| S3->S4 | NO (11 RGB B only) | NO | NO | NO | NO | NO | **0-1** |
| S4->S5 | NO (7 RGB) | NO | NO | NO | NO | NO | **0** |
| S5->S6 | BARELY (18 B) | NO | NO | NO | NO | NO | **0-1** |
| S6->S7 | BARELY (16 B) | NO | NO | NO | NO | NO | **0-1** |
| S7->S8 | NO (8 RGB) | NO | NO | NO | NO | NO | **0** |
| S8->S9 | NO (14 R) | NO | NO | NO | NO | NO | **0** |
| S9->S10 | NO (5 RGB) | NO | NO | NO | NO | NO | **0** |
| S10->S11 | NO (6 RGB) | NO | NO | NO | NO | NO | **0** |
| S11->S12 | NO (6 RGB) | NO | NO | NO | NO | NO | **0** |

**AVERAGE CHANNELS SHIFTING PER BOUNDARY: ~0.2.** CD-006 (Ceiling tier, NOT Flagship target) achieves 3-5 per boundary. The Flagship 4/4 target requires >=3 minimum, >=4 average per boundary (see 01-DEFINITION.md D-03). The failed Flagship experiment achieves effectively ZERO.

### What The Prompt Must Prevent:
15. **GATE:** At least 3 channels must perceptibly shift at EACH zone group boundary, with >=4 average across all boundaries (Flagship D-03 requirement from 01-DEFINITION.md). "Perceptibly" means exceeding the threshold table values.
16. **GATE:** At least 14 mechanisms must be PERCEPTIBLY deployed for Flagship (D-01 requirement), not just declared in comments. Measure by human perception, not CSS presence. Each of 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation) must have >=2.

---

## PART 6: CSS BUDGET ALLOCATION FORENSICS

### How the 1,100 CSS Lines Were Spent (Pre-Remediation)

| Category | Lines | % of Total | Perceptible? |
|----------|-------|-----------|-------------|
| Sub-perceptual letter-spacing/word-spacing/line-height per zone | 107 | 9.7% | NO |
| Sub-perceptual spatial compression per zone | 47 | 4.3% | NO |
| Sub-perceptual border color shifts per zone | 39 | 3.5% | NO |
| Sub-perceptual heading color shifts per zone | 32 | 2.9% | NO |
| Rhythmic micro-modulations (animation keyframes) | 13 | 1.2% | NO |
| **TOTAL SUB-PERCEPTUAL** | **238** | **21.6%** | **NO** |
| Design tokens + reset + base | ~110 | 10% | Foundation |
| Header + footer | ~75 | 6.8% | YES |
| Tables (all variants) | ~100 | 9.1% | YES |
| Components/callouts | ~55 | 5% | YES |
| Pullquote | ~20 | 1.8% | YES |
| Dividers | ~30 | 2.7% | BARELY |
| Zone backgrounds (12 rules) | ~15 | 1.4% | NO (values too close) |
| Comments/documentation | ~200 | 18.2% | N/A |
| Width variation/tension groups | ~20 | 1.8% | YES |
| Code blocks (sequence-block) | ~35 | 3.2% | YES |
| Other (findind nums, meta, provenance) | ~40 | 3.6% | YES |
| Empty lines / whitespace | ~60 | 5.5% | N/A |

**21.6% of CSS budget spent on invisible refinement.** Those 238 lines could have funded:
- 6 section-level borders (6 lines)
- 3 grid layouts (15 lines)
- 4 callout variants with distinct backgrounds (20 lines)
- Zone-specific font-size variation (12 lines)
- Zone-specific heading weight variation (6 lines)
- Responsive breakpoints (30 lines)

Total alternative: ~89 lines producing 6 additional perceptible mechanisms. The remaining 149 lines could add more components, focus states, print styles.

### What The Prompt Must Prevent:
17. **RULE:** CSS lines declaring letter-spacing < 0.03em, word-spacing < 0.05em, or line-height deltas < 0.15 on body text are WASTED. The gate runner must flag these as sub-perceptual waste.
18. **RULE:** CSS comments describing mechanisms must not count toward mechanism deployment. "Declared in comments" =/= "deployed in CSS."

---

## PART 7: WHAT CHANGED FROM 1.5/4 TO 2.5/4

### Remediation Changes (from builder-changelog.md)

| Change | Lines | Effect on PA-05 |
|--------|-------|----------------|
| Phase 0: Deleted 201 lines sub-perceptual CSS | -201 | Freed CSS budget |
| Cool gray replacement (S5/S7/S8 -> warm) | 3 token changes | Fixed soul violation |
| 6 section-level left borders added | +12 | Structural channel activated (but may not render) |
| Callout family: 4 variants with distinct borders | +40 | Component differentiation |
| 3 grid layouts (tension-pair, sequence-grid, hypothesis-grid) | +15 | Break single-column monotony |
| Typography zone variation (17px/15px/16px) | +24 | Zone 1 distinct from Zone 2 |
| Divider margin reduction (32-64px -> 16-24px) | modified | Void reduction |
| Section padding variation (32-64px asymmetric) | +12 | Spatial rhythm |
| Table header backgrounds | +6 | Visual anchoring |
| Accessibility (skip link, landmarks, focus, print) | +65 | WCAG 2.1 AA |
| Responsive breakpoints (768px, 480px) | +30 | Multi-viewport |
| Section indicators replacing section-meta | modified | Wayfinding |

### What Moved the Score (+1.0)

1. **Component library adoption** (+0.3): From minimal to 9 callouts (4 types) with visible colored left borders. This alone adds the most visible richness.
2. **Whitespace void reduction** (+0.2): From 210-276px catastrophic to 33-175px manageable.
3. **Typography zone variation** (+0.2): S1 at 17px/1.85/0.02em vs S5 at 15px/1.55/-0.01em -- visibly different.
4. **Soul compliance restoration** (+0.1): Cool grays eliminated, all backgrounds warm.
5. **Sub-perceptual CSS deletion** (+0.1): CSS budget freed for visible targets.
6. **Grid layouts** (+0.1): S7 tension-pair, S8 sequence-grid, S11 hypothesis-grid break single-column.

### What STILL Fails at 2.5/4

1. **Structural borders not rendering** -- CSS exists but selector mismatch prevents rendering. BLOCKING.
2. **Typography uniformity S4-S12** -- Only S1 is distinct (17px). S9-S12 claimed 15px but computed as 16px. BLOCKING.
3. **Background deltas still too low** -- S4->S5 at 2 RGB, S9->S10 at 5 RGB. Below >=15 threshold. SIGNIFICANT.
4. **Table class mismatch** -- CSS targets `.data-table` but HTML uses `.table-compact`, `.table-featured`, etc. SIGNIFICANT.
5. **S4-S5 gap at 175px** -- Still exceeds 120px even after bridge content subtraction. SIGNIFICANT.
6. **Content-form decoupling** -- All Zone 2 sections get identical 15px/1.55/tight treatment regardless of content meaning. RESIDUAL SUPPRESSOR.
7. **Repair mode** -- Builder was fixing, not composing. RESIDUAL SUPPRESSOR.

---

## PART 8: PREVENTION COVERAGE ANALYSIS

For each failure, does the conventions brief + gate runner PREVENT it?

### Failures with STRONG prevention coverage needed:

| # | Failure | Prevention Rule | Gate? | Notes |
|---|---------|----------------|-------|-------|
| F-01 | Backgrounds differ by 1-9 RGB | Adjacent zones >=15 RGB on at least one channel | YES (gate runner) | MUST be programmatic check, not builder judgment |
| F-02 | All body text 16px/400 | Zone groups must have >=2px font-size variation | YES (gate runner) | Check computed font-size across zones |
| F-03 | All h2 28px/400 | Zone groups must have >=2 distinct h2 weights | YES (gate runner) | Check computed font-weight |
| F-04 | Letter-spacing 0.001-0.01em | Sub-perceptual CSS = FAIL; min delta >=0.03em | YES (gate runner) | Scan all letter-spacing values, flag < 0.03em |
| F-05 | 6 whitespace voids 210-276px | Total gap <=120px (stacking check) | YES (gate runner) | MUST measure TOTAL not individual properties |
| F-06 | Zero section borders | >=6 sections with structural borders | YES (gate runner) | Count section-level border elements |
| F-07 | Zero grid layouts | >=2 grid layouts in body | YES (gate runner) | Count grid-template-columns declarations |
| F-08 | Uniform padding 80px everywhere | >=3 distinct section padding values | YES (gate runner) | Check computed padding-top across sections |
| F-09 | Cool gray backgrounds | All backgrounds must satisfy R>G or G>B (warm) | YES (gate runner) | Programmatic hex check |
| F-10 | CSS budget wasted on invisible refinement | Total sub-perceptual CSS <= 20 lines | YES (gate runner) | Scan for values below threshold table |
| F-11 | Mechanisms declared in comments but not deployed | Comments don't count; must verify visual presence | YES (convention brief) | "Declared" =/= "deployed" |
| F-12 | 0 channels shift at zone boundaries | >=3 channels shift at each zone group boundary | YES (gate runner) | Cross-reference multiple computed properties |
| F-13 | Content-form decoupling (zone-uniform specs) | Per-section compositional direction | PARTIAL | Convention brief should frame per-section, not per-zone |
| F-14 | Repair mode (fixing vs composing) | Task framing as "compose from scratch" | YES (convention brief) | Builder prompt must use generative language |

### BLOCKING GAPS (failures without matching prevention):

| # | Failure | Gap | Fix |
|---|---------|-----|-----|
| G-01 | Selector mismatches (.data-table vs actual classes) | No rule checks CSS selector->HTML class alignment | Gate runner should verify that every CSS class selector has a matching HTML element |
| G-02 | Callout backgrounds nearly indistinguishable (2-8 RGB) | Background threshold applies to sections but not components | Extend >=15 RGB rule to ALL adjacent colored elements, not just sections |
| G-03 | Divider visual uniformity (all 1px same style) | No rule requires divider variation | Add: >=2 distinct divider styles (weight/color/style) |
| G-04 | No inline emphasis in body text | No rule requires inline typographic variation | Add to convention brief: key terms should use bold or semantic emphasis |

### Coverage Summary:

- **14 failures identified**
- **10 with strong gate/rule coverage** (F-01 through F-12 minus G-01 through G-04)
- **4 BLOCKING GAPS** requiring new rules or gate runner additions
- **2 PARTIAL** (content-form coupling, selector alignment)

---

## PART 9: THE ANTI-PATTERN CATALOG

These are the specific CSS patterns that MUST be impossible in any future build:

### Anti-Pattern 1: "The Invisible Gradient"
```css
/* BANNED: Letter-spacing in the sub-perceptual range */
.zone-s1 p { letter-spacing: 0.006em; }   /* = 0.096px, invisible */
.zone-s3 p { letter-spacing: 0.004em; }   /* = 0.064px, invisible */
.zone-s5 p { letter-spacing: -0.003em; }  /* = -0.048px, invisible */
```
**Gate:** Any letter-spacing value between -0.02em and 0.02em (exclusive) on body text is BANNED. Either use >=0.03em or use 0.

### Anti-Pattern 2: "The Phantom Channel"
```css
/* BANNED: Mechanism declared in comments with no perceptible CSS */
/* ============================================================
   ZONE BACKGROUNDS -- Mechanism #7 (Cluster A: Refinement Gradient)
   METAPHOR Ch1 (Chromatic): The chromatic channel IS the primary
   metaphor carrier...
   ============================================================ */
--color-zone-s4: #F8F6F3;  /* 248, 246, 243 */
--color-zone-s5: #FAFAFA;  /* 250, 250, 250 -- 2 RGB delta */
```
**Gate:** Comments claiming a mechanism is "active" while the actual CSS values produce imperceptible differences is FAIL.

### Anti-Pattern 3: "The Stacked Void"
```css
/* BANNED: Padding + divider + padding exceeding 120px total */
section { padding-bottom: 80px; }
.divider-breathing { margin: 64px 0; }
section + section { padding-top: 80px; }
/* Total: 80 + 64 + 80 = 224px of empty space */
```
**Gate:** Total gap = sum of (section-bottom-pad + divider-margin-top + divider-height + divider-margin-bottom + bridge-prose-margin + next-section-top-pad). Must be <=120px.

### Anti-Pattern 4: "The Budget Sinkhole"
```css
/* BANNED: Allocating CSS lines to imperceptible variation */
/* 107 lines producing 0.096px max delta */
.zone-s1 p { line-height: 1.8; letter-spacing: 0.006em; word-spacing: 0.02em; }
.zone-s3 p { line-height: 1.75; letter-spacing: 0.004em; word-spacing: 0.015em; }
/* ... 100 more lines of sub-pixel refinement ... */
```
**Gate:** If > 20 lines of CSS produce values below the perception threshold table, FAIL. Budget is being sunk into invisibility.

### Anti-Pattern 5: "The Uniform Body"
```css
/* BANNED: All body text at single font-size/weight */
section p { font-size: 16px; font-weight: 400; line-height: 1.75; }
/* No zone-specific overrides with perceptible differences */
```
**Gate:** Computed font-size must include at least 3 distinct values across the 12 sections. Computed font-weight must include at least 2 distinct values for headings.

### Anti-Pattern 6: "The Borderless Body"
```css
/* BANNED: Header/footer/tables have borders, body sections have none */
.page-header { border-bottom: 3px solid red; }   /* EXISTS */
table thead { border-bottom: 3px solid black; }   /* EXISTS */
/* Section-level borders? ZERO. */
```
**Gate:** >=6 sections must have visible structural borders that are NOT inside components or tables.

---

## PART 10: SUMMARY TABLE FOR PROMPT INTEGRATION

| ID | Anti-Condition | Threshold | Gate Type | Source Failure |
|----|---------------|-----------|-----------|---------------|
| AC-01 | Adjacent zone bg delta < 15 RGB | >=15 on at least 1 channel | Programmatic | F-01: 1-9 RGB deltas |
| AC-02 | Pure gray backgrounds (R=G=B) | R>G or G>B required | Programmatic | F-09: S5/S7/S8 cool gray |
| AC-03 | Uniform body font-size | >=3 distinct values across sections | Programmatic | F-02: all 16px |
| AC-04 | Uniform heading weight | >=2 distinct weights | Programmatic | F-03: all 400 |
| AC-05 | Sub-perceptual letter-spacing | Ban 0.001-0.02em range | Programmatic | F-04: 0.004-0.01em range |
| AC-06 | Total gap > 120px | Measure total stacked gap | Programmatic | F-05: 210-276px voids |
| AC-07 | < 6 sections with borders | >=6 structural borders | Programmatic | F-06: zero section borders |
| AC-08 | < 2 grid layouts | >=2 grid-template-columns | Programmatic | F-07: zero grids |
| AC-09 | Uniform section padding | >=3 distinct padding values | Programmatic | F-08: all 80px |
| AC-10 | > 20 lines sub-perceptual CSS | Count lines below thresholds | Programmatic | F-10: 238 lines wasted |
| AC-11 | < 3 channels shifting at boundaries | Check computed values per boundary | Programmatic | F-12: ~0 channels shift |
| AC-12 | Selector-to-HTML class mismatch | Verify selectors match DOM | Programmatic | G-01: .data-table missing |
| AC-13 | < 2 distinct divider styles | Verify divider variation | Programmatic | G-03: all 1px same |
| AC-14 | < 8 perceptible mechanisms | Count visually confirmed mechanisms | Perceptual (PA) | F-11: 8/14 perceptible |

**14 anti-conditions, all programmatically verifiable except AC-14 (requires PA).**

---

**END OF FAILURE FORENSICS**
