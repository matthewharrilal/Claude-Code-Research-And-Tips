# Conviction Brief: Steve Yegge and Gas Town

**Metaphor:** DISPATCH CENTER / OPERATIONS ROOM
**Content:** Steve Yegge's Gas Town — agent factory architecture for solo developers at Stage 7+ on the complexity ladder
**Derivation:** Full TC pipeline (Phases 0-4.5), 14 axes questioned, 5 genuine tensions identified, 4 candidate metaphors evaluated

---

## Section 1: WORLD-DESCRIPTION

This is a world of warm stone and sharp steel. Light falls flat and even across every surface — there are no shadows because nothing here hides. Edges are decisive. Corners are cut at ninety degrees. The walls are cream-colored plaster over angular frames, and every border has weight that means something. This world does not soften for you, but it does not repel you. It is warm the way a well-built room is warm — the warmth of material, not decoration.

In this world, information flows through classification levels. The page is an operations room — not a battlefield command post (that would be aggressive) but a dispatch center where work is triaged, routed, and resolved in real time. The room has stations. Each station has a different character: the briefing corner where context is laid out in wide margins and considered typography, the situation board where the core insight hits like an alert changing from green to amber, the tactical map where architecture unfolds in dense grids and layered diagrams, the command console where operational instructions arrive in monospace on dark surfaces, and the dispatch log where the record resolves into reference and debrief. The reader enters this room as a civilian — someone who programs. They leave as an operator — someone who commands a colony. The room itself performs the transformation.

This content has three density registers. First: the author's voice — irreverent, profane, barely contained ("slopping shiny fish into wooden barrels at the docks," "smuggled 400 miles upriver in my ass"). This is the dispatch room's live radio chatter, crackling with personality. Second: the technical architecture — 8 roles in 3 hierarchical levels, memory systems with layered retrieval, communication flows with explicit routing. This is the tactical map, dense and precise. Third: the operational payload — bash commands, tmux configurations, startup scripts, cost calculations. This is the command console, dark and functional. These three registers alternate throughout the content, and the page must honor each without flattening them into a single voice.

This metaphor works for THIS content BECAUSE Gas Town is literally an operations center — a hierarchical system where commands flow through role-based stations, where monitoring and quality checks happen in real time, where the human sits at the overseer's station with an inbox and a decision queue. The dispatch center metaphor takes this operational reality and gives it a physical vocabulary that is NOT the content's own vocabulary (no "factory," no "ant colony," no "Mad Max"). It provides interpretive distance while preserving structural fidelity.

**Risk profile:** The dispatch center metaphor ENCOURAGES clinical uniformity — status boards, standardized forms, institutional sameness. The builder must RESIST this. Operations rooms feel alive because they are under pressure, because alerts change state, because operators are making real-time decisions. The builder should AMPLIFY the energy dimension: the transitions between zones should feel like changes in operational tempo, not like walking past identical cubicles. The warm cream walls fight the institutional pull. The author's voice — captured in callouts and pull quotes — fights the clinical pull. These are the metaphor's antibodies against its own worst tendency.

---

## Section 2: CALIBRATION

**Container width: 960px.** This content is a mix of wide architectural diagrams and reading-length prose. 960px gives the ASCII art room to breathe without making the body text feel stranded in a field. The operations room is generous but purposeful — not a warehouse, not a closet.

**Background arc:**
- Z1 (Briefing Room): `#FEF9F5` — warm cream. The orientation space. The reader has just entered. The warmth says "you belong here," the sharp typography says "pay attention."
- Z2 (Situation Board): `#FFFFFF` — near-white, dense zone. The core insight lands here. The background brightens subtly — the lights are up because you need to see everything clearly.
- Z3 (Tactical Map): `#FAF5ED` — breathing/earthy tan. The densest content zone, but the slightly warmer background creates an atmosphere of sustained attention rather than clinical examination. This is where you lean in over the map table.
- Z4 (Command Console): `#1A1A1A` sections within `#FEF9F5` flow — dark zones for code blocks and operational commands, returning to cream for principles and prose. The dark zones are the console screens; the cream is the room around them.
- Z5 (Dispatch Log): `#FEF9F5` returning to cream — resolution. The reference tables and comparisons live in near-white cards. The room quiets. You are being debriefed.

