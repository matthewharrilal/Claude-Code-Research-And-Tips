# Adversarial Audit: research-compose v1.1 (Tripod Pipeline)

**Auditor:** Opus-level adversarial review
**Date:** 2026-03-02
**Scope:** 14 files (SKILL.md + 13 agent prompts)
**Method:** 8 comprehensive cross-file checks after full sequential read of all files

---

## Summary

| Severity | Count |
|----------|-------|
| BLOCKING | 2 |
| SIGNIFICANT | 8 |
| MINOR | 11 |
| CLEAN | 4 (of 8 checks) |

**Overall assessment:** The v1.1 remediation successfully added the Compositional Questions layer and standardized citations. The multi-channel trace is largely intact. However, two blocking issues exist: (1) the weaver's Agent Log template uses stale N/9 denominators instead of N/10, creating a visible inconsistency between the body and footer of the same file; and (2) the weaver receives `_builder-reflection.md` for Section 10 assessment but the orchestrator's "Weaver does NOT receive" list in SKILL.md excludes "Builder reflection or decisions files," creating a direct contradiction about what the weaver sees.

---

## Check 1: Complete Multi-Channel Trace

### Trace Summary

| Link | File | Status | Notes |
|------|------|--------|-------|
| 1. TC produces multi-channel questions | tc-derivation.md | PASS | Lines 46-80: explicit requirement for 2-3 questions each implying 3+ CSS channels, with `Implied channels:` format |
| 2. S1 carries questions verbatim | specialist-1-prompt.md | PASS | Step 8 (lines 112-133): "TC Experimental Questions (Preserved)" section with verbatim carry-through |
| 3. S2 carries questions verbatim | specialist-2-prompt.md | PASS | Step 11 (lines 160-180): redundant carry of TC questions with explicit deduplication note |
| 4. Synthesizer Section 10 assembles | synthesizer-prompt.md | PASS | Lines 232-301: 3-source assembly (TC verbatim + KB adapted + cross-specialist), 5-7 questions, each with 3+ implied channels |
| 5. Builder Pass 1 explores 2-3 | builder-pass-1-prompt.md | PASS | Lines 50-65: explicit exploration instructions, citation format, multi-channel emphasis |
| 6. Builder Pass 2 deepens | builder-pass-2-prompt.md | PASS | Lines 95-109: deepen to 5-7 channels per question or explore remaining questions |
| 7. Builder Pass 3 verifies | builder-pass-3-prompt.md | PASS | Lines 90-99: verify question-driven CSS survived, count channels per question |
| 8. PA auditors detect multi-channel | pa-auditor-prompt.md | PARTIAL | Auditors have NO context about questions. They describe EXPERIENCES only. Multi-channel coordination is visible perceptually (e.g., "I notice the page compresses in multiple ways as I scroll") but auditors cannot explicitly detect or name "multi-channel coordination." This is by design (fresh-eyes principle), but means the PA cannot directly validate the v1.1 core metric. |
| 9. Weaver measures channels per question | weaver-prompt.md | PASS | Lines 97-128: explicit Section 10 Assessment with per-question channel counting, 5-7 target |

### Findings

**F-01 [MINOR]: PA auditors cannot directly detect multi-channel coordination.**
The pa-auditor-prompt.md has zero mention of "channels," "multi-channel," or "coordination." This is correct per the fresh-eyes principle -- auditors describe experience, not analysis. But it means the multi-channel trace has a perceptual gap: the weaver must infer multi-channel success from auditor experiential language (e.g., "the page feels like it tightens in every dimension simultaneously") rather than from direct measurement. The weaver's Section 10 Assessment compensates by checking CSS citations directly.

**Assessment: NOT BLOCKING.** The trace is intact through the weaver's CSS-level verification. The PA gap is architectural, not a bug.

---

## Check 2: Cross-File Contradictions

**F-02 [BLOCKING]: Weaver receives builder reflection despite "does NOT receive" exclusion.**

- `weaver-prompt.md` line 99: "Read the builder's reflection (`_builder-reflection.md`) for the 'Questions Explored' section."
- `weaver-prompt.md` lines 24-26 (What You Do NOT Receive): "Builder reflection or decisions files"
- `SKILL.md` Phase 4C, "Weaver does NOT receive": "The conviction brief or builder reflection"

