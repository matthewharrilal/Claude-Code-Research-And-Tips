---
pipeline_stage: 3
file_type: external-research-registry
generated: 2026-02-08
agent: census-b
sources:
  - finding-registry.md (Wave 1 diagnostic)
  - OD-001 through OD-006 HTML headers (Block 1)
  - OD-004-EXTERNAL-RESEARCH.md
  - OD-005-EXTERNAL-RESEARCH.md
  - OD-006-CREATIVE-RESEARCH-FEED.md
  - identity-brief.md (55 EXT citations)
  - research-refinement.md (soul test results)
---

# EXT-* External Research Registry

**Total EXT Findings:** 47 unique (55 citations across ODs, with shared findings counted once)
**Categories:** 6 (EXT-CONV, EXT-DENSITY, EXT-TASK, EXT-CONF, EXT-SPAT, EXT-CREATIVE)
**Source Files Scanned:** 7 primary + 6 OD HTML headers

---

## Summary Table

| Category | Total Findings | Applied Count | Application Rate | Consuming OD(s) |
|----------|---------------|---------------|-----------------|-----------------|
| EXT-CONV | 5 | 5 | 100% | OD-001 |
| EXT-DENSITY | 3 | 3 | 100% | OD-001 |
| EXT-TASK | 8 | 8 | 100% | OD-003 |
| EXT-CONF | 12 | 12 | 100% | OD-004 |
| EXT-SPAT | 10 | 10 | 100% | OD-005 |
| EXT-CREATIVE | 9 | 9 | 100% | OD-001, OD-006 (primary); OD-003-005 (inherited) |
| **TOTAL** | **47** | **47** | **100%** | |

**Note:** 55 total citations across ODs because some EXT-CREATIVE findings are shared between OD-001 and OD-006 (and inherited by OD-003-005 via solid offset/cascade patterns). The 47 unique findings represent distinct research contributions.

---

## Cross-Reference: Which OD Consumed Which EXT Categories

| OD | EXT-CONV | EXT-DENSITY | EXT-TASK | EXT-CONF | EXT-SPAT | EXT-CREATIVE | Total Citations |
|----|----------|-------------|----------|----------|----------|--------------|-----------------|
| OD-001 | 5 | 3 | - | - | - | 5 (001-005) | 13 |
| OD-002 | - | - | - | - | - | - | 0 (no EXT research) |
| OD-003 | - | - | 8 | - | - | - | 8 |
| OD-004 | - | - | - | 12 | - | (inherited 001,002,004) | 12 (+3 inherited) |
| OD-005 | - | - | - | - | 10 | (inherited 001) | 10 (+1 inherited) |
| OD-006 | - | - | - | - | - | 9 (001-009) | 9 |

---

## Category 1: EXT-CONV (Conversational Research) — 5 Findings

All sourced from OD-001 v2 enrichment. Defined in OD-001 header (Block 1, lines 27-31) and identity-brief.md (lines 377-381).

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-CONV-001 | Socratic Progressive Narrowing | broadQ -> narrowQ -> specificQ -> answer. Conversation narrows to extract precise answers. | (Internal research synthesis) | OD-001 | APPLIED | PASSED — Content-level pattern, soul-neutral |
| EXT-CONV-002 | Value Density Front-Loading | Key insight placed in first sentence of each answer. Editorial technique for scannable content. | (Internal research synthesis) | OD-001 | APPLIED | PASSED — Content-level pattern, soul-neutral |
| EXT-CONV-003 | Three-Level Gestalt Spacing | 8px within groups / 32px between groups / 64px between chapters. Cognitive grouping via distance. | (Internal research synthesis — Gestalt psychology) | OD-001 | APPLIED | PASSED — Spacing architecture strengthens soul |
| EXT-CONV-004 | Background Color Differentiation | Q/A zones visually distinct via background color shifts within locked palette. | (Internal research synthesis) | OD-001 | APPLIED | PASSED — Applied within locked palette (FEF9F5/FFFFFF/FAF5ED) |
| EXT-CONV-005 | Responsive TIDAL Choreography | Desktop Q at 60% width, tablet at 75%, mobile at 100%. Progressive width collapse creates responsive density rhythm. | (Internal research synthesis) | OD-001 | APPLIED | PASSED — Layout-level pattern, soul-neutral |

