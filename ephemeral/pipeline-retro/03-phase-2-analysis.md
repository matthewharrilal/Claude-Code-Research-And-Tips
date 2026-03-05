# Phase 2 Analysis: HTML Build (Gas Town VA Pipeline)

**Analyst:** Phase 2 Specialist
**Artifact:** `ephemeral/pages/gas-town-va-pipeline/output.html` (2,045 lines; ~1,264 CSS, ~780 HTML)
**Builder model:** Opus
**Overall PA score:** 175/200 across 9 auditors
**PA-05:** 3/4 COMPOSED (not DESIGNED)

---

## Q1: How did the builder follow the 6-phase recipe?

The builder received `artifact-builder-recipe.md` (840 lines, 6 phases, 146 items). Here is phase-by-phase compliance:

### Phase 1: Read Vocabulary (tokens.css + components.css)

**Compliance: PARTIAL (70%)**

The builder clearly read `tokens.css` — the `:root` block (output.html lines 26-105) mirrors the token vocabulary closely:
- Soul constraints applied: `border-radius: 0` everywhere, zero `box-shadow`, `max-width: 960px` container (line 160)
- Font trinity adopted: Instrument Serif / Inter / JetBrains Mono with correct role assignments
- Spacing scale respected: 4px base with multiples (8, 12, 16, 20, 24, 32, 48, 64)
- Border hierarchy: `--border-town: 4px`, `--border-rig: 3px`, `--border-worker: 1px` (lines 64-66)

However, the builder did NOT directly adopt `components.css` class names. Instead of using the library's `.callout`, `.code-block`, `.stats-bar`, `.section-indicator`, `.page-header`, `.page-footer` classes, the builder reinvented all of them with factory-metaphor naming (`.zone-intake .callout`, `.factory-spine`, `.stat-item`, `.section-indicator`, `.factory-header`, `.factory-footer`). This means:
- The 34 extracted components in `components.css` were used as **inspiration, not as imports**
- No CSS `@import` or class reuse from the library
- The builder wrote ~400 lines of component CSS that partially duplicates `components.css`

**Impact:** Mixed. The reinvention produced more metaphor-coherent naming, but missed mature component patterns (e.g., `components.css` has zone-density-adapted callout variants that the builder partially reinvented with less sophistication).

### Phase 2: Select Creative Decisions

**Compliance: EXCELLENT (95%)**

This is where the builder excelled. The concept-based CSS custom property system (lines 26-105) is the single strongest indicator of composed-mode building:

```
--factory-intake: #FEF9F5
--factory-workshop: #F0EBE0
--factory-floor: #FFFFFF
--factory-archive: #EDE6DA
--factory-output: #F8F3EB
--factory-dispatch: #E8E1D5
```

Plus factory accent tones:
```
--factory-steel: #2A2A2A
--factory-rust: #E83025
--factory-brass: #D97706
--factory-copper: #B87333
--factory-chrome: #4A90D9
```

The builder made **deliberate creative decisions** rather than mechanically applying tokens:
- Zone-to-metaphor mapping (Town Level = Z1-Z2, Rig Level = Z3-Z4, Human Level = Z5-Z6)
- Border weight as hierarchy signal (4px town, 3px rig, 1px worker)
- Body text size as density signal (18px intake, 16px standard, 15px factory floor)
- Line-height as breathing signal (1.8 intake, 1.7 standard, 1.65 floor)

### Phase 3: Deploy Scaffolding

**Compliance: GOOD (85%)**

The builder deployed the 75 scaffolding items effectively:
- 6 zones with distinct backgrounds and section indicators ✓
- Factory-spine container at 960px ✓
- Dark header with stat dashboard ✓
- Dark footer with structured sections ✓
- Role grid (2-column bento with hierarchy variants) ✓
- Code blocks with filename headers ✓
- Tables with monospace headers and scroll wrappers ✓
- Callouts with semantic color coding (amber/red/blue/green) ✓
- Blockquotes with Instrument Serif italic ✓
- Print styles ✓
- Responsive breakpoint at 768px ✓

