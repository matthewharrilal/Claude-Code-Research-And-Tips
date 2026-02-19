# SKILL DESIGN: Enrichment vs New Skills

**Author:** Enrichment vs New Skills Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #26
**Sources:** TC SKILL.md (1,878 lines), PA SKILL.md (~848 lines), PV2-PIPELINE-DIAGRAM.md (978 lines), 14-MASTER-SYNTHESIS.md (615 lines)
**Blocks:** Task #31 (Contrarian Challenge)

---

## 1. THE USER'S INSIGHT — WHAT "ENRICHMENT" ACTUALLY MEANS

The user's statement is precise: "Maybe the answer isn't adding more content to these skills, but rather enriching these skills to do what they're supposed to do well. Then adding new skills from a pipeline to create this strong sense of invocation throughout."

This contains TWO distinct claims:

**Claim A:** Existing skills should be enriched to be MORE OPERATIONAL, not longer.
**Claim B:** New skills should fill GAPS that no existing skill covers.

And a meta-claim:

**Claim C:** The pipeline should feel like "invocation throughout" -- skills calling skills with compositional intelligence flowing between them, not compressed into summaries at boundaries.

---

## 2. EXISTING SKILLS: WHAT THEY DO vs. WHAT THEY SHOULD DO

### 2.1 Tension-Composition (TC) — 1,878 lines

**What TC claims to do:** Transform content into compositional HTML through tension derivation, metaphor collapse, and mechanism deployment.

**What TC actually does well:**
- Phase 1 (Multi-Axis Questioning): Genuinely operational. 9 core axes + 5 conditional, each with yield ratings. An agent reading this KNOWS what to ask.
- Phase 2 (Tension Derivation): Genuinely operational. Addition Test is binary. BECAUSE test is concrete. Richness formula is calculable.
- Phase 3 (Metaphor Collapse): Mixed. The search query format (Step 3.4) is operational. The domain search menu is concrete. But the 6-criterion rubric (3.5G) is evaluation, not generation -- it tells you how to SCORE a metaphor, not how to PRODUCE one.
- Phase 3.5 (Lock-In Gate): Operational. Binary checks.

**What TC does POORLY (theory masquerading as recipe):**
- Phase 0D (Tier Routing): 145 lines of conditional branching that ALWAYS FLAGSHIP eliminates entirely. This is DEAD CODE under PV2.
- Phase 4.0 (Perceptual Guardrails): 200+ lines of guardrail TABLES that list min/max values but never say "here is the CSS to write." These are reference material, not instructions. A builder reads "min section breathing zone: 48px" and STILL doesn't know what CSS to write.
- Phase 4.1-4.2 (Property Extraction + Translation Grammar): The 5-category taxonomy (Spatial/Temporal/Material/Behavioral/Relational) is a THINKING framework, not a DOING framework. It helps the planner CLASSIFY properties but doesn't help the builder WRITE CSS for them. The translation grammar table (Step 4.2) is closer to operational but still abstract -- "Weight: Heavy = border: 3px solid" is a lookup, not a recipe.
- Phase 4.3-4.6 (Coherence + Inventory + Transitions): Theory-heavy. Rule C-1 through C-5 say WHAT to check but not HOW to fix failures. The transition grammar table (4.6) IS operational -- it's a lookup that produces specific CSS patterns.
- Phase 4.7 (Fractal Gate): Requires a deliverable (scale coverage table) but the examples are abstract. The Middle-tier example is the ONLY concrete one.
- Phase 4.9 (Tokenization): Genuinely operational. Formula + examples + self-check protocol.

**LINE COUNT ANALYSIS:**

| Category | Lines | % of Total | Operational? |
|----------|-------|------------|-------------|
| Tier routing (Phase 0D + context boxes) | ~250 | 13% | DEAD under ALWAYS FLAGSHIP |
| Metaphor derivation (Phases 1-3.5) | ~550 | 29% | MOSTLY YES -- the pipeline's core strength |
| Guardrail tables (Phase 4.0) | ~200 | 11% | REFERENCE, not recipe |
| Mechanism deployment (Phases 4.1-4.6) | ~350 | 19% | MIXED -- taxonomy is theory, grammar is recipe |
| Gates (Phases 3.5, 4.7, 4.7B) | ~150 | 8% | YES -- binary checks with deliverables |
| Output + edge cases + appendix | ~200 | 11% | YES |
| Warnings (Appendix R6) | ~180 | 9% | YES -- concrete builder directives |