**Spatial arc:**
- Z1: Wide breathing. 64-80px section padding. The briefing room has space between the chairs and the screen.
- Z2: Tightening. 48-64px. The insight demands closer attention. Space compresses as significance increases.
- Z3: Dense. 32-48px. The tactical map is information-rich. Components stack closer. The 8 role descriptions want tight internal spacing (8-12px) and moderate external spacing (24-32px).
- Z4: Variable. 24-48px. Code blocks at 16-24px internal padding within dark zones. Principles at 48px between them. The rhythm PULSES here — dense command, then breathing principle, then dense command.
- Z5: Relaxing. 48-64px returning to generous spacing. The dispatch log gives you room to scan.

**Type arc:**
- Z1: Instrument Serif at display sizes (32-40px) for the page title and the first major heading. Inter at 16px/1.7 line-height for the orientation prose. The briefing room speaks with authority, then with clarity.
- Z2: Instrument Serif for the section heading (24-28px). Inter at 16px for the "core insight" prose. The situation board QUOTE — Yegge's "biggest fuckin' ant" line — wants the largest pull-quote treatment the system can give it. Instrument Serif italic at 20-24px, left-border callout at 4px red.
- Z3: Inter at 16px body. JetBrains Mono for role commands and technical specifications. Heading sizes step down (20-24px h2, italic h3 at 18px) as the content gets denser. The tactical map is about precision, not ceremony.
- Z4: JetBrains Mono dominates in code blocks (13-14px). Inter returns for principles and philosophical content (16px). The command console's voice is the monospace voice; the surrounding prose is the operator's narration.
- Z5: Inter throughout at 14-16px. Tables in mono headers. The dispatch log is functional, not dramatic.

The builder has the full range between these poles. The surface zone breathes at 64-80px padding and speaks in Instrument Serif display. The tactical zone compresses to 32-40px and speaks in Inter and JetBrains Mono precision. Between these poles, the full gradient is yours.

---

## Section 3: OPPOSITION MAP

### Opposition 1: WILDNESS vs AUSTERITY (dominant)

The content is barely contained. Yegge's voice explodes with profanity, fish metaphors, Mad Max references, face-ripping warnings. The design system is composed, measured, precise. This opposition shaped the metaphor most deeply — the dispatch center is the answer to "where does wildness have structure?"

**What emerges from the fight:** A containment that CHANNELS energy rather than suppressing it. The 4px left-border callouts become radio transmissions — the wild voice arrives through a structured channel. The sharp boxes don't tame the language; they give it authority. The profane quote in an Instrument Serif italic callout with a red left-border is simultaneously irreverent AND architectural. The container does not diminish the voice; it AMPLIFIES it by contrast.

**Creative invitation:** How does a dispatch room feel when the radio is hot with urgent, profane, exhilarating transmissions? The structure of the room doesn't change. The walls don't flex. But the CONTENT of the communications transforms the room's atmosphere. The builder's job is to create containers that feel taut with the energy inside them — sharp-edged vessels holding explosive content.

### Opposition 2: PARADIGM INVERSION vs EDITORIAL AUTHORITY (deepest)

The content says "everything you know is wrong." The design system says "here is the truth." The content wants to DESTABILIZE the reader's model. The design system wants to ESTABLISH one.

**What emerges from the fight:** A progression from ASSERTION to REVELATION. The opening zones assert (editorial authority: "here is where you are, here is who Yegge is"). The middle zones REVEAL (the core insight explodes: "Claude Code is the biggest fuckin' ant"). The late zones RECONSTRUCT (here is the new model, here are the commands, here is your new identity). The design system's assertive personality serves the opening and closing. The content's destabilizing energy serves the middle. The opposition resolves TEMPORALLY — the page moves through assert, destabilize, reconstruct.

**Creative invitation:** The Z2 transition (Situation Board) is where the paradigm shift LANDS. This is the moment where the content says "everything you thought about programming is wrong." How does the design communicate that a fundamental shift has occurred? Not with labels ("PARADIGM SHIFT") but with structural means: a change in background atmosphere, a compression of spacing that signals heightened significance, a callout treatment for the core quote that gives it the visual weight of an editorial declaration.

### Opposition 3: IDENTITY TRANSFORMATION vs STATIC CONSISTENCY

The reader should feel DIFFERENT at the bottom of the page than at the top. They enter as a programmer; they leave as a factory manager. But KortAI maintains its identity throughout — same palette, same typography, same borders.

**What emerges from the fight:** The system's consistency becomes the VEHICLE for the reader's transformation. The room doesn't change. The READER changes. The dispatch center's stations don't transform — the operator's understanding of them does. At the top, the reader sees a complex room. At the bottom, the reader understands each station's purpose and their own role within it. The page's visual consistency IS the message: "the tools don't change — you do."

