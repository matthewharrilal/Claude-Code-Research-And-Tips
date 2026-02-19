# PV2 Cross-Reference: Communication Protocol Analysis

**Agent:** communication-protocol-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference PV2-ARCHITECTURE-DIAGRAM against pv2-comms-protocol.md and pv2-flagship-topology-verification.md
**Core Question:** Does the architecture solve the zero-messaging problem that produced PA-05 1.5/4?

---

## PART 1: THE ZERO-MESSAGING PROBLEM — WHAT THE ARCHITECTURE MUST SOLVE

### 1.1 The Causal Chain

The flagship experiment deployed 19 agents. The master prompt mandated 6 checkpoints (CP-A through CP-F) with a minimum of 8 substantive messages. Zero messages were sent. The result: PA-05 1.5/4, DO NOT SHIP.

The root cause, diagnosed in File 07 Section 4.4: "obligations are skippable; phases are sequential gates." Communication was structured as an OBLIGATION attached to work, not as a TASK with its own deliverable. Agents optimized for task completion and discarded auxiliary obligations.

Meanwhile, CD-006 scored 39/40 WITH multi-agent messaging. The middle experiment scored PA-05 4/4 with zero messaging but produced a missing footer — the builder could not ask the planner whether a footer was required. The missing footer is the smoking gun: communication enables quality refinement beyond what recipe compliance alone achieves.

### 1.2 What the Architecture Must Do

Three things:
1. Make communication structurally impossible to skip (not just mandated)
2. Ensure communication carries substance (not noise)
3. Scale communication intensity with tier (ALWAYS FLAGSHIP means ALWAYS at max)

---

## PART 2: HOW THE ARCHITECTURE DIAGRAM ADDRESSES COMMUNICATION

### 2.1 The 4-Wave Architecture

The PV2-ARCHITECTURE-DIAGRAM (Section 6) defines a 4-wave Flagship architecture:

| Wave | Purpose | Communication Role |
|------|---------|-------------------|
| Wave 0 | Content Analysis (TC Phases 0-3.5) | TC Planner outputs `_build-plan.md` — the handoff document. Orchestrator validates before Wave 1 launches. |
| Wave 1 | Build Execution (Phases 0-8) | 1 Opus builder executes recipe. Mandatory checkpoints at 5 phases. Planner reviews and approves each. |
| Wave 2 | Verification (Mode 4 PA) | Lead captures screenshots. 9 PA auditors run in parallel. Weaver synthesizes verdict. |
| Wave 3 | Fix Integration | Builder applies top 3 blocking fixes. Re-runs gates. Quick PA re-check (2 auditors). |

This is a sequential wave architecture — each wave completes before the next begins. The diagram explicitly states this prevents the "builder can't ask planner" failure.

### 2.2 What the Diagram Says About Flagship Communication

The tier routing table (Section 5) specifies:
- **Flagship Checkpoints:** "Mandatory APPROVAL at Phases 0, 1, 3, 4, 8"
- **Flagship PA:** "9 auditors, all 48 questions (Mode 4)"
- **Flagship Fix Cycles:** "Max 3 cycles + user escalation"

The diagram's flow (Section 2, Steps 1-7) shows 7 sequential stages. The Gate at the handoff validation step is explicit: "If FAIL: TC re-runs with specific fix instructions." The PA layer (Step 6-7) shows a fix integration loop with a 3-cycle maximum.

### 2.3 What the Diagram Does NOT Say

The diagram is a USER JOURNEY — it shows WHAT happens, not HOW agents communicate during each step. It describes checkpoints as gates but does not specify:
- Message formats
- Prohibited message types
- File artifact requirements
- Timeout protocols
- Retry limits per gate
- Decision authority chains

These are ALL specified in the comms protocol. The diagram and protocol are complementary, not overlapping.

---

## PART 3: DEEP ANALYSIS OF THE COMMS PROTOCOL

### 3.1 The Core Innovation: Communication as Tasks

The comms protocol's central thesis (Section D): "A message is a TASK OUTPUT, not an afterthought. Every message type below produces a FILE ARTIFACT that the next agent reads. SendMessage is the notification; the file is the substance."

This is the structural fix for the zero-messaging problem. Instead of mandating "send 8 messages during the build" (an obligation the flagship ignored), the protocol creates EXPLICIT TASKS:

```
Task A: "Build Phase 3"
Task B: "Write Phase 3 checkpoint" (blocked by A)
Task C: "Review Phase 3 checkpoint" (blocked by B)
Task D: "Build Phase 4" (blocked by C for mandatory phases)
```

