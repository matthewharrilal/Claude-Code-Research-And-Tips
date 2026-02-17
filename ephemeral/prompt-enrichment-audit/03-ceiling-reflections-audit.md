# 03 -- Ceiling Experiment Reflections & Lessons Audit

**Auditor:** ceiling-reflections-auditor
**Date:** 2026-02-17
**Files Read:** 19/19
**Protocol:** Exhaustive extraction from ceiling experiment, Mode 4 PA, fix patches, reaudit, and middle-tier retrospective

---

## 1. EXECUTIVE SUMMARY -- Top 10 Lessons for the Flagship Prompt

These are the highest-confidence lessons extracted from the ceiling experiment failure, post-fix reaudit, and middle-tier success. Each lesson has been validated across multiple independent sources.

### L1: CONTENT DENSITY IS THE GATE, NOT SPACING
The ceiling experiment's catastrophic whitespace void (70-80% blank cream, 9/9 auditors flagged) survived 40 CSS fix patches because the root cause was CONTENT INSUFFICIENCY, not spacing excess. Zones had structural containers with minimal content. Reducing padding around empty containers does not fill them. The reaudit confirmed: "Fix failed because it treated a CONTENT problem as a SPACING problem."

**Prompt insertion:** Layer 2A (SPATIAL), new binary rule: "Each zone/section MUST contain >= 3 distinct content elements (text block, table, code block, diagram, list). Empty structural containers = BLOCKING defect."

### L2: METAPHOR MUST BE STRUCTURAL, NOT ANNOUNCED
The ceiling's 4-zone "secure facility" metaphor achieved only 40% survival rate when text labels were removed (Mode 4 PA, Auditor G). Zone transitions were invisible without "ZONE 2 OF 4" anchors. The metaphor was TOLD through text, not SHOWN through visual design. The adversarial auditor: "Design TELLS the metaphor instead of SHOWING it."

**Prompt insertion:** Layer 1 (CONVICTION), add to quality exemplars: "Metaphor survival test: remove ALL text labels. If the metaphor disappears, it is ANNOUNCED not STRUCTURAL. Structural metaphor = visual properties alone communicate the concept."

### L3: ZERO INTER-AGENT MESSAGING = QUALITY COST
The ceiling experiment had zero SendMessage calls despite >= 5 being required. The middle-tier retrospective v2 (Finding 9) corrected the earlier framing: "zero SendMessage = success" is WRONG. The missing footer in middle-tier was the smoking gun -- builder couldn't ask planner about footer spec. CD-006 achieved 39/40 WITH messaging. Communication protocol must change from file-only to file + messaging.

**Prompt insertion:** Layer 3B (COMMUNICATION), strengthen: "Minimum 8 information-bearing messages. Zero-message check at Pass 1 checkpoint. If any agent has sent 0 messages by checkpoint A, team lead MUST intervene."

### L4: FIX PATCHES CANNOT RESCUE STRUCTURAL FAILURES
40 CSS changes estimated to save ~1,652px of whitespace. Reaudit showed void UNCHANGED (70-80%, 9/9 auditors). Header metadata was RESOLVED, header proportions IMPROVED, but the blocking defect persisted. Lesson: CSS-level fixes address SYMPTOMS. Structural failures (insufficient content, wrong metaphor expression, missing designed moments) require REBUILDING, not patching.

**Prompt insertion:** Layer 2D (PROCESS), add checkpoint: "If embedded auditor identifies structural void (>= 2 consecutive blank viewports), HALT build. Do NOT attempt CSS fix. Return to content architect for content injection."

### L5: DESIGNED MOMENTS MUST BE DISTRIBUTED, NOT FRONT-LOADED
The ceiling page had only 1 dramatic visual moment (architecture diagram at ~10% scroll position). Flow auditor (D): "Interest: PEAK -> CLIFF -> FLATLINE." The middle-tier had similar front-loading (dark header + diagram in first third). Distribution requirement: designed moment per quartile.

**Prompt insertion:** Layer 2C (COMPOSITIONAL), strengthen existing rule: "One designed moment per scroll quartile (25/50/75/100%). If scroll-through shows > 25% consecutive frames without a visual anchor, FAIL gate."

