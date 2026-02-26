# Fresh-Eyes Review: Pipeline v3 Artifact Files
**Reviewer:** Wave 2 Buddy (Fresh-Eyes Opus Agent)
**Date:** 2026-02-24
**Files Reviewed:** 5 (PA Protocol, Gate Runner, Builder Recipe, Orchestrator, MANIFEST)
**Review Scope:** Internal consistency, clarity, structural issues, stale references, code quality

---

## EXECUTIVE SUMMARY

The 5 artifacts collectively define a well-structured pipeline with strong internal logic. The primary concerns are **cross-file count discrepancies** (gate counts, PA question counts, auditor assignments) that would confuse an orchestrator agent trying to reconcile the documents. Within individual files, consistency is generally high. The gate-runner executable JavaScript is production-quality with good defensive coding. The builder recipe is the strongest individual file — clear sequencing, recipe format maintained throughout.

**Overall Verdict:** USABLE WITH FIXES. 7 SIGNIFICANT issues, 14 MINOR issues. No BLOCKING issues that would prevent pipeline execution, but the count discrepancies would cause confusion and potentially incorrect agent deployment.

---

## FILE 1: artifact-pa-protocol.md (1,110 lines)

**Internal Consistency:** 4/5
**Clarity:** 5/5

### Issues Found

**PA-PROTO-01 [SIGNIFICANT]** — Part numbering collision
- Lines 173 and 338: "PART 3: FULL PA QUESTION INVENTORY" at line 173, then "PART 3.5: QUALITY FRAMEWORK" at line 338. The use of "3.5" is non-standard and suggests the quality framework was inserted after the original numbering. Parts after this are numbered correctly (4, 5, 6...).
- **Fix:** Renumber to sequential parts (3, 4, 5...) or explicitly acknowledge the insertion.

**PA-PROTO-02 [SIGNIFICANT]** — PA question total claims "69 questions" but the accounting is strained
- Line 334: "Total: 69 questions (49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5)"
- The 49 "standard" bucket includes Tier 1 (5), Tier 2 (12), Tier 3 (10), Tier 4 (4) = 31. The "standard" count of 49 requires also counting the Metaphor/Ideology (PA-42/43/44 = 3) + Quality (PA-45 = 1) + some others that don't neatly fall into Tier 2/3 categories.
- When I manually count every PA-XX ID listed in the tables (Parts 3.1 through 3.10), I get: Tier 1 (5) + Tier 2 readability (3) + Tier 2 spatial (6) + Tier 2 flow (5) + Tier 2 grid (5) + Tier 2 consistency (4) + Tier 2 color (3) + Tier 3 responsiveness (4) + Tier 3 cross-page (2) + Tier 3 architectural (2) + Tier 3 adversarial (2) + metaphor (3) + quality (1) + Tier 4 void (4) + sub-perceptual (2) + pipeline (3) + Tier 5 (9) + extended (6) = 69. The count IS correct, but the "49 standard" subcategory label is confusing because it lumps several tiers together.
- **Fix:** Break down the "49 standard" into its constituent tiers for transparency.

**PA-PROTO-03 [MINOR]** — Cross-validation section references non-existent "Part 1.2"
- Line 419: "Cross-validators use the same criteria as Part 1.2"
- The actual section is "1.2 PA-05 Sub-Criteria" at line 36. The reference IS valid but could be confused with a file section reference. Consider using the full heading.

**PA-PROTO-04 [MINOR]** — FIX-083 clarification at line 469 corrects MANIFEST but MANIFEST may not be updated
- Line 469: "Any prior reference (including MANIFEST) stating that the Integrative Auditor scores PA-05 is INCORRECT."
- This is a good inline correction, but the MANIFEST should also be checked for this specific claim.

**PA-PROTO-05 [MINOR]** — Auditor load balance note references FIX-061/062/063/064 (line 400)
- These FIX IDs are internal tracking references. Their source is not defined in this document. For a standalone artifact, the rationale is clear (moved PA-52 from C to D, etc.) but the FIX-XXX references are opaque without the source tracking file.

