# Flagship Experiment: Inter-Agent Communication Protocol

**Author:** COMMS-DESIGNER (Task #6)
**Date:** 2026-02-16
**Evidence Base:**
- `ephemeral/ceiling-experiment/_flagship-prep/01-process-retrospective.md` (448 lines)
- `ephemeral/ceiling-experiment/_flagship-prep/06-failure-analysis.md` (520 lines)
- `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md` (625 lines)
- `ephemeral/ceiling-prompt-assembly/09-PROTOCOLS.md` (CP-02, CP-08, CP-09 design)
- `ephemeral/ceiling-prompt-assembly/08-TEAM-TOPOLOGY.md` (checkpoint architecture)
- `ephemeral/middle-tier-experiment/09-MASTER-RETROSPECTIVE.md` (Finding 9, v2)

**Design premise:** "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%." Every rule in this document is binary: MUST (not MAY), with a specific trigger, a specific recipient, and a specific required content format.

---

## EXECUTIVE SUMMARY

The ceiling experiment had ZERO inter-agent messages despite the execution prompt containing CP-02 (inter-agent communication protocol). The Middle experiment also had zero messages. The ceiling experiment's dominant failure — catastrophic whitespace void, undetected during build — was preventable by a single mid-build check-in message. CD-006 (39/40 score) had agent messaging. Missing footer (ceiling experiment's precursor symptom) = smoking gun: builder couldn't ask planner.

**Root cause of zero messaging:** CP-02 said "MAY communicate." "MAY" = judgment rule = ~0% agent compliance. The fix is converting EVERY communication requirement into a binary gate with a specific trigger, required recipient, and required content.

**Minimum message threshold for flagship:** 8 substantive messages across the full experiment. This is not a vanity metric. It is the observable proxy for collaborative quality assurance that the ceiling experiment lacked entirely.

---

## SECTION 1: THE EVIDENCE BASE

### Why Zero Messaging Failed Twice

**Middle experiment (zero messages):**
- Missing footer (WOULD-NOT-SHIP) despite plan specifying "Footer Mirror"
- Token compliance 66.5% (below 80% threshold)
- "Professionally stiff" — mechanisms applied, not felt
- Root cause: builder had plan, but couldn't ask "What does Footer Mirror look like?"

**Ceiling experiment (zero messages):**
- 70-80% whitespace void, catastrophic, DO NOT SHIP
- Checkpoint dividers were empty `<div>` elements — builder never asked "is 900px of checkpoint whitespace intentional?"
- Fix team misdiagnosed void as CSS problem, not content problem — no agent could ask "is this spacing or architecture?"
- Root cause: 5-member fix team operated in parallel isolation; no agent asked the critical diagnostic question

**CD-006 (with messaging):**
- Score: 39/40
- Agent messaging enabled collaborative refinement
- Builders could ask clarifying questions, planner could proactively flag concerns
- Result: "compositionally confident" vs "professionally stiff"

**Root cause of silence (failure-analysis.md):**
```
CP-02 was written as a judgment rule ("MAY use SendMessage for quality-critical
coordination"). Converting it to a binary rule prevents this failure entirely.
```

### The Binary Rule Principle

This is the single most important architectural principle in the project:
- **Binary rules (MUST + specific trigger):** 100% agent compliance
- **Judgment rules (MAY + general guidance):** ~0% agent compliance
- **Implication:** Every communication requirement MUST be expressed as a MUST with a specific, unambiguous trigger

---

## SECTION 2: MANDATORY MESSAGE CHECKPOINTS

There are FIVE mandatory checkpoints. Each has an exact trigger, required sender, required recipient, and required content format. These are MUST rules, not MAY rules.

### CHECKPOINT A: Post-Plan Read-Through (Pass 1 → Build)

**Trigger:** Skeleton-builder has finished reading `02-skeleton-plan.md` and before writing ANY HTML.

**Sender MUST be:** skeleton-builder

**Recipient MUST be:** planner

**Message type:** CLARIFICATION-REQUEST

**Required content (ALL of these MUST appear in the message):**
1. Spatial concern: "My biggest spatial concern in the plan is [X]." If no concern exists, write: "I see no spatial concerns. Proceeding."
2. Checkpoint calculation: "The plan specifies [N] checkpoint transitions. My estimate is [Y]px of total checkpoint whitespace. I will proceed with this as intentional unless you correct me."
3. Confirmation: "I have read the full plan. I am ready to build."

**Example:**
```
type: CLARIFICATION-REQUEST
from: skeleton-builder
to: planner
content: "I have read the full skeleton plan. My biggest spatial concern is the 5 checkpoint
transitions specified at 48-80px each — this totals approximately 320px of checkpoint whitespace
alone. I will proceed with this as intentional unless you correct me. I see no other concerns.
I am ready to build."
```

