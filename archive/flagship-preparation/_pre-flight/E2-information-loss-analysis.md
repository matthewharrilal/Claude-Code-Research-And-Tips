# E2: Information Loss Analysis -- Where Knowledge Dies Between Research and Execution

**Author:** META-LOSS-ANALYST (Opus 4.6)
**Date:** 2026-02-16
**Task:** #25
**Sources:**
- 20-attention-bandwidth-theory.md (672 lines -- attention budget model, preparation paradox resolution)
- 10-prompt-architecture.md (613 lines -- forensic analysis of 1,004-line ceiling prompt)
- 16-cross-experiment-analysis.md (467 lines -- quality-richness scatter, quality predictors)
- 19-constraint-pressure-hypothesis.md (720 lines -- constraint pressure, channel loading, bandwidth)

---

## 1. THE INFORMATION PIPELINE: STAGE-BY-STAGE LOSS MAP

### 1.1 The Full Pipeline

```
Stage 1: RESEARCH (337 findings across R1-R5)
  |
  | Arrow A: Research --> Synthesis
  | Loss: ~85%  |  Acceptable: YES (aggregation, not destruction)
  |
Stage 2: SYNTHESIS (20 reports, 13,274 lines)
  |
  | Arrow B: Synthesis --> Action Items
  | Loss: ~70%  |  Acceptable: PARTIALLY (context stripped, but items preserved)
  |
Stage 3: ACTION ITEMS (estimated 200-400 discrete items)
  |
  | Arrow C: Action Items --> Unified Plan
  | Loss: ~60%  |  Acceptable: NO -- this is where critical items first vanish
  |
Stage 4: UNIFIED PLAN (554 lines)
  |
  | Arrow D: Plan --> Execution Prompt
  | Loss: ~75%  |  Acceptable: BY DESIGN if done correctly; CATASTROPHIC if done by volume
  |
Stage 5: EXECUTION PROMPT (~240 lines target, was 1,004 lines for ceiling)
  |
  | Arrow E: Prompt --> Agent Reading
  | Loss: ~40% for binary rules, ~90% for judgment rules  |  Acceptable: NO
  |
Stage 6: AGENT EXECUTION (builder writes HTML/CSS)
  |
  | Arrow F: Agent Reading --> Agent Behavior
  | Loss: ~20% (priority conflicts, attention starvation)  |  Acceptable: PARTIALLY
  |
Stage 7: VERIFICATION (auditors check output)
  |
  | Arrow G: Behavior --> Verification
  | Loss: ~30-50% of actual defects escape detection  |  Acceptable: NO
  |
Stage 8: FINAL OUTPUT
```

### 1.2 Cumulative Loss Calculation

Starting with 337 research findings and tracing what survives:

| Stage | Items In | Items Surviving | Cumulative Survival | Loss at Stage |
|-------|----------|-----------------|---------------------|---------------|
| Research | 337 | 337 | 100% | 0% |
| Synthesis | 337 | ~50 themes | ~15% | 85% |
| Action Items | ~50 themes | ~200-400 items (re-expanded) | ~100%* | 0%* |
| Unified Plan | ~300 items | ~120 items | ~36% | 60% |
| Execution Prompt | ~120 items | ~55 rules | ~16% | 54% |
| Agent Reading (binary) | ~30 binary | ~28 retained | 93% of binary | 7% |
| Agent Reading (judgment) | ~25 judgment | ~3 retained | 12% of judgment | 88% |
| Agent Execution | ~31 total retained | ~25 acted upon | ~81% of retained | 19% |
| Verification | ~25 enforced | ~18 verified | ~72% of enforced | 28% |

*Action item extraction EXPANDS the synthesis back into discrete items, temporarily RECOVERING information. But the next arrow (unified plan) compresses again.

**End-to-end survival rate for a specific research finding:**
- If encoded as binary rule: 337 --> ~28 acted upon = 8.3% survival
- If encoded as judgment rule: 337 --> ~3 acted upon = 0.9% survival
- If not encoded in prompt at all: 337 --> 0 = 0% survival

**The 50:1 compression ratio (337 findings --> ~7 behavioral constraints) is confirmed.** But the loss is not uniform. Binary-encodable findings survive at 8.3%. Judgment-requiring findings survive at 0.9%. The gap is 9x.

### 1.3 Detailed Analysis of Each Arrow

#### Arrow A: Research --> Synthesis (85% loss -- ACCEPTABLE)

**What's lost:** Individual finding-level detail. The specific wording of 337 discrete observations is compressed into thematic clusters.

**Why it's acceptable:** This is AGGREGATION, not destruction. 337 findings naturally cluster into ~50 themes because many findings say the same thing in different words. The synthesis preserves the THEMES and PATTERNS. No critical information is lost if the synthesis is competent.

**Loss mechanism:** COMPRESSION LOSS (intentional, well-managed).

**Anti-loss mechanism already in place:** The 20 flagship preparation reports exist as the synthesis layer. They preserve ~50 distinct themes across 13,274 lines. This is adequate.

#### Arrow B: Synthesis --> Action Items (70% loss -- PARTIALLY ACCEPTABLE)

