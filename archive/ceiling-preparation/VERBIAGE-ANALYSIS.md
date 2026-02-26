# Verbiage Analysis: Mechanism Selection Language Across Tiers

**Date:** 2026-02-16
**Analyst:** verbiage-analyst
**Task:** Analyze whether "1+ per category" is the right wording, propose alternatives, and identify where the actual tier boundary lives.

---

## 1. WHY "1+ PER CATEGORY" FOR MIDDLE?

### The Origin Story

The "1+ per category" language (M1) was designed to solve one specific problem: **the "sample 2-4 mechanisms" instruction** that ALL 11 research agents identified as the single most limiting specification.

"Sample 2-4" fails in three ways:
1. **Numerically restrictive:** 2-4 mechanisms can only cover 2 of 5 categories at best
2. **Category-blind:** A builder could pick 4 mechanisms all from the same category (e.g., 4 Component mechanisms) and technically comply
3. **Target-shaped:** "2-4" reads as a TARGET, not a description, causing builders to stop at 4

"1+ per category" solves all three:
1. **Forces breadth:** 5 categories x 1 minimum = 5 minimum mechanisms (automatically above "2-4")
2. **Category-aware:** Every category gets representation
3. **Floor not ceiling:** "1+" means "at least 1" -- there's no upper bound discouraging more

### Why "1+" Specifically for Middle

Middle tier is defined by **content-structure mapping** -- the builder looks at content features and maps them to mechanisms. The selection logic is: content feature -> mechanism capability (direct mapping).

"1+ per category" enforces the BREADTH that content-structure mapping should naturally produce. If your content has hierarchical importance (Hierarchy category), semantic differentiation (Component category), spatial rhythm (Spatial category), visual emphasis (Depth/Emphasis), and page chrome (Structure/Navigation), then you naturally deploy 1+ from each.

The count 8-10 emerges because most content exercises 1-2 mechanisms per category across 5 categories. "1+ per category" is the ENABLER that produces 8-10, not a separate target.

### Evidence from Middle-Tier Experiment

The Middle-tier experiment deployed 12 mechanisms (above the 8-10 predicted range), and the per-category minimums were met:
- Spatial (S): #5 Dense/Sparse Alternation
- Hierarchy (H): #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale
- Component (C): #2 2-Zone DNA, #9 Color Encoding, #10 Border-Left Signal
- Depth/Emphasis (D): #3 Solid Offset, #7 Zone Background
- Structure/Navigation (N): #12 Progressive Disclosure, #13 Dark Header, #17 Code Block

12 mechanisms, all 5 categories covered. The "1+ per category" rule was ALREADY producing Middle-tier output. What it did NOT produce was "felt through" quality -- the perceptual verdict was "specifications applied correctly, not composition felt through."

---

## 2. WHERE IS THE ACTUAL TIER BOUNDARY?

This is the critical question. The tier boundary is NOT a single dimension. It lives at the intersection of FIVE dimensions, each contributing differently.

### Dimension 1: Count (Weakest Signal)

| Tier | Count Range | Overlap? |
|------|-------------|----------|
| Floor | ~5 | No overlap with Middle |
| Middle | 8-10 (predicted), 12 (actual) | OVERLAPS with Ceiling |
| Ceiling | 12-15 | OVERLAPS with Middle AND Flagship |
| Flagship | 16-18 | Overlaps with Ceiling |

The Middle experiment's 12 mechanisms already sit in Ceiling's 12-15 range. **Count alone cannot distinguish Middle from Ceiling.** The blind-spots analysis confirms: "If a page deploys 12, is it top-of-Middle or bottom-of-Ceiling? The boundaries feel invented, not discovered."

**Verdict:** Count is DESCRIPTIVE (what emerges) not DIAGNOSTIC (what determines tier).

### Dimension 2: Selection Logic (Strongest Signal)

This is THE actual tier boundary. From Clarification 3:

| Tier | Selection Logic | Concrete Behavior |
|------|----------------|-------------------|
| Middle | Content feature -> mechanism capability | "This has code blocks -> I need mechanism #17" |
| Ceiling | Metaphor -> shared semantic dimension -> multiple mechanisms | "Geological strata have pressure gradients -> spacing compression + border-weight + zone backgrounds ALL encode depth" |
| Flagship | Pattern -> multi-pattern interaction -> transitions between patterns | Multiple metaphor-scale structures interacting across the page |

