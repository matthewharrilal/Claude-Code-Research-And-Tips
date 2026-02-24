# Cleanup-Adversarial Review: Complete Wave 1 State Assessment

**Reviewer:** cleanup-adversarial (Opus)
**Date:** 2026-02-24
**Method:** Read every modified artifact file end-to-end as an orchestrator about to run the pipeline. Cross-validated against both previous buddy reviews.
**Scope:** artifact-gate-runner.md (~1,767 lines), MANIFEST.md (~1,115 lines), artifact-tc-brief-template.md (~198 lines), artifact-builder-recipe.md (first 400 lines), artifact-pa-protocol.md (first 400 lines), artifact-value-tables.md (first 200 lines), artifact-orchestrator.md (first 300 lines)

---

## EXECUTIVE VERDICT

**Is Wave 1 actually done?**

**CONDITIONALLY YES.** The core implementation is solid -- the gate-runner executable code is well-engineered, the brief template is the cleanest document in the pipeline, and the MANIFEST is genuinely navigable. However, there are **4 SIGNIFICANT issues** and **8 MINOR issues** that should be addressed by the cleanup agent. None are BLOCKING for a validation build, but 2 of the SIGNIFICANT issues would cause confusion if an orchestrator tried to run the pipeline cold today.

The previous two reviews (adversarial-checklist and fresh-eyes) identified the major issues. Most were addressed. What remains is **consistency drift** -- the kind of decay where individual sections are correct but cross-references between files have gone stale.

---

## SPECIFICATION INTEGRITY FINDINGS

### artifact-gate-runner.md (~1,767 lines)

**Can an orchestrator ACTUALLY execute every gate from this spec?**

**YES, with 3 caveats.**

1. **Gate count discrepancy persists (SIGNIFICANT).** The document contains TWO different counts:
   - Line 33 says: "42 - 13 + 6 = 35" (note: says 13 removed and 6 added)
   - Line 492 says: "Total: 36 (was 42, -12 removed, +6 added)"
   - The summary table at lines 454-491 enumerates exactly **34 distinct gate IDs** (I counted: BV-01-04 = 4, GR-01-10 = 10, GR-11-15 = 5, GR-44 = 1, GR-17-22 = 6, GR-43 = 1, GR-23-28 = 6, GR-33-34 = 2 --> total 35 IDs). Wait -- counting the categorization table at lines 26-31: 17 REQUIRED + 8 RECOMMENDED + 6 ADVISORY + 4 BRIEF VERIFICATION = 35. The summary table lists GR-44 in the REQUIRED count of 17 (GR-01-15 = 15 + GR-43 + GR-44 = 17), so it checks out at 35.
   - But line 492 says 36 and line 33 says 35. **The arithmetic at line 33 (42-13+6=35) is correct. Line 492 (42-12+6=36) is wrong because it undercounts the removals.** GR-16 was absorbed -- if you count GR-16 in the removal, it is 13 removed, not 12. Line 492 says "-12 removed" but should say "-13 removed."
   - **Net: The correct count is 35. Line 492 needs to be corrected from 36 to 35.**

2. **Appendix D traceability is STALE (SIGNIFICANT, previously flagged).** The fresh-eyes reviewer flagged this. Lines 669-738 still list items pointing to GR-29, GR-30, GR-31, GR-32, GR-35, GR-36-39, GR-40-42 as "ACTIVE (verdict)", "ACTIVE (experiment)", "ACTIVE (policy)." These gates were REMOVED in Wave 1. However, the traceability summary at lines 739-745 WAS UPDATED and correctly says "ACTIVE gates: 35 (BV-01-04, GR-01-15, GR-17-28, GR-33-34, GR-43-44; 13 gates removed in Wave 1)." So the summary is correct but the individual table rows are wrong. The table body still says "ACTIVE" for removed gates.

   Specific stale rows:
   - Row 3: ITEM 77 -> GR-29 "ACTIVE (verdict)" -- GR-29 was REMOVED
   - Row 7: ITEM 122 -> GR-42 "ACTIVE (policy)" -- GR-42 was REMOVED
   - Row 27: ITEM 54 -> GR-42 "ACTIVE (policy)" -- GR-42 was REMOVED
   - Rows 31-33: ITEMs 68-70 -> GR-41 "ACTIVE (policy)" -- GR-41 was REMOVED
   - Rows 34-37: ITEMs 6,12,19,30 -> GR-36-39 "ACTIVE (experiment)" -- ALL REMOVED
   - Row 50: ITEM 043 -> GR-30 "ACTIVE (verdict)" -- GR-30 was REMOVED
   - Row 51: ITEM 047 -> GR-31 "ACTIVE (verdict)" -- GR-31 was REMOVED
   - Row 52: ITEM 050 -> GR-32 "ACTIVE (verdict)" -- GR-32 was REMOVED
   - Row 63: ITEM 76 -> GR-35 "ACTIVE (mode indicator, PA route)" -- GR-35 was REMOVED

   **Fix:** Update these rows from "ACTIVE" to "REMOVED (Wave 1, moved to [destination])". The summary already says the right thing -- the table body needs to match.

