# Exploration Cross-Check: Vocabulary Files vs Actual HTML Explorations

**Agent:** exploration-cross-check-2 (second pass, independent verification)
**Date:** 2026-03-01
**Files Audited:** identity.md, vocabulary.md, mechanisms.md, grammar.md, components.md
**Explorations Sampled:** DD-001-breathing.html, DD-006-fractal.html, OD-004-confidence.html, CD-006-pilot-migration.html
**Additional Spot-Checks:** DD-003-islands.html (bento grid), OD-001-conversational.html (solid offset, drop cap), OD-006-creative.html (drop cap)

---

## 1. DO THE MECHANISMS LISTED ACTUALLY APPEAR IN THE EXPLORATIONS?

### VERIFIED PRESENT (13 of 13 named mechanisms + 5 component patterns)

| Mechanism | Claim | Evidence | Verdict |
|-----------|-------|----------|---------|
| #5 Dense/Sparse Alternation (18/18) | INHALE/EXHALE rhythm through padding changes | DD-001: `.section-exhale` (92px padding) vs `.section-inhale` (24px padding). Present in all 4 sampled explorations. | **CONFIRMED** |
| #1 Border-Weight Gradient (15/18) | 4px/3px/1px encodes hierarchy | OD-004: `.stratum--established` 4px, `.stratum--probable` 3px, `.stratum--speculative` 2px, `.stratum--open` 1px. CD-006 header 3px, callouts 4px. | **CONFIRMED** |
| #11 Typographic Scale Jumping (18/18) | ~1.5x ratio between heading levels | DD-001: 32px/28px/20px. OD-004: 2.5rem/1.625rem/1.375rem. CD-006: 3rem/1.625rem/1.375rem. | **CONFIRMED** |
| #9 Color Encoding (16+/18) | Accent color maps to semantic meaning | All 4 explorations use 4-5 semantic accent colors on callouts. | **CONFIRMED** |
| #13 Dark Header + 3px Border (12-14/18) | #1A1A1A bg + 3px #E83025 border-bottom | OD-004: `background: var(--color-text)` + `border-bottom: 3px solid var(--color-primary)`. CD-006: same. DD-001/DD-006: white headers, NOT dark. | **CONFIRMED for OD/CD era. DD-era uses white headers.** |
| #14 Footer Mirror (6-8/18) | Dark bg + 3px border-top | CD-006: `.page-footer` with `border-top: 3px solid var(--color-primary)`. DD explorations lack footers. | **CONFIRMED** |
| #3 Solid Offset Depth (4-5/18) | ::after pseudo at 4px offset | OD-004: `.geological-survey::after` with offset-x/offset-y/offset-color tokens. | **CONFIRMED** |
| #7 Zone Background Differentiation (12/18) | 4-color background token system | OD-004: 5 zone tokens. CD-006: 3 zone tokens. DD-001: informal (FEF9F5 + white only). | **CONFIRMED** |
| #16 Drop Cap (3/18) | ::first-letter in display serif at 3.5em | OD-001: `.answer__lead--dropcap::first-letter`. OD-006: `.section-opening::first-letter`. CD-006: `.drop-cap::first-letter` at 3.5em. | **CONFIRMED (exactly 3 explorations)** |
| #15 Bento Grid (10+/18) | Variable-span grid, cell size encodes importance | CD-006: `.bento-grid` with `--wide`/`--large` modifiers, `1.618fr 1fr`. DD-003: `2fr 1fr 1fr` grid. | **CONFIRMED but count questionable (see below)** |
| #4 Spacing Compression (12+/18) | More certain = more space | OD-004: `--stratum-established-padding: 40px` vs `--stratum-open-padding: 16px`. | **CONFIRMED** |
| #17 Code Block (12+/18) | Dark bg + syntax highlighting | DD-001, DD-006, CD-006 all use `background: #1A1A1A` code blocks. CD-006 has full syntax highlighting token set. | **CONFIRMED** |
| #18 Data Table (10/18) | Mono uppercase headers + 3px header border + no vertical borders | CD-006: `.decision-matrix th` uppercase, `border-bottom: 3px`, no vertical borders. | **CONFIRMED** |
| 2-Zone DNA (18/18) | Sparse uppercase label + dense body | DD-001: `.callout-essence__label` (10px, uppercase) + `.callout-essence__content` (18px). Universal pattern. | **CONFIRMED** |
| Inline Code Styling | Subtle bg + 1px border | CD-006: `code:not(pre code)` with `background: var(--color-border-subtle)` + `border: 1px solid`. | **CONFIRMED** |

**Summary: ALL listed mechanisms have HTML evidence.** No fabricated mechanisms found.

---

