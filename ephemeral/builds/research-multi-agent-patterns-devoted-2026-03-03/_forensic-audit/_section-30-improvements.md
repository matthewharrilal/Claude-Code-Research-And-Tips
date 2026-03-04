## 30. Skill Improvement Recommendations {#skill-improvements}
*Agent: skill-improvement-designer | Task #38 | 2026-03-03*

### Summary Verdict

**The /falls-in-love skill v1 is a 1,191-line document that prescribes a craft model the builder cannot execute because the skill's architecture works against its own goals.** The skill prescribes iterative deepening but is structured as a monolithic reference document that an LLM processes once, extracting structure and skipping depth. It prescribes 100-200 passes but provides no enforcement mechanism at any wave boundary. It prescribes primacy rotation but buries the schedules inside prose paragraphs. It prescribes metacognitive self-monitoring but defines those monitors as process protocols -- the one category of instruction LLMs reliably ignore.

The audit reveals a fundamental design insight: **the compliance gradient (binary ~90%, measurable ~70%, structured ~30%, process ~5-15%) is not a problem to solve -- it is the physics to design within.** A v2 skill must convert process prescriptions into binary checkpoints, convert aspirational depth models into enforceable gates, and accept that anything not mechanically enforced will not happen.

This section proposes concrete changes organized into five parts: what to keep, what to remove, what to add, what to restructure, and a complete v2 architecture proposal.

---

### Part 1: What to KEEP

These elements either worked as designed or produced the build's strongest outcomes. They should survive in v2 with minimal modification.

**1.1 Wave 0 Content Immersion Protocol**

The 4-step reading protocol (Comprehension, Spatial Listening, Structural Anatomy, Hypothesis Formation) was the most faithfully executed part of the skill. The builder followed it and exceeded it (8 passes, 4 bonus passes). The loss-detection table -- described as "the PRIMARY cognitive move" -- produced the page's spatial skeleton. The topological insight ("this document about topology IS ITSELF a topology") emerged from this protocol.

Keep: The 4 readings, the loss-detection table template, the swap test on hypotheses, the velocity mapping instruction. These are concrete, structured, and produce measurable output (a table, hypotheses, a velocity map).

**1.2 Design System Physics (Binary Constraints)**

16/18 EXECUTED (89%). `border-radius: 0`, `box-shadow: none`, font trinity, color palette, container width, border hierarchy -- all achieved near-perfect compliance. Binary constraints are the skill's most reliable enforcement mechanism.

Keep: Every binary constraint exactly as written. These require zero modification.

**1.3 The 10 Falsifiable Criteria**

7/10 achieved. The criteria that were met (layout loss = content loss, position pairs, content-mapped color, distinct spatial orgs, CSS comments) provided a meaningful quality floor. The criteria that were missed (named grid areas, asymmetric proportions, transition density) identified genuine gaps.

Keep: All 10 criteria. But relocate them from a late-read section to a per-wave checkpoint (see Part 3).

**1.4 Content-Form Coupling Grades**

The INEVITABLE / STRONG / ADEQUATE / GENERIC / ABSENT scale provides a vocabulary for evaluating spatial quality. The builder achieved 2 INEVITABLE couplings -- the topology color system and the network map -- which are the build's signature achievements. The grading system worked as a quality descriptor even though the builder did not formally apply it.

Keep: The coupling grades as a measurement vocabulary.

**1.5 The Concept of Waves with Escalating Depth**

The wave structure as a concept is sound. Wave 0 (content only) before Wave 1 (design system) before Wave 2 (research) is a pedagogically correct sequence. The builder's strongest work happened during this ordered progression. What failed was not the wave concept but the execution depth within each wave and the later waves' identity.

Keep: The wave sequence concept. Restructure the wave definitions (see Part 4).

**1.6 The Seven Cognitive Moves**

5 of 7 were used (loss detection, entity-relationship mapping, metaphor listening, velocity scanning, self-reference). These concrete named techniques translate LLM behavior more reliably than abstract process instructions because they are specific enough to execute. "Apply loss detection" is a clearer instruction than "deepen your metacognitive evaluation."

