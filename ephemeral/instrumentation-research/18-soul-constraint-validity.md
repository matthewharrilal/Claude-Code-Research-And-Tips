# Soul Constraint Validity: Were They Ever Evidence-Based?

**Task:** Trace the provenance of each soul constraint. Classify as evidence-based, single-source, arbitrary, or aesthetic preference.

---

## The Origin Story

The soul constraints trace to a single event: the "perceptual audit v2" (Phase 4A-E, 2026-02-04). Seven sub-agents (A-G) analyzed screenshots from Sanrok Studio's website. Their observations were synthesized into MASTER-SOUL-SYNTHESIS.md, which defined 5 "soul pieces" and 6 "Universal Rules." These then propagated into prohibitions.md (22 constraints) during Phase C extraction (2026-02-14).

**Critical finding:** The foundation research (KORTAI-ESSENCE-FOUNDATION.md) initially observed border-radius 4-6px and box-shadow present in the actual Sanrok reference. These were overridden during "soul-locking" without documented reconciliation. The file's own research debt section (lines 116-128) flags this: "Container corner values in the SOUL TRANSLATION GUIDE section specify 4-6px for cards and code blocks, which CONFLICTS with the soul-locked value of border-radius: 0."

**[INDEPENDENT CHECK — CRITICAL REFRAMING]:** The relationship between the Sanrok observations and the soul-locked values is more complex than "contradiction." Two interpretations exist:

1. **CONTRADICTION framing (this document's original claim):** The soul-locking process actively contradicted the perceptual observations it claimed to derive from. "We looked at Sanrok, saw X, then wrote NOT-X."

2. **AMPLIFICATION framing (independent pipeline evaluation):** The soul-locking process studied Sanrok's angular quality (4-6px corners — ALREADY sharp compared to Bootstrap 6-12px or Material 12px), identified "sharpness" and "anti-physical flatness" as the ESSENTIAL perceptual qualities, and deliberately AMPLIFIED them to 0px/none. This is a design decision to go FURTHER in the direction the reference pointed, not to contradict it. The independent evaluator concluded: "The soul constraints are GENERATIVE — they force designers to use spacing, borders, and backgrounds for hierarchy. The constraints create a distinctive visual identity."

**Evidence supporting amplification:** SOUL-DEFINITION.md (Rule 1) frames border-radius: 0 not as "what Sanrok has" but as "Decisiveness, editorial confidence" — the SOUL extracted from Sanrok was "sharpness as confidence," and 0 is sharper than 4-6px. Sub-Agent C observed Sanrok containers feel like "ZONE" not "BOX" — defined by whitespace, not hard edges. The soul-lock to box-shadow:none makes containers MORE zone-like than Sanrok's own subtle shadows.

**Verdict:** The framing of "contradiction" is PARTIALLY ACCURATE — the specific CSS values observed (4-6px, subtle shadow) were overridden. But calling this a "smoking gun" overstates the case. The soul-locking process extracted a DIRECTION (sharp, flat, editorial) and pushed it further than the reference, which is a legitimate design methodology (amplification). The documentation gap is real: no formal reconciliation section explains the amplification rationale. But "we saw angular and chose to be MORE angular" is different from "we saw rounded and wrote angular." Sanrok WAS already sharp by industry standards.

---

## Constraint-by-Constraint Classification

### TIER 1: Genuine Identity Markers (Defensible)

**#1 border-radius: 0** -- AESTHETIC AMPLIFICATION codified as identity
- The Sanrok reference uses 4-6px corners (per KORTAI-ESSENCE-FOUNDATION.md Sub-Agent C) — already sharp compared to Bootstrap 6-12px, Material 12px
- The soul-lock to 0 was a DELIBERATE AMPLIFICATION of the "sharp" direction, not a pure extraction
- AD-F-013 validated it as "generative" in AD-004, but AD-004 was built AFTER the constraint, so this is circular: the constraint forced the angular spiral, then the spiral was cited as evidence for the constraint
- **[NUANCED by independent evaluation: The independent evaluator classified this as "reasonable" and "GENERATIVE" — it forces designers to create hierarchy through spacing and borders rather than rounded-corner softness. The constraint DOES create a distinctive identity. The question is whether it was NECESSARY to go from 4-6px to 0, or whether 4-6px would have produced equally distinctive work.]**
- Classification: **AESTHETIC AMPLIFICATION** elevated to identity rule. Amplified from reference direction, not contradicted.

**#2 box-shadow: none** -- AESTHETIC AMPLIFICATION codified as identity
- Sanrok reference uses subtle shadows (per KORTAI-ESSENCE-FOUNDATION.md Sub-Agent C: card shadow 0 2px 8px rgba(0,0,0,0.08))
- Same soul-locking amplification as #1 — Sub-Agent C observed containers feel "FLOATING" via shadow. Soul-lock pushed toward "FLAT" (print heritage, honest), removing the ONE physical-depth effect.
- AD validation (AD-F-020) came after the constraint existed
- **[NUANCED by independent evaluation: The "anti-physical identity" framing is coherent — removing shadows forces depth to come from spacing and borders, consistent with "print heritage." The independent evaluator found this "reasonable." The amplification is defensible as a design philosophy choice ("honest, flat = print") even though the source reference used subtle shadows.]**
- Classification: **AESTHETIC AMPLIFICATION**. Same pattern as #1 — direction from reference pushed further.

**#3 drop-shadow: none** -- LOGICAL EXTENSION of #2
- No independent evidence. Follows from box-shadow prohibition.
- Classification: **DERIVED** from #2 (which is itself aesthetic preference).

### TIER 2: Reasonable Design Decisions (Weakly Evidenced)

**#6 No pure black/white** -- SINGLE-SOURCE observation
- Traced to Sanrok's warm cream palette (#FEF9F5) and near-black text (#1A1A1A)
- One reference site observation, generalized to universal law
- Reasonable as preference; not validated across multiple sources
- Classification: **SINGLE-SOURCE**. Sensible but unvalidated.

**#7 Serif for display only** -- EVIDENCE-BASED (weakest)
- Sanrok reference uses Instrument Serif for headings, sans for body
- Typography research confirmed readability argument (serif for long-form body IS harder on screen)
- Validated across DD/OD explorations (all used this pattern)
- Classification: **EVIDENCE-BASED** -- but the evidence is that this is standard typography practice, not a unique KortAI insight.

**#16 No cool grays** -- SINGLE-SOURCE observation
- Derived from Sanrok's warm palette. One reference site.
- Classification: **SINGLE-SOURCE**.

### TIER 3: Defensible but Untested Anti-Patterns

**#9 No 2px borders** -- EVIDENCE-BASED (strongest constraint)
- OD-F-AP-001: Actual audit found 108 CSS declarations, 1000+ computed instances in OD explorations
- This is the ONLY constraint with empirical evidence from multiple builds showing a concrete problem
- Classification: **EVIDENCE-BASED**. Genuine discovery from build experience.

**#10 Accent borders >= 4px** -- EVIDENCE-BASED
- Traced to callout component audit (11 components analyzed)
- Validated across 6 AD explorations
- Classification: **EVIDENCE-BASED** (from component audit).

**#13 No vertical table borders** -- AESTHETIC PREFERENCE
- "Prison bars" language is subjective aesthetic judgment
- Many premium editorial sites use vertical borders effectively
- Cited evidence: geometry.md lines 130-138 (same file that defines the rule -- circular)
- Classification: **AESTHETIC PREFERENCE** presented as design principle.

### TIER 4: Subjective Observations Codified as Binary Rules (N-3 Pattern)

**#4 No semi-transparent backgrounds** -- ARBITRARY
- Anti-patterns registry OD-AP-003 found opacity < 1 in re-enrichment waves
- But the reasoning ("creates the same visual effect as box-shadow") is physically incorrect -- transparency and shadows are different optical phenomena
- The actual problem was rgba(0,0,0,0.04) -- nearly invisible values. The fix should be "no imperceptible values," not "no transparency"
- Classification: **ARBITRARY**. Wrong diagnosis of a real symptom.

**#5 No gradient backgrounds** -- AESTHETIC PREFERENCE
- "Gradients imply light sources" is an aesthetic interpretation
- CSS gradients are commonly used for subtle zone differentiation (the exact thing the pipeline WANTS)
- The cited evidence is from identity-lens.md line 282 -- which is the extraction lens document, not upstream research
- Classification: **AESTHETIC PREFERENCE** with no independent evidence.

**#11 No decorative elements** -- AESTHETIC PREFERENCE (vague)
- "Every visual element must carry semantic weight" is a value judgment
- What counts as "semantic weight" is undefined
- Could prohibit effective visual design (breathing ornaments, section markers)
- Classification: **AESTHETIC PREFERENCE** too vague to be binary.

**#14 No hover lift** -- EVIDENCE-BASED
- AD-F-020 demonstrated that physical movement metaphors conflict with editorial identity
- However, the evidence is from the AD explorations which were built under the constraint
- Classification: **EVIDENCE-BASED** (circular -- built under constraint, cited as evidence for constraint).
- **[PA CIRCULARITY NOTE]:** The "editorial identity" claim is assessed via PA questions (PA-19, PA-20, PA-25) that embed this system's specific definition of editorial. A Material Design evaluator might find hover lift ENHANCES usability. The evidence is system-internal, not universal.

**#15 No traffic-light color adjacency** -- REASONABLE but ARBITRARY threshold
- "Kindergarten-level visual language" is subjective
- 48px spacing exception is arbitrary (why 48px? why not 32px or 64px?)
- Classification: **AESTHETIC PREFERENCE** with an arbitrary threshold.

**#17 h3 must be italic** -- SINGLE-SOURCE
- Appears in one reference site convention
- No research validating that italic h3 improves perception
- Classification: **SINGLE-SOURCE** elevated to universal rule.

**#18 No same-density stacking** -- EVIDENCE-BASED
- Validated across DD explorations (density research stream, 51 findings)
- R3 research supported rhythm principles
- Classification: **EVIDENCE-BASED**.

### TIER 5: Process Rules (Meta-Level)

**#19 Research provenance required** -- METHODOLOGY, not visual constraint
**#20 Tension derivation required** -- METHODOLOGY, not visual constraint
**#21 No full-viewport void** -- EVIDENCE-BASED (ceiling experiment, 9/9 auditors flagged)
- **[PA CIRCULARITY NOTE — Pattern 6]:** 9/9 auditor agreement proves the PA questions reliably detect voids, but all 9 auditors used the same PA instrument. An auditor using brutalist or Bauhaus criteria might assess large whitespace as intentional negative space, not a defect. The finding is STYLE-INDEPENDENT for extreme voids (>3 viewports of blank) but STYLE-DEPENDENT for moderate whitespace assessment.
**#22 Visual interest distribution** -- EVIDENCE-BASED (ceiling experiment PA data)
- **[PA CIRCULARITY NOTE — Pattern 5]:** "Visual interest" is measured by PA-52/PA-35, which define interest through THIS system's mechanism vocabulary. The evidence is real (PA data from experiments) but the measurement of what counts as "interest" is system-shaped.

---

## Summary Table

| # | Constraint | Classification | Evidence Quality |
|---|-----------|---------------|-----------------|
| 1 | border-radius: 0 | AESTHETIC AMPLIFICATION | Amplifies source direction (4-6px → 0) |
| 2 | box-shadow: none | AESTHETIC AMPLIFICATION | Amplifies source direction (subtle shadow → none) |
| 3 | No drop-shadow | DERIVED from #2 | No independent evidence |
| 4 | No transparency | ARBITRARY | Wrong diagnosis |
| 5 | No gradients | AESTHETIC PREFERENCE | Self-referencing evidence |
| 6 | No pure black/white | SINGLE-SOURCE | One reference site |
| 7 | Serif display only | EVIDENCE-BASED | Standard practice |
| 8 | No rounded corners | DUPLICATE of #1 | Same evidence |
| 9 | No 2px borders | EVIDENCE-BASED | Strongest empirical data |
| 10 | Accent borders >= 4px | EVIDENCE-BASED | Component audit |
| 11 | No decorative elements | AESTHETIC PREFERENCE | Too vague |
| 12 | No decorative grid breaks | AESTHETIC PREFERENCE | Reasonable |
| 13 | No vertical table borders | AESTHETIC PREFERENCE | Subjective |
| 14 | No hover lift | EVIDENCE-BASED | Circular |
| 15 | No traffic-light adjacency | AESTHETIC PREFERENCE | Arbitrary threshold |
| 16 | No cool grays | SINGLE-SOURCE | One reference site |
| 17 | h3 italic | SINGLE-SOURCE | One convention |
| 18 | No density stacking | EVIDENCE-BASED | DD research |
| 19 | Research provenance | METHODOLOGY | N/A |
| 20 | Tension derivation | METHODOLOGY | N/A |
| 21 | No viewport voids | EVIDENCE-BASED | Ceiling experiment |
| 22 | Visual interest spread | EVIDENCE-BASED | Ceiling experiment |

**Counts:**
- EVIDENCE-BASED: 8 (constraints 7, 9, 10, 14, 18, 21, 22 + methodology 19-20)
- AESTHETIC AMPLIFICATION: 2 (constraints 1, 2 — amplified from source direction, generative)
- AESTHETIC PREFERENCE: 6 (constraints 5, 8, 11, 12, 13, 15)
- SINGLE-SOURCE: 3 (constraints 6, 16, 17)
- ARBITRARY: 1 (constraint 4)
- DERIVED: 1 (constraint 3)
- METHODOLOGY: 2 (constraints 19-20)

**[INDEPENDENT CHECK — Classification Shift]:** Reclassifying #1 and #2 from "AESTHETIC PREFERENCE" to "AESTHETIC AMPLIFICATION" is significant. The original 8/8/3/1/2 split (evidence-based/aesthetic/single-source/arbitrary/methodology) becomes 8/2/6/3/1/1/2 (evidence-based/amplification/aesthetic/single-source/arbitrary/derived/methodology). The key difference: AMPLIFICATION constraints have a clear directional relationship to the source reference (pushed further in an observed direction), while AESTHETIC PREFERENCE constraints (like #5 no gradients, #13 no vertical table borders) have no such directional grounding. This distinction matters because amplification-based constraints are more defensible — they have a rationale chain even if the final value exceeds the source observation.

---

## The Documentation Gap: Soul-Locking Amplified Beyond Its Own Research

The KORTAI-ESSENCE-FOUNDATION.md research debt section explicitly states:

> "Container corner values (4-6px) in this file's token tables were observed pre-soul-lock. The authoritative soul-locked value is border-radius: 0 per SOUL-DEFINITION.md"

> "Card shadow value (0 2px 8px rgba(0,0,0,0.08)) in the Container Rules table also conflicts with the soul-locked box-shadow: none."

The two MOST enforced constraints (#1 border-radius: 0, #2 box-shadow: none) go BEYOND what the perceptual audit sub-agents actually observed in the Sanrok reference. The soul-locking process AMPLIFIED the observed direction rather than faithfully reproducing it.

**[INDEPENDENT CHECK — "Smoking Gun" Reassessment]:** The original framing of this as a "smoking gun" that "contradicts source material" is OVERSTATED. The evidence shows:

1. **What was observed:** Sanrok uses 4-6px corners (sharp by industry standards) and subtle shadows (rgba 0.08 — barely visible). Sub-Agent C described containers as "zone-like," defined by "shadow and position, not walls."

2. **What was decided:** border-radius: 0 (SHARPER) and box-shadow: none (FLATTER). SOUL-DEFINITION.md frames these as "Decisiveness, editorial confidence" (Rule 1) and "Print heritage honesty, medium truth" (Rule 2).

3. **The accurate framing:** "We looked at Sanrok, identified the ESSENTIAL DIRECTION (sharp, flat, editorial, anti-physical), and pushed it further." This is **amplification** — studying a reference and deliberately going further in its direction. It is a recognized design methodology (think how Dieter Rams' "less but better" became Apple's "even less, even more minimal"). The documentation gap is that no reconciliation section explains WHY the amplification was chosen over faithful extraction.

4. **What IS genuinely problematic:** The system documents use EXTRACTION language ("we extracted from Sanrok," "observations distilled into rules") when the actual process was AMPLIFICATION + DESIGN DECISION. This is a documentation accuracy issue, not a design validity issue. The constraints ARE generative — they DO create a distinctive identity. But the provenance narrative is misleading about how they were derived.

**Revised verdict:** Not a "smoking gun" (implies fraud or fundamental invalidity). More accurately: a **documentation gap** where design amplification was framed as faithful extraction. The constraints themselves are defensible design decisions; the provenance narrative overstates how directly they trace to the Sanrok reference.

---

## Did We Codify Subjective Observations as Binary Checks? (N-3)

YES. The pattern is consistent:

1. Perceptual observation: "this feels editorial" (subjective)
2. Attribution: "because of sharp edges" (causal claim without control)
3. Codification: "border-radius: 0 ALWAYS" (binary rule)
4. Validation: build under constraint, cite result as evidence (circular)
5. **[PA CIRCULARITY — Pattern 3]:** PA assessment confirms constraint improves quality → but PA questions ASSUME the constraint's aesthetic as quality → the "validation" is the system confirming its own definition

This is the objectivity trap from N-3: taking a subjective quality assessment, assigning it to a CSS property, making the CSS property a binary gate, then confusing gate compliance with quality. **The PA instrument deepens this trap:** because PA-05 defines "DESIGNED" through this system's compositional model, any page that complies with soul constraints will score higher on PA-05 by definition, not because compliance improved the page.

The constraints are not WRONG -- border-radius: 0 produces a distinctive aesthetic. But they are not EVIDENCE-BASED in the way the documentation claims. They are aesthetic decisions with post-hoc rationalization. **The PA instrument cannot distinguish between these two possibilities** because it was designed by the same system that chose the aesthetic.

---

## Implications for the Pipeline

**[NUANCED by independent evaluation]:** The original framing — "~8 of 22 are aesthetic preferences enforcing TASTE rather than QUALITY" — needs recalibration. The independent pipeline evaluator found the soul constraints "reasonable and GENERATIVE," arguing they "force creative solutions within a distinctive design language." The correct framing is:

- **10 constraints are evidence-based or methodology** (7, 9, 10, 14, 18, 19, 20, 21, 22 + #14 with circularity caveat) — these have empirical grounding independent of this system's aesthetic
- **2 constraints are aesthetic amplifications** (1, 2) — these amplify an observed direction from the reference and are generative (they create identity, they force creative problem-solving). They are defensible design decisions, even though they exceed the source observation
- **6 constraints are aesthetic preferences** (5, 8, 11, 12, 13, 15) — these have weak or self-referencing evidence
- **4 constraints are weakly grounded** (3 single-source: 6, 16, 17 + 1 arbitrary: 4)

The enforcement apparatus is partially enforcing taste, but the CORE identity constraints (#1, #2, the amplifications) are NOT arbitrary — they are deliberate design decisions that produce a distinctive and recognizable system. The independent evaluator's key insight: "The constraints are GENERATIVE — they force designers to use spacing, borders, and backgrounds for hierarchy." Removing border-radius: 0 wouldn't just change aesthetics; it would eliminate the creative constraint that forces non-obvious hierarchy solutions.

**What remains problematic:** The documentation framing (extraction vs amplification), the weaker aesthetic preferences (#5, #8, #11-13, #15) that lack the directional grounding of #1/#2, and the enforcement APPARATUS (57 gates for 22 rules) being disproportionate to the constraint set's actual evidence base.

**[PA CIRCULARITY WARNING — Patterns 1, 3, 5]:** The "evidence-based" classification for constraints #14, #21, and #22 relies on PA data (PA-05 scores, auditor agreement, PA-35/PA-52 assessments). Since PA-05 and 61% of PA questions embed this system's aesthetic values, PA-derived evidence for soul constraints is partially circular. The 8 "evidence-based" constraints should be re-examined: which would be validated by a DIFFERENT evaluation instrument (e.g., Apple HIG, Material Design, or pure usability heuristics)? Constraints #9 (no 2px borders), #10 (accent borders >= 4px), #18 (no density stacking), and #21 (no extreme voids) are likely instrument-independent. Constraints #14 (hover lift), #22 (visual interest), and #7 (serif for display) partially depend on this system's assessment framework.

The 8 genuinely evidence-based constraints (2px borders, density rhythm, void prevention, visual interest distribution, accent border weight, display typography, hover lift, serif usage) could form a much smaller, more defensible core — though even this core should be tested: would a PA instrument from a DIFFERENT design tradition validate the same 8?
