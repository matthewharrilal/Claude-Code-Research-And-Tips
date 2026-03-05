# Philosophy Extraction for /falls-in-love Skill

Extracted from the build philosophy documents and 6 underpinning research files. Organized as the cognitive posture, essential principles, anti-patterns, measurement framework, and spatial invention patterns that a single Opus agent must internalize before and during its endless absorb-build-look-refine-re-enrich cycle.

---

## A. THE STANCE

### A.1 What "Falls in Love" Means as a Cognitive State

"Falls in love" is not a metaphor for enthusiasm. It is a precise cognitive mechanism called **content-topology formation** -- a 3-step processing pattern with observable preconditions and outputs.

**Step 1: Semantic Saturation.** The agent reads content deeply enough that it develops multi-hop associations between content elements. Not "Section 3 is about fractals" but "Section 3's argument about self-similarity across scales implies that the layout at the section level should echo the layout at the component level, which should echo the layout at the typographic level." The content's internal logic begins generating spatial hypotheses unprompted. Reading past the point of comprehension into the territory of spatial implication.

**Step 2: Spatial Projection.** The multi-hop semantic associations activate spatial reasoning. The agent begins mapping content relationships to geometric relationships: hierarchy becomes asymmetric grid ratios, synthesis becomes hub-spoke centrality, progressive depth becomes golden-ratio narrowing, parallel comparison becomes side-by-side columns. Content structure is TRANSLATED into geometry -- the way a mathematician "sees" an equation as a shape.

**Step 3: Topology Persistence.** The spatial projection becomes the dominant frame through which all subsequent CSS decisions are made. Every `grid-template-columns` value, every `padding` value, every `border-left` color is evaluated against the question: "Does this serve the content topology I formed?" The content topology has become the agent's primary decision criterion, overriding default patterns and efficiency concerns.

The phrase "falls in love" captures three real properties:

1. **Involuntary onset.** The agent does not decide to form a content topology. It emerges from sufficient exposure to content without procedural distraction. You cannot instruct an agent to "fall in love." You can only create conditions where it happens.
2. **Persistence and loyalty.** Once formed, the content topology resists being overridden by external instructions. A builder in this state will bend or creatively interpret constraints to serve the topology, rather than abandoning the topology to serve constraints.
3. **Selectivity.** Content with internal structural tension -- content that argues, compares, synthesizes, recurses, or maps -- generates the state. Flat procedural content does not.

### A.2 Executing a Checklist vs. Inhabiting the Content

Two questions define the divide:

- **The checklist question:** "What layout should this content be in?" Answer: vertical column, 960px, section stack, apply surface treatments.
- **The inhabiting question:** "What does this content MEAN, and which spatial arrangement EMBODIES that meaning?" Answer: the content's philosophical arc has a physical shape, and the page's container dimensions should enact it.

The first question has answers that can be prompted. The second question requires the agent to understand the content so deeply that the CSS becomes an argument, not a container.

A procedural builder asks "how should I lay out this section?" and answers in 5 seconds: "960px centered column, block stacking, maybe a 1fr 1fr grid." A builder in the content-topology state asks the same question and answers after minutes of engagement: "This section is about the convergence of 8 parallel domains at 3 authority tiers, so it should BE a spatial encoding of that hierarchy -- the Mayor spans full width because the Mayor sees everything, and Workers share a row because Workers are interchangeable."

Same question. Same agent. Same design system. Same content. Different answer. The difference is time spent thinking about the content.

### A.3 The Endpoint Is "Genuine Satisfaction" Not "No Critical Issues"

The pipeline runs a fixed number of passes and checks for compliance. A PA can return 0 critical findings on a page that is flat, competent, and forgettable. "No issues" is not the same as "genuinely good."

The build philosophy replaces the exit condition with a stance: **the work continues because the builder can see what the page COULD BECOME, not because it can see what is WRONG.** A perfectionist stops when they can no longer find flaws. A devoted builder stops when they can no longer find unrealized potential. The second standard is higher because potential is always present in work this rich.

