# Research Package -- Pass 1: FOUNDATIONS
## For Builder Pass 1 (STRUCTURE)

You are building the initial HTML skeleton for the Steve Yegge Gas Town extraction.
This package establishes boundaries, creative direction, and mechanisms. READ Section 9
(Consumption Protocol) first to understand the optimal absorption sequence, then return
to Section 0.

---

## 0. SOUL CHECKLIST (VERIFY BEFORE AND AFTER BUILD)

```
[ ] border-radius: 0 on every element, pseudo-element, and generated content
[ ] box-shadow: none on every element (no card lifts, no hover shadows, no drop-shadow())
[ ] No CSS gradients (linear-gradient, radial-gradient, conic-gradient)
[ ] No rgba() or hsla() with alpha < 1.0 on ANY background -- the #1 systemic violation
[ ] opacity: 1.0 on ALL visual elements and offset pseudo-elements
[ ] No transform: translateY() on hover (ANTI-PHYSICAL: no lift effects)
[ ] No CSS animations implying object movement
[ ] Locked palette only: #E83025, #1A1A1A, #FEF9F5, #FFFFFF, #FAF5ED, #E0D5C5, #F0EBE3, #666666
[ ] No cool grays (#F5F5F5, #E0E0E0) -- warm earth tones only
[ ] No pure black #000000 for text -- use #1A1A1A
[ ] No #FFFFFF as page background -- permitted for dense zone surfaces only
[ ] Font trinity: Instrument Serif (display headings + Essence callout body ONLY), Inter (body), JetBrains Mono (code + meta labels)
[ ] Instrument Serif NEVER used for body text paragraphs
[ ] All spacing from 4px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
[ ] Container max-width: 960px
[ ] 3-category borders ONLY: 1px (separator), 3px (structural), 4px (semantic accent). ZERO 2px.
[ ] Max 2 callouts visible per ~800px vertical viewport section
[ ] h3 elements ALWAYS italic (font-family: var(--font-display); font-style: italic)
[ ] Callout family DNA: 2-zone (sparse label + dense body), 4px left-border, color differentiation only
[ ] No vertical table borders -- horizontal rules only
[ ] No decorative elements that carry no information
[ ] Footer present with 3px border-top mirroring header design language
[ ] Dark full-bleed header: background #1A1A1A, cream text in Instrument Serif, border-bottom: 3px solid var(--color-primary)
```

---

## 1. BUILD CONTEXT

**Metaphor:** This page is an industrial control tower -- a multi-story operations center where the human overseer stands at the top floor in warm light, coordination roles occupy the middle floors, execution roles work the factory floor, and the Beads persistent memory system runs as dark bedrock beneath all ephemeral workers.

