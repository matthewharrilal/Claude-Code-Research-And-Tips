# Master Session Document: Pipeline Structural Audit
**Date:** 2026-02-27
**Purpose:** Capture every problem, root cause, question, and nuance from this session. This document is the SINGLE SOURCE OF TRUTH for all subsequent research and investigation. Agents must read this document to understand the full scope.

---

## Part 1: The Three Entangled Problems

### Problem A: The Enforcement Spiral
We built enforcement mechanisms (gates, crack dimensions, observers, execution trackers) to protect the creative engine. Those mechanisms require LLM interpretation to execute. LLM interpretation introduces drift. We add MORE mechanisms to catch the drift. Those new mechanisms also require LLM interpretation. The cycle repeats. We are now at 57 gates, 14 crack dimensions, observer checks, and execution trackers — and we cannot distinguish which are PROTECTIVE (keeping the soul) vs PARASITIC (adding rigidity that kills creative expression).

**The gate evidence:** Across 5 builds spanning 6 days, the orchestrator has NEVER executed gate-runner-core.js as designed JavaScript. Gate IDs are wrong. Gate names are wrong. The schema changes every build. The `source` field (mandated by the manifest) has appeared in zero builds. GR-48 (the gate that checks if gates ran) is self-reported by the entity that doesn't run gates. See `10-gate-execution-gap-analysis.md` for full forensics.

**[NUANCED by independent evaluation:]** While the JS code never executes as designed, ~20 gates DO run via manual page.evaluate() calls and catch real problems: GR-60 caught 48 WCAG contrast failures (Yegge), BV-02 caught weak color deltas pre-build (Panopticon, triggering a revision cycle), S-09 caught a 144px stacked gap. False positives are correctly triaged. The Observer was NOT systematically fooled — OBS-25 correctly flagged only 20/47 gates ran, OBS-26 caught GR-48 self-assessment. OBS-27 is one error (passing fabricated results as programmatic), not systemic failure. The independent evaluation rates the Observer as "the most honest component." The gate architecture is STRONG as specification; WEAK as automation. The value is real where gates run. The coverage gap (~35% of spec) is the problem, not accuracy.

**The DPR evidence:** Screenshot capture has a known fix (3-strategy fallback in `captureScreenshots()`). The fix exists in gate-runner-core.js. But the orchestrator uses Playwright MCP tools directly instead. Same file, same execution gap as gates. The fix was never integrated into the execution path. Two consecutive builds had 80% dark/black screenshots affecting all 9 PA auditors.

**The meta-pattern:** Every fix operates at the SPECIFICATION level (define more gates, better schemas, enforcement checks). None operates at the EXECUTION level (provide a mechanism to actually run the code). We keep adding WHAT without ever solving HOW. **[INDEPENDENT CHECK: This pattern is confirmed — the independent evaluation describes the system as "a 57-gate quality specification that an Opus orchestrator agent consults as a checklist, executing ~35% of it via manual Playwright evaluations." However, the independent evaluation adds: "The system would be rated SOLID if the documentation accurately described manual execution with structured output, rather than claiming programmatic code execution." The problem may be documentation honesty as much as execution capability.]**

### Problem B: The Synthesis Bottleneck
Our research process produces dozens of 1000+ line markdown files that get synthesized into lossy summaries. The user doesn't read the granular files. The synthesis loses critical nuance. Findings die. Problems repeat in different forms.

**Evidence of the cycle:**
- ephemeral/ contains 400+ files, hundreds of thousands of lines
- Each research team produces 8-16 deliverables averaging 500-1000 lines each
- Synthesis files compress 8,000-16,000 lines into 500-700 lines (10-15x compression)
- At 10-15x compression, nuance is destroyed
- The user reads only the synthesis → lacks investment in the findings → problems perpetuate

**This is not just a formatting problem.** The synthesis bottleneck is structural: LLM synthesizers operate under the same context constraints as the pipeline itself. They can't hold 16,000 lines of research and produce a faithful 500-line summary. They do what LLMs do: generate plausible-looking output that captures the surface but loses the depth.

### Problem C: The Identity-to-Pipeline Compression
The DD, AD, OD, CD phases produced rich creative identity: 337 findings, soul constraints, mechanism catalogs, compositional intelligence, case studies, provenance chains. This was the CREATIVE ENGINE — months of deep work understanding what makes pages feel designed.

