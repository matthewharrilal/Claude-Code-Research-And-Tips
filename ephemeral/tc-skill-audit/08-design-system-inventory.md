# Design System File Inventory -- Dynamic Side B Engagement Map

**Purpose:** Map what exists on disk for an agent deriving its design system understanding dynamically at runtime, rather than from a baked-in summary.

**Date:** 2026-03-01
**Scope:** `design-system/` directory (526 files, ~265,705 lines) + related skill files + related external files

---

## Grand Totals

| Location | Files | Lines | Notes |
|----------|-------|-------|-------|
| `design-system/` (all, excl node_modules) | 526 | 265,705 | Core corpus |
| `~/.claude/skills/tension-composition/` | 2 | 1,072 | TC skill |
| `~/.claude/skills/perceptual-auditing/` | 5 | 2,319 | PA skill |
| `~/.claude/skills/build-page/` | 1 | 956 | Build orchestrator |
| `~/.claude/skills/perceptual-deepening/` | 11 | 5,634 | PD skill (extended PA) |
| **TOTAL** | ~545 | ~275,686 | |

---

## 1. IDENTITY FILES -- What the System IS

**Classification:** IDENTITY -- binary rules, soul constraints, design tokens
**Dynamic Side B relevance:** CRITICAL -- must be loaded every time, no exceptions

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/identity/prohibitions.md` | 419 | 22 prohibitions (8 ABSOLUTE, 12 CONDITIONAL, 2 META). border-radius: 0, no box-shadow, no gradients, etc. |
| `compositional-core/identity/soul-constraints.md` | 342 | Soul-level constraints beyond prohibitions |
| `compositional-core/identity/README.md` | 137 | Navigation for identity directory |
| `compositional-core/vocabulary/tokens.css` | 183 | 65 CSS custom properties: colors, fonts, spacing, borders |
| `compositional-core/vocabulary/tokens-mutability.md` | 424 | Which tokens are locked vs. mutable per-page |
| `compositional-core/vocabulary/README.md` | 279 | Navigation for vocabulary directory |

**Category total:** 6 files, 1,784 lines
**Key insight:** This is the non-negotiable foundation. ~1,800 lines that MUST be in context for any building work. The 527-line always-load set (prohibitions.md + tokens.css) is the absolute minimum.

---

## 2. GRAMMAR FILES -- Rules for Combining Things

**Classification:** THEORY/IDENTITY hybrid -- compositional rules, mechanism catalog, combination patterns
**Dynamic Side B relevance:** HIGH -- defines how vocabulary gets composed

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/grammar/mechanism-catalog.md` | 751 | 18 reusable CSS mechanisms in 5 categories (Spatial/Hierarchy/Component/Depth/Structure). Per-mechanism impact profiles, application modes, zone mappings. |
| `compositional-core/grammar/compositional-rules.md` | 527 | Zone nesting rules, code block placement, callout patterns -- structural grammar |
| `compositional-core/grammar/mechanism-combinations.md` | 447 | How mechanisms combine. Multi-channel coherence patterns. |
| `compositional-core/grammar/border-system.md` | 658 | Border weight semantics (4px/3px/1px encoding), border-as-hierarchy system |
| `compositional-core/grammar/README.md` | 287 | Navigation |

**Category total:** 5 files, 2,670 lines
**Key insight:** The mechanism catalog (751 lines) is the single most important grammar file -- it's what builders actually deploy. The compositional-rules (527 lines) prevent structural mistakes. Together (~1,278 lines) they form the grammatical core.

---

## 3. COMPONENT FILES -- Reusable CSS Implementations