**Team-lead enforcement:** Team-lead MUST NOT release the build phase to Pass 2 until Checkpoint A message is logged. If skeleton-builder writes `flagship-page.html` without sending Checkpoint A, team-lead MUST pause and send: "You did not send Checkpoint A. Confirm: all plan specifications were clear, OR identify any questions now before auditors launch."

---

### CHECKPOINT B: Post-Build Report (After Pass 1 Complete)

**Trigger:** skeleton-builder has written `flagship-page.html` v1 and completed the self-check.

**Sender MUST be:** skeleton-builder

**Recipient MUST be:** team-lead

**Message type:** ANOMALY-FLAG

**Required content (ALL of these MUST appear in the message):**
1. Estimated page height: "Total page height is approximately [Z]px."
2. Content estimate: "Content occupies approximately [W]% of the scroll. This is [ABOVE / BELOW] the 60:40 threshold."
3. Anomalies: "The following plan specifications were NOT implemented: [list]. OR: All specifications were implemented, no anomalies."
4. Concern flag: "I [AM / AM NOT] concerned about the whitespace proportion."

**Example:**
```
type: ANOMALY-FLAG
from: skeleton-builder
to: team-lead
content: "Build complete. Total page height approximately 8,400px. Content occupies approximately
62% of scroll — above the 60:40 threshold. All specifications from the skeleton plan were
implemented, no anomalies. I am not concerned about the whitespace proportion."
```

**Team-lead enforcement:** If Checkpoint B message reports content below 60%, team-lead MUST send a QUALITY-GATE message to skeleton-builder before launching the Spatial Confidence Gate: "Your post-build report indicates [W]% content, below the 60% threshold. Run void diagnosis before we proceed: what is causing the void?"

---

### CHECKPOINT C: Spatial Gate Result (After Spatial Confidence Gate)

**Trigger:** spatial-auditor has completed SC-01 through SC-07 checks.

**Sender MUST be:** spatial-auditor

**Recipient MUST be:** team-lead

**Message type:** QUALITY-GATE

**Required content (ALL of these MUST appear in the message):**
1. Gate verdict: "Spatial Confidence Gate: PASS or FAIL"
2. SC-01 through SC-07 results, each with PASS or FAIL and the specific measurement
3. If FAIL: "I recommend [specific fix action] before proceeding to Pass 2."
4. If PASS: "All 7 checks pass. Pass 2 may proceed."

**Example (PASS):**
```
type: QUALITY-GATE
from: spatial-auditor
to: team-lead
content: "Spatial Confidence Gate: PASS.
SC-01 Container: PASS (measured 958px via getBoundingClientRect)
SC-02 Void Budget: PASS (max contiguous void = 1,240px, below 2,160px threshold)
SC-03 Content Distribution: PASS (73% of scroll has content)
SC-04 Squint Test: PASS (team-lead must verify independently)
SC-05 First Viewport: PASS (header = 19% of 900px viewport)
SC-06 Section Count: PASS (all 7 sections from plan present)
SC-07 Footer Reachability: PASS (410px from last content to footer)
All 7 checks pass. Pass 2 may proceed."
```

**Example (FAIL):**
```
type: QUALITY-GATE
from: spatial-auditor
to: team-lead
content: "Spatial Confidence Gate: FAIL on SC-02.
SC-02 Void Budget: FAIL (measured 2,800px contiguous void between Zone 2 and Zone 3,
exceeding the 2,160px threshold)
Recommendation: Skeleton-builder must add content to Zone 3 or merge Zone 3 into Zone 2
before Pass 2 can proceed. Padding reduction alone will not close a 2,800px void."
```

**Team-lead enforcement:** Team-lead MUST NOT spawn Pass 2 agents until Checkpoint C message reports PASS on ALL 7 checks. A team-lead squint test (SC-04) MUST be run independently even if spatial-auditor reports PASS on SC-04.

---

### CHECKPOINT D: Post-Elaboration Report (After Pass 2 Complete)

**Trigger:** elaboration-builder has written `flagship-page.html` v2 and completed the self-check.

**Sender MUST be:** elaboration-builder

**Recipient MUST be:** planner

**Message type:** ANOMALY-FLAG

