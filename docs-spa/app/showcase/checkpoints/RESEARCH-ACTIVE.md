<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/checkpoints/RESEARCH-ACTIVE.md
Tier: B | Batch: 7 | Generated: 2026-02-06

1. WHY THIS EXISTS
Central tracking file for all 337 research findings across R1-R5. Records
application status (UNAPPLIED/APPLIED/VALIDATED/INVALIDATED) for every finding.
Must be consulted before any exploration work and updated after every piece of
work. Currently shows 97% of findings remain unapplied (327/337), making this
the primary source of "what research is available but unused."

2. THE QUESTION THIS ANSWERS
"Which research findings have been applied, which are still unapplied, and what is the overall research utilization rate?"

3. STATUS
ACTIVE — Must be updated after every piece of work per showcase/CLAUDE.md mandatory rules.

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/showcase/research/R1-DOCUMENTATION-PATTERNS.md | 28 findings consolidated from R1 |
| docs-spa/app/showcase/research/R2-CREATIVE-LAYOUTS.md | 27 findings consolidated from R2 |
| docs-spa/app/showcase/research/R3-DENSITY-DIMENSIONS.md | 51 findings consolidated from R3 |
| docs-spa/app/showcase/research/R4-AXIS-INNOVATIONS.md | 192 findings consolidated from R4 |
| docs-spa/app/showcase/research/R5-COMBINATION-THEORY.md | 39 findings consolidated from R5 |

6. MUST HONOR
- Finding IDs (R1-001, R3-012, etc.) must match source research files exactly
- Status transitions must be evidence-based: APPLIED requires "Applied In" + "Evidence" columns filled
- VALIDATED requires Confidence 4+ from audit verification

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/showcase/CLAUDE.md         | Mandatory reading before any exploration work (Step 1 of research grounding) |
| docs-spa/app/showcase/DESIGN-SYSTEM/CLAUDE.md | Referenced for research coverage tracking |
| checkpoints/RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md | Template references this file as mandatory pre-work reading |
| docs-spa/app/showcase/DESIGN-SYSTEM/BACKBONE.md | References research application status |
| docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | References research utilization for handoff context |

10. DIAGNOSTIC QUESTIONS
- Does the GLOBAL SUMMARY table match the sum of per-R-stream finding counts?
- Are all 337 findings accounted for (no gaps in ID sequences)?
- Has the "Last Updated" field been touched since the most recent piece of work?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# RESEARCH-ACTIVE — Comprehensive Research Tracking
## All 337 Findings with Application Status

Last Updated: 2026-02-07
Last Updated By: OD-006 Emergent Synthesis Threading (Weaver)

═══════════════════════════════════════════════════════════════════════════════
## GLOBAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════

| Research | Total Findings | UNAPPLIED | APPLIED | VALIDATED | INVALIDATED |
|----------|----------------|-----------|---------|-----------|-------------|
| R-1 | 28 | 8 | 20 | 0 | 0 |
| R-2 | 27 | 27 | 0 | 0 | 0 |
| R-3 | 51 | 40 | 11 | 0 | 0 |
| R-4 | 192 | 192 | 0 | 0 | 0 |
| R-5 | 39 | 37 | 2 | 0 | 0 |
| **TOTAL** | **337** | **304** | **33** | **0** | **0** |

**Application Rate:** 9.79% of findings have been applied
**Gap Rate:** 90.21% of findings remain unapplied

### Status Definitions
| Status | Definition |
|--------|------------|
| UNAPPLIED | Finding identified but not yet used in any exploration/section |
| APPLIED | Finding used in at least one exploration/section |
| VALIDATED | Finding applied AND confirmed working via audit (Confidence 4+) |
| INVALIDATED | Finding applied but found not to work as expected |

═══════════════════════════════════════════════════════════════════════════════
## R-1: DOCUMENTATION PATTERNS (28 Findings)
═══════════════════════════════════════════════════════════════════════════════

**Status:** COMPLETE
**Output File:** research/R1-DOCUMENTATION-PATTERNS.md
**Mission:** Analyze Stripe, Vercel, Linear, Notion docs for patterns

### R-1 Summary
- Total: 28
- UNAPPLIED: 8
- APPLIED: 20
- VALIDATED: 0
- INVALIDATED: 0

### R-1 Full Finding Table

