# Ceiling Master Execution Prompt -- Fresh-Eyes Adversarial Validation Report

**Date:** 2026-02-16
**Validator:** Fresh-eyes Opus agent (zero assembly context)
**Prompt version:** 1.0 (1,004 lines)
**Sources cross-validated:** CEILING-PREPARATION-BRIEF.md, CEILING-MASTER-CHECKLIST.md (first 300 lines), prohibitions.md, tokens.css, 09-MASTER-RETROSPECTIVE.md (first 300 lines)

---

## VERDICT SUMMARY

**Overall assessment:** STRONG with 3 BLOCKING issues, 5 SIGNIFICANT issues, and 8 MINOR issues.

The prompt is well-structured, mostly self-contained, and demonstrates deep internalization of Middle-tier retrospective lessons. The CONVICTION section (Section 0) is excellent and sets the right tone. The communication protocol, checkpoint architecture, and isolation matrix are thorough. However, three issues must be fixed before production use. Several other issues should be addressed to avoid predictable failure modes.

---

## SECTION 1: COMPLETENESS

### Structure Verification

| Section | Present? | Lines | Assessment |
|---------|----------|-------|------------|
| Section 0: Conviction | YES | 10-33 | EXCELLENT -- sets philosophical frame |
| Section 1: Mission and Context | YES | 36-93 | Complete |
| Section 2: Team Topology | YES | 95-237 | Thorough |
| Section 3: Communication Protocol | YES | 240-296 | Strong |
| Section 4: Build Pipeline | YES | 299-456 | Comprehensive |
| Section 5: Mechanism Guidance | YES | 458-495 | Adequate |
| Section 6: Soul and Identity | YES | 498-572 | Has errors (see below) |
| Section 7: Quality Assurance | YES | 575-642 | Strong |
| Section 8: Success Criteria | YES | 645-682 | Mostly complete |
| Section 9: Anti-Patterns | YES | 685-708 | Good |
| Section 10: Checkpoint Architecture | YES | 711-761 | Well-defined |
| Section 11: Per-Agent Prompt Guidance | YES | 764-840 | Comprehensive |
| Appendix A: Quick Reference | YES | 843-923 | Good summary |
| Appendix B: Team-Lead Checklist | YES | 927-982 | Actionable |
| Appendix C: File Manifest | YES | 986-999 | Complete |

All 12 sections (0-11) plus 3 appendices are present. No sections are suspiciously thin. Section 5 (Mechanism Guidance) at ~37 lines is the shortest substantive section, but it delegates to the catalog file correctly.

---

## SECTION 2: CORRECTNESS -- BLOCKING ISSUES

### BLOCKING-1: Mechanism Category Assignments Are WRONG

**Location:** Section 4.4 (line 354), the per-category minimums table.

**The prompt states:**
```
| Component (C) | #2 2-Zone DNA, #9 Color Encoding, #10 Border-Left Signal, #16 Drop Cap, #17 Code Block | 1+ |
| Depth/Emphasis (D) | #3 Solid Offset, #7 Zone Background | 1+ |
```

**The actual mechanism-catalog.md states (lines 56-62):**
```
| Component (C) | #2, #9, #10, #17 | (4 mechanisms)
| Depth/Emphasis (D) | #3, #7, #16 | (3 mechanisms)
```

**The error:** #16 Drop Cap is categorized as DEPTH/EMPHASIS in the catalog (confirmed by its section heading: `### 16. Drop Cap (Editorial Opening) [DEPTH/EMPHASIS]`). The prompt incorrectly moves #16 to Component (C).

