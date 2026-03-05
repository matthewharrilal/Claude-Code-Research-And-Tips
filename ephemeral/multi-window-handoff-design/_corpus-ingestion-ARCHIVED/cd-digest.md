# DEPRECATED -- CD Explorations Digest: Compositional Intelligence for Builders

> **STATUS: DEPRECATED -- DO NOT LOAD INTO BUILDER WINDOWS**
>
> This file compressed ~17,000 lines across 24 CD files into 283 lines -- a
> **60:1 compression ratio**. The highest compression of all 6 digests, and
> it shows. The digest captures the CD stage's core conviction (composition is
> chemistry, not decoration) and lists the key mechanisms. But CD is the stage
> where COMBINATION is the subject -- and you cannot understand combination
> by reading about it. You understand it by inhabiting the artifacts where
> combinations happen.
>
> **What was lost:**
> - The 6 HTML explorations themselves (10,610 lines of CSS/HTML). These are
>   the most directly useful artifacts for any builder -- complete working
>   examples of how velocity interleaving, transition grammar, and fractal
>   density actually manifest in code. The digest describes them; the artifacts
>   demonstrate them. For a builder writing CSS, demonstration beats description
>   by orders of magnitude.
> - CD-001's velocity interleaving as a DISCOVERY -- the moment when "alternate
>   component types" was replaced by "alternate component VELOCITIES." This
>   is an insight that should arrive through the struggle of building, not
>   through a pre-packaged rule.
> - CD-006's self-referential architecture as PROOF -- the meta-tutorial (a page
>   that teaches the design system by BEING a page in the design system) is
>   only convincing when you see it. Describing it creates "that sounds clever."
>   Seeing it creates "I understand what compositional integrity means."
> - The 3 case studies' anti-prescription framing -- Section 5 (reusable vs
>   non-reusable) and Section 6 (divergence verification) are structural
>   safeguards against copying. The digest removes these safeguards by
>   pre-extracting the mechanisms, making copying the path of least resistance.
>
> **Why this fails the 7 lenses:**
> 1. Conviction: present but ABSTRACTED -- composition-as-chemistry is a powerful frame, but chemistry is learned through experiments (the raw explorations), not through reading about experiments (this digest)
> 2. Content depth: the deepest CD content (the HTML artifacts themselves) is entirely absent. What remains is meta-commentary about content that is not present.
> 3. Creative framing: the "collapse moment" framing is genuinely valuable and transfers well. But collapse moments are experiential -- they happen when you're deep in a problem and everything clicks. A digest cannot create that experience.
> 4. Evocativeness: moderate -- the "velocity interleaving" description is clear, but seeing Heavy->FAST->Heavy in actual CSS is a different kind of understanding than reading the pattern name
> 5. Philosophical: the relationship between content and form is well-articulated. But at 60:1 compression, 98.3% of the material evidence for that philosophy is missing.
> 6. Multi-window suitability: VERY POOR -- the raw CD files have the strongest window differentiation of any corpus (HTML artifacts for W2, case studies for W1+W2, CD-006 for all windows). This digest collapses that differentiation.
> 7. Creative autonomy: the mechanism vocabulary list gives the builder a menu. The raw explorations give the builder the UNDERSTANDING to know when to create something not on the menu.
>
> **The correct approach:** Load raw CD HTML artifacts + case studies into
> windows based on content type matching. See `cd-distribution-map.md`.
> CD-006 goes to ALL windows. Builder window gets artifacts matching their
> density pattern. This digest is a readable but impoverished summary of
> material that should be experienced directly.
>
> **Preserved as cautionary example.** Original content follows unchanged.

---

# CD Explorations Digest: Compositional Intelligence for Builders

**Source:** 6 CD HTML explorations (~10,610 lines, ~461KB), 3 case studies (~1,200 lines), evaluation/selection docs (~1,600 lines), audit synthesis (~457 lines), build state + R5 evaluation matrix (~1,400 lines), convention spec (~1,450 lines), lock sheet (~170 lines)
**Total corpus:** ~24 files, ~17,000 lines
**Purpose:** Extract the compositional intelligence a builder needs -- what makes pages feel spatially alive, how mechanisms combine for maximum impact, and what CD-006 (the crown jewel, 39/40) reveals about the relationship between content and form.

---

## What the CD Explorations ARE

