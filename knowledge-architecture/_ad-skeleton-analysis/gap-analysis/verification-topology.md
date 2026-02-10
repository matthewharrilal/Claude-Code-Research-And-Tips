# AD VERIFICATION TOPOLOGY: AUDITOR-PER-ROLE ARCHITECTURE
## Every Major Role Gets Dedicated Verification with Fresh Eyes

**Author:** Verification Topology Designer
**Date:** 2026-02-09
**Inputs:** ad-skeleton-synthesis.md, ad-skeleton-audit.md, ad-skeleton-protocols.md, MASTER-AUDIT-REPORT.md, WEAVER-SYNTHESIS.md, CAPTAIN-FRESHEYES-REPORT.md, CAPTAIN-FIX-REPORT.md, MEMORY.md (all 4 team lessons)
**Purpose:** Design who audits each major role, when, with what information barriers, and at what cost

---

## 1. THE VERIFICATION GAP IN THE SKELETON

The current AD skeleton (Section 5) specifies audit for BUILD OUTPUT only:
- 3 Visual Audit agents (Playwright, per-page)
- 1 Structural Audit agent (DOM checks)
- 1 Fresh-Eyes agent (no spec, gestalt)
- 1 Weaver (cross-reference)
- 1 Synthesizer (compile report)

**What is NOT audited:**
- Convention Agent's spec (AD-CONVENTION-SPEC.md) -- the document ALL builders consume
- R-4 Evaluator's categorization (192 findings mapped to 6 ADs)
- R-2 Re-Mapper's conversion (25 findings re-targeted from OD to AD)
- Scribe output (provenance chain accuracy)
- Weaver state file (AD-BUILD-STATE.md accuracy)
- Lead's identity deltas (10-15 lines each, consumed by next wave's builders)
- Research packages (research-package-ad-{1-6}.md)

**Why this matters:** In the OD comprehensive audit, the SINGLE HIGHEST PRIORITY finding (Fix 1, CRITICAL) was a PIPELINE-MANIFEST R-2 count error -- 78 listed when only 27 exist. This was an ORIGINAL AUTHORING ERROR in a provenance document that was never audited. It propagated through every downstream consumer. The OD skeleton had no provenance auditor either. It took a 58-agent comprehensive audit to catch a mistake a single auditor could have found in Phase 0.

---

## 2. AUDITOR-PER-ROLE MAP

### 2.1 The Complete Topology

```
PHASE 0 VERIFICATION (runs WITHIN Phase 0, gates before Phase 1):

  Convention Agent -----> Convention Auditor
  R-4 Evaluator -------> Research Auditor
  R-2 Re-Mapper -------> Research Auditor (same agent)
  Research Packages ----> Research Auditor (spot-check)

PHASE 1 VERIFICATION (runs WITHIN each build wave, gates before next wave):

  Builder-{A,B} --------> Build Gate Checker (binary checks, not full audit)
  Scribe ----------------> Provenance Spot-Checker (1 per wave)
  Lead Identity Delta ---> Weaver (cross-checks delta against findings)

PHASE 2 VERIFICATION (dedicated audit phase):

  All 6 AD HTML files ---> Visual Auditor(s) + Structural Auditor + Fresh-Eyes
  All provenance docs ----> Provenance Auditor (NEW, dedicated)
  Weaver synthesis ------> Lead + Synthesizer (cross-check only)

PHASE 3 VERIFICATION (fix verification):

  Fixers ----------------> Programmatic Verifier + Visual Verifier (existing)
  Scribe (post-fix) -----> Provenance Spot-Checker (same as Phase 1, or new)
```

### 2.2 Role-by-Role Detail

#### CONVENTION AUDITOR (NEW -- Phase 0)
**What they audit:** AD-CONVENTION-SPEC.md + AD-SOUL-TEMPLATE.html
**When:** Immediately after Convention Agent completes, BEFORE Gate 0 passes
**Information barrier:** Reads OD-CONVENTION-SPEC.md, T1 synthesis files, soul discoveries. Does NOT read the Convention Agent's process notes or rationale.
**Output:** Convention Audit Report (PASS/FAIL with specific findings)

