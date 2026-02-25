# ADVERSARIAL REVIEW — Master Enrichment List (05-MASTER-ENRICHMENT-LIST.md)

**Reviewer:** list-adversarial (Opus 4.6)
**Date:** 2026-02-24
**Target:** 57 enrichments across 7 tiers, 745 lines
**Verdict:** THE LIST REPRODUCES THE DISEASE IT DIAGNOSES. 57 enrichments adding ~800+ net lines to a pipeline whose core finding is "more spec = worse output." The list needs surgery before implementation.

---

## ATTACK 1: COMPLEXITY RATCHET CHECK

### The Count

| Type | Count | Lines (est.) | Examples |
|------|-------|-------------|---------|
| ADD new content | 42 | ~650 lines | ME-001, ME-003, ME-004, ME-006, ME-008, ME-009, ME-014-023, ME-031-046, ME-047-057 |
| REPLACE existing content | 11 | ~80 lines (net zero to slight increase) | ME-005, ME-010-013, ME-024-030 |
| REMOVE content | 1 | -30 lines | ME-037 |
| SIMPLIFY | 3 | ~0 net | ME-010 (split), ME-025 (downgrade), ME-054 (remove dead CSS) |

**Add:Remove ratio = 42:1.** Not 2:1 -- FORTY-TWO to one.

The safe budget per the enrichment-safety-analysis is ~240 lines across all artifacts. The master list proposes ~650+ lines of additions with ~30 lines of removals. This is a **net addition of ~620 lines** against a budget of ~240.

Phase 2's CENTRAL FINDING is that the pipeline went from 100 lines (Middle, PA-05 4/4) to 3,600 lines (V3, PA-05 3/4) and got WORSE. The master list's response to this finding is: add 620 more lines.

### The Defense and Why It Fails

The list will argue: "These are the RIGHT 620 lines -- usability-focused, not compliance-focused." This is the same argument every previous enrichment wave made. The 128-fix wave also claimed its additions were "the right ones." The V3 spec claimed its 3,600 lines were "the right ones." The complexity ratchet is not about the QUALITY of additions -- it is about the ACT of addition. Each line added is a line the gate runner must implement, the brief assembler must route, the builder must absorb, and the orchestrator must coordinate.

**Verdict: The list violates its own founding principle.** The priority inversion finding says the problem is WHAT the pipeline checks, not HOW MANY checks. Adding 42 new checks while removing 1 is reproducing the disease.

---

## ATTACK 2: CAPACITY BUDGET VIOLATION

### Per-Artifact Line Budget Analysis

Using the enrichment-safety-analysis capacity thresholds:

| Artifact | Safe Budget | ME List Proposes | Over Budget? |
|----------|------------|-----------------|--------------|
| `gate-runner-core.js` | **0 net** (must subtract first) | +70 (ME-003 WCAG gate) +50 (ME-014 min font) +60 (ME-040 text overflow) +20 (ME-007 GR-44 fix) +20 (ME-010 GR-05 split) +20 (ME-011 GR-06 modify) +10 (ME-012 GR-14 fix) +10 (ME-013 GR-09 fix) +10 (ME-024 GR-07) +5 (ME-025 GR-12) +5 (ME-026 GR-43) +5 (ME-027 GR-19) +10 (ME-028/029) +5 (ME-029 GR-17) +10 (ME-030 viewport) = **~310 lines** | **YES -- 310 lines over a zero budget.** Even with ~150 lines of subtraction (per safety analysis), net +160 lines on the most stressed artifact in the pipeline (68% compliance). |
| `pa-deployment.md` | +30 | ME-001 (~25) + ME-006 (~30) + ME-009 (~15) + ME-015 (~20) + ME-034 (~5) + ME-052 (~5) = **~100 lines** | **YES -- 3.3x over budget** |
| `pa-questions.md` | +30 | ME-021 (~10) + ME-022 (~10) + ME-023 (~15) + ME-031 (~10) + ME-032 (~5) + ME-033 (~10) + ME-035 (~5) + ME-036 (~5) + ME-037 (-20) + ME-051 (~20) + ME-055 (~10) = **~80 net lines** | **YES -- 2.7x over budget** |
| `artifact-builder-recipe.md` | +50 | ME-004 (~20) + ME-016 (~15) + ME-038 (~5) + ME-039 (~15) + ME-041 (~10) + ME-047 (~10) + ME-048 (~10) + ME-049 (~10) + ME-050 (~10) + ME-053 (~10) + ME-056 (~30) = **~145 lines** | **YES -- 2.9x over budget** |
| `MANIFEST.md` | +20 | ME-005 (~15) + ME-008 (~15) + ME-017 (~25) + ME-042 (~5) + ME-045 (~5) + ME-046 (~10) = **~75 lines** | **YES -- 3.75x over budget** |
| `pa-weaver.md` | (within orchestrator budget) | ME-002 (~15) + ME-009 (~10) + ME-019 (~15) + ME-057 (~10) = **~50 lines** | Moderate but NOT within total budget |
| `artifact-orchestrator.md` | +50 | ME-020 (~15) + ME-045 (~10) = **~25 lines** | WITHIN BUDGET |