**Emotional Arc:** The page opens provocative and warm (Yegge's voice: "the world's biggest fuckin' ant"), peaks in structural density (8 Roles Architecture + Beads Memory = 35% of words but 60% of structural complexity), holds a philosophical plateau (Core Principles), descends through practical implementation (bash scripts, tmux configs), and resolves in evaluative comparison (orchestrator spectrum). Yegge's personality bookends the dense technical core -- erupting at the opening and in the Quotes section near the close.

**Content -> Zone Map:**
1. You Are Here + Who is Yegge + Gas Town Mental Model -> Zone 1 (Overseer Floor) -- WARM, SPARSE, provocative orientation
2. 8 Roles Architecture -> Zone 2 (Operations Core) -- DENSE, STRUCTURAL, the tower's blueprint
3. Beads Memory System -> Zone 3 (Bedrock) -- MAXIMUM DENSITY, dark zone, the data plane beneath workers
4. Core Principles + 6 Waves -> Zone 4 (Philosophical Plateau) -- BREATHING, conviction + historical context
5. Implementation + Checkpoints + Troubleshooting -> Zone 5 (Factory Floor) -- DENSE-PRACTICAL, code-heavy
6. When to Use + Quotes + Comparison + Sources -> Zone 6 (Return to Surface) -- WARM, SPARSE, resolution

**Spatial Direction:** Vertical descent through tower floors -- the reader starts at the Overseer's warm executive floor, descends through coordination and execution floors, reaches the Beads dark bedrock at the deepest point (~55-65% page height), then ascends back to the warm human surface for evaluation and decision.

**Zone Architecture Overview** (condensed -- the Pass 1 builder NEEDS this to create zones correctly):
- Zone count: 6 zones
- Density progression: SPARSE -> BUILDING -> PEAK -> BREATHING -> DENSE-PRACTICAL -> SPARSE
- Background arc: #FEF9F5 (warm cream) -> #FFFFFF (dense white) -> #1A1A1A (bedrock dark) -> #FAF5ED (earthy) -> #FAF5ED (earthy) -> #FEF9F5 (return warm)
- ASCII density diagram:
```
Zone 1 (Overseer):     ....              [SPARSE -- 64-80px padding]
Zone 2 (Operations):   ....########      [BUILDING->DENSE -- 40-48px]
Zone 3 (Bedrock):      ################  [PEAK -- 32-40px, dark bg]
Zone 4 (Philosophy):   ....              [BREATHING -- 64px]
Zone 5 (Factory):      ....########      [DENSE-PRACTICAL -- 40px]
Zone 6 (Surface):      ....              [SPARSE -- 48-64px, warm bg]
```
- Key spacing: inter-zone boundaries use 48-64px breathing zones with background color shift + typography register change (shift 3+ channels at each boundary per SC-13)
- Border-weight encoding: 4px = Town-Level authority (Mayor, Deacon, Dogs), 3px = Rig-Level operational (Refinery, Witness, Polecat), 1px = Worker-Level ephemeral (Crew) + data separators

---

## 2. MECHANISM SELECTIONS

### Mechanism 1: Geological Stratification via Background Zones `[NOVEL]`

**Selected because:** The control tower metaphor's vertical descent through floors maps directly to geological stratification -- the Overseer's warm executive floor is the surface stratum, the 8 Roles coordination zone is the subsoil, the Beads Memory system is the bedrock. The content ITSELF stratifies: Yegge's hot voice at the surface, moderate architectural substance in the middle, dense operational manual at the depth. Background color progression makes these strata perceptible without any decoration.
**Finding basis:** R3-Insight 5 (geological model), R3-Insight 24 (density strata atmosphere-to-bedrock), DD-F-004 (layers spacing compression), S2-ELEVATED DD-F-004->OD-F-004->AD-F-013/014 (geological as border-weight gradient)
**CSS implementation:**
```css
/* Tower floor backgrounds -- geological descent from warm surface to dark bedrock */
--tower-surface: #FEF9F5;    /* Overseer's warm cream floor */
--tower-coordination: #FFFFFF; /* Town-Level dense white operations */
--tower-execution: #FAF5ED;   /* Rig-Level earthy workshop */
--tower-bedrock: #1A1A1A;     /* Beads persistent memory layer */

.zone--overseer { background: var(--tower-surface); padding: 80px 0; }
.zone--operations { background: var(--tower-coordination); padding: 48px 0; }
.zone--bedrock { background: var(--tower-bedrock); color: #ededed; padding: 32px 0; }
.zone--execution { background: var(--tower-execution); padding: 40px 0; }
.zone--resolution { background: var(--tower-surface); padding: 64px 0; }
```
**Expected visual evidence:** Scrolling the page produces a visible color descent -- warm cream through white through earthy tan to dark bedrock and back. The background shift is perceptible at 1440px without examining computed styles.
**Zone deployment:** All zones (each zone gets its stratum background)

---

### Mechanism 2: Border-Weight Gradient Encoding Operational Hierarchy `[NOVEL]`

**Selected because:** The 8 Roles section has a built-in 3-tier hierarchy (Town-Level: Mayor/Deacon/Dogs, Rig-Level: Refinery/Witness/Polecat, Worker-Level: Crew). Uniform card treatment flattens this hierarchy into monotone -- the #1 anti-pattern risk for this build. The border-weight gradient makes the hierarchy VISIBLE through physical weight: thicker border = greater command authority. This was validated across 3 pipeline stages (DD-F-004, OD-004, AD-F-014) and skips 2px deliberately (the 2px epidemic produced 108 CSS violations in OD).
**Finding basis:** S2-ELEVATED DD-F-004->OD-F-004->AD-F-014 (border-weight IS geological encoding), R2-4.1 (bento grid), R4-2.1 (bento with hierarchy)
**CSS implementation:**
```css
/* 3-tier border system encoding operational authority */
.role--town-level { border-left: 4px solid var(--color-text, #1A1A1A); }
.role--rig-level { border-left: 3px solid var(--color-border, #E0D5C5); }
.role--worker-level { border-left: 1px solid var(--color-border-subtle, #F0EBE3); }

/* Inverse density-authority: strategic roles breathe, operational roles compress */
.role--town-level .role__body { line-height: 1.8; padding: 24px; }
.role--rig-level .role__body { line-height: 1.7; padding: 20px; }
.role--worker-level .role__body { line-height: 1.6; padding: 16px; font-size: 0.9375rem; }
```
**Expected visual evidence:** The 8 Roles section is NOT a wall of identical cards. Town-Level roles (Mayor) visually dominate with thick borders. Rig-Level roles have moderate presence. Crew is visibly minimal. The border weight IS the hierarchy made visible.
**Zone deployment:** Zone 2 (Operations Core) primarily; the border system also appears in Zone 3 (Beads) for Hot/Warm/Cold memory tiers.

---

### Mechanism 3: CRESCENDO Typography Compression `[NOVEL]`

**Selected because:** The content follows a natural CRESCENDO: sparse narrative opening builds through moderate architectural substance to peak density at 8 Roles + Beads, then releases. Typography compression encodes this -- heading sizes shrink, line-heights tighten, letter-spacing compresses as the reader descends. Validated across 3 stages (DD-F-002, OD-F-009, AD-F-006/008). The builder deploys a parallel gradient in type size, line-height, AND vertical padding -- three CSS channels reinforcing the same descent.
**Finding basis:** S2-ELEVATED DD-F-002->OD-F-009->AD-F-006/008 (CRESCENDO as typography compression), R3-Insight 3 (CRESCENDO rhythm), R1-5.1 (typography-first hierarchy)
**CSS implementation:**
```css
/* Typography compression encoding tower descent */
/* Surface stratum: generous, literary */
.zone--overseer h2 { font-family: 'Instrument Serif'; font-size: 2rem; letter-spacing: -0.02em; }
.zone--overseer p { font-size: 1rem; line-height: 1.8; }

/* Operational stratum: tightening */
.zone--operations h2 { font-family: 'Instrument Serif'; font-size: 1.625rem; letter-spacing: -0.015em; }
.zone--operations p { font-size: 1rem; line-height: 1.7; }

/* Bedrock stratum: maximum compression */
.zone--bedrock h2 { font-family: 'Instrument Serif'; font-size: 1.375rem; letter-spacing: -0.01em; }
.zone--bedrock p { font-size: 0.9375rem; line-height: 1.6; }

/* Resolution: relaxes back toward surface */
.zone--resolution h2 { font-family: 'Instrument Serif'; font-size: 1.625rem; letter-spacing: -0.015em; }
.zone--resolution p { font-size: 1rem; line-height: 1.7; }
```
**Expected visual evidence:** Text density visibly increases from top to bottom through the middle zones and relaxes at the close. The Beads section feels perceptibly tighter than the opening without dramatic font-size jumps.
**Zone deployment:** All zones (each zone has its compression level)

---

### Mechanism 4: Velocity Interleaving for Heavy Components `[NOVEL]`

**Selected because:** The 8 Roles section stacks 8 role descriptions, each containing code blocks (SLOW), ASCII diagrams (SLOW), and tables (MEDIUM). Without FAST components between them, the section becomes a cognitive overload wall. Yegge's voice eruptions ("the world's biggest fuckin' ant") are the natural FAST interleaving material -- brief, hot, absorbing in 2-3 seconds. CD-001 discovered this rule; CD-005 applied it. The Gas Town content has both the problem (heavy-component stacking) and the solution (Yegge's quotable voice).
**Finding basis:** R5-T2 (velocity mismatch rule), R5-G3 (visual weight balance), CD-001 process extraction (velocity interleaving)
**CSS implementation:**
```css
/* FAST component: Yegge voice eruption between heavy role blocks */
.voice-eruption {
  border-left: 4px solid var(--color-primary, #E83025);
  padding: 16px 24px;
  margin: 40px 0;
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.4;
  max-width: 85%;
}

/* FAST metadata: model recommendation between code blocks */
.meta-indicator {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary, #666666);
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border-subtle, #E0D5C5);
}
```
**Expected visual evidence:** Within the 8 Roles section, no two HEAVY elements (code block, ASCII diagram, table) appear consecutively without a LIGHTER element between them. Yegge quotes break the operational weight with warm personality.
**Zone deployment:** Zone 2 (8 Roles), Zone 5 (Implementation Guide -- code block sequences)

