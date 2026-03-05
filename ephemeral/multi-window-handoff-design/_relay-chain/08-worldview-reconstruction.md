# Worldview Reconstruction: How a Fresh Window Arrives at the Same Creative Understanding

**Agent:** Worldview Reconstruction (Opus 4.6)
**Date:** 2026-02-28
**Source Material:** _reflection-v2.md (REFINE build), 01-ideology-extraction.md, 02-handoff-accumulation.md, RESEARCH-SYNTHESIS.md, mechanism-catalog.md, prohibitions.md

---

## 1. What IS a Worldview in This Context?

### Anatomy of a Creative Worldview

When the REFINE builder wrote "I wanted every room to feel like a different room -- not through color alone but through texture: the density of components, the size of type, the tightness of spacing," they were expressing something that cannot be reduced to CSS values or design rules. They were expressing a **relationship with the material** -- a way of seeing content as spatial architecture, where typographic density IS the room's character, not merely a visual property applied to it.

A creative worldview has four components:

**1. Ontological Commitment: What the material IS.**
The REFINE builder does not see CSS properties applied to HTML sections. They see ROOMS with FURNITURE. This is not metaphor-as-decoration -- it is metaphor-as-ontology. The builder genuinely inhabits a mental model where `line-height: 1.6` is not a CSS value but the compression of an operational zone's atmosphere. This commitment is prior to any specific decision. It determines what decisions are even thinkable.

