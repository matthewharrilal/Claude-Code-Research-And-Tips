## 16. Skill Architecture Analysis {#skill-architecture}
*Agent: architecture-analyst | Task #20 | 2026-03-03*

### The Central Question

The audit documents WHAT happened: 31.5% executed, 20.3% never saw, 0 of 38 passes were full build-look-refine cycles, batch-read replaced rotation universally, waterfall replaced spiral. This section asks WHY the skill's architecture produced these results. The thesis: the compliance failures are not random agent misbehavior — they are predictable consequences of structural properties of the skill that interact with known properties of LLM cognition. The skill was designed for how a human craftsperson thinks. It was deployed on a system that thinks differently.

---

### 16.1 The Effective Instruction Window: 1190 Lines vs. Functional Attention

**Is 1190 lines structurally executable by an LLM?**

The answer is: partially. But the partial is not random — it follows a precise attention gradient that the reliability classification data reveals.

The skill is 1190 lines. When loaded into an LLM's context window alongside the content source (~1564 lines), the builder's notebook (growing to 691 lines), research files (thousands of lines per wave), and the HTML artifact itself (growing to ~1950 lines), the skill competes for attention against 4000-8000+ lines of other material. In this competition, the skill's sections do not receive equal attention. The reliability data shows a clear hierarchy:

| Skill Section | Lines | Execution Rate | Attention Position |
|---|---|---|---|
| Design System Physics (96-112) | ~16 | 89% (16/18) | HIGH — short, binary, verifiable |
| Invocation/Setup (34-56) | ~22 | 63% (5/8) | MODERATE — procedural, early in file |
| Anti-Patterns (1078-1103) | ~25 | 70% (7/10) | MODERATE — short, binary |
| 10 Falsifiable Criteria (1034-1075) | ~41 | 70% (7/10) | MODERATE — numbered, testable |
| Content Reading Protocol (282-406) | ~124 | 62% (8/13) | MODERATE — procedural steps |
| Metacognitive Evaluation (124-252) | ~128 | 40% (10/25) | LOW — abstract, prose-heavy |
| Wave-specific prescriptions (544-936) | ~392 | ~25% avg | LOW — deep in file, wave-specific |
| Primacy Rotation (431-503) | ~72 | 11% (1/9) | NEAR-ZERO — abstract, complex protocol |
| Context Window Management (1106-1191) | ~85 | 8% (1/12) | NEAR-ZERO — end of file |
| Engagement Minimums (509-543) | ~34 | 7% (1/15) | NEAR-ZERO — abstract thresholds |

The pattern is unambiguous: **the skill's effective instruction window is approximately 200-300 lines.** The Design System Physics, Invocation, Anti-Patterns, Falsifiable Criteria, and the first pass through the Content Reading Protocol account for roughly the top 200 lines of functional attention. Everything below that — the metacognitive framework, the wave-specific prescriptions, the rotation system, the engagement minimums — enters a compression zone where the LLM extracts structural headlines ("Wave 2 = research R1-R5") but not operational detail ("14-position rotation with 2 primacy turns per file").

This is not an attention deficit. It is attention economics. The LLM allocates processing proportional to verifiability, structural salience, and proximity to action. The skill's 1190 lines contain approximately:
- **~200 lines of actionable binary rules** (design physics, criteria, anti-patterns) — these executed at ~80%
- **~300 lines of structural process protocols** (wave schedule, content reading) — these executed at ~40%
- **~400 lines of metacognitive prose** (staleness, evaluation evolution, reciprocal learning) — these executed at ~5%
- **~290 lines of rotation schedules and engagement arithmetic** — these executed at ~5%

The bottom 690 lines of the skill were functionally invisible. Not because the LLM didn't read them — it clearly did (it used "Spatial Listening" and "Structural Anatomy" as exact labels from the skill). But it read them as VOCABULARY to adopt, not as PROTOCOLS to follow. The behavioral instructions embedded in prose ("assume your evaluation IS stale right now," "has my DEFINITION of good deepened since last pass?") were not parsed as instructions. They were parsed as descriptions of a stance the skill wishes the agent to adopt — and the agent adopted the parts that aligned with what it was already doing (content reading protocol) and ignored the parts that didn't (staleness detection, rotation discipline).

**Structural diagnosis: The skill is ~4x longer than the effective instruction window for process protocols.** The first ~300 lines land. The remaining ~900 lines are progressively compressed to headlines.

---