---

### Mechanism 5: Fractal Self-Similarity at 5 Scales `[STANDARD]`

**Selected because:** The control tower metaphor is inherently fractal -- each floor is a self-similar operational unit containing its own hierarchy of elements. Validated across 4 stages (DD-F-006, all 6 OD explorations, AD-F-027 confirmed 5 scales, AD-F-028 bounded at 5). The same sparse/dense rhythm appears at page level (warm opening -> dense core -> breathing close), section level (role summary sparse -> role details dense), component level (callout label sparse -> callout body dense), and character level (heading letter-spacing loose -> body tight).
**Finding basis:** S2-ELEVATED DD-F-006->OD(all 6)->AD-F-027/028 (fractal, 5 scales, bounded)
**CSS implementation:**
```css
/* Page scale: zone padding progression (sparse/dense/sparse) */
/* Section scale: role cards have sparse header + dense body */
.role-card__header {
  font-size: 0.75rem; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.05em; color: var(--color-text-secondary, #666666);
  padding-bottom: 8px; border-bottom: 1px solid var(--color-border-subtle);
}
.role-card__body { padding-top: 16px; font-size: 1rem; line-height: 1.7; }

/* Component scale: callout label (sparse) + body (dense) */
/* Character scale: heading letter-spacing -0.02em (tight) vs body 0 (standard) */
```
**Expected visual evidence:** The same sparse-dense rhythm is visible at full-page zoom, within a single section, and within a single component. Squint test at 50% shows the page-level rhythm; 150% shows it within individual role cards.
**Zone deployment:** All zones, all scales

