# 06 -- Failure Mode Reproduction Audit

**Agent:** Failure Mode Reproduction Auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** All 4 change manifests (01-brief-changes, 02-skill-changes, 03-gate-changes, 04-pa-changes)
**Total edits audited:** 32 (10 brief + 12 skill + 8 gate + 2 PA)
**Failure modes tested:** 3 (Complexity Ratchet, Guardrail Factory, Sub-Perceptual CSS Waste)

---

## 1. SUMMARY VERDICT

**PASS -- with 4 CAUTION items and 1 WARNING item requiring attention before application.**

Aggregate risk score: 9 / 96 possible (32 edits x 3 failure modes = 96 slots, each 0-3)

The manifests are well-designed. The authors clearly internalized the failure mode documentation and built anti-regression checks into each edit. However, the gate-runner manifest (03) introduces significant line count growth that requires scrutiny, and one cross-file interaction creates a mild complexity ratchet risk.

---

## 2. PER-EDIT ASSESSMENT TABLE

### 2.1 Brief Changes (01-brief-changes.md) -- 10 Edits

| Edit | Description | FM1 (Ratchet) | FM2 (Guardrail) | FM3 (Sub-Perceptual) | Total | Verdict |
|------|-------------|---------------|-----------------|---------------------|-------|---------|
| B-01 | Channel-threshold perception table (E4) | 0 | 0 | 0 | 0 | SAFE |
| B-02 | Boundary-by-boundary CSS recipe (E2) | 0 | 0 | 0 | 0 | SAFE |
| B-03 | Stack relationship bridge (E1) | 0 | 0 | 0 | 0 | SAFE |
| B-04 | DESIGNED/COMPOSED naming (E5) | 0 | 0 | 0 | 0 | SAFE |
| B-05 | Enhancement channel CSS guidance (E6) | 0 | 0 | 0 | 0 | SAFE |
| B-06 | Component-internal multi-coherence (E9) | 0 | 0 | 0 | 0 | SAFE |
| B-07 | Parametric echo CSS recipe (E10) | 0 | 0 | 0 | 0 | SAFE |
| B-08 | Character scale register inventory (E14) | 0 | 1 | 0 | 1 | CAUTION |
| B-09 | Fix cycle compositional memory (E-RETURN) | 0 | 0 | 0 | 0 | SAFE |
| B-10 | Boundary-grouped verification pauses (E-CONTRA) | 0 | 0 | 0 | 0 | SAFE |

**B-08 CAUTION Detail (FM2):** The 5% CSS budget cap for character scale ("Budget: <= 5% of total CSS lines") is a constraint without a paired recipe. It tells the builder what NOT to do (spend too much on character-scale CSS) but not what TO do with that budget. The manifest author acknowledges this is "constraint-adjacent" and pairs it with 3 named CSS properties (font-size, font-weight, letter-spacing >= 0.03em), which partially mitigates. Score 1 not 2 because the pairing is present, just weak.

**Remediation for B-08:** Add 3-5 words: "Budget: <= 5% of total CSS lines (typically 15-25 lines for font-size, font-weight, or letter-spacing >= 0.03em on 2-3 key elements)." This converts the cap from a bare constraint into a sized recipe.

**Brief subtotal:** 1/30 (excellent)

---

### 2.2 Skill Changes (02-skill-changes.md) -- 12 Edits

| Edit | Description | FM1 (Ratchet) | FM2 (Guardrail) | FM3 (Sub-Perceptual) | Total | Verdict |
|------|-------------|---------------|-----------------|---------------------|-------|---------|
| S-01 | Add >= 14 total to DG-4 (B1) | 0 | 0 | 0 | 0 | SAFE |
| S-02 | Micro-gate approach (merged into S-05) | -- | -- | -- | -- | N/A |
| S-03 | Add BG-1/BG-2 references (B3) | 0 | 0 | 0 | 0 | SAFE |
| S-03B | Add BG-1/BG-2 verification section (B3) | 0 | 0 | 0 | 0 | SAFE |
| S-04 | Route gate results to weaver (B4) | 0 | 0 | 0 | 0 | SAFE |
| S-05 | Checkpoint restructure + threshold align (B2+E3) | 0 | 0 | 0 | 0 | SAFE |
| S-06 | Fix DG-4 build-plan.yaml reference (B5) | 0 | 0 | 0 | 0 | SAFE |
| S-07 | Resolve TeamCreate -> Task tool (B6) | 0 | 0 | 0 | 0 | SAFE |
| S-08 | Compression -- shorten model warning | 0 | 0 | 0 | 0 | SAFE |
| S-09 | Weaver compositional vocabulary (E15) | 0 | 0 | 0 | 0 | SAFE |
| S-10 | Fix cycle recipe structure (E16) | 0 | 0 | 0 | 0 | SAFE |
| S-11 | Compositional framing for reference files | 0 | 0 | 0 | 0 | SAFE |
| S-12 | Fix cycle compositional memory | 0 | 0 | 0 | 0 | SAFE |

