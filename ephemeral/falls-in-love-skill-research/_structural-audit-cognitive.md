# Structural Audit: Cognitive Load Management

**Target:** `/Users/spacewizardmoneygang/.claude/skills/falls-in-love/SKILL.md` (1,166 lines)
**Focus:** Redundancy, Compression, and Retention for a single Opus agent working 6-10 hours
**Date:** 2026-03-03

---

## Executive Summary

The skill file is 1,166 lines of dense instruction for a single agent that will work across 8-12 context windows over 6-10 hours. The document's core structural problem is **instructional anxiety** -- the author does not trust the agent to internalize the build-look-refine cycle, so it is re-stated in full at every wave. This creates a document where ~25% of total lines are repetitions of the same core cycle definition. The 5-layer metacognitive evaluation framework is instantiated 9 separate times (once generically, once per wave), consuming ~180 lines. Meanwhile, several execution-critical instructions appear exactly once in easy-to-skip positions.

**Key findings:**
- 9 instances of the "each pass is a full build-look-refine cycle" statement (~180 lines of near-identical text)
- 9 instantiations of the 5-layer metacognitive framework (~270 lines total), each wave-specific but following identical structure
- The diagnostic override protocol is stated in full once, then referenced 5 more times (efficient -- this is a model of how the rest should work)
- 3 critical single-mention instructions that have high probability of being forgotten by hour 6
- 2 competing priority conflicts without explicit resolution
- Estimated compressible lines: 280-350 (24-30% of document)

---

## 1. Redundancy Audit

### R-01: "Each pass is a full build-look-refine cycle" (WASTEFUL REDUNDANCY)

**SEVERITY: HIGH**
**LOCATION:** Lines 160, 280-298, 511, 539, 590, 632, 736, 755, 785, 813, 850, 876, 1140
**FINDING:** The document states that each pass is a full build-look-refine cycle **13 separate times**. Nine of these are near-identical declarations at the start of each wave section, each restating the same 6-step cycle (read -> build -> look -> evaluate -> refine -> decide). The phrasing varies slightly but the information content is identical.

The pattern: Wave N opens with "**Each pass is a full cycle:** Read [wave-specific input] -> build CSS changes -> screenshot and scroll -> evaluate -> refine -> decide what next." Several also include the defensive clause "Not [misconception]. Build-look-refine at every pass."

**CLASSIFICATION:** WASTEFUL. The cycle is defined comprehensively at lines 280-298 ("What '10+ Passes Per Slice' Actually Means"), with the explicit statement at line 299: "**This definition is non-negotiable and applies to every wave.**" This is the right approach. Every subsequent restatement undermines the authority of that non-negotiable declaration by implying the agent might forget.

**REMEDIATION:** Keep the authoritative definition at lines 280-299. In each wave section, replace the restatement with a 1-line reference: "**Cycle applies. See 'What 10+ Passes Per Slice Actually Means.'**" This saves approximately 60-80 lines across all wave sections.

**Exception:** The Wave 5 and Wave 6 cycle statements add genuinely new information (Wave 5: the shift from additive to subtractive; Wave 6: no new research changes the reading step). These should be preserved as MODIFICATIONS to the core cycle, not restatements of it.

---

### R-02: The 5-Layer Metacognitive Framework (MIXED -- PARTIALLY BENEFICIAL, PARTIALLY WASTEFUL)

**SEVERITY: MEDIUM**
**LOCATION:** Lines 100-118 (generic), 513-518 (Wave 0), 541-546 (Wave 1), 598-603 (Wave 2), 724-729 (Wave 3), 761-766 (Wave 4), 791-796 (Wave 5), 830-835 (Wave 6), 859-864 (Wave 7), 884-889 (Wave 8)
**FINDING:** The 5-layer framework (Seeing / Why now / Not seeing / How to know / Evaluation evolving) is defined generically at lines 100-118 (~18 lines), then instantiated at wave-specific depth for every single wave (~30 lines each, ~270 lines total). That is 288 lines -- nearly 25% of the document -- devoted to variations on the same framework.

**CLASSIFICATION:** MIXED.
- The GENERIC definition (lines 100-118) = BENEFICIAL. Critical framework.
- Wave 0, Wave 2, and Wave 6 instantiations = BENEFICIAL. These are qualitatively different from each other and demonstrate genuine deepening. Wave 0 asks "does the page have a spatial idea?" Wave 6 asks "can I still see the page fresh after 70+ passes?" These are not the same question.
- Waves 1, 4, 5, 7, 8 instantiations = WASTEFUL to MODERATE. They follow the same L1-L5 template but with less distinctive content. Wave 4's L3 ("habituation is DEEP") is nearly identical to Wave 5's L3 ("deeply habituated") and Wave 6's L3 ("habituation is DEEP" again). Wave 7's and Wave 8's instantiations are increasingly repetitive -- by this point the pattern of "after N+ passes, habituation is the enemy" has been stated many times.

**REMEDIATION:** Keep generic definition + Waves 0, 2, 3, 6 instantiations (the distinctive ones). For Waves 1, 4, 5, 7, 8, compress to a "delta from previous wave" format: "**Layer evolution:** L1 shifts from [previous] to [new]. L3 deepens: [specific new blindspot]." This preserves wave-specific nuance in ~5-8 lines instead of ~30 lines per wave. Estimated savings: ~120-150 lines.

---

### R-03: Pass-Level Deepening Phases (WASTEFUL REDUNDANCY)

