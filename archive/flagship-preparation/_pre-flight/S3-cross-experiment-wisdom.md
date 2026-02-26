# S3: Cross-Experiment Wisdom -- Tacit Knowledge from Doing

**Agent:** wisdom-extractor (Opus)
**Date:** 2026-02-17
**Sources:** Ceiling experiment (12 agents, 8 files + fix patches + re-audit), Middle experiment (8 agents, 32 files including retrospective + 8 TAKEAWAYs), Mode 4 Standalone PA (12 agents, 11 outputs, 102 screenshots), Scale exploration (6 agents, 6 reports), Flagship prep research (6 agents, 6 reports), Master Retrospective v2 (507 lines)
**Purpose:** Capture EXPERIENTIAL knowledge -- things learned from actually DOING the experiments, not from theorizing. Focus on tacit knowledge at risk of being lost.

---

## I. THE MIDDLE EXPERIMENT: WHAT ACTUALLY HAPPENED

### 1.1 The 8-11x Timing Discrepancy Was the Real Discovery

The Middle experiment was planned for 70-100 minutes (tier model prediction) with early estimates of 4.5-6.5 hours. It completed in ~35 minutes. This was not "fast execution" -- it was a PLANNING MODEL ERROR. The tier model estimates SEQUENTIAL HUMAN time. Agent teams execute PARALLEL phases with separate context windows. The formula: ~4-5 min per agent, 3-4 wave parallelism. Every timing estimate in the project was based on the wrong model.

**What this means for flagship:** Ceiling (predicted 150-220 min) actually took ~45-60 min. Flagship (predicted 240-400 min) will likely take 60-120 min with proper wave sequencing. The real constraint is not wall-clock time but AGENT COUNT and WAVE DEPENDENCIES.

### 1.2 The Builder Stopped Without Finishing

The builder received a plan specifying "#14 Footer Mirror" with full CSS details. The builder implemented Sections B-E (content) and stopped. No footer. No self-check. No message to anyone saying "done."

**The tacit knowledge:** Builders' mental model is "implement the technical content," not "complete the designed artifact." The footer was conceptualized as a structural element, not content. Structural elements feel optional to builders; content feels mandatory. This is not a bug -- it's how LLM agents process long specifications.

**The fix that worked in ceiling:** The build plan EXPLICITLY called out the footer as a "corrective from Middle experiment's missing footer." This binary correction rule ("do X because not-doing-X was the previous failure") achieved 100% compliance.

### 1.3 "Professionally Stiff" Was the Verdict Nobody Expected

PA-05 4/4. Novelty 3/3 STRONGLY NOVEL. 12 mechanisms across 5 categories. The perceptual auditor: "specifications applied correctly, not composition felt through." Cold look: "Professional but stiff -- feels like a technical manual that wants to be approachable but hasn't quite relaxed."

**The tacit knowledge:** There is a qualitative gap between PASSING and FEELING RIGHT that cannot be closed by deploying more mechanisms or meeting more thresholds. The border-weight gradient (4px to 3px to 1px for security layers) was the ONLY element the novelty evaluator called "the design highlight" -- and it was the only mechanism deployed with genuine content-driven PURPOSE, not category-fulfillment purpose. Content-driven decisions create more perceptual impact than large structural ones.

### 1.4 Zero Messages Was First Celebrated, Then Corrected

The initial retrospective listed "zero SendMessage calls" under "What Went Right" -- fast execution, zero coordination overhead. The user identified this as a framing error. The retrospective was updated to v2: zero messaging moved to "What Went Wrong." Evidence: CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT messaging). Missing footer was the smoking gun -- the builder couldn't ask "What does Footer Mirror look like?"

**The corrected understanding:** Speed and quality trade off. The flat TOPOLOGY (no intermediate captains) is validated. The COMMUNICATION PROTOCOL (file-only vs file + messaging) determines quality.

### 1.5 Judgment Rules Achieved 0% Compliance