| ID | Finding | Status | Applied In | Evidence | Date |
|----|---------|--------|------------|----------|------|
| R1-001 | Density Rhythm Principle (HIGH→LOW→MEDIUM waves) | APPLIED | OD-001 | Q&A alternation creates PULSE rhythm | 2026-02-07 |
| R1-002 | 38% Retention Rule (smart whitespace improves retention by 38%) | APPLIED | OD-006 | Generous whitespace (38%+) between discovery sections; breathing zones between all major content | 2026-02-07 |
| R1-003 | Viewport Principle (one major concept per viewport height) | APPLIED | OD-001 | One concept per Q&A pair | 2026-02-07 |
| R1-004 | Three-Column Doctrine (nav\|content\|code layout) | APPLIED | OD-006 | Meta-system map uses three-column layout for pattern comparison | 2026-02-07 |
| R1-005 | Responsive Collapse Hierarchy (Desktop 3-col, Tablet 2-col, Mobile 1-col) | APPLIED | OD-006 | Grid collapses to single column at 768px | 2026-02-07 |
| R1-006 | Horizontal Comparison Break (multi-column only for comparisons) | APPLIED | OD-006 | Side-by-side OD pattern comparison matrix | 2026-02-07 |
| R1-007 | Callout Positioning Doctrine (callouts FOLLOW content except warnings BEFORE) | APPLIED | OD-001 | Callouts follow content; gotcha before action | 2026-02-07 |
| R1-008 | Callout Scarcity Principle (max 1-2 callouts per page) | APPLIED | OD-001 | 4 callouts across 3 chapters (1-2 per chapter) | 2026-02-07 |
| R1-009 | Code-Adjacent Callout Pattern (Tip after code, Warning before code) | APPLIED | OD-006 | Warning callout before code blocks, insight callout after | 2026-02-07 |
| R1-010 | Grouping Proximity Law (related 8-16px, unrelated 24-48px) | APPLIED | OD-001 | Q margin-bottom: 16px, QA pair gap: 48px | 2026-02-07 |
| R1-011 | Default Story Pattern (first showcase = only required props) | APPLIED | OD-006 | Each section starts with minimal state before elaborating | 2026-02-07 |
| R1-012 | Permutation Strategy (one story per significant variant) | UNAPPLIED | | | |
| R1-013 | Do/Don't Grid (side-by-side visual examples with explicit labels) | APPLIED | OD-006 | Pattern comparison matrix showing org-density pairings | 2026-02-07 |
| R1-014 | Interactive Playground Pattern (live code editors with real-time preview) | UNAPPLIED | | | |
| R1-015 | Recipe Pattern (showcase components in combination, not isolation) | APPLIED | OD-006 | Combining all 5 organizational patterns in one cohesive document | 2026-02-07 |
| R1-016 | Typography-First Hierarchy (Size → Weight → Color → Space) | APPLIED | OD-001 | 32px > 22px > 16px > 14px hierarchy | 2026-02-07 |
| R1-017 | Monospace Differentiation Pattern (monospace for code, sans for prose) | APPLIED | OD-002 | Code appears at conflict/resolution acts only, not setup; monospace for code, sans for prose | 2026-02-07 |
| R1-018 | Drop Cap & Pull Quote Pattern (magazine techniques for section emphasis) | APPLIED | OD-001 | Essence pullquote between chapters (serif italic) | 2026-02-07 |
| R1-019 | Tech Spec Aesthetic (grayscale + accent, monospace, sharp edges) | APPLIED | OD-001 | Monospace IDs, uppercase labels, 10px tracking | 2026-02-07 |
| R1-020 | Four Pillars of Editorial (Layout, Typography, Color, Imagery) | UNAPPLIED | | | |
| R1-021 | Code Snippet Best Practices (syntax highlighting, hover-to-copy, multi-language tabs) | UNAPPLIED | | | |
| R1-022 | File Tree Visualization (ASCII tree with box-drawing characters) | APPLIED | OD-006 | ASCII provenance chain showing DD→OD discovery flow | 2026-02-07 |
| R1-023 | Decision Matrix Layout (Options × Criteria grid with visual scoring) | UNAPPLIED | | | |
| R1-024 | Props/API Table Format (Name\|Type\|Required\|Default\|Description) | UNAPPLIED | | | |
| R1-025 | Branded Shell Pattern (documentation as brand touchpoint) | APPLIED | OD-006 | Documentation IS the KortAI brand — meta-doc showcases identity | 2026-02-07 |
| R1-026 | Collapsible Callout Pattern (expand/collapse for supplementary detail) | APPLIED | OD-006 | <details> elements for depth-on-demand in discovery sections | 2026-02-07 |
| R1-027 | Status Grouping Pattern (Production Ready/Experimental/Deprecated) | UNAPPLIED | | | |
| R1-028 | WAI-ARIA Compliance Callout (document accessibility for each component) | UNAPPLIED | | | |

### R-1 Priority Queue
1. R1-001 (Density Rhythm) — Apply in: OD-001, all future explorations
2. R1-007 (Callout Positioning) — Apply in: OD-001
3. R1-008 (Callout Scarcity) — Apply in: All explorations
4. R1-010 (Grouping Proximity) — Apply in: OD-001
5. R1-016 (Typography-First) — Apply in: All explorations

═══════════════════════════════════════════════════════════════════════════════
## R-2: CREATIVE LAYOUTS (27 Findings)
═══════════════════════════════════════════════════════════════════════════════

**Status:** COMPLETE
**Output File:** research/R2-CREATIVE-LAYOUTS.md
**Mission:** Analyze magazines, dashboards, design system showcases

### R-2 Summary
- Total: 27
- UNAPPLIED: 27
- APPLIED: 0
- VALIDATED: 0
- INVALIDATED: 0

### R-2 Full Finding Table

| ID | Finding | Status | Applied In | Evidence | Date |
|----|---------|--------|------------|----------|------|
| R2-001 | Breaking the Grid (strategic asymmetric storytelling) | UNAPPLIED | — | — | — |
| R2-002 | Pull Quotes as Structural Elements (large typographic excerpts) | UNAPPLIED | — | — | — |
| R2-003 | Multi-Column Text with Visual Interruptions (CSS column-span) | UNAPPLIED | — | — | — |
| R2-004 | Running Headers and Section Markers (sticky breadcrumbs, progress bars) | UNAPPLIED | — | — | — |
| R2-005 | White Space as Content (92px+ top margins, proportional spacing) | UNAPPLIED | — | — | — |
| R2-006 | F-Pattern and Z-Pattern for Information Hierarchy | UNAPPLIED | — | — | — |
| R2-007 | Card-Based Composition with Hierarchy Signals (size/whitespace priority) | UNAPPLIED | — | — | — |
| R2-008 | Dense but Breathable Interfaces (reduce padding, increase information efficiency) | UNAPPLIED | — | — | — |
| R2-009 | Analytical Dashboard Storylines (dashboards as narratives) | UNAPPLIED | — | — | — |
| R2-010 | Maturity Badges and Component Status (Stable/Beta/Under Review/Deprecated) | UNAPPLIED | — | — | — |
| R2-011 | Brand-Forward Documentation (Audi Pattern - marketing + education) | UNAPPLIED | — | — | — |
| R2-012 | Development Kitchen / Experimental Namespace | UNAPPLIED | — | — | — |
| R2-013 | Atomic Design Organization (Atoms → Molecules → Organisms) | UNAPPLIED | — | — | — |
| R2-014 | Bento Grid Layout (Japanese-inspired modular layout) | UNAPPLIED | — | — | — |
| R2-015 | Asymmetric / Broken Grid Layouts (+20% user engagement) | UNAPPLIED | — | — | — |
| R2-016 | CSS Grid with Fractional Units (asymmetric columns via fr) | UNAPPLIED | — | — | — |
| R2-017 | Golden Ratio Grid System (1:1.618 proportion) | UNAPPLIED | — | — | — |
| R2-018 | Swiss Design Grid System (modular grid with asymmetric layouts) | UNAPPLIED | — | — | — |
| R2-019 | Typography as Primary Design Element (72px+ display, tight line-height) | UNAPPLIED | — | — | — |
| R2-020 | Whitespace for Hierarchy (Proximity Principle) | UNAPPLIED | — | — | — |
| R2-021 | Typographic Hierarchy Techniques (font size, weight, color as differentiation) | UNAPPLIED | — | — | — |
| R2-022 | Dramatic Typography as Content (96-200px bold text) | UNAPPLIED | — | — | — |
| R2-023 | Split Screen Layouts (50/50, 60/40, 70/30 divisions) | UNAPPLIED | — | — | — |
| R2-024 | Overlapping/Layered Elements with Z-Index | UNAPPLIED | — | — | — |
| R2-025 | Scrollytelling for Documentation (scroll-driven narrative) | UNAPPLIED | — | — | — |
| R2-026 | Card Manipulation and Animation (tactile shadows, drag-and-drop) | UNAPPLIED | — | — | — |
| R2-027 | Copy-Paste Component Philosophy (shadcn/ui approach) | UNAPPLIED | — | — | — |

