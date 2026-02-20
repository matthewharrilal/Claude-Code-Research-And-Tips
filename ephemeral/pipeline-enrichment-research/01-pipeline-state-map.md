# Pipeline State Map: Compositional Intelligence Stack vs. Current Pipeline Files

**Agent:** pipeline-state-mapper
**Date:** 2026-02-20
**Input Files:**
1. `~/.claude/skills/build-page/SKILL.md` (408 lines) -- the orchestrator
2. `design-system/pipeline/conventions-brief.md` (403 lines) -- builder's primary guidance
3. `design-system/pipeline/gate-runner.md` (992 lines) -- 21 programmatic gates
4. `design-system/pipeline/flagship-pa-questions.md` (144 lines) -- 8 Tier 5 questions

---

## METHODOLOGY

For every concept in the Compositional Intelligence Stack, I trace:
- **WHERE** it appears (which file(s))
- **WHAT LINE(S)** it appears at
- **GRANULARITY:** FULL (richly developed, multi-paragraph, structural), PARTIAL (mentioned with some development), ONE-LINE (named but not developed), ABSENT (not present), COMPRESSED-TO-NUMBER (reduced to a numeric threshold with no compositional reasoning)

---

## PART 1: FIVE SCALE TRACERS

### Scale 1: Navigation (~1440px -- Header/nav set tone and density)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | ABSENT | ABSENT | No mention of navigation scale. Header mentioned only as "header/footer" in deliverable gates. |
| conventions-brief.md | 130-142 | PARTIAL | Fractal Echo Table Row 1: "Navigation ~1440px: Header/nav set tone and density. Min threshold: Header padding >= 48px, visible at 20% zoom." Also L190: "Dark Slab Inversion" for header/footer. But no compositional discussion of how navigation SETS the page's scale language. |
| gate-runner.md | ABSENT | ABSENT | No gate measures navigation-scale expression. DG-3 (line 887-905) checks header/main/footer EXIST but not their compositional quality. |
| flagship-pa-questions.md | ABSENT | ABSENT | No Tier 5 question addresses navigation scale specifically. |

**Assessment:** Navigation scale is a TABLE ROW in conventions-brief but has zero programmatic verification and zero perceptual audit coverage. It exists as a planning prompt ("what expresses here?") but nothing verifies the answer.

---

### Scale 2: Page (~960px -- Zones sequence across scroll)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 17-18, 123-134 | COMPRESSED-TO-NUMBER | Container 940-960px (L17). SC-09: bg delta >= 15 RGB (L131). SC-12: zone count (not in table but implied). Page scale = zone-boundary verification only. |
| conventions-brief.md | 26-27, 51-68, 130-142 | FULL | Container 940-960px (L26). Full Section 2 PERCEPTION (L51-68) establishes page-scale physics. Fractal Echo Table Row 2: "Page ~960px: Zones sequence across scroll. BG delta >= 15 RGB." Section 4 Multi-Coherence (L91-123) is fundamentally about page-scale zone boundaries. |
| gate-runner.md | 145-168, 170-206, 299-322, 326-405 | FULL | SC-01 container width (L145-168). SC-09 background delta (L170-206). SC-12 zone count (L299-322). SC-13 multi-coherence at zone boundaries (L326-405). Page scale is the MOST heavily gated scale. |
| flagship-pa-questions.md | ABSENT as explicit scale | ABSENT | No Tier 5 question explicitly names "page scale." PA-62 (transition variation) and PA-66 (negative space) touch page-scale phenomena but don't frame them as scale. |

**Assessment:** Page scale is the best-covered scale -- multiple gates, rich conventions-brief treatment, structural thresholds. But it is never NAMED as "page scale" in gates or PA; it is expressed through zone-boundary mechanics without the scale framing.

---

### Scale 3: Section (~200-400px -- Elements arrange within one viewport)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | ABSENT | ABSENT | No mention of section-scale verification or requirements. |
| conventions-brief.md | 130-142 | PARTIAL | Fractal Echo Table Row 3: "Section ~200-400px: Elements arrange within one viewport. >= 2 component types per viewport." Also L79: "At least 2 distinct component types per viewport-height screenful." |
| gate-runner.md | ABSENT | ABSENT | No gate measures section-scale expression (components per viewport, within-section layout diversity). SC-08 counts component TYPES globally but not per-section distribution. |
| flagship-pa-questions.md | 9-18 (PA-60) | PARTIAL | PA-60 "design moment density" implicitly tests section-scale uniqueness ("places where visual treatment does something unique"). But framed as "moments" not "section scale." |

**Assessment:** Section scale has a threshold in the fractal echo table (>= 2 component types per viewport) but ZERO programmatic verification. The conventions-brief establishes the concept; nothing enforces it. PA-60 partially covers section-scale design moments but doesn't frame it as scale.

---

### Scale 4: Component (~40-100px -- Content organizes inside one element)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 130 | COMPRESSED-TO-NUMBER | SC-08: >= 8 component types. Component scale reduced to a count. |
| conventions-brief.md | 130-142, 186-192 | PARTIAL | Fractal Echo Table Row 4: "Component ~40-100px: Content organizes inside one element. Label/body padding delta >= 4px." Section 8 CSS Vocabulary (L186): "Component 2-Zone DNA" describes label/body internal structure. Parametric echo (L144): "Components in dense zones should have tighter internal padding." |
| gate-runner.md | 794-829 | COMPRESSED-TO-NUMBER | SC-08 counts component CLASS FAMILIES (>= 8 types). Does not verify component INTERNAL structure (label/body DNA, padding delta, parametric echo). |
| flagship-pa-questions.md | 51-59 (PA-63) | FULL | PA-63 "Fractal Zoom Coherence": "Zoom into one component... Does its internal design echo the page's overall design language at a smaller scale?" This IS component-scale verification through perceptual audit. |

