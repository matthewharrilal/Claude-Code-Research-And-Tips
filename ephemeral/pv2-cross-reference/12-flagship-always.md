# Flagship-Always Analysis: Eliminating Tier Routing from Pipeline v2

**Author:** flagship-always (Opus 4.6)
**Date:** 2026-02-18
**Task:** Analyze what changes when tier routing is eliminated and EVERY page runs at Flagship level
**User Declaration:** "I ALWAYS WANT TO PRODUCE FLAGSHIP TIER CONTENT VIA WHAT WE DID WITH THE REMEDIATION PROMPT."

---

## EXECUTIVE SUMMARY

The user wants to eliminate the 3-tier routing system (Middle/Ceiling/Flagship) and run EVERY page at Flagship level. This is the most consequential architectural decision for Pipeline v2. After cross-referencing all 7 PV2 design documents and the architecture diagram, the analysis concludes:

**The answer is YES -- eliminate tiers, with 5 specific simplifications.**

The tier system was designed to save cost/time for "simpler" pages. But the user's declaration makes the tradeoff explicit: they want quality, not cost savings. When you remove cost as a variable, the tier system becomes pure overhead -- routing logic, decision trees, conditional branches, and per-tier gate strictness levels that add complexity without adding quality. The remediation's success came from a SINGLE approach applied with maximum intensity. Tiers dilute that intensity.

---

## PART A: WHAT TIER-SPECIFIC LOGIC BECOMES UNIVERSAL

### A1. TC Pipeline: Phases 0-3.5 Run EVERY TIME

**Current PV2 design:**
- Middle: TC Phase 0 only (no metaphor). Skips Phases 1-3 entirely.
- Ceiling: TC Phases 0-3.5 (full metaphor derivation + lock-in gate).
- Flagship: TC Phases 0-3.5 (full metaphor + multi-candidate development).

**Under Flagship-Always:**
TC Phases 0-3.5 run for EVERY page. This means:
- Phase 1 (Multi-Axis Questioning): FEEL/UNDERSTAND/DO/BECOME + extended axes. Always.
- Phase 2 (Tension Derivation): Side A vs Side B, Addition Test, BECAUSE test. Always.
- Phase 3 (Metaphor Collapse): 3-5 candidates, structural scoring. Always.
- Phase 3.5 (Lock-In Gate): 3 mandatory questions, divergence table. Always.

**Impact:** This is the MOST SIGNIFICANT change. For a 200-word API reference or a simple changelog, TC will still derive a metaphor. Is this wasteful? Consider:

**Argument FOR (always metaphor):** The Middle experiment (PA-05 4/4) ran TC Phase 0 only and skipped metaphor. But it was N=1 with content that happened to suit the F-PATTERN density pattern. The remediation that moved the flagship from 1.5 to 2.5 operated on content that ALREADY HAD a metaphor from the failed experiment. The corpus has ZERO evidence of recipe-only (no metaphor) producing consistently good results across diverse content types. Always running metaphor derivation eliminates this unknown.

**Argument AGAINST (always metaphor):** Short reference content (API docs, changelogs) may not have genuine structural tension. TC Phase 2's Addition Test might answer "YES" -- meaning the form can simply serve the content without metaphor. In this case, TC Phases 1-3 would produce a FORCED metaphor that adds nothing. The anti-reproduction protocol's Phase 3.5 gate should catch this (question 1: "Derived independently?"), but the pipeline would still spend 15-30 minutes on derivation that yields "no metaphor needed."

**RECOMMENDATION:** Always run TC Phases 0-3.5, but add a FAST EXIT at Phase 2. If the Addition Test returns YES (no genuine tension), skip Phases 3-3.5 and proceed directly to the recipe with a "no metaphor" build plan. This preserves the OPTION of metaphor for every page while avoiding forced derivation when the content doesn't warrant it. The fast exit is binary (Addition Test = YES/NO), not a tier classification.

---

### A2. Handoff Richness: Full Handoff EVERY TIME

**Current PV2 design:**
- Middle: Zone architecture + section inventory only.
- Ceiling: + Mechanism deployment + isomorphism table.
- Flagship: + Reinforcing pairs + bridge prose + full isomorphism.

**Under Flagship-Always:**
The FULL handoff document is produced every time: zone architecture, section inventory, mechanism deployment table with per-category minimums (S:1+, T:1+, M:1+, B:1+, R:1+), isomorphism table, reinforcing pairs with shared semantics and verification tests, bridge prose, and compositional clusters with interaction tests.

**Impact:** The handoff document grows from a lightweight ~50-line Middle handoff to a ~150-200-line Flagship handoff. Builder receives the richest possible build plan every time.

