# HIGH Items Triage: 28 Items Assessment

**Agent:** high-items-triager (Opus 4.6)
**Date:** 2026-02-17
**Input:** 13-MASTER-PRE-FLIGHT-CHECKLIST.md (Section 3), master-execution-prompt.md, prompt-assembly-journal.md, enriched design system files
**Purpose:** Determine status of all 28 HIGH items and recommend which to remediate before flagship

---

## 1. FULL STATUS TABLE

### 3A. Design System Enrichments (HT-01 through HT-04)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-01 | Soul enforcement selector `*:where(:not(input,button,select)){border-radius:0}` | NOT DONE | Grep of prohibitions.md finds no `:where` selector. Prohibition #1 is prose-only ("NEVER use border-radius > 0") with no defensive CSS snippet. | Builder may forget to reset third-party or inherited radius. LOW risk -- the prohibition is clear and binary. Kill rule K6 in execution prompt enforces "border-radius: 0 on every element" with grep check. | ACCEPT RISK |
| HT-02 | Border-weight semantic system (4px/3px/1px only, NEVER 2px) | DONE | mechanism-catalog.md lines 156-177 document PROGRESSIVE and DISCRETE modes for border-weight gradient. Line 486 explicitly states "4px left border NEVER 2px, NEVER 3px for callouts." Execution prompt references 4px/3px/1px in transition grammar and mechanism catalog reference. prohibitions.md has conditional prohibition against 2px. | N/A | N/A |
| HT-03 | Extended constraint set (10 value-restriction prohibitions) | NOT DONE | prohibitions.md has 8 absolute + 14 conditional + 2 meta = 24 total. No evidence of 10 additional value-restriction prohibitions added. | Lower constraint pressure. Checklist itself notes "Optional." Execution prompt's kill rules (K1-K7) cover the most critical constraints. The builder already has 24 prohibitions to internalize. | ACCEPT RISK |
| HT-04 | 4 flagship-specific value restrictions | PARTIAL | Execution prompt contains 7 kill rules (K1-K7) which function as flagship-specific constraints. K7 (max spacing 96px) is a value restriction. But there are not 4 explicit ADDITIONAL value restrictions beyond existing prohibitions. The kill rules effectively serve this purpose. | Unconstrained channels remain. But K1-K7 cover the channels that have historically caused failures (container width, void, header, spacing). | ACCEPT RISK |

### 3B. Skill Enrichments (HT-05 through HT-09)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-05 | Formalize Mode 4 pre-capture protocol | DONE | PA SKILL.md line 479+ documents Mode 4: Standalone (60 minutes, TeamCreate, 7 agents). Lines 488-495 document per-auditor dimension assignments (Auditor A through H). The screenshot pre-capture pattern is established in MEMORY.md and execution prompt coordination layer. | N/A | N/A |
| HT-06 | Root cause classification protocol (5 types) | NOT DONE | Grep of PA SKILL.md finds no "root cause classification" or "5 types" protocol. Auditors report defects but without structured root cause taxonomy. | Auditors report symptoms ("dead space") without classifying cause ("void from excessive section padding" vs "missing content section"). Reduces fix-pass precision. MEDIUM impact. | ACCEPT RISK |
| HT-07 | PA-51 "deliberately quiet" + PA-50 "too dense" (overcorrection detection) | DONE | PA SKILL.md lines 345-346 have PA-50 (viewport void counting) and PA-51 (content-to-scroll ratio percentage). Line 361 assigns Auditor C as primary evaluator with all auditors noting patterns. | N/A | N/A |
| HT-08 | Assign PA auditors by dimension | DONE | PA SKILL.md lines 488-495 explicitly assign 9 auditors (A through I) by dimension: A=Impression+Emotion, B=Readability+Typography, C=Spatial+Proportion, D=Flow+Pacing, E=Grid+Layout, F=Consistency+Rhythm, G=Metaphor+Ideology, H=Responsive. Each has specific PA question assignments. | N/A | N/A |
| HT-09 | Temporal firewall for lock sheet (cold looks FIRST) | NOT DONE | No mention of "temporal firewall," "cold look FIRST," or "lock sheet" ordering in PA SKILL.md. The Mode 4 protocol specifies screenshot pre-capture (team lead takes all) before auditors start, which creates temporal separation, but there's no explicit directive that lock sheet classification happens AFTER initial impressions. | Lock sheet bias could color PA answers. MEDIUM impact, but mitigated by Mode 4's fresh-eyes principle -- auditors receive ONLY screenshots and PA questions, not prior audit results. | ACCEPT RISK |

