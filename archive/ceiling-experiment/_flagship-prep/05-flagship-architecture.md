# Flagship Experiment Architecture

**Author:** Flagship Architecture Designer (Opus 4.6)
**Date:** 2026-02-16
**Evidence Base:**
- 07-VERDICT.md (Ceiling experiment final verdict, 851 lines)
- AUDIT-REPORT.md (Mode 4 standalone PA, 9 auditors, 492 lines)
- 03-diminishing-returns.md (economics of scale depth, 758 lines)
- 05-cross-domain-theory.md (5 scales x N channels, 466 lines)
- 06-adversarial-anti-scale.md (restraint > saturation, 431 lines)
- 04-showcase-archaeology.md (intentionality gap, 267 lines)
- TIER-COMPARISON-MATRIX.md (tier definitions, 1,047 lines)
- CEILING-PREPARATION-BRIEF.md (unified synthesis, 505 lines)

**Purpose:** Design the execution architecture for a flagship experiment that avoids the ceiling experiment's failures while achieving higher compositional quality.

---

## EXECUTIVE SUMMARY

The flagship experiment should NOT be a single-pass build at flagship tier. The evidence overwhelmingly argues for a **two-pass ceiling-tier build with targeted intentionality layering**, which the research shows will produce higher perceived quality than a single-pass flagship attempt at lower risk and lower cost.

The ceiling experiment's failures were not caused by insufficient ambition. They were caused by three specific, interacting problems: (1) the builder's spatial attention was consumed by metaphor-detail work, producing catastrophic whitespace void; (2) zero inter-agent messaging prevented collaborative correction; (3) no gate existed between spatial composition and higher-scale elaboration. The flagship architecture addresses all three through a phased execution model with hard gates.

**Core thesis:** Richness = f(spatial_confidence x restraint x iteration_depth), NOT f(scale_count x mechanism_count). The flagship experiment operationalizes this formula.

---

## A. EXECUTION MODEL

### Multi-Pass: Three Passes, Each With a Distinct Purpose

**Pass 1: SPATIAL SKELETON (Build at Ceiling minus metaphor elaboration)**

Build the page's spatial architecture first: container, section flow, density rhythm, header/footer, overall proportions. Deploy 8-10 mechanisms selected through a metaphor lens, but DO NOT elaborate the metaphor at detail/character scale yet. The metaphor INFORMS mechanism selection but does not yet manifest in vocabulary, labels, or zone naming.

Purpose: Establish spatial confidence (Scale 1-2) before any higher-scale work begins. This directly addresses the ceiling experiment's dominant failure: the builder spent attention on metaphor vocabulary (WS-01, CHECK-01, ZONE labels) while Scale 1 proportions collapsed into 70-80% whitespace void.

Pass 1 ends with the Spatial Confidence Gate (Section B).

Time estimate: 50-70 minutes (metaphor derivation: 20-30 min + skeleton build: 30-40 min).

**Pass 2: COMPOSITIONAL ELABORATION (Ceiling-tier metaphor integration)**

With spatial proportions verified, layer the metaphor's full expression onto the skeleton: multi-channel encoding (reinforcing pairs), section-scale coherence, metaphor-derived vocabulary, designed moments. Add 4-6 additional mechanisms. Total count: 12-16.

Purpose: Achieve compositional fluency (Scale 2-4) within a spatially sound container. The builder works with a verified spatial frame, so elaboration cannot accidentally destroy proportions. Any mechanism that threatens the spatial skeleton gets REJECTED (restraint protocol, Section C).

Pass 2 ends with the Composition Verification Gate.

Time estimate: 40-60 minutes.

**Pass 3: INTENTIONALITY LAYER (The showcase archaeology dimension)**

The showcase archaeology research (04-showcase-archaeology.md) identified that the gap between Ceiling and Flagship is NOT more spatial richness -- it is INTENTIONALITY: self-reference, pedagogical sequencing, cognitive mode transitions, structural bookending, meta-annotation. These account for 15-20% of crown jewel quality and are orthogonal to the 5-scale spatial model.

Pass 3 adds:
- Structural bookending (opening/closing echo)
- Cognitive transition content (bridge text between sections)
- At least one self-referential element (content that demonstrates its own form)
- Meta-annotation where natural (section labels that explain the architecture)

This pass does NOT add CSS complexity. It adds HTML content and structural reasoning. It is the cheapest pass in terms of mechanism cost and the highest in terms of perceived quality differentiation.

Time estimate: 20-30 minutes.

Total: 110-160 minutes across 3 passes.

### Sequential vs Parallel

- **Passes are SEQUENTIAL.** Each depends on the previous pass's verified output. Pass 2 cannot begin until Pass 1 clears the Spatial Confidence Gate. Pass 3 cannot begin until Pass 2 clears the Composition Verification Gate.
- **Within each pass, agents work in parallel** where dependencies allow (e.g., audit agents run in parallel with each other).
- **Metaphor derivation (Phase 1-3) runs in parallel with content preparation** since it does not depend on the skeleton build.

### Team Size

**Minimum: 12 agents. Maximum: 16 agents.**