### R-2 Priority Queue
1. R2-005 (White Space as Content) — Apply in: All explorations
2. R2-014 (Bento Grid) — Apply in: AD-003
3. R2-019 (Typography as Primary Design Element) — Apply in: All explorations
4. R2-020 (Whitespace for Hierarchy) — Apply in: All explorations
5. R2-021 (Typographic Hierarchy) — Apply in: All explorations

═══════════════════════════════════════════════════════════════════════════════
## R-3: DENSITY DIMENSIONS (51 Findings)
═══════════════════════════════════════════════════════════════════════════════

**Status:** COMPLETE
**Output File:** research/R3-DENSITY-DIMENSIONS.md
**Mission:** Explore density beyond spatial (temporal, depth, semantic, cognitive, interaction)

### R-3 Summary
- Total: 51
- UNAPPLIED: 40
- APPLIED: 11
- VALIDATED: 0
- INVALIDATED: 0

### R-3 Full Finding Table

| ID | Finding | Dimension | Status | Applied In | Evidence | Date |
|----|---------|-----------|--------|------------|----------|------|
| R3-001 | Scroll velocity mapping varies by content type | Temporal | UNAPPLIED | — | — | — |
| R3-002 | First fold paradox - low temporal + high semantic | Temporal | UNAPPLIED | — | — | — |
| R3-003 | PULSE pattern (high-low-high-low cycles) | Temporal | APPLIED | DD-001 | Alternating density cycles observed | 2026-02-04 |
| R3-004 | CRESCENDO pattern (sparse to dense builds) | Temporal | APPLIED | DD-002 | Progressive density escalation documented | 2026-02-04 |
| R3-005 | BOOKENDS pattern (dense start/end, sparse middle) | Temporal | UNAPPLIED | — | — | — |
| R3-006 | WAVE pattern (irregular but rhythmic density) | Temporal | APPLIED | OD-005 | Hub(sparse) → Spoke(dense) → Hub(sparse return) oscillation | 2026-02-07 |
| R3-007 | Scroll-triggered density shifts | Temporal | UNAPPLIED | — | — | — |
| R3-008 | Showcase opening low temporal density | Temporal | UNAPPLIED | — | — | — |
| R3-009 | PULSE pattern for sustained engagement | Temporal | UNAPPLIED | — | — | — |
| R3-010 | Geological Model (surface/sediment/bedrock) | Depth | APPLIED | DD-004 | Three-level depth architecture | 2026-02-04 |
| R3-011 | Z-Index as Information Priority | Depth | UNAPPLIED | — | — | — |
| R3-012 | Progressive Disclosure Density Gradient | Depth | APPLIED | DD-002, DD-004 | Layered disclosure patterns | 2026-02-04 |
| R3-013 | Hover Reveal Anti-Pattern | Depth | UNAPPLIED | — | — | — |
| R3-014 | Shadow Depth as Density Signal | Depth | UNAPPLIED | — | — | — |
| R3-015 | Showcase depth architecture - 3 levels | Depth | UNAPPLIED | — | — | — |
| R3-016 | Shadow intensity increase with info potential | Depth | UNAPPLIED | — | — | — |
| R3-017 | Jargon Paradox (expert vs novice) | Semantic | UNAPPLIED | — | — | — |
| R3-018 | Icon Semantic Density | Semantic | UNAPPLIED | — | — | — |
| R3-019 | Component Type Semantic Ranking | Semantic | UNAPPLIED | — | — | — |
| R3-020 | Semantic Density vs Reading Speed | Semantic | UNAPPLIED | — | — | — |
| R3-021 | Showcase semantic approach | Semantic | UNAPPLIED | — | — | — |
| R3-022 | Novelty Factor | Cognitive | UNAPPLIED | — | — | — |
| R3-023 | Decision Fatigue Zones | Cognitive | UNAPPLIED | — | — | — |
| R3-024 | Explanation Burden | Cognitive | UNAPPLIED | — | — | — |
| R3-025 | Color as Cognitive Load | Cognitive | UNAPPLIED | — | — | — |
| R3-026 | Motion as Cognitive Density | Cognitive | UNAPPLIED | — | — | — |
| R3-027 | Showcase cognitive approach | Cognitive | UNAPPLIED | — | — | — |
| R3-028 | Touch Target Tax | Interaction | UNAPPLIED | — | — | — |
| R3-029 | Interaction Density Zones | Interaction | UNAPPLIED | — | — | — |
| R3-030 | Playground Pattern | Interaction | UNAPPLIED | — | — | — |
| R3-031 | Interaction Depth vs Breadth | Interaction | UNAPPLIED | — | — | — |
| R3-032 | Showcase interaction approach | Interaction | UNAPPLIED | — | — | — |
| R3-033 | Breathing Framework | Metaphor | UNAPPLIED | — | — | — |
| R3-034 | Tidal Framework | Metaphor | APPLIED | DD-005 | Tidal density cycles | 2026-02-04 |
| R3-035 | Musical Framework | Metaphor | APPLIED | DD-005 | Musical rhythm density patterns | 2026-02-04 |
| R3-036 | Fractal Self-Similar Density | Framework | APPLIED | DD-006 | Self-similar patterns across scales | 2026-02-04 |
| R3-037 | Geological Density Strata | Framework | UNAPPLIED | — | — | — |
| R3-038 | Gradient Principle | Transition | UNAPPLIED | — | — | — |
| R3-039 | Transition Techniques | Transition | UNAPPLIED | — | — | — |
| R3-040 | Expansion Moment | Transition | UNAPPLIED | — | — | — |
| R3-041 | Showcase Density Architecture table | Showcase | UNAPPLIED | — | — | — |
| R3-042 | Pattern Card Density | Showcase | UNAPPLIED | — | — | — |
| R3-043 | 10-Second Test | Showcase | UNAPPLIED | — | — | — |
| R3-044 | Density Red Flags to Avoid | Showcase | UNAPPLIED | — | — | — |
| R3-045 | Density Potential | Novel | UNAPPLIED | — | — | — |
| R3-046 | Density Inheritance | Novel | UNAPPLIED | — | — | — |
| R3-047 | Density Contrast | Novel | APPLIED | DD-003 | Contrast patterns documented | 2026-02-04 |
| R3-048 | Density Debt | Novel | APPLIED | All DD explorations | Systematic debt tracking | 2026-02-04 |
| R3-049 | Density Manifold | Synthesis | UNAPPLIED | — | — | — |
| R3-050 | Ideal Showcase Point on Manifold | Synthesis | UNAPPLIED | — | — | — |
| R3-051 | Navigation Through Density Manifold | Synthesis | UNAPPLIED | — | — | — |

