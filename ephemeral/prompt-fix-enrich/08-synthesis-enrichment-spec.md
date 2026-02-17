# 08 -- Synthesis Fidelity Enrichment Specification

**Author:** synthesis-enricher (Opus 4.6)
**Date:** 2026-02-17
**Task:** Recover the 3 most critical losses from the 758k->530 compression (fidelity 77% -> target 90%+)
**Source reports (lowest coverage):**
- Report 12: PA Deep Invocation (50% coverage)
- Report 13: TC-PA Integration Architecture (50% coverage)
- Report 14: Enrichment Invocation Map (60% coverage)
- Report 20: Invocation Guarantee Audit (60% coverage)

---

## ENRICHMENT 1: Gate-Then-Ranking Rubric Flow

**Loss identified:** Fidelity report Loss #1 (Report 12, Section 4). The current prompt (file 10) has gates in C3 but no structured RANKING phase. PA synthesis lacks a framework for distinguishing "barely passes" from "excellent."

**Current state in prompt:** Line 270 adds a brief reference: "Gate-then-Ranking: -> TC rubric gates metaphor quality (reject < 12/18). PA ranks perceptual quality." But this is a one-line summary lacking the full two-phase structure, gate question list, and ranking dimensions.

### EXACT INSERTION TEXT (for B9 expansion or new subsection after C4)

```
RUBRIC FLOW: GATE FIRST, THEN RANK (PA Weaver-Synthesizer protocol)

PHASE 1 -- GATE (binary ship/no-ship):
  Gate questions -- ANY FAIL = DO NOT SHIP, list all failures, do NOT proceed to ranking:
    PA-01 at WOULD-NOT-SHIP severity: first-impression revulsion
    PA-05 composite < 3/4: signature question below threshold
    PA-09 at CATASTROPHIC severity (6+ viewport-heights dead space): spatial collapse
    PA-17 FAIL (Ceiling+ mandatory): rhythm failure
    PA-41 FAIL (Ceiling+ mandatory): repetition monotony
    PA-50: 2+ consecutive blank viewport-heights
    PA-51: VOID-DOMINATED classification (<40% content)
    PA-52: any third of page lacks designed moment (Flagship tier)

PHASE 2 -- RANKING (comparative quality, only if ALL gates pass):
  Ranking dimensions:
    PA-05 composite (3/4 vs 4/4)
    PA-20 personality match (3-word personality = design intent?)
    PA-35 engagement curve (interest sustains through full scroll?)
    PA-44 metaphor expression (structural > atmospheric > labeled > announced)
    PA-45 design highlight presence (specific moment of excellence?)
    PA-48 comparative ranking (1st-5th among hypothetical alternatives)

  Ranking verdict:
    HIGH:   PA-05=4/4, metaphor structural, highlight present, ranked 1st-2nd -> SHIP
    MEDIUM: PA-05=3/4, metaphor atmospheric, highlight present, ranked 2nd-3rd -> SHIP WITH NOTES
    LOW:    PA-05=3/4, metaphor labeled, no highlight, ranked 3rd-4th -> SHIP WITH RESERVATIONS

FINAL VERDICT FORMAT:
  GATE FAIL -> DO NOT SHIP (list all gate failures)
  GATE PASS + RANKING HIGH -> SHIP
  GATE PASS + RANKING MEDIUM -> SHIP WITH NOTES
  GATE PASS + RANKING LOW -> SHIP WITH RESERVATIONS
```

**Where to insert:** After the PA auditor assignments in C4 (currently ends at line 389). This becomes a weaver-synthesizer protocol that fires AFTER all 9 auditors submit findings.

**Why it matters:** Without gate-then-ranking, the PA synthesis step has no formal framework. The weaver must improvise the distinction between "barely passes" and "excellent." This leads to either over-generous verdicts (everything that passes gates is "SHIP") or under-generous ones (findings accumulate into rejection without clear thresholds). The gate list also makes explicit which PA questions can individually prevent shipping -- critical for the weaver to classify findings correctly.

---

## ENRICHMENT 2: PA-to-TC Feedback Routing Table

**Loss identified:** Fidelity report Loss #2 (Report 13, Section 1B). When PA finds issues, there is no documented pathway for routing findings back to specific TC phases for correction. The team-lead must improvise.

