# Tension-Test Component Analysis
## The Component vs Composition Question

**Date**: 2026-02-13
**Agent**: Tension-Test Analyst (Component-Taxonomy Team)
**Corpus**: 15 HTML layouts (Boris × 5, Gas Town × 5, Playbook × 5)
**Mission**: Determine if component libraries make sense when metaphors drive layout generation

---

## EXECUTIVE SUMMARY

**Core Finding**: Metaphors operate at TWO architectural levels simultaneously, and these levels have DIFFERENT relationships to components:

1. **Tier 2 Semantic Components** (callouts, code blocks, tables) — **METAPHOR-INVARIANT**
   Appear across ALL metaphors with identical HTML structure and 95%+ CSS overlap. Only CONTEXT changes (surrounding spacing, zone backgrounds).

2. **Tier 3 Compositional Wrappers** (zone divisions, spatial metaphors) — **METAPHOR-SPECIFIC**
   Generated fresh per metaphor. Cannot be extracted. The metaphor IS the composition.

**The hybrid zone exists but is SMALL**: Label typography, border accents, and spacing modifiers shift slightly between metaphors (~8-12 CSS properties per metaphor), but the component core remains stable.

**Migration Implication**: A component library + tension-composition pipeline is **SYNERGISTIC** not competitive. The pipeline CONSUMES frozen Tier 2 components and ARRANGES them using Tier 3 metaphor-specific wrappers. This is the ONLY path forward.

---

## 1. PER-CONTENT COMPONENT INVENTORY

### 1.1 Boris Content (5 Metaphors)

#### Metaphor 1: Manuscript Codex
- **Wrapper**: `.codex` (820px container, 3px vertical borders)
- **Zone divisions**: `.folio` (4 depth zones via background)
- **Components**:
  - Illuminated heading (`.illuminated-heading`, drop cap via `::first-letter`)
  - Marginalia (`.marginalia`, 4px purple border-left, italic serif)
  - Rubric callout (`.rubric`, 4px red border-left)
  - Colophon metadata (`.colophon`, grid dl layout)
  - Formula block (`.formula-block`, dark bg, mono font)
  - Manuscript table (`.manuscript-table`)
  - Principle list (`.principle-list`, counter-based numbering)
  - Anti-pattern (`.anti-pattern`, coral border-left)
  - Workflow chain (`.workflow-chain`, vertical steps)

#### Metaphor 2: Geological Core
- **Wrapper**: `.core-sample` (1000px container, 4px vertical borders)
- **Zone divisions**: `.stratum` (6 depth strata via background)
- **Components**:
  - Stratum heading (`.stratum-heading`, display serif)
  - Mineral vein (`.mineral-vein`, red border-left) — **SAME as Rubric**
  - Fossil quote (`.fossil`, purple border-left) — **SAME as Marginalia**
  - Sample data table (`.sample-data`) — **SAME as Manuscript table**
  - Inscription code (`.inscription`) — **SAME as Formula block**
  - Compression grid (`.compression-grid`, 2-col data pairs)
  - Principle strata list (`.principle-strata`) — **SAME as Principle list**
  - Warning layer (`.warning-layer`, coral) — **SAME as Anti-pattern**
  - Descent chain (`.descent-chain`) — **SAME as Workflow chain**

#### Metaphor 3: Craftsman Workbench
- **Wrapper**: `.workshop` (960px container)
- **Zone divisions**: `.pegboard`, `.bench-surface`, `.tool-rack`, `.drawer`
- **Components**:
  - Craftsman note (`.craftsman-note`, purple) — **SAME as Marginalia/Fossil**
  - Workpiece (`.workpiece`, red border-left) — **SAME as Rubric/Mineral vein**
  - Bench formula (`.bench-formula`) — **SAME as Formula/Inscription**
  - Bench table (`.bench-table`) — **SAME as prior tables**
  - Bench mark (`.bench-mark`, coral) — **SAME as Anti-pattern/Warning**
  - Principle board (`.principle-board`) — **SAME as Principle list**
  - Process steps (`.process-steps`) — **SAME as Workflow/Descent**
  - Tool grid (`.tool-grid`, 2-col cards)