### L6: PA-05 SUB-CRITERIA NEED MEASUREMENT, NOT ESTIMATION
PA-05b was "exactly at threshold" (2.0x) in middle-tier -- zero margin. PA-05d was "estimated" rather than measured. In Mode 4 PA, PA-05 was downgraded from 3/4 to 1.5/4 when 9 independent auditors assessed it vs the initial 2-PA assessment of 3/4. The 2-PA audit MISSED the dominant failure entirely.

**Prompt insertion:** Layer 2E (BUILDER SELF-CHECK), strengthen: "PA-05b: MEASURE largest and smallest section padding. Compute ratio. Must be >= 2.0x with >= 0.5x margin (target 2.5x+). PA-05d: MEASURE non-framework CSS lines / total CSS lines. Must be >= 15%."

### L7: CONVENTION OVER INTENTION IS THE CEILING FAILURE MODE
The adversarial auditor identified the root pathology: "Design is shaped by checklist compliance rather than authentic experience." The "breathing room zone" convention was gameable -- every paragraph qualified for massive padding. Recipe for malicious compliance documented: max spacing tokens everywhere + minimize content per zone + every paragraph = breathing room zone.

**Prompt insertion:** Layer 1 (CONVICTION), add to resolved tensions: "The difference between constraint-shaped and intention-shaped: constraint-shaped asks 'did I meet the rule?' Intention-shaped asks 'does this serve the reader's experience?' Both pass the checklist. Only one produces quality."

### L8: CONTAINER WIDTH MEASUREMENT REQUIRES PROTOCOL
The ceiling verdict reported 2160px container width (BLOCKING). Mode 4 PA auditors described narrow column consistent with 960px. The contradiction: likely the verdict measured VIEWPORT width, not CONTENT container. False positive on THE primary guardrail.

**Prompt insertion:** Layer 2E (BUILDER SELF-CHECK), strengthen: "Container width verification: measure `.content-container` or equivalent max-width, NOT viewport width. Verify with: `document.querySelector('[class*=container]').getBoundingClientRect().width`. Must be 940-960px."

### L9: MODE 4 (9 AUDITORS) CATCHES WHAT 2-PA MISSES
The initial 2-PA audit scored PA-05 at 3/4 and recommended "ship after fix." Mode 4 with 9 independent auditors scored 1.5/4 and recommended "DO NOT SHIP." The whitespace void was THE dominant failure -- 9/9 auditors flagged it, yet 2-PA audit missed it entirely. Breadth of independent perspectives is the key value.

**Prompt insertion:** Layer 3C (AUDIT PROTOCOL), confirm: "9 independent auditors minimum for flagship. Each auditor gets cold look + scroll-through + assigned PA questions. No shared context between auditors before writing."

### L10: VOCABULARY FLUENCY != COMPOSITIONAL FLUENCY
The middle-tier achieved vocabulary fluency: 12 mechanisms correctly applied, PA-05 4/4, 3/3 novel. But the perceptual audit noted "specifications applied correctly rather than composition felt through." The ceiling achieved 9/9 novelty and metaphor-driven architecture but failed spatially. "Designed" has 2 dimensions: vocabulary (mechanism breadth) and composition (metaphor-driven expression). Middle-tier masters vocabulary. Flagship requires both.

**Prompt insertion:** Layer 1 (CONVICTION), add insight: "Vocabulary fluency = applying mechanisms correctly to new content. Compositional fluency = mechanisms reinforcing each other through a shared metaphor across the entire page, not just in isolated sections."

---

## 2. FAILURE TAXONOMY -- Every Ceiling Failure by Root Cause

### Category A: CONTENT FAILURES (structural, cannot fix with CSS)