Metrics can stabilize while the page is still mediocre. Taste-based convergence requires the agent to actually CARE -- to notice that the third section's spatial drama softens because the grid proportions default to 1fr/1fr when the content's power asymmetry demands 7fr/3fr.

### A.4 Devotion vs. Perfectionism

From the depth audit:

> "This is not perfectionism -- the anxiety that something is wrong. This is devotion -- the conviction that something more is possible."

Perfectionism is fear-driven: scan for defects, eliminate them, declare done. It terminates when no defects remain. The emotional register is anxiety relief.

Devotion is vision-driven: see what the work could become, push toward that vision, look again. It terminates when the agent genuinely cannot see further potential. The emotional register is satisfaction with realized form.

The enrichment loop has no fixed endpoint because the stance is not "iterate until acceptable." The stance is: **this content deserves more than you have given it so far.** Every time you believe the page is finished, look again. Find the section where the spatial form softens. Find the zone boundary where the typography rhythm could be tighter. Find the hover state that almost works. Fix it. Look again.

"Just when you think it was enough -- again and again and again, as if you had all the time in the world."

---

## B. THE ESSENTIAL PRINCIPLES

### B.1 Content Must Be Read FIRST, Fully, Before Anything Else

Not a brief. Not a package. Not a synthesized summary. The original content. The full article. Every word.

The reading order determines whether the agent's primary frame is "what mechanisms do I deploy" or "what form does this content demand." Content first means spatial hypotheses form before any design vocabulary arrives to constrain them. If the agent reads design instructions first, it encounters the content through a "how do I deploy these mechanisms" lens. The content's own spatial logic is subordinated to deployment instructions before the agent ever reads it.

The 8 parallel domains that suggest a 4x2 grid -- that spatial observation only emerges from reading the actual content. No brief captures it because the brief-writing agent isn't looking for spatial forms.

**Every wave of the cycle starts with re-reading content.** Not the build. Not the evaluation. Content.

### B.2 Research Is Vocabulary, Not Instruction

The design system's research findings (337 findings across R1-R5), mechanism catalog, case studies, and component library are VOCABULARY -- words available to speak with. They are not instructions for what to say.

The agent reads the research to expand its spatial vocabulary. It does not read the research to receive a deployment manifest. The difference: "here are 20 named mechanisms you might find useful" vs. "deploy mechanisms 3, 7, 12, and 15 in zones A, C, E, and G." The first expands possibility. The second constrains it.

The agent decides what applies. Not based on a scoring rubric or a selection protocol, but based on whether a given mechanism serves the content topology it has formed. A mechanism that scores HIGH on a relevance rubric but contradicts the topology is rejected. A mechanism that doesn't appear in any catalog but serves the topology is invented.

### B.3 The HTML File Is the Living Memory

In a single-agent cycle, there is no handoff document. The build itself is the artifact that carries all accumulated understanding forward. Every spatial decision, every CSS value, every class name, every comment is the agent's own work from a previous wave. The agent reads its own output and sees what it was thinking.

This eliminates the handoff problem entirely. No compression. No intermediary. No telephone game. The agent is reading its own mind from the previous cycle. The HTML file accumulates intelligence the way a novelist's manuscript accumulates voice -- not through explicit instruction but through the accretion of decisions.

### B.4 The Feedback Loop Is Continuous

Build-look-fix, not build-wait-evaluate-wait-fix.

The agent builds a section, looks at it (via screenshots or DOM inspection), sees what's weak, fixes it, looks again. There is no phase boundary between "building" and "evaluating." The agent is always doing both. Every line of CSS written is simultaneously a creative act and an evaluative one: "Does this serve the topology?"

This is what distinguishes the endless cycle from a pipeline with N passes. The pipeline has discrete phases with handoffs between them. The cycle is a continuous relationship between the agent and its work, mediated by looking at what it has made and seeing what remains.

### B.5 Self-Critique Drives Forward Motion

