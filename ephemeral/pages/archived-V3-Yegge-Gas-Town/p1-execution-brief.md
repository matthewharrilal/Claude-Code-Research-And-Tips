# Execution Brief: Steve Yegge and Gas Town

Content: MIXED | Mode: COMPOSED | Zones: 6 | Metaphor: The Settlement/Outpost

---

## TIER 1: IDENTITY — The World You Inhabit

Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world.

Light is direct. Nothing floats. Nothing hovers above the page. Surfaces sit flat against each other.

The page has a spine. Content lives within 940-960px. The spine holds.

This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm.

Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code.

Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces.

Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist.

Borders speak. 4px = primary emphasis. 3px = section-level. 1px = subtle articulation. This hierarchy is absolute.

The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful.

Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic.

---

## TIER 2: PERCEPTION PHYSICS — The Natural Laws

Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle, 25 = confident, 50 = dramatic. Use the full range.

Letter-spacing below 0.025em is invisible. When applying letter-spacing, stay above 0.025em. Compositional range: 0.03-0.05em.

When padding-bottom + margin-bottom + padding-top between content blocks exceeds 120px total, the eye registers a void -- the page appears broken, not breathing. Compositional range: 60-90px (generous but purposeful).

No single margin or padding value exceeds 96px. If a transition needs more separation, use a structural element, not more whitespace.

Container width: 940-960px. Content beyond 960px loses the reader's eye.

---

### PRIORITY OVERRIDE: Tier 2 vs Tier 3 Conflicts

When Tier 3 creative decisions conflict with Tier 2 perception physics:
- **Tier 2 WINS** for: background deltas (>= 15 RGB), letter-spacing (>= 0.025em), stacked gaps (<= 120px), single margins (<= 96px)
- **Tier 3 WINS** for: metaphor interpretation, component selection, layout patterns, color accents, typography beyond thresholds
- Zone backgrounds specified in Tier 3 MUST satisfy Tier 2 delta requirements -- creative authority does not override perception physics

**Worked examples:**
- Two zone backgrounds with only 5 RGB delta between them — Tier 2 overrides: shift the lighter zone to create delta 24 (confident intensity)
- Brief says letter-spacing `0.01em` for dense reference text — Tier 2 overrides to `0.03em` (compositional range, above 0.025em floor)
- Brief metaphor says "compressed industrial" styling with 40px padding — Tier 3 WINS here because 40px is within Tier 2 limits (under 96px single, under 120px stacked) — keep the metaphor-driven choice

---

## TIER 3: COMPOSITIONAL FRAMEWORKS

### Zone Background Assignments (LOCKED — D-09 Enforced)

These hex values are FIXED. Creative authority applies to everything else, but these backgrounds are not modifiable.

| Zone | Name | Background | RGB |
|------|------|-----------|-----|
| Header | Settlement Gate | `#1A1A1A` | (26,26,26) |
| Z1 | Orientation & Context | `#FEF9F5` | (254,249,245) |
| Z2 | Who & Why | `#F0EBE0` | (240,235,224) |
| Z3 | Architecture Core | `#E5DDD0` | (229,221,208) |
| Z4 | Philosophy & Principles | `#FAF5ED` | (250,245,237) |
| Z5 | Implementation & Operations | `#EDE6DA` | (237,230,218) |
| Z6 | Reference & Context | `#FDF6E5` | (253,246,229) |
| Footer | Settlement Wall | `#1E1E1E` | (30,30,30) |

**Boundary deltas** (all adjacent pairs >= 15 RGB, verified against `#E83025` accent):

