# Research Package -- Pass 2: ENRICHMENT
## For Builder Pass 2 (ENRICHMENT)

You are ENRICHING an existing HTML page -- not starting from scratch. The structure from Pass 1 is your foundation. Apply findings zone-by-zone, verify density progression, integrate case study CSS.

**Soul reminder:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0. 3-category borders only (1px/3px/4px, ZERO 2px). Font trinity: Instrument Serif / Inter / JetBrains Mono. Locked palette. No dead space > 300px.

---

## 3. RESEARCH FINDINGS --> BUILD ACTIONS

Apply these findings zone-by-zone during enrichment. Each finding has been rated for relevance to THIS content and validated against prior builds. Deploy zone-by-zone: start at the Datum Point and work through to the Projection.

### VALIDATED Findings (cross-stage reinforcement -- highest confidence)

| # | Finding | Chain | Novelty | Build Action | Zone(s) |
|---|---------|-------|---------|-------------|---------|
| 1 | Fractal Self-Similarity at 5 Scales | DD-F-006 --> OD(all 6) --> AD-F-027/028 | NOVEL | Deploy density variation at exactly 5 scales: navigation (zone labels), page (zone backgrounds), section (padding within zones: 64px outer to 32px dense), component (callout label/body), character (heading tracking vs body spacing). Bounded at 5 -- do NOT create a 6th scale. | All |
| 2 | 3-Way Unification (Axis IS Org IS Density) | DD-F-012 --> OD-F-005 --> AD-F-004 | NOVEL | Do NOT layer axis, organization, and density as separate design decisions. Choose the natural pairing per zone and let the others emerge: Datum Point wide editorial = SPARSE = narrative. Survey Grid bento = MODERATE = taxonomic. Field Notes tight mono = DENSE = technical. Contour Map compressed dark = DENSEST = dialectical. Projection opening editorial = RELEASING = tutorial. | All |
| 3 | PULSE for Alternating Content | DD-F-001 --> OD-F-003 --> AD-F-002 | NOVEL | Apply width differential + typography shifts between alternating voices. Dialectical exchanges (Cantillon vs critics): critic at 60% width, Cantillon at 100%. Anti-pattern symptom/solution pairs: alternate background (transparent / var(--color-border-subtle)). Domain taxonomy: each domain card is one PULSE beat. | Contour Map, Survey Grid, Projection |
| 4 | CRESCENDO with Typography Compression | DD-F-002 --> OD-F-009 --> AD-F-006 | NOVEL | Typography compresses toward the Contour Map peak. Heading sizes decrease (32px --> 24px), line-height tightens (1.8 --> 1.55), letter-spacing compresses (0 --> -0.008em). After the peak, RELEASE: Projection returns to generous typography. The compression must have a definite peak (Contour Map) and release (Projection). | All -- progressive across zones |
| 5 | Border-Weight Gradient as Depth Encoding | DD-F-004 --> AD-F-014 | NOVEL | Deploy 4px/3px/1px gradient encoding cartographic precision: zone boundaries = 4px triangulated (maximum confidence), domain card borders = 3px measured, table separators = 1px contour lines. Border frequency increases in the Contour Map zone (contour lines tightening). Skip 2px (2px border epidemic, OD-F-AP-001). | All -- gradient descends and returns |

### HIGH-Relevance Findings (zone-by-zone deployment)

**DATUM POINT zone (Parts I):**

| # | Finding | Novelty | Build Action | CSS |
|---|---------|---------|-------------|-----|
| 6 | R1-002: 38% Retention Rule | STANDARD | Apply generous whitespace around the opening provocation. "They can see you" statement: margin-top 80px, margin-bottom 48px. Key quotes in Datum Point: margin 40px 0. Philosophy paragraphs: spacing 20px. | `blockquote { margin: 40px 0; }` `.provocation { margin: 80px 0 48px; }` |
| 7 | R1-003: Viewport Principle | STANDARD | Set section spacing so the opening provocation dominates a single viewport at 1440px. Major section heading: margin-top 80px, margin-bottom 32px. Heading + opening paragraph should fill one viewport before next concept begins. | `.section-heading { margin-top: 80px; margin-bottom: 32px; }` |
| 8 | R2-001: Pull Quotes as Structural Elements | NOVEL | Deploy pull-quote treatment for Cantillon's "violent gap" quote. Instrument Serif italic, 1.25rem, line-height 1.45, border-left 4px accent-blue, margin 40px 0, max-width 640px. These are terrain formations, not annotations -- they should arrest scrolling. | `.pull-quote { font-family: var(--font-display); font-style: italic; font-size: 1.25rem; border-left: 4px solid var(--color-accent-blue); max-width: 640px; }` |
| 9 | R5-S3: First Component Rule | STANDARD | The Datum Point's first element sets the tone for the entire page. Deploy the opening provocation in Instrument Serif display -- the surveyor's formal statement. This first element must be the most spacious, most confident typography on the page. | `font-family: var(--font-display); font-size: 2rem; padding: 80px 0 48px;` |

