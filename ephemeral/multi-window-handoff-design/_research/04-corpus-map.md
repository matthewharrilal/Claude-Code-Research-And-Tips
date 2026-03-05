# The Creative Territory: What Exists, What Reaches the Builder, and What Could

## Purpose

A map of every file that COULD enter a builder's context window, showing what each one carries, whether it currently reaches any builder, and what its presence or absence means for the builder's creative experience.

---

## 1. The Full Territory

| Area | Files | Lines | Character |
|------|-------|-------|-----------|
| compositional-core/ | 43 | 22,741 | The design system's organized knowledge -- identity, vocabulary, grammar, components, case studies, guidelines |
| research/ | 7 | 4,207 | Original findings from 337 experimental observations across 5 research streams |
| pipeline/ | 27+ | 21,423 | Process documents, execution prompts, strategy libraries, the tension protocol |
| validated-explorations/ | 30 | 33,312 | The HTML artifacts that PROVED concepts work -- the richest creative calibration material |
| axis/ | 194 | 29,314 | Per-axis exploration records -- the raw material of discovery |
| specification/ | 57 | 24,114 | Technical specifications and extraction documentation |
| implementation/ (no node_modules) | ~200 | 104,845 | Code infrastructure |
| Skills (external) | 3 | 2,322 | The TC skill, PA skill, and build-page orchestrator |
| build-page-v2/ | 52 | ~24,371 | Reference files for the active pipeline version |
| **TOTAL** | **~560** | **~266,649** | |

Additionally: previous build outputs (7+ HTML files, 1,120-2,635 lines each) exist as calibration references that no builder currently sees.

---

## 2. What Currently Reaches the Builder

### Window 1 (DERIVE + BUILD) -- 7 files

| File | Lines | What It Brings |
|------|-------|----------------|
| `ephemeral/build-page-v2/world-description.md` | 17 | The soul of the world -- atmosphere, conviction, creative identity |
| `~/.claude/skills/tension-composition/SKILL.md` | 841 | Creative methodology -- the full TC pipeline with Opposition Principle, metaphor collapse, conviction brief format |
| `{output_dir}/_content.md` | varies | The raw material -- the content to be composed |
| `compositional-core/identity/prohibitions.md` | 419 | Identity through refusal -- what the world will not contain |
| `compositional-core/vocabulary/tokens.css` | 183 | The atoms -- color, typography, spacing, borders as CSS custom properties |
| `compositional-core/grammar/mechanism-catalog.md` | 751 | The tools -- 18 CSS mechanisms with compositional context |
| `compositional-core/components/components.css` | 944 | The starting points -- ready-to-adapt component CSS |

**Total Window 1: ~3,155 lines** (excluding content)

### Window 2 (EVALUATE) -- PA Auditors

Auditors receive ONLY screenshots + 4 perceptual questions each. Zero design system files. This is by design -- fresh-eyes independence depends on the auditor knowing nothing about intent, tools, or constraints.

### Window 3 (REFINE) -- 10+ files

| File | Lines | What It Brings |
|------|-------|----------------|
| `{output_dir}/output.html` | ~1,500-2,500 | The artifact -- the previous builder's creation, in full CSS/HTML |
| `{output_dir}/_pa/weaver-synthesis.md` | ~200-400 | Creative direction -- territories to explore (AMPLIFY/RELEASE/DEEPEN/THE GAP) |
| `{output_dir}/_reflection.md` | ~100-200 | The previous builder's creative self-assessment -- what surprised them, what they rejected, what's unresolved |
| `{output_dir}/_tc-brief.md` | ~200-400 | The conviction -- metaphor, arc, calibration, creative conditions |
| `{output_dir}/_content.md` | varies | The raw material again |
| `compositional-core/grammar/mechanism-catalog.md` | 751 | Same tools as Window 1 |
| `compositional-core/components/components.css` | 944 | Same starting points as Window 1 |
| `compositional-core/identity/prohibitions.md` | 419 | Same identity constraints as Window 1 |
| `compositional-core/vocabulary/tokens.css` | 183 | Same atoms as Window 1 |
| `{output_dir}/_user-direction.md` | varies | User feedback (only if Step 9 triggered) |