### 3C. Prompt Assembly (HT-10 through HT-17)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-10 | Classify 56 ceiling rules (KEEP/CONV/COORD/DROP/MERGE) | DONE | prompt-assembly-journal.md Section 2 provides complete rule classification. 42 items classified as CONVICTION (13), EXECUTION (22), COORDINATION (7). Section 3 documents 15 explicitly discarded items with reasoning. Total AU budget calculated at 28.25/37 (76% utilization). | N/A | N/A |
| HT-11 | Move 7 judgment rules to conviction document | DONE | Execution prompt contains ZERO judgment rules in execution layer. All "MAY/SHOULD/CONSIDER" language eliminated. Conviction items (C1-C4, C12-C13) are identity statements, not testable rules. Kill rules (K1-K7) are binary pass/fail. Self-checks are builder-evaluated. The prompt journal explicitly notes "Zero MAY rules." | N/A | N/A |
| HT-12 | Extract CD-006 + DD-006 exemplars (20 lines each) | NOT DONE | Execution prompt references mechanism-catalog.md and tokens.css in the reference library but contains no inline exemplars from CD-006 or DD-006. The journal explicitly discards "CSS ALLOWLIST" and "CSS PROHIBITLIST" as "too granular" -- which overlaps with exemplar extraction. | Builder has no concrete quality calibration from crown jewels. MEDIUM-HIGH impact. Builder knows WHAT to do (12-14 mechanisms, 5 categories) but not HOW good looks in practice. The mechanism-catalog.md does contain CD-006/DD-006 provenance citations. | REMEDIATE NOW |
| HT-13 | Create unlimited auditor prompts | NOT DONE | Execution prompt Layer 3 mentions "PA Auditors (9+)" and "Mode 4 perceptual audit (fresh-eyes, screenshot-based)" but provides no separate auditor prompt files. The PA SKILL.md contains the 48 questions and dimension assignments, which effectively serves as the auditor prompt. | PA auditors would rely on SKILL.md rather than custom flagship prompts. LOW impact -- the SKILL.md already contains dimension assignments and question sets. | ACCEPT RISK |
| HT-14 | Replace explanations with exemplars in builder prompt | PARTIAL | Execution prompt uses conviction statements (terse) rather than verbose explanations. "Beauty is walking all four simultaneously" is exemplar-like. But the prompt uses framing language ("Restraint is a richness driver") rather than concrete CSS exemplars. The journal discards specific CSS examples as "too granular." | Builder gets principles, not visual examples. MEDIUM impact but mitigated by reference library pointing to mechanism-catalog.md (1,219 lines with concrete CSS). | ACCEPT RISK |
| HT-15 | Frame all constraints as negative rules | PARTIAL | Kill rules (K1-K7) are framed as thresholds/limits (negative framing: "no more than X"). But execution spec uses positive framing too: "12-14 mechanisms" (positive), "every third of page has >= 2" (positive). The 24 prohibitions in prohibitions.md are all negative-framed. | Mixed framing increases attention cost (~2-4 AU per positive rule vs ~1 AU for negative). MEDIUM impact but attention budget is at 76% utilization (9 AU headroom). | ACCEPT RISK |
| HT-16 | Attention audit template | NOT DONE | No attention audit template or verification prompt exists in the execution prompt or deliverables. The prompt journal notes "Performative checkpoints are useless. Every checkpoint must produce an ARTIFACT" but doesn't create a specific attention audit artifact. | No verification that builder prompt is within attention budget during execution. LOW impact -- the prompt assembly journal already calculated 28.25 AU (within 37 AU budget). This is a pre-assembly concern, already addressed. | UNNECESSARY |
| HT-17 | Remove redundancy from prompt | DONE | Execution prompt is 193 lines (within 240-line budget). Each rule appears exactly once. No "see also" cross-references. The 4-layer architecture separates attention-bearing items from zero-cost reference material. Prompt journal Section 4 (D3) confirms 230 lines, builder sees ~95 lines. | N/A | N/A |

