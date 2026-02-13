# CD Content Provenance Audit

**Agent:** content-provenance
**Date:** 2026-02-12
**Scope:** All 6 CD HTML files (CD-001 through CD-006)
**Method:** Direct source code analysis of headers, CSS comments, HTML comments, findings, and RAR blocks

---

## 1. Per-File Catalog

### CD-001: Reasoning Inside Code
**File:** `CD-001-reasoning-inside-code.html` (1,655 lines)
**Stated Purpose:** Combination exploration testing CRESCENDO density + NARRATIVE ARC + F-PATTERN + BENTO axis on a heavy composite page. Demonstrates velocity rule (T2) with 3 heavy component types.

**Content Topic:** Authentication middleware -- token validation, chain-of-trust pattern, session vs JWT comparison. Node.js/Express code examples.

**Finding IDs Produced:** CD-F-001, CD-F-002, CD-F-003, CD-F-004

**Research References (from header + RAR + CSS comments):**
- **R5 findings applied:** H2, T2, N1, N2, N3, N4, G2, G3, A4, S5, Recipe 2
- **AD-F findings applied:** AD-F-004, AD-F-005, AD-F-008, AD-F-009, AD-F-023, AD-F-024, AD-F-025
- **DD-F findings referenced:** DD-F-014 (max 2 callouts per viewport)
- **Anti-patterns explicitly avoided:** Code Wall (A2), Orphaned Heavy (A4), Same-Velocity Stacking, 2px Border Epidemic, Traffic Light, Semi-Transparent Backgrounds

**Prior Phase Dependencies (from "BUILT ON" header):**
- AD-002-f-pattern.html (F-Pattern axis)
- AD-003-bento-grid.html (Bento Grid axis)
- OD-002-narrative.html (NARRATIVE ARC OD)
- CD-CONVENTION-SPEC.md
- research-package-cd-001.md

**Design Pattern Inventory:**
| Pattern | Source Phase |
|---------|------------|
| CRESCENDO density (sparse-to-dense) | DD (density) |
| F-Pattern left-spine headings | AD (axis) |
| Bento Grid at peak | AD (axis) |
| Breathing zones between sections | AD (transition grammar) |
| Density meter visual device | CD-original |
| Section indicator labels | CD-original |
| Core Abstraction component (Essence + Code proof) | OD/AD inherited |
| Reasoning component (framed deliberation) | OD/AD inherited |
| Callout system (5 accent variants, 2-zone DNA) | DD/OD inherited |
| Code blocks (dark theme, syntax highlighting) | DD/OD inherited |

**What is ORIGINAL to CD-001:**
- Density meter UI component (visual progress bar showing 1-5 density levels)
- Section indicator labels ("Opening -- Context", "Rising -- First Contact", etc.)
- CRESCENDO velocity interleaving pattern (CD-F-001): systematic SLOW+FAST+SLOW rhythm
- F-Pattern to Bento bridge transition validation (CD-F-002)
- Core Abstraction as CRESCENDO peak container (CD-F-003)
- Bento Grid as heavy-component containment at peak (CD-F-004)

**What is INHERITED:**
- All CSS tokens (locked layer) -- from design-system
- Callout family DNA (2-zone, 4px left border, 5 accents) -- from OD conventions
- Code block dark theme -- from OD conventions
- Header/footer structure (full-bleed dark, 3px red border) -- from CD-CONVENTION-SPEC
- Responsive collapse at 768px -- from CD-CONVENTION-SPEC
- F-Pattern heading hierarchy -- from AD-002
- Bento Grid cell structure -- from AD-003
- Soul enforcement (* border-radius: 0) -- from design-system

---