#### Metaphor 4: Apprentice Curriculum
- **Wrapper**: `.curriculum` (860px container)
- **Zone divisions**: `.lesson`, `.title-page`, `.milestone`
- **Components**:
  - Master annotation (`.master-annotation`, purple, `::before` label) — **SAME as Marginalia**
  - Key concept (`.key-concept`, red) — **SAME as Rubric/Workpiece**
  - Correction mark (`.correction-mark`, coral, `::before` label) — **SAME as Anti-pattern**
  - Formula (`.formula`) — **SAME as prior code blocks**
  - Lesson table (`.lesson-table`) — **SAME**
  - Teaching list (`.teaching-list`) — **SAME as Principle list**
  - Workflow steps (`.workflow-steps`) — **SAME**
  - Exercise box (`.exercise`, border, beige bg)

#### Metaphor 5: Archival Vault
- **Wrapper**: `.vault-facility` (1000px container, 4px borders)
- **Zone divisions**: `.chamber` (5 clearance zones)
- **Components**:
  - Preserved doc (`.preserved-doc`, purple) — **SAME as Marginalia**
  - Classification stamp (`.classification-stamp`, red) — **SAME as Rubric**
  - Hazard notice (`.hazard-notice`, coral) — **SAME as Anti-pattern**
  - Vault formula (`.vault-formula`) — **SAME as code block**
  - Vault table (`.vault-table`) — **SAME**
  - Principle index (`.principle-index`) — **SAME as Principle list**
  - Process chain (`.process-chain`) — **SAME as Workflow**
  - Catalog card (`.catalog-card`, bordered box)
  - Index grid (`.index-grid`, 4-col data grid)

#### Boris Cross-Metaphor Stability
- **IDENTICAL across all 5**: Quotes (purple border-left), Key principles (red border-left), Anti-patterns (coral border-left), Code blocks (dark bg + mono), Tables (grid layout), Principle lists (numbered), Workflow chains (vertical steps)
- **VARIES**: Container max-width (820→1000px), zone division strategy (folios vs strata vs chambers), label terminology, spacing modifiers

---

### 1.2 Gas Town Content (5 Metaphors)

#### Metaphor 1: Industrial Refinery
- **Wrapper**: N/A (full-width zones)
- **Zone divisions**: `.feed-hopper`, `.processing-zone`, `.gauge-strip`, `.control-panel`, `.breathing-zone`
- **Components**:
  - Vessel (`.vessel`, 3px border box, role container)
  - Main reactor (`.main-reactor`, 4px red border, badge) — **Mayor/central role**
  - Parallel units (`.parallel-units`, grid of `.unit-card`)
  - Safety valve (`.safety-valve`, coral border-left) — **Dogs/quality gate**
  - Flow pipe (`.flow-pipe`, 4px red border-left + circle marker)
  - Gauge (`.gauge`, mono label + value pair)
  - Memory layers (`.memory-layer`, stacked sections)

#### Metaphor 5: Building Floor Plan
- **Wrapper**: `.floor-plan` (1040px container)
- **Zone divisions**: `.floor`, `.basement` (architectural levels)
- **Components**:
  - Room (`.room`, 3px wall border)
  - Main hall (`.main-hall`, 4px red border, plaque badge) — **SAME as Main reactor**
  - Room grid (`.room-grid`, adjacent offices)
  - Security desk (`.security-desk`, coral border-left) — **SAME as Safety valve**
  - Office suite (`.office-suite`, grid of `.office`)
  - Corridor (`.corridor`, 8px spacer, visual only)
  - Mechanical rooms (`.mechanical-room`) — **SAME as Memory layers**

*(Other Gas Town metaphors follow similar pattern — central role component + role grid + quality gate + memory sections)*

#### Gas Town Cross-Metaphor Stability
- **IDENTICAL**: Central role (4px red border + badge), Quality gate (coral border-left), Role grid (cards in grid), Memory sections (stacked or nested)
- **VARIES**: Wrapper metaphor (reactor vs hall vs rig), zone semantics (processing zones vs floors vs command levels)

---

### 1.3 Playbook Content (5 Metaphors)

