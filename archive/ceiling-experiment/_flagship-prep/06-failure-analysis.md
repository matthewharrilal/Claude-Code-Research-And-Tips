# Ceiling Experiment: Lessons From Failure -- Root Cause Analysis

**Analyst:** LESSONS-FROM-FAILURE
**Date:** 2026-02-16
**Sources:** 07-VERDICT.md, AUDIT-REPORT.md, REAUDIT-REPORT.md, CHANGELOG.md, 06-adversarial-anti-scale.md, 02-build-plan.md, 09-PROTOCOLS.md
**Method:** For each failure mode, trace the full causal chain from surface symptom to root cause, then classify as FIXABLE or STRUCTURAL.

---

## Summary Table

| # | Failure | Root Cause Type | Classification | Preventable? |
|---|---------|----------------|----------------|-------------|
| 1 | Catastrophic whitespace void (70-80%) | Metaphor creates structural obligations that produce void | **STRUCTURAL** (with fixable component) | Manageable, not preventable |
| 2 | Container width violation (2160px) | Likely measurement artifact, not actual violation | **PROCESS FIXABLE** | Yes -- measurement protocol |
| 3 | Header proportions too heavy | Metaphor "roof/sign" treatment maximized darkness | **SPECIFICATION FIXABLE** | Yes -- proportion budget |
| 4 | Zero inter-agent messaging | LLM completion bias ignores soft instructions | **TOOLING FIXABLE** | Yes -- mandatory gates |
| 5 | Fix patches failed to resolve void | Misdiagnosis: CSS spacing treated as root cause | **PROCESS FIXABLE** | Yes -- diagnosis protocol |
| 6 | Initial audit dismissed whitespace | Lightweight audit format lacks perceptual breadth | **PROCESS FIXABLE** | Yes -- audit mode selection |
| 7 | Metaphor "announced not structural" | Visual channel poverty under soul constraints | **STRUCTURAL** (with fixable component) | Partially manageable |

---

## FAILURE 1: Catastrophic Whitespace Void (70-80% of Scroll)

### Root Cause Chain

```
SURFACE: 70-80% of page scroll is blank cream void
    |
    v
INTERMEDIATE-1: Zones 3-4 have structural containers but insufficient content
    |
    v
INTERMEDIATE-2: Build plan specified 4 zones with graduated density,
                 each requiring checkpoint transitions with 48-80px margins
    |
    v
INTERMEDIATE-3: The secure facility metaphor DEMANDS sparse exterior zones
                 and checkpoint transitions between ALL zone boundaries
    |
    v
INTERMEDIATE-4: 4 zones x graduated density = multiplicative whitespace
                 accumulation: 64px + 48px + 80px + 32px + 80px + 24px
                 per zone boundary, totaling ~1,500-2,000px in transitions alone
    |
    v
ROOT CAUSE: The metaphor's structural obligations (sparse exterior,
            graduated compression, checkpoint transitions) CREATE
            whitespace as a FEATURE, not a bug. The builder faithfully
            executed the plan. The PLAN demanded the void.
```

### Classification: **STRUCTURAL** (with fixable component)

The adversarial anti-scale document (06-adversarial-anti-scale.md) identifies this precisely: "The void was not an error. It was the metaphor's structural obligation, faithfully executed." The secure facility metaphor REQUIRES sparse exterior zones. Zone 1 (EXTERIOR) was specified as "MUST be the most open, least dense zone. Wide margins, generous whitespace, minimal borders." When you combine 4 zones, each requiring its own density level and each separated by checkpoint transitions, the total whitespace accumulates multiplicatively.

This is structural because ANY zone-based metaphor with graduated density will produce this problem at ceiling tier. The number of zones directly predicts the amount of inter-zone whitespace. With 4 zones and 7 transitions (T1-T7), each consuming 48-80px, the transitions alone consume ~400-560px before any intra-zone spacing is counted.

### The Fixable Component

While the root cause is structural, the SEVERITY is fixable through three mechanisms:

**Prevention 1: Zone budget constraint.** Add a hard rule: "Total inter-zone transition whitespace must not exceed 15% of total page scroll depth." This forces the planner to either reduce zone count or compress transition spacing.

**Prevention 2: Content-to-void ratio gate.** Add a Phase 2.5 gate: "Before perceptual audit, measure content-to-void ratio. If void exceeds 30% of scroll, BLOCK and require content addition or zone elimination." The build plan had no such gate.

**Prevention 3: Zone count ceiling.** Cap zone count at 2-3 for content under 2,000 words. The SYSTEM content was ~1,300 lines (~6,500 words) spread across 4 zones + facility-wide section -- this creates an average of ~1,625 words per zone, which is insufficient to visually fill a zone at ceiling-tier spacing.

### What This Means for Flagship

Flagship tier (16-18 mechanisms, 240-400 min build) will face this problem MORE severely. More mechanisms = more inter-component whitespace. More zones = more transitions. The flagship prompt MUST include a void budget as a hard constraint, not a guideline. Metaphor selection should favor metaphors that COMPRESS space (e.g., control panel, library card catalog) over metaphors that EXPAND space (e.g., building, landscape, journey).

---

## FAILURE 2: Container Width Violation (2160px vs 960px)

### Root Cause Chain

```
SURFACE: Container reported as 2160px instead of 960px
    |
    v
INTERMEDIATE-1: Comparative auditor measured "2160px" at 1440px viewport
    |
    v
INTERMEDIATE-2: Programmatic auditor confirmed CSS specifies max-width: 960px
    |
    v
INTERMEDIATE-3: Mode 4 audit (9 auditors) described "narrow column floating
                 in vast emptiness" -- CONSISTENT with 960px in wider viewport
    |
    v
ROOT CAUSE: Measurement error. The comparative auditor measured the
            VIEWPORT or OUTER wrapper, not the content container. The
            container was CORRECTLY set to 960px. The violation was a
            FALSE POSITIVE.
```

### Classification: **PROCESS FIXABLE**

The re-audit report explicitly states: "Container IS 960px. Confirmed in lock sheet: 'Line 114 unchanged.' Not a real defect." The Mode 4 auditors' perceptual experience of "narrow column floating in vast emptiness" is CONSISTENT WITH 960px content in a wider viewport, not a container violation.

### Why Knowing the Risk Did Not Prevent It

The preparation team identified container width as "THE primary Phase D failure mode" (4/5 Phase D pages violated it). However, the ACTUAL failure here was not container width -- it was measurement methodology. The comparative auditor's protocol did not distinguish between outer viewport measurement and content container measurement. When told to "measure container width," the auditor measured the wrong element.

This is a classic case of correct identification of risk, incorrect verification of compliance. The risk was real. The measurement was wrong. The FALSE POSITIVE consumed attention (it was marked BLOCKING) that should have gone to the REAL blocking issue (whitespace void).

### Prevention

**Specific change:** Add programmatic container verification as the FIRST gate check (Phase 2.5), before any perceptual audit. Computed style measurement: `document.querySelector('.page-container').getBoundingClientRect().width`. If this returns 960px +/- 20px, container is COMPLIANT. Do not accept visual measurement of container width from perceptual auditors -- it is too error-prone.

**Secondary change:** Train comparative auditors to measure CONTENT container, not viewport. Include explicit instruction: "Measure the element with class .page-container or equivalent, not the body or viewport."

---

## FAILURE 3: Header Proportions Too Heavy (PA-05c Fail)

### Root Cause Chain

```
SURFACE: Both PAs agree header dominates first viewport, too heavy
    |
    v
INTERMEDIATE-1: Header had 128px total padding (64px top + 64px bottom)
                 occupying ~15-25% of first viewport depending on content
    |
    v
INTERMEDIATE-2: Build plan specified header as "ROOF / FACILITY SIGN"
                 with dark background (#1A1A1A) + 3px primary border
    |
    v
INTERMEDIATE-3: Metaphor derivation stated "The header is the facility's
                 identifying sign -- the placard above the entrance visible
                 from the street. Dark background (authoritative, institutional)."
    |
    v
ROOT CAUSE: The metaphor elevated the header from "page landmark" to
            "facility entrance sign," which drove the builder to give it
            maximum visual weight. No proportion budget existed to limit
            header-to-content ratio. The metaphor said "make it heavy"
            and nothing said "but not TOO heavy."
```