**SURVEY GRID zone (Parts II-III):**

| # | Finding | Novelty | Build Action | CSS |
|---|---------|---------|-------------|-----|
| 10 | R4-001: Bento Grid Pattern | NOVEL | Deploy 4x2 (or auto-fit) bento grid for the 8-domain taxonomy. Each domain card: background #FFFFFF, border-left 4px solid, padding 24px. Work domains (top row/hemisphere), life domains (bottom). Cards self-contained: domain name (JetBrains Mono 13px uppercase) + path + one-line description. | `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;` |
| 11 | R5-G1: Semantic Proximity | STANDARD | Apply tight grouping (12-16px) within each domain card: domain name to path to description. Apply standard grouping (24px) between cards (the grid gap). Apply section break (48px) between the domain grid and surrounding prose. | `.domain-card > * + * { margin-top: 8px; }` |
| 12 | R1-004: Running Headers | NOVEL | Deploy subtle zone indicator. Option: margin section markers using ::before on zone containers. JetBrains Mono 11px, text-transform uppercase, letter-spacing 0.1em, color var(--color-text-secondary), rotated -90deg, positioned absolute left -40px. The reader always knows which survey zone they occupy. | `.zone::before { content: attr(data-zone); font-family: var(--font-mono); font-size: 11px; }` |

**FIELD NOTES zone (Parts IV-V):**