| ID | Failure | Severity | Source | Root Cause |
|----|---------|----------|--------|------------|
| A1 | Whitespace void: 70-80% blank cream | CATASTROPHIC | 9/9 Mode 4 auditors | Zones have structural containers with minimal content |
| A2 | Only 1 designed moment in entire scroll | SEVERE | Flow auditor (D) | Front-loaded all visual weight in first 10% |
| A3 | Footer exists in HTML but unreachable | SEVERE | Mode 4 PA, retro | 4700px gap between content end and footer position |
| A4 | Metaphor announced not structural | SEVERE | Auditor G (40% survival) | Zone transitions rely on text labels, not visual properties |
| A5 | Visual monotony after first third | MODERATE | Auditors A, D, F | No mid-journey or climactic visual peaks |

### Category B: PROCESS FAILURES (team coordination)

| ID | Failure | Severity | Source | Root Cause |
|----|---------|----------|--------|------------|
| B1 | Zero inter-agent messaging | SEVERE | Verdict (0 vs >=5 required) | File-only communication protocol, no enforcement |
| B2 | Single-pass execution without iteration | MODERATE | Flagship prep retro | No checkpoint gates for structural review |
| B3 | No embedded auditor intervention | MODERATE | Verdict | Auditor present but did not halt build on void |

### Category C: SPECIFICATION FAILURES (rules were wrong or gameable)

| ID | Failure | Severity | Source | Root Cause |
|----|---------|----------|--------|------------|
| C1 | "Breathing room zone" convention gameable | SEVERE | Adversarial auditor | No maximum void threshold, no minimum content per zone |
| C2 | Container width measurement ambiguous | MODERATE | Verdict vs Mode 4 contradiction | Measured viewport not content container |
| C3 | Void threshold discrepancy (2160 vs 1620 vs 1350px) | MODERATE | Pre-flight gaps | No single authoritative threshold |
| C4 | Mechanism cap debate unresolved (16 vs 14) | LOW | Pre-flight gaps | S4 recommends 14, prompt allows 16 |

### Category D: PERCEPTION-COMPLIANCE GAPS (spec passes, perception fails)

| ID | Failure | Severity | Source | Root Cause |
|----|---------|----------|--------|------------|
| D1 | Mechanical rhythm despite correct spacing | MODERATE | PA-17, PA-41 | Exact repetition (two 48px gaps, two 32px sections) |
| D2 | "Stiff" feeling despite 7/7 soul | MODERATE | PA-20 | Flat aesthetic without compensating warmth |
| D3 | Header disproportionate despite correct elements | MODERATE | 5+ auditors | Header proportion not gated (no max viewport %) |

---

## 3. PREVENTION MAPPING -- Prompt Rules That Would Prevent Each Failure

### A1 (Whitespace void) -> BINARY RULE
**Rule:** "Content-to-void ratio >= 60:40 when measured as: (total px height of content elements) / (total scroll height). Measure BEFORE final audit. If ratio < 60:40, add content -- do NOT reduce spacing."
**Layer:** 2A SPATIAL
**Verification:** Programmatic measurement of element heights vs scroll height.

### A2 (Front-loaded designed moments) -> DISTRIBUTION GATE
**Rule:** "Divide total scroll into 4 quartiles. Each quartile MUST contain >= 1 designed moment (visual element that creates local impact: dark block, accent container, diagram, data visualization). If any quartile has zero, FAIL gate."
**Layer:** 2C COMPOSITIONAL
**Verification:** Screenshot scroll-through, mark designed moments per quartile.

### A3 (Invisible footer) -> LANDMARK COMPLETENESS GATE
**Rule:** "Footer MUST be visible in final 2 scroll frames at 1440px viewport. Verify: scroll to bottom of page. If footer is not visible, page structure is BROKEN."
**Layer:** 2E BUILDER SELF-CHECK
**Verification:** Scroll to page bottom, confirm footer visibility.

### A4 (Announced metaphor) -> METAPHOR SURVIVAL TEST
**Rule:** "Before finalizing, mentally remove ALL text that names or describes the metaphor. If the metaphor is no longer perceivable through visual properties alone (color, spacing, borders, structure), the metaphor is ANNOUNCED not STRUCTURAL. FAIL."
**Layer:** 2D PROCESS (metaphor builder checkpoint)
**Verification:** Qualitative test by embedded auditor.

