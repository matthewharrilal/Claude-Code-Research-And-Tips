# Wave 4 Retrospective: Density Depth (DD) + Axis Depth (AD)

## Research Files Read
- DD-006-fractal.md (fractal self-similarity at 4 scales, spacing compression gradient 80px->32px->16px->4px, same dense/sparse alternation at page/section/component/character)
- DD-003-islands.md (isolated density clusters in sparse ocean, extreme whitespace for isolation, archipelago grouping, horizontal offset rhythm)
- DD-006-fractal.html (visual study — 4-column scale visualization with level labels, alternating dense/sparse patterns, nested fractal example)
- grammar/mechanisms.md (mechanism catalog reference)
- grammar/grammar.md (compositional rules, density patterns)

## What I Applied (5 sub-passes)

### Pass 1: Terrain Map (Page Architecture Overview)
- **5-column terrain map** immediately after page header in Zone 1. Each column represents a zone with its name and density character (Sparse, Dense, Working, Deep, Synthesis). Zone 4 uses dark bedrock colors. This is DD-006's fractal principle at the page scale — making the page's own density rhythm visible as a navigational element.
- The terrain map acts as both orientation and density preview: the reader can see the page's shape before reading it.

### Pass 2: Margin Note (Width Variation for Zone 1)
- **Right-aligned margin note** in Zone 1 after the Self-Legibility section. Contains James C. Scott's "Seeing Like a State" historical parallel. Purple right-border (the only purple accent in the page) creates visual variety against the left-border callouts.
- This addresses the Wave 3 finding that "Zone 1 feels long — it has the most prose with the least layout variety." The margin note breaks the prose column and introduces AD's width variation principle — the reading corridor shifts right for this element, creating asymmetry.

### Pass 3: Dark Zone Hover States
- **Hover transitions on dialectic panels** (border-color to #555 on hover) and **anti-pattern cards** (border-color to #555 on hover). Extends the territorial hover principle from Wave 3 to the dark zone elements.
- Consistent 150ms ease transition matching Wave 3's domain card and principle card hovers.

### Pass 4: Featured Model Cell (Bento Pattern in Zone 5)
- **Core Insight model cell** now spans 2 columns with larger text (16px vs 14px) and thicker left-border (4px vs 3px). This applies the bento grid pattern from Wave 3 to the model summary grid.
- The featured cell creates visual hierarchy in what was previously a flat 3x2 grid. The most important mental model ("Core Insight") visually dominates.

### Pass 5: Responsive + Density Breather
- **Density breather** between stats row and capstone in Zone 5 — a thin horizontal rule (80px wide, 1px tall) with 48px vertical padding. Creates explicit decompression between the dense stats grid and the culminating quote.
- **Responsive styles** for terrain map (single column at 768px), margin note (full width), and featured model cell (single column span).

## What the DD Research Taught Me

### Fractal self-similarity is the most generative density principle.
DD-006 shows the same dense/sparse alternation happening at 4 scales simultaneously: page-level (zones alternate between sparse and dense), section-level (heading -> content -> breathing room), component-level (label -> body -> spacing), and character-level (letter-spacing variation). The terrain map makes the page-level rhythm VISIBLE as a component.

### Density islands need ocean.
DD-003's core insight: dense clusters (code blocks, grids, tables) work best when surrounded by generous whitespace. The density breather is a deliberate implementation — after the stats row (a dense component), insert explicit low-density recovery before the capstone. Without this, the stats bleed into the final quote.

### Width variation creates reading interest.
The margin note shifts the reader's eye from left-column flow to right-column annotation. This is AD's attention topology principle: where the eye goes matters more than what it sees. The purple right-border is the only element in the page that draws attention rightward.

### Bento grid hierarchy makes content legible.
The featured model cell in Zone 5 applies the same principle as the featured domain cards in Zone 2 — not all cells are equal because not all content is equal. The Core Insight cell is the synthesis that contains all other mental models; it should visually communicate this.

## What Still Needs Work
1. **Zone 1 is still the longest zone** with the least structural variety. The margin note helped but it could use another layout innovation — perhaps a different reading path or component type.
2. **No color temperature variation** across zones. The cream/white/tan/dark/cream palette is structural but could have more subtle warmth shifts within zones.
3. **The terrain map has no interactivity** — clicking a zone should scroll to it (would require JavaScript).
4. **The footer is still minimal** — three data fields in a grid. Could benefit from a more structured closing treatment.
5. **Character-level density** (letter-spacing variation within components) is present in a few places (culmination title, zone annotations) but not systematically applied.

## What I Want to Explore in Wave 5
- CD-006 case study for combination mastery — how multiple mechanisms compose into visual character
- Visual character of the page as a whole — does it have a recognizable personality?
- Component combination recipes from R5-COMBINATION-THEORY
- Refinement of existing components rather than adding new ones
- Typography confidence — are the font choices and sizes earning their place?