**Assessment:** Component scale has a rich description in conventions-brief (2-Zone DNA, parametric echo) but programmatic gates only count types, not internal quality. PA-63 is the ONLY verification that component internals echo page-level language. The fractal echo table threshold (padding delta >= 4px) has no gate.

---

### Scale 5: Character (~12-20px -- Micro-typography shifts)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 405 | ONE-LINE | "No letter-spacing below 0.025em. No sub-perceptual micro-typography." Framed as a prohibition, not as a scale. |
| conventions-brief.md | 130-142, 58-59 | PARTIAL | Fractal Echo Table Row 5: "Character ~12-20px: Micro-typography shifts. ONLY after Page scale verified." L140: "DEPENDENCY: Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation." L58-59: letter-spacing thresholds. But character scale is framed as OPTIONAL and LAST, with warnings about wasted CSS budget. |
| gate-runner.md | 409-464 | FULL (as prevention) | SC-14: Sub-Perceptual Prevention. 3 sub-checks preventing invisible character-scale CSS. But this gate is NEGATIVE (prevent bad character-scale work) not POSITIVE (verify good character-scale work). |
| flagship-pa-questions.md | ABSENT | ABSENT | No Tier 5 question addresses character-scale expression. |

**Assessment:** Character scale is thoroughly covered as a DANGER ZONE (sub-perceptual prevention) but has zero positive verification. The pipeline can confirm "you didn't waste CSS on invisible micro-typography" but cannot confirm "your character-scale work is compositionally meaningful." The fractal echo table dependency (build character ONLY after page scale is verified) has no enforcement mechanism.

---

### SCALE COVERAGE SUMMARY

| Scale | Conventions-Brief | SKILL.md | Gate-Runner | PA Questions | Verdict |
|-------|-------------------|----------|-------------|--------------|---------|
| Navigation | PARTIAL (table row) | ABSENT | ABSENT | ABSENT | **WEAKEST.** Planning prompt only, zero enforcement. |
| Page | FULL | COMPRESSED | FULL (4 gates) | Implicit only | **STRONGEST.** Most gated, most described. |
| Section | PARTIAL (table row) | ABSENT | ABSENT | PARTIAL (PA-60) | **WEAK.** Threshold exists, no enforcement. |
| Component | PARTIAL (DNA, parametric) | COMPRESSED | COMPRESSED (count) | FULL (PA-63) | **SPLIT.** Rich description, thin gate, one strong PA. |
| Character | PARTIAL (warnings) | ONE-LINE | FULL (prevention) | ABSENT | **INVERTED.** Heavily policed as danger, never assessed as asset. |

**The scale stack's fundamental gap:** Conventions-brief describes all 5 scales in the fractal echo table. But only Page scale has gates. The "build largest first, verify before proceeding" instruction (conventions-brief L130) has ZERO enforcement -- no micro-gate checks scale build order. The fractal echo table is a planning artifact; the gate runner doesn't validate it was followed.

DG-1 (gate-runner L561-581) validates the fractal echo TABLE DELIVERABLE (5 rows exist, CSS evidence non-empty, pattern direction consistent). But this validates the DOCUMENT, not the HTML. A builder could write a perfect fractal echo table and produce HTML with no fractal expression.

---

## PART 2: SIX CHANNEL TRACERS

### Channel 1: Chromatic (background-color shift)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 131, 405 | COMPRESSED-TO-NUMBER | SC-09: >= 15 RGB (L131). "No stacked gaps above 120px" (L405). |
| conventions-brief.md | 53-57, 96 | FULL | Full perception physics for backgrounds (L53-57): "at least one RGB channel differs by 15 or more points." Multi-coherence channel 1 (L96): "background-color shift (the strongest visual signal)." |
| gate-runner.md | 170-206, 363-366 | FULL | SC-09: full programmatic check with zone iteration, RGB parsing, delta calculation (L170-206). SC-13 sub-check Ch1 (L363-366): chromatic shift detection at boundaries. |
| flagship-pa-questions.md | ABSENT explicit | ABSENT | No Tier 5 question explicitly asks about chromatic shifts. PA-62 (transition variation) asks about "visual properties" generally. |

**Assessment:** Chromatic channel is the most thoroughly specified and gated channel. FULL coverage in conventions-brief + gate-runner. The 15 RGB threshold is everywhere. Gap: no PA question specifically evaluates chromatic QUALITY (hue narrative, warmth progression, semantic color use).

---

### Channel 2: Typographic (font-size, font-weight, letter-spacing, line-height shift)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 133, 405 | COMPRESSED-TO-NUMBER | SC-11: >= 3 distinct font-size zones (L133). "No letter-spacing below 0.025em" (L405). |
| conventions-brief.md | 58-59, 97, 186-196 | FULL | Perception thresholds (L58-59): "2px font-size delta and 0.03em letter-spacing delta." Multi-coherence channel 2 (L97). CSS Vocabulary (L186-196): Component 2-Zone DNA, drop cap, font weight specification. Section Meta Self-Documentation (L194). |
| gate-runner.md | 247-294, 369-371, 409-464 | FULL | SC-11: typography zone hierarchy with Flagship elevation (L247-294). SC-13 sub-check Ch2 (L369-371): font-size >= 2px OR font-weight >= 100 delta. SC-14: sub-perceptual letter-spacing prevention (L409-464). |
| flagship-pa-questions.md | ABSENT explicit | ABSENT | No Tier 5 question specifically addresses typographic channel. |

**Assessment:** Typographic channel is well-covered programmatically (SC-11 + SC-14 + SC-13 Ch2). Rich conventions-brief description. But no PA question evaluates typographic COMPOSITION (rhythm of weight changes, editorial hierarchy feeling, serif/sans role coherence).

---