| Boundary | Color A | Color B | RGB Delta | Intensity |
|----------|---------|---------|-----------|-----------|
| Header -> Z1 | `#1A1A1A` | `#FEF9F5` | 224 | dramatic (entry into settlement) |
| Z1 -> Z2 | `#FEF9F5` | `#F0EBE0` | 21 | subtle (widening, same territory) |
| Z2 -> Z3 | `#F0EBE0` | `#E5DDD0` | 16 | subtle (deepening into the core) |
| Z3 -> Z4 | `#E5DDD0` | `#FAF5ED` | 29 | confident (release from peak — entering the valley) |
| Z4 -> Z5 | `#FAF5ED` | `#EDE6DA` | 19 | subtle (second climb begins) |
| Z5 -> Z6 | `#EDE6DA` | `#FDF6E5` | 16 | subtle (easing toward resolution) |
| Z6 -> Footer | `#FDF6E5` | `#1E1E1E` | 223 | dramatic (settlement wall) |

Compositional target met: 2 dramatic boundaries (header/footer), 1 confident boundary (Z3->Z4 valley transition), 4 subtle boundaries. The Z3->Z4 boundary carries the strongest interior shift — the release from the architecture peak into the philosophical valley. The red accent `#E83025` marks structural boundaries (header border, zone dividers) — it is the settlement's signal color.

### Multi-Coherence (6 channels, boundary-by-boundary)

Six coherence channels operate across this page:
1. **Background color** — zone-to-zone deltas from the locked table above
2. **Typography** — font-size, weight, letter-spacing shifts at zone boundaries
3. **Spacing** — padding and margin compression/expansion encoding density
4. **Borders** — 4px/3px/1px weight shifts marking hierarchy transitions
5. **Color accents** — accent hue and tint shifts per zone character
6. **Components** — component density and variant modulation per zone

**Boundary-by-boundary channel mapping:**

**Z1 -> Z2** (Orientation to Context) = **light transition** (1px border + 48px gap = legato)
Channels shifting: background (subtle), typography (body 18px -> 16px, H2 40px -> 32px), spacing (80px top -> 64px top). The reader is settling in — same territory, slightly more focused.

**Z2 -> Z3** (Context to Architecture Core) = **heavy transition** (3px red border + 64px gap + background shift = full stop)
Channels shifting: background (subtle), typography (body 16px -> 15px, line-height 1.7 -> 1.6, letter-spacing adds 0.04em on labels), spacing (64px -> 48px compression), borders (3px red divider appears), components (ASCII diagrams, code blocks, multi-column role grids emerge). This is the doorway to the factory floor — everything tightens.

**Z3 -> Z4** (Architecture Core to Philosophy) = **medium transition** (3px border + 80px gap = breathing rest)
Channels shifting: background (confident — 29 delta, the strongest interior shift), typography (body 15px -> 16px decompresses, line-height 1.6 -> 1.7, letter-spacing relaxes), spacing (48px -> 64px expansion), borders (1px subtle dividers replace 3px structural), components (tables/grids yield to flowing prose). Valley between peaks — the reader exhales.

**Z4 -> Z5** (Philosophy to Implementation) = **medium transition** (3px border + 64px gap)
Channels shifting: background (subtle), typography (16px holds but letter-spacing returns at 0.04em on labels, code font increases), spacing (64px -> 48px recompression), borders (3px structural returns), components (checklists, code blocks, step-by-step structures appear). Second ascent — hands-on density.

**Z5 -> Z6** (Implementation to Reference) = **light transition** (1px border + 48px gap = legato)
Channels shifting: background (subtle), typography (15px -> 15px holds, but H2 shrinks to 28px — reference scale), spacing (48px holds — consistent browse density), components (comparison tables, citation lists, browsable reference). The settlement ledger — scannable, not sequential.

**Three distinct transition types deployed:**
- **Light** (legato): Z1->Z2 and Z5->Z6 — similar-density zones flowing into each other
- **Medium** (breathing rest): Z3->Z4 and Z4->Z5 — the valley transitions, entering and leaving the philosophical pause
- **Heavy** (full stop): Z2->Z3 — entering the architecture core, the single biggest content-type shift on the page

### Structural Metaphor: The Settlement / Outpost