| Agent | Model | Role | Pass | Output |
|-------|-------|------|------|--------|
| team-lead | Opus 4.6 | Orchestration, gates, messaging hub, screenshot capture | All | Coordination + screenshots |
| metaphor-agent | Opus 4.6 | Phases 1-3 metaphor derivation | Pre-1 | 01-metaphor-derivation.md |
| planner | Opus 4.6 | Build plan (skeleton) + elaboration plan | 1-2 | 02-skeleton-plan.md, 02b-elaboration-plan.md |
| skeleton-builder | Sonnet 4.5 | Pass 1 HTML/CSS skeleton | 1 | flagship-page.html (v1) |
| spatial-auditor | Sonnet 4.5 | Spatial Confidence Gate checks | 1 | 03-spatial-audit.md |
| elaboration-builder | Sonnet 4.5 | Pass 2 metaphor elaboration | 2 | flagship-page.html (v2) |
| intentionality-builder | Opus 4.6 | Pass 3 intentionality layer | 3 | flagship-page.html (v3) |
| programmatic-auditor | Sonnet 4.5 | Binary compliance checks | 2-3 | 04-programmatic-audit.md |
| perceptual-auditor-1 | Sonnet 4.5 | Fresh-eyes PA (zero context) | 3 | 05a-perceptual-audit.md |
| perceptual-auditor-2 | Sonnet 4.5 | Independent fresh-eyes PA | 3 | 05b-perceptual-audit.md |
| comparative-auditor | Sonnet 4.5 | Flagship vs Ceiling vs Middle | 3 | 06-comparison-report.md |
| novelty-evaluator | Sonnet 4.5 | Blind multi-page evaluation | 3 | 07-novelty-assessment.md |
| verdict-synthesizer | Opus 4.6 | Final synthesis | 3 | 08-VERDICT.md |

Optional (if available):
- perceptual-auditor-3 (for Mode 4 breadth)
- restraint-auditor (dedicated to checking mechanism restraint ratio)
- intentionality-reviewer (verifies Pass 3 additions)

**Model split reasoning:** 4 Opus (team-lead, metaphor-agent, planner, intentionality-builder) + 8-9 Sonnet (execution roles). The intentionality-builder is Opus because Pass 3 requires the kind of compositional reasoning (self-reference, bookending, cognitive choreography) that benefits from stronger creative judgment. All other building and auditing is Sonnet.

### Messaging Protocol

**Mandatory bidirectional messaging via SendMessage.** File-bus for primary deliverables; SendMessage for all of the following:

1. **Clarification requests:** Builder to Planner ("How does the metaphor express at header level?")
2. **Issue flags:** Any agent to Team-Lead ("Spatial proportion concern at section 3")
3. **Gate results:** Spatial-Auditor to Team-Lead ("PASS/FAIL with evidence")
4. **Iteration requests:** Team-Lead to Builder ("Reduce header height by 30%")
5. **Mandatory check-in:** Builder sends message to Planner after reading plan, before building. Confirms understanding or asks questions.

**Minimum message threshold:** 8 substantive messages across the full experiment. This is NOT a vanity metric -- the ceiling experiment's zero-messaging pattern correlated with both the middle experiment's missing footer AND the ceiling experiment's undetected whitespace void during build. Messages are the mechanism by which spatial problems get caught before they calcify.

**Enforcement:** Team-lead checks message count at Pass 1 completion. If zero messages from skeleton-builder, team-lead explicitly prompts: "Did you have any questions about the plan? Is the spatial proportion intentional?"

### Gates Between Stages

**Gate 1: Metaphor Resonance Gate (after Phase 1-3)**
- Metaphor derived independently (not pattern-matched from library)
- Cross-domain structural isomorphism documented
- Metaphor maps to at least 3 mechanism categories
- BLOCKING: If metaphor fails resonance, re-derive before proceeding

**Gate 2: Spatial Confidence Gate (after Pass 1) -- See Section B**

**Gate 3: Landmark Completeness Gate (after Pass 1)**
- Header exists with appropriate treatment
- Footer exists with content
- All planned sections present in HTML
- Container width verified at 940-960px
- BLOCKING: Team-lead verifies manually

**Gate 4: Composition Verification Gate (after Pass 2)**
- All reinforcing pairs implemented and documented
- 4-scale coherence present (Navigation + Page + Section + Component)
- Mechanism count in 12-16 range
- 3+ transition types deployed
- PA-05 quick-check by team-lead (squint test at 1440px)
- BLOCKING: If PA-05c (PROPORTIONATE) would fail, reduce mechanisms before proceeding

**Gate 5: Ship-Ready Gate (after Pass 3)**
- Full programmatic audit passes
- Dual perceptual audit completes
- Comparative audit vs Ceiling and Middle
- Blind novelty assessment
- All success criteria evaluated with margins

---

## B. THE SPATIAL CONFIDENCE GATE

### Why This Gate Exists

The ceiling experiment's catastrophic failure was spatial. 9/9 Mode 4 auditors independently identified the whitespace void as the dominant concern. The previous lighter audit entirely missed it. The page had 14 mechanisms deployed in CSS, but only 1 was perceptually visible because the spatial composition buried the others under screens of blank cream.