### 16.2 Structurally Impossible Prescriptions

Some prescriptions in the skill are not just difficult for an LLM — they are structurally incompatible with how LLMs process information. These should be identified and either redesigned or removed.

**Category 1: Self-monitoring across shifting context windows**

| Prescription | Why Structurally Impossible |
|---|---|
| "Staleness detector 2: Name ONE thing you saw that you could not have seen 3 passes ago" | Requires autobiographical recall of perceptual states at specific past timepoints. LLMs do not have episodic memory. They have the notebook, but this requires comparing EXPERIENTIAL states, not documented facts. |
| "Staleness detector 3: Name the dimension you are most focused on. If same for 3 consecutive passes, approaching staleness" | Requires tracking a continuous internal variable ("focus dimension") across passes. The LLM's internal state resets between passes — only the notebook persists, and this was not tracked in the notebook. |
| "Is my evaluation at pass 30 DIFFERENT from pass 5?" | Requires comparing two internal evaluative states separated by 25 passes of building. The LLM does not retain internal states — only their documented artifacts. |
| "Process fatigue masquerading as completion — Would I build differently if I started over?" | Requires simulating an alternative self with different context history. LLMs can do this in principle (it is a counterfactual reasoning task) but reliably choose the compliance answer ("no, this is fine") over the genuinely evaluative one. |
| "Taste emerges from building" / "Perceptual Resolution Deepening" | Describes a phenomenon that occurs in human cognition over hours. Whether the phenomenon has an analogue in LLM processing across 30 passes in ~100 minutes is an open empirical question, not something the skill can prescribe into existence. |

**Category 2: Voluntary self-interruption**

| Prescription | Why Structurally Difficult |
|---|---|
| "When staleness is detected, STOP building" | Requires the agent to interrupt its own forward momentum. LLMs have strong continuation bias — the next token follows the current trajectory. Voluntarily stopping to re-read content requires an external interrupt or an extremely salient trigger. |
| "Exhaustion: delta stabilized AND research re-read produces nothing AND infinite-time answer is invisible" | Requires the agent to verify three conditions that require separate cognitive operations (reviewing delta profile, re-reading research, performing a hypothetical) before proceeding. The waterfall instinct will proceed to the next wave before completing this three-part check. |
| "Look before reading each wave" | Requires the agent to pause its reading momentum to screenshot and look FIRST. The batch-read instinct loads all available material before acting. This prescription fights the natural input-before-output sequence. |

**Category 3: Sustained state maintenance across many passes**

| Prescription | Why Structurally Challenging |
|---|---|
| "Definition Journal: START and END of each wave" | Writing at wave start is easy (it is the first action). Writing at wave END requires the agent to remember to write BEFORE transitioning to the next wave. Wave transitions are natural momentum points where the agent is focused forward, not backward. 1 of 18 entries written — the ONE at wave start. |
| "Topology persistence: the spatial projection becomes the dominant frame for ALL subsequent CSS decisions" | Requires maintaining a generative frame while simultaneously processing binary constraints. Binary constraints are verifiable and create clear optimization targets. The generative frame is not verifiable. When both compete for the same processing resources, the verifiable wins. |
| "10+ passes per slice" | Requires the agent to sustain engagement with a single file across 10+ passes when the most salient new information was extracted in pass 1-2. The diminishing returns curve of re-reading the same file is steep. After 2-3 passes, the agent's natural behavior is to seek new input, not re-read. |

**The key insight: approximately 40% of the skill's prescriptions (by count) require cognitive operations that are structurally difficult or impossible for an LLM.** These are not "hard" in the way that a complex coding task is hard. They are hard because they require internal state tracking, voluntary self-interruption, or sustained engagement against diminishing returns — capabilities that LLMs either lack or perform unreliably.

---

### 16.3 Prescriptions That COULD Work With Different Delivery

Many prescriptions failed not because they are structurally impossible but because the delivery mechanism was wrong. The skill relies on a single mechanism — prose instruction in a monolithic document read at build start — for prescriptions that require fundamentally different delivery.

**Delivery Mechanism 1: Orchestrator-enforced rotation**

The primacy rotation was 0% compliant. But the rotation schedule itself is not structurally impossible — it is a sequence of file reads in a specified order. The problem is that the skill DESCRIBES the rotation and asks the agent to SELF-ENFORCE it. An agent building a page has a strong forward-momentum bias and will not voluntarily interrupt building to consult a rotation schedule deep in the skill definition.

