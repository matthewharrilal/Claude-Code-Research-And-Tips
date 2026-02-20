# AUDIT-15: CONTRARIAN CHALLENGE

**Agent:** contrarian (Opus 4.6)
**Date:** 2026-02-19
**Task:** #15 / #57
**Mandate:** Find everything that will fail when a fresh Claude instance executes this master prompt.

**Prior art reviewed:**
- `ephemeral/flagship-44-recipe/11-CONTRARIAN.md` (459 lines) -- challenged 16 findings, verdict: "Build 3 pages. Compare them."
- `ephemeral/fat-core-capability/16-contrarian.md` (257 lines) -- challenged 8 findings, verdict: "Run the experiments."

**Source material reviewed:**
- All 8 DRAFT files (DRAFT-orchestrator.md, DRAFT-09 through DRAFT-13, DRAFT-pa-questions.md)
- 07-metacog-analysis.md, 12-builder-simulation.md, 14-failure-pattern-match.md
- 13-cross-validation.md, 42-gate-crossref.md, 17-gate-cross-ref.md

**Framing assumption (from team lead):** CD-006 IS NOT Flagship 4/4. Flagship 4/4 has NEVER been achieved. Any claim of certainty is overconfidence.

---

## EXECUTIVE SUMMARY

I identified **7 BLOCKING issues**, **9 CONCERNING issues**, and **3 ACCEPTABLE risks**. The blocking issues are not speculative -- they are concrete contradictions and mechanical failures that WILL break execution. Fix the 7 blocking issues before assembly or the master prompt will produce errors, not pages.

**Overall probability assessment:** If all 7 blocking issues are fixed, the pipeline has a 25-40% chance of producing PA-05 >= 3.0/4 on first run. This is NOT pessimism -- it is the honest N=0 baseline for a system this complex.

---

## CHALLENGE AREA 1: WILL THE FRESH INSTANCE READ THE FULL PROMPT?

### B-01 [BLOCKING]: Two conflicting DRAFT-13 files exist

Two files provide CLAUDE.md edits with DIFFERENT edit counts:

| File | CLAUDE.md edits | compositional-core/CLAUDE.md edits |
|------|----------------|-----------------------------------|
| `DRAFT-13-claude-md-architecture.md` (nav-researcher) | 8 | 6 |
| `DRAFT-13-claude-md-architecture-section.md` (claude-md-architect) | 11 | 9 |