Binary soul rules (border-radius: 0, box-shadow: none, no pure black/white, etc.) scored 7/7 -- perfect compliance. Judgment rules (token compliance "should be 80%," CPL "should be 45-80," heading spacing "should be 1.5:1") scored 0/3 -- zero compliance. Communication "should" instruction: 0% compliance. Perfect split. THE most important architectural principle for agent systems.

---

## II. THE CEILING EXPERIMENT: WHAT ACTUALLY BROKE

### 2.1 We Prepared for the Wrong Failure

16 agents spent extensive effort identifying container width as "THE primary Phase D failure mode" and "NON-NEGOTIABLE." The preparation team BELIEVED they had prevented it by documenting it extensively. The experiment's actual dominant failure was a catastrophic whitespace void (70-80% of scroll is blank). Container width was likely a FALSE POSITIVE -- CSS specified 960px correctly, and Mode 4 auditors described "a narrow column floating in vast emptiness" consistent with correct container width.

**The tacit knowledge:** Emergent failures arise from INTERACTIONS between well-specified components. No amount of individual component verification catches them. The only way to detect emergent failures is to BUILD THE THING AND LOOK AT IT. The preparation that identifies risks without building procedural gates creates an ILLUSION of safety.

### 2.2 The Metaphor Scored 12/12 -- And That Was the Problem

The "Secure Facility" metaphor scored 12/12 in derivation, 0/4 perceptual risk. Content-form analysis revealed: the metaphor was too LITERAL. A "secure facility" metaphor for documentation about secure access control has zero interpretive distance. It renamed what was already there rather than reframing it. Mode 4 Auditor G measured metaphor survival at 35-45% without text labels.

**The deeper analysis (from content-form):** When metaphor maps 1:1 onto content, it is not a metaphor -- it is a LABEL. "Juliet is the sun" works because Juliet is NOT the sun. The reader's effort to bridge the gap creates meaning. "Secure facility for a secure facility" has zero gap. The metaphor survived through READING (zone labels), not SEEING (visual structure). A productive metaphor would introduce a dimension NOT present in the content's own vocabulary.

**The quantitative measure:** Metaphor survival rate without labels. If <50% visual strength without reading zone text, the metaphor is "announced" not "structural." Ceiling achieved ~40%. This should be a pre-build gate.

### 2.3 The Builder Never Questioned the Spacing Budget

The build plan specified zone padding (64px / 48px / 32px / 24px), checkpoint margins (~80px each), heading margins (~48px each), and transition gaps. A simple calculation: 7 zones x ~90px avg padding + 5 checkpoints x ~110px + 25 headings x ~40px + 7 transitions x ~46px = ~2,700px of whitespace. On ~6,000px of content, that is 45% void BEFORE any intra-section spacing.

**The arithmetic that would have caught it:** Total whitespace / total page height. If the planner had calculated this ratio and found it >35%, they would have compressed. A 30-second calculation that no one did.

**From the process retrospective:** The build plan never asked: "If I have 7 zones with this padding, plus 5 checkpoints with 80px margins, plus 25 headings with 48px margins, how tall is this page going to be?" The plan specified WHAT to build without ever calculating HOW TALL the result would be.

### 2.4 PA-2's Finding Was Dismissed -- And It Was Right

The initial verdict dismissed PA-2's "3,600px of blank space" as a Playwright contention artifact. 5 agents saw a complete page; PA-2 saw void. The verdict applied consensus epistemology: 4/5 agree, dissenter is wrong.

**The metacognitive error (from the metacognitive analysis):** The 4 agreeing agents were checking for PRESENCE ("are all mechanisms deployed?"). PA-2 was checking for EXPERIENCE ("what does it feel like to scroll?"). They were answering DIFFERENT QUESTIONS. The consensus was about completeness; PA-2's dissent was about proportion.

**The specificity signal that should have triggered investigation:** PA-2 gave precise scroll-position measurements of void regions (2160-5760px). Playwright artifacts produce blank screenshots or failed element queries -- they do NOT produce precise scroll-position measurements. The specificity of PA-2's finding was evidence of genuine observation, not rendering failure.

**The cost of dismissal:** An entire additional audit round (Mode 4, 12 agents, 102 screenshots, 48 PA questions) to rediscover what PA-2 had already found.

