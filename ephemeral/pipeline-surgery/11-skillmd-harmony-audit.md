# SKILL.md Contextual Harmony Audit

**Auditor:** Contextual Harmony Agent (Opus)
**File audited:** `~/.claude/skills/build-page/SKILL.md` (477 lines, post-surgery state)
**Date:** 2026-02-20
**Surgeon edits observed:** TC phase insertion (Step 2), builder prompt rewrite (Phase A), agent model table update, file structure update, BG-1 behavioral gate update

---

## Section 1: Narrative Flow Assessment

### Overall Story Arc

The document now tells this story:

```
MISSION (0) -> INTAKE (1) -> TC ANALYSIS (2) -> BUILD (3) -> GATES (4) -> SCREENSHOTS (5) -> LOCK SHEET (5.5) -> PA AUDIT (6) -> FIX CYCLE (7) -> SUCCESS BAR (8) -> OUTPUT (9) -> DETAILS (10) -> NON-NEGOTIABLES (11)
```

**Verdict: GOOD.** The insertion of Step 2 (TC Skill Invocation) between Intake and Builder creates a clean three-act structure for the creative pipeline:

1. **Gather** (Steps 1-2): Content arrives, TC analyst derives compositional foundation
2. **Build** (Steps 3-4): Builder constructs from TC brief, gates verify
3. **Evaluate** (Steps 5-7): PA auditors assess, fix cycles correct

The transition from Step 1 (intake) to Step 2 (TC) reads naturally: "You have the content, now derive what it means compositionally." The transition from Step 2 to Step 3 also flows: "You have the compositional brief, now build." The TC step serves as the intellectual bridge between raw content and constructed page.

### One Minor Flow Concern

Step 2 ends with "Wait for TC agent to complete. Verify _tc-brief.md exists and contains all 5 sections." But there is NO guidance for what happens if verification FAILS. Step 3 immediately begins with "Spawn agents using the Task tool." This creates a gap -- if the TC brief is incomplete or malformed, the orchestrator has no instructions. See Section 5 (Edge Cases) for recommendations.

---

## Section 2: Cross-Reference Integrity

### Internal Step Number References

| Location | Reference | Correct? | Notes |
|----------|-----------|----------|-------|
| Line 16 (Mission) | "PA-05 >= 3.5 AND Tier 5 >= 7/9" | YES | Matches Step 8 success bar |
| Line 65 | "Spawn agents per the wave structure below" | YES | Wave 1 follows immediately |
| Line 157 | "reference `design-system/pipeline/gate-runner.md`" | YES | File exists at that path |
| Line 194 | "Route to builder in fix cycle (Step 7)" | YES | Step 7 is Fix Cycle |
| Line 242 | "Route the lock sheet to the WEAVER ONLY in Step 6.3" | YES | Step 6.3 is Weaver Spawn |
| Line 293 | "full text is in `~/.claude/skills/perceptual-auditing/SKILL.md`" | YES | File exists |
| Line 293 | "`design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only)" | YES | File exists |
| Line 316 | "PA-60 through PA-68" | CONCERN | PA skill defines PA-60 through PA-67 (8 questions). PA-68 is defined ONLY in flagship-pa-questions.md. The weaver is told to count YES answers from PA-60 through PA-68 = 9 questions. But the Tier 5 scoring table in PA SKILL.md uses 8 questions (7-8/8 = COMPOSED). **MISMATCH: weaver uses /9, PA skill uses /8.** See BLOCKING issues. |
| Line 317 | "8-9 COMPOSED / 6-7 APPROACHING / 3-5 STRUCTURED / 0-2 VOCABULARY ONLY" | MISMATCH | These are /9 thresholds. PA skill says 7-8/8 COMPOSED, 5-6/8 APPROACHING, 3-4/8 STRUCTURED, 0-2/8 VOCABULARY ONLY. The denominators differ. |
| Line 398 | "Re-run all gates (Step 4)" | YES | Step 4 is Gate Runner |
| Line 399 | "Re-capture screenshots (Step 5)" | YES | Step 5 is Screenshot Capture |
| Line 400 | "deploy 2 PA auditors (A + C)" | YES | Matches auditor assignment table |

