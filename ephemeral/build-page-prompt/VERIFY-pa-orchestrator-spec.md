# Verification: PA Questions + Orchestrator vs User Specification

**Verifier:** spec-verification agent (Opus 4.6)
**Date:** 2026-02-19
**Files reviewed:**
1. `DRAFT-11-pa-orchestrator-section.md` (643 lines -- combined PA questions + orchestrator SKILL.md)
2. `DRAFT-pa-questions.md` (156 lines -- standalone PA questions section)
3. `DRAFT-orchestrator.md` (505 lines -- standalone orchestrator section)

---

## PART 1: PA QUESTIONS VERIFICATION

### 1.1 Are all 8 questions present?

**COUNT: 8/8 -- PASS**

| # | ID | Topic | Present in DRAFT-11? | Present in DRAFT-pa-questions? |
|---|-----|-------|---------------------|-------------------------------|
| 1 | PA-60 | Design Moment Density | YES (line 23) | YES (line 24) |
| 2 | PA-61 | Multi-Voice Composition | YES (line 37) | YES (line 34) |
| 3 | PA-62 | Transition Variation | YES (line 51) | YES (line 44) |
| 4 | PA-63 | Fractal Zoom Coherence | YES (line 65) | YES (line 54) |
| 5 | PA-64 | Restraint as Expression | YES (line 79) | YES (line 64) |
| 6 | PA-65 | Musical Analogy / Multi-Voice | YES (line 93) | YES (line 74) |
| 7 | PA-66 | Negative Space Variety | YES (line 107) | YES (line 84) |
| 8 | PA-67 | Novelty Beyond Competence | YES (line 121) | YES (line 94) |

All 8 present. Numbered PA-60 through PA-67. **PASS.**

### 1.2 Do they cover the 5 required concepts?

| Required Concept | Covered By | Status |
|-----------------|------------|--------|
| **Metaphor pervading entire page** (not just decorating sections) | PA-63 (Fractal Zoom Coherence) + PA-65 (Musical Analogy) | **PARTIAL** -- see note below |
| **>=3 CSS channels shift together at section boundaries** | PA-62 (Transition Variation) | **PASS** |
| **Same pattern direction visible at multiple zoom levels** | PA-63 (Fractal Zoom Coherence) | **PASS** |
| **Compositional surprise** (unexpected but right) | PA-67 (Novelty Beyond Competence) | **PASS** |
| **Restraint (intentional absence) contributes** | PA-64 (Restraint as Expression) | **PASS** |

**NOTE on "metaphor pervading":** The user's spec says *"Does a single metaphor pervade the entire page, not just decorate individual sections?"* No question asks this EXACTLY. PA-63 asks about fractal zoom coherence (component echoing page language) and PA-65 asks the music analogy (ensemble vs solo). Together they approximate metaphor pervasion, but neither asks the DIRECT question: "Is there a single unifying metaphor, and does it pervade ALL sections?" The closest is PA-63, but it focuses on zoom levels rather than horizontal pervasion across sections.

**Verdict: PASS WITH NOTE.** The metaphor-pervading concept is captured indirectly through PA-63 + PA-65. If the user wants a DIRECT metaphor-pervasion question, it would need to be added or PA-63 reworded.

### 1.3 Is the scoring rubric present?

**PASS -- present in BOTH drafts.**

| YES Count | Label | Present? |
|-----------|-------|----------|
| 7-8/8 | COMPOSED (Flagship target) | YES |
| 5-6/8 | APPROACHING | YES |
| 3-4/8 | STRUCTURED (DRAFT-11) / STRUCTURED (DRAFT-pa) | YES |
| 0-2/8 | VOCABULARY ONLY | YES |

Note: DRAFT-11 uses "STRUCTURED" at 3-4 range. User spec said "CEILING" at 3-4. This is a terminology difference -- DRAFT-11's "STRUCTURED" is arguably clearer than "CEILING" since Ceiling is an existing tier name that could confuse. Both drafts are internally consistent.

### 1.4 Are questions numbered PA-60+?

**PASS.** All 8 questions numbered PA-60 through PA-67 in both drafts.

### 1.5 Auditor assignments present?

**PASS.** Both drafts include a complete 9-auditor assignment table with 48 standard + 8 Tier 5 = 56 total questions.

---

## PART 2: ORCHESTRATOR VERIFICATION

### Step-by-step verification against user's 8-step spec:

#### Step 1: Single Opus builder + 6 specific files

**User spec:** "Spawns a single Opus builder and tells it: 'Read these 6 files [content, brief, tokens, prohibitions, catalog, components].'"

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| Single Opus builder | YES (line 207: "Model: Opus (ALWAYS)") | YES (line 68: "Spawn one Opus agent") | PASS |
| 6 files listed | YES (lines 215-223: content, conventions-brief, tokens, prohibitions, mechanism-catalog, merged-components) | YES (lines 76-81: same 6 files) | PASS |
| Full creative authority | YES (line 235: "You may override ANY non-soul value") | YES (line 85: "Recipe not checklist") | PASS |