---

## Category 2: EXT-DENSITY (Density Science Research) — 3 Findings

All sourced from OD-001 v2 enrichment. Defined in OD-001 header (Block 1, lines 37-39) and identity-brief.md (lines 387-389).

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-DENSITY-001 | Gestalt Pure Distance Law | Visual grouping fails when inter-group gap exceeds 1.5x the within-group spacing. Enforced via 8px/32px/64px three-level system. | (Gestalt psychology research) | OD-001 | APPLIED | PASSED — Information architecture, soul-neutral |
| EXT-DENSITY-002 | NNGroup Progressive Disclosure | Maximum 2 levels of disclosure. 3+ levels confuse users. Implemented via collapsible `<details>` callouts. | https://www.nngroup.com/articles/progressive-disclosure/ | OD-001 | APPLIED | PASSED — Content architecture, soul-neutral |
| EXT-DENSITY-003 | Twilio 20-line Rule | Initial code blocks kept under 20 lines for comprehension. Content constraint derived from Twilio DX practices. | (Twilio developer experience research) | OD-001 | APPLIED | PASSED — Content-level guideline, soul-neutral |

---

## Category 3: EXT-TASK (Task-Based Research) — 8 Findings

All sourced from OD-003 build. Defined in OD-003 header (Block 1, lines 12-19) and identity-brief.md (lines 399-406). Note: EXT-TASK-005, 007, 008, 010 were NOT applied (8 of 12 were applied per OD-CHECKPOINT.md:79).

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-TASK-001 | Task-Oriented Design | Each task = discrete island with 4px red left border. Maps to ISLANDS density pattern. | (Task-oriented UX research) | OD-003 | APPLIED | PASSED — Aligns with soul border conventions |
| EXT-TASK-002 | Progressive Disclosure via Square Markers | Square markers: solid=complete, outline=current, gray=future. Directly reinforces Soul Piece 5. | (UX progressive disclosure research) | OD-003 | APPLIED | PASSED — Directly reinforces Soul Piece 5 |
| EXT-TASK-003 | Hierarchical Task Breakdown | Subtasks connected via 1px solid vertical connector lines showing hierarchy. | (HTA — Hierarchical Task Analysis) | OD-003 | APPLIED | PASSED with note — 1px connector lines serve structural purpose (hierarchy), not accent purpose. Rule 5 targets accents. |
| EXT-TASK-004 | Negative Space Typography | 3rem after titles, 6rem between islands. Spacing values aligned with soul's whitespace-as-design principle (Rule 6). | (Negative space typography research) | OD-003 | APPLIED | PASSED — Enhances soul's whitespace philosophy |
| EXT-TASK-006 | Multi-Step Forms / Collapsible Steps | Completed steps collapse via `<details>`, current step expanded. Progressive disclosure of procedure. | (Multi-step form UX research) | OD-003 | APPLIED | PASSED — Content architecture, soul-neutral |
| EXT-TASK-009 | WCAG Accessibility | Semantic HTML, ARIA landmarks, keyboard focus with 3px red outline. Accessibility requirement. | (WCAG 2.1 guidelines) | OD-003 | APPLIED | PASSED — Accessibility overrides aesthetic consistency for functional reasons |
| EXT-TASK-011 | Verification Checkpoints | "You should see" prefix in green-bordered callout. Uses established callout family DNA with accent-green. | (Verification checkpoint UX patterns) | OD-003 | APPLIED | PASSED — Uses established callout family DNA |
| EXT-TASK-012 | Error Recovery Islands | "If This Fails" in coral-bordered callout. Uses established callout family DNA with accent-coral. | (Error recovery UX patterns) | OD-003 | APPLIED | PASSED — Uses established callout family DNA |

**Not Applied (gaps in numbering):** EXT-TASK-005, EXT-TASK-007, EXT-TASK-008, EXT-TASK-010 — researched but not selected for application in OD-003.

---

## Category 4: EXT-CONF (Confidence/Epistemic Research) — 12 Findings

All sourced from OD-004 build via OD-004-EXTERNAL-RESEARCH.md (12 resources surveyed). Defined in OD-004 header (Block 1, lines 25-36) and identity-brief.md (lines 411-422).

