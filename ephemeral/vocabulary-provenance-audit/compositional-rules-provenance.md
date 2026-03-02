# Compositional Rules Provenance Trace

**File under audit:** `design-system/compositional-core/grammar/compositional-rules.md` (528 lines, 41 rules across 11 categories)
**Date:** 2026-03-01
**Auditor:** rules-tracer (zero prior context)
**Method:** For each rule category, trace provenance claims back to (a) pattern/provenance files, (b) actual exploration HTML files, (c) determine if the rule is an observed pattern or an imposed constraint.

---

## Executive Summary

Of 41 rules in compositional-rules.md:
- **GENUINE OBSERVED PATTERNS:** 19 rules (46%) -- actually visible in multiple explorations
- **PARTIALLY OBSERVED, THEN OVER-SPECIFIED:** 12 rules (29%) -- real pattern observed, but the file adds numerical precision or constraints not in evidence
- **PIPELINE-ERA COMPLIANCE ARTIFACTS:** 5 rules (12%) -- imposed by the extraction process or inherited from pipeline infrastructure, not directly visible in explorations
- **UNDER-EVIDENCED:** 5 rules (12%) -- the file itself flags these as "needs more evidence"

**Key finding:** The STRUCTURAL rules (zone nesting, 2-zone DNA, responsive collapse) are the most genuine -- they describe what explorations actually do. The QUANTITATIVE rules (max 3 dense sections, max 2-3 zone changes per viewport, max 5-6 patterns per page) are the most problematic -- they impose numerical limits that were inferred from a small sample, not validated.

---

## Category-by-Category Trace

### 1. Zone Nesting Rules (N1-N4) -- GENUINE with caveats

**Rule N1: Callouts Nest Inside Zone Wrappers (NOT Other Callouts)**
- **Provenance claim:** DD-003, OD-004, CD-006
- **Verification against HTML:** CONFIRMED. In DD-003, `.density-island` contains `.callout-tip` and `.callout-info` (lines 642-647, 713-719). No file in the 18 explorations has a callout inside a callout. This is genuinely observed.
- **Pattern vs. imposed:** GENUINE PATTERN. No exploration has callout nesting. The rule accurately describes what exists.
- **But:** The PROHIBITION ("NEVER nest callouts") is an INFERENCE. We know they don't -- but we don't know if a deliberate nesting would be harmful. The rule jumps from observation to prohibition without testing the alternative.

**Rule N2: Code Blocks Can Appear Inside Callouts AND Independently**
- **Verification:** CONFIRMED in DD-003 (code inside density islands, line 622-640) and DD-006 (code blocks as independent character-scale demos, lines 949-990).
- **Pattern vs. imposed:** GENUINE PATTERN.

**Rule N3: Decision Matrices Can Contain Lists (NOT Callouts)**
- **Verification:** CONFIRMED in DD-003. Decision matrix (lines 649-670) contains rows, not callouts.
- **Pattern vs. imposed:** GENUINE PATTERN, but NARROW EVIDENCE -- only 1-2 explorations even use decision matrices. The prohibition ("NOT Callouts") is inferred from absence.

**Rule N4: Maximum Component Nesting Depth = 2**
- **Verification:** CONFIRMED across all 6 cited files. Structure is consistently: wrapper -> component -> content. No 3-level nesting found.
- **Pattern vs. imposed:** GENUINE PATTERN. The file itself notes bento grids MAY violate this (needing verification). This honesty is good.
- **OBSERVATION:** The "maximum depth = 2" framing turns an observation into a constraint. The explorations happen to have 2 levels. Whether 3 would be harmful is untested.

**Category verdict: 3 GENUINE, 1 OVER-SPECIFIED (N4). The nesting rules accurately describe what explorations do, but the "NEVER" framing on N1 and the "maximum" framing on N4 convert observations into prohibitions without testing alternatives.**

---

### 2. Spacing Rhythm Patterns (R1-R4) -- PARTIALLY OBSERVED, THEN OVER-SPECIFIED

**Rule R1: Dense Sections Followed by Sparse Sections (Page Scale)**
- **Provenance claim:** DD-003, DD-006, OD-004, CD-006
- **Verification:** CONFIRMED in DD-003 (sparse ocean 80px -> dense island 24px -> sparse separator 96px). Also visible in DD-006 and OD-004.
- **Pattern vs. imposed:** GENUINE PATTERN at the descriptive level. But the PRESCRIPTIVE part ("Every 2-4 dense zones MUST be followed by breathing room 48px+") adds specificity not in evidence. The actual explorations vary significantly -- DD-003 alternates with 1 dense zone, OD-004 uses an entirely different model (confidence-based progression).