**Total Window 3: ~4,300-5,800 lines** (excluding content and HTML artifact)

### Weaver -- 7+ files embedded inline

All 5 auditor reports + screenshots + conviction brief + builder reflection. Zero design system files. The Weaver synthesizes reception (what was experienced) with intent (what was attempted).

---

## 3. The Content Type Landscape

| Type | What It Does for the Builder | Total Lines | Lines Loaded | Loaded |
|------|------------------------------|-------------|-------------|--------|
| **CREATIVE KNOWLEDGE** | Generates conviction, compositional theory, philosophical foundation -- the material that makes a builder want to CREATE | ~8,000 | ~858 | 10.7% |
| **REFERENCE** | Provides vocabulary, tokens, CSS patterns, components -- the tools | ~12,000 | ~1,695 | 14.1% |
| **RULES** | Defines boundaries, prohibitions, thresholds -- the world's physics stated as constraints | ~8,500 | ~1,443 | 17.0% |
| **CASE STUDY** | Worked examples showing compositional PROCESS -- teaches fluency through narrative | ~5,120 | 0 | 0% |
| **RESEARCH** | Original findings, experimental data -- the WHY behind decisions | ~15,000 | 0 | 0% |
| **EXPLORATION** | HTML artifacts proving design concepts in actual CSS -- the richest creative calibration | ~40,000 | 0 | 0% |
| **IDENTITY** | Soul-level constraints, world description -- the personality of the space | ~800 | ~436 | 54.5% |

**Builders currently see 1.2% of the available corpus** (3,155 of ~266,649 lines). Even considering only the compositional core, builders see about 15%.

### The Ratio Inside the Builder's Window

| Type | Lines | Share |
|------|-------|-------|
| RULES (constraints, prohibitions, thresholds) | ~1,443 | 45.7% |
| REFERENCE (tokens, CSS, components) | ~1,695 | 53.7% |
| CREATIVE KNOWLEDGE (theory, conviction, atmosphere) | 17 | 0.5% |
| CASE STUDY | 0 | 0% |

**The Window 1 builder receives 17 lines of creative knowledge (world-description.md) out of ~3,155 total lines. That is 0.5%.**

Including the TC Skill's creative content (~336 lines of the 841 that are genuinely creative methodology rather than process structure), the ratio shifts to approximately 89% rules+reference and 11% creative knowledge. Better, but still inverted from what a creative builder needs to produce composed -- not just compliant -- output.

---

## 4. The Unloaded Creative Territory

The most significant finding: the system ALREADY CONTAINS rich creative knowledge that no builder ever sees. This is not a gap in what has been created -- it is a gap in what reaches the builder's context window.

### The Highest-Value Unloaded Files

**1. `pipeline/TENSION-PROTOCOL.md`** (1,940 lines) -- The philosophical foundation of the entire system. Traces the DISCOVERY of tension-driven composition: why it works, what it produces, how it emerged from experiments. A builder reading this would understand WHAT they are trying to create at a philosophical level -- not "apply these mechanisms" but "here is why composition through tension produces pages that feel alive." This is the single highest-impact file for creative quality.

**2. `case-studies/CD-006-pilot-migration.md`** (387 lines) -- The crown jewel case study (39/40 score). Written in anti-prescription format showing the PROCESS of how metaphor was derived and mechanisms were selected. A builder reading this would learn compositional fluency through narrative: not "do what CD-006 did" but "see how CD-006's builder thought about composition."

**3. `validated-explorations/combination/CD-006-pilot-migration.html`** (2,085 lines) -- The actual CSS output of the crown jewel. Shows what "COMPOSED" looks like in code. A builder seeing this HTML would have a calibration point -- they would FEEL the quality target rather than being told about it. Large (burns significant context budget) but uniquely calibrating.

