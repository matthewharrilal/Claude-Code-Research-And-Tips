# EXTRACTION: Diagrams 4-5 from VISUAL-ARCHITECTURE.md

**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
**Diagrams:** 4 (lines 362-433), 5 (lines 437-476)
**Extractor:** Agent extractor-d04-d05
**Method:** Zero-loss line-by-line extraction

---

## DIAGRAM 4: INFORMATION FLOW (Dual-Channel + Direct Files)

### ITEM 1
- **Diagram:** 4
- **Line range:** 362
- **Type:** DECISION
- **Exact text:** "INFORMATION FLOW (Dual-Channel + Direct Files)"
- **Actionable implication:** The pipeline architecture uses exactly two channels plus two direct-file routes, not a single monolithic channel or arbitrary number of paths.

### ITEM 2
- **Diagram:** 4
- **Line range:** 368
- **Type:** DECISION
- **Exact text:** "Two channels + two direct-file routes + one feedback loop"
- **Actionable implication:** The pipeline must implement exactly 5 information pathways: 2 channels, 2 direct-file routes, and 1 feedback loop.

### ITEM 3
- **Diagram:** 4
- **Line range:** 372-374
- **Type:** FILE_REF
- **Exact text:** "RESEARCH ARCHIVE (337 findings) ~45,000 lines"
- **Actionable implication:** The research archive (337 findings, ~45,000 lines) is an input source but must NOT be passed directly to builders — it feeds only into the template.

### ITEM 4
- **Diagram:** 4
- **Line range:** 372-374
- **Type:** FILE_REF
- **Exact text:** "DESIGN SYSTEM (6-layer) ~3,500 lines"
- **Actionable implication:** The 6-layer design system (~3,500 lines) is an input source that feeds into the template, not passed directly to builders.

### ITEM 5
- **Diagram:** 4
- **Line range:** 372-374
- **Type:** FILE_REF
- **Exact text:** "CONTENT SOURCE (markdown) varies"
- **Actionable implication:** Content source is variable-length markdown; it follows a separate channel (Channel 2) from the universal template (Channel 1).

### ITEM 6
- **Diagram:** 4
- **Line range:** 381-385
- **Type:** DECISION
- **Exact text:** "73-LINE TEMPLATE (pre-compressed) Created ONCE from research + design system. NOT per-build. Compression: ∞:1 (already done)"
- **Actionable implication:** The 73-line template is a ONE-TIME artifact created from the research archive + design system; it must NOT be regenerated per-build. The compression has already been performed.

### ITEM 7
- **Diagram:** 4
- **Line range:** 384
- **Type:** VALUE
- **Exact text:** "Compression: ∞:1 (already done)"
- **Actionable implication:** The template's compression ratio is treated as infinite-to-one because the compression happened at template creation time, not at build time. No further compression of this channel occurs during builds.

### ITEM 8
- **Diagram:** 4
- **Line range:** 388-391
- **Type:** DECISION
- **Exact text:** "CHANNEL 1 UNIVERSAL (lossless, 1:1)"
- **Actionable implication:** Channel 1 carries the universal template to the brief assembler at a 1:1 ratio — zero compression, zero loss during the build pipeline.

### ITEM 9
- **Diagram:** 4
- **Line range:** 388-391
- **Type:** DECISION
- **Exact text:** "CHANNEL 2 CONTENT (regenerated ~10:1)"
- **Actionable implication:** Channel 2 carries content-specific information with ~10:1 compression (regenerated per-build from the content source), meaning content analysis produces roughly 1/10th the volume of the original source.

### ITEM 10
- **Diagram:** 4
- **Line range:** 395
- **Type:** AGENT_ROLE
- **Exact text:** "BRIEF ASSEMBLER (Agent 2)"
- **Actionable implication:** Agent 2 is the Brief Assembler — it receives the template (Channel 1) and the content map (Channel 2) and merges them into the Activation Brief.

