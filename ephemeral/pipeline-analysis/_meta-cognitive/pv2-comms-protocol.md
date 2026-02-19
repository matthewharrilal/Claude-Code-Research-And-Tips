# Pipeline v2 Agent Communication Protocol

**Author:** comms-designer (Opus 4.6)
**Date:** 2026-02-18
**Sources:** 07-process-topology-shift.md (23 topology shifts), 42-OPERATIONAL-RECIPE.md (team architecture), pv2-form-proposal.md (invocation model), anti-reproduction-protocol.md (7 gates + 5 meta-process protections)
**Purpose:** Define WHEN agents talk, WHAT they say, and HOW it stays binary

---

## THE CORE INSIGHT

The master prompt mandated 6 checkpoints and 8+ messages. Result: zero messages sent. The remediation embedded verification AS phases. Result: ~100% compliance.

Communication failed because it was an OBLIGATION attached to work, not a TASK with its own deliverable. This protocol converts communication into TASKS.

**The principle:** A message is a TASK OUTPUT, not an afterthought. Every message type below produces a FILE ARTIFACT that the next agent reads. SendMessage is the notification; the file is the substance.

---

## SECTION A: MESSAGE TYPES (5 types, exhaustive)

### A1. CHECKPOINT

**Who sends:** Builder (the agent writing CSS/HTML)
**Who receives:** Planner or Team-Lead
**When:** After completing a recipe phase (see Section C for schedule)
**Purpose:** Report phase completion with gate results so the next agent can verify

**Format (exact template -- copy this):**

```
TYPE: CHECKPOINT
PHASE: [0-8]
COMPLETED: [1-sentence summary of what was built]
GATE_RESULTS:
  - [gate-name]: PASS | FAIL ([measured-value] vs [threshold])
  - [gate-name]: PASS | FAIL ([measured-value] vs [threshold])
PERCEPTION_CHECK: [1-sentence: what you SAW when you scrolled -- not what the CSS says]
NEXT: [which phase the builder will execute next]
NEEDS: [specific question, or NONE]
```

**Example:**

```
TYPE: CHECKPOINT
PHASE: 3
COMPLETED: Zone backgrounds applied, 3 zones (warm/cool/warm), 12 sections colored
GATE_RESULTS:
  - Adjacent zone background delta >= 10 RGB: PASS (S3 #FBF3E8 vs S4 #F8F6F3 = R:3 G:-3 B:-5, net delta 11)
  - Warm palette (R >= G >= B): PASS (all 12 values verified)
  - Container width: PASS (960px, unchanged from Phase 2)
PERCEPTION_CHECK: I can see a shift from warm peach in S1-S3 to cooler cream in S4-S8. Zone boundary between S3 and S4 is visible without a color picker.
NEXT: Phase 4 (structural borders and dividers)
NEEDS: NONE
```

**Binary rules:**
- GATE_RESULTS must contain >= 1 gate. Each gate must have a measured value AND a threshold. "PASS" alone is REJECTED (no evidence).
- PERCEPTION_CHECK must describe what the builder SEES, not what the CSS declares. The sentence must contain a visual observation verb (see, notice, distinguish, looks, appears). Sentences containing only CSS terms (applied, set, used) are REJECTED.
- If NEEDS is not "NONE", it must be a specific question answerable in < 5 lines (see A4: QUERY).

**File artifact:** Builder writes checkpoint to `_checkpoints/checkpoint-phase-[N].md` before sending the SendMessage notification.

---

### A2. APPROVAL

**Who sends:** Planner or Team-Lead
**Who receives:** Builder
**When:** After reviewing a CHECKPOINT
**Purpose:** Authorize the builder to proceed to the next phase, or halt

**Format:**

```
TYPE: APPROVAL
PHASE: [N] (the phase being approved)
DECISION: PROCEED | HALT
ISSUES: [list of specific issues if HALT, or NONE if PROCEED]
```

