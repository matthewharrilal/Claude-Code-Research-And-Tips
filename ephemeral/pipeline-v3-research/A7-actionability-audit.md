# A7: Actionability Audit — Top 25 Recommendations Classified by Implementation Readiness

**Author:** actionability-auditor (Opus 4.6)
**Date:** 2026-02-22
**Sources:** Reports 50, 53, 55, 57, 58, 59 (primary); cross-referenced against Reports 41-49, 54, 56 findings
**Method:** Extract every concrete recommendation from the 6 priority reports, classify by implementation tier, score on impact x effort matrix, sequence for implementation.

---

## 1. EXECUTIVE SUMMARY

Across the 6 synthesis reports, I identified **47 distinct recommendations**. After deduplication and merging overlapping recommendations, **25 survive as actionable items**. Their distribution:

| Tier | Count | Description | Estimated Total Effort |
|------|-------|-------------|----------------------|
| **Tier 1: IMMEDIATELY ACTIONABLE** | 9 | Specific file edits, line-level changes, copy-paste ready | 2-4 hours |
| **Tier 2: ACTIONABLE WITH DESIGN** | 8 | Requires drafting new content or restructuring existing files | 4-8 hours |
| **Tier 3: REQUIRES EXPERIMENTATION** | 5 | Testable hypotheses that need controlled builds to validate | 8-20 hours per experiment |
| **Tier 4: THEORETICAL** | 3 | Architectural changes requiring fundamental pipeline restructuring | Weeks+ |