The CD (Combination Design) explorations are the FINAL stage of a 5-stage research pipeline. They test what happens when density patterns (DD), organizational patterns (OD), and axis patterns (AD) are combined on a single page. Six HTML pages were built, each testing a different combination hypothesis:

| Exploration | Combination | Score | What It Proved |
|-------------|-------------|-------|----------------|
| CD-001 | F-Pattern + Bento, CRESCENDO density, Narrative arc | 39/40 | Heavy components (code + reasoning + abstractions) coexist through velocity interleaving |
| CD-002 | Z-Pattern + Spiral, PULSE density, Task-based org | 37/40 | Tasks and decisions stack sequentially (never nest), decision pauses create PULSE rhythm |
| CD-003 | Bento + Choreography, ISLANDS density, Spatial org | 38/40 | File trees and callouts share left-anchor DNA; Bento-to-Choreography transition is the cleanest |
| CD-004 | Spiral + Choreography, TIDAL density, Confidence org | 38/40 | Essence callouts work as ambient background WITHOUT depth violations (K-12 constraint) |
| CD-005 | Z + F + Bento, WAVE density, Spatial org | 33/40 | 3-axis sequential deployment works when transition grammar is applied; responsive failure at 768px |
| CD-006 | ALL patterns, FRACTAL density, ALL org types | 39/40 | The crown jewel: 5 axis patterns, 7 transitions, 11 component types, fractal density at 5 scales |

Combined audit: 93.3% average, soul compliance 59/60, convention compliance 43/43 (100%), combination grammar 100%.

---

## The Core Conviction: Composition Is Chemistry, Not Decoration

The single most important thing the CD explorations prove is that composition is a CHEMISTRY problem. Components don't just sit next to each other -- they interact. The wrong sequence creates cognitive overload. The right sequence creates reading rhythm that feels inevitable.

### The Four Combination Rules (Non-Negotiable)

These emerged from the CD explorations as the fundamental grammar of composition:

**1. Velocity Rule (T2): Never stack same-speed components.**
Every component has a reading velocity. Code blocks are SLOW (dense, requires parsing). Callouts are FAST (scanned quickly). Reasoning components are SLOW. When two SLOW components sit adjacent, the reader drowns. Insert a FAST component between them.

This is the single most important compositional rule. CD-001 discovered it: the problem with code + reasoning isn't their TYPE, it's their VELOCITY. Type alternation (code, then explanation) isn't enough. Both are HEAVY. The pattern Heavy -> FAST -> Heavy -> MEDIUM -> Heavy creates rhythm that Heavy -> Heavy -> Heavy never can.

**2. Temperature Rule (T3): Don't oscillate between warm and cold.**
Tip callouts are warm (friendly, encouraging). Gotcha callouts are cold (urgent, warning). Jumping directly from warm to cold creates tonal whiplash. Buffer with neutral components (Info callouts, prose, code blocks).

**3. Weight Balance (G3): For every heavy component, include 1-2 light ones.**
Heavy: Code, Decision Matrix, Core Abstraction, Reasoning, File Tree. Light: Info Callout, Tip Callout. The golden ratio prevents visual crushing. Three consecutive heavy components = oppressive. Interleave.

**4. Semantic Proximity (G1): Related things close, unrelated things far.**
Tight grouping (8-16px) for semantically coupled components. Standard spacing (24-32px) for section-internal separation. Section breaks (48-64px) between distinct topics.

### Why These Work

These are perception physics, not style preferences. They describe how human attention actually flows through a page. The velocity rule maps to cognitive load theory -- stacking complex elements without relief causes processing failure. The temperature rule maps to emotional coherence -- tonal whiplash breaks trust. Weight balance maps to visual scanning -- the eye needs rest points. Proximity maps to Gestalt grouping -- closeness implies relationship.

A builder who internalizes these four rules will produce pages that feel composed even without explicit metaphor work. They are the minimum viable grammar of composition.

---

## How Mechanisms Combine: The Compositional Patterns

### Pattern 1: Velocity Interleaving (CD-001's Discovery)

This is the most important compositional pattern the CD explorations produced.

When content has multiple heavy component types (code blocks, reasoning blocks, core abstractions), the naive approach is to alternate types: code, explanation, code, explanation. CD-001 discovered this doesn't work because both code AND explanation are SLOW-velocity components. Alternating types while maintaining velocity = monotone drone.