### R-3 Application Summary
| Finding ID | Pattern Name | Applied In | Audit Score |
|------------|--------------|------------|-------------|
| R3-003 | PULSE | DD-001 | 7.36/10 |
| R3-004 | CRESCENDO | DD-002 | 8.57/10 |
| R3-010 | Geological Model | DD-004 | 8.43/10 |
| R3-012 | Progressive Disclosure | DD-002, DD-004 | 8.5/10 avg |
| R3-034 | Tidal Framework | DD-005 | 8.50/10 |
| R3-035 | Musical Framework | DD-005 | 8.50/10 |
| R3-036 | Fractal Self-Similar | DD-006 | 8.64/10 |
| R3-047 | Density Contrast | DD-003 | 7.86/10 |
| R3-048 | Density Debt | All DD | N/A |

### R-3 Priority Queue (Unapplied)
1. R3-005 (BOOKENDS) — Apply in: OD-002
2. R3-006 (WAVE) — Apply in: Long-form sections
3. R3-017 (Jargon Paradox) — Apply in: Section 1 (Catalog)
4. R3-043 (10-Second Test) — Apply in: All explorations
5. R3-049 (Density Manifold) — Apply in: Section 3 (Density)

═══════════════════════════════════════════════════════════════════════════════
## R-4: AXIS INNOVATIONS (192 Findings)
═══════════════════════════════════════════════════════════════════════════════

**Status:** COMPLETE
**Output File:** research/R4-AXIS-INNOVATIONS.md
**Mission:** Explore axis patterns (Z, F, Gutenberg, bento, spiral, diagonal)

### R-4 Summary
- Total: 192
- UNAPPLIED: 192
- APPLIED: 0
- VALIDATED: 0
- INVALIDATED: 0

### R-4 Findings by Category

| ID Range | Pattern Category | Finding Count | Status |
|----------|------------------|---------------|--------|
| R4-001 to R4-015 | Classic Reading Patterns (Z, F, Gutenberg) | 15 | UNAPPLIED |
| R4-016 to R4-028 | Bento Grid Patterns | 13 | UNAPPLIED |
| R4-029 to R4-034 | Masonry Grid | 6 | UNAPPLIED |
| R4-035 to R4-049 | Broken/Asymmetric Grid | 15 | UNAPPLIED |
| R4-050 to R4-068 | Visual Rhythm | 19 | UNAPPLIED |
| R4-069 to R4-076 | Cinematic Patterns | 8 | UNAPPLIED |
| R4-077 to R4-092 | Axis Transitions | 16 | UNAPPLIED |
| R4-093 to R4-103 | Golden Ratio | 11 | UNAPPLIED |
| R4-104 to R4-115 | Hub and Spoke | 12 | UNAPPLIED |
| R4-116 to R4-131 | Progressive Disclosure | 16 | UNAPPLIED |
| R4-132 to R4-147 | Diagonal Patterns | 16 | UNAPPLIED |
| R4-148 to R4-169 | Pattern Use Cases | 22 | UNAPPLIED |
| R4-170 to R4-192 | Pattern Combinations | 23 | UNAPPLIED |

### R-4 Key Findings Reference

| ID | Finding | Primary Use |
|----|---------|-------------|
| R4-001 | Z-pattern (diagonal sweep, minimal content) | Hero sections, landing pages |
| R4-002 | F-pattern (horizontal scans + vertical descent) | Text-heavy documentation |
| R4-004 | Bento Grid (varied cell sizes) | Feature showcases |
| R4-050 | Five types of visual rhythm | All layouts |
| R4-069 | Cinematic wide-close-wide | Tutorials |
| R4-093 | Golden Ratio (1.618) | Layout proportions |
| R4-104 | Hub and Spoke | Task-based documentation |
| R4-116 | Progressive Disclosure reduces cognitive load | Complex documentation |
| R4-170 | Landing pages: Z-hero + Bento + Progressive | Page composition |
| R4-190 | Orchestrated Axis Flow | Full-page pattern |

### R-4 Priority Queue
1. R4-001, R4-002 (Z/F patterns) — Apply in: AD-001, AD-002
2. R4-004 (Bento Grid) — Apply in: AD-003
3. R4-050-068 (Visual Rhythm) — Apply in: All explorations
4. R4-069-076 (Cinematic) — Apply in: AD-005
5. R4-116-131 (Progressive Disclosure) — Apply in: All sections

### R-4 Full Listing Reference
For complete 192-finding list, see: research/R4-AXIS-INNOVATIONS.md

═══════════════════════════════════════════════════════════════════════════════
## R-5: COMBINATION THEORY (39 Findings)
═══════════════════════════════════════════════════════════════════════════════

**Status:** COMPLETE
**Output File:** research/R5-COMBINATION-THEORY.md
**Mission:** Develop component combination principles (harmony, tension, sequence, grouping)

### R-5 Summary
- Total: 39
- UNAPPLIED: 37
- APPLIED: 2
- VALIDATED: 0
- INVALIDATED: 0

### R-5 Full Finding Table

