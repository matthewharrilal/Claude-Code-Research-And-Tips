# 16 -- CONTRARIAN CHALLENGE: What Will Fail on the First Run?

**Agent:** orchestrator-researcher (Opus 4.6, contrarian mode)
**Date:** 2026-02-19
**Task:** #15 -- Read ALL draft sections. Challenge everything. Be ruthless but constructive.
**Sources:** All 8 DRAFT-* files (DRAFT-09, DRAFT-10, DRAFT-11, DRAFT-12, DRAFT-13, DRAFT-13-architecture-section, DRAFT-orchestrator, DRAFT-pa-questions)

---

## METHOD

I read every draft section completely. For each, I asked:
1. Will the fresh instance actually follow this?
2. What will it skip or misinterpret?
3. What is ambiguous?
4. Where will it make wrong assumptions?
5. What is the weakest link?
6. What would I bet WILL fail on the first run?

I organize challenges by severity: WILL FAIL (>70% probability), LIKELY FAIL (50-70%), RISK (30-50%), MINOR (<30%).

---

## WILL FAIL (>70% probability)

### WF-1: Two Competing DRAFT-13 Files Will Confuse the Assembler

There are TWO files covering the same territory:
- `DRAFT-13-claude-md-architecture.md` (891 lines, from nav-researcher)
- `DRAFT-13-claude-md-architecture-section.md` (886 lines, from claude-md-architect)

Both contain:
- Edits to design-system/CLAUDE.md (8 edits vs 11 edits -- DIFFERENT COUNTS)
- Edits to compositional-core/CLAUDE.md (6 edits vs 9 edits -- DIFFERENT COUNTS)
- Validation protocol (similar but different framing)
- Architecture blueprint (overlapping but non-identical recommendations)

**Specific conflicts:**
- Nav-researcher's Edit 4 replaces the SKILLS section with one version; claude-md-architect's A-EDIT-4 replaces it with a DIFFERENT version (different formatting, different wording for "NOT invoked for" clause)
- Nav-researcher has 8 CLAUDE.md edits; claude-md-architect has 11 (adds edits for perceptual cost economics, Layer 4 reference, and experiment lessons)
- The verification checklist edits differ: nav-researcher says "no letter-spacing < 0.02em"; claude-md-architect says "no sub-perceptual CSS (SC-14)" -- different specificity levels
- Nav-researcher's validation protocol runs Build A (Gas Town) first; claude-md-architect's runs Build 2 (Gas Town) first -- same order but different NAMING that will confuse if both are ingested

**What will happen:** The assembler will encounter two versions of the same material and either:
(a) Pick one and miss unique content from the other, OR
(b) Try to merge them and create contradictions

**Fix:** The assembler MUST receive a directive: "DRAFT-13-claude-md-architecture-section.md is the PRIMARY source for Section A and B edits (more complete, 11+9 edits). DRAFT-13-claude-md-architecture.md is the PRIMARY source for Section D architecture blueprint (better structured). For Section C validation, use claude-md-architect's version (explicit verification layers)." Alternatively, merge them into a single canonical version BEFORE assembly.

---

### WF-2: DRAFT-12 Skill Edits Reference Exact Line Numbers That Will Shift

DRAFT-12 specifies execution order "work bottom-up to preserve line numbers" with specific line references (e.g., "A10b -- tokenization optional language -- line 1618", "A8 -- fractal tier requirements -- line 1432"). But:

1. The TC skill is 1,933 lines. Edits applied in sequence will shift ALL subsequent line numbers.
2. The bottom-up strategy helps but is not sufficient -- some edits INSERT content (E-01, E-02, E-03, E-04, E-05, E-06), which ADD lines, shifting everything below.
3. The edit order puts INSERTIONS in the middle of the sequence (steps 7-11 are insertions, but steps 12-22 are supposed to use pre-shift line numbers that are now wrong).

