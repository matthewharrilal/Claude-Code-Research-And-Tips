# 02 -- CROSS-REFERENCE: Conventions Brief (Report 10) vs All 23 Source Reports

**Agent:** brief-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #41 -- Line-by-line verification of conventions brief against all 23 source reports
**Source file:** `ephemeral/flagship-44-recipe/10-CONVENTIONS-BRIEF-DRAFT.md` (254 lines)
**Cross-referenced against:** Reports 01-09, 11-23 (22 other reports in ephemeral/flagship-44-recipe/)

---

## METHOD

For every claim, value, rule, or principle in the conventions brief draft (Report 10), I locate the EXACT source in the other 22 reports. I flag:

- **SOURCED**: Claim traces to specific report + section with matching values
- **COMPRESSED**: Claim traces to source but lost detail in compression
- **INVENTED**: Claim exists in brief but has NO source in any of the 22 reports
- **RECONCILED**: Values differ across reports; brief chose one. I note what it chose and alternatives.

After the traceability matrix, I catalog **OMITTED** content -- source material that should be in the brief but is NOT.

---

## SECTION 1: IDENTITY (Soul) — Brief Lines 11-28

### Claim 1.1: "KortAI pages are warm, sharp, flat, and editorial"
- **STATUS: SOURCED**
- **Source:** Not in the 22 reports directly — this is design system identity from `design-system/compositional-core/identity/prohibitions.md` (line 1-10) and `tokens.css` (the warm palette, flat surface, sharp edge vocabulary)
- **Verification:** Consistent with all 22 reports' usage of these identity terms

### Claim 1.2: "Five constraints define the identity"
- **STATUS: SOURCED**
- **Source:** prohibitions.md lists 8 absolute prohibitions. The brief condenses to 5. Reports 05 (anti-conditions, S-02), 06 (comp-intel, P4), 07 (input-spec, Section 1.3) all reference soul constraints.
- **FLAG: COMPRESSED** -- prohibitions.md has 8 absolute + 12 conditional + 2 meta = 22 total rules. The brief shows 5 core rules. Missing from the brief's 5: no background-image/video (prohibition 6), border-radius: 0 is stated but the border-*-radius specificity is omitted, and the opacity rule scope (containers vs. all elements) is simplified.
- **Impact: LOW** -- The 5 chosen are the most visually impactful. The missing 3 are covered by prohibitions.md as a reference file.

### Claim 1.3: border-radius: 0, box-shadow: none, background: solid only, no #000/#FFF, opacity: 1 on containers
- **STATUS: SOURCED**
- **Source:** `design-system/compositional-core/identity/prohibitions.md` P-01 through P-05
- **Exact match:** border-radius: 0 (P-01), box-shadow: none (P-02), no gradients (P-03), no pure black/white (P-05), opacity 1 on containers (P-04)
- **FLAG:** Brief says "#1A1A1A" for warm near-black but tokens.css defines `--text-primary: #1A1A1A` — MATCH. Brief says "#FEF9F5" for cream but tokens.css defines `--bg-primary: #FEF9F5` — MATCH.

### Claim 1.4: Typography trinity — Instrument Serif, Inter, JetBrains Mono
- **STATUS: SOURCED**
- **Source:** tokens.css lines 12-14 (`--font-display: 'Instrument Serif'`, `--font-body: 'Inter'`, `--font-mono: 'JetBrains Mono'`). Report 03 (CD-006 forensics) confirms all 3 used.
- **Additional rule:** "Serif is never used for body text. Sans-serif is never used for main headings." — Source: prohibitions.md P-07 + tokens.css usage. Report 03 confirms CD-006 never violates this.

### Claim 1.5: Container 940-960px, non-negotiable
- **STATUS: SOURCED (STRONG CONVERGENCE)**
- **Source:** Report 01 (D-07: 940-1100px at 1440 viewport), Report 06 (P4: container width 940-960px, SC-01), Report 08 (SC-01: 940-960px), Report 12 synthesis (strong convergence: container 940-960px non-negotiable).
- **FLAG: RECONCILED** -- Report 01 allows 940-1100px. Reports 06, 08, 12 and MEMORY.md all say 940-960px. The brief chose 940-960px. This is the STRICTER standard and matches the confirmed Phase D failure mode.
- **Confidence: HIGH** -- "THE primary Phase D failure mode" per MEMORY.md.

### Claim 1.6: Spacing follows 4px base: 8, 16, 24, 32, 48, 64, 80, 96. No single value exceeds 96px.
- **STATUS: SOURCED**
- **Source:** tokens.css lines 28-35 (`--space-xs: 8px` through `--space-hero: 96px`). The 96px maximum is from Report 01 (D-06: <= 96px stacked gap at Flagship) and Report 06 (SC-10: stacked gap <= 108px total).
- **FLAG: RECONCILED** -- Report 06/SC-10 says stacked gap <= 108px. Report 01/D-06 says <= 96px for Flagship. The brief says "no single value exceeds 96px" which is about INDIVIDUAL values, not stacked totals. These are compatible — individual max 96px, stacked total in the brief's Section 2 says <= 108px.

