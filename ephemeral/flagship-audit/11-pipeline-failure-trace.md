# Pipeline Layer Failure Trace -- Flagship Experiment Autopsy

**Agent:** pipeline-tracer (Opus 4.6)
**Date:** 2026-02-17
**Method:** Layer-by-layer analysis of richness information entering and exiting each pipeline stage, with compression ratio and loss attribution for each.

---

## Executive Summary

The pipeline has 8 layers. Richness enters at Layer 1 (337 research findings) and should emerge at Layer 8 (HTML output with 14 mechanisms perceptible across 6 channels). The autopsy reveals that richness was NOT lost at a single catastrophic point. Instead, it was degraded through a SYSTEMATIC PATTERN across Layers 5-8:

**The fundamental failure mode: every layer ANNOTATED richness rather than IMPLEMENTING it.**

The build plan (Layer 4) specified 14 mechanisms with detailed CSS values. Each subsequent builder (Layers 5-8) wrote extensive CSS COMMENTS documenting the metaphor, the channel assignments, and the mechanism clusters -- but implemented the SAME uniform values for the actual rendered properties (font-size, font-weight, color, margins, borders on content elements). The page has more metaphor DOCUMENTATION in its CSS comments than metaphor EXPRESSION in its computed styles.

---

## Layer 1: Research (337 Findings)

### What Entered
- 337 findings across 5 research streams (R1-R5)
- Concrete CSS patterns, spacing values, density signatures
- Component personality properties (velocity, temperature, weight)
- Layout choreography patterns (Z, F, bento, pulse, bookend)
- 6 density dimensions (spatial, temporal, depth, semantic, cognitive, interaction)

### What Exited
- RESEARCH-SYNTHESIS.md: 384 lines synthesizing findings into 5 principles + 3 tensions + architecture matrix
- 7 major tables with verbatim research data
- Concrete spacing values (24px/48px/92px), typography hierarchy, component chemistry rules

### Compression Ratio
- 337 findings -> 5 principles + supporting tables = ~67:1 compression
- BUT tables and component maps survive verbatim, so APPLIED knowledge compression is lower (~10:1)

### Loss Attribution
- **DESIGN (acceptable):** Compression is the point -- synthesis should distill. The 5 principles are faithful summaries.
- **CONTENT (minor loss):** Provenance chains (which R-stream produced which finding) are present but compressed. Cross-stream correlations partially lost.
- **Verdict: HEALTHY compression.** This layer works as designed.

---

## Layer 2: Design System (6 Layers)

### What Entered (from Layer 1)
- 5 principles, 7 tables, density dimensions, component characters
- Research provenance for each finding

### What the 6-Layer Ontology Contains
| Sublayer | File | Key Richness Content |
|----------|------|---------------------|
| L1 Identity | prohibitions.md | 22 prohibitions (8 absolute, 12 conditional) -- closes 55-65% of CSS toolkit |
| L2 Vocabulary | tokens.css | 65 tokens: 8 colors, 3 fonts, spacing scale, 3 border weights (4px/3px/1px) |
| L3 Grammar | mechanism-catalog.md | 18 mechanisms with CSS patterns, cross-file frequency, application modes |
| L4 Components | components.css | Component patterns (callout DNA, table styling, code blocks) |
| L5 Case Studies | 9 case studies | Anti-prescription format showing HOW mechanisms were deployed |
| L6 Guidelines | semantic-rules.md | When-to-use-what rules, compositional coherence |

### What Exited (toward Layer 3)
- Token values (colors, fonts, spacing scale)
- 18 mechanism definitions with CSS patterns
- Prohibitions constraining what CSS IS available
- Application modes (PROGRESSIVE vs DISCRETE for border-weight)
- 3 transition types (HARD CUT, SPACING SHIFT, CHECKPOINT)
- Restraint protocol (max 4 mechanisms per viewport, distribution requirement)

### Compression Ratio
- Minimal direct compression -- the design system is a parallel resource, not a serial bottleneck
- BUT the mechanism catalog's "impact profiles" add critical context:
  - #4 Spacing Compression: "LOW perceptual effectiveness -- invisible to untrained eye"
  - #6 Width Variation: "LOW perceptual effectiveness -- operates below conscious perception"
  - #7 Zone Backgrounds: "MEDIUM -- subtle warmth/coolness shifts. Builds atmosphere, not drama."