**Specific failure scenario:** After A-E02 inserts ~35 lines of fractal echo content at Phase 4.7, the line numbers for EVERY subsequent edit (A-E03, A-E01, A7b, A7a, A6, A-E05, A-E04, A5, A4, A3, A2, A1) are ALL wrong by 35+ lines. The bottom-up strategy only works if ALL edits are BELOW the current position, but the insertions are scattered.

**Mitigation present in draft:** The draft says "If the agent cannot find the exact old_string (because the surrounding context differs), search for 'Passing criteria:' near the fractal gate to locate the replacement zone." This is good but relies on the agent being smart enough to SEARCH rather than FAIL.

**What will happen:** The Edit tool uses exact string matching, not line numbers. If the old_string text is exact, line numbers are irrelevant. The risk is that prior edits CHANGE the old_string of a subsequent edit. Let me check...

**Cross-contamination check:** Edit A-E02 changes the fractal gate content. Its old_string is the text produced by R-08's new_string. If R-08 runs FIRST (it does -- step 9 in the bottom-up order), then A-E02 (step 8) finds its old_string correctly. But wait -- R-08 is step 9 and E-02 is step 8. E-02 runs BEFORE R-08. That means E-02's old_string references the ORIGINAL content, not R-08's new content. But E-02's old_string STARTS with R-08's new_string ("**Requirement:** 5 scales required..."). This means E-02 depends on R-08 having already run. The execution order has E-02 at step 8 and R-08 at step 9. **THIS IS A DEPENDENCY VIOLATION.** E-02 will fail because its old_string does not yet exist in the file.

**Fix:** Swap steps 8 and 9 in the execution order. R-08 must run BEFORE E-02. Or better: combine R-08 and E-02 into a single edit that replaces the original fractal gate content directly with the final enhanced version.

---

### WF-3: The Conventions Brief is 232 Lines, Not the ~100 the Research Recommended

The master synthesis (Report 17) and contrarian challenge (Report 16) from the fat-core-capability research both recommend ~100 lines for the builder-facing brief. The PV2 implementation guide recommends the same. But DRAFT-09 produces a 232-line conventions brief.

This is not inherently wrong -- the research was about INSTRUCTION lines to a builder, and this brief is WORLD-DESCRIPTION, which the research says scales differently. But the risk is:

1. The builder receives 232 lines of brief + tokens.css (~400 lines) + prohibitions.md (~100 lines) + mechanism-catalog.md (1,218 lines, "first 200" but the builder may read more) = ~900+ lines of input
2. This is within the "attention degradation zone" identified in the metacog analysis
3. The conventions brief ALSO says "Read this brief once, fully. Then build." -- a 232-line "read once" is optimistic

**What will happen:** The builder will skim the brief. Sections 1-4 (Identity, Perception, Richness, Multi-Coherence) will get full attention. Sections 5-14 (Fractal Echo through Responsive) will get progressively less attention. The Conviction Card (Section 12 equivalent) and Process section will be skimmed or ignored.

**Fix:** The brief's own structure should front-load the highest-leverage content. Currently it does (Identity + Perception are sections 1-2). But add a ">>> READ ALL 14 SECTIONS. If you stop at section 8, you will miss: accessibility requirements, responsive behavior, the conviction card, and the build process." warning at the end of Section 4.

---

## LIKELY FAIL (50-70% probability)

### LF-1: SC-14 Sub-Perceptual Gate Will Have False Positives

SC-14 Sub-check 3 checks for intra-zone background deltas between 1-14 RGB. The JS code:

```js
const children = zone.querySelectorAll('*');
const bgs = [...children].map(el => parseRGB(getComputedStyle(el).backgroundColor));
for (let i = 0; i < bgs.length; i++) {
  for (let j = i + 1; j < bgs.length; j++) {
    // ... if delta >= 1 && delta <= 14 return FAIL
```

This checks EVERY element pair within a zone. But many elements inherit the zone's background color (transparent -> inherits parent bg). Two elements that both show the zone's background will have delta = 0 (PASS). But elements with SLIGHTLY different backgrounds from semantic markup (e.g., a callout with `--bg-info: #F5F8FA` inside a zone with `--bg: #FEF9F5`) will trigger this gate.

