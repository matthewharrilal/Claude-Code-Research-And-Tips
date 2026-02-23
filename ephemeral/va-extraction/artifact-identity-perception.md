# Pipeline v3: Identity + Perception Constraints
## Layers 1-2 — The Non-Negotiable Foundation

**Purpose:** This document defines the world the builder inhabits. Layer 1 (IDENTITY) is what this design system IS. Layer 2 (PERCEPTION) is the physics of that world — the natural laws that govern what humans can see. Together they form the absolute foundation: everything built must exist within these boundaries, and everything built must be perceptible.

**Routing:** Per council verdict, all items here are DUAL-ROUTE:
- **BUILDER** receives them as WORLD-DESCRIPTION (framed as "this world IS")
- **GATE-RUNNER** receives them as BINARY CHECKS (framed as "FAIL if X")
- **PA AUDITOR** receives perception calibration as JUDGMENT CONTEXT

**Evidence taxonomy** (per council verdict CF-04):
- **FACT** — Binary observation verifiable in data
- **OBSERVED** — Consistent direction across available data, variables not isolated
- **CONFOUNDED** — Direction observed but cannot separate from co-varying factors
- **THEORETICAL** — N=0, hypothesis only
- **SPECULATIVE** — Author estimate with no empirical basis

---

## PART 1: LAYER 1 — IDENTITY (The Soul)

### 1.1 The World-Description

This is a world of sharp surfaces, warm materials, and deliberate restraint. Every page in this design system shares DNA — not because a specification forces it, but because they are built from the same materials (tokens.css), the same structural components (components.css), and the same soul.

The soul is expressed as 10 constraints framed as world-description, not prohibition list. The builder enters this world and creates within it. The gate-runner verifies the world was not broken.

> **Council verdict on framing:** Soul constraints framed as WORLD-DESCRIPTION (not prohibitions list). Builder must NOT receive 55 prohibitions — only the 10 soul constraints. (Pattern 2 ruling: DUAL-ROUTE ratified unanimously.)

---

### 1.2 Soul Constraints (The 10 Non-Negotiables)

These are the design system's DNA. They persist WITHOUT any cross-page specification — tokens.css + soul constraints provide ~80% cross-page coherence inherently.

#### SC-01: Sharp Surfaces
| Field | Value |
|-------|-------|
| Item IDs | ITEM 21 (D01-D03, L53), ITEM 59 (D15-D17, L1284) |
| World-description | Every surface is sharp. Corners are cut, not curved. |
| CSS rule | `border-radius: 0` on ALL elements |
| Gate check | FAIL if any element has `border-radius > 0` |
| Evidence | FACT — observed in 100% of validated pages (Gas Town, CD-006, Middle) |

#### SC-02: No Shadows
| Field | Value |
|-------|-------|
| Item IDs | ITEM 22 (D01-D03, L54), ITEM 60 (D15-D17, L1285) |
| World-description | Light is direct. Nothing floats. Nothing hovers above the page. |
| CSS rule | `box-shadow: none` on ALL elements |
| Gate check | FAIL if any element has `box-shadow` other than `none` |
| Evidence | FACT — observed in 100% of validated pages |

#### SC-03: Container Discipline
| Field | Value |
|-------|-------|
| Item IDs | ITEM 22 (D01-D03, L54), ITEM 44 (D21-D25, L1689), ITEM 157 (D21-D25, L2003), ITEM 80 (D15-D17, L1311) |
| World-description | The page has a spine. Content lives within 940-960px. |
| CSS rule | `max-width: 940-960px` (960px standard; 1100px permitted for data-heavy pages per creative authority) |
| Gate check | FAIL if container `max-width` outside 940-1100px range |
| Evidence | FACT — 60% of builds violated this (3/5), making it the #1 historical failure mode. N=5, binary observation. |

#### SC-04: Warm Palette
| Field | Value |
|-------|-------|
| Item IDs | ITEM 23 (D01-D03, L55), ITEM 55 (D15-D17, L1280), ITEM 56 (D15-D17, L1281), ITEM 57 (D15-D17, L1282), ITEM 58 (D15-D17, L1283) |
| World-description | This is a warm world. Colors carry warmth — red leads, cream grounds, near-black anchors. |
| CSS values | `--color-primary: #E83025` (red), `--color-background: #FEF9F5` (warm cream), `--color-text: #1A1A1A` (near-black), 5 accent colors (all matching) |
| Gate check | FAIL if `--color-primary` is not `#E83025`; FAIL if `--color-background` is not `#FEF9F5`; FAIL if `--color-text` is not `#1A1A1A`; FAIL if accent colors do not match token definitions |
| Evidence | FACT — hex colors survive compression perfectly (100% fidelity across all builds) |

#### SC-05: Font Trinity
| Field | Value |
|-------|-------|
| Item IDs | ITEM 23 (D01-D03, L55), ITEM 61 (D15-D17, L1286) |
| World-description | Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code. |
| CSS values | `font-family: 'Instrument Serif'` (headings), `font-family: 'Inter'` (body), `font-family: 'JetBrains Mono'` (code) |
| Gate check | FAIL if any element uses a font-family outside these three |
| Evidence | FACT — font trinity survives compression perfectly |

#### SC-06: No Gradients
| Field | Value |
|-------|-------|
| Item IDs | ITEM 23 (D01-D03, L55) |
| World-description | Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces. |
| CSS rule | No `linear-gradient`, `radial-gradient`, or any gradient function in backgrounds |
| Gate check | FAIL if any `background` or `background-image` contains a gradient function |
| Evidence | FACT — observed in 100% of validated pages |

