# Skill Improvement Analysis: Middle-Tier Experiment Retrospective

**Date:** 2026-02-16
**Analyst:** skill-analyst
**Source Context:** Middle-tier experiment results, tension-composition skill (839 lines), perceptual-auditing skill (736 lines)

---

## EXECUTIVE SUMMARY

The Middle-tier experiment validated M1 (per-category mechanism minimums) and revealed 3 critical skill modification needs:

### Validated Modifications (Apply Immediately)
1. **M1 — Per-Category Minimums:** Replace "sample 2-4 mechanisms" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+). ALL 11 research agents + Middle experiment confirm this is THE limiting specification.

2. **PA-05 Operationalization:** Refine 4 sub-criteria based on experiment validation. All 4 passed at Middle tier — small calibration adjustments recommended.

### New Requirements (Based on Experiment Defects)
3. **Rhythm Variation Requirement:** Add 3-transition minimum to prevent metronomic spacing (perceptual audit: "spacing patterns repeat without variation").

4. **Landmark Completeness Check:** Add binary footer verification (missing footer was WOULD-NOT-SHIP finding).

5. **Heading Spacing Ratio Enforcement:** Make 1.5:1 ratio (above/below) a BINARY rule, not judgment (violation weakened hierarchy).

### Token Compliance Issue (Build Process Gap)
6. **Token Compliance Self-Check:** 66.5% vs 80% target suggests pipeline lacks enforcement. Consider adding tokenization verification phase.

---

## SECTION 1: TENSION-COMPOSITION SKILL MODIFICATIONS

### 1.1 M1: Per-Category Minimums (VALIDATED — Apply Permanently)

**Current text (lines 81-98, 909-930):**

```markdown
**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit...

**For Middle-tier pages (SKIP Phases 1-3):**

You do NOT derive a metaphor. Instead, select a DENSITY PATTERN.
...
**Critical principle:** Middle-tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories), not metaphor.
```

**Problem:** "Sample 2-4 mechanisms" language appears earlier (NOT visible in the 200-line excerpt, but referenced in build plan M1 override). The skill currently has conflicting guidance:
- Phase 3 metaphor selection logic mentions mechanism sampling
- Phase 4.0 mentions "sample 2-4" in mechanism extraction context
- The tier model describes 8-10 for Middle but doesn't enforce per-category coverage

**Proposed replacement (3 locations):**

**LOCATION 1: Phase 0D Tier Classification (around line 68-98)**

```markdown
**Tier classification:**

| Content Signal | Tier | Route | Mechanism Coverage |
|---------------|------|-------|-------------------|
| <200 words, API reference, config table, changelog | **Floor** | Track 1 templates | 0 custom (component assembly only) |
| Tutorial, guide, overview, comparison, narrative | **Middle** | Phase 4.0 pattern | **Minimum: 1 per category** (S/H/C/D/N) |
| Genuine structural tension (Addition Test = NO) | **Ceiling** | Full pipeline | **Minimum: 1 per category + 2 combinations** |
| Anchor content, design system showcase | **Flagship** | Full pipeline + multi-pass | **Minimum: 1 per category + 3 combinations + multi-pattern** |

**PER-CATEGORY MINIMUM (Middle-tier and above):**

For EACH of the 5 mechanism categories, deploy AT LEAST ONE mechanism that serves THIS content:

| Category | Minimum | Example Mechanisms |
|----------|---------|-------------------|
| **Spatial** | 1+ | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid |
| **Hierarchy** | 1+ | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale |
| **Component** | 1+ | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block |
| **Depth/Emphasis** | 1+ | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap |
| **Structure/Nav** | 1+ | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table |

**CRITICAL:** The goal is vocabulary BREADTH (coverage across all 5 categories), not technique COUNT (hitting a target number). Peak richness occurs at maximum content-mechanism fit, not maximum technique deployment.

**Natural landing by tier:**
- Floor: 0 custom mechanisms (Track 1 component templates)
- Middle: 5-10 mechanisms (1+ per category produces natural 5-10 range)
- Ceiling: 8-12 mechanisms (1+ per category + 2 combinations)
- Flagship: 12-15 mechanisms (1+ per category + 3+ combinations + multi-pattern composition)

**Provenance:** These minimums were validated by:
- Richness research (11 agents): ~60-85% of richness gap addressable through mechanism deployment
- Rigidity research (11 agents): "sample 2-4" identified as THE limiting specification by all agents
- Middle-tier experiment: 12 mechanisms (S:1, H:3, C:4, D:2, N:3) achieved PA-05 DESIGNED (4/4) and D3 NOVEL (3/3)
```

**LOCATION 2: Phase 4.0 Mechanism Extraction (around lines 909-930)**

```markdown
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

For EACH of the 5 mechanism categories, identify AT LEAST ONE mechanism that serves THIS content:

| Category | Mechanisms Available | Minimum | Justification Required |
|----------|---------------------|---------|----------------------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ | Why does THIS content need spatial variation? |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ | What hierarchy does THIS content encode? |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ | What component patterns fit THIS content? |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ | Where does THIS content need focal points? |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ | What structural elements does THIS content require? |

**Justification requirement (MANDATORY):**
- For EACH mechanism you deploy: one sentence on WHY it serves THIS content at THIS location
- For AT LEAST 3 mechanisms you considered but REJECTED: one sentence on WHY they don't fit

**Example (Middle-tier documentation page):**

DEPLOYED:
- **Spatial (#5 Dense/Sparse):** Technical content benefits from dense code sections alternating with sparse prose explanations — creates scanning rhythm
- **Hierarchy (#1 Border-Weight):** Security threat levels need visual encoding — 4px critical, 3px important, 1px informational
- **Component (#17 Code Blocks):** 8 code examples are content anchors — readers scan for executable snippets
- **Depth/Emphasis (#7 Zone Backgrounds):** Architecture section needs focal treatment — black diagram container creates visual centerpiece
- **Structure/Nav (#13 Dark Header):** Product identity requires editorial authority — dark header distinguishes from blog-post aesthetic

REJECTED:
- **#16 Drop Cap:** No narrative opening — content is reference documentation, not story
- **#15 Bento Grid:** Content is sequential (installation steps) not parallel (comparison)
- **#6 Width Variation:** Container must stay at 960px for readability — no content justifies narrowing
```

**LOCATION 3: Remove/Replace "Sample 2-4" Language**

Search for "sample 2-4" in the skill file and replace ALL instances with per-category minimum language. Based on the build plan's M1 override, this language likely appears in:
- Phase 3 metaphor selection context (mechanism feasibility checks)
- Phase 4 mechanism extraction introduction
- Any tiebreaker or selection protocols

**Why this works:**
1. **Addresses the limiting specification:** All 11 research agents identified "sample 2-4" as the constraint
2. **Preserves tier distinction:** Floor (0) < Middle (5-10) < Ceiling (8-12) < Flagship (12-15)
3. **Enforces breadth over depth:** Can't satisfy minimum by deploying 5 hierarchy mechanisms — must cover all categories
4. **Natural count emergence:** 1+ per category naturally produces 5-10 range (Middle experiment deployed 12 with S:1, H:3, C:4, D:2, N:3)
5. **Content-driven selection:** Each category requires justification — prevents mechanical box-checking

---

### 1.2 Rhythm Variation Requirement (NEW — Prevents Metronomic Spacing)

**Problem identified:** Perceptual audit PA-17 and PA-41 flagged "spacing patterns repeat without variation" and "metronomic rather than musical" rhythm. The Middle-tier page had consistent section spacing (48-80px gaps) but NO deliberate variation to create interest.

**Current state:** The skill has NO minimum rhythm variation requirement. Phase 4.2B Pacing Prediction asks about rhythm but doesn't enforce minimums.

**Proposed addition (Phase 4.2B Pacing Prediction, after line 1100):**