**2. Aesthetic Disposition: What feels right.**
"The room compresses... the room exhales." The builder has internalized a sense of what spatial rhythm FEELS like when it works. This sense is not a threshold (">= 15 RGB delta") -- it is a felt quality, like knowing when a sentence has the right cadence. The disposition comes from having processed enough examples (the design system's 337 research findings, the DD/OD/AD/CD explorations) that quality-sense has become intuitive.

**3. Value Hierarchy: What matters more than what.**
The REFINE builder explicitly chose NOT to add solid offset depth to the Mayor card ("encoding the same semantic twice") and NOT to add width variation to the parade ground ("four simultaneous channel changes exceeds the 4-mechanism-per-viewport cap"). These rejections reveal a value hierarchy: semantic clarity > visual drama, restraint > decoration, perceptual economy > technique count. The hierarchy is not stated as rules -- it operates as taste.

**4. Situational Awareness: What THIS content needs.**
"Beads ARE a system, and systems look systematic." The builder sided with the content's nature against visual novelty. This is not a general principle ("always let content dictate form") but a specific judgment made from inside the worldview: the garrison metaphor creates rooms, and the signal room's beads belong together as a system because that is what beads ARE in a garrison -- standardized communication units.

### How a Worldview Differs From Rules

| Dimension | Rules | Worldview |
|-----------|-------|-----------|
| **Form** | "Use 14px in operational zones" | "Operational zones compress; the room itself becomes efficient" |
| **Scope** | Specifies THIS decision | Generates ALL decisions in its domain |
| **Novelty** | Cannot handle new situations | Handles any situation within its framing |
| **Compliance mode** | Verification: "Did I satisfy this?" | Generation: "What does this world want here?" |
| **Transfer** | Copies to new context perfectly | Must be RE-INHABITED in new context |
| **Error type** | Wrong value (fixable) | Wrong world (catastrophic) |

The critical distinction: a rule produces the same output regardless of who follows it. A worldview produces DIFFERENT but COHERENT outputs depending on who inhabits it. Two builders sharing the garrison worldview might choose different typography for the armory -- one might use 14px/1.6, another 13px/1.5 -- but both would make the armory compress relative to the barracks, because the worldview demands it.

### Minimum Information for Reconstruction

The worldview is reconstructible if the new window receives:
1. The ontological commitment (what the material IS -- rooms, not sections)
2. The aesthetic disposition (what quality FEELS like -- processed through examples, not described)
3. The value hierarchy (what matters more -- restraint > decoration, semantic clarity > visual drama)
4. Enough raw material to develop situational awareness independently

Components 1-3 can be stated in ~50-100 lines of philosophical prose. Component 4 requires either the original research (thousands of lines) or a carefully curated selection (~500-2,000 lines) that creates the same processing state.

---

## 2. The Reconstruction Test

### The Specific Decision

From _reflection-v2.md: "Prose inside armory zones is set at `--text-sm` with `line-height: 1.6` and `margin-bottom: var(--space-3)` -- measurably tighter than barracks prose at `--text-base` with `line-height: 1.7` and `margin-bottom: var(--space-4)`. The armory's padding is `--space-8` (32px) versus the barracks' `--space-12` (48px)."

### Method A: Rule

> Armory: font-size 14px, line-height 1.6, margin-bottom 12px, padding 32px.
> Barracks: font-size 16px, line-height 1.7, margin-bottom 16px, padding 48px.

**What the next window does with this:** Applies exactly these values. If building a different page (say, a page about kitchen design), the builder has no idea whether these values apply. The kitchen's "prep station" might or might not map to "armory." The builder has no basis for deciding because the VALUES contain no REASONING. If the content has no armory/barracks distinction, the rule is useless.

**Autonomy assessment:** Zero. The builder can execute but cannot adapt. Given novel content, this produces either blind copying (applying garrison values to a kitchen) or paralysis (no rule covers this situation).

**Failure mode:** The next window builds a kitchen-metaphor page and sets prep station to 14px/1.6 because "that's what operational zones use" -- copying the answer without understanding the question.

### Method B: Justified Rule

> Armory uses tighter typography (14px/1.6) because operational zones should compress. Barracks uses generous typography (16px/1.7) because strategic zones should breathe. Padding follows the same logic: operational = 32px (tight), strategic = 48px (expansive).

**What the next window does with this:** Understands that operational = tight, strategic = generous. Given a kitchen page, the builder might set the prep station to 14px/1.6 (operational = tight) and the dining room to 16px/1.7 (strategic = generous). This is better than Method A because the builder can reason about zone character, but the reasoning is shallow -- it knows the CORRELATION (operational = tight) without understanding the MECHANISM (why does tightness encode operational character?).

**Autonomy assessment:** Partial. The builder can make analogical transfers (garrison:armory :: kitchen:prep station) but cannot make creative leaps. If the content demands a zone that is BOTH operational AND reflective (a test kitchen where chefs experiment), the builder has no framework for resolving the tension. The justification provides a mapping table, not a creative theory.

**Failure mode:** The builder creates a mechanical mapping (operational zone = 14px, strategic zone = 16px) applied uniformly, producing a page that is technically correct but emotionally flat. The typography SIGNALS zone character without BEING zone character.

### Method C: Worldview

> The garrison metaphor creates rooms with different furniture. When you enter an operational zone, the room compresses -- text tightens, margins narrow, the space itself becomes efficient. When you enter a strategic zone, the room exhales -- wider margins, more generous line-height, the space itself communicates deliberation. The typography does not just SIGNAL the zone -- it IS the zone's character.
>
> The compression is not arbitrary. An operational zone's purpose is doing -- executing, deploying, assembling. Efficiency is its nature. The typography compresses because the room IS compressed: everything is where you need it, nothing wastes space. A strategic zone's purpose is thinking -- planning, evaluating, deciding. Deliberation requires room to breathe. The typography opens up because the room itself is spacious enough for thought.
>
> When you build a new page with different content, the question is not "which values should operational zones have?" but "what is the NATURE of each zone in your metaphor, and how does typography express that nature?" If your metaphor is a kitchen, the prep station compresses because prep is about speed and efficiency -- small type, tight margins, everything at hand. The dining room opens because dining is about savoring -- generous line-height, wider margins, space between courses.

**What the next window does with this:** The builder first identifies the NATURE of each zone in their content. Then they ask: what does this nature feel like spatially? Then they choose typography that IS that nature, not that SIGNALS it. For a kitchen page, the builder might set the prep station to 13px/1.5 (even tighter than the garrison's armory, because a kitchen prep station is MORE compressed than a military armory) and the dining room to 17px/1.8 (more expansive than the garrison's barracks, because dining is MORE spacious than military strategy).

**Autonomy assessment:** High. The builder can handle novel content, resolve tensions (a test kitchen that is both operational and reflective might use 15px/1.65 -- compressed but not cramped, acknowledging both natures), and make creative decisions the original builder never considered. The worldview generates values; it does not prescribe them.

**Failure mode:** The builder might over-interpret the worldview and make typography choices so extreme they violate perceptual thresholds (8px type that is too small to read, or 24px body text that wastes space). The worldview needs to be paired with perceptual physics to prevent this. But this is a different failure mode than Method A or B -- it fails through excess creativity rather than insufficient creativity. That failure is correctable by gates; the inverse failure (insufficient creativity) is not correctable by anything.

### The Verdict

**Method A** produces compliance. The next window will get the values right and the worldview wrong.

**Method B** produces competence. The next window will make reasonable analogies but cannot handle novel situations.

**Method C** produces inhabitation. The next window will make its OWN typography decisions for DIFFERENT content, and those decisions will be coherent with the original worldview even though the specific values differ.

**For handoff tissue:** Method C is the only one that enables creative autonomy in the next window. Method A should never be used (it is the extraction anti-pattern). Method B is acceptable for perceptual physics (where the reasoning IS the value) but not for creative decisions (where the reasoning GENERATES values).

---

## 3. The Philosophy Stack

### Five Layers Behind Any CSS Decision

Taking the specific example of 48px section spacing:

**Layer 1: The Specific Value**
`padding: var(--space-12); /* 48px */`

This is the leaf node. It appears in code. It is executed by the browser. It is the only layer that DIRECTLY produces visual output. But it is the least transferable layer -- 48px means nothing without context.

**Layer 2: The Immediate Reason**
"48px creates breathing room between sections in the barracks zone."

This answers "why 48px and not 32px?" The answer is local: the barracks zone needs more breathing room than the armory zone. But it does not answer "why does the barracks zone need more breathing room?" That requires Layer 3.

**Layer 3: The Principle**
"Cognitive load management through spatial rhythm. Strategic zones (barracks) give the reader space to shift cognitive gears between ideas. The pause is the message."

This is a design principle -- it explains WHY breathing room serves the content's purpose. It is transferable across metaphors: any page with zones that require cognitive shifting should have generous spacing at zone boundaries. But the principle does not explain WHY cognitive load management matters or where this understanding came from.

**Layer 4: The Research Finding**
"Density as rhythm, not a slider (Research Synthesis, Principle 1, from R1 + R3). Premium docs use density rhythm: HIGH -> LOW -> HIGH cycles across 6 dimensions (spatial, temporal, depth, semantic, cognitive, interaction). Each section should have a density 'signature' across all dimensions. The LOW density moment is not wasted space -- it is the breath between density peaks that gives those peaks their perceptual weight."

This is the research that GENERATED the principle. It comes from the R1 documentation patterns study (28 findings) and R3 density dimensions study (51 findings), synthesized into a unified design principle. It tells the builder not just WHAT density rhythm is, but HOW it was discovered (by studying Stripe, Vercel, Linear, Notion) and WHY it works (perceptual psychology of HIGH-LOW cycles).

**Layer 5: The Creative Worldview**
"Space is confidence made spatial. The page breathes. Dense zones are zones of action and urgency; spacious zones are zones of reflection and authority. A page that is uniformly dense is anxious. A page that is uniformly spacious is empty. The RHYTHM between them is what creates the sensation that the page is alive -- that it knows when to push and when to pause. This is what separates a composition from a layout. A layout distributes content. A composition conducts attention."

This is the worldview that GENERATED the research direction. It is the reason density-as-rhythm was investigated in the first place: someone had the intuition that space communicates something, and the research validated and elaborated that intuition. The worldview is the most transferable layer because it applies to ANY page, ANY metaphor, ANY content. A builder who inhabits this worldview will produce density rhythm naturally, without being told to -- because they experience space as meaningful, not as residual.

### Which Layers Does the Next Window Need?

**Layer 1 (specific value): NEVER transfer.** This is the extraction anti-pattern. The next window should derive its own values. Including specific values in handoff tissue causes blind compliance.

**Layer 2 (immediate reason): RARELY transfer.** Only when the reason is content-specific and non-obvious. "The barracks needs breathing room" is obvious from the worldview. "The comparison strip uses 3 columns because this is a 3-way comparison" is content-specific enough to be worth transferring.

**Layer 3 (principle): SOMETIMES transfer.** Principles are useful when they bridge the gap between worldview and execution. "Cognitive load management through spatial rhythm" helps a builder translate the worldview into CSS decisions. But too many principles create a checklist, and checklists produce FLAT output (the recipe-vs-checklist finding from experiment history).

**Layer 4 (research finding): WHEN POSSIBLE, transfer as raw material.** The research finding is not a rule -- it is a STORY about how a principle was discovered. Stories create processing states. "We studied Stripe, Vercel, Linear, and Notion. We found that all of them use HIGH-LOW-HIGH density cycles. Here is what those cycles look like..." This creates a richer processing state than "Use density rhythm" because the builder DISCOVERS the principle through the research, rather than being told about it.

**Layer 5 (worldview): ALWAYS transfer.** This is the foundation. Without the worldview, principles are checklists and research is trivia. With the worldview, even a builder who has no specific principles or research can derive reasonable CSS decisions because they inhabit the right relationship with the material.

### The Ideal Stack for Handoff

```
ALWAYS:  Layer 5 (worldview) -- 30-60 lines of philosophical prose
ALWAYS:  Layer 4 (research) -- curated raw material, 200-1000 lines
OFTEN:   Layer 3 (principles) -- 10-20 principles, stated as understanding not rules
RARELY:  Layer 2 (reasons) -- only for content-specific non-obvious decisions
NEVER:   Layer 1 (values) -- the next window derives its own
```

---

## 4. The Derivation Test

### Experimental Design

**Content:** A new page about a topic the design system has never built -- say, an analysis of distributed systems architecture.

**Agent A: Worldview Only (~50 lines + content)**
Receives:
- The creative worldview (Layer 5): "Space is confidence made spatial. Density has rhythm. Components are characters with velocity, temperature, weight. The page conducts attention, not distributes content. Typography IS the room's character, not decoration applied to it. Restraint > decoration. The most powerful design is the absence of design."
- The content markdown
- Token definitions (colors, fonts, spacing scale -- the physics)
- Prohibitions (the identity constraints)
- NO principles, NO research, NO specific values, NO mechanism catalog

**Agent B: Worldview + Principles + Key Research (~300 lines + content)**
Receives:
- Everything Agent A receives
- 10-15 key principles (Layer 3): density as rhythm, layout as choreography, components as characters, whitespace as design element, editorial confidence through typography
- 2-3 key research findings (Layer 4, in narrative form): how density rhythm was discovered, how multi-channel coherence works, what the perceptual thresholds are and why
- The mechanism catalog's INTRODUCTION (explaining what mechanisms are and how they relate to metaphors) but NOT the specific mechanisms
- NO specific mechanism entries, NO case studies, NO previous build values

**Agent C: Full Stack (~2,000 lines + content)**
Receives:
- Everything Agent B receives
- The full mechanism catalog (18 mechanisms with application modes, impact profiles, anti-patterns)
- 2-3 case studies from the library (in anti-prescription format)
- The REFINE builder's reflection from a previous build
- Perceptual thresholds with calibration ranges

### Predictions

**Agent A** will produce output that is philosophically coherent but technically rough. The worldview will drive genuine creative decisions -- the agent will naturally create density rhythm, zone differentiation, and spatial confidence because the worldview demands it. But without the mechanism catalog, the agent will reinvent mechanisms from scratch, and some of those reinventions will be weaker than the established vocabulary. The agent might discover border-weight gradient encoding independently (it is a natural way to encode hierarchy) but might miss fractal self-similarity (it requires specific compositional knowledge).

**Expected quality:** Philosophically rich, technically uneven. Some brilliant novel choices alongside some pedestrian ones. The page will FEEL alive but may have structural weaknesses. The soul evaluation lenses would likely score high on L4 (evocativeness) and L7 (creative autonomy) but lower on L2 (content understanding depth) without the mechanism vocabulary to express its intuitions precisely.

**Agent B** will produce the strongest output. The worldview creates the right generative mode. The principles provide intellectual handholds for translating worldview into decisions. The key research findings create depth of understanding (the builder knows WHY density rhythm matters, not just THAT it matters). And the mechanism catalog introduction gives the builder the CONCEPT of mechanisms without prescribing which ones to use -- the builder will seek out mechanisms that serve its own metaphor rather than applying a pre-selected set.

**Expected quality:** Philosophically rich AND technically precise. The builder has enough vocabulary to express its creative vision precisely, but not so much vocabulary that it becomes a selection exercise. The constraint is creative (which mechanisms serve THIS content?) rather than procedural (which mechanisms should I use?).

**Agent C** will produce technically competent but creatively cautious output. The full mechanism catalog provides a complete vocabulary, but the abundance of options shifts the builder's mode from GENERATION to SELECTION. The case studies provide reference points, but those reference points create gravitational pull -- the builder's choices will orbit the examples rather than derive from the content. The previous builder's reflection provides conviction, but it is someone ELSE'S conviction -- the new builder may defer to the previous builder's values rather than developing its own.

**Expected quality:** High technical quality, moderate creative quality. All the mechanisms will be correctly applied. The perceptual thresholds will be satisfied. But the page will feel like a skilled execution of existing vocabulary rather than a creative composition. The builder will be more competent and less surprising.

### The Counterintuitive Conclusion

**The most autonomous builder is not the most informed builder.** Agent B (worldview + principles + key research) outperforms Agent C (full stack) because the intermediate amount of information creates the optimal generative state: enough understanding to be precise, not enough specificity to be constrained.

This maps directly to the investigation's central finding. The 53 lines of artistic prose outperformed the 3,774 lines of technical spec. The worldview (Layer 5) + research narrative (Layer 4) + principles (Layer 3) create the same kind of "artistic prose" state. The full mechanism catalog + case studies + previous reflections create the same kind of "technical spec" state.

**However:** Agent A (worldview only) is too sparse for consistent quality. Some builds will be brilliant; others will miss important vocabulary. The worldview alone is necessary but not sufficient -- it needs the intellectual handholds of principles and the depth of research to produce reliable quality.

**The sweet spot is Layer 5 + Layer 4 + selective Layer 3.** Worldview + raw research + curated principles. The builder inhabits the right world, has access to the reasoning that built that world, and has enough conceptual vocabulary to translate worldview into CSS. But the builder is NOT given the full mechanism catalog, NOT given specific values, and NOT given previous builders' specific decisions.

---

## 5. The Research Connection

### The Raw Research Alternative

The design system's creative worldview was not invented -- it was DISCOVERED through research. The R1-R5 studies (337 findings), the DD/OD/AD/CD explorations (30 validated HTML files), and the case studies (9 anti-prescription examples) collectively CREATED the worldview by demonstrating it through practice.

**The question:** Instead of encoding the worldview in handoff tissue ("space is confidence made spatial"), what if we loaded the ORIGINAL RESEARCH that produced that understanding?

### How This Would Work

Instead of telling the builder "density works as rhythm":

1. Load R1-DOCUMENTATION-PATTERNS finding R1-F-014: "Premium documentation sites (Stripe, Vercel) use density cycling: alternating HIGH-density technical content with LOW-density whitespace breathing zones. The cycle period is typically 2-4 viewports."
2. Load R3-DENSITY-DIMENSIONS finding R3-F-023: "Density is not a single dimension but SIX: spatial, temporal, depth, semantic, cognitive, interaction. Each can be varied independently. The richest pages have DIFFERENT density signatures across dimensions -- high spatial + low cognitive creates 'airy but substantive.'"
3. Load the RESEARCH-SYNTHESIS principle: "Density as Rhythm (R-1 + R-3). Premium docs use density rhythm (HIGH -> LOW -> HIGH cycles). Each section should have a density 'signature' across all 6 dimensions."

The builder reads these three fragments and ARRIVES at "density works as rhythm" independently. The builder has also absorbed the nuance that the synthesis compressed away: the six dimensions, the idea of density signatures, the Stripe/Vercel precedent.

### Advantages of Raw Research

**1. The builder discovers rather than receives.** Reading "Stripe uses density cycling" and then seeing it in practice (by examining an exploration that implements it) creates a deeper understanding than reading "use density rhythm." The discovery process builds the same kind of felt understanding the original researcher had.

**2. The research carries nuance that encoding loses.** "Six density dimensions" is richer than "density has rhythm." The research finding tells the builder that spatial density and cognitive density can be varied independently -- a key insight that disappears in the encoded worldview statement.

**3. The research is self-validating.** "Stripe, Vercel, Linear, and Notion all use this pattern" is more convincing than "space is confidence made spatial." The builder does not need to take the worldview on faith -- the builder can see the evidence.

**4. Multiple research fragments create a richer processing state than a single worldview statement.** Three research findings about density (from different agents, different contexts, different levels of abstraction) create a stereoscopic understanding. The builder sees density from multiple angles and synthesizes its own worldview.

### Disadvantages of Raw Research

**1. Volume.** The 337 findings span thousands of lines. Loading all of them displaces the content being built. Even curated selections of 50-100 findings consume significant context.

**2. The builder may not synthesize.** Reading three research findings about density does not guarantee the builder will arrive at "density as rhythm." The builder might treat each finding as an independent rule (R1 says cycling, R3 says six dimensions, synthesis says signatures) rather than synthesizing them into a worldview. The worldview statement does this synthesis explicitly.

**3. Research findings are about other content.** "Stripe uses density cycling" is about Stripe's documentation. The builder must transfer this understanding to THEIR content. The worldview statement ("space is confidence made spatial") is content-agnostic and transfers immediately.

**4. Processing time.** Reading and synthesizing raw research takes more processing (both token-wise and cognitively) than receiving a pre-synthesized worldview. In a multi-window architecture where each window has finite context and finite response length, this processing overhead matters.

### The Hybrid Approach

The answer is not either/or. The optimal handoff combines:

**Worldview statement (50-100 lines):** The pre-synthesized creative worldview. This gives the builder the RIGHT PROCESSING MODE from the first token. The builder enters the material already inhabiting the right world.

**Curated research pointers (3-5 specific findings per worldview statement):** Not the full research, but the specific findings that generated each worldview insight. These serve as VERIFICATION and DEEPENING -- the builder can check the worldview against its source and discover nuances the worldview statement compressed away.

**One or two complete exploration examples (1,000-2,000 lines of HTML):** Not as templates but as DEMONSTRATIONS of the worldview in action. The builder reads the exploration's CSS and sees how "space is confidence made spatial" translates into actual spatial decisions. This is the "raw material" that the ideology extraction identified as essential for generative quality.

The hybrid approach avoids both traps: it does not force the builder to re-derive the worldview from scratch (expensive, unreliable), and it does not deny the builder access to the raw material that produced the worldview (which would be the extraction anti-pattern). It provides the worldview AS FRAMING and the research AS GROUNDING.

---

## 6. Synthesis: The Creative Framing Recipe

### What the Handoff Document Structure Should Be

```
CREATIVE FRAMING DOCUMENT (~200-400 lines total)
├── I.   THE WORLD YOU ARE ENTERING           (~30-50 lines)
├── II.  THE PRINCIPLES THIS WORLD RUNS ON    (~40-80 lines)
├── III. THE REASONING BEHIND THE PRINCIPLES  (~60-120 lines)
├── IV.  WHAT THE PREVIOUS BUILDER FELT       (~30-60 lines)
└── V.   WHAT IS YOURS TO DECIDE              (~20-40 lines)

COMPANION MATERIAL (loaded separately, 1,000-3,000 lines)
├── 1-2 complete exploration HTMLs (as atmosphere, not templates)
├── 3-5 curated research findings per principle (as verification)
└── The mechanism catalog introduction (~50 lines, concepts only)
```

### Section I: The World You Are Entering

This is the worldview (Layer 5). Written as philosophical prose, not instruction. The builder reads this and enters a mental space where certain things are true:

- Space is meaningful, not residual
- Typography IS structure, not decoration applied to structure
- Density has rhythm -- HIGH-LOW-HIGH cycles create the sensation of a breathing page
- Restraint is generative -- the discipline of sharp edges, flat surfaces, and warm earth tones creates a distinctive voice
- Components are characters with velocity, temperature, and weight
- The page conducts attention; it does not distribute content

**Framing rules:**
- Written in present tense ("Space IS confidence" not "Space should be treated as confidence")
- No imperative verbs ("Use" / "Apply" / "Ensure") -- only declarative and evocative
- No specific CSS values -- the worldview operates above the level of implementation
- 30-50 lines maximum -- enough to create a processing state, not enough to become a checklist

**Example opening:**

> This design system believes that the highest form of design is the absence of design. Typography does the structural work that other systems delegate to borders, backgrounds, and ornament. Space is not what is left over -- space is what was there first, and content is what was carefully inserted into it. Every page is a composition, not a layout: it conducts the reader's attention through density rhythm (dense zones of action, spacious zones of reflection) and zone differentiation (each region has its own atmospheric character, expressed through typography, spacing, and border weight simultaneously).

### Section II: The Principles This World Runs On

These are Layer 3 principles, stated as UNDERSTANDING not rules. Each principle is 3-5 sentences: what it is, why it matters, and how it connects to the worldview.

**Framing rules:**
- Each principle begins with a philosophical statement, not an instruction
- The principle explains WHY, not WHAT
- No threshold values in this section (those belong in physics/gates)
- Each principle ends with a question the builder must answer for THEIR content

**Example principle:**

> **Density as rhythm.** Premium editorial pages breathe: dense zones of action alternate with spacious zones of reflection. The rhythm is not a setting ("make some parts dense and some parts spacious") but a narrative structure: the page TELLS you when to push and when to pause. Density operates across six dimensions simultaneously -- spatial (how many elements per viewport), temporal (how quickly information reveals itself), cognitive (how much mental processing each zone demands), semantic (how much meaning per unit area), depth (how many layers of disclosure), and interaction (how many clickable elements). A zone's density signature across all six dimensions IS its character.
>
> **For your content:** Which zones demand cognitive compression (action, execution, specification)? Which zones invite cognitive expansion (reflection, evaluation, synthesis)? Map these before choosing typography.

### Section III: The Reasoning Behind the Principles

These are Layer 4 research findings, presented as NARRATIVE -- the story of how each principle was discovered. This section is the deepest layer that transfers; it provides the builder with the intellectual archaeology of the worldview.

**Framing rules:**
- Written as research narrative ("We studied... We found... This suggested...")
- Include the specific sources (R1, R3, Stripe, Vercel) so the builder can look them up
- Include the counter-evidence and tensions that the research revealed
- Each finding ends with what remains unresolved -- the open questions the builder inherits

**Example entry:**

> **How density-as-rhythm was discovered (R1 + R3).** Five research agents studied premium documentation sites independently. R1 examined Stripe, Vercel, Linear, and Notion. R3 examined density as a multi-dimensional concept. Both converged on the same finding: the best pages do not maintain consistent density. They cycle. Stripe's API reference alternates between dense parameter tables and generous whitespace explanations. Vercel's deployment guides alternate between packed configuration blocks and breathing conceptual paragraphs. R3 extended this from a spatial observation to a six-dimensional framework: density operates in spatial, temporal, depth, semantic, cognitive, and interaction dimensions simultaneously.
>
> **What remains unresolved:** The research does not specify the optimal cycle PERIOD (how many viewports between density peaks). DD explorations suggested 2-4 viewports, but this was tested only with technical documentation. For essay-format content or narrative analysis, the period may be longer. This is yours to discover.

### Section IV: What the Previous Builder Felt

This is the 6-dimension handoff tissue from the previous build's reflection. It transfers the CONVICTION and DISCOVERY components from the sedimentary model.

**Framing rules:**
- Written in the previous builder's voice (first person)
- Includes convictions, rejections, surprises, unresolved tensions
- Does NOT include specific CSS values (those die with the previous window)
- DOES include the REASONS for creative choices (why something was rejected is as important as what was chosen)

**Example (adapted from _reflection-v2.md):**

> I wanted every room in the garrison to feel like a different room -- not through color alone but through TEXTURE. The first builder changed the wall color between rooms. I wanted to change the furniture. When you scroll from the barracks into the armory, the room compresses. When you scroll from the armory into the parade ground, the room exhales. I achieved this through typography density, padding variation, and border character -- not through any single CSS property but through all of them shifting TOGETHER at each zone boundary.
>
> I rejected solid offset depth on the Mayor card because the dark-background inversion already created the hierarchy. Adding offset depth would encode the same semantic twice. I rejected width variation in the parade ground because it would create four simultaneous channel changes at the boundary, exceeding the perceptual economy threshold. These rejections were as important as the choices.
>
> What surprised me: the transition between Zone 2 and Zone 3 worked better than expected. The breathing space creates anticipation I did not plan for.
>
> What I would tell you: the rooms now have different furniture but the HALLWAYS between them are still generic. The transitions between zones could do more.

### Section V: What Is Yours to Decide

This section explicitly names what the builder OWNS. It prevents the worldview from collapsing into prescription by drawing a bright line between inherited understanding and autonomous decision-making.

**Framing rules:**
- List the decisions the builder must make independently
- For each decision, state WHY it is the builder's to make (not the worldview's)
- End with a statement of creative trust

