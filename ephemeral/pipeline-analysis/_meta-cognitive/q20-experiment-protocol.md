# Q20 EXPERIMENT PROTOCOL
# The Cheapest Most Informative Experiment

**Designer:** q20-experiment-designer (Opus 4.6)
**Date:** 2026-02-18
**Purpose:** Isolate whether perception thresholds ALONE explain the flagship-to-remediation quality jump, or whether recipe format and CSS specificity are also required.
**Evidence base:** Files 02, 08, 25, 41, 42 from the pipeline-analysis corpus + actual flagship experiment artifacts.

---

## 1. WHY THIS EXPERIMENT MATTERS

The flagship experiment failed (PA-05 1.5/4). The remediation succeeded (PA-05 2.5/4). But THREE variables changed simultaneously between them:

| Variable | Flagship (FAILED) | Remediation (SUCCEEDED) |
|----------|-------------------|------------------------|
| **FORMAT** | Checklist (97 scattered rules by category) | Recipe (9 sequential phases by execution order) |
| **SPECIFICITY** | Abstract ("channel actively used") | Concrete ("font-size: 17px", "#FEF5EB") |
| **PERCEPTION** | Zero thresholds (no minimum deltas) | 8-property threshold table (>=10 RGB, >=2px, etc.) |

The corpus CANNOT analytically resolve which variable caused success (File 41, Q13; File 25 cross-report finding 1). All 41 files acknowledge this confound. Multiple files (20, 25, 26, 41) converge on: run the experiment with ONLY ONE variable changed.

**The stakes for Pipeline v2:**
- If thresholds alone produce PA-05 >= 2.5/4 --> Pipeline v2 can be the EXISTING master prompt + a threshold appendix. Months of recipe engineering are unnecessary.
- If thresholds alone produce PA-05 < 2.0/4 --> Recipe format and/or CSS specificity are confirmed as necessary. Pipeline v2 MUST adopt the 9-phase recipe format from File 42.
- Partial success (PA-05 2.0-2.5/4) --> Thresholds are necessary but insufficient. Recipe format adds incremental value.

This ONE experiment could save months of pipeline engineering OR confirm that the full redesign is required. It is the highest-information-per-cost experiment in the entire corpus.

---

## 2. EXPERIMENT DESIGN

### 2.1 The Three-Variable Confound (Formal Statement)

Let:
- **F** = Format (checklist vs recipe)
- **S** = Specificity (abstract vs concrete CSS values)
- **P** = Perception thresholds (absent vs present)

| Condition | F | S | P | Result |
|-----------|---|---|---|--------|
| Flagship | Checklist | Abstract | Absent | PA-05 1.5/4 (FAILED) |
| Remediation | Recipe | Concrete | Present | PA-05 2.5/4 (SUCCEEDED) |
| **Q20 Treatment** | **Checklist** | **Abstract** | **Present** | **?** |

The Q20 treatment changes ONLY perception thresholds (P). Format (F) and specificity (S) remain identical to the flagship. This isolates P's causal contribution.

### 2.2 Control Condition (Condition A: Baseline Replication)

**Purpose:** Establish that the original failure reproduces under identical conditions. If the control does NOT reproduce the failure, the experiment is invalid (the failure was stochastic, not systematic).

**Prompt:** The EXACT `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines) located at:
```
ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md
```

**Builder prompt:** The EXACT 71-line builder prompt located at:
```
ephemeral/flagship-experiment/builder-prompt.md
```

**No modifications.** Zero edits. Byte-identical copies.

### 2.3 Treatment Condition (Condition B: Thresholds Only)

**Purpose:** Test whether adding ONLY perception thresholds to the unchanged master prompt produces perceptible CSS.

**Prompt:** The EXACT same `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (963 lines) with ONE addition: the perception threshold table appended as a new section.

**Builder prompt:** The EXACT same 71-line builder prompt with ONE addition: a 25-line perception threshold appendix inserted AFTER the self-check and BEFORE the conviction closing.

**The threshold appendix (to add to builder-prompt.md):**

