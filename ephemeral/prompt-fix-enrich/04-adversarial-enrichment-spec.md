# 04: Adversarial Completeness Enrichment Specification

**Author:** Adversarial Completeness Enrichment Agent
**Date:** 2026-02-17
**Gap Domain:** Adversarial (55% coverage, SECOND WEAKEST)
**Inputs:** `11-adversarial-completeness.md` (347 lines), `05-content-first-methodology.md` (965 lines), `09-adversarial-premortem.md` (483 lines), `12-defining-beautiful.md` (343 lines), `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines)
**Addresses:** CG-1, RR-1, CQ-1, RG-1 through RG-4, SC-08 (FM-1 countermeasure), calibration run specification

---

## ENRICHMENT 1: CONTENT TRANSFORMATION GUIDANCE (Addresses CG-1)

### Gap Description

CG-1 (CRITICAL): The prompt says nothing about how to transform RESEARCH-SYNTHESIS.md from agent-facing research prose into human-facing showcase prose. The Content Architect produces a structural inventory (word count, type mix), not editorial guidance. No agent is tasked with content EDITING. The most likely outcome: the builder copies research prose verbatim, producing a page that reads like a research paper.

### Enrichment Text

**INSERT into Section B (Execution Spec) as new subsection B11: CONTENT TRANSFORMATION, immediately after B10 (Builder Self-Check).**

```
## B11. CONTENT TRANSFORMATION (8 rules)

CT-01. Source material (RESEARCH-SYNTHESIS.md) is RESEARCH PROSE written for agents.
       The flagship page is SHOWCASE PROSE written for human readers.
       Direct copying of source text is PROHIBITED. Every sentence must be rewritten.

CT-02. Tone target: "Warm. Authoritative. Unhurried." (matches A2 tensions).
       - Warm = second person ("you"), active voice, concrete examples
       - Authoritative = declarative sentences, no hedging ("it should be noted", "perhaps")
       - Unhurried = short paragraphs (2-4 sentences), generous transitions between ideas

CT-03. Word count targets per section:
       - Section heading: 3-8 words (reader-facing, not research-facing)
       - Opening paragraph per section: 40-80 words (orients the reader)
       - Body paragraphs: 60-120 words each
       - Callout text: 20-50 words (single key insight, not a summary)
       - Total page: 2500-4000 words of prose (excludes code, tables, diagrams)

CT-04. Content selection from source: INCLUDE principles, patterns, and insights that a
       documentation team would act on. EXCLUDE provenance chains ("R-3 found..."),
       methodology notes ("11 agents analyzed..."), and cross-reference machinery
       ("see R1-05 for details"). The reader has never read R1-R5.

CT-05. Section headings MUST be reader-facing, not research-facing.
       WRONG: "R3-R5 Synthesis: Density Rhythm Patterns"
       RIGHT: "How Density Rhythm Makes Documentation Readable"
       Test: would a reader who has never seen the research understand the heading?

CT-06. Self-contained test: a reader encountering this page with ZERO prior context
       must understand every section. No forward references to unpublished research.
       No acronyms without expansion. No "as we found" without restating what was found.

CT-07. Content Writer agent (Opus) is assigned to Pass 0.5 (between content inventory
       and skeleton build). Deliverable: adapted-content.md containing all section text
       in final prose form. Skeleton builders place THIS text, not source text.

CT-08. Content quality gate fires AFTER adapted-content.md is written, BEFORE skeleton
       build begins. Binary checks:
       - Zero sentences copied verbatim from RESEARCH-SYNTHESIS.md
       - Every section heading passes CT-05 (reader-facing test)
       - Total prose word count within CT-03 range (2500-4000 words)
       - No hedging phrases present (search for: "it should be noted", "perhaps",
         "it is worth mentioning", "one might argue", "it could be said")
       - Every section is self-contained per CT-06