**Classification:** VOCABULARY -- concrete CSS that gets used in builds
**Dynamic Side B relevance:** HIGH -- these are the actual CSS components deployed

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/components/components.css` | 944 | Merged component CSS: callouts, code blocks, file trees, decision matrices, core abstractions, task progressions. Soul-compliant (border-radius: 0, box-shadow: none). |
| `compositional-core/components/components-cd-tt.css` | 666 | CD and tension-test specific component overrides |
| `compositional-core/components/components-dd-od.css` | 555 | DD and OD specific component overrides |
| `compositional-core/components/component-inventory.md` | 879 | Full inventory documenting every component with provenance |
| `compositional-core/components/README.md` | 304 | Navigation |

**Category total:** 5 files, 3,348 lines
**Key insight:** `components.css` (944 lines) is the primary build-time reference. The split CSS files (dd-od, cd-tt) show stage-specific customizations but may not all be needed for a unified approach. The inventory (879 lines) documents what exists and where it came from.

---

## 4. CASE STUDIES -- How Things Were Built

**Classification:** VOCABULARY -- worked examples showing how grammar + components produce pages
**Dynamic Side B relevance:** HIGH for Side B -- these are the exemplars an agent would study

| File | Lines | Content |
|------|-------|---------|
| `CD-001-reasoning-inside-code.md` | 415 | Combination exploration: reasoning embedded in code |
| `CD-005-multi-axis-transition.md` | 386 | Multi-axis transition patterns |
| `CD-006-pilot-migration.md` | 387 | Pilot migration (CEILING tier reference) |
| `DD-003-islands.md` / `dd-003-islands-visual.md` | 405/462 | Density islands + visual analysis |
| `DD-004-layers.md` / `dd-004-layers-visual.md` | 428/144 | Density layers + visual analysis |
| `DD-006-fractal.md` / `dd-006-fractal-visual.md` | 377/165 | Fractal density + visual analysis |
| `OD-001-conversational.md` | 297 | Conversational organization |
| `OD-004-confidence.md` | 309 | Confidence-based organization |
| `OD-006-creative.md` | 333 | Creative organization |
| `ANTI-PRESCRIPTION-TEMPLATE.md` | 471 | Template for case study analysis without prescribing |
| `README.md` | 541 | Navigation and cross-reference |

**Category total:** 14 files, 5,120 lines
**Key insight:** These are textual ANALYSES of the HTML explorations. They describe what was built and why. The visual case studies (dd-003-islands-visual.md etc.) include CSS forensics. For dynamic Side B, these teach compositional reasoning-by-example.

---

## 5. GUIDELINES -- How to Apply the Grammar

**Classification:** THEORY -- usage guidance, responsive strategy, semantic rules
**Dynamic Side B relevance:** MEDIUM -- important for builders but less foundational than grammar

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/guidelines/semantic-rules.md` | 529 | How semantic meaning maps to visual treatment |
| `compositional-core/guidelines/responsive-strategy.md` | 271 | How compositions adapt across viewports |
| `compositional-core/guidelines/usage-criteria.md` | 337 | When to use which component/pattern |
| `compositional-core/guidelines/README.md` | 414 | Navigation |

**Category total:** 4 files, 1,551 lines

---

## 6. VALIDATED EXPLORATIONS -- The HTML Corpus

**Classification:** VOCABULARY -- actual built HTML pages, the highest-fidelity reference
**Dynamic Side B relevance:** CRITICAL for composition learning (but large)

### Density Dimension (DD)
| File | Lines |
|------|-------|
| `DD-001-breathing.html` | 770 |
| `DD-002-gradient.html` | 962 |
| `DD-003-islands.html` | 881 |
| `DD-004-layers.html` | 1,275 |
| `DD-005-rivers.html` | 1,251 |
| `DD-006-fractal.html` | 1,120 |

### Organizational Dimension (OD)
| File | Lines |
|------|-------|
| `OD-001-conversational.html` | 2,293 |
| `OD-002-narrative.html` | 1,659 |
| `OD-003-task-based.html` | 1,163 |
| `OD-004-confidence.html` | 1,978 |
| `OD-005-spatial.html` | 2,284 |
| `OD-006-creative.html` | 2,635 |

### Axis Dimension (AD)
| File | Lines |
|------|-------|
| `AD-001-z-pattern.html` | 1,737 |
| `AD-002-f-pattern.html` | 1,682 |
| `AD-003-bento-grid.html` | 1,896 |
| `AD-004-spiral.html` | 1,483 |
| `AD-005-choreography.html` | 1,846 |
| `AD-006-compound.html` | 2,276 |

