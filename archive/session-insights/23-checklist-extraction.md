# Checklist Extraction: Complete Requirements, Thresholds, and Validation Criteria

**Date:** 2026-02-15
**Author:** checklist-researcher (master-prompt-build team)
**Task:** Task #2 -- Exhaustive extraction from 13 checklist/validation files
**Purpose:** Provide the synthesis agent (Task #6) with every checklist item, threshold, gaming vulnerability, and measurement procedure needed for the master execution prompt.

---

## 1. CRITICAL-10 ITEMS (Failure on ANY ONE = Experiment Fails)

These are the highest-priority binary checks. Listed in build workflow order.

| # | ID | Check | Pass Condition | Build Step |
|---|------|-------|---------------|------------|
| 1 | **B8.2** | Always-load protocol completed | Builder read `prohibitions.md` (353 lines) AND `tokens.css` (174 lines) BEFORE any design work | Step 1 -- FIRST CHECK |
| 2 | **A1.0** | M1 current status verified | Document states: "Checked SKILL.md lines 905-930. Current text says: [quote actual text showing per-category minimum protocol]. Based on this, M1 has been applied (option a is the current state)." | Pre-build |
| 3 | **B1.2** | Phases 1-3 skipped | Builder did NOT perform multi-axis questioning (Phase 1), tension derivation (Phase 2), or metaphor collapse (Phase 3) | Step 2 |
| 4 | **B2.1** | Container width 940-960px | Computed max-width of main container at 1440px viewport is 940-960px inclusive | Step 4 |
| 5 | **B2.5** | Container width priority order documented | Builder documentation explicitly states: "Container width 940-960px is HIGHEST priority (never compromise). If metaphor or aesthetic demands narrowing, express via internal padding (e.g., max-width: 960px + padding: 0 120px = 720px content width), NOT external width reduction." | Step 4 |
| 6 | **B3.6** | All 5 mechanism categories represented | B3.1 AND B3.2 AND B3.3 AND B3.4 AND B3.5 all PASS (at least 1 mechanism from each of 5 categories) | Step 5 |
| 7 | **B4.4** | Mechanism interaction documented | At least 2 pairs of mechanisms that REINFORCE each other to encode a shared content dimension. Format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]." | Step 6 |
| 8 | **B7.1** | border-radius: 0 on ALL elements | No element has border-radius > 0 anywhere in CSS | Step 9 |
| 9 | **B7.2** | box-shadow: none on ALL elements | No element uses box-shadow anywhere in CSS | Step 9 |
| 10 | **E1.1** | Clear verdict stated | Document explicitly states exactly one of: SUCCESS / PARTIAL / FAILURE | Post-build |

**Source:** 18-middle-tier-checklist.md lines 476-486, 21-missing-items-spec.md lines 228-241, 21-mechanism-hardening.md lines 342-358.

---

## 2. QUICK CHECK: 15-Item Gate (30-40 Minutes)

The Quick Check screens for instant-fail conditions before full 138-item evaluation.

**Source:** 21-quick-check.md (entire file, 301 lines).

### Critical-10 Items (Instant-Fail Gates)

| # | Item | Type | Pass Condition | Fail = Experiment Fails |
|---|------|------|---------------|------------------------|
| 1 | Container width 940-960px (B2.1) | Quick binary | Computed max-width at 1440px is 940-960px | THE #1 Phase D failure mode |
| 2 | border-radius: 0 (B7.1) | Automated | No element has border-radius > 0 | Soul constraint #1 (ABSOLUTE) |
| 3 | box-shadow: none (B7.2) | Automated | No box-shadow found | Soul constraint #2 (ABSOLUTE) |
| 4 | No pure black #000 (B7.4) | Automated | No #000000 or rgb(0,0,0) | Soul constraint |
| 5 | No pure white #FFF (B7.5) | Automated | No #FFFFFF or rgb(255,255,255) | Soul constraint |
| 6 | All 5 mechanism categories (B3.6) | Quick binary | 1+ mechanism from EACH of: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation | THE core Middle-tier differentiator |
| 7 | Phases 1-3 skipped (B1.2) | Quick binary | No metaphor/tension/multi-axis questioning performed | Experiment validity |
| 8 | Always-load protocol (B8.2) | Quick binary | prohibitions.md + tokens.css read BEFORE design work | Track 1 Phase D failure cause |
| 9 | CPL 45-80 (B9.2) | Quick binary | Body text characters per line at 1440px is 45-80 | WCAG 2.1 accessibility |
| 10 | Body line-height >= 1.5 (B9.4) | Automated | Body text line-height >= 1.5 | WCAG 2.1 SC 1.4.12 |

### Threshold Items (Core Quality Gates)

| # | Item | Type | Pass Condition |
|---|------|------|---------------|
| 11 | PA-05 composite: Engagement threshold (C4.5) | Judgment | 4/4 sub-criteria PASS (see Section 5 below) |
| 12 | Token compliance >= 80% (B8.1) | Automated | 80%+ CSS values reference tokens.css custom properties |
| 13 | Mechanism count 7-12 (B4.1) | Quick binary | Total unique mechanisms is 7-12 inclusive |
| 14 | Better than Variant B: categories (D1.2) | Quick binary | Middle deploys across MORE than 2 categories |
| 15 | Better than Variant B: verdict (D2.2) | Judgment | Clear improvement with 2+ specific observations |

**Quick Check Verdicts:**
- All 15 PASS = QUICK PASS (proceed to full check only if borderline)
- Any Critical-10 FAIL = INSTANT FAIL (experiment fails)
- Any Threshold FAIL = UNDER-DESIGNED (full check yields PARTIAL or FAILURE)

---

## 3. ALL 138 ITEMS BY SECTION

### Section A: Pre-Build Decisions (23 items)

#### A1. M1 Timing Decision (6 items: A1.0-A1.5)

| ID | Check | Pass Condition | Fail Condition |
|----|-------|---------------|----------------|
| A1.0 | M1 current status verified | Document quotes actual SKILL.md text showing per-category minimum protocol, confirming option (a) is current state | No verification of current skill state, or quote shows "sample 2-4 mechanisms" (old state) |
| A1.1 | M1 timing decision documented | States one of: (a) M1 applied to skill before build, (b) manual override, (c) two-build comparison | No decision documented or implicit |
| A1.2 | Rationale documented | At least 2 sentences explaining WHY this approach was chosen | Just "we picked option A" with no reasoning |
| A1.3 | If option (a): M1 replacement applied to SKILL.md | Lines ~882-887 replaced with per-category protocol | Old "Sample 2-4" still present |
| A1.4 | If option (b): Builder prompt contains explicit per-category override | Prompt includes: "IGNORE 'sample 2-4'. Instead deploy 1+ per category (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav)" | Override vague or absent |
| A1.5 | If option (c): Both builds identical except M1 | Same content, builder, prompt EXCEPT mechanism selection instruction | Other variables changed |

