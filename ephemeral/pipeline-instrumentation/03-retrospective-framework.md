# Post-Run Retrospective Framework
# /build-page Pipeline -- Turning Every Run Into Actionable Learning

---

## 0. PURPOSE

This framework converts raw pipeline output into structured learning. It answers
three questions after every run:

1. **What happened?** (Scorecard -- auto-generated, no interpretation)
2. **Why?** (Root cause analysis -- structured diagnosis)
3. **What changes for next run?** (Intervention -- prioritized, single-variable)

Success bar: PA-05 >= 3.5 AND Tier 5 >= 6/8.

Historical baselines:

| Run | Content | Builder | Prompt Format | PA-05 | Tier 5 | Key Defect |
|-----|---------|---------|---------------|-------|--------|------------|
| CD-006 | Combination pilot | Opus | Recipe | ~3.5-4 | N/A | (reference) |
| Middle | Middle-tier content | Opus | Recipe | 4/4 | N/A | Missing footer |
| Flagship | RESEARCH-SYNTHESIS | Sonnet | Checklist | 1.5/4 | N/A | Zero borders, uniform type, imperceptible bg |
| Remediation | RESEARCH-SYNTHESIS | Opus | CSS-only spec | 2.5/4 | N/A | Structural borders, typography specificity |

---

## 1. POST-RUN SCORECARD

Generate this scorecard within 5 minutes of run completion. It is FACTUAL ONLY --
no interpretation, no recommendations. Save to `[output-dir]/_retrospective/scorecard.md`.

### 1.1 Header Block

```markdown
# SCORECARD: [content-slug]
Run date: [YYYY-MM-DD HH:MM]
Content: [file path] ([line count] lines, [word count] words)
Builder model: [Opus/Sonnet]
Build time: [minutes from builder spawn to final output.html]
Fix cycles completed: [0-3]
Total agent count: [N] ([breakdown by role])

## VERDICT: [SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE]
PA-05: [X.X]/4 ([DESIGNED/COMPOSED/FUNCTIONAL/DEFICIENT])
Tier 5: [N]/8 ([COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY])
```

### 1.2 Gate Results Matrix (21 gates)

```markdown
## Gate Results

| Gate | Tier | Status | Measured | Threshold | Delta | Fix Applied? |
|------|------|--------|----------|-----------|-------|-------------|
| SC-01 | A | PASS/FAIL | 960px | 940-960px | 0px | N/A |
| SC-02 | B | PASS/FAIL | [violations] | 0 violations | [N] | [Y/N] |
| SC-03 | B | PASS/FAIL | [fonts found] | 3 allowed | [N extra] | [Y/N] |
| SC-04 | B | PASS/FAIL | [violations] | R>=G>=B all | [N] | [Y/N] |
| SC-05 | B | PASS/FAIL | [violations] | no #000/#FFF | [N] | [Y/N] |
| SC-06 | B | PASS/FAIL | [count] | >= 5 | [+/-N] | [Y/N] |
| SC-07 | B | PASS/FAIL | [present?] | present | [Y/N] | [Y/N] |
| SC-08 | B | PASS/FAIL | [count] | >= 8 types | [+/-N] | [Y/N] |
| SC-09 | A | PASS/FAIL | [min delta] | >= 15 RGB | [+/-N] | [Y/N] |
| SC-10 | A | PASS/FAIL | [max gap] | <= 120px | [+/-N] | [Y/N] |
| SC-11 | A | PASS/FAIL | [clusters] | >= 3 zones | [+/-N] | [Y/N] |
| SC-12 | A | PASS/FAIL | [count] | 3-5 zones | [+/-N] | [Y/N] |
| SC-13 | A | PASS/FAIL | [min/avg] | >= 3 min, >= 4 avg | [values] | [Y/N] |
| SC-13B | A | ADVISORY | [directions] | >= 2 of 4 | [count] | N/A |
| SC-14 | A | PASS/FAIL | [violations] | 0 sub-perceptual | [N] | [Y/N] |
| SC-15 | A | PASS/FAIL | [configs] | >= 3 distinct | [+/-N] | [Y/N] |
| SC-16 | A | ADVISORY | [monotonic?] | non-monotonic | [Y/N] | N/A |
| DG-1 | C | PASS/FAIL | [rows/evidence] | 5 rows, non-empty | [details] | [Y/N] |
| DG-2 | C | PASS/FAIL | [populated?] | all boundaries | [gaps] | [Y/N] |
| DG-3 | C | PASS/FAIL | [structure] | valid HTML5 | [issues] | [Y/N] |
| DG-4 | C | PASS/FAIL | [count/cats] | >= 14, 5/5 cats | [details] | [Y/N] |

Summary: [N]/17 blocking PASS, [N]/2 advisory, [N]/2 behavioral PASS
First-pass failures: [list gate IDs that failed before fix cycles]
Persistent failures: [list gate IDs still failing after all fix cycles]
```