The difference:
- **Middle:** Each mechanism solves a DIFFERENT problem INDEPENDENTLY
- **Ceiling:** Multiple mechanisms encode the SAME semantic dimension SIMULTANEOUSLY (multi-channel coherence)
- **Flagship:** Multiple semantic dimensions interact with TRANSITIONS between them

### Dimension 3: Scale Coverage (Strong Signal)

| Tier | Required Scales | Meaning |
|------|----------------|---------|
| Floor | Exempt | No custom pattern |
| Middle | 2 (Page + Component) | Density flow at page level, components mirror it |
| Ceiling | 4 (Navigation + Page + Section + Component) | Header/TOC and section-level ALSO echo pattern |
| Flagship | 5 (all, including Character) | Even inline text-level styling echoes pattern |

### Dimension 4: Interaction Pattern (Strong Signal)

| Tier | Mechanism Interaction | Example |
|------|----------------------|---------|
| Floor | None (components only) | Assembled components, no custom mechanisms |
| Middle | Independent (each serves different need) | Border-weight handles hierarchy, zone backgrounds handle section breaks |
| Ceiling | Reinforcing (2+ mechanisms encode same dimension) | Border-weight + zone backgrounds + spacing ALL encode "depth" together |
| Flagship | Transitional (3+ patterns with breathing/smooth/bridge transitions) | Multiple reinforcing clusters with designed transitions between them |

### Dimension 5: Rhythm Variation (Moderate Signal, from Experiment)

The Middle experiment's #1 defect was metronomic rhythm -- spacing compression was numerically correct but perceptually invisible. The mechanism effectiveness analysis calls this "THE highest-leverage improvement for Ceiling tier."

| Tier | Rhythm Characteristic | Transition Types |
|------|----------------------|-----------------|
| Floor | None (uniform) | N/A |
| Middle | Predictable (metronomic) | 1 type (consistent gaps) |
| Ceiling | Musical (varied) | 3+ types (smooth, bridge, breathing) |
| Flagship | Composed (narrative arc) | 5+ types with deliberate pacing |

### Synthesis: The ACTUAL Tier Boundary

The Middle-to-Ceiling boundary is defined by **selection logic + interaction pattern + rhythm variation**, NOT by mechanism count.

A page is Ceiling when:
1. Mechanisms are selected THROUGH a metaphor (not by content-feature mapping)
2. 2+ mechanisms encode the SAME semantic dimension (multi-channel coherence)
3. 3+ transition types create musical rather than metronomic rhythm
4. Pattern appears at 4 scales (Nav + Page + Section + Component)

A page is Middle when:
1. Mechanisms are selected BY content features (direct mapping)
2. Each mechanism serves an INDEPENDENT need
3. Rhythm is consistent but predictable
4. Pattern appears at 2 scales (Page + Component)

**Count is the RESULT, not the CAUSE.** Ceiling naturally lands at 12-15 because multi-channel coherence requires deploying mechanisms in reinforcing clusters, which inherently uses more mechanisms.

---

## 3. FOUR ALTERNATIVE WORDINGS: Conservative to Aggressive

### Option A: Minimalist Floor (Conservative)

**Wording:** "Deploy at least 1 mechanism from each of the 5 categories. Allow content-mechanism fit to determine how many beyond the minimum."

**Analysis:**
- **What tier it produces:** Middle (8-10, possibly 12 as in the experiment)
- **Strengths:** Maximally permissive. Doesn't pressure builders toward any count. Preserves "counts are descriptive" philosophy completely.
- **Weaknesses:** Doesn't ENCOURAGE depth. A builder deploying exactly 5 mechanisms (1 per category) technically satisfies this and lands at Floor, not Middle. No signal that more is better when content supports it.
- **Risk:** Under-deployment. Builder takes "1+" literally and stops at minimum.
- **Appropriate for:** Middle tier exactly. This IS the current M1 specification.

### Option B: Depth-Encouraging (Moderate)

