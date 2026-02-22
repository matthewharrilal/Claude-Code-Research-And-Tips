# Surgical Placement Audit (v2 -- Complete)

**Agent:** surgical-auditor-2 (Opus 4.6, respawn)
**Date:** 2026-02-20
**Scope:** All 32 proposed edits across ALL 4 change manifests (v1 covered 3; this covers 4)
**Files verified against:** conventions-brief.md (403 lines), SKILL.md (416 lines), gate-runner.md (993 lines), flagship-pa-questions.md (145 lines), perceptual-auditing/SKILL.md (988 lines)

**Methodology:** For each edit, I read the proposed change manifest AND the actual target file at the specified line numbers to verify: (1) correct file per architecture table, (2) correct line/location, (3) cross-file dependencies complete, (4) no unintended duplication.

---

## MANIFEST 1: conventions-brief.md (01-brief-changes.md) -- 10 edits

---

### BRIEF-EDIT 1: Channel-Threshold Perception Table (E4)
File placement: **CORRECT** -- Perception thresholds mapped to CSS properties are builder world-description. conventions-brief.md Section 4 (MULTI-COHERENCE) is the right home.
Location in file: **CORRECT** -- After line 103 ("Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four."). VERIFIED at actual file: line 103 contains exactly this text. Inserting the perception table after the channel enumeration + primary/enhancement distinction gives the builder an immediate lookup table.
Cross-file deps: **COMPLETE** -- Consolidates thresholds already in gate-runner.md: SC-09 (>=15 RGB, line 179), SC-14 (>=0.025em, line 433), SC-13 (>=24px padding delta, line 376), SC-15 (border config change). No gate edits needed.
Duplication: **MINOR/ACCEPTABLE** -- The >= 15 RGB threshold appears at brief lines 57, 63, 237. The table consolidates scattered prose into one reference card. Different format (table vs prose), same values. Acceptable.
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 2: Boundary-by-Boundary CSS Recipe Example (E2)
File placement: **CORRECT** -- A CSS code example with concrete values belongs in the builder's brief (PROCESS section), not in SKILL.md (orchestrator) or gate-runner.md (verification JS).
Location in file: **CORRECT** -- After line 386 ("At each zone boundary, set all shifting channels together: background + typography + spacing + borders. Verify your transition plan values against the perception thresholds as you go."). VERIFIED: line 386 contains exactly this text. The recipe immediately follows the instruction it demonstrates.
Cross-file deps: **COMPLETE** -- SKILL.md Edit 5 restructures builder checkpoints to boundary-grouped (complementary). No gate-runner changes needed.
Duplication: **NONE** -- No CSS recipe example exists anywhere in the brief.
Verdict: **APPROVED**
Notes: Edit 10 modifies lines 388-392 (same PROCESS section). After Edit 2 inserts +10 lines, Edit 10's targets shift. Manifest handles this via dependency ordering (Edit 10 last).

---

