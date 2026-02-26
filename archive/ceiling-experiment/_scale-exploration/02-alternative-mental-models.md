# Alternative Mental Models for Design Richness

**Date:** 2026-02-16
**Purpose:** Explore frameworks for thinking about richness that are NOT "fractal coherence across spatial zoom levels"
**Status:** Exploratory research -- these are candidate models, not prescriptions

---

## Preamble: What the Spatial Zoom Model Actually Claims

The current model says: **Richness = coherent pattern repetition across spatial scales.** The same sparse-dense-sparse rhythm appears at Navigation, Page, Section, Component, and Character zoom levels. More scales showing coherence = richer page. DD-006 has 4 scales; CD-006 has 5; Middle tier has 2. The measurement is: count the zoom levels where the pattern holds.

This is a powerful model. But it has a hidden assumption: **richness is a property of STRUCTURE observed at REST.** You look at the page, you zoom in, you zoom out, and richness is what you find at each magnification level. The page is a fixed artifact. The reader is a microscope.

What if that assumption is wrong -- or at least incomplete? What if richness also lives in dimensions that spatial zoom cannot capture?

The following seven models each propose a different answer to the question: **"What IS richness, if not structural self-similarity across magnification?"**

---

## Model 1: The Temporal Metabolism

### Core Metaphor
A page is not a painting. It is a **living organism with a metabolic rate** -- how fast it reveals, transforms, and resolves information over time. Richness is the complexity of that metabolism: how many temporal layers are operating simultaneously, and how they interact.

### What Dimension Does It Add?
**Time.** Not time as in "animation speed" but time as in the layered temporal experience of encountering a page: the instant first impression (0-100ms), the scanning phase (1-5 seconds), the reading phase (30-300 seconds), the return visit (days later). Each temporal layer can have its own designed experience, and the richness comes from how those layers reinforce or transform each other.

### Concrete Example
Consider a documentation page about authentication:

- **0-100ms (metabolic flash):** The dark header with 3px border and a coral warning callout create an immediate visceral impression: *authority + caution*. No reading has occurred. The page has already communicated.
- **1-5s (metabolic scan):** The eye catches the section headings, the code blocks, the diagram. A TOC with density indicators reveals the page's shape. The reader now knows: *5 sections, the third one is dense, there's a diagram in section 2.* The page has communicated its topology without being read.
- **30-300s (metabolic read):** The content unfolds. But -- and here is the richness -- the PACE of unfolding varies. Section 1 is quick (overview, sparse spacing, short paragraphs). Section 3 is slow (dense code blocks, tightly packed reference tables, compressed spacing that physically slows the eye). The page breathes fast, then slow, then fast again. The reader's cognitive metabolism is being entrained to the content's importance.
- **Return visit (days later):** The page has structural landmarks -- the coral callout, the diagram, the dark code blocks -- that function as memory anchors. A returning reader doesn't re-read; they navigate to landmarks. The page's temporal metabolism has a "re-entry protocol" designed into its visual weight distribution.

A page with rich temporal metabolism designs ALL FOUR of these layers deliberately. A page with poor temporal metabolism designs only the reading layer and lets the others happen accidentally.

### How Would You Measure It?
**Count the temporal layers that show deliberate design:**

| Layer | Deliberately Designed? | Evidence |
|-------|----------------------|----------|
| Flash (0-100ms) | Does the page communicate emotion/type before reading? | Color weight, visual mass, contrast ratio of first viewport |
| Scan (1-5s) | Does the page reveal its shape/topology to a scanner? | Heading hierarchy, visual landmarks, density variation visible without reading |
| Read (30-300s) | Does the page modulate reading speed through density? | Spacing compression ratios, paragraph length variation, dense/sparse alternation |
| Return (days+) | Does the page have navigable landmarks for re-entry? | Unique visual markers, structural distinctiveness of sections, TOC/anchor system |

**Score: 0-4 layers.** Spatial zoom measures breadth across space. Temporal metabolism measures breadth across time.

### Relationship to Spatial Scales
**Complementary, not competing.** Spatial scales describe what's there at each magnification. Temporal metabolism describes when and how it's encountered. A page could have perfect 5-scale fractal coherence but zero temporal design (every section reveals itself at the same pace, no scanning affordances, no landmarks for return visits). Conversely, a page could have brilliant temporal metabolism (stunning first impression, scannable topology, varied reading pace, strong landmarks) with only 1-2 spatial scales.