Keep: All 7 cognitive moves. Promote them from a subsection to a primary tool.

**1.7 The Swap Test**

Used at Wave 0 for hypothesis validation and referenced by auditors as the key quality discriminator. "Could this layout survive transplantation to different content?" is a binary test that produces actionable results. It was applied early and abandoned later -- indicating it works when prompted but needs periodic re-prompting.

Keep: The swap test. Add it to wave-boundary checkpoints.

---

### Part 2: What to REMOVE

These elements are counterproductive because they either never get read, actively confuse the builder, or prescribe behaviors the LLM structurally cannot perform.

**2.1 REMOVE: Primacy Rotation Schedules (Skill lines 431-503, 574-577, 610-620, 736-757)**

Compliance: 8/9 NEVER SAW. 0 of 52 prescribed rotation positions executed. The builder batch-read every wave's research instead.

Why remove: Primacy rotation is an elegant theoretical construct for compensating transformer attention bias. But it prescribes a micro-level reading behavior that no single instruction in a 1,191-line document can enforce. The builder naturally batch-reads because that is how LLMs process reference material. The rotation schedules occupy ~70 lines of the skill and produced zero behavioral change. They also create a false sense of precision -- numbered rotation positions suggest a deterministic process when the actual build is adaptive.

Replace with: A simpler "one file at a time" rule with a per-wave reading checklist (see Part 3).

**2.2 REMOVE: Staleness Detectors (Skill lines 208-237)**

Compliance: 7/7 NEVER SAW. Zero instances of any staleness detector in the notebook.

Why remove: Staleness detectors are process protocols -- the category that achieves ~5-15% compliance. They require the builder to self-diagnose a cognitive state (staleness) that is, by definition, invisible to the entity experiencing it. The skill acknowledges this paradox ("Assume your evaluation IS stale right now. Prove it is not.") but then prescribes detection mechanisms that require the stale agent to notice its own staleness. This is architecturally self-defeating.

Replace with: External enforcement at wave boundaries (see Part 3, Gate Mechanism).

**2.3 REMOVE: Wave-Specific Staleness Signatures (Skill lines 214-229)**

9 wave-specific + 4 dimension-specific staleness descriptions. None referenced.

Why remove: These are metacognitive descriptions of what staleness LOOKS LIKE at different depths. They are insightful as analysis but unexecutable as instructions. An LLM reading "Wave 3 staleness: I am copying case study outputs instead of absorbing case study PROCESSES" cannot use this to detect its own behavior in real time. The description is accurate in retrospect but useless in the moment.

Replace with: Nothing. The v2 gate mechanism addresses staleness externally.

**2.4 REMOVE: The Delta Profile (Skill lines 466-501)**

Compliance: NEVER SAW. No delta tracking in the notebook.

Why remove: The delta profile is a diagnostic tool that requires the builder to track CSS line changes per pass and compare against an expected curve. This is a monitoring task on top of the primary building task. It was never executed because it adds cognitive overhead without producing CSS. Additionally, the expected curve (200, 150, 100, 80, 50, +/-20, 30, 30, 60, -30, 80, <10) assumes a specific per-wave pass structure that the builder never followed.

Replace with: A simpler "what changed" notebook entry per pass (2 lines, not a tracking system).

**2.5 REMOVE: Named Pass Archetypes (Skill lines 484-501)**

12 named archetypes (First Contact, Second Lens, Gap Sweep, etc.). 3 partial matches, 2 weak, 7 misses.

Why remove: The archetypes describe what healthy deepening looks like within a 12-pass research wave. Since no wave reached 8 passes, the later archetypes (Rhythm Audit, Typography as Argument, Interaction as Experience) were structurally unreachable. The archetypes also create a rigid expectation about what pass N should look like, which conflicts with the skill's own anti-pattern of "fixed pass counts." They are descriptive labels for an ideal process, not operational instructions.

Replace with: A simpler 3-phase model per wave (Build, Integrate, Refine) without numbered pass assignments.