The content IS a Mad Max: Fury Road reference. "Gas Town" names an architecture where roles (Mayor, Deacon, Dogs, Crew) impose just enough structure on productive chaos. The page should feel like it was built IN Gas Town, not about Gas Town.

Map the metaphor to CSS structure through concept-named custom properties:

```
--settlement-gate: #1A1A1A        /* header — the fortified entrance */
--outpost-yard: #FEF9F5           /* Z1 — arrival/orientation area */
--outpost-commons: #F0EBE0        /* Z2 — the common ground, who and why */
--factory-floor: #E5DDD0          /* Z3 — the working heart, 8 roles + Beads */
--command-post: #FAF5ED           /* Z4 — where philosophy is decided */
--supply-depot: #EDE6DA           /* Z5 — operational implementation */
--settlement-ledger: #FDF6E5      /* Z6 — reference records and comparisons */
--settlement-wall: #1E1E1E        /* footer — the perimeter wall */
```

The metaphor expresses STRUCTURALLY through:
- **Border roughness:** 4px borders on callouts feel like reinforced plates. 1px borders feel like scratched marks on walls.
- **Density = function:** The factory-floor (Z3) is the densest zone because factories are packed. The command-post (Z4) breathes because leaders need space to think.
- **Hierarchy = spatial:** Town Level (Z1-Z2, orientation) -> Rig Level (Z3-Z5, operations) -> Record Level (Z6, reference). The hierarchy in the content maps to vertical hierarchy on the page.
- **Components adapt to zone:** Callouts in Z3 (factory) are compressed and utilitarian. Callouts in Z4 (command) are generous and contemplative.

### Density Arc: DOUBLE-PEAK

```
            Z3            Z5
            ##            ##
         ## ## ##       ## ##
      ## ## ## ##    ## ## ## ##
   ## ## ## ## ## ## ## ## ## ## ##
Z1 ## ## ## ## ## ## ## ## ## ## ## Z6
LOW  MOD  HIGH  MOD  HIGH  LOW-MOD
```

| Zone | Density | Est. Height | Character |
|------|---------|-------------|-----------|
| Z1 | LOW | ~350px | Orientation: metadata, TOC, complexity ladder |
| Z2 | MODERATE | ~700px | Widening: who Yegge is, what Gas Town means |
| Z3 | HIGH (PEAK 1) | ~1400px | Architecture core: 8 roles + Beads memory system |
| Z4 | MODERATE | ~650px | Philosophical valley: 6 Waves, Core Principles |
| Z5 | HIGH (PEAK 2) | ~1200px | Implementation: install, configure, troubleshoot |
| Z6 | LOW-MODERATE | ~800px | Reference: quotes, comparisons, sources |

The double-peak pattern teaches ARCHITECTURE (Z3) then OPERATIONS (Z5) with a philosophical pause (Z4) between. Z4 is the breathing valley — the reader consolidates before the second climb.

### Content-Form Coupling (MIXED = full 6-channel multi-coherence)

| Zone | Content Register | CSS Implications |
|------|-----------------|------------------|
| Z1 | REFERENCE + NAVIGATION | TOC with anchors, metadata grid, scannable. Line-height 1.8, generous spacing, entry velocity. |
| Z2 | NARRATIVE | Flowing prose about Yegge + philosophy. Wider measure, 16px body, pull-quote opportunity. Horizontal comparison layout (traditional vs Gas Town). |
| Z3 | REFERENCE + CODE | Dense technical: ASCII diagrams, per-role code blocks, model recommendations. 15px body, compressed spacing, multi-column role grid, JetBrains Mono heavy. Layout variety highest here — grid the 8 roles. |
| Z4 | NARRATIVE + REFERENCE | Reflective: waves timeline + principles. 16px body, generous padding, flowing prose with occasional reference tables. Single-column dominant — this is the quiet zone. |
| Z5 | CODE + REFERENCE | Step-by-step implementation, checklists, troubleshooting. Code blocks dominant, collapsible detail sections, sequential structure. Tight inner spacing, JetBrains Mono for commands. |
| Z6 | REFERENCE | Browsable: comparison tables, citation lists, cost estimation. Multi-column possible, tighter line-height, scannable rather than sequential. |