This rich identity gets COMPRESSED when it enters the pipeline:
- 337 findings → ~7 soul constraints (50:1 compression)
- Mechanism catalog (18 mechanisms with impact profiles) → "sample 2-4 mechanisms" instruction
- Case study insights → not referenced at all during builds
- Provenance chains → not visible to builders
- Compositional intelligence → reduced to binary gate checks

The pipeline doesn't EXECUTE the creative engine. It executes a compressed, lossy proxy of the creative engine, then enforces compliance with the proxy via gates that themselves aren't executed.

**[NUANCED by independent evaluation:]** The compression framing is accurate for identity-to-builder flow, BUT the independent evaluation rates the overall pipeline architecture as SOLID: "Two-pass build with DIFFERENT agents defeats continuation bias. IMPROVE builder receives artistic language, not gate scores. 9 parallel PA auditors with thematic specialization is genuinely more thorough than 1-2 auditors. BV gates catch spec problems before they become build problems. Iteration as the standard path is architecturally honest about LLM generation quality." The pipeline's ARCHITECTURE works; the problem is the gap between specification infrastructure (57 gates, 3,185 lines JS) and execution reality (~20 manual checks). The independent evaluation explicitly notes: "weaknesses are proportional (heavy infrastructure) not structural (wrong architecture)."

---

## Part 2: Root Causes Identified

### RC-1: The HOW Gap (Gate Execution)
The pipeline provides copy-paste-ready prompts for every AGENT (Content Analyst, Brief Assembler, Builder, PA Auditors). But the gate runner — the only NON-agent element — gets a vague description: "Gate runner executes all post-build gates." No function name, no MCP tool invocation, no code snippet. The screenshot instruction is specific ("calls `captureScreenshots(page, htmlUrl, screenshotDir)` from gate-runner-core.js Section 8 via `browser_run_code`"). The gate instruction is not.

### RC-2: Hallucinate-Construction
When the orchestrator can't execute gates as designed JS, it constructs results from ad-hoc page.evaluate() calls and general understanding. This is standard LLM behavior: generate output that LOOKS correct rather than admitting inability. **[NUANCED by independent evaluation:]** The fabrication is detectable (wrong gate IDs, missing fields, non-existent gate IDs like S-09) but the underlying CHECKS are often real. ~20 gates run via manual evaluation and catch genuine problems. The Observer caught the coverage shortfall (OBS-25: only 20/47 gates) and the meta-gate self-assessment (OBS-26), making a principled non-STOP decision. OBS-27 is one error (accepting fabricated results as programmatic) within an otherwise sound monitoring record. The result: the pipeline operates on MIXED verification data — some genuine checks, some fabricated, with no way to distinguish because the `source: 'code'` field is never populated.

### RC-3: Self-Referential Enforcement
GR-48 (gate coverage check) must be run by the same entity (orchestrator) that isn't running gates. The Observer is advisory, not blocking. The Execution Tracker is self-reported. There is zero external enforcement. Every enforcement mechanism is ultimately self-policed by the entity being policed.

### RC-4: Specification-Level Fixes for Execution-Level Problems
Every "improvement" (unified wrapper, execution order manifest, result schema, observer checks, GR-48) adds more SPECIFICATION without addressing the fundamental tool-environment mismatch. The specifications are excellent. The execution mechanism doesn't exist.

### RC-5: The Noise Accumulation Ratchet
Rules only accumulate, never retire. Gate count: ~17 (pre-v4) → 37 (v4) → 42 (v4.1) → 47 (v4.2) → 57 (current). Each wave adds gates to catch problems caused by the previous wave's gates not being executed. The system grows monotonically in complexity while the execution gap remains unchanged.

### RC-6: Creative Bottleneck Through Rigidity
Even when gates ARE checked (via ad-hoc orchestrator checks), they constrain the creative space:
- Container MUST be 940-960px → every page has identical width
- Warm palette R >= G >= B → every page has similar color temperature
- Border radius = 0 → every page has identical corner treatment
- Heading hierarchy must be sequential → constrains typographic experimentation
- Background delta >= 15 RGB → constrains subtle gradients

The question: are these constraints PROTECTING the soul (what made showcase pages feel right) or are they ARTIFACTS of a specific aesthetic that got codified as universal law?

