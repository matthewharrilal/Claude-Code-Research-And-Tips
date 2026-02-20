# 15 -- Orchestrator Logic Cross-Reference Verification

**Agent:** orchestrator-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #43
**Method:** Compare each orchestrator step (from 04-orchestrator-research.md) against EVERY team architecture that produced good results.

---

## REFERENCE ARCHITECTURES (Ground Truth)

**CRITICAL FRAMING:** CD-006 is Ceiling tier, NOT Flagship. Flagship 4/4 has NEVER been achieved. CD-006 lacks unified pervading metaphor, has static (not dynamic) multi-coherence, and achieves 4/5 strong scales not 5/5. The orchestrator targets BEYOND CD-006 -- Tier 5 questions are the instrument that pushes into Flagship territory where N=0 evidence exists.

| Team | Result | Builder Model | Agent Count | Messaging | Key Success Factor |
|------|--------|---------------|-------------|-----------|-------------------|
| **CD-006** (CEILING, not target) | 39/40, PA-05 ~3.5/4 | 1 Opus | 1 (solo) | N/A | ~50 lines instruction, Opus creative freedom, 4-stage pipeline context |
| **Middle Experiment** | PA-05 4/4, D3 3/3 | Lead (Opus) built directly | 8 total | Zero SendMessage | RECIPE format (100-line sequenced steps), per-category mechanisms, file-bus topology |
| **Flagship Remediation** | PA-05 2.5/4 (+1.0) | 1 Opus builder | 16+ total | File-based only | Structured spec (1,025 lines), deallocation-first, same-builder fix cycle |
| **Mode 4 PA** | 48 questions answered, 9/9 found whitespace void | N/A (audit only) | 12 total | File-based only | Screenshot pre-capture (102 images), 9 parallel auditors, weaver synthesis |

---

## STEP-BY-STEP VERIFICATION

### STEP 0: INTAKE

**Orchestrator design:** Read content, validate path, no tier classification (ALWAYS FLAGSHIP).

| Architecture | What Actually Happened | Match? |
|-------------|----------------------|--------|
| CD-006 | Content was part of the pipeline context -- builder had 4-stage accumulated knowledge | DIVERGES -- CD-006 had rich context from prior stages, not just a markdown file |
| Middle | Content selected FIRST in 01-content-selection.md, then fed to builder in 02-build-plan.md | MATCHES -- content-first, then build |
| Remediation | Content already existed (07-intentionality.html being remediated) | N/A -- remediation, not creation |
| Mode 4 PA | Page already built -- audit only | N/A |

**FINDING: MATCH with 1 WARNING.**
The orchestrator correctly reads content first. WARNING: CD-006's success came from 4 accumulated stages of context, not just raw content. The conventions brief must compensate for this missing context. The brief IS the mechanism to transfer accumulated intelligence to a builder that has no pipeline history.

---

### STEP 1: SPAWN OPUS BUILDER

**Orchestrator design:** Always Opus, reads content + conventions brief (~225 lines) + 4 reference files, creative authority clause.

| Architecture | Builder Model | Instruction Volume | Creative Freedom | Match? |
|-------------|---------------|-------------------|-----------------|--------|
| CD-006 | **Opus** | ~50 lines | Maximum -- minimal constraints | MATCHES model, DIVERGES on volume |
| Middle | Lead agent (Opus) did the building directly -- no separate builder spawned | ~100 lines RECIPE (02-build-plan.md) | Moderate -- recipe directed but allowed override | MATCHES model+format, differs on spawn |
| Remediation | **Opus** (sole builder) | 1,025 lines spec + manifest files | Moderate -- structured spec with overrides allowed | MATCHES model, volume HIGHER than proposed |
| Mode 4 PA | N/A | N/A | N/A | N/A |

**FINDING: MATCH on model (always Opus). 2 WARNINGS.**