**Example (proceed):**

```
TYPE: APPROVAL
PHASE: 3
DECISION: PROCEED
ISSUES: NONE
```

**Example (halt):**

```
TYPE: APPROVAL
PHASE: 3
DECISION: HALT
ISSUES:
  1. S4 background #F8F6F3 has R=248, G=246, B=243. Adjacent S3 is #FBF3E8 (R=251, G=243, B=232). Delta on B channel = 11, which passes. But VISUALLY I cannot distinguish them. Increase delta to >= 15 RGB on the dominant channel.
  2. S7 background #F8F6F3 is identical to S4. Adjacent sections within the same zone should still differ by >= 5 RGB to prevent visual collapse.
```

**Binary rules:**
- DECISION must be exactly PROCEED or HALT. No "proceed with reservations" or "mostly fine." Binary.
- If HALT, ISSUES must contain >= 1 specific issue with a measured value, a threshold, and an action verb telling the builder what to change. Vague issues ("backgrounds need more variation") are REJECTED.
- If PROCEED, ISSUES must be NONE. No "proceed but consider..." -- either it passes or it halts.

**File artifact:** Planner writes approval to `_checkpoints/approval-phase-[N].md`.

---

### A3. FIX

**Who sends:** Planner, Team-Lead, or Verifier (Wave 2 agent)
**Who receives:** Builder or Fix-Integration agent (Wave 3)
**When:** When a specific, measurable defect is found during review or verification
**Purpose:** Instruct the builder to make a targeted change

**Format:**

```
TYPE: FIX
SEVERITY: BLOCKING | SIGNIFICANT | MINOR
SELECTOR: [exact CSS selector or HTML element path]
PROPERTY: [exact CSS property or HTML attribute]
CURRENT_VALUE: [what it is now]
REQUIRED_VALUE: [what it must be changed to]
REASON: [1-sentence -- why the current value fails]
EVIDENCE: [the gate/threshold/rule violated]
```

**Example:**

```
TYPE: FIX
SEVERITY: BLOCKING
SELECTOR: .zone-s9 .page-container
PROPERTY: border-left
CURRENT_VALUE: none
REQUIRED_VALUE: 3px solid #5C4B3A
REASON: S9 is specified as a bordered section in the zone plan but has no border applied.
EVIDENCE: Phase 4 recipe step 4.1 specifies borders on alternating sections including S9.
```

**Binary rules:**
- SEVERITY must be exactly one of BLOCKING / SIGNIFICANT / MINOR. Definition: BLOCKING = prevents shipping (soul violation, void > 120px, perception failure). SIGNIFICANT = degrades quality but doesn't prevent shipping. MINOR = polish.
- SELECTOR must be a valid CSS selector or an HTML element path (e.g., "section.zone-s3 > .page-container > h2"). Descriptions like "the third section's heading" are REJECTED.
- CURRENT_VALUE and REQUIRED_VALUE must be exact CSS values or HTML attributes. "Make it warmer" is REJECTED. "#F8F6F3" or "3px solid #5C4B3A" is ACCEPTED.
- Fixes without a REQUIRED_VALUE are REJECTED. The fixer must specify what to change TO, not just what's wrong.

**File artifact:** Fixer writes all fixes to `_fixes/fixes-[source-agent].md` as a numbered list.

---

### A4. QUERY

**Who sends:** Builder
**Who receives:** Planner or Team-Lead
**When:** Builder encounters an ambiguity in the recipe that requires a content-specific decision
**Purpose:** Get a specific answer to an unresolvable question

**Format:**

```
TYPE: QUERY
PHASE: [current phase]
QUESTION: [specific question, max 3 sentences]
OPTIONS: [2-3 concrete options the builder has identified]
DEFAULT: [which option the builder will use if no response in 2 minutes]
```

**Example:**