### Combination Dimension (CD)
| File | Lines |
|------|-------|
| `CD-001-reasoning-inside-code.html` | 1,654 |
| `CD-002-task-containing-decision.html` | 1,567 |
| `CD-003-file-tree-with-callouts.html` | 1,770 |
| `CD-004-essence-as-background.html` | 1,625 |
| `CD-005-multi-axis-transition.html` | 2,003 |
| `CD-006-pilot-migration.html` | 2,085 |

**Category total:** 30 files (24 HTML + 6 supporting MD), 33,312 lines in validated-explorations/
**Plus axis/ directory:** 37 files (6 HTML + 31 research/audit MD), 29,314 lines

**Key insight:** These 24 HTML explorations (~39,000 lines combined) are the HIGHEST-FIDELITY reference for how the design system actually manifests. They show real CSS, real HTML structure, real compositional decisions. For dynamic Side B, reading even 2-3 of these (especially CD-006 at 2,085 lines as CEILING reference) provides more compositional intelligence than any summary.

---

## 7. TENSION TEST PAGES -- Metaphor-Driven Compositions

**Classification:** VOCABULARY -- 15 HTML pages built with tension-composition skill
**Dynamic Side B relevance:** HIGH -- these are the tension-composition output corpus

| Content | Metaphors (5 each) | Total Lines |
|---------|-------------------|-------------|
| Boris (5 pages) | manuscript-codex, geological-core, craftsman-workbench, apprentice-curriculum, archival-vault | ~4,082 |
| Gas Town (5 pages) | industrial-refinery, military-command, city-zoning, circuit-board, building-floorplan | ~4,736 |
| Playbook (5 pages) | apprenticeship-workshop, construction-site, geological-stratigraphy, elevation-map, curriculum-syllabus | ~3,658 |

**Plus audits:** 9 audit files, ~2,017 lines

**Category total:** 24 files, 14,493 lines
**Key insight:** The tension-test pages represent the MIDDLE-TIER outputs of the pipeline. Each set of 5 shows the same content rendered through 5 different metaphors -- a perfect demonstration of metaphor-driven composition. Essential for understanding what the TC skill actually produces.

---

## 8. RESEARCH FILES -- Why Things Work (R1-R5)

**Classification:** THEORY -- 337 findings across 5 research dimensions
**Dynamic Side B relevance:** MEDIUM-LOW for builders, HIGH for understanding

| File | Lines | Finding Count | Primary Domain |
|------|-------|---------------|----------------|
| `research/R1-DOCUMENTATION-PATTERNS.md` | 584 | 28 | OD (organizational) |
| `research/R2-CREATIVE-LAYOUTS.md` | 810 | 27 | Cross-cutting |
| `research/R3-DENSITY-DIMENSIONS.md` | 553 | 51 | DD (density) |
| `research/R4-AXIS-INNOVATIONS.md` | 990 | 192 | AD (axis) |
| `research/R5-COMBINATION-THEORY.md` | 784 | 39 | CD (combination) |
| `research/RESEARCH-SYNTHESIS.md` | 383 | -- | Cross-research synthesis |

**Category total:** 7 files, 4,207 lines
**Key insight:** RESEARCH-SYNTHESIS.md (383 lines) is the efficient entry point -- it distills 337 findings into unified principles. The full R1-R5 files are important for provenance but represent 50:1 compression loss when summarized.

---

## 9. PIPELINE FILES -- How Building Works

**Classification:** THEORY + PROCESS -- orchestration, gates, execution specs
**Dynamic Side B relevance:** MEDIUM -- relevant for understanding pipeline mechanics, not for Side B personality