**Current state in prompt:** C3 (gates) specifies when to stop, but not what to do when a gate fails. The prompt says "Max 2 fix cycles. Fail after 2 = ABORT" but doesn't specify WHICH TC phase to re-enter for each type of PA finding.

### EXACT INSERTION TEXT (for team-lead reference, after gate sequence C3)

```
PA-TO-TC FIX ROUTING (team-lead uses this when PA gate FAILS):

PA Finding Category          | TC Phase to Re-Enter    | Fix Type        | Agent
-----------------------------|------------------------|-----------------|--------
PA-01 spatial void           | TC 4.2B (Pacing)       | STRUCTURAL FIX  | Planner
PA-02 text uncomfortable     | TC 4.0 (Guardrails)    | GUARDRAIL FIX   | Builder
PA-03 three designers        | TC 4.3 (Coherence)     | COHERENCE FIX   | Builder
PA-05a DESIGNED fail         | TC 4.1 (Extraction)    | VOCABULARY FIX  | Planner
PA-05b COHERENT fail         | TC 4.3 (Coherence)     | COHERENCE FIX   | Builder
PA-05c PROPORTIONATE fail    | TC 4.0 + TC 4.2B       | PROPORTION FIX  | Builder
PA-09 CATASTROPHIC void      | TC 4.2B + TC 4.7       | REBUILD         | Planner+Builder
PA-09 WOULD-NOT-SHIP void    | TC 4.2B (Pacing)       | FILL FIX        | Builder
PA-12 eye flow breaks        | TC 4.6 (Transitions)   | TRANSITION FIX  | Builder
PA-13 no visual ending       | TC 4.7B (Landmarks)    | LANDMARK FIX    | Builder
PA-17 no rhythm              | TC 4.2C (Rhythm)       | RHYTHM FIX      | Builder
PA-30 not designed for width | TC 4.0 (Container)     | WIDTH FIX       | Builder
PA-36 no dramatic moment     | TC 4.2B (Pacing)       | CLIMAX FIX      | Builder
PA-41 repetition monotony    | TC 4.2C (Rhythm)       | MONOTONY FIX    | Builder
PA-44 metaphor only labeled  | TC 3.5G (Scoring)      | METAPHOR FIX    | Metaphor Agent
PA-50-53 void findings       | TC 4.0 + TC 4.2B       | VOID FIX        | Builder

FIX PROTOCOL:
  1. CLASSIFY: Is this TC-routable (compositional/structural) or pure CSS bug?
  2. ROUTE: If TC-routable, identify specific TC phase from table above
  3. RE-ENTER: Builder re-enters at THAT TC phase, not from scratch
  4. FIX: Apply TC-guided correction
  5. VERIFY: Re-run PA Mode 1 Embedded on fixed section
  6. ESCALATE: If 2 fix attempts fail on same finding -> flag for human review
```

**Where to insert:** After the gate sequence in C3 (currently ends at line 363). This becomes the team-lead's routing protocol when a gate fails, BEFORE the PA deployment section C4.

**Why it matters:** Without this table, when Mode 4 PA says "DO NOT SHIP -- PA-17 FAIL (no rhythm)," the team-lead has to figure out independently that PA-17 maps to TC Phase 4.2C (Rhythm Variation) and that the fix involves counting transition types and adding BRIDGE or BREATHING transitions. This mapping took Report 13 an entire section (1B) to work out. Losing it means every fix cycle wastes time on routing decisions that should be pre-computed. The ceiling experiment had zero fix cycles because there was no feedback loop at all; the flagship MUST have one, and it must be efficient.

---

## ENRICHMENT 3: Dual Severity System with Corroboration Escalation

**Loss identified:** Fidelity report Loss #3 (Report 12, Section 10). The current prompt uses simplified BLOCKING/SIGNIFICANT/MINOR (C4 line 384) instead of the dual-track system with corroboration thresholds.

**Current state in prompt:** "Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation." This is a single-track system. Report 12 provides a dual-track system (perception + rule) with corroboration escalation that was critical for the ceiling experiment analysis.

### EXACT INSERTION TEXT (for C4 expansion, after finding format specification)