**Wording:** "Deploy at least 1 mechanism from each of the 5 categories. Where content supports it, deploy 2+ from categories with rich content structure (e.g., if content has 4 hierarchical levels, deploy 2 Hierarchy mechanisms)."

**Analysis:**
- **What tier it produces:** Upper Middle to Low Ceiling (10-13)
- **Strengths:** Encourages depth without mandating it. The "where content supports it" qualifier preserves content-mechanism fit philosophy. Gives builders permission to go deeper.
- **Weaknesses:** "Where content supports it" is a JUDGMENT CALL, not a binary rule. The architectural principle says binary rules achieve 100% compliance, judgment rules achieve ~0%. This risks the same compliance failure as "sample 2-4."
- **Risk:** Inconsistent deployment. Some builders interpret "rich content structure" generously (deploy 3 per category), others conservatively (deploy 1).
- **Appropriate for:** A Middle-tier rule that OCCASIONALLY produces Ceiling output when content is rich.

### Option C: Category Depth Mandate (Aggressive)

**Wording:** "Deploy at least 2 mechanisms from each of the 5 categories. For the category with strongest content affinity, deploy 3+."

**Analysis:**
- **What tier it produces:** Ceiling (12-15). 5 categories x 2 minimum = 10 floor, plus 3+ in strongest = 13+ typical.
- **Strengths:** Binary and measurable. "2 from each" is unambiguous. Forces genuine vocabulary depth beyond breadth. The "strongest content affinity" clause ensures at least one category gets deep treatment.
- **Weaknesses:** FORCES mechanisms. If content naturally has 1 Spatial mechanism and no second makes sense, the builder must add one anyway. This violates the "peak richness = content-mechanism fit" principle. The experiment found that even 12 mechanisms included some that underperformed (#4 Spacing Compression was "numerically correct but perceptually invisible").
- **Risk:** Mechanism padding. Builder adds a second Spatial mechanism (e.g., Width Variation) not because content needs it but because the specification demands it. This is precisely the Goodhart's Law problem the "counts as proxy not target" caveat was designed to prevent.
- **Appropriate for:** Ceiling tier IF supplemented with multi-channel coherence requirement (mechanisms must reinforce, not just be present).

### Option D: Compositional Mandate (Most Aggressive)

**Wording:** "Deploy at least 2 mechanisms from each of the 5 categories. At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels (multi-channel coherence). At least 3 distinct transition types must appear across the full page."

**Analysis:**
- **What tier it produces:** Ceiling to Low Flagship (14-16). The multi-channel coherence requirement inherently requires more mechanisms because you need pairs encoding the same dimension.
- **Strengths:** Specifies the QUALITY of deployment, not just the quantity. Multi-channel coherence IS the Ceiling differentiator (from Clarification 3). Transition types address THE Middle experiment's biggest defect (metronomic rhythm). All three requirements are BINARY (verifiable by counting).
- **Weaknesses:** Complex specification. Three simultaneous requirements create cognitive overhead. "Same semantic dimension" is harder to verify than "same category" -- who decides whether border-weight and zone background encode "the same" semantic dimension?
- **Risk:** Over-specification. The builder focuses on meeting 3 requirements and loses sight of content needs. Creates a "checking boxes" mentality that prevents genuine compositional thinking.
- **Appropriate for:** Ceiling tier specifically, but risks pushing into Flagship territory for less-structured content.

### Summary Comparison

| Option | Wording Type | Tier Produced | Binary? | Content-Fit? | Flagship Risk? |
|--------|-------------|---------------|---------|--------------|----------------|
| A | Minimalist floor | Middle (8-12) | YES | HIGH | NONE |
| B | Depth-encouraging | Upper Middle (10-13) | PARTIAL | HIGH | LOW |
| C | Category depth mandate | Ceiling (12-15) | YES | MODERATE | LOW |
| D | Compositional mandate | Ceiling-High (14-16) | YES (complex) | MODERATE | MODERATE |

---

## 4. DOES MORE ENCOURAGING VERBIAGE PUSH TOWARD FLAGSHIP?

### What Separates Ceiling from Flagship

From the skill's tier-specific deployment levels:
- **Ceiling:** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship:** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

More specifically:

| Dimension | Ceiling | Flagship |
|-----------|---------|----------|
| Selection logic | Metaphor -> mechanism | Multi-pattern -> mechanism orchestration |
| Interaction | 2+ reinforcing clusters | 3+ patterns with transitions BETWEEN clusters |
| Scales | 4 (Nav + Page + Section + Component) | 5 (all, including Character-level) |
| Transition types | 3+ types | 5+ types with narrative arc |
| Build time | 150-220 min | 240-400 min |
| Pages in corpus | 20-30% | 5-10% |
| Examples | OD-004 | DD-006, CD-006 |

### The Pushing Mechanism

More encouraging verbiage pushes toward Flagship through TWO pathways:

**Pathway 1: Mechanism accumulation.** If "2 per category" produces 12-15, and the builder finds content supports 3+ in some categories, the count creeps to 16-18. At 16+ mechanisms, you're in Flagship range by count alone. Without a metaphor-level composition process (multi-pattern interaction), these extra mechanisms create density without coherence.

**Pathway 2: Coherence escalation.** If multi-channel coherence is required (Option D), builders may create 3-4 reinforcing clusters instead of the 2 that Ceiling needs. This is Flagship behavior -- multiple reinforcing clusters with transitions between them. The difference is that Flagship has DESIGNED transitions, Ceiling has coherent clusters.

### The Guardrail

What PREVENTS encouraging verbiage from producing Flagship:
1. **Build time constraint:** Ceiling is 150-220 min. Flagship is 240-400 min. If the verbiage produces a 400-min build, it's Flagship regardless of what we call it.
2. **Multi-pass audit:** Flagship requires multi-pass audit (build -> audit -> revise -> audit -> revise). Ceiling is single-pass with metaphor. If verbiage doesn't mandate multi-pass, it caps at Ceiling.
3. **Character-scale coherence:** Flagship requires pattern at INLINE level (bold weight, link color, code formatting all echo the pattern). This is extremely labor-intensive and won't emerge from mechanism-count verbiage alone.

### Verdict

Options A and B stay safely within Middle-to-Ceiling. Option C reaches Ceiling without Flagship risk (mechanism count alone doesn't create Flagship quality). **Option D is the one with Flagship risk** -- multi-channel coherence + transition types + category depth together can trigger the coherence escalation pathway, especially with agents that optimize hard for specification compliance.

The safest Ceiling verbiage is **Option C with the multi-channel coherence qualifier from Option D** but WITHOUT the transition type requirement (that's what makes D push toward Flagship). This gives:

"Deploy at least 2 mechanisms from each of the 5 categories. At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels."

This ensures Ceiling's defining feature (multi-channel coherence) without escalating to Flagship's defining feature (multi-pattern transitions).

---

## 5. WHAT DOES "2+ FROM EACH CATEGORY" LOOK LIKE FOR SYSTEM CONTENT?

The Middle experiment used SYSTEM (remote Mac control) content. Here's what 2+ per category would look like concretely:

### Current Middle Deployment (12 mechanisms, 1-3 per category)

| Category | Mechanisms Deployed | Count |
|----------|-------------------|-------|
| Spatial (S) | #5 Dense/Sparse Alternation | 1 |
| Hierarchy (H) | #1 Border-Weight, #4 Spacing Compression, #11 Type Scale | 3 |
| Component (C) | #2 2-Zone DNA, #9 Color Encoding, #10 Border-Left | 3 |
| Depth/Emphasis (D) | #3 Solid Offset, #7 Zone Background | 2 |
| Structure/Nav (N) | #12 Progressive Disclosure, #13 Dark Header, #17 Code Block | 3 |

Note: Spatial has only 1. Under "2+ per category," Spatial needs another mechanism.

### 2+ Per Category: What Gets Added

**Spatial needs 1 more.** Options:
- **#6 Width Variation:** The Middle build plan CORRECTLY rejected this because "No Q&A pairs, no comparison columns, no pull quotes." Under "2+ per category," the builder would be FORCED to add it despite no content justification. This is the Goodhart problem in action.
- **#15 Bento Grid:** Could be applied to the installation section (Desktop vs CLI as grid cells instead of sequential sections). This is PLAUSIBLY content-justified but changes the information architecture from progressive to modular. Is this an improvement or a forced change?

**The honest answer:** For SYSTEM content, 2+ Spatial mechanisms FORCES a mechanism. The content has sequential flow (overview -> architecture -> installation -> security). It doesn't have parallel structure (side-by-side, Q&A, comparison) that Spatial mechanisms require.

### What "2+ per category" Produces (Concrete)

| Category | Middle (Current) | +2nd Mechanism | Justified? |
|----------|-----------------|----------------|------------|
| Spatial (S) | #5 Dense/Sparse | +#15 Bento Grid (installation options) | MARGINAL -- content works sequentially, grid is forced restructuring |
| Hierarchy (H) | #1, #4, #11 (already 3) | No change needed | Already exceeds |
| Component (C) | #2, #9, #10 (already 3) | No change needed | Already exceeds |
| Depth (D) | #3, #7 (already 2) | No change needed | Already meets |
| Structure (N) | #12, #13, #17 (already 3) | No change needed | Already exceeds |

**Total change from "1+" to "2+":** ONE additional mechanism (#15 Bento Grid), MARGINAL justification. The deployment goes from 12 to 13 -- barely a change.

**Key insight:** For SYSTEM content, 4 of 5 categories already have 2+ mechanisms under "1+ per category." The constraint only binds on Spatial, which has fewer content hooks. This suggests the CONTENT, not the verbiage, is the primary driver of mechanism count.

### For Different Content Types

The picture would differ for other content:

| Content Type | Binding Categories (where 2+ forces) |
|--------------|--------------------------------------|
| Tutorial (step-by-step) | Depth (tutorials rarely need multiple depth mechanisms) |
| Reference (API docs) | Depth, Spatial (tables and lists are Structure, not Spatial) |
| Narrative (changelog) | Spatial, Structure (narratives flow linearly) |
| Conceptual (theory) | Spatial, Component (theory is prose-dominant, few components) |

**Pattern:** Spatial and Depth are the categories most likely to require FORCING mechanisms under "2+ per category." These categories have fewer mechanisms appropriate for content without parallel/layered structure.

---

## 6. SHOULD VERBIAGE REFLECT "COUNTS ARE DESCRIPTIVE NOT PRESCRIPTIVE"?

### The Philosophy

From Clarification 1: "These numbers were BACKWARD-ENGINEERED from existing pages, not invented as targets. The counts describe NATURAL LANDING ZONES for each level of effort."

This philosophy says: don't set targets. Let the builder select mechanisms based on content needs, and the count emerges naturally. The per-category minimum ensures breadth; the count is a byproduct.

### The Tension

The philosophy conflicts with Ceiling's needs in a specific way:

**For Middle:** "1+ per category" IS descriptive. It sets a FLOOR for breadth, and the count emerges. The Middle experiment proved this -- "1+ per category" naturally produced 12 mechanisms because the content had features in every category.

**For Ceiling:** The defining feature is MULTI-CHANNEL COHERENCE, not mechanism count. But multi-channel coherence REQUIRES deploying multiple mechanisms per semantic dimension, which REQUIRES higher counts. You can't get multi-channel coherence with only 1 mechanism per category -- you need 2+ encoding the same dimension.

So Ceiling has a structural requirement that looks like a count target but is actually a QUALITY requirement. "2+ per category" is a PROXY for "deploy mechanisms in reinforcing pairs," just as "1+ per category" is a proxy for "ensure vocabulary breadth."

### Recommendation: Keep Descriptive Philosophy, Add Qualitative Requirement

The verbiage should:

1. **Keep:** "Counts are descriptive, not prescriptive. Natural landing zones, not targets."
2. **Add:** A QUALITATIVE requirement that inherently produces higher counts. "At least 2 mechanism pairs must encode the same semantic dimension through different CSS channels."
3. **Remove:** Any specific per-category count for Ceiling. The multi-channel coherence requirement naturally produces 2+ per relevant category without forcing mechanisms in categories that don't support them.

This preserves the philosophy while addressing Ceiling's actual need.

### Proposed Ceiling Verbiage

```
CEILING TIER: Metaphor-Driven Multi-Channel Coherence

Selection Logic: Mechanisms are selected THROUGH a derived metaphor, not by
direct content-feature mapping.

Mandatory Requirements (binary, verifiable):
1. Metaphor derived through full Phase 1-3 pipeline
2. At least 1 mechanism from each of the 5 categories (breadth floor, same as Middle)
3. At least 2 REINFORCING PAIRS: mechanism pairs that encode the SAME semantic
   dimension through different CSS channels
   - Example: border-weight (#1) + zone background (#7) both encode "geological
     depth" -- weight increases AND background darkens as content deepens
   - Example: spacing compression (#4) + typographic scale (#11) both encode
     "importance" -- padding shrinks AND heading size shrinks together
4. Pattern visible at 4 scales (Navigation + Page + Section + Component)

Recommended (descriptive, not required):
- Natural landing zone: 12-15 mechanisms
- 3+ transition types for rhythm variation (smooth, bridge, breathing)
- 2+ mechanisms per category where content supports it

WHAT THIS MEANS IN PRACTICE:
Middle deploys mechanisms to solve DIFFERENT problems independently.
Ceiling deploys mechanisms to express the SAME semantic through multiple channels.
The count increase (8-12 -> 12-15) is a BYPRODUCT of multi-channel deployment,
not a target.
```

---

## 7. RECOMMENDED VERBIAGE FOR CEILING TIER

### The Recommendation

**Use the proposed wording from Section 6 above.** It satisfies all requirements:

1. **Binary and verifiable:** "At least 2 reinforcing pairs" is countable. "Pattern at 4 scales" is checkable. "1+ per category" is measurable.
2. **Content-fit preserving:** No per-category count above 1 is mandated. The reinforcing pairs requirement naturally produces 2+ per some categories, but doesn't force mechanisms where content doesn't support them.
3. **Descriptive philosophy maintained:** The 12-15 count range is in the "Recommended" section, explicitly labeled as "descriptive, not required."
4. **Clearly differentiated from Middle:** Middle = independent mechanisms for different problems. Ceiling = reinforcing mechanisms for the same semantic dimension. This is the ACTUAL tier boundary.
5. **Not Flagship:** No multi-pass audit required. No multi-pattern interaction mandated. No character-scale coherence needed. Flagship's unique requirements remain distinct.

### Why Not "2+ Per Category"

"2+ per category" would work for most content (the Middle experiment already exceeded it in 4/5 categories) but FORCES mechanisms in Spatial/Depth categories where content may not support 2. The reinforcing pairs approach gets the same EFFECT (deeper deployment) without the FORCING.

### Why Not Purely Descriptive

A purely descriptive approach ("deploy what content needs, Ceiling pages naturally land at 12-15") gives builders no architectural guidance on HOW Ceiling differs from Middle. The reinforcing pairs requirement is the minimum specification that communicates the actual tier difference.

### The One Change from Middle

Middle verbiage: "Deploy at least 1 mechanism from each of the 5 categories."
Ceiling verbiage: "Deploy at least 1 mechanism from each of the 5 categories. **At least 2 reinforcing pairs must encode the same semantic dimension through different CSS channels.** Pattern visible at 4 scales."

The ADDITION is the reinforcing pairs requirement + scale coverage. The per-category minimum stays the SAME. The count emerges from the quality requirement, not from a count target.

---

## 8. SUMMARY TABLE

| Question | Answer |
|----------|--------|
| Why "1+ per category" for Middle? | Solves "sample 2-4" by ensuring breadth across all 5 categories. Count emerges from breadth. |
| Where is the actual tier boundary? | Selection logic + interaction pattern + rhythm + scale coverage. NOT count. |
| Best wording for Ceiling? | Keep "1+ per category" floor + add "2 reinforcing pairs" + add "4 scales" |
| Does encouraging verbiage push to Flagship? | Option D (compositional mandate) risks it. Option C + reinforcing pairs stays safe. |
| What does "2+" look like for SYSTEM? | Only forces 1 additional mechanism (Spatial). 4/5 categories already had 2+. |
| Should verbiage be descriptive? | YES for counts. Add qualitative binary requirements for Ceiling's actual differentiator. |

---

**END VERBIAGE ANALYSIS**
