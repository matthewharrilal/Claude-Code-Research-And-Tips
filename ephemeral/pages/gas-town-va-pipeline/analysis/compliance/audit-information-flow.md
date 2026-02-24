# Information Flow Trace: Pipeline Stage-by-Stage Propagation Audit

**Auditor:** flow-tracer
**Scope:** Content -> Content Map -> Execution Brief -> HTML -> Gate Results -> Verdict -> PA Reports
**Files examined:** content-map.md, execution-brief.md, yegge-gas-town.html (1705 lines CSS, ~1200 lines HTML), gate-results.md, verdict.md, pa-auditor-a.md, pa-auditor-f.md

---

## ASCII Flow Diagram: Propagation Rates at Each Junction

```
  ┌─────────────────────┐
  │   SOURCE CONTENT    │
  │   (~5,800 words)    │
  │   13 sections       │
  │   6 element types   │
  │   4 tensions        │
  │   3 metaphor seeds  │
  └──────────┬──────────┘
             │
             │  JUNCTION 1: Content → Content Map
             │  PROPAGATION: 95%
             │  QUALITY: IMPROVED (structured + analyzed)
             │
  ┌──────────▼──────────┐
  │    CONTENT MAP      │
  │   79 lines          │
  │   6 zones           │
  │   4 tensions        │
  │   3 metaphor seeds  │
  │   density arc       │
  │   reader profile    │
  └──────────┬──────────┘
             │
             │  JUNCTION 2: Content Map → Execution Brief
             │  PROPAGATION: 90%
             │  QUALITY: AMPLIFIED (CSS-specific, boundary-mapped)
             │
  ┌──────────▼──────────┐
  │  EXECUTION BRIEF    │
  │   174 lines         │
  │   4 tiers           │
  │   6 boundary specs  │
  │   8 dispositions    │
  │   CSS value table   │
  │   component targets │
  └──────────┬──────────┘
             │
             │  JUNCTION 3: Execution Brief → HTML     *** CRITICAL ***
             │  PROPAGATION: 78%
             │  QUALITY: PARTIALLY DEGRADED (selective loss)
             │
  ┌──────────▼──────────┐
  │    HTML OUTPUT      │
  │   ~2900 lines       │
  │   1705 lines CSS    │
  │   ~1200 lines HTML  │
  │   6 zones realized  │
  │   14+ mechanisms    │
  │   10+ components    │
  └──────────┬──────────┘
             │
             ├───────────────────────────────┐
             │                               │
             │  JUNCTION 4                   │  JUNCTION 6
             │  HTML → Gates                 │  HTML → PA Reports
             │  PROPAGATION: 85%             │  PROPAGATION: 92%
             │  QUALITY: PARTIALLY DEGRADED  │  QUALITY: IMPROVED
             │  (false positives, edge cases) │  (contextual analysis)
             │                               │
  ┌──────────▼──────────┐       ┌────────────▼─────────────┐
  │   GATE RESULTS      │       │    PA AUDITOR REPORTS     │
  │   18 gates          │       │    9 auditors             │
  │   14 PASS / 4 FAIL  │       │    PA-05: 3/4             │
  └──────────┬──────────┘       │    Tier 5: 6/9            │
             │                   └────────────┬─────────────┘
             │                                │
             │  JUNCTION 5                    │  JUNCTION 6b
             │  Gates → Verdict               │  PA → Verdict
             │  PROPAGATION: 100%             │  PROPAGATION: 95%
             │  QUALITY: PRESERVED            │  QUALITY: PRESERVED
             │                                │
             └──────────┬─────────────────────┘
                        │
             ┌──────────▼──────────┐
             │      VERDICT        │
             │   247 lines         │
             │   SHIP WITH FIXES   │
             │   PA-05: 3/4        │
             │   2 BLOCKING        │
             │   4 SIGNIFICANT     │
             │   5 MODERATE        │
             │   5 MINOR           │
             └─────────────────────┘
```

---

## JUNCTION 1: Content → Content Map

### What the content provides:
- ~5,800 words across 13 sections
- 6 distinct element types: prose, tables, ASCII diagrams, code blocks (bash), blockquotes, bulleted lists
- Structural heterogeneity: HIGH (no two adjacent sections share the same element profile)
- Inherent metaphors: ant colony/factory, Mad Max, idea compiler, kitchen/chef, fish markets, cattle vs pets
- Narrative arc: philosophy -> architecture -> implementation -> decision
- Gatekeeping function: explicit prerequisites, "Stage 7+"

### What the content map captures:

| Content Feature | Propagated? | How? |
|----------------|-------------|------|
| 6 element types | YES | Listed explicitly: "14 ASCII diagrams, 12 tables, 18 code blocks, 22 blockquotes, prose, bulleted lists" (line 8) |
| 13 sections | YES | Collapsed into 6 zones with section mapping (Z1=S0-S2, Z2=S3, Z3=S4-S5, Z4=S6, Z5=S7-S9, Z6=S10-S13) |
| Structural heterogeneity | YES | Classified as HIGH, noted "no two adjacent sections share the same element profile" |
| Metaphors | YES | 3 seeds analyzed (Refinery, Colony, Control Room) with risk ratings |
| Tensions | YES | 4 tensions identified with pole analysis: Chaos/Control, Accessibility/Gatekeeping, Simplicity/Scale, Human Agency/Machine Autonomy |
| Density variation | YES | Per-zone density arc with ASCII diagram showing WAVE pattern |
| Reader profile | YES | Detailed axis positions: Info Density 4/5, Visual Complexity 3/5, etc. |
| Narrative arc | YES | Captured as pacing column: ENTRY, IMMERSION, DEEPENING, CONSOLIDATION, PROCEDURAL, EXIT |
| Gatekeeping function | PARTIALLY | Mentioned in reader profile ("not a beginner seeking fundamentals") but the EXCLUSIONARY FORCE of the content is noted only in Tension #2 |

### PROPAGATION RATE: 95%
### TRANSFORMATION QUALITY: IMPROVED
The content map adds analytical structure (zone architecture, density arc, metaphor risk assessment, tension analysis) that does not exist in the raw content. The only loss is granular detail within sections (specific paragraph content, exact quotes) -- appropriate for this stage.

### LOSS POINTS:
1. Specific quote texts are not preserved (only "nature prefers colonies" appears indirectly via metaphor analysis)
2. Exact code block contents not catalogued
3. Individual table contents not enumerated

---

## JUNCTION 2: Content Map → Execution Brief

### What the content map provides:
- 6 named zones with density ratings
- 4 identified tensions
- 3 metaphor seeds with The Refinery recommended
- WAVE density arc
- Reader profile with axis positions

### What the execution brief captures:

| Content Map Element | Propagated? | How Transformed? |
|--------------------|-------------|------------------|
| Zone names (The Shift, Factory Floor, etc.) | YES | Preserved verbatim, mapped to refinery stages (intake, floor, tank, control, line, dispatch) |
| Zone densities (SPARSE, DENSE, MODERATE) | YES | Preserved and amplified with per-zone height estimates (700px to 2000px) |
| Tension #1 (Chaos vs Control) | YES | Drives refinery metaphor: "the factory tames chaos without eliminating it" is the CSS premise |
| Tensions #2-4 | IMPLICITLY | Not named in the brief, but their effects appear: gatekeeping = "Stage 7 gate" callout, simplicity/scale = "tighter spacing in processing zones" |
| Metaphor: The Refinery | YES | Fully elaborated with 6 CSS custom property names, structural element tokens (--pipeline-connector, --pressure-indicator, --gauge-reading) |
| Density arc | YES | WAVE pattern preserved verbatim with identical ASCII diagram |
| Reader profile | PARTIALLY | Entry velocity (2/5) drives D-05 slow opening; info density (4/5) drives spacing decisions. But the profile itself is only in the appendix, not the body. |
| Multi-coherence boundary map | NEW | 6 boundary specifications (Z1->Z2 through Z5->Z6) with RGB deltas, channel shifts, and transition types (Light/Medium/Heavy). This is the brief's PRIMARY VALUE-ADD -- it translates zones into CSS-actionable boundary specifications. |
| Component recommendations | NEW | 8 specific component classes listed with zone assignments: .callout, .code-block, .table-wrapper, .pull-quote, .section-header, .grid--2col, .collapsible, .toc |
| D-01 through D-08 dispositions | NEW | 8 disposition instructions translating compositional intent into CSS behavior: content-register reading, room perception, signing frame, second-half moment, scroll rhythm, negative space, edge intentionality, skeleton test |
| CSS value table | NEW | Specific CSS values: spacing scale 4-96px, border weights 4/3/1px, type scale 0.75-3rem, 800-1200 CSS line budget, 2+ layout patterns |

### PROPAGATION RATE: 90%
### TRANSFORMATION QUALITY: AMPLIFIED

The execution brief is the primary amplification stage. It transforms abstract content analysis into CSS-actionable specifications. The boundary map is the critical innovation -- it converts "6 zones with different densities" into "here are the exact RGB deltas, typography changes, and spacing shifts at each boundary."

### LOSS POINTS:
1. **Tension naming disappears.** The 4 named tensions from the content map are not listed in the brief body. Their effects are distributed across dispositions and the metaphor section, but the explicit naming (Chaos vs Control, Accessibility vs Gatekeeping, etc.) is lost. A builder reading only the brief would not know these tensions exist as named constructs.
2. **Reader profile is relegated to appendix.** The axis positions (Info Density 4/5, Entry Velocity 2/5) that should drive CSS decisions appear only in the appendix summary, not integrated into Tiers 1-3.
3. **Metaphor seeds #2 and #3 dropped.** The Colony and Control Room alternatives are not mentioned -- only the recommended Refinery survives. This is appropriate (decision was made) but represents information narrowing.

---

## JUNCTION 3: Execution Brief → HTML (CRITICAL JUNCTION)