**The problem:** The callout exception for SC-04 (warm palette) exists, but SC-14 has NO callout exception. A blue-tinted info callout background (#F5F8FA) inside a cream zone (#FEF9F5) has RGB deltas of (9, 1, 5) -- max delta 9, which is in the 1-14 range. SC-14 will FAIL on this legitimate design pattern.

**What will happen:** The first build will use callouts (the conventions brief explicitly teaches the callout accent system). SC-14 will flag every callout as a sub-perceptual violation. The builder will be told to remove subtle background tints from callouts, which destroys the design system's component vocabulary.

**Fix:** Add the same exemption to SC-14 Sub-check 3 that SC-04 has: exclude elements within `.callout-*`, `[data-accent]`, or `[data-inverted]` containers from the intra-zone bg delta check.

---

### LF-2: The Orchestrator References `merged-components.css` in the Builder Spawn Prompt

DRAFT-11 (my own file) contains in the builder spawn prompt:

```
6. design-system/compositional-core/components/merged-components.css -- component library
```

DRAFT-09 explicitly corrected ALL references to `merged-components.css` -> `components.css`. DRAFT-10 also made this correction. But DRAFT-11 (the orchestrator) was written before those corrections were finalized and still has the wrong filename.

**What will happen:** The builder reads a file that does not exist. It either errors or reads nothing, meaning the component library is invisible to the builder -- exactly the "inverted quality routing" failure from the Flagship.

**Fix:** Change `merged-components.css` to `components.css` in DRAFT-11's builder spawn prompt. The assembler must catch this.

---

### LF-3: SC-10 Threshold Mismatch: 120px vs 108px

DRAFT-10 (gate runner) sets SC-10 threshold at 120px: "Total stacked gap <= 120px at EVERY zone boundary". The cross-validation note explains: "Changed to 120px. Matches remediation audit FINAL-VERDICT.md empirical concern level."

But DRAFT-09 (conventions brief) says: "Stacked gaps above 108px create voids." And the orchestrator (DRAFT-11) says: "Zero void patterns (>108px empty)". And DRAFT-13 says: "<= 108px total stacked gap at boundaries (SC-10)".

**Three different thresholds for the same gate:**
- Gate runner: 120px
- Conventions brief: 108px
- CLAUDE.md edits: 108px

**What will happen:** The builder targets 108px (from the conventions brief). The gate passes at 120px. A page with 115px gaps will pass the gate but the PA auditors (reading the conventions brief that says 108px) will flag it as a void. Contradiction between programmatic verification and perceptual expectation.

**Fix:** Pick ONE number. The conventions brief says 108px and multiple sources corroborate this. Change SC-10 in the gate runner to 108px. If 120px is genuinely the right threshold, update the conventions brief and CLAUDE.md edits to match.

---

### LF-4: PA Auditor Question Counts Are Inconsistent

DRAFT-11 assigns 56 questions (48 standard + 8 Tier 5). But the assignments don't add up:

| Auditor | Questions Listed | Count |
|---------|-----------------|-------|
| A | PA-01, 04, 05, 18, 19, 20, 45, **65**, **67** | 9 |
| B | PA-02, 06, 07, 08, 29 | 5 |
| C | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **64**, **66** | 13 |
| D | PA-12, 13, 34, 35, 36, **62** | 6 |
| E | PA-14, 15, 37, 38, 39, **63** | 6 |
| F | PA-16, 17, 40, 41, **60**, **61** | 6 |
| G | PA-42, 43, 44 | 3 |
| H | PA-21, 22, 23, 46, 47 | 5 |
| I | PA-26, 27, 28, 48 | 4 |
| **TOTAL** | | **57** |

That's 57 questions, not 56. Let me recount the standard questions: 01, 02, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53. That's 49 standard questions. Plus 8 Tier 5 = 57 total.

**PA-03 is missing from all auditor assignments.** Is this intentional? There are 48 standard PA questions in the skill, but the assignments list 49 standard questions. Wait -- the PA skill has PA-01 through PA-53, but not all numbers are used (PA-03, PA-24, PA-25, PA-49 may not exist). The actual count depends on which PA numbers exist.

**What will happen:** If the actual PA skill has 48 questions and the assignments list 49, one question is either missing or double-counted. The weaver will get 9 reports with inconsistent question coverage.

**Fix:** The assembler must reconcile this. Read the actual PA skill file and verify exactly which PA numbers exist. Produce a verified assignment table.

---

### LF-5: DRAFT-12 Skill Edits Have Unverified old_strings

DRAFT-12 contains 35 Edit tool operations with exact old_string/new_string pairs. But these were written by an agent reading the skills ONCE, without running the actual Edit tool. Several risks:

1. **Whitespace sensitivity.** If the actual skill file has trailing spaces, or different indentation, or smart quotes instead of straight quotes, the old_string will not match.
2. **Prior edits changing the target.** The execution order (Section C) carefully sequences edits bottom-up, but if ANY edit fails and the agent skips it, all subsequent edits that depend on it will also fail (or produce garbled output).
3. **The anchor text for E-01 is WRONG.** The edit says to find "These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality -- both must pass." and notes "This anchor is in the PA skill, not TC skill." But then says the enrichment should go into TC SKILL.md Phase 4.3. The anchor text is in the WRONG FILE. The instruction says to use this anchor to find the insertion point but then immediately contradicts itself.

**What will happen:** At least 3-5 of the 35 edits will fail on first attempt due to whitespace mismatches or context shifts. The agent will need to read the actual file, find the closest match, and adapt. This is recoverable but adds 15-30 minutes and risks cascading failures.

**Fix:** The master prompt should include a fallback instruction: "If any edit's old_string does not match exactly, READ the file around the expected location, find the actual text, and adapt the edit. Do NOT skip failed edits -- each edit may be a dependency for later edits."

---

## RISK (30-50% probability)

### R-1: The Conventions Brief May Drift to Checklist Despite Explicit Warnings

Both DRAFT-13 files estimate 40-50% probability that the conventions brief will drift to checklist format. The brief itself (DRAFT-09) is well-crafted with ~55% world-building language. But the PROCESS section (end of the brief) shifts to imperative verbs: "Understand. Plan. Build. Verify." with sub-steps that feel like a checklist ("After HTML skeleton: landmarks present, skip link works, component classes in place").

The risk is not in the brief as drafted -- it's good. The risk is that the ASSEMBLER or the FRESH INSTANCE modifies the brief during assembly, inserting constraint language from the gate runner or PA sections. The assembler is told to incorporate sections "not copy them verbatim," which creates insertion opportunities.

**Fix:** Mark the conventions brief as LITERAL -- it should be copied verbatim into the output file, not composed by the assembler. The assembler can add surrounding instructions but should not modify the brief's content.

---

### R-2: The Orchestrator Expects `components.css` But the Actual File Might Be Named Differently

DRAFT-09 corrected all references to `components.css`. But DRAFT-12 (skill edits) still references `merged-components.css` in one place: "RC-9 Component library invisible -- ADDRESSED -- merged-components.css in builder manifest" (line 622 of DRAFT-11). This is in a CROSS-REFERENCE NOTE, not in the actual prompt content, so it's lower risk. But if the assembler copies cross-reference notes into the prompt, the wrong filename propagates.

**Fix:** Search ALL drafts for `merged-components` and replace with `components.css`. There should be zero instances of the old name in any prompt-facing content.

---

### R-3: The Master Prompt Architecture Has Two Competing Blueprints

DRAFT-13 (nav-researcher) recommends 8 sections, 400-500 lines, with "Section 4: Operational Recipe" as a separate file creation task.

DRAFT-13-architecture-section (claude-md-architect) recommends 8 sections, 375-470 lines, with operational recipe as Section 4.

Both are similar but differ on:
- Target length (400-500 vs 375-470)
- Format ratio (60/40 literal/instruction vs "10% conventions, 75% recipe, 15% checklist")
- Number of self-checks (4 vs 4 -- same)
- Anti-skimming techniques (10 vs 6)
- "No new concepts after line" threshold (400 vs 300)

The "no new concepts" threshold difference (400 vs 300) matters: it determines whether Sections 5-6 can introduce new ideas or must be purely mechanical. 300 is more conservative.

**Fix:** Use the MORE CONSERVATIVE threshold (300). Better to front-load too aggressively than to lose critical content in the attention trough.

---

### R-4: DG-4 (Handoff Validation) Expects YAML But the Builder May Not Produce YAML

DG-4 checks `_build-plan.yaml` with 5 sub-checks (zone_count, bg_deltas, mechanisms, transitions, grid_layouts). But the conventions brief (DRAFT-09) asks for a conviction statement and fractal echo table in `_build-log.md`, not a YAML file. The builder spawn prompt (DRAFT-11) asks for `_build-log.md` and `_cascade-value-table.md`.

Where does `_build-plan.yaml` come from? The gate runner (DRAFT-10) says "Builder's `_build-plan.yaml` satisfies 5 sub-checks" but no other draft tells the builder to PRODUCE a `_build-plan.yaml`. The builder is told to write a conviction statement and fractal echo table in the build log, which is markdown, not YAML.

**What will happen:** DG-4 will attempt to parse a YAML file that does not exist. It will fail. The orchestrator will tell the builder to produce a YAML file, which is not in the builder's instructions.

**Fix:** Either (a) add `_build-plan.yaml` to the builder's deliverable list with a YAML template, or (b) change DG-4 to parse the conviction statement and fractal echo table from `_build-log.md` instead.

---

### R-5: BG-2 (Metaphor Structural Check) Has No Implementation Path

BG-2 says: "Fresh-eyes Opus agent reads the build plan (without reading the build log). Binary judgment: STRUCTURAL or ANNOUNCED."

But the orchestrator (DRAFT-11) has no step for spawning this fresh-eyes agent. The Wave structure is: Wave 1 (builder), then gate runner (orchestrator), then screenshot capture, then Wave 2 (9 PA auditors + 1 weaver). There is no wave for BG-2.

The gate runner (DRAFT-10) notes: "BG-2 runs at Wave 0.5 BEFORE the build starts." But the orchestrator's Wave structure starts at Wave 1 (builder). Wave 0.5 does not exist in the orchestrator.

**What will happen:** BG-2 will never run. The metaphor structural check will be skipped entirely.

**Fix:** Either (a) add a Wave 0.5 step to the orchestrator that spawns a fresh-eyes Opus agent to evaluate the builder's plan BEFORE the build proceeds, or (b) acknowledge that BG-2 is aspirational and remove it from the gate count (19 gates, not 21). Given that this is the first experiment, option (b) is more practical.

---

### R-6: The Letter-Spacing Threshold Has Three Different Values

Across the drafts:
- DRAFT-09 (conventions brief): "No element should carry letter-spacing below 0.02em" and "0.03em letter-spacing delta" between zones
- DRAFT-10 (gate runner SC-14): "No letter-spacing value between 0 and 0.025em (exclusive)" and "adjacent sorted values < 0.5px apart"
- DRAFT-12 (TC skill edits, R-MC-03): ">= 0.01em letter-spacing" as perceptual threshold for channel counting
- DRAFT-13 (CLAUDE.md edits): "no letter-spacing < 0.02em"

**Three different per-element minimums:** 0.02em (brief, CLAUDE.md), 0.025em (gate runner), 0.01em (TC skill multi-coherence rules).

**What will happen:** The builder reads the conventions brief (0.02em minimum). The gate checks 0.025em minimum. A builder using 0.02em letter-spacing will PASS the brief but FAIL the gate. The contradiction creates a repair cycle that wastes time and confuses the builder.

**Fix:** Align all values. The gate runner's 0.025em is sourced from "anti-conditions S-08 median value" (a specific source). The brief's 0.02em is a round number. Use 0.02em everywhere for simplicity (it's the stricter threshold), and update SC-14 to match.

---

## MINOR (<30% probability)

### M-1: The Validation Build Content File May Not Exist

DRAFT-13 references `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines) as Build A content. This file path is specific. If the file does not exist at that exact path, Build A fails before it starts.

**Fix:** The master prompt should include a pre-flight check: "Verify `extractions/deep/yegge-gas-town-extraction.md` exists and is non-empty before proceeding to Build A."

---

### M-2: PA-65 and PA-61 Overlap

PA-65 asks "If this page were a piece of music..." and PA-61 asks "Do different visual properties seem to have their own independent rhythms..." Both detect multi-voice composition. PA-65 is assigned to Auditor A (Impression), PA-61 to Auditor F (Consistency). The two auditors may give contradictory answers to what is essentially the same question with different framing.

**What will happen:** The weaver receives "ensemble" from PA-65 but "NO, everything shifts at the same time" from PA-61 (or vice versa). This is actually USEFUL diagnostic data (the contradiction reveals the borderline quality), but the weaver needs to know these questions are related.

**Fix:** Add a note to the weaver prompt: "PA-61 and PA-65 are complementary views of the same quality (multi-voice composition). If they disagree, the page is at the threshold. Report the disagreement explicitly."

---

### M-3: The Orchestrator Says "DO NOT build the page yourself" But May Confuse the Instance

DRAFT-11 says: ">>> DO NOT build the page yourself. Spawn agents per the wave structure below."

But this is in a SKILL.md file. The fresh instance reading this is the /build-page orchestrator. It will read this line and understand it means "spawn an agent to build, don't write HTML yourself." But the line might also be interpreted as "do nothing" if the instance doesn't understand the team spawning mechanism.

**Low risk** because the subsequent instructions are very explicit about spawning. But the initial framing could be clearer.

**Fix:** Change to "You are the ORCHESTRATOR, not the builder. Your job is to SPAWN and COORDINATE agents, not to write HTML or CSS yourself."

---

### M-4: DG-1 and DG-2 Reference YAML but Builder Produces Markdown

Similar to R-4 but for different gates. DG-1 checks `fractal_table.yaml` and DG-2 checks `cascade_table.yaml`. The builder is told to produce `_build-log.md` and `_cascade-value-table.md`. The format mismatch (YAML vs markdown) means the gate runner's YAML parsers will fail on markdown files.

**Fix:** Either standardize on YAML (update builder instructions) or standardize on markdown (update gate checks to parse markdown tables).

---

## THE SINGLE WEAKEST LINK

**WF-2 (the DRAFT-12 skill edit dependency violation between R-08 and E-02) is the highest-confidence failure prediction.** If the execution order is wrong, one edit produces garbled output that cascades through subsequent edits. The TC skill is 1,933 lines -- a garbled edit in the middle corrupts everything below it.

But the MOST IMPACTFUL failure would be **WF-1 (two competing DRAFT-13 files)**. If the assembler picks the wrong version or creates contradictions, every CLAUDE.md edit, the validation protocol, and the architecture blueprint are compromised. This affects EVERYTHING downstream.

---

## THE BET: What WILL Fail on the First Run

I bet with >80% confidence that the following will happen:

1. **At least 5 of 35 skill edits will fail on first attempt** due to whitespace/context mismatches (LF-5)
2. **SC-14 will produce false positives on callouts** (LF-1) causing at least one unnecessary fix cycle
3. **The builder will NOT produce `_build-plan.yaml`** (R-4) because no instruction tells it to
4. **BG-2 will never run** (R-5) because the orchestrator has no Wave 0.5
5. **The letter-spacing threshold contradiction** (R-6) will cause at least one gate failure that contradicts the conventions brief

And with >60% confidence:
6. **The builder will skim the second half of the 232-line conventions brief** (WF-3)
7. **The assembler will produce contradictions from the two DRAFT-13 files** (WF-1)

---

## CONSTRUCTIVE FIXES SUMMARY

| ID | Issue | Fix | Effort |
|----|-------|-----|--------|
| WF-1 | Two competing DRAFT-13 files | Merge before assembly OR provide explicit primary-source directive | 30 min |
| WF-2 | R-08/E-02 dependency violation | Swap steps 8 and 9 in Section C execution order | 2 min |
| WF-3 | 232-line brief may be skimmed | Add "READ ALL 14 SECTIONS" warning after section 4 | 5 min |
| LF-1 | SC-14 false positives on callouts | Add callout/accent exemption to SC-14 Sub-check 3 | 10 min |
| LF-2 | `merged-components.css` in builder prompt | Change to `components.css` in DRAFT-11 | 2 min |
| LF-3 | SC-10 threshold mismatch (120 vs 108) | Align to 108px everywhere | 10 min |
| LF-4 | Question count discrepancy (57 vs 56) | Verify against actual PA skill, reconcile | 15 min |
| LF-5 | Skill edit old_strings may not match | Add fallback instruction for failed edits | 5 min |
| R-4 | DG-4 expects YAML, builder produces markdown | Add YAML deliverable to builder OR change DG-4 | 15 min |
| R-5 | BG-2 has no implementation path | Add Wave 0.5 OR remove from gate count | 10 min |
| R-6 | Letter-spacing triple threshold | Align to 0.02em everywhere | 10 min |
| M-4 | DG-1/DG-2 expect YAML, builder produces markdown | Standardize on one format | 10 min |

**Total fix effort: ~125 minutes.** The fixes are straightforward. The risk is not in the complexity of the fixes but in the assembler NOT knowing these issues exist.

---

## WHAT IS GOOD (Survives the Challenge)

Despite the above, the draft corpus has genuine strengths:

1. **The conventions brief (DRAFT-09) is the best-written section.** Its format balance (55% world-building, 25% recipe, 20% checklist) is exactly what the research recommended. The anti-checklist design is effective. If the builder reads it fully, it will produce good output.

2. **The gate runner (DRAFT-10) is comprehensive and well-sourced.** Every gate has provenance, fix recipes, and known limitations documented. The micro-gate schedule (during-build checks) is a genuine innovation not present in any prior architecture.

3. **The orchestrator logic (DRAFT-11) correctly implements the proven team patterns.** Zero Playwright for auditors, screenshot pre-capture, same-builder fix cycles, Opus-only for builders -- all match what worked in CD-006, Middle, and Remediation.

4. **The skill edits (DRAFT-12) are the most thorough.** 35 edits with exact old_string/new_string, sequenced execution order, and a post-edit verification checklist. The verification checklist alone (Section D) is worth the effort.

5. **The PA questions (both DRAFT-pa-questions.md and the PA sections in DRAFT-11 and DRAFT-12) are consistent and well-designed.** The 8 Tier 5 questions have clear scoring rubrics and specific detection targets.

The draft corpus is READY FOR ASSEMBLY with the fixes above applied. The fixes are all tractable. None require rethinking the architecture -- they are alignment issues, threshold contradictions, and missing implementation paths.

---

## VERDICT

**READY FOR ASSEMBLY WITH 12 FIXES.** 2 WILL-FAIL issues, 5 LIKELY-FAIL issues, 6 RISK issues, 4 MINOR issues. All fixable in ~125 minutes. The architecture is sound; the details need alignment.

The highest-leverage single fix is **WF-1 (merge the two DRAFT-13 files)**. If this is not done, the assembler will produce contradictions that propagate through every downstream file.

The highest-confidence failure prediction is **WF-2 (R-08/E-02 dependency violation in skill edit order)**. This is a 2-minute fix that prevents a cascading edit failure.

---

**END OF CONTRARIAN CHALLENGE**