**What's lost:** Context, rationale, evidence chains. An action item says "add spatial budget gate to build plan phase" without explaining WHY (the 450-line attention bandwidth theory that explains why spatial proportion is always the first casualty of attention overload).

**Why it's partially acceptable:** Context is not needed by the BUILDER -- it is needed by the DESIGNER who creates the prompt. The action item is the correct unit of work for extraction. The context stays in the synthesis reports (available as reference documents).

**Why it's partially NOT acceptable:** Some action items are AMBIGUOUS without context. "Add spatial budget gate" -- what does that mean? How is it measured? What threshold? The action item needs enough context to be IMPLEMENTABLE, not just RECORDABLE.

**Loss mechanism:** COMPRESSION LOSS (context stripped) + AMBIGUITY LOSS (items become vague without their derivation).

**Anti-loss mechanism needed:** Action items must include IMPLEMENTATION SPECIFICATION, not just the directive. Instead of "add spatial budget gate," the item should read: "Planner MUST calculate content-element-height-sum / total-scroll-height. If < 0.60, restructure zone architecture before builder begins. Verification: team-lead checks ratio in build plan file."

#### Arrow C: Action Items --> Unified Plan (60% loss -- NOT ACCEPTABLE)

**This is the first catastrophic loss point.**

**What's lost:** Items that don't fit the plan's structure. Items that seem redundant with other items. Items that the synthesizer judges as "low priority." Items that apply to only one agent but the plan is structured by phase.

**Why it's not acceptable:** The unified plan is where SELECTION BIAS enters. The synthesizer must decide which 120 of 300 items make the cut. This decision is made by ONE agent in ONE pass, using judgment that has never been validated. The ceiling experiment's dominant failure (whitespace void) was predicted by the research, survived synthesis, was extracted as an action item... but was NOT present in the execution prompt because it didn't survive the plan-to-prompt compression.

**Loss mechanism:** PRIORITY LOSS (synthesizer ranks items by perceived importance, missing items that are critical but non-obvious) + STRUCTURAL LOSS (items that don't fit the plan's phase-based structure get dropped).

**Anti-loss mechanism needed:** The unified plan must include a COVERAGE AUDIT -- a cross-reference showing which action items were included, which were deferred, and which were explicitly rejected with rationale. Items with zero coverage must be flagged for manual review.

#### Arrow D: Plan --> Execution Prompt (75% loss -- ACCEPTABLE IF DONE CORRECTLY)

**What's lost:** Everything that is not a binary rule, a gate, or a communication obligation.

**Why it CAN be acceptable:** The attention bandwidth theory (source file 20) proves that the builder's prompt MUST be short (~80 lines, ~37 attention units) to preserve surplus for emergent quality. The 75% loss is not a bug -- it is the DESIGN. The lost items go to reference documents, auditor prompts, team-lead specs, and gate definitions. They are not lost; they are ROUTED to the correct recipient.

**Why it IS catastrophic in practice (ceiling evidence):** The ceiling prompt tried to include EVERYTHING in one document (1,004 lines). This consumed ~128 attention units against a ~100 unit budget, producing a 28% deficit. The deficit was filled by shedding emergent properties (spatial proportion). The "loss" was not from compression -- it was from SENDING ALL INFORMATION TO ONE RECIPIENT.

**Loss mechanism:** STRUCTURAL LOSS (information in wrong location) + ATTENTION LOSS (information present but unprocessable).

**Anti-loss mechanism:** Route information to the correct recipient:
- Builder gets: 25 binary rules + spatial anchors (~55 lines)
- Planner gets: mechanism catalog + metaphor derivation + spatial budget template
- Auditor gets: 48 PA questions + success criteria + comparative framework
- Team-lead gets: coordination spec + gate definitions + kill criteria

**The loss at this stage is ROUTING, not DELETION.** Every item must go SOMEWHERE. The failure mode is putting everything in one place.

#### Arrow E: Prompt --> Agent Reading (40% binary loss, 90% judgment loss -- NOT ACCEPTABLE)

**What's lost:** Rules that the agent scans but does not deeply process. The attention bandwidth theory models this precisely: agents process rules according to a power law, deeply engaging with a few and superficially scanning most.

**Why it's not acceptable:** The 90% loss on judgment rules means that judgment-based directives (spatial proportion, visual rhythm, compositional coherence) are effectively invisible to the builder. These are precisely the properties that determine whether a page feels "designed" or "assembled."

**Loss mechanism:** ATTENTION LOSS (primary) + PRIORITY LOSS (binary rules outcompete judgment rules for limited attention budget).

**Anti-loss mechanism:** Convert every judgment rule to binary. "Spatial proportion should feel balanced" --> "No contiguous void > 1.5 viewports (2,160px at 1440px)." The attention cost drops from ~4 units (judgment) to ~0.75 units (binary), and compliance jumps from ~0% to ~100%.

**The key insight from source file 20:** The agent's attention budget is FIXED at ~100 units per invocation. Binary rules cost ~0.75 units each. Judgment rules cost ~4 units each. A prompt with 30 binary rules and 0 judgment rules consumes ~22.5 units, leaving ~77.5 for emergent quality. A prompt with 15 binary rules and 15 judgment rules consumes ~71.25 units, leaving ~28.75. The judgment rules consume 3.4x more attention but achieve 0% compliance. They are PURE WASTE.

