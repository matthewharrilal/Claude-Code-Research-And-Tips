# Pipeline Delta Analysis: Explorations vs Pipeline Builds

## Methodology

Compared the CSS source code, structural patterns, and compositional decisions of:

**Pipeline Builds (2026-03-02):**
- Molly Panopticon v2 (`ephemeral/builds/molly-panopticon-extraction-2026-03-02-v2/_build-final.html`)
- Yegge Gas Town (`ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_build-final.html`)

**Original Explorations:**
- OD-004 Confidence (`design-system/validated-explorations/organizational/OD-004-confidence.html`)
- OD-006 Creative (`design-system/validated-explorations/organizational/OD-006-creative.html`)
- AD-002 F-Pattern (`design-system/axis/AD-002-f-pattern.html`)
- AD-005 Choreography (`design-system/axis/AD-005-choreography.html`)
- AD-006 Compound (`design-system/axis/AD-006-compound.html`)

---

## 1. Quantitative CSS Comparison

### Total File Sizes

| Artifact | Total Lines | CSS Lines | HTML Lines | CSS-to-HTML Ratio |
|----------|-------------|-----------|------------|-------------------|
| **Molly Pipeline** | 2,486 | 1,391 | 1,095 | 1.27:1 |
| **Yegge Pipeline** | 3,072 | 1,381 | 1,691 | 0.82:1 |
| **OD-004 Exploration** | 1,978 | 1,073 | 905 | 1.19:1 |
| **OD-006 Exploration** | 2,635 | 1,393 | 1,242 | 1.12:1 |
| **AD-002 Exploration** | 1,682 | ~800* | ~882 | ~0.91:1 |
| **AD-005 Exploration** | 1,846 | ~850* | ~996 | ~0.85:1 |
| **AD-006 Exploration** | 2,276 | ~1,050* | ~1,226 | ~0.86:1 |

*AD files use `<style id="locked-layer">` tag format; CSS lines estimated from manual analysis.

**Finding:** Pipeline builds produce MORE CSS than explorations. Molly pipeline (1,391 lines) exceeds OD-004 (1,073 lines) by 30%. Yegge pipeline (1,381) is comparable to OD-006 (1,393). The pipeline does NOT flatten CSS output -- it generates substantial, zone-specific stylesheets.

### CSS Class Selector Count

| Artifact | CSS Class Selectors | Ratio to Explorations |
|----------|--------------------|-----------------------|
| **Molly Pipeline** | 94 | 0.88x OD-004 |
| **Yegge Pipeline** | 111 | 0.74x OD-006 |
| **OD-004 Exploration** | 107 | baseline |
| **OD-006 Exploration** | 149 | baseline (crown jewel) |

**Finding:** Explorations generate 12-26% more unique CSS classes than pipeline builds. OD-006's 149 classes reflect its synthesis-of-all-ODs ambition. The pipeline's lower class count may reflect more efficient CSS (shared classes across zones) or less component granularity.

### CSS Custom Properties

| Artifact | Custom Properties | Notes |
|----------|------------------|-------|
| **Molly Pipeline** | 45 | Includes metaphor-specific aliases (--dome-interior, --bedrock-dark, --code-header-bg) |
| **Yegge Pipeline** | 46 | Includes metaphor-specific aliases (--tower-surface, --tower-bedrock, --density-sparse/moderate/dense/maximum) |
| **OD-004 Exploration** | 52 | Includes confidence-specific tokens (--stratum-established-padding, --color-zone-sparse/moderate/dense/densest) |
| **OD-006 Exploration** | 55 | Includes zone tokens (--color-zone-sparse/dense/breathing), section vars (--question-width, --answer-width) |

**Finding:** Custom property counts are remarkably close (45-46 pipeline vs 52-55 exploration). Both pipeline builds created metaphor-specific semantic aliases (dome-interior, tower-surface) alongside the locked palette tokens. The exploration advantage is 12-18% more properties, largely from exploration-specific features (confidence strata, zone typologies).

---

## 2. Visual Channel Analysis

### Pipeline Builds: Channels Coordinated Per Zone