---

### Mechanism 6: PULSE Alternation for Paired Content `[STANDARD]`

**Selected because:** Gas Town content has natural alternation patterns: Traditional vs Gas Town comparison tables, Q&A-like sections in the opening (Your current state / After this document), the Compare section's side-by-side evaluations. PULSE rhythm (sparse label -> dense content, repeated) creates width-differential reading patterns that prevent monotone column layouts. Validated across 3 stages (DD-F-001, OD-F-003, AD-F-002).
**Finding basis:** S2-ELEVATED DD-F-001->OD-F-003->AD-F-002 (PULSE as foundational alternation), R1-1.1 (density rhythm HIGH-LOW oscillation)
**CSS implementation:**
```css
/* PULSE: Q&A and comparison pairs use width differential */
.pulse-label { max-width: 60%; font-weight: 500; color: var(--color-text, #1A1A1A); }
.pulse-content { max-width: 100%; }

/* Quotes section PULSE: sparse voice alternates with dense framing */
.quote-item { padding: 32px 0; border-bottom: 1px solid var(--color-border-subtle); }
.quote-item .voice { font-family: 'Instrument Serif'; font-style: italic; font-size: 1.25rem; }
.quote-item .context { font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 12px; }
```
**Expected visual evidence:** Comparison tables and Q&A pairs have visible width contrast between label and content zones. The Quotes section pulses between Yegge's voice (generous serif) and context framing (compact sans).
**Zone deployment:** Zone 1 (opening Q&A pairs), Zone 6 (Quotes compilation, Comparison tables)

---

### Mechanism 7: BRIDGE Transitions Between Register Shifts `[NOVEL]`

**Selected because:** The TC brief identifies 4 dramatic register shifts: PROVOCATIVE->REFERENCE (Gas Town Model -> 8 Roles), REFERENCE->NARRATIVE (Beads -> Core Principles), NARRATIVE->CODE (Core Principles -> Implementation), CODE->PROVOCATIVE (Implementation -> Quotes). These are incompatible reading modes. CD-005's transition grammar classifies them as BRIDGE transitions requiring explicit cognitive reset -- a breathing element (prose paragraph, spatial pause, subtle background shift) at every mode boundary. Without bridges, the reader experiences register whiplash.
**Finding basis:** AD-F-025 (transition grammar 5x5 matrix), OD-F-007 (mode-transition breathing 48px+), CD-005 process extraction (BRIDGE transitions)
**CSS implementation:**
```css
/* BRIDGE transition between incompatible registers */
.register-bridge {
  padding: 48px 0;
  border-top: 1px solid var(--color-border-subtle, #E0D5C5);
  /* Breathing space at register shift. The background color changes
     on one side of this element, signaling mode transition. */
}

/* Register shift markers: subtle but perceptible */
.zone--operations + .zone--bedrock { /* No bridge needed -- visual contrast IS the bridge */ }
.zone--bedrock + .zone--philosophical { margin-top: 0; /* Dark-to-earthy shift is its own bridge */ }
```
**Expected visual evidence:** Each of the 4 major register shifts has a perceptible pause -- either through 48px+ breathing space, background color shift, or typography register change. The reader never jumps from bash scripts directly to Yegge's provocative voice without a transitional moment.
**Zone deployment:** At zone boundaries (between every zone pair)