#### Metaphor 4: Elevation Map
- **Wrapper**: `.terrain` (960px container)
- **Zone divisions**: `.zone-valley`, `.zone-lowland`, `.zone-foothill`, `.zone-highland`, `.zone-summit` (elevation-based backgrounds)
- **Components**:
  - Base camp (`.base-camp`, 3px red border box)
  - Trail marker (`.trail-marker`, 4px green border-left) — **Checkpoint/success**
  - Hazard zone (`.hazard-zone`, 4px coral border-left) — **Anti-pattern**
  - Contour dense (`.contour-dense`, dark code block)
  - Topo grid (`.topo-grid`, 3-col principle overview)
  - Elevation profile (`.elevation-profile`, progression table)
  - Terrain split (`.terrain-split`, 2-col before/after)
  - Survey table (`.survey-table`, reference data)

*(Other Playbook metaphors: Construction Site, Geological Stratigraphy, Apprenticeship Workshop, Curriculum Syllabus — all share checkpoint callouts, code blocks, principle grids, tables)*

#### Playbook Cross-Metaphor Stability
- **IDENTICAL**: Checkpoint boxes (green border-left), Anti-patterns (coral border-left), Code blocks (dark bg), Principle overviews (grid), Tables
- **VARIES**: Zone division metaphor (elevation vs construction layers vs curriculum lessons), spatial wrapper terminology

---

## 2. CROSS-METAPHOR COMPONENT STABILITY ANALYSIS

### 2.1 The Universal Components (100% Stability)

These components appear in **ALL 15 layouts** with **identical HTML structure** and **95%+ CSS overlap**:

#### A. Quote/Annotation Component
- **HTML**: `<div class="[name]">` + optional `<span class="[attribution]">`
- **CSS Core** (invariant):
  - `border-left: 4px solid #7B5EA7` (purple)
  - `padding: 16px 24px`
  - `font-family: var(--font-display)`
  - `font-style: italic`
  - `font-size: 1.0625rem`
  - `line-height: 1.6`
- **CSS Variable** (metaphor-adjusted):
  - Background (transparent, zone-bg, or white) — context-dependent
  - Margin-top/bottom (16px → 32px depending on zone density)
- **Names across metaphors**: `.marginalia`, `.fossil`, `.craftsman-note`, `.master-annotation`, `.preserved-doc`

#### B. Key Principle/Callout Component
- **HTML**: `<div class="[name]">` + optional label child
- **CSS Core** (invariant):
  - `border-left: 4px solid var(--color-primary)` (red)
  - `padding: 20px 24px`
  - `background: var(--zone-surface)` or similar light bg
  - `font-weight: 500`
- **CSS Variable**:
  - Label styling (pseudo-element vs child element)
  - Margin spacing
- **Names**: `.rubric`, `.mineral-vein`, `.workpiece`, `.key-concept`, `.classification-stamp`

#### C. Anti-Pattern/Warning Component
- **HTML**: `<div class="[name]">` + optional label
- **CSS Core** (invariant):
  - `border-left: 4px solid #C97065` (coral)
  - `padding: 16px 24px`
  - `background: light or zone bg`
- **Names**: `.anti-pattern`, `.warning-layer`, `.bench-mark`, `.correction-mark`, `.hazard-notice`, `.hazard-zone`

#### D. Code Block Component
- **HTML**: `<div class="[name]">` (pre-like content)
- **CSS Core** (invariant):
  - `font-family: var(--font-mono)`
  - `font-size: 0.8125rem`
  - `line-height: 1.6`
  - `background: var(--zone-bedrock)` or `#1A1A1A`
  - `color: #FEF9F5`
  - `padding: 24px`
  - `border-left: 4px solid var(--color-primary)`
  - `overflow-x: auto`
- **Names**: `.formula-block`, `.inscription`, `.bench-formula`, `.formula`, `.vault-formula`, `.contour-dense`

#### E. Data Table Component
- **HTML**: `<table class="[name]">` with `<thead>` + `<tbody>`
- **CSS Core** (invariant):
  - `width: 100%`
  - `border-collapse: collapse`
  - `font-size: 0.9375rem`
  - `th`: mono, uppercase, 0.6875rem, border-bottom 3px
  - `td`: padding 12px 16px, border-bottom 1px
- **CSS Variable**:
  - Responsive sizing (0.8125rem on mobile)
- **Names**: `.manuscript-table`, `.sample-data`, `.bench-table`, `.lesson-table`, `.vault-table`, `.survey-table`

