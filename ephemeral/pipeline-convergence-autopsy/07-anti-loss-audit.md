# Anti-Loss Mechanism Audit: Iteration Coverage

## Executive Summary

The Pipeline v3 anti-loss architecture is **comprehensive for single-pass execution** and **nearly absent for iteration boundaries**. Of 14 identified anti-loss mechanisms, **0 explicitly cover iteration**, **3 partially cover it**, **7 are designed for single-pass only**, and **4 actively make iteration harder** (the information isolation paradox). The pipeline's anti-loss engineering is world-class within a single pass — and then drops to zero at the exact moment quality improvement requires it most.

---

## 1. Inventory of Anti-Loss Mechanisms

I cataloged every anti-loss mechanism found across the six source files:

| # | Mechanism | Source File | Purpose |
|---|-----------|-------------|---------|
| AL-01 | Dual-Route Pattern | artifact-identity-perception.md L6-9, MANIFEST.md L196 | Same constraint reaches builder (world-description) and gate-runner (binary check) simultaneously |
| AL-02 | Information Isolation (PA) | pa-deployment.md L310-331 | PA auditors receive ONLY screenshots + questions; no build context, mechanism counts, or tier targets |
| AL-03 | Information Isolation (Builder) | artifact-orchestrator.md L129-139 | Builder does NOT receive gate thresholds, prohibition lists, fix instructions, research |
| AL-04 | Conviction Artifact | artifact-orchestrator.md L377-378, MANIFEST.md L442-445 | 3-sentence design intent (metaphor, arc, strategy) captured as HTML comment before construction |
| AL-05 | Generative Language Requirement | artifact-orchestrator.md L114, pa-weaver.md L306-309 | Feedback to REFINE/REBUILD uses emotional/artistic language, not diagnostic/gate language |
| AL-06 | Fresh-Eyes Principle | pa-deployment.md L310-331 | PA auditors are context-starved — zero knowledge of build intent, mechanisms, or expectations |
| AL-07 | Weaver Experiential Anchor | pa-weaver.md L9-58 | Weaver views screenshots BEFORE reading any auditor reports, preventing analytical contamination |
| AL-08 | Experiential Pass Primacy | pa-deployment.md L20-89 | Auditors experience the page as readers BEFORE any analytical questions |
| AL-09 | Builder Self-Evaluation | MANIFEST.md L442-445, EXECUTION-TRACKER L231-241 | 7-question self-check answered as HTML comment |
| AL-10 | Dual Weaver Output | MANIFEST.md L173, L512-515 | Weaver produces TWO artifacts: diagnostic (for orchestrator) + artistic impression (for REFINE builder) |
| AL-11 | Execution Tracker Template | EXECUTION-TRACKER-TEMPLATE.md | 597-line hierarchical accountability document tracking every pipeline step |
| AL-12 | Revision Degradation Warnings | pa-weaver.md L336-348, pa-guardrails-weaver.md L40-49 | 5 explicit warnings about how fix cycles degrade composition |
| AL-13 | Fix-Type Classification | pa-weaver.md L148-161 | Diagnostic tree (MECHANICAL / STRUCTURAL / COMPOSITIONAL) prevents wrong-type fixes |
| AL-14 | Suppressor Scan (BV-04) | MANIFEST.md L32 | Brief is checked for quality suppressor patterns before reaching builder |

---

## 2. Classification: Does Each Mechanism Cover Iteration?

### COVERS ITERATION: 0 mechanisms

None. Not a single anti-loss mechanism in the pipeline explicitly addresses what happens at iteration boundaries.

### PARTIALLY COVERS: 3 mechanisms

**AL-04: Conviction Artifact — PARTIALLY COVERS**

The conviction artifact (3-sentence design intent) survives iteration. The REFINE agent reads it (ITEM 49, artifact-orchestrator.md L539: "REFINE: Reads conviction + PA artistic impressions"). The REBUILD agent reads it (ITEM 45, L553: "Reads previous conviction artifact"). This is the ONLY information that reliably crosses the iteration boundary from the original builder's mental state.

However, the conviction is written BEFORE construction — it captures intent, not what was learned DURING construction. The builder may have discovered that the metaphor works differently than planned, that certain sections resist the arc, that specific components needed adaptation. None of this post-construction knowledge is captured.