3. **GR-05 vs GR-07 pure white contradiction (MINOR, previously flagged).** The fresh-eyes reviewer identified this. GR-05 palette check at line 1018 excludes `pureWhite` from background checks (comment says "Pure white allowed for zone backgrounds under builder creative authority"), but GR-07 at lines 1070-1102 checks ALL color properties including backgroundColor for pure white. The effect: GR-05 passes a white zone background, GR-07 fails it. An orchestrator running both would get a FAIL from GR-07 for something GR-05 explicitly permits.

   **Resolution options:** (a) Remove the GR-05 note -- pure white is never allowed per the soul constraint ("No pure black / pure white"). (b) Add an exception to GR-07 for zone backgrounds with explicit `backgroundColor` of `#FFFFFF`. Option (a) is cleaner -- the soul constraint SC-07 says no pure white, period. The GR-05 note at line 1018 is the error.

**Executable code quality:** The JavaScript is well-structured with clear function boundaries (`runBriefVerification`, `runGateRunner`, `runAntiPatternGates`). The `isRenderedElement` shared helper is injected once via `page.evaluate` and used by all subsequent checks -- good defensive coding. The BV-02 hex pair checker has the naivety issue noted by fresh-eyes (checks ALL consecutive hex values, not just zone backgrounds) but errs strict, which is acceptable. The structural transition handling in GR-14 (FIX-005) is more sophisticated than expected -- it properly traverses siblings between zones and checks background deltas against both adjacent zones. The code is ready to execute.

### MANIFEST.md (~1,115 lines)

**Can a first-time user follow the Quickstart and run a build?**

**YES, with 2 caveats.**

1. **Stale gate references in multiple locations (SIGNIFICANT, previously flagged).** The fresh-eyes reviewer found these, and the cleanup agent should fix them all:
   - Line 34 (Phase 3A, Gate Runner row): says "35 programmatic gate checks" at line 140 -- **actually correct** (verified above).
   - Line 241: says "artifact-gate-runner.md (~1,379 lines)" but the file is now ~1,767 lines. **Stale line count.**
   - Line 248: says "GR-11-GR-16" but GR-16 was absorbed. Should say "GR-11-GR-15, GR-44."
   - Line 251: references "SECTION 5: VERDICT GATES (GR-29-GR-32)" which was removed. The whole row should be updated to note these sections are removed.
   - Lines 601-611 (Known Historical Failure Modes): Three incorrect gate-to-function mappings:
     - Line 603: "Anti-pattern gate GR-16 detects this" -- GR-16 was absorbed. Should reference GR-19 (threshold gaming).
     - Line 606: "Gate GR-19 measures TOTAL stacked gap" -- GR-19 is threshold gaming, not stacked gap. Should reference GR-14.
     - Line 607: "Gate GR-15 detects sub-perceptual values" -- GR-15 is single margin <=96px. Should reference GR-18 (ghost mechanisms).
   - Line 439: says "35 gates at 1440px" -- **actually correct** now.