### ITEM 11
- **Diagram:** 4
- **Line range:** 397-400
- **Type:** PROCESS
- **Exact text:** "Template (73 lines) ──→ ACTIVATION BRIEF (~113 lines) Content Map (~35 lines) (from Phase 0)"
- **Actionable implication:** The Brief Assembler merges the 73-line template with a ~35-line content map (produced in Phase 0) to produce an Activation Brief of approximately 113 lines.

### ITEM 12
- **Diagram:** 4
- **Line range:** 398
- **Type:** VALUE
- **Exact text:** "ACTIVATION BRIEF (~113 lines)"
- **Actionable implication:** The activation brief target size is approximately 113 lines — this is the total instruction payload the builder receives via the brief channel.

### ITEM 13
- **Diagram:** 4
- **Line range:** 399-400
- **Type:** VALUE
- **Exact text:** "Content Map (~35 lines) (from Phase 0)"
- **Actionable implication:** The content map is approximately 35 lines and is generated during Phase 0 (content analysis phase), not during brief assembly.

### ITEM 14
- **Diagram:** 4
- **Line range:** 403
- **Type:** PROCESS
- **Exact text:** "1:1 (brief → builder)"
- **Actionable implication:** The activation brief is passed to the builder at 1:1 — no further compression or summarization occurs between brief assembly and builder receipt.

### ITEM 15
- **Diagram:** 4
- **Line range:** 407
- **Type:** AGENT_ROLE
- **Exact text:** "BUILDER (Agent 3)"
- **Actionable implication:** Agent 3 is the Builder — it receives exactly 4 inputs (activation brief, content source, tokens.css, components.css).

### ITEM 16
- **Diagram:** 4
- **Line range:** 410-417
- **Type:** DECISION
- **Exact text:** "INPUTS: Activation Brief ~113 lines Channel 1+2 merged | Content Source (original) Channel 2 direct | tokens.css 183 lines DIRECT FILE | components.css 290 lines DIRECT FILE"
- **Actionable implication:** The builder receives exactly 4 inputs: (1) Activation Brief (~113 lines, merged from Channels 1+2), (2) Content Source (original markdown, direct from Channel 2), (3) tokens.css (183 lines, direct file), (4) components.css (290 lines, direct file).

### ITEM 17
- **Diagram:** 4
- **Line range:** 413
- **Type:** VALUE
- **Exact text:** "~113 lines"
- **Actionable implication:** The activation brief size target is ~113 lines — builder input from the brief channel must not substantially exceed this.

### ITEM 18
- **Diagram:** 4
- **Line range:** 413
- **Type:** VALUE
- **Exact text:** "183 lines"
- **Actionable implication:** tokens.css is 183 lines and is passed directly to the builder as a file reference (not compressed or excerpted).

### ITEM 19
- **Diagram:** 4
- **Line range:** 413
- **Type:** VALUE
- **Exact text:** "290 lines"
- **Actionable implication:** components.css is 290 lines and is passed directly to the builder as a file reference (not compressed or excerpted).

### ITEM 20
- **Diagram:** 4
- **Line range:** 415-416
- **Type:** DECISION
- **Exact text:** "DIRECT FILE"
- **Actionable implication:** tokens.css and components.css are passed as DIRECT FILE references — they bypass both channels and go straight to the builder without any intermediary processing.

### ITEM 21
- **Diagram:** 4
- **Line range:** 419-421
- **Type:** WARNING
- **Exact text:** "DOES NOT RECEIVE: ✗ Research archive ✗ Gate thresholds ✗ Fix instructions ✗ 55 prohibitions ✗ Count-gates ✗ Process metadata"
- **Actionable implication:** The builder must NEVER receive: research archive, gate thresholds, fix instructions, 55 prohibitions, count-gates, or process metadata. These are explicitly excluded from builder input.

### ITEM 22
- **Diagram:** 4
- **Line range:** 420
- **Type:** WARNING
- **Exact text:** "✗ Research archive"
- **Actionable implication:** The research archive (337 findings, ~45,000 lines) must not reach the builder — it was compressed into the 73-line template at creation time.