### File Path References

| Location | Path | Exists? |
|----------|------|---------|
| Line 37 | `~/.claude/skills/tension-composition/SKILL.md` | YES |
| Line 82 | `design-system/pipeline/conventions-brief.md` | YES |
| Line 86 | `design-system/compositional-core/grammar/mechanism-catalog.md` | YES |
| Line 87 | `design-system/compositional-core/components/components.css` | VERIFY -- previously referenced as `merged-components.css` in some places. May need reconciliation. |
| Line 88 | `design-system/compositional-core/vocabulary/tokens.css` | YES |
| Line 89 | `design-system/compositional-core/identity/prohibitions.md` | YES |
| Line 258 | `~/.claude/skills/perceptual-auditing/SKILL.md` | YES |

### Gate ID References

| Location | Reference | Correct? |
|----------|-----------|----------|
| Line 155 | "16 composition-critical gates" | YES | SC-00 through SC-15 = 16 gates |
| Line 180 | "advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 + BG-2" | YES | These supplement the 16 core gates |
| Line 425 | "SC-01 through SC-05 all PASS" | YES | Soul compliance gates |
| Line 428 | "SC-13 PASS + PA-61 agreement" | YES | Multi-coherence gate + PA question |
| Line 429 | "DG-1 valid + PA-63 agreement" | YES | Fractal echo deliverable + PA question |

---

## Section 3: Builder Prompt Coherence

### Phase A-D Process

The builder's Phase A now reads:

> Phase A: Read the TC brief. Your metaphor, zones, tensions, and mechanisms have been pre-derived by the TC analyst. Internalize them. Your job starts at Phase B.

**Analysis:**

This is a WELL-DESIGNED change. Phase A is now a pure INTAKE phase for the builder -- read and internalize the TC brief. The builder does not need to do content analysis or tension derivation because TC has already done it.

**Phase B coherence:** "Plan. Write conviction statement, transition table, and fractal echo table in build log BEFORE any CSS." -- This STILL MAKES SENSE. The builder takes TC's metaphor, zones, and mechanisms as inputs and plans HOW to express them in CSS. The conviction statement is the builder's commitment to the TC analyst's metaphor, not the builder's own derivation.

**Phase C coherence:** "Build. HTML + CSS. Self-check at 3 checkpoints." -- Still makes sense. The checkpoints are all about CSS output quality, not about content analysis.

**Phase D coherence:** "Self-verify. Complete cascade value table." -- Still makes sense.

### Conviction Statement Semantics

**CONCERN:** The conventions brief likely tells the builder to "write conviction statement" as part of the composition process. With TC pre-deriving the metaphor, the conviction statement's meaning shifts:

- **Before TC:** "I analyzed this content and believe THIS metaphor serves it best because..."
- **After TC:** "I received this metaphor from TC and I commit to expressing it because..."

The builder's conviction statement should reference the TC brief's metaphor, not re-derive one. The current SKILL.md Phase A handles this correctly ("Your metaphor, zones, tensions, and mechanisms have been pre-derived"), but the conventions-brief itself may still tell the builder to "derive your metaphor" in its conviction statement section. **This is a conventions-brief harmony issue, not a SKILL.md issue.**

### BRIEF REFLECTION Coherence

Lines 113-117 require the builder to write a BRIEF REFLECTION including:
> (c) How the TC brief's structural metaphor guided your CSS decisions

This is NEW and correctly added. It creates traceability from TC brief -> builder decisions. **GOOD.**

### BG-1 Behavioral Gate Coherence

Line 210:
> BG-1: Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation

**CONCERN:** This behavioral gate was designed to verify the builder independently derived the metaphor. But now TC does this, not the builder. The builder's build log should show:

1. TC brief read and internalized (Phase A)
2. Conviction statement written from TC brief (Phase B)
3. CSS decisions guided by TC metaphor (Phase C)

BG-1 as currently worded would FAIL because the builder's build log will NOT show "content analysis -> tension derivation -> metaphor collapse" -- TC's brief will. The builder will show "TC brief read -> conviction statement -> build."

**Two possible fixes:**
1. BG-1 checks the TC BRIEF (not the build log) for content analysis -> tension derivation -> metaphor collapse
2. BG-1 is split: BG-1a checks TC brief for derivation process, BG-1b checks build log for TC brief consumption before library consultation

**This is a SIGNIFICANT issue.** See BLOCKING section.

---

## Section 4: Metadata Accuracy

### Agent Models Table (Step 10, lines 449-457)

| Role | Model | Count | Correct? |
|------|-------|-------|----------|
| Orchestrator | You (team lead) | 1 | YES |
| TC Analyst | Opus | 1 | YES -- newly added |
| Builder | Opus | 1 | YES |
| PA Auditors | Opus | 9 (initial), 2 (fix cycles) | YES |
| PA Weaver | Opus | 1 | YES |

**Total agent count (initial run):** 1 orchestrator + 1 TC + 1 builder + 9 PA + 1 weaver = 13 agents. Previously 12 (without TC). The table correctly reflects the addition.

### Timing Estimates

The SKILL.md does not include explicit total timing estimates, only per-cycle durations in the Fix Cycle table (lines 405-410). The TC phase adds approximately 5-15 minutes (Opus running Phases 0-3 of TC skill). This is not documented anywhere.

**RECOMMENDATION:** Add a timing note to Step 2: "TC analysis typically completes in 5-15 minutes depending on content length."

### File Structure (Step 10, line 467)

The file structure now lists `_tc-brief.md` first:
> `[output-dir]/` contains: `_tc-brief.md`, `output.html`, `_build-log.md`, ...

**Correct.** The TC brief is now listed and will be produced by the TC agent in Step 2.

### Run Manifest (Step 9, line 443)

The run manifest includes "total agents spawned" but does not explicitly mention TC agent. Since "total agents spawned" is a count, this will naturally include the TC agent. **Correct by implication.**

---

## Section 5: Edge Cases

### 5.1 What happens when TC brief is bad?

Step 2 says: "Wait for TC agent to complete. Verify _tc-brief.md exists and contains all 5 sections."

**Missing:** What if:
- TC brief exists but a section is empty?
- TC brief's metaphor fails the 6-criterion rubric (score < 12/18)?
- TC brief's metaphor hits a binary rejection check (R1-R6)?
- TC brief selects mechanisms that violate soul constraints?

**RECOMMENDATION:** Add a TC Brief Quality Gate after Step 2:

```
TC Brief Quality Gate:
1. All 5 sections present and non-empty
2. Metaphor is named and has CSS implications stated
3. Zone count is 3-5
4. Mechanism count >= 14 with all 5 categories represented
5. No mechanism suggests soul violations (border-radius, box-shadow, etc.)

If any check FAILS: re-spawn TC agent with specific feedback.
Maximum 1 TC re-run. If still failing, ESCALATE to user.
```

### 5.2 What happens when TC and builder disagree?

The builder has CREATIVE AUTHORITY (line 104): "You may override ANY non-soul value if you log the override with compositional reasoning."

But the TC brief provides the metaphor, zones, tensions, and mechanisms. Can the builder override the METAPHOR? The current wording implies the builder must accept TC's metaphor (Phase A: "Internalize them. Your job starts at Phase B.") but has authority over CSS expression.

**This is actually WELL-DESIGNED.** The division of labor is:
- TC: WHAT to express (metaphor, zones, tensions)
- Builder: HOW to express it (CSS, HTML, components)

