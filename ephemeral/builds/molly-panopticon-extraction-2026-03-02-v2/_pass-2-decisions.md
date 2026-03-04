# Pass 2 Decisions

## Findings Deployed

**18 of 23 findings deployed** (Findings 1-5, 7-9, 11-17, 19-20, 23 applied; Findings 6, 10, 18, 21, 22 partially implicit in zone architecture already set by Pass 1):

- **F1 (Fractal self-similarity)**: Deployed at 4 scales — page-level zone alternation (sparse/dense), section-level spacing compression, component-level 2-zone DNA (label dense + body sparse in instrument panels and callouts), character-level font register shifts. F1 and F23 (2-zone code blocks) interact: the code header/body split is fractal rhythm at component scale, mirroring the page-level sparse/dense alternation.
- **F2 (3-way unification)**: Zone axis pairings preserved from Pass 1. No separate layering applied.
- **F3 (PULSE width differential)**: Applied in Zone 4 as claim/response alternation (100% width claims vs 80% indented responses) and in Zone 6 as gentle odd/even constellation quote indent alternation. F3 and F12 interact in Z6: the pull quote styling provides the visual identity while PULSE provides the spatial rhythm.
- **F4 (CRESCENDO spacing compression)**: Inter-zone spacing progression verified: Z1 (80px) → Z2 (48px) → Z3 (48px) → Z4 (64px breathing break) → Z5 (40px) → Z6 (80px release). Within-zone section margins also graduate.
- **F5 (Mode-transition breathing)**: All 5 corridors enriched with appropriate transition grammar. BRIDGE corridors (1→2, 3→4, 4→5) now carry prose bridge text signaling register shift. SMOOTH corridors (2→3, 5→6) remain bg-shift only. Each boundary shifts a different combination of channels — no metronomic repetition.
- **F7 (Density contrast at emotional peaks)**: $2000 story gets own wrapped div with compressed line-height (1.6 vs zone default 1.8). Goodhart inversion gets expanded margin (space-12). Contrast ratio between adjacent sections >= 1.5x in padding.
- **F8 (Density debt recovery)**: `pre + *` recovery margins deployed. After Zone 3 table: 48px gap. After code blocks: 32px gap to next element.
- **F9 (Density rhythm oscillation)**: Zone density levels verified: Z1 LOW, Z2 HIGH, Z3 MEDIUM, Z4 LOW, Z5 HIGH, Z6 LOW.
- **F11 (Viewport principle)**: Violent gap waypoint gets 56px vertical padding + 48px margin — approaches one viewport at 1440px.
- **F12 (Pull quotes as landmarks)**: Blockquotes get Instrument Serif italic, 3px border, max-width 85% for ragged right edges.
- **F13 (Whitespace as content)**: `--quote-gap: 56px` custom property for constellation inter-quote spacing (distance between stars).
- **F14 (Cinematic wide-close-wide)**: Prose zones (Z1, Z4, Z6) use 720px max-width reading corridor. Code zones (Z2, Z5) use full container width.
- **F15 (Velocity mismatch)**: `pre + pre` gets 48px margin. Velocity bridge prose elements interleaved between all consecutive code blocks in Z2 and Z5.
- **F16 (Semantic proximity)**: Custom properties `--gap-tight: 12px`, `--gap-standard: 24px`, `--gap-section: 48px` defined. Applied to anti-pattern symptom/solution pairs and heading-to-content spacing.
- **F17 (Contrast creates harmony)**: Philosophy zones use warm register (Instrument Serif, #FEF9F5, LH 1.8). Code zones use cold register (JetBrains Mono, #1A1A1A, LH 1.5). Inter zone transitions use neutral Inter bridges.
- **F19 (Component moods)**: Temperature buffer paragraph added before Goodhart inversion — neutral Inter voice between warm philosophy and cold warning. Cold register inside inversion (tighter LH 1.7).
- **F20 (F-pattern)**: All prose zones get left-aligned headings, 720px max-width reading corridor via `.prose-corridor` utility class.
- **F23 (2-zone code blocks)**: All code blocks converted to header (#27272A) + body (#1A1A1A) structure. Headers use mono 11px uppercase labels. 10 code blocks converted total.

## Questions Deepened / Explored

- **Q2: Typographic temperature shift**
  - Pass 1 covered channels: font-family, font-style, font-size
  - Pass 2 extended to channels: letter-spacing (0.005em for philosopher), line-height (1.85 for philosopher vs 1.8 standard), paragraph spacing (space-6 vs space-4)
  - Total channels now coordinated: 6 of 7
  - CSS generated: `.voice--philosopher` enriched with letter-spacing and margin rules

- **Q4: Epistemic gravity gradient** (NEW — not explored in Pass 1)
  - Explored channels: border-weight (1px), padding (space-8 inside quotes), margin (space-10 around), max-width (85%)
  - Total channels coordinated: 4 of 7
  - CSS generated: Zone 4 blockquote enrichment + PULSE claim/response width differential encodes epistemic uncertainty through spatial generosity

- **Q5: Isolation → Correlation → Synthesis at 3 scales** (NEW — not explored in Pass 1)
  - Page scale: Zone 2 (isolated domains) → Zone 3 (correlated evidence) → Zone 6 (synthesized meaning)
  - Section scale in Z6: constellation quotes (isolation) → mental model summary (correlation, wrapped in `.mental-model-summary`) → synthesis connections section (synthesis)
  - Component scale: individual panel (isolation) → handoff channel (correlation) → bento grid (synthesis)
  - Total channels coordinated: 3 scales (structural, not visual — expressed through content grouping and section transitions)

- **Q6: Observatory corridors** (DEEPENED from Pass 1)
  - Pass 1: 5 corridors structurally present but atmospherically thin
  - Pass 2: 3 BRIDGE corridors enriched with prose bridge text (`.corridor__bridge-text`). 2 SMOOTH corridors left minimal. Each corridor now shifts a different channel combination, preventing metronomic repetition.

## Enrichment vs Preservation Report

**Enrichment actions (density added WITHIN zones):**
- Zone 1: $2000 story wrapped in density-compressed div, violent gap margin increased, blockquote max-width added
- Zone 2: All code blocks converted to 2-zone (header + body), handoff channel element added to bento grid, velocity bridge prose interleaved between code blocks, gap increased to 32px for isolation
- Zone 4: PULSE width differential (claim/response), temperature buffer paragraph, Goodhart margin enrichment, voice--philosopher letter-spacing/LH extension
- Zone 5: Checkpoint status indicators added, anti-pattern density variation (nth-child even), velocity bridges before code blocks, all code blocks converted to 2-zone
- Zone 6: Constellation quotes get 56px gap + PULSE indent alternation + max-width 85%, mental model wrapped for Q5 structure
- All corridors: bridge text added to BRIDGE-type transitions

**Preservation actions (structure kept from Pass 1):**
- All custom property names preserved (--dome-interior, --instrument-light, etc.)
- All 6 zone class names preserved (.zone--threshold, .zone--instruments, etc.)
- All zone sub-zone preserved (.zone--nightsky-synthesis)
- All content sections present — no removals
- Responsive breakpoint structure at 1024px and 768px preserved and extended
- Transition table updated in-place (not deleted)

**Structural changes:**
- Added `--space-14: 56px` to spacing scale (was missing, needed for quote gap)
- Added 3 new custom properties: `--gap-tight`, `--gap-standard`, `--gap-section`, `--gap-zone`, `--quote-gap`, `--code-header-bg`, `--code-body-bg`
- Added `.prose-corridor`, `.corridor__bridge-text`, `.velocity-bridge`, `.handoff-channel`, `.temperature-buffer`, `.story--subscriptions`, `.pulse--claim`, `.pulse--response`, `.mental-model-summary`, `.checkpoint__status`, `.code-header`, `.code-body` classes

## Case Study Techniques Integrated

- **DD-003 Islands → Zone 2**: Self-contained panels with 32px isolation gaps (increased from 24px). Handoff channel as visually subordinate data conduit spanning full grid width. Rejection of connective tissue between panels — gap IS the isolation architecture.
- **OD-004 Confidence → Zones 2-4**: Border-weight gradient (4px established → 3px demonstrated → 1px philosophical) plus inverse density-confidence correlation. Zone 4 gets wider spacing to encode lower epistemic certainty.
- **DD-006 Fractal → All Zones**: Dense/sparse alternation at 4 scales. Component-scale 2-zone DNA (label dense + body sparse) in instrument panels, callouts, and code blocks.

## Density Self-Assessment

- **Above the fold (1440px):** Zone 1 conveys the observatory metaphor — generous spacing, Instrument Serif display, warm cream background. The violent gap waypoint is visible within first 1-2 scrolls and creates a perceptible density break. The philosopher's voice is clear.
- **Mid-page:** Visible density shift from Zone 1 (sparse) through Zone 2 (dense bento grid + dark code blocks) to Zone 3 (moderate data table). The 2-zone code blocks add visual richness within the dense zone. PULSE width alternation in Zone 4 creates a distinct rhythm.
- **Closing zone:** Zone 6 resolves with generous 80px padding, 56px inter-quote gaps, and PULSE indent alternation. The constellation field feels like discrete observations rather than a list. The synthesis sub-zone on observation-plate background provides a gentle step-down before the footer.

## Concerns for Pass 3

- Anti-pattern blocks may still feel visually similar despite nth-child density variation — Pass 3 should verify perceptual differentiation at 1440px
- Velocity bridges between code blocks are functional but may need font-size or color fine-tuning for perceptual distinctness from regular paragraphs
- PULSE claim/response width differential in Z4 should be verified at 768px — the responsive rule removes indentation but the max-width change needs validation
- The `:not(:has(.code-body))` selector for fallback pre padding may not work in all target browsers — Pass 3 may need fallback
- Q5 (isolation→correlation→synthesis) is expressed structurally rather than visually — Pass 3 could add visual signals (border weight shifts, bg shifts) at each scale transition
