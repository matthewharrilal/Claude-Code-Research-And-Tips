# PA Skill Sufficiency Audit for /build-page Pipeline

**Auditor:** PA sufficiency analyst (Opus)
**Date:** 2026-02-20
**PA Skill Version:** 987 lines at `~/.claude/skills/perceptual-auditing/SKILL.md`
**Build-Page Skill:** 477 lines at `~/.claude/skills/build-page/SKILL.md`
**Flagship PA Questions:** 159 lines at `design-system/pipeline/flagship-pa-questions.md`
**TC Skill:** ~1000+ lines at `~/.claude/skills/tension-composition/SKILL.md`

---

## Sufficiency Matrix

| # | Dimension | Status | Evidence | Enrichment Needed |
|---|-----------|--------|----------|-------------------|
| 1 | Mode 4 Deployment Protocol | **SUFFICIENT** | PA skill lines 533-568 define Mode 4 with 9 auditors (A-I) + weaver. Question assignments match build-page 6.2. Task graph with lock sheet -> 9 auditors -> weaver is specified. | None -- PA skill and build-page are aligned. |
| 2 | Tier 5 Integration | **SUFFICIENT (ALREADY MERGED)** | PA skill lines 363-418 contain ALL 9 Tier 5 questions (PA-60 through PA-68) with full text, scoring rubrics, and auditor assignments. The SEPARATE file `flagship-pa-questions.md` is now REDUNDANT -- it duplicates what is already in the PA skill. | Deprecate the separate file, not enrich the skill. See Tier 5 Integration Recommendation below. |
| 3 | TC-Aware Auditing | **NEEDS ENRICHMENT** | PA skill has metaphor-awareness principles (lines 224-284, 593-668) but these are generic. No guidance on detecting TC-DERIVED composition vs ad-hoc composition. No question asks "does the composition feel like it derives from a single organizing principle applied systematically?" -- PA-03 and PA-05 approach this but don't target it. PA-44 detects metaphor presence but not principled derivation. | Add TC-derivation detection guidance. See Recommendation 3 below. |
| 4 | Evaluation Framework Completeness | **NEEDS ENRICHMENT** | Multi-coherence evaluation exists (lines 670-701) and is solid. Progressive Zoom Test exists (lines 778-808) for fractal echo. MISSING: (a) guidance on evaluating pages without seeing TC brief (auditors don't know the intended metaphor -- how to assess metaphor quality without that context?); (b) coherence ARC evaluation (does complexity build-and-resolve or stay flat?); (c) guidance on "structural vs announced" being detectable purely from visuals. | Add 3 missing evaluation guidance sections. See Recommendation 4 below. |
| 5 | Question Gaps | **NEEDS ENRICHMENT** | 3 perceptual questions missing: (a) content-density correlation (visual density tracks content density); (b) multi-coherence ARC (complexity builds and resolves); (c) zone boundary COMPOSITION quality (how many channels shift, are shifts coherent?). PA-62 partially covers transitions but from "dramatic vs quiet" angle, not "coherent direction" angle. | Add 2-3 new questions. See Question Gap Analysis below. |
| 6 | Scoring Evolution | **SUFFICIENT** | PA-05 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) remain appropriate. "DESIGNED" already captures "intentional composition" -- adding "derives from content-specific metaphor" would VIOLATE the fresh-eyes principle (auditors don't know a metaphor was used). "COHERENT" already captures "same design intent visible across entire page." The existing criteria detect TC-derived quality WITHOUT requiring TC knowledge. | None -- current criteria are well-calibrated for fresh-eyes auditing. |
| 7 | Fresh-Eyes Tension | **SUFFICIENT** | The PA skill's fresh-eyes principle (lines 46-48) says auditors receive "ONLY: the rendered page (screenshot or served HTML) and the PA questions. Nothing else." The build-page skill (line 258) tells auditors to read the PA skill "for its evaluation framework." This is NOT a contradiction: the framework teaches HOW to look (perceptual language, severity calibration, Three Laws) but never reveals WHAT to find. The skill is explicitly a methodology document, not a context document. | None -- distinction is maintained. Build-page skill correctly instructs auditors to read framework but not build context. |
| 8 | Mode 4 vs Lighter Modes | **SUFFICIENT** | PA skill defines Mode 1-4 with clear "When" triggers (lines 498-536). Mode 1: embedded self-check. Mode 2: spot check. Mode 3: pre-ship. Mode 4: final/comprehensive. Build-page always uses Mode 4 for initial audit, Mode 2-equivalent for fix cycles (2 auditors). Guidance on WHEN to use which mode exists and is clear. | None -- mode selection guidance is adequate. |
| 9 | Auditor Role Definitions | **SUFFICIENT** | PA skill lines 542-554 define all 9 auditor roles (A through I) with question assignments. These MATCH build-page 6.2 exactly. The PA skill IS the authoritative source. Build-page pastes question assignments from PA skill. | None -- already authoritative and consistent. |
| 10 | Weaver Protocol | **NEEDS ENRICHMENT** | PA skill lines 571-588 define the weaver's dual-verdict protocol (PA-05 score + Tier 5 score + verdict matrix). But build-page lines 299-353 define a MORE DETAILED weaver protocol with 6 sections (PA-05, Tier 5, Top-5 Issues, Per-Question Matrix, Compositional Criteria, Verdict). The PA skill's weaver protocol is a SUBSET of what build-page specifies. The PA skill should be the single source of truth, but currently build-page has the authoritative weaver spec. | Enrich PA skill weaver protocol to match build-page's 6-section spec. See Recommendation 10 below. |

---

## Specific Enrichment Recommendations

### Recommendation 3: TC-Aware Auditing Guidance

**What needs to change:** Add a section AFTER the existing "Metaphor-Awareness Principles" (line 593) that helps auditors distinguish principled composition from ad-hoc composition WITHOUT revealing TC context.

**Where in the skill:** After line 668 (end of existing metaphor awareness section), before "Multi-Coherence Evaluation" at line 670.

**Proposed content:**

```markdown
### Detecting Principled vs Ad-Hoc Composition (Fresh-Eyes)

When a page has been composed from a unifying organizational principle (any principle -- you are not told what it is), certain perceptual signatures become visible:

**Principled composition signatures (look for these):**
- Visual decisions AGREE with each other: if one section is dense, its typography is tighter, its borders are heavier, its background is darker -- all moving in the same direction
- The organizing logic is INFERRABLE: you can name the principle from visual structure alone (even if your guess differs from the designer's intent)
- Transitions between sections feel like chapters in the same story, not pages from different books
- Components in different zones ADAPT to their zone's character (a card in a dense zone looks different from the same card in a sparse zone)

**Ad-hoc composition signatures (red flags):**
- Visual decisions CONTRADICT: dense content with loose spacing, light backgrounds with heavy typography
- No organizing logic is inferrable: the page feels like "good individual decisions that don't add up"
- Transitions feel arbitrary: section order could be shuffled without perceptual cost
- Components are STATIC: identical visual treatment regardless of zone context

**How to use this in your audit:**
- This is NOT a separate question. It's a lens for answering PA-03 ("one designer or three?"), PA-05a ("intentional composition or assembled components?"), and PA-65 ("single instrument, choir, or ensemble?")
- If you detect principled composition, your PA-03 answer will naturally lean "one designer"
- If you detect ad-hoc composition, your PA-05a answer will naturally lean "assembled components"
- You do NOT need to name the principle. Your job is to detect its PRESENCE or ABSENCE through visual evidence.
```

**Rationale:** This enrichment respects fresh-eyes (no TC knowledge shared) while giving auditors vocabulary to distinguish compositions that derive from a systematic principle. Without this, auditors may miss the distinction and rate both types similarly on PA-03/PA-05.

---

### Recommendation 4: Evaluation Framework Completeness (3 additions)

**4a. Coherence ARC evaluation**

**Where:** After multi-coherence evaluation (line 701), before "Visual Auditing Protocol" (line 704).

**Proposed content:**

```markdown
### Coherence ARC Detection (How Auditors Detect Compositional Journey)

**What a coherence arc IS:** The page's visual complexity builds, peaks, and resolves across its scroll depth. Not monotone (same density everywhere), not front-loaded (all interest in first third), not random (density jumps unpredictably).

**What to look for across scroll depth:**

1. **Opening:** Does the page establish a visual tone in its first viewport? Is there an identifiable starting point for the journey?
2. **Development:** Does visual complexity INCREASE somewhere in the middle third? More component variety, tighter spacing, denser information, or more visual events?
3. **Resolution:** Does the final third feel like a landing -- either simplified (return to calm) or culminating (arrival at a peak)?

**ARC types (describe what you see, don't prescribe):**

| ARC Shape | Visual Experience | Quality |
|-----------|-------------------|---------|
| BUILD-PEAK-RESOLVE | Complexity increases then simplifies toward end | COMPOSED -- most common in excellent pages |
| SUSTAINED | Even complexity throughout | FUNCTIONAL -- competent but not compositionally dynamic |
| FRONT-LOADED | All visual interest in first third, remainder monotone | PROBLEMATIC -- energy dies at 30% scroll |
| RANDOM | No discernible pattern to complexity changes | AD-HOC -- decisions don't form a journey |

**Key diagnostic:** Scroll through the page at reading speed. Can you feel a compositional journey? If the page feels "the same" from start to finish, the arc is SUSTAINED or ABSENT.
```

**4b. Structural vs Announced metaphor detection (pure visual guidance)**

**Where:** After existing Metaphor Expression Spectrum table (line 623).

**Proposed content:**

```markdown
**Fresh-Eyes Detection (without knowing the intended metaphor):**

You don't need to know what the designer intended. Apply this test:

1. Mentally REMOVE all text, headings, and labels from the page
2. Look at ONLY the visual structure: backgrounds, spacing, borders, layout shifts
3. Ask: "Does this visual structure suggest a spatial model?" (layers? regions? zones? journey?)

- **YES, clearly:** Metaphor is STRUCTURAL -- the visual structure alone communicates organization
- **YES, vaguely:** Metaphor is ATMOSPHERIC -- there's a feel but no clear spatial logic
- **NO, but labels explain it:** Metaphor is LABELED/ANNOUNCED -- remove labels and it vanishes
- **NO, nothing:** No detectable metaphor in visual structure

This directly informs PA-44 (implicit vs explicit metaphor) and PA-68 (metaphor spatial coverage).
```

**4c. Evaluating without TC brief context**

**Where:** In the Fresh-Eyes Principle section (around line 46).

**Proposed content:**

```markdown
**Why you don't have the design brief (and shouldn't):**

Pages built through the pipeline have a content-specific design brief that guided the builder. You don't see it. This is by design. If you knew the intended metaphor was "geological strata," you would see geological strata whether it was visually present or not (confirmation bias). Your job is to detect what IS visible, not what was INTENDED.

**Practical consequence:** Your answers to PA-44, PA-65, PA-67, and PA-68 may identify a DIFFERENT organizing principle than what the designer intended. This is VALID -- if the designer intended "geological strata" but you see "layered archive," the composition is still working (it communicates structure). If you see NOTHING, the composition failed (structure is not communicated). What matters is that SOME principled organization is perceptible, not that you correctly name it.
```

---

### Recommendation 5: Question Gap Analysis (see separate section below)

---

### Recommendation 10: Weaver Protocol Enrichment

**What needs to change:** The PA skill's weaver protocol (lines 571-588) defines only the dual-verdict output (PA-05 + Tier 5 + verdict matrix). Build-page lines 299-353 add: Top-5 Issues ranking, Per-Question Matrix, Compositional Criteria checklist, and more detailed verdict categories. The PA skill should own the full weaver spec.

**Where in the skill:** Replace lines 571-588 with expanded protocol.

**Proposed content:**

```markdown
**Weaver Dual-Verdict Protocol:**

The Weaver-Synthesizer reads all auditor reports and produces a synthesis with these sections:

**Section 1: PA-05 Score (0-4/4):**
Rate each sub-criterion:
- DESIGNED (intentionally crafted?)
- COHERENT (elements work together?)
- PROPORTIONATE (visual weight distributed well?)
- POLISHED (details refined?)
Average to 0.5 precision = PA-05 score.

**Section 2: Tier 5 Score (0-9/9):**
Count YES answers from PA-60 through PA-68.
Apply threshold: 8-9 COMPOSED / 6-7 APPROACHING / 3-5 STRUCTURED / 0-2 VOCABULARY ONLY.

**Section 3: Top-5 Issues** ranked by severity (WOULD-NOT-SHIP first).
Each issue must include: auditor source, question ID, severity rating, exact auditor quote, scroll position, and actionable feedback (what to change, not just what is wrong).

**Section 4: Per-Question Matrix.**
57 questions x 9 auditors. For each question, record each auditor's YES/NO/PARTIALLY. Flag questions where auditors DISAGREE (5-4 or 4-3 split) as CALIBRATION TARGETS.

**Section 5: Compositional Criteria** (all must be MET for SHIP):
- Zero soul violations
- Zero void patterns (>120px stacked gap)
- Metaphor STRUCTURAL (not just labeled)
- Rhythm not metronomic
- Multi-coherence perceptible
- Scale coverage (3+ scales)

**Section 6: Verdict:**

| PA-05 | Tier 5 | Criteria | Verdict |
|-------|--------|----------|---------|
| >= 3.5 | >= 7/9 | All MET | **SHIP** (COMPOSED) |
| >= 3.5 | 5-6/9 | All MET | **SHIP WITH RESERVATION** (APPROACHING) |
| >= 3.5 | 0-4/9 | All MET | **NOT FLAGSHIP** |
| 3.0-3.4 | any | any | **FIX CYCLE** (top-3 PA issues) |
| < 3.0 | N/A | N/A | **REBUILD** |
| 3 fix cycles exhausted | any | any | **ESCALATE** |

**Output files:**
- Synthesis report (verdict + analysis)
- Per-question matrix (separate file for traceability)
```

**Rationale:** Making the PA skill the single source of truth for the weaver protocol means build-page can simply say "follow the PA skill's weaver protocol" instead of duplicating and potentially diverging. Currently, if someone updates the weaver format in one place but not the other, auditors and orchestrators will see different specs.

---

## Tier 5 Integration Recommendation

**Recommendation: Tier 5 questions SHOULD REMAIN MERGED in the PA skill. The separate file `flagship-pa-questions.md` is now REDUNDANT and should be deprecated.**

**Evidence:**

1. The PA skill at lines 363-418 already contains ALL 9 Tier 5 questions (PA-60 through PA-68) with complete question text, scoring rubrics, and auditor assignments.

2. The separate file `design-system/pipeline/flagship-pa-questions.md` (159 lines) contains the SAME questions with slightly more detailed scoring guidance and an auditor assignment summary table.

3. The PA skill's Mode 4 definition (line 536) says "All 57 questions (48 standard + 9 Tier 5)" and lists the full auditor-to-question mapping at lines 542-554.

4. Build-page line 293 references BOTH locations: "PA question full text is in `~/.claude/skills/perceptual-auditing/SKILL.md` AND `design-system/pipeline/flagship-pa-questions.md` (for Tier 5 only)." This dual-sourcing creates ambiguity about which is authoritative.

**Action:**
- Add any unique detail from `flagship-pa-questions.md` that is absent from the PA skill (e.g., the more detailed scoring guidance for each question, the summary assignment table at lines 144-157)
- Then add a deprecation header to `flagship-pa-questions.md`: "DEPRECATED: All Tier 5 content is now in the PA skill. This file is retained for reference only."
- Update build-page to reference ONLY the PA skill for all question text

**What to merge from the separate file:** The separate file has richer scoring criteria per question (e.g., PA-60 specifies ">= 5 distributed across all scroll thirds" for Flagship, where the PA skill only says ">= 3 distinct moments"). This specificity should be preserved. I recommend replacing PA skill lines 363-418 with the full content from the separate file, which includes the auditor assignment summary table.

---

## Question Gap Analysis

### New Questions to Add

**Gap 1: Content-Density Correlation**

| Field | Value |
|-------|-------|
| **ID** | PA-69 |
| **Tier** | Tier 5 (Compositional Depth) |
| **Question** | "Compare a section with dense analytical content (tables, lists, data) to a section with overview or introductory content. Does the visual treatment RESPOND to the content type? Is the dense section visually denser (tighter spacing, more borders, more components) and the overview section visually lighter (more breathing room, simpler layout)? Or does the page apply the same visual density regardless of content type?" |
| **What It Detects** | Content-form coupling. Flagship pages should have visual density that tracks content density. Pages where identical visual treatment is applied to dense analytical sections and light overview sections have failed content-form coupling. |
| **Scoring** | YES: Auditor identifies at least 2 sections where visual density clearly responds to content type, AND can describe the difference. NO: Visual treatment is uniform regardless of content type, OR density changes feel arbitrary (not correlated with content). |
| **Auditor Assignment** | C (Spatial+Proportion) -- this is a spatial density question |

**Gap 2: Multi-Coherence ARC**

| Field | Value |
|-------|-------|
| **ID** | PA-70 |
| **Tier** | Tier 5 (Compositional Depth) |
| **Question** | "Scroll through the entire page. Does the visual complexity follow a JOURNEY -- building in some areas, peaking, then resolving? Or does it stay at the same level throughout? Can you identify where the compositional peak is (the most visually complex, multi-layered area)?" |
| **What It Detects** | Coherence arc. Pages with a BUILD-PEAK-RESOLVE arc feel composed; pages with SUSTAINED or RANDOM complexity feel assembled. This is the temporal dimension of composition that PA-35 (engagement decay) approaches from a different angle. |
| **Scoring** | YES: Auditor identifies a compositional peak AND can describe the arc (where complexity builds, where it resolves). NO: Complexity is uniform (no arc), or changes feel random. |
| **Auditor Assignment** | D (Flow+Pacing) -- this is a pacing/journey question |

**Gap 3: Zone Boundary Coherence Direction**

| Field | Value |
|-------|-------|
| **ID** | PA-71 |
| **Tier** | Tier 5 (Compositional Depth) |
| **Question** | "At the most prominent section boundary on the page, do ALL the visual changes move in the SAME direction? For example: if the background gets darker, does the spacing also get tighter and the typography also get heavier? Or do some changes move in one direction while others move in the opposite direction (background darker but spacing looser)?" |
| **What It Detects** | Multi-coherence directional agreement. PA-62 asks about transition VARIATION (dramatic vs quiet). This question asks about transition COHERENCE (do channels agree or contradict?). A boundary where 4 channels shift but 2 say "denser" and 2 say "lighter" is INCOHERENT even though it has high channel count. |
| **Scoring** | YES: Auditor identifies a boundary where 3+ visual properties shift in the SAME semantic direction AND can name the direction ("it all gets denser/lighter/heavier/more formal"). NO: Shifts contradict each other, or auditor cannot identify a coherent direction. |
| **Auditor Assignment** | F (Consistency+Rhythm) -- this is a coherence question |

### Impact on Mode 4 Deployment

Adding 3 questions (PA-69, PA-70, PA-71) brings the total to 60 questions. Updated assignments:

| Auditor | Current Load | New Addition | New Total |
|---------|-------------|--------------|-----------|
| C (Spatial+Proportion) | 13 Qs | +PA-69 | 14 Qs |
| D (Flow+Pacing) | 6 Qs | +PA-70 | 7 Qs |
| F (Consistency+Rhythm) | 6 Qs | +PA-71 | 7 Qs |

C already has the highest load (13 Qs). Adding PA-69 makes it 14. This is manageable because Auditor C's questions are primarily spatial measurement questions that can be answered relatively quickly per screenshot.

### Updated Tier 5 Scoring (if new questions added)

If PA-69/70/71 are classified as Tier 5, the count increases from 9 to 12. Updated verdict thresholds:

| YES Count | Verdict |
|-----------|---------|
| 10-12 / 12 | COMPOSED |
| 7-9 / 12 | APPROACHING |
| 4-6 / 12 | STRUCTURED |
| 0-3 / 12 | VOCABULARY ONLY |

**Alternative:** Keep Tier 5 at 9 questions (PA-60-68) and classify the new questions as Tier 2 extensions. This avoids threshold recalibration. The new questions catch quality issues regardless of tier classification. I recommend this approach -- add them to Tier 2 (Standard) rather than Tier 5 to avoid threshold disruption.

---

## BLOCKING Issues

Issues that MUST change before the PA skill can serve effectively as a sub-skill in /build-page:

### BLOCKING 1: Weaver Protocol Fragmentation

**Problem:** The PA skill and build-page define DIFFERENT weaver protocols. The PA skill has a 2-section protocol (PA-05 + Tier 5). Build-page has a 6-section protocol (PA-05 + Tier 5 + Top-5 Issues + Matrix + Criteria + Verdict). If an auditor reads the PA skill for weaver guidance, they get an incomplete spec.

**Impact:** Weaver may produce an incomplete report if they follow the PA skill's protocol instead of build-page's.

**Fix:** Enrich PA skill's weaver protocol to the 6-section version (see Recommendation 10 above). Then build-page can reference the PA skill as authoritative rather than duplicating.

### BLOCKING 2: Dual Tier 5 Source

**Problem:** Tier 5 questions exist in TWO locations (PA skill lines 363-418 AND `flagship-pa-questions.md`). The separate file has MORE DETAILED scoring criteria than the PA skill. Build-page references both. If an auditor reads only the PA skill, they get less detailed scoring guidance. If they read only the separate file, they miss the PA skill's framework context.

**Impact:** Inconsistent scoring rubric application across auditors depending on which file they read.

**Fix:** Merge the separate file's richer scoring details INTO the PA skill. Deprecate the separate file. Build-page references only PA skill.

### BLOCKING 3: No Screenshot-Based Auditing Guidance

**Problem:** The PA skill's visual auditing protocol (lines 704-768) describes Playwright-based screenshot capture (navigate, scroll, capture). But in the /build-page pipeline, auditors NEVER use Playwright -- they read PRE-CAPTURED screenshots via the Read tool. The skill's protocol describes an interaction mode that auditors don't have.

**Impact:** Auditors reading the skill for "how to assess" encounter Playwright instructions they can't follow, causing confusion about their workflow.

**Fix:** Add a section explicitly addressing the screenshot-reading workflow:

```markdown
### Screenshot-Reading Protocol (Pipeline Auditors)

When deployed as part of a build pipeline, you receive PRE-CAPTURED screenshots instead of live Playwright access. Your workflow:

1. Read all cold-look screenshots first (one per viewport width: 1440, 1024, 768)
2. Apply Cold Look Protocol to EACH cold-look screenshot independently
3. Read scroll-through screenshots in sequence (01, 02, 03...) for each viewport
4. Apply Zone Sweep (5 dimension passes) on the scroll-through sequence
5. Answer your assigned questions using evidence from screenshots

**Key difference from live auditing:** You cannot interact with the page. You cannot hover, resize, or inspect elements. Your assessment is purely VISUAL -- which is the correct mode for perceptual auditing. If anything, screenshot-based auditing is MORE aligned with the skill's principles (react to what you SEE).
```

---

## Non-Changes

These should explicitly NOT be changed:

### 1. Fresh-Eyes Principle
The fresh-eyes principle is correct as-is. Auditors should NOT receive TC brief, build log, or metaphor information. The skill correctly enforces this. Do not weaken it to provide "TC context."

### 2. PA-05 Sub-Criteria Definitions
DESIGNED, COHERENT, PROPORTIONATE, POLISHED are well-calibrated. They detect TC-derived quality WITHOUT requiring TC knowledge. Adding "derives from content-specific metaphor" to DESIGNED would violate fresh-eyes. Keep as-is.

### 3. Quantitative Guardrails
The guardrail section (lines 420-493) is comprehensive and correct. Values match gate-runner thresholds. Do not modify.

### 4. Severity Calibration
PA-09 severity calibration (lines 153-165) and the dual severity track (lines 876-893) are well-designed. Do not modify.

### 5. Team Roles (CAN/CANNOT)
The CAN/CANNOT matrices (lines 844-873) correctly enforce information isolation. The language hard block for auditors (no CSS property names) is essential and working. Do not relax.

### 6. Mode 1-3 Definitions
Modes 1, 2, and 3 are adequate for their purposes. Only Mode 4 is used by /build-page. The lighter modes serve standalone auditing needs and should not be modified for pipeline compatibility.

### 7. Metaphor-Awareness Principles
The existing metaphor-awareness content (lines 224-284, 593-668) is thorough and well-structured. The enrichment (Recommendation 3) ADDS to it rather than replacing it.

### 8. Research Sovereignty / Lock Sheet Protocol
The lock sheet format (lines 811-840) and temporal firewall (lines 831-840) are correctly designed. Build-page generates the lock sheet and routes it only to the weaver. This protocol should not change.

### 9. The One Rule and Three Laws
These foundational principles (lines 52-73) are the correct orientation for the skill. They should never be modified.

### 10. The Audit Optimization Trap Warning
The critical warning at lines 5-43 is essential. It prevents the skill from becoming a design target. Keep prominently placed at the top.

---

## Summary of Required Changes

| Priority | Change | Lines Affected | Net Addition |
|----------|--------|---------------|--------------|
| **BLOCKING** | Enrich weaver protocol to 6-section spec | Replace lines 571-588 | +40 lines |
| **BLOCKING** | Merge Tier 5 detailed scoring from separate file | Replace lines 363-418 | +30 lines (richer rubrics) |
| **BLOCKING** | Add screenshot-reading protocol for pipeline auditors | After line 768 | +20 lines |
| **SIGNIFICANT** | Add TC-derivation detection guidance (principled vs ad-hoc) | After line 668 | +25 lines |
| **SIGNIFICANT** | Add coherence ARC evaluation guidance | After line 701 | +20 lines |
| **SIGNIFICANT** | Add structural vs announced detection (fresh-eyes version) | After line 623 | +15 lines |
| **SIGNIFICANT** | Add "why you don't have the brief" to fresh-eyes section | After line 48 | +10 lines |
| **MODERATE** | Add PA-69 (content-density correlation) | After PA-68 | +8 lines |
| **MODERATE** | Add PA-70 (multi-coherence ARC) | After PA-69 | +8 lines |
| **MODERATE** | Add PA-71 (zone boundary coherence direction) | After PA-70 | +8 lines |
| **CLEANUP** | Deprecate `flagship-pa-questions.md` (add deprecation header) | Separate file | +3 lines |

**Total enrichment: ~187 lines. PA skill grows from 987 to ~1,174 lines.**

### Estimated Effort
- BLOCKING changes: 30 minutes (mostly copy-paste from build-page + reorganize)
- SIGNIFICANT changes: 45 minutes (new content, requires careful fresh-eyes compliance)
- MODERATE changes: 20 minutes (new questions, standard format)
- CLEANUP: 5 minutes

### Verdict

**The PA skill is 70% sufficient as-is.** The 3 BLOCKING issues are real but straightforward to fix. The skill's core architecture (questions, modes, roles, isolation, sovereignty) is well-designed for the pipeline. The gaps are mostly about consolidating authority (weaver protocol, Tier 5 source) and adding pipeline-specific workflow guidance (screenshot reading).

The most impactful enrichment is Recommendation 3 (TC-derivation detection) because it gives auditors vocabulary to distinguish the pipeline's core value proposition (principled composition) from generic competence, WITHOUT violating fresh-eyes.