**Gaps:** No intermediate breakpoint (1024px). The role grid could have used a 3-column variant at 1440px. No explicit `<caption>` on tables (used `aria-label` instead — valid but less robust).

### Phase 4: Deploy Disposition (D-01 through D-08)

**Compliance: GOOD but UNEVEN (75%)**

| Disposition | Evidence | Quality |
|---|---|---|
| D-01 Content-Register Reading | Zone-adapted body text (18/16/15px), callout padding per zone | STRONG |
| D-02 Room Perception | Zone backgrounds create distinct rooms, factory metaphor | STRONG |
| D-03 Signing Frame | Header stat dashboard, footer with cost info | MODERATE |
| D-04 Second-Half Moment | Inversion block (lines 843-877) — dark bg, red borders, 80px padding | STRONG |
| D-05 Reader's Scroll | Density arc Z1[SPARSE]→Z3[DENSE]→Z6[SPARSE] | MODERATE |
| D-06 Negative Space as Shape | Zone padding variation, 45ch closing section | WEAK |
| D-07 Edge Intentionality | Full-bleed zone backgrounds, contained content | MODERATE |
| D-08 Skeleton Test | Zone backgrounds + border hierarchy would survive color removal | MODERATE |

D-04 (Second-Half Moment) is the standout: the inversion block at approximately 60% scroll creates a genuine spatial surprise. The dark background with `#E83025` borders and 80px vertical padding breaks every pattern established in the first half.

D-06 (Negative Space as Shape) is the weakest: negative space is present but passive — padding values create breathing room without being compositionally intentional. The closing section's 45ch narrow measure is the only moment where negative space acts as a deliberate framing device.

### Phase 5: Self-Evaluate

**Compliance: UNCLEAR (cannot verify)**

The recipe instructs the builder to pause and self-evaluate against perception thresholds before finalizing. There is no evidence in the output of whether the builder performed this step. The presence of the Z4→Z5 boundary weakness (only 17 RGB delta, barely above the 15 RGB threshold) suggests either the self-evaluation was cursory or the builder judged it "close enough."

### Phase 6: Temporal Composition

**Compliance: GOOD (80%)**

The density arc is clearly present:
- Z1 (Intake): SPARSE — 64px top padding, 18px body, 1.8 leading, drop cap
- Z2 (Workshop): MODERATE — 56px top padding, 16px body, diagrams + tables
- Z3 (Factory Floor): DENSE — 48px top padding, 15px body, 1.65 leading, role grid, command blocks
- Z4 (Archive): MODERATE — 56px padding, 16px body, memory diagrams
- Z5 (Output Line): MODERATE + SURPRISE — inversion block breaks rhythm
- Z6 (Dispatch): DENSE→SPARSE — cookbook density resolving to 45ch closing

The arc is correct but the transitions are **too smooth**. The jump from Z2 to Z3 should feel like entering a factory floor — the current 1px body text reduction and 0.05 leading reduction are perceptible but not dramatic. A 5/5 density arc would make the reader physically feel the compression.

---

## Q2: What drove 16+ mechanisms and 1,264 CSS lines?

### Mechanism Inventory (17-18 confirmed by Auditor D)

Catalogued from the CSS with line references:

