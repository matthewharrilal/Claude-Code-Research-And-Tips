# Process Adversarial Review: Is the New Process Overbuilt?

**Reviewer:** Opus adversary (external, genuinely adversarial)
**Date:** 2026-02-27
**Stance:** The previous adversarial review (11-adversarial-review.md) operated WITHIN the assumption that the multi-window process was necessary. This review challenges that assumption. Maybe the answer is simpler than anyone thought.

---

## PART 1: GATE NECESSITY AUDIT

### Category 1: Physics Gates (WCAG, contrast, readability)

**Gates:** GR-60 (WCAG Contrast), GR-67 (Footer Text Size), GR-46 (Print Stylesheet)

**What failure mode does this prevent?**
Illegible text. Unusable pages. People with visual impairments unable to read the content.

**Has this failure mode actually occurred?**
Yes. The Gas Town incident explicitly: illegible chart text was ranked Fix #5 behind 4 imperceptible CSS issues. GR-60 and the Wave 4 experiential gates (GR-61 through GR-64) were created specifically because of this.

**Would the generative model eliminate this?**
No. A builder "inhabiting a world" can produce beautiful CSS that fails WCAG. Conviction about a dark, compressed aesthetic can produce 3:1 contrast ratios. Physics gates are orthogonal to creative intent.

**Verdict: KEEP. Non-negotiable.** These are accessibility law, not design preference. The cost of checking is trivial. The cost of shipping an inaccessible page is legal liability and exclusion of users. This is the one category where zero argument exists for removal. But reduce to essentials: GR-60 (WCAG), GR-67 (footer readability). GR-46 (print stylesheet) is CEREMONY -- print stylesheets are nice but not a physics concern. Strip it or demote to truly optional.

---

### Category 2: Identity Gates (border-radius, warm palette, container width, no shadows/gradients)

**Gates:** GR-01 (Border Radius Zero), GR-02 (Box Shadow None), GR-03 (Container Width), GR-04 (No Gradients), GR-05/05b (Warm Palette), GR-06 (Font Trinity), GR-07 (No Pure B/W), GR-08 (No Decorative Elements), GR-09 (Border Weight Hierarchy), GR-10 (Cross-Page DNA)

**What failure mode does this prevent?**
Pages that do not look like they belong to this design system. A builder using rounded corners, drop shadows, or cold blues would produce something that belongs to a different system.

**Has this failure mode actually occurred?**
Yes, but only in controlled experiments. In actual pipeline runs, builders given the identity files and conviction brief have NEVER produced a border-radius violation. The identity constraints are so distinctive (sharp corners, warm palette, 3 typefaces, flat surfaces) that any builder who reads the world-description produces compliant output. The failure mode is theoretical in practice.

**Would the generative model eliminate this?**
Mostly yes. The conviction brief's world-description says "Every surface is sharp. Corners are cut, not curved. Light falls directly, nothing floats." A builder who inhabits this world does not reach for border-radius. The identity gates are catching a failure mode that the generative frame actively prevents.

**But.** Container width (GR-03) is the exception. Container width was THE primary Phase D failure mode (4/5 pages violated 940-960px). This is the one identity constraint that builders routinely miss because "container width" is not a sensory experience -- it is a number. The world-description cannot encode it experientially.

**Verdict: REDUCE.**
- **KEEP:** GR-03 (Container Width) -- proven failure mode, not encodable in conviction prose.
- **KEEP but demote to ADVISORY:** GR-01 (Border Radius), GR-02 (Box Shadow), GR-04 (No Gradients). Run them. Report violations. But these should NEVER be the reason a page fails -- if a builder who read the world-description produces border-radius, something much deeper is wrong. The gate is a diagnostic, not a guardrail.
- **STRIP:** GR-07 (No Pure B/W) is absorbed by GR-05 (Warm Palette). Already demoted to RECOMMENDED. Just fold it in.
- **KEEP:** GR-06 (Font Trinity), GR-09 (Border Weight Hierarchy), GR-10 (Cross-Page DNA). These encode structural patterns that are genuinely non-obvious. A builder CAN inhabit the world and still use 4 typefaces or use 2px borders. These gates catch real divergence.

Net: 10 identity gates reduced to 6 essential + 3 advisory (from 10 mixed-tier). GR-07 absorbed.

---

### Category 3: Perception Threshold Gates (RGB delta, letter-spacing, stacked gaps)

**Gates:** GR-11 (Background Delta >= 15 RGB), GR-13 (Stacked Gap CSS <= 120px), GR-14 (Stacked Gap Visual <= 150px), GR-15 (Single Margin <= 96px), GR-44 (Trailing Void), GR-18 (Ghost Mechanisms), GR-51 (Bg Delta Distribution), GR-55 (Multi-Coherence Channel Count)

**What failure mode does this prevent?**
Sub-perceptual design decisions. The Flagship experiment's defining failure: backgrounds that differed by 1-8 RGB points (imperceptible), letter-spacing of 0.001em (invisible), spacing that passed individual checks but created 210-276px stacked voids. The builder spent 22% of CSS on changes no human could perceive.

**Has this failure mode actually occurred?**
Yes. This is the project's single most documented failure mode. The Flagship experiment. The ghost mechanism problem (GR-18 promoted to REQUIRED specifically because of this). The stacked gap loophole (GR-13 + GR-14 created specifically for this).

**Would the generative model eliminate this?**
PARTIALLY. The conviction brief's calibration section states perceptible ranges ("about 20 RGB points cooler in the green channel"). A builder who follows calibration guidance produces perceptible deltas. BUT: the Flagship builder also followed calibration guidance and still produced imperceptible output. The problem is not the guidance -- the problem is that LLMs cannot perceive CSS. They write `background: #F5F3F1` vs `background: #F5F2F0` and cannot tell whether the 1-point difference is visible. Perception gates catch what the model literally cannot see.

**Verdict: KEEP.** These are the highest-value gates in the entire system. They catch the failure mode that the generative frame CANNOT prevent because it is a limitation of the medium (text-based agents manipulating visual output they cannot perceive). The specific thresholds (15 RGB, 120px stacked, 96px single) are empirically derived from actual failures.