**Rule R2: Minimum Consecutive Dense Sections = 1, Maximum = 3**
- **Verification:** DD-003 never has more than 1 dense island without breathing. DD-006 has up to 3. OD-006 has variable patterns.
- **Pattern vs. imposed:** OVER-SPECIFIED. The numbers "1" and "3" are inferred from a sample of 6 files. The MANDATE ("the NEXT section MUST be sparse") turns an observation into a rule. No evidence that 4 consecutive dense sections was tried and failed.

**Rule R3: Breathing-Room Triggers**
- **Verification:** CONFIRMED conceptually. DD-003 uses sparse separators after islands (lines 675-678). DD-006 uses section dividers. OD-004 uses chapter dividers.
- **Pattern vs. imposed:** GENUINE DESCRIPTIVE PATTERN. This rule describes WHEN explorations add breathing room. It's more descriptive than prescriptive.

**Rule R4: Spacing Compression Inside Components vs Between Components**
- **Verification:** CONFIRMED numerically. DD-003 has callout internal padding 16-20px and between-component spacing 24px. tokens.css has semantic aliases (--space-within: 8px, --space-between: 32px, --space-chapter: 64px).
- **Pattern vs. imposed:** GENUINE PATTERN, codified from tokens.css. The ratio 1:3 to 1:4 is an accurate observation.

**Category verdict: 2 GENUINE (R3, R4), 2 OVER-SPECIFIED (R1, R2). The rhythm is real; the numerical constraints are imposed.**

---

### 3. Background Zone Rules (Z1-Z3) -- GENUINE with one quantitative overreach

**Rule Z1: Background Color Changes Signal Content Type Shift**
- **Provenance claim:** DD-003, DD-006, OD-004, CD-006
- **Verification:** STRONGLY CONFIRMED. DD-003 uses white islands on cream ocean. OD-004 uses zone backgrounds encoding confidence (lines 223-228 show --color-zone-sparse, --color-zone-moderate, etc.). Zone token naming is a REAL pattern.
- **Pattern vs. imposed:** GENUINE PATTERN. The color-to-function mapping is well-evidenced.

**Rule Z2: Maximum Zone Changes Per Viewport = 2-3**
- **Verification:** DD-003 typically shows 1 zone change. DD-006 shows 2-3. OD-004 shows 2.
- **Pattern vs. imposed:** OVER-SPECIFIED. The number "2-3" is inferred from observation. The anti-pattern "strobe effect" is plausible but unvalidated. The file itself flags this: "needs more evidence."

**Rule Z3: Zone Transitions Use Border OR Spacing (Not Both Heavily)**
- **Verification:** CONFIRMED in DD-003 (4px left border + subtle 1px other edges + 16px margin) and DD-006 (48-64px spacing + 1px decorative line). OD-004 uses both but for different functions (spacing for breathing, border for structural marker).
- **Pattern vs. imposed:** GENUINE PATTERN. The observation that heavy border + heavy spacing is rare is accurate. OD-004's exception (EXT-CONF-014) is properly noted.

**Category verdict: 2 GENUINE (Z1, Z3), 1 OVER-SPECIFIED (Z2).**

---

### 4. Component Density Limits (D1-D3) -- OVER-SPECIFIED

**Rule D1: Maximum Components Per Viewport-Height = 3-4**
- **Provenance claim:** DD-003, DD-006, OD-004, CD-006
- **Verification:** DD-003 shows 1-2 components per viewport. DD-006 shows 1-4 depending on section. OD-004 shows 2-3. The numbers vary.
- **Pattern vs. imposed:** OVER-SPECIFIED. The number "3-4" is a rough average, not a validated maximum. The claim that "5+ components per viewport = density ceiling violation" references the tension-composition skill, which is PIPELINE INFRASTRUCTURE -- not a primary observation from explorations.

**Rule D2: Density Becomes Overwhelming When...**
- **Provenance claim:** DD-F-014 / R5-A1, Compositional Strategy Library
- **Verification:** The "max 2 callouts per viewport" is well-evidenced (DD-F-014). The other triggers ("Code block + 2 callouts + decision matrix" being too much) are inferred, not demonstrated.
- **Pattern vs. imposed:** PARTIALLY GENUINE. The 2-callout limit is well-supported. The other triggers are pipeline-era heuristics.

