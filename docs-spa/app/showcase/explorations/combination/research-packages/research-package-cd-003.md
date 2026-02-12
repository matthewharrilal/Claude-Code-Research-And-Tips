<!--
===============================================================================
INLINE THREADING HEADER
File: explorations/combination/research-packages/research-package-cd-003.md
Tier: C | Stage: 5 (Combination CD) | Generated: 2026-02-11
Purpose: Pre-compiled research package for Builder-C (CD-003: File Tree with Callouts)

BUILT ON: R5-COMBINATION-THEORY.md, HANDOFF-AD-TO-CD.md, AD-PA-CONVENTIONS.md,
          ACCUMULATED-IDENTITY-v2.md, tokens/*.md, anti-patterns/registry.md
CONSUMED BY: Builder-C (CD-003 exploration agent)
===============================================================================
-->

# Research Package: CD-003 -- File Tree with Callouts
## Builder-C Assignment

===============================================================================
## 0. SOUL CHECKLIST (MANDATORY -- VERIFY BEFORE AND AFTER BUILD)
===============================================================================

```
[ ] border-radius: 0 everywhere
[ ] box-shadow: none
[ ] No filter: drop-shadow()
[ ] font-family: 'Instrument Serif'; font-style: italic for Essence/Core ONLY
[ ] 2-zone callouts + border-left: 4px solid + color differentiation
[ ] No physical-movement animation (ANTI-PHYSICAL identity)
[ ] opacity: 1 on all backgrounds (no rgba with alpha < 1.0)
[ ] 3-category borders ONLY (1px, 3px, 4px -- ZERO 2px)
[ ] #E83025 only accent color
[ ] No hover depth effects (no translateY, no scale-up)
```

===============================================================================
## 1. COMMON REFERENCES (ALL CD BUILDERS)
===============================================================================

### Reference Paths
| Document | Path (relative to docs-spa/app/showcase/) |
|----------|-------------------------------------------|
| AD-PA-CONVENTIONS.md | DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md |
| CD-CONVENTION-SPEC.md | DESIGN-SYSTEM/provenance/stage-5-combination-cd/CD-CONVENTION-SPEC.md |
| combination-rules.md | explorations/combination/combination-rules.md |
| Lock Sheet | explorations/combination/lock-sheet.md |
| ACCUMULATED-IDENTITY-v2.md | knowledge-architecture/ACCUMULATED-IDENTITY-v2.md |

### The 4 Combination Rules
1. **Velocity Rule (T2):** Insert FAST between consecutive SLOW components.
2. **Temperature Rule (T3):** Buffer warm/cold with neutral components.
3. **Weight Rule (G3):** 1 heavy to 1-2 light before next heavy.
4. **Proximity Rule (G1):** Tight (8-16px), standard (24-32px), section (48-64px).

### 11x11 Compatibility Matrix Reference
R5-COMBINATION-THEORY.md Appendix. Yes = Excellent | OK = Buffer needed | No = Avoid.

### The 5 Soul Pieces
| # | Soul Piece | CSS Lock |
|---|-----------|----------|
| 1 | Sharp Edges Command Authority | border-radius: 0 |
| 2 | The Archivist Speaks in Serif | Instrument Serif italic for Essence/Core ONLY |
| 3 | Callouts Share Family DNA | 2-zone + border-left: 4px solid + color differentiation |
| 4 | Shadows Lie About Depth | box-shadow: none |
| 5 | Squares Signal System | border-radius: 0 on all indicators |

### Compound Rules (AD-F-024)
Sequential through scrolling time, NOT simultaneous within viewport.

### Transition Grammar (AD-F-025)
| From \ To | Z | F | Bento | Spiral | Choreo |
|-----------|---|---|-------|--------|--------|
| **Z** | -- | Smooth | Bridge | Breathing | Bridge |
| **F** | Smooth | -- | Bridge | Breathing | Bridge |
| **Bento** | Bridge | Bridge | -- | Breathing | Smooth |
| **Spiral** | Breathing | Breathing | Breathing | -- | Breathing |
| **Choreo** | Bridge | Bridge | Smooth | Breathing | -- |

===============================================================================
## 2. YOUR COMBINATION
===============================================================================

### Axis-Density-Org Triple
| Dimension | Pattern | Source |
|-----------|---------|--------|
| DD (Density) | ISLANDS | DD-F-003: `..####..####..` -- discrete dense clusters |
| OD (Organization) | SPATIAL | OD-003: Position-based, spatial arrangement |
| AD (Axis) | BENTO + CHOREOGRAPHY | AD-003 (Bento Grid) + AD-005 (Choreography) |

### Why This Combination
ISLANDS density creates discrete content clusters separated by whitespace ocean. SPATIAL organization maps content by position (where it IS = what it IS). BENTO provides the grid container for islands. CHOREOGRAPHY provides the attention-flow sequence between islands. This models an "Architecture Overview" page where a file tree is the structural map and callouts annotate specific nodes.

### AD Explorations to Reference
| AD | File | Key Feature to Study |
|----|------|---------------------|
| AD-003 | explorations/axis/AD-003-bento-grid.html | Grid cells as islands, cell size = density hierarchy, internal layout variation |
| AD-005 | explorations/axis/AD-005-choreography.html | Direction change = density change, reader attention movement, WAVE oscillation |

### Transition Type Between Patterns
Bento Grid to Choreography = **Smooth** (same mechanism). These patterns share the spatial equivalence mechanism. The bento grid cells can flow directly into choreographic spoke sections with minimal transition -- a simple section heading or thin divider is sufficient.

===============================================================================
## 3. COMPONENTS TO USE
===============================================================================

| Component | Role in This Page | Weight | Velocity |
|-----------|-------------------|--------|----------|
| File Tree | Primary -- structural map | Medium | Medium |
| Info Callout | Context for file tree sections | Light | Fast |
| Tip Callout | Practical advice per directory | Light | Fast |
| Gotcha Callout | Hazard warnings for specific files | Light | Fast |
| Challenge Callout | Exploration prompts | Light | Fast |
| Core Abstraction | Teaching moment -- organizing principle | Heavy | Slow |

### Challenge: Bento + Choreography = Most Visually Complex
This combination has the highest visual complexity. The bento grid provides spatial containers; choreography directs attention flow between them. The risk is visual cacophony if both patterns compete for attention.

**Strategy:**
1. Bento grid holds the ISLANDS -- each cell is a self-contained content island (file tree section + annotating callout)
2. Choreography sequences the reading ORDER -- which island to read first, second, third
3. The File Tree anchors the left side of the page (H3: left-anchored momentum)
4. Callouts annotate specific tree nodes, placed to the RIGHT of the tree (spatial proximity G1)
5. Core Abstraction appears once as the organizing principle (Recipe 6: Architecture Overview)
6. Keep the bento to 2-3 columns maximum to avoid the 960px collapse cliff (C-08)

### Compatibility Notes (from 11x11 matrix)
| Pair | Rating | Note |
|------|--------|------|
| File Tree + Core Abstraction | Yes | Excellent -- structure map + principle explanation (H4) |
| File Tree + Info | Yes | Excellent -- tree + context |
| File Tree + Tip | OK | Acceptable -- practical advice for directories |
| File Tree + Gotcha | OK | Acceptable -- hazard warnings for specific paths |
| File Tree + File Tree | No | Avoid -- two trees is confusing |
| Core Abstraction + Tip | Yes | Excellent -- principle + practical application |
| Challenge + Code | Yes | Excellent -- explore by doing |

===============================================================================
## 4. R-5 FINDINGS TO TEST
===============================================================================

| Finding | ID | Summary | How to Test in CD-003 |
|---------|----|---------|-----------------------|
| Family Cohesion | H1 | Same-family components combine seamlessly | Multiple callout types (Info, Tip, Gotcha, Challenge) should feel like one advisory system |
| Shared Visual Anchors | H3 | Left-anchored components create momentum | File Tree (left border) and callouts (left border) share left-anchor DNA |
| Editorial Spread | H4 | File Tree + Core Abstraction = magazine spread | Structure map + organizing principle should feel like one editorial unit |
| 2-Callout Limit | T4 | Max 2 consecutive callouts | With 4 callout types in play, strictly enforce 2-max per viewport |
| Semantic Proximity | G1 | Related components tight, unrelated components spaced | Tree node and its annotating callout: 8-16px. Different tree sections: 48-64px. |
| Advisory Cluster | G4 | Group related advisories together | If Info + Tip + Gotcha all relate to one directory, cluster them as one unit |
| Components Stack | N1 | Flat editorial, no nesting | Callouts do NOT nest inside File Tree. They sit BESIDE or BELOW the tree section they annotate. |
| When Nesting Feels Necessary, Re-sequence | N3 | "I want a Tip inside this File Tree" -> Place Tip after tree with reference | Reference specific directory: "In the /components directory shown above..." |
| Callout Cacophony | A1 | 3+ callouts = sidebar blindness | With 4 callout types, this is the #1 risk. Interleave with File Tree sections or Core Abstraction. |
| Missing Context | A6 | Never start with File Tree cold | Open with Info Callout: "This section covers the project structure..." |
| Recipe 6: Architecture Overview | Recipe 6 | File Tree -> Core Abstraction -> Decision Matrix -> Tip | Follow this recipe structure for the main architecture section |
| Container Signal | G2 | Framed = bounded thought, anchored = annotation | Core Abstraction (framed) explains the principle. Callouts (anchored) annotate specifics. |

===============================================================================
## 5. DENSITY PATTERN: ISLANDS
===============================================================================

```
OCEAN    ....        ....        ....
ISLAND       ####        ####
```

### ISLANDS Application to CD-003
1. **Island 1 (Root Structure):** File Tree showing top-level directories. Info Callout with orientation. This is the "map" island.
2. **Ocean (Breathing):** 48-64px whitespace gap. The ocean separates discrete content clusters.
3. **Island 2 (Core Directory):** File Tree showing the primary directory in detail. Core Abstraction explaining the organizing principle. Tip Callout for practical use.
4. **Ocean (Breathing):** 48-64px.
5. **Island 3 (Secondary Directory):** File Tree section. Gotcha Callout for hazards. Challenge Callout for exploration.
6. **Ocean (Breathing):** 48-64px.
7. **Island 4 (Resolution):** Summary Tip. Footer/capstone.

### Bento Grid as Island Container
Each bento cell IS an island. Cell sizing creates the density hierarchy:
- Featured cell (2x2 or spanning): The root file tree -- highest visual weight
- Standard cells (1x1): Individual directory sections -- medium weight
- Small cells: Quick callout annotations -- lightest weight

### Choreography as Reading Sequence
The choreography directs the reader's eye across islands in the intended order:
1. Featured cell (root tree) establishes the map
2. Spoke 1: Primary directory (left-to-right scan)
3. Spoke 2: Secondary directory (right-to-left return)
4. Hub: Core Abstraction (center, organizing principle)
5. Spoke 3: Tertiary directory (down-left)

Direction change between spokes IS density change (AD-F-017). Each new spoke represents a new ISLAND.

### Breathing Zones
- Ocean between islands: 48-64px (--space-12 to --space-16)
- Within island: 16-24px (tight coupling)
- Footer: 3px Cat 1 structural border-top

===============================================================================
## 6. STRUCTURAL CONSTRAINTS
===============================================================================

### Container Width
- max-width: 1100px (C-01, LOCKED)
- Prose: max-width: 70ch (C-20, LOCKED)
- Footer REQUIRED (C-02), border-top: 3px solid (C-04)

### Responsive
- @media (max-width: 768px): Collapse grids (C-25)
- @media (max-width: 960px): Collapse 4+ column bento (C-08) -- CRITICAL for this page
- Code wrap in narrow containers: pre-wrap + word-wrap: break-word (C-10)

### Progressive Enhancement (C-09)
### Token-Only CSS (C-07)

### Border System
| Category | Width | Use |
|----------|-------|-----|
| Cat 1: Structural | 3px+ | Section borders, bento grid outer frame |
| Cat 2: Separator | 1px | Within-bento cell dividers |
| Cat 3: Semantic | 4px | Callout left-borders, File Tree left-border |
| BANNED | 2px | NEVER |

### Callout Limit: Max 2 per viewport
### Dark Header (C-16)
### Page Personality: "Scholarly, Deliberate, Warm" (C-22)

===============================================================================
## 7. ANTI-PATTERNS TO AVOID
===============================================================================

| Anti-Pattern | Risk Level for CD-003 | Mitigation |
|--------------|----------------------|------------|
| Callout Cacophony (A1) | HIGHEST -- 4 callout types | Strict 2-per-viewport. Distribute across islands. Advisory clusters max 2. |
| Decorative Grid Breaking | HIGH -- Bento grid is structural | Break bento with CONTENT variation, not decorative borders or gradients. |
| Same Density Throughout | MEDIUM -- Islands must have ocean | Enforce 48px+ gaps between islands. Do not fill ocean with content. |
| Temperature Whiplash (A5) | MEDIUM -- Challenge (warm) near Gotcha (cold) | Never place Challenge after Gotcha. Buffer with Info or File Tree. |
| Missing Context (A6) | MEDIUM | Each island needs its own context callout. Don't drop reader into File Tree cold. |
| 2px Borders | ZERO TOLERANCE | Bento cell borders: 1px. Grid outer: 3px. Callouts: 4px. |
| Semi-Transparent Backgrounds | ZERO TOLERANCE | opacity === 1.0. |

===============================================================================
## 8. SCORING CRITERIA
===============================================================================

CD-003 will be scored on the standard 40-point rubric:
- Soul compliance (10 pts): Zero violations required
- Research application (10 pts): ISLANDS pattern + callout family DNA + G4 advisory clusters
- Density pattern fidelity (10 pts): Islands clearly separated by ocean whitespace
- Combination coherence (10 pts): Bento + Choreography smooth transition, reading order discoverable

### Target Score: 34-36/40
This is the most visually complex combination. The challenge is maintaining editorial calm despite having both a grid system and a choreographic reading sequence. Success = the bento cells feel like calm islands, not a busy dashboard.

===============================================================================
