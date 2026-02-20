# 17 -- ENHANCED GATE CROSS-REFERENCE: Every Threshold vs Empirical Evidence

**Agent:** gate-researcher (Opus 4.6)
**Date:** 2026-02-19 (v2 -- corrected framing per team lead directive)
**Method:** Extracted actual CSS values from CD-006-pilot-migration.html (Ceiling tier, 39/40) and 07-intentionality.html (failed Flagship attempt, 1.5/4 pre-remediation, 2.5/4 post-remediation). Every gate threshold compared against empirical evidence from both files, the 14-dimension Flagship definition (01-DEFINITION.md), and source documents.

**CRITICAL FRAMING:**
- **CD-006 is CEILING tier, NOT Flagship.** It is a floor reference for Ceiling quality, not the target.
- **Flagship 4/4 has NEVER been achieved.** The target is defined by the 14-dimension spec in 01-DEFINITION.md.
- **CD-006 SHOULD fail some Flagship gates.** Where CD-006 fails a gate that Flagship requires, the gate is CORRECT -- not miscalibrated.
- **Where the Flagship definition (01-DEFINITION.md) and gate thresholds disagree, the Flagship definition wins.**

**Sources read:**
- `ephemeral/flagship-44-recipe/01-DEFINITION.md` (14-dimension Flagship spec -- PRIMARY AUTHORITY)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (Ceiling tier, 39/40)
- `ephemeral/flagship-experiment/07-intentionality.html` (failed Flagship, remediated version)
- `design-system/compositional-core/vocabulary/tokens.css` (184 lines)
- `design-system/compositional-core/identity/prohibitions.md` (420 lines)
- `ephemeral/flagship-44-recipe/05-ANTI-CONDITIONS.md` (507 lines)
- `ephemeral/flagship-audit/10-REMEDIATION-PROMPT.md` (301 lines)
- `ephemeral/flagship-retrospective/09-SYNTHESIS.md` (200 lines)
- `ephemeral/flagship-remediation/FINAL-VERDICT.md` (306 lines)

---

## KEY FINDING: CONTAINER WIDTH RANGE

**01-DEFINITION.md D-07 specifies container width as 940-1100px** (not 940-960px). CD-006 uses 1100px (within this range). The gate draft's 940-960px threshold is NARROWER than the Flagship definition. Gate should be updated to match the definition's 940-1100px.

---

## MASTER CROSS-REFERENCE TABLE

### TIER 1: PROGRAMMATIC GATES (Automated JS checks)

#### SC-01: Container Width

| Property | Value |
|----------|-------|
| **Gate threshold** | 940-960px |
| **Source evidence** | tokens.css has no container max-width token. The 940-960px range comes from Phase D validation where 4/5 pages violated it, but the range was set by project lore, not by CD-006. |
| **CD-006 actual** | **`max-width: 1100px`** (lines 255, 299, 958). Content column: `max-width: 70ch` (~700px at 16px). Media queries at 960px and 768px breakpoints. |
| **Flagship actual** | `max-width: 960px` (lines 181, 198, many inline styles). COMPLIANT with gate. |
| **Match?** | **GATE DRAFT IS TOO NARROW.** The 01-DEFINITION.md (D-07) specifies 940-1100px. The gate draft uses 940-960px. CD-006 (Ceiling, 1100px) falls within the Flagship definition's range. Flagship (960px) also falls within it. The gate should match the Flagship definition. |
| **Recommendation** | Update gate threshold to 940-1100px per 01-DEFINITION.md D-07. |

---

#### SC-02: Border-Radius Zero

| Property | Value |
|----------|-------|
| **Gate threshold** | Every computed border-radius === "0px" |
| **Source evidence** | prohibitions.md #1 (ABSOLUTE). tokens.css `--border-radius: 0` (line 102). |
| **CD-006 actual** | `*:where(:not(input, button, select)) { border-radius: 0; }` (line 168). Global reset. |
| **Flagship actual** | `* { border-radius: 0 !important; }` (line 56). Even more aggressive global reset. |
| **Match?** | YES. Both enforce. Gate threshold matches empirical evidence. |

---

#### SC-03: Box-Shadow None

| Property | Value |
|----------|-------|
| **Gate threshold** | Every computed box-shadow === "none" |
| **Source evidence** | prohibitions.md #2 (ABSOLUTE). tokens.css `--box-shadow: none` (line 103). |
| **CD-006 actual** | No box-shadow declarations found. Enforced by omission. |
| **Flagship actual** | `* { box-shadow: none !important; }` (line 59). Explicit global reset. |
| **Match?** | YES. Both enforce. Gate threshold matches. |

