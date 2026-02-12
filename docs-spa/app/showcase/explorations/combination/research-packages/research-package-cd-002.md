<!--
===============================================================================
INLINE THREADING HEADER
File: explorations/combination/research-packages/research-package-cd-002.md
Tier: C | Stage: 5 (Combination CD) | Generated: 2026-02-11
Purpose: Pre-compiled research package for Builder-B (CD-002: Task Containing Decision)

BUILT ON: R5-COMBINATION-THEORY.md, HANDOFF-AD-TO-CD.md, AD-PA-CONVENTIONS.md,
          ACCUMULATED-IDENTITY-v2.md, tokens/*.md, anti-patterns/registry.md
CONSUMED BY: Builder-B (CD-002 exploration agent)
===============================================================================
-->

# Research Package: CD-002 -- Task Containing Decision
## Builder-B Assignment

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

### The 4 Combination Rules (from R-5 + AD validation)
1. **Velocity Rule (T2):** Avoid placing two SLOW components consecutively without a FAST component between them.
2. **Temperature Rule (T3):** Don't oscillate rapidly between warm and cold. Use neutral components as buffers.
3. **Weight Rule (G3):** Balance heavy with light. Golden ratio: 1 heavy to 1-2 light before next heavy.
4. **Proximity Rule (G1):** Tight (8-16px), standard (24-32px), section break (48-64px).

### 11x11 Compatibility Matrix Reference
Located in R5-COMBINATION-THEORY.md Appendix. Key: Yes = Excellent | OK = Acceptable with buffer | No = Avoid consecutive.

### The 5 Soul Pieces
| # | Soul Piece | CSS Lock |
|---|-----------|----------|
| 1 | Sharp Edges Command Authority | border-radius: 0 |
| 2 | The Archivist Speaks in Serif | Instrument Serif italic for Essence/Core ONLY |
| 3 | Callouts Share Family DNA | 2-zone + border-left: 4px solid + color differentiation |
| 4 | Shadows Lie About Depth | box-shadow: none |
| 5 | Squares Signal System | border-radius: 0 on all indicators |

### Compound Rules (AD-F-024)
Compound axis is SEQUENTIAL (through scrolling time), NOT simultaneous. Each section commits to ONE axis pattern.

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
| DD (Density) | PULSE | DD-F-001: `####....####....` -- alternating dense/sparse |
| OD (Organization) | TASK-BASED | OD-003: Procedural task orientation |
| AD (Axis) | Z-PATTERN + SPIRAL | AD-001 (Z-Pattern) + AD-004 (Spiral) |

### Why This Combination
PULSE density alternates between dense task clusters and sparse decision pauses. TASK-BASED organization structures around actions the reader must take. Z-PATTERN provides the scanning rhythm for each task cluster. SPIRAL provides confidence-based depth for the decision sections. This models a "Decision Guide" page where the reader needs to make a choice and then act on it.

### AD Explorations to Reference
| AD | File | Key Feature to Study |
|----|------|---------------------|
| AD-001 | explorations/axis/AD-001-z-pattern.html | Z-sweep IS PULSE beat, Q&A rhythm, golden ratio hero |
| AD-004 | explorations/axis/AD-004-spiral.html | Angular spiral = geological strata, border-weight gradient, confidence-based spacing |

### Transition Type Between Patterns
Z-Pattern to Spiral = **Breathing** (needs 48px+ gap). This is the most isolated transition type. Use a clear section divider (3px structural border + 48px margin) between the Z-pattern task section and the Spiral decision section.

===============================================================================
## 3. COMPONENTS TO USE
===============================================================================

| Component | Role in This Page | Weight | Velocity |
|-----------|-------------------|--------|----------|
| Task Component | Primary -- action checklist | Medium | Fast |
| Decision Matrix | Options comparison | Medium | Medium |
| Info Callout | Context, orientation | Light | Fast |
| Gotcha Callout | Hazard warnings | Light | Fast |
| Tip Callout | Practical advice | Light | Fast |

### Challenge: Decision Matrix Inside Task Flow
The core challenge is embedding a Decision Matrix within a task-based flow without violating N1 (stack don't nest). The decision must feel like a natural part of the task sequence, not a foreign element.

**Strategy:**
1. Use the Setup-Payoff Arc (S1): Task introduces context -> Decision Matrix presents options -> Task resumes with chosen path
2. PULSE rhythm: Task cluster (dense) -> Decision pause (sparse) -> Task cluster (dense)
3. Z-Pattern sections handle the task clusters (scanning rhythm for checklist items)
4. Spiral section handles the decision analysis (confidence-based: established options first, speculative last)
5. Recipe 3 (Decision Guide): Info -> Decision Matrix -> Reasoning -> Task

### Compatibility Notes (from 11x11 matrix)
| Pair | Rating | Note |
|------|--------|------|
| Task + Decision Matrix | Yes | Excellent -- action + options |
| Task + Gotcha | Yes | Excellent -- protect then act |
| Decision Matrix + Info | Yes | Excellent -- context before options |
| Gotcha + Tip | OK | Needs neutral buffer (same family but different temperature) |
| Task + Task (consecutive) | OK | Acceptable -- natural task list continuation |

===============================================================================
## 4. R-5 FINDINGS TO TEST
===============================================================================

| Finding | ID | Summary | How to Test in CD-002 |
|---------|----|---------|-----------------------|
| Contrast Creates Harmony | H2 | Complementary roles create perceived harmony | Task (action) + Decision Matrix (options) should feel like natural partners |
| Editorial Spread | H4 | Pairs that feel like same magazine spread | Decision Matrix + Task = Options + Implementation Steps |
| Velocity Mismatch Rule | T2 | Insert FAST between SLOW | Decision Matrix (medium) may not need buffer before Task (fast), but Reasoning (slow) does |
| Components Stack, Not Nest | N1 | Do NOT put Decision Matrix inside Task Component | Stack vertically: Task -> break -> Decision Matrix -> break -> Task (resumed) |
| Composite Pre-Composed | N2 | Don't create ad-hoc composites | Task is not a container for Decision Matrix -- they are siblings |
| Kinship Model | R1 | Decision Matrix and Reasoning are analytical siblings | They share structural DNA; place adjacent with minimal buffer |
| Decision Paralysis (A3) | A3 | One Decision Matrix -> One Reasoning with recommendation | Do NOT follow with multiple Reasoning components. One matrix, one analysis. |
| Setup-Payoff Arc | S1 | Context -> Map -> Principle -> Demo -> Action -> Hazards | Task sections follow this arc: Info -> Task -> Code -> Gotcha |
| First Component Rule | S3 | First component sets tone | Start with Task Component to set "practical tutorial" tone |
| Recipe 3: Decision Guide | Recipe 3 | Info -> Decision Matrix -> Reasoning -> Task | Follow this recipe for the central decision section |

===============================================================================
## 5. DENSITY PATTERN: PULSE
===============================================================================

```
DENSE ####    ####    ####
SPARSE    ....    ....    ....
```

### PULSE Application to CD-002
1. **DENSE (Task Cluster 1):** Z-pattern section. Task Component with 3-5 setup steps. Info Callout for context. Code snippet if needed.
2. **SPARSE (Decision Pause):** Spiral section. Info Callout orienting the decision. Decision Matrix comparing options. Breathing space (48px+).
3. **DENSE (Task Cluster 2):** Z-pattern section. Task Component with implementation steps for the chosen option. Code Snippet for implementation. Gotcha Callout for hazards.
4. **SPARSE (Resolution):** Tip Callout summarizing. Footer/capstone.

### PULSE Beat Width
Each dense cluster should occupy roughly 1-1.5 viewport heights. Each sparse pause should occupy 0.5-1 viewport height. The PULSE rhythm should be perceptible as alternation when scrolling.

### Z-PULSE Equivalence (AD-F-002)
In the Z-pattern sections, the Z-sweep cycle IS one PULSE beat. Each horizontal scan across the Z corresponds to one dense phase. The diagonal return to the left margin corresponds to the sparse phase.

### Breathing Zones
- Between header and first task cluster: 32px
- Within task cluster (between components): 16-24px (tight)
- Between task cluster and decision section: 48px+ (Breathing transition)
- Within decision section: 24-32px (moderate)
- Between decision section and second task cluster: 48px+ (Breathing return)
- Before footer: 32px
- Footer: 3px Cat 1 structural border-top

===============================================================================
## 6. STRUCTURAL CONSTRAINTS
===============================================================================

### Container Width
- max-width: 1100px (C-01, LOCKED)
- Prose: max-width: 70ch (C-20, LOCKED)
- Footer REQUIRED (C-02, LOCKED)
- Footer: border-top: 3px solid (C-04, LOCKED)

### Responsive
- @media (max-width: 768px): Collapse grids to single-column (C-25)
- @media (max-width: 960px): Collapse 4+ column grids (C-08)
- Reduce padding at 768px (C-05)

### Progressive Enhancement
- Content visible by default (C-09)
- opacity: 1 !important defensive CSS

### Token-Only CSS (C-07)

### Border System (3-Category)
| Category | Width | Use |
|----------|-------|-----|
| Cat 1: Structural | 3px+ | Section borders, header/footer |
| Cat 2: Separator | 1px | Table rules, subtle dividers |
| Cat 3: Semantic | 4px | Callout left-borders |
| BANNED | 2px | NEVER |

### Callout Limit
Max 2 per viewport (DD-F-014). Task Component does NOT count as a callout.

### Dark Header (C-16)
### Page Personality: "Scholarly, Deliberate, Warm" (C-22)

===============================================================================
## 7. ANTI-PATTERNS TO AVOID
===============================================================================

| Anti-Pattern | Risk Level for CD-002 | Mitigation |
|--------------|----------------------|------------|
| Decision Paralysis (A3) | HIGH -- Decision Matrix is central | One matrix, one Reasoning with clear recommendation. No cascading decisions. |
| Callout Cacophony (A1) | MEDIUM -- multiple advisory types needed | Max 2 consecutive callouts. Interleave with Task items or prose. |
| Missing Context Start (A6) | MEDIUM | Start task clusters with Info Callout, not raw Task Component. |
| Anxiety Ending (A7) | MEDIUM -- Gotcha near end | Follow Gotcha with Tip ("To prevent this, always..."). |
| Temperature Whiplash (A5) | LOW | Task (cold/utilitarian) and Tip (warm/friendly) are OK adjacent -- Gotcha needs buffer. |
| 2px Border Epidemic | ZERO TOLERANCE | Only 1px, 3px, 4px. |
| Semi-Transparent Backgrounds | ZERO TOLERANCE | opacity === 1.0. |

===============================================================================
## 8. SCORING CRITERIA
===============================================================================

CD-002 will be scored on the standard 40-point rubric:
- Soul compliance (10 pts): Zero violations required
- Research application (10 pts): R-5 findings tested, especially N1 stacking and A3 decision paralysis
- Density pattern fidelity (10 pts): PULSE alternation visible and rhythmic
- Combination coherence (10 pts): Z-Pattern + Spiral work together; Breathing transition grammar honored

### Target Score: 35-37/40
The critical test is whether a Decision Matrix can live within a task-based flow without nesting. Success = the decision feels like a natural PAUSE in the task rhythm (PULSE sparse phase), not an interruption.

===============================================================================
