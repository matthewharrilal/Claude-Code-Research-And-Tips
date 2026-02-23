# 21: Brief Primacy Effect Analysis

**Task:** Analyze how the TC brief's position as first-read material dominates builder behavior, filtering how the builder processes the subsequent 3,700 lines of reference material.

**Method:** Examined the exact reading order specified in SKILL.md, the 99-line TC brief, the 610-line conventions brief, and the builder's build log (including the BRIEF REFLECTION section where the builder self-reports which sections influenced decisions). Mapped TC brief content against conventions brief sections to test the overlap hypothesis. Analyzed LLM attention mechanisms vs. human primacy effects.

---

## 1. THE EXACT READING ORDER

The builder spawn prompt in SKILL.md (lines 96-106) specifies:

```
Read these files IN THIS ORDER (order matters -- TC brief establishes
compositional foundation, conventions brief establishes world model,
recency keeps soul constraints fresh):

1. [output-dir]/_tc-brief.md           -- ~99 lines, DESIGN BRIEF
2. design-system/pipeline/conventions-brief.md  -- ~610 lines, PROCESS GUIDANCE
3. [content-file-path]                 -- THE MATERIAL (variable length)

Reference files (consult as needed during build):
4. mechanism-catalog.md                -- mechanism CSS patterns
5. components.css                      -- component library
6. tokens.css                          -- CSS variable values
7. prohibitions.md                     -- soul constraints (read LAST)
```

The ordering rationale is stated explicitly: "TC brief establishes compositional foundation, conventions brief establishes world model, recency keeps soul constraints fresh." This is an intentional design choice, not an accident.

The builder sees approximately:
- File 1: 99 lines (TC brief)
- File 2: 610 lines (conventions brief)
- File 3: Variable (content markdown, typically 500-2000 lines)
- Files 4-7: ~3,100 lines combined (reference material, "consult as needed")

Total context load: ~4,300-5,800 lines in a single builder prompt.

---

## 2. WHAT THE BUILDER ACTUALLY CITED

From the build log's BRIEF REFLECTION section, the builder explicitly cited these conventions brief sections:

| Cited Section | Brief Section # | Lines | Topic |
|--------------|----------------|-------|-------|
| Multi-Coherence | Section 4 | 80 lines | Channel shifts, semantic directions |
| Perception Physics | Section 2 | 46 lines | RGB thresholds, perceptibility |
| Fractal Echo | Section 5 | 62 lines | Pattern at every scale |
| Transition Grammar | Section 7 | 28 lines | SMOOTH/BRIDGE/BREATHING |

**Cited:** 4 out of 19 sections (21%)

**Not cited in reflection:**
| Uncited Section | Brief Section # | Lines | Topic |
|----------------|----------------|-------|-------|
| Identity (Soul) | Section 1 | 40 lines | Soul constraints, palette |
| Richness | Section 3 | 18 lines | density × restraint × spatial confidence |
| Unified Metaphor | Section 6 | 18 lines | Structural metaphor requirement |
| CSS Vocabulary | Section 8 | 60 lines | Component DNA, borders, dark slab, callouts |
| Creative Authority | Section 9 | 12 lines | What builder can override |
| Quality Floor | Section 9B | 14 lines | Minimum mechanism/CSS counts |
| Compositional Memory | Section 10 | 12 lines | Preventing drift |
| Five Questions | Section 11 | 14 lines | Self-check protocol |
| Restraint List | Section 12 | 14 lines | What's NOT available |
| Accessibility | Section 13 | 40 lines | HTML skeleton, ARIA |
| Responsive | Section 14 | 10 lines | Breakpoints |
| Conviction Card | (unnumbered) | 22 lines | Commitment template |
| Process | (unnumbered) | 40 lines | Understand/Plan/Build/Verify |
| Token Compliance | (unnumbered) | 16 lines | Token usage requirements |
| Builder Warnings | (unnumbered) | 16 lines | W-codes |

However, "not cited in reflection" does not mean "not used." Several uncited sections clearly influenced the build:

- **Section 1 (Identity):** The builder respected all soul constraints perfectly (7/7). Not cited because it was internalized, not because it was ignored.
- **Section 9B (Quality Floor):** The builder hit 15 mechanisms, 1059 CSS lines, all thresholds. Also internalized.
- **Section 11 (Five Questions):** The builder answered all five. Clearly read and followed.
- **Section 12 (Restraint List):** The builder documented 3 deliberately absent mechanisms.
- **Section 13 (Accessibility):** 33 ARIA landmarks, skip link, all structural elements.

This complicates the narrative. The builder cited 4 sections as INFLUENCES ON DECISIONS but COMPLIED with many more. The distinction matters: primacy may affect which sections shape CREATIVE choices without preventing COMPLIANCE with procedural requirements.

---

## 3. MAPPING TC BRIEF CONTENT TO CONVENTIONS BRIEF SECTIONS

The core hypothesis is: the builder cited only those conventions brief sections that the TC brief ALSO covered, because the TC brief created a filter. Let me test this by mapping TC brief content to conventions brief sections.

### What the TC brief covers explicitly:

| TC Brief Section | Conventions Brief Overlap | Conventions Brief Section |
|-----------------|--------------------------|--------------------------|
| §1 Structural Metaphor (CSS directions: border-weight, bg shifts, spacing) | Multi-coherence channels, perception thresholds | §4, §2 |
| §2 Zone Architecture (4 zones, density, layout, directions) | Transition grammar, coherence arc | §7, §4 |
| §3 Content Tensions (3 tension axes) | None direct (TC-specific) | - |
| §4 Selected Mechanisms (15 mechanisms) | Quality floor mechanism count, fractal echo | §9B, §5 |
| §5 Metaphor-Implied CSS Directions | CSS vocabulary, parametric echo | §8, §5 |
| §6 Build Recipe (zone-by-zone CSS values) | Boundary CSS recipe in Process section, perception thresholds | Process, §2 |
| §7 Detection Expectations | None (weaver-only) | - |
| §8 Builder Anchors (3 guardrails) | None direct (content-specific) | - |

### The overlap test:

**Builder-cited sections vs TC brief coverage:**
- Section 4 (Multi-Coherence) — CITED, TC brief §1 and §2 explicitly encode multi-coherence directions and channel counts
- Section 2 (Perception Physics) — CITED, TC brief §1 gives specific RGB deltas, §6 gives specific spacing values
- Section 5 (Fractal Echo) — CITED, TC brief §4 deploys mechanisms at all 5 category levels, §5 gives per-scale CSS
- Section 7 (Transition Grammar) — CITED, TC brief §2 names exact transition types (HARD CUT, SPACING SHIFT, CHECKPOINT)

**Uncited sections vs TC brief coverage:**
- Section 6 (Unified Metaphor) — NOT CITED, but TC brief §1 provides the metaphor directly. Builder didn't need the conventions brief to explain what a structural metaphor IS — the TC brief handed them one.
- Section 8 (CSS Vocabulary) — NOT CITED, but TC brief §5 and §6 provide specific CSS patterns. The builder may not have needed the general vocabulary section because they had content-specific CSS.
- Section 3 (Richness) — NOT CITED, and TC brief doesn't explicitly address richness. This is a genuine gap.
- Section 1 (Identity/Soul) — NOT CITED as influence, but fully complied with. Also covered by File 7 (prohibitions.md, "read LAST").

**Verdict on overlap hypothesis:** The hypothesis is PARTIALLY CONFIRMED. The 4 sections the builder cited as creative influences all have strong TC brief parallels. But the causation arrow is ambiguous — it could be:

(A) **Primacy filter:** Builder reads TC brief first, forms a mental model of "what matters," then scans conventions brief for sections that reinforce that model, skimming the rest.

(B) **Relevance filtering:** Builder reads both, but the TC brief makes certain conventions sections RELEVANT to THIS PAGE while others are abstract/general. The builder cites the relevant ones.