This is the highest-value junction to audit. Every piece of information in the brief either manifests as CSS/HTML or is lost forever.

### 3A. TIER 1 (Identity) Propagation

| Brief Instruction | HTML Evidence | Traced? |
|-------------------|---------------|---------|
| "Corners are cut, not curved" | `--border-radius: 0` (line 25) | YES |
| "Nothing floats" | `--box-shadow: none` (line 26) | YES |
| "Spine holds at 940-960px" | `.container { max-width: 960px }` (line 169) | YES |
| "Warm world. Red leads, cream grounds, near-black anchors" | `--color-primary: #E83025`, `--color-background: #FEF9F5`, `--color-text: #1A1A1A` (lines 29-31) | YES |
| "Three typefaces" | Instrument Serif, Inter, JetBrains Mono (lines 57-59) | YES |
| "Color is flat. Backgrounds are solid." | No gradients in CSS. All backgrounds use solid tokens. | YES |
| "Borders speak. 4px/3px/1px" | `--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px` (lines 87-89) | YES |
| "Header: dark bg, 3px red bottom border, dense" | `header { background: var(--color-text); border-bottom: 3px solid var(--color-primary) }` (lines 180-183) | YES |
| "Text breathes at 1.7 line-height" | `body { line-height: 1.7 }` (line 120) | YES |
| "Prose never exceeds 70 characters" | `.zone-intake p { max-width: 38em }` (~70ch at 18px) (line 337) | YES |
| "Third-level headings italic" | All zone h3 rules include `font-style: italic` | YES |

**Tier 1 Propagation: 11/11 = 100%**

### 3B. TIER 2 (Perception Physics) Propagation

| Brief Instruction | HTML Evidence | Traced? |
|-------------------|---------------|---------|
| "Adjacent backgrounds differ by >= 15 RGB" | Z1 #FEF9F5, Z2 #EDE6DA (delta 27), Z3 #FFF2E0, Z4 #F0EBE5, Z5 #E5DDD0, Z6 #F0EBE0. Gate found Z2->Z3 delta=11, Z3->Z4 delta=8. **TWO BOUNDARIES FAIL.** | PARTIAL |
| "Letter-spacing >= 0.025em" | `letter-spacing: 0.1em` on labels, `0.05em` on citations, `0.08em` on recovery. All above threshold. | YES |
| "Stacked gap <= 120px" | Gate confirmed max 112px. Brief said "compositional range 60-90px." | YES |
| "No single margin/padding > 96px" | `--space-24: 96px` is max token. Gate confirmed 0 violations. | YES |
| "Container 940-960px" | `max-width: 960px` throughout. | YES |

**Tier 2 Propagation: 4.5/5 = 90%** (one instruction partially violated in execution)

NOTE on the BG delta failure: The brief specified Z3 as `#F5EFE5` but the HTML uses `--refinery-tank: #FFF2E0` -- a different color than the brief specified. The brief said Z2->Z3 delta ~16 and Z3->Z4 delta ~16, but the implemented colors produce deltas of 11 and 8 respectively. **This is a transformation error at the builder level** -- the builder chose different Z3/Z4 colors than the brief specified.

### 3C. TIER 3 (Compositional Frameworks) Propagation

#### Multi-Coherence Boundary Map

| Boundary | Brief Specification | HTML Implementation | Channels Shifted |
|----------|-------------------|---------------------|------------------|
| **Z1->Z2** | "HEAVY: bg shift delta ~27, typography compress 18px->16px, spacing compress 48px->32px, 3px red border, component density jump" | `zone-floor` bg #EDE6DA (delta 27 from #FEF9F5). Typography: zone-floor p at 16px (vs zone-intake 18px). Spacing: zone-floor uses space-8 (32px) vs zone-intake space-12 (48px). `.transition-heavy` = 3px pipeline-connector border. Role cards introduce grid. | 5/5 CONFIRMED |
| **Z2->Z3** | "MEDIUM: bg delta ~16, body 15px, spacing opens 32px, border 3px->1px" | `.transition-medium` = 3px border. zone-tank bg #FFF2E0 (delta 11 NOT 16). zone-tank p at 15px. zone-tank spacing varies. | 3/5 PARTIAL (bg delta wrong) |
| **Z3->Z4** | "LIGHT: bg delta ~16, H2 treatment changes, 1px border + 48px gap" | `.transition-light` = 1px border. zone-control bg #F0EBE5 (delta 8 NOT 16). zone-control h2 at 28px with different margin. | 2/4 PARTIAL (bg delta wrong) |
| **Z4->Z5** | "HEAVY: bg delta ~29, JetBrains Mono dominant, 15px, line-height 1.5, 24px inner, 4px red borders" | `.transition-heavy` on zone-line. bg #E5DDD0 (delta 29 from #FAF5ED as brief specified, but 24 from actual #F0EBE5). zone-line pre at 13px JetBrains Mono, line-height 1.5. 4px callout borders. spacing 24px. | 4/5 CONFIRMED |
| **Z5->Z6** | "MEDIUM: bg delta ~19, typography returns to 16px, line-height 1.7, spacing expands, 4px pull-quote borders" | `.transition-medium`. zone-dispatch bg #F0EBE0 (delta 19 from #E5DDD0). zone-dispatch p at 16px. line-height 1.7. pull-quote with 4px borders. | 4/4 CONFIRMED |