**SEVERITY: MEDIUM**
**LOCATION:** Lines 520-523 (Wave 0), 548-551 (Wave 1), 619-623 (Wave 2), 768-771 (Wave 4), 798-801 (Wave 5), 837-842 (Wave 6), 866-870 (Wave 7), 891-894 (Wave 8)
**FINDING:** Every wave section includes a "Pass-level deepening" block that divides the wave's passes into 2-4 phases, each with a parenthetical evaluation question. The structure is identical: "Passes X-Y: Evaluation asks '[question]' ([parenthetical label])". Eight instances totaling ~50 lines.

The phases themselves follow a predictable pattern: early = structural/comprehension, middle = relational/diagnostic, late = depth/coupling. This is the same progression repeated with wave-specific vocabulary.

**CLASSIFICATION:** WASTEFUL for Waves 0, 1, 4, 5. The early waves' pass-level deepening is generic enough to be derived from the 4-Phase Evaluation Progression (lines 951-962), which already describes STRUCTURAL -> RELATIONAL -> COUPLING -> POTENTIAL. Waves 2, 3, 6, 7, 8 have more distinctive content that justifies inclusion.

**REMEDIATION:** Define the pass-level deepening pattern once (it is essentially the 4-Phase Evaluation Progression applied within a wave). For waves where the pattern is standard, reference it. For waves where it is distinctive (2, 3, 6, 7, 8), keep the wave-specific version. Estimated savings: ~20 lines.

---

### R-04: Habituation Warning (WASTEFUL REDUNDANCY)

**SEVERITY: MEDIUM**
**LOCATION:** Lines 111, 174, 214, 764, 794, 832-833, 862, 1080
**FINDING:** The concept "the agent habituates to its own decisions and stops seeing problems" is stated **8 times** across the document. Some of these are substantively different (line 174 introduces the swimmer metaphor; line 214 introduces "habituation blindness" as a false convergence signal), but at least 4 are near-identical restatements with the only variation being the pass count ("after 20 passes" / "after 40+ passes" / "after 60+ passes" / "after 70+ passes").

**CLASSIFICATION:** WASTEFUL at the volume presented. The concept is critical and deserves emphasis, but 8 restatements create the very habituation the document warns against -- the agent stops reading these warnings because it has seen them so many times.

**REMEDIATION:** Consolidate into 3 instances: (1) the definitional statement at lines 170-174 (staleness is gravity), (2) one wave-specific example showing how habituation manifests differently at different depths, (3) the false convergence signal at line 214. Remove the other 5 instances or compress to a clause-level reference ("habituation at this depth is [specific new symptom]"). Estimated savings: ~15-20 lines.

---

### R-05: Diagnostic Override Protocol (BENEFICIAL REDUNDANCY -- MODEL FOR OTHERS)

**SEVERITY: LOW (positive finding)**
**LOCATION:** Lines 425-430 (full definition), 535, 573-579, 714, 757, 787 (references)
**FINDING:** The diagnostic override protocol is defined once in full at lines 425-430, then subsequent wave sections say "See the universal protocol in the Primacy Rotation section." This is the CORRECT pattern. Wave 2 (lines 573-579) restates it in full, which is the one exception -- this is the first wave that uses it, so a full restatement serves as reinforcement.

**CLASSIFICATION:** BENEFICIAL. This is the model the rest of the document should follow: define once authoritatively, reference subsequently, restate only at first use.

**REMEDIATION:** None needed. Consider applying this pattern to R-01 and R-02.

---

### R-06: Per-File Phase Tracking (WASTEFUL REDUNDANCY)

**SEVERITY: LOW**
**LOCATION:** Lines 415-419, 625-630, 718
**FINDING:** The concept "each file has its own depth progression independent of the wave's global phase, and the file's personal phase takes precedence" is stated 3 times. Lines 415-419 define it. Lines 625-630 restate it nearly verbatim with an added example. Line 718 restates it for Wave 3 with slightly different phase names (EXTRACTION/TRANSLATION/CONTENT-DEEPENING instead of STRUCTURAL/INTEGRATION/DEPTH).

**CLASSIFICATION:** WASTEFUL at 3 instances. The second instance (625-630) adds a useful example but repeats the entire principle. The third (718) is wave-specific nomenclature that could be a simple table row.

**REMEDIATION:** Keep lines 415-419 as the authoritative definition. Add the example from 625-630 there. At 718, compress to: "Per-file phase tracking applies (see Primacy Rotation). Wave 3 labels: 1st read = EXTRACTION, 2nd = TRANSLATION, 3rd = CONTENT-DEEPENING." Estimated savings: ~12 lines.

---

### R-07: "10+ passes per slice" Clarification (WASTEFUL REDUNDANCY)

**SEVERITY: MEDIUM**
**LOCATION:** Lines 278-299 (definition), 632-636, 720
**FINDING:** The authoritative definition of "10+ passes per slice" is at lines 278-299 and is excellent. But lines 632-636 restate it for Wave 2 with extensive clarification ("does NOT mean '2-3 primacy turns plus keeping the dimension in mind'"), and line 720 restates it again for Wave 3. Both restatements add clarifying detail, but they collectively consume ~30 lines to say what the original definition already said: the cycle count is the requirement, rotation is a mechanism within it.

**CLASSIFICATION:** WASTEFUL. The line 299 statement is definitive: "This definition is non-negotiable and applies to every wave." The subsequent restatements implicitly contradict this by acting as if the agent might have forgotten.

**REMEDIATION:** Keep lines 278-299. Move the best clarifying sentence from 632-636 ("Every pass is a full cycle for EVERY active dimension, not just the primacy file") into the authoritative definition. Delete restatements in wave sections. Estimated savings: ~25 lines.

