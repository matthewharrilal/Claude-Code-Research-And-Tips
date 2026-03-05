# Extraction: Files 07-09 (Kill Criteria, Metacognitive Checkpoints, Adversarial Premortem)

**Extractor:** extraction-worker-3
**Date:** 2026-02-16
**Files analyzed:**
- `07-kill-criteria.md` (797 lines)
- `08-metacognitive-checkpoints.md` (557 lines)
- `09-adversarial-premortem.md` (484 lines)

---

## FILE 1: 07-kill-criteria.md

### BINARY CHECKS (Kill Criteria -- 21 total)

#### Stage 1: Pre-Build Kill Criteria (5)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| KB-01 | ~L43-58 | Content section count | N >= 4 sections with >= 200 words each | GATE | BLOCKING | YES (abort if N < 4) |
| KB-02 | ~L62-83 | Metaphor-zone compatibility (content/zone ratio) | C/M >= 1.5 | GATE | BLOCKING | YES (abort if ratio < 1.5 after 1 revision) |
| KB-03 | ~L88-119 | Predicted void budget | predicted_void_pct <= 30% | GATE | BLOCKING | YES (abort if > 30% after spacing compression) |
| KB-04 | ~L125-140 | Prompt length check | line_count <= 200 | GATE | BLOCKING | NO (compression mandate, not abort) |
| KB-05 | ~L144-165 | Metaphor soul compatibility (channel conflicts) | X = 0 conflicts | GATE | BLOCKING | NO (redesign metaphor, not abort) |

#### Stage 2: Pass 1 Kill Criteria -- Spatial Confidence Gate (6)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| SP-01 | ~L174-190 | Container width | 940 <= width_px <= 960 | GATE | BLOCKING | YES (abort after 2 correction cycles) |
| SP-02 | ~L194-213 | Max contiguous void | max_contiguous_void_px <= 1620 | GATE | BLOCKING | YES (abort after 2 correction cycles) |
| SP-03 | ~L218-235 | Content distribution | content_pct >= 70 | GATE | BLOCKING | YES (abort after 2 correction cycles) |
| SP-04 | ~L239-257 | Header viewport ratio | headerRatio <= 25% AND content visible in first viewport | GATE | BLOCKING | YES (abort if content not visible in viewport) |
| SP-05 | ~L261-272 | Footer presence and reachability | footer exists AND pre-footer void <= 1080px | GATE | BLOCKING | YES (abort after 2 correction cycles) |
| SP-06 | ~L276-293 | Spatial Confidence Gate Summary | All 5 spatial criteria PASS | GATE | BLOCKING | YES (abort after 2 total correction cycles) |

#### Stage 3: Pass 2 Kill Criteria (4)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| CP-01 | ~L302-310 | Mechanism count cap | count <= 16 | GATE | BLOCKING | NO (required reduction, not abort) |
| CP-02 | ~L314-327 | Signal-to-silence ratio (restraint) | R/D >= 1.5 | GATE | BLOCKING | NO (required documentation, not abort) |
| CP-03 | ~L331-346 | Zone visual differentiation | invisible_boundaries <= 1 | GATE | BLOCKING | YES (abort Pass 2 after 1 correction cycle) |
| CP-04 | ~L350-360 | Spatial confidence re-check after Pass 2 | SP-01 + SP-03 still PASS | GATE | BLOCKING | YES (rollback to Pass 1 v1; downgrade to ceiling after 2nd fail) |

#### Stage 4: Pass 3 Kill Criteria (3)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| IT-01 | ~L370-381 | Intentionality height budget | height_increase_pct <= 10 | GATE | BLOCKING | NO (revert heaviest additions) |
| IT-02 | ~L386-401 | Intentionality element presence | count_present >= 2 of {bookending, self-reference, cognitive transitions, meta-annotation} | GATE | BLOCKING | NO (add missing elements, 1 cycle) |
| IT-03 | ~L405-421 | Self-reference test (2-person consensus) | count_FORCED = 0 (both say INTEGRAL) | GATE | BLOCKING | NO (remove self-referential element if FORCED) |

#### Stage 5: Final Kill Criteria (5)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| FK-01 | ~L429-443 | PA-05 DESIGNED score | avg_score >= 3 across both PAs | GATE | BLOCKING | DO NOT SHIP if < 3 |
| FK-02 | ~L447-466 | Soul compliance | V = 0 violations | GATE | BLOCKING | DO NOT SHIP until corrected (CSS fixes valid here) |
| FK-03 | ~L470-479 | Spatial confidence gate final | SP-01 + SP-02 + SP-03 all PASS | GATE | BLOCKING | DO NOT SHIP (architectural rebuild needed) |
| FK-04 | ~L484-494 | Novelty assessment | total_novelty_score >= 6 (flagship), >= 5 (conditional) | GATE | HIGH | Classify at correct tier |
| FK-05 | ~L498-508 | No spatial WOULD-NOT-SHIP findings | dual_WNS_spatial = 0 | GATE | BLOCKING | ABORT if >= 2 findings |

#### Time-Based Kill Criterion (1)

| ID | Source Line | Check | Threshold | Category | Priority | Abort? |
|----|-----------|-------|-----------|----------|----------|--------|
| TK-01 | ~L518-537 | Total experiment time budget | time <= 240 minutes | GATE | BLOCKING | SHIP AT CURRENT STATE at 240 min |

### ACTION ITEMS from 07-kill-criteria.md

