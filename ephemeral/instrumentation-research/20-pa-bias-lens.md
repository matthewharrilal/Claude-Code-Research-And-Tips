# PA Circularity Bias Lens

## A. Precise Statement of the Bias

PA-05 and all 69 PA questions were designed by the same system that produced the 22 soul constraints (border-radius: 0, warm palette, no shadows, etc.). The questions embed this system's aesthetic values as default assumptions about what "designed" means -- sharp edges read as "decisive," warm tones read as "editorial," flat surfaces read as "honest." When PA-05 is used as ground truth to evaluate whether soul constraints are evidence-based or merely aesthetic, the measurement instrument and the object being measured share a common origin, making the evaluation circular. Any finding of the form "PA-05 validates soul constraint X" is potentially the system confirming its own preferences.

The circularity is partial, not total. Some PA questions measure universal perceptual properties (readability, spatial balance) that would apply regardless of style. But others measure conformance to THIS system's aesthetic ideology while framing it as general quality assessment.

## A.1 Independent Cross-Validation Summary

**[INDEPENDENT CHECK]** A fresh-eyes Opus agent independently classified all 69 PA questions (2026-02-27, `_truth-check/pa-findings.md`). The independent classification found **34 UNIVERSAL / 22 SYSTEM-SHAPED / 13 AMBIGUOUS** (49% / 32% / 19%).

This file's classification below finds **27 NEUTRAL / 42 SHAPED** (39% / 61%).

**Methodology difference explains the gap:** This file uses a binary classification (neutral vs shaped). The independent evaluator uses a three-way classification (universal / system-shaped / ambiguous). The 13 "ambiguous" questions are the swing votes — this file classified most of them as SHAPED, the independent evaluator placed them in a separate category. If AMBIGUOUS questions split 50/50, the effective numbers are: independent = ~40 neutral-leaning / ~29 shaped-leaning (58% / 42%) vs this file's 27 / 42 (39% / 61%).

**[NUANCED]** Key reclassification candidates where this file may be too aggressive in calling questions "shaped":
- **PA-01** ("first thing that bothers you"): This file says it "primes for defect-finding within THIS aesthetic." The independent evaluator classified it as UNIVERSAL — "first thing that bothers you" is a standard design review question usable in any context. The priming concern is valid but does not make the question system-specific.
- **PA-04** ("eye goes where it should"): This file says "'should' defined by THIS system's hierarchy model." Independent evaluator classified as UNIVERSAL — visual hierarchy direction is a core design principle across all traditions.
- **PA-05b** ("one designer voice"): This file says "coherence-as-quality is a philosophical position." Independent evaluator classified PA-05 sub-criteria as partially universal — coherence IS valued across virtually all design traditions (even maximalist ones seek deliberate coherence).
- **PA-11** ("margins generous or anxious"): Classified SHAPED here, AMBIGUOUS independently. Spatial confidence IS universal; the specific 65-80% range is system-specific.
- **PA-12** ("eyes flow smoothly"): This file says "brutalist traditions disagree." Independent classified as UNIVERSAL. Even brutalist design has intentional flow — visual flow assessment is universal, though "smooth" carries connotations.
- **PA-13** ("clear visual ending"): This file says "bookending is THIS system's closure model." Independent classified as UNIVERSAL — clear endings are standard design practice.
- **PA-75** ("page ends with designed conclusion"): Classified SHAPED here, UNIVERSAL independently. A page ending well vs just stopping is universal.

**[VERIFIED]** This file correctly identifies these questions as system-shaped, confirmed by independent evaluation:
- PA-18 (gray family / warm palette), PA-19 (element from different website), PA-20 (personality match), PA-24 (system feel), PA-42/43/44 (metaphor ideology), PA-60-68 (all Tier 5)

**Net assessment:** This file's 61% aesthetic-shaped figure is likely an OVERCOUNT. A more defensible figure is **45-55% system-shaped** depending on how ambiguous questions are classified. The core finding (PA has substantial system-specific bias) holds, but the magnitude is overstated by ~10-15 percentage points.

---

## B. PA Question Classification: AESTHETIC-NEUTRAL vs AESTHETIC-SHAPED

### AESTHETIC-NEUTRAL (27 questions)
These measure properties any viewer would agree on regardless of design philosophy.