**Rule D3: Density Variation Across Page Sections**
- **Verification:** DD-003 follows sparse-dense-sparse. DD-006 follows sparse-dense-sparse. OD-004 INVERTS this (certain=sparse, uncertain=dense). CD-006 uses progressive density.
- **Pattern vs. imposed:** GENUINE DESCRIPTIVE OBSERVATION. The file itself notes the GEOLOGICAL inversion and flags it for further investigation. Good intellectual honesty.

**Category verdict: 1 GENUINE (D3 as observation), 2 OVER-SPECIFIED (D1 numerical limit, D2 trigger list).**

---

### 5. 2-Zone DNA Pattern (DNA1-DNA3) -- STRONGLY GENUINE

**Rule DNA1: Callout Structure is ALWAYS 2-Zone**
- **Provenance claim:** "6/6 files demonstrate this"
- **Verification:** STRONGLY CONFIRMED. DD-003 has `.callout-tip__label` + `.callout-tip__content` (lines 409-421). DD-006 has `.callout-essence__label` + `.callout-essence__content`. OD-004 follows. ALL explorations follow this pattern.
- **Pattern vs. imposed:** GENUINE PATTERN. 6/6 evidence. The most robustly observed rule in the file.

**Rule DNA2: Separator Between Zones is Spacing (NOT Border)**
- **Verification:** CONFIRMED. All 6 files use margin-bottom (8-12px) between label and body, not a horizontal rule.
- **Pattern vs. imposed:** GENUINE PATTERN.

**Rule DNA3: 2-Zone DNA Applies to Non-Callout Components**
- **Verification:** CONFIRMED. DD-003 `.density-island__label` (10px mono uppercase, line 307-325) + `.density-island__content` (14px body). DD-006 `.scale-demo__level` + `.scale-demo__title`. OD-004 stratum headers follow sparse-label + dense-content.
- **Pattern vs. imposed:** GENUINE PATTERN. The observation that 2-zone DNA is universal at component scale is well-supported.

**Category verdict: ALL 3 GENUINE. This is the strongest category in the file.**

---

### 6. Compound Grammar (C1-C3) -- GENUINE with one over-specified constraint

**Rule C1: Sequential NOT Simultaneous (AD-F-024)**
- **Provenance claim:** CD-005, CD-006, OD-006
- **Verification:** CONFIRMED. CD-005 explicitly tests Z-Pattern -> F-Pattern -> Bento Grid SEQUENTIALLY (header comment confirms: "3 axis patterns work SEQUENTIALLY on one page"). OD-006 uses 6 sections each with a different organizational pattern. CD-006 uses multiple axis patterns across sections.
- **Pattern vs. imposed:** GENUINE PATTERN, strongly validated by AD-F-024 finding.
- **Cross-reference:** The pattern files (axis-patterns.md, organizational-patterns.md) all reference AD-F-024. The CD-CONVENTION-SPEC Section 1 makes it a soul-compliance checklist item. Multi-layered confirmation.

**Rule C2: Transition Grammar Between Patterns (AD-F-025)**
- **Verification:** CD-005 explicitly uses SMOOTH (Z to F) and BRIDGE (F to Bento) transitions. The 3-type classification (smooth/bridge/breathing) is well-evidenced in AD-F-025.
- **Pattern vs. imposed:** GENUINE PATTERN. Well-traced to AD-F-025 through provenance chain.

**Rule C3: Maximum Patterns Per Page = 5-6**
- **Verification:** CD-006 uses 5 axis patterns. OD-006 uses 6 organizational patterns. These are the maxima observed.
- **Pattern vs. imposed:** OVER-SPECIFIED. The number "5-6" is the observed maximum from 2 files. The claim that "more than 6 = cognitive whiplash" is an inference. No exploration tried 7+ patterns to validate this limit.

**Category verdict: 2 GENUINE (C1, C2), 1 OVER-SPECIFIED (C3).**

---

### 7. Fractal Application Rules (F1-F3) -- GENUINE but inflated

**Rule F1: Fractal Self-Similarity at 4 Scales REQUIRED**
- **Provenance claim:** DD-006 defines, all 6 files comply
- **Verification:** DD-006 does define 4-scale fractal (page, section, component, character). The provenance chain confirms this was later extended to 5 scales (navigation added in OD-006, verified in AD-F-027). The claim "ALL 6 files comply" is in the provenance chain but compliance was VERIFIED BY AUDITORS, not inherently designed in.
- **Pattern vs. imposed:** GENUINE PATTERN for DD-006. PIPELINE-IMPOSED MANDATE for the other files. DD-F-006 was declared "THE STRONGEST PRINCIPLE" and mandated for all subsequent explorations. The other explorations comply BECAUSE they were told to, not because fractal emerged independently in each.
- **Important nuance:** This is a valid design decision (mandate fractal compliance), but compositional-rules.md presents it as if it was independently observed in all 6 files. It was observed in DD-006, then MANDATED for OD/AD/CD.