**Binary checks (15 checks):**
```
CA-01: Spec exists and is >= 300 lines                                    -- PASS/FAIL
CA-02: Every CSS value labeled T1 (research-backed) or T2 (agent-authored) -- PASS/FAIL
CA-03: :root token block present with exact values                         -- PASS/FAIL
CA-04: Border categories defined (Cat 1/2/3 with px values)               -- PASS/FAIL
CA-05: Type scale defined (h1-h6 + body + code + meta)                    -- PASS/FAIL
CA-06: Color palette defined with exactly the locked palette hex values    -- PASS/FAIL
CA-07: Spacing scale defined                                               -- PASS/FAIL
CA-08: Soul compliance block included (border-radius:0, box-shadow:none)  -- PASS/FAIL
CA-09: Per-AD CSS approach table present (Grid vs Flexbox per exploration) -- PASS/FAIL
CA-10: 768px responsive collapse rules per AD exploration                  -- PASS/FAIL
CA-11: Axis Transition Toolkit section exists                              -- PASS/FAIL
CA-12: Scroll-snap ruling (ALLOWED/BANNED) present                         -- PASS/FAIL
CA-13: CSS order property ruling present                                    -- PASS/FAIL
CA-14: AD-SOUL-TEMPLATE.html renders correctly (all convention CSS embedded)-- PASS/FAIL
CA-15: No T1 value contradicts OD-CONVENTION-SPEC.md (inherited values)    -- PASS/FAIL
```

**Rationale:** The convention spec is the MOST leveraged document in the entire AD phase. Every builder reads it. Every structural auditor checks against it. If the spec has an error, ALL downstream work inherits that error. The OD experience proved this: 3-dialect drift traced directly to building before conventions solidified. Auditing the spec itself (not just compliance with it) is the highest-leverage single verification we can add.

**Cost:** 1 agent, ~15 minutes. File-only (no Playwright needed). Near-100% write reliability.

---

#### RESEARCH AUDITOR (NEW -- Phase 0)
**What they audit:** R-4-AD-EVALUATION.md, r2-ad-mapping.md, research-package-ad-{1-6}.md
**When:** After R-4 Evaluator and R-2 Re-Mapper complete, BEFORE Gate 0 passes
**Information barrier:** Reads the original R-4 and R-2 source files directly. Does NOT read the evaluator's process notes. Performs independent spot-checks.

**Binary checks (10 checks):**
```
RA-01: R-4-AD-EVALUATION.md exists and categorizes >= 150/192 findings     -- PASS/FAIL
RA-02: r2-ad-mapping.md exists and maps >= 18/25 findings to AD targets    -- PASS/FAIL
RA-03: 6 research packages exist (research-package-ad-{1-6}.md)            -- PASS/FAIL
RA-04: Each research package >= 50 lines                                    -- PASS/FAIL
RA-05: Spot-check 5 random R-4 categorizations match source finding text   -- PASS/FAIL
RA-06: Spot-check 3 random R-2 mappings: target AD is plausible for finding-- PASS/FAIL
RA-07: No finding assigned to 0 ADs (uncategorized finding leak)           -- PASS/FAIL
RA-08: No R-2 SOUL FAIL finding mapped to an AD (2 SOUL FAILs must be excluded)-- PASS/FAIL
RA-09: Each research package references its source findings by ID          -- PASS/FAIL
RA-10: EXT-AXIS-* counts per AD >= 5 (minimum research density)            -- PASS/FAIL
```

**Spot-check methodology:** The auditor reads 5 random R-4 finding IDs from the source file, then checks whether the evaluator's categorization (which AD they're assigned to) is reasonable given the finding's content. This catches "spray categorization" (assigning findings randomly to meet quotas) without requiring full re-evaluation of all 192.

**Why spot-check, not full re-evaluation:** Full re-evaluation of 192 findings would require a second R-4 Evaluator (expensive, context-heavy). The spot-check catches systematic errors (miscategorization patterns) while accepting that individual edge cases will be caught during build (when builders read their research packages and find irrelevant findings).

**Cost:** 1 agent, ~20 minutes. File-only (no Playwright). Near-100% write reliability.

---

#### PROVENANCE AUDITOR (NEW -- Phase 2, dedicated)
**What they audit:** AD-outbound-findings.md, research-package citations in HTML, provenance chain documents
**When:** During Phase 2 audit wave, parallel with Visual/Structural
**Information barrier:** Reads source files independently. Does NOT read builder justifications.

**Binary checks (12 checks):**
```
PA-01: AD-outbound-findings.md exists and has >= 10 findings               -- PASS/FAIL
PA-02: Each finding has all 7 required fields                               -- PASS/FAIL
PA-03: No finding ID collisions (IDs are unique)                            -- PASS/FAIL
PA-04: Finding IDs within reserved ranges per builder                       -- PASS/FAIL
PA-05: Each AD HTML file has inline threading header                        -- PASS/FAIL
PA-06: Research Application Record present in each AD HTML                  -- PASS/FAIL
PA-07: Spot-check 5 citations: cited finding ID exists in source file      -- PASS/FAIL
PA-08: Spot-check 5 citations: cited element exists in the AD HTML file    -- PASS/FAIL
PA-09: PIPELINE-MANIFEST finding counts match AD-outbound-findings.md       -- PASS/FAIL
PA-10: RESEARCH-ACTIVE.md R-4 application rate >= 80%                       -- PASS/FAIL
PA-11: RESEARCH-ACTIVE.md R-2 application rate >= 72%                       -- PASS/FAIL
PA-12: EXT-RESEARCH-REGISTRY.md EXT-AXIS-* counts match actual              -- PASS/FAIL
```