However: GR-51 (Bg Delta Distribution) and GR-55 (Multi-Coherence Channel Count) are ASPIRATIONAL gates, not failure-prevention gates. They do not prevent a specific documented failure -- they promote a quality standard. These should be ADVISORY, not RECOMMENDED. The floor gates (GR-11, GR-13, GR-14, GR-15, GR-18, GR-44) are essential. The ceiling gates (GR-51, GR-55) are nice-to-have.

---

### Category 4: Structural Gates (mechanism counts, component usage, typography variation)

**Gates:** GR-45 (Typography Variation), GR-52 (Section Height Variation), GR-53 (Density Arc Direction), GR-66 (Component Class Count), GR-17 (Density Stacking), GR-19 (Threshold Gaming), GR-20 (Structural Echo), GR-21 (Cognitive Overload), GR-22 (Color Zone Conflict)

**What failure mode does this prevent?**
Flat, monotonous pages. Pages where every section looks the same. Pages where the builder used one background color, one text size, one spacing value throughout.

**Has this failure mode actually occurred?**
Yes -- the Flagship experiment's "all 16px/400 typography" is the canonical case. But here is the critical question: would THESE GATES have caught it? The Flagship passed all programmatic gates. The flatness was perceptual, not structural. The backgrounds technically differed by enough RGB. The typography technically varied. The problem was PERCEPTUAL MONOTONY despite STRUCTURAL VARIETY -- the variety was there but imperceptible.

The perception gates (Category 3) catch that. The structural gates catch a DIFFERENT failure: zero variety at all. But that failure has not occurred in any pipeline run. Builders who receive a conviction brief with a 4-zone compositional arc do not produce 1-zone pages.

**Would the generative model eliminate this?**
Yes, for the most part. A conviction brief that describes "the descent runs warm-to-cool through 4 strata" produces a page with 4 zones. The structural variety is built into the creative direction. GR-20 (Structural Echo: <3 consecutive sections with identical bg+padding+border) is catching a failure that the conviction brief structurally prevents.

**Verdict: STRIP most, KEEP a couple.**
- **KEEP:** GR-45 (Typography Variation) -- typography monotony is a real risk even with good conviction briefs. The builder can inhabit the world and still use one font-size everywhere. Low-cost check.
- **KEEP as ADVISORY:** GR-20 (Structural Echo) -- a diagnostic that tells you something went wrong, but the conviction brief should prevent it.
- **STRIP:** GR-52 (Section Height Variation), GR-53 (Density Arc Direction), GR-66 (Component Class Count). These are measuring PROXY indicators of quality. Section height variation does not mean the page is good. Component class count does not mean the page is rich. These gates exist because the old pipeline could not describe quality directly, so it measured proxies. The generative frame describes quality directly (through the PA). The proxies are no longer needed.
- **DEMOTE to ADVISORY:** GR-17 (Density Stacking), GR-19 (Threshold Gaming), GR-21 (Cognitive Overload), GR-22 (Color Zone Conflict). These are useful diagnostics but should not fail a build.

---

### Category 5: Meta Gates (observer, crack dimensions, execution tracker, brief verification)

**Gates:** GR-48 (Gate Coverage), GR-49 (Result File Integrity), GR-43 (Self-Evaluation Comment), GR-50 (Conviction Statement), GR-63 (Builder Experiential Marker), GR-64 (Usability Priority Verification), GR-78 (Residual Artifact), GR-79 (IMPROVE Completion), GR-80 (Iteration Log Auto-Fill), GR-81 (Prediction Suppression), GR-82 (Finding Status Map), GR-83 (INTENT Comment Count), GR-84 (IMPROVEMENTS Comment), BV-01 through BV-08

**What failure mode does this prevent?**
Process failures. The gate runner not running all gates. The builder not self-checking. The iteration log not being filled. The brief missing required sections. The builder dropping spec items during compression.

**Has this failure mode actually occurred?**
Process failures have occurred (incomplete gate runs, missing files). But the META gates -- the gates that check whether OTHER gates ran -- are a second-order concern. GR-48 (did all required gates produce results?) is checking the gate runner, not the page. GR-80 (did the iteration log get filled?) is checking the process, not the output.

**Would the generative model eliminate this?**
No, but the generative model makes many of these IRRELEVANT. The execution tracker (GR-80) exists because the old pipeline needed to track iterations across multiple compliance cycles. If the new pipeline typically produces SHIP or REFINE-once, the tracker is overhead for the common case.

**Verdict: REDUCE SEVERELY.**

This is the category with the most ceremony and the least connection to page quality.

- **KEEP:** GR-48 (Gate Coverage) -- you need to know your gate runner actually ran. GR-60 and GR-03 silently not running is worse than them failing. BV-01 through BV-04 (brief has required sections) -- the brief is the primary creative document; it should be well-formed.
- **KEEP:** GR-63 (Builder Experiential Marker) -- the builder self-checking their own work is genuinely valuable. The Gas Town incident proves this.
- **STRIP:** GR-49 (Result File Integrity), GR-50 (Conviction Statement), GR-78 (Residual Artifact), GR-79 (IMPROVE Completion), GR-80 (Iteration Log Auto-Fill), GR-81 (Prediction Suppression), GR-82 (Finding Status Map). These are process gates checking process artifacts. They do not improve the page. They improve the auditability of the process. If you are optimizing for page quality and not process compliance, these are pure overhead.
- **REDUCE:** BV-05 through BV-08. BV-05 (Recipe Keyword Scan) checks that the brief mentions all 9 dispositions. But if the brief is generative, it should not be keyword-checked. BV-08 (Brief-Output Diff) is the most interesting -- it catches what the builder dropped. But it is also the most compliance-oriented of the BV gates: it literally compares input spec to output and flags gaps. This is the DEFINITION of compliance checking applied to a generative process. Either the brief is a spec (and BV-08 is correct) or it is a conviction (and BV-08 is contradictory).

**The honest assessment of BV-08:** It exists because builders DO drop things. The D2 crack analysis proved this. But catching dropped items via automated diff is a compliance mechanism. The generative alternative is: the PA auditors notice that the page is missing something the content needs. If they do not notice, maybe the dropped item did not matter. BV-08 assumes everything in the brief matters equally. The PA assumes only perceptible things matter.

---

### Gate Audit Summary