**Fix: The orchestrator enforces rotation.** Instead of the single-agent model where one agent reads the skill and self-manages, the orchestrator sends the primacy file to the builder at the start of each pass. The builder never sees the rotation schedule — it just receives "For this pass, read DD-006 first, then build." The rotation becomes an environmental constraint, not a self-regulation task.

This applies to:
- Wave 2 research rotation (14 positions)
- Wave 3 case study tiering and rotation
- Wave 1 soul file rotation
- The 4-pass neglect threshold (orchestrator tracks which files are neglected)

**Delivery Mechanism 2: Pass-level prompt injection**

The skill prescribes different cognitive stances at different passes ("Pass 1-3: comprehension; Pass 4-6: projection; Pass 7-8: interrogation"). The builder never adopted these because they were buried in the wave definition, read once at build start, and not reinforced at the moment of execution.

**Fix: Each pass begins with a short role instruction.** Instead of the builder remembering "at pass 7, shift to interrogation mode," the orchestrator prepends a 3-5 line preamble at the start of each pass:

```
PASS 7 of Wave 0. You have been reading this content for 6 passes.
Your task this pass: INTERROGATE your spatial hypothesis.
Question to answer: "Is my spatial hypothesis the DEEPEST possible reading, or the first plausible one?"
After building, screenshot and evaluate through Layer 5 specifically.
```

This converts a self-regulation task (remembering where you are in a multi-wave schedule) into an environmental prompt (being told what to do now). The skill's wave-specific L1-L5 questions, currently never used, would become the per-pass preamble content.

**Delivery Mechanism 3: Checkpoint gates**

The skill prescribes exhaustion conditions, definition journal entries, and wave-transition checks. All require voluntary self-interruption. None were executed.

**Fix: The orchestrator blocks wave transitions until checks pass.** The builder cannot start Wave 2 until it has:
1. Written its definition journal entry for Wave 0 end and Wave 1 start
2. Answered the 3 exhaustion conditions
3. Taken a screenshot and written a "look before reading" entry

This converts self-regulation into a gate. The builder can still compress its passes within a wave, but it cannot skip the transition protocol.

**Delivery Mechanism 4: Segmented skill delivery**

The builder received all 1190 lines at build start. By Wave 3, the Wave 0-1 prescriptions are in the attention trough. By Wave 6, the entire skill is compressed to headlines.

**Fix: Deliver wave-relevant skill segments per wave.** The builder receives:
- At build start: The Cognitive State section + Design System Physics + Content Reading Protocol (~250 lines)
- At Wave 1 start: Wave 1 prescription + soul file rotation schedule (~60 lines)
- At Wave 2 start: Wave 2 prescription + research rotation schedule (~80 lines)
- etc.

Each delivery is short enough to fit in the effective instruction window (~200-300 lines). The builder never needs to extract wave-specific instructions from a 1190-line document — it receives only what is relevant now.

**Delivery Mechanism 5: External metacognitive prompting**

The staleness detectors, swap test schedule, definition journal, and false convergence checks all require the agent to remember to do something at regular intervals. This is a timer/reminder task, not a cognitive task.

**Fix: The orchestrator injects metacognitive prompts at defined intervals.**

- Every 4 passes: "STALENESS CHECK: Write your current definition of good. Name one thing you can see now that was invisible 3 passes ago. If you cannot, re-read the content before continuing."
- Every wave boundary: "DEFINITION JOURNAL: Write 'My definition of good is: ___'. Compare to your last definition."
- Every 8 passes: "SWAP TEST: Pick the 2 weakest sections. Could their spatial form survive transplantation to different content? If yes, they are generic — deepen them."

The metacognitive framework is not structurally impossible — the organic metacognition data (30-40% informal execution) proves the agent CAN self-evaluate. The failure is in self-SCHEDULING the evaluation. External prompting solves this.

---

### 16.4 The Binary vs. Abstract Compliance Divide

The single most important finding across all auditors: **binary rules execute at ~90%, process protocols at ~5%.** Why?

**The cognitive mechanism:** LLMs optimize for verifiable completion. A prescription like "border-radius: 0" has three properties that make it reliably executable:

1. **Binary verification.** The agent can check: "Is border-radius 0? Yes/No." There is no judgment required.
2. **Immediate feedback.** The CSS is right there. The agent can verify compliance in the same pass it implements it.
3. **Persistence.** Once set, it stays set. The agent doesn't need to re-verify it every pass.