**Skill subtotal:** 0/33 (excellent)

**Notes:**
- S-05 is the most impactful edit (highest-leverage per 06-orchestrator-deep-dive) and correctly resolves a documented contradiction. The threshold alignment (ARIA 3->5, borders 2->3) eliminates a mismatch between SKILL.md and gate-runner.md, which is bug-fixing, not ratcheting.
- S-10 adds a "Compositional Context" section to fix instructions (+5 lines). This COULD be a ratchet risk, but: (a) it replaces the empty slot where compositional context should already exist, (b) it includes a concrete example ("SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic..."), and (c) it addresses the strongest finding from the concept-flow trace (return-path extinction). The recipe framing makes it FM2-safe.
- S-09 adds compositional vocabulary to the weaver prompt (+3 lines). This is an instruction to an intermediary (weaver), not a builder-facing constraint. The vocabulary (channel names, scale names, transition types) consists of terms already defined in the conventions brief. No new concepts introduced.

---

### 2.3 Gate-Runner Changes (03-gate-changes.md) -- 8 Edits

| Edit | Description | FM1 (Ratchet) | FM2 (Guardrail) | FM3 (Sub-Perceptual) | Total | Verdict |
|------|-------------|---------------|-----------------|---------------------|-------|---------|
| G-01 | SC-00 zone selector validation | 1 | 0 | 0 | 1 | CAUTION |
| G-02 | Fix SC-14 letter-spacing comment (B8) | 0 | 0 | 0 | 0 | SAFE |
| G-03 | Phantom channels documentation (E-PHANTOM) | 1 | 0 | 0 | 1 | CAUTION |
| G-04 | SC-00 in execution groups | 0 | 0 | 0 | 0 | SAFE |
| G-05 | Fix recipe compositional context | 1 | 0 | 0 | 1 | CAUTION |
| G-06 | Micro-gate threshold audit (B2) | 0 | 0 | 0 | 0 | SAFE |
| G-07 | SC-00 in gate summary table | 0 | 0 | 0 | 0 | SAFE |
| G-08 | SC-00 in gate-to-PA handoff | 0 | 0 | 0 | 0 | SAFE |

**G-01 CAUTION Detail (FM1):** SC-00 adds ~65 lines to gate-runner.md. This is the single largest addition across all 4 manifests. The gate-runner is already 993 lines. Adding 65 lines brings it to ~1,058. However:
- Gate-runner is NOT builder-visible (the builder never reads it; the orchestrator runs it).
- The 450-line cap applies to builder-facing files (brief, SKILL.md), not verification infrastructure.
- SC-00 solves the "#1 single point of failure" (B7) -- every per-zone gate depends on zone selectors.
- The 65 lines include a full JavaScript implementation with fallback logic, which IS the fix recipe (not a guardrail).

Score 1 not 2 because: the lines are operationally justified, but 65 lines for one gate is proportionally large. Could the fallback logic be compressed? The secondary selector fallback chain (3 options with comments) could be ~20 lines shorter if comments were trimmed.

**Remediation for G-01:** Consider compressing the SC-00 JavaScript implementation from ~50 lines to ~35 lines by removing explanatory comments within the code block (comments belong in the prose section above, not inline). This preserves functionality while reducing line count.

**G-03 CAUTION Detail (FM1):** Phantom channel documentation adds ~18 lines. These are documentation-only (no new verification logic), but they are documentation of a DEFERRED decision with 3 options listed. Documenting deferred decisions in the gate-runner is unusual -- it turns an execution spec into a design document. Score 1 because it is useful context but mixes concerns.

