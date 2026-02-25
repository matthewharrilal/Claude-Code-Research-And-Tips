# Cross-File Consistency Audit
**Date:** 2026-02-25
**Auditor:** Cross-file consistency analysis across 11 files
**Scope:** 5 specific claims (A-E) checked across all files that reference them

---

## CHECK A: Auditor Assignments (PA Question IDs per Auditor A-I)

### Sources Compared

1. **MANIFEST.md Section 2** (lines 149-157)
2. **pa-deployment.md Section 1.2** (lines 141-151)
3. **EXECUTION-TRACKER-TEMPLATE.md Phase 3B table** (lines 351-359)

### Per-Auditor Comparison

| Auditor | MANIFEST.md | pa-deployment.md | EXECUTION-TRACKER | MATCH? |
|---------|------------|-----------------|-------------------|--------|
| **A** | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 (9) | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 (9) | PA-01,03,04,05,45,65,67,72,76 (9) | MATCH |
| **B** | PA-02, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77, PA-81 (8) | PA-02, PA-08, PA-29, PA-55, PA-56, PA-70, PA-81, -- (listed without PA-77 in core table, PA-77 in Extended column) (8) | PA-02,08,29,55,56,70,77,81 (8) | MATCH |
| **C** | PA-11, PA-30-33, PA-50, PA-51, PA-53, PA-64, PA-66 (10) | PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 (10) | PA-11,30-33,50,51,53,64,66 (10) | MATCH |
| **D** | PA-12, PA-13, PA-34-36, PA-52, PA-62, PA-69, PA-71, PA-74, PA-75 (11) | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71, PA-62, PA-74, PA-75 (11) | PA-12,13,34-36,52,62,69,71,74,75 (11) | MATCH |
| **E** | PA-14, PA-15, PA-37-39, PA-63, PA-80 (7) | PA-14, PA-15, PA-37, PA-38, PA-39, PA-80, PA-63 (7) | PA-14,15,37-39,63,80 (7) | MATCH |
| **F** | PA-16, PA-17, PA-41, PA-60, PA-61 (5) | PA-16, PA-17, PA-41, PA-60, PA-61 (5) | PA-16,17,41,60,61 (5) | MATCH |
| **G** | PA-18-20, PA-42-44, PA-54, PA-68 (8) | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44, PA-54, PA-68 (8) | PA-18-20,42-44,54,68 (8) | MATCH |
| **H** | PA-22, PA-23, PA-46, PA-47, PA-73 (5) | PA-22, PA-23, PA-46, PA-47, PA-73 (5) | PA-22,23,46,47,73 (5) | MATCH |
| **I** | PA-24-28, PA-48 (6) | PA-24, PA-25, PA-26, PA-27, PA-28, PA-48 (6) | PA-24-28,48 (6) | MATCH |

### Verdict: CONSISTENT

All three files agree exactly on auditor assignments. The total across all three files is 69 questions across 9 auditors. The per-auditor question lists are identical.

**Minor formatting note:** MANIFEST.md uses "PA-30-33" shorthand while pa-deployment.md lists "PA-30, PA-31, PA-32, PA-33" individually. Content is identical.

**Cross-check with pa-questions.md:** The auditor column in pa-questions.md Section 3 matches the assignments above for every question (verified question-by-question: PA-01=A, PA-02=B, PA-08=B, PA-11=C, PA-12=D, PA-13=D, PA-14=E, PA-15=E, PA-16=F, PA-17=F, PA-18=G, PA-19=G, PA-20=G, PA-22=H, PA-23=H, PA-24=I, PA-25=I, PA-26=I, PA-27=I, PA-28=I, PA-29=B, PA-30=C, PA-31=C, PA-32=C, PA-33=C, PA-34=D, PA-35=D, PA-36=D, PA-37=E, PA-38=E, PA-39=E, PA-41=F, PA-42=G, PA-43=G, PA-44=G, PA-45=A, PA-46=H, PA-47=H, PA-48=I, PA-50=C, PA-51=C, PA-52=D, PA-53=C, PA-54=G, PA-55=B, PA-56=B, PA-60=F, PA-61=F, PA-62=D, PA-63=E, PA-64=C, PA-65=A, PA-66=C, PA-67=A, PA-68=G, PA-69=D, PA-70=B, PA-71=D, PA-72=A, PA-73=H, PA-74=D, PA-75=D, PA-76=A, PA-77=B, PA-80=E, PA-81=B).