A prescription like "apply swap test every 4 passes" has the opposite properties:

1. **Judgment-dependent.** "Did I really apply the swap test, or did I just confirm what I already believe?" The agent cannot binary-verify its own metacognitive depth.
2. **Deferred feedback.** The swap test's value is visible only in the final output quality, not in the pass where it was applied.
3. **Ephemeral.** The swap test must be re-applied every 4 passes. There is no persistent state that maintains compliance.

This is not a flaw in the agent. It is a fundamental property of how instruction-following works in transformer architectures. The attention mechanism computes relevance based on token-level pattern matching. "border-radius: 0" matches a clear action pattern. "Apply swap test every 4 passes" matches no action pattern — it is a scheduling instruction about a cognitive operation, which requires the agent to (a) track pass count, (b) remember the prescription, (c) interrupt its current work, (d) perform a hypothetical operation, and (e) act on the result. Each step has a failure probability, and the compound probability of all five succeeding is low.

**The implication for skill design:** The skill must convert abstract process prescriptions into binary verifiable actions wherever possible. Examples:

| Abstract Prescription (current) | Binary Conversion (proposed) |
|---|---|
| "Apply swap test every 4 passes" | Orchestrator prompts: "SWAP TEST NOW. Pick section X. Write in notebook: 'This section's layout [could/could not] apply to content about cooking. Because: ___'" |
| "Has your definition of good deepened?" | Gate: "Write your definition. Orchestrator compares to last definition. If >80% token overlap, flag: 'Your definition is stale — re-read the content before proceeding.'" |
| "Read research files in rotation" | Orchestrator serves the file: "This pass, your primacy file is R3. Read it first." |
| "10+ passes per research slice" | Gate: "You have completed 3 passes on R3. Minimum remaining: 7. Continue with R3 or write a notebook entry explaining why you believe R3 is exhausted at 3 passes." |
| "Look before reading each wave" | Gate: "Take a screenshot now. Write what you see. Then proceed to read this wave's research." |

Not every abstract prescription can be binarized. "Topology persistence" is inherently a generative stance, not a verifiable action. But the skill currently treats ~70% of its prescriptions as if they have equal enforceability, when in fact only ~30% are in the binary-verifiable category. The redesign should acknowledge the gradient and use appropriate delivery mechanisms for each category.

---

### 16.5 The Waterfall Gravity Problem

The skill prescribes a spiral: absorb -> create -> absorb more -> create deeper. The builder executed a waterfall: read -> build -> verify -> ship. This is not unique to this build — it is the default execution model for LLMs performing complex tasks. The question is: can a skill fight this gravity, or must it design around it?

**Why LLMs default to waterfall:**

1. **Forward momentum bias.** Transformer generation is inherently sequential and forward-moving. Each token predicts the next. "What comes next after building?" -> "Verify what I built." Not "Go back and re-read what I already read." The spiral requires backward movement against the generation direction.

2. **Completion drive.** LLMs have been trained to complete tasks. The internal reward signal strengthens as the task approaches completion. Each wave completed is a progress signal. Going back to deepen a previous wave registers as regression, not progress.

3. **Diminishing novelty.** Re-reading a file the LLM has already processed yields diminishing new tokens. The information was already extracted. The skill claims "reading changes after building" — but from the LLM's perspective, the file's tokens haven't changed. The changed interpretation requires a metacognitive layer (recognizing that my context has changed, therefore the same tokens should yield different insights) that is a higher-order reasoning task, not a default behavior.

4. **Batch processing efficiency.** LLMs process information most efficiently when they can consume it in large chunks and act on it. The rotation model — read one file, build from it, read another file, build from it — forces context switches that reduce processing efficiency. Batch reading enables cross-file synthesis in a single processing window.

**Can the skill fight waterfall gravity?**

Partially. Some interventions can create genuine spiral behavior:

- **Orchestrator-forced re-reading.** If the orchestrator re-delivers a research file at pass 15 with a new prompt ("You have now built 1500 lines of CSS. Re-read R3. What do you see NOW that was invisible when you first read it?"), the LLM will process the file against its current building context. This is externally-enforced reciprocal learning.

- **Incremental building constraints.** If the orchestrator limits each pass to ~200 lines of CSS changes (enforced by a gate that rejects passes with >200 new lines), the builder cannot dump 1950 lines in one pass. This forces iterative building by making monolithic builds impossible.