The weaver-prompt.md TELLS the weaver to read `_builder-reflection.md` for Section 10 assessment, but ALSO lists "Builder reflection or decisions files" as something it does NOT receive. And the orchestrator in SKILL.md confirms the exclusion. This is a direct contradiction.

The Section 10 Assessment REQUIRES the builder's reflection to know which questions were explored and how many channels were coordinated. Without it, the weaver can only grep CSS comments -- which provides citation counts but not the builder's qualitative assessment of channel coordination.

**Resolution options:**
- (a) Remove `_builder-reflection.md` from the "does NOT receive" list in both weaver-prompt.md and SKILL.md, and add it to the "What You Receive" list in weaver-prompt.md.
- (b) Remove the reference to `_builder-reflection.md` from the Section 10 Assessment instructions and rely solely on CSS citation grep.

Option (a) is recommended: the weaver already receives package files and HTML source for compliance checking, so the fresh-eyes principle is already relaxed for the compliance assessment phase (Step 4, after experiential Outputs 1-3 are written).

---

**F-03 [BLOCKING]: Weaver Agent Log template uses N/9 denominators instead of N/10.**

- `weaver-prompt.md` line 191: `**Compliance summary:** [N/9 followed, N/9 partial, N/9 not followed]`
- `weaver-prompt.md` lines 116-118 (Summary section in Output 4): `Sections fully followed: N/10 ... Sections partially followed: N/10 ... Sections not followed: N/10`

The Output 4 body correctly uses N/10 (reflecting the addition of Section 10). But the Agent Log footer at the bottom of the same file still uses N/9. This means the weaver will write a compliance summary of N/10 in the body but N/9 in the footer, creating an inconsistency within the same output file. The comparison report extraction (Step 4D in SKILL.md) greps for these values.

**Fix:** Change line 191 from `N/9` to `N/10` (three occurrences in that line).

---

**F-04 [SIGNIFICANT]: Synthesizer line count ranges vs orchestrator line count ranges are inconsistent.**

The synthesizer-prompt.md quality floor states:
- `_package-pass-1.md`: 230-280 lines (line 557)
- `_package-pass-2.md`: 180-230 lines (line 558)
- `_package-pass-3.md`: 140-180 lines (line 559)
- No file below 130 lines (line 560)
- Total: 550-690 lines (line 561)

The orchestrator (SKILL.md) states:
- `_package-pass-1.md`: ~160-210 lines (line 331)
- `_package-pass-2.md`: ~180-230 lines (line 342)
- `_package-pass-3.md`: ~140-180 lines (line 347)
- Validation minimum: >= 130 lines (line 357, Step 2D)

**Contradictions:**
- Pass 1: Orchestrator says ~160-210, synthesizer says 230-280. The synthesizer's quality floor demands MORE than the orchestrator's description promises.
- The orchestrator's Phase 2C description says Pass 1 is "~160-210 lines" but the synthesizer's own quality floor says 230-280. A synthesizer producing 210 lines would PASS the orchestrator's validation (>= 130 lines) but FAIL its own quality floor (< 230).

The synthesizer's increased ranges were part of v1.1 (adding Section 10 + richer mechanisms), but the orchestrator's descriptive text in Phase 2C wasn't fully updated to match.

**Fix:** Update SKILL.md Phase 2C descriptive text for `_package-pass-1.md` from "~160-210 lines" to "~230-280 lines" to match the synthesizer's own quality floor.

---

**F-05 [SIGNIFICANT]: Output Manifest says "6-dimension reflection" but builder-pass-3-prompt.md says 7 dimensions.**

- `SKILL.md` line 797: `_builder-reflection.md .......... Builder's 6-dimension reflection`
- `builder-pass-3-prompt.md` line 287: "A 40-60 line reflection across 7 dimensions (expanded from 6 to include Questions Explored)"
- `SKILL.md` line 475: "7 dimensions: conviction fidelity, **questions explored** (v1.1), alternatives considered, surprises, impulses resisted, experience quality, unresolved tensions"

The Output Manifest in SKILL.md was not updated from "6-dimension" to "7-dimension" when v1.1 added the "Questions Explored" dimension. The Phase 3 description at line 475 correctly says 7, but the manifest at line 797 still says 6.

