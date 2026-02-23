# Rich Provenance Comparison: What a RICHER Prompt Would Contain vs What We Shipped

**Date:** 2026-02-22
**Agent:** provenance-comparator (Opus)
**Task:** Task #15 -- Rich provenance comparison
**Method:** Full inventory of shipped master prompt vs full inventory of available source material, with coverage matrix and provenance density analysis

---

## 1. METHODOLOGY

### Sources Inventoried

**INVENTORY A (What We Shipped):** The Master Execution Prompt (578 lines) + Conventions Brief (609 lines) + Gate Runner (1,339 lines) + Flagship PA Questions (158 lines) = **2,684 total shipped lines** across 4 pipeline files.

**INVENTORY B (What Existed):** All source files that could have fed the prompt:

| Source File | Lines | Category |
|-------------|-------|----------|
| mechanism-catalog.md | 1,218 | Grammar |
| components.css | 1,195 | Components |
| tokens.css | 183 | Vocabulary |
| prohibitions.md | 419 | Identity |
| semantic-rules.md | 529 | Guidelines |
| compositional-rules.md | 527 | Grammar |
| component-inventory.md | 879 | Components |
| usage-criteria.md | 337 | Guidelines |
| responsive-strategy.md | 271 | Guidelines |
| RESEARCH-SYNTHESIS.md | 383 | Research |
| R1-R5 research files (5) | 3,721 | Research |
| Case studies (13 files) | 5,120 | Case Studies |
| Validation files (3) | 2,898 | Validation |
| Process files (4) | 3,045 | Process |
| FINDINGS-INDEX.md | 599 | Reference |
| Tension-composition SKILL.md | 1,648 | Skills |
| Perceptual-auditing SKILL.md | 993 | Skills |
| design-system/CLAUDE.md | ~400 | Navigation |
| compositional-core/CLAUDE.md | ~400 | Protocol |
| **TOTAL AVAILABLE** | **~24,765** | |

### Categorization Scheme

Knowledge is categorized into 12 domains:
1. **Soul/Identity** -- prohibitions, absolute constraints
2. **Perception Physics** -- thresholds, deltas, visibility rules
3. **Compositional Theory** -- multi-coherence, fractal echo, richness model
4. **Mechanism Vocabulary** -- 18 mechanisms, application modes, selection logic
5. **Component Library** -- CSS patterns, component DNA, parametric variation
6. **Typography System** -- type scale, font trinity, typographic progression
7. **Color/Palette System** -- zone colors, accent system, warm palette rules
8. **Spatial System** -- spacing scale, zone architecture, stacked gap rules
9. **Border System** -- 3-tier hierarchy, border grammar, encoding modes
10. **Process/Workflow** -- build phases, verification pauses, conviction card
11. **Research Provenance** -- R1-R5 findings, experiment lessons, failure modes
12. **Operational Infrastructure** -- team architecture, gates, PA questions, fix cycles

---

## 2. INVENTORY A: What We Shipped (Master Execution Prompt)

### 2A. Master Execution Prompt (578 lines)

The master prompt is an ORCHESTRATION document -- it tells agents what files to write, what edits to make, and how to verify. It is NOT the builder's guidance. The conventions brief IS the builder's guidance.

| Section | Lines | Knowledge Domain | What It Contains |
|---------|-------|-----------------|------------------|
| 0. Mission + Non-Negotiables | 33 | Soul/Identity, Perception | 3 non-negotiables, file inventory, execution order |
| 1. Team Architecture | 60 | Operational Infrastructure | Wave structure, 11 agents, model assignments, contention |
| 2. Conventions Brief Spec | 65 | Process/Workflow | Agent #1 instructions, 5 critical adjustments, 15-section structure |
| 3. Gate Runner Spec | 30 | Operational Infrastructure | Agent #2 instructions, 3 adjustments, 21 gates |
| 4. PA Questions Spec | 30 | Operational Infrastructure | Agent #3 instructions, 8 Tier 5 questions, scoring |
| 5. Build-Page Orchestrator | 90 | Operational Infrastructure | Agent #4 instructions, 9 adjustments, 11-section structure |
| 6. Skill Edits | 65 | Operational Infrastructure | 23 TC edits + 16 PA edits, execution order |
| 7. CLAUDE.md Edits | 30 | Operational Infrastructure | 11 + 9 edits to two CLAUDE.md files |
| 8. Validation Protocol | 65 | Operational Infrastructure | Build A/B criteria, verdict table, output directory |
| 9. Recency Restatement | 30 | Soul/Identity | 3 non-negotiables repeated, completion criteria |
| Checkpoints (0-8) | 80 | Process/Workflow | 9 verification checkpoints with binary checklists |

**Key Observation:** The master prompt is ~85% OPERATIONAL (team architecture, edit specifications, checkpoints, file paths) and only ~15% SUBSTANTIVE (the 3 non-negotiables, conventions brief structure spec, threshold values). It is a CONSTRUCTION BLUEPRINT for the pipeline, not a KNOWLEDGE DOCUMENT for the builder.

### 2B. Conventions Brief (609 lines) -- The Real Builder Guidance