**Required content (ALL of these MUST appear in the message):**
1. Deployment log: "The following mechanisms were DEPLOYED from the elaboration plan: [list]."
2. Rejection log: "The following mechanisms were CONSIDERED but REJECTED during build: [list with one-sentence rationale for each]." If nothing was rejected: "I rejected no mechanisms. All plan mechanisms were deployed."
3. Spatial impact: "My additions [INCREASED / DID NOT CHANGE / DECREASED] the content-to-void ratio. New estimated ratio: [W]%."

**Example:**
```
type: ANOMALY-FLAG
from: elaboration-builder
to: planner
content: "Pass 2 complete.
DEPLOYED: reinforcing-pair-border-weight, color-semantic-encoding, zone-background-tinting,
density-alternation, designed-moment-table, designed-moment-diagram-expanded.
REJECTED: typographic-weight-gradient (considered for callout hierarchy, rejected because
it competed with the existing border-weight gradient for the same semantic channel —
one encoding per dimension, not two).
Spatial impact: additions increased content-to-void ratio. New estimate: 67% content."
```

**Team-lead enforcement:** Team-lead MUST run the PA-05c quick-check (squint test at 1440px) BEFORE spawning Pass 3 agents. If quick-check suggests PA-05c failure, team-lead MUST send Checkpoint D-bis (see Section 3: Escalation Protocol) before proceeding.

---

### CHECKPOINT E: Final Build Report (After Pass 3 Complete)

**Trigger:** intentionality-builder has written `flagship-page.html` v3 (final).

**Sender MUST be:** intentionality-builder

**Recipient MUST be:** team-lead

**Message type:** QUALITY-GATE

**Required content (ALL of these MUST appear in the message):**
1. Intentionality inventory: "The following intentionality elements were added: [list with exact HTML location for each]." Must include at least 2 of: bookending, self-reference, cognitive transition, meta-annotation.
2. Interference check: "My additions [DID / DID NOT] interfere with Pass 1 spatial proportions. Rationale: [brief explanation]."
3. Audit readiness: "The page is [READY / NOT READY] for full audit. Known issues: [list or 'none']."

**Example:**
```
type: QUALITY-GATE
from: intentionality-builder
to: team-lead
content: "Pass 3 complete.
INTENTIONALITY ELEMENTS ADDED:
1. Structural bookending: Opening orientation box (line 47) echoes closing summary box (line 891)
   using identical border-left treatment and 'WHERE WE ARE' / 'WHERE YOU'VE BEEN' labels.
2. Cognitive transition: Bridge paragraph between Zone 2 and Zone 3 (line 412) explicitly signals
   reading mode shift from 'overview' to 'implementation detail.'
3. Meta-annotation: Section 4 label reads 'THE OPERATIONAL CORE (this is the most complex section
   — allocate 15 minutes)' — content that explains its own demands.
Interference: Additions did not interfere with spatial proportions. All additions were HTML content
insertions, zero CSS changes.
The page is READY for full audit. Known issues: none."
```

**Team-lead enforcement:** Team-lead MUST verify intentionality count (>=2 elements) before launching Wave 4 auditors. If Checkpoint E reports fewer than 2 intentionality elements, team-lead MUST send Pass 3 back with: "You added [N] intentionality elements. The minimum is 2. Add [type] before the page proceeds to audit."

---

## SECTION 3: MESSAGE FORMAT

All SendMessage calls MUST follow this exact format:

```
type: [BLOCKING-DEPENDENCY | QUALITY-GATE | CLARIFICATION-REQUEST | ANOMALY-FLAG]
from: [agent-name]
to: [agent-name]
urgency: [HIGH | MEDIUM | LOW]
content: "[Message body, max 300 words. If more is needed, write to file and reference path.]"
summary: "[5-10 word preview for UI display]"
```

### Message Type Definitions

| Type | Use | Urgency | Requires Response? |
|------|-----|---------|-------------------|
| BLOCKING-DEPENDENCY | Agent CANNOT proceed without answer | HIGH | YES — blocks progress until resolved |
| QUALITY-GATE | WOULD-NOT-SHIP defect found or gate result | HIGH | YES — team-lead decides fix or proceed |
| CLARIFICATION-REQUEST | Agent CAN proceed but seeks confirmation | MEDIUM | Optional — proceed with stated assumption if no response |
| ANOMALY-FLAG | Noteworthy observation, not blocking | LOW | No — logged for verdict synthesis |

### Measurement Specificity Requirement

Messages MUST reference specific measurements, not subjective judgment. Examples:

**WRONG (judgment, not measurement):**
```
"The container looks about right."
"There's a lot of whitespace in the middle section."
"The header might be a bit heavy."
```

