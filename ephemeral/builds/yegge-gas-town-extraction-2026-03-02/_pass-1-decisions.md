# Pass 1 Decisions

## Metaphor Applied
Industrial control tower — vertical descent through tower floors from warm Overseer surface to dark Beads bedrock. The metaphor shaped the 6-zone skeleton: warm cream → white operations → dark bedrock → earthy philosophical plateau → earthy factory floor → warm cream return. CSS naming uses `tower-*` prefix for zone backgrounds and `zone--` prefix for section classes.

## Zone Architecture

| Zone | Name | Purpose | Background | Heading Size | Padding | Content Sections |
|------|------|---------|------------|-------------|---------|-----------------|
| 1 | `zone--overseer` | Warm orientation, provocative opening | `#FEF9F5` (tower-surface) | 2rem | 80px top / 64px | You Are Here, Who is Yegge, Gas Town Mental Model |
| 2 | `zone--operations` | Dense structural blueprint | `#FFFFFF` (tower-coordination) | 1.625rem | 48px | 8 Roles Architecture (full section) |
| 3 | `zone--bedrock` | Maximum density, dark zone | `#1A1A1A` (tower-bedrock) | 1.375rem | 32px top / 40px | Beads Memory System |
| 4 | `zone--philosophical` | Breathing plateau, conviction | `#FAF5ED` (tower-execution) | 1.625rem | 64px | 6 Waves of AI, Core Principles |
| 5 | `zone--factory` | Dense-practical, code-heavy | `#FAF5ED` (tower-execution) | 1.5rem | 40px | Implementation, Checkpoints, Troubleshooting |
| 6 | `zone--resolution` | Warm return, resolution | `#FEF9F5` (tower-surface) | 1.625rem | 64px | When to Use, Quotes, Comparison, Sources, Appendix, Cost |

## Mechanisms Deployed

1. **M01 Geological Stratification** — 6 zone backgrounds encode tower descent. Each zone has a distinct `--tower-*` variable. Background arc: warm cream → white → dark → earthy → earthy → warm cream.

2. **M02 Border-Weight Gradient** — 3-tier hierarchy in 8 Roles section: `.role-card--town` (4px border), `.role-card--rig` (3px), `.role-card--worker` (1px). Also applied in Beads bedrock with `.memory-tier--hot/warm/cold` using 4px/3px/1px.

3. **M03 CRESCENDO Typography Compression** — Heading sizes descend: 2rem (Zone 1) → 1.625rem (Zone 2) → 1.375rem (Zone 3 bedrock) → 1.625rem (Zone 4) → 1.5rem (Zone 5) → 1.625rem (Zone 6). Line-height: 1.8 → 1.7 → 1.6 → 1.7 → 1.65 → 1.7. Body font-size: 1rem → 1rem → 0.9375rem → 1rem.

4. **M04 Velocity Interleaving** — `.voice-eruption` class (Instrument Serif italic, 4px red left-border) deployed between heavy role cards in Zone 2 and between code blocks in Zone 5. `.meta-indicator` labels (12px uppercase mono) between code blocks as FAST metadata.

5. **M05 Fractal Self-Similarity** — Page-level: sparse/dense/sparse zone padding. Section-level: role cards have sparse header (mono uppercase label) + dense body. Component-level: callout sparse label + dense body. Character-level: heading letter-spacing tight (-0.02em) vs body standard.

6. **M06 PULSE Alternation** — `.pulse-pair` with width-differential labels (max-width: 70%) for Q&A pairs in Zone 1. `.quote-item` with voice/context pulse in Zone 6 Quotes section.

7. **M07 BRIDGE Transitions** — `.register-bridge` elements (48px padding) at zone boundaries. Between Zone 1→2 (Provocative→Reference), Zone 4→5 (Narrative→Code), Zone 5→6 (Code→Provocative). Dark-to-earthy shift (Zone 3→4) is its own visual bridge.

8. **M08 Density Wave Sequencing** — `--density-*` custom properties: sparse (64px), moderate (48px), dense (40px), maximum (32px). Inter-element spacing tightens per zone: 24px → 16px → 12px → 24px.

## CSS Naming Vocabulary

| Custom Property | Maps To | Token Value |
|----------------|---------|-------------|
| `--tower-surface` | Overseer/resolution bg | `#FEF9F5` |
| `--tower-coordination` | Operations bg | `#FFFFFF` |
| `--tower-execution` | Philosophy/factory bg | `#FAF5ED` |
| `--tower-bedrock` | Beads dark bg | `#1A1A1A` |
| `--density-sparse` | Opening/resolution padding | `64px` |
| `--density-moderate` | Transition padding | `48px` |
| `--density-dense` | Operations/factory padding | `40px` |
| `--density-maximum` | Bedrock padding | `32px` |

Classes: `.zone--overseer`, `.zone--operations`, `.zone--bedrock`, `.zone--philosophical`, `.zone--factory`, `.zone--resolution`, `.role-card--town/rig/worker`, `.voice-eruption`, `.memory-tier--hot/warm/cold`, `.factory-declaration`, `.register-bridge`, `.pulse-pair`, `.quote-item`.

## Responsive Strategy
Desktop-first with two breakpoints:
- **1024px:** Collapse town-level role grid to single column, reduce header title.
- **768px:** Reduce all zone padding, shrink headings by ~0.125-0.25rem, single-column everything, smaller code blocks (12px), reduce side padding to 16px. All content remains readable, no horizontal overflow.

## Open Questions for Pass 2

1. **Town-Level role grid:** Currently 2-column bento with Mayor spanning full width. Pass 2 could refine visual weight distribution within the grid (e.g., wider Mayor vs narrower Deacon/Dogs).
2. **ASCII diagram width:** Several ASCII diagrams are wide. Consider whether the largest (Role Hierarchy, Communication Flow) should break the content column width for full-width treatment.
3. **Wave 6 highlight:** Currently using bold + 3px red border-bottom on the Wave 6 table row. Could be strengthened with background color or pull-out treatment.
4. **Troubleshooting pattern density:** 6 trouble patterns in sequence may feel repetitive. Consider whether some should be collapsed/summarized.
5. **Callout frequency in Zone 5:** Multiple "Checkpoint" callouts in the Implementation section. Verify max 2 callouts per ~800px vertical viewport section per soul checklist.
6. **Dark zone code blocks:** Code blocks within the bedrock zone use slightly different border treatment (#444444). Verify contrast is sufficient.
7. **Footer closing quote:** Used Instrument Serif italic for the "Build a colony" closing quote in the dark footer. Verify this is appropriate per soul constraints (Instrument Serif for display headings + Essence callout body ONLY).