**Total proposed additions across all artifacts: ~785 lines.**
**Total safe budget across all artifacts: ~240 lines.**
**Over-budget by: ~545 lines (3.3x the safe capacity).**

The list does not just exceed the capacity budget -- it exceeds it by more than three times. Implementing all 57 enrichments would push the gate runner even deeper past its compliance ceiling and degrade every other artifact.

### Which Enrichments Get Cut?

If we enforce the 240-line budget strictly, we can implement approximately:

- **Tier 1 BLOCKING** (ME-001 through ME-009): ~200 lines total. This ALONE nearly exhausts the budget.
- **After Tier 1:** ~40 lines remain. Enough for 2-3 SIGNIFICANT enrichments.
- **Tiers 3-7:** ZERO remaining capacity.

**Verdict: The 57-item list is actually a 12-15 item list wearing a trenchcoat.** The remaining 42-45 items cannot be safely implemented without first running a validation build and then starting a new subtraction-then-addition cycle.

---

## ATTACK 3: ACTIONABILITY TEST

For each BLOCKING enrichment, can I write the EXACT edit (old text -> new text)?

| ME | Actionable? | Problem |
|----|------------|---------|
| ME-001 | **YES** -- exact text provided, target line range clear | None |
| ME-002 | **YES** -- exact text provided, target file clear | None |
| ME-003 | **PARTIAL** -- "~70 lines" of Playwright JS referenced in another file but not included. "Full implementation sketch in gate-usability-audit.md Section 5" -- the master list says "go read this other file." | The BLOCKING enrichment with the MOST gate-runner impact does not contain its own implementation. An implementer must find and read gate-usability-audit.md, extract the relevant code, adapt it to the existing gate pattern, AND update 5-7 coordinated locations. This is a 2-hour task disguised as a single enrichment item. |
| ME-004 | **YES** -- exact text provided | None |
| ME-005 | **PARTIAL** -- "modify verdict logic section" with proposed text, but also says "Update gate-manifest.json L55-59" and "Update gate-runner-core.js verdict summary (L752-778)." Three files, no exact old->new diffs for the JS or JSON files. | Cross-file coordination described but not specified. An implementer must read 3 files, find the relevant sections, and write 3 coordinated diffs. |
| ME-006 | **PARTIAL** -- 4 separate changes across 2 files. Change 1 is exact CSS (good). Changes 2-4 are described but not diffed. Change 4 references "DPR validation" without exact code. | Four sub-changes of varying precision. |
| ME-007 | **YES** -- algorithm described clearly, modification to existing gate | Implementation requires reading existing GR-44 code to write the diff |
| ME-008 | **YES** -- exact text provided, single insertion point | None |
| ME-009 | **YES** -- exact text provided for both changes | None |

**Verdict: 5/9 BLOCKING enrichments are fully actionable. 4/9 are partially actionable, requiring an implementer to do significant discovery work.** ME-003 is the worst offender -- the single most impactful gate-runner change says "go read another file for the code." This should contain the implementation inline or it is aspirational, not actionable.

---

## ATTACK 4: ANTI-LOSS HONESTY

### Items Rated CAUTION That Are Actually RISK