---

### R-08: Design System Soul Constraints (BENEFICIAL REDUNDANCY)

**SEVERITY: LOW (positive finding)**
**LOCATION:** Lines 531, 1037-1052
**FINDING:** Soul constraints appear twice: summarized in Wave 1's description (line 531) and in full in the Design System Physics section (lines 1037-1052). The Wave 1 summary is appropriately brief and contextual. The Design System Physics section is the reference.

**CLASSIFICATION:** BENEFICIAL. The Wave 1 context provides the constraints at the moment they are actionable. The reference section provides the canonical list. Two appropriate locations.

**REMEDIATION:** None needed.

---

### R-09: The Swap Test Definition (WASTEFUL REDUNDANCY)

**SEVERITY: LOW**
**LOCATION:** Lines 114, 186, 211, 327, 339, 423, 716, 722, 728, 740, 816, 935, 1064
**FINDING:** The swap test is mentioned 13 times across the document. It is defined at line 339 ("Take any spatial decision and mentally transplant it to different content. If it survives, it is GENERIC. If it breaks, it is CONTENT-DERIVED."). Most subsequent mentions are appropriate contextual references (e.g., "apply the swap test to 2-3 sections per wave"). However, some re-explain what the swap test IS rather than just invoking it.

**CLASSIFICATION:** Mostly BENEFICIAL. The swap test is a tool that benefits from frequent invocation. The definition at line 339 is sufficient; subsequent uses mostly just invoke it. Lines 186, 716, and 728 briefly re-explain it, which is mildly wasteful but not dangerous.

**REMEDIATION:** Minor. Ensure all post-definition references just invoke "the swap test" without re-explaining it. Estimated savings: ~5 lines.

---

## 2. Compression Opportunities

### C-01: Wave-Specific 5-Layer Instantiations

**Current:** ~270 lines (9 wave-specific instantiations, ~30 lines each)
**Proposed:** ~110 lines (keep 4 distinctive instantiations: Wave 0, 2, 3, 6; compress 5 to delta format)
**Savings:** ~160 lines
**What is lost:** The explicit per-wave L1-L5 questions for Waves 1, 4, 5, 7, 8.
**Does it matter:** Somewhat. The per-wave questions provide wave-specific grounding. But by Waves 4-8, the agent has been working for hours and has internalized the framework. The delta format ("L1 shifts from X to Y, L3 gains this new blindspot") preserves the wave-specific content in less space.

### C-02: "Each pass is a full cycle" Restatements

**Current:** ~80 lines across 9 wave sections
**Proposed:** ~18 lines (1-line reference per wave + 2 modification notes for Waves 5 and 6)
**Savings:** ~62 lines
**What is lost:** The explicit per-wave cycle description.
**Does it matter:** No. The authoritative definition at lines 280-298 is comprehensive. The restatements add no new information except Wave 5 (additive->subtractive shift) and Wave 6 (no research input). These two can be preserved as 2-line modifications.

### C-03: The Cognitive State Section (Lines 59-93)

**Current:** 35 lines
**Proposed:** 35 lines (no compression)
**What would be lost:** Core framing.
**Does it matter:** This section is dense and unique. Every line carries weight. No compression possible without losing execution-critical framing.

### C-04: The "Endless Cycle" Diagram + Reciprocal Relationship (Lines 252-316)

**Current:** 65 lines
**Proposed:** 45 lines (merge the cycle definition with the reciprocal relationship section; remove the ASCII diagram which restates what the text says)
**Savings:** ~20 lines
**What is lost:** The ASCII art diagram (lines 254-274) and some of the reciprocal relationship prose that restates the cycle definition.
**Does it matter:** The ASCII diagram is 20 lines that restate 3 words: "absorb, build, refine." The reciprocal relationship section (lines 301-316) restates what lines 280-298 already said more precisely. The five content re-reading examples (lines 311-316) are genuinely useful and should be preserved.

### C-05: Wave 2 Dimension-Specific Metacognitive Questions (Lines 605-618)

**Current:** 14 lines
**Proposed:** 14 lines (no compression)
**What would be lost:** Dimension-specific evaluation prompts.
**Does it matter:** These are execution-critical. They tell the agent HOW to absorb R3, R4, R5 differently. Dense and unique. Keep.

### C-06: Wave 3 Section (Lines 642-744)