---

#### SC-04: Warm Palette (R >= G >= B on all backgrounds)

| Property | Value |
|----------|-------|
| **Gate threshold** | Every background color satisfies R >= G >= B |
| **Source evidence** | prohibitions.md #16 (no cool grays). Anti-conditions S-04 (sub-perceptual emphasis). |
| **CD-006 actual** | Zone backgrounds: `#FEF9F5` (R=254,G=249,B=245 PASS), `#FAF5ED` (R=250,G=245,B=237 PASS), `#FFFFFF` (R=G=B=255, EDGE). Callout backgrounds: `#F5F9FE` (R=245,G=249,B=254 **FAIL: G>R, B>G**), `#F2F9F4` (R=242,G=249,B=244 **FAIL: G>R**), `#F8F5FE` (R=248,G=245,B=254 **FAIL: B>R**). |
| **Flagship actual** | All 12 zone backgrounds pass R>=G>=B. S1: `#FEF5EB` (254,245,235 PASS). S2: `#F5EDE2` (245,237,226 PASS). S8: `#F2EFEA` (242,239,234 PASS). All warm. |
| **Match?** | **OBSERVATION.** CD-006 (Ceiling) has 3 callout backgrounds violating R>=G>=B. These are hue-tinted accent backgrounds for semantic meaning (info=blue, success=green, creative=purple). The Flagship definition does not explicitly address callout accent hues. tokens.css itself contains cool-tinted tokens (`--bg-info: #F5F8FA`, `--bg-tip: #F5FAF5`). The question is whether Flagship SHOULD allow cool-tinted callout accents or enforce warm palette universally. |
| **Recommendation** | Two options: (a) Enforce R>=G>=B universally per soul constraints -- Flagship achieves visual variety through zone backgrounds (D-02) and multi-coherence (D-04), not through cool-tinted callouts. This is the stricter, Flagship-appropriate approach. (b) Add narrow exception for callout accent backgrounds where R,G,B all >= 230 and the tint serves semantic purpose. Either way, tokens.css `--bg-info` and `--bg-tip` should be flagged as contradicting the soul constraint. |

---

#### SC-05: No Pure Black/White

| Property | Value |
|----------|-------|
| **Gate threshold** | No background === #000000 or #FFFFFF |
| **Source evidence** | prohibitions.md #6 (no extremes). |
| **CD-006 actual** | `--color-zone-dense: #FFFFFF` (line 84). Also `--color-text-inverse: #FFFFFF` implied by `color: var(--color-background)` on dark elements. Print styles: `body { background: white; color: black; }` (line 994). |
| **Flagship actual** | No #FFFFFF in zone backgrounds. Print styles: `body { background: white; color: black; }` (line 1091). |
| **Match?** | **GATE NEEDS PRINT EXCLUSION.** CD-006 uses `#FFFFFF` as `--color-zone-dense` (a tokens.css value). Both files use pure black/white in `@media print` blocks. For Flagship: the definition (D-07) does not explicitly address #FFFFFF, but the soul constraint (prohibitions.md #6) prohibits pure extremes. A Flagship page should avoid #FFFFFF backgrounds. CD-006 using it is a Ceiling-tier shortcut, not a pattern to reproduce. |
| **Recommendation** | Exclude `@media print` blocks from the check. Exclude `color` properties on elements with dark backgrounds (text-inverse context). For zone backgrounds: enforce no #FFFFFF -- Flagship must use warm near-whites (e.g., #FEFEFE or #FEF9F5) instead. This is stricter than CD-006 and appropriate for Flagship. |

---

#### SC-06: Font Trinity

| Property | Value |
|----------|-------|
| **Gate threshold** | Only 3 font families: Instrument Serif (display), Inter (body), JetBrains Mono (code) |
| **Source evidence** | tokens.css `--font-display`, `--font-body`, `--font-code` (lines 87-89). prohibitions.md #7. |
| **CD-006 actual** | `:root` declares all 3 fonts. All font-family uses reference `var(--font-display)`, `var(--font-body)`, `var(--font-code)`. No foreign font families. |
| **Flagship actual** | `:root` declares all 3 fonts (lines 82-84). All references use variables. No foreign font families. |
| **Match?** | YES. Both compliant. Gate matches evidence. |

---

#### SC-07: Instrument Serif Display-Only