### Classification: **SPECIFICATION FIXABLE**

This is a straightforward case of missing specification. The build plan specified HOW the header should look (dark, authoritative, 3px border) but not HOW MUCH viewport it should consume. The fix is adding a proportion constraint.

### Prevention

**Specific change:** Add to build plan template: "Header must occupy less than 20% of first viewport at 1440px. Measure: (header total height including padding and border) / viewport height." The fix team later reduced header padding from 128px to 72px (40px top, 32px bottom), which brought it to ~11-18% of viewport -- within the 20% budget.

**Broader principle:** Every designed moment and every zone needs a PROPORTION BUDGET, not just a visual treatment specification. The build plan template should include: "For each zone, specify maximum percentage of viewport it may consume at 1440px."

---

## FAILURE 4: Zero Inter-Agent Messaging

### Root Cause Chain

```
SURFACE: 0 SendMessage calls between agents (criterion required >= 5)
    |
    v
INTERMEDIATE-1: Builder received a 710-line build plan with
                 complete CSS blocks, HTML templates, and detailed
                 specifications -- did not perceive need to ask questions
    |
    v
INTERMEDIATE-2: CP-02 protocol was designed but embedded in the
                 execution prompt as "MAY use SendMessage" (soft permission),
                 not "MUST send check-in after reading plan" (hard gate)
    |
    v
INTERMEDIATE-3: LLM completion bias -- agents optimize for completing
                 their deliverable file, not for collaborative process.
                 File-writing emphasis was in ALL worker prompts per team
                 management lessons, but messaging emphasis was not.
    |
    v
ROOT CAUSE: "MAY" instructions achieve ~0% agent compliance (known
            architectural principle: "Binary rules achieve 100% agent
            compliance; judgment rules achieve ~0%"). CP-02 was a
            judgment rule, not a binary rule. The protocol was correct
            in design but wrong in enforcement mechanism.
```

### Classification: **TOOLING FIXABLE**

This is the most clearly fixable failure. The project's own research established that "binary rules achieve 100% agent compliance; judgment rules achieve ~0%." CP-02 was written as a judgment rule ("MAY use SendMessage for quality-critical coordination"). Converting it to a binary rule prevents this failure entirely.

### Why CP-02 Was Ignored

CP-02 was ignored because it conflicted with a STRONGER behavioral signal: file-writing emphasis. The builder's primary instruction was "write ceiling-page.html." The CP-02 instruction was "you may also send messages." When a permissive instruction competes with a directive instruction, the directive wins -- especially for LLM agents who optimize for task completion.

The Middle experiment had the same pattern (0 messages), which means the failure was PREDICTED by prior evidence. The retrospective team specifically identified this: "zero SendMessage = quality cost." Despite knowing this, the ceiling prompt used "MAY" instead of "MUST."

### Prevention

**Specific change:** Convert CP-02 from permission to gate:

1. **Mandatory check-in gate (binary):** "After reading the build plan, the builder MUST send exactly 1 CLARIFICATION-REQUEST message to the planner confirming understanding OR identifying ambiguities. The team-lead MUST verify this message exists before allowing build to proceed. If no message is sent, team-lead sends the builder a reminder."

2. **Mandatory acknowledgment (binary):** "After build is complete, the builder MUST send exactly 1 ANOMALY-FLAG message to team-lead listing any plan specifications they could not implement. If all specifications were implemented, send 'All specifications implemented, no anomalies.'"

3. **Team-lead enforcement (binary):** "Team-lead counts SendMessage calls. If builder sends 0 messages during Phase 2b, team-lead pauses Phase 3 and asks builder: 'You sent 0 messages. Confirm: (a) all plan specifications were clear and implemented, or (b) you have unresolved questions.' Only proceed to Phase 3 after confirmation."