#### A2. Content Selection (10 items: A2.1-A2.10)

| ID | Check | Pass Condition | Threshold |
|----|-------|---------------|-----------|
| A2.1 | Word count | 800-1,200 words | <800 too thin; >1,200 scope creep |
| A2.2 | Prose paragraphs | At least 3 paragraphs of narrative/explanatory prose | Zero prose = FAIL |
| A2.3 | Code blocks | At least 2 code blocks | Zero = FAIL |
| A2.4 | Callouts/tips/warnings | At least 2 callout-type elements | Zero = FAIL |
| A2.5 | Hierarchical headings | 2+ heading levels (e.g., H2 + H3) | Only 1 level = FAIL |
| A2.6 | Table OR reference section | At least 1 data table or structured reference | None = FAIL |
| A2.7 | Step sequence | At least 1 sequential procedure (3+ steps) | None = FAIL |
| A2.8 | Domain different from Variant B | NOT about scientific calibration/laboratory instruments/measurement science | Same domain = FAIL |
| A2.9 | NOT self-referential | NOT about the design system, pipeline, mechanisms, or ontology | Self-referential = FAIL (skill says ABORT) |
| A2.10 | Maps to density pattern | Maps to exactly one of: CRESCENDO / F-PATTERN / BENTO / PULSE | Ambiguous or no match = FAIL |

#### A3. Content Structural Verification (3 items: A3.1-A3.3)

| ID | Check | Threshold |
|----|-------|-----------|
| A3.1 | Structural element type count | >= 4 of: prose, code, callouts, tables, step sequences, headings, lists |
| A3.2 | No single element type dominates | No single type > 60% by word/line count |
| A3.3 | Verification documented | Written record showing A2.1-A2.10 verified before build |

#### A4. Density Pattern Selection (4 items: A4.1-A4.4)

| ID | Check | Pass Condition |
|----|-------|---------------|
| A4.1 | Pattern from 4-option lookup | One of CRESCENDO / F-PATTERN / BENTO / PULSE via M5 content-type mapping |
| A4.2 | Justified with content-type reasoning | "This content is [type] BECAUSE [evidence], which maps to [pattern] BECAUSE [rationale from M5 table]" |
| A4.3 | CRESCENDO not hardcoded | If CRESCENDO: content demonstrably tutorial/step-by-step. If not tutorial: different pattern selected |
| A4.4 | Hybrid content handled correctly | Dominant pattern identified. Hybrid composition noted as Ceiling-tier, not attempted at Middle |

#### A5. Mechanism Deployment Approach (3 items: A5.1-A5.3)

| ID | Check | Pass Condition |
|----|-------|---------------|
| A5.1 | Per-category minimum documented | Builder deploys 1+ from EACH of 5 categories |
| A5.2 | Full catalog read instructed | Builder reads ALL 18 mechanisms (not "sample" or "scan") |
| A5.3 | Count described as natural landing | 8-10 described as "what Middle naturally produces," NOT "deploy exactly 8-10" |

---

### Section B: Build Requirements (46+ items, Reordered by Build Workflow)

**Build workflow sequence:** B8 -> B1 -> B9 -> B2 -> B3-B6 -> B7 -> B10

#### B8. Token Compliance (STEP 1: 2 items)

| ID | Check | Threshold |
|----|-------|-----------|
| B8.1 | Token compliance | >= 80% of CSS values reference tokens.css custom properties |
| B8.2 | Always-load protocol | Read prohibitions.md (353 lines) AND tokens.css (174 lines) BEFORE any design |

#### B1. Pipeline Routing (STEP 2: 4 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| B1.1 | Classified as Middle tier | "TIER: Middle" output present |
| B1.2 | Phases 1-3 skipped | No metaphor derivation, tension analysis, or multi-axis questioning |
| B1.3 | Started at Phase 4.0 | First design work at Phase 4.0 (Perceptual Guardrails) |
| B1.4 | M5 format documented | TIER, PATTERN, JUSTIFICATION, SKIP, NEXT fields present |

#### B9. Guardrail Compliance (STEP 3: 8 items)

| ID | Check | Threshold |
|----|-------|-----------|
| B9.1 | Minimum horizontal padding | >= 32px per side on content containers |
| B9.2 | Characters per line | 45-80 CPL at 1440px viewport |
| B9.3 | Compression ratio | Deepest padding >= 40% of shallowest |
| B9.4 | Body line-height | >= 1.5 |
| B9.5 | Section breathing zones | >= 48px between major sections |
| B9.6 | Heading-to-body gap | >= 16px |
| B9.7 | 1440px rendering | No horizontal scrollbar at 1440px |
| B9.8 | 768px rendering | No overlapping elements, no truncated text, all content accessible |

#### B2. Container Width (STEP 4: 5 items) -- NON-NEGOTIABLE

| ID | Check | Threshold |
|----|-------|-----------|
| B2.1 | Container max-width | 940-960px at 1440px viewport (computed) |
| B2.2 | Verified at 1440px | Measurement at exactly 1440px viewport width |
| B2.3 | No secondary containers below 940px | All content containers >= 940px (excluding intentional internal padding) |
| B2.4 | Narrow aesthetic via internal padding | Use `max-width: 960px; padding: 0 120px;` NOT container width reduction |
| B2.5 | Priority order documented | "940-960px is HIGHEST priority. Express narrowing via internal padding, NOT external width reduction." |

#### B3. Mechanism Deployment Breadth (STEP 5: 6 items)

| ID | Check | Mechanisms in Category |
|----|-------|-----------------------|
| B3.1 | At least 1 Spatial | #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid |
| B3.2 | At least 1 Hierarchy | #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale Jumping |
| B3.3 | At least 1 Component | #2 2-Zone Component DNA, #9 Confidence Encoding via Color, #10 Border-Left Semantic Signal, #17 Code Block |
| B3.4 | At least 1 Depth/Emphasis | #3 Solid Offset Depth, #7 Zone Background Differentiation, #16 Drop Cap |
| B3.5 | At least 1 Structure/Navigation | #8 Scroll Witness/Sticky TOC, #12 Progressive Disclosure, #13 Dark Header + 3px Border, #14 Footer Mirror, #18 Data Table |
| B3.6 | All 5 categories covered | B3.1 AND B3.2 AND B3.3 AND B3.4 AND B3.5 all PASS |