**PASS.**

#### Step 2: Wait for builder to finish

**User spec:** "Waits for the builder to finish writing the HTML file"

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| Wait for builder | YES (line 248: "Wait for builder to complete") | YES (line 106: "After builder completes") | PASS |
| Verify output files | YES (lines 249-251: checks 3 files) | Implied | PASS |

**PASS.**

#### Step 3: Gate runner (21 gates, failures back to same builder)

**User spec:** "Runs the gate runner -- checks all 21 gates programmatically. If gates fail, sends failures back to the same builder to fix before proceeding."

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| 21 gates | 12 listed in DRAFT-11 (SC-01 through SC-13 + DG-1, DG-2) | 21 gates listed (12 Tier A + 7 Tier B + 2 Tier C) | **DISCREPANCY** |
| Programmatic via Playwright | YES (line 267: Playwright) | YES (line 106-107: Playwright) | PASS |
| Failures → same builder | YES (line 299: "Route to builder in fix cycle") | YES (line 176: "proceed to fix cycle") | PASS |

**DISCREPANCY NOTE:** DRAFT-11 lists only 12 gates in its table (Section 3.2). DRAFT-orchestrator lists the full 21 (12 Tier A + 7 Tier B + 2 Tier C). The user spec says "21 gates." DRAFT-orchestrator is CORRECT. DRAFT-11 is INCOMPLETE on gate count but the full SKILL.md text has 12 gates -- it may have compressed SC-02 through SC-08 into a shorthand (identity gates not individually listed).

**Closer look at DRAFT-11 gates (lines 282-296):** SC-01, SC-02, SC-03, SC-04, SC-05, SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-13 + DG-1, DG-2 = 14 gates. Missing from DRAFT-11: SC-12, SC-14, SC-15, SC-16, SC-13B, Metaphor independence, Metaphor structural. That's 7 missing = only 14 of 21.

**Verdict: DRAFT-11 has 14 gates, DRAFT-orchestrator has 21. Assembler should use DRAFT-orchestrator's gate list.**

#### Step 4: Screenshots at 1440px AND 768px

**User spec:** "Takes screenshots at 1440px and 768px for the PA auditors"

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| 1440px screenshots | YES (line 319) | YES (line 188) | PASS |
| 768px screenshots | YES (line 319) | YES (line 194) | PASS |
| Additional viewports | 1024px also included | 1024px also included | EXCEEDS SPEC (good) |

**PASS.** Both include 1440px + 768px + bonus 1024px.

#### Step 5: 9 Opus PA auditors with question subsets (56 total)

**User spec:** "Spawns 9 Opus PA auditors -- each gets a subset of the 56 questions (48 standard + 8 Tier 5). They evaluate independently, no communication between them."

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| 9 Opus auditors | YES (line 328) | YES (line 231) | PASS |
| 56 total questions | YES (line 158) | YES (line 132 of DRAFT-pa) | PASS |
| Question subsets per auditor | YES (lines 358-368) | YES (lines 264-276) | PASS |
| Independent (no communication) | YES (implicit -- each writes own report) | YES (implicit -- parallel, no cross-talk) | PASS |
| Full question text pasted | YES (line 372: "MUST have the full question text pasted") | YES (line 243: "INSERT QUESTION LIST WITH FULL TEXT") | PASS |

**PASS.**

#### Step 6: Weaver synthesis

**User spec:** "Spawns a weaver that synthesizes all 9 auditor reports into a single verdict with specific actionable feedback"

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| 1 Opus weaver | YES (line 374) | YES (line 285) | PASS |
| Reads all 9 reports | YES (line 377) | YES (lines 294-295) | PASS |
| Single verdict | YES (lines 401-407) | YES (lines 329-334) | PASS |
| Actionable feedback | YES (lines 391-392: TOP-3 ISSUES) | YES (lines 318-319: TOP-3 ISSUES) | PASS |

**PASS.**

#### Step 7: Fix cycle (SAME builder, PA-05 >= 3.5 AND Tier 5 >= 6/8, up to 3 rounds)

**User spec:** "If PA-05 < 3.5 OR Tier 5 < 6/8: sends the weaver's feedback to the SAME builder (preserves compositional memory), builder fixes, re-run gates + PA. Up to 3 rounds."

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| SAME builder | YES (line 441: "CRITICAL: Use the SAME Opus builder agent") | YES (line 345: "Same builder") | PASS |
| PA-05 >= 3.5 threshold | YES (line 403) | YES (line 331) | PASS |
| Tier 5 >= 6/8 threshold | YES (line 403) | YES (line 331) | PASS |
| Re-run gates + PA | YES (lines 447-450) | YES (lines 374-377) | PASS |
| Up to 3 rounds | YES (line 461: "Do NOT loop beyond 3 cycles") | YES (line 379: "After Cycle 3 fails: ESCALATE") | PASS |
| Compositional memory preservation | YES (line 441) | YES (implicit via "Same builder") | PASS |

