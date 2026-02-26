# Gate Architecture Audit: Missing Gates for Quality Convergence

Date: 2026-02-25
Auditor: Opus gate-agent
Scope: Complete gate system (42 gates) — what exists, what's missing, and what's needed for iteration management

---

## 1. CURRENT GATE TAXONOMY

### 1.1 Complete Gate Inventory by Verification Domain

**Domain A: Identity Gates (10 gates — 9 REQUIRED, 1 RECOMMENDED)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-01 | Border Radius Zero | REQUIRED | All computed border-radius = 0px |
| GR-02 | Box Shadow None | REQUIRED | All computed box-shadow = none |
| GR-03 | Container Width | REQUIRED | 940px <= max-width <= 960px |
| GR-04 | No Gradients | REQUIRED | Zero gradient backgroundImage |
| GR-05 | Warm Palette | REQUIRED | All colors within warm palette |
| GR-05b | Sub-Perceptual Cold | ADVISORY | Reports cold colors in sub-perceptual range |
| GR-06 | Font Trinity | REQUIRED | Only 3 approved fonts, all present |
| GR-07 | No Pure B/W | RECOMMENDED | Zero #000000 or #FFFFFF |
| GR-08 | No Decorative Elements | REQUIRED | No standalone HRs, spacer divs |
| GR-09 | Border Weight Hierarchy | REQUIRED | 4px primary, 3px secondary, 1px tertiary |
| GR-10 | Cross-Page DNA | REQUIRED | Skip link, heading hierarchy, selection, focus, etc. |

**Domain B: Perception Gates (6 REQUIRED)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-11 | Background Delta | REQUIRED | Adjacent zone bg delta >= 15 RGB |
| GR-13 | Stacked Gap (CSS) | REQUIRED | CSS property sum at boundaries <= 120px |
| GR-14 | Stacked Gap (Visual) | REQUIRED | getBoundingClientRect gap <= 150px |
| GR-15 | Single Margin | REQUIRED | No single margin/padding > 96px |
| GR-44 | Trailing Void | REQUIRED | Last content to body bottom <= 300px |
| GR-60 | WCAG Contrast | REQUIRED | WCAG 2.1 AA contrast ratios |

**Domain C: Anti-Pattern Gates (6 gates — 3 RECOMMENDED, 3 ADVISORY)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-17 | Density Stacking | RECOMMENDED | Content padding >= 12px |
| GR-18 | Ghost Mechanisms | RECOMMENDED | Zero sub-perceptual borders/opacity |
| GR-19 | Threshold Gaming | ADVISORY | <50% bg deltas at floor (15-17 RGB) |
| GR-20 | Structural Echo | RECOMMENDED | <3 consecutive identical sections |
| GR-21 | Cognitive Overload | ADVISORY | <= 6 distinct bg colors per 900px |
| GR-22 | Color Zone Conflict | ADVISORY | Red for borders/emphasis, not backgrounds |

**Domain D: Experiential Enforcement Gates (4 REQUIRED — Wave 4)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-61 | DPR Validation | REQUIRED | devicePixelRatio === 1 before screenshots |
| GR-62 | Screenshot Quality | REQUIRED | Minimum 3 PNGs per viewport, no blanks |
| GR-63 | Experiential Marker | REQUIRED | Builder performed experiential self-check |
| GR-64 | Usability Priority | REQUIRED | Weaver prioritized usability if 3+ flagged |

**Domain E: Output / Mode Detection (2 RECOMMENDED, 2 ADVISORY diagnostic)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-43 | Self-Evaluation Comment | RECOMMENDED | Builder wrote self-evaluation HTML comment |
| GR-50 | Conviction Statement | ADVISORY | Conviction comment >= 3 sentences |
| GR-33 | CSS Naming Mode | ADVISORY/DIAG | Position-based vs concept-based naming |
| GR-34 | Component Modulation | ADVISORY/DIAG | Same component varies across zones |

**Domain F: Measurement Gates (3 gates — 1 RECOMMENDED, 2 ADVISORY)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-45 | Typography Variation | RECOMMENDED | >= 2 distinct H2 font-size bands |
| GR-52 | Section Height Variation | RECOMMENDED | >= 3 distinct height bands |
| GR-53 | Density Arc Direction | ADVISORY | Densest section is not first or last |

