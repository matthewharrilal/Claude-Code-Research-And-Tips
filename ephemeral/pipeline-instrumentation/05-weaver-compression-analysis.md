# Weaver Compression Analysis: From 270 Findings to Actionable Fix Instructions

**Author:** information-theory-specialist
**Date:** 2026-02-19
**Scope:** PA weaver stage compression protocol redesign
**Sources analyzed:** MASTER-EXECUTION-PROMPT.md Section 5, SKILL.md (perceptual-auditing), DRAFT-11 weaver spec, FINAL-VERDICT.md (flagship remediation), 2 raw auditor reports (A, C)

---

## 0. THE COMPRESSION PROBLEM (Quantified)

Current pipeline: 9 auditors x ~25 findings each = ~225 observations.
Current weaver output: PA-05 score + Tier 5 score + TOP-3 issues.
Information loss: 225 findings compressed to 3 actionable items = **98.7% loss**.

But the problem is worse than raw percentages suggest. The 225 findings are not independent -- they cluster. The flagship remediation PA produced these empirical clusters:

| Cluster | Finding Count | Auditor Agreement | Made TOP-3? |
|---------|--------------|-------------------|-------------|
| Zero structural borders | 8/12 reporters | 8/12 (67%) | YES (#1) |
| Typography uniformity S4-S12 | 6/9 auditors | 6/9 (67%) | YES (#2) |
| Imperceptible bg deltas S4-S5, S9-S10 | 6/12 reporters | 6/12 (50%) | NO (became #3 as SIGNIFICANT) |
| Section gap excess | 4/12 reporters | 4/12 (33%) | NO (#5 in final ranking) |
| Table CSS class mismatch | 4/12 reporters | 4/12 (33%) | NO (#4 in final ranking) |
| Screenshot blank artifact | 5/9 auditors | 5/9 (56%) | NO (dismissed as artifact) |
| Callout bg similarity | 3/9 auditors | 3/9 (33%) | NO (#6, MINOR) |
| Divider uniformity | implicit (Auditor C) | 1/9 (11%) | NO (#7, MINOR) |
| No inline emphasis | 1/9 auditors | 1/9 (11%) | NO (#9, MINOR) |

The existing weaver (FINAL-VERDICT.md) actually reported 9 ranked issues, not 3. But the DRAFT-11 spec says TOP-3. The weaver exceeded its spec because the actual problem demanded it. This is a strong signal: TOP-3 is architecturally insufficient.

**The real compression is not 225-to-3 but CLUSTERS-to-FIX-INSTRUCTIONS.** The 225 findings collapse into ~9 distinct issue clusters. The question is how many clusters the builder needs to see, and in what form.

---

## 1. ENRICHED WEAVER OUTPUT FORMAT

### 1.1 Replace TOP-3 with THREE-TIER Issue Ranking

The weaver output MUST contain all issue clusters, not just the top 3. But the builder's attention is finite. Solution: three tiers with different builder instructions.

```markdown
## PA SYNTHESIS REPORT — Cycle N

### SCORES
- PA-05: [X.X/4] (DESIGNED: X, COHERENT: X, PROPORTIONATE: X, POLISHED: X)
- Tier 5: [X/8] ([COMPOSED/APPROACHING/STRUCTURED/VOCABULARY ONLY])
- Verdict: [SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE]

### QUESTION MATRIX (56 questions)
| ID | Auditor | Answer | Confidence | Cluster |
|----|---------|--------|------------|---------|
| PA-01 | A | YES | HIGH (9/9 agree) | -- |
| PA-02 | B | YES WITH NOTES | HIGH | -- |
| ... | ... | ... | ... | ... |
| PA-50 | C | NO | MEDIUM (5/9) | CLUSTER-3 |

### AGREEMENT HEATMAP
| Issue Cluster | 9/9 | 7-8 | 5-6 | 3-4 | 1-2 | Classification |
|---------------|-----|-----|-----|-----|-----|----------------|
| [Cluster name] | X | | | | | CRITICAL |
| [Cluster name] | | X | | | | CRITICAL |
| [Cluster name] | | | X | | | SIGNIFICANT |
| [Cluster name] | | | | X | | NOTABLE |
| [Cluster name] | | | | | X | LOGGED |

### TIER 1: FIX NOW (builder MUST address in this cycle)
Max 5 issues. Each with:
- Cluster name
- Agreement level (N/9 auditors)
- Representative auditor quote (exact words)
- Scroll position / element identifier
- Fix type: CSS-PATCH / HTML-EDIT / STRUCTURAL-REBUILD
- Estimated effort: [5/15/30/60 min]
- Expected PA-05 impact: [+0.1 / +0.2 / +0.3]

### TIER 2: FIX IF TIME (builder SHOULD address, won't block SHIP)
Unlimited issues. Same fields as Tier 1 but:
- Only appears in builder instructions if Tier 1 fixes take < 30 min
- Builder may choose which to address

### TIER 3: LOGGED FOR RETROSPECTIVE (builder does NOT see)
All remaining findings. Captured for:
- Post-run pipeline retrospective
- Future enrichment audit input
- Pattern detection across multiple builds

### COMPOSITIONAL CRITERIA (6 binary checks)
- Zero soul violations: [MET/FAILED + evidence]
- Zero void patterns (>120px stacked): [MET/FAILED + measurement]
- Metaphor STRUCTURAL: [MET/FAILED/N/A + evidence]
- Rhythm not metronomic: [MET/FAILED + evidence]
- Multi-coherence perceptible: [MET/FAILED + evidence]
- Scale coverage (3+ scales): [MET/FAILED + count]

### PROTECTED ELEMENTS (DO NOT REGRESS)
- [Element/section that scored well, with auditor praise quote]
- [...]

### DISAGREEMENTS
| Topic | Auditors FOR | Auditors AGAINST | Resolution | Confidence |
|-------|-------------|-----------------|------------|------------|
| [Topic] | A, B, D | C, F | [Resolution rationale] | [HIGH/MEDIUM/LOW] |
```

### 1.2 Key Design Decisions

**Why TOP-5 (Tier 1) instead of TOP-3:**
- Empirical evidence: the flagship remediation had 5 issues at BLOCKING or SIGNIFICANT severity. TOP-3 would have missed the table class mismatch and section gap excess.
- 5 is the maximum a builder can hold in working memory for a single fix cycle.
- If fewer than 5 issues exist at CRITICAL/SIGNIFICANT, Tier 1 contains fewer than 5.

**Why include the full question matrix:**
- The builder does NOT see it (goes to Tier 3 / retrospective).
- The weaver in Cycle 2 DOES see it (for regression detection).
- The orchestrator uses it for convergence tracking.
- Cost: ~56 rows x 5 columns = trivial token overhead vs. the information preserved.

**Why include the agreement heatmap:**
- Makes the weaver's prioritization AUDITABLE. If the weaver ranks a 3/9 issue above a 7/9 issue, the heatmap exposes this.
- Enables the orchestrator to override weaver judgment if agreement data contradicts ranking.

**Why PROTECTED ELEMENTS are mandatory:**
- Fix cycles introduce regressions. The builder must know what NOT to touch.
- The flagship remediation header was unanimously praised (8/9). If a fix cycle damages it, that is worse than the original issues.

---

## 2. AGREEMENT ANALYSIS PROTOCOL

### 2.1 Agreement Tiers

| Agreement | Classification | Builder Visibility | Action |
|-----------|---------------|-------------------|--------|
| 9/9 unanimity | CRITICAL | TIER 1 (always) | Fix in this cycle. No exceptions. |
| 7-8/9 strong | CRITICAL | TIER 1 (always) | Fix in this cycle. |
| 5-6/9 majority | SIGNIFICANT | TIER 1 (if <= 5 total Tier 1) or TIER 2 | Fix if time permits. |
| 3-4/9 split | NOTABLE | TIER 2 | Builder aware; may address. |
| 1-2/9 minority | LOGGED | TIER 3 | Retrospective only. Not sent to builder. |

### 2.2 Agreement Quality Adjustment

Raw agreement counts can mislead. Two adjustments:

**Adjustment 1: Auditor domain relevance weighting.**
If 3/9 auditors flag a typography issue, but those 3 include Auditor B (Readability+Typography) and Auditor D (Flow+Pacing), the finding has higher signal than if 3 random auditors flagged it. The weaver MUST note whether the flagging auditors include the domain-primary auditor.

Rule: If the domain-primary auditor flags an issue AND at least 2 others corroborate, treat as one tier higher than raw count suggests.

**Adjustment 2: Artifact detection.**
The flagship remediation showed 5/9 auditors flagging "blank screenshots" as a content visibility failure. Auditor I correctly identified it as a screenshot capture artifact. Without artifact detection, this 5/9 finding would have outranked the 4/12 table class mismatch.

Rule: If auditor findings conflict on whether something IS A PROBLEM vs. IS AN ARTIFACT, the weaver MUST resolve this before ranking. Resolution method:
1. Check programmatic gate data (did the gate runner confirm content renders?).
2. Check full-page screenshots at all viewports (does content appear?).
3. If confirmed artifact: EXCLUDE from ranking, note in DISAGREEMENTS section.
4. If ambiguous: FLAG for orchestrator with both interpretations.

### 2.3 Disagreement Handling Protocol

When auditors disagree, the weaver applies this decision tree:

```
DISAGREEMENT DETECTED
  |
  +-- Is there programmatic data that resolves it?
  |     YES -> Use programmatic data. Note in DISAGREEMENTS with "RESOLVED BY DATA."
  |     NO  -> Continue
  |
  +-- Is the domain-primary auditor on one side?
  |     YES -> Weight domain-primary auditor's view.
  |            Note in DISAGREEMENTS with "DOMAIN EXPERT PREVAILS."
  |     NO  -> Continue
  |
  +-- Is the disagreement about SEVERITY (both agree it's an issue, disagree on how bad)?
  |     YES -> Use the HIGHER severity. Err toward action.
  |            Note in DISAGREEMENTS with "HIGHER SEVERITY ADOPTED."
  |     NO  -> Continue
  |
  +-- Is the disagreement about WHETHER IT'S AN ISSUE (some say yes, some say no)?
        YES -> If >= 5/9 say yes: treat as issue.
               If < 5/9 say yes: log in TIER 2 with "CONTESTED" tag.
               Note in DISAGREEMENTS with rationale.
```

---

## 3. FIX CYCLE INFORMATION PROTOCOL

### 3.1 What the Builder Sees at Each Stage

**Cycle 1 (initial build -> first PA):**

Builder receives fix instructions containing:
1. **Gate failures** (structured, with specific CSS). Pasted from gate-results.json. Each failure includes: measured value, threshold, and CSS fix suggestion.
2. **TIER 1 issues** (max 5). Each with: auditor quote, scroll position, fix type classification, estimated effort.
3. **PROTECTED ELEMENTS list.** Builder must not regress these.
4. **Tier 5 gaps.** Which PA-60 through PA-67 scored NO, with auditor reasoning.

Builder does NOT receive:
- TIER 2 or TIER 3 issues (information overload prevention).
- Raw auditor reports (fresh-eyes contamination risk -- builder would start "auditing" instead of "building").
- The agreement heatmap (prevents builder from gaming agreement patterns).

**Cycle 2 (post-fix -> targeted PA):**

Builder receives fix instructions containing:
1. **Regression report** (which Cycle 1 fixes worked, which didn't, which introduced new issues).
2. **Remaining TIER 1 issues** (unfixed from Cycle 1 + any NEW Tier 1 from Cycle 2).
3. **TIER 2 promotion** (if all Tier 1 issues resolved, promote top 3 Tier 2 to builder).
4. **Updated PROTECTED ELEMENTS** (now includes successfully fixed elements from Cycle 1).

**Cycle 3 (final attempt):**

Builder receives:
1. **Convergence assessment** (are we getting better or oscillating?).
2. **Remaining issues ranked by PA-05 impact** (pure ROI ordering).
3. **Hard stop warning** ("This is the final cycle. Focus on the single highest-impact fix.").

### 3.2 Why the Builder Should NOT See Raw Auditor Reports

Three reasons:
1. **Fresh-eyes contamination.** Auditor language uses perceptual vocabulary ("anxious," "under-articulated," "coasting"). Builder needs actionable vocabulary ("selector mismatch at .zone-sN .page-container," "increase background delta by 13 RGB points"). Mixing registers causes confusion.
2. **Attention diffusion.** 9 reports x 20-30 findings = 180-270 data points. A builder reading all of them will fix nothing well. TOP-5 focused issues with clear fix-type classifications produce better outcomes.
3. **Auditor score gaming.** If the builder reads "Auditor C gave code blocks 4/5," they might over-invest in code blocks to preserve that score, at the expense of fixing the 2/5 list treatment.

### 3.3 Exception: Builder MAY See Raw Reports in Cycle 3

If Cycle 3 is reached, the orchestrator MAY provide raw reports to the builder with this framing:

```
This is the final fix cycle. Below are all 9 auditor reports for reference.
Your task: read them, identify the SINGLE highest-impact fix remaining,
and execute it. Do not attempt to fix everything.
```

Rationale: At Cycle 3, the builder has already seen 2 rounds of filtered instructions. The risk of attention diffusion is lower because the builder has context. The benefit of full information outweighs the risk.

---

## 4. CROSS-CYCLE TRACKING FORMAT

### 4.1 Per-Question Delta Matrix

The weaver in Cycle N receives the weaver report from Cycle N-1. It produces a delta matrix:

```markdown
## CROSS-CYCLE DELTA (Cycle N-1 -> Cycle N)

### QUESTION-LEVEL CHANGES
| ID | Cycle N-1 | Cycle N | Delta | Interpretation |
|----|-----------|---------|-------|----------------|
| PA-01 | YES | YES | STABLE | No regression |
| PA-05 | 2.5/4 | 2.8/4 | +0.3 | IMPROVEMENT |
| PA-09 | NO (3 voids) | YES WITH NOTES | IMPROVED | Voids reduced |
| PA-17 | YES | NO | REGRESSED | Rhythm broke |
| PA-50 | NO | NO | STALLED | Void still present |

### CLUSTER-LEVEL CHANGES
| Cluster | Cycle N-1 Tier | Cycle N Tier | Status |
|---------|---------------|-------------|--------|
| Structural borders | TIER 1 (CRITICAL) | TIER 3 (RESOLVED) | FIXED |
| Typography uniformity | TIER 1 (CRITICAL) | TIER 1 (CRITICAL) | UNFIXED |
| Background deltas | TIER 2 (SIGNIFICANT) | TIER 3 (RESOLVED) | FIXED |
| Section gaps | TIER 2 (NOTABLE) | TIER 1 (SIGNIFICANT) | WORSENED |

### CONVERGENCE ASSESSMENT
- Issues FIXED this cycle: N
- Issues UNFIXED (stalled): N
- Issues WORSENED (regressed): N
- New issues INTRODUCED: N
- Convergence verdict: CONVERGING / STALLED / OSCILLATING / DIVERGING

### CONVERGENCE DECISION RULES
| Pattern | Verdict | Action |
|---------|---------|--------|
| Fixed > Unfixed, 0 Worsened | CONVERGING | Continue fix cycles |
| Fixed = 0, Unfixed > 0 | STALLED | Change fix approach (Tier 1 issues may be structural, not CSS) |
| Worsened > 0 | OSCILLATING | Builder is thrashing. Narrow to SINGLE fix per cycle. |
| New > Fixed | DIVERGING | ESCALATE. Builder is making things worse. |
```

### 4.2 Regression Detection Protocol

After each fix cycle, the weaver explicitly checks:

1. **Did the targeted fix work?** Compare the specific question(s) associated with each Tier 1 issue.
2. **Did fixing A break B?** Scan all questions for any that went from YES to NO or from higher to lower score.
3. **Is the overall trajectory positive?** PA-05 should increase or hold, never decrease.

If regression detected:
```
REGRESSION ALERT: Fixing [Cluster X] caused [Question Y] to regress.
  Before fix: [state]
  After fix: [state]
  Likely cause: [CSS specificity conflict / HTML structural change / scope creep]
  Recommendation: REVERT [specific change] and re-apply with [narrower scope].
```

---

## 5. BELOW-THE-FOLD CAPTURE

### 5.1 The Tier 3 Archive

Every finding that does not make Tier 1 or Tier 2 is captured in the Tier 3 section of the weaver report. This section is:
- Written to the synthesis file (not a separate file).
- NOT sent to the builder.
- Read by the orchestrator for post-run retrospective.
- Available for future pipeline enrichment audits.

### 5.2 Structural vs. Surface Classification

The weaver MUST classify every finding as one of:

| Fix Type | Definition | Example | Who Fixes | When |
|----------|-----------|---------|-----------|------|
| CSS-PATCH | Change CSS values only. HTML unchanged. | "Increase S5 background from #FAF8F5 to #F5EDE2" | Builder, this cycle | Cycle 1-3 |
| HTML-EDIT | Change HTML structure. CSS may also change. | "Add .data-table class to 9 table elements" | Builder, this cycle | Cycle 1-3 |
| STRUCTURAL-REBUILD | Requires rethinking page section architecture. | "S4-S8 need distinct visual identities, not just bg shifts" | Builder, next build | Pipeline v3 |
| PIPELINE-FIX | Issue is in the prompt/spec, not the artifact. | "Weaver TOP-3 is insufficient; should be TOP-5" | Pipeline maintainer | Pipeline v3 |

**Rule: STRUCTURAL-REBUILD findings NEVER go to Tier 1.** They cannot be fixed in a CSS fix cycle. Sending them to the builder wastes a fix slot. They go to Tier 3 with a "STRUCTURAL" tag and are surfaced in the post-run retrospective.

**Rule: PIPELINE-FIX findings NEVER go to builder.** They go to Tier 3 with a "PIPELINE" tag.

### 5.3 The "Issue #4 Problem" Solution

The problem statement identifies that issues 4-N are invisible to the builder. The solution:

1. **Tier 1 expands to max 5** (not 3). This captures issues 4-5.
2. **Tier 2 is VISIBLE to the builder in Cycle 2** if Tier 1 is resolved. Issues 6-N surface as Tier 1 resolves.
3. **Tier 2 promotion rule:** After each fix cycle, if all Tier 1 issues are resolved, promote the top 3 Tier 2 issues to Tier 1 in the next cycle's fix instructions.
4. **Hard cap:** Builder never sees more than 5 issues at once. Even with promotion, the next cycle's Tier 1 is capped at 5.

This means over 3 cycles, the builder can potentially address:
- Cycle 1: 5 Tier 1 issues
- Cycle 2: 5 issues (mix of unfixed Tier 1 + promoted Tier 2)
- Cycle 3: 1 focused issue (final cycle narrows to single highest-impact)

Maximum addressable: 11 distinct issues across 3 cycles. Compared to 3 x 3 = 9 in the current TOP-3 design, and with better prioritization.

### 5.4 Post-Run Retrospective Packet

After the final cycle (pass or escalate), the orchestrator generates a retrospective packet:

```markdown
## POST-RUN RETROSPECTIVE

### Build ID: [output-dir]
### Final PA-05: [X.X/4]
### Cycles used: [N/3]

### ALL FINDINGS (complete inventory)
| # | Cluster | Agreement | Final Tier | Cycle Resolved | Fix Type |
|---|---------|-----------|-----------|----------------|----------|
| 1 | [name] | 8/9 | TIER 1 | Cycle 1 | CSS-PATCH |
| 2 | [name] | 6/9 | TIER 1 | Cycle 2 | HTML-EDIT |
| 3 | [name] | 4/9 | TIER 2 | UNRESOLVED | STRUCTURAL-REBUILD |
| ... | ... | ... | ... | ... | ... |

### UNRESOLVED FINDINGS (for pipeline v3)
[Full text of every finding that was not addressed, with fix type classification]

### PIPELINE FINDINGS (for prompt enrichment)
[Full text of every PIPELINE-FIX finding]

### CONVERGENCE HISTORY
| Metric | Cycle 1 | Cycle 2 | Cycle 3 |
|--------|---------|---------|---------|
| PA-05 | 2.5 | 2.8 | 3.1 |
| Tier 1 issues | 5 | 3 | 1 |
| Regressions | 0 | 1 | 0 |
```

---

## 6. MASTER PROMPT ENRICHMENTS

### 6.1 Changes to DRAFT-11 Section 5.3 (Weaver Spawn)

Replace the current weaver prompt (lines 377-409) with:

```markdown
### 5.3 Weaver Spawn (1 agent, AFTER all 9 auditors complete)

```
You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/.

You are performing INFORMATION TRIAGE, not summarization. Your job is to
preserve the maximum actionable information from 9 independent reports
while producing a structured output the builder and orchestrator can use.

Produce a synthesis with ALL of the following sections:

1. PA-05 SCORE: Rate each sub-criterion 0-4:
   - DESIGNED (intentionally crafted?)
   - COHERENT (elements work together?)
   - PROPORTIONATE (visual weight distributed well?)
   - POLISHED (details refined?)
   Average to 0.5 precision = PA-05 score.

2. TIER 5 SCORE: Count YES answers from PA-60 through PA-67.
   Apply threshold: 7-8 COMPOSED / 5-6 APPROACHING / 3-4 STRUCTURED / 0-2 VOCABULARY ONLY.

3. QUESTION MATRIX: For ALL 56 questions, record:
   | ID | Auditor | Answer (YES/NO/PARTIAL) | Confidence | Cluster Tag |
   Confidence = how many auditors corroborate (if multiple cover same question).
   Cluster Tag = short label grouping related findings.

4. AGREEMENT HEATMAP: Group all findings into issue clusters. For each:
   - Cluster name (descriptive, 3-5 words)
   - Agreement count (N/9 auditors flagging)
   - Domain-primary auditor flagged? (YES/NO)
   - Classification: CRITICAL (7+/9) / SIGNIFICANT (5-6/9) / NOTABLE (3-4/9) / LOGGED (1-2/9)
   If domain-primary auditor flags AND 2+ others corroborate, promote one tier.

5. TIER 1 ISSUES (max 5, builder MUST fix):
   Only CRITICAL and SIGNIFICANT clusters. Each must include:
   - Cluster name
   - Agreement: N/9
   - Representative quote (exact auditor words, with auditor letter)
   - Scroll position or element identifier
   - Fix type: CSS-PATCH / HTML-EDIT / STRUCTURAL-REBUILD
   - Estimated effort: 5 / 15 / 30 / 60 min
   - Expected PA-05 impact: +0.1 / +0.2 / +0.3
   STRUCTURAL-REBUILD items go to TIER 3 instead, even if CRITICAL.

6. TIER 2 ISSUES (unlimited, builder sees only if Tier 1 clears):
   NOTABLE clusters + any SIGNIFICANT clusters that overflow Tier 1.
   Same fields as Tier 1.

7. TIER 3 ISSUES (logged, builder does NOT see):
   LOGGED clusters + all STRUCTURAL-REBUILD items + all PIPELINE-FIX items.
   Brief description only. Tagged for retrospective.

8. PROTECTED ELEMENTS (builder MUST NOT regress):
   Elements praised by 3+ auditors. Include auditor quote.

9. DISAGREEMENTS:
   Any topic where auditors disagree. Resolution method and rationale.
   Check for screenshot artifacts vs genuine failures.

10. COMPOSITIONAL CRITERIA (6 binary checks):
    - Zero soul violations: [MET/FAILED + evidence]
    - Zero void patterns (>120px stacked): [MET/FAILED + measurement]
    - Metaphor STRUCTURAL: [MET/FAILED/N/A + evidence]
    - Rhythm not metronomic: [MET/FAILED + evidence]
    - Multi-coherence perceptible: [MET/FAILED + evidence]
    - Scale coverage (3+ scales): [MET/FAILED + count]

11. VERDICT:
    - SHIP: PA-05 >= 3.5 AND Tier 5 >= 6/8 AND all criteria MET
    - SHIP WITH RESERVATION: PA-05 >= 3.5 AND Tier 5 4-5/8
    - FIX: PA-05 3.0-3.4, or criteria FAILED but fixable
    - REBUILD: PA-05 < 3.0
    - ESCALATE: 3 fix cycles exhausted

Write synthesis to: [output-dir]/_pa/_pa-report.md
```
```

### 6.2 Changes to DRAFT-11 Section 6.1 (Fix Instructions)

Replace the current fix instruction template with:

```markdown
### 6.1 Build Fix Instructions

Compose fix instructions at `[output-dir]/_fixes/fix-instructions-cycle-N.md`:

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Gate Failures (structured, with specific CSS)
[Paste gate-results.json entries that FAILED, each with measured value, threshold, and CSS fix]

### TIER 1 ISSUES (max 5, from weaver report)
[Copy TIER 1 section from _pa-report.md verbatim]

### Tier 5 Gaps (which PA-60-67 scored NO)
- PA-6N: NO -- "[auditor reason]"
  IMPLICATION: [missing compositional property]

### PROTECTED ELEMENTS (DO NOT REGRESS)
[Copy PROTECTED ELEMENTS section from _pa-report.md verbatim]
```

For Cycle 2+, ADD these sections:

```markdown
### CROSS-CYCLE DELTA
[Weaver produces delta matrix comparing Cycle N-1 to Cycle N]
- Issues FIXED: [list]
- Issues UNFIXED: [list]
- Issues REGRESSED: [list with regression alert]
- CONVERGENCE: [CONVERGING / STALLED / OSCILLATING / DIVERGING]

### TIER 2 PROMOTIONS (only if all Cycle N-1 Tier 1 issues resolved)
[Top 3 Tier 2 issues promoted to Tier 1]
```

For Cycle 3, ADD:

```markdown
### FINAL CYCLE DIRECTIVE
This is the final fix cycle. Focus on the SINGLE highest-impact remaining issue.
Do NOT attempt to fix everything. The complete auditor reports are provided below
for reference only.

[Append full _pa-report.md]
```
```

### 6.3 Changes to SKILL.md (perceptual-auditing)

Add after the current "Weaver-Synthesizer" entry in Mode 4 team structure (line ~497):

```markdown
**Weaver Output Requirements (Mode 4):**

The weaver produces an 11-section synthesis report (not a 5-item summary).
Required sections: SCORES, QUESTION MATRIX, AGREEMENT HEATMAP, TIER 1 (max 5),
TIER 2 (unlimited), TIER 3 (logged), PROTECTED ELEMENTS, DISAGREEMENTS,
COMPOSITIONAL CRITERIA, VERDICT, and (for Cycle 2+) CROSS-CYCLE DELTA.

The weaver is performing INFORMATION TRIAGE, not summarization.
Every finding from every auditor must appear in exactly one tier.
No finding may be silently dropped.

Agreement classification thresholds:
- 7+/9 = CRITICAL (Tier 1)
- 5-6/9 = SIGNIFICANT (Tier 1 if room, else Tier 2)
- 3-4/9 = NOTABLE (Tier 2)
- 1-2/9 = LOGGED (Tier 3)

Domain-primary auditor boost: If the domain expert flags + 2 others, promote one tier.
STRUCTURAL-REBUILD findings: Always Tier 3, even if CRITICAL agreement.
PROTECTED ELEMENTS: Any element praised by 3+ auditors. Builder must not regress.
```

### 6.4 Changes to Section 6.4 (Cycle Limits)

Replace the current cycle table with:

```markdown
### 6.4 Cycle Structure

| Cycle | PA Auditors | Builder Sees | Weaver Focus |
|-------|-------------|-------------|-------------|
| 1 (initial) | 9 Opus, all 56 Qs | Tier 1 (max 5) + gates + protected | Full synthesis |
| 2 (targeted) | 2 Opus (A + C), focused + Tier 5 | Delta + remaining Tier 1 + promoted Tier 2 | Regression detection |
| 3 (final) | 2 Opus (A + C), focused + Tier 5 | Single highest-impact + full report | Convergence verdict |

After Cycle 3: ESCALATE to user with complete retrospective packet.

### Tier 2 Promotion Rule
After each cycle, if ALL Tier 1 issues are resolved:
- Promote top 3 Tier 2 issues to Tier 1 for next cycle
- Never exceed 5 total Tier 1 per cycle

### Convergence Gate (Cycle 2+)
If convergence = OSCILLATING or DIVERGING after Cycle 2:
- Do NOT run Cycle 3 automatically
- ESCALATE with convergence data
- User decides: one more cycle / accept current state / manual intervention
```

---

## 7. IMPLEMENTATION CHECKLIST

| # | Change | File | Priority |
|---|--------|------|----------|
| 1 | Replace weaver prompt (TOP-3 -> 11-section synthesis) | `~/.claude/skills/build-page/SKILL.md` | BLOCKING |
| 2 | Replace fix instruction template | `~/.claude/skills/build-page/SKILL.md` | BLOCKING |
| 3 | Add weaver output requirements to PA skill | `~/.claude/skills/perceptual-auditing/SKILL.md` | BLOCKING |
| 4 | Replace cycle limits table with cycle structure | `~/.claude/skills/build-page/SKILL.md` | SIGNIFICANT |
| 5 | Add convergence gate | `~/.claude/skills/build-page/SKILL.md` | SIGNIFICANT |
| 6 | Add Tier 2 promotion rule | `~/.claude/skills/build-page/SKILL.md` | SIGNIFICANT |
| 7 | Add retrospective packet template | `~/.claude/skills/build-page/SKILL.md` | MINOR |
| 8 | Add fix-type classification to auditor prompts | `~/.claude/skills/perceptual-auditing/SKILL.md` | MINOR |

### Token Budget Impact

Current weaver output: ~200-400 lines (TOP-3 + scores + verdict).
New weaver output: ~300-500 lines (11 sections including question matrix).
Delta: +100-150 lines (~25-30% increase).

This is acceptable because:
- The question matrix (56 rows) is the largest addition but is essential for cross-cycle tracking.
- Tier 3 findings are brief (one line each) and do not add substantial length.
- The agreement heatmap (~10 rows) adds trivial overhead.
- The entire weaver report is read by ONE agent (orchestrator) that has ample context budget.

### Risk Assessment

| Risk | Mitigation |
|------|------------|
| Weaver context overload (9 reports + new format) | Weaver is Opus with ~200k context. 9 reports at ~200 lines each = ~1,800 lines input. Well within budget. |
| Builder fixation on Tier 1 count ("only 5 issues, I'm almost done") | Frame Tier 1 as "the issues that matter THIS cycle," not "all issues." |
| Tier 2 promotion creating scope creep | Hard cap at 5 per cycle. Promotion only if ALL Tier 1 resolved. |
| Question matrix becoming stale across cycles | Cycle 2-3 use 2 auditors (A + C), not 9. Matrix updates only for questions those 2 cover. Other questions carry forward. |

---

## 8. WORKED EXAMPLE: Flagship Remediation Under New Protocol

Applying this protocol to the actual flagship remediation PA:

**TIER 1 (5 issues):**
1. Zero structural borders (8/12, CRITICAL, CSS-PATCH, 15 min, +0.2)
2. Typography uniformity S4-S12 (6/9, CRITICAL, CSS-PATCH, 15 min, +0.2)
3. Imperceptible bg deltas S4-S5, S9-S10 (6/12, SIGNIFICANT, CSS-PATCH, 5 min, +0.1)
4. Table CSS class mismatch (4/12, NOTABLE -> promoted because domain expert Auditor C flagged, HTML-EDIT, 10 min, +0.1)
5. Section gap S4-S5 at 175px (4/12, NOTABLE, CSS-PATCH, 5 min, +0.05)

**TIER 2 (3 issues):**
6. Callout bg similarity (3/9, NOTABLE, CSS-PATCH)
7. Divider visual uniformity (1/9, LOGGED -> but legitimate design concern)
8. h2 size inconsistency (implicit, LOGGED)

**TIER 3 (2 issues):**
9. No inline emphasis (1/9, LOGGED, HTML-EDIT)
10. Screenshot blank artifact (5/9, ARTIFACT -- excluded from ranking)

**PROTECTED ELEMENTS:**
- Header (8/9 praised): "A premium literary magazine opening" (Auditor H)
- Section indicators (5/5 score from Auditor C): "The gold standard of metadata styling"
- Dark code blocks (4/5 from Auditor C): "Most visually striking component"
- Drop cap (mentioned by Auditors A, D): "Nice editorial touch"

**Key difference from actual run:** Table class mismatch (Issue #4) and section gap (Issue #5) would have been in the builder's first fix instruction set. Under the old TOP-3 protocol, they would have been invisible until Cycle 2 at earliest.

**Projected impact:** With 5 issues addressed in Cycle 1 instead of 3, the builder would have had 50 minutes of work (vs. 45 min for TOP-3). But the table class mismatch alone explains hover state failures across 9 tables -- fixing it with the borders and typography in Cycle 1 would likely push PA-05 from 2.5 directly to 3.0-3.2, potentially eliminating the need for Cycle 2 entirely.

---

**END OF ANALYSIS**

**Document statistics:**
- Total lines: ~645
- Sections: 8 (problem statement + 5 protocol designs + enrichments + worked example)
- Concrete format templates: 5
- Master prompt edit locations: 4
- Implementation items: 8