### BRIEF-EDIT 3: Stack Relationship Bridge (E1)
File placement: **CORRECT** -- World-description text explaining relationship between Sections 3-5 belongs in the brief.
Location in file: **CORRECT** -- After line 93 ("At every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction."). VERIFIED: line 93 is exactly this. Placing the bridge at top of Section 4 before channel details orients the builder.
Cross-file deps: **COMPLETE** -- No cross-file edits needed.
Duplication: **NONE** -- The relationship is currently implicit.
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 4: DESIGNED/COMPOSED Naming Convention (E5)
File placement: **CORRECT** -- Quality level naming belongs in conventions-brief.md Section 9B (QUALITY FLOOR).
Location in file: **CORRECT** -- After line 237 ("3-5 zones with >= 15 RGB background delta between each"). VERIFIED: line 237 is the last bullet of the quality floor list. Naming conventions after the floor list is logical.
Cross-file deps: **COMPLETE** -- DESIGNED/COMPOSED already appear at line 63. No cross-file impact.
Duplication: **MINOR/ACCEPTABLE** -- Channel shifts threshold (3=DESIGNED, 5+=COMPOSED) restates line 63 values, but extends naming to layout topologies and strong scales (genuinely new).
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 5: Enhancement Channel CSS Property Guidance (E6)
File placement: **CORRECT** -- Channel definitions in conventions-brief.md Section 4.
Location in file: **CORRECT** -- Lines 100-101. VERIFIED: line 100 = "5. **Behavioral** -- hover states, transition timing change" and line 101 = "6. **Material** -- surface treatment or component density change". Exact lines to modify.
Cross-file deps: **COMPLETE WITH NOTE** -- gate-runner.md SC-13 (lines 339-340) defines its own measurement proxies for channels 5-6 ("interactivity presence change" for Ch5, "background-image or texture change" for Ch6). The brief's new definitions (":hover background-color, transition-duration, cursor" for Ch5; "component type mix, visual texture density" for Ch6) describe the CONCEPT while the gate measures a PROXY. Acceptable divergence but unlabeled. Edit 1 (perception table) should be applied AFTER Edit 5 so the table references updated definitions.
Duplication: **NONE** -- Replaces existing definitions.
Verdict: **APPROVED**
Notes: Minor brief-vs-gate-runner definitional divergence for channels 5-6. Not a contradiction (concept vs measurement), but could benefit from a brief parenthetical noting the gate measures a subset programmatically.

---