**Fix:** Update line 797 from "6-dimension" to "7-dimension".

---

**F-06 [SIGNIFICANT]: Specialist 1 quality floor in orchestrator says "originating question attribution" but S1 prompt says "Originating Question" field per finding.**

- `SKILL.md` line 191: "20+ HIGH findings with originating question attribution"
- `specialist-1-prompt.md` line 90: "**Originating Question:** [If this finding connects to a TC experimental question, cite it... If no connection, write 'Independent finding.']"
- `specialist-1-prompt.md` line 188: "Each HIGH finding must include an **Originating Question** field (linking to TC questions where applicable)."

These are consistent. However, the orchestrator validation in Step 2B (SKILL.md line 291) says only:
```
S1: >= 200 lines (includes TC Experimental Questions section)
```
It does NOT check for originating question attribution on HIGH findings. The quality floor description at line 191 says it should have "originating question attribution" but the actual validation step only checks line count and TC Questions section presence.

**Assessment: MINOR.** The validation is lenient but the prompt is clear. The agent will include originating questions if it follows its own prompt. The orchestrator just won't catch omission.

---

**F-07 [MINOR]: Citation prefix count differs between files.**

- `specialist-5-prompt.md` lines 97-128: Defines 6 citation prefixes (PACKAGE, FINDING, CASE-STUDY, SOUL, TC-BRIEF, QUESTION)
- `builder-pass-1-prompt.md` lines 211-217: Lists the same 6 prefixes
- `builder-pass-2-prompt.md` lines 114-119: Lists the same 6 prefixes
- `builder-pass-3-prompt.md` lines 104-109: Lists the same 6 prefixes
- `synthesizer-prompt.md` lines 222-228 (Section 9 template): Lists the same 6 prefixes

All 6 prefixes are consistent across all files. **CLEAN.**

---

**F-08 [MINOR]: Section numbering discrepancy -- Section 10 is called "Section 10" but Section 9 is also in Pass 1.**

The section numbering is non-sequential within files:
- Pass 1 package: Sections 0, 1, 2, 9, 10
- Pass 2 package: Sections 3, 4, 5
- Pass 3 package: Sections 6, 7, 8

Section 9 (Consumption Protocol) and Section 10 (Compositional Questions) are in Pass 1. The ordering within Pass 1 is 0, 1, 2, 9, 10 -- jumping from 2 to 9. This is intentional (9 and 10 were added to Pass 1 to be read alongside foundations), but may confuse agents.

**Assessment: MINOR.** The section numbers are consistently referenced everywhere. The non-sequential ordering is documented in the synthesizer prompt's output template (lines 620-657). An agent following the template will produce the right ordering.

---

## Check 3: Missing References

**F-09 [SIGNIFICANT]: Weaver references Section 10 in "Section-by-Section Assessment" but the assessment template says "For each of Sections 0-8."**

- `weaver-prompt.md` line 78-79: "For each package section (0 through 8, skipping Section 9):"
- `weaver-prompt.md` lines 94-95: "### Section-by-Section Assessment [For each of Sections 0-8: Instructed / Evidence / Compliance / Gap]"
- `weaver-prompt.md` lines 97-128: "### Section 10 Assessment (Compositional Questions -- v1.1 addition)" as a SEPARATE subsection

The Section 10 Assessment is broken out as its own subsection (not inline with the 0-8 loop). This is fine architecturally, but the "For each of Sections 0-8" instruction at line 79 says to skip Section 9. It does NOT say to cover Section 10. Section 10 is handled by its own dedicated subsection below. However, the Summary at lines 116-118 says "Sections fully followed: N/10" -- implying 10 sections total (0-8 minus 9, plus 10 = 9 sections assessed, but they say N/10).

**Actual count:** Sections 0, 1, 2, 3, 4, 5, 6, 7, 8, 10 = 10 sections (skipping 9). The N/10 denominator is correct.

The instruction "For each of Sections 0-8" covers 9 sections (0 through 8). Then the separate Section 10 Assessment adds 1 more. Total = 10. The summary says N/10. This is correct but the flow is confusing because the "0 through 8" instruction doesn't mention 10, and 10 is handled separately below.