| Category | Current Count | Proposed Count | Reduction |
|----------|--------------|----------------|-----------|
| Physics | 3 | 2 essential + 1 advisory | -0 functional |
| Identity | 10 | 6 essential + 3 advisory | -1 absorbed |
| Perception | 8 | 6 essential + 2 advisory | -0 functional |
| Structural | 9 | 1 essential + 1 advisory | -7 |
| Meta/BV | 22 | 6 essential | -16 |
| **Total** | **52** (excl. diagnostic/utility) | **21 essential + 7 advisory** | **-24 functional gates** |

The honest number: from 57 gates to ~28. Half the gates are ceremony or proxy measurement. The ones that remain are the ones that catch documented, empirically-proven failure modes that the generative frame cannot prevent.

---

## PART 2: CEREMONY AUDIT

### 1. TC Skill (841 lines, 14-axis questioning, metaphor collapse, opposition principle)

**The challenge:** What if the builder just... read the content and built? With the soul constraints and vocabulary files?

**What actually happened when builders did this:** The Phase D experiment. 5 pages built with varying levels of constraint. The pages were COMPETENT but not COMPOSED. They used the design system vocabulary correctly but without compositional intelligence. They looked like professional web pages, not like authored compositions. PA-05 landed at 2/4 (STYLED) not 3/4 (COMPOSED).

**What the TC skill adds:** The metaphor. The metaphor is the single most important creative decision because it turns "a page about X" into "a page that IS Y about X." Geological stratigraphy turns Gas Town from "an essay about technical debt" into "a descent through layers of organizational failure." The metaphor determines zone architecture, pacing, visual weight distribution, and dramatic structure. Without it, the builder makes layout decisions ad hoc.

**But 841 lines?** The TC skill contains:
- Phase 0 (Content Assessment): ~80 lines. Necessary routing.
- Phase 1 (Multi-Axis Questioning): ~200 lines. 14 axes, 4 core + 5 extended + 5 structural triggers. This is the TC skill's central intellectual contribution. It is also the part most likely to produce IDENTICAL OUTPUT regardless of content. An LLM running 14 axes on any prose will produce 14 axis-response pairs that sound differentiated but converge on "the content needs warmth, hierarchy, and some form of progression." The axes are theoretically valuable but empirically unvalidated.
- Phase 2 (Tension Derivation): ~120 lines. Addition/BECAUSE/SUBSTITUTION tests. This IS valuable -- it distinguishes genuine tension from cosmetic tension. The project has evidence (Middle-tier experiment) that genuine tension produces better output.
- Phase 3 (Metaphor Collapse): ~180 lines. Domain scanning, candidate evaluation, 6 rejection checks. The metaphor IS the key creative decision. But 6 rejection checks is a lot of ceremony around what is fundamentally a creative act. The rejection checks exist to prevent OBVIOUS BAD METAPHORS (too literal, too cliched, too abstract). Do we need 6 binary checks, or would "does this metaphor make you excited to build" suffice?
- Phase 4 (Compositional Architecture): ~160 lines. Transition tables, pacing, fractal checks. This is where the TC skill most clearly inherited the old pipeline's compliance DNA. Transition tables are SPECIFICATIONS. The generative frame says we produce conviction briefs, not transition tables.
- Phase 4.5 (Conviction Brief): ~60 lines. The output format. This IS essential.

**Verdict: VALUABLE but OVERBUILT.**

The TC skill's core value is in 3 things: (1) forcing the agent to READ the content deeply before designing, (2) deriving a structural metaphor, (3) producing a conviction brief. The 841 lines contain maybe 200 lines of essential protocol and 641 lines of quality-assurance ceremony around the creative act.

A 300-line TC skill that does Phase 0 (routing), Phase 1 (SIMPLIFIED: 4 core axes only, skip extended and triggers unless content is genuinely complex), Phase 2 (tension tests -- KEEP, this is high-value), Phase 3 (metaphor derivation -- SIMPLIFIED: generate 3 candidates, pick the one that excites you, ONE rejection check: "is this metaphor structural or merely decorative?"), Phase 4.5 (conviction brief format) would capture 80% of the value at 35% of the cost.

---

### 2. Conviction Brief (6 sections, ~100 lines)

**The challenge:** What if the builder received a 20-line creative direction instead?

**The 6 sections are:**
1. WORLD-DESCRIPTION (~12 lines) -- what the world looks like
2. CALIBRATION (~10 lines) -- color/spacing/typography ranges
3. OPPOSITION MAP (~15 lines) -- where the creative fight is
4. COMPOSITIONAL ARC (~20 lines) -- what the reader experiences
5. CREATIVE CONDITIONS (~10 lines) -- experiments to try
6. CONTENT MAP (~15 lines) -- reference for the builder

**Which are essential?**
- **WORLD-DESCRIPTION: ESSENTIAL.** This IS the metaphor, encoded experientially. Without it, the builder has no creative frame. 12 lines well spent.
- **CALIBRATION: ESSENTIAL but REDUCIBLE.** The builder needs to know the palette and spacing character. But "Surface: #FEF9F5, Mid: #F5F0E8, Deep: #EDE6DA, Bedrock: #1A1A1A" with experiential descriptions is 4 lines, not 10. The verbosity is in the experiential descriptions, which are valuable but could be shorter.
- **OPPOSITION MAP: VALUABLE.** This tells the builder where to invest creative energy. But 15 lines of opposition description is a lot. The Middle-tier experiment's builder received 3 lines of opposition ("formal precision vs. conversational warmth; hierarchical structure vs. flowing narrative; editorial authority vs. institutional empathy") and produced PA-05 4/4. Three lines.
- **COMPOSITIONAL ARC: VALUABLE but DANGEROUS.** This is the section most likely to collapse into specification. "The reader enters at the surface, descends through three strata, encounters the igneous intrusion at 65%, then settles into bedrock" is 2 lines. 20 lines means the TC agent is describing zone-by-zone what happens, which is perilously close to a layout spec.
- **CREATIVE CONDITIONS: CEREMONY.** "Try X, try Y, consider Z" is the TC agent suggesting CSS experiments. But the whole point of the generative frame is that the BUILDER decides what to try. Creative conditions are the TC agent directing the builder's experimentation, which is a form of creative control.
- **CONTENT MAP: ESSENTIAL.** The builder needs to know what content goes where. This is reference material.

**Verdict: REDUCE from ~100 lines to ~50 lines.**