### Key pipeline files:
| File | Lines | Content |
|------|-------|---------|
| `pipeline/gate-runner.md` | 1,339 | 23 programmatic gates for HTML verification |
| `pipeline/TENSION-PROTOCOL.md` | 1,940 | Tension-composition integration protocol |
| `pipeline/PV2-FLAGSHIP-VARIANT.md` | 2,544 | Pipeline v2 flagship variant specification |
| `pipeline/PV2-PIPELINE-DIAGRAM.md` | 1,354 | Pipeline architecture diagram |
| `pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` | 1,747 | 3-tier component model + pattern catalog |
| `pipeline/MASTER-CD-EXECUTION-PROMPT.md` | 930 | CD execution prompt |
| `pipeline/conventions-brief.md` | 609 | Conventions brief for builders |
| 20 more files | ~10,059 | Various pipeline docs |

**Category total:** 27 files, 21,522 lines
**Key insight:** For dynamic Side B, the Compositional Strategy Library (1,747 lines), conventions-brief (609 lines), and TENSION-PROTOCOL (1,940 lines) are most relevant -- they describe HOW composition happens. The gate-runner and pipeline diagrams are infrastructure, not personality.

---

## 10. SPECIFICATION / PROVENANCE -- Documentation Backbone

**Classification:** THEORY -- formal specification, provenance chain, patterns, anti-patterns
**Dynamic Side B relevance:** LOW-MEDIUM -- deep reference, not needed at build time

### Key specification files:
| File | Lines | Content |
|------|-------|---------|
| `specification/BACKBONE.md` | 542 | Master narrative of the design system |
| `specification/patterns/axis-patterns.md` | 667 | Axis pattern specifications |
| `specification/patterns/PATTERN-INDEX.md` | 459 | Pattern cross-reference |
| `specification/patterns/density-patterns.md` | 342 | Density pattern specifications |
| `specification/patterns/organizational-patterns.md` | 504 | Organizational pattern specifications |
| `specification/anti-patterns/registry.md` | 354 | What NOT to do |
| `specification/tokens/` (4 files) | 617 | Color, geometry, spacing, typography tokens |

### Provenance chain (5 stages):
| Stage | Files | Lines | Content |
|-------|-------|-------|---------|
| Stage 1 (Components) | 4 | 689 | Foundation component findings |
| Stage 2 (DD) | 5 | 1,590 | Density dimension provenance |
| Stage 3 (OD) | 8 | 3,515 | Organizational dimension provenance |
| Stage 4 (AD) | 8 | 4,531 | Axis dimension provenance |
| Stage 5 (CD) | 3 | 1,895 | Combination dimension provenance |
| Original research (copies) | 6 | 3,891 | R1-R5 duplicated for chain |

**Category total:** 57 files, 24,114 lines
**Key insight:** The provenance chain is important for understanding HOW the design system was derived but is too deep for runtime builder context. The anti-patterns registry (354 lines) and BACKBONE (542 lines) are the most useful for Side B -- they teach what the system IS and ISN'T at a philosophical level.

---

## 11. PROCESS FILES -- Construction History