**Anti-citation-theater checks (PA-07, PA-08):** These are the Weaver's anti-citation-theater checks (skeleton section 4.4) formalized as binary gates. The Provenance Auditor reads 5 random citation IDs from the Research Application Record of a random AD file, then:
1. Verifies the finding ID exists in the source research file (PA-07)
2. Verifies the cited HTML element/CSS property actually exists in the AD file (PA-08)

If either check fails, the citation is theater -- the builder claimed to apply research but didn't.

**Why separate from Structural Auditor:** The structural auditor checks DOM compliance (soul, borders, tokens). The provenance auditor checks DATA accuracy (counts, IDs, citations). Different skills, different tools. The OD comprehensive audit proved this: Captain-Structural found 25 findings about DOM; Captain-Provenance found 11 findings about data. Zero overlap.

**Cost:** 1 agent, ~25 minutes. File-only (no Playwright). Near-100% write reliability.

---

#### SCRIBE AUDITOR / PROVENANCE SPOT-CHECKER (NEW -- Phase 1 and Phase 3)
**What they audit:** Scribe output after each build wave (provenance file updates)
**When:** After Scribe completes in each build sub-phase, BEFORE wave gate passes
**Information barrier:** Reads the builder's output HTML and the scribe's provenance updates. Checks factual accuracy only.

**Binary checks (6 checks, quick):**
```
SC-01: Scribe updated RESEARCH-ACTIVE.md with this wave's applications     -- PASS/FAIL
SC-02: Scribe updated EXT-RESEARCH-REGISTRY.md if new EXT-* generated     -- PASS/FAIL
SC-03: Inline threading headers on new files match standard format          -- PASS/FAIL
SC-04: Finding count in AD-outbound-findings.md matches what builder reported-- PASS/FAIL
SC-05: No stale data in updated files (counts match actual file content)    -- PASS/FAIL
SC-06: Scribe wrote output file (existence check)                           -- PASS/FAIL
```

**Design decision: inline vs batch:** This runs INLINE (immediately after scribe, same wave). It takes ~5 minutes per wave, adds ~15 minutes total across 3 waves. The alternative (batch after all waves) risks accumulating scribe errors across waves -- exactly the pattern that caused the OD metadata drift (Pattern 1 in WEAVER-SYNTHESIS).

**Cost:** Same agent across all 3 waves OR 1 lightweight agent per wave. File-only. ~5 min per wave.

---

#### BUILD GATE CHECKER (exists in skeleton, enhanced here)
**What they audit:** Builder HTML output per wave
**When:** After builders complete, before wave gate passes (existing Sub-Phase D)
**Information barrier:** Reads the built HTML file + AD-CONVENTION-SPEC.md. Does NOT read builder process notes.

The skeleton already defines 13 per-wave gates (W-01 through W-13). The enhancement is:

**Additional checks (3 new):**
```
BG-14: Cross-wave consistency: :root tokens match Wave 1 files (Wave 2+ only)-- PASS/FAIL
BG-15: Research Application Record lists >= N citations per citation target  -- PASS/FAIL
BG-16: No unexplained new CSS custom properties (not in convention spec)    -- PASS/FAIL
```

BG-14 catches dialect drift between waves. BG-16 catches builders inventing ad-hoc tokens.

**Cost:** Already budgeted in skeleton. +3 checks, negligible additional time.

---

#### IDENTITY DELTA VERIFICATION (Weaver responsibility, not new agent)
**What they audit:** Lead's identity-delta-ad-wave{N}.md files
**When:** After Lead writes each delta, before next wave's builders consume it
**Information barrier:** Weaver reads the delta + the current wave's AD output. Cross-checks that delta references actual findings from the wave.

**Binary checks (4 checks):**
```
ID-01: Delta exists and is 10-15 lines                                     -- PASS/FAIL
ID-02: Delta references >= 1 specific finding from THIS wave               -- PASS/FAIL
ID-03: Delta poses >= 1 specific question targeting the NEXT wave's ADs    -- PASS/FAIL
ID-04: Delta does not contradict accumulated identity                       -- PASS/FAIL
```