```
SEVERITY SYSTEM (dual-track with corroboration escalation):

PERCEPTION TRACK (how it LOOKS):
  WOULD-NOT-SHIP:  A designer would refuse to release this. Fundamental quality failure.
                   Gate impact: GATE FAIL if on a gate question. BLOCKING if 5+ auditors agree.
  LOOKS-WRONG:     Something is visually off. Noticeable but not catastrophic.
                   Gate impact: Does NOT trigger gate fail alone. 5+ LOOKS-WRONG = escalation.
  COULD-BE-BETTER: Polish opportunity. Not wrong, just not excellent.
                   Gate impact: Never triggers gate fail. Document for future.

RULE TRACK (what it VIOLATES):
  SOUL VIOLATION:   Violates soul rules U-01 through U-10. ALWAYS GATE FAIL.
  CONVENTION BUG:   Violates design system convention. GATE FAIL if convention is LOCKED.
  OVERFLOW:         Exceeds guardrail threshold. GATE FAIL if guardrail is a hard floor.

CORROBORATION ESCALATION:
  1/9 auditors flag: ANECDOTAL -- document, do not escalate
  3/9 auditors flag: PATTERN -- document with emphasis, likely valid
  5/9 auditors flag: CONSENSUS -- HIGH PRIORITY, treat as real problem
  7/9 auditors flag: NEAR-UNIVERSAL -- treat as BLOCKING even if individual severity is LOOKS-WRONG
  9/9 auditors flag: DEFINITIVE -- BLOCKING, no further evidence needed
                     (Ceiling void was 9/9. This IS the dominant finding.)

TRACK INTERACTION RULES:
  A finding CAN exist on BOTH tracks (void = WOULD-NOT-SHIP + OVERFLOW)
  Perception NEVER dismissed by rule compliance ("convention allows it" does NOT override "looks wrong")
  When perception and rules conflict: ESCALATE to human, do not auto-resolve
```

**Where to insert:** Replace the single line at C4 line 384 ("Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation") with the full severity system above. The finding format becomes: "Each finding: PA-XX, perception severity (WNS/LW/CBB), rule severity if applicable (SV/CB/OF), evidence, recommendation."

**Why it matters:** The simplified BLOCKING/SIGNIFICANT/MINOR system loses two critical properties:

1. **Dual-track nuance:** A finding can be LOOKS-WRONG perceptually but CONVENTION BUG on rules -- these require different fix approaches. The ceiling void was both WOULD-NOT-SHIP (perception) and OVERFLOW (rule). Collapsing to one track loses the diagnostic precision.

2. **Corroboration escalation:** The ceiling experiment proved that 9/9 agreement on a concern makes it definitive regardless of individual severity. Without corroboration thresholds, the weaver-synthesizer must improvise escalation decisions. 7+ auditors flagging LOOKS-WRONG should be equivalent to BLOCKING -- but only if the weaver knows this rule.

---

## ENRICHMENT 4: TC-PA Unified System Framing

**Loss identified:** Report 13 coverage at 50%, item #1. TC and PA are presented as separate sections (B8 and B9) rather than explicitly framed as one system with two temporal positions.

**Current state in prompt:** B8 (TC routing) and B9 (PA routing) are adjacent but conceptually separate. The conviction layer does not state the unification principle.

### EXACT INSERTION TEXT (for A5 expansion or conviction layer)

The current prompt already has line 270-271 added during the initial file read:
```
Gate-then-Ranking:    -> TC rubric gates metaphor quality (reject < 12/18). PA ranks perceptual quality.
                         TC is design-time (pre-build). PA is audit-time (post-build). ONE system.
```

This is sufficient as a framing statement. The deeper issue is the ABSENCE of the feedback loop (Enrichment 2 above), not the absence of conceptual framing. With Enrichments 1-3 applied, TC-PA integration achieves operational depth even without additional conviction text.

**No additional insertion needed** -- Enrichment 2 (routing table) operationalizes what this framing declares.

---

## ENRICHMENT 5: Phased Reveal STOP Markers (from Report 20)

**Loss identified:** Fidelity report Loss #4 (Report 20, Section 6). The phased reveal protocol with `>>> STOP <<<` markers is absent. Builder receives all rules at once, mid-section rules get skimmed.

**Current state in prompt:** B10 (builder self-check) is positioned in recency position (good), but there are no explicit STOP markers between spatial/soul rules and compositional rules.