WARNING 1: CD-006 succeeded with ~50 lines of instruction. The orchestrator proposes ~225 lines conventions brief + ~2,120 total lines including reference files. This is 42x more instruction than CD-006. The Middle experiment succeeded with ~100 lines, which is closer to proposed scope. The risk is not volume per se but CHECKLIST vs RECIPE format. If the 225-line brief reads as a checklist, it will produce 1.5/4. If it reads as a recipe with sequenced steps, it can produce 4/4. This is THE critical format question.

WARNING 2: CD-006 was built by the lead agent directly (no separate spawned agent). The Middle experiment was also built by the lead directly. Only the Remediation used a separate spawned Opus builder. The spawned builder pattern is LESS PROVEN than lead-builds-directly. However, the orchestrator design requires a spawned builder (the orchestrator is thin routing, not building). This is acceptable because the Remediation builder DID succeed at improving the page by +1.0 PA-05 points, confirming spawned Opus builders can produce quality work.

**FILE ACCESS VERIFICATION:**

| File in Orchestrator Design | CD-006 Had Access? | Middle Had Access? | Remediation Had? |
|----------------------------|-------------------|-------------------|-----------------|
| content.md | Yes (accumulated context) | Yes (01-content-selection.md) | Yes (existing HTML) |
| conventions brief | NO -- did not exist | Informal (build plan = recipe) | YES (1,025-line spec) |
| tokens.css | Yes (pipeline context) | Yes (read at step 2 of protocol) | Yes |
| prohibitions.md | Yes (pipeline context) | Yes (read at step 1 of protocol) | Yes |
| mechanism-catalog.md | Yes (pipeline context) | Yes (read at step 4 of protocol) | Not directly (spec contained mechanism info) |
| merged-components.css | Yes (pipeline context) | Not explicitly | Not directly |

**FINDING: File access MATCHES proven patterns.** The 6-file manifest is a superset of what successful teams actually used. No critical file is missing. The one concern: CD-006 had mechanism-catalog access via pipeline context, and the Middle experiment read it explicitly -- both succeeded. Including it in the manifest is correct.

---

### STEP 2: GATE RUNNER

**Orchestrator design:** Serve HTML via HTTP, run 15 programmatic gates via Playwright `page.evaluate()`, ~15 seconds.

| Architecture | Gate Method | Gate Count | Timing | Match? |
|-------------|-----------|-----------|--------|--------|
| CD-006 | No programmatic gates (manual quality assessment) | 0 | N/A | DIVERGES -- CD-006 had zero gates |
| Middle | Lead ran programmatic audit directly via Playwright | ~10 checks (Critical-10 + Guardrails) | ~2 minutes | PARTIAL MATCH -- fewer gates, same Playwright method |
| Remediation | 3 separate verification agents (programmatic + soul + computed-styles) | ~16 checks | ~10 minutes | PARTIAL MATCH -- more agents, similar scope |
| Mode 4 PA | Lock-sheet verification (programmatic + perceptual) | N/A (audit mode) | N/A | N/A |

**FINDING: PARTIAL MATCH with 2 DIVERGENCES.**

DIVERGENCE 1: CD-006 had ZERO programmatic gates and scored 39/40. The Flagship experiment had programmatic gates that ALL PASSED yet the page scored 1.5/4 perceptually. This confirms the MEMORY.md finding: "Programmatic verification ≠ perceptual verification." Gates are necessary but NOT sufficient. The orchestrator correctly treats gates as a pre-filter before PA, not as a quality proxy.

DIVERGENCE 2: The orchestrator proposes 21 gates (15 Tier 1 + 4 Tier 2 + 2 Tier 3). The Middle experiment ran ~16 checks. The Remediation ran ~16 checks across 3 agents. 21 is the highest gate count ever proposed. However, the extra gates target specific Flagship failures (SC-13 multi-coherence, SC-14 sub-perceptual prevention, SC-10 stacked gap). These are EMPIRICALLY JUSTIFIED by prior failures. Each additional gate addresses a documented root cause. ACCEPTABLE.

