# Output Artifacts Survey — What Has Actually Been PRODUCED?

**Date:** 2026-02-22
**Surveyor:** artifacts-surveyor agent
**Scope:** Every HTML file in the project, categorized by origin, purpose, and quality

---

## Executive Summary

**732 total HTML files** across the entire project. After removing legacy archive (228), Next.js build output (177), and test/infrastructure pages, the project contains approximately **160 meaningful, unique output pages** across 8 distinct categories. The content spans from pre-design-system Tailwind pages (69 spotlight extractions) through the full design system evolution to the final /build-page pipeline output (2 Gas Town pages).

**The real "production" page count: ~54 design-system pages + 2 pipeline-produced pages = 56 pages built with the KortAI design system.**

---

## Category 1: Validated Explorations (FORTRESS ZONE) — 18 pages

**Location:** `design-system/validated-explorations/`
**Status:** FROZEN, zero modifications allowed
**Design System:** Full KortAI soul compliance (Instrument Serif, Inter, JetBrains Mono, #E83025 primary, border-radius: 0, box-shadow: none)

### Density Explorations (DD) — 6 pages
| File | Lines | Content | Purpose |
|------|-------|---------|---------|
| DD-001-breathing.html | 770 | Breathing density pattern | Test PULSE density rhythm |
| DD-002-gradient.html | 962 | Gradient density pattern | Test continuous density flow |
| DD-003-islands.html | 881 | Islands density pattern | Test isolated dense zones |
| DD-004-layers.html | 1,275 | Layers density pattern | Test stratified density |
| DD-005-rivers.html | 1,251 | Rivers density pattern | Test flowing density channels |
| DD-006-fractal.html | 1,120 | Fractal density pattern | Crown jewel, 20+ inbound refs, self-similar density at 5 scales |

**Subtotal:** 6,259 lines, ~34KB average

### Organizational Explorations (OD) — 6 pages
| File | Lines | Content | Purpose |
|------|-------|---------|---------|
| OD-001-conversational.html | 2,293 | Q&A conversational format | Test PULSE+TIDAL density |
| OD-002-narrative.html | 1,659 | Narrative/story format | Test linear storytelling |
| OD-003-task-based.html | 1,163 | Task-oriented format | Test procedural content |
| OD-004-confidence.html | 1,978 | Confidence-graded format | Test certainty signaling |
| OD-005-spatial.html | 2,284 | Spatial/geographic format | Test spatial topology |
| OD-006-creative.html | 2,635 | Creative/exploratory format | Richest OD, 726 citations |

**Subtotal:** 12,012 lines, ~55KB average

### Combination Explorations (CD) — 6 pages
| File | Lines | Content | Purpose |
|------|-------|---------|---------|
| CD-001-reasoning-inside-code.html | 1,654 | Code + reasoning pattern | Test component nesting |
| CD-002-task-containing-decision.html | 1,567 | Task + decision matrix | Test decision embedding |
| CD-003-file-tree-with-callouts.html | 1,770 | File tree + callouts | Test structural + informational |
| CD-004-essence-as-background.html | 1,625 | Essence + ambient background | Test ambient containment |
| CD-005-multi-axis-transition.html | 2,003 | Multi-axis transitions | Test pattern switching |
| CD-006-pilot-migration.html | 2,085 | "Building Your First KortAI Page" | CROWN JEWEL: 39/40 PA score, all 11 components, all 5 axis patterns, fractal at 5 scales. CEILING tier (not Flagship). Inline threading header, locked CSS layer, provenance chain. |

**Subtotal:** 10,704 lines, ~62KB average

**Total Validated Explorations: 28,975 lines across 18 pages**

---

## Category 2: Axis Explorations (AD) — 6 pages

**Location:** `design-system/axis/`
**Status:** COMPLETE, reference only
**Design System:** Full KortAI soul compliance. Each pairs with an OD exploration.

| File | Lines | Content | Axis Pattern | Paired OD |
|------|-------|---------|-------------|-----------|
| AD-001-z-pattern.html | 1,737 | Z-Pattern exploration | Diagonal eye-path | OD-001 Conversational |
| AD-002-f-pattern.html | 1,682 | F-Pattern exploration | Left-anchored scan | OD-002 Narrative |
| AD-003-bento-grid.html | 1,896 | Bento Grid exploration | Modular grid | OD-003 Task-Based |
| AD-004-spiral.html | 1,483 | Spiral exploration | Fibonacci spiral path | OD-004 Confidence |
| AD-005-choreography.html | 1,846 | Choreography exploration | Temporal sequencing | OD-005 Spatial |
| AD-006-compound.html | 2,276 | Compound exploration | Sequential sections | OD-006 Creative |

**Total: 10,920 lines across 6 pages**

---

## Category 3: Tension Tests — 15 pages

**Location:** `design-system/tension-test/`
**Status:** ARCHIVED, validation complete
**Design System:** Full KortAI soul compliance. 3 content sources x 5 metaphors each.

### Playbook Content (5 metaphors)
| File | Lines | Metaphor |
|------|-------|----------|
| metaphor-1-apprenticeship-workshop.html | 752 | Apprenticeship Workshop |
| metaphor-2-construction-site.html | 692 | Construction Site |
| metaphor-3-geological-stratigraphy.html | 667 | Geological Stratigraphy |
| metaphor-4-elevation-map.html | 703 | Elevation Map (TOP PICK) |
| metaphor-5-curriculum-syllabus.html | 844 | Curriculum Syllabus |

### Boris Content (5 metaphors)
| File | Lines | Metaphor |
|------|-------|----------|
| metaphor-1-manuscript-codex.html | 835 | Manuscript Codex |
| metaphor-2-geological-core.html | 767 | Geological Core (TOP PICK) |
| metaphor-3-craftsman-workbench.html | 835 | Craftsman Workbench |
| metaphor-4-apprentice-curriculum.html | 825 | Apprentice Curriculum |
| metaphor-5-archival-vault.html | 820 | Archival Vault |

### Gas Town Content (5 metaphors)
| File | Lines | Metaphor |
|------|-------|----------|
| metaphor-1-industrial-refinery.html | 931 | Industrial Refinery |
| metaphor-2-military-command.html | 975 | Military Command |
| metaphor-3-city-zoning.html | 932 | City Zoning |
| metaphor-4-circuit-board.html | 967 | Circuit Board |
| metaphor-5-building-floorplan.html | 931 | Building Floorplan (TOP PICK) |

**Total: 12,476 lines across 15 pages**

---

## Category 4: Experiment Pages — 22 pages

**Location:** `ephemeral/` (various subdirectories)
**Status:** Historical experiment outputs, not production

### Phase D Execution Builds (10 pages)
The Phase D validation test. 5 pages (A-E) mapped to different content/variants.

| File | Lines | Description |
|------|-------|-------------|
| page-A.html | 1,372 | Phase D test page A |
| page-B.html | 577 | Phase D test page B |
| page-C.html | 521 | Phase D test page C |
| page-D.html | 592 | Phase D test page D |
| page-E.html | 694 | Phase D test page E |
| track-1-assembly.html | 1,372 | Track 1 assembly test (= page-A) |
| variant-a-skill-only.html | 577 | Variant A: skill-only (= page-B) |
| variant-b-weak-perm.html | 694 | Variant B: weak permission (BEST: 18/19, 4/5) |
| variant-c-anti-gravity.html | 521 | Variant C: anti-gravity |
| variant-d-library-first.html | 592 | Variant D: library-first |

**Phase D subtotal: 7,512 lines**

### Middle-Tier Experiment (1 page)
| File | Lines | Description |
|------|-------|-------------|
| middle-tier-page.html | 970 | SYSTEM: Remote Mac Control. PA-05 DESIGNED (4/4), 3/3 Novel, 12 mechanisms, 960px container. SUCCESS. |

### Ceiling Experiment (7 pages)
| File | Lines | Description |
|------|-------|-------------|
| ceiling-page-BEFORE.html | 1,572 | Pre-remediation ceiling page |
| ceiling-page.html | 2,017 | Post-remediation ceiling page. Metaphor-driven, 14 mechanisms, 9/9 novelty. Defects: container width, header proportions. |
| page-A.html | 970 | Intermediate build A |
| page-B.html | 1,572 | Intermediate build B |
| page-X.html | 970 | Intermediate build X |
| page-Y.html | 694 | Intermediate build Y |
| page-Z.html | 1,572 | Intermediate build Z |

**Ceiling subtotal: 9,367 lines**

### Flagship Experiment (6 pages — progressive build chain)
| File | Lines | Description |
|------|-------|-------------|
| 04-skeleton.html | 1,368 | HTML skeleton only |
| 04a-skeleton-a.html | 1,368 | Skeleton variant A |
| 04b-skeleton-b.html | 1,449 | Skeleton variant B |
| 05-mechanisms.html | 1,627 | Skeleton + 14 mechanisms applied |
| 06-metaphor.html | 2,145 | Mechanisms + ASSAY LABORATORY metaphor |
| 07-intentionality.html | 2,145 | FINAL: full intentionality pass. Content: "What 337 Research Findings Teach About Documentation Design" (RESEARCH-SYNTHESIS.md). FAILED on richness: zero borders, uniform typography (all 16px/400), imperceptible backgrounds (1-8 RGB delta), 6 whitespace voids. Post-remediation: PA-05 2.5/4 (up from 1.5). |

**Flagship subtotal: 10,102 lines**

---

## Category 5: Pipeline-Produced Pages (/build-page output) — 2 pages

**Location:** `ephemeral/pages/`
**Status:** The ONLY pages produced by the /build-page pipeline
**Design System:** Full KortAI soul compliance

| File | Lines | Content | Description |
|------|-------|---------|-------------|
| gas-town-steve-yegge/output.html | 1,508 | Gas Town: Factory for Coding Agents | First /build-page execution with Mode 4 PA. 4 zone backgrounds with >=15 RGB deltas. "Clearance Levels" metaphor. |
| yegge-gas-town/output.html | 1,958 | Steve Yegge and Gas Town | Second /build-page output. Same content, different pipeline run. Zone-based density. |

**Total: 3,466 lines across 2 pages**

**Critical observation:** Only 2 pages have been produced by the actual /build-page pipeline. Everything else was produced by manual builds, experiments, or pre-pipeline exploration.

---

## Category 6: Implementation Component Pages — ~113 pages

**Location:** `design-system/implementation/`
**Status:** MIXED (active + archived)
**Design System:** Most use KortAI tokens; some archived experiments have WRONG values

### Component System Showcases (4 pages)
- `index.html` (479 lines) — Component demo page with components.css
- `showcase-all.html` (433 lines) — All components showcase
- `showcase-nested.html` (462 lines) — Nested components showcase
- `anti-pattern-comparison.html` (930 lines) — Generic vs KortAI comparison

### Perceptual Audit V2 Test Pages (30 pages)
- 11 individual component tests (challenge-callout, code-snippet, etc.)
- 8 coexistence tests (component pairs)
- 7 delta pair batches
- 4 full page compositions (documentation, kitchen-sink, portfolio, tutorial) — 463-560 lines each

### Card System Experiments (22 pages)
- `index.html` (332 lines) — Card demo
- 8 texture experiments (exp1-*)
- 6 layout experiments (exp2-*)
- `exp3-typography.html`, `exp5-integration.html`, `exp6-layout-infrastructure.html`
- `phase2-component-library.html`, `phase3-page-composition.html` (896 lines)
- Various other layout tests

### Other Implementation Pages
- Typography system `index.html` (98 lines)
- Variation experiments: 4 callout, 4 card, 4 code-block, 2 color, 5 showcase pages
- Various test/archive HTML files

---

## Category 7: Pre-Design-System Pages (html-site) — 144+ pages

**Location:** `html-site/`
**Status:** LEGACY — pre-dates the KortAI design system entirely
**Design System:** Tailwind CSS + Inter + Fira Code (NOT KortAI design system)

### Spotlight Extractions — 69 pages (~130,099 total lines)
Individual source extractions from practitioners (Yegge, Boris Cherny, Nader Dabit, Matt Pocock, Ryan Carson, etc.). Each is a standalone page about a specific Claude Code pattern or practitioner workflow. Tailwind-based, ~1,500-2,200 lines each. Topics include Gas Town, Ralph pattern, CC Mirror, mobile workflows, MCP ecosystem, multi-agent orchestration.

### Synthesis Pages — 75 pages (~163,866 total lines)
Cross-extraction synthesis documents organized by topic. Categories include:
- **Architecture:** complexity-ladder, composition-rules, domain-isolation, primitives, swarm-topologies
- **Comparisons:** architecture, cost, memory, orchestration, enterprise-orchestration, opencode-alternatives
- **Mastery:** gastown-complete, ralph-complete, ccmirror-complete, context-management, multi-agent
- **Taxonomy:** architectures, context-memory, cross-reference, deployment, enterprise-agents, orchestration, skills, tools, workflows
- **Transforms:** generalist-to-swarm, manual-to-filesystem, prompt-to-agent, single-to-autonomous
- **Frontier:** innovations, international, mobile
- **Infrastructure, Principles, Reference, Grammar, Combinations**

Each page ~2,000-2,500 lines. All use identical Tailwind + GSAP + Lucide template.

### Legacy Archive — 228 pages
Pre-restructuring versions in `html-site/archive/legacy/`. Organized into chapters, techniques, tooling, sources, philosophy, patterns, etc. Same Tailwind template as above.

### Index Page — 1 page (697 lines)
`html-site/index.html` — "Claude Code Knowledge Base | 144 POC Pages"

---

## Category 8: Miscellaneous / Infrastructure HTML — ~5 pages

| File | Lines | Description |
|------|-------|-------------|
| `synthesis/MASTER-PLAYBOOK.html` | 1,279 | Master playbook (standalone, outside html-site) |
| `ephemeral/pipeline-analysis/_meta-cognitive/PV2-ARCHITECTURE-DIAGRAM.html` | 1,142 | Pipeline V2 architecture visualization |
| `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html` | 1,997 | Pipeline V2 implementation guide |
| `ephemeral/phase-d-execution/explainer/phase-d-explained.html` | 694 | Phase D explainer |

---

## Category 9: Next.js Site Build — 177 pages (DUPLICATES)

**Location:** `site/`
**Status:** Build artifact — duplicates html-site content
- `site/.next/server/app/` — Pre-rendered Next.js pages (75 synthesis + POC pages)
- `site/content/pages/` — 75 content HTML files for the Next.js CMS

These are NOT original content — they are the same synthesis/extraction content served through a Next.js framework.

---

## Quality Tier Analysis

### Flagship-Aspiring (PA-05 >= 3.5)
**0 pages.** No page has achieved confirmed Flagship tier.

### Ceiling Tier (PA-05 3.0-3.5, rich composition)
| Page | PA-05 | Notes |
|------|-------|-------|
| CD-006-pilot-migration.html | 39/40 (~3.9/4 implied) | CEILING crown jewel. 11 components, 5 axis patterns, fractal density. But classified as CEILING not Flagship: no pervading metaphor. |

### Composed Tier (PA-05 2.5-3.0)
| Page | PA-05 | Notes |
|------|-------|-------|
| flagship 07-intentionality.html (post-remediation) | 2.5/4 | Remediated from 1.5. ASSAY LABORATORY metaphor. Still has blocking defects. |

### Designed Tier (PA-05 2.0-2.5, clear intentionality)
| Page | PA-05 | Notes |
|------|-------|-------|
| middle-tier-page.html | 4/4 (DESIGNED) | Middle-tier SUCCESS. 12 mechanisms, F-PATTERN, 960px. |
| ceiling-page.html | High (9/9 novelty) | But container width violation, header proportions wrong. |
| gas-town-steve-yegge/output.html | Not formally scored | First /build-page output. |
| yegge-gas-town/output.html | Not formally scored | Second /build-page output. |

### Functional Tier (Soul-compliant, basic composition)
All 15 tension-test pages, 6 axis explorations, 12 DD/OD explorations (excluding crown jewels).

### Phase D Builds (Variable quality, validation test)
10 pages with scores from failing (Track 1: 5 critical violations) to passing (Variant B: 18/19).

### Pre-Design-System (Not KortAI)
All 144+ html-site pages (Tailwind template, NOT KortAI design system).

---

## Aggregate Statistics

| Category | Pages | Total Lines | Avg Lines/Page | Design System |
|----------|-------|-------------|----------------|---------------|
| Validated Explorations | 18 | 28,975 | 1,610 | KortAI (FROZEN) |
| Axis Explorations | 6 | 10,920 | 1,820 | KortAI |
| Tension Tests | 15 | 12,476 | 832 | KortAI |
| Experiment Pages | 22 | 27,951 | 1,270 | KortAI |
| Pipeline (/build-page) | 2 | 3,466 | 1,733 | KortAI |
| Implementation Components | ~113 | ~20,000 est | ~180 | KortAI (mostly) |
| Pre-Design-System (html-site) | 144+ | ~294,000 | ~2,040 | Tailwind/GSAP |
| Next.js Site | 177 | (duplicates) | - | Tailwind/GSAP |
| Misc/Infrastructure | 5 | 5,112 | 1,022 | Mixed |
| Legacy Archive | 228 | ~200,000 est | ~880 | Tailwind/GSAP |
| **TOTAL** | **~732** | **~600,000+** | - | - |

---

## Key Findings

### 1. Only 2 pages from the /build-page pipeline
Despite massive investment in pipeline infrastructure (50+ agents for Pipeline v2, 34 agents for prompt assembly, 22 agents for validation), only 2 pages have actually been produced by the pipeline. Both are Steve Yegge Gas Town content.

### 2. The crown jewel (CD-006) was built MANUALLY
The highest-quality page in the project (CD-006, 39/40, CEILING tier) was built by a direct builder agent during the CD exploration phase, not through any pipeline. It used real content ("Building Your First KortAI Documentation Page"), 11 components, 5 axis patterns, and fractal density.

### 3. Pre-design-system content is 3x larger than design-system content
~294,000 lines across 144+ html-site pages (Tailwind template) vs ~83,000 lines across 63 KortAI design system pages. The pre-DS content has never been migrated.

### 4. Progressive quality improvement across experiments
- Phase D (Feb 15): CONDITIONAL PASS, 18/19 best variant
- Middle-Tier (Feb 16): SUCCESS, PA-05 4/4 DESIGNED
- Ceiling (Feb 17): 9/9 novelty but critical defects
- Flagship (Feb 17): FAILED on richness (PA-05 1.5/4)
- Flagship Remediation (Feb 18): Improved to 2.5/4
- Pipeline Output (Feb 19): 2 pages produced, no formal PA scores recorded in files

### 5. No Flagship-tier page exists
The project's stated goal is pages at "Flagship" quality (PA-05 >= 3.5, Tier 5 >= 7/9, pervading metaphor, structural multi-coherence). No page in the project has achieved this. CD-006 comes closest but lacks a pervading metaphor (classified CEILING, not Flagship).

### 6. Two distinct design eras
- **Era 1 (html-site):** Tailwind CSS + Inter + Fira Code + GSAP + Lucide icons. White backgrounds, rounded corners, drop shadows. 144+ pages, ~500K lines.
- **Era 2 (design-system):** KortAI system with Instrument Serif + Inter + JetBrains Mono, warm cream #FEF9F5, #E83025 primary, border-radius: 0, box-shadow: none. 63 pages, ~83K lines.

### 7. The 144 html-site pages represent the migration backlog
All 144+ pages in html-site/ would theoretically be rebuilt through the /build-page pipeline. At 2 pages produced so far, the migration is effectively 1.4% complete.

---

## Content Topics Covered (across all pages)

### KortAI Design System Content
- Building documentation pages, component demos, density patterns, organizational patterns, axis patterns, combination patterns, metaphor-driven layouts

### Claude Code Practitioner Knowledge
- Gas Town (Steve Yegge's factory pattern)
- Ralph/Wiggum (autonomous agent loops)
- CC Mirror (multi-agent orchestration)
- Mobile workflows, MCP ecosystem, Chrome DevTools MCP
- Multi-agent patterns, swarm topologies
- Infrastructure: sandboxing, cloud VMs, remote development
- Principles: core patterns, anti-patterns, learning loops
- Comparisons: architecture, cost, memory, orchestration across tools

### Meta/Process Content
- Pipeline V2 architecture diagrams
- Phase D explanations
- Master playbooks
- Implementation guides