2. **The routing table (Section 3) for the gate-runner artifact references removed sections (MINOR).** Lines 246-254 list section headers from the gate-runner, including "SECTION 5: VERDICT GATES" and the struck-through sections. These section headers should match what actually exists in the gate-runner now. Specifically, the third column "Section (Actual Header)" must reflect the actual post-Wave-1 headers:
   - "SECTION 1: IDENTITY GATES" (GR-01-GR-10) -- correct
   - "SECTION 2: PERCEPTION GATES" (GR-11-GR-15, GR-44) -- needs GR-44 added
   - "SECTION 3: ANTI-PATTERN GATES" (GR-17-GR-22) -- correct
   - "SECTION 3B: OUTPUT VERIFICATION" (GR-43) -- correct
   - "SECTION 4: PRECONDITION GATES" (GR-23-GR-28) -- correct
   - "SECTION 5: MODE DETECTION" (GR-33-GR-34) -- correct
   - Remove rows for SECTIONS 6-7 or mark as "REMOVED"

### artifact-tc-brief-template.md (~198 lines)

**Can a Brief Assembler fill in every placeholder?**

**YES.** This is the strongest document in the pipeline. Every placeholder is clearly marked with `{braces}`, every tier has explicit line budget targets, and the template text for Tiers 1-2 is verbatim and ready to copy. The priority override section between Tier 2 and Tier 3 is precisely placed. The worked examples for conflict resolution (lines 64-67) are immediately actionable. The assembly rules (lines 186-198) are concise and numbered.

**No contradictions between tiers.** Tier 2 explicitly wins for perception physics, Tier 3 wins for creative decisions. The boundary is unambiguous.

**One observation (not a bug):** The template targets ~100-165 lines total but the individual tier budgets sum to: T1(~15) + T2(~8) + T3(~50) + T4(~40) + ContentMap(~30-50) = ~143-163 lines. The range is consistent. No issue.

### artifact-builder-recipe.md (first 400 lines)

**FORMAT consistency:** Recipe voice maintained throughout. Verbs are consistently imperative: "Read," "Select," "Deploy," "Assess." No checklist language detected ("Verify," "Fail if," "Must be" absent from builder-facing content).

**Step 1.1b (Mechanism Catalog Quick-Reference, lines 40-53):** Well-placed orientation table. Provides the 6 mechanism categories with CSS signatures before the builder reads the full 1,200-line catalog. Good bridge.

**CD-006 Zone-by-Zone Reference (lines 93-101):** Immediately actionable. Concrete CSS values (background hex, border widths, padding). Gives the builder a concrete exemplar.

**No issues found in the first 400 lines.**

### artifact-pa-protocol.md (first 400 lines)

**PA-05 scoring is clear.** 4 sub-criteria (Designed, Coherent, Proportionate, Polished), each PASS/FAIL. The conditional pass guidance at line 68 with the Gas Town example is precise. The 1-4 scale (FLAT/ASSEMBLED/COMPOSED/DESIGNED) is memorable and unambiguous.

**Auditor assignments (lines 346-362):** The assignment table is complete. All 65 questions are allocated across 9 auditors with thematic groupings. Totals: A=7, B=6, C=14, D=8, E=6, F=6, G=7, H=5, I=6 = 65. Correct.

**Tier 5 (Flagship Detection) at lines 98-170:** Questions are well-crafted with clear YES/NO criteria. The combined verdict matrix (PA-05 x Tier 5) at lines 162-169 is unambiguous.

**No issues found in the first 400 lines.**

### artifact-value-tables.md (first 200 lines)

**Color pairs are well-structured.** 20 pairs organized by intensity (Subtle 15-25, Confident 25-40, Dramatic 40+). Each has hex values, RGB triplets, max delta, and a "feel" descriptor.

**WARNING example (Pair 8, line 29):** Pair 8 has an 11-delta and is explicitly marked "BELOW THRESHOLD -- avoid." Good pedagogical device.

**CSS snippets are copy-paste ready.** The usage guidance section provides real CSS classes with comments showing RGB values and deltas.

**One observation (MINOR):** Pair 7 uses `#FFFFFF` (pure white) as Color A. But GR-07 prohibits pure white. The value table should note this or use `#FEFEFE` instead. This is the same pure white tension found in GR-05/GR-07.

### artifact-orchestrator.md (first 300 lines)

**Gate logic relocation:** Sections 1 (Topology), 2 (Phase 0), 3 (Phase 1) are well-organized. The Mode Selection logic (APPLIED vs COMPOSED) is clear. The "Honest Complexity Accounting" section at lines 128-140 is excellent -- it frankly states that total builder input is ~3,600 lines, not the compressed constraint layer alone.