**Is this wasteful for simple content?** No. The handoff FILTERS naturally -- if the content has only 2 zones and 5 mechanisms, the deployment table will be small regardless. The STRUCTURE is always full; the CONTENT scales with the page's complexity. The cost is TC planner time (~15-20 minutes for Flagship analysis vs ~5 minutes for Middle), not builder time.

---

### A3. Builder Receives: Maximum File Set EVERY TIME

**Current PV2 design:**
- Middle builder reads: operational-recipe.md + tokens.css + prohibitions.md.
- Ceiling+ builder reads: + mechanism-catalog.md (FULL) + case-studies/_INDEX.md (for divergence check).

**Under Flagship-Always:**
Builder ALWAYS reads: operational-recipe.md + tokens.css + prohibitions.md + mechanism-catalog.md (FULL) + case-studies/_INDEX.md + the full build plan from TC.

**Impact:** Minimal additional cost. The mechanism catalog is ~18 entries with impact profiles. Reading it takes 2-3 minutes. The benefit: even "simple" pages get the full vocabulary available. A builder working on a changelog who SEES the mechanism catalog might recognize that a "progressive disclosure" mechanism (behavioral category) would transform the boring list into an engaging interface. Without the catalog, they would never consider it.

---

### A4. Gate Strictness: ALL BLOCKING EVERY TIME

**Current PV2 design (from pv2-tier-routing.md Section C):**
- Middle: 5 BLOCKING gates, 7 WARNING gates, 4 N/A gates.
- Ceiling: 13 BLOCKING, 2 WARNING, 1 N/A.
- Flagship: 16 BLOCKING, 0 WARNING, 0 N/A.

**Under Flagship-Always:**
ALL 16 gates are BLOCKING for EVERY page. This includes:
- Soul compliance (auto-fixed silently)
- Warm palette (R >= G >= B)
- Container width (960px)
- Void prevention (max stacked gap <= 108px -- the TIGHTER Flagship threshold)
- Zone differentiation (>= 15 RGB + 6 CSS channels)
- Scale coverage (5/5 required)
- Grid layout minimum (>= 2)
- Typography zone variation (>= 2px delta)
- Stacking arithmetic
- WCAG 2.1 AA (full check, 8/8 items)
- Per-category mechanism minimum
- Coherence check (>= 3 transitions)
- Metaphor consistency
- Fractal coherence (4-scale)
- PA-05 >= 3/4
- Reinforcing mechanism pairs (>= 2)

**Impact:** This is the QUALITY FLOOR. No page ships without meeting ALL 16 gates. Warning-level gates that Middle tier could ignore (scale coverage, grid layouts, typography variation) now block shipment. The 108px stacked gap cap (vs 120px for Middle/Ceiling) becomes universal.

**Is this too strict for simple content?** This is the core question. For a 200-word API reference, requiring 5/5 scale coverage and >= 2 reinforcing pairs and fractal coherence feels excessive. BUT -- the user's declaration is explicit: "I ALWAYS WANT TO PRODUCE FLAGSHIP TIER CONTENT." This means simple content should be ELEVATED to Flagship quality, not Flagship quality diluted to accommodate simple content.

**The reframing:** Instead of "is this too strict for simple content?", the question becomes "how does simple content achieve Flagship gates?" The answer: TC's metaphor derivation and the recipe's zone architecture create visual richness EVEN FOR simple content. A 200-word changelog with 3 zones, 2 grid layouts, 5 mechanisms, and metaphor-driven backgrounds IS a Flagship page. The content is short; the design is not.

---

### A5. Checkpoints: Mandatory Approvals EVERY TIME

**Current PV2 design:**
- Middle: Self-check (HTML comments). No mandatory approvals.
- Ceiling: File-bus checkpoints, planner reviews.
- Flagship: MANDATORY APPROVAL at Phases 0, 1, 3, 4, 8.

**Under Flagship-Always:**
Every build gets mandatory planner approval at 5 phases. The builder MUST wait for approval before proceeding past Phase 0, 1, 3, 4, and 8.

**Impact:** This adds ~20-30 minutes of checkpoint overhead per build. The builder writes a checkpoint file, the planner reviews gate results, sends PROCEED or HALT. For simple content, this may feel like bureaucracy. BUT: the checkpoint protocol prevents the flagship failure (19 agents, 0 messages). The missing footer was caused by the builder not being able to ask the planner about content decisions. Mandatory checkpoints ensure the planner catches errors DURING the build, not after.

---

## PART B: DOES THE ORCHESTRATOR SIMPLIFY OR COMPLEXIFY?

### B1. What Gets REMOVED from /build-page

The orchestrator's most complex logic is tier classification (Step 0D in TC, Section E in pv2-tier-routing.md). Under Flagship-Always, this entire subsystem is eliminated:

**REMOVED:**
- Content signal classification decision tree (~25 lines in orchestrator)
- Word-count-to-tier routing table (~15 lines)
- Per-tier agent architecture selection (~30 lines)
- Per-tier gate strictness configuration (~20 lines)
- Per-tier PA mode selection (~15 lines)
- Per-tier checkpoint frequency (~10 lines)
- Graceful degradation protocol (~20 lines)
- Tier override handling (~10 lines)
- The entire pv2-tier-routing.md document (347 lines) becomes UNNECESSARY

**Total removed:** ~145 lines from the orchestrator + an entire reference document.

### B2. What Gets SIMPLIFIED

- **Agent architecture:** Always 4-wave (TC planner -> Opus builder -> verification -> fix integration). No conditional branching.
- **PA mode:** Always Mode 4 (9 auditors, 48 questions). No mode selection logic.
- **Gate configuration:** Always ALL BLOCKING, always 108px cap, always 15 RGB. No per-tier threshold adjustment.
- **File routing:** Always full set (recipe + tokens + prohibitions + mechanism catalog + case studies). No conditional includes.
- **Communication protocol:** Always file-bus + SendMessage. No "single-agent, no comms" Middle-tier exception.

### B3. What Gets ADDED or STAYS

- **Pipeline Philosophy preamble:** Still needed (anti-scale model, IS/IS NOT axes, kill criteria). Unchanged.
- **TC invocation with fast-exit:** Replace tier-gated TC routing with universal TC + Addition Test fast exit. Slightly simpler (1 branch vs 4 branches).
- **Progress display:** Simplified (always shows 4-wave progress, no tier-dependent display logic).
- **Kill criteria:** Unchanged (3 consecutive PA-05 < 3/4, soul violation, gates pass but PA fails).

### B4. Net Effect on Orchestrator

**Before (3-tier):** ~350 lines with ~145 lines of tier routing logic.
**After (Flagship-Always):** ~205-230 lines with zero tier routing logic.

**The orchestrator SIMPLIFIES by ~35%.** This is a significant reduction in complexity. Fewer branches = fewer bugs = easier maintenance = clearer mental model for the user.

---

## PART C: 9 PA AUDITORS EVERY TIME -- COST AND TIME

### C1. What Mode 4 Costs Per Build

From the architecture diagram and experience:
- **Screenshot capture:** Team lead captures at 1440px, 768px, 480px. ~12-36 screenshots. Takes ~5-10 minutes.
- **9 Opus auditors (parallel):** Each reads screenshots, answers assigned PA questions. Takes ~10-15 minutes (parallel execution, NOT sequential).
- **PA weaver:** Synthesizes 9 reports. Takes ~5-10 minutes.
- **Total Wave 2 time:** ~20-35 minutes.

From the tier routing matrix:
- Middle-tier quick PA (2 auditors, 12 questions): ~10-15 minutes.
- Flagship Mode 4 PA (9 auditors, 48 questions): ~30-45 minutes.

**The delta:** +15-30 minutes per build for Mode 4 vs quick PA.

### C2. What Mode 4 Catches That Quick PA Misses

The evidence is emphatic. From MEMORY.md:

> "9 independent auditors catch what 2 PAs miss. The whitespace void was THE dominant failure (9/9 flagged) but previous 2-PA audit missed it entirely. Breadth of perspectives is the key value of Mode 4."

Specifically:
- The whitespace void (70-80% of scroll = blank cream) was flagged by 9/9 Mode 4 auditors but MISSED ENTIRELY by the 2-PA lighter audit.
- Container width was CONTRADICTED by Mode 4 (likely 960px not 2160px as previously claimed).
- Metaphor was downgraded from "structural" to "announced" (40% without labels) -- a finding that 2 auditors would likely miss.

### C3. Is 9 Auditors Every Time Justified?

**Yes, for 4 reasons:**

1. **The user's declaration:** "I ALWAYS WANT TO PRODUCE FLAGSHIP TIER CONTENT." Flagship content gets Flagship verification. Cutting PA depth while demanding Flagship quality is contradictory.

2. **Cost of MISSING defects is higher than cost of auditing.** A page shipped with imperceptible backgrounds (the flagship failure) requires remediation: another team of agents, another build cycle, another PA audit. The Mode 4 audit costs ~30 minutes. Remediation costs 4+ hours. Detection is cheaper than correction.

3. **PA enrichment compounds.** Every Mode 4 audit enriches the PA skill -- new questions, refined scoring, new dimensions. Running Mode 4 every time means the PA skill improves FASTER. Each audit makes future audits more valuable. Under quick PA, the PA skill improves slowly (fewer questions asked, fewer perspectives, fewer novel observations).

4. **Parallel execution minimizes wall-clock impact.** The 9 auditors run in PARALLEL. The screenshot pre-capture pattern eliminates Playwright contention. Wall-clock time for 9 auditors is similar to 2 auditors (~15-20 minutes) because they read saved images, not live pages. The cost is API calls, not human time.