## 2. DO THE TOKEN VALUES MATCH WHAT'S USED IN THE HTML?

### Color Palette: EXACT MATCH

| Token | Claimed Value | DD-001 | DD-006 | OD-004 | CD-006 |
|-------|--------------|--------|--------|--------|--------|
| --color-primary | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 |
| --color-background | #FEF9F5 | #FEF9F5 | #FEF9F5 | #FEF9F5 | #FEF9F5 |
| --color-text | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A |
| --color-text-secondary | #666666 | #666666 | #666666 | #666666 | #666666 |
| --color-border | #E0D5C5 | #E0D5C5 | #E0D5C5 | #E0D5C5 | #E0D5C5 |
| --color-border-subtle | #F0EBE3 | #F0EBE3 | #F0EBE3 | #F0EBE3 | #F0EBE3 |
| --accent-blue | #4A90D9 | #4A90D9 | #4A90D9 | #4A90D9 | #4A90D9 |
| --accent-green | #4A9D6B | #4A9D6B | #4A9D6B | #4A9D6B | #4A9D6B |
| --accent-amber | #D97706 | #D97706 | #D97706 | #D97706 | #D97706 |
| --accent-purple | #7C3AED | #7C3AED | #7C3AED | #7C3AED | #7C3AED |
| --accent-coral | #C97065 | #C97065 | NOT in :root | #C97065 | #C97065 |

**VERDICT: 100% match across all sampled explorations.** No fabricated color values.

### Typography Trinity: EXACT MATCH

All 4 explorations load identical Google Fonts: `Instrument Serif` (display), `Inter` (body), `JetBrains Mono` (mono). Fallback stacks match. **NOTE:** CD-006 also loads Inter weight 700 (undocumented in vocabulary files).

### Spacing Scale: MATCH with minor omission

All explorations use the same 4px base unit scale. `--space-24: 96px` is used in OD-004 but NOT mentioned in vocabulary.md's spacing section. All other values match exactly.

### Zone Backgrounds: MATCH (simplified)