| ID | Finding | Category | Status | Applied In | Evidence | Date |
|----|---------|----------|--------|------------|----------|------|
| R5-H1 | Family Cohesion Through Shared DNA | Harmony | UNAPPLIED | | | |
| R5-H2 | Contrast Creates Perceived Harmony | Harmony | UNAPPLIED | | | |
| R5-H3 | Shared Visual Anchors | Harmony | UNAPPLIED | | | |
| R5-H4 | Editorial Spread Pattern | Harmony | UNAPPLIED | | | |
| R5-T1 | Productive Tension vs Jarring Collision | Tension | UNAPPLIED | | | |
| R5-T2 | Velocity Mismatch Rule | Tension | UNAPPLIED | | | |
| R5-T3 | Semantic Dissonance | Tension | UNAPPLIED | | | |
| R5-T4 | 2-Callout Limit | Tension | APPLIED | OD-001 | Max 2 callouts per chapter | 2026-02-07 |
| R5-S1 | Setup-Payoff Arc | Sequence | APPLIED | OD-001 | Question=setup, answer=payoff | 2026-02-07 |
| R5-S2 | Density Wave Sequencing | Sequence | UNAPPLIED | | | |
| R5-S3 | First Component Rule | Sequence | UNAPPLIED | | | |
| R5-S4 | Resolution Component | Sequence | UNAPPLIED | | | |
| R5-S5 | Teaching Moment Sequence | Sequence | UNAPPLIED | | | |
| R5-G1 | Semantic Proximity | Grouping | UNAPPLIED | | | |
| R5-G2 | Container Signal | Grouping | UNAPPLIED | | | |
| R5-G3 | Visual Weight Balance | Grouping | UNAPPLIED | | | |
| R5-G4 | Advisory Cluster | Grouping | UNAPPLIED | | | |
| R5-N1 | Components Stack Not Nest | Nesting | UNAPPLIED | | | |
| R5-N2 | Composite Components Pre-Composed | Nesting | UNAPPLIED | | | |
| R5-N3 | Re-sequence Instead of Nest | Nesting | UNAPPLIED | | | |
| R5-N4 | Depth Limit | Nesting | UNAPPLIED | | | |
| R5-R1 | Kinship Model | Relationship | UNAPPLIED | | | |
| R5-R2 | Component Moods | Relationship | UNAPPLIED | | | |
| R5-R3 | Component Voices | Relationship | UNAPPLIED | | | |
| R5-A1 | Anti-Pattern: Callout Cacophony | Anti-Pattern | UNAPPLIED | | | |
| R5-A2 | Anti-Pattern: Code Wall | Anti-Pattern | UNAPPLIED | | | |
| R5-A3 | Anti-Pattern: Decision Paralysis | Anti-Pattern | UNAPPLIED | | | |
| R5-A4 | Anti-Pattern: Orphaned Heavy Components | Anti-Pattern | UNAPPLIED | | | |
| R5-A5 | Anti-Pattern: Temperature Whiplash | Anti-Pattern | UNAPPLIED | | | |
| R5-A6 | Anti-Pattern: Missing Context Start | Anti-Pattern | UNAPPLIED | | | |
| R5-A7 | Anti-Pattern: Anxiety Ending | Anti-Pattern | UNAPPLIED | | | |
| R5-Recipe1 | Quick Reference recipe | Recipe | UNAPPLIED | | | |
| R5-Recipe2 | Deep Dive recipe | Recipe | UNAPPLIED | | | |
| R5-Recipe3 | Decision Guide recipe | Recipe | UNAPPLIED | | | |
| R5-Recipe4 | Troubleshooting Guide recipe | Recipe | UNAPPLIED | | | |
| R5-Recipe5 | Tutorial Section recipe | Recipe | UNAPPLIED | | | |
| R5-Recipe6 | Architecture Overview recipe | Recipe | UNAPPLIED | | | |
| R5-Q1 | Component Density Limits | Quantitative | UNAPPLIED | | | |
| R5-Q2 | Spacing Standards | Quantitative | UNAPPLIED | | | |
| R5-Q3 | Reading Rhythm Ratios | Quantitative | UNAPPLIED | | | |

### R-5 Priority Queue
1. R5-T4 (2-Callout Limit) — Apply in: All explorations
2. R5-S1 (Setup-Payoff Arc) — Apply in: OD-002
3. R5-S3 (First Component Rule) — Apply in: All explorations
4. R5-A1-A7 (Anti-Patterns) — Check in: All explorations
5. R5-Recipe1-6 (Recipes) — Apply in: CD-001 through CD-006

═══════════════════════════════════════════════════════════════════════════════
## APPLICATION TRACKING BY EXPLORATION
═══════════════════════════════════════════════════════════════════════════════

### Density Explorations (DD-001 through DD-006)

| Exploration | Research Applied | Findings Used | Score |
|-------------|------------------|---------------|-------|
| DD-001 Breathing | R3-003 (PULSE) | 1 finding | 30/40 DOCUMENT |
| DD-002 Gradient | R3-004, R3-012 | 2 findings | 34/40 INCLUDE ★ |
| DD-003 Islands | R3-047 | 1 finding | 31/40 DOCUMENT |
| DD-004 Layers | R3-010, R3-012 | 2 findings | 33.5/40 INCLUDE ★ |
| DD-005 Rivers | R3-034, R3-035 | 2 findings | 34/40 INCLUDE ★ |
| DD-006 Fractal | R3-036 | 1 finding | 35/40 INCLUDE ★★ BEST |

**Gap Analysis:** Only ~10 of 51 R-3 findings were applied to DD explorations.
Future explorations should intentionally apply remaining R-3 findings.

### Organizational Explorations (OD-001 through OD-006)