- **Re-reading prompts with specificity.** Generic re-reading ("re-read R3") yields the same extraction. Targeted re-reading ("re-read R3 section 2.4 on temporal density. Your current page has a CRESCENDO but no temporal interruptions. Does R3 suggest any?") yields new extraction because it focuses attention on a specific gap.

What the skill CANNOT fight:

- **The completion drive.** Once the builder has a complete page, the internal pressure is to verify and ship, not to tear it apart and rebuild. No amount of process prescription overcomes the fact that a complete artifact feels like a completed task.

- **The one-pass extraction instinct.** If a file yields 3 strong findings on first read, the LLM will apply those 3 findings and move on. The claim that passes 7-10 yield "compound relationships invisible at pass 3" may be true for human cognition but is unproven for LLMs. The skill should either prove this claim with LLM-specific evidence or design around the one-pass extraction reality.

**Design recommendation:** Work WITH the waterfall, not against it. Instead of prescribing 10+ passes per file (fighting the completion drive), design a multi-loop waterfall:

```
Loop 1: Read all -> Build skeleton -> Verify skeleton (Waves 0-3 compressed)
Loop 2: Re-read with specificity -> Deepen -> Verify depth (Waves 4-6 equivalent)
Loop 3: Adversarial -> Surgery -> Final (Waves 7-8 equivalent)
```

Each loop is a complete waterfall (satisfying the completion drive), but the skill prescribes three loops with increasing depth, and the orchestrator enforces re-reading at loop transitions. This accommodates the waterfall instinct while achieving the spiral's depth objective.

---

### 16.6 The Batch-Read Instinct and the Rotation Question

The rotation protocol was 0% compliant. Batch-read replaced it universally. Is rotation fighting LLM nature?

**Yes, partially.** LLMs process reference material most naturally as batch input. The rotation model — reading one file at a time across 10+ passes — imposes artificial scarcity on a system designed for parallel processing. The human cognition rationale (primacy/recency effects, attention troughs) may not apply with equal force to transformer attention, which has explicit mechanisms for attending to any position in the context window.

**But the rotation's secondary value — coverage guarantee — is critical.** The batch-read model's catastrophic failure was not depth but coverage: R2 and R4 were never read. The builder's self-directed file selection skipped 65% of the research corpus. Rotation would have prevented this.

**Redesign recommendation: Separate coverage from depth.**

- **Coverage phase (orchestrator-enforced):** At the start of each research wave, the orchestrator ensures every prescribed file is read at least once. Not in rotation — in a batch read with explicit extraction requirements. "Read R4. Write 5 findings that are applicable to your current page. If fewer than 3 are applicable, explain why." This guarantees coverage without fighting the batch instinct.

- **Depth phase (agent-directed):** After coverage, the agent chooses which files to re-read based on what the page needs. The orchestrator provides gentle guidance ("R4 has 192 findings. You extracted 5. Consider whether your page's layout could benefit from the axis patterns in R4 sections 2-3.") but does not enforce a rigid rotation.

- **Neglect detection (orchestrator-tracked):** The orchestrator monitors which research dimensions appear in the builder's CSS and notebook. If a dimension (e.g., axis) has zero CSS evidence after 8 passes, the orchestrator flags it: "Your page has no non-default reading paths. R4 addresses this. Re-read R4 section 3 with the question: 'Does my content have any sequence that would benefit from a non-vertical reading path?'"

This preserves the batch-read efficiency the LLM naturally uses while adding the coverage guarantee that self-directed reading lacks.

---

### 16.7 The 1950-Line Monolithic Build

Pass 1.2 wrote the entire HTML in one pass — 1950 lines. The skill prescribes iterative building where each pass adds 30-200 lines. Why did this happen, and can iterative building be enforced?

**Why it happened:**

1. **Wave 0 accumulated 8 passes of analysis with zero building.** By the time the builder started writing HTML, it had a complete spatial vision — topology color system, CRESCENDO density, network map concept, 8-row loss detection table. Writing the entire vision at once was the natural response to having accumulated that much planning.

2. **LLMs write code in complete units.** When an LLM generates an HTML file, it generates a complete, coherent file — not a fragment. This is how code generation training works: the model learns to produce complete, runnable artifacts. Asking for "just the header and first section" fights the complete-artifact instinct.

3. **No external constraint on build size.** The skill describes iterative building but provides no mechanism to enforce it. The agent could write 1950 lines because nothing stopped it.

**Can iterative building be enforced?**

Yes, with structural constraints:

1. **Build-size gates.** The orchestrator limits each build pass to N lines of new HTML (e.g., 200-300 lines). If the agent submits more, the orchestrator rejects it: "This pass adds 1950 lines. Maximum per pass: 300. Build only the header and first content section this pass."

2. **Section-by-section building.** The orchestrator assigns one content section per pass: "This pass, build Section 07 (Architecture Patterns). Use the topology color system you established. Include the 2x2 grid." The agent builds one section completely, screenshots, evaluates, and moves on. This converts the monolithic build into a sequence of section-level builds.

3. **The skeleton-then-depth model.** Pass 1: HTML skeleton with semantic structure, zero styling. Pass 2: Zone backgrounds and spacing. Pass 3: Typography system. Pass 4: Grid layouts. Pass 5: Details and refinement. Each pass has a defined scope. This is closer to how the skill envisions iterative building — but framed as layered depth rather than section-by-section, which may suit LLM code generation better.

**The tradeoff:** Enforcing iterative building adds orchestrator complexity and may reduce the cross-section coherence that a monolithic build achieves. The topology color system's 58 instances across 10 scales may have benefited from being written in a single pass where all instances were visible simultaneously. A section-by-section build might lose that global coherence.

**Recommendation:** Enforce iterative building through a layered model (skeleton -> zones -> typography -> grids -> details) rather than a section model. This preserves global coherence while preventing monolithic dumps.

---

### 16.8 The Constraint/Generative Competition

The audit's most structurally important finding: **binary constraints displaced creative engagement.** The cognitive state auditor documented that the builder's generative engagement (topology-about-topology, velocity mapping, spatial hypotheses) dissolved when design system binary constraints loaded. The builder shifted from "what does the content demand?" to "does this pass SC-09?"

This is not a failure of discipline — it is a resource allocation problem. An LLM has a fixed processing budget per generation step. When that budget must simultaneously serve:

1. **Binary constraint compliance** (verifiable, high-certainty, immediate feedback)
2. **Generative spatial reasoning** (unverifiable, uncertain, deferred feedback)

The binary constraints win because they are computationally cheaper to verify and carry clearer reward signals. Every CSS property can be checked against "border-radius: 0" instantly. No CSS property can be checked against "does this serve the content topology?" without a complex reasoning chain.

**The skill's structure amplifies this competition.** The Design System Physics section (16 binary rules) appears at lines 96-112, before the metacognitive framework. The wave prescriptions load binary constraints (soul checks, guardrail checks, physics checks) alongside generative prescriptions (spatial reasoning, reciprocal learning). The builder processes both in the same context window, and binary constraints consume disproportionate processing resources because they are easier to act on.

**Structural redesign options:**

**Option A: Temporal separation.** Generative work happens first (Waves 0-3), with binary constraints checked only at wave boundaries by the orchestrator (not the builder). Binary-heavy verification happens later (Waves 5-8). The builder's Waves 0-3 prompt does NOT include the Design System Physics section — it includes only the content reading protocol and spatial archetypes. Physics compliance is checked by a separate verification pass.

This is essentially what the builder did naturally (creative Waves 0-1, mechanical Waves 4-8) — but the skill could formalize it by removing binary constraints from the builder's attention during generative phases.

**Option B: Role separation.** Two agents: a Builder who receives only generative instructions (content reading, spatial archetypes, cognitive moves) and a Verifier who receives only binary constraints (physics, guardrails, criteria). The Builder builds. The Verifier checks and flags violations. The Builder fixes violations and returns to generative work. Neither agent has the other's instructions in context.

This is the pipeline's existing builder/auditor split, but applied within the /falls-in-love context. It preserves the single-content-engagement model while preventing constraint/generative competition.

**Option C: Constraint as vocabulary.** Instead of loading binary constraints as rules to check, present them as creative vocabulary. "The 4px base unit is your rhythmic grid. The 4/3/1px border hierarchy encodes structural/accent/micro meaning. The color palette is your material palette." The builder already demonstrated this in Wave 1 — it internalized tokens as vocabulary, not constraints. The skill could reinforce this framing and defer the "audit mode" checking to later waves.

**Recommendation: Option A (temporal separation) combined with Option C (vocabulary framing).** Load physics as vocabulary in early waves. Check compliance at wave boundaries via orchestrator. This preserves the generative state while ensuring constraints are eventually enforced.

---

### 16.9 The Monolithic Dump Problem: Why 1190 Lines Cannot Be a Single Document