### Channel 3: Spatial (padding, margin, content density shift)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 132, 405 | COMPRESSED-TO-NUMBER | SC-10: <= 120px stacked gap (L132). "No single margin or padding value exceeds 96px" referenced from conventions brief. |
| conventions-brief.md | 60-61, 98, 28 | PARTIAL | Stacked gap physics (L60-61): "above 120px create voids." Multi-coherence channel 3 (L98): "padding, margin, or content density shift." Spacing scale (L28): "4px base unit: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96." But no rich discussion of spatial COMPOSITION -- how spacing creates rhythm, how density varies across zones. |
| gate-runner.md | 209-244, 373-375 | PARTIAL | SC-10: stacked gap prevention (L209-244). SC-13 sub-check Ch3 (L373-375): padding delta >= 24px. But spatial measurement is limited to TOTAL GAP and BINARY shift detection. No gate measures spatial RHYTHM (variance of spacing values, density arc). |
| flagship-pa-questions.md | 93-103 (PA-66) | FULL | PA-66 "Negative Space Variety": "Are they all the same 'flavor' of emptiness, or do different gaps feel different?" This IS spatial channel perceptual verification. |

**Assessment:** Spatial channel is gated for failure prevention (no voids, no stacking) but not for quality (spatial rhythm, density arc, composed vs. default spacing). PA-66 is the sole quality check. Conventions-brief provides the spacing SCALE but not a spatial COMPOSITION guide.

---

### Channel 4: Structural (border-left weight, horizontal rules, divider presence)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 63-64, 134 | PARTIAL | Builder checkpoints: ">= 1 structural border-left (3px+)? >= 2 distinct border weights?" (L63-64). SC-13 measures structural channel at boundaries. |
| conventions-brief.md | 85, 188-189, 99, 280 | FULL | "The 3-tier border system (4px / 3px / 1px)" (L85). "3-Tier Border Budget" (L188-189): "4px for accent, 3px for structural, 1px for data separators. The 2px weight does not exist." Multi-coherence channel 4 (L99). Restraint list (L280): "decorative borders (top + bottom on callouts -- ONLY left-border)." |
| gate-runner.md | 469-505, 377-382 | FULL | SC-15: border/structural presence with Flagship elevation (L469-505): >= 3 distinct border configurations. SC-13 sub-check Ch4 (L377-382): border configuration change detection. |
| flagship-pa-questions.md | ABSENT | ABSENT | No Tier 5 question explicitly addresses structural/border channel. |

**Assessment:** Structural channel is well-defined in conventions-brief (3-tier budget is one of the richest vocabulary descriptions) and well-gated (SC-15 + SC-13 Ch4). But no PA question evaluates structural COMPOSITION (whether border configurations form a meaningful hierarchy, whether structural rhythm is designed vs. arbitrary).

---

### Channel 5: Behavioral (hover states, transition timing)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | ABSENT explicit | ABSENT | Not mentioned as a channel. No gate references behavioral channel by name. |
| conventions-brief.md | 100 | ONE-LINE | Multi-coherence channel 5 (L100): "hover states, transition timing change." Also L103: "Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four." |
| gate-runner.md | 383-387 | COMPRESSED-TO-NUMBER | SC-13 sub-check Ch5 (L383-387): binary transition presence/absence check. Does not evaluate transition QUALITY (timing, easing, what triggers hover). |
| flagship-pa-questions.md | ABSENT | ABSENT | No Tier 5 question addresses behavioral channel. |

**Assessment:** Behavioral channel is the THINNEST channel across all files. One line in conventions-brief classifying it as "enhancement." One binary check in SC-13 (transition present vs absent). Zero PA coverage. No vocabulary description of what good behavioral expression looks like.

---

### Channel 6: Material (surface treatment, component density)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | ABSENT explicit | ABSENT | Not mentioned as a channel anywhere. |
| conventions-brief.md | 101 | ONE-LINE | Multi-coherence channel 6 (L101): "surface treatment or component density change." Enhancement channel status (L103). |
| gate-runner.md | 388-391 | COMPRESSED-TO-NUMBER | SC-13 sub-check Ch6 (L388-391): backgroundImage comparison only. Does not measure "component density" -- only texture/image presence. |
| flagship-pa-questions.md | ABSENT | ABSENT | No Tier 5 question addresses material channel. |

**Assessment:** Material channel is effectively PHANTOM. Defined in conventions-brief, barely measured in gate-runner (only backgroundImage, missing component density entirely), zero PA coverage, zero vocabulary guidance. A builder has no idea what "good material channel expression" looks like.

---

### CHANNEL COVERAGE SUMMARY

| Channel | Conventions-Brief | SKILL.md | Gate-Runner | PA Questions | Verdict |
|---------|-------------------|----------|-------------|--------------|---------|
| Chromatic | FULL | COMPRESSED | FULL (SC-09, SC-13) | ABSENT | **STRONG programmatic, ABSENT perceptual.** |
| Typographic | FULL | COMPRESSED | FULL (SC-11, SC-14, SC-13) | ABSENT | **STRONG programmatic, ABSENT perceptual.** |
| Spatial | PARTIAL | COMPRESSED | PARTIAL (prevention) | FULL (PA-66) | **Split: programmatic prevents failure, PA checks quality.** |
| Structural | FULL | PARTIAL | FULL (SC-15, SC-13) | ABSENT | **STRONG programmatic, ABSENT perceptual.** |
| Behavioral | ONE-LINE | ABSENT | COMPRESSED (binary) | ABSENT | **WEAKEST. Near-phantom.** |
| Material | ONE-LINE | ABSENT | COMPRESSED (image only) | ABSENT | **PHANTOM. Defined but unmeasured.** |