**Assessment: MINOR.** Correct but could be clearer. A weaver agent following the prompt literally will cover 0-8 in the loop and 10 in its own subsection. N/10 in the summary is correct.

---

**F-10 [SIGNIFICANT]: Specialist 3 prompt references "12 case studies" but provides 14 files to read.**

- `specialist-3-prompt.md` line 172: "If after reading all 12 case studies, NONE have structural affinity..."
- `specialist-3-prompt.md` line 213: "If 3+ case studies all share the same type of affinity..."
- The FILES TO READ table (lines 21-36) lists 14 files

The 14 files include 12 actual case study files + `ANTI-PRESCRIPTION-TEMPLATE.md` + `README.md` (case-studies). The README is an index, not a case study. The ANTI-PRESCRIPTION-TEMPLATE is a meta-document, not a case study. So "12 case studies" is arguably correct -- but the files table lists 14 files, and a strict reader might count 14 and be confused.

**Fix:** Clarify: "If after reading all 12 case studies (excluding README.md and ANTI-PRESCRIPTION-TEMPLATE.md which are reference documents, not case studies)..."

---

**F-11 [MINOR]: Specialist 3 edge cases skip from 1 to 5.**

- `specialist-3-prompt.md`: Edge Case 1 (line 170), Edge Case 5 (line 178), Edge Case 2 (line 201), Edge Case 3 (line 209), Edge Case 4 (line 217)

Edge cases are numbered 1, 5, 2, 3, 4. Edge Case 5 (MEDIUM-Affinity) was inserted between 1 and 2, presumably as a v1.1 addition, but given the number 5 to avoid renumbering the existing 1-4.

**Assessment: MINOR.** Cosmetic issue. The content is correct; the numbering is just out of sequence.

---

**F-12 [MINOR]: Specialist 4 prompt file paths are relative, unlike other specialists.**

- `specialist-4-prompt.md` lines 23-33: File paths are relative (e.g., `specification/provenance/stage-4-axis-ad/`)
- `specialist-1-prompt.md` lines 54-63: File paths are absolute (e.g., `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md`)
- `specialist-2-prompt.md` lines 53-78: File paths are absolute

S4 uses relative paths while S1 and S2 use absolute paths. S3 uses relative paths (partial: `design-system/compositional-core/case-studies/`). S5 uses relative paths (`archive/knowledge-architecture/...`).

**Assessment: MINOR.** The orchestrator provides actual file paths when spawning agents. The relative paths in the prompt are reference hints. However, if agents try to Read using these relative paths, they'll fail. The orchestrator's SKILL.md (lines 243-254) provides full absolute paths for S4, so the agent gets the absolute paths from the orchestrator's spawn instruction.

---

## Check 4: Broken Data Flow

### Boundary-by-Boundary Analysis

| Boundary | From | To | Format Match | Status |
|----------|------|----|-------------|--------|
| TC -> Specialists | `_tc-brief.md` (6 sections + Compositional Questions) | S1, S2, S3, S4, S5 all read `_tc-brief.md` | MATCH | PASS |
| Specialists -> Synthesizer | 5 `_specialist-N-*.md` files | Synthesizer reads all 5 | MATCH | PASS |
| Synthesizer -> Builders | 3 `_package-pass-N.md` files | Each builder reads its assigned package | MATCH | PASS |
| Builder -> Builder (continuity) | `_pass-N-decisions.md` | Next pass reads previous decisions | MATCH | PASS |
| Builder -> PA | `_build-final.html` + screenshots | Auditors see screenshots only | MATCH | PASS |
| PA -> Weaver | 5 `auditor-N.md` + screenshots + packages + HTML | Weaver reads all | MATCH with contradiction (see F-02) |
| Weaver -> Refine Builder | `synthesis.md` + packages + `_build-final.html` | Refine builder reads these | MATCH | PASS |

**F-13 [SIGNIFICANT]: Pass 2 builder does NOT receive `_package-pass-1.md` but is told to reference Section 10.**

- `builder-pass-2-prompt.md` lines 97-99: "Read `_pass-1-decisions.md` 'Questions Explored' section... explore REMAINING questions from Section 10 (available in `_package-pass-1.md` if you need to reference them)."
- `SKILL.md` Phase 3, Build Pass 2, "Agent does NOT receive" (lines 435-438): "`_package-pass-1.md` or `_package-pass-3.md`"