### 1.3 PA Question Matrix (56 questions x 9 auditors)

```markdown
## PA Results Matrix

| Q | Text (truncated) | A | B | C | D | E | F | G | H | I | YES% |
|---|-------------------|---|---|---|---|---|---|---|---|---|------|
| PA-01 | First impression... | Y | - | - | - | - | - | - | - | - | 100% |
| PA-02 | Readable... | - | Y | - | - | - | - | - | - | - | 100% |
| ... | ... | | | | | | | | | | |
| PA-60 | Design moments... | - | - | - | - | - | Y | - | - | - | [%] |
| PA-61 | Multi-voice... | - | - | - | - | - | Y | - | - | - | [%] |
| ... | ... | | | | | | | | | | |

Legend: Y = YES, N = NO, P = PARTIALLY, - = not assigned
```

For each NO or PARTIALLY answer, append the auditor's exact quote (first 100 chars)
and severity rating (WOULD-SHIP / WOULD-NOT-SHIP / CONDITIONAL).

### 1.4 Tier 5 Detail Block

```markdown
## Tier 5 Breakdown

| Q | Focus | Answer | Auditor Quote (verbatim) |
|---|-------|--------|--------------------------|
| PA-60 | Design moment density | YES/NO | "[exact text]" |
| PA-61 | Multi-voice composition | YES/NO | "[exact text]" |
| PA-62 | Transition variation | YES/NO | "[exact text]" |
| PA-63 | Fractal zoom coherence | YES/NO | "[exact text]" |
| PA-64 | Restraint as expression | YES/NO | "[exact text]" |
| PA-65 | Musical analogy | YES/NO | "[exact text]" |
| PA-66 | Negative space variety | YES/NO | "[exact text]" |
| PA-67 | Novelty beyond competence | YES/NO | "[exact text]" |

Tier 5 Score: [N]/8
```

### 1.5 Mechanism Inventory

```markdown
## Mechanism Inventory

| Category | Required | Deployed | Mechanisms Used |
|----------|----------|----------|-----------------|
| Spatial | >= 1 | [N] | [list: e.g., F-pattern, nested grid, asymmetric margin] |
| Hierarchy | >= 1 | [N] | [list] |
| Component | >= 1 | [N] | [list] |
| Depth/Emphasis | >= 1 | [N] | [list] |
| Structure/Nav | >= 1 | [N] | [list] |
| **TOTAL** | **>= 14** | **[N]** | |

Missing categories: [list any with 0 deployed]
Repeated mechanisms: [any mechanism used 3+ times without variation]
Mechanism-to-content fit: [from build log -- did builder justify selections?]
```

### 1.6 CSS Budget Breakdown

```markdown
## CSS Budget

Total CSS lines: [N] (threshold: >= 800)

| Purpose | Lines | % | Example Properties |
|---------|-------|---|--------------------|
| Layout (grid, flex, positioning) | [N] | [%] | display, grid-template, position |
| Typography (font, text) | [N] | [%] | font-size, font-weight, letter-spacing, line-height |
| Color (backgrounds, borders) | [N] | [%] | background, border-color, color |
| Spacing (margin, padding) | [N] | [%] | margin, padding, gap |
| Components (cards, callouts, tables) | [N] | [%] | component-specific selectors |
| Responsive (@media) | [N] | [%] | @media queries |
| Accessibility (focus, sr-only) | [N] | [%] | :focus, .sr-only, reduced-motion |
| Sub-perceptual (WASTE) | [N] | [%] | letter-spacing < 0.025em, bg delta < 15 RGB |

RED FLAGS:
- Sub-perceptual > 5%: CSS budget misallocation (Flagship had 22%)
- Components < 15%: Insufficient component variety
- Responsive < 5%: Missing breakpoint coverage
- Typography > 40%: Micro-typography overemphasis risk
```

### 1.7 Builder Absorption Evidence

```markdown
## Builder Absorption

Evidence that the builder READ and APPLIED the conventions brief:

| Brief Section | Evidence in Output | Absorbed? |
|---------------|-------------------|-----------|
| S1. Identity | Container width, font trinity, palette | [Y/N + evidence] |
| S2. Perception | Threshold compliance (bg delta, letter-spacing) | [Y/N + evidence] |
| S3. Richness | Anti-scale model visible in density arc | [Y/N + evidence] |
| S4. Multi-Coherence | Channel shifts at boundaries | [Y/N + evidence] |
| S5. Fractal Echo | Scale table in build log, echo in components | [Y/N + evidence] |
| S6. Unified Metaphor | Named metaphor, structural (not labeled) | [Y/N + evidence] |
| S7. Transition Grammar | SMOOTH/BRIDGE/BREATHING types present | [Y/N + evidence] |
| S8. CSS Vocabulary | Component DNA, border budget | [Y/N + evidence] |
| S9. Creative Authority | Builder overrides logged with reasoning | [Y/N + evidence] |
| S9B. Quality Floor | >= 14 mechanisms, >= 800 CSS lines, >= 3 shifts | [Y/N + evidence] |
| S10. Compositional Memory | Midpoint observation in build log | [Y/N + evidence] |
| S11. Five Questions | Self-check questions answered in log | [Y/N + evidence] |
| S13. Accessibility | ARIA landmarks, skip link, semantic HTML | [Y/N + evidence] |
| S14. Responsive | 3 breakpoints present | [Y/N + evidence] |

Absorption rate: [N]/14 sections with evidence
```