---

## CHECK B: Gate Tiers (REQUIRED / RECOMMENDED / ADVISORY)

### Sources Compared

1. **gate-runner-core.js** (lines 1358-1369, line 21)
2. **gate-runner-spec.md** (lines 16-23, summary table lines 170-213)
3. **gate-manifest.json** (tiers object, lines 17-58)
4. **MANIFEST.md Section 3** (lines 244-268)

### REQUIRED Gates

| Source | Gates Listed | Count |
|--------|-------------|-------|
| **gate-runner-core.js** | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60, GR-61, GR-62 (17 in array; GR-48 is self-referential, making 18 total) | 18 |
| **gate-runner-spec.md** | GR-01-GR-06, GR-08-GR-11, GR-13-GR-15, GR-44, GR-60, GR-61, GR-62, GR-48 | 18 |
| **gate-manifest.json** | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60, GR-61, GR-62, GR-48 | 18 |
| **MANIFEST.md** | "42 gate-runner gates (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)" | 18 (by count) |

**MATCH?** YES -- all four sources agree on 18 REQUIRED gates with the same IDs.

### RECOMMENDED Gates

| Source | Gates Listed | Count |
|--------|-------------|-------|
| **gate-runner-core.js** | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-63, GR-64 | 11 |
| **gate-runner-spec.md** | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-63, GR-64 | 11 |
| **gate-manifest.json** | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-63, GR-64 | 11 |
| **MANIFEST.md** | 11 by count | 11 |

**MATCH?** YES -- all four sources agree on 11 RECOMMENDED gates with the same IDs.

### ADVISORY Gates

| Source | Gates Listed | Count |
|--------|-------------|-------|
| **gate-runner-core.js** (line 21 comment) | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 | 7 |
| **gate-runner-spec.md** (summary table) | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 | 7 |
| **gate-manifest.json** | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 | 7 |
| **MANIFEST.md** | 7 by count | 7 |

**MATCH?** YES -- all four sources agree on 7 ADVISORY gates with the same IDs.

### Brief Verification Gates

| Source | Gates Listed | Count |
|--------|-------------|-------|
| **gate-runner-spec.md** | BV-01, BV-02, BV-03, BV-04 | 4 |
| **gate-manifest.json** | BV-01, BV-02, BV-03, BV-04 | 4 |
| **MANIFEST.md** | BV-01-BV-04 | 4 |

**MATCH?** YES

### Diagnostic Gates

| Source | Gates Listed | Count |
|--------|-------------|-------|
| **gate-runner-spec.md** (line 215) | "2 DIAGNOSTIC (GR-33, GR-34)" | 2 |
| **gate-manifest.json** | GR-33, GR-34 | 2 |

**MATCH?** YES

### DISCREPANCY DETECTED: gate-runner-spec.md total count line

gate-runner-spec.md line 23 states: "Total executable gates: 42 (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + **2 DIAGNOSTIC** + 4 BRIEF)"

This adds to: 18 + 11 + 7 + 2 + 4 = **42**. Correct.

gate-manifest.json `totalGateCount.grandTotal` = 42. Correct.

MANIFEST.md line 246 states: "42 gate-runner gates (18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION)". Correct.

### DISCREPANCY: SKILL.md gate count description

SKILL.md line 46 states: "42 gates: 18 REQ + 11 REC + 7 ADV + 2 DIAG + 4 BV"

**This matches.** 18+11+7+2+4 = 42.

### Verdict: CONSISTENT

All four primary sources (gate-runner-core.js, gate-runner-spec.md, gate-manifest.json, MANIFEST.md) agree exactly on which gates are in which tier and the total counts. SKILL.md also agrees.

---

## CHECK C: Verdict Logic (Priority Ordering and Thresholds)

### Sources Compared