The assembler (Task #17) must choose ONE. If they merge both, edits will conflict. If they pick the wrong one, edits will be incomplete.

**Fix:** Assembler MUST explicitly declare which DRAFT-13 is canonical. I recommend DRAFT-13-claude-md-architecture.md (nav-researcher) as it has the cleaner format ("EDIT N of 8" numbering) and was explicitly designed as prompt content. The other contains overlapping but non-identical edits.

### C-01 [CONCERNING]: Prompt length will exceed the 400-500 line target

The metacog analysis (07-metacog-analysis.md) sets a target of 400-600 lines for the master prompt. But the literal content blocks alone exceed this:

| Section | Literal content lines |
|---------|---------------------|
| Conventions brief | ~232 lines |
| Gate runner | ~700+ lines (21 gates with JS) |
| PA questions | ~150 lines |
| Skill edits | ~800+ lines (35 edit blocks) |
| CLAUDE.md edits | ~200+ lines |
| Orchestrator logic | ~120+ lines |
| **TOTAL** | **~2,200+ lines** |

The metacog analysis warns that prompts above 600 lines suffer from "skimming collapse" (FM-01, rated HIGH). At 2,200+ lines, this is not a risk -- it is a certainty. The fresh instance will NOT read every line with equal attention.

**Mitigating factor:** The prompt is SEQUENCED -- each section is acted upon and then the instance moves on. The instance does not need to hold all 2,200 lines in working memory simultaneously. But the skill edits section (800+ lines of exact string matching) is the weakest point.

**Fix:** No fix needed for the overall length IF the prompt is structured as sequential tasks. But the assembler must ensure the 35 skill edits are presented as a SCRIPT to execute, not a document to comprehend.

### C-02 [CONCERNING]: Primacy-recency attention curve will bury the conventions brief

07-metacog-analysis.md identifies that the first ~150 lines and last ~50 lines get highest attention. If the conventions brief is Section 2 (after infrastructure setup), it will be in the HIGH attention zone. But if the gate runner (Section 3, ~700 lines) is next, it will push the PA questions and fix cycle logic into the LOW attention zone.

**Fix:** Structure the prompt so that the MOST CRITICAL decision-shaping content (conventions brief, builder spawn prompt, success criteria) is in the first 200 lines. Put the MECHANICAL content (gate runner JS, skill edit blocks) in appendix sections that are EXECUTED but not internalized.

---

## CHALLENGE AREA 2: WILL THE CONVENTIONS BRIEF PRODUCE FLAGSHIP?

### C-03 [CONCERNING]: The conventions brief has NEVER been tested on a builder (N=0)

The 232-line conventions brief is the single most important artifact in the entire pipeline. It is the document that shapes the builder's compositional decisions. It has been:
- Researched by 5+ agents
- Cross-referenced against 23 source reports
- Simulated by a builder-perspective agent (12-builder-simulation.md)
- Verified line-by-line (CROSSREF-41)

It has NOT been:
- Given to an actual Opus builder to produce an actual page
- Tested against any real build outcome

12-builder-simulation.md predicts PA-05 2.5-3.0/4, which is BELOW the 3.5/4 Flagship target. The simulation also found:
- 3/14 Flagship dimensions fully covered
- 8/14 partially covered
- 3/14 not covered at all

This is the team's OWN prediction, not contrarian pessimism. And the simulation was done by an agent who had READ all the research. A fresh builder seeing the brief cold will likely score LOWER.

**Fix:** No fix except building. The brief must be tested. But the team should set expectations: first build is a DIAGNOSTIC, not a delivery.

### C-04 [CONCERNING]: "Recipe not checklist" framing is an instruction, not a structure

The builder spawn prompt (DRAFT-orchestrator.md line 84-89) contains this critical passage:

```
The conventions brief contains your constraints, process phases (A-D),
self-check protocol, and creative authority clause. Follow it as a RECIPE
(sequenced steps to follow), not as a CHECKLIST (constraints to satisfy).

If you read the brief as a list of things to verify, STOP. Reread it as
a sequence of creative steps: understand content, plan metaphor, build
HTML+CSS, self-verify.
```

This is a META-INSTRUCTION telling the builder HOW to read the brief. But the prior contrarian (11-CONTRARIAN.md, Finding 3) already identified that "FORMAT > VOLUME" is confounded with model. Whether an Opus builder follows a document as a recipe vs checklist depends on the BUILDER, not the instruction. The Middle experiment's success came from a 100-line recipe with "Read/Select/Deploy/Assess" verbs. This brief is 232 lines with a mix of declarative, imperative, and constraint language.

**Fix:** The conventions brief ITSELF must be structured as a recipe with sequenced phases. The DRAFT-09 brief already has Phases A-D, which is correct. But within each phase, the language should be IMPERATIVE ("Select 3 materials. Deploy them. Assess the result.") not DECLARATIVE ("Materials have perceptual thresholds at..."). The current ratio is 55% declarative / 25% recipe / 20% checklist per the brief drafter's own analysis. For Flagship, the recipe portion may need to be higher.

### A-01 [ACCEPTABLE]: 14-dimension Flagship definition covers more than any single page can achieve

12-builder-simulation.md tests the brief against a 14-dimension Flagship definition and finds 3/14 fully covered. But this is comparing a CONVENTIONS BRIEF (which describes the world) to a DIMENSIONS LIST (which describes the outcome). The brief cannot cover all 14 dimensions explicitly without becoming a 500-line specification. The question is whether the brief enables the builder to DISCOVER these dimensions, not whether it LISTS them.

**Fix:** None needed. The 14-dimension gap analysis is useful for the PA, not for the brief.

---

## CHALLENGE AREA 3: WILL THE TEAM ARCHITECTURE WORK?

### C-05 [CONCERNING]: Single Opus builder for 90-150 minutes is a context risk

The orchestrator allocates 90-150 minutes for a single builder reading ~2,120 lines of reference material and producing a complete HTML page. This is the Fat Core architecture -- one agent plans AND builds.

The risk: at 90+ minutes of active generation, the builder's early compositional decisions may fall out of its effective context window. The metaphor chosen at minute 10 may not influence CSS written at minute 120. This is the CONTINUATION BIAS problem identified in prior research -- the builder will tend to continue its current pattern rather than referring back to its initial plan.

CD-006 was built by Opus in approximately this timeframe and scored 39/40. But CD-006 was built with inter-agent messaging, not as a single-agent Fat Core. The Middle experiment used Fat Core and succeeded, but at ~35 minutes -- less than half the minimum expected here.

**Fix:** The _build-log.md deliverable partially mitigates this (builder writes down its plan and can refer back). But consider adding a MID-BUILD checkpoint at the 50% mark where the orchestrator runs micro-gates and sends results back to the builder. This interrupts continuation bias.

### C-06 [CONCERNING]: Fix cycle convergence is assumed, not tested

The orchestrator allows 3 fix cycles (Step 6). Each fix cycle re-uses the SAME builder with PA feedback. The assumption is that the builder can interpret PA feedback and make targeted CSS fixes.

This has never been tested. The flagship remediation used a DIFFERENT approach -- a separate Opus builder received a 1,025-line remediation spec. The Middle experiment had no fix cycles. CD-006 had no fix cycles.

The risk: PA feedback is PERCEPTUAL ("the transitions feel uniform"), not MECHANICAL ("change border-width from 1px to 3px at .zone-3"). An Opus builder may or may not be able to translate perceptual feedback into CSS changes. If it cannot, all 3 fix cycles will produce marginal improvements at best.

**Fix:** The weaver synthesis (Step 5) must translate PA findings into SPECIFIC CSS directives, not pass through perceptual observations. This is partially addressed in DRAFT-11 but the weaver prompt should explicitly say "translate each finding into a specific CSS change."

---

## CHALLENGE AREA 4: WILL SKILL EDITS BREAK ANYTHING?

### B-02 [BLOCKING]: merged-components.css still referenced in builder spawn prompt

DRAFT-11-pa-orchestrator-section.md line 223:
```
6. design-system/compositional-core/components/merged-components.css -- component library
```

This file DOES NOT EXIST. The actual file is `components.css`. 13-cross-validation.md identified this (finding M5, rated CRITICAL). DRAFT-09 (conventions brief) and DRAFT-10 (gate runner) both corrected this. But DRAFT-11 (the PA/orchestrator section containing the builder spawn prompt) did NOT apply the correction.

This will cause an immediate build failure -- the builder will try to read a non-existent file.

**Fix:** Change line 223 of DRAFT-11 from `merged-components.css` to `components.css`. This is a 1-word fix.

### B-03 [BLOCKING]: DRAFT-orchestrator.md ALSO still references merged-components.css

DRAFT-orchestrator.md line 81:
```
6. design-system/compositional-core/components/merged-components.css -- COMPONENT LIBRARY. Consult during build.
```

Same problem. The ORCHESTRATOR section -- the one that SPAWNS the builder -- tells the builder to read a file that does not exist.

**Fix:** Change line 81 of DRAFT-orchestrator.md from `merged-components.css` to `components.css`.

### B-04 [BLOCKING]: 35 skill edits depend on exact string matching against potentially-changed files

DRAFT-12 contains 35 Edit tool operations (22 TC, 13 PA). Each requires an EXACT `old_string` match in the target file. The TC skill is 1,933 lines; the PA skill is 848 lines.

Risks:
1. If ANY previous session modified these files (even adding a space), the old_string will not match
2. If the files have been modified since the skill audit agents read them, edits will fail silently or with errors
3. The edit order matters -- later edits depend on earlier edits NOT having changed the target text for subsequent operations
4. 35 sequential edits is the largest mechanical operation in the entire prompt. If edit 17 fails, edits 18-35 may also fail due to cascading context shifts.

DRAFT-12 includes a post-edit verification checklist (14 TC items + 11 PA items), which partially mitigates this. But the checklist runs AFTER all 35 edits, not between them.

**Fix:** Add a READ-VERIFY-EDIT pattern: before each edit, read the file, verify the old_string exists, then apply. Group edits into batches of 5 with a file re-read between batches. This adds ~10 minutes but prevents cascading failures.

### B-05 [BLOCKING]: DG-4 references _build-plan.yaml that the builder never produces

The orchestrator references a diagnostic gate DG-4 that checks `_build-plan.yaml`. But the builder spawn prompt (DRAFT-orchestrator.md lines 91-96) only instructs the builder to produce 3 files:
- `output.html`
- `_build-log.md`
- `_cascade-value-table.md`

No `_build-plan.yaml` is mentioned. DG-4 will always fail because the file does not exist.

**Fix:** Either (a) add `_build-plan.yaml` to the builder's output file list, or (b) remove DG-4 from the gate runner, or (c) rename DG-4 to reference `_build-log.md` instead.

---

## CHALLENGE AREA 5: WILL THE GATE RUNNER CATCH REAL PROBLEMS?

### B-06 [BLOCKING]: SC-10 threshold contradicts across documents

| Document | SC-10 threshold | Source |
|----------|----------------|--------|
| Conventions brief (DRAFT-09) | <= 108px | 01-brief-research, tokens.css |
| SKILL.md PA summary (DRAFT-11 line 293) | <= 108px | 03-pa-research |
| Gate runner (DRAFT-10) | <= 120px | Remediation audit FINAL-VERDICT |
| Orchestrator summary (DRAFT-orchestrator line 129) | <= 108px | 04-orchestrator-research |
| Metacog analysis (07 line 277) | <= 120px | -- |
| CLAUDE.md edits (DRAFT-13-section lines 491, 526, 569) | <= 108px | 08-nav-validation |

The gate runner says 120px. The conventions brief says 108px. The builder will build to the brief's 108px standard. The gate will test to the gate runner's 120px standard. This means the gate is LESS STRICT than the brief -- pages could have 115px gaps that pass the gate but violate the brief's intent.

42-gate-crossref.md acknowledges this: "108px appears to be 96px + 12px overhead, but this derivation is not documented." It recommends 120px. 17-gate-cross-ref.md notes CD-006's maximum defined gap is 80px, well under either threshold.

**Fix:** Align ALL documents to ONE value. I recommend 120px for the gate (catch-obvious-voids) and 108px for the brief (build-aspiration). But document this intentional gap or it will read as a contradiction. Alternatively, use 96px everywhere (matching the token maximum) for maximum strictness.

### B-07 [BLOCKING]: SC-14 letter-spacing threshold contradicts across documents

| Document | SC-14 per-element minimum |
|----------|--------------------------|
| Conventions brief (DRAFT-09 line 92) | 0.02em |
| Conventions brief anti-patterns (DRAFT-09 line 306) | 0.02em |
| Gate runner (DRAFT-10 line 439) | 0.025em |
| CLAUDE.md edits (DRAFT-13-section line 573) | 0.02em |
| Orchestrator summary (DRAFT-orchestrator line 133) | 0.02em |

The gate runner says 0.025em. Everything else says 0.02em. 42-gate-crossref.md recommended 0.025em as the median of three conflicting sources (0.02, 0.025, 0.03125). But the recommendation was only applied to the gate runner, not to the brief or other documents.

This means a builder could use 0.02em letter-spacing (following the brief), and the gate runner would FAIL it (threshold is 0.025em). The builder would receive a gate failure for following the brief's instructions.

**Fix:** Align ALL documents. Use 0.025em everywhere (the gate runner's value) since it is the most conservatively sourced from anti-conditions S-08. Update the conventions brief and CLAUDE.md edits to match.

### C-07 [CONCERNING]: Zone selector in gate runner JS is fragile

The gate runner (DRAFT-10) uses this selector to identify zones:
```
[class*="zone"], section[data-zone], .section
```

This assumes the builder will use one of these class/attribute patterns. But nothing in the conventions brief TELLS the builder to use these patterns. The brief mentions "zones" as a concept but does not specify how to mark them in HTML. A builder could reasonably use `<section id="intro">`, `<div class="segment-1">`, or any other pattern.

If the selector matches zero elements, ALL zone-dependent gates silently pass (no zones = no violations). This is the WORST kind of failure -- the gates report success because they tested nothing.

**Fix:** The conventions brief should specify the HTML zone markup pattern. Add one line: "Mark each major content zone with `class="zone"` or `data-zone` attribute." Alternatively, make the gate runner more robust by also selecting `section`, `[id]`, or using heading-based boundary detection.

### C-08 [CONCERNING]: Tier 5 PA questions are N=0 tested

PA-60 through PA-67 are 8 new questions designed to detect Flagship-level composition above the PA-05 "designed" threshold. They have never been asked about any page, including CD-006. Their scoring criteria are theoretical.

PA-60 (Design Moment Density) requires >= 3 "design moments." What counts as a design moment? The question defines it as "a combination of color, weight, spacing, or layout that appears NOWHERE else on the page." But how similar is "similar"? A 1px difference? 5px? This will produce inconsistent scoring across 9 auditors.

PA-65 (Compositional Confidence) asks about "deliberate understatement." This is a JUDGMENT call that different auditors will answer differently based on their own aesthetic preferences.

**Fix:** Accept that Tier 5 questions are experimental. Do NOT gate success on them for the first build. Use them as DIAGNOSTIC data to calibrate, not as PASS/FAIL criteria.

---

## CHALLENGE AREA 6: WILL THE PA DETECT FLAGSHIP?

### C-09 [CONCERNING]: PA-05 collapses at the top of its scale

The prior contrarian (11-CONTRARIAN.md) identified this: PA-05 was designed to distinguish FLAT (1.5/4) from DESIGNED (3.0-4.0/4). It was NOT designed to distinguish DESIGNED (3.0) from FLAGSHIP (3.5+). The entire purpose of Tier 5 questions is to compensate for this collapse.

But the success bar (DRAFT-11) requires BOTH PA-05 >= 3.5/4 AND Tier 5 >= 5/8. This double-gate may be too strict (rejecting good pages that fail the experimental Tier 5 questions) or too lenient (passing pages that technically meet Tier 5 thresholds but lack genuine compositional depth).

**Fix:** For the first build, use PA-05 >= 3.0/4 as the primary success criterion and Tier 5 as informational. Adjust thresholds based on the actual scores.

---

## CHALLENGE AREA 7: WHAT ASSUMPTIONS ARE BAKED IN?

### A-02 [ACCEPTABLE]: The prompt assumes Opus is fundamentally better than Sonnet for building

The entire pipeline mandates "ALWAYS Opus" for the builder. This is based on:
- CD-006 was built by Opus and scored 39/40
- The flagship experiment used Sonnet builders and scored 34/91 on richness
- The contrarian from flagship-44-recipe noted this is confounded with 4 other variables

The master prompt does not test this assumption. It locks in Opus without an A/B comparison. This may be correct, but it is an assumption, not a finding.

**Fix:** None needed for the first build. But record that Opus-vs-Sonnet is an untested variable, and consider running one Sonnet build for comparison data.

### A-03 [ACCEPTABLE]: Intelligence loss through compression is structural

07-metacog-analysis.md estimates ~0.8% survival across 3 representational boundaries (research -> brief -> builder -> CSS). This is presented as a problem, but it may be a FEATURE. The builder does not need to understand the 337 research findings -- it needs to understand the 6 identity constraints, the perception physics, and the process phases. If those survive compression intact, 0.8% overall survival may be sufficient.

The real question is not "how much survives?" but "does the RIGHT stuff survive?" The conventions brief has been specifically designed to preserve the highest-leverage patterns. Whether it succeeded is an empirical question.

**Fix:** None. This is a structural property of the architecture.

---

## CHALLENGE AREA 8: WHAT IS THE SIMPLEST THING THAT COULD GO WRONG?

### B-SIMPLE [BLOCKING -- this is the simplest and most likely failure]:

The fresh instance reads a 2,200-line prompt. It starts executing. It creates the conventions brief. It creates the gate runner. It starts on the 35 skill edits. Edit #8 fails because the old_string does not match (the TC skill was modified by a previous session or the string has trailing whitespace that is not visible in the DRAFT-12 markdown). The instance reports the error. It has already consumed 30+ minutes. The user must now debug a string matching problem in a 1,933-line file.

This is not hypothetical. This is the MOST LIKELY failure mode for the entire pipeline. String matching across 35 edits in 2,800+ lines of source files, presented as markdown code blocks in a prompt, executed by a fresh instance that has never seen these files before.

**The embarrassingly simple alternative (continuing the tradition of both prior contrarians):**

Instead of having the fresh instance EDIT the skills, SHIP the skills pre-edited. Write the modified TC and PA skills as complete files. The fresh instance does not need to apply 35 surgical edits -- it receives the skills already in their final state. This eliminates the single largest mechanical risk in the entire prompt.

**Cost:** ~2,800 lines of literal file content instead of ~800 lines of edit instructions.
**Benefit:** Zero risk of edit failure. The fresh instance spends its cognitive budget on BUILDING, not on mechanical file surgery.

---

## PROBABILITY ASSESSMENT

| Scenario | If 7 BLOCKING issues fixed | If NOT fixed |
|----------|---------------------------|--------------|
| Prompt executes without mechanical errors | 70-80% | 15-25% |
| Builder produces a valid HTML page | 85-90% (given no mechanical errors) | -- |
| Page passes all 21 programmatic gates | 40-55% on first build | -- |
| PA-05 >= 3.0/4 (DESIGNED) | 25-40% | -- |
| PA-05 >= 3.5/4 (FLAGSHIP target) | 10-20% | -- |
| Tier 5 >= 5/8 | Unknown (N=0 for questions) | -- |
| Full success (PA-05 >= 3.5 AND Tier 5 >= 5/8) | 5-15% | -- |

**The honest assessment:** This pipeline has a 25-40% chance of producing a DESIGNED page (PA-05 >= 3.0) on first run, which would be a genuine achievement. It has a 5-15% chance of achieving full Flagship (PA-05 >= 3.5 + Tier 5). The fix cycles could improve these odds by +10-15 percentage points if the weaver provides actionable CSS directives.

These estimates are based on:
- The team's own builder simulation predicting 2.5-3.0/4
- The N=0 status of the conventions brief on actual builders
- The N=0 status of Tier 5 questions on actual pages
- The structural 55% intelligence loss through compression
- The fact that Flagship 4/4 has never been achieved by ANY pipeline

---

## SUMMARY TABLE

| ID | Rating | Issue | Fix |
|----|--------|-------|-----|
| B-01 | **BLOCKING** | Two conflicting DRAFT-13 files | Declare canonical version |
| B-02 | **BLOCKING** | merged-components.css in DRAFT-11 builder prompt | Change to components.css |
| B-03 | **BLOCKING** | merged-components.css in DRAFT-orchestrator builder prompt | Change to components.css |
| B-04 | **BLOCKING** | 35 skill edits depend on exact string matching | Add read-verify-edit pattern OR ship pre-edited skills |
| B-05 | **BLOCKING** | DG-4 references _build-plan.yaml that builder never produces | Add to builder outputs or remove DG-4 |
| B-06 | **BLOCKING** | SC-10 threshold: 108px vs 120px across documents | Align all documents to one value |
| B-07 | **BLOCKING** | SC-14 threshold: 0.02em vs 0.025em across documents | Align all documents to one value |
| C-01 | CONCERNING | Prompt length ~2,200 lines vs 400-600 target | Structure as sequential tasks, not document |
| C-02 | CONCERNING | Primacy-recency will bury middle sections | Put decision-shaping content first |
| C-03 | CONCERNING | Conventions brief N=0 tested on builders | First build is diagnostic, not delivery |
| C-04 | CONCERNING | "Recipe not checklist" is instruction, not structure | Increase imperative verb ratio in brief |
| C-05 | CONCERNING | Single builder 90-150 min context risk | Add mid-build checkpoint |
| C-06 | CONCERNING | Fix cycle convergence untested | Weaver must translate to specific CSS directives |
| C-07 | CONCERNING | Zone selector fragility in gate runner | Specify HTML markup pattern in brief |
| C-08 | CONCERNING | Tier 5 questions N=0 tested | Use as diagnostic, not pass/fail |
| C-09 | CONCERNING | PA-05 collapses at scale top | Lower primary threshold to 3.0/4 |
| A-01 | ACCEPTABLE | 14-dimension gap is brief vs outcome comparison | None needed |
| A-02 | ACCEPTABLE | Opus assumption untested vs Sonnet | Record as variable, test later |
| A-03 | ACCEPTABLE | Compression loss is structural | None needed |

---

## THE EMBARRASSINGLY SIMPLE ALTERNATIVE

Both prior contrarians ended with this section. I will too.

The simplest thing that would ACTUALLY produce a Flagship page is:

1. Take CD-006 (the 39/40 crown jewel)
2. Strip its CSS into a reusable template
3. Give a fresh Opus builder: the template CSS + new content + 50 lines of instructions
4. Let it adapt the template to the new content

This bypasses 2,200 lines of prompt, 35 skill edits, 21 gates, 56 PA questions, and the entire orchestrator. It would take ~60 minutes instead of 260-320. It would probably score PA-05 3.0-3.5/4 because the CSS patterns that WORK are already in the template.

The reason we are NOT doing this is that it does not SCALE. A template adaptation is not a PIPELINE. But the question the team should ask is: does the pipeline produce BETTER results than template adaptation? If not, the pipeline is complexity for its own sake.

**Recommendation:** Build one page with the pipeline. Build one page with template adaptation. Compare. Let the results decide.

---

*"CD-006 IS NOT Flagship 4/4. But neither is this pipeline -- not yet. The pipeline is a hypothesis. Build the page and find out."*
