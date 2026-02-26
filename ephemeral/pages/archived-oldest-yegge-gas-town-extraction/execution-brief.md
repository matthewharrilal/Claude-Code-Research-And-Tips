# Execution Brief: Steve Yegge and Gas Town

Mode: COMPOSED | Zones: 6 | Content: MIXED (~5,800 words)

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

## TIER 3: COMPOSITIONAL FRAMEWORKS

### Multi-Coherence (6 channels, boundary-by-boundary)

Six channels shift across zone boundaries: background color, typography, spacing, borders, color accents, and component density. Each boundary shifts at least 3 channels, averaging 4+. Here is the boundary map:

**Z1 (The Shift) -> Z2 (The Factory Floor) = HEAVY transition.** The reader crosses from philosophical orientation into architectural immersion. Background shifts from warm cream (#FEF9F5) to a deeper sand (#EDE6DA, delta ~27). Typography compresses: body drops from 18px to 16px, line-height from 1.8 to 1.7, letter-spacing tightens on labels. Spacing compresses from 48px inner to 32px. A 3px red border marks the threshold. Component density jumps sharply -- role cards, ASCII diagrams, communication flow tables fill the zone. This boundary is a factory gate: once through, the density is relentless.

**Z2 -> Z3 (The Nervous System) = MEDIUM transition.** Density eases from DENSE to MODERATE. Background warms slightly (#EDE6DA to #F5EFE5, delta ~16). Body drops to 15px for the memory architecture's technical density, but spacing opens back up (32px inner). Border weight steps down from 3px section dividers to 1px articulation within the beads memory diagrams. The transition feels like stepping from the noisy factory floor into a quieter systems room.

**Z3 -> Z4 (The Operating Principles) = LIGHT transition.** Both zones are MODERATE density. Background shifts subtly (#F5EFE5 to #FAF5ED, delta ~16). Typography holds at 16px body but H2 treatment changes -- principles get a different heading weight or decoration to distinguish stacked philosophical statements from layered memory architecture. A 1px border + 48px gap creates a legato connection. The content flows: memory architecture naturally leads to operating principles.

**Z4 -> Z5 (The Assembly Line) = HEAVY transition.** The reader enters the procedural sprint. Background drops to a warm earth tone (#FAF5ED to #E5DDD0, delta ~29). Typography shifts dramatically: JetBrains Mono becomes dominant, body tightens to 15px, line-height drops to 1.5 in code blocks. Spacing compresses hard (24px inner). 4px red left borders mark critical callouts and checkpoints. Component density peaks: code blocks, checklist tables, troubleshooting accordions. This is the second density peak -- the assembly line runs hot.

**Z5 -> Z6 (The Decision Room) = MEDIUM transition.** Density releases from DENSE to MODERATE. Background lifts back toward cream (#E5DDD0 to #F0EBE0, delta ~19). Typography returns to 16px body, line-height opens to 1.7. Spacing expands. The Yegge quotes get pull-quote treatment with 4px borders. Comparison tables use 1px subtle framing. The zone cools down -- the reader has exited the assembly line and entered the evaluation space.

**Three transition types deployed:**
- **Light** (1px border + 48px gap = legato): Z3->Z4
- **Medium** (3px border + 80px gap = breathing rest): Z2->Z3, Z5->Z6
- **Heavy** (background shift + border weight + spacing compression = full stop): Z1->Z2, Z4->Z5

### Structural Metaphor: The Refinery

The content already lives inside a refinery. Gas Town is a refinery settlement. The factory metaphor is structurally complete in the source material: roles are organs, beads are the nervous system, git is the skeleton. Map this to CSS through concept-based custom properties:

- `--refinery-intake` — Z1 background (raw material enters: philosophy, orientation)
- `--refinery-floor` — Z2 background (processing: roles architecture, heavy machinery)
- `--refinery-tank` — Z3 background (storage: memory system, layered containment)
- `--refinery-control` — Z4 background (governance: operating principles, pressure gauges)
- `--refinery-line` — Z5 background (assembly: implementation, conveyor-belt flow)
- `--refinery-dispatch` — Z6 background (shipping: decisions, comparisons, departure)

Extend the metaphor into structural elements: `--pipeline-connector` for inter-zone borders (material flowing between processing stages), `--pressure-indicator` for accent colors (heat rising in dense zones, cooling in sparse ones), `--gauge-reading` for typographic labels (monitoring system status). The refinery does not need to be announced in the content -- it should be felt in the CSS: tighter spacing in processing zones, heavier borders where pressure builds, breathing room at intake and dispatch.

### Density Arc: WAVE

```
         Z1        Z2        Z3        Z4        Z5        Z6
        SPARSE    DENSE    MODERATE  MODERATE   DENSE    MODERATE

  MAX  |         ##                            ##
       |         ##                            ##
       |         ##        ##       ##         ##        ##
       |  ##     ##        ##       ##         ##        ##
  MIN  |  ##     ##        ##       ##         ##        ##
       +------------------------------------------------------>
         entry   immerse   deepen   stack      build     decide
```

**Per-zone height estimates:**
- Z1 (The Shift): ~700px -- SPARSE, philosophical opening, generous whitespace, 3 short sections
- Z2 (The Factory Floor): ~1800px -- DENSE, 8-role architecture with ASCII diagrams and tables
- Z3 (The Nervous System): ~1200px -- MODERATE, beads memory model + 6 waves evolutionary framing
- Z4 (The Operating Principles): ~900px -- MODERATE, numbered principles (GUPP, ZFC, cattle/pets)
- Z5 (The Assembly Line): ~2000px -- DENSE, step-by-step guide + checkpoints + troubleshooting FAQ
- Z6 (The Decision Room): ~1100px -- MODERATE, when-to-use evaluation + Yegge quotes + comparison

Two density peaks with valleys between them for cognitive recovery. The WAVE pattern mirrors the content's own rhythm: breathe, immerse, recover, consolidate, sprint, reflect.

### Content-Form Coupling

- **Z1 (NARRATIVE):** Generous line-height (1.8), wider measure, breathing room. Philosophical prose with pull-quote treatment for the "Stage 7" gating statement. Blockquotes get 4px left border in red.
- **Z2 (REFERENCE):** Tight spacing, multi-column or grid layout for role cards. 8 roles demand structured presentation -- consider a 2-column grid with role name, description, and communication diagram per card. ASCII diagrams in monospace blocks. Tables for role hierarchy.
- **Z3 (REFERENCE + NARRATIVE):** Hybrid -- the beads memory system needs diagrammatic treatment (monospace ASCII, tight spacing) while the "6 Waves" section is more narrative (wider measure, breathing room). Let the zone shift register internally.
- **Z4 (REFERENCE):** Numbered principles as distinct blocks. Each principle (GUPP, ZFC, cattle/pets, idempotence, token economics) gets its own bordered container. Moderate density, consistent rhythm.
- **Z5 (CODE + REFERENCE):** JetBrains Mono dominant. Bash code blocks with dark backgrounds. Checklists as structured tables. Troubleshooting as collapsible accordions or bordered FAQ blocks. Tightest spacing on the page.
- **Z6 (NARRATIVE + REFERENCE):** Mixed -- decision matrices as tables, Yegge quotes as pull-quotes with typographic emphasis, comparison tables with 1px borders, sources as a compact list. Spacing opens back up.

### Creative Authority + Components

You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else -- how you interpret the refinery metaphor, which mechanisms you deploy, how zones transition -- is yours.

Use components from components.css as your structural toolkit. Adopt and extend existing classes. Target components for this content:
- `.callout` / `.callout--{type}` — principles (Z4), warnings (Z5), the Stage 7 gate (Z1)
- `.code-block` — bash commands throughout Z5, configuration examples
- `.table-wrapper` — role hierarchy (Z2), comparison matrices (Z6), cost model
- `.pull-quote` — Yegge quotes (Z6 primarily, also Z1)
- `.section-header` — zone title treatments at each boundary
- `.grid--2col` — role cards (Z2), comparison table (Z6)
- `.collapsible` — troubleshooting FAQ (Z5), detailed role descriptions (Z2)
- `.toc` — after header, 13-section navigation
Aim for 10+ component library classes. Modulate callouts per zone: generous padding (20px 24px) in Z1, compressed (12px 16px) with heavier border (5px left) in Z5.

### CSS Value Table

Reference `tokens.css` for exact values. Key vocabulary: spacing scale (4-96px in 4px increments), border weights (4px/3px/1px), type scale (0.75rem to 3rem), color palette (8 primary + 5 accent + 3 zone + 4 text hierarchy). Build with 800-1200 CSS lines total. At least 2 distinct layout patterns (single-column must not exceed 60% of zones). Use grid layouts for Z2 (role cards) and Z6 (comparison).

---

## TIER 4: DISPOSITION (D-01 through D-08)

### D-01: Content-Register Reading [EXPERIMENTAL]
**PURPOSE:** Read each zone's character before choosing its CSS. This content oscillates between 6 distinct registers -- no two adjacent sections share the same element profile. Z1 is philosophical prose (NARRATIVE: 18px, line-height 1.8, max-width 38em). Z2 is architectural reference with ASCII diagrams (REFERENCE: 16px, line-height 1.6, grid layout, monospace blocks). Z5 is procedural tutorial with bash commands (CODE: 15px JetBrains Mono, line-height 1.5, dark code blocks). Map each zone's register to its CSS treatment. The content's structural heterogeneity is the page's greatest asset -- let the CSS amplify it.

### D-02: Room Perception at Boundaries [EXPERIMENTAL]
**PURPOSE:** Each zone transition should feel like entering a different room. The refinery metaphor gives you rooms with character: intake (airy, philosophical), factory floor (dense, structured), tank room (layered, quiet), control room (orderly, stacked), assembly line (compressed, procedural), dispatch (open, evaluative). Combine background shift + typography shift + spacing shift + border weight shift at each boundary. The Z1->Z2 boundary is the most dramatic room change (philosophy to architecture) -- deploy 4+ channel shifts there. Z3->Z4 is the gentlest (both moderate, conceptual continuity) -- 2-3 channel shifts suffice.

### D-03: The Signing Frame [EXPERIMENTAL]
**PURPOSE:** Build as if you will sign this page. The content has strong authority already (Yegge's voice, explicit gatekeeping, precise technical specs). Match that authority in CSS: consistent border-weight hierarchy (4px for primary callouts and the header, 3px for zone dividers, 1px for table cells and subtle framing), restraint in decoration (zero ornamental elements), dense purposeful header (dark background, 3px red bottom border, tight 12px padding). The "If you have any doubt, you can't use it" energy should live in the CSS too.

### D-04: The Second-Half Moment [EXPERIMENTAL]
**PURPOSE:** Create 1-2 moments in the second half that break the established pattern. For this content: (1) A dark inversion block in Z5 or Z6 (background: var(--color-text), color: var(--refinery-intake)) where the Yegge quote "Nature prefers colonies" appears as a 32-36px pull quote -- this is the philosophical pivot point where the document shifts from "how it works" to "why it matters." (2) A layout rupture in Z6: after 4+ zones of single-column or grid, the comparison section could use a side-by-side layout or a dramatically different grid (3-column) that signals "we are evaluating now, not learning." These moments reward the reader who scrolled through 2000px of implementation details.

### D-05: The Reader's Scroll [EXPERIMENTAL]
**PURPOSE:** Three dimensions of scroll rhythm. Section heights VARY: Z1 ~700px (brief entry), Z2 ~1800px (deep immersion), Z3 ~1200px (moderate), Z4 ~900px (compact consolidation), Z5 ~2000px (longest procedural sprint), Z6 ~1100px (moderate exit). Visual density has two peaks (Z2 and Z5) with valleys (Z1, Z3-Z4, Z6). Transition weights alternate: heavy at Z1->Z2, medium at Z2->Z3, light at Z3->Z4, heavy at Z4->Z5, medium at Z5->Z6. Closure appears in Z6's final viewports -- the sources list and comparison table resolve the journey. Earn the ending with 80-120px breathing space before the footer. Footer echoes header: dark background, red border, bookending the refinery.

### D-06: Negative Space as Shape [EXPERIMENTAL]
**PURPOSE:** Whitespace is a deliberate shape. In Z1, generous padding (80px top) lets the philosophical opening breathe -- the reader is not yet inside the factory. In Z2, spacing compresses to 32px between elements because the factory floor is crowded with roles and diagrams. In Z4, each principle gets consistent 32px separation -- stacked, orderly, like pressure gauges in a row. In Z5, code blocks compress to 24px gaps but checklist items get 16px tight spacing. Vary padding-top per zone: 80px (Z1) -> 64px (Z2) -> 48px (Z3) -> 48px (Z4) -> 32px (Z5) -> 48px (Z6). Stacked gaps at boundaries stay under 120px but RANGE from 80px (Z3->Z4 legato) to 112px (Z1->Z2 breathing before the plunge).

### D-07: Edge Intentionality [EXPERIMENTAL]
**PURPOSE:** Every edge is a decision. Techniques for this content: hover states on role cards in Z2 revealing communication patterns (table row tint: rgba(232,48,37,0.05)), typographic micro-refinement with tabular-nums on the cost model table in Z6 and token budget numbers, zone-specific ::selection colors (warm red in Z1-Z2, cooler teal in Z5-Z6), first-child edge treatment on principle blocks in Z4 (first principle gets a 4px top border, others get 1px). Distribute more edge refinements in Z2 and Z5 (high-density zones) where the reader spends the most time and will notice details.

### D-08: The Skeleton Test [EXPERIMENTAL]
**PURPOSE:** Remove all content mentally. Does the skeleton still have shape? The refinery skeleton should show: a dark header bar, a generous light opening, a sudden compression into a dense structured zone (grid visible), a moderate layered middle, a brief stacked section, a second compression into code-heavy density, and a moderate exit resolving back toward the opening's tone. If it looks like six uniform boxes, rebuild the transitions. The skeleton should read as: open -> dense-structured -> moderate-layered -> compact-stacked -> dense-procedural -> moderate-reflective.

---

## CONTENT MAP APPENDIX

| Zone | Name | Density | Sections | Direction |
|------|------|---------|----------|-----------|
| Z1 | The Shift | SPARSE | S0-S2: You Are Here, Yegge, Mental Model | Downward |
| Z2 | The Factory Floor | DENSE | S3: 8 Roles Architecture | Horizontal |
| Z3 | The Nervous System | MODERATE | S4-S5: Beads Memory, 6 Waves | Inward |
| Z4 | The Operating Principles | MODERATE | S6: GUPP, ZFC, cattle/pets, idempotence | Vertical |
| Z5 | The Assembly Line | DENSE | S7-S9: Implementation, Checkpoints, FAQ | Forward |
| Z6 | The Decision Room | MODERATE | S10-S13: When to Use, Quotes, Comparisons | Outward |

**Tensions:** (1) Chaos vs Control (metaphor-shaping), (2) Accessibility vs Gatekeeping, (3) Simplicity vs Scale, (4) Human Agency vs Machine Autonomy. **Metaphor:** The Refinery -- intake (Z1), processing (Z2), storage (Z3), governance (Z4), assembly (Z5), dispatch (Z6). **Density Arc:** WAVE -- two peaks (Z2, Z5) with valleys. **Reader:** Advanced developer (Stage 7+). Info Density 4/5, Visual Complexity 3/5, Progressive Disclosure 4/5, Navigation 4/5, Entry Velocity 2/5.