**HTTP SERVER VERIFICATION:**
- Middle: Lead started HTTP server before Playwright checks -- MATCHES
- Remediation: HTTP server started before verification agents spawned -- MATCHES
- MEMORY.md: "Playwright MCP blocks `file://` protocol -- must serve via HTTP" -- CONFIRMED

**`document.fonts.ready` VERIFICATION:**
- agent-team-lessons.md: "`document.fonts.ready` is CRITICAL before checking computed font" -- MATCHES orchestrator design
- Middle: Did NOT explicitly wait for fonts.ready (programmatic audit may have pre-loaded) -- PARTIAL MATCH
- Remediation: Computed styles extraction waited for fonts -- MATCHES

---

### STEP 3: SCREENSHOT CAPTURE

**Orchestrator design:** Pre-capture ALL screenshots before spawning PA auditors. 3 viewports (1440/1024/768), scroll-through, naming convention.

| Architecture | Screenshot Method | Viewports | Pre-Capture? | Match? |
|-------------|------------------|-----------|-------------|--------|
| CD-006 | No screenshots (manual assessment) | N/A | N/A | N/A |
| Middle | Lead captured screenshots in-session, 2 viewports (1440 + 768) | 1440, 768 | Partial -- captured before PA but same session | PARTIAL MATCH |
| Remediation | Lead pre-captured ALL screenshots, 3 viewports (1440, 768, 375) | 1440, 768, 375 | **YES -- full pre-capture** | **CLOSE MATCH** |
| Mode 4 PA | Lead pre-captured ALL screenshots, 3 viewports (1440, 1024, 768) | 1440, 1024, 768 | **YES -- full pre-capture** | **EXACT MATCH** |

**FINDING: EXACT MATCH with Mode 4 PA, the proven reference implementation.**

Viewport comparison:
- Orchestrator: 1440, 1024, 768
- Mode 4 PA: 1440, 1024, 768 -- EXACT MATCH
- Remediation: 1440, 768, 375 -- 375px is mobile, not in orchestrator design

**1 QUESTION:** Should 375px (mobile) be included? The Remediation included it and it provided useful responsive data. However, Mode 4 PA used 1024px instead. The design system's responsive strategy focuses on desktop (1440) and tablet (768), with no explicit mobile breakpoint in the soul constraints. 1024px is more relevant for the design system context than 375px. ORCHESTRATOR DESIGN IS CORRECT.

**Screenshot count verification:**
- Mode 4 PA: 102 screenshots (31 scroll positions at 1440, 28 at 768, ~34 at 1024 + cold looks and full pages)
- Remediation: 36 screenshots (15 at 1440, 9 at 768, 6 at 375 + full pages)
- Orchestrator design: "~36-102 depending on page length" -- MATCHES observed range

**Naming convention:**
- Mode 4 PA: `1440-scroll-01.png`, `768-coldlook.png` -- systematic
- Remediation: `1440-scroll-01-s1-body.png` -- with section context
- Orchestrator: `screenshot-1440px-00-cold.png` -- systematic, with viewport prefix

**FINDING: Naming convention ACCEPTABLE.** Both proven patterns use systematic naming. The orchestrator's convention is clear and sortable. The Remediation's section-annotated names provide more context but are harder to generate programmatically.

---

### STEP 4: PA DEPLOYMENT (9 Auditors)

**Orchestrator design:** 9 Opus fresh-eyes auditors + 1 weaver, 56 questions, question assignments per auditor.

| Architecture | PA Auditor Count | Model | Fresh-Eyes? | Question Assignment? | Match? |
|-------------|-----------------|-------|------------|---------------------|--------|
| CD-006 | 0 (manual) | N/A | N/A | N/A | N/A |
| Middle | 1 PA auditor (lead did it) | Lead agent (Opus) | Partial -- lead had build context | NO -- single auditor answered all questions | DIVERGES |
| Remediation | 9 Opus auditors + 1 weaver | Opus | YES -- zero build context | YES -- assigned by domain | **EXACT MATCH** |
| Mode 4 PA | 9 Opus auditors + 1 weaver | Opus | YES -- zero build context | YES -- assigned by domain | **EXACT MATCH** |