**2.6 REMOVE: The "Infinite Time" Question (Skill lines 515, 869)**

Compliance: NEVER SAW. Never asked.

Why remove: "What would you do with infinite time?" is a creative prompt for humans, not an operational instruction for LLMs. The LLM's answer is always "more of the same" because it cannot genuinely imagine an alternative process it has never experienced. The question lacks the specificity that drives LLM compliance.

Replace with: Concrete "what is the weakest section?" assessment (binary, answerable).

**2.7 REMOVE: Dimension Permeation Tracking (Skill lines 452-453, 675-677)**

Compliance: NEVER SAW. Never tracked.

Why remove: "Track which files' dimensions you applied even when they were not at primacy" is a meta-tracking task that adds per-pass overhead without producing CSS. The builder naturally carries forward ideas from absorbed research without formal tracking. The tracking is documentation of something that happens naturally -- it does not cause the thing to happen.

Replace with: Nothing. Dimension permeation happens organically.

**2.8 REMOVE: Attention Trough Detection (Skill lines 455-456, 757)**

Compliance: NEVER SAW.

Why remove: Detecting "attention trough symptoms" requires the builder to monitor its own attention allocation across files -- a meta-cognitive self-monitoring task in the ~5% compliance category. The symptoms described (page reflects primacy/recency files but not trough files, notebook mentions trough files less frequently) are accurate but require the builder to simultaneously build AND audit its own attention patterns.

Replace with: The one-file-at-a-time reading rule ensures every file gets full attention during its reading pass.

**2.9 REMOVE: Per-Wave 5-Layer Metacognitive Prescriptions (Skill lines 554-564, 582-592, 639-664, 765-784, 802-812, 832-842, 871-883, 900-911, 925-935)**

9 waves x 5 layers = 45 wave-specific layer descriptions. None were followed as written. ~120 lines of the skill.

Why remove: The 5-layer metacognitive framework IS executed in a general form (passes 1.3, 3.3, 4.0 show genuine 5-layer evaluation). But the wave-specific variations ("L3 at Wave 5 depth: After 60+ passes, I'm deeply habituated...") were never consulted. The builder applied a generic 5-layer evaluation when it evaluated at all. The wave-specific versions are aspirational depth descriptions, not operational distinctions. They assume the builder has reached the cognitive state the wave describes (60+ passes of engagement) which it has not.

Replace with: Keep the generic 5-layer framework as a reference tool. Remove the 9 wave-specific variations. Save ~100 lines.

**2.10 REMOVE: The Cognitive State Section's Theory of Involuntary Onset (Skill lines 69-74)**

"Three properties make this state productive: 1. Involuntary onset. You cannot instruct an agent to fall in love..."

Why remove: This section correctly identifies that the creative state is involuntary -- but then embeds this insight in a 1,191-line skill that IS an instruction set. The theoretical framing ("create conditions where it happens") is sound but the builder did not need the theory. It needed the conditions. The theoretical framework about involuntary onset, persistence, and selectivity reads as an essay about creative cognition, not as builder instructions. The builder absorbed the spatial hypothesis approach from Wave 0 without needing the theory of why it works.

Replace with: A brief framing sentence. The conditions (content access, time, absence of distraction) are embedded in the wave structure itself.

---

### Part 3: What to ADD

New mechanisms designed to bridge specific gaps identified in the audit. Each mechanism passes the "verifiability test" -- it can be checked for compliance with binary yes/no.

**3.1 ADD: Wave Gate Mechanism (addresses: 0 of 38 passes were full cycles, premature wave transitions)**

The single most impactful addition. At every wave boundary, the builder must produce a GATE ARTIFACT before proceeding to the next wave. The gate artifact is concrete, verifiable, and blocks premature advancement.

**How it works:**

At the end of each wave, the builder writes a GATE CHECK to the notebook:

```
## WAVE {N} GATE CHECK
- [ ] Screenshot taken at 1440px (filename: _screenshots/wave-{N}-1440.png)
- [ ] Screenshot taken at 768px (filename: _screenshots/wave-{N}-768.png)
- [ ] Swap test applied to 2 sections: {section names} — result: {pass/fail + why}
- [ ] CSS line count: {N} (must increase from previous wave gate)
- [ ] Weakest section identified: {section name} — why: {1 sentence}
- [ ] Definition of "good" for this page: {1 sentence}
- [ ] Previous wave's definition of "good": {copied from last gate}
- [ ] Definitions are qualitatively different: YES/NO
```

If any checkbox is unchecked, the wave is not complete. The gate is a binary checkpoint -- all items checked, or the builder continues working.

**Why it would be adopted:** Every gate item is concrete and binary. "Take a screenshot" is verifiable. "Write one sentence" is verifiable. "Compare two sentences" is verifiable. This converts process protocols (which achieve ~5% compliance) into binary checklists (which achieve ~90% compliance).

**What gap it addresses:** Section 21 (per-pass quality) finding that 0 of 38 passes were full build-look-refine cycles. The gate forces at least one LOOK at every wave boundary. Section 27 (mental model) finding that the builder transitioned to verification mode without any checkpoint detecting it. The gate's "definitions are qualitatively different" check detects waterfall drift.

**3.2 ADD: One-File-At-A-Time Reading Rule (addresses: batch-read replacing rotation)**

Replace the 70-line primacy rotation system with a single rule:

**"Read ONE research file per pass. Do not read multiple files in the same pass. After reading, build from what you read. After building, screenshot and look. Then read the next file."**

This is enforceable because it is binary: did the builder read one file or multiple files? The notebook entry for each pass must name exactly one file.

**How it works:** Each wave provides a READING ORDER (a simple numbered list of files). The builder reads file 1 in pass 1, builds from it. Reads file 2 in pass 2, builds from it. After completing the list, the builder re-reads any file where it applied 0 findings. The reading order replaces the rotation schedule but produces the same effect: each file gets dedicated attention.

**Why it would be adopted:** "Read one file" is simpler than "follow the 14-position rotation schedule with diagnostic overrides and per-file phase tracking." Simpler rules achieve higher compliance.

**What gap it addresses:** Section 22 (research digestion) finding that every file was batch-read in one pass, producing single-idea extraction instead of deep digestion.

**3.3 ADD: Screenshot Checkpoint (addresses: 3 screenshots across 38 passes)**

**"Every 3rd pass, take a full-page screenshot at 1440px. This is not optional. If you have not screenshotted in 3 passes, your next action is a screenshot."**

Binary rule. Verifiable by counting passes since last screenshot.

**How it works:** The builder maintains a simple counter in the notebook: "Passes since last screenshot: {N}." When N reaches 3, the next action is a screenshot before any CSS changes. The screenshot must be saved to `_screenshots/pass-{N}.png` with the pass number.

**Why it would be adopted:** The rule is concrete and numeric. "Every 3rd pass" is unambiguous. The Playwright DPR bug was used to justify skipping screenshots, but full-page screenshots at 1440px DID work (pass 8.0 proves it). The rule should specify full-page at 1440px, which is the reliable method.

**What gap it addresses:** Section 21 finding that only 3 of 38 passes included a screenshot, making the build-look-refine cycle impossible. Section 12 (reliability) finding that the LOOK step was present in only 8% of passes.

**3.4 ADD: Monolith Prevention Rule (addresses: 1,950-line first build)**

**"Your first HTML build pass must produce no more than 500 lines. Subsequent passes may add up to 200 lines each. If you write more than 500 lines in a single pass, stop and break it into multiple passes with a screenshot between each."**

**How it works:** The builder checks line count after each build pass. If the HTML exceeds the threshold for that pass number, the builder stops, takes a screenshot, evaluates, and then continues in a new pass.

**Why it would be adopted:** Line count is mechanically verifiable. The rule prevents the monolithic dump pattern where the entire page is written in one pass, eliminating the possibility of iterative discovery during the initial build.