```markdown
## PERCEPTION THRESHOLDS (MANDATORY -- every CSS variation must exceed these)

No CSS variation counts as "active" or "present" unless it exceeds these
minimum perceptible deltas. Sub-threshold variations are DEFECTS, not subtlety.

| Property | Minimum Delta | FAIL IF below |
|----------|--------------|---------------|
| Background color | >= 10 RGB points per channel between adjacent sections | 2 adjacent backgrounds differ by < 10 RGB |
| Font-size | >= 2px between zone groups | Zone typography differs by < 2px |
| Letter-spacing | >= 0.025em between heading and body | Range < 0.025em |
| Line-height | >= 0.2 between text types | Range < 0.2 |
| Border width | >= 1px between hierarchy levels | Borders differ by < 1px |
| Border-radius | >= 4px between element types | N/A (always 0 per soul) |
| Margin/padding | >= 8px between spacing levels | Adjacent spacing levels differ by < 8px |
| Box-shadow | N/A (always none per soul) | N/A |
| Total section gap | <= 120px (sum of ALL margins/paddings at boundary) | Any boundary sum > 120px |

SELF-CHECK ADDITION:
[ ] Every background color shift is >= 10 RGB points (eyeball check: can you SEE the shift?)
[ ] Font-size between zones differs by >= 2px
[ ] Total gap at every section boundary <= 120px (sum margin-bottom + padding-top + divider)
[ ] No CSS variation exists below its threshold (if you can't SEE it, DELETE it)
```

**What this appendix does NOT change:**
- Format remains checklist (scattered rules by category, not sequential recipe)
- Specificity remains abstract ("channel actively used", not "font-size: 17px")
- Architecture remains conviction-execution sandwich (not linear recipe)
- Builder still sees only 71 + 25 = 96 lines (not the full 963-line prompt)
- No CSS values are provided (thresholds are MINIMUMS, not instructions)
- No sequencing is provided (thresholds are CONSTRAINTS, not steps)
- The self-check remains a checklist, not a recipe

**Critical design constraint:** The appendix MUST be formatted as ADDITIONAL RULES in the existing checklist style (FAIL IF statements, binary checks), NOT as recipe steps. This preserves the checklist format variable while changing only the perception variable.

### 2.4 What MUST NOT Change Between Conditions

To ensure ONLY perception thresholds vary, these must be IDENTICAL across both conditions:

| Parameter | Value | Verification Method |
|-----------|-------|-------------------|
| Content source | `design-system/research/RESEARCH-SYNTHESIS.md` (384 lines) | Byte-identical file |
| Design system files | All files in `design-system/compositional-core/` | No modifications |
| Team topology | Identical to flagship (see Section 4) | Same agent count, same model, same roles |
| Builder model | claude-opus-4-6 | Same model ID in both conditions |
| Builder prompt format | Checklist with rule IDs | Same structure, appended thresholds |
| Master prompt format | Conviction-Execution-Coordination sandwich | Same section structure |
| Gate runner | Same spatial-gate-runner.js | Byte-identical |
| Build process | Same 5-pass sequence (content, metaphor, skeleton, mechanisms, intentionality) | Same pass names and ordering |
| PA evaluation | Same Mode 4 protocol with same auditor count | Same screenshots, same questions |
| Execution time budget | Same per-agent time limits | Same timeouts |

---

## 3. CONTENT SOURCE

**Use:** `design-system/research/RESEARCH-SYNTHESIS.md`

**Rationale:** This is the SAME content used in the flagship experiment (confirmed by `ephemeral/flagship-experiment/00-content-inventory.md` line 3: "Source: design-system/research/RESEARCH-SYNTHESIS.md (384 lines)"). Using identical content eliminates content as a confounding variable.

**Content characteristics (from the flagship content inventory):**
- ~2,300 words usable
- Content types: prose, tables (6+), bullet lists, code blocks, pullquotes
- Content arc: Principles -> Conflicts -> Applications -> Findings
- Zone count target: 4 (3,000-5,000 words = 4 zones per S-15)

---

## 4. TEAM ARCHITECTURE

### 4.1 Replicate Flagship Topology

The flagship used a multi-agent pipeline. To isolate the perception variable, BOTH conditions must use the SAME topology.

**Flagship topology (from experiment artifacts):**

| Pass | Agent Role | Model | Output |
|------|-----------|-------|--------|
| Pass 0 | Content Architect | Opus | 00-content-inventory.md |
| Pass 1 | Content Adapter | Opus | 01-adapted-content.md |
| Pass 2 | Metaphor Derivation | Opus | 02-metaphor-derivation.md |
| Pass 3 | Build Planner | Opus | 03-build-plan.md |
| Pass 3.5 | Skeleton Builder | Opus | 04-skeleton.html |
| Pass 4 | Mechanism Builder | Opus | 05-mechanisms.html |
| Pass 5 | Intentionality Builder | Opus | 06/07-intentionality.html |

**For the experiment:** Use EXACTLY this topology for both conditions. The ONLY difference is what the builders see: Condition A builders see the original builder prompt. Condition B builders see the builder prompt + threshold appendix.

### 4.2 Agent Configuration