The fix: interleave by VELOCITY, not type.

```
Heavy (code) -> FAST (tip callout) -> Heavy (reasoning) -> MEDIUM (prose) -> Heavy (abstraction)
```

This creates a breathing rhythm. The fast callout gives the reader's processing system a micro-rest before the next dense block. The medium prose provides a longer recovery. The result: three heavy components that feel manageable instead of crushing.

**Builder calibration:** When your content has 3+ heavy components clustered in one section, velocity interleaving is not optional. It's the difference between a readable page and a wall.

### Pattern 2: Axis Transition Grammar (CD-005 + CD-006)

When a page uses multiple spatial patterns (Z-Pattern for overview, F-Pattern for deep content, Bento Grid for reference cards), the transitions between them determine whether the page feels unified or fragmented.

Three transition types exist:

**SMOOTH:** Used when adjacent sections share a component type. A callout that exists in both the Z-Pattern section AND the F-Pattern section becomes the bridge. The shared element carries attention across the boundary. Gap: 32-48px.

**BRIDGE:** Used when sections have incompatible attention topologies. A prose paragraph or neutral component explicitly signals the shift. "Now that we understand the philosophy, let's set up the tools." Gap: 64px+.

**BREATHING:** Used for the most dramatic transitions (Spiral to Z-Pattern, Choreography to Spiral). Maximum white space (80px+) with a visual divider. Gives the reader time to completely reset before a new cognitive mode.

CD-005 tested all three on one page. CD-006 deployed 7 transitions (2 SMOOTH + 3 BRIDGE + 2 BREATHING) across 8 sections. The data is clear: transition grammar prevents cognitive whiplash. Without it, multi-axis pages feel like three separate documents stapled together.

**Builder calibration:** If your page has 3+ sections with different spatial patterns, you MUST think about transitions. The default (section break with spacing) only works for BREATHING transitions. SMOOTH and BRIDGE require intentional shared-component or prose-paragraph bridges.

### Pattern 3: CRESCENDO Density (CD-001 + CD-006)

Content with a narrative arc (setup -> development -> climax -> resolution) maps naturally to CRESCENDO density: sparse opening -> progressive compression -> peak density -> breathing resolution.

Concrete values from CD-001:
- Sparse intro: 80px section padding, generous line-height, minimal components
- Dense middle: 24px padding, compressed line-height, clustered heavy components
- Breathing outro: 56px padding, restored line-height, reflective components

The CRESCENDO isn't decorative. It maps INFORMATION DENSITY to VISUAL DENSITY. The intro has less information per pixel; the climax has more. Making visual density track information density produces a page that feels like it understands its own content.

**Builder calibration:** CRESCENDO works for content with clear narrative arcs (deep dives, tutorials with climax moments, arguments building to a conclusion). It doesn't work for flat content (reference docs, API listings, changelog entries). Let the content's shape determine whether CRESCENDO is appropriate.

### Pattern 4: Fractal Density at 5 Scales (CD-006)

This is CD-006's defining achievement and the strongest evidence that the design system's compositional theory works at full scale.

The same sparse/dense/sparse rhythm appears at every level:

1. **Navigation scale:** Table of contents (sparse labels -> dense section list -> sparse footer)
2. **Page scale:** 8 sections following a 4-act density arc (orient-sparse -> learn-dense -> build-progressive -> ship-sparse)
3. **Section scale:** Each section internally follows sparse opening -> dense body -> sparse closing
4. **Component scale:** Each callout = sparse label + dense body. Each code block = sparse comment header + dense logic.
5. **Character scale:** Instrument Serif italic (sparse/philosophical) vs Inter (medium/practical) vs JetBrains Mono (dense/technical)

When this works, the page has a feeling that's hard to articulate but immediately recognizable: every zoom level reveals the same compositional intelligence. The overall page rhythm echoes in individual sections, which echo in individual components. This is what "spatial intelligence" means in practice.

**Builder calibration:** You cannot achieve fractal density by working at one scale and hoping it cascades. You must set density INTENTIONALLY at each scale: page-level arc, section-level openings/closings, component-level label/body structure, and font choice. CD-006 succeeded because it planned density at all 5 scales simultaneously. Most pages only achieve 2-3 scales, which reads as "good but not exceptional."

---

## What Makes CD-006 Special (The Crown Jewel)