**Rule F2: Each Scale Repeats the SAME Rhythm**
- **Verification:** DD-006 shows this. Other files have varying rhythms at different scales (OD-004 uses INVERTED rhythm). The file itself notes this.
- **Pattern vs. imposed:** OVER-SPECIFIED. The "SAME rhythm" claim is not universally true -- OD-004's geological inversion means rhythm reverses at different scales.

**Rule F3: Fractal Breaks Create Coherence Loss**
- **Verification:** This is stated as a negative constraint. The evidence is from the Compositional Strategy Library (a pipeline document) and a perceptual audit correlation claim. No exploration deliberately broke fractal to test this.
- **Pattern vs. imposed:** PIPELINE-ERA COMPLIANCE ARTIFACT. The claim is reasonable but untested.

**Category verdict: 1 GENUINE (F1 for DD-006), 1 OVER-SPECIFIED (F2), 1 PIPELINE ARTIFACT (F3).**

---

### 8. Grid Grammar (G1-G3) -- PARTIALLY GENUINE

**Rule G1: Bento Grid Cell Span Encodes Importance**
- **Provenance claim:** Compositional Strategy Library, DD-003
- **Verification:** DD-003's `.archipelago` uses a simple 2-column grid with uniform cell sizes (lines 520-536) -- which CONTRADICTS the rule. The Compositional Strategy Library prescribes varied cell sizes. CD-005 and AD-003 use bento grids with varied sizes.
- **Pattern vs. imposed:** PARTIALLY GENUINE. Observed in AD/CD explorations but NOT in DD-003 (the cited source). The rule is more accurately attributed to AD-003 (bento grid exploration).

**Rule G2: Grid Gaps = OCEAN Whitespace**
- **Verification:** DD-003 `.archipelago` has gap of `var(--space-6)` (24px, line 523). AD-F-009 codified this.
- **Pattern vs. imposed:** GENUINE PATTERN.

**Rule G3: Maximum Grid Cells Without Breathing = 12**
- **Verification:** Only source is the Compositional Strategy Library. DD-003 uses 2 cells. No exploration tested 12+ cells.
- **Pattern vs. imposed:** PIPELINE-ERA COMPLIANCE ARTIFACT. The number 12 is from infrastructure documents, not observations.

**Category verdict: 1 GENUINE (G2), 1 PARTIALLY GENUINE (G1 -- wrong citation), 1 PIPELINE ARTIFACT (G3).**

---

### 9. Responsive Collapse Grammar (RC1-RC2) -- GENUINE

**Rule RC1: Grids Collapse to 1-2 Columns at 768px**
- **Verification:** CONFIRMED in DD-003: `@media (max-width: 768px) { .archipelago { grid-template-columns: 1fr; } }` (lines 527-531). Present in all explorations.
- **Pattern vs. imposed:** GENUINE PATTERN. 768px breakpoint is universally used.

**Rule RC2: Padding Compression at Mobile**
- **Verification:** The pattern is referenced in the Compositional Strategy Library and tension-composition skill. Specific values (48px desktop -> 32px tablet -> 24px mobile) match what explorations implement.
- **Pattern vs. imposed:** GENUINE PATTERN, well-evidenced across files.

**Category verdict: BOTH GENUINE.**

---

### 10. Anti-Pattern Grammar (AP1-AP4) -- GENUINE

**Rule AP1: NO Callout Stacking (DD-F-014 / R5-A1)**
- **Verification:** DD-F-014 is well-documented. No exploration has 3+ callouts in one viewport. OD-004, OD-006, CD-005, CD-006 all cite this.
- **Pattern vs. imposed:** GENUINE -- both observed and cross-validated.

**Rule AP2: NO Uniform Density (DD-F-017)**
- **Verification:** All explorations vary density. This is a genuine anti-pattern.
- **Pattern vs. imposed:** GENUINE.

**Rule AP3: NO Fighting the Pattern (DD-F-018)**
- **Verification:** Cited in Compositional Strategy Library and OD-006. Real anti-pattern.
- **Pattern vs. imposed:** GENUINE.