| ME | Listed As | Should Be | Why |
|----|-----------|-----------|-----|
| ME-005 | CAUTION | **RISK** | Modifies M-23 (REBUILD Not FIX) which is the pipeline's most important safety mechanism. The "MECHANICAL exception" creates a new classification that MUST be auto-classified perfectly, or it becomes a loophole for shipping identity violations. The mitigation says "gate runner auto-classifies" but the classification criteria ("<=5 CSS lines AND no HTML structural change AND no design decision") require JUDGMENT about what constitutes a "design decision." This is a judgment rule disguised as a binary rule -- the exact failure mode the project's own research identifies. |
| ME-017 | CAUTION | **RISK** | Adds Phase 4 (a THIRD iteration type) to a pipeline that already exceeds its context window. The mitigation says "update circuit breaker" but does not acknowledge that context exhaustion already prevents completing Phases 0-3C in one session. Adding Phase 4 makes the pipeline even more likely to exhaust context before producing output. |
| ME-010 | CAUTION | **RISK** (low) | Splitting GR-05 into GR-05a/GR-05b creates a new gate ID that must be tracked in 5-7 coordinated locations (M-13). The enrichment says "keep isCold() unchanged" but the opacity pre-filter changes the code path BEFORE isCold runs, which means any bug in the pre-filter silently bypasses the entire warm palette check. |

### Multi-Mechanism Interactions

| ME | Mechanisms Touched | Interaction Risk |
|----|-------------------|-----------------|
| ME-003 (WCAG gate) | M-13 (binary rules), M-19 (gate verification), M-08 (dual-route) | New REQUIRED gate must appear in GR-48 arrays, gate-manifest.json, gate-runner-spec.md, MANIFEST routing, AND must calculate contrast using the existing page evaluation context. If the DOM walking code conflicts with `isRenderedElement()` helper, false negatives result silently. |
| ME-005 (MECHANICAL verdict) | M-23 (REBUILD Not FIX), M-13 (binary rules), M-19 (gate verification) | Changes verdict logic in THREE coordinated files. If any one file is updated without the other two, the pipeline has contradictory verdict rules. Gate-manifest.json says one thing, MANIFEST says another, gate-runner-core.js does a third. |
| ME-006 (screenshot validation) | M-21 (screenshot pre-capture), M-22 (9-auditor deployment), M-20 (fresh-eyes) | Adds a new gate BETWEEN capture and deployment. If this gate fails, the orchestrator must re-capture. But the re-capture with expanded CSS overrides might CHANGE the page's visual appearance (removing legitimate animations), creating a different page than what the builder intended. The enrichment does not address this tension. |
| ME-001 + ME-009 (experiential pass + aggregation) | M-22 (9-auditor deployment), M-04 (context isolation) | ME-001 adds a new mandatory section to ALL 9 auditors. ME-009 adds aggregation to the Weaver. If the experiential pass produces long reports (it will -- 9 auditors each reporting 3 categories of text legibility), the Weaver's input grows by ~100+ lines. The Weaver is not listed in the capacity analysis but its input is already all 9 PA reports. |

---

## ATTACK 5: CONFLICT DETECTION

### Conflicts the List Identified (5 items in CONFLICT REGISTER)

The list's conflict register is INCOMPLETE. It identifies 5 conflicts but misses at least 4 more:

### Conflicts the List MISSED

| Pair | Nature | Why It Matters |
|------|--------|---------------|
| **ME-001 (experiential pass) vs ME-037 (retire questions)** | ME-037 retires PA-06 and PA-07 to "create room" for experiential questions. But ME-001 adds the experiential pass as a MANDATORY new section, not as a replacement for any specific question. The room created by ME-037 is consumed by ME-021/ME-022/ME-023/ME-031 (new questions), not by ME-001. ME-001 is net additive regardless of retirements. | The list claims ME-037 creates room. But the room is consumed by 4 other enrichments, and ME-001 adds on top. |
| **ME-003 (WCAG gate) vs ME-014 (min font gate) vs ME-040 (text overflow gate)** | Three new gates adding ~180 lines to gate-runner-core.js, which has a zero-net-addition budget. The list treats each independently but their COMBINED impact is the problem. | Even with the safety analysis's recommended 150-line subtraction, 180 lines of new gates creates a net +30. And the subtraction targets (GR-33 through GR-42, GR-08) have not been validated as safe to remove. |
| **ME-005 (MECHANICAL exception) vs ME-008 (usability circuit breaker)** | ME-005 creates a MECHANICAL classification that triggers REFINE instead of REBUILD. ME-008 creates a BLOCKING-USABILITY classification that forces Fix #1. What happens when a mechanical identity failure AND a usability blocker coexist? The MECHANICAL exception says REFINE; the usability circuit breaker says the usability fix must be Fix #1. Does the page get REFINE (mechanical exception) or does it get a special REFINE-WITH-USABILITY-FIX-FIRST verdict? The interaction is undefined. | Two new classification systems interacting with the existing verdict logic creates a combinatorial explosion of verdict states. |
| **ME-019 (PA-05 as range) vs the entire tier/mode classification system** | PA-05 has been used as a discrete number throughout the project's history. The tier model (Floor/Middle/Ceiling/Flagship) maps discrete PA-05 scores to tiers. If PA-05 becomes a range (e.g., 2.5-3.0), which tier does that map to? 2.5 = CEILING? 3.0 = CEILING? The range straddles a tier boundary. The enrichment does not address how ranges interact with the tier system. | Changing PA-05 from scalar to range has downstream effects on every document that references PA-05 thresholds. |