CD-006 scored 39/40 and was classified as the CEILING reference (later reclassified -- not quite Flagship, but the highest-scoring exploration). Understanding WHY it works is the most valuable compositional calibration a builder can receive.

### The Self-Referential Strategy

CD-006's content is "Building Your First KortAI Documentation Page" -- a tutorial about building pages using the very design system the page is built with. This creates a unique constraint: every section must USE the pattern it TEACHES. Section 2 teaches Z-Pattern, so it uses Z-Pattern layout. Section 3 teaches Bento Grid, so it uses Bento Grid layout.

This is not a gimmick. It's the purest test of compositional integrity. If the system's patterns can't document themselves, they can't document anything. The meta-tutorial works because the constraint (demonstrate by being) forces compositional choices that are content-driven, not decorative. Nothing is applied "because it looks good." Everything is applied because the content demands it.

**Builder takeaway:** The strongest compositions emerge when layout choices are DICTATED by content structure, not applied on top of it. CD-006 achieved 39/40 not because of visual polish but because every layout decision was content-necessary.

### The Mechanism Count

CD-006 deploys 41 mechanisms across 11 component types. This sounds like "throw everything at it," but the opposite is true. Every mechanism is present because the content demanded it:

- Sequential axis deployment (AD-F-024): 5 axis patterns because the tutorial has 5 cognitive modes
- Transition grammar (AD-F-025): 7 transitions because there are 7 section boundaries
- Fractal density (AD-F-027): 5 scales because the content has 5 structural levels
- 2-zone component DNA: present in every callout because callouts have labels and bodies
- Border-weight gradient: 4px/3px/1px because the tutorial distinguishes structural/section/component borders
- Compound combination: DD + OD + AD simultaneously because the tutorial is about combination itself

The lesson is NOT "deploy 41 mechanisms." The lesson is "when content genuinely needs compound combination, 41 mechanisms is what emerges naturally."

### Where CD-006 Falls Short

Despite 39/40, CD-006 has documented weaknesses that are instructive:

1. **TOC label smashing:** Section names and axis labels concatenate without separators ("01 Why Build from Tokens?SPIRAL"). A polish failure, not a compositional one, but it shows that even the crown jewel has cosmetic defects.

2. **One soul violation:** `opacity: 0.6` on table-of-contents section numbers. Minor (decorative element, not content), but shows that soul compliance requires vigilance at every scale, not just the obvious places.

3. **Convention divergences:** CD-006 uses a different line-height (25.6px vs 27.2px on all other CDs), a lavender essence background (vs cream on others), and no footer border. These were INTENTIONAL (documented in convention spec Section 9) but demonstrate that even "crown jewels" deviate from convention when content demands it.

**Builder takeaway:** Perfect scores don't exist. CD-006 achieved 39/40 by having ZERO compositional failures and one cosmetic defect. The compositional decisions (every mechanism justified by content need) were flawless. The polish (TOC formatting, opacity on a label) was imperfect. Builders should optimize for compositional integrity first, polish second.

---

## The Relationship Between Content and Form

The CD explorations collectively prove a thesis that sounds philosophical but is operationally concrete:

**Content shape determines compositional strategy. Not the other way around.**

### The Evidence

**CD-001 (Reasoning Inside Code):** Content has 3 heavy component types. This fact -- the VELOCITY profile of the content -- determined the entire layout strategy. Velocity interleaving wasn't chosen from a menu; it was the ONLY solution that resolved the cognitive overload problem created by the content's heaviness.

**CD-005 (Multi-Axis Transition):** Content has 3 distinct topic types requiring different reading patterns. This fact -- the COGNITIVE MODE diversity of the content -- determined the 3-axis sequential deployment. Z-Pattern for overview, F-Pattern for depth, Bento Grid for reference wasn't a stylistic choice; it was a structural necessity.

**CD-006 (Pilot Migration):** Content is a lifecycle tutorial (philosophy -> setup -> selection -> building -> auditing -> deployment -> extension). This 8-phase lifecycle determined 8 sections, each with a cognitive mode that mapped naturally to an axis pattern. Spiral for orientation, Z-Pattern for discussion, Bento Grid for discrete tasks, F-Pattern for progressive decision-making, Choreography for hub-spoke deployment. None of these were applied "because they'd look good." They were applied because the content's cognitive shape demanded them.

### The Tension-Collapse Moment

