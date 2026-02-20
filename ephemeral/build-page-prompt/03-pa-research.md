# PA Tier 5 Research Extraction: Compositional Depth Questions

**Agent:** pa-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #3 -- Extract Tier 5 PA questions, scoring rubrics, auditor evaluation methods, and Mode 4 integration
**Sources:** perceptual-auditing SKILL.md (774 lines, all 48 existing questions), 02-PA-ANALYSIS.md, 08-VERIFICATION-SPEC.md, 20-MULTI-COHERENCE-DEEP-DIVE.md, 22-FRACTAL-DEEP-DIVE.md, 21-ANTI-SCALE-DEEP-DIVE.md, 18-SCALES-DEEP-DIVE.md, 19-CHANNELS-DEEP-DIVE.md

---

## 0. CRITICAL NOTE: TWO NUMBERING SCHEMES EXIST

The PA Analysis (02-PA-ANALYSIS.md) numbers the Tier 5 questions as **PA-70 through PA-77**. The Verification Spec (08-VERIFICATION-SPEC.md) numbers them as **PA-60 through PA-67**. These are the SAME 8 questions with different IDs.

**RECOMMENDATION:** Use the PA-60 through PA-67 numbering from the Verification Spec, as it is lower and leaves room for future additions in the 50-59 range (Tier 4 already uses PA-50 through PA-53). The PA-70 numbering creates a gap from PA-54 to PA-69 that wastes ID space.

**The canonical numbering used in this document is PA-60 through PA-67** (from 08-VERIFICATION-SPEC.md).

---

## 1. WHAT TIER 5 IS AND WHY IT EXISTS

### The Problem Tier 5 Solves

PA-05 (the existing "flagship" question) measures a FLOOR, not a CEILING. Its 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) are binary pass/fail gates. The Middle experiment scored 4/4 on PA-05 while the auditor described it as "B+ effort, professionally stiff." A driving test that both a 16-year-old and a Formula 1 driver score 4/4 on cannot distinguish competence from mastery.

Tier 5 measures **compositional depth ABOVE the designed threshold**. It is the ONLY instrument that answers: "Is this Flagship-tier or Middle-tier?" Each question maps to a specific layer of the compositional intelligence stack:

| Stack Layer | What It Measures | Existing PA Coverage |
|---|---|---|
| L1: Perception Thresholds | CSS values above perception floor | Programmatic gates (not PA) |
| L2: 5 Scales | Design intelligence at all zoom levels | PA-10 (page), PA-38 (component) -- 3 of 5 scales have ZERO coverage |
| L3: 6 Channels | Independent CSS property groups encoding direction | NONE -- PA is completely channel-blind |
| L4: Multi-Coherence | >=3 channels shifting together at boundaries | NONE -- PA-03 catches fragmentation, not coordination |
| L5: Anti-Scale Model | Richness = density x restraint x confidence | NONE -- no PA question measures any multiplicand |

### Under ALWAYS FLAGSHIP Principle

Tier 5 questions are asked in EVERY Mode 4 audit, not gated behind tier classification. This eliminates ~542 lines of tier-conditional logic. If PA-05 < 4/4, Tier 5 scores still provide diagnostic value (they reveal WHICH stack layers are present even if the floor is not met).

---

## 2. THE 8 TIER 5 QUESTIONS (PA-60 through PA-67)

### PA-60: Design Moment Density
**Stack Layer:** L4 Multi-Coherence (unique combinations at boundaries)
**Question:** "Can you identify at least 3 distinct 'design moments' -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each."

**What It Detects:** Design moment density and compositional ambition. "Design moments" are unique combinations of color, weight, spacing, or layout that appear nowhere else on the page. Middle pages may have 0-1 such moments; Flagship needs >=5 distributed across all thirds.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor identifies >=3 distinct design moments AND at least 2 are in different scroll thirds AND each moment uses a unique combination of visual properties |
| NO | Auditor identifies <3 moments, OR moments are concentrated in first third only, OR moments are just repeated component patterns |