The Pass 2 builder prompt TELLS the builder to reference `_package-pass-1.md` for remaining Section 10 questions, but the orchestrator explicitly EXCLUDES `_package-pass-1.md` from the Pass 2 agent's inputs.

This means the builder-pass-2-prompt.md instruction at line 99 is unreachable -- the agent won't have `_package-pass-1.md` to read. The builder can only deepen questions already documented in `_pass-1-decisions.md`, not discover remaining questions from Section 10.

**Resolution options:**
- (a) Add `_package-pass-1.md` to Pass 2's input list (breaks rotation isolation).
- (b) Require Pass 1 decisions to list ALL Section 10 questions (explored AND unexplored) so Pass 2 can pick from the full list.
- (c) Remove the reference to `_package-pass-1.md` from builder-pass-2-prompt.md and clarify that Pass 2 works only from the decisions file's "Open Questions for Pass 2" section.

Option (b) is most aligned with the existing design. The builder-pass-1-prompt.md already says (line 354): "Open Questions for Pass 2 [...] which Section 10 questions were NOT explored and could be explored in Pass 2". If Pass 1 lists the unexplored questions with their full text and implied channels, Pass 2 has everything it needs.

**Fix:** Update builder-pass-2-prompt.md line 99 to: "explore REMAINING questions listed in `_pass-1-decisions.md` under 'Open Questions for Pass 2'" and remove the parenthetical reference to `_package-pass-1.md`.

---

**F-14 [MINOR]: Specialist 4 has no TC Experimental Questions carry-through requirement.**

S1 (Step 8) and S2 (Step 11) both have explicit "Preserve TC Experimental Questions" sections. S3, S4, and S5 do NOT have this requirement.

This is intentional -- S1 and S2 are the primary question carriers, with S2 providing redundancy. S3 (case studies), S4 (constraints), and S5 (protocol) are not question-carrying specialists.

**Assessment: CLEAN.** The redundant S1+S2 carry is explicit and sufficient. The synthesizer deduplicates.

---

## Check 5: Regression Check

**F-15 [CLEAN]: Soul constraints remain absolute everywhere.**

Verified in:
- `builder-pass-1-prompt.md` lines 69-89: Full soul constraints block
- `builder-pass-2-prompt.md` lines 221-229: Soul constraints reminder
- `builder-pass-3-prompt.md` lines 226-237: Final soul check
- `refine-builder-prompt.md` lines 74-82: Soul constraints reminder
- `synthesizer-prompt.md` lines 87-108: Section 0 template
- `specialist-4-prompt.md` lines 42-58: Category 1 Soul checklist

**No regressions.** Soul constraints are consistently listed and enforced across all build and audit phases.

---

**F-16 [CLEAN]: Accessibility hardening is present.**

- `builder-pass-3-prompt.md` lines 183-221: Full accessibility section with skip link, ARIA landmarks, alt attributes, heading hierarchy, color contrast, focus styles.

**No regressions.** Accessibility hardening was present in v1.0 and remains intact.

---

**F-17 [CLEAN]: Content preservation rules intact.**

- `builder-pass-1-prompt.md`: "All content from content.md placed into appropriate zones"
- `builder-pass-2-prompt.md` line 59: "All content -- every section from the original content.md must remain"
- `builder-pass-3-prompt.md` line 49: "All content -- every section from the original content.md"
- `refine-builder-prompt.md` line 90: "All content -- every section from the original article"

**No regressions.** Content preservation is reinforced at every build stage.

---

**F-18 [SIGNIFICANT]: 3-pass rotation coherence has a gap -- Pass 2 references unreachable file.**

See F-13 above. The 3-pass rotation is architecturally sound (each pass gets its own package file in primacy position), but the v1.1 addition of compositional questions created a cross-pass reference that breaks the rotation isolation.

---

## Check 6: Internal Consistency Per File

**F-19 [SIGNIFICANT]: Synthesizer prompt has conflicting Section 3 size ranges.**

