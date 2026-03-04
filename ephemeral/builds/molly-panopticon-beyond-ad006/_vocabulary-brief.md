# Vocabulary Brief: Design Reference for Molly Panopticon Rebuild

## Section 1: What the Existing Build Gets WRONG

The current `_build-final.html` is a vertically flat page wearing a cartographic costume. Its failures:

1. **One skeleton, N wallpapers.** Five "zones" (Datum Point, Survey Grid, Field Notes, Contour Map, Projection) share identical structure: centered 960px column, heading, paragraphs, occasional list. The only variation is background color. Remove the backgrounds and every zone is the same page.
2. **Vertical monotony.** Zero horizontal splits, zero asymmetric grids, zero positioned elements (0 instances of `position: sticky/fixed/absolute` beyond skip-link). The page is a single column from top to bottom. Content about surveillance domains, dialectical tensions, and spatial control is rendered as prose paragraphs in sequence.
3. **Generic class naming.** `.domain-quadrant`, `.principle-list`, `.dialectic-exchange` -- names describe HTML structure, not content meaning. The CSS classes could belong to any page about any topic.
4. **Zero z-axis depth.** No sticky sidebars, no persistent navigation, no overlapping elements. The page exists on a single flat plane.
5. **Equal grids only.** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` -- the sole grid is symmetric. No proportional commitment, no asymmetric splits that encode content hierarchy.
6. **Zero temporal responsiveness.** No hover transitions, no scroll-driven effects. The page is static. Content about a "personal panopticon" -- inherently about WATCHING and being WATCHED -- has no awareness of the reader's presence.
7. **Metaphor is LABELED, not STRUCTURAL.** Zone names reference cartography ("Datum Point," "Contour Map") but the layout does nothing cartographic. A cartographic page would have overlapping layers, positioned annotations, scale indicators. This page has colored bands.

## Section 2: What Good Explorations Get RIGHT

### From OD-006 (Organization IS Density)

- **Three-column page architecture:** `grid-template-columns: 200px 48px 1fr` -- scroll witness TOC (sticky, z-index 100) + fractal annotation margin (sticky, z-index 90) + flowing content. Three persistent z-planes.
- **Vertical text annotations:** `writing-mode: vertical-lr; transform: rotate(180deg)` -- fractal scale labels in the margin that light up red when active. The page comments on its own structure.
- **CSS-only scroll progress:** `@property --progress` with `animation-timeline: view()` drives TOC progress bars. Zero JavaScript. The page WATCHES the reader.
- **Scroll-triggered stagger:** `.reveal` / `.reveal-delay-1` / `.reveal-delay-2` with `animation-range: entry 10% entry 40%` -- content arrives in choreographed sequence, not all at once.
- **Q&A width variation:** Questions at `max-width: 60%` (narrow), answers at `max-width: 100%` (full width) -- creates a PULSE density oscillation that is structural, not decorative.

### From CD-006 (Pilot Migration)

- **Content-form coupling through drop caps:** `font-size: 3.5em; float: left; color: var(--color-primary)` at section openings signals "a new chapter begins here" -- editorial, not generic.
- **Named semantic grid areas:** `grid-template-areas: "doctrine references"` and `"spoke-a hub spoke-b"` -- grid zones encode WHAT they contain, not WHERE they sit.
- **Solid offset depth (no box-shadow):** `::after` pseudo-element with `position: absolute; top: 4px; left: 4px; z-index: -1; border: 3px solid` -- creates physical depth without violating the no-shadow soul constraint.
- **Hub-spoke information architecture:** Central hub with 3:1 column splits for spokes. The spatial form IS the content hierarchy -- the hub dominates because the hub IS the center of the argument.
- **Bento grid with featured spanning:** `.bento-cell--primary { grid-column: 1 / -1 }` -- some cells span the full width, creating visual weight hierarchy within the grid.

### Spatial Inventions Available for Panopticon Content

- **Watchtower/cell split:** A 1fr 2fr (or golden ratio) split where the narrow column is the observer position (persistent, sticky) and the wide column is the observed field. The panopticon IS this spatial relationship.
- **Concentric containment:** Nested containers at decreasing widths (960px > 720px > 480px) representing rings of surveillance. Content at the center is the most watched.
- **Dialectic bilateral layout:** Critic on the left (60% width, amber border), Cantillon on the right (full width) -- the existing build has this idea in CSS but renders it as a single column with indentation. It should be a genuine side-by-side or alternating-width dialogue.

## Section 3: The 11 Maturity Components

These are the atomic CSS decisions that separate technically correct output from master-level craft:

1. **Proportional Confidence** -- Use non-equal grid splits (`1fr 1.618fr`, `3fr 1fr`) that encode content hierarchy. Equal splits (`1fr 1fr`) say "these are equivalent" -- commit to proportions that mean something.

2. **Z-Axis Mastery** -- Use `position: sticky/fixed/absolute` to create visual depth. Sticky sidebars, persistent progress indicators, overlapping annotations. Pages that exist on multiple z-planes feel alive.

3. **Temporal Responsiveness** -- Hover transitions at 150ms (interactive) or 200ms (decorative). Scroll-driven animations via `animation-timeline: view()`. The page should acknowledge the reader's presence.

4. **Spatial Invention** -- At least one layout that could ONLY exist for THIS content. For Panopticon: the observer/observed split, the ring structure, the sightline grid. Not a recycled pattern.

5. **Semantic Restraint** -- Vary density by content meaning. Philosophical passages get generous spacing (`line-height: 1.9`). Technical catalogs get compressed spacing (`line-height: 1.5`). Sparse WHERE silence serves, dense WHERE urgency demands.

6. **Typographic Authority** -- Three distinct voices: display serif for wisdom/provocation, body sans for analysis, mono for system/metadata. Each voice at distinct sizes with distinct letter-spacing. Typography encodes WHO IS SPEAKING.

7. **Color Semantic Depth** -- Accent colors map to meaning: blue = information, green = growth, amber = caution, purple = essence, red = primary/danger. Zone backgrounds encode density state. Color IS metadata.

8. **Self-Reference** -- Components that reference the page's own structure. A surveillance page should have a component that WATCHES the reader (scroll progress, position tracking). Content about observation should BE observed.

9. **Named Semantic Zones** -- `grid-template-areas` with content-derived names. `.panopticon-tower`, `.surveillance-field`, `.blind-spot` -- not `.left-column`, `.main-content`. Naming forces understanding.

10. **Micro-Typographic Precision** -- Tracking gradients (0.1em for formal meta, 0.05em for casual meta). Drop cap fine-tuning (4.2em, not 4em; padding-right: 0.12em, not 0.1em). The aggregate of many invisible refinements.

11. **Compositional Coherence** -- Every grid shares the same gap token, every transition uses the same timing range, every border uses the same weight system. Variety within unity. The page has ONE voice, many registers.

## Section 4: Design System Constraints

### Soul (ABSOLUTE -- zero exceptions)
- `border-radius: 0` everywhere -- sharp edges are identity
- `box-shadow: none` everywhere -- flat surfaces, no fake depth
- No gradients, no semi-transparent backgrounds (`opacity: 1` on containers)
- No pure black `#000` or pure white `#FFF`
- Solid offset (`::after` with `position: absolute`) is the permitted depth technique