---

### Mechanism 8: Density Wave Sequencing `[STANDARD]`

**Selected because:** The content has a natural wave pattern: sparse opening -> dense core -> breathing plateau -> dense implementation -> sparse resolution. This is the CRESCENDO pattern expressed through spacing rather than typography. The page density must wave, not plateau. Encoding the wave through padding values creates the "hourglass-like density shape" visible when scrolling at speed.
**Finding basis:** R5-S2 (density wave sequencing), R3-Insight 3 (CRESCENDO), R3-Insight 29 (density contrast -- breathing zones before dense zones make the density feel MORE intense)
**CSS implementation:**
```css
/* Density wave encoded as section padding */
--density-sparse: 64px;   /* Opening, Resolution */
--density-moderate: 48px;  /* Transitions, Philosophy */
--density-dense: 40px;     /* 8 Roles, Implementation */
--density-maximum: 32px;   /* Beads bedrock */

/* Inter-element spacing tightens with density */
.zone--overseer .content-block + .content-block { margin-top: 24px; }
.zone--operations .content-block + .content-block { margin-top: 16px; }
.zone--bedrock .content-block + .content-block { margin-top: 12px; }
```
**Expected visual evidence:** At 1440px, the page visibly compresses in the middle sections (8 Roles, Beads) and expands at top and bottom. A squint test reveals the hourglass rhythm.
**Zone deployment:** All zones (each zone has its density register)

---

## 9. CONSUMPTION PROTOCOL

READ this package in this order. Each step builds on the previous:

1. **READ** Section 0 (Soul Checklist) -- Establish hard boundaries. These are physics.
   border-radius: 0 means the control tower has angular geometry. box-shadow: none means
   floors are flat planes, not floating cards. Know what is IMPOSSIBLE before knowing
   what is desired.

2. **INTERNALIZE** Section 1 (Build Context) -- Absorb the metaphor: industrial control tower,
   warm human at top, dark bedrock at bottom, vertical descent and return. Compose FROM
   the tower conviction, not FROM the mechanisms. The 4 oppositions (Chaos vs Precision,
   Warmth vs Hierarchy, Mastery vs Gate-keeping, Solo vs Collective) drive CSS decisions.

3. **STUDY** Section 2 (Mechanisms) -- Each was selected FOR this content. Read the
   rationale column. Understand WHY geological stratification encodes an article about
   multi-agent hierarchy -- not just THAT it was chosen.

4. **BUILD** the HTML skeleton: 6 zones first (with correct backgrounds and padding),
   then populate with content sections mapped per the Content -> Zone Map, then deploy
   mechanisms zone-by-zone.

5. After Pass 1, write `_pass-1-decisions.md`: what you built, which mechanisms deployed,
   which zones contain which content sections, and any builder-originated CSS decisions.

**Anti-orphaning:** Before writing any CSS rule, identify its source:
- Finding ID -> build action (from Section 3, Package Pass 2)
- Mechanism name -> CSS implementation (from Section 2 above)
- Soul constraint -> tokens.css value (from Section 0)
- TC brief conviction -> spatial/emotional direction (from Section 1)
- If a rule has no source, annotate as `/* SOURCE: BUILDER-ORIGINATED */`

---

## Agent Log: Synthesizer (Pass 1)
- Specialist inputs consumed: S1 (243 lines), S2 (175 lines), S3 (409 lines), S4 (370 lines), S5 (158 lines), TC brief (154 lines)
- Deduplication actions: Merged S1 R3-Insight 5 + S2 DD-F-004 chain + S3 DD-004 case study into Mechanism 1 (Geological Stratification). Merged S1 R2-4.1 + S2 DD-F-004->AD-F-014 chain + S3 OD-004 case study into Mechanism 2 (Border-Weight). Merged S1 R5-T2 + S3 CD-001 velocity interleaving into Mechanism 4. S1 and S2 fractal findings merged into Mechanism 5.
- Conflict resolutions: S1 rated bento grid HIGH for 8 Roles section; S2 validated border-weight gradient as the PRIMARY hierarchy mechanism. Resolved: border-weight gradient is the structural mechanism; bento grid is a layout choice deployed in Pass 2 (Section 4 zone recipe). Both serve the same metaphor from different angles.
- Novelty tags: 5 NOVEL (geological bg zones, border-weight hierarchy, CRESCENDO typography, velocity interleaving, BRIDGE transitions), 3 STANDARD (fractal 5-scale, PULSE alternation, density wave sequencing)
- Output size: 190 lines