The spatial confidence gate ensures that NO higher-scale work begins until the page passes the squint test. It operationalizes the adversarial research's central claim: "Spatial confidence has a VETO: no amount of micro-scale coherence rescues a page that fails the squint test."

### What This Gate Checks

The gate is run by the spatial-auditor agent (Sonnet 4.5) and verified by the team-lead. It checks 7 concrete, binary-verifiable conditions:

**SC-01: Container Width**
- Content container max-width is 940-960px at 1440px viewport
- Measured via computed style, not CSS declaration (the ceiling experiment had correct CSS but incorrect rendering)
- BINARY: Pass/Fail

**SC-02: Void Budget**
- No contiguous vertical space exceeding 1.5 viewport heights (2160px at 1440px) is contentless
- Measured by scrolling through the page and identifying any span of blank space longer than 1.5 screens
- BINARY: Pass/Fail (max 15% of total scroll depth may be contentless)

**SC-03: Content Distribution**
- Content is present in at least 70% of the page's vertical scroll depth (measured at 1440px)
- The page's "visual weight" is distributed across the full scroll, not front-loaded
- BINARY: Pass/Fail

**SC-04: Squint Test**
- Team-lead (or spatial-auditor via screenshots) views page at 1440px at 25% zoom (simulating squint)
- At this zoom, the page should show balanced mass distribution with no blank quadrants
- JUDGMENT (team-lead decides): The only judgment call in the gate, but the most important one

**SC-05: First Viewport Ratio**
- Header occupies less than 25% of the first viewport at 1440px
- Content begins within the first viewport
- BINARY: Pass/Fail

**SC-06: Section Count Verification**
- All sections from the build plan are present in the HTML
- Each section contains at least one block of text or interactive content
- BINARY: Pass/Fail

**SC-07: Footer Reachability**
- Footer is reachable by scrolling (not buried under excessive void)
- The last content section is followed by at most 1 viewport height of space before the footer
- BINARY: Pass/Fail

### Who Runs It

1. **Spatial-auditor (Sonnet 4.5):** Runs SC-01, SC-02, SC-03, SC-05, SC-06, SC-07 via Playwright + programmatic checks. Writes results to 03-spatial-audit.md.
2. **Team-lead (Opus 4.6):** Takes screenshot at 1440px, evaluates SC-04 (squint test). Verifies spatial-auditor's results.

### What Happens If It Fails

**If SC-01 (container) or SC-02 (void budget) fails:** STOP. Do not proceed to Pass 2. Team-lead messages skeleton-builder with specific fix instructions. Builder fixes and re-submits. Spatial-auditor re-runs the gate. Maximum 2 fix cycles. If still failing after 2 cycles, ABORT the flagship attempt and rebuild at Ceiling tier (see Kill Criteria, Section F).

**If SC-04 (squint test) fails:** Team-lead makes a judgment call:
- If fixable (e.g., one section too sparse): send fix instruction, re-run gate
- If structural (e.g., the metaphor requires void that cannot be eliminated): ABORT and re-derive metaphor or downgrade to Ceiling tier

**If any other check fails:** Fix and re-run. These are typically simple corrections (missing section, header too tall).

### Why It Cannot Be Bypassed

The gate is BLOCKING in the orchestration flow. The team-lead's prompt explicitly states:

"DO NOT spawn Pass 2 agents until ALL 7 spatial confidence checks pass. If you bypass this gate, the experiment will produce the same catastrophic whitespace void as the ceiling experiment. This gate is the single most important process improvement in the flagship architecture."

The gate is also enforced structurally: Pass 2 agents receive flagship-page.html as input. If the team-lead does not release the v1 file (by confirming gate passage), Pass 2 agents have no input to work with.

---

## C. THE RESTRAINT PROTOCOL

### Philosophy

The adversarial research (06-adversarial-anti-scale.md) makes a compelling case that richness = restraint, not saturation. The ceiling experiment deployed 14 mechanisms. Mode 4 auditors perceived only 1 dramatic moment. The page was saturated -- every zone had labels, every transition had vocabulary, every scale had coherent expression. But saturation eliminated drama because drama requires CONTRAST: something present against something absent.

The restraint protocol operationalizes "deliberate absence" as a first-class design concept.

### Mechanism Rejection Requirement

**For every mechanism DEPLOYED, the planner must document at least one mechanism CONSIDERED AND REJECTED.**

Target ratio: **1.5:1 reject-to-deploy.** For 14 deployed mechanisms, at least 21 should be considered-and-rejected. This means the planner evaluates 35+ mechanism placements and KEEPS only 14.

In practice, since the catalog has 18 mechanisms, the rejection happens at the PLACEMENT level, not the mechanism level: "Mechanism #1 (border-weight gradient) is deployed for section hierarchy but REJECTED for callout differentiation (callout differentiation is handled solely by 2-zone DNA, keeping callouts quiet)."

### Maximum Mechanism Count

**Hard cap: 16 mechanisms deployed.** The ceiling experiment deployed 14 and produced catastrophic whitespace with only 1 perceivable moment. Adding more mechanisms will not improve perception. The cap exists to prevent the planner from treating mechanism count as a quality proxy.

**Soft recommendation: 12-14 mechanisms.** This is the ceiling tier's natural landing zone. The flagship experiment's quality uplift comes from intentionality (Pass 3), not from mechanism density.