### EXACT INSERTION TEXT (structural formatting for builder prompt assembly)

```
NOTE TO TEAM-LEAD (prompt assembly instruction, NOT included in builder prompt):

When assembling the builder's per-pass prompt (~75 lines), insert STOP markers:

  === PHASE 1: READ AND ACKNOWLEDGE (before building) ===
  [S-01 through S-15 spatial rules + U-01 through U-10 soul rules]
  >>> STOP. Send Checkpoint A with rule acknowledgment before continuing. <<<

  === PHASE 2: BUILD (after Checkpoint A confirmed) ===
  [Mechanism table from build plan + C-01 through C-18 compositional rules]
  >>> BUILD the page. When complete, continue to Phase 3. <<<

  === PHASE 3: VERIFY (after build complete, before file write) ===
  [B10 self-check list + metaphor summary refresh]
  >>> Run self-check. Send Checkpoint B. Then write file. <<<

This exploits primacy effect (spatial anchors get deepest processing) and
recency effect (self-check runs with fresh attention). The STOP marker after
Phase 1 forces the builder to ENGAGE with spatial/soul rules before receiving
the mechanism table, preventing attention dilution.
```

**Where to insert:** As a team-lead instruction note at the end of Section E (reference library), since this is an assembly instruction, not builder-facing content. Alternatively, embed within the team-lead's reading list specification.

**Why it matters:** Report 20's attention model shows mid-section rules (positions 3-8 in a 10-rule section) are processed at ~30% the depth of primacy-position rules. The STOP markers create 3 natural breaks that reset attention allocation. This is the cheapest intervention with the highest compliance improvement -- estimated ~70% of the anti-skimming benefit of full multi-prompt delivery at zero additional message cost.

---

## ENRICHMENT 6: Per-Agent Contracts (from Report 20)

**Loss identified:** Report 20 coverage item #3 (PARTIAL). File 10 specifies agents and outputs (C1) and inputs (E), but does not have formal contracts with VERIFICATION methods per agent.

**Current state:** C1 lists agents with pass assignments. E routes files. But there is no compact contract format specifying RECEIVES / MUST PRODUCE / VERIFICATION per agent.

### EXACT INSERTION TEXT (compact contract format, for team-lead reference)

```
PER-AGENT CONTRACTS (team-lead verifies these at gate boundaries):

BUILDER (each pass):
  RECEIVES: ~75 lines (spatial + soul + communication + mechanism table + compositional + self-check)
  MUST PRODUCE: Checkpoint A (rule acknowledgment + spatial concern + container width) +
                HTML file + Checkpoint B (height + ratio + token% + CPL + self-check table)
  VERIFICATION: Checkpoint A has 4 required fields. Checkpoint B has 6 required fields.
                Self-check table matches rule acknowledgment list.

PLANNER:
  RECEIVES: Metaphor derivation + mechanism catalog + compositional rules + spatial budget template
  MUST PRODUCE: Build plan with spatial budget table (ratio >= 60%) + mechanism allocation
                (per-category: S:1+ H:1+ C:1+ D:1+ N:1+) + transition plan (3+ types)
  VERIFICATION: Gate 0 checks ratio >= 60%. Mechanism table has 5 categories each >= 1.

METAPHOR AGENT:
  RECEIVES: Conviction layer + scale reports + crown jewels + content summary
  MUST PRODUCE: Metaphor derivation with structural obligations table + conviction quote +
                anti-scale formula populated + zone architecture
  VERIFICATION: Conviction checksum present. Rubric score >= 12/18. Gate 4 fresh-eyes test.

PA AUDITORS (each):
  RECEIVES: Pre-captured screenshots + assigned PA questions + cold look protocol. ZERO TC context.
  MUST PRODUCE: Finding report with one entry per assigned question (finding OR "NO FINDING for PA-XX")
  VERIFICATION: All assigned PA questions addressed. Zero unaddressed questions across 9 auditors.
```

**Where to insert:** After C1 (agent roster) as a compact reference, or as an appendix subsection. This is team-lead-facing content that ensures gate verification is systematic rather than improvised.

**Why it matters:** Without contracts, the team-lead must remember what each agent should produce and how to verify it. This becomes error-prone when managing 12+ agents across 5 passes. The contracts make verification mechanical: check each field, mark PASS/FAIL.