- `synthesizer-prompt.md` line 311: "Section 3: Findings -> Build-Specific Actions (~80-100 lines)"
- `synthesizer-prompt.md` line 558: "_package-pass-2.md: 180-230 lines, contains Sections 3, 4, 5 (increased from 130-180: +50 for richer Section 3 findings with question attributions)"
- `SKILL.md` line 343: "Section 3: Findings -> Build-Specific Actions (~100-130 lines, increased for question attributions)"

Three different ranges for Section 3:
- Body text of synthesizer prompt: ~80-100 lines
- Quality floor of synthesizer prompt: (implicit from pass-2 total 180-230 minus S4 50-70 minus S5 50-60 = 60-120 lines)
- SKILL.md: ~100-130 lines

The 80-100 range in the body text appears to be from v1.0, while the SKILL.md 100-130 range reflects the v1.1 increase. The synthesizer body text was not updated.

**Fix:** Update synthesizer-prompt.md line 311 from "~80-100 lines" to "~100-130 lines" to match SKILL.md.

---

**F-20 [MINOR]: builder-pass-1-prompt.md references "Section 1.6 below" that doesn't exist in the file.**

- `builder-pass-1-prompt.md` line 237: "This is the same principle as concept-based custom properties (Section 1.6 below) but applied to class names."

There is no "Section 1.6" in builder-pass-1-prompt.md. The concept-based custom properties section appears at line 127 ("CSS Naming Convention: Concept-Based") but is not numbered "Section 1.6."

**Fix:** Replace "(Section 1.6 below)" with "(see CSS Naming Convention section above)" -- the reference should point backward, not forward, since the naming convention section precedes the semantic budget section.

---

**F-21 [MINOR]: Specialist 1 quality floor says "Minimum 20 HIGH findings" but SKILL.md validation only checks line count.**

- `specialist-1-prompt.md` line 188: "Minimum 20 HIGH findings"
- `SKILL.md` Step 2B (line 291): "S1: >= 200 lines (includes TC Experimental Questions section)"

The orchestrator validation does not check HIGH finding count, only line count. An S1 output could have 200+ lines but only 10 HIGH findings with verbose rationale and still pass validation.

**Assessment: MINOR.** The prompt is clear about the 20 HIGH minimum. The orchestrator's validation is a lightweight gate. The synthesizer would notice thin findings when assembling Section 3.

---

## Check 7: Vocabulary Consistency

**F-22 [MINOR]: "Compositional Questions" capitalization varies.**

| File | Usage | Line |
|------|-------|------|
| tc-derivation.md | "COMPOSITIONAL QUESTIONS" (in header format) | 47, 52 |
| tc-derivation.md | "Compositional Questions (CARRY VERBATIM TO BUILDERS)" | 52 |
| specialist-1-prompt.md | "TC Experimental Questions (Preserved)" | 120 |
| specialist-2-prompt.md | "TC Experimental Questions (Preserved)" | 167 |
| synthesizer-prompt.md | "COMPOSITIONAL QUESTIONS" | 265 |
| synthesizer-prompt.md | "Compositional Questions" | 232, 296-301 |
| builder-pass-1-prompt.md | "Compositional Questions" | 16, 50 |
| builder-pass-3-prompt.md | "Compositional Questions Verification" | 90 |
| weaver-prompt.md | "Compositional Questions" | 97 |
| SKILL.md | "Compositional Questions" | 151, 337, 369 |

The TC derivation uses "COMPOSITIONAL QUESTIONS" as a section header. Specialists carry them as "TC Experimental Questions (Preserved)". The synthesizer assembles them as "COMPOSITIONAL QUESTIONS" (Section 10 header). Builders and weaver reference them as "Compositional Questions."

The terminology shift from "TC Experimental Questions" (specialist carry format) to "Compositional Questions" (package Section 10 format) is intentional -- the synthesizer transforms TC questions + KB questions + cross-specialist questions into a unified "Compositional Questions" section. The naming is functional.

**Assessment: MINOR.** The vocabulary shift is intentional and documented, but could confuse an agent that greps for a specific string. The key headers are consistent where they need to be: Section 10 is always "## 10. COMPOSITIONAL QUESTIONS" in the package.

---

**F-23 [MINOR]: Citation prefix format is consistent across all files.**