| # | Mechanism | Category | CSS Lines | Evidence |
|---|---|---|---|---|
| 1 | Zone background alternation | Spatial | ~30 | Lines 162-230 (6 zone classes) |
| 2 | Border-weight hierarchy (4/3/1px) | Material | ~20 | Lines 64-66 (tokens), deployed throughout |
| 3 | Zone-adapted body text size | Temporal | ~15 | Lines 233-260 (zone typography) |
| 4 | Zone-adapted line-height | Temporal | ~10 | Lines 233-260 |
| 5 | Zone-adapted callout padding | Behavioral | ~15 | Lines 392-404 |
| 6 | Semantic callout color system | Material | ~40 | Lines 365-420 (4 color variants) |
| 7 | Drop cap | Relational | ~10 | Lines 313-322 |
| 8 | Inversion block (D-04) | Spatial + Behavioral | ~35 | Lines 843-877 |
| 9 | Role grid with hierarchy cards | Spatial | ~80 | Lines 487-560 |
| 10 | Dark header stat dashboard | Relational | ~45 | Lines 165-210 |
| 11 | Section indicator labels | Material | ~15 | Lines 267-285 |
| 12 | Code blocks with filename headers | Material | ~35 | Lines 560-620 |
| 13 | Blockquote with attribution stack | Relational | ~25 | Lines 325-360 |
| 14 | Monospace label system (10-12px uppercase) | Material | ~20 | Distributed across components |
| 15 | Closing section narrow measure (45ch) | Temporal | ~10 | Lines 920-940 |
| 16 | Print styles | Behavioral | ~30 | Lines 1165-1195 |
| 17 | Zone-specific selection colors | Behavioral | ~20 | Lines 142-156 |
| 18 | Responsive layout transformations | Spatial | ~60 | Lines 1197-1242 |

**Total mechanism-attributed CSS: ~515 lines (~41% of 1,264)**

### What accounts for the remaining ~750 lines?

1. **Foundation/reset CSS** (~80 lines): Box-sizing, font smoothing, base typography
2. **`:root` custom properties** (~80 lines): 65+ variables including factory-specific tokens
3. **Component baseline styles** (~300 lines): Each of the ~15 component types (callouts, tables, code blocks, role cards, stat items, diagrams, troubleshoot accordions, checklists, principle blocks, etc.) requires 15-25 lines of baseline CSS before mechanism-specific variants
4. **Accessibility CSS** (~60 lines): Skip link, focus indicators, sr-only, reduced motion
5. **Footer CSS** (~50 lines): Multi-section footer with distinct typography
6. **Table variants** (~80 lines): Multiple table styles (credentials, comparison, waves, dispatch)
7. **Misc component details** (~100 lines): Hover states, inline code, diagram color variants, troubleshoot accordion styles

### What drove the mechanism count?

Three factors converged:

1. **The recipe's per-category minimums** (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+) forced breadth across categories rather than depth in one
2. **The execution brief's 6-zone architecture** naturally multiplied mechanisms — each zone-adapted behavior (body text, leading, callout padding, selection colors) counts as a separate mechanism
3. **80% creative authority** gave the builder permission to invent beyond the minimum (e.g., zone-specific selection colors, factory accent tones, the inversion block)

The builder operated in "composed mode" — mechanisms emerged from the factory metaphor rather than being mechanically applied. The concept-based naming system (`--factory-intake`, `--factory-steel`, `--factory-rust`) is proof that the builder was thinking architecturally, not checking boxes.

---

## Q3: What SPECIFIC CSS decisions prevented 4/4 DESIGNED?

Nine auditors identified the gap between COMPOSED (3/4) and DESIGNED (4/4). Here are the specific CSS decisions responsible, with line references:

### 3A. Warm Cream Zone Blending (THE dominant issue)

**Auditors flagging:** B (PA-07), C (PA-16), D (PA-23), H (PA-41), I (PA-05)

The zone background colors are too similar:

```
--factory-intake:   #FEF9F5  (R:254 G:249 B:245)
--factory-workshop: #F0EBE0  (R:240 G:235 B:224)
--factory-floor:    #FFFFFF  (R:255 G:255 B:255)
--factory-archive:  #EDE6DA  (R:237 G:230 B:218)
--factory-output:   #F8F3EB  (R:248 G:243 B:235)
--factory-dispatch: #E8E1D5  (R:232 G:225 B:213)
```

RGB deltas between adjacent zones:
- Z1→Z2: 14/14/21 (max 21) — MARGINAL
- Z2→Z3: 15/20/31 (max 31) — adequate
- Z3→Z4: 18/25/37 (max 37) — good
- **Z4→Z5: 11/13/17 (max 17) — BARELY ABOVE THRESHOLD (15)**
- Z5→Z6: 16/18/22 (max 22) — adequate