### C4. Optimization: Adaptive Auditor Count

If cost becomes a concern, consider: run 4 auditors for the FIRST PA pass (covering 24 key questions). If PA-05 >= 3/4, ship. If PA-05 < 3/4, spawn the remaining 5 auditors for a full Mode 4 assessment. This adaptive approach captures most of Mode 4's benefit at ~60% of the cost for pages that pass on first attempt.

**Recommendation:** Start with full 9 auditors always. Optimize later only if cost becomes a real constraint. Premature optimization of verification is exactly how the original pipeline ended up with self-checks instead of external PA.

---

## PART D: FULL TC METAPHOR EVERY TIME -- NECESSARY?

### D1. The Case For Always-Metaphor

From pv2-flagship-remediation-crossref.md, Part A, Section A8:

> "PV2 for Middle tier: TC Phase 0 only (no metaphor). Builder reads recipe directly."
> "PV2 for Ceiling/Flagship: TC Phases 0-3.5 (full metaphor derivation)."

The tier routing matrix (Section A, TC Phases) shows Middle tier SKIPS Phases 1-3 entirely. This means no multi-axis questioning, no tension derivation, no metaphor collapse. The builder gets a density pattern (CRESCENDO/F-PATTERN/BENTO/PULSE) but no conceptual framework for WHY that pattern serves the content.

Under Flagship-Always, EVERY page gets metaphor derivation. Benefits:
- **Compositional coherence:** A metaphor provides a REASON for CSS decisions. "The geological strata metaphor means Section 5 has the densest, darkest background because it's the analytical core" is more coherent than "Section 5 gets a dark background because the F-PATTERN template says so."
- **Content-form connection:** The Addition Test (Phase 2) reveals whether the content has genuine tension. If YES, the metaphor captures that tension in visual form. If NO (fast exit), the page still benefits from the questioning process -- the builder knows WHY no metaphor is needed.
- **Mechanism selection quality:** Metaphor-driven mechanism selection (Phase 3.5 + Phase 4) produces mechanism COMBINATIONS that reinforce each other. Recipe-only selection produces individual deployments that may not interact.

### D2. The Case Against Always-Metaphor

From the pipeline analysis CLAUDE.md (Known Limitations, item 2):

> "3-variable confound. The remediation changed format (recipe), specificity (exact values), AND perception (thresholds) simultaneously. The causal variable is unresolved."

And from pv2-flagship-failure-crossref.md, F-24 and F-25:

> "F-25 (Fractal Coherence): Phase 8C checks scale coverage but not whether moments at different scales ECHO each other. The 'fractal' part is still judgment-based."

And the strongest counter-argument, from the Middle experiment:

> The Middle experiment used NO metaphor (TC Phase 0 only) and achieved PA-05 4/4 DESIGNED. N=1, but it's the HIGHEST PA-05 score in the entire project history.

### D3. Resolution: Always Metaphor, With Fast Exit

The Middle experiment's 4/4 is N=1 with potentially ideal content. The Ceiling experiment with metaphor scored 1.5/4 (but with catastrophic process failures). The remediation with metaphor-context scored 2.5/4. The evidence is INCONCLUSIVE on whether metaphor HELPS or HURTS.

**But the user's declaration resolves this:** "I ALWAYS WANT TO PRODUCE FLAGSHIP TIER CONTENT VIA WHAT WE DID WITH THE REMEDIATION PROMPT." The remediation operated on content that HAD a metaphor (the geological strata from the ceiling experiment). The user wants that level of compositional intentionality.

**Recommendation:** Always run TC Phases 0-3.5 with the Addition Test fast exit. If content has genuine tension -> full metaphor. If not -> skip to recipe with enhanced build plan (multi-axis questioning insights preserved even without metaphor collapse). The cost is ~15-20 minutes of TC planner time. Given that the total Flagship build is 90-180 minutes, this is a marginal addition.

---

## PART E: WHAT FROM REMEDIATION SHOULD BE ALWAYS-ON

The remediation (PA-05 1.5 -> 2.5) succeeded through 8 core innovations (from pv2-flagship-remediation-crossref.md, Part B). Under Flagship-Always, ALL 8 become permanent, universal features:

### E1. Perception-as-Quality Paradigm (ALWAYS-ON)
"If a human cannot SEE the difference without a color picker, do NOT write the CSS."
- Embedded in recipe, Appendix A, perception-thresholds.md, gate-runner.js.
- 15 RGB background delta (not 10 RGB). 2px font-size. 0.5px letter-spacing. 24px padding.
- UNIVERSAL: applies to every page, every build, every tier.