**Creative invitation:** Can the builder make the reader FEEL their own transformation without the page ANNOUNCING it? The Quick Reference section at the end should feel qualitatively different from the Implementation Guide earlier — not because the design changed, but because the reader's relationship to the content changed. Commands that felt overwhelming at first glance should feel like "my toolkit" by the end.

### Opposition 4: HETEROGENEOUS CONTENT vs UNIFIED VOICE (unresolved)

The content has 13 sections spanning biography, philosophy, ASCII diagrams, bash scripts, comparison tables, troubleshooting flows, and quotes. The design system wants everything to feel like one publication.

**What emerges from the fight:** This is the UNRESOLVED opposition — the one where both poles are valid and the builder gets to choose. The builder can lean toward DISTINCT STATIONS (each section type gets its own atmospheric treatment, making the heterogeneity a feature) or UNIFIED PUBLICATION (all sections share a single voice, making the diversity feel curated). The dispatch center metaphor supports both readings: operations rooms have distinct stations, but they all exist within one room.

**Creative invitation:** The builder decides. Does the troubleshooting section feel like a different station (different background, different density) or like a different chapter of the same report (same background, different heading treatment)? Both are valid. The content's diversity is the builder's richest material.

### Opposition 5: PROGRESSIVE REVELATION vs EXPLICIT LABELING

The content's aha-moments want to be earned. The design system wants to label everything. This tension is genuinely structural: dispatch centers use classification levels to gate information access. The builder can use DENSITY as classification — denser sections require more investment to parse, rewarding those who stay.

---

## Section 4: COMPOSITIONAL ARC

The page opens wide and warm. The reader has just walked into the operations room. The lights are steady. The cream walls glow. The first thing they see is a large display showing where they are — the Complexity Ladder, rendered as a vertical axis with Level 7 highlighted. This is the BRIEFING ROOM: generous spacing, Instrument Serif authority, the orientation content that says "here is your position in the world." The biographical content about Yegge sits here too — his credentials laid out in a clean data table, his presence established not through dramatics but through quiet authority. A drop cap on the first paragraph signals editorial intention.

Then the atmosphere shifts. The reader steps to the SITUATION BOARD. The first transition should feel like a change in operational tempo — the room has gone from standby to active. The core insight lands: "Claude Code is the world's biggest fuckin' ant." This quote demands the largest pull-quote treatment available — 4px red left-border, Instrument Serif italic, generous padding. It is a dispatch going out to all operators. The factory metaphor unfolds here: the Traditional vs Gas Town comparison table, the Idea Compiler concept. The background may shift subtly (cream to near-white) as the content densifies. This is the zone where the paradigm starts cracking.

**Creative waypoint 1: THE CORE INSIGHT QUOTE.** This is the page's first peak. The "biggest fuckin' ant" quote should feel like a signal flare going off in the operations room. The builder should give this moment disproportionate compositional energy — it is the single line that reframes everything that follows. Consider: larger type size than any other pull quote on the page, red accent at maximum intensity, generous breathing room above and below so it lands in silence.

The reader moves to the TACTICAL MAP. This is the page's densest zone and its architectural heart. The 8 Roles hierarchy diagram (the large ASCII art) is the centerpiece — a spatial structure that demands spatial treatment. The role deep-dives (Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew, Overseer) are 8 entries that risk monotony if uniformly formatted. The builder must introduce variation: perhaps a bento grid for the role overview, with the 3 town-level roles in larger cells and the rig-level roles in smaller ones, encoding the hierarchy spatially. Then the Beads Memory System brings its own layered architecture (hot/warm/cold context) and the Communication Flow diagram. This zone is DENSE BY NATURE — the content demands it. The builder's job is to make the density NAVIGABLE, not to fight it.

**Creative waypoint 2: THE ROLE HIERARCHY.** The 8 roles are the content's structural backbone. The builder should invest significant energy in how they are presented — not 8 identical cards, but a visual hierarchy that mirrors the role hierarchy. The 3 town-level roles (Mayor, Deacon, Dogs) have different weight than the 4 rig-level roles (Refinery, Witness, Polecat, Crew), which have different weight than the 1 human role (Overseer). The bento grid can encode this: 2x2 cell for Mayor (the most complex role), 2x1 for Refinery and Polecat (secondary), 1x1 for the monitoring/ephemeral roles. Or the builder may find a different spatial encoding. The key: the HIERARCHY must be VISIBLE, not just labeled.