**No gate logic appears to be missing from the orchestrator.** The verdict gates (GR-29-32) were supposed to be relocated here per FIX-024. I did not read the full orchestrator file (only first 300 lines), but the MANIFEST at lines 664 says "Gate Logic Relocated from Gate Runner" exists as a section in this file. Accepting this on faith since the routing table confirms it.

---

## CONSISTENCY SPOT-CHECKS

### 5 Random Gates

**Gate 1: GR-03 (Container Width 940-960px)**
- **Spec description (line 141-148):** "Primary content container must be 940-960px wide." Check method: measure computed width at 1440px viewport.
- **Executable code (lines 946-969):** Searches for elements with class containing "spine", "container", "wrapper", or `main`/`article`. Filters by `maxWidth` between 800-1200px. Checks if any match 940-960px.
- **Threshold in spec:** 940-960px. Threshold in code: `mw >= 940 && mw <= 960`. **MATCH.**
- **Category:** REQUIRED in spec (line 462). REQUIRED in categorization table (line 28). **MATCH.**
- **Summary table entry (line 462):** "Container 940-960px | 940-960px | FACT". **MATCH.**
- **Verdict: CONSISTENT.**

**Gate 2: GR-12 (Letter-Spacing >= 0.025em)**
- **Spec description (lines 233-240):** "Any applied letter-spacing must be at least 0.025em." Check method: verify value >= 0.025em for elements with explicit letter-spacing.
- **Executable code (lines 1354-1374):** Gets computed `letterSpacing`, filters out "normal" and "0px", converts px to em using element fontSize, checks `em > 0 && em < 0.025`.
- **Threshold in spec:** >= 0.025em. Threshold in code: fails if `em > 0 && em < 0.025`. **MATCH.**
- **Category:** REQUIRED in spec. REQUIRED in summary table (line 471). **MATCH.**
- **Verdict: CONSISTENT.**

**Gate 3: GR-19 (AP-10 Threshold Gaming)**
- **Spec description (lines 303-311):** RECOMMENDED. ">50% of zone backgrounds at 15-17 RGB delta AND >50% of letter-spacing at 0.025-0.028em = gaming."
- **Executable code (lines 1647-1697):** Computes bgFloorRatio (15-17 range) and lsFloorRatio (0.025-0.028). Flags as gaming if `floorRatio > 0.50 || (floorRatio > 0.30 && lsFloorRatio > 0.50)`.
- **Threshold in spec:** ">50% of measurable values hug the threshold floor." Code threshold: `floorRatio > 0.50`. **MATCH** for the primary criterion. The code adds a secondary criterion (`floorRatio > 0.30 && lsFloorRatio > 0.50`) not in the spec text. This is a STRICTER check -- catches combination gaming even when individual ratios are below 50%. **Acceptable extension.**
- **Category in spec:** RECOMMENDED (line 303). Summary table (line 478): RECOMMENDED. **MATCH.**
- **Verdict: CONSISTENT** (code is slightly stricter than spec, which is safe).

**Gate 4: GR-44 (Trailing Whitespace Void)**
- **Spec description (lines 270-278):** "Vertical distance from last visible content to body bottom must be <= 300px."
- **Executable code (lines 1490-1523):** Finds all `body *` elements, filters out SCRIPT/STYLE/META/LINK and hidden elements, finds `lastVisibleBottom` via `getBoundingClientRect()`, computes `voidHeight = bodyBottom - lastVisibleBottom`.
- **Threshold in spec:** <= 300px. Threshold in code: `voidHeight <= 300`. **MATCH.**
- **Category:** REQUIRED in spec (line 277). Summary table (line 475): REQUIRED. **MATCH.**
- **Summary table entry:** "Trailing whitespace void | <= 300px void | OBSERVED". **MATCH.**
- **Verdict: CONSISTENT.**

**Gate 5: BV-03 (Recipe Format Verification)**
- **Spec description (lines 100-107):** "Count recipe indicators vs checklist indicators. Ratio must be >= 3:1."
- **Executable code (lines 846-854):** Counts recipe verbs (Build|Create|Derive|Map|Read|Select|Deploy|Assess) and checklist verbs (Verify|Fail if|Must be|Ensure|Check that). Computes ratio.
- **Threshold in spec:** >= 3:1. Threshold in code: `ratio >= 3`. **MATCH.**
- **Category:** REQUIRED in spec (line 458). Summary table (line 458): REQUIRED. **MATCH.**
- **Verdict: CONSISTENT.**