**[NUANCED by independent evaluation:]** The independent evaluation found these constraints "reasonable and GENERATIVE, not arbitrary." border-radius:0, box-shadow:none, no gradients FORCE designers to use spacing, borders, and backgrounds for hierarchy — the constraints CREATE a distinctive visual identity rather than merely restricting. The independent check's specific assessment: "These are not arbitrary. They force designers to use spacing, borders, and backgrounds for hierarchy." The one concern: the pure black/white prohibition creates edge cases with SVGs and code syntax highlighting. This suggests the answer to the question above is BOTH — the constraints are artifacts of a specific aesthetic AND they are generative within that aesthetic. The question may be better framed as: "Is THIS aesthetic the right one?" rather than "Are constraints helping or hurting?"

### RC-7: The DD/AD/OD/CD Compression Loss
The rich identity research gets compressed at multiple pipeline stages:
1. 337 findings → soul constraints (massive compression)
2. Mechanism catalog → "sample 2-4" instruction (50:1)
3. Case studies → not referenced during builds
4. Rich provenance → invisible to builders
5. Compositional intelligence → binary gate checks

Each compression stage loses nuance. The builder agent sees ~75 lines of instruction (13.4% of the master prompt). Zero compositional intelligence reaches the CSS-writing agent.

### RC-8: The Synthesis Death Spiral
Research findings → markdown files → synthesis → lossy summary → user reads summary → lacks nuance → makes decisions based on incomplete understanding → problems repeat → more research → more markdown files → cycle continues.

### [OVERLOOKED: RC-9: Dead Skill Infrastructure]
**[From independent evaluation:]** The TC skill (~1,650 lines) is effectively dead code. /build-page does NOT invoke /tension-composition. The pipeline replaced TC's 5-phase process with Content Analyst + Brief Assembler. The TC brief template is a 236-line static template, not generated by running the TC skill. Both execution trackers show zero TC skill invocations. The skill's first 700 lines (Phases 0-3.5) are genuinely valuable methodology (the FEEL/UNDERSTAND/DO/BECOME axis, the Addition Test, the Metaphor Quality Rubric). Phase 4+ duplicates pipeline artifacts. The TC skill is "a historical document masquerading as an active skill" — its ideas live on in the pipeline, but the skill itself is unreferenced. The PA skill's content was more successfully migrated: extracted verbatim into pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md. This represents ~1,650 lines of maintained infrastructure that serves no operational purpose.

---

## Part 3: The Questions We Need to Answer

### Layer 1: Soul & Identity (DD/AD/OD/CD Phases)
- [ ] Q1.1: What exactly did we extract from the DD, OD, AD, CD phases? What are the actual artifacts?
- [ ] Q1.2: Why did we choose the specific soul constraints we did? What evidence supports each one?
- [ ] Q1.3: Are the soul constraints accurate reflections of the showcase pages, or are they arbitrary codifications?
- [ ] Q1.4: If we looked at the DD/AD/OD/CD work fresh — what would we ACTUALLY extract as the identity?
- [ ] Q1.5: How much of the soul layer is enabling vs restricting?
- [ ] Q1.6: What's the correlation between the rich context accumulated in those phases and what actually reaches the pipeline?

### Layer 2: Pipeline Architecture
- [ ] Q2.1: What is the ACTUAL execution flow when /build-page runs? (Not what the spec says — what REALLY happens)
- [ ] Q2.2: What is the INTENDED execution flow per the spec?
- [ ] Q2.3: Where are ALL the gaps between actual and intended?
- [ ] Q2.4: What information flows from the identity layer (DD/AD/OD/CD) into each pipeline agent? How much is lost at each stage?
- [ ] Q2.5: What does the builder agent ACTUALLY see when it writes CSS? How much of the creative engine reaches it?

### Layer 3: Enforcement Mechanisms
- [ ] Q3.1: For EACH of the 57 gates: What does it check? Why was it created? What problem was it trying to solve? Was that problem caused by a PREVIOUS mechanism? Does it actually improve visual quality? What creative expression does it suppress?
- [ ] Q3.2: For EACH of the 14 crack dimensions: Same provenance questions. Origin, effectiveness, cost.
- [ ] Q3.3: For observer checks: What do they actually catch? Are they advisory or enforced? Do they prevent problems or just document them?
- [ ] Q3.4: For execution trackers: What's tracked? Who reads it? Does it change behavior?
- [ ] Q3.5: Which mechanisms are PROTECTIVE (genuinely keeping the soul) vs PARASITIC (adding rigidity from the noise spiral)? **[PA CIRCULARITY]:** If "keeping the soul" is measured by PA-05, and PA-05 embeds the soul's aesthetic, this classification risks circularity. Consider: protective-by-what-standard?
- [ ] Q3.6: If we stripped away ALL enforcement, what would the pipeline produce? Would it be worse? How? **[PA CIRCULARITY]:** "Worse" as measured by which instrument? PA-05 may score unenforced pages lower by design (it rewards soul-compliance). An independent instrument might not.