**Creative waypoint 3: THE OPERATIONAL PULSE.** In Z4 (Command Console), the content alternates between philosophical principles (GUPP, Zero Framework Cognition, Agents as Cattle) and practical operations (installation commands, tmux workflow, daily workflow script). This alternation is the page's natural PULSE rhythm — dense dark code block, then breathing philosophical prose, then dense dark code block. The builder should make this pulse FEEL like operational tempo: the dark code zones are the console screens flashing with commands, the cream prose zones are the operator's narration between commands. The transition between them should be SMOOTH (same domain, different intensity) — no heavy borders needed, just the background shift between cream and dark.

At the mid-point — roughly the 6 Waves of AI table and Core Principles — the page reaches a turning point. The reader has absorbed the architecture and is now being equipped to OPERATE. The shift from "understanding" to "doing" should feel like the moment in a briefing when the commander says "here are your orders." The implementation guide that follows is procedural: step-by-step commands, checkpoint tables, tmux configurations. The code blocks darken. The spacing tightens. The operational tempo is at its highest.

**Creative waypoint 4: THE WARNINGS.** The content has genuinely alarming statements: "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees." These are not gentle cautions — they are operational warnings in a dispatch center. They deserve the warning callout treatment (amber left-border, warm background) BUT with Yegge's actual voice preserved. The temptation will be to domesticate these warnings into polite information boxes. RESIST. The warnings should feel like a dispatch operator shouting over the radio. The container is structured; the content is wild. That contrast IS the page's personality.

**Creative waypoint 5: THE COMPARISON SECTION.** Three side-by-side comparisons (Gas Town vs Ralph, vs CC Mirror, vs Orchestra) and the Orchestrator Spectrum diagram. This is the STATUS BOARD — where the operator can see all options simultaneously. A grid treatment, data tables with mono headers, and the spectrum diagram as a horizontal visual. The density here is HIGH but ORGANIZED — the reader is scanning, not reading sequentially. Consider: the three comparison tables could live in a bento-style grid (each table in its own cell) rather than stacked sequentially, letting the reader's eye move laterally.

The page RESOLVES in the DISPATCH LOG. The quotes section is the operational transcript — Yegge's voice captured in sequential callouts. The quick reference is the operator's pocket card. The sources are the reference shelf. The footer mirrors the header's dark background, closing the structural bookend. The spacing opens up. The operational tempo declines. The reader has been briefed, equipped, and tested. They are now an operator.

The CLIMAX is not at the end — it is at the Z3/Z4 boundary, roughly 50-65% through the page, where the reader has absorbed the full architecture and transitions to doing. This is the highest-density, highest-energy zone. The RESOLUTION from Z4 to Z5 is an exhale — the page earning its closure through completeness, not drama.

---

## Section 5: CREATIVE CONDITIONS

**Invitation 1: The Radio Voice.** Yegge's quotes are the most distinctive material in this content. Consider giving them a consistent but distinctive treatment — perhaps Instrument Serif italic body with a red 4px left border, differentiated from the standard info/tip callout system. These are not informational callouts; they are the dispatch operator's transmissions. They should feel like they came through a channel, not like they were typeset by an editor. The border makes them structural; the italic makes them personal.

**Invitation 2: The Escalating Alert Level.** The content's emotional arc moves from calm introduction through active engagement to alarming warnings. Consider encoding this as an accent color progression: blue accents in Z1 (informational — "here is who Yegge is"), amber accents in Z3-Z4 (operational warnings — "costly, chaotic, immature"), red accent for the critical warnings ("face ripped off," "$300/day"). This uses the semantic color system to encode OPERATIONAL URGENCY rather than just content type.

**Invitation 3: The Asymmetric Role Grid.** The 8 roles are the content's most complex structural element. Rather than 8 uniform cards, explore whether the role hierarchy can be encoded SPATIALLY: the 3 town-level roles across the top row (wide, authoritative), the 4 rig-level roles in a denser middle grid (medium, specialized), and the human Overseer role as a full-width element below (returning to wide, personal). This makes the hierarchy VISIBLE without labels that say "Town Level" and "Rig Level."

**Invitation 4: The Quiet Zone.** After the dense tactical map (Z3) and before the operational commands (Z4), consider a BREATHING transition that is deliberately plainer than everything around it. Perhaps a single Yegge quote on a warm cream background with maximum spacing above and below — a moment where the operations room goes quiet and a single voice speaks. This serves D-09 (Quiet Zone) and D-06 (Negative Space as Shape): the emptiness around the quote gives it the weight of a directive.