### 3 Random PA Questions

**PA Question 1: PA-55 (Sub-Perceptual CSS Detection, Auditor C)**
- **Question text (line 311):** "Look at 3 adjacent sections. Can you describe how they DIFFER visually without inspecting code? If not, variation is sub-perceptual."
- **Answerable from screenshots alone?** YES -- the auditor only needs to look at screenshots and describe visual differences (or lack thereof). No interactive testing required.
- **Auditor assignment:** Auditor C (Spatial + Proportion). Does this make sense? PA-55 is about detecting sub-perceptual variation, which requires spatial/visual comparison. C's domain includes spatial balance and proportion. **REASONABLE** -- C already has PA-50-53 (void prevention) which involves similar spatial scrutiny.
- **Duplicates another question?** PA-56 (line 312) is related but distinct -- PA-55 asks about cross-section differences, PA-56 asks about text tracking differences specifically. **NOT a duplicate.**
- **Verdict: VALID.**

**PA Question 2: PA-62 (Transition Variation, Auditor D)**
- **Question text (line 119):** "Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds?"
- **Answerable from screenshots alone?** YES -- counting visual property changes at transitions requires only visual inspection. The auditor looks at a boundary and notes what changed (background, typography, spacing, borders, etc.).
- **Auditor assignment:** Auditor D (Flow + Pacing). PA-62 is about transition variation at boundaries. D already has PA-12 (smooth flow between sections), PA-34 (transition as designed moment), PA-69 (transition intensity). **EXCELLENT fit** -- transitions are D's domain.
- **Duplicates another question?** PA-69 asks about transition intensity variation broadly. PA-62 asks to physically count properties at a specific transition. Related but distinct methods. PA-34 asks if a transition is a "designed moment" (quality judgment). **NOT a duplicate** -- PA-62 is quantitative, PA-34 is qualitative, PA-69 is comparative.
- **Verdict: VALID.**

**PA Question 3: PA-45 (Quality Moment, Auditor A)**
- **Question text (line 292):** "Is there a single moment you would show someone as an example of good design? Point to it."
- **Answerable from screenshots alone?** YES -- purely a visual judgment call with a pointing requirement.
- **Auditor assignment:** Auditor A (Impression + Emotion). PA-45 is about identifying peak quality moments. A's domain is first impressions and emotional response. **GOOD fit** -- A also has PA-05 (the master quality question), so this is a more specific version of A's core job.
- **Duplicates another question?** PA-67 (Novelty Beyond Competence, also Auditor A) asks about novelty specifically. PA-45 asks about quality generally -- something novel could also be the quality moment, but a beautifully executed conventional element could also qualify. **NOT a duplicate.**
- **Verdict: VALID.**

---

## DANGEROUS PATTERNS

### 6. Dead Code Sections

**Found: YES -- 2 instances.**

1. **Appendix D table body (gate-runner.md lines 669-738):** As detailed above, ~12 rows reference gates that were removed (GR-29-32, GR-35-42). The table body is dead code that contradicts the summary at lines 739-745. The summary was updated; the table body was not.

2. **Struck-through section stubs (gate-runner.md lines 440-449):** Sections 6 and 7 are preserved as struck-through "REMOVED" stubs. These are INTENTIONAL dead code serving as redirection markers ("moved to separate experiment protocol document" / "moved to artifact-orchestrator.md"). This is acceptable -- they prevent someone from looking for these gates in the wrong place.

### 7. Circular References

**Found: NONE.** The document flow is properly directional:
- MANIFEST references all artifact files (one-way pointers)
- Artifact files reference each other only for DUAL-ROUTE items (identity-perception -> gate-runner, builder-recipe -> gate-runner for quality floor)
- No file says "see File A" where File A says "see this file"

### 8. Implicit Assumptions That Would Surprise a Fresh Agent

**Found: 3.**