**FINDING: EXACT MATCH with proven Mode 4 PA and Remediation.**

**Question count verification:**
- Mode 4 PA: 48 standard questions + extended analysis = 48+
- Remediation: 48 standard + Tier 5 questions = 56
- Orchestrator: 48 standard + 8 Tier 5 = 56 -- EXACT MATCH with Remediation

**Question assignment verification (Auditor A-I mapping):**
- Mode 4 PA: Used domain-based assignment (Impression, Readability, Spatial, Flow, Grid, Consistency, Metaphor, Responsive, Adversarial)
- Orchestrator: Same 9-domain structure -- EXACT MATCH

**Fresh-eyes principle:**
- Mode 4 PA: "You have ZERO knowledge of how this page was built" -- CONFIRMED
- Orchestrator: Same language -- MATCHES
- Remediation: Same principle -- MATCHES
- MEMORY.md: "Fresh-eyes zero-context agents find issues research-loaded agents miss entirely" -- CONFIRMED

**CSS vocabulary block:**
- Mode 4 PA: Auditors described in perceptual language, NOT CSS terms
- Orchestrator: "CSS vocabulary hard block" -- MATCHES
- MEMORY.md: "Describe what you SEE, not what the CSS does" -- MATCHES

**FINDING: PA deployment is the MOST PROVEN component of the orchestrator.** The 9-auditor model with question assignments has been validated in 2 independent deployments (Mode 4 PA + Remediation PA). Zero adjustments needed.

---

### STEP 5: WEAVER SYNTHESIS

**Orchestrator design:** 1 Opus agent reads all 9 reports, produces PA-05 score + Tier 5 score + top-3 issues + verdict.

| Architecture | Weaver? | Model | Output Format | Match? |
|-------------|---------|-------|---------------|--------|
| CD-006 | No (manual) | N/A | N/A | N/A |
| Middle | Lead synthesized directly | Lead (Opus) | 07-VERDICT.md -- structured multi-section verdict | PARTIAL MATCH |
| Remediation | 1 Opus weaver agent | Opus | FINAL-VERDICT.md -- 306 lines, 9 sections | **EXACT MATCH** |
| Mode 4 PA | 1 Opus weaver agent | Opus | FINAL-VERDICT.md equivalent | **EXACT MATCH** |

**FINDING: EXACT MATCH with proven architectures.**

**Weaver output verification:**
- Remediation weaver produced: PA-05 score (2.5/4), per-auditor scores, top issues ranked by severity, disagreement resolution, comparison to pre-remediation, fix recommendations
- Orchestrator design: PA-05 score, Tier 5 score, top-3 issues, compositional criteria, verdict
- The orchestrator's output spec is a SUBSET of what the Remediation weaver actually produced. The weaver naturally produces more than specified -- this is fine. The minimum spec ensures the critical outputs exist.

**FINDING: No adjustment needed.** The weaver role is well-proven.

---

### STEP 6: FIX CYCLE

**Orchestrator design:** Same builder receives structured feedback (gate JSON + PA direction), max 3 cycles, then escalate.

| Architecture | Fix Approach | Same Builder? | Feedback Format | Max Cycles | Match? |
|-------------|-------------|---------------|-----------------|-----------|--------|
| CD-006 | No fix cycle (scored 39/40 first pass) | N/A | N/A | N/A | N/A |
| Middle | No fix cycle (scored 4/4 first pass, known defects accepted) | N/A | N/A | N/A | N/A |
| Remediation | Builder received structured spec + 3 BLOCKING preflight fixes | **YES** (same Opus builder) | Structured spec + manifest files | 1 cycle (build, then verify) | **MATCHES** |
| Mode 4 PA | No fix cycle (audit only) | N/A | N/A | N/A | N/A |

