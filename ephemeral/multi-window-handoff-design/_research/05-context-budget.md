# The Shape of Creative Space

What follows is not a budget exercise. It is a map of creative possibility -- how much room a builder has to think, what occupies that room, and how the composition of that room changes the nature of what gets built.

---

## 1. The Canvas: Claude Opus 4.6

| Parameter | Value |
|-----------|-------|
| Context window | 200,000 tokens |
| Max output tokens | 32,000 tokens (16,000 default, 32k with extended thinking) |
| Approximate conversion | ~4 chars per token (English prose), ~3 chars per token (code/CSS) |

When the orchestrator spawns a builder through the Task tool, the agent's world begins with a fixed foundation:

- System prompt (~3,000 tokens): the base operating environment
- Tool definitions (~4,000 tokens): Read, Write, Edit, Glob, Grep, Bash
- Auto-loaded CLAUDE.md files (~2,500 tokens): global instructions + memory

This foundation consumes ~9,500 tokens before a single creative instruction arrives. Think of it as the walls of the studio -- they define the space but are not the work.

What remains is ~190,500 tokens of theoretical creative canvas. In practice, the builder also needs room to reason, plan, and generate output. A realistic working canvas is closer to **~150,000 tokens** -- still enormous.

The discovery here: **the canvas is far larger than what currently occupies it.** The question is not "can it fit?" but "what belongs in this space?"

---

## 2. What Currently Fills Window 1 (DERIVE + BUILD)

### The present composition

| File | Chars | Est. Tokens | Lines | Nature |
|------|-------|-------------|-------|--------|
| world-description.md | 1,843 | 461 | 17 | Creative atmosphere |
| TC SKILL.md | 50,412 | 12,603 | 841 | Creative methodology |
| Content markdown (RESEARCH-SYNTHESIS) | 20,977 | 5,244 | 383 | The raw material |
| prohibitions.md | 24,120 | 6,030 | 419 | Boundary definitions |
| tokens.css | 8,996 | 2,999 | 183 | Design vocabulary (variables) |
| mechanism-catalog.md | 28,684 | 7,171 | 751 | Creative toolkit |
| components.css | 22,483 | 7,494 | 944 | Structural patterns |
| **Subtotal: reference files** | **157,515** | **42,002** | **3,538** | |
| SKILL.md prompt template (Window 1 portion) | ~6,000 | ~1,500 | ~100 | Orchestration |
| Conventions block (inline) | ~800 | ~200 | ~14 | Mechanical constraints |
| **TOTAL Window 1 prompt** | **~164,315** | **~43,702** | **~3,652** | |

**Window 1 uses ~43,700 tokens -- 23% of the theoretical canvas, 29% of the working canvas.**

This means 71% of the builder's creative space is empty. Not "reserved" or "needed for overhead" -- genuinely unoccupied. The builder works in a room that is mostly air.

### What fills the REFINE window (Window 3)

The REFINE window carries everything Window 1 had, plus the accumulated creative intelligence from the build and evaluation:

| File | Chars | Est. Tokens | Lines | Nature |
|------|-------|-------------|-------|--------|
| output.html (the artifact) | ~98,000 | ~32,667 | ~2,931 | The living creation |
| weaver-synthesis.md | ~20,500 | ~5,125 | ~217 | Creative direction |
| _reflection.md | ~5,000 | ~1,250 | ~70 | Builder's self-knowledge |
| _tc-brief.md | ~6,000 | ~1,500 | ~70 | Original conviction |
| Content markdown | 20,977 | 5,244 | 383 | The raw material |
| mechanism-catalog.md | 28,684 | 7,171 | 751 | Creative toolkit |
| components.css | 22,483 | 7,494 | 944 | Structural patterns |
| prohibitions.md | 24,120 | 6,030 | 419 | Boundary definitions |
| tokens.css | 8,996 | 2,999 | 183 | Design vocabulary |
| REFINE prompt template | ~6,000 | ~1,500 | ~100 | Orchestration |
| **TOTAL REFINE prompt** | **~240,760** | **~70,980** | **~6,068** | |

