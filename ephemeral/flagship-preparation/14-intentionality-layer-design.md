# Intentionality Layer Design: Making 6 Unmodeled Dimensions Buildable

**Author:** Intentionality Designer (Opus 4.6)
**Date:** 2026-02-16
**Source Evidence:**
- `ephemeral/ceiling-experiment/_scale-exploration/04-showcase-archaeology.md` (6 dimensions identified)
- `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md` (Pass 3 architecture)
- `design-system/validated-explorations/density/DD-006-fractal.html` (1,120 lines, 36/40)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (2,086 lines, 39/40)
- `ephemeral/ceiling-experiment/ceiling-page.html` (counter-example: zero intentionality)

**Purpose:** Transform each of the 6 unmodeled intentionality dimensions from philosophical observations into concrete, buildable specifications with HTML/CSS recipes, binary checks, and builder instructions.

---

## EXECUTIVE SUMMARY

The showcase archaeology identified 6 richness dimensions that the 5-scale spatial model cannot capture. These dimensions constitute 15-20% of crown jewel quality and are the primary differentiator between Ceiling and Flagship tier. This document makes each dimension **as concrete as a CSS token**: definition, HTML recipe, builder instructions (<10 lines each), danger zones, pass integration, and binary measurement.

The ceiling experiment page (`ceiling-page.html`) scores 0/6 on these dimensions. DD-006 scores 4/6. CD-006 scores 6/6. The intentionality layer is what separates "technically correct" from "genuinely excellent."

---

## DIMENSION 1: SELF-REFERENCE (The Page Knows What It Is)

### 1.1 Definition

Self-reference means the page's content describes, demonstrates, or enacts the very thing the reader is looking at. The form IS the content. The reader learns by examining the artifact that teaches them.

This is NOT meta-commentary ("this is a good example of X"). It IS structural identity: the code example shows the CSS that styles the container holding that code example.

### 1.2 Concrete Examples from Crown Jewels

**DD-006, lines 930-936 — Component-scale callout:**
```html
<div class="callout-info" style="margin-top: var(--space-4);">
  <div class="callout-info__label">Same Pattern</div>
  <div class="callout-info__content">
    Notice how this callout also has a <strong>dense label zone</strong>
    (the blue label) followed by a <strong>sparse content zone</strong>
    (this text). The pattern repeats.
  </div>
</div>
```
The callout DESCRIBES the 2-zone structure while BEING a 2-zone structure. The reader sees the label zone and content zone while reading about them.

**DD-006, lines 1002-1044 — Fractal complete example:**
The nested `fractal-nested` divs create a page-within-a-page: Page Scale > Component Scale > Character Scale, all visible simultaneously. The page about fractals IS fractal.

**CD-006, line 1109 — Subtitle declaration:**
```html
<p class="header-subtitle">...This page is both tutorial and proof --
the documentation system documenting itself.</p>
```

**CD-006, lines 1684-1688 — Self-demonstrating code:**
```html
<code>
.callout {
  border-left: 4px solid; /* Soul Piece #3 */
  padding: var(--space-6) var(--space-8);
}
</code>
```
This code example appears INSIDE a callout whose own `border-left` IS `4px solid`. The CSS being taught is the CSS being rendered.

**Ceiling experiment — ZERO self-reference:**
The ceiling page is about "Remote Mac Control" — its content and form are entirely unrelated. The metaphor (secure facility) decorates the content but does not demonstrate it.

### 1.3 Implementation Guide

**Required HTML:** 1-3 instances of content that describes its own container or styling. No special elements needed — self-reference is a content-form relationship, not a component.

**CSS cost:** 0 additional lines. Self-reference is achieved through content selection and placement, not styling.

**HTML volume:** ~20-40 lines per instance (a callout or code block whose content describes itself).

**Minimum viable implementation:** One code example that shows the CSS used by the element containing it, OR one callout whose body text describes the callout's own 2-zone structure.

### 1.4 Builder Instructions

```
SELF-REFERENCE (Pass 3 — Intentionality Builder)

The page MUST contain at least 1 self-referential element where the content
describes or demonstrates its own form. Examples:
  - A code block showing CSS that styles the code block's own container
  - A callout whose body describes the callout's 2-zone structure
  - A section about density patterns whose own sections demonstrate
    the density pattern being described

Like CD-006's callout at line 1684: the code `.callout { border-left: 4px solid; }`
appears inside a callout whose border-left IS 4px solid.

Self-reference must be ORGANIC — it must arise from the content topic, not be
bolted on. If the page topic does not naturally support self-reference, use
structural self-reference (the page's layout demonstrating the layout
principles being discussed).
```

### 1.5 Danger Zones

