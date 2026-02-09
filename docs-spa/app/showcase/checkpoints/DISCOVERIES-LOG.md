<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/checkpoints/DISCOVERIES-LOG.md
Tier: B | Batch: 7 | Generated: 2026-02-06

1. WHY THIS EXISTS
Tracks all exploration experiments with explicit scoring, curation decisions
(INCLUDE/DOCUMENT/DISCARD), and version control. Records novel discoveries
generated during DD exploration work that extend beyond original R1-R5 research.
Currently shows all 6 density explorations scored and curated (all 6 INCLUDE
after perceptual deepening re-audit).

2. THE QUESTION THIS ANSWERS
"What explorations exist, what are their scores, and which ones are included for downstream use?"

3. STATUS
ACTIVE — Updated after every exploration completion. Currently 6/24 minimum explorations completed (density only).

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| DD exploration work (DD-001 through DD-006) | Source experiments being tracked and scored |
| checkpoints/DD-REAUDIT-CHECKPOINT.md    | Re-audit process that updated DD scores |

6. MUST HONOR
- Curation thresholds are fixed: >=32 INCLUDE, 24-31 DOCUMENT, <24 DISCARD
- Scoring rubric is 4 dimensions x 10 points = /40 total
- Score changes from re-audits must preserve original scores for audit trail

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/app/showcase/CLAUDE.md         | Mandatory reading before any exploration work (Step 1 research grounding) |
| checkpoints/DD-REAUDIT-CHECKPOINT.md    | References discovery log for curation status |

10. DIAGNOSTIC QUESTIONS
- Does the curation summary table match the individual exploration scores?
- Are both original and re-audited scores preserved for every DD that was re-audited?
- Is the "Explorations Completed" count accurate against the detailed entries?

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# DISCOVERIES-LOG — Exploration Tracking + Curation
## All Experiments, Scores, Keep/Discard Decisions

═══════════════════════════════════════════════════════════════════════════════
## VERSION CONTROL — LATEST STATE TRACKING
═══════════════════════════════════════════════════════════════════════════════

**CRITICAL:** This document tracks ALL explorations with explicit scoring.
After compaction, this tells you exactly what experiments exist and their status.

### Curation Summary

| Category | Total | Scored ≥32 (INCLUDE) | Scored 24-31 (DOCUMENT) | Scored <24 (DISCARD) |
|----------|-------|---------------------|------------------------|---------------------|
| Density (DD) | 6 | **6** | 0 | 0 |
| Organizational (OD) | 0 | 0 | 0 | 0 |
| Axis (AD) | 0 | 0 | 0 | 0 |
| Combination (CD) | 0 | 0 | 0 | 0 |
| **TOTAL** | **6** | **6** | **0** | **0** |

**Last Updated:** 2026-02-04 [DD RE-AUDIT PERCEPTUAL DEEPENING COMPLETE]
**Explorations Completed:** 6/24 minimum
**Ready for Section 7:** DENSITY COMPLETE — ALL 6 NOW INCLUDE
**Audit Status:** ALL 6 PASS SOUL COMPLIANCE via perceptual deepening audit

### DD Re-Audit — Perceptual Deepening Results (2026-02-04)

| Exploration | Original Score | New Score | Change | Soul Compliance | Decision |
|-------------|----------------|-----------|--------|-----------------|----------|
| DD-001 | 30.5 | **33** | +2.5 | 100% | **INCLUDE** (↑) |
| DD-002 | 34 | **35** | +1 | 100% | INCLUDE |
| DD-003 | 30.5 | **32** | +1.5 | 100% | **INCLUDE** (↑) |
| DD-004 | 33 | **35** | +2 | 100% | INCLUDE |
| DD-005 | 33.5 | **36** | +2.5 | 100% | INCLUDE |
| DD-006 | 34.5 | **36** | +1.5 | 100% | INCLUDE ★★ |

**Full audit:** `checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md`

**Key Findings:**
- All 5 soul pieces verified across all 6 DDs
- border-radius: 0 and box-shadow: none in all CSS
- Serif italic present in all Essence callouts
- 2-zone callout structure maintained throughout
- Average score increased from 32.7 to 34.5 (+1.8)