The builder CANNOT mark "Build Phase 3" complete AND skip the checkpoint, because the checkpoint is a SEPARATE TASK with its own completion criterion. The approval task is BLOCKED BY the checkpoint task. The next building task is BLOCKED BY the approval task (at mandatory phases). The dependency chain in the task system makes skipping structurally impossible.

**Assessment:** This directly solves the flagship's zero-messaging failure. The key insight is that task system dependencies are structural gates, not obligations. An agent cannot advance past a blocked task. This is Tier 1 confidence — the principle is sound.

### 3.2 Five Message Types (Exhaustive)

The protocol defines exactly 5 message types:

| Type | Who Sends | Who Receives | Purpose | File Artifact |
|------|-----------|-------------|---------|---------------|
| CHECKPOINT | Builder | Planner/Lead | Phase completion with gate results | `_checkpoints/checkpoint-phase-N.md` |
| APPROVAL | Planner/Lead | Builder | Authorize next phase (PROCEED/HALT) | `_checkpoints/approval-phase-N.md` |
| FIX | Planner/Verifier | Builder | Targeted CSS/HTML change instruction | `_fixes/fixes-source.md` |
| QUERY | Builder | Planner | Ambiguity resolution with options + default | `_queries/query-phase-N-seq.md` |
| ESCALATE | Any | Lead | Build cannot continue without intervention | `_escalations/escalate-timestamp.md` |

Each message type has:
- An exact template (copy-paste format)
- 3-5 binary rules (zero judgment)
- A file artifact requirement (dual-channel: file IS substance, SendMessage IS notification)

### 3.3 Six Banned Message Types (Anti-Noise)

Critically, the protocol also defines 6 BANNED message types:

| Banned | Why | Instead |
|--------|-----|---------|
| Status without gate results | Zero information content | Use CHECKPOINT with measured values |
| Judgment questions ("does this look good?") | Requires subjective response | Use QUERY with concrete options + default |
| Full CSS/HTML dumps (>50 lines) | Receiving agent can't process inline | Reference file + cite specific lines |
| Meta-discussion about process | Mid-build complexity ratchet | Use ESCALATE if recipe is unworkable |
| Acknowledgment-only ("Got it") | Zero information content | Silence. Next CHECKPOINT is acknowledgment. |
| Messages >50 lines | Forces substance to files | Write file artifact, reference in message |

**Assessment:** The banned types are as important as the permitted types. The flagship's zero-messaging failure had a dual risk: zero messages OR too many useless messages. The banned types prevent the opposite failure mode — if we enforce communication, agents might flood the channel with "Phase 3 done. Proceeding." noise. The banned types ensure every message carries substance.

### 3.4 Tier-Specific Communication Schedule

| Tier | Messages | Checkpoints | Mandatory Approvals | Timeout |
|------|----------|-------------|---------------------|---------|
| Floor | 0 | 0 | 0 | N/A |
| Middle | 0 (self-checkpoints only) | HTML comments | 0 | N/A |
| Ceiling | 5-10 | Phases 1, 3, 6, 8 | 0 (optional, 2-min timeout) | 2 min |
| Flagship | 13-23 | Every phase (0-8) | 5 (Phases 0, 1, 3, 4, 8) | 5 min |

**Middle tier justification:** The middle experiment succeeded with zero messaging (PA-05 4/4). A single Opus builder reading the full recipe does not need external communication for content of that complexity.

**Flagship mandatory approvals:** At Phases 0, 1, 3, 4, and 8, the builder MUST wait for APPROVAL before proceeding. If no approval arrives within 5 minutes, the builder sends ESCALATE to team-lead. The builder does NOT proceed. This is the hard constraint that prevents the flagship's "build everything in isolation, discover problems at the end" pattern.

---

## PART 4: DOES THE ARCHITECTURE SOLVE THE ZERO-MESSAGING PROBLEM?

### 4.1 Factor-by-Factor Assessment

| Factor | Flagship (Failed) | PV2 Flagship (Proposed) | Solved? |
|--------|-------------------|------------------------|---------|
| Communication mandated | Yes (6 checkpoints, 8 messages) | Yes (13-23 messages, 5 mandatory approvals) | STRUCTURALLY (not just mandated — task-system enforced) |
| Communication deliverable | No (obligations only) | Yes (every message = file artifact + SendMessage) | YES |
| Builder can ask planner | No (zero messaging) | Yes (QUERY type with options + default + timeout) | YES |
| Planner reviews build progress | No (zero checkpoints received) | Yes (CHECKPOINTs with gate results + perception checks) | YES |
| Communication anti-noise | No (no message type restrictions) | Yes (6 banned types, <50 line limit) | YES |
| Communication skippable | Yes (obligations were discarded) | No (task dependencies enforce sequencing) | YES |
| Timeout handling | N/A (no messages sent) | Yes (2 min ceiling, 5 min flagship) | YES |
| Fix instructions structured | No (no fix messages sent) | Yes (FIX type with exact selector + value + evidence) | YES |