**The number 12-14 is deliberate.** It is the same count the ceiling experiment used. The flagship is not trying to deploy MORE mechanisms -- it is trying to deploy them with better spatial distribution and add the intentionality layer that the showcase archaeology identified as the actual Ceiling-to-Flagship gap.

### Quantifying "Deliberate Absence"

The planner documents a **Restraint Map** in the elaboration plan (02b-elaboration-plan.md):

```
RESTRAINT MAP

Mechanism #5 (Dense/Sparse Alternation):
  DEPLOYED at: Page-level section rhythm (sections 1, 3, 5 sparse; 2, 4 dense)
  REJECTED at: Within-section paragraph rhythm (paragraphs are uniformly spaced)
  REASON: Section-level alternation creates macro rhythm. Adding paragraph-level
           alternation would create double rhythm that reads as noise, not signal.

Mechanism #9 (Color-Based Semantic Encoding):
  DEPLOYED at: Callout border-left (red = critical, blue = informational)
  REJECTED at: Section background tinting (sections are NOT color-coded)
  REASON: Color encoding at section scale would compete with zone backgrounds
           for the reader's attention. One channel for color encoding is sufficient.

SILENCE ZONES:
  - Between Zone 2 and Zone 3: NO mechanism deploys here. This is a designed
    breathing space. The absence of mechanisms at this transition IS the
    transition. Filling it would destroy the reading pause.
  - Callout interiors: Only 2-zone DNA (sparse label / dense body). No border-
    weight gradient, no color encoding, no spacing compression inside callouts.
    Callouts are QUIET containers.
```

### What "Deliberate Absence" Looks Like in Practice

The Middle experiment's strength was accidental restraint: by not having a metaphor, it left Scale 3-5 empty. That silence let Scales 1-2 breathe. The flagship experiment's restraint must be INTENTIONAL:

1. **At least 2 "silence zones"** -- sections or transitions where no mechanism deploys. These are documented in the Restraint Map as deliberate design decisions, not omissions.

2. **At least 1 mechanism that is available but ENTIRELY unused.** The planner considers all 18 mechanisms and consciously excludes at least 1 from the page entirely, with documented rationale.

3. **No mechanism deploys at all 5 scales.** Every mechanism has a maximum of 3 scales where it operates. This prevents the ceiling experiment's failure mode where every zoom level was saturated.

---

## D. THE MULTI-PATTERN QUESTION

### The Tier Model's Prediction vs Reality

The tier comparison matrix defines Flagship as "3-5 patterns with conscious handoffs." The ceiling experiment could not manage 1 metaphor without catastrophic void. Should the flagship attempt multiple patterns?

### Recommendation: ONE Pattern, Multi-Channel Expression, Plus Intentionality

The flagship experiment should use **1 pattern with multi-channel expression** (the Ceiling tier's compositional approach), NOT multiple competing patterns (the tier model's Flagship definition). Here is the reasoning:

**Evidence 1: The "5 scales x N channels" model.** The cross-domain theory (05-cross-domain-theory.md) discovered that every creative field -- music, architecture, typography, cinema, software -- found that richness comes from adding CHANNELS per scale, not more scales or more patterns. Typography does not add a 7th optical size; it adds weight, spacing, color, contrast as independent channels at existing sizes. The flagship should add channels (more dimensions of meaning per mechanism), not patterns.

**Evidence 2: The intentionality gap.** The showcase archaeology (04-showcase-archaeology.md) found that the Ceiling-to-Flagship gap is NOT "more spatial richness" -- it is INTENTIONALITY (self-reference, bookending, cognitive choreography). These are orthogonal to pattern count. CD-006 used 3 patterns and scored 39/40. But its richness came primarily from content-form alignment, pedagogical sequencing, and structural bookending -- not from pattern transitions. The patterns were a vehicle; the intentionality was the driver.

**Evidence 3: The execution ceiling.** The diminishing returns analysis (03-diminishing-returns.md) identified an LLM context management wall at approximately 800-1000 CSS lines. The ceiling experiment hit this wall at 850 lines. Multiple patterns would require 1200-1500 lines, well beyond the demonstrated wall. Single-pass flagship execution at this CSS complexity has approximately 25-30% probability of success (extrapolated from the 40% reproducibility at 5 scales, degraded by the empirical context wall evidence).

**Evidence 4: The restraint argument.** The adversarial research (06-adversarial-anti-scale.md) argues that "richness comes from the ratio of signal to silence, not from the total amount of signal." Multiple patterns increase signal density across the page. One pattern with deliberate silences creates contrast. The ceiling experiment proved the former fails; the Middle experiment suggests the latter works.

### What "One Pattern, Multi-Channel" Looks Like

Instead of 3 patterns (F-PATTERN + BENTO + CRESCENDO) with transitions, the flagship uses:

**1 pattern (selected through metaphor derivation)** with:
- 3+ CSS channels encoding the same semantic dimension simultaneously (border-weight + zone background + spacing compression)
- 2+ secondary channels providing contrast (color encoding + typographic variation)
- 5+ channels total, but at a SINGLE pattern level