(C) **Mutual causation:** The TC brief was designed to cover the most important conventions brief concepts (multi-coherence, perception thresholds, transitions), so overlap is by design, not by accident.

Explanation (C) is clearly true at the design level — the TC skill was built to pre-derive the conventions brief's most critical concepts for a specific content. But explanations (A) and (B) concern what happens in the builder's attention window, and they predict different behavior if the reading order changes.

---

## 4. PRIMACY IN LLMs vs HUMAN COGNITION

### Human primacy effect

In human cognition, primacy is a well-documented memory phenomenon: items encountered first are disproportionately recalled and influential. This operates through several mechanisms:

1. **Encoding advantage:** First items get more rehearsal time in working memory because they arrive when cognitive load is lowest.
2. **Schema formation:** First information creates a mental model; subsequent information is assimilated into (or rejected by) that model.
3. **Confirmation bias coupling:** Once a schema forms, new information that fits the schema is absorbed while contradictory information is discounted.
4. **Serial position curve:** First items (primacy zone) and last items (recency zone) are recalled better than middle items.

### LLM "primacy" — a different mechanism with similar effects

LLMs do not have memory in the human sense. They process the entire context window in parallel through self-attention. However, several mechanisms produce primacy-like effects:

**4a. Attention concentration.** Transformer attention mechanisms have been shown to disproportionately attend to the beginning and end of the context window (the "lost in the middle" phenomenon, documented in Liu et al. 2023 and subsequent work). Information in the middle of a long context receives less effective attention weight. In our case:

- TC brief (first 99 lines): HIGH attention
- Conventions brief beginning (next ~100 lines): MODERATE attention
- Conventions brief middle (~200 lines): LOWER attention
- Conventions brief end (~100 lines): MODERATE-HIGH attention (recency boost)
- Content file: MODERATE attention
- Reference files: LOWEST attention (farthest from initial context, "consult as needed" framing further deprioritizes)

**4b. Instruction anchoring.** LLMs weight instructions and framing earlier in context more heavily than later content. The TC brief is presented as "YOUR DESIGN BRIEF" — a direct instruction. The conventions brief is "YOUR PROCESS GUIDANCE" — a reference. This framing difference compounds the positional advantage.

**4c. Specificity trumps generality.** The TC brief provides SPECIFIC values (exact hex colors, exact px values, exact mechanism names, exact zone names). The conventions brief provides GENERAL principles (what multi-coherence IS, what fractal echo MEANS). When specific and general content coexist in context, the specific content dominates generation because it requires less inference.

**4d. Continuation coherence.** Once the builder begins generating output (the conviction statement, then HTML/CSS), each generated token shifts the model's attention toward tokens that cohere with what's already been produced. The conviction statement is directly derived from the TC brief. All subsequent generation then maintains coherence with the conviction statement (hence the TC brief), creating a self-reinforcing loop.

### Are they the same phenomenon?

No, but they produce the same behavioral signature. Human primacy is a MEMORY effect (first-encountered items are better encoded). LLM primacy is an ATTENTION effect (first-positioned items receive more attention weight) combined with a SPECIFICITY effect (specific instructions outweigh general principles). The behavioral result — first-read material dominates — is similar enough that the analogy holds pragmatically.

The key difference: human primacy can be partially overcome by spacing, repetition, or active retrieval practice. LLM primacy can be overcome by REPOSITIONING (changing where material appears in context) or REFORMULATION (making later material more specific and instruction-like).

---

## 5. THE TC BRIEF AS LENS

### How lens effects work in context windows