**TC's ENRICHMENT DIAGNOSIS:** ~250 lines of dead tier routing + ~200 lines of guardrail reference tables = **~450 lines (24%) that should be REMOVED or RELOCATED**, not enriched. The skill would be 1,428 lines and MORE operational by subtraction alone.

The remaining 1,428 lines break into:
- ~750 lines genuinely operational (Phases 1-3.5 + gates + warnings + output)
- ~350 lines mixed (mechanism deployment -- partly theory, partly recipe)
- ~330 lines that should be either tightened or extracted into separate skills

### 2.2 Perceptual-Auditing (PA) — ~848 lines

**What PA claims to do:** Evaluate HTML pages through perceptual questions, not code inspection.

**What PA actually does well:**
- 48 PA questions across 4 tiers: Genuinely operational. Each question catches a specific failure mode. The questions ARE the skill.
- 4 Modes (Embedded/Quick/Standard/Standalone): Operational. Team structures defined. Task graphs specified.
- Cold Look Protocol: Operational. 4-step process, locked reactions.
- Scroll-Through Protocol: Operational. JavaScript code provided.
- Quantitative Guardrails: Operational reference tables with min/optimal/max.
- Dual Severity Track: Operational. Rule Track + Perception Track with explicit interaction rules.

**What PA does POORLY:**
- Role CAN/CANNOT matrices: Redundant with prompt instructions -- these will be in the orchestrator, not here.
- Information Isolation section: Process enforcement that belongs in the orchestrator, not the skill.
- Error Handling: Operational but belongs in orchestrator.
- Metaphor-Awareness Principles: 100+ lines of evaluation philosophy. Valuable but not operational for auditors -- auditors should receive QUESTIONS, not philosophy. The philosophy should inform question DESIGN, not question ANSWERING.

**LINE COUNT ANALYSIS:**

| Category | Lines | % of Total | Operational? |
|----------|-------|------------|-------------|
| Critical warnings + principles | ~65 | 8% | PHILOSOPHY -- guides skill design, not execution |
| 48 PA questions (all tiers) | ~250 | 29% | CORE OPERATIONAL -- the skill's essence |
| Quantitative guardrails | ~100 | 12% | REFERENCE -- operational for builders, not auditors |
| Void prevention (Tier 4) | ~80 | 9% | YES -- binary tests + severity calibration |
| 4 Modes + team structures | ~120 | 14% | YES -- operational deployment specs |
| Protocols (Cold Look, Scroll-Through, Zone Sweep) | ~80 | 9% | YES -- step-by-step procedures |
| Role matrices + isolation + error handling | ~80 | 9% | ORCHESTRATOR CONCERN -- not skill content |
| Metaphor-awareness + sovereignty | ~70 | 8% | PHILOSOPHY -- informs design, not execution |

**PA's ENRICHMENT DIAGNOSIS:** PA is ALREADY mostly operational. ~80 lines of orchestrator concerns + ~135 lines of philosophy = **~215 lines (25%) that should be RELOCATED**, making PA ~633 lines of pure operational audit skill.

PA's gap is NOT operational density -- it's that **PA cannot FIX what it finds.** PA is evaluation-only. The diagnosis-to-fix pipeline is currently manual.

---

## 3. THE GAPS — WHAT NO CURRENT SKILL COVERS

Tracing through PV2's 5-wave architecture, here are the capabilities that exist NOWHERE in current skills:

### Gap 1: Build Plan Generation (TC -> Builder Handoff)
**Where in PV2:** Between Wave 0 (TC) and Wave 1 (Builder)
**What's missing:** TC produces a thought process document. The builder needs a `_build-plan.md` with zone count, section inventory, mechanism deployment per category, background colors with >= 15 RGB deltas, transition plan with 3+ types, and builder warnings. NOTHING in TC's current output format produces this specific artifact.
**Current workaround:** The build plan format is described in PV2-PIPELINE-DIAGRAM but isn't codified in any skill.