### Loss Attribution
- **DESIGN (critical information present but UNDERWEIGHTED):** The mechanism catalog correctly labels many mechanisms as LOW/MEDIUM perceptual effectiveness. This information ENTERS the pipeline but is never used to ADJUST the deployment strategy. The build plan deploys #4 (LOW), #6 (LOW), and #7 (MEDIUM) as PRIMARY channels -- the very mechanisms the catalog labels as imperceptible.
- **TRANSITION (gap):** The catalog does not provide MINIMUM PERCEPTUAL DELTA values. It says "subtle" but never says "background shifts below 8 RGB points are imperceptible" or "letter-spacing below 0.02em is invisible."
- **Verdict: The design system WARNS about low-effectiveness mechanisms but provides no threshold for 'too subtle to perceive.'**

---

## Layer 3: Skills (TC + PA)

### What Entered
- Tension-Composition SKILL.md (1,878 lines): Full pipeline from content assessment through metaphor derivation to compositional layout
- Perceptual-Auditing SKILL.md (774 lines): 48 PA questions, Mode 4 deployment, void pipeline

### What These Skills Provide for Richness
**TC Skill:**
- 14-axis questioning framework (FEEL/UNDERSTAND/DO/BECOME + extended axes)
- Metaphor collapse procedure with 6-criterion rubric
- Commitment gate (Phase 3.5) preventing premature library access
- Compositional layout phase with mechanism deployment planning
- Fractal coherence check

**PA Skill:**
- PA-05 scoring protocol (Designed/Coherent/Proportionate/Polished)
- Void pipeline (PA-50 through PA-53)
- PA-09 spatial confidence check
- Mode 4: 9 independent auditors for broad coverage

### What Exited
- TC pipeline was FULLY INVOKED: 12-axis questioning, tension derivation, metaphor collapse, commitment gate all executed (see 02-metaphor-derivation.md, 691 lines)
- PA skill was invoked at Gate 5: 9 auditors, cold-look protocol
- PA-05 score: 3/4 (DESIGNED)

### Compression Ratio
- TC: ~0 compression (full pipeline run)
- PA: Full Mode 4 deployed

### Loss Attribution
- **DESIGN (skill gap):** The TC skill drives metaphor derivation beautifully -- the "Assay Laboratory" metaphor scored 16/18, structural survival 3/3, 8 isomorphisms. BUT the skill does NOT include a "perceptual delta" check. It asks "what channels does the metaphor operate through?" but never asks "can a human perceive the CSS differences between zones?"
- **TRANSITION (critical gap):** The TC skill produces a rich PLAN (channels, trajectories, clusters) but has no mechanism to verify that the EXECUTION achieves perceptible differentiation. The CCS (Compositional Coupling Score) is a THEORETICAL metric calculated from the plan, not measured from the HTML.
- **Verdict: Skills produced rich conceptual output that was never verified for perceptibility. The gap is between PLANNING richness and PERCEIVED richness.**

---

## Layer 4: Enrichment Audits + Master Execution Prompt

### What Entered
- 22 audit reports from Prompt Enrichment Audit team (~758k total)
- Pre-flight deliverables (20 files from flagship preparation)
- Scale research, MC research, flagship prep research

### What the Master Execution Prompt Contains (963 lines)
- Section A: Conviction Layer (82 lines) -- thesis, tensions, anti-scale model, dual richness sources, compositional fluency, experiential laws, CD-006 exemplar, reader journey
- Section B: Execution Spec (107 lines) -- 97 rules across 12 subsections (S-17, U-10, C-21, MC-8, SC-10, MG-5, P-8, CT-8, RP-4)
- Section C: Coordination Spec (49 lines) -- agent roster, communication protocol, gate sequence, PA deployment
- Section D: Conviction Closing (10 lines)
- Section E: Reference Library (26 lines)
- Appendix: Parameter table (30 parameters)

### What Richness Information Is Present
| Topic | Present? | How? |
|-------|----------|------|
| 14 mechanisms with deployment locations | YES | C-01 through C-02, build plan |
| 4 compositional clusters with trajectories | YES | C-21 (compositional clusters mandate) |
| CCS >= 0.30 | YES | MC-01 |
| 4+ reinforcing pairs | YES | MC-02 |
| Cascading chain of 3+ | YES | MC-06 |
| Zone backgrounds (Ch1) | YES | SC-02, SC-10 |
| Border-weight gradient (Ch4) | YES | Referenced but no CONCRETE values |
| Typography progression (Ch2) | YES | Referenced but no CONCRETE values |
| Spacing compression (Ch3) | YES | S-09, S-11 (max 96px), but not MINIMUM differentiation |
| **Minimum perceptual delta** | **NO** | ABSENT from entire prompt |
| **Concrete CSS for channel expression** | **NO** | Rules say WHAT channels to use, not HOW to make them visible |
| **Scale 5 (Detail/Character) operations** | **NO** | Zero operational rules for letter-spacing variation, font-weight shifting, color modulation |