| Property | Value |
|----------|-------|
| **Gate threshold** | font-family containing "Instrument Serif" only on h1, h2, h3, [display] elements |
| **Source evidence** | prohibitions.md #7 (Instrument Serif display-only). |
| **CD-006 actual** | Uses `var(--font-display)` on h1 (implied via heading styles), `.core-abstraction-principle` (display text), `.callout--essence .callout-label` (label). Never on body paragraphs. |
| **Flagship actual** | Uses `var(--font-display)` on `.page-header h1`, `.master-insight p`, `.page-footer .footer-closing`. Never on body paragraphs. |
| **Match?** | YES. Both compliant. Gate matches. |

---

#### SC-08: Component Variety

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 8 distinct component types |
| **Source evidence** | Middle experiment achieved 4/4 with many component types. CD-006 has 11+ types. The "8" threshold is from the tier model (Middle: 8-10 mechanisms). |
| **CD-006 actual** | **11+ distinct types:** callout--info, callout--tip, callout--gotcha, callout--essence, callout--challenge, code-block, file-tree, decision-matrix, bento-grid, reasoning (Q&A columns), core-abstraction. Plus tables, deployment stages. |
| **Flagship actual** | **5-6 types:** callout--info, callout--tip, callout--gotcha, callout--essence, tension-pair (grid of 2 callouts), sequence-block, pullquote. No code-block, no file-tree, no decision-matrix, no bento-grid. |
| **Match?** | YES (for CD-006), NO (for Flagship). CD-006 passes at 11+. Flagship fails at 5-6. The threshold of 8 correctly distinguishes success from failure. **However:** content type matters -- Flagship's research-synthesis content has fewer natural component opportunities than CD-006's tutorial content. The gate should note that content type constrains achievable variety. |

---