### ITEM 23
- **Diagram:** 4
- **Line range:** 420
- **Type:** WARNING
- **Exact text:** "✗ Gate thresholds"
- **Actionable implication:** Gate thresholds must not be included in builder input — they belong to the gate runner, not the builder.

### ITEM 24
- **Diagram:** 4
- **Line range:** 420
- **Type:** WARNING
- **Exact text:** "✗ Fix instructions"
- **Actionable implication:** Fix instructions must not be included in builder input — they are a repair-mode artifact and would activate suppressor behavior.

### ITEM 25
- **Diagram:** 4
- **Line range:** 421
- **Type:** WARNING
- **Exact text:** "✗ 55 prohibitions"
- **Actionable implication:** The 55 prohibitions must not be sent to the builder — they belong to the identity layer and gate runner, not the creative builder.

### ITEM 26
- **Diagram:** 4
- **Line range:** 421
- **Type:** WARNING
- **Exact text:** "✗ Count-gates"
- **Actionable implication:** Count-gates (e.g., ">=3 channels") must not reach the builder — these are verification artifacts for the gate runner.

### ITEM 27
- **Diagram:** 4
- **Line range:** 421
- **Type:** WARNING
- **Exact text:** "✗ Process metadata"
- **Actionable implication:** Process metadata must not be included in builder input — it is orchestration overhead that does not contribute to creative output.

### ITEM 28
- **Diagram:** 4
- **Line range:** 424-432
- **Type:** DECISION
- **Exact text:** "COMPRESSION RATIOS (Research → Builder): OLD PIPELINE: 45,000 → 6,300 → 578 → 99 → builder = 50:1 cascading = 99.6% Tier 3 loss NEW PIPELINE: 45,000 → 73 (done ONCE) + content (regenerated) = 1:1 universal + ~10:1 content-specific = near-zero cascading loss"
- **Actionable implication:** The new pipeline eliminates cascading compression loss. Old pipeline had 50:1 cascading compression with 99.6% information loss; new pipeline achieves 1:1 on universal channel and ~10:1 on content-specific channel with near-zero cascading loss.

### ITEM 29
- **Diagram:** 4
- **Line range:** 426-427
- **Type:** VALUE
- **Exact text:** "OLD PIPELINE: 45,000 → 6,300 → 578 → 99 → builder = 50:1 cascading = 99.6% Tier 3 loss"
- **Actionable implication:** The old pipeline's 4-stage cascading compression (45,000 → 6,300 → 578 → 99) is the anti-pattern to avoid. Each stage lost information, totaling 99.6% loss. The new pipeline must not reproduce this cascade.

### ITEM 30
- **Diagram:** 4
- **Line range:** 429-431
- **Type:** VALUE
- **Exact text:** "NEW PIPELINE: 45,000 → 73 (done ONCE) + content (regenerated) = 1:1 universal + ~10:1 content-specific = near-zero cascading loss"
- **Actionable implication:** The new pipeline's compression model: universal knowledge compressed once to 73 lines (template creation, not per-build), content compressed ~10:1 per-build, yielding near-zero cascading loss.

---

## DIAGRAM 5: SUPPRESSOR REMOVAL CURVE

### ITEM 31
- **Diagram:** 5
- **Line range:** 437
- **Type:** DECISION
- **Exact text:** "SUPPRESSOR REMOVAL CURVE"
- **Actionable implication:** Quality (PA-05 score) is modeled as a function of active suppressor count — removing suppressors increases quality along a predictable curve with three inflection points.

### ITEM 32
- **Diagram:** 5
- **Line range:** 443
- **Type:** THRESHOLD
- **Exact text:** "4.0 ★ FLAGSHIP TARGET"
- **Actionable implication:** PA-05 score of 4.0 is the Flagship target — this is the quality ceiling the pipeline aims for with all suppressors removed plus disposition and value tables.

### ITEM 33
- **Diagram:** 5
- **Line range:** 445-446
- **Type:** DECISION
- **Exact text:** "73 lines + disposition + value tables"
- **Actionable implication:** Achieving Flagship (PA-05 4.0) requires the 73-line template PLUS dispositional instructions (D-01 through D-08) PLUS value tables — all three components are necessary.