**The REFINE window uses ~71,000 tokens -- 37% of theoretical, 47% of working canvas.**

### The artifact as gravitational center

The HTML artifact (~33k tokens) is the largest single object in any window. It consumes nearly half of the REFINE window's payload. This is not waste -- it IS the creative work. The REFINE builder achieves its power precisely because it can see, read, and inhabit the artifact it is transforming. The artifact is not a cost; it is the reason the window exists.

---

## 3. Four Possible Compositions

The 71% of empty canvas in Window 1 is an invitation. What fills it changes the character of the creative work. Here are four compositions, each with a different philosophy:

### Composition A: The current arrangement (rules-heavy)

```
Working canvas:   150,000 tokens
Fixed foundation:   9,500 tokens
Prompt template:    1,500 tokens
Content:            5,244 tokens
Reference files:   42,002 tokens
------------------------------------
OCCUPIED:          58,246 tokens (39%)
OPEN SPACE:        91,754 tokens (61%)
```

91,754 tokens of creative space, unfilled. The builder works with the mechanism catalog, component library, and constraint definitions. This composition says: "Here are your tools and your boundaries. Create."

The result was PA-05 2.0/4 on initial build, rising to 3.5/4 after REFINE. The composition works, but the open space raises a question: what would happen if it held creative nourishment instead of air?

### Composition B: Research replaces rules

Remove: prohibitions.md (6,030) + tokens.css (2,999) + components.css (7,494) = **-16,523 tokens**
Add: R2 (9,258) + R4 (10,914) + R5 (7,651) + RESEARCH-SYNTHESIS (5,244) = **+33,067 tokens**

```
Working canvas:   150,000 tokens
Current:           58,246 tokens
Remove rules:     -16,523 tokens
Add research:     +33,067 tokens
------------------------------------
OCCUPIED:          74,790 tokens (50%)
OPEN SPACE:        75,210 tokens (50%)
```

Fits with 50% open space. But this composition strips the CSS vocabulary entirely -- the builder arrives with creative philosophy but no structural starting points. This is the "inspiration without vocabulary" failure mode: rich understanding, no way to express it in code. Like a composer who hears the symphony but has never learned notation.

### Composition C: Maximum creative immersion

Load ALL research (47,445) + ALL case studies (67,766) + mechanism-catalog (7,171) + world-description (461):

```
Working canvas:   150,000 tokens
Fixed foundation:   9,500 tokens
Prompt template:    1,500 tokens
Content:            5,244 tokens
Creative corpus:  122,843 tokens
------------------------------------
OCCUPIED:         139,087 tokens (93%)
OPEN SPACE:        10,913 tokens (7%)
```

This barely fits and leaves almost nothing for the builder's own thinking. With no CSS vocabulary files (no room), the builder invents all CSS from scratch while drowning in reference material. The room is full but the builder cannot move. **Not viable for a single window** -- the creative space has been consumed by creative input.

### Composition D: The hybrid -- where creative knowledge and structural vocabulary coexist

Keep: mechanism-catalog (7,171) + components.css (7,494) + world-description (461)
Remove: prohibitions (6,030) + tokens.css (2,999)
Add: R2-Creative Layouts (9,258) + CD-006 case study (4,945) + DD-006 case study (2,166)

Inline the 14-line conventions block instead of the full prohibitions + semantic-rules (saves ~12,674 tokens, adds ~200 tokens).

```
Working canvas:   150,000 tokens
Fixed foundation:   9,500 tokens
Prompt template:    1,700 tokens (slightly expanded)
Content:            5,244 tokens
mechanism-catalog:  7,171 tokens
components.css:     7,494 tokens
world-description:    461 tokens
TC SKILL:          12,603 tokens (FULL -- creative methodology)
Conventions inline:   200 tokens
R2 research:        9,258 tokens
CD-006 case study:  4,945 tokens
DD-006 case study:  2,166 tokens
------------------------------------
OCCUPIED:          60,742 tokens (40%)
OPEN SPACE:        89,258 tokens (60%)
```