**Boundary Map Propagation: ~80%** (3 of 5 boundaries fully match specifications; 2 have bg delta deviations)

#### Structural Metaphor: The Refinery

| Brief Element | HTML Implementation | Traced? |
|---------------|---------------------|---------|
| `--refinery-intake` (Z1) | Defined and used: `.zone-intake { background: var(--refinery-intake) }` | YES |
| `--refinery-floor` (Z2) | Defined and used: `.zone-floor { background: var(--refinery-floor) }` | YES |
| `--refinery-tank` (Z3) | Defined and used: `.zone-tank { background: var(--refinery-tank) }` | YES |
| `--refinery-control` (Z4) | Defined and used: `.zone-control { background: var(--refinery-control) }` | YES |
| `--refinery-line` (Z5) | Defined and used: `.zone-line { background: var(--refinery-line) }` | YES |
| `--refinery-dispatch` (Z6) | Defined and used: `.zone-dispatch { background: var(--refinery-dispatch) }` | YES |
| `--pipeline-connector` (inter-zone borders) | Defined and used in `.transition-heavy { border-top: 3px solid var(--pipeline-connector) }` | YES |
| `--pressure-indicator` (accent for dense zones) | Defined (`#E83025`) but only used indirectly via `--color-primary` being the same value. Token exists but is not differentiated from primary color. | PARTIAL |
| `--gauge-reading` (monitoring labels) | Defined and used extensively: all `.section-indicator` elements use `color: var(--gauge-reading)` | YES |
| "felt in CSS, not announced" | CSS comment `D-04: SECOND-HALF MOMENT`, zone HTML comments reference zones. Metaphor names in CSS classes (intake, floor, tank, control, line, dispatch). Builder conviction statement references refinery. | YES |

**Metaphor Propagation: 9/10 = 90%**

#### Component Library

| Brief Component Target | HTML Class | Used? | Where? |
|------------------------|-----------|-------|--------|
| `.callout / .callout--{type}` | YES | `.callout`, `.callout--warning`, `.callout--essence`, `.callout--tip`, `.callout--info`, `.callout--challenge` | Z1 (gate, essence), Z4 (principles), Z5 (checkpoints, warnings) |
| `.code-block` | YES | `.code-block` class in CSS, `pre` elements throughout | Z2, Z5 |
| `.table-wrapper` | NO | Tables use `.profile-table`, `.comparison-table`, `.extensions-table` -- no `.table-wrapper` class | -- |
| `.pull-quote` | YES | `.pull-quote` class with p + cite structure | Z1, Z6 |
| `.section-header` | NO | Zone headings use `.section-indicator` + `h2` -- no `.section-header` class | -- |
| `.grid--2col` | NO | Grids use custom classes: `.role-grid`, `.sources-grid`, `.recovery-grid`, `.decision-split` -- no `.grid--2col` | -- |
| `.collapsible` | YES | `.collapsible` class with `<details>/<summary>` | Z5 (troubleshooting) |
| `.toc` | YES | `.toc` class with grid layout | After header |
| Target: 10+ component classes | ACHIEVED | `.callout` (6 variants), `.pull-quote`, `.toc`, `.collapsible`, `.role-card` (3 variants), `.ascii-diagram`, `.comm-flow`, `.ladder-block`, `.decision-split`, `.sources-grid`, `.recovery-grid`, `.comparison-table`, `.profile-table`, `.cost-block` = **15+ distinct component types** | -- |

**Component Propagation: 5/8 named classes match. But 15+ component types exceed the 10+ target. Quality: ADAPTED (names changed but function preserved).**

#### CSS Budget and Layout

| Brief Instruction | HTML Evidence | Met? |
|-------------------|---------------|------|
| "800-1200 CSS lines" | ~1705 lines of CSS in the `<style>` block | EXCEEDED (42% over max) |
| "At least 2 distinct layout patterns" | Grid layouts: role-grid, toc-grid, factory-comparison, decision-split, sources-grid, recovery-grid. Single-column: zone-intake, zone-control. | YES (6 grid + 2 single-column) |
| "Single-column must not exceed 60% of zones" | Z1 and Z4 are single-column (2/6 = 33%). Z2, Z3, Z5, Z6 all contain grid layouts. | YES |

### 3D. TIER 4 (Dispositions D-01 through D-08) Propagation