### Density Explorations Summary (COMPLETE — ALL INCLUDE)
| ID | Name | Score | Decision |
|----|------|-------|----------|
| DD-001 | Density Breathing | **33** | **INCLUDE** |
| DD-002 | Density Gradient | **35** | INCLUDE ★ |
| DD-003 | Density Islands | **32** | **INCLUDE** |
| DD-004 | Density Layers | **35** | INCLUDE ★ |
| DD-005 | Density Rivers | **36** | INCLUDE ★ |
| DD-006 | Fractal Density | **36** | INCLUDE ★★ (Best) |

═══════════════════════════════════════════════════════════════════════════════
## SCORING RUBRIC
═══════════════════════════════════════════════════════════════════════════════

Each exploration is scored on 4 dimensions (1-10 each):

| Dimension | Question | Weight |
|-----------|----------|--------|
| Innovation | How new/interesting is this? | 10 points |
| Utility | How useful is this for real documentation? | 10 points |
| Soul Alignment | Does it fit KortAI's editorial soul? | 10 points |
| Execution | How well does the implementation work? | 10 points |

**TOTAL: /40**

### Curation Thresholds

| Score | Decision | Action |
|-------|----------|--------|
| ≥32 | INCLUDE | Goes in Section 7 (Discoveries) |
| 24-31 | DOCUMENT | Documented but not showcased |
| <24 | DISCARD | Document why it failed, learn from it |

═══════════════════════════════════════════════════════════════════════════════
## DENSITY EXPLORATIONS (DD-001 through DD-006+)
═══════════════════════════════════════════════════════════════════════════════

### DD-001: Density Breathing
**Status:** COMPLETE ✓
**Hypothesis:** What if density followed breathing patterns (inhale = dense, exhale = sparse)?
**Expected:** Page sections that expand and contract rhythmically
**Research Basis:** R-3 Breathing Framework, PULSE pattern, Insight #30 (Density Debt)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 7.5 | Novel framing of density-as-breathing; pattern itself known but systematization is new |
| Utility | 8 | Readable, scannable, practical for 60% of doc use cases; struggles with quick-lookup |
| Soul Alignment | 7.5 | Passes Bootstrap test, editorial feel confirmed, sharp edges maintained |
| Execution | 7.5 | Avg of 7 audits (Typography 7.5, Spacing 7.5, Containers 7, Hierarchy 7.5, Composition 7.5, Color 7, Layout 8) |
| **TOTAL** | **30.5** | DOCUMENT threshold (24-31) — Close to INCLUDE, needs iteration |

**Decision:** DOCUMENT — Solid foundation, needs improvement to reach ≥32

**Key Audit Findings:**
- ✅ Sharp edges (border-radius: 0) maintained throughout
- ✅ Flat design (no shadows) maintained
- ✅ Typography hierarchy works (serif/sans/mono)
- ✅ Breathing rhythm visible (92px EXHALE / 24px INHALE)
- ⚠️ Left border widths inconsistent (some 2px, should be 4px)
- ⚠️ Traffic-light pattern detected (green Tip + red Gotcha adjacent)
- ⚠️ Middle section composition feels cramped
- ⚠️ Decision Matrix breaks breathing flow

**Improvement Suggestions:**
1. Strengthen INHALE recovery (64-80px after dense sections)
2. Standardize left borders to 4px
3. Separate green/red callouts to avoid traffic-light
4. Redesign middle section as one cohesive unit

**Files:** explorations/density/DD-001-breathing.html
**Screenshots:** screenshots/explorations/DD-001-breathing-full.png

---