### What Would Max Temporal / Zero Spatial Look Like?
A single-column page with no fractal self-similarity -- uniform spacing, uniform borders, no component hierarchy -- but with a breathtaking first-viewport that uses a single dramatic color block to communicate instantly, section headings designed as visual waypoints (large, distinct, scannable), prose that varies from 2-line paragraphs to 15-line paragraphs based on content importance, and a distinctive "anchor image" in each section that a returning reader would recognize instantly. Structurally monotonous. Temporally choreographed.

---

## Model 2: The Semantic Resonance Field

### Core Metaphor
Every CSS property on a page is making a **claim about meaning.** Border-weight says "this is important." Background color says "this is a zone." Spacing says "these belong together" or "these are separate." Richness is NOT how many properties are deployed, but **how many properties are saying the SAME THING simultaneously** -- the resonance between independent channels of meaning.

Think of it like harmony in music. A single note is not rich. Three notes sounding independently are not rich. Three notes that form a CHORD -- that create overtones, that produce a harmonic field greater than the sum of parts -- THAT is richness.

### What Dimension Does It Add?
**Semantic channel density per meaning.** Not "how many CSS properties" but "how many CSS properties are encoding the same semantic claim at the same point in the page." This is what the existing system calls "multi-channel encoding" but elevated from a technique to a full mental model.

### Concrete Example
Take a single section transition -- the moment where a page moves from "overview" to "technical details":

**Low resonance (1 channel):**
Only spacing changes. 64px gap before the section, 32px gap after. One channel says "boundary here." Everything else is continuous.

**Medium resonance (2-3 channels):**
Spacing changes (64px to 32px). Background color shifts (cream to white). Border appears (3px left border on the new section). Three channels all say "you have crossed a threshold." The reader feels the transition without consciously registering why.

**High resonance (4-5 channels):**
Spacing compresses (64px to 32px). Background shifts (cream to white). Border thickens (1px to 3px). Typography weight increases (regular to semibold headings). Font size jumps (1.375rem to 1.625rem). Paragraph max-width narrows (75ch to 65ch -- physically denser text lines). ALL SIX channels say "you have entered a zone of higher information density and structural importance." The transition is felt as a change in atmospheric pressure.

The resonance model says: richness is the number of simultaneous channels encoding each semantic transition, summed across all transitions on the page. A page with 10 transitions at 2-channel resonance is LESS rich than a page with 5 transitions at 5-channel resonance.

### How Would You Measure It?
**For each semantic transition on the page, count the CSS channels that participate:**

1. Identify all semantic boundaries (section starts, zone changes, importance shifts, topic changes)
2. For each boundary, list which CSS properties change: spacing, background, border, typography weight, font size, width, color, opacity, alignment
3. Score = average channel count per transition

| Average Channels | Rating |
|-----------------|--------|
| 1.0-1.5 | Flat (properties deployed independently) |
| 2.0-2.5 | Functional (some coordination) |
| 3.0-3.5 | Resonant (deliberate multi-channel) |
| 4.0-5.0 | Harmonic (full semantic field) |

### Relationship to Spatial Scales
**Orthogonal.** Spatial scales count magnification levels. Resonance counts channels per semantic moment. You could have 5-scale fractal coherence with 1-channel resonance (every scale is coherent, but each uses only one CSS property to say its thing). You could have 1-scale structure with 5-channel resonance (no fractal repetition, but every transition is a full harmonic chord). The richest pages max BOTH: fractal across scales AND resonant within each scale.

### What Would Max Resonance / Zero Spatial Look Like?
A flat page structure -- no nesting, no component hierarchy, no fractal self-similarity. But every single section boundary is a five-channel symphony: spacing + background + border + typography + width all shift in coordinated lockstep. You scroll through it and the transitions feel like walking through rooms with different atmospheres, even though there's no structural zoom to observe. The page has no "scales." It has *harmonics*.

---

## Model 3: The Narrative Arc

### Core Metaphor
A page is a **story with dramatic structure.** It has exposition (context-setting), rising action (complexity building), a climax (the key insight or critical content), falling action (implications, next steps), and denouement (resolution, footer). Richness is the completeness and intentionality of this dramatic arc -- how well the page's visual design mirrors and amplifies its narrative shape.

### What Dimension Does It Add?
**Dramatic tension.** Not where you are in space (zoom level) but where you are in the ARGUMENT. The question isn't "does the pattern repeat at component scale?" but "does the visual design know that paragraph 47 is the pivotal moment of the entire page, and does it treat that moment differently than paragraph 12?"