| Parameter | Value |
|-----------|-------|
| Model for all agents | claude-opus-4-6 |
| Builder model | claude-opus-4-6 (CRITICAL: NOT Sonnet -- the flagship used Opus) |
| Communication protocol | File-bus only (replicates flagship zero-SendMessage pattern) |
| Per-agent timeout | Same as flagship |
| Total agent count | Same as flagship |

**Confound awareness:** The flagship used Sonnet for some builder passes and Opus for others. This is a KNOWN confound (Memory MEMORY.md: "Sonnet-for-builders is unexamined"). For Q20, ALL builder agents MUST use the same model as each other. Use Opus for all, matching the FINAL intentionality pass builder. If we later want to test model choice, that is a separate experiment.

### 4.3 Inter-Agent Communication

Replicate the flagship's communication pattern: zero SendMessage calls, file-bus only.

**Why NOT fix communication for Q20:** Communication protocol is a fourth variable. If we enable messaging AND add thresholds, and quality improves, we cannot attribute the improvement to thresholds. Fix communication in a SEPARATE experiment.

---

## 5. GATE STRUCTURE

### 5.1 Programmatic Gates (Identical for Both Conditions)

Use the EXACT `spatial-gate-runner.js` from the flagship experiment:
```
ephemeral/flagship-experiment/spatial-gate-runner.js
```

This gate runner checks:
- S-01: Container width 940-1100px
- S-07: CPL 45-80
- S-09: Per-property spacing max 96px
- S-12: No viewport < 30% content
- Content-to-void ratio
- Soul compliance (U-01 through U-10)

**For Condition B ONLY:** Add ONE additional gate check:

```javascript
// THRESHOLD GATE (Condition B only)
// Checks that CSS variations exceed perception thresholds
function checkPerceptionThresholds(page) {
  const sections = document.querySelectorAll('section');
  const results = { pass: true, violations: [] };

  // Check adjacent section backgrounds
  for (let i = 0; i < sections.length - 1; i++) {
    const bg1 = getComputedStyle(sections[i]).backgroundColor;
    const bg2 = getComputedStyle(sections[i+1]).backgroundColor;
    const [r1,g1,b1] = parseRGB(bg1);
    const [r2,g2,b2] = parseRGB(bg2);
    const maxDelta = Math.max(Math.abs(r1-r2), Math.abs(g1-g2), Math.abs(b1-b2));
    if (maxDelta > 0 && maxDelta < 10) {
      results.violations.push(`S${i+1}->S${i+2}: bg delta ${maxDelta} < 10 RGB`);
      results.pass = false;
    }
  }

  // Check total section boundary gaps
  for (let i = 0; i < sections.length - 1; i++) {
    const mbottom = parseFloat(getComputedStyle(sections[i]).marginBottom);
    const ptop = parseFloat(getComputedStyle(sections[i+1]).paddingTop);
    // Find divider between sections
    const divider = sections[i].nextElementSibling;
    let dividerHeight = 0, dividerMargin = 0;
    if (divider && divider.classList.contains('divider')) {
      dividerHeight = divider.offsetHeight;
      dividerMargin = parseFloat(getComputedStyle(divider).marginTop)
                    + parseFloat(getComputedStyle(divider).marginBottom);
    }
    const totalGap = mbottom + ptop + dividerHeight + dividerMargin;
    if (totalGap > 120) {
      results.violations.push(`S${i+1}->S${i+2}: total gap ${totalGap}px > 120px`);
      results.pass = false;
    }
  }

  return results;
}
```

**IMPORTANT:** The threshold gate is INFORMATIONAL in both conditions. It does NOT block the build. It provides data for the analysis. The builder in Condition B is TOLD about thresholds; the builder in Condition A is not. But the gate runner measures thresholds in BOTH conditions to enable comparison.

### 5.2 Perceptual Gates (Identical for Both Conditions)

After the build completes, run Mode 4 PA on BOTH conditions using the SAME protocol:

1. Team lead takes all screenshots (pre-capture pattern)
2. 9 Opus auditors, each assigned specific PA questions
3. Question assignments identical across conditions
4. Screenshots taken at 1440px (cold look + scroll-through) and 768px

**PA Question Assignments (same as Mode 4 standalone PA):**

| Auditor | Questions | Focus |
|---------|-----------|-------|
| A1 | PA-01, PA-02 | Overall impression, first 5 seconds |
| A2 | PA-03, PA-04 | Typography, color system |
| A3 | PA-05a, PA-05b | "Does it feel designed?" (the critical question) |
| A4 | PA-06, PA-07 | Spatial rhythm, whitespace |
| A5 | PA-08, PA-09 | Component variety, structural borders |
| A6 | PA-10, PA-11 | Transitions, dividers |
| A7 | PA-12, PA-13 | Accessibility, responsive |
| A8 | PA-14, PA-15 | Novelty, metaphor |
| A9 | PA-16 through PA-48 | Remaining questions (breadth coverage) |