Each CD case study documents a "moment of collapse" -- the instant when multiple seemingly separate design problems resolve into a single principle.

**CD-001's collapse:** Realizing that the R5 velocity mismatch rule (T2) IS the design constraint. Not applying research TO content, but recognizing that the content's structure IS the research problem. Four separate layout problems (integration, overload, narrative arc, nesting violations) collapsed into one solution (velocity interleaving).

**CD-005's collapse:** Realizing that the transition grammar (AD-F-025) IS the solution. Three separate problems (axis confusion, topic separation, reading flow continuity) collapsed into one structural principle (transition grammar with SMOOTH/BRIDGE/BREATHING types).

**CD-006's collapse:** Realizing that "Building Your First KortAI Documentation Page" means the PAGE ITSELF is the first KortAI page. The tutorial IS the artifact. The demonstration IS the prescription. Three separate problems (teach without prescribing, prove all patterns work, maintain pedagogical flow) collapsed into one meta-strategy (self-referential documentation).

**Builder takeaway:** The collapse moment is not a creative luxury. It's the point where composition becomes integrated rather than layered. When you find the single principle that resolves multiple design tensions simultaneously, you've found your page's compositional DNA. Everything else follows.

---

## What "Spatial Intelligence" Actually Means

Across the CD explorations, "spatial intelligence" resolves to specific, measurable properties:

### 1. Multi-coherence at boundaries
At every section boundary, multiple CSS channels shift simultaneously: background color AND typography AND spacing AND border configuration. Not one at a time. All together. When only background changes at a boundary, the transition feels thin. When background + type size + spacing + border weight all shift, the boundary has compositional weight.

CD-006 demonstrates this at every section boundary. Transition from Spiral section to Z-Pattern section involves: new background tone, new heading scale, new spacing rhythm, new border configuration. Four channels shifting together. This is what makes the transition feel composed rather than arbitrary.

### 2. Density tracking content importance
Visual compression maps to information density. Important, dense sections get compressed spacing (24-32px padding). Orienting, breathing sections get expansive spacing (64-80px). This isn't decoration. It's LEGIBILITY -- the page's visual rhythm tells the reader "this part is dense and important" vs "this part is spacious and orientational."

### 3. Velocity variation within sections
Long vertical sections (F-Pattern deep dives) need velocity variation to prevent monotony. A section that's entirely prose (MEDIUM velocity) for 2000px of scroll puts the reader to sleep. Interspersing FAST callouts, SLOW code blocks, and MEDIUM prose creates rhythm within the section that sustains attention.

### 4. Transition intentionality
The gaps between sections are compositional decisions, not default values. A 48px gap with a shared component says "these are related." An 80px gap with a visual divider says "we're entering a different cognitive space." Using the same gap everywhere is the spatial equivalent of monotone speaking.

### 5. Fractal echoing
The page's macro rhythm (dense section, sparse section, dense section) echoes at the micro level (dense component body, sparse component label). When this echoing works, the page feels like it was designed by someone who understands their content at every scale. When it doesn't, the page feels like components were placed in order without compositional awareness.

---

## What a Builder Needs to Internalize

### The Mechanisms (Transferable Tools)

From the full CD corpus, these are the mechanisms a builder should have in their active vocabulary:

1. **Velocity interleaving** -- Never stack same-velocity. Heavy -> FAST -> Heavy.
2. **Transition grammar** -- SMOOTH (shared component), BRIDGE (prose paragraph), BREATHING (maximum gap + divider).
3. **CRESCENDO density** -- Sparse opening -> dense climax -> breathing resolution. Maps to narrative arc.
4. **WAVE density** -- Oscillating density across sections. Maps to content with varying purpose (overview sparse, detail dense, reference moderate).
5. **Sequential axis deployment** -- One axis pattern per section. Compound effect through scrolling, not viewport co-existence.
6. **Fractal density at 5 scales** -- Same sparse/dense rhythm at navigation, page, section, component, character levels.
7. **2-zone component DNA** -- Every component = sparse label + dense body. Universal structural pattern.
8. **Border-weight gradient** -- 4px structural / 3px section / 1px separator. Thickness encodes hierarchy.
9. **Bento heavy containment** -- When 4+ heavy components cluster, use grid cells to isolate them. Prevents bleed.
10. **Flat sequencing** -- Components stack vertically, never nest. When nesting feels necessary, re-sequence.
11. **Composite pre-composition** -- Multi-part components (reasoning = label + content + citation) built in CSS, not assembled via HTML nesting.
12. **BRIDGE transition for incompatible topologies** -- When adjacent sections have fundamentally different attention flows, insert an explicit neutral bridge.