These convert the soft "MAY" into hard gates that require minimum 2-3 messages per agent without creating conversational overhead.

---

## FAILURE 5: Fix Patches Failed to Resolve the Void

### Root Cause Chain

```
SURFACE: Re-audit found 70-80% void UNCHANGED despite fix claiming
         content-to-void shift from 30:70 to 65:35
    |
    v
INTERMEDIATE-1: Fix estimated ~1,652px whitespace reduction across
                 40 changes. On a page with ~8,000-10,000px of void,
                 this reduces void to 6,500-8,500px -- still catastrophic.
    |
    v
INTERMEDIATE-2: All 40 fix changes were CSS/HTML structural modifications.
                 Zero new content was added. The fix reduced PADDING
                 around empty containers but did not fill empty containers.
    |
    v
INTERMEDIATE-3: The fix team diagnosed the problem as "too much padding"
                 (CSS spacing problem) when the actual problem was
                 "zones that promise content but deliver little"
                 (content/architecture problem)
    |
    v
ROOT CAUSE: Misdiagnosis. The fix team treated the void as a SPACING
            problem (fixable with CSS margin/padding reduction) when
            it was a CONTENT problem (zones with structural containers
            but insufficient content to fill them). The re-audit
            explicitly states: "The fix failed because it treated a
            CONTENT problem as a SPACING problem."
```

### Classification: **PROCESS FIXABLE**

This is a diagnosis error, not an inherent limitation. The fix team had the right STRATEGY (their approach was described as "exactly the right approach" by the re-auditor) but wrong ROOT CAUSE IDENTIFICATION.

### Why the Fix Team Misdiagnosed It

Three factors contributed:

**Factor 1: Fix scope was CSS-only.** The fix team was tasked with "fix the whitespace void." They interpreted this as "reduce whitespace" (CSS) rather than "add content or restructure zones" (architectural). CSS fixes are local and safe; architectural changes risk breaking other passing criteria (soul compliance, token compliance, mechanism deployment). The fix team optimized for safety over effectiveness.

**Factor 2: No pre-fix measurement.** The fix team estimated whitespace savings arithmetically (sum of individual padding reductions) without measuring the TOTAL page void before and after. The estimated shift from 30:70 to 65:35 was based on summing individual savings, not on actual measurement. 1,652px savings sounds large, but when distributed across a 12,000px page, each individual reduction is imperceptible.

**Factor 3: Zones were treated as fixed architecture.** The fix team accepted the 4-zone structure as given and tried to compress it. They did not consider the most effective fix: eliminating zones with insufficient content. The adversarial auditor recommended "eliminate zones or reduce to 2-3," but this recommendation came AFTER the fix, not before it.

### Prevention

**Specific change 1: Root cause classification gate.** Before applying fixes, require explicit classification: "Is this a CSS problem (fix with style changes), a CONTENT problem (fix with content addition/removal), or an ARCHITECTURE problem (fix with structural reorganization)?" Force the fix team to state which category the problem falls in and justify their classification.

**Specific change 2: Pre/post measurement.** Before applying fixes, measure total page height, total content height (elements with text/images), and void height (total minus content). After applying fixes, re-measure. If void percentage does not decrease by at least 15 absolute percentage points (e.g., 70% to 55%), the fix is INSUFFICIENT and must be escalated to architectural changes.

**Specific change 3: Architectural fix authority.** Give the fix team explicit authority to restructure zones (merge, eliminate, reorder) if CSS-only fixes are projected to reduce void by less than 50% of the gap to the target. Currently, the fix team treated zone count as locked. It should be challengeable.

---

## FAILURE 6: Initial Audit Dismissed Whitespace as Playwright Artifact

### Root Cause Chain