This is where something interesting emerges. **Same total footprint as Composition A** (net change: +1,496 tokens), but a fundamentally different character. The builder works with creative research alongside structural vocabulary. The mechanism catalog shows what tools exist; the R2 research shows what those tools achieve in practice; the case studies show specific compositions that succeeded. The 14-line conventions block carries the mechanical constraints that prohibitions.md spent 419 lines elaborating.

The room is the same size. What fills it has changed.

### Composition D+ (more creative nourishment)

Add R4-Axis Innovations (10,914) + R5-Combination Theory (7,651):

```
OCCUPIED:          79,307 tokens (53%)
OPEN SPACE:        70,693 tokens (47%)
```

47% open space is still comfortable for a builder generating ~8k output tokens. The room is half-full with material that shows creative possibility, half-open for the builder's own work.

---

## 4. What Flows Between Windows

Each window transition is a boundary where all context evaporates. The handoff tissue is the only thread that connects one creative consciousness to the next.

### Window 1 to Window 2 (DERIVE+BUILD to EVALUATE): Intentionally narrow

The PA auditors receive ONLY screenshots and their questions. They never see the builder's intent, the conviction brief, the reflection. This narrowness is the source of the evaluation's power -- fresh eyes that perceive without preconception.

### Window 2 to Window 3 (EVALUATE to REFINE): The critical crossing

| Handoff artifact | Actual size (Yegge build) | Est. Tokens | What it carries |
|------------------|--------------------------|-------------|-----------------|
| output.html (the artifact) | 97,744 chars | 32,581 | The creation itself |
| weaver-synthesis.md | 20,500 chars | 5,125 | Creative direction from perception |
| _tc-brief.md | 5,659 chars | 1,415 | Original conviction |
| _reflection.md | ~5,000 chars | 1,250 | Builder's self-knowledge |
| **TOTAL handoff tissue** | **~129,000 chars** | **~40,371** | |

**Handoff tissue consumes ~40,371 tokens (27% of the working canvas).**

Adding the reference files the REFINE builder also needs:

| Additional reference | Tokens |
|---------------------|--------|
| mechanism-catalog | 7,171 |
| components.css | 7,494 |
| prohibitions | 6,030 |
| tokens.css | 2,999 |
| Content markdown | 5,244 |
| Prompt template | 1,500 |
| Fixed foundation | 9,500 |
| **TOTAL REFINE window** | **~80,309** |

**The REFINE window occupies ~80,309 tokens -- 54% of the canvas.** Still has room for the builder's reasoning and generation.

### The composition of the crossing

Of the ~40k handoff tokens, 32,581 (81%) is the HTML artifact itself. The actual creative tissue -- conviction, reflection, weaver synthesis -- is only ~7,790 tokens (19%).

This reveals something about the nature of creative handoff: the CREATION is the primary vehicle. The words about the creation are a thin layer around it. Enriching the creative tissue (adding a 2,000-token artistic DNA document, for example) adds trivial cost because the artifact already dominates the crossing.

A hypothetical conviction-only handoff (no HTML) would cost only ~11,375 tokens -- freeing ~29,000 for additional research files. But the REFINE builder would have no creation to inhabit, only direction to build from scratch. That transforms refinement into a second independent build -- a fundamentally different activity.

---

## 5. The Generation Horizon

Claude Opus 4.6 can generate up to 32,000 output tokens (with extended thinking; 16,000 default).

A typical page build generates:
- HTML artifact: ~2,000 lines = ~98,000 chars = ~32,667 tokens
- TC brief: ~70 lines = ~6,000 chars = ~1,500 tokens
- Reflection: ~70 lines = ~5,000 chars = ~1,250 tokens
- **TOTAL output: ~35,417 tokens**