**How an Auditor Evaluates:**
1. Scroll through the full page at reading speed, noting each place where the visual treatment does something it does NOT repeat
2. For each candidate moment: verify it is truly UNIQUE (not a repeated callout pattern, not just "another table")
3. Record scroll position (top/middle/bottom third) for each moment
4. A "design moment" requires >=2 visual properties combining in a way that only happens once: e.g., a dark code block next to an orange callout, a 4-column bento grid, a centered pull-quote with serif italic -- each unique on the page

**Why Existing Questions Cannot Catch This:**
PA-45 asks for ONE moment ("a single moment you'd show someone"). Flagship needs a COUNT and DISTRIBUTION. PA-36 asks for ONE dramatic visual moment. PA-60 asks for a SYSTEM of unique events across the full scroll depth.

---

### PA-61: Multi-Voice Composition
**Stack Layer:** L4 Channel Independence (counterpoint vs unison)
**Question:** "Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time?"

**What It Detects:** Multi-voice composition vs uniform coherence. A "choir singing in unison" (all properties shift together everywhere) is Middle. An "ensemble with different parts" (properties have independent but semantically aligned rhythms) is Flagship.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor can identify >=2 visual properties that have their OWN rhythm (e.g., "borders appear and disappear at a different pace than background color shifts") AND the independence feels deliberate, not accidental |
| NO | All visual properties shift at the same boundaries, OR property independence reads as inconsistency rather than counterpoint |

**How an Auditor Evaluates:**
1. Focus on section boundaries. At each boundary, note: does the background change? Do borders change? Does spacing change? Does typography change?
2. Track which properties change at WHICH boundaries -- make a mental tally
3. Look for properties that have their own independent schedule (e.g., borders appear at boundaries 2, 4, 7 but backgrounds shift at boundaries 1, 3, 5, 7)
4. Assess whether the independence feels like an "ensemble" (deliberate, harmonious) or "chaos" (accidental, fragmented)

**Why Existing Questions Cannot Catch This:**
PA-03 catches when the page feels like "three designers made it" (fragmentation). But multi-voice composition is the OPPOSITE of fragmentation -- it is controlled independence. PA-16 checks consistency of identical elements. PA-61 checks for PRODUCTIVE inconsistency (different properties on different schedules by design).

---

### PA-62: Transition Variation
**Stack Layer:** L4 Multi-Coherence (transition sophistication, dynamic range)
**Question:** "Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?"

**What It Detects:** Transition sophistication and dynamic range. A page where ALL transitions are equally dramatic (or equally quiet) has no dynamic range. Flagship needs BOTH dramatic boundaries (3+ channel shifts at zone changes) and quiet boundaries (1-2 shifts at within-zone section changes).

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor identifies at least 1 "dramatic" boundary (3+ simultaneous visual property changes) AND at least 1 "quiet" boundary (1-2 changes) AND can articulate why the dramatic ones are at more important content transitions |
| NO | All transitions have similar visual weight, OR dramatic/quiet placement does not correlate with content importance |

**How an Auditor Evaluates:**
1. Pick 3 transitions at different scroll positions (one near top, one middle, one bottom)
2. At each transition, count how many visual things change AT THAT EXACT BOUNDARY: background color? Border appearance? Font size change? Spacing change? Layout topology change?
3. Compare the 3: are they all similar (uniform = NO) or different (varied = potential YES)?
4. For the most dramatic one: does the content also change significantly at that point? (Zone change, topic change, mode change = YES correlation)
5. For the quietest one: is the content shift minor at that point? (Within-zone progression = YES correlation)

**Why Existing Questions Cannot Catch This:**
PA-34 asks about the quality of ONE transition. PA-40 asks about spacing consistency. Neither asks about the VARIETY of transition types or whether that variety correlates with content importance. PA-62 specifically checks for dynamic range (loud vs quiet) at the right places.

---

### PA-63: Fractal Zoom Coherence
**Stack Layer:** L2 Scale Coverage (fractal self-similarity)
**Question:** "Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate?"

