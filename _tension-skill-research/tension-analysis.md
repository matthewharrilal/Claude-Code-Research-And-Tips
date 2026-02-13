# Tension Derivation Layer: Deep Analysis

## Research Agent: Tension Analyst
## Date: 2026-02-12
## Source Material: TENSION-PROTOCOL.md, SOUL-DEFINITION.md (component-system), SKILL.md (tension-composition)

---

## 1. GENUINE vs COSMETIC Tension: Precise Criteria

### The Defining Test

A tension is **GENUINE** when it cannot be resolved by addition. A tension is
**COSMETIC** when Side A's needs can be served by simply selecting from Side B's
existing tools.

This is the single most important diagnostic. Here is the test, stated as
precisely as possible:

**THE ADDITION TEST:**
> Can you fulfill the reader's need by selecting and placing existing design
> system components without transforming their meaning?
>
> YES = COSMETIC (no tension, assembly is sufficient)
> NO = GENUINE (tension exists, metaphor required)

### Why Addition Fails as Resolution

When the reader needs "clear hierarchy" and the system provides heavy borders,
serif/sans typography hierarchy, and mathematical spacing -- there is no
opposition. You simply USE the hierarchy tools. The need and the provision are
compatible. You are selecting tools from a kit that already matches.

When the reader needs "warmth and invitation" and the system provides sharp
edges, flat surfaces, and institutional precision -- you cannot ADD warmth.
There is no warmth component to select. The system's vocabulary does not contain
the word the reader needs. You must find a way to make the EXISTING vocabulary
say something it was not designed to say. That act of making sharp edges convey
warmth IS the creative composition. That is tension.

### Formal Criteria for Genuine Tension

A tension is genuine when ALL THREE of these conditions hold:

1. **Semantic opposition**: Side A's emotional/experiential need is semantically
   opposed to Side B's personality. "Warmth" opposes "austerity." "Softness"
   opposes "angularity." "Spontaneity" opposes "precision." The opposition must
   be at the level of MEANING, not merely at the level of implementation detail.

2. **Vocabulary gap**: Side B has no direct tool for Side A's need. The design
   system's component library, token set, and pattern vocabulary do not contain
   a mechanism that directly serves the reader's need. There is no component
   you can instantiate that DIRECTLY produces the needed feeling.

3. **Structural overlap despite emotional opposition**: Even though the sides
   are emotionally opposed, they share structural properties. "Warmth" and
   "sharp edges" are emotionally opposed, but both can operate through
   layering, ordering, and depth. This structural overlap is what makes a
   bridge (metaphor) possible. Without it, the tension is not productive --
   it is simply impossible.

### Formal Criteria for Cosmetic Tension

A tension is cosmetic when ANY of these conditions hold:

1. **False opposition**: The semantic opposition is superficial. "The reader
   needs clarity" vs "the system provides clarity" -- there is no opposition.
   The word "tension" is being applied to what is actually a match.

2. **Direct tool available**: Side B already has a mechanism that serves Side
   A's need. "The reader needs to compare options" and the system has the
   Reasoning Box and Decision Matrix. The need is directly served. No
   transformation required.

3. **Decoration substitution**: The "tension" can be resolved by adding
   decorative elements (a label, a header, a color accent) rather than by
   transforming the meaning of existing elements. If the resolution is
   "add a section label that says WELCOME," the tension was cosmetic.

### The Spectrum (Not Binary)

In practice, tension exists on a spectrum. The boundaries:

```
NO TENSION ---- COSMETIC ---- WEAK GENUINE ---- STRONG GENUINE ---- IMPOSSIBLE
    |               |              |                   |                  |
  direct         surface        requires           requires          no bridge
  match          styling        moderate            deep               exists
                 suffices       reframing           metaphor
```

**No tension**: Reader needs structure. System IS structure.
**Cosmetic**: Reader needs emphasis. System has borders and red accent. Apply them.
**Weak genuine**: Reader needs narrative flow. System is episodic/block-based. Requires sequencing invention but not deep metaphor.
**Strong genuine**: Reader needs warmth. System is austere. Requires metaphorical transformation.
**Impossible**: Reader needs real-time interactivity. System is static HTML. No bridge within the system's vocabulary.

The pipeline's sweet spot is STRONG GENUINE. That is where metaphor lives.

---

## 2. Tension RICHNESS Evaluation: Formalized

### What Makes One Tension Richer Than Another?