---

## ATTACK 6: PRIORITY CHALLENGE

### Items That Should Be HIGHER

| ME | Current | Should Be | Why |
|----|---------|-----------|-----|
| ME-037 (retire questions) | MINOR (rank 36) | **SIGNIFICANT (rank 10-12)** | This is the ONLY enrichment that SUBTRACTS. The capacity analysis says "subtraction must precede addition." If retirement is ranked 36th and implemented 36th, all the additive enrichments (ranks 1-35) will have already exhausted the capacity budget before any room is freed. ME-037 should be implemented FIRST, not 36th. |
| ME-054 (remove dead CSS) | CONSIDER (rank 54) | **MINOR (rank 25-30)** | Same logic. This is subtraction. It should happen early. |

### Items That Should Be LOWER

| ME | Current | Should Be | Why |
|----|---------|-----------|-----|
| ME-003 (WCAG gate) | BLOCKING (rank 3) | **SIGNIFICANT (rank 12-15)** | A 70-line new gate added to a file at 68% compliance and zero capacity budget is not safe as a BLOCKING priority. The CONCEPT is BLOCKING (text contrast checking is critical). The IMPLEMENTATION is dangerous. It should be implemented only AFTER gate-runner subtraction (which is ranked nowhere in the list). |
| ME-017 (Phase 4) | SIGNIFICANT (rank 17) | **CONSIDER (rank 50+)** | Adding a third iteration type to a pipeline that already exceeds its context window is architectural overreach disguised as a process improvement. This should be an experiment, not an enrichment (the safety analysis explicitly says "Do NOT implement as enrichment" for the similar E-009). |

---

## ATTACK 7: WHAT'S MISSING

### Phase 2 Findings Not in ANY Enrichment

| Finding | Source | Why It Should Be an Enrichment |
|---------|--------|-------------------------------|
| **Gate-runner subtraction plan** | Enrichment-safety-analysis Section 5 | The safety analysis says "remove GR-33 through GR-42 and GR-08 specification text (~150 lines)." This is the MOST IMPORTANT prerequisite for Tier 1 implementation. It is not in the master list AT ALL. Without it, ME-003/ME-014/ME-040 cannot be safely added. |
| **Builder recipe subtraction** | Enrichment-safety-analysis Section 5 | "Remove duplicate component pattern descriptions from artifact-builder-recipe.md (~20-30 lines)." Needed before ME-038/039/041/047-056 can be safely added. Not in the master list. |
| **Opus vs Sonnet builder variable** | N-20 (cross-reference), MASTER-SYNTHESIS | Listed as "process question" in EXCLUDED but this is the SINGLE LARGEST unexamined confound. The enrichment list adds 620 lines of pipeline spec to address a quality gap that might be entirely explained by builder model selection. One experiment ($5-15, 1-2 hours) could render half the list unnecessary. |
| **DPR root cause fix** | All Phase 2 reports | ME-006 adds screenshot VALIDATION but no enrichment addresses the ROOT CAUSE: the CSS override in pa-deployment.md Step 3 is incomplete. PE-001 from pipeline-pa-enrichments proposes the fix (`visibility: visible !important; transform: none !important`), and ME-006 partially includes this, but the root cause fix should be its own top-priority item, not buried inside a larger screenshot-validation enrichment. |
| **Brief assembler behavior under pressure** | Enrichment-safety-analysis Section 3 | When the TC Brief Template grows, the brief assembler COMPRESSES (79-line content map -> ~12 lines in historical data). Multiple enrichments add to the brief template (ME-047 through ME-052) without acknowledging that the assembler will compress the additions away. No enrichment addresses how to prevent compression of critical new content. |