**Molly Pipeline -- Zone Transitions (6 zones):**

| Transition | Background | Typography Size | Typography Family | Line-Height | Spacing | Border Weight | Letter-Spacing |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Z1 (Threshold) -> Z2 (Instruments) | #FEF9F5->#FFFFFF | 2rem->1.75rem | Serif->Sans | 1.8->1.6 | 80px->48px | none->4px | -0.02em->-0.015em |
| Z2 -> Z3 (Observation) | #FFFFFF->#FAF5ED | 1.75rem->1.75rem | Sans->Sans | 1.6->1.7 | 48px->48px | 4px->3px | -0.015em->-0.015em |
| Z3 -> Z4 (Journal) | #FAF5ED->#FEF9F5 | 1.75rem->1.75rem | Sans->Serif return | 1.7->1.8 | 48px->64px | 3px->1px | -0.015em->-0.015em |
| Z4 -> Z5 (Manual) | #FEF9F5->#FFFFFF | 1.75rem->1.5rem | Serif->Sans+Mono | 1.8->1.5 | 64px->40px | 1px->4px | -0.015em->-0.01em |
| Z5 -> Z6 (Night Sky) | #FFFFFF->#FEF9F5 | 1.5rem->1.75rem | Sans+Mono->Serif | 1.5->1.8 | 40px->80px | 4px->3px | -0.01em->-0.015em |

**Active channels per transition:** Z1->Z2: 7/7, Z2->Z3: 3/7, Z3->Z4: 5/7, Z4->Z5: 7/7, Z5->Z6: 6/7

**Yegge Pipeline -- Zone Typography Compression (CRESCENDO):**

| Zone | h2 Size | h3 Size | Body Line-Height | Zone Padding | Border Weight |
|------|---------|---------|-----------------|--------------|---------------|
| Z1 (Overseer) | 2rem | 1.5rem | 1.8 | 80px | -- |
| Z2 (Operations) | 1.625rem | 1.25rem | 1.7 | 48px | 4px/3px/1px |
| Z3 (Bedrock) | 1.375rem | 1.125rem | 1.6 | 32px | inverted |
| Z4 (Philosophical) | 1.625rem (release) | 1.25rem | 1.7 | 80px | warm accent |
| Z5 (Factory) | 1.5rem | 1.125rem | 1.65 | 40px | code borders |
| Z6 (Resolution) | 1.625rem | 1.25rem | 1.7 | 80px | warm |

**Channels actively varying:** h2 size (6 values), h3 size (4 values), body LH (5 values), zone padding (4 values), border treatment (5 distinct). **5 simultaneous channels across 6 zones.**

### Exploration Comparison: OD-004 Confidence

**Strata-Level Channel Coordination:**

| Stratum | Border Weight | Background | Padding | Line-Height | Content Width | Border Color |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| Established | 4px | #FEF9F5 | 40px | 1.8 | 720px | #1A1A1A |
| Probable | 3px | #FFFFFF | 32px | 1.7 | auto | #4A90D9 |
| Speculative | 2px* | #FFFFFF | 20px | 1.6 | auto | #D97706 |
| Open | 1px | #FAF5ED | 16px | 1.5 | auto | #7C3AED |

*OD-004 uses 2px as semantic exception for "speculative" confidence level -- a graduated encoding where each stratum is visually distinct.

**Active channels:** 6/7 across 4 strata (border weight, background, padding, line-height, content width, border color). This is **DENSER** per-stratum than pipeline zone transitions because OD-004's entire hypothesis IS the multi-channel encoding.

### OD-006 Creative: Maximum Channel Count

OD-006 deploys unique CSS mechanisms not found in any pipeline build:
- **Fractal annotation layer:** Persistent left-margin sidebar with vertical text labeling fractal scale (writing-mode: vertical-lr)
- **Scroll witness:** CSS-only section progress tracking with @property --progress and animation-timeline: view()
- **Editorial drop caps:** ::first-letter styled as 4-line serif drop cap
- **Collapsing sticky headers:** Section headers with sticky positioning and border-color transition on scroll
- **Pattern echo grid:** Visual index miniatures with CSS-only signature patterns