**PA-PROTO-06 [MINOR]** — Part 7 WARNING (line 684) about Weaver-only content
- Line 684: "WARNING (FIX-084): WEAVER USE ONLY." This is well-placed but a downstream agent reading the file sequentially might include this content in auditor prompts. The warning should ideally be structural (e.g., a separate file section header) not just a text warning.

**PA-PROTO-07 [MINOR]** — ITEM 73 dual reference
- ITEM 73 appears twice in the registry: once as extract-d01-d03.md L172-173 (PA question distribution) and once as extract-d12-d14.md L1067 (Phase 3 PA auditor checks). Same ITEM number, different sources. This is confusing — registry entries should have unique composite keys.

---

## FILE 2: artifact-gate-runner.md (~1,800 lines)

**Internal Consistency:** 4/5
**Clarity:** 4/5

### Issues Found

**GATE-01 [SIGNIFICANT]** — Gate count discrepancy: header says 43, summary table lists 43, but MANIFEST says 35
- Line 33: "Total: 43 gates (42 - 13 + 6 + 8 = 43)"
- The gate summary table (lines 530-574) lists exactly 43 gates. Internally consistent.
- However, MANIFEST line 141 says "35 programmatic gate checks" and the MANIFEST Section 3 artifact routing table says "35 gates (17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV)." This totals 35, not 43. The MANIFEST appears to have a stale count from before Wave 2 added 8 gates.
- **Fix:** Update MANIFEST to reflect 43 gates (18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV).

**GATE-02 [SIGNIFICANT]** — REQUIRED gate count mismatch between categorization table and summary
- Line 28: Category table says REQUIRED = "GR-01 through GR-15, GR-43, GR-44, GR-48" = 18 gates
- Line 569: Summary table shows GR-48 as "Meta | REQUIRED" — confirmed.
- But line 577: "Identity: 10 (GR-01 through GR-10) — Post-build, REQUIRED" + "Perception: 6 (GR-11 through GR-15, GR-44)" + "Output: 2 (GR-43, GR-50) — Post-build, 1 REQUIRED + 1 ADVISORY" + "Meta: 2 (GR-48, GR-49) — Post-build, 1 REQUIRED + 1 RECOMMENDED" = 10+6+1+1 = 18 REQUIRED. Correct.
- Line 474: GR-48 says "All 17 REQUIRED gate IDs have a result" — but there are 18 REQUIRED gates. The 17 appears to be the pre-GR-48 count (GR-48 itself is the 18th, and it can't verify itself). This is a semantic nuance — GR-48 verifies that the other 17 REQUIRED gates ran. Should be clarified.
- **Fix:** Line 474 should say "All 17 OTHER REQUIRED gate IDs" to make clear GR-48 checks the others, not itself.

**GATE-03 [MINOR]** — GR-05 and GR-07 overlap
- GR-05 (Warm Palette Compliance, line 158) checks for pureBlack, pureWhite, AND coldColors.
- GR-07 (No Pure Black / Pure White, line 177) checks for pureBlack and pureWhite specifically.
- The GR-05 code (lines 1082-1124) explicitly checks `pureBlack`, `pureWhite`, and `coldColors` — it subsumes GR-07's entire check.
- GR-07 code (lines 1159-1191) is a more thorough version checking all 4 individual border sides (borderTopColor, borderRightColor, etc.) vs GR-05 which only checks composite `borderColor`.
- The overlap is intentional — GR-07 is the targeted soul constraint check, GR-05 is the broader palette check. But both report pure B/W, potentially double-counting failures.
- **Fix:** Add a note in GR-07 explaining its relationship to GR-05 (more thorough per-side check vs composite check).

**GATE-04 [MINOR]** — BV-02 scope note ambiguity
- Line 96: "This gate checks ALL consecutive hex pairs in the brief text, not just zone backgrounds."
- This means if the brief mentions "#E83025" (the primary red) next to "#FEF9F5" (the cream background), BV-02 would check their delta. These are INTENTIONALLY different palette entries, not adjacent zone backgrounds. The gate would PASS (delta is large), but the check logic is overly broad.
- Not a functional issue — just a clarity note that the gate checks more pairs than strictly necessary.

**GATE-05 [MINOR]** — GR-47 gap noted but unexplained in main text
- Line 834: "GR-47 intentionally skipped (Brief Line Budget already covered by BV-01 per CONFLICT-007)."
- This appears only in Appendix D. There's no mention of GR-47 in the main gate listings, which is correct (it doesn't exist), but an orchestrator might wonder about the gap in numbering.