### 1.8 Compression Loss Tracker

```markdown
## Compression Loss

| Stage | Input (lines) | Output (lines) | Ratio | What Was Lost |
|-------|---------------|-----------------|-------|---------------|
| Research -> Brief | ~17,000 | ~230 | 74:1 | [key concepts absent from brief] |
| Brief -> Builder prompt | ~230 | ~75 (visible) | 3:1 | [sections not referenced in build log] |
| Builder prompt -> Build log | ~75 | [N] | [ratio] | [planned but not executed] |
| Build log -> Output HTML | [N] | [N] | [ratio] | [logged intent not visible in CSS] |

Total pipeline compression: [research lines] -> [CSS lines] = [ratio]:1
Critical loss points: [where the most important information dropped out]
```

---

## 2. CROSS-RUN COMPARISON TEMPLATE

Save to `[output-dir]/_retrospective/comparison-to-run-[N-1].md`.

### 2.1 Score Delta Table

```markdown
## Score Comparison: Run [N] vs Run [N-1]

| Metric | Run N-1 | Run N | Delta | Direction |
|--------|---------|-------|-------|-----------|
| PA-05 | [X.X] | [X.X] | [+/-X.X] | IMPROVED/REGRESSED/STABLE |
| Tier 5 | [N]/8 | [N]/8 | [+/-N] | IMPROVED/REGRESSED/STABLE |
| Gate pass rate (first pass) | [N]/17 | [N]/17 | [+/-N] | |
| CSS lines | [N] | [N] | [+/-N] | |
| Mechanism count | [N] | [N] | [+/-N] | |
| Sub-perceptual CSS % | [N]% | [N]% | [+/-N]% | |
| Build time (min) | [N] | [N] | [+/-N] | |
| Fix cycles used | [N] | [N] | [+/-N] | |
```

### 2.2 Per-Question Delta (Tier 5 only -- these are the Flagship differentiators)

```markdown
## Tier 5 Question-by-Question

| Q | Run N-1 | Run N | Changed? | Probable Cause |
|---|---------|-------|----------|----------------|
| PA-60 Design moments | YES/NO | YES/NO | [Y/N] | [intervention or regression] |
| PA-61 Multi-voice | YES/NO | YES/NO | [Y/N] | |
| PA-62 Transition variation | YES/NO | YES/NO | [Y/N] | |
| PA-63 Fractal coherence | YES/NO | YES/NO | [Y/N] | |
| PA-64 Restraint | YES/NO | YES/NO | [Y/N] | |
| PA-65 Musical analogy | YES/NO | YES/NO | [Y/N] | |
| PA-66 Negative space | YES/NO | YES/NO | [Y/N] | |
| PA-67 Novelty | YES/NO | YES/NO | [Y/N] | |
```

### 2.3 Intervention Correlation

```markdown
## What Changed Between Runs

| Intervention | Category | Expected Effect | Actual Effect |
|-------------|----------|-----------------|---------------|
| [describe change 1] | Prompt/File/Architecture/Model | [prediction] | [what happened] |
| [describe change 2] | ... | ... | ... |

Interventions that CORRELATED with improvement:
- [list with evidence]

Interventions that had NO measurable effect:
- [list -- candidates for removal to reduce complexity]

Interventions that CORRELATED with regression:
- [list -- candidates for rollback]
```

### 2.4 Plateau Detection

```markdown
## Plateau Analysis

PA-05 trend: [list last 5 scores]
Tier 5 trend: [list last 5 scores]

Plateau detected? [YES if last 3 runs within +/- 0.3 PA-05 AND +/- 1 Tier 5]

If YES:
- Current ceiling appears to be PA-05 [X.X], Tier 5 [N]/8
- Most likely bottleneck: [from root cause analysis]
- Recommended intervention type: [prompt change / architecture change / model change / content change]
- Rationale: [why incremental changes are insufficient]

If NO:
- Trajectory: [improving / declining / oscillating]
- Projected runs to target: [estimate based on improvement rate]
```

---

## 3. ROOT CAUSE ANALYSIS PROTOCOL

When PA-05 < 3.5 OR Tier 5 < 6/8, follow this decision tree.