**What It Detects:** Fractal self-similarity across scales. Whether design intelligence exists at Component scale (and potentially Character scale) that echoes the Page scale organizing principle. Middle achieved 2 scales (Page + Component); Flagship needs 3+ STRONG scales with the same pattern direction at each.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | The auditor identifies a component whose internal structure (label/body zones, border treatment, internal spacing) mirrors the page's overall design language at a smaller scale AND can name what the shared language IS (e.g., "both use heavy-to-light weight progression") |
| NO | Components look self-contained/generic (could belong to any page) OR the relationship between component design and page design feels accidental |

**How an Auditor Evaluates:**
1. Pick a visually prominent component (callout, table, or card)
2. Note its internal design decisions: does it have a label zone and body zone? Does its border-weight encode something? Does its internal spacing feel compressed or generous?
3. Now look at the full page: does the page use the SAME design principles at a larger scale? (E.g., if the callout has a heavy border on one side and light on the other, does the page also use progressive border weight?)
4. Look for PARAMETRIC variation: do identical component types look slightly different depending on which section they appear in? (Tighter padding in dense zones, more generous in sparse zones = YES)
5. If components are visually identical regardless of their page position, the fractal echo is structural-only (WEAK). If they respond to their context, the echo is parametric (STRONG).

**Why Existing Questions Cannot Catch This:**
PA-10 (squint test) detects page-scale balance. PA-38 checks internal container hierarchy. NEITHER asks whether the component's design language ECHOES the page's language. PA-63 explicitly connects two zoom levels and asks whether the connection is deliberate. 3 of 5 scales (Navigation, Section, Character) have zero PA coverage; PA-63 provides the critical Component-to-Page link.

---

### PA-64: Restraint as Expression
**Stack Layer:** L5 Anti-Scale (restraint multiplicand)
**Question:** "Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"

**What It Detects:** Whether the page uses restraint as a compositional tool. Richness = density x RESTRAINT x confidence. If restraint = 0, the product is maximalist noise. If restraint is present, quieter sections create contrast that makes rich sections richer. No current PA question distinguishes designed simplicity from default absence.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor identifies at least 1 section that is PLAINER than its neighbors AND the plainness feels INTENTIONAL (like a pause in music, not a missing instrument) AND the surrounding sections feel RICHER by contrast |
| NO | All sections have similar visual density, OR plain sections feel like the designer ran out of ideas/budget, OR the contrast between rich and plain does not enhance either |

**How an Auditor Evaluates:**
1. Identify the visually RICHEST section on the page (most components, most border variety, most color activity)
2. Now find the section immediately before or after it
3. Is the adjacent section simpler? If yes: does the simplicity feel like a CHOICE (clean, confident, breathing space) or an ACCIDENT (empty, unfinished, forgotten)?
4. The key perceptual test: cover the plain section. Then uncover it. Does the rich section feel MORE impressive when you see the contrast? If YES, the restraint is working as composition.
5. Also check: are there any mechanisms that COULD have been deployed in the quiet section but weren't? If the builder had access to grids, callouts, borders etc. but chose NOT to use them here, that is evidence of deliberate restraint.

**Why Existing Questions Cannot Catch This:**
PA-09 catches "dead space that serves no purpose." PA-33 asks about one area of empty space quality. Neither can distinguish DESIGNED simplicity from DEFAULT absence. The critical difference: dead space is accidental emptiness; restraint is deliberate simplicity that enriches the surrounding composition. PA-64 specifically asks the auditor to evaluate the CONTRAST between rich and plain sections.

---

### PA-65: Multi-Voice Composition (Music Analogy)
**Stack Layer:** L4/L5 Boundary (ensemble = Flagship; choir = Middle)
**Question:** "If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts?"

**What It Detects:** The highest-level compositional assessment. A single instrument = flat/minimal (1-2 channels active). A choir in unison = coherent but uniform (all channels shift together at every boundary). An ensemble = multi-voice (channels have independent but harmonized rhythms). This is the gestalt summary of multi-coherence + channel independence.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor selects (c) "ensemble" AND provides specific evidence: names at least 2 "instruments" (visual property groups) that have their own rhythm while contributing to a unified composition |
| NO | Auditor selects (a) or (b), OR selects (c) but cannot name specific independent instruments |

