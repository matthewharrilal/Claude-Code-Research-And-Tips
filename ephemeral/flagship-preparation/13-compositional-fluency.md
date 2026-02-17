# Compositional Fluency vs Vocabulary Fluency

**Author:** COMPOSITION-RESEARCHER (Opus 4.6)
**Date:** 2026-02-16
**Task:** #13 — Research what compositional fluency IS, how mechanisms interact, why agents struggle with it, and how to achieve it in a pipeline.

**Sources Read:**
- 09-MASTER-RETROSPECTIVE.md (Finding 4: "Designed has two dimensions")
- 05-flagship-architecture.md (3-pass model, restraint protocol, multi-channel coherence)
- 02-alternative-mental-models.md (7-dimensional richness space, semantic resonance)
- 04-showcase-archaeology.md (6 unmodeled dimensions, intentionality axis, crown jewel analysis)
- mechanism-catalog.md (18 mechanisms, 5 categories, application modes)
- semantic-rules.md (3-question test, semantic value framework)
- tension-composition SKILL.md (full pipeline, tier routing, coherence rules)

---

## I. WHAT IS COMPOSITIONAL FLUENCY?

### The Core Distinction

**Vocabulary fluency** is knowing many words. **Compositional fluency** is writing sentences where words NEED each other.

The Middle-tier experiment achieved vocabulary fluency: 12 mechanisms deployed across all 5 categories, PA-05 DESIGNED (4/4), novelty 3/3. But the perceptual auditor's verdict was: "specifications applied correctly, not composition felt through." The page had 12 mechanisms, and you could remove any single one without the page feeling fundamentally different. Each mechanism served a separate content need independently.

The crown jewels (DD-006 at 36/40, CD-006 at 39/40) achieved compositional fluency: mechanisms were INTERDEPENDENT. Removing border-weight gradient from OD-004 would break the zone backgrounds' semantic encoding, which would undermine the spacing compression's meaning, which would collapse the typographic hierarchy's rationale. The mechanisms formed a LOAD-BEARING STRUCTURE, not a decoration collection.

### Three Analogies

**Music:** Vocabulary fluency is playing 12 different notes on a piano. Compositional fluency is playing a chord where the notes create overtones, harmonic tension, and resolution that none could produce alone. A C-E-G chord is not "three notes" — it is a major triad, a unit of meaning that transcends its components.

**Architecture:** Vocabulary fluency is having 12 different building materials. Compositional fluency is designing a structure where the stone foundation enables the timber framing that supports the glass roof that admits light to the stone floor. Each material's presence JUSTIFIES the others.

**Language:** Vocabulary fluency is using 12 different words. Compositional fluency is writing "the cold rain tightened the already taut membrane of silence" — where "cold," "tightened," "taut," and "membrane" create a mutually reinforcing physical sensation no single word could achieve.

### Formal Definition

**Compositional fluency is the property by which mechanisms encode SHARED semantic dimensions through DIFFERENT CSS channels, such that the mechanisms mutually REINFORCE, MODULATE, or RESPOND TO each other's effects.**

Three testable sub-properties:

1. **Multi-channel encoding:** 2+ mechanisms express the SAME meaning through different CSS properties. Border-weight AND zone backgrounds AND spacing compression all say "depth" simultaneously.

2. **Cross-mechanism dependency:** Removing mechanism A changes how mechanism B is perceived. The border-weight gradient makes the zone background shifts MEANINGFUL (they encode the same hierarchy). Without border-weight, zone backgrounds are just decoration.

3. **Emergent properties:** The combination produces perceptual effects that no individual mechanism could create alone. The "atmospheric pressure change" when scrolling from a sparse zone into a dense zone — that feeling is not in the spacing alone, not in the background alone, not in the borders alone. It is in their CONVERGENCE.

---

## II. HOW MECHANISMS INTERACT — CONCRETE EXAMPLES

### Interaction Type 1: REINFORCING (Multi-Channel Encoding)

Two or more mechanisms encode the same semantic dimension through different CSS channels. This is the most common and most powerful interaction pattern.

**Example from OD-004 (geological confidence):**