### Compression Ratio
- 758k audit corpus -> 963-line prompt = ~790:1 compression
- 20 preparation files -> referenced in Section E but NOT inlined

### Loss Attribution
- **DESIGN (THE critical failure):** The prompt is a GUARDRAIL FACTORY. It has 97 rules telling agents what NOT to do (max spacing 96px, no void >2160px, no margin >96px, CCS >=0.30). It has almost ZERO rules telling agents what TO DO with specific CSS values.

  **Specific losses:**
  1. The CD-006 exemplar in A7 shows ONE transition type with specific CSS. The 14-mechanism build plan shows SPECIFIC padding values, border-weight values, zone background values per section. NONE of these specific values appear in the builder prompt.
  2. The build plan's spacing contour (64->80->48->48->32->40->32->32->40->40->48->64) is NEVER transmitted to builders. Builders see "max 96px per property" and "anti-metronome: 3 distinct values." The contour has 6 distinct values across 12 sections; builders only need to produce 3 distinct values to pass.
  3. The mechanism catalog says border-weight (#1) has 4px/3px/2px/1px values. The prompt says "border weight progression" but never specifies WHERE 4px vs 1px goes on THIS page.
  4. Zone backgrounds are defined as 3 tokens (sparse #FEF9F5, dense #FEFEFE, breathing #FAF5ED). The RGB distance between these is 4-8 points. The prompt never notes this is below perceptual threshold.

- **TRANSITION (design-to-execution gap):** The prompt routes builders to the build plan (03-build-plan.md). The build plan IS the missing playbook. BUT the builder visibility cap is 75 lines (C1: "builders receive <= 75 lines of rules"). The builder prompt (builder-prompt.md) is exactly 71 lines. It contains spatial rules, soul rules, and key tokens -- NO mechanism deployment specifics, NO spacing contour, NO border-weight assignments, NO zone background schedule.

- **Verdict: The 75-line builder cap is the single most damaging architectural decision.** The build plan has 718 lines of specific deployment instructions. The builder sees 71 lines of generic rules. The ~10:1 compression from plan to builder prompt loses ALL mechanism-specific CSS values. The builder must INVENT these values, and invents them UNIFORMLY.

---

## Layer 5: Agent Topology (C1 Roster) + Builder Instructions

### What Entered
- Master execution prompt (963 lines, routed per agent)
- Build plan (718 lines, available to builders)
- Builder prompt (71 lines, actually given to builders)

### Agent Roster and Information Flow
```
Content Architect (Opus) -> 00-content-inventory.md (229 lines)
                          -> 01-adapted-content.md (311 lines)
Metaphor Agent (Opus)     -> 02-metaphor-derivation.md (691 lines)
Planner (Opus)            -> 03-build-plan.md (718 lines)
                          ↓
Skeleton Builder A (Sonnet) -> 04a-skeleton-a.html  ← SEES: builder-prompt.md (71 lines)
Skeleton Builder B (Sonnet) -> 04b-skeleton-b.html  ← SEES: builder-prompt.md (71 lines)
                          ↓ (A selected)
Mechanism Builder (Sonnet)  -> 05-mechanisms.html   ← SEES: skeleton + plan + tokens + prohibitions
                          ↓
Metaphor Builder (Opus)     -> 06-metaphor.html     ← SEES: mechanisms + derivation
                          ↓
Intentionality Builder (Opus) -> 07-intentionality.html ← SEES: metaphor + crown jewel forensics
```

### Critical Information Flow Analysis

**Skeleton Builders received (71 lines):**
- Container width 960px
- Max spacing 96px
- Soul rules (10)
- CPL 45-80
- Self-check checklist
- Token values
- Conviction bookends
- **MISSING: The 12-section spacing contour. The zone background schedule. The border-weight assignments. The typography progression plan.**

**Mechanism Builder received:**
- The skeleton HTML (correct spatial structure)
- The build plan (718 lines -- FULL mechanism deployment plan)
- tokens.css
- prohibitions.md
- 16-multi-coherence-invocation.md (CCS verification)
- **This agent DOES have the mechanism deployment specifics**

**Metaphor Builder received:**
- The mechanism HTML
- The metaphor derivation (691 lines with channel maps)
- **This agent DOES have the metaphor-to-channel mapping**

**Intentionality Builder received:**
- The metaphor HTML
- Crown jewel forensics + compositional fluency docs
- **This agent focuses on bookending, self-reference, cognitive transitions**

### What Actually Happened at Each Pass

**Pass 1 (Skeleton -> 04-skeleton.html):**
- Built correct spatial structure: 960px container, 12 sections, 3 zones
- Zone backgrounds applied: 12 per-section custom CSS variables (!!!)
- Section padding applied: 64->80->48->48->32->40->32->32->40->40->48->64 (matches plan exactly!)
- Tables with data, prose content, dark header/footer bookends
- **Richness: MEDIUM-HIGH.** The skeleton has correct spatial structure AND the spacing contour.

**Pass 2 (Mechanisms -> 05-mechanisms.html):**
- Added mechanism CSS classes and annotations
- Data tables received border treatments (3px header, 1px cells)
- Component callouts received 4px left borders
- Solid offset pullquote implemented
- Drop cap on S1 implemented
- Code blocks for component sequences added
- Zone backgrounds preserved from skeleton
- **Richness: HIGH in plan, MEDIUM in execution.** Mechanisms are PRESENT IN CODE but many are near-imperceptible:
  - Border-weight gradient: 4px on featured callouts, 3px on table headers, 1px on cells -- but ONLY on callout/table elements, not on section-level structures
  - Zone backgrounds: RGB shifts of 2-6 points between sections (FAF5ED vs FEF9F5 = 4 points on G channel)
  - Spacing contour: correctly varied (32-80px) -- THIS IS THE ONE MECHANISM THAT WORKS

**Pass 3 (Metaphor -> 06-metaphor.html):**
- Added metaphor channel annotations (CSS comments documenting chromatic, typographic, spatial, structural, density channels)
- Added per-section letter-spacing and line-height values for "typographic convergence gradient":
  - Zone 1: letter-spacing 0.006em-0.01em, line-height 1.8
  - Zone 2: letter-spacing -0.003em to -0.01em, line-height 1.65
  - Zone 3: letter-spacing 0-0.01em, line-height 1.7-1.8
- Added per-section heading color variation:
  - Zone 1: warm headings (rgb(42,36,32) to rgb(38,33,28))
  - Zone 2: neutral headings (rgb(26,26,26))
  - Zone 3: returning to warm
- **THIS IS WHERE THE PROBLEM CRYSTALLIZES.** The metaphor builder's channel implementations are:
  - **Ch1 (Chromatic):** Zone backgrounds already in place from skeleton. RGB shifts: 2-6 points. **IMPERCEPTIBLE.**
  - **Ch2 (Typographic):** Letter-spacing range: -0.01em to +0.01em = 0.02em total range at 16px = 0.32px total variation. **IMPERCEPTIBLE.**
  - **Ch3 (Spatial):** Spacing contour from skeleton. **PERCEPTIBLE** (32px vs 80px = 48px difference).
  - **Ch4 (Structural):** Border-weight on callouts/tables only. NOT on sections. **LOCALIZED, NOT PROGRESSIVE.**
  - **Ch5 (Density):** Content mass varies by section -- inherent from content, not a CSS implementation.
  - **Ch6 (Rhythmic):** Section padding rhythm from skeleton. **PERCEPTIBLE** via spacing contour.

**Pass 4 (Intentionality -> 07-intentionality.html):**
- Added self-referential callouts (content describes its own form) -- 3 instances
- Added bridge transitions with cognitive-shift prose -- 3 instances
- Added structural bookending (S1/S12 echo)
- Added section-meta labels (section number, pattern, density zone)
- Added inline threading header comments
- **Richness: CONCEPTUALLY HIGH but no new CSS richness.** Intentionality is implemented through CONTENT (prose additions, section comments) not CSS. The page looks virtually identical to 06-metaphor.html. The actual CSS delta between Passes 3 and 4 is negligible.

### Progressive Enrichment or Progressive Degradation?

**The build shows PROGRESSIVE CSS ANNOTATION, not progressive CSS ENRICHMENT.**

| Pass | File Size | Mechanism Count | Perceptible Mechanisms | CSS Comments |
|------|-----------|----------------|----------------------|-------------|
| 1 (Skeleton) | 56KB | ~5 (header, footer, zones, spacing, tables) | 3 (header/footer, spacing, tables) | Few |
| 2 (Mechanisms) | 69KB (+13KB) | 14 (all deployed) | 4 (+ drop cap, callout borders, pullquote offset) | Many |
| 3 (Metaphor) | 90KB (+21KB) | 14 (same) | 4 (same -- new additions imperceptible) | EXTENSIVE |
| 4 (Intentionality) | 86KB (-4KB!) | 14 (same) | 4 (same) | EXTENSIVE + prose |

**File size GREW 56KB->90KB (+34KB) from Pass 1 to Pass 3, but perceptible mechanisms stayed at ~4.** The +34KB is CSS comments documenting metaphor channels, mechanism clusters, and compositional intent. The -4KB from Pass 3 to 4 suggests the intentionality builder may have REMOVED some CSS while adding prose.

### Compression Ratio (Layer 5)
- Build plan 718 lines -> builder prompt 71 lines = 10:1 compression (CATASTROPHIC for mechanism specifics)
- But mechanism builder DID receive the full build plan -- the 10:1 compression only affected skeleton builders

### Loss Attribution
- **TRANSITION (skeleton to mechanism):** The skeleton correctly implements the spacing contour and zone backgrounds. The mechanism builder adds component-level treatments (borders on callouts, table styling). What's MISSING: section-level borders, section-level background CONTRAST (the backgrounds are too subtle), section-level typographic CONTRAST (font-size never varies between sections).
- **TRANSITION (mechanism to metaphor):** The metaphor builder adds channel annotations but implements them at SUB-PERCEPTUAL magnitudes. Letter-spacing of 0.006em is 0.096px -- less than 1/10th of a pixel. Line-height variation of 1.65 vs 1.8 produces 2.4px difference per line -- cumulative but not consciously noticeable within a single viewport. Heading color shifts of 4-6 RGB points are invisible.
- **TRANSITION (metaphor to intentionality):** No new CSS richness. The intentionality pass adds PROSE (self-reference callouts, bridge text, section labels) but the visual treatment of that prose is uniform with everything else.

---

## Layer 6: HTML Skeleton (Pass 1 Output)

### What Entered
- Builder prompt (71 lines)
- Adapted content (311 lines)
- Build plan (718 lines -- available but not mandated reading for skeleton)

### What the Skeleton Contains (04-skeleton.html, 56KB)
- 12 sections in correct order
- 3 zone backgrounds (warm/cool/warm arc)
- Section padding: 64/80/48/48/32/40/32/32/40/40/48/64 (6 distinct values -- CORRECT)
- Dark header with 3px red border (278px height -- CORRECT)
- Dark footer with 3px red border (CORRECT)
- 7 data tables with content
- Bridge transition prose between key sections
- Drop cap on S1 opening paragraph
- Pullquote for master insight (S2)

### What's Absent from Skeleton
- Section-level borders (no borders between sections)
- Component-level differentiation (no callout styling yet)
- Color encoding (no semantic colors yet)
- Width variation (not applied yet)

### Compression Ratio
- Content + plan -> skeleton HTML = creative synthesis, not compression

### Loss Attribution
- **The skeleton is GOOD.** It has the correct spatial structure, the correct padding contour, and basic zone differentiation. The loss happens DOWNSTREAM.

---

## Layer 7: Mechanism + Metaphor Deployment (Passes 2-3)

### What Entered
- Skeleton with correct spatial structure
- Full build plan with mechanism-by-mechanism deployment
- Metaphor derivation with channel maps

### What Was Implemented

**Correctly implemented (PERCEPTIBLE):**
1. Drop cap (#16) on S1 -- red, Instrument Serif, 3.5em
2. Solid offset pullquote (#3) on S2 -- 4px offset with ::after
3. Dark header/footer bookends (#13/#14) -- #1A1A1A with 3px red border
4. Section padding contour (#4) -- 6 distinct values, crescendo-diminuendo shape
5. Callout 4px left borders (#10) -- on featured callouts in S3, S5, S7
6. Table header 3px borders (#18/#1) -- on all 7 tables
7. Component sequences in dark code blocks (#17) in S8

**Implemented but IMPERCEPTIBLE (the richness gap):**
1. Zone backgrounds (#7) -- 12 per-section tints with 2-6 RGB point differences
2. Letter-spacing gradient -- total range 0.02em (0.32px at 16px)
3. Line-height gradient -- total range 0.15 (1.65 to 1.8)
4. Heading color gradient -- 4-6 RGB point shifts (warm to neutral to warm)
5. Word-spacing gradient -- 0.02em range
6. Table header border-bottom-color variations -- 4-8 RGB point shifts per zone

**Specified in plan but NOT IMPLEMENTED:**
1. Section-level borders -- plan specifies 1px section separators in Zone 1, 3px in Zone 2 transition (S8->S9 BREATHING). The HTML has NO borders between sections except via transitions.
2. Width variation on S4 table (85% max-width) -- implemented in CSS but only on `.narrow-table-wrapper` class, and the S4 table does NOT use this class in the HTML
3. Width variation on S7 tensions (90%+5% margin) -- implemented in CSS but tension blocks use full-width styling

### The Perceptual Gap

**Audit data (from 00-AUDIT-DATA.md) confirms:**

| Property | Measured Values (6 sections sampled) | Variation | Perceptible? |
|----------|--------------------------------------|-----------|-------------|
| p fontSize | 16px everywhere | ZERO | N/A (uniform) |
| p fontWeight | 400 everywhere | ZERO | N/A (uniform) |
| p color | rgb(26,26,26) everywhere | ZERO | N/A (uniform) |
| p marginBottom | 16px everywhere | ZERO | N/A (uniform) |
| h2 fontSize | 28px everywhere | ZERO | N/A (uniform) |
| h2 fontWeight | 400 everywhere | ZERO | N/A (uniform) |
| letter-spacing | -0.048px to 0.096px | 0.144px total | NO |
| line-height | 26.4px to 28.8px | 2.4px total | BARELY |
| Background RGB | 250-254 on R, 245-254 on G, 237-254 on B | 4-17 points | BARELY on G/B |
| Borders on sections | ZERO | ZERO | N/A (absent) |
| Borders on callouts | 4px left (red/gray) | Present | YES |
| Border elements total | 0 per section (callouts aside) | ZERO | N/A (absent) |

**Scale 5 (Detail/Character) uses only 2 of 5 possible properties:**
- letter-spacing: 0.144px total range (IMPERCEPTIBLE)
- line-height: 2.4px total range (BARELY PERCEPTIBLE)
- Font-size: UNIFORM (not used at all)
- Font-weight: UNIFORM (not used at all)
- Color: UNIFORM (not used at all)

### Loss Attribution
- **EXECUTION (primary failure):** The builders treated mechanism DEPLOYMENT as mechanism DOCUMENTATION. Every mechanism is present in the CSS (border-weight gradient values exist, zone backgrounds exist, letter-spacing gradients exist). But the MAGNITUDES are too small to perceive. The mechanism catalog warns that #4 (spacing compression) is LOW perceptual effectiveness and #7 (zone backgrounds) is MEDIUM. The builders implemented these at the catalog's default values rather than amplifying to perceptible range.
- **DESIGN (contributing):** The mechanism catalog provides CSS patterns but not MINIMUM PERCEPTUAL THRESHOLDS. It never says "zone background shifts must exceed 15 RGB points to be perceived" or "letter-spacing must exceed 0.05em to be visible."
- **DESIGN (contributing):** The build plan specifies concrete values but the VALUES IT SPECIFIES are inherently imperceptible (FAF5ED vs FEF9F5 = 4 points on G channel). The plan was written by a Planner who was optimizing for metaphor COHERENCE (all 4 cascade mechanisms tracking the same trajectory) without checking whether the CSS VALUES at each trajectory point DIFFER ENOUGH TO SEE.

---

## Layer 8: HTML Output (07-intentionality.html)

### What Entered
- 06-metaphor.html with all mechanisms deployed
- Crown jewel forensics (15 must-replicate techniques)
- Compositional fluency guide (5 interaction types)

### What the Final HTML Contains (2,034 lines, 86KB)

**PRESENT AND PERCEPTIBLE (the page's actual richness):**
1. Dark header/footer bookends with 3px red accent
2. Red drop cap on opening paragraph
3. Solid-offset pullquote with 4px ::after depth
4. Section padding varying 32px-80px (crescendo-diminuendo)
5. 4px red left-border callouts (3 instances)
6. Table header 3px borders with mono uppercase labels
7. Dark code blocks for component sequences
8. Section-meta labels (mono, 10px, warm gray)
9. Bridge transition prose between key sections
10. Self-referential callouts (content describes its own form)

**PRESENT BUT IMPERCEPTIBLE (the richness gap):**
1. 12 per-section background tints (2-6 RGB point variation)
2. Letter-spacing gradient (-0.01em to +0.01em = 0.32px range)
3. Line-height gradient (1.65 to 1.8 = 2.4px per line)
4. Heading color shifts (4-6 RGB points)
5. Word-spacing gradient (0.02em range)
6. Table header border-bottom-color zone variation (4-8 RGB points)

**SPECIFIED IN PLAN BUT ABSENT:**
1. Section-level borders between content areas (ZERO borders on sections)
2. Width variation on S4 and S7 (CSS exists, HTML doesn't use classes)
3. Color encoding on component table velocity markers (planned amber/blue/coral accents -- implemented on the TABLE'S data cells via `.velocity-warm`/`.velocity-cold` classes but ONLY as text color, not as the border-left accent the plan specified)

### The Final Verdict

**Content-to-void: 83% (GOOD -- spatial success)**
**Mechanisms deployed: 14 (GOOD -- plan compliance)**
**Mechanisms PERCEIVED: ~4-5 (POOR -- 14 deployed, 4-5 visible)**
**Borders on section elements: ZERO (CATASTROPHIC -- Ch4 Structural is ABSENT from the progressive page structure)**
**Font-size variation: ZERO (CATASTROPHIC -- all body p at 16px, all h2 at 28px)**
**Font-weight variation: ZERO (CATASTROPHIC -- all p at 400, all h2 at 400)**
**Background variation: IMPERCEPTIBLE (2-6 RGB points)**

---

## The Cascade of Failure: Where Richness Collapsed

### Layer-by-Layer Summary Table

| Layer | Richness IN | Richness OUT | Ratio | Primary Failure |
|-------|-------------|-------------|-------|-----------------|
| 1. Research | 337 findings | 5 principles + tables | 67:1 | None (healthy synthesis) |
| 2. Design System | 18 mechanisms + prohibitions | 18 mechanisms + impact profiles | ~1:1 | Missing perceptual thresholds |
| 3. Skills | TC + PA skills | Rich metaphor + audit framework | ~1:1 | No perceptibility verification |
| 4. Master Prompt | 758k audit + 20 prep files | 963 lines, 97 rules | 790:1 | GUARDRAIL factory, not PLAYBOOK |
| 5. Agent Topology | 963-line prompt + 718-line plan | 71-line builder prompt | 10:1 (skeleton) | Builder visibility cap |
| 6. Skeleton Build | 71-line prompt + content | Correct spatial structure | Creative | GOOD -- no failure here |
| 7. Mechanism+Metaphor | Skeleton + plan + derivation | 14 mechanisms at sub-perceptual magnitudes | N/A | **PERCEPTUAL DELTA FAILURE** |
| 8. Final HTML | Mechanisms + intentionality | 4-5 perceptible mechanisms | ~3:1 loss | Annotation > Implementation |

### The Three Root Causes

**ROOT CAUSE 1: No minimum perceptual delta in the entire pipeline.**
The pipeline specifies WHAT mechanisms to deploy and WHERE, but never specifies HOW MUCH differentiation each mechanism needs to be visible. The mechanism catalog says "#7 zone backgrounds: MEDIUM perceptual effectiveness" but never defines "the background shift between zones must exceed X RGB points." The builders faithfully implement 12 per-section background tints that differ by 2-6 RGB points, which is invisible to the human eye.

**ROOT CAUSE 2: The 75-line builder visibility cap compresses 718 lines of deployment specifics to zero.**
The build plan contains exact padding values, exact border-weight assignments, exact zone background sequences -- the PLAYBOOK. The builder prompt contains only the GUARDRAILS (max 96px, container 960px, soul rules). The mechanism builder does receive the build plan, but the skeleton builder does not. The skeleton establishes the page's visual identity. By the time the mechanism builder adds treatments, the page's baseline uniformity is already set.

**ROOT CAUSE 3: Each pass ANNOTATED richness instead of AMPLIFYING it.**
- Pass 1 (Skeleton): Correct structure, subtle zone tints (**annotation**)
- Pass 2 (Mechanisms): Added mechanism CSS with comments documenting purpose (**annotation** + modest component borders)
- Pass 3 (Metaphor): Added 21KB of CSS comments mapping channels to metaphor stages, implemented channel differences at sub-pixel magnitudes (**annotation** + imperceptible CSS)
- Pass 4 (Intentionality): Added prose describing the page's own compositional intent (**annotation** via content, zero new CSS)

The file GREW by 30KB from Pass 1 to Pass 3, but the PERCEIVABLE visual difference between the skeleton and the final output is limited to: drop cap, pullquote offset, callout borders, code blocks, section-meta labels, and self-reference prose. That is ~6 additions over 4 passes.

### Specific Collapse Points

**Collapse Point A: Build Plan -> Builder Prompt (75-line cap)**
The spacing contour (12 values), zone background schedule (12 colors), border-weight assignments (per-section 4px/3px/1px map), and typography progression (mono->sans->serif zone plan) are ALL present in the 718-line build plan but ALL absent from the 71-line builder prompt. The cap was designed to prevent cognitive overload; it instead caused information starvation.

**Collapse Point B: Mechanism Catalog -> CSS Implementation (perceptual delta gap)**
The catalog defines zone backgrounds as 3 tokens (FEF9F5/FEFEFE/FAF5ED). These differ by 4-8 RGB points. The builders implemented exactly these values. The catalog never warns "4-8 RGB points is below human perceptual threshold for background colors viewed sequentially." The implementation is FAITHFUL to the catalog but INVISIBLE to readers.

**Collapse Point C: Channel Plan -> Channel CSS (magnitude collapse)**
The metaphor derivation's channel map describes 4 PRIMARY channels (chromatic, typographic, spatial, density). The metaphor builder implemented all 4. But 2 of 4 (chromatic and typographic) operate at magnitudes below perceptual threshold:
- Chromatic: 2-6 RGB points between adjacent sections
- Typographic: 0.02em letter-spacing range = 0.32px at 16px body text

Only spatial (padding) and structural (callout borders) reach perceptible magnitudes. The page has 4 channels DEPLOYED but only 2 channels PERCEIVED. The metaphor builder appears to have treated "implementing a channel" as "setting any non-zero CSS value on that property" rather than "setting a value large enough for a reader to notice."

### What CD-006 (39/40) Did Differently

CD-006 achieved perceptible richness through:
1. **3px section borders** (HARD CUT transitions with visible structural borders -- not just spacing)
2. **54 token definitions with ~270 var() usages** (high token compliance = consistent visual system)
3. **3 transition types (Smooth/Bridge/Breathing)** with VISIBLE CSS differences (1px vs 3px border, background shift PLUS prose)
4. **Border-weight gradient across sections** (4px on featured -> 3px on structural -> 1px on micro -- applied to SECTION elements, not just callouts)
5. **Visible background zone shifts** (likely exceeding 15+ RGB points between zones)

The flagship experiment has 12 per-section backgrounds that differ by 2-6 RGB points, ZERO section-level borders, and mechanisms concentrated on component-level elements (callouts, tables, code blocks) rather than distributed across the page's structural grid. CD-006's richness comes from STRUCTURAL differentiation (borders, backgrounds, spacing all working together at visible magnitudes). The flagship's richness is concentrated in COMPONENT details (drop cap, callout borders, pullquote offset) embedded in a UNIFORM structural grid.

---

## Recommendations

### Immediate Fix: Minimum Perceptual Deltas

Add to mechanism catalog and prompt:

| Property | Minimum Perceptible Delta | Current Flagship Delta | Gap |
|----------|--------------------------|----------------------|-----|
| Background RGB | >= 15 points on any channel | 2-6 points | 3-8x too subtle |
| Letter-spacing | >= 0.05em (0.8px at 16px) | 0.02em (0.32px) | 2.5x too subtle |
| Line-height | >= 0.2 (3.2px at 16px) | 0.15 (2.4px) | 1.3x too subtle |
| Font-weight | >= 100 (400 vs 500) | 0 (all 400) | NOT USED |
| Font-size | >= 2px (16px vs 18px) | 0 (all 16px) | NOT USED |
| Border-width | >= 2px difference | Correct on components | N/A (correct) |
| Section padding | >= 16px difference | Correct (32px-80px range) | N/A (correct) |

### Structural Fix: Builder Prompt Architecture

Replace the 75-line cap with a 3-part builder prompt:
1. **Universal rules (30 lines):** Soul, container, CPL, void prevention
2. **THIS PAGE's deployment map (40 lines):** Section-by-section padding, background, border-weight, font properties extracted from build plan
3. **Self-check (15 lines):** Checklist

Total: 85 lines (slight cap increase) but INCLUDES page-specific CSS values.

### Process Fix: Perceptual Verification Gate

Add between Pass 2 (Mechanisms) and Pass 3 (Metaphor):

**Gate 2.5: Perceptual Threshold Check**
For each CSS channel claimed:
1. Measure the RANGE of values across sections (max - min)
2. Check against minimum perceptual delta table
3. If ANY channel is below threshold: AMPLIFY values or REMOVE channel claim

This prevents the "4 channels deployed, 2 channels perceived" pattern.

---

**END PIPELINE FAILURE TRACE**

**Key Finding:** The pipeline does not have a single catastrophic failure point. It has a SYSTEMIC perceptual-delta blindness that compounds across 4 build passes. Each pass faithfully implements the CONCEPT of richness (correct mechanisms, correct channels, correct trajectories) at MAGNITUDES below human perception. The fix is straightforward: add minimum perceptual thresholds to the mechanism catalog and builder prompt, and verify them programmatically at Gate 2.5.