```
SURFACE: 07-VERDICT.md classified PA-2's "3,600px of blank space" as
         Playwright contention artifact, not page defect
    |
    v
INTERMEDIATE-1: PA-2 was the ONLY evaluator in the initial audit
                 reporting content gaps; PA-1, programmatic, comparative,
                 and team-lead all saw full content
    |
    v
INTERMEDIATE-2: The initial audit used lightweight format:
                 1 programmatic + 2 PAs + 1 comparative + 1 novelty
                 (5 evaluators, narrow perceptual coverage)
    |
    v
INTERMEDIATE-3: Known Playwright contention issues had been documented
                 in prior experiments, creating a ready-made dismissal
                 frame for any blank rendering
    |
    v
ROOT CAUSE: The audit format had insufficient perceptual BREADTH
            to distinguish between artifact and defect. With only
            2 PAs, one reporting void and one not, the verdict
            defaulted to "artifact" using Occam's razor. Mode 4
            (9 auditors) produced 9/9 independent void reports,
            making artifact dismissal impossible. The lighter audit's
            STRUCTURAL LIMITATION was insufficient sample size for
            perceptual findings.
```

### Classification: **PROCESS FIXABLE**

The Mode 4 audit format was specifically designed to catch what lighter audits miss. It succeeded -- the whitespace void was the "DOMINANT finding" that 9/9 auditors independently flagged. The lesson is that audit format selection must match the severity of what is being evaluated.

### What Checking Mechanism Would Have Caught This Earlier

**Mechanism 1: Automated void detection.** A programmatic check that measures total scroll height vs content-bearing height. Script: iterate through all DOM elements, sum their heights, compare to `document.documentElement.scrollHeight`. If content-bearing height is less than 40% of scroll height, flag "POTENTIAL VOID PROBLEM -- investigate before perceptual audit."

**Mechanism 2: Scroll-capture audit.** Instead of full-page screenshot, capture screenshots at every viewport-height interval (position 0, position 900, position 1800, etc.). If more than 3 consecutive captures show no content (only background color), flag as void concern. This removes ambiguity about whether blank space is artifact or content.

**Mechanism 3: PA-2 rehabilitation rule.** When one PA reports a finding and the other does not, the PESSIMISTIC rule should apply for spatial findings (PA-09, PA-12, PA-33). The verdict's dismissal of PA-2 violated its own reconciliation protocol, which states: "If ONE auditor sees a problem, it's real for that viewer." The verdict overrode this with "4 other evaluators didn't see it," but the other evaluators were NOT perceptual auditors -- they were programmatic/comparative evaluators who by definition do not assess spatial perception.

**Mechanism 4: Default to Mode 4 for ceiling/flagship.** For any page targeting ceiling tier or above, ALWAYS use Mode 4 (9+ auditors) for the primary audit. Lighter audits are appropriate for middle tier where defect surfaces are smaller. Ceiling tier has too many dimensions for 2 PAs to cover.

---

## FAILURE 7: Metaphor "Announced Not Structural" (40% Without Labels)

### Root Cause Chain

```
SURFACE: Auditor G assessed metaphor at 40% strength without labels;
         zone boundaries become invisible without text anchors
    |
    v
INTERMEDIATE-1: The metaphor's visual expression relies on zone
                 background colors (#FEF9F5, #FAF5ED, #FFFFFF, #FAF5ED)
                 which differ by only 5-10 in RGB values -- nearly
                 indistinguishable perceptually
    |
    v
INTERMEDIATE-2: The soul constraints prohibit the tools that would
                 make zones visually distinct: no gradients (prevents
                 zone transitions), no shadows (prevents depth encoding),
                 no border-radius (prevents zone shape differentiation),
                 warm-only palette (prevents cool vs warm zone contrast)
    |
    v
INTERMEDIATE-3: The available visual channels for zone differentiation
                 under soul constraints are: border weight (1px/3px/4px),
                 background shade (minimal range), spacing compression
                 (perceptible but subtle), and text labels
    |
    v
ROOT CAUSE: The soul constraint vocabulary is TOO NARROW for structural
            metaphor expression at the zone-differentiation level.
            The 3 permitted border weights and the narrow warm palette
            provide insufficient visual contrast to make zone boundaries
            perceptible WITHOUT text labels. Text labels become the
            PRIMARY metaphor carrier, which downgrades the metaphor
            from "structural" (visual) to "announced" (textual).
```