When Phase 1 (multi-axis questioning) produces multiple axes, each generating
its own tension against Side B, the pipeline must SELECT the richest tension for
metaphor collapse. Richness is not simply "how many sub-tensions exist." It is a
compound property with three measurable dimensions:

### Dimension 1: Opposition Depth

How many LAYERS of opposition exist between Side A and Side B?

A shallow opposition has one layer:
```
Reader needs: softness
System provides: sharpness
Opposition layers: 1 (soft vs sharp)
```

A deep opposition has multiple layers:
```
Reader needs: warmth, graduated trust, invitation, progressive depth
System provides: austerity, binary vocabulary, formality, visual sameness
Opposition layers: 4 (warmth/austerity, graduated/binary, invitation/formality, progressive/sameness)
```

Depth matters because multi-layered opposition demands a metaphor that resolves
SIMULTANEOUSLY on multiple dimensions. The geological metaphor resolved ALL FOUR
tensions in OD-004. A metaphor that resolves only one layer would leave the
other three unresolved, producing partial composition -- correct in one
dimension, mechanical in the others.

**Scoring:**
- 1 layer = LOW richness
- 2-3 layers = MEDIUM richness
- 4+ layers = HIGH richness

### Dimension 2: Structural Overlap Density

How many structural properties do both sides share despite their emotional
opposition?

Structural properties are properties about FORM, not feeling: ordering,
layering, containment, branching, cycling, compression, expansion, nesting,
sequencing, repetition, accumulation, stratification.

The more structural properties the two sides share, the richer the tension,
because each shared property is a potential bridge material for the metaphor.

```
Side A structural properties: layering, ordering, depth, compression
Side B structural properties: angular, flat, layered, categorized, precise
Shared: layering, ordering (implied by categorization)
Overlap density: 2
```

More overlap = more paths to a metaphor = richer tension.

**Scoring:**
- 0-1 shared properties = LOW (metaphor will be forced)
- 2-3 shared properties = MEDIUM (metaphor has options)
- 4+ shared properties = HIGH (metaphor is almost inevitable)

**GOLDILOCKS ZONE (from metaphor-analyst cross-reference):**
Structural overlap has an UPPER bound as well as a lower bound:
- Below 30% overlap = EXTREME tension, requires unconventional resolution
  (literalism, self-reference -- OD-006 territory)
- 40-70% overlap = IDEAL for metaphor collapse (enough bridge material,
  enough opposition to be genuine)
- Above 80% overlap = NO real tension (assembly territory -- the sides are
  too similar to create productive opposition)

This means the richness formula's Structural Overlap dimension is not
monotonically increasing. The scoring should be:
- 0-1 shared / below 30% overlap = LOW (1) -- too little bridge material
- 2-3 shared / 40-70% overlap = HIGH (3) -- Goldilocks zone
- 4+ shared / above 80% overlap = MEDIUM (2) -- overlap so high it may
  indicate cosmetic tension rather than genuine opposition

### Dimension 3: Metaphor Space Width

How many DISTINCT metaphor candidates does the tension suggest?

A narrow tension constrains to a single metaphor family:
```
"Reader needs musical rhythm, system is angular"
Metaphor candidates: percussion (angular rhythm)
Width: 1 family
```

A wide tension opens multiple metaphor families:
```
"Reader needs warmth from sharp edges"
Candidates: geological strata, architectural blueprint, archaeological dig,
            tectonic plate survey, sedimentary record, terraced landscape
Width: 6 families
```

Width matters because:
- A single candidate cannot be tested against alternatives (no competitive
  selection)
- Multiple candidates enable the metaphor testing step (Phase 3.4 in the skill)
  to select the best resolution
- If the first candidate fails, alternatives exist

**Scoring:**
- 1 candidate = LOW (fragile, no alternatives)
- 2-4 candidates = MEDIUM (healthy selection)
- 5+ candidates = HIGH (rich creative space)

### The Richness Formula

```
RICHNESS = Opposition Depth x Structural Overlap Density x Metaphor Space Width
```

This is multiplicative, not additive. A tension with deep opposition but zero
structural overlap produces ZERO richness (impossible to bridge). A tension
with high structural overlap but shallow opposition produces low richness
(the metaphor is obvious and uninteresting).

The richest tensions score HIGH on all three dimensions: deep multi-layered
opposition, dense structural overlap, and wide metaphor space.

### Practical Selection Protocol

When comparing tensions from multiple axes:

1. Score each tension on all three dimensions (LOW/MEDIUM/HIGH = 1/2/3)
2. Multiply scores: Opposition x Overlap x Width
3. Select the tension with the highest product
4. In case of tie: prefer the tension whose opposition layers create the
   most SURPRISING bridge -- surprise is what makes composition memorable

Example comparison:
```
FEEL axis tension:
  Opposition: 4 layers (HIGH = 3)
  Overlap: 3 shared properties (MEDIUM = 2)
  Width: 6 metaphor families (HIGH = 3)
  Richness: 3 x 2 x 3 = 18

UNDERSTAND axis tension:
  Opposition: 2 layers (MEDIUM = 2)
  Overlap: 4 shared properties (HIGH = 3)
  Width: 3 metaphor families (MEDIUM = 2)
  Richness: 2 x 3 x 2 = 12

FEEL axis wins (18 > 12).
```

---

## 3. Tension PATTERNS Against KortAI Specifically

### The System's Personality Profile

Before mapping tensions, we must name KortAI's personality precisely. Not its
rules -- its PERSONALITY. Rules are what it enforces. Personality is how it
FEELS to encounter.

**KortAI feels like:**
- An unhurried editor at a serious publication
- A geological survey map, not a tourist brochure
- A government document that takes itself seriously enough to be beautiful
- A professor's office with bare walls, precise shelving, and expensive paper

**KortAI's personality axes:**
```
WARM ←————————————————→ AUSTERE      [KortAI sits at 75% austere]
SOFT ←————————————————→ ANGULAR      [KortAI sits at 95% angular]
PLAYFUL ←—————————————→ SERIOUS      [KortAI sits at 85% serious]
ORGANIC ←—————————————→ GEOMETRIC    [KortAI sits at 100% geometric]
BUSY ←————————————————→ SPARSE       [KortAI sits at 70% sparse]
FLEXIBLE ←————————————→ RIGID        [KortAI sits at 80% rigid]
CASUAL ←——————————————→ FORMAL       [KortAI sits at 80% formal]
COLORFUL ←————————————→ RESTRAINED   [KortAI sits at 90% restrained]
```

### The Tension Landscape: Complete Map

For each category of reader need, I evaluate tension strength against KortAI's
specific constraints. The rating is:

- **NONE**: System already provides this. Assembly, not composition.
- **WEAK**: Minor reframing needed. Existing tools can be sequenced differently.
- **MODERATE**: Real opposition exists but structural overlap is high.
- **STRONG**: Deep opposition with good structural overlap. Prime metaphor territory.
- **EXTREME**: Opposition so deep that bridging may be impossible or require system extension.

#### Category 1: Emotional/Sensory Needs

| Reader Need | Opposing System Property | Tension Strength | Why |
|---|---|---|---|
| Warmth / comfort | Sharp edges, flat surfaces, angular geometry | **STRONG** | System has zero soft tools. But warmth can come from conceptual familiarity (geology = foundation = warmth). Structural overlap: layering, depth. |
| Softness / gentleness | `border-radius: 0`, all rectangles, heavy borders | **EXTREME** | System is at 95% angular. Almost no bridge material. Only path: reframe softness as spaciousness (generous whitespace). Narrow metaphor space. |
| Playfulness / whimsy | Formal typography, institutional precision, monospace labels | **STRONG** | System is deeply serious. But playfulness can be reframed as intellectual curiosity or scientific delight. Structural overlap: rhythm, pattern, surprise. |
| Excitement / energy | Measured spacing, editorial calm, unhurried pace | **MODERATE** | System has Sanrok red (`#E83025`) as its only energy tool. Red border-left accents can create urgency. Partial vocabulary exists. |
| Mystery / intrigue | Explicit labeling, monospace precision, transparent backgrounds | **STRONG** | System labels everything explicitly. Mystery requires withholding. But the system's restraint (limited palette, minimal decoration) already suggests something held back. Overlap: negative space, restraint, implication. |
| Comfort / safety | Institutional tone, formal labels, sharp containment | **STRONG** | Same as OD-004's core tension. Proven bridge: geological strata, familiar frameworks. Rich metaphor space. |
| Tenderness / intimacy | Editorial distance, measured voice, authority posture | **EXTREME** | System maintains maximum editorial distance. Intimacy requires closeness the system's typography hierarchy actively prevents. Very narrow metaphor space. |

#### Category 2: Cognitive/Structural Needs