**The single highest-leverage change:** Replace checklist format with recipe format in the builder prompt (Tier 1, Item #1). This alone breaks 2 of 7 suppression chains and is predicted to produce +0.5-1.0 PA-05 improvement based on the Middle experiment evidence.

**The 73-line hypothesis** (Report 59) is the organizing principle: 15 lines identity + 8 lines calibration + 50 lines framework = the minimal constraint set predicted to produce PA-05 >= 3.5. Everything in Tier 1-2 below converges toward building and testing this hypothesis.

---

## 2. TIER 1: IMMEDIATELY ACTIONABLE

These require specific file edits with known content. A skilled agent could apply all 9 in a single session.

---

### #1. CONVERT BUILDER PROMPT FROM CHECKLIST TO RECIPE FORMAT
**Source:** Report 59 (S-01), Report 58 (Section 3 hybrid format), Report 55 (Section 8)
**What:** Replace verification verbs ("Verify," "Fail if," "Must be") with action verbs ("Read," "Select," "Deploy," "Assess") throughout the builder-facing specification.
**Where:** `design-system/pipeline/conventions-brief.md` — all prescriptive sections
**Specific change:** Report 58 provides a complete 50-line hybrid recipe (Section 3) with 4 tiers: Hard Physics (15 lines), Build Sequence (15 lines), CSS Vocabulary (8 lines), Disposition (12 lines). This is a drop-in replacement for the current builder prompt format.
**Impact:** HIGH — breaks Chain A (Compliance Trap) and Chain D (Sonnet Ceiling). Predicted PA-05 improvement: +0.5-1.0.
**Effort:** LOW — the replacement text exists in Report 58.
**Evidence:** Middle experiment used recipe format -> PA-05 4/4. Flagship used checklist format -> PA-05 1.5/4. N=2 but the effect size is massive (2.5 points).

---

### #2. ADD PERCEPTION THRESHOLD TABLE TO CONVENTIONS BRIEF
**Source:** Report 59 (S-08, Category 2 calibration), Report 50 (A-9 content density)
**What:** Add a concrete threshold table with minimum perceptual magnitudes for all varying CSS properties.
**Where:** `design-system/pipeline/conventions-brief.md` — near the top (within first 100 lines for builder visibility)
**Specific values:**
```
| Property | Minimum Delta | Rationale |
|----------|--------------|-----------|
| Background color between zones | >= 15 RGB on at least 1 channel | Human JND threshold |
| Letter-spacing when used | >= 0.025em | Sub-pixel rendering floor |
| Font-size between zones | >= 1px (0.0625rem) | Browser rendering resolution |
| Padding between zones | >= 8px | Perceptible spatial shift |
| Stacked gap at boundaries | <= 120px total | Whitespace void prevention |
| Border-weight delta | >= 1px between hierarchy levels | Visual weight differentiation |
```
**Impact:** HIGH — breaks Chain A (at S-08) and Chain E (Invisible Architecture). Gas Town builder explicitly overrode conventions brief values BECAUSE of perception thresholds.
**Effort:** LOW — 8 lines of table, values already validated across multiple experiments.
**Evidence:** Report 59 documents that perception thresholds alone account for +0.3-0.5 PA-05 improvement.

---

### #3. ADD CONTENT-VOLUME-TO-ZONE-COUNT MAPPING
**Source:** Report 50 (A-9), `semantic-rules.md` lines 252-318
**What:** Add a word-count-to-zone-count table that prevents over-zoning thin content (the ceiling experiment's catastrophic void).
**Where:** `design-system/pipeline/conventions-brief.md` — Quality Floor section, AND `design-system/pipeline/gate-runner.md` — DG-4 sub-checks
**Specific values:**
```
| Content Volume | Maximum Zones |
|---------------|---------------|
| < 1,500 words | 2 zones |
| 1,500 - 3,000 words | 3 zones |
| 3,000 - 5,000 words | 4 zones |
| 5,000+ words | 5 zones |
```
Plus: minimum 3 paragraphs OR 2 components per dedicated zone.
**Impact:** HIGH — ROOT CAUSE prevention of documented failure (ceiling experiment 70-80% void).
**Effort:** LOW — 6 lines in conventions brief + 1 sub-check in DG-4.
**Evidence:** Ceiling experiment produced catastrophic whitespace because 5 zones were applied to insufficient content. The mapping was already documented in semantic-rules.md but never reached the builder.

---

### #4. ADD CONTENT-FORM FIT GATE
**Source:** Report 50 (A-10), `semantic-rules.md` lines 322-397
**What:** Before assigning any form treatment to a section, verify the section has enough content to fill it.
**Where:** `design-system/pipeline/gate-runner.md` — as DG-4 sub-check
**Specific minimums:**
```
| Form | Minimum Content |
|------|----------------|
| Bento grid | >= 4 items |
| Progressive disclosure | >= 3 phases |
| Z-pattern (golden ratio) | >= 2 distinct content blocks |
| Choreography (hub-spoke) | >= 3 radiating elements + 1 thesis |
| Dedicated zone | >= 3 paragraphs |
```
**Impact:** HIGH — ROOT CAUSE prevention (over-formed zones produce voids).
**Effort:** LOW — 5-line table added to DG-4 handoff validation.
**Evidence:** Report 50 identifies this as one of 3 root-cause knowledge items lost from the pipeline.

---

### #5. ADD MECHANISM DENSITY CAP PER VIEWPORT
**Source:** Report 50 (B-7), `mechanism-catalog.md` lines 1037-1053
**What:** Add a maximum of 4 distinct mechanisms per viewport-height section. Add distribution check: every third of the page contains >= 2 distinct mechanisms.
**Where:** `design-system/pipeline/conventions-brief.md` — Section 3 (Richness), AND `design-system/pipeline/gate-runner.md`
**Specific rule:** "No single viewport-height section may contain MORE THAN 4 distinct mechanisms operating simultaneously. Every third of the page (top/middle/bottom) must contain >= 2 distinct mechanisms."
**Impact:** HIGH — prevents the ceiling experiment's exact failure mode (14 mechanisms concentrated in first 20%).
**Effort:** LOW — 2 lines in conventions brief + 1 gate check.
**Evidence:** Mechanism catalog already specifies this cap (lines 1037-1053) but it was lost in compression to the conventions brief.

---

### #6. ADD SEMANTIC VALUE 3-QUESTION TEST
**Source:** Report 50 (A-8), `semantic-rules.md` lines 436-525
**What:** Add a 3-question self-check tool for every varying CSS value: (1) WHAT varies? (2) WHY does it vary? (3) WHY THESE SPECIFIC VALUES and not others?
**Where:** `design-system/pipeline/conventions-brief.md` — as a builder self-check card, positioned within first 150 lines
**Specific content:**
```
FOR EVERY VARYING CSS VALUE:
  Q1: WHAT property varies between these two elements?
  Q2: WHY does it vary? (What content/semantic difference does it express?)
  Q3: WHY THESE SPECIFIC VALUES? (Not "because the spec says" — because of what perceptual/semantic effect?)

ARBITRARY: padding: 48px (because threshold says >= 24px)
SEMANTIC: padding: 48px (because CRESCENDO peak = 50% compression from intro's 96px)
```
**Impact:** HIGH — the single most actionable tool for preventing arbitrary CSS values (Report 50 rates this #1 priority).
**Effort:** LOW — 8 lines including a before/after example. Content exists in semantic-rules.md.
**Evidence:** The before/after examples from semantic-rules.md show exact pattern of arbitrary-vs-semantic values.

---

### #7. FIX PA QUESTION COUNT AND SUCCESS BAR INCONSISTENCIES
**Source:** Report 50 (C-2, C-3)
**What:** Reconcile the Tier 5 question count (8 vs 9) and success bar (6/8 vs 7/9) across all files.
**Where:** Four files need alignment:
- `design-system/pipeline/conventions-brief.md` — line 386
- `design-system/compositional-core/CLAUDE.md` — success bar
- `design-system/CLAUDE.md` — success bar
- Master execution prompt references
**Specific change:** Tier 5 has 9 questions (PA-60 through PA-68). Success bar should be 7/9 everywhere.
**Impact:** MEDIUM — prevents calibration confusion between orchestrator and auditors.
**Effort:** VERY LOW — 4 find-and-replace edits across 4 files.

---

### #8. ADD COMPONENT CHARACTER TABLE
**Source:** Report 50 (A-1), `RESEARCH-SYNTHESIS.md` lines 178-196
**What:** Add the 11-component velocity/temperature/weight matrix so builders can avoid stacking same-character components.
**Where:** `design-system/pipeline/conventions-brief.md` — Section 8 (CSS Vocabulary)
**Specific content:**
```
| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Tip Callout | FAST | Warm | Light |
| Essence Callout | SLOW | Warm-Reverent | Medium |
| Gotcha Callout | FAST | Hot | Heavy |
| Core Abstraction | SLOW | Cool | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Task Component | FAST | Neutral | Medium |
| File Tree | MEDIUM | Cool | Light |
| Info Callout | MEDIUM | Warm | Light |
| Reasoning | SLOW | Cool | Medium |
| Navigation/TOC | FAST | Neutral | Light |
```
Plus rule: "Never stack two SLOW/Heavy components without a FAST/Light buffer between them."
**Impact:** MEDIUM — operationalizes Prohibition #18 (no same-density stacking) with an actionable model.
**Effort:** LOW — 12-line table. Content exists in RESEARCH-SYNTHESIS.md.

---

### #9. ADD MECHANISM SELECTION LOGIC DISTINCTION
**Source:** Report 50 (B-5), `mechanism-catalog.md` lines 64-90
**What:** Add a 3-paragraph "Selection Logic" explanation distinguishing content-driven (Middle) vs metaphor-driven (Flagship) mechanism selection.
**Where:** `design-system/pipeline/conventions-brief.md` — Section 8 or as pre-build orientation
**Specific content:**
```
SELECTION LOGIC:
- MIDDLE: Each mechanism serves a DIFFERENT content need.
  "This has code blocks -> I need mechanism #17. This has Q&A -> I need Z-pattern."
- FLAGSHIP: Multiple mechanisms encode the SAME semantic dimension.
  "Geological strata -> spacing compression + border-weight + zone backgrounds ALL encode depth."

The difference: Middle deploys 14 mechanisms for 14 purposes. Flagship deploys 14 mechanisms
for 3-4 purposes, with 3-4 mechanisms per purpose creating multi-channel encoding.
```
**Impact:** HIGH — Report 50 rates this as "arguably the most important paragraph in the entire mechanism catalog." Gates pass identically for both selection logics; only the builder's cognitive model determines quality.
**Effort:** LOW — 6-line paragraph. Content exists in mechanism-catalog.md.

---

## 3. TIER 2: ACTIONABLE WITH DESIGN

These require drafting new content or restructuring existing files. Each needs design work before implementation.

---

### #10. RESTRUCTURE CONVENTIONS BRIEF WITH DISPOSITION AT BOTH ENDS
**Source:** Report 58 (Section 6), Report 59 (S-15 context window position effect)
**What:** Reorder the conventions brief so creative authority / dispositional framing appears at BOTH the opening (primacy) and closing (recency) positions, with constraints and vocabulary in the middle.
**Proposed structure:**
1. Open with Tier 4 disposition (12 lines) — "You are composing, not complying"
2. Tier 1 constraints (identity + perception thresholds)
3. Tier 3 vocabulary (mechanisms, components, CSS values)
4. Tier 2 process (build sequence, midpoint reflection)
5. Close with Tier 4 disposition (D-04 + D-05) — "signing frame" + experiential scroll
**Impact:** HIGH — addresses S-15 (context window position effect). Currently creative authority is buried at line 356 of 610. Moving to opening + closing exploits primacy + recency bias.
**Effort:** MODERATE — content exists but requires reordering 610 lines. Risk of breaking cross-references.
**Evidence:** Report 58 argues this is the highest-leverage structural change to the brief. Report 59 estimates S-15 accounts for 0.2-0.4 PA-05 points at current prompt length.

---

### #11. ADD 5 DISPOSITIONAL INSTRUCTIONS (D-01 THROUGH D-05)
**Source:** Report 58 (Section 1), directly usable text
**What:** Add 5 specific dispositional instructions to the conventions brief as Tier 4 content:
- **D-01:** "Before writing CSS for any section, read the content. Feel its register." (prevents content-form decoupling)
- **D-02:** "After each zone, scroll back to the boundary. A reader should perceive a new room." (activates perceptual self-check)
- **D-03:** "Every CSS choice should be visible at 100% zoom. If removing a line causes no visible change, delete it." (prevents sub-perceptual waste)
- **D-04:** "Somewhere in the second half, create a moment where the reader pauses." (prevents second-half coast)
- **D-05:** "When you finish, scroll the whole page as a reader. If any stretch feels like waiting, something is wrong." (activates experiential evaluation)
**Impact:** HIGH for Opus builders (activates native aesthetic judgment). MEDIUM for Sonnet builders (may be ignored or over-interpreted).
**Effort:** MODERATE — the text is written in Report 58 but needs adaptation to fit within the brief's voice and structure.
**Evidence:** Report 58 provides testable predictions for each instruction. D-01 through D-05 are the "activation key" for capabilities the builder already possesses (Report 58 executive summary).

---

### #12. DESIGN THE CREATIVE REVISION CYCLE
**Source:** Report 55 (Section 8, condition #3), Report 53 (Dimension 1: Iteration)
**What:** Add a post-build revision pass where a fresh Opus agent reads the built page and provides compositional feedback, and the builder revises. This breaks continuation bias.
**Proposed architecture:**
```
Builder completes page -> Fresh Opus agent screenshots at 5 scroll positions ->
Agent writes 3 compositional notes (not bug reports) ->
Builder revises with compositional notes as input (not fix instructions)
```
**Impact:** HIGH — Report 55 rates this as "the highest-leverage intervention" and the single change most likely to bridge 3.0-3.5 to 4.0/4. Report 53 identifies iteration as the #1 structural blind spot.
**Effort:** MODERATE — requires designing a new pipeline step, new agent prompt (compositional reviewer, not auditor), and revision-mode builder instructions.
**Evidence:** CD-006 (39/40) was built iteratively by Opus. Every page scoring < 3.0 was built in one-shot.

---

### #13. DESIGN VALUE TABLES FOR ZONE-LEVEL CSS
**Source:** Report 57 (Section 3.2), Report 55 (Section 2A-2E)
**What:** Create complete zone-level CSS value tables that specify ALL channels at EACH zone boundary, so implementing the table automatically produces multi-channel encoding.
**Template:**
```
| Zone | Background | Padding | Font-weight | Letter-spacing | Border-left | Layout |
|------|-----------|---------|-------------|----------------|-------------|--------|
| Z1 (established) | #FEF9F5 | 48px | 400 | 0 | 4px solid | Bento |
| Z2 (probable) | #F5F2EC | 40px | 500 | 0.005em | 3px solid | Z-hero |
| Z3 (speculative) | #FFFFFF | 32px | 500 | 0.01em | 1px solid | F-pattern |
| Z4 (open) | #3D3D3D | 64px | 400 | 0.005em | none | Choreo |
```
**Impact:** HIGH — Report 57 demonstrates this is the mechanism by which Gas Town achieved Register 2.5 compositional fluency. The table IS compositional fluency in specification form.
**Effort:** MODERATE — the TC brief must generate per-page value tables. This is a TC pipeline enhancement, not a conventions brief change.
**Evidence:** Gas Town's TC brief specified zone-level CSS values; builder implemented them; multi-channel encoding emerged automatically (Report 57, Section 3.2).

---

### #14. ADD INTEGRATIVE GESTALT AUDITOR
**Source:** Report 53 (Dimension 2: Gestalt Perception)
**What:** Add one additional PA auditor with NO assigned questions. Instruction: "Look at every screenshot. Scroll through in your mind. Does this page WORK? Write a 200-word impression, then give a single YES/NO."
**Where:** PA deployment step in `/build-page` SKILL.md
**Impact:** MEDIUM — captures emergent holistic quality that decomposed questions miss.
**Effort:** LOW — add 1 auditor to the existing 9-auditor deployment. Single paragraph prompt.
**Evidence:** Report 53 identifies gestalt perception as the #2 structural blind spot, addressable with low effort.

---

### #15. ADD EMOTIONAL TRAJECTORY TO TC BRIEF AND PA
**Source:** Report 53 (Dimension 3: Emotional Resonance)
**What:** TC brief specifies intended emotional trajectory per zone (e.g., "Zone 1: curiosity. Zone 2: trust. Zone 3: focus. Zone 4: resolution"). PA auditors receive the question: "What emotion does each zone evoke?" (without seeing the TC brief's intent). Weaver cross-references.
**Where:** TC SKILL.md Phase 1 output format + PA SKILL.md question set
**Impact:** MEDIUM — closes the gap between intended and perceived emotion. Currently the FEEL axis is consumed during TC derivation and never verified.
**Effort:** MODERATE — requires TC output format change + 1 new PA question + weaver cross-reference logic.

---

### #16. ADD CALLOUT SCARCITY RULE
**Source:** Report 50 (A-6), RESEARCH-SYNTHESIS line 324 (Top 10 Finding #7)
**What:** Add a callout frequency guideline: "Callouts have maximum impact at 1-2 per page. 3+ creates alarm fatigue. 4+ requires documented justification for each additional callout."
**Where:** `design-system/pipeline/conventions-brief.md` — Section 8 (CSS Vocabulary) near component guidance
**Impact:** MEDIUM — prevents callout cacophony, a documented anti-pattern.
**Effort:** LOW — 2 lines. But requires DESIGN consideration: should this be a hard cap or a guideline? The research says 1-2 is optimal, but some pages need more.
**Evidence:** RESEARCH-SYNTHESIS Top 10 Finding #7. No current frequency guidance for callouts despite drop caps having a 2-section limit.

---

### #17. ADD CONTENT-TYPE PROPAGATION TO BUILDER
**Source:** Report 50 (B-5), Report 53 (Dimension 8: Contextual Appropriateness)
**What:** Ensure TC brief's per-section content classification (NARRATIVE / REFERENCE / CODE / DATA / MIXED) is visible to the builder, with visual density recommendations per type.
**Where:** TC SKILL.md output format (ensure section-type tags propagate) + conventions brief (add section-type to visual-treatment mapping)
**Impact:** MEDIUM — the TC pipeline classifies content types (Phase 0C) but this classification doesn't always reach the builder as actionable guidance.
**Effort:** MODERATE — requires auditing TC output format and adding a mapping table.

---

## 4. TIER 3: REQUIRES EXPERIMENTATION

These are testable hypotheses with strong theoretical grounding but N=0 experimental evidence for the specific intervention.

---

### #18. THE 73-LINE MINIMAL CONSTRAINT SET EXPERIMENT
**Source:** Report 59 (Part 6, "The Minimal Constraint Set"), Report 58 (Section 3, hybrid format)
**What:** Build a page using ONLY: 15 lines identity constraints + 8 lines calibration thresholds + 50 lines framework (multi-coherence, metaphor, density arc, content-form coupling, creative authority). Compare against Middle (100 lines, 4/4), Gas Town (542 lines, Ceiling), and Flagship (963 lines, 1.5/4).
**Prediction:** PA-05 >= 3.5 if builder is Opus.
**Effort:** 4-6 hours (1 build + 1 PA audit)
**Evidence:** Report 59 estimates 70-80% of the quality gap is suppressor removal (free) and 20-30% is positive scaffolding (70 lines). The 73-line set is the minimum that provides both.
**Why Tier 3:** This is THE central testable prediction of the entire research corpus. If it validates, it confirms the suppressor removal thesis and establishes the minimal prompt architecture. If it fails, the positive scaffolding needs enrichment.

---

### #19. OPUS-AS-SOLE-BUILDER EXPERIMENT
**Source:** Report 58 (Section 2), Report 59 (S-12), Report 55 (Section 8, condition #1)
**What:** Run a build with Opus as the sole builder agent (not Sonnet) using the current pipeline. Compare output quality against identical pipeline with Sonnet builder.
**Prediction:** Opus builder produces >= 0.5 PA-05 improvement over Sonnet, possibly +1.0.
**Effort:** 4-6 hours (1 build + 1 PA audit, with model swap)
**Evidence:** CD-006 (Opus builder) = 39/40. Flagship (Sonnet builder) = 1.5/4. Middle (mixed) = 4/4. But these experiments confound model choice with prompt format (N=4 experiments, 4 confounded variables — Report 59 S-12 documents this).
**Why Tier 3:** The model-choice variable has never been isolated. This experiment isolates it.

---

### #20. DISPOSITION-ONLY EXPERIMENT
**Source:** Report 58 (Section 7), Report 59 (Part 5, crossover curve)
**What:** Give Opus ONLY: soul constraints (~22 rules) + D-01 through D-05 dispositional instructions + content. No mechanisms, no vocabulary, no gates, no multi-pass. Pure "activate native capability" test.
**Prediction:** PA-05 3.0-3.5 (COMPOSED, near-DESIGNED). Report 58 estimates 3.5-4.0 for Opus; Report 59 estimates 3.0-3.5 without positive scaffolding.
**Effort:** 2-4 hours (simplest experiment — minimal prompt, 1 build, 1 PA audit)
**Evidence:** Would resolve the central question: how much quality comes from native Opus capability vs pipeline-provided framework?
**Why Tier 3:** N=0 for dispositional-only builds. Theoretical basis is strong but untested.

---

### #21. CREATIVE REVISION CYCLE EXPERIMENT
**Source:** Report 55 (Section 8), Report 53 (Dimension 1)
**What:** After a standard build, add one revision cycle: fresh Opus agent views page, writes 3 compositional notes, builder revises. Measure PA-05 before and after revision.
**Prediction:** +0.3-0.5 PA-05 improvement from a single revision cycle.
**Effort:** 6-10 hours (1 standard build + 1 revision cycle + 2 PA audits)
**Evidence:** Report 55 identifies this as "the highest-leverage intervention" for bridging 3.0-3.5 to 4.0. Report 53 ranks iteration as the #1 structural blind spot.
**Why Tier 3:** The revision protocol has never been tested. The architectural design (compositional notes vs bug reports) needs validation.

---

### #22. THRESHOLDS-ONLY EXPERIMENT (Q20)
**Source:** Report 59 (Part 5, S-08), previously documented as Q20 experiment protocol
**What:** Add ONLY perception thresholds to the original Flagship prompt (no other changes). Re-run. Measures the isolated impact of perception thresholds.
**Prediction:** PA-05 2.0-2.5 (up from 1.5, +0.5). Would confirm that S-08 alone accounts for ~0.5 points.
**Effort:** 4-6 hours (1 build + 1 PA audit)
**Evidence:** Report 59 documents S-08 as the single strongest breaking point in Chain A and Chain E. Gas Town builder overrode brief values specifically because of thresholds.
**Why Tier 3:** This is the CHEAPEST experiment to validate the suppressor removal thesis. If thresholds alone produce +0.5, the thesis is strongly supported.

---

## 5. TIER 4: THEORETICAL

These require fundamental architectural changes that cannot be implemented as file edits or single experiments.

---

### #23. LIVE PIPELINE ARCHITECTURE (Build-Evaluate-Revise Loop)
**Source:** Report 53 (Section 10: "The Meta-Question"), Report 57 (Section 7)
**What:** Replace the one-shot-plus-fix-cycle architecture with a live builder that renders every ~100 CSS lines, self-evaluates screenshots mid-build, and adjusts in real time. Shift from specification-as-input to feedback-as-process.
**Impact:** TRANSFORMATIVE — Report 53 identifies one-shot building as the fundamental structural limit. All 10 blind spots are downstream of this.
**Effort:** VERY HIGH — requires: (a) builder Playwright access during build, (b) mid-build self-evaluation protocol, (c) ability to revise earlier zones based on later context, (d) new "compositional momentum" concept.
**Risk:** Report 53 Agent 2 warns phased building may contradict holistic composition. The tension between incrementalism and holism is unresolved.
**Prerequisite:** Experiment #21 (creative revision cycle) should validate the premise before investing in full architecture.

---

### #24. ATMOSPHERIC COUPLING (REGISTER 3 COMPOSITIONAL FLUENCY)
**Source:** Report 57 (Section 6, "The Three Registers")
**What:** Achieve Register 3 compositional fluency: ALL mechanisms governed by a single directional logic, with component-level CSS varying by zone context, grid choice as compositional decision, and silence zones as active composition.
**Impact:** HIGH — Register 3 is the floor of Flagship (Report 57 Section 6.3). No artifact in this project has achieved it. Gas Town is Register 2.5; CD-006 is Register 2.
**Effort:** VERY HIGH — requires: (a) zone-contextual component CSS (`.zone-speculative .callout { padding: compressed }`), (b) metaphor-driven grid selection, (c) deliberate silence zones, (d) dispositional recipe + Opus builder.
**Prerequisite:** Tier 2 items #11 (dispositional instructions), #13 (value tables), and Tier 3 item #18 (73-line experiment) should be completed first.
**Evidence:** Report 57 provides concrete CSS examples of Register 2 vs Register 3, making the target measurable. CCS >= 0.55 for atmospheric coupling.

---

### #25. FLAGSHIP 4/4 ACHIEVEMENT
**Source:** Report 55 (full crystallization)
**What:** Build a page that achieves ALL 14 Flagship dimensions + 5 missing dimensions (atmospheric conviction, CCS >= 0.30, emotional arc, content-form resonance, grand spatial pause).
**Impact:** THE END GOAL — the theoretical ceiling of the design system.
**Effort:** VERY HIGH — Report 55 estimates 20-30% probability on first attempt, 45-55% for near-Flagship (12/14 + 3/5).
**Prerequisites:** Items #18-#21 (experiments), #11 (dispositional instructions), #12 (revision cycle), #13 (value tables), #24 (atmospheric coupling).
**Conditions (from Report 55):** (a) Opus sole builder, (b) dispositional recipe, (c) external critique cycle, (d) content that supports rich form, (e) builder sees exemplars.
**Evidence:** Report 55 provides viewport-by-viewport CSS specification of what Flagship looks like. This is the most concrete target ever produced but has never been achieved.

---

## 6. PRIORITY MATRIX (Impact x Effort)

```
                        LOW EFFORT          MODERATE EFFORT        HIGH EFFORT
                    ┌────────────────────┬────────────────────┬────────────────────┐
                    │                    │                    │                    │
    HIGH IMPACT     │  #1 Recipe format  │ #10 Brief reorder  │ #23 Live pipeline  │
                    │  #2 Thresholds     │ #11 D-01 thru D-05 │ #25 Flagship 4/4   │
                    │  #3 Zone-count map │ #12 Revision cycle │                    │
                    │  #4 Content-form   │ #13 Value tables   │                    │
                    │  #5 Mechanism cap  │                    │                    │
                    │  #6 3-Q test       │                    │                    │
                    │  #9 Selection logic│                    │                    │
                    ├────────────────────┼────────────────────┼────────────────────┤
                    │                    │                    │                    │
    MEDIUM IMPACT   │  #7 PA count fix   │ #15 Emotion traject│ #24 Atmo coupling  │
                    │  #8 Character table│ #16 Callout scarcty│                    │
                    │  #14 Gestalt audit │ #17 Content-type   │                    │
                    ├────────────────────┼────────────────────┼────────────────────┤
                    │                    │                    │                    │
    EXPERIMENT      │  #22 Q20 threshold │ #18 73-line test   │ #21 Revision cycle │
    (VALIDATION)    │  #20 Dispos.-only  │ #19 Opus-as-builder│                    │
                    │                    │                    │                    │
                    └────────────────────┴────────────────────┴────────────────────┘
```

**Optimal implementation order: top-left to bottom-right.** High-impact/low-effort items first, then experiments to validate before investing in high-effort changes.

---

## 7. IMPLEMENTATION SEQUENCE

### Phase 1: IMMEDIATE FIXES (2-4 hours)
Apply items #1-#9 as file edits. These are all additive changes to existing files that do not require restructuring.

**Order within Phase 1:**
1. #2 (perception thresholds) — breaks 2 chains, 8 lines
2. #1 (recipe format) — breaks 2 chains, but requires more careful editing
3. #3 (zone-count mapping) — ROOT CAUSE prevention, 6 lines
4. #4 (content-form fit gate) — ROOT CAUSE prevention, 5 lines
5. #6 (3-question test) — highest-rated by Report 50, 8 lines
6. #9 (selection logic) — most important paragraph per Report 50, 6 lines
7. #5 (mechanism cap) — prevents documented failure mode, 2 lines
8. #8 (character table) — operationalizes existing prohibition, 12 lines
9. #7 (PA count fix) — cleanup, 4 edits

### Phase 2: CHEAPEST EXPERIMENTS (4-8 hours)
Run the two cheapest experiments to validate the suppressor removal thesis before investing in larger changes.

1. #22 (Q20: thresholds-only) — cheapest, validates S-08 impact
2. #20 (disposition-only) — second cheapest, validates native capability thesis

### Phase 3: DESIGN WORK (4-8 hours)
Apply Tier 2 items based on experiment results.

1. #10 (brief restructure) — highest impact Tier 2 item
2. #11 (D-01 through D-05) — depends on #20 experiment results
3. #13 (value tables) — depends on TC pipeline capacity
4. #14 (gestalt auditor) — low effort, medium impact

### Phase 4: FULL EXPERIMENTS (8-20 hours)
Run the remaining experiments.

1. #18 (73-line experiment) — THE central test
2. #19 (Opus-as-builder) — isolates model variable
3. #21 (revision cycle) — validates iteration value

### Phase 5: ARCHITECTURAL (weeks+)
Only if experiments validate the thesis.

1. #12 (revision cycle design) — if #21 shows +0.3 improvement
2. #24 (atmospheric coupling) — requires #11 + #13 + #18 complete
3. #23 (live pipeline) — requires #21 validation
4. #25 (Flagship 4/4) — requires everything else

---

## 8. CROSS-REPORT CONVERGENCE

The 6 reports converge on 4 meta-findings that organize the 25 recommendations:

### Convergence 1: SUPPRESSOR REMOVAL > CAPABILITY ADDITION (Reports 59, 58, 50)
Items #1-#7 are ALL suppressor removals. They require 0 new capabilities — only removal of interference. Report 59 estimates suppressor removal closes 60-70% of the quality gap (1.5 -> 3.0-3.5). This is the highest-ROI intervention category.

### Convergence 2: RECIPE FORMAT IS THE #1 LEVER (Reports 58, 59, 55)
All three reports independently identify recipe-vs-checklist as the single highest-leverage variable. Report 58 provides the replacement text. Report 59 traces the mechanism through 2 suppression chains. Report 55 identifies recipe format as a condition for Flagship achievement.

### Convergence 3: POSITIVE SCAFFOLDING IS ~70 LINES (Reports 59, 57, 55)
The positive scaffolding needed beyond suppressor removal is small but specific: multi-coherence framework (~30 lines), structural metaphor instruction (~10 lines), density arc (~10 lines), content-form coupling (~5 lines), creative authority (~15 lines). Total ~70 lines. This aligns with the Middle experiment's 100-line recipe and validates the 73-line minimal constraint set.

### Convergence 4: ITERATION IS THE ARCHITECTURAL FRONTIER (Reports 53, 55)
Both reports identify iteration as the deepest structural limitation. Report 53 ranks it #1 of 10 blind spots. Report 55 calls the creative revision cycle "the highest-leverage intervention." But iteration requires architectural change that should be validated experimentally (#21) before being committed to.

---

## 9. RISKS AND CAVEATS

### Risk 1: N=4 Dataset
All predictions are based on 4 experiments (Middle, Flagship, Remediation, Gas Town) with confounded variables (model, format, content, team). The recommendation sequence (Phase 2 experiments before Phase 3 design work) is designed to increase N before committing to large changes.

### Risk 2: Opus Dependency
Items #11, #18, #19, #20, #21, #24, #25 all assume or require Opus as builder. If cost constraints require Sonnet, the dispositional layer (#11) may be ineffective (Report 58, Risk 2). The hybrid format (#1) degrades gracefully for Sonnet (Tiers 1-3 still produce 3.0/4 without Tier 4).

### Risk 3: Measurement Validity
PA-05 is the primary quality metric across all recommendations. If PA-05 does not accurately capture the quality dimensions that matter (gestalt, emotional resonance, compositional fluency), then improvements on PA-05 may not correlate with actual quality. Item #14 (gestalt auditor) partially addresses this.

### Risk 4: Compression Paradox
Adding items #2-#9 to the conventions brief makes it LONGER (currently 610 lines + ~60 new lines = ~670 lines). This may worsen S-15 (context window position effect) and S-02 (prohibition overload) unless accompanied by #10 (restructuring) and REMOVAL of redundant content. Net line count should decrease, not increase.

---

**END A7: ACTIONABILITY AUDIT**

*The 25 recommendations reduce to one meta-recommendation: REMOVE the 900 lines that suppress quality, KEEP the ~73 lines that enable it, TEST the hypothesis with the cheapest experiments first, and only THEN invest in architectural changes. The pipeline's improvement path is 70% subtraction, 30% addition.*