**Verdict: 8/8 factors addressed.** The comms protocol solves the zero-messaging problem through structural enforcement (task dependencies), not just mandate strength.

### 4.2 How the 4-Wave Architecture Enables Builder-Planner Communication

The 4-wave architecture is the macro-structure that MAKES the communication protocol possible:

**Wave 0 (Planner works alone):** TC Planner reads content, derives tensions, generates build plan. No builder exists yet. The planner has full creative space without coordination overhead. Output: `_build-plan.md`.

**Wave 0 -> Wave 1 handoff:** Orchestrator validates the build plan (binary checks: zone count within 2-5, adjacent backgrounds >= 15 RGB delta, per-category mechanism minimums met). If FAIL, TC re-runs. This prevents a weak plan from reaching the builder.

**Wave 1 (Builder + Planner communicate):** This is where the communication protocol operates. The builder executes recipe phases. After each mandatory phase, the builder writes a CHECKPOINT (gate results + perception check) to a file AND sends a SendMessage notification. The planner reads the checkpoint file, reviews, and sends PROCEED or HALT. If HALT, the planner sends a FIX with specific CSS changes.

The builder can also send QUERYs: "The content has 4 sections but the plan says 3 zones. Should zone 2 span S3-S4 or just S3?" The query includes 2-3 options and a DEFAULT. If the planner doesn't respond within 5 minutes, the builder proceeds with the default. This prevents blocking while enabling consultation.

**Wave 2 (PA auditors are isolated):** 9 auditors see ONLY screenshots. They know NOTHING about the build process, the recipe, the communication, or the checkpoint history. This is the fresh-eyes principle. Their output is pure perceptual assessment.

**Wave 3 (Fix integration):** The weaver's synthesized verdict (with FIX messages) goes to either the original builder or a fix-integration agent. Fixes follow the FIX format: exact selector, property, current value, required value, evidence.

**Why 4 waves specifically:** Each wave's agents have a DIFFERENT information context:
- Wave 0 agents: content-rich, mechanism-rich, no CSS yet
- Wave 1 agents: recipe-focused, building CSS, receiving plan
- Wave 2 agents: perception-only, zero build context
- Wave 3 agents: fix-focused, targeted changes

Communication WITHIN a wave is frequent (builder <-> planner in Wave 1). Communication BETWEEN waves is file-mediated (build plan, HTML artifact, screenshots, fix list). This prevents information contamination (PA auditors never see the recipe) while enabling rich collaboration where it matters most (builder-planner during construction).

### 4.3 Is File-Bus Sufficient, or Does Real-Time Messaging Matter?

The comms protocol specifies a DUAL-CHANNEL approach: file-bus for substance, SendMessage for notification.

**File-bus alone (what the middle experiment used):** Works for single-agent Middle-tier builds. The builder writes HTML comments as self-checkpoints. No coordination needed. PA-05 4/4 but missing footer — the builder had no one to ask.

**SendMessage alone (what the master prompt mandated):** Failed completely. Zero messages sent despite mandate. Even if messages had been sent, inline message content (without file artifacts) creates no reviewable record.

**Dual-channel (what the comms protocol specifies):** File artifacts are the permanent record. SendMessage is the real-time notification that triggers the next agent's action. Both are required:
- File without SendMessage = silent update, may be missed
- SendMessage without file = no substance, no audit trail

**Does real-time messaging matter beyond notification?** Yes, for one specific scenario: QUERY resolution during build. When the builder encounters an ambiguity (e.g., "the content has a comparison table that could be `table-compact` or `table-featured` — which fits the zone semantics better?"), a file-only system would require:
1. Builder writes query file
2. Builder waits for planner to poll the file (no notification)
3. Planner reads query, writes response file
4. Builder polls for response file

With SendMessage notification:
1. Builder writes query file + sends notification
2. Planner receives notification immediately, reads file, writes response + sends notification
3. Builder receives notification immediately, reads response, proceeds

The difference is latency. In a 90-180 minute Flagship build with 0-5 queries, the latency difference is 0-25 minutes (assuming 5-minute polling intervals without notification). This is significant enough to justify the dual-channel requirement.