**Rule AP4: NO Simultaneous Axis Patterns (AD-F-024)**
- **Verification:** CD-005 explicitly validates this. Same as C1.
- **Pattern vs. imposed:** GENUINE.

**Category verdict: ALL 4 GENUINE. Anti-patterns have the strongest provenance because they emerge from NEGATIVE observations (what went wrong).**

---

### 11. Open Grammar Questions (Q1-Q5) -- SELF-AWARE GAPS

All 5 questions (Q1 through Q5) are labeled as needing more evidence. This section is intellectually honest and correctly identifies genuine gaps.

**Category verdict: APPROPRIATE. These are not rules; they are flagged unknowns.**

---

## Cross-Cutting Findings

### Finding 1: Observation-to-Prohibition Inflation

The most common pattern in this file is: **Observe** what explorations do -> **Infer** a numerical limit -> **Frame** as a prohibition. Examples:
- N4: Explorations use 2 nesting levels -> "Maximum nesting depth = 2"
- R2: Most dense runs are 1-3 sections -> "Maximum = 3, MUST be followed by sparse"
- Z2: 2-3 zone changes observed -> "Maximum zone changes per viewport = 2-3"
- C3: Max 5-6 patterns observed -> "More than 6 = cognitive whiplash"

In every case, no exploration TESTED the prohibited alternative. These numbers are OBSERVED MAXIMUMS from a sample of 6 files, not validated constraints.

### Finding 2: Pipeline Infrastructure Masquerading as Observed Grammar

5 rules cite the "Compositional Strategy Library" or "tension-composition skill" as evidence. These are PIPELINE ARTIFACTS (documents created by the extraction pipeline), not PRIMARY OBSERVATIONS from explorations. Rules sourced from pipeline infrastructure:
- D1: "5+ components per viewport = density ceiling violation" (from tension-composition skill guardrail)
- F3: Fractal compliance correlation with audit scores (from perceptual audit pipeline)
- G3: "Maximum 12 grid cells" (from Compositional Strategy Library)
- G1 partially: Cell span encoding (from Compositional Strategy Library)
- D2 partially: Trigger list (from Compositional Strategy Library)

### Finding 3: DD-F-006 Fractal is Genuine but MANDATED not Emergent

The fractal principle was genuinely discovered in DD-006 (highest scoring exploration, 36/40). However, it was then MANDATED for all subsequent explorations via the provenance chain (DD-F-006 is marked "ALL ODs, ALL ADs, ALL CDs" in DD-outbound-findings.md). The other explorations comply because they were TOLD to, not because fractal independently emerged.

The compositional-rules.md file presents fractal compliance as if independently observed across all files ("ALL 6 files comply"). This conflates mandate-compliance with organic emergence.

### Finding 4: 2-Zone DNA is the Most Robustly Genuine Pattern

The 2-zone DNA rules (DNA1-DNA3) have the strongest provenance:
- Observed in ALL 6 cited files independently
- Present in component design from Stage 1 (COMP-F-003)
- Not mandated -- it emerged because callout architecture naturally follows label+body structure
- Specific CSS values match across files (10-12px label, 16px body, 8-12px gap)

This is what genuine grammar looks like: consistent, emergent, verifiable.

### Finding 5: The Sequential Pattern Rule (C1) is Strongly Validated

AD-F-024 (sequential not simultaneous) is one of the best-evidenced rules:
- Tested directly in AD-006 (compound exploration)
- Validated in CD-005 (multi-axis transition)
- Referenced in CD-CONVENTION-SPEC as a soul-compliance checklist item
- Has clear provenance through DD-F-012 -> OD-F-005 -> AD-F-004 -> AD-F-024

This is the gold standard for how rules SHOULD be traced.

### Finding 6: OD-004 Contradicts Several "Universal" Rules

OD-004 (confidence-based) follows an INVERTED rhythm (certain = sparse, uncertain = dense). This contradicts:
- R1's assumption that dense is always followed by sparse
- F2's claim that each scale repeats the SAME rhythm
- D3's standard density arc (intro sparse -> middle dense -> conclusion sparse)

The compositional-rules.md file notes this in D3 and in the open questions (Q1), but does NOT propagate the contradiction to R1 or F2. The GEOLOGICAL/confidence pattern is a first-class alternative, not an exception to be explained away.

### Finding 7: The File is Honest About Its Gaps

compositional-rules.md includes 6 "OBSERVATION -- needs more evidence" flags and 5 open questions. This is better intellectual practice than most pipeline-era files. The problem isn't dishonesty; it's that the FRAMING of observed patterns as mandatory rules happens alongside the honest gap-flagging.