#### B4. Mechanism Deployment Count (STEP 6: 5 items)

| ID | Check | Threshold / Condition |
|----|-------|-----------------------|
| B4.1 | Mechanism count | 7-12 inclusive (raised from 5-12). < 7 = Floor-tier. > 12 = Ceiling-tier. |
| B4.2 | No count-based deployment | Every mechanism has content-based justification, NOT "to reach 8 mechanisms" |
| B4.3 | Count from breadth, not targeting | Count is CONSEQUENCE of per-category selection |
| B4.4 | Mechanism interaction documented | 2+ reinforcing pairs. Format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]" |
| B4.5 | Perceptibility verified | All mechanisms VISIBLE without dev tools. Differences < 10% OR 8px (whichever greater) = NOT deployed |

**B4.4 Reinforcing Pair Examples (from 21-mechanism-hardening.md):**
- VALID: #4 Spacing Compression + #7 Zone Background = both encode section importance (padding + background)
- VALID: #1 Border-Weight Gradient + #11 Typographic Scale = both encode heading hierarchy (border + font-size)
- INVALID: #1 Border-Weight + #17 Code Block = different content features (hierarchy vs syntax)
- INVALID: #13 Dark Header + #14 Footer Mirror = structural symmetry, not content encoding

**B4.5 Perceptibility Thresholds:**
- Padding: 48px vs 56px = perceptible (8px diff). 48px vs 49px = imperceptible (1px diff). FAIL.
- Width: 70% vs 100% = perceptible (30% diff). 98% vs 100% = imperceptible (2% diff). FAIL.
- Background color: Contrast ratio >= 1.05:1 = perceptible. < 1.05:1 = imperceptible. FAIL.

#### B5. Mechanism Justification (STEP 7: 3 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| B5.1 | Each mechanism justified | "I deploy [name] BECAUSE [content feature] at [location]" for EVERY mechanism |
| B5.2 | 3+ rejection rationales | For at least 3 rejected mechanisms: "I reject [name] BECAUSE [reason it doesn't fit THIS content]" |
| B5.3 | Content-based, not catalog-based | "This content has [feature] so mechanism X fits" NOT "mechanism X is for [catalog description]" |

#### B6. Fractal Coherence (STEP 8: 7 items, 2 Scales for Middle)

| ID | Check | Pass Condition |
|----|-------|---------------|
| B6.1 | Scale coverage table for 2 scales | Table with Page scale AND Component scale, with Pattern Expression and CSS Evidence columns |
| B6.2 | Page scale follows pattern | CRESCENDO: sparse-to-dense sections. F-PATTERN: dense left, sparse right. Etc. |
| B6.3 | Component scale mirrors pattern | CRESCENDO: component headers sparser than bodies (or similar micro-expression) |
| B6.4 | CSS evidence for Page scale | Specific CSS properties cited: section padding values, background colors, spacing progression |
| B6.5 | CSS evidence for Component scale | Internal padding, label vs body spacing, density within components |
| B6.6 | Direction consistent between scales | Page direction matches Component direction (both sparse-to-dense, NOT page sparse-to-dense but component dense-to-sparse) |
| B6.7 | Pattern structural, not decorative | Expressed through spacing, density, hierarchy, rhythm -- NOT color theme or decorative motif |

#### B7. Soul Compliance (STEP 9: 7 items)

| ID | Check | Absolute Constraint |
|----|-------|---------------------|
| B7.1 | border-radius: 0 | No element has border-radius > 0 (ABSOLUTE) |
| B7.2 | box-shadow: none | No element uses box-shadow (ABSOLUTE) |
| B7.3 | No gradients | No linear-gradient, radial-gradient, conic-gradient |
| B7.4 | No pure black #000000 | No #000000 or rgb(0,0,0) |
| B7.5 | No pure white #FFFFFF | No #FFFFFF or rgb(255,255,255) |
| B7.6 | Typography trinity | Instrument Serif (display headings), Inter (body), JetBrains Mono (code) |
| B7.7 | Color palette from tokens.css | All colors trace to tokens.css custom properties or warm palette derivatives |

#### B10. Additional Build Quality (STEP 10: 6 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| B10.1 | Semantic HTML landmarks | At least 3 of: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` |
| B10.5 | Zone backgrounds follow density pattern | CRESCENDO: lighter (sparse) -> darker (dense). Background sequence consistent with B6.2 pattern |
| B10.7 | Code blocks use mechanism #17 (if deployed) | Dark background (~#1A1A1A), 3px solid border, JetBrains Mono, overflow-x: auto. N/A if #17 not deployed. |
| B10.9 | WCAG AA contrast >= 4.5:1 | All primary text-background combinations pass WCAG AA |
| B10.12 | Border weights follow 3-category system | 3-4px structural, 1px separator, NEVER 2px (unless documented exception) |
| B10.14 | Single self-contained HTML file | One .html file, all CSS in `<style>`, fonts via CDN only, no external CSS/JS |

---

### Section C: Measurement and Metrics (22 items)

#### C1. Structural Metrics (7 observational metrics)

| ID | Metric | Expected Range (Descriptive, NOT Prescriptive) |
|----|--------|-------------------------------------------------|
| C1.1 | CSS line count | 350-500 lines |
| C1.2 | Custom property count | Document actual (no target) |
| C1.3 | Grid/flex layout count | 2-3 |
| C1.4 | Pseudo-element count | 1-3 |
| C1.5 | Responsive breakpoint count | 2-3 |
| C1.6 | Total HTML file size | Document actual (no target) |
| C1.7 | Unique color values count | Document actual (should correlate with token compliance) |

**Pass condition for C1:** All 7 measured and documented. Out-of-range = flagged for analysis, NOT auto-failed.

#### C2. Mechanism Analysis (5 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| C2.1 | Total count documented | Exact count with list |
| C2.2 | Category coverage documented | For each of 5 categories: which deployed, which rejected |
| C2.3 | Listed by catalog number and name | e.g., "#1 Border-Weight Gradient" |
| C2.4 | Comparison table: Middle vs Variant B | Side-by-side: count, categories, specific mechanisms, content type |
| C2.5 | Overlap with Variant B | % shared. High >80% = derivative. Low <40% = novel. |