**CORRECT (measurement, not judgment):**
```
"Container measured at 958px via getBoundingClientRect(). PASS (threshold: 940-960px)."
"Measured 2,800px of contiguous void between lines 340-890 of HTML. FAIL (threshold: <2,160px)."
"Header occupies 22% of first viewport at 1440px (measured: header height 198px / viewport 900px). PASS (threshold: <25%)."
```

### Maximum Message Length

Content field: maximum 300 words. If a message requires more than 300 words, the sender MUST:
1. Write the detailed explanation to a file in the output directory
2. Reference the file path in the message: "Full analysis written to `ephemeral/flagship-preparation/XX-diagnosis.md`."

---

## SECTION 4: ESCALATION PROTOCOL

Escalation is triggered by specific conditions. All escalation rules are MUST rules.

### Escalation Trigger 1: Uncertainty Threshold

**Rule:** If ANY builder agent is less than 80% confident in a spatial or architectural decision, the agent MUST send a CLARIFICATION-REQUEST to the planner BEFORE implementing the uncertain decision.

**What counts as a spatial or architectural decision:**
- Zone count choices (should this be 3 zones or 4?)
- Whitespace allocations (is 80px at this transition acceptable?)
- Structural element presence (is this checkpoint divider supposed to have content?)
- Zone content sufficiency (does Zone 3 have enough content to fill its spatial allocation?)

**What does NOT count (do not escalate these):**
- CSS property values for mechanisms already specified in the plan
- Token selection from the existing token set
- Minor typographic decisions within the plan's typography spec

**Example escalation:**
```
type: CLARIFICATION-REQUEST
from: skeleton-builder
to: planner
urgency: MEDIUM
content: "Plan specifies 4 zones with the following spacing:
Zone 1: 64px padding top/bottom
Zone 2: 48px padding top/bottom
Checkpoint T2: 80px margin
Zone 3: 48px padding top/bottom
Checkpoint T3: 64px margin
Zone 4: 32px padding top/bottom
My calculation: 464px in zone padding + 144px in checkpoint margins = 608px of structural
whitespace BEFORE any content spacing. On a page with ~4,000px of content, this gives a
content-to-void ratio of approximately 87:13 — ABOVE threshold.
I am 70% confident this is intentional. Proceeding, but flagging in case recalculation is needed."
```

### Escalation Trigger 2: Auditor FAIL Finding

**Rule:** If ANY auditor finds a WOULD-NOT-SHIP finding, the auditor MUST send a QUALITY-GATE message to team-lead BEFORE writing the full audit report.

**What counts as WOULD-NOT-SHIP:**
- Void exceeds 15% of scroll depth
- Container width outside 940-960px
- Soul compliance violation (any of the 8 prohibitions broken)
- Footer completely absent from HTML
- Header occupies more than 30% of first viewport (significantly above threshold)

**Example escalation:**
```
type: QUALITY-GATE
from: programmatic-auditor
to: team-lead
urgency: HIGH
content: "SEVERITY-1: Footer landmark is absent from flagship-page.html.
Searched for: <footer>, .footer, #footer, [role='contentinfo']. None found.
The build plan specifies a footer with contact info and structural bookending element.
Recommend: Block perceptual audit launch until builder adds footer.
Full audit report being written to 04-programmatic-audit.md."
summary: "SEVERITY-1: Footer completely absent from HTML"
```

### Escalation Trigger 3: Unexpected Discovery

**Rule:** If ANY agent discovers something unexpected that was not mentioned in the plan or prior deliverables, the agent MUST send an ANOMALY-FLAG to team-lead, regardless of severity.

**Examples of unexpected discoveries:**
- Content from the source material that doesn't fit the planned zone structure
- CSS rendering behavior that contradicts the plan's spatial expectations
- A mechanism deployment that appears to create unintended perceptual effects
- A tool failure (Playwright timeout, file write error)

**Example:**
```
type: ANOMALY-FLAG
from: spatial-auditor
to: team-lead
urgency: LOW
content: "Unexpected discovery during SC-02 void measurement: the page has a CSS animation
class (.zone-reveal) that hides content with opacity: 0 until a scroll event fires. In static
screenshot mode, this makes Zone 3 appear empty even though HTML content exists.
I measured void with animation disabled (animation: none !important) per standard protocol.
Measured void: 1,100px (PASS). But if any auditor does NOT disable animations, they may
falsely report Zone 3 as empty.
Recommendation: Team-lead brief all auditors to disable animations before measuring."
```

### Escalation Trigger 4: Diagnosis-Before-Fix Rule

**Rule:** Before ANY fix agent applies CSS or HTML changes to address a WOULD-NOT-SHIP finding, the fix team lead MUST send a BLOCKING-DEPENDENCY to team-lead with a root cause classification.

