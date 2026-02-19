# 16 -- Agent Topology Failure Analysis

**Analyst:** topology-analyst (Opus 4.6)
**Date:** 2026-02-17
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (Sections C1-C6), all flagship-experiment/ build artifacts, review-notes.md, 00-AUDIT-DATA.md, _perceptual-audit/ reports, middle-tier 09-MASTER-RETROSPECTIVE.md (Finding 9)

---

## EXECUTIVE SUMMARY

The flagship experiment's agent topology was DESIGNED but PARTIALLY EXECUTED. A true multi-agent team of 19 agents was deployed across 5 passes with genuine per-file ownership and gate enforcement. However, the communication protocol -- identified by prior research as THE key quality differentiator -- was NOT executed as specified. Zero inter-agent SendMessage calls occurred despite the prompt mandating "minimum 8 substantive messages" and 6 specific communication checkpoints (CP-A through CP-F). The topology delivered on STRUCTURE but failed on COMMUNICATION, and this failure directly explains the perceptual threshold gap (channel amplitudes below human perception) that is the experiment's defining shortcoming.

---

## QUESTION-BY-QUESTION ANALYSIS

### (a) Did the executing instance use a TEAM (multiple agents) or SINGLE AGENT doing everything?

**VERDICT: TRUE MULTI-AGENT TEAM -- 19 agents confirmed.**

Evidence from review-notes.md (lines 254-262):
```
Agents Used:
- Pass 0: 3 (Content Architect, Metaphor Agent, Extract Creator)
- Pass 0.5: 1 (Planner)
- Pass 1: 2 (Skeleton A, Skeleton B)
- Pass 2: 1 (Mechanism Builder)
- Pass 3: 1 (Metaphor Builder)
- Pass 4: 1 (Intentionality Builder)
- Gate 5: 9 (PA Auditors 1-9)
- Total: 19 agents
```

This was NOT a single agent sequentially doing everything. The team-lead spawned separate agents for each pass. File timestamps confirm sequential execution with appropriate ordering:
- 00-content-inventory.md: 09:55
- 01-adapted-content.md: 09:57
- 02-metaphor-derivation.md: 09:57
- 03-build-plan.md: 10:07
- 04a-skeleton-a.html + 04b-skeleton-b.html: 10:13 (parallel, as specified)
- 04-skeleton.html: 10:19 (selected winner)
- 05-mechanisms.html: 10:27
- 06-metaphor.html: 10:41
- 07-intentionality.html: 11:08

Each agent produced exactly ONE file (per-file ownership), matching the prompt specification. The competitive skeleton build (A vs B) was executed as designed.

### (b) Were there actually multiple agents, or did one agent sequentially do all passes?

**VERDICT: TRULY SEPARATE AGENTS -- evidence is strong.**

Three lines of evidence confirm separate agents:

1. **Per-file ownership:** Each artifact is attributed to a different agent role. The review notes explicitly list "Content Architect," "Metaphor Agent," "Planner," "Skeleton A," "Skeleton B," "Mechanism Builder," "Metaphor Builder," "Intentionality Builder" as separate entities.

2. **Two-instance pattern honored:** The builder-prompt.md (71 lines, the 75-line visibility cap) is a SEPARATE document created specifically for Skeleton Builders. This would be unnecessary if a single agent were doing everything. The Extract Creator agent was spawned specifically to produce this distilled prompt.

3. **Competitive skeleton build:** Two parallel skeleton builders produced genuinely different outputs (Skeleton A: 8/8 pass; Skeleton B: 6/8, failed header+CPL). This proves at minimum TWO concurrent agents for Pass 1.

4. **Continuation bias absent:** The metaphor derivation (691 lines of TC pipeline) was produced by a separate Metaphor Agent, not the Content Architect. The build plan (718 lines) was produced by a separate Planner. These are distinct analytical voices with different scopes.

### (c) Did agents communicate via SendMessage or was it file-bus only?

**VERDICT: FILE-BUS ONLY -- ZERO SendMessage calls. This is the experiment's primary topology failure.**