### Missing From Buddy Reports Specifically

The reservoir-extraction file (02) identifies 79 STILL-USEFUL items. The master list incorporates about 20 of them. Notable omissions:

| Reservoir Item | ID | Why Missing Matters |
|---------------|-----|---------------------|
| Break Zone 4 monotony (5 identical principle blocks) | VA-03 | Direct usability fix. The list has no enrichments targeting SPECIFIC content-level usability issues. |
| Collapsible treatment for long startup script | VA-09 | Content accessibility improvement. |
| Recovery command danger hierarchy | E03-03 | SAFETY concern -- destructive commands should look different from safe ones. This is higher priority than any pipeline process change. |
| Palette families instead of warm/cool binary | AR-02 | Process simplification that would reduce GR-05 false positives at the source rather than adding the complexity of GR-05a/GR-05b split. |

---

## ATTACK 8: PARADIGM CHALLENGE — WHY MORE LINES WON'T MAKE THINGS BETTER

### The Evidence

| Build | Spec Lines | PA-05 |
|-------|-----------|-------|
| Middle Experiment | ~100 | 4/4 |
| Gas Town V1 | ~610 | 3.5/4 |
| Gas Town V3 | ~3,600 | 3/4 (corrected: 2.5-3.0) |
| Flagship | ~963 | 1.5/4 |

The master list proposes adding ~620 net lines to the ~3,600 line pipeline, bringing it to ~4,220 lines. Based on the observed data, this predicts PA-05 of 2.5-3.0 (approximately where V3 already is) or potentially LOWER.

### The Counterargument

The list will argue: "These 620 lines are DIFFERENT. They add usability checking, which was absent. Previous additions added compliance checking, which was the problem."

This argument has merit but has THREE weaknesses:

1. **Format matters more than content.** The enrichment-safety-analysis shows compliance tracks FORMAT (recipe vs monolith), not LINE COUNT. Adding 620 lines of recipe-format usability instructions is better than 620 lines of checklist-format compliance rules. But the gate-runner additions (ME-003, ME-014, ME-040) are NOT recipe format -- they are monolith-format JavaScript code added to a file already at 68% compliance. The usability framing DOES NOT APPLY to gate code.

2. **The gate runner absorbs most of the additions.** ~310 of the ~620 proposed lines go to gate-runner-core.js, the file with the LOWEST compliance and ZERO capacity budget. The usability-first framing applies to the PA and builder recipe enrichments. The gate runner enrichments are just more code piled onto an already-overloaded specification.

3. **The confounded variable is still unexamined.** V3 used an Opus builder. Middle used a different configuration entirely. The 3,600-line V3 pipeline + Opus builder produced PA-05 3/4. A 100-line pipeline + Opus builder might produce 4/4. A 4,220-line pipeline + Opus builder might produce 2.5/4. We genuinely do not know because the model variable has never been isolated.

### Why It Might Still Work (Honest Assessment)

The enrichments most likely to improve quality are NOT the ones that add lines -- they are the ones that CHANGE WHAT EXISTING LINES DO:

- ME-002 (usability priority override) -- changes EXISTING priority model, ~15 lines, high leverage
- ME-005 (MECHANICAL exception) -- changes EXISTING verdict logic, ~15 lines, high leverage
- ME-010/011 (GR-05/GR-06 fixes) -- fixes EXISTING gates, minimal net lines
- ME-024/025/026 (gate downgrades) -- REDUCES severity of existing gates, zero net lines

These 6-8 enrichments that MODIFY existing behavior (rather than adding new behavior) collectively use ~50 lines and have the highest probability of improving quality. The other 49 enrichments that ADD new behavior use ~570 lines and have uncertain-to-negative expected value.

---

## STRUCTURAL RECOMMENDATION

### What the List Should Look Like

The master list should be reorganized into three phases:

**Phase A: SUBTRACT FIRST (Priority 0 -- implement before anything else)**
1. Remove GR-33 through GR-42 and GR-08 from gate-runner-core.js (-150 lines)
2. Remove duplicate content from artifact-builder-recipe.md (-30 lines)
3. ME-037: Retire 4 PA questions (-20 lines)
4. ME-054: Remove dead CSS (-15 lines)
5. ME-024/025/026/027: Downgrade 4 gates (0 net lines, reduces REQUIRED gate burden)

**Phase B: MODIFY EXISTING BEHAVIOR (Priority 1 -- highest leverage enrichments)**
6. ME-002: Usability priority override in Weaver
7. ME-005: MECHANICAL exception in verdict logic
8. ME-010: Split GR-05 (fix existing false positive)
9. ME-011: Fix GR-06 (fix existing false positive)
10. ME-012: Fix GR-14 (fix existing false positive)
11. ME-013: Fix GR-09 (fix existing implementation bug)
12. ME-007: Fix GR-44 (fix existing false negative)

**Phase C: ADD NEW BEHAVIOR (Priority 2 -- only after Phase A subtraction + Phase B modification + validation build)**
13-57. All remaining enrichments, subject to capacity budget AFTER subtraction

**Between Phase B and Phase C: RUN A VALIDATION BUILD.**

If the Phase A subtraction + Phase B modification improves PA-05 from 3/4 to 3.5/4, Phase C may be unnecessary. If PA-05 stays at 3/4, Phase C additions have evidence supporting them.

### Items to CUT Entirely

| ME | Why Cut |
|----|---------|
| ME-017 (Phase 4) | Architectural change, not enrichment. Safety analysis says "run as experiment." |
| ME-040 (text overflow gate) | MINOR severity, 60 lines on a zero-budget artifact. Low ROI. |
| ME-044 (document experiential pass) | Documentation, not behavior change. Write it after the protocol is validated. |
| ME-056 (codify CSS patterns as techniques) | ~30 lines of recipe guidance for patterns already in reference files. Nice-to-have but not within budget. |

### Items to SPLIT From the List Into a Separate "Post-Validation" Backlog

All 11 CONSIDER items (ME-047 through ME-057), all 5 tracking/documentation items (ME-042 through ME-046), and all PA question additions (ME-021 through ME-023, ME-031).

This reduces the actionable list from 57 items to ~25 items, and the net line budget from ~620 to ~200 -- just within the ~240 capacity budget.

---

## SUMMARY SCORECARD

| Attack | Finding | Severity |
|--------|---------|----------|
| 1. Complexity ratchet | 42:1 add:remove ratio. List reproduces the disease. | **CRITICAL** |
| 2. Capacity budget | 785 proposed lines vs 240 safe budget (3.3x over) | **CRITICAL** |
| 3. Actionability | 5/9 BLOCKING items fully actionable, 4/9 partial | SIGNIFICANT |
| 4. Anti-loss honesty | 3 CAUTION items should be RISK; 4 multi-mechanism interactions unacknowledged | SIGNIFICANT |
| 5. Conflict detection | 4 missing conflicts, including MECHANICAL vs usability circuit breaker interaction | SIGNIFICANT |
| 6. Priority challenge | Subtraction items ranked 36th/54th when they should be 1st-5th; WCAG gate ranked 3rd when it should be 12-15th | **CRITICAL** |
| 7. Missing items | Gate-runner subtraction plan (THE prerequisite) is completely absent from the list | **CRITICAL** |
| 8. Paradigm challenge | 620 new lines on a pipeline where 100 lines -> 4/4 and 3,600 lines -> 3/4. Confounded variable (Opus builder) still unexamined. | SIGNIFICANT |

**4 CRITICAL findings, 4 SIGNIFICANT findings.** The list is well-researched, well-sourced, and well-organized -- but it needs structural surgery before implementation. The surgery is: (1) add the subtraction plan as Priority 0, (2) reorder so subtractions and modifications precede additions, (3) enforce the 240-line capacity budget by splitting into phases with validation builds between them, (4) cut or defer ~32 items that exceed budget.

---

*The master enrichment list identifies real problems (priority inversion, experiential gap, gate false positives) and proposes real solutions. But it proposes 57 solutions when the capacity budget supports 12-15, and it proposes 42 additions when the dominant finding says more spec = worse output. The list needs to be half as long and twice as ruthless about what it cuts.*