The Z4→Z5 boundary at 17 RGB max delta is nearly invisible in practice. Auditor B scored it the weakest boundary. This is the single most impactful CSS fix available — increasing Z5's green/blue channels by 10-15 points would create a perceptible shift.

**What DESIGNED would look like:** At minimum 25+ RGB delta between every adjacent pair. The warm cream palette is beautiful but needs wider gamut within warmth. Z5 could shift toward a cooler warm (adding slight blue) to create a "stepping outside" feeling before the dispatch zone.

### 3B. Pure White for Zone 3

**Auditors flagging:** A (PA-03), B (PA-07), I (PA-05)

`--factory-floor: #FFFFFF` breaks the warm palette. Every other zone uses warm cream/tan values. The factory floor's pure white creates a jarring cold spot. Auditor A docked PA-03 (Palette) from 5/5 to 3/5 partly for this.

**What DESIGNED would look like:** `#FAFAFA` or `#F8F8F6` — near-white with a warm cast. Still the lightest zone (signaling density), but not palette-breaking.

### 3C. H2 Uniformity Across Zones 2-6

**Auditors flagging:** G (PA-36), I (PA-05)

After Zone 1 (which gets a larger 40px H2), every zone's H2 is identical: 32px Instrument Serif italic. The backgrounds change but the typography is static. This means 5 consecutive H2s look the same if you ignore the color behind them.

**CSS location:** Lines 233-260 (zone typography). The builder varied body text per zone but left H2 untouched.

**What DESIGNED would look like:** Zone-inflected H2 treatments:
- Z3 (Factory Floor): Slightly tighter letter-spacing (e.g., `letter-spacing: 0.01em`) to match the density compression
- Z5 (Output Line): Slightly larger or bolder H2 to signal the philosophical register shift
- Z6 (Dispatch): Different weight or a small-caps variant to signal "implementation mode"

### 3D. Single Layout Column (No Spatial Variety)

**Auditors flagging:** D (PA-23), H (PA-43), I (PA-05)

The page is single-column throughout except for the role grid (2-column in Z3). This means the spatial rhythm is:

```
[single column] → [single column] → [2-col grid] → [single column] → [single column] → [single column]
```

That is ONE layout variation across 6 zones. The role grid is effective but it is the ONLY structural surprise.

**CSS evidence:** `.factory-spine { max-width: 960px; margin: 0 auto; }` (line 160) is the universal container. No zone breaks out of this pattern except the inversion block (which goes full-bleed but is still single-column content).

**What DESIGNED would look like:** 2-3 additional layout moments:
- Z2: Side-by-side comparison (2-column) for Traditional vs Gas Town
- Z4: Memory layer diagram with adjacent explanation text (asymmetric 60/40 split)
- Z6: Installation steps in a 2-column code/explanation layout

### 3E. Post-Footer Void

**Auditors flagging:** H (PA-42)

Auditor H identified a spatial void after the footer — excessive padding or margin at the bottom of the page. This is a minor but perceptible defect.

**CSS location:** Footer section (lines ~950-1000). The footer has generous internal padding but the closing margin creates dead space below the last content.

### 3F. Density Arc Not Dramatic Enough

**Auditors flagging:** C (PA-19), E (PA-27), I (PA-05)

The density arc exists but the compression from Z2 to Z3 is too gentle:
- Z2 body: 16px, leading 1.7, padding 56px top
- Z3 body: 15px, leading 1.65, padding 48px top

That is 1px font reduction, 0.05 leading reduction, 8px padding reduction. Each is individually perceptible but the aggregate effect is subtle. The reader should FEEL the compression when entering the factory floor.

**What DESIGNED would look like:** Z3 should compress more aggressively:
- Body text at 14px (not 15px) with 1.6 leading
- Tighter element spacing within Z3 (`margin-bottom` on paragraphs reduced from 16px to 12px)
- The role grid cards with tighter internal padding
- Code blocks in Z3 with less vertical margin between them