### 3D. Pipeline Architecture (HT-18 through HT-22)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-18 | Competitive skeleton build (Pass 1) | NOT DONE | Execution prompt specifies single builder with 5-pass process. No competitive skeleton (two builders, pick best). Prompt journal does not mention or discard this item. | Single builder means P(good skeleton) ~70% vs ~91% with competitive build. HIGH impact -- the skeleton determines the entire page's spatial structure. If skeleton is poor, all subsequent passes build on weak foundation. | REMEDIATE NOW |
| HT-19 | Embedded auditor for Passes 1-2 | NOT DONE | Execution prompt coordination specifies Builder + Lead + Planner + PA Auditors. No embedded auditor role for real-time monitoring during build passes. Lead reviews after each pass (CO3-CO4) but doesn't actively monitor. | Void can accumulate during Pass 1-2 without detection until Gate 1. MEDIUM impact -- Lead's post-pass review (with GO/REVISE authority) partially covers this, but it's reactive rather than proactive. | ACCEPT RISK |
| HT-20 | Calibration run before flagship | NOT DONE | Prompt journal explicitly discards: "Would add 2-3 hours. Net benefit unclear for single experiment. The enrichments ARE the calibration." | Pipeline untested. First run IS the flagship. HIGH impact in theory, but the Middle-Tier experiment (8 agents, SUCCESS) was effectively a calibration run for the pipeline topology. The enrichments, threshold registry, and gate structure are all evolved from that experiment. | ACCEPT RISK |
| HT-21 | Crown jewel technique inventory | NOT DONE | No technique inventory file exists. Execution prompt references mechanism-catalog.md (18 mechanisms with modes/examples) but no extracted technique inventory from CD-006/DD-006 specifically. | Builder has mechanism catalog but no curated "this is what flagship quality looks like" reference. Overlaps with HT-12. MEDIUM-HIGH impact. | REMEDIATE NOW (combine with HT-12) |
| HT-22 | Two-agent pattern for fix passes | NOT DONE | Execution prompt specifies single builder for all 5 passes. No two-agent fix pattern where a second agent audits fixes. Lead's GO/REVISE authority partially covers this (CO3-CO4). | Single agent builds AND evaluates own fixes. Continuation bias risk. MEDIUM impact -- Lead's per-pass review mitigates but doesn't eliminate self-audit blind spots. | ACCEPT RISK |

### 3E. Additional Gates (HT-23 through HT-25)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-23 | Subtraction test (post-Pass-2) | PARTIAL | Execution prompt Pass 3 includes "Apply restraint: for each mechanism, ask 'Would removing this make the page worse?' If no, remove it." This IS a subtraction test, but embedded in Pass 3 rather than as a formal gate between Pass 2 and 3. | Mechanisms never formally evaluated for removal as a gate step. LOW impact -- the restraint directive in Pass 3 covers the intent. | ACCEPT RISK |
| HT-24 | Anti-ambition audit | NOT DONE | No anti-ambition check exists in execution prompt or gates. The closest is the mechanism hard cap (14) and the conviction statement about restraint. No explicit gate that checks "Is this plan achievable in the time budget?" | Plan ambition unchecked. If planner proposes 16 mechanisms with complex interactions, no gate prevents over-commitment. MEDIUM impact but hard cap of 14 and per-category minimums constrain ambition implicitly. | ACCEPT RISK |
| HT-25 | Continuation bias interrupt | NOT DONE | No explicit bias interrupt mechanism in execution prompt. Lead's GO/REVISE authority is the closest analog but doesn't specifically address "builder sees a problem but proceeds because they're mid-build." | Builder identifies failures but doesn't address them. MEDIUM impact. The per-pass messaging requirement (CO3: builder MUST message lead after each pass with concerns) creates a natural interruption point. | ACCEPT RISK |