**PASS.**

#### Step 8: Ship or report

**User spec:** "Ships when the bar is met, or after 3 rounds reports the final score and what's still failing."

| Requirement | DRAFT-11 | DRAFT-orchestrator | Status |
|------------|----------|-------------------|--------|
| Ship when bar met | YES (lines 485-486) | YES (line 398) | PASS |
| Report after 3 rounds | YES (line 461: ESCALATE) | YES (line 379: ESCALATE) | PASS |
| Final score reported | YES (lines 496-508) | YES (line 402) | PASS |

**PASS.**

### Does it use TeamCreate (NOT just subagents)?

**DRAFT-11 (SKILL.md):** Line 197 says "Use TeamCreate to spawn the build-page team." Line 328 says "Spawn 9 Opus auditors + 1 Opus weaver using TeamCreate." **EXPLICIT TeamCreate mentions.**

**DRAFT-orchestrator:** Line 68 says "Task tool, `subagent_type: 'code'`". Lines 231, 285 say "Spawn 9 Opus agents" and "Spawn 1 Opus weaver agent" without specifying TeamCreate vs Task tool.

**DISCREPANCY:** DRAFT-11 explicitly says TeamCreate. DRAFT-orchestrator says Task tool. The user's spec says to use TeamCreate.

**Verdict:** DRAFT-11 is CORRECT. DRAFT-orchestrator should be updated to specify TeamCreate instead of Task tool. However, this may be intentional -- the orchestrator draft describes a SKILL.md where the orchestrator IS the team lead spawning via the team system, while the research draft describes spawning via Task tool subagents. The assembler should use TeamCreate as specified by the user.

---

## PART 3: SUMMARY

### PA Questions

| Check | Result |
|-------|--------|
| All 8 questions present | **PASS** (8/8) |
| Metaphor pervading | **PARTIAL** (covered indirectly by PA-63 + PA-65, not a direct question) |
| Channel shifting | **PASS** (PA-62) |
| Multiple zoom levels | **PASS** (PA-63) |
| Compositional surprise | **PASS** (PA-67) |
| Restraint | **PASS** (PA-64) |
| Scoring rubric present | **PASS** |
| Numbered PA-60+ | **PASS** |

### Orchestrator

| Step | Result | Notes |
|------|--------|-------|
| Step 1: Single Opus builder + 6 files | **PASS** | Both drafts |
| Step 2: Wait for builder | **PASS** | Both drafts |
| Step 3: Gate runner (21 gates) | **PARTIAL** | DRAFT-11 has 14 gates; DRAFT-orchestrator has 21 |
| Step 4: Screenshots 1440px + 768px | **PASS** | Both drafts, plus 1024px bonus |
| Step 5: 9 Opus PA auditors (56 Qs) | **PASS** | Both drafts |
| Step 6: Weaver synthesis | **PASS** | Both drafts |
| Step 7: Fix cycle (same builder, thresholds, 3 rounds) | **PASS** | Both drafts |
| Step 8: Ship or report | **PASS** | Both drafts |
| TeamCreate usage | **PARTIAL** | DRAFT-11 says TeamCreate; DRAFT-orchestrator says Task tool |

### Issues for Assembler to Resolve

1. **GATE COUNT (SIGNIFICANT):** DRAFT-11 lists 14 gates, user spec says 21, DRAFT-orchestrator has 21. Use DRAFT-orchestrator's 21-gate list in assembly.

2. **METAPHOR PERVADING (MINOR):** No direct question asks "Does a single metaphor pervade the entire page?" PA-63 + PA-65 approximate this but focus on zoom-level coherence and musical analogy respectively. Consider whether this is sufficient or if PA-63 needs rewording.

3. **TEAMCREATE vs TASK TOOL (SIGNIFICANT):** User spec says TeamCreate. DRAFT-orchestrator uses Task tool language. Assembly should use TeamCreate.

4. **SCORING LABEL at 3-4 (MINOR):** User spec says "CEILING" at 3-4/8. Drafts say "STRUCTURED." Either is acceptable but should be consistent with user's language.

5. **DRAFT-11 vs DRAFT-orchestrator overlap:** Both drafts contain the full orchestrator. DRAFT-11 packages it as a SKILL.md; DRAFT-orchestrator is a standalone section. They are substantively aligned with minor differences (gate count, TeamCreate, lock sheet inclusion). Assembler should reconcile.

### Overall Verdict

**PASS WITH 2 SIGNIFICANT ISSUES (gate count, TeamCreate) and 2 MINOR ISSUES (metaphor question, scoring label).**

All 8 user-specified steps are covered. All 8 PA questions are present. Scoring rubric matches. The two significant issues are reconcilable from existing drafts -- DRAFT-orchestrator has the correct gate count, and DRAFT-11 has the correct TeamCreate language.

---

**END OF VERIFICATION**