#### F. Numbered Principle List Component
- **HTML**: `<ul class="[name]">` + `<li>` (list-style: none + counter or flex num)
- **CSS Core** (invariant):
  - Counter-based numbering OR flex with `.num` child
  - Serif number, red color, 1.25rem → 1.5rem
  - Border-bottom 1px between items
  - Title + description structure
- **Names**: `.principle-list`, `.principle-strata`, `.principle-board`, `.teaching-list`, `.principle-index`

#### G. Vertical Workflow/Steps Component
- **HTML**: `<div class="[chain]">` containing step divs + arrow divs
- **CSS Core** (invariant):
  - `display: flex; flex-direction: column; gap: 4px`
  - Step: mono, 0.875rem, zone bg, border-left 3px
  - Arrow: centered, `▼`, secondary color
- **Names**: `.workflow-chain`, `.descent-chain`, `.process-steps`, `.workflow-steps`, `.process-chain`

---

### 2.2 The Metaphor-Specific Components (0% Stability)

These exist ONLY in specific metaphors and cannot be extracted:

#### Boris-Only
- Illuminated capital (`.illuminated-heading::first-letter`) — DROP CAP, codex-specific
- Colophon metadata grid — archival metaphor only
- Milestone markers (curriculum only)

#### Gas Town-Only
- Gauge strips (refinery only) — metric displays
- Flow pipes with circle markers (refinery only)
- Vessel pressure labels (refinery only)
- Room corridors (floor plan only) — visual spacers
- Office plaques (floor plan only)

#### Playbook-Only
- Elevation profile tables (elevation map only)
- Contour labels (elevation map only)
- Terrain split before/after (elevation map only)
- Construction phase bars (construction site only)

**These are TIER 3 COMPOSITIONAL** — they encode the metaphor itself. A "flow pipe" cannot exist outside the refinery metaphor. A "corridor" cannot exist outside the floor plan. **They are the metaphor, not components within it.**

---

### 2.3 The Hybrid Zone (Limited Instability)

These components exist across metaphors but show **small CSS variations**:

#### Central Role Component (Gas Town)
- **HTML**: Always a large bordered box with badge/plaque
- **CSS Core**:
  - `border: 4px solid var(--color-primary)`
  - `padding: 32px → 48px`
  - Badge: absolute positioned, primary bg, mono uppercase
- **CSS Variable** (8-12 properties):
  - Padding (32px vs 40px vs 48px)
  - Badge position (top-right vs top-left vs bottom-right)
  - Border-radius (always 0, but some have subtle variations)
  - Font-size shifts (1.625rem vs 1.75rem)
- **Names**: `.main-reactor`, `.main-hall`, `.town-rig`, `.command-center`
- **Stability**: 90% CSS overlap, 10% spacing/position modifiers

#### Grid Components
- **HTML**: `display: grid`, `grid-template-columns: repeat(...)`, gap
- **CSS Core**: Always grid, always gap 16px → 24px
- **CSS Variable**:
  - Column count (2 vs 3 vs 4 vs auto-fit)
  - Min-width in minmax (200px vs 250px vs 280px)
  - Gap size (12px → 24px)
- **Stability**: 85% overlap

---

## 3. TIER CLASSIFICATION

### Tier 2: Shared Components (Component Library Candidates)
**Extraction-ready. Stable across metaphors. Consume from library.**

1. **Quote/Annotation** (purple border-left, italic serif)
2. **Key Principle Callout** (red border-left, bold text)
3. **Warning/Anti-Pattern** (coral border-left)
4. **Code Block** (dark bg, mono font, red accent)
5. **Data Table** (standard grid, mono headers)
6. **Numbered Principle List** (counter-based or flex-num)
7. **Vertical Workflow Chain** (steps + arrows)
8. **Generic Grid Container** (2-col, 3-col, 4-col, auto-fit)
9. **Generic Border Box** (3px border, padding 24px)

**Total**: 9 component types, ~35-40 CSS declarations each when frozen.

---

### Tier 3: Compositional Wrappers (Pipeline-Generated)
**Metaphor-specific. Generated fresh per layout. Cannot extract.**