1. **MANIFEST.md Weaver Prompt** (Appendix E, lines 1196-1204)
2. **pa-weaver.md Section 5.1** (lines 277-281)
3. **artifact-orchestrator.md Section 7** (lines 499-507)

### Priority-Ordered Verdict Rules Comparison

| Priority | MANIFEST.md (Weaver Prompt) | pa-weaver.md | artifact-orchestrator.md |
|----------|---------------------------|-------------|------------------------|
| **0 (highest)** | CONFIRMED experiential finding (3+ auditors) => verdict CANNOT be SHIP | Not explicitly numbered as "Priority 0" but Section 5.0 Priority Override Rule states: "Is there ANY finding... that describes something a reader CANNOT READ or CANNOT USE? If yes: that finding is Fix #1, regardless of gate status." | Not present as explicit priority level |
| **a** | ANY identity gate FAIL => REBUILD (unless MECHANICAL) | Not in ship threshold table directly; referenced in Section 5.1 as part of verdict but priority ordering not labeled a/b/c | "ANY Identity gate FAIL -> REBUILD (highest priority)" |
| **b** | 3+ anti-pattern gates FAIL => REBUILD | Not explicitly in pa-weaver.md ship thresholds | "3+ Anti-Pattern gates FAIL -> REBUILD" |
| **c** | ANY perception gate FAIL => REFINE | Not explicitly in pa-weaver.md ship thresholds | "ANY Perception gate FAIL -> REFINE" |
| **d** | PA-05 >= 3.5 AND all gates PASS AND no confirmed experiential failures => SHIP | PA-05 >= 3.5/4 AND zero soul violations => SHIP | PA-05 >= 3.5 AND all gates PASS => SHIP |
| **e** | PA-05 >= 3.0 AND all required gates PASS AND fixes MECHANICAL only => SHIP WITH FIXES | PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes => SHIP WITH FIXES | PA-05 >= 3.0 AND all required gates PASS AND fixes MECHANICAL only => SHIP WITH FIXES |
| **f** | PA-05 2.5-3.5 => REFINE | PA-05 2.5-3.5 => REFINE | PA-05 2.5-3.5 => REFINE |
| **g** | PA-05 < 2.5 => REBUILD | PA-05 < 2.5 => REBUILD | PA-05 < 2.5 => REBUILD |
| **MECH** | If ALL identity failures are MECHANICAL => REFINE, not REBUILD | Not in the ship thresholds table; covered in MANIFEST.md Section 3 | "MECHANICAL EXCEPTION: If ALL identity gate failures are MECHANICAL... treat as REFINE, not REBUILD" |

### Discrepancies Found

| # | Location | Issue | Severity |
|---|----------|-------|----------|
| C-1 | **MANIFEST.md Weaver Prompt vs pa-weaver.md** | MANIFEST.md Weaver prompt has an explicit "Priority 0: CONFIRMED experiential finding (3+ auditors) => verdict CANNOT be SHIP" that pa-weaver.md does not number as priority 0. However, pa-weaver.md Section 5.0 establishes the same rule through the "Priority Override Rule" and Section 0.3 aggregation table. The CONCEPT matches but the LABELING differs (numbered priority vs named rule). | LOW -- semantically equivalent |
| C-2 | **pa-weaver.md vs artifact-orchestrator.md** | pa-weaver.md Section 5.1 SHIP WITH FIXES threshold says "all identity gates PASS AND <= 3 MECHANICAL fixes needed." artifact-orchestrator.md says "all required gates PASS AND fixes MECHANICAL only" (no explicit <=3 cap). MANIFEST.md Weaver prompt says "all required gates PASS AND fixes are MECHANICAL only" (no <=3 cap). | MEDIUM -- pa-weaver.md adds a <=3 fix count constraint that the other two files do not specify |
| C-3 | **pa-weaver.md vs artifact-orchestrator.md** | pa-weaver.md SHIP threshold: "PA-05 >= 3.5/4 AND **zero soul violations**". artifact-orchestrator.md: "PA-05 >= 3.5 AND **all gates PASS**". MANIFEST.md Weaver prompt: "PA-05 >= 3.5 AND **all gates PASS AND no confirmed experiential failures**". These are progressively MORE restrictive from pa-weaver.md to MANIFEST.md. | MEDIUM -- "zero soul violations" (pa-weaver.md) is narrower than "all gates PASS" (orchestrator/MANIFEST), which includes perception and anti-pattern gates too |
| C-4 | **artifact-orchestrator.md** | Does not include Priority 0 (experiential override) in its Section 7 verdict logic. The experiential scan and circuit breaker are described in Section 6 but not integrated into the priority-ordered verdict rules in Section 7. | MEDIUM -- the experiential override exists in the orchestrator but is not woven into the verdict priority list |