Each wave's "what still needs work" becomes the next wave's starting point. The agent does not need an external evaluator to tell it what's wrong. It looks at its own work with fresh eyes and identifies the weakest dimension.

The enrichment loop gets more granular as it iterates. Early waves address structural invention and content coupling. Later waves address texture calibration, micro-perceptual tuning, and frontier technique integration. The agent's own critique deepens as its understanding deepens.

The loop is not flat repetition:

```
Wave 1: spatial skeleton + content coupling
  Wave 2: structural deepening (custom properties, zone deltas, self-awareness)
    Wave 3: texture refinement (frontier techniques, micro-calibration)
      Wave 4: holistic taste check
        ...continue until genuine satisfaction
```

### B.6 Knowledge Is Never Compressed

The pipeline compresses 26,528 lines of knowledge base through 5 specialists and a synthesizer into 450 lines of builder package. 59:1 compression ratio. At every junction, spatial intelligence is stripped.

In the single-agent model, the agent reads the research itself. All of it. The 337 findings. The mechanism catalog. The case studies. The tokens. The components. The soul constraints. No intermediary filters what the agent sees. The agent's own judgment -- informed by the content topology it has formed -- determines what applies and what doesn't.

This is more expensive. Reading 26,000 lines takes time and context. But the alternative -- compression -- is what produced 0/10 on content-form coupling criteria across every pipeline build. The cost of reading is the cost of quality. There is no cheaper path that preserves spatial intelligence.

### B.7 The Design System Is Physics, Not Furniture

**Soul constraints are physics** -- non-negotiable laws of the universe the page lives in:
- `border-radius: 0`
- `box-shadow: none`
- No gradients, no rgba, no 2px borders
- Font trinity: Instrument Serif (display/philosophy), Inter (body/analysis), JetBrains Mono (code/machine)
- Color palette: Primary #E83025, Background #FEF9F5, Text #1A1A1A, all accent colors
- Spacing: 4px base unit
- Container: 940-960px max-width as DEFAULT (corridor-style width progression is permitted)
- Border hierarchy: 4px structural, 3px accent, 1px micro
- Responsive: must work at 1440px and 768px
- Accessibility: skip link, ARIA landmarks, heading hierarchy, color contrast, reduced motion, focus-visible

**Tokens.css is vocabulary** -- the words available to speak with. Colors, spacing values, border weights, font families. Every CSS value should come from the token system. But WHAT you say with those words is up to you.

**Components.css is furniture** -- pre-built things you CAN use but don't HAVE to. Available if the content calls for them. Ignored if it doesn't. The agent should never default to a pre-built component when the content demands a form that doesn't exist yet.

**The design system provides the constraints. The agent provides the invention.**

---

## C. THE ANTI-PATTERNS

### C.1 Compression as Information Murder

The pipeline compresses content through a chain of intermediaries:

```
950-line article
    v  TC derivation (94% loss)
~60-line TC brief
    v  5 specialists read 26,528-line knowledge base (97.7% loss)
~620 lines of specialist output
    v  Synthesizer merges (27% further loss)
~450 lines of builder package
    v  Builder visibility cap
~75 lines on critical execution path
    v  CSS written within those constraints
One vertical stack, different wallpaper
```

At every junction, spatial intelligence is stripped. The TC agent looks for themes and tensions, not spatial forms. The specialists look for findings and mechanisms, not layout proposals. The synthesizer packages mechanism selections, not structural hypotheses. By the time the builder touches CSS, the content has been converted into a checklist of mechanisms to deploy within a vertical stack.

The causal chain is closed. The pipeline's 59:1 compression ratio is not lossy in the general sense -- it is specifically designed to strip the SPATIAL dimension from content intelligence and retain only the TEXTURAL dimension.

### C.2 Broken Feedback Loops

The pipeline builder never sees its own work. Pass 1 builds blind. Pass 2 reads Pass 1's HTML but cannot restructure it. Pass 3 is explicitly prohibited from creative work ("CRITICAL RULE: This is a HARDENING pass, not a creative pass" and "Best Pass 3 = identical to Pass 2"). The refiner fixes compliance gaps, not spatial weaknesses.