#### SC-09: Background Diversity (>= 15 RGB delta between adjacent zone backgrounds)

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 15 RGB (max channel delta) between adjacent zone backgrounds |
| **Source evidence** | Anti-conditions S-04 + S-08: "perception threshold ~15-20 RGB." Remediation prompt: "bg >= 8 RGB required >= 10." Retrospective RC-4: "1-8 RGB deltas" were the failure. FINAL-VERDICT: "S4-S5 delta 2 RGB, S9-S10 delta 0-5 RGB (below threshold)." |
| **CD-006 actual** | Only 3 zone backgrounds: `#FEF9F5` (254,249,245), `#FFFFFF` (255,255,255), `#FAF5ED` (250,245,237). Sparse-to-Dense delta: R=1,G=6,B=10 = max 10. Dense-to-Breathing: R=5,G=10,B=18 = max 18. **BUT:** CD-006 achieves visual variety through COMPONENT backgrounds, not zone backgrounds. Callout hue-tints (#F5F9FE blue, #F2F9F4 green, #FEF6F5 coral, #FFFBF2 amber, #F8F5FE purple) provide massive RGB deltas between adjacent components (20-30+). |
| **Flagship actual (REMEDIATED)** | 12 zone backgrounds with these adjacent deltas: S1→S2: R=9,G=8,B=9 (max 9 FAIL). S2→S3: R=6,G=6,B=6 (max 6 FAIL). S3→S4: R=3,G=3,B=5 (max 5 FAIL). S4→S5: R=2,G=2,B=2 (max 2 FAIL). S5→S6: R=5,G=8,B=13 (max 13 FAIL). S8→S9: R=12,G=8,B=6 (max 12 FAIL). S10→S11: R=6,G=3,B=1 (max 6 FAIL). **Nearly ALL adjacent pairs fail the >= 15 threshold.** |
| **Match?** | **GATE IS CORRECT FOR FLAGSHIP.** The Flagship definition (D-02) explicitly requires >=15 RGB between adjacent zone backgrounds. CD-006 (Ceiling) achieves visual variety through component backgrounds instead -- a Ceiling-tier approach. Flagship MUST achieve it at the zone level per D-02, which requires >=8 perceptible zone transitions with >=2 channels each (background being one). The gate correctly enforces the Flagship requirement. CD-006 failing this gate is EXPECTED because CD-006 is Ceiling, not Flagship. |
| **Recommendation** | Keep the >=15 RGB zone background gate as is -- it enforces the Flagship definition. The Flagship builder must produce perceptible zone-level background variation, not rely solely on component-level diversity. This is one of the dimensions that distinguishes Flagship from Ceiling. |

---

#### SC-10: Maximum Inter-Section Gap

| Property | Value |
|----------|-------|
| **Gate threshold** | No gap between adjacent sections exceeds 120px (originally 108px, corrected in gate-runner draft) |
| **Source evidence** | tokens.css `--space-max-zone: 96px` (line 116). FINAL-VERDICT: "6 of 11 gaps exceed 120px, S4-S5 at 175px worst." Retrospective RC-14: "stacked gaps 210-276px." |
| **CD-006 actual** | Uses transition markers with explicit gap sizes: "SMOOTH transition: 36px gap" (line 764), "CHECKPOINT transition: 64px gap + 3px structural border" (line 775), "BREATHING transition: 80px gap + 3px structural border" (line 786). Maximum defined gap: 80px. All under 120px. |
| **Flagship actual (REMEDIATED)** | Reduced transitions: "SMOOTH: margin 16px" (line 594), "BRIDGE: margin 24px" (line 601), "BREATHING: margin 24px" (line 608). These are much smaller than pre-remediation. However, FINAL-VERDICT reports stacking still produces 120px+ gaps (6 of 11 exceed 120px). |
| **Match?** | **YES for CD-006** (max 80px < 120px). **NO for Flagship** despite remediation. The 120px threshold correctly distinguishes the two. CD-006's explicit transition sizing (36/64/80px) with structural borders filling visual gaps is the pattern that works. |
| **tokens.css note** | `--space-max-zone: 96px` suggests the system's own max is 96px, not 120px. The 120px threshold gives 24px of stacking headroom. Consider tightening to 108px or even 96px (matching the token). |

---

#### SC-11: Typography Scale (>= 10px delta between display and body, >= 3 distinct zones)

| Property | Value |
|----------|-------|
| **Gate threshold** | Display-body delta >= 10px AND >= 3 typographically distinct zones |
| **Source evidence** | CD-006's type scale is the reference. Flagship had "uniform typography (all 16px/400)" per Mode 4 PA. |
| **CD-006 actual** | Base body: 16px (var --type-body). Section headings (h2): `var(--type-section)` which maps to `1.625rem` = 26px. Page heading (h1): `var(--type-page)` = `3rem` = 48px. Subsection (h3): `var(--type-subsection)` = `1.375rem` = 22px. Meta text: `var(--type-meta)` = `0.8125rem` = 13px. Display-body delta: 48-16 = 32px. At responsive 480px: h1 shrinks to `1.625rem` = 26px, still 10px delta. **Distinct typographic treatments:** meta labels (13px + 0.1em letter-spacing), body (16px), subsection (22px), section (26px), page (48px), display numerals (3.5em = 56px). **6 distinct levels.** |
| **Flagship actual** | Zone 1 paragraphs: 17px. Zone 2: 15px. Zone 3: 16px. Standard: 16px. H2 Zone 1: 30px. H2 Zone 2: 26px. H2 Zone 3: 28px. Display-body delta: 30-15 = 15px (passes). Zone count: 3 typographic zones defined (generous/compressed/standard). **However**, FINAL-VERDICT reports "S9-S12 typography 15px not applying" -- specificity issues meant Zone 2 rules didn't render. Computed output was closer to uniform 16px. |
| **Match?** | YES for CD-006 (32px delta, 6 levels). PARTIAL for Flagship (design had 15px delta and 3 zones, but CSS specificity caused rendering failures). The gate would pass the Flagship's CSS-as-written but fail the computed output. **Gate must check COMPUTED values, not declared values.** |

---

#### SC-12: Transition Types (>= 3 distinct transition treatments between sections)

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 3 distinct transition treatments between major sections |
| **Source evidence** | CD-006 convention spec defined 3 transition types. Pipeline research identified transition grammar as a critical gap. |
| **CD-006 actual** | **3 explicit transition types:** (1) SMOOTH: 36px gap, no border (line 764). (2) CHECKPOINT: 64px gap + 3px structural border (line 775). (3) BREATHING: 80px gap + 3px structural border (line 786). Each is distinctly named, sized, and styled. |
| **Flagship actual** | **3 CSS-defined types:** (1) SMOOTH: margin 16px, 1px border (line 590-595). (2) BRIDGE: margin 24px, 2px border (line 597-602). (3) BREATHING: margin 24px, 3px border (line 604-609). Types are defined but visually close (16px vs 24px = 8px difference, border 1px vs 2px vs 3px). |
| **Match?** | YES for both in CSS-as-written. The gate checks declaration count, which both pass. However, CD-006's transitions are PERCEPTIBLY different (36/64/80px gaps) while Flagship's are barely distinguishable (16/24/24px). The gate checks EXISTENCE, not PERCEPTIBILITY. |
| **Recommendation** | Add perceptibility requirement: "Transitions must differ by >= 16px in gap size OR >= 2px in border weight." This catches Flagship's near-identical transitions. |

---

#### SC-13: Grid/Layout Variety (>= 2 distinct layout patterns)

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 2 distinct grid/layout patterns |
| **Source evidence** | CD-006 used multiple grids. Flagship had minimal grid usage. |
| **CD-006 actual** | **5+ distinct layouts:** (1) bento-grid: `grid-template-columns: repeat(4, 1fr)` with span variants (line 796). (2) reasoning-columns: `grid-template-columns: 1.618fr 1fr` golden-ratio grid (line 827). (3) 3-column grid: `repeat(3, 1fr)` (line 931). (4) Flex column stacks (lines 321, 740). (5) Inline flex for horizontal elements (line 673, 960). |
| **Flagship actual** | **3 grid layouts, all identical:** tension-pair: `1fr 1fr` (line 875). sequence-grid: `1fr 1fr` (line 883). hypothesis-grid: `1fr 1fr` (line 891). All use the same 2-column equal-width pattern. Plus standard block flow. |
| **Match?** | CD-006 passes at 5+. Flagship technically passes at 3 (>= 2) but all 3 are the SAME `1fr 1fr` pattern. The gate checks DISTINCT patterns, and `1fr 1fr` x3 should count as 1, not 3. **Gate needs to check uniqueness of grid-template-columns values, not just count of grid declarations.** |
| **Recommendation** | Add deduplication: "Distinct means different grid-template-columns values. `1fr 1fr` used on 3 different classes counts as 1 pattern." |

---

#### SC-14: Letter-Spacing Variation (>= 0.025em between zones)

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 0.025em delta in letter-spacing between typographic zones |
| **Source evidence** | Anti-conditions S-04/S-08: perception threshold. Remediation prompt: ">= 0.5px." Retrospective: flagship letter-spacing 0.096px (imperceptible). Multiple sources give different numbers: 0.02em, 0.03125em, 0.025em. |
| **CD-006 actual** | Meta/label elements: `letter-spacing: 0.1em` or `0.15em` (lines 264, 275, 378, 408, etc.). Body text: default (0). Display elements: `letter-spacing: 0.05em` (lines 489, 579). Zone-level variation achieved through meta elements, not paragraph text. Delta between meta (0.1em) and body (0): 0.1em >> 0.025em. |
| **Flagship actual** | Zone 1 paragraphs: `letter-spacing: 0.02em` (line 920). Zone 2: `-0.01em` (line 929). Zone 3/standard: `0` (lines 938, 946). Heading Zone 1: `0.03em` (line 957). Heading Zone 2: `-0.02em` (line 965). Meta labels: `0.08em`, `0.12em` (lines 307, 465). Paragraph zone delta: Zone1-Zone2 = 0.02-(-0.01) = 0.03em (passes 0.025). Zone2-Zone3 = -0.01-0 = 0.01em (FAILS). |
| **Match?** | **PARTIAL.** CD-006 achieves letter-spacing variation through DIFFERENT ELEMENT TYPES (meta=0.1em, body=0, display=0.05em), not zone-by-zone paragraph variation. The gate measures zone-to-zone paragraph delta, but CD-006's approach is element-type delta. Flagship has zone variation but some adjacent zone deltas fall below 0.025em. |
| **Recommendation** | Redefine: "The page must demonstrate letter-spacing variation across at least 3 distinct levels (e.g., meta, body, display) with >= 0.025em between any two levels." This matches how CD-006 actually works. |

---

#### SC-15: Border Configuration Variety (>= 3 distinct border configurations)

| Property | Value |
|----------|-------|
| **Gate threshold** | >= 3 distinct border configurations (different weight + style + context combinations) |
| **Source evidence** | CD-006 convention spec: 4px structural, 3px accent, 1px micro. Flagship had zero structural borders rendered (selector mismatch). |
| **CD-006 actual** | **7+ distinct configurations:** (1) 3px solid primary (header bottom, line 251). (2) 4px solid primary (callout left, section borders, line 398/864). (3) 3px solid border-color (section containers, line 309/470/517). (4) 1px solid border-color (table rows, line 566/590). (5) 1px solid border-subtle (internal dividers, line 509). (6) 3px solid accent-green (section top, line 762). (7) 4px solid text (high-weight feature, line 898). (8) 3px solid text-secondary (medium, line 902). (9) 1px solid border (lightest, line 906). **Border weight varies by semantic role and zone.** |
| **Flagship actual (REMEDIATED)** | **Border declarations exist:** 4px/3px/1px weights defined in `:root` (lines 148-150). Zone-specific border rules: Zone 1 = 1px only (line 335), Zone 2 = 4px structural + 3px accent (lines 353-366), Zone 3 = 1px only (line 390). **However**, FINAL-VERDICT reports "Zero structural borders rendered -- selector mismatch." The CSS targets `.zone-sN table` but HTML uses different class structure. Gates count >= 3 distinct configs: technically present in CSS but NOT RENDERED in DOM. |
| **Match?** | CD-006 passes at 7+. Flagship FAILS in rendering despite CSS declarations. **Gate must check rendered borders, not just CSS declarations.** A JS check of `getComputedStyle` on actual border-bearing elements is needed. |

---

### TIER 2: DELIVERABLE/YAML GATES (Checked via file inspection)

#### SC-16: Soul Constraint YAML

| Property | Value |
|----------|-------|
| **Gate threshold** | YAML deliverable confirms soul constraint compliance |
| **Source evidence** | Standard verification deliverable. |
| **CD-006 actual** | N/A (no YAML produced; CD-006 predates this gate). |
| **Flagship actual** | Soul check performed: 20 PASS, 2 WARNING, 0 FAIL (FINAL-VERDICT). |
| **Match?** | YES. Gate structure is sound. No threshold controversy. |

---

#### SC-17: Mechanism Declaration

| Property | Value |
|----------|-------|
| **Gate threshold** | Builder declares >= 8 mechanisms with CSS evidence for each |
| **Source evidence** | Tier model: Middle 8-10, Ceiling 12-15, Flagship 16-18. |
| **CD-006 actual** | 20+ references to specific mechanisms in CSS comments. Example: "Mechanism #1 border-weight" (lines 335, 353, 364, 385), "Mechanism #6 Width Variation" (line 525), "Mechanism #10 border-left" (lines 354, 375), "Mechanism #18 micro-borders" (line 411). |
| **Flagship actual** | 14 mechanisms claimed per experiment logs. CSS comments reference border-weight, zone backgrounds, typographic variation, width variation, letter-spacing, line-height compression, and more. However, many had sub-perceptual implementation. |
| **Match?** | CD-006 passes overwhelmingly. Flagship passes the declaration count but fails perceptibility. **Gate checks declaration, not perceptibility. PA catches the rest.** This is the correct architecture -- gates check existence, PA checks quality. |

---

#### SC-18: Transition Grammar Declaration

| Property | Value |
|----------|-------|
| **Gate threshold** | Builder declares >= 3 transition types with distinct CSS per type |
| **Source evidence** | Pipeline research: transition grammar is a critical gap. CD-006 convention spec defined 3 types. |
| **CD-006 actual** | 3 types explicitly defined and named in CSS comments (lines 764, 775, 786). |
| **Flagship actual** | 3 types defined in CSS (lines 590-609). But visually near-identical. |
| **Match?** | Both pass declaration. Gate is sound for declaration check. Perceptibility is PA's job. |

---

#### SC-19: Content-Form Fit Declaration

| Property | Value |
|----------|-------|
| **Gate threshold** | Builder documents which content sections map to which component types and why |
| **Source evidence** | Pipeline research: content-form fit prevents over-formation (bento grid for 2 items). |
| **CD-006 actual** | Clear content-form alignment: bento-grid used for multi-item catalogs (token categories, audit domains), reasoning-columns for Q&A, code-blocks for code, decision-matrix for comparison. Each component type matches its content purpose. |
| **Flagship actual** | Less clear alignment. Research synthesis content is mostly prose. tension-pair used for opposing-view content (appropriate). sequence-block used for sequential steps (appropriate). But large prose sections have no specialized component. |
| **Match?** | Gate checks for documentation, not quality of fit. Sound as designed. |

---

### TIER 3: BEHAVIORAL GATES (Checked via observation)

#### SC-20: Fix Cycle Compliance

| Property | Value |
|----------|-------|
| **Gate threshold** | Builder responds to PA findings within 1 iteration |
| **Source evidence** | Remediation demonstrated Opus can self-correct from PA feedback. |
| **CD-006 actual** | N/A (CD-006 was built in a different team structure). |
| **Flagship actual** | Remediation improved PA-05 from 1.5/4 to 2.5/4 in 1 iteration. |
| **Match?** | YES. Gate is observational, not threshold-based. Sound. |

---

#### SC-21: No Prohibited Patterns

| Property | Value |
|----------|-------|
| **Gate threshold** | Zero instances of: gradient backgrounds, drop-shadow, border-radius > 0, pure black text on white background |
| **Source evidence** | prohibitions.md (22 prohibitions). |
| **CD-006 actual** | Print styles use `background: white; color: black;` (line 994). No gradients, no shadows, no radius > 0. |
| **Flagship actual** | Print styles use `background: white; color: black;` (line 1091). No gradients, no shadows. |
| **Match?** | Both pass (excluding print styles). Gate should explicitly exclude `@media print` blocks. |

---

## SUMMARY: GATE HEALTH SCORECARD

CD-006 is Ceiling tier (floor reference). Flagship is the failed attempt. The "Flagship Def" column shows whether the gate aligns with the 14-dimension Flagship definition in 01-DEFINITION.md.

| Gate | Threshold Source | CD-006 (Ceiling) | Flagship Attempt | Aligns w/ 01-DEFINITION? | Action Needed |
|------|-----------------|---------|----------|-------------|---------------|
| SC-01 | Phase D lore | 1100px (outside 940-960) | 960px | **NO -- Def says 940-1100px** | Widen to 940-1100px per D-07 |
| SC-02 | prohibitions.md | PASSES | PASSES | YES | None |
| SC-03 | prohibitions.md | PASSES | PASSES | YES | None |
| SC-04 | prohibitions.md | 3 cool callout bgs | PASSES | **AMBIGUOUS** -- Def silent on callout accents | Decision needed (see recommendation) |
| SC-05 | prohibitions.md | #FFFFFF zone-dense | PASSES | YES (stricter than CD-006 is correct) | Exclude @media print + inverse contexts |
| SC-06 | tokens.css | PASSES | PASSES | YES | None |
| SC-07 | prohibitions.md | PASSES | PASSES | YES | None |
| SC-08 | tier model | PASSES (11+) | FAILS (5-6) | YES (D-11: >=8 types) | None |
| SC-09 | anti-conditions | zone delta 10 | zone delta 2-13 | **YES** -- D-02 requires >=15 RGB zones | Gate is CORRECT for Flagship |
| SC-10 | tokens.css + FINAL-VERDICT | PASSES (max 80px) | FAILS (6/11 > 120px) | YES (D-06: <=96px Flagship) | Consider tightening to 96px per D-06 |
| SC-11 | type scale analysis | PASSES (32px, 6 levels) | PARTIAL (specificity failures) | YES (D-07: >=2px font delta) | Must check COMPUTED values |
| SC-12 | convention spec | PASSES (36/64/80px) | PASSES (16/24/24px) | YES but needs perceptibility | Add minimum gap difference |
| SC-13 | layout analysis | PASSES (5+) | BORDERLINE (3x 1fr 1fr) | YES (D-12: >=3 grid layouts) | Deduplicate identical patterns |
| SC-14 | anti-conditions | PASSES (0.1em meta, 0 body) | PARTIAL (0.03em max) | YES (D-07: >=0.5px letter-spacing) | Keep; check computed values |
| SC-15 | convention spec | PASSES (7+) | FAILS (0 rendered) | YES (D-07: >=3px structural) | Check RENDERED borders |
| SC-16 | standard | N/A | PASSES | YES | None |
| SC-17 | tier model | PASSES (20+) | PASSES (14) | YES (D-01: >=14 perceptible) | Gate checks count, PA checks quality |
| SC-18 | pipeline research | PASSES | PASSES | YES (D-02 transition types) | None |
| SC-19 | pipeline research | PASSES | PASSES | YES | None |
| SC-20 | behavioral | N/A | PASSES | YES | None |
| SC-21 | prohibitions.md | PASSES* | PASSES* | YES | Exclude @media print |

**Legend:** CD-006 values are Ceiling-tier observations (NOT the target). "Aligns w/ 01-DEFINITION" is the critical column.

---

## GATES THAT NEED MODIFICATION (Priority Order)

### THRESHOLD CORRECTIONS (Gate draft disagrees with Flagship definition)

1. **SC-01 (Container Width):** Gate draft says 940-960px. 01-DEFINITION.md D-07 says 940-1100px. **UPDATE TO MATCH DEFINITION.**
2. **SC-10 (Max Gap):** Gate draft says 120px. 01-DEFINITION.md D-06 says <=96px for Flagship. **CONSIDER TIGHTENING TO 96px.**

### GATE CORRECT FOR FLAGSHIP (CD-006 fails but that is expected -- CD-006 is Ceiling, not Flagship)

3. **SC-09 (Zone Background Diversity):** Gate requires >=15 RGB between adjacent zones. CD-006 achieves variety through components instead (Ceiling approach). Flagship definition D-02 requires zone-level transitions. **GATE IS CORRECT. Do NOT weaken.**

### IMPLEMENTATION FIXES (Gate measures wrong thing or has edge cases)

4. **SC-11 (Typography Scale):** Must check COMPUTED styles, not CSS declarations. Specificity issues can silently prevent rendering.
5. **SC-15 (Border Configs):** Must check RENDERED borders, not CSS declarations. Flagship had border CSS but zero rendered structural borders.
6. **SC-13 (Layout Variety):** Must deduplicate identical `grid-template-columns` values. Three `1fr 1fr` grids = 1 pattern, not 3.
7. **SC-14 (Letter-Spacing):** Check computed values. Both CD-006 and Flagship have some sub-threshold deltas.
8. **SC-12 (Transition Types):** Add minimum perceptible difference between types (>= 16px gap difference OR >= 2px border weight difference).
9. **SC-05, SC-21 (Print exclusion):** Exclude @media print blocks from pure black/white and prohibited pattern checks.

### DECISION NEEDED (Ambiguous -- Flagship definition does not address)

10. **SC-04 (Warm Palette callout accents):** tokens.css contains cool-tinted callout tokens that violate R>=G>=B. Soul constraint says no cool grays. Flagship definition is silent on callout accents. Options: (a) enforce strict R>=G>=B universally, or (b) add narrow exception for semantic callout accents. **User decision required.**

---

## THRESHOLD PROVENANCE (Source tracing)

| Gate | Gate Draft Value | 01-DEFINITION Value | Match? | Best Source |
|------|-----------------|-------------------|--------|------------|
| SC-01 | 940-960px | 940-1100px (D-07) | **NO** -- definition is wider | 01-DEFINITION.md D-07 |
| SC-08 | >= 8 types | >= 8 (D-11 Flagship) | YES | 01-DEFINITION.md D-11 |
| SC-09 | >= 15 RGB | >= 15 RGB on >= 1 channel (D-02) | YES | 01-DEFINITION.md D-02 |
| SC-10 | 120px | <= 96px (D-06 Flagship) | **NO** -- definition is stricter | 01-DEFINITION.md D-06 |
| SC-11 | 10px delta | >= 2px font delta (D-07) | **DIFFERENT** -- def uses 2px | 01-DEFINITION.md D-07 |
| SC-12 | >= 3 types | Not directly specified | N/A | CD-006 convention spec |
| SC-13 | >= 2 patterns | >= 3 grid/flex (D-12 Flagship) | **NO** -- definition says >=3 | 01-DEFINITION.md D-12 |
| SC-14 | 0.025em | >= 0.5px / 0.03em (D-07) | **CLOSE** -- def says 0.5px at 16px = 0.03125em | 01-DEFINITION.md D-07 |
| SC-17 | >= 8 mechanisms | >= 14 perceptible (D-01 Flagship) | **NO** -- definition says >=14 | 01-DEFINITION.md D-01 |

---

## CONCLUSION

**CD-006 is Ceiling tier, NOT Flagship.** The Flagship target (14 dimensions in 01-DEFINITION.md) has NEVER been achieved. Gates should be calibrated to the Flagship definition, not to CD-006.

**Gates where CD-006 diverges from the Flagship target -- and the gate is CORRECT:**
- **SC-09 (Zone background diversity):** CD-006 uses component-level diversity (Ceiling approach). Flagship requires zone-level diversity (D-02). Gate is correct.
- **SC-05 (No pure white):** CD-006 uses #FFFFFF as zone-dense. Flagship should use warm near-whites. Gate is correct (with print exclusion).

**Gates where the gate draft diverges from the Flagship DEFINITION -- gate needs updating:**
- **SC-01 (Container width):** Gate draft says 940-960px. Flagship definition (D-07) says 940-1100px. UPDATE GATE.
- **SC-04 (Warm palette):** Ambiguous -- Flagship definition does not address callout accent hues. tokens.css itself contradicts the soul constraint. DECISION NEEDED.

**Gates that correctly catch Flagship failure patterns:**
- SC-08 (component variety), SC-10 (max gap), SC-15 (border configs) all correctly distinguish the failed Flagship (1.5/4) from the Ceiling reference (CD-006).

**Gates that need implementation fixes (not threshold changes):**
- SC-11, SC-15: Must check COMPUTED styles, not CSS declarations (specificity issues can prevent rendering).
- SC-13: Must deduplicate identical grid-template-columns values.
- SC-12: Should add minimum perceptible difference between transition types.
- SC-21: Exclude @media print blocks.

**Key observation from Flagship definition alignment:** The gate system in 02-gate-research.md covers 15 of the 21 programmatic gates. The Flagship definition adds dimensions that CANNOT be gated programmatically: D-04 (multi-coherence), D-05 (fractal self-similarity at 5 scales), D-09 (axis variety), D-13 (structural metaphor). These are PA territory. The gate system correctly handles the ~26% that is automatable; PA handles the ~74% that is not. This architecture is confirmed by the Flagship definition's own verification protocol (Phases 1-5).