```css
/* THREE mechanisms all encode "depth/confidence" simultaneously */

/* Mechanism #1: Border-Weight Gradient — encodes depth via thickness */
.stratum--established { border-left: 4px solid var(--color-text); }
.stratum--probable    { border-left: 3px solid var(--color-text); }
.stratum--speculative { border-left: 2px solid var(--color-text-secondary); }
.stratum--open        { border-left: 1px solid var(--color-border); }

/* Mechanism #7: Zone Background — encodes depth via color warmth */
.stratum--established { background: var(--color-zone-sparse); }  /* warm cream */
.stratum--probable    { background: var(--color-zone-dense); }    /* white */
.stratum--speculative { background: var(--color-zone-breathing); } /* tan */
.stratum--open        { background: var(--color-text); color: var(--color-background); } /* dark */

/* Mechanism #4: Spacing Compression — encodes depth via padding */
.stratum--established { padding: 40px; }  /* spacious — confident */
.stratum--probable    { padding: 32px; }  /* moderate */
.stratum--speculative { padding: 24px; }  /* compressed */
.stratum--open        { padding: 16px; }  /* tight — uncertain */
```

**Why this is COMPOSITIONAL, not just vocabulary:**

When a reader scrolls into the `.stratum--speculative` zone, they experience:
- Borders getting thinner (2px → from 4px above)
- Background shifting warmer (tan → from cream above)
- Space tightening (24px → from 40px above)

All three channels say "you are moving away from certainty" SIMULTANEOUSLY. The reader doesn't consciously parse three CSS properties — they FEEL a single atmospheric change. That atmospheric change is the EMERGENT property that no individual mechanism creates.

**Contrast with the Middle-tier (vocabulary fluency only):**

```css
/* Middle-tier — each mechanism serves a DIFFERENT purpose independently */

/* Mechanism #1: Border-Weight — encodes SECURITY CRITICALITY */
.auth-section    { border-left: 4px solid var(--color-primary); }
.data-section    { border-left: 3px solid var(--color-text); }
.rate-section    { border-left: 1px solid var(--color-border); }

/* Mechanism #7: Zone Background — encodes CONTENT TYPE (not security) */
.overview-zone   { background: var(--color-zone-sparse); }   /* intro */
.technical-zone  { background: var(--color-zone-dense); }    /* reference */
.procedural-zone { background: var(--color-zone-breathing); } /* how-to */

/* Mechanism #4: Spacing — encodes SECTION RHYTHM (not security OR content type) */
section:nth-child(odd)  { padding: 48px; }
section:nth-child(even) { padding: 32px; }
```

**Why this is VOCABULARY, not composition:**

Border-weight encodes security. Zone backgrounds encode content type. Spacing encodes rhythm. Three mechanisms, three SEPARATE semantic dimensions. They don't talk to each other. You could remove the zone backgrounds and the border-weight encoding would be unaffected. The mechanisms coexist independently — like three instruments playing different songs at the same time.

---

### Interaction Type 2: MODULATING (Mechanism A Controls Mechanism B's Intensity)

One mechanism's value GATES or SCALES another mechanism's expression.

**Example from DD-006 (fractal density):**

```css
/* Mechanism #5 (Dense/Sparse Alternation) MODULATES
   Mechanism #2 (2-Zone Component DNA) */

/* In DENSE sections: components have tight 2-zone structure */
.section--dense .callout {
  padding: 16px 20px;          /* compressed */
  margin: 12px 0;              /* tight stacking */
}
.section--dense .callout__label {
  font-size: 0.6875rem;        /* small label */
  margin-bottom: 4px;          /* minimal gap */
}

/* In SPARSE sections: components have generous 2-zone structure */
.section--sparse .callout {
  padding: 24px 32px;          /* expanded */
  margin: 24px 0;              /* generous stacking */
}
.section--sparse .callout__label {
  font-size: 0.75rem;          /* slightly larger label */
  margin-bottom: 8px;          /* more breathing room */
}
```