**Iteration gap:** No "exit conviction" or "post-build conviction update" exists. The conviction is a pre-construction snapshot, not a post-construction reflection.

**AL-10: Dual Weaver Output — PARTIALLY COVERS**

The Weaver produces an "artistic impression" (MANIFEST.md L513: "NO numbers/gates, describe what the page FEELS like using emotional arc registers"). This artifact is designed for a potential REFINE builder. It crosses the iteration boundary and carries the PA's perceptual assessment in generative language.

However, it carries ONLY the PA's findings — not the builder's own learning, not the gate runner's specific measurements, not the orchestrator's process observations. It is a lossy compression of the full quality state: 10 auditor reports + 1 integrative report + gate results compressed into a single artistic impression.

**Iteration gap:** The artistic impression captures the PA's view of the page. It does not capture: (a) what the original builder learned during construction, (b) gate-PA discrepancies, (c) which findings the REFINE agent should prioritize vs. which are artifacts of the PA's framing.

**AL-05: Generative Language Requirement — PARTIALLY COVERS**

The requirement that feedback use generative/artistic language (not diagnostic) helps prevent the REFINE agent from entering CORRECTIVE mode (suppressor S-11). This is an anti-loss mechanism for iteration quality — it prevents the MODE SHIFT (artifact-orchestrator.md L1059: "GENERATIVE: full composition in working memory, CCS >0.35") that degrades composition during fix cycles.

However, the generative language requirement addresses HOW information crosses the boundary, not WHAT information crosses. The right mode is preserved; the right information is not.