| ID | Question summary | Why neutral |
|----|-----------------|-------------|
| PA-02 | Text uncomfortable to read? | Legibility is physiological, not stylistic |
| PA-08 | Text you have to squint to read? | Contrast/size is measurable, style-independent |
| PA-14 | Every column has room to breathe? | Content truncation is objective |
| PA-15 | Left edge alignment positions? | Alignment count is factual |
| PA-22 | User with only this screen feels served? | Responsiveness is functional |
| PA-23 | What changed for worse at 768px? | Breakage is observable |
| PA-37 | Container with 5+ items competing? | Information overload is cognitive, not aesthetic |
| PA-38 | Card/callout has clear reading order? | Reading order is information architecture |
| PA-46 | At 768px, reorganization makes sense? | Layout logic is functional |
| PA-50 | Consecutive blank viewports? | Void measurement is dimensional |
| PA-51 | Content-dense, balanced, sparse, void? | Density is measurable |
| PA-53 | Container uses 65-80% horizontal space? | Width ratio is measurable |
| PA-55 | Can you describe how sections differ without code? | Perceptibility is threshold-based |
| PA-56 | Can you FEEL tracking difference? | Perceptibility is threshold-based |
| PA-73 | Element invisible/unreachable for keyboard user? | Accessibility is functional |
| PA-77 | 3+ levels of typographic importance? | Hierarchy count is factual |
| PA-80 | Can you reach any section via visible nav? | Navigation is functional |
| PA-81 | Chart communicates ONE thing in 5 seconds? | Communicative clarity is cognitive |
| PA-29 | More than 3 text styles fighting for attention? | Cognitive overload is measurable |
| PA-39 | First screenful: how much header vs content? | Ratio is measurable |
| PA-47 | At what scroll position do you feel "seen this"? | Monotony detection is universal |
| PA-52 | Each third has at least one designed moment? | Distribution is measurable |
| PA-54 | Structural promises fulfilled by content? | Promise-delivery is factual |
| PA-70 | Visual treatment responds to content density? | Content-form coupling is observable |
| PA-71 | Transition feels like handoff or collision? | Abruptness is perceptual, not stylistic |
| PA-74 | Do all changes at boundary point same direction? | Coherence direction is logical |
| PA-75 | Page ends with designed conclusion or just stops? | Presence/absence of ending is factual |

### AESTHETIC-SHAPED (42 questions)
These embed this system's specific design philosophy as quality criteria.

| ID | Question summary | Embedded aesthetic assumption |
|----|-----------------|------------------------------|
| PA-01 | First thing that bothers you? | Primes for defect-finding within THIS aesthetic |
| PA-03 | One designer or three? | Assumes unity = quality; maximalist traditions disagree |
| PA-04 | Eye goes where it SHOULD? | "Should" defined by THIS system's hierarchy model |
| PA-05 | Would you put your name on this? | "Name-worthy" calibrated to this system's DESIGNED/FLAT scale |
| PA-05a | Intentional composition or assembled? | "Intentional" = multi-scale coherence per THIS system |
| PA-05b | One designer voice? | Coherence-as-quality is a philosophical position |
| PA-05c | Spatial balance feels considered? | "Considered" thresholds (65-80% width) are system-specific |
| PA-05d | Execution quality high? | "Polish" defined by THIS system's token compliance |
| PA-11 | Margins generous or anxious? | "Confident" margins = this system's spatial philosophy |
| PA-12 | Eyes flow smoothly? | Flow is valued by editorial traditions; brutalist traditions disagree |
| PA-13 | Clear visual ending? | Bookending is THIS system's closure model |
| PA-16 | Two identical elements match? | Consistency valued over intentional variation |
| PA-17 | Visual rhythm or random? | Rhythm-as-quality is genre-specific |
| PA-18 | All grays same family? | Warm palette coherence is THIS system's color philosophy |
| PA-19 | Element from different website? | "Belonging" defined by THIS vocabulary |
| PA-20 | Visual personality matches verbal? | Personality-matching is this system's content-form thesis |
| PA-24 | Feels like a SYSTEM or one-off? | System coherence is the design goal; bespoke approaches disagree |
| PA-25 | Identity persists without header? | Identity persistence is THIS system's DNA model |
| PA-26 | Wrong but intentional -- rule forcing bad outcome? | Assumes rules CAN force bad outcomes (self-referential) |
| PA-27 | Would you design it this way from scratch? | "Good design" defaults to evaluator's training |
| PA-28 | 3 changes to make it terrible? | Fragility assessment calibrated to THIS aesthetic |
| PA-30 | Layout designed for this width? | "Designed for" assumes this system's width philosophy |
| PA-31 | Space around content: designed or leftover? | "Designed space" is this system's spatial confidence concept |
| PA-32 | Visual weight distributed purposefully? | "Purposeful" distribution = this system's density arc |
| PA-33 | Largest empty space: silence or dropped signal? | Music metaphor IS this system's framing of space |
| PA-34 | Section transition: designed moment or empty space? | "Designed moment" = multi-channel shift from THIS system |
| PA-35 | Interest peaks/valleys/fades? | Arc-shaped interest = this system's compositional model |
| PA-36 | Dramatic visual moment? | "Drama" defined by THIS system's mechanism vocabulary |
| PA-41 | Patterns repeated 4+ times without variation? | Anti-monotony rule from THIS system's rhythm theory |
| PA-42 | Metaphor looks wrong? | Metaphor quality is this system's organizing principle |
| PA-43 | Same metaphor with less visual cost? | Perceptual cost economics is THIS system's framework |
| PA-44 | Sense metaphor from structure alone? | Structural metaphor = HIGHEST in THIS system's spectrum |
| PA-45 | Single moment as example of good design? | "Good design" anchored to evaluator's aesthetic |
| PA-48 | First or last choice among five? | Ranking calibrated to THIS aesthetic training |
| PA-60-68 | All 9 Tier 5 questions | Compositional depth stack is THIS system's theory |
| PA-72 | Replace content -- would design need to change? | Content-form coupling is THIS system's thesis |
| PA-76 | Visual journey has shape? | Narrative arc = THIS system's compositional model |