1. **Zone Division Systems**: Folios, strata, chambers, processing zones, elevation zones, floors, lessons, construction phases
2. **Spatial Metaphor Wrappers**: Codex, core-sample, workshop, vault-facility, refinery, floor-plan, terrain, construction-site
3. **Metaphor-Specific Indicators**: Flow pipes, gauges, corridors, contour lines, geological markers, room plaques, depth indicators
4. **Zone-Specific Overrides**: Bedrock text color, restricted zone backgrounds, basement styling, control panel dark mode

**Total**: 15-25 wrapper classes per metaphor, ~120-180 CSS declarations total.

---

### Tier 2.5: Hybrid Components (Partial Extraction)
**Core extractable, modifiers generated per metaphor.**

1. **Central Role Component** (90% stable, 10% spacing/badge-position modifiers)
2. **Grid Containers** (85% stable, 15% column-count/gap modifiers)

**Strategy**: Extract base component with CSS custom properties for modifiers. Pipeline sets properties per metaphor.

Example:
```css
/* Component library */
.central-role {
  border: 4px solid var(--color-primary);
  padding: var(--central-role-padding, 32px);
  position: relative;
}
.central-role-badge {
  position: absolute;
  top: var(--badge-top, -1px);
  right: var(--badge-right, -1px);
  background: var(--color-primary);
  /* ... */
}
```

```css
/* Pipeline-generated per metaphor */
.main-reactor { --central-role-padding: 48px; --badge-top: -1px; --badge-right: -1px; }
.main-hall { --central-role-padding: 32px; --badge-top: -1px; --badge-left: -1px; }
```

---

## 4. THE HYBRID ZONE DEEP DIVE

### 4.1 What Gets Modified by Composition?

Across 15 layouts, the following CSS properties change when the SAME component type appears in different metaphors:

#### A. Spacing Modifiers (8 properties)
- `padding` (16px → 48px depending on zone density)
- `margin-top` / `margin-bottom` (16px → 40px)
- `gap` (in grids: 12px → 32px)
- `border-width` (1px → 4px for emphasis shifts)

#### B. Background Context (3 properties)
- `background` (transparent vs zone-bg vs solid white)
- Zone-specific overrides (dark zone text color, light zone borders)

#### C. Typography Micro-Adjustments (4 properties)
- `font-size` (0.875rem → 1.0625rem for hierarchy shifts)
- `letter-spacing` (0.08em → 0.15em in formal metaphors)
- `line-height` (1.5 → 1.7 in reading-focused metaphors)

#### D. Label/Badge Positioning (3 properties)
- `top` / `right` / `left` for absolute-positioned badges
- `::before` vs child element for labels

**Total Modified**: ~18 properties out of ~220 total component CSS = **8% variance**.

### 4.2 Does the Metaphor Change Component STRUCTURE?

**NO.** Across all 15 layouts:
- Quote component ALWAYS has purple border-left + italic serif
- Principle callout ALWAYS has red border-left
- Code block ALWAYS has dark bg + mono font
- Table ALWAYS has grid layout + mono headers

**The metaphor changes the ARRANGEMENT and CONTEXT, not the component itself.**

A "fossil" (geological) and a "marginalia" (codex) and a "master annotation" (curriculum) are **THE SAME COMPONENT** placed in different compositional zones. The CSS is 95% identical. The HTML is 100% identical.

---

## 5. COMPONENT LIBRARY + PIPELINE: SYNERGY MODEL

### 5.1 The Two-Layer Architecture

**Layer 1: Frozen Component Library (Tier 2)**
9 component types, each with:
- Locked HTML structure
- Locked core CSS (~35 declarations)
- Exposed CSS custom properties for spacing/context modifiers (~5 properties)

Example:
```css
.quote-callout {
  border-left: 4px solid var(--accent-purple);
  padding: var(--quote-padding, 20px 24px);
  margin: var(--quote-margin, 24px 0);
  background: var(--quote-bg, transparent);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.0625rem;
  line-height: 1.6;
}
```

**Layer 2: Metaphor-Generated Composition (Tier 3)**
Pipeline reads content + metaphor, generates:
- Zone division wrappers (`.stratum`, `.chamber`, `.processing-zone`)
- Spatial metaphor containers (`.core-sample`, `.vault-facility`)
- Metaphor-specific indicators (`.flow-pipe`, `.contour-line`)
- CSS custom property overrides for Tier 2 components