**This rule exists because:** The ceiling experiment's fix team treated a content problem as a CSS problem, applied 40 CSS changes, and the void was unchanged. The misdiagnosis cost an entire audit round.

**Required root cause classification:**
```
type: BLOCKING-DEPENDENCY
from: fix-team-lead
to: team-lead
urgency: HIGH
content: "Root cause classification for [finding name]:
CLASSIFICATION: [CSS PROBLEM | CONTENT PROBLEM | ARCHITECTURE PROBLEM]

Evidence for classification:
- [Specific evidence 1]
- [Specific evidence 2]

Proposed fix approach based on classification:
- If CSS PROBLEM: [specific CSS changes]
- If CONTENT PROBLEM: [content addition or removal plan]
- If ARCHITECTURE PROBLEM: [structural reorganization plan]

My estimate: fixing [W]% of void requires [CSS / content / architecture] changes.
Proceeding with [approach] unless redirected."
```

**Team-lead MUST respond** to this message before fix agents begin work. Response options:
1. "APPROVED: Proceed with [approach]."
2. "REDIRECTED: Change classification to [X] because [evidence]. Use [Y] approach instead."

---

## SECTION 5: TEAM-LEAD VERIFICATION

### What Team-Lead Checks at Each Checkpoint

| Checkpoint | What Team-Lead Verifies | What Happens on Failure |
|-----------|------------------------|------------------------|
| A (Post-Plan Read) | Message was sent AND contains all 3 required fields | Team-lead blocks Pass 1 build, sends reminder to skeleton-builder |
| B (Post-Build Report) | Message sent AND content estimate is above 60% | If below 60%, team-lead sends void diagnosis request before Spatial Gate |
| C (Spatial Gate Result) | All SC-01–SC-07 = PASS AND team-lead independently runs SC-04 squint | If any FAIL, team-lead applies Kill Criteria logic (KILL-01 or fix + retry) |
| D (Post-Elaboration) | Message sent AND deployment/rejection log AND spatial impact | If PA-05c squint fails after elaboration, KILL-02 rollback protocol |
| E (Final Build Report) | Message sent AND 2+ intentionality elements documented | If <2 elements, team-lead sends Pass 3 back before auditors launch |

### How Team-Lead Counts Messages

At the end of Pass 1, team-lead MUST run a message count:
1. Tally all SendMessage calls from all non-isolated agents (excludes PA-1, PA-2, novelty-evaluator)
2. Minimum required by end of Pass 1: 2 messages (Checkpoint A + Checkpoint B)
3. Minimum required by end of Pass 2: 4 messages (Checkpoints A, B, C, D)
4. Minimum required by end of Pass 3: 5 messages (Checkpoints A, B, C, D, E)
5. Minimum required at experiment completion: 8 substantive messages total

If message count falls below minimum at any count point, team-lead MUST NOT proceed to the next wave until the missing checkpoint messages are sent (or, if they were skipped, team-lead must send the required confirmation questions directly to the relevant agents).

### Message Count Verification Template

Team-lead writes this to internal notes at each wave transition:

```
WAVE [N] MESSAGE COUNT AUDIT
Required by this wave: [N] messages
Actual count: [N] messages
Shortfall: [N] messages
Shortfall agents: [list]
Action taken: [team-lead sent follow-up questions / none needed]
```

### What Happens If Mandatory Message Is Missing

If a mandatory checkpoint message (A through E) is absent when it should be present:

**Step 1:** Team-lead sends the following to the defaulting agent:
```
"You were required to send Checkpoint [X] before [action]. No message was received.
Answer these questions now:
1. [Required field 1 from checkpoint spec]
2. [Required field 2 from checkpoint spec]
3. [Required field 3 from checkpoint spec]
Respond before [next action] proceeds."
```

**Step 2:** Team-lead waits for response before proceeding. The defaulting agent MUST respond.

**Step 3:** If the response reveals a problem that would have been caught by the missing message, team-lead documents: "PROTOCOL FAILURE: Checkpoint [X] was skipped. Defect [Y] was discovered post-hoc at [stage]. This defect was preventable."

**Step 4:** This protocol failure is included in the verdict document as a process finding.

---

## SECTION 6: ANTI-PATTERNS

These are documented failure modes. Every one of these patterns was observed in the ceiling or middle experiment. All are PROHIBITED.

### Anti-Pattern 1: File-Only Bus (Write Files, Skip Messages)

**What it looks like:** An agent completes their work, writes their deliverable file, and considers the work done. No messages are sent. Other agents read the file and continue.