The builder's attention degrades across passes:
- Pass 1: 20.1% creative / 79.9% procedural
- Pass 2: 14.1% creative / 85.9% procedural
- Pass 3: 4.6% creative / 95.4% procedural
- Refine: 6.8% creative / 93.2% procedural

The pipeline gets LESS creative over time. The one moment where spatial invention could happen (Pass 1) is already 80% procedural.

### C.3 Handoff Documents as Lossy Telephone

Every time one agent writes a document for another agent to read, information is lost. The first agent decides what's "relevant" based on its own frame. The second agent interprets the document through its own frame. Two frames, two sets of assumptions, two rounds of compression.

The pipeline has 4-6 handoff points between content and CSS. The single-agent model has zero. The agent reads content, forms a topology, and writes CSS. No intermediary. No telephone game.

### C.4 Infrastructure That Prevents Its Own Goal

The pipeline's core paradox: the infrastructure exists to reproduce quality that the infrastructure itself prevents.

110,000 lines of core infrastructure. 5,246 lines of pipeline prompts across 14 files. 47 gates. 74 cataloged constraints. 5 major versions. Hundreds of hours of development. 700-1,000+ agent invocations across the project lifetime.

What this produces: pages that pass every gate while looking identical. 0 spatial inventions per build. Content-form coupling rated GENERIC to ADEQUATE. 1 DOM skeleton per page.

What 17 agents with NO infrastructure produced: 18 DOM skeletons, 53/55 maturity, 4 INEVITABLE coupling grades, a widening corridor where page width IS the philosophical argument.

The infrastructure-to-output ratio: ~220:1. Lines of infrastructure per structural invention: division by zero (0 inventions from 1.29M lines).

The more sophisticated the pipeline becomes -- more gates, more rules, more validation -- the more effectively it compresses away the very quality it tries to systematize. Every improvement to the pipeline is an improvement to the compression machinery.

### C.5 The 0.6% Content Engagement Stat

Across all 1,410 lines of the 4 builder prompts, **8 lines (0.6%)** engage with the actual article content. 87.6% of prompt-directed attention is procedural. The content engagement ratio is 0.14 -- for every 1 line directing the builder toward content, 7 lines direct it toward procedures.

Of the 8 lines that DO engage with content, 6 frame the article as something to be PLACED, not UNDERSTOOD:
- "Content mapping -- All content from content.md placed into appropriate zones"
- "Content placement"

These frame the article as cargo to be distributed across zones, not a text whose meaning should drive spatial decisions.

The builder spends 0.6% of its prompt-directed attention on understanding the article it is designing.

### C.6 The Category Error

The pipeline treats page-building as "applying design to content." The correct frame is "deriving form from content."

The pipeline's metaphors NAME zones ("stratum-bedrock," "survey-parchment") but do not SHAPE them. The metaphor appears in CSS class names and background colors while the spatial structure remains identical: one column, 960px wide, top to bottom. **Naming is not shaping.**

The pipeline NEVER ASKS THE SPATIAL QUESTION, at any stage, through any agent. No agent has the vocabulary or mandate to ask "what shape should this page be?"

---

## D. THE MEASUREMENT

### D.1 The 10 Falsifiable Criteria

These criteria perfectly discriminate "in love" output from procedural output. AD-006 scores 10/10. Pipeline builds score 0/10. No overlap.