A 50-line conviction brief: World-Description (10 lines), Calibration (5 lines), Opposition (3-5 lines), Arc (5-10 lines), Content Map (15 lines). Drop Creative Conditions entirely. The builder's creative authority is exercised through their response to the world-description and opposition, not through the TC agent's suggested experiments.

---

### 3. Exploration Loading (3-4 raw DD/OD/AD/CD files, ~6-8K lines)

**The challenge:** What if the builder never saw the explorations? Just the conviction brief + content + vocabulary?

The previous adversarial review (Attack 2) challenged this and was correct: there is ZERO empirical evidence that raw explorations produce better output than summaries. The project has N=0 controlled comparisons.

But let me push harder. The explorations consume 15-20% of the builder's context window. That is 15-20% of building headroom traded for READING MATERIAL. The claim is that reading 6,000 lines of someone else's HTML produces a "richer processing state." The counter-claim is that it produces a DISTRACTED processing state -- the builder's attention is split across 4 documents plus the brief plus the content plus the vocabulary.

**The strongest case AGAINST explorations:** The Middle-tier experiment builder received NO explorations. Zero. They received: conviction brief, content, mechanism catalog, components.css, identity files. They produced PA-05 DESIGNED (4/4), the highest rating in the project's history. The builder who produced the best page in this project's entire corpus did so WITHOUT reading any explorations.

Now, n=1. Maybe the Middle-tier content was easier. Maybe the metaphor was more natural. But the existence of ONE highly successful build without explorations is evidence that explorations are not necessary for quality output.

**The strongest case FOR explorations:** The explorations provide visual reference. A builder who has SEEN a page with a bento grid layout, a fractal self-similar structure, or an island isolation pattern has a richer spatial vocabulary than one who only read about these patterns in the mechanism catalog. Seeing > reading for spatial concepts.

**Verdict: STRIP for standard builds. OFFER as optional loading for complex content.**

The default should be: conviction brief + content + vocabulary. If the TC agent believes the content requires an unusual structural approach that the builder might not independently discover, the exploration recommendation becomes a LOADING SUGGESTION that the orchestrator offers but does not mandate. The builder can choose to load 1-2 explorations or skip them.

This recovers 15-20% of builder context for actual building.

---

### 4. 6-Dimension Reflection (conviction, alternatives, surprises, impulses, experience, unresolved)

**The challenge:** What if the builder just wrote "here's what I built and why" in free-form?

**The previous adversarial review's Attack 8 already identified this:** Surprises will be systematically empty in well-briefed builds. Impulses will be performative. The reflection becomes a PERFORMANCE of creativity rather than a RECORD of it.

But here is the deeper challenge: **who reads the reflection?** The Weaver reads it. The REFINE builder reads it. In both cases, the reader is an LLM that will process the reflection as INPUT. The 6-dimension structure exists to ensure the reflection covers creative territory that free-form might skip. But does it?

Consider: a free-form "here's what I built and why" from a builder who just spent 45 minutes creating a page would naturally cover: what they were going for (conviction), what they tried and rejected (alternatives), what surprised them (surprises), what the page feels like (experience), and what they could not resolve (unresolved). The only dimension that free-form might skip is IMPULSES -- suppressed creative energy. And impulses is the dimension most likely to be confabulated anyway.

**The structure adds value in one specific way:** It forces the builder to address UNRESOLVED tensions. Free-form reflection gravitates toward success stories. The explicit "name a tension you couldn't resolve" prompt extracts information the builder would naturally omit. This information is genuinely useful for the REFINE builder.

**Verdict: REDUCE from 6 dimensions to 3.**

1. **CONVICTION:** What were you trying to make? Where did you succeed and where did you fall short? (Combines conviction + experience.)
2. **ALTERNATIVES:** What roads did you not take, and why? (Keeps the exploration of rejected options.)
3. **UNRESOLVED:** What tension remains? What would you tell the next builder? (Keeps the high-value forward-looking dimension.)

Drop SURPRISES (usually confabulated), IMPULSES (usually performative), and EXPERIENCE-as-separate-dimension (merge into CONVICTION). Target: 15-20 sentences, not 20-35.

---

### 5. PA Protocol (5 auditors, 20 questions, 5 tiers, cold look, Section 0)

**The challenge:** What if ONE auditor looked at the page and wrote what they saw?

**The evidence for multi-auditor:** The Mode 4 PA (9 auditors) caught the whitespace void that a 2-PA audit missed entirely. 9/9 flagged it independently. Breadth of perspectives matters. The new 5-auditor design with 20 questions already reduced from 9/69. Can we go to 1?

**What 1 auditor loses:**
- Redundancy. If the single auditor has a blind spot (focused on color, ignores spacing), that blind spot becomes the audit's blind spot. With 5 auditors, 5 independent perspectives produce natural coverage even without explicit question assignment.
- Calibration. When 4/5 auditors say "the middle feels flat," that is strong evidence. When 1 auditor says it, you do not know if it is perceptual truth or individual preference.
- The cold look convergence. The single most valuable PA data point is WHERE MULTIPLE AUDITORS INDEPENDENTLY DESCRIBE THE SAME EXPERIENCE. One auditor cannot produce convergence data.

**What 1 auditor gains:**
- 80% cost reduction (1 agent instead of 5 auditors + 1 weaver = 6 agents).
- Simplicity. No auditor assignment matrix. No Weaver synthesis. The auditor writes what they see and that IS the PA output.
- Speed. One agent, 10 minutes, done.

**The honest tradeoff:** Multi-auditor is measurably better for CATCHING PROBLEMS. But most of the PA's value is in the DIRECTION it provides for refinement, not the problems it catches. A single thoughtful auditor who answers all 20 questions provides direction. The redundancy matters for HIGH-STAKES pages (flagship, ceiling tier). It is overkill for standard pages.

**Verdict: VALUABLE but TIERED.**

- **Standard pages:** 2 auditors, 10 questions each (all 20 covered). No Weaver -- orchestrator reads both reports directly. Cost: 2 agents.
- **High-stakes pages (user-designated):** 5 auditors, 4 questions each, Weaver synthesis. Cost: 6 agents.
- **Section 0 (cold look + scroll-through): ESSENTIAL regardless of auditor count.** This is the single highest-value element of the PA protocol. Every auditor must do it. It cannot be skipped.