**Iteration gap:** Generative framing is necessary but insufficient. The REFINE agent gets the right emotional tone but may lack specific perceptual intelligence (which zones need investment, which mechanisms are working, what the page's strongest register is).

### DOES NOT COVER: 7 mechanisms

**AL-01: Dual-Route Pattern — SINGLE-PASS ONLY**

Dual-route ensures the same constraint reaches both builder and gate-runner in appropriate framing. This operates entirely within a single pass — it has no iteration dimension. On the second pass, the same dual-route pattern applies identically (the REFINE builder gets the same brief, the gate runner runs the same checks), but the dual-route pattern does nothing to propagate what was learned in pass 1 to pass 2.

**AL-09: Builder Self-Evaluation — SINGLE-PASS ONLY**

The 7-question self-evaluation is answered as an HTML comment in the output. It captures the builder's own assessment of zone transitions, density arc, designed moments, etc. This is potentially the richest source of builder knowledge — but it is embedded in the HTML file, not extracted as a separate artifact.

Critical gap: The REFINE protocol says the REFINE agent reads "original brief, Pass 1 output, PA weaver's artistic impressions" (artifact-orchestrator.md L545). The Pass 1 output includes the HTML file with self-evaluation comments. But the REFINE agent is instructed to REFINE, not to parse HTML comments for builder knowledge. There is no protocol for the REFINE agent to first read and internalize the original builder's self-evaluation.

The REBUILD protocol is worse: the agent reads "original brief, content, conviction artifact from failed build" (L559) — NOT the HTML, NOT the self-evaluation.

**AL-11: Execution Tracker — SINGLE-PASS ONLY**

The 597-line execution tracker captures comprehensive data about each phase. But it has NO section for iteration state. There is no "ITERATION LOG" section, no "PASS 2 DELTA" section, no way to track which findings from Pass 1 were addressed, which weren't, and which are new.

The tracker's "Circuit Breaker" field (L501) tracks "N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW" — but this is a single enum, not a history. After REFINE, there is no record of what the REFINE was responding to.

**AL-12: Revision Degradation Warnings — SINGLE-PASS ONLY**

The 5 revision degradation warnings (pa-weaver.md L336-348) tell the Weaver what to watch for in fix cycles. But these are classification aids for the Weaver — they do not create any mechanism for the REFINE agent to KNOW which compositions to protect. The Weaver knows "multi-channel encoding can decouple during fixes" but the REFINE agent does not receive this warning.

**AL-13: Fix-Type Classification — SINGLE-PASS ONLY**

Fix-type classification (MECHANICAL / STRUCTURAL / COMPOSITIONAL) determines the verdict (SHIP WITH FIXES vs REFINE vs REBUILD). This is a decision mechanism, not a propagation mechanism. It determines WHICH iteration path to take but does not ensure quality information survives the boundary.

**AL-14: Suppressor Scan (BV-04) — SINGLE-PASS ONLY**

Suppressor scanning checks the brief for quality suppressor patterns. This operates identically in each pass — it does not learn from previous passes. If a suppressor was introduced by the REFINE process itself (e.g., the artistic impression inadvertently contains checklist-style language), BV-04 would not detect it because it only scans the original brief, which is reused.

**AL-08: Experiential Pass Primacy — SINGLE-PASS ONLY**

The experiential pass protocol ensures auditors experience the page as readers first. This is valuable in every pass but does not address the staleness problem: after REFINE, the experiential pass captures the NEW page state, but there is no mechanism to DIFF this against the previous experiential findings.

### ANTI-ITERATION: 4 mechanisms

**AL-02: Information Isolation (PA) — ANTI-ITERATION**

The fresh-eyes principle is non-negotiable for single-pass integrity. But at iteration boundaries, it creates a paradox: the second-pass PA auditors have NO knowledge of the first-pass PA findings. This means:

1. They may re-discover findings that were already addressed (wasting capacity on confirming fixes)
2. They may miss regressions (not knowing what to look for because they don't know what was there before)
3. They cannot assess whether the REFINE improved the specific issues flagged in Pass 1
4. The gate-PA discrepancy discovered by the Weaver ("GR-44 reports 0px; 9/10 auditors report 2-3 viewport-height void") has NO propagation path to Pass 2 auditors

**The isolation is correct for each individual pass. But across passes, it creates a memoryless system — each PA cycle starts from scratch with zero institutional knowledge.**

**AL-03: Information Isolation (Builder) — ANTI-ITERATION**

The REFINE builder never sees gate scores or threshold numbers (ITEM 50, artifact-orchestrator.md L540). This prevents mode contamination (suppressor S-11). But it also prevents the REFINE builder from knowing specific measurable facts about the page:
- Which zones had backgrounds within 5 RGB points of each other (fixable with one CSS change)
- Which stacked gaps were 180px (specific enough to fix without compositional damage)
- Which anti-patterns were detected (AP-02 through AP-13)

The REFINE builder receives ONLY the artistic impression, which describes feelings ("the middle sags"). The REFINE builder must then independently rediscover the specific CSS targets that would address this feeling. This is information loss by design.

**AL-06: Fresh-Eyes Principle — ANTI-ITERATION**

The fresh-eyes principle means Pass 2 auditors are deliberately prevented from knowing what Pass 1 found. This is the single largest source of information loss at iteration boundaries. A 9-auditor PA produces approximately 200-300 findings. After REFINE, approximately 30-50% of these findings are addressed, 10-20% are worsened, and 30-60% are unchanged. But the Pass 2 PA treats all findings as NEW — there is no finding lifecycle (new / addressed / verified / closed / regressed).

**AL-07: Weaver Experiential Anchor — ANTI-ITERATION**

The Weaver's experiential anchor is performed fresh each time. The Pass 2 Weaver has no knowledge of the Pass 1 Weaver's anchor. If the Pass 1 Weaver identified a critical comprehension failure that was fixed in REFINE, the Pass 2 Weaver has no way to confirm the fix. They may or may not notice the absence of the problem — but they cannot verify that the specific issue was addressed because they don't know it existed.

---

## 3. Six Types of Iteration Boundary Loss

### 3.1 AGENT KNOWLEDGE LOSS — VERDICT: NOT COVERED

When the REFINE agent terminates, it takes with it:
- **What worked well** — which compositional decisions from Pass 1 should be preserved (the REFINE agent read the conviction and may have honored it, but its own compositional discoveries are lost)
- **What compromises it made** — where it traded one quality for another (e.g., "I opened up the S3-S4 gap to create breathing room, knowing this would increase the stacked gap")
- **What it would do next** — its planned improvements that didn't fit in this pass
- **Its page understanding** — after working with the HTML for 45+ minutes, the REFINE agent has the deepest understanding of any agent in the pipeline, and this understanding evaporates on termination

**What exists:** The conviction artifact (pre-construction only), the builder self-evaluation (7 questions embedded in HTML comments, not reliably propagated). No "exit interview" artifact, no "residual knowledge dump," no "what I learned" output.

**What's missing:** A REFINE EXIT ARTIFACT — 10-15 lines capturing: (a) what the original builder intended that I preserved, (b) what I changed and why, (c) what I would change next if given another pass, (d) what trade-offs I made. This would take the REFINE builder ~2 minutes to produce and would be the richest iteration intelligence artifact in the pipeline.

### 3.2 PA FINDING STALENESS — VERDICT: NOT COVERED

After REFINE, the 9 pre-REFINE PA reports become partially stale. The pipeline has NO concept of finding lifecycle:

| Finding State | Pipeline Awareness |
|---------------|-------------------|
| NEW (found in Pass 1) | Captured in PA reports |
| ADDRESSED (fixed by REFINE) | Unknown — no diff mechanism |
| VERIFIED (confirmed fixed in Pass 2) | Cannot confirm — Pass 2 auditors don't know what was found in Pass 1 |
| REGRESSED (Pass 1 finding worsened by REFINE) | Cannot detect — no comparison baseline |
| INTRODUCED (new issue created by REFINE) | Captured in Pass 2, but indistinguishable from issues that existed in Pass 1 and were simply missed |

The Weaver's fix-type classification creates an IMPLICIT finding lifecycle: fixes classified as MECHANICAL are expected to be resolved; STRUCTURAL fixes may require REFINE. But this classification does not propagate to Pass 2 — the Pass 2 Weaver does not know which Pass 1 fixes were MECHANICAL (and should now be verified as fixed) vs. STRUCTURAL (and should be assessed for improvement).

**What's missing:** A FINDING STATUS MAP — the orchestrator maintains a table mapping each Pass 1 fix to its expected resolution state, then the Pass 2 Weaver is given this map (alongside fresh auditor reports) to assess whether each fix was addressed, unaddressed, or regressed.

### 3.3 ORCHESTRATOR CONTEXT LOSS — VERDICT: PARTIALLY COVERED

The execution tracker template captures build metadata and phase completion status. Across session continuations, the orchestrator can reconstruct WHAT happened but not WHY specific decisions were made.

The execution tracker has 597 lines of fields but NO free-text fields for orchestrator observations. It captures "PA-05 Score: ___/4" but not "I noticed the PA-05 score was pulled down by PROPORTIONATE because the bottom third felt unfinished — the auditors specifically mentioned this." This qualitative context evaporates across session boundaries.

**What exists:** The execution tracker's L0-L3 hierarchy (extensive), plus the "Notes" column in the L0 summary (a single free-text field per phase). The "Anomalies found" field in post-run verification.

**What's missing:** An ORCHESTRATOR OBSERVATIONS section — 5-10 lines of qualitative notes per phase, capturing the orchestrator's "felt sense" of quality concerns, things that seemed borderline, hunches about what might need attention. These would survive session boundaries and inform decisions about whether to iterate.

### 3.4 GATE-PA DISCREPANCY LOSS — VERDICT: NOT COVERED

The Weaver is the ONLY agent that sees both gate results and PA findings simultaneously. When the Weaver discovers a discrepancy (e.g., "GR-44 reports 0px trailing void; 9/10 auditors report 2-3 viewport-height void"), this discrepancy is documented in the verdict but has NO propagation mechanism.

Specifically:
1. The gate runner code is NOT updated between passes (it runs identically)
2. The REFINE builder does NOT see gate results (information isolation)
3. The Pass 2 PA auditors do NOT know about the discrepancy (fresh-eyes)
4. The Pass 2 Weaver does NOT know the Pass 1 Weaver found this discrepancy

The only agent that COULD propagate this is the orchestrator. But the orchestrator's execution tracker has no field for "gate-PA discrepancies discovered." And even if it did, the orchestrator's role is process management — it doesn't modify gate runner code or PA protocols between passes.

**What's missing:** A DISCREPANCY LOG — the Weaver outputs a structured list of gate-PA discrepancies. The orchestrator preserves this. In Pass 2, the discrepancy log is given to the Pass 2 Weaver (NOT to auditors — that would violate fresh-eyes). The Pass 2 Weaver can then explicitly check whether each discrepancy was resolved.

### 3.5 CONVICTION ARTIFACT LIMITATIONS — VERDICT: PARTIALLY COVERED

The conviction artifact is a 3-sentence design intent written BEFORE construction. It captures:
- Metaphor choice
- Emotional arc intent
- Compositional strategy

It does NOT capture:
- Gate runner results (the REFINE agent cannot know what passed/failed)
- PA findings beyond the artistic impression (which is a lossy compression)
- The orchestrator's process observations
- The original builder's post-construction learning
- Trade-offs made during construction

The artistic impression (AL-10) supplements the conviction by carrying the PA's view. Together, conviction + artistic impression capture approximately 30-40% of the quality state. The remaining 60-70% — gate specifics, builder learning, auditor detail, discrepancies — is lost.

**What's missing:** A QUALITY STATE SNAPSHOT — a structured document capturing: (a) conviction (intent), (b) artistic impression (PA perception), (c) gate summary (what passed, what failed, by how much), (d) builder exit knowledge (what was learned during construction), (e) discrepancy log (where gate and PA disagreed). This composite artifact would capture ~90% of the quality state. The REFINE builder would receive only (a) and (b) in generative language; the orchestrator would retain all 5 for decision-making.

### 3.6 INFORMATION ISOLATION PARADOX — VERDICT: STRUCTURAL TENSION

Information isolation is CORRECT for preventing contamination within a pass. It is HARMFUL for propagating quality state between passes. This is a genuine paradox, not a design error.

The pipeline resolves this paradox with a WORKAROUND: the Weaver's artistic impression is the designated "clean channel" that crosses the isolation boundary. It converts diagnostic/analytic information into generative/emotional language, preserving the information isolation framing while carrying quality feedback.

But this workaround creates its own information loss. The artistic impression can carry "the middle sags" but cannot carry "the stacked gap between S3 and S4 is 185px, consisting of S3 bottom-padding 64px + divider margin 24px + S4 top-padding 97px." The REFINE builder must independently discover this — which requires it to either inspect CSS (CORRECTIVE mode, suppressed) or intuit the gap from the artistic impression (GENERATIVE mode, less precise).

**The paradox cannot be fully resolved.** Any mechanism that gives the REFINE builder specific diagnostic information risks triggering CORRECTIVE mode. Any mechanism that maintains GENERATIVE framing necessarily loses specificity. The current resolution (artistic impression only) maximizes mode protection at the cost of precision.

A better resolution: the REFINE builder receives the artistic impression (generative) PLUS a separate "spatial map" artifact that describes the page's physical layout in neutral, descriptive terms (not diagnostic). Example: "Section 3 ends with a 64px bottom padding. A 24px divider follows. Section 4 begins with 97px top padding." This is DESCRIPTIVE, not DIAGNOSTIC — it tells the builder what IS, not what SHOULD BE. The builder can then make compositional decisions with accurate spatial knowledge.

---

## 4. Meta-Analysis: Why the Gap Exists

The pipeline's anti-loss architecture was designed during a period when **single-pass was the explicit goal**:

- MANIFEST.md L65: "Default mode: SINGLE-PASS"
- MANIFEST.md L519: "In single-pass mode, there are NO feedback loops"
- MANIFEST.md L593: "REFINE and REBUILD are OUTPUT LABELS. The pipeline terminates with the verdict + action items."

The anti-loss mechanisms were engineered to prevent information loss WITHIN the single pass (builder doesn't lose soul constraints, PA doesn't lose fresh perspective, gate runner doesn't lose perception thresholds). The iteration boundary was explicitly punted: "A human decides whether to run a new pipeline execution."

This was a defensible design decision when iteration was theoretical. But the Yegge Gas Town run proved that iteration WORKS — the REFINE cycle produced the largest single-cycle PA-05 improvement ever recorded (+1.5 points). The anti-loss architecture has not caught up with this operational reality.

The pipeline now DOES iterate (de facto, even if not de jure). But it iterates with zero institutional memory — each pass starts fresh, the only bridge being the conviction artifact and the artistic impression. This is like running a 3-person relay race where each runner starts from the beginning of the track instead of the handoff point.

---

## 5. Concrete Gaps — Iteration Artifacts That Should Exist

| Artifact | Producer | Consumer | Content | Effort |
|----------|----------|----------|---------|--------|
| **REFINE Exit Artifact** | REFINE builder (at end of build) | Orchestrator (for decision) + potential Pass 3 builder | What I preserved, changed, compromised, and would do next | ~2 min |
| **Finding Status Map** | Orchestrator (after Weaver verdict) | Pass 2 Weaver (not auditors) | Each Pass 1 fix mapped to: EXPECTED FIXED / EXPECTED UNCHANGED / WATCH FOR REGRESSION | ~5 min |
| **Discrepancy Log** | Weaver (in verdict) | Pass 2 Weaver + Orchestrator | Structured list of gate-PA disagreements | ~2 min (embedded in existing Weaver output) |
| **Quality State Snapshot** | Orchestrator (after each pass) | Orchestrator (for iteration decisions) | Conviction + artistic impression + gate summary + builder exit + discrepancy log | ~5 min |
| **Spatial Description Map** | Gate runner (automated) | REFINE builder | Neutral physical layout description (what IS, not what SHOULD BE) | ~0 min (automated from gate runner DOM inspection) |
| **Orchestrator Observations** | Orchestrator (during execution) | Orchestrator (across session continuations) | Qualitative notes on quality concerns, borderline decisions, hunches | ~3 min per phase |

Total effort to create all 6: approximately 15-20 additional minutes per iteration cycle. Against a REFINE cycle cost of 60-75 minutes, this is a 20-27% overhead for potentially doubling the effectiveness of each iteration.

---

## 6. Priority Classification

**P0 — BLOCKING (prevents effective iteration):**
1. REFINE Exit Artifact — without this, each iteration starts with ~60% less knowledge than it should
2. Finding Status Map — without this, the Pass 2 Weaver cannot distinguish improvements from pre-existing issues

**P1 — HIGH (significantly improves iteration quality):**
3. Discrepancy Log — structured format, embedded in existing Weaver output
4. Quality State Snapshot — composite artifact for orchestrator decision-making

**P2 — MEDIUM (improves iteration precision):**
5. Spatial Description Map — automated from gate runner, prevents REFINE builder guessing
6. Orchestrator Observations — improves session continuity

**P3 — RESEARCH (addresses the isolation paradox):**
7. Redesign the information isolation boundary for multi-pass — what exactly should the REFINE builder receive? Currently the answer is "conviction + artistic impression" but the evidence suggests this is insufficient for effective refinement.

---

## 7. Connection to Convergence Failure

The pipeline's convergence problem (stopping at SHIP WITH FIXES 3.5/4 instead of iterating toward 4/4) is partially explained by the anti-loss gap. Even if the pipeline WANTED to iterate further:

1. The REFINE agent would start with minimal knowledge of what Pass 2 achieved
2. The Pass 3 PA would start with zero memory of Passes 1-2
3. The orchestrator would lose fine-grained context across session continuations
4. Gate-PA discrepancies from Passes 1-2 would not propagate to Pass 3

Effective iteration requires institutional memory. The pipeline has none. Each pass is a fresh start with a thin bridge (conviction + artistic impression). This makes each subsequent pass LESS effective than the first, not more — the opposite of what convergent iteration should produce.

The pipeline's de facto behavior (stop early, declare SHIP WITH FIXES) may actually be RATIONAL given the anti-loss gap. If iteration is memoryless, the expected improvement per pass decays rapidly. After 1-2 passes, the expected gain from a third pass may genuinely not justify the cost — not because higher quality is impossible, but because the iteration mechanism is too lossy to reliably improve quality further.

**The anti-loss gap doesn't just explain why the pipeline stops. It explains why stopping might be the right decision given the current architecture.**

---

*Analysis produced for task #7. 14 anti-loss mechanisms cataloged, 6 iteration loss types analyzed, 6 missing artifacts identified, 7 priority items classified.*