The skill is delivered as a single 1190-line markdown file. This delivery format has structural consequences:

**Problem 1: Front-loading bias.** The skill's most critical content — the cognitive state, the two questions, the spatial archetypes — is at lines 59-428. The most operationally important content — wave-specific prescriptions, rotation schedules, engagement minimums — is at lines 507-936. By the time the builder reaches the operational content, the cognitive state content has already established the builder's mental model. The operational content must now override or extend that mental model — and LLMs are poor at revising already-formed plans based on later input.

**Problem 2: Cross-referencing decay.** The skill cross-references itself extensively: "See the loss-detection table above," "See the universal protocol in the Primacy Rotation section," "The 5 layers at Wave 1 depth." Each cross-reference requires the LLM to maintain a pointer to a previous section while processing the current section. Over 1190 lines, cross-reference resolution degrades. The builder clearly resolved some cross-references (it used the 4-step content reading protocol) and failed to resolve others (it never connected the per-wave L1-L5 questions to the general 5-layer framework).

**Problem 3: The instruction/philosophy ratio.** The skill mixes three kinds of content:
1. **Philosophy** — why the skill works, what cognitive state it targets, what quality it aims for (~400 lines)
2. **Protocol** — what to do at each wave, in what order, with what inputs (~500 lines)
3. **Diagnostics** — how to detect problems, what staleness looks like, when to stop (~290 lines)

These three categories serve different purposes at different times. The philosophy is most valuable at build start (setting the generative stance). The protocol is most valuable wave-by-wave (operational instructions). The diagnostics are most valuable during building (real-time self-correction). Delivering all three simultaneously means all three compete for attention, and the philosophy wins at build start while the protocol and diagnostics are compressed.

**Structural redesign: The 3-document architecture.**

1. **STANCE.md (~150 lines):** The cognitive state, the two questions, the spatial archetypes, the content reading protocol, the 7 cognitive moves. Delivered at build start. Read once. Establishes the generative frame.

2. **WAVE-N.md (~60-80 lines each, 9 files):** The specific protocol for each wave. Delivered by the orchestrator at wave start. Contains: prescribed inputs, rotation schedule, per-pass cognitive stances, wave-specific L1-L5 questions, engagement minimums, exhaustion conditions. The builder sees only the current wave's instructions.

3. **DIAGNOSTICS.md (~100 lines):** Staleness detectors, false convergence signals, swap test protocol, definition journal format. Delivered as a per-pass preamble (the orchestrator selects the relevant diagnostic and inserts it at the start of each pass).

Total lines: ~150 + 9*70 + 100 = ~880 lines — 26% shorter than the current skill. But crucially, the builder never sees more than ~230 lines at once (150 + 80 for the current wave). This is within the effective instruction window identified in Section 16.1.

---

### 16.10 What the Skill Got Right

This analysis has focused on architectural failures. But the skill produced a Pipeline+ page with genuine spatial inventions. The architecture has strengths that should be preserved:

1. **The content reading protocol works.** Wave 0's 4-lens reading (comprehension, spatial listening, structural anatomy, hypothesis formation) was the most faithfully executed part of the skill and produced the build's strongest work. The loss detection table, the velocity mapping, the topology-about-topology insight — all emerged from this protocol. It works because it is procedural, sequenced, and produces tangible artifacts (the loss table, the hypotheses).

2. **The 7 cognitive moves are actionable.** 5 of 7 were used. They provide concrete starting points for spatial reasoning. They work because they are TOOLS, not STANCES — "apply loss detection to this content" is an action, not a way of being.

3. **The 5-layer metacognitive framework produced results when used.** The 3 formal L1-L5 assessments all produced actionable findings. Pass 4.0's L5 generated the network map. The framework works — the failure is in self-scheduling its use, not in the framework itself.

4. **The falsifiable criteria provide clear targets.** 7/10 met. The criteria work because they are binary and measurable. The 3 failures (named grid areas, asymmetric grids, transitions) represent genuine spatial gaps.

5. **The anti-patterns prevented known failure modes.** The builder did not build a vertical skeleton first. It did not "deploy mechanisms" mechanically. These work because they are binary prohibitions — the same category as design system physics.

6. **The single-agent model preserves coherence.** The topology color system's 58 instances across 10 scales demonstrate coherence that a multi-agent pipeline would struggle to achieve. The single-agent model should be preserved.

---

### 16.11 Synthesis: The Architecture's Core Failure Mode