### ITEM 34
- **Diagram:** 5
- **Line range:** 447-448
- **Type:** VALUE
- **Exact text:** "3.5 Gas Town (old pipeline, Opus builder, 610 lines)"
- **Actionable implication:** Gas Town achieved PA-05 3.5 using the OLD pipeline with an Opus builder and a 610-line prompt — this is the empirical data point for the old pipeline's ceiling when well-executed.

### ITEM 35
- **Diagram:** 5
- **Line range:** 451-452
- **Type:** VALUE
- **Exact text:** "3.0 Suppressors removed + soul + thresholds only"
- **Actionable implication:** PA-05 3.0 is predicted when suppressors are removed and only soul constraints + thresholds remain — this is the "suppressors removed" baseline without disposition or value tables.

### ITEM 36
- **Diagram:** 5
- **Line range:** 455-456
- **Type:** VALUE
- **Exact text:** "2.5 Middle (old pipeline, recipe format, 100 lines)"
- **Actionable implication:** PA-05 2.5 is the empirical Middle tier score, achieved with the old pipeline in recipe format (~100 lines). This is the proven floor for recipe-format prompts.

### ITEM 37
- **Diagram:** 5
- **Line range:** 459-460
- **Type:** VALUE
- **Exact text:** "2.0 Current spec baseline (20 suppressors active)"
- **Actionable implication:** PA-05 2.0 is the baseline with current spec and all 20 suppressors active — this is the starting point for quality improvement via suppressor removal.

### ITEM 38
- **Diagram:** 5
- **Line range:** 462-463
- **Type:** VALUE
- **Exact text:** "1.5 Flagship experiment (all 14 original suppressors)"
- **Actionable implication:** PA-05 1.5 is the empirical Flagship experiment score with all 14 original suppressors active — this is the worst-case data point and proves suppressors actively degrade quality.

### ITEM 39
- **Diagram:** 5
- **Line range:** 465-466
- **Type:** THRESHOLD
- **Exact text:** "Suppressors remaining: 20 16 12 8 4 0"
- **Actionable implication:** The x-axis ranges from 20 suppressors (worst) to 0 suppressors (best), with quality monotonically increasing as suppressors are removed.

### ITEM 40
- **Diagram:** 5
- **Line range:** 470-475
- **Type:** PROCESS
- **Exact text:** "INFLECTION 1: Recipe Switch (+0.5-1.0) Remove S-01 checklist→recipe"
- **Actionable implication:** Inflection 1 occurs when S-01 (checklist format) is removed and replaced with recipe format, yielding +0.5 to +1.0 PA-05 improvement. This is the highest-leverage single suppressor removal.

### ITEM 41
- **Diagram:** 5
- **Line range:** 470-475
- **Type:** PROCESS
- **Exact text:** "INFLECTION 2: Perception Floor (+0.5) Remove S-08 fix routing S-03,S-09,S-13"
- **Actionable implication:** Inflection 2 occurs when S-08 (perception routing), S-03, S-09, and S-13 are removed, yielding +0.5 PA-05 improvement. These suppressors relate to perception floor and routing.

### ITEM 42
- **Diagram:** 5
- **Line range:** 470-475
- **Type:** PROCESS
- **Exact text:** "INFLECTION 3: Architecture Collapse (+0.3-0.5) Remove remaining 8 suppressors"
- **Actionable implication:** Inflection 3 occurs when the remaining 8 suppressors are removed, yielding +0.3 to +0.5 PA-05 improvement. Diminishing returns per suppressor but still meaningful in aggregate.

### ITEM 43
- **Diagram:** 5
- **Line range:** 473
- **Type:** RECOMMENDATION
- **Exact text:** "Remove S-01 checklist→recipe"
- **Actionable implication:** S-01 removal (switching from checklist to recipe format) should be prioritized as the FIRST suppressor removal because it has the highest individual impact (+0.5-1.0).