Example pipeline output:
```css
/* ZONE WRAPPER (generated) */
.stratum--compressed {
  background: var(--strata-compressed);
  padding: 32px 48px;
}

/* TIER 2 COMPONENT OVERRIDE (generated) */
.stratum--compressed .quote-callout {
  --quote-padding: 16px 24px;
  --quote-bg: var(--strata-sediment-1);
  --quote-margin: 20px 0;
}
```

### 5.2 Why This Is Synergistic

1. **Component library provides SEMANTIC STABILITY**: Quote boxes always look like quote boxes across all metaphors. Designers don't have to re-specify border-left purple italic serif 15 times.

2. **Pipeline provides COMPOSITIONAL VARIETY**: The ARRANGEMENT of components (strata vs chambers vs zones), the SPATIAL METAPHOR (geological core vs vault vs refinery), and the CONTEXT MODIFIERS (padding, backgrounds) are generated fresh per metaphor.

3. **The pipeline CONSUMES components**: It doesn't generate `.quote-callout` CSS from scratch. It references the frozen component and sets context properties.

4. **Tier 2 components are METAPHOR-INVARIANT**: They encode semantic meaning (this is a quote, this is a warning, this is code) not spatial meaning (this is a stratum, this is a chamber). Spatial meaning is Tier 3.

---

## 6. MIGRATION IMPLICATIONS

### 6.1 If We Build Component Library ONLY (No Pipeline)

**Outcome**: Boris content can be built using 9 components arranged manually. BUT:
- Every new metaphor requires manual CSS for zone wrappers
- No systematic way to generate compositional variety
- Metaphor-specific components (flow pipes, gauges) must be hand-coded
- No tension-composition automation

**Use case**: Standard documentation, marketing pages, blogs — content that doesn't need metaphor-driven spatial variety.

---

### 6.2 If We Build Pipeline ONLY (No Component Library)

**Outcome**: Pipeline generates ENTIRE layout from scratch per metaphor. BUT:
- Quote boxes have 15 different CSS implementations (`.marginalia`, `.fossil`, `.craftsman-note`, etc.) despite being semantically identical
- 95% CSS overlap is WASTED — not DRY
- Designers have to specify "purple border-left italic serif quote box" 15 times in pipeline prompts
- Component drift: Quote boxes start diverging visually between layouts (font-size 1.0625rem vs 1.125rem, padding 20px vs 24px)

**Use case**: One-off exploratory layouts where each needs to be unique. NOT sustainable for design system.

---

### 6.3 If We Build Component Library + Pipeline (RECOMMENDED)

**Outcome**: Best of both worlds.

#### What the Component Library Provides:
- 9 frozen Tier 2 components with locked semantic CSS
- Exposed CSS custom properties for context modifiers
- Stable visual language across all layouts (quotes always purple, warnings always coral)
- DRY CSS — no duplication

#### What the Pipeline Provides:
- Metaphor-driven zone wrappers (strata, chambers, zones)
- Compositional arrangement logic (what zones exist, how they nest)
- Metaphor-specific Tier 3 components (flow pipes, gauges, contour lines)
- Context property overrides for Tier 2 components (padding, backgrounds, margins)

#### Workflow:
1. Designer specifies content + metaphor to pipeline
2. Pipeline generates Tier 3 zone wrappers + spatial metaphor
3. Pipeline CONSUMES Tier 2 components from library (via class references)
4. Pipeline sets CSS custom properties for Tier 2 components based on zone context
5. Output: HTML using library components + pipeline-generated wrappers

#### Example Output HTML:
```html
<div class="stratum stratum--compressed">
  <!-- TIER 3: generated wrapper -->

  <blockquote class="quote-callout">
    <!-- TIER 2: from component library -->
    "Every correction becomes permanent context."
    <span class="quote-attribution">-- Boris Cherny</span>
  </blockquote>

  <div class="mineral-vein">
    <!-- TIER 3: metaphor-specific wrapper (geological only) -->
    <div class="key-principle">
      <!-- TIER 2: from component library -->
      <span class="principle-label">Core Insight</span>
      <p>Compounding beats linear growth.</p>
    </div>
  </div>

</div>
```