**Why Weaver, not new agent:** The Weaver already maintains state and tracks cross-wave evolution. Adding 4 binary checks to the Weaver's existing responsibilities is cheaper than spawning a new agent. The Weaver already reads all wave outputs. This is 5 minutes of additional work per wave.

**Cost:** 0 additional agents. ~5 min additional per wave for Weaver.

---

#### WEAVER VERIFICATION (who watches the watchman?)
**What they audit:** Weaver's AD-BUILD-STATE.md accuracy
**When:** At end of Phase 1 (post-build), before Phase 2 (audit) begins
**Who does it:** Lead directly, not a new agent

**Binary checks (5 checks):**
```
WV-01: AD-BUILD-STATE.md lists correct number of completed ADs              -- PASS/FAIL
WV-02: Gate statuses in state file match Lead's own gate records            -- PASS/FAIL
WV-03: Finding count in state file matches AD-outbound-findings.md          -- PASS/FAIL
WV-04: Agent statuses in state file match TaskList                          -- PASS/FAIL
WV-05: Cross-references in state file cite real finding IDs                 -- PASS/FAIL
```

**Why Lead, not agent:** Creating an agent to audit the Weaver introduces an infinite regress (who audits the Weaver auditor?). The Lead is the natural terminus of the verification chain. The Lead already reads the state file for recovery. Adding 5 binary checks is ~5 minutes and terminates the regress.

**Cost:** 0 additional agents. ~5 min for Lead.

---

#### LEAD VERIFICATION (who audits the lead?)
**What they audit:** Lead's identity deltas and orchestration decisions
**Who does it:** Two mechanisms: (1) Weaver cross-checks factual claims, (2) Fresh-Eyes provides independent assessment

