# Pass 2 Decisions

## Findings Deployed (18 of 20)

| # | Finding | Target Zone | CSS/HTML Action Taken |
|---|---------|-------------|----------------------|
| 1 | 3-Way Unification | All | No CSS added — confirmed the zone backgrounds + spacing from Pass 1 ARE the density pattern. Trust the equivalence. |
| 2 | Fractal at 5 Scales | All | Verified at page/zone/section/element scales. No 5th scale added (no TOC warranted). Pass 1 deployment confirmed. |
| 3 | CRESCENDO via Two-Level Spacing | Cartouche, Grid | Confirmed inter-zone padding compresses (80→48→40) while intra-zone paragraph spacing (20px margin-bottom) stays constant. |
| 4 | PULSE via Content Alternation | Cartouche, Annotations | Deployed `.claim { max-width: 70% }` for thesis statements. Width differential creates pulse between claims and evidence. Responsive reset at 768px. |
| 5 | Sequential Compound | All | Verified one structure per zone. Grid = F-pattern descent. Annotations = single-column reflective. Legend = collected list. No competing patterns. |
| 6 | One concept per viewport | Cartouche | 80px top padding confirmed on cartouche. $2000 story separated with 48px margin-top via `.cartouche-section--payoff`. |
| 7 | Setup-Payoff Arc | Cartouche | Added `border-top: 1px solid` + `padding-top: 48px` before $2000 story section. The payoff "arrives" after a visual breath. |
| 8 | White space as content | Cartouche | 80px top padding confirmed. "Almost uncomfortable in its openness" achieved. |
| 9 | Semantic proximity | Grid (Part II) | Domain cards split into Work/Life clusters with `.domain-cluster` + `.domain-cluster__label`. 16px gap within pairs, 40px between clusters. Adapted from DD-003. |
| 10 | Code-wall avoidance | Grid (Parts IV-V), Data (IX, XII) | Added `.prose-connector` elements between consecutive code blocks. 32px minimum gap maintained. No 3+ code blocks without breathing. |
| 11 | Monospace differentiation | All | Inline code styled with `background: #F0EBE3; padding: 2px 6px; border: 1px solid` — domain paths pop as data points. |
| 12 | Tech spec aesthetic | Grid (Part V) | Table headers: `font-weight: 500`, `border-bottom: 3px solid`. Minimal styling. No cell borders. |
| 13 | F-Pattern | Grid | `text-align: left` on all h2/h3/h4. Left-scanning channel carries structure. |
| 14 | Cinematic wide/close/wide | Grid, Annotations | Added `.close-up { max-width: 640px; padding-left: 24px }` for specific details. Applied to key paragraphs in Parts III, IV, V. Responsive collapse at 1024px and 768px. |
| 15 | Density contrast (V→VI) | Annotations | Confirmed: Part V tight (40px) → Part VI opening (56px, fieldwork background). Maximum visual contrast at Goodhart's Law. The page exhales. |
| 16 | Density debt recovery | Annotations | Added `.annotations-opening { font-size: 17px; line-height: 1.85 }` on Part VI opening paragraph. Slightly larger, more generous than surrounding text. |
| 17 | Contrast creates harmony (Flutterwhat) | Annotations | `.rival-annotation` gets `margin-left: 48px` (additional indent beyond the 80px asymmetric margin). Attribution markers in monospace. Responsive reset at 1024px/768px. |
| 18 | Pull quotes as structural elements | Legend | Legend entry `margin-bottom` increased from 24px to 48px. One-per-viewport rhythm achieved. |
| 19 | Progressive disclosure | Data (Part XII) | Build Guide checkpoints converted from static `.checkpoint` divs to `<details class="checkpoint-details">` elements. Summary shows checkpoint title; body is collapsible. Custom marker styling (+ / -). |
| 20 | Zone labels | All 5 zones + header | Added `.zone-label` (11px mono uppercase, 0.08em letter-spacing) at the top of each zone: THE CARTOUCHE, THE SURVEY GRID, THE ANNOTATIONS, THE FIELD NOTES, THE LEGEND, TERRA INCOGNITA. Dark variant for bedrock zone. |