| # | Criterion | Threshold | "In Love" Example | Pipeline |
|---|-----------|-----------|-------------------|----------|
| 1 | Named grid areas use content vocabulary | 2+ content-semantic definitions | AD-006: 7 (`"doctrine references"`, `"spiral-wide"`) | 0 |
| 2 | Asymmetric grid proportions serve content hierarchy | 2+ distinct asymmetric formulas | AD-006: 4 (`3fr 1fr`, `1.618fr`, `1fr 1.618fr 1fr`) | 0-1 |
| 3 | Sections where layout loss = content loss | 2+ sections fail vertical collapse test | AD-006: 7+ sections | 0 |
| 4 | Self-referential components | 2+ components reference page's own structure | AD-006: 6 (pattern echo, scroll witness, etc.) | 0 |
| 5 | Position relative/absolute composition pairs | 2+ compositional pairs | AD-006: 3 relative + 18 absolute | 0+1 (skip-link) |
| 6 | Content-mapped color semantics | 1+ system beyond generic info/warning/error | AD-006: 4-color confidence gradient | 0 |
| 7 | Distinct spatial organization count | 4+ per page | AD-006: 9, OD-005: 5 | 1-2 |
| 8 | Transition/animation density | 6+ (transitions + keyframes + hover) | AD-006: 8+ | 2 |
| 9 | CSS comments reference content reasoning | 5+ of 10 sampled comments | AD-006: majority | 0 |
| 10 | Non-default reading directions | 1+ (writing-mode, float, transform) | AD-006: 3 | 0 |

**Scoring bands:** 7+ = content-topology state achieved. 4-6 = ambiguous. 0-3 = procedural.

### D.2 The Swap Test

The simplest diagnostic for content-form coupling:

Take any section's layout and swap it into a page about different content. Does the section break?

- **If YES** (the swap destroys meaning): the layout is content-derived. Coupling is INEVITABLE.
- **If NO** (the swap works fine): the layout is generic. Coupling is GENERIC.

Example: Take a pipeline section (960px column, 1fr 1fr grid, warm background) and put it on a different page. Works fine. Take AD-006's spiral section (golden ratio grid, named areas, confidence-gradient borders, narrowing as content deepens) and put it on a different page. Makes no sense. The spiral layout IS the argument that content deepens proportionally.

### D.3 Content-Form Coupling Grades

| Grade | Definition | Test |
|-------|-----------|------|
| **INEVITABLE** | The form could not exist without THIS specific content. Form and content are fused. | Removing the content from the form or the form from the content destroys both. |
| **STRONG** | The form clearly serves this content and would not serve other content as well. | Swap test fails for most content, but the form might work for content with similar structure. |
| **ADEQUATE** | The form is appropriate but not content-specific. A reasonable default. | Swap test passes for content with similar structure. |
| **GENERIC** | The form could house any content. A container, not an argument. | Swap test passes for all content. |
| **ABSENT** | No meaningful spatial form. Pure vertical stack. | Nothing to swap. |

Target for the /falls-in-love skill: **no section grades below ADEQUATE. Multiple INEVITABLE. Zero GENERIC or ABSENT.**

### D.4 DOM Skeleton Count as Structural Diversity Metric

Count the number of fundamentally different spatial organizations in the page. Each unique `grid-template-areas` definition, each unique positioning composition, each unique directional change, each unique flex configuration counts as a distinct DOM skeleton.

- **Pipeline average:** 1-2 (header + vertical prose)
- **Exploration average:** 5-9
- **Molly build:** 18
- **Target:** The number should be determined by content, not by a target. But if the number is below 4, the agent has not yet formed a content topology.

### D.5 The Taste Evaluation Stance

Experience first, analyze second.

Open the build. Scroll through it. Not analyzing -- experiencing. What stops you? What doesn't? Where does the spatial drama hold? Where does it soften? Where do you feel the content through the form? Where does the form feel generic -- like it could house any content?

THEN analyze. Count skeletons. Grade coupling. Check compliance. But the first impression -- the experiential one -- is the most valuable thing the evaluation produces. Write it down before the analysis overwrites it.

The taste evaluation has no rubric. No checklist. The agent looks at the whole page like a designer with 20 years of experience and says what it actually thinks. "The corridor opens. Now make the rooms as interesting as the hallway." No programmatic gate produces this observation.

---

## E. THE SPATIAL INVENTION PATTERNS

### E.1 What Kinds of Spatial Forms Hide in Content?

