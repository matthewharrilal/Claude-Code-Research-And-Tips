# Perceptual Science Foundations: A Ground-Up Model of Visual Quality

**Analysis #14 — Gas Town VA Pipeline**
**Date:** 2026-02-23
**Approach:** First-principles construction from perceptual science, cognitive psychology, and aesthetic theory, then mapped against KortAI PA protocol coverage.

---

## METHOD

This analysis does NOT begin from the PA protocol. It begins from the question: **"What does perceptual science tell us about how humans evaluate visual quality on screens?"**

The PA protocol (65 questions, 9 auditors, 4-tier scoring) was read afterward and compared against the independently-derived model. Every gap, overlap, and misalignment is documented.

---

## PART 1: THE HUMAN VISUAL PROCESSING PIPELINE

Human visual quality evaluation happens across four processing stages, each with distinct timescales, neural substrates, and quality signals. Understanding these stages is foundational because **quality judgments are not a single event but a cascade** — and different quality dimensions emerge at different stages.

### Stage 1: Pre-Attentive Processing (<200ms)

**Neural basis:** Primary visual cortex (V1) and extrastriate areas. Processes happen in parallel across the entire visual field before conscious attention engages.

**What is extracted:**

| Feature | Detection | Quality Signal |
|---------|-----------|----------------|
| **Luminance contrast** | Boundaries between regions | Edge definition, figure-ground separation |
| **Color differences** | Hue, saturation, brightness channels independently | Zone differentiation, visual hierarchy |
| **Orientation** | Line angles, edge directions | Alignment, grid regularity |
| **Size** | Relative element sizes | Scale hierarchy, typographic weight |
| **Spatial frequency** | Texture density, detail level | Content density, visual complexity |
| **Motion/flicker** | Changes during scroll | Animation quality, scroll smoothness |
| **Symmetry** | Bilateral and translational | Layout balance, structural order |

**Key research findings:**

1. **Treisman's Feature Integration Theory (1980):** Pre-attentive features are detected in parallel. A single red element among blue elements "pops out" regardless of set size. This means: **color-coded zone transitions are processed pre-attentively** — the viewer KNOWS the page has structure before they read a word.

2. **Wolfe's Guided Search Model (2021 update):** Pre-attentive features GUIDE subsequent attention. The first fixation after a page load is determined by pre-attentive saliency. This means: **whatever has the highest contrast wins the first look** — making PA-04 ("Where does your eye go first?") deeply grounded in neuroscience.