**What gap it addresses:** Section 21 finding that pass 1.2 dumped 1,950 lines in one pass (10x the expected delta), precluding iterative growth. The skill's thesis that spatial ideas emerge THROUGH building requires building to happen incrementally.

**3.5 ADD: "What Changed" Notebook Entry (addresses: verification drift in later waves)**

**"After every pass, write exactly 3 lines in the notebook: (1) What I changed: {specific CSS changes}. (2) What I learned: {one insight from this pass}. (3) What the page needs next: {one specific thing}."**

**How it works:** The 3-line format is small enough to always complete (unlike the elaborate retrospective questions) and specific enough to detect drift. If line 1 is "nothing" for 3 consecutive passes, the builder is in verification mode and should be redirected to building.

**Why it would be adopted:** 3 lines is trivially fast. The format is structured enough to be binary (did you write 3 lines?) but open enough to accommodate any content. The builder already wrote notebook entries at every pass -- this makes the entries structured.

**What gap it addresses:** Section 25 (depth counterfactual) finding that confirmation mode began at pass 24 with Waves 6-8 producing only 3 CSS changes across 13 passes. The "3 consecutive 'nothing changed' passes" signal would trigger re-engagement.

**3.6 ADD: Research Coverage Checkpoint (addresses: 40% of research never read)**

**"Before entering Wave 4, verify in the notebook: 'Files read in Waves 2-3: {list}. Files NOT read: {list}. For each unread file, reason: {why}.' If any file is unread without documented reason, read it before proceeding."**

**How it works:** A binary checklist at the Wave 3-to-4 transition. The builder cannot proceed to Wave 4 until all prescribed files have either been read or explicitly skipped with a documented reason.