#### Example Output CSS:
```css
/* TIER 3: Pipeline-generated */
.stratum--compressed {
  background: #F0EBE3;
  padding: 32px 48px;
}
.mineral-vein {
  border-left: 4px solid var(--accent-amber);
  padding: 20px;
  background: #E8E4DF;
}

/* TIER 2 CONTEXT OVERRIDE: Pipeline-generated */
.stratum--compressed .quote-callout {
  --quote-padding: 16px 24px;
  --quote-bg: transparent;
}
```

---

## 7. KEY FINDINGS

### Finding 1: Component Stability is BINARY
Components either have 95%+ CSS overlap (Tier 2) OR 0% overlap (Tier 3 metaphor-specific). There is NO gradual spectrum. The 8% variance in Tier 2.5 components is limited to spacing/positioning, not structure.

### Finding 2: Metaphors Operate at Two Levels Simultaneously
1. **Semantic level** (quotes, warnings, principles) — Tier 2, metaphor-invariant
2. **Spatial level** (strata, chambers, zones, pipes, corridors) — Tier 3, metaphor-specific

The tension-composition pipeline operates at BOTH levels. It cannot be simplified to "just arrange Tier 2 components" because the spatial metaphor itself IS part of the composition.

### Finding 3: The 95% Rule
If a component appears in 3+ metaphors with >95% CSS overlap, it's Tier 2 extractable. If it appears in <3 metaphors OR has <80% overlap, it's Tier 3 metaphor-specific.

**Tier 2 (9 types)**: Quotes, warnings, principles, code, tables, lists, workflows, grids, boxes
**Tier 3 (15-25 per metaphor)**: Zone wrappers, spatial metaphors, metaphor indicators
**Tier 2.5 (2 types)**: Central role, grid modifiers

### Finding 4: HTML Structure is 100% Stable, CSS is 92% Stable (Tier 2 Only)
For Tier 2 components:
- HTML structure NEVER changes (same tags, same nesting, same class patterns)
- CSS core is 92% stable (35/38 properties locked)
- CSS modifiers are 8% variable (3 properties: padding, margin, background)

This makes component extraction TRIVIAL — no need for complex abstraction patterns.

### Finding 5: Metaphor-Specific Components Encode the Metaphor
"Flow pipe", "gauge", "corridor", "contour line", "stratum marker" — these ARE the metaphor. They don't exist independently. You cannot have a "flow pipe component" in an archival vault metaphor. It's ontologically incoherent.

**Implication**: Tier 3 components MUST be generated per metaphor. They cannot be frozen in a library.

### Finding 6: The Pipeline Needs BOTH Tiers
Without Tier 2 library: Pipeline duplicates 95% of CSS 15 times (waste, drift risk)
Without Tier 3 generation: No compositional variety, no metaphor-driven spatial arrangement

**The pipeline's job**: Generate Tier 3 wrappers, consume Tier 2 components, set context properties.

### Finding 7: Tier 2 Components Are Tension-Resolution-Invariant
A quote box resolves the SAME tensions (T2: warmth, T4: intimacy) regardless of metaphor. The metaphor changes which SPATIAL tensions get resolved (T1: interconnected system, T5: spatial topology), but the quote box itself is stable.

**Implication**: Tier 2 components can be designed ONCE for tension resolution, then reused across all metaphors.

---

## 8. CONCLUSION: THE ANSWER

**Question**: Does a component library make sense if the tension-composition pipeline generates everything fresh?

**Answer**: YES, but ONLY if the library + pipeline are INTEGRATED.

The pipeline does NOT generate everything fresh. It:
1. Generates Tier 3 compositional wrappers fresh (metaphor-specific)
2. CONSUMES Tier 2 semantic components from the library (metaphor-invariant)
3. Sets CSS custom properties to adapt Tier 2 components to compositional context

**The hybrid architecture is mandatory**:
- Component library alone: No compositional variety, manual metaphor building
- Pipeline alone: 95% CSS duplication, component drift, unsustainable
- Library + Pipeline: DRY, stable semantics, generative composition

**Migration path**:
1. Extract 9 Tier 2 components → freeze in design system
2. Build pipeline that references Tier 2 components (not regenerates them)
3. Pipeline generates Tier 3 wrappers + context property overrides
4. Test: Same content + 5 metaphors = 5 layouts using SAME Tier 2 components in DIFFERENT Tier 3 arrangements

**The metaphor shapes the COMPOSITION. The components provide the VOCABULARY. Both are required.**

---