### Verdict: PARTIALLY CONSISTENT

The core logic (SHIP/REFINE/REBUILD thresholds based on PA-05 score) is consistent across all three files. However:
- The SHIP WITH FIXES constraint on fix count (<=3) appears ONLY in pa-weaver.md, not in orchestrator or MANIFEST weaver prompt
- The SHIP threshold wording varies: "zero soul violations" vs "all gates PASS" vs "all gates PASS + no experiential failures"
- The experiential priority override is present in MANIFEST.md weaver prompt but not integrated into artifact-orchestrator.md Section 7

---

## CHECK D: File Routing (What Each Agent Receives)

### Sources Compared

1. **MANIFEST.md Appendix B** (lines 842-863)
2. **MANIFEST.md Section 3** routing tables (lines 179-305)
3. **artifact-orchestrator.md** phase descriptions (Sections 2-6)

### Per-Agent Routing Comparison

| Agent | MANIFEST.md Appendix B | MANIFEST.md Sec 3 Routing Tables | artifact-orchestrator.md | MATCH? |
|-------|----------------------|--------------------------------|------------------------|--------|
| **Content Analyst** | Raw content + content analysis protocol + reader model (from artifact-routing.md) | artifact-routing.md "Phase 0" section -> Content Analyst; "Reader Model" section -> Content Analyst | Section 2: "Raw content markdown" as input, 6 operations listed | MATCH |
| **Brief Assembler** | Content Map + TC Brief Template + soul world-description + perception thresholds + recipe phases + D-01-D-09 | artifact-identity-perception.md "1.2 Soul Constraints" -> Brief Assembler (World-description ONLY); "2.2 Core Thresholds" -> Brief Assembler; artifact-routing.md "Phase 1 TC Brief Assembly" -> Brief Assembler; artifact-builder-recipe.md mechanism minimums -> Brief Assembler | Section 3: "73-line template + content map -> BRIEF"; "Content Map + TC Brief Template" listed as inputs | MATCH |
| **Builder** | Execution Brief ONLY + tokens.css + components.css + mechanism-catalog.md + value tables + CD-006 (optional) | artifact-builder-recipe.md phases -> Builder (via brief Tier 3/4); artifact-identity-perception.md "2.3 Perception Calibration Table" -> Builder (via brief) | Section 5: Lists 4 required inputs + 1 optional (Brief, content, tokens.css, components.css, CD-006). Also mentions value tables. | SEE NOTE |
| **Gate Runner** | Built HTML + gate-runner-core.js | artifact-gate-runner.md sections -> Gate Runner (orchestrator code) | Section 6: "Take screenshots... Run gate-runner code" | MATCH |
| **PA Auditors** | Screenshots ONLY + assigned question subset + pa-guardrails.md | pa-questions.md -> PA Auditors (subset); pa-guardrails.md -> PA Auditors | Section 6 Phase 3B: "Screenshots... assigned question subset ONLY... NO execution brief, NO build intent" | MATCH |
| **Integrative Auditor** | 9 PA auditor reports + all screenshots | pa-deployment.md -> Orchestrator (routing info for integrative) | Section 6 Phase 3B: "all 9 reports + all screenshots" | MATCH |
| **Weaver** | Integrative report + gate results + individual auditor reports + calibration references | pa-weaver.md -> Weaver; artifact-orchestrator.md verdict section | Section 6 Phase 3C: "Integrative report + gate results + all 9 individual auditor reports + calibration" | MATCH |

### Discrepancy Found