#### C3. Programmatic Audit (5 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| C3.1 | Soul compliance score | Fraction (e.g., 7/7) from B7.1-B7.7 |
| C3.2 | Guardrail compliance score | Fraction from B9.1-B9.8 |
| C3.3 | Token compliance percentage | % of CSS values from tokens.css |
| C3.4 | Audit via Playwright | Computed styles from rendered page, not CSS source |
| C3.5 | Audit protocol compliance | (1) Scroll animations disabled: `animation: none !important; opacity: 1 !important`. (2) `document.fonts.ready` before font checks. (3) Computed styles measured. (4) Header-content alignment, Q/A text alignment, border shorthand order verified. |

#### C4. Perceptual Audit -- Mode 2 (10 items)

**At 1440px (5 items):**

| ID | Check | Pass Condition |
|----|-------|---------------|
| C4.1 | PA-01: Container-content ratio | 940-960px container harmonious with content |
| C4.2 | PA-02: Density rhythm | At least 3 distinct padding values creating intentional pacing |
| C4.3 | PA-03: Zone differentiation | At least 2 visually distinct zones (background, border, or spacing) |
| C4.4 | PA-04: Spatial variety | At least 1 grid/flex layout breaks block stacking |
| C4.5 | PA-05: Engagement threshold (OPERATIONALIZED) | See Section 5 below |

**At 768px (5 items):**

| ID | Check | Pass Condition |
|----|-------|---------------|
| C4.6 | PA-01 at 768px | Content fills viewport appropriately |
| C4.7 | PA-02 at 768px | Rhythm maintained or gracefully adapted |
| C4.8 | PA-03 at 768px | Zones still visually distinct |
| C4.9 | PA-04 at 768px | Layout variation adapted (grid->stacked OK, breaks NOT OK) |
| C4.10 | PA-05 at 768px (OPERATIONALIZED) | See Section 5 below (adjusted thresholds) |

---

### Section D: Evaluation Criteria (12 items)

#### D1. Side-by-Side with Variant B (5 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| D1.1 | Spatial variety comparison | Count grid/flex in each. Middle should have MORE. |
| D1.2 | Category coverage comparison | Middle = [X] categories, Variant B = 2 categories |
| D1.3 | Fractal coherence comparison | Middle has scale table, Variant B has [description] |
| D1.4 | Density rhythm comparison | Section padding values listed for both. Middle should show more deliberate variation. |
| D1.5 | Mechanism count comparison | Middle: [X] mechanisms, [Y] categories. Variant B: 5 mechanisms, 2 categories. |

#### D2. Engagement Threshold Assessment (4 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| D2.1 | PA-05 scores documented | Structured format per sub-criterion: PA-05a [score], PA-05b [ratio], PA-05c [PASS/FAIL], PA-05d [ratio]. Composite: YES/MARGINAL/NO. |
| D2.2 | Better than Variant B | YES / MARGINAL / NO with at least 2 specific PERCEPTUAL observations |
| D2.3 | Spatial atmosphere | "Want to spend time here?" -- YES / SOMEWHAT / NO. Evidence must cite builder-created decisions, NOT system defaults. |
| D2.4 | Fresh-eyes test (optional) | Zero-context agent views Middle + 3-4 other pages, rates which feel most "designed" |

#### D3. Novelty Assessment (3 items)

| ID | Check | Threshold |
|----|-------|-----------|
| D3.1 | Structural fingerprint | 20px Gaussian blur comparison with OD-004, DD-006. DISTINCT or SAME. |
| D3.2 | CSS value overlap | For shared mechanisms: < 30% = novel. > 60% = derivative. |
| D3.3 | Mechanism combination | Are COMBINATIONS same as showcase pages or different? |

---

### Section E: The Verdict (12 check items + 4 scenarios)

#### E1. Verdict Decision (3 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| E1.1 | Verdict stated | Exactly one of: SUCCESS / PARTIAL / FAILURE |
| E1.2 | Maps to decision matrix | Both engagement AND novelty dimensions: Designed+Novel / Designed+Derivative / Under-designed+Novel / Under-designed+Derivative |
| E1.3 | 3+ supporting evidence | At least 3 specific documented observations from C4, D1, D2, D3 |

#### E2. SUCCESS Criteria (ALL must be true, 7 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| E2.1 | PA-05 at 1440px = YES | C4.5 composite = YES (4/4 sub-criteria PASS) |
| E2.2 | Better than Variant B = YES (not MARGINAL) | Clear improvement, not marginal |
| E2.3 | Spatial atmosphere = YES or SOMEWHAT | "Want to spend time here" at least partially true |
| E2.4 | 5-category coverage = PASS | -> See B3.6 |
| E2.5 | Novelty signals >= 2 of 3 | D3.1/D3.2/D3.3: at least 2 indicate novel |
| E2.6 | Container width = 940-960px | -> See B2.1 |
| E2.7 | Soul compliance = 7/7 | -> See C3.1 |

#### E3. PARTIAL Verdict Scenarios (4 scenarios, NOT check items)

| Scenario | Pattern | Interpretation |
|----------|---------|---------------|
| Designed but not atmospheric | PA-05 = YES (C4.5) but atmosphere = NO (D2.3) | Lookup-based achieves structure but not atmosphere |
| Designed but derivative | PA-05 = YES (C4.5) but novelty < 2 of 3 (D3.x) | Selection logic converges with showcases |
| Ambiguous engagement | PA-05 = MARGINAL at both viewports (C4.5, C4.10). MARGINAL = 2-3 of 4 sub-criteria PASS. | Threshold is in gray zone |
| Marginal improvement | Better than Variant B = MARGINAL (D2.2) | Unclear if mechanisms or content quality drove improvement |

#### E4. FAILURE Criteria (any 1 true, 5 items)

| ID | Check | Interpretation |
|----|-------|---------------|
| E4.1 | PA-05 at 1440px = NO | 0-1 of 4 sub-criteria PASS. Lookup-based cannot produce engagement without metaphor. |
| E4.2 | Better than Variant B = NO | Middle equal to or worse despite more mechanisms |
| E4.3 | All 3 novelty signals = DERIVATIVE | Page structurally copies showcase pages |
| E4.4 | Container width violated (B2.1 FAIL) | #1 Phase D failure mode recurred |
| E4.5 | 5-category coverage failed (B3.6 FAIL) | Per-category minimum did not produce breadth |

---

### Section F: Post-Experiment Decisions (15 items)

#### F1. If SUCCESS (5 items)

| ID | Action |
|----|--------|
| F1.1 | Apply M1 to skill permanently (if not already applied) |
| F1.2 | Proceed to Wave 2 planning (M6, M7) |
| F1.3 | Plan Ceiling experiment with SAME content |
| F1.4 | Document which mechanisms had strongest content fit |
| F1.5 | Document gaps for Wave 2 |

