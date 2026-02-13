# Metaphor Trap Mapping: CSS-Level Taxonomy

**Comprehensive analysis of 15 HTML layouts across 3 content pieces**
**Extraction of spatial design patterns that emerge from metaphorical thinking**

---

## Executive Summary

Analyzing 15 tension-composition layouts reveals a critical finding: **metaphors encode spatial biases that manifest as CSS values**. A "geological core sample" conceptually encourages compression (900px container, 36px padding at depth). A "manuscript codex" encourages margin-as-emptiness (820px text column in 1440px viewport = 43% wasted horizontal space). These are not bugs — they are the metaphor working as designed. The traps occur when metaphorical correctness conflicts with perceptual comfort.

This taxonomy maps 7 trap categories, 43 specific patterns, and their CSS signatures across all 15 layouts.

---

## Part 1: Per-Metaphor Spatial DNA

### BORIS #1: Manuscript Codex

**Conceptual Shape:** Tall, narrow vellum pages bound vertically. Wide margins for marginalia. Illuminated capitals create visual anchors.

**CSS Signature:**
```
Container:    max-width: 820px        (56.9% of 1440px)
Padding:      48px 64px               (surface folio)
              24px 40px               (bedrock folio)
Label→Head:   12px                    (meta-label margin-bottom)
Head→Body:    32px                    (illuminated-heading margin-bottom)
Section→Sec:  48px margin + 3px border (chapter-divider--breathing)
Grid:         None (linear narrative)
Viewport %:   56.9%
```

**Metaphor-Driven Traps:**
- **MARGIN TRAP:** Right side empty space is "where marginalia would be written" — metaphorically correct, perceptually wasteful at wide viewports
- **ILLUMINATION TRAP:** First-letter drop caps (4rem initial) create unpredictable line rhythm
- **DEAD ZONE TRAP:** Chapter dividers with `margin: 48px 0` create viewport-height gaps of cream between sections (25% empty space at bottom)

**Trap Severity:** HIGH (dead zones), MEDIUM (margin waste)

**Content-to-Viewport Ratio:** 820/1440 = **56.9%** (lowest horizontal efficiency)

---

### BORIS #2: Geological Core Sample

**Conceptual Shape:** Cylindrical core sample, concentric compression from surface (loose sediment) to bedrock (dense rock).

**CSS Signature:**
```
Container:    max-width: 900px        (62.5% of 1440px)
Padding:      80px 64px               (topsoil stratum)
              48px 48px               (sediment-1 stratum)
              24px 40px               (compressed stratum)
              16px 36px               (bedrock stratum)
Label→Head:   12px                    (dating-marker margin-bottom)
Head→Body:    32px                    (stratum-heading margin-bottom)
Section→Sec:  3px                     (stratum-boundary height)
Grid:         2-column                (compression-grid, gap: 1px)
Viewport %:   62.5%
```

**Metaphor-Driven Traps:**
- **COMPRESSION TRAP:** Deepest strata have 16px padding vs 80px at surface — metaphorically correct (compression under pressure), perceptually cramped at 768px where 16px lateral padding leaves ~232px text column
- **WIDTH TRAP:** 900px container = only 62.5% of 1440px viewport. Geological samples are narrow cylinders — metaphor dictates narrowness
- **DENSITY TRAP:** Compression grid has 1px gap (tight packing). Correct for geology, visually dense

**Trap Severity:** MEDIUM (compression at narrow viewports), MEDIUM (width constraint)

**Content-to-Viewport Ratio:** 900/1440 = **62.5%** (second-lowest horizontal efficiency)

---

### BORIS #3: Craftsman's Workbench

**Conceptual Shape:** Horizontal workbench with tools arranged left-to-right. Pegboard above, bench surface center, drawers below.

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      64px                    (bench-surface)
              40px 48px               (tool-rack)
              32px 48px               (drawer)
Label→Head:   24px                    (tool-rack-label margin-bottom)
Head→Body:    24px                    (section-heading margin-bottom)
Section→Sec:  3px solid               (border-top on tool-rack)
Grid:         2-column                (tool-grid, gap: 20px)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **HORIZONTAL TRAP:** Workshop tools need horizontal space — the 2-column tool grid breaks to single column at 768px, creating elongation
- **MONOTONY TRAP:** Tool cards are uniform 3px borders with identical structure — no visual hierarchy between essential tools and secondary tools
- **PEGBOARD TRAP:** Dark header (48px 64px padding) is proportionally heavy at narrow viewports

**Trap Severity:** CRITICAL (responsive overflow pre-fix), LOW (monotony post-fix)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

---

### BORIS #4: Apprentice Curriculum

**Conceptual Shape:** Sequential lessons in a bound syllabus. Title page → lessons → exercises → mastery tests.

**CSS Signature:**
```
Container:    max-width: 860px        (59.7% of 1440px)
Padding:      80px 64px               (title-page)
              40px 64px               (lesson)
              36px 48px               (lesson--advanced)
              24px 32px               (exercise inset)
Label→Head:   24px                    (lesson-header margin-bottom)
Head→Body:    20px                    (lesson-title margin-bottom)
Section→Sec:  1px solid               (lesson border-bottom)
Grid:         None (linear sequence)
Viewport %:   59.7%
```

**Metaphor-Driven Traps:**
- **LESSON TRAP:** Each lesson is a bounded unit with `padding: 40px 64px` — creates dead zones between lessons (viewport-height gaps)
- **EXERCISE TRAP:** Exercises are inset with `background: var(--zone-exercise)` and reduced padding (24px 32px) — creates visual monotony (all exercises look identical)
- **MILESTONE TRAP:** Milestone dividers are subtle (24px padding, `background: var(--zone-exercise)`) — weak checkpointing

**Trap Severity:** HIGH (dead zones), MEDIUM (milestone weakness)

**Content-to-Viewport Ratio:** 860/1440 = **59.7%**

---

### BORIS #5: Archival Vault

**Conceptual Shape:** Security-clearance progression from lobby (public) to restricted vault (deepest). Chambers at different access levels.

**CSS Signature:**
```
Container:    max-width: 920px        (63.9% of 1440px)
Padding:      48px 64px               (chamber--lobby)
              32px 48px               (chamber--inner-vault)
Label→Head:   8px                     (chamber-label margin-bottom)
Head→Body:    24px                    (vault-heading margin-bottom)
Section→Sec:  4px solid               (chamber-seal border-top)
Grid:         4-column                (index-grid, gap: 1px)
Viewport %:   63.9%
```

**Metaphor-Driven Traps:**
- **LABEL TRAP:** Classification stamps with red primary color read as WARNING not CLASSIFICATION (aggressive tone)
- **CLEARANCE TRAP:** Chamber seals are heavy (4px solid borders) — creates hard boundaries between sections
- **COMPRESSION TRAP:** Inner vault chambers compress to 32px 48px padding — similar to geological compression trap