**Current:** 103 lines
**Proposed:** 75 lines (compress tier selection guide, reduce cycle evolution section which duplicates Wave 2's)
**Savings:** ~28 lines
**What is lost:** Some of the cycle evolution description for Wave 3 (lines 738-743), which is nearly identical to Wave 2's (lines 592-596) with "case study" substituted for "research file."
**Does it matter:** Minimally. The wave-specific phase names (EXTRACTION/TRANSLATION/CONTENT-DEEPENING/COMPOUND VISION/INTERNALIZATION) are useful. The cycle step descriptions are redundant with Wave 2.

### C-07: Wave 6 Section (Lines 805-844)

**Current:** 40 lines for the wave structure + 40 lines for 5-layer + 8 lines for pass-level = 88 lines total (including the sub-pass breakdowns at lines 815-828)
**Proposed:** 70 lines
**Savings:** ~18 lines
**What is lost:** Some redundant habituation language in L2 and L3.
**Does it matter:** Minimally. "Habituation is DEEP" appears in Wave 4 L3, Wave 5 L3, Wave 6 L2 and L3. By Wave 6, the agent either understands this or will not.

### C-08: Retrospectives Section (Lines 898-921)

**Current:** 24 lines
**Proposed:** 24 lines (no compression)
**What would be lost:** Wave-specific retrospective questions.
**Does it matter:** Dense and unique. Each wave's retrospective question is qualitatively different. Keep.

### C-09: The Introductory Section (Lines 7-22)

**Current:** 16 lines
**Proposed:** 10 lines
**Savings:** ~6 lines
**What is lost:** The extended poetic description of the build cycle at lines 15-17.
**Does it matter:** This section establishes cognitive frame. The extended description ("Builds again. Deeper this time. Looks again. Finds something it missed.") is evocative but line 17 ("Building. Reiterating. Refining. Re-enriching. Building. Reiterating. Refining. Re-enriching.") is pure repetition of line 15. Compressible without frame loss.

### Total Compression Estimate

| Source | Savings |
|--------|---------|
| C-01: 5-Layer instantiations | ~160 lines |
| C-02: Cycle restatements | ~62 lines |
| C-04: Endless cycle section | ~20 lines |
| C-06: Wave 3 cycle duplication | ~28 lines |
| C-07: Wave 6 habituation duplication | ~18 lines |
| R-04: Habituation warnings | ~18 lines |
| R-06: Per-file phase tracking | ~12 lines |
| R-07: 10+ passes restatements | ~25 lines |
| C-09: Intro repetition | ~6 lines |
| **Total** | **~349 lines** |

**Compressed document: ~817 lines (30% reduction).** All execution-critical information preserved. Cognitive load significantly reduced.

---

## 3. Under-Stated Critical Instructions (Single-Mention High-Risk)

### U-01: Early Exit Criterion

**SEVERITY: CRITICAL**
**LOCATION:** Line 55
**FINDING:** The early exit criterion -- "If the agent completes Wave 0 and the loss-detection table shows the content loses NOTHING in a single column" -- appears exactly ONCE, buried in the Invocation section. This is a critical branching point that determines whether the agent spends $150-300 or stops early. It is never referenced again in Wave 0's description (lines 503-524), where it should be most prominent.

**RISK:** The agent reads the Invocation section once, begins Wave 0, and never revisits the Invocation section. At the end of Wave 0, the agent does not check for the early exit condition because it is not mentioned in Wave 0's section.

**REMEDIATION:** Add a reference at the end of Wave 0 (after line 523): "**Early exit check:** If the loss-detection table shows the content loses NOTHING in a single column, see the Early Exit protocol in the Invocation section before proceeding to Wave 1."

---

### U-02: Context Window Transition Trigger

**SEVERITY: CRITICAL**
**LOCATION:** Lines 1120-1122
**FINDING:** The instruction "When the agent detects it is approaching context limits (or receives a context compression event), it performs these steps BEFORE the window closes" appears exactly once. There is NO instruction telling the agent HOW to detect context limits. The skill assumes the agent knows it is approaching the window boundary, but provides no heuristic (e.g., "after ~15-20 passes in a single window" or "when the context window is >80% full").

Furthermore, this protocol is at line 1120 -- near the bottom of a 1,166-line document. By the time the agent actually needs this protocol (mid-build, hours in), it is the LEAST likely section to be retained in active memory.

**RISK:** The agent hits the context boundary without performing the transition protocol, losing reasoning state. This is the single highest-impact failure mode for the entire skill, because it can destroy hours of accumulated context.

**REMEDIATION:** (1) Add a concrete detection heuristic: "After every 15 passes, check whether you are approaching context limits. If uncertain, perform the transition protocol proactively -- the cost of an unnecessary transition note is trivial compared to the cost of losing state." (2) Move the context window transition protocol to a more prominent position, or add a reference to it in each wave section's exhaustion signal: "If context limits approach before exhaustion, perform the Context Window Transition Protocol."

---

### U-03: Notebook Pruning Rule

**SEVERITY: HIGH**
**LOCATION:** Lines 1095-1097
**FINDING:** The notebook management rule ("If the notebook exceeds ~200 lines, prune older per-pass entries, keeping only the wave summaries") appears once, buried in the Context Window Management section. The notebook is mentioned throughout the document as a critical thinking tool, but the pruning instruction is easily missed.

Without this instruction, the notebook grows unbounded across waves, consuming context window space that should go to the HTML and research files. By Wave 4 (after 40+ passes, each with a notebook entry), the notebook could easily exceed 500 lines.

**RISK:** Bloated notebook competes with the HTML file and research files for context window space, degrading the agent's ability to hold the full page and current research in active memory.

**REMEDIATION:** Add a notebook management reminder to the Minimum Engagement Per Wave table (lines 488-500): "Notebook pruning: prune to wave summaries if exceeding 200 lines."

---

### U-04: "Deepening Test Journal" Never-Prune Rule

**SEVERITY: HIGH**
**LOCATION:** Lines 1096-1097
**FINDING:** The instruction "The one-sentence 'definition of good' written at the start and end of each wave is a PERMANENT notebook entry. Never prune these." appears once and is critical for the metacognitive evolution tracking that the document considers the skill's "operating system." If the agent prunes these entries, it loses the ability to track its own evolution -- which is the primary mechanism for detecting staleness.

**RISK:** Agent prunes the deepening test entries during notebook management, destroying the metacognitive evidence trail.

**REMEDIATION:** Cross-reference this rule in the Definition Journal section (line 133): "These entries are PERMANENT -- see Context Window Management for the never-prune rule."

---

### U-05: Screenshot File Size Verification

**SEVERITY: MEDIUM**
**LOCATION:** Line 989
**FINDING:** "Verify file sizes: real content = 30k-200k+. Blank = ~5-6k. If blank, restart server and retry." This critical diagnostic instruction appears once, in the Screenshot Protocol section. Based on prior project experience (the persistent DPR 0.667 screenshot issue), blank screenshots are a common failure mode.

**RISK:** Agent takes blank screenshots without verifying, makes evaluation decisions based on empty images, produces cascading evaluation errors.

**REMEDIATION:** Already in the right location. Consider bolding: "**Verify file sizes: real content = 30k-200k+. Blank = ~5-6k.**"

---

### U-06: Disable Scroll Animations Before Screenshotting

**SEVERITY: MEDIUM**
**LOCATION:** Lines 978-981
**FINDING:** The animation-disable injection is embedded in a code block within the screenshot protocol. It is easy to skip because it looks like boilerplate server-start code. If the page uses scroll-triggered animations (which this skill's output likely will, given the emphasis on transitions and temporal density), skipping this step produces blank white screenshots.

**RISK:** Agent builds scroll-triggered animations as part of the "Interaction as Experience" pass archetype (line 465), then takes screenshots without disabling them, gets blank results.

**REMEDIATION:** Add a callout before the code block: "**CRITICAL: Always disable animations before screenshotting. Pages with scroll-triggered animations will render as blank white without this step.**"

---

### U-07: Wave 3 Has No AD Case Studies

**SEVERITY: MEDIUM**
**LOCATION:** Lines 646-647
**FINDING:** The note "No dedicated Axis Dimension case studies exist in the corpus" appears once, followed by the AD derivation protocol (lines 688-694). This is important because the agent will expect AD case studies based on the DD/OD/CD pattern. If it misses this note, it will search for AD case studies that do not exist, wasting passes.

**RISK:** Agent searches for AD case studies, fails to find them, either wastes time or skips axis work entirely.

**REMEDIATION:** Adequate as stated. The note is prominent within the Wave 3 section. Low risk.

---

## 4. Information Density Heat Map

| Section | Lines | Density | Assessment |
|---------|-------|---------|------------|
| **Title + Description** (1-5) | 5 | DENSE | Every word matters. Trigger phrases, cost, timing. |
| **Introduction** (7-22) | 16 | BALANCED-to-SPARSE | Lines 15-17 are repetitive evocation of the cycle. Lines 9-14 are dense framing. |
| **What This Is NOT** (25-31) | 7 | DENSE | 4 anti-definitions, each unique and critical. |
| **Invocation** (34-56) | 23 | DENSE | Operational steps, early exit criterion. |
| **The Cognitive State** (59-93) | 35 | DENSE | Content-topology formation, semantic saturation thresholds, two questions. Every line unique. |
| **Metacognitive Evaluation** (96-220) | 125 | BALANCED but REPETITIVE in spots | Lines 96-168 are dense and unique (5 layers, deepening test, self-feeding loop). Lines 170-206 (staleness) start dense but become repetitive by wave-specific staleness signatures. Lines 207-220 (false convergence) are dense. |
| **Input/Output** (222-247) | 26 | DENSE | File lists, research corpus sizing. Operational. |
| **The Process** (250-397) | 148 | BALANCED with SPARSE spots | Lines 252-274 (ASCII diagram + prose restating cycle) are SPARSE. Lines 278-298 (10+ passes definition) are DENSE and critical. Lines 317-397 (reading protocol, loss detection, cognitive moves, archetypes) are DENSE -- among the most information-rich in the document. |
| **Primacy Rotation** (399-470) | 72 | DENSE | Transformer attention, rotation mechanics, delta profile, named pass archetypes. High information per line. |
| **Wave Schedule intro** (475-501) | 27 | DENSE | Genuine exhaustion, minimum engagement table. |
| **Wave 0** (503-524) | 22 | DENSE | Compact and effective. |
| **Wave 1** (527-552) | 26 | BALANCED | 5-layer instantiation adds moderate value. |
| **Wave 2** (555-638) | 84 | BALANCED but REPETITIVE | Lines 555-590 are dense (file contributions, rotation). Lines 590-636 become repetitive (cycle restatement, 10+ passes re-explanation, per-file phase re-explanation). |
| **Wave 3** (642-744) | 103 | BALANCED but REPETITIVE | Lines 642-694 are dense (case study reading protocol, dimension-specific questions, AD derivation). Lines 695-743 become repetitive (cycle evolution repeats Wave 2 pattern). |
| **Wave 4** (747-771) | 25 | BALANCED | Compact. 5-layer adds moderate value. |
| **Wave 5** (775-801) | 27 | BALANCED | The additive-to-subtractive shift is genuinely new. |
| **Post-Wave Enrichment intro** (805-807) | 3 | DENSE | |
| **Wave 6** (809-844) | 36 | BALANCED but REPETITIVE | The taste audit / surgical / responsive / architecture / re-evaluation breakdown is valuable. The 5-layer and habituation language are repetitive with previous waves. |
| **Wave 7** (846-870) | 25 | BALANCED | Self-audit protocol is unique. |
| **Wave 8** (872-895) | 24 | BALANCED | Surgery + closure protocol is unique. |
| **Retrospectives** (898-921) | 24 | DENSE | Every wave-specific question is unique. |
| **Looking Protocol** (925-989) | 65 | DENSE | Base protocol, evolution across waves, 4-phase evaluation, screenshot protocol. High value per line. |
| **Measurement** (993-1034) | 42 | DENSE | 10 falsifiable criteria, coupling grades, DOM skeleton count. Reference material. |
| **Design System Physics** (1037-1053) | 17 | DENSE | Non-negotiable constraints. Canonical reference. |
| **Anti-Patterns** (1056-1081) | 26 | DENSE | 11 anti-patterns, each unique. |
| **Context Window Management** (1084-1141) | 58 | DENSE | HTML as compression device, content handoff, transition protocol. Every line critical. |
| **Cost** (1144-1158) | 15 | BALANCED | Comparison table is useful framing. |
| **The Point** (1162-1167) | 6 | SPARSE | Closing statement. Evocative but not operationally critical. |

### Density Distribution Summary

- **DENSE sections:** ~520 lines (45%)
- **BALANCED sections:** ~380 lines (33%)
- **REPETITIVE sections:** ~230 lines (20%)
- **SPARSE sections:** ~36 lines (3%)

The document's problem is not sparseness -- it is that 20% of its bulk is repetition of concepts already established. This is not padding; it is instructional anxiety expressed as repetition.

---

## 5. Retention Probability Assessment

Given a 1,166-line file read at session start, with the agent working across 8-12 context windows over 6-10 hours, the following retention model applies:

### High Retention Probability (>80%)

These are the instructions the agent will likely retain throughout the build, because they are structural (define the workflow), prominent (appear early and repeatedly), or self-reinforcing (the act of building reinforces them).

| Instruction | Why High Retention |
|------------|-------------------|
| The build-look-refine cycle | Stated 13 times. Impossible to miss. Self-reinforcing through practice. |
| 5-layer metacognitive framework | Stated 10 times. Structural. |
| The swap test | 13 mentions. Becomes habit through use. |
| Wave progression (0 through 8) | Structural. The agent lives in this schedule. |
| Design system soul constraints | Referenced during Wave 1, which requires active compliance. |
| Loss detection table | Powerful cognitive tool that, once used, becomes natural. |

### Medium Retention Probability (40-70%)

| Instruction | Why Medium | Risk |
|------------|-----------|------|
| Primacy rotation schedules | Complex, wave-specific. Agent may simplify to "rotate files" without following specific order. | Moderate -- some files get systematically under-attended. |
| The 4-pass neglect threshold | Stated 4 times but requires active tracking. Agent may not track pass-count per file. | Moderate -- a file could go neglected. |
| Named pass archetypes (table, lines 456-469) | Dense table read once. Agent likely remembers 3-4 of 12 archetypes. | Low -- the archetypes are descriptive, not prescriptive. |
| Wave-specific retrospective questions | Read once per wave entry. Agent may default to generic retrospective. | Moderate -- loses wave-specific evolution tracking. |
| The deepening test ("Has my DEFINITION of good deepened?") | Stated at lines 121-133 and referenced in staleness detectors. | Medium -- requires deliberate journal maintenance. |

### Low Retention Probability (<40%) -- HIGHEST RISK

| Instruction | Location | Why Low | Impact if Forgotten |
|------------|----------|---------|-------------------|
| **Context window transition protocol** | Lines 1120-1140 | At bottom of document, read once, needed hours later during a moment of cognitive pressure (approaching context limit). | CRITICAL. Loss of reasoning state. Hours of context destroyed. |
| **Notebook pruning at 200 lines** | Line 1095 | Single mention in a section about context management. Not near the notebook-usage instructions. | HIGH. Bloated notebook consumes context window space. |
| **Never-prune the deepening test journal** | Lines 1096-1097 | Immediately after the pruning instruction. Contradiction creates confusion: prune, but don't prune these specific entries. | HIGH. Agent prunes evolution evidence. |
| **Early exit criterion** | Line 55 | In Invocation section, far from Wave 0 section. | MEDIUM. Agent does full build on linear content. Wastes $150-300. |
| **Findings triage re-evaluation at pass 8** | Line 588 | Single sentence in Wave 2 section: "At pass 8, re-evaluate ALL deferred and skipped findings." | HIGH. The primary research absorption failure mode (premature dismissal) goes uncorrected. |
| **Wave 5 is SUBTRACTIVE, not additive** | Line 779 | Single paragraph in Wave 5 introduction. | HIGH. Agent keeps adding new components instead of understanding existing ones. Wave 5 becomes a second Wave 3. |
| **Dimension permeation** | Lines 421-423 | Dense paragraph in Primacy Rotation section. Distinguishes file-as-text from file-as-dimension. | MEDIUM. Agent stops applying a dimension's thinking when its file is not at primacy. |
| **Screenshot file size verification** | Line 989 | Single sentence at end of code block. | MEDIUM. Agent works from blank screenshots. |
| **Per-section diagnostic question** | Line 341 | Single bold sentence embedded in the "How to Read Content for Spatial Form" section. | MEDIUM. The most powerful ongoing diagnostic tool in the document, stated as a parenthetical. |

### Structural Changes to Increase Retention

1. **Create a "Critical Checkpoints" reference card** at the end of the document (or as a separate `_checkpoints.md` file): a 20-line summary of the highest-risk low-retention instructions. The agent can re-read this card at each context window boundary. Contents:
   - Context transition protocol (what to write before window closes)
   - Notebook pruning rule (200 lines max, never prune deepening journal)
   - Wave 5 = subtractive
   - Findings re-triage at pass 8 of each research wave
   - Per-section diagnostic: "What is the SHAPE of what this section says?"
   - Screenshot verification: 30k+ = real, ~5-6k = blank

2. **Move the context window transition protocol** from line 1120 to immediately after the wave schedule (after line 895, before Retrospectives). The agent encounters context transitions DURING waves, not after reading about cost.

3. **Add a "Wave N Entry Checklist"** to each wave section header (3 lines):
   ```
   [ ] Notebook under 200 lines? Prune if needed.
   [ ] Definition of "good" written?
   [ ] Context transition protocol ready if needed?
   ```

4. **Bold the per-section diagnostic** at line 341 and repeat it once in the Looking Protocol (line 936, where it already appears but without the same emphasis).

---

## 6. Competing Priorities

### CP-01: "No fixed pass counts" vs. Minimum Passes Per Wave

**SEVERITY: MEDIUM**
**LOCATION:** Anti-pattern #4 (line 1066) vs. Minimum Engagement table (lines 488-500) and all wave minimums
**FINDING:** Anti-pattern #4 explicitly rejects fixed pass counts: "'Do 3 passes' kills depth. The skill specifies MINIMUM passes per wave, not maximum." But the minimum pass counts (8, 10, 12, 15 depending on wave) ARE fixed counts that function as process anchors. The Wave 6 minimum of 15 passes is quite high.

**CONFLICT:** The anti-pattern says "The agent stops when genuinely exhausted, not when a counter expires." But the minimum engagement table says "If the agent is consistently hitting minimums and wanting to stop, that is process fatigue, not genuine exhaustion." These two instructions create a bind: the agent cannot stop at its own judgment (that would be premature convergence) but also should not be driven by pass counts (that would be checklist thinking).

**RESOLUTION STATUS:** Partially resolved. The document's intent is clear -- minimums are floors, not ceilings, and genuine exhaustion (defined by the 3-condition test at lines 477-485) overrides pass count. But the anti-pattern language is stronger than it should be given the heavy reliance on minimum pass counts.

**REMEDIATION:** Soften anti-pattern #4 to: "'Do exactly N passes' kills depth. Minimums exist to prevent premature convergence, but the genuine exhaustion test (all 3 conditions) is the real exit criterion, not a pass counter." This resolves the tension explicitly.

---

### CP-02: "Follow the content wherever it leads" vs. Design System Physics

**SEVERITY: LOW**
**LOCATION:** Line 377 ("The list is open-ended -- follow the content wherever it leads") vs. lines 1037-1052 (Design System Physics: "These are non-negotiable")
**FINDING:** The skill repeatedly instructs the agent to let the content determine the spatial form, including forms "not on this list." But the design system physics impose non-negotiable constraints (border-radius: 0, box-shadow: none, specific font trinity, 940-960px default container).

**CONFLICT:** Mild. The document's intent is that content drives SPATIAL FORM within design system PHYSICS. But "follow the content wherever it leads" could be read as overriding physics if the content demands rounded corners, shadows, or non-trinity fonts.

**RESOLUTION STATUS:** Implicitly resolved. Line 1052 clarifies: "The design system provides constraints. The agent provides invention." The physics are the universe; the content determines what is built within it. But this resolution is implied, not stated.

**REMEDIATION:** Add one sentence to the archetypes section (after line 390): "All archetypes and content-derived forms operate within Design System Physics (see below). The content determines WHAT is built; the physics determine the MATERIAL it is built from."

---

### CP-03: "No intermediary filters" vs. Wave 3 Tiered File Selection

**SEVERITY: MEDIUM**
**LOCATION:** Anti-pattern #6 (line 1070) vs. Wave 3 tier system (lines 697-712)
**FINDING:** Anti-pattern #6 rejects compression of research: "No intermediary filters, summarizes, or packages the research. The agent reads the full research itself." But Wave 3's tier system explicitly filters: Tier 3 files get "0-1 primacy turns" and are "read as cross-references during Tier 1/2 primacy passes." This IS a form of filtering -- the agent is explicitly instructed to give some case studies less attention than others.

**CONFLICT:** The anti-pattern targets pipeline-style compression (a synthesizer agent packages findings). Wave 3's tiering is the BUILDER'S OWN prioritization. These are different things, but the anti-pattern's language is absolute enough to create confusion.

**RESOLUTION STATUS:** Not explicitly resolved. The agent could read anti-pattern #6, then reach Wave 3's tier system, and feel conflicted about deprioritizing Tier 3 files.

**REMEDIATION:** Add a clarifying clause to the Wave 3 tier system: "This tiering is the builder's OWN prioritization based on content relevance -- it is NOT the intermediary compression that Anti-pattern #6 rejects. The agent reads Tier 3 files; it reads them with less depth because content relevance determines attention allocation."

---

### CP-04: "Invention follows visibility, not importance" vs. Named Pass Archetypes

**SEVERITY: LOW**
**LOCATION:** Line 92 vs. Lines 452-469
**FINDING:** Line 92 says "The agent should not worry about building 'the most important thing first.' It should build what it can see NOW." But the Named Pass Archetypes table (lines 452-469) prescribes a specific order: structural additions first, holistic read at pass 4, rhythm audit at pass 6, responsive at pass 11.

**CONFLICT:** Mild. The archetypes are described as "descriptions of what healthy deepening looks like," not prescriptions. But the table format and numbered sequence create an implicit ordering that contradicts "build what you can see NOW."

**RESOLUTION STATUS:** Resolved by line 471: "These archetypes apply to Wave 2 and Wave 3 most directly. Other waves have their own rhythms." And by line 453: "These are not prescriptions -- they are descriptions." But "descriptions" in a numbered table with expected delta ranges reads like prescriptions.

**REMEDIATION:** Add after line 453: "If a spatial invention becomes visible at pass 2 that the archetype table assigns to pass 9, build it NOW. Visibility overrides table sequence."

---

### CP-05: "The build is done when the builder feels genuine satisfaction" vs. The 3-Condition Exhaustion Test

**SEVERITY: LOW**
**LOCATION:** Lines 21-22 vs. Lines 477-485
**FINDING:** The introduction says the build is done when the builder "feels that it has become the thing the content demanded. Not compliance. Genuine satisfaction." But the operational exhaustion test requires ALL THREE conditions: delta profile stabilized, research re-read produces no new ideas, "infinite time" answer is invisible.

**CONFLICT:** "Genuine satisfaction" could arrive at Wave 5 for an agent that has built a page it loves but hasn't met all 3 exhaustion conditions. The introduction says satisfaction is the exit criterion; the operational section says the 3-condition test is.

**RESOLUTION STATUS:** Partially resolved. The 3-condition test applies per-wave, not per-build. The introduction's "genuine satisfaction" applies to the overall build. But "genuine satisfaction" at Wave 5 that hasn't been tested against Wave 6-8 criteria could feel like a valid stopping point to an agent that has been working for 5 hours.

**REMEDIATION:** Clarify at line 22: "Genuine satisfaction -- tested against the 3-condition exhaustion test at each wave and the full Wave 7 self-audit."

---

## Summary of All Findings by Severity

### CRITICAL (2)

| ID | Type | Location | Finding |
|----|------|----------|---------|
| U-01 | Under-stated | Line 55 | Early exit criterion appears only in Invocation, not in Wave 0 |
| U-02 | Under-stated | Lines 1120-1122 | Context window transition protocol at bottom of document, no detection heuristic |

### HIGH (7)

| ID | Type | Location | Finding |
|----|------|----------|---------|
| R-01 | Wasteful redundancy | 13 locations | "Each pass is a full cycle" stated 13 times (~80 lines) |
| U-03 | Under-stated | Line 1095 | Notebook pruning rule (200 lines) stated once |
| U-04 | Under-stated | Lines 1096-1097 | Never-prune deepening journal stated once |
| U-05 (escalated) | Under-stated | Line 588 | Findings re-triage at pass 8 stated once |
| U-06 (escalated) | Under-stated | Line 779 | Wave 5 subtractive shift stated once |
| CP-03 | Competing priority | Lines 1070 vs. 697-712 | "No intermediary filters" vs. Wave 3 tier system |
| C-01 | Compression | 9 wave sections | 5-layer instantiations consume 270 lines; 160 compressible |

### MEDIUM (8)

| ID | Type | Location | Finding |
|----|------|----------|---------|
| R-02 | Mixed redundancy | 10 locations | 5-layer framework instantiated 9 times, 5 are wasteful |
| R-03 | Wasteful redundancy | 8 locations | Pass-level deepening phases repeat same pattern |
| R-04 | Wasteful redundancy | 8 locations | Habituation warning stated 8 times |
| R-07 | Wasteful redundancy | 3 locations | "10+ passes per slice" restated after definitive declaration |
| CP-01 | Competing priority | Lines 1066 vs. 488-500 | "No fixed pass counts" vs. minimum pass counts |
| CP-03 | Competing priority | Lines 1070 vs. 697-712 | "No intermediary filters" vs. Wave 3 tiering |
| U-05 | Under-stated | Line 989 | Screenshot file size verification |
| U-07 | Under-stated | Line 341 | Per-section diagnostic question |

### LOW (5)

| ID | Type | Location | Finding |
|----|------|----------|---------|
| R-05 | Beneficial redundancy | Lines 425+refs | Diagnostic override protocol (model pattern) |
| R-06 | Wasteful redundancy | 3 locations | Per-file phase tracking |
| R-08 | Beneficial redundancy | Lines 531, 1037 | Soul constraints |
| CP-02 | Competing priority | Lines 377 vs. 1037 | "Follow content" vs. design system physics |
| CP-04 | Competing priority | Line 92 vs. 452-469 | "Build what you see" vs. named pass archetypes |

---

## Recommended Structural Changes (Priority Order)

1. **Move context window transition protocol** to a more prominent position (after Wave 8, before Retrospectives) and add detection heuristic. (Addresses U-02, highest-impact single change.)

2. **Create a "Critical Checkpoints" reference card** at document end -- 20 lines covering all low-retention high-impact instructions. (Addresses U-01 through U-07.)

3. **Apply the diagnostic-override pattern to cycle restatements:** define once authoritatively, reference subsequently. Replace per-wave cycle restatements with 1-line references. (Addresses R-01, saves ~62 lines.)

4. **Compress 5-layer instantiations for Waves 1, 4, 5, 7, 8** to delta format. Keep Waves 0, 2, 3, 6 in full. (Addresses R-02/C-01, saves ~160 lines.)

5. **Resolve competing priorities explicitly** with 1-sentence additions at CP-01, CP-03, CP-05. (Addresses CP-01, CP-03, CP-05.)

6. **Cross-reference the early exit criterion** in Wave 0's section. (Addresses U-01.)

7. **Add notebook management to the per-wave minimum engagement table.** (Addresses U-03, U-04.)

**Total impact of all changes:** ~350 lines removed, 5 cross-references added, 3 competing priorities resolved, 7 under-stated instructions surfaced. Document shrinks from 1,166 to ~830 lines. Cognitive load reduced by ~30% with zero loss of execution-critical information.