**How an Auditor Evaluates:**
1. This is a GESTALT question -- answer from overall impression, not from analyzing individual boundaries
2. Scroll through the entire page once at reading speed
3. Ask yourself: am I hearing one voice (everything shifts together, same treatment everywhere), a unison choir (clearly designed, but all sections feel like the same chord), or an ensemble (different visual "instruments" playing their own parts that together create a richer whole)?
4. If "ensemble": name the instruments. E.g., "Borders play a rhythm of present/absent. Backgrounds play a different rhythm of warm/cool. Typography plays its own rhythm of generous/compressed. These three create a combined effect."
5. The key test: if you removed ONE of the "instruments" (e.g., made all backgrounds the same color), would the page lose a distinct voice? If yes, that instrument is independent. If the page would look essentially the same, that instrument is not truly independent.

**Why Existing Questions Cannot Catch This:**
PA-20 asks for personality in 3 words (emotional, not compositional). PA-03 checks for fragmentation (too many designers). PA-65 operates at the META level -- it asks about the compositional ARCHITECTURE (one voice vs many voices) rather than any specific property. This is the question that most directly distinguishes Middle (choir) from Flagship (ensemble).

---

### PA-66: Negative Space Variety
**Stack Layer:** L5 Anti-Scale (spatial confidence multiplicand)
**Question:** "Look at the empty spaces between sections. Are they all the same 'flavor' of emptiness, or do different gaps feel different from each other?"

**What It Detects:** Whether negative space is composed (varied, purposeful, confident) or default (uniform, leftover). PA-33 assesses ONE area of empty space; PA-66 assesses the SYSTEM of negative spaces across the full page. Spatial confidence requires that different gaps serve different roles -- not all gaps feel the same.

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor identifies at least 2 perceptibly different TYPES of gaps AND can describe how they feel different (e.g., "this gap is a pause, that gap is a chapter break, this one is a breathing moment") AND the variety feels purposeful |
| NO | All gaps feel interchangeable (same size, same background, same energy), OR variety exists but feels random rather than designed |

**How an Auditor Evaluates:**
1. Scroll through the page focusing ONLY on the spaces BETWEEN sections (ignore the sections themselves)
2. Note: are all gaps the same size? Same background color? Same visual weight?
3. Pick the smallest gap and the largest gap. Do they feel like they serve DIFFERENT purposes? (E.g., smallest = "same topic continues" vs largest = "major mode change")
4. Check for structural content in gaps: do any gaps contain a divider line, a bridge sentence, a color shift? Or are they all just empty space of varying size?
5. The key test: if you standardized all gaps to the same height, would something be LOST? If yes, the variety is compositionally meaningful.

**Why Existing Questions Cannot Catch This:**
PA-33 asks about the LARGEST empty space specifically (silence vs dropped signal). PA-40 asks about spacing CONSISTENCY. PA-66 is the inverse: it asks about spacing VARIETY and whether that variety is designed. Flagship negative space should be a PALETTE (3+ distinct gap types) not a constant (one size fits all).

---

### PA-67: Novelty Beyond Competence
**Stack Layer:** L5 Anti-Scale (creative surprise)
**Question:** "Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel?"

**What It Detects:** Whether the page has creative surprise -- the "unexpected-yet-perfect" quality that separates designed excellence from competent execution. Middle can be perfectly competent without being novel. Flagship should have at least one element that makes the auditor think "I haven't seen that before."

**Scoring Rubric:**
| Score | Criteria |
|---|---|
| YES | Auditor names a specific element, technique, or combination that feels genuinely novel AND explains why it works (surprising but appropriate for the content) |
| NO | The page is well-executed but feels familiar/expected, OR surprising elements feel gimmicky rather than serving the content |

**How an Auditor Evaluates:**
1. This is the most subjective Tier 5 question -- answer from genuine reaction, not analysis
2. After the full evaluation, ask: did anything SURPRISE me? Not "was anything wrong" but "was anything unexpectedly good"?
3. Novelty can be structural (a layout topology you haven't seen), compositional (a way of combining familiar elements into something new), or atmospheric (a feeling the page creates that you haven't encountered)
4. The key test: could you describe this page to a colleague and would they say "that's interesting, I'd like to see that"? Or would they say "sounds standard"?
5. Note: novelty that SERVES the content (the layout mirrors the subject matter) is stronger than novelty for its own sake