### 2.5 The Fix Team Solved the Wrong Problem

40 CSS changes. ~1,652px estimated whitespace reduction. Re-audit verdict: 70-80% void UNCHANGED. The fix treated a CONTENT problem as a CSS problem.

**From the process retrospective:** The fix estimated whitespace savings arithmetically (sum of individual padding reductions) without measuring TOTAL page void. 1,652px sounds large, but when distributed across a 12,000px page, each individual reduction is imperceptible. The fix addressed ~28-35% of the void; 65% remained untouched.

**The fundamental misdiagnosis:** Zones 3-4 had structural containers (zone wrappers, checkpoint dividers, zone indicators) but minimal content. The void was not excessive padding between content -- it was entire zones that were mostly empty. CSS cannot fix a content deficit.

**Post-fix, cold-look NO verdicts at 1440px INCREASED from 2 to 7.** The fix made the page WORSE perceptually because adding designed elements (security stack, featured table) alongside the void made the contrast more jarring. Designed moments surrounded by emptiness feel more unfinished than emptiness alone.

### 2.6 The Build Plan's Pacing Assessment Was Wrong

The build plan's Pacing Assessment (line 634) identified LOW risk with "CHANGING STATE" breathing model. It said: "Risky transitions: NONE -- all transitions use state-change model, not empty space." This was false. The checkpoint implementations WERE empty space: empty `<div>` elements with large margins and a border, with no content, no labels, no visual substance.

**The tacit knowledge:** Pacing assessment in the plan evaluated CONCEPTUAL transition quality, not SPATIAL transition reality. A "state-change breathing model" sounds sophisticated but implements as an empty `<div>` with margins. The concept was evaluated; the implementation was not.

---

## III. THE MODE 4 AUDIT: WHAT 9 INDEPENDENT EYES SAW

### 3.1 The Whitespace Void Was THE Finding

9/9 auditors independently identified the whitespace void as the dominant failure. Highest corroboration rate in the project's history. The finding was so pervasive it was invisible to specialized observers (who measured specific properties) and only visible to cold-look observers (who evaluated the whole page).