#### F2. If PARTIAL (5 items)

| ID | Action |
|----|--------|
| F2.1 | Analyze WHICH dimension is missing (spatial variety, depth, coherence, atmosphere) |
| F2.2 | Consider adjusting per-category parameters |
| F2.3 | Consider 2nd Middle build with adjustments |
| F2.4 | Evaluate whether content choice affected result |
| F2.5 | Do NOT proceed to Ceiling until PARTIAL understood |

#### F3. If FAILURE (5 items)

| ID | Action |
|----|--------|
| F3.1 | Distinguish content-specific vs fundamental failure |
| F3.2 | Analyze M1-specific vs tier-model failure |
| F3.3 | Consider Floor/Ceiling binary (dropping Middle) |
| F3.4 | Re-examine whether "no metaphor" is the actual problem |
| F3.5 | Do NOT proceed to Wave 2 |

---

### Section G: Meta-Checks (8 items)

| ID | Check | Pass Condition |
|----|-------|---------------|
| G1 | Mechanism counts = DESCRIPTIVE | Tier table includes "backward-engineered from existing pages" and "proxy not target" |
| G2 | "Sample 2-4" = PROBLEM | Any reference to "2-4 mechanisms" labeled as broken state |
| G3 | Patterns distinguished from mechanisms | Pattern = "skeleton" / "spatial organization." Mechanism = "flesh" / "individual CSS technique" |
| G4 | Creative derivation vs lookup explained | Middle = "content feature -> mechanism" (direct). Ceiling = "metaphor -> semantic dimension -> multiple mechanisms" |
| G5 | Fractal coherence with concrete examples | "Page scale = section sequence" and "Component scale = internal structure mirrors pattern" |
| G6 | Scales and mechanisms distinguished | Scales = depth of coherence (zoom levels). Mechanisms = breadth of vocabulary (CSS techniques). Separate dimensions. |
| G7 | M1 sequencing with rationale | Why M1 was Wave 2, why arguably a mistake, which option chosen and why |
| G8 | Experiment implications documented BEFORE build | Verdict framework (Section E) and post-experiment decisions (Section F) exist before build starts |

---

### Section H: Completeness Cross-Check (6 coverage tables)

H1 maps master-agenda Phase 2 to checklist sections.
H2 maps exec-prompt Section 4 (M1, M2, M3, M5) to checklist.
H3 maps HANDOFF.md to checklist.
H4 maps conversation-clarifications C1-C8 to checklist.
H5 maps SKILL.md to checklist.
H6 maps hardening specs (21-*.md) to checklist.

All coverage tables verified 93%+ accurate per 20-checklist-traceability-audit.md.

---

## 4. BUILD WORKFLOW SEQUENCE

**Source:** 21-section-b-reorder.md (entire file).

The critical ordering insight is that the pre-hardening checklist had B8 (Always-load) at position 8 and B9 (Guardrails) at position 9, creating dependency violations where builders made design decisions BEFORE reading constraints.

**Correct sequence:**

| Step | Subsection | Action | Dependencies |
|------|-----------|--------|-------------|
| 1 | B8 Token Compliance | Read prohibitions.md + tokens.css | MUST be first |
| 2 | B1 Pipeline Routing | Classify tier, select pattern | After B8 |
| 3 | B9 Guardrail Compliance | Know padding floors | After B8, before B2 |
| 4 | B2 Container Width | Set 940-960px max-width | After B9 (guardrails inform padding) |
| 5 | B3 Mechanism Breadth | Deploy 1+ per category | After B2 (mechanisms within container) |
| 6 | B4 Mechanism Count | Verify 7-12 landed naturally | After B3 |
| 7 | B5 Mechanism Justification | Document content fit | After B3/B4 |
| 8 | B6 Fractal Coherence | Verify 2-scale coherence | After B3-B5 |
| 9 | B7 Soul Compliance | Final verification (automated regex) | After all design work |
| 10 | B10 Additional Quality | Semantic HTML, WCAG, borders, etc. | After B7 |

---

## 5. PA-05 OPERATIONALIZATION (4 Binary Sub-Criteria)

**Source:** 21-pa05-operationalization.md (entire file, 505 lines).

PA-05 ("page feels designed") was the checklist's Achilles heel: binary confidence 1.5/5, estimated 30-70% inter-rater disagreement. It appeared in 7 checklist items (C4.5, C4.10, D2.1, E2.1, E3.1, E3.3, E4.1). Now operationalized into 4 measurable sub-criteria:

### PA-05a: Non-Default Layout Element Count >= 2

**Question:** Elements requiring CUSTOM spatial logic (not achievable by CSS framework defaults)?

**Qualifying elements:**
- Asymmetric multi-column layouts (not 50/50 or 33/33/33)
- Bento grids with different spans
- Width-constrained blocks narrower than parent (via max-width/padding, not container width)
- Full-bleed backgrounds behind constrained content
- Solid-offset depth elements (transform: translate)
- Content sections with deliberately different internal padding structures

**NOT qualifying:** Equal-width columns, single-column centered, standard header/footer/main, uniform card grids, default blockquote with border-left only.

**Pass:** Count >= 2. **Fail:** Count < 2.

### PA-05b: Padding Range Ratio >= 2.0x

**Question:** Largest section padding / smallest section padding >= 2.0?

**Examples:**
- 80px / 32px = 2.5x -- PASS
- 64px / 32px = 2.0x -- PASS (boundary)
- 48px / 40px = 1.2x -- FAIL

**Relationship to existing checks:**
- B9.3 says deepest >= 40% of shallowest (prevents OVER-compression)
- PA-05b says largest >= 2x smallest (prevents UNDER-variation)
- Complementary bounds.

### PA-05c: Visual Hierarchy Identification Test

**Question:** Can a fresh agent identify PRIMARY and SECONDARY zones from 20px Gaussian-blurred screenshot within 3 seconds?

**Procedure:**
1. Builder documents during build: PRIMARY ZONE and SECONDARY ZONE
2. Take screenshot, apply 20px Gaussian blur
3. Fresh agent views blurred screenshot for 3 seconds, identifies both zones
4. Compare: both match builder intent = PASS. Either wrong or indistinguishable = FAIL.

**Practical fallback:** Squint at page from arm's length, or zoom browser to 25%.

### PA-05d: Non-Framework CSS Ratio >= 15%

**Compositional CSS (counts):** calc(), pseudo-elements (::before/::after), grid-template, transform, nth-child, semantic selectors, different values for same element type.