**Why Existing Questions Cannot Catch This:**
PA-48 asks if this would be your first choice among 5 options (comparative quality). PA-45 asks for one moment you'd show as good design (highlight). PA-67 asks specifically about INVENTION -- is the page doing something new? This captures the creative intelligence that separates a great execution of known patterns from a genuinely new composition.

---

## 3. TIER 5 SCORING PROTOCOL

### Per-Question Scoring
Each PA-60 through PA-67 is scored **YES** (evidence present and compelling) or **NO** (absent or ambiguous). Each YES/NO MUST include 2-3 sentence justification citing specific visual evidence.

### Aggregate Scoring Thresholds

| YES Count | Verdict | Meaning |
|---|---|---|
| **7-8 / 8** | **COMPOSED** | Full compositional depth. All 4 stack layers active and perceptible. This is the Flagship target. |
| **5-6 / 8** | **APPROACHING** | Significant depth. Most stack layers active; 1-2 need strengthening. |
| **3-4 / 8** | **STRUCTURED** | Some compositional intelligence visible. Multiple stack layers absent. |
| **0-2 / 8** | **VOCABULARY ONLY** | Mechanisms deployed but not composed. Stack layers not engaged. Middle-equivalent. |

### Combined Verdict Matrix (PA-05 x Tier 5)

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template-quality) | VOCABULARY ONLY (Middle-equivalent) |
| **Tier 5: 3-4** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 5-6** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 7-8** | (impossible in practice) | (unlikely) | **COMPOSED** (Flagship target) |

A page scoring PA-05 4/4 + Tier 5 0-2/8 is CORRECTLY classified as VOCABULARY ONLY, not Flagship. This solves the core problem: Middle 4/4 and Flagship 4/4 are no longer confused.

---

## 4. MODE 4 INTEGRATION: AUDITOR ASSIGNMENTS

### Tier 5 Questions Distributed Across Existing 9 Auditors

Under the Verification Spec's recommendation, Tier 5 questions are distributed by perceptual affinity to existing Mode 4 auditors rather than adding a 10th auditor:

| Auditor | Role | Standard Questions | Tier 5 Addition | Total Qs |
|---|---|---|---|---|
| **A** | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45 | **PA-65** (music analogy), **PA-67** (novelty) | 9 |
| **B** | Readability+Typography | PA-02, 06, 07, 08, 29 | (none) | 5 |
| **C** | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53 | **PA-64** (restraint), **PA-66** (negative space variety) | 13 |
| **D** | Flow+Pacing | PA-12, 13, 34, 35, 36 | **PA-62** (transition variation) | 6 |
| **E** | Grid+Layout | PA-14, 15, 37, 38, 39 | **PA-63** (fractal zoom) | 6 |
| **F** | Consistency+Rhythm | PA-16, 17, 40, 41 | **PA-60** (design moments), **PA-61** (multi-voice) | 6 |
| **G** | Metaphor+Ideology | PA-42, 43, 44 | (none) | 3 |
| **H** | Responsive | PA-21, 22, 23, 46, 47 | (none) | 5 |
| **I** | Adversarial | PA-26, 27, 28, 48 | (none) | 4 |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**

### Assignment Rationale