| # | Source Line | Action | Category | Priority | Target File | Dependencies |
|---|-----------|--------|----------|----------|-------------|--------------|
| 1 | ~L11 | Ensure all kill criteria are BINARY (PASS/FAIL) and MEASURABLE (number or yes/no) | PROCESS | BLOCKING | Master execution prompt | None |
| 2 | ~L40-41 | Pre-build criteria must fire BEFORE any HTML is written | PROCESS | BLOCKING | Master execution prompt | None |
| 3 | ~L47-48 | Content section count: list all sections, count those with >= 200 words distinct content | PROCESS | BLOCKING | Build plan | Content selection |
| 4 | ~L66-68 | Metaphor-agent must document M (zones required) and C (content sections with >= 200 words) and compute ratio C/M | PROCESS | BLOCKING | Metaphor derivation prompt | Content inventory |
| 5 | ~L92-95 | Planner must sum all specified zone paddings, checkpoint margins, heading spacing, inter-section gaps | PROCESS | BLOCKING | Build plan document | Build plan exists |
| 6 | ~L95-96 | Planner must estimate content height per section (words x line height x font size) | PROCESS | BLOCKING | Build plan document | Content inventory |
| 7 | ~L127-130 | Run `wc -l execution-prompt.md` to check prompt length | PROCESS | BLOCKING | Execution prompt | Prompt assembled |
| 8 | ~L139 | Team-lead must compress prompt until <= 200 lines before proceeding | PROCESS | BLOCKING | Execution prompt | KB-04 fails |
| 9 | ~L148-155 | Metaphor-agent must fill soul-channel conflict table (gradients, box shadows, cool tones, border-radius) | PROCESS | BLOCKING | Metaphor derivation output | Metaphor selected |
| 10 | ~L170 | Pass 1 builds spatial skeleton: container, section flow, density rhythm, header/footer, 8-10 mechanisms | PROCESS | BLOCKING | Pass 1 builder prompt | Pre-build gates pass |
| 11 | ~L172-173 | All measurements must be COMPUTED STYLES via Playwright (getBoundingClientRect/getComputedStyle), NOT visual estimation or CSS declaration inspection | PROCESS | BLOCKING | Spatial auditor prompt | None |
| 12 | ~L177-179 | Implement container width measurement script: `document.querySelector('.page-container, .container, main > div').getBoundingClientRect().width` | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 13 | ~L187-188 | SP-01: Allow one correction cycle on first fail; abort on second fail | PROCESS | BLOCKING | Team-lead protocol | SP-01 fails |
| 14 | ~L197-203 | Implement void measurement script: measure max contiguous void height with no content-bearing descendants at 1440px | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 15 | ~L220-226 | Implement content distribution measurement script: sum heights of content-bearing elements / total scroll height | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 16 | ~L242-245 | Implement header ratio measurement script: header height / viewport height at 1440px | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 17 | ~L253-254 | Additional SP-04 check: verify first content (h2 or first paragraph) visible within first viewport | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 18 | ~L263-264 | Implement footer presence check: querySelector('footer') != null AND space from last content to footer <= 1080px | TOOL | BLOCKING | Spatial auditor | Pass 1 complete |
| 19 | ~L278 | ALL 5 spatial criteria must PASS before Pass 2 begins -- gate is BLOCKING | PROCESS | BLOCKING | Team-lead protocol | SP-01 through SP-05 |
| 20 | ~L289 | Maximum 2 correction cycles total for spatial gate | PROCESS | BLOCKING | Team-lead protocol | None |
| 21 | ~L292 | Spatial-auditor agent (Sonnet 4.5) runs SP-01 through SP-05; team-lead verifies and decides PROCEED/ABORT | PROCESS | BLOCKING | Agent topology | None |
| 22 | ~L298-299 | Pass 2 layers metaphor full expression, multi-channel encoding, 4-6 additional mechanisms; total reaches 12-16 | PROCESS | HIGH | Pass 2 builder prompt | Spatial gate passes |
| 23 | ~L303-304 | Count distinct mechanisms using mechanism-catalog.md categories | PROCESS | HIGH | Pass 2 audit | mechanism-catalog.md |
| 24 | ~L317-319 | Count deployed mechanisms (D) from CP-01 and rejected mechanisms (R) from Restraint Map in 02b-elaboration-plan.md | PROCESS | HIGH | Restraint Map | Elaboration plan exists |
| 25 | ~L333-336 | Auditor views page with text labels removed (CSS: `.zone-label { display: none }`) and answers zone boundary visibility per pair | PROCESS | HIGH | Zone differentiation audit | Pass 2 complete |
| 26 | ~L346 | Zone color differentiation >= 25 RGB value difference AND use structural borders as zone markers | ENRICHMENT | HIGH | Build plan / guidelines | None |
| 27 | ~L351-353 | Re-run SP-01 (container width) and SP-03 (content distribution) after Pass 2 with same scripts | PROCESS | BLOCKING | Spatial auditor | Pass 2 complete |
| 28 | ~L357-358 | On CP-04 fail: ROLLBACK to Pass 1 v1 output; re-attempt Pass 2 with reduced elaboration (fewer mechanisms, less dense spacing) | PROCESS | BLOCKING | Team-lead protocol | CP-04 fails |
| 29 | ~L371-374 | Measure total page height BEFORE Pass 3 starts; measure AFTER Pass 3 completes; compute height increase percentage | TOOL | BLOCKING | Team-lead / auditor | Pass 2 complete, Pass 3 complete |
| 30 | ~L387-394 | Team-lead checks for intentionality element types: bookending, self-referential, cognitive transitions, meta-annotation | PROCESS | BLOCKING | Team-lead protocol | Pass 3 complete |
| 31 | ~L410-411 | Two independent readers (team-lead + one audit agent) answer self-reference integral/forced question independently | PROCESS | BLOCKING | Team-lead + audit agent | Pass 3 complete |
| 32 | ~L432-436 | Average PA-05 score across BOTH perceptual auditors; 4 sub-criteria each (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) | PROCESS | BLOCKING | Dual PA protocol | All passes complete |
| 33 | ~L442-443 | If PA-05 fails: identify failing sub-criterion; if PROPORTIONATE fails = architectural problem (not CSS fixable); if DESIGNED fails = metaphor not manifested | PROCESS | BLOCKING | Team-lead diagnosis | FK-01 fails |
| 34 | ~L449-458 | Implement programmatic soul audit counting violations on 8 soul constraints (border-radius, box-shadow, drop-shadow, opacity, gradients, pure B/W, Instrument Serif, cool grays) | TOOL | BLOCKING | Programmatic auditor | All passes complete |
| 35 | ~L472-473 | Re-run SP-01, SP-02, SP-03 for final time with same computed measurement scripts | PROCESS | BLOCKING | Spatial auditor | All passes complete |
| 36 | ~L479 | If SP-02 or SP-03 fails after all passes = architectural (not CSS); DO NOT attempt CSS patch | PROCESS | BLOCKING | Team-lead protocol | FK-03 fails |
| 37 | ~L486-487 | Blind novelty evaluator scores on D3 dimensions (D3.1 Structural Fingerprint, D3.2 CSS Value Overlap, D3.3 Mechanism Combination); each 0-3, total 0-9 | PROCESS | HIGH | Blind novelty evaluator | All passes complete |
| 38 | ~L500-503 | Count findings where BOTH perceptual auditors independently classify as "would not ship this page" due to spatial/proportional concerns | PROCESS | BLOCKING | Dual PA audit | All passes complete |
| 39 | ~L519-520 | Track wall-clock time from metaphor derivation start to Pass 3 completion | PROCESS | BLOCKING | Team-lead | Experiment start |
| 40 | ~L525-528 | Time threshold actions: <= 160 min = on track; 160-200 = normal; 200-240 = caution (evaluate remaining gates); 240 = SHIP AT CURRENT STATE | PROCESS | BLOCKING | Team-lead | Ongoing |
| 41 | ~L531-533 | At 240 min: classify as CEILING-PLUS (Pass 2 done), CEILING-MINUS (Pass 1 done), or ABORT (Pass 1 still failing) | PROCESS | BLOCKING | Team-lead | TK-01 fires |