**Why it fails:** Files transfer SPECIFICATIONS but not JUDGMENTS. The build plan's spacing values were specified in the file (64px zone padding, 80px checkpoint margin). The file communicated WHAT to build. But the accumulated spatial impact of those specifications was a JUDGMENT — and it was wrong. No file-only communication could have surfaced this before the build, because the error was in the AGGREGATE of many individually-reasonable specifications.

**The test:** "Could I have caught this mistake by reading the file more carefully?" If YES, file-only was fine. If NO (the mistake required cross-agent comparison or calculation), SendMessage was required.

**The fix:** Checkpoint A forces the builder to perform the aggregate calculation and send it to the planner. If the calculation reveals a problem, the planner can respond before any HTML is written.

---

### Anti-Pattern 2: Broadcast Spam (Message Everyone About Everything)

**What it looks like:** An agent sends the same message to 5 different teammates. "FYI: I'm starting Section 3 now." "FYI: Section 3 is complete." "FYI: I noticed the table CSS looks a bit different from the plan."

**Why it fails:** Every broadcast creates N deliveries (N = number of recipients). At 8 agents and 10 broadcasts, that is 80 message deliveries. Each delivery consumes API resources and accumulates context in every recipient's window. Broadcast spam destroys the cost savings of the flat topology.

**The test:** "Does this message require action from MORE THAN ONE agent simultaneously?" If yes, broadcast may be warranted. If no (one agent needs to know), use a direct message.

**The fix:** Send to exactly one recipient. If team-lead needs to relay to multiple agents, team-lead does the routing. No worker agent should broadcast.

---

### Anti-Pattern 3: Status-Only Messages ("I'm Done")

**What it looks like:** "I have finished Section 4." "Build complete." "My audit is done."

**Why it fails:** File existence IS the status signal. If `flagship-page.html` exists, the build is complete. A message saying "build complete" adds zero information. Worse, it trains agents to treat messaging as a status-update mechanism rather than a quality-assurance mechanism.

**What makes a message useful:**
- It contains a MEASUREMENT not available from the file alone
- It raises a QUESTION the recipient must answer
- It flags a RISK the team-lead needs to know about
- It reports a GATE RESULT with specific measurements

**What makes a message useless:**
- Pure status ("I am working on X" / "I finished X")
- Pure acknowledgment ("Got it" / "Understood")
- Subjective assessment without measurement ("Looks good")

---

### Anti-Pattern 4: Judgment Without Measurement

**What it looks like:** "The whitespace looks acceptable." "The header seems proportionate." "I think the void is around 30-40%."

**Why it fails:** The ceiling experiment's initial 2-PA audit reported "3,600px of blank space" (PA-2's finding). This was dismissed as a Playwright artifact because it was a perceptual observation without a measurement backing it. If the same auditor had written "I measured content-bearing elements and they sum to 2,100px. Total scroll height measured at 11,400px. Content-to-void ratio: 18:82. FAIL by any threshold," dismissal would have been impossible. Measurements cannot be explained away as artifacts. Judgments can.

**The fix:** Every message that involves a spatial claim MUST include a specific measurement: element heights, pixel values, ratios, percentages. See Section 3 (Measurement Specificity Requirement) for correct vs incorrect examples.

---

### Anti-Pattern 5: Asking for Approval Instead of Flagging Risk

**What it looks like:** "Does this look good?" "Is my approach correct?" "Can I continue?"

**Why it fails:** These messages request SUBJECTIVE APPROVAL rather than communicating a specific risk. The recipient cannot evaluate whether the approach is "correct" without specific measurements or a defined threshold to compare against.

**The fix:** Instead of "does this look good?", send:
- "I measured X = [value]. The threshold is [Y]. I PASS / FAIL by [margin]. No action needed / I need guidance on [specific decision]."

If there is genuine uncertainty, use the CLARIFICATION-REQUEST format with the stated assumption: "I am proceeding with [X]. Correct me if this is wrong."

---

### Anti-Pattern 6: Messaging Isolated Agents (PA/Novelty Contamination)

**What it looks like:** Any agent sends ANY message to PA-1, PA-2, or the novelty-evaluator.

**Why it fails:** PA agents and novelty evaluators MUST operate with zero context about the build process, mechanism selections, metaphor derivation, or experiment hypothesis. A single message — even "hi, I built the page" — contaminates the fresh-eyes assessment by introducing framing. Framed agents rationalize issues instead of flagging them.

**The fix:** This is a HARD PROHIBITION. No agent may send to PA-1, PA-2, or novelty-evaluator. Team-lead enforces by monitoring SendMessage calls and blocking any attempt to message isolated agents.

---

## SECTION 7: MESSAGE ROUTING TABLE