## Density Adjustments
- Density wave MATCHES the Section 4 diagram: Sparse (80px cartouche) → Building (48px grid arch) → Dense (40px grid impl) → BREATHING (56px annotations) → Building (48px field notes) → Moderate (64px legend) → Sparse (64px terra incognita).
- The CLIMACTIC transition (Grid:Impl → Annotations) confirmed as maximum contrast: tight→breathing, white→fieldwork, instrument→annotator, plus the new density debt recovery (17px/1.85 opening paragraph).
- No divergences from the diagram.

## Case Study Techniques Integrated
1. **DD-003 (Survey Region Isolation):** Domain cards split into Work/Life clusters with extreme whitespace (40px) between groups and tight (16px) within. The 2-column grid within clusters maintained. Vocabulary adapted: "islands/ocean" → domain clusters on the survey map.
2. **DD-004 (Spacing Compression):** WAVE pattern confirmed and reinforced. 4-zone compression (80→48→40→56→48→64→64px) deployed as non-monotonic wave, not linear descent. Close-up indentation (.close-up class) creates secondary compression within zones.
3. **OD-004 (Certainty Encoding):** Border-weight gradient (4px measured / 3px structural / 3px lighter for contested / 1px projected) carried from Pass 1. Anti-pattern blocks use 4px red borders (contested territory). Terra incognita uses exclusively 1px borders (speculative/projected). Interior contrast in terra incognita enhanced with `.terra-subsection` separators at #2A2A2A.

## Density Self-Assessment
- **Above the fold (1440px):** Header (dark bedrock + Instrument Serif italic + red border) → Cartouche zone label in mono → Part I heading. The metaphor lands immediately. The generous 80px padding communicates confidence. The cartographer's voice (serif italic) establishes authority.
- **Mid-page:** Visible density shift from cartouche (sparse prose, 80px) into survey grid (tight code blocks, 48px→40px, domain cards). The Grid→Annotations transition is the strongest shift — background changes, spacing opens, the annotator's 15px reduced voice and asymmetric margins signal a different hand on the map. The annotations opening paragraph at 17px/1.85 provides genuine breathing after the code-dense grid.
- **Closing zone:** Legend entries at 48px spacing provide measured resolution — the cartographer returns. Terra incognita's dark bedrock inverts everything. The page resolves through darkness, not brightness. Interior contrast via `.terra-subsection` separators prevents the dark zone from being a monolithic block.

## Changes to Zone Architecture
- **Cartouche:** Added `.cartouche-section--payoff` class for explicit setup→payoff boundary (Finding 7).
- **Survey Grid:** Domain cards reorganized into Work/Life clusters with cluster labels (Finding 9).
- **Annotations:** Opening paragraph gets distinct generous treatment (Finding 16). Rival annotation gets additional left margin (Finding 17). Community attributions marked in monospace (Finding 17).
- **Survey Data/Field Notes:** Checkpoints converted to `<details>` progressive disclosure (Finding 19).
- **Legend:** Inter-entry spacing increased 24px→48px (Finding 18).
- **Terra Incognita:** Added `.terra-subsection` for interior contrast. Zone label uses `--dark` variant.
- **All zones:** Zone labels added at zone entry points (Finding 20).

## Concerns for Pass 3
- The `.close-up` indentation (24px left padding + 640px max-width) may feel too subtle at some viewports. Pass 3 should verify perceptually.
- The `.claim` width differential (70% max-width) could be more aggressive or could be too subtle. Needs perceptual check.
- The annotations zone with 80px left padding + 48px rival-annotation margin-left creates a very narrow content column. At 1024px this reduces to 48px + 24px, which is better. Verify no content truncation.
- Legend entries at 48px spacing may feel too generous on mobile (reduced to 32px at 768px). Verify rhythm holds.
- The prose connector (`.prose-connector`) between code blocks works structurally but its visual treatment (1px left border, secondary color) may be too timid. Pass 3 could strengthen it.
- Terra incognita interior contrast improved but still relies heavily on the dark inversion. Consider whether the `.terra-subsection` borders (#2A2A2A) are perceptible enough.