### ABORT RESPONSE PROTOCOLS (4 protocols)

| # | Source Line | Protocol | Trigger | Action | Category | Priority |
|---|-----------|----------|---------|--------|----------|----------|
| 42 | ~L669-681 | Protocol A: Pre-Build Abort | KB-01, KB-02, or KB-03 fires | Document criterion + measurement; expand content/reduce zones/reduce spacing; re-run pre-build criteria. Recovery: 30-60 min | PROCESS | BLOCKING |
| 43 | ~L684-696 | Protocol B: Pass 1 Abort (Spatial Gate Failure) | SP-01/02/03 fails after 2 cycles | Document failures; save as _aborted-skeleton.html; re-derive metaphor with explicit constraint "960px, <= 2 zones, <= 30% void"; rebuild ceiling-tier | PROCESS | BLOCKING |
| 44 | ~L700-710 | Protocol C: Pass 2 Abort (Spatial Degradation) | CP-04 fails after rollback | Ship Pass 1 v1 as CEILING-MINUS; document elaboration plan that caused degradation | PROCESS | BLOCKING |
| 45 | ~L714-725 | Protocol D: Final Stage Abort | FK-01/03/05 fires | Document criterion; NO CSS fixes for FK-01 or FK-03; write 1-page failure report; assess for lower tier | PROCESS | BLOCKING |

### METACOGNITIVE CHECKPOINTS (in 07-kill-criteria.md, L769-787)

| # | Source Line | Check | When | Category |
|---|-----------|-------|------|----------|
| 46 | ~L773-774 | "Is concept rated 12/12 as concept or as build plan?" | Pre-Build | PROCESS |
| 47 | ~L776-777 | "Assume failure. Most likely cause. Have we procedurally prevented it?" | Before Pass 1 | PROCESS |
| 48 | ~L779-780 | "Have we observed spatial artifact holistically BEFORE constructing evaluation narrative?" | After Pass 1 gate | PROCESS |
| 49 | ~L782-783 | "Are we measuring ambition or execution? Assuming one implies the other?" | After Pass 2 | PROCESS |
| 50 | ~L785-786 | "Is there any condition under which we would abandon entirely? If not = sunk cost bias" | Before Final Verdict | PROCESS |

### CROSS-REFERENCES from 07-kill-criteria.md

| # | Source Line | Reference Target | Context |
|---|-----------|-----------------|---------|
| CR-01 | ~L6 | `ephemeral/ceiling-experiment/_flagship-prep/04-metacognitive-analysis.md` | Source document |
| CR-02 | ~L7 | `ephemeral/ceiling-experiment/_flagship-prep/06-failure-analysis.md` | Source document |
| CR-03 | ~L8 | `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md` | Source document |
| CR-04 | ~L9 | `ephemeral/ceiling-experiment/07-VERDICT.md` | Source document |
| CR-05 | ~L55 | Content-form analysis re: void root cause (zones with insufficient content) | Kill criteria rationale |
| CR-06 | ~L81-82 | Metacognitive analysis re: "How many words of content exist for Zone 3?" | KB-02 rationale |
| CR-07 | ~L117 | Failure analysis re: ceiling's 4 zones x 7 transitions at 48-80px | KB-03 rationale |
| CR-08 | ~L137 | Metacognitive analysis re: Middle shorter prompt = better compliance | KB-04 rationale |
| CR-09 | ~L164 | Failure analysis re: ceiling metaphor 40% strength without labels | KB-05 rationale |
| CR-10 | ~L213 | Flagship Architecture Section F, KILL-01 | SP-02 abort rationale |
| CR-11 | ~L272 | Middle experiment missing footer / zero messaging link | SP-05 rationale |
| CR-12 | ~L303 | mechanism-catalog.md | CP-01 measurement reference |
| CR-13 | ~L319 | 02b-elaboration-plan.md (Restraint Map) | CP-02 measurement reference |
| CR-14 | ~L360 | Flagship Architecture Section F, KILL-02 | CP-04 rationale |
| CR-15 | ~L535 | Flagship Architecture Section F, KILL-03 | TK-01 rationale |

---

## FILE 2: 08-metacognitive-checkpoints.md

### BINARY CHECKS / GATES (19 checkpoints)

#### Stage 1: Pre-Build Checkpoints (5)

| ID | Source Line | Check | Threshold | Category | Priority | Who Runs It |
|----|-----------|-------|-----------|----------|----------|-------------|
| CHECK-1.1 | ~L37-65 | Spatial Budget table: content-to-void ratio | Content >= 60% of total | GATE | BLOCKING | Planner (writes); team-lead (verifies table exists + arithmetic) |
| CHECK-1.2 | ~L69-82 | Zone Necessity Test: 3-question per-zone assessment | 3 NOs = MERGE; 2 NOs = FLAG | GATE | BLOCKING | Planner (self-check); team-lead (reviews table) |
| CHECK-1.3 | ~L86-98 | Prompt Length Gate | <= 200 lines | GATE | BLOCKING | Team-lead enforces (not self-assessed) |
| CHECK-1.4 | ~L103-115 | Anti-Ambition Audit | Each addition: spatial cost < perceptual benefit | GATE | HIGH | DIFFERENT agent (not planner/builder) + planner comparison |
| CHECK-1.5 | ~L119-129 | Metaphor Distance Test: vocabulary overlap | Overlap <= 3/10 key terms | GATE | HIGH | Planner (vocabulary list); team-lead (counts overlap) |

#### Stage 2: Post-Pass-1 Checkpoints (3)

| ID | Source Line | Check | Threshold | Category | Priority | Who Runs It |
|----|-----------|-------|-----------|----------|----------|-------------|
| CHECK-2.1 | ~L143-160 | Fresh-Eyes Proportion Check | Q1: >= 55% content; Q2: NO (page not complete at 50%); Q3: YES (landmark past 70%) | GATE | BLOCKING | SEPARATE agent (cold-look, no context, sees only screenshots) |
| CHECK-2.2 | ~L164-193 | Void Detection Scan (JavaScript) | Content ratio >= 50% at skeleton stage | GATE | BLOCKING | Programmatic (JavaScript measurement in browser) |
| CHECK-2.3 | ~L197-212 | Continuation Bias Interrupt | Builder identifies 3 failure modes; any "preventable now" must be addressed | GATE | HIGH | Builder (self-check); team-lead (reviews + approves) |

