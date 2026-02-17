# SCAN-G: Exhaustive Cross-Reference -- Flagship Validation Files 14-20

**Scanner:** Scanner G (Sonnet 4.5, Task #7, Team exhaustive-crossref)
**Date:** 2026-02-17
**Scope:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (v2) vs 7 deep validation files (14-20)
**Method:** Full read of FINAL prompt + executive summary + gap sections of all 7 validation files

---

## EXECUTIVE SUMMARY

| File | Title | CRITICAL gaps | IMPORTANT gaps | NICE-TO-HAVE gaps |
|------|-------|--------------|----------------|-------------------|
| 14 | Ultra-Deep Scale Cross-Reference | 1 | 3 | 4 |
| 15 | Ultra-Deep Coherence Cross-Reference | 3 | 4 | 4 |
| 16 | Ultra-Deep Channel Matrix | 0 | 1 | 2 |
| 17 | Mechanism-Rule Traceability | 1 | 2 | 2 |
| 18 | Conviction Accuracy | 0 | 2 | 2 |
| 19 | Parameter Verification | 0 | 3 | 4 |
| 20 | Agent Routing Completeness | 2 | 4 | 2 |
| **TOTAL** | | **7** | **19** | **20** |

**Top-severity finding:** D-03 (BLOCKING) -- `16-multi-coherence-invocation.md` not routed to ANY agent. All MC-01 through MC-08 rules are aspirational statements with no implementation guidance reachable during execution.

**Second-highest finding (File 20, F-02):** Two BLOCKING file-path errors -- `merged-components.css` and `case-studies/_INDEX.md` don't exist on disk. Team-lead will fail to execute Phase 1A.

---

## FILE 14: Ultra-Deep Scale Cross-Reference (14-ultra-deep-scale-crossref.md)

### GAP-14-C1 [CRITICAL]: Named scale definitions missing from prompt

**Source:** File 14, lines 11-18 (Section 1.1 -- MISSING status)
**Finding:** The 5 scales are never named in the FINAL prompt. SC-01 says "Maximum 5 scales" but builders are never told what Navigation, Page, Section, Component, Character scales ARE.
**Impact:** Builder cannot verify SC-07 ("same design principle observable at >= 3 scales") without knowing what the scales are. The richness matrix (SC-03, 35 cells = 5 scales x 7 channels) is unverifiable without named scales.
**Status in FINAL prompt:** ABSENT

**Insertable text (for Section B5 after SC-01):**
```
SCALE DEFINITIONS (reference only, do not enumerate in builder prompt):
  S1. Navigation: Bird's-eye -- header, TOC, footer (1440px viewpoint)
  S2. Page: Full scroll -- section sequencing across entire page (960px container)
  S3. Section: One screen -- how components arrange within a section (200-400px)
  S4. Component: One element -- how content organizes inside a single component (40-100px)
  S5. Character: Inline -- text-level styling (bold, code, links, emphasis) (12-20px)
  SC-07 requires the same design principle (e.g., compression, warmth, weight) at >= 3 of these levels.
```

---

### GAP-14-I1 [IMPORTANT]: Semantic Density as named principle missing

**Source:** File 14, lines 72-76 (PARTIAL status) and lines 92-94 (MISSING status)
**Finding:** The report recommends "Semantic Density" as a 5+1 scale model -- the most important element on the page should use MORE mechanisms than supplementary elements. This is the report's #1 recommendation. Rule C-19 was added to the FINAL prompt (semantic density proportionality) but the binary gate proposed in the report is NOT in the builder self-check.
**Status in FINAL prompt:** C-19 exists in B3 but NOT in B10 self-check.

**Insertable text (add to B10 self-check):**
```
[ ] C-19: Most important content block uses MORE mechanisms than supplementary blocks
          Verify: identify 1 most-critical element and 1 least-critical. Count active mechanisms on each.
          FAIL IF critical block mechanism count <= supplementary block count.
```

---

### GAP-14-I2 [IMPORTANT]: Scale coherence index verification method missing

**Source:** File 14, line 104 (PARTIAL status)
**Finding:** SC-07 ("Scale Coherence Index: same design principle observable at >= 3 scales") has no verification method. The source provides a binary check: "Can you name the principle and point to its CSS expression at 3 different scale levels?" The FINAL prompt has the rule but not the verification.
**Status in FINAL prompt:** Rule present, verification absent.

**Insertable text (add to SC-07 or B10 self-check):**
```
SC-07 verify: Name the single design principle in one sentence (e.g., "compression signals importance").
              Point to its CSS expression at >= 3 scale levels from the 5 named scales.
              FAIL IF principle cannot be named or CSS evidence found at only 1-2 scales.
```

---

### GAP-14-I3 [IMPORTANT]: Fractal scale vs preferred-scale contradiction unresolved

**Source:** File 15, Section 9 (DISCREPANCY D-14 -- SIGNIFICANT)
**Finding:** `16-multi-coherence-invocation.md` says "Flagship requires 5/5 scales." `mechanism-catalog.md` says Flagship = 5 scales. FINAL prompt SC-01 says "Preferred 2-3 for flagship." Two sources require 5; one says 2-3. This is an unresolved contradiction that could confuse builders.
**Status in FINAL prompt:** Contradiction present but not resolved with explanation.

**Insertable text (add after SC-01 or in B12 Recovery):**
```
SCALE CONTRADICTION RESOLVED: The "2-3 preferred" in SC-01 reflects EMPIRICAL learning
(Middle: 2 scales PA-05 4/4 > Ceiling: 4 scales PA-05 1.5/4). The fractal THEORY requires 5/5
scales. The OPERATIONAL target is: start with 2-3 scales with DEEP coherence. Extend to 4-5
only if spatial gates pass. PA-05 > scale count at all times. Never target 5 in the plan;
achieve 2-3 with integrity and let the fractal emerge.
```

---

### GAP-14-N1 [NICE-TO-HAVE]: Perception-quality tier labels not referenced

**Source:** File 14, lines 224-225 (MISSING status)
**Finding:** The scale research defines experiential labels: 30%=Formatted, 62.5%=Designed, 87.5%=Atmospheric, 96.5%=Artisanal, 100%=Perfect. These help builders understand what each tier FEELS like. Not in FINAL prompt.
**Status:** ABSENT but non-critical to execution.

---

### GAP-14-N2 [NICE-TO-HAVE]: Materiality gradient concept absent

**Source:** File 14, lines 152-154 (MISSING status)
**Finding:** The "materiality gradient" concept (elements on spectrum from ethereal to monumental, richness = full range deployed semantically) is not named in the prompt. Partially captured by SC-02 channel coverage but not as a named principle.
**Status:** ABSENT

---

### GAP-14-N3 [NICE-TO-HAVE]: Build time / CSS complexity walls not mentioned

**Source:** File 14, lines 204-205 (MISSING status)
**Finding:** The CSS complexity ceiling (~800-1000 CSS lines = LLM context wall) where builders degrade from compositional fluency to mechanism enumeration is documented in scale research but not in the prompt. This matters for Pass 2 builder guidance.
**Status:** ABSENT (but mechanism cap C-02 and viewport density cap C-03 indirectly address)

---

### GAP-14-N4 [NICE-TO-HAVE]: Non-spatial scales additive stacking finding absent

**Source:** File 14, lines 111 (MISSING status)
**Finding:** "Non-spatial scales are mostly INDEPENDENT; richness gains stack additively." This would inform channel selection strategy but has no prompt rule.
**Status:** ABSENT

---

## FILE 15: Ultra-Deep Multi-Coherence Cross-Reference (15-ultra-deep-coherence-crossref.md)

### GAP-15-C1 [CRITICAL]: 16-multi-coherence-invocation.md not routed to any agent

**Source:** File 15, lines 74-76 (DISCREPANCY D-03 -- BLOCKING)
**Finding:** `16-multi-coherence-invocation.md` (951 lines) contains:
- Operational definitions of all 5 interaction types with CSS evidence
- Worked examples (OD-004 geological confidence, CD-006 4-act arc)
- Per-pair binary verification checks (R-01/R-02/R-03, M-01/M-02/M-03, etc.)
- Complete 15-pair dimension cross-reference matrix
- Per-agent MC gates and responsibilities
- Builder checklists

The FINAL prompt rules MC-01 through MC-08 exist but the implementation guidance from 16-MC is **reachable by ZERO agents**. The Planner reads 16-MC per Section E -- BUT Section E was written for the older enriched prompt (10-ENRICHED), and the FINAL prompt's Section E routing lists `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` for the PLANNER and METAPHOR BUILDER.

**VERIFICATION NEEDED:** The FINAL prompt Section E does appear to route 16-MC to both Planner and Metaphor Builder. Discrepancy D-03 was flagged against the older enriched prompt (10-ENRICHED). **Check: Is this already resolved in FINAL?**

**Reviewing FINAL prompt Section E (lines 575-588):**
- PLANNER reads: `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` -- YES, present
- METAPHOR BUILDER reads: `ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md` -- YES, present

**REVISED STATUS:** D-03 appears to be RESOLVED in the FINAL prompt. However, the Mechanism Builder (Pass 2, who deploys all CSS mechanisms) does NOT read 16-MC. The MC rules require implementation during CSS deployment but the implementation reference is not in the Mechanism Builder's reading list. This is the residual gap.

**Insertable text (add to Section E BUILDER reads):**
```
MECHANISM BUILDER additionally reads:
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md (Sections 2-3 only)
    Focus: interaction type definitions + per-pair binary check methods (R-01, M-01, RS-01, C-01, CA-01)
```

---

### GAP-15-C2 [CRITICAL]: CCS formula deviation from source

**Source:** File 15, lines 285-305 (DISCREPANCY D-09 -- SIGNIFICANT)
**Finding:** The CCS formula in the FINAL prompt (MC-01) uses "pair-counting metric" while the source formula (from 16-MC and 13-CF) uses a "per-mechanism removal test." These are mathematically different.

**Source formula (correct):**
```
CCS per mechanism = (mechanisms whose perceived meaning changes when THIS mechanism is removed)
                    / (total deployed - 1)
CCS for page = average CCS across all deployed mechanisms
```

**FINAL prompt MC-01 (line 205):**
```
CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed)
                    / (total deployed - 1)
CCS for page = average CCS across all deployed.
Verification: pick 3+ mechanisms, mentally remove each, check if others' meaning shifts.
```

**REVISED STATUS:** On re-reading the FINAL prompt MC-01, the formula appears to match the source formula. The discrepancy D-09 was against the older enriched prompt's reformulation. The FINAL prompt's BG-06 fix ("pair-counting -> per-mechanism removal test") appears to have corrected this. **This gap is likely RESOLVED.**

**Residual gap (still CRITICAL):** The FINAL prompt provides NO verification method for CCS beyond "pick 3+ mechanisms, mentally remove." The source provides a structured removal test on >= 5 mechanisms. The minimum of 3 in the FINAL prompt is lower than the source's 5.

**Insertable text (for MC-01 in B4):**
```
CCS test procedure: Select >= 5 mechanisms (minimum). For EACH: delete its CSS entirely.
Ask: does ANY other mechanism look wrong, misplaced, or semantically unclear?
Count = number of mechanisms affected per removed mechanism.
CCS per mechanism = count / (total deployed - 1). Average across all tested.
```

---

### GAP-15-C3 [CRITICAL]: 15-pair dimension matrix not enumerated in prompt

**Source:** File 15, lines 344-371 (DISCREPANCY D-11 -- SIGNIFICANT)
**Finding:** MC-07 requires ">= 10 of 15 possible dimension pairs actively coupled" but the 6 dimensions are named ONLY in A5 (the conviction layer), and the 15 pairs are NEVER enumerated. The verification questions per pair (from 16-MC Section 6.1) are not reachable.

The 6 dimensions (from A5): Spatial, Temporal, Chromatic, Typographic, Rhythmic, Semantic.
The 15 pairs are: Sp-Tm, Sp-Chr, Sp-Typ, Sp-Rhy, Sp-Sem, Tm-Chr, Tm-Typ, Tm-Rhy, Tm-Sem, Chr-Typ, Chr-Rhy, Chr-Sem, Typ-Rhy, Typ-Sem, Rhy-Sem.

**Status in FINAL prompt:** The 6 dimensions are named but the 15 pairs are not listed. No verification questions. Builder cannot determine which 10 of 15 they have achieved.

**Insertable text (expand MC-07 in B4):**
```
MC-07. Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled.
       The 6 dimensions: SPATIAL (spacing/layout), TEMPORAL (scroll depth/sequence),
       CHROMATIC (color), TYPOGRAPHIC (font properties), RHYTHMIC (repetition/alternation), SEMANTIC (content importance).
       15 pairs: Sp-Chr, Sp-Typ, Sp-Rhy, Sp-Sem, Sp-Tm, Chr-Typ, Chr-Rhy, Chr-Sem, Chr-Tm,
                 Typ-Rhy, Typ-Sem, Typ-Tm, Rhy-Sem, Rhy-Tm, Sem-Tm.
       Highest-value: Spatial-Chromatic, Typographic-Rhythmic, Chromatic-Semantic.
       Verify: for each claimed pair, state the CSS evidence of coupling.
```

---

### GAP-15-I1 [IMPORTANT]: Per-pair verification binary checks absent

**Source:** File 15, multiple DISCREPANCY entries (D-02, D-04, D-06, D-07, D-08 -- all MINOR)
**Finding:** For each of the 5 interaction types, the source provides concrete binary verification checks:
- REINFORCING: remove mechanism A, does B's meaning change?
- MODULATING: compare same component type in two density zones -- are values different?
- RESPONDING: remove preceding section entirely -- does responding mechanism still feel justified?
- CONTRASTING: can you write a 1-sentence justification for WHY mechanism is absent in this zone?
- CASCADING: VALUE TABLE acid test -- do all mechanisms change in same direction at each stage?

**Status in FINAL prompt:** A5 defines the 5 types. MC-01 through MC-08 set counts. NO per-type binary checks are included. Builder has aspirational counts but no how-to-verify.

**Insertable text (add after MC-06 in B4 or as a sub-section):**
```
INTERACTION VERIFICATION METHODS (binary checks -- use at Gate 3):
  REINFORCING: Remove mech A's CSS. Does mech B's meaning become unclear or arbitrary? YES=reinforcing.
  MODULATING: Compare the same component in a dense zone vs a sparse zone. Are CSS values different? YES=modulating.
  RESPONDING: Remove the preceding section's CSS. Does the following mechanism still feel justified? NO=responding.
  CONTRASTING: For each mechanism absent in a zone, write 1 sentence WHY. Cannot write it? Absence is void, not contrast.
  CASCADING: Write one sentence describing the cascade's trajectory WITHOUT listing mechanism names. Cannot? No cascade.
```

---

### GAP-15-I2 [IMPORTANT]: MC rules duplicate (C-11 = MC-08)

**Source:** File 15, lines 396-401 (DISCREPANCY D-13 -- MINOR)
**Finding:** C-11 and MC-08 both require ">= 3 distinct spacing values." They are exact duplicates. Additionally, the source requires spacing values to form a CONTOUR matching the page arc, not just 3 random distinct values. 3 random values passes C-11/MC-08 but fails the source intent.

**Status in FINAL prompt:** Duplication present. Contour requirement absent.

**Insertable text (modify C-11 to differentiate it from MC-08):**
```
C-11. Section spacing MUST vary AND form a CONTOUR: at least 3 distinct values that follow a
      compositional logic (e.g., CRESCENDO: 80px -> 48px -> 32px tracking density increase).
      THREE RANDOM values (80px, 32px, 64px with no logic) = FAIL.
      MC-08 is the binary gate (3 distinct values). C-11 is the quality requirement (contour logic).
```

---

### GAP-15-I3 [IMPORTANT]: Multi-Coherence Equation not referenced

**Source:** File 15, lines 460-468 (OBSERVATION)
**Finding:** The source (16-MC, Section 1.2) provides a higher-level MC equation:
```
Multi-Coherence = (Reinforcing Pairs × Modulating Chains × Fractal Depth) / Independent Mechanisms
```
This penalizes INDEPENDENT mechanisms (in denominator), which CCS alone does not. A page with 10 coupled + 10 independent mechanisms has good CCS but poor MC equation score.

**Status in FINAL prompt:** Only CCS is tracked. The denominator (independent mechanisms) is invisible.

**Insertable text (add to B4 as MC note or Section D conviction closing):**
```
INDEPENDENCE PENALTY: Deployed mechanisms that are completely independent of all others
dilute compositional quality. Target: EVERY deployed mechanism should appear in at least
one interaction relationship (reinforcing, modulating, responding, contrasting, or cascading).
Verify at Gate 3: any mechanism with zero CCS contribution = candidate for removal.
```

---

### GAP-15-I4 [IMPORTANT]: Per-agent MC responsibilities not in agent roster

**Source:** File 15, lines 476-479 (DISCREPANCY D-16 -- SIGNIFICANT)
**Finding:** The source (16-MC, Section 10.1) specifies per-agent multi-coherence responsibilities and gates for all 9 agent roles. The FINAL prompt C1 roster defines agents but has NO per-agent MC gates. Which agent is responsible for verifying MC-01 through MC-08?

**Status in FINAL prompt:** MC rules in B4, agent roster in C1, no connection between them.

**Insertable text (add to C1 agent roster for each relevant agent):**
```
PLANNER (Pass 0.5): Plans MC-01 through MC-08. Must document >= 3 reinforcing pairs,
  >= 2 modulating chains, >= 1 cascade in build plan. Produces MC-deployment-map section.
MECHANISM BUILDER (Pass 2): Implements CSS that creates interaction types. Self-checks
  MC-01 CCS >= 0.30, MC-08 anti-metronome before Gate 3.
INTENTIONALITY BUILDER (Pass 4): Validates MC-04 responding, MC-05 contrasting, MC-06
  cascading. Can ADD intentional interactions at this pass.
EMBEDDED AUDITOR (Pass 1): Pre-Gate check: are enough spatial zones created for contrasting
  deployments to be possible? Flags early if zone count insufficient.
```

---

### GAP-15-N1 [NICE-TO-HAVE]: Responding vs Cascading semantic clarification

**Source:** File 15, lines 142-148 (DISCREPANCY D-05 -- MINOR)
**Finding:** MC-04 uses "triggers" language ("mechanism A's output triggers mechanism B") which conflates with CASCADING semantics. Source uses "responds to" (perceptual weight management, not causal triggering). This could cause misclassification.
**Impact:** Low but could cause semantic confusion for builder.

---

### GAP-15-N2 [NICE-TO-HAVE]: Deployment ratio concept for contrasting absent

**Source:** File 15, lines 206-208 (DISCREPANCY D-07 -- MINOR)
**Finding:** Source defines a DEPLOYMENT RATIO (deployed-in / total-sections, should be < 1.0 to achieve contrast). A mechanism deployed uniformly in ALL sections eliminates contrast. FINAL prompt has no deployment ratio concept.
**Status:** ABSENT

---

### GAP-15-N3 [NICE-TO-HAVE]: Cascading value table not referenced

**Source:** File 15, lines 250-257 (DISCREPANCY D-08 -- MINOR)
**Finding:** The source's "VALUE TABLE" acid test for cascading chains is the most powerful verification tool for cascading -- if all mechanisms change in the same direction at each stage, it's a cascade. Not in FINAL prompt.
**Status:** ABSENT

---

### GAP-15-N4 [NICE-TO-HAVE]: Fractal verification per-scale documentation format absent

**Source:** File 15, lines 429-433 (Section 9.2)
**Finding:** Source provides a per-scale documentation format (CSS evidence + relationship to adjacent scale) with binary checks FC-01 through FC-06. SC-07 in FINAL prompt requires 3+ scales but has no documentation format.
**Status:** ABSENT

---

## FILE 16: Ultra-Deep Channel-Scale Matrix (16-ultra-deep-channel-matrix.md)

### GAP-16-I1 [IMPORTANT]: Channel ownership per agent not explicit

**Source:** File 16, Section 3A (Agent-Channel ownership table in Report 15)
**Finding:** Report 15 and File 16 define which agent owns which channel (e.g., Content Architect owns Ch5 Density and Ch6 Rhythmic at Page scale; Planner owns Ch3 Spatial; Mechanism Builder owns Ch1 Chromatic). The FINAL prompt has no agent-channel ownership mapping.

The FINAL prompt Section E routes mechanism-catalog.md and 15-scale-channel-invocation.md to Planner and Metaphor Builder but does NOT assign channel ownership to specific agents.

**Status in FINAL prompt:** SC-02 requires 5+ channels but assigns no agent to own each channel.

**Insertable text (add to C1 agent roster or Section E):**
```
CHANNEL OWNERSHIP (each agent owns activation of these channels):
  Content Architect: Ch5 DENSITY (content per viewport), Ch6 RHYTHMIC (section cadence)
  Planner: Ch3 SPATIAL (spacing/proportion), Ch4 STRUCTURAL (borders/dividers)
  Metaphor Agent: Ch7 INTENTIONAL (compositional intelligence -- no CSS)
  Mechanism Builder: Ch1 CHROMATIC (color as semantic signal), Ch2 TYPOGRAPHIC (type properties)
  Note: Ch7 has NO CSS mechanisms -- it is pure compositional intelligence from Opus-level agents.
```

---

### GAP-16-N1 [NICE-TO-HAVE]: Channel saturation prevention at Navigation scale not specified

**Source:** File 16, Section Scale 1 (Cell [S1, Ch5] and [S1, Ch6] -- PARTIALLY filled)
**Finding:** The matrix identifies that Navigation-scale Density and Navigation-scale Rhythmic channels are "partially empty" in CD-006 (2 of CD-006's 2 empty cells were at Navigation scale). The FINAL prompt's SC-08 prevents all 7 channels at any single scale but doesn't identify Navigation as the scale most at risk of being under-populated.
**Status:** ABSENT -- low impact.

---

### GAP-16-N2 [NICE-TO-HAVE]: Ch7 (Intentional) has no CSS mechanism clarification

**Source:** File 16, Section 1 (Ch7 definition)
**Finding:** Ch7 INTENTIONAL is explicitly defined as having NO corresponding CSS mechanisms. It operates at compositional decision level only. This is noted in SC-02 channel definitions in the FINAL prompt but not explicitly flagged as "agent-only, no CSS" in the builder's self-check.
**Status:** Partially present in SC-02 definition but not in B10 self-check.

---

## FILE 17: Mechanism-Rule Traceability (17-mechanism-rule-traceability.md)

### GAP-17-C1 [CRITICAL]: Mechanism #7 zone-color conflict with U-06 not flagged

**Source:** File 17, lines 244-245 (POTENTIAL CONFLICT flagged)
**Finding:** Mechanism #7 (Zone Background Differentiation) includes `--color-zone-dense (#FFFFFF)` which is pure white. U-06 prohibits #FFFFFF. The catalog defines this as "near-white" but the hex value is literally #FFFFFF, creating a direct soul violation.

**Status in FINAL prompt:** U-06 says "No #000000 or #FFFFFF (use near-black #1A1A1A and cream #fefcf3 from tokens)" -- this would prohibit the zone-dense color if it is truly #FFFFFF.

**Insertable text (add clarification to U-06 in B2 or to prohibitions reference):**
```
U-06. No #000000 or #FFFFFF. Zone backgrounds use token values from tokens.css.
      NOTE: --color-zone-dense appears as #FFFFFF in some contexts. If so, adjust to
      #FEFEFE or the warm white from tokens.css. Pure white violates U-06. Verify
      computed background value on zone-dense sections.
```

---

### GAP-17-I1 [IMPORTANT]: Auditor PA assignment for mechanisms is incomplete in prompt

**Source:** File 17, mechanism-by-mechanism table (all 18 mechanisms)
**Finding:** File 17 maps each mechanism to the specific PA questions that audit it. The FINAL prompt (C4) assigns PA questions to auditors by number but does NOT map which PA questions relate to which MECHANISMS. This means auditors cannot trace a PA finding back to a specific mechanism for targeted fixing.

**Status in FINAL prompt:** C4 has auditor assignments (PA numbers to auditors) but no mechanism-to-PA-question map.

**Insertable text (add to C6 PA-to-TC Fix Routing or as an appendix note):**
```
MECHANISM-TO-PA QUICK REFERENCE (for targeted fix routing):
  #1 Border-Weight: PA-25, PA-26, PA-27, PA-17, PA-41
  #2 2-Zone DNA: PA-20, PA-21, PA-22, PA-06, PA-07
  #3 Solid Offset: PA-25, PA-26, PA-03, PA-04, PA-05
  #5 Dense/Sparse: PA-06, PA-07, PA-08, PA-09, PA-17, PA-41
  #7 Zone Background: PA-06, PA-07, PA-15, PA-16, PA-45, PA-46
  #13 Dark Header: PA-01, PA-02, PA-03, PA-04, PA-05, PA-30, PA-31
  #14 Footer Mirror: PA-01, PA-04, PA-30
```

---

### GAP-17-I2 [IMPORTANT]: Application mode specifications not in builder prompt

**Source:** File 17 (mechanism traceability matrix, Application Modes section for each mechanism)
**Finding:** For Mechanism #1 (Border-Weight Gradient Encoding), the traceability matrix documents two application modes: PROGRESSIVE (4px->3px->2px->1px for stratified content) or DISCRETE (categorical, no gradient). These modes are in the mechanism catalog but not surfaced in the builder's execution rules. Without knowing the mode, a builder may deploy border-weight incorrectly.

**Status in FINAL prompt:** mechanism-catalog.md is routed to Planner. Builder reads a catalog extract. Application modes would need to be in the extract or referenced explicitly.

**Insertable text (add to C-01 or B3 MECHANISMS section):**
```
Per-mechanism application modes (from catalog, via build plan):
  PROGRESSIVE mode: value continuously changes as content density changes (e.g., 4px->3px->2px->1px)
  DISCRETE mode: value changes categorically at zone or content-type boundaries
  Planner MUST specify mode for each mechanism in build plan. Builder cannot infer mode from rules alone.
```

---

### GAP-17-N1 [NICE-TO-HAVE]: Mechanism #7 zone-color conflict would be caught by programmatic audit

**Source:** File 17, line 245 (POTENTIAL CONFLICT note)
**Finding:** The pure white (#FFFFFF) / U-06 conflict for zone-dense backgrounds would be caught by the programmatic soul audit at Gate 5. This reduces criticality since it will be detected. But builders should know during build (Gate 1-3), not at Gate 5.

---

### GAP-17-N2 [NICE-TO-HAVE]: Silence zone and contrasting deployment clarification

**Source:** File 17, mechanism traceability cross-references (C-12, C-13, MC-05)
**Finding:** The traceability matrix notes that C-12 (rejection log), C-13 (silence zones), and MC-05 (contrasting deployments) address related but distinct concerns. A builder might think C-12 satisfies MC-05, when they measure different things. No clarification in FINAL prompt.

---

## FILE 18: Conviction Accuracy Audit (18-conviction-accuracy.md)

### GAP-18-I1 [IMPORTANT]: DD-006 mechanism count wrong (LOW impact, medium accuracy)

**Source:** File 18, lines 123-136, 215-219
**Finding:** A5 (line 66) says "DD-006 scored 36/40 with 6 mechanisms." In reality, DD-006's mechanism count is contested: 6 (case study extraction), 12 (richness comparison), 16+ (multi-pass audit, HANDOFF.md). Using "6" makes the rhetorical point about mechanism count not predicting quality but uses the lowest estimate. This was already flagged by validator 09 but NOT corrected in the FINAL prompt.

**Impact:** LOW on builder behavior. The principle (mechanism count doesn't predict quality) is valid regardless.

**Insertable text (fix in A5, approximately line 66):**
```
CD-006 deployed ~6-12 with CCS ~0.55 and scored 39/40.
(Note: mechanism count varies 6-16 depending on counting methodology; the scoring gap with Ceiling is valid regardless.)
```

---

### GAP-18-I2 [IMPORTANT]: CD-006 var() count wrong (LOW impact)

**Source:** File 18, lines 186-191, 221-225
**Finding:** A7 (line 92) says "54 var() references." This is the number of :root TOKEN DEFINITIONS, not var() usage references. Actual var() usages = ~270. Already flagged by validator 09 but NOT corrected in the FINAL prompt.

**Impact:** LOW. The ">= 80% token compliance" rule in B10 is what builders test against. The description is misleading but doesn't affect execution.

**Insertable text (fix in A7):**
```
Token compliance: 54 token definitions in :root (~270 var() usages throughout), near-zero hardcoded values.
```

---

### GAP-18-N1 [NICE-TO-HAVE]: Alexander/Salingaros formula notation obscures reasoning

**Source:** File 18, lines 74-78, 227-231
**Finding:** A3 writes `ln(1440/12)/ln(e) = 4.8`. The source formula is `ln(120)/ln(2.7) = 4.8` where 2.7 is the Alexander/Salingaros e-ratio (scaling factor between adjacent scales). The prompt's formula gives the right answer (since ln(e)=1) but hides the scaling-ratio insight. The e-ratio of 2.7 is the actual design principle (each adjacent scale differs by ~2.7x).

**Impact:** NEGLIGIBLE on builder behavior.

**Insertable text (fix in A3):**
```
Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(2.7) ≈ 4.8, where 2.7x is
the minimum perceptual ratio between adjacent scales; beyond 5, adjacent scales merge perceptually).
```

---

### GAP-18-N2 [NICE-TO-HAVE]: Constraint multiplier (4-5x) contested

**Source:** File 18, lines 241-243
**Finding:** A4 says "Surviving channels carry 4-5x semantic weight." Source analysis notes this may be overstated (55% closure yields ~2.2x multiplier mathematically, not 4-5x). The higher figure appears in preparation documents without precise derivation.

**Impact:** NEGLIGIBLE. Direction is correct. The exact number doesn't affect builder rules.

---

## FILE 19: Parameter Verification (19-parameter-verification.md)

### GAP-19-I1 [IMPORTANT]: Void threshold skeleton source citation wrong

**Source:** File 19, lines 89-101 (DISCREPANCY -- SIGNIFICANT)
**Finding:** Parameter table cites "TC-07" as source for the 1620px skeleton void threshold. TC-07 actually contains 2160px, not 1620px. The 1620px value comes from LIVING-STATE.md per the soundness audit. Source citation is wrong.

**Impact:** Source citation misleads someone trying to verify the threshold. The actual rule (S-10 in B1) is correct.

**Fix:** In Appendix parameter table, change source for skeleton void threshold to: `LIVING-STATE.md (consecutive-frame protocol)`.

---

### GAP-19-I2 [IMPORTANT]: Transition type names inconsistent with THRESHOLD-REGISTRY

**Source:** File 19, lines 229-234 (DISCREPANCY -- SIGNIFICANT)
**Finding:** The THRESHOLD-REGISTRY BT-02 uses names: HARD CUT / SPACING SHIFT / CHECKPOINT. The FINAL prompt uses: SMOOTH / BRIDGE / BREATHING (from CD-006 forensics). These are different name sets for the same concept. C-05 maps them: "SMOOTH = catalog SPACING SHIFT, BRIDGE = catalog CHECKPOINT, BREATHING = catalog HARD CUT." This mapping exists but the inconsistency could cause confusion when a builder looks up BT-02 for reference.

**Impact:** MODERATE -- builder confusion if consulting BT-02 directly.

**Insertable text (clarification already partially present in C-05; confirm it's complete):**
```
C-05 NOTE: Transition names in this prompt (SMOOTH/BRIDGE/BREATHING) differ from BT-02 registry
(SPACING SHIFT/CHECKPOINT/HARD CUT). Mapping: SMOOTH=SPACING SHIFT (48px+1px), BRIDGE=CHECKPOINT
(64px+bg+prose), BREATHING=HARD CUT (80px+3px). Both names refer to the SAME mechanism catalog entries.
```

---

### GAP-19-I3 [IMPORTANT]: Designed moments threshold stricter than BT-07 (undocumented expansion)

**Source:** File 19, lines 244-249 (DISCREPANCY -- SIGNIFICANT)
**Finding:** BT-07 requires >= 1 designed moment past 50% scroll depth. The FINAL prompt rule C-09 requires >= 1 designed moment per scroll QUARTILE (4x stricter: 4 moments total). The expansion from BT-07 is undocumented -- no source cited for the per-quartile version. Citing BT-07 in the parameter table is inaccurate since BT-07 only covers the 50% requirement.

**Impact:** The stricter rule is better design. But the source gap means it could be challenged during review.

**Fix:** In parameter table, change source to: "BT-07 (extended) + C-09" or add note: "C-09 extends BT-07 to full per-quartile requirement."

---

### GAP-19-N1 [NICE-TO-HAVE]: Container width discrepancy with soundness audit SC-01

**Source:** File 19, lines 35-41 (DISCREPANCY -- SIGNIFICANT)
**Finding:** Soundness audit SC-01 recommended "max-width: 960px CSS container" (BLOCKING recommendation). FINAL prompt uses 940-1100px based on crown jewel evidence (CD-006 = 1100px). The synthesizer made a deliberate decision to use the wider range. This is documented but the parameter table source says "Identity layer + CD-006 forensics" which doesn't acknowledge the SC-01 deviation.

**Impact:** LOW -- the decision is justified by empirical evidence. But transparency about overriding SC-01 is missing.

---

### GAP-19-N2 [NICE-TO-HAVE]: Master prompt length cap (250 vs TC-05's 240)

**Source:** File 19, lines 171-176 (DISCREPANCY -- MINOR)
**Finding:** TC-05 says 240 lines. Table says 250 soft cap. Actual FINAL prompt is ~248 lines. Minor discrepancy.

---

### GAP-19-N3 [NICE-TO-HAVE]: Restraint ratio source citation wrong (TC-04 doesn't contain it)

**Source:** File 19, lines 336-342 (DISCREPANCY -- MINOR)
**Finding:** Parameter table cites TC-04 for the 1.5:1 restraint ratio. TC-04 contains mechanism COUNT targets (12-14), not restraint ratio. The 1.5:1 value comes from Report 04 (flagship preparation restraint protocol).

**Fix:** Change source to: "Report 04 (restraint protocol, flagship-prep-crossref.md line 44)".

---

### GAP-19-N4 [NICE-TO-HAVE]: Communication requirement min-8-messages source incomplete

**Source:** File 19, lines 201-204 (DISCREPANCY -- MINOR)
**Finding:** Parameter table cites TC-06 for "File + SendMessage (min 8 messages)." TC-06 covers the dual requirement (file + message) but NOT the "min 8" number. The "min 8" comes from flagship-preparation report 06.

**Fix:** Change source to: "TC-06 (dual requirement) + flagship-prep report 06 (min 8 count)".

---

## FILE 20: Agent Routing Completeness (20-agent-routing-completeness.md)

### GAP-20-C1 [CRITICAL]: Two file paths don't exist on disk (BLOCKING execution)

**Source:** File 20, lines 287-292 (FLAG F-02 -- BLOCKING)
**Finding:**
1. `design-system/compositional-core/components/merged-components.css` -- does NOT exist. Actual files: `components.css`, `components-dd-od.css`, `components-cd-tt.css`
2. `design-system/compositional-core/case-studies/_INDEX.md` -- does NOT exist. Actual file: `README.md` in case-studies directory

These are referenced in the AUXILIARY-EXECUTION-WRAPPER.md Phase 1A (Reads #5 and #6). The team-lead will fail to execute these reads during Phase 1A pre-loading.

**Status in FINAL prompt:** The FINAL prompt itself (Section E) does NOT explicitly list these paths -- they appear in the Wrapper, not the prompt. However, if the Wrapper is used alongside the prompt, these BLOCKING path errors will prevent execution.

**Insertable text (corrections for Wrapper -- not the prompt itself):**
```
Wrapper Phase 1A Read #5: design-system/compositional-core/components/components.css
Wrapper Phase 1A Read #6: design-system/compositional-core/case-studies/README.md
(Note: merged-components.css and _INDEX.md do not exist on disk as of 2026-02-17)
```

---

### GAP-20-C2 [CRITICAL]: Planner not in C1 agent roster (implied role, never explicitly spawned)

**Source:** File 20, lines 298-303 (FLAG F-03b -- SIGNIFICANT)
**Finding:** The FINAL prompt Section E routes 6 files to "PLANNER." Section B8 (TC Pipeline) says "TC Phase 4 (Compositional Layout): -> Planner (Opus)." But Section C1 (Agent Roster) does NOT include a Planner agent. The Planner exists in communication protocol references (CP-A says "Builder -> Planner") but is never formally spawned in the coordination spec.

**Status in FINAL prompt:** Planner referenced in B8, B9, C2, E but absent from C1 agent roster.

**Insertable text (add to C1 Agent Roster between Pass 0 and Pass 1):**
```
PASS 0.5: Build Planning
  - Planner (Opus): receives 01-content-assessment.md + 02-metaphor-derivation.md. Reads:
    mechanism-catalog.md, semantic-rules.md, 16-multi-coherence-invocation.md, 15-scale-channel-invocation.md.
    Produces: 03-build-plan.md with mechanism deployment map, MC-deployment-map, spatial budget,
    section ordering. MUST include: per-category mechanism minimums (C-01), MC plan (>= 3 reinforcing,
    >= 2 modulating, >= 1 cascade documented), channel ownership assignments.
  -> GATE 0.5: Content Quality (CT-01 through CT-08 gates)
```
(Note: This definition already appears in C1 at line 389-396 of FINAL prompt. Verification needed: does C1 already include Planner? If so, gap is resolved. File 20 flagged this against the older enriched prompt.)

**REVISED STATUS:** Reviewing FINAL prompt C1 (lines 389-396): "PASS 0.5: Build Planning -- Planner (Opus)..." -- Planner IS in C1. This gap may be RESOLVED in the FINAL prompt. However, the Planner does NOT appear in the communication protocol escalation section (C2) as a named recipient for all 5 CP checkpoints.

**Residual gap:** CP-A says "Builder -> Planner" but if this is Pass 0.5 planner, they only exist during Pass 0.5. Checkpoints CP-B through CP-E reference Team-Lead only. Builders in later passes have no Planner to message. This is correct operationally but should be clarified.

---

### GAP-20-I1 [IMPORTANT]: Content-Architect reads mechanism extract, violating P-02

**Source:** File 20, lines 295-301 (FLAG F-03a -- SIGNIFICANT)
**Finding:** The Wrapper assigns `00-mechanisms-extract.md` to the Content Architect. But Prompt rule P-02 says "Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in." Content Architect operates BEFORE metaphor derivation (Pass 0, which precedes the Metaphor Agent's work). If the Content Architect reads mechanism catalog extracts, P-02 is violated.

**Impact:** P-02 exists to prevent content assessment from being contaminated by mechanism vocabulary (which would bias the metaphor derivation). If Content Architect reads mechanisms first, the metaphor may be "mechanism-forward" rather than "content-forward."

**Insertable text (modify in Wrapper and/or add to P-02 in B7):**
```
P-02. Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in.
      ENFORCEMENT: Content Architect reads [content inventory] and [semantic-rules-extract] ONLY.
      Mechanism catalog (00-mechanisms-extract.md) withheld until AFTER Gate 0 / TC Phase 3.5.
      Planner (Pass 0.5) is the first agent to receive mechanism catalog access.
```

---

### GAP-20-I2 [IMPORTANT]: "Content-form alignment analysis" unresolved file reference

**Source:** File 20, lines 344-354 (FLAG F-05 -- SIGNIFICANT)
**Finding:** Section E says "INTENTIONALITY BUILDER reads: Content-form alignment analysis (13-compositional-fluency.md)" but the FINAL prompt specifically names `05-content-first-methodology.md` at Section E line 591: "ephemeral/flagship-preparation/05-content-first-methodology.md."

**REVISED STATUS:** Checking FINAL prompt Section E (line 591): "Intentionality Builder reads: ... ephemeral/flagship-preparation/05-content-first-methodology.md -- content-form alignment analysis." This IS resolved in the FINAL prompt. File 20 flagged this against the older enriched prompt version.

**Residual gap (MINOR):** File 20 notes this file is not in the Wrapper's Phase 2 agent assignments. If the Wrapper is not updated to route this file to the Intentionality Builder agent spawn, the builder will not have it despite the prompt listing it.

---

### GAP-20-I3 [IMPORTANT]: 00-components-extract.md and 00-case-studies-extract.md orphaned

**Source:** File 20, lines 274-281 (FLAG F-01 -- SIGNIFICANT)
**Finding:** Two extraction files are created by the team-lead in Phase 1A but no agent in Phase 2 consumes them:
- `00-components-extract.md` -- component CSS patterns
- `00-case-studies-extract.md` -- case study precedents

These are valuable context for builders. The FINAL prompt Section E does route them to the BUILDER: "00-components-extract.md -- component CSS patterns (from wrapper extraction)" and "00-case-studies-extract.md -- case study precedents (from wrapper extraction)." So they ARE assigned in the prompt.

**REVISED STATUS:** Routing IS in the FINAL prompt Section E. The orphan issue was against the older prompt. **Likely resolved.**

**Residual gap:** The Wrapper's Phase 2 agent-spawn instructions must explicitly give these files to the Mechanism Builder and/or Skeleton Builders. If Wrapper is not updated, the files sit unused despite the prompt assigning them.

---

### GAP-20-I4 [IMPORTANT]: 16-multi-coherence-invocation.md not assigned to Mechanism Builder

**Source:** File 20 routing tables + File 15 D-03 analysis
**Finding:** The Mechanism Builder (Sonnet, Pass 2) deploys all CSS mechanisms that create the multi-coherence interaction types (reinforcing pairs, modulating chains, cascades). But the Mechanism Builder's Section E reading list does NOT include `16-multi-coherence-invocation.md`. The Planner and Metaphor Builder read it, but the builder who implements the CSS does not.

**Status in FINAL prompt:** ABSENT from Mechanism Builder reading list.

**Insertable text (add to Section E MECHANISM BUILDER reads):**
```
MECHANISM BUILDER reads (in addition to build plan, tokens, prohibitions, extracts):
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md
    (Section 2 only: operational definitions of 5 interaction types + per-pair binary checks)
```

---

### GAP-20-N1 [NICE-TO-HAVE]: Pre-flight files E1-E4, S1-S4 have no paths

**Source:** File 20, lines 346-348 (FLAG F-06 -- MINOR)
**Finding:** Section E says "TEAM-LEAD reads: All pre-flight files (E1-E4, S1-S4)" but no file paths are given. These appear to reference pre-flight execution context from an earlier project phase. The content is largely subsumed by the enriched prompt itself.

**Impact:** LOW. Team-lead reads the full prompt which covers this content.

---

### GAP-20-N2 [NICE-TO-HAVE]: 00-pa-skill-extract.md redundant but not harmful

**Source:** File 20, lines 277-279 (FLAG F-01c -- MINOR)
**Finding:** The Wrapper creates a PA skill extract but PA auditors receive the full 847-line skill file directly. The extract is never consumed.

**Impact:** Wasted work (one extraction pass). No execution harm.

---

## CONSOLIDATED GAP LIST (FINAL PRIORITY RANKING)

### CRITICAL (must add before execution)

| ID | Source | Gap | Fix Location |
|----|--------|-----|--------------|
| GAP-15-C1 | File 15 D-03 | 16-MC operational details not reachable by Mechanism Builder (CSS implementer) | Section E, MECHANISM BUILDER reads |
| GAP-15-C2 | File 15 D-09 | CCS test method underpowered (3+ vs source's 5+) | MC-01 in B4 |
| GAP-15-C3 | File 15 D-11/D-12 | 15-pair dimension matrix not enumerated; 6 dimensions not named in prompt | MC-07 in B4 |
| GAP-14-C1 | File 14 lines 11-18 | 5 scales never named or defined in prompt | Section B5 after SC-01 |
| GAP-17-C1 | File 17 lines 244-245 | Mechanism #7 zone-dense (#FFFFFF) potential U-06 violation not flagged | U-06 in B2 |
| GAP-20-C1 | File 20 FLAG F-02 | Two file paths don't exist on disk (blocking Wrapper Phase 1A) | AUXILIARY-EXECUTION-WRAPPER.md |
| GAP-20-C2 | File 20 FLAG F-03b | Planner unclear spawn timing re: communication protocol in later passes | C2 communication protocol clarification |

### IMPORTANT (add before execution if possible)

| ID | Source | Gap | Fix Location |
|----|--------|-----|--------------|
| GAP-14-I1 | File 14 line 94 | C-19 binary gate not in builder self-check B10 | B10 self-check |
| GAP-14-I2 | File 14 line 104 | SC-07 verification method missing | SC-07 or B10 |
| GAP-14-I3 | File 15 D-14 | Fractal scale contradiction (5 vs 2-3 preferred) unresolved with explanation | B5 or B12 |
| GAP-15-I1 | File 15 D-02,04,06,07,08 | Per-interaction-type binary verification checks absent | B4 sub-section |
| GAP-15-I2 | File 15 D-13 | C-11 = MC-08 duplicate; contour requirement absent | C-11 in B3 |
| GAP-15-I3 | File 15 lines 460-468 | Independence penalty (MC denominator) not tracked | B4 note or Section D |
| GAP-15-I4 | File 15 D-16 | Per-agent MC responsibilities not in agent roster | C1 per-agent notes |
| GAP-17-I1 | File 17 all mechanisms | Mechanism-to-PA-question map absent (for targeted fix routing) | C6 PA-to-TC routing |
| GAP-17-I2 | File 17 application modes | Application mode (PROGRESSIVE vs DISCRETE) not in builder rules | C-01 in B3 |
| GAP-18-I1 | File 18 lines 123-136 | DD-006 mechanism count uses lowest estimate ("6") -- contested | A5 line 66 |
| GAP-18-I2 | File 18 lines 186-191 | CD-006 var() count error (54 definitions ≠ 54 usages) | A7 line 92 |
| GAP-19-I1 | File 19 lines 89-101 | Skeleton void threshold source citation wrong (TC-07 ≠ 1620px) | Appendix parameter table |
| GAP-19-I2 | File 19 lines 229-234 | Transition type names conflict with BT-02 registry names | C-05 clarification note |
| GAP-19-I3 | File 19 lines 244-249 | Designed moments per-quartile expansion from BT-07 undocumented | Appendix source citation |
| GAP-20-I1 | File 20 FLAG F-03a | Content-Architect reads mechanism extract, violating P-02 | P-02 in B7 |
| GAP-20-I2 | File 20 FLAG F-05 | Content-form alignment analysis file reference -- confirm path in Wrapper Phase 2 | Wrapper Phase 2 spawn instructions |
| GAP-20-I3 | File 20 FLAG F-01 | Orphan extracts must be confirmed routed in Wrapper Phase 2 (already in FINAL prompt Section E) | Wrapper Phase 2 |
| GAP-20-I4 | File 20 + File 15 | 16-MC not assigned to Mechanism Builder (Sonnet, CSS implementer) | Section E, MECHANISM BUILDER |

---

## KEY OBSERVATIONS

### 1. Most flags against older prompt (10-ENRICHED) may be RESOLVED in FINAL

Several discrepancies (D-03, D-14, D-09, F-01, F-03b) were flagged against the older `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`. The FINAL prompt (v2) applied 7 BLOCKING + 10 HIGH fixes. Before applying any fixes from this report, the team-lead should verify each gap against the FINAL prompt directly, as many may already be resolved.

### 2. The Mechanism Builder (Sonnet) is the critical routing gap

The most systemic issue is that the Mechanism Builder -- who writes all CSS that creates interaction types -- does NOT read `16-multi-coherence-invocation.md`. The Planner plans it, the Metaphor Builder validates it, but the CSS implementer lacks the operational definitions and verification checks. This is the highest-leverage single fix.

### 3. The Wrapper has higher-severity gaps than the prompt

File 20's BLOCKING issues (file paths that don't exist) are in the AUXILIARY-EXECUTION-WRAPPER.md, not the FINAL prompt itself. The FINAL prompt rules are largely sound; the execution infrastructure (Wrapper Phase 1A) has BLOCKING path errors.

### 4. Binary verification methods are the systematic gap

Across files 14, 15, 17: the pattern is consistent. Rules exist. Thresholds exist. Binary verification methods (HOW to check) are absent. For SC-07, MC-03, MC-04, MC-05, MC-06, MC-07 -- builders know the threshold but not how to verify compliance. This affects Gate 3 execution quality.

---

**END SCAN-G-validation-14-20.md**
**Total gaps documented: 46 (7 CRITICAL + 19 IMPORTANT + 20 NICE-TO-HAVE)**
**Pre-verification note: Several gaps may be already resolved in FINAL v2 -- verify before applying.**