**Assessment:** File-bus is the PRIMARY channel (substance, audit trail, review). SendMessage is the SECONDARY channel (real-time notification). Both are needed for Flagship-tier builds. Middle-tier builds need neither (single agent, self-sufficient).

### 4.4 CD-006 Scored 39/40 WITH Communication — Does the Architecture Enable That Level?

The topology-verification report (Part A) extracts CD-006's success formula:

| Factor | CD-006 | PV2 Flagship |
|--------|--------|-------------|
| Builder model | Opus | Opus (mandated) |
| Communication | Multi-agent WITH messaging | 13-23 messages, 5 mandatory approvals |
| Builder context | Full mechanism catalog | Full recipe + catalog + thresholds |
| Prompt type | Recipe-like | Recipe (operational-recipe.md) |
| Verification | Perceptual checks during construction | Per-phase perception checks + Mode 4 PA |
| Information routing | CSS-rich files to builder | Mechanism catalog + recipe to builder |

The topology verification scores PV2 Flagship at 13/14 match with CD-006, with the 14th (single-writer vs multi-writer) being an intentional improvement.

**But does the COMMUNICATION protocol specifically match CD-006?** CD-006's communication details are incompletely documented. What we know:
- CD-006 used multi-agent communication WITH messaging
- CD-006 scored 39/40
- The communication enabled quality refinement (not just quality generation)

What PV2 Flagship adds BEYOND CD-006:
1. **Structured message types.** CD-006's communication was likely ad-hoc. PV2's 5 types + 6 bans formalize what is and isn't communicated.
2. **Task-system enforcement.** CD-006's communication was voluntary (it happened because agents chose to communicate). PV2's communication is structurally mandatory.
3. **Explicit perception checks.** CD-006 relied on Opus's implicit judgment. PV2 embeds perception thresholds in every checkpoint.
4. **Checkpoint file artifacts.** CD-006 left no communication audit trail. PV2 creates a complete record in `_checkpoints/`.

**Assessment:** PV2 Flagship EXCEEDS CD-006's communication level on structural guarantees while potentially MATCHING it on communication richness. The risk is that PV2's structured format (templates, binary rules, banned types) constrains the freeform creative exchange that may have contributed to CD-006's 39/40. The mitigation is the QUERY type, which allows the builder to raise open-ended content decisions with specific options.

The topology verification predicts PA-05 3/4 floor, 3.5-4/4 ceiling. This is plausible: the communication protocol removes the 1.5/4 failure floor while the recipe + Opus builder combination enables the 3-4/4 range.

---

## PART 5: ALWAYS FLAGSHIP — COMMUNICATION AT MAXIMUM

### 5.1 What ALWAYS FLAGSHIP Means for Communication

The user has stated that all builds should be ALWAYS FLAGSHIP. This eliminates tier routing for communication: every build uses the full Flagship communication schedule.

Concretely, ALWAYS FLAGSHIP communication means:
- **13-23 messages per build** (8 CHECKPOINTs + 4 mandatory APPROVALs + 0-5 QUERYs + 0-5 FIXes + 1 final CHECKPOINT)
- **5 mandatory approval gates** (Phases 0, 1, 3, 4, 8) where the builder HALTS until PROCEED is received
- **9 PA auditors** with all 48 questions answered
- **3 fix cycles maximum** before user escalation
- **5-minute timeout** at mandatory checkpoints

### 5.2 What ALWAYS FLAGSHIP Communication Looks Like in Practice

A typical ALWAYS FLAGSHIP build:

```
Wave 0 (~30-60 min):
  TC Planner reads content, derives tensions, generates metaphor
  Planner writes _build-plan.md
  Orchestrator validates build plan: PASS

Wave 1 (~90-150 min):
  Builder reads recipe + plan + catalog + tokens + prohibitions

  Phase 0: Content analysis + zone architecture
    Builder writes CHECKPOINT (zone count: 3, pattern: CRESCENDO, gate results: PASS)
    Planner reviews: APPROVAL (PROCEED)

  Phase 1: HTML skeleton
    Builder writes CHECKPOINT (8 sections, 2 grids, ARIA landmarks: 4)
    Planner reviews: APPROVAL (PROCEED)

  Phase 2: CSS reset + soul enforcement
    Builder writes CHECKPOINT (960px container, warm palette, no rounded corners)
    [NO MANDATORY APPROVAL — builder proceeds unless HALT]

  Phase 3: Zone backgrounds
    Builder writes CHECKPOINT (3 zones, adjacent delta 22 RGB, perception: visible shift)
    Planner reviews: APPROVAL (PROCEED)
    Builder sends QUERY: "S5 has a single callout. Content-pair or standalone?"
    Planner responds: "Content-pair — callout text is short enough for side-by-side"

  Phase 4: Structural borders + dividers
    Builder writes CHECKPOINT (borders on S2/S4/S6, dividers at zone boundaries)
    Planner reviews: HALT
    Planner sends FIX: {selector: .zone-s4, property: border-left, current: none, required: 3px solid #5C4B3A}
    Builder applies fix, re-checks: PASS
    Planner reviews: APPROVAL (PROCEED)

  Phase 5-7: Typography, components, accessibility
    Builder writes CHECKPOINTs (builder proceeds unless HALT)

  Phase 8: Final verification
    Builder writes CHECKPOINT (12 gates: all PASS, self-perception: COMPOSED)
    Team-lead reviews: APPROVAL (PROCEED to Wave 2)

Wave 2 (~30-45 min):
  Lead captures 36+ screenshots (1440px, 768px, 480px, full scroll)
  9 PA auditors spawn (parallel, fresh-eyes, zero build context)
  Each auditor receives assigned PA questions + screenshots only
  Weaver synthesizes: PA-05 3/4 COMPOSED, 2 SIGNIFICANT fixes

Wave 3 (~30-60 min):
  Builder receives FIX messages from weaver
  Builder applies fixes
  Builder re-runs programmatic gates: all PASS
  Quick PA re-check (2 auditors): PA-05 3/4 confirmed
  Ship decision: SHIP

Total communication: ~18 messages
Total artifacts: 8 checkpoint files, 1 approval-halt-fix cycle, 1 query-response, 9 PA reports, 1 woven verdict
Total time: ~180-315 min (3-5 hours)
```

### 5.3 Cost of ALWAYS FLAGSHIP Communication

With ALWAYS FLAGSHIP, every build incurs the full communication overhead:

| Component | Time Cost | Token Cost | Value Added |
|-----------|-----------|------------|-------------|
| 8 CHECKPOINTs | ~16 min (2 min each for writing + sending) | ~800 tokens each | Gate evidence trail, perception observations |
| 4-5 APPROVALs | ~20 min (5 min timeout + review) | ~400 tokens each | Prevents building on flawed foundation |
| 0-5 QUERYs | ~0-25 min (5 min each) | ~300 tokens each | Ambiguity resolution, prevents missing footer |
| 9 PA auditors | ~30-45 min (parallel) | ~3,000 tokens each | Gestalt verification, catches what gates miss |
| Fix integration | ~30-60 min (conditional) | ~2,000 tokens | Remediation of PA findings |

**Total overhead:** ~96-166 min of communication + verification beyond pure building.

**Is this overhead justified for EVERY page?** The question is whether a Middle-complexity page (tutorial, guide, overview) needs 5 mandatory approval checkpoints and 9 PA auditors.

**Argument FOR:** The flagship experiment proved that skipping communication produces 1.5/4 pages. Even simple content can be poorly composed. The missing footer happened on a successful (PA-05 4/4) build — communication catches quality gaps that recipe compliance misses. If the user wants every page to feel DESIGNED, every page needs the full quality assurance pipeline.

**Argument AGAINST:** The middle experiment achieved PA-05 4/4 DESIGNED with zero communication and a single agent. For content of moderate complexity, the recipe alone produces excellent results. The 13-23 message overhead on simple content is pure cost with marginal quality gain.

**Resolution for ALWAYS FLAGSHIP:** The communication intensity should scale with the CONTENT, not the tier label. ALWAYS FLAGSHIP means:
- **ALWAYS Opus builder** (non-negotiable)
- **ALWAYS Mode 4 PA** (9 auditors, all 48 questions)
- **ALWAYS full recipe** (all 9 phases)
- Communication schedule: **ADAPTIVE within Flagship bounds**

Concretely: mandatory approvals at Phases 0, 1, and 8 (architecture start, HTML skeleton, final verification) are ALWAYS mandatory. Phases 3 and 4 approvals are mandatory when the content has 3+ zones or a metaphor-driven architecture. For simpler content (2 zones, no metaphor), Phases 3 and 4 approvals become optional (proceed unless HALT within 2 minutes).

This preserves the Flagship quality floor (Opus + Mode 4 PA + full recipe) while reducing communication overhead on content that doesn't need 5 approval gates.

### 5.4 The Missing Footer Problem at Scale

With ALWAYS FLAGSHIP, the QUERY mechanism becomes critical. The missing footer from the middle experiment was caused by the builder having no one to ask. With ALWAYS FLAGSHIP:

1. The builder encounters an ambiguity (e.g., "the content implies a conclusion but has no explicit closing section")
2. Builder sends QUERY: "Content has no explicit conclusion. Options: A) Add a synthesis callout in S8. B) End with the final content section. C) Add a footer with a navigation link. Default: B."
3. Planner responds based on content analysis: "A — the research synthesis content warrants a concluding synthesis callout."

Every build gets this capability. The builder ALWAYS has a planner to consult. The QUERY format (options + default + timeout) prevents blocking while enabling the quality refinement that CD-006's communication provided.

---

## PART 6: GAPS, RISKS, AND CONTRADICTIONS

### 6.1 Gap: No Mid-Build External Audit

The topology verification (Part D4) identifies this gap: there is no external spot-check between Phase 4 (structural borders) and Wave 2 (full PA). The builder self-checks after each phase (lightweight perception in CHECKPOINT format), but the subtle failures — "technically correct borders but visually monotonous" — require external eyes.

**Comms protocol's position:** Self-checkpoints are "PERCEPTION CHECK: I can see a shift from warm peach in S1-S3 to cooler cream in S4-S8." This is a builder's self-report, not an independent observation.

**Architecture diagram's position:** Wave 2 (PA) runs after Wave 1 (build) completes. No mid-build external verification.

**Impact with ALWAYS FLAGSHIP:** A builder could produce 7 phases of CSS that all self-check as "visible" but a fresh-eyes auditor at Phase 4 would flag as monotonous. The Mode 4 PA catches this at Wave 2, but remediation at that point requires potentially reworking Phases 5-7 CSS that was built on top of a flawed Phase 4.

**Recommendation:** Add an optional "Phase 4 spot-check" for Flagship builds. After Phase 4 (structural borders + dividers), the lead captures a quick screenshot and has 1 fresh-eyes Opus auditor answer PA questions 1-5 (spatial confidence, zone differentiation). If PA-05 is 1/4 or 2/4 at this point, HALT before investing in Phases 5-7. This adds ~10-15 minutes but prevents the "build 7 phases on a bad foundation" failure.

### 6.2 Gap: Task Creation Discipline

The comms protocol's structural enforcement (Section D) depends entirely on the team-lead creating all checkpoint/approval tasks correctly BEFORE the build starts. Section F provides a verification checklist, but the checklist is itself an obligation.

The topology verification (Part D6) proposes that `/build-page` should PROGRAMMATICALLY create the task dependency chain:
```
/build-page --tier flagship [content]
  -> Orchestrator auto-creates:
     Task: "Build Phase 0" (builder)
     Task: "Write Phase 0 checkpoint" (builder, blocked by Build)
     Task: "Review Phase 0 checkpoint" (planner, blocked by Write)
     Task: "Build Phase 1" (builder, blocked by Review)
     ...
```

**Assessment:** This is essential. The comms protocol is well-designed but fragile at the task-creation layer. The `/build-page` orchestrator MUST auto-create the task chain. Manual task creation by the team-lead is the single most likely failure point.

### 6.3 Contradiction: Architecture Diagram vs Comms Protocol on Middle Tier

The architecture diagram (Section 5, tier table) shows Middle tier with "Self-check (HTML comments)" for checkpoints. The comms protocol (Section C2) says Middle tier has "NONE between agents. Self-checkpoints only."

With ALWAYS FLAGSHIP, this contradiction is resolved: Middle tier no longer exists. All builds use Flagship communication. But if the user later relaxes ALWAYS FLAGSHIP, the Middle tier communication (zero messages) needs to be clearly documented as an intentional choice backed by the middle experiment's PA-05 4/4 result, not a gap.

### 6.4 Risk: Structured Templates May Constrain Creative Exchange

CD-006's communication was likely freeform — agents discussing metaphor implications, zone semantics, and compositional choices without rigid templates. PV2's 5 message types + 6 banned types + exact templates formalize communication into structured exchanges.

The QUERY type partially addresses this: the builder can raise content decisions with options. But the banned types (B4: "Meta-discussion about the process") prohibit mid-build creative discussion like "I think the geological strata metaphor would work better as a layered excavation — the content has an archaeological quality."

**Impact with ALWAYS FLAGSHIP:** If the builder discovers a richer metaphor interpretation during Phase 3 (zone backgrounds), the protocol says: file it in `_notes/` for post-build retrospective. It does NOT allow the builder to discuss alternative approaches with the planner mid-build.