**Layout variety:** Deploy grid layouts in Z3 (8-role architecture), Z5 (implementation steps), and Z6 (comparison tables). Z1, Z2, Z4 can be single-column. At least 3 of 6 zones use multi-column or grid.

### Creative Authority + Components

You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else -- how you interpret the Settlement metaphor, which mechanisms you deploy, how zones transition, how components adapt -- is yours.

Build with components from components.css as your structural toolkit. Aim for 8+ components. Adapt rather than invent -- check the component library BEFORE writing custom CSS.

Target components for this content:
- `.callout` + `.callout--{type}` — zone-modulated (generous in Z4 command-post, compressed in Z3 factory)
- `.code-block` — heavy in Z3 and Z5 (the working zones)
- `.table-wrapper` — Z3 role specs, Z5 implementation, Z6 comparisons
- `.pull-quote` — Z2 (Yegge quotes) and Z4 ("nature prefers colonies" thesis)
- `.section-header` — at every zone boundary transition
- `.skip-link` — page top, accessibility
- `.toc` — Z1, after header
- `.collapsible` — Z3 role deep-dives (8 roles = scannable headers with expand-on-demand)
- `.grid--2col` or `.grid--3col` — Z3 role architecture, Z6 comparison tables

Build with 800-1200 CSS lines total. Reference `tokens.css` for exact values.

### CSS Value Table

Spacing scale: 4-96px in 4px increments. Border weights: 4px/3px/1px. Type scale: 0.75rem to 3rem. Color palette: 8 primary + 5 accent + 3 zone + 4 text hierarchy.

**Typographic spectacle requirement:** At least 1 typographic moment that exceeds normal hierarchy. For this content: 28-32px pull quote of the "nature prefers colonies" insight OR 36px display numeral for the "8 roles" section. Zone-inflect H2s: differentiate H2 treatments across zones (size, weight, decoration, or color vary by zone).

---

## TIER 4: DISPOSITION (D-01 through D-09)