### DD-002: Density Gradient
**Status:** COMPLETE ✓
**Hypothesis:** What if density transitioned smoothly from sparse→dense (CRESCENDO)?
**Expected:** Gradual build-up of information density respecting cognitive load
**Research Basis:** R-3 CRESCENDO pattern, Progressive Disclosure (Insight #7), Density Debt

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 8 | Crescendo pattern clever, systematic execution matters |
| Utility | 9 | Density gradient successfully guides reader through complexity |
| Soul Alignment | 8 | Sharp, editorial, clean; passes Bootstrap test |
| Execution | 9 | All DD-001 lessons applied, typography/spacing 8.35/10 |
| **TOTAL** | **34** | INCLUDE threshold (≥32) ✓ — Ready for Section 7 |

**Decision:** INCLUDE — Demonstrates CRESCENDO pattern effectively

**DD-001 Lessons Applied:**
- ✅ Border standardization (all 4px)
- ✅ Traffic-light avoidance (purple Challenge, not red)
- ✅ Recovery breathing (sparse resolution section)
- ✅ Dense section cohesion (file tree + code + checklist unified)

**Minor Improvements Identified:**
- Add `font-style: italic` to h3 (currently missing)
- Consider reducing density indicator repetition after section 2

**Files:** explorations/density/DD-002-gradient.html
**Screenshots:** screenshots/explorations/DD-002-gradient-full.png

---

### DD-003: Density Islands
**Status:** COMPLETE ✓
**Hypothesis:** What if dense content existed as islands in sparse space?
**Expected:** Clusters of high-density content surrounded by breathing room
**Research Basis:** R-3 Geological Model, Tidal Pool concept, Density Contrast (Insight #29)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 7.5 | Novel concept but underutilizes archipelago metaphor |
| Utility | 7 | Self-contained islands work, but inter-island relationships unclear |
| Soul Alignment | 8.5 | Strong editorial/magazine feel, passes Bootstrap test |
| Execution | 8 | Solid typography, spacing, component organization |
| **TOTAL** | **30.5** | DOCUMENT (boundary — conditional INCLUDE with refinements) |

**Decision:** DOCUMENT — Strong soul alignment but utility needs improvement

**Key Strengths:**
- ✅ Red border anchor system creates visual consistency
- ✅ Sharp, flat aesthetic — distinctly editorial
- ✅ Magazine-like floating elements
- ✅ Clear dense/sparse contrast

**Weaknesses & Improvements Needed:**
- ⚠️ Archipelago underutilized (only one 2-column pair)
- ⚠️ Sparse separators too faint for chapter breaks
- ⚠️ Callout boxes too subtle (nearly invisible)
- ⚠️ Horizontal alignment feels random vs rhythmic

**Files:** explorations/density/DD-003-islands.html
**Screenshots:** screenshots/explorations/DD-003-islands-full.png

---

### DD-004: Density Layers
**Status:** COMPLETE ✓
**Hypothesis:** What if density was stratified like geological strata (Atmosphere, Surface, Topsoil, Subsoil, Bedrock)?
**Expected:** Visual depth through background intensity, border weight, and spacing compression
**Research Basis:** R-3 Insight #5 (Geological Model), #6 (Z-Index Priority), #7 (Progressive Disclosure)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 8.5 | Geological metaphor is novel; layer depth indicator system is creative and informative |
| Utility | 8 | Clear practical application for docs; Expert vs Novice path flexibility is valuable |
| Soul Alignment | 8.5 | Sharp, flat, editorial; passes Bootstrap test; distinctly KortAI aesthetic |
| Execution | 8 | Solid implementation; audit scores 8.2/10 average across 7 zones |
| **TOTAL** | **33** | INCLUDE threshold (≥32) ✓ — Ready for Section 7 |

**Decision:** INCLUDE ★ — Demonstrates Geological Model pattern effectively

**Key Strengths:**
- ✅ Stacked layers visualization immediately communicates the metaphor
- ✅ 5-bar depth indicator system is innovative and informative
- ✅ Multiple paths (Expert skips middle, Novice gets more explanation)
- ✅ Background intensity progression creates visual depth
- ✅ Practical OAuth documentation example

**Audit Scores:**
| Zone | Score |
|------|-------|
| Typography | 8/10 |
| Spacing | 8/10 |
| Containers | 8.5/10 |
| Hierarchy | 8.5/10 |
| Composition | 8/10 |
| Color | 8.5/10 |
| Layout | 8/10 |

**Minor Improvements:**
- Add `font-style: italic` to h3 subsoil headings
- File tree could have stronger visual distinction
- Stacked layers visualization could use more padding

**Files:** explorations/density/DD-004-layers.html
**Screenshots:** screenshots/explorations/DD-004-layers-full.png

---

### DD-005: Density Rivers
**Status:** COMPLETE ✓
**Hypothesis:** What if information flowed through channels of varying width (rivers), where width is inversely proportional to density?
**Expected:** Narrow streams = high density (code), wide rivers = low density (context), with parallel, delta, and confluence patterns
**Research Basis:** R-3 Tidal Framework, Musical Framework, Insight #23 (fractal), #29 (contrast), #30 (density debt)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 8.5 | River width = inverse density is novel; parallel, delta, confluence patterns are creative |
| Utility | 8.5 | Very practical for tutorials; parallel comparisons and decision points highly useful |
| Soul Alignment | 8.5 | Sharp, flat, editorial; distinctly KortAI; river labels add systematic feel |
| Execution | 8 | Solid implementation; audit average 8.36/10 across 7 zones |
| **TOTAL** | **33.5** | INCLUDE threshold (≥32) ✓ — Ready for Section 7 |

**Decision:** INCLUDE ★ — Demonstrates River Flow pattern with parallel, delta, and confluence

**Key Strengths:**
- ✅ River visualization at top explains metaphor immediately
- ✅ Parallel rivers enable side-by-side algorithm comparison
- ✅ Confluence points (amber) for decision frameworks
- ✅ River delta (3-column) for implementation path splits
- ✅ Practical API rate limiting example

**Audit Scores:**
| Zone | Score |
|------|-------|
| Typography | 8.5/10 |
| Spacing | 8/10 |
| Containers | 8.5/10 |
| Hierarchy | 8.5/10 |
| Composition | 8/10 |
| Color | 8.5/10 |
| Layout | 8.5/10 |

**Flow Patterns Demonstrated:**
1. Wide → Narrow (progressive focusing)
2. Parallel Rivers (side-by-side comparison)
3. River Delta (1→3 split)
4. Confluence (streams merging at decisions)
5. Asymmetric Parallel (2fr/1fr theory + reference)
6. Narrowing Flow (Full → Wide → Medium → Narrow)

**Files:** explorations/density/DD-005-rivers.html
**Screenshots:** screenshots/explorations/DD-005-rivers-full.png

---

### DD-006: Fractal Density
**Status:** COMPLETE ✓
**Hypothesis:** Good density patterns are self-similar at multiple scales — the same rhythm of dense/sparse appears at page, section, component, and character levels
**Expected:** Visual demonstration of the same █░░█░░█░░ pattern at 4 scale levels, with nested example showing all scales together
**Research Basis:** R-3 Insight #23 (Self-Similar Density), Fractal Framework

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | 9 | Fractal/self-similar concept is highly novel; pattern visualization (█░░█░░█░░) is creative |
| Utility | 8.5 | Teaches a powerful design principle; nested example shows practical application |
| Soul Alignment | 8.5 | Sharp, flat, editorial; systematic scale labeling fits KortAI |
| Execution | 8.5 | Highest audit average (8.57/10); clear, well-organized |
| **TOTAL** | **34.5** | INCLUDE threshold (≥32) ✓ — HIGHEST SCORING EXPLORATION |

**Decision:** INCLUDE ★★ — Best exploration! Demonstrates Fractal Density pattern

**Key Strengths:**
- ✅ "█░░█░░█░░" pattern comparison across all 4 scales is brilliant
- ✅ Four-scale demonstration (Page → Section → Component → Character)
- ✅ "All Four Scales in One Structure" nested example is innovative
- ✅ Teaches a design principle, not just a technique
- ✅ Highest audit score (8.57/10 average)

**Audit Scores:**
| Zone | Score |
|------|-------|
| Typography | 8.5/10 |
| Spacing | 8.5/10 |
| Containers | 8.5/10 |
| Hierarchy | 9/10 |
| Composition | 8.5/10 |
| Color | 8.5/10 |
| Layout | 8.5/10 |

**Scales Demonstrated:**
1. **Page Scale** — Dense vs Sparse sections (3-column grid)
2. **Section Scale** — Dense vs Sparse paragraphs (error handling example)
3. **Component Scale** — Dense vs Sparse zones within callout
4. **Character Scale** — Dense code vs Sparse comments

**Files:** explorations/density/DD-006-fractal.html
**Screenshots:** screenshots/explorations/DD-006-fractal-full.png

═══════════════════════════════════════════════════════════════════════════════
## COMPREHENSIVE HIERARCHICAL AUDIT LEARNINGS (2026-02-09)
═══════════════════════════════════════════════════════════════════════════════

### Audit Scope and Execution

**Comprehensive Hierarchical Audit (2026-02-09):** ~58 agents across 4 pillars (visual, structural, provenance, triage) + fresh-eyes adversarial review + fix execution. 58 findings (5 Critical, 10 High, 17 Medium, 8 Low, 18 Notes) + 7 unique fresh-eyes findings. 10 Critical/High fixes applied across 18 files. Reports in `knowledge-architecture/_comprehensive-audit/`.

### Key Learning 1: rgba() Opacity Epidemic

**Discovery:** ~102 rgba() semi-transparent background instances found across 10/12 HTML pages (OD-001, OD-002, OD-003, OD-005 affected; OD-004 and OD-006 already clean).
**Impact:** Semi-transparent callout/zone backgrounds violate the ANTI-PHYSICAL identity -- opacity must be absolute (=== 1.0).
**Resolution:** All rgba() backgrounds replaced with opaque var(--color-border-subtle) equivalents. OD-004 used as reference implementation.
**Rule:** All backgrounds MUST be opaque. rgba() < 1 on backgrounds is a soul-adjacent violation of the solid offsets binary rule.

### Key Learning 2: Soul Lock Confirmation (0/~13,000 Violations)

**Discovery:** Three independent verification processes confirmed zero soul violations across ~13,000 DOM elements.
- Visual audit: ~5,000 elements checked
- Structural audit: 4,876 elements checked
- Prior granular audit: 3,479 elements checked
**Significance:** The ANTI-PHYSICAL identity (border-radius: 0, box-shadow: none, filter: none) is absolute. Not a single violation found despite 3 independent audit methodologies. This is the strongest soul compliance evidence in the pipeline.

### Key Learning 3: DD Pre-Convention Gap

**Discovery:** DD files (DD-001 through DD-006) were built before the OD Convention Spec existed, creating systematic gaps:
- VS Code default syntax highlighting colors instead of locked palette
- Missing skip-link navigation and focus-visible CSS rules
- Missing reduced-motion media query
- Code block backgrounds at #1E1E1E instead of convention #1A1A1A
**Resolution:** All 6 DD files received DD-BACKPORT treatment with CSS comments tagging each change as `/* DD-BACKPORT: ... */`. Full color mapping applied (VS Code defaults -> convention palette). Accessibility features added (skip-link, focus-visible, selection styles, reduced-motion).
**Rule:** When convention specs are created AFTER artifacts exist, backport must be explicit and tagged. DD-BACKPORT pattern is the reference model.

### Key Learning 4: Post-Re-Enrichment Metadata Drift

**Discovery:** Chain documents drifted after re-enrichment due to count updates not propagating:
- PIPELINE-MANIFEST R-2 listed "78 findings" when only 27 exist (phantom IDs R2-024-078)
- EXT-RESEARCH-REGISTRY header said 69 unique EXT-*, summary said 72, actual was 94
- organizational/CLAUDE.md had pre-re-enrichment OD scores
- ACCUMULATED-IDENTITY-v1.md missing SUPERSEDED marker pointing to v1.1
**Resolution:** All stale counts corrected. Supersession marker added. Scores updated.
**Rule:** After any enrichment/re-enrichment process that changes counts, ALL downstream chain documents must be verified for count propagation. Metadata drift is a systemic risk of multi-wave processes.

### Key Learning 5: Fresh-Eyes Methodology Value

**Discovery:** Fresh-eyes agents (no convention access, no prior audit knowledge) produced 7 unique findings INVISIBLE to convention-aware auditors:
- Excessive vertical whitespace (150-200px gaps) -- spec-aware agents verified spacing against convention values but missed the perceptual impact
- Cross-page collection coherence -- each OD felt like a different product
- Score badge inconsistency across ODs
**Rule:** Always include at least one fresh-eyes adversarial pass in comprehensive audits. Convention-awareness creates blind spots.

═══════════════════════════════════════════════════════════════════════════════
## ORGANIZATIONAL EXPLORATIONS (OD-001 through OD-006+)
═══════════════════════════════════════════════════════════════════════════════

### OD-001: Conversational Structure
**Status:** NOT STARTED
**Hypothesis:** What if organization followed Q&A dialogue patterns?
**Expected:** Documentation as conversation between reader and guide
**Research Basis:** R-1 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### OD-002: Narrative Arc
**Status:** NOT STARTED
**Hypothesis:** What if organization followed setup→conflict→resolution?
**Expected:** Story-like structure for technical content
**Research Basis:** R-1 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### OD-003: Task-Based Structure
**Status:** NOT STARTED
**Hypothesis:** What if organization followed "I want to..." patterns?
**Expected:** Goal-oriented documentation structure
**Research Basis:** R-1 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### OD-004: Confidence-Based Structure
**Status:** NOT STARTED
**Hypothesis:** What if organization flowed from certain→uncertain?
**Expected:** Information organized by reliability/confidence level
**Research Basis:** R-1 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### OD-005: Spatial/Map Structure
**Status:** NOT STARTED
**Hypothesis:** What if organization was hub-and-spoke like a map?
**Expected:** Navigate to information rather than scroll through it
**Research Basis:** R-2 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### OD-006: [CREATIVE SLOT]
**Status:** NOT STARTED
**Hypothesis:** (Your own organizational idea)
**Expected:** -
**Research Basis:** -

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

═══════════════════════════════════════════════════════════════════════════════
## AXIS EXPLORATIONS (AD-001 through AD-006+)
═══════════════════════════════════════════════════════════════════════════════

### AD-001: Z-Pattern Layout
**Status:** NOT STARTED
**Hypothesis:** Apply Z-pattern eye movement to component layout
**Expected:** Components arranged along Z reading path
**Research Basis:** R-4 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### AD-002: F-Pattern Layout
**Status:** NOT STARTED
**Hypothesis:** Apply F-pattern (scan left, across, down) to components
**Expected:** Components aligned to F-pattern reading
**Research Basis:** R-4 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### AD-003: Bento Grid
**Status:** NOT STARTED
**Hypothesis:** Varied cell sizes in grid (bento box pattern)
**Expected:** Visual interest through size variation
**Research Basis:** R-4 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### AD-004: Spiral Reveal
**Status:** NOT STARTED
**Hypothesis:** Content reveals in spiral pattern (center-out or edge-in)
**Expected:** Unique visual progression
**Research Basis:** R-4 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### AD-005: Axis Choreography
**Status:** NOT STARTED
**Hypothesis:** Deliberate H→V beats like choreographed movement
**Expected:** Rhythmic axis transitions
**Research Basis:** R-4 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### AD-006: [CREATIVE SLOT]
**Status:** NOT STARTED
**Hypothesis:** (Your own axis idea)
**Expected:** -
**Research Basis:** -

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

═══════════════════════════════════════════════════════════════════════════════
## COMBINATION EXPLORATIONS (CD-001 through CD-006+)
═══════════════════════════════════════════════════════════════════════════════

### CD-001: Reasoning Inside Code
**Status:** NOT STARTED
**Hypothesis:** What if reasoning steps appeared within code comments?
**Expected:** Code that explains its own logic inline
**Research Basis:** R-5 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### CD-002: Task Containing Decision
**Status:** NOT STARTED
**Hypothesis:** What if task items contained embedded decision points?
**Expected:** Interactive task list with branching
**Research Basis:** R-5 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### CD-003: File Tree with Contextual Callouts
**Status:** NOT STARTED
**Hypothesis:** What if file tree entries could have inline callouts?
**Expected:** Annotated file tree with contextual tips
**Research Basis:** R-5 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### CD-004: Essence as Background Context
**Status:** NOT STARTED
**Hypothesis:** What if Essence Callout served as persistent background wisdom?
**Expected:** Pull-quote that frames multiple subsequent components
**Research Basis:** R-5 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### CD-005: All Callouts as Conversation
**Status:** NOT STARTED
**Hypothesis:** What if different callout types formed a dialogue?
**Expected:** Info→Tip→Gotcha flow as conversation
**Research Basis:** R-5 findings (pending)

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

---

### CD-006: [CREATIVE SLOT]
**Status:** NOT STARTED
**Hypothesis:** (Your own combination idea)
**Expected:** -
**Research Basis:** -

| Metric | Score | Notes |
|--------|-------|-------|
| Innovation | - | - |
| Utility | - | - |
| Soul Alignment | - | - |
| Execution | - | - |
| **TOTAL** | **-** | - |

**Decision:** PENDING
**Files:** -
**Screenshots:** -

═══════════════════════════════════════════════════════════════════════════════
## LESSONS LEARNED FROM RETROACTIVE AUDIT
═══════════════════════════════════════════════════════════════════════════════

### 2026-02-04 — Retroactive Research Audit Lessons

#### Lesson 1: Traffic-Light Anti-Pattern is CRITICAL
**Discovery:** DD-001 has green Tip callout adjacent to red Gotcha callout
**Impact:** Reduces professional appearance, creates "kindergarten-level" visual language
**Rule:** ALWAYS separate green (#4A9D6B) and red (#E83025) with 48px+ whitespace OR neutral component
**Applied In:** DD-002 (used purple Challenge instead), DD-004 (used coral Gotcha)

#### Lesson 2: Research Application Rate Correlates with Score
**Discovery:** Higher research application rate → higher exploration scores
- DD-006 (88% application) → 34.5/40
- DD-001 (70% application) → 30.5/40
**Rule:** Explicitly map findings to implementation decisions BEFORE building

#### Lesson 3: EXEMPLARY Application of Single Finding is Valuable
**Discovery:** DD-004, DD-005, DD-006 each have ONE finding applied EXEMPLARY
- DD-004: R3-005 Geological Layers
- DD-005: R3-029 Density Contrast
- DD-006: R3-023 Fractal Self-Similarity
**Rule:** Better to deeply apply 1 finding than shallowly apply many

#### Lesson 4: Fractal Pattern Within Components is Often Missed
**Discovery:** R3-023 (fractal self-similarity) is partially applied in most but EXEMPLARY only in DD-006
**Gap:** Other explorations apply rhythm at section level but not within components
**Rule:** Apply dense/sparse rhythm at ALL scales: page, section, component, character

### Innovations Discovered (Worth Adding to Research)

| Innovation | Source | Description | Potential Research ID |
|------------|--------|-------------|----------------------|
| Parallel Rivers | DD-005 | Side-by-side comparison streams | R3-052 |
| River Delta | DD-005 | 1→3 splitting pattern for choices | R3-053 |
| Confluence Points | DD-005 | Decision points where streams merge | R3-054 |
| Asymmetric Parallel | DD-005 | 2fr/1fr theory + reference columns | R2-079 |
| Layer Depth Indicator | DD-004 | 5-bar visual showing current depth | R3-055 |
| Expert vs Novice Paths | DD-004 | Surface→Bedrock skip option | R3-056 |
| Scale Pattern Visual | DD-006 | █░░█░░█░░ pattern representation | Visual aid |

═══════════════════════════════════════════════════════════════════════════════
## CURATION RESULTS SUMMARY
═══════════════════════════════════════════════════════════════════════════════

### INCLUDED (Score ≥32) — Goes in Section 7

| ID | Name | Score | Category | Innovation Highlight |
|----|------|-------|----------|---------------------|
| (pending) | - | - | - | - |

### DOCUMENTED (Score 24-31) — Documented Only

| ID | Name | Score | Category | Why Not Included |
|----|------|-------|----------|------------------|
| (pending) | - | - | - | - |

### DISCARDED (Score <24) — Lessons Learned

| ID | Name | Score | Category | Why Failed |
|----|------|-------|----------|------------|
| (pending) | - | - | - | - |

═══════════════════════════════════════════════════════════════════════════════
## EXPLORATION PROTOCOL REFERENCE
═══════════════════════════════════════════════════════════════════════════════

### Per-Exploration Process

```
1. HYPOTHESIZE
   - State: "What if [something unexpected]?"
   - Expected outcome: [what you think will happen]
   - Research basis: [which R-X finding supports this]

2. BUILD
   - Create HTML/TSX file in /explorations/[category]/
   - Use REALISTIC content (not lorem ipsum)
   - Apply KortAI design tokens

3. CAPTURE + AUDIT
   - Playwright screenshot (full + sections)
   - Deploy 7 audit agents (A through G)
   - Deploy 4 evaluation agents (V-1 through V-4)
   - Document ALL findings

4. EVALUATE
   - Innovation (1-10)
   - Utility (1-10)
   - Soul Alignment (1-10)
   - Execution (1-10)
   - TOTAL: /40

5. ITERATE
   - If quality <8, iterate
   - Address issues, re-build, re-audit

6. DOCUMENT
   - Update this file
   - Include: Hypothesis, screenshots, findings, score, decision

7. CHECKPOINT
   - Update MASTER-STATE.md
```

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Purpose:** Track all explorations with scores and keep/discard decisions
**Update Frequency:**
- After each exploration: Add findings and score
- After scoring all: Create curation summary
**Critical:** This is the source of truth for "what experiments worked and which didn't"