### BRIEF-EDIT 6: Component-Internal Multi-Coherence Note (E9)
File placement: **CORRECT** -- World-description connecting component DNA to multi-coherence belongs in Section 8 (CSS VOCABULARY).
Location in file: **CORRECT** -- After line 186 ("The repetition IS the signal -- the reader learns the label register once and recognizes it everywhere."). VERIFIED: line 186 is exactly this text. The note bridges component DNA and multi-coherence.
Cross-file deps: **COMPLETE** -- No cross-file changes needed.
Duplication: **NONE** -- Connection is currently undrawn.
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 7: Parametric Echo CSS Recipe (E10)
File placement: **CORRECT** -- Concrete CSS values for parametric echo belong in the brief near the parametric echo description.
Location in file: **CORRECT** -- After line 144 ("the degree varies by page zone" (parametric echo)."). VERIFIED: line 144 = the parametric echo paragraph. Recipe follows principle. Perfect sequencing.
Cross-file deps: **COMPLETE** -- No cross-file impact.
Duplication: **NONE** -- No parametric echo CSS recipe exists.
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 8: Character Scale Register Inventory (E14)
File placement: **CORRECT** -- Fractal echo table Character row in Section 5 of the brief.
Location in file: **CORRECT** -- Line 138 (Character row). VERIFIED: line 138 = `| Character | ~12-20px | Micro-typography shifts | ONLY after Page scale verified | [ ] |`. Modification expands this row.
Cross-file deps: **PARTIAL** -- gate-runner.md SC-14 enforces 0.025em floor. The brief says ">= 0.03em" for character-scale letter-spacing. These are NOT contradictory (0.025em = absolute floor below which it's sub-perceptual; 0.03em = minimum for visible character-scale VARIATION -- a higher bar). But the distinction is unlabeled and could confuse builders. **MISSING: A parenthetical clarifying the 0.025em/0.03em distinction.**
Duplication: **MINOR** -- The letter-spacing >= 0.03em already appears implicitly at line 59. The 5% budget cap is new.
Verdict: **APPROVED WITH NOTE**
Notes: Consider adding a brief parenthetical: "(the global floor is 0.025em per Section 2; character-scale shifts should start at 0.03em for visibility)."

---

### BRIEF-EDIT 9: Fix Cycle Compositional Memory Note (E-RETURN/E-FIX)
File placement: **CORRECT** -- Fix cycle memory habit belongs in Section 10 (COMPOSITIONAL MEMORY).
Location in file: **CORRECT** -- After line 253 ("Intentional absence is restraint. Accidental absence is a gap."). VERIFIED: line 253 = exactly this text. Fourth drift-prevention habit after the existing three.
Cross-file deps: **COMPLETE** -- SKILL.md Edit 10 adds Compositional Context to fix template; SKILL.md Edit 12 adds re-read framing. All three address fix cycle degradation from complementary angles (brief = builder habit, SKILL.md Edit 10 = template, SKILL.md Edit 12 = orchestrator instruction).
Duplication: **MINOR/ACCEPTABLE** -- Overlaps with SKILL.md Edit 12's "Re-read conviction statement and transition table." Brief says "re-read conviction statement and relevant brief section." Different specificity, complementary.
Verdict: **APPROVED**
Notes: None.

---

### BRIEF-EDIT 10: Boundary-by-Boundary Build Order Strengthening (E-CONTRA)
File placement: **CORRECT** -- Verification pauses in PROCESS section of conventions-brief.md.
Location in file: **CORRECT** -- Lines 388-392 (four verification pauses). VERIFIED: lines 388-392 = exactly the "Four verification pauses" block. Edit restructures from 4 channel-grouped to 3 boundary-grouped pauses.
Cross-file deps: **COMPLETE** -- SKILL.md Edit 5 makes matching restructuring in builder spawn prompt. Gate-runner.md micro-gates MG-1 through MG-4 remain phase-grouped (correct -- they run at build-phase completion, not boundary completion).
Duplication: **INTENTIONAL** -- Brief's pauses and SKILL.md's checkpoints cover same ground from different angles (study material vs spawn prompt). Must match.
Verdict: **APPROVED**
Notes: Line numbers shift after Edit 2 inserts +10 lines above. Actual target ~lines 398-402. Manifest handles via dependency ordering (Edit 10 last).

---

## MANIFEST 2: SKILL.md (02-skill-changes.md) -- 12 edits

---

### SKILL-EDIT 1: B1 -- Add ">= 14 total" to DG-4 mechanism count
File placement: **CORRECT** -- DG-4 sub-check in SKILL.md Section 3.4.
Location in file: **CORRECT** -- Line 167. VERIFIED: line 167 = `3. mechanisms: >= 1 in each of 5 categories (Spatial, Temporal, Material, Behavioral, Relational)`.
Cross-file deps: **COMPLETE** -- Aligns with gate-runner.md DG-4 line 916.
Duplication: **NONE** (but subsumed by Edit 6).
Verdict: **APPROVED (subsumed by Edit 6 -- do NOT apply independently)**
Notes: None.

---

### SKILL-EDIT 2: B2 -- Micro-gate approach (merged into Edit 5)
File placement: N/A (merged).
Verdict: **MERGED INTO EDIT 5**

---

### SKILL-EDIT 3: B3 -- Add BG-1/BG-2 behavioral gate references
File placement: **CORRECT** -- Structured gate output section in SKILL.md lists what the orchestrator checks.
Location in file: **CORRECT** -- Line 143 ("For EACH of the 15 gates (plus advisory gates SC-13B, SC-16 and deliverable gates DG-1 through DG-4)"). VERIFIED: line 143 = exactly this. The edit extends the parenthetical to include BG-1/BG-2.
Cross-file deps: **COMPLETE** -- BG-1 (lines 840-858) and BG-2 (lines 860-879) are fully defined in gate-runner.md.
Duplication: **NONE** -- BG-1/BG-2 entirely absent from SKILL.md.
Verdict: **APPROVED**
Notes: None.

---

### SKILL-EDIT 3B: Add BG-1/BG-2 verification section
File placement: **CORRECT** -- Behavioral gate verification in SKILL.md Section 3.4 alongside deliverable gates.
Location in file: **CORRECT** -- After line 169 (end of DG-4). VERIFIED: line 169 = `5. grid_layouts: >= 2 distinct patterns`. The "Behavioral gates (from build log):" sub-heading mitigates the semantic imprecision of placing behavioral gates under a "Deliverable Gates" heading.
Cross-file deps: **COMPLETE**.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: Minor heading semantics issue (behavioral under "Deliverable Gates") mitigated by sub-heading.

---

### SKILL-EDIT 4: B4 -- Route gate results to weaver
File placement: **CORRECT** -- Weaver spawn prompt in SKILL.md Section 5.3.
Location in file: **CORRECT** -- Line 253 (weaver spawn prompt). VERIFIED: line 253 = `You are the PA weaver. Read all 9 auditor reports from [output-dir]/_pa/.`. The edit adds gate results routing between opening line and lock sheet reference.
Cross-file deps: **COMPLETE** -- Gate-runner.md lines 127-130 say gate data is PA CONTEXT. Routing to weaver (not auditors) preserves fresh-eyes principle.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: Good routing -- weaver (synthesizer) not auditors (fresh-eyes).

---

### SKILL-EDIT 5: B2+E3+E-CONTRA combined checkpoint restructuring
File placement: **CORRECT** -- Builder self-check checkpoints in SKILL.md builder spawn prompt.
Location in file: **CORRECT** -- Lines 61-66. VERIFIED: lines 61-66 = exactly the "Phase C: Build. HTML + CSS. Self-check at 4 checkpoints:" block. Replaces 6 lines with 8 lines (3 boundary-grouped checkpoints with corrected thresholds).
Cross-file deps: **COMPLETE** -- Aligns with:
  - conventions-brief.md Edit 10 (boundary-grouped pauses)
  - gate-runner.md SC-06: >= 5 ARIA (was >= 3 in SKILL.md line 62)
  - gate-runner.md SC-15: >= 3 configs (was >= 2 weights in SKILL.md line 64)
Duplication: **INTENTIONAL** -- Both brief and SKILL.md describe boundary-grouped verification.
Verdict: **APPROVED**
Notes: Highest-leverage single edit. Resolves 3 issues simultaneously.

---

### SKILL-EDIT 6: B5 -- Fix DG-4 reference + subsume Edit 1
File placement: **CORRECT** -- DG-4 in SKILL.md Section 3.4.
Location in file: **CORRECT** -- Lines 160-169. VERIFIED: lines 159-169 = the DG-4 section. Updates mechanisms line (subsuming Edit 1).
Cross-file deps: **INCOMPLETE** -- **CRITICAL: gate-runner.md DG-4 (line 913) references `_build-plan.yaml` -- a file no builder produces.** SKILL.md Edit 6 changes SKILL.md to validate from `_build-log.md` instead, but the gate-runner manifest (03-gate-changes.md) does NOT include a matching fix. After this edit, SKILL.md and gate-runner.md DISAGREE on where DG-4 validates from.
Duplication: **NONE**.
Verdict: **APPROVED WITH MISSING CROSS-FILE EDIT**
Notes: **MUST ADD to gate-runner manifest:** DG-4 should validate from _build-log.md transition table + fractal echo table, not _build-plan.yaml.

---

### SKILL-EDIT 7: B6 -- TeamCreate -> Task tool
File placement: **CORRECT** -- Lines 30 and 204 in SKILL.md.
Location in file: **CORRECT** -- VERIFIED: line 30 = `Use TeamCreate to spawn the build-page team.` Line 204 = `Spawn 9 Opus auditors + 1 Opus weaver using TeamCreate.`
Cross-file deps: **COMPLETE** -- Line 398 already says "Task tool."
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: None.

---

### SKILL-EDIT 8: COMPRESSION -- Shorten model inheritance warning
File placement: **CORRECT** -- SKILL.md Section 9.
Location in file: **CORRECT** -- Lines 395-398. VERIFIED: line 398 = the IMPORTANT warning.
Cross-file deps: **COMPLETE**.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: Budget recovery.

---

### SKILL-EDIT 9: E15 -- Weaver compositional vocabulary
File placement: **CORRECT** -- Weaver spawn prompt in SKILL.md Section 5.3.
Location in file: **CORRECT** -- After line 272 ("what to change, not just what is wrong"). VERIFIED: lines 272-273 = exactly this text. Natural extension of the actionable feedback instruction.
Cross-file deps: **COMPLETE** -- References brief Sections 4 (channels), 5 (scales), 7 (transitions). Already present.
Duplication: **NONE** -- Weaver currently has zero compositional vocabulary.
Verdict: **APPROVED**
Notes: None.

---

### SKILL-EDIT 10: E16 -- Fix cycle recipe structure
File placement: **CORRECT** -- Fix instruction template in SKILL.md Section 6.1.
Location in file: **CORRECT** -- Lines 310-327 (fix instruction markdown template). VERIFIED: lines 310-327 = Gate Failures, PA Top-5 Issues, Tier 5 Gaps, DO NOT TOUCH. The edit inserts "Compositional Context" section between Gate Failures and PA Top-5 Issues.
Cross-file deps: **COMPLETE** -- References _build-log.md, conventions-brief sections by number, gate IDs. Gate-runner Edit 5 adds brief_section to per-gate fix recipes (complementary mechanism).
Duplication: **NONE** -- No compositional context in fix instructions currently.
Verdict: **APPROVED**
Notes: Good coordination with gate-runner Edit 5.

---

### SKILL-EDIT 11: GO BEYOND -- Compositional framing for reference files
File placement: **CORRECT** -- Builder spawn prompt reference file list in SKILL.md.
Location in file: **CORRECT** -- Lines 53-54. VERIFIED: line 53 = `3. design-system/compositional-core/grammar/mechanism-catalog.md -- mechanism CSS patterns` and line 54 = `4. design-system/compositional-core/components/components.css -- component library`.
Cross-file deps: **COMPLETE**.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: +0 lines, ~15 words. Very low risk.

---

### SKILL-EDIT 12: GO BEYOND -- Fix cycle compositional memory
File placement: **CORRECT** -- Fix cycle send-off in SKILL.md Section 6.2.
Location in file: **CORRECT** -- Lines 329-333. VERIFIED: line 331 = `>>> CRITICAL: Use the SAME Opus builder agent that produced the original page. Compositional memory preservation is essential.` Edit replaces abstract claim with concrete instruction.
Cross-file deps: **COMPLETE WITH OVERLAP** -- Brief Edit 9 adds similar "re-read conviction statement" habit. Complementary (brief = builder habit, SKILL.md = orchestrator framing).
Duplication: **MINOR/ACCEPTABLE** -- Overlaps brief Edit 9. Different specificity.
Verdict: **APPROVED**
Notes: None.

---

## MANIFEST 3: gate-runner.md (03-gate-changes.md) -- 8 edits

---

### GATE-EDIT 1: Zone Selector Validation Pre-Gate (SC-00)
File placement: **CORRECT** -- Programmatic pre-gate with JS code belongs in gate-runner.md.
Location in file: **CORRECT** -- Between line 99 (end of dependency chain) and line 101 (Gate Failure Protocol heading). VERIFIED: line 97 = last dependency chain entry, line 99 = `---`, line 101 = `## Gate Failure Protocol`. SC-00 placed in the gate definitions area, before failure protocol. Edit 4 integrates it into execution groups.
Cross-file deps: **INCOMPLETE -- 4 MISSING EDITS:**
  1. **conventions-brief.md:** Zone markup pattern docs (3-4 lines). NOT in 01-brief-changes.md.
  2. **SKILL.md line ~72:** Zone class naming note in builder prompt. NOT in 02-skill-changes.md.
  3. **SKILL.md line 119:** Gate count "15" -> include SC-00. NOT in 02-skill-changes.md.
  4. **SKILL.md lines 123-139:** Add SC-00 row to gate table. NOT in 02-skill-changes.md.
Duplication: **NONE** -- SC-00 is entirely new.
Verdict: **APPROVED WITH 4 MISSING CROSS-FILE EDITS**
Notes: The gate definition itself is perfectly placed and well-specified (~65 lines with fallback chain). But the propagation to SKILL.md and brief is absent from those manifests.

---

### GATE-EDIT 2: Fix SC-14 Letter-Spacing Threshold Comment
File placement: **CORRECT** -- SC-14 in gate-runner.md.
Location in file: **CORRECT** -- Line 433. VERIFIED: line 433 = `if (emVal > 0 && emVal < 0.025) return FAIL; // sub-perceptual`. Comment clarification only -- gate-runner already correct at 0.025em.
Cross-file deps: **INCOMPLETE -- 2 MISSING EDITS:** The real B8 bug is in design-system/CLAUDE.md and design-system/compositional-core/CLAUDE.md (0.02em -> 0.025em). NOT in any manifest. Lower priority (CLAUDE.md files are navigation, not builder-facing).
Duplication: **NONE**.
Verdict: **APPROVED WITH 2 MISSING CROSS-FILE EDITS (LOW PRIORITY)**
Notes: Real fix is in CLAUDE.md files outside the 4-manifest scope.

---

### GATE-EDIT 3: Phantom Channels Documentation (E-PHANTOM)
File placement: **CORRECT** -- SC-13 known limitation documentation in gate-runner.md.
Location in file: **CORRECT** -- After lines 401-405 (Known limitation + Provenance for SC-13). VERIFIED: lines 401-405 = exactly this block. Extends with channel-specific documentation.
Cross-file deps: **COMPLETE** -- Deferred resolution, no immediate cross-file changes.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: None.

---

### GATE-EDIT 4: SC-00 in Execution Groups and Dependency Chain
File placement: **CORRECT** -- Execution groups in gate-runner.md.
Location in file: **CORRECT** -- Lines 77-98 (execution groups + dependency chain). VERIFIED: lines 77-98 = GROUP 1-5 and dependency chain. Adds GROUP 0 and updates dependency chain.
Cross-file deps: **INCOMPLETE** -- Same missing SKILL.md edits as Edit 1.
Duplication: **NONE**.
Verdict: **APPROVED WITH CAVEATS (same as Edit 1)**
Notes: SKILL.md propagation missing.

---

### GATE-EDIT 5: Fix Recipe Enrichment -- Brief Section References
File placement: **CORRECT** -- Fix recipe format belongs in gate-runner.md Gate Failure Protocol section.
Location in file: **CORRECT** -- Lines 101-118 (Gate Failure Protocol). VERIFIED: lines 101-118 = "During Build" and "After Build" sections. New "Fix Recipe Compositional Context" sub-section added after existing protocol. Contains gate-category-to-brief-section mapping table and JSON format extension.
Cross-file deps: **COMPLETE** -- SKILL.md Edit 10 adds compositional context to fix template (complementary mechanism -- different approach, same goal).
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: ~35 lines is substantial but justified -- includes mapping table and JSON format extension serving all gate fix recipes.

---

### GATE-EDIT 6: Micro-Gate Threshold Alignment Audit
File placement: **CORRECT** -- Audit confirming gate-runner.md micro-gates are already correct.
Location in file: **N/A** -- No gate-runner.md edit.
Cross-file deps: **COMPLETE** -- Correctly routes fix to SKILL.md Edit 5 (checkpoint threshold alignment).
Duplication: **N/A**.
Verdict: **APPROVED (no edit needed in gate-runner.md)**
Notes: Good audit discipline.

---

### GATE-EDIT 7: SC-00 in Complete Gate Summary Table
File placement: **CORRECT** -- Summary table in gate-runner.md.
Location in file: **CORRECT** -- Lines 950-978. VERIFIED: lines 950-978 = COMPLETE GATE SUMMARY TABLE. Adds row 0 and updates totals.
Cross-file deps: **COMPLETE** -- Self-contained.
Duplication: **NONE**.
Verdict: **APPROVED**
Notes: None.

---

### GATE-EDIT 8: SC-00 in Gate-to-PA Handoff Section
File placement: **CORRECT** -- Handoff section in gate-runner.md.
Location in file: **CORRECT** -- Line 125. VERIFIED: line 125 = `ALL 15 blocking gates must PASS before PA runs.`
Cross-file deps: **COMPLETE**.
Duplication: **NONE**.
Verdict: **NEEDS MINOR ADJUSTMENT**
Notes: **Gate count math is imprecise.** The manifest says "ALL 18 blocking gates (SC-00 pre-gate + 15 programmatic blocking + 2 deliverable blocking)." But the breakdown doesn't cleanly add up:
  - Original "15 blocking gates" counts SC-01 through SC-15, MINUS SC-13B and SC-16 (advisory) = 13 blocking SC gates. But the original text says "15" which counts all 15 SC gates including the 2 advisory? No -- the original says "15 blocking gates must PASS" and the summary table says "17 blocking + 2 advisory." So "15 blocking" likely counts the 15 non-advisory, non-DG gates... but that includes SC-13B and SC-16 which ARE advisory. The pre-existing count is itself unclear.
  - The safest fix: "ALL blocking gates (including SC-00 pre-gate) must PASS before PA runs." Drop the specific number to avoid count confusion. OR: verify exact count and use it.

---

## MANIFEST 4: flagship-pa-questions.md + perceptual-auditing/SKILL.md (04-pa-changes.md) -- 2 edits

---

### PA-EDIT 1: Modify PA-44 to Include Metaphor Spatial Coverage (B9)
File placement: **CORRECT** -- PA-44 lives in `~/.claude/skills/perceptual-auditing/SKILL.md` (line 275 and line 294), NOT in flagship-pa-questions.md. The manifest correctly identifies: "PA-44 is not in this file." The edit targets perceptual-auditing/SKILL.md at 2 locations.
Location in file: **CORRECT** -- VERIFIED via Grep: perceptual-auditing/SKILL.md line 275 = `**PA-44 (implicit vs explicit metaphor):**` and line 294 = the PA-44 table row with question text. Both are the right locations for the modification.
Cross-file deps: **COMPLETE** -- flagship-pa-questions.md: NO CHANGE needed (PA-44 not present). build-page/SKILL.md: NO CHANGE needed (Auditor G assignment "PA-42, 43, 44" unchanged).
Duplication: **NONE** -- Metaphor spatial coverage not tested by any existing question.
Verdict: **APPROVED**
Notes: Clean expansion of existing question. Does not add a new question number. Respects Report 11's "Do NOT add new PA questions" guidance by modifying an existing one.

---

### PA-EDIT 2: Sharpen PA-63 to Detect Parametric Echo (GO BEYOND)
File placement: **CORRECT** -- PA-63 lives in BOTH flagship-pa-questions.md (lines 51-61) AND perceptual-auditing/SKILL.md (line 376). Both need updating.
Location in file: **CORRECT** -- VERIFIED: flagship-pa-questions.md lines 51-61 = the full PA-63 question block (Question, Detects, Scoring, Auditor Assignment). perceptual-auditing/SKILL.md line 376 = the PA-63 table row. Both are correct locations.
Cross-file deps: **COMPLETE** -- build-page/SKILL.md: NO CHANGE needed (Auditor E's assignment includes PA-63, unchanged).
Duplication: **NONE** -- Parametric echo detection not tested by any existing question.
Verdict: **APPROVED**
Notes: Natural extension of existing zoom-in/zoom-out pattern to include cross-zone comparison. The question now tests both fractal self-similarity AND parametric echo in a single perceptual pass.

---

## OVERALL ASSESSMENT

### Placement Accuracy Score

| Manifest | Total Edits | APPROVED | APPROVED WITH NOTE | APPROVED WITH MISSING CROSS-FILE | NEEDS ADJUSTMENT | WRONG FILE | WRONG LOCATION |
|----------|-------------|----------|-------------------|----------------------------------|-----------------|------------|----------------|
| 01 (brief) | 10 | 9 | 1 | 0 | 0 | 0 | 0 |
| 02 (SKILL.md) | 12 | 10 | 0 | 1 | 0 | 0 | 0 |
| 03 (gate-runner) | 8 | 4 | 0 | 3 | 1 | 0 | 0 |
| 04 (PA) | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
| **TOTAL** | **32** | **25** | **1** | **4** | **1** | **0** | **0** |

**Overall file placement accuracy: 100%** -- every edit targets the architecturally correct file.
**Overall location accuracy: 31/32 (97%)** -- one edit (GATE-EDIT 8) needs minor count adjustment.
**Cross-file completeness: 27/32 (84%)** -- 5 edits have identified-but-missing cross-file propagation.

### Edits Needing Adjustment

1. **GATE-EDIT 8 (SC-00 handoff count):** The blocking gate count breakdown is imprecise. Recommend: either "ALL blocking gates (including SC-00 pre-gate) must PASS" (drop number) or verify and state exact count.

2. **BRIEF-EDIT 8 (Character scale 0.03em):** Consider adding parenthetical clarifying 0.025em absolute floor vs 0.03em character-scale variation floor.

### Missing Cross-File Edits

| Source Edit | Missing Edit Description | Target File | Priority |
|-------------|------------------------|-------------|----------|
| GATE-EDIT 1 (SC-00) | Zone markup pattern docs (3-4 lines, Section 5 or 12) | conventions-brief.md | **HIGH** |
| GATE-EDIT 1 (SC-00) | Zone class naming note in builder prompt (~line 72) | build-page/SKILL.md | **HIGH** |
| GATE-EDIT 1/4 (SC-00) | Gate count "15 composition-critical gates" -> include SC-00 (line 119) | build-page/SKILL.md | **HIGH** |
| GATE-EDIT 1/4 (SC-00) | SC-00 row in gate table (lines 123-139) | build-page/SKILL.md | **HIGH** |
| SKILL-EDIT 6 (DG-4) | DG-4 validate from _build-log.md, not _build-plan.yaml (line 913) | gate-runner.md | **HIGH** |
| GATE-EDIT 2 (B8) | Fix "0.02em" -> "0.025em" | design-system/CLAUDE.md | LOW |
| GATE-EDIT 2 (B8) | Fix "0.02em" -> "0.025em" | design-system/compositional-core/CLAUDE.md | LOW |

**5 HIGH priority missing cross-file edits, 2 LOW.**

The 5 HIGH items form 2 clusters:
- **SC-00 propagation (4 edits):** Gate-runner defines SC-00 but SKILL.md and brief don't know about it. Without these, the orchestrator won't run SC-00 and the builder won't use standard zone markup.
- **DG-4 _build-plan.yaml (1 edit):** SKILL.md says validate from _build-log.md, gate-runner.md says validate from _build-plan.yaml. Inconsistency.

### Key Findings

1. **File placement is excellent.** Every edit targets the architecturally correct file per the pipeline architecture (brief = world-description, SKILL.md = orchestrator logic, gate-runner.md = JS verification, PA questions = perceptual verification). Zero misplacements.

2. **Location accuracy is high.** Line references match actual file content. Insertion points are logically appropriate. Dependency ordering (Edit 10 last in brief) is sound.

3. **The primary gap is SC-00 cross-file propagation.** 4 of 5 HIGH missing edits relate to SC-00. The gate is well-defined in gate-runner.md but its existence is not communicated to SKILL.md (orchestrator) or brief (builder).

4. **The DG-4 _build-plan.yaml inconsistency is a real gap.** After SKILL-EDIT 6, SKILL.md and gate-runner.md disagree on DG-4's validation source. Must be resolved before application.

5. **The fix-cycle trio (brief Edit 9 + SKILL Edits 10, 12) is well-coordinated.** Three edits addressing the same problem from complementary angles. Minor "re-read conviction" overlap is acceptable.

6. **PA manifest (04) is the cleanest.** 2 edits, both cleanly placed, complete cross-file deps, no issues. Smart decision to modify existing questions rather than add new ones.

7. **No edit introduces content in the wrong abstraction layer.** CSS recipes stay in brief, JS code stays in gate-runner, orchestrator instructions stay in SKILL.md, perceptual questions stay in PA files.

---

*End of surgical placement audit v2. 05-surgical-placement-audit.md complete.*
