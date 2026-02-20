# Lock Sheet -- Yegge Gas Town Page

## LOCKED (Soul) -- Cannot change
- Container: 960px max-width
- border-radius: 0 everywhere (0 violations, CONFIRMED)
- box-shadow: none everywhere (0 violations, CONFIRMED)
- Font trinity: Instrument Serif, Inter, JetBrains Mono (with standard fallbacks)
- Warm palette: R >= G >= B on zone backgrounds (#FEF9F5, #F5EDE0, #1A1A1A all compliant)

## LOCKED (Research) -- Changing risks regression
- Zone background deltas: All >= 21 RGB (exceeds 15 threshold by +6)
- Stacked gaps: Max 112px (within 120px threshold)
- Skip link: Present, first focusable, targets #main-content
- ARIA landmarks: 8 (header, main, 5 sections, footer)
- Component variety: 54 distinct classes (exceeds 8 threshold by +46)
- Fractal echo table: 5 rows, all CSS evidence populated, direction consistent
- Cascade value table: 169 lines, values at every boundary
- Mechanisms: 16 across all 5 categories (S:3, H:3, C:3, D:2, N:5)
- Metaphor: ASSEMBLY LINE (structural -- drives bg, spacing, border, typography choices)
- Drop caps: 2 (one per half)
- Dark header/footer bookends with 3px accent borders

## CHALLENGEABLE (Builder) -- Can be improved
- **Callout rgba tints** (SC-04 FAIL): 3 callout backgrounds use cool RGBA at 4% opacity. Need warm equivalents.
- **HTML/bento-cell pure B/W** (SC-05 FAIL): HTML default black, one white bento-cell. Need warm replacements.
- **Interior multi-coherence** (SC-13 FAIL): 4/6 boundaries only shift 1-2 channels. Need: zone-specific h2 sizes, letter-spacing variation, border-left per zone, padding differentiation.
- **Transition types** (DG-4 FAIL): Only BRIDGE + SMOOTH. Need at least one BREATHING transition.
- Interior zone heading typography (all h2 at 26px with identical weight/letter-spacing)
- Zone entry padding uniformity
- Section indicator styling uniformity across zones