This is the document the Opus builder reads as primary guidance. It carries the vast majority of the shipped knowledge.

| Section | Lines | Knowledge Domain | What It Contains |
|---------|-------|-----------------|------------------|
| 1. Identity (Soul) | 48 | Soul/Identity | 6 soul constraints, typography trinity, container, spacing, palette |
| 2. Perception | 47 | Perception Physics | Threshold table (8 thresholds), confidence tiers, evidence basis |
| 3. Richness | 16 | Compositional Theory | Anti-scale model: density x restraint x spatial confidence |
| 4. Multi-Coherence | 83 | Compositional Theory | 6 channels, 4 directions, coherence arc, typographic progression |
| 5. Fractal Echo | 50 | Compositional Theory | 5-scale table, parametric echo CSS, character-scale register |
| 6. Unified Metaphor | 18 | Compositional Theory | Structural requirement, CSS-driven test, navigation manifesto |
| 7. Transition Grammar | 27 | Compositional Theory | SMOOTH/BRIDGE/BREATHING with channel budgets |
| 8. CSS Vocabulary | 43 | Mechanism Vocabulary, Component | Component DNA, border budget, dark slab, layouts, drop cap |
| 9. Creative Authority | 12 | Process/Workflow | 80% ownership, override protocol |
| 9B. Quality Floor | 12 | Perception Physics | 6 minimums (14 mechanisms, 800 CSS, 3 channels, etc.) |
| 10. Compositional Memory | 14 | Process/Workflow | 4 habits: boundary naming, midpoint, category, fix cycle |
| 11. Five Questions | 12 | Process/Workflow | Squint, Scroll, Second Half, Boundary, Skeleton |
| 12. Restraint List | 12 | Soul/Identity | 10 absences (gradients, shadows, animations, etc.) |
| 13. Accessibility | 20 | Component Library | HTML skeleton, ARIA, WCAG, CSS requirements |
| 14. Responsive | 10 | Spatial System | 3 breakpoints, soul unchanged |
| Conviction Card | 18 | Process/Workflow | Pre-build commitment template |
| Process | 45 | Process/Workflow | Understand/Plan/Build/Verify with CSS recipe |
| Token Compliance | 16 | Vocabulary | Token usage requirements, self-check |
| Builder Warnings | 24 | Process/Workflow | W-codes (DEADZONE, OVERLABEL, MONOTONY, etc.) |

**Key Observation:** The conventions brief IS the knowledge compression target. 609 lines of world-description carrying the builder's entire mental model.

### 2C. Gate Runner (1,339 lines) -- Programmatic Verification

| Category | Gates | Lines | Knowledge Domain |
|----------|-------|-------|-----------------|
| Tier A: Composition-Critical | 12 | ~600 | Perception Physics, Spatial, Typography |
| Tier B: Identity Enforcement | 7 | ~350 | Soul/Identity |
| Tier C: Behavioral | 2 | ~100 | Component Library |
| Additional | 2 | ~100 | Mechanism Vocabulary |
| Infrastructure | N/A | ~189 | Operational (parseRGB, micro-gates, JSON format) |

### 2D. Flagship PA Questions (158 lines) -- Compositional Depth Detection

9 questions (PA-60 through PA-68) detecting Flagship-level composition. Pure compositional theory in question format.

---

## 3. INVENTORY B: What Existed (All Available Knowledge)

### Domain-by-Domain Available Knowledge

#### 3.1 Soul/Identity (Available: ~419 lines)

**Source:** prohibitions.md (419 lines)

| Knowledge Item | Available | In Brief? | In Prompt? | Coverage |
|---------------|-----------|-----------|------------|----------|
| 8 absolute prohibitions | 419 lines | 48 lines (S1) + 12 lines (S12) | 3 lines (non-negotiables) | SUMMARIZED |
| Conditional prohibitions (12) | ~200 lines | ~6 lines | 0 lines | ABSENT from brief |
| Meta-prohibitions (2) | ~40 lines | 0 lines | 0 lines | ABSENT |
| Prohibition evidence/provenance | ~180 lines | 0 lines | 0 lines | ABSENT |

**Coverage: ~30%.** The 8 absolute prohibitions are compressed into 6 soul constraints in Section 1 and 10 restraints in Section 12. The 12 conditional prohibitions (2px border epidemic, accent borders < 4px, decorative grid breaking, vertical table borders, hover lift, traffic-light adjacency, cool grays, non-italic h3, same-density stacking, decorative elements, contentless viewports, front-loaded interest) are largely ABSENT. The evidence basis for each prohibition is entirely absent.

**What a richer prompt would contain:** The 4 most impactful conditional prohibitions (2px border epidemic, same-density stacking, contentless viewports, front-loaded interest) as explicit rules with the binary measurement tests from the source. Estimated +40 lines.

#### 3.2 Perception Physics (Available: ~200 lines across sources)