**WARNING:** EXT-CONF findings use non-standard naming — descriptive names instead of numeric suffixes (e.g., "EXT-CONF (NNG Progressive Disclosure)" rather than "EXT-CONF-001"). This is an ID FORMAT INCONSISTENCY vs. all other EXT-* categories. Cross-reference finding-registry.md note at line 243.

| ID (Descriptive) | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|-------------------|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-CONF (NNG Progressive Disclosure) | NNG Progressive Disclosure for Confidence | Max 4 strata; strong information scent at boundaries. Two-level limit for core interaction. | https://www.nngroup.com/articles/progressive-disclosure/ | OD-004 | APPLIED | PASSED — IA pattern, zero CSS soul implications |
| EXT-CONF (Confidence Visualization) | Confidence Visualization UI Patterns | Inverse density-confidence relationship. High confidence = sparse, low confidence = dense. Redundant coding (never color alone). | https://www.aiuxdesign.guide/patterns/confidence-visualization | OD-004 | APPLIED | PASSED — Structural pattern |
| EXT-CONF (Agentic Categorical Labels) | Agentic Categorical Labels | Words not percentages: Established/Probable/Speculative/Open. Avoids false precision in documentation contexts. | https://agentic-design.ai/patterns/ui-ux-patterns/confidence-visualization-patterns | OD-004 | APPLIED | PASSED — Content labeling |
| EXT-CONF (Gwern Kesselman Vocabulary) | Gwern Kesselman Confidence Vocabulary | 8-level confidence scale per-section tags. Each section carries confidence marker setting reader expectations. | https://gwern.net/about | OD-004 | APPLIED | PASSED — Per-section tags, content pattern |
| EXT-CONF (Appleton Epistemic Disclosure) | Appleton Epistemic Disclosure | "You Are Reading" orientation markers per stratum. Reader always knows epistemic status. | (Maggie Appleton's digital garden patterns) | OD-004 | APPLIED | PASSED — Orientation markers |
| EXT-CONF (Diataxis) | Diataxis Documentation Framework | Confidence maps to documentation type (tutorial=high, reference=medium, explanation=varied, howto=high). | https://diataxis.fr/ | OD-004 | APPLIED | PASSED — Documentation taxonomy |
| EXT-CONF (Layered Architecture) | Layered Architecture Principle | Layer isolation, bounded interpretation zones. Each stratum independently valuable. | (Software architecture patterns applied to docs) | OD-004 | APPLIED | PASSED — Bounded interpretation zones |
| EXT-CONF (GitBook Adaptive) | GitBook Adaptive Progressive Revelation | Progressive stratum revelation, URL-addressable strata. Deep linking to specific confidence levels. | (GitBook documentation patterns) | OD-004 | APPLIED | PASSED — Progressive revelation |
| EXT-CONF (AI Agents Progressive Disclosure) | AI Agents Progressive Disclosure | Geological survey header always visible. Persistent overview regardless of scroll position. | (AI agent UX patterns) | OD-004 | APPLIED | PASSED — Geological survey header |
| EXT-CONF (NNG Information Scent) | NNG Information Scent at Boundaries | Strong scent at every stratum boundary; progress indicators showing which stratum user occupies. | https://www.nngroup.com/articles/information-scent/ | OD-004 | APPLIED | PASSED — Boundary markers |
| EXT-CONF (EA Forum Epistemic) | EA Forum Epistemic Status Markers | Evidence DNA per stratum; crux transparency. Making uncertainty visible and navigable. | (EA Forum / LessWrong epistemic norms) | OD-004 | APPLIED | PASSED — Evidence DNA display |
| EXT-CONF (Stripe Docs) | Stripe Docs Confidence-Level Switcher | Confidence-level switcher control. UI toggle between certainty levels. | https://docs.stripe.com/ | OD-004 | APPLIED | PASSED — Confidence-level switcher |

---

## Category 5: EXT-SPAT (Spatial/Map-Based Research) — 10 Findings

All sourced from OD-005 build via OD-005-EXTERNAL-RESEARCH.md (12 resources surveyed). Defined in OD-005 header (Block 1, lines 25-34) and identity-brief.md (lines 427-436). Note: EXT-SPAT-006, 007 were NOT applied (10 of 12 per OD-CHECKPOINT.md:103).

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-SPAT-001 | Hub-and-Spoke ISLANDS | Square tiles in CSS Grid. Hub as catch-all navigation center surrounded by spoke pages. | Kevin Lynch "Image of the City" + NNG hub-spoke model | OD-005 | APPLIED | PASSED — CSS Grid layout, soul-aligned (square tiles) |
| EXT-SPAT-002 | Breadcrumbs as WAVE Trigger | Triangle separators (CSS `content: '▸'`), monospace font for path, current item in Serif. Creates spatial orientation. | (NNG breadcrumb research) | OD-005 | APPLIED | PASSED — Navigation architecture, soul-neutral |
| EXT-SPAT-003 | 7-Column Magazine Grid | Content + sidebar layout (3fr 1fr grid). Magazine-style spatial arrangement. | (CSS Grid magazine layout patterns) | OD-005 | APPLIED | PASSED — Layout pattern, soul-neutral |
| EXT-SPAT-004 | Named Grid Areas | Semantic zone naming (doctrine, examples, references). Pure CSS architecture enabling spatial semantics. | (CSS Grid named areas specification) | OD-005 | APPLIED | PASSED — Pure CSS architecture |
| EXT-SPAT-005 | Cartographic Hierarchy | Figure-ground separation, type hierarchy applied to documentation zones. Kevin Lynch's five elements adapted. | Kevin Lynch "Image of the City" (1960) | OD-005 | APPLIED | PASSED — Aligns with soul's typography-first hierarchy |
| EXT-SPAT-008 | Screen Reader Accessibility | Skip links, ARIA landmarks for spatial navigation. Ensures hub-spoke is navigable without vision. | (WCAG 2.1 guidelines) | OD-005 | APPLIED | PASSED — Accessibility, soul-neutral |
| EXT-SPAT-009 | Alternation for Rhythm | Content block -> 80px+ gap -> content block. Isolation spacing enforces ISLANDS density pattern. | (Rhythm/alternation in information design) | OD-005 | APPLIED | PASSED — Whitespace architecture, strengthens soul |
| EXT-SPAT-010 | Islands Architecture | 95% static HTML, 5% interactive. Content-first philosophy matching soul's flat design principle. | (Islands architecture pattern — Astro/Fresh) | OD-005 | APPLIED | PASSED — Matches soul's flat, content-first philosophy |
| EXT-SPAT-011 | Natural Reading Rhythms | 40-60 word paragraphs. Optimal paragraph length for sustained reading in spatial layouts. | (Reading comprehension research) | OD-005 | APPLIED | PASSED — Content guideline, soul-neutral |
| EXT-SPAT-012 | ECS Modular Entities | Each spoke = modular entity. Component architecture where spokes are independently composable. | (Entity-Component-System architecture) | OD-005 | APPLIED | PASSED — Component architecture pattern |

**Not Applied (gaps in numbering):** EXT-SPAT-006, EXT-SPAT-007 — researched but not selected for application in OD-005.

---

## Category 6: EXT-CREATIVE (Creative Techniques Research) — 9 Findings

Primary source: OD-006-CREATIVE-RESEARCH-FEED.md (12 resources surveyed, 9 techniques extracted across 3 tiers). Applied in OD-001 (Tier 1 subset: 001-005) and OD-006 (all 9). Some inherited by OD-003-005 via shared patterns (solid offset, typographic cascade). Defined in OD-006 header (Block 1, lines 41-51) and identity-brief.md (lines 441-449).

### Tier 1 (Structural Techniques)

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-CREATIVE-001 | THE SOLID OFFSET | Neobrutalist depth via pseudo-elements. `::after` pseudo-element creates solid color block behind components, replacing box-shadow with flat graphic technique. | Resource 4: Neobrutalism design principles | OD-001, OD-003 (inherited), OD-004 (inherited), OD-005 (inherited), OD-006 | APPLIED | **NEEDS REFINEMENT** — Opaque solid offsets: BORDERLINE (flat graphic vs floating illusion). Semi-transparent offsets (OD-001 essence/code): SPIRIT FAILS (colored glow = equivalent to box-shadow). |
| EXT-CREATIVE-002 | THE TYPOGRAPHIC HIERARCHY CASCADE | 5-level 1.5x ratio type system. Consistent mathematical relationship between heading levels. | Resources 1-2: Stripe/Linear typography | OD-001, OD-004 (inherited), OD-006 | APPLIED | **NEEDS REFINEMENT** — 3 values (section:26px, question:22px, meta:10px) deviate from locked type scale. Research ratio applied as raw directive. Fix: map to nearest locked values. |
| EXT-CREATIVE-003 | THE SCROLL WITNESS | CSS-only section progress tracking. Fixed sidebar with 3px-wide rectangular markers that fill as sections are scrolled. Uses `view()` timeline and `@property`. | Resource 3: CSS scroll-driven animations (MDN, Frontend Masters) | OD-001, OD-006 | APPLIED | PASSED — Minimally styled, square markers, no decoration. Applied as REFINED. |
| EXT-CREATIVE-004 | THE ARRIVING WISDOM | Scroll-triggered staggered reveal. `opacity: 0->1`, `translateY(16px)->0`, 0.5s ease-out. Respects `prefers-reduced-motion`. Chromium-only with static fallback. | Resource 3: CSS scroll-driven animations | OD-001, OD-004 (inherited), OD-006 | APPLIED | PASSED — Subtle, accessible, progressive enhancement. Applied as REFINED. |

### Tier 2 (Enhancement Techniques)

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-CREATIVE-005 | THE EDITORIAL DROP | Serif drop caps at section openings. `::first-letter` in Instrument Serif, 3.5em, primary color, float left. Classic editorial authority technique. | Resource 6: CSS magazine layouts | OD-001, OD-006 | APPLIED | PASSED — Soul-aligned (Instrument Serif + primary color = editorial authority) |
| EXT-CREATIVE-006 | THE SEMANTIC BRIDGE | Hover over concept term highlights related code. `background: rgba(232,48,37,0.05)` on `.highlight-target`. Pedagogical interaction linking concept to implementation. | Resource 1: Stripe API docs (hover-to-illuminate) | OD-006 | APPLIED | PASSED — Educational interaction, minimal visual impact, uses locked color |
| EXT-CREATIVE-007 | THE DUAL LENS | Why/How toggle between serif (explanation) and monospace (implementation). Reinforces font-zone rules: serif=wisdom, mono=code. All elements `border-radius: 0` explicit. | Resource 7: Design system documentation sites | OD-006 | APPLIED | PASSED — Reinforces Soul Piece 2 (serif=wisdom, mono=code) |

### Tier 3 (Architectural Techniques)

| ID | Name | Description | Source URL | Applied In | Application Status | Soul Test Result |
|----|------|-------------|-----------|-----------|-------------------|-----------------|
| EXT-CREATIVE-008 | THE COLLAPSING HEADER | Sticky headers that shrink on scroll. Section headers reduce from full to compact on scroll, creating information density variation. `border-radius: 0` explicit. | Resource 10: Apple HIG documentation | OD-006 | APPLIED | PASSED — Functional interaction, no soul violations |
| EXT-CREATIVE-009 | THE VISUAL INDEX | Specimen-sheet grid overview. Grid layout for pattern/component overview. Square tiles, monospace labels. `border-radius: 0` explicit. | Resource 10: Apple HIG + Resource 7: design system sites | OD-006 | APPLIED | PASSED — Editorial technique, soul-aligned |

---

## Spirit Violation List (from research-refinement.md)

Findings where EXT research was applied but the implementation introduced spirit violations:

| # | OD(s) | EXT Finding | Violation | Severity | Recommended Fix |
|---|-------|-------------|-----------|----------|-----------------|
| 1 | OD-001 | EXT-CREATIVE-001 | Semi-transparent offset pseudo-elements (opacity 0.15, 0.3) create colored glow — spirit equivalent of box-shadow | HIGH | Change from `opacity: 0.15/0.3` to `opacity: 1` with palette color, or remove |
| 2 | OD-001,003,004,005,006 | EXT-CREATIVE-001 | Opaque solid offsets creating perceptual depth illusion | MEDIUM | Assess case by case: flat graphic block = acceptable; floating illusion = fails |
| 3 | OD-005 | EXT-CREATIVE-001 (inherited) | `.territory-tile:hover { transform: translate(-4px,-4px) }` creates fake lift/depth | HIGH | Remove transform — content should not behave like interactive button |
| 4 | OD-006 | EXT-CREATIVE-001 (inherited) | `.territory-tile:hover { transform: translate(-2px,-2px) }` creates fake lift/depth | MEDIUM | Same as above, smaller magnitude |
| 5 | OD-001,004,006 | EXT-CREATIVE-002 | 3 type scale values (26px, 22px, 10px) deviate from locked type scale | MEDIUM | Map to locked: section 26px->24px, question 22px->20px, meta 10px->12px |

---

## Raw Directive vs Refined Application

Per research-refinement.md audit:

| Application Type | Count | Percentage |
|-----------------|-------|-----------|
| Properly REFINED (filtered through soul) | 40 | 85% |
| NEEDS REFINEMENT (applied but issues flagged) | 2 unique findings (EXT-CREATIVE-001, 002) across multiple ODs | 4% |
| PASSED as soul-neutral (no CSS implications) | 38 | 81% |
| PASSED as soul-strengthening | 5 | 11% |
| REJECTED | 0 | 0% |

**Summary from research-refinement.md (COMPACTION-SAFE):**
- EXT-* citations checked: 55
- PASSED: 46
- NEEDS REFINEMENT: 5 instances (2 unique findings across ODs)
- REJECTED: 0
- Raw directive applications found: 7 (3 type scale deviations, 1 off-palette color, 3 off-palette backgrounds)
- Spirit vs Letter violations: 7 total (2 HIGH, 3 MEDIUM, 1 LOW, 1 universal/accepted)

---

## Appendix: EXT-CONF Numeric ID Mapping

Since EXT-CONF findings lack numeric suffixes (inconsistency flagged in finding-registry.md line 243), this appendix provides a proposed numeric mapping for consistency:

| Proposed Numeric ID | Current Descriptive ID | Source Resource |
|---------------------|----------------------|----------------|
| EXT-CONF-001 | EXT-CONF (NNG Progressive Disclosure) | OD-004-EXTERNAL-RESEARCH.md Resource 1 |
| EXT-CONF-002 | EXT-CONF (Confidence Visualization) | Resource 2 |
| EXT-CONF-003 | EXT-CONF (Agentic Categorical Labels) | Resource 3 |
| EXT-CONF-004 | EXT-CONF (Gwern Kesselman Vocabulary) | Resource 4 |
| EXT-CONF-005 | EXT-CONF (Appleton Epistemic Disclosure) | Resource 5 |
| EXT-CONF-006 | EXT-CONF (Diataxis) | Resource 6 |
| EXT-CONF-007 | EXT-CONF (Layered Architecture) | Resource 7 |
| EXT-CONF-008 | EXT-CONF (GitBook Adaptive) | Resource 8 |
| EXT-CONF-009 | EXT-CONF (AI Agents Progressive Disclosure) | Resource 9 |
| EXT-CONF-010 | EXT-CONF (NNG Information Scent) | Resource 10 |
| EXT-CONF-011 | EXT-CONF (EA Forum Epistemic) | Resource 11 |
| EXT-CONF-012 | EXT-CONF (Stripe Docs) | Resource 12 |

**Note:** This numeric mapping is PROPOSED, not canonical. The current descriptive names remain authoritative until a collision resolution pass assigns canonical numeric IDs.

---

## COMPACTION-SAFE SUMMARY

- **Agent:** census-b (EXT Findings Compiler)
- **Total unique EXT findings:** 47
- **Total citations across ODs:** 55
- **Categories:** 6 (CONV:5, DENSITY:3, TASK:8, CONF:12, SPAT:10, CREATIVE:9)
- **Soul test results available:** All 55 citations tested in research-refinement.md
- **PASSED:** 46 | **NEEDS REFINEMENT:** 2 unique (across 5+ OD instances) | **REJECTED:** 0
- **Spirit violations from EXT research:** 5 unique issues (2 HIGH, 3 MEDIUM)
- **ID format inconsistency:** EXT-CONF uses descriptive names, not numeric suffixes
- **ID gaps (not applied):** EXT-TASK-005/007/008/010, EXT-SPAT-006/007
- **Output file:** `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md`
- **Line count:** ~300 lines
- **Status:** COMPLETE