**Remediation for G-03:** Move the "Status: DEFERRED. Options for future calibration" block (7 lines) to a separate decision log or the execution report. Keep only the "CHANNEL NOTE" factual description (11 lines) in gate-runner.md. This reduces the addition by 7 lines and keeps the gate-runner as an execution spec.

**G-05 CAUTION Detail (FM1):** Fix recipe compositional context adds ~35 lines. This includes a section-reference mapping table (10 rows) and a JSON format extension. The table is useful -- it routes the builder back to the conventions brief during fix cycles. But 35 lines is significant for what is essentially a lookup table + format extension. Score 1 because the content is high-value but the presentation is verbose.

**Remediation for G-05:** Compress the mapping table from 10 detailed rows to a compact format. Each row currently has a descriptive section reference; these could be shortened to just the section number and name (removing the quoted excerpt), saving ~10 lines.

**Gate-runner subtotal:** 4/24 (good, but highest of the 4 files)

---

### 2.4 PA Changes (04-pa-changes.md) -- 2 Immediate Edits

| Edit | Description | FM1 (Ratchet) | FM2 (Guardrail) | FM3 (Sub-Perceptual) | Total | Verdict |
|------|-------------|---------------|-----------------|---------------------|-------|---------|
| P-01 | Modify PA-44 metaphor spatial coverage (B9) | 0 | 0 | 0 | 0 | SAFE |
| P-02 | Sharpen PA-63 parametric echo | 0 | 0 | 0 | 0 | SAFE |

**PA subtotal:** 0/6 (excellent)

**Notes:**
- Both edits modify EXISTING questions rather than adding new ones. This is exactly the right approach -- the manifest author explicitly follows Report 11's "Do NOT add new PA questions" verdict.
- PA-44 expansion adds ~15 words to an existing question. PA-63 expansion adds ~20 words to a question and extends the scoring criteria.
- 3 deferred PA questions (PA-68/69/70) are pre-registered but NOT applied. This is the TEST FIRST approach the master synthesis recommended. No FM risk from pre-registration.

---

## 3. DANGER AND WARNING ITEMS

### No DANGER (3) items found across all 32 edits.

### WARNING (2) items: 1 found

**WARNING W-01: Cross-File Complexity Ratchet (gate-runner.md total growth)**

Score: 2

The gate-runner manifest adds ~133 lines (993 -> ~1,126). While no single edit is DANGER-level, the aggregate growth is substantial:
- SC-00 definition: +65 lines
- Fix recipe compositional context: +35 lines
- Phantom channel documentation: +18 lines
- Execution groups update: +10 lines
- Summary table + handoff: +5 lines

**Why this matters for FM1:** The complexity ratchet operates through accumulation. Each addition is individually justified. But 133 lines of net growth to a 993-line file is a 13.4% increase. The gate-runner was designed at 993 lines; it will operate at 1,126 lines. No lines are removed.

**Why this is WARNING not DANGER:** The gate-runner is NOT builder-visible. It is infrastructure. The 450-line cap and the empirical evidence about text length apply to builder-facing documents (brief, spawn prompt), not verification infrastructure. A longer gate-runner does not produce worse builder output -- it produces better verification. The 963-line master prompt failed because the BUILDER received 963 lines. Here, the builder sees 0 of the 133 new lines.

**Mitigation recommendations:**
1. Apply the 3 CAUTION remediations above (estimated -25 to -35 lines saved)
2. Identify compression targets in the existing gate-runner (verbose comments, duplicated explanations between gates)
3. Set a soft cap for gate-runner.md at 1,100 lines. If the final count exceeds this, compress before committing.

---

## 4. NET COMPLEXITY RATCHET CALCULATION

### Lines Added vs Removed (All 4 Files)