All 6 prefixes follow the same format everywhere:
```
/* PACKAGE S[N]-M[NN]: [name] -- [what] */
/* FINDING [ID]: [title] -- [action] */
/* CASE-STUDY [ID]: [technique] -- adapted from [source] */
/* SOUL: [constraint] */
/* TC-BRIEF: [section] -- [direction] */
/* QUESTION Q[N]: [abbreviated] -- [exploration] */
```

Verified in: specialist-5-prompt.md, builder-pass-1-prompt.md, builder-pass-2-prompt.md, builder-pass-3-prompt.md, synthesizer-prompt.md, weaver-prompt.md.

**CLEAN.** No inconsistencies.

---

**F-24 [MINOR]: File naming conventions are consistent.**

| File Type | Convention | Consistent? |
|-----------|-----------|-------------|
| Specialist outputs | `_specialist-{N}-{domain}.md` | YES |
| Package files | `_package-pass-{N}.md` | YES |
| Build HTML | `_build-pass-{N}.html`, `_build-final.html` | YES |
| Decision files | `_pass-{N}-decisions.md` | YES |
| Builder reflection | `_builder-reflection.md` | YES |
| Fix files | `_fixes/fix-{N}-page.html`, `_fixes/fix-{N}-feedback.md` | YES |
| PA outputs | `_pa/auditor-{N}.md`, `_pa/synthesis.md` | YES |

**CLEAN.** File naming is consistent across all references.

---

## Check 8: Cohesion Assessment

**F-25 [SIGNIFICANT]: v1.1 additions in builder-pass-2-prompt.md feel bolted-on.**

The "Compositional Questions: Deepen Pass 1 Explorations" section (lines 95-109) in builder-pass-2-prompt.md is placed between "Continuity Protocol" and "Standardized Citations." It reads as an insertion -- it's self-contained but disconnected from the surrounding flow. The builder reads about continuity rules, then suddenly encounters a section about deepening compositional questions, then returns to citation format.

**Recommendation:** Move the Compositional Questions section to after the "Your Task: Enrich Zone by Zone" header (around line 129), where it fits naturally alongside the other enrichment tasks. Currently the task section says "Enrich Zone by Zone" but the question exploration section is above it, creating a structural mismatch.

---

**F-26 [SIGNIFICANT]: Redundancy between orchestrator and individual prompts on line count ranges.**

The orchestrator (SKILL.md) and each specialist/synthesizer prompt both specify quality floors with line counts. These exist in two places and, as demonstrated by F-04 and F-19, they can drift out of sync.

**Recommendation:** Consider a single source of truth. Either:
- (a) The orchestrator specifies validation thresholds; prompts specify qualitative goals only. OR
- (b) Prompts specify full quality floors; orchestrator defers to them with "validate per the prompt's quality floor section."

Currently the dual specification creates maintenance burden and drift risk.

---

**F-27 [MINOR]: The refine-builder-prompt.md has no v1.1 question-specific guidance.**

The refine builder's reading order at line 22-23 mentions reading the builder reflection's "Questions Explored" section, but there's no guidance on WHAT to do if the weaver flags weak question deployment. The refine builder can fix TYPE A/B/C issues, but there's no classification for "question-driven CSS was diluted" or "multi-channel coordination is weak."

**Recommendation:** Add a note in the refine-builder-prompt.md: "If the weaver's Section 10 Assessment flags weak channel coordination (< 3 channels per explored question), treat as TYPE A if the CSS citations exist but need value adjustments, or TYPE B if the question-driven CSS was structurally removed during enrichment."

---

**F-28 [MINOR]: Specialist 3 has no TC Experimental Questions carry-through, but this is fine.**

S3 (Case Study Analyst) does not carry TC experimental questions. This is correct -- S3 produces case study analysis, not question propagation. The synthesizer gets TC questions from S1 and S2.

**CLEAN by design.**

---

## Consolidated Fix List

### BLOCKING (must fix before v1.1 tag)

1. **F-02: Weaver receives/doesn't receive builder reflection contradiction.**
   - In `weaver-prompt.md`: Remove `Builder reflection or decisions files` from "What You Do NOT Receive" list. Add `_builder-reflection.md` to "What You Receive" list (item 6), with note: "For Section 10 Assessment only -- read AFTER completing experiential Outputs 1-3."
   - In `SKILL.md` Phase 4C: Remove "builder reflection" from "Weaver does NOT receive" list. Add `{OUTPUT_DIR}/_builder-reflection.md` to the weaver's input list with same note.