**Example:**

> **Your metaphor.** The worldview provides density rhythm, zone differentiation, and spatial confidence. YOUR metaphor provides the specific framing: are these zones geological strata, architectural floors, musical movements, or something else entirely? The metaphor must emerge from YOUR content, not from previous builds.
>
> **Your typography values.** The worldview says "operational zones compress, reflective zones exhale." YOU decide how much compression, how much exhalation. 14px/1.6 was one builder's answer for one content piece. Your answer will be different because your content is different. The only constraint is perceptual physics: font-size differences must be >= 2px to be perceptible; line-height differences must be >= 0.1.
>
> **Your mechanism selection.** The mechanism catalog contains 18 reusable CSS techniques. YOU choose which ones serve YOUR metaphor. Not all 18 are appropriate for every page. The worldview says "multi-channel coherence" -- meaning multiple CSS properties should reinforce the same semantic at each boundary. But WHICH properties and HOW MANY is your creative decision.
>
> **Your zone boundaries.** Where one zone ends and another begins is a creative choice driven by content structure. The worldview says zones must be perceptually distinct. Where to draw the lines is yours.
>
> We trust you to build something we could not have anticipated. That is the point.

### How to Frame for Inhabitation Rather Than Following

The critical framing distinction across all five sections:

**FOLLOWING language (avoid):**
- "You should use density rhythm"
- "Apply border-weight gradient encoding"
- "Ensure each zone has distinct typography"
- "Remember that space communicates confidence"