### Gap 2: Operational Recipe Execution (The Builder's Playbook)
**Where in PV2:** Wave 1 (9-phase sequential build)
**What's missing:** The operational-recipe.md (~650 lines) doesn't exist yet. This is the DEFINING artifact of PV2 -- sequential CSS phases with action verbs, specific values, and inline perception checks. No current skill covers "how to write CSS that implements a compositional plan."
**Current workaround:** Builders get ad-hoc instructions per experiment.

### Gap 3: Programmatic Gate Running (Verification)
**Where in PV2:** Wave 2, Layer 1 (12 binary gates via Playwright)
**What's missing:** gate-runner.js (~300 lines). 12 gates checking getComputedStyle against thresholds. No current skill covers "run automated verification on HTML output."
**Current workaround:** Manual Playwright inspection by verifier agents.

### Gap 4: Metaphor Validation (Fresh-Eyes Check)
**Where in PV2:** Wave 0.5 (Binary: STRUCTURAL or ANNOUNCED)
**What's missing:** A skill that reads ONLY a metaphor description and assesses whether it suggests specific CSS forms. Currently this is done ad-hoc or by the TC planner self-evaluating (the F-40 bias problem).
**Current workaround:** No workaround -- this is the 14th BLOCKING failure that PV2 identifies.

### Gap 5: Fix Integration (Iterative Repair)
**Where in PV2:** Wave 3 (max 3 cycles)
**What's missing:** A protocol for reading PA findings, translating them to CSS fixes, applying fixes, and re-verifying. Currently ad-hoc per experiment.
**Current workaround:** Builder reads PA report and improvises.

### Gap 6: Perception Threshold Enforcement (Cross-Cutting)
**Where in PV2:** Embedded at 4 layers (recipe, gates, thresholds file, PA)
**What's missing:** A canonical perception-thresholds.md (~80 lines) that defines the threshold table + 6 channel definitions. Currently thresholds are scattered across TC guardrails, PA guardrails, and various retrospective documents, with 3 conflicting values for stacked gap alone (108px, 120px, 192px).
**Current workaround:** Each document defines its own thresholds, causing drift.

### Gap 7: Channel-Mapping (Per-Boundary Specification)
**Where in PV2:** Recipe Phase 8 (cascade value table deliverable)
**What's missing:** A skill or protocol for specifying WHICH CSS channels shift at EACH section boundary, with specific values. The cascade value table is "the single most operationally useful invention" (File 10) but no skill produces or verifies it.
**Current workaround:** Builders claim coherence without proving it.

---

## 4. DECISION MATRIX — FOR EACH GAP

### Decision Framework

For each gap, evaluate four options:
- **(A) Enrich TC:** Add to tension-composition skill
- **(B) Enrich PA:** Add to perceptual-auditing skill
- **(C) New Focused Skill:** Create a new standalone skill
- **(D) Embed in Orchestrator:** Put in /build-page orchestrator logic

Criteria:
1. **Compression risk:** Does adding this to an existing skill make the skill too long for agents to fully absorb?
2. **Invocation clarity:** Is it obvious WHEN to use this capability?
3. **Boundary loss:** Does crossing a skill boundary compress the intelligence?
4. **Operational density:** Is every line of the result a DOING instruction?

### Gap 1: Build Plan Generation

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (A) Enrich TC | TC already does content analysis; build plan is its natural output | TC is already 1,878 lines (1,428 after ALWAYS FLAGSHIP trim); adding structured output format adds ~100 lines | **ENRICH TC** |
| (C) New skill | Clean separation | Artificial -- build plan IS TC's output, just formatted differently | REJECT |
| (D) Orchestrator | Keeps TC lean | Orchestrator shouldn't know about compositional plans | REJECT |

**Verdict: ENRICH TC.** The build plan is TC's Phase 5 output reformatted. Add a structured output template (~50 lines) to TC's output phase. TC after trim (1,428) + build plan format (50) = 1,478 lines. Acceptable.

**Enrichment spec:** Replace TC's current "Output A" (thought process document) with a structured `_build-plan.md` format that includes: zone count, section inventory, mechanism deployment per category with justifications, background color specifications with RGB deltas calculated, transition plan with type assignments, isomorphism table (if metaphor), builder warnings.

