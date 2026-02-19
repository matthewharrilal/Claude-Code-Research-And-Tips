# REPRODUCIBILITY TEST: Can We Reproduce This HTML From Understanding Alone?

**Agent:** reproducibility-test (Opus 4.6)
**Date:** 2026-02-18
**Task:** Test whether our pipeline understanding is deep enough to REPRODUCE the flagship output.
**Documents read (ALL fully):**
1. `ephemeral/flagship-experiment/07-intentionality.html` (2,145 lines -- complete)
2. `ephemeral/flagship-remediation/builder-changelog.md` (236 lines -- complete)
3. `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines -- complete)
4. `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (869 lines -- complete)
5. All 11 pipeline-analysis reports (01, 02, 04, 05, 06, 07, 08, 10, 11, 13 + 00-context)

---

## TEST 1: BACKWARD TRACING -- 10 Specific Changes Through Full Chain

For each change I trace: HTML change -> builder action -> remediation spec instruction -> remediation audit finding -> retrospective root cause -> master prompt failure. I rate each chain: FULL (all links present) / PARTIAL (some links break) / BROKEN (chain cannot be reconstructed).

### Change 1: Zone S5 background from #FAFAFA to #FAF8F5

```
HTML:    --color-zone-s5: #FAF8F5;  (line 124)
BUILDER: Changelog Phase 2, line 40: "#FAFAFA -> #FAF8F5, B-01 fix: cool gray replaced with warm near-white"
SPEC:    Phase 2, line 299: "--color-zone-s5: #FAFAFA; /* cool analytical */" -- SPEC PRESCRIBED the cool gray!
AUDIT:   Report 09 (multi-coherence-design) identified cool grays as soul violation
RETRO:   RC-7: Absence coherence + RC-4: Sub-perceptual variation
PROMPT:  U-08 (line 163): "No cool-toned grays (all neutrals warm-shifted)" -- CORRECT RULE, not operationalized
```