**The modulation effect:** Dense/sparse alternation (#5) doesn't just change section-level spacing — it REACHES INSIDE components and adjusts their internal 2-zone DNA (#2). Components in dense sections are tighter, denser, more compressed. Components in sparse sections breathe more. The section-level mechanism modulates the component-level mechanism.

This creates FRACTAL COHERENCE: the same density direction appears at multiple zoom levels because the page-scale mechanism (dense/sparse alternation) propagates its effect into component-scale mechanisms (2-zone DNA). This is compositional fluency — mechanisms in CONVERSATION across scales.

---

### Interaction Type 3: RESPONDING (Mechanism B Reacts to Mechanism A's Visual Weight)

One mechanism's visual weight creates a condition that the next mechanism responds to.

**Example from CD-006:**

```css
/* Mechanism #13 (Dark Header) creates HEAVY visual weight at page top */
header {
  background: var(--color-text);  /* near-black */
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-16) var(--space-8);
}

/* Mechanism #16 (Drop Cap) RESPONDS to header weight:
   The first section after the dark header uses a dramatic drop cap
   to maintain visual intensity during the header-to-content transition */
.section:first-of-type .drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  color: var(--color-primary);  /* Red — echoes header's 3px red border */
}

/* If the header were removed, the drop cap would feel ARBITRARY —
   it would be decorative, not transitional.
   With the header, the drop cap RESPONDS to the header's weight
   by providing a stepping-stone from high-intensity to body text. */
```

**The response effect:** The dark header creates a visual weight at the top. The drop cap responds to that weight by maintaining intensity during the transition to body content. Without the header, the drop cap would be decorative. With the header, it is STRUCTURAL — it bridges two visual registers.

This is the key distinction: in vocabulary fluency, a drop cap is "a mechanism I deployed because I covered 5 categories." In compositional fluency, a drop cap is "the mechanism that answers the header's visual weight."

---

### Interaction Type 4: CONTRASTING (Mechanism A Defines Mechanism B Through Absence)

One mechanism's deployment in one zone makes its ABSENCE in another zone meaningful.

**Example from the Restraint Map concept (flagship architecture):**

```css
/* Mechanism #7 (Zone Background) deployed ONLY in zones 1 and 3 */
.zone-1 { background: var(--color-zone-sparse); }
.zone-2 { background: transparent; }  /* DELIBERATE absence */
.zone-3 { background: var(--color-zone-dense); }
.zone-4 { background: transparent; }  /* DELIBERATE absence */

/* The ABSENCE of zone background in zones 2 and 4 is meaningful
   BECAUSE zones 1 and 3 have it. The transparent zones become
   "breathing spaces" — silence defined by surrounding sound.

   If ALL zones had backgrounds, none would feel special.
   If NO zones had backgrounds, there would be no zones at all.
   The CONTRAST between presence and absence creates the rhythm. */
```

**The contrast effect:** This is the "deliberate absence" principle from the flagship architecture. Mechanism deployment in some zones creates semantic weight. Mechanism absence in adjacent zones creates silence. The rhythm of deployment/absence IS the composition. This is impossible with vocabulary fluency alone, because vocabulary fluency treats each mechanism independently — deploy or don't deploy, with no relationship between the decisions.

---

### Interaction Type 5: CASCADING (Mechanism A Sets Up Mechanism B Which Enables C)

A chain of mechanisms where each enables the next.

**Example from CD-006 (4-act density arc):**

```css
/* Chain: Progressive Disclosure (#12) → Zone Backgrounds (#7) →
   Spacing Compression (#4) → Border-Weight (#1) */

/* Act 1 (Orient): Progressive disclosure BEGINS sparse */
.act-1 { padding: 64px; }
.act-1 { background: var(--color-zone-sparse); }
.act-1 .section-border { border-left: 1px solid var(--color-border); }

/* Act 2 (Learn): All mechanisms step up together */
.act-2 { padding: 48px; }
.act-2 { background: var(--color-zone-breathing); }
.act-2 .section-border { border-left: 3px solid var(--color-text); }

/* Act 3 (Build): Peak density */
.act-3 { padding: 32px; }
.act-3 { background: var(--color-zone-dense); }
.act-3 .section-border { border-left: 4px solid var(--color-text); }

/* Act 4 (Ship): Resolution — returns toward sparse */
.act-4 { padding: 48px; }
.act-4 { background: var(--color-zone-breathing); }
.act-4 .section-border { border-left: 3px solid var(--color-text); }
```

**The cascade effect:** Progressive disclosure (#12) establishes a density trajectory. Zone backgrounds (#7) follow that trajectory by darkening/warming in sync. Spacing compression (#4) tightens in parallel. Border-weight (#1) thickens correspondingly. Each mechanism's value at each point is DETERMINED BY the overall density trajectory. Change the trajectory and ALL four mechanisms must adjust.

This is the deepest form of compositional fluency: the mechanisms are not just DEPLOYED together — they are GOVERNED by a shared compositional logic. The density arc is the composer; the mechanisms are the instruments.

---

## III. WHY AGENTS STRUGGLE WITH COMPOSITION

### Problem 1: Linear Processing vs Simultaneous Awareness

Agents process instructions sequentially. A prompt says "deploy mechanisms from the catalog." The agent reads mechanism #1 (border-weight gradient), deploys it for one purpose (hierarchy). Then reads mechanism #7 (zone backgrounds), deploys it for another purpose (section differentiation). The two mechanisms are deployed in separate cognitive acts, for separate purposes.

Compositional fluency requires SIMULTANEOUS awareness: "I am placing border-weight AND zone backgrounds AND spacing compression to JOINTLY express geological depth." This requires holding all three mechanisms in mind at once, seeing them as facets of a single compositional decision. Linear processing fragments this into three independent decisions.

**Evidence:** The Middle-tier experiment's planner (Opus) produced a plan with 12 mechanisms, each justified independently ("border-weight for security hierarchy," "zone backgrounds for content type differentiation"). The perceptual audit found the result "professionally stiff." The plan LISTED mechanisms; it did not COMPOSE them.

### Problem 2: Continuation Bias Prevents Redesign

Once an agent places mechanism A, it adapts to that placement. If mechanism A creates a visual weight at the top of the page, the agent does not go back and redesign the bottom of the page to respond to that weight. It continues forward, placing mechanism B based on the plan, not based on what mechanism A just created.

In human design, the designer places a dark header, steps back, sees the visual weight, and thinks "the first section needs something dramatic to answer that weight — a drop cap, maybe." This stepping-back-and-responding is natural for iterative human work but ALIEN to single-pass agent execution.

**Evidence:** The ceiling experiment deployed 14 mechanisms. The dark header created strong visual weight. But the content below did not respond to it — there was no drop cap, no typographic intensification, no transitional element. The header existed in isolation. The mechanisms below it ignored it. Each was placed according to the plan, not according to what came before.

### Problem 3: Prompts Specify Mechanisms, Not Relationships

The current pipeline specifies: "Deploy at least 1 mechanism from each of 5 categories." This produces vocabulary breadth. But there is no specification for mechanism RELATIONSHIPS:

- No instruction says "mechanism #1 and #7 should encode the SAME semantic"
- No instruction says "if you deploy #13 (dark header), follow it with #16 (drop cap) to manage the weight transition"
- No instruction says "the density direction of #5 should propagate into #2's internal structure"

The absence of relationship specifications means agents treat mechanisms as independent checkboxes. Deploy #1 (check), deploy #7 (check), deploy #4 (check). Five categories covered. But no composition achieved.

### Problem 4: The Measurement Gap

The pipeline measures vocabulary fluency precisely: count mechanisms, verify per-category coverage, check fractal coherence at N scales. But it has NO measurement for compositional fluency:

- PA-05 measures "designed vs formatted" — a binary gate, not a spectrum
- D3 measures novelty — structural uniqueness, not compositional interaction
- The "specifications applied correctly vs composition felt through" distinction from the retrospective has no metric

Without measurement, agents cannot optimize for composition. They optimize for what IS measured: mechanism count, category coverage, fractal scale count. These are all vocabulary metrics.

### Problem 5: File-Bus Isolation Prevents Collaborative Discovery

Composition often emerges from CONVERSATION between agents — the planner says "I want geological depth," the builder tries it and discovers the border-weight creates a visual weight that needs a response, and asks the planner "should I add a drop cap here to manage the transition?" This back-and-forth produces compositional decisions that neither agent would make alone.

The Middle and Ceiling experiments used zero inter-agent messaging. The builder worked from a plan with no ability to ask "does this visual weight need an answer?" The missing footer in the Middle experiment is the concrete smoking gun: the builder couldn't ask "what does Footer Mirror look like?"

**Evidence:** CD-006 scored 39/40 WITH agent messaging and iteration. Middle scored B+ WITHOUT messaging. The quality gap is partially explained by collaborative refinement that enables compositional discovery during execution.

---

## IV. HOW TO ACHIEVE COMPOSITIONAL FLUENCY IN A PIPELINE

### Strategy 1: Specify REINFORCING PAIRS, Not Just Mechanisms

Instead of "deploy 1+ mechanism per category," add: "For at least 3 mechanism pairs, document how they encode the SAME semantic dimension."

**Concrete prompt language for the planner:**

```
REINFORCING PAIR REQUIREMENT (Ceiling+):

For at least 3 pairs of mechanisms, document:
1. The SHARED semantic dimension they encode (e.g., "geological depth")
2. The CSS channel each uses (e.g., border-weight = thickness, zone backgrounds = color, spacing = padding)
3. How the values CO-VARY (e.g., "deeper strata → thicker borders AND darker backgrounds AND tighter spacing")

FORMAT:
PAIR 1: [Mechanism A] + [Mechanism B]
SHARED SEMANTIC: [what they both express]
CO-VARIATION: [how their values change together]
```

This changes the agent's cognitive task from "which mechanisms to deploy" to "which mechanisms can express the same thing." The shift from DEPLOYMENT to EXPRESSION is the key to compositional thinking.

### Strategy 2: The Multi-Pass Model (Flagship Architecture's Core Insight)

The flagship architecture decomposes composition into three passes precisely BECAUSE single-pass composition is beyond agent capability:

**Pass 1 (Spatial Skeleton):** Deploy 8-10 mechanisms for spatial structure. This is vocabulary work. Get the skeleton right.

**Pass 2 (Compositional Elaboration):** With the skeleton visible, add 4-6 mechanisms that RESPOND to the skeleton. This is the composition step. The elaboration-builder sees the existing visual weight distribution and chooses mechanisms that answer it.

**Pass 3 (Intentionality):** Add the intentionality layer — bookending, self-reference, cognitive choreography. This is the "why does it matter?" step.

The multi-pass model works because it separates VOCABULARY (Pass 1) from COMPOSITION (Pass 2). The elaboration-builder in Pass 2 can see what Pass 1 created and respond to it — overcoming the continuation bias problem. The mechanisms deployed in Pass 2 are not planned independently; they are composed in response to Pass 1's visual reality.

### Strategy 3: Show, Don't Tell — Compositional Examples in the Plan

Instead of listing mechanisms abstractly, the planner should provide COMPOSITIONAL EXAMPLES showing how mechanisms interact:

```
COMPOSITIONAL DIRECTIVE (for builder):

When deploying border-weight (#1) and zone backgrounds (#7):
- These mechanisms should CO-VARY along the page's density trajectory
- Where border-weight is 4px, zone background should be warm cream (sparse)
- Where border-weight is 1px, zone background should be white (dense)
- The reader should feel a single atmospheric change, not two independent CSS changes

CSS REFERENCE:
/* COMPOSITIONAL — these change TOGETHER */
.zone-deep { border-left: 4px solid; background: var(--zone-sparse); padding: 40px; }
.zone-shallow { border-left: 1px solid; background: var(--zone-dense); padding: 16px; }

/* NON-COMPOSITIONAL — these change INDEPENDENTLY */
.important { border-left: 4px solid; }  /* hierarchy */
.section-a { background: var(--zone-sparse); }  /* decoration */
.section-b { padding: 16px; }  /* layout */
```

Showing the CSS side-by-side forces the builder to understand the DIFFERENCE between compositional and independent deployment.

### Strategy 4: The Conversation Model — Mechanisms Respond to Each Other

Add a mandatory step after initial mechanism placement:

```
COMPOSITION CHECK (after placing all mechanisms):

For each major section, ask:
1. What visual WEIGHT does this section create?
2. Does the NEXT section acknowledge that weight? (softer or harder?)
3. Does the PREVIOUS section set up this weight? (gradual or sudden?)

If any section exists in isolation — its visual treatment unrelated to
its neighbors — it is VOCABULARY, not COMPOSITION.

FIX: Adjust the isolated section's mechanism values to create
a relationship with its neighbors (echo, contrast, progression, response).
```

This forces agents to think about mechanism RELATIONSHIPS across sections, not just mechanism DEPLOYMENT within sections.

### Strategy 5: Builder Must See the Metaphor, Not Just Mechanism Names

The Middle experiment's builder saw mechanism names ("border-weight gradient," "zone backgrounds") but not the metaphor that should have unified them. The planner's plan listed mechanisms; it did not convey the COMPOSITIONAL INTENT.

For Ceiling+ builds, the builder's prompt should include:

```
METAPHOR CONTEXT (for builder):

The guiding metaphor is [GEOLOGICAL STRATA / ARCHITECTURAL FLOORS / etc.]

This means:
- Scrolling DOWN the page = going DEEPER
- DEEPER = borders THICKEN + backgrounds WARM + spacing COMPRESSES
- The reader should FEEL increasing density, not just see CSS values changing
- ALL mechanisms that vary should vary in the SAME DIRECTION at the SAME RATE

If you deploy a mechanism that does NOT participate in the depth metaphor,
document why it is an EXCEPTION (not everything needs to encode depth —
but exceptions should be deliberate, not accidental).
```

This gives the builder the compositional framework within which to make mechanism decisions, rather than a checklist of mechanisms to deploy.

### Strategy 6: Inter-Agent Messaging for Compositional Discovery

The flagship architecture mandates minimum 8 substantive messages. But compositional messaging has a specific pattern:

```
COMPOSITIONAL MESSAGING PROTOCOL:

Builder → Planner (clarification):
"The header creates strong visual weight. The plan specifies drop cap for
section 1 — should the drop cap use --color-primary to ECHO the header's
red border, creating a weight transition? Or a different color?"

Planner → Builder (guidance):
"Yes, echo the header's red. The drop cap should feel like a stepping stone
from the header's monumental weight to the body text's conversational weight."

Builder → Planner (discovery):
"I notice the zone backgrounds create a warm→cool gradient, but the
border-weights don't follow the same direction. Should I adjust
border-weights to reinforce the temperature gradient?"
```

These messages are COMPOSITIONAL — they are about mechanism relationships, not mechanism deployment. The protocol should specifically encourage questions about mechanism INTERACTION, not just mechanism implementation.

---

## V. THE COMPOSITION TEST

### The Removal Test

**Definition:** For each mechanism deployed, ask: "If I remove this single mechanism, does the rest of the page feel different?"

- **YES** = The mechanism is load-bearing. Other mechanisms DEPENDED on it. This is compositional.
- **NO** = The mechanism is decorative. Other mechanisms are unaffected by its absence. This is vocabulary.

### Applying the Removal Test

**DD-006 (compositional):** Remove the dense/sparse alternation (#5). Now the zone backgrounds (#7) have no rhythm to express. The spacing compression (#4) has no density pattern to track. The 2-zone component DNA (#2) has no context to modulate. The page collapses from a fractal composition into a flat list. Score: LOAD-BEARING.

**Middle-tier experiment (vocabulary):** Remove the zone backgrounds (#7). The border-weight gradient (#1) still encodes security hierarchy. The spacing still provides rhythm. The code blocks still work. The page is slightly less varied but structurally unchanged. Score: DECORATIVE.

### Measuring Compositional Fluency

**Proposed metric: Compositional Coupling Score (CCS)**

For each mechanism deployed, count how many OTHER mechanisms change their perceived meaning when this mechanism is removed:

```
CCS per mechanism = (mechanisms whose meaning changes when this is removed) / (total mechanisms - 1)

CCS for page = average CCS across all mechanisms
```

| CCS | Rating | Meaning |
|-----|--------|---------|
| 0.0-0.15 | Independent (vocabulary) | Mechanisms are wallpaper — deployed independently |
| 0.15-0.30 | Weakly coupled | Some pairs interact, most are independent |
| 0.30-0.50 | Coupled (compositional) | Mechanisms form clusters that depend on each other |
| 0.50-0.70 | Strongly coupled | Most mechanisms are load-bearing |
| 0.70-1.0 | Fully composed | Removing any mechanism restructures the entire page |

**Predicted CCS for known pages:**
- Middle-tier experiment: ~0.10-0.15 (vocabulary, mechanisms independent)
- DD-006: ~0.40-0.55 (strongly coupled via fractal self-similarity)
- CD-006: ~0.50-0.65 (very strongly coupled via 4-act arc + bookending)
- OD-004: ~0.45-0.55 (strongly coupled via geological metaphor)

### Can This Be Measured During Build?

Yes, but imperfectly. The builder can perform a rapid self-check:

```
COMPOSITION SELF-CHECK (builder, before submitting):

Pick any 3 mechanisms you deployed. For each, ask:
"If I removed this mechanism's CSS entirely, would ANY other mechanism
look wrong, misplaced, or pointless?"

If YES for 2+ of 3: You have compositional coupling. PROCEED.
If NO for all 3: You have vocabulary deployment. REVISE — find at least
one mechanism pair that should co-vary and make them co-vary.
```

This is a 2-minute check that can catch the worst cases of vocabulary-only deployment.

---

## VI. PRACTICAL RECOMMENDATIONS FOR FLAGSHIP

### 1. Structure the Build Plan for INTERACTION, Not Just Placement

The planner should organize the build plan by COMPOSITIONAL CLUSTERS, not by mechanism number:

```
WRONG (mechanism-oriented):
- Deploy #1 (border-weight) for hierarchy
- Deploy #7 (zone backgrounds) for sections
- Deploy #4 (spacing) for rhythm
- Deploy #13 (dark header) for chrome
- Deploy #16 (drop cap) for editorial feel

RIGHT (composition-oriented):
CLUSTER A: DEPTH ENCODING
- #1 (border-weight) + #7 (zone backgrounds) + #4 (spacing compression)
- These THREE mechanisms all encode "geological depth"
- Co-variation: deeper = thicker borders + darker backgrounds + tighter spacing
- VALUES TABLE:
  | Depth Level | Border | Background | Padding |
  |-------------|--------|------------|---------|
  | Surface     | 1px    | sparse     | 64px    |
  | Middle      | 3px    | breathing  | 32px    |
  | Deep        | 4px    | dense      | 20px    |

CLUSTER B: WEIGHT TRANSITION
- #13 (dark header) → #16 (drop cap)
- These TWO mechanisms form a SEQUENCE (not simultaneous)
- The header creates monumental weight; the drop cap steps it down
- The drop cap uses --color-primary to echo the header's accent

INDEPENDENT DEPLOYMENTS:
- #17 (code blocks) — serves content need, not composition
- #18 (data tables) — serves content need, not composition
```

### 2. Phrases That Prompt Compositional Thinking in Agents

**Use these in builder prompts:**

- "These mechanisms should feel like ONE atmospheric change, not three CSS changes"
- "When border-weight changes, zone backgrounds should change in the SAME direction"
- "The reader should feel a single shift in pressure/weight/density — not notice individual properties changing"
- "If you remove this mechanism, does the page feel broken? If not, reconsider its placement"
- "Your mechanisms should be in CONVERSATION — each responding to what came before"

**Avoid these (they prompt vocabulary deployment):**

- "Deploy 12-15 mechanisms" (count-focused)
- "Cover all 5 categories" (checklist-focused)
- "Apply mechanism #1 for hierarchy and mechanism #7 for sections" (independent assignments)

### 3. The Reinforcing Pairs Documentation Format

For the build plan, require this format for every compositional cluster:

```
REINFORCING PAIR: #1 (Border-Weight) + #4 (Spacing Compression)
SHARED SEMANTIC: Information criticality / reader attention demand
CO-VARIATION DIRECTION: More critical → heavier borders + tighter spacing
PERCEPTUAL EFFECT: Reader feels "the page is getting serious" — not
  "borders got thicker" and separately "padding got smaller"
REMOVAL TEST: Remove #4. Does #1 still make sense? → Partially.
  Remove #1. Does #4 still make sense? → Barely.
  → These mechanisms are INTERDEPENDENT. CCS ≈ 0.6.
```

### 4. The Composition Audit Checklist

After the build, before full PA, run this quick composition check:

| Check | Question | Pass Criteria |
|-------|----------|--------------|
| CC-01 | Are there 2+ reinforcing pairs documented? | YES |
| CC-02 | For each pair, do values co-vary in the same direction? | YES |
| CC-03 | Pick any mechanism. Remove it mentally. Does the page feel different? | YES for at least 3 mechanisms |
| CC-04 | Is there at least 1 "response" — a mechanism that ANSWERS a previous section's visual weight? | YES |
| CC-05 | Is there at least 1 "silence zone" — a deliberate absence that creates contrast? | YES |
| CC-06 | Would a perceptual auditor describe the page as "atmospheric" or "mood-shifting"? | YES |
| CC-07 | Can you describe the page's composition in one sentence that is NOT a list of mechanisms? | YES |

**CC-07 is the acid test.** If the only way to describe the page is "it uses border-weight, zone backgrounds, spacing compression, dark header, drop cap, and code blocks," that is vocabulary. If you can say "the page descends from an authoritative surface into increasingly dense technical territory, with the atmosphere tightening as you go deeper," that is composition.

---

## VII. THE RELATIONSHIP BETWEEN VOCABULARY AND COMPOSITION

### They Are Not a Spectrum — They Are Two Axes

The retrospective framed vocabulary and compositional fluency as a spectrum (vocabulary → composition). But they are more accurately TWO INDEPENDENT AXES:

```
                  HIGH COMPOSITIONAL FLUENCY
                         │
                         │
     Sparse but          │         Rich and
     composed            │         composed
     (3 mechanisms,      │         (14 mechanisms,
      deeply coupled)    │         deeply coupled)
                         │
─────────────────────────┼────────────────────── HIGH VOCABULARY
     LOW VOCABULARY      │
                         │
     Sparse and          │         Rich but
     independent         │         independent
     (3 mechanisms,      │         (14 mechanisms,
      no coupling)       │         no coupling)
                         │
                  LOW COMPOSITIONAL FLUENCY
```

**Where known pages fall:**

| Page | Vocabulary | Composition | Quadrant |
|------|-----------|-------------|----------|
| Variant B (Phase D) | LOW (5 mechs) | LOW | Sparse + independent |
| Middle-tier | HIGH (12 mechs) | LOW | Rich + independent |
| DD-006 | HIGH (16+ mechs) | HIGH | Rich + composed |
| CD-006 | HIGH (16+ mechs) | HIGH | Rich + composed |
| OD-004 | MEDIUM (12-15 mechs) | HIGH | Rich + composed |

**The key insight:** The Middle-tier experiment moved along the VOCABULARY axis (5 → 12 mechanisms) without moving along the COMPOSITION axis. That is why it achieved "DESIGNED" (vocabulary threshold) but not "felt through" (composition threshold). The move from Middle to Ceiling is not "more mechanisms" — it is ORTHOGONAL: moving along the composition axis by making existing mechanisms interact.

### Tier Model Reframed

| Tier | Vocabulary | Composition | Description |
|------|-----------|-------------|-------------|
| Floor | LOW (5) | NONE | Component assembly |
| Middle | HIGH (8-12) | LOW | Independent mechanism deployment |
| Ceiling | HIGH (12-15) | MEDIUM-HIGH | Mechanism clusters encoding shared semantics |
| Flagship | HIGH (12-16) | HIGH | Full compositional governance by shared metaphor |

Note that mechanism COUNT does not increase dramatically from Middle to Flagship. The change is almost entirely on the composition axis. Flagship has FEWER mechanisms than the ceiling experiment's 14, because the restraint protocol (1.5:1 reject-to-deploy) ensures only load-bearing mechanisms survive.

---

## VIII. THE DEEPER QUESTION

The retrospective asked: "Is the gap between 'designed' and 'felt through' bridgeable by PROCESS, or is it an emergent property that can't be engineered?"

This research suggests: **composition can be SCAFFOLDED but not SPECIFIED.**

You cannot specify "make mechanisms interact" the way you can specify "deploy 1+ per category." Interaction is emergent — it arises from the builder's understanding of shared semantic dimensions. But you CAN scaffold the conditions under which interaction is likely to emerge:

1. **Reinforcing pair requirements** make the builder think about shared semantics
2. **Multi-pass builds** let Pass 2 respond to Pass 1's visual reality
3. **Compositional examples in the plan** show what interaction looks like in CSS
4. **Inter-agent messaging** enables collaborative discovery of interactions
5. **The composition self-check** catches the worst cases of vocabulary-only deployment
6. **The removal test** provides a concrete, binary measure of coupling

None of these GUARANTEE composition. But they create the conditions for it to emerge — the same way a music conservatory can teach harmony theory, show examples of great harmonization, and provide exercises in part-writing, without guaranteeing that every student will compose a symphony.

The metaphor itself is the strongest scaffold: when the builder knows "all mechanisms should encode geological depth," they have a REASON to make mechanisms co-vary. Without a metaphor, each mechanism serves a different content need (Middle tier). With a metaphor, mechanisms serve a shared expressive purpose (Ceiling+). The metaphor IS the compositional framework.

This is why the tier model correctly separates Middle (no metaphor, vocabulary fluency) from Ceiling (metaphor-driven, compositional fluency). The metaphor is not decorative — it is the MECHANISM by which composition becomes possible.

---

## IX. SUMMARY: FROM VOCABULARY TO COMPOSITION

| Dimension | Vocabulary Fluency | Compositional Fluency |
|-----------|-------------------|----------------------|
| **What it is** | Knowing many mechanisms | Mechanisms needing each other |
| **How it manifests** | 12 mechanisms, each independent | 12 mechanisms forming clusters |
| **What the reader perceives** | "Professionally competent" | "Atmospheric, immersive" |
| **How to measure** | Count mechanisms, verify categories | Removal test, CCS score |
| **What enables it** | Per-category minimums, vocabulary breadth | Metaphor, reinforcing pairs, multi-pass |
| **What prevents it** | Agent linear processing, no relationship specs | Reinforcing pair requirements, composition check |
| **Tier boundary** | Floor → Middle (vocabulary threshold) | Middle → Ceiling (composition threshold) |
| **Perceptual audit verdict** | "Specifications applied correctly" | "Composition felt through" |
| **The test** | "Can you list the mechanisms?" | "Can you describe the atmosphere?" |

**The single most important recommendation for the flagship experiment:** The build plan should specify COMPOSITIONAL CLUSTERS (groups of mechanisms encoding shared semantics), not individual mechanism deployments. The builder should think "I am creating an atmospheric gradient" not "I am deploying mechanisms #1, #4, and #7."

---

**END COMPOSITIONAL FLUENCY RESEARCH**