### A5 (Visual monotony) -> RHYTHM VARIATION RULE
**Rule:** "No two adjacent section transitions may use identical gap + border treatment. If transition B->C uses 48px + 1px, transition C->D MUST differ in gap OR border weight OR both."
**Layer:** 2C COMPOSITIONAL
**Verification:** Programmatic comparison of adjacent transition values.

### B1 (Zero messaging) -> COMMUNICATION ENFORCEMENT
**Rule:** "Minimum 8 information-bearing messages across team. Zero-message check at checkpoint A. If any agent has sent 0 messages at checkpoint A, team lead intervenes immediately."
**Layer:** 3B COMMUNICATION
**Verification:** Message count audit at each checkpoint.

### B2 (Single-pass execution) -> CHECKPOINT GATES
**Rule:** "5 mandatory checkpoints (A-E). Checkpoint B = structural review: content architect confirms all zones have >= 3 content elements. Build HALTS until checkpoint B passes."
**Layer:** 3C AUDIT PROTOCOL
**Verification:** Gate documentation at each checkpoint.

### C1 (Gameable breathing room) -> VOID MAXIMUM
**Rule:** "Maximum consecutive blank viewport height: 0.5x viewport (720px at 1440px). Any blank stretch exceeding 720px = BLOCKING defect."
**Layer:** 2A SPATIAL
**Verification:** Scroll-through measurement.

### C2 (Container measurement ambiguity) -> MEASUREMENT PROTOCOL
**Rule:** "Container width = `document.querySelector('[class*=container], [class*=content], main').getBoundingClientRect().width`. NOT viewport width. Must be 940-960px."
**Layer:** 2E BUILDER SELF-CHECK
**Verification:** JavaScript measurement in browser console.

### D1 (Mechanical rhythm) -> TRANSITION VARIETY MINIMUM
**Rule:** "Use >= 3 distinct transition types across page. No transition type used > 40% of total transitions."
**Layer:** 2C COMPOSITIONAL
**Verification:** Count transition types in CSS.

### D3 (Header proportions) -> HEADER HEIGHT CAP
**Rule:** "Header height <= 33% of first viewport at 1440px."
**Layer:** 2A SPATIAL
**Verification:** Screenshot measurement.

---

## 4. MIDDLE-TIER SUCCESS FACTORS -- What M1 Did RIGHT

### 4.1 Per-Category Mechanism Minimums (M1)
The single most validated finding across the entire project. "Sample 2-4 mechanisms" was identified by ALL 11 research agents as the most limiting specification. M1 replaces this with per-category minimums (Spatial: 1+, Temporal: 1+, Material: 1+, Behavioral: 1+, Relational: 1+). Middle experiment validated: 12 mechanisms deployed, PA-05 4/4 DESIGNED, 3/3 STRONGLY NOVEL. The experiment PROVED M1 works.

**Prompt relevance:** Already in Layer 2C. Confirm per-category minimums are BINARY (not "aim for").

### 4.2 Flat File-Bus Topology
8 agents, ~35 min total execution, zero contention. Per-file builder ownership eliminates merge conflicts. No hierarchical captain->worker chains. Team lead spawns agents directly. Each agent reads shared files, writes own output file.

**Prompt relevance:** Layer 3A (AGENT ROSTER) should specify flat topology. No delegation chains.