```
TYPE: QUERY
PHASE: 0
QUESTION: The content has 2,800 words but only 4 natural section boundaries. Should I use 3 zones (5 sections) or 2 zones (4 sections)?
OPTIONS:
  A. 3 zones (S1-S2 warm, S3 cool, S4 warm) -- more zone transitions, tighter sections
  B. 2 zones (S1-S2 warm, S3-S4 cool) -- fewer transitions, more spacious sections
DEFAULT: B (2 zones) -- simpler, and the content has no strong third-act pivot
```

**Binary rules:**
- QUESTION must be answerable in <= 5 lines. Open-ended questions ("does this look good?", "what do you think about...") are REJECTED.
- OPTIONS must contain >= 2 concrete alternatives. Questions without options ("how should I handle this?") are REJECTED -- the builder must propose solutions, not delegate thinking.
- DEFAULT must be specified. This prevents blocking: if the planner doesn't respond, the builder proceeds with the default after the timeout.
- Questions about JUDGMENT ("is this rich enough?", "does this feel designed?") are REJECTED. Queries must be about CONTENT DECISIONS (zone count, section boundaries, callout variant, grid placement) or AMBIGUITY RESOLUTION (conflicting recipe steps, unclear selector targets).

**File artifact:** Builder writes query to `_queries/query-phase-[N]-[seq].md`. Planner writes response to `_queries/response-phase-[N]-[seq].md`.

---

### A5. ESCALATE

**Who sends:** Any agent
**Who receives:** Team-Lead (who decides whether to involve the user)
**When:** A gate fails after the maximum retry count, or a kill criterion is triggered
**Purpose:** Signal that the build cannot continue without human intervention

**Format:**

```
TYPE: ESCALATE
TRIGGER: [GATE_FAIL | KILL_CRITERION | IRRECOVERABLE]
DETAILS: [what failed, measured value vs threshold]
ATTEMPTS: [how many fix attempts were made]
RECOMMENDED_ACTION: [what the agent thinks should happen -- abort, user review, or restart phase]
```

**Example:**

```
TYPE: ESCALATE
TRIGGER: GATE_FAIL
DETAILS: Phase 8B void prevention -- S6/S7 boundary gap measures 142px after 2 fix attempts. Reduced margins to 16px, reduced section padding to 24px. Cannot go lower without collapsing content.
ATTEMPTS: 2
RECOMMENDED_ACTION: User review. The content in S6 is a single short paragraph (3 lines). Consider merging S6 into S5 to eliminate the gap structurally.
```

**Binary rules:**
- TRIGGER must be exactly one of GATE_FAIL / KILL_CRITERION / IRRECOVERABLE.
- ATTEMPTS must be a number. If TRIGGER is GATE_FAIL, ATTEMPTS must be >= the retry limit for that tier (see Section E).
- RECOMMENDED_ACTION must be one of: abort, user review, restart phase [N], merge sections. Vague actions ("try harder") are REJECTED.

**File artifact:** Agent writes escalation to `_escalations/escalate-[timestamp].md`.

---

## SECTION B: PROHIBITED MESSAGES (Anti-Noise Rules)

The following message types are BANNED. Any agent sending one has the message REJECTED and must reformulate:

### B1. Status updates without gate results

**BANNED:** "Phase 3 is done. Moving to Phase 4."
**WHY:** This is a status update with no gate evidence. It provides zero information beyond task completion, which the task system already tracks.
**INSTEAD:** Use a CHECKPOINT (A1) with gate results and perception check.

### B2. Judgment questions

**BANNED:** "Does this look good?" / "Is this rich enough?" / "What do you think of the typography?"
**WHY:** These require subjective assessment. The responder cannot answer with a binary value. They invite "it's fine" responses that mask problems.
**INSTEAD:** Use a QUERY (A4) with specific options and a default. Or run the perception threshold check yourself and report the measured values.

### B3. Full CSS/HTML dumps