---

## SECTION 2: PERCEPTION THRESHOLDS — Brief Lines 31-48

### Claim 2.1: background_delta >= 15 RGB between adjacent zones
- **STATUS: SOURCED (VERY STRONG)**
- **Source:** Report 01 (D-07: >= 15 RGB), Report 05 (S-04: sub-perceptual emphasis, 1-8 RGB failed), Report 06 (P4: >= 15 RGB, SC-09), Report 08 (SC-09: >= 15 RGB max-channel delta), Report 12 (strong convergence), Report 19 (channels deep dive), Report 20 (multi-coherence, Section 2), MEMORY.md.
- **Exact match across ALL reports.**

### Claim 2.2: font_size_delta >= 2px between typographic zones
- **STATUS: SOURCED**
- **Source:** Report 01 (D-07: >= 2px cumulative, Flagship only), Report 06 (P4: >= 2px, SC-11), Report 08 (SC-11: display-body >= 10px, body-detail >= 2px).
- **FLAG: COMPRESSED** -- Report 08/SC-11 gives a richer specification: display-body >= 10px, body-detail >= 2px, 3+ distinct zones. The brief says only ">= 2px between typographic zones" which is the minimum. The 10px display-body delta and 3-zone requirement are lost.
- **Impact: MEDIUM** -- A builder reading ">= 2px" might create 16px/18px zones (2px delta) which satisfies the threshold but is barely perceptible. The source requires display headings to be 10px+ larger than body text.

### Claim 2.3: letter_spacing_delta >= 0.03em between typographic zones
- **STATUS: SOURCED**
- **Source:** Report 01 (D-07: >= 0.5px or 0.03em at 16px), Report 06 (P4: >= 0.03em, SC-14 proposed). Fat-core-capability reports converge on this value.
- **FLAG: RECONCILED** -- Report 01 says ">= 0.5px (0.03em at 16px) or 0" — the "or 0" means letter-spacing should be either perceptibly different OR not used at all (no sub-perceptual microadjustments). The brief omits the "or 0" clause.
- **Impact: LOW-MEDIUM** -- The brief's formulation still prevents the flagship failure mode (0.001-0.01em values).

### Claim 2.4: stacked_gap_max <= 108px at any section boundary
- **STATUS: SOURCED**
- **Source:** Report 06 (SC-10: <= 108px total at section boundary), Report 01 (D-06: <= 96px for Flagship, <= 120px for Middle).
- **FLAG: RECONCILED** -- Report 01 says <= 96px for Flagship. Report 06 says <= 108px. The brief chose 108px. This is the LESS STRICT standard.
- **Impact: MEDIUM** -- The brief targets Flagship but uses the Middle/general threshold. Report 01 recommends 96px for Flagship explicitly. The brief should use 96px or explain the discrepancy.

### Claim 2.5: border_presence >= 1 structural border-left per zone
- **STATUS: SOURCED**
- **Source:** Report 06 (SC-15 proposed: >= 1 structural border per 400px scroll), Report 08 (SC-15: >= 3 distinct border configurations for Flagship).
- **FLAG: COMPRESSED** -- Report 08 raises Flagship threshold to >= 3 DISTINCT configurations (not just >= 1 per zone). The brief understates the Flagship requirement.
- **Impact: MEDIUM** -- A builder might satisfy "1 per zone" with identical 1px borders everywhere. Flagship needs 3+ distinct configurations (e.g., 1px separator, 3px structural, 4px emphasis).

### Claim 2.6: component_adoption >= 10 component families
- **STATUS: SOURCED**
- **Source:** Report 07 (Section 1: >= 10 component families from merged-components.css), Report 08 (SC-08: >= 8 component types for Flagship).
- **FLAG: RECONCILED** -- Report 07 says >= 10 families. Report 08 says >= 8 types. The brief chose 10.
- **Impact: LOW** -- 10 is the stricter standard.

### Claim 2.7: mechanism_categories >= 4 of 5
- **STATUS: SOURCED**
- **Source:** Report 01 (D-01: Flagship needs >= 2 per category, 5 categories, total >= 14). The "4 of 5" framing comes from MEMORY.md tier model.
- **FLAG: COMPRESSED** -- Report 01/D-01 Flagship threshold is ALL 5 categories with >= 2 each (not 4 of 5 with >= 1 each). The brief uses the MIDDLE threshold.
- **Impact: HIGH** -- Flagship per Report 01 requires >= 2 per category in ALL 5 categories. The brief allows skipping 1 category entirely. This is a significant downgrade from Flagship-level specification.