#### SC-07: Zero Decorative Elements
| Field | Value |
|-------|-------|
| Item IDs | ITEM 020 (D21-D25, L1618) |
| World-description | Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist. |
| Gate check | FAIL if any purely decorative element exists (non-functional dividers, ornamental borders not in hierarchy, background images without content purpose) |
| Evidence | OBSERVED — authority dimension analysis confirms restraint as a core quality signal |

#### SC-08: Border-Weight Hierarchy
| Field | Value |
|-------|-------|
| Item IDs | ITEM 45 (D21-D25, L1690), ITEM 65 (D15-D17, L1290), ITEM 017 (D21-D25, L1615) |
| World-description | Borders speak. 4px = primary emphasis (callout left border). 3px = section-level (header bottom, major dividers). 1px = subtle articulation. This hierarchy is absolute. |
| CSS values | `4px` = primary/callout, `3px` = section/header, `1px` = subtle/detail |
| Gate check | FAIL if border weights do not follow 4/3/1 hierarchy; FAIL if 4px used for non-primary elements |
| Evidence | FACT — border weights survive compression (N=8 reports confirm, SOLID) |

#### SC-09: Header DNA
| Field | Value |
|-------|-------|
| Item IDs | ITEM 64 (D15-D17, L1289) |
| World-description | The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful. Every page starts with authority. |
| CSS values | `background: dark` (dark variant), `border-bottom: 3px solid #E83025` |
| Gate check | FAIL if header does not have dark background + 3px red bottom border |
| Evidence | FACT — shared DNA property observed identically across independently-built pages |

#### SC-10: Typography Foundations
| Field | Value |
|-------|-------|
| Item IDs | ITEM 62 (D15-D17, L1287), ITEM 63 (D15-D17, L1288), ITEM 66 (D15-D17, L1291) |
| World-description | Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic — a quiet distinction. |
| CSS values | `body { font-size: 1rem; line-height: 1.7; }`, `p { max-width: 70ch; }`, `h3 { font-style: italic; }` |
| Gate check | FAIL if body line-height is not 1.7; FAIL if paragraph max-width exceeds 70ch; FAIL if h3 is not italic |
| Evidence | FACT — shared DNA property observed identically across independently-built pages |

---

### 1.3 Family DNA — Shared Properties

The following ~30 properties are IDENTICAL across independently-built pages (Gas Town, CD-006). This is the design system's genetic code. It persists WITHOUT any cross-page specification because the builder reads tokens.css (183 lines) and components.css (290 lines), which encode these properties.

| Item IDs | Property | Value | Evidence |
|----------|----------|-------|----------|
| ITEM 55 (D15-D17, L1280) | `--color-primary` | `#E83025` | FACT |
| ITEM 56 (D15-D17, L1281) | `--color-background` | `#FEF9F5` | FACT |
| ITEM 57 (D15-D17, L1282) | `--color-text` | `#1A1A1A` | FACT |
| ITEM 58 (D15-D17, L1283) | 5 accent colors | all match tokens | FACT |
| ITEM 59 (D15-D17, L1284) | `border-radius` | `0` | FACT |
| ITEM 60 (D15-D17, L1285) | `box-shadow` | `none` | FACT |
| ITEM 61 (D15-D17, L1286) | font trinity | Instrument Serif / Inter / JBM | FACT |
| ITEM 62 (D15-D17, L1287) | body typography | `1rem / 1.7` | FACT |
| ITEM 63 (D15-D17, L1288) | paragraph max-width | `70ch` | FACT |
| ITEM 64 (D15-D17, L1289) | header | dark bg + 3px red bottom border | FACT |
| ITEM 65 (D15-D17, L1290) | callout DNA | 4px left border | FACT |
| ITEM 66 (D15-D17, L1291) | h3 style | italic | FACT |
| ITEM 67 (D15-D17, L1292) | syntax highlighting | 6 colors match | FACT |
| ITEM 68 (D15-D17, L1293) | selection | red background | FACT |
| ITEM 69 (D15-D17, L1294) | focus-visible | 3px solid primary | FACT |
| ITEM 70 (D15-D17, L1295) | skip-link | present, red bg | FACT |

**Provenance:**
- ITEM 71 (D15-D17, L1298): ~30 IDENTICAL PROPERTIES = FAMILY DNA
- ITEM 72 (D15-D17, L1299): This persists WITHOUT any cross-page spec
- ITEM 73 (D15-D17, L1300): Source: tokens.css + soul constraints + components.css
- ITEM 83 (D15-D17, L1316): VERDICT: SIBLINGS, NOT STRANGERS
- ITEM 84 (D15-D17, L1318-1319): tokens.css + soul constraints provide ~80% cross-page coherence
- ITEM 92 (D15-D17, L1327): No additional cross-page gate needed. The DNA is INHERENT.

---

### 1.4 Identity Routing Rules

These items govern HOW identity constraints reach agents. They are not builder-facing — they are orchestrator instructions.

