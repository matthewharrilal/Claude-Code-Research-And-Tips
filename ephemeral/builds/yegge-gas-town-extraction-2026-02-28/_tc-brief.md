# Tension-Composition Brief: Gas Town Extraction

## WORLD-DESCRIPTION

This page is a frontier garrison. Not a castle -- castles are defensive and inward-looking. Not a factory -- factories are repetitive and mechanical. A garrison is a small, deliberate outpost planted in hostile territory with a specific mission: turn a solo operator into a coordinated force.

The garrison has a command post (dark, authoritative, the Mayor's view), barracks where each specialist role lives (warm, structured, each with its own character), an armory where the tools and procedures are stored (dense, technical, code-heavy), a signal room where communications infrastructure lives (beads, memory, continuity), and a briefing room where intelligence is analyzed (tables, comparisons, strategic assessment). Between these structures: parade grounds -- open spaces that let the eye breathe and the mind reset before the next briefing.

The visual language is military-functional: sharp edges (orders, not suggestions), clear borders (jurisdictions, not decorations), strict hierarchy (rank encoded in weight), and warm earth tones (frontier dust, not sterile institutional gray). Color signals role and priority, not mood. Every element earns its place on the garrison map or it does not exist.

The page progresses from the watch tower (overview, the complexity ladder) down through the command structure (roles, architecture) into the operational details (beads, implementation) and out through the briefing room (comparisons, troubleshooting). Density compresses as we move from conceptual to procedural -- the field manual sections are tight, the strategic overview sections breathe.

## CALIBRATION

**Mechanisms I will deploy (14):**

1. **Dark Header + 3px Primary Border** [N] -- The command post. Dark background, red accent. "Welcome to the garrison."
2. **Border-Weight Gradient** [H] -- Rank encoding. 4px for the Mayor/primary concepts, 3px for section-level structure, 1px for supporting detail. The skip from 3 to 1 is the gap between officer and enlisted.
3. **Zone Background Differentiation** [D] -- 4 zones: command post (#1E1E1E), barracks (#FEF9F5 warm cream), armory (#FFFFFF dense white), parade ground (#FAF5ED earthy tan). Each room has its own air.
4. **Dense/Sparse Alternation** [S] -- Conceptual sections (roles, principles, waves) EXHALE with generous padding. Procedural sections (implementation, code, beads) INHALE with compressed spacing. The garrison breathes.
5. **2-Zone Component DNA** [C] -- Every callout, principle box, and bead example: sparse label (ROLE / PRINCIPLE / BEAD TYPE) + dense body. The label is the rank insignia; the body is the briefing content.
6. **Code Block (Dark + Syntax)** [C] -- The field manual pages. Dark background code blocks are the operational documents -- ASCII diagrams, file structures, bash commands. These are the garrison's technical specifications.
7. **Data Table** [N] -- Three comparison tables (Gas Town vs Basic Claude, vs PRD Loops, vs Cursor). These are the briefing room's intelligence matrices. Mono headers, horizontal rules only.
8. **Typographic Scale Jumping** [H] -- Display (Instrument Serif) for garrison-level headings, body (Inter) for operational text, mono (JetBrains) for specifications. The jump from display to body is the jump from strategic to tactical.
9. **Footer Mirror** [N] -- The garrison gate. Mirrors the command post but signals closure. "Briefing concluded."
10. **Bento Grid** [S] -- For the 8 roles. 2-column grid where each role is a bunk in the barracks. Variable span for the Mayor (full-width command) vs specialist roles (half-width posts).
11. **Progressive Disclosure** [N] -- Density gradient from the complexity ladder (sparse, strategic) through roles (moderate) to implementation (dense, compressed). Then releases back to comparison tables (moderate) and sources (sparse).
12. **Spacing Compression** [H] -- Principles and quotes get generous space (they are strategic directives). Implementation steps get compressed space (they are tactical procedures). Padding encodes authority.
13. **Confidence/Priority Encoding via Color** [C] -- Blue for informational callouts, green for tips/guidance, coral for gotchas/warnings, amber for key insights/principles. Color is rank insignia, not decoration.
14. **Border-Left Semantic Signaling** [C] -- 4px left borders on all callouts. The vertical stripe is the garrison's flag -- it signals "this section carries authority."

**Mechanisms I considered and rejected:**

- **Drop Cap** (#16): The content is pragmatic, not literary. A drop cap would signal "story" when we need "briefing." Wrong register.
- **Scroll Witness / Sticky TOC** (#8): The content has 13 sections but they flow in a natural progression. A sticky TOC would suggest reference-browsing when the content wants linear reading. The complexity ladder at the top already serves as orientation.
- **Width Variation** (#6): The garrison metaphor doesn't need narrow channels -- everything is full-width within the spine. The bento grid handles spatial variation.
- **Solid Offset Depth** (#3): Too decorative for a garrison. Depth comes from borders and backgrounds, not pseudo-element tricks. The garrison is flat and honest.

## OPPOSITION

**What the content resists:** Beauty. Yegge explicitly says "Stop trying to make your agent system beautiful. Make it PRODUCTIVE." The content has a deliberately anti-aesthetic stance -- Gas Town is named after ugliness. But the 8-role architecture IS elegant. The bead system IS sophisticated. The wave progression IS beautiful in its clarity.

**My opposition:** I will honor the pragmatic tone without being visually dull. The garrison is functional but PRECISE -- there is beauty in precision. Sharp borders, clean hierarchy, disciplined spacing. The page will never feel decorative, but it will feel DELIBERATE. Every visual choice serves communication, and that discipline IS the aesthetic.

**What I refuse to do:** I refuse to make this feel like a software documentation page. No Bootstrap blue. No generic card layouts. No rounded-corner "friendly" UI. This is a garrison briefing, not a SaaS landing page. The angular sharpness and warm earth tones must feel like they belong to THIS content, not to any content.

## ARC

**Opening (0-15%):** Watch tower. The complexity ladder, the "You Are Here" orientation. Sparse, authoritative, dark header establishing command. The reader is being briefed on what they are about to learn.

**Rising (15-40%):** Barracks tour. Who is Steve Yegge, the Gas Town mental model, the 8 roles architecture. Each role gets its own space in the barracks. Moderate density with generous heading space. The bento grid for the 8 roles creates visual interest in the middle of this section.

**Peak (40-65%):** Armory and signal room. Beads (the memory system) and the 6 Waves. This is the densest, most technical section. Code blocks dominate. Bead examples are fully structured. The waves diagram is a progression. Density compresses here -- the field manual pages are tight.

**Descent (65-85%):** Core principles, implementation guide. The content transitions from "what" to "how." Still dense but with more breathing room between principles. The principles are strategic directives (sparse), the implementation is tactical procedure (dense). Alternation.

**Resolution (85-100%):** Briefing room. Checkpoints, troubleshooting, comparison tables, sources. The reader steps back from the field manual and into the analysis room. Tables provide structured comparison. The footer closes the garrison gate.

## CONTENT MAP

| Section | Zone | Background | Density | Transition | Mechanisms |
|---------|------|-----------|---------|------------|------------|
| Header + Complexity Ladder | Command Post | #1E1E1E | SPARSE | -- | #13 Dark Header, #11 Scale Jump |
| You Are Here + Who Is Yegge | Barracks (intro) | #FEF9F5 | SPARSE | HARD CUT (3px) | #5 Dense/Sparse, #12 Progressive |
| Gas Town Mental Model | Barracks (conceptual) | #FEF9F5 | MODERATE | SPACING SHIFT | #2 Component DNA, #17 Code Block |
| 8 Roles Architecture | Barracks (roles) | #FFFFFF | DENSE | CHECKPOINT | #15 Bento Grid, #1 Border-Weight, #10 Border-Left |
| Beads: Memory System | Signal Room | #FAF5ED | DENSE | HARD CUT (3px) | #17 Code Block, #2 Component DNA, #9 Color Encoding |
| 6 Waves of AI | Armory | #FFFFFF | MODERATE | SPACING SHIFT | #11 Scale Jump, #17 Code Block, #4 Spacing Compression |
| Core Principles | Parade Ground | #FEF9F5 | SPARSE | HARD CUT (3px) | #10 Border-Left, #2 Component DNA, #5 Dense/Sparse |
| Implementation Guide | Armory | #FFFFFF | DENSE | CHECKPOINT | #17 Code Block, #15 Bento Grid, #4 Spacing Compression |
| Checkpoints + Troubleshooting | Briefing Room | #FAF5ED | MODERATE | SPACING SHIFT | #9 Color Encoding, #2 Component DNA |
| When to Use + Quotes | Barracks (synthesis) | #FEF9F5 | SPARSE | SPACING SHIFT | #10 Border-Left, #5 Dense/Sparse |
| Comparisons | Briefing Room | #FFFFFF | DENSE | HARD CUT (3px) | #18 Data Table |
| Sources + Footer | Gate | #1E1E1E | SPARSE | HARD CUT (3px) | #14 Footer Mirror |