### Concrete Example
An API migration guide:

- **Exposition (sections 1-2):** Sparse spacing, breathing room, warm background. The page is calm. Typographically relaxed (large line-height, generous margins). The visual design says: *Settle in. You're safe. This is orientation.*
- **Rising action (sections 3-4):** Spacing tightens. Callouts begin appearing -- first informational (blue), then cautionary (amber). Code blocks get longer and more complex. Tables appear. The visual density is literally increasing. The design says: *Pay attention. Complexity is accumulating.*
- **Climax (section 5):** The critical migration step. A full-width dark background zone. Maximum border weight (4px). Spacing at its tightest. A coral warning callout with bold text. The most complex code block on the page. Everything visual is at maximum intensity. The design says: *This is the moment. Get this wrong and everything fails.*
- **Falling action (section 6):** Spacing opens back up. Background returns to cream. Callouts shift to green (success). The design is physically exhaling. *You made it through. Here's what comes next.*
- **Denouement (section 7, footer):** Sparse, quiet, dark footer mirroring the header. Links to related resources. The page resolves. *The story is complete.*

A page with a rich narrative arc designs EACH PHASE of this dramatic structure with distinct visual treatment. A page with no narrative arc uses the same visual treatment from start to finish -- every section looks the same regardless of its dramatic function.

### How Would You Measure It?
**Map visual intensity along the scroll axis and compare it to content importance:**

1. Score each section's visual intensity (0-10) based on: spacing density, border weight, background contrast, typography weight, component complexity
2. Score each section's content importance (0-10) based on: centrality to the page's purpose, consequence of misunderstanding, complexity of information
3. Calculate CORRELATION between visual intensity and content importance
4. Also evaluate: Does the page have a clear climax? A resolution? Or is it visually flat throughout?