### 3F. Scale/Research Integration (HT-26 through HT-28)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| HT-26 | Add iteration protocol after Gate 5 | NOT DONE | Execution prompt has 4 gates (G0-G3). No post-audit fix cycle protocol. After Mode 4 PA completes, there's no specified iteration loop. | No post-audit fix cycle. If Mode 4 PA finds issues, no structured protocol for fix iteration. HIGH impact -- this was identified as "highest-leverage improvement missed." However, the team lead can operationally direct fixes after PA results without a formal protocol. | REMEDIATE NOW |
| HT-27 | Add builder self-scroll requirement | NOT DONE | No self-scroll directive in execution prompt. Builder completes passes and submits to Gate 3 (self-check) but isn't required to scroll through the full page at 1440px viewport. | Builder hands off without seeing full scroll. MEDIUM impact. K2 (content-to-void >= 70%) requires the builder to do viewport-increment scrolling to verify, which IS effectively a self-scroll. But it's framed as a measurement, not an experience. | REMEDIATE NOW |
| HT-28 | Add spatial budget CALCULATION mandate | NOT DONE | Execution prompt has density map (3 zones, Top/Middle/Bottom) with mechanism counts per zone but no explicit height calculation. Planner specifies zones without calculating "Top = ~2000px, Middle = ~3500px, Bottom = ~2000px." | Planner specifies zones abstractly. No height verification until Gate 1. MEDIUM impact. Could lead to disproportionate zones or total height mismatch. | REMEDIATE NOW |

### 3G. Nuance Recovery HIGH Items (NR-03 through NR-13)