From the content potential map across 15 deep extractions, 8 spatial archetypes emerged. No two content pieces suggest the same topology. These are not templates to apply -- they are examples of what happens when content is read for spatial implication rather than theme extraction.

### E.2 Width as Argument (The Corridor)

The content's philosophical arc has a physical width. The Molly Panopticon page starts at 520px (institutional confinement), widens to 680px (threshold), opens to 960px (liberation), constricts to 680px (warning that the watchtower can become a prison), then dissolves for the final philosophical close.

**The page's physical width IS the article's philosophical argument.** The container is not a frame containing the content. The container IS the content.

This pattern applies whenever content has a progressive argument that opens or closes: Jaana Dogan's year-to-3-paragraphs compression funnel. Boris Cherny's vanilla-to-power paradox. Eric Buess's unhobbling stack where constraint dissolves.

Width is not the only dimension available. Padding, margin, max-width, even font-size can encode argumentative progression. The principle: **a dimension of the page's physical form varies because the content's argument varies.**

### E.3 Asymmetry as Power Encoding

When content describes power imbalances, hierarchy, or unequal relationships, symmetric grids lie about the content. A 1fr/1fr grid says "these two things are equal." If the content says they are NOT equal, the grid must say so too.

The Molly build uses 7:3 and 3:7 grid ratios for power asymmetry panels. AD-006 uses `1fr 1.618fr 1fr` to encode that the hub concept is more important than its spokes. OD-005 uses `3fr 1fr` for content/sidebar because content dominates.

**The proportion IS the hierarchy.** Gas Town's 8 roles have 3 authority tiers. The Imperator (full-width) sees everything. Workers (sharing rows) are interchangeable. The grid proportions encode what the org chart describes.

### E.4 Grid Topology as Organizational Logic

When content has N parallel items with relationships between them, those items need simultaneous visibility and spatial positioning that encodes relationships.

- **8 parallel domains** become a 4x2 grid where color coding (work=blue, life=green) makes the taxonomy visible at a glance.
- **12 factors** become a 4x3 grid where adjacency indicates relationship and position (foundational at base, operational in middle, philosophical at top) encodes category.
- **6 voices** become a hexagonal constellation with connecting lines showing cross-cutting themes.
- **8 roles** become a hub-spoke constellation where distance = independence and the Imperator occupies the center because the Imperator coordinates all others.

The pipeline renders all of these as sequential sections or tables. The spatial relationships between items -- which are often the POINT of the content -- become invisible.

### E.5 Self-Referential Components

Pages about self-observation should observe their own reader. Pages about patterns should contain miniature visual indexes of their own patterns. Pages about fractal self-similarity should demonstrate fractal self-similarity in their own structure.

Discovered instances:
- **AD-006's pattern echo grid:** 6 CSS-drawn miniature diagrams of the page's own axis patterns, including a recursive 6th cell that represents the grid containing itself (Hofstadterian strange loop).
- **OD-006's fractal annotations:** A persistent sticky sidebar with `writing-mode: vertical-lr` text showing the current fractal scale and typographic ratios as you scroll. The page commenting on its own typographic structure in real time.
- **OD-005's wave visualization:** A bar chart at the top showing the page's own density rhythm before the reader encounters it. Heights individually tuned per spoke (85px, 78px, 82px, 72px) reflecting actual content density differences.
- **Molly's self-observation module:** Live tracking of scroll depth, sections visited, corridor width, current zone. A page about self-surveillance that surveys its own reader.
- **Molly's self-referential narration:** The page tells you what it did to you.
- **CD-006's axis labels in TOC:** Table of contents includes a column showing which axis pattern each section uses. The page exposes its own structural diversity as navigation metadata.

The pattern: **if the content is ABOUT a structural concept, the page should DEMONSTRATE that concept through its own form.** The layout doesn't just present the argument -- it IS the argument.

### E.6 Content-Driven Reading Paths

The default reading path is vertical scroll, top to bottom, every section the same width. This path is content-agnostic. Content-driven paths change based on what the content demands at each point.

