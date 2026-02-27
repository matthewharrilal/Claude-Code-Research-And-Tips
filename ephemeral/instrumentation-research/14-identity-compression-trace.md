# Identity Compression Trace: DD/AD/OD/CD to Builder

**Date:** 2026-02-27
**Task:** Map how identity research flows (or dies) through the pipeline to the builder agent.
**Method:** Read every identity layer file, read every builder-facing artifact, trace each piece of identity through the pipeline.

---

## 1. The Full Identity Corpus (What Exists)

| Layer | File | Lines | Purpose |
|-------|------|-------|---------|
| Research | R1-R5 + SYNTHESIS | 4,104 | 337 raw findings across 5 streams |
| Explorations | DD/OD/CD/AD HTML | 28,975 | 18 validated HTML explorations proving concepts |
| Prohibitions | prohibitions.md | 419 | 22 identity-bearing negative rules with evidence |
| Vocabulary | tokens.css | 183 | 65 CSS custom properties (:root block) |
| Grammar | mechanism-catalog.md | 751 | 18 reusable CSS mechanisms with transfer tests |
| Components | components.css | 944 | Pre-built component library CSS |
| Case Studies | 13 files | 5,120 | 9 anti-prescription demonstrations |
| Guidelines | semantic-rules.md | 529 | 7 semantic gap rules |
| **TOTAL IDENTITY** | | **~41,025** | Everything extracted from DD/AD/OD/CD phases |

## 2. What the Builder Actually Receives

| Document | Lines | Delivered How |
|----------|-------|---------------|
| tokens.css | 183 | Direct file read (uncompressed) |
| components.css | 944 | Direct file read (uncompressed) |
| mechanism-catalog.md | 751 | Direct file read (uncompressed) |
| Builder recipe (Pass A) | 866 | Artifact file (pipeline-specific) |
| Builder recipe (Pass B) | 300 | Artifact file (pipeline-specific) |
| Execution brief | ~174 | Assembled per-build by Brief Assembler |
| artifact-identity-perception.md | 556 | Indirectly, via Brief Assembler extraction |
| **TOTAL BUILDER INPUT** | **~3,774** | ~3,600 lines (per council CF-01) |

**Overall compression ratio: 41,025 -> 3,774 = 10.9:1**

But this overstates delivery. The builder does NOT read all 3,774 lines equally. The recipe's Phase 1 instructs the builder to read tokens.css, components.css, mechanism-catalog.md, and the execution brief. The recipe itself is the sequencing frame. Effective visibility: ~2,952 lines (tokens + components + mechanisms + brief + recipe structure).

## 3. Per-Layer Compression Map

### Layer 1: Research (4,104 lines -> 0 lines to builder)

The 337 findings from R1-R5 reach the builder through ZERO direct channels. The research layer feeds into the compositional-core extraction, which feeds into the pipeline artifacts, which feed into the execution brief. The builder never sees R1-R5.

**Compression: INFINITE (total elimination)**

What survives indirectly: Research findings were distilled into prohibitions.md (22 rules), tokens.css (65 tokens), and mechanism-catalog.md (18 mechanisms). The builder reads 2 of these 3 files directly. But the provenance chain (WHY these values, WHAT research justified them) is completely severed. The builder knows border-radius is 0 but not that this emerged from AD-F-013's verification that angular geometry is GENERATIVE, or that R4-AXIS-INNOVATIONS finding #192 validated attention topology through sharp edges.

**What's lost:** Provenance. The builder has rules without reasons.

### Layer 2: Validated Explorations (28,975 lines -> 0 lines to builder)

18 HTML explorations (DD-001 through DD-006, OD-001 through OD-006, CD-001 through CD-006) produced the proof-of-concept artifacts that demonstrated identity in practice. The builder sees NONE of these.

The case studies (5,120 lines) exist as anti-prescription distillations of these explorations, but the builder is PROHIBITED from reading case studies until Phase 5 of the TC pipeline, and the Pass A builder never reaches Phase 5 (that's the TC agent's job, pre-build).

**Compression: INFINITE (total elimination)**

What survives indirectly: The execution brief contains a CD-006 zone-by-zone reference (5 lines) in the recipe's Phase 2 section. This is a compressed summary of CD-006's 39/40 CEILING-tier technique deployment across 8 zones.

