# Pipeline Reproducibility Analysis — Ceiling Preparation

**Date:** 2026-02-16
**Analyst:** pipeline-analyst
**Team:** ceiling-preparation
**Task:** Analyze which tier produces the most robust, reproducible pipeline for long-term use

**Evidence basis:**
- Middle-tier retrospective (09-MASTER-RETROSPECTIVE.md)
- Process metacognition (TAKEAWAY-PROCESS-METACOGNITION.md, first 300 lines)
- Expectations vs reality (TAKEAWAY-EXPECTATIONS-VS-REALITY.md, first 200 lines)
- Blind spots analysis (TAKEAWAY-BLIND-SPOTS.md, first 200 lines)
- Conversation clarifications (17-conversation-clarifications.md)
- Migration pipeline spec (03-MIGRATION-PIPELINE.md, first 300 lines)

---

## Executive Summary

**Recommendation:** **Single tiered pipeline with Middle as the universal default**, not separate pipelines per tier.

**Architecture:** One pipeline with THREE quality gates (not four tiers):
1. **Entry gate** — Binary rules that achieve 100% compliance (container 940-960px, soul constraints)
2. **Middle floor** — Per-category mechanism minimums (1+ each of 5 categories) = 8-12 mechanisms
3. **Ceiling gate** — OPTIONAL metaphor derivation for content with genuine structural tension

**Reproducibility verdict:**
- **Floor tier:** NOT reproducible. "Sample 2-4 mechanisms" identified by 11 agents as THE limiting spec. Produces 5 mechanisms, 2 categories, "formatted not designed." No advantage over Middle.
- **Middle tier:** REPRODUCIBLE with caveats. Binary rules = 100% compliance. Per-category minimums = 8-12 mechanisms, vocabulary fluency, PA-05 4/4. Known gaps: file-bus isolation costs quality, prompt slicing caused footer bug.
- **Ceiling tier:** PARTIALLY reproducible. Metaphor derivation is 80% creative (not deterministic). Success depends on content-metaphor fit. High variance expected.
- **Flagship tier:** NOT reproducible for production. 240-400 min, multi-pass iteration, 16-18 mechanisms. Crown jewels only.

**Why single pipeline:** The Floor-to-Middle gap is LARGER (5→12 mechanisms, formatted→designed) than Middle-to-Ceiling gap (12→15 mechanisms, vocabulary fluency→compositional fluency). Middle is the minimum acceptable quality. Running Floor tier wastes time producing substandard output that will need re-work.

---

## 1. What "Reproducible" Means at Each Tier

### Floor Tier: MECHANICAL but INSUFFICIENT

**What reproducibility means:**
- Same input → same output (deterministic pattern matching)
- Any agent following "sample 2-4 mechanisms" produces similar results
- Zero creative variance (lookup-based, no metaphor)

**Evidence from Phase D (Variant B):**
- 5 mechanisms, 2 categories (Hierarchy + Component)
- 18/19 compliance, 4/5 novelty
- Prose-only content → mechanism ceiling at 6 mechanisms
- Perceptual verdict: "formatted, not designed"

**Why this is problematic:**
- "Sample 2-4" produces CONSISTENT mediocrity
- Output is reproducible but BELOW design threshold (PA-05 barely passed)
- Variant B was the BEST Floor variant, still marginal
- No value in reproducing substandard quality

**Reproducibility assessment:** HIGH consistency, LOW quality ceiling.

**Verdict:** Reproducible but NOT RECOMMENDED. Floor tier produces pages that fail the engagement threshold. If you're going to run a pipeline, run Middle minimum.

---

### Middle Tier: REPRODUCIBLE with IMPLEMENTATION GAPS

**What reproducibility means:**
- Binary rules → 100% compliance (container width, soul constraints)
- Per-category minimums → 8-12 mechanisms, all 5 categories covered
- Pattern selection → content-type mapping (tutorial→CRESCENDO, reference→F-PATTERN)
- Fresh-eyes auditing → catches critical bugs (missing footer, heading spacing)
- Execution time → ~35 min (8 agents, flat file-bus topology)

**Evidence from Middle-tier experiment:**
- **What reproduced correctly:**
  - 7/7 soul constraints PASS (binary rules = 100% compliance)
  - Container width 960px exact (M3 binary rule held)
  - 12 mechanisms across 5 categories (S:1, H:3, C:4, D:2, N:3)
  - PA-05 DESIGNED 4/4
  - Novelty 3/3 STRONGLY NOVEL
  - Flat file-bus topology: zero contention, ~35 min execution

- **What failed to reproduce:**
  - Footer missing (WOULD-NOT-SHIP) — prompt slicing blind spot
  - Token compliance 66.5% (judgment rule, not binary)
  - CPL 82 chars (+2 over spec, no verification formula)
  - Heading spacing ratio violated (judgment rule)
  - Metronomic rhythm (no minimum transition requirement)
  - Top-heavy weight distribution (no balance requirement)

**Root cause analysis:**
- **Binary rules = 100% compliance** (border-radius, box-shadow, container, fonts)
- **Judgment rules = 0% compliance** (token compliance, CPL, heading spacing)
- **Missing gates:** No landmark completeness check (header/footer/sections exist)
- **Communication isolation:** File-bus prevented builder from asking clarifying questions