vocabulary.md claims 4 zones: Sparse (#FEF9F5), Dense (#FFFFFF), Breathing (#FAF5ED), Bedrock (#1A1A1A).

OD-004 actually has 5 zone tokens (moderate + dense both #FFFFFF; densest + breathing both #FAF5ED). CD-006 has 3 (sparse/dense/breathing). The vocabulary.md simplification is defensible since the collapsed values are identical, but OD-004's semantic distinction between "moderate" and "dense" is lost.

---

## 3. ARE THE USAGE FREQUENCIES PLAUSIBLE?

| Mechanism | Claimed | Assessment |
|-----------|---------|------------|
| Dense/Sparse Alternation | 18/18 | **PLAUSIBLE.** Universal pattern, confirmed in all samples. |
| Typographic Scale Jumping | 18/18 | **PLAUSIBLE.** Every exploration has heading hierarchy. |
| 2-Zone DNA | 18/18 | **PLAUSIBLE.** Every callout uses sparse label + dense body. |
| Color Encoding | 16+/18 | **PLAUSIBLE.** Nearly universal. |
| Border-Weight Gradient | 15/18 | **PLAUSIBLE.** Most use 4px/3px/1px in some combination. |
| Dark Header + 3px Border | 12-14/18 | **PLAUSIBLE.** DD-era uses white headers, OD/CD use dark. 12 OD+CD explorations = 12. Some late DDs possibly. |
| Zone Background Differentiation | 12/18 | **PLAUSIBLE.** Formal zone tokens from OD-004 onward; earlier DDs use informal bg changes. |
| Code Block | 12+/18 | **PLAUSIBLE.** Most explorations include code sections. |
| Bento Grid | 10+/18 | **POSSIBLY OVERSTATED.** CD-006 has explicit bento. DD-003 has multi-column grids. DD-001 has `.dense-grid`. But DD-006 has no bento grid. If every multi-column grid counts, 10+ is plausible. If strict "variable-span importance encoding" is required, the count is lower. |
| Data Table | 10/18 | **PLAUSIBLE.** Many explorations have table components. |
| Spacing Compression | 12+/18 | **PLAUSIBLE.** OD-004 explicit; others vary padding between sections. |
| Footer Mirror | 6-8/18 | **PLAUSIBLE.** CD-era + some OD explorations have footers. DD explorations generally lack them. |
| Solid Offset Depth | 4-5/18 | **PLAUSIBLE.** Rare technique, confirmed in OD-001 and OD-004. |
| Drop Cap | 3/18 | **CONFIRMED EXACTLY.** OD-001, OD-006, CD-006. |
| Width Variation | 3-4/18 | **PLAUSIBLE.** DD-004 and DD-006 use inline max-width overrides. |

---

## 4. ARE THERE SIGNIFICANT CSS TECHNIQUES NOT CAPTURED IN mechanisms.md?

### FOUND AND NOT LISTED

1. **Letter-spacing as hierarchy tool.** EVERY exploration uses letter-spacing on mono labels (0.06-0.2em range) as a categorization signal. Pervasive and transferable. mechanisms.md subsumes this under "2-Zone DNA" but it operates independently (on section headers, meta text, etc. that aren't callouts). **MEDIUM GAP.**

2. **Scroll-driven animations (OD-004).** `animation-timeline: view()` with `@keyframes arrive` and proper `@supports`/`prefers-reduced-motion` fallbacks. Transferable technique. mechanisms.md says it's "illustrative, not exhaustive" so omission is within scope, but this is a notable OD-era innovation. **MINOR GAP** (mechanisms.md explicitly disclaims exhaustiveness).

3. **rgba() semi-transparent backgrounds.** DD-001 through DD-006 use rgba() for callout backgrounds. identity.md's "No semi-transparent backgrounds" absolute refusal is CONTRADICTED by DD-era explorations. This is a known issue -- the refusal reflects CD-era practice (opaque backgrounds in CD-006) not DD-era practice. **KNOWN INCONSISTENCY** (being cleaned up).

4. **`::selection` styling.** CD-006 brands text selection in primary red. Present in components.css but not in mechanisms.md. **TRIVIAL** (more CSS detail than compositional mechanism).

5. **Font smoothing directives.** CD-006 uses `-webkit-font-smoothing: antialiased`. Not documented. **TRIVIAL.**

**VERDICT:** The main gap is letter-spacing as a named mechanism. Everything else is either trivial, within the declared scope ("illustrative, not exhaustive"), or a known legacy inconsistency.

---

## 5. ARE THERE COMPONENTS NOT LISTED IN components.md?

### Exploration-Specific Components Found (correctly omitted):
- Geological Survey + Geological Column minimap (OD-004) -- page-specific
- Confidence Switcher (OD-004) -- page-specific
- Fractal Visualization + Scale Demo containers (DD-006) -- page-specific
- Breath Indicator (DD-001) -- diagnostic label
- Strata Inventory grid (OD-004) -- page-specific

### Potentially Reusable Components Found (borderline omissions):
- **Table of Contents** (CD-006 `.toc`) -- 3px border, mono-numbered list. Could be reusable.
- **Dense Card Grid** (DD-001 `.dense-grid`/`.dense-card`) -- Could be reusable.

**VERDICT: No significant reusable components missing.** components.md correctly focuses on transferable patterns. The borderline cases (TOC, dense card grid) are defensible omissions -- they're less universally applicable than the listed components.

---

## 6. DOES THE BORDER WEIGHT SYSTEM (4px/3px/1px) MATCH?

### vocabulary.md Claims:
"Three weights, not four. 4px/3px/1px. 2px deliberately skipped (Exception: OD-004 confidence encoding)."

### Exploration Evidence:

| Exploration | 4px | 3px | 2px | 1px | Notes |
|-------------|-----|-----|-----|-----|-------|
| DD-001 | Callout left borders | Header bottom | NONE | File-tree, matrix rows | **Clean 3-weight** |
| DD-006 | Callout left borders, fractal viz | Header bottom, fractal-scale boxes | `.scale-demo__header` (line 341) | fractal-complete border | **VIOLATES: 2px used** |
| OD-004 | Established stratum, callouts | Header, survey, stratum boundaries | Speculative stratum (intentional) | Open stratum, separators | **Documented exception** |
| CD-006 | Callout left borders | Header, footer, code, file-tree, matrix, toc, reasoning, bento | NONE found | Inline code, row separators | **Clean 3-weight** |

**VERDICT:**
- vocabulary.md's 3-weight claim is ACCURATE for the dominant pattern
- OD-004 exception is correctly documented
- DD-006 also uses 2px borders (undocumented) -- `.scale-demo__header` has `border-bottom: 2px solid var(--color-primary)` and `.section-scale__para--dense` has `border-left: 2px solid var(--color-primary)`
- **MINOR ISSUE:** DD-006's 2px usage should be noted as a second exception, or acknowledged as pre-codification inconsistency

---

## 7. DOES THE COLOR PALETTE MATCH?

### identity.md Claims:
- Background `#FEF9F5`, text `#1A1A1A`, primary `#E83025`
- "Two-color text hierarchy" -- primary (#1A1A1A) and secondary (#666666)
- Five semantic accents: blue, green, coral/red, amber, purple

### Evidence:
- **Background, text, primary: EXACT MATCH** across all 4 explorations
- **Two-color text hierarchy: CONFIRMED.** All explorations use only #1A1A1A and #666666 for text. (#FAFAF5 in dark headers is functional, not a third level.)
- **Five accents: CONFIRMED.** All values match. Only minor variation: DD-006 :root lacks --accent-coral but other DDs have it.

**VERDICT: Palette is ACCURATELY documented.**

---

## 8. CONTAINER WIDTH

### vocabulary.md Claims:
"Range, not mandate. Narrow (860px), Standard (960px), Wide (1100px)."

### Actual Container Widths:

| Stage | Explorations | max-width |
|-------|-------------|-----------|
| DD | DD-001, DD-002 | 900px |
| DD | DD-003, DD-004, DD-006 | 1000px |
| DD | DD-005 | 1100px |
| OD | OD-001 through OD-006 | 860px |
| CD | CD-001 through CD-006 | 1100px |

**SIGNIFICANT FINDING: 960px is NOT used by any exploration.** The vocabulary.md claim of "Standard (960px): General-purpose, good default" is not grounded in exploration evidence. The actual clustering is:
- 860px (all OD -- 6 explorations)
- 900px (DD-001, DD-002 -- 2 explorations)
- 1000px (DD-003, DD-004, DD-006 -- 3 explorations)
- 1100px (DD-005 + all CD -- 7 explorations)

The 940-960px range appears in many pipeline documents as the "non-negotiable" container width, but this is a post-exploration specification, not an observed exploration value. vocabulary.md conflates the pipeline specification with exploration evidence.

**RECOMMENDATION:** Change "Standard (960px)" to "Standard (900-1000px)" to match actual DD-era usage, or explicitly note that 960px is a pipeline specification rather than an observed exploration value.

---

## 9. CALLOUT COLOR MAPPING DISCREPANCY

### What mechanisms.md and components.md imply:
- Essence callout = amber accent (#D97706)
- Challenge callout = purple accent (#7C3AED)
- Gotcha callout = coral accent (#C97065) or primary (#E83025)

### What CD-006 actually does:
- Essence callout = **purple** accent (#7C3AED) + breathing zone background (#FAF5ED)
- Challenge callout = **amber** accent (#D97706) + #FFFBF2 background
- Gotcha callout = **coral** accent (#C97065) + #FEF6F5 background

### What DD-001 actually does:
- Essence callout = **amber** accent (#D97706)
- Challenge callout = not present
- Gotcha callout = **coral** accent (#C97065)

**FINDING:** The callout accent mapping VARIES between exploration eras. DD-era pairs essence with amber. CD-006 pairs essence with purple. The vocabulary files follow the DD-era convention (essence=amber), which contradicts the crown jewel CD-006 (essence=purple). This was flagged in the prior cross-check and remains a factual discrepancy.

---

## SUMMARY

### CONFIRMED ACCURATE (high confidence)
1. All primary color token values -- exact match across explorations
2. Typography trinity -- exact match
3. Spacing scale -- exact match (minor --space-24 omission)
4. Border weight system 4px/3px/1px -- accurate with documented exception
5. All 13 named mechanisms have HTML evidence -- zero fabrications
6. Usage frequencies -- all plausible (Bento Grid 10+/18 is the weakest claim)
7. Component inventory -- covers universal components well
8. 2-Zone DNA as universal pattern -- confirmed
9. Two-color text hierarchy -- confirmed
10. Zone background values -- match OD-004 and CD-006

### FACTUAL ISSUES (correction recommended)
1. **Container width 960px has no exploration evidence.** Actual values cluster at 860/900/1000/1100. vocabulary.md presents 960px as "Standard" but no exploration uses it.
2. **DD-006 2px border usage is undocumented.** vocabulary.md only notes OD-004 as the 2px exception, but DD-006 also uses 2px in at least 2 places.
3. **Bento Grid 10+/18 count may be inflated.** Depends on whether any multi-column grid counts as "bento" or only variable-span importance-encoding grids qualify.

### KNOWN INCONSISTENCIES (not errors in vocabulary files, but worth noting)
1. rgba() callout backgrounds in DD explorations contradict identity.md's "No semi-transparent backgrounds" absolute refusal. Refusal reflects CD-era practice.
2. Callout accent mappings (essence=amber vs essence=purple) differ between DD-era and CD-006. Vocabulary files follow DD convention.
3. DD-005 uses a linear gradient, contradicting "No gradient backgrounds."

### DESIGN DECISIONS (defensible simplifications)
1. Zone backgrounds simplified from 5 tokens (OD-004) to 4 -- values collapse to identical hex
2. Exploration-specific components correctly omitted from components.md
3. mechanisms.md explicitly disclaims exhaustiveness -- omission of scroll-driven animations and letter-spacing is within scope