### 3G. Inline Styles in HTML

**Auditors flagging:** I (PA-05)

The builder used inline `style` attributes on some HTML elements (e.g., an h3 at line ~1345). This is a craft issue — a DESIGNED page has zero inline styles because every visual decision is architecturally expressed in the stylesheet.

---

## Q4: What CSS techniques/treatments are missing?

These are techniques that would push the score toward 4/4 DESIGNED, listed by expected impact:

### High Impact (would shift PA-05 sub-scores)

1. **Asymmetric layout moments.** The page needs 2-3 instances where content breaks out of the single-column rhythm. A side-by-side comparison, an asymmetric grid (60/40 or 70/30), or a pull quote that breaks into the margin. These create spatial variety that the eye perceives as intentional composition.

2. **Zone-inflected H2 typography.** Each zone's heading should carry a subtle typographic fingerprint — letter-spacing, weight variation, or size inflection. This would lift PA-36 (hierarchy) from 4/5 to 5/5 and strengthen the factory metaphor (each "room" has its own voice).

3. **Dramatic density compression in Z3.** The factory floor should feel compressed: 14px body, 1.6 leading, tighter component margins, denser code block padding. This would lift PA-19 (crescendo) and PA-27 (density matches content).

4. **Stronger background deltas.** Z4→Z5 needs 25+ RGB delta. Z1→Z2 could also benefit from a slightly wider step. This is the cheapest fix with the highest PA impact.

### Medium Impact (would strengthen multiple auditor scores)

5. **Pull quote with dramatic sizing.** A single pull quote at 28-32px with generous margin, breaking the body text rhythm. Auditor G noted the lack of "typographic spectacle" — this would provide it.

6. **Display-size numerals in a numbered list or principle set.** The principles in Z5 use standard left-border treatment. Using 36-48px display numerals (Instrument Serif) with adjacent text would create a typographic moment.

7. **Table responsive card-fallback at 768px.** Currently tables only scroll horizontally. A card layout for narrow viewports would lift PA-30 from 4/5 to 5/5.

8. **Intermediate breakpoint at 1024px.** The role grid could use 3 columns at 1440px, 2 at 1024px, 1 at 768px. This would lift PA-30 and show responsive intentionality.

### Lower Impact (polish toward DESIGNED)

9. **Micro-interaction on blockquote hover.** A subtle left-border width increase on hover would add perceived craft without violating soul constraints.