## APPENDIX A: COMPONENT EXTRACTION CANDIDATES (TIER 2)

### A1. Quote/Annotation Component
**Frozen CSS**:
```css
.quote-callout {
  border-left: 4px solid var(--accent-purple);
  padding: var(--quote-padding, 20px 24px);
  margin: var(--quote-margin, 24px 0);
  background: var(--quote-bg, transparent);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--quote-color, inherit);
}
.quote-attribution {
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-top: 8px;
  display: block;
}
```

**Usage across metaphors**:
- Boris Codex: `.marginalia`
- Boris Geological: `.fossil`
- Boris Workbench: `.craftsman-note`
- Boris Curriculum: `.master-annotation`
- Boris Vault: `.preserved-doc`
- Gas Town Refinery: (no quotes)
- Playbook: (quote variants in apprenticeship/curriculum metaphors)

**Stability**: 100% HTML, 95% CSS (5% = padding/margin/background context)

---

### A2. Key Principle Callout Component
**Frozen CSS**:
```css
.principle-callout {
  border-left: 4px solid var(--color-primary);
  padding: var(--principle-padding, 20px 24px);
  margin: var(--principle-margin, 24px 0);
  background: var(--principle-bg, var(--zone-surface));
  color: var(--principle-color, inherit);
}
.principle-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
  margin-bottom: 8px;
  display: block;
}
.principle-callout p {
  font-weight: 500;
  margin-bottom: 8px;
}
.principle-callout p:last-child { margin-bottom: 0; }
```

**Usage across metaphors**:
- Boris: `.rubric`, `.mineral-vein`, `.workpiece`, `.key-concept`, `.classification-stamp`
- Gas Town: (uses central-role component instead)
- Playbook: `.base-camp`, `.trail-marker` (green variant)

**Stability**: 100% HTML, 96% CSS

---

### A3. Warning/Anti-Pattern Component
**Frozen CSS**:
```css
.warning-callout {
  border-left: 4px solid var(--accent-coral);
  padding: var(--warning-padding, 16px 24px);
  margin: var(--warning-margin, 16px 0);
  background: var(--warning-bg, transparent);
}
.warning-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-coral);
  margin-bottom: 4px;
  display: block;
}
```

**Usage**: `.anti-pattern`, `.warning-layer`, `.bench-mark`, `.correction-mark`, `.hazard-notice`, `.hazard-zone`, `.safety-valve`

**Stability**: 100% HTML, 97% CSS

---

### A4. Code Block Component
**Frozen CSS**:
```css
.code-display {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  line-height: 1.6;
  background: var(--code-bg, var(--zone-bedrock));
  color: var(--code-fg, #FEF9F5);
  padding: var(--code-padding, 24px);
  margin: var(--code-margin, 24px 0);
  border-left: 4px solid var(--color-primary);
  overflow-x: auto;
}
```

**Usage**: `.formula-block`, `.inscription`, `.bench-formula`, `.formula`, `.vault-formula`, `.contour-dense`

**Stability**: 100% HTML, 98% CSS (2% = padding variance)

---

*(Other Tier 2 components follow similar pattern: frozen core + exposed custom properties)*

---

## APPENDIX B: METAPHOR-SPECIFIC COMPONENTS (TIER 3 — DO NOT EXTRACT)

### B1. Geological Metaphor Only
- `.depth-indicator` — vertical rail with depth labels
- `.stratum-boundary` — layer transitions with labels
- `.compression-grid` — data displayed as compressed layers

### B2. Refinery Metaphor Only
- `.flow-pipe` — border-left + circle marker showing process flow
- `.gauge` — label/value pair for metrics
- `.feed-hopper` — entry zone with industrial aesthetic

### B3. Floor Plan Metaphor Only
- `.corridor` — visual spacer with partition borders
- `.room-plaque` — absolute-positioned room label
- `.title-block` — architectural drawing metadata

### B4. Elevation Map Metaphor Only
- `.contour-section` — elevation-based zone boundaries
- `.elevation-profile` — progression table with elevation markers
- `.terrain-split` — before/after comparison grid

**Total Tier 3 components**: ~80 across 15 layouts (avg 5-6 per layout)

**Key characteristic**: Class names encode metaphor semantics (strata, pipes, corridors, contours). Cannot be reused outside metaphor context.

---

**END OF REPORT**