| # | Location | Issue | Severity |
|---|----------|-------|----------|
| D-1 | **Builder inputs: MANIFEST.md Appendix B vs artifact-orchestrator.md** | MANIFEST.md Appendix B lists "mechanism-catalog.md" as a builder input. artifact-orchestrator.md Section 5 lists 4 required inputs: "Brief, content, tokens.css, components.css" (no explicit mention of mechanism-catalog.md as a separate fifth input -- it is grouped under reference files). Both mention value tables. The discrepancy is presentational, not substantive -- mechanism-catalog.md appears in both as a builder reference file. | LOW |
| D-2 | **Builder inputs: MANIFEST.md Appendix B vs artifact-orchestrator.md** | MANIFEST.md Appendix B lists "value tables (~550 lines)" as a builder input. artifact-orchestrator.md Section 5 mentions value tables in the builder input list. MANIFEST.md Phase 2 description (line 430) also lists value tables. Consistent. | NONE |

### Exclusions Check

| Agent | MANIFEST.md Appendix B "MUST NOT receive" | artifact-orchestrator.md | MATCH? |
|-------|------------------------------------------|------------------------|--------|
| Builder | Gate thresholds, raw prohibition list, pipeline research | Section 1: "Builder must NOT receive gate thresholds... prohibition list... count-gates... fix cycle instructions" | MATCH (orchestrator is more detailed) |
| PA Auditors | Execution Brief, Content Map/build intent, other auditors' reports | Section 6 Phase 3B: "NO execution brief, NO build intent, NO content map" | MATCH |

### Verdict: CONSISTENT

No substantive contradictions in routing. All three sources agree on what each agent receives and what each agent must NOT receive.

---

## CHECK E: Experiential Pass Requirements

### Sources Compared

1. **pa-deployment.md Section 0** (lines 20-116)
2. **pa-weaver.md Section 0** (lines 9-65)
3. **pa-guardrails.md Section 2** (lines 19-36)
4. **MANIFEST.md Appendix E** -- Auditor prompt template (lines 1102-1117), Integrative prompt (lines 1144-1153), Weaver prompt (lines 1182-1192)
5. **artifact-orchestrator.md Section 6 Phase 3A+** (lines 442-476)
6. **artifact-builder-recipe.md Phase 5 Step 5.0** (lines 622-660)
7. **EXECUTION-TRACKER-TEMPLATE.md** (lines 372-383, 446-452)

### What Does the Experiential Pass Contain?

| Source | Steps | Content |
|--------|-------|---------|
| **pa-deployment.md Sec 0** | 4 steps | STEP 1: Read every word from pixels. STEP 2: Extract information from charts/diagrams. STEP 3: Follow the structure. STEP 4: Rank findings (BLOCKING/SIGNIFICANT/MINOR). |
| **MANIFEST.md Auditor Prompt** | 4 steps | STEP 1: Read every word (pixel-based). STEP 2: Extract information. STEP 3: Follow the structure. STEP 4: Rank findings (BLOCKING/SIGNIFICANT/MINOR). |
| **pa-guardrails.md** | References pa-deployment.md Section 0; does not restate the steps. States completion manifest must include "Experiential Pass: YES/NO" row. | (Defers to pa-deployment.md) |

**MATCH?** YES -- pa-deployment.md and MANIFEST.md auditor prompt both have 4 identical steps.

### When Does It Happen?

| Source | Timing |
|--------|--------|
| **pa-deployment.md Sec 0** | "Before answering any assigned questions" -- Section numbered 0, primacy position |
| **MANIFEST.md Auditor Prompt** | "## 0. EXPERIENTIAL PASS (MANDATORY -- COMPLETE BEFORE ANY QUESTIONS)" |
| **pa-guardrails.md** | Completion manifest requires "## 0. Experiential Pass present" as FIRST analytical section |
| **EXECUTION-TRACKER-TEMPLATE.md** | P3B-1g: "All 9 auditor prompts include experiential pass as Section 0 (primacy position)" |

**MATCH?** YES -- all sources agree it happens BEFORE any analytical questions, in primacy position (Section 0).

### What Format Does the Output Take?