**Domain G: Distribution Gates (1 RECOMMENDED, 1 ADVISORY)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-51 | Bg Delta Distribution | RECOMMENDED | >= 50% deltas >= 25 RGB, stddev >= 8 |
| GR-46 | Print Stylesheet | ADVISORY | >= 1 @media print rule |

**Domain H: Meta / Process Gates (2 gates — 1 REQUIRED, 1 RECOMMENDED)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| GR-48 | Gate Coverage | REQUIRED | All 19 REQUIRED gates have results |
| GR-49 | Result File Integrity | RECOMMENDED | Exactly 1 result file, consistent IDs |

**Domain I: Brief Verification Gates (4 REQUIRED — pre-build)**
| Gate | Name | Tier | What It Verifies |
|------|------|------|-----------------|
| BV-01 | Tier Line Budget | REQUIRED | Each tier meets minimum line counts |
| BV-02 | Background Delta | REQUIRED | Adjacent zone hex delta >= 15 RGB |
| BV-03 | Recipe Format | REQUIRED | Recipe:checklist verb ratio >= 3:1 |
| BV-04 | Suppressor Scan | REQUIRED | Zero quality suppressor patterns |

### 1.2 What These 42 Gates Actually Cover

| Verification Domain | Gate Count | What It Ensures |
|---------------------|-----------|-----------------|
| Identity preservation | 10 | Page looks like it belongs to this design system |
| Perception physics | 6 | Human visual system can perceive intended distinctions |
| Anti-pattern detection | 6 | Known failure modes are absent |
| Experiential enforcement | 4 | Pipeline agents actually USED the page |
| Output metadata | 4 | Builder artifacts are present and complete |
| Measurement/distribution | 4 | Quantitative variation exists |
| Meta/process | 2 | Gate runner itself executed properly |
| Brief quality | 4 | Input to builder is well-formed |
| **Total** | **42** | |

### 1.3 The Critical Gap: Zero Compositional Quality Gates

Every gate in the system verifies one of two things:
1. **Physical properties** — does a CSS value meet a threshold?
2. **Process compliance** — did an agent produce the expected artifact?

**ZERO gates verify:**
- Whether REFINE actually improved anything
- Whether the pipeline is converging or diverging
- Whether iteration has diminishing returns
- Whether agent knowledge was captured at termination
- Whether the quality TRAJECTORY is positive
- What the PA-05 DELTA is between cycles

Compositional quality lives ENTIRELY in the PA domain (9 auditors + integrative + weaver). The gate system is blind to it. This means the REFINE/REBUILD loop has no programmatic guardrails on its convergence behavior.

---

## 2. MISSING GATE CATEGORIES

### Category A: Post-REFINE Verification Gates

**The problem:** After REFINE, the pipeline re-runs the same identity/perception gates (GR-01 through GR-60). These verify the page didn't BREAK. They are silent on whether REFINE actually IMPROVED the compositional qualities PA identified as weak.

**Current flow:**
```
Pass 1 → Gates (identity/perception) → PA → Weaver says REFINE
REFINE builder → Gates (identity/perception) → PA → Weaver re-scores
```

The second gate run answers: "Is this still a valid page?" It does NOT answer: "Did the REFINE builder address what the PA found?"

**What's missing: REFINE Effectiveness Verification**

The weaver's artistic impression (generative language, no gate scores) is the REFINE builder's primary input. But nothing verifies that the REFINE builder's output addresses the specific compositional concerns in that impression.

**Proposed gates:**