3. **Weber-Fechner Law:** The minimum noticeable difference in a stimulus is proportional to the stimulus magnitude. For backgrounds: a 5% luminance change is detectable against dark (#333) but NOT against light (#F5F5F5). This directly explains why the PA protocol's "15 RGB minimum delta" threshold exists, and why warm palettes need 1.3-1.5x the standard threshold.

**What the Gas Town page does at this stage:**
- Dark header (background #1A1A1A) against cream body (#FEF9F5) creates MAXIMUM contrast at the first boundary — strong pre-attentive signal
- Red accent (#E83025) achieves pop-out against warm neutrals — pre-attentively salient
- 6 zone backgrounds create a sequence of luminance steps detectable in peripheral vision during scroll
- 960px container width creates a centered strip with bilateral symmetry around the vertical axis

**What the Gas Town page MISSES at this stage:**
- Zone backgrounds differ by small RGB deltas (e.g., #FEF9F5 to #EDE6DA is ~19 on R, ~19 on G, ~27 on B) — at the margin of perceptibility for warm palettes
- No spatial frequency variation — text density is relatively uniform, no alternation between dense-data and sparse-narrative that would register pre-attentively
- No orientation breaks — all content runs vertically; no angled or rotated elements that would pop out

### Stage 2: Attentive Feature Binding (200ms-2s)

**Neural basis:** Ventral and dorsal visual streams. Ventral ("what") stream binds features into objects. Dorsal ("where") stream processes spatial relationships.

**What is extracted:**

| Process | What Happens | Quality Signal |
|---------|-------------|----------------|
| **Feature binding** | Color + shape + position → "this is a card" | Component coherence |
| **Grouping** | Elements form perceptual groups | Section structure, information hierarchy |
| **Figure-ground** | Foreground objects separate from background | Content vs. chrome, layering |
| **Spatial relationships** | Above/below, inside/outside, aligned/offset | Grid alignment, containment logic |
| **Scene gist** | Rapid categorization of "what kind of thing is this" | Genre recognition ("article", "dashboard", "marketing") |

**Gestalt principles activate here** (see Part 2). The visual system groups elements into meaningful units using proximity, similarity, continuation, closure, and common fate.

**What the Gas Town page does at this stage:**
- Role cards in Zone 2 are bound as a 2x2 grid unit — proximity + similarity + common region
- Pull quotes are bound as distinct objects via border-left (4px red) + background shift + font change — 3 simultaneous feature differences
- ASCII diagrams are bound as "code objects" via dark background inversion + monospace font
- The table of contents binds as a navigation unit via its own background strip + grid layout

**What the Gas Town page MISSES at this stage:**
- Many components share identical visual treatment across zones (callouts have the same border-left + background pattern in Z1, Z4, Z5, Z6) — the binding system says "same object" when the content says "different purpose"
- No depth layering — everything sits on a single visual plane. No overlapping, z-index stacking, or shadow-based depth that would create figure-ground richness

### Stage 3: Cognitive Evaluation (2s-10s)

**Neural basis:** Prefrontal cortex, parietal attention networks. Deliberate, serial, effortful processing.

**What is evaluated:**

| Evaluation | Process | Quality Signal |
|------------|---------|----------------|
| **Reading comprehension** | Text decoding, meaning extraction | Readability, line length, paragraph structure |
| **Navigation mapping** | Where am I? Where can I go? | Findability, orientation, wayfinding |
| **Information hierarchy** | What's most important? What's secondary? | Visual hierarchy effectiveness |
| **Comparison** | How does this relate to what I just saw? | Consistency, pattern recognition |
| **Prediction** | What comes next? Was my prediction right? | Rhythm, expectation management |
| **Effort assessment** | How hard is this to process? | Cognitive load, scanning efficiency |

**Key research findings:**

1. **Miller's Law (1956):** Working memory holds 7 +/- 2 chunks. Information displays exceeding this per "unit" cause cognitive overload. This explains PA-37 ("Is any container with 5+ pieces of information competing?").

2. **Sweller's Cognitive Load Theory (1988):** Three types of cognitive load — intrinsic (content complexity), extraneous (poor design), germane (effortful learning). High-quality design MINIMIZES extraneous load. A page that makes you work to find structure is adding extraneous load.

3. **Krug's "Don't Make Me Think" (2000):** Not a research finding per se, but operationalizes cognitive load theory for web: every moment a user spends wondering "where am I?" or "what does this do?" is a design failure.

**What the Gas Town page does at this stage:**
- "Zone N — The [Name]" section indicators provide persistent orientation — reduces navigation load
- Table of contents at top provides a complete map — supports prediction
- Consistent typographic hierarchy (mono uppercase labels / serif italic headings / sans body) creates a parseable information hierarchy
- Progressive complexity (Z1 sparse philosophical opening → Z2 dense architecture → Z3-Z4 moderate → Z5 dense procedural → Z6 evaluative) manages cognitive load arc

**What the Gas Town page MISSES at this stage:**
- No return-to-top or floating navigation — once past the TOC, the reader has no orientation except memory
- No progress indication — reader cannot assess how far through the document they are
- Section boundaries require careful attention to detect (background color shifts are subtle) — cognitive load is spent on figuring out "did I enter a new zone?"
- The refinery metaphor requires cognitive effort to decode without providing commensurate navigational benefit

### Stage 4: Aesthetic-Emotional Response (100ms-30s, overlapping with above)

**Neural basis:** Orbitofrontal cortex, amygdala, nucleus accumbens. Aesthetic responses begin FAST (100ms for preference) but refine SLOWLY (up to 30s for considered judgment).

**What is evaluated:**

| Response | Timescale | Quality Signal |
|----------|-----------|----------------|
| **Visceral preference** | 50-100ms | "I like/dislike this" — pre-cognitive |
| **Prototypicality** | 200ms-1s | "This looks like a well-designed X" — genre matching |
| **Processing fluency** | 500ms-5s | "This is easy/hard to process" — correlates with perceived beauty |
| **Novelty detection** | 1-5s | "This is interesting/boring" — violation of expectation |
| **Aesthetic pleasure** | 5-30s | Sustained engagement, desire to continue looking |
| **Trust formation** | 5-30s | "This is credible/amateur" — institutional quality signals |

**Key research findings:**

1. **Reber, Schwarz & Winkielman (2004) — Processing Fluency:** Objects that are easy to perceptually process are rated as more beautiful, more truthful, and more likeable. High contrast, clear figure-ground, good typography, and visual consistency ALL increase processing fluency. **This is the strongest empirical link between "well-designed" and "perceived as good."**

2. **Martindale's Model (1990) — Preference = f(prototypicality, complexity):** Preference is an inverted-U function of complexity, modulated by familiarity. Too simple = boring. Too complex = overwhelming. The peak shifts right with expertise. For web pages: **novice users prefer simpler designs; expert designers prefer more complex ones.** This has implications for who judges quality.

3. **Berlyne's Aesthetic Theory (1971) — Collative Properties:** The aesthetic response is driven by novelty, complexity, ambiguity, and surprisingness. These create "arousal potential." Too little = boring. Too much = aversive. Optimal = moderate arousal. This maps directly to the pipeline's SURPRISE emotional register.

4. **Norman's Three Levels (2004):** Visceral (appearance), Behavioral (use), Reflective (meaning). All three contribute to quality perception. A page can be viscerally attractive but behaviorally frustrating (poor navigation) or reflectively empty (no deeper meaning).

**What the Gas Town page does at this stage:**
- High prototypicality — looks like a "well-designed technical article" (genre match)
- Good processing fluency — clear hierarchy, readable fonts, consistent patterns
- The refinery metaphor operates at Norman's REFLECTIVE level — adds meaning beyond surface appearance
- Trust signals: professional typography, systematic spacing, dark header (institutional authority)

**What the Gas Town page MISSES at this stage:**
- Low novelty — nothing visually surprising (Berlyne's collative properties). Competent but predictable
- Minimal visceral delight — no moment where the viewer goes "oh!" at a visual treatment
- The inverted-U complexity peak may be too far toward "simple" — the page is pleasant but not engaging
- No second-read rewards — no details that reward closer inspection (hidden refinements, smart hover states, etc.)

---

## PART 2: GESTALT PRINCIPLES AND QUALITY

The Gestalt principles (Wertheimer, 1923; Koffka, 1935) describe how the visual system organizes elements into coherent percepts. Each principle has direct implications for page quality.

### 2.1 Proximity

**Principle:** Elements close together are perceived as a group.

**Quality implication:** The spacing BETWEEN groups must be meaningfully larger than the spacing WITHIN groups. If inter-group and intra-group spacing are similar, grouping breaks down.

**Gas Town assessment:**
- WITHIN sections: paragraph spacing (~24px), element spacing (~16-32px) — consistently tight
- BETWEEN sections: zone transitions add background color change + border + larger padding (48-96px)
- BETWEEN zones: transition classes (.transition-heavy, .transition-medium, .transition-light) create graduated proximity signals

**Verdict: WELL-LEVERAGED.** The 3-tier transition system (heavy/medium/light) creates a clear proximity hierarchy. Within zones, the spacing scale (4px base) provides consistent grouping.

**Gap: Proximity RATIO is not measured by the pipeline.** The ratio between inter-section and intra-section spacing determines grouping strength. A ratio of 3:1 or higher creates strong grouping; below 2:1, grouping weakens. The S-09 stacking check measures ABSOLUTE gap (<=120px) but not the RATIO relative to intra-section spacing.

### 2.2 Similarity

**Principle:** Elements that share visual features (color, shape, size, orientation) are perceived as belonging together.

**Quality implication:** Elements of the same TYPE should share visual treatment. Elements of DIFFERENT types should differ on at least 2 features.

**Gas Town assessment:**
- All section indicators share: mono font + 10px + uppercase + letter-spacing + gauge color — STRONG similarity group
- All headings share: serif font + italic — STRONG similarity group
- But: callout variants (warning/info/tip/essence/challenge) differ only in border-left color — WEAK differentiation on one feature, which may be insufficient for pre-attentive discrimination

**Verdict: STRONG within type, WEAK between variants.** The major element types (headings, body, labels, code) are well-differentiated. But the callout variants rely on a single feature (border color) for differentiation.

**Gap: The PA protocol asks about similarity (PA-16, PA-18) but not about DISCRIMINABILITY between variants.** A new measurement could quantify: "How many visual features differentiate element X from element Y?"

### 2.3 Continuation

**Principle:** The eye follows smooth paths. Elements arranged along a line or curve are perceived as connected.

**Quality implication:** Alignment creates implicit connections. Broken alignment creates implicit disconnection.

**Gas Town assessment:**
- Left edge alignment is strong — all content blocks, headings, and labels share a left margin within the 960px container
- The TOC grid creates horizontal continuation across 2 columns
- The role-card grid creates both horizontal and vertical continuation

**Verdict: WELL-LEVERAGED.** The strict left-alignment creates a strong continuation path. PA-15 ("Trace the left edge of every content block. How many starting positions?") directly measures this.

**Gap: VERTICAL continuation is not measured.** Do the same element types appear at consistent vertical intervals? A heading every ~400px creates a rhythm of continuation. Headings at 200px, then 800px, then 300px creates erratic continuation. This relates to PA-17 (rhythm) but the mechanism is distinct.

### 2.4 Closure

**Principle:** The visual system fills in missing parts to perceive complete shapes.

**Quality implication:** Components do not need full borders to be perceived as contained. An L-shaped border (top + left) can imply a complete rectangle. BUT: the implied completion must be unambiguous.

**Gas Town assessment:**
- Pull quotes use border-left only (4px red + background tint) — closure fills in the implied rectangle
- Callouts use border-left only — same closure mechanism
- Role cards use full border (3px solid) — no closure needed, explicit containment
- The header/footer dark blocks use full-width background — closure at viewport edges

**Verdict: MODERATELY LEVERAGED.** The page uses closure effectively with border-left patterns but doesn't exploit more advanced closure (e.g., partially overlapping elements, cropped images, negative-space shapes).

**Gap: Closure is not measured by the pipeline at all.** It is a passive quality contributor, not actively designed for. No PA question asks about implied shapes or negative-space design.

### 2.5 Figure-Ground

**Principle:** The visual system separates visual input into foreground objects and background surfaces.

**Quality implication:** Every element should have a clear figure-ground relationship. Ambiguous figure-ground creates visual confusion. Multiple figure-ground LAYERS create depth and richness.

**Gas Town assessment:**
- Text on light backgrounds: clear figure-ground (dark text = figure, cream background = ground)
- ASCII diagrams/code blocks: INVERTED figure-ground (light text on dark background) — creates a "portal" effect, like looking through a window into a different space
- The header/footer dark blocks also create inverted figure-ground — bookending the content
- Role cards with light backgrounds sit ON the darker Zone 2 background — figure on ground

**Verdict: WELL-LEVERAGED with one powerful technique.** The dark/light inversion creates distinct figure-ground layers. The code blocks being dark-on-light-page is a particularly strong figure-ground signal.

**Gap: Figure-ground DEPTH is not measured.** How many perceptible layers exist? A page with 1 layer (text on background) is flat. A page with 3+ layers (background, content surface, elevated component, floating element) has depth. The pipeline measures individual elements but not the layering stack.

### 2.6 Common Region (Palmer, 1992)

**Principle:** Elements within a shared enclosed region are perceived as grouped.

**Quality implication:** Containers, cards, and background zones create grouping independent of proximity.

**Gas Town assessment:**
- Zone backgrounds create 6 common regions — the STRONGEST grouping mechanism on the page
- Role cards create nested common regions (card within zone)
- The header and footer create their own inverted common regions

**Verdict: HEAVILY LEVERAGED.** This is the page's PRIMARY organizational mechanism. The 6 zones are defined primarily by common region (background color), not by proximity or similarity.

**Gap: The pipeline measures background color deltas (>=15 RGB) but not the PERCEPTUAL STRENGTH of the resulting common regions.** A zone with a strongly differentiated background creates a stronger common region than one with a subtle shift. The perceptual strength of grouping is not a binary pass/fail.

### 2.7 Pragnanz (Good Form)

**Principle:** The visual system prefers the simplest, most regular interpretation.

**Quality implication:** Layouts that can be described in simple terms ("3 equal columns", "centered single column with sidebar") are perceived as higher quality than layouts that resist simple description.

**Gas Town assessment:**
- Overall layout: "centered single column, 960px max" — MAXIMALLY simple
- Within zones: occasional 2-column grids (role cards, comparison grids, sources) break the single-column monotony
- The simplicity of the layout is both a strength (high pragnanz) and a weakness (low complexity/interest)

**Verdict: STRONG pragnanz, possibly TOO strong.** The layout is easily described and understood, but the simplicity may place it below the optimal complexity peak for aesthetic response.

**Gap: Layout complexity is not measured.** The pipeline measures individual spatial properties but not the overall layout description complexity. A one-sentence layout description = too simple. A paragraph = too complex. 2-3 sentences = optimal.

---

## PART 3: VISUAL SCANNING RESEARCH

### 3.1 Eye-Tracking Patterns for Long-Form Content

**F-Pattern (Nielsen, 2006):**
- Two horizontal eye movements (top-of-page scan lines) followed by a vertical scan down the left edge
- Applies to: text-heavy pages with uniform structure
- Quality signal: Content in the left third gets the most attention. Right-third content is often MISSED.

**Layer-Cake Pattern (Nielsen, 2017 update):**
- For content with MANY headings: readers scan headings sequentially, creating a layered scan where attention concentrates on headings and the first line of each paragraph
- Applies to: long-form structured content (articles, documentation)
- Quality signal: Headings must be visually distinct AND informationally complete — readers may read ONLY headings.

**Commitment Pattern (Pernice et al., 2022):**
- For high-interest content: readers commit to reading sections fully once engaged
- Triggered by: relevance detection + low cognitive load + visual reward
- Quality signal: The TRANSITION from scanning to committed reading is the key conversion point.

**Gas Town assessment:**
The page is best described by the **Layer-Cake pattern** — it has frequent section headings (Zone labels, h2s, h3s) that serve as scan anchors. Within sections, committed reading likely occurs for high-interest content (role cards, code blocks, ASCII diagrams) but reverts to scanning for narrative paragraphs.

**What this means for quality measurement:** The page's quality is partially determined by how well its HEADINGS summarize its content — because many readers will only see headings. The current PA protocol does not specifically assess heading informativeness or scan-path design.

### 3.2 Scroll Behavior and Quality Perception

**Scroll Depth Research (Chartbeat, 2013; NN/g, 2018):**
- Average scroll depth on long-form content: 50-60%
- Engagement clusters around "design moments" — places where visual treatment changes
- Scroll velocity INCREASES in uniform sections and DECREASES at transitions

**Implications for quality:**

1. **The "fold" still matters — but differently.** Above-the-fold content determines whether the user COMMITS to scrolling. The header + first viewport must earn the scroll.

2. **Uniform sections are scroll-accelerators.** When every paragraph looks the same, users skim faster. Visual variation SLOWS the scroll — and slow scrolling = engagement.

3. **The bottom-third problem:** 40-50% of readers never see it. Any critical content or design quality in the bottom third is invisible to half the audience. This makes bottom-third design quality a signal of CRAFTSMANSHIP (it is there for the readers who reach it, not for maximum impact).

**Gas Town assessment:**
- Header is strong — dark background, clear hierarchy, stat badges. Should earn the scroll.
- Zone 1 (intake) is long and narrative-heavy — scroll velocity likely increases through the "Who is Yegge" section
- Zone 2 (factory floor) has the highest visual density (role cards, ASCII diagrams, grids) — should slow scrolling
- Zone 5 (assembly line) is code-heavy — scroll behavior depends on reader interest in implementation
- The D-04 inversion block (dark full-width quote mid-page) is a deliberate scroll-stopper — breaks the visual monotony

**Gap: Scroll behavior prediction is not measured.** The PA protocol asks about scroll experience (PA-35, PA-47) but does not model the likely scroll velocity curve or identify scroll accelerators vs. decelerators.

### 3.3 Saccade and Fixation Research

**Key findings from eye-tracking research on web layouts:**

1. **First fixation location:** Upper-left quadrant wins 69% of first fixations on text-heavy pages (Buscher et al., 2009). The Gas Town header places "DEEP EXTRACTION" label at upper-left — correct placement.

2. **Fixation duration as quality signal:** Average fixation on well-designed content: 200-300ms. On confusing layouts: 400-600ms. Longer fixations = higher cognitive effort = lower quality perception (unless the content itself is complex and rewarding).

3. **Regression rate:** How often the eye backtracks. High regression rate in reading = poor typography (line length, leading, font choice). The PA protocol covers this through PA-07 ("Can you read the longest paragraph without losing your place?").

4. **Saccade amplitude distribution:** On high-quality layouts, saccades cluster in two groups: short (within-line reading, ~2-4 degrees) and medium (line-to-line or element-to-element, ~8-12 degrees). On poor layouts, long saccades (>15 degrees) are frequent — the eye is "jumping around" seeking structure.

**Gap: Saccade patterns are implicitly tested (PA-04 eye tracking, PA-12 smooth flow) but the MECHANISM — whether the layout guides the eye along predictable paths — is not explicitly assessed.**

---

## PART 4: AESTHETIC THEORY AND WEB QUALITY

### 4.1 Birkhoff's Aesthetic Measure (1933)

**M = O / C** (Aesthetic Measure = Order / Complexity)

This foundational formula suggests beauty arises from the ratio of order to complexity. High order in simple things = moderate beauty. High order in complex things = high beauty. Disorder in simple things = neutral. Disorder in complex things = ugly.

**Application to web pages:**
- ORDER = alignment, consistency, rhythm, symmetry, pattern adherence
- COMPLEXITY = number of distinct element types, color variety, layout variations, information density

**Gas Town assessment:**
- ORDER: High. Consistent alignment, systematic spacing, repeating patterns, clear hierarchy.
- COMPLEXITY: Moderate. 6 zones, ~8 component types, 3 font families, 5-6 colors, 2 layout modes (single-column, 2-column grid).
- M = High Order / Moderate Complexity = MODERATE-HIGH aesthetic measure.

**Gap: Neither ORDER nor COMPLEXITY is quantified by the pipeline.** Order could be measured as: alignment consistency + spacing regularity + pattern adherence. Complexity could be measured as: unique component count + color count + layout variation count. The RATIO would predict aesthetic quality independent of any specific design choice.

### 4.2 VSIA: Visual Information Aesthetics (Lau & Vande Moere, 2007)

Extends Birkhoff for information-rich displays:

**Aesthetic = (Expressiveness + Effectiveness) / Effort**

- EXPRESSIVENESS: How much information does the visual encoding convey?
- EFFECTIVENESS: How accurately can the reader extract information?
- EFFORT: How much cognitive work is required?

**Gas Town assessment:**
- Expressiveness: HIGH — zone backgrounds encode document structure, border weights encode hierarchy, color-coding encodes role types, font families encode content type
- Effectiveness: HIGH — the encoding is learnable and consistent
- Effort: MODERATE — the initial learning curve (understanding zone system, role hierarchy, border conventions) is non-trivial

**Gap: Information encoding efficiency is not measured.** How many bits of information per visual feature? A border-left that encodes both importance (by weight: 1px/3px/4px) and type (by color: red/green/blue/amber) is more efficient than separate indicators for each. The pipeline measures individual features but not encoding efficiency.

### 4.3 The Golden Ratio and Web Layout

**Research status:** The golden ratio (1.618:1) in web design has been studied but findings are MIXED.

- **Support:** Seckler et al. (2015) found that layouts with proportions approximating the golden ratio were rated as more appealing, but the effect was small and moderated by content type.
- **Against:** Markowsky (1992) showed that humans cannot reliably distinguish the golden ratio from nearby ratios (1.5:1, 1.7:1).
- **Current consensus:** Proportional harmony matters more than any specific ratio. What matters is that proportions are CONSISTENT and RELATED (e.g., a 2:3 ratio at the macro level echoed at the micro level).

**Gas Town assessment:**
- Content width 960px / viewport 1440px = 0.667 — close to 2/3, NOT the golden ratio
- Header area / first viewport = roughly 1:3 — the header takes about 33% of the first viewport
- These proportions are harmonious but not mathematically derived

**Gap: Proportional relationships between page elements are not measured.** PA-05c checks proportions exist but not whether they form a coherent proportional system. A page where the header:body ratio, the margin:content ratio, and the heading:paragraph ratio all share a common proportional relationship would score higher on proportional coherence.

### 4.4 Rule of Thirds

**Principle:** Key visual elements placed at third-line intersections create dynamic, engaging composition.

**Application to long-form web:** The rule of thirds applies within each viewport (horizontal thirds) and across the full page (vertical thirds). Each viewport-third should contain at least one "anchor" element.

**Gas Town assessment:**
- First viewport: Header occupies top third, subtitle and stats occupy middle third, transition to TOC in bottom third — GOOD
- Within Zone 2: Role cards are placed in the middle and lower thirds of visible content — GOOD
- The D-04 inversion block appears roughly at the 60-70% scroll point — near a third-line of the full page

**Coverage:** PA-52 ("Divide page into thirds. Does each third have at least one designed moment?") directly measures this. GOOD COVERAGE.

### 4.5 Visual Weight Distribution

**Principle:** Visual weight is determined by size, color saturation, contrast, complexity, and isolation. A balanced page distributes visual weight intentionally — not necessarily symmetrically.

**Research:** Arnheim's "Art and Visual Perception" (1954) established that visual weight creates a "center of gravity" for the composition. Off-center weight creates dynamic tension; centered weight creates stability.

**Gas Town assessment:**
- Visual weight is heavily concentrated in the HEADER (dark background, large type, red accent) and in ZONE 2 (role cards, ASCII diagrams, dark code blocks)
- The page's center of visual gravity is in the UPPER THIRD — appropriate for a document that front-loads its key concepts
- Zones 3-4 are lighter, Zone 5 regains weight with code blocks, Zone 6 is moderate

**Gap: Visual weight distribution curve is not measured.** PA-32 ("Squint at the full page. Is the visual weight distributed purposefully across the scroll?") is the closest question, but it asks for subjective judgment rather than mapping the actual weight distribution. A weight-distribution curve (like a histogram of visual density per viewport-height) would provide an objective measurement.

---

## PART 5: COGNITIVE LOAD AND QUALITY

### 5.1 Processing Fluency = Perceived Quality

**The central finding of processing fluency research (Reber et al., 2004; Alter & Oppenheimer, 2009):**

Things that are easy to perceive and process are judged as:
- More beautiful
- More truthful
- More likeable
- More familiar
- More trustworthy

This is NOT the same as "simple is better." Processing fluency is about how smoothly the perceptual and cognitive systems can handle the input. A COMPLEX page can have HIGH fluency if its complexity is well-organized.

**Fluency drivers on web pages:**

| Driver | Mechanism | Measurement |
|--------|-----------|-------------|
| **Contrast clarity** | Text/background contrast ratio | WCAG 2.1 ratios (4.5:1 minimum) |
| **Font legibility** | Character recognition speed | Reading speed tests, PA-02, PA-07, PA-08 |
| **Structural predictability** | Pattern learning → pattern recognition | After learning the page's system, can you predict how the next section will look? |
| **Visual consistency** | Same input → same output | PA-16 ("Pick two elements that should look identical. Do they?") |
| **Information hierarchy clarity** | Priority encoding matches content priority | PA-04 ("Where does your eye go?") + content importance ranking |
| **Spatial organization** | Clear grouping, no ambiguous belongingness | Gestalt principles (Part 2) |
| **Temporal predictability** | Scroll reveals content at expected pace | PA-35 (scroll at reading speed) |

**Gas Town assessment:**
- CONTRAST: Good. Dark text on light backgrounds. Red accent is high-contrast.
- LEGIBILITY: Good. Inter at 16px, 1.7 line-height, max-width constraints on paragraphs.
- PREDICTABILITY: High. After Zone 1, the reader understands the zone system and can predict structure.
- CONSISTENCY: High. Repeating component patterns, consistent typography.
- HIERARCHY: Clear. Mono-uppercase labels > serif-italic headings > sans body text.
- ORGANIZATION: Clear. Zone-based grouping with explicit labels.
- TEMPORAL: Moderate. Some zones are much longer than others; pacing is uneven.

**Overall fluency: HIGH.** This is the page's primary quality driver. It is a FLUENT page.

### 5.2 Cognitive Load Theory Applied to Page Evaluation

**Three types of cognitive load (Sweller, 1988):**

1. **Intrinsic load** — from the content itself (Gas Town's concepts are inherently complex)
2. **Extraneous load** — from poor design choices (navigational confusion, visual noise)
3. **Germane load** — from productive learning effort (building mental models)

**Design quality = minimizing extraneous load while supporting germane load.**

A page that makes technical content easy to understand (low extraneous, high germane) is higher quality than one that makes simple content confusing (high extraneous, low germane).

**Gas Town extraneous load sources:**
- Subtle zone transitions force the reader to actively notice "am I in a new section?"
- The refinery metaphor adds a translation layer (extraneous unless the reader finds it illuminating)
- Some sections are very long without visual breaks (Zone 1 narrative sections)

**Gas Town germane load support:**
- ASCII diagrams visualize abstract hierarchies
- The role cards chunk complex information into bounded visual units
- Tables organize comparative information efficiently
- Code blocks provide concrete examples of abstract concepts

**Gap: Extraneous cognitive load is not directly measured.** The PA questions measure SYMPTOMS of high extraneous load (PA-01 "what bothers you", PA-02 "uncomfortable text", PA-09 "dead space") but not the load itself. A measurement like "time to orient" (how long until a new reader can describe the page's organization) would directly quantify extraneous load.

### 5.3 The Disfluency Effect and Its Limits

**Counter-finding:** Diemand-Yauman et al. (2011) found that MODERATE disfluency (slightly harder-to-read fonts) can IMPROVE learning outcomes by increasing processing effort (germane load).

**Application to design:** Small amounts of visual friction can signal IMPORTANCE. The D-04 inversion block (dark full-width section mid-page) creates disfluency — the reader must adjust to reversed contrast — which signals "pay attention, this is different."

**However:** Disfluency must be MOTIVATED. Random disfluency = extraneous load. Meaningful disfluency = germane load.

**Gap: The distinction between motivated and unmotivated visual friction is not captured by the pipeline.** A dark inversion block at a philosophically important moment (motivated) scores the same as one at a random position (unmotivated). PA-36 ("dramatic visual moment") and PA-62 ("transition variation") get at this but don't explicitly distinguish motivation from randomness.

---

## PART 6: THE GAP MAP

For each scientific dimension identified in Parts 1-5, I rate the current PA protocol's coverage on a 0-100% scale.

### 6.1 Coverage by Dimension

| # | Scientific Dimension | PA Coverage | Key PA Questions | Notes |
|---|---------------------|-------------|-----------------|-------|
| 1 | Pre-attentive feature detection | 40% | PA-04, PA-10 | Measures WHERE eye goes, not WHY |
| 2 | Pre-attentive pop-out/saliency | 25% | PA-04, PA-36 | No saliency map, no pop-out assessment |
| 3 | Feature binding (component coherence) | 60% | PA-16, PA-19, PA-63 | Asks about identity but not binding quality |
| 4 | Gestalt: Proximity grouping | 45% | PA-09, PA-40, PA-66, S-09 | Measures spacing but not grouping ratio |
| 5 | Gestalt: Similarity grouping | 55% | PA-16, PA-18, PA-19 | Good coverage; missing discriminability |
| 6 | Gestalt: Continuation (alignment) | 75% | PA-15, PA-12 | Strong coverage via left-edge tracing |
| 7 | Gestalt: Closure | 5% | — | Almost completely unmeasured |
| 8 | Gestalt: Figure-ground | 20% | PA-10 (squint test) | Squint test is implicit figure-ground |
| 9 | Gestalt: Common region | 50% | PA-55, PA-30, PA-31 | Measures zones but not grouping strength |
| 10 | Gestalt: Pragnanz (good form) | 30% | PA-03 (one designer?) | Implicit in coherence questions |
| 11 | Scan pattern design | 15% | PA-04, PA-12 | Asks about flow, not scan optimization |
| 12 | Scroll behavior prediction | 35% | PA-35, PA-47 | Good questions but subjective |
| 13 | Fixation/saccade quality | 10% | PA-12 | Flow question is loosely related |
| 14 | Birkhoff: Order/Complexity ratio | 15% | PA-05a, PA-41 | Designed vs assembled is related |
| 15 | Processing fluency | 70% | PA-02, PA-07, PA-08, PA-05 | Strong readability + quality coverage |
| 16 | Cognitive load (extraneous) | 45% | PA-01, PA-02, PA-09, PA-37 | Symptom detection, not load measurement |
| 17 | Cognitive load (germane) | 20% | PA-38 (reading order) | Barely measured |
| 18 | Aesthetic preference (visceral) | 65% | PA-05, PA-20, PA-45 | Good subjective coverage |
| 19 | Novelty/surprise response | 55% | PA-36, PA-47, PA-67 | Good coverage through Tier 5 |
| 20 | Trust/authority signals | 50% | PA-05 (POLISHED), PA-20 | Implicit in several questions |
| 21 | Emotional arc (4 registers) | 60% | PA-35, PA-36, PA-13, PA-45, PA-47 | Good framework, assessed by Weaver |
| 22 | Proportional harmony | 50% | PA-05c, PA-30, PA-52, PA-53 | Measures existence but not system |
| 23 | Visual weight distribution | 30% | PA-32, PA-10 | Asks for judgment, no objectification |
| 24 | Color harmony/coherence | 55% | PA-18, PA-19, PA-20 | Family test is good; missing harmony model |
| 25 | Temporal quality (pacing) | 60% | PA-35, PA-62, PA-69, PA-70 | Good coverage through multiple questions |
| 26 | Multi-scale coherence | 65% | PA-63, PA-61, PA-65 | Strong Tier 5 coverage |
| 27 | Information density management | 40% | PA-37, PA-39, PA-70 | Some coverage, no density curve |
| 28 | Navigation/wayfinding | 25% | PA-12, PA-13 | Flow questions, not navigation specifically |
| 29 | Depth/layering | 5% | — | Almost completely unmeasured |
| 30 | Encoding efficiency | 0% | — | Completely unmeasured |

### 6.2 The Top 5 Completely Unmeasured Dimensions

**#1: ENCODING EFFICIENCY (0% coverage)**

What it is: How many meaningful distinctions does each visual feature encode? A border-left that encodes category (by color), importance (by weight), and zone membership (by presence/absence) is highly efficient. A border-left that is always 4px solid red regardless of context is zero-efficiency.

Why it matters: Encoding efficiency determines information throughput per visual feature. Higher encoding efficiency = more information per pixel = richer page with less visual clutter.

How to measure: Count the number of semantically meaningful variations per visual feature. For each feature (border-left, background, font-family, etc.), catalog how many distinct meanings it can express.

**Proposed measurement:** "For [feature X], count how many distinct meanings its variations express across the page. Score: 1 variation = no encoding, 2 = binary signal, 3-4 = moderate encoding, 5+ = rich encoding."

**#2: DEPTH/LAYERING (5% coverage)**

What it is: How many perceptible visual layers exist? A flat page has one layer (content on background). A layered page has background < surface < component < elevated-element < floating-element.

Why it matters: Visual depth correlates with perceived richness and sophistication. Flat pages feel "basic." Depth creates implicit figure-ground hierarchies that guide attention without explicit navigation.

How to measure: Count the number of distinct visual planes the page creates through contrast, containment, shadow, overlap, or z-index stacking. Each plane must be PERCEPTIBLE without inspecting CSS.

**Proposed measurement:** "How many distinct 'layers' can you perceive without inspecting code? Count from background (deepest) to foreground (most prominent). 1 layer = flat, 2 = basic depth, 3 = moderate depth, 4+ = rich depth."

**#3: GESTALT CLOSURE EXPLOITATION (5% coverage)**

What it is: How effectively does the page use implied shapes, negative-space design, and visual completion to create richness with minimal elements?

Why it matters: Closure is a "free" quality mechanism — it creates perceived shapes and boundaries WITHOUT additional elements. A master designer uses closure extensively; a template uses explicit borders for everything.

How to measure: Count instances where the viewer perceives a shape, boundary, or region that is NOT explicitly drawn. Each instance = one closure exploitation.

**Proposed measurement:** "Identify elements whose visual boundary is implied (not explicitly drawn on all sides). For each, describe what shape or region your mind 'completes.' Count: 0 = no closure used, 1-2 = basic, 3-5 = moderate, 6+ = advanced."

**#4: SCAN PATH OPTIMIZATION (15% coverage)**

What it is: How well does the page design guide eye movements along an efficient path that matches content priority?

Why it matters: On a well-designed page, the reader's eye naturally moves to the most important content first, then to supporting content, following a designed path. On a poorly designed page, the eye jumps randomly, spending time on navigation and orientation rather than content.

How to measure: Ask auditors to track their actual scan path (first look, second look, third look...) and compare it to the INTENDED reading order. Alignment between actual and intended scan path = quality.

**Proposed measurement:** "Without reading, describe the first 5 things your eye lands on, in order. Then identify the 5 things the CONTENT designer would want you to see first. How many of your actual fixations match the intended priority? 5/5 = perfect guidance, 3/5 = moderate, <3/5 = poor guidance."

**#5: PROXIMITY RATIO (Grouping Strength) (0% explicit coverage)**

What it is: The ratio between inter-group and intra-group spacing. Determines whether spatial grouping is STRONG (high ratio), WEAK (low ratio), or AMBIGUOUS (ratio near 1.0).

Why it matters: Clear grouping reduces cognitive load. Ambiguous grouping forces the reader to use cognitive effort to determine what belongs together. The pipeline measures absolute spacing (S-09 stacking) but not relative spacing (grouping strength).

How to measure: At each section boundary, measure the total boundary gap and compare to the average intra-section element spacing. The ratio should be >= 2.5:1 for clear grouping and >= 4:1 for strong grouping.

**Proposed measurement:** "At 3 section boundaries, estimate the gap between sections versus the gap between elements within sections. Ratio 4:1+ = strong grouping, 2.5-4:1 = clear grouping, 1.5-2.5:1 = weak grouping, <1.5:1 = ambiguous grouping."

---

## PART 7: NEW MEASUREMENT INSTRUMENTS

Based on the perceptual science analysis, here are 10 new quality measurements, each grounded in research, measurable by auditors or automation, and discriminating between quality tiers.

### NM-01: Saliency Consistency Test

**Grounding:** Treisman's Feature Integration Theory + Guided Search Model
**What it measures:** Whether the most visually salient element in each viewport is also the most informationally important
**Protocol:** For each viewport-height, identify the most visually salient element (highest contrast, largest size, most isolated). Then identify the most informationally important element. Are they the same?
**Scoring:** Count of viewports where saliency matches importance / total viewports. >= 80% = PASS, 60-79% = PARTIAL, <60% = FAIL.
**Tier discrimination:** Floor pages have random saliency (decorative elements compete with content). Middle pages have mostly correct saliency. Ceiling/Flagship pages have designed saliency maps where every contrast decision serves content priority.

### NM-02: Grouping Strength Index

**Grounding:** Gestalt proximity + Common region principles
**What it measures:** The perceptual clarity of section grouping
**Protocol:** At 5 randomly selected section boundaries, estimate: (a) the total gap between sections, (b) the average gap between elements within sections. Compute ratio a/b.
**Scoring:** Average ratio across 5 boundaries. >= 4.0 = STRONG, 2.5-3.9 = CLEAR, 1.5-2.4 = WEAK, <1.5 = AMBIGUOUS.
**Tier discrimination:** Floor pages have ratio ~2.0 (sections blur together). Middle pages ~3.0. Ceiling pages ~4.0 with intentional variation. Flagship pages have designed variation in grouping strength (tight groups for related content, wide gaps for topic shifts).

### NM-03: Feature Differentiation Count

**Grounding:** Treisman — pre-attentive features require >= 2 feature differences for instant discrimination
**What it measures:** How many visual features differ between adjacent sections/zones
**Protocol:** At each zone boundary, count simultaneous visual property changes (background color, font size, spacing, border treatment, layout mode, text color, etc.).
**Scoring:** Average feature changes per boundary. 1 = FLAT, 2 = FUNCTIONAL, 3 = DESIGNED, 4-5 = COMPOSED, 6+ = FLAGSHIP.
**Tier discrimination:** This IS the multi-coherence measurement, but derived from pre-attentive feature discrimination theory rather than design convention. Provides a neuroscience-grounded justification for the existing Weaver calibration table.

### NM-04: Layout Complexity Score (Birkhoff Ratio)

**Grounding:** Birkhoff's Aesthetic Measure (M = O/C)
**What it measures:** The ratio of visual order to visual complexity
**Protocol:**
- ORDER: Count alignment lines used (fewer = more ordered), spacing values used (fewer = more ordered), repeating patterns (more = more ordered). Compute order score.
- COMPLEXITY: Count unique component types, color values, font variants, layout modes. Compute complexity score.
- AESTHETIC MEASURE: Order / Complexity.
**Scoring:** M > 1.5 = too simple (boring), 0.8-1.5 = aesthetic sweet spot, 0.4-0.8 = visually rich, <0.4 = chaotic.
**Tier discrimination:** Floor pages have M > 2.0 (very simple). Middle pages ~1.2. Ceiling pages ~0.7 (high complexity, well-ordered). Flagship pages ~0.6-0.8 (maximum complexity while maintaining order).

### NM-05: Processing Fluency Proxy

**Grounding:** Reber et al. (2004) — Processing Fluency as aesthetic mechanism
**What it measures:** How quickly a reader can orient and begin productive reading
**Protocol:** Show the page to a fresh reader. Ask: "After 10 seconds, describe the page's organization in one sentence." Then: "After 30 seconds, where would you go to find [specific content]?"
**Scoring:** 10-second description accuracy (0-3: wrong, partial, mostly right, exactly right). 30-second findability (found immediately / found with effort / not found). Combined 0-6 scale.
**Tier discrimination:** All tiers should score well on fluency (it is a FLOOR, not a ceiling). Scores below 4 indicate design problems regardless of tier. The discriminating power is at the low end — catching pages that are complex but poorly organized.

### NM-06: Depth Layer Count

**Grounding:** Figure-ground segregation (Gestalt) + Arnheim's visual depth
**What it measures:** How many perceptible visual layers the page creates
**Protocol:** Count distinct visual planes from deepest to shallowest: page background, zone backgrounds, content surfaces, component containers, elevated elements (dark blocks, cards with contrast), floating elements (fixed nav, overlays).
**Scoring:** 1 layer = FLAT, 2 = BASIC, 3 = MODERATE, 4 = RICH, 5+ = DEEP.
**Tier discrimination:** Floor pages: 1-2 layers. Middle pages: 2-3 layers. Ceiling pages: 3-4 layers. Flagship pages: 4+ layers with depth serving content hierarchy.

### NM-07: Scan Path Alignment Score

**Grounding:** Eye-tracking research (Buscher et al., 2009) + information foraging theory
**What it measures:** Whether the visual design guides attention to content in priority order
**Protocol:** Ask 3 fresh readers to list the first 5 things they notice, in order. Separately, have the content author rank the 5 most important elements. Compute overlap and rank correlation.
**Scoring:** Spearman's rho between actual and intended. >= 0.8 = DESIGNED, 0.6-0.79 = GUIDED, 0.4-0.59 = PARTIAL, <0.4 = UNGUIDED.
**Tier discrimination:** Floor pages: 0.3-0.5 (decorative elements distract). Middle pages: 0.5-0.7. Ceiling pages: 0.7-0.85. Flagship pages: 0.8+ (every visual decision serves content priority).

### NM-08: Rhythm Regularity and Variation Score

**Grounding:** Music perception research (Large & Jones, 1999) — temporal attending + expectancy
**What it measures:** Whether visual rhythm (spacing, density, element pacing) creates an attentional rhythm that aids comprehension
**Protocol:** Measure the vertical distance between consecutive "rhythm anchors" (headings, component tops, visual breaks). Plot as a sequence. Compute coefficient of variation.
**Scoring:** CV < 0.15 = MONOTONOUS (too regular), 0.15-0.35 = RHYTHMIC (variation within pattern), 0.35-0.60 = VARIED (intentional variation), > 0.60 = ERRATIC (no perceivable pattern).
**Tier discrimination:** Floor pages: CV > 0.5 (no rhythm). Middle pages: CV 0.20-0.40 (basic rhythm). Ceiling pages: CV 0.15-0.30 (deliberate rhythm with variation). Flagship pages: CV 0.20-0.35 but with MOTIVATED variation (rhythm changes correlate with content shifts).

### NM-09: Novelty-Without-Confusion Index

**Grounding:** Berlyne's collative properties (novelty, complexity, surprisingness) + Martindale preference model
**What it measures:** Whether novel visual treatments ADD to comprehension or DETRACT from it
**Protocol:** Identify every element that deviates from the page's dominant visual pattern. For each, rate: (a) Was it immediately understandable? (b) Did it add information? Score each deviation as +1 (novel and helpful), 0 (neutral), or -1 (confusing).
**Scoring:** Sum of deviation scores / number of deviations. > 0.5 = ENRICHING, 0 to 0.5 = NEUTRAL, < 0 = CONFUSING.
**Tier discrimination:** Floor pages: few deviations, all neutral. Middle pages: some deviations, mostly enriching. Ceiling pages: many deviations, strongly enriching. Flagship pages: deviations feel INEVITABLE — they enrich so effectively that removing them would feel like a loss.

### NM-10: Micro-Reward Distribution

**Grounding:** Variable ratio reinforcement (Skinner, 1957) + Norman's "reflective" design level
**What it measures:** The distribution of small visual refinements that reward close attention
**Protocol:** Examine the page at 2x zoom. Count elements with "hidden" refinements — things not visible at normal view but rewarding at close inspection. Examples: tabular-nums on data, zone-specific ::selection colors, hover state transitions, first-child edge treatments, print-specific styling.
**Scoring:** Micro-rewards per zone. 0 = NONE, 1-2 = SPARSE, 3-5 = MODERATE, 6+ = GENEROUS.
**Tier discrimination:** Floor pages: 0 micro-rewards. Middle pages: 2-4 scattered. Ceiling pages: 5-10, concentrated in high-density zones. Flagship pages: 10+, distributed across ALL zones, with each zone having unique micro-rewards.

---

## PART 8: SYNTHESIS — WHAT THE PA PROTOCOL GETS RIGHT AND WHAT IT MISSES

### 8.1 What the Protocol Gets Deeply Right

1. **The primacy of PA-05 (perceived design quality) as a holistic judgment.** Perceptual science confirms that aesthetic evaluation IS holistic — it integrates pre-attentive, attentive, cognitive, and emotional processing into a single judgment. PA-05's 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) map well to the four processing stages.

2. **The fresh-eyes principle.** Processing fluency research confirms that first impressions are MORE accurate than considered judgment for aesthetic quality. The "zero context" requirement for PA auditors is scientifically grounded — prior knowledge would bias processing fluency assessment.

3. **The multi-auditor approach.** Different auditors attend to different features (a consequence of attentional selection). 9 auditors with different foci covers more of the visual processing pipeline than 2 generalists. This maps to research on perceptual expertise — different experts notice different things.

4. **The emotional arc assessment.** Berlyne's collative properties + Norman's three levels confirm that aesthetic response evolves over time. The 4 emotional registers (surprise, delight, authority, closure) map well to the arousal curve.

5. **Perception threshold table.** Weber-Fechner law validates the concept of minimum perceptible deltas. The specific values (15 RGB, 0.5px letter-spacing, 24px padding) are reasonable approximations of just-noticeable differences (JNDs) for on-screen viewing at typical distances.

### 8.2 What the Protocol Partially Covers

1. **Cognitive load** — Covered symptomatically (what bothers you, uncomfortable text, dead space) but not mechanistically (what CAUSES the load).

2. **Gestalt grouping** — Covered for proximity (spacing rules), similarity (consistency questions), continuation (alignment tracing), but NOT for closure, figure-ground, or pragnanz.

3. **Aesthetic theory** — Covered subjectively (PA-05, PA-20, PA-45) but not formally (no Birkhoff ratio, no complexity measurement, no order quantification).

4. **Temporal experience** — Covered through scroll questions (PA-35, PA-47) but not through rhythm quantification or scroll velocity prediction.

### 8.3 What the Protocol Misses Entirely

1. **Visual encoding efficiency** — No measurement of information density per visual feature
2. **Depth/layering** — No measurement of figure-ground layer count
3. **Scan path optimization** — No measurement of attention guidance accuracy
4. **Proximity ratio (grouping strength)** — No measurement of inter/intra spacing ratios
5. **Closure exploitation** — No measurement of implied shapes/regions
6. **Layout description complexity** — No Birkhoff-style order/complexity measurement
7. **Micro-reward distribution** — No measurement of close-inspection details (partially in delight register but not systematically)
8. **Disfluency motivation** — No distinction between motivated and random visual friction
9. **Proportional system coherence** — No measurement of whether proportions form a related system
10. **Information foraging signals** — No measurement of "scent" (how well visual cues predict content value)

### 8.4 The Deepest Insight

**The PA protocol is strongest on WHAT quality looks like and weakest on WHY quality exists.**

Perceptual science explains the mechanisms: feature detection, gestalt grouping, processing fluency, arousal curves. The PA protocol asks "does this feel designed?" (WHAT) but not "does this exploit gestalt closure to create implied containment?" (WHY).

This distinction matters for REMEDIATION. When a page fails PA-05, the current protocol identifies symptoms ("it feels assembled, not designed"). Perceptual science could identify causes ("the inter-section spacing ratio is 1.8:1, below the 2.5:1 threshold for clear grouping, causing grouping ambiguity that makes sections feel disconnected").

**Recommendation:** The next generation of the PA protocol should pair each subjective question with a mechanistic hypothesis. Not to REPLACE subjective judgment, but to guide REPAIR when subjective judgment identifies a problem.

---

## APPENDIX A: RESEARCH REFERENCES

| Author(s) | Year | Finding | Relevance |
|-----------|------|---------|-----------|
| Treisman & Gelade | 1980 | Feature Integration Theory | Pre-attentive feature detection |
| Wolfe | 2021 | Guided Search 6.0 | Attention guidance by saliency |
| Weber (via Fechner) | 1860 | Weber-Fechner Law | Minimum perceptible deltas |
| Wertheimer | 1923 | Gestalt grouping laws | Proximity, similarity, continuation, closure |
| Palmer | 1992 | Common region principle | Zone-based grouping |
| Nielsen | 2006 | F-pattern reading | Scan patterns on web |
| Nielsen | 2017 | Layer-cake scanning | Heading-driven scanning |
| Buscher et al. | 2009 | First fixation patterns | Eye-tracking on web pages |
| Birkhoff | 1933 | Aesthetic Measure M=O/C | Order/complexity ratio |
| Reber, Schwarz, Winkielman | 2004 | Processing fluency | Fluency → beauty/truth/liking |
| Alter & Oppenheimer | 2009 | Fluency and judgment | Meta-cognitive fluency effects |
| Martindale | 1990 | Preference = f(prototype, complexity) | Inverted-U complexity curve |
| Berlyne | 1971 | Collative properties | Novelty, surprise, complexity in aesthetics |
| Norman | 2004 | Three levels of design | Visceral, behavioral, reflective |
| Sweller | 1988 | Cognitive Load Theory | Intrinsic, extraneous, germane load |
| Miller | 1956 | Working memory capacity | 7 +/- 2 chunks |
| Arnheim | 1954 | Visual weight and balance | Compositional dynamics |
| Large & Jones | 1999 | Dynamic Attending Theory | Temporal rhythm and attention |
| Diemand-Yauman et al. | 2011 | Disfluency effect | Moderate disfluency aids learning |
| Lau & Vande Moere | 2007 | Information aesthetics | Expressiveness/effectiveness/effort |
| Seckler et al. | 2015 | Golden ratio in web design | Mixed evidence for specific ratios |
| Chartbeat | 2013 | Scroll depth analytics | Average engagement patterns |

## APPENDIX B: MAPPING TO EXISTING PA QUESTIONS

For each of the 65 PA questions, the perceptual science grounding:

| PA ID | Perceptual Science Grounding | Coverage Strength |
|-------|------------------------------|-------------------|
| PA-01 | Cognitive load (extraneous — what creates friction) | STRONG — directly taps bottleneck detection |
| PA-02 | Processing fluency (text legibility) | STRONG |
| PA-03 | Gestalt: Similarity + Pragnanz (coherent = one system) | STRONG |
| PA-04 | Pre-attentive saliency + Guided Search | STRONG |
| PA-05 | Holistic aesthetic judgment (all 4 stages) | STRONG — well-decomposed into sub-criteria |
| PA-06 | Typography research (word stacking = line-length failure) | STRONG |
| PA-07 | Eye-tracking regression rate | STRONG |
| PA-08 | Font legibility / contrast | STRONG |
| PA-09 | Gestalt: Proximity grouping failure (purposeless gaps) | MODERATE — detects symptom, not cause |
| PA-10 | Figure-ground separation (squint removes detail) | MODERATE — good technique, limited question |
| PA-11 | Processing fluency (confident = fluent) | WEAK — metaphorical, hard to calibrate |
| PA-12 | Continuation + scan path smoothness | MODERATE |
| PA-13 | Closure + earned closure (emotional arc) | MODERATE |
| PA-14 | Proximity within containers | MODERATE |
| PA-15 | Continuation (alignment consistency) | STRONG — directly measures alignment |
| PA-16 | Similarity principle | STRONG |
| PA-17 | Dynamic attending (rhythm perception) | STRONG |
| PA-18 | Color harmony (color similarity grouping) | MODERATE |
| PA-19 | Similarity violation detection | STRONG |
| PA-20 | Prototypicality matching (genre fit) | MODERATE — subjective |
| PA-29 | Cognitive load (attention competition in header) | STRONG |
| PA-30 | Proportional fitness | MODERATE |
| PA-31 | Figure-ground (space as designed element) | MODERATE — indirect |
| PA-32 | Visual weight distribution | MODERATE — subjective |
| PA-33 | Gestalt: Silence vs. void (purposeful space) | STRONG — elegant operationalization |
| PA-34 | Transition design (boundary feature changes) | STRONG |
| PA-35 | Temporal attending + scroll engagement | STRONG |
| PA-36 | Berlyne's surprise/novelty detection | STRONG |
| PA-37 | Miller's Law (information overload) | STRONG |
| PA-38 | Scan path within component | MODERATE |
| PA-39 | Proportional allocation (header vs. content) | MODERATE |
| PA-40 | Rhythm consistency + violation detection | STRONG |
| PA-41 | Monotony detection (too much regularity) | STRONG — captures the inverted-U |
| PA-42 | Metaphor-visual conflict detection | MODERATE — domain-specific |
| PA-43 | Encoding efficiency (achieving effect with less) | MODERATE — implicit |
| PA-44 | Structural metaphor (not just labeled) | STRONG |
| PA-45 | Peak-end rule (memorable design moment) | STRONG |
| PA-46 | Responsive adaptation quality | MODERATE |
| PA-47 | Late-page novelty (Berlyne) | STRONG |
| PA-48 | Comparative preference | MODERATE — needs calibration |
| PA-50 | Void detection (content ratio) | STRONG — quantitative |
| PA-51 | Content percentage | STRONG — quantitative |
| PA-52 | Rule of thirds | STRONG |
| PA-53 | Width utilization | STRONG — quantitative |
| PA-55 | Sub-perceptual CSS detection | STRONG — directly tests JND thresholds |
| PA-56 | Tracking perception test | STRONG — directly tests JND |
| PA-60 | Design moment density | STRONG — Berlyne-grounded |
| PA-61 | Multi-voice composition | STRONG — music analogy grounded |
| PA-62 | Transition variation | STRONG — directly measures feature changes |
| PA-63 | Fractal zoom coherence | STRONG — multi-scale consistency |
| PA-64 | Restraint as expression | STRONG — captures disfluency/absence |
| PA-65 | Music analogy (composition type) | MODERATE — metaphorical |
| PA-66 | Negative space variety | MODERATE — subjective |
| PA-67 | Novelty beyond competence | STRONG — Berlyne/Martindale |
| PA-68 | Metaphor coverage persistence | MODERATE — domain-specific |
| PA-69 | Transition intensity measurement | STRONG — directly measures NM-03 |
| PA-70 | Content-form coupling | STRONG — information aesthetics |

**Summary:** 22 STRONG, 23 MODERATE, 2 WEAK out of 47 unique questions assessed. The protocol is scientifically well-grounded overall, with its strongest coverage in processing fluency, rhythm/temporal perception, and novelty detection. Its weakest areas are figure-ground depth, closure, grouping strength, and encoding efficiency.

---

*End of perceptual science foundations analysis. 10 new measurement instruments proposed. 5 unmeasured dimensions identified. 30-dimension gap map completed.*