| ID | Item | Status | Evidence | If NOT DONE: Impact | Recommendation |
|----|------|--------|----------|---------------------|----------------|
| NR-03 | Metaphor interpretive DISTANCE >= 2 criterion | NOT DONE | Execution prompt has no metaphor distance criterion. Conviction section says "Multiple valid layouts exist. Your metaphor is chosen, not found" but no distance metric. | Literal mapping metaphors pass. LOW impact for flagship -- the tension-composition pipeline's divergence mandate (R6 anti-gravity) already prevents obvious metaphors. The pipeline's convergence check (5-dimension table) is more rigorous than a simple distance metric. | ACCEPT RISK |
| NR-04 | ARC INVERSION detection | NOT DONE | Execution prompt specifies "CRESCENDO with EXHALE" density shape but no explicit check for metaphor-content arc conflicts. | If metaphor's natural arc inverts the content's crescendo (e.g., a "cooling" metaphor that wants density to decrease while content density should increase), the conflict goes undetected. LOW impact -- planner specifies the density map, and builder follows it. The density shape is content-driven, not metaphor-driven. | ACCEPT RISK |
| NR-05 | Q4 "WHY IS THIS SPACE EMPTY?" for Semantic Value Framework | NOT DONE | No void justification framework in semantic-rules.md or execution prompt. Kill rules K2/K3 set void thresholds but don't require JUSTIFICATION for remaining void. | No framework for builder to justify intentional whitespace. LOW impact -- the 70% content-to-void threshold is strict enough that most void is eliminated. The remaining 30% is breathing space that doesn't need case-by-case justification at flagship tier. | ACCEPT RISK |
| NR-06 | Builder self-scroll as process rule | NOT DONE | Redundant with HT-27. Same finding, same status. | See HT-27. | (Covered by HT-27) |
| NR-07 | Dissent specificity signal protocol | NOT DONE | No protocol for precise measurements that contradict consensus. Mode 4 PA weaver synthesizes but no dissent-weighting protocol. | Precise measurements dismissed as artifact. MEDIUM impact for verdict quality, but Mode 4's 9 independent auditors naturally create dissent visibility -- if 8/9 agree and 1 dissents with measurements, the weaver would note the outlier. | ACCEPT RISK |
| NR-08 | Confirmation bias warning for verdict team | NOT DONE | No explicit bias warning in execution prompt or PA coordination. Mode 4 protocol has fresh-eyes principle but not anti-confirmation-bias framing for the verdict synthesis. | Verdict biased toward confirming success. MEDIUM impact. Could be addressed with a single sentence in the weaver's prompt. | ACCEPT RISK |
| NR-10 | Act-specific mechanism deployment guidance | NOT DONE | Execution prompt specifies per-zone mechanism counts (4-5/5-6/4-5) but not which specific mechanisms fit which zone's content characteristics. | Builder knows HOW MANY mechanisms per zone but not WHICH ones suit WHAT content. MEDIUM impact. The mechanism-catalog.md application modes (PROGRESSIVE vs DISCRETE) partially address this, and the density map provides some guidance (e.g., "11-row component table is visual climax"). | ACCEPT RISK |
| NR-11 | Weight decomposition for visual peaks | NOT DONE | Kill rule K5 requires "at least 1 section using 3+ mechanisms at high intensity must appear in the second half." But no decomposition of what "high intensity" means across specific weight dimensions. | Weight targets abstract, not actionable. LOW impact -- K5 provides a testable threshold ("3+ mechanisms at high intensity"). The builder can interpret "high intensity" through the mechanism catalog's deployment guidance. | ACCEPT RISK |
| NR-12 | Anti-metronome example sequence | NOT DONE | Prompt journal explicitly discards: "Anti-metronome interval percentages -- Too granular. 'Vary rhythm' is sufficient direction." | Rhythm principle captured but no example. LOW impact -- mechanism catalog already documents anti-pattern of uniform application (line 175: "Discrete mode applied uniformly to ALL elements of same type... creates mechanical rhythm"). | ACCEPT RISK |
| NR-13 | PA hit rate data by dimension | NOT DONE | No historical PA hit rate data provided to inform auditor dimension assignment. The Mode 4 assignments are based on question topic grouping, not empirical hit rates. | Auditor dimension assignment uninformed by empirical data. LOW impact -- the dimension assignments in PA SKILL.md (lines 488-495) are logically grouped. We only have n=1 Mode 4 data (ceiling experiment), insufficient for statistical assignment optimization. | ACCEPT RISK |

---

## 2. SUMMARY COUNTS

| Status | Count | Items |
|--------|-------|-------|
| **DONE** | 8 | HT-02, HT-05, HT-07, HT-08, HT-10, HT-11, HT-17, HT-23 (partial but sufficient) |
| **PARTIAL** | 3 | HT-04, HT-14, HT-15 |
| **NOT DONE** | 16 | HT-01, HT-03, HT-06, HT-09, HT-12, HT-13, HT-18, HT-19, HT-20, HT-21, HT-22, HT-24, HT-25, HT-26, HT-27, HT-28 |
| **UNNECESSARY** | 1 | HT-16 |
| **NR NOT DONE** | 10 | NR-03, NR-04, NR-05, NR-06, NR-07, NR-08, NR-10, NR-11, NR-12, NR-13 |

**Total NOT DONE or PARTIAL:** 29 items (16 HT + 3 partial + 10 NR)
**Total DONE:** 8 items
**Total UNNECESSARY:** 1 item

---

## 3. TOP 5 ITEMS TO REMEDIATE