---

### 6. Weaver (Experience Portrait + AMPLIFY/RELEASE/DEEPEN + verdict)

**The challenge:** What if the orchestrator just read the auditor reports directly?

**What the Weaver adds:**
1. Convergence detection (3+ auditors describing the same experience).
2. Divergence detection (one auditor perceiving something others missed).
3. Creative direction framed as AMPLIFY/RELEASE/DEEPEN instead of a fix list.
4. The Experience Portrait -- a coherent narrative of what the page feels like.

**What the orchestrator could do instead:**
1. Read all auditor reports. Identify themes. Note where multiple auditors agree.
2. Pass the auditor reports + a simple routing instruction to the REFINE builder.
3. Let the REFINE builder do their own synthesis.

**The Weaver's real value is in (3): creative direction.** The orchestrator routing decision is mechanical (SHIP/REFINE/RETHINK based on convergent signals). The REFINE builder could read auditor reports and form their own creative direction. But the Weaver produces direction in a FORM that activates creative engagement rather than diagnostic engagement.

A REFINE builder who reads 5 auditor reports processes them as PROBLEMS TO FIX (analytical mode). A REFINE builder who reads the Weaver's "AMPLIFY the dark inversion; RELEASE the mid-section uniformity" processes them as CREATIVE TERRITORIES (generative mode). The Weaver's real function is REFRAMING audit output as creative invitation.

**Could this be achieved without a separate agent?** Yes. The REFINE builder's receiving prompt (R-04) already reframes the Weaver's direction as territories, not actions. The reframing could happen in the RECEIVING PROMPT itself: "You are about to read 2-5 auditor reports. Do not read them as problems to fix. Read them as people describing their experience of your page. Where they converge, the page has truth. Where they diverge, the page has mystery. What excites you in their accounts?"

**Verdict: CEREMONY for standard builds. VALUABLE for high-stakes builds.**

- **Standard (2 auditors):** No Weaver. Orchestrator reads reports, makes routing decision, REFINE builder reads auditor reports directly with reframing prompt.
- **High-stakes (5 auditors):** Weaver synthesizes 5 reports into Experience Portrait + AMPLIFY/RELEASE/DEEPEN. The volume of 5 reports (200-400 lines total) genuinely benefits from synthesis.

---

### 7. Receiving Protocols (W2-ENTER through W2-PRE-BUILD, R-01 through R-07)

**The challenge:** What if we just said "read this, then build"?

The receiving protocol document is 524 lines. It specifies 4 prompts for Window 2 (builder), 4 prompts for Window 3b (auditors), 1 prompt for Window 4 (mechanical fix), and 7 prompts for Window 5 (REFINE builder). Plus 6 anti-collapse mechanisms with rationales.

**What problem does this solve?**
Compliance collapse. The builder reads the conviction brief and extracts hex values as specifications instead of engaging with the world-description as creative direction. The auditor reads experiential questions and produces analytical measurements instead of perceptual descriptions.

**Has compliance collapse actually occurred?**
Yes. The Flagship experiment: the builder received a beautifully crafted prompt and produced flat, compliance-oriented output. The Middle-tier experiment: the builder received a recipe (not a checklist) and produced creative output. The FRAMING of the input document measurably affected output quality. This is the strongest evidence that receiving protocols matter.

**But 524 lines of protocol?**
The core insight is simple: CREATIVE FRAMING BEFORE COMPLIANCE MATERIAL. The builder reads the world-description before the conventions brief. The auditor sees the page before the context. The REFINE builder forms their own impression before reading others' accounts.

This principle can be stated in 5 lines:
1. Read creative direction first.
2. Form your own impression before reading others' accounts.
3. Read mechanical constraints last.
4. Before building/auditing, state what excites you in 1-2 sentences.
5. Your perception is the tiebreaker.

The 524 lines elaborate on WHY this matters, provide examples of compliance vs. generative reception, specify exact prompt language for each window, and describe 6 anti-collapse mechanisms. All of this is JUSTIFICATION for the 5-line principle. The justification is valuable for UNDERSTANDING the design. It is not valuable as OPERATIONAL PROTOCOL.

**Verdict: The PRINCIPLE is ESSENTIAL. The PROTOCOL is CEREMONY.**

Embed the 5-line principle in each window's instructions. Drop the 524-line receiving protocol as a standalone document. The builder's prompt says "Read the conviction brief. Notice what excites you. State your creative commitment in 2 sentences before building. Read the conventions brief last." The REFINE builder's prompt says "Scroll through the page first. Write 2 sentences about what you experience. Then read the reflection and creative direction. Your impression is the tiebreaker." Done.

---

### 8. Multi-cycle refinement (max 3 REFINE cycles, context accumulation rules)

**The challenge:** What if there was ONE refinement pass, no more?

**The evidence for multi-cycle:** The Yegge Gas Town live run went from PA-05 2.0/4 to 3.5/4 in ONE REFINE cycle. The largest single-cycle improvement in the project's history. The REFINE builder (different Opus instance, reads conviction + artistic direction only, never sees gates) transformed the page from FLOOR to CEILING in one pass.

**What this tells us:** One REFINE cycle is extraordinarily powerful. The second and third cycles hit diminishing returns because the low-hanging compositional fruit has been picked. A page at PA-05 3.5/4 after one REFINE is unlikely to reach 4.0/4 with another REFINE -- the remaining distance is in territory that requires genuine creative breakthrough, not incremental refinement.

**The cost of multi-cycle:** Each cycle adds: another builder window (~30-45 min), another PA evaluation (~20 min), another set of auditors + potential weaver. A 3-cycle build is 3+ hours. A 1-cycle build is ~2 hours. The marginal time cost of cycles 2-3 is ~1 hour for UNKNOWN marginal quality improvement.

**Verdict: REDUCE to maximum 1 REFINE cycle as DEFAULT. 2 cycles available by explicit user escalation.**

The typical path should be: BUILD -> EVALUATE -> REFINE -> SHIP. One creative pass, one evaluation, one refinement, done. If the user looks at the page and says "this needs more work," they can request a second cycle. But the pipeline should not AUTOMATICALLY iterate.

---

### Ceremony Audit Summary

