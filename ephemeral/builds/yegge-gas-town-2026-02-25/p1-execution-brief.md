# Execution Brief: Steve Yegge and Gas Town

Mode: **COMPOSED** (HIGH heterogeneity + HIGH metaphor viability)

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

### PRIORITY OVERRIDE: Tier 2 vs Tier 3 Conflicts

When Tier 3 creative decisions conflict with Tier 2 perception physics:
- **Tier 2 WINS** for: background deltas (>= 15 RGB), letter-spacing (>= 0.025em), stacked gaps (<= 120px), single margins (<= 96px)
- **Tier 3 WINS** for: metaphor interpretation, component selection, layout patterns, color accents, typography beyond thresholds
- Zone backgrounds specified in Tier 3 MUST satisfy Tier 2 delta requirements

**Worked examples:**
- Brief says Zone 3 background `#f5f2ec` but Tier 2 requires delta >= 15 from Zone 2 `#faf7f0` -- delta is only 5 -- override to `#e8e2d5` (delta 24, confident intensity)
- Brief says Zone 4 letter-spacing `0.01em` for dense reference text but Tier 2 requires >= 0.025em -- override to `0.03em`
- Brief metaphor suggests "compressed industrial" styling for Zone 2 with 40px padding -- Tier 3 WINS here because 40px is within Tier 2 limits -- keep the metaphor-driven choice

---

## TIER 3: COMPOSITIONAL FRAMEWORKS

### Zone Background Assignments (Tier 2 LOCKED)

These hex values are FIXED. You may modify accents, typography, spacing, and components, but zone backgrounds come from the value tables and are NOT creative territory.

| Zone Boundary | Color A | Color B | RGB Delta | Intensity |
|---------------|---------|---------|-----------|-----------|
| Z1 → Z2 | `#FEF9F5` (254,249,245) | `#EDE6DA` (237,230,218) | 27 | confident |
| Z2 → Z3 | `#EDE6DA` (237,230,218) | `#1E1E1E` (30,30,30) | 214 | dramatic (inversion) |
| Z3 → Z4 | `#1E1E1E` (30,30,30) | `#F0EBE0` (240,235,224) | 210 | dramatic (recovery) |
| Z4 → Z5 | `#F0EBE0` (240,235,224) | `#E5DDD0` (229,221,208) | 16 | subtle |

Zone assignments:
- **Z1 (Orientation):** `#FEF9F5` — warm cream, open and inviting
- **Z2 (Mental Model):** `#EDE6DA` — sand, deepening tone as the factory metaphor takes hold
- **Z3 (Infrastructure):** `#1E1E1E` — near-black inversion, the factory floor itself (Beads, Waves, Principles — the machinery)
- **Z4 (Practice):** `#F0EBE0` — warm tan, emerging from the factory into the light of practice
- **Z5 (Resolution):** `#E5DDD0` — warm earth, settling and resolving

### Multi-Coherence (6 channels, boundary-by-boundary)

**The 6 channels:**
1. **Background color** — zone-to-zone deltas from the locked table above
2. **Typography** — font-size, weight, letter-spacing shifts at boundaries
3. **Spacing** — padding and margin shifts encoding density changes
4. **Borders** — 4px/3px/1px weight shifts marking hierarchy transitions
5. **Color accents** — accent color or tint shifts signaling zone character
6. **Components** — component density and variant shifts per zone

**Z1 → Z2 (Orientation to Mental Model):** 4 channels shift.
- Background: cream to sand (delta 27, confident)
- Typography: body 18px → 16px, H2 40px → 32px, letter-spacing labels 0.05em → 0.04em
- Spacing: zone padding 80px → 64px, inner spacing 48px → 32px
- Components: pull-quotes and narrative callouts (Z1) give way to architecture diagrams and role tables (Z2)