### Palette (LOCKED)
- Primary: `#E83025` -- used for selection, focus, primary accents, borders
- Background: `#FEF9F5` -- warm cream
- Text: `#1A1A1A` -- near-black
- Text secondary: `#666666`
- Border: `#E0D5C5` (structural), `#F0EBE3` (subtle)
- Zone backgrounds: sparse `#FEF9F5`, dense `#FFFFFF`, breathing `#FAF5ED`, bedrock `#1A1A1A`
- Accents: blue `#4A90D9`, green `#4A9D6B`, coral `#C97065`, amber `#D97706`, purple `#7C3AED`

### Typography (LOCKED)
- Display: `'Instrument Serif', Georgia, serif` -- headings and wisdom quotes ONLY
- Body: `'Inter', system-ui, sans-serif` -- all body text
- Mono: `'JetBrains Mono', 'SF Mono', monospace` -- code and metadata labels
- h3 is ALWAYS italic with display font
- Scale: display 3rem, h1 2.5rem, h2 2rem, h3 1.5rem, h4 1.25rem, body 1rem, code 0.875rem, meta 0.75rem

### Container + Spacing
- Container: `940-960px` max-width (MUST be consistent within the page)
- Spacing base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Semantic aliases: `--space-within: 8px`, `--space-between: 32px`, `--space-chapter: 64px`
- Grid gap: 24px

### Borders (3-weight system)
- Structural: 4px (zone boundaries, major divisions)
- Accent: 3px (callout left borders, code block borders, header/footer borders)
- Micro: 1px (table rows, subtle separators)

## Section 5: Available Components

From `components.css` (779 lines) -- the builder's toolkit:

- **Callouts** (5 semantic types): info (blue), tip (green), gotcha/warning (red), challenge (amber), essence (purple -- serif italic body). All share 2-zone DNA: sparse label + dense body + 4px left border.
- **Code blocks**: Dark background (`#1A1A1A`), 3px border, mono font at 14px. Code snippet variant with header (filename + copy button).
- **Bento grid**: `grid-template-columns: 1fr 1fr` with `--primary` variant spanning full width. 3px borders, 24px gap.
- **Decision matrix**: 4-column grid with red left border, header row with uppercase mono labels.
- **Q&A pair**: Question at 60% width with 8x8px red square marker + serif italic text. Answer at full width with dense background.
- **File tree**: Mono font, indented with 1px border-left lines, colored folder/file/comment tokens.
- **Stats bar**: Flex row of segments with mono labels and large stat values.
- **Breathing zones**: Between-section decompression containers with `#FAF5ED` background and 3px top/bottom borders.
- **Section zones**: Density progression containers (opening/rising/building/peak/resolution) with decreasing padding.
- **Core abstraction**: Split component -- essence quote on top (sparse bg), code proof on bottom (dense bg), 3px red border.
- **Essence pullquote**: 4px purple left border, serif italic at 24px, with mono cite attribution.
- **Reasoning component**: 3px border frame with amber "REASONING" badge, for deliberation containers.
- **Page header/footer**: Dark header with 3px red bottom border, mono ID label, serif title. Footer with 3px red top border.
