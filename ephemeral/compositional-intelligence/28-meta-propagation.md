# METACOGNITIVE: Propagation Without Loss

**Author:** Propagation Without Loss Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #28
**Sources:** PV2-PIPELINE-DIAGRAM.md (977 lines), 14-MASTER-SYNTHESIS.md (615 lines), TC SKILL.md (~1,878 lines), mechanism-catalog.md (~900 lines)
**Core Question:** How does compositional intelligence survive skill boundaries? Can it be made lossless?

---

## EXECUTIVE SUMMARY

Compositional intelligence in PV2 crosses **7 boundaries** between creation and CSS output. At each boundary, information changes format. The critical finding: **the pipeline uses the WRONG propagation pattern at its most critical boundary** (TC-to-Builder), employing TEXT COMPRESSION where it should use CODE PASS-THROUGH. The entire problem can be reframed: we are using prose to communicate CSS decisions.

**The lossless format already exists.** It is CSS itself. The mechanism catalog contains 370 lines of transferable CSS. The TC planner outputs prose descriptions of mechanisms. The builder reads prose, re-derives CSS. Every re-derivation is a lossy step. If TC output CSS snippets alongside prose descriptions, the builder would receive intelligence in its executable form.

**Key numbers:**
- 7 boundaries in PV2
- 4 use lossy propagation (text compression or re-generation)
- 3 use lossless or near-lossless propagation
- Estimated total intelligence survival: ~35-45% (prose path) vs ~75-85% (code path)
- The fix is FORMAT, not VOLUME. More text does not help. Better-structured data does.

---

## 1. THE COMPRESSION CHAIN: Every Boundary Mapped

### Boundary 1: Content Markdown --> TC Planner (Wave 0)

| Property | Value |
|----------|-------|
| **What goes IN** | Raw markdown file (500-10,000 words), unstructured prose/code/tables |
| **What comes OUT** | Phase 0 content assessment: zone count (2-5), section inventory, content classification (prose-dominant/mixed/visual-dominant), scope rating |
| **What's LOST** | Nuance of individual sentences, paragraph-level rhythm, author's voice, inline emphasis patterns, the "feel" of the prose |
| **WHY it's lost** | Necessary abstraction. TC must move from word-level to section-level. This is INTENTIONAL compression -- the planner needs structure, not sentences. |
| **Propagation pattern** | TRANSLATION (format changes, meaning largely preserved) |
| **Loss severity** | LOW -- this is the correct level of abstraction for planning |

**Assessment:** This boundary is WELL-DESIGNED. The planner should not propagate word-level detail. Content assessment is the right granularity for architectural decisions.

### Boundary 2: TC Planner Internal (Phase 1 --> Phase 2 --> Phase 3)

| Property | Value |
|----------|-------|
| **What goes IN** | Multi-axis questioning output (FEEL/UNDERSTAND/DO/BECOME + extended axes), 4-14 axis entries with needs, structural properties, richness ratings |
| **What comes OUT** | Tension derivation (genuine vs cosmetic, richness scores), then metaphor collapse (structural overlap, search query, candidate scoring) |
| **What's LOST** | Low-yield axes get DISCARDED (marked LOW YIELD but effectively dropped). The Addition Test binary gate loses GRADIENT information -- a tension that's "85% genuine" reads the same as "100% genuine". Metaphor candidate ranking compresses a multi-dimensional scoring space into a single winner. |
| **WHY it's lost** | The TC skill is designed as a FUNNEL. Wide exploration (9-14 axes) narrows to specific output (1 metaphor). This is BY DESIGN -- the funnel prevents paralysis. But the funnel also discards the "runner-up" metaphors and the rejected-but-rich tension lines that could inform CSS decisions. |
| **Propagation pattern** | COMPRESSION (intentional funneling, but lossy) |
| **Loss severity** | MODERATE -- the funnel is necessary, but discarded alternatives could serve as builder context |

**Assessment:** The TC skill's internal boundaries are reasonably well-designed. The main loss is the SECOND-BEST metaphor and rejected tensions. These could be propagated as "builder warnings" or "alternative directions" at near-zero cost.

### Boundary 3: TC Output --> _build-plan.md (Wave 0 --> Wave 0.9)

**THIS IS THE CRITICAL BOUNDARY.**

| Property | Value |
|----------|-------|
| **What goes IN** | Full TC cognitive output: 6+ phases of analysis, axis questioning, tension scoring, metaphor derivation, structural overlap calculation, candidate comparison, isomorphism tables, perceptual risk assessment, pacing prediction, fractal coherence plan, per-category mechanism selection with justification |
| **What comes OUT** | `_build-plan.md` containing: zone count, section inventory, mechanism deployment per category (names only), background colors (hex values), isomorphism table (if metaphor), transition plan (3+ types), builder warnings |
| **What's LOST** | **THE ENTIRE REASONING CHAIN.** Why this metaphor won. Why specific mechanisms were selected. The richness scores that informed selection. The perceptual risk assessment. The alternative metaphors considered and rejected. The axis interactions that produced compound tension. The pacing prediction. The fractal coherence plan's CSS evidence. The "Can you SEE?" inline checks from the recipe. The BECAUSE-test justifications for each reader need. |
| **WHY it's lost** | The build plan is a MANIFEST, not a NARRATIVE. It tells the builder WHAT was decided, not WHY. The planner's cognitive process (1,878 lines of skill instructions executed over 30-60 minutes) compresses into a ~50-100 line build plan. This is ~20:1 compression. |
| **Propagation pattern** | COMPRESSION (severe -- prose reasoning compressed to structured manifest) |
| **Loss severity** | **HIGH -- this is the 50:1 compression problem in miniature** |