| Component | Current Status | Verdict | Effort Reduction |
|-----------|---------------|---------|-----------------|
| TC Skill (841 lines) | Full pipeline | VALUABLE but OVERBUILT -- reduce to ~300 lines | -65% |
| Conviction Brief (100 lines) | 6 sections | ESSENTIAL but REDUCIBLE -- reduce to ~50 lines | -50% |
| Exploration Loading (6-8K lines) | Mandatory 3-4 files | STRIP as default, optional loading | -100% default |
| 6-Dimension Reflection | 6 dimensions, 20-35 sentences | REDUCE to 3 dimensions, 15-20 sentences | -50% |
| PA Protocol (5 auditors) | 5 auditors + Weaver | TIER: 2 auditors standard, 5 high-stakes | -60% standard |
| Weaver | Separate synthesis agent | STRIP for standard, KEEP for high-stakes | -100% standard |
| Receiving Protocols (524 lines) | 16 prompts + 6 mechanisms | REDUCE to 5-line principle embedded in prompts | -99% |
| Multi-cycle refinement | Max 3 cycles | REDUCE to 1 default, 2 by escalation | -66% |

---

## PART 3: THE MINIMAL VIABLE PROCESS

If I strip everything to the bone, here is the simplest process that preserves creative quality, identity coherence, usability, and quality feedback.

### 2 Windows, Not 7.

```
Window 1: DERIVE + BUILD (single context)
   TC derivation (simplified) -> conviction brief -> BUILD in same window
   |
   v -- artifact + short reflection
   |
Window 2: EVALUATE + DECIDE
   Gate runner (reduced: ~28 gates) + 2 PA auditors (parallel)
   Orchestrator reads gate results + auditor reports
   |
   [If SHIP] --> DONE
   [If REFINE] --> Window 3: REFINE (different builder, one pass)
   [If mechanical fix needed] --> same-window CSS patches, re-run gates
```

### Window 1: DERIVE + BUILD (~60-90 min, single context)

**What loads:**
- TC Skill (simplified, ~300 lines)
- Raw content markdown
- Identity files (prohibitions.md + tokens.css, ~400 lines)
- Mechanism catalog (~800 lines)
- Components CSS (~500 lines)

**Total input:** ~2,000 lines + content. ~15-20% of context. ~80% headroom for thinking + building.

**What happens:**
1. The agent reads the content. Runs simplified TC: 4 core axes, tension tests, metaphor derivation (3 candidates, pick one, one binary check: structural or decorative?).
2. The agent writes a 50-line conviction brief (world-description, calibration, opposition, arc, content map). This is written TO THEMSELVES -- it is the agent's own creative commitment, not a document for someone else.
3. The agent reads the conventions brief (~40 lines, standard for all pages).
4. The agent builds the HTML page. Full page, self-contained, embedded CSS.
5. The agent writes a 3-dimension reflection (conviction/execution, alternatives, unresolved). ~15-20 sentences.

**Why combine TC and BUILD?** The TC derivation exists in a separate window because the old pipeline needed to isolate creative derivation from compliance-laden building. But in the new generative frame, the builder IS the creative agent. There is no reason the agent who derives the metaphor cannot also build the page. In fact, combining them has a significant advantage: the builder's metaphor commitment is GENUINE because they derived it themselves. No translation loss across context boundaries. No risk of the builder "receiving" someone else's metaphor and failing to inhabit it.

The conviction brief is written by the builder FOR the builder. It is a creative checkpoint: "I have read this content, I have derived this metaphor, here is my creative commitment." Then they build from their own conviction. This is more genuinely generative than receiving someone else's conviction and trying to inhabit it.

**What is lost:** The TC agent and builder being different instances means different perspectives. The builder might derive a different metaphor than a dedicated TC agent would. But: the builder who derives their own metaphor and builds from it has STRONGER creative conviction than a builder who receives someone else's metaphor. The translation loss from TC-to-builder may exceed the perspective benefit of separation.

### Window 2: EVALUATE + DECIDE (~25-40 min)

**What happens:**
1. Orchestrator takes screenshots (3 viewports, cold look + scroll-through).
2. Gate runner runs ~28 gates on the artifact. Produces JSON results.
3. 2 PA auditors receive screenshots + 10 questions each (all 20 questions covered). Each writes prose responses. Section 0 (cold look + scroll-through) is mandatory for both.
4. Orchestrator reads gate results + both auditor reports. Makes routing decision.

**Auditor loading (per auditor):**
- Screenshots
- 10 questions from the experiential question set
- Section 0 protocol
- 5-line receiving principle ("you are experiencing this page for the first time; describe what you see and feel; no design vocabulary; your perception is sovereign")

**Routing:**
- All gates pass + both auditors describe a page that works --> SHIP
- Gates fail (mechanical) + auditors satisfied --> patch CSS, re-run gates, SHIP
- Auditors identify compositional issues (flat, monotonous, disconnected) --> REFINE
- Auditors identify fundamental problems (wrong metaphor, fighting content) --> RETHINK (back to Window 1 with different agent, excluding failed metaphor)

### Window 3: REFINE (if needed, ~30-45 min)

**What loads:**
- The artifact (HTML page)
- The conviction brief (from Window 1 builder)
- The reflection (3 dimensions)
- Both auditor reports (raw, no Weaver synthesis)
- Raw content
- Mechanism catalog + components CSS + identity files

**Receiving principle (embedded in prompt, 5 lines):**
1. Scroll through the page. Write 2 sentences about what you experience.
2. Read the auditor reports. Note where they agree and where they diverge.
3. Read the previous builder's reflection. What excites you?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page?

**What happens:**
1. Different builder instance. Reads materials in receiving-principle order.
2. Builds improved version.
3. Writes own 3-dimension reflection.
4. Orchestrator runs abbreviated evaluation: gates only (if gates pass, SHIP; if significant structural changes were made, run 2 auditors again).

### The Minimal Process: Summary

| Step | Agents | Duration | Cost (API calls) |
|------|--------|----------|-------------------|
| Window 1: Derive + Build | 1 | 60-90 min | 1 |
| Window 2: Evaluate | 1 orchestrator + 2 auditors | 25-40 min | 3 |
| Window 3: Refine (if needed) | 1 builder + gates | 30-45 min | 1-3 |
| **Total (typical REFINE path)** | **5-7** | **~2-3 hours** | **5-7** |