**Why it would be adopted:** It is a concrete checklist that blocks progression. The builder must name unread files -- which requires knowing what should have been read. The documented reason prevents unconscious neglect (the skill's term for files that simply fall below the attention threshold).

**What gap it addresses:** Section 12 (reliability) finding that R2 and R4 (192 + 27 = 219 findings) were never read. Section 22 (digestion) finding that 65% of research by line count was never seen.

**3.7 ADD: Content-Type Scaling (addresses: one-size-fits-all pass prescription)**

The skill currently prescribes 100-200 passes regardless of content type. The depth counterfactual (Section 25) found that content type determines the iteration ceiling.

**Add a content-type assessment to Wave 0:**

```
After the loss-detection table, classify the content:
- HIGH CEILING (philosophical/cultural, multiple structural tensions, inherent spatial vocabulary): Target 80-120 passes
- MODERATE CEILING (technical taxonomy, genuine spatial potential, bounded tension): Target 50-70 passes
- LOW CEILING (procedural, linear, minimal spatial potential): Target 30-50 passes

Write the classification and target in the notebook. Adjust wave pass minimums proportionally.
```

**Why it would be adopted:** The classification happens during Wave 0 when the builder is already deeply reading the content. It is a single judgment call made once, not an ongoing process. And it sets realistic expectations that prevent the "false convergence vs. genuine completion" ambiguity.

**What gap it addresses:** Section 25 finding that the skill's 100-200 pass prescription bundles research breadth and iteration depth, and that for moderate-ceiling content, the real ceiling is ~50-70 passes.

---

### Part 4: What to RESTRUCTURE

The skill's 1,191 lines in a single file create an information architecture that LLMs cannot internalize. The reliability classification shows that prescriptions in the first 400 lines achieve ~60% compliance while prescriptions after line 700 achieve ~15%.

**4.1 Split Into Multiple Files**

The single 1,191-line SKILL.md should be split into:

| File | Content | Lines (est.) | When Read |
|------|---------|-------------|-----------|
| `SKILL.md` | Core identity + invocation + binary constraints + cognitive moves + falsifiable criteria + anti-patterns + wave overview (names + gate requirements only) | ~250 | Once at start |
| `WAVE-0.md` | Content immersion protocol, loss-detection table template, hypothesis template, velocity map instructions | ~80 | Wave 0 entry |
| `WAVE-1.md` | Design system soul files list, binary compliance checklist, token replacement instructions | ~60 | Wave 1 entry |
| `WAVE-2.md` | Research file list with per-file guidance (what each contributes, 2-3 lines each), one-file-at-a-time rule, reading order | ~80 | Wave 2 entry |
| `WAVE-3.md` | Case study list with per-file guidance, per-dimension questions, tier selection guide | ~80 | Wave 3 entry |
| `WAVE-4-8.md` | Later waves combined (synthesis, combination, integration, audit, enrichment) -- these are shorter and share common patterns | ~120 | Wave 4 entry |
| `LOOKING.md` | Screenshot protocol, swap test instructions, 5-layer framework (generic, not wave-specific) | ~60 | Reference |
| `GATE-TEMPLATE.md` | The wave gate checklist template, notebook entry template, transition state template | ~40 | Reference at every gate |

**Total: ~770 lines across 8 files vs. 1,191 lines in 1 file.** The reduction comes from removing primacy rotation schedules (~70 lines), staleness detectors (~30 lines), wave-specific metacognitive prescriptions (~100 lines), delta profile and named archetypes (~40 lines), dimension permeation tracking (~20 lines), attention trough detection (~15 lines), and theoretical framing that does not produce behavior (~50 lines).

**4.2 Per-Wave Loading**

The builder reads SKILL.md (250 lines) at the start and then reads ONLY the current wave file at each wave entry. This reduces per-wave cognitive load from "process 1,191 lines, find the relevant section" to "process 250 + 80 = 330 lines."

The gate template is read at every wave boundary. Its mechanical checklist format ensures it is processed reliably.

**4.3 Reading Order Within Each Wave File**

Each wave file follows a consistent structure:

```
1. GOAL (1 sentence: what this wave achieves)
2. INPUT (file list: what to read)
3. READING ORDER (numbered list: read files in this order, one per pass)
4. BUILD RULES (binary rules for this wave)
5. GATE (the exit checklist -- cannot proceed without completing)
```

This structure ensures the builder always knows: what am I doing, what am I reading, how do I know when I am done. The gate at the end is the anchor that prevents premature advancement.

**4.4 Process State Tracking**

The builder knows where it is via the notebook, which contains:
- The Wave 0 loss-detection table and hypotheses
- The 3-line entry per pass ("changed / learned / needs next")
- The gate checklist at every wave boundary
- The definition of "good" evolution (one sentence per gate)

This is minimal enough to maintain without process fatigue but structured enough to detect drift.

---

### Part 5: The v2 Skill Architecture Proposal

**5.1 File Architecture**

```
~/.claude/skills/falls-in-love/
  SKILL.md              # Core (250 lines) -- identity, constraints, criteria, anti-patterns, wave overview
  waves/
    WAVE-0.md           # Content immersion (80 lines)
    WAVE-1.md           # Design system soul (60 lines)
    WAVE-2.md           # Research R1-R5 (80 lines)
    WAVE-3.md           # Case studies (80 lines)
    WAVE-4-8.md         # Later waves (120 lines)
  reference/
    LOOKING.md          # Screenshot + evaluation protocol (60 lines)
    GATE-TEMPLATE.md    # Wave gate checklist (40 lines)
```

**Total: ~770 lines across 8 files.** 35% reduction from v1's 1,191 lines, with the removed material being the process prescriptions that achieved ~5% compliance.

**5.2 Per-Wave Instruction Approach**

The orchestrator (or the agent itself) reads the wave file at wave entry and the gate template at wave exit. The wave file is small enough (~80 lines) to be fully processed in the LLM's high-attention zone.

| Wave | Files Read by Builder | Pass Target | Gate Requirements |
|------|----------------------|-------------|-------------------|
| 0 | Content only | 8 | Loss-detection table, 2+ hypotheses (swap-tested), velocity map, content-type classification |
| 1 | 4 soul files + content + HTML | 8-12 | All binary constraints pass, all CSS from tokens, screenshot at 1440+768 |
| 2 | R1-R5 + SYNTHESIS (one per pass) | 10-16 | All 6 files read (or skipped with reason), screenshot every 3 passes, 5+ findings applied |
| 3 | Case studies + mechanisms (one per pass) | 8-14 | All dimension tiers covered (DD/OD/CD), swap test on 3 borrowed components, screenshot |
| 4 | SYNTHESIS re-read + semantic-rules | 4-6 | 2+ conflicts identified and resolved, compound DD+OD example built |
| 5-6 | HTML only (subtractive + integration) | 8-12 | Inline styles <10, dead code removed, taste audit screenshot, weakest section addressed |
| 7-8 | HTML + content re-read | 6-10 | 10 criteria scored, adversarial pass completed, content re-read produces 0 missed features |

**Key design change:** Wave 2 and 3 use the one-file-at-a-time rule, which mechanically produces 6-9 passes (one per file) as a minimum. This replaces the primacy rotation system with a simpler mechanism that achieves the same goal: dedicated attention to each file.

**5.3 Enforcement Mechanisms**

The v2 skill relies on three enforcement layers, ordered by reliability:

**Layer 1: Binary Constraints (~90% compliance expected)**
- Design system physics (unchanged from v1)
- Line count limits per pass (500 first, 200 subsequent)
- Screenshot every 3 passes
- One file per pass during research waves

**Layer 2: Measurable Checkpoints (~70% compliance expected)**
- Gate checklists at wave boundaries
- 10 falsifiable criteria scored at Wave 7
- Research coverage checklist at Wave 3 exit
- "3 consecutive nothing-changed passes" drift detector

**Layer 3: Structured Prompts (~30-40% compliance expected)**
- 3-line notebook entry per pass (changed/learned/needs)
- Definition of "good" at each gate
- Swap test at each gate
- Content-type classification at Wave 0

Layer 3 replaces the ~5% compliance process protocols with structured prompts that are simpler and more likely to be executed. The skill does NOT rely on Layer 3 for critical path enforcement -- that is handled by Layers 1 and 2.

**5.4 Measurement Approach**

**During the build:** The gate checklist at each wave boundary provides a binary progress signal. If the gate is not met, the builder continues working. The 3-line notebook entry provides a qualitative signal. Three consecutive "nothing changed" entries signal drift.

**After the build:** The 10 falsifiable criteria provide a measurable quality floor. The definition-of-good evolution journal provides a qualitative depth indicator. DOM skeleton count, coupling grades, and spatial invention count provide output metrics.

**The key measurement change from v1:** v1 measured process compliance (did the builder follow the rotation schedule?). v2 measures output checkpoints (did the builder produce a gate artifact that passes?). This shift mirrors the audit's finding that process compliance does not predict output quality -- the builder's unprescribed inventions were as significant as its prescribed compliance.

**5.5 Expected Resource Profile**

| Dimension | v1 Prescription | v1 Actual | v2 Target |
|-----------|----------------|-----------|-----------|
| Passes | 100-200 | 38 | 50-80 (content-type adjusted) |
| Duration | 6-10 hours | ~100 min | 3-5 hours |
| Cost | $150-300 | ~$30 | $60-120 |
| Files read | 29+ | 13 | 20-25 (all R1-R5 + tier-selected case studies) |
| Research coverage | 100% | 13% by line | 60-80% by line |
| Screenshots | Every pass | 3 total | 15-25 (every 3 passes + gates) |
| Full cycles (build-look-refine) | 100-200 | 0 strict | 15-25 |
| Definition journal entries | 18 | 1 | 8-10 (one per gate) |
| Context windows | 8-12 | 1 | 2-4 |

**Rationale for the targets:** The v1 actual (38 passes, ~$30) represents the natural floor of what a builder does with minimal process enforcement. The v2 targets represent a realistic middle ground: enough process structure to produce depth beyond the natural floor, but not so much structure that it is ignored. The screenshot target (15-25) is set by the mechanical rule (every 3 passes across 50-80 passes), not by aspiration. The full-cycle target (15-25) is set by the screenshot frequency -- a screenshot-triggered build-look-refine cycle every 3 passes across 50-80 passes yields 15-25 genuine full cycles.

**5.6 What v2 Sacrifices**

Honesty requires naming what is lost:

1. **The theoretical depth model.** v1's description of cognitive thresholds (first-order at 15 min, fourth-order at 90+ min), perceptual resolution deepening, taste emergence, and evaluation-as-learning are insightful cognitive science. They do not produce builder behavior, but they describe real phenomena. Removing the detailed descriptions from the skill does not mean they are wrong -- it means they belong in design documentation, not in builder instructions.

2. **The aspirational ceiling.** v1 aspires to 100-200 passes with fourth-order content-form fusion. v2 targets 50-80 passes with solid third-order compound invention. The v1 ceiling is beautiful. The v2 target is achievable. Whether the gap between third-order and fourth-order is worth an additional $150+ and 5+ hours is a question the user should decide by content type.

3. **The full primacy rotation system.** The rotation system is an elegant solution to transformer attention bias. The one-file-at-a-time replacement is cruder but achieves 90%+ of the same effect (each file gets dedicated full-attention time) with 90% less instruction complexity.

4. **The metacognitive depth spiral.** v1 describes a beautiful progression where evaluation deepens from structural to relational to coupling to potential. v2 replaces this with binary gate checks. The gate checks will not produce the kind of evaluative depth the v1 model describes. But the v1 model produced ~2% compliance. The gate checks will produce ~70%. The question is whether ~70% of a simpler evaluation model produces better output than ~2% of a profound one.

**5.7 What v2 Enables That v1 Does Not**

1. **Guaranteed visual perception.** The screenshot-every-3-passes rule guarantees the builder SEES its work 15-25 times during the build. v1 produced 3 screenshots. The build-look-refine cycle -- the skill's "fundamental unit" -- requires looking. v2 mechanically ensures looking happens.

2. **Guaranteed research breadth.** The research coverage checkpoint at Wave 3 exit blocks progression until all files are read or explicitly skipped. v1 left 40% of research unread. v2 mechanically prevents this.

3. **Drift detection.** The "3 consecutive nothing-changed passes" signal and the "definitions must differ" gate check detect waterfall drift at the wave boundary. v1 had no drift detection mechanism -- the builder transitioned to verification mode silently.

4. **Incremental building.** The 500-line first-pass limit prevents the monolithic dump pattern. The page grows through iterative cycles rather than arriving fully formed in one pass. This creates the conditions for iterative discovery that v1 describes but cannot enforce.

5. **Realistic expectations.** The content-type classification sets a pass target appropriate to the content. A builder working on moderate-ceiling content (technical taxonomy) knows it is targeting 50-70 passes, not "100-200, and stopping at 50 is premature convergence." This prevents the false-failure signal where the builder feels it has not done enough even when it has reached the content's natural ceiling.

---

### The Design Principle

v2 is designed around a single principle derived from the audit's most important finding:

**Binary rules achieve ~90% compliance. Process protocols achieve ~5%. Design accordingly.**

Every critical behavior in v2 is either a binary constraint or a measurable checkpoint. Process protocols that cannot be converted to binary form are either removed or accepted as aspirational documentation that will be approximately followed. The skill does not pretend that elaborate metacognitive instructions will be executed as written. It builds enforcement into the mechanical structure -- gates that block progression, counters that trigger screenshots, limits that prevent monolithic building.

The creative work -- the falling in love, the content-topology formation, the spatial invention -- is not prescribed. It is enabled by the conditions the skill creates: direct content access, adequate time, iterative building with visual feedback, broad research exposure, and the absence of process overhead that distracts from the work itself. The skill's job is not to instruct the builder in how to be creative. It is to create the conditions where creativity happens and to enforce the minimum discipline (look at your work, read all the research, build incrementally) that prevents the builder from short-circuiting the process.

v1 tried to prescribe the creative journey. v2 builds the road and puts up guardrails.