**Auditor language (showing the finding's dominance):**
- Auditor A: "Vast white desert... makes page feel half-built"
- Auditor B: "12-15 completely blank screens at desktop"
- Auditor C: "This feels like a phone design stretched across a cinema screen"
- Auditor D: "24 CONSECUTIVE FRAMES of nothing. This isn't breathing space -- it's abandonment"
- Adversarial: "This is not breathing room. This is a WASTELAND."

### 3.2 PA-05 Was Downgraded from 3/4 to 1.5/4

The initial audit scored PA-05 as 3/4 (only PROPORTIONATE failed). Mode 4 downgraded DESIGNED from PASS to PARTIAL PASS. The critical distinction: "designed MOMENTS but not designed COMPOSITION." A page can have excellent individual components while lacking designed RELATIONSHIPS between those components.

### 3.3 14 Mechanisms Deployed, Only 1 Clearly Perceivable

Programmatic audit: 14 mechanisms confirmed in CSS. Mode 4 auditors: 1 clearly designed moment perceived (architecture diagram). The build plan specified 5 "designed moments" (DM-1 through DM-5). Only DM-1 survived to perception. The other 13 mechanisms EXISTED in code but were BURIED under whitespace.

**The metric gap:** "14 mechanisms deployed" is a CODE metric. "1 mechanism perceived" is a PERCEPTION metric. For flagship, both are needed: "N deployed" AND "M perceived" (M <= N).

### 3.4 768px Viewport Rated Higher -- Accidentally

Every auditor rated 768px more favorably. At 768px, content fills its container, making whitespace feel less abandoned. This was ACCIDENTAL success -- the viewport constraint DID what the designer DIDN'T: it made the content proportional.

**The implication:** If the narrow viewport accidentally fixes the proportion problem, the wide viewport has a HORIZONTAL composition problem. At 1440px, 960px column = 67% of viewport width. 33% is compositionally unused. Responsive design means "this width feels designed for," not just "it works at this width."

### 3.5 The Screenshot Pre-Capture Pattern Was Validated

102 screenshots taken by team lead BEFORE spawning auditors. 9 auditors ran in parallel reading saved PNGs via Read tool. Zero Playwright contention. Zero tooling failures.

**This pattern should be UNIVERSAL.** Previous experiments had 4+ concurrent Playwright agents causing severe contention. Sequential Playwright scheduling eliminates contention but is slow. Pre-capture eliminates contention AND enables full parallelism.

---

## IV. THE RETROSPECTIVE: WHAT THE ANALYSIS DISCOVERED

### 4.1 "Designed" Has Two Independent Dimensions

The retrospective's most important theoretical finding: "Designed" has two INDEPENDENT dimensions:

1. **Vocabulary fluency** -- knowing many mechanisms and deploying them correctly (Middle achieved this)
2. **Compositional fluency** -- choosing mechanisms that EXPRESS a coherent concept (Ceiling attempted this but was obscured by spatial failure)

These are INDEPENDENT axes, not sequential. A page can be high-vocabulary-low-composition (Middle: 12 mechanisms, "professionally stiff") or high-composition-low-vocabulary (a hand-coded page with 3 techniques but clear authorial voice). The tier model tracks vocabulary. Nothing tracks composition.

### 4.2 The Prompt Had Diminishing Returns ("Preparation Ceiling")

The ceiling execution prompt was 1,004 lines with ~56 rules. The Middle execution prompt was substantially shorter. Middle achieved 960px container compliance. Ceiling violated it (or appeared to). Longer prompt = worse compliance.

**The preparation ceiling (from metacognitive analysis):** ~100-200 lines for LLM agent builders. Beyond this, additional rules dilute critical rules. In a 56-rule environment, each rule gets ~1/56th of builder attention. Container width (most critical guardrail) got the same attention as "use italic for h3" (minor style rule).

**The paradox:** More preparation increased the PREPARATION TEAM'S confidence without increasing the BUILDER'S compliance. The 1,004-line prompt served psychology (reducing preparer anxiety) not mechanics (improving builder output).

### 4.3 Content Volume Was the Variable Nobody Checked

Across 16 agents and 1,004 lines, NONE addressed: "Does the content fill the planned spatial architecture?" The metaphor demanded 4 zones. No one asked: "How many words of content exist for Zone 4?"

**From content-form analysis:** The content naturally divided into 5 sections. The metaphor imposed 4 zones with 7 sub-zones and 7 transitions. Of the 7 sub-zones, 3 were "performative" -- existing for the metaphor, not the content. The metaphor inflated 5 natural sections into 10 structural blocks.

**Content-form verdict on zones:**
- 3 REAL zones (content-justified boundaries)
- 1 PARTIALLY REAL (organizational value but not required)
- 3 PERFORMATIVE (existing solely for metaphor theater)

**The fundamental test:** Content inventory BEFORE metaphor selection. Count renderable content per natural section. Only allow zones with >=800px of renderable content.

### 4.4 The Root Cause Was Pipeline Asymmetry

**From the process retrospective's root cause analysis:** "The pipeline optimizes for COMPOSITIONAL SPECIFICATION without spatial accountability." The pipeline measures what it BUILDS (mechanisms deployed, tokens compliant, soul rules met) but never measures what it LEAVES EMPTY (void percentage, content-to-scroll ratio, dead zones).

The metaphor derivation verified conceptual coherence. The build plan verified mechanism assignment. The programmatic audit verified CSS correctness. The perceptual audit verified element quality. NONE verified that the sum of all these well-specified parts produced a spatially proportionate whole.

---

## V. CROSS-CUTTING EXPERIENTIAL PATTERNS

### Pattern 1: The "Applied Correctly vs Felt Through" Gap

This appeared in EVERY analysis stream:

- Middle verdict: "specifications applied correctly, not composition felt through"
- Ceiling process retro: "Strong compositional blueprint, catastrophic spatial blindness"
- Mode 4 audit: "designed MOMENTS but not designed COMPOSITION"
- Retrospective: vocabulary fluency != compositional fluency
- Scale exploration: "richness from the ratio of signal to silence, not from total signal"
- Content-form analysis: "the metaphor RENAMED what was already there rather than REFRAMING it"
- Blind spots report: "We're efficiently reproducing our own patterns, but claiming this equals objective quality improvement"

**The tacit knowledge:** Rules produce compliance. Metaphor produces intention. Iteration produces confidence. All three are needed. Middle had rules only (compliance without intention). Ceiling had rules + metaphor (intention overwhelmed by spatial failure). Neither had iteration (builder seeing the page and revising). CD-006 had ALL THREE: rules, metaphor, AND iteration. That's why it scored 39/40.

### Pattern 2: The Faithful Execution Trap

Both experiments showed builders faithfully executing plans with structural problems:
- Middle: builder implemented all mechanisms but skipped footer (structural element felt optional)
- Ceiling: builder implemented all spacing values, producing cumulative void
- Fix team: applied all CSS patches, solving the wrong problem

**From the process retrospective:** "The builder was a translator, not a designer." If the plan says "64px zone padding," the builder uses 64px. Each individual specification was reasonable; their AGGREGATE effect was catastrophic. The builder's job was to IMPLEMENT, not QUESTION. File-bus communication cannot transfer judgments embedded within specifications.

### Pattern 3: Specialized Blindness

Every specialized audit missed what unspecialized observation caught:
- Programmatic audit: verified 14 mechanisms, completely missed the void
- 2-PA audit: caught header proportions, dismissed the void finding as artifact
- Mode 4 cold-look: immediately found the void (9/9 unanimous)

**From the metacognitive analysis:** "Specialized observation systematically misses gestalt failures. The more specialized your evaluation methodology, the more vulnerable it is to problems that exist at the gestalt level."

### Pattern 4: Signal-to-Silence Inversion

**From content-form analysis:** The build plan specified 5 designed moments but 0 designed silences. The page had ~67 signal events : ~57 silence moments (1.18:1 ratio). The page's strongest element (architecture diagram) worked because it was surrounded by DESIGNED SILENCE (dark background). Everywhere else, signal and silence were evenly distributed, creating flat perceptual experience.

**The architecture diagram's secret:** Signal-to-silence ratio of ~3:1 (dark code block background surrounding the ASCII diagram). The page as a whole inverted this: ~1.2:1 with accidental void where designed silence should have been.

**The restraint principle:** Post-restraint estimate (from content-form analysis): remove zone indicators, remove checkpoint dark bars, remove workstation title bars, merge 3 sub-zones into 1 section. Result: ~45 signal events, ~65 silence elements, ratio 0.69:1. Page becomes predominantly quiet with signal moments emerging from silence.

### Pattern 5: The "Concept-to-Product" Decoupling

**From the metacognitive analysis:** "A concept rated 12/12 can produce a 1.5/4 product if the concept's structural requirements conflict with the medium's spatial constraints." Concept quality and product quality are measured on DIFFERENT AXES. The metaphor derivation was a perfect CONCEPT. It was not a buildable PLAN.

**The most telling evidence:** The metaphor derivation STRUCTURALLY PREDICTED the void. "The exterior zone should be the most open, least dense zone. Wide margins, generous whitespace, minimal borders." The 12/12 score validated the concept AS A CONCEPT. It did not evaluate whether the concept was buildable into a well-proportioned artifact.

---

## VI. THE CROWN JEWEL CONTRAST

CD-006 scored 39/40. Middle scored B+. Ceiling scored "success with critical defect." The outlier variables:

| Property | CD-006 (39/40) | Middle (B+) | Ceiling (1.5/4 PA-05) |
|----------|----------------|-------------|----------------------|
| Mechanisms | ~12 | 12 | 14 |
| Messaging | YES | NO | NO |
| Iteration | YES (multi-pass) | NO (single) | NO (single) |
| Builder saw output? | YES | NO | NO |
| Build time | 4-6 hours | 35 min | ~60 min |
| Metaphor | Implicit | None | Explicit (12/12) |

The outlier is NOT mechanism count or metaphor. It's ITERATION + COMMUNICATION. CD-006's builder saw the page between passes, received feedback, and revised. Neither Middle nor Ceiling builders ever scrolled their output.

---

## VII. FAILURE ROOT CAUSE CLASSIFICATIONS

**From the failure analysis:** 7 failures traced, classified by type:

| # | Failure | Root Cause Type | Preventable? |
|---|---------|----------------|-------------|
| 1 | Whitespace void (70-80%) | STRUCTURAL (metaphor creates void-generating obligations) | Manageable via void budget gate |
| 2 | Container width "violation" | PROCESS (measurement error, likely false positive) | Yes -- programmatic verification |
| 3 | Header too heavy | SPECIFICATION (no proportion budget) | Yes -- header <=20% of viewport |
| 4 | Zero inter-agent messaging | TOOLING (soft "MAY" instruction; need binary "MUST" gate) | Yes -- mandatory messaging gates |
| 5 | Fix patches failed | PROCESS (CSS diagnosis for architecture problem) | Yes -- root cause classification before patching |
| 6 | Audit dismissed whitespace | PROCESS (insufficient perceptual breadth) | Yes -- Mode 4 as default for ceiling+ |
| 7 | Metaphor announced not structural | STRUCTURAL (soul constraints limit visual channels) | Partially -- favor metaphors compatible with available channels |

**Key finding:** 5 of 7 failures are FULLY PREVENTABLE with process, tooling, or specification changes. 2 structural failures are MANAGEABLE through constraint budgets. No failure is INHERENTLY FATAL.

---

## VIII. EXPERIENTIAL LAWS (Observed Regularities Across 3+ Experiments)

### Law 1: Binary rules achieve 100% compliance; judgment rules achieve 0%
Evidence: 7/7 soul rules (Middle), 8/8 soul rules (Ceiling), 0/3 judgment rules (Middle), 0/1 communication protocol (both).

### Law 2: Plans don't prevent spatial failure
Evidence: 724-line build plan + 518-line metaphor derivation -> 70% whitespace void.

### Law 3: Agents do not spontaneously communicate
Evidence: 0 messages in Middle, 0 messages in Ceiling (even with explicit CP-02 protocol with templates).

### Law 4: Mechanism deployment =/= mechanism perception
Evidence: 14 deployed, 1 perceived (Ceiling). 12 deployed, "metronomic" (Middle).

### Law 5: Breadth of perspectives finds what depth misses
Evidence: 2 PAs missed void. 9 auditors found it 9/9 unanimous.

### Law 6: The measurement-perception gap is total
Evidence: Zero overlap between programmatic and perceptual findings across ALL experiments.

### Law 7: Accidental constraint beats intentional permission
Evidence: 768px accidentally composed; 1440px intentionally disastrous.

### Law 8: When an auditor reports something "impossible," investigate before dismissing
Evidence: PA-2's finding was real. Cost of dismissal: 12-agent Mode 4 re-audit.

### Law 9: Concept quality does not predict product quality
Evidence: 12/12 metaphor concept -> 1.5/4 product PA-05 score.

### Law 10: The preparation ceiling is ~100-200 lines
Evidence: Shorter Middle prompt -> better compliance. 1,004-line Ceiling prompt -> worse compliance.

---

## IX. WHAT MUST CHANGE FOR FLAGSHIP (From Experience, Not Theory)

### Do Differently:

1. **Content inventory BEFORE metaphor selection.** Count content per natural section. Metaphor adapts to content; content does not stretch to fill metaphor.

2. **Spatial budget calculation in build plan.** Sum all spacing. Calculate void %. If >30%, compress before building. 30-second arithmetic that prevents the dominant failure.

3. **Mode 4 cold-look FIRST, not last.** 3-5 cold observers see the page before specialized audit. Gestalt failures change what specialized audits evaluate.

4. **Mandatory messaging gates (binary).** Builder sends 1 clarification after reading plan, 1 anomaly flag after build. "MAY" = 0% compliance.

5. **Max 200-line execution prompt.** Base template (50 lines) + phase diff (20-40 lines) + per-agent memory (30 lines). Builder prompt under 120 lines total.

6. **One global structural pattern maximum.** 1 metaphor imposed 1,200px structural overhead. Multiple structural patterns would multiply this.

7. **Signal-to-silence ratio target: 0.6-0.7:1.** Plan SILENCES with same specificity as designed moments.

8. **At least 2 build passes with feedback between them.** CD-006 (multi-pass, 39/40) vs Middle/Ceiling (single-pass, B+/spatial catastrophe).

9. **Evaluate concepts for BUILDABILITY, not just COHERENCE.** "Can the content fill this structure?" matters more than "Is this concept internally consistent?"

10. **Kill criteria pre-committed before experiment starts.** If void >30% after first viewport audit, STOP. If 7+ cold-look NOs at 1440px, rebuild from simpler prompt. Pre-commitment neutralizes sunk cost bias.

### Avoid:

1. **Metaphors that map 1:1 onto content vocabulary.** If content uses "zones," metaphor cannot use "zones." Minimum semantic distance required.

2. **Empty structural elements.** Every HTML element must have visible content. Empty `<div>` elements with only padding and borders are void generators.

3. **Dismissing perceptual findings as rendering artifacts.** Default to believing auditor reports. Investigate before dismissing.

4. **CSS fixes for architecture problems.** Classify defects as CSS/content/architecture BEFORE patching.

5. **Prompts longer than 200 lines.** Beyond the preparation ceiling, more rules dilute critical rules.

6. **More zones than content can fill.** Maximum zone count = content sections with >=800px renderable material.

7. **Treating "technically passes" as "clearly passes."** PA-05b at exactly 2.0x threshold with zero margin is not a confident pass.

8. **Confusing concept quality with product quality.** 12/12 concept can produce 1.5/4 product.

9. **Single-pass building for ceiling/flagship tier.** Every single-pass experiment produced B+ or worse. Only multi-pass iteration produced A-level output.

---

## X. THE META-LESSON

**From the Middle experiment:** Vocabulary fluency (deploying many mechanisms correctly) achieves "designed" but not "felt through." The gap is intentionality, not technique count.

**From the Ceiling experiment:** Compositional ambition (metaphor-driven architecture) achieves novelty but not spatial proportion. The gap is buildability assessment, not concept quality.

**From Mode 4:** Specialized observation catches specialized defects. Gestalt failures require unspecialized cold-look observation. The most damaging problem is always the one that falls between every specialist's domain.

**From the retrospective:** Agent communication enables quality. Zero messaging = fast + B+. Messaging-enabled = slower + A-level. Topology is fine either way; communication protocol determines quality.

**From scale exploration:** Richness follows a concave curve. It increases with complexity up to a point, then DECREASES as complexity overwhelms spatial confidence. Restraint is a richness driver, not a limiter.

**From content-form analysis:** Signal-to-silence ratio matters more than signal quantity. The page's best element (diagram) worked because it was surrounded by designed silence. The page's worst failure (void) happened because silence was accidental, not designed.

**From the metacognitive analysis:** "The quality of our thinking about the artifact matters at least as much as the quality of the artifact itself -- and the quality of our thinking is improved more by questioning our frameworks than by optimizing within them."

**Unified experiential insight:** The pipeline provides vocabulary and constraint. It cannot provide intention and restraint. Intention comes from metaphor + iteration. Restraint comes from spatial awareness + designed silence. Both are properties of the BUILDING ACT, not the SPECIFICATION. The flagship must enable intention and restraint during construction, not just specify them in the prompt.

---

**END CROSS-EXPERIMENT WISDOM**
**Artifacts analyzed:** ~50 files totaling ~25,000+ lines across 3 experiment streams + 2 research streams
**Experiential patterns identified:** 5 cross-cutting + 10 do-differently + 9 avoid
**Experiential laws documented:** 10 observed regularities across 3+ experiments
**Failure root causes classified:** 7 (5 preventable, 2 manageable)
**Key tacit knowledge at risk of loss:** PA-2 dismissal lesson, spatial budget arithmetic, preparation ceiling at ~100-200 lines, signal-to-silence ratio, content-before-metaphor ordering, concept-to-product decoupling, faithful execution trap, the fix scope error