**GATE-06 [MINOR]** — Stacked gap threshold inconsistency
- Line 15: "S-09 adjusted: <=150px TOTAL stacked gap (was <=96px per-property)"
- But GR-15 (line 259) still enforces "Single Margin <= 96px" on individual properties.
- The clarification section (lines 842-852) explains this well — GR-13 (120px CSS sum) and GR-14 (150px visual gap) are complementary. But the header's reference to "<=150px TOTAL" vs the body's GR-13 "<=120px CSS sum" could confuse a reader who only reads the header.

**GATE-07 [MINOR]** — Appendix A says "34 VALUES items rerouted" but lists 17+12+5 = 34, with item #15 and #17 routed to DOCUMENTATION, not ORCHESTRATOR
- Line 596 header says "Category A: REROUTED to ORCHESTRATOR (17 items)" but items #15 and #17 in the table are labeled "DOCUMENTATION" — they're in the wrong table section.
- **Fix:** Move items #15 (ITEM 039) and #17 (ITEM 033) from Category A to Category C, or re-label Category A as "ORCHESTRATOR/DOCUMENTATION."

**GATE-08 [MINOR]** — Executable code uses `window.isRenderedElement` but GR-21/GR-22 use `window.isRenderedElement` without being in the `runGateRunner()` scope
- The `isRenderedElement` helper is injected in `runGateRunner()` (line 982). The anti-pattern gates in `runAntiPatternGates()` use `window.isRenderedElement` (lines 1843, 1897) — this works because it's on the `window` object, but only IF `runGateRunner()` ran first.
- **Fix:** Add a comment in `runAntiPatternGates()` noting the dependency on `runGateRunner()` having been called first, or inject the helper independently.

---

## FILE 3: artifact-builder-recipe.md (910 lines)

**Internal Consistency:** 3/5
**Clarity:** 5/5

### Issues Found

**RECIPE-01 [SIGNIFICANT]** — Item count discrepancy: header says 146, appendix lists 153
- Line 4: "Items covered: 70 SCAFFOLDING (Layer 3) + 76 DISPOSITION (Layer 4) = 146 items total"
- Appendix B header at line 716: "Layer 3: SCAFFOLDING Items (75 items)" and line 801: "Layer 4: DISPOSITION Items (78 items)" — totaling 153.
- The appendix counts are higher because they include "Additional items from secondary classification" (lines 788-799, adding 7 scaffolding items) and "Council-reclassified from GATES" (lines 792-799, adding 7 more). The header count of 70+76=146 appears to be the BASE count before reclassifications.
- The MANIFEST acknowledges this at line 220: "discrepancy is an artifact-internal issue."
- **Fix:** Update the header to reflect the appendix totals (75+78=153) or explicitly note "146 base + 7 reclassified = 153 total in appendix."

**RECIPE-02 [MINOR]** — Container width guidance inconsistency
- Line 209: "Container must be 940-960px (soul constraint). 1100px is available for some layouts but the 940-960 range is the default."
- This contradicts the gate-runner GR-03 which enforces 940-960px as a hard PASS/FAIL. If 1100px is "available," the gate would FAIL it.
- The gate-runner note at line 148: "Gate allows 940-960px; wider containers are a builder creative decision that must be JUSTIFIED." This implies wider is possible but the gate will FAIL it.
- **Fix:** Clarify in the recipe that 1100px will FAIL the gate but may be used with orchestrator override, or remove the 1100px mention.

**RECIPE-03 [MINOR]** — Phase numbering mismatch with document structure
- The recipe has 6 phases (Phase 1 through Phase 6), but the document structure uses "PHASE 1: READ YOUR VOCABULARY" through "PHASE 6: TEMPORAL COMPOSITION."
- The builder recipe's Phase 1 (Read Vocabulary) maps to the orchestrator's Phase 2 (Building). This is because the recipe phases are INTERNAL to the builder's workflow, not pipeline phases.
- Not technically an error, but could confuse someone reading both documents. No explicit disambiguation exists.