#### Stage 3: Post-Pass-2 Checkpoints (4)

| ID | Source Line | Check | Threshold | Category | Priority | Who Runs It |
|----|-----------|-------|-----------|----------|----------|-------------|
| CHECK-3.1 | ~L227-243 | Subtraction Test | Last 3 mechanisms: (b) SAME or (c) BETTER = remove; (a) must justify with reader benefit | GATE | HIGH | Builder (self-check) |
| CHECK-3.2 | ~L247-268 | Signal-to-Silence Ratio | ratio <= 0.8:1 (more silence than signal) | GATE | BLOCKING | Builder (counts); team-lead (verifies ratio) |
| CHECK-3.3 | ~L272-284 | Designed Moment Distribution | >= 1 designed moment per scroll quartile (Q4 most critical) | GATE | HIGH | Builder (produces map); team-lead (verifies distribution) |
| CHECK-3.4 | ~L289-305 | Restraint Inventory | >= 3 genuine restraints listed | GATE | HIGH | Builder (self-report); team-lead (reviews genuineness) |

#### Stage 4: Post-Pass-3 Checkpoints (3)

| ID | Source Line | Check | Threshold | Category | Priority | Who Runs It |
|----|-----------|-------|-----------|----------|----------|-------------|
| CHECK-4.1 | ~L319-331 | Ego Separation (cold-look) | Fresh-eyes agent answers 3 questions; "would not ship" triggers FIX cycle | GATE | BLOCKING | DIFFERENT agent (ZERO context, screenshots only) |
| CHECK-4.2 | ~L335-353 | Level-of-Abstraction Diagnosis | Classify each defect as CSS/HTML/ARCHITECTURE/CONTENT; CSS fixes BANNED for architecture/content problems | GATE | BLOCKING | Builder (classifies); team-lead (enforces CSS ban) |
| CHECK-4.3 | ~L357-371 | Narrative Contamination Test | Builder names narrative + 3 ways it could be wrong | PROCESS | MEDIUM | Builder (self-check); no pass/fail gate |

#### Stage 5: Pre-Verdict Checkpoints (4)

| ID | Source Line | Check | Threshold | Category | Priority | Who Runs It |
|----|-----------|-------|-----------|----------|----------|-------------|
| CHECK-5.1 | ~L386-397 | Dissent Protection Protocol | Every dissenting finding must have 3-question assessment; dismissed findings need independent verification | GATE | BLOCKING | Verdict synthesizer + independent verification agent |
| CHECK-5.2 | ~L401-417 | Success-Axis Alignment | Produce matrix: dimension x success x shippability determination; FAIL on 2+ shippability dimensions = DO NOT SHIP | GATE | BLOCKING | Verdict synthesizer; team-lead reviews |
| CHECK-5.3 | ~L422-437 | Framework-Boundary Scan | Identify boundaries of each evaluation framework | PROCESS | MEDIUM | Verdict synthesizer (reflective) |
| CHECK-5.4 | ~L441-450 | Kill Criteria Check | 3 binary checks: gestalt failure >6/9 auditors; fix cycle didn't improve PA-05c by >=1; content-to-void still <55% | GATE | BLOCKING | Team-lead + programmatic |

### ACTION ITEMS from 08-metacognitive-checkpoints.md