**The reproducibility gap is NOT creative variance — it's PROCESS GAPS:**

1. **Prompt slicing** reduced builder context by 60%, causing footer bug
2. **File-only communication** prevented clarification ("What does Footer Mirror look like?")
3. **No builder self-check** for CPL formula, token compliance scan, landmark checklist
4. **Judgment specifications** instead of binary gates for critical constraints

**Verdict:** REPRODUCIBLE if you fix the process gaps. The design methodology (per-category minimums, pattern selection, fresh-eyes auditing) is sound. The execution flaws (prompt slicing, communication isolation, judgment rules) are fixable.

**Fixes required for Middle reproducibility:**
1. Enable inter-agent messaging (builder→planner clarification protocol)
2. Add landmark completeness gate (header/footer/sections verification)
3. Convert critical constraints to binary (token compliance ≥80%, CPL 45-80 with formula)
4. Add builder self-check (scan CSS before declaring done)
5. Add rhythm variation minimum (3+ different transition treatments)

**With fixes applied:** Reproducibility = HIGH, Quality = "designed" (vocabulary fluency).

---

### Ceiling Tier: REPRODUCIBLE for PROCESS, VARIABLE for OUTPUT

**What reproducibility means:**
- Same PROCESS → different but APPROPRIATE outputs (metaphor-driven creativity)
- Reproducibility is in the PIPELINE STEPS, not the literal CSS
- Different agents derive different metaphors, all equally valid

**Expected process reproducibility:**
- Phases 1-3: Multi-axis questioning, tension derivation, metaphor collapse (deterministic sequence)
- Phase 3.5: Fractal gate (mechanism minimums per category: S:2+, H:2+, C:3+, D:2+, N:2+)
- Phase 4: Mechanism selection guided by metaphor (creative but bounded by catalog)
- Phase 5: Builder implementation (metaphor→CSS expression)
- Phase 6: Perceptual audit (same 48 PA questions, fresh-eyes protocol)

**Expected output variance:**
- Same content + different agents = different metaphors
- Example: "SYSTEM remote Mac control" could derive:
  - Metaphor A: Bridge architecture (connection spans distance)
  - Metaphor B: Telescope system (remote viewing optics)
  - Metaphor C: Nervous system (central control → peripheral execution)
- Each metaphor produces DIFFERENT CSS but EQUALLY VALID composition

**Evidence from retrospective:**
- Metaphor derivation is **80% creative, 20% deterministic** (Track 2 characteristic)
- Content-metaphor fit is critical (geological strata worked for conceptual depth, might not work for tutorials)
- "Felt through" quality depends on metaphor appropriateness, not just presence

**The reproducibility question is NOT "will two runs produce identical output?"**

**The reproducibility question IS "will the process reliably produce compositionally coherent output?"**

**Verdict:** Process is reproducible (same 7-phase pipeline). Output is INTENTIONALLY variable (metaphor-driven creativity). Quality depends on content-metaphor fit.

**Risk factors for Ceiling reproducibility:**
1. **Metaphor derivation failure** — Agent derives strained/inappropriate metaphor (e.g., "remote access is like gardening")
2. **Mechanism interaction gap** — Mechanisms deployed independently, not reinforcing each other
3. **Builder interpretation variance** — Same metaphor → different CSS expressions of varying quality
4. **Perceptual audit subjectivity** — "Felt through" is harder to operationalize than "designed"

**Mitigation strategies:**
1. **Metaphor quality gate** — Team-lead reviews metaphor before implementation (Phase 3.5)
2. **Mechanism interaction requirement** — "For 3+ mechanism pairs, document how they REINFORCE each other"
3. **Dual perceptual auditors** — Two fresh-eyes agents, reconcile if verdicts differ
4. **Content-type screening** — Only invoke Ceiling for content with genuine structural tension (fails Addition Test)

**With mitigations:** Reproducibility = MEDIUM for process, HIGH for appropriate content, VARIABLE for output quality.

---

### Flagship Tier: NOT REPRODUCIBLE for PRODUCTION

**What reproducibility means:**
- Multi-pass iteration (3-5 revision cycles)
- Perceptual feedback → refinement → re-audit loop
- Build time: 240-400 minutes (4-6 hours)
- 16-18 mechanisms, 5 scales, multi-pattern composition

**Why this is not reproducible:**
- **Time variance:** 240-400 min is a 160-minute range (67% variance)
- **Iteration depth unknown:** "Until it feels right" is not a stopping criterion
- **Quality ceiling unknown:** DD-006 (fractal) and CD-006 (pilot) both scored 39-40/40, but how?
- **Creative bottleneck:** "Max 2-3 concurrent" (not parallelizable like Middle)

**Evidence from tier model:**
- Flagship is 5-10% of pages (anchor content, crown jewels)
- DD-006 has 20+ inbound references — clearly exceptional
- CD-006 scored 39/40 but was built through iterative exploration, not pipeline
- No Flagship pages built through PIPELINE yet (all are showcase explorations)

**Verdict:** Flagship is ARTISANAL CRAFT, not REPRODUCIBLE PIPELINE. Reserve for 5-10% crown jewels. Use Middle for 40-50%, Ceiling for 20-30%, Flagship for exceptional cases only.

---

