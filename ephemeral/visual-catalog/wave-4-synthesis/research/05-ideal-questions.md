# 05 — Ideal Compositional Questions (Reverse-Engineered)

## Methodology

For each of 7 pages, I examined the actual CSS and HTML structure to identify which visual channels vary and how they coordinate. From that coordination pattern, I derived the single compositional question that would *naturally generate* the observed multi-channel system — not a specification of what to build, but a question whose answer *implies* the entire CSS architecture.

The key principle: a great compositional question implies a **rule**, not a property. "What if border thickness encoded certainty?" naturally produces 7+ coordinated channels because the rule requires the builder to decide *how* every visual property relates to the certainty axis. The question forces multi-channel thinking without specifying any channel.

---

## 1. OD-004 — Confidence Strata

### Layout Evidence (from CSS)

The page coordinates **at least 9 visual channels** along a single axis (confidence level: Established / Probable / Speculative / Open):

| Channel | Established | Probable | Speculative | Open |
|---------|------------|----------|-------------|------|
| border-left width | 4px | 3px | 2px | 1px |
| border-left color | #1A1A1A (text) | #4A90D9 (blue) | #D97706 (amber) | #7C3AED (purple) |
| background | --color-zone-sparse | --color-zone-moderate | --color-zone-dense | --color-zone-densest |
| padding (stratum) | 40px | 32px | 20px | 16px |
| max-width (content) | 720px (narrower) | full | full | full |
| h3 font-size | 1.25rem | 1.2rem | 1.125rem | 1.0625rem |
| p line-height | 1.8 | 1.7 | 1.65 | 1.6 |
| p font-size | 15px | 15px | 14px | 14px |
| content density | sparse (wide spacing, simple prose) | moderate | dense (code blocks appear) | densest (questions, checklists) |

Additional structural channels: stratum boundary markers (3-component: 48px whitespace + 3px rule + label), geological column minimap in header, evidence DNA metadata per stratum, epistemic disclosure markers ("You Are Reading"), confidence switcher control.

### The Ideal Compositional Question

> **"What if the page was a geological core sample — and the reader was drilling down from bedrock certainty into the loose sediment of open questions?"**

### Why This Question Works

It implies a *physical metaphor with directional gradient*. A geological core sample has:
- **Layers** (the strata) — implies distinct zones with boundaries
- **Material density** (bedrock vs sediment) — implies that visual density must vary with position
- **Depth** (drilling down) — implies a progressive transformation, not a binary toggle
- **Compression** (deeper = more pressure) — implies that spacing/padding should compress
- **Certainty gradient** (solid rock vs loose material) — implies that border weight, color intensity, and typographic confidence should all co-vary

The builder doesn't need to be told "make borders thinner for less certain content." The metaphor makes that *obvious*. You don't put a 4px border on loose sediment.

### Channels Implied