| # | Source Line | Action | Category | Priority | Target File | Dependencies |
|---|-----------|--------|----------|----------|-------------|--------------|
| 51 | ~L41-55 | Planner must produce SPATIAL BUDGET table in mandatory format (zone content + overhead + ratio) and write it into the build plan | PROCESS | BLOCKING | Build plan document | Build plan exists |
| 52 | ~L64 | Team-lead verifies spatial budget table EXISTS and arithmetic is CORRECT; no table = no build | PROCESS | BLOCKING | Team-lead protocol | Build plan exists |
| 53 | ~L70-77 | Planner must produce Zone Necessity table (content mass >= 800px? / different content TYPE? / reader intent shift?) for EACH zone | PROCESS | BLOCKING | Build plan document | Zones defined |
| 54 | ~L79-80 | Default is MERGE for 2-NO zones; planner must argue for keeping | PROCESS | HIGH | Build plan document | Zone necessity table |
| 55 | ~L93-97 | If prompt > 200 lines: remove all THINKING content (rationale, analysis); remove context builder doesn't need; reduce scope if still over | PROCESS | BLOCKING | Execution prompt | KB-04 fails |
| 56 | ~L104-107 | A DIFFERENT agent (not planner, not builder) reads build plan and describes simplest version in 3 sentences | PROCESS | HIGH | Anti-ambition review | Build plan exists |
| 57 | ~L109-110 | Planner compares plan to simplest version: lists [N] additions beyond simplest, with perceptual benefit AND spatial cost for each | PROCESS | HIGH | Build plan document | Anti-ambition agent output |
| 58 | ~L114 | Any addition with spatial cost > perceptual benefit: REMOVE. Cannot articulate benefit in 1 sentence: REMOVE (decorative) | PROCESS | HIGH | Build plan document | Anti-ambition comparison |
| 59 | ~L122-123 | List 10 key metaphor terms + 10 key content terms; count overlaps | PROCESS | HIGH | Metaphor derivation output | Metaphor selected |
| 60 | ~L128-129 | If overlap > 3/10: select different metaphor OR accept with explicit acknowledgment that structural expression required | PROCESS | HIGH | Metaphor derivation output | Overlap check done |
| 61 | ~L145-150 | SEPARATE agent (never builder/planner) views skeleton at 1440px and answers 3 proportion questions | PROCESS | BLOCKING | Fresh-eyes check | Pass 1 complete, screenshots taken |
| 62 | ~L153 | Fresh-eyes agent views page via team-lead's pre-captured screenshots; does NOT read build plan or know metaphor | PROCESS | BLOCKING | Fresh-eyes agent prompt | Screenshots captured |
| 63 | ~L156-158 | If Q1 < 55% content: STOP, rebuild skeleton. If Q2 = YES: add landmarks to latter half. If Q3 = NO: redistribute designed moments | PROCESS | BLOCKING | Team-lead protocol | Fresh-eyes results |
| 64 | ~L168-179 | Implement void detection JavaScript: query all content elements, sum heights, divide by total scroll height | TOOL | BLOCKING | Spatial auditor script | Pass 1 complete, browser access |
| 65 | ~L182 | Threshold at skeleton stage is 50% (lower than final 60% because mechanisms will add density) | PROCESS | BLOCKING | Spatial auditor threshold | None |
| 66 | ~L186-191 | On void fail: reduce zone count / reduce inter-zone spacing / remove empty structural containers / recheck | PROCESS | BLOCKING | Builder instructions | CHECK-2.2 fails |
| 67 | ~L200-206 | Builder must produce pre-mortem: 3 failure modes, each classified as "preventable NOW" or "detectable LATER" | PROCESS | HIGH | Builder pre-mortem document | Skeleton complete |
| 68 | ~L211 | Builder sends pre-mortem to team-lead; team-lead reviews and approves continuation ONLY if now-preventable modes addressed | PROCESS | HIGH | Team-lead protocol | Pre-mortem written |
| 69 | ~L228-234 | Builder evaluates last 3 mechanisms: WORSE/SAME/BETTER if removed | PROCESS | HIGH | Builder self-assessment | Pass 2 complete |
| 70 | ~L238-241 | Remove (b) SAME and (c) BETTER mechanisms; (a) WORSE must have 1-sentence reader-benefit justification (NOT process reason) | PROCESS | HIGH | Builder action | Subtraction test done |
| 71 | ~L250-262 | Count signal events (zone indicators, checkpoints, callouts, title bars, tables, diagrams, designed moments) and silence elements (plain spacing, margins, background-only transitions) | PROCESS | BLOCKING | Builder measurement | Pass 2 complete |
| 72 | ~L263 | Signal-to-silence ratio must be <= 0.8:1 | GATE | BLOCKING | Builder/team-lead verification | Signal count done |
| 73 | ~L267 | If ratio > 0.8:1: remove signal elements until ratio drops below threshold | PROCESS | BLOCKING | Builder action | Ratio exceeds threshold |
| 74 | ~L275-276 | Divide page into 4 scroll quartiles; identify at least 1 designed moment per quartile | PROCESS | HIGH | Builder mapping | Pass 2 complete |
| 75 | ~L277 | Last quartile (75-100%) is most critical -- ceiling page had zero designed moments past 75% | PROCESS | HIGH | Builder attention | None |
| 76 | ~L279-283 | If any quartile has zero designed moments: move existing, create new, or restructure content into empty quartile | PROCESS | HIGH | Builder action | Quartile mapping done |
| 77 | ~L293-298 | Builder produces Restraint Inventory: at least 3 things CHOSE NOT TO DO with reasons | PROCESS | HIGH | Builder document | Pass 2 complete |
| 78 | ~L302-303 | Restraint inventory reviewed by team-lead; trivially filled = checkpoint fails; restraints must be GENUINE | PROCESS | HIGH | Team-lead review | Restraint inventory written |
| 79 | ~L304 | If builder cannot name 3 genuine restraints: apply subtraction test (3.1) to most recent 5 mechanisms instead of 3 | PROCESS | HIGH | Builder action | Restraint inventory fails |
| 80 | ~L321-324 | Team-lead captures full-page screenshots at 1440px and 768px (animations disabled) BEFORE any self-assessment | PROCESS | BLOCKING | Team-lead action | Pass 3 complete |
| 81 | ~L324-326 | DIFFERENT agent (not builder/planner/anyone who saw build plan) views screenshots and answers: 3 sentences, strongest element, weakest element, would you ship? | PROCESS | BLOCKING | Ego separation agent | Screenshots captured |
| 82 | ~L327 | Critical: zero context for cold-look agent (no metaphor name, mechanism count, build plan, success criteria) | PROCESS | BLOCKING | Ego separation agent prompt | None |
| 83 | ~L329 | If fresh-eyes says "would not ship" or identifies gestalt failure: FIX cycle before formal verdict | PROCESS | BLOCKING | Team-lead protocol | Ego separation result |
| 84 | ~L329 | Fresh-eyes finding treated as REAL unless SECOND independent agent contradicts; NEVER attributed to "artifacts" without verification by THIRD agent | PROCESS | BLOCKING | Team-lead protocol | Ego separation finding |
| 85 | ~L339-344 | Builder classifies every known defect: CSS / HTML / ARCHITECTURE / CONTENT | PROCESS | BLOCKING | Builder diagnosis | Pass 3 complete |
| 86 | ~L347-351 | If defect classified as ARCHITECTURE or CONTENT: CSS fixes PROHIBITED (binary rule) | PROCESS | BLOCKING | Team-lead enforcement | Defect classification done |
| 87 | ~L359-366 | Builder writes pre-narrative frame + 3 ways it could be wrong + evidence that contradicts narrative | PROCESS | MEDIUM | Builder self-check | Page complete |
| 88 | ~L388-393 | Verdict synthesizer lists every finding contradicting emerging consensus; for each: 3-question assessment (rendering artifact? / different methodology? / challenges preferred narrative?) | PROCESS | BLOCKING | Verdict synthesizer | All audits complete |
| 89 | ~L396 | Any finding dismissed as "artifact" MUST have verification note from independent agent who investigated | PROCESS | BLOCKING | Independent verification agent | Dissent found |
| 90 | ~L403-416 | Verdict synthesizer produces success-axis alignment matrix: dimension x success x shippability determination | PROCESS | BLOCKING | Verdict synthesizer | All audits complete |
| 91 | ~L417 | Fail on 2+ shippability dimensions = verdict CANNOT be "SUCCESS WITH DEFECTS"; must be "DOES NOT SHIP" | GATE | BLOCKING | Verdict document | Success-axis matrix |
| 92 | ~L424-428 | Verdict synthesizer identifies evaluation frameworks used, their boundaries, and properties at those boundaries | PROCESS | MEDIUM | Verdict document | All audits complete |
| 93 | ~L436 | Include "Methodology Limitations" section in verdict document | PROCESS | MEDIUM | Verdict document | Framework-boundary scan done |
| 94 | ~L443-448 | Kill criteria 3-point check: gestalt failure >6/9 auditors? / fix cycle didn't improve PA-05c by >=1 point? / content-to-void still <55%? | GATE | BLOCKING | Team-lead verification | All audits + fix cycles complete |
| 95 | ~L450 | ANY kill criterion triggered = verdict is "REBUILD REQUIRED" (pre-commitment, no evaluation of "worth it") | GATE | BLOCKING | Verdict | Kill criteria check |

### ENRICHMENT ITEMS from 08-metacognitive-checkpoints.md