The Lead cannot be audited by a subordinate in the traditional sense (subordinates don't have Lead context). Instead:

1. **Weaver cross-checks Lead's factual claims** -- If Lead writes "AD-001 scored 36/40" in the identity delta, the Weaver verifies by reading the score in AD-001's Research Application Record. This catches factual errors.

2. **Fresh-Eyes audits the OUTPUT of Lead decisions** -- The Fresh-Eyes agent doesn't know the Lead made specific choices. It evaluates the result. If the result is poor (e.g., Wave 2 ADs look different from Wave 1 ADs), the Lead's identity delta or convention choices may be the root cause. Fresh-Eyes catches this indirectly.

3. **Gate system constrains Lead behavior** -- The Lead can only proceed when binary gates pass. Gates are physical (file existence, computed values), not judgment. This is the deepest form of Lead verification: the system architecture itself prevents Lead errors from propagating.

**Cost:** 0 additional agents. Embedded in existing Weaver and Fresh-Eyes roles.

---

## 3. INFORMATION BARRIERS

### 3.1 The Fresh-Eyes Principle Applied to All Auditors

Not every auditor needs full fresh-eyes isolation. The key insight from the comprehensive audit: **fresh-eyes constraint is most valuable for GESTALT evaluation, least valuable for COMPLIANCE checking.**

| Auditor | Sees | Does NOT See | Rationale |
|---------|------|-------------|-----------|
| Convention Auditor | OD-CONVENTION-SPEC, T1 files, soul discoveries | Convention Agent's rationale/notes | Must check inheritance accuracy, not creative choices |
| Research Auditor | Original R-4, R-2 source files | Evaluator's categorization methodology | Must verify output against source, not second-guess method |
| Build Gate Checker | AD-CONVENTION-SPEC, built HTML | Builder's iteration notes, research process | Checks compliance against spec, not creative process |
| Provenance Auditor | Source research files, HTML files, chain docs | Builder process, scribe process | Checks factual accuracy of citations and counts |
| Scribe Spot-Checker | Builder output, scribe output, source files | Scribe process notes | Checks data accuracy, not methodology |
| Fresh-Eyes | Full identity, accumulated knowledge | Convention spec values, builder justifications, ALL other audit findings | THE fresh-eyes constraint is the mechanism |
| Visual Auditor | Convention spec, HTML files (via Playwright) | Builder justifications, research packages | Checks visual compliance, not intent |
| Structural Auditor | Convention spec, HTML files (via JS evaluation) | Builder justifications | Checks DOM compliance |
| Weaver | Everything from all agents | Nothing withheld | Cross-reference requires complete picture |

### 3.2 Information Flow Diagram

```
                    T1 Synthesis + OD Specs + Soul
                              |
              +---------------+---------------+
              |                               |
     Convention Agent                  R-4/R-2 Evaluators
              |                               |
     Convention Auditor <---X--- (no access to evaluator work)
              |                    Research Auditor
              |                               |
              +----------- Gate 0 -----------+
                              |
                    Research Packages + Convention Spec
                              |
                       Builders (per AD)
                              |
              +-------+-------+-------+
              |       |       |       |
          Build Gate  Scribe  Weaver  Lead Delta
           Checker    |       |       |
              |    Scribe     |    Weaver
              |    Spot-Check |    (delta cross-check)
              |       |       |       |
              +---Gate 1/2/3--+-------+
                              |
              +-------+-------+-------+-------+
              |       |       |       |       |
           Visual  Structural Fresh-Eyes Provenance Weaver
           Auditor  Auditor   (isolated)  Auditor  (synthesis)
              |       |       |       |       |
              +------ Gate 4 (Audit Complete)--+
                              |
                    Fix + Verify + Scribe
                              |
                         Gate 5 (Fix Complete)
```

---

## 4. AUDITOR TIMING MATRIX

| Auditor | Timing | Rationale | Blocking? |
|---------|--------|-----------|-----------|
| Convention Auditor | INLINE (Phase 0, immediately after convention agent) | Convention spec error propagates to ALL builders. Must catch before build. | YES -- blocks Gate 0 |
| Research Auditor | INLINE (Phase 0, after evaluators complete) | Research misclassification means builders get wrong packages. | YES -- blocks Gate 0 |
| Build Gate Checker | INLINE (Phase 1, after each build wave) | Already in skeleton as Sub-Phase D. | YES -- blocks next wave |
| Scribe Spot-Checker | INLINE (Phase 1, after each scribe completes) | Catches provenance drift within the wave, not after. | YES -- blocks wave gate |
| Weaver Delta Check | INLINE (Phase 1, after Lead writes delta) | Delta consumed by next wave immediately. | YES -- blocks next wave |
| Weaver State Verify | BATCH (end of Phase 1, before Phase 2) | State file accuracy needed for audit phase orientation. | YES -- blocks Phase 2 |
| Visual Auditor | BATCH (Phase 2, Wave 2A) | Existing skeleton design, proven. | YES -- blocks Gate 4 |
| Structural Auditor | BATCH (Phase 2, Wave 2B) | Existing skeleton design, proven. | YES -- blocks Gate 4 |
| Fresh-Eyes | BATCH (Phase 2, Wave 2C) | Must run AFTER regular audit for cross-reference classification. | YES -- blocks Gate 4 |
| Provenance Auditor | BATCH (Phase 2, parallel with Visual/Structural) | File-only, no Playwright contention. Can run in parallel. | YES -- blocks Gate 4 |
| Post-Fix Scribe Check | INLINE (Phase 3, after scribe updates) | Same pattern as Phase 1 spot-check. | YES -- blocks Gate 5 |

### 4.1 Timing Design Principles

1. **INLINE verification for Phase 0** -- Convention and research errors have the HIGHEST blast radius (affect all downstream). Cost of inline checking (~35 min for 2 agents) is trivial compared to cost of rebuilding 6 ADs due to spec error.

2. **INLINE verification for Phase 1 scribes** -- The OD metadata drift (Pattern 1 in WEAVER-SYNTHESIS) was caused by NOT verifying provenance updates after each wave. The drift accumulated across waves and required a 58-agent comprehensive audit to detect.

3. **BATCH verification for Phase 2** -- Build output audit is inherently batch (can't audit a page until it's built). Visual, structural, fresh-eyes, and provenance audit run as existing batch phase.

4. **INLINE verification for Phase 3** -- Fix verification is already inline in the skeleton. Adding scribe spot-check adds ~5 minutes.

---

## 5. AUDITOR OUTPUT SPECIFICATIONS

### 5.1 Convention Auditor Output
```markdown
# CONVENTION-AUDIT-REPORT.md
## Result: PASS/FAIL
## Checks: 15 binary gates
## Findings: [list any FAIL items with specific errors]
## Recommendation: [what needs fixing before build can start]
```

### 5.2 Research Auditor Output
```markdown
# RESEARCH-AUDIT-REPORT.md
## Result: PASS/FAIL
## Checks: 10 binary gates
## Spot-Check Results:
| R-4 Finding ID | Source Text (10 words) | Evaluator's AD Target | Plausible? |
## Findings: [list any FAIL items]
```

### 5.3 Provenance Auditor Output
```markdown
# PROVENANCE-AUDIT-REPORT.md
## Result: PASS/FAIL
## Checks: 12 binary gates
## Citation Spot-Check Results:
| Citation ID | Source File Exists? | HTML Element Exists? | Theater? |
## Count Verification:
| Document | Claimed Count | Actual Count | Match? |
## Findings: [list any FAIL items]
```

### 5.4 Scribe Spot-Checker Output
```markdown
# SCRIBE-SPOT-CHECK-WAVE{N}.md
## Result: PASS/FAIL
## Checks: 6 binary gates
## Wave: {N}
## Findings: [list any FAIL items]
```

### 5.5 All Auditor Reports Follow PASS/FAIL-Only Pattern
Every output is a list of binary gates with results. No judgment, no recommendations beyond "fix X before proceeding." This follows the binary rule principle: 100% compliance on binary, ~0% on judgment.

---

## 6. SCALE IMPLICATIONS

### 6.1 Agent Count Impact

| Phase | Skeleton Count | With Auditors | Delta | Notes |
|-------|---------------|---------------|-------|-------|
| Phase 0 | 5 (Lead, Convention, R-4 Eval, R-2 Re-Map, Weaver) | 7 (+Convention Auditor, +Research Auditor) | +2 | Both file-only, run sequentially after their targets |
| Phase 1 (per wave) | 5 (Lead, Builder-A, Builder-B, Scribe, Weaver) | 6 (+Scribe Spot-Checker) | +1 | Lightweight, ~5 min per wave |
| Phase 2 | 8 (Lead, 3 Visual, 1 Structural, 1 Fresh-Eyes, Weaver, Synthesizer) | 9 (+Provenance Auditor) | +1 | File-only, runs parallel with Visual |
| Phase 3 | 5 (Lead, 3 Fixers, 1 Verifier) | 6 (+Scribe Spot-Checker) | +1 | Same lightweight agent as Phase 1 |
| **Peak concurrent** | **8** | **9** | **+1** | Phase 2 with Provenance Auditor |
| **Total unique across all phases** | **~21** | **~25** | **+4** | Convention Auditor, Research Auditor, Provenance Auditor, Scribe Spot-Checker |

### 6.2 Feasibility Assessment

- Peak concurrent goes from 8 to 9 -- still within the <17 flat-safe zone
- Total unique goes from ~21 to ~25 -- modest increase
- All 4 new agents are FILE-ONLY (no Playwright) -- ~95% write reliability
- No new Playwright contention (0 new Playwright agents)
- Convention Auditor and Research Auditor run sequentially in Phase 0 (not concurrent with each other)
- Provenance Auditor runs parallel with Visual in Phase 2 (no resource contention -- file-only vs Playwright)

### 6.3 Cost-Benefit Analysis

| Auditor | Cost (agents x time) | Benefit (what it prevents) |
|---------|---------------------|---------------------------|
| Convention Auditor | 1 agent x 15 min | Prevents 6 ADs built with wrong convention (cost: 3+ hours rebuild) |
| Research Auditor | 1 agent x 20 min | Prevents builders receiving wrong research packages (cost: 6 rebuilds) |
| Provenance Auditor | 1 agent x 25 min | Prevents metadata drift requiring 58-agent comprehensive audit |
| Scribe Spot-Checker | 1 agent x 15 min total | Prevents provenance accumulation errors across waves |
| **Total new cost** | **4 agents, ~75 min** | **Prevents ~4+ hours of rebuild and/or deferred audit** |

The Convention Auditor alone has an estimated 20:1 return (15 min prevention vs 5+ hours of downstream damage from a spec error).

---

## 7. THE OD LESSON APPLIED

### 7.1 Playwright Contention and Auditor Design

From comprehensive audit: only 2/13 visual workers got Playwright. This directly informs auditor design:

**Rule: ALL new auditors are FILE-ONLY.** No auditor added by this topology uses Playwright. This is deliberate:
- Convention Auditor: reads markdown files
- Research Auditor: reads markdown files
- Provenance Auditor: reads markdown and HTML source (not rendered)
- Scribe Spot-Checker: reads markdown files

The ONLY Playwright users remain the existing Visual Auditors (Phase 2, sequential per-page assignment). This preserves the proven contention mitigation from the skeleton.

### 7.2 Write Reliability

From comprehensive audit: file-only workers write reliably (~95%), Playwright workers write unreliably (~30-40%). By making all new auditors file-only, we stay in the high-reliability zone.

Every new auditor prompt MUST include:
```
CRITICAL: You MUST write your output file using the Write tool before you finish.
Your output file is: [exact path]
If you do not write this file, your work is LOST.
```

### 7.3 Recovery Pattern

From comprehensive audit: workers spawned by captains frequently complete without writing files. For AD auditors:

**Recommendation: Spawn auditors as DIRECT agents from Lead, not through a captain.** The comprehensive audit showed that single recovery agents (doing work directly) had 100% reliability vs captain-spawned workers (~60%). Since we have only 4 new auditors and they're simple (binary checks against files), they don't need captain coordination.

---

## 8. PLANTED VIOLATIONS: EXTENDED PROTOCOL

### 8.1 Build Audit Planted Violations (Existing -- 5 plants)

The skeleton already specifies 5 planted violations for the build audit:
1. border-radius: 4px on one callout
2. box-shadow on one code block
3. filter: drop-shadow on one header
4. Off-palette color on one label
5. 2px border on one section divider

### 8.2 Convention Auditor Planted Violations (NEW -- 3 plants)

Before the Convention Auditor runs, the Lead plants 3 deliberate errors in AD-CONVENTION-SPEC.md:

```
Plant C1: One T1-labeled value that contradicts OD-CONVENTION-SPEC.md
          (e.g., border-radius: 4px labeled as T1)
Plant C2: One T2 value missing its rationale
          (e.g., a spacing value with no explanation of why it was chosen)
Plant C3: One missing responsive collapse rule for a specific AD
          (e.g., AD-003 has no 768px rule)
```

**Detection scoring:** 3/3 = high confidence, 2/3 = moderate, 0-1/3 = convention auditor is not functional.

**Post-audit:** Remove all planted errors before Gate 0 passes. They're diagnostic.

### 8.3 Provenance Auditor Planted Violations (NEW -- 3 plants)

Before the Provenance Auditor runs (Phase 2), the Lead plants 3 deliberate errors:

```
Plant P1: One finding ID in AD-outbound-findings.md that doesn't match
          its builder's reserved range (e.g., Builder-A uses AD-F-015,
          which is in Builder-D's range)
Plant P2: One citation in a Research Application Record that references
          a non-existent finding ID (e.g., "Applied R4-999" when R4-999
          doesn't exist)
Plant P3: One count mismatch between PIPELINE-MANIFEST and actual
          AD-outbound-findings.md (e.g., manifest says 14 findings,
          file has 12)
```

**Detection scoring:** 3/3 = high confidence, 2/3 = moderate, 0-1/3 = provenance auditor is not functional.

**Post-audit:** Remove all planted errors before fix phase.

### 8.4 Research Auditor Planted Violation (NEW -- 1 plant)

Before the Research Auditor runs, plant 1 deliberate miscategorization:

```
Plant R1: One R-4 finding obviously assigned to the wrong AD
          (e.g., a finding about "F-pattern reading" assigned to
          AD-004 Spiral instead of AD-002 F-Pattern)
```

**Detection:** If the spot-check happens to sample this finding, it should catch it. If the spot-check misses it (sampling luck), that's acceptable -- spot-checks are probabilistic, not exhaustive.

### 8.5 Total Planted Violations Summary

| Target | Plants | When Planted | When Checked | When Removed |
|--------|--------|-------------|-------------|-------------|
| Build audit | 5 | Before Phase 2 | During Phase 2 | Before Phase 3 |
| Convention audit | 3 | Before Convention Auditor runs | During Phase 0 | Before Gate 0 passes |
| Provenance audit | 3 | Before Phase 2 | During Phase 2 | Before Phase 3 |
| Research audit | 1 | Before Research Auditor runs | During Phase 0 | Before Gate 0 passes |
| **Total** | **12** | | | |

---

## 9. THE AUDITOR HIERARCHY

### 9.1 Complete Verification Chain

```
Level 0: PRODUCT (6 AD HTML files)
  Verified by: Visual, Structural, Fresh-Eyes, Build Gate Checker

Level 1: INPUTS (Convention Spec, Research Packages)
  Verified by: Convention Auditor, Research Auditor

Level 2: PROCESS (Scribe output, finding IDs, citations)
  Verified by: Provenance Auditor, Scribe Spot-Checker

Level 3: STATE (Weaver's state file, Lead's identity deltas)
  Verified by: Lead (cross-checks Weaver), Weaver (cross-checks Lead)

Level 4: SYNTHESIS (Weaver cross-references, audit reports)
  Verified by: Lead (reads all reports, checks for contradictions)

Level 5: SYSTEM (all gates pass, git clean)
  Verified by: Gate 6 binary checks (physical enforcement)
```

### 9.2 Termination of Verification Chain

The regress terminates at three points:
1. **Lead verifies Weaver, Weaver verifies Lead** -- Mutual cross-checking at Level 3
2. **Gates are physical, not judgment** -- File existence, computed values, count comparisons. No agent can "fake" a gate pass.
3. **Fresh-Eyes is isolated** -- The only agent with genuine epistemic independence. Its findings cannot be primed by prior audit results.

### 9.3 What Remains Unverified

Being honest about what this topology does NOT verify:
- **Lead's taste in identity deltas** -- The delta cross-check verifies factual claims but not whether the delta asks the RIGHT questions. This is inherently a judgment call and cannot be binarized.
- **Fresh-Eyes quality** -- We set a threshold (>= 3 UNIQUE FRESH) but cannot verify the DEPTH of fresh-eyes findings. The comprehensive audit's fresh-eyes produced 6 UNIQUE FRESH findings of remarkable depth -- but we can't guarantee AD's fresh-eyes will match that quality.
- **Research categorization edge cases** -- Spot-checking catches systematic errors but not individual miscategorizations that happen to not be sampled.
- **Build quality beyond compliance** -- A page can pass all binary gates and still be mediocre. Only fresh-eyes addresses this, and only through gestalt, not measurement.

---

## 10. RECOMMENDED ADDITIONS TO SKELETON

### 10.1 Phase 0 Changes

Add to Gate 0 (after existing GATE 0-13):
```
GATE 0-14: Convention Audit Report exists and all 15 checks PASS           -- PASS/FAIL
GATE 0-15: Research Audit Report exists and all 10 checks PASS             -- PASS/FAIL
GATE 0-16: All planted convention violations detected (3/3)                -- PASS/FAIL (or note detection rate)
GATE 0-17: All planted convention violations REMOVED after audit           -- PASS/FAIL
```

### 10.2 Phase 1 Changes (per wave)

Add to Gates 1-3 (after existing GATE W-13):
```
GATE W-14: Scribe Spot-Check Report exists and all 6 checks PASS          -- PASS/FAIL
GATE W-15: Identity Delta verified by Weaver (4 checks PASS)              -- PASS/FAIL
GATE W-16: Cross-wave consistency check (Wave 2+ only)                     -- PASS/FAIL
```

### 10.3 Phase 2 Changes

Add to Gate 4 (after existing GATE 4-07):
```
GATE 4-08: Provenance Audit Report exists and all 12 checks PASS          -- PASS/FAIL
GATE 4-09: All planted provenance violations detected (3/3)                -- PASS/FAIL (or note rate)
GATE 4-10: All planted build violations detected (5/5)                     -- PASS/FAIL (or note rate)
GATE 4-11: Weaver state file accuracy verified by Lead (5 checks PASS)    -- PASS/FAIL
```

### 10.4 Phase 3 Changes

Add to Gate 5 (after existing GATE 5-08):
```
GATE 5-09: Post-fix Scribe Spot-Check PASS                                -- PASS/FAIL
GATE 5-10: All planted violations REMOVED from all files                   -- PASS/FAIL
```

---

## 11. SUMMARY: TOPOLOGY AT A GLANCE

### Agents Added
| Agent | Phase | Type | Playwright? | Write Reliability |
|-------|-------|------|-------------|-------------------|
| Convention Auditor | 0 | File-only | No | ~95% |
| Research Auditor | 0 | File-only | No | ~95% |
| Provenance Auditor | 2 | File-only | No | ~95% |
| Scribe Spot-Checker | 1, 3 | File-only | No | ~95% |

### Key Design Decisions
1. **All new auditors are file-only** -- avoids Playwright contention entirely
2. **Convention Auditor is the highest-leverage addition** -- single highest blast-radius document gets dedicated verification
3. **Provenance Auditor is separated from Structural** -- different domain expertise, proven non-overlapping in OD
4. **Scribe Spot-Checker runs inline (per-wave)** -- prevents metadata drift accumulation (the OD lesson)
5. **Weaver verifies Lead, Lead verifies Weaver** -- mutual cross-checking terminates the regress
6. **Fresh-Eyes remains the only judgment agent** -- all other verification is binary PASS/FAIL
7. **12 planted violations across 4 auditor types** -- calibrates audit accuracy, not just audit existence
8. **Direct spawn from Lead, not through captains** -- 100% write reliability vs ~60% through captain hierarchy

### What This Prevents
- Convention spec errors propagating to all 6 AD builds (prevented by Convention Auditor)
- Research miscategorization giving builders wrong packages (prevented by Research Auditor)
- Metadata drift accumulating across waves (prevented by Scribe Spot-Checker)
- Citation theater in Research Application Records (prevented by Provenance Auditor)
- Weaver state file inaccuracy (prevented by Lead cross-check)
- Lead identity delta factual errors (prevented by Weaver cross-check)
- Unknown audit thoroughness (prevented by 12 planted violations)

---

**END OF VERIFICATION TOPOLOGY**

**Total analysis: ~550 lines**
**New agents: 4 (Convention Auditor, Research Auditor, Provenance Auditor, Scribe Spot-Checker)**
**New gates: 11 (across Phases 0, 1, 2, 3)**
**New planted violations: 7 (3 convention + 3 provenance + 1 research)**
**Peak concurrent impact: +1 (8 -> 9, still within flat-safe zone)**
**Total unique agent impact: +4 (21 -> 25)**