### The Conviction (Creative Calibration)

1. **Content determines composition.** Not the other way around. Every CD exploration that scored 38+ derived its layout from content analysis, not aesthetic preference.

2. **Composition is chemistry.** Components interact. Sequence matters. The same components in different order produce different experiences. A Tip after a Code block feels like relief. A Tip after another Tip feels like a sidebar.

3. **Constraint is generative.** border-radius: 0 didn't limit the design space -- it SHAPED it. The soul constraints force compositional solutions that wouldn't emerge without them. Sharp edges demand typographic hierarchy do the work that rounded corners and shadows do elsewhere.

4. **Perceptual minimums exist.** Every CSS value must be perceptible to a human. Background differences < 15 RGB points are invisible. Letter-spacing < 0.025em is invisible. Spacing < 24px between zones looks identical to 0. Sub-perceptual CSS is wasted code.

5. **The 2-callout limit is real.** More than 2 consecutive callouts creates "sidebar fatigue." The third callout loses its interruption power. Interleave with prose or code, or consolidate into a single multi-point callout.

6. **Transitions are compositional decisions.** The space between sections is not dead space. It's a compositional element with its own grammar (SMOOTH, BRIDGE, BREATHING). Uniform gaps = monotone delivery.

7. **Metaphor drives mechanism selection.** CD-001's velocity interleaving emerged from the specific problem of 3 heavy component types. CD-005's transition grammar emerged from the specific problem of 3 axis patterns on one page. The mechanism should be a CONSEQUENCE of your content analysis, not a pre-selected template.

8. **The collapse moment matters.** The best compositions find a single principle that resolves multiple tensions simultaneously. Look for it. When you find it, commit to it before consulting any examples.

---

## The Anti-Patterns (What Kills Composition)

From the CD audit synthesis and retrospective analysis:

1. **Same-velocity stacking.** Code -> Reasoning -> Code -> Reasoning = cognitive drowning. The most common compositional failure.

2. **Temperature whiplash.** Tip (warm) -> Gotcha (cold) -> Essence (warm) = emotional chaos. Buffer with neutral components.

3. **Nesting components.** Putting a Decision Matrix inside a Task Component creates hierarchy confusion. Always flatten to sequential stacking.

4. **Callout cacophony.** Info -> Tip -> Gotcha -> Essence -> Challenge = the page becomes a sidebar. Max 2 consecutive callouts, then prose or code.

5. **Missing context start (A6).** Sections without orientation components feel like being dropped mid-conversation. Start sections with Info callouts or context-setting prose.

6. **Anxiety ending (A7).** Sections ending on Gotcha callouts (warnings) leave the reader anxious. End with resolution components (Tip, Essence, Challenge invitation).

7. **Code wall (A2).** 4+ consecutive code blocks = the page becomes a code dump. Interleave with explanation, tips, or reasoning.

8. **Uniform gaps.** Same spacing everywhere (48px between every section, 24px between every component) eliminates spatial intelligence. Vary gaps to encode relationship proximity.

---

## File Reference

**CD HTML explorations:** `design-system/validated-explorations/combination/CD-001-*.html` through `CD-006-*.html`
**CD case studies:** `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md`, `CD-005-multi-axis-transition.md`, `CD-006-pilot-migration.md`
**CD audit synthesis:** `design-system/validated-explorations/combination/CD-AUDIT-SYNTHESIS.md`
**CD build state:** `design-system/validated-explorations/combination/CD-BUILD-STATE.md`
**CD evaluation matrix:** `design-system/validated-explorations/combination/R5-EVALUATION-MATRIX.md`
**CD convention spec:** `design-system/specification/provenance/stage-5-combination-cd/CD-CONVENTION-SPEC.md`
**CD content selection (CD-006):** `design-system/validated-explorations/combination/CD-006-CONTENT-SELECTION.md`
**CD-005 evaluation:** `design-system/validated-explorations/combination/CD-005-EVALUATION.md`
**Lock sheet:** `design-system/validated-explorations/combination/lock-sheet.md`