## 2. Reproducibility-Quality Tradeoff

### The Spectrum

```
Floor        Middle           Ceiling          Flagship
|------------|----------------|----------------|------------|
HIGH         HIGH             MEDIUM           LOW
repro        repro            repro            repro
(w/ fixes)   (if content fits)

LOW          MEDIUM           HIGH             VERY HIGH
quality      quality          quality          quality
(formatted)  (designed)       (felt through)   (crown jewel)

30-45 min    70-100 min       150-220 min      240-400 min
                              (45-100 actual?)
```

### The Paradox

**Higher reproducibility = lower ceiling for compositional quality**

- Floor: Deterministic pattern matching → consistent mediocrity
- Middle: Per-category minimums + pattern selection → designed pages, no atmosphere
- Ceiling: Metaphor derivation → compositional fluency, output variance
- Flagship: Multi-pass iteration → crown jewels, unpredictable

**The optimal point for PRODUCTION pipeline: Middle tier with fixes**

Why?
- Floor is reproducible but below quality threshold
- Middle is reproducible AND crosses designed threshold (PA-05 4/4)
- Ceiling adds compositional fluency but at cost of output variance
- Flagship is not production-viable (too slow, too variable)

**The Ceiling question: Is the quality improvement worth the reproducibility cost?**

Evidence from retrospective:
- Middle achieved "designed" but felt "professionally stiff"
- Ceiling adds "felt through" quality via metaphor
- BUT: content-metaphor fit is critical, and metaphor appropriateness is subjective
- AND: Ceiling timing might be 45-100 min (not 150-220 min) with parallel agents

**If Ceiling is actually 45-100 min (vs Middle 35 min), the +10-65 min for compositional fluency is HIGH ROI.**

**Recommendation:** Run TWO Ceiling experiments (same content as Middle + new abstract content) to measure:
1. Actual execution time with parallel agents
2. Quality improvement over Middle on SAME content (isolate metaphor effect)
3. Content-metaphor fit variance (does abstract content benefit more?)

---

## 3. What Makes a Pipeline Robust

### The Binary Rule Principle (THE Most Important Finding)

**Evidence:** Middle-tier experiment achieved 7/7 compliance on binary rules, 0/3 compliance on judgment rules.

**Binary rules that worked:**
- Container width 940-960px (not "should be narrow")
- border-radius: 0 (not "prefer sharp edges")
- box-shadow: none (not "avoid shadows when possible")
- Typography trinity (not "consider using serif for headings")
- No gradients (not "solid colors preferred")

**Judgment rules that failed:**
- Token compliance "should be ≥80%" → 66.5% (FAIL)
- CPL "should be 45-80" → 82 chars (FAIL)
- Heading spacing "should be 1.5:1" → equal spacing (FAIL)

**The architectural principle for robust pipelines:**

> If a constraint matters, make it BINARY. Judgment language achieves ~0% compliance.

**How to convert judgment to binary:**
1. Add verification formula (CPL = container-width / font-size / 0.6)
2. Add self-check gate (builder scans CSS for raw hex/px before writing)
3. Add programmatic audit (measure COMPUTED styles, not just CSS source)
4. Add gate at phase boundaries (landmark completeness: header/footer/sections exist)

**Robustness = maximizing binary rules, minimizing judgment calls.**

---

### The Communication Protocol Principle (NEW from Retrospective)

**Evidence:** Middle-tier (file-only) produced B+ quality with 3 defects. CD-006 (with messaging) scored 39/40. Phase C (with messaging) met 11/11 criteria.