### Gap 2: Operational Recipe Execution

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (A) Enrich TC | Keeps everything in one skill | TC is a TELESCOPE (planning); recipe is a MICROSCOPE (execution). Wrong instrument. TC's planner agent would carry 650 lines it never uses. | REJECT |
| (C) New skill | Clean role separation: TC plans, recipe executes | New skill = new boundary = compression risk | **NEW SKILL** |
| (D) Orchestrator | Orchestrator routes recipe to builder | Orchestrator is coordination, not composition | PARTIAL -- orchestrator ROUTES the recipe, but the recipe itself needs to be a readable artifact |

**Verdict: NEW PERMANENT FILE (not a skill).** The operational recipe is NOT a skill -- it's a REFERENCE DOCUMENT that the builder reads. It's `design-system/compositional-core/operational-recipe.md`. The orchestrator routes it to the builder. No invocation needed -- the builder just reads it.

This is a critical distinction: not everything is a skill. The recipe is a DOCUMENT, not a PROCEDURE. Skills are invoked. Documents are read.

### Gap 3: Programmatic Gate Running

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (B) Enrich PA | Gates are verification, PA is verification | PA is PERCEPTUAL verification; gates are PROGRAMMATIC verification. Different instruments. PA auditors must NOT see code. | REJECT |
| (C) New skill | Clean separation of programmatic vs perceptual | Adds another skill to maintain | REJECT -- too small for a skill |
| (D) Orchestrator | Gates are binary checks the orchestrator runs inline | Gate runner is ~300 lines of JavaScript, not a skill invocation | **EMBED IN ORCHESTRATOR** |

**Verdict: EMBED AS ARTIFACT.** The gate runner is a JavaScript file (`gate-runner.js`) that the orchestrator executes. Not a skill. Not an enrichment. A tool the orchestrator calls.

### Gap 4: Metaphor Validation

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (A) Enrich TC | TC already has Phase 3.5 (lock-in gate) | Self-evaluation bias IS the problem. TC validating its own metaphor = continuation bias. | REJECT |
| (C) New micro-skill | Forces fresh context; eliminates self-eval bias | Very small (~30 lines); is this worth a skill? | **YES -- as a protocol within the orchestrator** |
| (D) Orchestrator | Orchestrator spawns fresh-eyes agent with specific instructions | Keeps it simple; orchestrator already manages agent spawning | **EMBED IN ORCHESTRATOR** |

**Verdict: ORCHESTRATOR PROTOCOL.** The metaphor validation is ~30 lines of agent instructions: "Read ONLY the metaphor description. Does it suggest specific CSS forms? YES = STRUCTURAL (proceed). NO = ANNOUNCED (return to TC)." This is an orchestrator-managed step, not a skill.

### Gap 5: Fix Integration

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (C) New skill | Clean separation of build vs fix | Fix cycle is just "builder applies top-3 issues" -- too simple for a skill | REJECT |
| (D) Orchestrator | Fix cycle is orchestration (read PA report, route to builder, re-verify) | Yes -- this is pure orchestration | **EMBED IN ORCHESTRATOR** |

**Verdict: ORCHESTRATOR LOGIC.** The fix cycle is: PA weaver identifies top-3 issues -> orchestrator sends to builder -> builder applies fixes -> orchestrator triggers 2-PA re-check -> repeat up to 3x. This is flow control, not compositional intelligence.

### Gap 6: Perception Threshold Enforcement

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (A) Enrich TC | TC already has guardrail tables in Phase 4.0 | TC's tables are REFERENCE; thresholds need to be a single source of truth | PARTIAL |
| (B) Enrich PA | PA already has quantitative guardrails section | PA's tables are for AUDITORS; thresholds also needed by BUILDERS | PARTIAL |
| (C) New file | Single canonical source that both skills reference | Adds a file but eliminates duplication | **NEW PERMANENT FILE** |

**Verdict: NEW PERMANENT FILE.** `design-system/compositional-core/perception-thresholds.md` (~80 lines). BOTH TC and PA reference this file instead of maintaining duplicate threshold tables. TC's Phase 4.0 guardrail tables get replaced with: "Read perception-thresholds.md for current values." PA's quantitative guardrails section gets replaced with: "Read perception-thresholds.md for current values."

This is ENRICHMENT BY SUBTRACTION -- both skills get shorter and more operational by extracting shared reference material into a canonical file.