**Classification:** THEORY -- how the design system was built
**Dynamic Side B relevance:** LOW -- historical, not operational

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/process/construction-narrative.md` | 990 | How the compositional core was built |
| `compositional-core/process/extraction-provenance.md` | 765 | How extractions were validated |
| `compositional-core/process/lens-manifesto.md` | 769 | The philosophical lens framework |
| `compositional-core/process/assumption-log.md` | 521 | Logged assumptions |

**Category total:** 4 files, 3,045 lines

---

## 12. VALIDATION FILES -- Quality Assurance Records

**Classification:** THEORY -- validation results and compliance records
**Dynamic Side B relevance:** LOW -- historical audit data

| File | Lines | Content |
|------|-------|---------|
| `compositional-core/validation/anti-gravity-compliance.md` | 1,196 | Anti-gravity compliance audit |
| `compositional-core/validation/gap-check.md` | 901 | Gap analysis |
| `compositional-core/validation/convergence-check.md` | 801 | Convergence verification |

**Category total:** 3 files, 2,898 lines

---

## 13. IMPLEMENTATION FILES -- Working Implementations

**Classification:** VOCABULARY -- actual built components, tests, experiments
**Dynamic Side B relevance:** MEDIUM -- shows real implementations but much is archived

**Sub-directories:**
| Directory | Files | Lines | Content |
|-----------|-------|-------|---------|
| `implementation/archive/` | ~90 | ~29,000 | Old component specs, variations, showcases, tokens |
| `implementation/card-system/` | ~35 | ~12,000 | Card experiments, CSS, research, tests |
| `implementation/component-system/` | ~110 | ~52,000 | Full component system: CSS, HTML, perceptual audit v2, tests |
| `implementation/font-research/` | ~16 | ~3,800 | Font identification, specimens, comparisons |
| `implementation/typography-system/` | ~9 | ~2,300 | Typography CSS, tests |
| Root files | 3 | ~700 | CLAUDE.md, README.md, FOLDER-MAP.md |

**Category total:** 297 files, 112,793 lines (43% of total corpus by lines)
**Key insight:** This is the LARGEST category but mostly historical implementation work. The component-system/perceptual-audit-v2/ subdirectory alone is ~30,000 lines of audit documentation. For dynamic Side B, the most useful files are:
- `component-system/css/` (8 CSS files, ~2,000 lines) -- actual component implementations
- `component-system/components/` (14 HTML files, ~1,700 lines) -- component templates
- `card-system/SOUL-DEFINITION.md` (328 lines) -- card system soul definition
- `component-system/SOUL-DEFINITION.md` (1,897 lines) -- component system soul definition

---

## 14. SKILL FILES (Outside design-system/)

**Classification:** PROCESS -- the skills that operate ON the design system
**Dynamic Side B relevance:** INDIRECT -- these are consumers of the corpus, not the corpus itself

### Tension-Composition Skill
| File | Lines | Content |
|------|-------|---------|
| `~/.claude/skills/tension-composition/SKILL.md` | 841 | 6-phase TC process: discovery, Side A/B, tension, composition, verification |
| `~/.claude/skills/tension-composition/STANDALONE-APPENDIX.md` | 231 | Standalone deployment appendix |

### Perceptual Auditing Skill
| File | Lines | Content |
|------|-------|---------|
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 524 | PA protocol: cold look, zone analysis, question answering |
| `~/.claude/skills/perceptual-auditing/PROTOCOL.md` | 718 | Detailed PA execution protocol |
| `~/.claude/skills/perceptual-auditing/TEAM.md` | 839 | Multi-agent PA team specification |
| `~/.claude/skills/perceptual-auditing/GATES.md` | 533 | PA gate definitions |
| `~/.claude/skills/perceptual-auditing/ANTI-QUESTIONS.md` | 106 | Questions to AVOID in PA |

### Build-Page Skill
| File | Lines | Content |
|------|-------|---------|
| `~/.claude/skills/build-page/SKILL.md` | 956 | /build-page orchestrator -- phases 0-B, PA deployment |

### Perceptual Deepening Skill (Extended PA)
| File | Lines | Content |
|------|-------|---------|
| `~/.claude/skills/perceptual-deepening/SKILL.md` | 769 | Extended PA with deepening protocol |
| Plus 10 more files | ~4,865 | Templates, protocols, scripts, tests |

---

## 15. CONNECTIVE TISSUE -- Cross-Cutting Navigation

**Classification:** PROCESS -- CLAUDE.md files and READMEs that guide agent navigation
**Dynamic Side B relevance:** HIGH for orientation, LOW for composition knowledge

| File | Lines | Content |
|------|-------|---------|
| `design-system/CLAUDE.md` | 693 | Root navigation: quick-start, soul constraints, folder map, cross-cutting rules |
| `design-system/README.md` | 2,516 | "THE KORTAI DESIGN MIND" -- philosophical foundation |
| `compositional-core/CLAUDE.md` | 661 | Phase-gated protocol: always-load, then phase-sequence |
| `compositional-core/README.md` | 923 | Compositional core overview |
| Various subdirectory CLAUDE.md files | ~800 | Navigation for axis, research, pipeline, specification, etc. |

---

## DYNAMIC SIDE B ENGAGEMENT -- Recommended File Sets

### MINIMAL SET (for identity derivation only) -- ~2,400 lines
1. `compositional-core/identity/prohibitions.md` (419)
2. `compositional-core/vocabulary/tokens.css` (183)
3. `compositional-core/identity/soul-constraints.md` (342)
4. `compositional-core/grammar/mechanism-catalog.md` (751)
5. `compositional-core/grammar/compositional-rules.md` (527)
6. `compositional-core/vocabulary/tokens-mutability.md` (183 -- first 183 lines of the 424-line file)

### COMPOSITIONAL SET (for building) -- ~6,500 lines (adds ~4,100)
All of MINIMAL SET plus:
7. `compositional-core/components/components.css` (944)
8. `compositional-core/grammar/mechanism-combinations.md` (447)
9. `compositional-core/grammar/border-system.md` (658)
10. `compositional-core/guidelines/semantic-rules.md` (529)
11. `compositional-core/guidelines/usage-criteria.md` (337)
12. `specification/anti-patterns/registry.md` (354)
13. `compositional-core/skill-enrichments/tension-composition-additions.md` (473)
14. `compositional-core/skill-enrichments/perceptual-auditing-additions.md` (268)

### FULL VOCABULARY SET (for deep engagement) -- ~20,000 lines (adds ~13,500)
All of COMPOSITIONAL SET plus:
15. 2-3 exemplar HTML explorations (CD-006 + DD-003 + OD-004) (~5,000)
16. Case study analyses for those explorations (~1,300)
17. `pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` (1,747)
18. `pipeline/conventions-brief.md` (609)
19. `research/RESEARCH-SYNTHESIS.md` (383)
20. `specification/BACKBONE.md` (542)
21. `compositional-core/components/component-inventory.md` (879)
22. 5 tension-test metaphor variants for one content (~4,000)

---

## KEY OBSERVATIONS FOR DYNAMIC SIDE B

### 1. The Corpus Is Large but Stratified
265,705 lines total, but relevance follows a steep power law:
- **~2,400 lines** cover identity (prohibitions + tokens + soul constraints + mechanism catalog + rules)
- **~6,500 lines** cover full compositional vocabulary
- **~20,000 lines** provide deep exemplar-based learning
- **~245,000 lines** are historical (audits, provenance, archived implementations, research)

### 2. HTML Explorations Are the Highest-Fidelity Reference
The 24 validated HTML explorations (~39,000 lines) and 15 tension-test pages (~12,500 lines) contain more compositional intelligence than all the MD documentation combined. An agent reading CD-006-pilot-migration.html (2,085 lines) learns more about CEILING composition than reading the 2,544-line PV2-FLAGSHIP-VARIANT.md specification.

### 3. Implementation Directory is 43% of Total but Mostly Historical
112,793 lines in implementation/ -- but most is archived experiments, perceptual audit logs, and test infrastructure. The actual active CSS (~2,000 lines in component-system/css/) and component templates (~1,700 lines) are a tiny fraction.

### 4. The "Always Load" Set is Well-Defined
The compositional-core/CLAUDE.md already defines a 527-line always-load (prohibitions.md + tokens.css). Extending to the MINIMAL SET (2,400 lines) adds mechanism catalog, compositional rules, and soul constraints -- all under 3K lines total. This is feasible for dynamic loading.

### 5. Provenance Chain is Deep but Not Builder-Relevant
The 5-stage provenance chain (28 files, ~12,220 lines across specification/provenance/) documents HOW rules were derived. Important for understanding but not for building. A dynamic Side B agent shouldn't need this at build time.

### 6. Multiple Copies Exist
Research files R1-R5 exist in BOTH `research/` and `specification/provenance/original-research/`. The design-system README (2,516 lines) substantially overlaps with the BACKBONE (542 lines). Deduplication would reduce the effective corpus.

### 7. Skill Files Reference the Corpus but Don't Contain It
The TC skill (841 lines), PA skill (524 lines), and build-page skill (956 lines) all REFERENCE design-system files but contain their own process logic. For dynamic Side B, the skill files define HOW to engage; the design-system files define WHAT to engage WITH.