**What's lost:** Visual intuition. The builder has never seen what a COMPOSED page looks like. It works from descriptions of CSS patterns, not from visual experience.

### Layer 3: Prohibitions (419 lines -> ~27 lines to builder)

The 22 prohibitions (8 absolute, 12 conditional, 2 meta) are compressed into the execution brief's Tier 1 section. The brief delivers them as "world-description" (10 poetic sentences), not as a prohibition list.

Tracing each soul constraint:

| SC | Prohibitions Source | Brief Form | Survives? |
|----|-------------------|------------|-----------|
| SC-01 Sharp surfaces | Prohib #1 (border-radius:0) + #8 (no rounded decoration) | "Every surface is sharp. Corners are cut, not curved." | YES — world-description |
| SC-02 No shadows | Prohib #2 (box-shadow) + #3 (drop-shadow) | "Light is direct. Nothing floats." | YES — world-description |
| SC-03 Container | Not in prohibitions (added from pipeline evidence) | "Content lives within 940-960px." | YES — world-description |
| SC-04 Warm palette | Prohib #6 (no pure black/white) + #16 (no cool grays) | "Colors carry warmth -- red, cream, near-black" | YES — world-description + hex values |
| SC-05 Font trinity | Prohib #7 (no serif for body) | "Three typefaces. No more." | YES — world-description |
| SC-06 No gradients | Prohib #5 (no gradient backgrounds) | "Color is flat. Backgrounds are solid." | YES — world-description |
| SC-07 No decoration | Prohib #11 (no decorative elements) | "Every element earns its place." | YES — world-description |
| SC-08 Border hierarchy | Prohib #9 (no 2px), #10 (no accent <4px) | "4px primary. 3px section. 1px subtle." | YES — world-description |
| SC-09 Header DNA | Not in prohibitions (from cross-page DNA analysis) | "Dark background. 3px red bottom border." | YES — world-description |
| SC-10 Typography | Prohib #17 (non-italic h3) | "line-height 1.7. 70ch max. h3 italic." | YES — world-description |

**Compression: 419 -> ~27 lines of world-description = 15.5:1**

**What survives:** All 10 soul constraints reach the builder, reframed from prohibition to world-description. The builder knows WHAT the world IS.