**Unique CSS mechanisms in OD-006 NOT present in any pipeline build: 5**
**Unique CSS mechanisms in pipeline builds NOT present in explorations: 0**

---

## 3. Compositional Intelligence Preservation

### What SURVIVED the Pipeline

**A. Zone-Level Background Arc:** Both pipeline builds implement multi-zone background color arcs with 3-4 distinct values (#FEF9F5, #FFFFFF, #FAF5ED, #1A1A1A). This is OD-004's geological stratification expressed as a compositional pattern -- the pipeline PRESERVED this.

**B. Border-Weight Gradient:** Both builds use the 3-category border system (4px structural, 3px accent, 1px micro) with semantic mapping. Yegge maps this to role hierarchy (4px = Town-Level, 3px = Rig-Level, 1px = Worker-Level). Molly maps to epistemic certainty (4px = established, 3px = demonstrated, 1px = philosophical). This is directly traceable to OD-004's confidence encoding and is the single most well-preserved compositional idea.

**C. Typography Cascade:** Both builds use the Instrument Serif / Inter / JetBrains Mono trinity with zone-specific deployment. The "three voices" (philosopher/architect/practitioner) pattern from OD-006 survives as register-based font switching.

**D. PULSE Width Differential:** Both builds use width asymmetry (claim 100%/response 80%, or quote-voice 90%/quote-context 60%) traceable to OD-001's Q&A width variation finding (OD-F-001).

**E. CRESCENDO Compression:** Zone heading sizes and padding compress from opening to dense-peak zones, then release. Yegge is explicit: h2 compresses from 2rem (Z1) to 1.375rem (Z3) then releases to 1.625rem (Z4). This is the CRESCENDO density pattern from OD-002/DD-002.

**F. 2-Zone Component DNA:** Both builds implement label-dense / body-sparse internal structure for callouts, code blocks, and panel components. Traceable to DD-006's fractal self-similarity at component scale.

**G. Density Contrast at Emotional Peaks:** Molly deploys a dark inversion zone (Goodhart warning: #1A1A1A background in the middle of a warm page). Yegge deploys a full dark zone for the Beads memory model. Both create dramatic density contrast at content-driven climax moments. Traceable to the density contrast mechanism.

### What Was PARTIALLY Preserved

**H. Metaphor-Specific Semantic Aliases:** Explorations used vocabulary from their research domain (geological strata, confidence levels). Pipeline builds create NEW metaphor-specific aliases (--dome-interior, --tower-surface) per the TC brief. The MECHANISM is preserved (semantic CSS variable naming) but the VOCABULARY is generated fresh each time. This is appropriate -- the pipeline generates new metaphors rather than copying exploration vocabulary.

**I. Transition Corridors:** Molly implements 5 explicit corridor zones between content zones, typed as BRIDGE or SMOOTH. OD-006 used breathing zones between organizational mode transitions (OD-F-007). The pattern survives but at reduced sophistication -- corridors are simpler CSS (padding + background + optional border) vs OD-006's mode-indicator system.

### What Was LOST

**J. Scroll-Driven Animations:** OD-004 and OD-006 both use `animation-timeline: view()` for scroll-triggered reveal effects. Pipeline builds have ZERO scroll-driven animations. The TC brief for neither build mentions them. The mechanism catalog likely does not include them because they are Chromium-only and require progressive enhancement fallbacks.

**K. Fractal Annotation Layer:** OD-006's persistent left-margin sidebar with fractal scale labels (writing-mode: vertical-lr) is absent from both pipeline builds. This is OD-006's most distinctive visual innovation -- a meta-commentary layer that makes the page's own structure visible. The pipeline has no equivalent.

**L. Editorial Drop Caps:** OD-006's ::first-letter treatment (4-line serif drop cap in #E83025) does not appear in either pipeline build. This is a section-opening device that creates instant visual authority.

**M. Scroll Witness / Progress Tracking:** OD-006's CSS-only section progress bars using @property and animation-timeline are completely absent from pipeline builds.

**N. Visual Index Grid:** OD-006's specimen-sheet overview grid showing miniature pattern signatures is absent.

**O. Solid Offset Pseudo-Elements:** OD-004 uses `::after` pseudo-elements with 4px offset for neobrutalist depth. Neither pipeline build uses this technique. The soul constraint says "box-shadow: none" but solid offset is the approved workaround -- the pipeline doesn't deploy it.

**P. Confidence Switcher:** OD-004's visual toggle control (Facts Only / Full Analysis / Everything) is absent -- understandably, since it's an OD-004-specific interactive feature.

**Q. Progressive Disclosure via Details:** OD-004 and OD-006 use collapsible `<details>` elements extensively. Yegge uses `<details>` for role cards (progressive disclosure of 8 roles). Molly does NOT use `<details>` at all. Mixed preservation.

**R. Responsive Grid Variation:** OD-006 uses a 3-column grid layout (annotations | witness | content) at desktop that collapses at 1024px. Pipeline builds use single-column layouts with max-width containers. The spatial complexity of exploration grid systems is not reproduced.

---

## 4. What the Pipeline ADDED

### Pipeline-Specific Artifacts Not Found in Explorations

**A. Transition Table Comments:** Both pipeline builds open their CSS with a detailed TRANSITION TABLE comment (50+ lines) specifying exact channel changes at each zone boundary. Explorations have extensive inline threading headers but not this specific format. This is pipeline infrastructure that makes multi-channel coordination EXPLICIT and auditable.

**B. Finding/Package/Question Citations:** Pipeline CSS is saturated with citation comments:
- `/* FINDING 9: Density rhythm */`
- `/* PACKAGE S2-M02: PULSE rhythm */`
- `/* QUESTION Q1: Atmospheric signatures */`
- `/* CASE-STUDY OD-004: Border-weight gradient */`
- `/* TC-BRIEF: Creative Waypoint 2 */`
- `/* ANTI-PATTERN FIX: Sub-perceptual letter-spacing */`

Explorations have threading headers (provenance, soul alignment) but NOT inline CSS citations to specific mechanism packages, compositional questions, or anti-pattern fixes. This is a significant pipeline addition -- every CSS decision is traceable to a specific instruction source.

**C. Anti-Pattern Mitigation Classes:** Pipeline builds include explicit anti-pattern countermeasures:
- `.velocity-bridge` (prevents same-velocity stacking)
- `.temperature-buffer` (bridges warm/cold register shifts)
- `.code-block--light` (reduces dark surface area)
- `pre.code-minor` (secondary code treatment for short snippets)

These are DEFENSIVE CSS classes that don't exist in explorations because explorations were built by a single Opus agent with full context, who naturally avoided anti-patterns. The pipeline needs explicit countermeasures because the builder operates from specifications, not intuition.

**D. Explicit FIX CYCLE Comments:** Pipeline builds contain iterative fix documentation:
- `/* FIX CYCLE 1 -- GAP 2: Increased opening padding to 80px */`
- `/* FIX 3: Increased internal padding for spatial distinction */`
- `/* PASS 3 FIX: Originally reduced from 48px to 24px */`

This shows the PA (perceptual audit) feedback loop embedded in the CSS itself -- a quality control mechanism that explorations lack because they were audited separately.

**E. Metaphor-Driven Zone Naming:** Pipeline builds use metaphor-vocabulary for zone classes:
- Molly: `.zone--threshold`, `.zone--instruments`, `.zone--observation`, `.zone--journal`, `.zone--manual`, `.zone--nightsky`
- Yegge: `.zone--overseer`, `.zone--operations`, `.zone--bedrock`, `.zone--philosophical`, `.zone--factory`, `.zone--resolution`

Explorations use generic class names (`.stratum--established`, `.doc-section`, `.section-header`). Pipeline zone names carry the metaphor into the CSS architecture itself.

---

## 5. The Question Gap Hypothesis

### Hypothesis: Explorations were driven by generative questions; pipeline builds were driven by mechanism specifications.

### Evidence FOR the Hypothesis

**Exploration Headers (OD-004):** The file opens with a 160-line hypothesis and provenance header that includes:
- "What if documentation was organized by confidence level..."
- 18 external research citations (EXT-CONF-001 through EXT-CONF-018)
- 5 anti-patterns explicitly avoided
- 10 diagnostic questions
- Research debt items

The exploration's CSS directly implements the ANSWERS to these questions. The confidence switcher (EXT-CONF-012 from Stripe Docs), the geological column (EXT-CONF-015), the evidence DNA markers (EXT-CONF-011 from EA Forum) -- all are direct implementations of external research questions.

**Pipeline TC Briefs:** The TC brief for Molly (200 lines) asks compositional QUESTIONS:
- "What if the 8-domain panels each carried a faint atmospheric signature?"
- "What if the page's typographic temperature shifted at the exact moment Cantillon's voice shifts?"
- "What if Zone 6 treated each blockquote as a discrete astronomical observation?"

These questions are then TRANSLATED by the package system into mechanism specifications (S2-M01 through S2-M07) with specific CSS values. The builder receives BOTH the questions AND the mechanism instructions.

### Evidence AGAINST the Hypothesis (Nuanced)

**The pipeline DOES carry questions to the builder.** The comparison report confirms: "Channels coordinated per question: avg 4.2 across 6 explored questions." The builder explicitly tracks question exploration in their reflection ("Q1: Atmospheric signatures -- 2 channels... Q2: Typographic temperature -- 6 channels...").

The gap is NOT "questions vs specifications." The gap is:

1. **External research density:** OD-004 consumed 18 external research sources (Stripe Docs, NNG Progressive Disclosure, Gwern Kesselman, EA Forum, etc.). Pipeline builds consumed 0 external research directly -- all external knowledge was pre-distilled into the mechanism catalog and case study library.

2. **Hypothesis-first vs mechanism-first:** OD-004's CSS implements "what if border thickness encoded certainty?" Pipeline CSS implements "deploy 4px/3px/1px border-weight gradient per Package S2-M02." The SAME mechanism, but the generative impulse differs. The exploration DISCOVERED the mechanism; the pipeline DEPLOYS it.

3. **Novel CSS techniques:** OD-006 invented 9 creative techniques (scroll witness, fractal annotations, editorial drops, etc.). Pipeline builds invented 0 new CSS techniques -- all techniques came from the mechanism catalog or case study library. The pipeline is a DEPLOYMENT system, not a DISCOVERY system.

---

## 6. Quantitative Summary

| Dimension | Explorations (avg) | Pipeline Builds (avg) | Delta |
|-----------|-------------------|----------------------|-------|
| CSS lines | 1,077 (OD-004) -- 1,393 (OD-006) | 1,386 | +0% to +29% |
| CSS class selectors | 107 -- 149 | 94 -- 111 | -12% to -26% |
| CSS custom properties | 52 -- 55 | 45 -- 46 | -13% to -16% |
| Visual channels per transition | 5-6 (OD-004 strata) | 3-7 (varies by boundary) | Comparable |
| Unique CSS mechanisms | 5+ novel per exploration | 0 novel (all from catalog) | -100% novel |
| External research sources | 12-18 per exploration | 0 direct (pre-distilled) | -100% direct |
| Scroll-driven animations | Yes (2 explorations) | None | Lost |
| Pseudo-element depth effects | Yes (solid offset) | None | Lost |
| Progressive disclosure (details) | Extensive | Partial (Yegge only) | Reduced |
| Grid complexity | 3-column with sidebar | Single-column + bento | Reduced |
| Inline CSS citations | 0 | 50-80 per build | +100% (pipeline-specific) |
| Anti-pattern countermeasure classes | 0 | 4-6 per build | +100% (pipeline-specific) |
| Builder self-reflection | None (single-agent) | Detailed (6-7 sections) | +100% (pipeline-specific) |
| PA audit integration | Separate process | FIX CYCLE comments in CSS | +100% (pipeline-specific) |
| TC Brief questions explored | N/A | 6/6 avg, 4.2 channels/question | Pipeline-specific |

---

## 7. Core Findings

### Finding 1: The Pipeline Preserves Multi-Channel Coordination

The pipeline does NOT flatten to single-channel deployment. Both Molly and Yegge coordinate 5+ visual channels simultaneously across zone transitions (background, typography size, font family, line-height, spacing, border weight). The average channels-per-question score of 4.2 demonstrates that compositional questions survive from TC brief through package to build. The multi-channel coordination is COMPARABLE to explorations at the zone level.

### Finding 2: The Pipeline Loses Novel CSS Techniques

Zero novel CSS techniques were invented during pipeline builds. Explorations invented 5-9 per artifact (scroll-driven animations, fractal annotations, editorial drops, pattern echo grids, scroll witnesses). This is the single largest compositional loss. The pipeline is a DEPLOYMENT engine for known techniques, not a DISCOVERY engine for new ones. The mechanism catalog acts as a ceiling -- what's in the catalog gets deployed; what's not there never appears.

### Finding 3: The Pipeline Adds Traceability Infrastructure

Pipeline builds contain 50-80 inline CSS citations, anti-pattern countermeasure classes, transition table comments, FIX CYCLE annotations, and builder reflections that explorations completely lack. This is the pipeline's distinctive contribution: every CSS decision is traceable to a specific instruction source (finding, package, question, case study, anti-pattern). Explorations have provenance headers but not inline decision tracing.

### Finding 4: External Research Is Pre-Digested, Not Live

OD-004 consumed 18 external research sources directly during construction. Pipeline builds consumed 0 external sources directly -- all research is pre-distilled into the mechanism catalog, case studies, and research findings. The exploration builder had LIVE ACCESS to external knowledge (NNG, Stripe, Gwern, EA Forum); the pipeline builder has only the system's own distilled vocabulary. This is by design (the pipeline standardizes quality) but creates a ceiling on novel technique generation.

### Finding 5: The Question Gap Is Real But Overspecified

The hypothesis that explorations use generative questions while pipeline builds use mechanism specifications is PARTIALLY correct. The pipeline DOES carry compositional questions from TC briefs to builders, and builders DO explore them (avg 4.2 channels per question). But the questions in pipeline builds are about HOW TO DEPLOY known mechanisms ("what if border weight encoded role hierarchy?"), while exploration questions are about WHETHER A NEW MECHANISM EXISTS ("what if there is a visual encoding for epistemic certainty?"). The pipeline questions are deployment questions. The exploration questions are discovery questions.

### Finding 6: The Pipeline's Defensive Architecture Has Real Cost

Anti-pattern countermeasures (velocity bridges, temperature buffers, light code variants) consume CSS budget on DEFENSE against known failure modes. Explorations built by a single Opus agent with full creative context avoided these anti-patterns naturally through compositional intuition. The pipeline's multi-agent architecture -- where the builder operates from specifications rather than full creative context -- necessitates explicit countermeasures that consume space, attention, and creative budget that explorations spent on invention.

---

## 8. What Would Close the Gap

1. **Mechanism Catalog Expansion:** Add scroll-driven animations, pseudo-element depth effects (solid offset), editorial drop caps, and fractal annotation layers to the mechanism catalog. These are proven techniques from explorations that never entered the pipeline vocabulary.

2. **Live Research Access for Builders:** Allow the builder agent to consume 2-3 external references during build, not just pre-distilled findings. This would re-enable the discovery mode that produced OD-004's 18-source integration.

3. **Novel Technique Budget:** Explicitly instruct the builder to invent 1-2 CSS mechanisms not in the catalog. This changes the builder's role from pure deployment to deployment-plus-discovery.

4. **Grid Complexity Permission:** Allow builds to use multi-column grid layouts (sidebar + content, annotation layers) rather than defaulting to single-column with bento moments. OD-006's 3-column layout with fractal annotations is more spatially ambitious than anything the pipeline has produced.

5. **Reduce Defensive CSS Overhead:** If the builder is Opus (not Sonnet), the anti-pattern countermeasure infrastructure may be unnecessary. Opus agents avoid anti-patterns through compositional intuition. The defensive classes are insurance for Sonnet builders.