---

## ENRICHMENT 7: Enrichment Risk Map (from Report 14)

**Loss identified:** Report 14 coverage item #5 (N). No "if X not invoked, Y breaks" systematic risk map.

**Current state:** The conviction layer covers some risks narratively. The appendix enrichment traceability table maps enrichments to rules and gates. But there is no quick-reference for what breaks if each enrichment is skipped.

### EXACT INSERTION TEXT (compact risk map for team-lead gate awareness)

```
ENRICHMENT RISK MAP (if any enrichment is NOT invoked, this is what breaks):

  B1 (void prohibition) NOT invoked  -> 70%+ blank scroll ships (EXACT ceiling failure)
  BT-09 (metaphor rubric) NOT invoked -> bad metaphor passes, all downstream is remedial
  A1 (transition grammar) NOT invoked -> transitions = void, structural mechanism of ceiling failure
  C3 (96px max spacing) NOT invoked   -> 120-160px margins accumulate into multi-viewport voids
  B3 (front-loaded weight) NOT invoked -> all visual interest in first third, rest is blank
  A2 (restraint protocol) NOT invoked -> 14 mechanisms crammed in header, 0 elsewhere
  A3 (density floors) NOT invoked     -> CSS containers around 1 paragraph = void generators
  D3 (content-form fit) NOT invoked   -> bento grid wrapping 2 items, architecture exceeds content
  BT-08 (PA-50-53) NOT invoked       -> void not quantitatively measured, severity unclassified
  BT-10 (PA-09 severity) NOT invoked  -> 1-viewport gap treated same as 24-viewport gap
  BT-11 (PA-17/41 elevation) NOT invoked -> "YES" verdict despite metronomic spacing

HIGHEST-RISK NON-INVOCATIONS (in priority order):
  1. B1 -- THE root prohibition. Without it, everything else is post-hoc.
  2. BT-09 -- bad metaphor upstream makes all downstream remedial.
  3. A1 -- transitions-as-void was the structural mechanism of ceiling failure.
```

**Where to insert:** After the enrichment traceability table in the appendix (currently at lines 486-501). This adds the "what breaks" dimension that the traceability table lacks.

**Why it matters:** The traceability table tells you WHERE each enrichment maps to rules and gates. The risk map tells you WHY each enrichment matters and what the CONSEQUENCE of missing it is. Together they provide both the mechanical mapping and the motivational urgency. The team-lead needs both to prioritize gate enforcement when under time pressure.

---

## SUMMARY OF ALL ENRICHMENTS

| # | Enrichment | Source Report | Lines to Add | Insert Location | Priority |
|---|-----------|-------------|-------------|----------------|----------|
| 1 | Gate-then-ranking rubric flow | Report 12, S4 | ~30 | After C4 (line 389) | CRITICAL |
| 2 | PA-to-TC feedback routing table | Report 13, S1B | ~25 | After C3 (line 363) | CRITICAL |
| 3 | Dual severity + corroboration | Report 12, S10 | ~25 | Replace C4 line 384 | HIGH |
| 4 | TC-PA unified framing | Report 13, S1 | 0 (already present) | N/A | RESOLVED |
| 5 | Phased reveal STOP markers | Report 20, S6 | ~15 | End of Section E | MEDIUM |
| 6 | Per-agent contracts | Report 20, S4 | ~20 | After C1 | MEDIUM |
| 7 | Enrichment risk map | Report 14, S6 | ~20 | After appendix traceability | MEDIUM |

**Total new content:** ~135 lines
**Current prompt size:** ~530 lines
**Post-enrichment estimate:** ~665 lines (still well within the ~250 line target for Sections A-D; enrichments 5-7 go in team-lead reference areas E/Appendix)

**Coverage impact estimate:**
- Report 12 (50% -> ~85%): Gate-then-ranking + dual severity recover the 2 N items
- Report 13 (50% -> ~80%): Routing table + unified framing (already present) recover 2 of 2 N items
- Report 14 (60% -> ~80%): Risk map recovers the N item
- Report 20 (60% -> ~80%): Phased reveal + per-agent contracts recover 2 items
- **Overall fidelity estimate: 77% -> ~87%**

---

**END SYNTHESIS FIDELITY ENRICHMENT SPECIFICATION**