The geological metaphor naturally activates:
1. **border-weight** (bedrock = thick, sediment = thin)
2. **background-color** (dense stone = warm, loose soil = cool shift)
3. **padding** (compressed strata = tighter)
4. **font-size** (authoritative declarations are larger)
5. **line-height** (confident prose breathes; uncertain prose is packed with caveats)
6. **content-type** (established = prose; speculative = code + evidence)
7. **boundary markers** (geological unconformity lines between strata)
8. **color coding** (each stratum gets a unique accent — semantic, not decorative)
9. **max-width** (confident content doesn't need to fill the page)

### Pipeline Implication

If this question appeared in a synthesizer package Section 10, a builder with access to the mechanism catalog could execute it. The metaphor is concrete enough to imply specific CSS decisions. However, what might be lost is the *fractal application* — the fact that the geological gradient repeats at 4 scales (page, section, component, character). A builder seeing "geological core sample" might produce the page-level strata but miss that *within* each stratum, the intro should be sparse and the evidence section dense. The question could be strengthened: "What if the page was a geological core sample — and each layer was itself a miniature core sample?"

---

## 2. OD-006 — Crown Jewel (Multi-Section Synthesis)

### Layout Evidence (from CSS)

OD-006 is a 7-section page where **each section uses a different organizational mode**, and each mode generates its own density automatically:

- **Section 01 (Conversational PULSE):** Q&A pairs with alternating question-width (60%) and answer-width (100%). Square markers. Sparse questions / dense answers = TIDAL width variation.
- **Section 02 (Narrative CRESCENDO):** 3-act structure with drop caps, WHY/HOW dual-lens toggle (serif vs mono). Discovery text in italic serif. Progressive density increase.
- **Section 03 (Task-Based ISLANDS):** Discrete task clusters. Code blocks appear here. Dense archipelagos of related steps.
- **Section 04 (Confidence GEOLOGICAL):** Border-thickness encodes certainty. Stratum-based nesting.
- **Section 05 (Spatial Hub-Spoke):** Territory grid with solid offset depth. Hub = establishing shot.
- **Section 06 (Emergent Meta-Pattern):** Fractal annotation layer. Self-documenting. The page describes what it IS.

Additional: scroll witness progress bar (fixed top), recursive TOC with serif/sans/mono cascade, pattern-echo miniature visual signatures, territorial border-color hover, fractal scale annotations.

### The Ideal Compositional Question

> **"What if a page about a design system couldn't use the same density mode twice — and each section had to prove that its organizational pattern IS its density pattern?"**

### Why This Question Works

This question is a *structural constraint that generates compositional variety*. It does several things simultaneously:

1. **Forces section-level variety** — "can't use the same mode twice" means 6+ distinct CSS regimes on one page
2. **Implies the thesis** — "prove that organization IS density" means the builder must demonstrate the equivalence, not just assert it
3. **Creates a self-documenting mandate** — the page's content (about density patterns) becomes its own proof material
4. **Implies cross-section coordination** — if each section is different, the *transitions between sections* must be managed (breathing zones, mode-transition spacing)
5. **Requires fractal awareness** — proving the thesis at section scale implies demonstrating it at component scale too

The question doesn't specify Q&A formatting, drop caps, hub grids, or confidence strata. But the constraint "different mode per section + prove equivalence" *requires* all of them (or equally rich alternatives).

### Channels Implied

1. **Section-level background alternation** (zone-sparse, zone-dense, zone-breathing per mode)
2. **Width variation** (Q&A width cycling, hub-grid full-width vs spoke narrow)
3. **Font-family switching** (serif questions, mono code, sans body — per section mode)
4. **Content-block structure** (Q&A pairs, 3-act arcs, task steps, strata, grids)
5. **Drop caps** (narrative sections)
6. **Border-weight semantic** (confidence sections)
7. **Solid offset depth** (spatial sections)
8. **Scroll progress tracking** (page-level meta-awareness)
9. **Fractal annotation** (persistent sidebar labels)
10. **Transition breathing** (48px+ between mode shifts)

### Pipeline Implication

This is the hardest question for a pipeline to execute because it requires *understanding* 5 organizational modes, not just deploying components. A builder given this question would need the mechanism catalog, all OD case studies, and enough creative latitude to choose which mode fits which section. The pipeline's compression problem is most acute here: you can't sample 2-4 mechanisms and produce this page — you need all of them, deployed with compositional intelligence about *when* each one serves the content.

---

## 3. AD-002 — F-Pattern with 5-Act Narrative

### Layout Evidence (from CSS)

The page uses Freytag's 5-act dramatic structure as its organizational backbone:

- **Act indicators** (mono font, uppercase, border-bottom separator) — position labels
- **Tension meter** (5-segment bar with filled segments = act position, square segments per Soul) — CRESCENDO visualization
- **Act I (Exposition):** Sparse. Two-column layout (R2-1.3: column count encodes density). Full F-scan.
- **Act II (Rising Action):** Two-column layouts for scanning theory comparison. Building density.
- **Act III (Climax):** Decision matrix — densest structural component. Full compression.
- **Act IV (Falling Action):** Responsive adaptation tables. Beginning to decompress.
- **Act V (Denouement):** Quick reference checklist. Resolution.
- **Essence pullquotes** (serif italic, purple border, wider padding) — breathing pauses between acts
- **F-degradation mapping:** Full horizontal scan (Act I) degrades to partial scan (Act III) to vertical-only descent (Act V) — the F-pattern decay IS the CRESCENDO compression

### The Ideal Compositional Question

> **"What if scanning a documentation page felt like watching a play — where the reader's eye movement *is* the dramatic arc, and the moment their scanning breaks down is the climax?"**

### Why This Question Works

This question establishes a **proportional equivalence** between two phenomena: reading behavior and dramatic structure. It implies:

1. **Act structure** — documentation needs exposition, rising action, climax, falling action, resolution
2. **Scanning degradation as drama** — the F-pattern's natural decay (full scan to vertical descent) maps to dramatic tension building
3. **Climax = breakdown** — the densest, most complex content (decision matrices) appears where the reader's scanning pattern would naturally compress
4. **Position awareness** — the reader needs to know "where am I in the story" (implies tension meters, act indicators)
5. **Breathing pauses** — plays have intermissions; documentation needs pullquotes between acts

The builder doesn't need to be told "use a 5-segment progress bar." The metaphor "watching a play" implies progress tracking, act markers, and tension awareness.

### Channels Implied

1. **Section padding** (generous in Act I, compressed in Act III, released in Act V)
2. **Column count** (two-column in Act I-II, single-column in Act III)
3. **Content structure** (prose in exposition, tables/matrices at climax, checklists at denouement)
4. **Tension meter** (filled segments count tracks act position)
5. **Font register** (serif pullquotes as breathing pauses, mono for reference material)
6. **Line-height** (generous early, compressed at climax)
7. **Border treatment** (Cat 1 structural on decision matrices = maximum visual weight at climax)
8. **Whitespace rhythm** (pullquote margins create intermission-like breaks)

### Pipeline Implication

The proportional equivalence ("scanning IS drama") is the kind of insight that emerges from tension-composition dialogue, not from mechanism selection. A pipeline that asks "which mechanisms should this page use?" will select individual components. A pipeline that asks "what is the felt experience of reading this page?" might arrive at the dramatic metaphor. The gap is between *assembling parts* and *designing an experience*.

---

## 4. AD-005 — Choreography with Hub-Spoke

### Layout Evidence (from CSS)

The page implements a cinematic shot-progression system:

- **Hub grid** (7 territory tiles in named CSS grid areas: featured + 6 standard) — the establishing shot. Featured tile gets red left border + larger font.
- **Territory tiles** with hover state (border-color transition, not transform — soul-compliant)
- **Spoke pages** (spoke-content with inner container at narrower max-width) — close-up shots
- **Progress indicator** with hub/spoke segments showing position in the navigation cycle
- **WAVE density oscillation:** sparse hub (inhale) / dense spoke (exhale) / sparse return (inhale)
- **Musical analogy encoded:** verse = hub grid, chorus = spoke hero, bridge = transition spacing
- **Breadcrumb navigation** (Hub > Spoke position tracking)
- **Diagonal clip-path** sections creating visual momentum between zones

### The Ideal Compositional Question

> **"What if reading documentation worked like a film — opening with an establishing shot of the whole territory, then cutting to close-ups of each area, with the reader always knowing how to zoom back out?"**

### Why This Question Works

The cinematic metaphor implies a complete **navigational topology**, not just a layout:

1. **Establishing shot** — the reader must first see the whole territory at once (implies a grid of all items)
2. **Close-up** — individual territory deep-dives (implies spoke pages with narrower max-width, more detail)
3. **Cutting** — the transition between overview and detail must be deliberate (implies breathing zones, progress tracking)
4. **Zoom back out** — the reader must always be able to return to the hub (implies breadcrumbs, persistent navigation)
5. **Shot rhythm** — films alternate wide/close/wide (implies WAVE density oscillation)

The builder who receives "like a film" naturally produces:
- A grid overview (establishing shot)
- Featured content with visual prominence (the hero of this shot)
- Narrow deep-dives (close-ups)
- Transition spacing (cuts)
- Position tracking (scene markers)

### Channels Implied

1. **Layout mode** (grid for hub, single-column for spoke)
2. **Container width** (full for hub, narrower for spoke close-ups)
3. **Border treatment** (featured tile gets red accent, standard tiles get neutral)
4. **Padding rhythm** (hub tiles: compact; spoke content: generous)
5. **Typography scale** (hub: label-level meta text; spoke: full-scale heading hierarchy)
6. **Background alternation** (hub on sparse, spoke on dense — WAVE)
7. **Progress visualization** (position in hub-spoke navigation cycle)
8. **Transition spacing** (48px+ between hub and spoke = "cut" pause)

### Pipeline Implication

A pipeline could execute the hub-spoke pattern mechanically (it's a well-defined layout pattern). What the pipeline would miss is the *cinematographic intention* — that the featured territory should feel like the camera lingering, that the transition spacing should feel like a film cut, that the progress bar should feel like a scene counter. The mechanical pattern is achievable; the experiential quality requires the metaphor.

---

## 5. AD-006 — Compound Axis (7 Sections, 7 Patterns)

### Layout Evidence (from CSS)

Each of 7 sections uses a DIFFERENT axis pattern, creating a compound page:

- **Section 1: Z-Pattern** — Z-grid with named areas (z-top-left, z-top-right, z-bottom-left, z-bottom-right). Pattern echo grid miniatures.
- **Section 2: F-Pattern** — Left-anchored scanning. The triple equivalence mechanism visualized.
- **Section 3: Bento Grid** — 2x3 named grid (bento-featured spans 2 columns). Pattern reference cards.
- **Section 4: Spiral** — 3-column named grid (spiral-wide, spiral-medium, spiral-narrow, spiral-deep) with progressive nesting/compression.
- **Section 5: Choreography** — Hub-spoke within one section.
- **Section 6: Decision Matrix** — The convergence point (densest content).
- **Section 7: Fractal Meta** — The page documents itself at 5 scales.

Additional: axis indicator (sticky bar showing current pattern name), scroll witness progress, pattern echo miniatures (CSS-only visual signatures for each pattern), drop caps in full-width containers only (disabled in grid cells).

### The Ideal Compositional Question

> **"What if a page about layout patterns could only explain each pattern by *being* that pattern — so the reader learns Z-pattern by reading a Z-pattern section, learns Bento by navigating a Bento grid, and the final section is the page reflecting on its own structure?"**

### Why This Question Works

This is a **self-referential constraint** — the page's form must be its content. This is the most generative type of question because:

1. **Forces structural variety** — each section MUST use its subject as its form (7 sections = 7 layouts)
2. **Eliminates specification** — the builder doesn't need to be told "use a bento grid for section 3." The content determines the form.
3. **Implies meta-awareness** — the final section must be the page *about* itself, which requires the builder to understand the page's own structure
4. **Creates natural escalation** — simpler patterns (Z, F) early; complex ones (Spiral, Compound) late; meta-pattern last
5. **Implies transitions** — moving between radically different layout modes requires deliberate mode-transition design

### Channels Implied

1. **Grid template** (different named grid areas per section)
2. **Container behavior** (Z-grid 4-quadrant, Bento 2x3, Spiral 3-column asymmetric)
3. **Section background** (alternating zone-sparse / zone-dense for rhythm)
4. **Typography scale** (each section's heading scale matches its density mode)
5. **Border treatment** (structural 3px between sections, micro 1px within)
6. **Content structure** (prose in Z, reference cards in Bento, nested depth in Spiral)
7. **Pattern echo miniatures** (CSS-only micro-visualization of each pattern's geometry)
8. **Axis indicator** (persistent sticky annotation showing current pattern)
9. **Drop cap behavior** (enabled in full-width, disabled in grid cells — context-sensitive)
10. **Scroll witness** (page-level progress tracking)

### Pipeline Implication

This page is almost impossible to produce from a mechanism catalog because the question requires *structural understanding*, not component assembly. The builder must understand what a Z-pattern IS to make a section that IS a Z-pattern. This is where the tension-composition dialogue is most valuable: the TC agent can recognize that "the page about layout patterns should BE layout patterns" and encode that as a structural directive, rather than a list of mechanisms to deploy.

---

## 6. Molly CI/CD Pipeline Build

### Layout Evidence (from CSS)

The pipeline build uses a "survey station" metaphor with geological zone naming:

- **Zone backgrounds:** survey-parchment (#FEF9F5), survey-drafting (#FFFFFF), survey-fieldwork (#FAF5ED), survey-bedrock (#1A1A1A)
- **Spacing compression gradient:** survey-sparse (80px), survey-moderate (64px), survey-breathing (56px), survey-tight (48px), survey-dense (40px) — WAVE pattern
- **Border-weight gradient:** border-measured (4px), border-structural (3px), border-projected (1px) — certainty encoding
- **Fix cycle additions:** philosophical-pause (third register, warm background, narrower max-width, left border accent), survey-parchment-alt for subtle within-zone alternation

The page has: dark header with 3px red border, survey container at 960px, zone labels in mono uppercase, PHASE markers, CONTEXT callouts with blue left border, philosophical pause sections. After fix cycle: 3 visual registers (dark bedrock, warm philosophical pause, standard cream).

### What Question the Pipeline Likely Asked

Based on the synthesizer package evidence (S2-M01 through S2-M08), the pipeline likely provided something like:

> "Build a page about Molly Cantillon's panopticon concept. Use the survey-station metaphor. Apply WAVE density through spacing compression. Deploy geological stratification for zone backgrounds. Use border-weight gradient to encode certainty."

This is a **specification**, not a question. It tells the builder *what to do*, not *what to discover*.

### The Ideal Compositional Question

> **"What if this essay was a surveyor's field notebook — where the reader moves from precise measurements of Molly's argument to the unmeasured territory at its edges, and the page itself records which claims are measured and which are projected?"**

### Why This Question Would Produce Richer Output

The "surveyor's field notebook" metaphor implies everything the pipeline specified (zones, certainty encoding, spacing gradient) but also implies:

1. **Handwritten annotations** — margin notes, crossed-out earlier drafts, pencil-vs-pen distinctions (implies third register, philosophical pauses)
2. **Measurement precision varying** — precise data sections vs rough sketches (implies content-type variation within zones, not just zone-level background swaps)
3. **The edge of the known** — the page should have a visible frontier where measurement gives way to speculation (implies a structural climax, not just phase markers)
4. **Recording instrument** — the notebook is itself an artifact (implies self-awareness, meta-commentary)

### The Gap

The pipeline provided: metaphor name + mechanism list + spacing values + border weights.
The ideal question provides: a metaphor that *implies* all of those + experiential qualities the pipeline couldn't specify.

The gap is **experiential implication**. The pipeline told the builder to use "survey-station metaphor" and "WAVE density" as labels to apply. The ideal question tells the builder to *be* a surveyor — which naturally produces WAVE density, certainty encoding, and measurement-vs-projection zones without naming any mechanism.

Concrete losses:
- **Within-zone variation:** The pipeline produced uniform cream zones. The fix cycle had to add --survey-parchment-alt. The metaphor would have implied "field notes have different paper stocks."
- **Third register:** Added in fix cycle. The metaphor implies "sketches vs measurements vs reflections" = 3 natural registers from the start.
- **Structural climax:** The pipeline produced uniform PHASE markers. The metaphor implies a moment where the survey reaches terra incognita — a visible frontier.

### Pipeline Implication

The synthesizer package Section 10 could carry the ideal question verbatim. But the builder would need:
1. Permission to interpret the metaphor (not just apply named mechanisms)
2. Enough creative latitude to let the metaphor generate layout decisions
3. No mechanism list overriding the metaphor's implications

The pipeline's current architecture provides a metaphor *and* a mechanism list, which creates a tension: does the builder follow the metaphor or the list? When they disagree (metaphor implies 3 registers, list specifies WAVE = 2 density levels), the list wins because it's more explicit. The ideal pipeline would provide the question and let the builder derive the mechanism list.

---

## 7. Yegge Authentication Middleware (Pipeline Build)

### Layout Evidence (from CSS)

The pipeline build uses a "tower descent" metaphor with 6 geological zones:

- **Zone system:** overseer (#FEF9F5), operations (#FFFFFF), bedrock (#1A1A1A), philosophical (#FAF5ED), factory (#FAF5ED), resolution (#FEF9F5)
- **Density wave:** density-sparse (64px), density-moderate (48px), density-dense (40px), density-maximum (32px)
- **CRESCENDO compression:** typography sizes and line-heights compress across zones. Zone 1 h2 = 2rem, Zone 3 h2 = 1.375rem. Zone 1 p line-height = 1.7, Zone 3 p = 1.55.
- **Zone-specific typography per zone class** (.zone--overseer h2, .zone--operations h2, .zone--bedrock h2, .zone--philosophical h2)
- **Transition table** documented in CSS comments: each zone boundary changes 3-4 channels (bg, type, space, border)
- **Border differentiation:** structural (4px), accent (3px), micro (1px)
- **Fix cycle additions:** Zone 4-5 share same bg, added 1px border-top for boundary. Callout demotion (2 of 3 Zone 5 callouts demoted to inline bold to avoid cacophony).

### What Question the Pipeline Likely Asked

Based on the transition table and package references (S2-M01, S2-M03, S2-M08), the pipeline likely provided:

> "Build a page about Steve Yegge's Gas Town agent factory architecture. Use the tower-floor metaphor. Apply CRESCENDO compression through typography and spacing. Deploy geological stratification with 6 zones. Each zone transition must change 3-4 channels."

### The Ideal Compositional Question

> **"What if reading about Yegge's agent factory was like descending through the floors of the factory itself — starting in the bright executive overview, passing through the operational middle, hitting the dark machine room at the center, then surfacing through the philosophical foundations back into daylight?"**

### Why This Question Would Produce 7-Channel Coordination

The "descending through factory floors" metaphor implies a **round-trip journey** with:

1. **Background gradient** (bright surface / neutral middle / dark core / warm philosophical / bright return)
2. **Typography compression** (executive language at top, technical compression in machine room, philosophical expansion near bottom, summary at surface)
3. **Spacing compression** (generous at top, maximum compression at core, decompression returning)
4. **Content register** (narrative at top, operational tables in middle, code at machine room, reflection near bottom)
5. **Border treatment** (structural at operational boundaries, inverted in dark zone, warm accents in philosophical zone)
6. **Container width** (full at top/bottom, narrower at philosophical reading corridor)
7. **Line-height wave** (generous 1.7 at surface, compressed 1.55 at core, generous 1.8 at philosophical, 1.7 return)

### The Gap

The pipeline produced a page with strong zone-level variation (the 6 zones have genuinely different CSS treatment per zone class). This is one of the richer pipeline outputs. The gap is narrower here than for Molly's page.

What's still missing:
- **Round-trip awareness:** The page descends but the *return* to surface doesn't feel like a *return*. Zone 6 (resolution) gets the same treatment as Zone 1 (overseer). The ideal question implies "surfacing back into daylight" — which suggests Zone 6 should feel *different* from Zone 1, like arriving home changed.
- **Machine room intensity:** The bedrock zone (#1A1A1A) is dark, but it reads as "another zone" rather than "the center of gravity." The ideal question implies this is the heart of the factory — it should have the most visual energy, not just a color inversion.
- **Same-background boundary:** Zones 4-5 share #FAF5ED. The fix cycle added a 1px border-top. The metaphor would have implied different zones should feel different (perhaps the philosophical zone gets slightly warmer, the factory floor gets slightly cooler).

### Pipeline Implication

The Yegge build demonstrates that the pipeline CAN produce multi-channel coordination when the synthesizer package provides explicit per-zone CSS specifications. The channel coordination is mechanically present (bg, type, space, border all change at zone boundaries). What's missing is **experiential coherence** — the channels change together but don't tell a story together. The ideal question provides narrative direction ("descending, hitting center, surfacing") that would make the channel changes *meaningful* rather than merely *present*.

---

## Cross-Cutting Findings

### 1. The Question Taxonomy

The 7 ideal questions cluster into 3 types:

**Type A: Metaphor-as-Rule** (OD-004, Molly, Yegge)
> "What if the page was a [physical metaphor]?"

The metaphor implies a gradient with multiple dimensions. The builder maps CSS properties to metaphor properties. Works well when the content has a natural ordering (certainty, depth, time).

**Type B: Constraint-as-Generator** (OD-006, AD-006)
> "What if the page couldn't [do X] — and had to [prove Y]?"

The constraint forces structural variety. The builder must invent solutions because the constraint eliminates the default approach. Works well when the content is self-referential or meta.

**Type C: Experience-as-Architecture** (AD-002, AD-005)
> "What if reading this page felt like [watching/doing/experiencing X]?"

The experiential metaphor implies temporal rhythm and emotional arc. The builder maps CSS transitions to dramatic beats. Works well when the content has narrative structure.

### 2. What Makes a Question Generative

A compositional question is **generative** when it satisfies all three criteria:

1. **Implies a rule, not a property.** "Use 4px borders" is a specification. "Border thickness encodes certainty" is a rule. Rules require multi-channel coordination because the builder must decide how EVERY property relates to the rule's axis.

2. **Has entailments beyond the obvious.** "Geological core sample" directly implies layers and density. It *indirectly* implies boundary markers, compression, fractal repetition, and evidence types. The indirect entailments are where compositional richness lives.

3. **Constrains without specifying.** "Each section must be its own proof" constrains radically (no two sections can use the same layout) but specifies nothing (the builder chooses which layouts). This is the opposite of a mechanism list.

### 3. The Pipeline's Compositional Gap

Comparing the 5 exploration questions to the 2 pipeline questions reveals a consistent pattern:

| Aspect | Explorations | Pipeline Builds |
|--------|-------------|-----------------|
| **Question type** | Metaphorical, implies CSS system | Mechanical, names specific mechanisms |
| **What's specified** | An experience to create | Properties to deploy |
| **Builder's creative task** | Derive layout from metaphor | Apply named patterns |
| **Channel coordination** | Emergent from metaphor logic | Explicit in per-zone CSS specs |
| **Where richness lives** | In metaphor's indirect entailments | In synthesizer package's mechanism list |
| **What fix cycles address** | Usually: missed entailments | Usually: missing variation within zones |

The pipeline provides: **metaphor label + mechanism list + CSS specifications**.
The explorations provided: **metaphor question that IMPLIES the mechanism list**.

The gap is the difference between *telling* the builder what to do and *asking* the builder a question whose answer naturally produces the right layout.

### 4. How to Bridge the Gap

If the pipeline's Section 10 (Compositional Question) carried the ideal question format, the builder would need:

1. **No mechanism list** — or at most a "suggested starting point" that the builder can override
2. **Metaphor interpretation training** — case studies showing how metaphors generate CSS decisions
3. **Permission to derive** — explicit instruction that the question is the authority, not the mechanism list
4. **Multi-channel awareness** — the builder must know that a good answer changes 5+ channels simultaneously

The risk: a bad builder given "geological core sample" produces 4 background colors and nothing else. The mechanism list exists as a safety net.

The solution: provide the question AS the primary directive and the mechanism list as a "minimum floor — the question should generate AT LEAST these mechanisms, and likely more."

### 5. Question Quality Indicators

How to tell if a compositional question is good enough:

- **Channel count test:** Can you list 5+ CSS channels the metaphor implies without being told? If yes, generative.
- **Entailment test:** Does the metaphor have implications the asker didn't explicitly intend? If yes, generative.
- **Constraint test:** Does the metaphor eliminate some layouts while enabling others? If yes, generative.
- **Disagreement test:** Would two builders produce DIFFERENT but equally valid layouts? If yes, generative.
- **Specification smell:** Does the question name specific CSS properties or mechanism names? If yes, it's a specification disguised as a question — rewrite it.