Ranked by probability-of-success impact:

### #1: HT-26 -- Iteration protocol after audit (5 min)

**Why critical:** Without this, Mode 4 PA findings have no structured path to fixes. The ceiling experiment found catastrophic void but had no fix iteration loop. This is documented as "highest-leverage improvement missed." A simple protocol: PA findings -> categorize (STRUCTURAL/COSMETIC/SKIP) -> builder fixes STRUCTURAL only -> lead verifies -> done.

**Remediation:** Add 5-line section to execution prompt after Gate 3:
```
## Post-Audit Fix Protocol
1. Weaver categorizes findings: STRUCTURAL (rebuild section) / COSMETIC (CSS tweak) / SKIP
2. Builder fixes ALL STRUCTURAL, TOP-3 COSMETIC. Max 2 fix cycles.
3. Lead verifies fixes pass K1-K7 after each cycle.
4. If STRUCTURAL findings remain after 2 cycles: document as known defects.
```

### #2: HT-18 -- Competitive skeleton build (5 min)

**Why critical:** Skeleton determines the entire page's spatial DNA. A single builder produces a viable skeleton ~70% of the time. Two builders selecting the best skeleton raises this to ~91%. The skeleton is the ONE artifact where competitive generation has maximum ROI because all subsequent passes build on it.

**Remediation:** Add to coordination spec: "Pass 1 produces TWO skeleton variants (Builder A and Builder B). Lead selects the skeleton with better spatial confidence (K1-K4 compliance + content-to-void ratio). Selected builder continues for Passes 2-5."

### #3: HT-12 + HT-21 (combined) -- Crown jewel exemplars + technique inventory (15 min)

**Why critical:** The builder has a mechanism catalog (abstract tools) but no quality calibration (concrete examples of flagship-level execution). CD-006 scored 39/40 and DD-006 is the most-referenced exploration. Extracting 10-20 lines of CSS from each, showing multi-channel encoding in practice, gives the builder a concrete quality target.

**Remediation:** Create `crown-jewel-exemplars.md` (40-50 lines) with:
- CD-006: 3 CSS snippets showing multi-mechanism sections (border-weight + zone background + spacing compression encoding the same semantic)
- DD-006: 3 CSS snippets showing fractal self-similarity at 3 scales
- For each: what mechanisms are operating, what semantic they encode, WHY they work together

### #4: HT-28 -- Spatial budget calculation mandate (3 min)

**Why critical:** The ceiling experiment's catastrophic void was partially caused by zones specified abstractly ("top third, middle third, bottom third") without height calculations. If the planner says "3 zones" but the total content only fills 60% of the expected height, void appears. Requiring explicit height targets ("Top zone: ~1800px, Middle: ~2800px, Bottom: ~1500px, Total: ~6100px") makes void detectable before build begins.

**Remediation:** Add to Gate 0 (plan.md) requirements: "Planner MUST estimate total page height at 1440px and per-zone heights. Content volume (word count) x density factor (sparse=1.5px/word, dense=1.0px/word) = estimated zone height. Total estimated height MUST be documented in plan.md."

### #5: HT-27 -- Builder self-scroll requirement (1 min)

**Why critical:** The ceiling builder never scrolled through the complete page. This 1-minute addition to the pre-submission self-check creates the moment where the builder EXPERIENCES the page as a reader before handing off to audit. Combined with K2 (content-to-void >= 70%), this transforms a measurement into an experience.

**Remediation:** Add to pre-submission self-check in execution prompt: "[ ] Self-scroll: Open page at 1440px. Scroll from top to bottom at reading speed. Does ANY section feel empty? Does the density arc match the CRESCENDO-with-EXHALE plan?"

---

## 4. ESTIMATED TOTAL REMEDIATION TIME

