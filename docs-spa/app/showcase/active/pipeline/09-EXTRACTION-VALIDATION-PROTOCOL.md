<!--
INLINE THREADING HEADER
Parent Phase: POST-CD-PIPELINE
Synthesis Document: Not applicable (creation document)
Creation Date: 2026-02-13
Last Modified: 2026-02-13
-->

# Extraction Validation Protocol
## Phase D: Testing Component Library Sufficiency Before Migration

**Document ID**: POST-CD-09
**Status**: Draft Specification
**Date**: 2026-02-13
**Dependencies**: 02-POST-CD-PHASES.md, 03-MIGRATION-PIPELINE.md, 08-COMPOSITIONAL-STRATEGY-LIBRARY.md
**Cross-References**: Component-Taxonomy Research, Pipeline-Evolution Research

---

## PURPOSE

Phase D exists to answer ONE critical question before migration begins:

> **Is the extracted component library sufficient to build production-quality pages?**

This phase catches gaps, missing components, and insufficient patterns BEFORE they become systemic problems during the 80-160 hour full migration effort.

---

## WHY THIS PHASE EXISTS

### The Original Assumption

The pipeline originally assumed extraction would produce a "printing press" of layout templates ready to apply.

### The Reality

Extraction produces **~400 lines of CSS vocabulary**:
- **Tier 1**: ~80 lines (tokens, locked)
- **Tier 2**: ~175 lines (9 components, 92-98% stable)
- **Tier 2.5**: ~145 lines (5 patterns with usage guidance)
- **Tier 3**: Prose documentation only (6 pattern recipes, not CSS)

**Coverage**: 60-70% of any page. The remaining 30-40% (Tier 3) must be composed fresh per metaphor.

### The Risk

If the extracted library is **insufficient** (missing components, incomplete patterns, broken bridges between Tier 2 and Tier 3), migration agents will:
1. Hit gaps mid-build → require extraction rework → timeline impact
2. Create ad-hoc components outside the library → component drift
3. Fail perceptual audits → quality regression
4. Produce layouts requiring extensive manual fixes → defeats automation

### The Solution

**Phase D Validation Pass**: Build 2 test pages BEFORE writing the migration playbook. Test pages prove:
- Track 1 pages work with library alone (assembly test)
- Track 2 pages work with library + pipeline (composition test)
- CSS custom properties bridge correctly between Tier 2 and Tier 3
- Guardrails are enforceable
- No critical component gaps exist

---

## VALIDATION TEST SUITE

### Test 1: Track 1 Assembly Validation

**Objective**: Verify that library components alone are sufficient for mechanical assembly pages.

#### Test Page Selection
Select **1 representative Track 1 content piece**:
- Tutorial or getting-started guide
- Sequential step-by-step structure
- Contains: headings, paragraphs, code blocks, callouts, tables
- **Example candidates**:
  - "Setting Up Your First TypeScript Project"
  - "Understanding React Hooks Basics"
  - "Quick Start Guide: Database Configuration"

#### Build Process
1. **Load Tier 1 + Tier 2 CSS only**:
   ```html
   <link rel="stylesheet" href="extraction-output/tier-1-tokens.css">
   <link rel="stylesheet" href="extraction-output/tier-2-callouts.css">
   <link rel="stylesheet" href="extraction-output/tier-2-code-block.css">
   <link rel="stylesheet" href="extraction-output/tier-2-header.css">
   <link rel="stylesheet" href="extraction-output/tier-2-table.css">
   <link rel="stylesheet" href="extraction-output/tier-2-footer.css">
   <link rel="stylesheet" href="extraction-output/tier-2-container.css">
   ```

2. **Apply mechanical assembly** using library components:
   - Page header with metadata
   - `.page-container` wrapper
   - Standard heading hierarchy (H1 → H2 → H3)
   - `.callout--note` / `.callout--tip` for featured content
   - `<pre><code>` blocks for examples
   - Tables for reference data
   - NO custom Tier 3 CSS allowed

3. **Apply pattern from lookup table**:
   - Content type: Tutorial → CRESCENDO density pattern → F-Pattern axis
   - Implement via library components (no metaphor wrappers)

4. **Run perceptual audit** (Tier 1 + Tier 2):
   - PA-01 through PA-05 (Tier 1 mandatory)
   - PA-06 through PA-28 (Tier 2 standard)
   - Test at 1440px AND 768px

#### Success Criteria

| Criterion | Target | Pass Threshold |
|-----------|--------|----------------|
| **Page buildable with library alone** | YES (no custom CSS needed) | YES |
| **All components render correctly** | 9/9 component types functional | 8/9 minimum |
| **Soul compliance** | 0 violations (border-radius, box-shadow) | 0 violations |
| **940px min container** | Container ≥ 940px at 1440px viewport | PASS |
| **32px padding floor** | Content padding ≥ 32px per side | PASS |
| **1.5 line-height** | Body text line-height ≥ 1.5 | PASS |
| **48px section breathing** | Section margin-bottom ≥ 48px | PASS |
| **Perceptual audit PA-01 to PA-28** | ALL PASS | 26/28 minimum |
| **Visual quality** | Would ship as-is | Would ship OR needs minor polish |