### Classification: **STRUCTURAL** (with fixable component)

This is a fundamental tension between the soul constraints (austerity doctrine) and metaphor expression (expansion doctrine). The adversarial anti-scale document identifies this precisely: "The soul is constraint. Scales are complexity. These two doctrines are in FUNDAMENTAL TENSION."

### Does This Mean the Metaphor Was Wrong or the Implementation Was Wrong?

**The metaphor was appropriate; the implementation medium was constrained.**

The secure facility metaphor is conceptually sound -- all auditors recognized it, and the blind novelty assessment scored 9/9. The problem is not the metaphor IDEA but the metaphor VISUALIZATION. The soul constraints close off the visual channels (gradients, shadows, varied radius, cool tones) that would make zone boundaries perceivable without text.

Evidence for "implementation medium constrained" (not "wrong metaphor"):
- All 9 Mode 4 auditors perceived the metaphor -- they could READ it, just not SEE it
- The metaphor scored 3/3 on structural fingerprint in blind assessment
- The comparative auditor called it "STRUCTURAL, not DECORATIVE"
- Even at 40% visual strength, the metaphor was still the page's most recognizable feature

Evidence against "wrong metaphor":
- A metaphor that requires text labels to work is operating more like a NAMING CONVENTION than a VISUAL METAPHOR
- At 40% visual strength, removing labels makes the page look like "generic technical documentation with some spacing variation" rather than "secure facility"
- The facility metaphor specifically demands VISIBLE zone boundaries, which the soul constraints make nearly invisible

### The Fixable Component

**Change 1: Increase zone color differentiation within soul constraints.** The original zone colors differed by ~5-10 RGB values. The fix attempted to increase this (Change 1 in CHANGELOG: `#FAFAFA` and `#F5EFE4`). This should be pushed further -- the soul allows warm palette variations, so using `#FEF9F5` (lightest) vs `#EDE5D8` (warmest) would create ~25 RGB value difference, which is 3-5x more perceptible.

**Change 2: Use structural borders as zone markers.** The fix added bilateral borders to secured zones (Change 15-16: `border-left: 4px solid`). This is the right approach -- border weight is the STRONGEST visual channel under soul constraints. Each zone should have a DISTINCT border treatment that is perceivable without reading labels.

**Change 3: Accept partial text-dependency as ceiling-tier reality.** A 60% visual / 40% textual metaphor expression may be the achievable optimum under soul constraints. The flagship prompt should set the target at "60%+ visual metaphor survival" rather than "100% structural," and document this as a known constraint-imposed ceiling.

### What This Means for Flagship

Flagship metaphor selection should favor metaphors whose zone boundaries are expressible through the AVAILABLE visual channels (border weight, spacing, warm palette variation) rather than channels the soul prohibits (gradients, shadows, cool tones). For example:

- **GOOD for soul:** Control panel (boundaries via border weight), library (boundaries via spacing density), ledger (boundaries via typographic treatment)
- **BAD for soul:** Landscape (requires color gradients), ocean depth (requires cool tones), layered geology (requires gradient transitions)

The secure facility metaphor was at the boundary -- its zone boundaries are expressible through border weight and spacing, but the DEGREE of expression is limited. A control panel metaphor might achieve 70-80% visual survival because panel boundaries are naturally expressed through borders (strong soul channel).

---

## Cross-Cutting Findings

### Finding 1: The Attention Budget Problem

Failures 1, 3, and 7 share a common root: the ceiling-tier prompt asked the builder to optimize across TOO MANY dimensions simultaneously. The builder had to maintain:

- Soul compliance (8 constraints)
- Token compliance (80%+ var())
- Container width (960px)
- CPL (45-80 characters)
- Heading spacing ratio (1.5:1)
- Metaphor coherence (4 zones, 7 transitions, 14 mechanisms)
- PA-05 (4 sub-criteria)
- Landmark completeness
- Responsive behavior
- Visual rhythm variation