**RECIPE-04 [MINOR]** — Evidence status key (Appendix C, line 890) lists 6 levels but the council mandated 6 per CF-04
- Line 890-906: Lists FACT, OBSERVED, CONFOUNDED, THEORETICAL, SPECULATIVE (5 levels).
- The MANIFEST Appendix A (line 800) lists 6 levels including PROVEN.
- This file omits PROVEN from its key.
- **Fix:** Add PROVEN to the evidence status key for consistency with the canonical 6-level taxonomy.

---

## FILE 4: artifact-orchestrator.md (1,016 lines)

**Internal Consistency:** 4/5
**Clarity:** 4/5

### Issues Found

**ORCH-01 [SIGNIFICANT]** — Total item count header: "188 + 15 + 19 = 222" but text says "15 council-rerouted"
- Line 3: "188 items + 15 council-rerouted + 19 additional VALUES context items = 222 items total"
- Section 9 (line 573) is titled "15 items, council Pattern 5 Category A" but Section 9 lists 17 items (numbered 1-17 in the table at lines 601-617). Items #15 and #17 are labeled DOCUMENTATION, not ORCHESTRATOR.
- The header says "15 council-rerouted" but the section contains 17 entries. The "15" may have been the original count before 2 DOCUMENTATION items were added to the table.
- **Fix:** Reconcile the header count (15 vs 17) with the actual table entries.

**ORCH-02 [MINOR]** — Section 10 (3-pass architecture) is labeled "BLOCKED until experiment #21" throughout
- Lines 618-665 contain extensive detail on an experimental architecture that cannot be used.
- This is ~50 lines of content that serves no operational purpose in the current pipeline. It's correctly tagged EXPERIMENTAL but occupies significant space.
- Not an error, but an observation about document weight. The orchestrator reading this file has ~470 lines of non-operational content (Sections 9-16) vs ~500 lines of operational content (Sections 0-8).

**ORCH-03 [MINOR]** — Mode selection logic (Section 4) references "ITEM 050 through ITEM 054" from extract-d18-d20.md
- These items define Applied vs Composed mode. The orchestrator receives this guidance, but the mode selection criteria (lines 313-323) are somewhat vague: "High structural heterogeneity" and "Metaphor viability confirmed" have no quantitative thresholds.
- The Content Analyst's output determines mode, but there's no binary criterion for the orchestrator to apply. This is acknowledged as a judgment call but could lead to inconsistent mode selection across runs.

**ORCH-04 [MINOR]** — Verdict logic in Section 7 includes GR-32 ("3+ anti-pattern fails = REBUILD")
- Line 516: "GR-32: 3+ anti-pattern fails = REBUILD (overrides PA-05 score)"
- GR-32 was removed from the gate-runner (moved to orchestrator). The orchestrator correctly owns this logic. However, the gate-runner summary (line 588) says "GR-29-32 (moved to orchestrator verdict logic)" — so the gate IDs still exist as orchestrator logic, which could confuse someone looking for them in the gate-runner file.
- Not an error — just a cross-reference clarity issue.

---

## FILE 5: MANIFEST.md (1,137 lines)

**Internal Consistency:** 3/5
**Clarity:** 5/5

### Issues Found

**MANIFEST-01 [SIGNIFICANT]** — Gate count: says "35 programmatic gate checks" but gate-runner has 43
- Line 141: "Run 35 programmatic gate checks"
- Line 245: "35 gates (17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BV + 1 output)"
- The gate-runner file has 43 gates after Wave 2 additions.
- The MANIFEST appears to have the Wave 1 count (35) but not the Wave 2 count (43).
- **Fix:** Update all references from 35 to 43, and update the breakdown to "18 REQUIRED + 12 RECOMMENDED + 9 ADVISORY + 4 BV" per the gate-runner summary table.