**What's lost:**
- 12 conditional prohibitions (#9-#18, #21-#22) are completely absent. The builder never learns about the 2px border epidemic, same-density stacking, traffic-light adjacency, or contentless viewport voids. These are enforced only by gates that (per RC-1 in the master document) are not reliably executed.
- The WHY behind each prohibition (evidence citations, AD validation references, anti-pattern registry cross-references) is eliminated. The builder gets "every surface is sharp" but not "because AD-F-013 proved angular geometry is GENERATIVE, not merely restrictive."
- Meta-prohibitions #19-#20 (no design choices without research provenance, no patterns without tension derivation) are completely absent from builder input. These are process rules enforced by the TC pipeline's phase-gating, not by builder awareness.

### Layer 4: Tokens (183 lines -> 183 lines to builder)

**Compression: 1:1 (zero compression)**

tokens.css is delivered directly to the builder as a file read. This is the ONE layer that survives intact. The builder reads all 65 CSS custom properties. The mutability classification (IMMUTABLE vs MUTABLE vs AVAILABLE) is preserved in CSS comments.

**What's lost:** Nothing. This is the identity layer's best-preserved channel.

### Layer 5: Mechanisms (751 lines -> 751 lines + 12-line summary to builder)

**Compression: 1:1 (zero compression) + supplementary summary**

mechanism-catalog.md is delivered directly to the builder. The builder recipe also provides a 12-line quick-reference table summarizing the 6 mechanism categories and their CSS signatures. This is additive, not compressive.

**What's lost:** Nothing from the catalog itself. However, the SELECTION LOGIC described in the catalog's header (Middle = content-structure mapping vs Ceiling = metaphor-driven multi-channel coherence) is duplicated in the recipe but may be overshadowed by the volume of Phase 2-3 sequencing instructions. The catalog's critical distinction between APPLIED and COMPOSED modes is present in both documents but risks being skimmed.

### Layer 6: Components (944 lines -> 944 lines to builder)

**Compression: 1:1 (zero compression)**

components.css is delivered directly to the builder. All 31KB of pre-built component CSS.

**What's lost:** Nothing from the CSS itself. But the component-inventory.md (confidence levels: HIGH/MEDIUM/LOW) is NOT delivered. The builder knows the CSS patterns but not which components have been validated in multiple explorations vs which are single-exploration experiments.

### Layer 7: Case Studies (5,120 lines -> 0 lines to builder)

**Compression: INFINITE (total elimination)**

The builder never reads case studies. By design: anti-gravity rule R1 prohibits case study access during Phases 0-3, and the TC agent handles Phase 5 divergence checking, not the builder.

**What's lost:** The entire "proof-of-concept" layer. Case studies document HOW identity was successfully realized in practice -- the specific CSS decisions, the tension derivations, the metaphor-to-mechanism mappings. The builder must reinvent these mappings from scratch using only the mechanism catalog (tools) and the execution brief (directions).

### Layer 8: Guidelines (529 lines -> 0 lines to builder)

**Compression: INFINITE (total elimination)**

semantic-rules.md (7 gap rules: info vs note callouts, inline vs block code, table styling, etc.) never reaches the builder. These are handled by the Brief Assembler who embeds relevant decisions into the execution brief.

**What's lost:** Semantic decision criteria. The builder gets "use callout--info" in the brief but not "because this is section-level orientation, not inline warning." The decision rationale is consumed by the Brief Assembler and then discarded.

## 4. The Compression Topology

```
Research (4,104 lines) -----> [ELIMINATED]
    |
    v
Explorations (28,975 lines) -----> [ELIMINATED]
    |
    v
Compositional Core (7,946 lines)
    |
    +--> Prohibitions (419) ---> Brief Assembler ---> 27 lines world-description
    |                                                  (12 conditional prohibitions LOST)
    |
    +--> Tokens (183) ---------> DIRECT to builder (1:1)
    |
    +--> Mechanisms (751) ------> DIRECT to builder (1:1)
    |
    +--> Components (944) ------> DIRECT to builder (1:1)
    |
    +--> Case Studies (5,120) --> [ELIMINATED by anti-gravity]
    |
    +--> Guidelines (529) ------> Brief Assembler ---> [CONSUMED, not forwarded]
    |
    v
Builder receives: 3,774 lines
```

**Three compression modes:**
1. **DIRECT** (tokens, mechanisms, components): 1,878 lines pass through at 1:1. These work.
2. **COMPRESSED** (prohibitions -> brief): 419 lines become 27 lines. The soul survives; the conditional rules and evidence die.
3. **ELIMINATED** (research, explorations, case studies, guidelines): 38,728 lines vanish entirely.

## 5. Are Soul Constraints Accurate Reflections or Arbitrary Codifications?

**PA Circularity Warning (Patterns 1, 3, 7):** The evidence quality assessments below often cite PA audit findings. Since PA-05 and its sub-criteria were designed to detect violations of these same constraints, any SC validated "because PA caught violations" is partially circular. The table below distinguishes between PA-dependent evidence (circular risk) and PA-independent evidence (structurally sound). Claims of "perceptual finding" are tested against the Pattern 7 criterion: is there a measurable human perception limit being referenced, or is this a design convention?

Tracing each SC back to evidence:

| SC | Evidence Quality | Source | Arbitrary? |
|----|-----------------|--------|------------|
| SC-01 Sharp surfaces | STRONG | AD-F-013 proved GENERATIVE; 100% of explorations used it | No -- validated as enabling, not restricting |
| SC-02 No shadows | STRONG | AD-F-020 (20 R-4 findings reinterpreted); anti-physical identity | No -- core identity principle |
| SC-03 Container 940-960px | MIXED | 60% historical violation rate proves it matters, but "940-960px" specifically is an OBSERVATION from existing pages, not a perceptual finding. The range is narrow -- 940 vs 960 is a 20px difference. Evidence: 3/5 builds violated it. The claim that this is "perception physics" (Pattern 7) does not hold — no Weber's law or contrast sensitivity threshold produces 940-960px. This is a design convention elevated to physics status. | Partially arbitrary width. The PRINCIPLE (fixed spine) is well-evidenced. The SPECIFIC RANGE is a convention, not a perceptual limit. |
| SC-04 Warm palette | MODERATE (reclassified) | Multiple anti-pattern registry entries; warm cream vs cool gray is demonstrably different in HUE but the claim that warm = "editorial" is this system's aesthetic association, not a perceptual universal (Pattern 4). The Economist uses cool palettes editorially. Evidence that warm palette IS the identity is strong; evidence that warm palette IS BETTER is system-shaped. | Identity-accurate, not perceptually-superior |
| SC-05 Font trinity | STRONG | Typography hierarchy validated across all explorations | No -- but the specific fonts (Instrument Serif, Inter, JetBrains Mono) are CHOICES, not discoveries |
| SC-06 No gradients | MODERATE | Anti-physical identity extension; no direct "gradients hurt quality" evidence | Somewhat -- this is an aesthetic CHOICE codified as universal law |
| SC-07 No decoration | MODERATE | Anti-complexity principle well-evidenced; but "zero decoration" is extreme | Edge case -- the principle is sound but the binary enforcement may be too strict |
| SC-08 Border hierarchy | STRONG | 2px border epidemic (OD-F-AP-001: 108 declarations, 1000+ computed instances) is well-documented | No -- 4/3/1 is empirically derived |
| SC-09 Header DNA | MODERATE | Observed in independently-built pages, but N=2 (Gas Town + CD-006) | Somewhat -- "dark header + 3px red border" is a PATTERN, not a universal identity truth. A page with a light header could still be KortAI. |
| SC-10 Typography | STRONG | line-height 1.7 (readability), 70ch (reading research), h3 italic (hierarchy) | No for 1.7 and 70ch (perception-grounded). The h3-italic rule is an aesthetic CHOICE with thin evidence (anti-pattern registry entry + "editorial hierarchy convention"). |

**Summary:** 6 of 10 soul constraints are well-evidenced identity principles. 4 have varying degrees of arbitrary codification:
- SC-03: Specific range (940-960px) is narrower than evidence supports
- SC-06: No-gradients is aesthetic philosophy, not empirical finding
- SC-09: Header DNA pattern from N=2 observation codified as universal
- SC-10: h3-italic is a stylistic choice, not a perceptual necessity

**[NUANCED by independent evaluation:]** The independent evaluation takes a different stance on the soul constraints as a whole: "These are reasonable design decisions, not arbitrary restrictions. They define a coherent visual identity (sharp, flat, warm, editorial). The constraints are GENERATIVE — they force creative solutions within a distinctive design language." The key reframe: even where individual constraints have thin evidence (SC-06, SC-09), they collectively produce a distinctive system that forces builders to solve design problems with spacing/borders/backgrounds rather than defaulting to shadows/rounded corners/gradients. The independent check's one concern is that "NEVER use pure black/white" creates edge cases with SVGs, third-party embeds, and code syntax highlighting. The constraints may be AESTHETIC CHOICES that got elevated to UNIVERSAL LAWS, but the independent evaluation argues they are still GENERATIVE aesthetic choices.

## 6. What's Lost vs Distorted vs Survives

### SURVIVES INTACT (1,878 lines)
- tokens.css (183 lines) -- full fidelity
- mechanism-catalog.md (751 lines) -- full fidelity
- components.css (944 lines) -- full fidelity

These three files ARE the creative engine's vocabulary. The builder has the TOOLS. This is the pipeline's strength.

### COMPRESSED BUT PRESENT (419 -> 27 lines)
- Soul constraints survive as world-description
- 10/22 prohibitions encoded as SCs
- Perception thresholds survive as calibration table (8 lines in brief)

What's distorted: The FRAMING changes from "you must not" to "this world is." This is intentional (council verdict Pattern 2) and arguably improves builder creative engagement. But it also means the builder doesn't know which constraints are HARD STOPS vs which are GUIDELINES.

### LOST COMPLETELY (38,728 lines)
1. **Provenance chains** (why each rule exists)
2. **Conditional prohibitions** (12 of 22 rules: 2px epidemic, traffic-light adjacency, contentless viewports, same-density stacking)
3. **Case studies** (9 proof-of-concept demonstrations of how identity is realized in practice)
4. **Research findings** (337 findings from 5 streams)
5. **Validated explorations** (18 HTML implementations)
6. **Semantic decision criteria** (7 gap rules)
7. **Component confidence levels** (which components are high-confidence vs experimental)

## 7. The Core Problem

The pipeline delivers VOCABULARY (tools) perfectly but ELIMINATES FLUENCY (how to combine tools). The builder gets tokens.css + mechanism-catalog.md + components.css at 1:1. But it gets zero case studies (proof of fluency), zero research provenance (why these tools), and compressed prohibitions (the rules without reasons).

This is like giving a musician all the notes but no recordings, no sheet music, and a list that says "this instrument has 88 keys" instead of "here's why these chords work together."

The execution brief PARTIALLY compensates: it provides a per-build metaphor, zone assignments, multi-coherence mappings, and density arc. This is the pipeline's most important innovation -- pre-computing the "how to combine" decisions that would otherwise require the builder to have case study access. The question is whether a 174-line brief can replace 5,120 lines of case study wisdom.

**[NUANCED by independent evaluation:]** Despite the compression, the independent evaluation rates the pipeline architecture SOLID. Specific strengths independently confirmed:
- The Brief Assembler doing what TC's Phases 0-3.5 did (compressed into template fill-in) works in practice — both builds produced functional pages
- "Recipe over checklist" distinction in builder instructions is a "genuine finding that drives real quality differences"
- Binary rules over judgment calls is the right architectural principle
- Perception thresholds (15 RGB, 0.025em, 120px) are "empirically derived from actual failures — real design engineering"
- Iteration as standard path (IMPROVE as expected outcome, not failure) is "architecturally honest about LLM generation quality"

The independent evaluation does flag one concern about fluency loss: "The pipeline depends on a Content Analyst deriving a viable metaphor in ~15 minutes. The TC skill's 5-phase process for this was designed to take longer for good reason. The compression may sacrifice derivation quality." This confirms the fluency gap exists but suggests it manifests most acutely in metaphor derivation, not in vocabulary delivery.

Evidence says: partially. PA-05 scores of 2.0 (initial) -> 3.5 (after IMPROVE) suggest the brief + IMPROVE cycle recovers much of what the compression loses. But the IMPROVE cycle requires a second PA audit and a different builder -- meaning the pipeline compensates for compression loss with ITERATION, not with information delivery.

**PA Circularity caveat (Patterns 1, 2):** The claim that IMPROVE "recovers what compression loses" rests entirely on PA-05 as the quality metric. PA-05's FLAT/ASSEMBLED/COMPOSED/DESIGNED scale is this system's compositional model, not an objective quality ladder (Pattern 2). A page moving from PA-05 2.0 to 3.5 proves the page became MORE ALIGNED WITH THIS SYSTEM'S AESTHETIC, which is the GOAL but is not the same as proving it became objectively better. This distinction matters because PA-05 was designed to reward the identity encoded in the very files being compressed.

**Compression is not the enemy. UNCOMPENSATED compression is.** The pipeline's two-cycle convergence architecture is designed to recover from compression loss. The question is whether this is the most efficient recovery mechanism, or whether delivering more identity information upfront would reduce the need for expensive PA + IMPROVE cycles.

**[OVERLOOKED: Dead Skill Layer]** The independent evaluation identified an additional compression layer this trace did not account for: the TC skill (~1,650 lines) is effectively dead code. /build-page does NOT invoke /tension-composition. The pipeline replaced TC's 5-phase metaphor derivation with Content Analyst + Brief Assembler. The TC brief template is a 236-line static template, not generated by running the TC skill. This means the compression topology has a PHANTOM layer: 1,650 lines of skill infrastructure that appears to be part of the pipeline but is never invoked. The PA skill's content was more successfully extracted (verbatim into pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md). The TC skill's first 700 lines (Phases 0-3.5) contain genuinely valuable methodology — the FEEL/UNDERSTAND/DO/BECOME axis, the Addition Test, the Metaphor Quality Rubric — that lives on conceptually in the pipeline but is not directly referenced during builds.