When a builder is maintaining 10+ constraint dimensions, attention to each dimension is proportionally reduced. The PROPORTIONATE dimension (PA-05c) requires GESTALT perception -- stepping back to evaluate the whole page's spatial balance. This type of evaluation is incompatible with the detailed, per-mechanism attention that metaphor deployment demands.

**Implication for flagship:** Either reduce the number of simultaneous constraint dimensions, or split the build into PHASES where different dimensions are the focus:
- Phase A: Structure and content (zones, content, landmarks) -- gate on void budget
- Phase B: Mechanism deployment (14-18 mechanisms) -- gate on mechanism count
- Phase C: Proportion and polish (PA-05c, header budget, CPL) -- gate on proportion
- Phase D: Soul and token compliance -- gate on programmatic checks

### Finding 2: The Faithful Execution Trap

Failures 1 and 3 share another root: the builder FAITHFULLY EXECUTED a plan that contained structural problems. The build plan was 710 lines of detailed specification. The builder followed it exactly. The plan itself created the void (generous zone padding + checkpoint transitions) and the heavy header (metaphor demanded "facility sign" treatment).

This is a form of the "garbage in, garbage out" problem applied to LLM agents. When the plan is detailed and authoritative, the builder will not QUESTION its spatial implications -- they will implement it. The plan said "64px padding for exterior zone" and the builder used 64px. The plan said "80px checkpoint transition" and the builder used 80px. Each individual specification was reasonable; their AGGREGATE effect was catastrophic.

**Implication for flagship:** The PLANNER must include a "spatial impact projection" step. After specifying all zone paddings, checkpoint margins, and heading spacing, the planner must SUM them and calculate projected total page height vs projected total content height. If the ratio exceeds 40% void, the planner must compress before handing to the builder. This check must happen in the PLAN, not in the BUILD.

### Finding 3: The Process Debt Pattern

Failures 2, 5, and 6 all involve process failures where the CORRECT information existed but was not acted upon:

- Failure 2: CSS said 960px but auditor measured 2160px -- correct information ignored
- Failure 5: Re-audit recommended "content problem, not spacing problem" but fix team treated as spacing
- Failure 6: PA-2 reported void but verdict dismissed as artifact -- correct signal dismissed

In all three cases, the system contained the RIGHT information but the WRONG interpretation layer processed it. This is a recurring pattern in complex multi-agent workflows: signal-to-interpretation gaps multiply as the pipeline lengthens.

**Implication for flagship:** Add an explicit "signal disambiguation" step at each phase gate. Before proceeding to the next phase, the team lead must list all discrepancies between agents and resolve each one with explicit evidence, not inference. The current protocol allows discrepancies to be resolved by majority vote or Occam's razor, which is how PA-2's valid finding was dismissed.

---

## Classification Summary

| Failure | Process Fix | Tooling Fix | Spec Fix | Structural |
|---------|------------|-------------|----------|-----------|
| 1. Whitespace void | | | | PRIMARY (manageable via void budget) |
| 2. Container measurement | PRIMARY | SECONDARY | | |
| 3. Header proportions | | | PRIMARY | |
| 4. Zero messaging | | PRIMARY | | |
| 5. Fix misdiagnosis | PRIMARY | SECONDARY | | |
| 6. Audit dismissal | PRIMARY | SECONDARY | | |
| 7. Announced metaphor | | | TERTIARY | PRIMARY (manageable via channel selection) |

**Count:**
- PROCESS FIXABLE: 3 primary (Failures 2, 5, 6)
- TOOLING FIXABLE: 1 primary (Failure 4)
- SPECIFICATION FIXABLE: 1 primary (Failure 3)
- STRUCTURAL: 2 primary (Failures 1, 7) -- both manageable, neither preventable

**Key insight:** 5 of 7 failures are FULLY PREVENTABLE with process, tooling, or specification changes. The 2 structural failures are MANAGEABLE through constraint budgets (void budget, visual channel selection). No failure is INHERENTLY FATAL to the ceiling/flagship approach.

---

## Consolidated Prevention Checklist for Flagship

### Gates (Binary, Non-Negotiable)