**Invitation 5: Try the complexity ladder as the page's spine.** The "You Are Here" complexity ladder (Levels 0-7) could serve double duty — not just as the opening diagram but as a navigational reference that the reader's eye returns to. Consider placing it in a position (perhaps sticky-positioned on narrow viewports, or as a sidebar element on wide ones) where it PERSISTS as the reader scrolls, reinforcing the "you are climbing" message. This is experimental and may fight the single-column editorial voice — but if it works, it turns the complexity ladder from CONTENT into ARCHITECTURE.

**Experimental question 1:** What happens if the code blocks in Z4 are NOT standard dark-background code blocks but instead have a subtly different dark treatment — perhaps `#1A1A1A` with a 1px left border in the section's accent color? This would make the command console's code blocks feel OWNED by their section rather than generic. The risk is incoherence with the standard code block component; the reward is that the operations room's command console feels like a distinct station.

**Experimental question 2:** What happens if the Beads Memory Model diagram (the layered hot/warm/cold context) is rendered NOT as a code block but as a three-tier visual structure using zone backgrounds — hot in near-white, warm in cream, cold in earthy tan? This would make the memory hierarchy PERCEPTIBLE rather than described. The risk is inventing a component where adaptation would suffice; the reward is that the most important architectural concept in the content becomes architecturally rendered.

---

## Section 6: CONTENT MAP

### Content Outline with Register and Emotional Arc

| # | Section | Register | Emotional Energy | Word Count (est.) | Key Structural Features |
|---|---------|----------|-----------------|-------------------|------------------------|
| 0 | You Are Here | ORIENTATION | Calm, positioning | ~200 | ASCII complexity ladder diagram, prerequisite list, learning outcomes list |
| 1 | Who is Steve Yegge? | NARRATIVE | Building credibility | ~300 | Data table (career), bulleted credentials, "Vibe Coding" block quote |
| 2 | The Gas Town Mental Model | PROVOCATIVE | PEAK 1 — paradigm explosion | ~350 | Core insight quote (strongest line in content), 2 comparison diagrams (ASCII), data table, block quotes |
| 3 | The 8 Roles Architecture | REFERENCE/TECHNICAL | Dense, sustained attention | ~900 | Large ASCII hierarchy diagram, 8 role deep-dives each with: description, responsibility list, CLI commands code block, model recommendation. Communication flow ASCII diagram |
| 4 | Beads: The Memory System | REFERENCE/TECHNICAL | Dense, architectural | ~450 | ASCII architecture diagram, ASCII memory model diagram, CLI command examples, data table (problems/consequences), block quote |
| 5 | The 6 Waves of AI | DATA/NARRATIVE | Historical framing | ~200 | 2 data tables (6 waves, 8 stages), critical warning quote |
| 6 | Core Principles | NARRATIVE/PHILOSOPHICAL | Meditative, principled | ~350 | 6 sub-principles each with heading, quote, and explanation. GUPP, Zero Framework, Cattle not Pets, Nondeterministic Idempotence, Token Spend, Talk to the Plan |
| 7 | Implementation Guide | REFERENCE/CODE | Procedural, actionable | ~500 | Prerequisites checklist, 3 multi-step code blocks (installation, first rig, core roles), large tmux ASCII diagram, shell script code block, daily workflow code block |
| 8 | Checkpoints and Verification | REFERENCE | Monitoring, confirming | ~150 | Data table (post-install checkpoints), code blocks (health checks, quality verification) |
| 9 | Troubleshooting | REFERENCE | Diagnostic, problem-solving | ~400 | 6 failure patterns each with: symptom, cause, recovery code block. Recovery command reference code block |
| 10 | When to Use Gas Town | DATA/REFERENCE | Evaluative, decision-oriented | ~200 | Use/don't-use lists, large ASCII decision matrix diagram |
| 11 | Quotes and Key Statements | PROVOCATIVE | Voice compilation | ~200 | 10+ block quotes organized by theme |
| 12 | Comparison with Other Patterns | DATA/REFERENCE | Analytical, comparative | ~350 | 3 comparison data tables, ASCII orchestrator spectrum diagram, per-comparison summary |
| 13 | Sources + Appendix | REFERENCE | Resolving, cataloging | ~300 | Links, data table (community extensions), 4 CLI reference code blocks, cost estimation code block |

### Emotional Arc Summary