| Tier 5 Question | Assigned To | Why This Auditor |
|---|---|---|
| PA-60 (design moments) | F (Consistency+Rhythm) | Design moments are rhythm PEAKS. F already detects where visual treatment changes from pattern to unique event (PA-17, PA-41). |
| PA-61 (multi-voice) | F (Consistency+Rhythm) | Multi-voice composition is the rhythmic relationship between channels. Same perceptual domain as PA-17 (rhythm) and PA-41 (repetition). |
| PA-62 (transition variation) | D (Flow+Pacing) | Transition dramatic range is a pacing property. D already evaluates transition quality (PA-34). |
| PA-63 (fractal zoom) | E (Grid+Layout) | Scale coverage requires zooming into components and zooming out to page -- spatial navigation that E practices with PA-14, PA-38. |
| PA-64 (restraint) | C (Spatial+Proportion) | Restraint manifests as designed emptiness vs accidental emptiness. C already evaluates negative space quality (PA-31, PA-33). |
| PA-65 (music analogy) | A (Impression+Emotion) | The orchestral metaphor is an emotional/gestalt judgment. A already provides gut reactions and personality assessment (PA-20). |
| PA-66 (negative space variety) | C (Spatial+Proportion) | Direct extension of PA-33 (empty space quality) to SYSTEM-level assessment. |
| PA-67 (novelty) | A (Impression+Emotion) | Novelty is a first-impression judgment. A is calibrated for surprise detection (PA-01, PA-45). |

### Alternative: Add Auditor J (10th Auditor)

The PA Analysis (02-PA-ANALYSIS.md) recommends adding a dedicated 10th auditor for Flagship:

- **Auditor J (Compositional Depth):** Assigned PA-60 through PA-67 exclusively
- Pro: Clean separation, compositional depth evaluated by a single specialist who sees the full page with ONLY Tier 5 questions in mind
- Con: One additional agent to spawn

**Recommendation for the prompt:** Use the distributed approach (9 auditors) as the DEFAULT since it is proven architecture. The 10th auditor is an optional enhancement if Tier 5 scores show high inter-rater variance that suggests the questions need dedicated focus.

---

## 5. WEAVER SYNTHESIS CHANGES

For Flagship Mode 4, the Weaver-Synthesizer must produce TWO verdicts:

### Standard Verdict (unchanged)
PA-05 score: 0-4/4 with sub-criteria breakdown (DESIGNED, COHERENT, PROPORTIONATE, POLISHED)

### Tier 5 Verdict (new)
- Count YES responses across PA-60 through PA-67
- Apply aggregate threshold: COMPOSED / APPROACHING / STRUCTURED / VOCABULARY ONLY
- Provide per-question YES/NO with 2-3 sentence evidence summary per question
- Note any questions where auditors DISAGREED (if multiple auditors answered same question)

### Combined Verdict
Apply the matrix from Section 3 to produce: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE

### Success Bar for Build-Page Prompt

| Score | Instrument | Pass Threshold |
|---|---|---|
| **PA-05** | Standard 48 questions | >= 3.5/4 (elevated for Flagship) |
| **Tier 5** | 8 Flagship questions | >= 6/8 (COMPOSED) |

Both must pass. PA-05 >= 3.5 AND Tier 5 >= 6/8 = **SHIP** (Flagship quality confirmed).

---

## 6. WHAT EACH TIER 5 QUESTION MAPS TO IN THE DEEP DIVES

### Cross-Reference: Deep Dive Evidence Per Question

| Question | Primary Deep Dive Source | Key Evidence |
|---|---|---|
| PA-60 (design moments) | 21-ANTI-SCALE (semantic density, Section 1) | CD-006: 41 mechanism instances, 3.0 components/viewport. Flagship: 0.67/viewport. Density = perceptible events per scroll. |
| PA-61 (multi-voice) | 19-CHANNELS (channel independence, full doc) | CD-006: 4 primary channels with independent rhythms. Flagship: same 4 channels but Chromatic inert (1-8 RGB). Layout diversity = free multi-voice. |
| PA-62 (transition variation) | 20-MULTI-COHERENCE (Sections 5-6) | CD-006: 3 transition types (Smooth 48px+1px, Bridge 64px+bg, Breathing 80px+3px). Average 3.4 channels/boundary. Flagship: dividers only differentiated by weight, not type. |
| PA-63 (fractal zoom) | 22-FRACTAL (full doc) | CD-006: 4/5 strong scales + 1 moderate. Flagship: 0/5 strong, 5/5 attempted. Root cause: dependency chain violated (Scale 2 imperceptible = Scales 3-5 orphaned). |
| PA-64 (restraint) | 21-ANTI-SCALE (restraint, Section 2) | CD-006: Drop caps 2/8 (25%), Core Abstraction 2/8 (25%), Decision Matrix 1/8 (12.5%). Each deployed mechanism is an EVENT because rare. Frequency-limited deployment = restraint. |
| PA-65 (music analogy) | 20-MULTI-COHERENCE (Section 9), 19-CHANNELS (summary) | The choir vs ensemble distinction. Unison = all channels shift together at every boundary (mechanical). Ensemble = channels have independent but harmonized schedules (composed). |
| PA-66 (negative space) | 21-ANTI-SCALE (spatial confidence, Section 3) | CD-006: 3 transition types creating 3 "flavors" of gap (48px pause, 64px bridge, 80px breathing). 5 grid topologies create width variation. Flagship: uniform gaps, single-column flow. |
| PA-67 (novelty) | 22-FRACTAL (CD-006 analysis), 19-CHANNELS (layout diversity) | CD-006: 5 axis patterns (Spiral, Z, Bento, F, Choreography) -- each is genuinely novel. Flagship: 12 sections of F-pattern. No layout novelty. |