### Gap 7: Channel-Mapping

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| (A) Enrich TC | TC's Phase 4.3 (coherence checking) is where channel mapping belongs | TC's current coherence rules (C-1 through C-5) are abstract; making them concrete with channel specifications would be genuine enrichment | **ENRICH TC** |
| (C) New skill | Clean separation | Channel mapping without metaphor context is meaningless | REJECT |

**Verdict: ENRICH TC.** Replace TC's abstract coherence rules (C-1 through C-5) with a concrete channel-mapping deliverable: "For each section boundary, specify which of the 6 CSS channels shift and by how much. Reference perception-thresholds.md for minimum deltas." This is ~30 lines replacing ~50 lines of abstract rules. Net reduction.

---

## 5. THE "ALWAYS FLAGSHIP" SIMPLIFICATION

Under ALWAYS FLAGSHIP, how much NOISE gets removed from existing skills?

### TC SKILL.md Removals:

| Section | Lines | Reason for Removal |
|---------|-------|--------------------|
| Phase 0D Tier Classification table | ~30 | No tier routing |
| Middle-tier routing ("For Middle-tier pages, SKIP Phases 1-3") | ~60 | Always run full pipeline |
| Middle-tier pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE) | ~30 | Metaphor always derived, not selected |
| Middle-tier output format | ~10 | One output format |
| Floor-tier references | ~10 | No floor tier |
| Phase 0D-CEILING context box | ~25 | Everything IS ceiling+ |
| Tier-calibrated requirements in Phase 4.7 (4 tiers listed) | ~15 | Always flagship requirements |
| Tier-calibrated requirements in Phase 4.7B (3 tiers listed) | ~10 | Always flagship requirements |
| Tier-calibrated mechanism counts ("Floor: 5, Middle: 8-10...") | ~20 | Always per-category deployment |
| "Validated hypothesis" disclaimers | ~20 | Validated by now |
| "Middle-tier baseline" references (6 occurrences) | ~30 | Historical, not operational |
| "Graceful degradation protocol" | ~15 | No degradation under ALWAYS FLAGSHIP |
| Phase 4.9 "NOTE: This phase is OPTIONAL" | ~5 | Always required |
| **TOTAL REMOVABLE** | **~280** | **15% of current skill** |

TC after ALWAYS FLAGSHIP trim: **~1,598 lines** (down from 1,878).

### PA SKILL.md Removals:

| Section | Lines | Reason for Removal |
|---------|-------|--------------------|
| "Ceiling+ TIER ELEVATION" conditional language | ~15 | Always ceiling+ |
| "For Ceiling+ audits" conditional phrasing (scattered) | ~20 | Always applies |
| Mode 2 (Quick) description | ~10 | Always Mode 4 under ALWAYS FLAGSHIP |
| Mode 3 (Standard) description | ~15 | Always Mode 4 |
| Tier-conditional phrasing in PA-05c ("Ceiling+ only") | ~10 | Always applies |
| "Void Prevention (Ceiling+ Only)" header qualifier | ~5 | Always applies |
| "Embedded Mode Integration" (Mode 1 reference) | ~5 | Builders still do Mode 1, but PA SKILL focuses on Mode 4 |
| **TOTAL REMOVABLE** | **~80** | **~9% of current skill** |

PA after ALWAYS FLAGSHIP trim: **~768 lines** (down from ~848).

### Space Freed for REAL Operational Content:

| Skill | Lines Removed | Lines for New Content | Net Change |
|-------|---------------|----------------------|------------|
| TC | 280 | +50 (build plan format) + 30 (channel-mapping) - 50 (abstract coherence rules replaced) = +30 | -250 net (TC shrinks to ~1,628) |
| PA | 80 | +0 (PA doesn't need new content, it needs relocated content) | -80 net (PA shrinks to ~768) |
| **perception-thresholds.md** | 0 | +80 (new file, but ~200 lines removed from TC+PA combined) | -120 net across ecosystem |

**ALWAYS FLAGSHIP creates ~360 lines of breathing room** across existing skills without adding a single new line.

---

## 6. THE THREE APPROACHES — EVALUATED

### Approach A: ENRICH EXISTING (Add ~200 lines to TC, ~0 to PA)

TC grows from 1,878 to ~2,078 lines (adding scale/channel/coherence deployment).

**Problem identified in task description:** "More text = more likely to be skimmed/compressed by LLM."

**Analysis:** This is the WRONG diagnosis. TC's problem isn't length -- it's NOISE-TO-SIGNAL. TC at 1,878 lines with 450 lines of dead code and abstract theory has WORSE operational density than TC at 1,628 lines after trimming. Adding 200 lines of operational content to a trimmed TC produces a BETTER skill, not a worse one. The issue is what PERCENTAGE of lines are operational, not the absolute count.

| Metric | TC Current | TC Trimmed | TC Trimmed + Enriched |
|--------|-----------|------------|----------------------|
| Total lines | 1,878 | 1,598 | 1,628 |
| Operational lines | ~750 | ~750 | ~830 |
| Operational % | 40% | 47% | 51% |

**Verdict on Approach A:** VIABLE but misses the "new skills" insight. Enrichment BY SUBTRACTION + targeted addition makes TC leaner and more operational.

### Approach B: NEW FOCUSED SKILLS (3-4 new skills, ~100-150 lines each)

New skills: `/scale-verify` (100 lines), `/channel-coherence` (100 lines), `/compositional-brief` (150 lines).

**Problem:** More skills = more boundaries = more compression opportunities.

**Analysis:** This IS a real problem, but the solution isn't "fewer skills" -- it's "correct boundaries." The question is: does each proposed skill represent a GENUINE cognitive boundary (different agent, different context, different time) or an ARTIFICIAL one (same agent would use both simultaneously)?

| Proposed Skill | Same Agent as TC? | Same Time as TC? | Genuine Boundary? |
|----------------|-------------------|------------------|-------------------|
| /scale-verify | No -- verifier agent, not planner | No -- after build | YES |
| /channel-coherence | Yes -- planner writes coherence | Yes -- during Phase 4 | NO -- should be in TC |
| /compositional-brief | Yes -- planner writes brief | Yes -- TC output | NO -- should be TC's output format |

**Verdict on Approach B:** PARTIALLY CORRECT. `/scale-verify` has a genuine boundary (different agent, different time). `/channel-coherence` and `/compositional-brief` are TC enrichments, not separate skills.

### Approach C: HYBRID (Trim TC, add 1-2 focused operational skills)

TC trimmed to focus on WHAT IT UNIQUELY DOES (tension derivation, metaphor, compositional planning). New skills for WHAT NEEDS STRUCTURE (verification, gate running, fix integration).

**Analysis:** This matches the PV2 architecture exactly:
- TC = Wave 0 (content analysis, planning)
- Recipe = Reference document (builder reads)
- Gates = Artifact (orchestrator runs)
- PA = Wave 2 (evaluation)
- Fix integration = Orchestrator logic

The ONLY genuinely new SKILL needed is the `/build-page` orchestrator itself. Everything else is either an enrichment of TC/PA, a reference document, or an embedded artifact.

**Verdict on Approach C:** CORRECT ANSWER. Here's the prescription:

---

## 7. THE PRESCRIPTION

### What Gets ENRICHED (2 existing skills, both get SHORTER)

**TC SKILL.md:** 1,878 -> ~1,628 lines (-250)
- REMOVE: 280 lines of tier routing, Middle-tier shortcuts, validated-hypothesis disclaimers
- ADD: 50 lines of structured `_build-plan.md` output format
- REPLACE: 50 lines of abstract coherence rules (C-1 to C-5) with 30 lines of concrete channel-mapping deliverable
- REPLACE: 200 lines of Phase 4.0 guardrail tables with 10-line reference to `perception-thresholds.md`
- NET: TC shrinks by 250 lines and becomes 51% operational (up from 40%)

**PA SKILL.md:** 848 -> ~768 lines (-80)
- REMOVE: 80 lines of tier-conditional language, Mode 2/3 descriptions, orchestrator concerns
- REPLACE: 100 lines of quantitative guardrails with 10-line reference to `perception-thresholds.md`
- ADD: Nothing -- PA is already operational. It needs relocation, not addition.
- NET: PA shrinks by 80 lines and becomes ~90% operational (up from ~75%)

### What Gets CREATED (4 new permanent files, 0-1 new skills)

| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `~/.claude/skills/build-page/SKILL.md` | **SKILL** (the only new skill) | ~205 | Fire-and-forget orchestrator. Invokes TC, validates plan, spawns builder, runs gates, spawns PA, manages fix cycles. |
| `design-system/compositional-core/operational-recipe.md` | **DOCUMENT** | ~650 | 9-phase sequential build recipe. Extracted from File 42. Builder reads this. |
| `design-system/compositional-core/perception-thresholds.md` | **DOCUMENT** | ~80 | Canonical threshold table + 6-channel definitions. TC and PA both reference this. |
| `design-system/compositional-core/gate-runner.js` | **ARTIFACT** | ~300 | 12 binary gates via Playwright. Orchestrator executes this. |

### What "Invocation Throughout" Means Concretely

The user's vision of "strong sense of invocation throughout" means:

1. **TC invokes compositional intelligence** by outputting a structured build plan with specific CSS values -- not a thought process document that the builder has to interpret.

2. **The recipe invokes TC's intelligence** by being structured around TC's output: "Read the build plan's zone count. For each zone, apply the background color from the plan. Verify >= 15 RGB delta." The recipe CONSUMES TC's output directly.

3. **PA invokes fresh-eyes perception** by receiving ONLY screenshots -- no recipe, no plan, no code. PA's questions invoke genuine perceptual reaction, not compliance checking.

4. **The gates invoke programmatic verification** by running getComputedStyle against thresholds from `perception-thresholds.md` -- the SAME thresholds that TC used to plan and the recipe used to build.

5. **The orchestrator invokes all of the above** in sequence, managing handoffs between them.

The "invocation" is not skills calling skills. It's a **shared intelligence substrate** (the build plan, the thresholds, the recipe) that flows through the pipeline without compression at each boundary. TC writes specifics into the plan. The builder reads those specifics in the recipe. The gates verify those specifics programmatically. PA evaluates whether those specifics are PERCEPTIBLE.

**The intelligence doesn't cross boundaries through SUMMARIZATION. It crosses through STRUCTURED ARTIFACTS.**

This is the key insight: the problem was never "skills don't invoke each other." The problem was that intelligence got COMPRESSED at boundaries. The fix isn't more invocation -- it's STRUCTURED HANDOFFS.

---

## 8. THE "MENTION" vs "INVOKE" DISTINCTION

The user asked about the difference between "deploy mechanisms" (mention) and "outputting actual CSS that deploys mechanisms" (invoke).

**Current state (MENTION):**
- TC Phase 4.1: "Extract metaphor physical properties across 5 categories" -- tells you to THINK about properties
- TC Phase 4.2: Translation Grammar lookup table -- tells you what CSS COULD look like
- TC Phase 4.3: Coherence rules C-1 through C-5 -- tells you to CHECK coherence

**Desired state (INVOKE):**
- TC outputs `_build-plan.md` with: "Zone 2 background: #F0EBE3. Zone 3 background: #E5DDD3. Delta: 15 RGB points (PASS)."
- Recipe Phase 3: "Set zone backgrounds from build plan. Verify delta >= 15 RGB between adjacent zones. Can you SEE the zone boundaries without borders? If no, increase delta."
- Gate SC-09: `getComputedStyle(zone2).backgroundColor` RGB values compared to `getComputedStyle(zone3).backgroundColor` RGB values. Delta >= 15? PASS/FAIL.

The difference: MENTION describes a capability abstractly. INVOKE produces a specific CSS value, a specific verification step, and a specific pass/fail criterion. The entire chain from plan to build to verify operates on the SAME concrete value.

**How this applies to enrichment:**

TC's enrichment is NOT "add more mechanisms to the catalog." It's "make TC's OUTPUT contain specific CSS values that flow through the entire pipeline." When TC writes "#F0EBE3" in the build plan, and the recipe says "set background to the build plan's zone 2 color," and the gate checks that color against the adjacent zone -- THAT is invocation. The compositional intelligence is embodied in the artifact, not described in the skill text.

---

## 9. WHAT "MAXIMUM INTENSITY FLAGSHIP" MEANS FOR SKILL ARCHITECTURE

Under ALWAYS FLAGSHIP:

| Skill Concern | Old (3-tier) | New (ALWAYS FLAGSHIP) |
|---------------|-------------|----------------------|
| TC | "Classify tier, then route to appropriate phases" | "Always run Phases 0-3.5. Always full metaphor derivation (unless Addition Test = NO). Always per-category minimums." |
| PA | "Select Mode 2/3/4 based on tier" | "Always Mode 4. Always 9 auditors. Always 48 questions." |
| Recipe | "Different recipes per tier" | "One recipe. 9 phases. Maximum intensity." |
| Gates | "Tier-specific thresholds" | "One set. Tightest values. All BLOCKING." |

This simplification REDUCES skill text by ~360 lines while INCREASING operational clarity. Every conditional ("if Ceiling+, then...") becomes unconditional ("always..."). Agents don't have to DECIDE which path to take -- there is ONE path.

---

## 10. SUMMARY DECISION TABLE

| Gap | Decision | Rationale |
|-----|----------|-----------|
| Build plan generation | **ENRICH TC** (reformat output, +50 lines) | TC already analyzes content; build plan is its natural structured output |
| Operational recipe | **NEW DOCUMENT** (operational-recipe.md, ~650 lines) | Not a skill -- a reference document the builder reads |
| Gate running | **NEW ARTIFACT** (gate-runner.js, ~300 lines) | Not a skill -- a tool the orchestrator executes |
| Metaphor validation | **ORCHESTRATOR PROTOCOL** (~30 lines in /build-page) | Too small for a skill; belongs in orchestration flow |
| Fix integration | **ORCHESTRATOR LOGIC** (~40 lines in /build-page) | Pure flow control, not compositional intelligence |
| Perception thresholds | **NEW DOCUMENT** (perception-thresholds.md, ~80 lines) | Single source of truth, both TC and PA reference it |
| Channel-mapping | **ENRICH TC** (replace abstract coherence rules, -20 lines net) | Channel mapping without metaphor context is meaningless |
| Tier routing removal | **TRIM TC** (-280 lines) | Dead code under ALWAYS FLAGSHIP |
| Orchestrator concerns in PA | **TRIM PA** (-80 lines) | Belongs in /build-page, not in PA |

**Net result:**
- TC: 1,878 -> 1,628 (-250 lines, 51% operational, up from 40%)
- PA: 848 -> 768 (-80 lines, ~90% operational, up from ~75%)
- 1 new skill: `/build-page` (~205 lines)
- 3 new files: recipe (~650), thresholds (~80), gate-runner (~300)
- Total new permanent lines: ~1,235
- Total lines REMOVED from existing skills: ~330
- Net ecosystem growth: ~905 lines

The answer to "enrichment vs new skills" is: **BOTH, but enrichment means SUBTRACTION, and new skills means ONE orchestrator + THREE reference artifacts.**

---

## 11. CONTRARIAN SURFACE: WHAT COULD BE WRONG HERE

1. **The recipe-as-document might be wrong.** If the recipe needs to be ADAPTIVE (changing based on content type), it's a skill, not a document. Counter: Under ALWAYS FLAGSHIP with Addition Test fast-exit, the recipe is universal.

2. **TC might be too long even at 1,628 lines.** 1,628 lines is still a LOT for an LLM to absorb fully. Counter: TC is read by the PLANNER, who has a full context window and 30-60 minutes. Length matters for builders (who have limited time), not planners.

3. **The "structured handoff" thesis might underperform "creative freedom."** CD-006 scored 39/40 without ANY of this structure. Counter: CD-006 was human-iterated, not autonomous. The structure enables fire-and-forget.

4. **Removing 330 lines from existing skills might break backward compatibility.** Counter: Under ALWAYS FLAGSHIP, backward compatibility is irrelevant -- there's only one path forward.

5. **The single orchestrator skill might become its own complexity monster.** /build-page at ~205 lines is lean, but it manages 5 waves of agents. Counter: The orchestrator is COORDINATION, not composition. Its complexity is flow control, which is inherently simpler than creative decision-making.

---

**END OF REPORT**

**Word count:** ~4,200
**Key verdict:** Enrich by SUBTRACTION (remove 330 lines of dead code and duplicate reference material from TC+PA), create 1 new skill (orchestrator), create 3 new reference artifacts (recipe, thresholds, gate-runner). Intelligence flows through STRUCTURED ARTIFACTS at boundaries, not through skill-to-skill invocation.