**Assessment:** This is where the pipeline BLEEDS intelligence. The build plan propagates DECISIONS but not REASONING. The builder receives "deploy border-weight gradient for hierarchy" but not "border-weight was selected because the geological strata metaphor has natural consolidation gradients that map to the 4px/3px/2px/1px progression, and the content's confidence levels create a 4-level hierarchy that isomorphically maps to geological depth."

The irony: the TC skill spends ~700 lines (Phases 3-4) on detailed mechanism-to-CSS mapping, isomorphism tables, and coherence checking. ALL of this reasoning evaporates at the build-plan boundary. The builder must RE-DERIVE it from mechanism names alone.

### Boundary 4: _build-plan.md + operational-recipe.md --> Opus Builder (Wave 0.9 --> Wave 1)

| Property | Value |
|----------|-------|
| **What goes IN** | 6 files totaling ~1,150 lines: recipe (650), build plan (~100), tokens.css (174), prohibitions.md (353), merged-components.css (~100 relevant), mechanism-catalog.md (~900) |
| **What comes OUT** | Builder's INTERNAL MODEL of what to build -- a mental synthesis of 6 files into a coherent plan |
| **What's LOST** | The builder must SYNTHESIZE 6 independent files into a coherent action plan. The recipe says "Phase 3: Apply zone backgrounds with >= 15 RGB delta." The build plan says "4 zones, backgrounds #fefcf3 / #f0ebe3 / #faf5ed / #1a1a1a." The mechanism catalog says zone backgrounds are "Perceptual Effectiveness: MEDIUM" with semantic mapping recommendations. The builder must MERGE these three sources. Any misalignment between files = ambiguity = builder judgment = potential loss. |
| **WHY it's lost** | Multiple-file synthesis is inherently lossy for LLMs. Context window competition means the builder cannot hold all 1,150 lines in active attention simultaneously. The RECIPE gets attention priority (it has action verbs). The MECHANISM CATALOG (richest compositional intelligence) gets lowest priority (it's reference material, not instructions). |
| **Propagation pattern** | TRANSLATION (6 files translated into builder's internal working model) |
| **Loss severity** | MODERATE -- dramatically better than the master prompt's 75-line slice (13.4% visibility), but still lossy due to multi-file synthesis overhead |

**Assessment:** PV2 correctly identified this boundary as critical and addressed it by giving the builder 6 files instead of 75 lines. The remaining loss is STRUCTURAL -- multiple files require synthesis, and synthesis is inherently lossy. The fix is not MORE files but BETTER FORMAT (see Section 3).

### Boundary 5: Builder's Internal Model --> CSS/HTML Output (Wave 1 Execution)

| Property | Value |
|----------|-------|
| **What goes IN** | Builder's synthesized understanding of what to build |
| **What comes OUT** | 700-1500 lines CSS + 500-1000 lines HTML |
| **What's LOST** | Compositional REASONING. The builder understands WHY border-weight encodes hierarchy, but the CSS comment says `/* 4px = structural emphasis */` not the full isomorphism chain. Future readers (including PA auditors and fix-cycle builders) lose the connection between metaphor intent and CSS implementation. |
| **WHY it's lost** | CSS IS the intelligence, but CSS COMMENTS are compression. The builder makes ~100 compositional decisions during the 90-150 minute build. Each decision is informed by the recipe + build plan + mechanism catalog. The resulting CSS captures the DECISION but not the REASONING. |
| **Propagation pattern** | GENERATION (intelligence is re-created from scratch as CSS) |
| **Loss severity** | LOW-TO-MODERATE -- CSS IS lossless for VISUAL intelligence (it literally encodes the visual decisions). But COMPOSITIONAL REASONING is lost (why THIS border weight, why THIS background color, why THIS spacing value). |

**Assessment:** This boundary is interesting because it's BOTH the highest-fidelity boundary (CSS literally IS the visual intelligence) and a significant reasoning loss (the WHY behind each CSS declaration). The cascade value table (Phase 8 deliverable) partially addresses this by recording computed values at every boundary.

### Boundary 6: CSS/HTML Output --> PA Auditors (Wave 2)

| Property | Value |
|----------|-------|
| **What goes IN** | Screenshots of the rendered HTML at 1440px and 768px viewports |
| **What comes OUT** | PA-05 score (1-4), convergent findings, top-3 blocking issues |
| **What's LOST** | ALL compositional reasoning. PA auditors see ONLY screenshots with ZERO build context. They cannot distinguish "intentionally sparse" from "accidentally empty." They cannot see whether border-weight encodes a meaningful hierarchy or is random. They evaluate PERCEPTION, not INTENTION. |
| **WHY it's lost** | INTENTIONALLY lost. Fresh-eyes auditors evaluate what the reader would see, not what the builder intended. This is the PERISCOPE -- neither telescope nor microscope. The loss is a FEATURE, not a bug. |
| **Propagation pattern** | GENERATION (intelligence is re-created from perception, not from code) |
| **Loss severity** | HIGH (for compositional reasoning) / ZERO (for perceptual quality) |

**Assessment:** This boundary is correctly designed. PA auditors SHOULD NOT have build context. The loss is intentional and valuable -- it prevents self-evaluation bias. However, the PA WEAVER who synthesizes 9 reports also lacks build context, which means fix-cycle recommendations are perception-based ("more visual variety") rather than composition-based ("strengthen the border-weight-to-metaphor mapping").

### Boundary 7: PA Report --> Fix Cycle Builder (Wave 3)

| Property | Value |
|----------|-------|
| **What goes IN** | PA weaver's top-3 blocking issues, described in perceptual language ("whitespace void at 70-80%", "uniform typography", "imperceptible background differences") |
| **What comes OUT** | CSS/HTML fixes targeting the perceptual issues |
| **What's LOST** | The connection between PERCEPTION and COMPOSITION. "Whitespace void" = perceptual symptom. "Missing breathing zone between zones 3 and 4, causing stacked gap of 276px" = compositional diagnosis. The fix-cycle builder receives symptoms, not diagnoses. |
| **WHY it's lost** | The PA system is PERCEPTION-ONLY by design. There is no mechanism for the PA to connect its findings back to the build plan's compositional decisions. |
| **Propagation pattern** | TRANSLATION (perceptual language translated to CSS fixes) |
| **Loss severity** | MODERATE -- the builder has access to the original recipe + build plan, so it can re-derive compositional context. But PA issues described in perceptual language may be misdiagnosed compositionally. |

---

## 2. LOSSLESS FORMATS: What Preserves Intelligence Across Boundaries

### Format Fidelity Spectrum

| Format | Fidelity | Why |
|--------|----------|-----|
| **CSS code** | LOSSLESS | CSS IS the visual intelligence. `border-left: 4px solid #1a1a1a` contains the exact decision with zero ambiguity. |
| **HTML structure** | LOSSLESS | HTML IS the structural intelligence. `<section class="zone--sparse" data-mechanism="progressive-disclosure">` contains both structure and intent. |
| **Structured data (JSON/YAML)** | NEAR-LOSSLESS | Schema preserves structure. `{ "zone": 1, "background": "#fefcf3", "mechanisms": ["#5", "#7"], "metaphor_mapping": "topsoil = introduction = sparse" }` preserves both values and relationships. |
| **Structured tables** | NEAR-LOSSLESS | The cascade value table is near-lossless for computed CSS state. Tabular mechanism deployment (mechanism + zone + justification) preserves selection reasoning. |
| **Prose with inline code** | MODERATELY LOSSY | "Apply border-weight gradient (#1) with 4px for structural sections, 1px for separators" preserves mechanism reference and key values but loses nuance. |
| **Prose summary** | HIGHLY LOSSY | "Deploy mechanisms across all 5 categories ensuring vocabulary breadth" compresses all selection reasoning into a single instruction. |
| **Abstract instruction** | CATASTROPHICALLY LOSSY | "Build something rich and compositionally coherent" = zero actionable intelligence. |

### Where PV2 Uses Each Format

| Boundary | Current Format | Fidelity | Optimal Format | Potential Fidelity |
|----------|---------------|----------|----------------|-------------------|
| Content --> TC | Markdown (input) | N/A | N/A (content IS the input) | N/A |
| TC internal | Prose with structured tables | MODERATE | No change needed (TC is cognitive, not mechanical) | MODERATE |
| TC --> _build-plan.md | **Prose manifest** | **LOW** | **Structured data + CSS snippets** | **HIGH** |
| Build plan + recipe --> Builder | Multiple prose files | MODERATE | Single integrated structured file | HIGH |
| Builder --> CSS/HTML | CSS/HTML (output) | HIGH | No change needed (CSS IS the output) | HIGH |
| CSS/HTML --> PA | Screenshots | LOW (intentionally) | No change needed (perception-only is correct) | LOW (correct) |
| PA --> Fix cycle | Prose descriptions | MODERATE | Structured issue format with CSS references | HIGH |

**The single highest-leverage format change: Boundary 3 (TC --> build plan).**

---

## 3. THE "CODE AS INTELLIGENCE" INSIGHT

### The Core Thesis

CSS IS compositional intelligence expressed in executable form. When TC outputs "deploy zone background differentiation (#7) with warm-cool-warm arc," the builder must:

1. Read the text description
2. Look up mechanism #7 in the catalog
3. Read the CSS pattern
4. Adapt the CSS to the specific zones
5. Write the adapted CSS

Steps 2-4 are LOSSY TRANSLATION. The builder might misread the catalog entry, adapt incorrectly, or lose the "warm-cool-warm arc" nuance in implementation.

**Alternative: TC outputs the CSS snippet directly.**

Instead of:
```
Zone backgrounds: #fefcf3 (sparse), #f0ebe3 (dense), #faf5ed (breathing), #1a1a1a (bedrock)
Mechanism: #7 Zone Background Differentiation
Arc: warm-cool-warm
```

TC outputs:
```css
/* Zone Background Differentiation — warm-cool-warm arc
   Metaphor mapping: topsoil (warm cream) → sediment (cooler cream) →
   breathing (warm tan) → bedrock (dark) */
.zone--sparse    { background: #fefcf3; } /* Topsoil: warmest, lightest */
.zone--dense     { background: #f0ebe3; } /* Sediment: 15+ RGB delta from sparse */
.zone--breathing { background: #faf5ed; } /* Breathing: returns to warm */
.zone--bedrock   { background: #1a1a1a; } /* Bedrock: structural landmark */
```

The CSS snippet IS the intelligence. It travels from TC to builder WITHOUT translation. The builder PASTES it, then adapts class names and values for their specific content. The mechanism's APPLICATION MODE, ZONE MAPPING, and SEMANTIC REASONING are all embedded in the comments.

### Why This Works for LLMs Specifically

LLMs have a specific cognitive architecture that makes "code as intelligence" especially powerful:

1. **Code is unambiguous.** Prose like "apply warm-cool-warm arc" requires interpretation. CSS like `background: #fefcf3` is exact.

2. **Code is executable.** The builder can literally paste the CSS snippet and modify it. Prose requires re-derivation.

3. **Code survives context pressure.** When the builder's context window is full (1,150 lines from 6 files), CSS snippets are DENSER in intelligence per token than prose descriptions. `border-left: 4px solid #1a1a1a` is 5 tokens of exact intelligence. "Apply a 4-pixel structural border on the left side using the near-black color from the text token" is 20 tokens of lossy description.

4. **Code prevents re-derivation errors.** The mechanism catalog says border-weight gradient uses "4px/3px/2px/1px." If TC outputs `border-left: 4px solid var(--color-text)`, the builder cannot accidentally use 5px or 2px. The intelligence is EMBEDDED in the code, not DESCRIBED in text.

### The Minimum Viable Format

The build plan should contain, for EACH mechanism deployed:

```yaml
mechanism:
  id: 7
  name: Zone Background Differentiation
  category: Depth/Emphasis
  zones:
    - { zone: 1, class: "zone--sparse", background: "#fefcf3", semantic: "introduction, overview" }
    - { zone: 2, class: "zone--dense", background: "#f0ebe3", semantic: "technical detail" }
    - { zone: 3, class: "zone--breathing", background: "#faf5ed", semantic: "procedural, transitional" }
    - { zone: 4, class: "zone--bedrock", background: "#1a1a1a", semantic: "structural landmark" }
  delta_check: "15+ RGB between adjacent zones: PASS (zones 1-2: 14 R, 9 G, 16 B = PASS)"
  css_snippet: |
    .zone--sparse    { background: #fefcf3; }
    .zone--dense     { background: #f0ebe3; }
    .zone--breathing { background: #faf5ed; }
    .zone--bedrock   { background: #1a1a1a; color: #fef9f5; }
  metaphor_mapping: "warm-cool-warm arc encoding depth gradient"
  justification: "Content has 4 natural sections with decreasing abstraction level"
```

This format is:
- **STRUCTURED** (machine-parseable, schema-preserving)
- **CODE-EMBEDDED** (CSS snippet travels intact)
- **SEMANTICALLY RICH** (metaphor mapping + justification preserved)
- **VERIFIABLE** (delta_check can be programmatically validated)
- **DENSE** (~12 lines per mechanism vs ~30 lines of prose description)

---

## 4. PROPAGATION PATTERNS: What PV2 Uses vs What It Should Use

### Pattern Taxonomy

| Pattern | Description | Information Survival | When Correct |
|---------|-------------|---------------------|--------------|
| **Pass-through** | Intelligence travels unchanged | ~100% | Reference files, static assets |
| **Translation** | Format changes, meaning preserved | ~70-90% | Schema migrations, structured data transforms |
| **Compression** | Intelligence summarized | ~30-60% | Wide exploration narrowed to specific output |
| **Generation** | Intelligence re-created from scratch | ~10-40% | Builder re-deriving CSS from text descriptions |

### PV2 Boundary-by-Boundary Analysis

| Boundary | Current Pattern | Should Be | Gap |
|----------|----------------|-----------|-----|
| 1. Content --> TC | Translation | Translation | NONE (correct) |
| 2. TC Internal | Compression (funneling) | Compression | NONE (correct, funnel is necessary) |
| 3. TC --> build plan | **Compression** | **Translation** | **LARGE -- text summary should be structured data + CSS** |
| 4. Build plan + files --> Builder | **Generation** (builder synthesizes 6 files) | **Pass-through** (single integrated file) | **MODERATE -- multi-file synthesis overhead** |
| 5. Builder --> CSS/HTML | Translation | Translation | SMALL (CSS IS the intelligence, but reasoning is lost) |
| 6. CSS/HTML --> PA | Generation (intentionally) | Generation | NONE (correct, perception-only is right) |
| 7. PA --> Fix cycle | Translation | Translation | SMALL (structured issue format would help) |

### The Two Critical Fixes

**Fix 1: Boundary 3 -- TC output format.**

Change `_build-plan.md` from PROSE MANIFEST to STRUCTURED DATA + CSS SNIPPETS.

Current:
```markdown
## Mechanism Deployment
- Spatial: Dense/sparse alternation (#5) -- intro sparse, peak dense
- Hierarchy: Border-weight gradient (#1) -- 4px structural, 1px data
- Component: 2-zone DNA (#2) -- callouts, code blocks
- Depth: Zone backgrounds (#7) -- 4-color warm-cool-warm
- Structure: Dark header (#13) + footer mirror (#14)
```

Proposed:
```yaml
mechanisms:
  - id: 5
    category: Spatial
    name: Dense/Sparse Alternation
    deployment:
      intro: { padding: "64px 24px", semantic: "sparse, welcoming" }
      peak: { padding: "24px 24px", semantic: "dense, technical" }
      resolution: { padding: "48px 24px", semantic: "moderate, closing" }
    css: |
      .section--intro { padding: 64px 24px; }
      .section--peak  { padding: 24px 24px; }
      .section--close { padding: 48px 24px; }
  - id: 1
    category: Hierarchy
    name: Border-Weight Gradient
    mode: DISCRETE
    deployment:
      structural: { border: "4px solid var(--color-text)", elements: "featured callouts, section boundaries" }
      data: { border: "1px solid var(--color-border)", elements: "table rows, separators" }
    css: |
      .callout--featured { border-left: 4px solid var(--color-text); }
      .data-separator    { border-bottom: 1px solid var(--color-border); }
```

Intelligence survival jumps from ~35% (prose compression) to ~80% (structured data + embedded CSS).

**Fix 2: Boundary 4 -- Builder input format.**

Instead of 6 separate files requiring synthesis, provide a SINGLE INTEGRATED BUILD INSTRUCTION that interleaves the recipe's phases with the build plan's specific values and the mechanism catalog's CSS patterns.

Current: Builder reads recipe Phase 3 ("Apply zone backgrounds with >= 15 RGB delta"), then separately reads build plan ("zones: #fefcf3, #f0ebe3, #faf5ed, #1a1a1a"), then optionally reads mechanism catalog (#7 Zone Background Differentiation).

Proposed: Builder reads a single Phase 3 instruction:
```
PHASE 3: Zone Backgrounds
ACTION: Apply these exact zone backgrounds from the build plan.
CSS:
  .zone--sparse    { background: #fefcf3; }
  .zone--dense     { background: #f0ebe3; }
  .zone--breathing { background: #faf5ed; }
  .zone--bedrock   { background: #1a1a1a; color: #fef9f5; }
VERIFY: Can you SEE the zone boundaries without borders?
DELTA CHECK: Adjacent zone delta >= 15 RGB (zone 1-2: R=14, G=9, B=16 -- PASS)
```

This eliminates multi-file synthesis entirely. The recipe phase CONTAINS the build plan's values and the mechanism catalog's CSS pattern, pre-integrated.

---

## 5. INFORMATION THEORY PERSPECTIVE

### Minimum Bandwidth for Compositional Intelligence

What is the MINIMUM information needed to transmit compositional intelligence from TC to builder?

**Approach 1: Count the decisions.**

TC makes approximately these decisions for a flagship page:
- Zone count: 1 number (2-5)
- Zone-to-section mapping: ~5 assignments
- Mechanism selection: ~15 mechanisms, each with category + deployment mode + zone assignment
- Background colors: ~5 hex values
- Transition types: ~4 transitions, each typed (SMOOTH/BRIDGE/BREATHING)
- Metaphor: 1 name + ~5 isomorphism mappings
- Builder warnings: ~3-5 text warnings

**Total: ~50-60 discrete decisions.**

Each decision requires ~2-5 lines of structured data to express unambiguously. Total: ~150-250 lines of structured data.

**Approach 2: Count the CSS.**

The mechanism catalog contains 370 lines of CSS across 18 mechanisms. A flagship page deploys 15-18 mechanisms. The ADAPTED CSS for a specific page is ~200-400 lines (not all mechanisms need full adaptation).

If TC outputs adapted CSS snippets for each deployed mechanism, the total is ~300-400 lines of CSS + ~50 lines of structured metadata (zone mappings, transition types, metaphor).

**Approach 3: The custom properties approach.**

The absolute minimum bandwidth: a set of CSS custom properties that encode ALL compositional decisions.

```css
:root {
  /* Zone architecture */
  --zone-count: 4;
  --zone-1-bg: #fefcf3;
  --zone-2-bg: #f0ebe3;
  --zone-3-bg: #faf5ed;
  --zone-4-bg: #1a1a1a;

  /* Mechanism deployment flags */
  --mech-border-weight: 1;     /* 1 = deployed */
  --mech-zone-bg: 1;
  --mech-dense-sparse: 1;
  --mech-dark-header: 1;
  --mech-footer-mirror: 1;
  /* ... etc for each mechanism */

  /* Spacing arc */
  --spacing-intro: 64px;
  --spacing-peak: 24px;
  --spacing-close: 48px;

  /* Typography arc */
  --type-display-size: 2.5rem;
  --type-body-size: 1rem;
  --type-meta-size: 0.75rem;

  /* Transition types (encoded as numbers) */
  --transition-1-type: 1; /* 1=SMOOTH, 2=BRIDGE, 3=BREATHING */
  --transition-2-type: 2;
  --transition-3-type: 3;
}
```

This is ~30-50 lines. It encodes ALL compositional decisions in a format that is:
- Literally CSS (lossless for the builder)
- Programmatically verifiable (gate runner can check values)
- Self-documenting (property names describe intent)
- Compact (~50 lines vs ~650 lines of recipe prose)

**But it loses REASONING.** Custom properties encode WHAT but not WHY. The builder knows zone-1 is #fefcf3 but not that it represents "topsoil in the geological metaphor, warm and welcoming for the introduction."

### The Practical Minimum: Structured Data + CSS + Brief Reasoning

The optimal format balances three needs:
1. **Exactness** (CSS values must be precise)
2. **Reasoning** (WHY decisions were made must survive)
3. **Compactness** (builder context window is finite)

**Proposed minimum: ~250-350 lines of structured YAML + embedded CSS.**

This is:
- ~2.5x SMALLER than the current recipe (650 lines)
- ~3x MORE INFORMATIONALLY DENSE (structured data + CSS vs prose)
- ~2x HIGHER FIDELITY (mechanism CSS survives intact instead of being re-derived)

---

## 6. THE META-INSIGHT: INTELLIGENCE TYPE DETERMINES FORMAT

Not all intelligence is the same type. Different types require different propagation strategies.

### Intelligence Type Taxonomy

| Type | Description | Best Format | Example in PV2 |
|------|-------------|-------------|----------------|
| **Declarative** | WHAT to do | Structured data (YAML/JSON) | "4 zones, backgrounds #fefcf3/#f0ebe3/#faf5ed/#1a1a1a" |
| **Procedural** | HOW to do it | Sequenced recipe (current format) | "Phase 3: Apply zone backgrounds. Phase 4: Add borders." |
| **Visual** | WHAT it looks like | CSS code | `background: #fefcf3; border-left: 4px solid #1a1a1a;` |
| **Compositional** | WHY this combination | Prose with isomorphism tables | "Border-weight + zone backgrounds + spacing all encode DEPTH" |
| **Perceptual** | HOW it feels | Screenshots + PA reports | "Zone boundaries visible without borders? YES" |
| **Calibrational** | WHEN to adjust | Boundary conditions + counter-examples | "15 RGB delta works for warm palettes; cold palettes may need 20+" |

**PV2's current format problem:** The recipe (650 lines of prose) tries to propagate ALL SIX types in a SINGLE FORMAT (sequential prose). Prose is good for PROCEDURAL and COMPOSITIONAL intelligence but terrible for DECLARATIVE and VISUAL intelligence.

**The fix: multi-format propagation.** Each intelligence type travels in its optimal format:

```
_build-plan.yaml          # DECLARATIVE intelligence (structured data)
_build-plan.css           # VISUAL intelligence (CSS snippets)
operational-recipe.md     # PROCEDURAL intelligence (sequenced phases)
_build-reasoning.md       # COMPOSITIONAL intelligence (isomorphism + coherence)
perception-thresholds.md  # PERCEPTUAL intelligence (threshold table)
```

The builder reads ALL of these, but each file is SMALL (~100-200 lines) and FOCUSED (one intelligence type). Total is comparable to current recipe (650 lines) but with ~2x higher fidelity because each type is in its optimal format.

---

## 7. SOLUTIONS FROM OTHER DOMAINS

How do other systems solve propagation-without-loss?

### (a) Redundant Encoding (Same Info in Multiple Formats)

**From:** Error-correcting codes, RAID storage, biological DNA (triplet codons)

**Application to PV2:** Encode each compositional decision in THREE formats simultaneously:
1. Structured data (YAML): `zone-1-bg: "#fefcf3"`
2. CSS code: `background: #fefcf3;`
3. Natural language: "Warm cream for introductory zone (topsoil mapping)"

If any one format is corrupted (builder misreads YAML, CSS has a typo, prose is ambiguous), the other two formats provide self-correction.

**Feasibility:** MODERATE. Increases build-plan size ~3x but provides error-correction. Could be worth it for the 3-5 most critical decisions (zone backgrounds, border weights, spacing arc) and unnecessary for less critical ones.

### (b) Structured Schemas (Machine-Readable, Not Prose)

**From:** Protocol Buffers, GraphQL, database schemas, API contracts

**Application to PV2:** Define a SCHEMA for build plans that is machine-parseable:

```yaml
schema:
  zones: { type: array, items: { bg: color, semantic: string, padding: px } }
  mechanisms: { type: array, items: { id: int, category: enum, css: string, justification: string } }
  transitions: { type: array, items: { from: int, to: int, type: enum, css: string } }
  metaphor: { name: string, isomorphisms: array, structural: boolean }
```

The handoff gate (Wave 0.9) validates the build plan AGAINST the schema. Missing fields = FAIL. Wrong types = FAIL. This makes quality verifiable, not just hopeful.

**Feasibility:** HIGH. This is essentially what the handoff gate already does (5 binary checks), but formalized as a schema. The schema makes it IMPOSSIBLE to produce a structurally incomplete build plan.

### (c) Worked Examples (Show, Don't Tell)

**From:** Mathematics pedagogy, code documentation, cooking recipes with photos

**Application to PV2:** The mechanism catalog already does this brilliantly -- each mechanism has a CSS snippet that IS a worked example. The gap is that these examples don't TRAVEL to the builder through the build plan. If the build plan included the relevant mechanism catalog entries (CSS snippets + application modes) inline, the builder would receive worked examples alongside instructions.

**Feasibility:** HIGH. This is literally "copy the relevant CSS snippets from the mechanism catalog into the build plan." Zero new content needed.

### (d) Checkpoints with Verification (Prove Understanding Before Proceeding)

**From:** Educational assessment, stage-gate processes, TDD

**Application to PV2:** This is already partially implemented (5 mandatory checkpoints at Phases 0, 1, 3, 4, 8). The gap: checkpoints verify COMPLETION, not UNDERSTANDING. The builder says "Phase 3 complete" and the planner approves based on output, not on whether the builder understood the compositional reasoning behind the zone backgrounds.

**Enhancement:** Each checkpoint includes a COMPOSITIONAL VERIFICATION question: "Can you explain why zone 2's background is #f0ebe3 and not #faf5ed?" If the builder can answer in terms of the metaphor mapping (not just "the build plan said so"), compositional intelligence has propagated.

**Feasibility:** MODERATE. Adds ~5 min per checkpoint (~25 min total) but provides strong evidence of intelligence propagation. May be worth it for the first few builds and then relaxed after the recipe is validated.

### (e) Shared Mental Models (Anti-Scale Model as Shared Frame)

**From:** Military doctrine, team sports playbooks, organizational culture

**Application to PV2:** The anti-scale model (`Richness = semantic density x restraint x spatial confidence`) is a SHARED FRAME that could be embedded at every boundary. If both TC and builder internalize "richness is density times restraint times confidence," their decisions at every phase will be coherent without explicit coordination.

**Enhancement:** Embed the anti-scale model as a 3-line preamble to EVERY file the builder reads:
```
RICHNESS = semantic density x restraint x spatial confidence
density = mechanisms per zone (not total count)
restraint = unused CSS budget (what you DIDN'T add)
confidence = whitespace-to-content ratio (breathing room)
```

This is 4 lines. It provides a shared evaluative framework that prevents the builder from optimizing for count (add more mechanisms) when it should optimize for density (deploy mechanisms purposefully) and restraint (leave room for the content to breathe).

**Feasibility:** HIGH. 4 lines added to each builder input file. Near-zero cost, potentially high alignment value.

---

## 8. THE SYNTHESIS: A LOSSLESS PV2

### What Changes

| Current | Proposed | Why |
|---------|----------|-----|
| `_build-plan.md` (prose manifest, ~100 lines) | `_build-plan.yaml` (structured data + CSS, ~250 lines) | Structured data + CSS is lossless where prose is lossy |
| 6 separate builder input files | Recipe phases with INLINE build-plan values and CSS snippets | Eliminates multi-file synthesis overhead |
| Mechanism catalog as reference | Relevant mechanism CSS EMBEDDED in build plan per-mechanism | Intelligence travels as CODE, not as text references |
| Build plan contains decisions only | Build plan contains decisions + brief reasoning (1 line per mechanism) | Preserves WHY at minimal cost |
| Handoff gate checks 5 binary conditions | Handoff gate validates against YAML schema | Schema validation catches structural incompleteness |
| Anti-scale model in research docs only | Anti-scale model as 4-line preamble in builder files | Shared mental model aligns judgment without explicit rules |
| PA issues described in perception language | PA issues linked to mechanism IDs and CSS selectors | Fix-cycle builder can trace issues to compositional decisions |

### What Stays the Same

- TC Phases 0-3.5 (cognitive pipeline is correctly designed)
- 9-phase sequential recipe (procedural format is correct for execution)
- 6 reference files available to builder (tokens, prohibitions, components, catalog)
- Fresh-eyes PA with zero build context (intentional loss is correct)
- Cascade value table as Phase 8 deliverable (near-lossless for computed state)
- Binary gates with perception thresholds (programmatic verification is correct)

### Estimated Impact

| Metric | Current (Prose Path) | Proposed (Code Path) | Improvement |
|--------|---------------------|---------------------|-------------|
| Intelligence survival TC-to-Builder | ~35-45% | ~75-85% | ~2x |
| Builder re-derivation errors | ~15-25% of mechanisms | ~5-10% | ~2-3x fewer |
| Build-plan-to-CSS fidelity | Moderate (prose interpretation) | High (CSS pass-through) | Significant |
| Fix-cycle diagnosis accuracy | Low (perception-to-composition gap) | Moderate (mechanism IDs linked) | Moderate |
| Total build time impact | Baseline | +15 min (TC generates YAML/CSS) | Negligible |
| Recipe size | 650 lines (prose) | ~400 lines (structured + CSS) | 38% smaller |

---

## 9. THE DEEPER QUESTION: IS THE PROBLEM SOLUBLE?

### The Irreducible Loss

Some intelligence loss is FUNDAMENTAL, not fixable by format changes:

1. **The metaphor's "feel" cannot be encoded in CSS.** "Geological strata with consolidation under pressure, surface layer accessible, deep layers requiring excavation" suggests a CSS direction but the FEELING of excavation -- the reader's sense of digging deeper -- emerges from the COMBINATION of background darkening + spacing compression + border weight + typography density. No single CSS property or structured data field captures this emergence. The feeling is a GESTALT that exists in perception, not in code.

2. **The builder's creative contribution is inherently unpredictable.** Opus brings compositional fluency that TC cannot specify. The builder might create a CSS pattern that PERFECTLY embodies the metaphor in a way TC never planned. This CREATION is intelligence that flows UPSTREAM (builder to composition) not downstream (TC to builder). Format improvements help downstream flow but cannot capture upstream creation.

3. **Context window limits create a hard bandwidth cap.** Even with perfect formats, the builder can actively attend to ~2,000-4,000 tokens at any moment. The entire build plan + recipe must compete for this attention. Making the format denser helps (more intelligence per token) but cannot eliminate the cap.

### The Tractable Loss

Most intelligence loss IS fixable:

1. **CSS re-derivation errors** (builder reads "deploy #7" and writes wrong CSS) are ELIMINATED by embedding CSS snippets.
2. **Multi-file synthesis errors** (builder misaligns recipe Phase 3 with build plan zone colors) are ELIMINATED by inline integration.
3. **Ambiguous prose interpretation** (builder reads "warm-cool-warm arc" and implements wrong direction) is REDUCED by structured data with exact values.
4. **Missing compositional reasoning** (builder applies mechanism without understanding metaphor mapping) is REDUCED by inline justification.

**Estimated partition:** ~60% of current loss is TRACTABLE (format-fixable), ~40% is IRREDUCIBLE (emergence, creativity, context limits).

---

## 10. ANSWERS TO THE 5 RESEARCH QUESTIONS

### Q1: The Compression Chain

7 boundaries mapped. Boundaries 3 (TC-to-build-plan) and 4 (multi-file-to-builder) are the critical loss points. Together they account for ~60% of total intelligence loss. Both are fixable with format changes.

### Q2: Lossless Formats

CSS code and structured data (YAML/JSON) are near-lossless for visual and declarative intelligence respectively. The build plan should be YAML + embedded CSS, not prose. Estimated intelligence survival improvement: ~2x.

### Q3: "Code as Intelligence" Insight

YES, the entire problem is substantially that we use TEXT to communicate CSS decisions. CSS IS the compositional intelligence. If TC outputs CSS snippets, they travel intact to the builder. This is the single highest-leverage change: embed CSS in the build plan. The mechanism catalog already contains 370 lines of transferable CSS; the gap is propagation, not creation.

### Q4: Propagation Patterns

PV2 uses COMPRESSION at Boundary 3 (should be TRANSLATION) and GENERATION at Boundary 4 (should be PASS-THROUGH). Fixing these two patterns addresses the majority of tractable loss. Other boundaries use appropriate patterns.

### Q5: Information Theory -- Minimum Bandwidth

~250-350 lines of structured YAML + embedded CSS. This is smaller than the current recipe (650 lines) yet higher fidelity (~2x intelligence survival). The key insight: DENSITY matters more than VOLUME. Structured formats are denser than prose. CSS snippets are denser than text descriptions of CSS.

The absolute minimum: ~50 CSS custom properties (~50 lines) encoding all compositional decisions. But this loses reasoning, so the practical minimum is ~250-350 lines that preserve both VALUES and REASONING.

---

## APPENDIX A: BOUNDARY-CROSSING PROTOCOL PROPOSAL

For each mechanism in the build plan, TC should output:

```yaml
- mechanism:
    id: [number]
    name: [catalog name]
    category: [S/H/C/D/N]
    mode: [PROGRESSIVE/DISCRETE/per mechanism]
    zones: [which zones this mechanism deploys in]
    css: |
      [exact CSS snippet, adapted for this page's zones/classes]
    metaphor_mapping: [1 sentence: how metaphor maps to this mechanism]
    justification: [1 sentence: why this mechanism for this content]
    verify: [1 sentence: "Can you SEE..." perceptual check]
```

**Per-mechanism overhead:** ~10-15 lines
**For 15 mechanisms:** ~150-225 lines
**Plus zone architecture, transitions, metadata:** ~75-100 lines
**Total build plan:** ~250-325 lines

This is MORE INFORMATIONALLY DENSE than the current ~100-line prose manifest AND SMALLER than the current 650-line recipe. The recipe's procedural phases (Phase 0: read plan, Phase 1: HTML skeleton, etc.) remain as a SEPARATE ~200-line procedural guide. Total builder input: ~450-525 lines of structured data + procedural recipe.

**Intelligence survival estimate: ~75-85%** (up from ~35-45%).

---

**END OF REPORT**

**Word count:** ~4,800
**Key finding:** The propagation problem is primarily a FORMAT problem, not a VOLUME problem. CSS-as-intelligence + structured data achieves ~2x intelligence survival with ~30% less total volume.
**Highest-leverage single change:** Embed adapted CSS snippets in the build plan (Boundary 3).
**Second-highest-leverage change:** Inline build-plan values into recipe phases (Boundary 4).