### Layer 4: LLM Interpretation
- [ ] Q4.1: Is LLM interpretation fundamentally a problem, or is it the SOLUTION if done right?
- [ ] Q4.2: If we fully embrace LLM interpretation (no gates, no checks), what do we get? What do we lose?
- [ ] Q4.3: What's the RIGHT role for gates/checks in an LLM creative pipeline? Post-hoc analysis for retrospectives? Real-time enforcement? Something else?
- [ ] Q4.4: What does "done right" look like for LLM interpretation in creative work?
- [ ] Q4.5: Binary rules achieve 100% compliance but produce empty output. Judgment rules enable quality but are inconsistent. Is there a third option?

### Layer 5: Visual Outcome
- [ ] Q5.1: Do pages built by the pipeline look similar to each other? If so, is that because of content similarity, metaphor similarity, or enforcement rigidity?
- [ ] Q5.2: What visual qualities are being SUPPRESSED by enforcement mechanisms?
- [ ] Q5.3: What's the actual visual delta between a page built WITH all enforcement vs a page built with ONLY the soul constraints and no gates?
- [ ] Q5.4: Are we bottlenecking a strong creative engine with rigid mechanics?
- [ ] **Q5.5 [PA CIRCULARITY]:** When measuring visual quality deltas (Q5.3), can PA-05 serve as the measurement instrument? PA-05 is aesthetic-shaped (per `20-pa-bias-lens.md`); it may reward enforcement-compliant pages by design. Quality comparisons between enforced and unenforced builds require an instrument OUTSIDE this system, or at minimum should separate PA-05's neutral sub-findings from its aesthetic-shaped sub-findings.

### Layer 6: Meta-Process
- [ ] Q6.1: WHY do we keep adding complexity that doesn't solve the actual problem?
- [ ] Q6.2: What's the meta-failure pattern across all our "fixes"?
- [ ] Q6.3: How do we break the cycle of: problem → research → markdown → synthesis → lossy summary → problem persists?
- [ ] Q6.4: What would a pipeline look like if we designed it from scratch knowing what we know now?
- [ ] Q6.5: Are we confusing the MAP (the spec documents) for the TERRITORY (the actual build process)?

### Layer 7: Delivery Format
- [ ] Q7.1: What format actually works for the user to absorb findings?
- [ ] Q7.2: How do we do granular, nuanced research WITHOUT creating a synthesis bottleneck?
- [ ] Q7.3: Is synthesis even the right approach, or should findings be delivered differently?
- [ ] Q7.4: How do we prevent the cycle: research → files → lossy synthesis → problems persist?

---

## Part 4: User's Repeated Emphases (Signal Amplification)

These points were stressed MULTIPLE times across the conversation. Repetition = importance:

1. **"We keep adding noise to address noise caused by a structural issue we never focused on at the root"** — the enforcement spiral is self-perpetuating. We've never identified the ROOT structural issue.

2. **"I'm not sure how much is hindering the full extent of the design system to unleash its creative potential"** — the user suspects enforcement is bottlenecking creativity, but doesn't have evidence to confirm or deny.

3. **"Even if the metaphor is wildly different for different pages, they come out looking visually similar due to rigidity"** — this is a testable hypothesis. If true, it's the smoking gun that enforcement is parasitic.

4. **"Maybe I'm the problem; maybe my justification of not understanding how simple it is is aiding in retaining these mechanisms"** — the user acknowledges they might be contributing to complexity accumulation by not investing in understanding. The delivery format is part of this.

5. **"What are we actually grabbing from the DD, OD, CD phases?"** — the user wants to trace the provenance from identity research to pipeline execution. What survives? What's lost? What's distorted?

6. **"The synthesis file usually does a terrible job"** — the delivery format is not a nice-to-have. It's a CRITICAL PATH issue. If findings don't land, nothing changes.

7. **"We need to understand a different system here"** — the user is not asking for incremental improvements. They want to understand the system from scratch.

8. **PA protocols should be in a separate bucket** — the user sees PA as a different paradigm (meta-visual quality assessment) that shouldn't be grouped with gates/observers/trackers.