**The channel stack's fundamental gap:** The 4 primary channels (Chromatic, Typographic, Spatial, Structural) have solid programmatic coverage but ZERO dedicated PA questions. Channels 5 and 6 are explicitly "enhancement" but have no vocabulary guidance whatsoever -- a builder doesn't know what to DO with them. The gate-runner measures WHETHER channels shift but not WHETHER shifts are COMPOSITIONALLY MEANINGFUL. That judgment gap is supposed to be covered by PA, but PA has no channel-specific questions.

---

## PART 3: THREE STACK TRACERS

### Multi-Coherence

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 134, 363-364 | PARTIAL | Gate SC-13 in table (L134): ">= 3 of 6 channels shift at every zone boundary, avg >= 4." Success bar (L363-364): "Multi-coherence verified (SC-13 PASS + PA-61 agreement)." Two-prong verification named. |
| conventions-brief.md | 91-123 | FULL | Section 4 MULTI-COHERENCE is the most developed section in the entire brief. 6 channels named (L96-102). 4 primary vs 2 enhancement (L103). Semantic direction defined with 4 archetypes: DEEPENING/OPENING/FOCUSING/RESOLVING (L107-112). Contradiction detection (L114). Concrete example (L116). Layout diversity shortcut (L118). Global coherence as Flagship requirement (L120). Boundary naming convention (L122). |
| gate-runner.md | 326-405, 508-524 | FULL | SC-13: complete 6-channel measurement at every zone boundary (L326-405). Known limitation stated (L401-402): "Counts channels but CANNOT judge if shifts serve the SAME semantic direction." SC-13B advisory: direction coherence heuristic (L508-524). |
| flagship-pa-questions.md | 23-35 (PA-61) | FULL | PA-61 "Multi-Voice Composition": "Do different visual properties seem to have their own independent rhythms?" Detects channel independence. PA-65 (L79-88) also tests multi-voice via music analogy. |

**Assessment:** Multi-coherence is the BEST-COVERED concept in the entire stack. Rich conventions-brief description, programmatic gate with known limitation acknowledged, advisory direction check, AND two PA questions (PA-61 + PA-65). The gap is narrow: SC-13 counts shifts but can't judge semantic direction; SC-13B tries but is only ~50% confident; PA-61/PA-65 fill this gap perceptually.

---

### Anti-Scale Model (Richness = semantic density x restraint x spatial confidence)

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | ABSENT as model | ABSENT | The three factors (density, restraint, spatial confidence) are individually present as thresholds (>= 14 mechanisms, >= 800 CSS lines, >= 8 component types) but the GOVERNING MODEL is absent. The equation "richness = density x restraint x spatial confidence" never appears. |
| conventions-brief.md | 73-88 | FULL | Section 3 RICHNESS is devoted entirely to the anti-scale model. Formula stated (L75): "Richness = semantic density x restraint x spatial confidence." Zero-factor rule (L77): "Zero in any factor produces zero richness." Each factor defined with self-tests: Density (L79-81), Restraint (L83), Spatial confidence (L85-87). |
| gate-runner.md | ABSENT as model | ABSENT | Individual factors are measured (SC-08 for component count = proxy for density, SC-10 for void prevention = proxy for spatial confidence) but the MODEL is absent. No gate measures restraint. No gate checks the multiplicative relationship. |
| flagship-pa-questions.md | 65-76 (PA-64) | PARTIAL | PA-64 "Restraint as Expression": "Is there a section that is DELIBERATELY plain?" Tests the restraint factor specifically. But the full model (density x restraint x confidence = richness) is not tested as a whole. |

**Assessment:** The anti-scale model is FULLY described in conventions-brief but ABSENT from the orchestrator and gate-runner as a governing principle. Its three factors appear as scattered thresholds without the unifying equation. PA-64 covers restraint specifically. The model's key insight -- that zero in any factor collapses richness -- has no verification mechanism. A page could pass all gates with high density and zero restraint (maximalist noise) because no gate checks the multiplicative relationship.

---

### Fractal Self-Similarity

| File | Lines | Granularity | Evidence |
|------|-------|-------------|----------|
| SKILL.md | 157-164 | PARTIAL | DG-1 fractal echo table validation (L157-158): "5 rows, CSS evidence non-empty, pattern direction consistent." DG-4 sub-check 3 (L163): ">= 1 in each of 5 categories." Success bar (L364): "Scale coverage verified (DG-1 valid + PA-63 agreement)." |
| conventions-brief.md | 126-149 | FULL | Section 5 FRACTAL ECHO. Scale build order table (L130-138). DEPENDENCY rule (L140): character without page = orphaned variation. Priority hierarchy (L142): "Navigation + Page + Component are mandatory strong." Parametric echo (L144): degree varies by page zone. Fractal Echo Table deliverable (L146-148). |
| gate-runner.md | 561-581 | PARTIAL | DG-1: validates fractal echo TABLE (5 rows, CSS evidence, pattern direction). But validates the DOCUMENT not the HTML. "A builder could write a perfect fractal echo table and produce HTML with no fractal expression." |
| flagship-pa-questions.md | 51-59 (PA-63) | FULL | PA-63 "Fractal Zoom Coherence": "Zoom into one component... Does its internal design echo the page's overall design language at a smaller scale?" Direct fractal self-similarity perceptual test. |

**Assessment:** Fractal self-similarity has rich conventions-brief description, a deliverable gate (DG-1) that validates the planning artifact, and a strong PA question (PA-63). The gap: DG-1 validates a TABLE not HTML output. There is no programmatic gate that measures whether the page's HTML actually exhibits fractal expression. PA-63 fills this gap perceptually but only at the component-to-page scale relationship, not across all 5 scales.

---

### STACK COVERAGE SUMMARY