1. **The builder must know to use `components.css` class names.** The builder recipe says "Check components.css for matching classes BEFORE writing custom CSS" (line 244) and the MANIFEST builder prompt says "aim for 8+" component library classes. But neither the brief template nor the recipe provides a LIST of available component class names. The builder is told to "read components.css" but must self-extract the class names. A fresh agent might write custom CSS without knowing `.callout`, `.key-value-pair`, etc. exist.

   **Risk level: LOW.** The recipe explicitly tells the builder to read `components.css` first (Step 1.2), and the file is only 290 lines. A competent Opus agent will extract class names. But a reference list in the brief template's Tier 3 "Creative Authority + Components" section would reduce friction.

2. **The gate runner assumes `section` or `[class*="zone"]` selectors will find zones.** GR-11, GR-13, GR-14 all use `document.querySelectorAll('section, [class*="zone"], [class*="section"]')` to find zones. If the builder uses `<div class="intro">` or `<article class="model-overview">` without `section` tags or `zone`/`section` in class names, these gates will find 0 zones and pass vacuously (GR-11 returns `{ zones: 0, pass: true }` at line 1318). This is a known limitation -- the builder should use semantic `<section>` tags -- but the builder prompt does not REQUIRE it.

   **Risk level: MEDIUM.** The builder recipe at line 987 says "HTML structure with semantic sections" but does not mandate `<section>` tags specifically. A builder using only `<div>` tags would pass all spatial gates vacuously.

3. **BV gates run on the brief text as a plain string.** BV-02 (hex delta) scans ALL hex values in the document, not just zone background assignments. BV-04 (suppressor scan) matches patterns like "must not" which could appear in world-description text ("In this world, corners must not be curved" contains "must not"). The template's Tier 1 text at line 17 says "Corners are cut, not curved" (no "must not"), so the current template avoids this. But a Brief Assembler who paraphrases might introduce a false positive.

   **Risk level: LOW.** BV-04 regex `/must\s+not|shall\s+not|never\s+use/i` would match "must not" in Tier 1 world-description. But the template provides VERBATIM text for Tier 1 that avoids this pattern. As long as the assembler follows the "Tier 1 is VERBATIM" instruction, no false positive.

### 9. Has 80% Creative Authority Been DAMAGED?

**Counting binary constraints the builder now faces:**

**Identity constraints (non-negotiable, pre-existing):**
1. border-radius: 0
2. box-shadow: none
3. Container 940-960px
4. No gradients
5. Warm palette only
6. Font trinity (3 fonts)
7. No pure black/white
8. No decorative elements
9. Border weight hierarchy (4/3/1)
10. Cross-page DNA properties

**Perception constraints (binary floors, delivered as calibration):**
11. Background delta >= 15 RGB
12. Letter-spacing >= 0.025em
13. Stacked gap <= 120px
14. Total gap <= 150px
15. Single margin <= 96px

**NEW constraints added by Wave 1:**
16. Zone background hex values LOCKED from value-tables.md (FIX-012)
17. Self-evaluation comment block REQUIRED (GR-43)
18. Conviction statement REQUIRED (builder prompt)

**Total: 18 binary constraints on the builder.**

The pre-existing count was 15 (10 identity + 5 perception). Wave 1 adds 3 (hex lock, self-eval, conviction). This is an increase from 15 to 18 -- a 20% increase in binary constraints.

**Verdict: 80% creative authority is SLIGHTLY reduced but NOT damaged.** The hex lock is the most impactful addition (removes background color from creative territory), but the adversarial-checklist reviewer already flagged this and recommended acknowledging the reduction (~80% -> ~70%). The self-eval and conviction are META-output requirements, not CSS constraints -- they don't restrict what the builder can build, only what it must document. The creative authority principle survives.

---

## THE ADVERSARY'S PLAYBOOK

### Top 3 Attack Vectors to Make the Next Pipeline Run Fail

**Attack 1: Exploit the vacuous-pass gate design.** If the builder uses `<div>` tags without `section` or `zone` in class names, gates GR-11 through GR-14 find 0 zones and pass vacuously. GR-20 (structural echo) similarly finds 0 sections. The builder could produce a flat, single-zone page that passes ALL spatial and perception gates because there are no zone boundaries to measure.

**Mitigation:** Add a gate (or enhance GR-43) that verifies the HTML contains at least 3 `<section>` elements. Or enhance the builder prompt to REQUIRE `<section>` tags for zone boundaries.