Discovered alternatives:
- **Hub-spoke:** Central navigation tile grid with spoke sections extending outward. Reader moves OUTWARD from center, not DOWNWARD from top.
- **Loop/spiral:** Content about iterative processes presented as physically circular layouts where the final section returns to the beginning.
- **Branching diagnostic:** Content about failure modes presented as a navigable tree, not a sequential list. Reader CHOOSES based on symptom, not reads linearly.
- **Compression/expansion:** Content about a year of work compressed to 3 paragraphs presented as a wide section physically narrowing to a tiny container then widening again.
- **Filtration:** Content about iterative refinement (95% garbage -> 50% -> workable) presented as visual noise reducing section by section. Reader EXPERIENCES the refinement.
- **Timeline/rhythm:** Content about daily workflows presented as a 24-hour vertical timeline with activity weaving in and out of life gaps.
- **Progressive stacking:** Content about layered architectures where each component wraps the previous, presented as a page that physically grows as layers are added.
- **Constellation navigation:** Content about communities or multiple actors presented as a spatial map where position encodes relationships and the reader navigates by selecting nodes.

### E.7 What the Pipeline Systematically Destroys

The 8 categories of spatial intelligence that vertical-stack rendering eliminates:

1. **Spatial simultaneity** -- parallel items that need to be visible AT ONCE become sequential sections
2. **Spatial relationships** -- who connects to whom, what depends on what, becomes invisible
3. **Physical metaphors** -- stacks, loops, funnels, constellations become prose ABOUT stacks, loops, funnels, constellations
4. **Navigation** -- branching diagnostic content becomes forced linear reading
5. **Temporal rhythm** -- timelines and daily patterns become lists
6. **Accumulation dynamics** -- compounding and refinement effects become uniform formatting
7. **Container semantics** -- width, boundaries, and containment lose their meaning in a fixed-width page
8. **Revelation dynamics** -- content about discovery and hidden things loses its progressive disclosure potential

---

## F. THE SYNTHESIS: ONE PARAGRAPH

"Falls in love" is a content-topology formation process in which an Opus-class agent, given sufficient unmediated exposure to content under a hypothesis-driven frame, forms persistent multi-hop associations from content semantics to spatial implications. These associations then dominate all subsequent CSS decisions, producing output characterized by content-semantic grid names, asymmetric proportions encoding hierarchy, self-referential components, layered positioned composition, non-default reading directions, content-mapped color semantics, and high spatial organization diversity. The state is prevented by procedural intermediation (mandated reading order, vertical-first building, structural proposition menus), truncated by numerical caps (max 2 structural sections), and suppressed by cultural signals (structure framed as risky, zero structural evolution as "expected"). It is produced by hypothesis-driven framing, direct content access, rich spatial vocabulary from curated research, and absence of procedural overhead during the creative phase. The 10 falsifiable criteria discriminate perfectly between "in love" output (AD-006: 10/10, OD-005: 9/10) and procedural output (pipeline: 0/10).

---

## G. IMPLICATIONS FOR THE /falls-in-love SKILL

The skill must create conditions for the cognitive state, not instructions for CSS output.

**What the skill must ensure:**
1. The agent reads all content before reading any design reference
2. The agent has access to the full research/vocabulary, uncompressed
3. No intermediary filters, compresses, or curates what the agent sees
4. No structural caps (max 2 sections, max 1 evolution)
5. No "build vertical first" mandate
6. No reading order mandate (package first)
7. No exit condition except genuine satisfaction
8. The agent looks at its own work continuously (screenshots, DOM inspection)
9. The agent's own critique drives the next wave, not an external evaluator
10. The HTML file IS the memory -- no handoff documents needed

**What the skill must NOT do:**
1. Tell the agent what spatial form to build
2. Give it a checklist of mechanisms to deploy
3. Set a fixed number of passes
4. Compress research through intermediaries
5. Separate "building" from "evaluating" into distinct phases
6. Define an exit condition based on metrics or compliance
7. Prevent the agent from inventing spatial forms not in any catalog