| Concept | Conventions-Brief | SKILL.md | Gate-Runner | PA Questions | Verdict |
|---------|-------------------|----------|-------------|--------------|---------|
| Multi-Coherence | FULL (Section 4) | PARTIAL | FULL (SC-13 + SC-13B) | FULL (PA-61, PA-65) | **BEST COVERED. Model gap: direction judgment.** |
| Anti-Scale Model | FULL (Section 3) | ABSENT as model | ABSENT as model | PARTIAL (PA-64) | **DESCRIBED but UNVERIFIED. Factors scattered, equation absent.** |
| Fractal Self-Similarity | FULL (Section 5) | PARTIAL | PARTIAL (deliverable only) | FULL (PA-63) | **Document-verified, not HTML-verified.** |

---

## PART 4: STACK PROGRESSION

**Expected progression:** scales -> channels -> multi-coherence -> anti-scale
(vertical depth -> horizontal breadth -> simultaneous coherence -> governing principle)

### Where does each file place each concept in the progression?

**SKILL.md (orchestrator):**
- Progression is NOT articulated. Concepts appear in flat lists:
  - L17-18: Container + palette (identity, not progression)
  - L59-66: Builder checkpoints (scales + channels interleaved without hierarchy)
  - L119-134: Gate table (scales + channels + stack concepts all at same level)
  - L348-364: Success bar (multi-coherence + scale coverage as co-equal checkboxes)
- **Verdict:** The orchestrator treats ALL concepts as FLAT, CO-EQUAL CHECKBOXES. No progression. No hierarchy. No "scales first, then channels, then coherence, then governing model."

**conventions-brief.md (builder guidance):**
- Progression IS articulated through SECTION ORDER:
  1. Section 1 IDENTITY (L11-48) = foundation (not in stack but prerequisite)
  2. Section 2 PERCEPTION (L51-68) = perception physics (thresholds as world-rules)
  3. Section 3 RICHNESS (L73-88) = anti-scale model (governing principle)
  4. Section 4 MULTI-COHERENCE (L91-123) = binding rule (channels + coherence)
  5. Section 5 FRACTAL ECHO (L126-149) = scales (pattern at every scale)
  6. Section 6 UNIFIED METAPHOR (L152-163) = integration (metaphor drives all)
- **Verdict:** Conventions-brief places the governing principle (anti-scale) BEFORE the operational mechanics (multi-coherence, fractal echo). This is the REVERSE of the expected progression (scales -> channels -> coherence -> anti-scale). The brief reads: "Here is the governing principle. Here are the binding rules. Here are the scales." The stack expects: "Here are the scales. Here are the channels. Here is coherence. Here is the principle." The conventions-brief order is TELESCOPE-first (why -> how), which is appropriate for a builder's world-description. But it means the builder encounters the abstract model before the concrete scales.

**gate-runner.md:**
- No progression. Gates are organized by TIER (A composition-critical, B identity, C behavioral) and EXECUTION ORDER (Group 1-5 parallel/sequential). The dependency chain (L94-97) is SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16, which is: zone count -> chromatic delta -> multi-coherence -> direction -> progression. This is a MEASUREMENT DEPENDENCY, not a CONCEPTUAL PROGRESSION.
- **Verdict:** Gate-runner has no conceptual progression. Appropriate -- it's a verification tool, not a teaching document.

**flagship-pa-questions.md:**
- No explicit progression. Questions are organized by auditor assignment, not conceptual hierarchy.
- **Verdict:** PA questions are assignment-organized. Appropriate for deployment but loses the stack progression.

### PROGRESSION ASSESSMENT