### D-01: Content-Register Reading [EXPERIMENTAL]
**PURPOSE:** Read each zone's character before choosing its CSS. This content has 3 distinct registers:
- NARRATIVE (Z2, Z4 — Yegge's voice, philosophy)
- REFERENCE (Z1, Z3, Z6 — architecture specs, role tables, comparison grids)
- CODE (Z3, Z5 — installation commands, config examples, model specs)
Z3 is the densest because it mixes REFERENCE + CODE simultaneously — the 8-role architecture with per-role code blocks and ASCII diagrams. Z4 is the purest NARRATIVE — reflective philosophical content (Waves, Principles) that deserves breathing room. Map register to density: `font-size: 15px` + `line-height: 1.6` for dense reference zones, `font-size: 16px` + `line-height: 1.7` for narrative zones.

### D-02: Room Perception at Boundaries [EXPERIMENTAL]
**PURPOSE:** Each zone boundary should feel like entering a different room in the settlement. The Z2->Z3 boundary is the front door to the factory — it should shift the most channels (background + typography + spacing + borders + components). The Z3->Z4 boundary is stepping into the command post — a 29-delta background shift + spacing expansion + border simplification. Build the transition at `border-bottom: 3px solid #E83025` for the Z2->Z3 boundary (the factory entrance) and a subtler `border-bottom: 1px solid #E0D5C5` for Z4->Z5 (returning to work from the command post).

### D-03: The Signing Frame [EXPERIMENTAL]
**PURPOSE:** Build as if you will sign this page. The content's own voice is authoritative and slightly rough — Yegge curses, makes bold claims, gatekeeps. Match this with consistent border-weight hierarchy (4px on callouts = reinforced), restraint (no decorative SVGs, no unnecessary chrome), and a dense purposeful header. CSS: `header { background: var(--settlement-gate); padding: 24px 0; border-bottom: 3px solid #E83025; }`. Every element you add — ask whether you would defend it if challenged. The settlement aesthetic is functional, not decorative.

### D-04: The Second-Half Moment [EXPERIMENTAL]
**PURPOSE:** Create 1-2 surprise moments in the second half. For this content: a dark-background inversion block at the Z4 Principles zone where the "nature prefers colonies" thesis lives — `background: var(--color-text); color: var(--bg-primary);` — or a scale break with `font-size: 36px` for the "colonies not ants" pull quote. The philosophical pivot (Z4) or the implementation entry (Z5) are the natural locations.
The content itself has a built-in surprise: "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees." Surface this with visual emphasis — a callout with `border-left: 4px solid #E83025` and slightly compressed line-height to make it land like a punch.

### D-05: The Reader's Scroll [EXPERIMENTAL]
**PURPOSE:** Three dimensions shape the scroll:
- Section height: Z3 at ~1400px towers over Z1 at ~350px — vary intentionally
- Visual density: Z3 and Z5 are loud, Z4 is quiet
- Transition weight: heavy into Z3, medium out of Z3, light between Z5 and Z6
Closure appears in the final 2-3 viewports: the footer echoes the header (bookending), breathing space before footer at `padding-top: 80px`, and Z6's reference tone resolves the operational intensity of Z5.

### D-06: Negative Space as Shape [EXPERIMENTAL]
**PURPOSE:** Whitespace is structural in this settlement. Vary padding between zones: Z3 (factory) compresses to `padding: 48px 0` top, Z4 (command post) expands to `padding: 64px 0` top, Z1 (yard) opens with `padding: 80px 0` top. The gap between Z3 and Z4 is the most important negative space — it signals the release from peak density into the philosophical valley. Stacked gaps stay under 120px but VARY within that range.

### D-07: Edge Intentionality [EXPERIMENTAL]
**PURPOSE:** Every edge is a decision. For this content: hover states on the 8-role headers (revealing role summaries), `font-variant-numeric: tabular-nums` on cost estimation tables in Z6, zone-specific `::selection { background: }` colors that darken in dense zones, `text-indent: -0.5em` on blockquotes for Yegge's voice, first/last child treatments on role cards in Z3. Distribute more delight techniques in Z3 and Z5 (the high-density working zones). CSS: `.zone-factory tr:hover { background: rgba(232,48,37,0.05); }`.

### D-08: The Skeleton Test [EXPERIMENTAL]
**PURPOSE:** Strip the content mentally. The skeleton should show: a dark band (header), an opening field (Z1), a widening room (Z2), a compressed dense block (Z3), a breathing pause (Z4), another dense block (Z5), a browsable grid (Z6), and a dark band (footer). If all six interior zones look the same height and density, the skeleton has failed. The double-peak should be visible in the skeleton alone.
Cross-check: Z3 and Z5 should read as visually heavier than Z1, Z2, Z4, Z6. Z4 should read as the lightest interior zone. The dark header and footer bookends frame the whole composition.

### D-09: The Quiet Zone [EXPERIMENTAL]
**PURPOSE:** Z4 (Philosophy & Principles) is the designated quiet zone — the valley between the two density peaks. Deploy 2-3 mechanisms only (background color + typography + spacing). Single-column prose, no bento grid, no multi-column. Wider line-height (`line-height: 1.7`), generous margins.
The Waves timeline and Core Principles are reflective content — they deserve room. Preserve family membership: zone background `#FAF5ED` (LOCKED), Instrument Serif headings, Inter body, border-weight hierarchy. The quiet zone makes Z3 (before) and Z5 (after) feel richer by contrast. CSS: `.zone-command-post { padding: 64px 0; }` with minimal component usage. If this zone feels busy, something has gone wrong — strip back until it breathes.

---

## CONTENT MAP APPENDIX

### Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~5,273

**1. Content Classification**
- Type: MIXED (text paragraphs, tables, ASCII diagrams, code blocks, blockquotes, ordered/unordered lists, checklists, metadata headers across 13 major sections)
- Structural heterogeneity: HIGH -- 11 of 13 sections contain 3+ distinct element types. Sections routinely combine prose paragraphs + tables + ASCII art diagrams + code blocks + blockquotes within a single heading. The "8 Roles Architecture" section alone uses: prose, ASCII hierarchy diagram, per-role sub-sections each with bullet lists + code blocks + model recommendations, and a communication flow ASCII diagram.
- Metaphor viability: HIGH -- The content IS a metaphor. "Gas Town" is a Mad Max: Fury Road reference that structures the entire architecture: Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew, Overseer. The factory/colony metaphor ("ant colony vs single ant") pervades every section.

**2. Mode Determination**
COMPOSED -- HIGH heterogeneity (11/13 sections at 3+ element types) combined with HIGH metaphor viability.

**3. Zone Architecture**

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | Orientation & Context | LOW | You Are Here, TOC, D-FINAL metadata | Entry/grounding | Vertical descent through complexity ladder |
| Z2 | Who & Why | MODERATE | Section 1 (Who is Steve Yegge?), Section 2 (Gas Town Mental Model) | Widening -- from person to philosophy | Horizontal comparison (traditional vs Gas Town) |
| Z3 | Architecture Core | HIGH | Section 3 (8 Roles Architecture), Section 4 (Beads Memory System) | Dense technical -- the structural heart | Hierarchical (Town > Rig > Human), then layered (Hot > Warm > Cold) |
| Z4 | Philosophy & Principles | MODERATE | Section 5 (6 Waves of AI), Section 6 (Core Principles) | Reflective plateau -- absorb after density peak | Temporal (waves) then conceptual (principles) |
| Z5 | Implementation & Operations | HIGH | Section 7 (Implementation Guide), Section 8 (Checkpoints), Section 9 (Troubleshooting), Section 10 (When to Use) | Practical acceleration -- hands-on | Sequential (install > configure > run > fix > decide) |
| Z6 | Reference & Context | LOW-MODERATE | Section 11 (Quotes), Section 12 (Comparisons), Section 13 (Sources), Appendix, Cost Estimation | Release/reference -- browsable, not sequential | Comparative (side-by-side tables) then bibliographic |

**4. Content Tensions**
1. Control vs Chaos -- Pole B (Chaos) dominant. The entire philosophy accepts chaos as a feature. The system is designed to survive failure, not prevent it.
2. Individual Mastery vs Colony Scale -- Pole B (Colony) dominant. This is the thesis. But tension persists: Stage 7+ is the prerequisite for operating at colony scale.
3. Accessibility vs Elitism -- Pole B (Elite) dominant. The content repeatedly gates itself behind experience thresholds.
4. Human Authority vs AI Autonomy -- Neither pole dominant. The human is PM (strategic authority) but never reads the code (operational surrender).

Metaphor-shaping tension: #1 (Control vs Chaos). The Mad Max reference, the factory metaphor, the role hierarchy -- all exist to impose just enough structure on inherent chaos.

**5. Metaphor Seeds**
Recommendation: Seed #1 (The Settlement / Outpost). The content was named after Gas Town for a reason -- the Mad Max frame is structural, not decorative.

**6. Density Arc**
DOUBLE-PEAK: Z1 [LOW] -> Z2 [MODERATE] -> Z3 [HIGH - PEAK] -> Z4 [MODERATE] -> Z5 [HIGH] -> Z6 [LOW-MODERATE]

**7. Reader Profile**
Advanced AI-assisted developer (Stage 7+). Expert-leaning info density (line-height 1.55, font-size 16px). Moderate-Expert visual complexity (3 components/viewport). Moderate progressive disclosure (selective collapsibility). Moderate navigation (TOC + section anchors). Moderate-Fast entry velocity.