```markdown
**3. Rhythm Variation Requirement (MANDATORY for Middle-tier+):**

**BINARY RULE:** Your page MUST include at least 3 DIFFERENT transition types between major sections.

**Transition Type Taxonomy (from Phase 4.6):**
- **SMOOTH** (48px + 1px border): Same-axis continuation
- **BRIDGE** (64px + breathing zone + text): Cross-axis shift with context
- **BREATHING** (80px + 3px border): Major axis shift

**Minimum requirement:** Deploy AT LEAST 3 transition types across your full-page sequence.

**Example (6 sections, 5 transitions):**
```
Section A → Section B: SMOOTH (48px, both overview content)
Section B → Section C: BRIDGE (64px + callout, overview → architecture)
Section C → Section D: BREATHING (80px + 3px border, architecture → installation)
Section D → Section E: SMOOTH (48px, both step-by-step)
Section E → Section F: BREATHING (80px + 3px border, installation → security)
```

**Count:** 2 SMOOTH + 1 BRIDGE + 2 BREATHING = 3 types ✓ PASS

**Failing example (monotonous):**
```
All transitions: SMOOTH (48px, no variation)
```
**Count:** 1 type (SMOOTH repeated 5 times) ✗ FAIL

**WHY THIS MATTERS:** Uniform spacing creates mechanical rhythm. The reader's eye expects variation. Musical rhythm has beats AND rests. Your spacing rhythm needs the same — not random gaps, but TYPED gaps serving different semantic transitions.

**How to create variation:**
1. **Identify section relationships:** Which sections continue the same topic (SMOOTH)? Which shift topics (BRIDGE)? Which change modes entirely (BREATHING)?
2. **Map transitions to types:** Same-axis = SMOOTH, cross-axis = BRIDGE, distant-axis = BREATHING
3. **Count distinct types:** If you have 6 sections but only 1 transition type, your rhythm is metronomic
4. **Adjust deliberately:** Change at least 2 transitions to create 3+ types minimum

**Perceptual impact:** Middle-tier experiment failed PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony") because spacing was consistent but not varied. Adding rhythm variation requirement prevents this failure mode.
```

**Rationale:**
1. **Binary enforcement:** "At least 3 transition types" is measurable and auditable
2. **Addresses experiment defect:** Perceptual audit found monotonous rhythm
3. **Builds on existing vocabulary:** Uses SMOOTH/BRIDGE/BREATHING taxonomy from Phase 4.6
4. **Content-driven, not arbitrary:** Transition types match semantic relationships
5. **Prevents gaming:** Can't satisfy by making random gaps — must map to content structure

---

### 1.3 Landmark Completeness (NEW — Binary Footer Verification)

**Problem identified:** Middle-tier page missing footer was a WOULD-NOT-SHIP finding. Build plan specified #14 Footer Mirror, but perceptual audit saw no footer. Either implementation failed or CSS rendering issue.

**Current state:** The skill mentions #13 Dark Header and #14 Footer Mirror as mechanisms but has NO requirement that pages include structural landmarks.

**Proposed addition (Phase 4.7 Fractal Consistency GATE, after fractal table):**

```markdown
**Phase 4.7B: Landmark Completeness GATE (MANDATORY)**

**BEFORE proceeding to Phase 5, verify structural landmarks.**

**BINARY RULE:** Every page MUST have designed beginning, middle, and end.

**Landmark verification table (MANDATORY deliverable):**

| Landmark | Present? | CSS Evidence | Visual Treatment |
|----------|----------|--------------|-----------------|
| **HEADER** | YES / NO | [selector + key properties] | [dark/light, bordered, etc.] |
| **MAIN CONTENT SECTIONS** | YES / NO | [number of sections] | [zone backgrounds, transitions] |
| **FOOTER** | YES / NO | [selector + key properties] | [mirrors header? minimal? etc.] |

**Tier-calibrated requirements:**
- **Floor (Track 1 assembly):** Header + main content required. Footer optional.
- **Middle-tier+:** Header + main content + footer ALL required.
- **Ceiling/Flagship:** Header + main + footer + transition grammar between ALL landmarks.

**Concrete Middle-tier example:**

```css
/* HEADER (required) */
.page-header {
  background: var(--color-text);
  color: var(--color-background);
  padding: var(--space-16) var(--space-8);
  border-bottom: 3px solid var(--color-primary);
}

/* MAIN CONTENT (required) */
.page-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

/* FOOTER (required for Middle+) */
.page-footer {
  background: var(--color-text);
  color: var(--color-background);
  padding: var(--space-12) var(--space-8);
  border-top: 3px solid var(--color-primary);
  margin-top: var(--space-16);
}
```

**Passing criteria:**
- Table complete with YES for all tier-required landmarks
- CSS evidence provided for each landmark
- Visual treatment described (not just "exists")

**Failing criteria (any of):**
- Any required landmark marked NO
- No CSS evidence provided
- Footer specified in build plan but missing in HTML (Middle-tier experiment defect)

**WHY THIS MATTERS:** The perceptual audit flagged "page just stops" (PA-13) and "no visual ending" (PA-01, PA-09) as MAJOR flow issues. Readers need narrative closure. A page without footer feels unfinished — like a book missing its back cover.

**Implementation note:** If you specify a footer in your build plan (e.g., "#14 Footer Mirror"), you MUST verify it exists in the final HTML. Missing footer = implementation failure, not design choice.
```

**Rationale:**
1. **Binary enforcement:** "Does footer exist?" is verifiable in HTML
2. **Addresses experiment defect:** Missing footer was WOULD-NOT-SHIP
3. **Prevents incomplete implementations:** Build plan said footer, HTML lacked footer
4. **Natural tier escalation:** Floor optional → Middle required → Ceiling transitions
5. **Narrative closure:** Readers need visual ending, not abrupt stop

---

### 1.4 Heading Spacing Ratio Enforcement (NEW — Make 1.5:1 Minimum Binary)

**Problem identified:** Perceptual audit PA-SEM-01 noted "space above headings vs below headings: Appears roughly equal in most cases, should be 1.5:1 minimum." This violated heading-to-content association — headings should visually "belong" to the content below, not float between sections.

**Current state:** Guardrails (Phase 4.0, line 814-822) mention heading spacing but don't enforce the 1.5:1 ratio as a BINARY rule:

```markdown
| Guardrail | Value | Rationale |
|-----------|-------|-----------|
| Min heading-to-body gap | **16px** | Editorial standard for H1/H2 levels |
```

**Proposed modification (Phase 4.0 Guardrails table):**

**BEFORE:**
```markdown
| Min heading-to-body gap | **16px** | Editorial standard for H1/H2 levels |
```

**AFTER:**
```markdown
| **Heading spacing ratio** | **space-above / space-below >= 1.5** | Headings must visually belong to content below, not float between sections |
| Min heading-to-body gap (below) | **16px** | Absolute floor for separation |
| Min heading-to-section gap (above) | **24px** | Absolute floor for breathing (1.5× below minimum) |
```

**Add enforcement section (after guardrail table):**

```markdown
**HEADING SPACING ENFORCEMENT (BINARY CHECK):**

For EVERY heading (h2, h3, h4), verify the ratio:

```
space-above-heading / space-below-heading >= 1.5
```

**Concrete examples:**

**PASS:**
```css
h2 {
  margin-top: 48px;    /* Space above */
  margin-bottom: 24px; /* Space below */
  /* Ratio: 48 / 24 = 2.0 >= 1.5 ✓ */
}
```

**PASS (minimum):**
```css
h3 {
  margin-top: 24px;    /* Space above */
  margin-bottom: 16px; /* Space below */
  /* Ratio: 24 / 16 = 1.5 >= 1.5 ✓ */
}
```

**FAIL:**
```css
h2 {
  margin-top: 32px;    /* Space above */
  margin-bottom: 32px; /* Space below */
  /* Ratio: 32 / 32 = 1.0 < 1.5 ✗ */
}
```

**WHY THIS RATIO:** Headings introduce the content that follows. If space above = space below, the heading floats ambiguously between the previous section and the next. The 1.5:1 ratio creates clear association — the heading "pulls" toward its content.

**WCAG connection:** This isn't just aesthetic. WCAG 2.1 SC 1.4.12 (Text Spacing) requires sufficient spacing for readability. The 1.5:1 ratio ensures headings create hierarchy, not confusion.

**ENFORCEMENT:** Add to programmatic audit checks (Critical-10 or Guardrails). Measure computed `margin-top` and `margin-bottom` for all h2/h3/h4 elements. Flag violations.
```

