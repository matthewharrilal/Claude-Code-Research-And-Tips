# V5 Information Loss Propagation Analysis

**Date:** 2026-02-26
**Agent:** audit-info-loss (Opus)
**Task:** #38
**Method:** Traced information flow for every new v5 feature through creation, transformation, consumption, and potential loss points. Read all files in `ephemeral/va-extraction/` (82 files) and all 12 design documents in `ephemeral/builds/yegge-gas-town-2026-02-25/v5-design/`.

---

## 1. TWO-PASS HANDOFF (D5): Pass A -> Pass B

### Information Flow Map

```
Pass A Builder (Opus)
  |- Reads: Brief + tokens.css + components.css + mechanism-catalog.md + value-tables
  |- Produces: HTML (800-1200 lines) + CONVICTION + SELF-EVALUATION + INTENT comments + RESIDUAL
  |
  v
Orchestrator (extraction + validation)
  |- Extracts: CONVICTION via regex /<!-- CONVICTION:\s*(.*?)\s*-->/s
  |- Extracts: SELF-EVALUATION via regex
  |- Validates: 5 checks (HTML > 100 lines, conviction >= 20 chars, self-eval exists, 3+ sections, different agent)
  |
  v
Pass A Structural Check (lightweight gate subset)
  |- GR-01 through GR-10 (identity gates)
  |- GR-51 (heading hierarchy)
  |- PA-ZONE-COUNT, PA-CSS-FLOOR, PA-CONVICTION, PA-SELF-EVAL
  |- Result: PROCEED-TO-PASS-B / RE-SPAWN / REBUILD
  |
  v
Pass B Builder (DIFFERENT Opus)
  |- Reads: Pass A HTML + Brief + tokens.css + conviction + self-eval
  |- Does NOT read: mechanism-catalog.md, components.css, value-tables, CD-006
  |- Produces: Enriched HTML (Pass A + hover/accessibility/self-eval)
```

### What Passes From A to B (9 artifacts per d5-orchestration-protocol.md Section 2)

| # | Artifact | Lines (est.) | Required |
|---|----------|-------------|----------|
| 1 | Pass A HTML file | 800-1200 | YES |
| 2 | Conviction statement (extracted from HTML) | ~15 | YES |
| 3 | Self-evaluation comment (extracted from HTML) | ~50 | YES |
| 4 | Execution Brief (same as Pass A) | 100-165 | YES |
| 5 | tokens.css | 183 | YES |
| 6 | components.css | ~944 | YES |
| 7 | mechanism-catalog.md | ~1200 | YES |
| 8 | value-tables | ~262 | YES |
| 9 | Pass A structural check results | ~20 | NO (informational) |

### What Is LOST in the Handoff

**L1: CREATIVE DECISION CONTEXT (MEDIUM SEVERITY)**

Pass A builder makes ~20 creative decisions in Phases 2-3 (metaphor selection, zone count, typography scale, density arc shape, component adaptation, mechanism selection). These decisions are encoded in the CSS/HTML output but their RATIONALE is only partially captured:

- **Captured:** CONVICTION (3 sentences of high-level intent), SELF-EVALUATION (7 binary questions), INTENT comments (17-22 per-decision rationale entries), RESIDUAL (what was preserved/changed/traded)
- **Lost:** The builder's reading state after processing 1,200+ lines of mechanism-catalog.md. Pass A builder had a mental model of ALL available mechanisms and chose 12-15. Pass B builder receives the HTML that embodies those choices but does NOT know what alternatives were considered and rejected. The INTENT [NOT-IMPL] cluster partially captures deliberate omissions, but only for brief-specified items, not for the entire mechanism catalog.
- **Impact:** Pass B might add hover states that conflict with a rejected mechanism. Example: Pass A rejected bento grid for Zone 4 because it conflicted with the quiet-zone D-09 decision. Pass B, not knowing this, might add hover treatments that imply interactive grid cells in Zone 4. The ADD-ONLY constraint mitigates this (Pass B cannot add structural grid elements), but CSS-level conflicts remain possible.
- **Mitigation present:** INTENT comments and RESIDUAL artifact. The d5-orchestration-protocol.md also gives Pass B the full mechanism-catalog.md (artifact #7) and components.css (#6), so Pass B CAN read the catalog context. However, the d5-two-pass-design.md Section 3 says Pass B does NOT receive mechanism-catalog.md or components.css. **This is a CONTRADICTION between the two D5 design documents.**

**L1-CRITICAL: DESIGN DOCUMENT CONTRADICTION ON PASS B INPUTS**

- `d5-two-pass-design.md` Section 3 ("What Pass B Does NOT Receive"): "mechanism-catalog.md (1,200+ lines) -- Not needed. Pass B deploys no new mechanisms. components.css (~944 lines) -- Not needed. Pass B adopts no new components."
- `d5-orchestration-protocol.md` Section 2 (Table row 6-7): lists components.css and mechanism-catalog.md as artifacts passed to Pass B, both marked "YES (Required)".
- The actual `artifact-builder-recipe-polish.md` (lines 14-18) confirms Pass B receives only: Pass A HTML, Brief, tokens.css, and "This recipe (~200 lines)". No mention of mechanism-catalog.md or components.css.
- **Resolution needed:** The implementation (recipe-polish.md) aligns with the two-pass-design.md (no catalog/components). The orchestration-protocol.md appears to have carried over the full input list without applying the reduction. The orchestrator prompt template in d5-orchestration-protocol.md Section 6 (Pass B prompt, lines 432-434) says "5. tokens.css, components.css, mechanism-catalog.md (your vocabulary)" -- explicitly includes them.
- **Information loss if excluded:** Pass B cannot reason about mechanism-catalog conventions when writing hover CSS. Low severity because D-07 is primarily about behavioral CSS (hover, ::selection, print) not structural mechanisms.
- **Information loss if included:** Pass B input volume jumps from ~1,300-1,700 to ~3,400-3,900 lines, approaching BV-07 ceiling of 2,500. HIGH severity if it causes attention decay in the very pass designed to cure it.
- **VERDICT:** This contradiction MUST be resolved before implementation. Recommendation: EXCLUDE mechanism-catalog.md and components.css from Pass B (align with recipe-polish.md and two-pass-design.md). Update orchestration-protocol.md Pass B prompt template to remove those references.

**L2: PASS A STRUCTURAL CHECK RESULTS (LOW SEVERITY)**

The orchestrator runs a lightweight structural check (identity gates + custom checks) between passes. Results are artifact #9, marked "NO (informational)" -- meaning Pass B may or may not receive them. The d5-two-pass-design.md explicitly states "Pass B follows the same isolation philosophy as the REFINE builder: it enters POLISHING mode, not CORRECTIVE mode."

- **Lost:** Which gates passed/failed, zone count validation, CSS floor measurement.
- **Impact:** None operational. Pass B should not be correcting gate failures (ADD-ONLY constraint). If Pass A failed identity gates, the orchestrator would REBUILD, not pass to B.
- **Appropriate loss:** Yes. This is deliberate isolation.

**L3: TEMPORAL SEQUENCE OF PASS A DECISIONS (LOW SEVERITY)**

Pass A builds in recipe order: Phase 1 (read) -> Phase 2 (select) -> Phase 3 (scaffold) -> Phase 4 (dispositions D-01 through D-06, D-09) -> Phase 5 (partial self-eval) -> Phase 6 (temporal composition). The resulting HTML is a FINAL STATE -- it does not show which CSS was written first. Pass B sees zones 1-5 as equally weighted, but Pass A may have spent 60% of attention on zones 1-3 (attention decay, the very problem D5 solves).

- **Lost:** The attention gradient of Pass A's execution.
- **Impact:** Pass B might add MORE polish to zones 1-3 (already well-developed) and LESS to zones 4-5 (where D-07 polish is most needed).
- **Mitigation present:** None explicit. The recipe-polish.md could add a note: "Audit hover state coverage across ALL zones evenly." Currently absent.

---

## 2. INTENT COMMENTS (D2): Builder -> BV-08 / Orchestrator

### Information Flow Map

```
Builder (Pass A)
  |- Writes: 17-22 <!-- INTENT [D-XX] ... --> comments during build
  |- Writes: 1-3 <!-- INTENT [NOT-IMPL] ... --> deliberate omissions at end of <style>
  |- Format: [disposition] location | decision | brief-ref | trade-off
  |
  v
GR-83 Gate (count verification)
  |- Parses: regex /<!-- INTENT [([^\]]+)] ... -->/
  |- Checks: count >= 15, at least 1 METAPHOR tag, at least 1 NOT-IMPL, D-01..D-09 coverage
  |- Result: PASS/FAIL (RECOMMENDED tier)
  |
  v
BV-08 Gate (brief-output diff)
  |- Reads: INTENT comments to identify deliberate omissions
  |- Categories: IMPLEMENTED / DELIBERATE OMISSION / ACCIDENTAL LOSS / CREATIVE ADDITION / UNKNOWN
  |- Key value: Items in NOT-IMPL cluster are scored "deliberate" not "lost"
  |
  v
REFINE/IMPROVE Builder (if triggered)
  |- Reads: Full HTML including INTENT comments from Pass 0
  |- Updates: Appends [REFINE] tag to modified INTENT comments
  |
  v
Observer Agent (D10)
  |- Reads: INTENT comments to understand builder behavior patterns
  |
  v
PA Auditors: NEVER see INTENT (screenshots only)
Weaver: NEVER sees INTENT (reads PA reports only)
```

### Where Information Could Be Lost

**L4: INTENT FORMAT DRIFT (MEDIUM SEVERITY)**

The INTENT comment format is 4 pipe-delimited fields: `[D-XX] location | decision | brief-ref | trade-off`. The parser uses regex: `/<!--\s*INTENT\s+\[([^\]]+)\]\s+([^|]+)\|([^|]+)\|([^|]+)\|([^>]+)-->/g`.

- **Loss mechanism:** If builder writes a slightly different format (e.g., uses `--` instead of `|` as delimiter, or includes `|` in the decision text), the regex fails silently. `parseIntentComments()` returns an incomplete list.
- **Impact:** BV-08 loses its primary signal for distinguishing deliberate from accidental omissions. False positives increase.
- **Mitigation present:** GR-83 checks count but cannot check format compliance (only presence of the comment). The d2-narration-spec.md acknowledges this: "Binary format rules achieve ~100% compliance" but format drift remains the highest risk.
- **Mitigation absent:** No validation of individual INTENT comment parse-ability. A gate that reports "X INTENT comments detected but Y could not be parsed" would catch this. The design doc mentions this ("the gate reports WARN: X INTENT comments detected but Y could not be parsed") but the implemented GR-83 in gate-runner-core.js does NOT include this warning logic -- it only checks count.

**L5: BV-08 SCOPE LIMITATIONS (MEDIUM SEVERITY)**

BV-08 compares brief items against HTML output across 6 dimensions. Each dimension has potential false negatives:

- **Dimension 6 (Disposition CSS):** Matches CSS PROPERTY NAME, not property+value. If brief says `border-bottom: 3px` and builder writes `border-bottom: 1px`, BV-08 says FOUND. The value compression (3px -> 1px) is invisible.
- **Impact:** BV-08 cannot detect VALUE drift, only PRESENCE/ABSENCE. This means a builder who acknowledges every disposition property but implements them at sub-perceptual values (the exact Flagship failure mode) would PASS BV-08.
- **Mitigation present:** Perception gates (GR-11 through GR-15) catch sub-perceptual values for specific properties (background delta >= 15 RGB, letter-spacing >= 0.025em, stacked gaps <= 120px). But not all disposition techniques have corresponding perception gates.
- **Residual gap:** Disposition techniques without perception gate coverage can be implemented at imperceptible values and BV-08 will report them as FOUND. The brief-diff gate catches OMISSION but not WEAKENING.

**L6: INTENT COMMENTS IN REFINE CYCLE (LOW SEVERITY)**

When the IMPROVE builder rewrites Pass A's HTML, it is instructed to UPDATE INTENT comments (append [REFINE] tag). But the IMPROVE builder receives GENERATIVELY TRANSFORMED improvement ideas, not the raw INTENT comments. The IMPROVE builder reads the raw HTML (which contains INTENT comments) BUT also reads the Weaver's artistic impression and transformed builder ideas.

- **Lost:** Nothing technically -- the IMPROVE builder sees the INTENT comments in the HTML source.
- **Risk:** The IMPROVE builder might DELETE INTENT comments during restructuring (it's working on the HTML directly). The recipe does not explicitly say "preserve all INTENT comments from previous pass."
- **Mitigation absent:** No gate or protocol requires INTENT comment preservation across IMPROVE passes. GR-83 runs on the final output and would catch a complete deletion (count < 15), but not partial loss (20 INTENT -> 12 INTENT from editing).

---

## 3. IMPROVEMENTS (Ideology): Builder -> Orchestrator -> IMPROVE Builder

### Information Flow Map

```
Builder (Pass 0)
  |- Writes: <!-- IMPROVEMENTS: 5-10 items with [category] zone | change | confidence -->
  |- Placement: After SELF-EVALUATION, before RESIDUAL
  |
  v
GR-65 Gate (structural verification)
  |- Checks: exists, >= 5 items, >= 1 HIGH, >= 2 tags, specificity heuristic
  |- Result: PASS/FAIL (REQUIRED tier per self-prompting doc, but see implementation note)
  |
  v
Orchestrator (decision function)
  |- Reads: IMPROVEMENTS comment, counts HIGH-confidence items
  |- IF PA-05 >= 3.5 AND HIGH count >= 3: OVERRIDE to IMPROVE (builder-initiated)
  |- IF PA-05 2.5-3.5: IMPROVEMENTS feed into IMPROVE brief assembly
  |- IF PA-05 < 2.5: IMPROVEMENTS DISCARDED (continuation bias risk)
  |
  v
Orchestrator (GENERATIVE TRANSFORMATION -- CRITICAL JUNCTION)
  |- Input: Raw diagnostic IMPROVEMENTS ("8 RGB points", "increase to 20+")
  |- Output: Generative language ("whispers where it could speak", "stronger shift in atmosphere")
  |- Zone references PRESERVED through transformation
  |
  v
IMPROVE Builder (different Opus)
  |- Reads: Conviction + Artistic Impression + TRANSFORMED improvements + RESIDUAL + Brief + HTML
  |- Does NOT read: Raw IMPROVEMENTS, gate scores, threshold numbers
  |
  v
PA Auditors: NEVER see IMPROVEMENTS
Weaver: NEVER sees IMPROVEMENTS (reads PA reports only)
```

### Where Information Is Lost

**L7: GENERATIVE TRANSFORMATION IS LOSSY BY DESIGN (HIGH SEVERITY -- DELIBERATE)**

The orchestrator converts concrete diagnostic IMPROVEMENTS into generative language for IMPROVE builder isolation. This is the single most consequential transformation in the v5 pipeline.

- **Before:** `[D-07] Z2->Z3 transition -- background delta only 8 RGB points, would increase to 20+`
- **After:** `The boundary between Zone 2 and Zone 3 whispers where it could speak. There is room for the transition to become more perceptible -- a stronger shift in atmosphere as the reader crosses from one space into the next.`
- **Lost:** The specific number (8 RGB), the specific target (20+), the specific CSS property (background delta).
- **Preserved:** The zone reference (Z2->Z3), the direction (increase perceptibility), the quality dimension (transition).
- **Why deliberate:** IMPROVE builder isolation requires generative-only language. Giving the IMPROVE builder "increase to 20+ RGB" triggers CORRECTIVE mode (threshold-gaming). Giving them "whispers where it could speak" triggers COMPOSITIONAL mode.
- **Risk:** The transformation depends on the ORCHESTRATOR'S ability to convert diagnostic -> generative. The orchestrator is an LLM (Opus) doing prose rewriting. Quality will vary. A poor transformation might:
  - Drop the zone reference ("the page could be more perceptible" -- WHERE?)
  - Drop the directional signal ("there is potential at the boundary" -- potential for WHAT?)
  - Over-specify in generative terms ("the darkness yearns for light at the factory floor boundary" -- too prescriptive)
- **Mitigation present:** The IMPROVE builder also receives the RESIDUAL artifact, which documents trade-offs in the builder's own words. The RESIDUAL may contain some of the same information in a more direct (but still builder-voiced) format.
- **Mitigation absent:** No validation that the transformation preserved zone references or directional signals. No check that the transformed text covers all HIGH-confidence items. An orchestrator that transforms 7 IMPROVEMENTS but only passes 4 to the IMPROVE builder would lose 3 ideas.

**L8: IMPROVEMENTS DISCARDED ON REBUILD (LOW SEVERITY -- APPROPRIATE)**

When PA-05 < 2.5 (RETHINK/REBUILD), IMPROVEMENTS are discarded. The rationale is correct: if the composition failed fundamentally, the builder's incremental ideas are continuation-biased. A fresh start should not carry forward ideas from a failed approach.

- **Lost:** All 5-10 improvement ideas from the failed build.
- **Impact:** If the REBUILD produces a page that would benefit from one of the discarded ideas, it must rediscover it independently.
- **Appropriate loss:** Yes. The risk of continuation bias outweighs the value of preserved ideas at PA-05 < 2.5.

**L9: FORMULAIC DETECTION NOT IN GATE (MEDIUM SEVERITY)**

GR-65 checks STRUCTURE (count, tags, confidence ratings) but the formulaic detection heuristic lives in the ORCHESTRATOR, not the gate. The self-prompting design doc (Section 6) says: "If the orchestrator detects formulaic padding, it should IGNORE the IMPROVEMENTS list for IMPROVE triggering."

- **Lost:** The signal value of IMPROVEMENTS when the builder writes shallow padding.
- **Risk:** The orchestrator might not implement the formulaic detection heuristic (it's described as orchestrator-level logic, not gate logic). If it doesn't, a builder that writes "could adjust padding in Zone N" five times gets treated as having 5 MEDIUM ideas, potentially influencing the IMPROVE trigger decision.
- **Impact:** An unnecessary IMPROVE cycle (cost ~$55, 60-90 min) triggered by formulaic IMPROVEMENTS.
- **Mitigation present:** The 3+ HIGH threshold for the IMPROVE override means formulaic items need to be tagged HIGH to trigger. But a compliant builder could tag shallow items HIGH.

---

## 4. OBSERVER STOP (D10): Observer -> Orchestrator

### Information Flow Map

```
Observer Agent (spawned FIRST, runs full lifecycle)
  |- Input: Build directory path + observer protocol ONLY
  |- Data source: Files on disk (execution tracker, gate results, PA reports, screenshots)
  |- NO pipeline context, NO build intent, NO content map
  |
  v
5 Verification Passes at phase boundaries:
  Pass 0: After Phase 0 (Content Map exists)
  Pass 1: After Phase 1 (Brief exists)
  Pass 2: After Phase 3A (Screenshots + gates exist)
  Pass 3: After Phase 3B (All PA reports exist)
  Pass 4: After Phase 3C (Weaver verdict exists)
  |
  |- Writes: OBSERVER-PASS-{N}.md (per-pass results)
  |- IF BLOCKING violation: Writes OBSERVER-STOP.md
  |
  v
Orchestrator (checks for STOP file)
  |- Check: `ls {BUILD_DIR}/OBSERVER-STOP.md 2>/dev/null` before each phase transition
  |- IF exists: Read violation, address it, then continue
  |
  v
Observer (final)
  |- Writes: OBSERVER-REPORT.md (comprehensive 30-check report)
```

### Where Information Could Be Lost

**L10: RACE CONDITION BETWEEN OBSERVER AND ORCHESTRATOR (MEDIUM SEVERITY)**

The observer operates on a polling model: it checks files at phase boundaries. The orchestrator writes files during phases. There is no synchronization mechanism.

- **Scenario:** Orchestrator finishes Phase 2A (Pass A build), writes Pass A HTML, then IMMEDIATELY starts Phase 2A-gate (structural check) and Phase 2B (Pass B build) before the observer has read the Phase 2A artifacts.
- **Lost:** Observer misses the Phase 2A verification window. Observer checks O-PASS-A-COMPLETE, O-STRUCTURAL-CHECK, O-DIFFERENT-AGENT only at its Pass 2 trigger (after Phase 3A, much later).
- **Impact:** A violation in Phase 2 would not be caught until after Phase 3A, potentially wasting Pass B + screenshots + gates on a doomed pipeline.
- **Mitigation present:** The observer's trigger conditions are FILE-BASED (wait for content-map, brief, screenshots, etc.), not TIME-BASED. The observer naturally waits for the right files to exist.
- **Mitigation absent:** No Phase 2A/2B-specific trigger. The observer protocol (d10-observer-protocol.md) defines 5 passes but NONE correspond to the two-pass build boundary. The observer does not verify O-PASS-A-COMPLETE, O-STRUCTURAL-CHECK, O-DIFFERENT-AGENT, O-HANDOFF-COMPLETE, O-STRUCTURE-PRESERVED, O-CSS-GROWTH, or O-CONVICTION-PRESERVED -- these are defined in the design doc's Section 7 but are NOT in the observer's prompt (Section 4, the copy-paste-ready prompt has only 5 passes covering Phases 0, 1, 3A, 3B, 3C).

**L10-CRITICAL: OBSERVER PROMPT DOES NOT INCLUDE TWO-PASS CHECKS**

The observer agent prompt (d10-observer-protocol.md Section 4) defines 30 checks across 5 passes. But the two-pass build verification points from Section 7 ("Observer Verification Points for Two-Pass") are NOT included in the prompt. This means:

- O-PASS-A-COMPLETE: NOT in prompt
- O-STRUCTURAL-CHECK: NOT in prompt
- O-DIFFERENT-AGENT: NOT in prompt (for Pass A vs Pass B)
- O-HANDOFF-COMPLETE: NOT in prompt
- O-STRUCTURE-PRESERVED: NOT in prompt
- O-CSS-GROWTH: NOT in prompt
- O-CONVICTION-PRESERVED: NOT in prompt

These 7 checks are defined in the design document but NOT in the actual agent prompt. The observer will NOT verify the two-pass handoff at all.

**Resolution needed:** Either add these 7 checks as a new "Pass 1.5" (triggered by Pass A HTML existence) in the observer prompt, or acknowledge that two-pass compliance is verified by the orchestrator only (self-assessment, violating D10's purpose).

**L11: OBSERVER CANNOT VERIFY GENERATIVE TRANSFORMATION (LOW SEVERITY)**

The observer checks REFINE isolation (OBS-07: no gate scores, threshold numbers, diagnostic vocabulary). But the new IMPROVEMENTS -> generative transformation is an ORCHESTRATOR process, not a file. The observer cannot verify whether the transformation was done correctly.

- **Lost:** Verification that IMPROVE builder inputs contain ONLY generative language.
- **Impact:** If the orchestrator passes raw IMPROVEMENTS (with "8 RGB points", "increase to 20+") to the IMPROVE builder, the observer would need to read the IMPROVE builder's INPUT to catch it. But the observer reads OUTPUT files, not input prompts.
- **Mitigation present:** OBS-07 already checks for prohibited content in REFINE builder inputs ("fix", "repair", "increase", threshold numbers). If the observer CAN access the IMPROVE builder's prompt/input files, it would catch raw IMPROVEMENTS leaking through.
- **Mitigation absent:** The observer prompt does not mention IMPROVEMENTS transformation verification. The existing OBS-07 check may incidentally catch it (searching for threshold numbers like "8 RGB") but this is not explicit.

---

## 5. MINI-PA (Ideology): 15 of 69 Questions

### Information Flow Map

```
Full PA (Mode 4): 69 questions, 9 auditors, 3 viewports
  |
  v
Mini-PA (Mode 2.5): 15 questions, 3 auditors (A, C, G), 1 viewport (1440px)
```

### What Is Lost in the 15-Question Selection

**L12: 54 QUESTIONS DROPPED (HIGH SEVERITY -- DELIBERATE)**

| Excluded Auditor | Questions Lost | What Cannot Be Detected |
|-----------------|---------------|------------------------|
| B (Readability) | 9 | Typography detail issues (font distinction, reading fatigue, text density) |
| D (Flow/Pacing) | 8 | Scroll rhythm problems, content flow breaks, pacing inconsistencies |
| E (Grid/Layout) | 8 | Grid regressions, layout balance, structural alignment issues |
| F (Consistency) | 5 | Rhythm violations, pattern breaks, inconsistent treatment across zones |
| H (Responsive) | 8 | ALL responsive issues (no 768px/1024px viewport in Mini-PA) |
| I (Cross-page) | 6 | Cross-page coherence (N/A for single-page REFINE, appropriate exclusion) |

**Are the 15 the RIGHT 15?**

The 15 questions were selected to cover:
1. PA-05 sub-criteria (PA-05 via Auditor A -- the single most important question)
2. Common REFINE-relevant failures (spatial balance, whitespace, metaphor coherence)
3. Tier 5 coverage (3 of 9 Tier 5 questions assessable: PA-65, PA-66, PA-68)

**Missing coverage analysis:**

- **PA-02 (readability)** is NOT in the 15 despite being listed in the friction-fix design doc Section 2 ("Recommended question subset: PA-01, PA-03, PA-05...PA-02, PA-08"). The final Mini-PA spec in Section 4 assigns PA-02 to excluded Auditor B. **This is a LOSS** -- readability is a common REFINE concern.
- **PA-08 (font distinction)** is similarly listed in the initial recommendation but absent from the final 15. Assigned to excluded Auditor B.
- **PA-12 (scroll rhythm)** and **PA-13 (clear ending)** are in the initial recommendation but absent from the final 15. Assigned to excluded Auditor D.
- **PA-14 (grid)** is in the initial recommendation but absent from the final 15. Assigned to excluded Auditor E.
- **PA-17 (transitions)** is in the initial recommendation but absent from the final 15. It is not assigned to ANY of the 3 included auditors.

The initial "recommended subset" (Section 2, Option 1) listed 15 questions spanning 7 auditors. The final deployment (Section 4) selected 15 questions from ONLY 3 auditors (5 each). This means 5 questions from the initial recommendation were replaced by questions from A, C, G that were NOT in the initial recommendation.

**L12-SIGNIFICANT: TRANSITION DETECTION LOST IN MINI-PA**

PA-17 (transitions) was in the initial recommended subset but is NOT in the final Mini-PA. Transitions are the PRIMARY mechanism for zone boundary quality -- the exact dimension that REFINE most commonly improves. Losing transition assessment in the REFINE validation tool is a significant gap.

- **Mitigation present:** PA-65 (Auditor A: "ensemble or choir in unison?") and PA-66 (Auditor C: "density arc") provide indirect transition assessment. PA-24 (system coherence) is also included.
- **Mitigation absent:** No question directly asks "do zone transitions feel like entering different rooms?" which is the most diagnostic question for REFINE quality.

**L13: TIER 5 ASSESSMENT DEGRADED (MEDIUM SEVERITY)**

Full PA assesses 9 Tier 5 questions (PA-60 through PA-68). Mini-PA assesses only 3 (PA-65, PA-66, PA-68). The Weaver must report "X/3 (of 3 assessable, Mini-PA)" not "X/9".

- **Lost:** 6 Tier 5 questions: PA-60 (pervading metaphor beyond labels), PA-61 (metaphor structural in CSS), PA-62 (emotional arc crescendo), PA-63 (surprise compositional not decorative), PA-64 (quiet zone functional), PA-67 (skeleton tells story without words).
- **Impact:** FLAGSHIP determination is impossible from Mini-PA alone (requires all 9 Tier 5 questions). The design correctly notes: "FLAGSHIP confirmation always requires Mode 4."
- **Risk:** If Mini-PA shows PA-05 >= 3.5, the pipeline might prematurely declare RELEASE without full Tier 5 assessment. The escalation trigger ("Mini-PA PA-05 >= 3.5 -> escalate to Mode 4") correctly prevents this.

---

## 6. CONVERGENCE MODEL (Ideology): Quality Equation Propagation

### Information Flow Map

```
New Quality Equation:
  Quality_0 = Agent Capability x Content Affordance x Spec Fidelity
  Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
  |
  v
Where it appears:
  - MANIFEST.md L58-62 (IMPLEMENTED per convergence-model.md Edit 1)
  - artifact-orchestrator.md L24-28 (IMPLEMENTED per convergence-model.md Edit 5)
  |
  v
Where it should propagate but might not:
  - artifact-builder-recipe-compose.md (builder sees recipe, not MANIFEST/orchestrator)
  - pa-weaver.md (weaver makes verdicts based on quality model)
  - SKILL.md (user-facing entry point)
  - design-system/CLAUDE.md (root navigation)
```

### Propagation Analysis

**L14: CONVERGENCE MODEL NOT IN BUILDER'S VIEW (LOW SEVERITY)**

The builder reads the recipe (compose or polish), not the MANIFEST or orchestrator. The convergence equation appears in documents the BUILDER NEVER READS. The builder's view of quality comes from:
- Recipe Phase 5 (self-evaluation questions)
- Brief (zone specs, metaphor, disposition instructions)
- Reference files (tokens, components, mechanisms)

None of these contain the convergence model. The builder does not know that iteration is the expected path.

- **Impact:** LOW. The builder's job is to compose, not to understand the pipeline's iteration philosophy. Whether the builder knows about convergence doesn't affect CSS quality.
- **Exception:** The IMPROVEMENTS protocol (Step 5.8) implicitly communicates convergence: "A different Opus builder will read these ideas during the IMPROVE pass." This tells the builder there WILL be another pass, which is the behavioral manifestation of the convergence model.

**L15: VERDICT TAXONOMY PROPAGATION INCOMPLETE (MEDIUM SEVERITY)**

The convergence model renames verdicts: SHIP -> RELEASE, SHIP WITH FIXES -> POLISH, REFINE -> IMPROVE, REBUILD -> RETHINK.

These renames must propagate to:
1. pa-weaver.md (verdict thresholds) -- DESIGNED per convergence-model.md Edit 9
2. MANIFEST.md (quickstart, budget) -- DESIGNED per Edits 2-4
3. artifact-orchestrator.md (decision tree) -- DESIGNED per Edits 5-8
4. pa-guardrails-weaver.md -- DESIGNED per Edit 14
5. pa-guardrails.md -- NOT mentioned in edit specs
6. pa-deployment.md -- NOT mentioned (uses "SHIP/REFINE" in iteration deployment notes)
7. pa-questions.md -- NOT mentioned (no verdict language present)
8. EXECUTION-TRACKER-TEMPLATE.md -- verdict fields reference old names
9. SKILL.md -- NOT mentioned (references "SHIP / SHIP WITH FIXES / REFINE / REBUILD")

**Gap:** pa-deployment.md and SKILL.md are NOT in the rename edit list. If the ideology changes were implemented but these files were not updated, agents reading those files would see old verdict names.

---

## 7. CROSS-RUN TRACKER (D13): Who Writes, Who Reads

### Information Flow Map

```
Per-run data:
  - Orchestrator writes: PA-05 scores, verdict, builder ideas count, fix counts
  - Gate runner writes: gate pass/fail counts
  - Weaver writes: verdict classification
  |
  v
Cross-run tracker file (new, D13)
  |- Written by: Orchestrator at pipeline end
  |- Format: Append-only table (one row per build)
  |- Location: design-system/pipeline/cross-run-scores.md (or similar)
  |
  v
Readers:
  |- Orchestrator (start of next build): reads for calibration
  |- Human reviewer: reads for trend analysis
  |- Observer: does NOT read (observer has no cross-run context)
```

### Information Flow Assessment

**L16: CROSS-RUN TRACKER IS LOGGING ONLY, NOT A FEEDBACK LOOP (LOW SEVERITY -- BY DESIGN)**

The cross-run tracker records data but does not FEED BACK into pipeline decisions. The orchestrator reads it "for calibration" but no gate, verdict threshold, or agent prompt references cross-run data. This is pure observational logging.

- **Lost:** Cross-run patterns that could inform per-run decisions. Example: if 5 consecutive builds show D-07 (hover states) is the disposition with lowest PA-05 sub-score, the pipeline could allocate more attention to D-07 in the next build. Currently this insight exists only if a human reads the tracker and modifies the recipe.
- **Impact:** LOW in v5. The cross-run tracker is a v5 foundation for future adaptive pipeline behavior. Its value is longitudinal, not per-run.
- **Mitigation present:** The tracker exists and is append-only (no information deletion). Over time, patterns will emerge.
- **No active feedback loop needed in v5.** Adding one would be premature optimization without sufficient cross-run data.

---

## 8. D14 REDUCTION: Does Deleting Sections 10-16 Remove Needed Information?

### Sections Deleted (archived to `_historical/orchestrator-sections-10-16.md`)

| Section | Content | Lines | Who Might Need It |
|---------|---------|-------|-------------------|
| 10 | 3-Pass Experimental Architecture | 49 | Nobody (BLOCKED, zero evidence) |
| 11 | Experiment Protocol | 85 | Superseded by standalone `experiment-protocol.md` |
| 12 | Suppressor Management | 41 | Nobody (all 20 suppressors INACTIVE, historical only) |
| 13 | 13 Irreducible Concepts | 72 | Theoretical framework, not operational |
| 14 | Diagnostic Context | 61 | Historical gap analysis, not operational |
| 15 | Revision Quality Theory | 14 | Academic, not operational |
| 16 | Actionability Tiers/Recommendations | 24 | All either implemented or superseded |
| Coverage Verification | ITEM-to-section mapping | 30 | Only useful during initial extraction |

**Total: ~376 lines deleted from operational file, archived to _historical/**

### Analysis: Does Any Agent Need This Content?

**REFINE/IMPROVE Builder:** NO. IMPROVE builder receives conviction + artistic + improvements + RESIDUAL + brief + HTML. None of Sections 10-16 are in this input set.

**PA Auditors:** NO. PA auditors receive screenshots only. They never read the orchestrator document.

**Weaver:** NO. Weaver reads PA reports. Does not reference orchestrator.

**Observer:** NO. Observer reads execution tracker, gate results, PA reports, screenshots. Does not reference orchestrator Section 10+.

**Orchestrator itself:** The orchestrator reads Sections 0-9 for execution flow. The document itself contains the marker: `<!-- STOP HERE FOR EXECUTION -->` at line 784, confirming Sections 10+ are not execution-relevant.

**Content Analyst / Brief Assembler:** NO. These agents read the routing doc and TC brief template, not the orchestrator.

**VERDICT: Deletion is SAFE.** No operational agent reads Sections 10-16. The archive in `_historical/` preserves provenance for human researchers. The 3-line pointer at the end of the operational file correctly directs anyone who needs historical context.

**One minor concern:** Section 13 (13 Irreducible Concepts) contains the concept list that informed the pipeline's architecture. If a future pipeline modification needs to understand WHY certain decisions were made, the archived file is the reference. The pointer is sufficient.

---

## 9. Summary: Information Loss Risk Registry

| ID | Feature | Loss Description | Severity | Deliberate? | Mitigation |
|----|---------|-----------------|----------|-------------|------------|
| L1 | Two-Pass | Creative decision context lost between passes | MEDIUM | Partial | INTENT comments + RESIDUAL capture most rationale |
| L1-CRIT | Two-Pass | **CONTRADICTION: Two design docs disagree on Pass B inputs** | CRITICAL | No | Must resolve before implementation |
| L2 | Two-Pass | Pass A structural check results not passed to B | LOW | Yes | Deliberate isolation |
| L3 | Two-Pass | Temporal sequence of Pass A decisions lost | LOW | No | Could add "audit all zones evenly" note to polish recipe |
| L4 | INTENT | Format drift causes silent parse failures | MEDIUM | No | GR-83 lacks parse-failure detection |
| L5 | BV-08 | Property-name matching misses VALUE drift | MEDIUM | Yes (by design) | Perception gates cover key properties |
| L6 | INTENT | INTENT comments may be deleted during IMPROVE pass | LOW | No | No preservation gate |
| L7 | IMPROVEMENTS | Generative transformation is lossy | HIGH | Yes (isolation) | RESIDUAL provides backup; no transformation QA |
| L8 | IMPROVEMENTS | Discarded on REBUILD | LOW | Yes | Continuation bias prevention |
| L9 | IMPROVEMENTS | Formulaic detection not in gate | MEDIUM | Yes (orchestrator-level) | Could be missed if orchestrator doesn't implement |
| L10 | Observer | Race condition at phase boundaries | MEDIUM | No | File-based triggers mitigate timing |
| L10-CRIT | Observer | **Two-pass checks NOT in observer prompt** | CRITICAL | No | 7 verification points designed but not implemented |
| L11 | Observer | Cannot verify generative transformation quality | LOW | Partial | OBS-07 may incidentally catch leakage |
| L12 | Mini-PA | 54 questions dropped from full PA | HIGH | Yes | Appropriate for REFINE validation |
| L12-SIG | Mini-PA | **Transition detection (PA-17) excluded** | SIGNIFICANT | Partial | Indirect coverage via PA-65, PA-66 |
| L13 | Mini-PA | Tier 5 degraded from 9 to 3 questions | MEDIUM | Yes | Escalation trigger for FLAGSHIP |
| L14 | Convergence | Quality model not in builder's view | LOW | N/A | Builder doesn't need it |
| L15 | Convergence | Verdict renames not propagated to all files | MEDIUM | No | pa-deployment.md, SKILL.md gaps |
| L16 | Cross-Run | No feedback loop, logging only | LOW | Yes (v5 foundation) | Appropriate for current maturity |
| D14 | Reduction | Sections 10-16 deleted | SAFE | Yes | No agent reads them; archived |

---

## 10. CRITICAL Findings Requiring Resolution

### CRITICAL-1: Pass B Input Contradiction (L1-CRIT)

**Two design documents disagree on whether Pass B receives mechanism-catalog.md and components.css:**
- `d5-two-pass-design.md` Section 3: EXCLUDE (Pass B deploys no new mechanisms)
- `d5-orchestration-protocol.md` Section 2 + Section 6 prompt: INCLUDE (listed as required)
- `artifact-builder-recipe-polish.md` (implementation): EXCLUDE (not listed in inputs)

**Recommendation:** Align all documents with the recipe implementation (EXCLUDE). Update orchestration-protocol.md Table row 6-7 to "NO" and remove from Pass B prompt template. The polish recipe's lean input design (1,300-1,700 lines) is the correct architecture.

### CRITICAL-2: Observer Prompt Missing Two-Pass Checks (L10-CRIT)

**The observer design document defines 7 verification points for the two-pass build, but NONE are included in the actual observer agent prompt.** The observer will NOT verify:
- Pass A HTML completion
- Structural check execution
- Different-agent rule between Pass A and Pass B
- Handoff completeness
- Structure preservation
- CSS growth
- Conviction preservation

**Recommendation:** Add a "Pass 1.5" verification stage to the observer prompt, triggered by Pass A HTML file existence. Include all 7 two-pass checks. Without this, the two-pass architecture's highest-risk failure modes (structure destruction, same-agent violation, conviction drift) are unobserved.

### SIGNIFICANT: Transition Question Excluded from Mini-PA (L12-SIG)

**PA-17 (transitions) was identified as important in the initial recommendation but excluded from the final Mini-PA.** Transitions are the primary dimension that REFINE cycles improve. Consider replacing one of the 5 Auditor C questions (PA-50: "does the page use full width?" is the weakest) with PA-17 reassigned to Auditor C's scope.

---

## 11. New D2 Risks Introduced by V5

**D2 (Compression Loss) is the crack dimension this analysis most directly serves.** V5 introduces several NEW D2 risks:

1. **Two-Pass Junction (D2-new-1):** Information compresses when Pass A's 808-line recipe + 1,200-line catalog + creative decisions compress into a single HTML file that Pass B reads. The HTML IS the information -- but the decision CONTEXT is lost unless INTENT comments capture it. If INTENT narration quality is low, the two-pass junction becomes a new D2 loss point.

2. **Generative Transformation Junction (D2-new-2):** The orchestrator's conversion of IMPROVEMENTS (diagnostic) -> generative language is a deliberate compression step. Specific values -> poetic descriptions. This is the first place in the pipeline where INTENTIONAL lossy compression is applied to builder-originated content. Previous D2 losses were accidental (brief -> build compression). This one is by design.

3. **Mini-PA Coverage Compression (D2-new-3):** Going from 69 -> 15 questions compresses the PA's assessment surface by 78%. For REFINE validation, this is acceptable. But if Mini-PA becomes the DEFAULT assessment for iteration cycles (which the friction-fix design encourages), the pipeline's quality signal shrinks permanently for most builds.

4. **Observer Blindness to Two-Pass (D2-new-4):** The observer was designed to verify single-pass pipeline execution. The two-pass architecture introduces 7 new verification points that the observer cannot check (per L10-CRIT). This is not D2 compression loss but D10 (self-assessment unreliability) expansion: the two-pass architecture has MORE self-assessment surface area than single-pass, with NO additional independent verification.

---

*End of information loss propagation analysis. 2 CRITICAL, 1 SIGNIFICANT, 16 LOW-MEDIUM findings across 7 v5 features.*