### 3.1 First-Pass Triage (2 minutes)

Check these 5 things FIRST, in order. Each is binary. Stop at the first YES.

```
1. Did any blocking gate FAIL on final run?
   YES -> Gate failure is the proximate cause. Fix gates before diagnosing PA.
   NO  -> Continue.

2. Is sub-perceptual CSS > 10% of total CSS?
   YES -> CSS budget misallocation. Builder wrote invisible CSS instead of
          compositional CSS. Root cause: brief absorption failure OR
          prompt emphasis on "refinement" over "composition."
   NO  -> Continue.

3. Are mechanism count < 14 OR any category at 0?
   YES -> Mechanism underdeployment. Root cause: brief Section 9B not absorbed
          OR builder defaulted to familiar subset.
   NO  -> Continue.

4. Is PA-05 sub-score "COHERENT" < 3?
   YES -> Elements do not work together. Root cause: missing multi-coherence
          (SC-13 may pass mechanically while PA sees incoherence).
   NO  -> Continue.

5. Is PA-05 sub-score "DESIGNED" < 3?
   YES -> Page lacks intentionality. This is the hardest problem. See 3.3.
   NO  -> Problem is in POLISHED or PROPORTIONATE. See 3.4.
```

### 3.2 Gate-PA Disagreement Analysis

When gates PASS but PA scores low, the gap reveals what programmatic checks cannot
measure. Document every instance:

```markdown
## Gate-PA Disagreement Log

| Gate | Gate Result | Related PA Question | PA Result | Gap Explanation |
|------|-------------|---------------------|-----------|-----------------|
| SC-13 | PASS (avg 4.2) | PA-61 (multi-voice) | NO | Channels shift mechanically but not semantically aligned |
| SC-15 | PASS (3 configs) | PA-60 (design moments) | NO | Borders present but not compositionally meaningful |
| DG-4 | PASS (14 mechs) | PA-67 (novelty) | NO | Mechanisms deployed but combinations are conventional |
```

Each gap is a candidate for a NEW gate or a gate threshold adjustment.

### 3.3 Tier 5 Root Cause Lookup

For each Tier 5 question that scored NO, here are the 3 most likely root causes
and the diagnostic check for each.

**PA-60 (Design moment density) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Mechanism count too low | Count mechanisms in inventory. < 14 = confirmed. |
| 2 | Mechanisms concentrated in first scroll third | Map mechanism locations to scroll position. Top-heavy = confirmed. |
| 3 | Repeated component patterns instead of unique moments | Count distinct component configurations (not types). < 5 = confirmed. |

**PA-61 (Multi-voice composition) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | All channels shift at same boundaries | Check SC-13 boundary data. If all boundaries have same shift set = confirmed. |
| 2 | Builder treated channels as checklist not composition | Check build log for channel-by-channel planning. Absent = confirmed. |
| 3 | CSS properties change but lack independent rhythm | Map each channel (bg, type, border, spacing) across sections. If all track together = confirmed. |

**PA-62 (Transition variation) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | All transitions have similar channel-shift count | Check SC-13 per-boundary data. Variance < 1.0 = confirmed (all similar). |
| 2 | Dramatic transitions not correlated with content importance | Map high-shift boundaries to content structure. Misalignment = confirmed. |
| 3 | Missing quiet transitions (1-2 shifts) | Count boundaries with exactly 1-2 shifts. Zero = confirmed. |

**PA-63 (Fractal zoom coherence) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Components are generic (not echoing page design) | Compare component internal structure to page-level patterns. No shared language = confirmed. |
| 2 | Fractal echo table missing or empty | Check build log DG-1 data. Missing/empty = confirmed. |
| 3 | Only 2 scales achieved (need 3+) | Count distinct design scales in output. < 3 = confirmed. |

**PA-64 (Restraint as expression) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Uniform density across all sections | Measure CSS property count per section. Variance < 20% = confirmed. |
| 2 | Plain sections look unfinished, not designed | Check if plain sections have intentional spacing/typography distinct from default. |
| 3 | Builder never planned density arc | Check build log for density planning. Absent = confirmed. |

**PA-65 (Musical analogy -- ensemble) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Single channel dominates (usually typography) | Check CSS budget breakdown. One category > 50% = confirmed. |
| 2 | All channels in unison (choir not ensemble) | Same as PA-61 root cause 1. |
| 3 | Builder lacked compositional vocabulary | Check build log language. No mentions of rhythm, counterpoint, voice = confirmed. |

**PA-66 (Negative space variety) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Uniform spacing values across all gaps | Count distinct gap sizes. < 3 = confirmed. |
| 2 | S-09 compliance drove uniform spacing | Check if all gaps cluster near one value to avoid S-09 ceiling. |
| 3 | Builder used CSS reset spacing without variation | Check if margin/padding values are identical across sections. |