This produces the multi-channel coherence that defines ceiling-tier work, without the multi-pattern coordination overhead that makes flagship-tier work fragile.

### The Intentionality Layer Replaces Multi-Pattern

What makes the flagship page a flagship is NOT spatial complexity. It is the 15-20% intentionality dimension that the showcase archaeology identified:

| Instead of... | The flagship adds... |
|---------------|---------------------|
| Pattern A + Pattern B + transition | Structural bookending (opening echoes closing) |
| 3 competing metaphors | Cognitive mode transitions (reading shifts are designed) |
| 16-18 mechanisms across 3 patterns | Self-referential elements (content demonstrates its form) |
| Pattern-specific CSS vocabularies | Meta-annotation (page explains its own architecture) |
| 1200+ CSS lines | Pedagogical sequencing (argument arc, not just density arc) |

The intentionality layer is CHEAPER than multi-pattern orchestration (0 additional CSS lines vs 300-400 lines), MORE PERCEIVABLE (15-20% of crown jewel quality vs mechanism-level differences below perception threshold), and MORE REPRODUCIBLE (design intelligence decisions vs complex CSS coordination).

### When to Escalate to True Multi-Pattern

If the single-pattern + intentionality approach produces a page that still feels "Ceiling, not Flagship" after Pass 3, THEN consider a Pass 4 that adds a secondary pattern in one section. But this is a contingency, not the plan. The hypothesis is that intentionality provides the Ceiling-to-Flagship quality gap more reliably than multi-pattern orchestration.

---

## E. THE ITERATION QUESTION

### "Build at Ceiling, Iterate Twice, Ship" vs Genuine Flagship

The diminishing returns research recommends "build at Ceiling, iterate twice, ship" as the optimal path. The flagship architecture adopts a modified version of this recommendation:

**Build at Ceiling spatial quality (Pass 1), elaborate to Ceiling compositional quality (Pass 2), add flagship intentionality (Pass 3), audit and fix.**

This is functionally "build at Ceiling, add intentionality, audit" -- which is equivalent to "build at Ceiling, iterate twice, ship" but with a specific plan for what each iteration accomplishes.

### Cost/Benefit Analysis

**Option 1: 1 Ceiling-tier page with 2 iteration cycles (the research recommendation)**

| Metric | Value |
|--------|-------|
| Total time | 235 min (175 build + 15 audit + 30 fix + 15 audit) |
| CSS lines | 700-1000 |
| Mechanism count | 12-15 |
| Intentionality | LOW (iterations fix spatial/compliance, not intentionality) |
| Reproducibility | 70-80% (ceiling base + iteration fixes) |
| Expected PA-05 | 3.5-4/4 (iteration catches proportion issues) |
| Expected novelty | 7-9/9 (ceiling-tier novelty, confirmed by ceiling experiment) |
| Quality vs ceiling experiment | BETTER (fixes whitespace void via iteration) |
| Quality vs DD-006/CD-006 | 85-90% (missing intentionality layer) |

**Option 2: Flagship architecture (3-pass with intentionality)**

| Metric | Value |
|--------|-------|
| Total time | 200-280 min (including all 3 passes + audits + gates) |
| CSS lines | 800-1100 (ceiling-tier CSS + minimal intentionality CSS) |
| Mechanism count | 12-16 |
| Intentionality | HIGH (Pass 3 specifically targets this) |
| Reproducibility | 55-65% (higher than pure flagship due to gates + restraint) |
| Expected PA-05 | 3-4/4 (spatial gate prevents catastrophic void; header risk remains) |
| Expected novelty | 8-9/9 (ceiling-tier novelty + intentionality distinctiveness) |
| Quality vs ceiling experiment | SUBSTANTIALLY BETTER (fixes void + adds intentionality) |
| Quality vs DD-006/CD-006 | 90-95% (addresses the intentionality gap) |

**Option 3: Genuine flagship-tier page (multi-pattern, single pass)**

| Metric | Value |
|--------|-------|
| Total time | 320-400 min |
| CSS lines | 1200-1500 |
| Mechanism count | 16-18 |
| Intentionality | VARIABLE (may emerge or may be lost in CSS complexity) |
| Reproducibility | 25-40% (beyond context wall, multiple failure modes) |
| Expected PA-05 | 1.5-3/4 (high probability of spatial failure) |
| Expected novelty | 7-9/9 (novelty saturates at ceiling tier) |
| Quality vs ceiling experiment | UNCERTAIN (50% chance of worse due to spatial collapse) |
| Quality vs DD-006/CD-006 | 80-95% if succeeds; 40-60% if fails (bimodal) |

### Recommendation: Option 2 (Flagship Architecture, 3-Pass)

Option 2 provides the best expected value:

- **vs Option 1:** +5-10% quality (intentionality layer), +30-45 min cost, -10-15% reproducibility. The intentionality layer is specifically what the showcase archaeology identified as the Ceiling-Flagship gap. It is worth the modest additional cost and risk.