**Rationale:**
1. **Binary enforcement:** Ratio is measurable (computed styles)
2. **Addresses experiment defect:** PA-SEM-01 flagged equal spacing
3. **Editorial standard:** Magazine typography uses 2:1 or 1.5:1 minimum
4. **Prevents floating headings:** Clear visual association = better hierarchy
5. **Programmatically auditable:** Can be checked in automated tests

---

### 1.5 Token Compliance Self-Check (NEW — Consider Adding Verification Phase)

**Problem identified:** Programmatic audit found 66.5% token compliance (145 var() refs / 218 total values) vs 80% target. This suggests the build pipeline doesn't enforce tokenization during construction.

**Current state:** The skill mentions tokens in Phase 0 (always-load) and Phase 4.0 (mechanism extraction) but has NO explicit tokenization self-check phase.

**Proposed addition (new Phase 4.9, between Phase 4.8 and Phase 5):**

```markdown
### Phase 4.9: Tokenization Self-Check (OPTIONAL — Recommended for Middle-tier+)

**PURPOSE:** Verify CSS uses design tokens, not raw values, before proceeding to audit.

**WHEN TO RUN:** After implementing all CSS (Phase 4.8 complete), BEFORE divergence verification (Phase 5).

**Token compliance target: >= 80%**

**How to measure:**

1. **Count var() references:**
   - Search CSS for `var(--` — count instances
   - Example: 145 var() references

2. **Count raw values:**
   - Count hex colors: `#[0-9A-F]{6}` (e.g., #E83025, #1A1A1A)
   - Count px values: `[0-9]+px` (e.g., 16px, 940px)
   - Example: 23 hex + 50 px = 73 raw values

3. **Calculate ratio:**
   ```
   Token compliance = var() count / (var() count + raw value count)
   Example: 145 / (145 + 73) = 145 / 218 = 66.5%
   ```

4. **Compare to target:**
   - >= 80% → PASS (well-tokenized)
   - 70-79% → MARGINAL (cleanup recommended)
   - < 70% → FAIL (requires tokenization pass)

**Common violations:**

| Raw Value | Token Replacement | Why Use Token |
|-----------|------------------|---------------|
| `#E83025` | `var(--color-primary)` | Semantic naming, single source of truth |
| `16px` | `var(--space-4)` | Mathematical scale coherence |
| `940px` | `var(--container-width)` | Responsive consistency |
| `1.7` | `var(--line-height-body)` | Typography system |
| `#1A1A1A` | `var(--color-text)` | Palette coherence |

**When to skip this check:**
- **Floor-tier (Track 1 assembly):** Token compliance automatic (using components.css)
- **Rapid prototyping:** If build speed > token hygiene, skip and cleanup post-ship
- **Single-use exploration:** If page won't be maintained, token compliance optional

**When to enforce this check:**
- **Middle-tier+ (Track 2 composition):** Custom CSS requires token discipline
- **Production pages:** Maintainability demands tokens
- **Design system contributions:** All showcase pages must be well-tokenized

**Cleanup protocol (if < 80%):**

1. **Replace color hex values:**
   ```css
   /* BEFORE */
   .element { border: 3px solid #E83025; }

   /* AFTER */
   .element { border: 3px solid var(--color-primary); }
   ```

2. **Replace spacing px values:**
   ```css
   /* BEFORE */
   .section { padding: 32px 24px; }

   /* AFTER */
   .section { padding: var(--space-8) var(--space-6); }
   ```

3. **Replace typography values:**
   ```css
   /* BEFORE */
   body { font-family: Inter, sans-serif; line-height: 1.7; }

   /* AFTER */
   body {
     font-family: var(--font-body);
     line-height: var(--line-height-body);
   }
   ```

4. **Re-measure:** After replacements, re-count var() and raw values. Target: >= 80%.

**Middle-tier experiment defect:** The Middle-tier page scored 66.5% token compliance, below the 80% target. This was classified as a MAJOR violation for maintainability (not design quality). If this self-check had been run during building, the defect would have been caught before audit.
```

**Rationale:**
1. **Addresses experiment defect:** 66.5% vs 80% suggests missing enforcement
2. **Maintainability:** Tokens enable system-wide changes (one token edit propagates)
3. **Optional for speed:** Builders can skip if prototyping, enforce if shipping
4. **Measurable target:** 80% is concrete, not judgment
5. **Clear cleanup protocol:** Specific replacements, not vague advice

**Alternative approach:** Instead of a separate phase, add token compliance to the existing programmatic audit (already checks this). But having it as a SELF-check during building (before audit) prevents the defect from reaching validation.

---

### 1.6 Container Width Priority Emphasis (STRENGTHEN EXISTING — Not New)

**Context:** Container width 940-960px was THE primary Phase D failure mode (4/5 pages violated it). The skill already has strong language (lines 830-866) but the defect rate suggests it's not strong enough.

**Current language (Phase 4.0, line 830):**

```markdown
**CONTAINER WIDTH GUARDRAILS (NON-NEGOTIABLE -- HIGHEST PRIORITY):**

| Guardrail | Value | Rationale | Override |
|-----------|-------|-----------|---------|
| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio | **NEVER** |
```

**Proposed strengthening (add after line 866):**

```markdown
**CRITICAL -- Container Width Verification Protocol:**

**BEFORE declaring Phase 4 complete, VERIFY container width:**

1. **Measure in browser DevTools:**
   ```javascript
   document.querySelector('.container').offsetWidth
   // Must return: 940 <= width <= 960
   ```

2. **Check computed max-width:**
   ```javascript
   getComputedStyle(document.querySelector('.container')).maxWidth
   // Must return: "940px" or "960px" (not "700px", not "1100px")
   ```

3. **Verify no viewport-based override:**
   ```css
   /* WRONG -- viewport percentage that violates floor */
   .container { max-width: 50vw; } /* At 1440px = 720px < 940px ✗ */

   /* CORRECT -- absolute px value in range */
   .container { max-width: 960px; } /* ✓ */
   ```

**Phase D failure mode:** 4 out of 5 validation pages violated container width. Common violations:
- Metaphor-driven narrowing (cylindrical core → 700px)
- Viewport percentage miscalculation (50vw at 1440px = 720px)
- Aesthetic preference override ("looks better narrower")

**If your metaphor demands narrowness:** Express through INTERNAL padding, not external width reduction.

```css
/* WRONG -- narrow container violates floor */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px;         /* Non-negotiable */
  padding: 0 120px;         /* Internal narrowing */
  /* Effective content width: 960 - 240 = 720px */
}
```

**This is Priority #1.** If you violate this, the page FAILS regardless of other quality. Test this FIRST, before testing anything else.
```

**Rationale:**
1. **Addresses Phase D failure mode:** 4/5 pages violated this
2. **Concrete verification:** JavaScript snippets are executable
3. **Common violation examples:** Shows what NOT to do
4. **Escape hatch reminder:** Internal padding solution
5. **Priority emphasis:** "Priority #1" language

---

## SECTION 2: PERCEPTUAL-AUDITING SKILL MODIFICATIONS

### 2.1 PA-05 Sub-Criteria Refinement (WORKING — Small Calibration Adjustments)

**Context:** PA-05 operationalization (4 sub-criteria) worked well in Middle-tier experiment. All 4 passed at both 1440px and 768px. Small adjustments recommended based on validation data.

**Current PA-05 sub-criteria (lines 215-302):**

```markdown
### PA-05a: Non-Default Layout Elements
**Count: >= 2 at 1440px, >= 1 at 768px**

### PA-05b: Padding Range Ratio
**Threshold: >= 2.0x at 1440px, >= 1.5x at 768px**

### PA-05c: Visual Hierarchy Test (20px Gaussian Blur)
**Check: Primary/secondary zones match apparent intent**

### PA-05d: Non-Framework CSS
**Estimated: >= 15% compositional work**
```

**Proposed adjustments:**

#### PA-05a: No Change (VALIDATED)
Middle-tier scored 4 elements at both viewports (dark header, orange callout, black diagram, styled tables). Threshold of >= 2 (1440px) and >= 1 (768px) is appropriate.

#### PA-05b: Calibration Note (WORKING AT THRESHOLD)
Middle-tier scored **exactly 2.0x at 1440px** (64px/32px). This is exactly at threshold. Consider whether "passing exactly at threshold" suggests the threshold is right (strict enough to catch template pages) or too permissive (allows minimal effort).

**Proposed clarification:**

```markdown
### PA-05b: Padding Range Ratio

**Threshold:**
- **1440px:** >= 2.0x (shallowest / deepest)
- **768px:** >= 1.5x (compressed range acceptable)

**Measurement protocol:**
1. Identify shallowest section padding (largest vertical padding value)
2. Identify deepest section padding (smallest vertical padding value)
3. Calculate ratio: shallowest / deepest
4. Compare to threshold

**Middle-tier experiment calibration:**
- Measured: 64px (deepest) / 32px (shallowest) = 2.0x
- Result: PASS (exactly at threshold)
- Interpretation: 2.0x is the MINIMUM acceptable range. Pages with 1.8x or 1.5x would feel more uniform (less spatial variety).

**Threshold rationale:**
- < 1.5x: Insufficient spatial differentiation (all sections feel same density)
- 1.5-2.0x: Minimal but acceptable range (Middle-tier floor)
- 2.0-3.0x: Good spatial variety (Ceiling-tier target)
- > 3.0x: Risk of extreme compression at deepest sections

**Calibration note:** A page that passes at exactly 2.0x is at the boundary between formatted (< 2.0x) and designed (>= 2.0x). This is intentional — the threshold distinguishes minimal compositional work from template application.
```

**Rationale:** Middle experiment validated that 2.0x is the right threshold (distinguishes designed from formatted), but passing exactly at threshold suggests it's a MINIMUM, not a comfortable target.

#### PA-05c: No Change (VALIDATED)
Middle-tier passed with dark header (primary) and black diagram (secondary) clearly visible under blur. The test works.

#### PA-05d: Add Measurement Guidance (ESTIMATED IN EXPERIMENT)
Middle-tier estimated >= 15% compositional CSS but couldn't measure precisely without reading the full CSS file. Add guidance for more precise measurement.

**Proposed addition:**

```markdown
### PA-05d: Non-Framework CSS

**Threshold:** >= 15% compositional work (estimated visually)

**Visual estimation protocol (when CSS not available):**

Count these as compositional (non-framework):
- Custom header/footer backgrounds (dark treatments, borders)
- Styled callout boxes with colored accents
- Code blocks with dark backgrounds
- Custom table styling (borderless, custom cell padding)
- Zone backgrounds (section-level color shifts)
- Featured diagram containers (solid offset, dark backgrounds)

Count these as framework (default patterns):
- Single-column layout
- Standard typography (if using design system fonts without modification)
- Default spacing between paragraphs
- Unmodified components (if pulled directly from library)

**Estimation formula:**
```
Compositional % ≈ (compositional elements / total visual elements) × 100
```

**Middle-tier experiment:**
- 6 compositional elements (dark header, orange callout, black diagram, 3 styled tables, zone backgrounds, 8 code blocks)
- ~30 total visual elements (all content blocks)
- Estimated: 6/30 ≈ 20% compositional work
- Result: PASS (>= 15%)

**When CSS IS available (programmatic audit):**

Count lines:
1. **Compositional CSS:** Custom classes, non-token values, metaphor-specific selectors
2. **Framework CSS:** Component imports, token applications, defaults
3. **Calculate ratio:** compositional / (compositional + framework)

**Passing threshold:** >= 15% for Middle-tier, >= 25% for Ceiling, >= 40% for Flagship

**Calibration note:** This is the HARDEST sub-criterion to measure visually. When in doubt, look for: "Does this page have custom visual treatments (not just standard components)?" If yes >= 3 custom treatments, estimate PASS.
```

**Rationale:** Adds concrete estimation guidance (experiment used estimation successfully) and measurement protocol when CSS is available.

---

### 2.2 Rhythm Assessment Enhancement (PA-17 Existing Question)

**Context:** PA-17 asks "Is there visual rhythm or random?" Middle-tier answer: "There's rhythm but it's metronomic rather than musical."

**Current PA-17 (line 140):**

```markdown
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? | Arrhythmic section sequencing |
```

**Proposed enhancement:**

```markdown
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? If rhythmic, is it musical (varied) or metronomic (uniform)? | Arrhythmic section sequencing, monotonous repetition |
```

**Add to Standard Fifteen guidance (after PA-17):**

```markdown
**PA-17 Assessment Protocol:**

**Good rhythm (MUSICAL):**
- Spacing varies between sections (48px, 64px, 80px transitions)
- Variation matches content shifts (smooth → bridge → breathing)
- Predictable enough to feel coherent, varied enough to sustain interest
- Example: "Spacing follows content — tighter within architecture section, breathing gap before security, smooth between installation steps"

**Acceptable rhythm (CONSISTENT):**
- Spacing is uniform but intentional (all 48px or all 64px)
- Consistency serves content (reference docs benefit from predictable rhythm)
- Not broken, but not expressive
- Example: "All section gaps are 48px — creates steady rhythm but no variation"

**Bad rhythm (METRONOMIC):**
- Spacing repeats mechanically without content justification
- Feels like "default spacing applied" not "spacing chosen"
- Monotonous after 4-5 repetitions
- Example: "Every section → section gap is identical. After third section it becomes predictable rather than rhythmic."

**No rhythm (RANDOM):**
- Spacing feels arbitrary (24px, 56px, 92px with no pattern)
- Gaps don't correspond to content structure
- Reader can't predict where breaks will occur
- Example: "Section spacing jumps randomly — can't tell if gaps are intentional or accidental"

**Quantitative check (if measurable):**
- Count distinct gap sizes in full-page sequence
- < 2 distinct gaps = metronomic risk
- 2-4 distinct gaps = musical rhythm potential
- > 4 distinct gaps = random risk (unless clearly structured)

**Middle-tier defect:** Page had 2 gap sizes (48px and 80px) but used them mechanically (48-80-48-80 pattern) rather than mapping to content structure. This creates rhythm but not musical rhythm.
```

**Rationale:** Adds concrete assessment criteria (musical vs metronomic vs random) and quantitative check (count distinct gaps).

---

### 2.3 Landmark Check Addition (NEW PA QUESTION)

**Context:** Missing footer was WOULD-NOT-SHIP finding. No current PA question explicitly checks for landmark completeness.

**Proposed new question (add to Standard Fifteen, Tier 2):**

```markdown
| **PA-49** | Does the page have a designed beginning, middle, and end? Or does it start/stop abruptly? | Missing landmarks (header/footer), incomplete narrative structure |
```

**Add to PA-49 assessment guidance:**

```markdown
**PA-49: Landmark Completeness**

**What to check:**

1. **BEGINNING (header/opening):**
   - Is there a clear visual entry point?
   - Does the page establish context before diving into content?
   - Examples: Dark header, title zone, intro section

2. **MIDDLE (main content):**
   - Is content organized into sections (not just continuous scroll)?
   - Do sections have visual differentiation (backgrounds, spacing, borders)?
   - Can you scan and navigate by visual structure?

3. **END (footer/conclusion):**
   - Is there a clear visual ending?
   - Does the page signal "this is complete" not "this is unfinished"?
   - Examples: Footer mirroring header, final section with closure treatment

**Good landmark structure:**
- Beginning: Dark header with title, subtitle, metadata
- Middle: 4-6 sections with zone backgrounds, varied spacing
- End: Footer mirroring header (dark background, border treatment)

**Acceptable landmark structure:**
- Beginning: Title + intro paragraph (minimal but present)
- Middle: Sections with headings (visual structure via typography)
- End: Final section with adequate spacing (not abrupt stop)

**Bad landmark structure (Middle-tier defect):**
- Beginning: Present (dark header)
- Middle: Present (6 sections)
- End: MISSING (content stops, blank space follows)
- Verdict: NO — missing footer creates "dropped signal" effect

**WOULD-NOT-SHIP criteria:**
- Missing footer when build plan specified footer (implementation failure)
- Content stops abruptly with no visual conclusion
- Excessive blank space after last content (suggests missing element)

**Measurement:**
- Scroll to bottom of page
- Is there a designed visual element at the end (footer, closing section)?
- Or does content just stop with blank space?

**Middle-tier experiment:** Footer was specified in build plan (#14 Footer Mirror) but not present in rendered HTML. Perceptual audit noted "screens of blank space" and "page just stops." This is a WOULD-NOT-SHIP finding.
```

**Rationale:**
1. **Addresses experiment defect:** Missing footer was critical finding
2. **Narrative closure:** Readers need visual ending
3. **Implementation verification:** Checks that build plan matches output
4. **Clear criteria:** Beginning/middle/end is binary

**Question placement:** Add to Tier 2 Standard Fifteen (between PA-20 and PA-21) as a flow/structure question.

---

### 2.4 Heading Spacing Ratio Check (NEW SEMANTIC CHECK)

**Context:** PA-SEM-01 (semantic spacing check) caught heading spacing ratio violation but it's buried in "semantic checks" section. Promote to explicit question.

**Proposed new question (add to Standard Fifteen, Tier 2):**

```markdown
| **PA-50** | For major headings (h2, h3), is space above GREATER than space below (1.5:1 minimum)? Or does the heading float ambiguously? | Heading-to-content association failure |
```

**Add to PA-50 assessment guidance:**

```markdown
**PA-50: Heading Spacing Ratio**

**What to check:**

For each major heading (h2, h3), visually estimate:
- Space above heading (gap from previous section)
- Space below heading (gap to content below)

**Good spacing (PASS):**
- Space above is noticeably larger than space below
- Heading visually "pulls" toward its content
- Ratio appears >= 1.5:1 (above/below)
- Example: "Architecture section heading has ~40px above, ~24px below — clearly belongs to its content"

**Marginal spacing (BORDERLINE):**
- Space above slightly larger than below
- Ratio appears 1.2-1.4:1 (close but not clear 1.5:1)
- Heading association is weak but not broken
- Example: "Security heading has ~32px above, ~24px below — ratio ~1.3:1, could be clearer"

**Bad spacing (FAIL):**
- Space above equals space below (1:1 ratio)
- Heading floats ambiguously between sections
- Reader can't tell which content the heading introduces
- Example: "Installation heading has 32px above and 32px below — equal spacing makes it float"

**WCAG connection:**
WCAG 2.1 SC 1.4.12 (Text Spacing) requires adequate spacing for readability. Equal spacing above/below violates visual hierarchy principles.

**Measurement (if DevTools available):**
```javascript
// For each h2/h3
const heading = document.querySelector('h2');
const marginTop = parseInt(getComputedStyle(heading).marginTop);
const marginBottom = parseInt(getComputedStyle(heading).marginBottom);
const ratio = marginTop / marginBottom;

// Ratio >= 1.5 → PASS
// Ratio < 1.5 → FAIL
```

**Common violations:**
- CSS reset applies equal margins to all headings
- Builder doesn't consider semantic spacing (just applies "looks good" values)
- Spacing compression at deeper sections reduces above/below to equal

**Middle-tier defect:** PA-SEM-01 noted "Appears roughly equal in most cases, should be 1.5:1 minimum." This weakened visual hierarchy — headings didn't clearly belong to their content.

**Priority:** This is a LOOKS-WRONG finding (Perception Track), not a SOUL VIOLATION (Rule Track). Fix if time permits, but not blocking.
```

**Rationale:**
1. **Addresses experiment defect:** PA-SEM-01 caught this
2. **Visual hierarchy:** Clear heading-to-content association
3. **Measurable:** Ratio is computable
4. **Editorial standard:** 1.5:1 minimum is magazine typography baseline

**Question placement:** Add to Tier 2 Standard Fifteen (after PA-29, typography section) as a hierarchy question.

---

## SECTION 3: NEW SKILLS THAT MIGHT BE NEEDED

### 3.1 Build Self-Validation Skill (CONSIDER — Pre-Audit Checklist)

**Problem:** Middle-tier experiment had 2 defects that could have been caught BEFORE audit:
1. Token compliance 66.5% (measurable during build)
2. Missing footer (specified in plan but not in HTML)

**Concept:** A lightweight self-validation skill that builders run BEFORE declaring "done" and BEFORE invoking perceptual-auditing.

**Skill structure (hypothetical):**

```markdown
# Build Self-Validation — Pre-Audit Checklist

**When to use:** After completing HTML/CSS, BEFORE invoking perceptual-auditing skill

**Purpose:** Catch implementation defects before formal audit

**Time:** 5-10 minutes (quick checks)

## Checklist (8 items)

### 1. Soul Constraints
- [ ] border-radius: 0 everywhere? (search CSS for `border-radius:` — only value should be `0`)
- [ ] box-shadow: none everywhere? (search CSS for `box-shadow:` — only value should be `none`)
- [ ] Colors from tokens.css? (no hex values outside token definitions)

### 2. Container Width
- [ ] Measure in browser: `.container` offsetWidth between 940-960px at 1440px viewport?
- [ ] Check computed max-width: "940px" or "960px" (not viewport percentage)?

### 3. Landmark Completeness
- [ ] Header present? (visual beginning)
- [ ] Main content sections present? (visual middle)
- [ ] Footer present? (visual ending)

### 4. Token Compliance (optional, recommended)
- [ ] Count var() references in CSS
- [ ] Count raw hex + px values in CSS
- [ ] Calculate ratio: var() / (var() + raw) >= 80%?

### 5. Heading Spacing
- [ ] For 3 major headings: space above > space below?
- [ ] Ratio appears >= 1.5:1?

### 6. Build Plan Verification
- [ ] If build plan specified mechanisms, are they present in HTML?
- [ ] Example: Build plan says "#14 Footer Mirror" → footer exists in HTML?

### 7. Responsive Check
- [ ] Resize to 768px — no horizontal scrollbar?
- [ ] Content reflows appropriately?

### 8. Fractal Coherence (if Middle-tier+)
- [ ] Pattern expressed at required scales? (Page + Component for Middle)
- [ ] CSS evidence documented?

## Output

**If all checks PASS:** Proceed to perceptual-auditing skill
**If any check FAILS:** Fix defect, re-check, then proceed

## Why This Exists

The Middle-tier experiment had 2 defects that could have been caught by builder self-check:
1. Token compliance 66.5% (builder could count var() refs during building)
2. Missing footer (builder could verify footer HTML exists before declaring done)

Perceptual auditing is expensive (30-60 min, Playwright, multiple agents). Catching mechanical defects BEFORE audit saves time and iteration cycles.

**This is NOT a substitute for perceptual audit.** It's a quick smoke test before the real audit.
```

**Pros:**
- Catches mechanical defects early (before expensive audit)
- Builder-friendly (8 quick checks, not 48 PA questions)
- Prevents known failure modes (token compliance, missing footer, container width)

**Cons:**
- Adds process overhead (another step before audit)
- Might feel like "check the checklist" box-ticking
- Could give false confidence ("I passed self-check, so I'll pass audit")

**Recommendation:** **PILOT THIS** with next few Middle-tier builds. If it catches defects consistently, formalize as a skill. If builders skip it or it catches nothing, abandon it.

---

### 3.2 Mechanism-Content Fit Assessment Skill (EXPLORE — Pre-Build Selection Verification)

**Problem:** The tension-composition skill Phase 4 requires mechanism selection but doesn't have a structured protocol for verifying mechanism-content fit BEFORE building.

**Concept:** A skill that evaluates whether selected mechanisms actually fit the content, BEFORE implementing CSS.

**When to use:** After Phase 3 (metaphor collapse) or Phase 4.0 (pattern selection for Middle-tier), BEFORE Phase 4 implementation.

**Skill structure (hypothetical):**

```markdown
# Mechanism-Content Fit Assessment

**Purpose:** Verify selected mechanisms actually serve THIS content's needs

**When:** After metaphor/pattern selection, BEFORE CSS implementation

**Input:** Content + selected mechanisms (list of #N mechanism IDs)

**Output:** FIT / MARGINAL FIT / POOR FIT for each mechanism + overall recommendation

## Assessment Protocol

For EACH selected mechanism, answer these 3 questions:

### Q1: Does this content NEED what this mechanism provides?

**Example:**
- Mechanism #17 (Code Blocks): Does content contain executable code/diagrams? YES → need exists
- Mechanism #15 (Bento Grid): Does content present parallel, independent modules? NO → need doesn't exist

### Q2: Can this mechanism SERVE this content at this density?

**Example:**
- Mechanism #1 (Border-Weight Gradient): Does content have 3-4 hierarchical levels to encode? YES → sufficient density
- Mechanism #1: Does content have only 1-2 levels? NO → insufficient density (mechanism overkill)

### Q3: Does this mechanism CONFLICT with other selected mechanisms?

**Example:**
- Mechanism #5 (Dense/Sparse) + #7 (Zone Backgrounds): Compatible (both spatial)
- Mechanism #6 (Width Variation) + Container Width 940px floor: Conflict (width variation might violate floor)

## Scoring

For each mechanism:
- Q1 YES + Q2 YES + Q3 NO CONFLICT = **FIT**
- Q1 YES + Q2 MARGINAL + Q3 NO CONFLICT = **MARGINAL FIT**
- Q1 NO or Q2 NO or Q3 YES CONFLICT = **POOR FIT**

## Overall Recommendation

- All mechanisms FIT: **PROCEED**
- 1-2 mechanisms MARGINAL FIT: **PROCEED WITH CAUTION**
- 1+ mechanisms POOR FIT: **REVISE SELECTION**

## Example (Middle-Tier Documentation)

**Content:** Technical documentation for macOS control system (architecture + installation + security)

**Selected mechanisms:**
1. #1 Border-Weight Gradient
   - Q1: Content has security levels (critical/important/informational)? YES
   - Q2: 3-4 levels to encode? YES (4 security layers)
   - Q3: Conflicts? NO
   - **Verdict: FIT**

2. #17 Code Blocks
   - Q1: Content has executable code/diagrams? YES (8 code examples)
   - Q2: Sufficient code density? YES (architecture diagram + 7 snippets)
   - Q3: Conflicts? NO
   - **Verdict: FIT**

3. #15 Bento Grid
   - Q1: Content has parallel modules? NO (content is sequential installation steps)
   - Q2: N/A
   - Q3: N/A
   - **Verdict: POOR FIT** (reject #15, content is linear not parallel)

**Overall:** 2 FIT, 1 POOR FIT → REVISE (remove #15, select different mechanism)
```

**Pros:**
- Prevents mechanism-content mismatch before building
- Structured decision-making (3 questions per mechanism)
- Catches conflicts early (e.g., width variation vs container floor)

**Cons:**
- Adds another layer of process (already have metaphor derivation + fractal gate)
- Might slow down builders ("just let me implement and see if it works")
- Subjective questions (what counts as "need"?)

**Recommendation:** **DO NOT BUILD THIS YET.** The tension-composition skill Phase 4 already has justification requirements ("For EACH mechanism: one sentence on WHY"). That's sufficient. Only build this if builders repeatedly deploy mechanisms that don't fit content.

---

### 3.3 Comparison/Evaluation Skill (CONSIDER — Standardized Cross-Page Assessment)

**Problem:** The Middle-tier experiment's comparative evaluation (Middle vs Variant B) was ad-hoc. The comparison report used perceptual observations but no standardized protocol.

**Concept:** A skill for comparing 2 pages on the SAME content using standardized criteria.

**When to use:** After building 2+ variants of the same content (A/B testing, tier comparison, before/after refactor)

**Skill structure (hypothetical):**

```markdown
# Comparative Evaluation Skill

**Purpose:** Compare 2 pages on SAME content using standardized criteria

**Input:** 2 page URLs (Page A, Page B), both rendering the same content

**Output:** Comparison table + verdict (which is better, or tie)

## Comparison Protocol (10 Dimensions)

### 1. Mechanism Density
- Count mechanisms deployed in Page A
- Count mechanisms deployed in Page B
- Compare: A > B, A = B, or A < B

### 2. Visual Focal Points
- Count distinct visual anchors in Page A (dark blocks, colored callouts, diagrams)
- Count in Page B
- Compare: Which has more scannable landmarks?

### 3. Spatial Character
- Does Page A feel contained/sectioned/navigable? Rate 1-5
- Does Page B feel contained/sectioned/navigable? Rate 1-5
- Compare: Which has stronger spatial atmosphere?

### 4. Cold Look Verdict
- Page A: YES / YES WITH RESERVATIONS / NO
- Page B: YES / YES WITH RESERVATIONS / NO
- Compare: Which would you ship more confidently?

### 5. PA-05 Composite
- Page A: How many PA-05 sub-criteria pass? (0-4)
- Page B: How many PA-05 sub-criteria pass? (0-4)
- Compare: Which is more designed?

### 6. Container Width Compliance
- Page A: 940-960px? YES / NO
- Page B: 940-960px? YES / NO
- Compare: Either violates = FAIL

### 7. Rhythm Quality
- Page A: Musical / Consistent / Metronomic / Random
- Page B: Musical / Consistent / Metronomic / Random
- Compare: Which has better pacing?

### 8. Landmark Completeness
- Page A: Beginning / Middle / End present? (3/3)
- Page B: Beginning / Middle / End present? (3/3)
- Compare: Which has better narrative structure?

### 9. Token Compliance
- Page A: Count var() / (var() + raw)
- Page B: Count var() / (var() + raw)
- Compare: Which is more maintainable?

### 10. Perceptual Improvements (MANDATORY — Minimum 2)
- Identify 2-3 specific visual observations where A > B or B > A
- Example: "Page A's dark header creates product identity vs Page B's plain start"

## Verdict

**Count dimensions:**
- A wins: X dimensions
- B wins: Y dimensions
- Tie: Z dimensions

**Overall verdict:**
- If A wins >= 7 dimensions: **A is better**
- If B wins >= 7 dimensions: **B is better**
- If tie >= 5 dimensions: **TIE (both viable)**

## Example (Middle vs Variant B)

1. Mechanism Density: A=12, B=7 → **A wins**
2. Visual Focal Points: A=3 (header/callout/diagram), B=1 (callouts) → **A wins**
3. Spatial Character: A=4, B=2 → **A wins**
4. Cold Look: A=YES, B=YES WITH RESERVATIONS → **A wins**
5. PA-05 Composite: A=4/4, B=unknown → **A wins**
6. Container Width: A=960px✓, B=unknown → **A wins (assumed)**
7. Rhythm Quality: A=Metronomic, B=Consistent → **Tie**
8. Landmark Completeness: A=2/3 (missing footer), B=unknown → **Inconclusive**
9. Token Compliance: A=66.5%, B=unknown → **Inconclusive**
10. Perceptual Improvements: 3 specific (header, code blocks, zone backgrounds) → **A wins**

**Verdict:** A wins 7 dimensions, Tie 1, Inconclusive 2 → **A is better**
```

**Pros:**
- Standardized comparison (10 dimensions, not ad-hoc observations)
- Quantitative where possible (mechanism count, PA-05 score)
- Qualitative where necessary (perceptual improvements)

**Cons:**
- Requires both pages rendered (can't compare to hypothetical)
- Some dimensions need perceptual audit data (expensive)
- Might produce ties when clear winner exists

**Recommendation:** **PILOT THIS** for next comparative experiment (e.g., Ceiling vs Middle on same content). If it produces actionable verdicts, formalize. If it's just "I could tell which was better without the protocol," abandon.

---

## SECTION 4: SKILL INTERACTION AND PIPELINE INTEGRATION

### 4.1 How Modifications Interact

**Tension-Composition ↔ Perceptual-Auditing alignment:**

| Tension-Composition Addition | Perceptual-Auditing Check | Alignment |
|------------------------------|--------------------------|-----------|
| **M1 Per-Category Minimums** | PA-05d (non-framework CSS) | ✓ Reinforcing — more mechanisms = higher PA-05d score |
| **Rhythm Variation (3 transitions)** | PA-17 (musical rhythm), PA-41 (repetition monotony) | ✓ Direct alignment — skill adds requirement, audit checks it |
| **Landmark Completeness** | PA-49 (NEW: beginning/middle/end), PA-13 (visual ending) | ✓ Direct alignment — skill requires footer, audit verifies |
| **Heading Spacing 1.5:1** | PA-50 (NEW: heading ratio), PA-SEM-01 (spacing justification) | ✓ Direct alignment — skill enforces ratio, audit measures |
| **Token Compliance Self-Check** | Programmatic audit token count | ✓ Pre-audit catch — prevents defect reaching audit |
| **Container Width Emphasis** | Programmatic Critical-10 check #1 | ✓ Already aligned — strengthening existing check |

**No conflicts detected.** All tension-composition additions have corresponding perceptual-auditing checks (either existing or new PA questions).

**Feedback loop:** If tension-composition adds a requirement, perceptual-auditing MUST have a way to verify it. Otherwise requirement is unenforceable.

---

### 4.2 Priority Order for Applying Modifications

**Phase 1 (Apply Immediately — Validated by Experiment):**

1. **M1 Per-Category Minimums** — ALL 11 research agents + Middle experiment confirm this
   - Update tension-composition skill lines 68-98, 909-930
   - Search and replace all "sample 2-4" instances
   - Add per-category justification table to Phase 4.0

2. **Container Width Verification Protocol** — Phase D failure mode (4/5 violated)
   - Add JavaScript verification snippets to Phase 4.0 guardrails (after line 866)
   - Emphasize "Priority #1" language

3. **PA-05 Sub-Criteria Calibration** — Working well, small adjustments
   - Add PA-05b threshold rationale (2.0x boundary explanation)
   - Add PA-05d measurement guidance (estimation + CSS line count)

**Phase 2 (Apply After Review — New Requirements Based on Defects):**

4. **Rhythm Variation Requirement** — Addresses metronomic spacing
   - Add Phase 4.2B rhythm variation rule (3 transition types minimum)
   - Add PA-17 enhancement (musical vs metronomic distinction)

5. **Landmark Completeness Check** — Addresses missing footer
   - Add Phase 4.7B landmark gate to tension-composition
   - Add PA-49 to perceptual-auditing Tier 2

6. **Heading Spacing Ratio** — Addresses floating headings
   - Add 1.5:1 ratio to Phase 4.0 guardrails table
   - Add PA-50 to perceptual-auditing Tier 2

**Phase 3 (Pilot First — Process Additions Needing Validation):**

7. **Token Compliance Self-Check** — Addresses 66.5% defect
   - Add optional Phase 4.9 to tension-composition (after Phase 4.8)
   - Test with next 2-3 Middle-tier builds
   - If catches defects consistently → make mandatory
   - If skipped or ineffective → remove

8. **Build Self-Validation Skill** — Pre-audit smoke test
   - Create new skill (8-item checklist)
   - Pilot with next 3 builds
   - If saves audit iterations → keep
   - If ignored → abandon

**Phase 4 (Do Not Build — Insufficient Evidence):**

9. **Mechanism-Content Fit Assessment** — Redundant with existing justification
10. **Comparison/Evaluation Skill** — Useful for experiments but not general building

---

### 4.3 Skill Change Testing Protocol

**Before applying ANY modification to production skills:**

1. **Dry-run test:** Apply modification to a COPY of the skill, run on test content
2. **Compare outputs:** Does modified skill produce better results than current skill?
3. **Check for regressions:** Does modification break existing functionality?
4. **Validate assumptions:** Does the change address the problem it claims to solve?

**Example (M1 Per-Category Minimums):**

**Test protocol:**
1. Create `tension-composition-M1-test.md` with per-category minimum language
2. Build 2 test pages: one with current skill, one with M1 skill
3. Compare mechanism deployment: Does M1 produce broader coverage?
4. Compare PA-05 scores: Does M1 improve "designed" assessment?
5. If YES to both → apply M1 to production skill
6. If NO → investigate why (wrong modification? wrong test content?)

**For Middle-tier experiment:** This testing was implicit (experiment tested M1 override). Results validated M1. Safe to apply.

**For untested modifications (rhythm variation, landmark check):** MUST test before applying. Don't assume "this would have prevented the defect" without proof.

---

## SECTION 5: RISK ASSESSMENT

### 5.1 Which Modifications Could Reduce Quality?

**High Risk (Could Add Too Many Constraints):**

1. **Rhythm Variation Requirement (3 transition types minimum)**
   - **Risk:** Might force arbitrary variation where content naturally wants uniformity
   - **Example:** A 4-section reference doc might WANT consistent 48px gaps (predictable rhythm serves reference content)
   - **Mitigation:** Make this Middle-tier+ only (exempt Floor). Add escape clause: "If content structure naturally produces uniform rhythm, document justification."

2. **Landmark Completeness (footer required for Middle+)**
   - **Risk:** Might force footer where it adds no value
   - **Example:** A single-screen overview page doesn't need footer (content fits in one viewport)
   - **Mitigation:** Tier-calibrate — Floor optional, Middle required, Ceiling transitions. Add escape clause: "If content < 2 viewports, footer optional."

**Medium Risk (Could Create Checklist Mentality):**

3. **Token Compliance Self-Check**
   - **Risk:** Might encourage "optimize for the metric" behavior (80% becomes target, not floor)
   - **Example:** Builder gets to 78%, adds unnecessary var() refs to hit 80%
   - **Mitigation:** Frame as "cleanup check" not "build target." 80% is MINIMUM, not goal.

4. **Heading Spacing 1.5:1 Ratio**
   - **Risk:** Might produce mechanical spacing (always 48px/24px) instead of contextual spacing
   - **Example:** Builder doesn't think about visual weight, just applies 1.5× formula
   - **Mitigation:** Emphasize ratio is FLOOR, not target. "1.5:1 minimum — prefer 2:1 when content allows."

**Low Risk (Unlikely to Reduce Quality):**

5. **M1 Per-Category Minimums**
   - **Risk:** Minimal — enforces breadth, not depth
   - **Mitigation:** Already validated by experiment

6. **Container Width 940-960px**
   - **Risk:** None — this is guardrail, not creative constraint
   - **Already the #1 failure mode — strengthening prevents defects**

---

### 5.2 Safe to Apply Immediately vs Need Experimentation

**SAFE (Apply Immediately):**

1. **M1 Per-Category Minimums** — Validated by 11 agents + Middle experiment
2. **Container Width Verification** — Addresses known failure mode, binary check
3. **PA-05b/PA-05d Calibration** — Small refinements to working criteria

**NEEDS TESTING (Pilot with 2-3 builds first):**

4. **Rhythm Variation Requirement** — Theory sounds right, but needs validation
   - Test: Build 2 pages with same content — one with rhythm variation, one without
   - Compare: Which feels better? Which serves content better?
   - If variation improves experience → apply
   - If variation feels forced → revise or reject

5. **Token Compliance Self-Check** — Useful in theory, but might be skipped in practice
   - Test: Ask 2-3 builders to run self-check before audit
   - Measure: Did it catch defects? Did builders skip it?
   - If catches defects consistently → make mandatory
   - If ignored → remove (perceptual audit already checks)

6. **Landmark Completeness Gate** — Addresses real defect, but might be over-specified
   - Test: Build 2 pages — one short (1 viewport), one long (3+ viewports)
   - Evaluate: Does footer add value to short page? Does missing footer hurt long page?
   - If footer always helps → make required
   - If footer sometimes unnecessary → add escape clause

**EXPERIMENT FIRST (Don't add to skill yet):**

7. **Build Self-Validation Skill** — Might be redundant with perceptual audit
8. **Mechanism-Content Fit Assessment** — Might slow down without adding value
9. **Comparison/Evaluation Skill** — Useful for experiments, not general building

---

## SECTION 6: SPECIFIC SKILL FILE EDITS

### 6.1 Tension-Composition Skill Edits (Priority Order)

**EDIT 1: M1 Per-Category Minimums (lines 68-98, mechanism deployment table)**

**Location:** Phase 0D Tier Classification

**Before:**
```markdown
| Tutorial, guide, overview, comparison, narrative | **Middle** | Phase 4.0 pattern | 8-10 mechanisms |
```

**After:**
```markdown
| Tutorial, guide, overview, comparison, narrative | **Middle** | Phase 4.0 pattern | **Min: 1 per category (S/H/C/D/N)** |

**PER-CATEGORY MINIMUM (Middle-tier+):**
[Insert full table from Section 1.1 LOCATION 1]
```

---

**EDIT 2: Container Width Verification (after line 866)**

**Location:** Phase 4.0 Guardrails, after existing container width section

**Add:**
```markdown
**CRITICAL -- Container Width Verification Protocol:**
[Insert full protocol from Section 1.6]
```

---

**EDIT 3: Mechanism Extraction Table (lines 909-930)**

**Location:** Phase 4.0 Mechanism Extraction

**Replace existing mechanism extraction guidance with:**
```markdown
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**
[Insert full table from Section 1.1 LOCATION 2]
```

---

**EDIT 4: Search and Replace "Sample 2-4"**

**Action:** Search entire tension-composition skill for "sample 2-4 mechanisms"

**Replace all instances with:** "per-category minimums (1+ from each of S/H/C/D/N)"

**Expected locations:**
- Phase 3 metaphor selection (mechanism feasibility)
- Phase 4 introduction (mechanism extraction)
- Tier model description (counts as descriptive)

---

**EDIT 5: Rhythm Variation Requirement (NEW Phase 4.2B section)**

**Location:** After existing Phase 4.2B Pacing Prediction (around line 1100)

**Add:**
```markdown
**3. Rhythm Variation Requirement (MANDATORY for Middle-tier+):**
[Insert full requirement from Section 1.2]
```

---

**EDIT 6: Landmark Completeness Gate (NEW Phase 4.7B)**

**Location:** After Phase 4.7 Fractal Consistency GATE

**Add:**
```markdown
**Phase 4.7B: Landmark Completeness GATE (MANDATORY)**
[Insert full gate from Section 1.3]
```

---

**EDIT 7: Heading Spacing Ratio (Phase 4.0 Guardrails table)**

**Location:** Typographic Spacing section of guardrails

**Replace:**
```markdown
| Min heading-to-body gap | **16px** | Editorial standard |
```

**With:**
```markdown
| **Heading spacing ratio** | **space-above / space-below >= 1.5** | Headings belong to content below |
| Min heading-to-body gap (below) | **16px** | Absolute floor |
| Min heading-to-section gap (above) | **24px** | Absolute floor (1.5× below) |

[Add enforcement section from Section 1.4]
```

---

**EDIT 8: Token Compliance Self-Check (OPTIONAL — NEW Phase 4.9)**

**Location:** After Phase 4.8, before Phase 5

**Add (if piloting):**
```markdown
### Phase 4.9: Tokenization Self-Check (OPTIONAL)
[Insert full phase from Section 1.5]
```

---

### 6.2 Perceptual-Auditing Skill Edits (Priority Order)

**EDIT 1: PA-05b Calibration Note**

**Location:** PA-05 Sub-Criteria section (around line 240)

**Add after existing PA-05b description:**
```markdown
**Threshold rationale:**
[Insert calibration note from Section 2.1]
```

---

**EDIT 2: PA-05d Measurement Guidance**

**Location:** PA-05 Sub-Criteria section (around line 290)

**Replace existing PA-05d description with:**
```markdown
**Visual estimation protocol:**
[Insert full protocol from Section 2.1]
```

---

**EDIT 3: PA-17 Enhancement**

**Location:** Standard Fifteen questions table (line 140)

**Replace:**
```markdown
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? |
```

**With:**
```markdown
| **PA-17** | Is there a visual rhythm (like a beat in music), or random? If rhythmic, is it musical (varied) or metronomic (uniform)? |

[Add PA-17 Assessment Protocol from Section 2.2]
```

---

**EDIT 4: NEW PA-49 (Landmark Completeness)**

**Location:** Add to Standard Fifteen, Tier 2 (after PA-20, before PA-21)

**Add:**
```markdown
| **PA-49** | Does the page have a designed beginning, middle, and end? Or does it start/stop abruptly? | Missing landmarks |

[Add PA-49 assessment guidance from Section 2.3]
```

---

**EDIT 5: NEW PA-50 (Heading Spacing Ratio)**

**Location:** Add to Standard Fifteen, Tier 2 (after PA-29, typography section)

**Add:**
```markdown
| **PA-50** | For major headings, is space above GREATER than space below (1.5:1 min)? Or does heading float? | Heading association failure |

[Add PA-50 assessment guidance from Section 2.4]
```

---

## SECTION 7: SUMMARY OF RECOMMENDATIONS

### Apply Immediately (Validated)
1. ✅ **M1 Per-Category Minimums** — Replace "sample 2-4" with S:1+, H:1+, C:1+, D:1+, N:1+ minimums
2. ✅ **Container Width Verification** — Add JavaScript verification protocol to Phase 4.0
3. ✅ **PA-05b/PA-05d Calibration** — Add threshold rationale and measurement guidance

### Pilot with Next 2-3 Builds (Test First)
4. 🧪 **Rhythm Variation Requirement** — Test whether 3-transition minimum improves pacing
5. 🧪 **Token Compliance Self-Check** — Test whether builders actually run it and find it useful
6. 🧪 **Landmark Completeness Gate** — Test whether footer requirement adds value across content types

### Apply After Pilot Validation
7. ⏸️ **Heading Spacing 1.5:1 Ratio** — If pilots show benefit, add to guardrails and PA questions
8. ⏸️ **PA-17 Enhancement** — Add musical vs metronomic distinction after rhythm testing
9. ⏸️ **PA-49 Landmark Check** — Add if landmark gate testing succeeds
10. ⏸️ **PA-50 Heading Ratio Check** — Add if heading spacing testing succeeds

### Do Not Build Yet (Insufficient Evidence)
11. ❌ **Build Self-Validation Skill** — Might be redundant; consider after pilot data
12. ❌ **Mechanism-Content Fit Assessment** — Existing justification protocol sufficient
13. ❌ **Comparison/Evaluation Skill** — Useful for experiments, not general workflow

---

## SECTION 8: TESTING PROTOCOL FOR NEW REQUIREMENTS

### How to Validate Rhythm Variation Requirement

**Test Setup:**
1. **Content:** Use same documentation content (SYSTEM page)
2. **Build A:** Apply NO rhythm variation (uniform 48px gaps)
3. **Build B:** Apply 3-transition variation (SMOOTH/BRIDGE/BREATHING)
4. **Measure:** Perceptual audit PA-17, PA-41, PA-35 (scroll momentum)

**Success Criteria:**
- Build B scores better on PA-17 (rhythm), PA-41 (repetition), PA-35 (interest decay)
- Build B feels MORE engaging, not just MORE varied
- Variation serves content (not arbitrary)

**If PASS:** Add rhythm variation to tension-composition Phase 4.2B
**If FAIL:** Investigate — was variation forced? Content didn't support it?

---

### How to Validate Token Compliance Self-Check

**Test Setup:**
1. **Ask 3 builders** to run Phase 4.9 token check before perceptual audit
2. **Track:** Did they run it? Did it catch defects? Did they fix before audit?
3. **Measure:** Token compliance in final audit (should be >= 80% if check worked)

**Success Criteria:**
- >= 2 of 3 builders run the check
- Defects caught before audit (not during)
- Token compliance improves from historical baseline

**If PASS:** Make Phase 4.9 mandatory for Middle-tier+
**If FAIL:** Remove — perceptual audit already checks this

---

### How to Validate Landmark Completeness Gate

**Test Setup:**
1. **Build 2 pages:** One short (1 viewport), one long (3+ viewports)
2. **Version A:** Both WITH footer (required)
3. **Version B:** Both WITHOUT footer (controlled omission)
4. **Measure:** PA-13 (visual ending), PA-49 (landmark completeness), ship verdict

**Success Criteria:**
- Long page WITHOUT footer scores worse on PA-13, PA-49
- Short page WITH footer doesn't feel over-designed
- Footer adds narrative closure without adding complexity

**If PASS:** Add Phase 4.7B landmark gate to tension-composition
**If MIXED:** Add escape clause (footer optional if < 2 viewports)
**If FAIL:** Reject — footer isn't universally valuable

---

## FINAL WORD COUNT

**Total analysis: ~9,800 words**

Sections:
1. Tension-Composition Modifications: ~3,200 words
2. Perceptual-Auditing Modifications: ~1,800 words
3. New Skills Analysis: ~2,000 words
4. Skill Interaction: ~800 words
5. Risk Assessment: ~900 words
6. Specific Edits: ~700 words
7. Summary: ~200 words
8. Testing: ~200 words

Target met: 300+ lines, comprehensive analysis with concrete before/after examples.