```
ENERGY
  ^
  |     ★ PEAK 1 (Core Insight)
  |    / \
  |   /   \        ★ PEAK 2 (8 Roles density)
  |  /     \      / \
  | /       \    /   \     ★ PEAK 3 (Implementation)
  |/         \  /     \   / \
  ★           ★        \ /   \      ★ Resolution
  |  Briefing  Transition ★    \   / |
  |                    Principles \  / |
  |                               ★   |
  |                            Comparison|
  +-------------------------------------->
  Z1    Z2      Z3       Z4        Z5
```

Peak 1 occurs early (Z2) — the paradigm shift quote. This is unusual but correct for this content; the provocative claim LEADS, and the rest of the page FULFILLS it. Peak 2 is sustained (Z3) — the dense architectural core. Peak 3 is operational (Z4) — the "now do it" section. The resolution (Z5) is calm.

### Structural Feature Density

- **ASCII diagrams:** 8 (complexity ladder, traditional vs Gas Town, role hierarchy, communication flow, Beads architecture, memory model, tmux layout, decision matrix, orchestrator spectrum)
- **Data tables:** 8+ (career, comparison tables x3, wave table, stage table, checkpoint table, community extensions)
- **Code blocks:** 15+ (CLI commands across roles, installation, startup script, daily workflow, health checks, troubleshooting recovery, quick reference)
- **Block quotes:** 12+ (curated Yegge voice)
- **Bulleted/numbered lists:** 10+ (prerequisites, responsibilities per role, principles, use/don't-use)
- **Checklists:** 1 (prerequisites)

This content is STRUCTURALLY RICH — the builder has an unusual abundance of non-prose elements to compose with. The challenge is not "how do I fill the page" but "how do I SEQUENCE 8 ASCII diagrams, 8 tables, 15 code blocks, and 12 quotes without the page feeling like a reference manual."

### Zone-to-Content Mapping (Final)

| Zone | Sections | Character | Density |
|------|----------|-----------|---------|
| Z1: Briefing Room | #0 You Are Here, #1 Who is Yegge | Warm, authoritative, orienting | SPARSE |
| Z2: Situation Board | #2 Gas Town Mental Model | Provocative, paradigm-shifting | MODERATE |
| Z3: Tactical Map | #3 The 8 Roles, #4 Beads, #5 The 6 Waves | Dense, architectural, sustained | DENSE |
| Z4: Command Console | #6 Core Principles, #7 Implementation, #8 Checkpoints, #9 Troubleshooting | Operational, pulsing between code and prose | DENSE-VARIABLE |
| Z5: Dispatch Log | #10 When to Use, #11 Quotes, #12 Comparisons, #13 Sources | Evaluative, referential, resolving | MODERATE-SPARSE |

---

## EXPLORATION LOADING (for builder context window)

**LOAD: OD-004** (confidence encoding)
WHY: OD-004's border-weight gradient for confidence levels challenges the dispatch center metaphor's tendency toward UNIFORM treatment. In a dispatch center, everything might feel equally urgent. OD-004 shows how GRADUATED emphasis creates hierarchy even within dense zones — exactly what the 8-role section needs.

**LOAD: DD-006** (fractal self-similarity)
WHY: DD-006's fractal rhythm — the same dense/sparse pattern visible at page, section, component, and character scales — complements the dispatch center's STATION-BASED architecture. The stations are the page-level rhythm; DD-006 shows how to make that rhythm repeat WITHIN each station.

**LOAD: CD-003** (if available — a composition that handles extreme structural heterogeneity)
WHY: This content has 8 ASCII diagrams, 8 tables, 15 code blocks, and 12 quotes. The builder needs a reference for how to compose with abundant non-prose elements without the page becoming a reference manual.

**SKIP: Any exploration with a factory, industrial, or operations metaphor** — the dispatch center metaphor is sufficiently close to industrial vocabulary that loading an industrial exploration risks collapsing interpretive distance. The builder needs explorations that FIGHT the metaphor, not confirm it.

---

*This brief was produced by running the full TC pipeline (Phases 0-4.5) on the Gas Town extraction content. The metaphor was derived from 14 axes of questioning, 5 genuine tensions (RECONCILE, FEEL, BECOME, NAVIGATE, DISCOVER), and 4 candidate domains evaluated against 6 binary rejection checks. The dispatch center was selected for its structural depth (8+ isomorphisms), its resolution of the dominant tension (wildness vs austerity through containment-that-channels), and its alignment with KortAI's angular/flat physical vocabulary.*