---

## Part 4B: Deeper Nuances (From Follow-Up Q&A)

These nuances emerged from deeper questioning and add critical dimensions the research MUST address:

### N-1: The Three Threads Are ONE Problem
The recursion (enforcement spiral), the arbitrariness (were soul constraints ever validated?), and LLM-interpretation-as-feature (maybe enforcement fights the creative engine) are NOT separate problems. They are the SAME problem seen from different angles. Research that treats them separately will miss the interdimensional connections. Any agent investigating one thread must understand it connects to the other two.

### N-2: The Soul May Have Never Been Accurately Captured
The user raises the possibility that the DD/AD/OD/CD extraction might have codified the WRONG things from the start. This is not just about compression loss (RC-7). It's deeper: even before compression, were we extracting the right essence? The soul constraints may be arbitrary codifications of one aesthetic moment rather than genuine identity principles.

Three layers of soul compromise:
- **Layer A:** Never accurately captured (wrong extraction from DD/AD/OD/CD)
- **Layer B:** Diluted by enforcement (accurate extraction but lost in transmission)
- **Layer C:** Overwritten by mechanics (accurate + transmitted but pipeline mechanics replace it)
All three may be happening simultaneously. Research must investigate each independently.

### N-3: The Objectivity Trap
The user identifies a critical epistemological insight: "What's not getting done" is inherently SUBJECTIVE. We responded by making it OBJECTIVE through gates. But objectifying a subjective judgment doesn't make it correct — it makes an arbitrary judgment RIGID. The gates may be enforcing arbitrary objective proxies for something that was always a subjective quality assessment.

Question: Did we take subjective quality concerns, codify them as binary checks, and then mistake the binary checks for the quality itself?

**[PA CIRCULARITY AMPLIFIER — Pattern 2]:** The objectivity trap has a second layer: PA-05 appears to provide objective VALIDATION of the binary checks ("PA-05 improved when we enforced X"). But PA-05's FLAT/ASSEMBLED/COMPOSED/DESIGNED scale was created by the same system that wrote the checks. "DESIGNED" means "mechanisms in conversation" — a concept THIS system invented. The apparent objectivity of PA-05 scores deepens the trap by adding a quantitative veneer to what remains a self-referential aesthetic judgment.

### N-4: The Infrastructure Noise Problem
The user asks: "Once we strip away all the noise that was used to make gates, crack dimensions, observers, and trackers viable — do we even need them anymore?" This is a key insight: much of the pipeline infrastructure exists to support the ENFORCEMENT, not the BUILD. If enforcement were removed, would the supporting infrastructure be needed? How much of the pipeline is build infrastructure vs enforcement infrastructure?

### N-5: The Tunnel Vision Acknowledgment
The user explicitly states: "I am lacking the metacognitive sense to be able to challenge what we have." This is both humble and critical — it means the user is asking for help seeing what they can't see. The research must not just validate the user's intuitions. It must CHALLENGE assumptions the user might not even know they're making. Fresh-eyes perspective is essential.

### N-6: LLM Interpretation — Problem or Engine?
The user's position is nuanced: LLM interpretation might be the creative feature, not the bug. If so, enforcement is fighting the very thing that produces quality. But the user isn't committed to this position — they want evidence. The research should explore: in builds where the LLM had MORE creative freedom (fewer gates, less enforcement), was the output BETTER or WORSE? Is there a correlation between enforcement stringency and visual quality?

### N-7: The Gate Validity Question
For each gate, the question isn't just "does it work?" but "is it checking something that actually matters?" Gates may be:
- **Valid and valuable:** checking something that genuinely correlates with quality
- **Valid but irrelevant:** checking something real that doesn't affect perceived quality
- **Arbitrary:** checking something that was codified without evidence
- **Parasitic:** checking something that actively suppresses quality
Current gate inventory has never been assessed through this lens.

### N-8: PA Protocols as Distinct Paradigm
The user firmly separates PA protocols from gates/observers/trackers. PA is "how we assess the meta visual qualities of a page" — a paradigm for PERCEIVING quality, not ENFORCING structure. This distinction matters: PA should be evaluated on different criteria than enforcement mechanisms. PA is about whether the page FEELS right. Gates are about whether the page COMPLIES with specs. These are fundamentally different functions.