```

### Example Transformation

**SOURCE (from RESEARCH-SYNTHESIS.md, research prose):**
> "R-3 extended R-1's finding about density contrast to a 6-dimensional framework: temporal, spatial, semantic, functional, structural, and visual density. Premium documentation uses density rhythm (HIGH->LOW->HIGH cycles) as a primary readability mechanism. Cross-validation with R-4's component analysis confirmed that 73% of high-performing documentation pages employ at least 3 density dimensions simultaneously."

**TRANSFORMED (showcase prose, warm/authoritative/unhurried):**
> "Great documentation breathes. Dense technical sections give way to lighter explanatory passages, then build again toward the next complex topic. This rhythm -- dense, then light, then dense again -- is not accidental. It is a deliberate pattern that the best documentation teams use to keep readers engaged through long technical material. The rhythm operates across multiple dimensions: the spacing between elements varies, the information density shifts, and the visual weight of components changes from section to section."

### Integration Points

- **C1 Agent Roster:** Add "Content Writer (Opus)" between Content Architect and Skeleton Builders.
- **Gate Sequence:** Add "Gate 0.5: Content Quality" between Gate 0 and Gate 1.
- **Artifact Chain:** Add "00.5-adapted-content.md" between content inventory and build plan.
- **E Section (Reference Library):** Content Writer reads: RESEARCH-SYNTHESIS.md, content inventory, B11 rules.

---

## ENRICHMENT 2: READER PROXY SPECIFICATION (Addresses RR-1)

### Gap Description

RR-1 (CRITICAL): No agent in the pipeline reads the page AS A READER. PA auditors evaluate TECHNIQUE (container width, mechanism count, transition types), not EXPERIENCE ("Do I understand this? Would I keep scrolling?"). The prior adversarial audit (BS-1) identified this as catastrophic. The enriched prompt added a 5-act reader journey (A8) but as a CONVICTION STATEMENT, not an AGENT ASSIGNMENT.

### Enrichment Text

**INSERT into Section C1 (Agent Roster) as addition to PASS 4, and into C3 (Gate Sequence) as addition to Gate 4.**

```
READER PROXY SPECIFICATION
==========================

ROLE: Reader Proxy Agent (Sonnet)
WHEN: Gate 4 (after metaphor coherence check, before Mode 4 PA)
COST: ~15-20 minutes, 1 agent
CONTEXT: ZERO design system context. Agent receives ONLY the HTML file and a viewport screenshot.

PROMPT (verbatim, do not modify):

  "You are a senior technical writer evaluating a documentation page.
   You have never seen this design system. You do not know what KortAI is.
   Open the HTML file and scroll through it at 1440px width.

   Answer these 7 questions with YES or NO, then 1 sentence of explanation:

   1. Within 5 seconds, did you understand what this page is about?
   2. Did you want to keep scrolling after the first viewport?
   3. Can you identify the 3 most important ideas on this page?
   4. Is there any section where you felt lost or confused?
   5. Is there any section where you felt bored or disengaged?
   6. Would you bookmark this page for reference?
   7. Does the page feel complete (deliberate ending, not abandoned)?

   Then write 2-3 sentences: your overall impression as a reader."

GATE INTEGRATION:
  - Reader Proxy runs AFTER Gate 4 (metaphor coherence) and BEFORE Gate 5 (Mode 4 PA).
  - Call it Gate 4.5: Reader Experience.
  - BLOCKING criteria: Questions 1 and 7 must be YES.
    Q1 = NO means the page fails to orient. PAUSE BUILD, fix orientation.
    Q7 = NO means the page feels incomplete. PAUSE BUILD, fix closure.
  - NON-BLOCKING signals: Q4 = YES or Q5 = YES trigger targeted fix review
    (team-lead reads the explanation, decides whether to address before PA).
  - Q2, Q3, Q6 are DIAGNOSTIC only (no gate action, but recorded in verdict).

ANTI-GAMING:
  - The Reader Proxy agent MUST NOT receive any of the following:
    - The execution prompt
    - The metaphor derivation
    - The build plan
    - The mechanism catalog
    - Any preparation document
  - If the agent's response references design system terminology (e.g., "soul",
    "mechanism", "zone", "tension-composition"), the response is CONTAMINATED
    and must be re-run with a fresh agent.
```

### Integration Points

- **C1 Agent Roster:** Add "Reader Proxy (Sonnet)" to Pass 4 block.
- **C3 Gate Sequence:** Add "Gate 4.5: Reader Experience (Q1=YES, Q7=YES required)" between Gate 4 and Gate 5.
- **C4 PA Deployment:** Reader Proxy runs BEFORE screenshot pre-capture (it needs live browser access). PA auditors run AFTER (they use pre-captured screenshots).

---

## ENRICHMENT 3: CONTENT QUALITY GATE (Addresses CQ-1)

### Gap Description

CQ-1 (CRITICAL): No gate checks whether the TEXT on the page is readable, engaging, or clear. Gates check visual properties (container width, void ratios, mechanism counts). The actual words are ungated. A page could pass every gate with Lorem Ipsum.

### Enrichment Text

**INSERT into Section C3 (Gate Sequence) as new gate between Gate 0 and Gate 1.**

```
CONTENT QUALITY GATE (Gate 0.5)
================================