| Correlation | Narrative Rating |
|------------|-----------------|
| < 0.3 | No narrative (visual treatment is random relative to content importance) |
| 0.3-0.5 | Weak narrative (some sections get more treatment, but not consistently) |
| 0.5-0.7 | Clear narrative (visual intensity tracks content importance) |
| 0.7-1.0 | Dramatic narrative (visual design amplifies the content's own arc) |

### Relationship to Spatial Scales
**Competes for attention but addresses a different axis.** Spatial zoom is about STRUCTURE (what's inside what). Narrative arc is about SEQUENCE (what comes before what). A page can be structurally rich at all zoom levels but narratively flat (every section is equally intense). A page can be narratively brilliant (clear climax, perfect tension curve) but structurally simple (no nested scales). In practice, the richest pages are probably strong on both -- but the two models ask fundamentally different questions about what's happening.

### What Would Max Narrative / Zero Spatial Look Like?
A page with absolutely uniform component structure -- every section uses the same heading size, the same callout type, the same code block styling, no fractal nesting. But the SPACING and BACKGROUND and INTENSITY vary dramatically along the scroll axis, creating a visceral sensation of building tension, climax, and release. You feel the page's shape in your gut even though, if you zoom in to any individual section, it looks identical to any other. The richness is in the JOURNEY, not the structure.

---

## Model 4: The Materiality Gradient

### Core Metaphor
Design elements exist on a spectrum from **ethereal to physical.** A thin 1px line in a light gray is almost not there -- ghostly, atmospheric. A 4px border in near-black is assertively present -- heavy, material, weighty. Color saturation, border thickness, background contrast, typographic weight, spacing tightness -- all of these contribute to the perceived PHYSICALITY of a design element. Richness is the range of materiality deployed on a single page and the intentionality of how that range maps to content semantics.

### What Dimension Does It Add?
**Perceived physical weight / tangibility.** Not spatial scale, not time, not sequence -- but the felt sense of how REAL, how PRESENT, how HEAVY each element is. This is the axis from "whisper" to "shout," from "translucent" to "carved in stone."

### Concrete Example
A design system documentation page:

- **Ethereal elements (materiality 1-2):** The page's meta-labels ("Last updated: Feb 2026") in 0.75rem light gray text with generous letter-spacing. These elements barely exist. They're informational vapor -- present if you look for them, invisible if you don't. Their ethereality communicates: *This is housekeeping, not content.*
- **Atmospheric elements (materiality 3-4):** Section subtitles in 1rem regular weight. Horizontal rule dividers at 1px. Inline code in light background. These elements shape the reading experience without demanding attention. They're the air between solid objects.
- **Substantial elements (materiality 5-6):** Body text in 1rem at regular weight, with full color contrast. Tables with visible borders. Callout boxes with left borders. These are the working middle -- present, readable, functional. They're the furniture of the page.
- **Physical elements (materiality 7-8):** Section headings in 1.625rem semibold. 3px structural borders. Dark zone backgrounds. Code blocks with syntax highlighting. These demand attention and structure the experience. They're the walls and floors.
- **Monumental elements (materiality 9-10):** The page title in 2.5rem Instrument Serif. The dark header with its 3px bottom border occupying the full viewport width. The 4px accent borders on critical callouts. These are immovable landmarks. They're the bedrock.

A rich page uses the FULL RANGE from ethereal to monumental. A flat page uses only the middle (materiality 4-7). An overwrought page uses only the heavy end (materiality 7-10, everything screaming for attention).

### How Would You Measure It?
**Calculate the materiality range and distribution:**

1. For each distinct element type on the page, assign a materiality score (1-10) based on: border weight, color contrast, font weight, font size, background presence, spacing density
2. Calculate the RANGE (highest materiality minus lowest)
3. Calculate the DISTRIBUTION (are all materiality levels represented, or are they clustered?)
4. Calculate the SEMANTIC FIT (does materiality correlate with content importance?)

| Range | Distribution | Richness Rating |
|-------|-------------|-----------------|
| 1-3 | Clustered | Flat (everything at similar weight) |
| 4-6 | Bimodal | Functional (heavy headers + light body, no middle) |
| 7-8 | Continuous | Rich (full gradient from ethereal to monumental) |
| 9-10 | Continuous + semantically mapped | Masterful (materiality = meaning) |

### Relationship to Spatial Scales
**Complementary.** Spatial scales ask "does the pattern repeat when you zoom in?" Materiality asks "does the page use the full range from whisper to shout?" A page could have perfect fractal self-similarity where every scale uses materiality 5-7 (coherent but flat). A page could have extraordinary materiality range (scores 1 through 10) but no structural nesting. In the richest pages, the materiality gradient MAPS ONTO the spatial scales: the higher the zoom level (page > section > component), the heavier the materiality. But this mapping is a CHOICE, not a necessity.

### What Would Max Materiality / Zero Spatial Look Like?
A single flat list -- no nesting, no sections, no components, no fractal anything. But the list items range from near-invisible (0.6875rem, light gray, no border) to overwhelming (2rem, near-black, 4px border, dark background). Walking down the list is like walking through geological strata -- each item has a distinct physical weight. You FEEL the importance gradient in your body. But there's nothing to "zoom into." The richness is on a single plane, in a single dimension: weight.

---

## Model 5: The Cognitive Scaffolding

### Core Metaphor
A page is a **teaching machine** that guides the reader through cognitive states: recognition ("I've seen this before"), comprehension ("I understand what this says"), synthesis ("I see how this connects to what I already know"), and insight ("I now understand something I didn't before"). Richness is how many cognitive transitions the page actively scaffolds, and how well the visual design supports each transition.

### What Dimension Does It Add?
**Reader cognitive state.** Not where you are in space or time, but where you are in UNDERSTANDING. This model doesn't care about CSS properties or zoom levels. It asks: does the page know what the reader understands at each point, and does it design for the transition from not-understanding to understanding?

### Concrete Example
A page explaining dependency injection:

- **Recognition layer:** The page opens with a code example the reader has SEEN before -- a simple function with hard-coded dependencies. This is styled as familiar: clean, well-lit code block, no callouts, no emphasis. The design says: *You know this. This is ground you've covered.* The visual plainness IS the message.
- **Comprehension layer:** A blue callout appears: "Notice the problem?" Then a second code block showing the same function but with the dependencies highlighted (bold, colored). The callout is an explicit cognitive scaffold: it tells you WHERE to look and WHAT to notice. The visual emphasis (border, callout, highlighting) marks the transition from "seeing code" to "understanding a pattern."
- **Synthesis layer:** A diagram appears showing the dependency graph -- not just this function, but how it connects to three other components. The visual expands from a single code block (local) to a diagram (systemic). The reader is being asked to zoom OUT cognitively, and the design literally provides a wider visual frame. An amber callout connects this to a concept from a previous page: "This is the same pattern we saw in the service layer." Cross-reference as cognitive scaffold.
- **Insight layer:** A final section with a different visual treatment entirely -- wider margins, a larger heading, a summary that REFRAMES everything above: "Dependency injection isn't about testing. It's about making change cheap." This section uses the heaviest typography and most breathing room on the page. The design gives the insight SPACE. It doesn't crowd the epiphany with detail.

### How Would You Measure It?
**Map cognitive scaffolding types and count deliberate transitions:**

| Scaffold Type | Visual Signature | Present? |
|--------------|-----------------|----------|
| Recognition | Familiar styling, no emphasis, "you know this" treatment | Y/N |
| Comprehension | Highlighting, callouts, "notice this" emphasis | Y/N |
| Synthesis | Diagrams, cross-references, wider visual context | Y/N |
| Insight | Breathing room, reframing, heavy typography for key claims | Y/N |
| Transition cues | Visual differentiation between scaffold types | Y/N |

**Score: 0-5 scaffolds.** Also measure: are transitions between scaffold types visually marked (do you FEEL the shift from comprehension to synthesis), or do they happen silently?

### Relationship to Spatial Scales
**Orthogonal but occasionally isomorphic.** Spatial scales describe structural nesting. Cognitive scaffolding describes epistemic progression. They CAN align (recognition at page scale, comprehension at section scale, insight at component scale) but they don't HAVE to. A page could have perfect 5-scale fractal structure but zero cognitive scaffolding (it's visually rich but doesn't help you learn). A page could have brilliant scaffolding -- walking you from recognition through insight with perfect visual cues -- but no structural nesting at all.

The key distinction: spatial zoom is about WHAT THE PAGE IS. Cognitive scaffolding is about WHAT THE READER BECOMES.

### What Would Max Scaffolding / Zero Spatial Look Like?
A completely flat page -- no sections, no components, no hierarchy, no nesting. Just a sequence of paragraphs and code blocks. But the STYLING of each element shifts as the reader progresses: early paragraphs are plain (recognition -- "you know this"). Middle paragraphs introduce emphasis and callouts (comprehension -- "see this new thing"). Later paragraphs add diagrams and cross-references (synthesis -- "connect the dots"). The final paragraph has dramatic breathing room and heavy typography (insight -- "here's what it means"). The page looks structurally uniform but FEELS like a guided intellectual journey. The richness is in the pedagogical trajectory, not the structural architecture.

---

## Model 6: The Systemic Gravity

### Core Metaphor
No page exists alone. Every page exists within a **gravitational field** created by the other pages in the system. Some pages are massive (the landing page, the getting-started guide) and exert strong gravitational pull -- other pages orbit them, reference them, lead to or from them. Richness is a page's awareness of its position in this gravitational field: how many other pages it acknowledges, connects to, echoes, or deliberately contrasts with.

### What Dimension Does It Add?
**Inter-page relationship density.** Not what's inside the page (spatial zoom) but what's BETWEEN pages. This model measures how connected, how embedded, how gravitationally bound a page is within its system. An isolated page -- no matter how internally rich -- is poor in systemic gravity. A deeply connected page -- even if internally simple -- is rich in systemic gravity.

### Concrete Example
A page about "Error Handling Patterns" in a documentation site:

- **Zero systemic gravity:** The page exists as a standalone document. It explains error handling. There is no indication that other pages exist. No links, no cross-references, no visual echoes of other pages' design treatments. If you delete every other page in the system, this page is unchanged. It floats in a void.
- **Low systemic gravity (breadcrumb level):** The page has a breadcrumb trail (Home > Guides > Error Handling) and a "Next: Logging Patterns" link at the bottom. It acknowledges the system's existence but treats it as mere navigation.
- **Medium systemic gravity (cross-reference level):** The page references specific concepts from other pages: "As described in Authentication (see that page's flow diagram)..." It uses the SAME visual treatment for error severity callouts that the Logging page uses for log levels -- a family resemblance that tells the reader "these two pages share vocabulary." An aside box says "If you're coming from the API Reference, note that error codes there map to these patterns."
- **High systemic gravity (gravitational binding):** The page's entire visual structure echoes and inverts the structure of its "sibling" page (Logging Patterns). Where Logging uses a light-to-dark gradient (reading as accumulation), Error Handling uses a dark-to-light gradient (reading as resolution). The reader who has seen both pages experiences a COUNTERPOINT -- two pages in dialogue. The page includes a miniature version of the system's architecture diagram with "YOU ARE HERE" highlighting. It opens with: "This page assumes you've read Getting Started (the foundation these patterns rest on) and works with Logging (the system these patterns feed into)."

### How Would You Measure It?
**Count inter-page connections by type and depth:**

| Connection Type | Depth | Count |
|----------------|-------|-------|
| Navigation links (breadcrumb, next/prev) | Shallow | N |
| Content cross-references ("as described in...") | Medium | N |
| Visual family resemblance (shared component treatments) | Medium | N |
| Structural echoing/counterpoint with sibling pages | Deep | N |
| Explicit system positioning ("you are here" context) | Deep | N |
| Prerequisite acknowledgment ("assumes you've read...") | Deep | N |

**Score = sum of (count * depth weight).** Shallow connections are worth 1 point each. Medium connections are worth 3. Deep connections are worth 5.

### Relationship to Spatial Scales
**Completely independent.** Spatial scales measure what happens WITHIN a page at different magnifications. Systemic gravity measures what happens BETWEEN pages across the system. A page can have perfect 5-scale internal structure and zero systemic gravity (it's a beautiful island). A page can have 1-scale flat structure and massive systemic gravity (it's a simple page deeply woven into a complex system). The two dimensions are non-overlapping.

This is perhaps the model that is most clearly orthogonal to spatial zoom, because it literally isn't about the page itself at all -- it's about the page's relationships.

### What Would Max Gravity / Zero Spatial Look Like?
A plain text page -- no hierarchy, no components, no zoom levels, no fractal anything. Just paragraphs. But every third paragraph references another page. The page opens with a system map showing the reader's position. Visual treatments are borrowed from three other pages (this page uses the same callout color scheme as the API Reference, the same code block styling as the Tutorial, the same header treatment as the Landing Page). The page is internally flat but systemically dense -- a nexus, a crossroads, a hub. Its richness comes entirely from its gravitational field, not from its internal structure.

---

## Model 7: The Emotional Topology

### Core Metaphor
Every design choice creates an **emotional micro-climate.** The warm cream background generates calm. The near-black 4px border generates authority. The coral warning callout generates caution. A page is not a uniform emotional field -- it's a LANDSCAPE of emotional micro-climates, and richness is the variety, intentionality, and navigation of that landscape.

### What Dimension Does It Add?
**Emotional variation along the reading path.** Not structure (spatial zoom), not time (temporal metabolism), not meaning (semantic resonance), not cognition (scaffolding), not relationship (systemic gravity) -- but FEELING. What does it feel like to be HERE on the page, and how does that feeling change as you move through it?

### Concrete Example
A page about security best practices:

- **Opening zone (emotional climate: gravitas):** Dark header, heavy typography, institutional color palette. The reader feels: *This is serious. This matters. Authority is present.* The emotional message is not in the WORDS -- it's in the typographic weight, the dark background, the formality of spacing.
- **Context zone (emotional climate: reassurance):** Warm cream background returns. Generous spacing. Friendly prose tone supported by relaxed visual rhythm. A green "tip" callout. The reader feels: *Okay, I'm being guided. This is approachable despite the serious topic.* The visual warmth metabolizes the initial gravity.
- **Technical zone (emotional climate: focus):** Tight spacing, monospace code, minimal decoration. Callouts disappear. The emotional palette simplifies to: *Concentrate. This is the work.* The visual austerity strips away emotional noise.
- **Warning zone (emotional climate: urgency):** Coral callouts. Bold text. Tighter line-height. An amber "caution" box. The reader feels: *Danger. Pay attention here.* The emotional temperature spikes.
- **Resolution zone (emotional climate: satisfaction):** Green "success" callouts. Wider spacing. A summary with generous margins. The reader feels: *I've arrived. The hard part is done.* Visual breathing room creates emotional release.

A page with rich emotional topology traverses 4-6 distinct emotional climates along the scroll path. A flat page maintains one emotional climate throughout (usually "neutral" -- the emotional equivalent of background noise).

### How Would You Measure It?
**Map the emotional trajectory and measure its range:**

1. Divide the page into visual zones (changes in background, spacing, component density)
2. For each zone, identify the dominant emotional register from the palette: {gravitas, reassurance, focus, urgency, satisfaction, curiosity, calm, tension}
3. Count DISTINCT emotional registers used
4. Evaluate TRANSITIONS between emotions (are they abrupt or graduated?)
5. Evaluate SEMANTIC FIT (does the emotional register match the content's emotional demands?)

| Distinct Registers | Transitions | Rating |
|-------------------|-------------|--------|
| 1-2 | N/A | Monotone (one emotional note) |
| 3-4 | Abrupt | Varied but jarring |
| 3-4 | Graduated | Expressive (intentional emotional palette) |
| 5-6 | Graduated + Semantically Fit | Rich (full emotional landscape, content-aligned) |

### Relationship to Spatial Scales
**Complementary but measuring a completely different property.** Spatial scales ask: "Does the structure repeat at different magnifications?" Emotional topology asks: "Does the FEELING change as you scroll?" A page can have 5-scale fractal structure but one emotional register throughout (structurally rich, emotionally flat). A page can have one structural scale but traverse six emotional climates (structurally flat, emotionally rich).

The relationship gets interesting when they interact: the BEST pages might use spatial structure to CREATE emotional transitions (the dense section FEELS focused, the sparse section FEELS calm). But spatial structure doesn't GUARANTEE emotional variation -- a perfectly fractal page can be emotionally monotone if every scale produces the same feeling.

### What Would Max Emotional / Zero Spatial Look Like?
A structurally uniform page -- same section formatting throughout, no nesting, no component hierarchy, no fractal repetition. But the COLOR and WEIGHT and SPACING shift continuously along the scroll axis. The page opens in dark, heavy, authoritative tones. It gradually warms and lightens. Midway through, it suddenly cools and tightens (an emotional plot twist). It resolves in warmth and breathing room. The reader has been taken on an emotional journey through what is structurally a flat list of paragraphs. The richness is affective, not architectural.

---

## Synthesis: The Seven-Dimensional Richness Space

The spatial zoom model is one axis of a much larger space. Here are all seven, including the current model:

| # | Model | Dimension | Measures | Unit |
|---|-------|-----------|----------|------|
| 0 | Spatial Zoom (current) | Space/Structure | Fractal coherence across magnification levels | Scales (0-5) |
| 1 | Temporal Metabolism | Time | Deliberate design across encounter phases | Temporal layers (0-4) |
| 2 | Semantic Resonance | Meaning | CSS channels encoding the same semantic per transition | Average channels (1-5) |
| 3 | Narrative Arc | Sequence | Visual intensity tracking content importance | Correlation (0-1.0) |
| 4 | Materiality Gradient | Weight | Range from ethereal to monumental | Range score (1-10) |
| 5 | Cognitive Scaffolding | Understanding | Transitions between epistemic states | Scaffold types (0-5) |
| 6 | Systemic Gravity | Relationship | Inter-page connection density | Gravity score |
| 7 | Emotional Topology | Feeling | Distinct emotional registers along scroll | Registers (1-6) |

### Critical Observation: The Current System Already Uses Several of These

The existing design system is not ONLY doing spatial zoom. The RICHNESS-COMPARISON.md document already talks about:

- **Multi-channel encoding** (Model 2: Semantic Resonance -- "4-5 CSS channels say 'depth' simultaneously")
- **CRESCENDO arc** (Model 3: Narrative Arc -- spacing that builds and resolves)
- **Materiality via border-weight** (Model 4: Materiality Gradient -- 4px/3px/2px/1px as weight encoding)

But these are treated as TECHNIQUES within the spatial zoom model rather than as independent dimensions of richness. The spatial zoom model absorbs them: "at Section scale, multi-channel encoding happens." What the alternative models argue is that these are not subordinate to spatial zoom -- they are PEERS. A page could fail on spatial zoom and succeed brilliantly on semantic resonance. That success should be recognized, measured, and valued.

### The Question This Raises

Is richness ONE number (a scalar) or MANY numbers (a vector)?

**The spatial zoom model implies richness is a scalar:** count the scales, get a number, that's your richness.

**The seven-dimensional model implies richness is a vector:** [spatial: 3, temporal: 4, resonance: 3.5, narrative: 0.7, materiality: 8, scaffolding: 4, gravity: 15, emotional: 5]. Different pages can be rich in DIFFERENT dimensions. A getting-started tutorial should max cognitive scaffolding and temporal metabolism. An API reference should max systemic gravity and materiality gradient. A design philosophy essay should max narrative arc and emotional topology.

**The deepest implication:** Maybe the tier model (Floor/Middle/Ceiling/Flagship) shouldn't be "more of the same dimension" but "more dimensions active." Floor = 1-2 dimensions designed. Middle = 3-4 dimensions designed. Ceiling = 5-6 dimensions designed. Flagship = all 7 dimensions maximized and coordinated.

This would reframe the question from "how many spatial zoom levels show coherence?" to "how many dimensions of richness are being actively designed?" -- a fundamentally different (and arguably more useful) question.

### What This Means for the Current System

The current system's tier model is:
- Floor: 5 mechanisms, 0 scales
- Middle: 8-10 mechanisms, 2 scales
- Ceiling: 12-15 mechanisms, 4 scales
- Flagship: 16-18 mechanisms, 5 scales

An alternative tier model could be:
- Floor: 1-2 richness dimensions active (spatial + one other)
- Middle: 3-4 richness dimensions active (spatial + temporal + resonance + narrative)
- Ceiling: 5-6 richness dimensions active (all above + materiality + scaffolding or emotional)
- Flagship: All 7 dimensions active and coordinated

This doesn't REPLACE the mechanism count or scale count -- it REFRAMES what those counts are measuring. They're measuring depth on the spatial zoom axis. But there are six other axes where depth also creates richness.

---

## Appendix: Independence Tests

To verify these models are genuinely different from spatial zoom and from each other, each model should pass two tests:

**Test 1: Can this model produce richness that spatial zoom cannot detect?**
If yes, the model adds something the current framework misses.

| Model | Independent Richness Possible? | Example |
|-------|-------------------------------|---------|
| Temporal Metabolism | YES | A page with no structural nesting but perfect scan/read/return design |
| Semantic Resonance | YES | A flat page where every boundary uses 5 coordinated CSS channels |
| Narrative Arc | YES | A uniform-structure page with dramatic intensity variation along scroll |
| Materiality Gradient | YES | A non-hierarchical page with elements spanning whisper to monument |
| Cognitive Scaffolding | YES | A flat page that guides recognition-to-insight with visual cues |
| Systemic Gravity | YES | A plain page deeply woven into its documentation system |
| Emotional Topology | YES | A structurally monotone page with rich affective variation |

All seven pass Test 1: each can produce richness invisible to the spatial zoom model.

**Test 2: Are the alternative models independent from EACH OTHER?**

| Model Pair | Independent? | Why |
|------------|-------------|-----|
| Temporal + Narrative | Partially overlapping | Both involve sequence, but temporal is about ENCOUNTER PHASES and narrative is about DRAMATIC STRUCTURE. A page could have perfect temporal metabolism (great flash/scan/read/return) but flat narrative (no climax). |
| Resonance + Materiality | Partially overlapping | Resonance is about COORDINATION of channels; materiality is about RANGE of weight. A page could be high-resonance but narrow materiality (all channels coordinate but all at medium weight). |
| Scaffolding + Narrative | Partially overlapping | Both involve progression, but scaffolding is about UNDERSTANDING and narrative is about DRAMATIC TENSION. A page could scaffold brilliantly (clear recognition-to-insight path) without dramatic arc (no climax, just steady progression). |
| Gravity + all others | Fully independent | Gravity is the only model about INTER-page properties. All others are about a single page's properties. |
| Emotional + Narrative | Partially overlapping | Narrative arc often produces emotional variation, but the reverse isn't guaranteed. A page could traverse many emotional registers without following dramatic structure (mood shifts without narrative coherence). |

Most models have partial overlaps but meaningful independence. The strongest orthogonal pairs are: Spatial Zoom + Systemic Gravity (structure vs. relationships), Temporal Metabolism + Materiality Gradient (time vs. weight), and Cognitive Scaffolding + Emotional Topology (thinking vs. feeling).

---

## Conclusion: Is "More Scales" Even the Right Question?

The spatial zoom model answers: "Richness = coherent pattern at more magnification levels."

The seven-dimensional model answers: "Richness = deliberate design across more experiential dimensions."

These are different claims. The spatial zoom model is about structural self-similarity. The seven-dimensional model is about experiential completeness. The first asks: "How deep does the structure go?" The second asks: "How many ways has this page been designed to be encountered?"

Both are true. But if forced to choose ONE question that best captures what makes a page feel rich to a human reader (not a CSS auditor), the seven-dimensional model may be closer to the truth. Because readers don't zoom in. They scroll. They scan. They feel. They learn. They return. They connect. And each of those verbs lives in a dimension that spatial zoom cannot reach.