---

## Structural vs Pipeline-Era Classification

### STRUCTURAL RULES (from explorations -- keep)
| Rule | Category | Evidence Quality |
|------|----------|-----------------|
| N1 (no callout nesting) | Nesting | Strong (0/18 explorations violate) |
| N2 (code block flexibility) | Nesting | Strong (multiple files) |
| DNA1 (2-zone callout structure) | Component Pattern | Strongest (6/6 files) |
| DNA2 (spacing not border between zones) | Component Pattern | Strong (6/6 files) |
| DNA3 (2-zone universal) | Component Pattern | Strong (multiple file types) |
| C1 (sequential not simultaneous) | Compound Grammar | Strong (AD-F-024, CD-005) |
| C2 (transition grammar) | Compound Grammar | Strong (AD-F-025, tested) |
| Z1 (background signals content type) | Zone Patterns | Strong (zone tokens in CSS) |
| Z3 (border OR spacing, not both heavy) | Zone Transitions | Strong (with noted exception) |
| R3 (breathing-room triggers) | Spacing | Strong (descriptive) |
| R4 (compression ratios) | Spacing | Strong (matches tokens.css) |
| RC1 (768px collapse) | Responsive | Strong (all files) |
| RC2 (padding compression) | Responsive | Strong (all files) |
| AP1-AP4 (all anti-patterns) | Anti-Patterns | Strong (negative observations) |
| D3 (density variation, as observation) | Density | Moderate (with noted inversion) |

### OVER-SPECIFIED RULES (observation inflated to constraint -- revise)
| Rule | Problem | Revision Needed |
|------|---------|-----------------|
| N4 (max depth = 2) | Untested upper bound | Change "maximum" to "observed depth" |
| R1 (2-4 dense zones then breathing) | Prescriptive numbers | Change to descriptive pattern |
| R2 (max 3 consecutive dense) | Number from small sample | Remove or soften to observation |
| Z2 (max 2-3 zone changes per viewport) | Number from small sample | Remove or soften to observation |
| C3 (max 5-6 patterns per page) | Observed max, not tested limit | Change to observation |
| F2 (same rhythm at all scales) | Contradicted by OD-004 | Note GEOLOGICAL exception |
| D1 (max 3-4 components per viewport) | Pipeline-sourced threshold | Separate pipeline rule from observation |
| D2 (overwhelm triggers, partial) | Some triggers untested | Mark which are observed vs inferred |
| G1 (cell span encoding, partial) | Wrong citation (DD-003 contradicts) | Fix citation to AD-003 |

### PIPELINE-ERA COMPLIANCE ARTIFACTS (from infrastructure -- flag or remove)
| Rule | Source | Problem |
|------|--------|---------|
| F3 (fractal breaks = coherence loss) | Perceptual audit pipeline | Untested negative claim |
| G3 (max 12 grid cells) | Compositional Strategy Library | Pipeline document, not observation |
| D1 partially (5+ = violation) | Tension-composition skill | Pipeline guardrail, not primary evidence |
| F1 (fractal REQUIRED in all files) | DD-F-006 mandate | Genuine for DD-006; mandated for others |

---

## Recommendations

1. **Separate observation from prescription.** The strongest rules (2-zone DNA, sequential patterns, anti-patterns) succeed because they DESCRIBE what explorations do. The weakest rules fail because they PRESCRIBE numerical limits from small samples. Reframe over-specified rules as observations.

2. **Fix the DD-003 citation in G1.** DD-003 uses UNIFORM cell sizes in its archipelago grid, which contradicts the rule. The actual evidence is in AD-003 (bento grid exploration).

3. **Acknowledge the fractal mandate.** DD-F-006 is a genuine discovery from DD-006 that was then mandated for all subsequent work. Presenting mandate-compliance as independent observation is misleading. The file should distinguish "discovered here" from "mandated based on discovery."

4. **Propagate the OD-004 contradiction.** The GEOLOGICAL inversion (certain = sparse, uncertain = dense) contradicts R1, F2, and D3's standard arc. This needs to be noted where those rules are stated, not just in D3 and Q1.

5. **Label pipeline-sourced rules.** Rules from the Compositional Strategy Library or tension-composition skill should be clearly marked as pipeline-derived, not presented alongside primary observations.

6. **The open questions section is good -- keep it.** The intellectual honesty of flagging gaps is this file's best quality. Extend this practice to the over-specified rules.