Compare to the full process:

| Step | Agents | Duration | Cost |
|------|--------|----------|------|
| Window 0: Setup | 1 | 5 min | 1 |
| Window 1: TC | 1 | 15-25 min | 1 |
| Window 2: Build | 1 | 30-60 min | 1 |
| Window 3a: Gates | 1 | 5 min | 1 |
| Window 3b: PA (5 auditors) | 5 | 20 min | 5 |
| Window 3c: Weaver | 1 | 10-15 min | 1 |
| Window 4: Mechanical Fix | 1 | 10-20 min | 1 |
| Window 5: Refine | 1 | 30-45 min | 1 |
| Windows 3a-3c again | 7 | 20-30 min | 7 |
| **Total (typical REFINE path)** | **~19** | **~3+ hours** | **~19** |

The minimal process uses 5-7 agents instead of ~19. It costs 60-65% less in API calls. It takes roughly the same wall-clock time (parallelism helps the full process but not as much as the agent count suggests).

---

## PART 4: WHAT BREAKS IF WE GO MINIMAL

### 1. Combining TC and BUILD in one window

**Failure mode:** The builder's metaphor derivation is worse because they are also thinking about HTML/CSS. The TC skill requires deep content engagement; building requires spatial/technical thinking. These are different cognitive modes. Combining them means the agent switches modes mid-context.

**Likelihood:** MEDIUM. LLMs do switch modes. But the TC derivation happens BEFORE building begins. The agent runs through the TC pipeline, writes the conviction brief, THEN shifts to building. The mode switch is sequential, not interleaved.

**Severity:** MEDIUM. A weaker metaphor produces a less compositionally coherent page. But the metaphor still exists. The builder who derived their own metaphor still builds with more conviction than one who received someone else's.

**Risk assessment:** Acceptable. The single-window approach may produce metaphors that are slightly less sophisticated (because the agent allocates less attention to derivation when building is also in scope). But the translation-loss savings from same-agent metaphor-to-build are likely larger than the sophistication loss.

### 2. Removing explorations

**Failure mode:** The builder has no visual reference for unusual structural approaches. If the content requires a bento grid, fractal structure, or island isolation, the builder who has never SEEN these patterns may not discover them independently.

**Likelihood:** LOW for standard content. The mechanism catalog DESCRIBES these patterns. The builder knows they exist. For complex content with unusual structural needs, the likelihood is MEDIUM.

**Severity:** LOW-MEDIUM. The builder uses a simpler structure. The page works but misses an opportunity for structural richness. This is the difference between a good page and a great page, not between a good page and a bad page.

**Risk assessment:** Acceptable. The optional loading escape valve handles the complex cases.

### 3. Reducing to 2 PA auditors

**Failure mode:** The whitespace void problem. With 2 auditors, if neither one's questions surface a massive void, it goes undetected. The Mode 4 PA caught this with 9/9 convergence. Can 2 catch it?

**Likelihood:** LOW. The whitespace void is a DOMINANT perceptual feature. E-04 ("Find the most generous area of empty space") and E-08 ("Does each third feel like it got the same amount of attention?") both naturally surface voids. Two auditors answering these questions would both flag a 70-80% blank page.

**Severity:** HIGH if missed. A whitespace void is the worst possible design failure -- the page looks broken.

**Risk assessment:** ACCEPTABLE BUT MONITOR. If the first few 2-auditor runs miss a known problem that 5-auditor runs caught, escalate to the 5-auditor protocol. The tiered approach (2 standard, 5 high-stakes) provides the escape valve.

### 4. Removing the Weaver

**Failure mode:** The REFINE builder reads raw auditor reports and processes them as PROBLEMS TO FIX instead of CREATIVE TERRITORIES. Without the Weaver's reframing (AMPLIFY/RELEASE/DEEPEN), the REFINE builder enters diagnostic mode.

**Likelihood:** MEDIUM. This is the compliance collapse that the Weaver was designed to prevent. But the receiving principle ("Note where they agree and where they diverge; what excites you?") provides reframing in the prompt itself.

**Severity:** MEDIUM. The REFINE builder produces a good page (because the auditor reports are perceptual, not compliance data) but a less INTERESTING page than one produced from the Weaver's creative direction.

**Risk assessment:** Acceptable for standard builds. The 5-line receiving principle does most of the Weaver's work. The Weaver's unique contribution is the Experience Portrait -- a coherent narrative of the page-as-experience that neither individual auditor report provides. For high-stakes builds, this narrative synthesis is worth the extra agent.

### 5. Reducing reflection to 3 dimensions

**Failure mode:** The REFINE builder receives less creative state from the previous builder. The lost dimensions (SURPRISES, IMPULSES, EXPERIENCE-as-separate) may contain information that changes the REFINE builder's approach.

**Likelihood:** LOW. The SURPRISES dimension is, per the previous adversarial review's Attack 8, usually confabulated. IMPULSES is usually performative. EXPERIENCE merges naturally into CONVICTION. The 3 remaining dimensions (conviction/execution, alternatives, unresolved) carry the high-value information.

**Severity:** LOW. The REFINE builder still knows what the previous builder was trying to do, what they rejected, and what tensions remain. The lost dimensions provided color, not direction.

**Risk assessment:** Acceptable. If reflections feel thin in practice, the builder can always write more.

### 6. Single REFINE cycle default

**Failure mode:** The page needs more work than one REFINE cycle can provide. After BUILD + REFINE, PA-05 is still 2.5/4. In the full process, a second REFINE would be triggered automatically. In the minimal process, the user must explicitly request it.

**Likelihood:** LOW-MEDIUM. The Yegge Gas Town run achieved +1.5 PA-05 improvement in one REFINE cycle (2.0 -> 3.5). Most pages should reach shippable quality in one cycle.

**Severity:** LOW. The page is not abandoned -- the user can request another cycle. The only cost is that the user must actively decide rather than the pipeline deciding automatically.

**Risk assessment:** Acceptable. User agency is a FEATURE. The user sees the page and decides whether it needs more work. Automatic multi-cycle refinement is the pipeline optimizing for its own metrics rather than the user's judgment.

---

## PART 5: RECOMMENDATIONS

### The Right-Sized Process

Neither the full 7-window ceremony nor the stripped 2-window minimum. The right answer is 3 windows with optional escalation.