| Exploration | Research Applied | Findings Used | Score |
|-------------|------------------|---------------|-------|
| OD-001 Conversational | R1-001,R1-003,R1-007,R1-008,R1-010,R1-016,R1-018,R1-019,R3-003,R3-034,R3-036,R5-S1,R5-T4 | 13 findings (R1-026 declared not implemented) | ~35/40 INCLUDE |
| OD-002 Narrative Arc | R1-001,R1-003,R1-007,R1-008,R1-016,R1-017,R1-018,R1-019,R3-004,R5-S1 | 10 findings (R1-017 NEW to APPLIED) | ~33/40 INCLUDE |
| OD-003 Task-Based | R1-001,R1-003,R1-007,R1-008,R1-016,R1-019,R3-047,EXT-TASK-001-012 | 6 R1 + 1 R3 (all already APPLIED) + 8 EXT-TASK (external) | ~33/40 INCLUDE |
| OD-004 Confidence-Based | R1-001,R1-003,R1-007,R1-008,R1-016,R1-017,R1-018,R1-019,R3-004,R5-S1,EXT-CONF-001-012 | 10 R-findings (all already APPLIED) + 12 EXT-CONF (external) | INCLUDE |
| OD-005 Spatial/Map | R1-001,R1-003,R1-007,R1-008,R1-016,R1-018,R1-019,R3-006,R3-036,EXT-SPAT-001-012 | 7 R1 + R3-006 NEW + R3-036 + 10 EXT-SPAT | INCLUDE |
| OD-006 Emergent Synthesis | R1-001,R1-002,R1-003,R1-004,R1-005,R1-006,R1-007,R1-008,R1-009,R1-010,R1-011,R1-013,R1-015,R1-016,R1-017,R1-018,R1-019,R1-022,R1-025,R1-026,R3-003,R3-004,R3-006,R3-010,R3-036,R3-047,R5-S1,R5-T4+EXT-CREATIVE-001-009 | 20 R1 (11 NEW) + 6 R3 + 2 R5 + 9 EXT-CREATIVE | INCLUDE (crown jewel) |

### Axis Explorations (AD-001 through AD-006)

| Exploration | Research Applied | Findings Used | Score |
|-------------|------------------|---------------|-------|
| AD-001 Z-Pattern | (pending) | | |
| AD-002 F-Pattern | (pending) | | |
| AD-003 Bento Grid | (pending) | | |
| AD-004 Spiral Reveal | (pending) | | |
| AD-005 Axis Choreography | (pending) | | |
| AD-006 Creative Slot | (pending) | | |

### Combination Explorations (CD-001 through CD-006)

| Exploration | Research Applied | Findings Used | Score |
|-------------|------------------|---------------|-------|
| CD-001 Reasoning Inside Code | (pending) | | |
| CD-002 Task + Decision | (pending) | | |
| CD-003 File Tree + Callouts | (pending) | | |
| CD-004 Essence as Background | (pending) | | |
| CD-005 Callouts as Conversation | (pending) | | |
| CD-006 Creative Slot | (pending) | | |

═══════════════════════════════════════════════════════════════════════════════
## APPLICATION TRACKING BY SECTION
═══════════════════════════════════════════════════════════════════════════════

| Section | Research Applied | Findings Used |
|---------|------------------|---------------|
| Section 1: Catalog | (pending) | |
| Section 2: Families | (pending) | |
| Section 3: Density | (pending) | |
| Section 4: Axis | (pending) | |
| Section 5: Structures | (pending) | |
| Section 6: Stress | (pending) | |
| Section 7: Discoveries | (pending) | |

═══════════════════════════════════════════════════════════════════════════════
## UPDATE LOG
═══════════════════════════════════════════════════════════════════════════════

### 2026-02-04 — Retroactive Research Audit Reconciliation

**Audit Result:** DD-001 through DD-006 audited against ALL 128 applicable findings
**Full Report:** `checkpoints/RETROACTIVE-AUDIT-DD-001-006.md`

**Application Rates by Exploration:**
| Exploration | Critical Findings Checked | Application Rate | Anti-Patterns |
|-------------|---------------------------|------------------|---------------|
| DD-001 | 10 | 70% | 1 (Traffic-Light) |
| DD-002 | 10 | 80% | 0 |
| DD-003 | 9 | 56% | 0-1 borderline |
| DD-004 | 13 | 85% | 0 |
| DD-005 | 12 | 83% | 0 |
| DD-006 | 8 | 88% | 0 |

**Reconciliation Note:**
The finding tables below track individual R-X IDs with SPECIFIC evidence. The audit rates above reflect broader categorical coverage (e.g., "density contrast applied" covers multiple related findings). The tracking table shows 10 explicitly marked APPLIED in R-3 because those have line-number evidence; the 76% average rate reflects the audit's assessment of conceptual coverage.

**EXEMPLARY Applications Identified:**
- R3-005 (Geological Layers) → DD-004
- R3-029 (Density Contrast) → DD-005
- R3-023 (Fractal Self-Similar) → DD-006
- R3-035 (PULSE) → DD-001
- R3-036 (CRESCENDO) → DD-002
- R3-044-046 (Surface/Sediment/Bedrock) → DD-004

**Anti-Pattern Violations:**
- Traffic-Light (DD-001): Green Tip adjacent to Red Gotcha at lines 469-484 — NEEDS FIX

---

### 2026-02-04 — Mandatory Research Application System Implementation

**Actions:**
- Restructured RESEARCH-ACTIVE.md to comprehensive format
- Added all 337 findings (R1: 28, R2: 27, R3: 51, R4: 192, R5: 39)
- Updated R-3 with 10 applied findings from DD explorations
- Created priority queues for each research stream
- Added application tracking by exploration and section

**Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R3-003 | DD-001 | PULSE density pattern | Alternating density cycles |
| R3-004 | DD-002 | CRESCENDO pattern | Progressive density escalation |
| R3-010 | DD-004 | Geological Model | 5-layer depth architecture |
| R3-012 | DD-002, DD-004 | Progressive Disclosure | Layered content revelation |
| R3-034 | DD-005 | Tidal Framework | River width = inverse density |
| R3-035 | DD-005 | Musical Framework | Dynamics-based pacing |
| R3-036 | DD-006 | Fractal Self-Similarity | Same rhythm at all scales |
| R3-047 | DD-003 | Density Contrast | Sparse ocean, dense islands |
| R3-048 | All DD | Density Debt | Recovery whitespace after dense |

═══════════════════════════════════════════════════════════════════════════════

### 2026-02-07 — OD-001 Conversational Exploration Threading

**Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-001 | OD-001 | Q&A alternation creates PULSE density rhythm | 6 Q&A pairs alternate sparse/dense |
| R1-003 | OD-001 | One concept per Q&A pair (viewport principle) | Each QA pair fits viewport height |
| R1-007 | OD-001 | Callout positioning: follow content | Info, Tip, Challenge after content; Gotcha before action |
| R1-008 | OD-001 | Max 1-2 callouts per section | 4 callouts across 3 chapters |
| R1-010 | OD-001 | Grouping proximity: Q+A tightly grouped | Q margin-bottom: 16px, QA pair margin-bottom: 48px |
| R1-016 | OD-001 | Typography-first hierarchy: Size > Weight > Color | 32px > 22px > 16px > 14px |
| R1-018 | OD-001 | Pull quote magazine technique | Essence pullquote between chapters |
| R1-019 | OD-001 | Tech spec aesthetic | Monospace exploration ID, uppercase labels |
| R3-003 | OD-001 | PULSE: high-low-high-low alternation | Q(sparse)->A(dense) page-level rhythm |
| R3-034 | OD-001 | TIDAL: width variation signals density | Question 60% width, answer 100% width |
| R3-036 | OD-001 | FRACTAL (DD-F-006): self-similar at 4 scales | Page/section/component/character |
| R5-S1 | OD-001 | Setup-payoff arc | Question = setup, answer = payoff |
| R5-T4 | OD-001 | 2-callout limit per section | Max 2 callouts per chapter |

**New Findings Generated (OD-F):**
| Finding ID | Name | Description |
|------------|------|-------------|
| OD-F-001 | Conversational Width Variation | Q&A width (60%/100%) creates natural TIDAL rhythm |
| OD-F-002 | Fractal Nesting via Follow-ups | Follow-up questions create conversation-within-conversation fractal |
| OD-F-003 | Q&A as Natural PULSE Generator | Question=LOW, answer=HIGH — inherent PULSE without manipulation |
| OD-F-004 | Chapter Dividers as Breathing Zones | Chapter dividers provide recovery whitespace between dense answers |

**Research Declared But NOT Applied:**
| Finding ID | Why Not Applied | Future Action |
|------------|-----------------|---------------|
| R1-026 | Collapsible callouts — no details/summary elements | Add in iteration |

**Anti-Patterns Checked:**
| Anti-Pattern | Avoided | How |
|--------------|---------|-----|
| DD-F-015 (Traffic-light) | YES | No green+red callouts adjacent |
| R5-A1 (Callout Cacophony) | YES | Max 2 callouts per section |
| R5-A5 (Temperature Whiplash) | YES | Gradual temperature transitions |

### 2026-02-07 — OD-004 Confidence-Based + OD-005 Spatial Threading

**OD-004 Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-001 | OD-004 | GEOLOGICAL density rhythm | Established=dense, Emerging=moderate, Exploratory=sparse |
| R1-003 | OD-004 | One concept per viewport section | Each stratum section fits viewport |
| R1-007 | OD-004 | Callout positioning: follow content | Callouts follow strata content |
| R1-008 | OD-004 | Max 2 callouts per section | Enforced per stratum |
| R1-016 | OD-004 | Typography-first hierarchy | Weight signals certainty: 700/400/300 |
| R1-017 | OD-004 | Monospace differentiation | Code in established/emerging, not exploratory |
| R1-018 | OD-004 | Pull quote at strata boundaries | Essence pullquote between geological layers |
| R1-019 | OD-004 | Tech spec aesthetic | Sharp edges, mono accents |
| R3-004 | OD-004 | CRESCENDO secondary pattern | Established(compressed) → Exploratory(expansive) |
| R5-S1 | OD-004 | Setup-payoff arc | Dense bedrock pays off with expansive exploration |

**OD-005 Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-001 | OD-005 | WAVE density rhythm | Hub=sparse, Spoke=dense, oscillation |
| R1-003 | OD-005 | Hub is one viewport, spokes are scrollable | Hub overview fits viewport |
| R1-007 | OD-005 | Callouts follow content within spokes | Positioned after referenced content |
| R1-008 | OD-005 | Max 2 callouts per spoke | Enforced per territory |
| R1-016 | OD-005 | Typography-first hierarchy | Size > Weight > Color |
| R1-018 | OD-005 | Essence pullquote at spoke transitions | Between territory sections |
| R1-019 | OD-005 | Tech spec aesthetic | Sharp edges, mono accents |
| R3-006 | OD-005 | WAVE pattern — NEW APPLIED | Hub(sparse) → Spoke(dense) → Hub(sparse return) |
| R3-036 | OD-005 | DD-F-006 FRACTAL at 4 scales | Page/section/component/character self-similarity |

**External Research (not in R1-R5):** EXT-CONF-001-012 (OD-004), EXT-SPAT-001-012 (OD-005)

**New R1-R5 status changes:** R3-006 (WAVE) moved UNAPPLIED → APPLIED via OD-005

**Header Finding ID Mismatch Flagged (OD-005):**
OD-005's builder header references R3-005 as "WAVE" and R3-007 as "ISLANDS" but per RESEARCH-ACTIVE:
- R3-005 = BOOKENDS (not WAVE)
- R3-006 = WAVE (correct pattern, wrong ID in header)
- R3-007 = Scroll-triggered density shifts (not ISLANDS — ISLANDS is R3-047)
Weaver mapped to correct IDs in this tracking file. Header prose describes the correct PATTERNS but cites wrong FINDING IDs.

---

### 2026-02-07 — OD-003 Task-Based Exploration Threading

**Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-001 | OD-003 | ISLANDS density rhythm: dense task clusters in sparse sea | Task islands separated by 80px+ sparse ocean |
| R1-003 | OD-003 | One task island per viewport scroll | Each task cluster fits viewport height |
| R1-007 | OD-003 | Callout positioning: follow content | Callouts follow steps they reference |
| R1-008 | OD-003 | Max 2 callouts per section | Max 2 callouts per task island |
| R1-016 | OD-003 | Typography-first hierarchy: Size > Weight > Color | Task title > step heading > body text |
| R1-019 | OD-003 | Tech spec aesthetic | Sharp edges, monospace step markers |
| R3-047 | OD-003 | Density Contrast: surrounding calm amplifies island density | Sparse ocean between dense task clusters |

**External Research Applied (EXT-TASK series — not in R1-R5 system):**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| EXT-TASK-001 | OD-003 | Task-oriented design: each task = discrete island | 4px red left border on task containers |
| EXT-TASK-002 | OD-003 | Progressive disclosure via step markers | Solid=complete, outline=current, gray=future |
| EXT-TASK-003 | OD-003 | Hierarchical task breakdown | Subtasks via vertical connector lines (1px solid) |
| EXT-TASK-004 | OD-003 | Negative space typography | 3rem after titles, 6rem between islands |
| EXT-TASK-006 | OD-003 | Multi-step forms pattern | Completed steps collapse, current expanded |
| EXT-TASK-009 | OD-003 | WCAG accessibility | Semantic HTML, ARIA landmarks, 3px red focus outline |
| EXT-TASK-011 | OD-003 | Verification checkpoints | "You should see" prefix in green-bordered callout |
| EXT-TASK-012 | OD-003 | Error recovery islands | "If This Fails" in coral-bordered callout |

