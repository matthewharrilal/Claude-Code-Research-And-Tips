# 04: Remediation Prompt Gap Analysis

**Agent:** remediation-auditor (Opus 4.6)
**Date:** 2026-02-17
**Task:** Assess whether the 301-line remediation prompt (10-REMEDIATION-PROMPT.md) addresses ALL known deficiencies from the flagship audit.

**Sources Compared:**
- `10-REMEDIATION-PROMPT.md` (301 lines -- THE remediation prompt)
- `00-AUDIT-DATA.md` (109 lines -- programmatic measurements)
- `05-crown-jewel-comparison.md` (316 lines -- CD-006 vs flagship technique gaps)
- `08-mc-channel-crossref.md` (513 lines -- multi-coherence/scale-channel analysis)
- `14-richness-definition.md` (562 lines -- richness fingerprint)
- `01-scale5-playbook.md` (705 lines -- Scale 5 operational detail)
- `02-channel-expansion-playbook.md` (1,197 lines -- full channel operationalization)

---

## CHECKLIST: 14 Known Deficiencies

### 1. Ch4 Structural (zero borders) -- ADDRESSED? YES

**Remediation coverage:** Phase 1 (lines 25-77), three sub-phases:
- 1A: Section-level left borders on 6 of 12 sections (S2, S5, S7, S9, S10, S12) with specific CSS
- 1B: Amplify existing dividers (`.divider-smooth`, `.divider-bridge`, `.divider-breathing`) with increased height/color
- 1C: Add containment to `.component-block` with `border-top: 1px solid` and background

**Quality of coverage:** STRONG. Specific CSS provided for each sub-fix. Colors and widths are concrete. Alternating presence pattern (6/12) creates rhythm rather than uniform application.

**Gap:** MINOR. The remediation adds SECTION-LEVEL borders (left borders on sections) but does NOT add inter-section dividers/containment at section BOUNDARIES (the zones between sections). The audit data shows catastrophic whitespace voids of 210-276px between sections (S2->S3: 243px, S4->S5: 270px, etc.). Phase 1B amplifies existing dividers but does not address the void SIZE -- a `.divider-breathing` at `height: 4px` does not fix a 270px void.

**Recommendation:** Add explicit instructions to REDUCE section margin/padding at boundaries where voids exceed 200px. For example: `.zone-s4 + .zone-s5 { margin-top: 0; }` or reduce `--space-20` margin on `.divider-breathing` (already partially addressed: "margin: var(--space-16) 0 -- was --space-20 (80px) -- reduced to prevent void").

**Verdict: MOSTLY ADDRESSED. The void reduction is partially noted but not explicitly measured against the 210-276px audit data.**

---

### 2. Ch1 Chromatic (backgrounds 1-8 RGB delta) -- ADDRESSED? YES

**Remediation coverage:** Phase 3 (lines 153-184), with:
- 3A: Full replacement of 12 zone background tokens with amplified values
- RGB deltas now 10-20 points between adjacent sections (up from 2-6)
- Explicit temperature arc preserved: Zone 1 warm -> Zone 2 cool -> Zone 3 warm
- Critical constraint: no #000000 or #FFFFFF backgrounds (except S5 #FFFFFF as single analytical peak)

**Quality of coverage:** STRONG. All 12 zone-specific background colors are specified with exact hex values. The warm-to-cool-to-warm arc is documented. The pure white exception is noted.

**Gap:** NONE significant. The remediation provides the exact token replacements needed.

**Verdict: FULLY ADDRESSED.**

---

### 3. Ch2 Typographic (uniform 16px/400) -- ADDRESSED? YES

**Remediation coverage:** Phase 2 (lines 81-149), with:
- 2A: Paragraph font-size variation by zone (17px sparse / 16px standard / 15px dense)
- 2B: Heading weight and size variation (30px/400 Zone 1, 26px/600 Zone 2, 28px/400 Zone 3)
- 2C: Letter-spacing at perceptible amplitudes (0.02em/0.03em Zone 1, -0.01em/-0.02em Zone 2, 0/0 Zone 3)

**Quality of coverage:** STRONG. Three sub-phases cover font-size, font-weight, and letter-spacing independently. Values are concrete and within soul constraints.