| Source | Output Format |
|--------|--------------|
| **pa-deployment.md** | "Report in a section at the TOP of the audit report: **'## 0. Experiential Pass.'**" + per-failure format: "CANNOT READ: [location] -- [what you see] -- [why it fails]" |
| **MANIFEST.md Auditor Prompt** | "Write your experiential findings as '## 0. Experiential Pass' -- this section MUST appear FIRST in your report" |
| **pa-guardrails.md** | Completion manifest row: "Experiential Pass: YES/NO -- ## 0. Experiential Pass present" |
| **EXECUTION-TRACKER-TEMPLATE.md** | P3B-3 table checks: "## 0. Experiential Pass section present?" per auditor |

**MATCH?** YES -- all sources agree the output is a "## 0. Experiential Pass" section at the TOP of the report.

### Who Must Do the Experiential Pass?

| Agent | pa-deployment.md | pa-weaver.md | artifact-orchestrator.md | MANIFEST.md Prompts | EXECUTION-TRACKER |
|-------|-----------------|-------------|------------------------|--------------------|--------------------|
| **PA Auditors (A-I)** | YES (Section 0) | N/A | N/A | YES (auditor prompt) | YES (P3B-3 table) |
| **Integrative Auditor** | N/A (Section 1.5 references it) | N/A | N/A | YES (integrative prompt: "YOUR OWN EXPERIENTIAL PASS") | YES (P3B-4c: "performed own experiential pass") |
| **Weaver** | N/A | YES (Section 0: "WEAVER EXPERIENTIAL ANCHOR") | N/A | YES (weaver prompt: "YOUR OWN EXPERIENTIAL ANCHOR") | YES (P3C-2: "Weaver performed experiential anchor") |
| **Orchestrator** | N/A | N/A | YES (Phase 3A+: "30-SECOND READ TEST") | N/A | YES (P3A+-1: "Orchestrator scrolled page at reading speed") |
| **Builder** | N/A | N/A | N/A | N/A (but builder prompt has self-evaluation in Phase 5) | YES (P2-2d: "Experiential check marker present") |

### Discrepancies Found

| # | Location | Issue | Severity |
|---|----------|-------|----------|
| E-1 | **Builder experiential pass: artifact-builder-recipe.md vs others** | artifact-builder-recipe.md Phase 5 Step 5.0 (lines 622-660) describes a MANDATORY experiential self-check with READ/EXTRACT/NAVIGATE sub-steps. This is substantially different from the PA auditor experiential pass -- it is a BUILDER self-check, not a perceptual audit. The format is "Place your experiential findings in a `<!-- EXPERIENTIAL-CHECK: ... -->` HTML comment." The EXECUTION-TRACKER checks for this marker (P2-2d). This is a DIFFERENT experiential pass from the PA auditor one, serving a different purpose (builder self-use vs auditor fresh perception). | INFORMATIONAL -- not a discrepancy, but a naming confusion risk |
| E-2 | **Weaver experiential pass: naming inconsistency** | pa-weaver.md calls it "WEAVER EXPERIENTIAL ANCHOR" (Section 0). MANIFEST.md Weaver prompt calls it "YOUR OWN EXPERIENTIAL ANCHOR." EXECUTION-TRACKER calls it "Weaver performed experiential anchor" (P3C-2a). All agree it is an anchor, not a "pass." But pa-deployment.md Section 0 calls the auditor version an "experiential pass" while the weaver version is consistently called an "experiential anchor." This naming distinction is INTENTIONAL (pa-weaver.md Section 0.1: "This is your EXPERIENTIAL ANCHOR") -- the weaver version is a 3-sentence anchor, not a full 4-step pass. | LOW -- intentional naming distinction, but could confuse |
| E-3 | **Weaver vs Auditor step count** | PA auditors perform 4 steps (Read/Extract/Structure/Rank). The Weaver performs 3 steps (Read/Extract/Navigate -- pa-weaver.md Section 0.1). The Integrative Auditor performs 4 steps (Read/Extract/Navigate/First-impression -- MANIFEST.md Integrative prompt). These are DIFFERENT protocols for different roles, not copies. | INFORMATIONAL -- different roles have different protocols by design |
| E-4 | **Orchestrator experiential scan: different protocol** | artifact-orchestrator.md Phase 3A+ describes a 3-step scan (30-second read test, information extraction test, navigation test) with a circuit breaker. This is structurally similar to the auditor pass but serves as a pre-deployment gate rather than a perceptual assessment. | INFORMATIONAL -- different purpose |