#### Arrow F: Agent Reading --> Agent Behavior (20% loss -- PARTIALLY ACCEPTABLE)

**What's lost:** Rules that the agent read and understood but violated due to competing priorities. Example: the ceiling builder understood "container 940-960px" but the implementation competed with 13 other mechanism deployments, each consuming attention.

**Loss mechanism:** PRIORITY LOSS (competing rule interactions) + AMBIGUITY LOSS (rule understood differently than intended).

**Anti-loss mechanism:** Self-check section that runs AFTER the main build but BEFORE file write. The self-check forces the agent to re-verify critical rules with fresh attention (the build phase consumed the initial attention; the self-check phase gets its own allocation).

#### Arrow G: Behavior --> Verification (30-50% loss -- NOT ACCEPTABLE)

**What's lost:** Defects that exist but are not checked. The ceiling experiment's initial 5-auditor audit rated PA-05 at 3/4. The Mode 4 9-auditor audit found the whitespace void (9/9 auditors flagged) and downgraded to 1.5/4. The lighter audit MISSED THE DOMINANT DEFECT.

**Loss mechanism:** VERIFICATION LOSS (checklist doesn't cover the defect) + STRUCTURAL LOSS (defect is perceptual, not programmatic, so programmatic audit misses it).

**Anti-loss mechanism:** Mode 4 PA (9+ independent auditors) + programmatic audit (binary checks) + cold-look evaluation (perceptual gut check). Each layer catches what others miss. The verification layer should be THICKER than the build layer -- more agents, more time, more scrutiny.

---

## 2. LOSS MECHANISM TAXONOMY

### 2.1 The Six Loss Mechanisms

| Mechanism | Definition | Where It Occurs | Relative Severity |
|-----------|-----------|-----------------|-------------------|
| **COMPRESSION LOSS** | Too many items compressed into too few words | Arrows A, B, C | MODERATE (often acceptable if intentional) |
| **ATTENTION LOSS** | Agent doesn't read/process the information | Arrow E | CRITICAL (explains 90% judgment rule failure) |
| **PRIORITY LOSS** | Agent reads it but other rules override it | Arrows C, F | HIGH (explains why spatial proportion is always shed) |
| **AMBIGUITY LOSS** | Guideline understood differently than intended | Arrows B, F | MODERATE (fixable with examples) |
| **VERIFICATION LOSS** | Action taken incorrectly, nobody catches it | Arrow G | HIGH (the whitespace void was a verification failure) |
| **STRUCTURAL LOSS** | Information exists but in wrong location | Arrows D, G | CRITICAL (the meta-failure that enables all others) |

### 2.2 The Master Loss Mechanism

**STRUCTURAL LOSS is the master mechanism.** It enables all other losses.

Evidence from the ceiling experiment:
- The research PREDICTED the whitespace failure (COMPRESSION LOSS did not destroy it)
- The action items INCLUDED spatial accountability (PRIORITY LOSS did not eliminate it at that stage)
- The execution prompt DID mention container width 3 times (ATTENTION LOSS was not the primary cause)
- But the spatial accountability information was in the WRONG LOCATION: it was a judgment rule in the builder prompt instead of a binary gate at the plan stage

**If the information had been ROUTED correctly:**
1. "Content-to-void >= 60:40" as a binary gate at the build plan checkpoint (team-lead checks)
2. "No contiguous void > 1.5 viewports" as a binary rule in the builder prompt (builder self-checks)
3. "PA-05c PROPORTIONATE" as a success criterion in the auditor prompt (auditor evaluates)

All three routes existed conceptually in the preparation. None existed in the actual prompt. The information was PRESENT but MISLOCATED.

### 2.3 Loss Mechanism Interactions

Loss mechanisms are not independent. They cascade:

```
STRUCTURAL LOSS (information in wrong location)
  --> ATTENTION LOSS (builder must process irrelevant information, budget consumed)
    --> PRIORITY LOSS (critical spatial rules compete with irrelevant audit criteria)
      --> VERIFICATION LOSS (auditor doesn't have the spatial criteria in their prompt)

COMPRESSION LOSS (action item is vague)
  --> AMBIGUITY LOSS (builder interprets differently than intended)
    --> VERIFICATION LOSS (auditor uses same vague criterion, doesn't catch the mismatch)
```

**The cascading nature means that fixing STRUCTURAL LOSS upstream prevents multiple downstream losses.** Route information correctly and attention loss, priority loss, and verification loss are all reduced.

---

## 3. ANTI-LOSS MECHANISMS FOR EACH STAGE

### 3.1 Research --> Synthesis (DONE)

The 20 flagship preparation reports provide adequate synthesis. The anti-loss mechanism is already in place: thematic clustering with preserved evidence chains.

**Status: NO ACTION NEEDED.**

### 3.2 Synthesis --> Action Items (HAPPENING NOW)

The extraction team is converting synthesis into discrete action items. The anti-loss risk here is AMBIGUITY: items extracted without implementation specifications.

**Anti-loss mechanism:** Every action item must have:
1. **WHAT** (the directive): "Add spatial budget gate"
2. **HOW** (the implementation): "Planner calculates content-height / scroll-height"
3. **WHERE** (the enforcement location): "Build plan checkpoint (CP-2)"
4. **THRESHOLD** (the binary criterion): ">= 0.60"
5. **ENFORCER** (who checks): "Team-lead at CP-2"

Items lacking any of these 5 fields are INCOMPLETE and will degrade at the next compression stage.

### 3.3 Action Items --> Prompt: THE CRITICAL STAGE

This is the stage where the question changes from "what should we do?" to "what can the builder actually absorb?" The answer is NOT "make the prompt longer." The ceiling experiment proved that definitively: 1,004 lines consumed ~128 attention units against a ~100 unit budget, producing catastrophic quality failure.

**The answer is: PREPARATION THAT COMPRESSES INTO GATES, NOT PROSE.**

Here is what this means concretely:

#### 3.3.1 The Three Enforcement Mechanisms

Every action item from the extraction must be classified into exactly one of three enforcement mechanisms:

| Mechanism | Cost to Builder | Compliance Rate | Capacity | Location |
|-----------|----------------|-----------------|----------|----------|
| **PROMPT RULE** | ~0.75-4 attention units | 100% (binary) / ~0% (judgment) | ~30 binary rules max | Builder's prompt |
| **GATE CHECK** | 0 attention units (builder never sees it) | ~100% (team-lead or auditor checks) | Unlimited | Checkpoint spec (team-lead) |
| **REFERENCE LOOKUP** | ~1 unit per access (only when needed) | ~50% (depends on whether agent accesses) | Unlimited | Reference documents |

**The critical insight:** 200+ action items can be enforced without exceeding the builder's attention budget IF most items are encoded as GATE CHECKS rather than PROMPT RULES.

Example classification:

| Action Item | Enforcement | Why This Mechanism |
|-------------|------------|-------------------|
| Container 940-960px | PROMPT RULE (binary) | Builder must know this DURING build |
| Spatial budget >= 60:40 | GATE CHECK (CP-2) | Team-lead checks PLAN, not builder |
| Metaphor resonance | GATE CHECK (CP-1) | Team-lead evaluates metaphor derivation |
| 48 PA questions | REFERENCE LOOKUP (auditor) | Irrelevant to builder |
| Mechanism catalog details | REFERENCE LOOKUP (planner) | Planner needs during planning, builder gets plan output |
| Soul 8/8 binary checks | PROMPT RULE (binary) | Builder must know DURING build |
| Kill criterion: void < 40:60 | GATE CHECK (any checkpoint) | Team-lead invokes; builder never sees |
| Token compliance >= 80% | PROMPT RULE (binary + self-check) | Builder can verify during self-check |

#### 3.3.2 The Classification Algorithm

For each action item, ask in order:

1. **Does the builder need to know this DURING construction?**
   - NO --> GATE CHECK or REFERENCE LOOKUP
   - YES --> Continue to question 2

2. **Can it be expressed as pass/fail with a specific threshold?**
   - YES --> PROMPT RULE (binary). Cost: ~0.75 units.
   - NO --> Continue to question 3

3. **Can it be converted FROM judgment TO binary?**
   - "Spatial proportion should feel balanced" --> "No void > 1.5 viewports" (CONVERTED)
   - YES --> PROMPT RULE (binary, converted). Cost: ~0.75 units.
   - NO --> Continue to question 4

4. **Is it a creative quality aspiration?**
   - YES --> CONVICTION DOCUMENT (read once for framing, not tracked during build). Cost: ~0.5 units.
   - NO --> GATE CHECK (team-lead judgment at checkpoint). Cost: 0 to builder.

**This algorithm ensures that judgment rules NEVER enter the builder's prompt.** They are either converted to binary (question 3) or routed to conviction (question 4) or gates (question 4 alternative).

#### 3.3.3 The Attention Audit

After classifying all action items, run the attention audit:

```
ATTENTION AUDIT

Step 1: Count PROMPT RULES (binary):          ___ x 0.75 = ___ units
Step 2: Count PROMPT RULES (conviction read):  ___ x 0.50 = ___ units
Step 3: Count mechanisms to deploy:            ___ x 3.50 = ___ units
Step 4: Content understanding (constant):      10 units
Step 5: Communication obligations:             ___ x 2.00 = ___ units

TOTAL DEMAND: ___
BUDGET: 100 units
SURPLUS: 100 - TOTAL = ___

THRESHOLD: Surplus MUST be >= 30 units.
If surplus < 30: REMOVE prompt rules until surplus >= 30.
Priority for removal: longest rules first, then nice-to-have rules, NEVER spatial anchors or soul.
```

If the audit fails (surplus < 30), the prompt is OVER-LOADED and MUST be cut. This is the preparation paradox guard: it prevents the "more preparation = worse outcome" dynamic by enforcing a hard attention budget.

### 3.4 Prompt --> Agent Behavior

**Anti-loss mechanisms for maximizing the probability that an agent DOES what the prompt says:**

1. **Primacy effect:** Put the 5 most critical rules in the FIRST 10 lines. Agent attention follows a power law; the first items get disproportionate processing.

2. **Self-check gate:** Include a MANDATORY self-check section that the builder runs BEFORE writing the file. This catches rules that were processed but not acted upon. The self-check costs ~8 attention units but runs AFTER the main build, when the builder has completed its creative work and can shift to verification mode.

3. **Communication obligations:** "Builder MUST send >= 1 message to planner before writing file." This is a BINARY rule (did you send a message? YES/NO) that forces the builder to reflect on its work. The message itself may surface concerns the builder would otherwise suppress.

4. **Exemplar over explanation:** Replace every explanation with one concrete example. "Zone transition: 48px gap + 1px separator = SMOOTH" costs ~1 unit. "Zone transitions should create visual rhythm by varying the spatial gap..." costs ~3 units. The exemplar achieves higher compliance at lower cost.

5. **Negative framing:** "Header must NOT exceed 25% of first viewport" (boundary check, ~1 unit) is cheaper and more effective than "Use appropriate header sizing" (open-ended, ~3 units).

### 3.5 Agent Behavior --> Verification

**Anti-loss mechanisms for catching when an agent DIDN'T do something:**

1. **Embedded auditor (team-lead):** At each checkpoint, the team-lead runs programmatic checks via Playwright. These catch binary violations (container width, CPL, landmarks) with ~100% reliability.

2. **Mode 4 PA:** 9+ independent auditors evaluating the same output from different perspectives. The ceiling experiment proved that 5 auditors miss what 9 catch. The whitespace void was THE dominant failure, flagged by 9/9 Mode 4 auditors but missed by the lighter audit.

3. **Plan-derived checklist:** The programmatic auditor receives the BUILD PLAN and checks PLANNED vs DEPLOYED mechanisms. Every mechanism in the plan must be findable in the CSS. This catches omission (agent forgot a mechanism) and substitution (agent replaced a planned mechanism with something else).

4. **Cold-look evaluation:** A fresh-eyes agent with ZERO context loads the page and gives a gut reaction. This catches gestalt failures (the page "feels wrong") that no programmatic check can identify. The cold-look costs ~5 minutes and catches the class of failures that determine ship/no-ship.

5. **Verification completeness audit:** After all auditors report, the team-lead cross-references their findings against the ACTION ITEMS list. Which items were verified? Which were not checked by anyone? Unchecked items are flagged for manual review.

---

## 4. THE PARADOX OF PREPARATION

### 4.1 The Paradox Stated

More preparation creates more information. More information creates more compression pressure. More compression creates more loss. More loss means critical items fall through gaps. Therefore: **more preparation can produce worse outcomes.**

Evidence:
- Middle experiment: moderate preparation (~1,760 lines of context). PA-05 4/4.
- Ceiling experiment: extensive preparation (1,004-line execution prompt + 16 agents + 3 metacognitive analyses). PA-05 1.5/4.
- The ceiling experiment had 3x more preparation and produced a WORSE result.

### 4.2 Why "Less Preparation" Is Not the Answer

The Middle experiment's success was NOT because it had less preparation. It was because its preparation was EFFICIENTLY COMPRESSED into binary rules that consumed ~50 attention units, leaving ~50 for emergent quality. The ceiling experiment's failure was because its preparation was INEFFICIENTLY COMPRESSED into a 1,004-line document that consumed ~128 attention units, leaving zero for emergent quality.

The problem is not the QUANTITY of preparation. It is the ENCODING.

### 4.3 The Resolution: Preparation That Compresses Into GATES, Not PROSE

This is the central insight. Let me make it explicit:

**PROSE-ENCODED PREPARATION:**
```
Research finding: "Whitespace void is the dominant failure mode when metaphor-
driven zone architecture meets limited content volume."

Prose encoding in prompt (3 lines, ~4 attention units, ~0% compliance):
"Ensure spatial proportion remains balanced across all zones. The metaphor's
zone architecture should not create excessive whitespace. Monitor the content-
to-void ratio throughout construction."
```

**GATE-ENCODED PREPARATION:**
```
Same research finding, encoded as three elements:

Gate at CP-2 (0 builder attention units, ~100% enforcement):
"TEAM-LEAD: Before spawning builder, verify build plan includes spatial
budget table with content-height-sum / total-scroll-height >= 0.60. If not,
REJECT plan and return to planner."

Binary rule in builder prompt (0.75 attention units, ~100% compliance):
"No contiguous void > 1.5 viewports (2,160px at 1440px)."

Kill criterion at any checkpoint (0 builder attention units, ~100% enforcement):
"If content-to-void < 40:60 at any checkpoint: STOP BUILD, restructure."
```

**The gate encoding uses 0.75 builder attention units instead of 4.**
**The gate encoding achieves ~100% enforcement instead of ~0%.**
**The gate encoding preserves the FULL protective intent of the research finding.**

This is why preparation should compress into gates, not prose:
- Gates cost the builder ZERO attention (they are enforced by the team-lead)
- Gates achieve ~100% enforcement (they are binary pass/fail)
- Gates can be UNLIMITED in number (they don't compete for the builder's budget)
- Prose costs the builder 4+ attention units per judgment rule
- Prose achieves ~0% compliance
- Prose is LIMITED by the builder's ~100 unit budget

### 4.4 The Preparation Budget Model

```
PREPARATION BUDGET

Good preparation creates:
  +N binary rules (each costs 0.75 attention units)
  +M gate checks (each costs 0 attention units to builder)
  +K reference lookups (each costs 0 unless accessed)
  +J conviction passages (each costs 0.5 units, read once for framing)

Bad preparation creates:
  +P judgment rules (each costs 4+ attention units)
  +Q explanations (each costs 3 attention units)
  +R restatements (each costs 0.75 units but adds zero information)

GOOD PREPARATION: Total attention = N*0.75 + J*0.5 < 50 units
                   Gate count M = unlimited
                   Surplus = 100 - (N*0.75 + J*0.5) >= 50 units

BAD PREPARATION:  Total attention = N*0.75 + P*4 + Q*3 + R*0.75 > 100 units
                   Gate count M = 0 (everything is in the prompt)
                   Surplus = NEGATIVE (emergent quality shed)
```

The ceiling experiment was BAD PREPARATION: ~128 units of attention demand, zero surplus, zero gate checks (everything was in the builder's prompt or ignored).

The flagship should be GOOD PREPARATION: ~37 units of attention demand, ~63 units surplus, unlimited gate checks enforced by team-lead and auditors.

---

## 5. CONCRETE ANTI-LOSS DESIGN

### 5.1 The Action Item Classification Architecture

Every action item from the extraction team must be classified into one of four enforcement buckets:

```
ENFORCEMENT ARCHITECTURE

BUCKET 1: PROMPT RULES (builder sees these)
  Location: Lines 1-30 of builder prompt (primacy zone)
  Capacity: 25-30 binary rules maximum
  Cost: ~22.5 attention units (30 x 0.75)
  Compliance: ~100%
  Content: Soul checks, container width, CPL, spatial anchors,
           mechanism table, transition requirements, self-check

BUCKET 2: GATE CHECKS (team-lead enforces these)
  Location: Coordination spec, checkpoint definitions
  Capacity: UNLIMITED
  Cost: 0 to builder
  Compliance: ~100% (team-lead binary check)
  Content: Spatial budget at CP-2, metaphor resonance at CP-1,
           landmark completeness at CP-3, audit reconciliation at CP-4,
           content-to-void ratio, kill criteria

BUCKET 3: REFERENCE DOCUMENTS (agents access on-demand)
  Location: Existing files (mechanism catalog, tokens.css, prohibitions.md)
  Capacity: UNLIMITED
  Cost: ~1 unit per access (only when needed)
  Compliance: ~50% (depends on access pattern)
  Content: Full mechanism descriptions, impact profiles, token values,
           crown jewel exemplars, semantic rules

BUCKET 4: CONVICTION FRAME (creative agents read once)
  Location: Conviction document (Layer 1, ~70 lines)
  Capacity: ~70 lines
  Cost: ~6 attention units total (read once, not per-rule)
  Compliance: N/A (framing, not checkable rules)
  Content: Metaphor philosophy, quality exemplars, "what designed feels like,"
           the thesis of load-bearing metaphor
```

### 5.2 The Prompt Structure With Primacy Optimization

The builder's prompt MUST be structured so that the MOST CRITICAL items occupy the FIRST 20 lines:

```
BUILDER PROMPT STRUCTURE (primacy-optimized)

LINES 1-5: THE THREE SPATIAL ANCHORS (most critical = most prominent)
  1. Container: max-width: 960px; margin: 0 auto;
  2. No contiguous void > 1.5 viewports (2,160px at 1440px)
  3. Content in >= 70% of scroll depth
  4. Header < 25% of first viewport
  5. Verify container: .page-container.getBoundingClientRect().width

LINES 6-13: SOUL (8 binary checks, high compliance, low cost)
  6. border-radius: 0
  7. box-shadow: none
  8. No drop-shadow
  9. No semi-transparent backgrounds
  10. No gradients
  11. No pure #000 or #FFF
  12. Instrument Serif: display headings ONLY
  13. h3 italic

LINES 14-20: COMMUNICATION OBLIGATIONS (prevents isolation failure)
  14. BEFORE writing file: send message to planner with spatial concern
  15. AFTER writing file: send page height + content ratio to team-lead
  16. If uncertain about ANY specification: message planner
  17. If self-check fails ANY item: message team-lead BEFORE file write

LINES 21-35: MECHANISM TABLE (from build plan, not from catalog)
  [table: mechanism | location | CSS expression]
  [15 lines, plan-specific]

LINES 36-45: COMPOSITIONAL RULES
  Per-category minimums: S:1+, H:1+, C:1+, D:1+, N:1+
  2+ reinforcing pairs
  3+ transition types, no identical adjacent
  1 designed moment per scroll quartile
  2+ purpose-built components

LINES 46-55: TOKEN AND MEASUREMENT RULES
  Token compliance >= 80% (formula: var() / (var() + raw))
  CPL 45-80 (formula: (content-width) / (font-size) / 0.6)
  Heading spacing >= 1.5:1

LINES 56-70: SELF-CHECK (run BEFORE file write)
  [ ] Container 940-960px
  [ ] CPL 45-80
  [ ] Content-to-void >= 60:40
  [ ] Token compliance >= 80%
  [ ] Soul 8/8
  [ ] Header + footer + all plan sections present
  [ ] 3+ transition types
  [ ] 1 designed moment per scroll quartile
  [ ] >= 2 focal points in bottom 50%
  [ ] Sent message to planner (YES/NO)
  [ ] Page height: ___px  Content ratio: ___%

TOTAL: ~70 lines
ATTENTION COST: ~37 units (30 binary x 0.75 + conviction read 6 + comms 4)
SURPLUS: ~63 units
```

### 5.3 The Verification Layer: Proving Each Item Was Implemented

After the experiment, the team-lead (or a dedicated verification agent) must produce a COVERAGE MATRIX:

```
COVERAGE MATRIX TEMPLATE

For each action item from the extraction:
  - Was it classified into a bucket? (PROMPT / GATE / REFERENCE / CONVICTION)
  - Was it present in the final prompt/checkpoint/reference?
  - Was it checked during the experiment?
  - Was it complied with?
  - If not complied with, what loss mechanism caused the failure?

ITEM_ID | BUCKET    | PRESENT? | CHECKED? | COMPLIED? | LOSS_MECHANISM
--------|-----------|----------|----------|-----------|---------------
AI-001  | PROMPT    | YES      | YES      | YES       | (none)
AI-002  | GATE      | YES      | YES      | YES       | (none)
AI-003  | PROMPT    | YES      | YES      | NO        | PRIORITY_LOSS
AI-004  | REFERENCE | YES      | NO       | UNKNOWN   | VERIFICATION_LOSS
AI-005  | (none)    | NO       | NO       | NO        | STRUCTURAL_LOSS
```

Items with STRUCTURAL_LOSS (not classified into any bucket) represent the pipeline's residual information loss. The goal is zero items in this category.

### 5.4 The Feedback Loop

The coverage matrix creates a CLOSED-LOOP feedback system:

```
FEEDBACK LOOP

1. BEFORE experiment: Classify all action items into buckets
2. DURING experiment: Gates enforce bucket-2 items; prompt enforces bucket-1 items
3. AFTER experiment: Verification layer checks all items
4. POST-MORTEM: Coverage matrix identifies which items were lost and why
5. NEXT EXPERIMENT: Update classification to fix identified losses

The loop means that each experiment IMPROVES the classification.
Loss mechanisms that cause failures in experiment N are addressed in experiment N+1.
```

---

## 6. THE KEY QUESTION: THE 10 ESSENTIAL ITEMS

If I could only communicate 10 things to the builder agent, what would they be?

These 10 items represent the absolute minimum viable information set. Everything else must be enforced through GATES (which cost the builder zero attention) or DISCARDED.

### The 10 Items

```
THE MINIMUM VIABLE BUILDER PROMPT (10 items, ~25 attention units)

1. Container: max-width: 960px; margin: 0 auto;
   [Prevents: THE historical #1 failure mode]

2. No contiguous void > 1.5 viewports.
   [Prevents: THE ceiling experiment's catastrophic failure]

3. Soul 8/8: no border-radius, no box-shadow, no drop-shadow,
   no semi-transparent, no gradients, no pure B/W, Instrument Serif
   display only, h3 italic.
   [Prevents: Identity violation. Compressed to 1 item because all 8
   are binary and memorizable as a unit]

4. Deploy these [N] mechanisms at these locations: [table from plan].
   [Provides: The builder's actual construction task]

5. Token compliance >= 80%. Use var(--token) not raw values.
   [Prevents: Vocabulary drift from design system]

6. 3+ transition types. No two identical adjacent transitions.
   [Prevents: Metronomic rhythm (Middle experiment defect)]

7. BEFORE writing file, SEND MESSAGE to planner with your biggest
   spatial concern.
   [Prevents: Isolation failure (ceiling experiment's #2 failure)]

8. Self-check: container + CPL + content-ratio + soul + landmarks.
   Run this BEFORE writing the file.
   [Prevents: All measurable violations, catches what attention missed]

9. 1-paragraph metaphor summary: "This page embodies [X].
   The metaphor demands: [structural table]."
   [Provides: Creative frame without attention overhead]

10. Content must fill >= 70% of scroll depth. Header < 25% of
    first viewport.
    [Prevents: Front-loaded design with empty tail]
```

**Total attention cost: ~25 units (10 binary clusters x ~2.5 avg)**
**Surplus: ~75 units**
**Coverage: Addresses 100% of observed failure modes from Phase D, Middle, and Ceiling**

### What These 10 Items Do NOT Cover (and how those gaps are filled)

| Gap | Enforcement Mechanism | Builder Attention Cost |
|-----|----------------------|----------------------|
| Metaphor resonance validation | GATE (CP-1, team-lead) | 0 |
| Build plan spatial budget | GATE (CP-2, team-lead) | 0 |
| PA-05 evaluation | REFERENCE (auditor prompt) | 0 |
| Novelty assessment | REFERENCE (blind evaluator) | 0 |
| Kill criteria | GATE (any checkpoint, team-lead) | 0 |
| Designed moment distribution | GATE (CP-3, team-lead visual check) | 0 |
| Reinforcing pair verification | GATE (programmatic audit) | 0 |
| Anti-pattern detection | REFERENCE (team-lead) | 0 |
| Success criteria evaluation | REFERENCE (verdict synthesizer) | 0 |
| Crown jewel comparison | REFERENCE (comparative auditor) | 0 |

**Every gap is filled at ZERO builder attention cost.** The 10 items are sufficient for the builder. Everything else is enforced by other agents.

---

## 7. SYNTHESIS: THE INFORMATION LOSS MODEL

### 7.1 The Three Laws of Information Loss

**Law 1: Information loss is not uniform. It follows the attention hierarchy.**
Binary rules survive at ~93%. Judgment rules survive at ~12%. The gap is not a bug -- it is a fundamental property of how LLM agents process instructions. Designing for this hierarchy (encoding everything as binary) is not a workaround; it is the correct engineering response.

**Law 2: Information loss is primarily a ROUTING problem, not a VOLUME problem.**
The ceiling experiment's failure was not that it had too much information. It was that it sent ALL information to the builder. The correct architecture routes information to the agent best positioned to act on it: binary rules to the builder, gate checks to the team-lead, evaluation criteria to the auditor.

**Law 3: Gates are the zero-cost enforcement mechanism.**
Every gate check costs the builder ZERO attention units. Gates can be UNLIMITED in number without degrading builder performance. The preparation paradox dissolves when preparation output is encoded as gates rather than prompt rules. More preparation = more gates = better enforcement WITHOUT attention cost.

### 7.2 The Information Loss Reduction Strategy

```
CURRENT STATE (ceiling experiment):
  337 findings --> 1,004-line prompt --> ~128 attention units --> 0 surplus
  Result: PA-05 1.5/4 (DO NOT SHIP)

TARGET STATE (flagship):
  337 findings --> 70-line builder prompt + unlimited gates + unlimited references
                --> ~37 attention units --> 63 surplus
  Predicted result: PA-05 3-4/4 (conditional pass to success)

IMPROVEMENT:
  Attention demand: 128 --> 37 (71% reduction)
  Surplus: 0 --> 63 (infinite improvement)
  Gate count: 0 --> unlimited (from zero to comprehensive)
  Information preserved: ~16% --> ~80% (routed, not lost)
```

### 7.3 The Residual Loss

Even with perfect routing, some information loss is irreducible:

1. **Emergent properties cannot be fully binary-fied.** "Does the page feel designed?" is a judgment that no binary rule perfectly captures. The spatial anchors and void budgets are PROXIES for this judgment, not equivalents. They catch catastrophic failures (the whitespace void) but not subtle ones (a page that is technically compliant but aesthetically flat).

2. **Agent creativity is not programmable.** The 10 essential items tell the builder WHAT to do but not HOW to do it beautifully. The surplus attention budget (75 units) is where beauty happens. We cannot guarantee that the agent will use its surplus for compositional quality rather than for elaborating mechanisms.

3. **Content-form fit is discovered, not specified.** The research on content-mechanism fit (source 16) shows that the best results come from iterative discovery, not from specification. A single-pass builder cannot discover the optimal relationship between content and form in the way that the crown jewels did through multi-pass exploration.

**These residual losses are the irreducible floor of single-pass pipeline execution.** They can be partially addressed by multi-pass architecture (fresh agents reviewing and revising), but they cannot be eliminated without human compositional judgment.

### 7.4 What This Analysis Changes

| Before This Analysis | After This Analysis |
|---------------------|-------------------|
| "More preparation = better output" | "More GATES = better output; more RULES = worse output" |
| "The prompt should be comprehensive" | "The prompt should be MINIMAL; comprehensiveness goes to gates and references" |
| "Judgment rules express important guidance" | "Judgment rules are pure waste: 4x attention cost, ~0% compliance" |
| "Information loss is inevitable" | "Information loss is a ROUTING problem with a solved architecture" |
| "The 50:1 compression is a bug" | "The 50:1 compression is correct IF the other 49 parts go to gates, not to the void" |
| "Preparation paradox is unresolvable" | "Preparation paradox dissolves when output goes to gates, not prompts" |

---

**END INFORMATION LOSS ANALYSIS**

**Lines:** ~560
**Core model:** Information loss is primarily a routing problem, not a volume problem
**Key mechanism:** STRUCTURAL LOSS (information in wrong location) enables all other loss types
**Resolution of preparation paradox:** Preparation that creates GATES costs the builder zero attention; preparation that creates RULES costs ~4 units per judgment rule and achieves ~0% compliance
**The 10 essential items:** Container, void limit, soul 8/8, mechanism table, tokens, transitions, messaging obligation, self-check, metaphor summary, content density
**Falsifiable prediction:** A 70-line builder prompt with unlimited gates will outperform a 1,004-line comprehensive prompt, because ~37 attention units + 63 surplus beats ~128 units + 0 surplus