FIRES: After Content Writer produces adapted-content.md, BEFORE skeleton build.
CHECKER: Team-Lead (binary checks only, no judgment).
ARTIFACT REQUIRED: adapted-content.md from Content Writer agent.

CHECKS (all must pass):

  CQG-01. Total prose word count: 2500-4000 words.
          Verify: wc -w adapted-content.md (excluding markdown headers and code blocks).
          FAIL action: Content Writer revises. Max 1 revision cycle.

  CQG-02. Section count: >= 5 sections, each with >= 200 words.
          Verify: count ## headings, count words between headings.
          FAIL action: Content Writer adds/merges sections.

  CQG-03. Zero verbatim copying: no sentence of 15+ words appears identically
          in both adapted-content.md and RESEARCH-SYNTHESIS.md.
          Verify: team-lead spot-checks 5 random paragraphs against source.
          FAIL action: Content Writer rewrites flagged passages. Max 1 cycle.

  CQG-04. Reader-facing headings: every section heading is comprehensible to
          someone who has never read R1-R5.
          Verify: team-lead reads each heading in isolation.
          FAIL action: Content Writer revises headings. Max 1 cycle.

  CQG-05. Tone check: no hedging phrases. Search adapted-content.md for:
          "it should be noted", "perhaps", "it is worth mentioning",
          "one might argue", "it could be said", "we believe", "it seems".
          Verify: text search (binary, automated).
          FAIL action: Content Writer removes hedging. Max 1 cycle.

  CQG-06. Content type variety: at least 3 of 5 content types present across
          all sections: {narrative prose, code examples, tables/matrices,
          diagrams/ASCII art, callout boxes}.
          Verify: count distinct types.
          FAIL action: Content Writer adds missing type(s).

MAXIMUM FIX CYCLES: 1 per check. If any check fails after 1 fix cycle,
the team-lead determines whether to proceed with known content weakness
or abort the experiment.

GATE 0.5 PASS = Content is ready for skeleton build.
GATE 0.5 FAIL (after fix cycles) = Team-lead makes ship/abort decision.
```

### Integration Points

- **C3 Gate Sequence:** Insert between Gate 0 and Gate 1.
- **B8 TC Pipeline Routing:** Content Writer is a new agent, inserted between Content Architect and Skeleton Builders.
- **Appendix Parameter Table:** Add rows for CQG-01 word count (2500-4000), CQG-02 section minimum (5 sections x 200 words), CQG-03 (zero verbatim), CQG-05 (zero hedging).

---

## ENRICHMENT 4: RECOVERY PROTOCOLS (Addresses RG-1 through RG-4)

### Gap Description

The enriched prompt has no specific recovery protocols for: metaphor failure at Gate 4 (RG-1), concurrent gate failures / regression detection (RG-2), HTML corruption / artifact loss (RG-3), or agent disagreement on measurements (RG-4). The general "max 2 fix cycles" rule is the only recovery mechanism, and it is insufficient for structural failures.

### Enrichment Text

**INSERT into Section C as new subsection C5: RECOVERY PROTOCOLS, immediately after C4 (PA Deployment).**

```
## C5. RECOVERY PROTOCOLS (4 scenarios)

RP-01. METAPHOR FAILURE AT GATE 4 (structural < 70% without labels)

  IF Gate 4 fails (metaphor is announced, not structural):

  STEP 1: Assess metaphor survival percentage.
    - >= 50%: TARGETED FIX. Metaphor Builder gets 1 fix cycle (30 min max).
      Fix targets: increase zone color differentiation, add structural borders
      at zone boundaries, remove text labels that duplicate visual signals.
    - < 50%: METAPHOR DOWNGRADE. Accept atmospheric expression (50-65% is the
      ceiling under soul constraints per FM-9 analysis). Redesign labels to be
      aesthetically integrated (not compensatory text patches). Continue build.
    - < 30%: METAPHOR STRIP. Remove metaphor vocabulary entirely. Ship as
      CEILING-PLUS (spatial + compositional quality, no metaphor layer).
      This is NOT a failure -- it is a valid tier outcome.

  STEP 2: After fix/downgrade, re-run Gate 4 with NEW fresh-eyes agents
    (not the same agents who evaluated the first time).

  MAX TIME: 45 minutes total for RP-01. If not resolved in 45 min, apply
  the downgrade corresponding to current survival percentage and proceed.