**BANNED:** Messages containing > 50 lines of code.
**WHY:** The receiving agent cannot meaningfully process a 200-line CSS dump in a message. The file artifact IS the detailed output.
**INSTEAD:** Reference the file ("See the HTML file, lines 140-190, .zone-s5 section") and include only the 1-5 specific lines relevant to your message.

### B4. Meta-discussion about the process

**BANNED:** "I think we should change the approach" / "Maybe we should try a different strategy" / "The recipe seems incomplete."
**WHY:** Process design happens BEFORE execution, not during. Mid-build meta-discussion is the complexity ratchet in real-time.
**INSTEAD:** Use ESCALATE (A5) with TRIGGER: IRRECOVERABLE if the recipe genuinely cannot be followed. Or file the observation in a `_notes/` file for post-build retrospective.

### B5. Acknowledgment-only messages

**BANNED:** "Got it." / "OK, proceeding." / "Thanks, will do."
**WHY:** Zero information content. The task system already tracks acknowledgment through status changes.
**INSTEAD:** Silence. Proceed with the work. The next CHECKPOINT is the acknowledgment.

### B6. Message length violations

**RULE:** Every message must be < 50 lines (including the format template). Messages exceeding 50 lines are REJECTED. If you need more space, write a file artifact and reference it.

---

## SECTION C: COMMUNICATION SCHEDULE (Tier-Specific)

### C1. Floor Tier (Track 1, component assembly)

**Communication:** NONE.
**Agents:** 1 builder.
**Rationale:** Floor pages use predetermined layouts. No content decisions, no ambiguity, no communication needed.

### C2. Middle Tier (DEFAULT -- 40-50% of pages)

**Communication:** NONE between agents. Self-checkpoints only.
**Agents:** 1 builder (Opus).
**Rationale:** The middle-tier experiment succeeded with zero messaging (PA-05 4/4). A single agent reading the full recipe does not need to communicate with itself through messages. The recipe's embedded PERCEPTION CHECKs serve as self-communication.

**Self-checkpoint format (internal to builder, NOT sent as messages):**
The builder writes a 1-line observation after each perception check directly into the HTML file as an HTML comment:
```html
<!-- PERCEPTION CHECK Phase 3: I see warm-to-cool transition at S3/S4 boundary. 3 distinct background bands visible. -->
```
These comments are removed in Phase 8 (final cleanup).

### C3. Ceiling Tier (20-30% of pages)

**Communication:** CHECKPOINT after Phases 1, 3, 6, 8.
**Agents:** Wave 0 (1 content analyst) + Wave 1 (1 builder) + Wave 2 (2-3 verifiers) + Wave 3 (1 fix integrator).

**Communication schedule:**

| After Phase | Who Sends | Message Type | Who Receives | Purpose |
|---|---|---|---|---|
| Phase 0 (Wave 0 complete) | Content Analyst | CHECKPOINT | Team-Lead | Zone plan review before builder starts |
| Phase 1 (HTML skeleton) | Builder | CHECKPOINT | Planner | Verify HTML structure, grid wrappers, ARIA before CSS starts |
| Phase 3 (zones + backgrounds) | Builder | CHECKPOINT | Planner | Verify zone differentiation is VISIBLE before adding borders |
| Phase 6 (element richness) | Builder | CHECKPOINT | Planner | Verify full CSS before accessibility and responsive phases |
| Phase 8 (verification complete) | Builder | CHECKPOINT | Team-Lead | Final self-assessment before Wave 2 audit |
| Wave 2 complete | Each verifier | FIX (if any) | Team-Lead | Defect reports with exact selectors and values |
| Wave 3 complete | Fix Integrator | CHECKPOINT | Team-Lead | Confirmation that fixes applied, re-verification results |

**Total expected messages:** 4 CHECKPOINTs from builder + 0-2 APPROVALs from planner + 0-3 FIXes from verifiers + 1 CHECKPOINT from fix integrator = **5-10 messages total**.