**CRITICAL:** PA auditors MUST be given ZERO context about which condition they are evaluating. They receive screenshots only. No condition label. No hypothesis. This is a BLIND evaluation.

---

## 6. SUCCESS CRITERIA

### 6.1 Primary Metric: PA-05 Score

PA-05 asks: "Does this feel DESIGNED?" Scale:
- 1/4 DEFICIENT: No design decisions visible. Template application only.
- 2/4 FUNCTIONAL/STYLED: Some design decisions present. Body is uniform.
- 3/4 COMPOSED: Multiple design decisions visible throughout. Zone differentiation.
- 4/4 DESIGNED: Every element feels intentionally placed. Mechanisms interact.

### 6.2 Success Threshold

| Condition B (Treatment) PA-05 | Interpretation | Implication for Pipeline v2 |
|-------------------------------|----------------|---------------------------|
| **>= 2.5/4** | Thresholds alone produce remediation-level quality | Pipeline v2 = existing prompt + threshold appendix. Recipe format is OPTIONAL improvement. |
| **2.0 - 2.4/4** | Thresholds help significantly but don't fully close the gap | Thresholds are NECESSARY but INSUFFICIENT. Recipe format adds measurable value. Pipeline v2 needs BOTH. |
| **1.5 - 1.9/4** | Thresholds produce marginal improvement | Thresholds alone are weak. FORMAT and/or SPECIFICITY are the primary causal variables. Pipeline v2 MUST adopt recipe format. |
| **< 1.5/4** | Thresholds produce no improvement (or regression) | Thresholds are irrelevant without format change. The recipe format IS the intervention. This would also challenge the perception-threshold thesis itself. |

### 6.3 Secondary Metrics (for richer interpretation)