| # | Source Line | Enrichment | Target File | Priority | Dependencies |
|---|-----------|-----------|-------------|----------|--------------|
| E-01 | ~L41-55 | Add SPATIAL BUDGET table format as mandatory template in build plan template | Build plan template / execution prompt | BLOCKING | None |
| E-02 | ~L70-77 | Add Zone Necessity Test table as mandatory template in build plan template | Build plan template / execution prompt | BLOCKING | None |
| E-03 | ~L168-179 | Add void detection JavaScript snippet to spatial auditor toolkit | Spatial auditor prompt / tooling | BLOCKING | None |
| E-04 | ~L250-265 | Define signal event types and silence element types in mechanism-catalog.md or semantic-rules.md | mechanism-catalog.md OR semantic-rules.md | HIGH | None |

### PREREQUISITES from 08-metacognitive-checkpoints.md

| # | Source Line | Prerequisite | Category | Priority |
|---|-----------|-------------|----------|----------|
| P-01 | ~L153 | Team-lead must pre-capture screenshots (cold-look + scroll-through at all viewports) BEFORE spawning fresh-eyes auditors | PREREQUISITE | BLOCKING |
| P-02 | ~L160 | Browser rendering must be available for CHECK-2.1 and CHECK-4.1 | PREREQUISITE | BLOCKING |
| P-03 | ~L482 | 3 external agent invocations needed: CHECK-1.4 (anti-ambition), CHECK-2.1 (fresh-eyes), CHECK-4.1 (ego separation) | PREREQUISITE | BLOCKING |
| P-04 | ~L536-545 | Irreducible minimum = 3 checkpoints: Spatial Budget (1.1), Fresh-Eyes Proportion (2.1), Kill Criteria (5.4) -- if full 19 is too many | PREREQUISITE | HIGH |

### CROSS-REFERENCES from 08-metacognitive-checkpoints.md

| # | Source Line | Reference Target | Context |
|---|-----------|-----------------|---------|
| CR-16 | ~L6 | 04-metacognitive-analysis.md, 01-process-retrospective.md, 02-content-form-analysis.md, 02-alternative-mental-models.md, 07-VERDICT.md | Source documents |
| CR-17 | ~L31 | Metacognitive analysis F4 | "Perfect Concept = Quality Product" fallacy |
| CR-18 | ~L32 | Content-form analysis B3 | Content-architecture mismatch |
| CR-19 | ~L33 | Metacognitive analysis C2 | Preparation ceiling |
| CR-20 | ~L57 | Process retrospective (Change 9) | Cumulative whitespace audit proposed |
| CR-21 | ~L91-92 | Metacognitive analysis re: preparation ceiling hypothesis | Prompt length threshold |
| CR-22 | ~L126-127 | Content-form analysis: "Secure Facility" metaphor zero interpretive distance | Metaphor distance test |
| CR-23 | ~L137 | Metacognitive analysis E4 | Continuation bias |
| CR-24 | ~L138 | Metacognitive analysis B2 | "CSS is the unit of change" assumption |
| CR-25 | ~L139 | Content-form analysis D5 | Signal-to-silence imbalance 67 vs 57 |
| CR-26 | ~L207-209 | Metacognitive analysis E4 | Pre-mortem exercise recommendation |
| CR-27 | ~L219 | Metacognitive analysis E3 | Complexity bias |
| CR-28 | ~L222 | Content-form analysis D5 | Signal saturation |
| CR-29 | ~L223 | Metacognitive analysis A3 | Substitution effect |
| CR-30 | ~L235 | Content-form analysis: architecture diagram surrounded by designed silence | Best element analysis |
| CR-31 | ~L265-266 | Model 2: Semantic Resonance from alternative mental models | Richness = ratio of signal to silence |
| CR-32 | ~L313 | Metacognitive analysis E1 | Confirmation bias |
| CR-33 | ~L314 | Metacognitive analysis B1 | "Playwright artifact" dismissal |
| CR-34 | ~L315 | Metacognitive analysis B3 | Concept-product coupling |
| CR-35 | ~L382 | Metacognitive analysis B1 | Consensus epistemology failure |
| CR-36 | ~L383 | Metacognitive analysis B4 | "Better than X = success" asymmetry |
| CR-37 | ~L384 | Metacognitive analysis G | Framework-boundary blindness |

---

## FILE 3: 09-adversarial-premortem.md

### PREDICTED FAILURE MODES (10)