**4. `validated-explorations/organizational/OD-004-confidence.html`** (1,978 lines) -- The geological strata page. The proof-of-concept for tension-derived composition, referenced throughout the Tension Protocol. The anchoring example for what the system can produce.

**5. `grammar/mechanism-combinations.md`** (447 lines) -- How mechanisms work TOGETHER. The builder receives the mechanism catalog (individual tools) but not this file showing how to combine them into multi-coherence. The most cost-effective missing file -- it teaches builders to compose with tools they already have.

**6. `grammar/compositional-rules.md`** (527 lines) -- 11 compositional rules connecting vocabulary (mechanisms) to composition (pages). The grammar layer that bridges individual tools and whole compositions.

**7. `skill-enrichments/tension-composition-additions.md`** (473 lines) -- Discoveries made AFTER the TC skill was written. Insights from the Middle and Ceiling experiments that have not yet been folded into the TC skill. Post-experiment wisdom.

**8. `pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md`** (1,747 lines) -- 3-tier model with CSS-level worked examples of compositional strategies. Contains the concrete CSS that accompanies the philosophical framework.

**9. `research/RESEARCH-SYNTHESIS.md`** (383 lines) -- Unified insights from 337 findings across 5 research streams. Distilled cross-research wisdom about what makes design work.

**10. `validated-explorations/organizational/OD-006-creative.html`** (2,635 lines) -- Highest-performing OD exploration (726 citations). Shows creative composition with a different metaphor and content type than CD-006, providing a second calibration point.

**Also notable:** `design-system/README.md` (2,516 lines) contains the KORTAI DESIGN MIND philosophy -- the soul of the system in expanded form. Too long for a builder window at full length, but rich with creative philosophy.

---

## 5. What the Builder Sees vs What the Builder Needs

| Dimension | What Reaches the Builder | The Gap |
|-----------|------------------------|---------|
| **Identity** | world-description.md (17 lines) + prohibitions.md (419 lines) | The world-description is compressed but effective. Prohibitions are thorough. ADEQUATE -- but the constraint-dominant framing shifts creative energy toward defense. |
| **Tools** | mechanism-catalog.md (751) + components.css (944) + tokens.css (183) | ADEQUATE for individual tool use. Missing: how tools COMBINE (mechanism-combinations.md). |
| **Theory** | TC SKILL.md (841 lines, ~40% genuinely creative) | The TC skill provides process but NOT the underlying theory. TENSION-PROTOCOL.md (1,940 lines) is the philosophical foundation the builder never reads. |
| **Calibration** | NOTHING | Zero case studies, zero HTML examples, zero worked examples. The builder has no reference point for what "COMPOSED" looks like. |
| **Grammar** | NOTHING | No compositional rules, no mechanism combinations, no border system details. The builder knows the tools but not the grammar of using them together. |
| **Conviction** | 17 lines (world-description) | The world-description is excellent but tiny. No philosophical depth, no tension theory, no process wisdom beyond the TC brief. |

---

## 6. What Would Transform the Builder's Experience

Files ranked by how much they would shift the builder's creative energy, within context budget constraints.

### Tier A: Would Change What Gets Built

| File | Lines | Why It Transforms |
|------|-------|-------------------|
| `pipeline/TENSION-PROTOCOL.md` | 1,940 | The builder would understand WHY tension-driven composition works. The difference between "apply these mechanisms" and "here is the compositional philosophy that makes pages feel alive" changes the builder from an implementer to a composer. |
| `world-description.md` | 17 | Already loaded. The compressed world. |

### Tier B: Would Calibrate Quality

| File | Lines | Why It Calibrates |
|------|-------|-------------------|
| `case-studies/CD-006-pilot-migration.md` | 387 | Shows the PROCESS of the crown jewel -- not WHAT to copy but HOW to think about composition. Anti-prescription format makes template-copying impossible; only the thinking transfers. |
| `validated-explorations/CD-006.html` | 2,085 | Shows the OUTPUT. CSS calibration point. The builder FEELS the quality target. Large -- significant context budget. |
| `validated-explorations/OD-004.html` | 1,978 | The anchoring example. Also large. |

