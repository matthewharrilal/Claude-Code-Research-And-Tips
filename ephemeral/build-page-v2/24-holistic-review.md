# Holistic Process Coherence Review

**Author:** holistic-reviewer (Task #31)
**Date:** 2026-02-27
**Sources:** 01-current-state-map, 02-gate-audit, 03-skill-architecture, 04-reference-file-map, 07-first-principles-design, 10-orchestrator-plumbing, 11-window1-design, 12-window2-design, 13-window3-design, tc-skill-update/10-holistic-process
**Method:** Read all 10 deliverables in full. Traced every information handoff. Tested every design claim against the project's empirical record. Evaluated the system as a working creative process, not as an architecture diagram.

---

## 1. SYSTEM COHERENCE: Do the 3 Windows Form a Creative Cycle?

### The Cycle Works

The three windows form a genuine creative cycle: inhabitation+creation (Window 1) -> perception+judgment (Window 2) -> informed deepening (Window 3). Each window's output is the next window's primary input. The information handoffs are well-specified and complete.

**Window 1 -> Window 2:** The builder produces output.html + _tc-brief.md + _reflection.md. Window 2 needs only the HTML (for screenshots and gates) and the brief (sections 1+4 for auditors in the 10-holistic-process design, or zero brief for auditors per the 12-window2-design recommendation). The reflection is held for Window 3. This handoff is clean.

**Window 2 -> Window 3:** The auditor reports (or Weaver synthesis in high-stakes mode) carry experiential perception. The gate results are consumed by the orchestrator for mechanical patching and routing -- they never enter Window 3. The builder's reflection and conviction brief, held from Window 1, complete the REFINE builder's input set. This handoff is also clean.

**The cycle is generative, not circular.** Window 1 creates from content. Window 2 perceives what was created. Window 3 creates again from a richer starting position (existing artifact + external perception + original intent). This is the pattern of any creative revision process: make -> show -> revise. The architecture correctly identifies that the revision should be done by a different agent (defeating continuation bias) and that the revision input should be framed as creative invitation (not fix list).

### Two Coherence Gaps

**Gap 1: The REFINE builder lacks the orchestrator's experiential scan findings.** The orchestrator does a usability scan (Phase 2 of Window 2) and may flag BLOCKING-USABILITY issues. These findings are pre-seeded into auditor prompts but the 13-window3-design does not mention propagating them to the REFINE builder. If a usability issue was found and NOT yet fixed (e.g., because it requires structural rather than CSS changes), the REFINE builder should know about it. Currently, the REFINE builder would only learn of it indirectly through auditor reports (who were told about it and may or may not mention it in their prose).

**Recommendation:** If BLOCKING-USABILITY was flagged and not yet resolved, include a one-line note in the REFINE builder's prompt, separate from the creative direction.

**Gap 2: Post-REFINE has no structured feedback loop.** After REFINE, the orchestrator re-runs gates and (usually) ships. If the REFINE builder introduced new gate failures or degraded composition, the only signal is gate results. The architecture explicitly says "no automatic second PA." This means the REFINE builder's creative changes are evaluated only mechanically, not perceptually, unless the user explicitly requests another PA. The evidence from the project: the REFINE builder in the Gas Town run produced +1.5 PA-05 improvement. But this is n=1. A REFINE builder could also introduce new compositional problems (e.g., fixing mid-section monotony by making the mid-sections visually intense but disconnecting them from the arc).

**Recommendation:** This is a calculated risk, not a gap. The architecture's reasoning (avoid PA->REFINE->PA->REFINE loops) is sound. But the orchestrator should do its own experiential scan of the refined artifact (same quick usability check from Phase 2) before shipping. This costs ~2 minutes and catches catastrophic regressions.

---

## 2. PLUMBING-FREEDOM TENSION

### Does the Plumbing Support or Accidentally Constrain Creative Freedom?

The plumbing/freedom boundary in this design is among the clearest I have seen in the project's history. The 10-orchestrator-plumbing document (the most detailed deliverable at 1,263 lines) specifies every orchestrator action as an atomic tool call with zero interpretable instructions. The 12-window2-design draws an explicit bright line: "Plumbing never evaluates quality. Freedom never checks compliance." This is architecturally sound.

But there are five places where the plumbing creates subtle pressure on the freedom side:

### 2A. Brief Verification Gates Pressure Formulaic Briefs

BV-01 through BV-04 check that the conviction brief has specific named sections (world-description, calibration, arc, content map). The 02-gate-audit keeps these as REQUIRED. The 10-orchestrator-plumbing specifies them as text-scan gates on the brief file.

**The tension:** A builder who writes a brilliant conviction brief that uses different section names or a non-standard structure will fail BV gates. The builder is told "write your conviction brief -- this is your creative commitment, not a document for someone else" (receiving principle, line 3). But the gates enforce a specific document structure. The brief is simultaneously a creative commitment AND a verifiable artifact.

**Severity: LOW.** The brief format (5 sections, ~50 lines) is simple enough that any builder who follows the TC skill's Phase 4 will produce a conformant brief naturally. The section names are generic enough (WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, CONTENT MAP) that they do not constrain creative expression. And the gate catches genuinely truncated or empty briefs, which is a real failure mode. The pressure is toward completeness, not formula.

**However:** BV-03 ("Brief does not contain specification language: must, required, shall in creative sections") is the one BV gate that evaluates creative QUALITY, not structure. A builder who writes "the bedrock zone must feel inevitable" will fail BV-03 even though "must" there expresses creative conviction, not specification compliance. The gate's intent (catch compliance creep in the brief) is correct, but its implementation (keyword scanning) catches false positives.

**Recommendation:** BV-03 should scan for specification PATTERNS ("must be at least," "required to have," "shall not exceed"), not individual keywords. A "must" or "required" in a creative sentence is conviction. A "must be >= 15 RGB" in a creative section is compliance creep. The pattern is distinguishable.

### 2B. Gate Runner's Pass/Fail Creates a Compliance Floor

The 28 surviving gates (02-gate-audit) create a binary pass/fail floor. A page that passes all gates is "compliant." A page that fails any essential gate is "non-compliant." The routing logic treats any essential gate failure as requiring either mechanical patching (MECHANICAL failures) or creative revision (STRUCTURAL failures).

**The tension:** The compliance floor is necessary -- without it, the project's empirically proven failure modes (container width, sub-perceptual CSS, whitespace voids) recur. But a floor also bounds creative range. A builder who deliberately violates a gate for creative reasons (e.g., a single-margin value of 104px because the content's climax demands a generous pause) will be mechanically patched by the orchestrator.