RP-02. CONCURRENT / REGRESSION GATE FAILURE

  IF Gate N passes but a PREVIOUS gate's measurements regress:

  DETECTION: P-08 (spatial re-check after Pass 2) is the primary regression
  detector. Additionally, at EVERY gate, re-verify S-01 (container width)
  and S-02 (content-to-void ratio). These two checks are ALWAYS-ON.

  IF content-to-void degrades > 10 percentage points from previous gate:
    1. IDENTIFY which pass introduced the regression (diff file versions).
    2. ROLLBACK to the last passing version of the HTML file.
    3. Re-run the failing pass with explicit instruction: "Your previous
       changes degraded content-to-void from X% to Y%. Preserve spatial
       proportion while re-applying your changes."
    4. Max 1 rollback cycle per pass. If regression persists after rollback,
       ship at the LAST PASSING version's tier level.

  IF two consecutive gates fail (e.g., Gate 1 fails, fix cycle runs,
  Gate 1 re-passes, then Gate 3 fails):
    1. Team-lead evaluates whether the Gate 1 fix introduced the Gate 3
       failure (cascading regression).
    2. If YES: rollback to pre-Gate-1-fix state and attempt a DIFFERENT
       fix strategy.
    3. If NO: treat as independent failure, apply normal fix cycle for Gate 3.
    4. If 3 total gate failures occur across the experiment (any gates),
       trigger staged downgrade evaluation at current tier.


RP-03. HTML CORRUPTION / BUILD ARTIFACT LOSS

  PREVENTION: After each pass, the team-lead copies the HTML file to a
  versioned backup:

    After Pass 1: cp flagship-page.html flagship-page-v1-skeleton.html
    After Pass 2: cp flagship-page.html flagship-page-v2-mechanisms.html
    After Pass 3: cp flagship-page.html flagship-page-v3-metaphor.html
    After Pass 4: cp flagship-page.html flagship-page-v4-intentionality.html

  These are COPIES, not renames. The working file is always flagship-page.html.
  Backups are rollback points.

  IF the working HTML file is corrupted (malformed HTML, missing closing tags,
  CSS that breaks rendering):
    1. Team-lead validates corruption: open in browser, check for render errors.
    2. ROLLBACK to most recent backup that renders correctly.
    3. Re-run the pass that introduced corruption.
    4. If corruption recurs on re-run, rollback to the PREVIOUS backup
       and ship at that tier.

  VALIDATION CHECK (run between passes): Team-lead opens the HTML file in
  browser at 1440px. If the page renders without visible errors (no broken
  layout, no missing sections, no CSS compilation failures), the file is valid.
  This takes < 2 minutes and prevents cascading corruption across passes.


