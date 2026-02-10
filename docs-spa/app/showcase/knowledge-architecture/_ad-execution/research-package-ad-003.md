# Research Package: AD-003 Bento Grid
## Paired with OD-003 Task-Based | Density: ISLANDS + BOOKENDS

**Generated:** 2026-02-09
**Agent:** Research Packager
**Purpose:** Complete research dossier for AD-003 builder — Bento Grid axis exploration
**Finding ID Range:** AD-F-009 through AD-F-012

---

## 1. CHAIN TRAVERSAL

```
OD-003 Task-Based (~35/40, v3)
  ├── Density: ISLANDS (DD-F-003) + BOOKENDS
  ├── DD-F-006 FRACTAL: mandatory at 5 scales
  ├── OD-003 v3: Collapsible islands (dual mode: static + interactive)
  ├── OD-003 v3: Compound density (ISLANDS arrangement + CRESCENDO sequence)
  ├── OD-F-010: Task clusters ARE ISLANDS
  └── OD-F-005: Organization IS Density (MANDATORY)
        ↓
AD-003 Bento Grid Axis
  ├── Bento grid: modular grid with varied cell sizes signals importance
  ├── Pairs with ISLANDS: each bento cell IS a task island
  ├── BOOKENDS: front/back structural brackets around island cluster
  └── DD-F-012: density implies axis — ISLANDS imply grid/offset positioning
```

**Transitive Chain:** Task-Based (OD-F-005) → ISLANDS+BOOKENDS (DD-F-003) → Bento Grid with varied cell sizes (DD-F-012, OD-F-FL-001)

**Why Bento Grid for Task-Based:** Bento grid creates discrete, independently-sized cells — each cell IS a task island. Cell size encodes task importance/complexity. The grid gaps between cells ARE the sparse ocean of the ISLANDS pattern. Grid `span` syntax creates featured tasks (2x2) vs standard tasks (1x1), directly implementing ISLANDS hierarchy through spatial size rather than decoration.

---

## 2. R-4 FINDINGS (SOUL PASS + CONDITIONAL PASS)

### SOUL PASS Findings (20)