| # | Source Line | Failure Mode | Probability | Category |
|---|-----------|-------------|-------------|----------|
| FM-1 | ~L17-27 | Spatial Confidence Gate passed a page that shouldn't have passed (presence vs. substance) | HIGH | GATE |
| FM-2 | ~L30-40 | Pass 2 broke what Pass 1 got right (mechanism spacing accumulates) | HIGH | PROCESS |
| FM-3 | ~L44-54 | Metaphor required spatial obligations conflicting with void budget | MEDIUM-HIGH | GATE |
| FM-4 | ~L58-68 | Inter-agent messaging was mandated but produced noise, not signal (Goodhart's Law) | HIGH | PROCESS |
| FM-5 | ~L72-83 | Intentionality Layer (Pass 3) was cosmetic, not structural | MEDIUM-HIGH | PROCESS |
| FM-6 | ~L86-98 | Restraint protocol was documented but not felt (planner decisions vs perceptual outcomes) | MEDIUM | PROCESS |
| FM-7 | ~L102-112 | Time overrun triggered KILL-03, shipping half-finished page | MEDIUM | GATE |
| FM-8 | ~L116-127 | Blind novelty score HIGH but page not good (novelty ≠ quality) | MEDIUM-HIGH | PROCESS |
| FM-9 | ~L130-141 | "Announced not structural" metaphor problem recurred (~55-65% survival ceiling under soul) | HIGH | GATE |
| FM-10 | ~L144-155 | 3-pass architecture introduced SEAM VISIBILITY (3 agent voices) | MEDIUM | PROCESS |

### ACTION ITEMS / COUNTERMEASURES from 09-adversarial-premortem.md

| # | Source Line | Action | Category | Priority | Target File | Dependencies |
|---|-----------|--------|----------|----------|-------------|--------------|
| 96 | ~L24-25 | Add SC-08: Content Weight Check. Per section: min 3 visual elements, min 2 content TYPES (prose + code, or prose + table) | ENRICHMENT | HIGH | Spatial Confidence Gate / execution prompt | None |
| 97 | ~L38-39 | Re-run SC-02 (Void Budget) and SC-03 (Content Distribution) AFTER Pass 2 automatically as binary gate (not squint test, not judgment call) | PROCESS | BLOCKING | Gate 4 / team-lead protocol | Pass 2 complete |
| 98 | ~L52-53 | Add Phase 3.5: SPATIAL OBLIGATION ANALYSIS between metaphor derivation and build planning | PROCESS | HIGH | Pipeline architecture | Metaphor derived |
| 99 | ~L52-53 | Metaphor agent answers: zones? transitions? minimum spacing? cumulative spatial cost? If > 10% of page height, simplify or reject | PROCESS | HIGH | Metaphor derivation prompt | Metaphor derived |
| 100 | ~L66-67 | Replace message count mandates with DELIVERABLE mandates (spatial summary, mechanism impact log, intentionality summary as shared files) | PROCESS | HIGH | Communication protocol | None |
| 101 | ~L80-81 | Move intentionality requirements from Pass 3 to build plan (Phase 2); planner specifies self-referential element + echo structure upfront | PROCESS | HIGH | Build plan template | None |
| 102 | ~L96-97 | Require perceptual verification of silence zones: team-lead screenshots silence zone + adjacent sections; if all look similarly sparse, redesign | PROCESS | HIGH | Team-lead protocol | Pass 2 complete |

### FILE MODIFICATION ITEMS from 09-adversarial-premortem.md

| # | Source Line | Modification | Target File | Category | Priority |
|---|-----------|-------------|-------------|----------|----------|
| FM-103 | ~L340-355 | Add Visual Weight Score to programmatic audit: paragraphs*1 + code*2 + tables*3 + diagrams*4 + callouts*2; min 5 per section | Spatial auditor script / programmatic audit | ENRICHMENT | HIGH |
| FM-104 | ~L358-361 | Add SC-02 + SC-03 re-verification to Gate 4 as AUTOMATED checks; if content-to-void degrades >10pp, team-lead sends specific reduction instructions | Gate 4 specification / team-lead prompt | ENRICHMENT | BLOCKING |
| FM-105 | ~L365-377 | Add Metaphor Spatial Obligation Score to metaphor derivation prompt: 5 questions + binary threshold (spatial cost > 10% = simplify/reject) | Metaphor derivation prompt | ENRICHMENT | HIGH |
| FM-106 | ~L382-388 | Replace message mandates with file-deliverable mandates: 3-line SPATIAL SUMMARY after Pass 1; 5-line MECHANISM IMPACT LOG after Pass 2; 3-line INTENTIONALITY SUMMARY after Pass 3 | Communication protocol / execution prompt | ENRICHMENT | HIGH |
| FM-107 | ~L391-394 | Move intentionality requirements into build plan (Phase 2); Pass 3 becomes REFINEMENT not ADDITION | Build plan template / execution prompt | ENRICHMENT | HIGH |
| FM-108 | ~L397-400 | Add PA-51: "Does the page have AT LEAST 2 moments where you feel the design is deliberately QUIET?" | Perceptual auditing SKILL.md | ENRICHMENT | HIGH |
| FM-109 | ~L403-409 | Replace 240-minute kill with 300-minute kill + 240-minute status check gate | Kill criteria / execution prompt | ENRICHMENT | MEDIUM |
| FM-110 | ~L412-414 | Run novelty evaluation AFTER verdict is written, not as input to it; verdict evaluates PA-05/spatial/soul first | Verdict protocol / execution prompt | ENRICHMENT | HIGH |
| FM-111 | ~L417-421 | Add to metaphor derivation prompt: max achievable visual metaphor survival under soul = 55-65%; target ATMOSPHERIC (50-80%), not STRUCTURAL (80%+); design labels to be aesthetically integrated | Metaphor derivation prompt | ENRICHMENT | HIGH |
| FM-112 | ~L425-448 | Create 20-line VOICE GUIDE for multi-agent passes: HTML conventions, CSS conventions, prose conventions | New document: Voice Guide | ENRICHMENT | HIGH |

### PREREQUISITES from 09-adversarial-premortem.md

| # | Source Line | Prerequisite | Category | Priority |
|---|-----------|-------------|----------|----------|
| P-05 | ~L220-236 | Compress 150+ rules to per-agent specialized prompts: skeleton-builder ~15 rules, elaboration-builder ~20 rules, intentionality-builder ~10 rules, team-lead ~60 rules | PREREQUISITE | BLOCKING |
| P-06 | ~L225-226 | Gate enforcement by team-lead, not by builder; 24 success criteria + 6 kill criteria + 7 metacognitive checkpoints are TEAM-LEAD responsibilities | PREREQUISITE | BLOCKING |
| P-07 | ~L226-227 | Enrichments applied to SOURCE FILES (mechanism-catalog.md, prohibitions.md, tokens.css, semantic-rules.md, SKILL.md) BEFORE experiment, not as inline builder instructions | PREREQUISITE | BLOCKING |
| P-08 | ~L227-228 | Kill criteria as TEAM-LEAD gates only; builder should NOT know about kill criteria | PREREQUISITE | HIGH |
| P-09 | ~L329 | Use DIFFERENT CONTENT from Middle/Ceiling (not SYSTEM: Remote Mac Control) to test pipeline generalizability | PREREQUISITE | HIGH |

### PROCESS RECOMMENDATIONS from 09-adversarial-premortem.md

| # | Source Line | Recommendation | Category | Priority |
|---|-----------|---------------|----------|----------|
| R-01 | ~L162-202 | 150+ rules exceeds attention budget (~50-80 rules effective ceiling); compress to per-agent prompts | PROCESS | BLOCKING |
| R-02 | ~L206-214 | Constraint density flip at 50-80 rules: binary rules start competing; judgment rules become invisible | PROCESS | BLOCKING |
| R-03 | ~L230-236 | Per-agent rule counts: skeleton ~15, elaboration ~20, intentionality ~10, team-lead ~60 | PROCESS | BLOCKING |
| R-04 | ~L259-277 | PREDICTION: "Wall of Content" failure (density without rhythm) = mirror image of void; preparation has zero apparatus for detecting signal failures | PROCESS | HIGH |
| R-05 | ~L285-287 | Missing PA-50 for "too dense": "Is there any point where you can scroll through an entire viewport height without a VISUAL BREAK?" | ENRICHMENT | HIGH |
| R-06 | ~L323-331 | Design flagship to produce n=2 data: use different content; treat content-specific findings as CHECKS not RULES; accept higher uncertainty | PROCESS | HIGH |
| R-07 | ~L463-471 | Preparation-as-performance risk: 5,500 lines → 200-line prompt = 27.5:1 compression; 96% of preparation will never influence build | PROCESS | HIGH |

### CROSS-REFERENCES from 09-adversarial-premortem.md

| # | Source Line | Reference Target | Context |
|---|-----------|-----------------|---------|
| CR-38 | ~L6 | 01-process-retrospective.md | Source |
| CR-39 | ~L6 | 02-content-form-analysis.md | Source |
| CR-40 | ~L6 | 03-enrichment-audit.md | Source |
| CR-41 | ~L6 | 04-metacognitive-analysis.md | Source |
| CR-42 | ~L6 | 05-flagship-architecture.md | Source |
| CR-43 | ~L6 | 06-failure-analysis.md | Source |
| CR-44 | ~L6 | 06-adversarial-anti-scale.md | Source |
| CR-45 | ~L6 | 07-VERDICT.md | Source |
| CR-46 | ~L22 | SC-04 (Squint Test) | Mitigation reference |
| CR-47 | ~L35 | Gate 4 composition verification | Pass 2 spatial re-check gap |
| CR-48 | ~L36 | PA-05c quick-check | Judgment call limitation |
| CR-49 | ~L48 | KILL-01 | Spatial gate failure trigger |
| CR-50 | ~L64 | CP-02 from ceiling experiment | Zero messaging parallel |
| CR-51 | ~L78 | DD-006 and CD-006 showcase pages | Intentionality comparison |
| CR-52 | ~L89 | Composition Verification Gate (Gate 4) | Restraint ratio measurement |
| CR-53 | ~L109 | KILL-03 | Time overrun trigger |
| CR-54 | ~L122 | Metacognitive analyst Recommendation 2 | "Separate rich from good" |
| CR-55 | ~L134 | 06-failure-analysis.md | "Announced not structural" classification |
| CR-56 | ~L165-170 | 05-flagship-architecture.md | Rule count origin (SC checks, restraint, success criteria, kill criteria, gates) |
| CR-57 | ~L171-176 | 03-enrichment-audit.md | Enrichment counts (10 BLOCKING, 14 Important, 10 Nice-to-have) |
| CR-58 | ~L178-179 | 01-process-retrospective.md | New gates + cross-cutting changes |
| CR-59 | ~L181-184 | 06-failure-analysis.md | Prevention checklist + gates + guardrails |
| CR-60 | ~L186-189 | 04-metacognitive-analysis.md | Metacognitive checkpoints + kill criteria + recommendations |
| CR-61 | ~L303 | mechanism-catalog.md, prohibitions.md, tokens.css, semantic-rules.md, SKILL.md | Target files for pre-experiment enrichment |
| CR-62 | ~L277 | Anti-scale thesis core principle | "Richness = ratio of signal to silence" |

---

## SUMMARY STATISTICS

### By File
| File | Binary Checks | Action Items | Enrichments | Prerequisites | Cross-References |
|------|--------------|-------------|-------------|---------------|-----------------|
| 07-kill-criteria.md | 21 kill criteria + 5 metacog checks | 45 | 1 | 0 | 15 |
| 08-metacognitive-checkpoints.md | 19 checkpoints | 45 | 4 | 4 | 22 |
| 09-adversarial-premortem.md | 10 failure modes | 7 countermeasures | 10 file modifications | 5 | 25 |
| **TOTAL** | **55** | **97** | **15** | **9** | **62** |

### By Category
| Category | Count |
|----------|-------|
| GATE | 44 |
| PROCESS | 63 |
| ENRICHMENT | 15 |
| TOOL | 7 |
| PREREQUISITE | 9 |
| OTHER | 0 |
| **TOTAL** | **138** |

### By Priority
| Priority | Count |
|----------|-------|
| BLOCKING | 72 |
| HIGH | 48 |
| MEDIUM | 9 |
| LOW | 0 |
| **TOTAL** | **129** (some items have implicit priority from context) |

### KEY FINDINGS

1. **21 binary kill criteria** spanning 5 stages (pre-build through final) plus 1 time-based criterion = 22 total gates
2. **19 metacognitive checkpoints** across 5 stages; 14 are binary/measurable, 5 are self-check only
3. **10 predicted failure modes** with 10 countermeasures that add ZERO builder cognitive load
4. **Irreducible minimum = 3 checkpoints**: Spatial Budget (1.1), Fresh-Eyes Proportion (2.1), Kill Criteria (5.4)
5. **Critical gap identified**: No detection apparatus for "too dense" (the inverse of void); needs PA-50/PA-51
6. **Preparation paradox**: 150+ rules exceed attention budget (~50-80 effective ceiling); must compress to per-agent prompts
7. **Rule count per agent**: Skeleton-builder ~15, Elaboration-builder ~20, Intentionality-builder ~10, Team-lead ~60
8. **4 abort response protocols**: Pre-build (30-60 min recovery), Pass 1 (60-90 min), Pass 2 (ship v1), Final (failure report)
9. **3 external agent invocations needed**: Anti-ambition (CHECK-1.4), Fresh-eyes (CHECK-2.1), Ego separation (CHECK-4.1)
10. **Predicted mirror failure**: "Wall of Content" (density without rhythm) -- overcorrection for void prevention

### BLOCKING ITEMS REQUIRING ACTION BEFORE FLAGSHIP

| # | Item | Source |
|---|------|--------|
| 1 | Compress 150+ rules into per-agent specialized prompts (~15-20 rules each for builders) | 09-adversarial L220-236 |
| 2 | Apply enrichments to source files (mechanism-catalog.md, prohibitions.md, tokens.css, semantic-rules.md, SKILL.md) BEFORE experiment | 09-adversarial L226-227 |
| 3 | Create voice guide for multi-agent passes (20 lines) | 09-adversarial L425-448 |
| 4 | Add spatial budget table template to build plan | 08-metacog L41-55 |
| 5 | Add zone necessity test template to build plan | 08-metacog L70-77 |
| 6 | Add void detection JavaScript to spatial auditor toolkit | 08-metacog L168-179 |
| 7 | Add visual weight scoring to programmatic audit | 09-adversarial L340-355 |
| 8 | Add SC-02/SC-03 re-verification to Gate 4 (automated) | 09-adversarial L358-361 |
| 9 | Add metaphor spatial obligation score to metaphor derivation prompt | 09-adversarial L365-377 |
| 10 | Replace message mandates with file-deliverable mandates | 09-adversarial L382-388 |
| 11 | Add PA-51 "deliberately quiet" detection to perceptual audit | 09-adversarial L397-400 |
| 12 | Run novelty evaluation AFTER verdict, not as input | 09-adversarial L412-414 |
| 13 | Set realistic metaphor survival expectations (55-65% max under soul) | 09-adversarial L417-421 |
| 14 | Select DIFFERENT content from Middle/Ceiling experiments | 09-adversarial L329 |
| 15 | Add PA-50 for "too dense" detection (visual break check) | 09-adversarial L285-287 |