### Tier C: Would Connect the Dots

| File | Lines | Why It Connects |
|------|-------|-----------------|
| `grammar/mechanism-combinations.md` | 447 | The builder already has the individual tools. This file teaches how they combine into multi-coherence -- the grammar connecting vocabulary to composition. |
| `grammar/compositional-rules.md` | 527 | 11 rules bridging mechanisms to compositions. The "sentence structure" of the design system. |
| `skill-enrichments/tc-additions.md` | 473 | Post-experiment discoveries. Fills gaps in the TC skill with insights from Middle and Ceiling experiments. |

### Tier D: Would Deepen Understanding

| File | Lines | Why It Deepens |
|------|-------|----------------|
| `research/RESEARCH-SYNTHESIS.md` | 383 | Cross-research wisdom. |
| `pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | 1,747 | Tier 2.5/3 recipes with CSS examples. |
| `process/lens-manifesto.md` | 769 | The reasoning behind how the extraction was shaped. |

### Context Budget Configurations

| Configuration | Files | Total Lines | What Changes for the Builder |
|---------------|-------|-------------|------------------------------|
| **Current** (Window 1) | 7 | ~3,155 | Tools + constraints. Almost no conviction. |
| **+Theory** | 8 | ~5,095 | Tools + constraints + the philosophical WHY. The builder understands what they are trying to achieve. |
| **+Theory +Crown Jewel Case Study** | 9 | ~5,482 | Tools + constraints + WHY + a narrative showing how the best composition was THOUGHT about. |
| **+Theory +Crown Jewel HTML** | 9 | ~7,180 | Tools + constraints + WHY + the FEELING of what the best output looks like in CSS. Expensive but uniquely calibrating. |
| **+Theory +Case Study +Combinations +Rules** | 11 | ~6,456 | Full creative knowledge stack without raw HTML. The builder has philosophy, process narrative, tool-combination grammar, and compositional rules. Recommended sweet spot. |
| **Maximum** (everything Tier A-C) | 12 | ~8,400 | Full conviction + calibration + combinatorial understanding. Approaches context budget limits. |

---

## 7. The V3 Pipeline Artifacts

The `ephemeral/va-extraction/` directory contains v3 pipeline artifacts referenced by `design-system/CLAUDE.md` but NOT by the active `build-page/SKILL.md` (v2). Key files include MANIFEST.md (1,450 lines), gate-runner-core.js (3,185 lines, superseded by v2), artifact-builder-recipe.md (827 lines, contains recipe format that has potential value), and artifact-builder-recipe-compose.md (866 lines, contains compose recipe).

**Notable contradiction:** `design-system/CLAUDE.md` still points to `va-extraction/MANIFEST.md` as the pipeline, while `build-page/SKILL.md` is self-contained and points to `build-page-v2/` files. The SKILL.md v2 is the active pipeline. The va-extraction references appear stale.

---

## 8. The Compositional Core in Detail

The compositional core (22,741 lines, 43 files) is the organized knowledge of the design system. Here is what it contains and what reaches the builder:

### Identity Layer
- **prohibitions.md** (419 lines) -- loaded in W1 and W3
- soul-constraints.md (342 lines) -- NOT loaded; contains the GENERATIVE argument for constraints
- README.md (137 lines) -- NOT loaded

### Vocabulary Layer
- **tokens.css** (183 lines) -- loaded in W1 and W3
- tokens-mutability.md (424 lines) -- NOT loaded
- README.md (279 lines) -- NOT loaded

### Grammar Layer
- **mechanism-catalog.md** (751 lines) -- loaded in W1 and W3
- compositional-rules.md (527 lines) -- NOT loaded; 11 rules connecting tools to compositions
- border-system.md (658 lines) -- NOT loaded; detailed border grammar
- mechanism-combinations.md (447 lines) -- NOT loaded; how tools work TOGETHER
- README.md (287 lines) -- NOT loaded

### Component Layer
- **components.css** (944 lines) -- loaded in W1 and W3
- components-cd-tt.css (666 lines) -- NOT loaded; CD-specific and tension-test components
- components-dd-od.css (555 lines) -- NOT loaded; DD/OD-origin components
- component-inventory.md (879 lines) -- NOT loaded
- README.md (304 lines) -- NOT loaded

### Case Study Layer
- CD-006-pilot-migration.md (387 lines) -- NOT loaded; crown jewel process narrative
- CD-005-multi-axis-transition.md (386 lines) -- NOT loaded
- CD-001-reasoning-inside-code.md (415 lines) -- NOT loaded
- DD-003-islands.md (405 lines) -- NOT loaded
- DD-006-fractal.md (377 lines) -- NOT loaded
- OD-006-creative.md (333 lines) -- NOT loaded
- OD-004-confidence.md (309 lines) -- NOT loaded
- Plus 5 more case studies and 3 visual case studies -- all NOT loaded
- _INDEX.md (541 lines) -- NOT loaded
- ANTI-PRESCRIPTION-TEMPLATE.md (471 lines) -- NOT loaded

### Guidelines Layer
- semantic-rules.md (529 lines) -- NOT loaded; highest-conviction constraint file
- usage-criteria.md (337 lines) -- NOT loaded
- responsive-strategy.md (271 lines) -- NOT loaded
- README.md (414 lines) -- NOT loaded

### Validation Layer
- anti-gravity-compliance.md (1,196 lines) -- NOT loaded
- gap-check.md (901 lines) -- NOT loaded
- convergence-check.md (801 lines) -- NOT loaded

### Process Layer
- construction-narrative.md (990 lines) -- NOT loaded
- lens-manifesto.md (769 lines) -- NOT loaded; creative philosophy
- extraction-provenance.md (765 lines) -- NOT loaded
- assumption-log.md (521 lines) -- NOT loaded

### Skill Enrichments
- tension-composition-additions.md (473 lines) -- NOT loaded; post-experiment insights
- perceptual-auditing-additions.md (268 lines) -- NOT loaded

**Summary: 4 files loaded (2,297 lines, 10.1%) out of 43 files (22,741 lines).** The loaded files are all tools and constraints. The unloaded files include all case studies, all compositional rules, all mechanism combinations, all research, and most creative knowledge.

---

## 9. What This Map Reveals

**The system has already created the creative knowledge builders need.** The Tension Protocol exists. Case studies exist. Mechanism combinations exist. Compositional rules exist. Research synthesis exists. Validated HTML explorations exist. The problem is not that this material has not been produced. The problem is that it does not reach the builder's context window.

The builder sits in a room full of tools and constraints, while one floor above, a library full of creative philosophy, compositional wisdom, process narratives, and quality exemplars waits unvisited. The multi-window handoff design is, at its core, a question of how to bring the right portions of that library down to the builder -- so that conviction is not 0.5% of the builder's universe but closer to 30%, and the builder's creative energy matches the creative ambition of the system that produced all of this material.

**The tension between anti-gravity protection and creative calibration remains.** Case studies are phase-gated OUT of initial builds (anti-gravity R1, correctly preventing template copying). But the cost is that builders have zero calibration. Whether compressed exemplars (key CSS patterns extracted, ~200-300 lines, annotated with compositional reasoning) could provide calibration without triggering template-copying -- this is an open design question that the current architecture does not address.

**Crown jewel HTML files are large** (1,978-2,635 lines each). Loading even one consumes significant context budget. Compressed versions -- key compositional moments extracted with annotations -- would be more practical than raw HTML. But compression risks the same category error identified in the ideology extraction: compressing an artifact into a description may lose exactly what makes the artifact valuable.