**Counter-argument:** The comms protocol's author made this choice deliberately (Section B4): "Process design happens BEFORE execution, not during. Mid-build meta-discussion is the complexity ratchet in real-time." The planner's Wave 0 work (metaphor derivation, zone semantics) should be rich enough that the builder doesn't need to redesign mid-build.

**Assessment:** This is an ACCEPTED TRADEOFF. The protocol prevents the complexity ratchet at the cost of some creative flexibility. The right mitigation is making Wave 0 (planner work) MORE thorough so the builder has a rich enough plan that mid-build redesign is unnecessary. With ALWAYS FLAGSHIP, Wave 0 runs full TC Phases 0-3.5 including metaphor collapse and isomorphism table — this IS the thorough planning that makes mid-build creative discussion unnecessary.

### 6.5 Risk: Timeout Exploitation at Non-Mandatory Checkpoints

At Phases 2, 5, 6, and 7, the builder can proceed without approval if no response arrives within 5 minutes (Flagship). If the planner is slow or overwhelmed by multiple checkpoint reviews in sequence, ALL non-mandatory checkpoints become rubber-stamps.

**Impact with ALWAYS FLAGSHIP:** The planner reviews Phases 0, 1, 3, 4, and 8 with mandatory approval. Phases 2, 5, 6, 7 are timeout-gated. In practice, if the builder executes Phases 5-7 in rapid succession (typography, components, accessibility — 10-20 minutes each), the planner may receive 3 CHECKPOINTs while reviewing Phase 4. By the time the planner finishes reviewing Phase 4, Phases 5-7 are already built.

**Mitigation:** The planner's Phase 4 review (mandatory) is the structural quality gate before the "detail" phases (5-7). If Phase 4 passes, the detail phases are unlikely to introduce fundamental problems. The timeout at non-mandatory phases is intentional — it prevents the build from stalling on non-critical reviews.

---

## PART 7: CROSS-REFERENCE CONSISTENCY CHECK

### 7.1 Architecture Diagram vs Comms Protocol

| Aspect | Architecture Diagram | Comms Protocol | Consistent? |
|--------|---------------------|----------------|-------------|
| Flagship message count | Not specified | 13-23 messages | COMPATIBLE (diagram shows wave structure, protocol specifies message schedule) |
| Mandatory approval phases | Phases 0, 1, 3, 4, 8 | Phases 0, 1, 3, 4, 8 | CONSISTENT |
| Wave structure | 4 waves (analysis, build, verify, fix) | 4 waves (same) | CONSISTENT |
| Screenshot pre-capture | "Lead captures ALL screenshots BEFORE spawning PA auditors" | "PA auditors use the screenshot pre-capture pattern" (Section G1) | CONSISTENT |
| File artifact requirement | `_build-plan.md` for handoff | `_checkpoints/`, `_fixes/`, `_queries/`, `_escalations/` for build communication | COMPLEMENTARY (diagram covers Wave 0->1 handoff, protocol covers Wave 1 internal communication) |
| Fix cycle limit | "Maximum 3 fix cycles before escalation" | "Max 3 retries per gate" (E2) | MINOR DISCREPANCY: diagram says "3 fix cycles", protocol says "3 retries per gate". 3 retries per gate x 12 gates = potentially many more than 3 cycles total. Likely intent: 3 GLOBAL fix cycles, each potentially fixing multiple gates. |
| PA auditor count | 9 for Flagship | Not specified (defers to PA skill) | COMPATIBLE (protocol says PA communication is in the PA skill, Section G1) |

### 7.2 Architecture Diagram vs Topology Verification