| File | Current Lines | Lines Added | Lines Removed/Compressed | Net Change | Final Lines | Budget |
|------|--------------|-------------|--------------------------|------------|-------------|--------|
| conventions-brief.md | 403 | +38 | 0 | +38 | 441 | 450 cap (9 remaining) |
| SKILL.md | 415 | +16 | -1 (compression) | +15 | 430 | 450 cap (20 remaining) |
| gate-runner.md | 993 | ~133 | 0 | ~+133 | ~1,126 | No formal cap |
| PA questions (SKILL.md + flagship-pa) | ~1,132 combined | ~10 (modifications) | 0 | ~+10 | ~1,142 | N/A (modifications only) |
| **TOTAL** | **~2,943** | **~197** | **-1** | **~+196** | **~3,139** |  |

### Builder-Visible Line Growth

| File | Current | Final | Delta | % Growth |
|------|---------|-------|-------|----------|
| conventions-brief.md (builder reads fully) | 403 | 441 | +38 | +9.4% |
| SKILL.md spawn prompt (builder receives ~8 lines) | ~8 | ~10 | +2 | +25% |
| **Builder total visibility** | ~411 | ~451 | +40 | +9.7% |

**Verdict:** Builder-visible content grows by ~40 lines (9.7%). This is within the 450-line cap and well below the pathological growth thresholds. The conventions brief goes from 403 to 441 (9 lines of remaining budget -- tight but acceptable).

### Non-Builder Line Growth

| File | Current | Final | Delta | Purpose |
|------|---------|-------|-------|---------|
| gate-runner.md | 993 | ~1,126 | +133 | Verification infrastructure (orchestrator-only) |
| SKILL.md (orchestrator sections) | ~407 | ~420 | +13 | Orchestrator routing, weaver instructions |

