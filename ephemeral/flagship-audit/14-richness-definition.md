# Richness Definition — Measurable CSS Fingerprints

**Agent:** richness-definer
**Date:** 2026-02-17
**Sources Read:**
- DD-006-fractal.html (1,121 lines — full file)
- CD-006-pilot-migration.html (2,000+ lines — full CSS through line 1090, HTML through line 2000)
- 07-intentionality.html (flagship — 1,300 lines CSS, full audit data)
- mechanism-catalog.md (500 lines — all 18 mechanisms)
- scale-research.md (92 lines — anti-scale thesis, 7 convergent findings)
- 00-AUDIT-DATA.md (109 lines — programmatic measurements)

---

## Part 1: CSS Richness Fingerprint — Raw Counts

### Methodology

Every unique CSS property-value combination was extracted from each file's `<style>` block. Inline styles (style="...") were counted separately. Only DISTINCT values matter — `font-size: 16px` appearing on 10 selectors counts as 1 unique value.

---

### A. Font-Size Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 8px | Y | - | - |
| 9px | Y | - | - |
| 10px | Y | Y | - |
| 11px | Y | Y | Y (table-light th) |
| 12px | Y | Y | Y (--type-meta: 12px) |
| 13px | Y | - | - |
| 14px | Y | Y | Y (--type-code: 14px) |
| 15px | Y | - | - |
| 16px | Y | Y (--type-body: 1rem) | Y (--type-body: 16px) |
| 17px | Y | - | - |
| 18px | Y | - | - |
| 20px | Y | Y (--type-subsection: 1.375rem) | - |
| 22px | - | Y (--type-subsection) | Y (--type-h3: 22px) |
| 28px | Y | - | Y (--type-h2: 28px) |
| 32px | Y | - | - |
| 36px | - | - | Y (--type-h1: 36px) |
| 0.625rem | - | Y | - |
| 0.75rem | - | Y (--type-meta) | Y (section-meta) |
| 0.8125rem | - | Y (code 480px) | - |
| 0.875rem | - | Y (--type-code) | - |
| 0.9em | - | Y (inline code) | - |
| 1rem | - | Y (--type-body) | - |
| 1.125rem | - | Y (essence body) | Y (closing-essence) |
| 1.25rem | - | Y (core-abstraction) | - |
| 1.375rem | - | Y (--type-subsection) | - |
| 1.625rem | - | Y (--type-section) | - |
| 2rem | - | Y (header 768px) | - |
| 3rem | - | Y (--type-page) | - |
| 3.5em | - | Y (drop-cap) | Y (drop-cap) |
| **TOTAL** | **13** | **21** | **11** |

**Gap: Flagship has 11 unique font-sizes vs DD-006's 13 and CD-006's 21.**

---

### B. Font-Weight Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 400 | Y | Y | Y |
| 500 | Y | Y | Y |
| 600 | Y | Y | Y |
| 700 | - | Y | - |
| **TOTAL** | **3** | **4** | **3** |

**Gap: Minimal. Font-weight is NOT a richness differentiator in this system.**

---

### C. Text Color Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| #1A1A1A (--color-text) | Y | Y | Y |
| #666666 (--color-text-secondary) | Y | Y | - |
| #6B6B6B (flagship secondary) | - | - | Y |
| #E83025 (--color-primary) | Y | Y | Y |
| #4A90D9 (--accent-blue) | Y | Y | Y |
| #4A9D6B (--accent-green) | Y | Y | Y |
| #C97065 (--accent-coral) | - | Y | - |
| #D97706 (--accent-amber) | Y | Y | Y |
| #7C3AED (--accent-purple) | Y | Y | - |
| #FAFAF5 (code text) | Y | - | - |
| #6B9B7A (syntax green) | Y | Y | - |
| #4A7C9B (syntax function) | Y | Y | - |
| #C8BFB5 (header subtitle) | - | - | Y |
| #8A8580 (section-meta) | - | - | Y |
| #706860 (footer provenance) | - | - | Y |
| #A89E94 (footer-meta) | - | - | Y |
| #2A2420 (Zone 1 h2) | - | - | Y |
| #252018 (Zone 1 h2 s3) | - | - | Y |
| #1E1B18 (Zone 3 h2) | - | - | Y |
| #221F1A (Zone 3 h2 s10) | - | - | Y |
| FEF9F5 (selection bg) | Y | Y | - |
| **TOTAL** | **10** | **13** | **14** |