**FINDING: PARTIAL MATCH with 1 IMPORTANT NOTE.**

NOTE: The fix cycle has been used exactly ONCE in practice (the Remediation), and it produced a +1.0 PA-05 improvement. However, the Remediation was a CSS-focused rebuild of an EXISTING page, not iterative fixes to a newly-built page. The orchestrator's fix cycle (builder fixes its own output based on gate+PA feedback) is a NOVEL pattern that has NOT been directly tested. The closest analogue is the Remediation builder receiving fix instructions during the build (3 BLOCKING preflight issues fixed in Phase 0-1).

**Same-builder principle:**
- Remediation: Same Opus builder handled all fixes -- CONFIRMED effective
- MEMORY.md: "Compositional memory preserved (builder knows WHY it made decisions)" -- LOGIC CONFIRMED
- Orchestrator: Same builder receives feedback -- MATCHES

**Feedback format verification:**
- Remediation builder received: Structured deallocation manifest, HTML restructure manifest, compiled CSS recipe, preflight validation with 3 BLOCKING issues
- Orchestrator proposes: Gate failure JSON (structured, machine-readable) + PA top-3 issues (human-readable direction)
- This is a HYBRID of the Remediation's approach (structured CSS spec) and the PA's narrative format (perceptual language). This is a REASONABLE synthesis.

**Max 3 cycles:**
- No prior architecture tested 3 fix cycles. The Remediation did 1 effective cycle. 3 is a REASONABLE upper bound but unproven.
- ESCALATE after 3 is correct -- prevents infinite loops.

**FINDING: Fix cycle is PARTIALLY PROVEN (1 successful deployment). The 3-cycle limit and escalation are REASONABLE but UNPROVEN. Gate JSON + PA direction hybrid feedback format is NOVEL but WELL-REASONED.**

---

### STEP 7: SUCCESS BAR

**Orchestrator design:** PA-05 >= 3.5/4 AND Tier 5 >= 6/8 AND zero soul violations.

| Architecture | Success Criteria | Actual Score | Match? |
|-------------|-----------------|-------------|--------|
| CD-006 (CEILING, not target) | 39/40 quality | ~3.5/4 PA-05 equivalent | PA-05 threshold meets CD-006's CEILING level; Tier 5 pushes BEYOND CD-006 into Flagship territory |
| Middle | PA-05 DESIGNED, 3/3 novelty, 7/7 soul | 4/4 PA-05 | PA-05 target is BELOW Middle's actual achievement |
| Remediation | SHIP WITH FIXES at 2.5/4, target 3.0-3.2/4 after fixes | 2.5/4 → projected 3.0-3.2/4 | Target (3.5) is ABOVE Remediation result |
| Mode 4 PA | DO NOT SHIP at 1.5/4 | 1.5/4 | Target (3.5) is well above failure mode |

**CRITICAL FRAMING:** CD-006 is Ceiling tier, NOT Flagship. Flagship 4/4 has NEVER been achieved. CD-006 lacks unified pervading metaphor, has static (not dynamic) multi-coherence, and achieves 4/5 scales not 5/5. The success bar uses PA-05 >= 3.5 as a FLOOR (matching Ceiling level) and Tier 5 >= 6/8 to push BEYOND CD-006 into the undefined Flagship territory. The two-score system is precisely designed to distinguish Ceiling from Flagship.