**PA-67 (Novelty beyond competence) = NO**

| # | Root Cause | Diagnostic Check |
|---|-----------|------------------|
| 1 | Builder used only conventional mechanism combinations | Check mechanism inventory for unusual pairings. All standard = confirmed. |
| 2 | Creative Authority section not absorbed | Check builder absorption evidence for S9. Not absorbed = confirmed. |
| 3 | Prompt over-specified, leaving no room for invention | Count constraint rules in builder-visible prompt. > 40 = risk factor. |

### 3.4 PA-05 Sub-Score Diagnostics

When the overall PA-05 is close (3.0-3.4) but specific sub-scores drag it down:

**DESIGNED < 3 (intentionality gap):**
- Check: Does the build log contain a named metaphor?
- Check: Is the metaphor STRUCTURAL (visible in CSS) or ANNOUNCED (text label only)?
- Check: Did the builder write a midpoint observation?
- Fix direction: Builder needs compositional planning phase, not more constraints.

**COHERENT < 3 (elements fight each other):**
- Check: SC-13 channel shift directions -- are they contradictory?
- Check: Color palette -- do zone backgrounds form a family or clash?
- Check: Typography -- do heading sizes progress logically across sections?
- Fix direction: Add coherence verification to builder self-check.

**PROPORTIONATE < 3 (visual weight unbalanced):**
- Check: Scroll-position density map -- is content front-loaded?
- Check: Are void patterns (>120px gaps) present in specific scroll zones?
- Check: SC-10 measured values -- are some boundaries tight and others loose?
- Fix direction: Add density arc to builder planning phase.

**POLISHED < 3 (rough details):**
- Check: Responsive breakpoints -- do they exist? Are they functional?
- Check: Hover states -- present on interactive elements?
- Check: Alignment consistency -- do grids align across sections?
- Fix direction: Add Phase D self-verification emphasis to brief.

---

## 4. INTERVENTION PRIORITIZATION FRAMEWORK

### 4.1 Cost/Impact Matrix

Every proposed change gets placed in this matrix before being applied to the
next run. Cost = implementation effort + risk of regression. Impact = predicted
score improvement based on root cause analysis.

```
                    HIGH IMPACT
                        |
         QUADRANT 2     |     QUADRANT 1
         (Worth doing   |     (DO FIRST)
          if cheap)     |
                        |
LOW COST ---------------+--------------- HIGH COST
                        |
         QUADRANT 3     |     QUADRANT 4
         (Skip unless   |     (Avoid --
          nothing else  |      high risk,
          works)        |      low return)
                        |
                    LOW IMPACT
```

**Quadrant 1 examples (high impact, low cost):**
- Add specific CSS values to a brief section (10 min, targets absorption failure)
- Change a gate threshold (5 min, targets mechanical compliance)
- Add one line to builder prompt (5 min, targets missing behavior)

**Quadrant 2 examples (high impact, high cost):**
- Rewrite conventions brief section (2-4 hours, targets structural prompt issues)
- Change builder model (Sonnet -> Opus or vice versa) (0 min cost but $$ cost)
- Add a new gate (1-2 hours, targets uncaught defect class)

**Quadrant 3 examples (low impact, low cost):**
- Reorder brief sections (10 min, marginal attention effect)
- Add advisory gate (30 min, informational only)

**Quadrant 4 examples (low impact, high cost):**
- Rewrite entire gate runner (4+ hours, most gates already pass)
- Add more PA auditors beyond 9 (cost increase, diminishing returns)
- Add elaborate team communication protocol (2+ hours, uncertain benefit)

### 4.2 Single-Variable Isolation Protocol

**RULE: Change exactly ONE category per run.** If you change two things and the
score improves, you do not know which caused it. This is the 3-variable confound
lesson from the Flagship experiment.

Categories (change at most one per run):

| Category | Examples | What It Tests |
|----------|----------|---------------|
| A. Prompt content | Add/remove/rewrite a brief section | Does the builder absorb this? |
| B. Prompt format | Recipe vs checklist vs world-description | Does format affect absorption? |
| C. Gate thresholds | Change a numeric threshold | Does mechanical enforcement help? |
| D. Architecture | Change agent count, topology, communication | Does process structure matter? |
| E. Model | Switch builder model (Opus/Sonnet) | Does model capability matter? |
| F. Content | Use different source content | Is the issue content-dependent? |

If you MUST change more than one category (e.g., fixing a blocking defect while
also testing a new approach), document both changes separately and flag the run
as CONFOUNDED in the comparison template.

### 4.3 Experiment Design Template

For each run, fill this out BEFORE running:

```markdown
## Experiment: Run [N]

### Hypothesis
"Changing [X] will improve [PA-05 / Tier 5 / specific question] from [current]
to [predicted] because [root cause analysis says Y is the bottleneck]."

### Single Variable
Category: [A-F from table above]
Specific change: [exact description]
Files modified: [list with before/after]

### Control
What stays the same: [everything else -- list explicitly]
Content file: [same as Run N-1 for controlled comparison / different for generalizability]

### Predicted Outcome
PA-05: [predicted score] (+/- [confidence interval])
Tier 5: [predicted score]
Specific questions expected to change: [PA-6X, PA-6Y]

### Falsification Criteria
This hypothesis is WRONG if: [specific measurable outcome]
Example: "Wrong if PA-05 stays below 3.0 despite mechanism count reaching 14+"

### Minimum Detectable Effect
Change is considered REAL (not noise) if PA-05 delta >= [0.5] or Tier 5 delta >= [2].
Changes smaller than this could be auditor variance.
```

### 4.4 After-Run Decision Protocol

After scorecard is generated and comparison is complete:

```
1. Did the intervention produce the predicted outcome?
   YES -> CONFIRMED. Codify the change as permanent. Update memory.
   PARTIALLY -> PROMISING. Run one more time with same setup to confirm.
   NO -> FALSIFIED. Revert the change. Document why prediction was wrong.

2. Did anything REGRESS compared to Run N-1?
   YES -> Was the regression in the same area as the intervention?
          YES -> Tradeoff detected. Document: "[improvement] costs [regression]."
          NO  -> Unrelated regression. Investigate independently.
   NO -> Clean improvement. Proceed.

3. Is the run within 0.5 of the target (PA-05 >= 3.0)?
   YES -> Fine-tuning phase. Quadrant 1 changes only.
   NO  -> Still far. Quadrant 2 changes acceptable.
```

---

## 5. CONVERSATION STARTERS

Pre-written questions keyed to score ranges. Use these to open productive
retrospective discussions instead of vague "what went wrong?" conversations.

### PA-05 0.0 - 2.0 (DEFICIENT / FUNCTIONAL -- fundamental failure)

1. "The page scored [X]/4. Before we discuss what to fix, let's verify the
   builder received the conventions brief. Check the build log -- does it
   reference ANY of the 14 brief sections by name?"

2. "SC-14 (sub-perceptual prevention) [PASSED/FAILED]. What percentage of the
   CSS budget went to letter-spacing values below 0.025em? If > 10%, the
   builder allocated effort to invisible styling -- the exact Flagship failure."

3. "How many mechanism categories have zero deployed mechanisms? If any category
   is empty, the Quality Floor (Section 9B) was not absorbed. The builder may
   have seen the number 14 but not the per-category minimums."

4. "Pull up the cascade value table. At zone boundary 1-2, what is the RGB
   delta? If < 15, the builder either did not read Section 2 (Perception) or
   chose to override it without logging the override."

5. "The PA-05 sub-score for DESIGNED was [X]. Does the build log contain a
   named metaphor? Is that metaphor visible in the CSS, or is it only stated
   in text? If text-only, this is the ANNOUNCED vs STRUCTURAL problem."

### PA-05 2.0 - 3.0 (FUNCTIONAL -- mechanical but not composed)

1. "We are at [X]/4, which means the page works but does not feel composed.
   Look at the Tier 5 results: which questions scored NO? Each NO points to
   a specific missing compositional layer -- let's map them to interventions."

2. "Compare the CSS budget breakdown to CD-006's profile. CD-006 spent ~30%
   on components and ~15% on responsive. What did this run spend? The
   difference reveals where the builder under-invested."

3. "PA-62 (transition variation) scored [YES/NO]. Check SC-13 per-boundary
   data -- what is the VARIANCE in channel-shift counts across boundaries?
   If low (< 1.0), all transitions are equally dramatic. The page needs both
   dramatic and quiet boundaries."

4. "The builder logged [N] overrides with compositional reasoning. Is that
   enough? CD-006's builder made ~8 overrides. If this builder made 0, the
   Creative Authority section was not absorbed -- the builder played it safe."

5. "PA-64 (restraint) scored [YES/NO]. Scroll through the page. Is there ANY
   section that is deliberately simpler than its neighbors? If no, the
   density is uniform -- missing the restraint x density interplay."

### PA-05 3.0 - 3.5 (COMPOSED -- close to target, fine-tuning needed)

1. "We are [X] points from the 3.5 target. The SPECIFIC sub-score dragging
   us down is [DESIGNED/COHERENT/PROPORTIONATE/POLISHED] at [X]. What is the
   single highest-impact Quadrant 1 change for that sub-score?"

2. "Tier 5 is at [N]/8. The questions that scored NO are [list]. For each,
   check the root cause lookup (Section 3.3). Which root cause is confirmed
   by the diagnostics? That root cause is our intervention target."

3. "Compare this run's mechanism inventory to Run N-1. Did we gain or lose
   any categories? The COMPOSITION of mechanisms matters more than the COUNT
   at this level -- are the mechanisms working together or just coexisting?"