| # | Finding | Novelty | Build Action | CSS |
|---|---------|---------|-------------|-----|
| 13 | R5-T2: Velocity Mismatch Rule | NOVEL | Never place two code blocks back-to-back without prose buffer. Deploy Code (HEAVY) --> Prose bridge (MEDIUM) --> Code (HEAVY) --> Tip callout (FAST) rhythm. Between each pair of code blocks: minimum 1 explanatory paragraph (2+ sentences). Code blocks: margin-bottom 24px. Bridge prose: margin-bottom 16px, color secondary. | `.code-block + .code-block { margin-top: 48px; }` |
| 14 | R5-G3: Visual Weight Balance | STANDARD | Ratio target: ~30% heavy (code blocks), ~40% medium (prose), ~30% light (callouts/breaks) per zone. After each code block: insert 1-2 prose paragraphs before next code block. No "wall of code" -- even the densest Field Notes zone should feel punctuated with explanation. | Inter-block prose required |
| 15 | R1-006: Code Snippet Best Practices | STANDARD | Apply dark 2-zone code block structure: header (#27272A) + code body (#1A1A1A). Each code block gets a filename or context label in the header zone. JetBrains Mono 0.875rem, line-height 1.5. Border: 3px solid cat-1. Max 40-50 lines per block. | `.code-header { background: #27272A; padding: 8px 16px; } .code-body { background: #1A1A1A; padding: 16px; }` |
| 16 | R1-007: File Tree Visualization | STANDARD | Deploy file tree component for ~/trades/, ~/correlation/ directory structures. JetBrains Mono 13px, tree-line indentation using border-left 1px solid var(--color-border). Each level indented 20px. File trees are survey instruments -- they map the territory's filesystem. | `.file-tree { font-family: var(--font-mono); font-size: 13px; padding: 20px; }` |

**CONTOUR MAP zone (Parts VI-X):**

| # | Finding | Novelty | Build Action | CSS |
|---|---------|---------|-------------|-----|
| 17 | R3-029: Density Contrast | NOVEL | Deploy warm blockquotes on dark ground. Cantillon's key quotes in the Contour Map: background #FEF9F5 (cream), color #1A1A1A, padding 24px 28px, border-left 4px solid var(--color-primary). The "surveyor's lamp" -- single points of warm light in dark philosophical terrain. Max 2-3 warm elements in the entire dark zone. | See Package S2-M06 |
| 18 | R3-030: Density Debt | NOVEL | Deploy density recovery zones at transitions. After Field Notes --> before Contour Map: 64px padding-bottom + 48px padding-top (BREATHING transition). After Contour Map --> Projection: 56px padding-bottom + 64px padding-top. Between dense subsections within Contour Map (after Flutterwhat critique): 40px margin-bottom. | `.breathing-transition { padding: 64px 0 48px; }` |
| 19 | R4-011: Five Rhythm Types | NOVEL | Deploy rhythm differentiation within the Contour Map. ALTERNATING rhythm for dialectical exchanges: alternate background between transparent and var(--color-border-subtle) for opposing voices. PROGRESSIVE rhythm for the philosophical build: progressively tightening letter-spacing from -0.005em to -0.01em as argument deepens. REST: 48-64px between major philosophical sections. | `.dialectic-a { background: transparent; } .dialectic-b { background: var(--color-border-subtle); padding: 16px 20px; }` |
| 20 | R5-T3: Semantic Temperature Flow | NOVEL | Map temperature to typography register. Warm (empowerment quotes): Instrument Serif italic, cream background in dark zone. Neutral (technical descriptions): Inter standard. Cold (warnings, critiques): border-left 3px solid var(--color-warning), font-weight 500. Always insert neutral prose between warm and cold content -- minimum 1 paragraph buffer. | Warm: `font-family: var(--font-display);` Cold: `border-left: 3px solid var(--color-warning);` |
| 21 | R5-H2: Contrast Creates Harmony | STANDARD | Deploy contrast pairing: when philosophical passage precedes a code block, the passage concludes in Instrument Serif italic, creating serif --> mono transition. The contrast signals "principle meets implementation." Philosophy explains code's "why." | Serif-to-mono transition at philosophy/code boundaries |

**PROJECTION zone (Parts XI-XVII):**

| # | Finding | Novelty | Build Action | CSS |
|---|---------|---------|-------------|-----|
| 22 | R5-S1: Setup-Payoff Arc | NOVEL | Deploy visual setup-payoff for the 4-phase tutorial. Setup sections (phase descriptions): border-left 4px solid var(--color-accent-blue), padding-left 24px. Payoff sections (checkpoints): no border, background var(--color-border-subtle), padding 24px, border-left 3px solid var(--color-success). The visual asymmetry between bordered setup and unbounded payoff mirrors the surveyor's shift from establishing baseline to measuring terrain. | `.phase-setup { border-left: 4px solid var(--color-accent-blue); }` `.phase-checkpoint { background: var(--color-border-subtle); border-left: 3px solid var(--color-success); }` |
| 23 | R4-002: F-Pattern Optimization | STANDARD | Left-align all headings, bold key terms at line beginnings, consistent left margin. The reader scans the left edge to find structure. In the Projection zone, code block labels left-aligned with font-weight 500. Tutorial phase numbers aligned to left margin. | `text-align: left; heading margin-left: 0;` |
| 24 | R5-S4: Resolution Component | STANDARD | The Projection zone ends with resolution, not anxiety. The final element (Mental Model Summary, Panopticon vs Gas Town table) functions as the survey legend. Deploy with footer treatment: compact reference, 3px border-top, positioned as closure. The page must say "the survey is complete." | Footer with 3px border-top, summary table treatment |

---

## 4. ZONE ARCHITECTURE

### Density Progression

```
DATUM POINT:    ····                        [SPARSE -- 64-80px padding, wide-open benchmark]
                   ↓ BRIDGE transition (mode shift: philosophical → taxonomic)
SURVEY GRID:    ··········                  [MODERATE -- 40-48px, structured grid precision]
                   ↓ SMOOTH transition (same domain, different register)
FIELD NOTES:    ··················####      [DENSE -- 32-40px, packed technical notebook]
                   ↓ BREATHING transition (full cognitive reset, bg inversion)
CONTOUR MAP:    ######################      [DENSEST -- 32-48px variable, philosophical peak]
                   ↓ BRIDGE transition (analysis → action, light returns)
PROJECTION:     ··········                  [MODERATE -- 48-64px, reader takes instruments]
```

### Zone-by-Zone Recipe

**Zone 1: THE DATUM POINT** (Parts I)
- Content: Philosophy of Self-Legibility, the $2,000 story, key quotes on capability
- Density: SPARSE -- generous padding (64-80px between elements)
- Mechanisms: M01 background (#FEF9F5 cream), M04 typography (largest headings, loosest line-height 1.8), M07 three-register (Instrument Serif dominant), M08 dark header above
- Components: Opening provocation (Instrument Serif display), pull quotes (border-left 4px accent), the $2,000 story as prose
- Spacing: padding-top 64px, padding-bottom 48px, inter-element 32px, key quotes margin 40px 0
- Emotional register: Provocation, exposure, agency. "You are standing in an open field and the survey has not yet begun."
- Layout: STANDARD VERTICAL. If Proposition 2 (bilateral gaze) adopted, this zone has one structural section.
- Background: var(--color-bg) = #FEF9F5 warm cream
- Transition to Zone 2: BRIDGE -- 48px breathing space + 4px structural border-top. The reader shifts from philosophical provocation to taxonomic measurement.

**Zone 2: THE SURVEY GRID** (Parts II-III)
- Content: 8-Domain Architecture, Isolation Principles, Domain Design Principles, Filesystem-as-Memory, Explicit Handoffs
- Density: MODERATE -- tightening padding (40-48px between elements)
- Mechanisms: M01 background (#FFFFFF white), M02 fractal (section-scale sparse/dense within zone), M03 border-weight (3px structural on domain cards), M05 PULSE (each domain = one beat)
- Components: 8-domain bento grid (if Proposition 1 adopted), directory tree (~/trades/ structure), domain design principles as numbered items
- Spacing: padding-top 48px, padding-bottom 40px, inter-element 24px, grid gap 24px
- Emotional register: Intellectual clarity, organizational satisfaction. "The reader sees the instrument panel."
- Layout: NON-STANDARD if Proposition 1 adopted (bento grid for 8 domains). Standard vertical for Isolation Principles and Handoffs sub-sections.
- Background: #FFFFFF clinical white -- the drafting table
- Transition to Zone 3: SMOOTH -- minimal divider (section heading or thin 1px rule). Same knowledge domain, different register (taxonomic --> technical).

**Zone 3: THE FIELD NOTES** (Parts IV-V)
- Content: Running 8 Instances, Automation Layer, Human-in-the-Loop, Production Automations table
- Density: DENSE -- compressed padding (32-40px between elements)
- Mechanisms: M01 background (#FAF5ED earthy tan), M02 fractal (dense with light punctuation), M04 typography (compressed: 15px body, 1.6 line-height), M07 three-register (JetBrains Mono dominant)
- Components: Multiple code blocks (bash, tmux, cron), production automations table, file tree for directory structures, tip callouts between code blocks
- Spacing: padding-top 32px, padding-bottom 32px, inter-element 24px, code blocks margin 24px 0
- Emotional register: Practical empowerment, "I can do this." The surveyor's working notebook.
- Layout: STANDARD VERTICAL. F-pattern optimized -- left-aligned labels, code blocks at full container width, prose at 70ch max.
- Background: #FAF5ED earthy tan -- stained with field use
- Transition to Zone 4: BREATHING -- 64px padding-bottom + 48px padding-top. Background inversion from earthy tan to near-black. This is the biggest atmospheric shift on the page. Deploy a full cognitive reset: no content in the transition zone, just the atmospheric descent.

**Zone 4: THE CONTOUR MAP** (Parts VI-X)
- Content: Goodhart's Law, Prison Objection, Anthropic Trade-off, Flutterwhat Critique, CLAUDE.md examples, Correlation Layer, Anti-Patterns
- Density: DENSE-WITH-VARIATION -- base 32px, philosophical pauses at 40-48px
- Mechanisms: M01 background (#1A1A1A near-black), M04 typography (PEAK compression: 15px, 1.55 line-height), M05 PULSE (dialectical exchanges), M06 density contrast (warm quotes on dark ground), M03 border-weight (1px contour lines, frequent)
- Components: Dialectical exchanges (Cantillon vs critics), philosophical blockquotes (warm cream on dark), CLAUDE.md code blocks (dark-on-dark), anti-pattern symptom/solution pairs, correlation engine diagram
- Spacing: padding-top 48px, padding-bottom 48px, inter-element 32px, between dialectical sections 40px
- Emotional register: Philosophical density, dialectical tension, growing complexity. "Deep in the survey -- contour lines tightening."
- Layout: STANDARD VERTICAL with PULSE treatment for dialectical exchanges. Code blocks dark-on-dark (background #2A2A2A on #1A1A1A ground).
- Background: var(--color-text) = #1A1A1A near-black with inverted text
- Transition to Zone 5: BRIDGE -- 56px padding-bottom + 64px padding-top. Background lifts from near-black to cream. The reader emerges from the cave.

**Zone 5: THE PROJECTION** (Parts XI-XVII)
- Content: Extensions (Claude-Mem diagram, Skeptic Agent), Building Your Own (4-phase tutorial), Key Quotes, Mental Model Summary, Panopticon vs Gas Town comparison
- Density: MODERATE-TO-SPARSE -- opening padding (48-64px between elements)
- Mechanisms: M01 background (#FEF9F5 cream return), M02 fractal (zone-scale release), M04 typography (RELEASE: 16px, 1.7 line-height, opening back up), M07 three-register (Inter dominant with tutorial code in JetBrains Mono)
- Components: ASCII diagrams (Claude-Mem, Skeptic Agent), 4-phase tutorial with checkpoints, comparison table, summary footer
- Spacing: padding-top 64px, padding-bottom 48px, inter-element 32px, tutorial phases 40px apart
- Emotional register: Opening outward, empowered action, synthesis. "The reader becomes the surveyor."
- Layout: STANDARD VERTICAL. Tutorial phases use sequential markers (Phase 1, 2, 3, 4). Comparison table at full width.
- Background: var(--color-bg) = #FEF9F5 returning to cream -- the reader steps away from the map table

---

## 5. CASE STUDY PROCESSES

### Structural Affinity 1: DD-004 (Layers) --> Zones 1-5

**Why this case study matters for THIS build:** DD-004 faced the same structural challenge: content with natural depth stratification requiring visually distinct zones encoding different reading modes. It solved how spacing compression (80px to 16px) creates perceptual "pressure" -- deeper zones feel heavier. The Panopticon has a similar descent but with a RETURN to light (DD-004 descends continuously; this build descends then returns).

**Process extracted:** DD-004 sequenced decisions: (1) identify the depth axis, (2) map content groupings to strata count, (3) derive background progression, (4) derive spacing compression, (5) derive border-weight encoding. Apply the same derivation logic to the Panopticon's 5-zone arc, adapting the continuous descent to a descent-and-return shape.

**CSS that produced richness:**
```css
/* CASE-STUDY DD-004: Zone background progression -- descent-and-return */
.zone--datum-point  { background: var(--color-bg); padding: 64px 24px; }     /* Open field */
.zone--survey-grid  { background: #FFFFFF; padding: 48px 24px; }              /* Drafting table */
.zone--field-notes  { background: #FAF5ED; padding: 32px 24px; }              /* Worn notebook */
.zone--contour-map  { background: var(--color-text); padding: 32px 24px; }    /* Bedrock cave */
.zone--projection   { background: var(--color-bg); padding: 48px 24px; }      /* Return to surface */

/* Spacing compression within zones -- DD-004 principle */
.zone--datum-point .section   { margin-bottom: 64px; }
.zone--survey-grid .section   { margin-bottom: 40px; }
.zone--field-notes .section   { margin-bottom: 32px; }
.zone--contour-map .section   { margin-bottom: 32px; }
.zone--projection .section    { margin-bottom: 48px; }
```

**Adaptation notes:** KEEP: zone background progression, spacing compression gradient. CHANGE: DD-004's continuous descent to descent-and-return. CHANGE: DD-004's geological vocabulary to cartographic vocabulary. The compression toward the Contour Map is analogous to DD-004's deepest stratum; the expansion in the Projection is this build's unique addition.

### Structural Affinity 2: OD-004 (Confidence) --> Contour Map zone

**Why this case study matters for THIS build:** The Panopticon content has claims at different confidence levels: proven architecture (8-domain taxonomy) vs. philosophical interpretation (panopticon inversion) vs. speculative counterarguments (self-imprisonment, Goodhart's Law). OD-004 solved how to encode epistemic status through border-weight gradient: visual weight IS epistemic weight. The cartographic metaphor maps directly -- triangulated positions (thick marks) vs. extrapolated contour lines (thin marks).

**Process extracted:** OD-004 discovered that border-weight gradient (4px/3px/1px) maps intuitively to confidence -- heavier borders feel more certain. It also discovered inverse density-confidence correlation: certain knowledge is SPARSE (assertions), uncertain knowledge is DENSE (hedges, qualifiers). Apply this to the Panopticon: the 8-domain architecture (certain, sparse description, 4px border) vs. the prison objection (uncertain, dense qualification, 1px border).

**CSS that produced richness:**
```css
/* CASE-STUDY OD-004: Border-weight as confidence/precision encoding */
/* Proven architecture sections -- maximum visual weight */
.survey-mark--triangulated { border-left: 4px solid var(--color-text); }
.survey-mark--triangulated p { line-height: 1.6; }   /* Concise, reader trusts */

/* Reported results -- 75% weight */
.survey-mark--measured { border-left: 3px solid var(--color-text); }

/* Philosophical interpretation -- minimum weight */
.survey-mark--contour { border-left: 1px solid var(--color-text-secondary); }
.survey-mark--contour p { line-height: 1.8; }   /* Reader needs space to evaluate */
```

**Adaptation notes:** KEEP: border-weight gradient as confidence encoding, inverse density-confidence correlation. CHANGE: OD-004's 4-layer system to 3-layer (4px/3px/1px, skipping 2px per soul constraint). CHANGE: OD-004's geological vocabulary (stratum/bedrock) to cartographic vocabulary (triangulated/measured/contour).

### Structural Affinity 3: DD-003 (Islands) --> Survey Grid zone

**Why this case study matters for THIS build:** DD-003 faced the same structural challenge as the 8-domain taxonomy: content with independent parallel items that are conceptually simultaneous, not sequential. DD-003 proved that parallel items demand spatial treatment (grid) over vertical listing. The archipelago sub-grouping (related pairs within a larger grid) maps directly to the Panopticon's 4+4 work/life subdivision.

**Process extracted:** DD-003 sequenced: (1) identify independence (are items truly parallel?), (2) determine cluster count, (3) create calm separation via whitespace, (4) consider sub-grouping. The 8 domains ARE genuinely parallel and independent (the architecture's principle IS isolation). The 4+4 subdivision creates natural archipelago grouping.

**CSS that produced richness:**
```css
/* CASE-STUDY DD-003: Archipelago grid for parallel survey quadrants */
.survey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;              /* Tighter than DD-003's 80px -- survey grids are precise */
  max-width: 960px;
  margin: 0 auto;
}
.domain-quadrant {
  background: #FFFFFF;
  border-left: 4px solid var(--color-text);
  padding: 24px;
}
/* Hemisphere labels for work/life subdivision */
.domain-hemisphere { margin-bottom: 48px; }
.domain-hemisphere__label {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}
```

**Adaptation notes:** KEEP: self-contained units (each domain card complete), 2-zone component DNA (label + content), archipelago sub-grouping (work/life hemispheres). CHANGE: DD-003's organic horizontal offset to cartographic rectilinear grid. CHANGE: DD-003's 80px "ocean" whitespace to 24px precise grid gap (survey grids are measured, not organic).

---

## Agent Log: Synthesizer (Pass 2)
- Specialist inputs consumed: S1 (307 lines -- findings zone-mapped), S2 (179 lines -- validated chains), S3 (391 lines -- case studies), TC brief (396 lines -- zone architecture)
- Findings included: 24 of 24+ HIGH findings (5 validated cross-stage, 19 HIGH zone-specific). All MEDIUM findings excluded per protocol (S1 flagged 17 MEDIUM, none promoted to HIGH after S2 validation).
- Case studies included: 3 HIGH affinity (DD-004 layers, OD-004 confidence, DD-003 islands). 2 MEDIUM affinity (CD-001, CD-005) not included as full case studies -- their transferable mechanisms (velocity interleaving, transition grammar) are folded into findings 13, 18, 19.
- Output size: ~230 lines