### ITEM 44
- **Diagram:** 5
- **Line range:** 475
- **Type:** RECOMMENDATION
- **Exact text:** "Remove S-08 fix routing S-03,S-09,S-13"
- **Actionable implication:** After S-01, the next priority suppressor removals are S-08 (fix routing), S-03, S-09, and S-13 — these form Inflection 2 (perception floor).

### ITEM 45
- **Diagram:** 5
- **Line range:** 470-472
- **Type:** VALUE
- **Exact text:** "INFLECTION 1 (+0.5-1.0) INFLECTION 2 (+0.5) INFLECTION 3 (+0.3-0.5)"
- **Actionable implication:** Total predicted quality gain from all three inflections: +1.3 to +2.0 PA-05 points. From baseline 2.0, this reaches 3.3-4.0, which spans from "suppressors removed" to "Flagship target".

### ITEM 46
- **Diagram:** 5
- **Line range:** 447-448
- **Type:** DECISION
- **Exact text:** "Gas Town (old pipeline, Opus builder, 610 lines)"
- **Actionable implication:** Gas Town at PA-05 3.5 used an Opus builder (not Sonnet) and a 610-line prompt — the Opus builder variable is confounded with the prompt format variable. The new pipeline should test whether the 73-line template with Opus achieves comparable or higher quality.

### ITEM 47
- **Diagram:** 5
- **Line range:** 462-463, 455-456
- **Type:** DECISION
- **Exact text:** "1.5 Flagship experiment (all 14 original suppressors)" vs "2.5 Middle (old pipeline, recipe format, 100 lines)"
- **Actionable implication:** The 1.0-point gap between Flagship experiment (1.5) and Middle (2.5) demonstrates that MORE instruction lines with suppressors HURTS quality compared to fewer lines without suppressors. Prompt volume is anti-correlated with quality when suppressors are present.

---

## EXTRACTION SUMMARY

**Total items extracted:** 47
**Diagram 4 items:** 30 (Items 1-30)
**Diagram 5 items:** 17 (Items 31-47)

### Item type breakdown:
- **DECISION:** 12 (Items 1, 2, 6, 8, 9, 20, 28, 31, 33, 46, 47)
- **VALUE:** 13 (Items 7, 12, 13, 17, 18, 19, 29, 30, 34, 35, 36, 37, 38, 45)
- **WARNING:** 7 (Items 21, 22, 23, 24, 25, 26, 27)
- **FILE_REF:** 3 (Items 3, 4, 5)
- **PROCESS:** 5 (Items 11, 14, 40, 41, 42)
- **AGENT_ROLE:** 2 (Items 10, 15)
- **THRESHOLD:** 2 (Items 32, 39)
- **RECOMMENDATION:** 2 (Items 43, 44)

### Key architectural elements extracted:
1. **Dual-channel architecture:** Channel 1 (universal, 1:1 lossless) + Channel 2 (content-specific, ~10:1 regenerated)
2. **Direct file routes:** tokens.css (183 lines) and components.css (290 lines) bypass channels entirely
3. **Builder exclusion list:** 6 categories of information the builder must NEVER receive
4. **Compression model:** Old pipeline 50:1 cascading (99.6% loss) vs new pipeline near-zero cascading
5. **3 inflection points:** S-01 removal (+0.5-1.0), S-08/S-03/S-09/S-13 removal (+0.5), remaining 8 (+0.3-0.5)
6. **5 empirical data points:** 1.5 (Flagship experiment), 2.0 (current baseline), 2.5 (Middle), 3.0 (suppressors removed), 3.5 (Gas Town)
7. **Flagship target:** PA-05 4.0 requires 73-line template + disposition + value tables

### Note on dispositional instructions (D-01 through D-08):
D-01 through D-08 are DEFINED in Diagram 1 (lines 80-87), not in Diagrams 4-5. Diagram 5 references them as part of the Flagship target formula ("73 lines + disposition + value tables") but does not contain their individual definitions. See extract-d01-d03.md for the full D-01 through D-08 definitions.