4. "PA-67 (novelty) scored [YES/NO]. If NO, the page is competent but not
   inventive. This is the hardest gap to close with prompt changes. Should
   we test Opus as builder (if currently Sonnet) for the next run?"

5. "The fractal echo table in the build log has [N] rows with CSS evidence.
   Compare to the actual output. Does the page deliver what the builder
   planned? If the plan was good but execution fell short, the gap is
   builder capability. If the plan was weak, the gap is prompt guidance."

### PA-05 3.5 - 4.0 (DESIGNED -- at or above target, optimization phase)

1. "PA-05 >= 3.5. Now the question is Tier 5. Score is [N]/8. The Flagship
   bar is 6/8. Which of the remaining NO questions is closest to flipping
   to YES based on the auditor's quote? That is the cheapest improvement."

2. "This page achieves the quality target. Is it REPRODUCIBLE? Run the same
   content with the same configuration again. If the second run also hits
   3.5+, the pipeline is reliable. If not, we have a variance problem."

3. "What did this run do differently from the last run that scored below 3.5?
   Cross-reference the intervention log. The difference is a candidate for
   permanent codification."

4. "PA-65 (musical analogy): the auditor said [quote]. If the page is an
   'ensemble,' what are the independent instruments? Can you name them from
   the CSS budget breakdown? If you cannot, the ensemble quality may not
   survive content changes."

5. "Review the builder's build log. What was their midpoint observation? Did
   they adjust course mid-build? If yes, that metacognitive behavior is what
   separates DESIGNED from COMPOSED. How do we make it reliable?"

---

## 6. MEMORY UPDATE PROTOCOL

### 6.1 What Gets Updated After Each Retrospective

```
[output-dir]/_retrospective/scorecard.md        -- ALWAYS (auto-generated)
[output-dir]/_retrospective/comparison-to-*.md   -- ALWAYS (if prior run exists)
[output-dir]/_retrospective/root-cause.md        -- ALWAYS (if PA-05 < 3.5 or Tier 5 < 6/8)
[output-dir]/_retrospective/experiment-design.md -- ALWAYS (for next run)
```

### 6.2 Findings Classification

Every finding from a retrospective gets classified before it can change behavior:

| Classification | Criteria | Action Threshold |
|----------------|----------|-----------------|
| OBSERVATION | Seen in 1 run | Log it. Do NOT change pipeline. |
| PATTERN | Seen in 2 runs with same direction | Design an experiment to test it. |
| CONFIRMED | Seen in 3+ runs OR experimentally isolated | Codify into pipeline files. |
| CONTESTED | Seen in some runs, contradicted in others | Flag as variable. Do not codify. |
| RETIRED | Codified but no longer relevant (threshold moved, problem solved) | Remove from pipeline. |

**Promotion path:** OBSERVATION -> PATTERN -> CONFIRMED -> (eventually) RETIRED.

**Demotion path:** CONFIRMED -> CONTESTED (if a run contradicts it).

**RULE: A finding must be CONFIRMED before it changes any pipeline file.** The
one exception: a finding that causes a blocking gate failure in 1 run can be
immediately addressed (but flagged as OBSERVATION-APPLIED, requiring confirmation).

### 6.3 Memory File Updates

After each retrospective, update these files:

**MEMORY.md** (project memory -- `~/.claude/projects/.../memory/MEMORY.md`):
- Add run to the historical results table (Section 0 of this framework)
- Update "Current State" with latest run outcome
- Add any CONFIRMED findings to the "Core Findings" section
- Update "Key File Paths" if new retrospective artifacts are created

**MEMORY.md update template:**
```markdown
**Run [N] ([date]):** [VERDICT]. PA-05 [X.X]/4, Tier 5 [N]/8. Builder: [model].
Content: [slug]. [1-sentence key finding]. Intervention: [what changed from Run N-1].
Confirmed: [any findings promoted to CONFIRMED]. Retired: [any findings demoted].
```

**Conventions brief** (`design-system/pipeline/conventions-brief.md`):
- ONLY updated when a CONFIRMED finding targets brief content
- Every edit requires: finding classification, source run numbers, rationale
- Log edit in brief's changelog section

**Gate runner** (`design-system/pipeline/gate-runner.md`):
- ONLY updated when a gate threshold is experimentally validated as wrong
- Threshold changes require: current value, proposed value, evidence from 2+ runs

### 6.4 Complexity Ratchet Prevention

The pipeline's greatest structural risk is rule accumulation: rules are added
after failures but never removed after successes. This creates an ever-growing
constraint surface that eventually contradicts itself.

**Sunset protocol (run after every 5th retrospective):**