### Ratio: 39% neutral, 61% aesthetic-shaped

**[INDEPENDENT CHECK — NUANCED]** Independent evaluation found 49% universal (34/69), suggesting this 39%/61% split overcounts system-shaped questions by ~10-15 percentage points. See Section A.1 above for methodology differences and specific reclassification candidates. A more defensible ratio is approximately **45-55% neutral / 45-55% shaped**, depending on how 13 ambiguous questions are classified.

PA-05 itself (the PRIMARY metric) is fully aesthetic-shaped. All 4 sub-criteria encode this system's definition of quality. **[INDEPENDENT CHECK — NUANCED]** However, the independent PA evaluator notes: "PA-05 is measuring something REAL. The 1.5/4 Flagship experiment genuinely had imperceptible backgrounds and uniform typography. The 3.5/4 Gas Town refine genuinely had visible compositional depth. PA-05 correlates with actual perceptual quality even if its vocabulary is system-specific." Verdict: "Biased toward THIS system's aesthetic but not broken. It would correctly identify a BAD page in any system."

## C. Audit Checklist: Patterns to Look For

### Pattern 1: PA-05 Used as Evidence for Soul Constraint Validity
**Description:** Any argument of the form "PA-05 improved when soul constraint X was enforced, therefore X is evidence-based."
**Why it matters:** PA-05 was designed to reward soul-compliant output. Improvement proves compliance, not quality.
**Enrichment principle:** Separate PA-05 into neutral sub-findings (readability improved) vs shaped sub-findings (coherence improved). Only neutral findings count as independent evidence.
**[INDEPENDENT CHECK — VERIFIED]** Independent PA evaluator confirms this pattern exists. However, adds nuance: "PA-05 correlates with actual perceptual quality across builds" — the circularity is real but PA-05 is not ONLY measuring system compliance. A page with zero borders and uniform 16px typography would fail quality assessment in most design traditions.

### Pattern 2: "Designed" Treated as Objective Category
**Description:** PA-05's FLAT/ASSEMBLED/COMPOSED/DESIGNED scale treated as measuring an objective property rather than conformance to a specific aesthetic philosophy.
**Why it matters:** "DESIGNED" means "mechanisms in conversation" -- a concept invented by this system. Other design traditions define quality differently.
**Enrichment principle:** Flag every use of DESIGNED/FLAT labels. Add qualifier: "per this system's compositional model" or note what alternative traditions would say.