| Item ID | Source | VA Line | Rule | Evidence |
|---------|--------|---------|------|----------|
| ITEM 56 (D01-D03) | L113 | Builder must NOT receive prohibition list beyond soul (prevents S-02) | OBSERVED |
| ITEM 25 (D04-D05) | L421 | Builder must NOT receive 55 prohibitions | OBSERVED |
| ITEM 88 (D01-D03) | L236 | 10 soul constraints (count) | FACT |
| ITEM 116 (D01-D03) | L257 | Zero repair-mode suppressors (new pipeline) | THEORETICAL |
| ITEM 117 (D01-D03) | L259 | 20 quality suppressors active (old pipeline — for reference) | FACT |
| ITEM 118 (D01-D03) | L259 | 0 suppressors active (new pipeline target) | THEORETICAL |

> **Council verdict (Pattern 2):** Identity constraints are DUAL-ROUTE. Builder gets world-description. Gate-runner gets binary check. No real contradiction — both advocates agreed unanimously.

---

## PART 2: LAYER 2 — PERCEPTION (The Physics)

### 2.1 The Natural Laws

Perception thresholds are the physics of this design world. They are not arbitrary limits — they are empirically validated boundaries below which CSS becomes invisible to the human eye. The Flagship experiment proved this catastrophically: the builder produced CSS that was technically correct but perceptually invisible because it had no concept of these thresholds.

> **Council verdict (CF-03, Pattern 1):** Perception thresholds MUST reach the builder as CALIBRATION (not pass/fail). The blanket rule "builder sees no thresholds" was a quality suppressor that caused PA-05 1.5/4. Thresholds go to builder as "what humans can see" and to gate-runner as binary checks.

**Framing for builder:** "These are the physics of human perception. Below these values, your CSS is invisible."
**Framing for gate-runner:** "FAIL if value below threshold."

---

### 2.2 Core Thresholds (Universally Agreed, SAFE TO BUILD ON)

These 6 thresholds are confirmed across 5-12 independent research reports with zero contradictions. They form the absolute perceptual floor.

#### PT-01: Background Color Delta
| Field | Value |
|-------|-------|
| Item IDs | ITEM 26 (D01-D03, L60), ITEM 40 (D21-D25, L1685), ITEM 159 (D21-D25, L2005), ITEM 47 (D21-D25, L1697) |
| Natural law | Adjacent zones must differ by at least 15 RGB points for the eye to register a boundary. |
| Floor value | `>= 15 RGB delta` between adjacent zone backgrounds |
| Compositional range | `25-50 RGB delta` — where boundaries become expressive, not just detectable |
| Calibration | 15 RGB = subtle (barely perceptible). 25 RGB = confident. 50 RGB = dramatic. The builder should USE THE FULL RANGE, not park at the floor. |
| Gate check | FAIL if any adjacent zone background delta < 15 RGB |
| Evidence | FACT — 12 reports confirm, SOLID. The Flagship used 15 RGB EVERYWHERE (ITEM 9, D18-D20, L1371), proving that without calibration, "subtle" and "dramatic" collapse to the same value. |
| Failure mode | ITEM 8 (D18-D20, L1365-1373): Pages TECHNICALLY CORRECT but CALIBRATIONALLY FLAT = Flagship failure pattern |
| Lesson | ITEM 10 (D18-D20, L1372-1373): Without calibration, "subtle" and "dramatic" collapse to the same value |

#### PT-02: Letter-Spacing Minimum
| Field | Value |
|-------|-------|
| Item IDs | ITEM 27 (D01-D03, L60), ITEM 43 (D21-D25, L1688), ITEM 159 (D21-D25, L2005), ITEM 48 (D21-D25, L1698) |
| Natural law | Letter-spacing below 0.025em is invisible to the human eye. |
| Floor value | `>= 0.025em` letter-spacing when letter-spacing is applied |
| Compositional range | `0.03-0.05em` — where tracking becomes an expressive tool |
| Gate check | FAIL if any applied letter-spacing < 0.025em |
| Evidence | FACT — 7 reports confirm, SOLID |
| Related risk | ITEM 125 (D21-D25, L1929): P=0.20 micro-typography recurrence (letter-spacing <0.5px). Historical failure pattern. |

#### PT-03: Stacked Gap Maximum
| Field | Value |
|-------|-------|
| Item IDs | ITEM 28 (D01-D03, L61), ITEM 41 (D21-D25, L1686), ITEM 49 (D21-D25, L1699) |
| Natural law | When padding-bottom + margin-bottom + padding-top of adjacent elements exceeds 120px, the eye registers a void — the page appears broken, not breathing. |
| Ceiling value | `<= 120px` total stacked gap between content blocks |
| Compositional range | `60-90px` — where space is generous but purposeful |
| Gate check | FAIL if total stacked gap between any two content blocks > 150px (council CF-03) |
| Evidence | FACT — 8 reports confirm, SOLID. Council verdict (CF-03): adjusted from per-property (<=96px) to TOTAL STACKED measurement to catch the Flagship whitespace void failure (210-276px voids from individually-compliant values). |
| Council amendment | S-09 retained as programmatic gate but with adjusted threshold: measures TOTAL stacked gap, not per-property. Gate FAIL at 150px (council CF-03). Council CF-03 intentionally set gate threshold (150px) wider than perception threshold (120px) to create a buffer zone. 120-150px is perceptually risky but not gate-failing. Phase 2 removal candidate (test first). |

#### PT-04: Single Property Gap Maximum
| Field | Value |
|-------|-------|
| Item IDs | ITEM 29 (D01-D03, L61), ITEM 42 (D21-D25, L1687) |
| Natural law | No single margin or padding value should exceed 96px. |
| Ceiling value | `<= 96px` for any individual margin or padding property |
| Gate check | FAIL if any single margin or padding > 96px |
| Evidence | FACT — 6 reports confirm, SOLID |