This exceeds the 32k limit. In practice it works because the agent uses the Write tool to output file content in segments rather than generating everything in a single pass. The builder creates procedurally, not all-at-once. This is fine for the current architecture -- the builder naturally thinks in sections and zones, writing each before moving to the next.

### How output generation shares the canvas

Output tokens share the 200k context window. As the agent generates, it consumes space from the same pool. A rough picture:

```
Input (Composition D):  ~60,000 tokens
Output (files):         ~35,000 tokens
Tool interactions:      ~10,000 tokens
Reasoning space:        ~25,000 tokens
------------------------------------
TOTAL consumed:        ~130,000 tokens (65% of 200k)
BREATHING ROOM:         ~70,000 tokens (35%)
```

Comfortable. Even with Composition D+ (~79k input):

```
Input:                  ~79,000 tokens
Output:                 ~35,000 tokens
Tool interactions:      ~10,000 tokens
Reasoning space:        ~25,000 tokens
------------------------------------
TOTAL consumed:        ~149,000 tokens (75%)
BREATHING ROOM:         ~51,000 tokens (25%)
```

Still viable, though the builder's reasoning space begins to feel the weight. Below 20% breathing room, quality degrades -- the builder is reasoning in a corner rather than a room.

---

## 6. What the Compositions Reveal

| Dimension | Composition A (current) | Composition D (hybrid) | Composition D+ (expansive) |
|-----------|---------------------|--------------------|-----------------------|
| **Input tokens** | 58,246 | 60,742 | 79,307 |
| **Rules tokens** | 22,553 (39%) | 15,166 (25%) | 15,166 (19%) |
| **Creative knowledge tokens** | 20,235 (35%) | 36,604 (60%) | 55,169 (70%) |
| **Content tokens** | 5,244 (9%) | 5,244 (9%) | 5,244 (7%) |
| **Instruction tokens** | 10,214 (18%) | 3,728 (6%) | 3,728 (5%) |
| **Open space (vs 150k)** | 91,754 (61%) | 89,258 (60%) | 70,693 (47%) |
| **Total consumed (w/ output)** | ~128k (64%) | ~131k (65%) | ~149k (75%) |

### What this tells us

**The canvas has been mostly empty.** Window 1 has 61% open space. The builder works with ample room but limited creative nourishment. There is space to add ~90k tokens of creative knowledge without removing anything at all.

**Rules files echo the conventions block.** The 14-line conventions block in the SKILL.md prompt already encodes the mechanical constraints. The full prohibitions.md (6,030 tokens) and tokens.css (2,999 tokens) largely restate the same boundaries. Removing them frees 9,029 tokens with no loss of constraint information for a builder who absorbs the conventions block. The fact that semantic-rules.md was never loaded into Window 1 -- despite being listed in the core ontology -- confirms that the conventions block was always the intended delivery mechanism.

**The REFINE window is the tighter space, not Window 1.** At ~80k tokens, the REFINE window uses 54% of the canvas. The HTML artifact alone occupies 33k tokens. This constrains how much additional creative knowledge can travel into the REFINE window -- but the creative tissue (conviction + reflection + weaver) fits easily alongside it.

**Handoff tissue is inexpensive.** The conviction brief + reflection + weaver synthesis total ~7,790 tokens. The artifact dominates the crossing at 33k tokens. This means enriching the handoff with more creative direction (an artistic DNA document, a roads-not-taken register) adds trivial cost.

**The builder's attention is the true constraint.** Output generation requires ~35k tokens of the context window. This does not compete with input budget directly (tool calls handle it), but it consumes the builder's attention span. A builder saturated with 80k+ tokens of input reference material may produce less thoughtful output because attention distributes across too many sources. The silent constraint is not token capacity but cognitive focus.

**Composition D represents the creative equilibrium: ~60k input tokens, with a 60/25/9/6 split of creative knowledge / rules / content / instruction.** It replaces redundant constraint repetition with targeted creative knowledge, maintains comfortable space for reasoning and generation, and fundamentally shifts the character of the room the builder inhabits -- from a rule-bound workspace to a creatively nourished studio.