**No new R1-R5 findings changed status** — all R1/R3 findings referenced were already APPLIED from prior work.

**Anti-Patterns Checked:**
| Anti-Pattern | Avoided | How |
|--------------|---------|-----|
| DD-F-015 (Traffic-light) | YES | No green+red callouts adjacent |
| DD-F-016 (Border inconsistency) | YES | Standardized 4px borders |
| DD-F-017 (Uniform density) | YES | Varied per ISLANDS pattern |
| DD-F-018 (Fighting the pattern) | YES | Sparse stays sparse, islands stay dense |
| R5-A1 (Callout Cacophony) | YES | Max 2 callouts per section |

---

### 2026-02-07 — OD-002 Narrative Arc Exploration Threading

**Research Applied:**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-001 | OD-002 | Narrative arc creates CRESCENDO density rhythm | Act I=sparse → Act II=medium → Act III=dense |
| R1-003 | OD-002 | One narrative beat per viewport | Each act section fits viewport height |
| R1-007 | OD-002 | Callout positioning: follow content | Callouts serve as narrative devices (foreshadowing, aside) |
| R1-008 | OD-002 | Max 2 callouts per section | 2 callouts max per act |
| R1-016 | OD-002 | Typography-first hierarchy: Size > Weight > Color | Headings mirror arc (large setup → dense resolution) |
| R1-017 | OD-002 | Monospace differentiation | Code appears at conflict/resolution, not setup — NEW APPLIED |
| R1-018 | OD-002 | Pull quote magazine technique | Essence pullquote as act break |
| R1-019 | OD-002 | Tech spec aesthetic | Sharp edges, monospace accents |
| R3-004 | OD-002 | CRESCENDO (sparse→dense) validated | Progressive density increase across 3 acts |
| R5-S1 | OD-002 | Setup-payoff arc | Narrative setup pays off in code resolution |

**New Findings Generated (OD-F from OD-002):**
(Pending — OD-002 not yet audited for new findings)

**Anti-Patterns Checked:**
| Anti-Pattern | Avoided | How |
|--------------|---------|-----|
| DD-F-015 (Traffic-light) | YES | No green+red callouts adjacent |
| R5-A1 (Callout Cacophony) | YES | Max 2 callouts per section |
| R5-A5 (Temperature Whiplash) | YES | Gradual temperature transitions via act structure |

### 2026-02-07 — OD-006 Emergent Synthesis Threading (Crown Jewel)

**Research Applied (11 NEW R1 findings moved to APPLIED):**
| Finding ID | Applied In | How | Evidence |
|------------|------------|-----|----------|
| R1-002 | OD-006 | 38% Retention Rule — generous whitespace between discovery sections | Breathing zones between all major content |
| R1-004 | OD-006 | Three-Column Doctrine — meta-system map layout | Pattern comparison in multi-column grid |
| R1-005 | OD-006 | Responsive Collapse — grid to single column at 768px | CSS media query breakpoint |
| R1-006 | OD-006 | Horizontal Comparison Break — OD pattern comparison | Side-by-side org-density pairing matrix |
| R1-009 | OD-006 | Code-Adjacent Callout — warning before, insight after | Positioned relative to code blocks |
| R1-011 | OD-006 | Default Story Pattern — minimal state start | Each section begins with observation before elaboration |
| R1-013 | OD-006 | Do/Don't Grid — pattern comparison matrix | Organization-to-density pairing table |
| R1-015 | OD-006 | Recipe Pattern — combining org patterns | All 5 OD patterns combined in one document |
| R1-022 | OD-006 | File Tree Visualization — provenance chain | ASCII tree showing DD→OD discovery chain |
| R1-025 | OD-006 | Branded Shell — documentation as brand | Meta-doc IS the KortAI brand touchpoint |
| R1-026 | OD-006 | Collapsible Callouts — depth-on-demand | <details> elements for supplementary information |

**Previously APPLIED findings also used in OD-006:**
R1-001, R1-003, R1-007, R1-008, R1-010, R1-016, R1-017, R1-018, R1-019, R3-003, R3-004, R3-006, R3-010, R3-036, R3-047, R5-S1, R5-T4

**External Research (not in R1-R5):** EXT-CREATIVE-001 through EXT-CREATIVE-009 (9 of 12 creative techniques integrated)

**New Findings Generated:**
| Finding ID | Name | Description |
|------------|------|-------------|
| OD-F-005 | Organization IS Density | Org pattern IS density pattern — same phenomenon, two perspectives |
| OD-F-006 | Meta-Documentation as Purest Test | Content that IS principles creates most natural density |
| OD-F-007 | Mode-Transition Breathing | Switching between org modes requires breathing zones |
| OD-F-008 | Compound Creative Techniques | Multiple EXT-CREATIVE techniques compound when layered |

**Anti-Patterns Checked:**
| Anti-Pattern | Avoided | How |
|--------------|---------|-----|
| DD-F-015 (Traffic-light) | YES | No green+red callouts adjacent |
| DD-F-016 (Border inconsistency) | YES | Standardized 4px/3px/2px hierarchy |
| DD-F-017 (Uniform density) | YES | Density varies by section org mode |
| DD-F-018 (Fighting the pattern) | YES | Each section's density emerges from its org mode |
| R5-A1 (Callout Cacophony) | YES | Max 2 callouts per section |
| R5-A5 (Temperature Whiplash) | YES | Gradual transitions between editorial moods |

---

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Last Updated:** 2026-02-07
**Purpose:** Track ALL 337 research findings and their application status
**Update Frequency:**
- After each research agent completes: Add findings
- After each exploration/section built: Mark findings as applied
- End of Phase 3: Verify all findings considered

**Critical:** This is the CENTRAL TRUTH for research application.
Every piece of work MUST update this file.

**Related Files:**
- RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md — Fill-in form for each task
- CLAUDE.md — Project-level mandatory research protocol
- MASTER-STATE.md — Current project position
- DISCOVERIES-LOG.md — Learnings from explorations
