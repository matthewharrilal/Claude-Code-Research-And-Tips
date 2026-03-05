# Wave 5 Retrospective: Combination Depth (CD) — Refinement & Compound Mastery

## Research Files Read
- CD-006-pilot-migration.md (sequential axis deployment, transition grammar, fractal density at 5 scales, compound combination)
- grammar/mechanisms.md (mechanism catalog reference, cross-referenced from Wave 3-4)
- grammar/grammar.md (compositional rules, transition types, anti-patterns)

## What I Applied (6 sub-passes)

### Pass 1: Inline Style Elimination (Compound Combination Cleanliness)
- **Moved ALL inline `style=""` attributes to proper CSS classes.** This is the CD-006 principle of compound combination — when DD, OD, and AD mechanisms operate simultaneously on the same element, inline styles create maintenance nightmares and override cascades. Moving to classes enables clean compound stacking.
- **20+ elements affected:** Dark zone headings, inline code, decompression prose, bridge prose, file tree variants, Zone 3 callouts, sidebar notes, centered headers, timing badges, warm quotes, section labels, cinematic banners, dark callouts, folder colors.
- **Created 14 new CSS classes/selectors:** `.zone--contour h2/.zone--contour h3`, `.zone--contour code`, `.zone--contour .decompression-prose`, `.zone--contour .bridge-prose`, `.zone--contour .file-tree` (+ children), `.callout--field`, `.sidebar-note--field`, `.zone-header--centered`, `.numbered-step__timing`, `.terrain-quote--warm`, `.section-label--amber`, `.cinematic-banner--transition`, `.callout--dark` (margin/border consolidated).
- **Verified 0 inline styles remaining** via grep.

### Pass 2: Terrain Map Interactivity (Fractal Navigation)
- **Click-to-scroll JavaScript** on terrain map cells. Each cell scrolls smoothly to its corresponding zone section. This makes the DD-006 fractal navigation map actually functional — it's no longer just a visual element but an interactive navigation aid.
- **Active state CSS** (`.terrain-map__zone--active`) with red outline on click, confirming which zone was selected.
- **Cursor pointer + hover opacity** (150ms ease) for interactive affordance.

### Pass 3: Character-Level Density (Fractal at Character Scale)
- **Systematic letter-spacing applied** across 6 element types, creating density variation at the character level — the finest scale of CD-006's fractal principle:
  - `.stat__number`: -0.02em (tight for display numbers — numerals read better compressed)
  - `.editorial-spread__number`: -0.03em (tighter for large figures — maximum density for impact)
  - `.benchmark__text`: -0.015em (slightly tight for benchmark quotes — medium density)
  - `.culmination-title`: -0.03em (tight for synthesis heading — arrival signal)
  - `.antipattern__symptom, .antipattern__fix`: -0.005em (subtle tightening for dense diagnostic text)
  - `.model-cell__label`: 0.12em (wider for sparse mono labels — breathing room in labels)

### Pass 4: Transition Grammar (Zone Bridge Consistency)
- **Zone 1→2 bridge** added: "The Problem Is Clear" — a BRIDGE-type transition (prose paragraph bridging from thesis to architecture). Previously Zone 1→2 had only a structural border, making it the weakest transition. Now all 4 zone transitions have explicit bridge elements:
  - Zone 1→2: Bridge ("The Problem Is Clear")
  - Zone 2→3: Bridge ("From the Drafting Table to the Field")
  - Zone 3→4: Cinematic Banner ("Descent" — with two prose lines)
  - Zone 4→5: Summary Strip (icon + summary text)
- **Structural consistency fix:** Zone 2→3 bridge inner wrapper changed from `zone__inner` to `zone-bridge__inner` to match the class naming pattern.
- **`aria-hidden="true"`** added to Zone 1→2 bridge for consistency with Zone 2→3.