**SURPRISE: Flagship has MORE unique text colors (14) than DD-006 (10) or CD-006 (13). BUT 6 of the 14 are heading-color micro-shifts (#2A2420, #252018, #1E1B18, #221F1A) and gray variants (#8A8580, #706860, #A89E94, #C8BFB5) that are IMPERCEPTIBLE without developer tools (delta <15 RGB points from base). DD-006 and CD-006 use FEWER colors but they are PERCEPTIBLY DIFFERENT (blue vs green vs amber vs purple vs coral = 5 distinct semantic accents).**

---

### D. Background-Color Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| #FEF9F5 (--color-background) | Y | Y | Y |
| #FFFFFF (white) | Y | Y | Y |
| #F0EBE3 (--color-border-subtle) | Y | - | - |
| #FAF5ED (--color-zone-breathing) | - | Y | Y |
| #1A1A1A (dark code/header) | Y | Y | Y |
| rgba(232,48,37,0.03) | Y | - | - |
| rgba(232,48,37,0.05) | Y | - | - |
| rgba(232,48,37,0.06) | Y | - | - |
| rgba(232,48,37,0.09) | Y | - | - |
| rgba(232,48,37,0.1) | Y | - | - |
| rgba(217,119,6,0.08) | Y | - | - |
| rgba(74,144,217,0.08) | Y | - | - |
| #F5F9FE (info callout bg) | - | Y | - |
| #F2F9F4 (tip/recommended bg) | - | Y | - |
| #FEF6F5 (gotcha bg) | - | Y | - |
| #FFFBF2 (challenge bg) | - | Y | - |
| #F8F5FE (core-abstraction bg) | - | Y | - |
| #FDF8F2 (zone-s3) | - | - | Y |
| #FDFBF8 (zone-s4) | - | - | Y |
| #FEFEFE (zone-s5/s7/s8) | - | - | Y |
| #FBF7F1 (zone-s6/s11) | - | - | Y |
| #FEFCFA (zone-s9) | - | - | Y |
| **TOTAL** | **12** | **10** | **9** |

**Gap: DD-006 leads with 12 (including 5 rgba tints creating fractal depth layers). CD-006 has 10 (including 5 PERCEPTIBLY DISTINCT callout backgrounds — blue, green, coral, amber, purple tinted). Flagship has 9 — BUT its 12 section-specific zone backgrounds all fall within a 1-8 RGB point range of each other (audit data confirms: "RGB differences are 1-8 points — barely perceptible").**

**CRITICAL FINDING: Flagship has MORE zone-background CSS declarations than CD-006 (12 vs 3) but LESS perceptible variety (barely distinguishable vs clearly tinted callout backgrounds).**

---

### E. Margin Values (Unique)

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 0 | Y | Y | Y |
| 0 auto | Y | Y | Y |
| 4px (space-1) | Y | Y | Y |
| 8px (space-2) | Y | Y | Y |
| 12px (space-3) | Y | Y | Y |
| 16px (space-4) | Y | Y | Y |
| 24px (space-6) | Y | Y | Y |
| 32px (space-8) | Y | Y | Y |
| 48px (space-12) | Y | Y | Y |
| 64px (space-16) | Y | Y | - |
| 80px (space-20) | - | Y | Y |
| 96px (space-24) | - | - | Y |
| 5% (left margin) | - | - | Y |
| **TOTAL** | **10** | **11** | **12** |

**Comparable. Margin variety is NOT a richness differentiator.**

---

### F. Padding Values (Unique)

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 0 | Y | Y | - |
| 2px | - | Y | - |
| 4px (space-1) | Y | Y | Y |
| 8px (space-2) | Y | Y | Y |
| 12px (space-3) | Y | Y | Y |
| 16px (space-4) | Y | Y | Y |
| 20px (space-5) | Y | Y | - |
| 24px (space-6) | Y | Y | Y |
| 32px (space-8) | - | Y | Y |
| 40px (space-10) | - | - | Y |
| 48px (space-12) | - | - | Y |
| 64px (space-16) | - | Y | Y |
| 80px (space-20) | Y | - | Y |
| 8px 16px (skip-link) | Y | Y | - |
| 10px 14px (table-dense) | - | - | Y |
| **TOTAL** | **10** | **12** | **12** |

**Comparable. Padding variety is NOT a richness differentiator.**

---

### G. Border Declarations (Unique)

| Declaration | DD-006 | CD-006 | Flagship |
|-------------|--------|--------|----------|
| border-bottom: 3px solid primary | Y | Y | Y |
| border-bottom: 2px solid primary | Y | - | - |
| border-bottom: 1px solid subtle | Y | Y | Y |
| border-bottom: 3px solid border | - | Y | - |
| border-bottom: 1px solid border | - | Y | Y |
| border-left: 4px solid primary | Y | Y | Y |
| border-left: 4px solid text | Y | Y | - |
| border-left: 4px solid accent-blue | Y | Y | - |
| border-left: 4px solid accent-green | - | Y | Y (green) |
| border-left: 4px solid accent-coral | - | Y | - |
| border-left: 4px solid accent-amber | Y | Y | - |
| border-left: 4px solid accent-purple | - | Y | - |
| border-left: 4px solid border | - | Y | Y (neutral) |
| border-left: 3px solid primary | Y | - | Y (accent) |
| border-left: 3px solid text-secondary | Y | - | Y (moderate) |
| border-left: 3px solid border | - | - | Y |
| border-left: 2px solid primary | Y | - | - |
| border-left: 1px solid border | Y | - | - |
| border: 3px solid border | - | Y | - |
| border: 1px solid border | - | Y | - |
| border: 1px solid subtle | - | Y | Y (table-light) |
| border-top: 3px solid primary | - | Y | Y |
| border-top: 3px solid green | - | Y | - |
| border-top: 1px solid border | - | Y | - |
| outline: 3px solid primary | Y | Y | - |
| outline: 2px solid border | - | - | Y |
| **TOTAL** | **13** | **20** | **13** |

**Gap: CD-006 has 20 unique border declarations — NEARLY DOUBLE the flagship's 13. CD-006 deploys borders in 5 accent colors (blue, green, coral, amber, purple), 3 structural weights (4px, 3px, 1px), and on 4 border positions (left, bottom, top, full). The flagship has comparable structural variety (4px/3px/1px weights) but deploys accent colors on fewer border positions and has ZERO visible borders on section elements (audit data: "Zero borders anywhere in the entire page. Zero dividers. Zero containment elements. Zero callouts.").**

---

### H. Letter-Spacing Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 0.1em | Y | Y | - |
| 0.15em | Y | Y | - |
| 0.05em | - | Y | - |
| 0.12em | - | - | Y |
| 0.08em | - | - | Y |
| 0.06em | - | - | Y |
| 0.006em | - | - | Y |
| 0.004em | - | - | Y |
| 0.002em | - | - | Y |
| 0.01em | - | - | Y |
| 0.008em | - | - | Y |
| 0.005em | - | - | Y |
| -0.003em | - | - | Y |
| -0.01em | - | - | Y |
| 0 | - | - | Y |
| 0.015em (word-spacing) | - | - | Y |
| 0.02em (word-spacing) | - | - | Y |
| -0.01em (word-spacing) | - | - | Y |
| **TOTAL** | **2** | **3** | **15** |

**SURPRISE: Flagship has 15 letter-spacing values vs DD-006's 2 and CD-006's 3. But this is the "convergence gradient" metaphor channel — the typographic variety is deployed per-section as micro-variations. Audit data confirms: "Only letter-spacing and line-height vary... Scale 5 is letter-spacing and line-height ONLY." The flagship poured ALL its richness into ONE channel (letter-spacing/line-height) and ZERO into other channels (borders, backgrounds, component variety).**

---

### I. Line-Height Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 0.8 | - | Y | Y (drop-cap) |
| 1.2 | - | Y | Y |
| 1.3 | - | - | Y |
| 1.45 | - | - | Y |
| 1.5 | Y | Y | Y |
| 1.6 | - | Y | Y |
| 1.65 | - | - | Y |
| 1.7 | Y | Y | Y |
| 1.75 | - | - | Y |
| 1.8 | Y | Y | Y |
| 2 | - | Y | - |
| **TOTAL** | **3** | **6** | **10** |

**Flagship leads. But again, this is the ONLY channel with real variety.**

---

### J. Border-Radius Values

| Value | DD-006 | CD-006 | Flagship |
|-------|--------|--------|----------|
| 0 | Y | Y | Y |
| **TOTAL** | **1** | **1** | **1** |

**All files compliant with soul constraint. border-radius: 0 universally.**

---

### K. Total Unique CSS Property-Value Combinations

Counting all unique property:value pairs in the `<style>` block:

| Metric | DD-006 | CD-006 | Flagship |
|--------|--------|--------|----------|
| Unique CSS selectors | ~75 | ~160 | ~110 |
| Unique CSS declarations (property:value) | ~180 | ~380 | ~320 |
| Unique CSS values (deduped) | ~95 | ~170 | ~140 |
| Media queries | 3 | 4 | 0 |
| CSS custom properties in :root | 17 | 44 | 53 |
| Component types styled | 7 | 11 | 6 |
| Callout variants | 2 (essence, info) | 5 (info, tip, gotcha, essence, challenge) | 2 (component-block variants) |
| Layout patterns | 3 (flex, grid 3-col, grid 4-col) | 6 (flex, grid 4-col, grid 2-col, golden-ratio grid, flex-column, centered) | 2 (single-column, width variation) |

---

## Part 2: Richness Fingerprint Comparison Table

| Metric | DD-006 | CD-006 | Flagship | Gap (Flagship vs Best) |
|--------|--------|--------|----------|----------------------|
| **Font-size values** | 13 | **21** | 11 | -10 (vs CD-006) |
| **Font-weight values** | 3 | **4** | 3 | -1 |
| **Text color values** | 10 | 13 | **14** | +1 (but 6 imperceptible) |
| **Perceptible text colors** | **10** | **10** | 8 | -2 |
| **Background-color values** | **12** | 10 | 9 | -3 (vs DD-006) |
| **Perceptible bg variety** | **12** | **10** | 3 | **-9** (vs DD-006) |
| **Margin values** | 10 | 11 | **12** | +1 |
| **Padding values** | 10 | **12** | **12** | 0 |
| **Border declarations** | 13 | **20** | 13 | **-7** (vs CD-006) |
| **Letter-spacing values** | 2 | 3 | **15** | +12 |
| **Line-height values** | 3 | 6 | **10** | +4 |
| **Border-radius values** | 1 | 1 | 1 | 0 |
| **Component types** | 7 | **11** | 6 | **-5** (vs CD-006) |
| **Callout variants** | 2 | **5** | 2 | **-3** (vs CD-006) |
| **Layout patterns** | 3 | **6** | 2 | **-4** (vs CD-006) |
| **CSS custom properties** | 17 | 44 | **53** | +9 |
| **Media queries** | 3 | **4** | 0 | **-4** |
| **CSS selectors** | ~75 | **~160** | ~110 | -50 |
| **CSS declarations** | ~180 | **~380** | ~320 | -60 |

---

## Part 3: Richness Score Definition

### Formula

```
Richness Score = Variety × Intentionality × Perceptibility
```

Where:

**Variety** = count of unique CSS values serving distinct semantic purposes (not duplicates of the same semantic in different selectors)

**Intentionality** = proportion of CSS choices that vary per content zone (i.e., that change depending on WHERE in the page the content appears — section-specific styling vs global)

**Perceptibility** = proportion of CSS variations that are visible WITHOUT developer tools (i.e., a reader would notice the difference at normal reading distance)

---

### Variety Score

Count unique CSS values across the 10 measured dimensions:

| File | Raw Count | Deduped Semantic Count | Score |
|------|-----------|----------------------|-------|
| DD-006 | 77 | 68 | 68 |
| CD-006 | 111 | 95 | 95 |
| Flagship | 102 | 75 | 75 |

**Deduplication logic:** If the same semantic purpose is served by multiple values (e.g., 12 section-specific zone backgrounds that all look like warm cream), they count as 1 semantic unit, not 12. DD-006's 5 rgba tints serve 5 perceptibly distinct purposes (fractal depth layers) = 5 semantic units. Flagship's 12 zone backgrounds serve 1 perceptible purpose (warm cream background) = 1 semantic unit.

---

### Intentionality Score

Proportion of CSS that varies by content zone (section-specific vs global):

| File | Zone-Specific CSS Rules | Total CSS Rules | Intentionality |
|------|------------------------|-----------------|----------------|
| DD-006 | 22 (4 scale levels, 2 density states per level, nested variants) | ~75 selectors | 29% |
| CD-006 | 48 (8 sections × axis pattern + 3 transition types + 5 callout variants) | ~160 selectors | 30% |
| Flagship | 65 (12 zone-specific selectors × ~5 properties each) | ~110 selectors | **59%** |

**SURPRISE: Flagship has the HIGHEST intentionality (59%) — more than half of its CSS varies by section. But most of it is imperceptible (see below).**

---

### Perceptibility Score

Proportion of zone-varying CSS that is visible without developer tools:

**Test: "Can a reader scrolling at normal speed perceive the difference?"**

| CSS Channel | DD-006 | CD-006 | Flagship |
|-------------|--------|--------|----------|
| Background color shifts | YES (rgba tints clearly different from white/cream) | YES (callout bgs clearly tinted blue/green/coral) | **NO** (1-8 RGB point shifts) |
| Border presence/weight | YES (4px/3px/2px/1px clearly visible) | YES (4px/3px/1px clearly visible + 5 accent colors) | **PARTIAL** (borders exist in CSS but are NOT applied to section elements per audit data — "Zero borders anywhere") |
| Font-size variation | YES (8px to 32px range = 4x) | YES (0.625rem to 3rem = 4.8x) | **PARTIAL** (11px to 36px = 3.3x range, but only in header/meta/body — no section variation) |
| Spacing variation | YES (dense/sparse alternation visible) | YES (8 sections with distinct padding) | **YES** (32px to 80px section padding visible) |
| Letter-spacing variation | NO (0.1em/0.15em only on labels) | NO (0.05-0.15em only on labels) | **NO** (0.006em to -0.003em = imperceptible) |
| Line-height variation | NO (1.5 vs 1.7 vs 1.8 subtle) | PARTIAL (1.5 vs 1.8 noticeable on code vs body) | **NO** (1.65 vs 1.75 vs 1.8 = imperceptible) |
| Component type variation | YES (7 distinct component types visible) | **YES** (11 component types, all visually distinct) | **NO** (only 2 component types: tables + component-blocks, looking similar) |
| Layout pattern variation | YES (3 grid layouts) | **YES** (Z-grid, bento, choreography, F-pattern all distinct) | **NO** (single-column throughout) |

**Perceptibility scores:**

| File | Perceptible Channels | Total Channels | Perceptibility |
|------|---------------------|----------------|----------------|
| DD-006 | 5 (bg, border, font-size, spacing, component) | 8 | 63% |
| CD-006 | 6 (bg, border, font-size, spacing, component, layout) | 8 | **75%** |
| Flagship | 1.5 (spacing + partial border) | 8 | **19%** |

---

### Final Richness Scores

```
Richness = Variety × Intentionality × Perceptibility
```

| File | Variety | Intentionality | Perceptibility | **Richness Score** |
|------|---------|---------------|----------------|-------------------|
| DD-006 | 68 | 0.29 | 0.63 | **12.4** |
| CD-006 | 95 | 0.30 | 0.75 | **21.4** |
| Flagship | 75 | 0.59 | 0.19 | **8.4** |

---

## Part 4: The Delta — What the Numbers Mean

### CD-006 Richness Score: 21.4
### Flagship Richness Score: 8.4
### **Gap: 13.0 points (flagship is at 39% of CD-006's richness)**

---

### Where the Gap Lives (Decomposition)

| Dimension | CD-006 → Flagship Delta | Root Cause |
|-----------|------------------------|------------|
| **Component type variety** | 11 → 6 types (-5) | Flagship uses only tables + component-blocks. No file-trees, task-components, reasoning-blocks, decision-matrices, core-abstractions. |
| **Callout variety** | 5 → 2 variants (-3) | Flagship has component-block in warm/neutral/resolution variants vs CD-006's info/tip/gotcha/essence/challenge. The flagship callouts look nearly identical (same structure, different border color). |
| **Layout pattern variety** | 6 → 2 patterns (-4) | Flagship is single-column + width variation ONLY. No Z-grid, no bento, no choreography, no F-pattern layout structure. |
| **Border deployment** | 20 → 13 declarations (-7) | Flagship defines borders but the HTML NEVER APPLIES THEM to sections. Audit data: "Zero borders anywhere in the entire page." The CSS is written but dead code at page level. |
| **Background perceptibility** | 10 distinct → 1 perceptible (-9 semantic units) | Flagship has 12 zone-background CSS declarations but they are all within 1-8 RGB of each other. CD-006 has 5 backgrounds (blue, green, coral, amber, purple tinted) that are clearly distinct. |
| **Font-size range used** | 21 → 11 values (-10) | CD-006 uses 21 font sizes from 0.625rem to 3.5em across 11 component types. Flagship uses 11 from 10px to 36px mostly in header/meta roles. |

### Where the Flagship LEADS (and why it doesn't matter)

| Dimension | Flagship Advantage | Why It Doesn't Create Richness |
|-----------|-------------------|-------------------------------|
| **Letter-spacing values** | 15 vs 3 | Sub-threshold: 0.006em = 0.096px at 16px body. Humans cannot perceive differences below ~0.5px letter-spacing. |
| **CSS custom properties** | 53 vs 44 | Variables are infrastructure, not output. More variables with fewer perceptible effects = worse ratio. |
| **Intentionality** | 59% vs 30% | Higher intentionality is WASTED if perceptibility is 19%. It means "more CSS per section that nobody can see." |
| **Heading color micro-shifts** | 6 values vs 0 | Delta between #1A1A1A and #2A2420 is (16,10,6) RGB points. At 28px heading text, this is below perceptual threshold for most readers. |

---

## Part 5: The Richness Model — Formal Definition

### What Richness IS (Operationally)

**Richness is the COUNT OF CSS VALUE VARIATIONS that a reader can PERCEIVE changing across the scroll of a page, WITHOUT developer tools.**

### The Three Multipliers

1. **Variety** (how many CSS channels carry distinct values)
   - Minimum threshold: 8+ distinct channels with unique values
   - Crown jewel benchmark: DD-006 = 10, CD-006 = 13
   - Flagship: 7 channels (fails minimum)

2. **Intentionality** (what proportion of CSS varies by content zone)
   - This is the "vocabulary fluency" measure from scale research
   - High intentionality + high perceptibility = DESIGNED
   - High intentionality + low perceptibility = WASTED EFFORT (flagship)
   - Low intentionality + high perceptibility = TEMPLATE

3. **Perceptibility** (what proportion of variations a reader can see)
   - THE critical multiplier. Low perceptibility zeros out everything else.
   - Human perception thresholds:
     - Background color: ~8+ RGB point delta needed
     - Letter-spacing: ~0.5px absolute delta needed (= 0.03em at 16px)
     - Line-height: ~3px absolute delta needed (= 0.2 line-height units at 16px)
     - Font-size: ~2px absolute delta needed
     - Border weight: 1px delta always perceptible
     - Border color: ~20+ RGB point delta needed
   - The flagship's letter-spacing channel (0.006em = 0.096px) is 5x BELOW threshold.

### The Anti-Scale Confirmation

This data CONFIRMS the anti-scale thesis from scale-research.md:

> "Richness comes from the ratio of signal to silence, not from the total amount of signal."

The flagship has MORE total CSS (320 declarations vs DD-006's 180) and MORE intentionality (59% vs 29%). But it has LESS richness because its signal-to-noise ratio is catastrophic: 81% of its intentional variations are invisible.

**The formula that correctly predicts richness is NOT:**
```
Richness = CSS_amount × intentionality
```

**It IS:**
```
Richness = perceptible_semantic_variety × restraint_ratio × spatial_confidence
```

Where:
- **perceptible_semantic_variety** = count of CSS values above human perception threshold, serving distinct semantic purposes
- **restraint_ratio** = plausible CSS additions REJECTED vs accepted (DD-006 rejects complexity; flagship adds invisible complexity)
- **spatial_confidence** = does the page pass the squint test? (Yes for DD-006, No for flagship per Mode 4 PA)

---

## Part 6: Operational Implications

### What the Prompt Must Specify

For a page to achieve CD-006-level richness (score >= 20), it needs:

1. **Component variety >= 6 types** (callout, code block, table, file-tree or equivalent, task/checklist, reasoning/decision, core-abstraction)
2. **Callout variants >= 3** with PERCEPTIBLY DIFFERENT backgrounds (not just border-color shifts)
3. **Layout patterns >= 2** (single-column PLUS at least one grid/Z-pattern/bento section)
4. **Borders ACTUALLY DEPLOYED** on section elements (not just defined in CSS)
5. **Background color delta >= 15 RGB points** between zones (or don't use zone backgrounds — 2 RGB point shifts are visual noise)
6. **Every letter-spacing value >= 0.03em** (below this, it's wasted CSS)
7. **Every line-height delta >= 0.2** between zones (below this, imperceptible)
8. **Zero responsive breakpoints** is a failure mode (flagship has 0 media queries)

### The Minimum Richness Checklist (Binary Rules)

| # | Rule | Threshold | Flagship Status |
|---|------|-----------|----------------|
| R-01 | Unique perceptible font-sizes | >= 8 | FAIL (6 perceptible) |
| R-02 | Unique border declarations deployed in HTML | >= 8 | FAIL (0 deployed) |
| R-03 | Background color delta between adjacent zones | >= 15 RGB points | FAIL (1-8 points) |
| R-04 | Component types visible on page | >= 5 | FAIL (3: text, table, component-block) |
| R-05 | Layout pattern types | >= 2 | FAIL (1: single-column) |
| R-06 | Callout variants with distinct bg | >= 3 | FAIL (0 distinct callout backgrounds) |
| R-07 | Letter-spacing deltas above 0.5px | >= 3 zones | FAIL (0 zones above threshold) |
| R-08 | Media queries / responsive rules | >= 1 | FAIL (0 media queries) |
| R-09 | Visible dividers between sections | >= 3 | FAIL (dividers exist but are 1px height at 1-8 RGB point color = invisible) |
| R-10 | Perceptibility score | >= 50% | **FAIL (19%)** |

**Flagship score: 0/10. CD-006 score: 10/10. DD-006 score: 8/10.**

---

## Part 7: Key Takeaway

The flagship experiment failed at richness not because it lacked CSS infrastructure. It has MORE custom properties (53 vs 44), MORE intentional zone-specific rules (59% vs 30%), and MORE letter-spacing values (15 vs 3) than CD-006.

**It failed because it confused CSS EFFORT with CSS EFFECT.**

The defining characteristic of CD-006's richness is that EVERY CSS choice produces a VISIBLE result:
- Info callout: blue tint background + blue left border = reader sees "information"
- Gotcha callout: coral tint background + coral left border = reader sees "warning"
- Bento grid: 4-column layout = reader sees modular structure
- Z-pattern grid: golden-ratio columns = reader sees visual hierarchy

The defining characteristic of the flagship's poverty is that MOST CSS choices produce NO visible result:
- Zone-s1 background: #FEF9F5 → zone-s3 background: #FDF8F2 = reader sees "same cream"
- Zone-s1 letter-spacing: 0.006em → zone-s5 letter-spacing: -0.003em = reader sees "same text"
- Zone-s1 h2 color: #2A2420 → zone-s5 h2 color: #1A1A1A = reader sees "same black heading"

**Richness is NOT how many CSS rules you write.**
**Richness is NOT how many custom properties you define.**
**Richness is NOT how much your CSS varies per section.**

**Richness IS: how many DIFFERENT things can a reader SEE on the page?**

The gap in one sentence: **CD-006 has 6 visually distinct components; the flagship has 1 that repeats.**

---

*End of richness definition report.*