| Disposition | Brief Instruction Summary | HTML Evidence | Realized? |
|-------------|--------------------------|---------------|-----------|
| **D-01: Content-Register** | "Read each zone's character. Z1=NARRATIVE (18px, lh 1.8, 38em). Z2=REFERENCE (16px, lh 1.6, grid). Z5=CODE (15px JetBrains Mono, lh 1.5)" | Z1: 18px, lh 1.8, max-width 38em. Z2: 16px, lh 1.7 (NOT 1.6), grid. Z5: 15px (in zone-line p), lh 1.5 in pre blocks. Z3: 15px for tables. Z4: principle callouts at body size. Z6: 16px, lh 1.7. | **85%** -- line-height 1.6 in Z2 not implemented (stays at 1.7), but all major register shifts present |
| **D-02: Room Perception** | "Each zone = different room. Z1->Z2 = most dramatic (4+ shifts). Z3->Z4 = gentlest (2-3 shifts)." | Z1->Z2: 5 channel shifts (bg, typography, spacing, border, component density). Z3->Z4: 2 shifts (bg, heading treatment). Z4->Z5: 4 shifts. Pattern matches. | **90%** |
| **D-03: Signing Frame** | "Consistent border hierarchy (4/3/1px). Zero ornamental elements. Dense header (dark bg, 3px red border, 12px padding)." | Border hierarchy: 4px structural, 3px accent, 1px micro -- confirmed. Header: dark bg + 3px red border + 48px/32px padding (NOT 12px -- more generous than specified). Zero ornamental elements confirmed. | **85%** -- header padding more generous than "dense 12px" instruction |
| **D-04: Second-Half Moment** | "(1) Dark inversion block with 'Nature prefers colonies' at 32-36px pull quote. (2) Layout rupture in Z6 (different grid)." | (1) `.inversion-block` implemented exactly: dark bg, inverted color, 32px quote, centered. (2) Z6 uses decision-split grid + comparison tables + sources-grid + cost-block -- 4 different layouts in one zone, creating layout rupture. | **95%** |
| **D-05: Scroll Rhythm** | "Section heights VARY per estimates. Two density peaks. Transition weights alternate: heavy/medium/light/heavy/medium." | Transition classes match exactly: `.transition-heavy` (Z1->Z2), `.transition-medium` (Z2->Z3), `.transition-light` (Z3->Z4), `.transition-heavy` (Z4->Z5), `.transition-medium` (Z5->Z6). Footer bookends header (dark bg + red border). | **95%** |
| **D-06: Negative Space** | "Vary padding-top per zone: 80px (Z1) -> 64px (Z2) -> 48px (Z3) -> 48px (Z4) -> 32px (Z5) -> 48px (Z6)" | Z1: space-20 = 80px. Z2: space-16 = 64px. Z3: space-12 = 48px. Z4: NOT VISIBLE in CSS read (would need full zone-control audit). Z5: zone-line likely uses space-8 = 32px. Z6: space-12 = 48px. Pattern MATCHES. | **90%** (approximate -- full audit requires measuring all zone padding-tops) |
| **D-07: Edge Intentionality** | "Hover states on role cards. tabular-nums on cost model. Zone-specific ::selection. first-child edge on principles." | Role cards: `role-card:hover { border-color: ... }` (line 684). tabular-nums: on `.toc__number`, zone-tank tables, `.comparison-table`, `.cost-block` (4 instances). ::selection: zone-dispatch has specific override (line 1523), but NOT different per-zone (brief suggested warm red in Z1-Z2, cooler teal in Z5-Z6). first-child: `.checklist-table td:first-child` exists but not on principle blocks. | **60%** -- hover and tabular-nums present; zone-specific ::selection PARTIALLY done (only Z6 override, not per-zone); first-child principle treatment NOT done |
| **D-08: Skeleton Test** | "Dark header bar, generous light opening, sudden compression, moderate layered middle, brief stacked section, second compression, moderate exit." | HTML structure: dark header -> light Z1 (generous) -> dark-bordered transition -> dense Z2 (grid) -> moderate Z3 -> compact Z4 -> dense Z5 (code blocks) -> inversion block -> moderate Z6 -> dark footer. Matches skeleton description. | **90%** |

**Disposition Propagation Average: ~86%**

### 3E. Quantified Brief-to-HTML Propagation Summary

| Category | Items Tracked | Items Realized | Rate |
|----------|--------------|----------------|------|
| Tier 1 (Identity) | 11 | 11 | **100%** |
| Tier 2 (Perception) | 5 | 4.5 | **90%** |
| Boundary Map | 5 boundaries | 3 fully + 2 partial | **80%** |
| Metaphor tokens | 10 | 9 | **90%** |
| Component targets | 8 named | 5 exact + 10 adapted | **85%** (functional) |
| CSS budget | 3 | 2 of 3 | **67%** (over budget) |
| Dispositions | 8 | ~6.9 | **86%** |
| **OVERALL** | **50 traceable items** | **~39 realized** | **~78%** |

### JUNCTION 3 LOSS POINTS:

1. **Background color deviation in Z3/Z4.** The brief specifies `#F5EFE5` for Z3 and `#FAF5ED` for Z4. The HTML implements `#FFF2E0` for Z3 and `#F0EBE5` for Z4. The resulting deltas (11 and 8) violate the >=15 threshold. This is the single most impactful loss -- it directly causes gate GR-11 to fail. **ROOT CAUSE: The builder implemented different background colors than the brief specified.**

2. **D-07 (Edge Intentionality) partial implementation.** Zone-specific ::selection colors were specified for warm/cool variation -- only Z6 gets an override (and it's still warm red, not "cooler teal"). First-child principle treatment was not implemented.

3. **Component naming divergence.** Brief names `.table-wrapper`, `.section-header`, `.grid--2col` -- HTML uses `.profile-table`, `.section-indicator`, `.role-grid`. The FUNCTION is preserved but the CLASS NAMES from the brief's component library recommendations were not adopted verbatim.

4. **CSS budget exceeded by 42%.** 1705 lines vs 1200 max. This is a budget overshoot but correlates with higher component count (15+ vs 10+ target) and more detailed per-zone styling.

5. **Z2 line-height specified as 1.6 but implemented as 1.7.** The brief's D-01 content-register instruction calls for compressed line-height in the dense Z2 zone. The builder kept the global 1.7 default.

---

## JUNCTION 4: HTML → Gate Results

### What the gates measured vs what the HTML contains:

| Gate | What Gates Found | Accurate? | Notes |
|------|-----------------|-----------|-------|
| GR-01 (border-radius 0) | PASS, 0 violations | YES | CSS confirms `--border-radius: 0` and no border-radius declarations |
| GR-02 (box-shadow none) | PASS, 0 violations | YES | CSS confirms `--box-shadow: none` |
| GR-03 (container 960px) | PASS, 960px | YES | Multiple `max-width: 960px` in CSS |
| GR-04 (no gradients) | PASS | YES | No `linear-gradient` or `radial-gradient` in CSS |
| GR-05 (warm palette) | FAIL: 98 cold colors | PARTIALLY ACCURATE | The 18 "pure black" are browser defaults (correctly noted). The 98 cold colors on `.role-card__level` are rgb(74,144,217) -- BUT the CSS shows `.role-card--rig .role-card__level { color: var(--accent-blue) }` where `--accent-blue: #A07D50` (a WARM brown). **DISCREPANCY: The CSS token `--accent-blue` = #A07D50 (warm), yet gates measured rgb(74,144,217) (cold blue).** This suggests either a computed value override or the `--accent-blue` name is misleading and the actual rendered color differs. |
| GR-06 (font trinity) | PASS* | YES | Correctly identified browser defaults as false positive |
| GR-07 (header DNA) | PASS, 2.67px border | PARTIALLY | CSS declares `3px solid` but gate measured `2.67px`. This is subpixel rendering difference -- functionally correct. |
| GR-08 (border hierarchy) | PASS, 3 weights | YES | 4.0px, 2.7px, 0.7px map to 4px/3px/1px with subpixel rounding |
| GR-11 (bg delta >=15) | FAIL: Z2->Z3=11, Z3->Z4=8 | YES | Gate correctly measured the actual rendered deltas. The CSS custom properties `--refinery-tank: #FFF2E0` and `--refinery-control: #F0EBE5` produce these deltas. |
| GR-14 (visual gap <=150px) | FAIL: Z5->Z6 = 318px | YES, with context | The inversion block between zones creates this gap. Gate correctly measured it. Brief's D-04 specifies this as an intentional dramatic moment, but the gate is measuring raw structural gap regardless of intent. |
| GR-17 (density stacking) | FAIL: 262 violations at 8px padding | DEBATABLE | Table cells at 8px padding is common practice. Whether this constitutes "density stacking" depends on gate threshold definition. Gate is measuring correctly but the rule may not apply to data table cells. |

**Gate Measurement Accuracy: ~85%**

### LOSS/DISTORTION POINTS:
1. **GR-05 cold color mystery.** CSS defines `--accent-blue: #A07D50` (warm brown) but gates measured rgb(74,144,217) (cold blue) on `.role-card__level`. Either (a) there's a CSS specificity override not visible in the main style block, (b) the variable name `--accent-blue` is confusing and the actual computed value somehow differs, or (c) there's a discrepancy between CSS-as-written and CSS-as-computed. **This is a gate accuracy issue.**
2. **GR-14 lacks intentionality signal.** The gate cannot distinguish between accidental 318px gaps (bug) and designed 318px gaps (D-04 second-half moment). The gate results note this as "intentional but flagged" -- this nuance propagates correctly into the verdict.
3. **GR-17 threshold ambiguity.** No distinction between component padding (where 8px might be too tight) and data table cell padding (where 8px is standard practice).

---

## JUNCTION 5: Gate Results → Verdict

### Propagation audit:

| Gate Result | Verdict Representation | Accurate? |
|-------------|----------------------|-----------|
| GR-01 through GR-04 PASS | Correctly listed as PASS in verdict Section 3 | YES |
| GR-05 FAIL (cold colors) | Listed as BLOCKING issue B2: "Replace cold blue on `.role-card__level`" | YES |
| GR-06 PASS* | Correctly listed with false positive notation | YES |
| GR-07-GR-10 PASS | Correctly listed | YES |
| GR-11 FAIL | Listed as SIGNIFICANT issue S2 with specific delta values (11, 8) and fix recommendation | YES |
| GR-12-GR-13 PASS | Correctly listed | YES |
| GR-14 FAIL | Listed as SIGNIFICANT issue S4 with intentionality context from D-04 | YES |
| GR-15 PASS | Correctly listed | YES |
| GR-17 FAIL | Listed as MODERATE issue M5 with debatability noted | YES |
| GR-18, GR-20 PASS | Correctly listed | YES |
| Summary: 14P/4F | Correctly stated in verdict | YES |

**PROPAGATION RATE: 100%**
**TRANSFORMATION QUALITY: PRESERVED (with appropriate severity classification added)**

Every gate result propagates into the verdict with correct status, evidence, and fix recommendation. The verdict adds severity classification (BLOCKING/SIGNIFICANT/MODERATE) which is appropriate editorial judgment.

---

## JUNCTION 6: PA Reports → Verdict

### Auditor A findings propagation:

| Auditor A Finding | Verdict Representation | Propagated? |
|-------------------|----------------------|-------------|
| PA-05: 3/4 COMPOSED | Verdict Section 1: "3/4 -- COMPOSED" | YES |
| Sub-criteria (DESIGNED strong, COHERENT strong, PROPORTIONATE strong, POLISHED high-1-defect) | Verdict Section 1 table reproduces all 4 sub-criteria with evidence | YES |
| Trailing whitespace void (5 viewports) | B1 BLOCKING: "~5 viewport-heights of blank cream. Scrolls 18-22 at 1440px are 100% empty." | YES |
| Zone 4 monotony (6 identical blockquotes) | S1 SIGNIFICANT: "6 consecutive blockquotes with identical visual treatment" | YES |
| Role card grid = best design moment | Appendix: "Role cards = best moment" listed as 4/9 consensus | YES |
| Ensemble music metaphor (jazz quartet) | PA-65: "YES" in Tier 5 table with "(c) Ensemble -- small jazz quartet" | YES |
| Partial novelty (inventive editorial, conventional visual) | PA-67: "PARTIAL -- counted as NO for binary scoring" | YES |

### Auditor F findings propagation:

| Auditor F Finding | Verdict Representation | Propagated? |
|-------------------|----------------------|-------------|
| PA-16 PASS (twin elements consistent) | Not individually listed (F's PA-16 is a PASS, so no issue to propagate) | N/A (correct) |
| PA-17 PASS (visual rhythm present) | Not individually listed | N/A (correct) |
| PA-40 PASS with post-footer void noted | Void captured in B1 BLOCKING | YES |
| PA-41 PASS (Zone 4 approaching monotony) | S1 SIGNIFICANT references this finding | YES |
| PA-60: 5 design moments | Tier 5 table: "YES -- 5 identified" with all 5 listed | YES |
| PA-61: 3 independent rhythm channels | Tier 5 table: "YES -- 3 independent rhythm channels" | YES |
| Post-footer void emphasis (5 viewports) | Captured in B1 and consensus table (9/9 auditors) | YES |

### Cross-auditor findings propagation:

| Consensus Finding | Auditor Count | Verdict Entry | Propagated? |
|-------------------|--------------|---------------|-------------|
| Trailing void | 9/9 | B1 BLOCKING | YES |
| Zone 4 monotony | 6/9 | S1 SIGNIFICANT | YES |
| Code block saturation Z5 | 4/9 | M2 MODERATE | YES |
| BG deltas sub-perceptual | 4/9 | S2 SIGNIFICANT (merged with gate GR-11) | YES |
| Metaphor fades bottom | 3/9 | M4 MODERATE | YES |
| 768px not responsive | 3/9 | S3 SIGNIFICANT | YES |
| Quote color discipline | 3/9 | M1 MODERATE | YES |

### Contradictions propagation:

| Contradiction | Verdict Handling | Resolved? |
|--------------|-----------------|-----------|
| 768px role cards (E vs H) | Verdict sides with H ("should stack") | YES |
| Zone transitions (D vs F) | Verdict validates both perspectives | YES |
| Quote borders (H vs G) | Verdict: "aesthetically delightful but semantically undisciplined" | YES |
| Trailing void severity (Integrative vs all) | Verdict: "Disagree with Integrative" -- 8/9 prevail | YES |

**PA → VERDICT PROPAGATION RATE: 95%**
**TRANSFORMATION QUALITY: PRESERVED with editorial judgment**

The one area of minor loss: Auditor F's specific observation about the Zone 4 callout border color variation "saving" the section from full monotony is not reflected in the verdict's S1 write-up. The verdict lists it as a monotony issue without acknowledging that the border color variation is a partial mitigation. This is a nuance loss, not an information loss.

---

## AGGREGATE FLOW SUMMARY

```
Junction                  | Propagation | Quality           | Critical Losses
========================= | =========== | ================= | ============================
1. Content → Map          |    95%      | IMPROVED          | Specific quotes, code content
2. Map → Brief            |    90%      | AMPLIFIED         | Tension names, reader profile
3. Brief → HTML ****      |    78%      | PARTIALLY DEGRADED| BG colors wrong, D-07 partial
4. HTML → Gates           |    85%      | PARTIALLY DEGRADED| GR-05 measurement question
5. Gates → Verdict        |   100%      | PRESERVED         | (none)
6. PA → Verdict           |    95%      | PRESERVED         | Minor nuance (border mitigation)
========================= | =========== | ================= | ============================
OVERALL PIPELINE          |   ~85%      | NET: GOOD         |
```

---

## KEY FINDINGS

### 1. The brief-to-HTML junction is the primary loss point (78%)

This is consistent with prior pipeline research. The builder must interpret ~174 lines of brief into ~2900 lines of HTML/CSS. The 78% propagation rate is SUBSTANTIALLY BETTER than the previous flagship experiment (estimated 34/91 richness = ~37%). The improvement comes from:
- Concrete CSS values in the brief (not just prohibitions)
- Named refinery tokens that map directly to CSS custom properties
- Component recommendations with zone assignments
- D-01 through D-08 dispositions providing compositional guidance

### 2. The background color deviation is the ONLY high-impact loss

Of all the information lost at Junction 3, only the Z3/Z4 background colors directly cause a gate failure (GR-11). Everything else -- component naming differences, CSS budget overshoot, partial D-07 -- is cosmetic or debatable. **The pipeline's failure mode is narrow and specific:** the builder chose different background colors than the brief specified for 2 of 6 zones.

### 3. Upstream stages (Junctions 1-2) have EXCELLENT propagation

The content map captures 95% of the source content's structural features, and the execution brief amplifies 90% of the content map into CSS-actionable specifications. The pipeline's analytical stages work well. Information is being generated and structured correctly; the loss occurs at the point of CSS implementation.

### 4. Downstream stages (Junctions 4-6) have near-perfect propagation

Gate results propagate 100% into the verdict. PA findings propagate 95%. The evaluation pipeline is reliable and comprehensive. The 9-auditor PA model catches issues that gates miss (Zone 4 monotony, code block saturation, metaphor fade) and gates catch issues that PA misses (exact RGB deltas, specific threshold violations). The two systems are genuinely complementary.

### 5. The GR-05 cold color anomaly suggests a measurement gap

The CSS token `--accent-blue` is defined as `#A07D50` (warm brown), yet gates measured `rgb(74,144,217)` (cold blue). This discrepancy is not explained by the CSS source. Either:
- The computed value differs from the declared value (specificity override, @media query, or JS modification)
- The gate runner measured a different property than expected
- There is a secondary style source not in the inline `<style>` block

This warrants investigation as it could indicate the gate runner is not reading the same CSS the browser renders.

### 6. The disposition system (D-01 through D-08) is the highest-value brief innovation

Average 86% propagation across 8 dispositions. The most effective (D-04 second-half moment at 95%, D-05 scroll rhythm at 95%) are those with CONCRETE specifications (exact quote, exact transition class pattern). The least effective (D-07 edge intentionality at 60%) are those with MANY small instructions (zone-specific ::selection, first-child treatment, hover states) where partial implementation is easy.

**Implication for pipeline enrichment:** Dispositions should have FEWER, LARGER instructions rather than MANY SMALL ones. Each disposition should specify 1-2 things with exact CSS, not 4-5 things described in prose.

---

## ENRICHMENT RECOMMENDATIONS (from information flow analysis)

1. **Lock background colors in the brief as NON-NEGOTIABLE.** Move zone background hex values from Tier 3 (compositional, 80% creative authority) to Tier 2 (perception physics, non-negotiable). The builder should not be choosing alternative colors for zones -- the brief's boundary deltas depend on exact colors.

2. **Add a VERIFICATION CHECKPOINT between brief and builder.** Before the builder starts writing CSS, a gate should verify that the custom property values in `:root` match the brief's specified values. This catches the Z3/Z4 deviation before 1700 lines of CSS are written.

3. **Consolidate D-07 into fewer, larger instructions.** Instead of 5 micro-refinements (hover, tabular-nums, ::selection, first-child, edge distribution), specify 2 concrete instructions with exact CSS.

4. **Add component name aliasing to the brief.** If the brief says `.table-wrapper` but the builder creates `.profile-table`, the gate runner cannot verify component library adoption by class name. Either (a) brief specifies that exact class names from components.css must be used, or (b) gates verify by structural signature rather than class name.

5. **Flag the GR-05 measurement anomaly for gate-runner debugging.** The warm `--accent-blue: #A07D50` in CSS vs cold `rgb(74,144,217)` in gate measurement needs root cause analysis.