Evidence:
- Grep for "SendMessage" / "sent message" / "messaged" / "communicated" across all flagship-experiment/ files returns ZERO hits related to actual inter-agent communication.
- The review-notes.md (the team-lead's log of the entire experiment) contains ZERO mentions of receiving or sending inter-agent messages.
- None of the 6 mandatory communication checkpoints (CP-A through CP-F) appear as executed in any build artifact. CP-F appears only as a REFERENCE FORMAT in the build plan ("CP-F Integration") and metaphor derivation ("CP-F Format") -- it was used as a DOCUMENT TEMPLATE, not as an actual message.

The master prompt was explicit (C2, line 502-503):
```
MEDIUM: SendMessage tool (NOT file-only). File artifacts supplement messages, never replace them.
Zero SendMessage = quality cost. CD-006 WITH messaging scored 39/40. Ceiling WITHOUT scored DO NOT SHIP.
```

And (line 515):
```
Minimum 8 substantive messages across experiment. Zero messages at Gate 1 = PAUSE BUILD.
```

The "PAUSE BUILD" trigger at Gate 1 was NEVER triggered, meaning the team-lead did not enforce the zero-message pause protocol. The team-lead evaluated files directly at each gate rather than requiring message-based checkpoints.

**Impact:** The prompt itself predicted this outcome: "Zero SendMessage = quality cost." The experiment confirms: 19 agents with zero messaging = PA-05 3/4 (DESIGNED, not CRAFTED). CD-006 with messaging = 39/40.

### (d) Did the Mechanism Builder actually READ the mechanism catalog?

**VERDICT: INDIRECT ONLY -- via build plan, not direct catalog access.**

The C1 spec (line 481) states:
```
Mechanism Builder (Sonnet): CSS mechanism application from build plan.
READS: build plan + tokens.css + prohibitions.md + 16-multi-coherence-invocation.md
```

Note: the mechanism-catalog.md is NOT in the Mechanism Builder's read list. The builder was supposed to receive mechanism details THROUGH the build plan (which the Planner derived FROM the catalog). This is the two-instance pattern: the builder should not read the catalog directly.

The build plan (03-build-plan.md) contains extremely detailed mechanism deployment instructions -- 14 mechanisms with per-section placement, channel ownership, interaction pairs, and CSS value specifications. The Mechanism Builder's output (05-mechanisms.html) follows this plan faithfully: the spacing contour (64->80->48->48->32->40->32->32->40->40->48->64) matches the plan exactly.

However, the mechanism-catalog.md contains **application modes** and **impact profiles** (enriched during the Enrichment Execution Team phase). These operational details -- specifically HOW to tune mechanism amplitude for perceptual effect -- were compressed by the Planner into channel maps and spatial values. The Mechanism Builder received CSS VALUES but not the PERCEPTUAL RATIONALE for those values. This is the compression pipeline at work: 337 findings -> catalog enrichments -> plan -> builder instructions. Each stage loses amplitude calibration data.

### (e) Was there a dedicated Scale 5 specialist or was Scale 5 nobody's specific responsibility?

**VERDICT: NO DEDICATED SCALE 5 SPECIALIST. Scale 5 was NOBODY'S specific responsibility.**

The C1 roster lists:
- Content Architect (content)
- Metaphor Agent (metaphor)
- Planner (build plan)
- Skeleton Builders A+B (spatial skeleton)
- Mechanism Builder (CSS mechanisms, Ch1-Ch6)
- Metaphor Builder (vocabulary, channel encoding)
- Intentionality Builder (bookending, self-reference, Ch7)

No agent has "Scale 5" or "detail-level micro-tuning" in their scope. The Mechanism Builder owns Ch1-Ch6 but the prompt gives NO operational instructions for Scale 5 variation. The audit data confirms: paragraph font-size (16px), font-weight (400), color (rgb(26,26,26)), and margin-bottom (16px) are UNIFORM across all 12 sections. Only letter-spacing and line-height vary, and only at sub-perceptual amplitudes (0.1px letter-spacing differences, 2px line-height differences).

Scale 5 was defined in B5 (SC-01):
```
Scale 5 (DETAIL): Micro-details, icon size, letter-spacing, line-height fine-tuning (~4-16px).
```

But this is a DEFINITION, not an ASSIGNMENT. No agent was told: "You are responsible for ensuring Scale 5 variation exists." The Scale 5 hollowness (identified in the separate Scale 5 audit) traces directly to this topology gap: defined but unowned.

### (f) Did the gate sequence actually CATCH deficiencies or rubber-stamp passes?

**VERDICT: MIXED -- gates caught some issues but rubber-stamped the deepest one.**

**What gates caught (genuine enforcement):**
1. Gate 1 rejected Skeleton B (6/8, header 341px + CPL 89) and selected Skeleton A (8/8). This is genuine quality enforcement.
2. Gate 3 verified 14 mechanisms deployed, 4 compositional clusters, soul 0/0 violations, spacing contour matching plan. The Crown Jewel 8-check (8/8) was substantive.
3. Gate 4 programmatically verified 4 channel shifts at each zone boundary (SC-09 PASS), confirming technical compliance.

**What gates rubber-stamped (failure to catch):**
1. Gate 3 accepted content-to-void at 56.1% (below the 70% post-mechanism target) with the note "measurement limitation: sampler detects text elements not visual treatments." The team-lead EXCUSED the measurement rather than investigating.
2. Gate 4 verified channel shifts PROGRAMMATICALLY but never tested whether those shifts were PERCEPTUALLY VISIBLE. The prompt says nothing about perceptual thresholds -- it only specifies programmatic measurements. This is the architectural gap: the gates measure CSS values, not human perception.
3. No gate checked Scale 5 variation. S-07 checks CPL, S-08 checks heading spacing, but no rule says "font-size, font-weight, color, and margin-bottom must vary across sections." Scale 5 could be completely uniform and still pass every gate.

**Core finding:** The gates enforce what is SPECIFIED but cannot catch what is UNSPECIFIED. The rules are guardrails (preventing violation) not playbooks (ensuring richness). A page that passes all gates can still be perceptually flat.

### (g) Did the Intentionality Builder add genuine richness or just HTML comments?

**VERDICT: MIXED -- genuine richness in content, but meta-annotation is comments-only.**

The 07-intentionality.html file (2,034 lines, 86KB) is SMALLER than 06-metaphor.html (90KB), which is unusual -- the intentionality pass REDUCED file size rather than adding visual content. But the PA audit gave intentionality 5.5/6 (STRONG PASS), so the additions are high quality:

**Genuine richness:**
1. Self-referential callouts (3 instances where content describes its own form) -- these are VISIBLE HTML elements, not comments.
2. Bridge transitions with cognitive-shift prose (3 instances: "We have mapped the patterns. Now we examine where they collide." etc.) -- VISIBLE prose content.
3. Bookending structure (S1/S12 echo: "337 findings," vocabulary/composition, design system nature) -- VISIBLE structural mirroring.
4. Drop-cap in S1 opening paragraph (Instrument Serif at 3.5em) -- VISIBLE visual treatment.

**Comments-only (no visual effect):**
1. The inline threading header (37 lines of HTML comments at the top) -- invisible to readers.
2. 12 section boundary comments -- invisible to readers.
3. Section-meta labels (section number, pattern, density zone) -- these ARE visible (`.section-meta` class), contributing to editorial voice.
4. Provenance footer -- VISIBLE, with rendered attribution text.

**Assessment:** The intentionality builder added genuine compositional intelligence. The 5.5/6 score from a zero-context auditor confirms this was perceived, not just declared. However, the intentionality builder did NOT address the perceptual threshold gap in channel amplitudes -- that was outside its scope (Ch7 intentional only, not Ch1-Ch6).

### (h) Was the "builder visibility cap" (75 lines) actually enforced, and did it prevent builders from seeing critical richness instructions?

**VERDICT: YES enforced. YES it prevented builders from seeing richness instructions. This is a CRITICAL topology failure.**

The builder-prompt.md is exactly 71 lines (within the 75-line cap). It contains:
- B1 Spatial Rules (17 rules, all binary)
- B2 Soul Rules (10 rules, all prohibition)
- Key tokens (8 lines)
- Self-check (9 items)
- Conviction opening + closing (12 lines)

**What the skeleton builders DID NOT SEE:**
- B3 Compositional (21 rules including mechanism interaction types, transition types, density arcs)
- B4 Multi-Coherence (8 rules including CCS, reinforcing pairs, cascading chains)
- B5 Scale-Channel (10 rules including channel definitions, richness matrix)
- B6 Metaphor Gates (5 rules)
- B7 Process (8 rules)
- B8 TC Pipeline Routing
- B9 PA Integration Routing
- B10 Builder Self-Check (expanded 22-item version vs the 9-item version they received)
- B11 Content Transformation (8 rules)
- B12 Recovery Protocols (4 rules)
- Section C (full coordination spec)
- Section D (conviction closing)

The skeleton builders saw 71/530 lines = 13.4% of the master prompt. They missed 86.6%.

**Critical omission: The skeleton builders never saw SC-09** ("minimum 3 channels shift at every section transition"). This rule IS in the team-lead's gate checks but the builders did not know to design FOR it. The team-lead verified it AFTER the fact rather than the builders building toward it.

**Critical omission: No richness instructions at all.** The 75-line prompt is ENTIRELY guardrails (what not to do) and spatial rules (what dimensions to hit). There is ZERO instruction about what makes a page FEEL rich, what perceptual amplitude means, or how to create visual moments. The conviction closing says "The mission is beauty, not compliance" -- but the preceding 68 lines are exclusively compliance rules.

**The cap was designed to prevent context overload.** But it achieved this by removing ALL compositional intelligence from the builder's awareness. The builder became a compliance machine: hit the numbers, avoid the prohibitions, write the HTML. The result was a spatially correct, soul-compliant, perceptually flat skeleton.

---

## TOPOLOGY-SPECIFIC FAILURE MODES

### Failure Mode 1: Communication Protocol Designed But Not Enforced

The prompt specifies 6 checkpoints (CP-A through CP-F) with specific message templates:
```
CP-A: Builder -> Planner. "Container: ___px. Estimated height: ___px..."
CP-B: Builder -> Team-Lead. "Page height: ___px. Content ratio: ___%..."
CP-D: Pass 2 Builder -> Team-Lead. "Mechanisms: __. CCS: __..."
```

None of these messages were sent. The team-lead ran gates by READING FILES directly rather than requiring agents to REPORT measurements via messages. This means:
- Builders never articulated their spatial concerns to the planner
- The mechanism builder never reported CCS measurements to the team-lead
- No agent flagged the sub-perceptual channel amplitudes
- The "zero messages at Gate 1 = PAUSE BUILD" trigger was ignored

**Root cause:** The team-lead had direct access to all files. Why wait for a message when you can read the file? The SendMessage protocol adds friction without apparent value when the team-lead can evaluate artifacts directly. But the VALUE of messaging is not information transfer -- it is FORCING AGENTS TO ARTICULATE CONCERNS. A builder who must write "Biggest spatial concern: ___" will DISCOVER concerns they would otherwise not notice.

### Failure Mode 2: Visibility Cap Creates Competent Executors Without Design Intelligence

The 75-line cap was intended to prevent context overload. But the unintended consequence is a builder who knows HOW to build (spatial rules, soul rules, tokens) but not WHY or WHAT GOOD LOOKS LIKE.

Compare what the skeleton builder knew vs what CD-006 (39/40) had access to:
- CD-006 builder had access to the full mechanism catalog, case studies, compositional guidelines
- Flagship skeleton builder had 71 lines of binary rules + 8 lines of token values

The cap prevents the builder from absorbing the conviction layer's insights about restraint, compositional fluency, and richness. The builder received "The mission is beauty, not compliance" as a platitude, not as an operational principle backed by examples.

### Failure Mode 3: Downstream Passes Cannot Repair Upstream Amplitude Decisions

The pipeline is sequential: Skeleton -> Mechanisms -> Metaphor -> Intentionality. Each pass builds on the previous one's HTML. The Metaphor Builder (Pass 3) could not fundamentally alter the skeleton's spatial structure without breaking gate-verified properties. The Metaphor Builder's additions (zone-specific CSS custom properties, per-section background colors, typography micro-adjustments) were CONSTRAINED by the existing structure.

Result: the Metaphor Builder added technically-correct-but-sub-perceptual channel differentiation because making changes large enough to be FELT would have required restructuring the skeleton (violating gate-verified spatial properties).

### Failure Mode 4: Gate-Verified ≠ Perceptually Verified

All 6 gates passed. Every programmatic check succeeded. But Auditor 6 (fresh-eyes, screenshots only) reported: "The metaphor is not extractable from the visual experience." "Background remains constant cream throughout." "Typography appears consistent across all zones."

The gate system measures CSS VALUES. It does not measure HUMAN PERCEPTION. A 4-point RGB difference (from 254,249,245 to 254,254,254) passes "background colors differ across zones" but fails "backgrounds LOOK different to a human."

This is a topology gap: no gate includes a perceptual threshold check. SC-09 verifies "3 channels shift" but not "3 channels shift BY ENOUGH TO BE NOTICED."

### Failure Mode 5: The Embedded Auditor Role Was Underutilized

The C1 spec assigns an "Embedded Auditor (Sonnet): real-time spatial monitoring, exclusive Playwright" for Pass 1. The review-notes.md mentions the programmatic spatial-gate-runner.js (which performs automated measurements) but makes no mention of an embedded auditor agent performing real-time monitoring.

The spatial gate runner is a SCRIPT, not an AGENT. It measures dimensions but does not exercise judgment. An embedded auditor agent would ideally have flagged "these zone backgrounds look identical" during real-time monitoring. Instead, perceptual evaluation was deferred entirely to Gate 5 (Mode 4 PA), which runs AFTER all construction is complete -- too late to change architectural decisions.

---

## COMPARISON: MIDDLE-TIER vs FLAGSHIP TOPOLOGY

| Dimension | Middle-Tier (PA-05: 4/4) | Flagship (PA-05: 3/4) |
|-----------|-------------------------|----------------------|
| Agents | 8 | 19 |
| Passes | 3 (plan, build, audit) | 5 (content, plan, skeleton, mechanisms, metaphor, intentionality) |
| Topology | Flat file-bus | Flat file-bus + sequential passes |
| SendMessage | 0 | 0 |
| Builder context | ~6K tokens pre-baked CSS | 71 lines (13.4% of prompt) |
| Gates | 3 (informal) | 6 (formal, programmatic) |
| Mechanism count | 12 | 14 |
| Scale count | 2 | 3-4 (attempted) |
| Wall-clock time | ~35 min | ~73 min (09:55 to 11:08) |
| PA-05 | 4/4 DESIGNED | 3/4 DESIGNED |
| Key defect | Missing footer | Sub-perceptual channels |
| Void | None | None |

**Paradox:** More agents, more passes, more gates, more mechanisms, more rules -- and a LOWER PA-05 score. Why?

The middle-tier builder received pre-baked CSS blocks (~6K tokens) that included WORKING compositional patterns. The flagship skeleton builder received 71 lines of RULES. Rules tell you what NOT to do. Pre-baked CSS tells you what TO do. The middle-tier builder copied known-good patterns and adapted them. The flagship skeleton builder started from scratch with only prohibitions.

More topology ≠ more quality. The topology added COORDINATION OVERHEAD (5 passes, 6 gates, handoffs between agents) without adding COMPOSITIONAL INTELLIGENCE to the builder who writes the actual CSS.

---

## ROOT CAUSE HIERARCHY

1. **Primary (structural):** Zero inter-agent messaging prevented collaborative refinement. No agent could flag "these backgrounds look the same" during construction. Each agent worked in isolation, producing technically correct output that combined into a perceptually flat whole.

2. **Secondary (informational):** The 75-line visibility cap removed compositional intelligence from builders. Builders received compliance rules, not richness playbooks. They built to spec, not to perception.

3. **Tertiary (methodological):** Gates measure CSS values, not perceptual impact. A page can pass all gates while being perceptually uniform. No gate includes perceptual threshold minimums (e.g., "background difference must be >= 15 RGB points").

4. **Quaternary (ownership):** Scale 5 had no dedicated owner. Channel amplitude tuning was nobody's responsibility. The Mechanism Builder owned Ch1-Ch6 but received no amplitude guidance. The Metaphor Builder added channel differentiation but was constrained by the existing skeleton structure.

---

## WHAT WOULD HAVE CHANGED WITH MESSAGING

If CP-B had been enforced (builder -> team-lead: "Biggest spatial concern: ___"), the skeleton builder might have articulated: "All zone backgrounds look similar in the browser."

If CP-D had been enforced (mechanism builder -> team-lead: "Channels: __/7"), the mechanism builder might have reported: "Ch3 Spatial is WEAK -- paragraph margins are uniform across all sections."

If CP-E had been enforced (each pass -> next pass), the Metaphor Builder would have received explicit measurements from the Mechanism Builder about which channels already had perceptual amplitude and which did not.

If ANY agent had sent a message saying "these backgrounds look identical," the team-lead could have intervened with amplitude adjustments BEFORE Gate 5 (when it was too late).

The communication protocol was designed specifically to prevent this class of failure. It was not executed. The predicted consequence ("zero SendMessage = quality cost") materialized exactly as predicted.

---

## RECOMMENDATIONS FOR REMEDIATION

1. **Make SendMessage a GATE REQUIREMENT, not a PROMPT REQUEST.** Gate 1 should FAIL if zero messages have been sent. Currently "Zero messages at Gate 1 = PAUSE BUILD" is specified but not enforced. Make it binary: message count < 4 = gate FAILS.

2. **Add perceptual threshold minimums to gate checks.** SC-09 currently checks "channels shift." Add: "Background color difference between zones >= 15 RGB points. Letter-spacing difference >= 0.3px. Padding difference >= 16px between zones."

3. **Replace the 75-line cap with a 150-line enriched prompt** that includes 3-4 worked examples of perceptually effective channel differentiation from CD-006 and DD-006. The builder needs to SEE what good looks like, not just what bad looks like.

4. **Assign Scale 5 to the Mechanism Builder explicitly.** Add to C1: "Mechanism Builder additionally owns Scale 5 tuning. After deploying mechanisms, run a per-section audit: font-size, font-weight, color, margin-bottom, letter-spacing, line-height. At least 3 of these 6 properties MUST vary across sections."

5. **Add a mid-build perceptual check at Gate 3.** After mechanisms are deployed, before metaphor integration, take screenshots and have ONE auditor do a 5-minute cold look: "Do sections look visually distinct?" This catches sub-perceptual amplitude before it becomes architectural.

---

## ANSWER SUMMARY

| Question | Answer |
|----------|--------|
| (a) Team or single agent? | TEAM -- 19 agents confirmed |
| (b) Multiple agents or sequential? | Truly separate agents (per-file, competitive skeleton) |
| (c) SendMessage or file-bus? | FILE-BUS ONLY -- zero SendMessage calls (FAILURE) |
| (d) Mechanism catalog read? | Indirect via build plan only (by design, but lost amplitude data) |
| (e) Scale 5 specialist? | NO -- nobody's specific responsibility (FAILURE) |
| (f) Gates catch or rubber-stamp? | MIXED -- caught skeleton issues, rubber-stamped perceptual gaps |
| (g) Intentionality genuine or comments? | GENUINE richness in content (5.5/6), but did not fix channel amplitude |
| (h) Visibility cap enforced? | YES enforced, YES prevented seeing richness instructions (FAILURE) |

**THE TOPOLOGY WAS DESIGNED. IT WAS STRUCTURALLY EXECUTED (19 agents, 5 passes, 6 gates, per-file ownership). IT WAS NOT COMMUNICATIVELY EXECUTED (zero messages, no collaborative refinement, no mid-build perceptual feedback). The structure delivered compliance. The missing communication prevented quality.**