**Sources:** mechanism-catalog.md transition grammar, semantic-rules.md gap 6-7, experiment lessons

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| 8 threshold values | scattered | 47 lines (S2) | COMPREHENSIVE |
| Threshold confidence tiers | ~25 lines | 23 lines | COMPREHENSIVE |
| Stacked gap physics | ~15 lines | 8 lines | COMPREHENSIVE |
| Void prohibition (contentless viewport) | ~45 lines (prohibitions.md) | 3 lines (S2, S11) | SUMMARIZED |
| Content density floor rules (3 rules) | ~80 lines (semantic-rules.md) | 0 lines | ABSENT |
| Content-form fit gates (4 rules) | ~80 lines (semantic-rules.md) | 0 lines | ABSENT |

**Coverage: ~65%.** The raw threshold values transferred well. The SEMANTIC reasoning about WHY those thresholds exist (content density floors, form-fit gates, the "zones exist to SERVE content" principle) is largely absent.

**What a richer prompt would contain:** The Zone Count Ceiling table (content volume -> max zones), the Minimum Content Per Zone table, and the "Form Matches Content" binary test. These three rules from semantic-rules.md directly address the Flagship experiment's catastrophic whitespace void -- the #1 failure mode. Estimated +35 lines.

#### 3.3 Compositional Theory (Available: ~750 lines across sources)

**Sources:** mechanism-catalog.md (scales, multi-coherence), compositional-rules.md (527 lines), CLAUDE.md experiment lessons

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Multi-coherence (6 channels, 4 directions) | ~120 lines (catalog) + ~80 lines (rules) | 83 lines (S4) | HIGH (85%) |
| Fractal echo (5 scales, build order) | ~60 lines (catalog) | 50 lines (S5) | HIGH (90%) |
| Richness model (density x restraint x confidence) | implicit | 16 lines (S3) | MEDIUM (70%) |
| Transition grammar (3 types + selection rule) | ~80 lines (catalog) | 27 lines (S7) | HIGH (80%) |
| Unified metaphor structural requirement | ~40 lines (CLAUDE.md, experiment lessons) | 18 lines (S6) | MEDIUM (60%) |
| Coherence arc planning | ~30 lines (derived from experiments) | 24 lines (S4 subsection) | HIGH (85%) |
| Anti-scale model | ~50 lines (research) | 0 lines (summarized in S3 title) | LOW (20%) |
| Mechanism density cap per viewport | ~30 lines (catalog) | 0 lines | ABSENT |
| Distribution requirement (thirds rule) | ~20 lines (catalog) | 0 lines | ABSENT |
| Restraint ratio (deploy vs reject) | ~30 lines (catalog) | 3 lines (S9 mention) | LOW (10%) |
| 11 compositional rules | 527 lines | ~50 lines (distributed) | LOW (10%) |

**Coverage: ~55%.** The "headline" compositional concepts (multi-coherence, fractal echo, transition grammar) transferred well. The OPERATIONAL rules (mechanism density cap, distribution requirement, restraint ratio documentation) are largely absent. The 11 compositional rules from compositional-rules.md -- which include rules like "same density stacking", "transition type selection", "multi-coherence minimum" -- are compressed to near-invisibility.

**What a richer prompt would contain:** The mechanism density cap (max 4 per viewport), the distribution thirds rule, and the explicit restraint documentation requirement. These three rules directly counter the Flagship experiment's mechanism front-loading problem. Estimated +25 lines.

#### 3.4 Mechanism Vocabulary (Available: ~1,218 lines)