2. **F-03: Weaver Agent Log uses N/9 instead of N/10.**
   - In `weaver-prompt.md` line 191: Change `N/9` to `N/10` (three occurrences).

### SIGNIFICANT (should fix before v1.1 tag)

3. **F-04: Pass 1 package line range mismatch.**
   - In `SKILL.md` line 331: Change "~160-210 lines" to "~230-280 lines".

4. **F-05: Output Manifest says 6-dimension reflection.**
   - In `SKILL.md` line 797: Change "6-dimension" to "7-dimension".

5. **F-13: Pass 2 builder references unreachable `_package-pass-1.md`.**
   - In `builder-pass-2-prompt.md` line 99: Replace "(available in `_package-pass-1.md` if you need to reference them)" with "(listed in `_pass-1-decisions.md` under 'Open Questions for Pass 2')".

6. **F-19: Section 3 size range inconsistency.**
   - In `synthesizer-prompt.md` line 311: Change "~80-100 lines" to "~100-130 lines".

7. **F-25: Question exploration section placement in builder-pass-2-prompt.md.**
   - Move the "Compositional Questions: Deepen Pass 1 Explorations" section (lines 95-109) to after "Your Task: Enrich Zone by Zone" (after line 129).

8. **F-26: Dual-source line count specifications.**
   - Document as known maintenance risk. No immediate code change needed, but note in version history.

9. **F-10: "12 case studies" vs 14 files.**
   - In `specialist-3-prompt.md` line 172: Clarify "(excluding README.md and ANTI-PRESCRIPTION-TEMPLATE.md which are reference documents)".

10. **F-09: Weaver Section 10 assessment flow.**
    - In `weaver-prompt.md` line 79: Change "For each package section (0 through 8, skipping Section 9):" to "For each package section (0 through 8, skipping Section 9; Section 10 is assessed separately below):"

### MINOR (nice to fix, not critical)

11. **F-01: PA auditors cannot detect multi-channel coordination.** No fix needed -- architectural.
12. **F-06: Orchestrator validation doesn't check HIGH finding count.** No fix needed -- lightweight validation by design.
13. **F-07: Citation prefixes consistent.** CLEAN.
14. **F-08: Non-sequential section numbering.** No fix needed -- intentional.
15. **F-11: Edge case numbering out of sequence.** Cosmetic. Renumber if desired.
16. **F-12: Relative vs absolute paths.** No fix needed -- orchestrator provides absolute paths.
17. **F-14: S4 has no TC question carry-through.** CLEAN by design.
18. **F-20: "Section 1.6 below" reference.** Fix reference to point to correct section name.
19. **F-21: Line count vs finding count validation.** No fix needed.
20. **F-22: Compositional Questions capitalization.** No fix needed -- intentional terminology shift.
21. **F-27: Refine builder has no question-specific fix guidance.** Add note as recommended.

---

## Final Assessment

The v1.1 remediation successfully introduced the Compositional Questions layer as a coherent system spanning TC derivation through weaver assessment. The multi-channel trace is intact from end to end. The standardized citation format is consistent across all files. Soul constraints, accessibility, and content preservation rules survived without regression.

The two BLOCKING issues (F-02 and F-03) are straightforward to fix -- one is a "does not receive" list that wasn't updated when Section 10 assessment was added, and the other is a stale denominator in a template. The SIGNIFICANT issues are mostly version-drift (v1.0 values that weren't updated to v1.1 ranges) and one architectural concern (Pass 2 referencing an unreachable file).

The pipeline reads as a coherent system, not a patchwork. The v1.1 additions (Section 10, citation format, question carry-through, builder question exploration, weaver channel assessment) follow the existing architectural patterns and integrate naturally. The main cohesion concern is the placement of the question exploration section in builder-pass-2-prompt.md, which feels inserted rather than woven in.

**Recommendation:** Fix the 2 BLOCKING and top 4 SIGNIFICANT issues. The remaining SIGNIFICANT issues are maintenance quality improvements that can be addressed incrementally.