**INHABITING language (use):**
- "Space IS confidence made spatial"
- "Density HAS rhythm -- the page breathes"
- "Typography IS the room's character"
- "The page CONDUCTS attention"

The grammatical shift from imperative ("you should") to declarative ("it is") changes the builder's relationship to the material. Imperatives create a compliance relationship (I am being told what to do). Declaratives create an inhabitation relationship (I am being told what is true about this world, and I must navigate it).

### How to Include Research Pointers

Each worldview statement and principle should have a `[Source]` annotation pointing to the original research:

```
Space is confidence made spatial. [Source: R1-F-014, R3-F-023, RESEARCH-SYNTHESIS Principle 1]
```

These pointers serve two purposes:
1. **Verification:** If the builder wants to deepen its understanding of a principle, it can read the original research finding.
2. **Trust:** The builder knows the worldview is not invented -- it was discovered through systematic research. This gives the worldview intellectual authority.

The pointers are NOT citations in the academic sense. They are BREADCRUMBS for the builder who wants to go deeper. Most builders will not follow them. But the builders who DO follow them will arrive at the worldview independently, which creates the deepest possible inhabitation.

### The Key Insight

The handoff document is not a DESCRIPTION of the worldview. It is an INVITATION into the worldview. The difference is the same as the difference between describing a city and dropping someone into it. The description says "the streets are narrow, the buildings are tall, the light is golden in the afternoon." The invitation says "you are standing on Rue de Rivoli at 4pm. The buildings rise five stories above you. The light is coming from behind the Tuileries. Walk east." Both communicate the same information. Only one creates the experience of being there.

The handoff document must be written as an invitation, not a description. Its success is measured not by whether the next window KNOWS the worldview but by whether the next window INHABITS it -- whether the worldview becomes the default processing mode through which the builder encounters the content and makes creative decisions.