| # | Finding ID | Description | How AD-003 Should Apply |
|---|-----------|-------------|-------------------------|
| 1 | R4-019 | Bento grid: modular grid with varied cell sizes signals importance | PRIMARY axis geometry. Cell size = task importance. 2x2 = critical task, 1x1 = standard. |
| 2 | R4-020 | Bento: large feature cells = big deal, small cells = secondary | Featured beginner task at 2x2, advanced tasks at 1x1. Size IS hierarchy. |
| 3 | R4-021 | Bento: asymmetric but balanced compositions | Task grid balanced but not symmetric — featured task off-center creates visual tension. |
| 4 | R4-022 | Bento: clean lines, structured elegance, uniformity keeps it digestible | "Clean lines" = sharp edges (Soul Piece 1). Directly aligned with soul. |
| 5 | R4-023 | Bento CSS: display:grid, grid-template-columns, gap, span syntax | Pure CSS grid implementation. No border-radius, no box-shadow. Soul-compatible. |
| 6 | R4-024 | Bento: mind the whitespace (don't feel crammed) | Grid gaps = ISLANDS ocean spacing. Generous gaps between task cells. Rule 6 alignment. |
| 7 | R4-025 | Bento: prioritize readability over aesthetics | IS-7 alignment. Task clarity > visual flourish. Content-first task cells. |
| 8 | R4-026 | Bento: use varied sizes to create visual hierarchy | IS-1 (hierarchy through SIZE). No decoration needed for hierarchy — cell size is enough. |
| 9 | R4-027 | Masonry grid: one axis strict, other axis fills gaps organically | Hybrid bento-masonry for task cells with varying content heights. |
| 10 | R4-028 | Masonry: items with varying heights create space-efficient layouts | Task steps have varying content — masonry accommodates without forced uniformity. IS-8 alignment. |
| 11 | R4-029 | CSS masonry via grid-template-rows: masonry (CSS Grid Level 3) | Technical implementation. Soul-compatible CSS. |
| 12 | R4-030 | Masonry: eliminates awkward gaps between uneven content | Task cells with different step counts fill space efficiently. |
| 13 | R4-031 | Masonry useful for code snippet showcases with varying content lengths | Task cells containing code examples benefit from masonry height accommodation. |
| 14 | R4-064 | Hub-and-spoke: central hub enables exploration of spokes | Task overview hub (bento grid view) → individual task spokes. Hub = grid, Spokes = expanded tasks. |
| 15 | R4-065 | Hub-and-spoke: return to hub required for section changes | Return-to-grid navigation from expanded task view. Breadcrumb trail. |
| 16 | R4-066 | Hub-and-spoke: centralized control, consistent UX | Bento grid IS the hub. All task navigation starts from the grid. IS-7 editorial consistency. |
| 17 | R4-067 | Hub-and-spoke: easily scalable (add spokes as needed) | New task cells can be added to bento grid without restructuring. Scalable architecture. |
| 18 | R4-068 | Hub-and-spoke: good for task-based documentation | Direct documentation application. Hub = task overview grid, Spokes = individual task guides. |
| 19 | R4-069 | Progressive disclosure: reduce cognitive load by revealing gradually | Collapsible islands (OD-003 v3 dual mode). Grid view = collapsed overview. Expand = full task. |
| 20 | R4-084 | Features section can use bento grid with span syntax | CSS Grid implementation with span for featured tasks. Sharp edges, no shadows. |

### Additional SOUL PASS (Universal — apply to AD-003)

| # | Finding ID | Description | How AD-003 Should Apply |
|---|-----------|-------------|-------------------------|
| 21 | R4-036 | Five types of visual rhythm | Bento grid uses REGULAR rhythm (consistent gap spacing) with ALTERNATING cell sizes. |
| 22 | R4-042 | Breaking established rhythm creates focal points | Featured 2x2 task cell breaks the 1x1 grid rhythm, creating a focal point. |
| 23 | R4-046 | Repeated spacing creates rhythm | Consistent grid gap (16px or 24px) creates the ISLANDS ocean rhythm. |
| 24 | R4-047 | Alternating colors or sizes create rhythm | Alternating cell sizes (2x2, 1x1, 2x1) creates visual rhythm within the bento grid. |
| 25 | R4-070 | Progressive disclosure: accordions, tabs, dropdowns, scroll-based, modals | Collapsible `<details>` wrapping for task islands. Flat containers, soul-compatible. |
| 26 | R4-071 | Progressive disclosure: start simple, let users drill down | Grid overview = simple. Expand task = drill down. Two-level disclosure. |
| 27 | R4-088 | Alternating rhythm for step-by-step instructions | Within expanded task cells, steps alternate code → explanation → code. |
| 28 | R4-089 | Break rhythm for important callouts or warnings | Callout family (4px left border) breaks step rhythm within task cells. |
| 29 | R4-097 | Feature showcase: bento + rhythm breaking for key features | Featured task cell at 2x2 breaks grid rhythm. Flat grid + typographic emphasis. |

### CONDITIONAL PASS Findings (14)

| # | Finding ID | Description | Adaptation Required | How AD-003 Should Apply |
|---|-----------|-------------|---------------------|-------------------------|
| 30 | R4-099 | Bento animated grids (react to scroll) | Animation must not imply z-movement. Reduced-motion prophylactic. | Grid reorganization via CSS only, no transforms. prefers-reduced-motion fallback. |
| 31 | R4-100 | Bento AI-generated layouts | Output must be soul-compliant CSS. | If used, ensure border-radius:0, box-shadow:none in generated output. |
| 32 | R4-101 | Bento personalized grids (user-arrangeable) | Drag handles must be flat. No 3D transforms. | Drag handles as flat border indicators. No shadow affordances. |
| 33 | R4-102 | Masonry: auto-flow ordering | Ensure no gap-filling uses shadow or rounded elements. | Pure CSS masonry. Sharp-edged cells only. |
| 34 | R4-103 | Masonry: align-tracks / justify-tracks alignment | Pure CSS alignment. Sharp edges maintained. | Aligned masonry items maintain border-radius: 0. |
| 35 | R4-109 | Masonry for image galleries (Pinterest-style) | No rounded corners or shadow frames. Sharp-edge containers. | If images used: flat frames, no rounded containers. |
| 36 | R4-110 | Masonry for card-based content with varying heights | Cards: no box-shadow, border-radius:0. Use border or bg differentiation. | Task cards flat. Differentiation via border-left color (task category) and background (zone tokens). |
| 37 | R4-116 | Scroll-based progressive disclosure | No scroll-jacking. Natural scroll + intersection observer. | Collapsible islands expand on click, not scroll-triggered. |
| 38 | R4-117 | Modals/popovers for detail-on-demand | Sharp corners, no box-shadow, no backdrop blur. Solid border + bg. | Task detail modals: flat, sharp-edged, solid background. |
| 39 | R4-136 | Hub-and-spoke: frequent returns disrupt flow | Mitigate via breadcrumb (flat, typographic) or persistent sidebar. | Breadcrumb trail above task content. Always-visible grid return link. |
| 40 | R4-137 | Hub-and-spoke: navigation complexity increases with spokes | Manage via progressive disclosure (collapsible) or visual grouping (bento). | Bento grid IS the visual grouping. Categories via grid sections. |
| 41 | R4-138 | Hub-and-spoke: not ideal for comparing across sections | Mitigate via side-by-side comparison in hub grid. | Multi-select comparison mode within bento grid view. |
| 42 | R4-143 | Landing/overview: bento grid for feature capabilities | Bento cells with sharp edges, no shadows. Varied sizes = hierarchy. | Task overview landing uses bento grid. Cell size = task importance. |
| 43 | R4-148 | Hub-and-spoke: iPhone home screen as reference | Flat grid, not iOS-styled rounded app icons. | Square task cells (Soul Piece 5), not rounded tiles. |

**Total R-4 Findings for AD-003: 43** (exceeds minimum of 15)

---

## 3. R-2 FINDINGS (EMBEDDED)

### R2-4.1: Bento Grid Layout (PRIMARY)

**AD-003: BENTO GRID IS THE AXIS.** This finding is the PRIMARY research source for AD-003's axis geometry. 4-column grid with varied tile sizes: 2x2 featured, 2x1 wide, 1x2 tall, 1x1 standard. Each tile IS a task island. The grid structure encodes task hierarchy through spatial size, not decoration. Soul condition: all tiles border-radius: 0.

**R-4 Synergy:** R2-4.1 + R4-019/R4-023 = primary AD-003 axis structure.

---

### R2-4.5: Swiss Design Grid System

**AD-003 Application:** Swiss grid is the structural backbone for bento — modular grid with consistent gutters creates orderly island arrangements. The Swiss tradition of "classic sophistication with modern flexibility" aligns with IS-7 (Unhurried Editor). Consistent column/gutter ratios across the bento grid create the visual discipline that separates KortAI bento from generic Apple-style bento (R4-161 CHALLENGE).

**R-4 Synergy:** R2-4.5 + R4-022 (clean lines) = foundational AD-003 grid discipline.

---

### R2-2.2: Card-Based Composition with Hierarchy Signals

**AD-003 Application:** Bento grid IS card composition — this finding provides the hierarchy mechanism. `grid-column: span 2` for featured tasks, `span 1` for standard tasks. Size IS the hierarchy signal. Soul condition: border-radius: 0, box-shadow: none on all cards.

---

### R2-2.3: Dense but Breathable Interfaces

**AD-003 Application:** Bento grid islands dense internally (8px base unit spacing within cells) but breathable between islands (generous grid gaps, 24px+). The grid gap IS the sparse ocean of the ISLANDS pattern. Dense task content within cells, generous whitespace between cells.

---

### R2-3.1: Maturity Badges and Component Status

**AD-003 Application:** Bento grid tiles with status badges indicating task complexity (Beginner / Intermediate / Advanced). Soul-safe: sharp-edged badges with locked palette colors. Badges at top-right corner of each task cell using text labels with border, not rounded pills.

---

### R2-3.4: Atomic Design Organization

**AD-003 Application:** Bento grid tiles organized by complexity: Atoms (single-step tasks), Molecules (multi-step tasks), Organisms (full workflows). Creates CRESCENDO within ISLANDS along the bento axis — simpler tasks first, complex tasks later in the grid sequence.

---

### R2-1.1: Breaking the Grid (Intentional Mess)

**AD-003 Application:** Bento tiles that break grid alignment at transition points between task islands. A featured 2x2 tile that spans a grid boundary creates intentional disruption signaling "this task is special." The break is structural, not decorative.

---

### R2-1.3: Multi-Column Text with Visual Interruptions

**AD-003 Application:** Bento grid islands with internal multi-column layouts for reference-heavy task content. Within a 2x2 featured task cell, multi-column layout for side-by-side code/explanation.

---

### R2-1.4: Running Headers and Section Markers (UNIVERSAL)

**AD-003 Application:** Running headers become bento grid section/island counters. "Task 3 of 6 | Intermediate" persists as the reader scrolls through an expanded task cell.

---

### R2-4.3: CSS Grid with Fractional Units (fr)

**AD-003 Application:** Bento grid tiles proportioned via fr units for natural hierarchy. `grid-template-columns: 2fr 1fr 1fr 1fr` creates a featured left column with three supporting columns.

**Total R-2 Findings for AD-003: 10** (exceeds minimum of 5)

---

## 4. UNAPPLIED OD-F / DD-F FINDINGS CARRIED FORWARD

### From OD Stage

| Finding | What It Says | How AD-003 Should Apply |
|---------|-------------|-------------------------|
| OD-F-005 | Organization IS Density | Task clusters (organization) ARE ISLANDS (density). Bento grid cells ARE dense islands in sparse grid-gap ocean. |
| OD-F-007 | Mode-transition breathing (48px+) | Between bento grid sections (beginner / intermediate / advanced), 48px+ breathing zones. |
| OD-F-AP-001 | 2px border epidemic — use 3-category system | All bento cell borders Cat 1 (3px+ structural). Grid internal separators Cat 2 (1px). Zero 2px. |

### From DD Stage

| Finding | What It Says | How AD-003 Should Apply |
|---------|-------------|-------------------------|
| DD-F-003 | ISLANDS: dense clusters in sparse space | Bento grid cells = dense clusters. Grid gaps = sparse space. |
| DD-F-006 | FRACTAL: self-similarity at 5 scales | Bento at page scale (full grid), section scale (category groups), component scale (within-cell layout), character scale (code sparse/dense). |
| DD-F-014 | Max 2 callouts per viewport | Within expanded task cells, max 2 callouts visible. |
| DD-F-015 | No traffic-light color adjacency | Task cells with green/red accents never adjacent in grid layout. |
| DD-F-016 | Consistent border widths — 3-category system | Cell borders 3px+ (structural), internal separators 1px (data). No 2px. |

---

## 5. EXT-AXIS-B FINDINGS (Bespoke External Research)

### EXT-AXIS-B-001: Bento Grid as ISLANDS Spatial Encoding

**Description:** The bento grid's varied cell sizes directly encode the ISLANDS density pattern spatially. Large cells (2x2) = large islands (more content, higher density). Small cells (1x1) = small islands (less content, lower density). Grid gaps = ocean (zero density). The bento grid is not merely a layout tool — it IS the ISLANDS pattern rendered as CSS Grid.

**Soul Test:** PASS — Pure CSS Grid implementation. border-radius: 0 on all cells. box-shadow: none. Hierarchy through SIZE (IS-1).

**Signature Elements:**
1. `display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;` — 4-column bento with generous ocean gaps
2. `.task-featured { grid-column: span 2; grid-row: span 2; }` — large island via span
3. Grid gap (24px) is the sparse ocean between dense task islands

---

### EXT-AXIS-B-002: Progressive Complexity via Grid Position

**Description:** EXT-TASK-014 established progressive complexity across tasks. In bento grid, this maps to grid position: simpler tasks (Beginner) occupy top-left cells (primary optical area per Gutenberg diagram), complex tasks (Advanced) occupy bottom-right cells (terminal area). Reading gravity naturally takes the user from simple to complex, creating CRESCENDO within the ISLANDS arrangement.

**Soul Test:** PASS — Positional hierarchy (IS-1). No decoration needed. Grid position IS the complexity signal.

**Signature Elements:**
1. Beginner tasks in grid rows 1-2, columns 1-2 (primary optical area)
2. Intermediate tasks in grid rows 2-3, columns 2-4 (middle band)
3. Advanced tasks in grid rows 3-4, columns 3-4 (terminal area)

---

### EXT-AXIS-B-003: Collapsible Bento — ISLANDS Dual Mode in Grid Form

**Description:** OD-003 v3 established ISLANDS dual mode (static + interactive via `<details>`). In bento grid, this creates two views: collapsed view shows task headers in grid cells (like a visual table of contents), expanded view shows full task content. The collapsed bento IS the hub; expanded tasks ARE the spokes. This combines hub-and-spoke navigation (R4-064) with ISLANDS dual mode.

**Soul Test:** PASS — `<details>` / `<summary>` is semantic HTML. No soul implications. The transition between collapsed and expanded is binary (no animation needed, no gradients).

**Signature Elements:**
1. `<details>` wrapping each grid cell content; `<summary>` = task title in grid cell
2. Collapsed state: all cells show title + complexity badge only (visual TOC)
3. Expanded state: single cell expands to full content view, other cells dim (opacity remains 1.0 — use border color change, not opacity)

---

### EXT-AXIS-B-004: Bento Grid Internal Layout Variation (Anti-Monotony)

**Description:** EXT-TASK-013 identified structural monotony as OD-003's primary deficit — 6 identical task islands created visual boredom. The bento grid solution: each cell uses a DIFFERENT internal layout template while maintaining external grid consistency. Template A: steps-list (vertical). Template B: split-code (50/50). Template C: annotated-diagram. Template D: comparison-table. 3-4 templates rotating across cells creates FRACTAL variation at component scale.

**Soul Test:** PASS — Layout variation uses flat CSS Grid internally. No decorative variation (no different colors, shadows, or borders per cell). Variation is STRUCTURAL, not decorative. Soul-aligned.

**Signature Elements:**
1. Template A: `display: flex; flex-direction: column;` — vertical step list
2. Template B: `display: grid; grid-template-columns: 1fr 1fr;` — code/explanation split
3. Template C: single-column with annotated callouts and numbered steps

---

### EXT-AXIS-B-005: Grid Gap as Density Signal

**Description:** In the ISLANDS pattern, the ocean between islands IS the sparse zone. In bento grid, the grid gap IS this ocean. Varying grid gaps between sections creates a meta-ISLANDS pattern: dense section groups (16px gap between related tasks) separated by sparse section gaps (48px+ between complexity categories). This implements EXT-TASK-015's 4-level spacing hierarchy at the grid level.

**Soul Test:** PASS — CSS gap property. No soul implications. Spacing is Rule 6 (whitespace as design element).

**Signature Elements:**
1. Within-category gap: `gap: 16px;` (tight task grouping = dense island cluster)
2. Between-category gap: `margin-bottom: 48px;` on category wrapper (sparse ocean between island groups)
3. Page-level gap: `margin-top: 80px;` on bento grid container (macro ISLANDS spacing)

---

## 6. SIGNATURE ELEMENTS SUMMARY

| Finding | Signature Element 1 | Signature Element 2 | Signature Element 3 |
|---------|---------------------|---------------------|---------------------|
| EXT-AXIS-B-001 | 4-column grid, 24px gap | `span 2` featured cells | Grid gap = sparse ocean |
| EXT-AXIS-B-002 | Beginners top-left (primary optical) | Advanced bottom-right (terminal) | Position = complexity |
| EXT-AXIS-B-003 | `<details>` per cell | Collapsed = visual TOC | Expanded = full task |
| EXT-AXIS-B-004 | Template A: vertical steps | Template B: code split | Template C: annotated |
| EXT-AXIS-B-005 | 16px within-category gap | 48px between-category gap | 80px page-level gap |

---

## 7. SOUL FAIL FINDINGS (Reference Only — NOT for Application)

| Finding ID | Description | Why It Fails | Gate Violated |
|-----------|-------------|-------------|---------------|
| R4-181 | 3D Bento with CSS perspective and depth layering | 3D transforms, perspective, depth effects | G2, G5, G6, G7 |
| R4-183 | Elements with box-shadow for "floating" effect | box-shadow: none non-negotiable | G2 |
| R4-184 | Rounded overlapping elements | border-radius > 0 | G1, G8 |
| R4-185 | Grid cards with hover shadow/lift effect | Animated z-movement + false depth | G2, G5 |
| R4-187 | Masonry items with rounded corner frames | border-radius > 0 on containers | G1 |
| R4-192 | Cards with semi-transparent rgba overlays | opacity < 1.0 on backgrounds | G4 |

**AD-003 Specific Risk:** The biggest soul risk for bento grid is making it look like Apple's bento (R4-161 CHALLENGE). Apple bento uses rounded corners and shadows. KortAI bento uses sharp edges and flat borders. The differentiation IS the soul. Additionally, watch for semi-transparent backgrounds on task cells (R4-192, OD-AP-003) — every cell must use fully opaque backgrounds from the locked palette.

---

## 8. RESEARCH DISCOVERIES / OPEN QUESTIONS FOR IDENTITY DELTA

### Discoveries to Investigate

1. **Bento-ISLANDS equivalence:** Is bento grid the ONLY valid axis for ISLANDS, or could other grid layouts (masonry, asymmetric) work? The bento grid's varied cell sizes map cleanly to ISLANDS, but masonry's organic height variation also maps to ISLANDS.

2. **Collapsible bento interaction model:** When one cell expands, should other cells remain visible (side-by-side), collapse to headers only, or hide entirely? Each approach has different density implications.

3. **Grid gap as density control:** EXT-AXIS-B-005 proposes variable grid gaps. Does this violate DD-F-007 (consistency > variety) at the gap level, even though it creates consistency at the category level?

4. **CRESCENDO within ISLANDS:** OD-003 achieved compound density (ISLANDS arrangement + CRESCENDO sequence). Does the bento grid naturally support this, or does it fight the CRESCENDO by presenting all tasks at once?

### R-2/R-4 Synergy Pairings for AD-003

| Synergy | R-2 Source | R-4 Source | Axis Integration |
|---------|-----------|-----------|-----------------|
| Axis Structure | R2-4.1 (bento grid) | R4-019 (varied cell sizes) | Primary AD-003 axis definition |
| Axis Hierarchy | R2-2.2 (card hierarchy) | R4-026 (size hierarchy) | Cell size = task importance |
| Axis Density | R2-2.3 (dense-but-breathable) | R4-024 (mind whitespace) | Dense cells, breathable gaps |
| Axis Discipline | R2-4.5 (Swiss grid) | R4-022 (clean lines) | Grid discipline differentiates from generic bento |

---

*Research package compiled by Research Packager agent | 2026-02-09*
*Citations: 43 R-4 + 10 R-2 + 3 OD-F + 5 DD-F + 5 EXT-AXIS-B = 66 total findings*