**Trap Severity:** LOW (labels fixed to subtle), LOW (compression acceptable for security metaphor)

**Content-to-Viewport Ratio:** 920/1440 = **63.9%**

---

### GAS TOWN #1: Industrial Refinery

**Conceptual Shape:** Process plant with feed hopper (input), processing zones (transformation), flow pipes (connections), vessels (containment).

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      80px 24px               (feed-hopper)
              64px 24px               (processing-zone)
              48px 24px               (breathing-zone)
Label→Head:   16px                    (zone-header margin-bottom + border)
Head→Body:    32px                    (after zone-header)
Section→Sec:  3px solid               (breathing-zone borders)
Grid:         None (vessel cards)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **DEAD ZONE TRAP:** Breathing zones with `padding: 48px 24px` create empty space between processing zones — metaphorically "settling tanks" but perceptually wasted
- **STATS TRAP:** Gauge strip with `gap: 32px` flexbox wraps awkwardly at 768px (4 gauges become 2x2 grid with uneven spacing)
- **FLOW TRAP:** Flow pipes (`border-left: 4px solid`, `margin-left: 40px`) create asymmetric layout — pipes enter from left

**Trap Severity:** MEDIUM (dead zones), MEDIUM (gauge wrapping)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

---

### GAS TOWN #2: Military Command Post

**Conceptual Shape:** War room with command header (situation board), briefing zones, operations floor with ranked officer hierarchy.

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      80px 24px 48px          (command-header)
              64px 24px               (briefing)
              64px 24px               (operations)
Label→Head:   24px                    (h1 margin-bottom)
Head→Body:    32px                    (ops-header margin-bottom + border)
Section→Sec:  3px solid               (ops-header border-bottom)
Grid:         2-column                (officer-grid, gap: 24px, min 280px)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **STATS TRAP:** Situation board with `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))` — at 768px becomes cramped 5-column grid
- **ACCENT TRAP:** Green accent used for status indicators — conflicts with warm palette (fixed to amber)
- **RANK TRAP:** Rank insignia labels are aggressive (uppercase, 0.15em letter-spacing) — over-labeling risk

**Trap Severity:** LOW (stats fixed), LOW (accent fixed), LOW (labels acceptable for military context)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

---

### GAS TOWN #3: City Zoning Map

**Conceptual Shape:** Urban planning map viewed from above. Districts as zones, streets as separators, City Hall as civic center, buildings as role containers.

**CSS Signature:**
```
Container:    max-width: 1040px       (72.2% of 1440px)
Padding:      48px 32px               (district)
              32px                    (city-hall)
Label→Head:   24px                    (district-header margin-bottom + border)
Head→Body:    12px                    (city-hall h3 margin-bottom)
Section→Sec:  4px                     (district margin-bottom)
              12px                    (street height)
Grid:         Auto-fit                (building-grid, gap: 16px, min 280px)
Viewport %:   72.2%
```

**Metaphor-Driven Traps:**
- **LABEL TRAP (CRITICAL):** "MAIN STREET -- CONNECTING DISTRICTS" text labels announced the metaphor instead of embodying it — most explicit over-labeling in all 15 layouts (FIXED: removed)
- **LEGEND TRAP:** Map legend with swatches + labels was overly literal (opacity: 0.75 subdues it but still announces the metaphor)
- **STREET TRAP:** Street separators (`height: 12px`, tan background) are visual but functionally empty — micro dead zones

**Trap Severity:** CRITICAL pre-fix (labels), LOW post-fix

**Content-to-Viewport Ratio:** 1040/1440 = **72.2%** (widest Gas Town layout)

---

### GAS TOWN #4: Circuit Board

**Conceptual Shape:** PCB schematic with dark substrate, rectangular IC packages, data buses as traces, peripheral chips.

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      64px 24px               (pcb-header on dark)
              48px 32px               (schematic-area on light)
Label→Head:   12px                    (schematic-title margin-bottom + border)
Head→Body:    32px                    (after border in IC package)
Section→Sec:  24px                    (ic-package margin-bottom)
Grid:         Auto-fit                (peripheral-grid, gap: 16px, min 280px)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **ABSTRACTION TRAP:** Circuit board is maximally technical — zero emotional dimension. Works for system architecture, fails for human transformation content.
- **CONNECTOR TRAP:** Data buses (`border-left: 4px`, `padding: 12px 24px`, `margin-left: 40px`) are visually weak — needed explicit trace connectors (ADDED)
- **STATS TRAP:** Pin header with `gap: 32px` flexbox — same wrapping issue as Refinery gauge strip

**Trap Severity:** LOW (connectors added), MEDIUM (zero warmth inherent)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

---

### GAS TOWN #5: Building Floor Plan

**Conceptual Shape:** Architectural blueprint with title block, floor plates, rooms as bordered sections, corridors as separators.

**CSS Signature:**
```
Container:    max-width: 1040px       (72.2% of 1440px)
Padding:      32px                    (floor-content)
              24px                    (room)
              32px                    (main-hall)
Label→Head:   12px                    (room-header margin-bottom + border)
Head→Body:    12px                    (main-hall h3 margin-bottom)
Section→Sec:  16px                    (room margin-bottom)
              8px                     (corridor height)
Grid:         Auto-fit                (room-grid, gap: 16px, min 280px)
Viewport %:   72.2%
```

**Metaphor-Driven Traps:**
- **CORRIDOR TRAP:** Corridors with text labels ("EXECUTIVE CORRIDOR") announced transitions explicitly — removed, now silent 8px tan bars (FIXED)
- **SPEC TRAP:** Title block spec info (drawing number, date, scale) competed visually with main title — reduced opacity and size (FIXED)
- **MONOTONY TRAP:** All rooms have identical 3px borders — no visual hierarchy between main hall and offices (main hall has 4px PRIMARY border, others 3px border)

**Trap Severity:** LOW (all fixed)

**Content-to-Viewport Ratio:** 1040/1440 = **72.2%** (widest Gas Town layout)

---

### PLAYBOOK #1: Apprenticeship Workshop

**Conceptual Shape:** Master's workshop with sign above (header), tool wall (principles grid), workbench (active learning), rank progression (levels).

**CSS Signature:**
```
Container:    max-width: 900px        (62.5% of 1440px)
Padding:      80px 40px 64px          (workshop-sign)
              64px 0                  (tool-wall section)
              48px 40px               (workbench)
Label→Head:   24px                    (guild-mark margin-bottom)
Head→Body:    24px                    (h1 margin-bottom)
Section→Sec:  3px solid               (tool-wall border-top)
Grid:         2-column                (tool-wall-grid, gap: 24px)
Viewport %:   62.5%
```