| Gate ID | Name | Tier | Implementation | Input | PASS/FAIL | Execution Point |
|---------|------|------|----------------|-------|-----------|-----------------|
| GR-70 | PA-05 Non-Regression | REQUIRED | Procedural (orchestrator compares scores) | PA-05 from cycle N vs cycle N-1 | PASS if PA-05(N) >= PA-05(N-1). FAIL if PA-05 DECREASED. | Post-PA, cycle N >= 2 |
| GR-71 | Weaver Finding Coverage | RECOMMENDED | Procedural (text analysis) | Weaver artistic impression from cycle N-1, REFINE builder's HTML + self-eval from cycle N | PASS if >= 50% of weaver themes addressed (keyword/semantic matching). FAIL if < 50%. | Post-build, cycle N >= 2 |
| GR-72 | Fix-Type Match | RECOMMENDED | Procedural (text analysis) | Weaver fix-type classification from cycle N-1 (MECHANICAL/STRUCTURAL/COMPOSITIONAL), CSS diff between cycles | PASS if MECHANICAL fixes → CSS-only changes, STRUCTURAL fixes → HTML changes, COMPOSITIONAL fixes → new mechanisms. FAIL if mismatch (e.g., compositional fix attempted via CSS-only). | Post-build, cycle N >= 2 |

**GR-70 rationale:** This is the single most critical missing gate. Without it, REFINE can make things WORSE and the pipeline has no circuit breaker. The Gas Town run went 2.0 → 3.5, but there's no mechanism to detect if a future run goes 3.0 → 2.5 after REFINE. The current circuit breaker (1 REBUILD + 1 REFINE max) prevents infinite loops but not quality regression within allowed iterations.

**GR-71 rationale:** The REFINE builder receives an artistic impression saying (e.g.) "the middle sags — energy dissipates by S5." If the REFINE output changes S1-S3 extensively but leaves S5 untouched, the builder missed the point. This gate checks thematic coverage, not specific CSS values.

**GR-72 rationale:** The weaver classifies each fix as MECHANICAL, STRUCTURAL, or COMPOSITIONAL. The pipeline doctrine says "you cannot fix your way to Flagship." If a COMPOSITIONAL fix was attempted via CSS-only changes (MECHANICAL approach), the fix is structurally doomed. This gate catches the mismatch.

### Category B: Convergence Gates

**The problem:** The pipeline has a circuit breaker (max 1 REBUILD + 1 REFINE before human review) but no convergence detection. The circuit breaker is a SAFETY mechanism (prevent infinite loops), not a QUALITY mechanism (detect whether improvement is happening).

**What's missing: Quality Trajectory Tracking**

| Gate ID | Name | Tier | Implementation | Input | PASS/FAIL | Execution Point |
|---------|------|------|----------------|-------|-----------|-----------------|
| GR-73 | Convergence Direction | REQUIRED | Procedural (orchestrator) | PA-05 scores from all cycles | PASS if PA-05(N) > PA-05(N-1) OR PA-05(N) >= 3.5 (already shippable). FAIL if PA-05 stalled or decreased. | Post-PA, cycle N >= 2 |
| GR-74 | Diminishing Returns | ADVISORY | Procedural (orchestrator) | PA-05 scores from all cycles | ADVISORY flag if PA-05 delta < 0.3 between cycles (improvement is stalling). No FAIL — informational for human. | Post-PA, cycle N >= 2 |
| GR-75 | Iteration Counter | REQUIRED | Procedural (orchestrator) | Execution tracker iteration count | PASS if cycle <= 3 (1 initial + 1 REBUILD + 1 REFINE). FAIL if cycle > 3. This is the existing circuit breaker, but formalized as a GATE rather than prose in the MANIFEST. | Pre-build, every cycle |
| GR-76 | Residual Finding Count | RECOMMENDED | Procedural (text analysis) | Weaver reports from cycle N vs cycle N-1 | PASS if residual findings decreased by >= 1. FAIL if same or more findings than previous cycle. | Post-weaver, cycle N >= 2 |
| GR-77 | New Defect Introduction | RECOMMENDED | Procedural (text analysis) | Weaver report from cycle N | PASS if no NEW findings that weren't in cycle N-1. FAIL if REFINE introduced defects that didn't exist before. | Post-weaver, cycle N >= 2 |