| Metric | How to Measure | What It Reveals |
|--------|---------------|-----------------|
| Sub-perceptual CSS percentage | Count CSS lines below perception thresholds / total CSS lines | Did the builder USE the thresholds? (Condition B should have < 5% sub-perceptual vs flagship's 23.7%) |
| Channel activation (perceptible) | Count channels with above-threshold variation | Did thresholds cause more channels to be perceptibly active? (Flagship: 3/7 perceptible) |
| Total gap max | Measure worst-case section boundary gap | Did the 120px total-gap threshold prevent stacking? (Flagship: 276px worst case) |
| Background color delta range | Measure RGB deltas between adjacent sections | Did the 10 RGB threshold force visible color shifts? (Flagship: 1-8 RGB) |
| Builder self-correction count | Count instances where builder adjusted CSS citing thresholds | Did the builder reference thresholds during building? |
| CSS line count | Total CSS lines in final artifact | Did thresholds change the CSS budget allocation? |

---

## 7. FAILURE CRITERIA AND EXPERIMENT VALIDITY

### 7.1 When the Experiment is INVALID

The experiment is invalid (and must be re-run) if:

1. **Control fails to reproduce.** Condition A scores PA-05 >= 2.5/4 (significantly higher than the original 1.5/4). This means the failure is stochastic, not systematic, and the confound doesn't exist as described.

2. **Content source differs.** If `RESEARCH-SYNTHESIS.md` has been modified since the flagship experiment.

3. **Model version changes.** If claude-opus-4-6 behaves differently due to model updates between conditions.

4. **Builder sees different context.** If conditions A and B have different files routed to the builder beyond the threshold appendix.

5. **PA auditors are not blind.** If auditors know which condition they are evaluating.

### 7.2 When the Experiment is Inconclusive

The experiment is inconclusive if:

1. **Both conditions score identically** (within 0.25 PA-05 points). This means either: (a) the experiment lacks statistical power (n=1 per condition), or (b) perception thresholds have zero effect in checklist format but might work in recipe format.

2. **Control scores differently from flagship.** If Condition A produces PA-05 2.0/4 instead of the expected 1.5/4, the baseline has shifted and all comparisons are against a different reference point.

3. **Builder ignores thresholds.** If the Condition B builder produces 23%+ sub-perceptual CSS despite having the threshold table, the thresholds were present but not operationalized. This means thresholds need recipe format to be enacted (FORMAT is causally prior to PERCEPTION).

**This last scenario (#3) is the MOST INFORMATIVE inconclusive result.** If the builder has thresholds but still produces sub-perceptual CSS, it proves that having the information is not enough -- the FORMAT of delivery determines whether information is acted on. This would be strong evidence for the recipe-format thesis (File 41, Q3).

---

## 8. CONFOUND CONTROLS

### 8.1 Variables Held Constant

| Variable | Control Method |
|----------|---------------|
| Content | Same file, same word count, same structure |
| Design system | No modifications to any file in compositional-core/ |
| Team topology | Same agent roles, same pass sequence, same file-bus |
| Builder model | Same model ID (claude-opus-4-6) for all builders |
| Gate runner | Same JavaScript file for programmatic gates |
| PA protocol | Same Mode 4, same auditor count, same question assignments |
| Time of execution | Run both conditions in the same session (back-to-back) |
| Temperature | Default model temperature for both conditions |
| Prompt length | Minimal addition (~25 lines to 71-line builder prompt = 96 lines) |

### 8.2 Known Uncontrollable Confounds

| Confound | Risk | Mitigation |
|----------|------|-----------|
| LLM stochasticity | Same prompt can produce different output | Run each condition 2x (see Section 9.2 for power analysis) |
| Order effects | First run may "warm up" the context | Randomize run order (coin flip: A-then-B vs B-then-A) |
| Builder attention allocation | 96-line prompt may cause different attention than 71-line | Monitor via self-correction count metric |
| Threshold appendix changes FORMAT subtly | Adding FAIL IF rules to the self-check changes its character | The appendix uses the SAME FAIL IF format as existing rules -- minimal format drift |
| The threshold table is also INFORMATION | Thresholds don't just set floors -- they teach the builder about perception | This is acknowledged. If thresholds work, the mechanism could be "information" not "constraint." A future experiment could test: thresholds as prose explanation vs thresholds as binary rules |

### 8.3 The "Information vs Constraint" Distinction

File 25 raises a valid challenge: perception thresholds might work by TEACHING the builder (providing information about human perception) rather than by CONSTRAINING the builder (setting binary pass/fail gates). If the builder reads "backgrounds must differ by >= 10 RGB" and thinks "oh, humans need at least 10 RGB to see a difference -- I should make my backgrounds 15-20 RGB apart to be safe," the threshold worked as EDUCATION, not as a RULE.

This distinction matters for Pipeline v2: if thresholds work as education, they should be in the CONVICTION layer (read-once context). If they work as constraints, they should be in the EXECUTION layer (checkable rules).

**Q20 cannot resolve this distinction directly.** But we can partially detect it: if the builder produces backgrounds at 10-12 RGB (minimum-seeking behavior), the threshold worked as a constraint. If the builder produces 15-25 RGB (understanding-seeking behavior), it worked as education.

---

## 9. EXECUTION PROTOCOL

### 9.1 Pre-Experiment Checklist

Before running either condition:

- [ ] Verify `RESEARCH-SYNTHESIS.md` is unchanged since the flagship experiment
- [ ] Verify `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` is the v3 used in the flagship
- [ ] Verify `builder-prompt.md` matches the flagship's 71-line builder prompt
- [ ] Verify `spatial-gate-runner.js` is the same gate runner
- [ ] Prepare the Condition B builder prompt (builder-prompt.md + 25-line threshold appendix)
- [ ] Prepare the threshold gate check (JavaScript addition for both conditions)
- [ ] Verify all design system files are unmodified
- [ ] Prepare PA protocol: define 9 auditor question assignments
- [ ] Prepare screenshot protocol: define viewport positions for pre-capture
- [ ] Flip coin to determine run order (A-first vs B-first)

### 9.2 Execution Sequence

**Phase 1: Run Condition A (Control)**

1. Spawn team lead agent
2. Team lead spawns Pass 0-5 agents with ORIGINAL prompts (zero modifications)
3. Builders receive the ORIGINAL builder-prompt.md (71 lines)
4. Build completes -> final HTML artifact (Condition-A.html)
5. Run spatial-gate-runner.js on Condition-A.html
6. Run threshold gate check on Condition-A.html (INFORMATIONAL -- not shown to builder)
7. Team lead takes all screenshots (pre-capture)
8. Spawn 9 PA auditors (BLIND -- no condition label)
9. PA auditors evaluate screenshots
10. Weaver synthesizes PA-05 score

**Phase 2: Run Condition B (Treatment)**

1. Spawn team lead agent
2. Team lead spawns Pass 0-5 agents with ORIGINAL prompts EXCEPT:
   - Builder prompt = builder-prompt.md + 25-line threshold appendix
   - Master prompt gets threshold table appended to Section B (after B10 self-check)
3. Builders receive the MODIFIED builder prompt (96 lines)
4. Build completes -> final HTML artifact (Condition-B.html)
5. Run spatial-gate-runner.js on Condition-B.html
6. Run threshold gate check on Condition-B.html (INFORMATIONAL)
7. Team lead takes all screenshots (pre-capture)
8. Spawn 9 PA auditors (BLIND -- no condition label)
9. PA auditors evaluate screenshots
10. Weaver synthesizes PA-05 score

**Phase 3: Analysis**

1. Compare PA-05 scores: Condition A vs Condition B
2. Compare secondary metrics (sub-perceptual %, channel activation, total gap max, etc.)
3. Analyze builder behavior (did Condition B builder reference thresholds?)
4. Apply interpretation matrix (Section 10)
5. Write experiment report

### 9.3 Optional: Double Run for Power

Given LLM stochasticity, a single run per condition has low statistical power. The IDEAL protocol runs each condition TWICE:

| Run | Condition | Purpose |
|-----|-----------|---------|
| Run 1 | A | Control replicate 1 |
| Run 2 | B | Treatment replicate 1 |
| Run 3 | B | Treatment replicate 2 |
| Run 4 | A | Control replicate 2 |

**Order is A-B-B-A** (counterbalanced). This gives 2 data points per condition. If both A runs produce 1.5/4 and both B runs produce 2.5/4, confidence is much higher than n=1.

**Cost:** 4 full builds (~4-6 hours total) + 4 PA rounds (4 x 9 auditors = 36 auditor invocations).

**If budget allows only 2 runs:** Run A-then-B (or B-then-A by coin flip). Accept n=1 with the understanding that the result is a strong signal, not a proof.

---

## 10. INTERPRETATION MATRIX

### 10.1 All Possible Outcomes

| Condition A (Control) | Condition B (Treatment) | Interpretation | Pipeline v2 Action |
|----------------------|------------------------|----------------|-------------------|
| 1.5/4 (reproduces) | >= 2.5/4 | **THRESHOLDS SUFFICIENT.** Adding thresholds alone produces remediation-equivalent quality. | Pipeline v2 = existing prompt + threshold appendix. Recipe format is a nice-to-have optimization, not a requirement. Save months of recipe engineering. |
| 1.5/4 | 2.0-2.4/4 | **THRESHOLDS NECESSARY BUT INSUFFICIENT.** Significant improvement but doesn't reach remediation quality. | Pipeline v2 needs BOTH thresholds AND recipe format. Thresholds are the floor; recipe format is the ceiling. |
| 1.5/4 | 1.5-1.9/4 | **THRESHOLDS WEAK.** Marginal or no improvement. Format/specificity are the dominant variables. | Pipeline v2 MUST adopt full recipe format (File 42). Thresholds are embedded in the recipe, not standalone. |
| 1.5/4 | < 1.5/4 | **THRESHOLDS REGRESSIVE.** Adding constraints without changing format made things WORSE (attention overload). | Pipeline v2 must change format FIRST, then add thresholds. The order matters. |
| >= 2.0/4 | Any | **CONTROL FAILED TO REPRODUCE.** Baseline has shifted. | Experiment is inconclusive. Investigate why the original failure didn't reproduce (model changes? stochastic?). |
| 1.5/4 | 1.5/4 BUT sub-perceptual % dropped to < 5% | **THRESHOLDS ENFORCED BUT DIDN'T IMPROVE PA-05.** Builder followed thresholds (individual values are perceptible) but composition didn't improve. | Perception is necessary but composition (mechanism interaction) is the real quality driver. Recipe format provides composition, not just perception. |
| 1.5/4 | 1.5/4 AND sub-perceptual % remains ~23% | **THRESHOLDS IGNORED.** Builder had thresholds but didn't use them. | FORMAT is causally prior to PERCEPTION. Information in checklist format is not acted on. Recipe format is required to OPERATIONALIZE thresholds. THIS IS THE STRONGEST EVIDENCE FOR THE RECIPE THESIS. |

### 10.2 The Most Informative Negative Result

The scenario where Condition B scores ~1.5/4 BUT the sub-perceptual CSS percentage drops from 23% to <5% is the MOST informative negative result. It would prove:

1. Thresholds work as CONSTRAINTS (the builder used them to avoid sub-perceptual CSS)
2. But perception alone doesn't produce quality (the page is perceptible but still FLAT)
3. Quality comes from COMPOSITION (mechanism interaction, zone coherence, structural variety)
4. Composition requires either recipe format (sequenced steps that build composition) or compositional fluency (Opus-level creative intelligence that the prompt's checklist format doesn't activate)

This result would validate the full Pipeline v2 design from File 42, confirming that the recipe's value is not just in making CSS perceptible but in COMPOSING perceptible CSS into a designed page.

### 10.3 The Most Informative Positive Result

The scenario where Condition B scores >= 2.5/4 would be the most consequential positive result. It would prove:

1. The perception thesis (File 08) is correct: the master prompt's failure was fundamentally about missing thresholds
2. Recipe format (File 42) is a HELPFUL ORGANIZATION but not a causal necessity
3. Checklist format works IF the checklist includes perception thresholds
4. Pipeline v2 can be dramatically simpler: existing prompt + threshold appendix

However, this result would need careful scrutiny (File 25 concern):
- Did the builder just get lucky with a different stochastic path?
- Is the improvement from thresholds or from the 25 extra lines of attention?
- Would the improvement hold with different content?

The double-run protocol (Section 9.3) mitigates the first concern. The second concern is harder -- a future experiment could test: add 25 lines of IRRELEVANT content to the builder prompt and see if quality improves (placebo test).

---

## 11. POST-EXPERIMENT DELIVERABLES

### 11.1 Experiment Report

Write to: `ephemeral/pipeline-analysis/_meta-cognitive/q20-experiment-results.md`

The report MUST include:
1. Run conditions (exact prompts used, confirmed no modifications)
2. PA-05 scores for both conditions (from 9-auditor Mode 4 PA)
3. Secondary metrics comparison table
4. Builder behavior analysis (threshold usage, self-correction, CSS budget allocation)
5. Interpretation (which row of the matrix applies)
6. Implications for Pipeline v2
7. Limitations and confounds acknowledged
8. Recommendation: what to do next

### 11.2 Decision Record

Based on the experiment result, produce a decision record:

```
DECISION: [Pipeline v2 approach based on Q20 result]
EVIDENCE: [PA-05 scores, secondary metrics]
CONFIDENCE: [High/Medium/Low based on n-count and confound control]
NEXT EXPERIMENT: [What to test next if result is ambiguous]
```

### 11.3 Pipeline v2 Implications

Map the result to specific edits in the Pipeline v2 targets:

| If Q20 shows... | Then update... |
|-----------------|---------------|
| Thresholds sufficient | Add threshold appendix to `tension-composition/SKILL.md` Phase 3. Do NOT restructure as recipe. |
| Thresholds necessary but insufficient | Add thresholds AND restructure SKILL.md to recipe format per File 42. Both changes required. |
| Thresholds weak or ignored | Full recipe restructure per File 42 is the primary intervention. Thresholds are embedded in recipe steps, not standalone. |

---

## 12. COST ESTIMATE

### Minimum viable experiment (n=1 per condition):
- 2 full builds: ~2-3 hours of agent compute
- 2 programmatic gate runs: ~5 minutes
- 2 screenshot pre-captures: ~15 minutes
- 18 PA auditor invocations (9 per condition): ~1 hour
- 2 weaver synthesizers: ~15 minutes
- Analysis and report writing: ~30 minutes
- **Total: ~4-5 hours, ~20 agent invocations**

### Recommended experiment (n=2 per condition):
- 4 full builds: ~4-6 hours
- 4 programmatic gate runs: ~10 minutes
- 4 screenshot pre-captures: ~30 minutes
- 36 PA auditor invocations: ~2 hours
- 4 weaver synthesizers: ~30 minutes
- Analysis and report writing: ~1 hour
- **Total: ~8-10 hours, ~44 agent invocations**

### Comparison to alternative approaches:
- Full Pipeline v2 implementation without Q20: ~40-80 hours of recipe engineering
- If Q20 shows thresholds sufficient: ~35-75 hours SAVED
- Even if Q20 shows thresholds insufficient: ~5 hours invested to CONFIRM the recipe approach is needed, eliminating months of "what if we didn't need to restructure?"

**ROI:** Q20 costs 5-10 hours and saves 0-75 hours depending on outcome. The expected value is strongly positive under any prior over the outcome distribution.

---

## 13. ADVERSARIAL SELF-CHECK

### Challenges to This Protocol (from File 25's methodology)

**Challenge 1: N=1 (or N=2) is insufficient.**
Response: Acknowledged. This experiment provides a SIGNAL, not a PROOF. But the alternative (no experiment, proceed with assumptions) has zero information. N=1 is strictly better than N=0. The double-run protocol reduces stochastic risk.

**Challenge 2: The threshold appendix changes more than just perception.**
Response: Partially acknowledged. The appendix adds INFORMATION (the builder learns about perception) and RULES (new FAIL IF checks). However, the appendix is deliberately formatted in the existing rule style (binary FAIL IF), preserving the checklist format. The information content is the unavoidable minimum -- you cannot add thresholds without the builder knowing about them.

**Challenge 3: The flagship may not reproduce.**
Response: This is why Condition A exists. If the control doesn't reproduce at ~1.5/4, the experiment is declared invalid. This is a pre-registered validity check, not a post-hoc excuse.

**Challenge 4: PA-05 is a subjective metric scored by LLM auditors, not humans.**
Response: Acknowledged. PA-05 is the best available metric and has been validated across experiments (Middle: 4/4, Ceiling: 1.5/4, Flagship: 1.5/4, Remediation: 2.5/4 -- these scores correlate with our subjective assessments). A future validation study could compare LLM PA scores to human panel scores.

**Challenge 5: The builder prompt is 71 lines, not the full 963-line master prompt. Thresholds added to 71 lines may have different effect than thresholds added to 963 lines.**
Response: The builder sees the SAME 71 lines in both conditions (+ threshold appendix in Condition B). The 963-line master prompt governs the TEAM LEAD and other agents, not the builder directly. The threshold appendix is added to the builder prompt because the builder is the agent that WRITES CSS. Adding thresholds to the master prompt (which governs planning agents) would change a different variable (planner behavior, not builder behavior).

**However,** adding the threshold table to the master prompt AS WELL would be a reasonable extension. This could be a secondary treatment condition (Condition C: thresholds in BOTH master prompt and builder prompt) in a future experiment.

---

## APPENDIX A: EXACT THRESHOLD APPENDIX TEXT

The following is the EXACT text to insert into `builder-prompt.md` between the SELF-CHECK section and the CONVICTION CLOSING section:

```markdown
## PERCEPTION THRESHOLDS (MANDATORY -- every CSS variation must exceed these)

No CSS variation counts as "active" or "present" unless it exceeds these
minimum perceptible deltas. Values below these thresholds are DEFECTS -- they
consume CSS budget without producing visible results.

| Property | Minimum Delta | FAIL IF |
|----------|--------------|---------|
| Background color between adjacent sections | >= 10 RGB points per channel | Delta < 10 RGB on any channel |
| Font-size between zone groups | >= 2px | Delta < 2px |
| Letter-spacing between heading and body | >= 0.025em | Range < 0.025em |
| Line-height between text types | >= 0.2 | Delta < 0.2 |
| Border width between hierarchy levels | >= 1px | Delta < 1px |
| Margin/padding between spacing levels | >= 8px | Delta < 8px |
| Total gap at section boundary | <= 120px | Sum of all margins + paddings + divider > 120px |

THE RULE: If a human cannot SEE the difference without a color picker or
browser inspector, do NOT write the CSS. Delete it instead.

ADDITIONAL SELF-CHECKS:
[ ] Every background color shift >= 10 RGB points (can you SEE the shift?)
[ ] Font-size between zones differs by >= 2px
[ ] Total gap at every section boundary <= 120px
[ ] No CSS variation below its perception threshold
```

---

## APPENDIX B: THRESHOLD TABLE ADDITION TO MASTER PROMPT

The following is added as Section B7 in the master prompt, AFTER B6 (Metaphor Gates) and BEFORE Section C (Coordination):

```markdown
## B7. PERCEPTION THRESHOLDS (8 properties -- all binary PASS/FAIL)

PT-01. Background color delta between adjacent sections: >= 10 RGB points per channel. FAIL IF < 10.
PT-02. Font-size delta between zone groups: >= 2px. FAIL IF < 2px.
PT-03. Letter-spacing delta between heading and body: >= 0.025em. FAIL IF < 0.025em.
PT-04. Line-height delta between text types: >= 0.2. FAIL IF < 0.2.
PT-05. Border width delta between hierarchy levels: >= 1px. FAIL IF < 1px.
PT-06. Margin/padding delta between spacing levels: >= 8px. FAIL IF < 8px.
PT-07. Total section-boundary gap (sum all margins + paddings + divider): <= 120px. FAIL IF > 120px.
PT-08. Sub-perceptual CSS percentage: < 5% of total CSS lines. FAIL IF >= 5%.

META-RULE: No CSS variation counts as "channel active" (SC-02) or "mechanism deployed" (C-01) unless it exceeds the perception threshold for its property. Sub-threshold values are invisible and therefore absent.
```

This addition follows the exact same format as existing B-section rules (rule ID, binary FAIL IF, measurable threshold). It does NOT change the document structure, organization, or tone.

---

**END OF Q20 EXPERIMENT PROTOCOL**

**Total: ~480 lines. Self-contained. Executable by a team lead from this document alone.**

**The core bet:** 5-10 hours of experiment could save 40-80 hours of pipeline engineering. Even the negative result (thresholds insufficient) is valuable -- it CONFIRMS the recipe approach is necessary, eliminating doubt and justifying the full investment.