**Gap:** MINOR. The remediation addresses p and h2 elements but does NOT specify:
- Line-height variation (mentioned in the perception threshold table at line 15 but not in Phase 2 instructions). The Scale 5 playbook (01-scale5-playbook.md) section 2.6 specifies line-height should vary from 1.6 (dense) to 1.85 (sparse). The remediation Phase 2A sets line-height for Zone 1 (1.85) and Zone 2 (1.6) on paragraphs, so this IS partially covered within the font-size section.
- Body text color variation. The Scale 5 playbook section 2.3 specifies per-zone text color (#2A2420 sparse, #1A1A1A standard, #1E1B18 dense). The remediation Phase 2B specifies heading color (#3D3530 Zone 1, var(--color-text) Zone 2, #2D2825 Zone 3) but does NOT specify body paragraph color variation.

**Recommendation:** Add a Phase 2D for body text color variation:
```css
.zone-s1 p, .zone-s2 p, .zone-s3 p { color: #2A2420; }
.zone-s5 p, .zone-s7 p, .zone-s8 p { color: #1E1B18; }
```

**Verdict: MOSTLY ADDRESSED. Body text color variation is missing.**

---

### 4. Ch3 Spatial (uniform 16px margins) -- ADDRESSED? YES

**Remediation coverage:** Phase 4 (lines 187-223), with:
- 4A: Paragraph margin variation (20px sparse / 16px standard / 12px dense) + max-width variation (62ch / 68ch / 72ch)
- 4B: Asymmetric section padding (more top padding in Zone 1, tighter in Zone 2)

**Quality of coverage:** STRONG. Both paragraph-level margins AND section-level padding are varied. Max-width variation (62ch to 72ch) adds horizontal spatial rhythm.

**Gap:** NONE significant. This directly addresses the audit finding of "p_marginBottom: 16px across ALL sections."

**Verdict: FULLY ADDRESSED.**

---

### 5. Ch5 Material (no component differentiation) -- ADDRESSED? YES

**Remediation coverage:** Phase 5 (lines 228-271), with:
- 5A: Callout type variation -- 4 distinct styles (warm/amber, resolution/green, neutral/border, default/primary-red) with DIFFERENT border colors AND background tints
- 5B: Self-reference callouts with double-border treatment + `data-self-ref` attribute

**Quality of coverage:** MODERATE. Four variant styles with distinct backgrounds is better than the current single style, BUT:

**Gap:** SIGNIFICANT. The crown jewel comparison (05-crown-jewel-comparison.md) identifies the flagship's core structural deficit as having only 2 component types (component-block + pullquote) vs CD-006's 11 distinct types. Phase 5 differentiates WITHIN the single component-block type (4 color variants) but does NOT create ANY new component types. The remediation is CSS-only, which is appropriate per its constraints ("Do NOT restructure the HTML sections"), but this means the component variety gap is STRUCTURALLY UNCLOSABLE by this remediation.

Specifically missing from the CSS-only scope:
- No new callout types (info, tip, gotcha, essence, challenge -- CD-006's 5 types)
- No file-tree component styling
- No decision-matrix component styling
- No reasoning component styling
- No Q&A block styling

These require HTML changes, which the remediation correctly excludes. But the gap analysis should NOTE that the component variety gap (Flagship 2/13 vs CD-006 12/13) is NOT addressed and CANNOT be addressed by CSS-only remediation.

**Verdict: PARTIALLY ADDRESSED. Component COLORING is differentiated, but component VARIETY remains at 2 types (structural gap outside CSS-only scope).**

---

### 6. Ch6 Behavioral (no interaction/animation) -- ADDRESSED? NO

**Remediation coverage:** ABSENT. The remediation prompt has zero mention of:
- CSS transitions on hover states
- Focus-visible styling
- ::selection styling
- prefers-reduced-motion
- Any interactive behavior

**Gap:** SIGNIFICANT. The channel expansion playbook (02-channel-expansion-playbook.md, Part 1, Channel 6 "Rhythmic") and the crown jewel comparison (Category 11: Accessibility, Category 12: Responsive) both identify zero behavioral/interactive CSS as a major gap. CD-006 has:
- Skip link
- `focus-visible` outline
- `::selection` styling
- `prefers-reduced-motion`
- Print styles
- `role="separator"` on transitions

The richness definition (14-richness-definition.md) scores Flagship at 0/8 on accessibility vs CD-006's 8/8.

**Recommendation:** Add a Phase 7 for minimal behavioral/accessibility CSS:
```css
/* Accessibility minimum */
::selection { background: rgba(232, 48, 37, 0.15); }
a:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }

/* Link hover */
a { transition: color 150ms ease-out; }
a:hover { color: var(--color-text); }

/* Table row hover */
table tbody tr { transition: background-color 100ms ease-out; }
table tbody tr:hover { background-color: var(--color-zone-breathing); }
```

**Verdict: NOT ADDRESSED. Zero behavioral/interactive/accessibility CSS in the remediation.**

---

### 7. Ch7 Relational (no content-form resonance markers) -- ADDRESSED? PARTIALLY

**Remediation coverage:** Phase 5B (lines 258-271) addresses self-reference with `data-self-ref` attribute and double-border treatment.

**Gap:** MODERATE. The MC-channel crossref (08-mc-channel-crossref.md) identifies these relational deficiencies:
- MC-01 (CCS >= 0.30): Mechanisms operate independently; no coupling CSS. The remediation adds visual variety but does NOT explicitly create coupling between mechanisms. The remediation could add a note: "When adding borders (Phase 1), ensure they CO-VARY with backgrounds (Phase 3) -- sections with warm backgrounds get warm-colored borders, sections with cool backgrounds get cool borders."
- MC-02 (>= 3 reinforcing pairs): The remediation implicitly creates reinforcing by applying Zone 1/2/3 treatment across all phases, but does NOT document which pairs are reinforcing or test for it.
- MC-07 (>= 10/15 cross-dimension pairs): NOT addressed. The remediation creates independent phase improvements (Phase 1=borders, Phase 2=type, Phase 3=backgrounds, Phase 4=spacing) but does not specify how they should INTERACT to create cross-dimension coherence.

**Recommendation:** Add a Phase 0 or preamble that states: "All zone-specific changes in Phases 1-5 follow a unified density model: Zone 1 (S1-S3) = warm/sparse/generous. Zone 2 (S5, S7, S8) = cool/dense/compressed. Zone 3 (S9-S12) = warm/moderate/settled. Every per-zone CSS decision MUST reinforce this arc. If a Zone 2 section has warm background AND generous spacing, THAT IS A BUG."

**Verdict: PARTIALLY ADDRESSED. Self-reference is covered. Multi-coherence coupling is implicit but not documented.**

---

### 8. Scale 5 detail variation -- ADDRESSED? YES (via Phases 2+4)

**Remediation coverage:** Scale 5 is addressed through the combination of:
- Phase 2A: Font-size variation (15px/16px/17px by zone)
- Phase 2B: Font-weight variation (400 vs 600 on h2)
- Phase 2C: Letter-spacing variation (0.02em to -0.02em)
- Phase 4A: Margin-bottom variation (12px/16px/20px)
- Phase 4A: Max-width variation (62ch/68ch/72ch)

**Gap:** MINOR. The Scale 5 playbook (01-scale5-playbook.md) specifies 8 properties. The remediation covers 6 of 8:
1. Font-size: YES (Phase 2A)
2. Font-weight: YES (Phase 2B)
3. Color (body text): NO (only heading color specified)
4. Margin-bottom: YES (Phase 4A)
5. Letter-spacing: YES (Phase 2C)
6. Line-height: YES (Phase 2A, embedded in font-size section)
7. Word-spacing: NO (not mentioned in remediation)
8. Max-width: YES (Phase 4A)

Missing: body text color variation and word-spacing. Both are secondary (the Scale 5 playbook notes word-spacing is "tertiary" and color is the "most subliminal" property).

**Verdict: MOSTLY ADDRESSED. 6/8 Scale 5 properties covered. Body text color and word-spacing missing.**

---

### 9. Whitespace voids (210-276px gaps) -- ADDRESSED? PARTIALLY

**Remediation coverage:** Phase 1B (line 64) reduces `.divider-breathing` margin from `--space-20 (80px)` to `--space-16`, with comment "reduced to prevent void."

**Gap:** SIGNIFICANT. The audit data shows 6 catastrophic whitespace gaps between 210-276px:
| Gap | Size |
|-----|------|
| S2->S3 | 243px |
| S4->S5 | 270px |
| S6->S7 | 210px |
| S7->S8 | 243px |
| S8->S9 | 276px |
| S11->S12 | 242px |

The remediation reduces ONE divider type's margin (`.divider-breathing`) but does not:
1. Identify WHICH specific gaps need reduction
2. Measure whether the reduction is sufficient
3. Address gaps caused by section padding (not divider margins)
4. Add any verification check for maximum gap size

The Scale 5 playbook section 4B adds asymmetric section padding, which would indirectly help. But the core problem -- total inter-section gap exceeding 200px -- is not directly targeted.

**Recommendation:** Add a Phase 6B verification item:
```
VOID CHECK: No gap between adjacent content elements may exceed 120px.
Measure: scroll between last element of section N and first element of section N+1.
If gap > 120px: reduce section padding-bottom OR divider margin OR section padding-top.
```

And add specific CSS:
```css
/* Reduce maximum section margin for adjacent sections */
section + section { margin-top: 0; }
.divider-breathing { margin: var(--space-12) 0; } /* was var(--space-16), further reduced */
```

**Verdict: PARTIALLY ADDRESSED. One margin reduced; 6 specific voids not individually targeted; no verification check.**

---

### 10. Self-reference moments -- ADDRESSED? YES

**Remediation coverage:** Phase 5B (lines 258-271) directly addresses self-reference:
- Double-border treatment (left + right borders) for `[data-self-ref]` components
- Distinct background color (`var(--bg-warm)`)
- Instruction to add `data-self-ref` attributes if not present

**Quality of coverage:** GOOD. The self-reference elements get a visually distinct treatment that separates them from standard component-blocks.

**Gap:** NONE significant. The 3 self-reference moments identified in the audit are covered.

**Verdict: FULLY ADDRESSED.**

---

### 11. Table styling (only elements with borders currently) -- ADDRESSED? NO

**Remediation coverage:** ABSENT. The remediation mentions tables in passing (Phase 1 notes "Tables have borders; nothing else does") but provides ZERO instructions for enriching table styling itself.

**Gap:** MODERATE. The crown jewel comparison (Category 7: Table Styling) shows:
- Flagship score: 4/6 (already decent)
- Missing: table bordered container, table header distinct background, recommended row highlighting

The flagship tables already have border treatments (`.table-compact`, `.table-dense`, `.table-featured`, etc. -- 7 variants). The remediation correctly focuses on the rest of the page. However, there is an opportunity to enrich table HEADERS:

**Recommendation:** Add minimal table header enrichment:
```css
/* Table header backgrounds (currently none) */
.table th { background-color: var(--color-zone-breathing); }
.table-featured th { background-color: #F5EDE2; }
```

**Verdict: NOT ADDRESSED (but lower priority -- tables already have some differentiation).**

---

### 12. Blockquote styling -- ADDRESSED? NO

**Remediation coverage:** ABSENT. The audit data notes "Only 1 blockquote (S2)" and the remediation does not mention blockquote styling.

**Gap:** MINOR. There is only 1 blockquote in the entire page. The `.master-insight` class has `border-left: 4px; outline: 2px` per the crown jewel comparison. This is already somewhat styled.

**Recommendation:** If the existing blockquote styling is weak, add:
```css
blockquote, .master-insight {
  border-left: 4px solid var(--color-primary);
  background-color: var(--color-zone-breathing);
  padding: var(--space-4) var(--space-6);
  font-family: var(--font-display);
  font-style: italic;
}
```

**Verdict: NOT ADDRESSED (but very low impact -- only 1 blockquote exists).**

---

### 13. Max-width variation -- ADDRESSED? YES

**Remediation coverage:** Phase 4A (lines 195-204) includes:
- Zone 1: `max-width: 62ch`
- Zone 2: `max-width: 72ch`
- Transitional: `max-width: 68ch`
- Zone 3: `max-width: 64ch`

**Quality of coverage:** GOOD. Four distinct max-width values creating horizontal density variation.

**Gap:** NONE.

**Verdict: FULLY ADDRESSED.**

---

### 14. Multi-coherence (zone transitions) -- ADDRESSED? PARTIALLY

**Remediation coverage:** The remediation creates zone-differentiated CSS across Phases 1-5 that IMPLICITLY produces multi-channel transitions. At each zone boundary, Phase 1 (borders), Phase 2 (typography), Phase 3 (backgrounds), and Phase 4 (spacing) would all shift simultaneously.

**Gap:** SIGNIFICANT. The MC-channel crossref identifies these specific failures:
- MC-01 (CCS >= 0.30): NOT explicitly addressed. The remediation improves individual channels but does not test for or guarantee inter-mechanism coupling.
- MC-02 (>= 3 reinforcing pairs): IMPLICIT but not documented.
- MC-06 (cascade of 3+): NOT addressed. No value table is provided showing how ALL properties co-vary at zone boundaries.
- MC-07 (>= 10/15 cross-dimension pairs): NOT addressed. No pair-by-pair mapping.
- SC-09 (>= 3 channels per transition): The remediation's Phase 6 self-verification (line 277) checks "Each screenful looks DIFFERENT from previous" but does NOT check per-transition channel count.

The remediation creates the RAW MATERIAL for multi-coherence (varied backgrounds + varied type + varied borders + varied spacing), but does not:
1. Verify that these changes CO-OCCUR at the same section boundaries
2. Provide a cascade value table showing all properties at each zone
3. Test for minimum 3-channel shifts per transition
4. Document which mechanism pairs are reinforcing

**Recommendation:** Add to Phase 6 (Self-Verification):
```
11. **Zone transitions (SC-09):** At S4->S5 boundary, count channels that shift:
    - Background changes? [YES: Phase 3 token shift]
    - Typography changes? [YES: Phase 2 font-size/weight shift]
    - Borders change? [YES: Phase 1 left-border appears on S5]
    - Spacing changes? [YES: Phase 4 padding/margin shift]
    Count >= 3 = PASS. Check ALL 11 transitions.

12. **Cascade coherence (MC-06):** Build this value table BEFORE coding:
    | Zone | Padding | Background | Border | Font-Size | Line-Height |
    |------|---------|------------|--------|-----------|-------------|
    | Sparse | 64px | #FEF5EB | none | 17px | 1.85 |
    | Dense | 32px | #FFFFFF | 4px | 15px | 1.6 |
    | Refined | 48px | #FEF7F0 | 3px | 16px | 1.75 |
    ALL columns must shift in the SAME direction at zone boundaries.
```

**Verdict: PARTIALLY ADDRESSED. Individual channels improved but multi-coherence verification is absent.**

---

## SUMMARY TABLE

| # | Deficiency | Addressed? | Gap Severity | Missing Content |
|---|-----------|------------|-------------|-----------------|
| 1 | Ch4 Structural (borders) | YES | MINOR | Void reduction insufficient at specific gaps |
| 2 | Ch1 Chromatic (backgrounds) | YES | NONE | -- |
| 3 | Ch2 Typographic (uniformity) | YES | MINOR | Body text color variation missing |
| 4 | Ch3 Spatial (uniform margins) | YES | NONE | -- |
| 5 | Ch5 Material (component diff) | PARTIAL | MODERATE | Component VARIETY (structural HTML gap) not closable via CSS-only |
| 6 | Ch6 Behavioral (interaction) | **NO** | **SIGNIFICANT** | Zero accessibility/interaction CSS |
| 7 | Ch7 Relational (coherence) | PARTIAL | MODERATE | Multi-coherence coupling not documented |
| 8 | Scale 5 detail | YES | MINOR | Word-spacing and body text color missing |
| 9 | Whitespace voids | PARTIAL | **SIGNIFICANT** | 6 specific voids not individually targeted |
| 10 | Self-reference | YES | NONE | -- |
| 11 | Table styling | **NO** | MINOR | Table header backgrounds missing |
| 12 | Blockquote styling | **NO** | NEGLIGIBLE | Only 1 blockquote; likely already styled |
| 13 | Max-width variation | YES | NONE | -- |
| 14 | Multi-coherence | PARTIAL | **SIGNIFICANT** | No value table, no per-transition verification, no MC metric checks |

---

## OVERALL ASSESSMENT

**Remediation prompt quality: 7/10**

**What it does well:**
- Phases 1-5 provide CONCRETE CSS with exact values (not thresholds)
- Zone-based organization (Zone 1/2/3) creates implicit multi-channel coherence
- Perception threshold table (line 9-20) sets clear minimum amplitudes
- Phase 6 self-verification has 10 binary checks
- CSS-only constraint is appropriate and clearly stated
- The constraint to NOT change HTML structure is pragmatic

**What it misses:**

### BLOCKING GAPS (3):

1. **Ch6 Behavioral/Accessibility (deficiency #6):** Zero mention of `::selection`, `focus-visible`, `prefers-reduced-motion`, link hover, or table row hover. This is a complete channel absence. CD-006 scores 8/8 on accessibility; the remediation leaves the flagship at 0/8. **Fix: Add Phase 7 with ~15 lines of accessibility CSS.**

2. **Whitespace void mitigation (deficiency #9):** The remediation reduces one divider margin but does not target the 6 specific voids (210-276px) identified in audit data. After remediation, the page may still have 200px+ cream gaps at multiple scroll positions. **Fix: Add explicit void-reduction CSS or verification check with 120px maximum.**

3. **Multi-coherence verification (deficiency #14):** The remediation creates varied CSS across channels but provides no mechanism to verify they CO-VARY at zone boundaries. Without a cascade value table or per-transition channel count, the builder could apply phases independently and still fail SC-09 at 5 of 11 transitions. **Fix: Add cascade value table to Phase 6 and per-transition verification.**

### NON-BLOCKING GAPS (4):

4. **Body text color variation (deficiency #3):** Heading colors vary but paragraph text color stays at `#1A1A1A` throughout. Low priority but would strengthen Ch1+Ch2 coupling.

5. **Component variety (deficiency #5):** Structurally impossible to fix via CSS-only. Correctly scoped out. Note for future: next iteration needs HTML restructuring to add component types.

6. **Table header backgrounds (deficiency #11):** Quick win: `th { background-color: var(--color-zone-breathing); }`.

7. **Word-spacing (deficiency #8):** Tertiary Scale 5 property. Low priority.

---

## RECOMMENDED ADDITIONS TO REMEDIATION PROMPT

### Phase 7: ACCESSIBILITY MINIMUM (NEW -- ~15 lines)

```css
/* Selection styling */
::selection { background: rgba(232, 48, 37, 0.15); color: var(--color-text); }

/* Focus states */
a:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0s !important; }
}

/* Link interaction */
a { transition: color 150ms ease-out; }
a:hover { color: var(--color-text); }
```

### Phase 6 additions: VOID + COHERENCE CHECKS

```
11. **Void check:** Scroll the full page at 1440px. No gap of blank cream > 120px between content.
    If any gap > 120px: reduce section padding-bottom or divider margin.

12. **Cascade check:** Build value table:
    | Zone | Padding | Background | Border | Font-Size | Line-Height |
    |------|---------|------------|--------|-----------|-------------|
    Verify ALL columns shift in same direction at zone boundaries.

13. **Transition count:** At each section boundary, count channels shifting:
    bg + type + border + spacing + width. Count >= 3 at every boundary.
```

### Body text color (add to Phase 2):

```css
/* Body text color variation by zone */
.zone-s1 p, .zone-s2 p, .zone-s3 p { color: #2A2420; }
.zone-s5 p, .zone-s7 p, .zone-s8 p { color: #1E1B18; }
```

### Table header (add to Phase 5):

```css
/* Table header differentiation */
.table th { background-color: var(--color-zone-breathing); }
```

---

**END REMEDIATION GAP ANALYSIS**

**Total deficiencies checked:** 14
**Fully addressed:** 5 (Ch1, Ch3, Self-reference, Max-width, Scale 5 mostly)
**Partially addressed:** 5 (Ch4, Ch2, Ch5, Whitespace, Multi-coherence)
**Not addressed:** 3 (Ch6/Accessibility, Table headers, Blockquote)
**BLOCKING gaps:** 3 (Accessibility, Void mitigation, Multi-coherence verification)
**Non-blocking gaps:** 4 (Body text color, Component variety, Table headers, Word-spacing)