| Item | Effort | Deliverable |
|------|--------|-------------|
| HT-26 (iteration protocol) | 5 min | 5 lines added to execution prompt |
| HT-18 (competitive skeleton) | 5 min | 3 lines added to coordination spec |
| HT-12 + HT-21 (exemplars) | 15 min | New file: crown-jewel-exemplars.md (~50 lines) |
| HT-28 (spatial budget) | 3 min | 3 lines added to Gate 0 requirements |
| HT-27 (self-scroll) | 1 min | 1 line added to pre-submission checklist |
| **TOTAL** | **~29 min** | **4 edits + 1 new file** |

---

## 5. RISK ASSESSMENT: Proceeding Without Unaddressed HIGH Items

### Items ACCEPTED (not remediated)

**16 items accepted with reasoning:**

- **HT-01, HT-03, HT-04** (design system): Defensive CSS, extended constraints, flagship restrictions. K1-K7 kill rules cover critical failure modes. Remaining items add marginal constraint pressure. **Risk: LOW**

- **HT-06, HT-09** (skill): Root cause classification, temporal firewall. Mode 4's fresh-eyes principle and 9 independent auditors compensate. **Risk: LOW-MEDIUM**

- **HT-13, HT-14, HT-15, HT-16** (prompt): Auditor prompts, exemplar framing, negative rules, attention audit. PA SKILL.md serves as auditor prompt. Prompt is at 76% AU utilization with headroom. **Risk: LOW**

- **HT-19, HT-20, HT-22** (pipeline): Embedded auditor, calibration run, two-agent fixes. Lead's per-pass GO/REVISE authority provides reactive coverage. Middle-tier experiment was effective calibration. **Risk: MEDIUM**

- **HT-24, HT-25** (gates): Anti-ambition, continuation bias. Mechanism hard cap (14) and per-pass messaging create implicit checks. **Risk: LOW-MEDIUM**

- **NR-03 through NR-13** (nuance): All 10 nuance recovery items. These are refinement-level improvements. Pipeline's existing guards (divergence mandate, density map, Mode 4 PA, K1-K7 kills) cover the critical paths. **Risk: LOW**

### Probability Impact Estimate

**With all 5 remediations applied:**
- P(flagship meets DESIGNED threshold) = **65-75%**
- P(catastrophic void repeat) = **<10%** (K2+K3 kills + spatial budget + self-scroll)
- P(competitive skeleton improves outcome) = **~20%** absolute improvement over single builder

**Without any remediations (proceed as-is):**
- P(flagship meets DESIGNED threshold) = **55-65%**
- P(catastrophic void repeat) = **15-20%** (K2+K3 kills exist but no spatial budget prevention)
- P(skeleton quality issues) = **30%** (single builder, no competitive selection)

**Net impact of 29 minutes of remediation: +10-15% success probability.**

### Verdict

**REMEDIATE the top 5.** The 29-minute investment is low-cost, high-leverage. The remaining 24 items are safely accepted -- the execution prompt's kill rules, Mode 4 PA, and per-pass review cover their failure modes through different mechanisms.

---

## 6. ITEMS EXPLICITLY DISCARDED BY PROMPT ASSEMBLER (Cross-Reference)

The prompt assembly journal (Section 3) explicitly discarded these items, several of which overlap with HIGH items:

| Discarded Item | Overlapping HIGH Item | Assembler's Reasoning |
|----------------|----------------------|----------------------|
| Calibration run requirement | HT-20 | "Would add 2-3 hours. The enrichments ARE the calibration." |
| Anti-metronome interval percentages | NR-12 | "Too granular. 'Vary rhythm' is sufficient direction." |
| Weight targets 1-10 scale | NR-11 | "Novel scale not validated. Builder has enough scales to track." |
| CSS ALLOWLIST/PROHIBITLIST | (none direct) | "Too granular. Covered by prohibitions.md reference." |

These discards are DEFENSIBLE. The assembler's reasoning is sound: each discarded item would add attention cost (0.75-4 AU) without proportionate quality improvement.

---

**END HIGH ITEMS TRIAGE**