| Reader Need | Opposing System Property | Tension Strength | Why |
|---|---|---|---|
| Hierarchy / structure | Typography hierarchy, border weights, spacing scale | **NONE** | System IS hierarchy. Direct tool match. No tension. |
| Clarity / precision | Monospace labels, mathematical spacing, limited palette | **NONE** | System IS precision. Direct tool match. No tension. |
| Comparison / juxtaposition | Reasoning Box, Decision Matrix, two-column grid | **WEAK** | System already has comparison tools. Tension only if comparing non-tabular things (emotions, experiences). |
| Narrative flow / storytelling | Block-based episodic layout, discrete components | **MODERATE** | System segments; stories flow. But sequential ordering with transition markers can create narrative. Structural overlap: sequence, progression. |
| Causal understanding | Flat layout (no visual cause-effect arrows/flows) | **MODERATE** | System has no flow mechanism. But sequential stacking with border-weight encoding can imply causality. Moderate metaphor space. |
| Spatial relationships | Linear vertical scroll, no 2D spatial layout | **STRONG** | System is strictly 1D (vertical). Reader needing to understand spatial relationships (maps, networks, topologies) creates deep tension. Metaphor space: grids, matrices, coordinates. |
| Temporal understanding | Static page, no animation, no timeline component | **MODERATE** | System is atemporal. But vertical = chronological is a strong cultural convention. Moderate bridge. |

#### Category 3: Action/Decision Needs

| Reader Need | Opposing System Property | Tension Strength | Why |
|---|---|---|---|
| Choosing between options | Decision Matrix exists | **WEAK** | Tool exists. Tension only if choices are non-tabular. |
| Step-by-step guidance | Task Progression component exists | **WEAK** | Tool exists. Tension only if steps are non-linear. |
| Evaluation / assessment | No assessment mechanism beyond text | **MODERATE** | System has no scoring/rating tools (by design -- "no star ratings"). Reader needing to evaluate must be guided through typography and structure. |
| Troubleshooting / diagnosis | No conditional branching visualization | **STRONG** | "If X, then Y" logic requires branching the system cannot natively express. Decision trees are anti-pattern (too SaaS). Metaphor space: geological fault diagnosis, archaeological excavation, forensic analysis. |
| Quick reference / lookup | Content is long-form editorial, not scannable | **MODERATE** | System's editorial personality resists reference-table density. But bento-grid-style information compression is validated in AD explorations. |

#### Category 4: Transformation/Identity Needs