Complete routing rules for each agent pair combination:

| From → To | Allowed? | Types Allowed | Notes |
|-----------|----------|---------------|-------|
| skeleton-builder → planner | YES | CLARIFICATION-REQUEST, BLOCKING-DEPENDENCY | Checkpoints A + optional clarifications |
| skeleton-builder → team-lead | YES | ANOMALY-FLAG, QUALITY-GATE | Checkpoint B + self-check failures |
| spatial-auditor → team-lead | YES | QUALITY-GATE | Checkpoint C only |
| elaboration-builder → planner | YES | ANOMALY-FLAG, CLARIFICATION-REQUEST | Checkpoint D + deployment log |
| intentionality-builder → team-lead | YES | QUALITY-GATE, ANOMALY-FLAG | Checkpoint E |
| planner → skeleton-builder | YES | CLARIFICATION-REQUEST | Responding to Checkpoint A or proactive guidance |
| planner → elaboration-builder | YES | CLARIFICATION-REQUEST | Proactive guidance before Pass 2 |
| team-lead → any builder | YES | QUALITY-GATE, CLARIFICATION-REQUEST | Gate results, fix requests, iteration requests |
| programmatic-auditor → team-lead | YES | QUALITY-GATE, ANOMALY-FLAG | Defects and anomalies |
| verdict-synthesizer → team-lead | YES | CLARIFICATION-REQUEST | Missing data requests only |
| ANY → PA-1 | PROHIBITED | None | Fresh-eyes isolation — hard prohibition |
| ANY → PA-2 | PROHIBITED | None | Fresh-eyes isolation — hard prohibition |
| PA-1 → PA-2 | PROHIBITED | None | Independence requirement — hard prohibition |
| PA-2 → PA-1 | PROHIBITED | None | Independence requirement — hard prohibition |
| ANY → novelty-evaluator (before blind assessment) | PROHIBITED | None | Blind protocol — hard prohibition |
| novelty-evaluator → anyone | YES (after blind assessment only) | ANOMALY-FLAG | Only after blind scoring complete |
| fix-team-lead → team-lead | YES | BLOCKING-DEPENDENCY | Diagnosis-before-fix escalation (Trigger 4) |

---

## SECTION 8: PER-AGENT MESSAGE LIMITS

Anti-spam enforcement. Limits are per agent, per experiment.

| Agent | Max Total Messages | Rationale |
|-------|-------------------|-----------|
| skeleton-builder | 5 | Checkpoint A + B + up to 3 optional clarifications |
| elaboration-builder | 4 | Checkpoint D + up to 3 optional clarifications |
| intentionality-builder | 3 | Checkpoint E + up to 2 optional anomaly flags |
| planner | 4 | Responses to builder questions + up to 2 proactive guidance messages |
| spatial-auditor | 2 | Checkpoint C + 1 optional anomaly flag |
| programmatic-auditor | 4 | QUALITY-GATE for each Severity-1 found + 1 ANOMALY-FLAG |
| team-lead | 15 | Gate results, iteration requests, missing-checkpoint follow-ups |
| verdict-synthesizer | 2 | Missing-data requests only |
| PA-1 | 0 | Isolated — no messages |
| PA-2 | 0 | Isolated — no messages |
| novelty-evaluator | 1 (after blind only) | Confirmation only, post-blind-assessment |
| fix-team-lead (if spawned) | 3 | Diagnosis-before-fix + 2 patch flags |
| **Total experiment** | **~43 maximum** | In practice: 8-20 expected |

**Expected typical range:** 8-15 messages across full experiment. If count exceeds 25, team-lead reviews for anti-pattern violations.

---

## SECTION 9: INTEGRATION WITH FLAGSHIP ARCHITECTURE

### Where This Protocol Fits in the 3-Pass Architecture

**Pass 1 (Spatial Skeleton):**
- Checkpoint A fires: skeleton-builder → planner (post-plan read, before build)
- Checkpoint B fires: skeleton-builder → team-lead (post-build report)
- Checkpoint C fires: spatial-auditor → team-lead (spatial gate result)
- Optional clarifications: skeleton-builder → planner (during build)
- Optional anomalies: programmatic-auditor → team-lead (SC checks)

**Pass 2 (Compositional Elaboration):**
- Checkpoint D fires: elaboration-builder → planner (post-elaboration report)
- Optional proactive guidance: planner → elaboration-builder (before Pass 2)
- Optional clarifications: elaboration-builder → planner (during build)

**Pass 3 (Intentionality Layer):**
- Checkpoint E fires: intentionality-builder → team-lead (final build report)
- Optional anomalies: intentionality-builder → team-lead (during Pass 3)