#### Expected Gaps (Acceptable for Track 1)

- **No density variation**: Content zones have uniform spacing (acceptable — Track 1 doesn't need CRESCENDO rhythm)
- **No metaphor-specific layout**: Lacks spatial composition (acceptable — Track 1 is mechanical)
- **Uniform backgrounds**: All zones use same background (acceptable — no zone storytelling needed)

#### Failure Modes (Require Action)

| Gap Type | Example | Action Required |
|----------|---------|-----------------|
| **Missing Tier 2 component** | No blockquote component, only callouts | Add `.quote-block` to Tier 2 library |
| **Insufficient Tier 2.5 pattern** | No CRESCENDO density guidance | Add density pattern to Tier 2.5 |
| **CSS custom property gap** | Properties don't cascade correctly | Fix Tier 2 component interface |
| **Guardrail violation** | Container too narrow at 1440px | Bake 940px min-width into `.page-container` |
| **Soul violation** | Border-radius appears on some component | Fix Tier 1 global reset |

---

### Test 2: Track 2 Composition Validation

**Objective**: Verify that library + pipeline integration produces production-quality composed layouts.

#### Test Page Selection
Select **1 representative Track 2 content piece**:
- Conceptual overview or deep-dive explanation
- Multi-axis tension (4+ tension dimensions)
- Requires spatial metaphor
- **Example candidates**:
  - "How Type Systems Work: A Mental Model"
  - "Understanding Event Loop Architecture"
  - "The Philosophy of Immutable Data Structures"

#### Build Process
1. **Load Tier 1 + Tier 2 CSS** (same as Test 1)

2. **Invoke tension-composition pipeline** (Phase 0-5):
   - Phase 0: Content assessment
   - Phase 1: Multi-axis questioning (4-14 axes)
   - Phase 2: Tension derivation + Addition Test + BECAUSE test
   - **Gate**: Genuine tension? Richness score ≥ 8? → Proceed to Track 2
   - Phase 3: Metaphor collapse (3-5 candidates, structural isomorphism ≥ 4)
   - Phase 4: Compositional layout generation
     - Extract physical properties (5 categories)
     - Translation grammar (property → CSS via 6 channels)
     - Coherence check (5 rules)
     - **Guardrail enforcement** (Phase 4.0)
     - Perceptual cost assessment (Phase 3.5F)
   - Phase 5: Output (HTML + Tier 3 CSS)

3. **Build page** using library + pipeline output:
   - Load Tier 1 + Tier 2 from library
   - Apply pipeline-generated Tier 3 CSS (zone wrappers, spatial metaphor)
   - Tier 2 components consumed via class references
   - CSS custom properties set for context adaptation

4. **Run perceptual audit** (Tier 1 + Tier 2 + Tier 3):
   - PA-01 through PA-05 (Tier 1)
   - PA-06 through PA-28 (Tier 2)
   - **PA-29 through PA-48** (Tier 3, including metaphor-awareness)
     - PA-42: Does composition feel IMPLICIT or EXPLICIT? (IMPLICIT preferred)
     - PA-43: Do transitions change STATE or fill SPACE? (STATE preferred)
     - PA-44: Is metaphor vocabulary structural or textual? (STRUCTURAL preferred)
   - Test at 1440px AND 768px

#### Success Criteria

| Criterion | Target | Pass Threshold |
|-----------|--------|----------------|
| **Library CSS integrates with pipeline** | YES (no component re-implementation) | YES |
| **Tier 2 components work in Tier 3 zones** | All callouts/code/tables render correctly | YES |
| **CSS custom properties bridge correctly** | Context overrides apply (padding, bg, margins) | YES |
| **Metaphor structural isomorphism** | ≥ 4 mappings between content and metaphor | ≥ 4 |
| **Perceptual risk assessment** | ≤ 2 risks flagged | ≤ 2 |
| **All 8 guardrails met** | See guardrail table below | 8/8 |
| **Soul compliance** | 0 violations | 0 violations |
| **Perceptual audit PA-01 to PA-48** | ALL PASS | 45/48 minimum |
| **Metaphor quality** | IMPLICIT > EXPLICIT | IMPLICIT or borderline |
| **Layout quality verdict** | Would ship | Would ship |

#### The 8 Guardrails (Enforced by Pipeline Phase 4.0)

| Guardrail | Value | Measurement Method |
|-----------|-------|-------------------|
| **G1: Content-to-viewport ratio** | ≥ 65% (940px container at 1440px) | Container max-width ≥ 940px |
| **G2: Horizontal padding floor** | ≥ 32px per side | Content padding-left/right ≥ 32px |
| **G3: Label-to-heading gap** | ≥ 16px | Margin between label and heading ≥ 16px |
| **G4: Compression ratio ceiling** | Deepest zone ≥ 40% of shallowest | Measure padding: min/max ≥ 0.40 |
| **G5: Characters per line** | 45-80 characters | Max-width on text containers ~65ch |
| **G6: Body line-height** | ≥ 1.5 | Body text line-height ≥ 1.5 |
| **G7: Section breathing** | ≥ 48px between sections | Section margin-bottom ≥ 48px |
| **G8: Border-radius always zero** | 0 (soul piece #1) | All elements border-radius: 0 |

**Note**: Guardrails G1-G7 are **quantitative and measurable**. Guardrail G8 is **binary and absolute**.

#### Expected Integration Points

Document these for playbook refinement:

1. **How Tier 2 callouts adapt to zone contexts**:
   ```css
   /* Example: Callout in compressed stratum */
   .stratum--compressed .callout {
     --callout-padding: 16px 24px;     /* Tighter than default 20px 24px */
     --callout-bg: transparent;        /* Let zone background show */
     --callout-margin: 20px 0;         /* Less breathing than default 24px */
   }
   ```

2. **How Tier 3 wrappers use Tier 1 spacing tokens**:
   ```css
   /* Zone wrapper uses Tier 1 --space-* tokens */
   .stratum {
     padding: var(--space-10);  /* 40px */
   }
   .stratum--compressed {
     padding: var(--space-8);   /* 32px */
   }
   ```

3. **Where pipeline-generated CSS starts/stops**:
   - **Pipeline generates**: Zone wrappers (`.stratum`, `.chamber`), spatial metaphor containers (`.core-sample`), metaphor indicators (`.depth-marker`), CSS property overrides
   - **Library provides**: All Tier 2 components (callouts, code, tables, headers, footers)

#### Failure Modes (Require Action)

| Gap Type | Example | Action Required |
|----------|---------|-----------------|
| **Component library insufficient** | Pipeline tries to generate callouts from scratch | Add missing component to Tier 2 |
| **Custom property interface broken** | Zone overrides don't cascade to components | Fix Tier 2 component CSS variables |
| **Guardrail unenforceable** | 40% compression ratio violated despite pipeline checks | Add compression measurement to Phase 4.0 |
| **Pipeline generates non-library CSS** | New `.special-callout` instead of using `.callout--note` | Update pipeline to consume library |
| **Metaphor quality: EXPLICIT** | Metaphor feels forced, textual labels heavy | Refine Phase 3 metaphor selection (perceptual cost) |

---

### Test 3: Metrics-Based Sufficiency Assessment

**Objective**: Quantitative proof that the library is ready for full migration.

#### Coverage Metrics

| Metric | Target | Measurement Method | Pass Threshold |
|--------|--------|-------------------|----------------|
| **Tier 1+2 CSS coverage** | 60-70% of typical page | (Tier 1+2 lines) / (total CSS lines) × 100 | ≥ 55% |
| **Tier 2 component reuse** | 9/9 components used across test pages | Count distinct Tier 2 classes in HTML | ≥ 7/9 |
| **Soul violations** | 0 across all test pages | Programmatic audit (border-radius, box-shadow) | 0 violations |
| **Custom Tier 3 CSS** | 200-350 lines per Track 2 page | Count lines in `<style>` block or tier-3.css | 150-400 lines |
| **Track 1 buildable with library alone** | YES | Test 1 completion without custom CSS | YES |
| **Track 2 buildable with library + pipeline** | YES | Test 2 completion, pipeline integration works | YES |
| **Metaphor fidelity** | Pattern recognizable from prose description | Human evaluation vs Tier 3 pattern docs | 4/5 rating |

**Overall Pass Threshold**: 5/7 metrics meet target + 0 soul violations mandatory.

#### Quality Metrics

| Metric | Target | Pass Threshold |
|--------|--------|----------------|
| **Perceptual audit pass rate (Track 1)** | PA-01 to PA-28 ALL PASS | ≥ 26/28 |
| **Perceptual audit pass rate (Track 2)** | PA-01 to PA-48 ALL PASS | ≥ 45/48 |
| **Guardrail compliance (Track 2)** | 8/8 guardrails enforced | 8/8 |
| **Would-ship verdict (both pages)** | 2/2 pages shippable | 2/2 |

---

## EXTRACTION OUTPUT DIRECTORY STRUCTURE

### What Phase C Extraction Produces

```
extraction-output/
  tier-1-tokens.css                    (~80 lines)
  tier-2-callouts.css                  (~50 lines)
  tier-2-code-block.css                (~40 lines)
  tier-2-header.css                    (~30 lines)
  tier-2-table.css                     (~20 lines)
  tier-2-footer.css                    (~20 lines)
  tier-2-container.css                 (~15 lines)
  tier-2-inline-code.css               (~10 lines)
  tier-2-skip-link.css                 (~15 lines)
  tier-2-selection.css                 (~5 lines)
  tier-2-focus-visible.css             (~5 lines)
  tier-2.5-solid-offset.css            (~15 lines CSS)
  tier-2.5-solid-offset.md             (~80 lines guidance)
  tier-2.5-scroll-witness.css          (~35 lines CSS)
  tier-2.5-scroll-witness.md           (~70 lines guidance)
  tier-2.5-drop-cap.css                (~10 lines CSS)
  tier-2.5-drop-cap.md                 (~60 lines guidance)
  tier-2.5-confidence.css              (~20 lines CSS)
  tier-2.5-confidence.md               (~120 lines guidance)
  tier-2.5-bento-grid.css              (~25 lines CSS)
  tier-2.5-bento-grid.md               (~110 lines guidance)
  tier-3-patterns/
    geological-stratification.md       (~150 lines)
    narrative-crescendo.md             (~150 lines)
    hub-spoke-spatial.md               (~150 lines)
    bento-task-islands.md              (~150 lines)
    editorial-synthesis.md             (~150 lines)
    compound-sequential.md             (~150 lines)
```

**Total Extractable**: ~400 lines CSS + ~1,340 lines documentation

---

## GUARDRAIL ENFORCEMENT STRATEGY

### Two-Layer Approach

**Layer 1: CSS-Bakeable Guardrails** (baked into library as defaults)

These are enforced BY DEFAULT in the library CSS. Agents don't have to measure — they're already correct.

```css
/* tier-2-container.css */
.page-container {
  max-width: 1100px;
  min-width: 940px;        /* G1: 65% content-to-viewport at 1440px */
  margin: 0 auto;
  padding: 0 32px;         /* G2: 32px horizontal padding floor */
}

/* tier-1-tokens.css */
body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.5;        /* G6: body line-height floor */
}

/* tier-2-header.css */
.header-meta {
  margin-bottom: 16px;     /* G3: label-to-heading gap floor */
}

section {
  margin-bottom: 48px;     /* G7: section breathing floor */
}

/* tier-1-tokens.css (global reset) */
* {
  border-radius: 0;        /* G8: soul piece #1 */
  box-shadow: none;        /* Soul piece #2 */
}

/* Text containers */
.text-block,
.callout__body,
article > p {
  max-width: 65ch;         /* G5: 45-80 characters per line */
}
```

**Layer 2: Measurement-Based Guardrails** (require skill invocation)

These CANNOT be baked into CSS. They require runtime measurement or multi-element comparison.

- **G4: 40% compression ratio** — Requires measuring deepest vs shallowest zone padding, computing ratio
- **PA-42 to PA-48**: Metaphor-awareness questions — Require perceptual-auditing skill invocation

**Enforcement Points**:
1. **Phase 4 Build** (tension-composition skill Phase 4.0): Pipeline enforces G4 before output
2. **Phase 5 Audit** (perceptual-auditing skill): Verifies all 8 guardrails + metaphor quality

---

## VALIDATION CHECKLIST TEMPLATE

Copy-paste this for Phase D execution:

```markdown
## Phase D Validation Checklist

### Test 1: Track 1 Assembly Page

#### Page Selection
- [ ] Content selected: _______________________
- [ ] Content type verified: Tutorial / Getting-Started / Reference
- [ ] Components present: Headings, paragraphs, code, callouts, tables

#### Build Execution
- [ ] Library CSS loaded: tier-1-tokens.css
- [ ] Library CSS loaded: tier-2-callouts.css, tier-2-code-block.css, tier-2-header.css, tier-2-table.css, tier-2-footer.css, tier-2-container.css
- [ ] NO Tier 2.5 CSS loaded (testing base library only)
- [ ] NO custom Tier 3 CSS added
- [ ] Page built via mechanical assembly (no metaphor wrappers)
- [ ] Pattern applied: Tutorial → CRESCENDO → F-Pattern

#### Guardrail Verification (Layer 1 only for Track 1)
- [ ] G1: Container ≥ 940px at 1440px — PASS / FAIL
- [ ] G2: Padding ≥ 32px per side — PASS / FAIL
- [ ] G6: Line-height ≥ 1.5 — PASS / FAIL
- [ ] G7: Section breathing ≥ 48px — PASS / FAIL
- [ ] G8: Border-radius = 0 — PASS / FAIL
- [ ] Soul compliance (box-shadow: none) — PASS / FAIL

#### Perceptual Audit (PA-01 to PA-28)
- [ ] Audit invoked at 1440px
- [ ] Audit invoked at 768px
- [ ] PA-01 to PA-05 (Tier 1 mandatory) — __/5 PASS
- [ ] PA-06 to PA-28 (Tier 2 standard) — __/23 PASS
- [ ] **Total**: __/28 (need ≥26 for PASS)

#### Quality Verdict
- [ ] Would ship as-is: YES / NO / Needs minor polish
- [ ] Gaps documented (see below)

#### Gap Documentation
**Missing Tier 2 components**: _______________________
**Insufficient Tier 2.5 patterns**: _______________________
**CSS custom property gaps**: _______________________
**Guardrail enforcement gaps**: _______________________

---

### Test 2: Track 2 Composition Page

#### Page Selection
- [ ] Content selected: _______________________
- [ ] Content type verified: Conceptual / Deep-dive / Architecture
- [ ] Multi-axis tension confirmed: __ axes (need ≥4)

#### Pipeline Invocation
- [ ] Phase 0: Content assessment complete
- [ ] Phase 1: Multi-axis questioning — __ axes identified
- [ ] Phase 2: Tension derivation complete
  - [ ] Addition Test: YES (genuine tension) / NO
  - [ ] BECAUSE Test: PASS (content-driven) / FAIL
  - [ ] Richness score: __ (need ≥8)
- [ ] **Tension Gate**: PASS (proceed to Track 2) / FAIL (back to Track 1)
- [ ] Phase 3: Metaphor collapse complete
  - [ ] Candidates generated: __ (need 3-5)
  - [ ] Top metaphor structural isomorphism: __ (need ≥4)
  - [ ] Perceptual risk assessment: __ (need ≤2)
- [ ] Phase 4: Compositional layout generated
  - [ ] Physical properties extracted (5 categories)
  - [ ] Translation grammar applied (6 CSS channels)
  - [ ] Coherence check PASS (5 rules)
  - [ ] Guardrail enforcement (Phase 4.0) — see below
  - [ ] Perceptual cost assessment (Phase 3.5F) complete
- [ ] Phase 5: Output generated (HTML + Tier 3 CSS)

#### Build Execution
- [ ] Library CSS loaded (Tier 1 + Tier 2)
- [ ] Pipeline Tier 3 CSS applied (zone wrappers, metaphor)
- [ ] Tier 2 components consumed via class references (not re-implemented)
- [ ] CSS custom properties set for context adaptation

#### Guardrail Verification (All 8)
- [ ] G1: Content-to-viewport ≥ 65% (940px) — PASS / FAIL
- [ ] G2: Horizontal padding ≥ 32px — PASS / FAIL
- [ ] G3: Label-to-heading gap ≥ 16px — PASS / FAIL
- [ ] G4: Compression ratio ≥ 40% — __ ratio, PASS / FAIL
- [ ] G5: Characters per line 45-80 — PASS / FAIL
- [ ] G6: Line-height ≥ 1.5 — PASS / FAIL
- [ ] G7: Section breathing ≥ 48px — PASS / FAIL
- [ ] G8: Border-radius = 0 — PASS / FAIL
- [ ] **Total**: __/8 (need 8/8 for PASS)

#### Perceptual Audit (PA-01 to PA-48)
- [ ] Audit invoked at 1440px
- [ ] Audit invoked at 768px
- [ ] PA-01 to PA-05 (Tier 1) — __/5 PASS
- [ ] PA-06 to PA-28 (Tier 2) — __/23 PASS
- [ ] PA-29 to PA-48 (Tier 3, metaphor-awareness) — __/20 PASS
  - [ ] PA-42: Composition IMPLICIT / EXPLICIT (IMPLICIT preferred)
  - [ ] PA-43: Transitions change STATE / fill SPACE (STATE preferred)
  - [ ] PA-44: Metaphor vocabulary STRUCTURAL / TEXTUAL (STRUCTURAL preferred)
- [ ] **Total**: __/48 (need ≥45 for PASS)

#### Integration Verification
- [ ] Tier 2 callouts render correctly in Tier 3 zones — YES / NO
- [ ] CSS custom properties cascade correctly — YES / NO
- [ ] Tier 3 wrappers use Tier 1 spacing tokens — YES / NO
- [ ] Pipeline consumed library (didn't regenerate components) — YES / NO

#### Quality Verdict
- [ ] Would ship: YES / NO / Needs work
- [ ] Metaphor quality: IMPLICIT / Borderline / EXPLICIT
- [ ] Top 3 potential: YES / NO / Maybe
- [ ] Integration gaps documented (see below)

#### Integration Gap Documentation
**Component library gaps**: _______________________
**Custom property interface issues**: _______________________
**Pipeline-library integration issues**: _______________________
**Guardrail enforcement gaps**: _______________________
**Metaphor quality issues**: _______________________

---

### Test 3: Metrics Assessment

#### Coverage Metrics
- [ ] Tier 1+2 CSS coverage: __% (need ≥55%)
- [ ] Tier 2 component reuse: __/9 (need ≥7/9)
- [ ] Soul violations: __ (need 0)
- [ ] Custom Tier 3 CSS (Track 2 page): __ lines (expect 150-400)
- [ ] Track 1 buildable with library alone: YES / NO
- [ ] Track 2 buildable with library + pipeline: YES / NO
- [ ] Metaphor fidelity: __/5 rating (need ≥4)
- [ ] **Overall**: __/7 metrics pass (need ≥5)

#### Quality Metrics
- [ ] Track 1 perceptual audit: __/28 (need ≥26)
- [ ] Track 2 perceptual audit: __/48 (need ≥45)
- [ ] Track 2 guardrail compliance: __/8 (need 8/8)
- [ ] Would-ship verdict: __/2 pages (need 2/2)

---

### Phase D Final Verdict

- [ ] **PASS**: Library is sufficient, proceed to Phase E (Playbook)
- [ ] **CONDITIONAL PASS**: Minor gaps documented, addressable during pilot
- [ ] **FAIL**: Critical gaps require extraction rework

#### If FAIL, Required Actions:
1. _______________________
2. _______________________
3. _______________________

#### Next Steps:
- [ ] Document validation results in `_validation-results/`
- [ ] Update extraction output if gaps found
- [ ] Proceed to Phase E: Migration Playbook v2
```

---

## WHAT HAPPENS IF VALIDATION FAILS

### Gap Type 1: Missing Tier 2 Component

**Example**: No blockquote component, only callouts with labels.

**Action**:
1. Add `.quote-block` to extraction output as `tier-2-quote.css`
2. Extract from exploration files that contain blockquotes (OD-006, AD-006)
3. Re-run Test 1 with expanded library

**Timeline Impact**: +1-2 hours for extraction, +30 min re-test

---

### Gap Type 2: Insufficient Tier 2.5 Pattern

**Example**: CRESCENDO density pattern exists as prose but lacks CSS implementation.

**Action**:
1. Create `tier-2.5-crescendo.css` with zone density classes
2. Create `tier-2.5-crescendo.md` with usage guidance (~100 lines)
3. Re-run Test 1 with expanded Tier 2.5

**Timeline Impact**: +2-3 hours for pattern CSS + guidance, +30 min re-test

---

### Gap Type 3: Custom Property Bridge Broken

**Example**: Tier 3 zone overrides don't cascade to Tier 2 callouts.

**Action**:
1. Review Tier 2 component CSS — ensure all context-dependent properties use `var(--name, default)`
2. Example fix:
   ```css
   /* BEFORE (broken) */
   .callout { padding: 20px 24px; }

   /* AFTER (fixed) */
   .callout { padding: var(--callout-padding, 20px 24px); }
   ```
3. Update all Tier 2 components with exposed properties
4. Re-run Test 2

**Timeline Impact**: +1-2 hours for CSS refactor, +45 min re-test

---

### Gap Type 4: Guardrail Unenforceable

**Example**: 40% compression ratio violated despite pipeline Phase 4.0 checks.

**Action**:
1. Add compression measurement to tension-composition skill Phase 4.0:
   ```
   Measure all zone padding values.
   Compute ratio: min-padding / max-padding.
   If ratio < 0.40, increase min-padding OR decrease max-padding.
   ```
2. Update Phase 4.0 guardrail enforcement in SKILL.md
3. Re-run Test 2

**Timeline Impact**: +1 hour for skill update, +45 min re-test

---

### Gap Type 5: Pipeline Generates Non-Library CSS

**Example**: Pipeline creates `.special-callout` from scratch instead of using `.callout--note`.

**Action**:
1. Update tension-composition skill Phase 4.2 Translation Grammar:
   - Add explicit rule: "ALWAYS reference Tier 2 library components. NEVER generate callout/code/table CSS from scratch."
   - Add component reference table mapping semantic needs to library classes
2. Re-run Test 2

**Timeline Impact**: +1 hour for skill update, +45 min re-test

---

## GUARDRAIL BAKING: BEST PRACTICES

### What to Bake Into Library CSS

**Rule**: If a guardrail can be expressed as a CSS default value WITHOUT requiring runtime measurement, bake it in.

**Examples**:
- `min-width: 940px` on container — BAKE
- `padding: 32px` minimum — BAKE
- `line-height: 1.5` on body — BAKE
- `border-radius: 0` globally — BAKE
- `margin-bottom: 48px` on sections — BAKE

**Benefits**:
1. Agents don't have to remember to enforce — it's automatic
2. Reduces perceptual audit surface (fewer things to measure)
3. Prevents accidental violations during composition
4. Makes library "pit of success" — correct by default

### What NOT to Bake (Requires Measurement)

**Rule**: If a guardrail requires comparing multiple elements or runtime DOM inspection, leave it to skill invocation.

**Examples**:
- 40% compression ratio — MEASURE (requires min/max comparison across zones)
- Characters per line — MEASURE (depends on font-size, container width, viewport)
- Label-to-heading gap in composed metaphors — MEASURE (depends on metaphor-specific wrapper spacing)

**Why**:
- CSS can't compute `min(all-zone-paddings) / max(all-zone-paddings)`
- These require perceptual-auditing skill's programmatic checks

---

## VALIDATION TIMELINE

**Total Phase D Duration**: 1-2 hours (estimated)

| Task | Duration | Owner |
|------|----------|-------|
| **Test 1 Setup** (select content, load library) | 10 min | Builder agent |
| **Test 1 Build** (mechanical assembly) | 20 min | Builder agent |
| **Test 1 Audit** (PA-01 to PA-28, 2 viewports) | 15 min | Auditor agent |
| **Test 1 Documentation** (checklist, gaps) | 10 min | Scribe agent |
| **Test 2 Setup** (select content) | 5 min | Builder agent |
| **Test 2 Pipeline Invocation** (Phases 0-5) | 30 min | Tension-composition skill |
| **Test 2 Build** (integrate library + pipeline) | 15 min | Builder agent |
| **Test 2 Audit** (PA-01 to PA-48, 2 viewports) | 20 min | Auditor agent |
| **Test 2 Documentation** (checklist, gaps, integration) | 15 min | Scribe agent |
| **Test 3 Metrics** (coverage, quality) | 10 min | Metrics agent |
| **Final Verdict** (PASS/FAIL, required actions) | 5 min | Lead agent |

**If FAIL (gap remediation)**: Add 1-3 hours per gap type (see "What Happens If Validation Fails" section)

---

## SUCCESS INDICATORS

Phase D is **COMPLETE** when:

1. **Test 1 (Track 1)**: Page built with library alone, 26/28 perceptual audit PASS, would-ship verdict
2. **Test 2 (Track 2)**: Page built with library + pipeline, 45/48 perceptual audit PASS, 8/8 guardrails, would-ship verdict
3. **Test 3 (Metrics)**: 5/7 metrics pass, 0 soul violations
4. **Gap documentation**: All gaps documented with remediation plan OR accepted as acceptable
5. **Validation report written**: `_validation-results/phase-d-validation.md` (includes checklists, screenshots, gap analysis)

**Deliverable to Phase E**:
- Validated component library (extraction-output/)
- 2 test pages (HTML files)
- Validation report (proof of sufficiency)
- Gap remediation plan (if CONDITIONAL PASS)

---

## OPEN QUESTIONS

### Q1: Should the component library bake in CSS-enforceable guardrails as defaults?

**Proposal**: YES. Bake G1 (940px min), G2 (32px padding), G6 (1.5 line-height), G7 (48px section breathing), G8 (border-radius: 0) into library CSS.

**Benefit**: Reduces agent cognitive load. Makes library "pit of success."

**Risk**: Less flexibility for edge cases. (Counterpoint: Edge cases can override via custom properties.)

**Decision needed before Phase C Extraction.**

---

### Q2: How many validation test pages are sufficient?

**Current spec**: 2 pages minimum (1 Track 1, 1 Track 2).

**Alternative**: 3-4 pages (2 Track 1 with different patterns, 2 Track 2 with different metaphors) catches more edge cases.

**Trade-off**: More coverage vs longer Phase D timeline (2 pages = 1-2h, 4 pages = 2-3h).

**Recommendation**: Start with 2 pages. If gaps found, add 1-2 more test pages.

---

### Q3: Should validation include a 768px responsive test?

**Current spec**: YES. Perceptual audit at both 1440px AND 768px.

**Rationale**: Responsive breakpoints are a known pain point (CD-005 bento grid overflow, Playbook dead zones at 768px). Catching these early prevents systemic migration issues.

**Cost**: +5 min per test page (minimal).

**Decision**: KEEP 768px testing.

---

### Q4: Who does the validation — the same agent who extracted, or a fresh-eyes validator?

**Option A**: Extraction agent also validates (continuity, context).

**Option B**: Fresh-eyes agent validates (catches extraction bias).

**Hybrid approach**: Builder = extraction context agent. Auditor = fresh-eyes agent.

**Recommendation**: Use hybrid. Builder knows library intimately (fast build). Auditor has no extraction bias (catches gaps).

---

### Q5: What's the re-test threshold if gaps are found?

**Current spec**: Fix gap → re-run FULL test (Test 1 or Test 2).

**Alternative**: Fix gap → re-run ONLY affected subsections (e.g., if callout CSS broken, re-test callouts only).

**Trade-off**: Full re-test = safer but slower. Targeted re-test = faster but might miss cascading issues.

**Recommendation**: Full re-test for Tier 1/2 CSS changes (affects everything). Targeted re-test for Tier 2.5 or Tier 3 guidance changes (localized impact).

---

## CROSS-REFERENCES

### Prerequisites (Must Complete Before Phase D)
- **Phase B**: Content Analysis + Track Classification (know which content is Track 1 vs Track 2)
- **Phase C**: Component + Pattern Base Extraction (library exists)

### Outputs Used By
- **Phase E**: Migration Playbook v2 (uses validation results to refine Track 1/2 execution paths)
- **Phase F**: Pilot Migration (uses validated library)

### Related Documents
- **02-POST-CD-PHASES.md**: Phase D definition in macro pipeline
- **03-MIGRATION-PIPELINE.md**: Per-page execution flow (Phase 4 Build, Phase 5 Audit)
- **08-COMPOSITIONAL-STRATEGY-LIBRARY.md**: Tier 3 pattern recipes used in Test 2
- **Component-Taxonomy Research** (`_component-taxonomy-research/03-tension-test-analysis.md`): Evidence for Tier 2/3 split
- **Pipeline-Evolution Research** (`_pipeline-evolution-research/05-extraction-reconceived.md`): Extraction scope definition

---

## APPENDIX: EXAMPLE TEST 1 OUTPUT

### Track 1 Test Page: "React Hooks Quick Start"

**Library CSS Loaded**:
```html
<link rel="stylesheet" href="tier-1-tokens.css">
<link rel="stylesheet" href="tier-2-container.css">
<link rel="stylesheet" href="tier-2-header.css">
<link rel="stylesheet" href="tier-2-callouts.css">
<link rel="stylesheet" href="tier-2-code-block.css">
<link rel="stylesheet" href="tier-2-footer.css">
```

**HTML Structure** (simplified):
```html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header>
    <div class="header-inner">
      <div class="header-meta">TUTORIAL</div>
      <h1 class="header-title">React Hooks Quick Start</h1>
      <p class="header-subtitle">Learn the fundamentals in 10 minutes</p>
    </div>
  </header>

  <main id="main" class="page-container">
    <section>
      <h2>What Are Hooks?</h2>
      <p>Hooks let you use state and other React features without writing a class.</p>

      <div class="callout callout--note">
        <div class="callout__label">KEY CONCEPT</div>
        <div class="callout__body">
          Hooks are functions that let you "hook into" React state and lifecycle features.
        </div>
      </div>
    </section>

    <section>
      <h2>Your First Hook: useState</h2>
      <pre><code><span class="kw">import</span> { useState } <span class="kw">from</span> <span class="st">'react'</span>;

<span class="kw">function</span> <span class="fn">Counter</span>() {
  <span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>(<span class="nu">0</span>);

  <span class="kw">return</span> (
    <span class="pu">&lt;</span><span class="kw">button</span> onClick={() => <span class="fn">setCount</span>(count + <span class="nu">1</span>)}<span class="pu">&gt;</span>
      Clicked {count} times
    <span class="pu">&lt;/</span><span class="kw">button</span><span class="pu">&gt;</span>
  );
}</code></pre>

      <div class="callout callout--tip">
        <div class="callout__label">TIP</div>
        <div class="callout__body">
          Always call hooks at the top level of your component, not inside loops or conditions.
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-inner">
      <p>Documentation v2.0 • Last updated 2026-02-13</p>
    </div>
  </footer>
</body>
```

**Guardrails Met**:
- G1: `.page-container` has `max-width: 1100px, min-width: 940px` (65% at 1440px) ✓
- G2: `.page-container` has `padding: 0 32px` ✓
- G6: `body` has `line-height: 1.5` ✓
- G7: `section` has `margin-bottom: 48px` ✓
- G8: Global reset `border-radius: 0` ✓

**Perceptual Audit**: 28/28 PASS (all Tier 1+2 questions)

**Verdict**: Would ship. Library is sufficient for Track 1 mechanical assembly.

---

## APPENDIX: EXAMPLE TEST 2 OUTPUT

### Track 2 Test Page: "How Type Systems Work"

**Pipeline Metaphor Selected**: Geological Confidence Stratification (from OD-004)

**Library CSS Loaded** (same as Test 1) + **Pipeline-Generated Tier 3 CSS**:

```css
/* TIER 3: Pipeline-generated zone wrappers */
.core-sample {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px;
  border-left: 4px solid var(--color-text);
  border-right: 4px solid var(--color-text);
}

.stratum {
  padding: var(--space-10);  /* 40px */
  margin-bottom: var(--space-4);
  background: var(--color-zone-sparse);
}

.stratum--compressed {
  padding: var(--space-8);  /* 32px */
  background: var(--color-zone-dense);
}

.stratum--bedrock {
  padding: var(--space-6);  /* 24px */
  background: var(--color-text);
  color: var(--color-background);
}

.depth-marker {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  position: absolute;
  left: -60px;
  top: 0;
}

/* TIER 3: Context overrides for Tier 2 components */
.stratum--compressed .callout {
  --callout-padding: 16px 24px;
  --callout-bg: transparent;
  --callout-margin: 20px 0;
}

.stratum--bedrock .callout {
  --callout-padding: 12px 20px;
  --callout-bg: rgba(255, 255, 255, 0.05);
}

.stratum--bedrock pre {
  background: rgba(0, 0, 0, 0.3);
  border-left-color: var(--color-background);
}
```

**HTML Structure** (simplified):
```html
<div class="core-sample">
  <div class="stratum">
    <div class="depth-marker">Surface</div>
    <h2>Type System Fundamentals</h2>
    <p>Types are constraints that prevent entire classes of errors at compile time.</p>

    <div class="callout callout--essence">
      <div class="callout__label">ESSENCE</div>
      <div class="callout__body">
        A type system is a proof system that mechanically verifies certain program properties.
      </div>
    </div>
  </div>

  <div class="stratum stratum--compressed">
    <div class="depth-marker">50m</div>
    <h2>Nominal vs Structural Typing</h2>
    <pre><code><span class="kw">type</span> UserId = <span class="ty">string</span>;  <span class="cm">// Nominal: name matters</span>
<span class="kw">type</span> Person = { name: <span class="ty">string</span> };  <span class="cm">// Structural: shape matters</span></code></pre>
  </div>

  <div class="stratum stratum--bedrock">
    <div class="depth-marker">Bedrock</div>
    <h2>The Halting Problem</h2>
    <p>No type system can catch all bugs — Turing completeness makes perfect verification impossible.</p>
  </div>
</div>
```

**Guardrails Met**:
- G1: Container 1000px > 940px ✓
- G2: Padding 48px > 32px ✓
- G3: Label-to-heading 16px (via `.callout__label` margin-bottom) ✓
- G4: Compression ratio = 24px / 40px = 60% > 40% ✓
- G5: Text blocks max-width 65ch ✓
- G6: Line-height 1.5 ✓
- G7: Section breathing 48px (via `.stratum` margin-bottom) ✓
- G8: Border-radius 0 ✓

**Perceptual Audit**: 47/48 PASS (1 note: depth markers could have better responsive behavior at 768px)

**Metaphor Quality**: IMPLICIT (geological metaphor evident from structure, not textual labels)

**Verdict**: Would ship. Library + pipeline integration works correctly.

---

**END EXTRACTION VALIDATION PROTOCOL**