The stack progression (scales -> channels -> multi-coherence -> anti-scale) is:
- **ABSENT** from SKILL.md (flat checkboxes)
- **INVERTED** in conventions-brief (anti-scale first, scales later -- appropriate for telescope register but means builders don't build the foundation first)
- **ABSENT** from gate-runner (measurement dependency, not conceptual)
- **ABSENT** from PA questions (assignment-organized)

**Critical implication:** No file guides the builder through the progression in BUILD ORDER. The conventions-brief's fractal echo table (L130-138) says "build largest first, verify before proceeding" but the section ORDER in the brief doesn't model this -- the brief discusses the anti-scale model 40 lines before it discusses fractal scales. The micro-gate schedule (gate-runner L35-69) is the closest to build-order enforcement (MG-1 HTML -> MG-2 backgrounds -> MG-3 borders -> MG-4 typography) but these are CHANNEL-ORDER, not SCALE-ORDER.

---

## PART 5: PERCEPTION THRESHOLDS -- FLOORS OR TARGETS?

### How each file frames perception thresholds:

**SKILL.md:**
- L17: "container 940-960px, warm palette (R>=G>=B), every CSS value perceptible to a human eye" -- threshold as NON-NEGOTIABLE FLOOR
- L405: ">= 15 RGB background delta. >= 2px font-size delta. No sub-perceptual micro-typography. No letter-spacing below 0.025em. No stacked gaps above 120px." -- thresholds listed as FLOORS (minimum viable perception)
- L18: "The target is Flagship 4/4" -- target is a SEPARATE concept from thresholds
- **Framing:** FLOORS explicitly. Target is stated separately. Correct framing.

**conventions-brief.md:**
- L51-68: Section 2 PERCEPTION is titled "The Physics of Visibility" and frames thresholds as WORLD RULES:
  - L53: "Below certain deltas, CSS changes are technically present but experientially invisible"
  - L56: "at least one RGB channel differs by 15 or more points" -- FLOOR
  - L58: "2px font-size delta and 0.03em letter-spacing delta" -- FLOOR
  - L60: "Stacked gaps above 120px create voids" -- CEILING (max)
  - L63: "3 channels = DESIGNED (the floor). 5+ channels = COMPOSED (the target for Flagship)" -- EXPLICITLY distinguishes floor from target
  - L69: "These are not rules to comply with. They are the physics of human perception."
- **Framing:** FLOORS framed as PHYSICS. The brief explicitly says "the floor" and "the target" as separate concepts. This is the CORRECT framing -- thresholds are the physics of visibility, not the definition of quality.

**gate-runner.md:**
- L7-8: "Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages from consuming PA auditor time. Gates never judge composition; they filter for it."
- All gate thresholds stated as MINIMUM:
  - SC-09 L179: ">= 15 RGB" (PASS/FAIL at floor)
  - SC-10 L215: "<= 120px" (PASS/FAIL at ceiling)
  - SC-13 L331-332: ">= 3 at every boundary AND average >= 4" -- this is a FLOOR for Flagship
- L401-402: "Counts channels but CANNOT judge if shifts serve the SAME semantic direction" -- explicit limitation
- **Framing:** FLOORS explicitly. "Gates raise the FLOOR" (L7). "Gates never judge composition; they filter for it" (L8). Correct framing.

**flagship-pa-questions.md:**
- Thresholds are NOT mentioned. PA questions operate at the perceptual/compositional level, above the threshold floor.
- PA-62 (L39-47): "Count how many visual properties change simultaneously" -- relates to multi-coherence channel count but doesn't name the threshold.
- **Framing:** N/A -- PA operates above the threshold layer. Appropriate.

### THRESHOLD FRAMING ASSESSMENT

**All 4 files correctly frame thresholds as FLOORS, not targets.** The conventions-brief is most explicit: "3 channels = DESIGNED (the floor). 5+ channels = COMPOSED (the target)." The gate-runner states: "Gates raise the FLOOR." SKILL.md states the target separately from thresholds. No file confuses floor with target.

**Potential risk:** While the FRAMING is correct, the BUILDER EXPERIENCE may not be. A builder reading conventions-brief encounters thresholds as "physics" (world-rules) which psychologically positions them as CONSTRAINTS TO SATISFY rather than FLOORS TO EXCEED. The brief's Section 3 RICHNESS corrects this by describing what QUALITY looks like above the floor. But a builder under time pressure might treat "satisfy the physics" as sufficient.

---

## PART 6: TELESCOPE / MICROSCOPE / PERISCOPE REGISTER

### Expected register per file:

- **Conventions-brief** should be TELESCOPE (why this form serves the content -- strategic, compositional, world-describing)
- **Gate-runner** should be MICROSCOPE (which CSS properties manifest that reasoning -- precise, measured, mechanical)
- **SKILL.md** should be PERISCOPE (what's happening across the team -- orchestration, routing, coordination)
- **PA questions** should be TELESCOPE (perceptual, holistic, compositional judgment)

### Actual register per file:

**SKILL.md (expected: PERISCOPE):**
- L29-93: Team creation, wave structure, builder spawn prompt -- PERISCOPE (orchestration). Correct.
- L94-165: Gate runner instructions -- MICROSCOPE bleeding into PERISCOPE. The orchestrator is told WHAT to measure (specific CSS properties, specific thresholds) rather than THAT gates should be run. This is appropriate because the orchestrator runs gates itself.
- L199-295: PA deployment, weaver instructions -- PERISCOPE. Correct.
- L297-346: Fix cycle -- PERISCOPE. Correct.
- L347-375: Success bar -- PERISCOPE verging on TELESCOPE (compositional criteria). Correct.
- L401-408: Non-negotiables -- mixed register. "Container: 940-960px" is microscope. "Perceptible CSS" is telescope. "Same builder for fixes" is periscope.
- **Verdict:** Predominantly PERISCOPE with appropriate microscope intrusions (orchestrator runs gates). A few telescope moments at success bar. APPROPRIATE.

**conventions-brief.md (expected: TELESCOPE):**
- L1-3: "You are both the telescope (why this form serves the content) and the microscope (which CSS properties manifest that reasoning)." EXPLICITLY declares dual register.
- L11-48: Section 1 IDENTITY -- MICROSCOPE. Specific CSS values: `border-radius: 0`, font names, color hex codes, spacing values. This is microscope register for soul constraints.
- L51-68: Section 2 PERCEPTION -- TELESCOPE verging on microscope. Framed as "physics of visibility" (telescope) but stated as specific thresholds (microscope). Dual register achieved.
- L73-88: Section 3 RICHNESS -- TELESCOPE. Governing principle, self-test, compositional reasoning. Pure telescope.
- L91-123: Section 4 MULTI-COHERENCE -- TELESCOPE with microscope examples. Channel names (telescope) + specific direction archetypes (telescope) + concrete CSS example (L116, microscope).
- L126-149: Section 5 FRACTAL ECHO -- TELESCOPE. Scale hierarchy, dependency rules, parametric echo concept.
- L152-163: Section 6 UNIFIED METAPHOR -- TELESCOPE. Abstract compositional reasoning.
- L166-178: Section 7 TRANSITION GRAMMAR -- TELESCOPE. Three boundary types described compositionally, not mechanically.
- L183-208: Section 8 CSS VOCABULARY -- MICROSCOPE. Specific CSS patterns, grid templates, color values.
- L211-225: Section 9 CREATIVE AUTHORITY -- TELESCOPE. Freedom framing, constraint rationale.
- L228-241: Section 9B QUALITY FLOOR -- COMPRESSED-TO-NUMBER. Thresholds stated flatly.
- L243-254: Section 10 COMPOSITIONAL MEMORY -- TELESCOPE. Drift prevention habits.
- L257-271: Section 11 FIVE QUESTIONS -- TELESCOPE. Self-assessment mirrors.
- L275-293: Section 12 RESTRAINT LIST -- MICROSCOPE (specific CSS absences).
- L296-338: Section 13 ACCESSIBILITY -- MICROSCOPE. HTML templates, specific CSS.
- L341-352: Section 14 RESPONSIVE -- MICROSCOPE. Specific breakpoints.
- L354-376: CONVICTION CARD -- TELESCOPE. Self-commitment ritual.
- L380-403: PROCESS -- TELESCOPE/MICROSCOPE dual. Process description (telescope) with verification checklists (microscope).
- **Verdict:** Conventions-brief successfully operates in DUAL register as declared. Sections 3-7 are pure telescope. Sections 1, 8, 12-14 are microscope. Section 2 bridges both. Section 9B (Quality Floor) is the weakest -- thresholds compressed to numbers without the telescope framing that Section 2 gives to the same concepts. MOSTLY APPROPRIATE but Section 9B breaks register.

**gate-runner.md (expected: MICROSCOPE):**
- L1-8: Purpose statement -- PERISCOPE/TELESCOPE framing of gates' role. "Gates raise the FLOOR" is telescope-level.
- L10-98: Execution structure -- PERISCOPE (scheduling, dependencies, protocols).
- L100-992: Individual gates -- MICROSCOPE. JavaScript code, specific selectors, threshold numbers, fix recipes. Pure microscope.
- **Verdict:** Overwhelmingly MICROSCOPE with appropriate periscope framing at top. CORRECT register.

**flagship-pa-questions.md (expected: TELESCOPE):**
- All 8 questions -- TELESCOPE. Perceptual language, compositional judgment, holistic assessment. "Does the page feel like..." "Can you identify..." "If this page were a piece of music..."
- Scoring rubrics -- TELESCOPE with microscope counting. "Auditor identifies >= 3 distinct moments AND at least 2 are in different scroll thirds" combines perceptual judgment with quantification.
- **Verdict:** TELESCOPE with light microscope in scoring. CORRECT register.

### REGISTER ASSESSMENT

| File | Expected | Actual | Match? |
|------|----------|--------|--------|
| SKILL.md | PERISCOPE | PERISCOPE (with microscope intrusions) | YES |
| conventions-brief.md | TELESCOPE | DUAL (telescope + microscope) | MOSTLY -- declared dual. Section 9B breaks. |
| gate-runner.md | MICROSCOPE | MICROSCOPE (with periscope framing) | YES |
| flagship-pa-questions.md | TELESCOPE | TELESCOPE | YES |

**Register gap:** Section 9B of conventions-brief (Quality Floor) lists thresholds as compressed numbers without the telescope reasoning that Section 2 (Perception) gives to the same concepts. A builder reading Section 9B encounters ">= 14 mechanisms" and ">= 800 CSS lines" as COMPLIANCE TARGETS rather than NATURAL BYPRODUCTS of composition. Compare Section 2's framing: "These are not rules to comply with. They are the physics of human perception." Section 9B has no equivalent framing. It reads as a checklist, not a world-description.

---

## PART 7: CROSS-CUTTING FINDINGS

### Finding 1: The Scale-Channel Inversion

Scales are DESCRIBED but not ENFORCED. Channels are ENFORCED but not DESCRIBED (as compositional concepts).

- The conventions-brief describes all 5 scales richly (Section 5, fractal echo table) but only Page scale has gates.
- The gate-runner enforces 4 of 6 channels (Chromatic, Typographic, Spatial, Structural) but never names them as "channels" -- they appear as individual CSS properties without the channel framework.
- Result: a builder reads about scales but has no gate feedback on them; a builder gets gate feedback on channels but was never taught the channel framework by the gate.

### Finding 2: The Deliverable-vs-HTML Gap

DG-1 validates the fractal echo TABLE (the planning document). DG-4 validates the build PLAN (the YAML). Neither validates the actual HTML against these plans. A builder could produce a perfect fractal echo table claiming 5-scale expression and produce HTML with expression at only 2 scales. The gate passes because the TABLE is correct. PA-63 partially closes this gap but only at the component-to-page scale relationship.

### Finding 3: The Governing Principle Absence

The anti-scale model (richness = density x restraint x spatial confidence) is the GOVERNING PRINCIPLE of the compositional intelligence stack. It appears FULLY in conventions-brief Section 3 but is ABSENT from SKILL.md and gate-runner as a named model. Its three factors appear individually as scattered thresholds:
- Density -> SC-08 (component count), SC-14 (no wasted CSS)
- Restraint -> NOWHERE (no gate, no threshold)
- Spatial confidence -> SC-15 (border configs), SC-11 (typography zones), SC-10 (void prevention)

The multiplicative relationship (zero in any factor = zero richness) has zero verification.

### Finding 4: The Enhancement Channel Desert

Channels 5 (Behavioral) and 6 (Material) are defined in conventions-brief L100-103 as "enhancement channels" but have:
- Zero vocabulary guidance (what does good behavioral expression look like?)
- Zero positive gate verification (only binary presence/absence in SC-13)
- Zero PA coverage
- Zero examples in CSS Vocabulary section (Section 8)

A builder cannot improve behavioral/material expression because no file describes what improvement looks like.

### Finding 5: Section 9B Register Break

Conventions-brief Section 9B (Quality Floor, L228-241) lists thresholds as compressed numbers (>= 14 mechanisms, >= 800 CSS lines, >= 3 channel shifts). This breaks the telescope register established by Sections 2-7. Section 2 frames the same thresholds as "physics of visibility" with compositional reasoning. Section 9B presents them as a checklist. A builder under pressure will read Section 9B as THE REQUIREMENTS and treat Sections 2-7 as interesting background.

**Risk:** Section 9B creates a compliance shortcut that undermines the compositional intelligence the rest of the brief develops. A builder can satisfy Section 9B numerically (800 CSS lines, 14 mechanisms) while producing a flat page -- because Section 9B doesn't reference the anti-scale model, multi-coherence directions, or fractal echo verification.

### Finding 6: Micro-Gate Schedule Doesn't Enforce Scale Order

The micro-gate schedule (gate-runner L35-69) runs:
- MG-1: After HTML skeleton (SC-06, SC-07, SC-08, SC-12, DG-3)
- MG-2: After zone backgrounds (SC-04, SC-05, SC-09)
- MG-3: After borders (SC-01, SC-02, SC-15)
- MG-4: After typography (SC-03, SC-11)

This is CHANNEL-ORDER (structure -> chromatic -> structural -> typographic), not SCALE-ORDER (navigation -> page -> section -> component -> character). The conventions-brief says "build scales in order" (L130) but the micro-gate schedule enforces channels-in-order. These are different axes. A builder could build all channels at character scale first (violating scale order) and pass all micro-gates.

### Finding 7: SKILL.md Non-Negotiables vs. Conventions-Brief Register

SKILL.md Section 10 (L401-408) lists 6 non-negotiables in flat imperative form. These overlap with but don't reference the conventions-brief's richer treatments:
- "Container: 940-960px" (SKILL L403) vs. conventions-brief L26-27 (same, but brief adds "single most common failure")
- "Perceptible CSS: Every value must be visible" (SKILL L405) vs. conventions-brief L51-68 (rich perception physics)
- "Builder model: Opus" (SKILL L406) -- not in conventions-brief at all
- "Same builder for fixes" (SKILL L407) -- not in conventions-brief
- "PA auditors are fresh-eyes" (SKILL L408) -- not in conventions-brief

The SKILL.md non-negotiables are OPERATIONAL (who does what). The conventions-brief's non-negotiables are COMPOSITIONAL (what quality means). They serve different purposes but the SKILL.md version is what the ORCHESTRATOR internalizes. A gap: the orchestrator never internalizes the anti-scale model, multi-coherence directions, or fractal echo because those are in the conventions-brief, which is routed to the BUILDER, not to the orchestrator.

---

## PART 8: DEFINITIVE COVERAGE MATRIX

### Concept x File x Granularity (Complete)

| Concept | SKILL.md | conventions-brief | gate-runner | PA-questions |
|---------|----------|-------------------|-------------|--------------|
| **SCALES** | | | | |
| Navigation | ABSENT | PARTIAL (L130-142) | ABSENT | ABSENT |
| Page | COMPRESSED (L17,131) | FULL (L26,51-68,130-142) | FULL (SC-01,09,12,13) | ABSENT explicit |
| Section | ABSENT | PARTIAL (L79,130-142) | ABSENT | PARTIAL (PA-60) |
| Component | COMPRESSED (L130) | PARTIAL (L130-142,186-192) | COMPRESSED (SC-08) | FULL (PA-63) |
| Character | ONE-LINE (L405) | PARTIAL (L58-59,130-142) | FULL as prevention (SC-14) | ABSENT |
| **CHANNELS** | | | | |
| Chromatic | COMPRESSED (L131) | FULL (L53-57,96) | FULL (SC-09,SC-13) | ABSENT |
| Typographic | COMPRESSED (L133) | FULL (L58-59,97,186-196) | FULL (SC-11,14,SC-13) | ABSENT |
| Spatial | COMPRESSED (L132) | PARTIAL (L60-61,98) | PARTIAL (SC-10,SC-13) | FULL (PA-66) |
| Structural | PARTIAL (L63-64) | FULL (L85,99,188-189) | FULL (SC-15,SC-13) | ABSENT |
| Behavioral | ABSENT | ONE-LINE (L100) | COMPRESSED (SC-13) | ABSENT |
| Material | ABSENT | ONE-LINE (L101) | COMPRESSED (SC-13) | ABSENT |
| **STACK** | | | | |
| Multi-Coherence | PARTIAL (L134,363) | FULL (L91-123) | FULL (SC-13,13B) | FULL (PA-61,65) |
| Anti-Scale Model | ABSENT | FULL (L73-88) | ABSENT | PARTIAL (PA-64) |
| Fractal Self-Similarity | PARTIAL (L157-164) | FULL (L126-149) | PARTIAL (DG-1, deliverable) | FULL (PA-63) |
| **PROGRESSION** | | | | |
| Scale -> Channel -> Coherence -> Model | ABSENT (flat) | INVERTED (model first) | ABSENT (by-tier) | ABSENT (by-auditor) |
| **META** | | | | |
| Thresholds as FLOORS | CORRECT | CORRECT | CORRECT | N/A |
| Telescope/Microscope/Periscope | PERISCOPE (correct) | DUAL (mostly correct) | MICROSCOPE (correct) | TELESCOPE (correct) |

---

## PART 9: HIGHEST-PRIORITY ENRICHMENT TARGETS

Based on this map, the concepts most in need of enrichment (ranked by severity of gap):

1. **Anti-Scale Model in gate-runner and SKILL.md** -- The governing principle is FULLY described in conventions-brief but ABSENT from verification and orchestration. No gate checks the multiplicative relationship. No gate checks restraint. The orchestrator doesn't know the model exists.

2. **Enhancement channels (Behavioral + Material) everywhere** -- Near-phantom presence. One line of definition, binary gate check, zero vocabulary, zero PA coverage.

3. **Scale progression enforcement** -- "Build largest first, verify before proceeding" exists as instruction but has zero gate enforcement. Micro-gates enforce channel order, not scale order.

4. **Navigation and Section scales** -- Two of 5 scales have zero programmatic and zero/minimal perceptual verification.

5. **Channel-specific PA questions** -- 4 of 6 channels have zero dedicated PA coverage. Multi-coherence PA questions (PA-61, PA-65) test channels AS A SYSTEM but no question isolates whether individual channel composition is working.

6. **Deliverable-to-HTML validation** -- DG-1 and DG-4 validate planning documents, not rendered output. The fractal echo table could be fiction.

7. **Section 9B register alignment** -- Quality floor thresholds presented as checklist rather than as natural byproduct of composition. Risk of compliance shortcut.

---

*END OF PIPELINE STATE MAP*
