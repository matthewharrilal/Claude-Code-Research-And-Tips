# Mechanism-to-Rule Traceability Matrix

**Agent:** Ultra-Deep Validation Agent (Task #29)
**Date:** 2026-02-17
**Sources:**
- `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines, 71 rules)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,218 lines, 18 mechanisms)

**Scope:** Full 18 mechanisms x 71 rules cross-reference. For each mechanism: governing rules, constraining rules, deploying agent, auditing PA questions. Then: orphan analysis (mechanisms with no rule, rules referencing no mechanism).

---

## Rule Inventory (71 Total)

| Section | IDs | Count | Domain |
|---------|-----|-------|--------|
| Spatial | S-01 to S-15 | 15 | Layout, container, spacing, void prevention |
| Soul | U-01 to U-10 | 10 | Visual identity prohibitions |
| Compositional | C-01 to C-18 | 18 | Mechanism deployment, transitions, restraint, intentionality |
| Multi-Coherence | MC-01 to MC-08 | 8 | Mechanism interaction patterns |
| Scale-Channel | SC-01 to SC-08 | 8 | Scale coverage, channel diversity |
| Metaphor Gates | MG-01 to MG-05 | 5 | Metaphor quality, structural test |
| Process | P-01 to P-08 | 8 | Workflow sequence, gates, verification |

## Mechanism Inventory (18 Total)

| # | Name | Category | Perceptual Effectiveness |
|---|------|----------|-------------------------|
| 1 | Border-Weight Gradient Encoding | Hierarchy (H) | HIGH |
| 2 | 2-Zone Component DNA | Component (C) | MEDIUM |
| 3 | Solid Offset Depth | Depth/Emphasis (D) | HIGH |
| 4 | Spacing Compression | Hierarchy (H) | LOW |
| 5 | Dense/Sparse Alternation | Spatial (S) | MEDIUM |
| 6 | Width Variation | Spatial (S) | LOW |
| 7 | Zone Background Differentiation | Depth/Emphasis (D) | MEDIUM |
| 8 | Scroll Witness / Sticky TOC | Structure/Navigation (N) | LOW |
| 9 | Confidence/Priority Encoding via Color | Component (C) | MEDIUM |
| 10 | Border-Left Semantic Signaling | Component (C) | HIGH |
| 11 | Typographic Scale Jumping | Hierarchy (H) | LOW |
| 12 | Progressive Disclosure | Structure/Navigation (N) | MEDIUM |
| 13 | Dark Header + 3px Primary Border | Structure/Navigation (N) | HIGH |
| 14 | Footer Mirror | Structure/Navigation (N) | MEDIUM |
| 15 | Bento Grid | Spatial (S) | MEDIUM |
| 16 | Drop Cap | Depth/Emphasis (D) | MEDIUM |
| 17 | Code Block | Component (C) | HIGH |
| 18 | Data Table | Structure/Navigation (N) | LOW |

---

## FULL TRACEABILITY MATRIX

### Mechanism #1: Border-Weight Gradient Encoding [HIERARCHY]

**Governing Rules (rules that DIRECT its deployment):**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Per-category minimum: Hierarchical:1+ requires at least one hierarchy mechanism. #1 is primary candidate. |
| C-02 | TARGET RANGE | Mechanism target 12-14. #1 counts toward this total. |
| C-04 | DISTRIBUTION | Every third of page must have >= 2 distinct mechanisms. #1 must be distributed, not front-loaded. |
| C-08 | REINFORCING PAIR | #1 + #4 (spacing compression) can form a reinforcing pair -- both encode hierarchy through different CSS channels (border-width vs padding). |
| MC-02 | REINFORCING PAIR | >= 3 reinforcing pairs. #1 is a natural pair partner with #4 (hierarchy encoding) and #7 (zone backgrounds). |
| SC-02 | CHANNEL USAGE | #1 operates in the "structural" channel (border properties). Contributes to >= 5/7 channels requirement. |
| SC-05 | CDT | #1 must appear at >= 2 scales to satisfy Channel Dominance Threshold. |

**Constraining Rules (rules that LIMIT its deployment):**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| C-03 | DENSITY CAP | <= 4 mechanisms operating per viewport. If #1 is active, only 3 other mechanisms can be visible in that viewport. |
| C-12 | RESTRAINT | Builder must document rejection rationale for sections where #1 was considered but NOT used (>= 1.5:1 rejected-to-deployed ratio). |
| SC-04 | LOAD BALANCE | No single channel > 40% of semantic load. If #1 dominates the structural channel, it must share with other structural mechanisms. |
| SC-06 | RESTRAINT RATIO | Reject-to-deploy >= 1.5:1 per channel. Some potential #1 deployments must be documented as rejected. |
| U-01 | IDENTITY | border-radius: 0 applies to all elements using #1 borders. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2) -- primary. Planner (Opus, Pass 1) specifies deployment locations.

**Auditing PA Questions:** PA-25, PA-26, PA-27 (Auditor F: Mechanism Deployment). PA-17, PA-41 (Auditor F: Elevated Tier 1 for rhythm assessment). PA-45, PA-46 (Auditor I: Coherence).

**Application Modes (from catalog):** PROGRESSIVE (4px->3px->2px->1px for stratified content) or DISCRETE (categorical differentiation, no gradient relationship).

---

### Mechanism #2: 2-Zone Component DNA [COMPONENT]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Per-category minimum: Component category requires at least 1. #2 is primary candidate (alongside #9, #10, #17). |
| C-02 | TARGET RANGE | Counts toward 12-14 target. |
| C-10 | PURPOSE-BUILT | >= 2 purpose-built components invented for THIS content. #2's label/body structure is adapted per-content, making each deployment a purpose-built variant. |
| MC-02 | REINFORCING PAIR | #2 + #10 (border-left signal) naturally reinforce -- component structure + accent border encode "emphasized content" through different CSS properties (padding/typography vs border). |
| SC-02 | CHANNEL USAGE | Operates in "typographic" channel (font-size, text-transform, letter-spacing for labels) and "spatial" channel (padding zones). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| C-03 | DENSITY CAP | <= 4 per viewport. Multiple #2 components in one viewport count as 1 mechanism instance but consume visual attention. |
| C-13 | SILENCE ZONES | >= 2 designed silence zones (200px+, base typography only). #2 components MUST NOT appear in silence zones. |
| S-07 | CPL | The body zone of #2 must maintain CPL 45-80. Component padding affects effective content width. |
| U-07 | FONT RESTRICTION | Label zone can use Source Sans 3 (body font) only. Instrument Serif restricted to display headings, not component labels. |
| U-09 | TYPOGRAPHY TRINITY | Only Instrument Serif / Source Sans 3 / Source Code Pro. Label fonts must come from this set. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Planner (Opus, Pass 1) identifies which content sections need callout components.

**Auditing PA Questions:** PA-20, PA-21, PA-22 (Auditor E: Component Quality). PA-06, PA-07 (Auditor B: Spatial Composition).

---

### Mechanism #3: Solid Offset Depth [DEPTH/EMPHASIS]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Per-category minimum: Depth/Emphasis category needs at least 1. #3 is the ONLY soul-compliant depth technique. |
| C-09 | DESIGNED MOMENTS | >= 1 designed moment per scroll quartile. #3 creates focal points that serve as designed moments. |
| C-10 | PURPOSE-BUILT | #3 applied to content-specific featured elements qualifies as purpose-built component. |
| MC-05 | CONTRASTING | Presence of #3 offset in one zone makes its absence in another meaningful. Natural candidate for contrasting deployment. |
| SC-02 | CHANNEL USAGE | Operates in "structural" channel (::after pseudo-element, positioning). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-02 | ABSOLUTE PROHIBITION | box-shadow: none. #3 EXISTS because of this prohibition -- it's the shadow replacement. |
| U-03 | ABSOLUTE PROHIBITION | No drop-shadow filter. #3 is the only depth technique that survives both U-02 and U-03. |
| U-04 | OPACITY RESTRICTION | No rgba() or opacity < 1 on backgrounds. #3's ::after uses solid background (var(--color-text)), compliant. |
| C-03 | DENSITY CAP | <= 4 per viewport. #3 is HIGH perceptual effectiveness, so it "costs" more attention in density cap. |
| C-12 | RESTRAINT | Must document where #3 was considered but rejected. Overuse destroys its focal-point power. |
| S-09 | MAX SPACING | 96px max between content elements. #3's offset (4px) is minimal but contributes to total element spacing. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2) or Intentionality Builder (Opus, Pass 4) for strategic focal points.

**Auditing PA Questions:** PA-25, PA-26 (Auditor F: Mechanism Deployment). PA-03, PA-04 (Auditor A: First Impression -- do featured elements register?). PA-39, PA-40 (Auditor H: Proportions).

---

### Mechanism #4: Spacing Compression [HIERARCHY]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Hierarchical category minimum. #4 is a hierarchy mechanism alongside #1 and #11. |
| C-11 | SPACING VARIATION | Section spacing MUST vary with >= 3 distinct values. #4 IS this rule's primary enabler -- it creates the variation. |
| C-18 | DENSITY ARC | Peak density section MUST NOT be first. #4 controls WHERE density peaks by compressing spacing. |
| MC-02 | REINFORCING PAIR | #4 + #1 reinforce hierarchy (spacing + border-weight both encode importance). |
| MC-03 | MODULATING | #4 can modulate #5 (dense/sparse alternation) -- compression intensity controls alternation amplitude. |
| SC-02 | CHANNEL USAGE | Operates in "spatial" channel (padding, margin values). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| S-09 | MAX SPACING | 96px max per-property. #4's sparse zone (var(--space-20) = 80px) is within limit. Dense zone (var(--space-4) = 16px) is fine. |
| S-11 | C3 PREVENTION | No single CSS margin or padding > var(--space-max-zone) = 96px. Direct cap on #4's maximum spacing value. |
| S-02 | CONTENT-TO-VOID | Content-to-void >= 60:40. Excessive spacing compression creates void. #4 must not push sparse zones past threshold. |
| S-10 | CONTIGUOUS VOID | No void > 2160px. #4's sparse zones must not create extended voids when stacked. |
| C-14 | SIGNAL-TO-SILENCE | Ratio 0.6-0.8:1. #4's compression creates silence in sparse zones; total silence must stay in range. |

**Deploying Agent:** Planner (Opus, Pass 1) defines compression gradient. Mechanism Builder (Sonnet, Pass 2) implements.

**Auditing PA Questions:** PA-12, PA-13, PA-14 (Auditor C: Spatial Detail). PA-50, PA-51 (Auditor C: Void detection). PA-17 (Auditor F: Rhythm).

---

### Mechanism #5: Dense/Sparse Alternation [SPATIAL]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Spatial category minimum. #5 is primary spatial mechanism. |
| C-04 | DISTRIBUTION | Every third of page >= 2 mechanisms. #5 creates the spatial rhythm that distributes other mechanisms. |
| C-09 | DESIGNED MOMENTS | >= 1 per quartile. Dense->sparse transitions can serve as designed moments (rhythm payoffs). |
| C-18 | DENSITY ARC | Peak density NOT first. #5's alternation pattern directly implements the density arc requirement. |
| MC-04 | RESPONDING | #5 creates responding sequences: mechanism A's output (dense section) triggers mechanism B (sparse breathing). |
| SC-02 | CHANNEL USAGE | Operates in "rhythmic" channel (padding progression, margin patterns). |
| SC-07 | SCALE COHERENCE | Same principle (dense/sparse) observable at >= 3 scales. #5 can echo at page, section, and component scales. |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| S-02 | CONTENT-TO-VOID | Sparse sections must not create overall ratio < 60:40. |
| S-12 | B1 DETECTION | No viewport < 30% content coverage. Sparse sections at risk. |
| S-10 | CONTIGUOUS VOID | Adjacent sparse sections could create > 2160px void. |
| MC-08 | ANTI-METRONOME | >= 3 distinct padding/margin values. #5 must not become metronomic (equal dense + equal sparse). |
| C-11 | SPACING VARIATION | >= 3 distinct spacing values. #5's A-B-A-B must have varied amplitudes, not uniform alternation. |

**Deploying Agent:** Planner (Opus, Pass 1) -- architects the alternation pattern. Skeleton Builders A+B (Sonnet, Pass 1) implement.

**Auditing PA Questions:** PA-06, PA-07, PA-08, PA-09 (Auditor B: Spatial Composition). PA-17, PA-41 (Auditor F: Rhythm). PA-45, PA-46 (Auditor I: Coherence).

---

### Mechanism #6: Width Variation [SPATIAL]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Spatial category minimum. #6 is supplemental to #5 and #15. |
| C-10 | PURPOSE-BUILT | Width variation on content-specific elements (narrow questions, wide answers) counts as purpose-built component. |
| MC-05 | CONTRASTING | Narrow elements next to wide elements create meaningful contrast. |
| SC-02 | CHANNEL USAGE | Operates in "spatial" channel (max-width, margin-left). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| S-01 | CONTAINER WIDTH | Container 940-1100px. #6's narrow channels must be proportional to container, not viewport. |
| S-07 | CPL | CPL 45-80. Narrow channels reduce content width, risking CPL violation. CRITICAL constraint. |
| S-02 | CONTENT-TO-VOID | Narrow channels create lateral whitespace. Must not push ratio below 60:40. |
| C-03 | DENSITY CAP | Counts toward <= 4 per viewport when visible. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Planner identifies Q&A or comparison content needing width variation.

**Auditing PA Questions:** PA-12, PA-13 (Auditor C: Spatial Detail). PA-06, PA-07 (Auditor B: Spatial Composition). PA-39 (Auditor H: Proportions).

---

### Mechanism #7: Zone Background Differentiation [DEPTH/EMPHASIS]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Depth/Emphasis category minimum. #7 is primary zone differentiation technique. |
| C-04 | DISTRIBUTION | Different zones with different backgrounds ensure mechanisms are distributed across page thirds. |
| C-05 | TRANSITION TYPES | Zone background changes ARE part of transition grammar. BRIDGE transitions include bg change. |
| MC-02 | REINFORCING PAIR | #7 + #4 reinforce depth (background warmth + spacing compression both encode zone identity). |
| MC-07 | CROSS-DIMENSION | #7 couples depth (chromatic) with spatial (zone layout), contributing to >= 10/15 dimension pairs. |
| SC-02 | CHANNEL USAGE | Operates in "chromatic" channel (background-color values). Primary chromatic mechanism. |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-04 | OPACITY RESTRICTION | No rgba() or opacity < 1 on backgrounds. Zone backgrounds MUST be solid colors. Exception: progressive depth tinting per DD-006. |
| U-05 | NO GRADIENTS | No linear-gradient, radial-gradient, conic-gradient. Zone transitions MUST be hard color changes, not blended. |
| U-06 | NO PURE BLACK/WHITE | Zone colors must be warm-shifted. --color-zone-dense (#FFFFFF) NOTED: this is pure white. This creates a tension with U-06. The catalog defines it as "near-white" but the hex is #FFFFFF. **POTENTIAL CONFLICT.** |
| U-08 | WARM NEUTRALS | All neutrals warm-shifted. Zone backgrounds must maintain warm character. |
| S-15 | ZONE COUNT | Zone count ceiling by word count. Number of distinct zones (and thus backgrounds) is capped. |
| P-05 | ZONE BOUNDARY | ALL THREE conditions required: content mass >= 800px, content type change, reader intent change. Limits how many zones can exist. |
| SC-08 | SATURATION PREVENTION | No scale has ALL 7 channels active simultaneously. #7 must not be deployed at every scale. |

**Deploying Agent:** Planner (Opus, Pass 1) assigns zone backgrounds in build plan. Skeleton Builders implement. Metaphor Builder (Opus, Pass 3) may refine zone naming.

**Auditing PA Questions:** PA-06, PA-07 (Auditor B: Spatial Composition). PA-15, PA-16 (Auditor D: Typography+Rhythm -- zone-to-type relationships). PA-45, PA-46, PA-47 (Auditor I: Coherence).

---

### Mechanism #8: Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Navigational category minimum. #8 is primary navigation mechanism. |
| C-15 | INTENTIONALITY | "Pedagogical sequencing" dimension. Scroll witness helps readers track position = pedagogical. |
| SC-02 | CHANNEL USAGE | Operates in "intentional" channel (scroll position awareness, reader guidance). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-01 | BORDER-RADIUS | Sticky TOC container must have border-radius: 0. |
| U-10 | SOUL ENFORCEMENT | *:where(:not(input,button,select)) { border-radius: 0 } catches the TOC container. |
| S-03 | HEADER PROPORTION | If TOC is in header area, combined header+TOC <= 20% of first viewport. |
| S-01 | CONTAINER WIDTH | TOC width must fit within 940-1100px container. |
| C-03 | DENSITY CAP | When visible (sticky), counts toward <= 4 mechanisms per viewport. It's always visible when scrolling. |
| P-06 | PATTERN OVERHEAD | TOC height counts toward <= 20% pattern overhead. Navigation chrome is structural, not content. |

**Deploying Agent:** Skeleton Builders A+B (Sonnet, Pass 1) implement structural TOC. Mechanism Builder adds active-state tracking.

**Auditing PA Questions:** PA-36, PA-37, PA-38 (Auditor G: Responsive+Accessibility). PA-20 (Auditor E: Component Quality).

---

### Mechanism #9: Confidence/Priority Encoding via Color [COMPONENT]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Component category minimum. #9 works with #2 and #10 to create semantic callout system. |
| C-08 | REINFORCING PAIR | #9 + #10 reinforce "emphasized content" through different CSS channels (color vs border-weight). |
| MC-02 | REINFORCING PAIR | #9 + #1 can reinforce priority (accent color + border thickness). |
| SC-02 | CHANNEL USAGE | Operates in "chromatic" channel (border-left-color accent values). |
| SC-05 | CDT | Color encoding must appear at >= 2 scales (component + section level). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-06 | NO PURE BLACK/WHITE | Accent colors must not include #000000 or #FFFFFF. |
| U-08 | WARM NEUTRALS | If using gray accents, they must be warm-shifted. |
| C-03 | DENSITY CAP | When multiple callout types appear in one viewport, #9's color differentiation counts as 1 mechanism instance. |
| SC-04 | LOAD BALANCE | Chromatic channel (shared with #7) must not exceed 40% of total semantic load. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Planner specifies which content types get which accent colors.

**Auditing PA Questions:** PA-20, PA-21, PA-22 (Auditor E: Component Quality). PA-01, PA-02 (Auditor A: Identity -- are accent colors from the palette?).

---

### Mechanism #10: Border-Left Semantic Signaling [COMPONENT]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Component category minimum. #10 is the universal callout marker. |
| C-08 | REINFORCING PAIR | #10 + #9 reinforce (border-left provides structure, color provides semantics). |
| MC-02 | REINFORCING PAIR | #10 + #2 (2-zone DNA) reinforce callout identity. |
| SC-02 | CHANNEL USAGE | Operates in "structural" channel (border-left width). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-01 | BORDER-RADIUS | Callout containers using #10 must have border-radius: 0. |
| C-03 | DENSITY CAP | Counts toward <= 4 per viewport. |
| C-13 | SILENCE ZONES | #10 callouts MUST NOT appear in silence zones (which require base typography only). |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Usually co-deployed with #2 and #9.

**Auditing PA Questions:** PA-20, PA-21, PA-22 (Auditor E: Component Quality). PA-25, PA-26 (Auditor F: Mechanism Deployment).

---

### Mechanism #11: Typographic Scale Jumping [HIERARCHY]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Hierarchical category minimum. #11 is the typographic hierarchy mechanism. |
| C-08 | REINFORCING PAIR | #11 + #4 reinforce hierarchy (type scale + spacing compression). |
| MC-02 | REINFORCING PAIR | #11 + #1 reinforce importance (type size + border weight). |
| SC-02 | CHANNEL USAGE | Operates in "typographic" channel (font-size scale). Primary typographic mechanism. |
| SC-07 | SCALE COHERENCE | ~1.5x ratio observable from page-level headings down to component labels. |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-07 | FONT RESTRICTION | Instrument Serif for display headings ONLY. Body text type scale uses Source Sans 3. |
| U-09 | TYPOGRAPHY TRINITY | All scale levels must use one of the three permitted fonts. |
| S-07 | CPL | CPL 45-80. Font size affects CPL calculation: (content-width-px) / (font-size-px) / 0.6. |
| S-08 | HEADING SPACING | Heading spacing ratio >= 1.5:1 (computed-margin-above / font-size). #11's scale jumps must respect this. |
| SC-04 | LOAD BALANCE | Typographic channel must not exceed 40% of semantic load. |

**Deploying Agent:** Skeleton Builders A+B (Sonnet, Pass 1) establish type scale. All subsequent pass builders maintain it.

**Auditing PA Questions:** PA-15, PA-16, PA-17, PA-18, PA-19 (Auditor D: Typography+Rhythm). PA-01, PA-02 (Auditor A: Identity).

---

### Mechanism #12: Progressive Disclosure [STRUCTURE/NAVIGATION]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Navigational category minimum. #12 contributes spatial progression. |
| C-18 | DENSITY ARC | #12's 4-phase pattern (intro->build->climax->resolve) IS the density arc requirement. |
| C-15 | INTENTIONALITY | "Pedagogical sequencing" dimension. Progressive disclosure is inherently pedagogical. |
| MC-04 | RESPONDING | Phase transitions in #12 create responding sequences. |
| MC-06 | CASCADING | #12's 4-phase pattern is a natural cascading chain (phase 1 -> phase 2 -> phase 3 -> phase 4). |
| SC-02 | CHANNEL USAGE | Operates in "density" channel (padding progression across phases). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| S-02 | CONTENT-TO-VOID | Phase 1 (sparse, --space-20 = 80px) creates generous spacing. Must maintain 60:40 ratio. |
| S-11 | C3 PREVENTION | Maximum padding = 96px. Phase 1's --space-20 (80px) is compliant, but cannot exceed. |
| S-12 | B1 DETECTION | Sparse opening phases risk < 30% content coverage per viewport. |
| P-05 | ZONE BOUNDARY | Each phase boundary requires all 3 conditions: content mass >= 800px, content type change, reader intent change. |
| S-15 | ZONE COUNT | Phase count must not exceed zone count ceiling for word count. |

**Deploying Agent:** Planner (Opus, Pass 1) defines progressive arc. Skeleton Builders implement.

**Auditing PA Questions:** PA-06, PA-07, PA-08 (Auditor B: Spatial Composition). PA-17 (Auditor F: Rhythm). PA-45, PA-46, PA-47 (Auditor I: Coherence).

---

### Mechanism #13: Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Navigational category minimum. #13 is the page landmark mechanism. |
| S-03 | HEADER PROPORTION | Header <= 20% of first viewport (288px at 1440px). Kill at 25% (360px). DIRECT governance. |
| A8 | READER JOURNEY | Act 1 (0-15%): "dark header authority." #13 IS the Act 1 confidence signal. |
| C-15 | INTENTIONALITY | "Bookending" dimension (when paired with #14 footer mirror). |
| SC-02 | CHANNEL USAGE | Operates in "structural" channel (background, border-bottom). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-01 | BORDER-RADIUS | Header container: border-radius: 0. |
| U-06 | NO PURE BLACK/WHITE | Header uses #1A1A1A (near-black), NOT #000000. |
| U-08 | WARM NEUTRALS | #1A1A1A is acceptable as the darkest warm neutral. |
| S-01 | CONTAINER WIDTH | Header inner content: max-width within 940-1100px. |
| S-03 | HEADER PROPORTION | THE MOST SPECIFIC CONSTRAINING RULE. 20% hard cap. This is a kill criterion. |
| P-06 | PATTERN OVERHEAD | Header height counts toward <= 20% pattern overhead. |
| MG-05 | SPATIAL COST | If metaphor adds to header (e.g., metaphor title treatment), total spatial cost <= 15%. |

**Deploying Agent:** Skeleton Builders A+B (Sonnet, Pass 1) build header structure. All pages require it.

**Auditing PA Questions:** PA-01, PA-02, PA-03, PA-04, PA-05 (Auditor A: Identity+First Impression). PA-30, PA-31 (Auditor C: Header-specific spatial checks).

---

### Mechanism #14: Footer Mirror [STRUCTURE/NAVIGATION]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| S-04 | FOOTER EXISTENCE | Footer MUST exist with visible content. Gap <= 1 viewport height from last content. DIRECT governance. |
| C-15 | INTENTIONALITY | "Bookending" dimension. Footer mirrors header = structural closure. |
| C-16 | SELF-REFERENCE | Footer can contain self-referential content (meta-commentary on the page). |
| A8 | READER JOURNEY | Act 5 (85-100%): "bookending, footer closure." #14 IS Act 5. |
| SC-02 | CHANNEL USAGE | Operates in "structural" channel (mirrors header structure). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-01 | BORDER-RADIUS | Footer container: border-radius: 0. |
| U-06 | NO PURE BLACK/WHITE | Footer uses #1A1A1A, NOT #000000. |
| S-04 | GAP CONSTRAINT | Gap <= 1 viewport height (1440px) from last content element to footer. |
| S-01 | CONTAINER WIDTH | Footer inner: max-width within 940-1100px. |

**Deploying Agent:** Skeleton Builders A+B (Sonnet, Pass 1). Footer is a mandatory landmark.

**Auditing PA Questions:** PA-39, PA-40, PA-42, PA-43, PA-44 (Auditor H: Proportions+Polish). PA-34, PA-35 (Auditor C: footer spatial checks).

---

### Mechanism #15: Bento Grid [SPATIAL]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Spatial category minimum. #15 is the grid layout mechanism. |
| C-10 | PURPOSE-BUILT | Bento grid configured for specific content (span modifiers per content importance) counts as purpose-built. |
| MC-05 | CONTRASTING | Large cells vs small cells create meaningful contrast. |
| SC-02 | CHANNEL USAGE | Operates in "spatial" channel (grid layout, gap values). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| S-01 | CONTAINER WIDTH | Grid must fit within 940-1100px container. |
| S-07 | CPL | Grid cells must maintain CPL 45-80. Narrow cells (span 1) risk low CPL. |
| U-01 | BORDER-RADIUS | Grid cells: border-radius: 0. |
| S-09 | MAX SPACING | Grid gap (24px in catalog) is within 96px max. |
| C-03 | DENSITY CAP | A bento grid section with multiple mechanism types is high density. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Only deployed for task-based, reference, or gallery content.

**Auditing PA Questions:** PA-36, PA-37 (Auditor G: Responsive -- grids must collapse properly at 768px). PA-06 (Auditor B: Spatial Composition).

---

### Mechanism #16: Drop Cap [DEPTH/EMPHASIS]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-09 | DESIGNED MOMENTS | Drop cap at section opening is a designed moment. Contributes to >= 1 per quartile. |
| C-15 | INTENTIONALITY | "Deliberate absence" dimension -- using drop cap only on select sections makes its absence elsewhere meaningful. |
| MC-05 | CONTRASTING | Presence at one section opening makes absence at another meaningful. |
| SC-02 | CHANNEL USAGE | Operates in "typographic" channel (::first-letter font-size, font-family). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-07 | FONT RESTRICTION | Drop cap uses var(--font-display) = Instrument Serif. This IS a display heading use, so it's compliant. |
| U-06 | NO PURE BLACK/WHITE | Drop cap color uses var(--color-primary) = #E83025. Compliant. |
| C-03 | DENSITY CAP | Counts toward <= 4 per viewport when visible. |
| C-12 | RESTRAINT | Must be used sparingly. "High impact at start, diminishes after first use" (catalog). Multiple drop caps = overuse. |
| SC-04 | LOAD BALANCE | If combined with #11 (type scale), typographic channel risks > 40% load. |

**Deploying Agent:** Intentionality Builder (Opus, Pass 4) -- strategic placement for designed moments. Or Mechanism Builder (Pass 2) for structural placement.

**Auditing PA Questions:** PA-25, PA-26, PA-27 (Auditor F: Mechanism Deployment). PA-15, PA-16 (Auditor D: Typography).

---

### Mechanism #17: Code Block [COMPONENT]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Component category minimum. #17 required for technical content. |
| C-09 | DESIGNED MOMENTS | Code blocks are "natural focal points in technical content" (catalog). They serve as designed moments. |
| MC-05 | CONTRASTING | Dark code block against cream page background creates strong contrast. |
| SC-02 | CHANNEL USAGE | Operates in "chromatic" channel (dark bg, syntax colors) and "typographic" channel (monospace font). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-06 | NO PURE BLACK/WHITE | Code block uses #1A1A1A background (near-black) and cream text, NOT #000/#FFF. |
| U-09 | TYPOGRAPHY TRINITY | Code must use Source Code Pro (JetBrains Mono in tokens.css). Mono font from trinity. |
| S-07 | CPL | Code blocks have different CPL expectations (typically wider). May need overflow-x: auto. |
| S-01 | CONTAINER WIDTH | Code block width within container. overflow-x: auto handles wide code. |
| C-03 | DENSITY CAP | Counts toward <= 4 per viewport. In code-heavy sections, multiple code blocks = 1 mechanism instance. |
| S-05 | SECTION CONTENT | Code blocks count toward >= 200px rendered content height per section. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Automatic for any content with code examples.

**Auditing PA Questions:** PA-20, PA-21, PA-22, PA-23, PA-24 (Auditor E: Component Quality). PA-01, PA-02 (Auditor A: Identity -- syntax colors from palette?).

---

### Mechanism #18: Data Table [STRUCTURE/NAVIGATION]

**Governing Rules:**

| Rule | Relationship | How It Governs |
|------|-------------|----------------|
| C-01 | MANDATORY TRIGGER | Navigational category minimum. #18 required for tabular data. |
| SC-02 | CHANNEL USAGE | Operates in "typographic" channel (mono headers, uppercase) and "structural" channel (border categories). |

**Constraining Rules:**

| Rule | Relationship | How It Constrains |
|------|-------------|-------------------|
| U-01 | BORDER-RADIUS | Table cells: border-radius: 0. |
| U-07 | FONT RESTRICTION | Table headers use mono font (Source Code Pro), not Instrument Serif. Compliant. |
| U-09 | TYPOGRAPHY TRINITY | Only permitted fonts. |
| S-01 | CONTAINER WIDTH | Table must fit within container. Responsive strategy applies. |
| S-07 | CPL | Table cell content must be readable. May require different CPL expectations for narrow columns. |
| C-03 | DENSITY CAP | Counts toward <= 4 per viewport. |

**Deploying Agent:** Mechanism Builder (Sonnet, Pass 2). Content-dependent deployment.

**Auditing PA Questions:** PA-20, PA-21 (Auditor E: Component Quality). PA-36, PA-37 (Auditor G: Responsive -- table behavior at 768px).

---

## CROSS-REFERENCE: Rules That Reference NO Specific Mechanism

These rules are SYSTEMIC -- they govern the deployment ecosystem rather than any individual mechanism:

| Rule | Domain | What It Governs |
|------|--------|-----------------|
| S-02 | Spatial | Content-to-void ratio (aggregate of ALL mechanisms + spacing) |
| S-06 | Spatial | >= 5 content sections (structural, not mechanism-specific) |
| S-10 | Spatial | Contiguous void limit (aggregate spacing effect) |
| S-12 | Spatial | B1 viewport content coverage (aggregate) |
| S-13 | Spatial | Designed moment past 50% (references ANY mechanism's designed moment) |
| S-14 | Spatial | Graduated content-to-void thresholds (aggregate) |
| U-10 | Soul | Universal border-radius enforcement (applies to ALL elements) |
| C-06 | Compositional | No identical adjacent transitions (transition grammar, not mechanism-specific) |
| C-07 | Compositional | Bridge transition prose (transition grammar) |
| C-12 | Compositional | Rejection log (meta-level restraint documentation) |
| C-14 | Compositional | Signal-to-silence ratio (aggregate calculation) |
| C-17 | Compositional | Bridge transitions with cognitive prose (transition grammar) |
| MC-01 | Multi-Coherence | CCS score >= 0.30 (aggregate pairwise interaction metric) |
| MC-07 | Multi-Coherence | Cross-dimension coherence >= 10/15 pairs (aggregate) |
| MC-08 | Multi-Coherence | Anti-metronome (aggregate spacing variety) |
| SC-01 | Scale-Channel | Maximum 5 scales (system-level constraint) |
| SC-03 | Scale-Channel | Richness matrix coverage >= 30/35 cells (aggregate) |
| SC-08 | Scale-Channel | Saturation prevention (aggregate per-scale) |
| MG-01 | Metaphor | Metaphor quality rubric (pre-mechanism) |
| MG-02 | Metaphor | Interpretive distance (pre-mechanism) |
| MG-03 | Metaphor | 6 rejection checks (pre-mechanism) |
| MG-04 | Metaphor | Structural test (post-build, holistic) |
| P-01 | Process | Content inventory before metaphor (sequencing) |
| P-02 | Process | Library prohibition before metaphor (sequencing) |
| P-03 | Process | Two-instance pattern (architecture) |
| P-04 | Process | Builder self-scroll (verification) |
| P-07 | Process | Artifact requirement (delivery) |
| P-08 | Process | Spatial re-check after Pass 2 (verification) |

**Count:** 28 rules reference NO specific mechanism (they are systemic/aggregate/process rules).

**This is expected and correct.** Rules fall into two natural categories:
1. **Mechanism-governing rules** (43 rules): constrain or direct specific mechanism deployment
2. **System-governing rules** (28 rules): constrain the aggregate effect of all mechanisms combined, or govern process sequence

---

## CROSS-REFERENCE: Mechanisms With NO Unique Governing Rule

Every mechanism is governed by at least C-01 (per-category minimums) and C-02 (target range). However, some mechanisms have no rule that specifically targets them by name or function:

| # | Mechanism | Unique Governing Rules | Status |
|---|-----------|----------------------|--------|
| 6 | Width Variation | NONE unique (only generic C-01, C-02, C-03) | **FLAG: Low governance** |
| 9 | Confidence/Priority Color | NONE unique (only generic C-01, C-02, C-03) | **FLAG: Low governance** |
| 18 | Data Table | NONE unique (only generic C-01, C-02, C-03) | **FLAG: Low governance** |

**Assessment:** These 3 mechanisms are "deployment optional" -- they are not specifically called out by any rule and are governed only by the generic mechanism rules. This is appropriate:
- **#6 (Width Variation):** LOW perceptual effectiveness. Content-dependent. No rule needed.
- **#9 (Color Encoding):** MEDIUM but always co-deployed with #2 and #10 (which ARE governed). Inherits governance.
- **#18 (Data Table):** LOW perceptual effectiveness. Functional, not compositional. No rule needed.

**Verdict:** No orphan mechanisms requiring new rules. The 3 low-governance mechanisms are appropriately generic.

---

## CROSS-REFERENCE: Mechanisms With HIGHEST Rule Density

| # | Mechanism | Total Governing + Constraining Rules | Key Driver |
|---|-----------|-------------------------------------|------------|
| 13 | Dark Header | 10 rules (S-03, S-01, U-01, U-06, U-08, P-06, MG-05, A8, C-01, SC-02) | Header is THE primary kill criterion target |
| 7 | Zone Background | 10 rules (U-04, U-05, U-06, U-08, S-15, P-05, SC-08, C-01, MC-02, MC-07) | Soul prohibitions heavily constrain color usage |
| 4 | Spacing Compression | 9 rules (S-09, S-11, S-02, S-10, C-14, C-01, C-11, C-18, MC-03) | Spacing is THE primary spatial failure mode |
| 5 | Dense/Sparse Alternation | 9 rules (S-02, S-12, S-10, MC-08, C-11, C-01, C-04, C-18, SC-07) | Rhythm drives spatial quality; multiple void rules constrain it |

**Assessment:** The highest-governed mechanisms are the ones most likely to cause catastrophic failure if misdeployed. This is correct: headers and spacing were the dominant failure modes in both the Phase D and Ceiling experiments.

---

## MECHANISM-TO-AGENT DEPLOYMENT MAP

| Agent | Pass | Mechanisms Deployed | Rule Sections Governing |
|-------|------|--------------------|-----------------------|
| **Content Architect (Opus)** | 0 | None (pre-mechanism) | P-01, P-05, S-15 |
| **Metaphor Agent (Opus)** | 0 | None (metaphor derivation) | MG-01 to MG-05, P-02 |
| **Skeleton Builders A+B (Sonnet)** | 1 | #5, #7, #11, #13, #14 (spatial structure + landmarks) | S-01 to S-15, U-01 to U-10 |
| **Embedded Auditor (Sonnet)** | 1 | None (monitoring) | S-01, S-02, S-12 (spatial gates) |
| **Mechanism Builder (Sonnet)** | 2 | #1, #2, #3, #4, #6, #8, #9, #10, #15, #16, #17, #18 (all non-skeleton mechanisms) | C-01 to C-18, MC-01 to MC-08, SC-01 to SC-08 |
| **Metaphor Builder (Opus)** | 3 | Refines #7 (zone naming), may adjust #1 (semantic encoding) | MG-04, SC-07 |
| **Intentionality Builder (Opus)** | 4 | Adjusts #3 (focal points), #16 (drop caps), refines #14 (bookending) | C-15, C-16, C-17, C-08, C-09 |
| **PA Auditors A-I** | 5 | None (audit only) | All PA questions, gate criteria |

---

## MECHANISM-TO-PA AUDITOR ASSIGNMENT MAP

| Auditor | PA Questions | Primary Mechanisms Audited |
|---------|-------------|--------------------------|
| A | PA-01,02,03,04,05 | #13 (header), #11 (type scale), soul compliance |
| B | PA-06,07,08,09,10,11 | #5 (dense/sparse), #7 (zone bg), #4 (spacing), #6 (width) |
| C | PA-12,13,14,30-35,50,51 | #4 (spacing detail), #12 (progressive), #13/#14 (landmarks), void detection |
| D | PA-15,16,17,18,19 | #11 (type scale), #16 (drop cap), #1 (border-weight rhythm) |
| E | PA-20,21,22,23,24 | #2 (2-zone DNA), #9 (color encoding), #10 (border-left), #17 (code block), #18 (table) |
| F | PA-25,26,27,28,29,41 | #1 (border-weight), #3 (solid offset), #5 (rhythm), #16 (drop cap) -- ALL mechanisms |
| G | PA-36,37,38 | #8 (scroll witness), #15 (bento grid), #18 (data table) -- responsive |
| H | PA-39,40,42,43,44 | #3 (solid offset proportions), #6 (width), #14 (footer), polish |
| I | PA-45,46,47,48,52,53 | #5 (rhythm coherence), #7 (zone coherence), #12 (progressive) -- holistic |

---

## POTENTIAL CONFLICTS FLAGGED

### 1. U-06 vs Mechanism #7 Zone Background (#FFFFFF)

**Issue:** The mechanism catalog defines `--color-zone-dense: #FFFFFF` (pure white). Rule U-06 prohibits #FFFFFF (requires cream #fefcf3 from tokens).

**Severity:** MODERATE. The catalog MAY have been written before U-06 was fully enforced. Or the zone token is a placeholder.

**Recommendation:** The builder should use the nearest warm white from tokens (e.g., #FEFCF3 or #FEF9F5) for the "dense" zone, not literal #FFFFFF. The catalog's recommended mappings are guidelines, not overrides of soul rules.

### 2. C-02 (12-14 target) vs SC-06 (1.5:1 restraint ratio per channel)

**Issue:** At 12-14 deployed mechanisms with 1.5:1 restraint ratio, the builder must document 18-21 rejected placements. With only 18 total mechanisms and 5 categories, some mechanisms would be "rejected" from zones where they were never candidates.

**Severity:** LOW. C-12 specifies >= 21 rejected PLACEMENTS (mechanism + location pairs), not rejected MECHANISMS. A single mechanism can be rejected from multiple locations. The math works: 14 deployed x 1.5 = 21 rejections across all sections.

### 3. C-03 (4 per viewport) vs SC-08 (not all 7 channels per scale)

**Issue:** If 4 mechanisms are operating in one viewport, and each operates in a different channel, that's 4/7 channels in one scale -- well under the "all 7" cap. These rules are aligned, not conflicting.

**Severity:** NONE. Rules are complementary.

---

## SUMMARY STATISTICS

| Metric | Count |
|--------|-------|
| Total mechanisms | 18 |
| Total rules | 71 |
| Mechanism-governing rules (direct + constraint) | 43 (60.6%) |
| System-governing rules (aggregate/process) | 28 (39.4%) |
| Mechanisms with HIGH governance (7+ rules) | 4 (#4, #5, #7, #13) |
| Mechanisms with LOW governance (generic only) | 3 (#6, #9, #18) |
| Mechanisms with ZERO governing rules | 0 |
| Rules with ZERO mechanism reference | 28 (all systemic -- expected) |
| Potential conflicts flagged | 2 (1 MODERATE, 1 LOW) |
| PA auditors covering mechanism deployment | 9/9 (full coverage) |
| Agent passes deploying mechanisms | 4/5 (Pass 0 is pre-mechanism, expected) |

**Overall Assessment:** The 71-rule framework provides comprehensive governance of all 18 mechanisms. No mechanism is ungoverned. The 28 systemic rules correctly address aggregate effects. The 2 flagged conflicts are resolvable within existing framework. The highest-governed mechanisms (#13 header, #7 zone bg, #4 spacing, #5 rhythm) are exactly the mechanisms most responsible for catastrophic failures in prior experiments.

---

**END MECHANISM-RULE TRACEABILITY MATRIX**