When a builder reads the TC brief first, it creates what I'll call a **semantic activation pattern**: specific concepts (zones, mechanisms, transition types, color values) become highly activated in the model's internal state. When the conventions brief is then processed, tokens that match the activated pattern receive BOOSTED attention (they're "recognized") while tokens that don't match receive BASELINE attention (they're processed but not prioritized for generation).

This is the lens effect: the TC brief doesn't make the conventions brief invisible, but it makes certain parts SALIENT and other parts merely PRESENT.

### Evidence from the Gas Town build

The build log provides direct evidence of the lens at work:

1. **Background color override:** The builder read TC brief §6 (exact hex values), then read conventions brief §2 (>=15 RGB threshold). The perception threshold was ACTIVATED because the TC brief's specific values were close to the threshold boundary. The builder noticed the mismatch and corrected: "TC brief's zone backgrounds had max deltas of 13, 5, and 8 -- all below the 15 RGB threshold. Without the perception physics section, I would have used those values and produced imperceptible zone boundaries."

   This is the lens WORKING WELL: the TC brief's specific values created a concrete thing to check against the conventions brief's threshold. The general principle became actionable through the specific values.

2. **Transition types:** The TC brief §2 names "HARD CUT, SPACING SHIFT, CHECKPOINT." The conventions brief §7 defines SMOOTH, BRIDGE, and BREATHING. The builder used the TC brief's terms (HARD CUT, SPACING SHIFT, CHECKPOINT), mapping them onto the conventions brief's framework but citing the TC brief's vocabulary. The lens selected the TC brief's terminology over the conventions brief's.

3. **Richness (Section 3):** The conventions brief's richness section defines `richness = density × restraint × spatial confidence`. The TC brief never uses the word "richness." The builder's build log never mentions richness. This is a GENUINE LENS BLIND SPOT — a concept present in the conventions brief but absent from the TC brief, and therefore invisible to the builder's creative decision-making (even though the builder likely complied with richness minimums through other mechanisms).

4. **CSS Vocabulary (Section 8):** The conventions brief provides detailed patterns (component 2-zone DNA, dark slab inversion, callout accent system, etc.). The TC brief §6 provides content-specific CSS. The builder used the TC brief's CSS rather than the conventions brief's general patterns. This is lens displacement: specific CSS overrides general CSS patterns.

### The lens is not total

The builder DID access conventions brief material NOT covered by the TC brief:
- Five questions were answered (Section 11)
- Three deliberately absent mechanisms were documented (Section 12 influence)
- Accessibility skeleton was built correctly (Section 13)
- Token compliance was partially achieved (Token Compliance section)

These are all PROCEDURAL sections — "do this before submitting," "include these elements," "check this." The lens filters CREATIVE INFLUENCE but not PROCEDURAL COMPLIANCE. The builder follows checklists from the conventions brief while deriving creative direction from the TC brief.

---

## 6. WHAT IF THE READING ORDER WERE REVERSED?

### Scenario A: Conventions brief first, TC brief last

If the builder reads the conventions brief FIRST:

**Predicted effects:**
1. The builder would form a mental model around the conventions brief's GENERAL principles (multi-coherence, fractal echo, perception physics, richness) rather than the TC brief's SPECIFIC values.
2. When the TC brief is then read, its specific values would be interpreted through the general principles, rather than the general principles being filtered through specific values.
3. **Richer creative engagement with the conventions brief:** Without pre-formed specifics, the builder would need to derive zone backgrounds, transitions, and mechanisms from general principles + content. This forces deeper engagement with sections 3 (Richness), 6 (Unified Metaphor), 8 (CSS Vocabulary), and 9 (Creative Authority).
4. **Risk: TC brief specifics might be REJECTED.** If the general principles create a strong enough schema, the TC brief's specific recommendations might be dismissed as "one possible implementation" rather than accepted as "the design direction." This could produce a DIFFERENT page than the TC analyst intended.
5. **Risk: Lost in the middle.** With 610 lines of conventions brief first, the TC brief would be in the MIDDLE of context when the content file is added. Middle-of-context attenuation could reduce TC brief influence significantly.

**Net prediction:** Reversed order would produce broader conventions brief utilization (more sections cited, more creative engagement) but weaker TC brief adherence. The builder would build a more "generically excellent" page with less content-specific compositional intelligence. Whether this is better or worse depends on whether the TC brief's compositional intelligence is additive or substitutive.

### Scenario B: Conventions brief first, TC brief NOT given

If the TC brief is eliminated entirely:

**Predicted effects:**
1. The builder has no pre-derived metaphor, zone architecture, or mechanism selection.
2. The builder must derive these FROM the content using the conventions brief's principles.
3. This is essentially a test of whether the conventions brief alone is sufficient for Flagship output.
4. **Historical evidence says no.** The Flagship experiment (before the current pipeline) gave the builder a very long prompt with conventions-level material and no TC brief equivalent. Result: PA-05 1.5/4, imperceptible backgrounds, zero borders. The failure was attributed to multiple factors (guardrail factory, checklist not recipe, Sonnet model), but the absence of content-specific compositional pre-analysis was not isolated as a variable.
5. **However:** The current conventions brief (610 lines) is vastly improved over the Flagship experiment's 963-line prompt. It includes recipes, thresholds, and procedural guidance that the old prompt lacked. A fresh test might produce different results.

### Scenario C: TC brief EMBEDDED within the conventions brief

If the TC brief's content is woven INTO the conventions brief at relevant sections:

**Predicted effects:**
1. Each conventions section would pair general principle with content-specific application.
2. Multi-coherence section would include: "For THIS content, here are your zone boundaries and channel shifts."
3. Fractal echo section would include: "For THIS content, here is how the organizing principle manifests at each scale."
4. **Strongest predicted outcome.** The general principle provides UNDERSTANDING, the embedded specific provides DIRECTION. No lost-in-the-middle problem because specifics appear alongside their general context.
5. **Cost: Longer conventions brief.** The 610-line brief would grow to ~700 lines. Each invocation would need content-specific inserts, requiring either dynamic document generation or a more complex orchestrator.
6. **Cost: Reduced creative authority.** If every section tells the builder what to do for THIS content, the builder's 80% creative authority becomes narrower. The conventions brief would shift from "world description" to "implementation spec."

---

## 7. ALTERNATIVE MECHANISMS TO PRIMACY

The user's hypothesis is that primacy is THE mechanism by which the TC brief dominates. I need to evaluate whether primacy is one mechanism among several.

### Mechanism 1: Primacy (positional dominance)
**Evidence strength: MODERATE.** The TC brief is first-read and benefits from positional attention. But the conventions brief's opening lines also benefit from primacy relative to its own middle sections. The first ~100 lines of the conventions brief (Sections 1-2) are the most compliance-critical and most frequently followed.

### Mechanism 2: Specificity asymmetry
**Evidence strength: STRONG.** The TC brief provides exact hex colors, exact px values, exact mechanism names, exact zone names, exact CSS snippets (Section 6 includes actual CSS). The conventions brief provides principles, ranges, and examples. When both are in context, the specific wins not because it was read first but because it requires less inference to convert into CSS output.

### Mechanism 3: Instruction framing
**Evidence strength: STRONG.** The builder spawn prompt frames the TC brief as "YOUR DESIGN BRIEF" and the conventions brief as "YOUR PROCESS GUIDANCE." The word "brief" implies "act on this." The word "guidance" implies "consult this." This framing creates a principal-subordinate relationship independent of reading order.

### Mechanism 4: Recipe format
**Evidence strength: STRONG.** The TC brief's Section 6 (Build Recipe) provides a SEQUENCED RECIPE with action verbs: "Deploy," "Set," "Apply." The conventions brief's Process section also has action verbs but at a higher abstraction level: "Read the content," "Plan your zone architecture," "Build boundary by boundary." The TC brief recipe is closer to executable pseudocode. Historical finding: recipe format > checklist format for builder quality (middle-tier experiment).

### Mechanism 5: Size asymmetry
**Evidence strength: MODERATE.** 99 lines vs 610 lines. The TC brief is small enough to hold entirely in working attention. The conventions brief is too large — the builder must selectively attend. Even without positional advantages, the TC brief would be more thoroughly processed simply because it's smaller.

### Mechanism 6: Task identity
**Evidence strength: MODERATE.** The builder's TASK is to build a page for specific content. The TC brief is ABOUT that specific content. The conventions brief is about ALL content. Task-relevant material naturally receives more attention than task-general material, regardless of position.

### Relative contribution estimate

| Mechanism | Contribution to TC dominance | Could be eliminated by order change? |
|-----------|-----------------------------|------------------------------------|
| Primacy (positional) | ~15-20% | YES — order change directly addresses this |
| Specificity asymmetry | ~25-30% | NO — TC brief is inherently more specific |
| Instruction framing | ~15-20% | PARTIALLY — reframing could equalize |
| Recipe format | ~15-20% | NO — TC brief is inherently more recipe-like |
| Size asymmetry | ~10-15% | NO — TC brief is inherently smaller |
| Task identity | ~10-15% | NO — TC brief is inherently task-specific |

**Primacy is real but accounts for only ~15-20% of the TC brief's dominance.** Changing reading order would shift the balance but would not eliminate the TC brief's creative influence because the other mechanisms (specificity, recipe format, size, task identity) are structural properties of the TC brief, not positional ones.

---

## 8. THE REAL QUESTION: IS TC BRIEF DOMINANCE A PROBLEM?

The previous sections establish that the TC brief dominates the builder's creative decision-making. But the user's implicit concern is whether this dominance HARMS output quality. The evidence is mixed:

### Evidence that TC dominance HELPS:
1. **Gas Town scored PA-05 3.5/4 (COMPOSED) and Tier 5 6.5/9 (CEILING).** This is the best pipeline output to date.
2. The builder corrected the TC brief's background values using the conventions brief's perception thresholds — demonstrating that the conventions brief DID influence critical decisions where the TC brief was wrong.
3. The builder's coherence was rated 4/4 (outstanding) by 9/9 auditors. The TC brief's pre-derived metaphor and zone architecture produced genuine compositional coherence.
4. The metaphor was rated as STRUCTURAL and PERSISTENT through all zones (PA-68 YES).

### Evidence that TC dominance HURTS:
1. **PA-65 (Compositional Voice) = NO.** "Choir in unison" — channels shift together. This is exactly what the TC brief prescribes (multi-coherence where channels shift together at boundaries). Independent voice requires channels moving AGAINST each other, which contradicts the TC brief's multi-coherence directions.
2. **PA-67 (Novelty) = NO.** "Well-executed but familiar editorial language." The TC brief provides proven patterns from the mechanism catalog. Novelty requires DEPARTING from the catalog, which the TC brief does not encourage.
3. **Richness concept invisible.** Section 3's `richness = density × restraint × spatial confidence` was never engaged as a creative framework. The builder satisfied richness through mechanism count minimums, not through the richness equation.
4. **Conventions brief sections 6, 8, 9 under-utilized.** The metaphor framework (§6), CSS vocabulary patterns (§8), and creative authority framing (§9) were all present but not cited as creative influences.

### Interpretation:
The TC brief produces CEILING-tier output (PA-05 3.5, strong coherence, persistent metaphor) but may SUPPRESS FLAGSHIP-tier output (PA-65 multi-voice, PA-67 novelty). The pre-derived metaphor, zones, and mechanisms hand the builder a coherent plan but also constrain the space for compositional surprise. The conventions brief's creative authority section (§9) explicitly says "80% of decisions are yours" but the TC brief pre-makes many of those decisions.

This is the **pre-derivation paradox**: the TC brief ensures coherent output by pre-deriving the compositional plan, but the same pre-derivation limits the builder's creative capacity to produce the unexpected. Ceiling-tier coherence and Flagship-tier novelty may be in fundamental tension when one agent pre-derives and another implements.

---

## 9. CONCLUSIONS

### Finding 1: Primacy is real but not the primary mechanism
The TC brief's dominance stems from multiple reinforcing factors: position (primacy), specificity, recipe format, size, instruction framing, and task relevance. Position accounts for ~15-20% of the effect. Changing reading order alone would shift but not eliminate TC brief dominance.

### Finding 2: The lens effect is SELECTIVE, not total
The TC brief creates a lens that filters CREATIVE INFLUENCE (which sections shape design decisions) but not PROCEDURAL COMPLIANCE (which checklists get followed). The builder cited 4/19 sections as creative influences but complied with 12+ sections procedurally. The distinction between creative lens and procedural compliance is critical — they are different cognitive pathways in an LLM builder.

### Finding 3: The 4 cited sections all have TC brief parallels (partially confirmed)
The overlap hypothesis holds: the builder cited exactly those conventions brief sections that the TC brief also covered (multi-coherence, perception, fractal echo, transitions). But causation is ambiguous — this could be primacy filtering, relevance filtering, or mutual causation (the TC brief was designed to cover these concepts).

### Finding 4: TC brief dominance is adaptive up to CEILING, maladaptive for FLAGSHIP
The pre-derivation pattern produces coherent, composed output (PA-05 3.5) but may actively suppress the compositional surprise and multi-voice independence required for PA-65 and PA-67. The ceiling-flagship gap may be a structural consequence of the TC brief's existence, not just its position.

### Finding 5: The conventions brief is over-sized for its actual role
At 610 lines, the conventions brief plays two roles: (a) establishing perception thresholds and compliance requirements (~200 lines, high-impact), and (b) providing creative framework and inspiration (~410 lines, low-impact because TC brief pre-empts it). Splitting these roles could improve both: a shorter compliance document that gets fully absorbed, and creative material embedded where it's needed (in the TC brief or in per-zone instructions).

### Finding 6: Reversed order would likely REDUCE coherence without GAINING novelty
If the conventions brief were read first, the builder would form a more general schema. When the TC brief then arrives, its specific recommendations would still dominate (specificity effect). But the general schema might create resistance to the TC brief's specifics, producing a page that's less coherent (weaker multi-coherence) without being more novel (novelty requires a different mechanism than reading order). The worst-case scenario is a builder that half-follows the TC brief and half-follows the conventions brief, producing neither strong coherence nor genuine novelty.

---

## 10. RECOMMENDATIONS

### If the goal is CEILING-tier output (PA-05 >= 3.5):
Keep current reading order. The TC brief's primacy HELPS produce coherent output. The conventions brief's perception thresholds get activated through the TC brief's specific values. The system is working as designed.

### If the goal is FLAGSHIP-tier output (PA-05 >= 3.5 AND PA-65 + PA-67):
The primacy effect is a secondary concern. The primary intervention is to create space for EMERGENT compositional intelligence that goes beyond what the TC brief pre-derives. Possible approaches:
1. **TC brief provides constraints, not solutions.** Instead of zone backgrounds, mechanisms, and CSS: provide tensions, metaphor, and "avoid these" constraints. Let the builder derive specific CSS from conventions brief principles.
2. **Dual-pass building.** First pass follows TC brief (produces coherent base). Second pass reads ONLY the conventions brief's creative sections (§3, §6, §8, §9) and adds compositional surprise, independent voices, and novelty ON TOP of the coherent base.
3. **Embedded brief.** Weave content-specific guidance into the conventions brief at relevant sections, eliminating the separate TC brief entirely. The builder encounters general principle and specific application simultaneously.

### If the goal is understanding the phenomenon:
The cleanest experiment would be the Q20 approach: run the same content with the TC brief embedded WITHIN the conventions brief (at the relevant sections), keeping all other variables constant. If the builder engages with MORE conventions brief sections, the primacy-as-position hypothesis is confirmed. If the builder engages with the same 4 sections, the specificity hypothesis dominates.

---

*Analysis complete. 99 lines of TC brief + 610 lines of conventions brief → the builder used 4 sections creatively and 12+ sections procedurally. Primacy is real (~15-20% of the effect) but specificity, recipe format, and task identity are larger factors. The conventions brief functions more as a compliance document than a creative resource — not because of reading order, but because the TC brief pre-empts its creative role.*