---

## 7. PERCEPTION THRESHOLDS THAT INFORM TIER 5 EVALUATION

While auditors do NOT use CSS vocabulary, the prompt team should understand what perceptual thresholds underlie the questions:

| Channel | Threshold | If Below Threshold | Tier 5 Impact |
|---|---|---|---|
| Chromatic (backgrounds) | >= 15 RGB delta between zones | Zones look identical | PA-60 moments invisible, PA-62 transitions flat |
| Typographic (font-size) | >= 1px delta between zones | Text looks uniform | PA-61 voices silent, PA-63 fractal echo absent |
| Typographic (letter-spacing) | >= 0.03em between zones | Tracking variation imperceptible | PA-63 character-scale echo fails |
| Spatial (padding) | >= 24px delta between zone types | Sections feel same density | PA-62 transition drama lost, PA-66 gaps uniform |
| Structural (borders) | >= 1px appearance/disappearance | No structural rhythm | PA-60 moments fewer, PA-61 voices fewer |
| Stacked gaps | <= 108px total at any boundary | Whitespace void | PA-66 gaps feel abandoned, not designed |

These thresholds are enforced by PROGRAMMATIC GATES (SC-09, SC-10, SC-11, etc.), not by Tier 5 questions. But if the programmatic gates fail, Tier 5 scores will also fail -- the gates are prerequisites for Tier 5 success.

---

## 8. EPISTEMIC STATUS AND CALIBRATION NOTES

**All 8 Tier 5 questions are THEORETICAL.** They have never been deployed. They are derived from the compositional intelligence stack analysis, not from observed Flagship artifacts. The first experiment will calibrate whether:

1. Questions are too abstract for fresh-eyes auditors (risk: auditors cannot answer without CSS context)
2. YES/NO scoring lacks granularity (risk: some questions need 3-point scale)
3. 6/8 threshold is too high or too low (risk: true Flagship might score 5/8, or Middle might score 6/8)
4. Question phrasing creates false negatives (risk: auditor interprets "design moment" differently than intended)

**Mitigation:** Run Tier 5 alongside standard PA in the first experiment. Compare Tier 5 scores against PA-05 scores to calibrate. If Middle-equivalent output scores >= 5/8 on Tier 5, the questions are too easy. If genuine Flagship scores < 4/8, the questions are too hard.

---

**END OF PA TIER 5 RESEARCH EXTRACTION**

**Key numbers:**
- 8 Tier 5 questions (PA-60 through PA-67)
- Covering all 4 stack layers + 2 enabling properties
- Distributed across 6 of 9 existing auditors (A, C, D, E, F get additions; B, G, H, I unchanged)
- 56 total questions per Mode 4 audit (48 standard + 8 Tier 5)
- Scoring: 7-8/8 = COMPOSED (Flagship), 5-6 = APPROACHING, 3-4 = STRUCTURED, 0-2 = VOCABULARY ONLY
- Success bar: PA-05 >= 3.5 AND Tier 5 >= 6/8