```
1. LIST all rules in the conventions brief, gate runner, and SKILL.md.
   Count them. If count increased by > 10% since last sunset: RED FLAG.

2. For each rule, answer: "In the last 5 runs, did this rule PREVENT a
   failure that would otherwise have occurred?"
   - YES with evidence -> KEEP
   - MAYBE (no clear evidence) -> FLAG for monitoring
   - NO (never triggered, or problem is solved) -> CANDIDATE for removal

3. For CANDIDATE rules: remove from active pipeline. Move to an ARCHIVE
   section at bottom of file with note: "Archived [date]. Restore if
   [condition]."

4. REPORT: "Sunset review: [N] rules reviewed, [N] kept, [N] flagged,
   [N] archived. Net rule delta: [+/-N]."
```

**Gate retirement criteria:**
- A gate can be retired if it has PASSED on 10 consecutive runs AND
  the failure it was designed to prevent has not occurred in 10 runs.
- Retired gates move to ADVISORY (still logged, no longer blocking).

**Brief section retirement:**
- A brief section can be shortened (not removed) if builder absorption
  evidence shows it is consistently absorbed at > 90% across 5+ runs.
- Shortened sections keep the rule but remove explanatory context.

### 6.5 Anti-Patterns to Avoid

1. **Post-hoc rule explosion.** After a run fails, resist the urge to add 5 new
   rules. Add at most 1 rule per failure. If the failure has multiple causes,
   address the ROOT cause, not all symptoms.

2. **Threshold tightening spiral.** If a gate passes but PA still fails, the
   answer is rarely "make the gate threshold stricter." The answer is usually
   "this quality dimension cannot be measured programmatically -- improve the
   brief instead."

3. **Auditor-chasing.** If one auditor says NO and eight say YES, do not change
   the pipeline to satisfy the outlier. Track it as an OBSERVATION. If it
   appears in 2 more runs, upgrade to PATTERN.

4. **Checklist creep.** If the brief starts reading like a checklist (> 20%
   constraint language: "must," "verify," "ensure," "fail"), it has drifted
   from world-description to specification. Rewrite the drifted sections.

5. **Retrospective theater.** If the retrospective produces a 500-line report
   but only 1 change is applied, the framework is too heavy. The scorecard
   should take 5 minutes to generate. The root cause analysis should take
   10 minutes. The intervention should be designed in 5 minutes. Total:
   20 minutes per retrospective, max.

---

## APPENDIX A: SCORECARD GENERATION SCRIPT

The orchestrator should generate the scorecard automatically by extracting data
from these files (all in `[output-dir]/`):

```
_verification/gate-results.json     -> Gate Results Matrix (1.2)
_pa/pa-auditor-[A-I].md             -> PA Question Matrix (1.3) + Tier 5 (1.4)
_pa/_pa-report.md                   -> Verdict, PA-05 sub-scores
_build-log.md                       -> Mechanism Inventory (1.5), Absorption Evidence (1.7)
_cascade-value-table.md             -> Compression Loss Tracker (1.8)
output.html                         -> CSS Budget Breakdown (1.6, parse <style> tag)
```

### Extraction pseudocode for CSS Budget (1.6):

```
1. Extract all CSS from output.html <style> tags
2. Split into declarations (selector + properties)
3. Classify each property:
   - layout: display, grid-*, flex-*, position, top/right/bottom/left, float, clear
   - typography: font-*, letter-spacing, line-height, text-*, word-spacing
   - color: background*, border-color, color, opacity
   - spacing: margin*, padding*, gap
   - component: selectors matching .card*, .callout*, .table*, .code*, .quote*
   - responsive: inside @media blocks
   - accessibility: :focus*, .sr-only, prefers-reduced-motion
   - sub-perceptual: letter-spacing < 0.025em, bg delta < 15 RGB (flagged by SC-14)
4. Count lines per category
5. Calculate percentages
```

---

## APPENDIX B: HISTORICAL SCORECARD INDEX

Maintain a running index of all scorecards for cross-run queries:

```markdown
## Scorecard Index

| Run | Date | Content | Builder | PA-05 | Tier 5 | Verdict | Scorecard Path |
|-----|------|---------|---------|-------|--------|---------|----------------|
| 1 | [date] | [slug] | [model] | [X.X] | [N]/8 | [verdict] | [path] |
| 2 | [date] | [slug] | [model] | [X.X] | [N]/8 | [verdict] | [path] |
| ... | | | | | | | |
```

Save to `design-system/pipeline/_retrospective-index.md`.

---

**END OF RETROSPECTIVE FRAMEWORK**

Document statistics:
- Total sections: 6 + 2 appendices
- Conversation starters: 20 (5 per score range x 4 ranges)
- Tier 5 root causes: 24 (3 per question x 8 questions)
- Decision tree nodes: 5 (first-pass triage)
- Finding classifications: 5 (OBSERVATION through RETIRED)
- Anti-patterns: 5
- Target retrospective time: 20 minutes per run