**APPROVAL is OPTIONAL for ceiling:** If the planner does not respond to a CHECKPOINT within 2 minutes, the builder proceeds. Ceiling builds are time-sensitive. The planner can send a HALT asynchronously if they spot a problem.

### C4. Flagship Tier (5-10% of pages)

**Communication:** CHECKPOINT after EVERY phase + planner review.
**Agents:** Same wave structure as Ceiling, but with Opus for all creative roles.

**Communication schedule:**

| After Phase | Who Sends | Message Type | Who Receives | Planner Must Respond? |
|---|---|---|---|---|
| Phase 0 | Content Analyst | CHECKPOINT | Planner | YES -- APPROVAL required |
| Phase 1 | Builder | CHECKPOINT | Planner | YES -- APPROVAL required |
| Phase 2 | Builder | CHECKPOINT | Planner | NO -- proceed unless HALT |
| Phase 3 | Builder | CHECKPOINT | Planner | YES -- zone differentiation is critical |
| Phase 4 | Builder | CHECKPOINT | Planner | YES -- structural integrity review |
| Phase 5 | Builder | CHECKPOINT | Planner | NO -- proceed unless HALT |
| Phase 6 | Builder | CHECKPOINT | Planner | NO -- proceed unless HALT |
| Phase 7 | Builder | CHECKPOINT | Planner | NO -- proceed unless HALT |
| Phase 8 | Builder | CHECKPOINT | Team-Lead | YES -- ship decision |
| Wave 2 | Verifiers | FIX (if any) | Fix Integrator | N/A (fixes are instructions) |
| Wave 3 | Fix Integrator | CHECKPOINT | Team-Lead | YES -- final ship decision |

**Total expected messages:** 8 CHECKPOINTs from builder + 4 APPROVALs from planner + 0-5 QUERYs from builder + 0-5 FIXes from verifiers + 1 final CHECKPOINT = **13-23 messages total**.

**APPROVAL is MANDATORY for flagged phases:** At Phases 0, 1, 3, 4, and 8, the builder MUST wait for APPROVAL before proceeding. This is the structural fix for the flagship experiment's zero-communication failure. The planner reviews the checkpoint file, checks gate results, and sends PROCEED or HALT.

**Timeout:** If APPROVAL is not received within 5 minutes at a mandatory checkpoint, the builder sends an ESCALATE to team-lead. The builder does NOT proceed without approval at mandatory checkpoints.

---

## SECTION D: COMMUNICATION AS TASKS (Structural Enforcement)

The master prompt's communication protocol failed because messages were obligations, not tasks. This section converts every communication event into a TASK with a deliverable.

### D1. Task Definition for Checkpoints

For ceiling/flagship builds, the team-lead creates explicit checkpoint tasks:

```
Task: "Write Phase 3 checkpoint"
Description: "After completing Phase 3, write a CHECKPOINT to _checkpoints/checkpoint-phase-3.md
following the format in the comms protocol (Section A1). Must include gate results with
measured values and a perception check with visual observation. Mark this task complete
after writing the file AND sending the SendMessage notification."
```

The builder has TWO tasks per phase: the building task AND the checkpoint task. The checkpoint task is a separate task in the task system with its own completion criterion. This makes it impossible to skip.

### D2. Task Definition for Approvals (Flagship Only)

```
Task: "Review and approve Phase 3 checkpoint"
Description: "Read _checkpoints/checkpoint-phase-3.md. Verify gate results match the
HTML file's computed styles. Send APPROVAL (PROCEED or HALT) to the builder. Write
approval to _checkpoints/approval-phase-3.md. Mark this task complete after writing
the file AND sending the SendMessage notification."
Blocked by: "Write Phase 3 checkpoint" task
```

The approval task is BLOCKED BY the checkpoint task. The planner cannot complete it until the builder has filed the checkpoint. This creates a structural dependency chain.