**FINDING: Success bar is CALIBRATED CORRECTLY.**
- PA-05 >= 3.5 establishes the Ceiling FLOOR (CD-006's approximate level)
- Tier 5 >= 6/8 pushes BEYOND Ceiling into Flagship (unified metaphor, dynamic multi-coherence, fractal at all 5 scales, compositional surprise)
- 3.5/4 PA-05 is achievable (Middle hit 4/4 on first pass)
- 3.5/4 PA-05 is ambitious (Remediation only reached 2.5/4)
- Tier 5 >= 6/8 is the Flagship-specific bar that NO existing page has been tested against -- this is the instrument that demands BEYOND-CD-006 quality

**1 CONCERN:** The Middle experiment achieved 4/4 but had NO Tier 5 questions. The Flagship experiment would have scored low on Tier 5 (many questions would get NO). The success bar requires BOTH PA-05 >= 3.5 AND Tier 5 >= 6/8. This is a HIGHER bar than anything previously achieved. This is INTENTIONAL (Flagship target has never been achieved) but introduces risk of perpetual failure.

**RECOMMENDATION:** The SHIP WITH RESERVATION tier (PA-05 >= 3.5, Tier 5 4-5/8) is already specified in the verdict matrix. This correctly classifies pages that achieve Ceiling-equivalent quality (matching CD-006) but fall short of the Flagship Tier 5 bar. Pages at this level are good -- they are just Ceiling, not Flagship.

---

## PRACTICAL DETAILS VERIFICATION

### Agent Models

| Role | Orchestrator Design | Proven Pattern | Match? |
|------|-------------------|----------------|--------|
| Builder | Opus (always) | CD-006: Opus. Middle: Opus (lead). Remediation: Opus. | **EXACT MATCH** |
| PA Auditors | Opus | Mode 4 PA: Opus. Remediation PA: Opus. | **EXACT MATCH** |
| Weaver | Opus | Remediation: Opus. | **EXACT MATCH** |
| Gate Runner | Orchestrator (same agent) | Middle: Lead ran gates. | **EXACT MATCH** |

**FINDING: All agent model selections match proven patterns.**

**Counter-finding:** MEMORY.md notes "Sonnet model agents cost-effective for all roles" (agent-team-lessons.md). However, the same MEMORY.md notes "Sonnet-for-builders is unexamined" as a risk factor and "Opus complies AND creates beyond constraints." The orchestrator's Opus-everywhere policy is CONSERVATIVE but JUSTIFIED for Flagship-quality targets.

### Playwright Scheduling

| Step | Orchestrator Design | Proven Pattern | Match? |
|------|-------------------|----------------|--------|
| Gate runner | Sequential (orchestrator runs Playwright alone) | Middle: Lead ran Playwright sequentially. | **EXACT MATCH** |
| Screenshots | Sequential (orchestrator captures alone) | Mode 4 PA: Lead captured all screenshots sequentially. Remediation: Lead captured sequentially. | **EXACT MATCH** |
| PA Auditors | Zero Playwright (read saved screenshots) | Mode 4 PA: All 9 auditors read saved images via Read tool. | **EXACT MATCH** |

**FINDING: Zero concurrent Playwright usage. PERFECTLY MATCHES proven pattern.** This is the single most validated operational detail across ALL teams.

### File Naming

| Category | Orchestrator Design | Proven Pattern | Match? |
|----------|-------------------|----------------|--------|
| Build output | `output.html`, `_build-log.md`, `_cascade-value-table.md` | CD-006: `CD-006-pilot-migration.html` (single file). Middle: `middle-tier-page.html` + `02-build-plan.md`. | REASONABLE EXTENSION |
| Screenshots | `screenshot-{viewport}px-{index}.png` | Mode 4 PA: `1440-scroll-01.png`. Remediation: `1440-scroll-01-s1-body.png`. | REASONABLE CONVENTION |
| PA reports | `pa-auditor-A.md` through `pa-auditor-I.md` | Mode 4 PA: Same pattern. Remediation: Same pattern. | **EXACT MATCH** |
| PA synthesis | `_pa-report.md` | Mode 4 PA: Equivalent. Remediation: `FINAL-VERDICT.md`. | REASONABLE |

**FINDING: File naming conventions are CONSISTENT with proven patterns.** Minor variations in naming are acceptable.

### Timing Estimates

| Phase | Orchestrator Estimate | Closest Proven Analogue | Match? |
|-------|---------------------|------------------------|--------|
| Builder | 90-150 min | CD-006: ~50 min (lighter). Middle: ~35 min (lighter). Remediation: ~60 min (CSS-only). | REASONABLE -- more instruction = more time |
| Gate runner | ~15 sec | Middle: ~2 min (fewer gates). | OPTIMISTIC -- 15 sec for 21 gates may be tight |
| Screenshots | ~5 min | Mode 4 PA: ~10-15 min (102 screenshots). Remediation: ~5 min (36 screenshots). | MATCHES remediation |
| 9 PA auditors | ~25 min | Mode 4 PA: ~25-30 min. Remediation: ~25 min. | **EXACT MATCH** |
| Weaver | ~10 min | Remediation: ~15 min. | SLIGHTLY OPTIMISTIC |
| Total (no fix) | 130-185 min | Middle: ~35 min (much lighter). Remediation: ~120 min (including prep). | REASONABLE for Flagship scope |

**FINDING: Timing estimates are REASONABLE with 2 SLIGHTLY OPTIMISTIC values.** Gate runner should budget ~1-2 min (not 15 sec) for 21 gates with fonts.ready waits. Weaver should budget ~15 min (not 10 min) based on Remediation evidence.

---

## SUMMARY OF FINDINGS

### CONFIRMED MATCHES (Steps that match proven patterns exactly)

| Step | Confidence | Proven By |
|------|-----------|-----------|
| Builder model: Opus | **HIGH** | CD-006, Middle, Remediation |
| Screenshot pre-capture | **HIGH** | Mode 4 PA, Remediation |
| 3 viewports (1440/1024/768) | **HIGH** | Mode 4 PA |
| 9 PA auditors + 1 weaver | **HIGH** | Mode 4 PA, Remediation |
| PA question assignments by domain | **HIGH** | Mode 4 PA, Remediation |
| Fresh-eyes principle | **HIGH** | Mode 4 PA, Remediation |
| CSS vocabulary block | **HIGH** | Mode 4 PA |
| Zero Playwright for PA auditors | **HIGH** | Mode 4 PA, Remediation |
| Sequential Playwright scheduling | **HIGH** | ALL teams |
| File-based communication | **HIGH** | Remediation, Mode 4 PA |
| Same-builder for fix cycle | **MEDIUM** | Remediation (1 deployment) |

### DIVERGENCES FROM PROVEN PATTERNS (Requiring attention)

| Divergence | Risk | Mitigation |
|-----------|------|-----------|
| **Instruction volume: 225-line brief vs CD-006's ~50 lines** | Brief becomes checklist, producing 1.5/4 instead of 4/4 | Brief MUST be in RECIPE format (sequenced steps, "Read/Select/Deploy/Assess" verbs), NOT checklist format ("Verify/Fail if/Must be" verbs). This is THE #1 format finding from retrospective. |
| **Spawned builder vs lead-builds-directly** | Spawned agent may not absorb context as deeply as lead | Proven in Remediation (+1.0 improvement). Acceptable risk. |
| **21 gates vs Middle's ~16** | Gate proliferation without quality improvement (false confidence) | All 21 gates address documented failures. ADVISORY gates (SC-13B, SC-16) should not block. Acceptable. |
| **3-cycle fix limit is UNPROVEN** | Unknown if 3 cycles actually converge | Single-cycle improvement proven (+1.0). 3 is reasonable upper bound. ESCALATE clause prevents infinite loops. |
| **Tier 5 success bar (>= 6/8) is NOVEL** | No page has been tested against Tier 5. Could be unachievable. | SHIP WITH RESERVATION tier (PA-05 >= 3.5, Tier 5 4-5/8) provides fallback. Acceptable. |

### MISSING ELEMENTS (Things proven teams had that the orchestrator design lacks)

| Missing Element | Where Proven | Impact | Recommendation |
|----------------|-------------|--------|----------------|
| **Lock sheet for PA auditors** | Mode 4 PA, Remediation | Lock sheets classify findings as LOCKED/CHALLENGEABLE/CONVENTION, preventing auditors from flagging intentional design choices as defects | ADD lock sheet generation step between gate runner and PA deployment. Orchestrator generates lock sheet from builder's _build-log.md (metaphor commitment, override log). |
| **Preflight validation of builder spec** | Remediation (preflight-validation.md found 3 BLOCKING issues) | Catches spec errors BEFORE the builder executes | ADD preflight check: scan conventions brief for prohibited values (#000, #FFF, cool grays, border-radius > 0). 30-second automated check. |
| **Contextualizer agent for PA** | Mode 4 PA had a "contextualizer" agent that prepared the lock sheet | Provides structured context to weaver without contaminating auditor fresh-eyes | OPTIONAL -- lock sheet serves same purpose. |
| **Builder _build-log.md as gating artifact** | Remediation (builder-changelog.md was essential for verification) | Log provides evidence trail for Tier 2 behavioral gates (DG-1 fractal echo, DG-2 cascade value) | Already in design (builder produces _build-log.md). CONFIRMED. |

---

## FINAL VERDICT

**Orchestrator design VALIDITY: CONFIRMED WITH 4 AMENDMENTS**

The orchestrator architecture in 04-orchestrator-research.md aligns with proven team patterns at HIGH confidence for 11 of 14 key design decisions. The 3 divergences (instruction volume, spawned builder, 21 gates) are all JUSTIFIED by empirical evidence and have appropriate mitigations.

### 4 Recommended Amendments

**AMENDMENT 1 (BLOCKING): Add lock sheet generation step.**
Between Step 2 (gate runner) and Step 4 (PA deployment), add Step 3.5: Generate lock sheet from builder's _build-log.md. Lock sheet classifies soul rules as LOCKED, builder choices as CHALLENGEABLE. Feed to weaver only (not to auditors -- preserves fresh-eyes). Proven in Mode 4 PA and Remediation.

**AMENDMENT 2 (SIGNIFICANT): Add preflight validation of conventions brief.**
Before Step 1 (spawn builder), add Step 0.5: Automated scan of conventions brief for prohibited values. 30-second check catches cool grays, prohibited tokens, wrong paths BEFORE the builder wastes 90-150 minutes. Proven by Remediation preflight (found 3 BLOCKING issues that would have caused build failure).

**AMENDMENT 3 (MINOR): Adjust timing estimates.**
- Gate runner: 15 sec -> ~1-2 min (21 gates with fonts.ready waits)
- Weaver: 10 min -> ~15 min (based on Remediation evidence)
- Total: 130-185 min -> 135-195 min

**AMENDMENT 4 (INFORMATIONAL): Document the instruction volume risk explicitly.**
The conventions brief at ~225 lines is 4.5x the instruction volume of the most successful build (CD-006 at ~50 lines). The brief MUST be in recipe format, not checklist format. Include a binary self-test in the brief: "If you read this as a list of constraints to satisfy, STOP -- reread as a sequence of creative steps to follow." This addresses the #1 root cause of Flagship failure (checklist format -> flat output).

---

**END OF CROSS-REFERENCE VERIFICATION**

**Document statistics:**
- Steps verified: 8 (intake, builder, gates, screenshots, PA, weaver, fix, success bar)
- Architectures compared: 4 (CD-006, Middle, Remediation, Mode 4 PA)
- Confirmed matches: 11/14 key decisions
- Divergences: 3 (all justified)
- Missing elements: 4 (2 recommended additions)
- Amendments: 4 (1 BLOCKING, 1 SIGNIFICANT, 1 MINOR, 1 INFORMATIONAL)