**GR-73 vs GR-70:** GR-70 checks non-regression (didn't get worse). GR-73 checks convergence direction (getting better). A page that stays at PA-05 3.0 across two cycles passes GR-70 but fails GR-73 — the REFINE accomplished nothing.

**GR-74 rationale:** The theoretical quality curve (orchestrator Section 10) predicts diminishing returns: Pass 1 ~2.5-3.5, Pass 2 ~3.0-3.8, Pass 3 ~3.2-4.0, Pass 4 < +0.1 with S-20 risk. If delta drops below 0.3, additional iterations are likely burning budget for sub-threshold improvement.

**GR-75 rationale:** The circuit breaker exists in MANIFEST.md line 603 ("Maximum iterations: 1 REBUILD + 1 REFINE before human intervention") and orchestrator line 44. But it's prose, not a gate. Making it a gate means: (a) it shows up in gate-runner results, (b) GR-48 (coverage completeness) validates it was checked, (c) it's enforceable by the same verdict logic that enforces everything else.

**GR-77 rationale:** The most insidious failure mode in iterative development. PA weaver section 6.2 already documents this ("Revision Degradation Warnings" — multi-channel decoupling, density arc flattening, bookending asymmetry breaks, etc.). But there's no gate to DETECT it. The weaver knows it CAN happen but has no tool to measure WHETHER it happened.

### Category C: Residual Knowledge Gates

**The problem:** When a pipeline run terminates — whether SHIP, SHIP WITH FIXES, REFINE, or REBUILD — agent knowledge dies with the agent. The REFINE builder's understanding of what worked and what didn't, the weaver's holistic quality model, the orchestrator's tactical decisions — all evaporate.

**Current state:** The conviction artifact (HTML comment at top of output) captures the builder's INTENT, not its LEARNING. The self-evaluation captures observations, not recommendations for next steps. The weaver's artistic impression captures findings, not a theory of what would fix them.

**What's missing: Knowledge Persistence at Termination**

| Gate ID | Name | Tier | Implementation | Input | PASS/FAIL | Execution Point |
|---------|------|------|----------------|-------|-----------|-----------------|
| GR-78 | Builder Residual Artifact | RECOMMENDED | Procedural (text analysis) | Builder's output (HTML) | PASS if HTML contains `<!-- RESIDUAL: ... -->` comment with >= 50 chars describing what the builder would change if it had another pass. FAIL if absent. | Post-build, every cycle |
| GR-79 | Weaver Residual Artifact | RECOMMENDED | Procedural (text analysis) | Weaver's diagnostic report | PASS if report contains a "## Residual" section listing unresolved concerns that couldn't be addressed by the proposed fixes. FAIL if absent. | Post-weaver, every cycle |
| GR-80 | Orchestrator Quality Journal | ADVISORY | Procedural (file existence check) | Execution tracker | PASS if execution tracker contains a "Quality Trajectory" section recording PA-05 scores, gate deltas, and orchestrator's assessment of convergence direction. FAIL if absent. | Pipeline termination |

**GR-78 rationale:** The REFINE protocol (orchestrator line 544) says the REFINE builder reads the "conviction artifact + PA artistic impressions." But the conviction is the PREVIOUS builder's intent, not the CURRENT builder's learning. If a REFINE builder discovers something about the content that wasn't in the artistic impressions (e.g., "the table in S4 needs a completely different layout, not just CSS tweaks"), that knowledge dies unless captured.

The Gas Town run exemplifies this. The REFINE builder took PA-05 from 2.0 to 3.5 — a massive +1.5 jump. Whatever that builder LEARNED about how to achieve that transformation is lost. If we need to REFINE again, the next builder starts from scratch with only the weaver's artistic impression.

**GR-79 rationale:** The weaver already produces two outputs: a diagnostic verdict and an artistic impression. But neither captures what the weaver COULDN'T address — findings that need more than CSS fixes, patterns that suggest the content needs restructuring, or meta-observations about the pipeline's blind spots on this particular content.

**GR-80 rationale:** The execution tracker template (lines 488-501) has an "Execution Summary" section with PA-05 score and verdict, but no trajectory data. For a single-pass run, this is fine. For iterative runs, you need: PA-05 at each cycle, gate pass rates at each cycle, delta analysis, and the orchestrator's qualitative assessment of whether convergence is happening.

### Category D: Lightweight Verification Gates

**The problem:** Between REFINE and full PA, there's a ~75-minute gap (REFINE build ~15 min + screenshots ~5 min + gates ~5 min + PA ~15 min + weaver ~5 min + overhead). Full Mode 4 PA (9 auditors + integrative + weaver = 11 agents) is the most expensive pipeline step. If REFINE made the page WORSE, you've burned 75 minutes discovering what a 5-minute spot check could have caught.

**What's missing: Fast Quality Estimation**

| Gate ID | Name | Tier | Implementation | Input | PASS/FAIL | Execution Point |
|---------|------|------|----------------|-------|-----------|-----------------|
| GR-81 | PA Spot-Check | RECOMMENDED | Procedural (1-3 PA auditors, not 9) | Screenshots + 3 critical questions: PA-05 (compositional intent), PA-76 (emotional arc), PA-01 (first impression) | PASS if spot-check scores are >= previous cycle's scores on same questions. FAIL if any decreased by > 0.5 points. | Post-screenshots, pre-full-PA, cycle N >= 2 |
| GR-82 | CSS Delta Analysis | RECOMMENDED | Programmatic (Playwright) | Pre-REFINE HTML + post-REFINE HTML | PASS if: (a) CSS line count changed by at least 20 lines, (b) changes touch >= 2 zone-level selectors, (c) at least 1 change affects a property from the weaver's fix list. FAIL if REFINE was a no-op or only touched 1 property. | Post-build, cycle N >= 2 |
| GR-83 | Visual Diff Score | ADVISORY | Programmatic (Playwright screenshots + pixel comparison) | Pre-REFINE and post-REFINE full-page screenshots at 1440px | ADVISORY report: % of pixels changed, location of changes (top/middle/bottom third), magnitude of color changes. No PASS/FAIL — informational for orchestrator. | Post-screenshots, cycle N >= 2 |

**GR-81 rationale:** Three PA questions, answered by 1-2 fresh auditors, takes ~5 minutes. Compare: full Mode 4 takes ~25 minutes. The spot-check isn't a replacement — it's a CIRCUIT BREAKER. If PA-05 dropped from 3.0 to 2.0 after REFINE, you know immediately without waiting for the full audit. If spot-check passes, proceed to full PA for the official score.

Critical question selection:
- **PA-05** (compositional intent) — the master quality metric. If this dropped, nothing else matters.
- **PA-76** (emotional arc) — tests whether the page creates a satisfying reading journey. Most sensitive to REFINE degradation because emotional arc depends on holistic composition.
- **PA-01** (first impression) — tests immediate gestalt. If first impression degraded, REFINE introduced a visible problem.

**GR-82 rationale:** If the REFINE builder changed only 3 lines of CSS, it almost certainly didn't address compositional concerns. The weaver's fix list typically requires changes across multiple zones. A CSS delta analysis can immediately flag a "thin REFINE" — technically a REFINE but functionally a no-op.

What to measure:
1. Line count delta (< 20 lines changed = suspicious)
2. Zone selector coverage (changes only in 1 zone when weaver flagged 3 = insufficient)
3. Property category coverage (all changes are color-related when weaver flagged spacing = mismatch)

**GR-83 rationale:** The cheapest possible verification — take two screenshots, compare pixels. If < 5% of pixels changed, the REFINE was cosmetic. If > 50% changed, the REFINE was a near-rebuild (which might indicate the builder ignored the REFINE protocol and started over). The optimal range for a targeted REFINE is roughly 10-30% pixel change.

This is ADVISORY because pixel comparison is noisy (scroll position, render timing, font anti-aliasing can cause false differences). But it provides a fast sanity check that complements GR-82's CSS-level analysis.

---

## 3. GATE ARCHITECTURE PROPOSALS

### 3.1 Complete Proposed Gate List

| Gate ID | Name | Tier | Domain | Implementation | Execution Point |
|---------|------|------|--------|----------------|-----------------|
| **GR-70** | PA-05 Non-Regression | REQUIRED | Post-REFINE | Procedural | Post-PA, cycle >= 2 |
| **GR-71** | Weaver Finding Coverage | RECOMMENDED | Post-REFINE | Procedural (text) | Post-build, cycle >= 2 |
| **GR-72** | Fix-Type Match | RECOMMENDED | Post-REFINE | Procedural (text) | Post-build, cycle >= 2 |
| **GR-73** | Convergence Direction | REQUIRED | Convergence | Procedural | Post-PA, cycle >= 2 |
| **GR-74** | Diminishing Returns | ADVISORY | Convergence | Procedural | Post-PA, cycle >= 2 |
| **GR-75** | Iteration Counter | REQUIRED | Convergence | Procedural | Pre-build, every cycle |
| **GR-76** | Residual Finding Count | RECOMMENDED | Convergence | Procedural (text) | Post-weaver, cycle >= 2 |
| **GR-77** | New Defect Introduction | RECOMMENDED | Convergence | Procedural (text) | Post-weaver, cycle >= 2 |
| **GR-78** | Builder Residual Artifact | RECOMMENDED | Knowledge | Procedural (text) | Post-build, every cycle |
| **GR-79** | Weaver Residual Artifact | RECOMMENDED | Knowledge | Procedural (text) | Post-weaver, every cycle |
| **GR-80** | Orchestrator Quality Journal | ADVISORY | Knowledge | Procedural (file) | Pipeline termination |
| **GR-81** | PA Spot-Check | RECOMMENDED | Lightweight | Procedural (1-3 PA agents) | Post-screenshots, cycle >= 2 |
| **GR-82** | CSS Delta Analysis | RECOMMENDED | Lightweight | Programmatic (Playwright) | Post-build, cycle >= 2 |
| **GR-83** | Visual Diff Score | ADVISORY | Lightweight | Programmatic (Playwright) | Post-screenshots, cycle >= 2 |

**New gate totals:** 14 proposed gates (3 REQUIRED, 7 RECOMMENDED, 4 ADVISORY)
**Updated system total:** 56 gates (23 REQUIRED, 16 RECOMMENDED, 11 ADVISORY, 2 DIAGNOSTIC, 4 BV)

### 3.2 Execution Flow for Iterative Runs

```
CYCLE 1 (initial build):
  Phase 0  → Content Analysis
  Phase 1  → Brief Assembly → BV-01 through BV-04
  Phase 2  → Build → GR-78 (builder residual)
  Phase 3A → Gates (GR-01 through GR-64, existing)
  Phase 3B → Full PA (9 auditors)
  Phase 3C → Weaver → GR-79 (weaver residual)
  Phase 4  → Verdict: SHIP / SHIP WITH FIXES / REFINE / REBUILD

If REFINE:
  GR-75 → Iteration Counter (cycle 2 <= max)

CYCLE 2 (REFINE):
  Phase 2  → REFINE build (different Opus, reads conviction + artistic)
               → GR-78 (builder residual)
               → GR-82 (CSS delta — did REFINE actually change enough?)
               → GR-71 (weaver finding coverage — did REFINE address themes?)
               → GR-72 (fix-type match — right approach for fix classification?)
  Phase 3A → Gates (existing identity/perception — didn't break)
               → GR-83 (visual diff — how much changed visually?)
  Phase 3A.5 → GR-81 (PA spot-check — quick quality estimate)
               → If spot-check indicates regression: ABORT full PA, flag for human
  Phase 3B → Full PA (9 auditors)
               → GR-70 (PA-05 non-regression — didn't get worse)
               → GR-73 (convergence direction — getting better)
               → GR-74 (diminishing returns — improvement stalling?)
  Phase 3C → Weaver
               → GR-76 (residual finding count — fewer findings?)
               → GR-77 (new defect introduction — REFINE didn't create new problems?)
               → GR-79 (weaver residual)
  Phase 4  → Verdict
               → GR-80 (orchestrator quality journal — record trajectory)

If REBUILD:
  GR-75 → Iteration Counter (verify within max)
  [Full Phase 0-3C re-execution with all gates]
  [Same convergence gates apply at next PA checkpoint]
```

### 3.3 Verdict Logic Extensions

**Current verdict logic (unchanged):**
- ANY identity gate FAIL = REBUILD
- ANY perception gate FAIL = REFINE
- 3+ recommended FAIL = REBUILD
- GR-48 FAIL = INCOMPLETE

**New verdict logic for iteration gates:**
- GR-70 FAIL (PA-05 decreased) = **HALT** — quality regressed. Pipeline terminates with diagnostic output. Do NOT attempt another REFINE; human review required.
- GR-73 FAIL (convergence stalled) = **ADVISORY to orchestrator** — REFINE didn't help, but didn't hurt. Consider REBUILD instead of another REFINE.
- GR-75 FAIL (iteration exceeded) = **HALT** — circuit breaker triggered. Pipeline terminates.
- GR-77 FAIL (new defects introduced) = **ESCALATE** — REFINE is causing collateral damage. Weaver must explicitly acknowledge new defects in verdict.
- GR-81 FAIL (spot-check regression) = **ABORT full PA** — save the ~25 minutes. Quality clearly regressed; route directly to HALT or REBUILD.

### 3.4 Implementation Priority

**Wave 5 (Immediate — highest impact, lowest cost):**
1. **GR-75** (Iteration Counter) — formalizes existing circuit breaker as a gate. 5 lines of code. Makes the prose rule in MANIFEST enforceable.
2. **GR-70** (PA-05 Non-Regression) — the most critical missing gate. Prevents REFINE from silently making things worse. 10 lines of orchestrator logic.
3. **GR-78** (Builder Residual) — adds `<!-- RESIDUAL: ... -->` check alongside existing GR-43 (self-eval) and GR-63 (experiential marker). 5 lines of code in runGateRunner.

**Wave 6 (High priority — moderate cost):**
4. **GR-82** (CSS Delta Analysis) — requires saving pre-REFINE HTML for comparison. Moderate implementation but very high diagnostic value.
5. **GR-73** (Convergence Direction) — simple extension of GR-70. Already have PA-05 from both cycles.
6. **GR-76** (Residual Finding Count) — requires parsing weaver reports, but structure is well-defined.

**Wave 7 (Medium priority — higher cost):**
7. **GR-81** (PA Spot-Check) — requires spawning 1-3 PA agents outside the normal Mode 4 flow. High value but introduces a new execution pattern.
8. **GR-71** (Weaver Finding Coverage) — semantic matching between artistic impression and REFINE output. More complex text analysis.
9. **GR-77** (New Defect Introduction) — requires diffing two weaver reports. Complex but important.

**Wave 8 (Lower priority — refinement):**
10. **GR-72** (Fix-Type Match) — CSS diff categorization. Useful but depends on GR-82.
11. **GR-74** (Diminishing Returns) — requires 3+ cycles, which the current circuit breaker prevents. More relevant if iteration limits increase.
12. **GR-79** (Weaver Residual) — modifies weaver protocol. Lower urgency.
13. **GR-80** (Orchestrator Quality Journal) — modifies execution tracker template. Lower urgency.
14. **GR-83** (Visual Diff) — pixel comparison. Nice-to-have but noisy.

---

## 4. CROSS-CUTTING FINDINGS

### 4.1 The Asymmetry Problem

The gate system is HEAVILY biased toward first-pass verification:
- **42 gates** for "is this initial build acceptable?"
- **0 gates** for "did this iteration actually help?"

This asymmetry reflects the pipeline's ideological commitment to single-pass building (orchestrator line 86: "DEFAULT: Single-pass with self-evaluation"). The gate system was designed for a world where REFINE is rare and REBUILD is rarer. But Gas Town showed REFINE can be THE quality-defining step (+1.5 PA-05 improvement). A system where the most important quality jump happens in a gate-free zone is structurally fragile.

### 4.2 The Knowledge Erasure Problem

Every pipeline agent dies at termination. The execution tracker records WHAT happened but not WHY. The conviction artifact records INTENT but not LEARNING. The artistic impression records FINDINGS but not THEORY.

For single-pass runs, this is acceptable — the output IS the knowledge.

For iterative runs, this is a critical gap. The Gas Town REFINE builder learned something about that content that no other agent knew. That knowledge died with the agent. If we had to do a second REFINE, we'd start from scratch with only the weaver's summary — a ~10:1 compression of what the REFINE builder actually understood.

**GR-78 (builder residual) and GR-79 (weaver residual) are the minimum viable fix.** They don't capture EVERYTHING an agent knew, but they capture the delta: "what would I do differently / what remains unresolved."

### 4.3 The Expensive Feedback Loop

Full Mode 4 PA costs ~25 minutes and 11 agent spawns. For a REFINE that changed 10 CSS lines, this is wildly disproportionate. The pipeline has no "fast path" for iterative quality estimation.

**GR-81 (spot-check) addresses this directly.** 1-3 agents, 3 questions, ~5 minutes. If the spot-check shows regression, you skip the full PA and save ~20 minutes + 8 agent spawns. If it shows improvement, you proceed to full PA for the official score.

The cost-benefit is dramatic:
- Full PA every cycle: ~25 min + 11 agents
- Spot-check + conditional full PA: ~5 min + 2 agents (if regression caught) OR ~30 min + 13 agents (if proceeding)
- Expected savings (assuming ~30% of REFINEs regress): ~7 min + 3 agents per iteration

### 4.4 What This Means for the Convergence Problem

The convergence autopsy asked: "Why did the pipeline stop at SHIP WITH FIXES instead of iterating to SHIP?"

The gate architecture answer: **because the gate system has no concept of iteration quality.** It can tell you "this page passes identity and perception checks" and "this page scored PA-05 3.5." It CANNOT tell you:
- "REFINE improved PA-05 by 1.5 points"
- "There are 2 unresolved findings from the previous cycle"
- "The REFINE builder addressed 4/5 weaver themes"
- "Additional iteration would yield < 0.3 PA-05 improvement"
- "The REFINE builder would have done X differently"

Without these signals, the orchestrator is flying blind on iteration decisions. It has a verdict (SHIP/REFINE/REBUILD) and a circuit breaker (max iterations), but no trajectory data. It's like having a speedometer and a fuel gauge but no GPS — you know how fast you're going and when you'll run out of gas, but not whether you're heading toward the destination.

---

## 5. RELATIONSHIP TO THE STOPPING DECISION

### 5.1 Why the Pipeline Stopped When It Did

Based on the current gate architecture, the stopping decision was correct according to the system's logic:
1. Weaver said SHIP WITH FIXES (PA-05 >= 3.0, <= 3 mechanical fixes)
2. All identity gates PASSED
3. All perception gates PASSED
4. Circuit breaker not triggered (within iteration limits)
5. No gate said "you should iterate further"

Point 5 is the structural gap. The gate system had no way to say: "PA-05 is 3.5, but there are 5 unresolved weaver findings, and the REFINE builder said it would restructure S7-S9 if it had another pass, and 3/9 auditors flagged dark zone fatigue. You should REFINE again."

### 5.2 Would the Proposed Gates Have Changed the Outcome?

If all 14 proposed gates had existed during the Gas Town run:
- **GR-70** (non-regression): PASS — PA-05 went 2.0 → 3.5
- **GR-73** (convergence direction): PASS — massive improvement
- **GR-74** (diminishing returns): N/A — only 2 cycles
- **GR-76** (residual findings): UNKNOWN — depends on whether finding count decreased
- **GR-77** (new defects): CRITICAL QUESTION — did REFINE introduce the dark zone fatigue? If dark zone fatigue was NEW (not in cycle 1), GR-77 would have FAILED, escalating to the weaver for acknowledgment
- **GR-78** (builder residual): WOULD HAVE CAPTURED the REFINE builder's "what I'd do next" — potentially including dark zone mitigation
- **GR-79** (weaver residual): WOULD HAVE CAPTURED unresolved concerns

The proposed gates wouldn't necessarily have changed SHIP WITH FIXES to REFINE. But they would have:
1. Captured what the REFINE builder learned (GR-78)
2. Flagged any new defects from REFINE (GR-77)
3. Provided trajectory data for the human making the final decision (GR-80)
4. Made the stopping decision INFORMED rather than BLIND

### 5.3 The Meta-Observation

The gate system is excellent at answering "is this artifact acceptable?" It's terrible at answering "is this process converging?" Those are fundamentally different questions, and the proposed gates bridge the gap.

---

*End of Gate Architecture Audit*