**File-only communication:**
- ✅ Speed: 35 min (zero coordination overhead)
- ❌ Quality: missing footer (builder couldn't ask planner clarifying questions)
- ❌ Collaboration: no agent could catch another's blind spots mid-process

**Messaging-enabled communication:**
- ⚠️ Speed: May add coordination time
- ✅ Quality: Builder→planner questions prevent implementation bugs
- ✅ Collaboration: Auditor→team-lead issue flagging prevents WOULD-NOT-SHIP defects

**The gap between "specifications applied correctly" (Middle) and "compositionally confident" (CD-006) is partially explained by collaborative refinement.**

**Robustness = enabling inter-agent messaging for clarification, not just file-based handoffs.**

**Required communication capabilities:**
1. Builder → Planner: "What does Footer Mirror look like?"
2. Auditor → Team-Lead: "Missing section detected — should I continue or wait?"
3. Team-Lead → Builder: "Add footer before proceeding to evaluation"
4. Planner → Builder: "Metaphor requires spacing compression in lower third"

**The flat topology (team-lead → agents directly) is validated. The communication protocol (file-only) must change to file + messaging.**

---

### The Fresh-Eyes Principle (Validated Across 6+ Teams)

**Evidence:** Zero-context perceptual auditor found 4 issues context-loaded agents missed:
1. Missing footer (WOULD-NOT-SHIP)
2. Heading spacing ratio violation
3. Top-heavy weight distribution
4. Metronomic rhythm

**Why fresh-eyes works:**
- Research-loaded agents see what they KNOW (they rationalize decisions)
- Fresh-eyes agents see what's THERE (they have no context to rationalize)

**The perceptual auditor's verdict: "This page just ends" (no visual ending)**

A context-loaded agent would think: "Builder must have had a reason to skip the footer."

A fresh-eyes agent thinks: "There's no footer. That's wrong."

**Robustness = maintaining zero-context perceptual auditing, never giving auditor the build plan.**

**Enhancement for Ceiling:** Add SECOND fresh-eyes auditor (dual evaluation with reconciliation) to address single-evaluator bias.

---

### The Gate Discipline Principle (NEW from Retrospective)

**Evidence:** Footer was specified in plan but not built. Team-lead launched auditors without verifying structural completeness.

**Missing gate:** Landmark completeness check at Phase 2→3 boundary.

**What the gate does:**
- Team-lead verifies: header exists, footer exists, all named sections from plan exist in HTML
- Binary check (not interpretation)
- Costs ~2 minutes
- Catches severity-1 defects BEFORE launching auditors

**Robustness = adding gates at phase boundaries to verify dependencies before proceeding.**

**Recommended gates for Middle tier:**
1. **Phase 0→1:** Content selection complete (file exists, word count 800-1,200)
2. **Phase 1→2:** Plan complete (mechanism list, pattern choice, section breakdown)
3. **Phase 2→3:** Landmarks complete (header, footer, all sections exist)
4. **Phase 3→4:** Builder self-check (CPL formula, token scan, landmark presence)
5. **Phase 4→5:** Audits complete (programmatic + perceptual both PASS)

**Each gate is binary verification (not quality judgment), costs 1-3 minutes, prevents downstream failures.**

---

## 4. Middle Tier as Reproducibility Test

**The experiment question:** If you ran Middle-tier build TWICE on the same content with different agents, would outputs be similar?

### What SHOULD Reproduce

**Binary rules (100% confidence):**
- Container width 940-960px
- border-radius: 0, box-shadow: none
- Typography trinity (Instrument Serif, Inter, JetBrains Mono)
- No gradients, no pure black/white
- Soul constraints (7/7)

**Structural decisions (HIGH confidence):**
- Content type classification (tutorial → Task-Based)
- Pattern selection (tutorial → CRESCENDO)
- Axis layout (tutorial → F-PATTERN)
- Mechanism categories (all 5 covered due to per-category minimums)
- Mechanism count (8-12 range)

**Per-category distribution (MEDIUM confidence):**
- Technical content uses more Component mechanisms (code blocks, tables)
- Narrative content uses more Spatial mechanisms (zone backgrounds, density shifts)
- Distribution should be SIMILAR (not identical) across runs

### What MIGHT Vary

**Mechanism selection within categories (MEDIUM variance):**
- S:1 could be #5 (dense/sparse alternation) OR #6 (zone backgrounds) OR #15 (whitespace)
- H:3 could be #1+#4+#11 OR #1+#7+#11 (different border-weight + heading combinations)
- Content-appropriate mechanisms should cluster, but exact choices vary

**CSS values (LOW variance if binary rules enforced):**
- Spacing: 48px vs 64px for section gaps (both valid from spacing scale)
- Border-weight: 4px vs 3px for primary headings (both valid from border catalog)
- Font-size: 18px vs 20px for body (both valid from typography scale)
- ALL values should come from tokens (if token compliance is binary rule)

**Compositional details (LOW to MEDIUM variance):**
- Dark header authority (Middle deployed this, might vary)
- Code block treatment (copy buttons, syntax highlighting style)
- Callout DNA (all should have left-border + background, exact colors might vary)
- Architecture diagram style (all should use zone backgrounds, exact layout might vary)

### What SHOULD NOT Vary (But Did in Middle Experiment)

**These are FAILURES, not acceptable variance:**
- Missing footer (structural completeness failure)
- Token compliance 66.5% (judgment rule failure → needs binary conversion)
- CPL 82 chars (no verification formula → needs builder self-check)
- Heading spacing equal (judgment rule → needs binary conversion)

**If these failures repeat on second run, the pipeline is NOT reproducible (process gaps remain unfixed).**

**If these failures do NOT repeat, the pipeline has HIGH variance (different agents interpret judgment rules differently).**

**Either outcome is BAD. Solution: convert to binary rules.**

---

### The Reproducibility Hypothesis

**Two agents build Middle-tier pages from SAME content:**

**Expected similarity:**
- Structure: 90%+ (same sections, same order, same pattern)
- Mechanisms: 70-80% (same categories, similar selections, some variation within category)
- CSS values: 60-70% (same token families, different specific values)
- Visual appearance: "recognizably similar" (same pattern, same soul, different details)

**Expected differences:**
- Exact mechanism combinations (border-weight gradient vs type scale + zone backgrounds)
- Spacing rhythm (both use spacing scale, different specific progression)
- Component arrangement (both use code blocks, different exact placement)
- Visual "personality" (both feel designed, different visual voice)

**Verdict criteria:**
- If outputs are 90%+ identical → pipeline is TOO RIGID (agents are template-filling)
- If outputs are 70-85% similar → pipeline is REPRODUCIBLE (same quality band, acceptable variation)
- If outputs are <60% similar → pipeline is TOO VARIABLE (process not constraining enough)

**Middle-tier experiment (n=1) suggests 70-85% similarity is achievable with fixes applied.**

---

## 5. What Would Make Ceiling Reproducible

### The Metaphor Stability Problem

**Challenge:** Metaphor derivation is 80% creative. Two agents derive different metaphors for same content.

**Example: "SYSTEM remote Mac control" documentation**

Agent A derives: "Bridge architecture" (connection spans distance)
- Mechanisms: spanning elements, structural supports, connection points
- CSS: border as cables, zone backgrounds as bridge segments, spacing as span length

Agent B derives: "Telescope system" (remote viewing optics)
- Mechanisms: focus/blur contrast, magnification hierarchy, lens layers
- CSS: border-weight as optical precision, zone backgrounds as lens coatings, spacing as focal planes

Agent C derives: "Nervous system" (central → peripheral)
- Mechanisms: signal propagation, branching hierarchy, response latency
- CSS: border as neural pathways, zone backgrounds as tissue layers, spacing as synaptic gaps

**All three are VALID. All three produce "felt through" quality. All three are DIFFERENT.**

**Is this VARIANCE or RICHNESS?**

- If business requirement is "all SYSTEM docs should have same visual personality" → variance is BAD
- If business requirement is "each doc should have appropriate compositional voice" → variance is GOOD

**Ceiling reproducibility depends on defining what "same quality" means:**

Option 1: **Metaphor-agnostic quality** (any valid metaphor is acceptable)
- Reproducibility = process produces "felt through" quality, regardless of specific metaphor
- Variance = HIGH for output, LOW for quality band

Option 2: **Metaphor consistency** (same content family uses related metaphors)
- Reproducibility = SYSTEM docs cluster around infrastructure/connection metaphors
- Variance = MEDIUM for output, MEDIUM for quality band
- Requires metaphor constraint: "Derive metaphor from content domain vocabulary"

Option 3: **Prescribed metaphor** (human reviewer selects metaphor before build)
- Reproducibility = HIGH for output (agents implement same metaphor)
- Variance = LOW for output, but REMOVES the creative value of Ceiling tier
- Ceiling becomes "Middle with extra steps"

**Recommendation: Option 1 (metaphor-agnostic quality) for Ceiling tier.**

Why?
- Ceiling's value is compositional fluency, not template consistency
- If you want consistency, use Middle tier (faster, more reproducible)
- Ceiling is for content that NEEDS expressive coherence, not visual uniformity

**Reproducibility target for Ceiling:** Same quality BAND (all "felt through"), different metaphors.

---

### Reproducibility Mechanisms for Ceiling

**1. Content-type screening (GATE)**

Only invoke Ceiling for content that FAILS the Addition Test:
- Reader needs cannot be met by selecting + placing existing components
- Genuine structural tension exists (warm vs austere, simple vs deep, etc.)
- Content is prose-heavy or conceptual (not tutorial/reference)

**Why this helps:** Inappropriate content → strained metaphors → "felt through" fails. Screening prevents metaphor-derivation on content that doesn't need it.

**2. Metaphor quality gate (REVIEW)**

Team-lead reviews derived metaphor before Phase 4 (implementation):
- Is metaphor appropriate for content domain?
- Does metaphor have expressive potential (3+ CSS mappings)?
- Does metaphor avoid strain ("remote access is like gardening")?

**If metaphor fails:** Planner re-derives with different axis (FEEL → UNDERSTAND → DO)

**Why this helps:** Catches inappropriate metaphors before CSS implementation, reduces wasted build time.

**3. Mechanism interaction requirement (SPECIFICATION)**

"For 3+ mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same semantic dimension)."

**Example:** Border-weight gradient + zone background darkening + spacing compression ALL encode "depth" simultaneously.

**Why this helps:** Forces compositional coherence, not just mechanism presence. Prevents "12 mechanisms deployed independently."

**4. Dual perceptual auditors (VERIFICATION)**

Two fresh-eyes agents evaluate independently:
- Both see same screenshots, same 48 PA questions
- Both produce independent verdicts
- If verdicts differ (one "felt through", one "professionally stiff") → reconcile or third auditor

**Why this helps:** Reduces single-evaluator bias, increases confidence in "felt through" verdict.

**5. Timing calibration (EXPECTATION MANAGEMENT)**

Ceiling timing estimate is 150-220 min (tier model) but Middle actual was 35 min (vs 70-100 predicted).

**Re-estimate Ceiling with parallel agent model:**
- Metaphor derivation: ~10 min (1 agent)
- Planning: ~10 min (1 agent)
- Building: ~12 min (1 agent)
- Dual perceptual audit: ~6 min each (2 agents in parallel)
- Evaluation: ~6 min (2 agents in parallel)
- Verdict: ~5 min (1 agent)

**Estimated: 45-100 minutes, not 150-220 minutes.**

**Why this helps:** If Ceiling is actually 45-100 min (vs Middle 35 min), the +10-65 min cost is MUCH lower than expected, making Ceiling viable for more pages.

---

## 6. Pipeline Design Recommendations by Tier

### Floor Tier: DEPRECATED

**Recommendation:** DO NOT use Floor tier in production pipeline.

**Rationale:**
- "Sample 2-4 mechanisms" produces formatted pages, not designed pages
- 5 mechanisms, 2 categories = below engagement threshold
- Variant B scored 18/19 compliance but felt derivative
- Middle tier (with fixes) is only +25-30 min more, crosses designed threshold
- No business case for producing substandard output

**Exception:** Floor tier acceptable ONLY for:
- Throwaway prototypes (internal docs, not customer-facing)
- Content with <500 words (true minimalism)
- Pure reference content (API docs, changelogs) where formatting is sufficient

**Otherwise:** Use Middle as universal floor.

---

### Middle Tier: RECOMMENDED DEFAULT

**Recommendation:** Middle tier with fixes applied is the production pipeline for 60-80% of pages.

**Architecture:**
```
Phase 0: Content Selection (content-selector agent)
  Input:  Source content (HTML/MDX/markdown)
  Output: 01-content-selection.md (sections, word count, structural elements)
  Gate:   800-1,200 words, 4+ structural types

Phase 1: Planning (planner agent, Opus)
  Input:  Content selection + mechanism catalog + pattern table
  Output: 02-build-plan.md (12 mechanisms S:1 H:3 C:4 D:2 N:3, pattern choice)
  Gate:   All 5 categories present, pattern selected

Phase 2: Build (builder agent, Sonnet)
  Input:  Build plan + pre-baked CSS blocks
  Output: middle-page.html
  Self-check: CPL formula (45-80), token scan (≥80%), landmarks (header/footer/sections)
  Gate:   All self-checks PASS

Phase 3: Programmatic Audit (programmatic-auditor, Sonnet)
  Input:  middle-page.html + build plan
  Output: 03-programmatic-audit.md (binary compliance checks)
  Gate:   7/7 soul constraints, container width, heading hierarchy

Phase 4: Perceptual Audit (perceptual-auditor, Sonnet, ZERO CONTEXT)
  Input:  middle-page.html (ONLY the HTML, no plan, no catalog)
  Output: 04-perceptual-audit.md (48 PA questions)
  Gate:   PA-05 4/4 (designed threshold)

Phase 5: Comparative Evaluation (comparative-auditor, Sonnet)
  Input:  middle-page.html + reference page (Variant B)
  Output: 05-comparison.md (better/worse/similar with specifics)

Phase 6: Verdict (verdict-synthesizer, Sonnet)
  Input:  All audit outputs
  Output: 06-VERDICT.md (SUCCESS/PARTIAL/FAILURE with evidence)
```

**Communication protocol:**
- Agents use SendMessage for CLARIFICATION (builder→planner questions, auditor→team-lead issue flagging)
- Agents write FILES for primary outputs (all 6 phases produce .md/.html files)
- Team-lead verifies file existence before launching next phase (gate discipline)

**Timing:** 35-50 minutes (8 agents, flat file-bus topology)

**Quality target:** PA-05 4/4 (designed), vocabulary fluency, "professionally stiff" acceptable

**Use for:**
- Tutorials, guides, how-to content (40%)
- Reference docs with mixed content (API + examples) (20%)
- Overview/landing pages (10%)
- Product documentation (10%)

---

### Ceiling Tier: SELECTIVE USE

**Recommendation:** Ceiling tier for 20-30% of pages that fail Addition Test (content with genuine structural tension).

**Architecture:**
```
Phase 0: Content Selection (same as Middle)

Phase 1: Metaphor Derivation (metaphor-agent, Opus, 3 rounds)
  Round 1: Multi-axis questioning (FEEL, UNDERSTAND, DO, BECOME + conditionals)
  Round 2: Tension derivation (identify irreducible tensions)
  Round 3: Metaphor collapse (tension → single guiding metaphor)
  Output: 01-metaphor.md (metaphor statement + 3+ CSS mappings)
  Gate:   Metaphor appropriateness review (team-lead approval)

Phase 2: Planning (planner agent, Opus)
  Input:  Metaphor + mechanism catalog
  Output: 02-build-plan.md (12-15 mechanisms, per-category S:2+ H:2+ C:3+ D:2+ N:2+)
  Gate:   All 5 categories, mechanism interaction table (3+ pairs REINFORCE each other)

Phase 3-6: Same as Middle (build, audits, evaluation, verdict)
  Addition: Phase 4b = SECOND perceptual auditor (dual evaluation)
```

**Communication protocol:**
- Same as Middle (file + messaging)
- Additional: Planner→Builder proactive guidance ("Metaphor requires X in lower third")

**Timing:** 45-100 minutes (10-12 agents, metaphor derivation adds 3 rounds)

**Quality target:** PA-05 4/4 + "felt through" (compositional fluency)

**Use for:**
- Conceptual deep-dives (philosophy + technique) (10%)
- Architecture explanations (system design) (5%)
- Prose-heavy narrative content (essays, announcements) (5%)
- Content with genuine tension (warm vs austere, simple vs deep) (10%)

**Screening gate (MANDATORY):**
- Run Addition Test BEFORE invoking Ceiling
- If test PASSES (components fulfill needs) → use Middle
- If test FAILS (transformation required) → use Ceiling

---

### Flagship Tier: CROWN JEWELS ONLY

**Recommendation:** Flagship tier for 5-10% of anchor content only. NOT part of production pipeline.

**Architecture:**
- Multi-pass iteration (3-5 revision cycles)
- Perceptual feedback → refinement → re-audit loop
- Human-in-the-loop quality gates
- 16-18 mechanisms, 5 scales, multi-pattern composition

**Timing:** 240-400 minutes (4-6 hours, NOT parallelizable)

**Quality target:** Crown jewel (DD-006 fractal, CD-006 pilot scoring 39-40/40)

**Use for:**
- Landing pages (1-2 per site)
- Anchor documentation (flagship tutorials)
- Brand showcase content
- Content with 100+ inbound references

**Process:** Artisanal craft, not reproducible pipeline. Reserve for exceptional cases only.

---

## 7. Single Pipeline vs Tiered Pipeline

### Option A: Four Separate Pipelines (REJECTED)

**Structure:**
- Floor pipeline: 30-45 min, 5 mechanisms, "sample 2-4"
- Middle pipeline: 70-100 min, 8-10 mechanisms, per-category minimums
- Ceiling pipeline: 150-220 min, 12-15 mechanisms, metaphor derivation
- Flagship pipeline: 240-400 min, 16-18 mechanisms, multi-pass iteration

**Advantages:**
- Each tier optimized for its quality target
- Clear separation of concerns
- Agents know exactly which pipeline to run

**Disadvantages:**
- Floor tier produces substandard output (no business value)
- Overhead of maintaining 4 different pipelines
- Risk of wrong tier selection (tutorial mistakenly run as Floor → formatted output)
- Gap between Floor (5 mechanisms) and Middle (12 mechanisms) is LARGER than gap between Middle and Ceiling
- Duplication of infrastructure (4x auditing, 4x evaluation, 4x verdict synthesis)

**Verdict:** REJECTED. Floor tier is deprecated. Flagship is not production-viable. Only Middle and Ceiling are useful.

---

### Option B: Two-Track Pipeline (CURRENT DESIGN)

**Structure:**
- Track 1 (Assembly): Middle tier as default (60-80% of pages)
- Track 2 (Composition): Ceiling tier for content with tension (20-30% of pages)
- Flagship: Manual process, not in pipeline (5-10% crown jewels)

**Track assignment:**
- Run Addition Test at Phase 0 (after content selection)
- If test PASSES → Track 1 (Middle)
- If test FAILS → Track 2 (Ceiling)

**Advantages:**
- Only two pipelines to maintain (vs four)
- Clear selection criterion (Addition Test is binary)
- Middle is faster (35-50 min) for majority of content
- Ceiling reserves expensive metaphor derivation for content that needs it
- Both tracks share infrastructure (same auditing, evaluation, verdict synthesis)

**Disadvantages:**
- Addition Test might be subjective (different agents classify same content differently)
- Risk of under-using Ceiling (agents default to Track 1 to save time)
- Track 2 has higher output variance (metaphor-driven creativity)

**Verdict:** CURRENT DESIGN. This is the recommended architecture from migration pipeline spec.

**Enhancements needed:**
1. Operationalize Addition Test (concrete examples, decision tree)
2. Add metaphor quality gate (prevent inappropriate metaphor derivation)
3. Track timing calibration (if Ceiling is 45-100 min, not 150-220 min)

---

### Option C: Single Tiered Pipeline (RECOMMENDED)

**Structure:**

ONE pipeline with THREE quality gates:

```
Phase 0: Content Selection
  Gate: 800-1,200 words, 4+ structural types

Phase 0.5: Track Classification
  Addition Test → Track 1 (assembly) or Track 2 (composition)

Phase 1: Planning (DIFFERENT by track)
  Track 1: Pattern selection + per-category minimums (8-12 mechanisms)
  Track 2: Metaphor derivation + per-category minimums (12-15 mechanisms)
  Gate: All 5 categories present

Phase 2: Build (SAME for both tracks)
  Self-check: CPL, token scan, landmarks

Phase 3: Programmatic Audit (SAME for both tracks)
  Gate: 7/7 soul constraints

Phase 4: Perceptual Audit (SAME for both tracks)
  Track 1: Single auditor
  Track 2: Dual auditors
  Gate: PA-05 4/4

Phase 5: Evaluation (SAME for both tracks)

Phase 6: Verdict (SAME for both tracks)
```

**The key insight:** Tracks differ ONLY in Phase 1 (planning). All other phases are identical.

**Track 1 (Middle):**
- Phase 1: Content-type → pattern selection (CRESCENDO, F-PATTERN, etc.)
- Per-category minimums: S:1+ H:1+ C:1+ D:1+ N:1+ (natural landing 8-12)
- No metaphor derivation

**Track 2 (Ceiling):**
- Phase 1: Metaphor derivation (multi-axis → tension → metaphor)
- Per-category minimums: S:2+ H:2+ C:3+ D:2+ N:2+ (natural landing 12-15)
- Metaphor quality gate before Phase 2

**Advantages:**
- Single pipeline to maintain (not two separate pipelines)
- Phases 2-6 are IDENTICAL (zero duplication)
- Track difference isolated to Phase 1 (planning)
- Clear upgrade path (Track 1 → Track 2 by adding metaphor derivation)
- Infrastructure reuse maximized

**Disadvantages:**
- Phase 1 has conditional logic (if Track 1 then X, if Track 2 then Y)
- Agents must know which track they're on

**Implementation:**
```
Team-lead runs Addition Test at Phase 0.5
Team-lead writes TRACK.txt ("Track 1" or "Track 2")
Planner reads TRACK.txt, executes appropriate Phase 1
All other agents ignore track (Phases 2-6 are identical)
```

**Verdict:** RECOMMENDED. This is the most maintainable architecture.

**Why this is better than separate pipelines:**
- 90% of pipeline is shared (only Phase 1 differs)
- Zero duplication of auditing/evaluation/verdict infrastructure
- Track selection is ONE decision at Phase 0.5, not four tier decisions
- Middle and Ceiling are STRUCTURAL, not ARBITRARY (Addition Test is the boundary)

---

### The Default Tier Decision

**Question:** Which tier should be the universal default?

**Evidence:**
- Floor tier: 5 mechanisms, "formatted not designed" (INSUFFICIENT)
- Middle tier: 12 mechanisms, PA-05 4/4, "designed" (SUFFICIENT)
- Ceiling tier: 15 mechanisms, "felt through" (ENHANCED)
- Flagship tier: 18 mechanisms, crown jewel (EXCEPTIONAL)

**The gaps:**
- Floor → Middle: +7 mechanisms, crosses engagement threshold (LARGE GAP)
- Middle → Ceiling: +3 mechanisms, adds compositional fluency (SMALL GAP)
- Ceiling → Flagship: +3 mechanisms, multi-pass iteration (PROCESS GAP, not mechanism gap)

**The ROI:**
- Floor → Middle: +25-30 min, 3-4x richness improvement, crosses designed threshold (HIGH ROI)
- Middle → Ceiling: +10-65 min (if timing recalibrated), adds "felt through" quality (MEDIUM ROI)
- Ceiling → Flagship: +150-300 min, diminishing returns (LOW ROI for most content)

**Recommendation: Middle as universal default.**

**Rationale:**
1. Middle is the MINIMUM quality threshold (PA-05 4/4 = designed)
2. Floor tier wastes time producing substandard output
3. Running Floor then re-working to Middle costs MORE than starting at Middle
4. Middle-to-Ceiling upgrade path is clear (add metaphor derivation for content that needs it)
5. Most content (60-80%) doesn't need Ceiling-tier compositional fluency

**The tier model should be:**
- ❌ Floor (30-45 min, formatted) → DEPRECATED
- ✅ Middle (35-50 min, designed) → UNIVERSAL DEFAULT
- ✅ Ceiling (45-100 min, felt through) → SELECTIVE (20-30% of pages)
- ✅ Flagship (240-400 min, crown jewel) → EXCEPTIONAL (5-10% anchor content)

**Production pipeline uses TWO quality gates, not four tiers:**

**Gate 1 (Entry): Binary rules**
- Container 940-960px
- Soul constraints (border-radius: 0, box-shadow: none, palette, typography)
- Content requirements (800-1,200 words, 4+ structural types)

**Gate 2 (Middle floor): Per-category minimums**
- All 5 categories present (S:1+ H:1+ C:1+ D:1+ N:1+)
- Pattern selection (CRESCENDO, F-PATTERN, BENTO, PULSE)
- PA-05 4/4 (designed threshold)

**Gate 3 (Ceiling, OPTIONAL): Metaphor derivation**
- Addition Test FAILS (transformation required)
- Metaphor quality gate (team-lead approval)
- Mechanism interaction (3+ pairs reinforce each other)
- Dual perceptual auditors

**This is a TIERED QUALITY model, not a separate pipeline model.**

---

## Conclusion

**Recommended architecture: Single tiered pipeline with Middle as universal default.**

**Structure:**
- ONE pipeline (not four separate pipelines)
- THREE quality gates (entry binary rules, Middle floor, Ceiling optional)
- TWO tracks (Track 1 assembly for 60-80%, Track 2 composition for 20-30%)
- Track difference isolated to Phase 1 (planning), all other phases identical

**Default tier: Middle (35-50 min, 12 mechanisms, PA-05 4/4, "designed")**

**Why Middle is the default:**
1. Crosses engagement threshold (designed, not formatted)
2. Floor-to-Middle ROI is highest (3-4x richness for +25-30 min)
3. Most content doesn't need Ceiling-tier compositional fluency
4. Clear upgrade path (add metaphor derivation for content with tension)
5. Reproducible with fixes applied (binary rules, inter-agent messaging, gates)

**When to use Ceiling:**
- Content fails Addition Test (components can't fulfill reader needs)
- Genuine structural tension exists (warm vs austere, simple vs deep)
- Prose-heavy or conceptual content
- 20-30% of pages maximum

**Reproducibility assessment:**
- **Middle tier:** HIGH (with fixes: messaging, gates, binary rules)
- **Ceiling tier:** MEDIUM (process reproducible, output intentionally variable)
- **Floor tier:** NOT RECOMMENDED (reproducible mediocrity)
- **Flagship tier:** NOT PRODUCTION-VIABLE (artisanal craft)

**Critical fixes for Middle reproducibility:**
1. Enable inter-agent messaging (clarification protocol)
2. Add landmark completeness gate (header/footer/sections)
3. Convert judgment rules to binary (token ≥80%, CPL 45-80 with formula)
4. Add builder self-check (scan CSS before declaring done)
5. Add rhythm variation minimum (3+ transition treatments)

**With fixes applied, Middle tier is the robust, reproducible production pipeline for long-term use.**