**CHAIN STATUS: PARTIAL.** The chain BREAKS at spec -> audit. The remediation spec Phase 2 ITSELF contained cool grays (#FAFAFA, #F8F8F8, #F0F0F0) that violated the soul constraint U-08. The BUILDER independently caught this contradiction and fixed it (B-01). The chain from spec backward is complete, but the spec -> HTML link required builder judgment NOT specified in the spec. This is a critical finding: the spec had an internal contradiction between its Phase 2 values and its "Do NOT change" soul appendix.

### Change 2: Divider margins reduced (SMOOTH 32->16, BRIDGE 48->24, BREATHING 64->24)

```
HTML:    .divider-smooth { margin: 16px 0; }  (line 594)
BUILDER: Changelog Phase 3, lines 59-63: "Replaced 3 existing divider rules with reduced-margin versions"
SPEC:    Phase 3, Step 3.2, lines 357-381: "Divider margins dramatically reduced" with stacking math
AUDIT:   Report 09: S-09 stacking loophole identified; Report 06: void quantification
RETRO:   RC-14: "Transition dividers compound into void" -- 9/9 auditors flagged
PROMPT:  S-09 (line 132-133): "Max spacing... 96px per-property. Total visual gap <= 96px"
         -- RULE DID NOT ACCOUNT FOR STACKING of divider margin + section padding
```

**CHAIN STATUS: FULL.** Complete traceability from HTML pixel value through to prompt failure. S-09's scope was too narrow ("per-property" ignored multi-element stacking), which caused voids that 9/9 PA auditors flagged, which the retrospective identified as RC-14, which the remediation audit quantified and solved with stacking arithmetic, which the spec operationalized with exact margin values, which the builder applied (with slight value adjustments: spec said SMOOTH 16px, builder applied 16px -- exact match).

### Change 3: Callout family CSS (4 variants replacing .component-block)

```
HTML:    .callout { border-left: 4px solid... }  (line 818)
         .callout--info, --gotcha, --tip, --essence  (lines 843-866)
BUILDER: Changelog Phase 3 + Phase 1, lines 75-88: "Callout family CSS with 4 variants"
SPEC:    Phase 1.5 (lines 196-227) + Phase 3.4 (lines 398-463): Full callout family spec
AUDIT:   Report 01: "3/26 library families used, should be 10+". Report 11: CSS-only caps at PA-05 2-3/4
RETRO:   RC-9: Component library invisible to builder. RC-1: No CSS-generative arrow
PROMPT:  C-10 (line 190): ">= 2 purpose-built components" -- NEVER MENTIONS component library
         Section E (line 749): "00-components-extract.md" -- EXISTS in file routing but zero guidance on USE
```

**CHAIN STATUS: FULL.** The prompt's C-10 asks for "purpose-built components" but paradoxically discourages library adoption by saying "not generic reuse." The retrospective identified this (RC-9: component library invisible), the audit found 3/26 families used, the spec designed a 4-variant callout family with exact CSS, and the builder applied it with warm-tone corrections (B-02, B-03).

### Change 4: Section-level left borders (6 of 12 sections)

```
HTML:    .zone-s2 .page-container { border-left: 3px solid var(--color-border); }  (line 784)
         + S5 4px primary, S7 3px text, S9 3px brown, S10 3px coral, S12 4px text
BUILDER: Changelog Phase 3, line 76: "6 zone-specific border-top rules" -- NOTE: changelog says "border-top"
         but HTML shows "border-left" -- the builder applied border-LEFT per spec, changelog description is inaccurate
SPEC:    Phase 3, Step 3.1, lines 316-355: "6 of 12 sections. Alternating presence creates rhythm."
AUDIT:   Report 05 (scale-channel-audit): Ch4 STRUCTURAL absent at section level
RETRO:   RC-11: "Ch4 absent at section level" -- zero structural borders in body sections
PROMPT:  SC-02 (line 251): ">= 5 of 7 channels actively used" -- Ch4 not mandatory
         F-01 in failures report: ABSENCE COHERENCE RULE (line 732) validated omitting Ch4
```

**CHAIN STATUS: FULL but with BUILDER INACCURACY.** The chain is complete conceptually. The builder-changelog line 76 says "border-top" but the actual HTML shows "border-left" matching the spec. This minor logging error does not affect traceability but reveals that the changelog is a self-report, not a programmatic diff.

### Change 5: Typography zone variation (17px/15px/16px by zone)

```
HTML:    .zone-s1 p, .zone-s2 p, .zone-s3 p { font-size: 17px; line-height: 1.85; ... }  (line 917)
         .zone-s5 p, .zone-s7 p, .zone-s8 p { font-size: 15px; line-height: 1.55; ... }  (line 926)
BUILDER: Changelog Phase 4, lines 93-106: Exact values applied with perceptual rationale
SPEC:    Phase 4, Steps 4.1-4.3, lines 522-614: Full per-zone typography with exact values
AUDIT:   Report 06 (CSS budget): 99 lines of sub-perceptual letter-spacing identified
RETRO:   RC-4: Sub-perceptual variation. 233 lines (23.7%) invisible CSS.
PROMPT:  C-02 (line 175): "Mechanism target: 12-14 deployed" -- incentivized deploying mechanisms
         regardless of visibility. ZERO perception thresholds anywhere in prompt.
```

**CHAIN STATUS: FULL.** The remediation spec's typography values are the REPLACEMENT for 99 lines of invisible typographic convergence gradient. The prompt created pressure to deploy mechanisms (C-02) without perception gates, the flagship produced invisible CSS, the retrospective identified it (RC-4), the audit quantified it (23.7%), and the spec replaced it with 3 zone groups using perceptible deltas (2px font-size, 0.30 line-height, 0.03em letter-spacing).

### Change 6: Skip link + main wrapper + ARIA labels

```
HTML:    <a href="#main-content" class="skip-link">Skip to main content</a>  (line 1148)
         <main id="main-content">  (line 1157)
         aria-label="Section 1: What the Research Set Out to Find"  (line 1171)
BUILDER: Changelog Phase 1, lines 147-167: All 17 verification checks passed
SPEC:    Phase 1.1-1.2, lines 141-178: Skip link + main + aria-label per section
AUDIT:   Report 01 summary (line 25): "Accessibility: 0 features" -- BLOCKING gap #1
RETRO:   Not directly identified as root cause (accessibility was a blind spot)
PROMPT:  ZERO accessibility rules. Not mentioned anywhere in 97 rules.
```

**CHAIN STATUS: PARTIAL.** The chain breaks at retro -> prompt. Accessibility was not identified as a root cause in the retrospective because it was a TOTAL BLIND SPOT -- neither the prompt nor the retrospective recognized its absence. The remediation audit (report 01) discovered it by comparing against CD-006's 8/8 accessibility features. This is a case where the remediation introduced something that was never in the prompt's ontology at all.

### Change 7: Grid layouts (tension-pair, sequence-grid, hypothesis-grid)

```
HTML:    .tension-pair { display: grid; grid-template-columns: 1fr 1fr; ... }  (line 873)
BUILDER: Changelog Phase 3, line 78: "Grid layouts: .tension-pair, .sequence-grid, .hypothesis-grid"
SPEC:    Phase 3.5, lines 465-495: Three grid definitions
         Phase 1.7-1.9, lines 229-275: HTML wrappers for grids
AUDIT:   Report 01 (line 29): "Layout variety: single-column only -> 3 grid layouts"
         Report 11: Single-column monotony is the dominant spatial signal
RETRO:   RC-12: "Single-column monotony" -- zero multi-column in 2,034 lines
PROMPT:  The word "grid" appears ZERO TIMES in Sections B1-B7 (per report 13)
```

**CHAIN STATUS: FULL.** The prompt never considered layout shape. The retrospective identified single-column monotony (RC-12). The audit confirmed zero layout variety. The spec designed 3 grids. The builder applied them. This is one of the clearest cases where the remediation ADDED capability the prompt's ontology lacked entirely.

### Change 8: Bridge-prose !important override (B-05)

```
HTML:    .bridge-prose { margin-bottom: 16px !important; }  (line 616)
BUILDER: Changelog Phase 3, lines 66-69: "!important justified: overrides inline style"
SPEC:    Phase 3.3, lines 383-394: "margin-bottom: 16px; /* was 32px */"
         NOTE: Spec says 16px without !important. Builder added !important because
         the actual HTML has inline style="margin-bottom:48px"
AUDIT:   Report 09: Void stacking analysis identified bridge-prose as contributor
RETRO:   RC-14: Transition divider stacking
PROMPT:  S-09 stacking loophole -- did not account for inline styles
```

**CHAIN STATUS: PARTIAL.** The spec prescribed the VALUE (16px) but not the METHOD (!important). The builder discovered independently that the HTML had inline styles overriding the stylesheet rule, requiring !important. The spec was INSUFFICIENT here -- it did not account for inline style specificity. This is another case where builder judgment filled a spec gap.

### Change 9: .section-meta -> .section-indicator (12 instances)

```
HTML:    <div class="section-indicator">Section 01...  (line 1174, + 11 more)
BUILDER: Changelog Phase 1, line 153: ".section-meta -> .section-indicator, 12/12 PASS"
SPEC:    Phase 1.6, lines 225-227: "Find every .section-meta, change to .section-indicator"
AUDIT:   Report 01 (line 28): Component library adoption -- section-meta is non-standard
RETRO:   RC-9: Component library invisible
PROMPT:  No mention of section-meta or section-indicator class naming
```

**CHAIN STATUS: FULL.** Clean 1:1 mapping through entire chain.

### Change 10: Cool callout backgrounds warm-substituted (B-02: #F5F8FA -> #FAF8F5)

```
HTML:    .callout--info { background-color: #FAF8F5; }  (line 845)
BUILDER: Changelog Phase 3, lines 83-88: "B-02 fix: cool blue tint replaced with warm cream"
SPEC:    Phase 3.4, line 432: ".callout--info { background-color: #F5F8FA; }" -- COOL VALUE IN SPEC!
AUDIT:   Not identified -- this is an INTERNAL spec contradiction
RETRO:   Not identified
PROMPT:  U-08: "No cool-toned grays" -- correct rule, not operationalized into callout colors
```

**CHAIN STATUS: BROKEN at spec level.** The remediation spec Phase 3.4 prescribed `#F5F8FA` for callout--info, which has a BLUE TINT (the F8 in the blue channel is higher than F5 in red). This violates U-08's warm-only mandate. The builder independently caught this and substituted `#FAF8F5` (warm cream). The chain from builder -> spec is CONTRADICTORY, not traceable. The spec inherited a contradiction it did not resolve.

---

### BACKWARD TRACING SUMMARY

| # | Change | Chain Status | Break Point |
|---|--------|-------------|-------------|
| 1 | Zone S5 color | PARTIAL | Spec prescribed value that violated its own soul constraint |
| 2 | Divider margins | FULL | Complete chain |
| 3 | Callout family | FULL | Complete chain |
| 4 | Section borders | FULL* | Minor changelog inaccuracy (border-top vs border-left) |
| 5 | Typography zones | FULL | Complete chain |
| 6 | Accessibility | PARTIAL | Retro never identified it; emerged in audit |
| 7 | Grid layouts | FULL | Complete chain |
| 8 | Bridge-prose !important | PARTIAL | Spec prescribed value but not method (!important) |
| 9 | Section-indicator | FULL | Complete chain |
| 10 | Callout warm fix | BROKEN | Spec had internal contradiction builder independently fixed |

**Score: 5 FULL, 1 FULL*, 3 PARTIAL, 1 BROKEN = 60% fully traceable**

**KEY FINDING:** The chain breaks for two systematic reasons:

1. **Spec-level contradictions (Changes 1, 10):** The remediation spec itself contained values that violated its own constraints. The builder resolved these through judgment, but the spec-to-HTML link is not traceable because the builder DEVIATED from the spec (correctly, but still deviated).

2. **Ontological gaps (Changes 6, 8):** Some changes required knowledge not in any document in the chain. Accessibility was never in the prompt's ontology. Inline style specificity was never in the spec's calculations. These represent knowledge that EXISTS IN THE BUILDER'S TRAINING, not in the pipeline's documentation.

---

## TEST 2: MINIMUM KNOWLEDGE SET

What does a fresh agent need to know to reproduce this output? Listed in order of necessity:

### Layer A: Non-Negotiable Identity (without these, wrong page entirely)
1. **Soul constraints:** border-radius: 0, box-shadow: none, no gradients, no opacity < 1, warm-only palette, no pure black/white
2. **Font trinity:** Instrument Serif (display), Inter (body), JetBrains Mono (code)
3. **Container width:** 960px max-width
4. **Color tokens:** primary red #E83025, background cream #FEF9F5, text near-black #1A1A1A, borders #E0D5C5 / #F0EBE3
5. **Spacing scale:** 4px base, max 96px, specific token values (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)

### Layer B: Structural Architecture (without these, wrong shape)
6. **12-section zone system:** Zone 1 (S1-S3) warm, Zone 2 (S4-S8) cool, Zone 3 (S9-S12) unified warm
7. **Dark header/footer bookends:** Dark background with red accent border, mirroring structure
8. **3 transition types:** SMOOTH (1px, small margin), BRIDGE (2px, medium margin, reframe prose), BREATHING (4px, medium margin, red, strongest cut)
9. **12 zone backgrounds:** Specific hex values per section with warm-only constraint
10. **Content mapping:** Research-synthesis content organized into 5 principles across 12 sections

### Layer C: Perceptual Engineering (without these, invisible CSS)
11. **Perception thresholds:** >= 10 RGB for color, >= 2px font-size, >= 0.2 line-height, >= 0.025em letter-spacing, >= 8px margin
12. **Typography zone variation:** Zone 1 (17px/1.85/0.02em), Zone 2 (15px/1.55/-0.01em), Zone 3 (16px/1.75/0)
13. **Spatial variation:** Zone 1 (64px padding, 20px para-margin), Zone 2 (32px, 12px), Zone 3 (48px, 18px)
14. **Void prevention:** No gap > 120px between content elements. Divider margins capped at 16-24px.
15. **Deallocation principle:** Delete any CSS that produces effects below perception thresholds

### Layer D: Component Architecture (without these, monotonous single-column)
16. **Callout family:** 4 variants (info/gotcha/tip/essence) with typed colors and semantic meanings
17. **Table treatments:** 7 types (compact/dense/featured/moderate/warning/light/findings) with border progression
18. **Grid layouts:** 3 specific grids (S7 tension-pair, S8 sequence-grid, S11 hypothesis-grid)
19. **Section borders:** 6 of 12 sections get left borders (alternating ON/OFF rhythm)
20. **Pullquote:** Width-varied (80%) with solid offset (outline, not box-shadow)

### Layer E: Accessibility + Responsive (without these, unprofessional)
21. **Accessibility:** Skip link, main wrapper, aria-labels on all sections, role attributes on semantic elements, focus-visible, reduced-motion, print styles
22. **Responsive:** 768px (grids collapse, tables scroll, padding reduces), 480px (further reductions)

### Layer F: Intentionality (without these, COMPETENT not DESIGNED)
23. **Self-reference:** Content describes its own form (e.g., density section references its own spacing)
24. **Pedagogical sequencing:** Orient (S1-S4) -> Deepen (S5-S8) -> Synthesize (S9-S12)
25. **Cognitive mode transitions:** Bridge prose names the cognitive shift at zone boundaries
26. **Bookending:** S1/S12 echo (same warmth, same 337-findings reference, same generous spacing)
27. **Meta-annotation:** Section indicators (section number + pattern + density zone)
28. **Metaphor:** "Assay laboratory" (raw samples -> refinement -> distilled output) encoded through 6 channels

### Layer G: Content Transformation (without these, research-speak not reader-speak)
29. **Content adaptation:** Research register -> reader-friendly register. No hedging, no provenance chains, no methodology notes
30. **Section headings:** Reader-facing ("Why Great Documentation Breathes"), not research-facing ("R3-R5 Density Synthesis")

### IS THIS CAPTURED IN OUR ANALYSIS?

| Layer | Captured? | Where |
|-------|-----------|-------|
| A (Identity) | YES | Report 01 (master-foundations), Report 11 (bidirectional P3) |
| B (Structure) | YES | Report 04 (remediation-building), Report 11 (bidirectional P2, P4) |
| C (Perception) | YES | Report 05 (css-philosophy), Report 08 (perception-model) |
| D (Components) | PARTIAL | Report 04 (extensions 2-4), Report 06 (html-restructuring). Grid layouts noted but not all 7 table treatments fully documented. |
| E (Accessibility) | PARTIAL | Report 06 (html-restructuring) notes accessibility. Report 13 (adversarial) notes it was a blind spot. But NO analysis provides the COMPLETE accessibility spec. |
| F (Intentionality) | NO | No analysis report covers intentionality dimensions. The 6 dimensions (self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation, provenance threading) are documented ONLY in the HTML inline comments. No pipeline-analysis report traces how intentionality was specified, applied, or evaluated. |
| G (Content) | PARTIAL | Report 13 (adversarial) notes content transformation. But the SPECIFIC content decisions (which research findings to include, how to adapt each section) are not analyzed. |

**CRITICAL GAP: Layer F (Intentionality) is the difference between PA-05 3/4 (COMPETENT) and 4/4 (DESIGNED), and it is ENTIRELY absent from our analysis.** The intentionality pass added ~57 HTML modifications and extensive inline comments documenting 6 dimensions of intentional design, yet none of the 11 analysis reports examines this layer. Our understanding stops at "how the page looks" and does not reach "why the page feels designed."

---

## TEST 3: DEVIATION ANALYSIS -- Spec Phase Instructions vs Builder Actions

### Phase 0: Deallocation
| Spec Instruction | Builder Action | Match? |
|-----------------|---------------|--------|
| Delete typographic convergence gradient (~99 lines) | Deleted ~107 lines (blocks 1-3 as one range) | MATCH (larger grouping, same intent) |
| Delete spatial compression micro-mods (~51 lines), keep 2 perceptible rules | Deleted ~14 lines, kept .zone-s5 and .zone-s7 component-block margins | MATCH |
| Delete per-zone border/heading color shifts (~62 lines) | Deleted ~32 + ~39 = ~71 lines | MATCH (slight count difference, full blocks) |
| Delete rhythmic micro-modulations (~8 lines) | Deleted ~13 lines | MINOR DEVIATION: Builder deleted more than spec identified |
| Delete paragraph breathing rule (~3 lines) | Not separately mentioned in changelog | CANNOT VERIFY: May be included in a larger block deletion |

**Phase 0 deviation rate: ~10% (1 minor deviation, 1 unverifiable)**

### Phase 1: HTML Restructuring
| Spec Instruction | Builder Action | Match? |
|-----------------|---------------|--------|
| Add skip link before header | Added (changelog line 183) | MATCH |
| Add main wrapper | Added (changelog line 184-185) | MATCH |
| Add aria-labels to 12 sections | Added 12/12 (changelog line 163) | MATCH |
| Add role="banner" to header | Added (changelog line 166) | MATCH |
| Add role="contentinfo" to footer | Added (changelog line 167) | MATCH |
| Add role="note" to 9 callouts | Added 9/9 (changelog line 161) | MATCH |
| Add role="separator" to 11 dividers | Added 11/11 (changelog line 162) | MATCH |
| Convert .component-block to .callout (9 instances) | Converted 9/9 with correct variant assignments | MATCH |
| Convert .section-meta to .section-indicator (12) | Converted 12/12 (changelog line 153) | MATCH |
| Add tension-pair wrappers (3 in S7) | Added 3/3 (changelog line 158) | MATCH |
| Add sequence-grid wrapper (S8) | Added 1/1 (changelog line 164) | MATCH |
| Add hypothesis-grid wrapper (S11) | Added 1/1 (changelog line 173) | MATCH |
| Unwrap .hypothesis-group-2 and -3 | Unwrapped (changelog line 73) | MATCH |

**Phase 1 deviation rate: 0% (perfect compliance)**

### Phase 2: Zone Background Colors
| Spec Instruction | Builder Action | Match? |
|-----------------|---------------|--------|
| Replace S5 with #FAFAFA | Replaced with #FAF8F5 | **JUDGMENT DEVIATION: B-01 warm fix** |
| Replace S7 with #F8F8F8 | Replaced with #F8F6F3 | **JUDGMENT DEVIATION: B-01 warm fix** |
| Replace S8 with #F0F0F0 | Replaced with #F2EFEA | **JUDGMENT DEVIATION: B-01 warm fix** |
| Replace S1-S4, S6, S9-S12 | Applied as specified | MATCH |
| Fix --color-border to #E0D5C5 | Applied (W-06 fix) | MATCH |
| Fix --color-border-subtle to #F0EBE3 | Applied (W-07 fix) | MATCH |

**Phase 2 deviation rate: 25% (3 of 12 colors deviated -- ALL justified by soul compliance)**

### Phase 3: Structural Borders + Callouts + Grids
| Spec Instruction | Builder Action | Match? |
|-----------------|---------------|--------|
| 6 section-level left borders | Applied 6/6 with exact colors and widths | MATCH |
| Divider margin reductions | Applied with slightly different values (spec: 16/24/24, builder: 16/24/24) | MATCH |
| Bridge-prose margin reduction to 16px | Applied with !important addition | **METHOD DEVIATION: Builder added !important not in spec** |
| Callout family CSS (4 variants) | Applied with B-02, B-03 warm fixes | **VALUE DEVIATION: 2 background colors warm-shifted** |
| 3 grid layouts | Applied exactly | MATCH |
| Table header backgrounds | Applied exactly | MATCH |

**Phase 3 deviation rate: ~15% (2 deviations, both justified)**

### Phases 4-7: Typography, Spatial, Element-Level, Accessibility
| Phase | Spec Instruction | Builder Action | Match? |
|-------|-----------------|---------------|--------|
| Phase 4 | Per-zone paragraph + heading typography | Applied exactly as specified | MATCH |
| Phase 4 | T9 coherence fix (.zone-s10 h2 weight/max-width) | Applied exactly | MATCH |
| Phase 5 | Paragraph margins by zone | Applied exactly | MATCH |
| Phase 5 | Section padding overrides | Applied exactly (with !important as spec suggests) | MATCH |
| Phase 6 | Inline code, links, table hover, section-indicator | Applied exactly | MATCH |
| Phase 7 | Selection, focus, skip-link, reduced-motion, print, responsive | Applied exactly per spec CSS blocks | MATCH |

**Phases 4-7 deviation rate: 0% (perfect compliance with copy-pasteable CSS)**

### OVERALL DEVIATION SUMMARY

| Phase | Total Instructions | Deviations | Rate | Type |
|-------|-------------------|------------|------|------|
| Phase 0 (Deallocation) | ~6 | 1 | ~17% | Quantity deviation (deleted more than specified) |
| Phase 1 (HTML) | 13 | 0 | 0% | Perfect compliance |
| Phase 2 (Backgrounds) | 14 | 3 | 21% | Soul-compliance judgment (all B-01 warm fixes) |
| Phase 3 (Borders etc.) | 6 | 2 | 33% | Method + soul-compliance judgment |
| Phase 4-7 (CSS recipe) | ~12 | 0 | 0% | Perfect compliance |
| **TOTAL** | **~51** | **6** | **12%** | **5 soul-judgment, 1 quantity** |

**KEY FINDING:** The builder deviated on 12% of instructions. ALL 5 substantive deviations were the same pattern: the spec prescribed values that violated the soul's warm-only palette, and the builder independently corrected them. This reveals a **systematic spec deficiency**: the remediation spec was not fully soul-audited. A fresh agent without strong soul awareness would have produced a page with cool grays and blue-tinted callouts.

**The spec's recipe was ~88% sufficient. The remaining 12% required builder JUDGMENT about soul compliance that the spec did not encode.** This is the gap between a recipe and operational knowledge.

---

## TEST 4: THE ACID TEST -- 50-Line Reproduction Specification

### Using ONLY insights from pipeline-analysis reports, here is the minimum reproduction specification:

```
REPRODUCTION SPEC: Research-Synthesis Flagship Page (50 lines)

IDENTITY (non-negotiable):
  border-radius: 0, box-shadow: none, no gradients, no opacity < 1
  Fonts: Instrument Serif / Inter / JetBrains Mono
  Colors: red #E83025, cream #FEF9F5, text #1A1A1A, border #E0D5C5
  Container: 960px. Warm-only palette. No #000 or #FFF.

STRUCTURE:
  12 sections in 3 zones: Orient(S1-S4), Deepen(S5-S8), Synthesize(S9-S12)
  Dark header + footer bookends with 3px red accent border
  3 transition types: SMOOTH(1px/16px), BRIDGE(2px/24px+prose), BREATHING(4px/24px)
  Zone backgrounds: warm variety(S1-S3) -> cool convergence(S4-S8) -> unified warm(S9-S12)

PERCEPTION GATES (every value must exceed):
  Color: >= 10 RGB between adjacent zones
  Font-size: >= 2px between zone groups (17/15/16px)
  Line-height: >= 0.2 between zone groups (1.85/1.55/1.75)
  Letter-spacing: >= 0.025em range (0.02em to -0.01em)
  Margin: >= 8px between zone groups (20/12/18px paragraph margins)
  NO CSS that produces effects below these thresholds

COMPONENTS:
  4-variant callout family: info(border) / gotcha(coral) / tip(green) / essence(amber)
  7 table treatments: compact / dense / featured(4px red) / moderate(3px) / warning(coral) / light(1px) / findings(3px top)
  3 grid layouts: tension-pair(S7), sequence-grid(S8), hypothesis-grid(S11)
  6/12 sections get left borders (S2/S5/S7/S9/S10/S12)
  Section indicators: mono, uppercase, section number + pattern + density

SPATIAL:
  Zone 1: 64px section padding, 20px paragraph margin, max-width 62ch
  Zone 2: 32px section padding, 12px paragraph margin, max-width 72ch
  Zone 3: 48px section padding, 18px paragraph margin, max-width 64ch
  Max gap between content: 120px (divider margins + section padding combined)

ACCESSIBILITY:
  Skip link, <main>, aria-labels on all sections, role attributes
  focus-visible, prefers-reduced-motion, print styles
  Responsive: 768px (grids collapse), 480px (further reductions)

CONTENT:
  Source: RESEARCH-SYNTHESIS.md. Rewrite to reader-friendly register.
  5 principles: density rhythm, axis choreography, component chemistry,
  whitespace/typography, combination tensions
  Headings: reader-facing, not research-facing
  Adapt: no hedging, no provenance chains, no methodology notes

INTENTIONALITY (DESIGNED, not just COMPETENT):
  Self-reference: content describes its own form (>= 3 instances)
  Pedagogical sequencing: Orient -> Deepen -> Synthesize arc
  Cognitive transitions: bridge prose at every zone boundary
  Bookending: S1/S12 echo in warmth, spacing, and 337-findings reference
  Meta-annotation: section-indicator labels on all 12 sections
  Metaphor: "Assay laboratory" encoded through chromatic, typographic,
  spatial, structural, density, and rhythmic channels
```

### COMPARISON: My 50-line spec vs the actual 1,025-line remediation spec

| Dimension | My 50-line spec | Remediation spec (1,025 lines) | GAP? |
|-----------|----------------|-------------------------------|------|
| Soul constraints | Covered (4 lines) | Covered (Appendix + Phase 8D) | NO GAP |
| Zone architecture | Covered (3 lines) | Covered (Phase 2, 25 lines) | **SPECIFICITY GAP: My spec lacks exact hex values per zone** |
| Perception thresholds | Covered (6 lines) | Covered (Appendix, 15 lines) | MINOR: Same principles, my spec lacks property-specific validation checks |
| Typography values | Covered (3 lines) | Covered (Phase 4, 92 lines) | **MASSIVE GAP: My spec gives zone-group values. Remediation gives per-zone per-element values with h2/h3 heading variants, T9 coherence fix, color per zone** |
| Component architecture | Covered (5 lines) | Covered (Phase 1 + Phase 3, ~200 lines) | **MASSIVE GAP: My spec names components. Remediation provides exact CSS + HTML restructuring instructions for every instance** |
| Grid layouts | Covered (1 line) | Covered (Phase 3.5 + Phase 1.7-1.9, ~70 lines) | **GAP: My spec names 3 grids. Remediation provides HTML wrapper instructions + CSS definitions** |
| Deallocation | NOT COVERED | Covered (Phase 0, 75 lines) | **TOTAL GAP: My spec says "no invisible CSS" but doesn't identify the 216 specific lines to delete** |
| Verification | NOT COVERED | Covered (Phase 8, 100 lines) | **TOTAL GAP: My spec has no verification protocol** |
| Root cause tracing | NOT COVERED | Covered (Section 6, 35 lines) | **GAP: Context for WHY changes are being made** |
| Execution order | NOT COVERED | Covered (Phase ordering, checkpoints, priority) | **GAP: No execution sequence, no checkpoints** |
| Builder deviations | NOT COVERED | ALSO NOT COVERED | SHARED GAP: Neither spec anticipates soul-violation corrections |

### THE GAP QUANTIFIED

My 50-line spec captures approximately:
- **100%** of the WHAT (what the page should look like)
- **70%** of the HOW (specific values and techniques)
- **20%** of the WHERE (exact line numbers, section-by-instance instructions)
- **0%** of the VERIFICATION (how to confirm it worked)
- **0%** of the DEALLOCATION (what to remove from existing artifact)

The 1,025-line remediation spec adds three capabilities my spec lacks entirely:
1. **Instance-level specificity:** Not "convert component-blocks to callouts" but "S3 line ~1180: change class to callout--info, S5 line ~1376: change class to callout--info, S7 lines ~1452-1496: 3 gotcha + 3 tip..."
2. **Operational sequence:** Not "add accessibility" but "Phase 7 AFTER Phase 6, add this CSS block, then verify with these 6 checks"
3. **Existing-artifact awareness:** The remediation spec knows what the current HTML looks like and prescribes changes relative to its current state. My spec assumes a fresh build.

**This reveals the fundamental difference:** My spec could produce a SIMILAR page from scratch. The remediation spec produces THIS EXACT page from THIS SPECIFIC starting artifact. The gap is between **generative instruction** (produce something like this) and **corrective instruction** (change these specific things in this specific file).

---

## TEST 5: CONTENT-SWAP TEST

If we swapped RESEARCH-SYNTHESIS.md for completely different content (e.g., API documentation for a REST service), which parts of our understanding still apply?

### CONTENT-INDEPENDENT (transfers fully)

| Knowledge | Why It Transfers |
|-----------|-----------------|
| Soul constraints (U-01 through U-10) | Identity rules are content-agnostic |
| Font trinity | Typography identity, not content-dependent |
| Container width (960px) | Layout constraint, content-agnostic |
| Color token palette | Brand identity, content-agnostic |
| Spacing scale | Rhythm infrastructure, content-agnostic |
| Perception thresholds | Human vision biology, content-agnostic |
| Void prevention principle | Spatial confidence is universal |
| Deallocation methodology | "Delete invisible CSS" applies to any artifact |
| Accessibility requirements | WCAG compliance is universal |
| Responsive breakpoints | Device support is content-agnostic |
| Binary rule > judgment rule | LLM behavioral insight, universal |
| Per-file builder ownership | Team management insight, universal |

### CONTENT-DEPENDENT (breaks on swap)

| Knowledge | Why It Breaks |
|-----------|--------------|
| **12-section zone system** | RESEARCH-SYNTHESIS has 5 principles that map to 12 sections. API docs would have endpoints, auth, errors -- completely different section structure. Might be 8 sections or 20. |
| **Zone background progression** | The warm -> cool -> warm arc mirrors the research narrative (explore -> analyze -> synthesize). API docs have no such narrative arc. Background colors would need re-derivation from content structure. |
| **Typography zone variation** | The 17px/15px/16px grouping matches the 3-zone research arc. API docs would need different zone groupings based on content density per section. |
| **Specific table treatments** | 7 table types (compact/featured/warning/light) match research content types. API docs would need endpoint tables, parameter tables, response tables -- different treatments. |
| **Callout variant assignments** | gotcha/tip mapping to tension/resolution pairs is content-specific. API docs would need error/success/deprecated callout semantics. |
| **Grid layout placements** | S7 tension-pair, S8 sequence-grid, S11 hypothesis-grid are all content-driven placements. API docs would need grids for parameter/response pairs, endpoint groupings. |
| **Metaphor** | "Assay laboratory" is derived from research content. API docs would derive a completely different metaphor (pipeline? gateway? contract?). |
| **Section headings and content** | Obviously 100% content-specific. |
| **Self-reference instances** | "This page demonstrates density rhythm" only works because the content IS ABOUT density rhythm. API docs would need different self-referential hooks. |
| **Bookending** | S1/S12 echo of "337 findings" is content-specific. |
| **Bridge prose** | Each cognitive transition references the specific content shift. |
| **Spatial proportions** | Section padding/margins tuned to research content word counts. API docs with different word counts per section need re-tuned proportions. |

### QUANTIFIED

| Category | Lines in HTML | Content-Independent | Content-Dependent |
|----------|--------------|--------------------|--------------------|
| CSS (lines 50-1136) | 1,086 | ~550 (soul, reset, tokens, base, accessibility, responsive) | ~536 (zone backgrounds, typography zones, spatial zones, table treatments, component variants, grid placements, borders) |
| HTML (lines 1137-2145) | 1,008 | ~50 (header/footer structure, skip link, main wrapper) | ~958 (all 12 sections, content, callout placements, table data, bridge prose) |
| **TOTAL** | **2,094** | **~600 (29%)** | **~1,494 (71%)** |

**FINDING: Only 29% of the page is content-independent.** The content-independent portion is the IDENTITY LAYER (soul, tokens, base styling, accessibility, responsive). Everything above the identity layer -- zone architecture, typography zones, component placements, grid layouts, metaphor encoding, intentionality dimensions -- is content-derived.

This means our understanding of HOW the pipeline works (perception gates, void prevention, binary rules, deallocation) transfers fully. But our understanding of WHAT was built (specific zone colors, typography values, component placements, metaphor encoding) is 71% content-specific and would need to be re-derived for different content.

**The reproducibility question splits into two:**
1. Can we reproduce the PROCESS? **YES** -- perception thresholds, deallocation methodology, zone architecture principles, component family design, grid layout strategy, accessibility spec, and intentionality framework all transfer.
2. Can we reproduce the PRODUCT? **Only 29% directly.** The remaining 71% requires re-running the content analysis -> metaphor derivation -> mechanism deployment -> spatial tuning pipeline with new content.

---

## MASTER FINDINGS

### Finding 1: The chain is 60% traceable, not 100%
Five of ten changes trace fully from HTML back to prompt failure. The breaks occur when: (a) the spec contradicted its own soul constraints, or (b) knowledge from the builder's training filled gaps the pipeline didn't document. Both are systematic, not random.

### Finding 2: Intentionality is the undocumented layer
Our 11 analysis reports cover identity, structure, perception, components, and process. None covers intentionality -- the 6 dimensions that separate COMPETENT from DESIGNED. This is our biggest analytical blind spot.

### Finding 3: The builder exercised 12% judgment
On 6 of ~51 instructions, the builder deviated from the spec. All 5 substantive deviations were warm-tone corrections to soul-violating values the spec prescribed. This means the spec was ~88% operational -- good enough for a Sonnet agent on 88% of instructions, but requiring Opus judgment for the soul-conflicting 12%.

### Finding 4: A 50-line spec captures WHAT but not HOW or WHERE
The minimum reproduction spec can describe the target page in 50 lines. But the 1,025-line remediation spec adds instance-level specificity, operational sequencing, and existing-artifact awareness that a generative spec cannot provide. The gap between understanding and operational knowledge is ~20:1 in line count.

### Finding 5: 71% of the page is content-dependent
Only 29% of the HTML output (identity layer) transfers to different content. Zone architecture, typography tuning, component placements, metaphor encoding, and intentionality dimensions are all derived from the specific research-synthesis content. The PROCESS is reproducible; the PRODUCT requires content-specific re-derivation.

### Finding 6: The spec had internal contradictions the builder silently fixed
The most concerning finding: the remediation spec prescribed cool-gray values (#FAFAFA, #F8F8F8, #F0F0F0) and cool-tinted callout backgrounds (#F5F8FA, #F5FAF5) that violated the soul constraint U-08 ("No cool-toned grays"). The builder independently fixed these. A less capable or less attentive agent would have produced a soul-violating page from a spec that was SUPPOSED to be the definitive execution document. This means our pipeline's quality assurance did not catch its own contradictions -- the builder was the last line of defense.

---

**END OF REPRODUCIBILITY TEST**

**Total document: ~450 lines. 5 tests completed. 6 master findings. Primary conclusion: our understanding is SUFFICIENT TO DESCRIBE what was built and WHY, but INSUFFICIENT TO REPRODUCE it without builder judgment (12% gap) and content-specific re-derivation (71% gap). The intentionality layer is entirely unanalyzed.**
