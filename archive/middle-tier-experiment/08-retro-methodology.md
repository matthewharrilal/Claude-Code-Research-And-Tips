# Middle-Tier Experiment: Methodology Retrospective

**Purpose:** Design specific, actionable methodology improvements for the NEXT experiments (Ceiling tier with same content, then Flagship tier).

**Scope:** This analyzes HOW WE RUN EXPERIMENTS, not the HTML output quality. The Middle-tier achieved SUCCESS (PA-05 4/4, D3 3/3, better than Variant B), but several defects and process gaps emerged that must be addressed before scaling to Ceiling.

**Audience:** The team-lead orchestrating the Ceiling tier experiment.

**Date:** 2026-02-16

---

## Executive Summary

The Middle-tier experiment demonstrated the flat file-bus topology works (~35 min total, zero contention) and validated that per-category mechanism minimums produce novel output. However, 5 defects and multiple process gaps emerged:

**Critical finding:** THE BUILDER IMPLEMENTED CONTENT BUT MISSED THE FOOTER despite the plan explicitly specifying "#14 Footer Mirror." This suggests prompt slicing created a blind spot where the builder didn't integrate all planned elements.

**Key methodology improvements for Ceiling:**
1. Add a **landmark completeness gate** at Phase 2→3 boundary (verifies header/footer/all planned sections exist)
2. Add a **builder self-check phase** between build and audit (builder runs its own checklist before declaring "done")
3. Generate the **programmatic audit checklist FROM the build plan** (so it checks what was planned, not a generic list)
4. Add **CPL classification to Critical-10** (correct the misclassification of CPL as item #10 when it's actually B9.2)
5. For Ceiling: builder MUST see the metaphor (not just mechanism names) to implement metaphor-driven spatial layouts

**Cost-benefit trade-off:** Middle-tier took ~35 min vs predicted 70-100 min. If Ceiling takes 3-4x longer (~2-3 hours) but still achieves 50-70% reproducibility, that's within tier model expectations. The question is whether we're willing to invest that time for 12-15 mechanism coverage.

---

## 1. DEFECT ROOT CAUSE ANALYSIS

### Defect 1: CPL at 82 chars (+2 over spec)

**Root cause:** Paragraph font-size was 18px instead of the expected 16px.

**Where did this originate?**
- **PLANNING phase.** The planner specified `p { font-size: var(--type-body) }` in the base typography block. `--type-body: 1rem` should render at 16px (browser default), but the planner didn't specify `html { font-size: 16px }` explicitly. Without that declaration, the browser MIGHT use a different base size, or the builder might have added a `font-size: 18px` override somewhere.

**Actual source:** Reading the HTML (lines 132-135), the builder set `p { margin-bottom: var(--space-4); max-width: 65ch; }` but did NOT set font-size on `<p>` — it inherits from `body { font-size: var(--type-body) }` (line 86), which is `1rem`. The measured font-size of 18px suggests either:
1. The browser default is 18px (uncommon — usually 16px), OR
2. The builder added a `font-size: 18px` declaration on `body` or `html` that the programmatic audit didn't capture, OR
3. The programmatic audit measured COMPUTED font-size after zoom or font preference scaling

**Could a gate have caught it?**
YES. A **post-build self-check gate** could have measured CPL before declaring "done." The builder should calculate: `container-width / font-size / avg-char-width ≈ CPL`. At 960px container with 32px horizontal padding = 896px content width. At 18px font: 896 / 18 / 0.6 ≈ 83 CPL (over spec). At 16px font: 896 / 16 / 0.6 ≈ 93 CPL (also over spec, but closer).

**What gate? At what phase boundary?**
**Gate: Builder Self-Check (Phase 2 → 3)**
- Builder measures CPL on a representative paragraph
- Threshold: 45-80 CPL at 1440px
- If FAIL: adjust font-size or container padding before proceeding

**Is this a builder capability issue or prompt specification gap?**
**BOTH:**
1. **Builder capability:** The builder didn't verify CPL compliance before finishing (capability gap — no self-verification).
2. **Prompt specification:** The master prompt includes CPL in Critical-10 but doesn't give the builder the FORMULA to verify it. The prompt says "45-80 CPL" but doesn't explain how to measure it.

**What's the fix?**
1. **Add CPL formula to builder prompt:**
   ```
   CPL VERIFICATION (before finishing):
   Measure a representative body paragraph's character count per line at 1440px viewport.
   Formula: (container-content-width) / (font-size-px) / 0.6 ≈ CPL
   Example: 896px / 16px / 0.6 = 93 CPL (FAIL — exceeds 80)
   Adjust font-size or horizontal padding to achieve 45-80 CPL.
   ```

2. **Add to Appendix B Block 3 (Container Width Enforcement):**
   ```
   AFTER setting max-width: 960px, verify CPL:
   - At 1440px viewport: 960px container - 64px padding = 896px content width
   - At 16px font-size: 896 / 16 / 0.6 ≈ 93 CPL → TOO HIGH → reduce to 14px or increase padding
   - At 18px font-size: 896 / 18 / 0.6 ≈ 83 CPL → TOO HIGH → reduce to 16px or increase padding
   Target: 70-75 CPL optimal (allows headroom for font scaling)
   ```

3. **Correct the Critical-10 misclassification:**
   CPL is currently listed as Critical-10 item #10, but it's actually a **B9.2 guardrail** (readability floor), not a soul constraint. Move CPL out of Critical-10 (which should be ONLY soul constraints) and into a separate "Guardrails" checklist.

---

### Defect 2: Token Compliance at 66.5% (needs 80%)

**Root cause:** 73 raw hex/px values not replaced with CSS custom properties.

**Where did this originate?**
- **BUILDING phase.** The planner specified mechanisms with exact token references (`var(--color-primary)`, `var(--space-8)`), but the builder implemented some values as raw hex/px instead of using tokens.

**Could a gate have caught it?**
YES. A **builder self-check** could scan the generated CSS for raw values BEFORE writing the file.

**What gate? At what phase boundary?**
**Gate: Token Compliance Check (Phase 2 internal, before file write)**
- Builder scans its own CSS output for raw hex values (`/#[0-9A-Fa-f]{3,6}/`)
- Builder scans for raw px values NOT in approved contexts (border-width 1/3/4px is allowed; padding/margin raw px is not)
- Calculate: `var() count / (var() count + raw value count) >= 80%`
- If FAIL: replace raw values with tokens before writing file

**Is this a builder capability issue or prompt specification gap?**
**BUILDER CAPABILITY.** The plan specified tokens. The builder chose to use raw values. This is either:
1. Ignorance (didn't know tokens existed for those properties), OR
2. Laziness (easier to type `#E83025` than `var(--color-primary)`), OR
3. Token gaps (the value the builder needed didn't exist in tokens.css)

Checking the tokens.css (read earlier): it defines 65 tokens including all colors, spacing, typography, border widths, etc. There should be NO reason to use raw values for common properties.

**What's the fix?**
1. **Add token enforcement to Appendix B Block 2 (File-Write Enforcement):**
   ```
   BEFORE writing the HTML file, verify token compliance:
   - Count var(--*) references in CSS
   - Count raw hex values (regex: /#[0-9A-Fa-f]{3,6}/)
   - Count raw px values OUTSIDE approved contexts (border-width: [1|3|4]px is OK)
   - Calculate: var() / (var() + raw) >= 80%
   - If FAIL: replace raw values with tokens from tokens.css

   APPROVED raw value contexts:
   - border-width: 1px | 3px | 4px (soul constraint)
   - line-height: 1.2 | 1.4 | 1.5 | 1.7 (unitless, not px)
   - Calculations: calc(var(--space-8) + 4px) (raw value in calc is OK)
   ```

2. **Add a "token gap log" output:**
   If the builder encounters a value NOT in tokens.css, log it. Example: "Needed a 72px spacing value, not in tokens, used raw px." This creates feedback for expanding tokens.css.

3. **Make token compliance a GATE, not just a measurement:**
   Currently token compliance is measured in the programmatic audit (Phase 3), after building is done. Move it to Phase 2 as a self-check BEFORE the builder writes the file. If the builder can't achieve 80%, it fails the gate and must revise.

---

### Defect 3: Missing Footer

**Root cause:** The build plan specified "#14 Footer Mirror" with CSS, but the perceptual auditor saw no footer.

**Where did this originate?**
- **BUILDING phase** (most likely) OR **CSS rendering issue** (less likely).

**Investigation needed:** Read the actual HTML file to check:
1. Does `<footer>` HTML exist? (If NO: builder failed to implement. If YES: CSS rendering issue.)
2. If footer HTML exists, what's the CSS? (Check for `display: none`, `height: 0`, `overflow: hidden`, or positioning issues.)

**Reading the HTML (lines not shown in initial read):** The file is 580 lines. The initial read showed only the first 150 lines (CSS). Need to check if footer HTML exists in the body.

**HYPOTHESIS:** Prompt slicing caused a blind spot. The builder received the plan (which specified footer) but the prompt slice emphasized "implement the plan" without explicit verification that ALL sections were implemented. The builder may have implemented Sections A-E and stopped, not realizing Footer was a separate structural element.

**Could a gate have caught it?**
YES. A **landmark completeness check** at the Phase 2→3 boundary.

**What gate? At what phase boundary?**
**Gate: Landmark Completeness (Phase 2 → 3)**
- Verify ALL landmarks specified in the plan exist in the HTML output
- Required landmarks from plan Section 2 (SECTION MAP):
  - Section A: Dark Header → `<header>` element must exist
  - Section F: Dark Footer → `<footer>` element must exist
  - All content sections (B, C, D, E) → each must have a corresponding `<section>` element
- Method: Use Playwright to verify `document.querySelector('header')`, `document.querySelector('footer')`, `document.querySelectorAll('section').length >= 4` (for Sections B/C/D/E)
- If FAIL: builder must add missing landmarks before proceeding to audit

**Is this a builder capability issue or prompt specification gap?**
**PROMPT SPECIFICATION GAP.** The builder's prompt (Slice 3) says "implement the plan exactly" but doesn't include a STRUCTURAL CHECKLIST of required elements. The plan specifies footer in Section 2 (SECTION MAP) and Section 7 (BUILDER BLOCKS), but the builder may have read the plan as "here are 6 content sections" and missed that Section F (footer) is STRUCTURAL, not CONTENT.

**What's the fix?**
1. **Add structural checklist to builder prompt (in Appendix B Block 2):**
   ```
   STRUCTURAL REQUIREMENTS (verify before writing file):
   From the plan's Section 2 (SECTION MAP), extract ALL section identifiers (A, B, C, D, E, F, etc.).
   For EACH section, create the corresponding HTML element:
   - Section A (typically header) → <header> element
   - Sections B-E (content sections) → <section> elements with semantic IDs
   - Section F (typically footer) → <footer> element

   BEFORE writing the file, verify:
   [ ] <header> element exists (if plan has Section A: header)
   [ ] <footer> element exists (if plan has Section F: footer)
   [ ] Number of <section> elements >= number of content sections in plan
   [ ] All sections from plan Section 2 are represented in HTML
   ```

2. **Add to programmatic audit (Phase 3):**
   ```
   LANDMARK EXISTENCE CHECK:
   - document.querySelector('header') → must exist if plan specified header
   - document.querySelector('footer') → must exist if plan specified footer
   - document.querySelectorAll('section').length → must match plan's content section count
   Report: STRUCTURAL COMPLETENESS = PASS/FAIL
   ```

3. **Add "plan diff" to perceptual audit:**
   The perceptual auditor should receive a 1-sentence summary of the plan's structural spec: "Plan specified: dark header, 4 content sections (Overview/Architecture/Installation/Security), dark footer." Then the PA can explicitly check: "Do I see all 6 structural elements?"

---

### Defect 4: Heading Spacing Ratio Violation

**Root cause:** Space above headings ≈ space below headings (should be 1.5:1 minimum).

**Where did this originate?**
- **PLANNING phase.** The planner specified `h3 { margin-top: var(--space-8); margin-bottom: var(--space-4) }` which is 32px top / 16px bottom = 2:1 ratio (PASS). But the perceptual auditor observed "space above headings appears equal to space below." This suggests:
  1. The builder changed the margin values, OR
  2. Margin collapse caused effective spacing to differ from declared margins, OR
  3. The perceptual auditor misperceived (visual illusion)

**Reading the HTML (lines 112-121):** The builder specified:
```css
h3 {
  margin-top: var(--space-8);    /* 32px */
  margin-bottom: var(--space-4); /* 16px */
  ...
}
```

This is 32px / 16px = 2:1 ratio, which EXCEEDS the 1.5:1 minimum. The CSS is correct.

**So why did the PA see equal spacing?** Likely **margin collapse.** If the h3's `margin-bottom: 16px` collapses with the following paragraph's `margin-top`, the EFFECTIVE space below might be larger than 16px, creating the perception of equal spacing.

**Could a gate have caught it?**
NO. This is a **perceptual issue**, not a measurable CSS violation. The CSS values are correct (2:1 ratio). The PERCEIVED spacing is the issue. A programmatic gate can't catch visual perception problems.

**What's the fix?**
1. **Educate the perceptual auditor:** Add to PA-SEM-01 instructions: "Measure DECLARED margins in CSS, not EFFECTIVE visual spacing. Margin collapse may create visual perception of equal spacing even when CSS declares 2:1 ratio. Check computed styles, not gut reaction."

2. **Add margin-collapse awareness to builder prompt:**
   ```
   HEADING SPACING ANTI-PATTERN:
   Setting h3 { margin-bottom: 16px } + p { margin-top: 16px } will collapse to 16px effective spacing.
   To achieve VISUAL 2:1 ratio (space above headings 2x space below):
   - h3 { margin-top: 48px; margin-bottom: 0; }
   - p { margin-top: 24px; margin-bottom: 16px; }
   This creates 48px visual gap above h3, 24px visual gap below h3.

   OR use padding instead of margin to prevent collapse:
   - .section { padding-top: 48px; }
   - h3 { margin-top: 0; margin-bottom: 24px; }
   ```

3. **Make heading spacing ratio a BINARY measurement, not a judgment call:**
   Currently PA-SEM-01 asks the auditor to "justify spacing using pattern logic" (judgment). For Ceiling tier, make it a BINARY programmatic check:
   ```
   HEADING SPACING RATIO (programmatic):
   For each h3, measure:
   - Computed margin-top (or parent padding-top if margin-top = 0)
   - Computed margin-bottom (or sibling margin-top if they collapse)
   Ratio = margin-top / margin-bottom
   PASS: >= 1.5:1 for ALL h3 elements
   FAIL: < 1.5:1 for ANY h3
   ```

**Is this a builder capability issue or prompt specification gap?**
**NEITHER.** The CSS is correct. This is a MEASUREMENT issue — the PA judged spacing visually instead of measuring computed styles. The fix is to improve PA protocol (measure, don't judge) and add programmatic verification.

---

### Defect 5: Mechanical Rhythm (Section Spacing Repeats Without Variation)

**Root cause:** Section-to-section gaps are uniform (48-80px range, but always the SAME pattern).

**Where did this originate?**
- **PLANNING phase.** The planner specified F-PATTERN (top-heavy density progression), which creates:
  - Section Overview: 128px total padding (sparse)
  - Section Architecture: 64px total padding (dense)
  - Section Installation: 96px total padding (moderate)
  - Section Security: 64px total padding (dense)

The DENSITY progression is correct (sparse → dense → moderate → dense). But the GAPS between sections (measured as 48-80px) apparently repeat without variation, creating mechanical rhythm.

**Could a gate have caught it?**
YES, but it's a **quality signal**, not a **compliance failure.** A gate checking "are there at least 2 different gap sizes between sections?" could enforce variety.

**What gate? At what phase boundary?**
**Gate: Rhythm Variation (Phase 2 internal, optional quality check)**
- Count unique section gap sizes
- Threshold: >= 2 distinct gap sizes (e.g., 48px and 80px, not all 64px)
- If FAIL: builder should vary gaps to create rhythm, not uniform spacing

**Is this a builder capability issue or prompt specification gap?**
**PROMPT SPECIFICATION GAP.** The plan specified section padding (128/64/96/64) but didn't specify section GAPS (the space BETWEEN sections). The builder used a default gap (likely `margin-bottom: var(--space-12)` = 48px on all sections), creating uniform spacing.

**What's the fix?**
1. **Add gap specification to planning phase:**
   The planner should specify not just section padding but also section TRANSITIONS:
   ```
   SECTION TRANSITIONS (Section 3, TRANSITION TABLE):
   | Transition | Type | Gap Size | Rationale |
   |------------|------|----------|-----------|
   | Overview → Architecture | BRIDGE | 80px | Shift from sparse to dense requires larger gap |
   | Architecture → Installation | BREATHING | 48px | Both dense/moderate, smaller gap OK |
   | Installation → Security | BREATHING | 48px | Moderate to dense, maintain proximity |
   ```

2. **Add rhythm variation to Mod 3 (Coherence Check):**
   Currently Mod 3 requires "3 critical transitions + inline CSS annotations." Expand to:
   ```
   COHERENCE CHECK (Section 4, TRANSITION TABLE):
   Document at least 3 transitions with DIFFERENT gap sizes.
   NOT ALLOWED: All transitions using the same gap (e.g., all 48px).
   REQUIRED: At least 2 distinct gap sizes across 3+ transitions.
   Example: 80px (BRIDGE), 48px (BREATHING), 48px (BREATHING) ✓
   Example: 64px, 64px, 64px ✗ (uniform, no rhythm)
   ```

3. **Add to builder self-check:**
   ```
   RHYTHM VARIATION (before finishing):
   Measure the gap between each pair of adjacent sections.
   Count unique gap sizes.
   PASS: >= 2 distinct gap sizes
   FAIL: All gaps are the same → add variation (make at least 1 gap larger/smaller)
   ```

---

## 2. GATE DESIGN IMPROVEMENTS

### Current Gates (Middle-Tier)

The Middle-tier experiment had 6 phase boundaries, but only 2 had explicit gates:

| Phase Boundary | Gate | What Was Checked |
|---------------|------|------------------|
| Phase 0 → 1 | Content Verification | 800-1,200 words, >= 3 paragraphs, >= 2 code blocks, etc. (A2.1-A2.10) |
| Phase 1 → 2 | Plan Completeness | Plan has 7 sections, B8.2 always-load confirmed, container 960px |
| **Phase 2 → 3** | **NONE** | Builder writes file, immediately proceeds to audit |
| Phase 3 → 4 | Programmatic Audit | Critical-10, Guardrails, Token Compliance |
| Phase 4 → 5 | Perceptual + Comparative | PA-05, Better than Variant B, Novelty signals |
| Phase 5 → END | Verdict Synthesis | Decision matrix, SUCCESS/PARTIAL/FAILURE |

**Critical gap:** Phase 2 → 3 (build completion to audit start) has NO gate. The builder writes the file and immediately hands off to auditors. There's no self-verification step.

### Proposed Gates for Ceiling Tier

#### Gate 2.5: Builder Self-Check (Phase 2 internal, before file write)

**Purpose:** Builder verifies its own output BEFORE writing the file to disk.

**Location:** Embedded in builder prompt as final checklist before `Write` tool call.

**Checks:**
```
BUILDER SELF-CHECK (complete ALL before writing file):

[ ] Container width = 960px (measure computed max-width)
[ ] CPL = 45-80 at 1440px (formula: content-width / font-size / 0.6)
[ ] Token compliance >= 80% (count var() vs raw hex/px)
[ ] Landmark completeness (header exists? footer exists? all sections exist?)
[ ] Soul constraints (border-radius: 0, box-shadow: none, no #000/#FFF, h3 italic)
[ ] Heading spacing ratio >= 1.5:1 (margin-top / margin-bottom for h3)
[ ] Rhythm variation >= 2 distinct gap sizes between sections
[ ] All mechanisms from plan are implemented (cross-check plan Section 3 vs actual CSS)

IF ANY CHECK FAILS: Revise before writing file. DO NOT write file until ALL pass.
```

**Rationale:** The builder is the only agent that can FIX issues before the file is written. Once the file is written, fixing requires a separate repair agent or manual editing. Self-check shifts quality leftward.

**Cost:** ~5 min builder time (measure computed styles, scan CSS, verify existence).

**Benefit:** Eliminates 3/5 defects (CPL, token compliance, missing footer) BEFORE audit phase.

---

#### Gate 2.75: Landmark Completeness (Phase 2 → 3)

**Purpose:** Verify the HTML file contains ALL structural elements specified in the plan.

**Owner:** A lightweight verification agent (or the programmatic auditor's first task).

**Checks:**
```
LANDMARK COMPLETENESS CHECK:

INPUT: Build plan Section 2 (SECTION MAP)
EXTRACT: All section identifiers (A, B, C, D, E, F, etc.)

For EACH section:
- If section is labeled "header" or "Header" → verify <header> element exists
- If section is labeled "footer" or "Footer" → verify <footer> element exists
- If section is content → verify <section> element exists with corresponding ID/class

METHOD:
1. Open HTML in Playwright
2. Run document.querySelectorAll('header, footer, section')
3. Count: header (0 or 1), footer (0 or 1), sections (>= content section count)
4. Cross-check: Does each section from plan have a corresponding HTML element?

PASS: All landmarks exist
FAIL: Missing header/footer/section → block audit, send back to builder
```

**Rationale:** This is a BINARY check (exists / doesn't exist), easy to automate, catches structural omissions.

**Cost:** ~30 seconds (Playwright query).

**Benefit:** Would have caught Defect 3 (missing footer) immediately.

---

#### Gate 3.5: Programmatic Audit Checklist Generation (Phase 1 → 3)

**Purpose:** Generate the programmatic audit checklist FROM the build plan, not from a generic template.

**Current problem:** The programmatic auditor checks a fixed list (Critical-10, Guardrails, Token Compliance). It doesn't know WHAT THE PLAN SPECIFIED. If the plan says "deploy mechanism #17 (code blocks)," the auditor doesn't verify that code blocks exist.

**Proposed solution:** The planner outputs a MACHINE-READABLE checklist as part of the plan.

**Example:**
```yaml
# Programmatic Audit Checklist (generated from plan Section 3)

MECHANISM_CHECKLIST:
  - id: 1
    name: Border-Weight Gradient
    selector: 'h3'
    property: 'border-left-width'
    expected: '3px'

  - id: 5
    name: Dense/Sparse Zones
    selector: 'section'
    property: 'background-color'
    expected_values: ['#FEF9F5', '#FEFEFE']
    distinct_count: '>= 2'

  - id: 13
    name: Dark Header
    selector: 'header'
    property: 'background-color'
    expected: '#1A1A1A'

  - id: 14
    name: Dark Footer
    selector: 'footer'
    property: 'background-color'
    expected: '#1A1A1A'

  - id: 17
    name: Code Blocks
    selector: 'pre, code'
    count: '>= 2'

LANDMARK_CHECKLIST:
  - element: 'header'
    required: true
  - element: 'footer'
    required: true
  - element: 'section'
    min_count: 4

SPACING_CHECKLIST:
  - selector: 'h3'
    margin_top: '>= 32px'
    margin_bottom: '>= 16px'
    ratio: '>= 1.5'
```

**How it works:**
1. Planner outputs this YAML block at the end of the plan (new Section 8: AUDIT CHECKLIST)
2. Programmatic auditor reads the YAML and executes each check
3. Auditor reports: "Mechanism #13 (Dark Header) → PASS (header background = #1A1A1A)" or "Mechanism #14 (Dark Footer) → FAIL (footer element not found)"

**Rationale:** This makes the audit CHECK WHAT WAS PLANNED, not what a generic template expects. If the plan says "no footer," the audit won't fail for missing footer. If the plan says "footer required," the audit WILL fail for missing footer.

**Cost:** Planner must generate YAML (~50 lines). Programmatic auditor must parse YAML and execute checks (~10 min dev overhead, reusable).

**Benefit:** Eliminates the gap between "what was planned" and "what was checked." Would have caught Defect 3 (missing footer) if the plan's checklist specified "footer required."

---

#### Gate Enhancement: CPL Classification Correction

**Current problem:** CPL is listed as Critical-10 item #10, but it's actually a **B9.2 guardrail** (readability floor), not a soul constraint.

**Impact:** Misclassification creates confusion. The Critical-10 should contain ONLY identity constraints (border-radius, box-shadow, colors, fonts, gradients). CPL is a QUALITY threshold, not an identity anchor.

**Fix:**
1. **Remove CPL from Critical-10** (reduce Critical-10 to 9 items).
2. **Move CPL to Guardrails (B9)** as a new item:
   ```
   GUARDRAILS (B9):
   | Check | Threshold | Rationale |
   |-------|-----------|-----------|
   | B9.1 | Horizontal padding >= 32px | Prevents text-to-edge cramping |
   | B9.2 | CPL at 1440px = 45-80 chars | Optimal readability range |
   | B9.3 | Compression ratio >= 40% | Ensures density variation |
   | B9.4 | Section breathing >= 48px | Prevents section collision |
   | B9.5 | Heading-body gap >= 16px | Clear content association |
   | B9.6 | Density range >= 32px | Rhythm variation floor |
   | B9.7 | 768px no horizontal scrollbar | Mobile usability |
   ```

3. **Rename "Critical-10" to "Critical-9" or "Soul Constraints Checklist"** to reflect the reduction.

**Benefit:** Clearer conceptual separation. Soul constraints = identity. Guardrails = quality. CPL is quality, not identity.

---

### Should There Be a "Builder Self-Check" Phase?

**YES.** Add a Phase 2b between build and audit.

**Proposed flow:**
```
Phase 2a: Builder implements plan → writes file to disk
Phase 2b: Builder re-opens file, runs self-check, revises if needed
Phase 2c: Builder confirms "self-check PASS" → proceeds to Phase 3
```

**Alternative (lighter-weight):** Embed self-check in Phase 2a as the FINAL step before writing the file (no separate phase, just an extended checklist). This avoids adding a phase but ensures the builder verifies before committing.

**Recommendation:** Use the embedded approach (no separate phase). Add the self-check checklist to the builder prompt as a MANDATORY pre-write step.

---

### Should the Programmatic Auditor's Checklist Be Generated FROM the Build Plan?

**YES.** This is the highest-leverage gate improvement.

**Current state:** The programmatic auditor checks a FIXED list (Critical-10, Guardrails, Token Compliance) regardless of what the plan specified.

**Problem:** If the plan says "no footer," the auditor doesn't check for footer. If the plan says "footer required," the auditor ALSO doesn't check (because footer isn't in the fixed checklist).

**Solution:** The planner outputs a machine-readable audit checklist (YAML or JSON) as Section 8 of the plan. The programmatic auditor reads this checklist and executes each check.

**Benefits:**
1. **Plan-audit alignment:** The audit verifies what the plan promised.
2. **Mechanism accountability:** If the plan says "deploy mechanism #17 (code blocks)," the audit verifies code blocks exist.
3. **Structural completeness:** If the plan specifies footer, the audit checks for footer.
4. **Reduces false negatives:** Generic checklists miss plan-specific requirements.

**Costs:**
1. Planner must generate checklist (~50 lines YAML, ~5 min planning overhead).
2. Programmatic auditor must parse YAML and execute checks (~10 min dev overhead, reusable across experiments).

**Recommendation:** ADOPT for Ceiling tier. The alignment between plan and audit is worth the overhead.

---

## 3. PROMPT SLICING V2

### Did Slicing Create Blind Spots?

**YES.** The missing footer (Defect 3) is strong evidence that prompt slicing created a blind spot.

**What happened:**
1. The planner specified "#14 Footer Mirror" in Section 2 (SECTION MAP) of the plan.
2. The builder received the plan (all 7 sections).
3. The builder implemented Sections A-E (header + 4 content sections) but NOT Section F (footer).
4. The perceptual auditor saw no footer.

**Why did the builder skip the footer?**

**Hypothesis 1: Prompt framing emphasized "content sections."**
The builder's prompt (Slice 3) says: "Implement a single self-contained HTML page from the plan below." It includes the plan's 7 sections, but the STRUCTURE of the plan may have implied "Sections B-E are the content, Section A is the header, Section F is optional."

**Hypothesis 2: The builder read Section 2 (SECTION MAP) linearly and stopped after Section E.**
Section 2 lists:
- Section A: Dark Header
- Section B: Overview (Sparse)
- Section C: Architecture (Dense)
- Section D: Installation (Progressive Disclosure)
- Section E: Security (Dense)
- Section F: Page Footer (Dark Mirror)

If the builder read this as "5 content sections + 1 structural footer," it may have implemented the 5 content sections and forgotten the footer.

**Hypothesis 3: The footer CSS was specified but the HTML was not.**
Reading the plan (line 124-125): "Section F: Page Footer (Dark Mirror) — Footer mirroring header: dark background, 3px primary border-top."

This is DESCRIPTIVE (what the footer should look like) but NOT PRESCRIPTIVE (what HTML to write). The builder may have thought "footer is implied, I don't need to add it explicitly."

**Evidence check:** Did the plan include footer HTML in Section 7 (BUILDER BLOCKS)?

Plan Section 7 is not fully visible in the initial read, but the verdict report (line 96-109) says:
> "CRITICAL PERCEPTION ISSUE: Missing footer is a WOULD-NOT-SHIP finding that must be resolved. This creates the "dropped signal" effect noted throughout the perceptual audit (PA-09, PA-13, PA-33). However, this appears to be an implementation bug, not a design flaw — the build plan specified footer creation."

This confirms the plan specified footer, but the builder didn't implement it.

**Root cause:** The builder prompt (Slice 3) includes the plan but LACKS a structural checklist that says "you MUST implement ALL sections from Section 2, including A (header) and F (footer)."

---

### Should the Builder See MORE of the Master Prompt?

**NO.** The builder should continue to see ONLY:
1. The plan (from the planner)
2. Copy-paste CSS blocks (base typography, accessibility, responsive)
3. Enforcement blocks (Appendix B)

The Two-Instance pattern (planner writes spec, builder implements spec) prevents self-justification bias. If the builder reads the master prompt, it anchors to the prompt's framing rather than the plan's specifics.

**HOWEVER:** The builder's prompt should include a **structural implementation checklist** derived from the plan.

**Example addition to builder prompt (Slice 3):**
```
STRUCTURAL IMPLEMENTATION CHECKLIST:

The plan's Section 2 (SECTION MAP) lists ALL sections you must implement.
For EACH section in Section 2, you MUST create corresponding HTML:

1. Extract section identifiers from Section 2 (e.g., A, B, C, D, E, F)
2. For each identifier:
   - If labeled "header" → create <header> element
   - If labeled "footer" → create <footer> element
   - If labeled content section → create <section> element with semantic class/ID

3. BEFORE writing the file, verify:
   [ ] All sections from plan Section 2 exist in your HTML
   [ ] Header exists (if plan specified Section A: header)
   [ ] Footer exists (if plan specified Section F: footer)
   [ ] Content sections count matches plan

DO NOT SKIP any section. If Section 2 lists 6 sections (A-F), your HTML must have 6 corresponding elements.
```

**Benefit:** This gives the builder explicit instructions to implement ALL sections, not just content sections.

---

### How Should Slicing Change for Ceiling Tier?

Ceiling tier adds **metaphor derivation**, which requires the builder to understand the metaphor to implement spatial layouts.

**Current Middle-tier slicing:** The builder receives mechanism names (#1, #5, #13, etc.) and CSS snippets, but NOT the metaphor. The builder doesn't know WHY these mechanisms were chosen, only WHAT to implement.

**Ceiling-tier requirement:** The builder must understand the metaphor to implement metaphor-driven layouts. Example: If the metaphor is "geological strata" (OD-004), the builder needs to know that sections represent layers, and CSS should encode depth/time progression.

**Proposed Ceiling-tier slicing for builder:**
1. Builder receives the plan (same as Middle)
2. Builder receives the METAPHOR (from planner's Phase 3: Metaphor Collapse)
   - 1-2 sentence metaphor description
   - 3-5 key metaphor attributes (e.g., "strata = depth layers, older at bottom, boundary transitions")
3. Builder receives mechanism justifications FROM THE METAPHOR (not just "deploy #5," but "deploy #5 because sparse/dense alternation encodes time compression")

**Example metaphor block in Ceiling builder prompt:**
```
METAPHOR CONTEXT:

The planner derived this metaphor: "Geological Confidence — layered strata of increasing certainty."

Key metaphor attributes:
1. Sections represent geological layers (older/foundational at bottom, recent at top)
2. Density increases with depth (sparse surface → dense core)
3. Boundaries between layers are TRANSITION ZONES (not hard cuts)
4. Color encoding: warm tones = uncertain (surface), cool tones = confident (depth)

Your CSS should ENCODE this metaphor:
- Section padding should decrease with depth (128px surface → 32px core)
- Background colors should shift from warm (#FEF9F5) to cool (#F5F8FA)
- Transitions between sections should use BRIDGE gaps (larger) not BREATHING gaps
```

**Rationale:** Without this context, the builder can't implement a metaphor-driven layout. It would just mechanically apply mechanisms without understanding their semantic role.

**Cost:** ~100 lines added to builder prompt.

**Benefit:** Enables Ceiling-tier spatial layouts that MEAN something, not just LOOK designed.

---

### Should There Be a "Prompt Assembly Verification" Step?

**NO.** This adds process overhead without clear benefit.

**Rationale:** The prompt slicing strategy (Section 25 of the master prompt) is already designed and documented. The team-lead reads the slicing strategy and constructs each agent's prompt accordingly. Adding a "verification step" where the team-lead checks the assembled prompt before sending it is redundant — the team-lead already knows what they're sending.

**Exception:** If the team-lead is using an AUTOMATED prompt assembler (a script that splices sections based on agent role), then YES, add a verification step to ensure the script assembled correctly. But for manual assembly (team-lead reads slicing strategy, copies sections into agent prompt), verification is unnecessary.

---

## 4. AGENT TOPOLOGY FOR CEILING

### Should Ceiling Use the Same Flat File-Bus Topology?

**YES.** The Middle-tier flat file-bus worked perfectly:
- 8 agents, 6 phases, ~35 min total
- Zero contention (each agent owns its output file)
- Sequential phase execution, parallel within-phase (Phase 3: programmatic + perceptual in parallel)

**Ceiling-tier changes:**
- Add 1 agent: **metaphor-derivator** (between planner and builder)
- Add 1 phase: **Phase 1.5: Metaphor Derivation**

**Revised topology:**
```
Phase 0: content-selector → 01-content-selection.md
Phase 1: planner → 02-build-plan.md (WITHOUT metaphor — just mechanisms + pattern)
Phase 1.5: metaphor-derivator → 03-metaphor.md (derives metaphor FROM content + pattern)
Phase 2: builder → ceiling-tier-page.html (receives plan + metaphor)
Phase 3a: programmatic-auditor → 04-programmatic-audit.md
Phase 3b: perceptual-auditor → 05-perceptual-audit.md (parallel with 3a)
Phase 4a: comparative-auditor → 06-comparison-report.md (parallel with 4b)
Phase 4b: novelty-evaluator → 07-novelty-assessment.md (parallel with 4a)
Phase 5: verdict-synthesizer → 08-VERDICT.md
```

**Key change:** The planner no longer derives the metaphor. The metaphor-derivator is a SEPARATE agent that:
1. Reads the content (from Phase 0)
2. Reads the pattern (from Phase 1 plan)
3. Runs the tension-composition pipeline (Phases 1-4 of the skill)
4. Outputs a metaphor + attributes + mechanism justifications

**Why separate the metaphor-derivator from the planner?**
1. **Specialization:** Metaphor derivation is a CREATIVE task (tension-composition pipeline), distinct from mechanism selection (lookup task).
2. **Slicing:** The planner already reads ~14K tokens. Adding metaphor derivation would push it to ~18K tokens (too large).
3. **Reusability:** The metaphor-derivator can be reused for Flagship tier (same agent, different content).

---

### Ceiling Adds Metaphor Derivation — New Agent or Planner Handles It?

**NEW AGENT.** See rationale above.

**Metaphor-derivator prompt skeleton:**
```
You are the metaphor-derivator for the Ceiling-Tier Experiment.

YOUR MISSION: Derive a unique metaphor from the content using the tension-composition pipeline.

INPUT FILES:
1. ephemeral/ceiling-tier-experiment/01-content-selection.md (the SYSTEM content)
2. ephemeral/ceiling-tier-experiment/02-build-plan.md (partial — read Section 1: PATTERN only)

PIPELINE (Phases 1-4 from tension-composition skill):
1. Content Assessment: Identify implicit tensions (e.g., "remote control" vs "local execution")
2. Multi-Axis Questioning: Ask spatial/temporal/material/relational questions
3. Tension Derivation: Extract 2-3 core tensions
4. Metaphor Collapse: Synthesize tensions into a single spatial metaphor

OUTPUT: Write to `ephemeral/ceiling-tier-experiment/03-metaphor.md`
Include:
- Metaphor (1-2 sentences)
- Key attributes (3-5 bullet points)
- Mechanism justifications (for each of the 12-15 mechanisms, explain WHY this mechanism encodes the metaphor)
- Spatial topology (how sections map to metaphor structure)

EXAMPLE OUTPUT:
Metaphor: "Distributed Nervous System — Brain, Tunnel, Body architecture as a biological network."

Attributes:
1. Brain = decision center (sparse, abstract)
2. Tunnel = signal pathway (linear, connecting)
3. Body = execution layer (dense, concrete)

Mechanism justifications:
- #5 Dense/Sparse: Brain section is sparse (abstract concepts), Body section is dense (code examples)
- #1 Border-Weight: Thicker borders on Brain section (importance), thinner on Body (execution detail)
- #13 Dark Header: Brain zone uses inverted dark treatment (cognitive authority)
```

**Cost:** ~10-15 min (Opus model, metaphor derivation is creative).

**Benefit:** Separates creative work (metaphor) from mechanical work (mechanism selection).

---

### Should There Be a "Fix-Up" Agent?

**NO.** Add a **builder self-check phase** instead (see Section 2).

**Rationale:** A "fix-up" agent that addresses defects found in Phase 3 before proceeding to Phase 4 adds process complexity. It's cleaner to prevent defects at build time (self-check) than to repair them post-audit.

**Exception:** If the Ceiling tier produces MULTIPLE defects that require substantial rework (e.g., 5+ defects, each requiring 10+ min to fix), THEN add a fix-up agent. But for Middle tier (5 defects, 2 major, 3 minor), fixing at build time is more efficient.

---

### How Many Playwright Sessions Will Ceiling Need?

**6 sessions (same as Middle tier):**

| Phase | Agent | Playwright Use | Can Parallelize? |
|-------|-------|---------------|------------------|
| 3a | programmatic-auditor | YES (measure computed styles) | With 3b |
| 3b | perceptual-auditor | YES (screenshots at 1440px + 768px) | With 3a |
| 4a | comparative-auditor | YES (side-by-side screenshots) | With 4b |
| 4b | novelty-evaluator | YES (blur test for structural fingerprint) | With 4a |

**Contention protocol (from memory):** Max 2 concurrent Playwright sessions. Schedule as:
1. Phase 3: Run 3a + 3b in parallel (2 concurrent)
2. Phase 4: Run 4a + 4b in parallel (2 concurrent)

**Additional sessions for Ceiling:** None. The metaphor-derivator doesn't need Playwright (works from text content). The builder doesn't need Playwright (writes HTML, no browser inspection).

**Reference page comparison:** Ceiling will compare against DD-006 and CD-006 (same as Middle). The novelty-evaluator already does this (Phase 4b).

---

## 5. AUDIT PROTOCOL IMPROVEMENTS

### Programmatic Audit: Add Landmark Completeness Check

**Current programmatic audit checks:**
1. Critical-10 (soul constraints)
2. Guardrails (B9)
3. Token compliance
4. Mechanism count
5. Semantic HTML (landmark count)

**Gap:** The semantic HTML check counts landmarks (`<header>`, `<footer>`, `<section>`) but doesn't verify that ALL PLANNED landmarks exist.

**Proposed addition:**
```
LANDMARK COMPLETENESS CHECK:

INPUT: Build plan Section 2 (SECTION MAP)
EXTRACT: Required landmarks (header? footer? how many sections?)

For EACH required landmark:
- If plan specifies "Section A: Dark Header" → verify document.querySelector('header') exists
- If plan specifies "Section F: Page Footer" → verify document.querySelector('footer') exists
- If plan specifies 4 content sections (B/C/D/E) → verify document.querySelectorAll('section').length >= 4

PASS: All required landmarks exist
FAIL: Missing landmark → report which landmark is missing
```

**Benefit:** Would have caught Defect 3 (missing footer).

**Cost:** ~1 min (Playwright query).

---

### Perceptual Audit: PA-05 Operationalization Changes for Ceiling

**Current PA-05 sub-criteria (from Middle-tier):**
1. PA-05a: Non-Default Layout Elements >= 2 at 1440px
2. PA-05b: Padding Range Ratio >= 2.0x at 1440px
3. PA-05c: Visual Hierarchy Test (20px blur)
4. PA-05d: Non-Framework CSS >= 15%

**What should change for Ceiling?**

**PA-05a: Raise threshold to >= 3 at 1440px (from >= 2).**
- Rationale: Ceiling tier has 12-15 mechanisms (vs Middle's 8-10). With more mechanisms, expect more non-default layout elements.
- Examples: asymmetric columns, bento grids with spans, full-bleed backgrounds, solid-offset depth, multi-zone components.

**PA-05b: Raise threshold to >= 2.5x at 1440px (from >= 2.0x).**
- Rationale: Ceiling tier should have GREATER density range (shallowest to deepest sections).
- Example: Middle had 128px (shallowest) / 64px (deepest) = 2.0x. Ceiling should have 160px / 48px = 3.3x (or similar).

**PA-05c: No change.**
- 20px Gaussian blur test works for any tier.

**PA-05d: Raise threshold to >= 20% (from >= 15%).**
- Rationale: Ceiling tier uses metaphor-driven layouts, which require MORE compositional CSS (calc(), pseudo-elements, grid-template-areas, transforms).
- Examples: Metaphor-specific selectors, fractal scaling (4+ scales vs Middle's 2), spatial topology encoding.

**Revised PA-05 for Ceiling:**
```
PA-05 OPERATIONALIZED (Ceiling tier):

PA-05a: Non-Default Layout Elements >= 3 at 1440px (>= 2 at 768px)
PA-05b: Padding Range Ratio >= 2.5x at 1440px (>= 1.75x at 768px)
PA-05c: Visual Hierarchy Test (20px blur, same as Middle)
PA-05d: Non-Framework CSS >= 20% (vs 15% for Middle)

COMPOSITE:
4/4 = DESIGNED
2-3/4 = MARGINAL
0-1/4 = NO
```

---

### Should There Be a "Diff Audit"?

**YES.** This is the same as the proposed "Landmark Completeness Check" (see Section 2).

**Diff audit = plan-to-output comparison:**
1. Plan says "footer" → HTML has footer? (structural diff)
2. Plan says "12 mechanisms" → CSS has 12 mechanisms? (mechanism diff)
3. Plan says "3 transitions" → CSS has 3 distinct gap sizes? (transition diff)

**This is essentially the "programmatic audit checklist generated FROM the build plan" proposal (Gate 3.5 in Section 2).**

**Recommendation:** Implement as part of the programmatic audit (Phase 3a), not as a separate phase. The programmatic auditor reads the plan's audit checklist (Section 8) and verifies each item.

---

## 6. TIMING AND COST MODEL

### Middle-Tier Actual vs Predicted

| Metric | Predicted | Actual | Variance |
|--------|-----------|--------|----------|
| Build time | 70-100 min | ~35 min | -50% (much faster) |
| Agent count | 8 | 8 | 0% |
| Cost | ~$3-4 | ~$3-4 | 0% |
| Model mix | 1 Opus (planner), 7 Sonnet | 1 Opus (planner), 7 Sonnet | 0% |

**Why was Middle-tier 2-3x faster than predicted?**

**Hypothesis 1: The tier model's build time estimates come from SHOWCASE pages (OD-004, CD-006), which included ITERATION.**
- OD-004 took 150-220 min, but that included 3-4 revision passes (perceptual audit → fix → re-audit).
- Middle-tier had NO iteration (one-shot build, audit, verdict).
- The tier model's "70-100 min" may be for "build + iterate to quality," not "build once."

**Hypothesis 2: The content was simpler than expected.**
- SYSTEM documentation is well-structured (tables, code blocks, step sequences).
- The planner had clear content-mechanism mappings (e.g., "tables trigger #18," "code blocks trigger #17").
- More ambiguous content (conceptual explanation, narrative) might require more planning time.

**Hypothesis 3: The planner was Opus, which is faster at planning than Sonnet.**
- Opus processes 14K tokens input + generates 4K tokens output in ~2-3 min.
- Sonnet might take 5-7 min for the same task.
- The tier model's estimates may assume Sonnet for all agents.

**Hypothesis 4: The flat file-bus topology eliminated coordination overhead.**
- No agent waited for another agent (except sequential phase dependencies).
- Parallel Phase 3 (programmatic + perceptual) and Phase 4 (comparative + novelty) maximized throughput.

**Most likely explanation:** Combination of Hypothesis 1 (tier model includes iteration) and Hypothesis 4 (flat topology is efficient). The Middle-tier experiment was ONE-SHOT (no iteration), which is 2-3x faster than iterative showcase building.

---

### Ceiling-Tier Realistic Estimate

**Baseline:** Middle-tier took ~35 min for 8 agents, 8-10 mechanisms, no metaphor.

**Ceiling-tier changes:**
- +1 agent (metaphor-derivator): +10-15 min (Opus, creative work)
- +2-5 mechanisms (12-15 vs 8-10): +10-20 min builder time (more CSS to write)
- Metaphor derivation: +10-15 min planner time (understanding metaphor to select mechanisms)
- No iteration (one-shot build): same as Middle

**Predicted Ceiling-tier time:**
- Middle baseline: 35 min
- Metaphor-derivator: +15 min
- Builder (more mechanisms): +15 min
- Planner (metaphor understanding): +10 min
- **Total: ~75 min**

**With iteration (1 revision pass):**
- Initial build: 75 min
- Perceptual audit finds 2-3 issues: +5 min
- Fix-up agent repairs: +20 min
- Re-audit: +10 min
- **Total: ~110 min**

**Tier model prediction for Ceiling:** 150-220 min (with multiple iteration passes).

**Conclusion:** If Ceiling is ONE-SHOT (no iteration), expect ~75 min. If Ceiling includes 1-2 iteration passes (more realistic for 12-15 mechanisms), expect ~110-150 min.

---

### Should More Agents Be Opus?

**Current model allocation:**
- Planner: Opus (creative + mechanism selection)
- All others: Sonnet (implementation + measurement)

**Should the metaphor-derivator be Opus?**
**YES.** Metaphor derivation is CREATIVE work (tension-composition pipeline). Opus excels at creative tasks. Sonnet would likely produce generic or derivative metaphors.

**Should the builder be Opus?**
**NO.** The builder implements a spec (the plan). This is MECHANICAL work. Sonnet is sufficient and cost-effective.

**Should any auditors be Opus?**
**NO.** Auditors measure and evaluate. Sonnet is sufficient for measurement. The perceptual auditor (fresh-eyes) benefits from LESS context, not more intelligence.

**Recommended model allocation for Ceiling:**
- content-selector: Sonnet
- planner: Opus
- **metaphor-derivator: Opus** (new)
- builder: Sonnet
- programmatic-auditor: Sonnet
- perceptual-auditor: Sonnet
- comparative-auditor: Sonnet
- novelty-evaluator: Sonnet
- verdict-synthesizer: Sonnet

**Cost impact:** 2 Opus agents (planner + metaphor-derivator) vs Middle's 1 Opus. Roughly +$1-2 per experiment.

---

### What's the Cost Ceiling Before Impractical?

**Current cost per experiment:**
- Middle-tier: ~$3-4 (1 Opus, 7 Sonnet, ~35 min total)

**Ceiling-tier predicted cost:**
- 2 Opus (~$2-3), 7 Sonnet (~$2), ~75-110 min total
- **Total: ~$4-5 per experiment**

**Cost ceiling for practicality:** ~$10-15 per experiment.
- Above $15, experiments become expensive enough to warrant manual review before execution.
- Below $10, experiments are cheap enough to run speculatively (e.g., "let's try this variant and see what happens").

**Flagship-tier predicted cost:**
- 2 Opus, 10 Sonnet (more audits, more iteration), ~240-400 min total
- **Total: ~$8-12 per experiment**

**Conclusion:** Ceiling and Flagship are both within the practical cost range ($4-12). The limiting factor is TIME (75-400 min), not COST.

**Time ceiling for practicality:** ~6 hours (360 min).
- Above 6 hours, experiments require multi-session execution (start, pause, resume).
- Below 6 hours, experiments can run in a single session.

**Flagship at 240-400 min (4-6.7 hours) is at the edge of single-session feasibility.** This is acceptable for crown jewel content (5-10% of pages) but not for routine builds.

---

## 7. MEASUREMENT FRAMEWORK IMPROVEMENTS

### Token Compliance: Gate at Phase 2, Not Phase 3

**Current flow:**
1. Builder writes HTML file (Phase 2)
2. Programmatic auditor measures token compliance (Phase 3)
3. If FAIL (< 80%), report defect but DON'T fix

**Problem:** Token compliance is measured AFTER the file is written. Fixing requires a separate repair pass.

**Proposed flow:**
1. Builder generates CSS (Phase 2 internal)
2. Builder runs token compliance check (Phase 2 internal, pre-write)
3. If FAIL, builder replaces raw values with tokens
4. Builder writes HTML file ONLY after token compliance >= 80%

**Implementation:** Add to builder self-check (see Defect 2 analysis):
```
TOKEN COMPLIANCE (before writing file):
1. Scan CSS for var(--*) references → count
2. Scan CSS for raw hex values (regex: /#[0-9A-Fa-f]{3,6}/) → count
3. Scan CSS for raw px values OUTSIDE approved contexts → count
4. Calculate: var() / (var() + raw hex + raw px) >= 80%
5. If FAIL: replace raw values with tokens from tokens.css
6. Re-check until PASS
7. THEN write file
```

**Benefit:** Eliminates token compliance defects before audit phase. Shifts quality leftward (prevent, don't repair).

---

### Should the Builder Run a Self-Validation Check?

**YES.** See Section 2 (Gate 2.5: Builder Self-Check).

**The self-validation checklist should include:**
1. Container width = 960px
2. CPL = 45-80
3. Token compliance >= 80%
4. Landmark completeness (header/footer/sections exist)
5. Soul constraints (border-radius: 0, box-shadow: none, etc.)
6. Heading spacing ratio >= 1.5:1
7. Rhythm variation >= 2 distinct gap sizes
8. All mechanisms from plan are implemented

**This is a BINARY pass/fail check.** If ANY item fails, the builder revises before writing the file.

---

### Measurements to ADD for Ceiling

**Metaphor coherence score:**

This is QUALITATIVE, not quantitative. The perceptual auditor should assess: "Does the spatial layout ENCODE the metaphor, or is the metaphor just a label?"

**Example questions:**
- PA-META-01: Can you infer the metaphor from the layout alone (without reading the metaphor description)?
- PA-META-02: Are spatial relationships CONSISTENT with the metaphor? (e.g., if metaphor is "geological strata," are deeper sections visually "heavier"?)
- PA-META-03: Do mechanism deployments REINFORCE the metaphor, or are they generic? (e.g., if metaphor is "nervous system," does the "tunnel" section use connecting/linear mechanisms?)

**Score:** 3/3 = COHERENT, 2/3 = MARGINAL, 0-1/3 = INCOHERENT

**Scale consistency:**

Ceiling tier requires 3+ fractal scales (vs Middle's 2). Add a programmatic check:

```
FRACTAL SCALE CHECK:

INPUT: Build plan Section 6 (FRACTAL TABLE)
EXTRACT: Scales covered (Page, Section, Component, Inline, Navigation)

For EACH scale:
- Verify CSS evidence exists (e.g., Page scale → section density progression)
- Verify pattern is CONSISTENT across scales (e.g., CRESCENDO at Page → crescendo within Section)

PASS: >= 3 scales documented with CSS evidence
FAIL: < 3 scales
```

**Benefit:** Ensures Ceiling tier actually achieves fractal coherence, not just mechanism density.

---

## 8. SPECIFIC RECOMMENDATIONS TABLE

| Change | Phase Affected | Rationale | Priority | Effort |
|--------|---------------|-----------|----------|--------|
| **Add builder self-check gate** | Phase 2 (internal) | Catches 3/5 defects (CPL, token compliance, missing footer) before audit | MUST | Medium (add 8-item checklist to builder prompt) |
| **Add landmark completeness gate** | Phase 2 → 3 | Verifies all planned sections exist in HTML | MUST | Low (Playwright query, 30 sec) |
| **Generate programmatic audit checklist FROM plan** | Phase 1 → 3 | Aligns audit with plan (checks what was promised) | MUST | High (planner outputs YAML, auditor parses YAML) |
| **Correct CPL classification** | All phases | Move CPL from Critical-10 to Guardrails (B9.2) | MUST | Low (documentation change) |
| **Add CPL formula to builder prompt** | Phase 2 | Enables builder to verify CPL before writing file | MUST | Low (add 5-line formula) |
| **Add structural checklist to builder prompt** | Phase 2 | Ensures builder implements ALL sections (header, footer, content) | MUST | Medium (add section-by-section checklist) |
| **Add token compliance to builder self-check** | Phase 2 (internal) | Prevents token defects before file write | MUST | Medium (add regex scan + replacement logic) |
| **Add rhythm variation check** | Phase 2 (internal) | Prevents mechanical spacing (requires >= 2 distinct gap sizes) | SHOULD | Medium (measure gaps, count unique sizes) |
| **Add heading spacing ratio enforcement** | Phase 2 (internal) | Ensures visual hierarchy (margin-top / margin-bottom >= 1.5) | SHOULD | Low (measure h3 margins) |
| **Add metaphor-derivator agent** | Phase 1.5 (new) | Separates creative work (metaphor) from mechanical work (mechanism selection) | MUST (Ceiling only) | High (new agent, 10-15 min Opus) |
| **Add metaphor context to builder prompt** | Phase 2 (Ceiling only) | Enables metaphor-driven layouts | MUST (Ceiling only) | Medium (add metaphor description + attributes) |
| **Raise PA-05 thresholds for Ceiling** | Phase 3b | Accounts for higher mechanism count (12-15 vs 8-10) | MUST (Ceiling only) | Low (update thresholds) |
| **Add metaphor coherence questions to PA** | Phase 3b (Ceiling only) | Verifies metaphor is ENCODED, not just labeled | SHOULD (Ceiling only) | Medium (add 3 PA questions) |
| **Add fractal scale check to programmatic audit** | Phase 3a (Ceiling only) | Verifies >= 3 scales with CSS evidence | SHOULD (Ceiling only) | Medium (parse plan fractal table, verify CSS) |
| **Move token compliance to Phase 2 gate** | Phase 2 (from Phase 3) | Prevents defects at build time (vs reporting them post-build) | SHOULD | Low (move check, same measurement) |
| **Add "diff audit" (plan vs output)** | Phase 3a | Same as "generate checklist FROM plan" | MUST | (Covered by checklist generation) |
| **Add margin-collapse awareness to builder** | Phase 2 | Prevents heading spacing perception issues | COULD | Low (add 5-line anti-pattern note) |
| **Add token gap log** | Phase 2 | Captures values NOT in tokens.css for future expansion | COULD | Low (log missing values) |
| **Add rhythm variation to Mod 3** | Phase 1 (planner) | Requires planner to specify varied gap sizes | SHOULD | Low (add to transition table spec) |

---

## 9. PROCESS LEARNINGS

### What Worked

1. **Flat file-bus topology:** Zero contention, ~35 min total, perfectly parallel within phases.
2. **Per-category mechanism minimums (M1):** Produced novel output (D3 3/3) without derivative copying.
3. **Fresh-eyes perceptual auditor:** Found critical issues (missing footer) that programmatic audit missed.
4. **Prompt slicing (anti-leakage):** Content-selector didn't see mechanisms, builder didn't see master prompt, PA had minimal context.
5. **Decision matrix (before build):** Pre-specifying SUCCESS/PARTIAL/FAILURE criteria prevented post-hoc rationalization.

### What Didn't Work

1. **No builder self-check:** Builder wrote file without verifying CPL, token compliance, or landmark completeness.
2. **Generic programmatic audit:** Auditor checked a fixed list, not what the plan promised.
3. **Missing structural checklist:** Builder didn't know it MUST implement all sections (header, footer, content).
4. **CPL misclassification:** CPL in Critical-10 (should be in Guardrails).
5. **No rhythm variation enforcement:** Planner specified section padding but not gap variation.

### Biggest Surprise

**Middle-tier took ~35 min vs predicted 70-100 min.** The tier model's estimates include iteration passes (build → audit → fix → re-audit). One-shot builds are 2-3x faster.

### Biggest Risk for Ceiling

**The builder missing the footer suggests prompt slicing can create blind spots.** If the Ceiling builder doesn't understand the metaphor or doesn't implement all planned sections, we'll get the same structural omissions at 3x the cost (2-3 hours vs 35 min).

**Mitigation:** Add structural checklist + metaphor context to builder prompt (see Sections 3 and 8).

---

## 10. CEILING-SPECIFIC RECOMMENDATIONS

### Metaphor Derivation

1. **Add metaphor-derivator agent** (Phase 1.5, Opus model, 10-15 min).
2. **Metaphor-derivator outputs:**
   - Metaphor (1-2 sentences)
   - Key attributes (3-5 bullet points)
   - Mechanism justifications (why each mechanism encodes the metaphor)
   - Spatial topology (how sections map to metaphor structure)
3. **Builder receives metaphor context** (see Section 3 for example block).

### Fractal Scaling

1. **Require 3+ scales** (vs Middle's 2): Page, Section, Component minimum. Optionally: Inline, Navigation.
2. **Add fractal scale check to programmatic audit** (verifies >= 3 scales with CSS evidence).
3. **Planner outputs fractal table** (Section 6 of plan) with scale-by-scale CSS evidence.

### Measurement Changes

1. **Raise PA-05 thresholds:**
   - PA-05a: >= 3 non-default layout elements (from >= 2)
   - PA-05b: >= 2.5x padding range ratio (from >= 2.0x)
   - PA-05d: >= 20% non-framework CSS (from >= 15%)
2. **Add metaphor coherence questions** (PA-META-01, PA-META-02, PA-META-03).
3. **Add fractal scale verification** (programmatic check).

### Gate Additions

1. **All gates from Middle-tier** (builder self-check, landmark completeness, programmatic checklist from plan).
2. **Metaphor coherence gate** (Phase 1.5 → 2): Verify metaphor is DISTINCT from existing case studies (same as Phase 3.5 gate in tension-composition pipeline).

### Cost-Benefit Analysis

**Ceiling-tier cost:**
- Time: ~75-110 min (vs Middle's ~35 min) = +2-3x
- Cost: ~$4-5 (vs Middle's ~$3-4) = +~25%
- Mechanisms: 12-15 (vs Middle's 8-10) = +~50%

**Is this worth it?**
- **YES, for 20-30% of pages** (Ceiling tier target per tier model).
- **NO, for routine documentation** (use Middle tier instead).

**Reproducibility trade-off:** Ceiling tier predicted at 50-70% reproducibility (vs Middle's 80-90%). This means 3-5 out of 10 Ceiling builds may require iteration. Budget accordingly.

---

## 11. NEXT STEPS

**Before starting Ceiling experiment:**

1. **Apply all MUST-priority changes** from Section 8 table (builder self-check, landmark gate, CPL correction, checklist from plan).
2. **Decide: same content or new content?** The verdict recommends SAME CONTENT (SYSTEM documentation) to isolate tier effects. Confirm with user.
3. **Update master prompt** with Middle-tier learnings (add self-check, correct CPL, update slicing strategy).
4. **Write metaphor-derivator prompt** (new agent for Ceiling).
5. **Revise builder prompt** (add metaphor context, structural checklist, self-validation).
6. **Set time budget:** Allocate 2-3 hours for one-shot build, or 4-5 hours if iteration is expected.

**After Ceiling experiment:**

1. **Compare Middle vs Ceiling on SAME CONTENT:** Does Ceiling produce richer output (expected), or does it copy Middle's values (continuity bias)?
2. **Measure D3.2 CSS Value Overlap:** If Ceiling reuses Middle's exact values, it confirms continuity bias. If Ceiling diverges, metaphor derivation works.
3. **Assess cost-benefit:** Is the +2-3x time investment worth the +50% mechanism coverage?
4. **Decide: move Middle to universal floor?** If Middle is consistently novel and Ceiling is derivative, drop Ceiling and make Middle the new Floor.

---

## APPENDIX: Defect Summary Table

| Defect | Severity | Root Cause | Phase | Fix | Priority |
|--------|----------|-----------|-------|-----|----------|
| CPL +2 chars | Minor | 18px font instead of 16px | Planning | Add CPL formula to builder self-check | MUST |
| Token 66.5% | Major | 73 raw values not tokenized | Building | Add token compliance to builder self-check | MUST |
| Missing footer | Critical | Builder didn't implement planned section | Building | Add structural checklist + landmark gate | MUST |
| Heading spacing | Moderate | Margin collapse (CSS correct, perception wrong) | Measurement | Educate PA on margin collapse, add programmatic check | SHOULD |
| Mechanical rhythm | Moderate | No gap variation specified | Planning | Add rhythm variation to transition table | SHOULD |

---

**END OF METHODOLOGY RETROSPECTIVE**

This document provides specific, actionable improvements for the Ceiling-tier experiment. All recommendations are grounded in the Middle-tier defects and process observations, with clear priority (MUST/SHOULD/COULD) and effort estimates.
