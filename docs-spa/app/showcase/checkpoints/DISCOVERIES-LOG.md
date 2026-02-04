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
| Density (DD) | 3 | 1 | 2 | 0 |
| Organizational (OD) | 0 | 0 | 0 | 0 |
| Axis (AD) | 0 | 0 | 0 | 0 |
| Combination (CD) | 0 | 0 | 0 | 0 |
| **TOTAL** | **3** | **1** | **2** | **0** |

**Last Updated:** 2026-02-04 [DD-003 COMPLETE — Score 30.5/40]
**Explorations Completed:** 3/24 minimum
**Ready for Section 7:** PARTIAL (1 INCLUDE: DD-002, 2 DOCUMENT: DD-001, DD-003)

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
**Status:** NOT STARTED
**Hypothesis:** What if density existed on foreground/background layers?
**Expected:** Visual depth through density differentiation
**Research Basis:** R-3 findings (pending)

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

### DD-005: Density Rivers
**Status:** NOT STARTED
**Hypothesis:** What if density flowed through channels of varying width?
**Expected:** Information "rivers" with varying density flow
**Research Basis:** R-3 findings (pending)

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

### DD-006: [CREATIVE SLOT]
**Status:** NOT STARTED
**Hypothesis:** (Your own density idea)
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