**Severity: LOW-MEDIUM.** The perception thresholds (15 RGB, 120px stacked, 96px single) are derived from empirical evidence of what humans cannot perceive. A builder who sets margin: 104px believes they are making a creative choice, but the difference between 96px and 104px is below the human perceptual threshold for that property. The gates are not constraining creative range -- they are preventing builders from spending CSS budget on invisible decisions.

**Exception case:** GR-45 (typography variation) requires >= 2 distinct H2 font-size bands. A deliberate monotone typography decision (all same size, differentiated only through weight or color) would fail this gate. This is a creative choice being caught by an anti-pattern gate. The 02-gate-audit classifies GR-45 as RECOMMENDED (not REQUIRED), which correctly prevents it from blocking SHIP. But in the 12-window2-design's gate table, GR-45 appears in the ESSENTIAL list. This is a discrepancy.

**Recommendation:** GR-45 should be RECOMMENDED (as the gate audit specifies), not ESSENTIAL. The 12-window2-design's essential gate table should be corrected.

### 2C. Routing Logic Keyword Scanning

The routing decision in standard mode (2 auditors, no Weaver) involves the orchestrator scanning auditor prose for "convergent signals" and "fundamental signals." The 03-skill-architecture specifies: scan for "flat, monotonous, disconnected, tired, unrelated, copy-pasted" (REFINE signals) and "wrong feel, fighting content, incoherent" (RETHINK signals).

**The tension:** This converts the auditors' sovereign perceptual prose into keyword triggers. An auditor who writes "the mid-sections feel like they are speaking the same language as the opening, but saying less" is describing a compositional observation that does not contain any of the REFINE keywords. The orchestrator would not classify this as a REFINE signal even though it describes a legitimate compositional concern.

**Severity: MEDIUM.** The keyword approach is pragmatic (the orchestrator needs a deterministic routing algorithm) but lossy. The primary routing signal is the auditors' cold-look Ship-it verdict (YES/REFINE/NO), which is unambiguous. The keyword scan is a secondary signal for cases where the cold-look verdict and the prose narrative diverge.

**Recommendation:** The routing logic should weight the cold-look Ship-it verdict as PRIMARY and the prose keyword scan as SECONDARY/ADVISORY. The 03-skill-architecture already structures it this way (the decision tree keys on Ship-it verdicts first), so the keyword scan's role is appropriately bounded. But the prose scan should look for SENTIMENT, not KEYWORDS. The orchestrator is an LLM -- it can detect "this auditor is describing compositional flatness" without searching for the word "flat."

### 2D. File Reading Order Influences Agent Priorities

The 11-window1-design correctly identifies that reading order is "the most consequential architectural decision in Window 1." Content + TC skill first, vocabulary + constraints last. The creative process is front-loaded before compliance material.

**The subtle pressure:** The TC skill (~340 lines) arrives BEFORE the content. This means the agent reads a creative PROCESS GUIDE before encountering the MATERIAL. The agent's first engagement with the content is already shaped by the TC skill's framework (4 core axes, tension derivation, metaphor collapse). A truly inhabitation-first process would put the content BEFORE the process guide: read the material as a reader first (no framework), then read the TC skill and re-engage the material through the framework.

**Severity: LOW.** The TC skill's Phase 0 instructs the agent to "read the content deeply first" as a reader. So the sequential structure (TC skill describes the process, then the content arrives for that process to operate on) is appropriate for a GUIDED creative process. The receiving principle's line 1 ("Read the content as a reader first") further reinforces content-first engagement. The TC skill provides the FRAMEWORK; the content provides the MATERIAL. Both need to be in context before derivation begins.

**However:** This is different from the 10-holistic-process (the earlier multi-window design) where the TC skill and the content were in the SAME window, and the content was read through a deep-read instruction before any framework was applied. In the combined Window 1, the TC skill's framework is already in context when the content arrives. The agent reads the content knowing it will need to derive a metaphor, identify tensions, and write a conviction brief. This is GUIDED inhabitation, not pure inhabitation. Whether this is a problem depends on whether pure inhabitation is necessary. The project's evidence: the Middle-tier experiment used a similar guided approach and produced PA-05 4/4. Guided inhabitation works.

### 2E. The Conventions Brief's Position

The conventions brief (~40 lines) arrives LAST in Window 1, after the conviction brief is written. This is correct -- mechanical constraints should not shape creative direction. But the conventions brief is also loaded into Window 3 (REFINE builder).