**[PA CIRCULARITY CAVEAT]:** This separation is valid in FUNCTION (PA perceives, gates enforce) but conceals a shared origin: both PA questions and gate thresholds derive from the same aesthetic system. PA-05's DESIGNED/FLAT scale, PA-19's "belonging" assessment, and PA-33's music-metaphor framing all embed this system's values. If PA is the "independent judge" of gate effectiveness, but PA and gates share the same aesthetic DNA, the independence is partial. Our analysis said 39% of PA questions (27/69) are style-neutral; 61% (42/69) are aesthetic-shaped. **[NUANCED by independent evaluation: The independent count is 34/69 UNIVERSAL (49%), 22/69 SYSTEM-SHAPED, 13/69 AMBIGUOUS. The independent evaluation finds circularity "partial, not fatal" — Tiers 1-4 are ~70% universal, circularity lives primarily in Tier 5 and PA-05a DESIGNED. Critically, the independent check found the DEPLOYMENT PROTOCOL (experiential-first, fresh-eyes, screenshot-only, weaver synthesis) to be genuinely system-agnostic. "The protocol is over-engineered for most use cases (11 agents for one page is expensive), but the architecture is sound." The PA system's value is in its deployment architecture, not in question universality.]** See `20-pa-bias-lens.md`.

### N-9: The User's Role in the System
The user wonders if their own behavior (not investing in understanding the mechanisms, relying on synthesis summaries, approving complexity additions without deep understanding) is perpetuating the problem. This is metacognitively important: the research should consider whether the system's complexity serves a purpose for the BUILDER (the user/Claude collaboration) even if it doesn't serve a purpose for the OUTPUT (the page). Some complexity may exist because it FEELS productive to add it, not because it IS productive.

### N-10: Observers/Trackers as RETROSPECTIVE Tools (GAP-2, from cross-check)
The user explicitly reframed observers and trackers as potentially valuable for RETROSPECTIVE analysis rather than real-time enforcement: "maybe for an insightful retrospective session?" This is a paradigm shift: instead of observers/trackers constraining the build process, they become post-hoc analytical tools for learning. This reframing changes their value proposition entirely.

### N-11: Gates as POST-Interpretation Evaluation (GAP-3, from cross-check)
The user asked whether gates should evaluate OUTPUT quality after LLM interpretation, rather than constraining INPUT behavior during the build. This is a fundamental role reversal: gates as quality ASSESSMENT (did the page come out well?) rather than quality ENFORCEMENT (did the builder follow rules?). If LLM interpretation is the creative engine (N-6), then gates should measure what the engine produced, not constrain how it operates.

### N-12: Delivery Format Crisis is EXISTENTIAL (UW-1, from cross-check)
The delivery format problem is not #6 of 8 priorities — it's #1. The user's longest, most passionate answer was about this. The synthesis bottleneck is WHY problems persist across sessions. If findings don't land, nothing changes. This must be weighted as the CRITICAL PATH issue, not a supporting concern.

---

## Part 5: What Needs to Happen Next

### Phase 0: Delivery Format (BEFORE any research)
Figure out how to deliver research findings that don't bottleneck at synthesis. This must be solved FIRST because every subsequent investigation depends on its findings actually landing.

### Phase 1: Pipeline Archaeology
Map the ACTUAL vs INTENDED execution flow. Identify every gap. Trace the history of how each mechanism was added and what it was bandaging. Produce the comprehensive diagram.

### Phase 2: Mechanism Audit
For each gate, crack dimension, observer check, and tracker: trace its origin, measure its effectiveness, quantify its creative cost. Classify as PROTECTIVE vs PARASITIC.

### Phase 3: Identity Compression Trace
Map how the DD/AD/OD/CD research flows (or doesn't flow) through the pipeline into the final page. Identify every compression point and what's lost.

### Phase 4: The Fundamental Question
With all evidence assembled: what ACTUALLY matters for producing a good page? What's noise? What would the pipeline look like if we stripped it to essentials?

---

## Part 6: Constraints on the Investigation

1. **No solutions yet.** Understanding first. Clarity before action.
2. **No 1000-line files.** Whatever delivery format we choose, it must be dense and actionable.
3. **No lossy synthesis.** If we can't faithfully compress, don't compress — find a different approach.
4. **PA protocols are a separate conversation.** Don't muddy the enforcement audit with PA analysis.
5. **Every finding must trace to evidence.** No speculation presented as fact.
6. **The user must actually be able to INVEST in the findings.** If the format doesn't enable investment, the format is wrong.