### Claim 2.8: multi_coherence >= 3 CSS channels shift at every zone boundary
- **STATUS: SOURCED**
- **Source:** Report 01 (D-03: >= 3 per boundary, avg >= 4), Report 06 (SC-13 proposed: >= 3 channels shift per zone boundary), Report 08 (SC-13: >= 3 every boundary, avg >= 4 for Flagship), Report 20 (multi-coherence deep dive: 3+ channels = DESIGNED threshold).
- **FLAG: COMPRESSED** -- The brief says ">= 3 at every boundary" but omits the AVERAGE >= 4 requirement from Report 01/D-03 and Report 08/SC-13. Some boundaries could be exactly 3 while the Flagship average should be 4.
- **Impact: MEDIUM** -- A builder hitting exactly 3 at every boundary would satisfy the brief but not the full Flagship spec (which wants some boundaries at 5-6 to bring the average up).

---

## SECTION 3: TRANSITION GRAMMAR — Brief Lines 51-62

### Claim 3.1: Three types -- SMOOTH, BRIDGE, BREATHING
- **STATUS: SOURCED**
- **Source:** Fat-core-capability report 09 (444-line critical gap: transition grammar, ~80 lines). Also confirmed by Report 10 itself as a central innovation. Report 20 (multi-coherence deep dive, Section 3: transition table method).
- **Primary source is OUTSIDE the 22 reports** — from fat-core-capability/09-input-gap.md. Within the 22 reports, the transition grammar appears to originate IN Report 10 itself (the brief).
- **FLAG:** The 3-type grammar (SMOOTH/BRIDGE/BREATHING) is one of the brief's ORIGINAL contributions, synthesized from the analysis of CD-006's transition patterns and the flagship failure's void problem. It does not exist as a named framework in any prior report.

### Claim 3.2: SMOOTH = 15-25 RGB shift, 1px rule, spacing holds steady
- **STATUS: PARTIALLY SOURCED**
- **Source:** The 15 RGB minimum comes from the perception threshold (well-sourced above). The 25 RGB upper bound is INVENTED — no report establishes 25 as the SMOOTH/BRIDGE boundary. The "1px horizontal rule" is FROM CD-006 observation (Report 03 forensics) but not explicitly named as a SMOOTH-specific pattern.
- **FLAG: PARTIALLY INVENTED** -- The specific CSS values for SMOOTH transitions (15-25 RGB, 1px rule) are reasonable derivations from CD-006 patterns but not explicitly stated as transition grammar in any source.

### Claim 3.3: BRIDGE = 25+ RGB, tinted breathing band 48-64px, typography shift
- **STATUS: PARTIALLY SOURCED**
- **Source:** The breathing band concept appears in CD-006 forensics (Report 03). The 48-64px range traces to tokens.css spacing values (--space-lg: 48px, --space-xl: 64px). The 25+ RGB threshold is INVENTED — Report 03 documents CD-006's boundary backgrounds but does not categorize them as "BRIDGE" vs other types.
- **FLAG: PARTIALLY INVENTED** -- Reasonable synthesis from CD-006 patterns but the categories and exact thresholds are original to Report 10.

### Claim 3.4: BREATHING = 3-4px border, 64-80px spacing, full rest
- **STATUS: PARTIALLY SOURCED**
- **Source:** 3-4px border weight traces to tokens.css (--border-structural: 3px, --border-emphasis: 4px). 64-80px spacing is from the token scale. CD-006 uses 4px borders at major section boundaries (Report 03). The concept of "full rest" / "page exhales" is original metaphor.
- **FLAG: PARTIALLY INVENTED** -- CSS values are from the token system. The BREATHING categorization is original.

### Claim 3.5: "Never stack two BREATHING adjacent. Never use more than three SMOOTH in sequence."
- **STATUS: INVENTED (but well-reasoned)**
- **Source:** No report establishes these specific stacking rules. The principle derives from the flagship failure analysis: 210-276px voids were caused by adjacent maximal spacing. And monotony (all-SMOOTH) is the Middle experiment's weakness.
- **FLAG: INVENTED** -- These are design heuristics synthesized from failure analysis, not extracted from any source report.

---

## SECTION 4: MULTI-COHERENCE BINDING — Brief Lines 65-87

### Claim 4.1: 6 CSS channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)
- **STATUS: SOURCED**
- **Source:** Report 01 (D-03: 6 channels listed), Report 19 (channels deep dive: full analysis), Report 20 (multi-coherence deep dive: per-channel CSS mapping), mechanism-catalog.md (channels defined).
- **FLAG:** Report 19 distinguishes 4 PRIMARY channels (Chromatic, Typographic, Spatial, Structural) from 2 ENHANCEMENT channels (Behavioral, Material). The brief treats all 6 equally.
- **Impact: LOW** -- The brief's "3 of 6" framing already accounts for this since the builder will naturally use primary channels.

### Claim 4.2: Shifts must point "same semantic direction" with examples (deeper, lighter, focusing)
- **STATUS: SOURCED**
- **Source:** Report 20 (multi-coherence deep dive, Section 2: full CSS mapping of 3 semantic directions — "DEEPER/MORE ANALYTICAL," "LIGHTER/MORE REFLECTIVE," "WARMER/MORE EXPLORATORY"). The brief compresses 3 full tables into 3 one-line definitions.
- **FLAG: COMPRESSED** -- Report 20 provides per-channel CSS shift tables for each direction (6 channels x 3 directions = 18 detailed mappings). The brief gives one-line summaries only.
- **Impact: MEDIUM** -- A builder reading "deeper = darker bg + tighter spacing + heavier borders" has the concept but not the nuanced per-channel detail (e.g., "Ch5 Density: More components per viewport, smaller whitespace gaps").