**Source:** mechanism-catalog.md (1,218 lines)

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| 18 mechanism definitions | ~600 lines | 0 lines (reference only) | ABSENT from brief |
| Mechanism CSS patterns | ~300 lines | ~20 lines (S8 condensed) | LOW (7%) |
| Per-category selection protocol | ~30 lines | 0 lines | ABSENT |
| Application modes (progressive vs discrete) | ~50 lines (mechanism #1 example) | 0 lines | ABSENT |
| Mechanism selection flow chart | ~25 lines | 0 lines | ABSENT |
| Combination rules (compatible/incompatible) | ~20 lines | 0 lines | ABSENT |
| Transition grammar (3 types) | ~80 lines | 27 lines (S7) | MEDIUM (34%) |
| Restraint protocol (density cap, distribution) | ~50 lines | 0 lines | ABSENT |
| Mechanism summary table | ~25 lines | 0 lines | ABSENT |

**Coverage: ~12%.** This is the LOWEST coverage domain. The conventions brief deliberately does NOT embed the mechanism catalog -- it tells the builder to READ mechanism-catalog.md as a separate file. The brief references mechanisms abstractly ("deploy from all 5 categories", ">=14 mechanisms") but provides zero mechanism-specific CSS patterns.

**Architectural decision:** The prompt assembly team CHOSE to keep the catalog as a separate read rather than embedding it. This is defensible -- the catalog is 1,218 lines, and embedding even a summary would consume ~200 lines of the brief. The brief references the catalog by path ("consult mechanism-catalog.md").

**What a richer prompt would contain:** A 30-line "Top 8 Mechanisms Quick Reference" table showing: mechanism name, primary CSS property, perceptual effectiveness (HIGH/MEDIUM/LOW), and one-line usage hint. This would give the builder a mental index without the full catalog. Estimated +30 lines.

#### 3.5 Component Library (Available: ~2,074 lines)

**Sources:** components.css (1,195 lines), component-inventory.md (879 lines)

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Component CSS (34 components) | 1,195 lines | ~15 lines (S8 DNA description) | LOW (1%) |
| Component confidence levels | 879 lines | 0 lines | ABSENT |
| Universal components (10) | ~350 lines | ~8 lines (reference) | LOW (2%) |
| CD-ONLY components (9) | ~400 lines | 0 lines | ABSENT |
| Tension-test-only components (3) | ~150 lines | 0 lines | ABSENT |
| Responsive utilities | ~30 lines | 10 lines (S14) | MEDIUM (33%) |

**Coverage: ~3%.** Like the mechanism catalog, components.css is referenced by path but not embedded. The brief describes the 2-Zone Component DNA pattern abstractly but does not list available components.

**Architectural decision:** Again deliberately separate. The builder reads components.css as a file. The brief teaches the PRINCIPLE (2-zone DNA, parametric variation) not the INVENTORY.

**What a richer prompt would contain:** A component checklist showing the 10 universal components by name with their class prefix and frequency rating. Estimated +15 lines.

#### 3.6 Typography System (Available: ~250 lines across sources)

**Sources:** tokens.css type scale, mechanism-catalog typographic jumping (#11), conventions-brief

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Font trinity (display/body/mono) | 10 lines (tokens) | 5 lines (S1) | HIGH (90%) |
| Type scale (9 sizes) | 18 lines (tokens) | 0 lines (reference via tokens.css) | ABSENT from brief text |
| Typographic progression per direction | derived | 24 lines (S4 subsection) | NOVEL (invented for brief) |
| Character-scale register | derived | 10 lines (S5 subsection) | NOVEL |
| Typography in multi-coherence | ~20 lines | 5 lines (S4) | MEDIUM (25%) |

**Coverage: ~60%.** Interestingly, the conventions brief INVENTED typographic progression tables and character-scale registers that don't exist in any source file. These are novel synthesis -- knowledge that emerged during prompt assembly, not compression of existing knowledge.

#### 3.7 Color/Palette System (Available: ~133 lines)

**Source:** tokens.css palette, specification/tokens/colors.md

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Primary palette (6 values) | 10 lines | 10 lines (S1) | COMPREHENSIVE |
| Accent colors (5 values) | 8 lines | 8 lines (S1) | COMPREHENSIVE |
| Zone colors (3 values) | 6 lines | ~4 lines (distributed) | HIGH (75%) |
| R >= G >= B warm rule | experiment-derived | 3 lines (S1, via prompt) | PRESENT |
| Syntax highlighting (7 tokens) | 7 lines | 6 lines (S8) | HIGH (85%) |

**Coverage: ~85%.** Color is the most comprehensively transferred domain.

#### 3.8 Spatial System (Available: ~155 lines)

**Source:** tokens.css spacing, specification/tokens/spacing.md

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Spacing scale (14 values) | 14 lines | 3 lines (S1 summary) | SUMMARIZED |
| Semantic aliases (within/between/chapter) | 4 lines | 0 lines | ABSENT |
| Spacing maximums | 6 lines | 8 lines (S2, with physics reasoning) | ENRICHED |
| 4px base unit | 1 line | 1 line (S1) | PRESENT |

**Coverage: ~70%.** The raw values are summarized; the semantic aliases (--space-within, --space-between, --space-chapter) are absent from the brief though available in tokens.css which the builder reads separately.

#### 3.9 Border System (Available: ~100 lines across sources)

**Sources:** tokens.css borders, mechanism-catalog #1 and #10, prohibitions.md #9-10

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| 3-tier hierarchy (4px/3px/1px) | ~20 lines | 8 lines (S8) | HIGH (80%) |
| Border-weight gradient mechanism | ~50 lines (catalog) | 3 lines (reference) | LOW (6%) |
| 2px epidemic prohibition | ~25 lines | 1 line (S12 restraint list) | LOW (4%) |
| Border semantic encoding modes | ~30 lines | 0 lines | ABSENT |

**Coverage: ~35%.** The 3-tier hierarchy is stated but the ENCODING LOGIC (progressive mode vs discrete mode, semantic justification framework) is absent.

#### 3.10 Process/Workflow (Available: ~3,045 lines in process/ + experiment lessons)

**Sources:** construction-narrative.md, lens-manifesto.md, extraction-provenance.md, assumption-log.md, CLAUDE.md experiment lessons

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Phase-gated access protocol | ~100 lines | 0 lines (handled by orchestrator) | N/A |
| Anti-gravity mechanisms (5) | ~200 lines | 0 lines (handled by orchestrator) | N/A |
| Conviction card template | derived | 18 lines (Brief) | NOVEL |
| Five Questions | derived | 12 lines (Brief) | NOVEL |
| Midpoint reflection | experiment-derived | 5 lines (S10) | PRESENT |
| Boundary naming | experiment-derived | 5 lines (S10) | PRESENT |
| Build recipe (Understand/Plan/Build/Verify) | derived | 45 lines (Brief Process section) | NOVEL |

**Coverage: ~40% (of applicable items).** Many process items are handled by the orchestrator (SKILL.md) not the brief. The brief correctly focuses on BUILDER process, not PIPELINE process. Several key workflow items (conviction card, five questions, build recipe) are NOVEL creations.

#### 3.11 Research Provenance (Available: ~4,104 lines)

**Sources:** R1-R5 (3,721 lines), RESEARCH-SYNTHESIS.md (383 lines)

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| R1 documentation patterns (28) | 584 lines | ~5 lines (whitespace, density rhythm) | LOW (1%) |
| R2 creative layouts (27) | 810 lines | ~3 lines (magazine, editorial) | LOW (0.4%) |
| R3 density dimensions (51) | 553 lines | ~8 lines (density rhythm, breathing) | LOW (1.5%) |
| R4 axis innovations (192) | 990 lines | ~5 lines (layout topologies) | LOW (0.5%) |
| R5 combination theory (39) | 784 lines | ~3 lines (component chemistry) | LOW (0.4%) |
| RESEARCH-SYNTHESIS unified principles (5) | 383 lines | ~10 lines (distributed) | LOW (3%) |
| Experiment failure lessons (8+) | ~200 lines (CLAUDE.md) | ~15 lines (distributed) | MEDIUM (8%) |

**Coverage: ~2%.** This is expected and intentional. The research was DISTILLED through 5 extraction stages into the compositional-core files. The brief draws from the distillation, not from the raw research. The question is whether that distillation preserved the most impactful findings.

**What a richer prompt would contain:** The 5 unified design principles from RESEARCH-SYNTHESIS.md as a one-line-each summary (Density as Rhythm, Layout as Choreography, Components as Characters, Whitespace as Design Element, Editorial Confidence Through Typography). These give the builder a STRATEGIC FRAME that the mechanism-level brief lacks. Estimated +10 lines.

#### 3.12 Case Studies (Available: ~5,120 lines)

**Sources:** 13 case study files

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| 9 case studies (process proofs) | ~4,100 lines | 0 lines | ABSENT (by design) |
| Anti-prescription template | 471 lines | 0 lines | ABSENT (by design) |
| README/index | 541 lines | 0 lines | ABSENT (by design) |

**Coverage: 0%.** This is entirely by design. The anti-gravity protocol (R1) prohibits case study access during building. Case studies are Phase 5 (verification) only. The conventions brief correctly excludes them.

#### 3.13 Validation Infrastructure (Available: ~2,898 lines)

**Sources:** anti-gravity-compliance.md, convergence-check.md, gap-check.md

| Knowledge Item | Available | In Brief? | Coverage |
|---------------|-----------|-----------|----------|
| Anti-gravity compliance (19 mechanisms) | 1,196 lines | 0 lines | ABSENT (handled by orchestrator) |
| Convergence check protocols | 801 lines | 0 lines | ABSENT (handled by orchestrator) |
| Gap check (coverage analysis) | 901 lines | 0 lines | ABSENT (handled by orchestrator) |

**Coverage: 0%.** Correctly absent -- these are pipeline validation tools, not builder guidance.

---

## 4. COVERAGE MATRIX

### By Knowledge Domain

| Domain | Available Lines | Shipped Lines (Brief) | Coverage % | Assessment |
|--------|-----------------|----------------------|------------|------------|
| Soul/Identity | 419 | 60 | 30% | Absolute prohibitions GOOD; conditional ABSENT |
| Perception Physics | ~200 | 59 | 65% | Thresholds GOOD; semantic rules ABSENT |
| Compositional Theory | ~750 | 194 | 55% | Headlines GOOD; operational rules ABSENT |
| Mechanism Vocabulary | 1,218 | 0 (separate file) | 0% (12% via reference) | Separate-file strategy |
| Component Library | 2,074 | 0 (separate file) | 0% (3% via reference) | Separate-file strategy |
| Typography | ~250 | 39 | 60% | Some NOVEL content |
| Color/Palette | ~133 | 28 | 85% | Best-transferred domain |
| Spatial System | ~155 | 12 | 70% | SUMMARIZED adequately |
| Border System | ~100 | 12 | 35% | 3-tier stated; encoding ABSENT |
| Process/Workflow | ~3,045 | 90 | 40% | Heavy NOVEL content |
| Research Provenance | 4,104 | ~30 | 2% | Intentionally distilled |
| Case Studies | 5,120 | 0 | 0% | Correctly excluded |
| Validation Infrastructure | 2,898 | 0 | 0% | Correctly excluded |
| **TOTAL** | **~24,765** | **~609 (brief)** | **~10.7%** | |

### By Coverage Quality

| Coverage Level | Domains | What This Means |
|----------------|---------|-----------------|
| **COMPREHENSIVE (80-100%)** | Color/Palette | Near-complete transfer |
| **HIGH (60-79%)** | Perception Physics, Typography, Spatial | Good transfer with summarization |
| **MEDIUM (40-59%)** | Compositional Theory, Process | Headlines present, operational rules missing |
| **LOW (10-39%)** | Soul/Identity, Border, Mechanism (via ref) | Key items present, depth absent |
| **ABSENT (0-9%)** | Mechanism (direct), Component (direct), Research, Case Studies, Validation | By design (separate files or excluded) |

---

## 5. PROVENANCE DENSITY METRIC

### Definition

**Provenance Density = Source Lines / Shipped Lines**

For each line of the conventions brief, how many lines of source material does it compress?

### Calculation

**Total available source material:** ~24,765 lines
**Total shipped in conventions brief:** 609 lines
**Overall compression ratio:** **40.7:1**

But this is misleading because much source material is correctly excluded. Calculating only for APPLICABLE sources (excluding case studies, validation infrastructure, process docs that go to orchestrator):

**Applicable source material:** ~24,765 - 5,120 (case studies) - 2,898 (validation) - 3,045 (process/orchestrator) = **~13,702 applicable lines**

**Adjusted compression ratio:** **22.5:1**

### Per-Section Provenance Density

| Brief Section | Lines | Source Lines Compressed | Density |
|--------------|-------|------------------------|---------|
| S1. Identity | 48 | ~419 (prohibitions) + ~133 (colors) + ~183 (tokens) = ~735 | **15.3:1** |
| S2. Perception | 47 | ~200 (thresholds) + ~160 (semantic-rules gaps 6-7) = ~360 | **7.7:1** |
| S3. Richness | 16 | ~50 (anti-scale research) + ~30 (restraint protocol) = ~80 | **5.0:1** |
| S4. Multi-Coherence | 83 | ~120 (catalog) + ~80 (rules) + ~50 (experiment lessons) = ~250 | **3.0:1** |
| S5. Fractal Echo | 50 | ~60 (catalog scales) + ~25 (tier-to-scale mapping) = ~85 | **1.7:1** |
| S6. Unified Metaphor | 18 | ~40 (CLAUDE.md lessons) + ~20 (experiments) = ~60 | **3.3:1** |
| S7. Transition Grammar | 27 | ~80 (catalog transition section) = ~80 | **3.0:1** |
| S8. CSS Vocabulary | 43 | ~300 (catalog CSS) + ~1,195 (components.css) + ~879 (inventory) = ~2,374 | **55.2:1** |
| S9. Creative Authority | 12 | ~30 (experiment lessons) = ~30 | **2.5:1** |
| S9B. Quality Floor | 12 | ~50 (experiment-derived) = ~50 | **4.2:1** |
| S10. Compositional Memory | 14 | ~100 (experiment lessons) = ~100 | **7.1:1** |
| S11. Five Questions | 12 | ~20 (experiment-derived) = ~20 | **1.7:1** (mostly NOVEL) |
| S12. Restraint List | 12 | ~200 (prohibitions subset) = ~200 | **16.7:1** |
| S13. Accessibility | 20 | ~50 (components.css skip link + focus) = ~50 | **2.5:1** |
| S14. Responsive | 10 | ~271 (responsive-strategy.md) = ~271 | **27.1:1** |
| Conviction Card | 18 | ~0 (NOVEL) | **N/A** |
| Process | 45 | ~100 (experiment lessons) = ~100 | **2.2:1** |
| Token Compliance | 16 | ~183 (tokens.css) = ~183 | **11.4:1** |
| W-Codes | 24 | ~50 (experiment-derived) = ~50 | **2.1:1** |

### Density Distribution Analysis

**Highest density (most compressed):**
1. S8 CSS Vocabulary: 55.2:1 -- 2,374 lines -> 43 lines
2. S14 Responsive: 27.1:1 -- 271 lines -> 10 lines
3. S12 Restraint List: 16.7:1 -- 200 lines -> 12 lines
4. S1 Identity: 15.3:1 -- 735 lines -> 48 lines

**Lowest density (most expanded/novel):**
1. S5 Fractal Echo: 1.7:1 -- significant NOVEL content
2. S11 Five Questions: 1.7:1 -- almost entirely NOVEL
3. Process section: 2.2:1 -- heavy NOVEL content
4. S9 Creative Authority: 2.5:1 -- light compression

**Key finding:** The highest-compression sections are exactly the domains that require the most operational detail (CSS vocabulary, responsive, restraint list, identity). The lowest-compression sections are where the prompt GENERATED NEW KNOWLEDGE not present in any source file.

---

## 6. THE KEY QUESTION: Was Compression INTELLIGENT or ARBITRARY?

### Evidence for INTELLIGENT Compression

1. **Correctly excluded categories:** Case studies (0%), validation infrastructure (0%), and process docs (0%) were correctly excluded from the builder brief. These serve different pipeline roles.

2. **Separate-file strategy is sound:** Mechanism catalog (1,218 lines) and components.css (1,195 lines) are correctly kept as separate reads. Embedding them would triple the brief length without proportional benefit.

3. **Novel synthesis is valuable:** The conventions brief INVENTED several high-value items not present in any source:
   - Typographic Progression Per Semantic Direction (S4) -- concrete CSS recipes for DEEPENING/OPENING
   - Character-Scale Register (S5) -- closed vocabulary of letter-spacing values
   - Coherence Arc Planning table (S4) -- phase-by-phase channel budget
   - Conviction Card template
   - Five Questions framework
   - W-Code warning system
   - Boundary CSS Recipe (Process section)

   These represent ~120 lines of NOVEL content -- knowledge that emerged during prompt assembly. This is the clearest sign of intelligent compression: the assemblers GENERATED missing connective tissue rather than merely cutting.

4. **Experiment lessons are prioritized:** The brief carries more experiment-derived knowledge (failure modes, threshold evidence basis) than raw research knowledge. Since experiment lessons are more actionable than research findings, this is correct prioritization.

5. **World-description format is correct:** The brief is ~55% conventions / ~25% recipe / ~20% checklist, matching the specified target. This format TEACHES rather than COMMANDS.

### Evidence for ARBITRARY Compression

1. **Conditional prohibitions dropped without triage:** The 12 conditional prohibitions were not triaged for builder relevance. Several directly address known failure modes:
   - #21 (contentless viewports) -- addresses the #1 Flagship failure
   - #22 (front-loaded interest) -- addresses the #2 Flagship failure
   - #18 (same-density stacking) -- addresses mechanism distribution

   These were not evaluated as "less important than absolute prohibitions" -- they were simply not in the first 8 prohibitions and got cut. This is positional, not evaluative.

2. **Content density rules absent despite direct relevance:** Semantic-rules.md gaps 6-7 (Content Density Floors, Content-Form Fit) contain binary gates that directly prevent the Flagship whitespace void. Their absence from the brief means the builder has no guidance on "how much content justifies a zone?" -- the exact question that caused the catastrophic void.

3. **Mechanism restraint protocol absent:** The mechanism catalog's Restraint Protocol section (density cap per viewport, distribution requirement, restraint ratio) directly addresses mechanism front-loading. Its absence means the builder has the quality floor (>=14 mechanisms) but no distribution guidance -- "deploy 14 mechanisms, put them wherever" instead of "distribute across all thirds."

4. **S8 CSS Vocabulary is dangerously compressed:** At 55.2:1, this section compresses 2,374 lines of CSS patterns into 43 lines of prose. The builder gets "Component 2-Zone DNA" as a concept but zero actual CSS selectors. The builder must then read components.css (1,195 lines) to find them. A 15-line "Top 10 Component Cheat Sheet" would reduce this lookup burden significantly.

5. **Research strategic frame missing:** The 5 unified principles from RESEARCH-SYNTHESIS.md (Density as Rhythm, Layout as Choreography, Components as Characters, Whitespace as Design Element, Editorial Confidence) would give the builder a STRATEGIC VOCABULARY for thinking about composition. At 10 lines, this is cheap to include.

6. **S14 Responsive at 27.1:1 is severely compressed:** The responsive-strategy.md (271 lines) contains detailed breakpoint-by-breakpoint guidance. The brief's 10 lines give 3 breakpoints and "soul unchanged." A builder facing responsive layout decisions gets minimal guidance.

---

## 7. THE THEORETICAL "RICHEST POSSIBLE PROMPT"

### Context Window Constraints

The conventions brief is read by an Opus builder alongside:
- tokens.css (183 lines)
- mechanism-catalog.md (1,218 lines)
- components.css (1,195 lines)
- prohibitions.md (419 lines)
- Content file (variable, ~500-1,500 lines)
- Builder spawn instructions from orchestrator (~100 lines)

**Total builder context budget:** ~4,225 lines (current) + content file

**Theoretical maximum brief:** Adding 200 lines to the brief (609 -> ~810 lines) is feasible without context pressure. Adding 500+ lines starts competing with the mechanism catalog for attention.

### Recommended Enrichments (Priority-Ordered)

| # | Enrichment | Lines | Source | Addresses |
|---|-----------|-------|--------|-----------|
| 1 | Content Density Floor + Zone Count Ceiling | 35 | semantic-rules.md gaps 6-7 | Flagship whitespace void |
| 2 | Top 4 Conditional Prohibitions (binary tests) | 40 | prohibitions.md #18,21,22 + catalog restraint | Front-loading, void, density stacking |
| 3 | Mechanism Quick Reference Table (top 8) | 30 | mechanism-catalog.md | Builder orientation |
| 4 | Mechanism Distribution Rules (cap + thirds) | 25 | mechanism-catalog.md restraint protocol | Mechanism front-loading |
| 5 | Component Cheat Sheet (top 10) | 15 | component-inventory.md | Builder orientation |
| 6 | Research Strategic Frame (5 principles) | 10 | RESEARCH-SYNTHESIS.md | Compositional vocabulary |
| 7 | Semantic Value Framework (3-question test) | 20 | semantic-rules.md | Arbitrary vs semantic CSS |
| **TOTAL** | | **175** | | |

**Theoretical richest brief:** 609 + 175 = **~784 lines**

This is 29% longer but addresses the 3 highest-impact known failure modes (whitespace void, mechanism front-loading, arbitrary CSS values) that the current brief does not.

### Diminishing Returns Threshold

Beyond ~800 lines, the brief starts competing with its own reference files for builder attention. The builder already reads 5 files (brief, tokens, catalog, components, prohibitions, content). A 1,000+ line brief would need to REPLACE one of those files to avoid context saturation.

The sweet spot is **700-800 lines** -- enough to carry the missing operational rules but short enough to remain a "read once, then build" document.

---

## 8. COMPRESSION INTELLIGENCE SCORE

### Assessment Framework

| Criterion | Score (1-5) | Evidence |
|-----------|-------------|----------|
| Correctly excluded irrelevant knowledge | 5/5 | Case studies, validation, process correctly absent |
| Novel synthesis generated | 5/5 | ~120 lines of high-value new content |
| Highest-impact failure modes addressed | 2/5 | Whitespace void, mechanism front-loading NOT addressed |
| Separate-file strategy sound | 4/5 | Catalog and components correctly separate; missing quick-reference bridge |
| Compression preserves actionability | 3/5 | World-description format good; operational binary rules lost |
| Strategic frame preserved | 2/5 | Research principles absent; experiment lessons present but unsystematic |
| **OVERALL** | **3.5/5** | **Intelligent but with 3 specific blindspots** |

### Verdict

The compression was **MOSTLY INTELLIGENT with 3 specific blindspots:**

1. **Content density rules** (prevents void) -- 35 lines that would address the #1 failure mode
2. **Mechanism distribution rules** (prevents front-loading) -- 25 lines that would address the #2 failure mode
3. **Conditional prohibition triage** (prevents known defects) -- 40 lines carrying binary tests for the 4 most impactful conditional prohibitions

These 3 blindspots total **100 lines** -- a 16% increase to the brief that would address ~60% of known failure modes. The compression was intelligent in its INCLUSIONS (novel synthesis, experiment lessons, world-description format) but arbitrary in its EXCLUSIONS (positional rather than evaluative -- items got cut because they were in later sections of source files, not because they were less important).

### The Root Cause of Arbitrary Exclusion

The prompt assembly team had a **line budget** (~230 lines originally, expanded to ~610). When building to a budget, the first sections of each source file get included and later sections get cut. This is POSITIONAL compression -- what's near the top survives.

The mechanism catalog's Restraint Protocol is in the LAST 200 lines. The semantic-rules.md content density floors are in Gap 6-7 (lines 252-397). The conditional prohibitions are #9-#22 (the second half of the file).

**All three blindspots are in the LATTER HALF of their source files.**

This is the hallmark of positional compression: read source file top-to-bottom, include what fits the budget, cut when the budget fills. It's a natural compression bias, not a deliberate exclusion decision.

---

## 9. SUMMARY

### What the 578-line master prompt IS

An orchestration document that correctly specifies: team architecture, file outputs, edit operations, verification checkpoints, and validation criteria. It is excellent at BUILDING THE PIPELINE.

### What the 609-line conventions brief IS

A world-description document that successfully transfers: soul constraints, perception thresholds, multi-coherence theory, fractal echo, transition grammar, creative authority, and build process. It is good at TEACHING THE BUILDER the world's physics.

### What both documents LACK

Three categories of operational knowledge that directly prevent known failure modes:

1. **Content-level gates:** "How much content justifies a zone?" "When is form too ambitious for content volume?" (Source: semantic-rules.md gaps 6-7)

2. **Mechanism distribution constraints:** "Max 4 mechanisms per viewport." "Every third of the page needs >=2 mechanisms." (Source: mechanism-catalog.md restraint protocol)

3. **Conditional prohibition binary tests:** "2+ consecutive viewports below 30% content = FAIL." "All designed moments above 50% scroll = FAIL." (Source: prohibitions.md #21-22)

These 100 missing lines are the difference between a prompt that prevents the KNOWN failure modes and a prompt that teaches the physics but leaves the builder to discover the failure modes independently.

### The Provenance Chain

```
R1-R5 Research (4,104 lines)
  -> Extraction (compositional-core: ~20,576 lines across 43 files)
    -> Prompt Assembly (24,765 available lines)
      -> Master Prompt + Brief (2,684 shipped lines)
        -> Builder reads 6 files (~4,225 effective lines)
          -> HTML output (~2,000 lines)

Compression: 4,104 -> 20,576 (EXPANDED by 5x through extraction)
             20,576 -> 2,684 (COMPRESSED by 7.7x through assembly)
             Overall: 4,104 -> 2,684 (1.5:1 -- net compression surprisingly small)
```

The paradox: the pipeline EXPANDED raw research by 5x through extraction (adding structure, CSS, validation) then COMPRESSED the expansion by 7.7x for the prompt. Net compression from research to prompt is only 1.5:1. But the information is TRANSFORMED -- research findings became CSS patterns, binary rules, and world-descriptions. The output is denser and more actionable per line than the input, despite similar line counts.

---

**END OF ANALYSIS**

**Files read:** 8 primary source files + 6 supplementary files (case studies README, FINDINGS-INDEX, pipeline outputs, skills)
**Total source material inventoried:** ~24,765 lines
**Shipped material analyzed:** 2,684 lines (master prompt + brief + gate runner + PA questions)
**Coverage domains analyzed:** 12
**Overall compression ratio:** 22.5:1 (applicable material only)
**Compression intelligence score:** 3.5/5
**Recommended enrichment:** +175 lines (609 -> ~784 lines) addressing 3 specific blindspots