- **Meta-pretension:** "Notice how beautifully this section transitions" — NEVER narrate your own quality. Self-reference describes STRUCTURE ("this callout has a dense label zone"), not AESTHETICS ("this callout looks great").
- **Forced loop:** Self-reference must arise from content-form alignment. If the page is about database schemas, forcing self-reference will feel artificial. In such cases, use structural self-reference (e.g., the page's section organization mirrors the schema hierarchy).
- **Over-labeling:** DD-006 labels every scale ("Level 1: Page Scale," "Level 2: Section Scale") because its TOPIC is scale levels. A page about API design should not label its scales — the labeling would be about the page's form, not its content.

### 1.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** No specific preparation needed. Self-reference operates on content, not structure.

**Pass 2 (Compositional Elaboration):** The metaphor selection should CONSIDER self-reference potential. A metaphor whose source domain relates to the page's own structure (architecture for a page about architecture, maps for a navigation page) enables natural self-reference.

**Dependency:** Content topic selection is the primary enabler. CD-006 chose "Building Your First KortAI Documentation Page" — a topic that INHERENTLY supports self-reference because the page IS a KortAI documentation page.

### 1.7 Measurement

**Binary check:** Does the page contain at least 1 element where the content describes, demonstrates, or enacts its own form? YES/NO

**Quality check (PA-evaluable):** Is the self-reference organic (arising from content-form alignment) or bolted-on (inserted to satisfy a checklist)? A fresh-eyes auditor should be able to identify the self-referential element AND explain why it feels natural.

---

## DIMENSION 2: PEDAGOGICAL SEQUENCING (Argument Arc)

### 2.1 Definition

Pedagogical sequencing means the page's sections follow a logical learning progression where each section depends on knowledge introduced in previous sections. This is NOT the spatial density arc (sparse/dense/sparse) — it is a COGNITIVE arc: the reader's understanding builds cumulatively.

The key distinction: two sections can have identical spatial density but serve different pedagogical functions. Section 3 of CD-006 (Token Reference Cards) and Section 6 (Auditing for Compliance) both use Bento Grid / Islands density, but S3 introduces building blocks while S6 teaches verification. Same spatial pattern, opposite pedagogical function.

### 2.2 Concrete Examples from Crown Jewels

**DD-006 — 4-stage learning progression:**
1. Fractal visualization (lines 753-793): SHOW the concept abstractly
2. Scale demonstrations (lines 844-991): PROVE it works at each scale independently
3. Complete fractal example (lines 1002-1044): PROVE it works in combination
4. Essence callout (lines 1050-1058): STATE the conclusion

Each stage depends on the previous: you cannot understand the combined example without seeing the individual scales first.

**CD-006 — 4-act structure (CD-F-024):**
- Act 1 (S1-S2): ORIENT — "Why Build from Tokens?" + "Understanding the Soul"
- Act 2 (S3-S4): LEARN — "Token Reference Cards" + "Choosing Your Patterns"
- Act 3 (S5-S6): BUILD — "Building Your First Component" + "Auditing for Compliance"
- Act 4 (S7-S8): SHIP — "Deploying Your Page" + "What Comes Next"

The act structure follows Freytag's dramatic arc with the CRESCENDO peak in Act 2 (the Decision Matrix in S4), not Act 3. Each act transforms the reader's cognitive state: from wondering to knowing to doing to reflecting.

**Ceiling experiment — NO pedagogical sequencing:**
The ceiling page's zones (Z-EXT, Z-LOBBY, Z-SEC, Z-OPS, Z-ALL) follow the metaphor's spatial logic (outside to inside), not a learning progression. Zone 3 does not depend on knowledge from Zone 2. The reader could read the zones in any order without losing comprehension.

### 2.3 Implementation Guide

**Required HTML:** Section ordering that creates cumulative knowledge dependency. Bridge transitions (see Dimension 3) between sections should carry semantic content explaining the shift.

**CSS cost:** 0 additional lines. Pedagogical sequencing is a content architecture decision.

**HTML volume:** ~10-20 lines of bridge/transition text across the page (prose in `transition--bridge` elements).

**Minimum viable implementation:**
- Sections ordered so that section N+1 references or depends on concepts from section N
- At least 2 bridge transitions that explicitly name the cognitive shift ("Now that you understand X, let's apply it to Y")

### 2.4 Builder Instructions

```
PEDAGOGICAL SEQUENCING (Pass 3 — Intentionality Builder)

The page MUST order its sections as a learning progression where later sections
depend on earlier ones. The reader's knowledge MUST accumulate across the scroll.

Requirements:
1. At least 2 bridge transitions with prose that names the cognitive shift
   (e.g., "Now that you understand the why, let us set up the how" — CD-006 line 1316)
2. Section N+1 MUST reference or build on concepts from section N
3. The page should follow a recognizable arc: Orient -> Learn -> Apply -> Reflect

Like CD-006's 4-act structure: Orient (S1-S2) -> Learn (S3-S4) -> Build (S5-S6)
-> Ship (S7-S8). Each act transforms the reader's cognitive state.

The arc is NOT the same as density rhythm. Two sections can have identical
spatial density but serve different pedagogical functions (introducing vs
verifying, as in CD-006 sections 3 and 6).
```

### 2.5 Danger Zones

- **Patronizing sequencing:** "First, let's learn what a button is" when the audience already knows. The learning arc must match the audience's actual knowledge level. CD-006 works because its audience genuinely needs to learn the token system.
- **Confusing density arc with argument arc:** A sparse->dense->sparse spatial rhythm is NOT pedagogical sequencing. Pedagogical sequencing is about COGNITIVE dependency, not visual density. A page can have perfect density rhythm but random section ordering.
- **Artificial dependency:** Forcing sections to reference each other when the content is naturally independent. If the content is a reference guide (inherently non-sequential), pedagogical sequencing may be minimal — use structural bookending (Dimension 4) instead.

### 2.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** The section COUNT and NAMES must be established in Pass 1. The planner should consider pedagogical ordering when defining sections, but the full argument arc is refined in Pass 3.

**Pass 2 (Compositional Elaboration):** Mechanism deployment should respect the pedagogical arc. Deploy high-intensity mechanisms (Decision Matrix, Core Abstraction) at the learning peak (Act 2), not uniformly.

**Dependency:** Content outline must be available before Pass 3. The intentionality builder works with the existing section structure, adding bridge text and reordering if necessary.

### 2.7 Measurement

**Binary check:** Does section N+1 reference or depend on concepts from section N for at least 3 consecutive section pairs? YES/NO

**Binary check:** Are there at least 2 bridge transitions with explicit cognitive-shift prose? YES/NO

**Quality check (PA-evaluable):** Could the reader understand the page if sections were randomly reordered? If YES, pedagogical sequencing is absent.

---

## DIMENSION 3: COGNITIVE MODE TRANSITIONS

### 3.1 Definition

Cognitive mode transitions are the designed shifts in the reader's mental state as they scroll between sections. Each section engages a different cognitive mode (questioning, referencing, implementing, verifying, reflecting), and the transitions between sections should explicitly manage these shifts.

This is NOT the transition grammar's spatial mechanism (Smooth/Bridge/Breathing whitespace). It is the SEMANTIC content of transitions: the words that tell the reader "we are now shifting from X to Y."

### 3.2 Concrete Examples from Crown Jewels

**CD-006 — 7 cognitive transitions (CD-F-025):**

| Boundary | Transition Type | Bridge Text | Cognitive Shift |
|----------|----------------|-------------|-----------------|
| S1->S2 | Breathing | (no prose — 80px gap + 3px border) | Reflecting -> Questioning |
| S2->S3 | Bridge | "Now that you understand the why, let us set up the how. The following token reference cards can be configured in any order." (line 1316) | Questioning -> Referencing |
| S3->S4 | Bridge | "Tokens are set. Now choose the patterns your content will follow." (line 1452) | Referencing -> Learning |
| S4->S5 | Smooth | (48px gap + 1px separator) | Learning -> Doing |
| S5->S6 | Bridge | "Before shipping, every page must pass a compliance audit." (line 1749) | Doing -> Verifying |
| S6->S7 | Smooth | (48px gap + 1px separator) | Verifying -> Deploying |
| S7->S8 | Breathing | (80px gap + 3px border) | Deploying -> Reflecting |

The pattern: Bridge transitions carry semantic content. Smooth transitions handle minimal cognitive shifts. Breathing transitions handle maximal cognitive shifts (where the reader needs silence to reset).

**DD-006 — 2 transitions:**
- Section divider at line 836-838: `<span class="section-divider__label">Demonstration at Each Scale</span>` — Names the cognitive shift from "understanding the concept" to "seeing examples."
- Section divider at line 994-996: `<span class="section-divider__label">Complete Fractal Example</span>` — Shifts from "seeing individual scales" to "seeing them combined."

**Ceiling experiment — 1 crude transition type:**
All transitions are `checkpoint-bridge` or `checkpoint-smooth` with labels like "CLEARANCE CHECK > EXTERNAL TO LOBBY" — these are metaphor-vocabulary labels, not cognitive-shift descriptions. They tell you WHERE you are in the metaphor, not HOW your thinking should shift.

### 3.3 Implementation Guide

**Required HTML:** `transition--bridge` divs containing `<p>` elements with prose that names the cognitive shift. Existing transition infrastructure from Pass 2 is reused.

```html
<!-- Bridge transition with cognitive-shift prose -->
<div class="transition--bridge" role="separator" aria-hidden="true">
  <p style="font-family: var(--font-body); font-size: var(--type-body);
     color: var(--color-text-secondary); text-align: center;
     max-width: 70ch; margin: 0 auto;">
    Now that you understand [PREVIOUS CONCEPT], let us apply it to [NEXT CONCEPT].
  </p>
</div>
```

**CSS cost:** 0 additional lines (uses existing `transition--bridge` styles from Pass 2).

**HTML volume:** ~5-8 lines per bridge transition, typically 2-3 bridges per page = ~15-24 lines total.

**Minimum viable implementation:** At least 2 bridge transitions with 1-2 sentences of prose that explicitly name the cognitive shift.

### 3.4 Builder Instructions

```
COGNITIVE MODE TRANSITIONS (Pass 3 — Intentionality Builder)

The page MUST have at least 2 transition--bridge elements containing prose
that names the cognitive shift between sections. The prose MUST describe
what the reader has just learned AND what they will engage with next.

Template: "Now that you understand [X], let us [Y]."

Like CD-006 line 1316: "Now that you understand the why, let us set up the how.
The following token reference cards can be configured in any order."

The 3 transition types map to cognitive difficulty:
  - SMOOTH (48px + 1px border): minimal cognitive shift (same mode continues)
  - BRIDGE (64px + breathing zone + prose): significant cognitive shift
  - BREATHING (80px + 3px border): maximal cognitive shift (mode reset)

Every Bridge transition MUST contain prose. Smooth and Breathing transitions
MAY be prose-free (whitespace alone manages the shift).
```

### 3.5 Danger Zones

- **Narrating the obvious:** "In this next section, we will discuss the next topic" — the prose must add VALUE, not just announce. CD-006's bridges reframe the content, they don't merely preview it.
- **All bridges, no silence:** If every transition has prose, the page loses breathing room. Reserve Bridge transitions for significant cognitive shifts. Use Smooth (no prose) for minimal shifts and Breathing (no prose) for maximal shifts where silence is the correct response.
- **Cognitive-shift prose that contradicts spatial transition:** If you use a Bridge (significant shift) but the content shift is actually minimal, the reader senses a mismatch. Match transition TYPE to cognitive WEIGHT.

### 3.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** Transition divs (`transition--smooth`, `transition--bridge`, `transition--breathing`) are placed in Pass 1 as structural elements. They may be empty at this stage.

**Pass 2 (Compositional Elaboration):** Transition types are selected based on the axis-pattern transition grammar (AD-F-025). The spatial mechanism is set in Pass 2.

**Pass 3 (Intentionality):** The intentionality builder ADDS prose content to Bridge transitions. Pass 3 does not change the transition type or spacing — only adds the semantic text.

**Dependency:** The transition infrastructure must exist from Pass 2 before Pass 3 can add prose.

### 3.7 Measurement

**Binary check:** Does the page contain at least 2 `transition--bridge` elements with prose content? YES/NO

**Binary check:** Does the prose in each bridge name both what precedes it AND what follows it? YES/NO

**Quality check (PA-evaluable):** Do the bridge transitions feel like they are HELPING the reader shift cognitive modes, or do they feel like filler? A fresh-eyes auditor should be able to explain the cognitive shift each bridge manages.

---

## DIMENSION 4: STRUCTURAL BOOKENDING

### 4.1 Definition

Structural bookending means the page's opening and closing sections echo each other in FORM while differing in CONTENT. Same structural pattern, different knowledge state. The reader arrives at a familiar structure with transformed understanding.

### 4.2 Concrete Examples from Crown Jewels

**CD-006 — Spiral bookend (CD-F-021):**

Section 1 (opening, line 1145):
```html
<div class="section-meta">Section 01 &middot; Spiral &middot; Geological Density</div>
<h2>Why Build from Tokens?</h2>
```
Uses Spiral axis with 3 geological strata (Bedrock/Subsoil/Atmosphere), border-weight gradient (4px/3px/1px), Core Abstraction about locked tokens, Essence callout about perceptual truth.

Section 8 (closing, line 1949):
```html
<div class="section-meta">Section 08 &middot; Spiral &middot; Geological Density</div>
<h2>What Comes Next</h2>
```
Uses the SAME Spiral axis with the SAME 3 strata, the SAME border-weight gradient, a Core Abstraction about extensibility (not locked tokens), an Essence callout about inherited reasoning (not perceptual truth).

**Same form:** Spiral/Geological, 3 strata, 4px/3px/1px borders, Core Abstraction + Essence.
**Different content:** S1 asks "why build from tokens?" — S8 asks "what comes next?" The reader has traversed the entire tutorial between these structural twins.

**DD-006 — Visual bookend:**
Opens with the fractal visualization (lines 753-793, abstract concept). Closes with the Essence callout (lines 1050-1058, synthesized insight). Opening = "here is what fractal density looks like abstractly." Closing = "you have just experienced fractal density." Both are reflective/philosophical, framing the concrete demonstrations between them.

**Ceiling experiment — NO bookending:**
The ceiling page opens with a dark header ("SYSTEM: Remote Mac Control") and ends with a dark footer ("ZONE: Z-FOUND / ALL ZONES"). The footer mirrors the header's visual style but has NO structural relationship to the opening content. No axis pattern echoes. No content callback. No "same form, different knowledge state."

### 4.3 Implementation Guide

**Required HTML:** First and last content sections use the same axis pattern (e.g., both use Spiral, or both use Z-Pattern). The internal components should echo (same callout types, similar structural elements) but contain different content.

**CSS cost:** 0 additional lines. Bookending reuses existing axis pattern CSS from Pass 2.

**HTML volume:** The closing section mirrors the opening section's structure. If the opening has 60 lines, the closing will have ~50-70 lines with similar markup but different text.

**Minimum viable implementation:** First and last sections use the same axis pattern. At least one structural element (callout type, component type, or layout pattern) appears in both but with different content.

### 4.4 Builder Instructions

```
STRUCTURAL BOOKENDING (Pass 3 — Intentionality Builder)

The page MUST use the same axis pattern for its first and last content sections.

Requirements:
1. First section and last section use the SAME axis pattern
   (e.g., both Spiral, or both Z-Pattern)
2. At least 1 structural element echoes across both sections
   (e.g., both contain an Essence callout, or both use border-weight gradient)
3. Content MUST differ: the opening introduces, the closing resolves
   ("same form, different knowledge state" — CD-F-021)

Like CD-006: Section 1 (Spiral/Geological) asks "Why Build from Tokens?"
Section 8 (Spiral/Geological) asks "What Comes Next?" Same strata structure,
same border-weight gradient, different content altitude.

The bookend creates CLOSURE — the reader returns to familiar structure with
transformed understanding.
```

### 4.5 Danger Zones

- **Mere repetition:** If the closing section is a copy-paste of the opening with minor edits, it feels lazy rather than intentional. The content must genuinely TRANSFORM while the form stays constant.
- **Forced echo:** If the page naturally ends on a different cognitive mode than it begins (e.g., opens reflective, ends with action items), forcing bookending may damage the pedagogical arc. In such cases, use a lighter echo: same callout type in opening and closing, but different axis patterns.
- **Bookending the header/footer:** The dark header/dark footer visual echo is NOT structural bookending. Bookending operates on CONTENT SECTIONS, not chrome. CD-006's footer mirrors the header visually, but its BOOKENDING is S1/S8 (Spiral/Spiral), not header/footer.

### 4.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** The planner MUST designate the first and last sections as bookend candidates. If both will use Spiral, both need the `spiral-strata` markup in the skeleton.

**Pass 2 (Compositional Elaboration):** The elaboration builder ensures both bookend sections receive the same mechanism treatment (border-weight gradient, same callout types). This is a structural echo requirement communicated via the planner's elaboration plan.

**Pass 3 (Intentionality):** The intentionality builder verifies that content differentiates the bookends. If the planner and elaboration builder set up the structural echo, Pass 3 ensures the content transforms.

**Dependency:** Bookending requires Pass 1 section planning to designate bookend pairs. This is the ONE intentionality dimension that must be planned before the skeleton is built.

### 4.7 Measurement

**Binary check:** Do the first and last content sections use the same axis pattern? YES/NO

**Binary check:** Does at least 1 structural element (callout type, layout component) appear in both sections? YES/NO

**Binary check:** Does the content of the closing section differ substantively from the opening (not a copy-paste)? YES/NO

**Quality check (PA-evaluable):** Does the reader experience a sense of closure — returning to familiar form with transformed understanding? A fresh-eyes auditor should identify the bookend without being told about it.

---

## DIMENSION 5: META-ANNOTATION (The Page Explaining Its Own Architecture)

### 5.1 Definition

Meta-annotation means the page provides a secondary information channel that explains its own structural decisions. The primary channel teaches content; the meta-annotation channel teaches architecture. This creates a dual reading: surface reading (learn the content) and structural reading (learn how the page is designed).

### 5.2 Concrete Examples from Crown Jewels

**CD-006 — Section meta-labels:**
```html
<div class="section-meta">Section 01 &middot; Spiral &middot; Geological Density</div>
<div class="section-meta">Section 02 &middot; Z-Pattern &middot; Pulse Density</div>
<div class="section-meta">Section 03 &middot; Bento Grid &middot; Islands Density</div>
```
Every section header includes its section number, axis pattern name, and density pattern name. The reader can ignore these (surface reading) or use them to understand the page's architectural decisions (structural reading).

**CD-006 — TOC density labels (lines 1127-1134):**
```html
<li><a href="#s1">
  <span class="toc-number">01</span>
  <span class="toc-title">Why Build from Tokens?</span>
  <span class="toc-density">SPIRAL</span>
</a></li>
```
Each TOC entry shows the axis pattern for that section. The TOC is simultaneously a content map AND an architecture map.

**CD-006 — Footer provenance stamp (line 2046):**
```html
<span class="page-footer__id">DD:FRACTAL &middot; OD:COMPOUND &middot; AD:ALL</span>
```
The footer encodes which dimension patterns the page applies: DD (density dimension) = FRACTAL, OD (organizational) = COMPOUND, AD (axis) = ALL.

**DD-006 — Scale labels throughout:**
```html
<span class="scale-demo__level">Level 1</span>
<span class="scale-demo__title">Page Scale — Dense vs Sparse Sections</span>
```
Every demonstration is labeled with its scale level. The `page-scale__label` elements ("Dense Section," "Sparse Section") are meta-annotations explaining what the reader is looking at.

**DD-006 — Pattern visualization (lines 812-832):**
```html
<div class="scale-comparison__pattern">█░░█░░█░░</div>
```
The `█░░█░░█░░` pattern is a diagrammatic meta-annotation showing the dense/sparse rhythm at each scale. It is not content — it is a structural diagram explaining the page's own rhythm.

**Ceiling experiment — PARTIAL meta-annotation (metaphor vocabulary only):**
The ceiling page uses zone indicators like "ZONE: Z-EXT / CLEARANCE: PUBLIC" and "ZONE: Z-SEC / CLEARANCE: CLASSIFIED." These are metaphor vocabulary, not architectural meta-annotation. They tell you WHERE in the metaphor you are, not WHY the page makes specific structural choices.

### 5.3 Implementation Guide

**Required HTML:** Section meta-labels using the existing `.section-meta` pattern:

```html
<div class="section-meta">
  Section [NUMBER] &middot; [AXIS PATTERN] &middot; [DENSITY PATTERN]
</div>
```

**CSS for section-meta** (typically already in Pass 2):
```css
.section-meta {
  font-family: var(--font-mono);
  font-size: var(--type-meta);        /* 0.75rem */
  color: var(--color-text-secondary); /* #666666 */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
```

**CSS cost:** ~6 lines if not already present. Usually 0 (section-meta CSS exists from Pass 2).

**HTML volume:** ~3 lines per section header (1 section-meta div) x number of sections. For 6-8 sections = ~18-24 lines.

**Minimum viable implementation:** Each section has a meta-label showing at least the section number and axis pattern name.

### 5.4 Builder Instructions

```
META-ANNOTATION (Pass 3 — Intentionality Builder)

Every content section MUST include a .section-meta element above the section
heading that shows:
  - Section number (01, 02, 03...)
  - Axis pattern name (SPIRAL, Z-PATTERN, BENTO, F-PATTERN, CHOREOGRAPHY)
  - Density pattern name (GEOLOGICAL, PULSE, ISLANDS, CRESCENDO, WAVE)

Format: "Section 01 * Spiral * Geological Density"

Like CD-006: every section header includes the pattern names as a secondary
information channel. The reader can ignore them or use them to understand
the page's structural logic.

Additionally, the footer SHOULD include a provenance stamp showing which
dimension patterns the page applies (e.g., "DD:FRACTAL * OD:COMPOUND * AD:ALL").

Meta-annotation MUST use mono font, small size, uppercase, secondary color.
It is quiet metadata, not primary content.
```

### 5.5 Danger Zones

- **Over-annotation:** Labeling every paragraph, every component, every transition creates noise. Meta-annotation belongs at the SECTION level (section headers) and PAGE level (footer provenance), not at finer granularity. Exception: pages whose TOPIC is the annotation system itself (like DD-006).
- **Annotation as content:** If the meta-labels become the primary reading channel, the page has failed. Labels should be visually quiet (mono, small, secondary color) so they function as a background layer.
- **Wrong vocabulary:** Meta-annotation uses design system terminology (Spiral, Bento, Geological), not the metaphor's vocabulary. The metaphor operates in content; the meta-annotation operates in architecture. Using metaphor terms in meta-labels (e.g., "Zone: Security Desk") is metaphor decoration, not architectural annotation.

### 5.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** Section divs should include a placeholder for `.section-meta` even if the content is empty. This ensures the intentionality builder has a hook.

**Pass 2 (Compositional Elaboration):** The axis pattern and density pattern for each section are determined in Pass 2. The planner's elaboration plan should list each section's pattern assignments.

**Pass 3 (Intentionality):** The intentionality builder populates the `.section-meta` elements with the pattern names from the elaboration plan. This is a transcription task — the information exists, it just needs to be surfaced as visible HTML.

**Dependency:** Pass 2's elaboration plan must include per-section pattern assignments.

### 5.7 Measurement

**Binary check:** Does every content section have a `.section-meta` element with axis and density pattern names? YES/NO

**Binary check:** Is the meta-annotation visually quiet (mono font, small size, secondary color)? YES/NO

**Binary check:** Does the footer contain a provenance stamp? YES/NO

**Quality check (PA-evaluable):** Can a fresh-eyes auditor, reading the meta-annotations alone, reconstruct the page's architectural logic? If YES, meta-annotation is sufficient.

---

## DIMENSION 6: PROVENANCE THREADING (Design Decisions as Content)

### 6.1 Definition

Provenance threading means the page traces its design decisions to their source evidence. CSS comments cite findings. HTML comments reference research. The page is simultaneously a product (documentation) AND a research artifact (demonstrating provenance of design choices).

### 6.2 Concrete Examples from Crown Jewels

**DD-006 — Inline threading header (lines 1-116):**
116 lines of structured provenance in an HTML comment block:
```html
<!-- 1. WHY THIS EXISTS
DD-006-fractal.html is the sixth and final density exploration...

5. BUILT ON
  R3-036 | Research finding (EXEMPLARY) | Fractal self-similarity pattern
  DD-005-rivers.html | Predecessor | "Visualization at top, labels..."
  DESIGN-TOKEN-SUMMARY.md | Locked token source | Complete :root block

6. MUST HONOR
  DD-F-006 Fractal Meta-Pattern | Dense/sparse rhythm at all 4 levels -->
```

**DD-006 — CSS comments tracing tokens:**
```css
/* ═══════════════════════════════════════
   LOCKED DESIGN TOKENS — From DESIGN-TOKEN-SUMMARY.md
   DD-005 Lessons: Visualization at top, labels on elements, flow patterns
   ═══════════════════════════════════════ */
```

**CD-006 — Inline threading header (lines 1-52):**
52 lines tracing CD-006 to 7 dependencies with specific relationship types.

**CD-006 — Generated findings (lines 2053-2085):**
```html
<!-- CD-F-021: Bookend Spiral Creates Structural Wholeness
FINDING: Opening and closing with the same axis pattern...
EVIDENCE: Section 1 (Spiral: Core Abstraction on locked tokens)...
CHAIN: Validates AD-F-024 (compound is sequential)... -->
```
The page generates NEW findings from its own construction. It is not just a product — it is an act of design research.

**CD-006 — HTML comments throughout:**
```html
<!-- ═══════════════════════════════
     SECTION 1: WHY BUILD FROM TOKENS?
     Axis: SPIRAL (angular approximation per AD-F-013)
     Density: GEOLOGICAL (bedrock to atmosphere)
     Org: Confidence-Based
     ═══════════════════════════════ -->
```
Every section-opening comment cites the specific AD-F finding that justifies the axis pattern choice.

**Ceiling experiment — MINIMAL provenance:**
The ceiling page has CSS comments naming zones ("Z-ROOF," "Z-EXT") but no finding citations, no dependency chain, no generated findings. Its provenance is implicit — the metaphor was derived but the derivation is not traceable from the HTML.

### 6.3 Implementation Guide

**Required HTML:**
1. An inline threading header (HTML comment block, 20-50 lines) documenting: why the page exists, what it builds on, what constraints it honors, and what consumes it.
2. HTML comments at each section boundary citing the design decision rationale (axis pattern choice + finding reference).
3. CSS comments tracing locked tokens to their source document.

```html
<!-- INLINE THREADING HEADER
1. WHY THIS EXISTS
   [Page purpose and question it answers]

2. BUILT ON
   | Source | Relationship | Key Values |
   |--------|-------------|------------|
   | [File] | [Role]      | [Values]   |

3. MUST HONOR
   | Constraint | Specification |
   |-----------|---------------|
   | [Name]    | [Rule]        |
-->
```

**CSS cost:** 0 lines of rendered CSS. ~10-15 lines of CSS comments.

**HTML volume:** ~30-60 lines of HTML comments (invisible to reader but visible to auditors and future builders).

**Minimum viable implementation:**
1. A 20-line inline threading header
2. Section-boundary comments naming axis pattern and justification
3. CSS comment block tracing token sources

### 6.4 Builder Instructions

```
PROVENANCE THREADING (Pass 3 — Intentionality Builder)

The page MUST include provenance traces at 3 levels:

1. INLINE THREADING HEADER (HTML comment, top of file):
   - Why this page exists
   - What files/findings it builds on (table format)
   - What constraints it must honor
   Minimum: 20 lines. Like DD-006's 116-line header or CD-006's 52-line header.

2. SECTION BOUNDARY COMMENTS (HTML comments above each section):
   - Axis pattern name + justification
   - Density pattern name
   - Organization type
   Like CD-006: "Axis: SPIRAL (angular approximation per AD-F-013)"

3. CSS TOKEN COMMENTS (in the :root block):
   - Source document for each token group
   Like DD-006: "LOCKED DESIGN TOKENS -- From DESIGN-TOKEN-SUMMARY.md"

These traces are NOT visible to the reader. They are visible to auditors,
future builders, and anyone reading the source. They demonstrate that every
design decision is traceable, not arbitrary.
```

### 6.5 Danger Zones

- **Provenance as performance:** If the threading header cites 50 dependencies but only 3 are actually used, it is performative, not genuine. Every citation should trace to a visible design decision in the page.
- **Stale provenance:** If the page is modified after the threading header is written, the header may become inaccurate. The header should be the LAST thing written (or verified) in Pass 3.
- **Visible provenance:** Provenance traces belong in HTML/CSS comments, not in rendered content. The footer provenance stamp (Dimension 5: Meta-Annotation) is the ONLY visible provenance element. Everything else is source-code-only.

### 6.6 Integration with Passes 1-2

**Pass 1 (Spatial Skeleton):** The skeleton builder should include a placeholder threading header comment at the top of the file. Even a 5-line stub is useful.

**Pass 2 (Compositional Elaboration):** The elaboration builder should add section-boundary comments citing mechanism choices and finding references (if known). CSS comments tracing tokens should be added during the `:root` block setup.

**Pass 3 (Intentionality):** The intentionality builder completes the threading header with all dependencies, verifies section-boundary comments, and adds any missing provenance traces.

**Dependency:** The metaphor derivation document and planner's build plan provide the provenance sources. These must be available to the intentionality builder.

### 6.7 Measurement

**Binary check:** Does the page have an inline threading header of at least 20 lines? YES/NO

**Binary check:** Do at least 50% of sections have boundary comments with axis/density pattern citations? YES/NO

**Binary check:** Does the `:root` CSS block have source-document comments? YES/NO

**Quality check (PA-evaluable):** Can a fresh-eyes auditor trace at least 3 design decisions from the rendered page back to specific citations in the source code? If YES, provenance threading is functional.

---

## CROSS-DIMENSIONAL INTEGRATION MAP

### How Dimensions Interact

| Dimension | Enables | Enabled By | Conflicts With |
|-----------|---------|------------|----------------|
| Self-Reference | Pedagogical Sequencing (content becomes its own proof) | Content Topic Selection | Forced/artificial application |
| Pedagogical Sequencing | Cognitive Transitions (arc defines shift points) | Section Planning (Pass 1) | Reference-style content (non-sequential) |
| Cognitive Transitions | Pedagogical Sequencing (transitions carry arc forward) | Transition Infrastructure (Pass 2) | Over-bridging (too many prose transitions) |
| Structural Bookending | Closure experience | Section Planning (Pass 1) | Pedagogical arcs that end on action, not reflection |
| Meta-Annotation | Provenance Threading (visible architecture layer) | Pattern Assignments (Pass 2) | Over-labeling (noise) |
| Provenance Threading | Meta-Annotation (source-code architecture layer) | Metaphor Derivation + Build Plan | Performative citation |

### Pass-by-Pass Integration

```
PASS 1 (SPATIAL SKELETON):
  Prepare:
    [x] Designate bookend sections (first/last use same axis pattern)
    [x] Include .section-meta placeholder divs
    [x] Place transition--bridge/smooth/breathing divs (empty)
    [x] Add stub threading header comment (5 lines)
    [x] Consider self-reference potential in content topic

PASS 2 (COMPOSITIONAL ELABORATION):
  Prepare:
    [x] Assign axis/density patterns to each section (for meta-annotation)
    [x] Deploy same mechanisms in bookend sections (structural echo)
    [x] Set transition types based on cognitive shift weight
    [x] Add CSS token source comments in :root
    [x] Add section-boundary HTML comments with pattern citations

PASS 3 (INTENTIONALITY LAYER):
  Execute:
    [1] Add self-referential content (1+ instance)
    [2] Verify/refine pedagogical ordering (cumulative knowledge dependency)
    [3] Add bridge transition prose (2+ bridges with cognitive-shift text)
    [4] Verify bookend structural echo (same pattern, different content)
    [5] Populate .section-meta elements with pattern names
    [6] Complete inline threading header (20+ lines)
    [7] Verify section-boundary comments
    [8] Add footer provenance stamp
```

### Estimated Pass 3 Workload

| Dimension | Lines Added | Time (min) | Complexity |
|-----------|------------|------------|------------|
| Self-Reference | 20-40 | 5-10 | Medium (requires content-form alignment insight) |
| Pedagogical Sequencing | 10-20 | 5-10 | Low (mostly verification, some reordering) |
| Cognitive Transitions | 15-24 | 5-8 | Low (template-driven prose addition) |
| Structural Bookending | 0 (verification) | 3-5 | Low (structural echo already set in Pass 1-2) |
| Meta-Annotation | 18-24 | 3-5 | Low (transcription from elaboration plan) |
| Provenance Threading | 30-60 | 5-10 | Low (structured comment writing) |
| **TOTAL** | **93-168 lines** | **26-48 min** | **Predominantly low** |

The intentionality layer adds 93-168 lines of HTML (mostly comments and bridge text) at 0 additional CSS lines. It is the cheapest pass in terms of mechanism cost and the highest in terms of perceived quality differentiation.

---

## COMPOSITE MEASUREMENT CHECKLIST

### Binary Checks (12 total — must pass 10/12 for intentionality compliance)

| # | Dimension | Check | Pass/Fail |
|---|-----------|-------|-----------|
| I-01 | Self-Reference | At least 1 element where content describes its own form | |
| I-02 | Self-Reference | Self-reference is organic (arises from topic), not bolted on | |
| I-03 | Ped. Sequencing | Section N+1 depends on section N for 3+ consecutive pairs | |
| I-04 | Ped. Sequencing | At least 2 bridge transitions with cognitive-shift prose | |
| I-05 | Cognitive Trans. | At least 2 transition--bridge elements with prose content | |
| I-06 | Cognitive Trans. | Bridge prose names both preceding and following content | |
| I-07 | Bookending | First and last content sections use the same axis pattern | |
| I-08 | Bookending | At least 1 structural element echoes across both sections | |
| I-09 | Meta-Annotation | Every content section has .section-meta with pattern names | |
| I-10 | Meta-Annotation | Meta-annotation uses mono/small/secondary styling (quiet) | |
| I-11 | Provenance | Inline threading header of at least 20 lines exists | |
| I-12 | Provenance | At least 50% of sections have boundary comments with citations | |

### Quality Checks (PA-evaluable, judgment-based)

| # | Dimension | Quality Question | Rating |
|---|-----------|-----------------|--------|
| IQ-01 | Self-Reference | Does the self-reference feel natural, or forced? | Organic / Bolted-on |
| IQ-02 | Ped. Sequencing | Could sections be randomly reordered without loss? | No (good) / Yes (bad) |
| IQ-03 | Cognitive Trans. | Do bridges help the reader shift modes, or feel like filler? | Helpful / Filler |
| IQ-04 | Bookending | Does the reader experience closure at the end? | Yes / No |
| IQ-05 | Meta-Annotation | Can the architecture be reconstructed from annotations alone? | Yes / No |
| IQ-06 | Provenance | Can 3+ design decisions be traced to source citations? | Yes / No |

### Scoring

**Crown jewel benchmark:**
- DD-006: 9/12 binary, 4/6 quality (lacks Navigation-scale meta-annotation, no threading header for provenance in rendered content)
- CD-006: 12/12 binary, 6/6 quality (full intentionality)
- Ceiling experiment: 2/12 binary, 0/6 quality (only partial meta-annotation via zone labels)

**Flagship target:** 10/12 binary, 4/6 quality (minimum). 12/12 binary, 6/6 quality (aspirational).

---

## SUMMARY: THE INTENTIONALITY LAYER IN ONE PAGE

The intentionality layer is NOT magic. It is 6 concrete HTML/content additions, each with a binary check, that transform a spatially correct page into a genuinely excellent one.

| Dimension | What It Is | What It Costs | What It Adds |
|-----------|-----------|---------------|-------------|
| **Self-Reference** | Content describes its own form | 20-40 lines HTML, 0 CSS | Strange loop: reader learns by examining the artifact |
| **Pedagogical Sequencing** | Sections build cumulatively | 10-20 lines bridge text | Knowledge dependency: each section deepens the previous |
| **Cognitive Transitions** | Bridge prose names shifts | 15-24 lines HTML | Mode management: reader is guided between cognitive states |
| **Structural Bookending** | First/last sections echo | 0 lines (verification) | Closure: familiar form, transformed understanding |
| **Meta-Annotation** | Section labels show architecture | 18-24 lines HTML, 6 CSS | Dual reading: surface content + structural architecture |
| **Provenance Threading** | Comments trace decisions to sources | 30-60 lines comments | Epistemic grounding: every choice is traceable |

**Total cost: ~93-168 lines HTML/comments, ~6 lines CSS, ~26-48 minutes.**
**Total value: 15-20% of crown jewel quality, the primary Ceiling-to-Flagship differentiator.**

The intentionality layer is the cheapest pass and the highest-impact pass. It requires design intelligence, not CSS complexity. An Opus 4.6 agent with access to the metaphor derivation, build plan, and crown jewel examples can execute it in under 45 minutes.

---

**END INTENTIONALITY LAYER DESIGN**