10. **Zone transition border between zones.** A 1-2px border at zone boundaries (matching the outgoing zone's accent) would strengthen boundary perception without heavy-handed dividers.

11. **Drop cap enhancement.** The current 3.5em drop cap is functional. A 5-6em drop cap with a subtle background treatment (a lighter tint rectangle behind it) would create a genuine typographic moment.

12. **Footer link underline on hover.** Currently uses `border-bottom: 1px solid transparent` — standard underline on hover is more accessible and discoverable.

---

## Q5: Did the builder use tokens.css and components.css effectively?

### tokens.css Usage: GOOD (85%)

**Adopted tokens (with evidence):**

| Token Category | Adopted? | Evidence |
|---|---|---|
| Soul constraints (border-radius, box-shadow) | YES | Zero violations across 2,045 lines |
| Font trinity | YES | Lines 110-130, correct role assignments |
| Spacing scale (4px base) | YES | Spacing values are clean multiples throughout |
| Border weights (4/3/1) | YES | Lines 64-66, deployed structurally |
| Primary color (#E83025) | YES | Used as factory-rust accent |
| Zone colors | PARTIAL | Used similar values but created new custom properties |

**Missed tokens:**

- `--color-zone-sparse: #FEF9F5` and `--color-zone-dense: #FFFFFF` and `--color-zone-breathing: #FAF5ED` from tokens.css were available but the builder created its own 6-zone palette. This is where the pure white `#FFFFFF` for Z3 entered — it maps to `--color-zone-dense` in tokens.css, which itself is arguably a flawed token value.
- `--transition-base` and `--transition-slow` from tokens.css were not used — the builder defined transitions inline.

### components.css Usage: WEAK (40%)

The builder **reinvented rather than adopted** component patterns. Specific comparison:

| Component | components.css Class | Builder's Implementation | Divergence |
|---|---|---|---|
| Callouts | `.callout`, `.callout--warning`, etc. | `.callout` + zone-adapted inline variants | Similar structure, different zone adaptation |
| Code blocks | `.code-block`, `.code-block__header` | Custom with `.code-snippet`, `.snippet-header` | Naming divergence, similar patterns |
| Page header | `.page-header`, `.page-header__meta` | `.factory-header`, `.header-meta` | Full reinvention with factory naming |
| Stats bar | `.stats-bar`, `.stat-item` | `.header-stats`, `.stat-item` | Partial overlap |
| Section indicator | `.section-indicator` | `.section-indicator` | IDENTICAL name, similar CSS |
| Tables | `.table-wrapper`, `.data-table` | `.table-wrapper`, custom table styles | Partial overlap |
| Bento grid | `.bento-grid` | `.role-grid` (semantically renamed) | Structural similarity |
| Page footer | `.page-footer` | `.factory-footer` | Full reinvention |

**Key insight:** The builder treated `components.css` as a reference catalog rather than a CSS library to import. This is defensible — the factory metaphor demanded custom naming — but it resulted in:
1. ~400 lines of CSS that partially duplicates component library patterns
2. Missed component optimizations (e.g., components.css has more sophisticated callout variants)
3. Inconsistent class naming conventions (some match the library, some don't)

**Recommendation:** The recipe should explicitly instruct builders to EITHER adopt components.css classes directly OR create a concept-named alias system that maps to component patterns. The current "read the library, then reinvent everything" approach wastes CSS budget on duplication.

---

## Q6: What should the builder prompt template contain?

Based on the gap analysis above, here is what a builder prompt template should include for a fresh instance:

### Section 1: Identity Constraints (~15 lines)
- Soul constraints (border-radius: 0, box-shadow: none, container 940-960px)
- Font trinity with role assignments
- Warm palette mandate with pure-white prohibition
- Border hierarchy (4/3/1px with semantic meaning)

### Section 2: Perception Thresholds (~10 lines)
- Background delta: >=25 RGB between adjacent zones (raised from 15)
- Letter-spacing: >=0.025em when used
- Stacked gap maximum: <=120px total
- Single margin maximum: <=96px
- Body text range: 14-18px
- Line-height range: 1.55-1.85

### Section 3: Component Library Instructions (~15 lines)
- Link to components.css with instruction: "Adopt these classes directly OR create a mapping layer. Do NOT reinvent from scratch."
- List the 10 highest-frequency components to prioritize
- Mandate: zero inline styles in HTML

### Section 4: Multi-Coherence Requirements (~15 lines)
- Minimum 6 channels shifting at zone boundaries
- At least 4 channels must shift at every boundary
- Channel list: background, typography (size+leading), spacing (padding+margin), borders (weight+style), color accents, components (callout adaptation)
- Each zone must have at minimum ONE unique visual property not shared by any other zone

### Section 5: Spatial Composition (~15 lines)
- Minimum 2 layout variations beyond single-column (grid, asymmetric split, or pull-quote breakout)
- Density arc must be DRAMATIC: peak-density zone body text <=14px with <=1.6 leading
- At least 1 D-04 surprise moment (inversion, full-bleed, or dramatic register shift)
- H2 typography must vary across zones (inflected by zone character)

### Section 6: Quality Floor (~10 lines)
- >=14 mechanisms from the mechanism catalog
- >=800 CSS lines
- >=3 distinct channel shifts per zone boundary
- Zero inline styles
- Zero pure white (#FFFFFF) backgrounds
- Zero pure black (#000000) text

### Section 7: The Execution Brief (~attached)
- The planner's execution brief with metaphor, zone architecture, tension analysis, and creative direction
- This is the CREATIVE input — all above sections are CONSTRAINTS

### Section 8: Recipe Reference (~attached)
- The 6-phase sequenced recipe with phases, not a checklist
- Each phase is a VERB (Read, Select, Deploy, Evaluate, Compose)
- Phase 5 (Self-Evaluate) must include explicit threshold checks with remediation instructions

**Total template: ~80 lines of constraint + attached brief + attached recipe**

The critical structural insight: constraints are SHORT and BINARY (pass/fail). Creative direction is LONG and EXPLORATORY (the execution brief). The builder must receive both but understand they serve different purposes.

---

## Q7: What enrichments to the recipe would produce better builder output?

Ranked by expected impact on PA-05 score:

### Rank 1: Strengthen Zone Background Delta Guidance
**Current:** The recipe does not specify minimum RGB deltas between zones.
**Enrichment:** Add to Phase 2 (Select Creative Decisions): "After selecting zone backgrounds, verify every adjacent pair differs by >=25 RGB on at least one channel. If any pair fails, adjust before proceeding."
**Expected impact:** Would fix the Z4→Z5 weakness (the single most-flagged issue) and prevent warm cream blending.
**Effort:** 3 lines added to recipe Phase 2.

### Rank 2: Add Spatial Variety Minimum
**Current:** The recipe mentions "deploy scaffolding" but does not specify layout variety.
**Enrichment:** Add to Phase 3 (Deploy Scaffolding): "The page must include at minimum 2 layout structures beyond single-column. Options: 2-column grid, asymmetric split (60/40 or 70/30), pull-quote breakout, or sidebar annotation. These must appear in different zones."
**Expected impact:** Would address the single-column monotony flagged by Auditors D, H, and I. The role grid already counts as 1; this would force 1 more.
**Effort:** 4 lines added to recipe Phase 3.

### Rank 3: Mandate Zone-Inflected H2 Typography
**Current:** The recipe specifies the font trinity hierarchy (H1→H2→H3→H4→body→labels) but treats H2 as uniform.
**Enrichment:** Add to Phase 4 (Deploy Disposition, D-01): "Each zone's H2 must carry at least one typographic property unique to that zone: letter-spacing, weight, size, or text-transform variation. The H2 is the zone's voice — it should not sound identical across rooms."
**Expected impact:** Would fix H2 uniformity flagged by Auditors G and I. Directly strengthens PA-36 (hierarchy) and metaphor depth.
**Effort:** 3 lines added to recipe Phase 4, D-01.

### Rank 4: Dramatize Density Arc
**Current:** The recipe specifies a crescendo+release arc but not the magnitude of compression.
**Enrichment:** Add to Phase 6 (Temporal Composition): "The peak-density zone must reduce body text to <=14px with <=1.6 line-height. Paragraph margin-bottom in the peak zone must be <=12px. The reader should FEEL compression — if the transition from Z2 to Z3 is subtle, it is wrong."
**Expected impact:** Would address the "gentle arc" criticism from Auditors C, E, and I. Makes the factory floor feel like a factory floor.
**Effort:** 4 lines added to recipe Phase 6.

### Rank 5: Explicit Phase 5 Self-Evaluation Checklist
**Current:** Phase 5 says "self-evaluate against perception thresholds" but provides no structured protocol.
**Enrichment:** Replace Phase 5 with a binary checklist:
```
Phase 5: Self-Evaluate (MANDATORY before Phase 6)
□ Every adjacent zone pair: >=25 RGB delta? If NO → adjust backgrounds
□ Peak density zone body text <=14px? If NO → compress
□ At least 2 non-single-column layouts? If NO → add spatial variety
□ Every H2 visually distinct from adjacent zone H2? If NO → inflect
□ Zero inline styles? If YES → move to stylesheet
□ Zero #FFFFFF or #000000? If YES → warm the white, soften the black
□ D-04 surprise moment present after 50% scroll? If NO → add one
□ Stacked gaps <=120px at any zone boundary? If NO → reduce padding
```
**Expected impact:** Forces the builder to catch the exact issues that the 9 PA auditors found. This is prophylactic quality control — catching defects at build time rather than audit time.
**Effort:** 15 lines replacing Phase 5.

### Rank 6: Component Library Adoption Protocol
**Current:** The recipe says "Read vocabulary (tokens.css + components.css)" but doesn't specify how to USE the library.
**Enrichment:** Add to Phase 1: "For each component you plan to use, check if components.css has a matching class. If YES: adopt the class name and base CSS, then extend with zone-specific overrides using your metaphor naming. If NO: create a new component with naming conventions matching the library. Never reinvent a component that the library already provides."
**Expected impact:** Would save ~200 CSS lines of duplication and ensure the builder benefits from mature component patterns. Would also create consistency across pipeline pages.
**Effort:** 5 lines added to recipe Phase 1.

### Rank 7: Prohibit Pure White in Zone Backgrounds
**Current:** No explicit prohibition.
**Enrichment:** Add to identity constraints (Phase 2 pre-check): "Zone backgrounds must use warm values. #FFFFFF is prohibited. The lightest acceptable white is #FAFAF8 (retains warmth). Similarly, text must never be pure #000000 — use #1A1A1A or darker warm gray."
**Expected impact:** Would prevent the palette break that Auditor A flagged. Minor but cheap fix.
**Effort:** 2 lines added.

### Rank 8: Typographic Spectacle Moment
**Current:** The recipe mentions drop caps and blockquotes but doesn't require a typographic spectacle.
**Enrichment:** Add to Phase 4, D-04 or Phase 6: "Include at least ONE typographic moment that exceeds normal hierarchy: a pull quote at 28-32px, display numerals at 36-48px, or a first-line small-caps treatment. This is the typographic equivalent of the inversion block — a moment where the type itself becomes compositional."
**Expected impact:** Would address Auditor G's criticism that the page has "typographic craft but stops short of typographic spectacle." Would lift PA-39 from 4/5 to 5/5.
**Effort:** 3 lines added.

---

## Synthesis: The 3/4 → 4/4 Gap

The builder produced a genuinely composed page — the factory metaphor is structural, the multi-coherence is real, the component adaptation is zone-aware, and the D-04 inversion block is a legitimate surprise. This is NOT a checklist page.

The gap to DESIGNED is not about quantity (17-18 mechanisms is sufficient) but about **resolution and variety**:

1. **Background resolution:** The warm cream palette is correct but needs wider gamut within warmth
2. **Spatial resolution:** Single-column dominance creates monotonous rhythm
3. **Typographic resolution:** H2 uniformity and lack of spectacle moments
4. **Density resolution:** The arc exists but is too gentle to feel

The builder's strongest move — concept-based CSS naming — is exactly right. The builder's weakest move — reinventing components.css from scratch rather than extending it — wasted CSS budget that could have funded spatial variety.

**Predicted PA-05 with all 8 enrichments applied:** 3.5-4.0/4 (COMPOSED-HIGH to DESIGNED). The enrichments address exactly the auditor criticisms. Whether a builder achieves 4/4 also depends on creative execution quality, which no enrichment can guarantee.

---

## Appendix: Cross-Auditor Defect Frequency

| Defect | Auditors Flagging | Count |
|---|---|---|
| Zone background blending (esp. Z4→Z5) | B, C, D, H, I | 5 |
| H2 uniformity across zones | G, I | 2 |
| Pure white Z3 background | A, B, I | 3 |
| Single-column monotony | D, H, I | 3 |
| Density arc too gentle | C, E, I | 3 |
| Post-footer void | H | 1 |
| Inline styles | I | 1 |
| No typographic spectacle | G | 1 |
| Single breakpoint (no 1024px) | F | 1 |
| Tables scroll-only at narrow | F | 1 |

The top 5 defects (zone blending, H2 uniformity, pure white Z3, single-column, gentle density) account for 16 of 21 auditor flags. Enrichments 1-4 address all five.