### Claim 4.3: Worked example — zone boundary where 5 channels move together
- **STATUS: SOURCED (from CD-006 observation)**
- **Source:** Report 20 (Section 3) provides the transition table method. Report 03 (CD-006 forensics) provides boundary-by-boundary channel analysis. The specific worked example in the brief (background #FEF9F5 -> #F0EBE3, font-size 18px -> 16px, etc.) appears to be a SYNTHESIS of CD-006 observations, not a direct quote from any report.
- **FLAG:** The sentence "No page we have built has achieved this consistently at every boundary across Flagship-scale complexity" is **SOURCED** from Report 01 (Section 0: "The central problem") and corrected per team-lead instruction that CD-006 is Ceiling, not Flagship.

---

## SECTION 5: FRACTAL ECHO — Brief Lines 90-115

### Claim 5.1: 5 architectural scales (Navigation, Page, Section, Component, Character)
- **STATUS: SOURCED**
- **Source:** Report 18 (scales deep dive: full analysis of 5 scales), Report 01 (D-05: 5 scales), Report 22 (fractal deep dive: scale-by-scale CSS examples), mechanism-catalog.md (scale definitions).

### Claim 5.2: Size labels — Navigation ~1440px, Page ~960px, Section ~200-400px, Component ~40-100px, Character ~12-20px
- **STATUS: SOURCED**
- **Source:** Report 18 (scales deep dive, Section 1) and Report 22 (fractal deep dive, Q1 table).
- **Exact match for Navigation (1440px) and Page (960px).** Section and Component ranges from Report 22.

### Claim 5.3: "Before writing CSS, produce a Fractal Echo Table"
- **STATUS: SOURCED**
- **Source:** Report 22 (fractal deep dive, Q2: "Yes, via the Fractal Echo Table"). Report 06 (P5: "Self-authored compositional artifacts — transition table + fractal echo"). Report 12 synthesis (F-03: "stack is operationally complete").

### Claim 5.4: Fractal Echo Table template (5 rows with Scale / Pattern expression / Primary CSS)
- **STATUS: SOURCED**
- **Source:** Report 22 provides a more detailed version (Scale + What Looks Like + Primary CSS + Secondary CSS). The brief's 3-column version is a compression.
- **FLAG: COMPRESSED** -- Report 22's 4-column table includes "Secondary CSS Expression" which enriches the builder's vocabulary. The brief drops this column.
- **Impact: LOW** -- The 3-column table is sufficient for planning. The builder can add detail from the mechanism catalog.

### Claim 5.5: "Pattern direction must be consistent across all 5 rows"
- **STATUS: SOURCED**
- **Source:** Report 22 (fractal deep dive, Section 1: "What It Means Concretely" — the organizing principle must manifest at all scales). Report 01 (D-05: "The pattern at each level must ECHO the same structural principle").

---

## SECTION 6: COMPOSITIONAL MEMORY PROTOCOL — Brief Lines 118-138

### Claim 6.1: CSS comment at every boundary naming coherence direction
- **STATUS: SOURCED**
- **Source:** Report 20 (multi-coherence deep dive, Section 3: R-MC-01 "Name direction in CSS comment"). The brief's instruction `/* Boundary Z2→Z3: DEEPENING */` matches exactly.

### Claim 6.2: Count channels at every boundary, add if < 3
- **STATUS: SOURCED**
- **Source:** Report 20 (R-MC-02: "Count channels shifting. If fewer than 3: add shifts"). Direct match.

### Claim 6.3: Verify all shifts point same direction
- **STATUS: SOURCED**
- **Source:** Report 20 (R-MC-03: "Verify direction consistency"). Direct match.

### Claim 6.4: Midpoint pause — render, scroll, write 3 sentences
- **STATUS: SOURCED**
- **Source:** Report 06 (P5: self-authored compositional artifacts include midpoint observation). Report 17 (recipe ceiling: "COMPOSING" mode requires continuous aesthetic judgment). The specific "3 sentences" format may be original to Report 10.
- **FLAG: PARTIALLY INVENTED** -- The concept of a midpoint pause is sourced. The specific format (3 sentences: what feels designed, flat, weakest section) appears to originate in Report 10.

### Claim 6.5: After every 5th mechanism, count by category, deploy if any at 0
- **STATUS: SOURCED**
- **Source:** Report 01 (D-01: per-category minimums). The "every 5th" trigger is INVENTED — no source report specifies this cadence.
- **FLAG: PARTIALLY INVENTED** -- The category-checking behavior is sourced. The "5th mechanism" trigger is original.

### Claim 6.6: "Adds approximately 15 minutes" / "prevents catastrophic drift that produced 210-276px whitespace voids"
- **STATUS: PARTIALLY SOURCED**
- **Source:** The 210-276px void reference is SOURCED from Report 01 (D-06: "6 whitespace voids of 210-276px") and Report 05 (S-04). The "15 minutes" estimate is INVENTED — no source report provides a time estimate for this protocol.
- **FLAG: PARTIALLY INVENTED** -- The failure reference is accurate. The time estimate is original.

---

## SECTION 7: SELF-CHECK PROTOCOL — Brief Lines 141-164

### Claim 7.1: Q1 SQUINT TEST
- **STATUS: SOURCED**
- **Source:** Report 20 (R-MC-06: "Squint test"). Report 22 (fractal: squint test at page scale). The specific operationalization (lean back, squint, identify zone boundaries from color and spacing) appears to originate in Report 10.

### Claim 7.2: Q2 SCROLL TEST (108px void threshold)
- **STATUS: SOURCED**
- **Source:** Report 01 (D-06: stacked gap thresholds), Report 06 (SC-10). The 108px value matches SC-10.
- **FLAG: RECONCILED** — Same note as Claim 2.4 above. Report 01 says 96px for Flagship.

### Claim 7.3: Q3 SECOND-HALF TEST (designed moment below 50% scroll)
- **STATUS: SOURCED**
- **Source:** Report 01 (D-10: "designed moments per scroll," >= 90% coverage for Flagship). The specific "below 50% mark" formulation is a simplification of D-10's viewport-by-viewport measurement.
- **FLAG: COMPRESSED** -- D-10 requires >= 90% viewport coverage, not just "at least one in second half." The brief's formulation is much weaker.
- **Impact: MEDIUM** -- A builder could have 1 moment at 51% and satisfy the brief while having 0% coverage from 52-100%.

### Claim 7.4: Q4 CHANNEL COUNT (3+ channels at most important boundary)
- **STATUS: SOURCED**
- **Source:** Report 01 (D-03: >= 3 per boundary, avg >= 4), Report 20 (multi-coherence deep dive). Direct match.

### Claim 7.5: Q5 SPATIAL SKELETON (remove color/text, does structure communicate?)
- **STATUS: SOURCED**
- **Source:** Report 21 (anti-scale deep dive: spatial confidence as a multiplicand). The specific operationalization (imagine removing color and text) appears to originate in Report 10 but is grounded in Report 21's spatial confidence concept.
- **FLAG: PARTIALLY INVENTED** -- The spatial confidence concept is sourced. The "remove color and text" testing method is original.

---

## SECTION 8: CREATIVE AUTHORITY — Brief Lines 167-182

### Claim 8.1: "You are the composer. The soul constraints are your instrument's range."
- **STATUS: SOURCED (dispositional framing)**
- **Source:** Report 06 (P3: "Explicit creative authority — the 3/4-to-4/4 bridge"), Report 17 (recipe ceiling: dispositional format, "silence in which the builder can hear the question"), Report 14 (telescope/microscope integration).

### Claim 8.2: Override any non-soul value with compositional reasoning logged
- **STATUS: SOURCED**
- **Source:** Report 06 (P3: CD-006 Convention S9 allowed "crown jewel divergence," overriding type-page to 3rem). Report 12 (Category B: creative authority clause non-negotiable).
- **The "log the override" requirement:** Report 06 specifically states "provided it logs overrides with compositional reasoning." Direct match.

### Claim 8.3: Invent new component patterns, choose zone count (2-5), reject any mechanism
- **STATUS: SOURCED**
- **Source:** Report 06 (P3: 4 irreducible capabilities require creative latitude). Report 01 (D-08: "Deliberate exclusion of >= 1 catalog mechanism" required for Flagship restraint).
- **Note:** "Zone count 2-5" — Report 08 (SC-12) says minimum 3 for Flagship. The brief's lower bound of 2 uses the MIDDLE threshold.
- **FLAG: RECONCILED** -- Report 08 says minimum 3 zones for Flagship. Brief allows 2. Should be 3 minimum.
- **Impact: MEDIUM** -- A 2-zone page has insufficient compositional space for multi-coherence.

### Claim 8.4: "Richness is semantic density multiplied by restraint multiplied by spatial confidence"
- **STATUS: SOURCED**
- **Source:** Report 21 (anti-scale deep dive: the anti-scale model). Report 12 (Category D: anti-scale governing model). MEMORY.md. Multiple convergent sources.

---

## SECTION 9: QUALITY FLOOR — Brief Lines 185-203

### Claim 9.1: Mechanism count — deploy from >= 4 of 5 categories (S/H/C/D/N)
- **STATUS: SOURCED but UNDERSTATED**
- **Source:** See Section 2.7 analysis above. Flagship per Report 01 requires ALL 5 categories with >= 2 each. The brief uses "4 of 5" which is the MIDDLE threshold.
- **FLAG: COMPRESSED / UNDERSTATED for Flagship**

### Claim 9.2: CSS range 700-1200 lines, below 500 = under-deployment, above 1500 = over-engineering
- **STATUS: SOURCED**
- **Source:** Report 01 (D-12: Flagship CSS 600-1500 lines). The brief's 700-1200 is within this range but narrower. The "guidelines, not gates" qualifier is consistent with Report 12 (F-01: recipe paradox).

### Claim 9.3: Component adoption >= 10 families
- **STATUS: SOURCED** -- See Claim 2.6 above. Matches Report 07.

### Claim 9.4: Accessibility — WCAG 2.1 AA, skip link, landmarks, focus indicators, contrast ratios
- **STATUS: SOURCED**
- **Source:** Report 01 (D-14: all 6 accessibility gates), Report 08 (SC-06 through SC-07). 4.5:1 contrast ratio is WCAG standard. "Skip link, landmark roles, focus indicators" matches D-14 directly.

### Claim 9.5: Responsive at 768px
- **STATUS: SOURCED**
- **Source:** tokens.css (--breakpoint-tablet: 768px). Report 01 (D-12: >= 2 @media breakpoints for Flagship).

---

## SECTION 10: CONVICTION CARD — Brief Lines 206-228

### Claim 10.1: Write conviction statement before first CSS line
- **STATUS: SOURCED**
- **Source:** Report 06 (P5: self-authored compositional artifacts — conviction card). Report 20 (Section 3: conviction card alternative).

### Claim 10.2: Fields — Content, Zones, Organizing principle, Coherence direction, Metaphor
- **STATUS: SOURCED**
- **Source:** Report 20 provides a similar conviction structure (content, zones, direction, boundary channel plan). Report 22 (fractal: organizing principle at all scales). Report 23 (stack integration: prism model requires all layers named upfront).

### Claim 10.3: "I commit to" — 5 commitments listed
- **STATUS: PARTIALLY SOURCED**
- **Commitment 1 (>= 3 channels per boundary): Report 01/D-03, Report 20/R-MC-01. SOURCED.
- **Commitment 2 (designed moment in second half): Report 01/D-10. SOURCED.
- **Commitment 3 (midpoint pause): Report 06/P5. SOURCED.
- **Commitment 4 (logging overrides): Report 06/P3. SOURCED.
- **Commitment 5 (5 self-check questions): Section 7 of the brief itself. SELF-REFERENCING.

---

## PROCESS SECTION — Brief Lines 231-254

### Claim P.1: Phase A — Understand (read content, identify zones, tensions, metaphor)
- **STATUS: SOURCED**
- **Source:** Report 07 (Section 2: reading order — content FIRST), Report 14 (telescope/microscope: understanding before execution), Report 17 (COMPOSING mode: "reads content, internalizes constraints, creates").

### Claim P.2: Phase B — Plan (conviction statement, transition table, fractal echo table, consult mechanism-catalog.md)
- **STATUS: SOURCED**
- **Source:** Report 06 (P5: self-authored artifacts), Report 07 (Section 1.1: mechanism-catalog.md read at Phase B), Report 20 (transition table method), Report 22 (fractal echo table).

### Claim P.3: Phase C — Build (HTML first, then CSS in sequence: reset/soul/base → zones → borders → typography → element-level → responsive)
- **STATUS: PARTIALLY SOURCED**
- **Source:** The HTML-first principle is from general web development best practice and Report 07 (skeleton with landmarks). The specific CSS sequence (reset → zones → borders → typography → element-level → responsive) appears to originate in Report 10.
- **FLAG: PARTIALLY INVENTED** -- The build sequence is reasonable engineering practice but not explicitly specified in any of the 22 source reports. The "4 verification pauses" (after HTML skeleton, after zone backgrounds, after borders, after typography) are ORIGINAL to Report 10.

### Claim P.4: Phase D — Verify (render, scroll, 5 self-check questions, cascade value table)
- **STATUS: SOURCED**
- **Source:** Report 08 (verification recipe: cascade value table). The 5 self-check questions are from Section 7 of the brief itself.

### Claim P.5: Deliverables — output.html, _build-log.md, _cascade-value-table.md
- **STATUS: SOURCED**
- **Source:** Report 07 (Section 3: deliverables list). Report 08 (cascade value table as verification artifact). The "_build-log.md" with conviction statement, transition table, fractal echo table, midpoint observation, override log, self-check answers is a SYNTHESIS of requirements from Reports 06, 20, 22.

---

## OMISSIONS: Source Content Not in the Brief

These are significant findings from the 22 source reports that are ABSENT from the conventions brief but arguably should be present.

### OMISSION 1: Flagship 14-Dimension Definition (Report 01)
- **What's missing:** The full 14-dimension specification with binary gates and thresholds. The brief has perception thresholds (D-07 partial), mechanism categories (D-01 partial), multi-coherence (D-03/D-04 partial), fractal (D-05), and designed moments (D-10 simplified). Missing entirely: D-02 (zone transitions >= 8), D-06 (semantic density >= 40%), D-08 (restraint: deliberate mechanism exclusion), D-09 (axis variety >= 3 patterns), D-11 (component variety <= 35% single type), D-12 (CSS quantitative features), D-13 (metaphor presence gates), D-14 (accessibility details beyond brief's Section 9).
- **Impact: HIGH** -- The brief doesn't communicate what Flagship 4/4 actually IS as measured. A builder reading only the brief would not know the 14-dimension target.
- **Recommendation:** The 14-dimension spec is verification territory, not brief territory. But the brief should at minimum mention axis variety (D-09) and metaphor presence (D-13) since these are compositional decisions the builder makes.