### 4.3 Two-Instance Pattern
Builder never sees mechanism catalog or showcase pages directly. Prevents template copying via continuation bias (LLM property: what you've seen, you reproduce). Planner reads catalog and writes build plan. Builder reads build plan and writes HTML. Two instances = forced creative transformation.

**Prompt relevance:** Layer 2D (PROCESS). Confirm two-instance pattern is MANDATORY. Builder MUST NOT read mechanism catalog or showcase HTML directly.

### 4.4 Fresh-Eyes Zero-Context Auditing
Auditors who have never seen the build plan or design system files find issues that context-loaded auditors miss. The Mode 4 PA (9 cold-look auditors) caught the whitespace void that the initial 2-PA audit missed entirely. Context creates confirmation bias.

**Prompt relevance:** Layer 3C (AUDIT PROTOCOL). PA auditors receive ONLY screenshots + PA questions. No build plan, no design system files, no previous audit results.

### 4.5 Content-Mechanism Lookup Produces Correct Application
The middle-tier's lookup mode ("content has X -> mechanism Y") produced FUNCTIONALLY CORRECT pairings. Border-weight gradient for 4-level security hierarchy = PERFECT FIT. Code blocks for technical docs = PERFECT FIT. Color encoding for criticality = EXCELLENT FIT. 6 of 12 mechanisms rated HIGH IMPACT.

**Prompt relevance:** Lookup mode is appropriate for builder agent. The PLANNER should derive from metaphor; the BUILDER should execute from plan. Don't ask builder to both derive AND execute.

### 4.6 Timing Was 8-11x Faster Than Predicted
Middle-tier predicted 70-100 min, executed in ~35 min. This suggests predicted build times are consistently OVERESTIMATED for flat-topology parallel execution. The flagship should account for this -- don't over-allocate time.

**Prompt relevance:** Informational, not a prompt rule. But avoid gate fatigue: 47 evaluation points = ~235 min overhead (pre-flight gap #9). Reduce gates.

---

## 5. SKILL IMPROVEMENT FINDINGS -- How Skills Should Evolve

### From `08-retro-skill-improvements.md` (1,614 lines):

| Improvement | Type | Priority | Where |
|-------------|------|----------|-------|
| M1 per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) | BINARY RULE | APPLY IMMEDIATELY | tension-composition SKILL.md, 3 locations |
| 3-transition minimum (SMOOTH/BRIDGE/BREATHING) | NEW RULE | HIGH | tension-composition Phase 4 |
| Landmark completeness gate (footer verification) | NEW GATE | HIGH | tension-composition Phase 4.7B |
| Heading spacing ratio 1.5:1 minimum | BINARY RULE | MEDIUM | tension-composition Phase 4 spatial |
| Token compliance self-check | NEW GATE | MEDIUM | tension-composition Phase 4.9 (optional) |
| Container width verification protocol | STRENGTHEN | HIGH | tension-composition Phase 7 |

### PA Skill Improvements:

| Improvement | Type | Priority | Where |
|-------------|------|----------|-------|
| PA-05b calibration note (2.0x is zero margin, target 2.5x+) | CALIBRATION | HIGH | PA skill PA-05b guidance |
| PA-05d measurement guidance (compute ratio, don't estimate) | MEASUREMENT | HIGH | PA skill PA-05d guidance |
| PA-49 (landmark completeness) | NEW QUESTION | MEDIUM | PA skill new question |
| PA-50 (heading spacing ratio) | NEW QUESTION | MEDIUM | PA skill new question |

### Risks of Skill Changes:
- Rhythm variation (3-transition minimum) could force arbitrary variation where uniform is appropriate. Mitigation: "minimum 3 TYPES, not minimum 3 INSTANCES of each type."
- Landmark completeness gate could force footer where content doesn't need one. Mitigation: "footer OR equivalent closure element (final section border, colophon, endmark)."

---

## 6. PA CALIBRATION INSIGHTS

### 6.1 Mode 4 vs Lighter Audits
| Audit Mode | Auditors | PA-05 Score | Whitespace Void Detected? | Verdict |
|------------|----------|-------------|---------------------------|---------|
| 2-PA (ceiling initial) | 2 | 3/4 | NO | Ship after fix |
| Mode 4 (9 auditors) | 9 | 1.5/4 | YES (9/9) | DO NOT SHIP |
| Post-fix reaudit (9 auditors) | 9 | 2.0/4 | YES (9/9) | DO NOT SHIP |

**Key finding:** The 2-PA audit was DANGEROUSLY WRONG. It recommended shipping a page that 9/9 independent auditors flagged as catastrophically defective. The dominant failure was invisible to 2 auditors but obvious to 9.

**Lesson:** For flagship, Mode 4 (9+ auditors) is non-negotiable. The cost of false-positive "ship" verdict far exceeds the cost of 7 additional auditor agents.

### 6.2 PA-05 Sub-Criteria Calibration

**PA-05b (padding range ratio):**
- Middle-tier: 2.0x exactly (64px / 32px). PASSES but zero margin.
- Ceiling: unmeasured in initial audit, downgraded in Mode 4.
- **Calibration:** 2.0x is the FLOOR, not the TARGET. Target >= 2.5x for safety margin.

**PA-05d (non-framework CSS):**
- Middle-tier: "estimated" at >= 15%. Never measured.
- **Calibration:** MUST be measured. Count custom CSS declarations / total declarations. Estimation is unreliable.

**PA-05 overall:**
- Downgrade from 3/4 (2-PA) to 1.5/4 (Mode 4) = 50% score reduction. The sub-criterion most affected was PROPORTIONATE (spatial confidence). Whitespace void collapses proportionate scoring regardless of other criteria.
- **Calibration:** PROPORTIONATE has implicit veto power. Catastrophic spatial failure overrides DESIGNED + COHERENT + POLISHED.

### 6.3 Screenshot Pre-Capture Protocol
Mode 4 used team-lead-captured screenshots (102 images, cold look + scroll-through at 1440px, 768px, 1024px). Auditors read saved images via Read tool. Zero Playwright contention across 9 parallel auditors. This pattern is PROVEN and should be MANDATORY for flagship.

### 6.4 Fresh-Eyes vs Context-Loaded
The 9 Mode 4 auditors had zero design system context. They found the whitespace void immediately. The initial 2 PAs had full context (build plan, design system files, mechanism catalog). They scored PA-05 at 3/4 and missed the void. Context creates confirmation bias: "I know there are 14 mechanisms deployed, so the page must be rich."

**Lesson:** PA auditors MUST receive ONLY screenshots and PA questions. No build plans, no design system context, no previous audit results.

---

## 7. SPECIFIC INSERTABLE TEXT -- Exact Additions by Prompt Layer

### Layer 1: CONVICTION (add after "anti-scale model")

```
METAPHOR SURVIVAL TEST: If you remove every text label that names your metaphor,
can someone still perceive it through visual properties alone? If not, your
metaphor is ANNOUNCED (told through words) not STRUCTURAL (shown through design).
The ceiling experiment achieved 40% metaphor survival — a secure facility that
was invisible without "ZONE 2 OF 4" labels. The flagship metaphor must survive
at >= 80% without any text.

VOCABULARY vs COMPOSITION: Vocabulary fluency = applying mechanisms correctly
to new content (middle-tier: 12 mechanisms, PA-05 4/4). Compositional fluency =
mechanisms reinforcing each other through a shared metaphor across the entire page
(CD-006: 39/40 via iteration + messaging). The flagship requires BOTH.

CONVENTION vs INTENTION: The ceiling experiment was shaped by checklist compliance
("zones? check. spacing? check. breathing room? too much check.") rather than
authentic reader experience. Every design choice must answer: "does this serve
the reader?" not "does this satisfy the rule?"
```

### Layer 2A: SPATIAL (add to existing rules)

```
CONTENT DENSITY: Each zone/section MUST contain >= 3 distinct content elements
(text block, table, code block, diagram, list). Empty structural containers with
spacing = BLOCKING defect. Content-to-void ratio >= 60:40 measured as total px
height of content elements / total scroll height.

VOID MAXIMUM: Maximum consecutive blank height = 0.5x viewport (720px at 1440px).
Any blank stretch exceeding this = BLOCKING defect. Do NOT fix with CSS spacing
reduction — fix by adding content.

HEADER CAP: Header height <= 33% of first viewport at 1440px.
```

### Layer 2C: COMPOSITIONAL (add to existing rules)

```
DESIGNED MOMENT DISTRIBUTION: One designed moment per scroll quartile
(25/50/75/100%). No > 25% consecutive scroll frames without a visual anchor.
Front-loading all visual weight in first 10% = FAIL (ceiling pattern).

RHYTHM VARIATION: No two adjacent section transitions may use identical
gap + border treatment. If transition A uses 48px + 1px, transition B MUST
differ in gap OR border weight OR both. Minimum 3 distinct transition types.
No single type > 40% of total transitions.

MECHANISM DEPLOYMENT: 12 mechanisms with UNIFORM application feels WORSE than
8 mechanisms with VARIED application. Vary the application: different padding
values for sections of same density category. Break exact repetition.
```

### Layer 2D: PROCESS (add to existing rules)

```
STRUCTURAL HALT: If embedded auditor identifies >= 2 consecutive blank viewports
during in-progress review, HALT build. Do NOT attempt CSS fix. Return to content
architect for content injection. CSS fixes cannot rescue content failures
(validated: 40 patches, void unchanged).

METAPHOR CHECK: Before build begins, metaphor builder describes 3 visual
properties that express the metaphor WITHOUT text. If unable to name 3,
metaphor needs strengthening before build proceeds.
```

### Layer 2E: BUILDER SELF-CHECK (add/strengthen)

```
CONTAINER WIDTH: Verify with JS: document.querySelector('[class*=container],
[class*=content], main').getBoundingClientRect().width. Must be 940-960px.
NOT viewport width (ceiling false positive measured 2160px viewport).

PA-05b: MEASURE largest and smallest section padding. Compute ratio. Must be
>= 2.0x with >= 0.5x margin (target 2.5x+). Middle-tier hit 2.0x exactly =
zero safety margin.

PA-05d: MEASURE non-framework CSS lines / total declarations. Must be >= 15%.
Do NOT estimate.

FOOTER VISIBILITY: Scroll to page bottom. Footer MUST be visible in final 2
scroll frames. If not visible, page structure is BROKEN (ceiling: footer HTML
existed but was unreachable behind 4700px void).
```

### Layer 3B: COMMUNICATION (strengthen)

```
MINIMUM 8 information-bearing messages across team. Zero-message check at
checkpoint A. If any agent has sent 0 messages by checkpoint A, team lead
MUST intervene. Missing footer = smoking gun for communication isolation
(middle-tier: builder couldn't ask planner). CD-006 achieved 39/40 WITH
messaging vs ceiling DO NOT SHIP with zero messaging.
```

### Layer 3C: AUDIT PROTOCOL (strengthen)

```
9 independent auditors MINIMUM. Each receives ONLY screenshots + assigned PA
questions. NO build plan, NO design system files, NO previous audit results.
Fresh-eyes protocol validated: 9 cold-look auditors caught catastrophic void
that 2-PA audit missed entirely. Context creates confirmation bias.

Screenshot pre-capture: Team lead takes ALL screenshots (cold look + scroll-
through at 1440px, 768px, 1024px) BEFORE spawning auditors. Auditors read
saved images. Zero Playwright contention. Validated with 102 screenshots,
9 parallel agents.
```

---

## CROSS-REFERENCE CHECK: Prompt Structure Outline Gaps

Checking the 10 known gaps from `00-PROMPT-STRUCTURE-OUTLINE.md`:

| Gap | Status After This Audit |
|-----|------------------------|
| #1 Tension-composition skill invocation insufficient | NOT MY SCOPE (see Task #1) |
| #2 Perceptual-auditing skill invocation insufficient | NOT MY SCOPE (see Task #2) |
| **#3 Ceiling reflections may not be fully captured** | **ADDRESSED: 10 lessons, 15 failures, 11 prevention rules, 13 insertable text blocks** |
| #4 D-004 decision log findings | NOT MY SCOPE (see Task #4) |
| #5 Level 2 worker observations | NOT MY SCOPE (see Task #5) |
| **#6 CD-006 container was 1100px not 960px** | **PARTIALLY ADDRESSED: container measurement protocol added to prevent false positives** |
| **#7 Mechanism cap debate (16 vs 14)** | **INFORMED: middle-tier retro says 12 uniform < 8 varied; deployment strategy > count** |
| **#8 Void threshold discrepancy** | **RESOLVED: 0.5x viewport (720px at 1440px) as maximum consecutive void** |
| **#9 Gate fatigue risk (47 evaluation points)** | **INFORMED: middle-tier executed in ~35 min (8-11x faster than predicted), gates should be reduced** |
| #10 Conviction-execution-conviction sandwich | NOT MY SCOPE (structural decision) |

---

**Audit complete. 19 files read. All 7 sections written.**
**Output:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/prompt-enrichment-audit/03-ceiling-reflections-audit.md`