```
Window 1: DERIVE + BUILD (combined, one agent)
   |
   v
Window 2: EVALUATE (gates + 2-5 auditors depending on stakes)
   |
   v
[If needed] Window 3: REFINE (one pass, different builder)
```

### Specific Recommendations

**1. Combine TC and BUILD into one window.**

The builder derives their own metaphor and builds from it. This is more genuinely generative than receiving someone else's metaphor. The TC skill is simplified to ~300 lines: content assessment, 4-axis questioning, tension tests, metaphor derivation (3 candidates, pick one, one structural/decorative check), conviction brief (50 lines, self-authored). The builder writes the brief, then builds.

No explorations loaded by default. The mechanism catalog + components.css + identity files provide vocabulary. The builder's creative territory is the metaphor they derived, not patterns they saw in someone else's work.

**2. Reduce gates from 57 to ~28.**

Keep: Physics (WCAG, footer text), Identity (container width, font trinity, border hierarchy, cross-page DNA, no decorative elements), Perception (background delta, stacked gaps, single margin, trailing void, ghost mechanisms), Meta (gate coverage, experiential marker).

Demote to advisory: Identity soul checks (border-radius, box-shadow, gradients -- the world-description prevents these), structural gates (echo, typography variation), quality-aspirational gates (bg delta distribution, multi-coherence).

Strip: All process-tracking meta gates (iteration log, residual artifact, finding status map, prediction suppression), proxy structural gates (section height variation, density arc, component count), most BV gates beyond section verification.

**3. Tier the PA: 2 auditors standard, 5 auditors + Weaver for high-stakes.**

Standard: 2 auditors, 10 questions each (all 20 covered), Section 0 mandatory for both. Orchestrator reads reports directly. No Weaver.

High-stakes (user-designated or auto-triggered by significant creative ambition in the conviction brief): 5 auditors, 4 questions each, Weaver synthesis producing Experience Portrait + AMPLIFY/RELEASE/DEEPEN.

**4. Simplify reflection to 3 dimensions.**

Conviction/execution, alternatives, unresolved. ~15-20 sentences. Drop surprises (usually confabulated) and impulses (usually performative). Merge experience into conviction.

**5. Embed receiving principles in prompts, not in a separate protocol document.**

5 lines per window:
- Window 1 (derive+build): "Read the content as a reader first. What excites you about this content? Derive your metaphor. Write your conviction brief. Read the vocabulary files. Build."
- Window 2 (auditors): "You are seeing this page for the first time. Describe what you experience. No design vocabulary. Your perception is sovereign."
- Window 3 (refine): "Scroll through the page first. Write what you experience. Read the auditor reports -- where do they agree? Read the reflection -- what excites you? What is the ONE thing you want to do? Build."

**6. Default to 1 REFINE cycle. User escalates to 2 if needed.**

The pipeline should not automatically iterate. BUILD -> EVALUATE -> REFINE -> SHIP. If the user wants more refinement, they request it. This respects user agency and prevents the pipeline from optimizing for its own metrics.

**7. The conviction brief is the builder's own document, not a received document.**

This is the single most important architectural change. In the full process, the conviction brief is written by a TC agent and received by a builder. In the right-sized process, the builder derives the metaphor and writes the brief themselves. The brief is a CREATIVE CHECKPOINT -- proof that the builder has deeply engaged with the content before they start writing CSS. It travels forward to the REFINE builder and auditors as the authoritative account of creative intent.

### What This Preserves

- **Creative quality:** The builder derives a metaphor, commits to a creative vision, and builds from genuine conviction. The REFINE builder brings fresh eyes and creative energy.
- **Identity coherence:** Identity gates (container width, font trinity, border hierarchy) and the world-description ensure the page belongs to this design system.
- **Usability:** WCAG gates, experiential marker, footer text check ensure the page is accessible and readable.
- **Quality feedback:** 2-5 auditors provide experiential perception that catches what the builder cannot see. The auditor reports tell the REFINE builder what works and what does not.

### What This Cuts

- **The TC-as-separate-window assumption.** The metaphor derivation and building can happen in the same context without quality loss, and with significant gains in creative authenticity.
- **The exploration-loading assumption.** Explorations are not necessary for quality output. The Middle-tier experiment proves this.
- **The Weaver-as-necessary-synthesis assumption.** For 2 auditors, direct reading is sufficient. For 5 auditors, the Weaver adds genuine value through volume synthesis.
- **The multi-cycle-refinement assumption.** One REFINE cycle captures most available improvement. Automatic iteration is process optimization, not quality optimization.
- **The 524-line receiving protocol.** The principle is 5 lines. The protocol is 519 lines of justification for those 5 lines.
- **The 57-gate compliance apparatus.** Half the gates measure proxies or process artifacts. The gates that catch real, documented, empirically-proven failure modes number about 28.

### The Honest Risk

The full process was designed by people who had been burned by compliance collapse, whitespace voids, ghost mechanisms, and flat pages. Every ceremony exists because SOMETHING WENT WRONG. The minimal process strips ceremony that was added in response to failures.

The risk is that the failures return. The perception threshold gates stay (proven failure mode). The identity gates stay (container width). The PA stays (whitespace detection). But the structural gates, process-tracking gates, exploration loading, multi-cycle refinement, and elaborate receiving protocols are GONE. If the stripped process produces flat pages, the answer is to add back SPECIFIC ceremony that addresses the SPECIFIC failure, not to restore the full apparatus.

The right-sized process is a hypothesis. It should be tested on 3-5 pages before being adopted. If the first page produces PA-05 >= 3.0/4 with 2 auditors and no Weaver, the hypothesis holds. If it produces PA-05 < 2.5/4, something was stripped too aggressively and needs restoration.

**The hardest cut to defend:** Removing explorations. The case for exploration loading is philosophically strong (visual reference > textual description for spatial concepts). The case against is empirically strong (the best page in the project's history was built without explorations). This should be the first thing restored if quality drops.

**The easiest cut to defend:** The 29 stripped gates. Half of them were measuring process artifacts (did the iteration log get filled?). The pages do not get better because the iteration log was filled. The pages get better because the builder had a good metaphor and the auditors caught what the builder missed.

---

**END OF PROCESS ADVERSARIAL REVIEW**