### D3. File-Bus + Message Protocol

**Primary channel:** File artifacts in `_checkpoints/`, `_fixes/`, `_queries/`, `_escalations/`.
**Notification channel:** SendMessage tool.

The file IS the message content. The SendMessage IS the notification that the file exists. Both are required:
- File without SendMessage = silent update that may be missed
- SendMessage without file = no substance, no reviewable artifact

```
CORRECT:
  1. Builder writes _checkpoints/checkpoint-phase-3.md
  2. Builder sends SendMessage to planner: "CHECKPOINT Phase 3 complete. See _checkpoints/checkpoint-phase-3.md"

INCORRECT:
  1. Builder sends SendMessage with full checkpoint content inline (no file artifact)
  2. Builder writes checkpoint file but doesn't notify (planner may not check)
```

---

## SECTION E: FAILURE RECOVERY COMMUNICATION

### E1. Gate Failure Protocol

When a gate check in a CHECKPOINT reports FAIL:

**Step 1:** Builder identifies the failing gate and the delta between measured value and threshold.

**Step 2:** Builder attempts a fix. The fix must be a specific CSS change (not "adjust values"). Builder writes the fix to the HTML file.

**Step 3:** Builder re-runs the gate check. If PASS, proceeds normally (include both the original FAIL and the re-check PASS in the CHECKPOINT).

**Step 4:** If still FAIL after fix attempt, builder includes the failure in the CHECKPOINT with:
```
GATE_RESULTS:
  - Adjacent zone delta >= 10 RGB: FAIL (S3/S4 delta = 7 RGB after fix attempt)
    FIX_ATTEMPTED: Changed S4 from #F8F6F3 to #F5F0E8 (delta now R:6 G:3 B:0 = 9, still below 10)
    BLOCKER: Cannot increase S4 delta further without making S4 identical to S5 (#F5F0E8)
```

**Step 5:** Planner (or team-lead) reviews and sends either:
- A FIX message with a different approach (e.g., "change S5 instead of S4")
- An APPROVAL with PROCEED if the failure is acceptable at this tier
- An ESCALATE if the failure is structural

### E2. Retry Limits

| Tier | Max Retries Per Gate | After Max Retries |
|---|---|---|
| Middle | N/A (single agent, self-corrects) | Builder proceeds with best attempt |
| Ceiling | 2 retries per gate | ESCALATE to team-lead |
| Flagship | 3 retries per gate | ESCALATE to team-lead, who decides: user review or abort |

**Retry definition:** A retry is a FIX attempt followed by a gate re-check. Each retry must change at least one CSS value. Retrying without changing anything is not a retry -- it's a loop and is BANNED.

### E3. Decision Authority

| Decision | Who Decides |
|---|---|
| Fix and retry (retry count < limit) | Builder (autonomous) |
| Fix and retry (retry count = limit) | Planner (for ceiling), Team-Lead (for flagship) |
| Escalate to user | Team-Lead only |
| Abort build | Team-Lead only, after user confirmation |
| Override a gate threshold | Team-Lead only, with written justification in `_escalations/` |
| Ship with known defect | Team-Lead only, after all BLOCKING defects resolved; SIGNIFICANT defects documented |

### E4. Kill Criteria Communication

If any kill criterion is triggered, the builder MUST immediately send an ESCALATE:

| Kill Criterion | Threshold | Action |
|---|---|---|
| Soul violation unfixable | border-radius in external resource, wrong font loaded | ESCALATE: KILL_CRITERION |
| Container width cannot be corrected | Layout dependency prevents 960px | ESCALATE: KILL_CRITERION |
| Content missing | Source content file incomplete or corrupted | ESCALATE: IRRECOVERABLE |
| Phase 8 void > 120px after 3 fix attempts | Structural content gap | ESCALATE: GATE_FAIL |