**Z2 → Z3 (Mental Model to Infrastructure):** 6 channels shift. This is the page's heaviest boundary — entering the factory floor.
- Background: sand to near-black (delta 214, dramatic inversion)
- Typography: body 16px → 15px Inter light-on-dark, H2 32px → 28px, letter-spacing tightens to 0.03em
- Spacing: zone padding 64px → 48px, inner spacing 32px → 24px (dense compression)
- Borders: shift from warm tan 1px subtle borders to light-colored 1px borders on dark, 4px red callout borders gain prominence against dark
- Color accents: red (#E83025) becomes the dominant accent against dark background; cream text replaces dark text
- Components: dense code blocks, architecture diagrams, command reference tables, multi-column grids

**Z3 → Z4 (Infrastructure to Practice):** 5 channels shift. Emerging from the factory — relief and actionability.
- Background: near-black to warm tan (delta 210, dramatic recovery)
- Typography: body 15px → 16px, H2 28px → 28px (steady), line-height 1.6 → 1.7 (breathing returns)
- Spacing: zone padding 48px → 48px (steady), inner spacing 24px → 32px (decompression)
- Borders: return to dark borders on light backgrounds; 3px section dividers organize implementation steps
- Color accents: red returns to accent role (left borders, highlights) rather than dominant

**Z4 → Z5 (Practice to Resolution):** 3 channels shift. A gentle legato exit — the page resolving.
- Background: warm tan to warm earth (delta 16, subtle)
- Typography: body 16px → 16px (steady), H2 28px → 32px (widening for resolution), line-height 1.7 → 1.7
- Components: comparison tables, curated quotes (pull-quote component), source links — quieter, more reflective elements

### Transition Types (mapped to boundaries)

- **Z1 → Z2 = medium** (3px border-bottom + 80px gap = breathing rest). Similar warmth, confident delta. The reader deepens without shock.
- **Z2 → Z3 = heavy** (dark background inversion = full stop). Entering the factory floor. The heaviest transition on the page. D-04 second-half moment territory.
- **Z3 → Z4 = heavy** (dark-to-light recovery = full stop). Emerging from infrastructure into practice. Mirror of Z2→Z3.
- **Z4 → Z5 = light** (1px border + 48px gap = legato). Gentle resolution, content winding down.

### Structural Metaphor: Factory/Refinery

The content names itself a factory. Map the factory metaphor to page structure:

- **Z1 = The Loading Dock** — raw materials arrive (who is Yegge, what is Gas Town, prerequisites). Open air, wide spacing, welcoming.
- **Z2 = The Dispatch Floor** — the mental model assembles (Gas Town concept, 8 roles architecture). Organization and routing. Where work gets assigned.
- **Z3 = The Factory Floor** — the machinery runs (Beads memory, Waves of AI, Core Principles). Dense, dark, industrial. The heart of the operation.
- **Z4 = The Assembly Line** — products take shape (implementation, checkpoints, troubleshooting). Practical, step-by-step, hands-on.
- **Z5 = The Shipping Bay** — finished goods depart (when to use, comparisons, sources). Assessment, packaging, resolution.

CSS custom properties by CONCEPT:
- `--loading-dock` (#FEF9F5)
- `--dispatch-floor` (#EDE6DA)
- `--factory-floor` (#1E1E1E)
- `--assembly-line` (#F0EBE0)
- `--shipping-bay` (#E5DDD0)
- `--factory-accent` (#E83025)
- `--factory-steel` (#1A1A1A)
- `--factory-text-light` (#FEF9F5)

### Density Arc: ARCH

```
Z1 [LOW] → Z2 [MODERATE] → Z3 [HIGH] → Z4 [HIGH] → Z5 [LOW-MODERATE]
```

Section height estimates: Z1 ~700px, Z2 ~2000px, Z3 ~2200px, Z4 ~2000px, Z5 ~1600px. Pattern: ramp up through Z2-Z3, sustained peak at Z3-Z4, gentle descent at Z5.

### Content-Form Coupling

This page is predominantly **MIXED** (prose + reference + code + media). Deploy FULL multi-coherence framework — all 6 channels active at most boundaries. Metaphor should be STRUCTURAL. Layout variety: single-column must not exceed 50% of zones (3 of 5 max).

| Zone | Register | CSS Implications |
|------|----------|-----------------|
| Z1 (Orientation) | NARRATIVE | Generous line-height 1.8, wider measure, breathing room, pull-quotes for Yegge credentials |
| Z2 (Mental Model) | NARRATIVE + REF | 1.7 line-height for prose, tighter spacing for role architecture tables, ASCII diagram in code block, possible 2-column layout for 8 roles |
| Z3 (Infrastructure) | REF + CODE | Tight 1.6 line-height, monospace-heavy, code blocks for Beads commands, multi-column for wave/stage tables, dark background demands light text |
| Z4 (Practice) | CODE + REF | Monospace for install commands and scripts, verification tables, troubleshooting accordions, step-by-step numbered flow |
| Z5 (Resolution) | REF + NARRATIVE | Comparison tables, curated quotes in pull-quote components, source links, wider spacing for reflective reading |

### Creative Authority + Components

You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else — how you interpret the factory metaphor, which mechanisms you deploy, how zones transition — is yours.

Build with components from components.css as your structural toolkit. Target 8+ components. Adapt rather than invent — check the component library BEFORE writing custom CSS. Callouts should modulate per zone (generous padding in sparse Z1, compressed in dense Z3, red-on-dark in factory-floor Z3).

### CSS Value Table

Reference `tokens.css` for exact values. Key vocabulary: spacing scale (4-96px in 4px increments), border weights (4px/3px/1px), type scale (0.75rem to 3rem), color palette (8 primary + 5 accent + 3 zone + 4 text hierarchy). Build with 800-1200 CSS lines total.

---

## TIER 4: DISPOSITION (D-01 through D-09)

### D-01: Content-Register Reading [EXPERIMENTAL]
**PURPOSE:** Read each section's character before choosing its CSS treatment. This page has 13 sections across 5 zones with 4 distinct registers: NARRATIVE (S1, S2, S6, S11), REFERENCE (S0, S3, S5, S8, S10, S12, S13), CODE (S7, S9), and MIXED (S4 — architecture diagrams cross registers). Map register to treatment: narrative sections get `line-height: 1.8; max-width: 65ch;` while code sections get `font-family: 'JetBrains Mono'; line-height: 1.5;` and reference sections get `line-height: 1.6;` with tighter element spacing. The philosophy-to-practice arc (S1-S6 → S7-S9) means the page naturally shifts from narrative-dominant to code-dominant — let your CSS register shift with it.

### D-02: Room Perception at Boundaries [EXPERIMENTAL]
**PURPOSE:** Each zone transition should feel like entering a different room. The Z2→Z3 boundary is the most dramatic room change on this page — sand-to-near-black inversion (delta 214) plus typography inversion plus spacing compression. Build this as a true doorway: `border-bottom: 3px solid var(--factory-accent);` on Z2's last element, then Z3 opens with dark authority. The Z4→Z5 boundary is the gentlest — a `border-top: 1px solid #E0D5C5;` with 48px gap, barely a threshold. Match boundary weight to the content's own transition weight: the shift from philosophy to practice (Z2→Z3) is seismic; the shift from troubleshooting to comparisons (Z4→Z5) is a quiet exhale.

### D-03: The Signing Frame [EXPERIMENTAL]
**PURPOSE:** Build as if you will sign this page. The factory metaphor demands authority — Gas Town is presented as industrial infrastructure, not a friendly tutorial. Express certainty: consistent `border-left: 4px solid var(--factory-accent)` on primary callouts (the "nature prefers colonies" insight, the "Idea Compiler" definition). Restraint in the header: dark background, `padding: 32px 0;` dense and purposeful. The content gatekeeps ("Stage 7+ or get your face ripped off") — let the design gatekeep too. No decoration. Every border, every color, every spacing value earns its place.

### D-04: The Second-Half Moment [EXPERIMENTAL]
**PURPOSE:** Create 1-2 second-half moments that break the established pattern. Techniques for this content: the Z3 dark inversion block (`background: var(--factory-floor); color: var(--factory-text-light);`) IS the primary moment — entering the factory floor at the page's center-of-gravity. For a second moment, deploy a scale break in Z4 or Z5: a `font-size: 28px;` pull-quote of the "nature prefers colonies" insight or "Gas Town is an Idea Compiler" — a single typographic eruption that rewards the reader who scrolled through the dense infrastructure zone.

### D-05: The Reader's Scroll [EXPERIMENTAL]
**PURPOSE:** Three dimensions shape the scroll journey. Section height: Z1 is short (~700px, quick orientation) while Z3 is tallest (~2200px, sustained immersion in the factory). Visual density: Z3-Z4 are LOUD (dense tables, code blocks, multi-column grids) while Z1 and Z5 are quiet (generous prose, breathing room). Transition weight: staccato at Z2→Z3 (heavy inversion), legato at Z4→Z5 (gentle exit). Closure appears only in Z5's final viewports — `padding-bottom: 80px;` breathing space before footer. The footer echoes the header's dark treatment, bookending the journey.

### D-06: Negative Space as Shape [EXPERIMENTAL]
**PURPOSE:** Whitespace is a deliberate shape. Vary padding between zones: Z1 gets `padding: 80px 0;` (generous loading dock), Z3 gets `padding: 48px 0;` (compressed factory floor), Z5 gets `padding: 64px 0;` (moderate shipping bay). The gap between Z2 and Z3 is a structural element (the heavy inversion IS the transition, no gap needed). The gap between Z4 and Z5 is `padding-bottom: 48px; + padding-top: 48px; = 96px` total — under 120px but generous enough to breathe. Dense Z3 interior spacing: `margin-bottom: 16px;` between elements, compressing the factory's machinery together.

### D-07: Edge Intentionality [EXPERIMENTAL]
**PURPOSE:** Every edge is a decision. Techniques for this content: `font-variant-numeric: tabular-nums;` on the wave/stage tables (S5), making numbers align in columns. Hover states on role architecture cards: `tr:hover { background: rgba(232,48,37,0.05); }`. Zone-specific `::selection { background: var(--factory-accent); color: white; }` in Z3 (factory floor selection = red on dark) vs `::selection { background: rgba(232,48,37,0.15); }` elsewhere. `text-indent: -0.03em;` on Instrument Serif headings for optical alignment. First/last child treatments: `.callout:first-child { margin-top: 0; }`. Distribute more edge refinements in Z3-Z4 (high-density zones) than Z1/Z5.

### D-08: The Skeleton Test [EXPERIMENTAL]
**PURPOSE:** Remove all content mentally. Does the skeleton still have shape? With this page: Z1 is light and open, Z2 deepens in warmth, Z3 inverts to dark (the factory), Z4 returns to light, Z5 settles to earth tones. The skeleton has a clear ABA' structure (light-dark-light) with asymmetric return. If your skeleton looks like 5 cream rectangles stacked uniformly, you are in APPLIED mode. The factory metaphor should be visible in the skeleton alone — `background-color` progression tells the story without a word of content.

### D-09: The Quiet Zone [EXPERIMENTAL]
**PURPOSE:** Designate Z2 (Mental Model) as the quiet zone. Z2 sits between the welcoming Z1 opening and the intense Z3 factory floor — it is the transition space where the reader builds their mental model before entering the machinery. Deploy 2-3 mechanisms in Z2 (vs 4-5 in Z3/Z4): single-column narrative prose for the Gas Town concept explanation, `line-height: 1.7;` breathing room, one architecture table for the 8 roles (the zone's primary reference element). Preserve family membership: Z2 uses its locked background `#EDE6DA`, typography from the type scale, border-weight hierarchy if borders appear. Z2 is deliberately plainer so that Z3's dark inversion hits harder — the quiet before the industrial storm.

---

## CONTENT MAP APPENDIX

### Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~5,270

**1. Content Classification**
- Type: MIXED (prose + tables + code blocks + ASCII diagrams + pull quotes + lists + checklists across 13 sections)
- Structural heterogeneity: HIGH
- Metaphor viability: HIGH

**2. Mode Determination**
COMPOSED — High structural heterogeneity (6+ element types, frequent mode-shifts between narrative, reference tables, code blocks, and architecture diagrams) combined with a content-native metaphor (factory/colony with explicit hierarchy) that maps directly to CSS structure.

**3. Zone Architecture**

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | Orientation | LOW | You Are Here, Who is Steve Yegge | BREATHING | OPENING |
| Z2 | Mental Model | MODERATE | Gas Town Mental Model, 8 Roles Architecture | TRANSITIONAL | DEEPENING |
| Z3 | Infrastructure | HIGH | Beads Memory System, 6 Waves of AI, Core Principles | DENSE | DEEPENING |
| Z4 | Practice | HIGH | Implementation Guide, Checkpoints, Troubleshooting | DENSE | DEEPENING |
| Z5 | Orientation | LOW-MODERATE | When to Use, Quotes, Comparisons, Sources | BREATHING | RESOLVING |

Per-section character:
- S0 You Are Here: REF (complexity ladder, prerequisites checklist)
- S1 Who is Steve Yegge: NARRATIVE (biography with credential tables)
- S2 Gas Town Mental Model: NARRATIVE (core insight, factory metaphor, Idea Compiler)
- S3 8 Roles Architecture: REF (8 role specs, ASCII hierarchy, communication flow)
- S4 Beads Memory System: REF (architecture diagrams, command references, memory model)
- S5 6 Waves of AI: REF (wave table, stage table, warning)
- S6 Core Principles: NARRATIVE (5 philosophical principles with quotes)
- S7 Implementation Guide: CODE (install commands, tmux setup, startup script, daily workflow)
- S8 Checkpoints: REF (verification table, health check commands)
- S9 Troubleshooting: CODE (6 failure patterns with recovery commands)
- S10 When to Use: REF (use/don't-use lists, decision tree)
- S11 Quotes: NARRATIVE (curated quotes by theme)
- S12 Comparisons: REF (3 comparison tables, orchestrator spectrum)
- S13 Sources: REF (links, community extensions)

**4. Content Tensions**
1. Single Agent vs Colony — Pole B dominant ("nature prefers colonies").
2. Chaos vs Control — Neither dominant; content navigates between them.
3. Accessibility vs Exclusivity — Pole B dominant (content repeatedly gatekeeps).
4. Philosophy vs Practice — Balance shifts from philosophy (S1-S6) to practice (S7-S9).

Metaphor-shaping tension: #1 (Single Agent vs Colony). The ant-to-factory transformation IS the structural spine of the content.

**5. Metaphor Seeds**
1. Factory/Refinery — source: explicit in content. CSS: industrial zones with clear hierarchy, raw-to-refined progression. Risk: LOW (content-native).
2. Colony/Hive — source: "nature prefers colonies." Risk: MEDIUM (competes with industrial metaphor).
3. Mad Max Post-Apocalyptic — source: explicit Fury Road reference. Risk: HIGH (could overwhelm technical content).

Recommendation: Seed #1 (Factory/Refinery).

**6. Density Arc**
```
Z1 [LOW] → Z2 [MODERATE] → Z3 [HIGH] → Z4 [HIGH] → Z5 [LOW-MODERATE]
```
Section heights: Z1 ~700px, Z2 ~2000px, Z3 ~2200px, Z4 ~2000px, Z5 ~1600px. Pattern: ARCH.

**7. Reader Profile**
- Who: Advanced developer (Stage 7+) already running multiple Claude Code instances
- Expertise: EXPERT (Stage 7+, 100+ hours multi-agent, tmux proficiency)
- Patience: MODERATE (will read deeply if content proves relevant, will scan reference sections)
- Goal: EVALUATION + IMPLEMENTATION
- Device: DESKTOP (tmux-native workflow)
- What they expect: Technical deep-dive with clear architecture and actionable setup steps
- What should surprise them: The philosophical depth that reframes their mental model of what development IS