### E2. Per-Phase Perception Checks (ALWAYS-ON)
After every recipe phase (8 total), a visual verification question.
- "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?"
- Builder writes one sentence describing what they see (binary deliverable).
- UNIVERSAL: no page skips perception checks.

### E3. Deallocation Protocol (ALWAYS-ON for Remediation, REFERENCE for New Builds)
Phase 0 deallocation (delete sub-perceptual CSS before adding new).
- For new builds: the recipe's pre-vetted values prevent sub-perceptual accumulation.
- For remediation: Appendix B applies.
- UNIVERSAL: the PRINCIPLE is always-on (don't write invisible CSS). The PROTOCOL is context-dependent.

### E4. Recipe Format with Exact Values (ALWAYS-ON)
9 sequential phases with action verbs and specific CSS values.
- Constraint-to-action ratio 0.32:1 (recipe-dominant).
- Builder COPIES code blocks, does not INTERPRET abstract rules.
- UNIVERSAL: the recipe IS the builder's spec. Period.

### E5. HTML Restructuring as Standard Phase (ALWAYS-ON)
Phase 1 builds complete HTML with accessibility, grid wrappers, ARIA, skip links.
- Not a remediation step (delete/add) but a construction step (build from scratch).
- UNIVERSAL: every page gets full semantic HTML by construction.

### E6. Stacking Arithmetic (ALWAYS-ON)
Phase 0.6 calculates total boundary gaps. 108px cap for ALL pages (the Flagship threshold).
- Gate-runner SC-10 enforces programmatically.
- UNIVERSAL: no page gets 120px "relaxed" threshold. 108px everywhere.

### E7. Component Library Adoption (ALWAYS-ON)
Phase 1.4 names standard classes. Risk 5 warns against bypass.
- Gate runner checks for standard class usage.
- UNIVERSAL: every page uses the component library.

### E8. WCAG 2.1 AA Compliance (ALWAYS-ON)
Phase 7 + Phase 8F verification (8/8 items).
- BLOCKING gate for ALL pages (not WARNING for Middle).
- UNIVERSAL: every page is fully accessible.

---

## PART F: IS 240-400 MINUTES PER PAGE ACCEPTABLE?

### F1. What the Tier Routing Matrix Predicted

| Tier | Expected Build Time |
|------|-------------------|
| Floor | ~5 min |
| Middle | 15-25 min (70-100 in MEMORY.md's original estimate) |
| Ceiling | 45-60 min (150-220 in MEMORY.md) |
| Flagship | 90-180 min (240-400 in MEMORY.md) |

The discrepancy between pv2-tier-routing.md (90-180 min) and MEMORY.md (240-400 min) is because the tier routing document assumed optimized wave execution, while MEMORY.md's estimates included the full cost of Mode 4 PA and fix cycles.

### F2. Realistic Flagship-Always Build Time

Breaking down by wave:
- **Wave 0 (TC Analysis):** 15-30 minutes (always full metaphor with fast-exit option)
- **Wave 1 (Build Execution):** 40-90 minutes (9-phase recipe with checkpoints)
- **Wave 2 (Verification):** 20-35 minutes (screenshots + 9 parallel PA auditors + weaver)
- **Wave 3 (Fix Integration):** 0-60 minutes (0 if PA-05 >= 3/4 on first pass; up to 60 if 3 fix cycles needed)

**Realistic range: 75-215 minutes per page.**

### F3. Is This Acceptable?

The user must answer this. But consider the context:

**Arguments FOR accepting 75-215 min:**
1. The user explicitly requested Flagship quality. Quality takes time.
2. Pages built this way should require ZERO remediation. The 4+ hour remediation cycle is eliminated.
3. PA enrichment from every Mode 4 audit improves future builds. Cost amortizes over time.
4. Most time is wall-clock (parallel agents), not sequential. A human can do other work during Wave 2.
5. The Middle experiment took ~35 minutes but produced PA-05 4/4 with optimal content. Under Flagship-Always, most pages will be closer to 75-120 minutes (Wave 3 is conditional).

**Arguments AGAINST:**
1. For a site with 50 pages, 50 * 120 min = 100 hours of build time. This is significant.
2. Simple content (changelogs, API refs) may not justify 2+ hours of pipeline time.
3. The marginal quality improvement from Flagship vs Middle may be small for routine content.

**RECOMMENDATION:** Accept the time. The user's declaration is unambiguous. If time becomes a constraint, optimize the PIPELINE (faster TC, faster PA weaving, fewer fix cycles) rather than diluting quality with tiers. The remediation proved: one approach applied with maximum intensity > multiple approaches applied variably.

### F4. How to Reduce Build Time WITHOUT Reducing Quality

If time optimization is needed later:
1. **TC caching:** If content hasn't changed, reuse the previous build plan. (~15-30 min saved per unchanged page)
2. **PA adaptive depth:** 4 auditors first pass; full 9 only if PA-05 < 3/4. (~10-15 min saved for passing pages)
3. **Recipe specialization:** Pre-compute CSS blocks for common zone architectures. Builder copies more, derives less. (~10-20 min saved in Wave 1)
4. **Parallel gate running:** Run programmatic gates DURING Wave 2 (alongside PA), not sequentially. (~5 min saved)
5. **Checkpoint automation:** Replace manual planner approval at non-critical phases (Phase 0, 8) with automated gate verification. Reserve manual approval for Phase 1, 3, 4 only. (~10-15 min saved)

---

## PART G: DOES REMOVING TIERS ELIMINATE QUALITY CAPS?

### G1. What Quality Caps Existed in the Tier System

The tier system had EXPLICIT quality caps:

1. **Middle tier PA-05 threshold: "aspirational" not BLOCKING.** The Middle tier's PA-05 check was self-assessed, not external. This means a Middle page could self-declare 3/4 without independent verification.

2. **Middle tier gate strictness: 7 WARNING gates.** Zone differentiation, scale coverage, grids, typography variation, accessibility, mechanisms, and coherence were all WARNINGS for Middle -- meaning they could be ignored without blocking shipment.

3. **No metaphor for Middle = no compositional coherence.** Without TC Phases 1-3, Middle pages have individual mechanism deployments but no unifying conceptual framework. This caps them at "professionally competent" (3/4) but prevents "compositionally intentional" (4/4).

4. **2 PA auditors for Middle vs 9 for Flagship.** Fewer perspectives = fewer defects caught = lower quality floor.

### G2. What Flagship-Always Eliminates

**ALL quality caps are removed:**

1. **PA-05 is ALWAYS BLOCKING.** No self-assessment. External Mode 4 PA with 9 fresh-eyes auditors. Every page must achieve >= 3/4.

2. **ALL 16 gates are ALWAYS BLOCKING.** No warnings. Zone differentiation, scale coverage, fractal coherence -- all must pass.

3. **Metaphor is ALWAYS available.** TC's full pipeline provides the compositional framework that enables 4/4 DESIGNED (if the content has genuine tension).

4. **9 auditors ALWAYS.** Maximum breadth of perspectives for every page.

### G3. Does This Mean Every Page Will Be 4/4?

No. Removing quality caps removes the FLOOR, not the CEILING. The quality ceiling is determined by:

1. **Content quality.** If the source content is thin or repetitive, even Flagship treatment cannot manufacture depth. The recipe can ELEVATE content but not CREATE it.

2. **Builder compositional fluency.** The recipe gets to 3/4 (COMPOSED). Reaching 4/4 (DESIGNED) requires the builder to make creative decisions BEYOND the recipe -- the IS-NOT vs IS axes, spatial confidence, judgment calls at `[CONTENT DECISION]` markers. This is Opus-dependent.

3. **Metaphor quality.** A forced or weak metaphor can HURT more than no metaphor. The fast exit (Addition Test = YES) prevents forced metaphors, but even genuine metaphors vary in structural power.

4. **The 3/4 ceiling of recipe-only.** From pv2-flagship-remediation-crossref.md, Risk D3: "If PV2's recipe format is followed TOO literally, the result may cap at 3/4 because the builder writes exactly what they are told, nothing more." The recipe is the FLOOR. The builder's compositional intelligence is the ceiling.

**Expected outcome under Flagship-Always:**
- EVERY page achieves >= 3/4 COMPOSED (the BLOCKING gate).
- ~30-50% of pages achieve 3.5-4/4 DESIGNED (content with genuine tension + strong metaphor + skilled Opus builder).
- ~50-70% of pages achieve 3/4-3.5 (content without strong tension, or metaphor fast-exit, but still Flagship-quality execution).

---

## PART H: THE SIMPLIFIED FLAGSHIP-ALWAYS ARCHITECTURE

### H1. What /build-page Becomes

```
USER: /build-page [content]
        |
        v
  build-page SKILL.md (SIMPLIFIED ORCHESTRATOR)
  - NO tier classification
  - Reads content source
  - Spawns TC planner (always)
        |
        v
  TC SKILL.md (Phases 0-3.5)
  - Phase 0: Content analysis
  - Phase 1-2: Multi-axis questioning + tension derivation
  - Phase 2 FAST EXIT: If Addition Test = YES, skip Phases 3-3.5
  - Phase 3-3.5: Metaphor collapse + lock-in (if Addition Test = NO)
  - Output: Full build plan (_build-plan.md)
        |
        v
  BUILDER AGENT (always Opus)
  - Reads: operational-recipe.md + tokens.css + prohibitions.md
           + mechanism-catalog.md (FULL) + case-studies/_INDEX.md
           + _build-plan.md (from TC)
  - Executes 9-phase recipe (Phases 0-8)
  - Mandatory checkpoints at Phases 0, 1, 3, 4, 8
  - Planner reviews and approves each
        |
        v
  VERIFICATION (always full)
  - Programmatic: gate-runner.js (ALL 16 gates BLOCKING, 108px cap)
  - Perceptual: PA SKILL.md Mode 4 (9 auditors, 48 questions)
  - Screenshot pre-capture (1440px + 768px + 480px)
        |
        v
  FIX INTEGRATION (if needed)
  - If PA-05 < 3/4 or any gate FAIL
  - Max 3 fix cycles
  - Top 3 blocking issues per cycle
  - Quick PA re-check (2 auditors) after fixes
        |
        v
  SHIP DECISION
  - PA-05 >= 3/4 AND all gates PASS AND 0 soul violations = SHIP
  - 3 fix cycles exhausted = ESCALATE to user
```

### H2. What Gets Deleted from PV2

1. **pv2-tier-routing.md** -- entire document becomes unnecessary. All its content (per-tier phase execution, agent topology, gate strictness, expected outcomes) collapses to a single configuration: FLAGSHIP.

2. **Tier classification logic** -- ~145 lines from the orchestrator. Content signal classification, word-count routing, override handling, degradation protocol -- all gone.

3. **Per-tier gate configuration** -- replaced by a single configuration block. All 16 gates BLOCKING, 108px cap, 15 RGB, 5/5 scales.

4. **PA mode selection** -- always Mode 4. No mode routing logic.

5. **Agent architecture selection** -- always 4-wave. No single-agent Middle path.

### H3. The Simplified File Tree

```
PIPELINE V2 — FLAGSHIP-ALWAYS FILE STRUCTURE
=============================================

~/.claude/skills/
+-- build-page/
|   +-- SKILL.md                [SIMPLIFIED -- ~205 lines (was ~350)]
|       Entry point. No tier routing. Always full pipeline.
|
+-- tension-composition/
|   +-- SKILL.md                [UNCHANGED from PV2 plan]
|       +72 lines: recipe framing, verified enrichments
|
+-- perceptual-auditing/
    +-- SKILL.md                [UNCHANGED from PV2 plan]
        +56 lines: perception thresholds, gate runner ref


design-system/
+-- CLAUDE.md                   [SIMPLIFIED EDIT]
|   /build-page routing. No tier table. One path.
|
+-- compositional-core/
    +-- CLAUDE.md               [UNCHANGED from PV2 plan]
    +-- grammar/
    |   +-- mechanism-catalog.md    [UNCHANGED]
    |   +-- operational-recipe.md   [NEW -- ~650 lines]
    +-- guidelines/
    |   +-- perception-thresholds.md [NEW -- ~80 lines]
    +-- validation/
        +-- gate-runner.js         [SIMPLIFIED -- single config, no tier branching]
```

---

## PART I: RISKS AND MITIGATIONS

### Risk 1: Simple Content Gets Over-Engineered

**Risk:** A 50-word changelog gets metaphor derivation, 5-zone architecture, 9 PA auditors, and 16 blocking gates. This is like using a sledgehammer to hang a picture.

**Mitigation:** TC's Addition Test provides the fast exit. If content has no tension, metaphor is skipped. The recipe's zone count is determined by word count (Phase 0, Step 0.3): < 200 words = 2 zones. The page will STILL be Flagship-quality (all gates BLOCKING, full PA) but the SCOPE naturally scales down. A 2-zone, 5-mechanism, no-metaphor page that passes all 16 gates IS a Flagship-quality page for that content level.

### Risk 2: Cost Explosion for Large Sites

**Risk:** A 50-page site at 120 min/page = 100 hours. At ~12 agents per build, that's ~600 agent-sessions.

**Mitigation:** See Section F4 for time optimization strategies. Additionally: if building a full site, TC can be run once for the SITE (deriving the metaphor and zone system) and then per-page builds only customize within the established framework. This is NOT a tier downgrade -- it's batch optimization within Flagship.

### Risk 3: Metaphor Fatigue

**Risk:** If every page has a metaphor, the metaphors may become repetitive or forced across a site.

**Mitigation:** TC Phase 3.5's divergence mandate and case-study comparison prevent repetition. The fast exit (Addition Test = YES) prevents forced metaphors. For a site, the SITE has a master metaphor, and individual pages either inherit it or have page-level metaphors that complement it. This is compositional, not repetitive.

### Risk 4: PA Auditor Quality Degradation

**Risk:** Running 9 auditors on every page means large volumes of PA reports. If auditors become formulaic, Mode 4 loses its value.

**Mitigation:** Fresh-eyes pattern ensures each auditor has ZERO build context. Different auditors are assigned different questions, preventing coverage gaps. PA skill enrichment from each audit improves question quality. If auditors become formulaic, the enrichment process can introduce new questions or retire stale ones.

### Risk 5: The User Changes Their Mind

**Risk:** The user may decide after 5 Flagship builds that the time cost is too high and want tiers back.

**Mitigation:** The Flagship-Always architecture is a SIMPLIFICATION of the tier system, not a different system. Re-adding tiers later is straightforward: add tier classification logic back to the orchestrator, add conditional gate strictness, add PA mode selection. The recipe, skills, and file structure are tier-agnostic. Flagship-Always is the DEFAULT; tiers are an OPTIMIZATION that can be re-added if needed.

---

## PART J: SUMMARY OF CHANGES TO PV2 ARCHITECTURE

### What Changes

| PV2 Component | Before (3-Tier) | After (Flagship-Always) |
|---------------|-----------------|------------------------|
| Orchestrator | ~350 lines, tier routing | ~205 lines, no routing |
| TC invocation | Conditional (Ceiling+ only) | Always (with Addition Test fast exit) |
| Builder model | Opus for Ceiling+, Sonnet for Middle | Always Opus |
| File routing | Conditional (mechanism catalog for Ceiling+ only) | Always full set |
| Gate strictness | Per-tier (5/12/16 BLOCKING) | Always 16 BLOCKING |
| Stacked gap cap | Per-tier (120px / 120px / 108px) | Always 108px |
| PA mode | Per-tier (self-check / Mode 2 / Mode 4) | Always Mode 4 |
| Checkpoints | Per-tier (self / file-bus / mandatory) | Always mandatory (5 phases) |
| Handoff richness | Per-tier (light / medium / full) | Always full |
| Expected build time | 15-25 / 45-60 / 90-180 min | 75-215 min |
| pv2-tier-routing.md | 347-line reference document | DELETED |

### What Stays Unchanged

- operational-recipe.md (the 9-phase recipe is tier-agnostic)
- perception-thresholds.md (thresholds are universal)
- gate-runner.js (gates are the same; only configuration changes)
- tension-composition SKILL.md (already supports full pipeline)
- perceptual-auditing SKILL.md (already supports Mode 4)
- Anti-reproduction protocol (still applies)
- Verification prompt (still applies, now to single-tier output)
- Communication protocol (always flagship-level)
- Handoff protocol (always full handoff)

### Lines of Code Impact

| File | 3-Tier Lines | Flagship-Always Lines | Delta |
|------|-------------|----------------------|-------|
| build-page SKILL.md | ~350 | ~205 | -145 |
| gate-runner.js | ~250 (with tier config) | ~220 (single config) | -30 |
| design-system/CLAUDE.md | ~760 (tier table) | ~740 (no tier table) | -20 |
| pv2-tier-routing.md | 347 | 0 (DELETED) | -347 |
| **Total** | ~1,707 | ~1,165 | **-542** |

**Net effect: 542 fewer lines of infrastructure.** The Flagship-Always architecture is 32% smaller than the 3-tier architecture.

---

## CONCLUSION

Eliminating tier routing and always running Flagship is:

1. **Simpler** -- 542 fewer lines, 32% less orchestrator complexity, zero conditional branching.
2. **Higher quality floor** -- all 16 gates BLOCKING, all pages verified by 9 independent auditors.
3. **Aligned with the user's declaration** -- "I ALWAYS WANT TO PRODUCE FLAGSHIP TIER CONTENT."
4. **Aligned with the remediation's lesson** -- one approach applied with maximum intensity beats variable approaches applied conditionally.
5. **Reversible** -- tiers can be re-added as an optimization if time becomes a constraint.

The primary cost is time: 75-215 minutes per page vs 15-25 minutes for Middle. This is the user's explicit tradeoff.

The primary risk is over-engineering simple content. This is mitigated by TC's Addition Test fast exit and the recipe's natural scaling (zone count proportional to word count).

**The user should know:** This means NO quick pages. Every page gets the full pipeline. Every page waits for 9 auditors. Every page must pass 16 gates. This is the price of "always Flagship." If they accept this price, the architecture is simpler, the quality floor is higher, and the pipeline is more predictable.

---

**END OF FLAGSHIP-ALWAYS ANALYSIS**

**Statistics:**
- PV2 documents cross-referenced: 7 (architecture diagram, tier routing, form proposal, file structure, verification prompt, flagship gate audit, failure cross-ref, remediation cross-ref)
- Architecture components analyzed: 10 (orchestrator, TC, recipe, builder, gates, PA, checkpoints, handoff, file routing, communication)
- Lines impact: -542 (32% reduction)
- Risks identified: 5 (with mitigations for each)
- Optimization strategies: 5 (for time reduction without quality loss)