The builder can override mechanism selection but not the metaphor itself. This is analogous to architect (TC) vs contractor (builder). However, this should be made EXPLICIT:

**RECOMMENDATION:** Add to builder spawn prompt after "YOUR CREATIVE AUTHORITY":
> "You may NOT override the TC brief's structural metaphor or zone architecture. These are your architectural constraints. You MAY override specific mechanism selections and CSS approaches if you log the override with compositional reasoning."

### 5.3 What happens when fix cycle needs metaphor-level changes?

Step 7.2 says: "Use the SAME Opus builder agent that produced the original page."

But if the PA audit reveals the metaphor itself is flawed (e.g., PA-44 finds metaphor is ANNOUNCED not STRUCTURAL), the builder cannot fix this -- it requires re-running TC with different constraints.

**RECOMMENDATION:** Add to Step 7.1 (Build Fix Instructions) a triage step:

```
### Fix Triage
Before composing fix instructions, categorize each issue:
- CSS-LEVEL: Builder can fix (routes to Step 7.2)
- METAPHOR-LEVEL: Requires TC re-run (escalate to user)

If any issue is METAPHOR-LEVEL, ESCALATE rather than sending to builder.
```

### 5.4 What happens if TC agent fails to write its output file?

This is a known pattern from MEMORY.md: "workers frequently complete WITHOUT writing files." Step 2 verifies the file exists, but has no recovery protocol. The general recovery pattern elsewhere in the document (Step 3 monitoring, line 128) says "send fix instruction to builder specifying which file to produce." The same pattern should apply to TC.

**RECOMMENDATION:** Add after line 59: "If _tc-brief.md is missing or incomplete after TC agent completes: re-spawn TC agent with explicit instruction to write the file. Include 'You MUST write your output to [path]. Your prior run completed without producing the file.'"

---

## Section 6: Specific Enrichment Recommendations

### 6.1 TC Phase Description Mismatch (BLOCKING)

**Lines 40-45:** The TC agent spawn prompt describes the phases as:

```
- Phase 0: Content Analysis (multi-axis questioning)
- Phase 1: Tension Derivation (identify content's internal conflicts)
- Phase 2: Metaphor Collapse (derive ONE structural metaphor from tensions)
- Phase 3: Mechanism Selection (select mechanisms that serve the metaphor)
```

But the actual TC SKILL.md phases are:

```
Phase 0: Content Assessment
Phase 1: Multi-Axis Questioning
Phase 2: Tension Derivation
Phase 3: Metaphor Collapse
Phase 3.5: Metaphor Commitment (LOCK-IN GATE)
Phase 4: Compositional Layout Generation (includes mechanism selection)
Phase 5: Output + Divergence Verification
```

**The descriptions are WRONG.** Phase 0 is "Content Assessment" not "Content Analysis (multi-axis questioning)." Phase 1 is "Multi-Axis Questioning" not "Tension Derivation." The labels are shifted by approximately one phase.