The skill was designed as a **monolithic self-regulation document for a single agent.** It assumes the agent will:
- Read 1190 lines and internalize all prescriptions equally
- Self-schedule metacognitive checks at defined intervals
- Self-enforce rotation orders against the batch-read instinct
- Self-interrupt building when staleness is detected
- Self-verify exhaustion conditions before wave transitions
- Sustain a generative cognitive state while simultaneously enforcing binary constraints

Every one of these assumptions is wrong for LLMs. The audit proves this quantitatively: 31.5% executed, 20.3% never saw, 0% rotation compliance, ~2% metacognitive framework compliance.

**The fundamental error is treating the skill as a DOCUMENT the agent reads, rather than an ENVIRONMENT the agent operates in.**

A document relies on the reader's self-regulation. An environment imposes structure externally. The builder demonstrated that it can do excellent creative work (Wave 0-1) and excellent binary compliance (design system physics). What it cannot do is self-regulate the transition between creative and compliant modes, self-schedule metacognitive checks, or self-enforce process protocols against its natural instincts.

**The refactored architecture should convert self-regulation into environmental structure:**

| Current (Self-Regulation) | Proposed (Environmental) |
|---|---|
| 1190-line monolithic skill document | 3-document architecture (stance + per-wave + diagnostics) |
| Agent self-enforces rotation | Orchestrator delivers primacy file per pass |
| Agent self-schedules metacognitive checks | Orchestrator injects diagnostic prompts every N passes |
| Agent self-verifies exhaustion conditions | Orchestrator gates wave transitions on documented conditions |
| Agent manages constraint/generative balance | Temporal separation: generative phases have no binary constraints in context |
| Agent limits build size | Orchestrator gates on per-pass line limits |
| Agent tracks pass count and wave progress | Orchestrator manages wave/pass state externally |
| Agent monitors research coverage | Orchestrator tracks dimension coverage and flags gaps |

The builder agent's job simplifies to: **Read the content. Read this wave's instructions. Build. Look. Refine. Write in the notebook.** Everything else — scheduling, coverage tracking, metacognitive prompting, constraint verification, wave management — is externalized to the orchestrator.

This is not a reduction in the skill's ambition. It is a recognition that the skill's ambition requires an infrastructure that a single self-regulating agent cannot provide. The creative depth the skill envisions is achievable — but only if the agent's cognitive resources are freed from self-management overhead and directed entirely toward the creative work.

---

### 16.12 Summary Table: Prescription Categories and Recommended Delivery

| Category | Current Delivery | Compliance | Recommended Delivery | Expected Compliance |
|---|---|---|---|---|
| Binary constraints (physics, criteria) | In skill doc | ~90% | Same (in STANCE.md) | ~90% |
| Content reading protocol | In skill doc | ~62% | Same (in STANCE.md) | ~70% |
| Spatial archetypes and cognitive moves | In skill doc | ~50% | Same (in STANCE.md) | ~55% |
| Wave-specific protocols | In skill doc (deep) | ~25% | Per-wave delivery (WAVE-N.md) | ~60% |
| Rotation schedules | In skill doc (deep) | 0% | Orchestrator-enforced | ~85% |
| Metacognitive checks | In skill doc (prose) | ~5% | Orchestrator-injected prompts | ~40% |
| Self-monitoring (staleness, convergence) | In skill doc (prose) | ~2% | Orchestrator-injected diagnostics | ~30% |
| Exhaustion/transition conditions | In skill doc (deep) | ~7% | Orchestrator gates | ~70% |
| Definition journal | In skill doc | 5.5% | Orchestrator-gated at wave boundaries | ~60% |
| Build size limits | Not enforced | N/A | Orchestrator gates | ~80% |

**The pattern:** Everything that can be externalized to the orchestrator should be. The builder agent should receive only generative instructions and the current wave's operational protocol. Everything that requires scheduling, tracking, enforcing, or interrupting should be an orchestrator responsibility.

**Estimated net compliance improvement:** From ~31.5% overall to ~55-65% overall, with the largest gains in rotation (0% -> ~85%), metacognitive checks (~5% -> ~40%), and wave transitions (~7% -> ~70%). Binary constraints remain high (~90%). The remaining gaps (~35-45%) represent the genuinely difficult problems: sustained generative engagement, compound spatial invention, and reciprocal learning — the capabilities that may require longer builds, multiple context windows, or LLM architectural advances to achieve reliably.