**Why this matters:** This is a BINARY RULE that agents will use to verify per-category compliance. If the planner deploys Drop Cap (#16) thinking it satisfies the Component (C) requirement, and deploys no other Depth/Emphasis mechanism beyond #3 and #7, the Depth/Emphasis category may still technically pass (since #3 or #7 alone satisfies D:1+). However, the misclassification creates confusion about what mechanisms are available in each category, and a planner trusting this table could make incorrect selection decisions. The Component category appears to have 5 mechanisms when it has 4, and Depth/Emphasis appears to have 2 when it has 3 -- this narrows the planner's perceived options for Depth/Emphasis.

**Fix:** Move #16 Drop Cap from Component (C) to Depth/Emphasis (D).

---

### BLOCKING-2: Soul Compliance "7/7" Misrepresents the Actual Prohibitions

**Location:** Section 6.1 (lines 500-517), Appendix A (lines 845-852), and multiple references throughout.

**The prompt's "7/7 soul compliance" list:**
1. border-radius: 0
2. box-shadow: none
3. No drop-shadow filter
4. No semi-transparent backgrounds
5. No gradients
6. No pure black/white
7. h3 always italic

**Problem A -- Missing absolute prohibition:** prohibitions.md has 8 ABSOLUTE prohibitions (#1-#8). The prompt's "7/7 soul compliance" drops prohibition #7: "NEVER Use Instrument Serif for Body Text." This is an ABSOLUTE prohibition with ZERO exceptions. The prompt does mention this in Section 6.3 under "Typography Trinity" (line 514: "Instrument Serif ONLY for display headings -- NEVER for body text"), but it is NOT part of the "7/7" binary check. A builder running the soul compliance check could use Instrument Serif for body text and still report "7/7 PASS."

**Problem B -- Category confusion:** The prompt's item #7 ("h3 always italic") corresponds to prohibition #17 in prohibitions.md, which is classified as a CONDITIONAL prohibition, NOT an absolute one. While prohibition #17 has "NONE documented" for exceptions, it is architecturally in the CONDITIONAL section. Including a conditional prohibition in the "soul" check while excluding an actual absolute prohibition (#7 Instrument Serif) is a classification error.

**Problem C -- prohibition #8 (redundant reinforcement of #1) is reasonably omitted** since it overlaps with border-radius: 0. This is acceptable.

**Fix:** Change to "8/8 soul compliance":
1. border-radius: 0
2. box-shadow: none
3. No drop-shadow filter
4. No semi-transparent backgrounds
5. No gradients
6. No pure black/white
7. Instrument Serif NEVER for body text (display headings only)
8. h3 always italic

Alternatively, keep 7/7 but replace the current #7 with the Instrument Serif prohibition (which is ABSOLUTE) and move h3-italic to a separate binary check. The critical fix is: Instrument Serif body text prohibition MUST be in the soul compliance check.

---

### BLOCKING-3: Inter-Agent Messaging Success Criterion Omitted

**Location:** Section 8.1 (lines 648-661).

**The preparation brief explicitly states (line 437):**
```
| Inter-agent messaging | >= 5 substantive messages | checklist-architect B-01 |
```

**The checklist (B-01) states:**
```
Binary check: Message count >= 5 (not zero like Middle-tier)
```

**The preparation brief also specifies a risk mitigation (line 448):**
```
| Agents don't actually message | Team-lead checks message count at Phase 5 completion; if zero, prompts agents |
```

**The prompt:** The success criteria table (Section 8.1) does NOT include ">= 5 substantive messages" as a success criterion. The anti-spam table (Section 3.4) specifies message MAXIMUMS (e.g., builder: 5, PA: 0) but no MINIMUMS. The "Expected total: 10-15 messages" on line 295 is descriptive, not a threshold.

**Why this matters:** The ENTIRE point of Finding 9 in the master retrospective is that zero messaging caused quality degradation. The preparation brief identifies this as "THE most likely execution gap" (#1 in checklist top-3). Without a minimum message threshold in the success criteria, the experiment can achieve "SUCCESS" with zero messages -- exactly replicating the Middle-tier failure mode.

**Fix:** Add to Section 8.1 success criteria table:
```
| Inter-agent messaging | >= 5 substantive messages | HIGH |
```

Add to Appendix B (team-lead checklist), after step 11 (WAIT for ceiling-page.html):
```
[ ] 11.5. Check builder message count. If zero, send: "Did you encounter any ambiguities? Use SendMessage if anything in the plan needs clarification."
```

---

## SECTION 3: CORRECTNESS -- SIGNIFICANT ISSUES

### SIGNIFICANT-1: Metaphor-Agent Category Restriction Is Inconsistent

**Location:** Section 2.2 (line 115) vs Section 4.4 (line 354).

The metaphor-agent's reads are specified as: "mechanism CATEGORY NAMES ONLY (S/H/C/D/N -- no mechanism details)."

But the per-category minimums table in Section 4.4 lists SPECIFIC mechanism numbers and names within each category (e.g., "S: #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid"). If the planner receives this table, the planner sees mechanism names. If the metaphor-agent sees it (which it should not), isolation is violated.

The table is in Section 4.4 which is for the PLANNER, not the metaphor-agent. But the prompt does not make this separation crystal clear. A team-lead could accidentally include this table in the metaphor-agent's context.

**Fix:** Add explicit note in Section 4.4: "This table is for the PLANNER only. The metaphor-agent sees only the 5 category names (S/H/C/D/N), NOT the mechanism numbers or names listed here."

---

### SIGNIFICANT-2: Token Count "65 tokens" Does Not Match tokens.css

**Location:** Section 1.3 (line 81) says "65 design tokens."

Counting the tokens in tokens.css (:root block, lines 18-151), I count approximately 62-65 custom properties depending on how you count aliases. The number is close but not independently verifiable from the prompt alone. If the token count is used as a compliance denominator, a miscount creates measurement error.

This is a minor factual issue. The token compliance formula (var() / (var() + raw) >= 0.80) does not depend on the total token count. However, stating "65 design tokens" creates a false precision anchor.

**Fix:** Either verify the exact count and state it, or change to "~65 design tokens" to avoid false precision.

---

### SIGNIFICANT-3: Planner "MAY" See Tokens but Builder "MUST" -- Inconsistency

**Location:** Section 11.1 Isolation Matrix (line 772).

The planner is marked "MAY" for Tokens. But the planner is responsible for creating "Builder Blocks (pre-baked CSS)" per Section 4.4 (line 126). How can the planner write pre-baked CSS without access to the token definitions? The pre-baked CSS blocks should use var() references, which requires knowing what tokens exist.

**Fix:** Change planner's Tokens column from "MAY" to "MUST" in the isolation matrix.

---

### SIGNIFICANT-4: CP-2 Mechanism Count Range Is "11-15" but Tier Table Says "12-15"

**Location:** Section 10 CP-2 (line 730) says "Mechanism count in 11-15 zone (advisory)." Section 1.1 tier table (line 45) says "Mechanisms: 12-15 (natural landing, NOT a target)."

This is a minor inconsistency but could cause confusion. The CP-2 check uses a wider range (11-15) than the tier definition (12-15).

**Fix:** Align the ranges. If 11-15 is the advisory check and 12-15 is the expected landing, state both explicitly: "Mechanism count in 12-15 expected range, 11 acceptable as advisory lower bound."

---

### SIGNIFICANT-5: No Font Loading Strategy

**Location:** Throughout the prompt, typography is specified (Instrument Serif, Inter, JetBrains Mono) but there is no instruction for how these fonts should be loaded. A fresh Claude instance building the HTML page needs to know: Are these Google Fonts? System fonts? Self-hosted? What is the `@import` or `<link>` tag?

Without this, the builder will guess, potentially loading wrong fonts or failing to load them at all. The PA agents evaluating the page via Playwright will see fallback fonts if loading fails, producing invalid PA results.

**Fix:** Add to Section 4.7 (or Section 6.3) a specific font loading instruction, e.g.:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or specify the exact source. The builder must not have to guess this.

---

## SECTION 4: SOUL FIDELITY

### Are Prohibitions Correctly Stated?

**BIG 3 Present:** YES.
1. border-radius: 0 (line 505) -- CORRECT
2. box-shadow: none (line 506) -- CORRECT
3. filter: drop-shadow() FORBIDDEN (line 507) -- CORRECT

**Additional Absolutes:**
4. opacity: 1 (line 510) -- CORRECT
5. No gradients (line 511) -- CORRECT
6. No pure black/white (line 512) -- CORRECT, uses #1A1A1A and #FEF9F5
7. **Instrument Serif body text prohibition -- MISSING from soul 7/7** (see BLOCKING-2)
8. Prohibition #8 (decorative rounded corners) -- reasonably subsumed under #1

**Conditional Prohibitions:**
- #9 (no 2px borders, OD-004 exception) -- line 519-520 -- CORRECT
- #10 (no accent borders < 4px, AD-F-014 exception) -- line 521 -- CORRECT
- #13 (no vertical table borders) -- line 522 -- CORRECT
- #17 (h3 must be italic) -- line 523 -- CORRECT
- #18 (no same-density stacking, crescendo exception) -- line 524 -- CORRECT

**Assessment:** Conditional prohibitions are correctly stated with documented exceptions. Only #9, #10, #13, #17, and #18 are listed -- the other 7 conditional prohibitions (#11, #12, #14, #15, #16, #19, #20) are omitted. This is acceptable since the listed ones are the most likely to be relevant to a Ceiling build, and prohibitions.md is referenced by path. However, the meta-prohibitions (#19: no justification without research, #20: no patterns without tension) are particularly relevant to the Ceiling metaphor pipeline and could be explicitly stated.

---

## SECTION 5: TEAM TOPOLOGY

**TeamCreate specified?** Not explicitly as a single command, but the agent roster (Section 2.2) and task creation sequence (Section 2.3) provide equivalent information. A team-lead would know what to spawn and when.

**Agent roles clear?** YES. Each agent has: Role, Reads, Writes, Tools, MUST NOT see, and Key instruction. This is thorough.

**Blocking dependencies logical?** YES. The dependency chain (metaphor -> planner -> builder -> 5 auditors in parallel -> verdict) is correct and well-documented in both the task sequence (Section 2.3) and wave architecture (Section 2.4).

**Agent count:** Prompt says 12 (1 team-lead + 11 workers). Preparation brief says 10 (1 team-lead + 9 workers). The difference is the HTTP-SERVER agent and the addition of a second PA agent (PA-2) that the brief listed but the brief's total didn't include the HTTP server. This is acceptable -- the prompt adds operational roles that the brief's strategic count omitted.

**MINOR issue:** The metaphor-agent is listed as writing `01-metaphor-derivation.md` but the planner needs to read this. The dependency is stated in the task sequence but the planner's "Reads" field (line 123) references it correctly.

---

## SECTION 6: COMMUNICATION PROTOCOL

**SendMessage specified?** YES (Section 3). The four message types (BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG) are well-defined with urgency levels, examples, response expectations, and per-agent maximums.

**Isolation exceptions NON-NEGOTIABLE?** YES (Section 3.3, line 274-280). Novelty evaluator and PA-1/PA-2 are explicitly protected. Team-lead blocking of messages to these agents is specified.

**Anti-spam rules present?** YES (Section 3.4). Per-agent message caps are defined.

**MINOR-1:** The anti-spam table says "novelty-evaluator: 0 (before blind), 1 (after)." But the prompt never specifies what the novelty evaluator messages AFTER blind assessment. Is it a confirmation to team-lead? This should be clarified.

---

## SECTION 7: SKILL INVOCATION

**Tension-composition skill path:** `~/.claude/skills/tension-composition/SKILL.md` -- appears at lines 79, 119, 304. CORRECT.

**Perceptual-auditing skill path:** `~/.claude/skills/perceptual-auditing/SKILL.md` -- appears at lines 79, 154, 579. CORRECT.

**Both paths are correct and consistent across all references.**

---

## SECTION 8: ADVERSARIAL CHALLENGES

### 8.1: Can an agent comply with the letter but violate the spirit?

**YES -- token compliance gaming.** The formula `var() / (var() + raw) >= 0.80` can be gamed by creating unnecessary var() references (e.g., `--my-custom-1: 1px; border: var(--my-custom-1)` for values that should use existing tokens). The builder could inflate the numerator with ad-hoc custom properties. The prompt does not require that var() references point to tokens.css variables specifically.

**Mitigation suggestion:** Specify that token compliance measures use of EXISTING tokens from tokens.css, not custom properties defined inline.

### 8.2: Are any judgment rules disguised as binary?

**YES -- "Metaphor expression observed by PA (without knowing metaphor exists)" (Section 8.1, line 656).** This is listed as a HIGH-priority success criterion, but it is pure judgment. How does the team-lead determine if PA "observed" metaphor expression? What counts as observation? If PA says "the page has a sense of depth," does that satisfy "geological depth" metaphor expression? This criterion has no binary threshold.

**Mitigation suggestion:** Operationalize as: "PA-1 or PA-2 uses language suggesting thematic coherence (e.g., 'consistent metaphor,' 'unified concept,' 'everything relates to X') in their open-ended observations, WITHOUT being prompted to look for it."

### 8.3: Can the novelty evaluator accidentally see the metaphor?

**RISK: YES.** The prompt specifies copying files with neutral labels (page-A, page-B, page-C per line 623). But if the ceiling-page.html contains CSS class names derived from the metaphor (e.g., `.stratum--bedrock`, `.geological-depth`), the novelty evaluator reading the HTML source would see the metaphor. The prompt says the evaluator views pages via Playwright, but nothing prevents the evaluator from reading the HTML file directly.

**Mitigation suggestion:** Add to novelty evaluator instructions: "Evaluate ONLY via Playwright rendered view. Do NOT read the HTML/CSS source code."

### 8.4: Is the content selection decision clear?

**YES.** Line 58-60: "Use the SAME content as the Middle-tier experiment." Source file path provided. This is unambiguous.

### 8.5: Could the checkpoint architecture be gamed?

**CP-1 (Metaphor Resonance Gate):** The three checks (authenticity, cross-domain, multi-dimensional) are binary YES/NO per the gate table. However, "Authenticity: arises FROM content" is a judgment call. A metaphor that tangentially relates to content could be argued as "arising from" it. The prompt mitigates this somewhat with the max 2 re-derivation attempts and "proceed with strongest available" fallback.

**CP-3 (Builder Self-Check):** Self-verification has an inherent conflict of interest. The builder verifies its own work. If the builder makes a systematic error (e.g., miscounting var() references), the self-check will not catch it. CP-4 (team-lead Playwright verification) partially mitigates this for landmarks but not for CPL, token compliance, or heading spacing.

**CP-5 (Audit Reconciliation):** "Pessimistic rule" for PA-01 through PA-05 is good. But "NOT BLOCKING for verdict" means reconciliation results are advisory. If PA-1 says FAIL and PA-2 says PASS on PA-05, the pessimistic rule says FAIL -- but the verdict-synthesizer could still issue a SUCCESS verdict. The prompt should clarify: pessimistic PA-05 FAIL = experiment FAIL, period.

---

## SECTION 9: EXECUTABILITY

**Could a fresh Claude instance execute this without other context?**

**MOSTLY YES, with gaps:**

1. **Font loading** (SIGNIFICANT-5): A fresh instance does not know how to load Instrument Serif, Inter, or JetBrains Mono. This will cause immediate issues.

2. **Content file location**: The prompt references `extractions/infrastructure/004-system-remote-mac.md` (line 60, 77). A fresh instance needs to verify this file exists. The prompt assumes it does but provides no fallback.

3. **Middle-tier page location**: `ephemeral/middle-tier-experiment/middle-tier-page.html` (line 84). Same assumption.

4. **Phase D Variant B location**: `ephemeral/phase-d-execution/builds/variant-b-weak-perm.html` (line 85). Same assumption.

5. **HTTP server path**: Line 142 says "start a simple HTTP server in the project root." This is clear but should specify the exact port and verify no conflicts.

**Overall:** The prompt is 95% self-contained. The 5% gap is mostly about file existence verification and font loading.

---

## SECTION 10: CONTRADICTION CHECK

### Contradiction 1: Transition types -- MANDATORY vs RECOMMENDED

The preparation brief documents a resolved conflict (Section 7, Conflict 5): the decision was to make 3-transition minimum MANDATORY. The prompt correctly implements this at line 366 ("3+ transition types MANDATORY (not recommended)"). However, the verbiage specification in the preparation brief (Section 3, line 159) still lists "3+ transition types for rhythm variation" under "Recommended (descriptive, not required)."

**In the prompt itself:** No internal contradiction found. The prompt consistently says MANDATORY.

### Contradiction 2: Per-category minimums -- "1+" vs checklist's "S:2+, H:2+, C:3+, D:2+, N:2+"

The checklist item A-05 (line 90-91) specifies Ceiling minimums as "S:2+, H:2+, C:3+, D:2+, N:2+." The preparation brief Conflict 2 resolution (line 313) explicitly chose "1+ per category" as the mandatory floor, with reinforcing pairs as the differentiator.

**The prompt:** Correctly implements "1+" per category (line 348-356), aligned with the preparation brief resolution. The checklist A-05 was overridden by the conflict resolution. No contradiction within the prompt itself.

### Contradiction 3: Agent count -- "12 agents" vs "11 workers"

Line 99: "Total agents: 12 (1 team-lead + 11 workers)." Counting the roster: team-lead + metaphor-agent + planner + builder + http-server + prog-auditor + PA-1 + PA-2 + comp-auditor + novelty-eval + verdict-synth = 11 total (1 lead + 10 workers). The HTTP server is listed but may not be counted as a "worker" depending on definition.

**Fix:** Either clarify that HTTP-server counts as a worker (making it 1 + 11 = 12) or correct to "11 (1 team-lead + 10 workers + 1 utility)."

---

## SECTION 11: OMISSIONS

### OMISSION-1: No Team-Lead Message Count Verification (from Prep Brief)

The preparation brief (line 448) specifies: "Team-lead checks message count at Phase 5 completion; if zero, prompts agents." This active monitoring of communication is absent from the prompt. Without it, the prompt relies on agents voluntarily messaging -- the exact failure mode that produced zero messages in Middle.

**Fix:** Add to Appendix B step 11 or Section 10 CP-3/CP-4: "After builder writes file, team-lead checks: did builder send any messages? If zero, team-lead sends: 'Did any part of the plan need clarification? Please review your output against the plan and flag any uncertainties.'"

### OMISSION-2: No Mechanism Justification Requirement

The preparation brief Section 2 Tier 3 mentions "M6 (Mechanism justification requirement)" as deferrable. But for Ceiling, where mechanism selection must be THROUGH the metaphor, requiring the planner to write a 1-sentence metaphor justification per mechanism would be a powerful compliance mechanism. The prompt says "For each mechanism, explain how the metaphor DEMANDS it" (line 127) but this is instruction to the planner, not a verification criterion for CP-2.

**Fix (optional):** Add to CP-2 verification: "Each mechanism in the plan includes a 1-sentence metaphor justification."

### OMISSION-3: No Responsive Behavior Specification

The prompt mentions "768px" only indirectly through the PA protocol (screenshots at 1440px and 768px). There is no specification for what the page should do at 768px. Does the container go full-width? Do columns stack? Does the font size change? A builder without responsive guidance will either ignore responsive behavior entirely or make ad-hoc decisions.

**Fix:** Add a brief responsive section to Section 4.7 or Section 6: "At 768px: container goes full-width with 16px horizontal padding. Multi-column layouts stack to single column. Font sizes remain unchanged. All soul constraints apply at all breakpoints."

### OMISSION-4: No CSS Reset/Normalize Specification

The builder needs to know whether to include a CSS reset. Without one, browser defaults (margins on body, padding on elements) will create unpredictable behavior. The PA agents will see browser-default styling on elements the builder didn't explicitly style.

### OMISSION-5: Programmatic Auditor Has No Formula References

The programmatic auditor's key instruction (line 150) says "Check: soul 7/7, container 940-960px, CPL 45-80, token compliance >= 80%, heading spacing ratio >= 1.5:1." But unlike the builder, the prog-auditor is not given the CPL formula or the token compliance formula. The builder section (Section 4.7) provides formulas, but the prog-auditor "MUST NOT see: Metaphor, PA questions, evaluation criteria." The prog-auditor CAN see the build plan but cannot verify formulas it was never given.

**Fix:** Either include the CPL and token compliance formulas in the prog-auditor's instructions directly, or clarify that the prog-auditor may reference Section 4.7's formulas (guardrails are not "evaluation criteria").

---

## MINOR ISSUES

### MINOR-1: Heading spacing formula says ">= 1.5" but should specify direction

Line 436: "Heading spacing: margin-top / margin-bottom >= 1.5:1 for all h2/h3." This is clear. However, the builder self-check (line 436) and the programmatic audit (line 150) both reference this ratio but neither specifies what happens with margin collapse. CSS margin collapse could make computed values differ from specified values. The PA agents checking via Playwright will see COMPUTED values, not specified values.

### MINOR-2: "3-5 Designed Moments" vs "2-3 Purpose-Built Components"

These are separate requirements but could be confused. Section 4.5 says 3-5 designed moments. Section 5.2 says 2-3 purpose-built components. Line 135 says "Invent 2-3 composite components" and "Identify 3-5 DESIGNED MOMENTS." Both are in the builder's instructions. Consider adding a note: "Designed moments and purpose-built components are DIFFERENT constructs. A designed moment is WHERE mechanisms intersect. A purpose-built component is a NEW element type."

### MINOR-3: Comparative Auditor Randomization Redundant with Novelty Evaluator

Both the comparative auditor (line 172: "Page A" and "Page B" randomized) and novelty evaluator (line 176: 3 unlabeled pages randomized) require randomization by the team-lead. The team-lead checklist handles this (steps 13-14). But the prompt should clarify: are the randomizations INDEPENDENT (different mappings for each evaluator)? This is implied but not stated.

### MINOR-4: Appendix A Claims "~56 rules" but lists 56

Line 923 says "Total: ~56 rules" and the numbering goes to 56. This is consistent. No issue beyond the tilde implying approximation for an exact count.

### MINOR-5: Model Specification "Opus 4.6" and "Sonnet 4.5"

These model names appear throughout. A fresh Claude instance may not be able to specify model versions when creating tasks. If the task creation API uses different model identifiers, the team-lead needs to know the exact model IDs.

### MINOR-6: Wave Architecture Timing Estimates May Be Optimistic

Wave 1 (metaphor): "t=0" to "t=10-15 min." The preparation brief estimates metaphor derivation "may not parallelize cleanly." Full Phase 1-3 derivation for an Opus agent could take 5-15 minutes. Wave 2 (planning): another 10-15 min. Wave 3 (building): 10-20 min. This puts the builder finishing at t=30-50 min, which is within the "65-100 min" total estimate. Timing seems reasonable but tight.

### MINOR-7: No Scroll Animation Disabling for Playwright Audits

The MEMORY.md notes: "Disable scroll animations: animation: none !important; opacity: 1 !important" as a key UI audit protocol item. The prompt does not include this for the PA agents or programmatic auditor using Playwright.

### MINOR-8: Verdict Synthesizer "3 Strongest Challenges" Is a Judgment Rule

Line 187: "identify the 3 strongest challenges to your own verdict." This is good adversarial practice but is a judgment rule (what counts as "strongest"?). The prompt cannot make this binary. This is acceptable as-is but worth noting.

---

## CROSS-VALIDATION SUMMARY

### vs CEILING-PREPARATION-BRIEF.md

| Brief Item | In Prompt? | Assessment |
|------------|-----------|------------|
| CP-01: M1 per-category minimums | YES (Section 4.4) | Correctly implemented |
| CP-02: Inter-agent communication | YES (Section 3) | Missing minimum threshold (BLOCKING-3) |
| CP-03: Landmark completeness gate | YES (Section 4.8, CP-4) | Correctly implemented |
| CP-04: Builder self-check | YES (Section 4.7) | Correctly implemented |
| CP-05: Master execution prompt | YES (this document) | N/A |
| CP-06: Rhythm variation | YES (Section 4.4 line 366) | Correctly MANDATORY |
| CP-07: Heading spacing binary | YES (Section 4.7 line 436) | Correctly binary |
| CP-08: Blind novelty protocol | YES (Section 7.3) | Correctly implemented |
| CP-09: Dual PA protocol | YES (Section 7.1-7.2) | Correctly implemented |
| CP-10: Token compliance self-check | YES (Section 4.6) | Correctly implemented |
| Container width rule | YES (Section 4.7, multiple locations) | 3+ locations as recommended |
| Same content decision | YES (Section 1.2) | Correctly specified |
| Builder context decision (name + 1-line + SendMessage) | YES (Section 5.1, 2.2 builder) | Correctly implemented |
| Message count verification risk mitigation | NO | OMISSION-1 |
| >= 5 messages success criterion | NO | BLOCKING-3 |

### vs CEILING-MASTER-CHECKLIST.md (P1 items A-01 through A-21)

| Checklist Item | In Prompt? | Notes |
|----------------|-----------|-------|
| A-01: M1 applied | YES | Correctly references skill path |
| A-02: Communication protocol | YES | Missing minimum threshold |
| A-03: Landmark gate | YES | Correctly blocking |
| A-04: Builder self-check | YES | Complete with formulas |
| A-05: Ceiling per-category | OVERRIDE | Brief resolved to "1+" not "2+" |
| A-06: Mechanism interaction | YES | Reinforcing pairs (2+) |
| A-07: Blind novelty | YES | 3 unlabeled pages |
| A-08: Dual PA | YES | Two independent auditors |
| A-09: Timing re-estimated | YES | 65-100 min parallel |
| A-10: Programmatic from plan | YES | PLANNED vs DEPLOYED vs MISSING |
| A-11: Builder context decision | YES | Name + 1-line + SendMessage |
| A-12: Rhythm variation | YES | MANDATORY 3-transition |
| A-13: Heading spacing binary | YES | 1.5:1 formula |
| A-14: Pass margins | YES | Section 8.3 |
| A-15: Weight distribution | YES | Section 4.7 line 439 |
| A-16: Two-dimension model | PARTIAL | Mentioned in Section 0/1 but not explicitly as vocabulary vs compositional fluency table |
| A-17: Fresh-eyes zero-context | YES | NON-NEGOTIABLE language |
| A-18: Metaphor derivation phases | YES | Section 4.2 |
| A-19: Selection through metaphor | YES | Section 4.4, 5.3 |
| A-20: 4-scale fractal coherence | YES | Section 4.4 fractal table |
| A-21: File architecture | YES | Appendix C |

### vs 09-MASTER-RETROSPECTIVE.md (first 300 lines)

| Retro Finding | Captured in Prompt? | Assessment |
|---------------|-------------------|------------|
| Finding 1: M1 validated, interaction unexplored | YES | Reinforcing pairs requirement |
| Finding 2: Prompt slicing -> missing footer | YES | CP-4 landmark gate |
| Finding 3: Timing discrepancy | YES | Re-estimated to 65-100 min |
| Finding 4: Two dimensions of "designed" | PARTIAL | Mentioned in conviction, not formalized |
| Finding 5: Fresh-eyes auditing | YES | NON-NEGOTIABLE isolation |
| Finding 6: Flat topology sweet spot | YES | 12 agents flat |
| Finding 7: Evaluation reproducibility | YES | Dual PA, blind novelty, pass margins |
| Finding 8: Information isolation hypothesis | Correctly not addressed | Brief deferred this |
| Finding 9: Agent communication essential | PARTIAL | Protocol yes, minimum threshold no |
| V.1: Missing footer | YES | CP-4 |
| V.2: Token compliance 66.5% | YES | Builder self-check |
| V.3: PA-05b zero margin | YES | Pass margins reporting |
| V.4: CPL +2 | YES | Builder self-check with formula |
| V.5: Metronomic rhythm | YES | 3-transition MANDATORY |
| V.6: Top-heavy weight | YES | Weight distribution check |
| V.7: Single-evaluator novelty | YES | Blind 3-page protocol |
| V.8: Heading spacing | YES | Binary 1.5:1 rule |
| V.9: Zero communication | PARTIAL | Protocol exists, threshold missing |

---

## FINAL ASSESSMENT

### Must Fix Before Production (BLOCKING)

1. **BLOCKING-1:** Fix mechanism category assignments (#16 Drop Cap belongs to Depth/Emphasis, not Component)
2. **BLOCKING-2:** Fix soul compliance to include "Instrument Serif NEVER for body text" as an absolute check
3. **BLOCKING-3:** Add ">= 5 substantive messages" to success criteria + team-lead message count verification

### Should Fix (SIGNIFICANT)

4. **SIGNIFICANT-1:** Clarify that per-category minimums table is planner-only
5. **SIGNIFICANT-2:** Verify or approximate the "65 tokens" count
6. **SIGNIFICANT-3:** Change planner Tokens to "MUST" in isolation matrix
7. **SIGNIFICANT-4:** Align mechanism count range (11-15 vs 12-15)
8. **SIGNIFICANT-5:** Add font loading instructions

### Nice to Fix (MINOR)

9-16: See minor issues 1-8 above.

---

**END VALIDATION REPORT**

*This report was produced by a fresh-eyes validator with ZERO context from the assembly process, cross-validated against 6 source documents.*