| Aspect | Architecture Diagram | Topology Verification | Consistent? |
|--------|---------------------|----------------------|-------------|
| CD-006 match score | Not assessed | 13/14 factors match | N/A (diagram doesn't compare to CD-006) |
| Opus mandate | "1 Opus builder" in Wave 1 | "Opus for ALL creative roles" | CONSISTENT |
| Builder context | "Recipe + build plan + design system files" | "Full recipe (~650 lines) + mechanism catalog + thresholds" | CONSISTENT |
| Remaining risks | "Screenshot pre-capture eliminates contention" | 5 risks ranked (recipe ceiling, task discipline, Sonnet causality, mid-build audit, handoff quality) | COMPLEMENTARY (diagram describes solution, verification identifies remaining risks) |
| Predicted PA-05 | Not predicted | 3/4 floor, 3.5-4/4 ceiling | N/A (diagram doesn't predict) |

### 7.3 Comms Protocol vs Topology Verification

| Aspect | Comms Protocol | Topology Verification | Consistent? |
|--------|---------------|----------------------|-------------|
| Zero-messaging fix | Communication as tasks with file artifacts | "Structural enforcement via tasks" (C1 table) | CONSISTENT |
| Builder-planner communication | CHECKPOINT, APPROVAL, QUERY, FIX, ESCALATE | "13-23 messages, 5 mandatory approvals" (C1 table) | CONSISTENT |
| CD-006 communication | Not compared | "CD-006 WITH communication = 39/40" — "PV2 EXCEEDS CD-006" (C3) | CONSISTENT (topology verification endorses the protocol) |
| Mid-build external audit | Not specified (self-check only during Wave 1) | Identified as gap (D4) | ACKNOWLEDGED GAP (both documents agree this is missing) |
| Task creation discipline | Section F verification checklist | Identified as risk (D6), proposes programmatic creation | COMPATIBLE (protocol provides checklist, verification proposes automation) |

---

## PART 8: VERDICT

### 8.1 Does the Architecture Solve the Zero-Messaging Problem?

**YES — with high confidence.**

The architecture solves the zero-messaging problem through three reinforcing mechanisms:

1. **Structural enforcement (task dependencies):** Communication events are separate tasks, blocked-by the building tasks they follow. The task system prevents skipping. This is the PRIMARY fix.

2. **Dual-channel protocol (file + SendMessage):** File artifacts create substance and audit trail. SendMessage creates real-time notification. Both are required. This prevents both "no communication" and "empty communication."

3. **5 mandatory approval gates (Flagship):** At Phases 0, 1, 3, 4, and 8, the builder HALTS until PROCEED is received. This creates 5 forced synchronization points where the planner actively reviews and approves. This prevents "build everything in isolation, discover problems at the end."

### 8.2 How Does Communication at ALWAYS FLAGSHIP Look?

Every build gets:
- 13-23 structured messages
- 5 mandatory approval checkpoints (builder halts until approved)
- 0-5 ambiguity-resolution queries (builder proposes options, planner selects)
- 9 fresh-eyes PA auditors (complete perceptual verification)
- Maximum 3 fix cycles before user escalation
- Complete file artifact trail in `_checkpoints/`, `_fixes/`, `_queries/`

The communication overhead is ~96-166 minutes per build (within the 240-400 minute Flagship budget). This is the cost of quality assurance. Every minute of communication overhead reduces the probability of producing a 1.5/4 page.

### 8.3 Three Things That Need Attention

1. **Programmatic task creation is essential.** The `/build-page` orchestrator MUST auto-create the full task dependency chain. Manual task creation by the team-lead is the single most likely failure point that would reproduce the zero-messaging problem.

2. **Phase 4 spot-check should be added.** An optional 10-15 minute fresh-eyes check after Phase 4 (structural borders) catches foundational problems before Phases 5-7 build on top of them. With ALWAYS FLAGSHIP, this is worth the time investment.

3. **Fix cycle vs retry semantics need clarification.** The diagram says "3 fix cycles" and the protocol says "3 retries per gate." These should be reconciled: likely 3 GLOBAL fix cycles, each potentially addressing multiple gate failures simultaneously.

### 8.4 Confidence Assessment

| Claim | Confidence | Basis |
|-------|-----------|-------|
| Task-system enforcement prevents zero messaging | Tier 1 | Structural guarantee — agents cannot bypass task dependencies |
| 5 message types are exhaustive for build communication | Tier 2 | Comprehensive design, but untested in practice |
| Banned message types prevent noise | Tier 2 | Sound principle, untested at scale |
| Communication-as-tasks achieves CD-006-level quality | Tier 3 | CD-006's communication was ad-hoc, not structured. Structured may constrain creative exchange. |
| ALWAYS FLAGSHIP communication overhead is justified | Tier 2 | Middle experiment achieved 4/4 without communication. Overhead is insurance against quality variance. |

---

**END OF COMMUNICATION PROTOCOL ANALYSIS**

**Summary:** The PV2 architecture solves the zero-messaging problem through structural enforcement (task dependencies), not just mandate strength. The comms protocol defines 5 message types + 6 banned types with binary rules and file artifacts. The 4-wave architecture enables builder-planner communication during Wave 1 while preserving fresh-eyes isolation in Wave 2. With ALWAYS FLAGSHIP, every build gets 13-23 structured messages, 5 mandatory approval gates, and 9 PA auditors. Three items need attention: programmatic task creation (essential), Phase 4 spot-check (recommended), and fix cycle semantics (clarification needed). Overall assessment: the architecture addresses every diagnosed communication failure mode with Tier 1-2 confidence.