#### PT-05: Container Width
| Field | Value |
|-------|-------|
| Item IDs | ITEM 44 (D21-D25, L1689), ITEM 157 (D21-D25, L2003), ITEM 121 (D21-D25, L1917) |
| Natural law | Content beyond 960px loses the reader's eye. The spine holds. |
| Standard value | `940-960px` container max-width |
| Gate check | FAIL if container max-width outside 940-960px (1100px permitted only with explicit data-heavy content justification) |
| Evidence | FACT — 5 reports confirm, SOLID. Historical violation rate: 60% (3/5 builds). P=0.40 future violation probability. |

#### PT-06: Border Weights
| Field | Value |
|-------|-------|
| Item IDs | ITEM 45 (D21-D25, L1690) |
| Natural law | The 4/3/1px hierarchy is the border language. Deviating from it dilutes meaning. |
| Values | `4px` primary, `3px` section, `1px` subtle |
| Gate check | FAIL if border weights deviate from 4/3/1 hierarchy |
| Evidence | FACT — 8 reports confirm, SOLID |

---

### 2.3 Perception Calibration Table

This table goes to the BUILDER as calibration context (per council verdict, actionability item #2, 8 lines). It prevents the "calibrationally flat" failure where every value parks at the floor.

| Property | Floor (barely visible) | Compositional (expressive) | Dramatic (bold statement) |
|----------|----------------------|---------------------------|--------------------------|
| Background delta | 15 RGB | 25-35 RGB | 50+ RGB |
| Letter-spacing | 0.025em | 0.03-0.04em | 0.05em+ |
| Stacked gap | 120px (CEILING) | 60-90px | 40-60px (dense) |
| Single margin | 96px (CEILING) | 48-72px | 24-36px (tight) |
| Border weight | 1px (subtle) | 3px (structural) | 4px (primary) |

**Builder instruction:** "Use the FULL RANGE. A page that uses only floor values is technically correct but perceptually flat. The floor is the minimum — the compositional and dramatic ranges are where design expression lives."

**Source items:**
- ITEM 6 (D18-D20, L1347-1357): Judgment calibration: "15 RGB = subtle, 50 RGB = dramatic"
- ITEM 47 (D21-D25, L1697): Background delta: 15 RGB = FLOOR, 25-50 RGB = COMPOSITIONAL
- ITEM 48 (D21-D25, L1698): Letter-spacing: 0.025em = FLOOR, 0.03-0.05em = COMPOSITIONAL
- ITEM 49 (D21-D25, L1699): Stacked gap: 120px = CEILING, 60-90px = COMPOSITIONAL

---

### 2.4 The Master Perceptibility Rule

| Item IDs | ITEM 30 (D01-D03, L62), ITEM 156 (D21-D25, L2002) |
|----------|------|
| Rule | ALL CSS must be perceptible to the human eye. If a CSS property change cannot be seen by a human viewing the page, it should not exist. |
| Evidence | FACT — "Perception thresholds prevent invisible CSS" (N=3, zero counterexamples). PROVEN status per D21-D25. |

This is the meta-rule from which all perception thresholds derive. Every CSS value must clear the perceptibility bar. The specific thresholds (PT-01 through PT-06) are the measured instances of this principle.

---

### 2.5 Anti-Pattern Detection (Perception Failures)

These are specific failure patterns where technically-compliant CSS becomes perceptually invisible or deceptive.

#### AP-09: Ghost Mechanisms
| Field | Value |
|-------|-------|
| Item IDs | ITEM 015 (D15-D17, L1171-1172) |
| Description | CSS values below perception thresholds. The mechanism exists in code but not in the reader's experience. |
| Gate check | FAIL if any mechanism's CSS values fall below perception thresholds |
| Evidence | OBSERVED — Flagship experiment produced ghost mechanisms throughout |

#### AP-10: Threshold Gaming
| Field | Value |
|-------|-------|
| Item IDs | ITEM 016 (D15-D17, L1173-1176), ITEM 017 (D15-D17, L1173-1176) |
| Description | Values at exact threshold floor (16 RGB delta, 0.026em spacing). Technically passes gates but signals minimal effort, not compositional intent. |
| Detection values | Background delta 15-17 RGB, letter-spacing 0.025-0.027em |
| Gate check | WARNING (not FAIL) if >50% of values are within 10% of threshold floor. This is a signal to the PA auditor, not a hard gate. |
| Evidence | OBSERVED — Flagship builder used 15 RGB EVERYWHERE because 15 passes the gate |

#### AP-01: Density Stacking
| Field | Value |
|-------|-------|
| Item IDs | ITEM 004 (D15-D17, L1138-1142) |
| Description | When mechanisms compress each other, minimum padding drops below 12px, becoming undetectable. |
| Gate check | FAIL if `min(all padding)` < 12px |
| Evidence | OBSERVED — density stacking identified in mechanism interaction analysis |

---

### 2.6 Transition Perception

These items define what makes transitions between sections visible and meaningful.

| Item ID | Source | VA Line | Description | Evidence |
|---------|--------|---------|-------------|----------|
| ITEM 64 (D12-D14) | L1053 | Light transition: 1px border + 48px gap = legato (smooth flow) | OBSERVED |
| ITEM 65 (D12-D14) | L1054 | Medium transition: 3px border + 80px gap = breathing rest | OBSERVED |
| ITEM 66 (D12-D14) | L1055 | Heavy transition: colored background + text = full stop | OBSERVED |
| ITEM 67 (D12-D14) | L1057 | CD-006 uses 3 distinct transition types (compositional) | FACT |
| ITEM 68 (D12-D14) | L1058 | Gas Town uses 1 type (uniform dividers) = TEMPORAL MONOTONY | FACT |

**Builder instruction:** "A page with only one transition type is monotonous. Use at least 2 distinct transition weights. A page with 3 distinct transition types (light/medium/heavy) has temporal variety."

---

### 2.7 Flagship Dimension Gap Scores (Perception-Relevant)

These are the 10-dimension gap scores from Gas Town analysis. They represent the CURRENT STATE of perception-relevant quality dimensions, not targets. They tell the PA auditor what to look for.

| Item ID | Source | Dimension | Score | Fix Category | Evidence |
|---------|--------|-----------|-------|--------------|----------|
| ITEM 76 (D06-D08) | L649-650 | Pervading Metaphor | 2.5/5 | Architecture change | OBSERVED |
| ITEM 77 (D06-D08) | L652-653 | Multi-coherence | 1.5/5 | Architecture change | OBSERVED |
| ITEM 78 (D06-D08) | L655-656 | Compositional Intelligence | 2.0/5 | Architecture change | OBSERVED |
| ITEM 79 (D06-D08) | L658-659 | Material Authenticity | 1.5/5 | Prompt fix | OBSERVED |
| ITEM 80 (D06-D08) | L661-662 | Detail Density | 2.0/5 | Prompt fix | OBSERVED |
| ITEM 81 (D06-D08) | L664-665 | Typographic Craft | 2.0/5 | Prompt fix | OBSERVED |
| ITEM 82 (D06-D08) | L667-668 | Scale Hierarchy CSS | 3.0/5 | CSS fix | OBSERVED |
| ITEM 83 (D06-D08) | L670-671 | Channel Shifts CSS | 3.0/5 | CSS fix | OBSERVED |
| ITEM 84 (D06-D08) | L673-674 | Emotional Arc CSS | 3.5/5 | CSS fix | OBSERVED |
| ITEM 85 (D06-D08) | L676-677 | Spatial Confidence CSS | 3.5/5 | CSS fix | OBSERVED |

**Fix tier progression** (per ITEM 87/89/91, D06-D08):
- CSS-only fixes: 2.5 -> 3.2/5
- + Prompt enrichment: 3.2 -> 3.5/5
- + Architecture change: 3.5 -> 4.0+/5

---

### 2.8 Perception Risk Probabilities

These are adversarial-estimated probabilities of perception-related failure modes occurring in a v3 build.

| Item ID | Source | VA Line | Risk | Probability | Evidence |
|---------|--------|---------|------|-------------|----------|
| ITEM 121 (D21-D25) | L1917 | Container width violation | P=0.40 | FACT (historical 3/5 = 60%) |
| ITEM 122 (D21-D25) | L1920 | Whitespace voids (stacked gap) | P=0.35 | OBSERVED (S-09 removed; D-06 is a hope, not a guarantee) |
| ITEM 125 (D21-D25) | L1929 | Micro-typography recurrence (letter-spacing <0.5px) | P=0.20 | OBSERVED |

---

### 2.9 Suppressor Inflection Points (Perception-Related)

These items describe the predicted quality improvements from removing perception-related suppressors. Per council verdict (CF-03), suppressor removal is NOT monotonically positive — phased removal required.

| Item ID | Source | VA Line | Inflection | Predicted Impact | Evidence |
|---------|--------|---------|------------|------------------|----------|
| ITEM 40 (D04-D05) | L470-475 | Recipe Switch (S-01 removal) | +0.5-1.0 PA-05 | CONFOUNDED (N=2, massive effect size) |
| ITEM 41 (D04-D05) | L470-475 | Perception Floor (S-08 removal) | +0.5 PA-05 | THEORETICAL |
| ITEM 42 (D04-D05) | L470-475 | Architecture Collapse (remaining 8) | +0.3-0.5 PA-05 | THEORETICAL |

> **Council amendment (CF-03):** Suppressor removal curve relabeled "HYPOTHESIZED improvement (phased validation required)." Phase 1 removals (SAFE): S-01, S-03, S-08. Phase 2 removals (TEST FIRST): S-09, S-07, S-14. Builder receives perception threshold table as calibration.

---

### 2.10 Compositional Quality Floors (Perception Layer)

These define what "good enough" looks like for perception-relevant metrics, providing context for the PA auditor and gate-runner.

| Item ID | Source | VA Line | Metric | Floor (Middle) | Target (Compositional) | Evidence |
|---------|--------|---------|--------|----------------|----------------------|----------|
| ITEM 50 (D21-D25) | L1700 | Mechanisms | 8 | 14-16 | OBSERVED |
| ITEM 51 (D21-D25) | L1701 | CSS lines | 350 | 800-1200 | OBSERVED |
| ITEM 52 (D21-D25) | L1702 | CCS | 0.15 | 0.55+ (Flagship) | THEORETICAL (CCS methodology unstandardized — council verdict: RESEARCH CONSTRUCT, do not operationalize) |

---

### 2.11 Tier Information (Layer 2 Framing)

These items describe how the perception physics are organized in the activation brief.

| Item ID | Source | VA Line | Description | Evidence |
|---------|--------|---------|-------------|----------|
| ITEM 24 (D01-D03) | L58 | Tier 2: PERCEPTION PHYSICS (8 lines in activation brief) | THEORETICAL |
| ITEM 25 (D01-D03) | L59 | 4 empirically validated thresholds framed as NATURAL LAWS | FACT |
| ITEM 46 (D21-D25) | L1692 | SAFE TO BUILD ON: All core thresholds universally agreed | FACT |

---

## PART 3: CROSS-LAYER INTEGRATION

### 3.1 How Identity and Perception Work Together

Identity defines WHAT the design system is. Perception defines WHAT HUMANS CAN SEE. Together:

1. The builder enters a world (Identity) where surfaces are sharp, colors are warm, typography is disciplined
2. Within that world, the builder creates knowing the physics (Perception) — what is visible, what range of expression exists between "barely detectable" and "bold statement"
3. The gate-runner verifies both: the world was not broken (Identity gates) AND everything built is visible (Perception gates)
4. The PA auditor uses the perception calibration table as judgment context — not to check thresholds (that is the gate-runner's job) but to assess whether the builder used the RANGE, not just the floor

### 3.2 Builder Delivery Format

Per council verdict, the builder receives these two layers as part of the activation brief:

**Tier 1: IDENTITY (~15 lines)**
- 10 soul constraints as WORLD-DESCRIPTION
- "This world IS / You ARE" voice (ITEM 92, D01-D03, L238; ITEM 141, D01-D03, L316)

**Tier 2: PERCEPTION PHYSICS (~8 lines)**
- 4 core thresholds as NATURAL LAWS
- Perception calibration table (~8 lines, per council verdict actionability item #2)

**Total: ~23 lines of the 73-line constraint layer**

### 3.3 Gate-Runner Delivery Format

The gate-runner receives these as binary checks:

**Identity gates:** border-radius=0, box-shadow=none, container 940-960px, warm palette colors match, font trinity only, no gradients, border hierarchy 4/3/1, header DNA
**Perception gates:** background delta >=15 RGB, letter-spacing >=0.025em, stacked gap <=150px (council CF-03), single property <=96px, min padding >=12px

### 3.4 Council Verdict Amendments Applied

All council verdict amendments have been incorporated into this document:

1. **CF-01 (73-line shell game):** 73-line constraint CAP is retained as architectural target; total builder input is ~3,600 lines including reference files. Framing is FORMAT improvement, not volume reduction.
2. **CF-03 (suppressor removal):** Phased removal adopted. S-09 retained as programmatic gate with adjusted threshold (total stacked, not per-property). Perception thresholds go to builder as calibration AND to gate-runner as binary checks.
3. **CF-04 (N=4 problem):** Evidence column added to all items (FACT/OBSERVED/CONFOUNDED/THEORETICAL/SPECULATIVE).
4. **Pattern 1 (GATES->BUILDER):** Perception thresholds DUAL-ROUTE to builder (calibration format) and gate-runner (binary check format).
5. **Pattern 2 (IDENTITY->BUILDER):** Identity constraints DUAL-ROUTE to builder (world-description) and gate-runner (binary check). Ratified unanimously.
6. **Contradiction A (Activation vs Value Tables):** "Activation not transmission" retired. Replaced with "PURPOSE + VOCABULARY." Value tables retained as structured reference material.

---

## APPENDIX: Complete Item Index

### Layer 1: IDENTITY (33 items)

| # | Item ID | Source File | VA Line | Text (80 chars) | Evidence |
|---|---------|-------------|---------|-----------------|----------|
| 1 | ITEM 20 | extract-d01-d03.md | L52 | 10 soul constraints as WORLD-DESCRIPTION | OBSERVED |
| 2 | ITEM 21 | extract-d01-d03.md | L53 | "Every surface is sharp. Corners are cut, not curved" | FACT |
| 3 | ITEM 22 | extract-d01-d03.md | L54 | border-radius:0, box-shadow:none, container 940-960px | FACT |
| 4 | ITEM 23 | extract-d01-d03.md | L55 | warm palette (R>=G>=B), font trinity, no gradients | FACT |
| 5 | ITEM 56 | extract-d01-d03.md | L113 | Builder must NOT receive prohibition list beyond soul | OBSERVED |
| 6 | ITEM 88 | extract-d01-d03.md | L236 | 10 soul constraints | FACT |
| 7 | ITEM 116 | extract-d01-d03.md | L257 | Zero repair-mode suppressors | THEORETICAL |
| 8 | ITEM 117 | extract-d01-d03.md | L259 | 20 quality suppressors active (old) | FACT |
| 9 | ITEM 118 | extract-d01-d03.md | L259 | 0 suppressors active (new) | THEORETICAL |
| 10 | ITEM 25 | extract-d04-d05.md | L421 | Builder must NOT receive 55 prohibitions | OBSERVED |
| 11 | ITEM 55 | extract-d15-d17.md | L1280 | --color-primary: #E83025 (red) | FACT |
| 12 | ITEM 56 | extract-d15-d17.md | L1281 | --color-background: #FEF9F5 (warm cream) | FACT |
| 13 | ITEM 57 | extract-d15-d17.md | L1282 | --color-text: #1A1A1A (near-black) | FACT |
| 14 | ITEM 58 | extract-d15-d17.md | L1283 | 5 accent colors (all match) | FACT |
| 15 | ITEM 59 | extract-d15-d17.md | L1284 | border-radius: 0 (soul) | FACT |
| 16 | ITEM 60 | extract-d15-d17.md | L1285 | box-shadow: none (soul) | FACT |
| 17 | ITEM 61 | extract-d15-d17.md | L1286 | font trinity: Instrument Serif / Inter / JBM | FACT |
| 18 | ITEM 62 | extract-d15-d17.md | L1287 | body: 1rem / 1.7 line-height | FACT |
| 19 | ITEM 63 | extract-d15-d17.md | L1288 | p: max-width 70ch | FACT |
| 20 | ITEM 64 | extract-d15-d17.md | L1289 | header: dark bg + 3px red bottom border | FACT |
| 21 | ITEM 65 | extract-d15-d17.md | L1290 | callout: 4px left border DNA | FACT |
| 22 | ITEM 66 | extract-d15-d17.md | L1291 | h3: italic | FACT |
| 23 | ITEM 67 | extract-d15-d17.md | L1292 | syntax highlighting: 6 colors match | FACT |
| 24 | ITEM 68 | extract-d15-d17.md | L1293 | selection: red background | FACT |
| 25 | ITEM 69 | extract-d15-d17.md | L1294 | focus-visible: 3px solid primary | FACT |
| 26 | ITEM 70 | extract-d15-d17.md | L1295 | skip-link: present, red bg | FACT |
| 27 | ITEM 71 | extract-d15-d17.md | L1298 | ~30 IDENTICAL PROPERTIES = FAMILY DNA | FACT |
| 28 | ITEM 72 | extract-d15-d17.md | L1299 | This persists WITHOUT any cross-page spec | FACT |
| 29 | ITEM 73 | extract-d15-d17.md | L1300 | Source: tokens.css + soul constraints + components.css | FACT |
| 30 | ITEM 83 | extract-d15-d17.md | L1316 | VERDICT: SIBLINGS, NOT STRANGERS | FACT |
| 31 | ITEM 84 | extract-d15-d17.md | L1318-1319 | tokens.css + soul constraints provide ~80% cross-page coherence | OBSERVED |
| 32 | ITEM 92 | extract-d15-d17.md | L1327 | No additional cross-page gate needed. The DNA is INHERENT | OBSERVED |
| 33 | ITEM 020 | extract-d21-d25.md | L1618 | Zero decorative elements | OBSERVED |

### Layer 2: PERCEPTION (52 items)

| # | Item ID | Source File | VA Line | Text (80 chars) | Evidence |
|---|---------|-------------|---------|-----------------|----------|
| 1 | ITEM 24 | extract-d01-d03.md | L58 | Tier 2: PERCEPTION PHYSICS (8 lines) | THEORETICAL |
| 2 | ITEM 25 | extract-d01-d03.md | L59 | 4 empirically validated thresholds as NATURAL LAWS | FACT |
| 3 | ITEM 26 | extract-d01-d03.md | L60 | >=15 RGB bg delta | FACT |
| 4 | ITEM 27 | extract-d01-d03.md | L60 | >=0.025em letter-spacing | FACT |
| 5 | ITEM 28 | extract-d01-d03.md | L61 | <=120px stacked gap | FACT |
| 6 | ITEM 29 | extract-d01-d03.md | L61 | <=96px single margin | FACT |
| 7 | ITEM 30 | extract-d01-d03.md | L62 | All CSS must be perceptible to human eye | FACT |
| 8 | ITEM 40 | extract-d04-d05.md | L470-475 | INFLECTION 1: Recipe Switch (+0.5-1.0) | CONFOUNDED |
| 9 | ITEM 41 | extract-d04-d05.md | L470-475 | INFLECTION 2: Perception Floor (+0.5) | THEORETICAL |
| 10 | ITEM 42 | extract-d04-d05.md | L470-475 | INFLECTION 3: Architecture Collapse (+0.3-0.5) | THEORETICAL |
| 11 | ITEM 76 | extract-d06-d08.md | L649-650 | Pervading Metaphor: 2.5/5 (needs architecture change) | OBSERVED |
| 12 | ITEM 77 | extract-d06-d08.md | L652-653 | Multi-coherence: 1.5/5 (needs architecture change) | OBSERVED |
| 13 | ITEM 78 | extract-d06-d08.md | L655-656 | Compositional Intelligence: 2.0/5 (needs architecture change) | OBSERVED |
| 14 | ITEM 79 | extract-d06-d08.md | L658-659 | Material Authenticity: 1.5/5 (fixable by prompt) | OBSERVED |
| 15 | ITEM 80 | extract-d06-d08.md | L661-662 | Detail Density: 2.0/5 (fixable by prompt) | OBSERVED |
| 16 | ITEM 81 | extract-d06-d08.md | L664-665 | Typographic Craft: 2.0/5 (fixable by prompt) | OBSERVED |
| 17 | ITEM 82 | extract-d06-d08.md | L667-668 | Scale Hierarchy CSS: 3.0/5 | OBSERVED |
| 18 | ITEM 83 | extract-d06-d08.md | L670-671 | Channel Shifts CSS: 3.0/5 | OBSERVED |
| 19 | ITEM 84 | extract-d06-d08.md | L673-674 | Emotional Arc CSS: 3.5/5 | OBSERVED |
| 20 | ITEM 85 | extract-d06-d08.md | L676-677 | Spatial Confidence CSS: 3.5/5 | OBSERVED |
| 21 | ITEM 67 | extract-d12-d14.md | L1057 | CD-006 uses 3 distinct transition types | FACT |
| 22 | ITEM 68 | extract-d12-d14.md | L1058 | Gas Town uses 1 (uniform dividers) = TEMPORAL MONOTONY | FACT |
| 23 | ITEM 004 | extract-d15-d17.md | L1138-1142 | AP-01 DENSITY STACKING: min(all padding) >= 12px | OBSERVED |
| 24 | ITEM 015 | extract-d15-d17.md | L1171-1172 | AP-09 GHOST MECHANISMS: values below perception thresholds | OBSERVED |
| 25 | ITEM 016 | extract-d15-d17.md | L1173-1176 | AP-10 THRESHOLD GAMING: values at exact threshold floor | OBSERVED |
| 26 | ITEM 017 | extract-d15-d17.md | L1173-1176 | 16 RGB delta, 0.026em spacing (threshold gaming floor values) | OBSERVED |
| 27 | ITEM 6 | extract-d18-d20.md | L1347-1357 | Judgment calibration: '15 RGB = subtle, 50 RGB = dramatic' | OBSERVED |
| 28 | ITEM 8 | extract-d18-d20.md | L1365-1373 | Pages TECHNICALLY CORRECT but CALIBRATIONALLY FLAT | OBSERVED |
| 29 | ITEM 9 | extract-d18-d20.md | L1371 | Builder used 15 RGB EVERYWHERE because 15 passes the gate | FACT |
| 30 | ITEM 10 | extract-d18-d20.md | L1372-1373 | Without calibration subtle and dramatic collapse to same value | OBSERVED |
| 31 | ITEM 40 | extract-d21-d25.md | L1685 | Background delta >= 15 RGB, 12 reports, SOLID | FACT |
| 32 | ITEM 41 | extract-d21-d25.md | L1686 | Stacked gap <= 120px, 8 reports, SOLID | FACT |
| 33 | ITEM 42 | extract-d21-d25.md | L1687 | Per-property gap <= 96px, 6 reports, SOLID | FACT |
| 34 | ITEM 43 | extract-d21-d25.md | L1688 | Letter-spacing >= 0.025em, 7 reports, SOLID | FACT |
| 35 | ITEM 44 | extract-d21-d25.md | L1689 | Container width 940-960px, 5 reports, SOLID | FACT |
| 36 | ITEM 45 | extract-d21-d25.md | L1690 | Border weights 4/3/1px, 8 reports, SOLID | FACT |
| 37 | ITEM 46 | extract-d21-d25.md | L1692 | SAFE TO BUILD ON: All core thresholds universally agreed | FACT |
| 38 | ITEM 47 | extract-d21-d25.md | L1697 | Background delta: 15 RGB = FLOOR, 25-50 RGB = COMPOSITIONAL | OBSERVED |
| 39 | ITEM 48 | extract-d21-d25.md | L1698 | Letter-spacing: 0.025em = FLOOR, 0.03-0.05em = COMPOSITIONAL | OBSERVED |
| 40 | ITEM 49 | extract-d21-d25.md | L1699 | Stacked gap: 120px = CEILING, 60-90px = COMPOSITIONAL | OBSERVED |
| 41 | ITEM 50 | extract-d21-d25.md | L1700 | Mechanisms: 8 = FLOOR (Middle), 14-16 = COMPOSITIONAL | OBSERVED |
| 42 | ITEM 51 | extract-d21-d25.md | L1701 | CSS lines: 350 = FLOOR (Middle), 800-1200 = TARGET | OBSERVED |
| 43 | ITEM 52 | extract-d21-d25.md | L1702 | CCS: 0.15 = FLOOR, 0.55+ = FLAGSHIP TARGET | THEORETICAL |
| 44 | ITEM 125 | extract-d21-d25.md | L1929 | P=0.20 Micro-typography recurrence (letter-spacing <0.5px) | OBSERVED |
| 45 | ITEM 156 | extract-d21-d25.md | L2002 | PROVEN: Perception thresholds prevent invisible CSS (N=3) | FACT |
| 46 | ITEM 157 | extract-d21-d25.md | L2003 | PROVEN: Container 940-960px is non-negotiable (N=5, 60% violated) | FACT |
| 47 | ITEM 159 | extract-d21-d25.md | L2005 | PROVEN: Core thresholds >=15 RGB, <=120px gap, >=0.025em (N=12+) | FACT |
| 48 | ITEM 87 | extract-d06-d08.md | L683 | CSS-only tier: 2.5 -> 3.2/5 | OBSERVED |
| 49 | ITEM 89 | extract-d06-d08.md | L687 | Prompt enrichment tier: 3.2 -> 3.5/5 | THEORETICAL |
| 50 | ITEM 91 | extract-d06-d08.md | L691 | Architecture change tier: 3.5 -> 4.0+/5 | THEORETICAL |
| 51 | ITEM 121 | extract-d21-d25.md | L1917 | P=0.40 Container width violation (historical 3/5 = 60%) | FACT |
| 52 | ITEM 122 | extract-d21-d25.md | L1920 | P=0.35 Whitespace voids (S-09 removed, D-06 is a hope) | OBSERVED |

---

*Document generated from unified-registry.md (885 items), classify-by-layer.md, and council-verdict.md. All 33 Layer 1 items and 52 Layer 2 items included with zero compression. Council verdict amendments applied throughout.*