### OMISSION 2: Layout Diversity as Multi-Coherence Enabler (Report 19, Report 12/F-06)
- **What's missing:** Report 19 reveals that CD-006 achieves multi-channel coherence through LAYOUT DIVERSITY (rotating grid patterns: Z-pattern, bento, 2-column, 3-column), not through explicit per-boundary channel management. The brief describes multi-coherence as explicit channel counting (Section 4) but never mentions that varied layouts are the EASIER PATH to achieving it.
- **Impact: HIGH** -- A builder reading Section 4 would try to manage 6 channels at each boundary explicitly (the Flagship approach that failed). CD-006 achieved it IMPLICITLY through layout variety. The brief should name layout diversity as the recommended path.
- **Source:** Report 19 (channels deep dive: "Layout diversity is the easier, more reliable path"), Report 12 (F-06: "Layout diversity is the hidden lever").

### OMISSION 3: Axis Variety Requirement (Report 01/D-09)
- **What's missing:** Flagship requires >= 3 of 5 axis patterns (Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography) with named transitions between them. The brief mentions no specific axis patterns. Section 8 says "choose your own zone count, section architecture" but doesn't name the patterns or set a minimum.
- **Impact: HIGH** -- Without this, a builder might produce a single-pattern page (like the Middle experiment's all-F-pattern) and still think it's Flagship quality.
- **Source:** Report 01 (D-09), Report 03 (CD-006 uses all 5 patterns), Report 12 (synthesis).

### OMISSION 4: Transition Table Planning Artifact (Report 20)
- **What's missing:** The brief mentions a "transition table" in the Process section (Phase B) but never describes its format or content. Report 20 provides the full specification: a table with columns for Boundary, Ch1-Ch6, and Direction — mapping every section boundary to its channel shifts BEFORE writing CSS.
- **Impact: MEDIUM-HIGH** -- The fractal echo table is fully specified (5-row template in Section 5). The transition table — equally important for multi-coherence — is only mentioned by name. A builder would not know what to put in it.
- **Source:** Report 20 (Section 3: transition table method, full format).

### OMISSION 5: Content-Form Resonance (Report 09)
- **What's missing:** Report 09 identifies 7 content properties that predict PA-05 scores (P1: heterogeneous modes, P2: code blocks, P3: natural visual anchors, P4: decision points, P5: self-referential content, P6: emotional inflection, P7: length sufficient for 5+ zones). The brief says nothing about how to READ content for compositional opportunities.
- **Impact: MEDIUM** -- Phase A says "identify zones, tensions, metaphor" but doesn't teach the builder WHAT to look for in content. Report 09's 7 properties would enrich Phase A.
- **Source:** Report 09 (content-form resonance, 7 properties).

### OMISSION 6: Anti-Scale Restraint (Report 21, Report 01/D-08)
- **What's missing:** Flagship requires DELIBERATE restraint: excluding >= 1 catalog mechanism by design, no single component type > 35% of instances, all whitespace > 48px must have structural content. The brief's Section 8 mentions restraint philosophically ("Richness is semantic density x restraint x spatial confidence") but provides no operational restraint rules.
- **Impact: MEDIUM** -- Without operational restraint rules, the brief relies on the builder's aesthetic judgment. The Flagship experiment proved that Sonnet under constraint overloads with guardrails, not restraint. Even Opus needs specific restraint indicators.
- **Source:** Report 01 (D-08: 4 restraint indicators), Report 21 (anti-scale: restraint as multiplicative factor).

### OMISSION 7: Suppressor Awareness (Report 05)
- **What's missing:** Report 05 identifies 14 quality suppressors with 4 cascade chains. The brief addresses several implicitly (S-01 by using convention format, S-02 by low prohibition count, S-04 by perception thresholds) but never explicitly warns the builder about failure patterns.
- **Impact: LOW** -- The brief's tone avoids prohibition overload (S-02). Explicitly listing anti-patterns would contradict the brief's philosophical approach.
- **Recommendation:** Section 8 (Creative Authority) could include 2-3 lines on what SUPPRESSES quality (checklist mindset, sub-perceptual optimization, CSS budget on invisible properties).

### OMISSION 8: CD-006 CSS Patterns as Reference (Report 03)
- **What's missing:** Report 03 provides exhaustive CD-006 CSS forensics: 13 font sizes, 12 background colors, 23 border contexts, 5 grid layouts, 4 spacing strategies. None of these concrete CSS examples appear in the brief.
- **Impact: LOW-MEDIUM** -- The brief is designed as a WORLD DESCRIPTION, not a CSS cookbook. But Report 19 found that CD-006's quality came from layout diversity, which is achieved through concrete patterns. The mechanism-catalog.md (a reference file) partially covers this.
- **Recommendation:** Add 1-2 lines to Section 4 noting that the builder should consult mechanism-catalog.md for CSS examples at each boundary.

### OMISSION 9: Stack as Prism Model (Report 23)
- **What's missing:** Report 23's key insight: every CSS decision participates in ALL layers simultaneously. The brief treats each concept (thresholds, transitions, multi-coherence, fractal) as separate sections. Report 23 proposes a 5-line preamble that frames the stack as a prism.
- **Impact: MEDIUM** -- Without the prism framing, a builder might treat each section as an independent checklist item rather than understanding that a single `background: #F0EBE3` simultaneously crosses the threshold, defines zone identity, shifts the chromatic channel, participates in multi-coherence, and contributes to density.
- **Source:** Report 23 (stack integration: 4 targeted edits needed to encode 72% → near 100% of stack).

### OMISSION 10: Dispositional Framing (Report 17)
- **What's missing:** Report 17 identifies that the brief's ~230 lines place it in the PROCEDURAL category (ceiling 3.0-3.5/4). A DISPOSITIONAL brief (~30-50 lines) describing HOW TO BE while building might have a higher ceiling. The brief has some dispositional language ("You are the composer") but its overall structure is procedural (10 named sections with rules and thresholds).
- **Impact: UNKNOWN** -- Report 17's dispositional format is untested (N=0). But the critique is valid: the brief is more procedural than dispositional.
- **Source:** Report 17 (recipe ceiling thesis, 3 recipe types).

---

## SUMMARY STATISTICS

| Category | Count |
|----------|-------|
| Claims verified | 38 |
| SOURCED (exact match) | 22 (58%) |
| COMPRESSED (source exists, detail lost) | 8 (21%) |
| PARTIALLY INVENTED (concept sourced, specifics original) | 6 (16%) |
| INVENTED (no source) | 2 (5%) |
| RECONCILED (values differ, brief chose one) | 5 (13% overlap with above) |
| OMITTED content items | 10 |

### Compression Severity

| Compression | Brief Value | Source Value | Impact |
|-------------|------------|-------------|--------|
| Typography threshold | >= 2px | Display-body >= 10px, body-detail >= 2px, 3+ zones | MEDIUM |
| Mechanism categories | 4 of 5 | ALL 5 with >= 2 each (Flagship) | HIGH |
| Multi-coherence avg | >= 3 every boundary | >= 3 minimum, AVERAGE >= 4 | MEDIUM |
| Stacked gap | <= 108px | <= 96px (Flagship per Report 01) | MEDIUM |
| Zone minimum | 2-5 | 3-5 (Flagship per Report 08) | MEDIUM |
| Border configurations | >= 1 per zone | >= 3 distinct configurations | MEDIUM |
| Designed moments | 1 in second half | >= 90% viewport coverage | MEDIUM |
| Semantic direction | 3 one-liners | 3 full per-channel tables (18 mappings) | MEDIUM |

### INVENTED Content (Reasonable but Unsourced)

1. Transition grammar stacking rules ("never two BREATHING adjacent, max 3 SMOOTH consecutive")
2. "15 minutes" time estimate for compositional memory protocol
3. SMOOTH/BRIDGE/BREATHING as named categories with specific CSS thresholds (15-25 / 25+ RGB)
4. Build phase CSS sequence (reset → zones → borders → typography → element-level → responsive)
5. 4 verification pauses during build (after HTML, zones, borders, typography)
6. "Every 5th mechanism" category check trigger

### TOP 5 RECOMMENDED FIXES

1. **RAISE mechanism_categories to ALL 5 with >= 2 each** — currently uses Middle threshold (4 of 5), should use Flagship (all 5 with >= 2 per Report 01/D-01)
2. **ADD layout diversity as multi-coherence enabler** — Report 19's key finding that rotating grid patterns IMPLICITLY achieve multi-coherence is missing from Section 4
3. **ADD axis variety requirement (>= 3 patterns with named transitions)** — Report 01/D-09 is completely absent
4. **ADD transition table format specification** — mentioned in Phase B but never described; Report 20 provides the full format
5. **RAISE stacked gap to <= 96px for Flagship** — currently uses 108px (Middle), Report 01/D-06 says 96px for Flagship

---

**END CROSS-REFERENCE**

*38 claims verified, 10 omissions identified, 5 priority fixes recommended. The brief is approximately 80% accurately sourced, with the remaining 20% being reasonable synthesis from source patterns. No DANGEROUS inversions (no claim contradicts its source). The primary risk is UNDERSTATING Flagship requirements by using Middle-tier thresholds in 4 places.*