Additionally: "Mechanism Selection" is NOT a separate TC phase -- it happens WITHIN Phase 3 (Step 3.5, mechanism feasibility) and Phase 4 (compositional layout generation). The TC spawn prompt says "DO NOT proceed to Phases 4-5" which means the TC agent would NOT do mechanism selection (it's in Phase 4).

**FIX:** Replace lines 40-46 with:

```
Execute Phases 0-3 (including Phase 3.5 Commitment Gate) of the tension-composition skill on this content:
- Phase 0: Content Assessment (classify type, scope, sections)
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + extended axes)
- Phase 2: Tension Derivation (genuine vs cosmetic, richness scoring)
- Phase 3: Metaphor Collapse (search query, candidate scoring, commitment)

Also execute Phase 4's mechanism selection (Phase 4.1-4.3 only) to select mechanisms
that serve the committed metaphor. DO NOT proceed to Phase 4's HTML/CSS generation
or Phase 5.
```

### 6.2 BG-1 Behavioral Gate Needs Rewriting

**Line 210:**
> BG-1: Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation

Should be:
> BG-1: TC brief (`_tc-brief.md`) shows tension derivation -> metaphor collapse process. Build log shows TC brief consumed and conviction statement written BEFORE library consultation.

### 6.3 TC Brief Section 4 (SELECTED MECHANISMS) Requires Phase 4 Access

**Lines 48-53:** The TC brief output format requires "SELECTED MECHANISMS: Which mechanisms serve the metaphor, from which catalog categories." But if the TC agent stops after Phase 3 (as instructed on line 46), mechanism selection has not happened yet -- that is Phase 4's job.

**FIX:** Either:
(a) Tell TC agent to also execute Phase 4.1-4.3 (mechanism selection portions only), OR
(b) Change TC brief section 4 to "MECHANISM DIRECTIONS: Which mechanism CATEGORIES are implied by the metaphor and zones" rather than specific mechanism selections.

Option (a) is better because it gives the builder concrete mechanism guidance.

### 6.4 Missing TC Brief Validation Depth

**Line 59:** "Verify _tc-brief.md exists and contains all 5 sections."

This is a shallow check. The orchestrator should also verify:
- Metaphor has interpretive distance (not just the content's own domain vocabulary)
- Zone count is 3-5
- CSS directions are concrete (not vague like "use appropriate spacing")

**RECOMMENDATION:** Add a 3-point TC brief quality check after line 59.

### 6.5 Tier 5 Question Count Inconsistency

**Lines 316-317:** Weaver is told "Count YES answers from PA-60 through PA-68" and uses /9 thresholds.
**PA SKILL.md:** Tier 5 is PA-60 through PA-67 = 8 questions with /8 thresholds.
**Flagship PA questions:** PA-68 exists separately.

**Question:** Is the SKILL.md correct at /9 (including PA-68) or should it match the PA skill at /8?

Looking at the auditor assignment table (lines 281-291): PA-68 is assigned to Auditor G. So 9 Tier 5 questions are being evaluated (PA-60 through PA-68). The weaver /9 denominator is internally consistent with the assignment table.

**However**, the PA SKILL.md's scoring table uses /8. This means the PA skill and the build-page skill disagree on the Tier 5 denominator. This needs reconciliation, but it is NOT caused by the surgeon's edits -- it pre-existed.

**RECOMMENDATION:** Flag for the pa-questions-surgeon or pa-assignment-reconciler to resolve: either PA SKILL.md should add PA-68 to its Tier 5 table, or build-page SKILL.md should use /8 thresholds with PA-68 as supplementary.

### 6.6 Language Consistency

The document uses the following terms for the TC skill invocation:

| Term | Location | Consistency |
|------|----------|-------------|
| "TC SKILL INVOCATION" | Section heading (line 28) | PRIMARY term |
| "TC Agent" | Line 32 ("Spawn 1 Opus agent") | Agent name |
| "TC analyst" | Line 34, 81, 92, 117 | Role name -- consistent |
| "tension-composition analyst" | Line 34 | Full name in spawn prompt |
| "TC brief" | Lines 48, 59, 81, 92, 117 | Output name -- consistent |
| "TC Analyst" | Line 454 (agent table) | Capitalized -- consistent with table format |

**Verdict: GOOD.** The document consistently uses "TC" as the abbreviation, "TC analyst" for the role, "TC brief" for the output, and "tension-composition" only in the full skill path. No confusing alternation between different terms.

---

## Section 7: BLOCKING Issues

### BLOCKING-1: TC Phase Descriptions Are Wrong (Severity: HIGH)

**Lines 40-45.** The phase names and descriptions in the TC spawn prompt do not match the actual TC SKILL.md phases. Phase 0 is described as "Content Analysis (multi-axis questioning)" but it's actually "Content Assessment." Phase 1 is described as "Tension Derivation" but it's actually "Multi-Axis Questioning." This will confuse the TC agent.

**Impact:** The TC agent reads the SKILL.md itself (line 37: "Read ~/.claude/skills/tension-composition/SKILL.md -- YOUR PROCESS. Follow Phases 0-3 exactly."). So the agent will likely follow the SKILL.md's actual phases, not the spawn prompt's wrong descriptions. But the inconsistency creates cognitive friction and risks partial compliance.

**Fix:** Correct the phase descriptions to match the actual TC SKILL.md. See Section 6.1 for exact replacement text.

### BLOCKING-2: "Stop after mechanism selection" but mechanism selection is in Phase 4 (Severity: HIGH)

**Line 46:** "DO NOT proceed to Phases 4-5. Stop after mechanism selection."

This is contradictory. Mechanism selection happens in Phase 4. If the TC agent stops after Phase 3, it will NOT have selected mechanisms. But the TC brief output format (line 52) requires "SELECTED MECHANISMS."

**Impact:** The TC agent will either:
(a) Follow the "stop after Phase 3" instruction and produce a brief WITHOUT mechanisms, OR
(b) Follow the "selected mechanisms" output requirement and proceed into Phase 4 territory.

Either way, there is ambiguity.

**Fix:** Either tell TC to execute through Phase 4's mechanism selection portions, OR change the brief requirement to "mechanism directions" rather than "selected mechanisms." See Section 6.3 for options.

### BLOCKING-3: BG-1 Behavioral Gate Will FAIL Every Run (Severity: MEDIUM-HIGH)

**Line 210:** BG-1 checks the BUILD LOG for "content analysis -> tension derivation -> metaphor collapse BEFORE library consultation." But the builder no longer does these steps -- TC does. The builder's build log will show "TC brief consumed -> conviction statement -> build."

**Impact:** BG-1 will either FAIL (because the build log does not contain the derivation process) or be evaluated wrong (checking the wrong file).

**Fix:** Rewrite BG-1 to check the TC brief for derivation process AND the build log for TC brief consumption. See Section 6.2.

---

## Summary

### Changes that are WELL-DONE by the surgeon:
1. TC phase inserted as Step 2 with clean narrative flow
2. Builder prompt Phase A correctly rewritten for TC brief consumption
3. Agent Models table updated with TC Analyst row
4. File Structure updated to include _tc-brief.md
5. TC brief reading order correctly placed FIRST in builder's file list
6. BRIEF REFLECTION updated to include "(c) How the TC brief's structural metaphor guided your CSS decisions"
7. Language consistency (TC / TC analyst / TC brief) is clean throughout

### Issues requiring attention:
| ID | Severity | Issue |
|----|----------|-------|
| BLOCKING-1 | HIGH | TC phase descriptions wrong (shifted by 1) |
| BLOCKING-2 | HIGH | "Stop after mechanism selection" contradicts "stop after Phase 3" |
| BLOCKING-3 | MEDIUM-HIGH | BG-1 behavioral gate will fail every run |
| SIGNIFICANT-1 | MEDIUM | No recovery protocol for bad/missing TC brief |
| SIGNIFICANT-2 | MEDIUM | No guidance for metaphor-level fix cycle escalation |
| SIGNIFICANT-3 | LOW-MEDIUM | Tier 5 denominator inconsistency (/9 vs /8) pre-existing |
| MINOR-1 | LOW | Missing TC timing estimate |
| MINOR-2 | LOW | Builder creative authority should explicitly exclude metaphor override |
| MINOR-3 | LOW | components.css filename may need reconciliation with merged-components.css |

### Files that may need follow-up edits:
1. `~/.claude/skills/build-page/SKILL.md` -- BLOCKING-1, BLOCKING-2, BLOCKING-3
2. `design-system/pipeline/conventions-brief.md` -- Conviction statement semantics may need updating for TC-first flow (conventions-surgeon territory)
3. `~/.claude/skills/perceptual-auditing/SKILL.md` -- Tier 5 denominator reconciliation