**MANIFEST-02 [SIGNIFICANT]** — PA Auditor question assignments differ from PA Protocol
- MANIFEST Section 2, Phase 3B (lines 148-156) lists per-auditor question assignments:
  - Auditor A: "PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67 (7 questions)"
  - Auditor B: "PA-02, PA-06, PA-07, PA-08, PA-29, PA-56 (6 questions)"
  - Auditor C: "PA-09, PA-10, PA-11, PA-30-33, PA-50-53, PA-55, PA-64, PA-66 (14 questions)"
  - Auditor D: "PA-12, PA-13, PA-34-36, PA-69, PA-70, PA-71, PA-62 (9 questions)"
  - etc.

- PA Protocol Part 4.2 (lines 386-396) lists:
  - Auditor A: "PA-01, PA-03, PA-04, PA-05, PA-45 + PA-65, PA-67 + PA-72, PA-76 = 9"
  - Auditor B: "PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70 + PA-77 = 8"
  - Auditor C: "PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53 + PA-64, PA-66 = 11"
  - Auditor D: "PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71 + PA-62 + PA-74, PA-75 = 11"

- Specific discrepancies:
  - **Auditor A:** MANIFEST lists 7 questions (missing PA-72, PA-76). PA Protocol lists 9.
  - **Auditor B:** MANIFEST lists 6 questions (includes PA-07 which doesn't exist in PA Protocol; missing PA-55, PA-70, PA-77). PA Protocol lists 8. Also MANIFEST includes "PA-07" — there IS no PA-07 in the PA Protocol question inventory.
  - **Auditor C:** MANIFEST lists 14 questions (includes PA-10 and PA-55 which the PA Protocol assigns to other auditors). PA Protocol lists 11.
  - **Auditor D:** MANIFEST lists 9 questions (includes PA-70 which PA Protocol assigns to B; missing PA-52, PA-74, PA-75). PA Protocol lists 11.
  - **Auditor H:** MANIFEST lists "PA-21-23" — there IS no PA-21 in the PA Protocol inventory. PA Protocol lists PA-22, PA-23, PA-46, PA-47, PA-73 = 5.

- The MANIFEST total says "66 questions across 9 auditors" (line 158). The PA Protocol says "69 questions across 9 auditors" (line 398). The PA Protocol is authoritative.

- **Fix:** The MANIFEST auditor assignments are stale and MUST be updated to match artifact-pa-protocol.md Part 4.2. The total should be 69, not 66. The phantom question IDs (PA-07, PA-10, PA-21) must be removed.

**MANIFEST-03 [MINOR]** — Integrative Auditor role description
- Line 164: "Synthesize 9 auditor reports + gestalt impression, score PA-05"
- PA Protocol FIX-083 (line 469): "PA-05 scoring is the WEAVER's responsibility, NOT the Integrative Auditor's."
- The MANIFEST assigns PA-05 scoring to the Integrative Auditor, which the PA Protocol explicitly corrects.
- **Fix:** Update line 164 to match PA Protocol — Integrative Auditor provides gestalt impression, Weaver scores PA-05.

**MANIFEST-04 [MINOR]** — Artifact file sizes are stale
- Line 218: "artifact-builder-recipe.md (840 lines)" — actual file is 910 lines.
- Line 273: "artifact-pa-protocol.md (1,004 lines)" — actual file is 1,110 lines.
- Line 299: "artifact-orchestrator.md (971 lines)" — actual file is 1,016 lines.
- Line 897: "artifact-gate-runner.md (~1,780 lines)" — actual file appears to be ~1,900 lines.
- These line counts appear to be from an earlier draft.
- **Fix:** Update all line counts to match current file sizes.

**MANIFEST-05 [MINOR]** — Honest Complexity Accounting discrepancy
- Line 319: "Total builder input is ~3,600 lines (not '~165 lines')" and "Constraint layer: ~165 lines"
- But the orchestrator (line 148) says "Constraint layer: 73 lines (recipe format)" and "~3,600 lines" total.
- The MANIFEST says "~165 lines" for the constraint layer while the orchestrator says "73 lines." These refer to different things: the MANIFEST's "~165 lines" is the TC Brief Template size, while the orchestrator's "73 lines" is the constraint layer within that template.
- **Fix:** Align terminology — use "constraint layer" for 73 lines and "TC Brief Template" or "Execution Brief" for ~100-165 lines.

**MANIFEST-06 [MINOR]** — Appendix E prompt templates reference missing file
- Line 933: "See `ephemeral/pipeline-retro/07-context-gap.md` Section 4 for the full prompt text with commentary."
- Line 1068: "For the full per-auditor question text, see `ephemeral/pipeline-retro/07-context-gap.md` Section 4.5."
- This file is not listed in Appendix D (File Path Registry). If it doesn't exist or has been moved, the templates are incomplete.
- **Fix:** Verify the referenced file exists; if not, remove the reference or inline the needed content.

---

## CROSS-FILE ISSUES

**CROSS-01 [SIGNIFICANT]** — Three different gate counts across files
- Gate-runner: 43 gates (line 33)
- MANIFEST: 35 gates (line 141)
- Orchestrator: references "GR-29 through GR-32" as relocated, consistent with gate-runner's removal list
- The gate-runner is internally consistent (43). The MANIFEST is stale (35).

**CROSS-02 [SIGNIFICANT]** — Three different PA question counts
- PA Protocol: 69 questions (line 334, 398)
- MANIFEST: 66 questions (line 158)
- The PA Protocol is authoritative. The MANIFEST is stale.

**CROSS-03 [MINOR]** — Recipe file size inconsistency
- MANIFEST header (line 218) says 840 lines, actual file is 910 lines.
- Internally the recipe says "146 items" in header but appendix shows 153.
- The MANIFEST acknowledges the item discrepancy (line 220) but still uses "840 lines."

**CROSS-04 [MINOR]** — "Activation Brief" vs "Execution Brief" naming
- MANIFEST Appendix C (line 845): Defines "Execution Brief" and notes "(Previously called 'Activation Brief' — name retained in some artifacts as legacy.)"
- Gate-runner BV gates (line 82): Uses "activation brief"
- Orchestrator: Uses "activation brief" in some places
- The council retired "Activation" framing (Contradiction A) but the term persists in BV gate descriptions.
- **Fix:** Global find-replace "activation brief" to "execution brief" in gate-runner and orchestrator.

---

## SCORE SUMMARY

| File | Internal Consistency | Clarity | Issues |
|------|---------------------|---------|--------|
| artifact-pa-protocol.md | 4/5 | 5/5 | 2 SIGNIFICANT, 5 MINOR |
| artifact-gate-runner.md | 4/5 | 4/5 | 2 SIGNIFICANT, 6 MINOR |
| artifact-builder-recipe.md | 3/5 | 5/5 | 1 SIGNIFICANT, 3 MINOR |
| artifact-orchestrator.md | 4/5 | 4/5 | 1 SIGNIFICANT, 3 MINOR |
| MANIFEST.md | 3/5 | 5/5 | 2 SIGNIFICANT, 5 MINOR |
| **Cross-file** | — | — | 2 SIGNIFICANT, 2 MINOR |

**Totals:** 10 SIGNIFICANT, 24 MINOR (across files + cross-file). Reduced from raw count: some cross-file issues are the same underlying problem counted once per file (e.g., the gate count discrepancy appears in GATE-01, MANIFEST-01, and CROSS-01 — it's ONE fix needed in ONE file).

**Deduplicated fix list (unique fixes needed):**
1. Update MANIFEST gate count from 35 to 43 (fixes GATE-01, MANIFEST-01, CROSS-01)
2. Update MANIFEST PA question assignments and total from 66 to 69 (fixes MANIFEST-02, CROSS-02)
3. Update MANIFEST Integrative Auditor role description (fixes MANIFEST-03)
4. Reconcile builder recipe header count 146 vs appendix 153 (fixes RECIPE-01)
5. Clarify GR-48's "17 REQUIRED" wording (fixes GATE-02)
6. Fix PA Protocol part numbering (3 / 3.5) (fixes PA-PROTO-01)
7. Fix gate-runner Appendix A Category A misplaced items (fixes GATE-07)
8. Update MANIFEST file line counts (fixes MANIFEST-04)
9. Resolve "activation brief" vs "execution brief" naming (fixes CROSS-04)
10. Clarify container width 1100px vs gate enforcement (fixes RECIPE-02)

---

*Review complete. All 5 files read in full. No sections skipped.*