1. **VOID BUDGET GATE (Phase 2 -- Planning):** Planner sums all zone paddings, checkpoint margins, heading spacing, and transition gaps. If projected void exceeds 30% of estimated page height, planner must compress or eliminate zones before handing to builder.

2. **CONTAINER VERIFICATION GATE (Phase 2.5):** Programmatic measurement of `.page-container` width via `getBoundingClientRect()`. Must return 940-960px. No visual measurement accepted.

3. **MESSAGING GATE (Phase 2b):** Builder MUST send at least 1 CLARIFICATION-REQUEST after reading plan and at least 1 ANOMALY-FLAG after completing build. Team-lead verifies message count before proceeding.

4. **PROPORTION BUDGET (Phase 2 -- Planning):** Header <= 20% of first viewport. No single zone may exceed 40% of total scroll. Footer must be reachable within 1 viewport scroll from last content.

5. **ROOT CAUSE CLASSIFICATION (Fix Phase):** Before applying fixes, explicitly classify each defect as CSS, CONTENT, or ARCHITECTURE problem. CSS-only fixes for CONTENT or ARCHITECTURE problems require team-lead approval and justification.

### Guardrails (Automated, Background)

6. **VOID DETECTOR (Phase 2.5):** Script measures total scroll height vs content-bearing element height. If content < 40% of scroll, flag and block perceptual audit.

7. **SCROLL-CAPTURE AUDIT (Phase 3):** Capture screenshots at every viewport-height interval. If 3+ consecutive captures show only background, flag as void concern.

### Protocol Changes (Soft, Process-Level)

8. **MODE 4 DEFAULT FOR CEILING+:** Always use 9+ auditor Mode 4 for ceiling or flagship tier. Lighter audits miss dominant perceptual failures.

9. **PESSIMISTIC RULE FOR SPATIAL FINDINGS:** When 1 PA reports void/dead space and another does not, default to the PA that reports the problem. Spatial failures cannot be safely dismissed.

10. **METAPHOR CHANNEL SELECTION:** During metaphor derivation, explicitly map zone-boundary expression to AVAILABLE visual channels (border weight, spacing, warm palette variation). If zone boundaries require PROHIBITED channels (gradients, shadows, cool tones), select a different metaphor.

11. **SPATIAL IMPACT PROJECTION:** Planner calculates total projected page height from all spacing specifications. Compares to estimated content volume. Documents content-to-void ratio before handing plan to builder.

12. **PHASED BUILD EXECUTION:** Split build into Structure (zones + content + landmarks), Mechanisms (14-18 deployments), Proportion (PA-05c + header budget), and Compliance (soul + tokens). Gate each phase independently.

---

## The Bottom Line

The ceiling experiment's failures are overwhelmingly PROCESS failures, not COMPOSITION failures. The page that was built contains genuinely excellent compositional work -- 9/9 novelty, 8/8 soul compliance, structurally recognized metaphor, architectural rhythm. The failures were in MANAGING the build, not in CONCEIVING it.

Five of seven failures are fully preventable with specific, concrete changes to gates, measurements, and protocols. The two structural failures (metaphor-induced void, visual channel poverty) are manageable through constraint budgets -- they represent the COST of ceiling-tier ambition, not a reason to abandon it.

The single most important change for flagship is the **void budget gate**: requiring the planner to calculate projected content-to-void ratio BEFORE handing to the builder. This single gate would have prevented Failure 1 (the dominant failure that caused the DO NOT SHIP verdict), and would have forced earlier detection of Failure 5 (fix misdiagnosis) and Failure 6 (audit dismissal). The void budget gate addresses the root cause of the root cause: plans that sound reasonable per-specification but produce catastrophic aggregate spatial failure.

---

**ANALYSIS COMPLETE**

**Failures analyzed:** 7
**Root cause chains traced:** 7
**Process fixable:** 3
**Tooling fixable:** 1
**Specification fixable:** 1
**Structural (manageable):** 2
**Inherently fatal:** 0
**Single highest-leverage change:** Void budget gate (Phase 2 planning)