**Verdict:** Non-builder infrastructure grows by ~146 lines. This is operationally justified (SC-00 fixes the #1 single point of failure, fix recipe context addresses return-path extinction). But the gate-runner growth should be compressed per the mitigation recommendations.

---

## 5. NET GUARDRAIL-TO-PLAYBOOK RATIO

### conventions-brief.md (Before vs After)

| Metric | Before | After | Direction |
|--------|--------|-------|-----------|
| Constraint statements | ~58 | ~59 (+1: 5% CSS budget cap in B-08) | +1 |
| Recipe statements | ~29 | ~35 (+6: threshold table, boundary CSS recipe, parametric echo recipe, channel CSS properties, fix cycle recipe, verification restructure) | +6 |
| Ratio | 2.0:1 | 1.69:1 | IMPROVED |

**Verdict:** The brief's guardrail-to-playbook ratio IMPROVES from 2.0:1 to ~1.7:1. This is the correct direction. The 6 new recipe elements are:
1. Channel-threshold perception table (6 recipe rows)
2. Boundary CSS code example (concrete CSS block)
3. Parametric echo values (16px 20px, 32px 24px, 8px, 16px)
4. Enhancement channel CSS properties (:hover background-color, transition-duration)
5. Fix cycle recipe step ("re-read conviction statement before writing CSS")
6. Boundary-grouped verification pauses (recipe restructure)

Only 1 new constraint was added (5% character-scale budget cap), and it is paired with CSS properties.

### SKILL.md (Before vs After)

| Metric | Before | After | Direction |
|--------|--------|-------|-----------|
| Constraint statements (spawn prompt) | ~12 | ~13 (+1: ARIA 3->5 is threshold change, not new constraint) | +1 (threshold tightening) |
| Recipe statements (spawn prompt) | ~4 | ~6 (+2: compositional framing for reference files, compositional memory instruction) | +2 |
| Ratio (spawn prompt) | 3.0:1 | 2.2:1 | IMPROVED |

### gate-runner.md (Before vs After)

Gate-runner is verification infrastructure. The guardrail/playbook framework applies differently here -- gates ARE constraints by definition. The relevant metric is whether gates include fix recipes.

| Metric | Before | After | Direction |
|--------|--------|-------|-----------|
| Gates with fix recipes | 15/21 (71%) | 16/22 (73%) -- SC-00 includes full fix recipe with HTML example | IMPROVED |
| Gates with brief_section reference | 0/21 (0%) | Up to 22/22 (100%) via format extension | IMPROVED |

**Verdict:** All 3 files improve their respective ratios. No file moves in the wrong direction.

---

## 6. CROSS-FILE FAILURE MODE INTERACTIONS

### Interaction 1: Brief line budget + DEFER package timing

**Risk:** CAUTION (1)

The brief goes from 403 to 441 lines. Only 9 lines of budget remain. The master synthesis says "apply DEFER package if PA-05 2.5-3.0" -- but the DEFER edits are ALREADY INCLUDED in the 441 count (Edits 3, 4, 5, 6, 7, 8 are marked DEFER). The manifest author has correctly included them in the budget calculation. However, if additional brief edits are discovered after the first /build-page run (e.g., from PA feedback), the 9-line remaining budget is extremely tight.

**Mitigation:** Reserve the 9 lines as a buffer. Do not commit to any post-test brief edits that exceed 5 lines without first identifying compression targets in the existing brief.

### Interaction 2: SKILL.md checkpoint thresholds + gate-runner micro-gates

**Risk:** SAFE (0)

S-05 (checkpoint restructure) and G-06 (micro-gate threshold audit) are independently consistent. S-05 aligns SKILL.md thresholds to gate-runner values. G-06 confirms gate-runner values are internally consistent. No circular dependency or contradiction.

### Interaction 3: Gate-runner SC-00 + SKILL.md gate table + brief zone markup

**Risk:** CAUTION (1)

SC-00 (G-01) creates a new pre-gate that requires zone selectors to match specific patterns. The gate-runner manifest notes cross-file dependencies: SKILL.md must add SC-00 to the gate table, brief should document zone markup requirements. These cross-file edits are NOTED but not SPECIFIED in the other manifests. If the brief manifest is applied without the zone markup documentation, builders may not know what markup the gate expects.

**Mitigation:** The SKILL.md manifest (02) does not include the SC-00 gate table addition. The brief manifest (01) does not include zone markup documentation. These are gaps. The gate manifest correctly identifies them in the "Cross-File Dependency List" (lines 516-527), but the other manifests do not have corresponding edits. **RECOMMENDATION:** Add a 3-line zone markup note to the brief (consuming 3 of the 9 remaining lines, leaving 6) and add SC-00 to the SKILL.md gate table (consuming 1-2 lines of the 20 remaining lines).

### Interaction 4: Fix cycle recipe enrichment (S-10 + G-05 + B-09)

**Risk:** SAFE (0)

Three edits address the fix cycle from different angles:
- B-09 (brief): "Re-read your conviction statement before writing CSS" (builder-facing habit)
- S-10 (SKILL.md): Compositional context section in fix instructions (orchestrator template)
- G-05 (gate-runner): brief_section references in fix recipes (gate infrastructure)

These are COMPLEMENTARY, not duplicative. B-09 is a behavioral prompt. S-10 structures the information the builder receives. G-05 provides the routing data that S-10 uses. Together they create a coherent fix cycle path: gate fails -> gate-runner provides brief_section reference -> orchestrator includes it in fix template -> builder re-reads brief section + conviction statement. No edit can achieve this alone.

### Interaction 5: Combined line growth creates invisible cognitive load increase

**Risk:** CAUTION (1)

The brief grows +38 lines, SKILL.md grows +15 lines. Both are within caps. But: the 403-line brief was assessed as "near cognitive load ceiling" (Report 07) at 403 lines. Growing to 441 is 9.4% more text for the builder to absorb. The edits are individually well-crafted (recipe-format, world-description, concrete CSS), but the builder's reading time and cognitive absorption are not tested.

**Mitigation:** This is exactly what the master synthesis's TEST FIRST protocol addresses. If PA-05 >= 3.0 with the enriched brief, cognitive load is not a problem. If PA-05 < 2.5, the problem may BE the additional cognitive load. The decision tree handles this interaction correctly.

---

## 7. FAILURE MODE 3 DEEP DIVE: Sub-Perceptual CSS Waste

This failure mode requires special attention because the Flagship experiment spent 22% of its CSS budget (227 lines) on invisible micro-typography effects.

### Edits that define thresholds (checked against perception limits):

| Edit | Threshold | Above Perception? | Verdict |
|------|-----------|-------------------|---------|
| B-01 | >= 15 RGB delta (background) | YES -- 15 RGB is the documented perception floor | SAFE |
| B-01 | >= 2px font-size OR >= 100 weight | YES -- 2px size and 100 weight deltas are perceptible | SAFE |
| B-01 | >= 24px padding delta | YES -- 24px is perceptible at any viewport | SAFE |
| B-01 | >= 0.5px letter-spacing | Documented as 0.03em (roughly 0.5px at 16px base), which is the perceptual floor | SAFE |
| B-08 | letter-spacing >= 0.03em | YES -- at the perceptual floor, not below it | SAFE |
| B-08 | 5% CSS budget cap for character scale | Not a threshold but a BUDGET constraint -- directly prevents the 22% CSS waste pattern | SAFE (anti-FM3) |
| S-05 | >= 5 ARIA landmarks | Not a perception threshold (accessibility count) | N/A |
| S-05 | >= 3 border configurations | Not a perception threshold (structural count) | N/A |
| S-05 | >= 3 channels same direction | Multi-coherence count, not a perception threshold | N/A |
| G-02 | 0.025em letter-spacing floor | YES -- confirmed correct at perception floor | SAFE |

**No edit defines a threshold below human perception limits.** The perception thresholds in B-01 consolidate values that already exist in the brief and gate-runner. The 5% CSS budget cap in B-08 is specifically ANTI-FM3 -- it prevents the Flagship's 22% character-scale misallocation.

### Edits that could direct builder attention toward micro-typography:

| Edit | Risk | Reasoning |
|------|------|-----------|
| B-08 | 0 | Names "font-size, font-weight, letter-spacing >= 0.03em" as the ONLY character-scale tools, AND caps budget at 5%. This CONSTRAINS character-scale work rather than encouraging it. |
| B-07 | 0 | Parametric echo recipe uses padding values (16px/32px), not micro-typography. |
| B-01 | 0 | Perception table shows letter-spacing is >= 2px OR >= 100 weight -- above-perception thresholds only. |

**Verdict on FM3:** Zero reproduction risk. The manifests actively PREVENT sub-perceptual waste through the 5% budget cap and the perception threshold table. No edit directs builder attention toward refinement gradients or micro-typography.

---

## 8. FINAL SCORECARD

| Category | Score | Max | Rating |
|----------|-------|-----|--------|
| Brief edits (10) | 1 | 30 | EXCELLENT |
| Skill edits (12) | 0 | 33 | EXCELLENT |
| Gate edits (8) | 4 | 24 | GOOD |
| PA edits (2) | 0 | 6 | EXCELLENT |
| Cross-file interactions (5) | 2 | 15 | GOOD |
| **TOTAL** | **7** | **108** | **EXCELLENT (6.5%)** |

### Items Requiring Action Before Application

| ID | Type | File | Remediation | Priority |
|----|------|------|-------------|----------|
| W-01 | WARNING | gate-runner.md | Compress SC-00 implementation, move deferred options out, compress fix recipe table. Target: -25 to -35 lines. | MEDIUM |
| B-08 | CAUTION | conventions-brief.md | Add sizing guidance to 5% budget cap ("typically 15-25 lines on 2-3 key elements") | LOW |
| G-01 | CAUTION | gate-runner.md | Compress SC-00 JavaScript by removing inline comments (move to prose section) | MEDIUM |
| G-03 | CAUTION | gate-runner.md | Move "DEFERRED options" to decision log, keep only factual channel note | LOW |
| G-05 | CAUTION | gate-runner.md | Compress section-reference mapping table to compact format | LOW |
| I-03 | CAUTION | Cross-file | Add zone markup note to brief (3 lines) + SC-00 row to SKILL.md gate table (1-2 lines) | MEDIUM |

### What This Audit Does NOT Cover

1. **Correctness of edit content** -- I verify edits don't reproduce failure modes; I don't verify they are technically correct CSS or valid gate logic.
2. **Quality improvement potential** -- I verify edits aren't harmful; I don't predict whether they will improve PA-05.
3. **Failure modes 4-10 from Report 07** -- I was tasked with the 3 primary failure modes. Report 07's full 10-mode analysis covers additional risks (checklist trap, 660:1 meta ratio, compression loss, binary compliance, CSS budget misallocation, inverted quality routing, 75-line builder cap, return-path extinction).
4. **The DEFERRED PA questions (PA-68/69/70)** -- These are pre-registered but not applied. If applied later, they would need a separate FM audit.

---

*End of failure mode reproduction audit. 06-failure-mode-audit.md complete.*