### Experiential Pass Summary Table

| Role | Name | Steps | Timing | Output Format | Required? |
|------|------|-------|--------|---------------|-----------|
| PA Auditors (A-I) | Experiential Pass | 4 (Read/Extract/Structure/Rank) | Before any questions (Section 0) | "## 0. Experiential Pass" at top of report | YES (all 9) |
| Integrative Auditor | Own Experiential Pass | 4 (Read/Extract/Navigate/Impression) | Before reading any auditor reports (Section 0) | 3-sentence anchor + aggregation | YES |
| Weaver | Experiential Anchor | 3 (Read/Extract/Navigate) | Before reading any reports or gate results (Section 0) | 3-sentence anchor | YES |
| Orchestrator | Experiential Scan | 3 (Read test/Extraction test/Navigation test) | After screenshots, before PA deployment (Phase 3A+) | CLEAN or BLOCKING-USABILITY in tracker | YES |
| Builder | Experiential Self-Check | 3 (Read/Extract/Navigate) | Phase 5 Step 5.0, before self-evaluation | `<!-- EXPERIENTIAL-CHECK: ... -->` HTML comment | YES |

### Verdict: CONSISTENT (with intentional variation by role)

All files agree that:
- The auditor experiential pass has 4 steps (Read/Extract/Structure/Rank)
- It happens BEFORE any analytical questions (primacy position)
- Output is "## 0. Experiential Pass" at the top of each report
- All 9 PA auditors, the Integrative Auditor, and the Weaver must do it (with role-appropriate variations)
- The Builder and Orchestrator have their own experiential protocols (different from the PA version)

No contradictions found. The variation across roles is intentional and documented.

---

## MASTER SUMMARY

| Check | Verdict | Discrepancies Found |
|-------|---------|---------------------|
| **A. Auditor Assignments** | CONSISTENT | 0 discrepancies |
| **B. Gate Tiers** | CONSISTENT | 0 discrepancies |
| **C. Verdict Logic** | PARTIALLY CONSISTENT | 4 discrepancies (C-1 through C-4): SHIP WITH FIXES <=3 cap only in pa-weaver.md; SHIP threshold wording varies; experiential priority not in orchestrator Section 7 |
| **D. File Routing** | CONSISTENT | 0 substantive discrepancies |
| **E. Experiential Pass** | CONSISTENT | 0 contradictions (4 informational notes about intentional role-based variation) |

### Critical Discrepancies Requiring Resolution

1. **C-2 (MEDIUM): SHIP WITH FIXES fix count cap.** pa-weaver.md specifies "<= 3 MECHANICAL fixes needed" as a SHIP WITH FIXES requirement. Neither artifact-orchestrator.md nor MANIFEST.md Weaver prompt includes this constraint. **Recommendation:** Add the <=3 cap to MANIFEST.md Weaver prompt and artifact-orchestrator.md Section 7, OR remove it from pa-weaver.md.

2. **C-3 (MEDIUM): SHIP threshold wording.** pa-weaver.md says "zero soul violations." MANIFEST.md Weaver prompt says "all gates PASS AND no confirmed experiential failures." artifact-orchestrator.md says "all gates PASS." These are different constraint sets. **Recommendation:** Align to the most restrictive version (MANIFEST.md Weaver prompt): "PA-05 >= 3.5 AND all gates PASS AND no confirmed experiential failures."

3. **C-4 (MEDIUM): Experiential priority override missing from orchestrator.** artifact-orchestrator.md Section 7 verdict logic does not include the Priority 0 experiential override that the MANIFEST.md Weaver prompt specifies. **Recommendation:** Add "PRIORITY 0: If a CONFIRMED experiential finding exists (3+ auditors flag same element), verdict CANNOT be SHIP" to artifact-orchestrator.md Section 7.