RP-04. AGENT DISAGREEMENT ON MEASUREMENTS

  SCENARIO A: Embedded Auditor and Team-Lead disagree on skeleton selection.
    RESOLUTION: Team-lead's decision is FINAL for skeleton selection.
    The Embedded Auditor's assessment is recorded in the experiment log
    but does not override. Reason: team-lead has gate criteria context;
    auditor has perceptual context. Gate criteria take precedence at
    build-time decisions.

  SCENARIO B: PA auditors give bimodal PA-05 scores (e.g., 5 say 4/4, 4 say 1/4).
    DETECTION: Standard deviation of PA-05 scores > 1.0.
    RESOLUTION:
    1. DO NOT average. Bimodal distributions invalidate averaging.
    2. Read ALL auditor explanations for their PA-05 scores.
    3. Identify whether the disagreement is about DIFFERENT ASPECTS of the page
       (e.g., group A evaluated header+midpage = excellent; group B evaluated
       lower half = catastrophic). If so, the page has a LOCALIZED failure,
       not a global one. Fix the failing region.
    4. If the disagreement is about the SAME aspect (genuine perceptual
       disagreement), use the LOWER modal score as the conservative verdict.
       In the 5-vs-4 example above: verdict = 1/4 (the lower mode).
       Reason: PA-05 is a SHIP gate. False positives (shipping a bad page)
       are worse than false negatives (not shipping a good page).

  SCENARIO C: Programmatic audit and perceptual audit contradict
    (e.g., programmatic says container = 960px, auditor says "content feels
    too wide").
    RESOLUTION: Programmatic measurement is AUTHORITATIVE for measurable
    properties (container width, CPL, void pixel counts). Perceptual
    assessment is AUTHORITATIVE for experiential properties (feels too wide,
    feels sparse, feels monotonous). If a programmatic measurement passes
    but the perceptual assessment fails, the programmatic pass stands but
    the perceptual finding is recorded for investigation. The team-lead
    determines whether the perceptual concern indicates a DIFFERENT problem
    (e.g., "feels too wide" might mean excessive horizontal padding WITHIN
    the container, not the container itself being wrong).
```

### Integration Points

- **C3 Gate Sequence:** Add "ALWAYS-ON checks at every gate: S-01, S-02" note.
- **Artifact Chain:** Add backup file naming convention (flagship-page-v{N}-{pass-name}.html).
- **C4 PA Deployment:** Add bimodal detection note (SD > 1.0 triggers RP-04B).
- **Appendix Parameter Table:** Add row for max gate failures (3 total triggers staged downgrade).

---

## ENRICHMENT 5: SC-08 CONTENT WEIGHT CHECK (Addresses FM-1 from Premortem)

### Gap Description

FM-1 (Premortem): The Spatial Confidence Gate (Gate 1) checks content PRESENCE but not content SUBSTANCE. A section with two short paragraphs passes SC-06 but perceptually reads as a void with a text label floating in it. The premortem recommended SC-08: Content Weight Check.

### Enrichment Text

**INSERT into Section B1 (Spatial rules) after S-15, as new rules S-16 and S-17.**

```
CONTENT WEIGHT (FM-1 Prevention):
  S-16. Content Weight Check: each content section MUST have:
        >= 3 discrete visual elements (paragraphs, code blocks, tables,
        diagrams, callouts, lists each count as 1 element).
        >= 2 distinct content TYPES per section (e.g., prose + code,
        or prose + table, or prose + diagram).
        Verify: for each <section>, count child elements by type.
        FAIL = section is "technically populated but perceptually sparse."
        Fix: add content elements from adapted-content.md or merge with
        adjacent section.

  S-17. Visual Weight Score per section (automated, run by team-lead at gates):
        Score = (paragraphs * 1) + (code_blocks * 2) + (tables * 3)
              + (diagrams * 4) + (callouts * 2) + (lists * 1)
        Minimum per section: 5.
        FAIL = section lacks visual substance.
        Fix: add higher-weight elements (a table or diagram contributes
        more visual weight than additional paragraphs).
```

### Integration Points

- **B10 Builder Self-Check:** Add item: `[ ] S-16: Every section has >= 3 elements, >= 2 types`.
- **C3 Gate Sequence, Gate 1:** Add S-16 and S-17 to the SC check list.
- **Appendix Parameter Table:** Add rows for S-16 (>= 3 elements, >= 2 types) and S-17 (visual weight >= 5).

---

## ENRICHMENT 6: CALIBRATION RUN SPECIFICATION

### Gap Description

The flagship experiment commits significant resources (~240-300 minutes, 12+ agents) to a single build attempt. The preparation documents contain numerous untested hypotheses (3-pass architecture, content-first methodology, inter-agent messaging protocol, metaphor spatial obligation analysis). A calibration run at CEILING tier tests the pipeline with lower stakes before committing to flagship.

### Enrichment Text

**INSERT as new Section F (after Section E: Reference Library) or as standalone pre-experiment protocol.**

```
================================================================
SECTION F: CALIBRATION RUN (Pre-Flagship Validation)
================================================================

PURPOSE: Test the enriched pipeline at CEILING tier before committing
to flagship. Validates: gate sequence, agent handoffs, content
transformation, spatial re-checks, recovery protocols. Does NOT
validate: flagship-level intentionality, Mode 4 PA, or metaphor
structural depth.

CONTENT: Use RESEARCH-SYNTHESIS.md (same content as flagship).
TIER: CEILING (12-15 mechanisms, 150-220 min build time).
PASSES: 3 (skeleton, mechanisms, light metaphor). Skip Pass 4
  (intentionality) -- this is the flagship-only pass.

AGENT ROSTER (reduced):
  - Content Architect (Opus): content inventory
  - Content Writer (Opus): adapted-content.md (TESTS CT-01 through CT-08)
  - Metaphor Agent (Opus): TC Phases 1-3 (TESTS MG-01 through MG-05)
  - Skeleton Builder (Sonnet, 1 only, no competition): spatial skeleton
  - Mechanism Builder (Sonnet): CSS mechanism application
  - Embedded Auditor (Sonnet): real-time monitoring
  Team-lead manages gates.

GATES (subset):
  - Gate 0: Content-to-void >= 60:40, zone count check
  - Gate 0.5: Content Quality Gate (CQG-01 through CQG-06)
  - Gate 1: Spatial Confidence (SC-01 through SC-07 + S-16, S-17)
  - Gate 3: Composition (reduced: CP-01, CP-02, spatial re-check)
  NO Gate 4 (metaphor coherence -- ceiling does not require structural metaphor)
  NO Gate 4.5 (reader proxy -- reserved for flagship)
  NO Gate 5 (Mode 4 PA -- ceiling uses 2-PA quick audit)

QUICK AUDIT (replaces Gate 5):
  - 2 PA auditors (not 9). Focus on PA-05 sub-criteria only.
  - 1 programmatic audit (soul, token, CPL, container width).
  - 10-15 screenshots (not 40-60).

SUCCESS CRITERIA:
  CAL-01. Gate 0.5 (Content Quality) passes on first attempt.
          If it fails: content transformation rules need revision.
  CAL-02. Gate 1 (Spatial Confidence) passes within 1 fix cycle.
          If it fails after 2 cycles: spatial rules are too strict or
          content volume is insufficient.
  CAL-03. Spatial re-check after Pass 2 shows <= 10pp content-to-void
          degradation. If it fails: mechanism deployment introduces
          excessive whitespace, elaboration rules need revision.
  CAL-04. Quick PA audit: PA-05 >= 3/4.
          If it fails: pipeline has a structural quality problem that
          more preparation cannot fix.
  CAL-05. Total time <= 180 minutes (ceiling tier budget).
          If it exceeds: flagship time budget (300 min) may be insufficient.

CALIBRATION OUTCOMES:

  ALL 5 PASS: Proceed to flagship experiment with confidence.
  The calibration page becomes a reference artifact for the flagship
  builders (what "good enough for ceiling" looks like).

  CAL-01 FAILS: Revise CT rules. Re-run content transformation only
  (30 min). If second attempt fails, the content transformation approach
  needs fundamental redesign -- delay flagship.

  CAL-02 FAILS: The spatial rules are calibrated to the wrong content.
  Review S-15 zone count ceiling and S-05 section minimum against
  actual content volume. Adjust thresholds. Do NOT proceed to flagship
  with uncalibrated spatial rules.

  CAL-03 FAILS: Mechanism deployment rules need a spacing budget.
  Add to the mechanism builder prompt: "Your total added whitespace
  (new margins + padding across all mechanism deployments) must not
  exceed X pixels." Set X = 10% of Pass 1 total page height.

  CAL-04 FAILS: The pipeline has a structural problem. Review the
  calibration page with fresh eyes. Identify the dominant failure.
  This may require revising the execution prompt fundamentally,
  not just adjusting parameters.

  CAL-05 FAILS: Increase flagship time budget to 360 minutes or
  reduce pipeline scope (fewer gates, fewer agents, fewer passes).

TIME BUDGET: 150-180 minutes total.
  - Pass 0 (Content + Metaphor + Content Writer): 50 min
  - Gate 0 + Gate 0.5: 15 min
  - Pass 1 (Skeleton): 30 min
  - Gate 1: 10 min
  - Pass 2 (Mechanisms): 35 min
  - Gate 3 + spatial re-check: 10 min
  - Quick audit: 20 min
  - Overhead (file handoffs, communication): 10 min

WHAT THE CALIBRATION RUN DOES NOT TEST:
  - Flagship-level intentionality (Pass 4)
  - 9-auditor Mode 4 PA
  - Competitive skeleton builds
  - Reader Proxy agent
  - Metaphor structural depth (> 70% without labels)
  - Inter-agent messaging at flagship volume

These are FLAGSHIP-ONLY features. The calibration run tests the
FOUNDATION (content pipeline, spatial rules, mechanism deployment,
gate sequence). If the foundation is solid, flagship features can
be layered on. If the foundation fails, flagship features are irrelevant.
```

### Integration Points

- **Wrapper (AUXILIARY-EXECUTION-WRAPPER.md):** Add Phase -1: Calibration Run before Phase 0.
- **Staged Downgrade:** Calibration page is itself a valid CEILING-tier deliverable if the flagship is later aborted.
- **Time Budget:** Calibration (180 min) + Flagship (300 min) = 480 min total if both are run. This is within a single extended session but should be planned as TWO sessions if the user prefers.

---

## CROSS-ENRICHMENT INTEGRATION SUMMARY

### New Rules Added

| Rule ID | Description | Type | Section |
|---------|-------------|------|---------|
| CT-01 | No direct source copying | FAIL-IF binary | B11 |
| CT-02 | Warm/Authoritative/Unhurried tone | Target | B11 |
| CT-03 | Word count targets per element type | FAIL-IF binary | B11 |
| CT-04 | Content selection (include/exclude) | Guidance | B11 |
| CT-05 | Reader-facing headings | FAIL-IF binary | B11 |
| CT-06 | Self-contained test | FAIL-IF binary | B11 |
| CT-07 | Content Writer agent assignment | Process | B11 |
| CT-08 | Content quality gate specification | Gate | B11 |
| CQG-01 through CQG-06 | Content quality gate checks | FAIL-IF binary | C3 (Gate 0.5) |
| S-16 | Content weight (>= 3 elements, >= 2 types per section) | FAIL-IF binary | B1 |
| S-17 | Visual weight score (>= 5 per section) | FAIL-IF binary | B1 |
| RP-01 through RP-04 | Recovery protocols | Process | C5 |
| CAL-01 through CAL-05 | Calibration success criteria | Gate | F |

### New Agents Added

| Agent | Model | Pass | Deliverable |
|-------|-------|------|-------------|
| Content Writer | Opus | 0.5 | adapted-content.md |
| Reader Proxy | Sonnet | 4 (Gate 4.5) | 7-question reader assessment |

### Modified Gates

| Gate | Change |
|------|--------|
| Gate 0.5 (NEW) | Content Quality Gate (CQG-01 through CQG-06) |
| Gate 1 | Add S-16, S-17 to check list |
| Gate 4.5 (NEW) | Reader Experience (Q1=YES, Q7=YES blocking) |
| ALL gates | Add always-on S-01, S-02 re-verification |

### Rule Count Impact

Current enriched prompt: 71 unique rule IDs.
This enrichment adds: 21 new rules (CT: 8, CQG: 6, S: 2, RP: 4, CAL: 5 -- but CAL rules are calibration-only, not in builder prompt).
New total: 87 rule IDs in master prompt.

**CRITICAL:** Per the preparation paradox analysis, builder prompt length must stay <= 75 lines. The new rules affect DIFFERENT agents:
- CT-01 through CT-08: Content Writer's prompt ONLY (not in builder prompt)
- CQG-01 through CQG-06: Team-Lead's gate checks ONLY (not in builder prompt)
- S-16, S-17: Added to builder self-check (2 new lines)
- RP-01 through RP-04: Team-Lead's recovery playbook ONLY (not in builder prompt)
- CAL-01 through CAL-05: Calibration protocol ONLY (pre-experiment, not in builder prompt)

**Net builder prompt impact: +2 lines** (S-16 and S-17 in self-check). Well within the 75-line cap.

### Phantom Planner Note

This enrichment does NOT address OG-1 (Phantom Planner) or OG-2 (Build Plan Author). These are OPERATIONAL gaps, not adversarial completeness gaps. However, the Content Writer agent (CT-07) partially addresses the content pipeline gap by ensuring adapted prose exists before skeleton build. The planner role assignment should be addressed in a separate operational enrichment.

---

**END ADVERSARIAL COMPLETENESS ENRICHMENT SPECIFICATION**
**Gaps addressed:** CG-1, RR-1, CQ-1, RG-1, RG-2, RG-3, RG-4, SC-08 (FM-1), Calibration Run
**New rules:** 21 (16 in master prompt, 5 in calibration protocol)
**New agents:** 2 (Content Writer, Reader Proxy)
**New gates:** 2 (Gate 0.5: Content Quality, Gate 4.5: Reader Experience)
**Builder prompt impact:** +2 lines (S-16, S-17)
**Adversarial coverage improvement:** 55% -> estimated 85% (4 CRITICAL gaps addressed, SC-08 added, calibration reduces untested-pipeline risk)
