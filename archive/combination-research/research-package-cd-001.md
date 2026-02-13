<!--
===============================================================================
INLINE THREADING HEADER
File: explorations/combination/research-packages/research-package-cd-001.md
Tier: C | Stage: 5 (Combination CD) | Generated: 2026-02-11
Purpose: Pre-compiled research package for Builder-A (CD-001: Reasoning Inside Code)

BUILT ON: R5-COMBINATION-THEORY.md (39 findings), HANDOFF-AD-TO-CD.md,
          AD-PA-CONVENTIONS.md, AD-CONVENTION-SPEC.md, ACCUMULATED-IDENTITY-v2.md,
          tokens/*.md, anti-patterns/registry.md
CONSUMED BY: Builder-A (CD-001 exploration agent)
===============================================================================
-->

# Research Package: CD-001 -- Reasoning Inside Code
## Builder-A Assignment

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
1. **Velocity Rule (T2):** Avoid placing two SLOW components consecutively without a FAST component between them. Reading velocities: FAST (callouts, tasks), MEDIUM (matrix, file tree), SLOW (code, reasoning, core abstraction).
2. **Temperature Rule (T3):** Don't oscillate rapidly between warm and cold semantic temperatures. Use neutral components (Code Snippet, prose) as temperature buffers.
3. **Weight Rule (G3):** Balance heavy components (Code, Reasoning, Core Abstraction) with light ones (callouts). Golden ratio: 1 heavy to 1-2 light before next heavy.
4. **Proximity Rule (G1):** Related components use tight spacing (8-16px); different topics use standard spacing (24-32px); section breaks use 48-64px.

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
Compound axis is SEQUENTIAL (through scrolling time), NOT simultaneous (within viewport). Each section commits to ONE axis pattern. Multiple axis patterns in one viewport = visual cacophony.

### Transition Grammar (AD-F-025)
| From \ To | Z | F | Bento | Spiral | Choreo |
|-----------|---|---|-------|--------|--------|
| **Z** | -- | Smooth | Bridge | Breathing | Bridge |
| **F** | Smooth | -- | Bridge | Breathing | Bridge |
| **Bento** | Bridge | Bridge | -- | Breathing | Smooth |
| **Spiral** | Breathing | Breathing | Breathing | -- | Breathing |
| **Choreo** | Bridge | Bridge | Smooth | Breathing | -- |

Smooth = same mechanism. Bridge = needs intermediary. Breathing = needs 48px+ gap.

===============================================================================
## 2. YOUR COMBINATION
===============================================================================

### Axis-Density-Org Triple
| Dimension | Pattern | Source |
|-----------|---------|--------|
| DD (Density) | CRESCENDO | DD-F-002: `....############` -- progressive build |
| OD (Organization) | NARRATIVE ARC | OD-002: Story structure with setup-payoff |
| AD (Axis) | F-PATTERN + BENTO | AD-002 (F-Pattern) + AD-003 (Bento Grid) |

### Why This Combination
CRESCENDO density builds progressively from sparse introduction to dense climax. NARRATIVE ARC organizes as a story: context, rising action, peak, resolution. F-PATTERN provides the vertical descent spine. BENTO provides spatial containers for grouped content. This models a "Deep Dive" teaching page where reasoning and code are the heavy payload.

### AD Explorations to Reference
| AD | File | Key Feature to Study |
|----|------|---------------------|
| AD-002 | explorations/axis/AD-002-f-pattern.html | Typography compression = CRESCENDO, 5-act structure, tension meter |
| AD-003 | explorations/axis/AD-003-bento-grid.html | Grid cells as islands, cell size hierarchy, internal layout variation |

### Transition Type Between Patterns
F-Pattern to Bento Grid = **Bridge** (needs intermediary). Use a transitional element -- a prose paragraph, callout, or section heading -- between the F-descent spine and the bento grid section. Do NOT juxtapose F-pattern content directly against a bento grid without an intermediary.

===============================================================================
## 3. COMPONENTS TO USE
===============================================================================

| Component | Role in This Page | Weight | Velocity |
|-----------|-------------------|--------|----------|
| Code Snippet | Primary content -- implementation examples | Heavy | Slow |
| Reasoning | Analysis of code approaches | Heavy | Slow |
| Core Abstraction | Teaching moment -- principle + code proof | Heavy | Slow |
| Info Callout | Context setting, orientation | Light | Fast |
| Tip Callout | Practical advice between heavy sections | Light | Fast |

### Challenge: Super-Heavy Composite
This page has 3 heavy components (Code + Reasoning + Core Abstraction). The velocity rule (T2) DEMANDS fast components between consecutive slow ones.

**Strategy:**
1. Never place Code Snippet directly after Reasoning without a Tip or Info callout buffer
2. Use CRESCENDO to escalate: start with light components (Info, Tip), build to medium (single Code), climax with heavy composite (Reasoning + Core Abstraction + Code)
3. The F-pattern spine provides the vertical rhythm; bento cells contain the heavy composites so they don't spread across the full width
4. Core Abstraction already embeds a code zone -- use this instead of a separate Code Snippet when possible to reduce heavy-heavy adjacency

### Compatibility Notes (from 11x11 matrix)
| Pair | Rating | Note |
|------|--------|------|
| Code + Reasoning | Yes | Excellent -- code provokes reasoning |
| Code + Core Abstraction | Yes | Excellent -- proof follows principle |
| Reasoning + Core Abstraction | Yes | OK with buffer -- both framed, need connective tissue (G2) |
| Info + Code | Yes | Excellent -- context before example |
| Tip + Code | Yes | Excellent -- advice before/after example |

===============================================================================
## 4. R-5 FINDINGS TO TEST
===============================================================================

| Finding | ID | Summary | How to Test in CD-001 |
|---------|----|---------|-----------------------|
| Contrast Creates Harmony | H2 | High-contrast pairs harmonize when functionally complementary | Code Snippet + Reasoning: dark technical + light deliberative should feel unified, not jarring |
| Velocity Mismatch Rule | T2 | Insert FAST between consecutive SLOW | Place Tip or Info callout between Code and Reasoning blocks. Verify reading doesn't fatigue. |
| Components Stack, Not Nest | N1 | Flat editorial, max depth 1 | Do NOT embed callouts inside code blocks or reasoning inside core abstraction. Stack vertically. |
| Composite Components Are Pre-Composed | N2 | Core Abstraction = Essence quote + Code. Don't create ad-hoc composites. | Use Core Abstraction's built-in composite, not a custom Essence+Code nesting. |
| When Nesting Feels Necessary, Re-sequence | N3 | Transform urge to nest into sequential placement | If you want a Tip inside Code, place Tip before Code with "In line X below..." reference. |
| Depth Limit | N4 | Max effective depth is 1 level | Page -> Components (not Page -> Section -> Nested Component) |
| Container Signal | G2 | Framed = bounded thought. Anchored = annotation. Don't place 2 framed components adjacent. | Reasoning (framed) and Core Abstraction (framed) need a non-framed component between them. |
| Visual Weight Balance | G3 | Balance heavy with light. Golden ratio: 1 heavy to 1-2 light. | After each Code/Reasoning/Core block, include 1-2 callouts before the next heavy. |
| Orphaned Heavy Components | A4 | Heavy components need decompression after. | After Core Abstraction, add a Tip Callout ("In practice, this principle means..."). |
| Teaching Moment Sequence | S5 | Essence -> Core Abstraction -> Code -> Tip | Use this proven 4-step sequence for the climax section of the CRESCENDO. |
| Recipe 2: The Deep Dive | Recipe 2 | Info -> Essence -> Core -> Code -> Gotcha -> Task | Follow this recipe structure for the page's main teaching section. |

===============================================================================
## 5. DENSITY PATTERN: CRESCENDO
===============================================================================

```
LOW  ....
MED  ........
HIGH ............####
PEAK ################
```

### CRESCENDO Application to CD-001
1. **Opening (LOW):** Info Callout -- "What this page covers." Prose introduction. F-pattern hero heading.
2. **Rising (MED):** Single Code Snippet (small, 10-15 lines). Tip Callout explaining intent.
3. **Building (HIGH):** Reasoning Component analyzing two approaches. Code Snippet showing each.
4. **Peak (PEAK):** Core Abstraction (principle + code proof). Full Code Snippet (30-40 lines). This is the densest section.
5. **Resolution (LOW-MED):** Tip Callout summarizing takeaway. Footer/capstone.

### Density Wave Within F-Pattern
The F-pattern spine reads top-to-bottom with horizontal scans at F-bar positions. Place CRESCENDO density peaks at the bottom of the F-descent (where the reader has committed to deep reading). The top F-bar (where scanning is fastest) should contain the lightest content (Info Callout, orientation).

### Breathing Zones
- Between Opening and Rising: 32px (standard)
- Between Rising and Building: 24px (tightening -- CRESCENDO compression)
- Between Building and Peak: 16px (tight -- maximum density)
- Between Peak and Resolution: 48px (breathing release after climax)
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
- @media (max-width: 768px): Collapse 2-3 column grids to single-column (C-25)
- @media (max-width: 960px): Collapse 4+ column grids (C-08)
- Reduce padding at 768px: --space-8 --space-4 (C-05)

### Progressive Enhancement
- Content MUST be visible by default (C-09)
- Initial CSS state = visible. JavaScript MAY add hidden state for reveal.
- opacity: 1 !important on all content sections as defensive CSS

### Token-Only CSS
- ALL values must reference CSS custom properties (C-07)
- No hardcoded hex colors, pixel values, or font names

### Border System (3-Category)
| Category | Width | Use |
|----------|-------|-----|
| Cat 1: Structural | 3px+ | Section borders, header/footer borders |
| Cat 2: Separator | 1px | Table rules, subtle dividers |
| Cat 3: Semantic | 4px | Callout left-borders |
| BANNED | 2px | NEVER (OD-F-AP-001) |

### Callout Limit
- Max 2 callouts per viewport (DD-F-014, confirmed in AD)
- Advisory clusters allowed (G4) but must not exceed 2 visible at once

### Dark Header
- background: var(--color-text) (#1A1A1A)
- Cream text, 3px red bottom border (C-16, REINFORCED)

### Page Personality Target
"Scholarly, Deliberate, Warm" at 1440px (C-22)

===============================================================================
## 7. ANTI-PATTERNS TO AVOID
===============================================================================

| Anti-Pattern | Risk Level for CD-001 | Mitigation |
|--------------|----------------------|------------|
| Code Wall (A2) | HIGH -- 3 heavy components | Max 40-50 lines per snippet. Interleave with callouts. |
| Orphaned Heavy (A4) | HIGH -- Core Abstraction needs decompression | Add Tip Callout after every heavy component. |
| Same-Velocity Stacking | HIGH -- Code + Reasoning + Core are all SLOW | Insert FAST callout between every pair of SLOW components. |
| Missing Context Start (A6) | MEDIUM | Start with Info Callout, not Code Snippet. |
| Anxiety Ending (A7) | LOW | End with Tip or summary, not Gotcha. |
| 2px Border Epidemic | ZERO TOLERANCE | Use only 1px, 3px, 4px. Grep for 2px before delivery. |
| Semi-Transparent Backgrounds | ZERO TOLERANCE | opacity === 1.0 on all elements. No rgba with alpha < 1.0. |

===============================================================================
## 8. SCORING CRITERIA
===============================================================================

CD-001 will be scored on the standard 40-point rubric:
- Soul compliance (10 pts): Zero violations required
- Research application (10 pts): R-5 findings explicitly tested and visible
- Density pattern fidelity (10 pts): CRESCENDO pattern visible and progressive
- Combination coherence (10 pts): F-Pattern + Bento work together; transitions follow grammar

### Target Score: 35-37/40
This is a super-heavy composite page. The challenge is managing 3 heavy components without triggering code wall or velocity stacking anti-patterns. Scoring above 35 requires demonstrating that the velocity rule can be honored even with this many heavy components.

===============================================================================