| Reader Need | Opposing System Property | Tension Strength | Why |
|---|---|---|---|
| Becoming a practitioner | System is observational (editorial = observer's voice) | **MODERATE** | Editorial voice describes; practitioner voice builds. Tension between showing and doing. |
| Building confidence | System's institutional tone can feel intimidating | **STRONG** | Reader uncertain of their abilities encountering a system that radiates authority and precision. The system's confidence can make the reader feel less confident. Rich metaphor space: apprenticeship, workshop, laboratory. |
| Joining a community | System is individual/editorial (no social mechanisms) | **STRONG** | Editorial is fundamentally a monologue from expert to reader. Community is dialogue, shared space, multiple voices. Deep opposition. |
| Developing taste/judgment | System demonstrates taste but does not teach it | **MODERATE** | The system IS good taste. But demonstrating taste is not the same as developing it. Moderate bridge: comparison exercises, before/after, progressive refinement. |

### RECONCILE Axis: Highest-Scoring Tension (Correction)

Initial analysis underestimated the RECONCILE axis (from axis-researcher).
Running it through the richness formula:

```
RECONCILE — "What opposing ideas must the reader hold simultaneously?"

Opposition Depth: 4 layers (HIGH = 3)
  1. Challenge vs Assert (system asserts; reconciliation challenges)
  2. Holding-open vs Closure (system drives toward decisive endpoints)
  3. Equal validity vs Hierarchy (system ranks; reconciliation holds level)
  4. Process vs Conclusion (system presents conclusions; reconciliation IS process)

Structural Overlap: 4 shared properties (HIGH = 3)
  Shared: sequencing, containment, parallel structure, categorization
  NOTE: System already has parallel containment (Reasoning Box, Decision Matrix,
  Core Abstraction). The tension is NOT in parallelism — it is in the VERDICT.
  The system always drives toward a summary/recommendation. RECONCILE holds open.

Metaphor Space: 7+ families (HIGH = 3)
  Courtroom deliberation, Socratic dialogue, scientific peer review,
  parliamentary debate, geological plate convergence, river confluence,
  metallurgical alloying

RICHNESS = 3 x 3 x 3 = 27 (MAXIMUM POSSIBLE)
```

This makes RECONCILE the single richest tension identified against KortAI.
The initial error was conflating "the system is hierarchical" with "the system
cannot hold things in parallel." It CAN (Reasoning Box) — it just always
resolves toward verdict. The tension is in the verdict-drive, not the
parallelism.

### Summary: The Richest Tension Territory

The **STRONGEST** tensions against KortAI cluster around:

1. **Reconciliation vs. verdict-drive** (richness: 27, unexplored, highest potential)
2. **Warmth/comfort vs. austerity** (richness: 18, proven: OD-004)
3. **Playfulness vs. formality** (unexplored, high potential)
4. **Mystery/intrigue vs. explicit labeling** (unexplored, high potential)
5. **Spatial understanding vs. linear scroll** (unexplored, technical challenge)
6. **Troubleshooting/diagnosis vs. no branching** (unexplored, high practical value)
7. **Building confidence vs. institutional intimidation** (unexplored, high reader value)
8. **Community/dialogue vs. editorial monologue** (unexplored, very deep opposition)

The **WEAKEST** tensions (assembly territory):

1. Hierarchy/structure -- system already IS this
2. Clarity/precision -- system already IS this
3. Step-by-step guidance -- component already exists
4. Choosing between options -- component already exists

---

## 4. The Structural Overlap Principle: Deep Explanation

### The Central Claim

> **The tension is emotional; the bridge is structural.**

This means: the OPPOSITION between Side A and Side B is at the level of
feeling, experience, and meaning. But the BRIDGE (metaphor) that resolves the
tension works at the level of form, structure, and pattern.

### Why This Must Be So

Consider the alternative. If the bridge were also emotional, it would mean
finding a feeling that is simultaneously warm AND austere. Such feelings exist
(nostalgia is both warm and melancholy; reverence is both warm and formal) but
they are compromises -- averaging between the two sides rather than resolving
the opposition. An emotional bridge produces emotional averaging: the page feels
"kind of warm and kind of austere." This is mediocrity, not composition.

A structural bridge works differently. It says: "Warmth and austerity are
emotionally opposed. But BOTH can be expressed through layering." The bridge is
not an emotion. It is a FORM that can carry either emotion depending on
context. Geological strata are layered. Layering is structural, not emotional.
But geological layering conveys DEPTH (warmth: foundation, stability, history)
THROUGH angular forms (austerity: sharp edges, flat surfaces, precise
boundaries).

The structural bridge does not average between warm and austere. It creates a
form where the SAME structure is simultaneously warm in one reading
(foundational depth) and austere in another (angular precision). The reader
experiences both simultaneously without either being compromised.

### The Metaphor Selection Mechanism

This explains WHY structural overlap predicts metaphor quality:

```
Side A emotional qualities: warm, inviting, graduated, progressive
Side A structural properties: layering, depth, ordering, compression

Side B emotional qualities: austere, angular, precise, institutional
Side B structural properties: flat, layered, categorized, mathematical

Structural overlap: LAYERING, ORDERING
```

The metaphor must live in the overlap. It must be a real-world domain where
LAYERING and ORDERING naturally occur AND where the emotional qualities of
BOTH sides are present simultaneously.

- Geological strata: layered (YES), ordered by depth (YES), warm/foundational
  (YES), angular/sharp (YES) = EXCELLENT bridge
- Ocean waves: layered (sort of), ordered (no -- chaotic), warm (YES), angular
  (NO) = POOR bridge (fails on Side B)
- Spreadsheet: layered (YES), ordered (YES), warm (NO), angular (YES) = POOR
  bridge (fails on Side A)

The structural overlap is the FILTER. It eliminates metaphors where one side's
emotional qualities cannot be expressed. What survives the filter is the set
of metaphors where both sides' emotional qualities coexist naturally.

### Why Emotional Opposition + Structural Overlap = Good Metaphor Conditions

Stated as a principle:

> **Maximum emotional distance + maximum structural proximity = maximum metaphor potential.**

The emotional distance ensures the tension is genuine (not cosmetic). If both
sides feel the same way, there is nothing to bridge.

The structural proximity ensures a bridge EXISTS. If both sides share no
structural properties, there is no material from which to build a metaphor.

The combination ensures that the metaphor, when found, will be SURPRISING (it
bridges an emotional gap) and COHERENT (it uses shared structural forms).

Surprise + coherence = the subjective experience of composition rather than
assembly. The reader thinks: "I didn't expect sharp edges to feel warm, but
now that I see it, it makes perfect sense." That "didn't expect" is the
emotional distance. That "makes perfect sense" is the structural proximity.
Together they create the feeling the Tension Protocol calls "beauty" or
"taste recognition."

---

## 5. When Tension FAILS

### Failure Mode 1: Zero Tension (No Metaphor Needed)

**Condition**: The content's needs perfectly align with the system.

**Example**: A technical API reference page. The reader needs precision,
hierarchy, and structured lookup. KortAI IS precision, hierarchy, and
structure. There is no gap.

**Pipeline behavior**: Phase 2 (tension derivation) produces the output
"NO GENUINE TENSION FOUND." This is NOT a failure of the pipeline. It is a
correct diagnosis. The content is Track 1 (assembly). The pipeline should
proceed directly to component selection and layout -- no metaphor needed.

**The risk**: If the pipeline FORCES tension where none exists, it produces
artificial tension -- tension manufactured to justify a metaphor that the
content does not need. Artificial tension produces decoration: a metaphor
layered on top of content that was already well-served by direct rendering.
The reader sees the decoration and thinks "this is overwrought."

**Detection**: Ask "If I remove the metaphor, does the page lose anything
meaningful?" If the answer is no, the tension was artificial. The page was
already complete without it.

**Correct output**: "This content has LOW/NO tension with the system.
Recommended approach: ASSEMBLY (direct component selection, no metaphor
layer). The system's existing tools serve this content's needs directly."

### Failure Mode 2: Excessive Tension (Metaphor Impossible)

**Condition**: The content's needs are so fundamentally opposed to the system
that no metaphor can bridge the gap within the system's vocabulary.

**Example**: Content that requires the reader to feel physically immersed --
a VR walkthrough, a spatial exploration, a dynamic simulation. KortAI is
static, flat, 2D. The gap between "immersion" and "flat static page" has no
bridge within the system's tools.

**Pipeline behavior**: Phase 3 (metaphor collapse) produces zero viable
candidates. Every candidate either fails on Side A (does not convey the needed
experience) or fails on Side B (requires CSS properties that violate the soul).

**The risk**: If the pipeline FORCES a metaphor, it produces one of two
pathologies:
1. **Soul violation**: The metaphor requires rounded corners, shadows, or
   gradients to work. The implementer adds them "just this once." The soul
   erodes.
2. **Forced metaphor**: A metaphor is selected that technically works within
   the vocabulary but does not actually resolve the tension. The reader
   sees through it. The page feels pretentious -- it claims to be doing
   something it is not.

**Detection**: If the metaphor candidate testing (Phase 3.4) produces no
candidate that resolves more than 50% of constituent tensions, the tension
is likely excessive.

**Correct output**: "This content has EXCESSIVE tension with the system.
No metaphor bridge found within the system's vocabulary. Recommended
approaches:
(a) Reframe the reader need -- is there a less opposed framing that is
    still genuine?
(b) Accept assembly -- render the content directly, acknowledging that the
    system's personality will dominate.
(c) External media -- use the content's own media (video, interactive
    elements) alongside the system's static rendering."