### CD-002: Task Containing Decision
**File:** `CD-002-task-containing-decision.html` (1,568 lines)
**Stated Purpose:** Test whether PULSE density + TASK-BASED org + Z-PATTERN/SPIRAL compound axis can embed a Decision Matrix within a task workflow without violating N1 (stack don't nest).

**Content Topic:** Setting up a CI/CD pipeline -- GitHub Actions, GitLab CI, Jenkins comparison. YAML configuration, deployment workflow.

**Finding IDs Produced:** CD-F-005, CD-F-006, CD-F-007, CD-F-008

**Research References (from header + RAR):**
- **R5 applied:** N1, A3, H2, H4, T2, N2, R1, S1, S3, Recipe-3
- **AD-F applied:** AD-F-024, AD-F-025, AD-F-023, AD-F-004, AD-F-027
- **DD-F applied:** DD-F-001 (PULSE rhythm), DD-F-006 (fractal 5 scales), DD-F-014
- **OD-F applied:** OD-F-005 (organization IS density)

**Prior Phase Dependencies:**
- AD-001-z-pattern.html
- AD-004-spiral.html
- OD-003-task-based.html
- CD-CONVENTION-SPEC.md
- research-package-cd-002.md
- R5-COMBINATION-THEORY.md

**Design Pattern Inventory:**
| Pattern | Source Phase |
|---------|------------|
| PULSE density (dense/sparse alternation) | DD |
| Z-Pattern task clusters | AD |
| Spiral geological strata (bedrock/subsoil/atmosphere) | AD |
| Breathing transition (48px+ gap) | AD (AD-F-025) |
| Task component (checklist with check boxes) | OD (task-based) |
| Decision Matrix (comparison table + recommendation) | OD/AD inherited |
| Reasoning component | OD/AD inherited |
| Running header (phase indicator) | CD-002 original |
| Confidence strata with border-weight gradient (4px/3px/1px) | AD-004 spiral |
| Challenge callout within atmosphere stratum | CD-002 original placement |

**What is ORIGINAL to CD-002:**
- Decision-as-PULSE-pause concept (CD-F-005): Decision Matrix IS the sparse phase
- Breathing transition validation between Z and Spiral (CD-F-006)
- Task-Decision N1 stacking pattern (CD-F-007): decision interrupts task flow as sibling
- Spiral confidence strata in task context (CD-F-008): border-weight = confidence
- Running header UI element for Z-phase indication
- Two-layer CSS architecture (locked-layer + combination-layer)
- Closing statement as centered serif italic

**What is INHERITED:**
- All locked-layer CSS tokens
- Callout system, code blocks, tables, headers, footers
- Z-Pattern sweep organization from AD-001
- Spiral geological strata from AD-004
- Task-based organization from OD-003
- PULSE density concept from DD

---

### CD-003: File Tree with Callouts
**File:** `CD-003-file-tree-with-callouts.html` (1,771 lines)
**Stated Purpose:** Test how File Tree + Callout components interact in ISLANDS density / SPATIAL organization / BENTO GRID + CHOREOGRAPHY axis layout. Avoid Callout Cacophony (A1).

**Content Topic:** React application file structure -- atomic design, feature-based vs layer-based vs domain-driven architecture, path aliases, tsconfig configuration.

**Finding IDs Produced:** CD-F-009, CD-F-010, CD-F-011, CD-F-012

**Research References (from header + RAR):**
- **R5 applied:** R5-001, R5-007, R5-011, R5-015, R5-020, R5-025, R5-031, R5-033, R5-039 (9 R-5 citations)
- **R4 applied:** R4-019, R4-023, R4-025 (3 R-4 citations)
- **R2 applied:** R2-4.1, R2-2.2 (2 R-2 citations)
- **AD-F applied:** AD-F-009, AD-F-010, AD-F-017, AD-F-025 (4 AD-F citations)
- **DD-F applied:** DD-F-003, DD-F-006, DD-F-014, DD-F-015 (4 DD-F citations)
- **OD-F applied:** OD-F-005 (1 OD-F citation)
- **Total: 23 research citations** (most of any CD exploration)

**Prior Phase Dependencies:**
- AD-003-bento-grid.html
- AD-005-choreography.html
- OD-005-spatial.html
- DD-003-islands.html
- CD-CONVENTION-SPEC.md
- research-package-cd-003.md

**Design Pattern Inventory:**
| Pattern | Source Phase |
|---------|------------|
| ISLANDS density (discrete clusters in sparse ocean) | DD-003 |
| Bento Grid (3-col, varied cell sizes) | AD-003 |
| Choreography hub-spoke | AD-005 |
| SMOOTH transition (bento -> choreography) | AD-F-025 |
| File Tree component (monospace, indented hierarchy) | CD-003 original |
| Cell badges (hub, spoke, file-tree type indicators) | CD-003 original |
| 960px intermediate breakpoint | CD-003 original |
| Visible RAR block (rendered in HTML, not comment) | CD-003 unique |

**What is ORIGINAL to CD-003:**
- File Tree component design (border-left: 4px dark, monospace, breathing bg)
- File Tree + Callout left-anchor coexistence pattern (CD-F-009)
- SMOOTH transition preservation of ISLANDS density (CD-F-010)
- File Tree as temperature buffer for callout sequences (CD-F-011)
- Decision Matrix as cognitive mode hub in choreography (CD-F-012)
- Cell badge UI elements for bento cell type labeling
- 960px intermediate responsive breakpoint (3-col -> 2-col -> 1-col)
- Visible (rendered) Research Application Record section
- Page-end marker with horizontal rule

**What is INHERITED:**
- All locked-layer CSS tokens
- Bento grid layout from AD-003
- Choreography hub-spoke from AD-005
- ISLANDS density from DD-003
- Spatial organization from OD-005
- Callout system, code blocks, tables

---

### CD-004: Essence as Background
**File:** `CD-004-essence-as-background.html` (1,626 lines)
**Stated Purpose:** Test whether Essence callouts can serve as ambient background voice through FREQUENCY and TYPOGRAPHY, not physical depth. TIDAL density, CONFIDENCE-BASED organization, SPIRAL + CHOREOGRAPHY axes.

**Content Topic:** Database architecture decisions -- relational (PostgreSQL, ACID), document stores (MongoDB), event sourcing (CQRS), edge databases, graph databases, vector databases.

**Finding IDs Produced:** CD-F-013, CD-F-014, CD-F-015, CD-F-016

**Research References (from header + RAR):**
- **R5 applied:** H2, H3, T2, T3, N1, G1, G2, G3, S2, S3, S4, S5, A5, Recipe 2 (14 R-5 citations)
- **AD-F applied:** AD-F-004, AD-F-013, AD-F-014, AD-F-015, AD-F-016, AD-F-017, AD-F-023, AD-F-024, AD-F-025 (9 AD-F citations)
- **Wave 1 CD-F applied:** CD-F-001, CD-F-006, CD-F-008 (3 prior CD findings)

**Prior Phase Dependencies:**
- AD-004-spiral.html
- AD-005-choreography.html
- OD-004-confidence.html
- CD-CONVENTION-SPEC.md
- research-package-cd-004.md

**Design Pattern Inventory:**
| Pattern | Source Phase |
|---------|------------|
| TIDAL density (width modulation) | DD (density) |
| Confidence-based organization (established/probable/speculative/open) | OD-004 |
| Spiral border-weight gradient (4px/3px/1px/0px) | AD-004 |
| Choreography hub-spoke | AD-005 |
| Breathing transition (80px, double breathing) | AD-F-025, CD-CONV S18.3 |
| Confidence badges (colored border indicators) | CD-004 original |
| Confidence-gap spacing tokens | CD-004 original |
| Essence at 60% max-width (TIDAL dense zone) | CD-004 original |
| Reasoning with two-column layout | CD-004 original |

**What is ORIGINAL to CD-004:**
- Ambient Essence through frequency+typography, not depth (CD-F-013)
- TIDAL width modulation as density signal (CD-F-014): 60% vs 100% width
- Confidence-proportional spacing IS spiral geometry (CD-F-015)
- Breathing transition between incompatible axis geometries (CD-F-016)
- Confidence badges with color-coded borders
- Confidence-gap spacing classes (moderate/breathing/wide)
- 7 Essence callouts distributed across page (ambient frequency)
- Task components per confidence tier (action items at each level)
- Two-column Reasoning component layout

**What is INHERITED:**
- Spiral strata from AD-004
- Choreography layout from AD-005
- Confidence-based organization from OD-004
- All locked-layer tokens
- Callout system, code blocks, headers, footers

---

### CD-005: Multi-Axis Transition
**File:** `CD-005-multi-axis-transition.html` (~1,996 lines)
**Stated Purpose:** Test how 3 axis patterns (Z, F, Bento) work SEQUENTIALLY on one page with WAVE density and SPATIAL organization. The ONLY CD exploration testing AD-F-025 transition grammar at multi-axis scale.

**Content Topic:** Frontend testing -- unit tests, integration tests, E2E tests, testing pyramid, Vitest configuration, mocking patterns, test infrastructure.

**Finding IDs Produced:** CD-F-017, CD-F-018, CD-F-019, CD-F-020

**Research References (from header + RAR):**
- **R5 applied:** T2, T3, G1, G3, H1, S1, S2, A1, A5, Recipe-5 (10 R-5 citations)
- **AD-F applied:** AD-F-001, AD-F-005, AD-F-009, AD-F-023, AD-F-024, AD-F-025 (6 AD-F citations)
- **CD-F applied:** CD-F-001, CD-F-002, CD-F-006, CD-F-010 (4 prior CD findings)
- **All 11 component types used** (inventoried: Info 1, Tip 2, Gotcha 2, Essence 1, Challenge 1, Code 5, File Tree 1, Decision Matrix 1, Core Abstraction 1, Task 1, Reasoning 1)

**Prior Phase Dependencies:**
- AD-001-z-pattern.html
- AD-002-f-pattern.html
- AD-003-bento-grid.html
- OD-005-spatial.html
- CD-CONVENTION-SPEC.md
- research-package-cd-005.md

**Design Pattern Inventory:**
| Pattern | Source Phase |
|---------|------------|
| WAVE density (oscillating MED/HIGH/MED-HIGH/LOW) | DD |
| Z-Pattern diagonal sweeps (overview) | AD-001 |
| F-Pattern left-anchor progressive disclosure (deep dive) | AD-002 |
| Bento Grid cells as islands (reference) | AD-003 |
| SMOOTH transition (Z -> F) | AD-F-025 |
| BRIDGE transition (F -> Bento) | AD-F-025 |
| SPATIAL organization (position = meaning) | OD-005 |

**What is ORIGINAL to CD-005:**
- Multi-axis sequential coherence pattern (CD-F-017): 3 axes on 1 page
- WAVE density independence from axis geometry (CD-F-018)
- Bridge transition as cognitive handoff concept (CD-F-019)
- Component voice preservation across axes (CD-F-020)
- The only file testing 3 axis patterns with transition grammar
- Task component + Challenge as resolution pattern

**What is INHERITED:**
- Z-Pattern from AD-001
- F-Pattern from AD-002
- Bento Grid from AD-003
- WAVE density from DD
- Transition grammar from AD-F-025
- All locked-layer tokens, callout system, code blocks

---

### CD-006: Pilot Migration (Crown Jewel)
**File:** `CD-006-pilot-migration.html` (~2,064 lines)
**Stated Purpose:** Pilot Migration crown jewel -- tests whether the entire 5-stage pipeline (DD+OD+AD+CD) produces a working design mind. Uses REAL content, ALL 11 components, ALL 5 axis patterns, ALL transition grammar types, fractal density at 5 scales.

**Content Topic:** "Building Your First KortAI Documentation Page" -- a meta-tutorial about using the design system itself. Tokens, soul enforcement, pattern selection, component building, auditing, deployment.

**Finding IDs Produced:** CD-F-021, CD-F-022, CD-F-023, CD-F-024, CD-F-025

**Research References (from header):**
- research-package-cd-006.md (all 39 R-5 findings)
- CD-CONVENTION-SPEC.md (Sections 1-20)
- AD-006-compound.html (crown jewel pattern reference)
- All AD explorations (AD-001--006)
- R5-COMBINATION-THEORY.md
- ACCUMULATED-IDENTITY-v2.md

**Structure (8 sections, all 5 axis patterns):**
1. S1: Why Build from Tokens (Spiral -- geological density)
2. S2: Understanding the Soul (Z-Pattern)
3. S3: Token Reference Cards (Bento Grid -- Islands)
4. S4: Choosing Your Patterns (F-Pattern -- CRESCENDO to Decision Matrix)
5. S5: Building Your First Component (Z-Pattern -- PULSE)
6. S6: Auditing for Compliance (Bento Grid -- Islands)
7. S7: Deploying Your Page (Choreography -- WAVE)
8. S8: What Comes Next (Spiral -- bookend return)

**Transition Grammar (7 transitions):**
- 2 Smooth (F->Z, Bento->Choreo)
- 3 Bridge (Z->Bento, Bento->F, Z->Bento)
- 2 Breathing (Spiral->Z, Choreo->Spiral)

**Component Census (33 instances, all 11 types):**
| Component | Count |
|-----------|-------|
| Info Callout | 5 |
| Tip Callout | 4 |
| Gotcha Callout | 3 |
| Essence Callout | 3 |
| Challenge Callout | 2 |
| Code Snippet | 6 |
| File Tree | 2 |
| Decision Matrix | 1 |
| Core Abstraction | 2 |
| Task Component | 3 |
| Reasoning Component | 2 |

**What is ORIGINAL to CD-006:**
- Bookend Spiral for structural wholeness (CD-F-021)
- Bridge transitions carry semantic load (CD-F-022): not just spacers
- Real content eliminates forced component placement (CD-F-023)
- Compound page density as 4-act structure (CD-F-024): Orient/Learn/Build/Ship
- Transition grammar maps to cognitive boundary difficulty (CD-F-025)
- Table of Contents navigation element
- --type-page: 3rem divergence (crown jewel override)
- Axis zone tokens (--axis-zone-primary, etc.)
- Meta-documentation approach: the system documenting itself

**What is INHERITED:**
- ALL 5 axis patterns from AD-001 through AD-005
- All locked-layer tokens
- All component types from OD/AD phases
- Transition grammar from AD-F-025
- Convention rules from CD-CONVENTION-SPEC.md

---

## 2. Cross-File Finding ID Registry

| Finding ID | File | Class | Description |
|------------|------|-------|-------------|
| CD-F-001 | CD-001 | B | CRESCENDO velocity interleaving (SLOW+FAST+SLOW rhythm) |
| CD-F-002 | CD-001 | A | F-Pattern to Bento bridge transition (validates AD-F-025) |
| CD-F-003 | CD-001 | B | Core Abstraction as CRESCENDO peak container |
| CD-F-004 | CD-001 | B | Bento Grid as heavy-component containment at peak |
| CD-F-005 | CD-002 | B | Decision-as-PULSE-pause (matrix IS sparse phase) |
| CD-F-006 | CD-002 | A | Breathing transition validated between Z and Spiral |
| CD-F-007 | CD-002 | B | Task-Decision N1 stacking (siblings, not nesting) |
| CD-F-008 | CD-002 | B | Spiral confidence strata in task context |
| CD-F-009 | CD-003 | B | File Tree + Callout left-anchor coexistence |
| CD-F-010 | CD-003 | A | SMOOTH transition preserves ISLANDS density |
| CD-F-011 | CD-003 | B | File Tree as temperature buffer for callout sequences |
| CD-F-012 | CD-003 | B | Decision Matrix as cognitive mode hub |
| CD-F-013 | CD-004 | A | Ambient Essence through frequency+typography (not depth) |
| CD-F-014 | CD-004 | B | TIDAL width modulation (60% vs 100%) as density signal |
| CD-F-015 | CD-004 | A | Confidence-proportional spacing IS spiral geometry |
| CD-F-016 | CD-004 | B | Breathing transition for incompatible axis geometries |
| CD-F-017 | CD-005 | A | Multi-axis sequential coherence (3 axes, 1 page) |
| CD-F-018 | CD-005 | B | WAVE density independent of axis geometry |
| CD-F-019 | CD-005 | B | Bridge transition as cognitive handoff |
| CD-F-020 | CD-005 | A | Component voice preservation across axes |
| CD-F-021 | CD-006 | B | Bookend Spiral creates structural wholeness |
| CD-F-022 | CD-006 | B | Bridge transitions carry semantic load |
| CD-F-023 | CD-006 | A | Real content eliminates forced component placement |
| CD-F-024 | CD-006 | B | Compound page density arc is 4-act structure |
| CD-F-025 | CD-006 | A | Transition grammar maps to cognitive boundary difficulty |

**Total: 25 findings across 6 files. 4 findings per file (except CD-006 with 5).**

---

## 3. Research Citation Depth by File

| File | R5 | R4 | R2 | R1 | AD-F | DD-F | OD-F | CD-F (prior) | Total |
|------|----|----|----|----|------|------|------|-------------|-------|
| CD-001 | 11 | 0 | 0 | 0 | 7 | 1 | 0 | 0 | 19 |
| CD-002 | 10 | 0 | 0 | 0 | 5 | 3 | 1 | 0 | 19 |
| CD-003 | 9 | 3 | 2 | 0 | 4 | 4 | 1 | 0 | 23 |
| CD-004 | 14 | 0 | 0 | 0 | 9 | 0 | 0 | 3 | 26 |
| CD-005 | 10 | 0 | 0 | 0 | 6 | 0 | 0 | 4 | 20 |
| CD-006 | 39* | 0 | 0 | 0 | 6+ | 0 | 0 | 5+ | 50+ |

*CD-006 claims "all 39 R-5 findings" via research-package-cd-006.md

**Observations:**
- CD-003 has the broadest research breadth (R5 + R4 + R2 + AD-F + DD-F + OD-F)
- CD-004 and CD-005 explicitly reference prior CD findings (Wave 1 informing Wave 2)
- CD-006 explicitly references all prior research as crown jewel
- R1 research is never directly cited by any CD file

---

## 4. Prior-Phase Dependencies Matrix

| CD File | DD Ref | OD Ref | AD Ref | CD Cross-Ref |
|---------|--------|--------|--------|--------------|
| CD-001 | (implicit CRESCENDO) | OD-002 narrative | AD-002 F-pattern, AD-003 bento | -- |
| CD-002 | DD-F-001 PULSE | OD-003 task-based | AD-001 Z-pattern, AD-004 spiral | -- |
| CD-003 | DD-003 islands | OD-005 spatial | AD-003 bento, AD-005 choreography | -- |
| CD-004 | (implicit TIDAL) | OD-004 confidence | AD-004 spiral, AD-005 choreography | CD-F-001, CD-F-006, CD-F-008 |
| CD-005 | (implicit WAVE) | OD-005 spatial | AD-001 Z, AD-002 F, AD-003 bento | CD-F-001, CD-F-002, CD-F-006, CD-F-010 |
| CD-006 | (all DD patterns) | (compound org) | ALL AD explorations (001-006) | (all prior findings) |

**Pattern:** Wave 1 (CD-001/002/003) references no prior CD findings. Wave 2 (CD-004/005/006) explicitly builds on Wave 1 findings.

---

## 5. Content Topics and Their Provenance

Every CD file uses **fabricated tutorial content** as the teaching vehicle. None of the content topics relate to the design system's own subject matter (except CD-006, which is meta-documentation).

| CD File | Content Topic | Topic is Generic? |
|---------|--------------|-------------------|
| CD-001 | Authentication middleware (Node.js) | YES - generic programming tutorial |
| CD-002 | CI/CD pipeline setup (GitHub Actions) | YES - generic DevOps tutorial |
| CD-003 | React file structure / architecture | YES - generic frontend tutorial |
| CD-004 | Database architecture decisions | YES - generic systems tutorial |
| CD-005 | Frontend testing (Vitest, mocking) | YES - generic testing tutorial |
| CD-006 | Building KortAI documentation pages | NO - meta-documentation (self-referential) |

**Key insight:** The content is fully original/fabricated for each file. The code examples, task checklists, decision matrices, and reasoning components all contain realistic but invented tutorial content. The content was authored for the exploration, not copied from any prior phase.

---

## 6. Provenance Summary Matrix

| Dimension | New Synthesis | Inherited | Templated/Shared |
|-----------|--------------|-----------|-----------------|
| **CSS Locked Layer** | 0% | 100% | Same tokens in all 6 files |
| **CSS Combination Layer** | ~70% original per file | ~30% shared patterns | Common patterns reused |
| **HTML Structure** | ~40% original layout | ~60% convention-driven | Header/footer/responsive templated |
| **Content (prose/code)** | ~95% new per file | 0% | ~5% boilerplate (RAR format) |
| **Findings** | 100% original | 0% | Finding format inherited |
| **Component implementations** | ~30% new variants | ~70% from OD/AD | Callout/Code/Table identical |
| **Design patterns** | ~25% new CD patterns | ~75% from DD/OD/AD | Axis patterns, density patterns |

### Per-File Synthesis Estimate

| File | New Synthesis | Inherited | Templated |
|------|--------------|-----------|-----------|
| CD-001 | 35% | 50% | 15% |
| CD-002 | 40% | 45% | 15% |
| CD-003 | 45% | 40% | 15% |
| CD-004 | 45% | 40% | 15% |
| CD-005 | 35% | 50% | 15% |
| CD-006 | 50% | 35% | 15% |

**Rationale:**
- **New synthesis** = original content, original CSS combination patterns, original findings, novel component variants
- **Inherited** = locked-layer tokens, callout/code/table implementations, axis patterns, density patterns, transition grammar
- **Templated** = header/footer structure, responsive breakpoints, RAR format, soul enforcement rules, skip link, print styles, reduced-motion styles

---

## 7. Key Provenance Observations

### 7.1 The Locked Layer is Identical
All 6 files share an identical `:root` block with the same ~35 CSS custom properties. CD-006 is the only file that diverges (`--type-page: 3rem` instead of `2.5rem`). This represents the "inherited genome" -- the design system's locked tokens.

### 7.2 Wave 1 -> Wave 2 Knowledge Transfer is Real
CD-004, CD-005, and CD-006 explicitly reference findings from CD-001/002/003. This is the only cross-CD citation pattern. The transfer is one-directional: Wave 2 consumes Wave 1 findings but Wave 1 files never reference Wave 2.

### 7.3 Each File's "Research Package" is the Primary Input
Every file references a `research-package-cd-XXX.md` as a dependency. These research packages pre-compiled the applicable R-5, R-4, AD-F, DD-F, and OD-F findings for each exploration. The research package is the primary funnel through which prior-phase knowledge enters the CD file.

### 7.4 Content is 100% Original per File
The tutorial prose, code examples, task checklists, decision matrices, and reasoning deliberations are all authored specifically for each exploration. None is copied from any prior phase file. The content serves as a vehicle for testing the combination hypothesis.

### 7.5 Component DNA is Inherited but Variants are Original
The basic callout structure (2-zone, 4px left border, 5 accents) is inherited from OD conventions. But specific implementations vary: CD-002's Task Component with checkboxes, CD-003's File Tree with monospace hierarchy, CD-004's Essence at 60% width, CD-006's Table of Contents navigation. Each file extends the inherited DNA.

### 7.6 The 25 Findings Represent Genuine Combination-Scale Discovery
No CD finding merely restates a DD, OD, or AD finding. Each CD-F-XXX finding describes a phenomenon that only manifests when density + organization + axis patterns operate together. Examples: "WAVE density is orthogonal to axis geometry" (CD-F-018), "File Tree serves as temperature buffer" (CD-F-011), "transition grammar maps to cognitive difficulty" (CD-F-025).

### 7.7 CD-006 is Qualitatively Different
CD-006 (crown jewel) differs from the other 5 in several ways:
- Uses ALL 5 axis patterns (others use 2-3)
- Uses all 7 transition types (others use 1-2)
- Uses 33 component instances (others use 10-15)
- Is self-referential (documents the system using the system)
- Has 8 sections (others have 4-6)
- Overrides a locked token (--type-page: 3rem)
- Produces 5 findings (others produce 4)

---

## 8. Conclusion

The CD explorations are approximately **40% new synthesis, 45% inherited, 15% templated**. The inherited portion consists primarily of the locked design tokens and component patterns from DD/OD/AD phases. The new synthesis consists of original content, novel combination-specific CSS patterns, and 25 findings that describe emergent phenomena at the combination scale. The templated portion is structural boilerplate (headers, footers, accessibility, print styles) shared identically across all 6 files.

The provenance chain is clean: each file declares its dependencies explicitly in the inline threading header, cites specific finding IDs from prior phases, and documents which research was applied. The Wave 1 -> Wave 2 feedback loop (CD-F-001/002/006/008/010 cited by CD-004/005/006) demonstrates genuine iterative learning within the CD phase.