### Pattern 3: Soul Constraint Defended by PA Question That Assumes It
**Description:** e.g., "border-radius: 0 is validated because PA-19 ('feels like a different website') catches rounded corners." But PA-19 catches violations of THIS vocabulary, not bad design universally.
**Why it matters:** The question was written to enforce the constraint. Using it as evidence for the constraint is definitional circularity.
**Enrichment principle:** For each soul constraint, ask: "Would a PA question from a DIFFERENT design system (Material Design, Apple HIG) reach the same conclusion?" If not, mark the evidence as system-internal.

### Pattern 4: Warm Palette Preference Disguised as Perception Science
**Description:** Arguments that warm tones are "editorial" or "confident" while cool tones are "sterile" or "institutional."
**Why it matters:** These are aesthetic associations, not perceptual facts. The Economist, MIT Technology Review, and Stripe all use cool palettes to similar editorial effect.
**Enrichment principle:** When temperature language appears, substitute: "this system associates warm tones with editorial authority" rather than treating it as universal.

### Pattern 5: Mechanism Count Used as Quality Proxy
**Description:** Tier definitions (Floor=5, Middle=8-10, Ceiling=12-15, Flagship=16-18 mechanisms) treated as if more mechanisms = higher quality.
**Why it matters:** This mapping was created by the same system. A Dieter Rams page with 3 mechanisms could outperform an 18-mechanism page. The count is a system-internal metric.
**Enrichment principle:** Flag every mechanism count comparison. Add: "mechanism count is a system-specific proxy, not an independent quality measure."

### Pattern 6: Auditor Agreement Treated as Ground Truth
**Description:** "9/9 auditors flagged X, therefore X is a real problem." But all 9 auditors receive the same PA questions (which embed the same aesthetic).
**Why it matters:** Agreement among identically-prompted agents is consensus, not independence. It proves the questions reliably detect X, not that X matters universally.
**Enrichment principle:** For high-agreement findings, ask: "Would an auditor using Apple HIG questions, or a brutalist design critic, reach the same finding?" If yes, the finding is style-independent. If no, it is system-shaped consensus.
**[INDEPENDENT CHECK — NUANCED]** The independent PA evaluator notes that auditors DO provide "genuine insights, not going through motions" — Gas Town Auditor A gave detailed experiential analysis, Panopticon Auditor D was honest about screenshot failures, Auditor I provided real adversarial analysis. The concern about consensus-not-independence is valid for AESTHETIC judgments but less valid for PERCEPTUAL findings (whitespace voids, readability failures, contrast issues). The 9/9 ceiling whitespace flag was genuinely catching a real problem any evaluator would notice. The pattern is most dangerous for questions like PA-17 (rhythm) or PA-36 (dramatic moment), less dangerous for PA-02 (readability) or PA-50 (blank viewports).

### Pattern 7: "Perceptual Physics" Claimed for Aesthetic Preferences
**Description:** Statements like "guardrails are perception physics, not preferences" applied to thresholds that are actually convention (e.g., 940-960px container width, 65-80% viewport utilization).
**Why it matters:** Some thresholds ARE perceptual physics (contrast ratios, minimum font sizes). Others are conventions this system has elevated to physics status.
**Enrichment principle:** For each "physics" claim, test: "Is there a measurable human perception limit being referenced (Weber's law, contrast sensitivity), or is this a design convention?" Reclassify conventions honestly.
**[INDEPENDENT CHECK — NUANCED]** The independent pipeline evaluator validates some thresholds as genuinely empirical: "The minimum deltas (15 RGB, 0.025em letter-spacing, 120px stacked gap) are empirically derived from actual failures. This is real design engineering." The independent gate evaluator specifically praises GR-55's perceptibility thresholds: "doesn't just count CSS differences — it requires perceptible deltas (>=15 RGB, >=2px font-size, >=0.5px letter-spacing). This solves the 'technically compliant, visually blank' problem." The pattern is valid for SOME claims (940-960px container width is a convention, not physics) but overstated for others (15 RGB delta and ghost mechanism detection at <0.5px borders ARE grounded in perceptual limits).

### Pattern 8: Emotional Arc Framework as Objective Assessment
**Description:** The 4-register emotional arc (SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE) treated as measuring real emotional impact rather than conformance to this system's narrative model.
**Why it matters:** These four registers were chosen by this system. Other frameworks (Kahneman's peak-end, Norman's visceral/behavioral/reflective) would produce different assessments of the same page.
**Enrichment principle:** When emotional arc scores appear as evidence, add: "assessed using this system's 4-register framework; alternative frameworks may yield different conclusions."