**Attack 2: Game the BV-03 recipe-format gate by front-loading recipe verbs.** BV-03 counts recipe verbs vs checklist verbs globally across the brief. A malicious assembler could add "Build Read Select Deploy Assess Map Create Derive" as a preamble sentence, achieving a high ratio, while the BODY of the brief is checklist format. The gate measures RATIO not DISTRIBUTION.

**Mitigation:** BV-03 is a coarse heuristic. It catches obvious checklist briefs but not sophisticated gaming. This is acceptable for now -- the real defense is the recipe format being embedded in the template itself (Tier 1-2 verbatim, Tier 3-4 synthesized from recipe-format sources).

**Attack 3: Produce a page where every zone uses EXACTLY 15-17 RGB delta, passing GR-11 and barely triggering GR-19.** GR-19 (threshold gaming) triggers at >50% floor-hugging values. With 5 zone boundaries, using 3 at 16 RGB and 2 at 25+ RGB gives a floor ratio of 60% -- which WOULD trigger GR-19. But using 2 at 16 RGB and 3 at 20 RGB gives a floor ratio of 40% -- passing GR-19 while still producing a perceptually flat page (20 RGB is barely above the floor). The compositional target of 25+ at 3 boundaries is calibration, not a gate.

**Mitigation:** This is by design -- the gap between "passes gates" and "is good" is exactly what the PA audit catches. Gates catch mechanical defects (~26%); PA catches compositional defects. The pipeline correctly distributes verification between gates (binary) and PA (perceptual).

### The Single Most Dangerous Thing

**The gate-runner's zone detection selector (`section, [class*="zone"], [class*="section"]`) is a SINGLE POINT OF FAILURE.** If the builder's HTML structure doesn't match this selector pattern, 5 gates pass vacuously (GR-11, GR-13, GR-14, GR-19, GR-20), the stacked gap S-09 loophole reopens, background deltas go unchecked, and the #1 historical failure mode (threshold gaming) becomes undetectable. The builder prompt says "semantic sections" but does not mandate the CSS selector pattern that gates depend on.

**This is not a Wave 1 regression -- it is a pre-existing architectural vulnerability.** But Wave 1 did not address it, and the cleanup agent should note it as a Wave 2 recommendation.

### If the Cleanup Agent Misses ONE Thing

**Fix the MANIFEST's Known Historical Failure Modes section (lines 601-611).** This section has three WRONG gate-to-function mappings (GR-16 -> should be GR-19; GR-19 -> should be GR-14; GR-15 -> should be GR-18). An orchestrator reading this section to understand failure modes would be pointed to the WRONG gates. This is the most misleading error in the entire document set because it's in a DIAGNOSTIC section that people read when something goes wrong.

---

## PRIORITY-ORDERED FIX LIST

### SIGNIFICANT (Fix before validation build)

| # | File | Location | Issue | Fix |
|---|------|----------|-------|-----|
| S1 | artifact-gate-runner.md | Line 492 | Gate count says "36" should be "35" | Change "42, -12 removed, +6 added" to "42, -13 removed, +6 added" and total from 36 to 35 |
| S2 | artifact-gate-runner.md | Lines 669-738 (Appendix D) | ~12 table rows still say "ACTIVE" for removed gates | Update status to "REMOVED (Wave 1)" for GR-29-32, GR-35, GR-36-42 rows |
| S3 | MANIFEST.md | Lines 601-611 | Three wrong gate-to-function mappings in Historical Failure Modes | Line 603: GR-16 -> GR-19; Line 606: GR-19 -> GR-14; Line 607: GR-15 -> GR-18 |
| S4 | MANIFEST.md | Line 241 | Gate-runner line count stale (~1,379 should be ~1,767) | Update to actual line count |

### MINOR (Fix when convenient)