**Metaphor-Driven Traps:**
- **MONOTONY TRAP (CRITICAL):** Tool wall grid has 8 identical cards with 1px borders — no visual hierarchy, perfect score on tension resolution but perceptually flat (PARTIAL FIX: first 4 cards now 4px left border, heavier weight)
- **DEAD ZONE TRAP:** Trailing ~3,700px empty space below footer — systemic CSS issue across all Playbook layouts
- **WARMTH vs DENSITY:** Workshop achieves warmth (display serif, warm palette) but sacrifices density (generous spacing, large cards)

**Trap Severity:** HIGH (monotony partially fixed), MEDIUM (dead zones systemic)

**Content-to-Viewport Ratio:** 900/1440 = **62.5%**

---

### PLAYBOOK #2: Construction Site

**Conceptual Shape:** Building rising from foundation (dark, load-bearing) through floor plates to completion. Scaffolding as temporary supports.

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      80px 40px               (foundation dark)
              64px 0                  (floor-plate)
              48px 40px               (load-bearing-section dark)
Label→Head:   8px                     (floor-number margin-bottom)
Head→Body:    24px                    (h2 margin-bottom)
Section→Sec:  4px solid               (floor-plate border-top)
Grid:         2-column                (elevation-diagram, also inspection-report)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **DARK ZONE TRAP:** Load-bearing sections have `background: #2A2A2A` (very dark) — perceptually heavy, creates readability contrast issues (FIXED: lightened to #3A3A3A, improved text to #CCC)
- **SCAFFOLDING TRAP:** Scaffolding callouts have `border: 3px solid amber` with `position: absolute` label — visually busy, breaks flow
- **DEAD ZONE TRAP:** Same trailing empty space as all Playbook layouts

**Trap Severity:** MEDIUM (dark zones lightened), MEDIUM (scaffolding acceptable for metaphor)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

---

### PLAYBOOK #3: Geological Stratigraphy

**Conceptual Shape:** Stratigraphic column with bedrock (dark, dense) to surface (light, spacious). Formation blocks as compressed data.

**CSS Signature:**
```
Container:    max-width: 880px        (61.1% of 1440px)
Padding:      80px 40px 48px          (bedrock dark header)
              48px 0                  (stratum)
              48px 40px               (stratum-mid)
Label→Head:   20px                    (specimen-label margin-bottom)
Head→Body:    20px                    (bedrock h1 margin-bottom)
Section→Sec:  3px solid               (stratum border-top)
Grid:         2-column                (formation-grid, gap: 0, shared borders)
Viewport %:   61.1%
```

**Metaphor-Driven Traps:**
- **COMPRESSION TRAP:** Formation grid has `gap: 0` and shared 1px borders — maximum density, perceptually cramped (FIXED: improved contrast, text color #333 → #1A1A1A)
- **DARK ZONE TRAP:** Bedrock and deep stratum sections are very dark (#1A1A1A) — same issue as Construction Site (FIXED: text brightened to #CCC)
- **MONOTONY TRAP:** Formation blocks are uniform — all 2x2 grid with identical structure (acceptable for geological metaphor — formations are uniform)

**Trap Severity:** MEDIUM (contrast improved), LOW (uniformity acceptable)

**Content-to-Viewport Ratio:** 880/1440 = **61.1%** (narrowest Playbook)

---

### PLAYBOOK #4: Elevation Map

**Conceptual Shape:** Topographic map with elevation zones (dark valley to light summit). Contour lines as section boundaries, graduated backgrounds.

**CSS Signature:**
```
Container:    max-width: 960px        (66.7% of 1440px)
Padding:      64px 40px 48px          (map-title-block dark header)
              48px 0                  (contour-section)
              48px 40px               (zone-valley, zone-lowland dark)
Label→Head:   16px                    (map-legend-label margin-bottom)
Head→Body:    20px                    (h2 margin-bottom)
Section→Sec:  1px solid               (contour-section border-top)
              3px solid               (contour-section-major border-top)
Grid:         3-column                (topo-grid, gap: 0, FIXED from 4-column)
Viewport %:   66.7%
```

**Metaphor-Driven Traps:**
- **GRID TRAP:** Originally 4-column topo grid — cramped at 768px (4 cells @ 180px each) (FIXED: 3-column @ 253px each)
- **GRADIENT TRAP:** 5 background zones (valley dark → summit light) require careful text color management — dark zones need light text, light zones need dark text
- **IMPLICIT SUCCESS:** This metaphor avoids label traps — elevation is communicated through GRADUATED BACKGROUNDS, not text labels

**Trap Severity:** LOW (grid fixed), LOW (gradient managed well)

**Content-to-Viewport Ratio:** 960/1440 = **66.7%**

**BEST OVERALL:** Unqualified STRONG PASS at both viewports. Strongest perceptual outcome across all 15 layouts.

---

### PLAYBOOK #5: Curriculum Syllabus

**Conceptual Shape:** Academic course catalog with institutional header, course sections, module entries, semester blocks, assessment blocks.

**CSS Signature:**
```
Container:    max-width: 900px        (62.5% of 1440px)
Padding:      64px 40px 48px          (catalog-header dark)
              48px 0                  (course-section)
              32px 0                  (course-section-minor)
Label→Head:   16px                    (dept-label margin-bottom)
Head→Body:    20px                    (h2 margin-bottom)
Section→Sec:  3px solid               (course-section border-top)
              1px solid               (course-section-minor border-top)
Grid:         2-column                (exam-comparison, gap: 0)
Viewport %:   62.5%
```

**Metaphor-Driven Traps:**
- **MONOTONY TRAP:** Module entries are uniform `grid-template-columns: 80px 1fr` with 1px borders — all identical structure (PARTIAL FIX: semester grouping creates arcs, midterm break divider added)
- **LABEL TRAP:** Course codes (CC-101, CC-102) are literal catalog codes — acceptable for institutional metaphor (not over-labeling)
- **DEAD ZONE TRAP:** Same trailing empty space as all Playbook layouts

**Trap Severity:** MEDIUM (monotony partially addressed), MEDIUM (dead zones systemic)

**Content-to-Viewport Ratio:** 900/1440 = **62.5%**

---

## Part 2: Trap Taxonomy by Category

### TRAP 1: COMPRESSION TRAPS

**Definition:** Metaphors that conceptually encourage tightening space at depth/intensity/security levels.

**Metaphors Affected:**
- Geological Core Sample (bedrock: 16px padding)
- Geological Stratigraphy (formation grid: gap 0)
- Archival Vault (inner vault: 32px padding vs 48px lobby)

**CSS Signatures:**
```css
/* Deep strata compression */
.stratum--bedrock { padding: 16px 36px; }           /* vs 80px 64px topsoil */
.chamber--inner-vault { padding: 32px 48px; }       /* vs 48px 64px lobby */
.formation-grid { gap: 0; }                         /* shared borders, maximum density */
```

**Why It's a Trap:**
- Metaphorically correct: deep rock IS compressed, inner vaults ARE restricted
- Perceptually problematic: 16px lateral padding at 768px leaves ~232px text column (too narrow for comfortable reading)

**The Fine Line:**
- ACCEPTABLE: 32px padding (45% compression from 48px surface)
- RISKY: 24px padding (50% compression)
- BROKEN: 16px padding (67% compression) — too extreme for narrow viewports

**Instances:**
1. Boris Core bedrock stratum: `padding: 16px 36px` — ACCEPTABLE (dark background + light text creates contrast that compensates)
2. Boris Core compression grid: `gap: 1px` — ACCEPTABLE (2-column grid maintains readability)
3. Boris Vault inner chamber: `padding: 32px 48px` — GOOD (stays above 32px threshold)
4. Playbook Stratigraphy formation grid: `gap: 0` — RISKY (needs strong text contrast to work, FIXED)

**Solution Pattern:** Cap minimum padding at 32px even in "deepest" metaphor zones. Use background color shift instead of spatial compression to signal depth.

---

### TRAP 2: WIDTH TRAPS

**Definition:** Metaphors that conceptually dictate narrow containers (cylindrical samples, bound pages, focused workspaces).

**Metaphors Affected:**
- Manuscript Codex (820px = 56.9% viewport)
- Geological Core (900px = 62.5% viewport)
- Apprentice Curriculum (860px = 59.7% viewport)

**CSS Signatures:**
```css
.codex { max-width: 820px; }            /* 56.9% of 1440px */
.core-sample { max-width: 900px; }      /* 62.5% of 1440px */
.curriculum { max-width: 860px; }       /* 59.7% of 1440px */
```

**Why It's a Trap:**
- Metaphorically correct: codex pages ARE narrow, core samples ARE cylindrical (narrow diameter)
- Perceptually problematic: 43% horizontal empty space at 1440px viewport creates visual imbalance

**The Fine Line:**
- ACCEPTABLE: 960px+ (66.7% viewport utilization)
- RISKY: 900px (62.5% — noticeable but tolerable)
- WASTEFUL: 820px (56.9% — significant empty space)

**Instances:**
1. Boris Codex 820px — WASTEFUL (combined with right-margin design = 43% empty)
2. Boris Core 900px — ACCEPTABLE (narrow cylinder is legible concept)
3. Boris Curriculum 860px — RISKY (no conceptual justification for narrowness)
4. Playbook Stratigraphy 880px — ACCEPTABLE (geological column narrowness is legible)

**Viewport Utilization Table:**
| Container | Viewport % | Trap Severity | Metaphor Justification |
|---|---|---|---|
| 820px Codex | 56.9% | WASTEFUL | Manuscript pages + marginalia |
| 860px Curriculum | 59.7% | RISKY | Weak (syllabus pages aren't narrow) |
| 880px Stratigraphy | 61.1% | ACCEPTABLE | Geological column |
| 900px Core | 62.5% | ACCEPTABLE | Cylindrical sample |
| 920px Vault | 63.9% | GOOD | Vault chambers |
| 960px Workshop | 66.7% | GOOD | Workshop bench |
| 1040px Zoning | 72.2% | EXCELLENT | City map |

**Solution Pattern:** Set minimum container width at 900px unless metaphor conceptually requires narrowness (core sample, geological column). Avoid width traps for metaphors without strong cylindrical/linear justification.

---

### TRAP 3: DENSITY TRAPS

**Definition:** Metaphors that pack too many elements into tight spaces, creating visual overwhelm.

**Metaphors Affected:**
- Geological Core (compression grid: 2 columns, 1px gap)
- Geological Stratigraphy (formation grid: 2 columns, 0px gap)
- Elevation Map (topo grid: originally 4 columns, FIXED to 3)

**CSS Signatures:**
```css
.compression-grid {
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border);
}

.formation-grid {
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--color-border);
}

.topo-grid {
  grid-template-columns: repeat(3, 1fr);  /* FIXED from 4 */
  gap: 0;
}
```

**Why It's a Trap:**
- Metaphorically correct: compressed rock HAS high density, formations ARE tightly packed
- Perceptually problematic: tight grids create visual overwhelm, especially at narrow viewports

**The Fine Line:**
- ACCEPTABLE: 2-column grid with 16px+ gap
- RISKY: 2-column grid with 1px gap
- BROKEN: 3+ column grid with 0px gap at narrow viewports

**Instances:**
1. Core compression grid (2-col, 1px gap) — RISKY but contained (only 4 cells total)
2. Stratigraphy formation grid (2-col, 0px gap) — RISKY (8 cells = visual overwhelm, FIXED with improved contrast)
3. Elevation topo grid (4-col → 3-col) — BROKEN pre-fix, GOOD post-fix
4. Workshop tool grid (2-col, 24px gap) — GOOD (generous spacing)

**Cell Width Analysis at 768px:**

| Grid | Columns | Gap | Available | Cell Width | Verdict |
|---|---|---|---|---|---|
| Formation 2-col, 0px | 2 | 0 | 880px | 440px | ACCEPTABLE |
| Compression 2-col, 1px | 2 | 1 | 900px | 449px | ACCEPTABLE |
| Topo 3-col, 0px | 3 | 0 | 960px | 320px | ACCEPTABLE |
| Topo 4-col, 0px (old) | 4 | 0 | 960px | 240px | TOO CRAMPED |

**Solution Pattern:** Maximum 3 columns in data grids. Minimum 16px gap for comfort. Zero gap only acceptable for 2-column grids where cells have internal padding 20px+.

---

### TRAP 4: MONOTONY TRAPS

**Definition:** Metaphors that produce uniform grids of identical elements, creating visual flatness.

**Metaphors Affected:**
- Apprenticeship Workshop (8 identical tool cards)
- Craftsman Workbench (tool grid, identical borders)
- Curriculum Syllabus (module entries, identical structure)

**CSS Signatures:**
```css
/* All cards identical */
.tool-card {
  border: 1px solid var(--color-border);
  padding: 24px;
}

/* All module entries identical */
.module-entry {
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
}
```

**Why It's a Trap:**
- Metaphorically correct: workshop tools ARE uniform, course modules ARE standardized
- Perceptually problematic: creates "wall of cards" effect, no visual hierarchy

**The Fine Line:**
- ACCEPTABLE: First 3-4 cards heavier (4px left border vs 1px), rest standard
- RISKY: All cards identical
- BROKEN: 8+ identical cards with no hierarchy

**Instances:**
1. Workshop tool wall (8 cards) — MONOTONOUS (PARTIAL FIX: first 4 now heavier with 4px left PRIMARY border)
2. Workbench tool grid — MONOTONOUS (no hierarchy between essential/secondary tools)
3. Syllabus module entries — MONOTONOUS (PARTIAL FIX: semester grouping creates arcs)

**Fix Patterns Applied:**
```css
/* BEFORE: All identical */
.tool-card { border: 1px solid var(--color-border); }

/* AFTER: Hierarchy introduced */
.tool-card { border: 1px solid var(--color-border); }
.tool-card-heavy { border-left: 4px solid var(--color-primary); padding: 28px 24px; }
```

**Solution Pattern:** Introduce weight differentiation in first 25-33% of cards (heavier borders, increased padding, primary accent). Group entries into arcs/phases with divider labels.

---

### TRAP 5: MARGIN TRAPS

**Definition:** Metaphors that conceptualize empty space as a metaphorical feature (margins for annotation, empty right column).

**Metaphors Affected:**
- Manuscript Codex (right margin for marginalia)
- Craftsman Workbench (offset content creating left margin)

**CSS Signatures:**
```css
/* Codex: Narrow text column leaves right margin empty */
.codex { max-width: 820px; }
.ruled-text { max-width: 680px; }  /* 140px right margin remains empty */

/* Workbench: Content offset creates wasted left space (pre-fix) */
.workshop { max-width: 960px; margin: 0 auto; }
.bench-surface { padding: 64px; }  /* Content doesn't fill available width */
```

**Why It's a Trap:**
- Metaphorically correct: manuscript margins ARE where readers wrote notes
- Perceptually wasteful: 17% horizontal empty space (140px / 820px) that serves no digital function

**The Fine Line:**
- ACCEPTABLE: 5-10% breathing margin (design choice)
- RISKY: 15-20% margin (Codex situation)
- BROKEN: Asymmetric offset creating left wasted space (Workbench pre-fix)

**Instances:**
1. Codex ruled-text 680px in 820px container — 17% right margin empty (ACCEPTABLE as metaphor cost)
2. Workbench centered content (pre-fix) — BROKEN (content didn't fill width, FIXED)

**Solution Pattern:** Accept margin traps ONLY if metaphor conceptually requires them (manuscript marginalia). Avoid asymmetric offsets. Center content within containers.

---

### TRAP 6: LABEL TRAPS

**Definition:** Metaphors that over-label transitions, connections, or zones with explicit text instead of structural signaling.

**Metaphors Affected:**
- City Zoning Map ("MAIN STREET -- CONNECTING DISTRICTS")
- Building Floor Plan ("EXECUTIVE CORRIDOR")
- City Zoning Map legend (swatches + labels)

**CSS Signatures:**
```css
/* BEFORE: Explicit text labels */
<div class="street">
  <span class="street-label">MAIN STREET -- CONNECTING DISTRICTS</span>
</div>

/* AFTER: Silent structural separator */
<div class="street"></div>  /* 12px tan bar, no text */

/* BEFORE: Announced corridors */
<div class="corridor">EXECUTIVE CORRIDOR</div>

/* AFTER: Silent visual separator */
<div class="corridor"></div>  /* 8px tan bar, no text */
```

**Why It's a Trap:**
- Metaphorically literal: maps DO have street labels, buildings DO have corridor signs
- Perceptually intrusive: labels announce the metaphor instead of embodying it

**The Fine Line:**
- ACCEPTABLE: Section labels that provide orientation (floor numbers, chamber names)
- RISKY: Transition labels that narrate the structure ("connecting districts")
- BROKEN: Meta-labels that explain the metaphor itself

**Instances:**
1. Zoning "MAIN STREET" labels — BROKEN (most explicit over-labeling in all 15 layouts, FIXED: removed entirely)
2. Floor Plan "EXECUTIVE CORRIDOR" — RISKY (FIXED: removed text, kept 8px visual bar)
3. Zoning map legend — RISKY (swatches explain the metaphor, kept but subdued with opacity: 0.75)
4. Vault classification stamps — ACCEPTABLE (security clearance IS labeled in real vaults)

**Implicit vs Explicit Table:**

| Element | Explicit (BAD) | Implicit (GOOD) |
|---|---|---|
| Elevation change | "ASCENDING TO HIGHLAND" label | Graduated background lightening |
| District boundary | "MAIN STREET" text | 12px tan visual separator bar |
| Security level | Red "CLASSIFIED" badge | Background color shift + border weight |
| Transition | "CORRIDOR CONNECTING ROOMS" | 8px spacing bar, no text |

**Solution Pattern:** Use STRUCTURAL signals (color shift, background change, border weight, spacing) instead of TEXTUAL labels for transitions. Reserve labels for ORIENTATION (section names, identifiers) not NARRATION (explaining the metaphor).

---

### TRAP 7: DEAD ZONE TRAPS

**Definition:** Metaphors that conceptualize transitions as empty space, creating viewport-height gaps between sections.

**Metaphors Affected:**
- Manuscript Codex (chapter dividers with 48px margins)
- Apprentice Curriculum (lesson boundaries)
- Industrial Refinery (breathing zones)
- Construction Site (dark foundation sections)
- ALL Playbook layouts (trailing 2,000-3,700px empty space)

**CSS Signatures:**
```css
/* Breathing zones as explicit elements */
.chapter-divider--breathing { margin: 48px 0; }  /* Creates 96px total gap */
.breathing-zone { padding: 48px 24px; }          /* Empty philosophical pause */

/* Lesson boundaries */
.lesson { padding: 40px 64px; border-bottom: 1px solid; }  /* Stacks to create gaps */

/* SYSTEMIC: Bottom dead zones (all Playbook layouts) */
/* Likely cause: oversized grid area or min-height on wrapper */
/* Manifests as 2,000-3,700px empty trailing space */
```

**Why It's a Trap:**
- Metaphorically correct: codex page turns HAVE empty space, breathing zones ARE pauses
- Perceptually wasteful: viewport-height gaps disrupt reading flow, create "is there more content?" uncertainty

**The Fine Line:**
- ACCEPTABLE: 24px margin between sections (visual breathing)
- RISKY: 48px margin (borderline excessive)
- BROKEN: 96px+ gap (viewport-height at mobile), trailing empty space 2000px+

**Instances by Layout:**

| Layout | Dead Zone Location | Size | Status |
|---|---|---|---|
| Codex | Chapter dividers | 96px gaps | PARTIALLY FIXED (reduced but persist) |
| Codex | Bottom trailing | ~25% page height | PERSISTS |
| Curriculum | Lesson boundaries | Viewport-height gaps | FIXED (reduced padding) |
| Refinery | Breathing zones | 48px + 48px = 96px | FIXED (reduced to 32px) |
| Workshop | Bottom trailing | 3,700px | SYSTEMIC (unfixed) |
| Construction | Bottom trailing | 2,800px | SYSTEMIC (unfixed) |
| Stratigraphy | Bottom trailing | 2,200px | SYSTEMIC (unfixed) |
| Elevation | Bottom trailing | 2,100px | SYSTEMIC (unfixed) |
| Syllabus | Bottom trailing | 2,000px | SYSTEMIC (unfixed) |

**Dead Zone Epidemic Analysis:**

- **5/15 layouts** have section-transition dead zones (Codex, Curriculum, Refinery, Construction dark sections, Workbench offset)
- **5/5 Playbook layouts** have trailing bottom dead zones (2,000-3,700px)
- **Common pattern:** Metaphors that use "breathing" or "turning the page" as transition concepts

**Solution Pattern:**
1. Cap breathing zone margins at 24px max (enforce in builder warnings)
2. Conceptualize transitions as CHANGING STATE (color shift, border) not EMPTY SPACE
3. Investigate Playbook systemic issue (likely CSS grid or min-height bug in common template)

**Transition Model Comparison:**

| Metaphor | Transition as... | CSS Pattern | Dead Zone Risk |
|---|---|---|---|
| Codex | Page turn (empty) | `margin: 48px 0` | HIGH |
| Curriculum | Lesson break (empty) | `padding: 40px 64px` stacked | HIGH |
| Geological | State change (border) | `border-top: 3px solid` | LOW |
| Elevation | Contour line (border) | `border-top: 1px solid` | LOW |
| Vault | Security seal (border) | `border-top: 4px solid` | LOW |

---

## Part 3: Cross-Cutting Patterns

### Pattern A: Stats Bars Are Universally Weak

**Affected:** ALL 5 Gas Town layouts

**Manifestation:**
- Industrial Refinery: Gauge strip (flexbox, gap: 32px)
- Military Command: Situation board (auto-fit grid, minmax 140px)
- City Zoning: Map legend (flexbox, gap: 24px)
- Circuit Board: Pin header (flexbox, gap: 32px)
- Building Floor Plan: Title info grid (right-aligned metadata)

**Why It Fails:**
Compressing 4-6 metadata values into a narrow horizontal band ALWAYS cramps at 768px. Flexbox wraps create uneven rows, auto-fit grids produce awkward column counts.

**CSS Failure Signatures:**
```css
/* Flexbox wrap creates 2x2 grid with uneven spacing */
.gauge-strip { display: flex; gap: 32px; flex-wrap: wrap; }
/* At 768px: 4 gauges → 2 rows of 2, but gap: 32px between items creates visual imbalance */

/* Auto-fit creates 5-column cramped grid */
.situation-board {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
}
/* At 768px with 5 items: 140px min × 5 = 700px, fits barely, looks cramped */
```

**Solution Attempts (Applied):**
1. Refinery gauge strip: Reduced gap to 24px, improved wrapping
2. Command situation board: Increased minmax to 160px (forces 4-column → 3-column at 768px)
3. Circuit board pin header: Same as gauge strip
4. Floor plan title info: Reduced opacity, decreased font sizes

**Root Cause:** Horizontal metadata strips are a PATTERN problem, not a metaphor problem. The stats bar concept itself is fragile.

**Recommended Alternative:** Vertical metadata sidebar (left rail) or metadata integrated into section headers, not compressed into horizontal strips.

---

### Pattern B: Implicit > Explicit Metaphors

**Core Finding:** The best-rated layouts (Elevation Map, Geological Core, Building Floor Plan) communicate their metaphors STRUCTURALLY. The worst-rated pre-fix issue (City Zoning labels) was TEXTUAL.

**Structural Communication Examples:**

| Metaphor | Structural Signal | Avoids |
|---|---|---|
| Elevation Map | Graduated backgrounds (dark → light) | "ASCENDING" labels |
| Geological Core | Padding compression (80px → 16px) | "DEPTH: 2000M" labels |
| Archival Vault | Border weight (1px → 4px) | "SECURITY LEVEL: RESTRICTED" badges |
| Building Floor Plan | Silent 8px tan corridors | "EXECUTIVE CORRIDOR" text |

**Textual Over-Communication Examples (Pre-Fix):**

| Metaphor | Textual Announcement | Should Be |
|---|---|---|
| City Zoning | "MAIN STREET -- CONNECTING DISTRICTS" | Silent 12px tan bar |
| Building Floor Plan | "EXECUTIVE CORRIDOR" | Silent 8px tan bar |
| Military Command | Green status indicators | Amber (warm palette) |
| Archival Vault | Red "CLASSIFIED" stamps | Subtle amber/tan |

**The Principle:**
> "The reader should experience the metaphor structurally, not read about it textually. If you are labeling a transition with the metaphor's vocabulary, you are announcing the metaphor instead of embodying it."

**Builder Warning (Added to Skill R6):**
```
W-IMPLICIT: This metaphor risks over-labeling. Use structural gradients
(background color, border weight, padding compression) instead of text
labels for transitions. Reserve labels for orientation (section names,
identifiers), not narration (explaining the metaphor).
```

---

### Pattern C: KortAI Constraints Are Infrastructure

**Finding:** Zero soul violations across 15 layouts (30 fixes). The design system constraints (no border-radius, no box-shadow, no drop-shadow, flat surfaces, angular geometry) were never cited as perceptual problems by auditors.

**Constraints Applied:**
- `border-radius: 0` universally
- `box-shadow: none` universally
- Borders: `border: Npx solid COLOR` (never outset/inset/ridge)
- Palette: 6 locked colors + 5 accent colors
- Fonts: 3 families (display serif, body sans, mono)

**Why This Matters:**
The constraints created CONSISTENCY across radically different metaphors. A geological core and a military command post share the same visual DNA (angular, flat, restrained) despite having completely different conceptual shapes.

**Invisible Infrastructure:**
Auditors described layouts as "elegant," "professional," "cohesive," "precise" — never "constrained," "limited," or "rigid." The constraints are FELT as quality, not restriction.

**Metaphor as Content, Constraints as Medium:**
The metaphor determines WHAT (padding values, container width, grid structure). The constraints determine HOW (border style, color application, typography pairing). The metaphor is the message; the constraints are the transmission channel.

---

### Pattern D: Responsive Quality Is Unpredictable

**Only 2 of 15 layouts received unqualified SHIP verdicts at both viewports:**
1. Elevation Map (STRONG PASS 1440px + 768px)
2. Building Floor Plan (pre-fix already excellent, post-fix perfect)

**1 layout had catastrophic responsive failure:**
- Craftsman Workbench (text overflowing right edge at 768px, FIXED)

**Most layouts: CONDITIONAL verdicts at 768px**

**Why Responsive Quality Varies:**
Some metaphors have natural responsive stories:
- Geological layers → narrower core sample (WORKS)
- Floor plan → narrower building, rooms stack (WORKS)
- Elevation map → narrower map, contours stack (WORKS)

Others fight responsive constraints:
- Workbench → tools need horizontal space (BREAKS)
- Stats bars → 4-6 items need horizontal room (CRAMPS)
- 4-column grids → force wrap to 2-column, lose structure (CRAMPED)

**The pipeline cannot predict responsive quality** because it evaluates metaphor abstractions, not CSS implementations. This is a builder execution concern.

---

### Pattern E: Pacing = Variety of Visual Breaks

**Best-paced layouts:**
- Elevation Map: 5 background zones, thin contour borders, 3-column grid, elevation profile table
- Geological Core: Graduated backgrounds, mineral veins, fossil callouts, compression grid, bedrock shift
- Building Floor Plan: Title block, floor labels, room grid, corridor bars, security desk accent

**Worst-paced layouts (pre-fix):**
- Manuscript Codex: Uniform cream background, dead zones, monotonous ruled text
- Apprentice Curriculum: Uniform lesson cards, dead zones, weak milestones
- Apprenticeship Workshop: 8 identical tool cards, no dramatic moments

**Variety Sources:**
1. **Background color shifts** (5-6 zones in Elevation, Core, Stratigraphy)
2. **Accent callouts** (mineral veins, trail markers, hazard signs)
3. **Grid density changes** (2-column → full-width → 3-column)
4. **Border weight shifts** (1px → 3px → 4px)
5. **Dramatic moments** (bedrock section, summit zone, vault inner chamber)

**Pacing Killer: Monotonous Repetition**

If a metaphor produces 6+ identical elements in sequence (tool cards, lesson entries, module rows), it WILL feel flat unless differentiation is introduced (first 3 heavier, grouping into arcs, dramatic dividers).

---

## Part 4: Metaphor-to-Trap Correlation Matrix

### Geological Metaphors (Core, Stratigraphy)

**Inherent Strengths:**
- Natural compression gradient (surface → depth)
- Graduated backgrounds create embodied depth
- Bedrock/deep zones provide dramatic moments
- Layering is legible visual concept

**Inherent Traps:**
- COMPRESSION TRAP (16-36px padding at depth)
- WIDTH TRAP (cylindrical samples → narrow containers)
- DENSITY TRAP (formation grids with 0-1px gaps)

**Trap Mitigation:**
- Cap minimum padding at 32px
- Accept 900px width as narrow-cylinder cost
- Improve text contrast in dense grids (APPLIED)

**Best For:** Content with depth/descent structure (Boris knowledge extraction, Playbook skill levels)

---

### Institutional Metaphors (Vault, Command Post)

**Inherent Strengths:**
- Clear spatial hierarchy (lobby → restricted, command → field)
- Strong vocabulary (clearance, classification, rank)
- Immersive identity

**Inherent Traps:**
- LABEL TRAP (classification stamps, rank insignia can be aggressive)
- COMPRESSION TRAP (inner chambers compress)
- EMOTIONAL DISTANCE (formal, authoritative tone)

**Trap Mitigation:**
- Tone down accent colors (red → amber/tan) (APPLIED)
- Use border weight instead of color for hierarchy
- Accept formality as metaphor cost

**Best For:** Hierarchical content with authority structure (Gas Town 8-role system)

---

### Craft/Workshop Metaphors (Workbench, Apprenticeship)

**Inherent Strengths:**
- Warmth within angular constraints
- Tool/principle mapping is intuitive
- Workshop vocabulary is inviting

**Inherent Traps:**
- MONOTONY TRAP (uniform tool grids)
- HORIZONTAL TRAP (tools need lateral space)
- RESPONSIVE FRAGILITY (workbench breaks at narrow viewports)

**Trap Mitigation:**
- Differentiate first 25% of tools (heavier borders) (APPLIED)
- Stack tool grids to single column at 768px
- Ensure content centered in containers (APPLIED)

**Best For:** Mentorship/progression content with warmth requirement (Playbook apprenticeship)

---

### Cartographic Metaphors (Elevation Map, Zoning, Floor Plan)

**Inherent Strengths:**
- Graduated backgrounds = embodied progression
- Professional headers (title blocks, cartouches)
- Spatial hierarchy is legible

**Inherent Traps:**
- LABEL TRAP (street names, corridor labels, legend swatches)
- GRID TRAP (4+ column grids cramp at 768px)
- TEMPORAL WEAKNESS (maps are atemporal, weak on BECOME unless elevation-based)

**Trap Mitigation:**
- Remove transition labels entirely (APPLIED to Zoning, Floor Plan)
- Cap grids at 3 columns (APPLIED to Elevation)
- Use elevation gradients for progression (Elevation Map SUCCESS)

**Best For:** Spatial/progression content (Playbook levels, Gas Town hierarchy IF treated as spatial)

---

### Editorial Metaphors (Codex, Curriculum)

**Inherent Strengths:**
- Cultural resonance (manuscript, syllabus)
- Strong typography mapping (display serif for headings)
- Natural section rhythm (chapters, lessons)

**Inherent Traps:**
- DEAD ZONE TRAP (page turns, lesson breaks as empty space)
- MARGIN TRAP (manuscript margins, syllabus narrowness)
- PACING PROBLEMS (uniform lesson/chapter structure)

**Trap Mitigation:**
- Cap breathing zones at 24px (APPLIED)
- Accept margin cost IF conceptually justified
- Introduce visual variety (dark sections, callout breaks)

**Best For:** Prose-dominant, wisdom-sharing content (Boris extraction IF dead zones managed)

---

## Part 5: Builder Warnings (Integrated into Skill R6)

These warnings are now appended to pipeline output when metaphors match risk patterns.

### W-DEADZONE
**Triggered by:** Codex, Curriculum, Editorial metaphors
**Warning Text:**
```
This metaphor conceptualizes transitions as empty space (page turns,
breathing zones). ENFORCE maximum breathing zone margin of 24px.
Avoid stacked sections with individual 48px+ padding — compress spacing
between sections to maintain flow.
```

### W-OVERLABEL
**Triggered by:** City Zoning, Floor Plan, Cartographic metaphors
**Warning Text:**
```
This metaphor risks over-labeling connectors and transitions. Use
structural gradients (background color shifts, border weight changes)
instead of text labels. Remove labels like "MAIN STREET," "CORRIDOR,"
"CONNECTING ZONES" — these announce the metaphor instead of embodying it.
```

### W-MONOTONY
**Triggered by:** Workshop, Craft, Grid-heavy metaphors
**Warning Text:**
```
This metaphor produces uniform grids of identical elements. Introduce
weight differentiation: first 3-4 elements get heavier treatment (4px
left border vs 1px, increased padding, primary accent). Group elements
into arcs with divider labels.
```

### W-RESPONSIVE
**Triggered by:** Workbench, Horizontal metaphors
**Warning Text:**
```
This metaphor assumes horizontal space (tools on bench, maps). Verify
responsive behavior at 768px: does content overflow right edge? Do
grids collapse gracefully? Consider vertical stacking at narrow viewports.
```

### W-STATS
**Triggered by:** ALL Gas Town metaphors with metadata strips
**Warning Text:**
```
This metaphor includes a horizontal stats/metadata strip. These ALWAYS
cramp at 768px. Consider alternatives: (a) vertical sidebar, (b) metadata
integrated into section headers, (c) minimum 3-row stack at narrow viewports.
```

### W-IMPLICIT
**Triggered by:** ALL metaphors (universal principle)
**Warning Text:**
```
The reader should experience the metaphor structurally, not read about
it textually. If you are labeling transitions with the metaphor's
vocabulary ("ASCENDING," "CONNECTING," "TRANSITIONING"), you are
announcing the metaphor instead of embodying it. Use color, spacing,
and border changes to signal transitions.
```

---

## Part 6: Quantitative Trap Severity Table

| Trap Category | Layouts Affected | Pre-Fix Severity | Post-Fix Severity | Fixes Applied |
|---|---|---|---|---|
| **COMPRESSION** | 3 (Core, Stratigraphy, Vault) | MEDIUM | LOW | Text contrast improved |
| **WIDTH** | 4 (Codex, Core, Curriculum, Strat) | MEDIUM | MEDIUM | Inherent to metaphor |
| **DENSITY** | 3 (Core, Strat, Elevation) | MEDIUM | LOW | Grid 4→3 col, contrast |
| **MONOTONY** | 3 (Workshop, Workbench, Syllabus) | HIGH | MEDIUM | Weight differentiation |
| **MARGIN** | 2 (Codex, Workbench) | MEDIUM | LOW | Workbench centered |
| **LABEL** | 3 (Zoning, Floor Plan, Legend) | CRITICAL | LOW | Labels removed entirely |
| **DEAD ZONE** | 5 (Codex, Curriculum, Refinery, Construction, ALL Playbook) | HIGH | MEDIUM | Section gaps reduced, systemic bottom issue persists |

**Most Impactful Fixes:**
1. **City Zoning label removal** — CRITICAL → LOW (metaphor now implicit)
2. **Workbench responsive fix** — CRITICAL → LOW (768px overflow resolved)
3. **Elevation grid 4→3 columns** — MEDIUM → LOW (readability restored)

**Remaining Systemic Issues:**
1. **Playbook dead zones** — All 5 layouts have 2,000-3,700px trailing empty space (CSS bug, not metaphor issue)
2. **Stats bars** — All 5 Gas Town layouts cramp at 768px (improved but pattern is inherently fragile)

---

## Part 7: The Fine Lines (Summary)

### Compression
- **GOOD:** 32px+ padding minimum
- **RISKY:** 24px padding
- **BROKEN:** 16px padding at narrow viewports

### Container Width
- **EXCELLENT:** 960px+ (66.7%+ viewport utilization)
- **ACCEPTABLE:** 900px (62.5%, IF metaphor justifies narrowness)
- **WASTEFUL:** <880px (61%, weak justification)

### Grid Density
- **GOOD:** 2-3 columns, 16px+ gap
- **RISKY:** 2 columns, 1px gap (acceptable if cells have 20px+ internal padding)
- **BROKEN:** 4+ columns at narrow viewports, 0px gap in dense grids

### Section Spacing
- **GOOD:** 24px max breathing zones
- **RISKY:** 48px breathing zones
- **BROKEN:** 96px+ gaps, viewport-height dead zones

### Label Usage
- **STRUCTURAL (GOOD):** Background color shifts, border weight, padding compression
- **ORIENTATION (ACCEPTABLE):** Section names, floor numbers, chamber IDs
- **NARRATION (RISKY):** Transition connectors ("connecting districts")
- **META-EXPLANATION (BROKEN):** Announcing the metaphor itself ("MAIN STREET")

### Element Variety
- **GOOD:** First 25-33% differentiated (heavier borders, increased padding)
- **RISKY:** All elements identical
- **BROKEN:** 8+ identical elements with no hierarchy

---

## Part 8: Top 3 Metaphors by Trap Avoidance

### #1: Elevation Map (Playbook)
**Traps Avoided:**
- NO label trap (gradients = implicit)
- NO dead zones (1px/3px borders, no breathing zones)
- NO monotony (5 background zones, varied elements)
- Grid trap FIXED (4→3 columns)

**Only Trap Present:** Systemic Playbook bottom dead zone (not metaphor-specific)

**Verdict:** STRONG PASS at both viewports. Best overall.

---

### #2: Building Floor Plan (Gas Town)
**Traps Avoided:**
- Label trap FIXED (corridors now silent)
- NO monotony (room hierarchy via border weight)
- NO dead zones (8px corridor bars, tight spacing)
- Stats trap MITIGATED (spec block quieted)

**Only Trap Present:** Stats bar at 768px (improved but pattern is fragile)

**Verdict:** YES at both viewports. Most elegant.

---

### #3: Geological Core (Boris)
**Traps Managed:**
- Compression ACCEPTABLE (16px bedrock padding works with dark bg)
- Width ACCEPTABLE (900px justified for cylindrical sample)
- Density ACCEPTABLE (2-col 1px grid contained to 4 cells)
- Accent FIXED (salmon → mineral slate)

**Traps Present:** Width constraint (62.5% viewport), compression at depth

**Verdict:** YES at both viewports. Strongest metaphor execution.

---

## Conclusion: Metaphors Encode Spatial Biases

**Core Finding:** A "geological core sample" doesn't just DESCRIBE compression — it CREATES compression through CSS values (padding: 16px at depth). A "manuscript codex" doesn't just SUGGEST margins — it PRODUCES empty horizontal space (820px container in 1440px viewport). These are not implementation bugs — they are the metaphor working as intended.

**The Trap Mechanism:**
1. Metaphor selected for structural resonance
2. Metaphor conceptually encourages specific spatial patterns
3. Builder implements patterns literally
4. Patterns create perceptual discomfort despite metaphorical correctness

**The Solution:**
Awareness of trap categories + builder warnings + aggressive testing at narrow viewports. The pipeline now flags metaphors that historically produce traps (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT).

**The Fine Line:**
Metaphorical correctness ≠ perceptual comfort. The best layouts (Elevation Map, Floor Plan, Geological Core) balance both — they are CONCEPTUALLY legible AND PERCEPTUALLY comfortable. The worst (pre-fix Zoning labels, Workbench overflow, Codex dead zones) sacrificed comfort for literal metaphor adherence.

**Recommendation for Future Builds:**
Treat this taxonomy as a lookup table. When metaphor X is selected, consult its trap profile. Apply mitigations proactively (cap padding at 32px, remove transition labels, differentiate first 3 elements, test 768px early). The traps are PREDICTABLE once mapped.

**43 patterns documented. 7 trap categories defined. 15 layouts analyzed. 0 soul violations. The metaphor is the message; the traps are where the message conflicts with the medium.**