- **vs Option 3:** -80-120 min cost, +15-25% reproducibility, higher EXPECTED quality (because Option 3's bimodal outcome means its average quality is lower despite its ceiling being higher). Option 3 only wins if it succeeds, and it succeeds less than half the time.

The flagship architecture IS "build at Ceiling, iterate twice, ship" -- but with each iteration having a specific purpose (spatial verification, compositional elaboration, intentionality addition) rather than generic "fix what's broken."

---

## F. KILL CRITERIA

Specific, measurable conditions that trigger abandoning the flagship attempt:

### KILL-01: Spatial Confidence Gate Failure After 2 Fix Cycles

**Trigger:** Spatial-auditor reports SC-02 (void budget) or SC-03 (content distribution) failure after the skeleton-builder has attempted 2 fixes.

**Action:** ABORT flagship. Rebuild the current skeleton as a Ceiling-tier page (keep metaphor, reduce zone count, collapse sparse zones). Ship at Ceiling tier.

**Rationale:** If the metaphor structurally requires void (as the ceiling experiment's "secure facility" metaphor did), no amount of fixing will eliminate it. The metaphor itself is the problem. Ceiling tier with a different or simpler metaphor application is the fallback.

### KILL-02: PA-05c PROPORTIONATE Fails After Pass 2

**Trigger:** Team-lead's quick-check at Gate 4 (Composition Verification) indicates PA-05c would fail -- meaning spatial proportions have degraded during Pass 2 elaboration.

**Action:** ROLLBACK to Pass 1 output (v1). Re-run Pass 2 with a reduced elaboration plan: fewer mechanisms, more restraint. If PA-05c fails again after rollback + reduced Pass 2, DOWNGRADE to Ceiling tier.

**Rationale:** Pass 2 should ENHANCE spatial quality, not degrade it. If elaboration breaks proportions, the elaboration plan is too ambitious. The spatial gate passed for v1, so v1 is a known-good baseline.

### KILL-03: Total Time Exceeds 4 Hours (240 minutes)

**Trigger:** Wall-clock time from experiment start to Pass 3 completion exceeds 240 minutes.

**Action:** SHIP at current state. If Pass 2 is complete but Pass 3 is not, ship as Ceiling-plus (spatial + compositional, without intentionality layer). If only Pass 1 is complete, ship as Ceiling-minus.

**Rationale:** The diminishing returns research shows that build time grows exponentially with scale depth. If the experiment is taking longer than 240 minutes, something is structurally wrong (likely: excessive fix cycles at gates, indicating the metaphor-content fit is poor). Spending more time will not produce proportional quality improvement.

### KILL-04: Builder Cannot Produce Self-Checks Pass After 2 Attempts

**Trigger:** The skeleton-builder or elaboration-builder fails the self-check (CPL, tokens, landmarks) after 2 attempts.

**Action:** Team-lead reviews the failure. If CPL or token violations are systemic (not isolated), ABORT and diagnose. Likely cause: the metaphor is expressing through channels that conflict with guardrails (e.g., metaphor wants wide lines, CPL says max 80).

### KILL-05: Zero Messages After Pass 1

**Trigger:** No SendMessage calls from any builder agent after Pass 1 completion.

**Action:** Do NOT kill the experiment, but team-lead MUST send a probing message: "Review your output and confirm the spatial proportions are intentional. Were there any plan ambiguities?" If the response indicates the builder did not understand the plan, pause and clarify before proceeding to Pass 2.

**Rationale:** Zero messaging in both the Middle and Ceiling experiments correlated with defects that would have been caught by collaborative exchange. This is a yellow flag, not a red flag.

### KILL-06: Mode 4 Audit Returns "DO NOT SHIP" on BOTH Blocking Issues

**Trigger:** Final audit (if run as Mode 4) finds 2+ WOULD-NOT-SHIP issues that are both spatial in nature (not fixable by minor CSS adjustment).

**Action:** ABORT. Declare the flagship attempt failed. Document learnings. The page is structurally unsound and requires redesign, not repair.

---

## G. TIMELINE AND RESOURCE ESTIMATE

### Agent Count

**Core team: 13 agents**

| Role | Model | Count |
|------|-------|-------|
| Team-lead + gate runner | Opus 4.6 | 1 |
| Metaphor-agent | Opus 4.6 | 1 |
| Planner | Opus 4.6 | 1 |
| Skeleton-builder (Pass 1) | Sonnet 4.5 | 1 |
| Spatial-auditor | Sonnet 4.5 | 1 |
| Elaboration-builder (Pass 2) | Sonnet 4.5 | 1 |
| Intentionality-builder (Pass 3) | Opus 4.6 | 1 |
| Programmatic-auditor | Sonnet 4.5 | 1 |
| Perceptual-auditor-1 | Sonnet 4.5 | 1 |
| Perceptual-auditor-2 | Sonnet 4.5 | 1 |
| Comparative-auditor | Sonnet 4.5 | 1 |
| Novelty-evaluator | Sonnet 4.5 | 1 |
| Verdict-synthesizer | Opus 4.6 | 1 |

**Model split: 5 Opus + 8 Sonnet = 13 total**

Optional expansions:
- Add perceptual-auditor-3 for Mode 4 breadth (+1 Sonnet)
- Add restraint-auditor to verify mechanism rejection ratios (+1 Sonnet)
- Add intentionality-reviewer to verify Pass 3 additions (+1 Sonnet)
- Maximum with all expansions: 16 agents

### Build Passes

| Pass | Duration | Key Activity | Gate |
|------|----------|-------------|------|
| Pre-build | 20-30 min | Metaphor derivation (parallel with content prep) | Metaphor Resonance |
| Pass 1 | 30-40 min | Spatial skeleton build | Spatial Confidence + Landmarks |
| Fix cycle (if needed) | 10-20 min | Skeleton corrections | Re-run Spatial Confidence |
| Pass 2 | 40-60 min | Compositional elaboration | Composition Verification |
| Pass 3 | 20-30 min | Intentionality layer | Quick review |
| Audit | 30-40 min | Full parallel audit suite | Ship-Ready |
| Verdict | 15-20 min | Synthesis and comparison | Final |

### Total Time

**Optimistic (no fix cycles needed):** 165-220 minutes (2.75-3.7 hours)
**Expected (1 fix cycle at Gate 2):** 185-250 minutes (3.1-4.2 hours)
**Pessimistic (2 fix cycles):** 210-280 minutes (3.5-4.7 hours)
**Kill threshold:** 240 minutes (4 hours)

### Probability of Shipping Better Than Ceiling Experiment

**Estimate: 70-75%**

Decomposition:

| Condition | Probability | Rationale |
|-----------|------------|-----------|
| Pass 1 clears Spatial Confidence Gate | 80% | Gate exists specifically to prevent ceiling's dominant failure. Builder has simpler task (skeleton only, no metaphor elaboration). Fix cycles available. |
| Pass 2 does not degrade spatial quality | 85% | Working within a verified spatial frame. Restraint protocol limits mechanism saturation. Rollback available if degradation detected. |
| Pass 3 successfully adds intentionality | 90% | This is HTML content addition, not CSS complexity. Opus agent handles creative reasoning. Lowest-risk pass. |
| Final audit returns shippable verdict | 80% | Based on ceiling experiment data: 8.5/12 criteria passed even with catastrophic void. With void eliminated, most criteria should pass. |
| Combined (all conditions) | 0.80 x 0.85 x 0.90 x 0.80 = **49%** for clean first run | |
| With fix cycles (1-2 iterations) | **70-75%** | Fix cycles at gates recover ~20-25% of failures |

**For comparison:**
- Ceiling experiment (single-pass, no gates): ~40% probability (it did ship metaphor success but not spatial success)
- Middle experiment (single-pass, no gates): ~85% probability (simpler scope, fewer failure modes)
- Pure flagship (single-pass, multi-pattern): ~25-30% probability (beyond context wall)

The 70-75% probability is a meaningful improvement over pure ceiling (40%) and pure flagship (25-30%), at a modest time premium over "ceiling + 2 iterations" (200-280 min vs 235 min).

### What "Better Than the Ceiling Experiment" Means

The flagship page must exceed the ceiling experiment on BOTH axes:

**Spatial axis (where ceiling failed):**
- PA-05c PROPORTIONATE must PASS (ceiling scored FAIL)
- No void exceeding 1.5 viewport heights (ceiling had 70-80% void)
- Content distribution across full scroll depth (ceiling front-loaded everything)

**Intentionality axis (where ceiling was neutral):**
- At least 1 structural bookending element (ceiling had none)
- At least 2 cognitive transition moments (ceiling had only Zone 1->2)
- At least 1 self-referential element (ceiling had none)
- PA-05 score >= 3/4 in Mode 2 audit, >= 2.5/4 in Mode 4 if run

**Preservation of ceiling's strengths:**
- Novelty >= 7/9 (ceiling scored 9/9)
- Soul compliance 8/8 (ceiling scored 8/8)
- Metaphor recognized by auditors (ceiling achieved this)
- Token compliance >= 80% (ceiling scored 86%)
- Better than Middle by >= 3 perceptual improvements (ceiling achieved this)

---

## H. ARCHITECTURAL SUMMARY

### The Core Innovation

The flagship architecture's innovation is not ambition. It is DECOMPOSITION. The ceiling experiment attempted to achieve spatial confidence, compositional fluency, metaphor coherence, mechanism deployment, multi-channel encoding, vocabulary generation, and landmark completeness ALL IN ONE PASS. It succeeded at everything except the most important thing (spatial confidence), because attention is finite and higher-scale elaboration consumed the budget for lower-scale composition.

The flagship architecture decomposes the problem into three passes, each with a narrow focus:

1. **Pass 1:** Get the spatial skeleton right. Nothing else matters until this passes.
2. **Pass 2:** Add compositional depth within the verified spatial frame.
3. **Pass 3:** Add the intentionality dimension that actually separates crown jewels from competent pages.

Each pass is gated. Each gate is binary. Each failure mode has a documented response. The result is not guaranteed success -- the 70-75% probability reflects real uncertainty -- but it is STRUCTURED uncertainty, where failures are caught early and addressed specifically, rather than the ceiling experiment's pattern of discovering catastrophic failure only during the final audit.

### The Anti-Scale Position

This architecture incorporates the adversarial research's strongest arguments:

1. **Spatial confidence has veto power.** Operationalized as Gate 2 (Spatial Confidence Gate), which BLOCKS all higher-scale work until Scale 1 passes.

2. **Restraint > saturation.** Operationalized as the Restraint Protocol: 1.5:1 reject-to-deploy ratio, 16-mechanism hard cap, 2+ silence zones, no mechanism at all 5 scales.

3. **The gap is intentionality, not scale depth.** Operationalized as Pass 3, which adds self-reference, bookending, cognitive transitions, and meta-annotation -- the 15-20% of crown jewel quality that is orthogonal to spatial scales.

4. **Richness = vocabulary constraint x spatial confidence x restraint.** The formula drives the entire architecture: the soul provides vocabulary constraint (constant), the spatial gate ensures spatial confidence (verified), the restraint protocol quantifies restraint (measured), and the intentionality pass adds the dimension the formula does not capture but the showcase data demonstrates.

### What This Architecture Does NOT Do

- It does not attempt multi-pattern orchestration (the tier model's Flagship definition). The evidence shows single-pattern + intentionality is more reliable.
- It does not target 16-18 mechanisms (the tier model's Flagship count). It caps at 16 and recommends 12-14.
- It does not attempt 5-scale coherence down to Character level. It targets 4 scales (Navigation + Page + Section + Component) and lets Character-level coherence emerge naturally.
- It does not attempt to beat DD-006 or CD-006. Those pages were the product of 5-24 prior explorations and cannot be replicated in a single experiment. The target is 90-95% of their quality, which the intentionality layer should achieve.

### Risk Acknowledgment

The 25-30% failure probability is real. The most likely failure mode is:

**Metaphor-spatial conflict:** The derived metaphor structurally requires spatial proportions that conflict with the void budget. Example: a metaphor of "oceanic depth" might require vast empty space to represent ocean surface, which fails SC-02. The Spatial Confidence Gate catches this, but catching it means aborting and re-deriving the metaphor, which costs 30-40 minutes and may not produce a better result.

**Mitigation:** The planner's prompt includes the constraint: "The metaphor must be expressible within a 960px container with no more than 15% contentless void. If the metaphor requires spatial emptiness to communicate its concept, choose a different metaphor." This front-loads the spatial constraint into metaphor derivation, reducing the probability that the gate catches a structural conflict.

---

## APPENDIX: SUCCESS CRITERIA TABLE

| # | Criterion | Threshold | Source | Gate |
|---|-----------|-----------|--------|------|
| 1 | Container width | 940-960px | SC-01 | Spatial Confidence (Gate 2) |
| 2 | Void budget | < 15% scroll is contentless | SC-02 | Spatial Confidence (Gate 2) |
| 3 | Content distribution | 70%+ of scroll has content | SC-03 | Spatial Confidence (Gate 2) |
| 4 | First viewport ratio | Header < 25% | SC-05 | Spatial Confidence (Gate 2) |
| 5 | Footer reachability | < 1 viewport of void before footer | SC-07 | Spatial Confidence (Gate 2) |
| 6 | Soul compliance | 8/8 | Programmatic | Ship-Ready (Gate 5) |
| 7 | PA-05 DESIGNED | >= 3/4 sub-criteria | Perceptual | Ship-Ready (Gate 5) |
| 8 | PA-05c PROPORTIONATE | PASS | Perceptual | Ship-Ready (Gate 5) |
| 9 | D3 Novelty | >= 7/9 | Blind assessment | Ship-Ready (Gate 5) |
| 10 | Better than Ceiling | >= 2 improvements over ceiling experiment | Comparative | Ship-Ready (Gate 5) |
| 11 | Better than Middle | >= 3 improvements over middle experiment | Comparative | Ship-Ready (Gate 5) |
| 12 | Token compliance | >= 80% | Programmatic | Ship-Ready (Gate 5) |
| 13 | CPL | 45-80 characters | Programmatic | Builder self-check |
| 14 | Heading spacing | >= 1.5:1 | Programmatic | Builder self-check |
| 15 | Landmark completeness | Header + footer + all sections | Team-lead | Landmark (Gate 3) |
| 16 | Reinforcing pairs | >= 2 documented | Programmatic | Composition (Gate 4) |
| 17 | 4-scale coherence | Nav + Page + Section + Component | Programmatic | Composition (Gate 4) |
| 18 | Transition variation | >= 3 different types | Programmatic | Composition (Gate 4) |
| 19 | Inter-agent messaging | >= 8 substantive messages | Team-lead count | Ongoing |
| 20 | Intentionality elements | >= 2 of: bookending, self-reference, cognitive transition, meta-annotation | Team-lead review | Post-Pass 3 |
| 21 | Restraint ratio | >= 1.5:1 reject-to-deploy | Restraint Map review | Composition (Gate 4) |
| 22 | Mechanism cap | <= 16 deployed | Programmatic | Composition (Gate 4) |
| 23 | Silence zones | >= 2 documented | Restraint Map review | Composition (Gate 4) |
| 24 | No Severity-1 findings | Zero WOULD-NOT-SHIP | Perceptual | Ship-Ready (Gate 5) |

**Blocking criteria (must pass to ship):** 1-8, 15, 24
**Target criteria (should pass, not blocking):** 9-14, 16-23
**Aspirational criteria (nice to have):** 19-23

---

**END FLAGSHIP ARCHITECTURE**
