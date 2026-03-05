# HTML/CSS Quality Analysis — Gas Town VA Pipeline Build

**File analyzed:** `ephemeral/pages/yegge-gas-town-extraction/yegge-gas-town.html`
**Total lines:** 2,767 (CSS: ~1,687 lines in `<style>`, HTML body: ~1,060 lines)
**Analyst:** html-analyst (Opus agent)
**Date:** 2026-02-23

---

## 1. Quantitative Summary

| Metric | Value | Assessment |
|--------|-------|------------|
| Total CSS lines | ~1,687 | CEILING-to-FLAGSHIP range (>1,000 = Flagship threshold) |
| Unique CSS classes (in selectors) | ~120 | Very high vocabulary |
| Classes used in HTML body | ~103 | High utilization ratio |
| Grid layouts | 6 | Strong spatial variety |
| Flex layouts | 3 | Supporting role |
| @media queries | 2 (768px + prefers-reduced-motion) | Standard responsive |
| Custom properties | 58 (:root) | Comprehensive token system |
| Total HTML sections | 6 zones + header + footer + nav + inversion block | 10 structural blocks |

---

## 2. Mechanism Count (Mapped to Mechanism Catalog)

The builder explicitly annotated mechanism usage in CSS comments. Cross-referencing with `grammar/mechanism-catalog.md`:

| # | Mechanism | Category | Deployed? | Where / How |
|---|-----------|----------|-----------|-------------|
| 1 | Border-Weight Gradient | Hierarchy | YES | PROGRESSIVE: `.principle` 4px, `.principle--secondary` 3px; role cards 4px/3px by tier; table headers 3px, rows 1px |
| 2 | 2-Zone Component DNA | Component | YES | Callouts (`.callout__label` + `.callout__body`), role cards (`.role-card__level` + `.role-card__name` + body), principle blocks |
| 3 | Solid Offset Depth | Depth/Emphasis | YES | `.zone-line .featured-code::after` — 4px/4px solid offset for featured code block |
| 4 | Spacing Compression | Hierarchy | YES | Z1 padding 80px (sparse) → Z2 64px → Z3/Z4 48px → Z5 32px (dense) → Z6 48px (moderate resolution) |
| 5 | Dense/Sparse Alternation | Spatial | YES | Z1 SPARSE → Z2 DENSE → Z3 MODERATE → Z4 MODERATE → Z5 DENSE → Z6 MODERATE |
| 6 | Width Variation | Spatial | YES | `.header__title` max-width: 18ch; `.pull-quote p` max-width: 50ch; `.header__subtitle` max-width: 50ch; `.inversion-block__quote` max-width: 20ch; `.inversion-block__sub` max-width: 40ch; paragraphs max-width: 38em |
| 7 | Zone Background Differentiation | Depth/Emphasis | YES | 6 distinct zone backgrounds: `--refinery-intake` (#FEF9F5), `--refinery-floor` (#EDE6DA), `--refinery-tank` (#FFF2E0), `--refinery-control` (#F0EBE5), `--refinery-line` (#E5DDD0), `--refinery-dispatch` (#F0EBE0) |
| 8 | TOC / Navigation | Structure/Nav | YES | `.toc` with 2-column grid, numbered links, mono labels |
| 9 | Color Encoding | Component | YES | Callout variants: `--warning` (red), `--tip` (green), `--info` (blue), `--essence` (amber), `--challenge` (purple). Role cards: `--town` (red), `--rig` (blue), `--human` (green) |
| 10 | Border-Left Semantic Signaling | Component | YES | All callouts 4px left border. Role cards 4px left. Principles 4px left. Pull-quote 4px left. |
| 11 | Typographic Scale Jumping | Hierarchy | YES | 10-level type scale from 10px meta to 48px display (3rem). ~1.5x ratio maintained. |
| 12 | Progressive Disclosure | Structure/Nav | YES | `<details class="collapsible">` — 6 troubleshooting accordions with summary/content pattern |
| 13 | Dark Header + 3px Border | Structure/Nav | YES | `header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }` |
| 14 | Footer Mirror | Structure/Nav | YES | `footer { background: var(--color-text); border-top: 3px solid var(--color-primary); }` |
| 15 | Bento Grid | Spatial | YES | `.role-grid` (2-col, role cards); `.factory-comparison` (2-col); `.recovery-grid` (2-col); `.sources-grid` (2-col); `.decision-split` (2-col) |
| 16 | Drop Cap | Depth/Emphasis | YES | `.zone-intake .drop-cap::first-letter` — 3.5em, serif, primary red, float left |
| 17 | Code Block | Component | YES | 10+ dark code blocks with syntax highlighting (`.kw`, `.st`, `.cm`, `.fn`, `.nu`), 3px border, mono font |
| 18 | Data Table | Structure/Nav | YES | 7 distinct tables (profile, waves, stages, checklist x2, comparison x3, extensions). Mono headers, 3px header border, 1px row borders |

**Mechanism Score: 18/18 (100%)** — All 18 catalog mechanisms deployed.

**Category coverage:**
- Spatial (S): #5, #6, #15 — 3/3 (100%)
- Hierarchy (H): #1, #4, #11 — 3/3 (100%)
- Component (C): #2, #9, #10, #17 — 4/4 (100%)
- Depth/Emphasis (D): #3, #7, #16 — 3/3 (100%)
- Structure/Navigation (N): #8, #12, #13, #14, #18 — 5/5 (100%)

---

## 3. Component Library Usage

Comparing CSS classes in the build against `design-system/compositional-core/components/components.css`:

| Component Library Class | Present in Build? | Adaptation |
|------------------------|-------------------|------------|
| `.callout` | YES | Renamed to same. 6 variants (warning, tip, info, essence, challenge, checkpoint) |
| `.callout__label` | YES | Identical 2-zone DNA |
| `.callout__body` / `.callout__content` | YES (as `__body`) | Match |
| `.callout--essence` | YES | Serif italic body, amber border |
| `.callout--tip` | YES | Green border |
| `.callout--warning` / `.callout--gotcha` | YES (warning) | Red border |
| `.callout--challenge` | YES | Purple border |
| `.callout--info` / `.callout--note` | YES (info) | Blue border (but recolored to `--accent-blue: #A07D50` which is actually brown/gold) |
| `pre` (code blocks) | YES | Dark bg, 3px border, syntax tokens |
| `.code-snippet` | NO | Not used — raw `pre/code` instead |
| `.page-header` / `.exploration-header` | PARTIAL | Custom `.header-inner` with same dark bg + 3px pattern but different class names |
| `.page-footer` | PARTIAL | Custom `footer` / `.footer-inner` with same pattern but different naming |
| `table` | YES | 7 tables using mono headers, 3px/1px border hierarchy |
| `.skip-link` | YES | Accessibility component present |

**Component library adoption estimate: 8-10 of ~26 components** (callouts: 6 variants, code blocks, tables, skip-link, header pattern, footer pattern). Roughly 30-38%.

**Notable:** The builder re-implemented several library components with custom names (`.role-card`, `.principle`, `.decision-split`, etc.) rather than using library classes. These are metaphor-specific implementations of library patterns — which is the correct approach per the mechanism catalog's vocabulary vs. implementation distinction.

---

## 4. Zone Structure

6 zones are clearly implemented as semantic sections with distinct class-based styling:

| Zone | Class | Background | Density | Padding-top | Padding-bottom |
|------|-------|-----------|---------|-------------|---------------|
| Z1 — Intake | `.zone-intake` | #FEF9F5 (warmest cream) | SPARSE | 80px | 48px |
| Z2 — Floor | `.zone-floor` | #EDE6DA (tan/khaki) | DENSE | 64px | 32px |
| Z3 — Tank | `.zone-tank` | #FFF2E0 (warm peach) | MODERATE | 48px | 32px |
| Z4 — Control | `.zone-control` | #F0EBE5 (gray-tan) | MODERATE | 48px | 48px |
| Z5 — Line | `.zone-line` | #E5DDD0 (darker tan) | DENSE | 32px | 32px |
| Z6 — Dispatch | `.zone-dispatch` | #F0EBE0 (olive-tan) | MODERATE | 48px | 48px |

**Implementation quality:** Each zone has its own scoped CSS block with zone-specific typography, spacing, and component overrides. The CSS comments explicitly label zone transitions and density levels. Zone transitions use `.transition-heavy` (3px red), `.transition-medium` (3px border-color), and `.transition-light` (1px border) classes.

**Background delta analysis (max single-channel RGB difference between adjacent zones):**

| Boundary | From | To | R delta | G delta | B delta | Max delta |
|----------|------|----|---------|---------|---------|-----------|
| Z1→Z2 | FEF9F5 → EDE6DA | 17 | 19 | 27 | **27** |
| Z2→Z3 | EDE6DA → FFF2E0 | 18 | 12 | 6 | **18** |
| Z3→Z4 | FFF2E0 → F0EBE5 | 15 | 7 | 5 | **15** |
| Z4→Z5 | F0EBE5 → E5DDD0 | 11 | 14 | 21 | **21** |
| Z5→Z6 | E5DDD0 → F0EBE0 | 11 | 7 | 16 | **16** |

**All zone boundaries meet the >= 15 RGB max-channel delta threshold (SC-09).** The Z3→Z4 boundary is borderline at exactly 15, but all others are comfortably above. This is a significant improvement over previous builds where backgrounds were imperceptibly close (1-8 RGB delta).

---

## 5. Custom Properties Usage

The `:root` block defines **58 custom properties**, organized into 8 semantic groups:

### Refinery-namespaced tokens (concept-based):
```
--refinery-intake, --refinery-floor, --refinery-tank,
--refinery-control, --refinery-line, --refinery-dispatch
--pipeline-connector, --pressure-indicator, --gauge-reading
```

**Assessment:** 9 concept-named custom properties use the REFINERY metaphor directly. This is excellent metaphor-structural encoding — the metaphor is not just in the class names but in the token vocabulary itself.

### Standard design system tokens:
- Colors: 11 tokens (primary, background, text, text-secondary, border, border-subtle, 5 accents)
- Typography: 3 font families + 10-level type scale
- Spacing: 12 values on 4px base (4px through 96px)
- Borders: 3 structural weights (4px/3px/1px)
- Syntax: 6 highlighting tokens
- Transition: 1 standard timing

**Token compliance with `tokens.css`:** ~85%. Most tokens match the design system vocabulary. Notable deviations:
- `--accent-blue: #A07D50` — this is actually gold/brown, NOT blue. The design system defines accent-blue as `#4A90D9`. This appears to be a deliberate metaphor-driven recoloring (refinery/amber palette) but the variable name is misleading.
- Zone backgrounds are custom additions (not in base `tokens.css`), which is expected for metaphor-driven builds.

---

## 6. Typography System

### Font-size scale (15 distinct values across the page):

| Value | Context | Treatment |
|-------|---------|-----------|
| 10px | Meta labels, section indicators | Mono, uppercase, tracked |
| 11px | Header meta, stat labels, table headers | Mono, uppercase |
| 12px | Principle names, diagram text | Mono/body, varied weight |
| 13px | Code blocks, command refs | Mono |
| 14px | Table body, collapsible content, checklist | Body |
| 15px | Z3/Z5 body paragraphs, workflow steps | Body |
| 16px (1rem) | Z2/Z4/Z6 body paragraphs | Body (base) |
| 18px | Z1 body, principle quotes, essence callouts | Display italic or body |
| 22px | Pull-quote text | Display italic |
| 24px | Responsive inversion quote | Display italic |
| 28px | Zone h2 headings (Z2-Z6) | Display italic |
| 32px (2rem) | Z1 h2, inversion block quote | Display italic |
| 40px (2.5rem) | Header title | Display italic |
| 48px (3rem) | Display size token (defined, not used) | — |
| 3.5em (~56px) | Drop cap first letter | Display, primary color |

**Assessment:** 15 distinct font-size values is very rich. The scale includes both token variables (`--text-sm`, `--text-base`, etc.) and hard-coded pixel values. The type system creates 5+ clearly distinct visual treatments:
1. **Meta/label** (10-11px, mono, uppercase, tracked)
2. **Code/technical** (13px, mono)
3. **Body compact** (14-15px, body, zones 3/5)
4. **Body standard** (16px, body, zones 2/4/6)
5. **Body generous** (18px, body, zone 1 opening)
6. **Emphasis/quote** (22px, display italic)
7. **Section heading** (28px, display italic)
8. **Page heading** (32-40px, display italic)
9. **Drop cap** (3.5em, display, primary)

### Line-height variations (9 distinct values):
`0.8` (drop cap) / `1.15` (header title) / `1.2` (headings) / `1.3` (inversion quote) / `1.4` (pull-quotes, principles) / `1.5` (code, tables, diagrams) / `1.6` (compact body) / `1.7` (standard body) / `1.8` (generous body)

**Assessment:** Excellent variation. Line-height tracks with content density — generous (1.7-1.8) for philosophical Z1, tight (1.5) for code-heavy Z5.

### Letter-spacing (5 distinct values):
`0.03em` (footer meta) / `0.05em` (table headers, pull-quote cite) / `0.08em` (principle names, recovery labels) / `0.1em` (meta labels, section indicators, callout labels) / `0.12em` (Z5 section indicator — tightest zone gets widest tracking)

**Assessment:** All values >= 0.025em (above the sub-perceptual threshold SC-14). The 0.12em on Z5's section indicator is a nice compositional touch — the densest zone gets the widest letter-spacing on its label, creating a breathing counterpoint.

---

## 7. Color Palette Analysis

### Hex colors (18 unique, excluding `#bead` which is a hash-ID mention):

| Color | Hex | R | G | B | Warm/Cold | Role |
|-------|-----|---|---|---|-----------|------|
| Near-black | #1A1A1A | 26 | 26 | 26 | Neutral | Text, code bg, header/footer bg |
| Primary red | #E83025 | 232 | 48 | 37 | WARM | Accent, borders, primary |
| Cream | #FEF9F5 | 254 | 249 | 245 | WARM | Z1 bg, page bg |
| Tan | #EDE6DA | 237 | 230 | 218 | WARM | Z2 bg |
| Peach | #FFF2E0 | 255 | 242 | 224 | WARM | Z3 bg |
| Gray-tan | #F0EBE5 | 240 | 235 | 229 | WARM | Z4 bg |
| Dark tan | #E5DDD0 | 229 | 221 | 208 | WARM | Z5 bg |
| Olive-tan | #F0EBE0 | 240 | 235 | 224 | WARM | Z6 bg |
| Border | #E0D5C5 | 224 | 213 | 197 | WARM | Borders, separators |
| Border subtle | #F0EBE3 | 240 | 235 | 227 | WARM | Subtle borders |
| Secondary text | #666666 | 102 | 102 | 102 | Neutral | De-emphasized text |
| Gold/amber | #A07D50 | 160 | 125 | 80 | WARM | "accent-blue" (misnamed) |
| Green | #4A9D6B | 74 | 157 | 107 | COLD | Tip callouts, success |
| Sage green | #6B9B7A | 107 | 155 | 122 | COLD | Syntax string color |
| Coral | #C97065 | 201 | 112 | 101 | WARM | Warning, troubleshooting |
| Amber | #D97706 | 217 | 119 | 6 | WARM | Essence callouts, numbers |
| Purple | #7C3AED | 124 | 58 | 237 | COLD | Challenge callouts |
| Blue | #4A7C9B | 74 | 124 | 155 | COLD | Syntax function color |

**Palette coherence:**
- **WARM colors:** 12/18 (67%) — cream, tan, peach, gold, coral, amber, red
- **COLD colors:** 3/18 (17%) — green, purple, blue
- **NEUTRAL:** 3/18 (17%) — near-black, gray

**Assessment:** The palette is strongly warm-dominant, consistent with the refinery/industrial metaphor (heat, flame, processed materials). The cold colors serve as functional accents (success, code syntax, challenge), creating clear figure-ground separation. The 6 zone backgrounds form a coherent warm gradient with sufficient perceptual deltas.

### RGBA colors (10 values):
All are very low opacity (0.03-0.05) overlays of accent colors, used for callout backgrounds. Plus two higher-opacity values for collapsible summary hover (0.5/0.8). These create subtle tinted backgrounds that reinforce the callout accent color without competing with body background.

---

## 8. Border Hierarchy

### Border weights deployed:

| Weight | Count | Usage |
|--------|-------|-------|
| 4px | 8 declarations | Principle blocks, role-card left borders, callout structural, top borders |
| 3px | 21 declarations | Header/footer primary borders, code block borders, table headers, zone transitions, accent borders |
| 1px | 20 declarations | Table rows, subtle borders, section indicator underlines, inline code, collapsible borders |

**The 4px/3px/1px hierarchy is correctly deployed.** No 2px borders appear anywhere (compliant with the conditional prohibition against epidemic 2px usage).

**Border semantic encoding:**
- **4px = structural/primary** (principles, role cards, featured callouts)
- **3px = accent/secondary** (zone transitions, code blocks, table headers, header/footer)
- **1px = separator/tertiary** (table rows, subtle dividers, inline code)

This maps exactly to the `--border-structural: 4px / --border-accent: 3px / --border-micro: 1px` token definitions.

---

## 9. Responsive Behavior

Two `@media` queries:

### `@media (max-width: 768px)` — Mobile breakpoint
- Header title: 2.5rem → 2rem
- Header stats: horizontal → vertical stacking
- TOC grid: 2-col → 1-col
- Role grid: 2-col → 1-col
- Factory comparison: 2-col → 1-col
- Decision split: 2-col → 1-col
- Sources grid: 2-col → 1-col
- Recovery grid: 2-col → 1-col
- Z1 h2: 32px → 28px
- Inversion quote: 32px → 24px
- Z1 body: 18px → 16px (var(--text-base))

**Assessment:** 10 responsive adjustments. All 6 grid layouts collapse to single-column. Typography scales down proportionally. This is competent responsive implementation.

### `@media (prefers-reduced-motion: reduce)` — Accessibility
Disables animations and scroll-behavior. Present and correctly implemented.

---

## 10. Spacing System

### Token-based spacing (198 total usages):

| Token | Value | Usage count | % of total |
|-------|-------|-------------|-----------|
| `--space-6` | 24px | 45 | 22.7% |
| `--space-3` | 12px | 43 | 21.7% |
| `--space-4` | 16px | 41 | 20.7% |
| `--space-2` | 8px | 28 | 14.1% |
| `--space-8` | 32px | 14 | 7.1% |
| `--space-5` | 20px | 8 | 4.0% |
| `--space-12` | 48px | 8 | 4.0% |
| `--space-1` | 4px | 4 | 2.0% |
| `--space-20` | 80px | 1 | 0.5% |
| `--space-16` | 64px | 1 | 0.5% |
| `--space-10` | 40px | 1 | 0.5% |

**Hard-coded pixel values:** 4 instances (2px, 4px, 6px, 8px, 16px) — all in the inline code styling (`p code`) and drop-cap margin, which are micro-adjustments. 99% of spacing uses tokens.

**Distinct spacing values:** 11 (from 4px to 96px). The scale follows a 4px base unit consistently.

**Assessment:** Extremely disciplined spacing system. The distribution shows `--space-3` through `--space-6` (12-24px) dominating — these are the "body rhythm" values. Larger values (48-96px) are reserved for section padding, creating clear density differentiation between zones.

---

## 11. CSS Sophistication Assessment

### Evidence of COMPOSITIONAL (not mechanical) CSS:

**1. Metaphor-structural encoding:**
The CSS literally encodes the refinery metaphor. Zone backgrounds darken as "material" is processed. Spacing compresses where "pressure builds." Transitions use border-weight to signal "material flow intensity" (heavy = 3px red for major transitions, medium = 3px neutral, light = 1px).

**2. Zone-scoped typography:**
Each zone has independently tuned body text sizes:
- Z1: 18px (generous — philosophical opening)
- Z2: 16px (standard — technical reference)
- Z3: 15px (compressed — data-heavy)
- Z4: 16px (standard — principle blocks)
- Z5: 15px (compressed — implementation/code)
- Z6: 16px (standard — decisions/comparison)

This is NOT a global body size with no variation — it's semantically-driven per-zone calibration.

**3. Component variety:**
18+ distinct component types (role cards, principles, ASCII diagrams, memory diagrams, communication flows, tmux diagrams, recovery grids, cost blocks, decision splits, ladder blocks, inversion blocks, etc.). Each is purpose-built, not a template fill-in.

**4. Transition architecture:**
The three transition classes (`.transition-heavy`, `.transition-medium`, `.transition-light`) create a deliberate pacing system. Heavy transitions mark major conceptual shifts (Z1→Z2, Z4→Z5), medium transitions mark moderate shifts, light transitions mark gentle ones.

**5. Dark inversion block (D-04 second-half moment):**
The `.inversion-block` creates a full-bleed dark interruption between Z5 and Z6 — a dramatic philosophical pivot point. This is a compositional decision (placing the "Nature prefers colonies" quote at the structural midpoint) that a recipe-following builder would not make.

**6. Role-card color semantics:**
Cards are colored by organizational tier: `--town` (red/primary = highest), `--rig` (blue/accent = operational), `--human` (green = organic/user). The human-level card spans full width (`grid-column: 1 / -1`). This encodes hierarchy through both color AND spatial footprint.

**7. CSS comment annotation:**
Every zone section has explicit comments documenting density level, mechanism numbers, and compositional intent. This shows the builder was thinking in mechanism vocabulary, not just writing CSS.

### Evidence of mechanical patterns:

**1. Section indicator repetition:**
The `.section-indicator` styling is nearly identical across all 6 zones (10px mono, uppercase, tracked, gauge-reading color, 1px bottom border). Only Z5 deviates slightly (0.12em tracking vs 0.1em, primary color vs gauge-reading). This could use more zone-specific variation.

**2. Table styling repetition:**
7 tables with very similar styling (minor padding/font-size differences). The table component could benefit from more zone-specific adaptation.

### Verdict: COMPOSITIONAL (HIGH)

This CSS demonstrates genuine compositional thinking. The metaphor is structurally encoded (not just named), mechanisms are deployed across multiple channels simultaneously (background + spacing + border-weight all encoding "processing intensity"), and the builder made creative decisions beyond what any recipe specifies (inversion block placement, role-card hierarchy encoding, zone-specific typography).

---

## 12. Cross-Referencing with Previous Builds

### Comparison with known artifacts:

| Dimension | Flagship Experiment (07-intentionality.html) | This Build (yegge-gas-town.html) |
|-----------|----------------------------------------------|----------------------------------|
| CSS lines | ~1,200 | ~1,687 |
| Mechanisms | Programmatically passed but perceptually flat | 18/18 with clear perceptual presence |
| Background deltas | 1-8 RGB (imperceptible) | 15-27 RGB (all perceptible) |
| Border hierarchy | Present but uniform | Clear 4px/3px/1px with semantic encoding |
| Typography zones | Uniform 16px/400 | 5+ distinct type treatments per zone |
| Components | Minimal variety | 18+ distinct component types |
| Zone structure | Whitespace voids 210-276px | Zone padding 32-80px, no voids |
| Metaphor encoding | "Announced" (labeled but not structural) | "Structural" (CSS encodes refinery) |
| Custom properties | Minimal | 58 (9 concept-named) |

### Key improvements over previous builds:
1. **Perceptible backgrounds** — the zone backgrounds actually differ visually (15-27 RGB delta vs 1-8)
2. **Rich typography** — 15 font sizes, 9 line-heights, 5 letter-spacings vs near-uniform
3. **Concept-named tokens** — `--refinery-intake`, `--pipeline-connector` etc.
4. **Component variety** — 18+ custom components vs minimal palette
5. **Explicit mechanism annotation** — CSS comments reference mechanism numbers
6. **Working transition architecture** — 3-tier transitions vs none
7. **Dark inversion block** — dramatic compositional device not seen in previous builds

---

## 13. Defects and Issues

### BLOCKING:
1. **`--accent-blue: #A07D50` is misnamed.** This is gold/brown, not blue. The `.callout--info` variant uses this "blue" which will render as brown. Design system defines accent-blue as `#4A90D9`. This may cause confusion for auditors/maintainers.

### SIGNIFICANT:
2. **Section indicator styling is repetitive.** Nearly identical across 6 zones — a missed opportunity for zone-specific calibration.
3. **No inline code differentiation by zone.** `p code` and `li code` have a single global style. In code-heavy Z5, inline code competes visually with block code.

### MINOR:
4. **Drop cap has no responsive adjustment.** At 768px, the 3.5em drop cap may be oversized relative to the reduced 16px body text.
5. **The `--text-display: 3rem` token is defined but never used.** The largest actual heading is 2.5rem.
6. **`.factory-comparison` grid uses `gap: 1px` with `background: var(--color-border)` trick** — a valid technique but differs from the `gap: var(--space-N)` pattern used elsewhere.

---

## 14. Summary Assessment

| Criterion | Score | Notes |
|-----------|-------|-------|
| Mechanism deployment | 18/18 (100%) | All catalog mechanisms present |
| Category coverage | 5/5 (100%) | All categories represented |
| Zone differentiation | STRONG | 6 distinct zones, perceptible backgrounds, density variation |
| Typography richness | HIGH | 15 sizes, 9 line-heights, 5 letter-spacings |
| Border hierarchy | CORRECT | 4px/3px/1px, zero 2px, semantic encoding |
| Custom properties | EXCELLENT | 58 tokens, 9 concept-named |
| Responsive behavior | GOOD | 768px breakpoint, 10 adjustments |
| Spacing discipline | EXCELLENT | 99% token-based, 11 distinct values |
| Component variety | HIGH | 18+ distinct types |
| Compositional sophistication | HIGH | Metaphor structurally encoded, multi-channel coherence |
| Soul compliance | PASS | border-radius: 0, box-shadow: none, correct palette (mostly) |
| Accessibility | GOOD | Skip link, 5 ARIA roles, 7 aria-labels, reduced-motion, semantic HTML |

**Overall CSS quality: CEILING-to-FLAGSHIP tier.** This is the highest-quality build analyzed in this project's history by CSS metrics. The 1,687-line CSS sheet with 18/18 mechanisms, 58 custom properties, and genuine compositional sophistication puts it firmly in the Flagship CSS range. The remaining question is whether this translates to Flagship-level perceptual quality (PA-05 >= 3.5), which requires visual audit.