**The tension:** In Window 3, the REFINE builder reads materials in a different order: artifact first, then auditor reports, then reflection, then conviction brief, then content + vocabulary + conventions. The conventions brief arrives AFTER creative direction is established, which is good. But the REFINE builder also has the existing artifact (which already embodies the conventions), so the conventions brief is partially redundant -- the builder can see the container width, the font trinity, and the spacing patterns in the HTML/CSS they are modifying.

**Severity: NEGLIGIBLE.** The conventions brief in Window 3 serves as a safety net, not as primary instruction. If the REFINE builder makes substantial changes (new sections, new grid layouts), the conventions brief ensures they do not accidentally violate mechanical constraints in the new material. The cost (40 lines of context) is trivial.

---

## 3. INFORMATION FLOW ANALYSIS

### 3A. How Content MEANING Flows Through the System

**Window 1:** The raw content enters the agent's context. The TC skill's Phase 0 instructs deep reading. The meaning flows through the 4-axis questioning (FEEL/UNDERSTAND/DO/BECOME) into the tension derivation, then collapses into the metaphor. The conviction brief captures the meaning as: world-description (the world this content lives in), calibration (how the meaning manifests in visual weight), opposition (where the meaning fights the medium), arc (the reader's journey through the meaning), and content map (structural reference).

**Window 2:** Content meaning flows to PA auditors ONLY through the artifact. Auditors see the page, not the content. If the page successfully embodies the content's meaning, auditors describe that meaning in perceptual terms. If the page fails to embody the meaning, auditors describe the absence ("this page feels like it has nothing to say" or "the design and the content seem to be about different things"). Content meaning is TESTED by Window 2 but not directly transmitted to it.

**Window 3:** Content meaning re-enters through two channels: the conviction brief (which carries the derived meaning) and the raw content markdown (which carries the original meaning). The REFINE builder has both the derived interpretation (brief) and the source material (content). They can re-derive meaning if they disagree with the original interpretation. The conviction brief's opposition map specifically names where meaning and medium fight, giving the REFINE builder a map of the creative territory.

**Assessment: STRONG.** Content meaning flows through the system with appropriate transformation at each stage. The brief compresses meaning into creative direction. The PA tests whether meaning survives compression into visual form. The REFINE builder has both compressed and original forms.

### 3B. How Design System IDENTITY Flows Through

**Window 1:** Identity enters through prohibitions.md (~419 lines) and tokens.css (~183 lines), loaded AFTER the conviction brief is written. The conventions brief (~40 lines) arrives last as mechanical summary. Identity is experienced as "the world's physics" -- what exists and what does not exist in this design system.

**Window 2:** Identity flows through the gate runner. 6 identity gates (GR-03, GR-05, GR-06, GR-08, GR-09, GR-10) verify that the artifact is a member of this design system. 3 advisory identity gates (GR-01, GR-02, GR-04) provide additional diagnostic checks. Identity does NOT flow to PA auditors -- they perceive identity compliance without knowing the identity rules. An auditor who says "every corner is sharp, nothing feels soft or rounded" is perceiving identity without having been told about the border-radius prohibition.

**Window 3:** Identity re-enters through the same files (prohibitions.md + tokens.css + conventions brief). The REFINE builder inherits the world's physics.

**Assessment: STRONG.** Identity is enforced through three independent channels: (1) the conviction brief's world-description (generative), (2) the gate runner's identity gates (mechanical), (3) the PA auditors' fresh-eyes perception (experiential). The three-channel model means identity failure requires all three channels to miss it, which is improbable.

### 3C. How the TC Metaphor Flows Through

**Window 1:** The metaphor is derived by the builder and captured in the conviction brief's world-description and calibration sections. It also manifests in the HTML/CSS (concept-based class names like `.geological-bedrock`, compositional arc, zone architecture).

**Window 2:** The metaphor flows to PA auditors ONLY through the artifact's visual expression. If the metaphor is structural (readers feel it without labels), auditors describe it. If the metaphor is decorative (readers need labels to see it), auditors do not describe it. This is the structural/decorative test in action -- Window 2 is an implicit metaphor verification.

**The 12-window2-design recommends NO conviction brief for auditors.** The 10-holistic-process (earlier design) specified Sections 1+4 (world-description + compositional arc). The 03-skill-architecture specifies Sections 1+4. This is a genuine disagreement between deliverables.

**Assessment:** The 12-window2-design's recommendation (no brief for auditors) is correct for standard mode. Fresh-eyes perception without priming produces more honest evaluation. If the auditor is told "this page uses geological descent," they will see geological descent even if it is not perceptible. The earlier designs that included brief sections for auditors were compensating for a smaller auditor pool (where auditor context helped catch more subtle issues). With the fresh-eyes principle, the metaphor's structural integrity is tested by asking: do auditors describe the metaphor without being told? If yes, the metaphor is structural. If no, it is decorative.

**Window 3:** The metaphor flows through the conviction brief (which the REFINE builder reads after forming their own impression). The REFINE builder is constrained: they may extend the metaphor but not replace it. This constraint is appropriate -- REFINE is for compositional deepening within an established metaphor. Metaphor replacement is RETHINK.

**Where metaphor gets LOST:** Between the builder's creative intent and the CSS implementation. A builder who conceives a "geological descent" may implement it with hex values that are too close (#F5F0E8 to #F0EBE3 -- a 5 RGB difference). The metaphor is IN THE BUILDER'S HEAD but not IN THE CSS. This is exactly the gap that the perception gates (GR-11 background delta) catch. The system is designed to detect this specific information loss.

### 3D. How PA Findings Flow to the REFINE Builder

**Standard mode:** Raw auditor reports (2 files, ~80-120 lines total) go directly to the REFINE builder. The receiving principle instructs: "Note where they agree and where they diverge." The builder processes auditor reports without synthesis intermediary.

**High-stakes mode:** The Weaver synthesizes 5 auditor reports into a ~60-line synthesis with AMPLIFY/RELEASE/DEEPEN creative direction. The REFINE builder receives the synthesis ONLY, not individual reports. The Weaver has performed convergence/divergence detection and reframed findings as creative direction.

**Assessment: APPROPRIATE for each mode.** In standard mode (2 reports), synthesis is unnecessary -- the builder can detect convergence/divergence across 2 short reports. In high-stakes mode (5 reports), synthesis adds value by compressing 200-400 lines of auditor prose into actionable creative direction. The Weaver's AMPLIFY/RELEASE/DEEPEN frame is particularly well-designed because it converts perception into creative invitation without converting it into a fix list.

**Where PA findings get LOST:** Advisory gate findings (GR-20 structural echo, GR-51 background delta distribution, GR-55 multi-coherence channel count) are reported by the gate runner but never reach the REFINE builder. These aspirational quality signals could inform creative refinement ("your background deltas cluster at the floor -- the page has room for more visual variety"). Currently, only ESSENTIAL gate failures are acted on (mechanically patched or flagged as STRUCTURAL for the REFINE builder).

**Recommendation:** Include a one-line advisory summary in the REFINE builder's prompt IF advisory gates flagged interesting signals. Example: "Advisory gates noted: background deltas cluster at the perception floor, and multi-coherence channel count is below aspirational level." This is information, not instruction. The builder decides what (if anything) to do with it. This addresses the concern that the REFINE builder gets only "what's wrong" (from auditors) and not "what could be richer" (from aspirational gates).

### 3E. Where Information Gets ADDED Between Windows

**Between Window 1 and Window 2:** The orchestrator adds screenshots (a TRANSFORMATION of the artifact into a visual medium) and gate results (a MEASUREMENT of the artifact against thresholds). Both are new information that did not exist in Window 1.

**Between Window 2 and Window 3:** The auditor reports add EXTERNAL PERCEPTION -- how the page feels to someone who did not create it. The Weaver synthesis adds CREATIVE REFRAMING -- perception recast as creative territory. Both are entirely new information.

**The key addition in Window 3:** The REFINE builder adds their OWN PERCEPTION of the artifact (the 2-sentence checkpoint). This is independent from both the original builder's intent and the auditors' perception. Three perspectives (creator, evaluators, REFINE builder) converge on the same artifact. This triangulation is the system's creative engine.

---

## 4. GENERATIVE FRAME INTEGRITY

### 4A. Window 1: Is This Inhabitation+Creation or Extraction+Compliance?

**It is genuinely inhabitation+creation, with one qualification.**

The receiving principle ("Read the content as a reader first. What excites you about this material?") activates evaluative, subjective engagement. The TC skill's sequential phases (content assessment -> questioning -> tension -> metaphor -> brief -> build) are a creative process, not an extraction pipeline. The checkpoint between derivation and building ("Write your conviction brief before reading the vocabulary files") prevents the compliance pattern of "read the rules, then create within them."

**The qualification:** The conventions brief (~40 lines of mechanical constraints) arrives at the end. When the builder reads "Container: 940-960px" and "Adjacent zone backgrounds: >= 15 RGB difference," they shift from creative inhabitation to parameter awareness. This is appropriate -- builders need to know the physics of their world. But the moment of reading the conventions brief is a COGNITIVE MODE SWITCH from "I am inhabiting a world" to "I need to remember these numbers." The 11-window1-design addresses this with the framing "absorb these, do not checklist them." Whether this framing succeeds depends on the builder agent's processing.

**Empirical evidence:** The Middle-tier experiment used a similar pattern (conviction first, constraints last) and produced PA-05 DESIGNED (4/4). The Gas Town live run used a similar pattern and achieved PA-05 3.5/4 after REFINE. The pattern works.

### 4B. Window 2: Is This Reflection or Measurement?

**It is primarily measurement, with reflection delegated to the Weaver.**

The gates are measurement. Pure, deterministic, binary. Pass/fail on specific thresholds.

The PA auditors are experiential reflection -- but they are reflecting on SOMEONE ELSE'S work, not their own. This is perception, not reflection in the creative sense. The auditors describe what they experience. They do not reflect on what they created.

The Weaver (in high-stakes mode) is the closest to reflection. The Weaver reads auditor reports and the builder's reflection, holds both perspectives, and produces creative direction. The Weaver's Experience Portrait is a reflective account of the page-as-experience. But the Weaver is reflecting on the EVALUATION, not on the CREATION. The Weaver's reflection is meta-reflection: reflecting on how multiple people perceived the creation.

**Assessment:** Window 2 is EVALUATION, not REFLECTION. The new process's paradigm claim (inhabitation -> creation -> reflection) is not perfectly realized. A more accurate description is: inhabitation+creation (Window 1) -> evaluation+perception (Window 2) -> informed re-creation (Window 3). The "reflection" component is split between:
- The builder's 3-dimension reflection (written at the end of Window 1, BEFORE evaluation)
- The REFINE builder's fresh perception and ONE THING commitment (at the start of Window 3)

This is actually better than the paradigm claim suggests. Reflection happens at the boundary between creation and re-creation, not in a separate "reflection window." The builder reflects on their own work (end of Window 1). External perception arrives (Window 2). A new creator reflects on all of this and chooses a creative direction (start of Window 3). Reflection is distributed, not windowed.

### 4C. Window 3: Is This Deeper Creation or Compliance with Feedback?

**The design strongly favors deeper creation. The risk of compliance with feedback is real but mitigated.**

Three structural mechanisms prevent compliance collapse:

1. **Artifact-first reading order.** The REFINE builder forms their own impression before reading any auditor report. Their perception is their anchor.

2. **"Your job is not to fix problems. Your job is to make the page more of what it already is."** This opening sentence sets the processing mode.

3. **The ONE THING commitment.** "What is the ONE thing you want to do with this page?" This concentrates creative energy and gives the builder permission to not address everything the auditors said. A fix list demands comprehensive response. ONE THING demands depth.

**The remaining risk:** In standard mode, the REFINE builder reads raw auditor reports. An auditor who writes "the mid-sections are flat and repetitive" creates strong compliance pressure. The builder reads this and thinks "I need to make the mid-sections not flat." This is compliance with feedback, dressed as creative response. The ONE THING mechanism partially mitigates this (the builder chooses their own creative direction), but if both auditors say the same thing, the builder will likely choose that as their one thing -- which is APPROPRIATE, because convergent auditor perception is the system's strongest signal about what the page needs.

**Assessment:** The line between "compliance with feedback" and "informed creative response" is inherently blurry. A builder who reads that the mid-sections are flat, perceives that the mid-sections are flat (their own impression agrees), and chooses to make the mid-sections richer is not complying -- they are making a creative judgment that happens to align with the feedback. The architecture correctly trusts this ambiguity.

### 4D. Does the Process FEEL Generative or Like a Pipeline with Different Labels?

**It feels genuinely different from the old pipeline, but it is still a pipeline.**

The old pipeline was: extract identity -> compress into brief -> comply with brief -> verify compliance -> fix non-compliance. Each step was mechanical transformation. The new process is: inhabit content -> derive metaphor from genuine tension -> build from conviction -> perceive what was built -> create again from a richer starting point. Each step involves creative agency.

**The pipeline-ness is in the orchestrator's plumbing.** The 10-orchestrator-plumbing document specifies every step as a single atomic tool call with a verifiable artifact. This is necessary for reliability (LLM orchestrators skip steps if not explicitly controlled) but it makes the process FEEL mechanical when you read the spec. The builder inside Window 1 does not experience the plumbing. They experience the receiving principle, the content, the TC skill, the vocabulary files, and the building. The plumbing is invisible to the creative agents. The orchestrator is the stagehand; the builders are the performers.

**The honest assessment:** This is a generative process housed in a pipeline infrastructure. The infrastructure is plumbing. The experience inside each window is creative. The labels (inhabitation, creation, reflection) are accurate descriptions of what happens INSIDE the windows. The transitions between windows are pipeline steps. This is not a contradiction -- it is a necessary design choice. Creative processes need reliable infrastructure. The infrastructure does not make the process non-creative any more than a theater's lighting grid makes a performance mechanical.

---

## 5. TENSION POINTS

### 5A. Creative Freedom vs Gate Floors

**The design's position:** Gates catch what builders cannot perceive (sub-perceptual CSS) and what the world's physics require (container width, font trinity, border hierarchy). Gates do not evaluate creative quality. Creative quality is the PA's domain.

**The tension:** 28 gates is still 28 binary constraints. Each constraint removes one degree of creative freedom. The total constraint space is not trivial: container must be 940-960px, backgrounds must differ by >= 15 RGB, no single margin > 96px, no stacked gap > 120px, no trailing void > 300px, no ghost mechanisms, footer text >= 11px, WCAG contrast >= 4.5:1, font trinity (Inter + Instrument Serif + JetBrains Mono), border weights (1/3/4px only), warm palette (R >= G >= B), no decorative elements. A builder who satisfies all 28 constraints has significant creative freedom WITHIN those constraints. But the constraints define a specific aesthetic: warm, flat, angular, typographic, with visible zone differentiation.

**Assessment:** This is appropriate. The constraints are the design system's identity. A builder who wants border-radius, cool colors, or gradients is building in the wrong design system. The constraints define KortAI, not generic web design. The creative freedom exists in: metaphor selection, zone architecture, spatial rhythm, typography variation within the trinity, color variation within the warm palette, component adaptation, mechanism deployment, content-form relationships, and compositional arc. This is substantial creative territory.

### 5B. Single Combined TC+BUILD vs Depth of Each Activity

**The design's position:** Combining TC and BUILD in one window eliminates handoff loss and ensures the builder builds from genuine conviction (because they derived the conviction themselves).

**The tension:** The combined window has a ~200K token context. The TC skill (~340 lines), content (500-5000 lines), identity files (~600 lines), mechanism catalog (~751 lines), components CSS (~944 lines), and conventions brief (~40 lines) consume ~3,180-7,680 lines, leaving 54-65% creative headroom. Sufficient for building. But the TC derivation itself (questioning, tension derivation, metaphor collapse) happens in the SAME context as the eventual build. The agent knows it will be building. This knowledge subtly shapes the derivation: the agent derives a metaphor it can BUILD, not necessarily the metaphor with the deepest structural resonance.

**Severity: LOW-MEDIUM.** The TC skill's sequential phases mitigate this -- the agent completes all derivation before vocabulary files arrive. But the agent's awareness that it will build (from the receiving principle's "Build from your conviction") may influence metaphor selection toward implementable metaphors rather than conceptually rich ones. The Middle-tier experiment's metaphor (F-PATTERN) was both implementable and conceptually rich, suggesting this tension is manageable.

**The counter-evidence:** The old multi-window design (10-holistic-process) separated TC and BUILD into different windows. The Gas Town live run used a version of this separation. The result: the TC agent derived a rich metaphor (geological stratigraphy) and the builder implemented it -- but the builder's implementation lost some of the metaphor's richness because the builder was working from a received brief, not from personal conviction. The combined window eliminates this translation loss.

**Assessment:** The combined window is the right choice. The tension between depth-of-derivation and anticipation-of-building is real but empirically manageable. The translation loss in the separated model is worse than the depth cost of the combined model.

### 5C. 2 Auditors (Breadth) vs Deep Engagement with the Page

**The design's position (03-skill-architecture):** 2 auditors in standard mode, 5 in high-stakes mode.
**The first-principles design's position (07-first-principles):** 5 auditors as default, 2 for quick iterations.

**The tension:** 2 auditors with 10 questions each provide deep engagement per auditor but narrow breadth of perspective. 5 auditors with 4 questions each provide broad perspective but shallow engagement per auditor. The project's evidence: 9 auditors (Mode 4 PA) caught the whitespace void that a 2-auditor PA missed entirely. But the 9-auditor mode was expensive and the whitespace void was THE dominant failure (9/9 auditors flagged it). With well-designed questions, even 2 auditors would likely catch a void that covers 70-80% of the scroll.

**Assessment:** The disagreement between the 03-skill-architecture (2 standard) and the 07-first-principles design (5 standard) is a genuine unresolved design decision. The 03-skill-architecture's tiered approach (2 standard + 5 high-stakes) is more pragmatic. The 07-first-principles' argument for 5-default is more principled. The optimal choice depends on the marginal cost of 3 additional auditors (~$2-3 in API costs, ~0 additional time due to parallelism) vs the marginal perceptual coverage. If cost is not a constraint, 5 auditors should be the default. The mode-4 experience (9 auditors catching what 2 missed) is the strongest evidence.

**Recommendation:** Default to 5 auditors. The cost difference is negligible compared to the total pipeline cost (~$30-50 per run). The 2-auditor option should exist for rapid iteration / quick checks, not as the default.

### 5D. Deterministic Routing vs Nuanced Artistic Judgment

**The design's position:** Routing is deterministic. The orchestrator applies an algorithm to gate results + auditor verdicts. No creative judgment in routing.

**The tension:** The routing algorithm must classify auditor prose into categories (SHIP/REFINE/RETHINK) based on cold-look verdicts and keyword signals. This converts nuanced artistic judgment into three buckets. An auditor whose cold-look verdict is "REFINE" but whose prose says "this page is almost there -- one more pass on the mid-sections and it ships" is classified as REFINE. An auditor whose cold-look verdict is "YES" but whose prose says "the mid-sections are troublingly flat" is classified as SHIP. The routing algorithm ignores the nuance in the prose.

**Severity: LOW.** The routing algorithm's conservatism handles this correctly. The 03-skill-architecture's decision tree: "IF auditors disagree (one YES, one REFINE) -> REFINE (conservative)." Conservative routing means false positives (unnecessary REFINE) but not false negatives (shipping a page that needs refinement). A false-positive REFINE adds ~30-40 minutes and produces a better page. A false-negative SHIP ships a mediocre page. The cost asymmetry favors conservatism.

### 5E. Maximum Plumbing Enforcement vs Process Feeling Organic

**The tension in full:** The 10-orchestrator-plumbing document specifies every orchestrator action as an atomic tool call with zero interpretable instructions. The four enforcement patterns (single atomic operations, verifiable artifact chain, path of least resistance, zero interpretable instructions) create a process that is maximally reliable but feels like a state machine when you read the spec.

**Assessment:** This is the right design choice. The orchestrator is an LLM following instructions. Without enforcement patterns, it WILL skip steps, abbreviate protocols, or improvise creative shortcuts. The plumbing enforcement ensures that Window 1 actually writes a conviction brief (because the next step requires reading it), that screenshots actually get taken (because auditors need them), and that gates actually run (because the routing decision requires results). The organic feeling lives INSIDE the windows (where creative agents work from receiving principles and conviction), not in the TRANSITIONS between windows (where the orchestrator mechanically manages the pipeline).

**The test:** Would the builders and auditors describe this process as organic or mechanical? They would experience: (Window 1) "read the content, derive a metaphor, write a brief, build a page, reflect." That feels organic. (Window 2 auditors) "look at this page for the first time, describe what you see and feel." That feels organic. (Window 3) "scroll through this page, read what others experienced, read what the previous builder intended, choose ONE thing, build." That feels organic. The plumbing is invisible to the performers.

---

## 6. WHAT'S MISSING

### 6A. Iteration Beyond One REFINE Cycle

The architecture allows maximum 1 REFINE cycle by default (user escalates to 2). This is based on the Gas Town evidence (+1.5 PA-05 in one cycle) and the principle that automatic multi-cycle iteration optimizes for pipeline metrics, not user judgment.

**What's genuinely missing:** A mechanism for the user to say "this specific thing needs work" and have that direction enter the REFINE builder's context. Currently, the user invokes a second cycle and the system re-evaluates from scratch (new screenshots, new auditors, new REFINE builder). The user's specific feedback does not enter the creative loop except through the orchestrator's RETHINK protocol (which excludes a failed metaphor, not directs specific changes).

**Recommendation:** Add an optional `{OUTPUT_DIR}/_user-direction.md` file. If the user provides feedback, the orchestrator writes it to this file and includes it in the REFINE builder's prompt (after auditor reports, before reflection). This is a one-line addition to the skill: "If _user-direction.md exists in the output directory, include it in Step 2 of the REFINE builder's prompt."

### 6B. Content-Specific Adaptations

The architecture treats every page as a full composition (ALWAYS FLAGSHIP). This eliminates routing complexity but ignores content variation. A 500-word blog post needs a different composition approach than a 5,000-word research synthesis.

**What's genuinely missing:** The TC skill's Phase 0 (content assessment: type, scope, section identification) is the only content-adaptive component. The rest of the pipeline is content-agnostic: same gates, same number of auditors, same REFINE protocol regardless of content type. This is appropriate for the composition quality -- every page deserves full composition. But the GATE THRESHOLDS might need content adaptation. A 500-word page may have only 2-3 zones, and GR-11 (background delta >= 15 RGB between adjacent zones) with only 2 zones is checking a single boundary. A 5,000-word page may have 8-10 zones and the same gate checks many more boundaries.

**Assessment:** Content-specific gate adaptation is a future extension, not a missing element. The current gates work at any content length because they check LOCAL properties (this boundary, this margin, this text block) rather than GLOBAL properties (total number of zones, total variety). The TC skill's content assessment appropriately scales the composition to the content.

### 6C. Learning from Previous Builds

The architecture has zero learning between builds. Each `/build-page` invocation starts from scratch. The builder does not know what worked on previous content. The auditors do not know what patterns have been flagged before. The gate runner does not adjust thresholds based on previous results.

**What's genuinely missing:** Nothing, for now. Learning between builds would require storing build results and feeding them into future builds -- which creates pattern-matching risk (builders copy successful patterns instead of deriving fresh metaphors). The anti-gravity principle (divergence from existing work) is better served by a fresh start. Case studies in the design system serve the learning function at a higher level: "these approaches worked, but derive your own."

**Assessment:** The absence of inter-build learning is a FEATURE, not a gap. Each page should be a fresh creative act. The design system's vocabulary (mechanisms, components, identity) provides the accumulated wisdom. The builder should not know that "geological stratigraphy worked for the last essay."

### 6D. Graceful Degradation

**What's genuinely missing:** A protocol for when things go wrong. The 03-skill-architecture notes that "error handling" is intentionally left to the implementation phase. But some failure modes need architectural decisions, not implementation decisions:

- What if the Window 1 builder produces HTML that fails > 5 essential gates? Is this RETHINK or REFINE?
- What if both auditors produce reports that contain CSS property names (language constraint violation)?
- What if the Playwright gate runner crashes mid-execution?
- What if the content is too long for the combined Window 1 (>5000 lines, <54% headroom)?

**Recommendation:** The skill file should include a small "failure protocol" section (~10 lines):
- Gate runner crash: re-run once. If second crash, ship with advisory and report failure.
- Builder produces > 5 essential gate failures: treat as RETHINK (the metaphor's implementation has fundamental issues).
- Auditor language constraint violation: the report is still usable. Log the violation, do not re-spawn.
- Content > 5000 lines: warn user, suggest condensing content map (not the content itself).

---

## 7. THE "WOULD I WANT TO WORK IN THIS" TEST

### If I Were the Window 1 Builder

**Would this feel like creative freedom?** YES. The receiving principle activates genuine creative agency: "Read the content as a reader first. What excites you about this material?" This is an invitation to engage, not an instruction to extract. The TC skill provides a framework for THINKING about the content, not a recipe for PROCESSING it. The conviction brief is written FOR MYSELF -- I am the one who will use it to build.

**Would this feel like a cage?** Only at the conventions brief. "Container: 940-960px" is a cage wall. But it is a known, accepted cage wall -- I am building in a design system with a defined aesthetic. Every design system constrains. The constraints here are fewer and more honestly stated than in the old pipeline (where constraints were disguised as creative guidance).

**The best part:** I get to build from my own metaphor. I derived it. I wrote the brief. The vocabulary files arrive AFTER my creative direction is set. I am using the design system's tools to realize MY vision, not implementing someone else's specification.

**The worst part:** I know there are gates. Even though I cannot see the gate runner code, I know that my backgrounds will be checked for RGB delta, my margins will be measured, my container width will be verified. This knowledge creates a low-level anxiety: am I making creative choices or am I satisfying invisible metrics? The architecture addresses this by putting the conventions brief LAST and framing it as "absorb these, do not checklist them." Whether this framing eliminates the anxiety depends on my processing.

### If I Were a PA Auditor

**Would I produce honest, deep engagement?** YES. The receiving principle is excellent: "You are seeing this page for the first time. You know nothing about it. Describe what you SEE and FEEL. No design vocabulary." This is freeing. I am not evaluating against criteria. I am describing my experience.

**The language constraint** is the best architectural decision in the entire PA design. Banning CSS property names forces me to think in perceptual terms. I cannot say "the padding is too large" -- I must say "the space feels abandoned." This converts me from a technical evaluator into a perceptual witness.

**Would I produce formulaic responses?** The risk exists, because I am answering structured questions in a structured format. E-01 through E-10 (or E-01 through E-20) create a question-answer cadence that could become routine. But the questions themselves resist formula: "If you had to describe this page's personality to someone who hasn't seen it, what three words would you use?" This is not a formulaic question. It demands genuine perception.

**The best part:** Section 0 (cold look + scroll-through) is genuinely experiential. 5 seconds per viewport, gut reaction, worst thing, best thing, ship-it verdict. LOCKED forever. This is the closest an LLM agent gets to actual first-impression perception.

**The worst part:** With 10 questions (standard mode), the later questions start to feel repetitive. E-07 ("Pick any two adjacent sections. What changes between them?") and E-09 ("Is there a moment where the visual treatment changes and the content ALSO changes?") are exploring similar territory. This is a question-set design issue, not an architectural issue.

### If I Were the REFINE Builder

**Would I have what I need to make the page genuinely better?** YES. The artifact gives me the current state. The auditor reports give me external perception. The reflection gives me the original builder's creative state. The conviction brief gives me the aspirational intent. The content gives me the source material. The vocabulary files give me building tools. This is a complete creative toolkit.

**The ONE THING prompt is brilliant.** "What is the ONE thing you want to do with this page?" This gives me permission to focus. I do not need to address every auditor concern. I choose my creative contribution. This is the anti-compliance mechanism that makes Window 3 creative rather than corrective.

**The reading order is correct.** Artifact first (form my own impression) -> auditor reports (external perception) -> reflection (original intent) -> conviction brief (aspirational direction) -> content + vocabulary (building materials). By the time I start building, I have a rich, triangulated understanding of this page and a specific creative commitment. I am not fixing. I am building the next version.

**What I would want that I do not have:** The advisory gate signals mentioned in section 3D above. If the gates detected that background deltas cluster at the perception floor or that multi-coherence channel count is low, that information would help me understand WHERE the page has room for compositional richness. Without it, I rely entirely on the auditors' experiential descriptions, which may or may not surface these specific dimensions.

---

## 8. CROSS-DELIVERABLE DISCREPANCIES

### 8A. Conviction Brief for Auditors: Yes or No?

- **10-holistic-process:** Auditors receive Sections 1+4 (world-description + compositional arc)
- **03-skill-architecture:** Auditors receive Sections 1+4
- **12-window2-design:** Recommends NO conviction brief for auditors
- **07-first-principles-design:** Notes PA skill says zero context

**Resolution needed.** The 12-window2-design's reasoning is strongest: fresh-eyes perception without priming produces more honest evaluation. The structural/decorative test (does the metaphor read without labels?) is more valuable with zero-context auditors. Recommend: NO brief for auditors in standard mode. In high-stakes mode, the Weaver (not the auditors) receives the full brief.

### 8B. Default Auditor Count: 2 or 5?

- **03-skill-architecture:** 2 standard, 5 high-stakes
- **07-first-principles-design:** 5 default, 2 for quick iterations

**Resolution needed.** See section 5C analysis. Recommend: 5 default (cost difference negligible, perceptual coverage significantly better).

### 8C. GR-45 Tier: ESSENTIAL or RECOMMENDED?

- **02-gate-audit:** RECOMMENDED
- **12-window2-design:** Listed in ESSENTIAL table

**Resolution needed.** GR-45 should be RECOMMENDED per the gate audit. Correct the Window 2 design.

### 8D. 20 vs 22 PA Questions

- **PA skill (canonical):** 20 questions (E-01 through E-20) + responsive supplements
- **08-pa-design-spec (referenced in 12-window2-design):** 22 questions

**Resolution needed.** Use the 20-question set from the PA skill (battle-tested). The orchestrator extracts questions dynamically from the PA skill file, so updating the PA skill later automatically updates the pipeline.

### 8E. Orchestrator Experiential Scan: Kept or Stripped?

- **12-window2-design:** Keep for now, strip if first 3 runs never trigger it
- **10-orchestrator-plumbing:** Not mentioned as a distinct step

**Resolution needed.** Keep. The cost is ~2 minutes. The Gas Town incident (illegible text ranked behind imperceptible CSS) justifies the existence of a pre-PA usability check. Include it in the plumbing spec as a distinct step.

---

## 9. OVERALL VERDICT

**This process coheres as a creative system.** The 3-window architecture (create -> evaluate -> deepen) is sound. The plumbing/freedom boundary is well-defined. Information flows through the system with appropriate transformations at each stage. The generative frame is genuine -- this is not the old pipeline with new labels.

**The architecture's greatest strength** is the receiving principles. Five lines per window that establish creative posture before any material arrives. The old pipeline had 524 lines of receiving protocol that no agent read. Five lines that the agent actually follows are worth infinitely more.

**The architecture's greatest risk** is the soft phase gate in Window 1. The checkpoint between derivation and building ("Write your conviction brief before reading the vocabulary files below") relies on the agent processing the prompt sequentially and respecting the STOP instruction. If the agent skips the derivation and jumps to building with vocabulary in hand, the entire creative foundation (inhabitation -> conviction -> building) collapses into the old pattern (vocabulary -> compliance -> building). The structural mitigation (vocabulary files placed below the checkpoint in the prompt) is the best available, but it is soft enforcement of a critical creative boundary.

**The five things to resolve before implementation:**

1. Default auditor count: 5, not 2 (section 5C)
2. No conviction brief for auditors (section 8A)
3. GR-45 is RECOMMENDED, not ESSENTIAL (section 8C)
4. Include advisory gate summary in REFINE builder prompt (section 3D)
5. Add failure protocol section to skill file (section 6D)

---

**END OF HOLISTIC REVIEW**