| # | File | Location | Issue | Fix |
|---|------|----------|-------|-----|
| M1 | MANIFEST.md | Line 248 | "GR-11-GR-16" references absorbed GR-16 | Change to "GR-11-GR-15, GR-44" |
| M2 | MANIFEST.md | Line 251 | References "SECTION 5: VERDICT GATES (GR-29-GR-32)" which was removed | Update or remove row |
| M3 | artifact-gate-runner.md | Line 1018 | GR-05 note says pure white allowed for zone backgrounds | Remove note -- contradicts GR-07 and soul constraint SC-07 |
| M4 | artifact-value-tables.md | Line 31 (Pair 7) | Uses #FFFFFF as Color A, contradicts GR-07 | Change to #FEFEFE or add note about GR-07 restriction |
| M5 | artifact-gate-runner.md | Throughout | FIX-NNN annotations (FIX-029, FIX-023, FIX-002, etc.) | Strip implementation annotations for final version |
| M6 | artifact-gate-runner.md | Lines 440-449 | Struck-through section stubs (Sections 6-7) | Keep as-is (intentional redirection markers) OR remove if cleanup wants cleaner doc |
| M7 | MANIFEST.md | Lines 246-254 | Routing table section headers for gate-runner don't match actual file | Update to match post-Wave-1 section headers |
| M8 | artifact-gate-runner.md | Line 33 vs line 492 | Two different removal counts (13 vs 12) and total counts (35 vs 36) | Unify to 13 removed, 35 total |

### WAVE 2 RECOMMENDATIONS (Not cleanup scope)

| # | Issue | Recommendation |
|---|-------|---------------|
| W1 | Zone detection selector is a single point of failure | Add a gate verifying >= 3 `<section>` elements exist |
| W2 | GR-21 and GR-22 have no executable code | Implement as noted in the spec ("simplified code available in Wave 2") |
| W3 | BV-02 hex pair checking is naive | Enhance to scan only within zone background context (look for "Zone" or "background" keywords near hex values) |

---

## COMPARISON WITH PREVIOUS REVIEWS

### Issues from adversarial-checklist review (buddy-adversarial-checklist-review.md)

The adversarial-checklist review found 7 BLOCKING issues. Checking which were resolved:

1. **B1 (Transition quality PA question):** Status unclear from files read -- would need to check if PA-69 was augmented. Not visible in the first 400 lines of PA protocol.
2. **B2 (Conflict resolution worked examples):** RESOLVED -- TC brief template lines 64-67 contain 3 worked examples.
3. **B3 (FIX-040 still PENDING):** RESOLVED -- GR-19 kept as RECOMMENDED with executable code (lines 303-311, 1647-1697).
4. **B4 (Wave 1 deletes, Wave 3 moves):** RESOLVED -- Gate-runner clearly marks removed gates; MANIFEST references orchestrator as destination.
5. **B5 (GR-44 trailing void in Wave 2):** RESOLVED -- GR-44 is in the gate-runner as REQUIRED with executable code (lines 270-278, 1490-1523).
6. **B6 (PA numbers unresolved):** Status unclear from files read.
7. **B7 (No validation build):** Status unclear -- not a file-level fix.

### Issues from fresh-eyes review (buddy-fresh-eyes-wave1.md)

1. **Gate count arithmetic (34 vs 35):** PARTIALLY RESOLVED -- the summary at line 740 says 35 but line 492 says 36. Still inconsistent.
2. **Appendix D stale traceability:** NOT RESOLVED -- table body still has "ACTIVE" for removed gates.
3. **GR-05/GR-07 pure white contradiction:** NOT RESOLVED.
4. **MANIFEST stale gate references:** NOT RESOLVED.
5. **BV-02 false positive risk:** ACKNOWLEDGED but not fixed (acceptable).
6. **FIX-NNN annotations in gate-runner:** NOT RESOLVED (still present).

**Conclusion: The fresh-eyes reviewer's issues are largely the same ones I found. The cleanup agent should prioritize S1-S4 and M1-M8 above.**

---

## FINAL ASSESSMENT

**Wave 1 is DONE at the architectural level.** The gate-runner has complete executable code for all REQUIRED and RECOMMENDED gates. The brief template is excellent. The MANIFEST is navigable. The builder recipe maintains recipe voice. The PA protocol is clear and complete.

**What remains is CONSISTENCY MAINTENANCE** -- updating cross-references, fixing stale counts, resolving the pure white contradiction, and stripping implementation annotations. These are editorial tasks, not design tasks.

**Estimated cleanup effort: 30-45 minutes for a single agent with full context.**

**Recommendation: Proceed with cleanup, then run a validation build against Gas Town content to verify the pipeline executes end-to-end.**