Kill criteria escalations skip the retry protocol. They go directly to team-lead.

---

## SECTION F: PROTOCOL VERIFICATION CHECKLIST

Before launching a ceiling or flagship build, the team-lead verifies:

```
[ ] All checkpoint tasks created in the task system (1 per mandatory phase)
[ ] All approval tasks created (flagship: 5 mandatory; ceiling: 0 mandatory)
[ ] _checkpoints/ directory exists in the build workspace
[ ] _fixes/ directory exists
[ ] _queries/ directory exists
[ ] _escalations/ directory exists
[ ] Builder agent prompt includes this protocol document reference
[ ] Planner agent prompt includes this protocol document reference
[ ] Retry limits configured per tier (E2)
[ ] Kill criteria listed in builder's task description
```

---

## SECTION G: WHAT THIS PROTOCOL DOES NOT COVER

1. **Wave 2 (PA auditor) communication.** PA auditors use the screenshot pre-capture pattern and write independent reports. They do not send messages to each other (no cross-contamination). Their output goes to the weaver agent who synthesizes findings into FIX messages. The PA protocol is in the perceptual-auditing skill, not here.

2. **User-facing communication.** How the team-lead communicates results to the user is outside this protocol. This protocol governs agent-to-agent communication only.

3. **Cross-build communication.** How findings from one build inform the next is handled by the sunset protocol (anti-reproduction-protocol.md, M-2), not by this protocol.

---

## APPENDIX: EVIDENCE AND PROVENANCE

| Design Decision | Evidence | Confidence |
|---|---|---|
| Communication as tasks, not obligations | File 07, Section 4.4: "obligations are skippable; phases are sequential gates" | Tier 1 (11/25 files) |
| File-bus + SendMessage dual channel | File 07, Section 4.3: remediation's self-communication was file-based; middle experiment used file-bus successfully | Tier 2 |
| Zero communication for middle tier | Middle experiment: PA-05 4/4 with zero messages, 35 min execution | Tier 1 (direct experiment) |
| Mandatory approval for flagship | Flagship: zero messages, PA-05 1.5/4. CD-006: multi-agent WITH communication, 39/40 | Tier 2 (different topology, N=2) |
| 2-minute timeout for ceiling | Pragmatic estimate. No direct evidence. Ceiling builds are time-sensitive (~150-220 min). 2 min per checkpoint = ~8-16 min overhead (5-8% of build time). | Tier 4 (estimate) |
| 5-minute timeout for flagship | Pragmatic estimate. Flagship builds are longer (~240-400 min). 5 min per mandatory checkpoint = ~25 min overhead (6-10% of build time). | Tier 4 (estimate) |
| < 50 line message limit | File 07, Section 4.4 + Anti-reproduction Gate 4: builder visibility requires self-contained specs, not inline dumps | Tier 2 |
| Retry limits (2 ceiling, 3 flagship) | Master prompt: max 2 fix cycles per gate (File 07, Section 5.1). Flagship gets +1 because higher stakes. | Tier 3 (adapted from master prompt) |
| Banned message types (B1-B6) | File 07 Section 4.2: zero messages despite 6 mandatory checkpoints. Root cause: messages had no deliverable. Anti-noise prevents the opposite failure (too many useless messages). | Tier 2 |

---

**END OF AGENT COMMUNICATION PROTOCOL**

**Statistics:**
- Message types: 5 (CHECKPOINT, APPROVAL, FIX, QUERY, ESCALATE)
- Banned message types: 6 (B1-B6)
- Tier schedules: 4 (Floor: 0, Middle: 0, Ceiling: 5-10, Flagship: 13-23)
- Binary rules per message type: 3-5 (zero judgment)
- Retry limits: 2 (ceiling), 3 (flagship)
- Decision authority levels: 3 (builder autonomous, planner/team-lead, user)
- File artifact directories: 4 (_checkpoints, _fixes, _queries, _escalations)