**Audit Phase:**
- QUALITY-GATE: programmatic-auditor → team-lead (if Severity-1 found)
- ANOMALY-FLAG: comparative-auditor → team-lead (unexpected findings)
- NO messages to PA-1, PA-2, or novelty-evaluator (isolation maintained)

### Minimum Message Verification Checkpoints

Team-lead MUST verify message counts at these specific moments:

1. **Before launching Spatial Confidence Gate:** 2 messages received (A + B)
2. **Before launching Pass 2:** 3 messages received (A + B + C)
3. **Before launching Pass 3:** 4 messages received (A + B + C + D)
4. **Before launching audit wave:** 5 messages received (A + B + C + D + E)
5. **In verdict document:** Final count + any protocol failures documented

### File-Bus Remains Primary; Messaging Is Supplemental

This protocol does NOT replace the flat file-bus topology. It augments it:

- Files: primary deliverable mechanism (plan, page, audit reports, verdict)
- SendMessage: quality-assurance overlay (checkpoints, gate results, escalations)

The flat topology (team-lead → agents directly, no intermediate captains) is PRESERVED. Per-file ownership (1 agent = 1 output file) is PRESERVED. What changes: the gap between file deliverables where critical judgments can be lost is now covered by mandatory checkpoint messages.

---

## SECTION 10: FAILURE MODES AND COUNTERMEASURES

| Failure Mode | Probability | Detection | Countermeasure |
|-------------|------------|-----------|----------------|
| Builder skips Checkpoint A (builds without plan read-through) | MEDIUM | Team-lead checks message log before Spatial Gate | Team-lead sends required questions; builder must answer before proceeding |
| Checkpoint A sent but omits calculation (spatial concern field missing) | LOW | Team-lead verifies content fields at receipt | Team-lead requests resubmission with missing field |
| Builder sends correct checkpoints but with wrong measurements | LOW | Measurements are reproducible — spatial-auditor will catch discrepancy | SC-02 and SC-03 in Spatial Gate will catch void measurement errors |
| PA contamination via accidental message | LOW | Team-lead monitors all SendMessage calls | Team-lead intercepts and blocks; PA-1/PA-2 do not see contaminating message |
| Fix team skips Diagnosis-Before-Fix (Trigger 4) | MEDIUM (same failure mode as ceiling experiment) | Team-lead monitors fix-team message log | Team-lead blocks fix deployment until root cause classification received |
| Message count below 8 at experiment end | MEDIUM (historical rate: 100% in both prior experiments) | Team-lead counts at each wave | Team-lead sends explicit follow-up questions at each missing checkpoint |
| Agent broadcasts instead of direct messages | LOW | Team-lead monitors recipient patterns | Team-lead corrects anti-pattern, reminds agent of routing table |

---

## SUMMARY: THE 5 MUST-RULES

These are the 5 non-negotiable rules that convert messaging from "MAY communicate" to a functional quality gate:

**MUST-1:** skeleton-builder MUST send Checkpoint A (post-plan read-through with spatial calculation) to planner BEFORE writing any HTML.

**MUST-2:** skeleton-builder MUST send Checkpoint B (post-build report with content percentage) to team-lead BEFORE the Spatial Confidence Gate runs.

**MUST-3:** spatial-auditor MUST send Checkpoint C (all 7 SC results with measurements) to team-lead. Team-lead MUST NOT spawn Pass 2 until Checkpoint C reports all-PASS.

**MUST-4:** elaboration-builder MUST send Checkpoint D (deployment + rejection log with spatial impact) to planner AFTER Pass 2 complete. Team-lead MUST run PA-05c squint before spawning Pass 3.

**MUST-5:** intentionality-builder MUST send Checkpoint E (intentionality inventory with HTML line references) to team-lead. Team-lead MUST verify 2+ elements before launching audit wave.

**ENFORCEMENT:** If any of these 5 messages is absent when it should be present, team-lead STOPS the pipeline and requests it explicitly. Zero messaging experiments produced B+ quality. CD-006 with messaging produced 39/40. The checkpoints are the mechanism that closes this gap.

---

**END INTER-AGENT COMMUNICATION PROTOCOL**

**Total checkpoints designed:** 5 mandatory (A-E) + 4 escalation triggers
**Total agent routing rules defined:** See Section 7 routing table (17 pairings)
**Total anti-patterns documented:** 6
**Expected message count:** 8-15 per experiment
**Minimum threshold:** 8 substantive messages (team-lead verifies at verdict)
**Key insight embedded:** Every rule is binary (MUST with specific trigger) — no MAY rules anywhere in this document.