### Failure Mode 3: Artificial Tension (Manufactured Opposition)

**Condition**: The pipeline operator manufactures tension by exaggerating
the reader's needs or mischaracterizing the system's constraints.

**Example**: "The reader DESPERATELY needs warmth" when the actual content is
a changelog. Changelogs do not create desperate need for warmth. The operator
has inflated the emotional register to force tension into existence.

**Detection**: The key diagnostic question:
> "Is this reader need genuinely driven by THIS SPECIFIC content, or am I
> projecting a need to make the pipeline interesting?"

If the need can only be stated in vague, universal terms ("the reader always
needs warmth," "documentation should always feel inviting"), it is manufactured.
Genuine needs are SPECIFIC to the content: "a reader encountering uncertain
evidence needs to calibrate trust BECAUSE the content mixes established and
speculative material."

The word BECAUSE is the test. If you cannot complete the sentence "the reader
needs X BECAUSE [specific content property]," the need is manufactured.

### Failure Mode 4: Stale Tension (Tension Already Resolved Upstream)

**Condition**: A tension that was genuine in one exploration has already been
resolved, and re-using the same tension produces a copy rather than a
composition.

**Example**: After OD-004, any page about confidence stratification is
tempted to re-use the geological metaphor. The tension "warmth vs. austerity
for uncertain content" has ALREADY been resolved. Re-applying it produces
a copy of OD-004, not a new composition.

**Detection**: "Has this specific tension been resolved before in the
exploration corpus? If yes, does the new content genuinely demand the same
resolution, or does it demand a different one?"

**Correct response**: Force a DIFFERENT metaphor by adding constraints.
"The geological metaphor is taken. What OTHER domain resolves warmth vs.
austerity in an angular system?" This constraint forces creative novelty
while preserving the tension's validity.

### Failure Mode 5: Partial Tension (One Side Is Weak)

**Condition**: Either the reader need is genuine but vague, or the system
constraint is real but not deeply characterized.

**Example**: "The reader needs... understanding." This is too vague to create
real tension. Understanding of WHAT? In what context? With what emotional
stakes? The vaguer Side A is, the weaker the tension, because there is nothing
specific to oppose.

Similarly: "The system is... minimalist." This is too vague a characterization
of Side B. The system is not merely minimalist -- it is specifically angular,
specifically serif-for-authority, specifically monospace-for-meta, specifically
red-as-sole-accent. The more precise the characterization of Side B, the
sharper the tension, because the opposition becomes specific.

**Correction**: Both sides must be characterized at maximum specificity before
tension can be evaluated. Phase 1 (multi-axis questioning) produces specific
reader needs. Phase 2 requires equally specific system personality reading.

---

## 6. Implications for Adjacent Research Roles

### For the Axis Researcher

The axes that produce the RICHEST tension are those that operate in emotional/
experiential territory where KortAI has the least native vocabulary:

- **FEEL axis**: Almost always produces strong tension because KortAI's
  emotional vocabulary is narrow (red = urgency/authority, cream = warmth
  background, everything else = neutral/institutional)
- **BECOME axis**: Produces strong tension when transformation involves
  identity change -- the system is built for observation, not transformation
- **NAVIGATE axis**: Produces moderate-to-strong tension when content has
  non-linear topology -- the system is strictly vertical
- **TRUST axis**: Produces strong tension when content has mixed confidence
  levels -- the system's binary vocabulary must express gradients

The axes that produce WEAKEST tension against KortAI:
- **UNDERSTAND axis when content is hierarchical**: System already IS hierarchy
- **DO axis when task is sequential**: Task Progression component already exists
- **COMPARE axis when comparison is tabular**: Decision Matrix already exists

**Recommendation to axis researcher**: When discovering new axes, evaluate them
against this tension landscape. An axis is most valuable to the pipeline when
it TENDS to produce genuine tension against KortAI's specific constraints.
An axis that consistently produces cosmetic tension against KortAI (because the
system already handles it natively) is lower priority.

### For the Metaphor Analyst

The quality of a metaphor is PREDICTED by tension quality. Specifically:

- **High-richness tension (score 18+)**: Will produce metaphors that resolve on
  multiple dimensions simultaneously. The metaphor will feel "inevitable" --
  as if it was the only possible resolution. This is the OD-004 level.

- **Medium-richness tension (score 8-17)**: Will produce metaphors that resolve
  the primary tension but leave secondary tensions partially unresolved. The
  metaphor will feel "appropriate" but not "magical."

- **Low-richness tension (score 1-7)**: Will produce metaphors that feel forced
  or decorative. The metaphor resolves a thin opposition and does not generate
  the internal coherence that makes compositions memorable.

**The structural overlap finding is critical for metaphor work**: The metaphor
does not bridge the EMOTIONAL gap directly. It bridges the STRUCTURAL gap.
The metaphor analyst should focus on extracting structural properties from both
sides and finding domains where those structures naturally coexist. The
emotional resolution is a CONSEQUENCE of structural bridging, not a goal to
be pursued directly.

**The key question for metaphor candidate testing**: "In this metaphor domain,
are the system's constraints NATURAL or IMPOSED?" If geological strata are
naturally sharp-edged, the system's `border-radius: 0` is natural. If ocean
waves are naturally curved, forcing them into angular containers is imposed.
Natural = good metaphor. Imposed = forced metaphor.

---

## 7. Enrichment Recommendations for SKILL.md Phase 2

Based on this analysis, the following should be added to the Phase 2 section
of the skill file:

### Addition 1: The Addition Test (Replace "GENUINE or COSMETIC?" rating)

Replace the current yes/no rating with the formal test:
> "Can you fulfill this need by selecting existing components without
> transforming their meaning?"

### Addition 2: The Richness Formula

Add the three-dimensional scoring system (Opposition Depth x Structural
Overlap Density x Metaphor Space Width) to the "Selecting the Richest Tension"
subsection.

### Addition 3: KortAI Tension Landscape Reference

Include a condensed version of the tension map (Section 3 above) as a
reference table so pipeline operators can quickly assess tension strength
for common reader needs.

### Addition 4: Failure Mode Detection

Add a "Tension Validity Check" step after tension derivation:
1. Is the tension genuine? (Addition Test)
2. Is it rich enough? (Richness score >= 8)
3. Is it bridgeable? (Structural overlap >= 2)
4. Is it novel? (Not a copy of a previous exploration's tension)
5. Is it content-driven? (BECAUSE test passes)

If any check fails, document why and either:
- Reframe the reader need more specifically
- Accept assembly (no metaphor needed)
- Force novelty (exclude resolved metaphor families)

### Addition 5: The Emotional/Structural Split

Make explicit in the skill that tension derivation has two sub-steps:
1. **Emotional analysis**: What does the reader FEEL that the system cannot
   make them feel? (This is Side A minus Side B at the emotional level.)
2. **Structural analysis**: What structural properties do both sides share?
   (This is Side A intersect Side B at the structural level.)

The tension is in (1). The bridge material is in (2). Both must be documented
before proceeding to Phase 3.

---

## 8. Edge Cases and Special Situations

### Mixed-Tension Content

Some content creates DIFFERENT tensions at different points. A tutorial that
starts as "building confidence" (strong tension) and ends as "reference lookup"
(no tension) has MIXED tension topology. The metaphor may apply to some sections
but not others. This is fine -- the metaphor covers the high-tension sections
and direct assembly covers the low-tension sections. The composition is the
HIGH-tension sections. The assembly sections provide rest and utility between
compositional moments.

### Tension That Varies by Audience

The same content creates different tensions for different readers. A beginner
encountering API documentation feels the warmth/austerity tension (they need
reassurance the system does not natively provide). An expert encountering the
same content feels NO tension (they want precision, and the system IS
precision). The pipeline should derive tension from the PRIMARY audience's
needs, not from an averaged reader.

### Multi-Axis Compound Tension

Sometimes two or more axes produce tensions that COMBINE into a richer
compound tension than either alone:

```
FEEL: Reader needs warmth. System is austere.
NAVIGATE: Reader needs non-linear paths. System is linear.
COMPOUND: Reader needs warm non-linear exploration in an austere linear system.
```

The compound tension is richer than either component because it demands a
metaphor that resolves BOTH simultaneously. "Garden" resolves warmth
(organic) but fails on angular. "Map" resolves non-linear but fails on
warmth. "Geological survey with multiple drill sites" resolves both:
angular (geological), warm (foundational), non-linear (multiple entry
points), linear (each drill site is vertical). The compound tension
produced a more specific metaphor than either tension alone.

**Recommendation**: Always check whether multiple axis tensions can COMPOUND
before selecting a single axis tension. The compound may score higher on the
richness formula.

---

## Summary of Key Discoveries

1. **The Addition Test** is the sharpest diagnostic for genuine vs cosmetic
   tension: "Can you fulfill this need by ADDING existing components without
   transforming their meaning?"

2. **Richness is three-dimensional**: Opposition Depth x Structural Overlap
   Density x Metaphor Space Width. All three must be present.

3. **KortAI's strongest tension territory** is emotional warmth, playfulness,
   mystery, and community -- all domains where its austere, angular, formal
   personality creates maximum opposition.

4. **KortAI's zero-tension territory** is hierarchy, precision, and structured
   comparison -- domains where it natively excels.

5. **The bridge is structural, not emotional.** The metaphor resolves
   emotional opposition by finding a domain where shared structural properties
   carry both emotions simultaneously.

6. **Five failure modes**: zero tension, excessive tension, artificial tension,
   stale tension, and partial tension. Each has specific detection criteria.

7. **Compound tensions from multiple axes** can produce richer territory than
   any single axis alone.

8. **The BECAUSE test** prevents manufactured tension: "The reader needs X
   BECAUSE [specific content property]."