### Pass 5: CSS Architecture Repair + Dead Code Cleanup
- **CRITICAL BUG FIX: Responsive block reordered.** The `@media (max-width: 768px)` block was at line ~1407, BEFORE component definitions added in Waves 3-4 (margin-note, terrain-map, landscape-quote, section-divider, editorial-spread). Due to CSS source order, base styles defined AFTER the responsive block were overriding responsive overrides at 768px. Moved responsive block to end of CSS (just before `@media (prefers-reduced-motion: reduce)`).
- **Added responsive rule for bridge:** `.zone-bridge__inner { padding: 0 20px; }` at 768px.
- **Removed unused CSS components:** Phase card system (~47 lines), progress bar (~19 lines), callout--warning (~5 lines), callout--compact (~14 lines), color-secondary (~1 line). Total: ~86 lines removed.
- **Merged duplicate `.dialectic` definition** — base styles and hover transition were in separate blocks; consolidated into one.
- **Removed orphaned `.phase-grid` responsive override.**

### Pass 6: This Retrospective

## What the CD Research Taught Me

### Compound combination requires clean architecture.
CD-006's 39/40 score came from deploying DD, OD, and AD mechanisms simultaneously on the same elements. But this only works when each mechanism layer is properly separated. Inline styles break compound combination because they override the cascade. Moving everything to classes enables true stacking — a `.zone--contour .file-tree` can have DD (density variant), OD (organizational variant), and AD (axis variant) all composed cleanly through CSS specificity.

### Transition grammar creates reading rhythm.
Before Wave 5, the Zone 1→2 transition was just a structural border — the weakest of all 4 transitions. Adding a BRIDGE-type transition ("The Problem Is Clear") creates consistent reading rhythm across the page. Now the reader encounters thesis → BRIDGE → architecture → BRIDGE → implementation → CINEMATIC → philosophy → SUMMARY → synthesis. The transition types vary (BRIDGE, CINEMATIC, SUMMARY) but the presence of explicit transitions is consistent.

### Fractal density works at 5 simultaneous scales.
The character-level letter-spacing in Pass 3 completes the 5-scale fractal density system:
1. **Page scale:** Zone backgrounds alternate sparse/dense/breathing/bedrock/synthesis
2. **Section scale:** Heading → content → breathing room within each zone
3. **Component scale:** Label → body → spacing within each component
4. **Character scale:** Letter-spacing varies by element type (-0.03em to +0.12em)
5. **Navigation scale:** Terrain map shows the page's own density pattern as a visible element

### Dead code is compound combination debt.
The unused phase-card, progress-bar, and callout--compact components were ~86 lines of CSS that contributed nothing to the page but occupied space in the cascade. In a compound combination system, unused rules increase cognitive load when debugging specificity conflicts. Removing them is not just cleanup — it's reducing combination noise.

### CSS source order is a first-class architectural concern.
The responsive block ordering bug was invisible at desktop width but broke all Wave 3-4 responsive overrides (margin-note, landscape-quote, terrain-map, editorial-spread, etc.). This is the kind of bug that only surfaces in testing at the exact breakpoint, and it existed because components were appended to CSS in wave order rather than architectural order. Lesson: responsive block must ALWAYS be the last non-reduced-motion section.

## Final Build Stats
- **Total lines:** 2465 (was 2375 pre-Wave 5, net reduction from cleanup)
- **CSS lines:** ~1738 (style block spans lines 12-1750)
- **Inline styles:** 0 (was ~20+ before Wave 5)
- **Component types:** ~35 distinct component classes
- **Zone transitions:** 4/4 have explicit bridge elements (was 3/4)
- **Responsive breakpoints:** 1 (768px), properly ordered after all component definitions
- **JavaScript:** 1 interactive feature (terrain map click-to-scroll with active state)
- **Unused CSS removed:** ~86 lines (phase-card, progress-bar, callout--compact, callout--warning, color-secondary)

## What Still Could Be Explored
1. **Zone 1 layout variety** — still the longest zone with the most prose. Could benefit from a different component type (timeline? diagram? before/after comparison?).
2. **Color temperature within zones** — all zones use their background color uniformly. Subtle warmth shifts within zones could add depth.
3. **Scroll-based terrain map highlighting** — the terrain map could highlight the current zone based on scroll position (Intersection Observer).
4. **More transition variety** — all bridges are text-based. A graphical divider or visual element could add variety.
5. **Dark theme** — no `prefers-color-scheme: dark` support. The dark zone (Zone 4) serves as the page's dark section, but system-level dark mode is not implemented.