**Framework CSS (does NOT count):** Token variable application, standard resets, typography declarations, uniform spacing, basic responsive font adjustments.

**Pass:** Ratio >= 0.15 (15%). **Fail:** < 0.15.

### Composite Scoring

| Score | Result |
|-------|--------|
| 4/4 sub-criteria PASS | **PA-05 = YES** (Designed) |
| 2-3/4 sub-criteria PASS | **PA-05 = MARGINAL** |
| 0-1/4 sub-criteria PASS | **PA-05 = NO** (Formatted) |

### 768px Adjusted Thresholds

| Sub-criterion | 1440px Threshold | 768px Threshold | Rationale |
|---------------|-----------------|-----------------|-----------|
| PA-05a | >= 2 elements | >= 1 element | Grid->stacked expected, but at least 1 should survive |
| PA-05b | >= 2.0x ratio | >= 1.5x ratio | Responsive compresses padding range |
| PA-05c | Same method | Same method, different screenshot | |
| PA-05d | >= 15% | Same as 1440px (CSS doesn't change) | Carried from 1440px |

### Anti-Gaming Effectiveness

Testing against the "worst possible passing page" from the gaming audit:

| Sub-criterion | Worst Page Score | Result |
|---------------|-----------------|--------|
| PA-05a | 0 (single-column, no custom layouts) | FAIL |
| PA-05b | 1.08x (52px / 48px) | FAIL |
| PA-05c | Uniform gray rectangle at blur | FAIL |
| PA-05d | ~5% (5 minimal mechanisms) | FAIL |
| **Composite** | **0/4 = NO** | **Correctly identifies mediocre page** |

---

## 6. MECHANISM HARDENING SPECS

**Source:** 21-mechanism-hardening.md (entire file, 593 lines).

### B4.4: Mechanism Interaction Check

**Purpose:** Close the SINGLE LARGEST gaming surface (Surface 3 from gaming audit): no checklist item verified mechanisms work TOGETHER.

**Requirement:** 2+ reinforcing pairs encoding SHARED content dimensions.

**What counts as reinforcing:**
- Two mechanisms encode the SAME structural property (importance, hierarchy, section type)
- SHARED dimension must be documented with content evidence
- Example: "#4 Spacing Compression + #7 Zone Background both encode section importance BECAUSE content has 3 section types (intro/detail/summary). Intro: sparse padding (80px) + light background. Detail: dense padding (32px) + darker background."

**What does NOT count:**
- Mechanisms solving DIFFERENT problems (e.g., #1 border-weight for headings + #17 code block for syntax = no shared dimension)
- Structural symmetry (e.g., #13 header + #14 footer = balance, not content encoding)

**Why 2 pairs:** 1 pair could be coincidental. 2 establishes systematic thinking. 3+ is Ceiling territory.

### B4.5: Mechanism Perceptibility Floor

**Purpose:** Prevent gaming via invisible CSS differences (e.g., 48px vs 49px padding = technically deployed, perceptually invisible).

**Threshold Rule:** 10% OR 8px, whichever is GREATER.

**Detailed thresholds by property:**

| Property | Base Value | 10% | 8px | Use Greater |
|----------|-----------|-----|-----|-------------|
| Padding (48px) | 48px | 4.8px | 8px | 8px: 48 vs 56 = perceptible |
| Padding (80px) | 80px | 8px | 8px | 8px: 80 vs 88 = perceptible |
| Width (960px) | 960px | 96px | 8px | 96px: 960 vs 1056 = perceptible |
| Font size (16px) | 16px | 1.6px | 8px | 8px: 16 vs 24 = perceptible |
| Border (4px) | 4px | 0.4px | 8px | 1px: 4 vs 3 = 25% = perceptible |
| Background color | -- | 10% lightness shift | N/A | Contrast ratio >= 1.05:1 |

### B4.1 Modification: Floor Raised to 7

**Old:** 5-12. **New:** 7-12.

**Rationale:** 5 mechanisms = Floor-tier profile (Variant B deployed 5-7). Middle MUST be distinguishable from Floor. 7 = minimum Floor (5) + 2 additional. Creates friction without mandating natural landing (8-10).

**Why not 8:** Setting floor at 8 makes 8 the TARGET (Goodhart's Law). Natural landings emerge from breadth, shouldn't be mandated.

---

## 7. KNOWN GAMING VULNERABILITIES AND COUNTERMEASURES

**Source:** 20-checklist-gaming-audit.md (entire file, 543 lines).

### Overall Gaming Resistance

- **Pre-hardening:** 6/10
- **Post-hardening:** 8/10
- **Irreducible gap (2/10):** PA-05 subjective component (1/10) + builder skill/judgment (1/10)

### Three Gaming Surfaces

**Surface 1: Threshold Gaming (14 items)**
Quantitative floors too low. Key fixes applied:
- B4.1 floor raised from 5 to 7
- PA-05 operationalized with quantitative sub-criteria (prevents "any intentional CSS = designed")
- B4.5 perceptibility floor (prevents invisible mechanism deployment)

**Surface 2: Qualitative Ambiguity (23 items)**
Judgment items disguised as binary. Key fixes applied:
- PA-05 decomposed into 4 measurable sub-criteria
- D2.1 evidence format changed from free-form to structured template
- E3 MARGINAL defined as 2-3/4 sub-criteria

**Surface 3: Missing Cross-Item Coherence (0 items pre-hardening)**
THE single largest gaming surface. Fixed by:
- B4.4 mechanism interaction check (2+ reinforcing pairs)

### Worst Possible Passing Page (Pre-Hardening)

A single-column 940px page with 5 independently deployed mechanisms (one per category), 48-52px uniform padding, barely perceptible background alternation (#FEF9F5 vs #FAF5ED), CRESCENDO claimed via 52px -> 48px decrease. Soul-compliant but zero spatial atmosphere.

**Post-hardening, this page FAILS:**
- B4.1: 5 mechanisms < 7 floor -- FAIL
- B4.4: no reinforcing pairs -- FAIL
- B4.5: padding 48 vs 52 = 4px < 8px threshold -- FAIL
- PA-05a: 0 custom layout elements < 2 -- FAIL
- PA-05b: 52/48 = 1.08x < 2.0x -- FAIL

### Remaining Vulnerabilities (Post-Hardening)

1. **B5.1 justification gaming:** "I deploy #1 because content has headings" = trivially satisfies template. Countermeasure: B5.3 requires content features not catalog descriptions, but this remains judgment-based.
2. **B6.4/B6.5 evidence gaming:** "padding varies" technically cites CSS. Countermeasure: items now require EXACT VALUES (not claims).
3. **D2.3 atmosphere gaming:** "Warm palette creates pleasant reading" describes system defaults, not builder choices. Countermeasure: evidence must cite builder-created spatial decisions.

---

## 8. KNOWN MEASUREMENT ISSUES

**Source:** 20-checklist-measurement-audit.md (entire file, 1022 lines).

### Item Classification

| Type | Count | % | Inter-rater Reliability |
|------|-------|---|------------------------|
| Truly binary (confidence 5) | 47 | 36% | 95-100% agreement |
| High binary (confidence 4) | 24 | 19% | 90-95% agreement |
| Moderate binary (confidence 3) | 20 | 15% | 85-90% agreement |
| Judgment-disguised-as-binary | 26 | 20% | 30-70% without operationalization, 70-85% with |
| Meta/coverage | 12 | 9% | N/A |

### Judgment Hotspots (26 Items Requiring Most Care)

**Perceptual Audit (10 items):** C4.2, C4.3, C4.4, C4.5, C4.10, D2.1, D2.3 -- highest judgment burden
**Engagement Threshold (5 items):** PA-05 appears in C4.5, C4.10, D2.1, E3.1, E4.1
**Comparative Verdicts (3 items):** D2.2, E2.2, E3.4

### Vague Thresholds Requiring Disambiguation

| Item | Ambiguity | Resolution |
|------|-----------|------------|
| A2.1 word count | Code blocks? Headings? | All visible text excluding `<code>`, `<pre>`, `<script>`, `<style>`. Headings count. |
| B9.2 CPL | Which paragraph? | First body paragraph after first H2. If fails, check 2 more. PASS if 2/3. |
| B9.3 compression | Top, bottom, left, right? | Use max padding value per section. |
| B9.5 breathing | What is "major section"? | `<section>`, `.section`, or `main > div` with >= 2 children OR > 100 words. |
| C1.1 CSS lines | Minified? Comments? | Formatted (1 property/line). Exclude blank lines and comments. |
| C4.2 distinct values | How distinct? | Differ by > 4px. 64px and 60px = NOT distinct. 64px and 58px = distinct. |

### Evaluation Time

| Phase | Estimated Time |
|-------|---------------|
| Pre-build decisions (A, G, H) | 80-125 minutes |
| Build (integrated, B) | +10 minutes |
| Programmatic audit (C3, automated) | 5 minutes |
| Perceptual audit (C4, manual) | 30 minutes |
| Comparison/evaluation (D) | 74-104 minutes |
| Verdict/decisions (E, F) | 50 minutes |
| **TOTAL** | **4.2-5.4 hours** |

**Quick Check (15 items):** 30-40 minutes. Catches 80% of issues.

---

## 9. CROSS-VALIDATION RESULTS

**Source:** 21-cross-validation.md (entire file, 358 lines).

### Validation Score: 8/10 PASS

| Check | Result |
|-------|--------|
| PA-05 references (7 items) use new sub-criteria | PASS |
| 11 new items properly formatted and integrated | PASS |
| Section B reorder internally consistent | PASS |
| E-section references point to correct B/C items | PASS |
| Item count in header matches actual | FAIL (Section B undercounted) |
| Mechanism floor 7-12 consistent | PASS |
| Critical-10 list complete | PASS |
| No orphaned cross-references | PASS |
| E3 scenarios properly reclassified | PASS |
| Table format consistent | FAIL (pre-existing, intentional format variation) |

### Known Issue: Item Count Discrepancy

Section B stated count is 46 but actual is likely 53. The pre-hardening count of 35 was already an undercount (actual was 44 per the reorder spec). With +9 new items, actual B = 53. This is a documentation bug, not a structural issue. All items exist and are correctly positioned.

---

## 10. CHANGELOG SUMMARY

**Source:** 21-checklist-changelog.md (entire file, 217 lines).

| Category | Count | Detail |
|----------|-------|--------|
| New items added | 9+2=11 | A1.0, B2.5, B4.4, B4.5, C3.5, B10.1, B10.5, B10.7, B10.9, B10.12, B10.14 |
| Items modified | 7 | B4.1 (floor), C4.5, C4.10, D2.1, E2.1, E4.1 (PA-05), E2.4/E2.6/E2.7 (dedup) |
| Sections reordered | 1 | Section B (by build workflow) |
| Sections restructured | 2 | E3 (scenarios), B10 (new section) |
| Coverage tables added | 1 | H6 (hardening specs) |
| Critical items | 7 -> 10 | +B2.5, +B4.4, +A1.0 |
| Total item count | 129 -> 138 | +9 new items |

---

## 11. TRACEABILITY FINDINGS

**Source:** 20-checklist-traceability-audit.md (entire file, 787 lines).

### Coverage Assessment

| Source Document | Coverage |
|-----------------|----------|
| Master-agenda Phase 2 | 100% |
| Exec-prompt Section 4 (M1-M5) | 98% (M3 priority order gap -- now filled by B2.5) |
| HANDOFF.md | 95% (audit protocol gap -- now filled by C3.5) |
| SKILL.md | 100% |
| Conversation-clarifications C1-C8 | 100% |
| Prohibitions.md | 100% |
| Tokens.css | Appropriate selective coverage |

### Critical Gaps (All Resolved by Hardening)

1. **Container width priority order** -- RESOLVED by B2.5
2. **Audit protocol specifics** -- RESOLVED by C3.5
3. **M1 current status verification** -- RESOLVED by A1.0
4. **M1 status contradiction** (checklist treated as future decision vs sources stating M1 NOT applied) -- RESOLVED by A1.0 requiring builder to quote actual SKILL.md text

### Section H Accuracy: 93% (24/26 mappings fully accurate)

### G-Section Accuracy: 100% (8/8 meta-checks correctly represent clarifications)

---

## 12. COMPLETENESS AUDIT FINDINGS

**Source:** 20-checklist-completeness-audit.md (entire file, 461 lines).

### Adopted Items (Tier-1, now in checklist)

| ID | Gap Addressed |
|----|--------------|
| B10.1 | Semantic HTML landmarks (accessibility + mechanism correctness) |
| B10.5 | Zone backgrounds follow density pattern (fractal coherence) |
| B10.7 | Code block mechanism #17 styling (component category quality) |
| B10.9 | WCAG AA contrast ratio (accessibility) |
| B10.12 | Border weight 3-category system (grammar compliance) |
| B10.14 | Single self-contained HTML file (production format) |

### Not Adopted (Out of Scope or Adequately Covered)

- Whitespace quality: Covered by B9.1-B9.6 + C4.2
- Visual rhythm precision: Covered by density pattern checks + perceptual audit
- Build process quality: Covered by existing pre/post documentation
- Print/export: Out of scope (screen-based focus)
- Dark mode: Out of scope (warm palette is identity constraint)
- Cross-browser: Out of scope (standard CSS, experiment focus)

### Most Significant Remaining Gaps

1. **Coherence rule verification** (SKILL.md Steps 4.3 C-1 through C-5): Only partially addressed by B10.12 (border grammar). Color semantic mapping (C-5) NOT fully checked.
2. **Font loading verification**: Not in checklist. If fonts fail to load, typography trinity is nominally present but visually absent.
3. **Per-category token compliance**: B8.1 checks overall 80% but a page could be 100% spacing-compliant and 0% color-compliant.

---

## 13. USABILITY AUDIT FINDINGS

**Source:** 20-checklist-usability-audit.md (entire file, 1049 lines).

### Key Practical Barriers

1. **Volume:** 138 items is 4-6x industry standard. Fatigue onset at item 30-40.
2. **Time cost:** 4-5 hours evaluation for 1-2 hour build (3-4x ratio).
3. **Judgment items:** 26 items require subjective assessment despite "binary" framing.
4. **Automation gap:** Only ~25% (32 items) fully automatable.
5. **Section B ordering:** Now fixed by build workflow reorder.
6. **Section E redundancy:** Now fixed by deduplication to references.

### Automation Breakdown

| Type | Item Count | % | Method |
|------|-----------|---|--------|
| Fully automated (Playwright + regex) | ~32 | 25% | Soul, container, guardrails, metrics |
| Agent-assisted | ~40 | 31% | Mechanism deployment, fractal, content, comparison |
| Human judgment | ~41 | 32% | Perceptual audit, engagement, novelty, meta-checks |
| Observational | ~16 | 12% | Metrics with no pass/fail threshold |

### Three-Tier Evaluation Protocol

**Tier 1 (Automated, 5 min):** Soul compliance, container width, guardrails, structural metrics. ~32 items.
**Tier 2 (Agent-assisted, 45-60 min):** Mechanism deployment, fractal coherence, content verification, comparison. ~40 items.
**Tier 3 (Human judgment, 1-2 hours):** Perceptual audit, engagement/atmosphere, novelty, meta-checks, verdict. ~41 items.

---

## 14. KEY THRESHOLDS REFERENCE TABLE

All quantitative thresholds from the checklist, organized for quick reference:

| Property | Threshold | Item(s) | Type |
|----------|-----------|---------|------|
| Container max-width | 940-960px | B2.1 | NON-NEGOTIABLE |
| Horizontal padding | >= 32px per side | B9.1 | Guardrail |
| Characters per line | 45-80 | B9.2 | WCAG |
| Compression ratio | Deepest >= 40% of shallowest | B9.3 | Guardrail |
| Body line-height | >= 1.5 | B9.4 | WCAG |
| Section breathing | >= 48px between sections | B9.5 | Guardrail |
| Heading-body gap | >= 16px | B9.6 | Guardrail |
| Token compliance | >= 80% of CSS values | B8.1 | Quality floor |
| Mechanism count | 7-12 | B4.1 | Middle-tier range |
| Mechanism categories | 5/5 covered | B3.6 | Differentiator |
| Mechanism interactions | >= 2 reinforcing pairs | B4.4 | Coherence |
| Perceptibility | Differences >= 10% OR 8px | B4.5 | Anti-gaming |
| CSS line count | 350-500 (descriptive) | C1.1 | Observational |
| Grid/flex layouts | 2-3 (descriptive) | C1.3 | Observational |
| Pseudo-elements | 1-3 (descriptive) | C1.4 | Observational |
| Breakpoints | 2-3 (descriptive) | C1.5 | Observational |
| Word count | 800-1,200 | A2.1 | Content req |
| Structural element types | >= 4 | A3.1 | Content req |
| Element dominance | No type > 60% | A3.2 | Content req |
| PA-05a non-default elements | >= 2 (1440px), >= 1 (768px) | C4.5/C4.10 | Engagement |
| PA-05b padding ratio | >= 2.0x (1440px), >= 1.5x (768px) | C4.5/C4.10 | Engagement |
| PA-05d compositional CSS | >= 15% | C4.5/C4.10 | Engagement |
| WCAG contrast ratio | >= 4.5:1 | B10.9 | Accessibility |
| Semantic HTML landmarks | >= 3 elements | B10.1 | Quality |
| Content-mechanism fit | >= 3 rejection rationales | B5.2 | Judgment quality |
| Novelty: CSS overlap | < 30% = novel, > 60% = derivative | D3.2 | Novelty |
| Fractal scales | 2 (Page + Component) | B6.1 | Middle-tier |
| Distinct padding values | >= 3 | C4.2 | Density rhythm |
| Visually distinct zones | >= 2 | C4.3 | Zone differentiation |
| Grid/flex layouts for variety | >= 1 | C4.4 | Spatial variety |

---

**END EXTRACTION**

**Files Read (13 total):**
1. `ephemeral/session-insights/18-middle-tier-checklist.md` (493 lines) -- THE 138-item checklist
2. `ephemeral/session-insights/21-quick-check.md` (301 lines) -- 15-item gate
3. `ephemeral/session-insights/21-pa05-operationalization.md` (505 lines) -- PA-05 sub-criteria
4. `ephemeral/session-insights/21-mechanism-hardening.md` (593 lines) -- B4.4, B4.5, floor raise
5. `ephemeral/session-insights/21-missing-items-spec.md` (260 lines) -- A1.0, B2.5, C3.5 + 6 Tier-1
6. `ephemeral/session-insights/21-section-b-reorder.md` (559 lines) -- Build workflow reorder
7. `ephemeral/session-insights/20-checklist-completeness-audit.md` (461 lines) -- Gap analysis
8. `ephemeral/session-insights/20-checklist-gaming-audit.md` (543 lines) -- Gaming vulnerabilities
9. `ephemeral/session-insights/20-checklist-traceability-audit.md` (787 lines) -- Source coverage
10. `ephemeral/session-insights/20-checklist-measurement-audit.md` (1022 lines) -- Binary vs judgment
11. `ephemeral/session-insights/20-checklist-usability-audit.md` (1049 lines) -- Practical barriers
12. `ephemeral/session-insights/21-cross-validation.md` (358 lines) -- 8/10 validation
13. `ephemeral/session-insights/21-checklist-changelog.md` (217 lines) -- Change record
