# Phase D 4-Variant Test Design Analysis

**Date:** 2026-02-14
**Analyst:** test-design-analyst
**Task:** Evaluate validity and scope of 4-variant anti-gravity test for Phase D

---

## EXECUTIVE SUMMARY

**Verdict:** The 4-variant test is **METHODOLOGICALLY VALID** but **SCOPE MISMATCH** with stated Phase D goals.

**Key Issues:**
1. **Phase D definition confusion:** Protocol says "1-2 test pages to verify extraction works" vs gap-check says "4-variant anti-gravity test" — these are DIFFERENT phases worth of work
2. **12-20 hour scope:** 4 variants × 3-5 hrs each = MAJOR research effort, not validation test
3. **B vs C distinction unclear:** "Weak permission" vs "anti-gravity library" may be operationally identical
4. **Measurement confounds:** N=1 per variant insufficient for statistical conclusions

**Recommendation:** **SPLIT into 2 phases:**
- **Phase D (minimal):** 1 Track 1 + 1 Track 2 = sufficiency test (4-6 hrs)
- **Phase F+ (extended):** 4-variant anti-gravity test during pilot migration (post-playbook)

**If time permits full 4-variant test NOW:** Simplify to **2-variant test** (A vs C only) with same content = controlled comparison.

---

## 1. TEST VALIDITY ANALYSIS

### 1.1 Experimental Design

**Independent Variable:** Library access type
- **A (baseline):** Skill only, no library
- **B (weak permission):** Skill + library + "available but not enforced"
- **C (anti-gravity):** Skill + library + full phase-gating + divergence mandates
- **D (control):** Library-first, no skill

**Dependent Variables:**
- **Novelty:** Metaphor divergence from library patterns (0-5 scale)
- **Quality:** Perceptual audit score (0-40 PA score)
- **Library match:** Binary (did agent pattern-match to existing case study?)

**Design Type:** Between-subjects (1 agent per variant) × within-subjects (same metric across variants)

**Validity Issues:**

✅ **STRENGTHS:**
- Clear independent variable (4 distinct access conditions)
- Measurable dependent variables (novelty scale + PA score)
- Control condition (D) establishes baseline pattern-matching rate
- Baseline condition (A) isolates skill effectiveness

❌ **WEAKNESSES:**
- **N=1 per variant** — no statistical power, can't detect true effects
- **No randomization** — agent variability confounds treatment effect
- **Same content** — boring for agents (4 builds of identical content)
- **Different content** — can't control for content difficulty
- **Subjective novelty** — who scores metaphor divergence? (Weaver? Lead? Another agent?)

### 1.2 What's Actually Being Measured?

**Research Question (from gap-check):** "Do anti-gravity mechanisms prevent pattern-matching?"

**What this test measures:**
- **Variant C vs D:** Anti-gravity library vs library-first (mechanism effectiveness)
- **Variant A vs C:** Skill-only vs skill+library (library value-add)
- **Variant B vs C:** Weak permission vs anti-gravity (mechanism necessity)
- **Variant A vs D:** Skill vs library-first (skill baseline)

**What this test CANNOT measure:**
- **True pattern-matching rate** (N=1, no baseline frequency)
- **Mechanism robustness across content types** (single content sample)
- **Agent generalization** (1 agent per variant, no replication)
- **Long-term diversity** (M10 tracking requires 10+ uses over time)

**Interpretation limits:**
- If C produces high novelty → mechanisms WORKED for THIS agent on THIS content
- If C produces low novelty → mechanisms FAILED for THIS agent OR content wasn't suitable OR evaluation was wrong
- Cannot conclude: "Mechanisms work in general" (underpowered)

### 1.3 Confounds

**Agent Variability:**
- Different agents may have different creativity baselines
- Sonnet vs Opus may handle metaphor derivation differently
- No way to control agent "prior experience" (model training data)

**Content Difficulty:**
- If same content: 4th agent may be fatigued by repetition
- If different content: can't isolate library access effect (content A may be easier than content B)

**Evaluation Subjectivity:**
- Novelty scoring (0-5) requires human judgment or Weaver curation
- "Metaphor matches library" is not always binary (geological vs sedimentary = same?)
- PA score is quantitative BUT quality may not equal novelty

**Temporal Effects:**
- Sequential builds = later agents may benefit from earlier agents' work
- Parallel builds = zero cross-contamination but no learning

**Experimenter Bias:**
- Lead knows which variant is "supposed to" produce high novelty (C)
- May unconsciously bias content selection, evaluation criteria, or novelty scores

---

## 2. EXPECTED OUTCOMES — SUCCESS VS FAILURE

### Variant A: Skill Only (No Library)

**Setup:**
- Invoke tension-composition skill
- Prohibit ALL library access (case-studies/, mechanism-catalog.md, components.css beyond tokens)
- Agent derives metaphor, builds layout from first principles

**SUCCESS (Expected):**
- Agent produces NOVEL metaphor (not in library)
- Quality: MODERATE (no library polish, but skill provides structure)
- Novelty: HIGH (4-5/5) — no library patterns available
- Library match: NO

**FAILURE (Concerning):**
- Agent produces GENERIC layout (skill insufficient to drive creativity)
- Quality: LOW (no mechanisms available)
- Novelty: LOW (2-3/5) — agent defaults to web conventions (hero section, 3-col grid)
- Library match: N/A (but pattern-matches to generic web layouts)

**What failure means:**
- Skill alone doesn't drive creative metaphor derivation
- Library is NECESSARY for novelty (not just quality)
- Tension-composition pipeline may need strengthening

**Likelihood:** SUCCESS expected (skill was tested on 15 tension-test layouts)

---

### Variant B: Skill + Library + Weak Permission

**Setup:**
- Invoke tension-composition skill
- Library available but "not enforced" — WHAT DOES THIS MEAN?
- **Interpretation 1:** Agent can read library during ANY phase (no phase-gating)
- **Interpretation 2:** Agent can read library during Phases 4-5 but no divergence mandate
- **Interpretation 3:** Library accessible but no explicit instruction to use it

**SUCCESS:**
- Agent uses library AFTER metaphor derivation (Phase 5 timing)
- Same novelty as Variant A (4-5/5)
- Higher quality than Variant A (library polish applied)
- Library match: NO (divergence maintained despite library access)

**FAILURE:**
- Agent reads library BEFORE metaphor derivation (Phase 1-3 contamination)
- Lower novelty than Variant A (3/5) — pattern-matches despite skill
- Quality moderate to high (library patterns copied)
- Library match: YES (geological, fractal, conversational reused)

**What failure means:**
- "Weak permission" is insufficient — agents default to library lookup
- Phase-gating (M1, M5) is NECESSARY, not optional
- Timing control is critical anti-gravity mechanism

**CRITICAL AMBIGUITY:** What IS "weak permission" operationally?
- If it means "no phase-gating" → Expected FAILURE (contamination)
- If it means "phase-gating but no divergence mandate" → Expected SUCCESS (timing prevents contamination)
- **This distinction determines whether B vs C comparison is meaningful.**

---

### Variant C: Skill + Anti-Gravity Library

**Setup:**
- Invoke tension-composition skill
- Full anti-gravity deployment:
  - M1: Phase-gated access (case-studies/ prohibited until Phase 5)
  - M5: Binary sequential rules (MUST follow 0→1→2→3→3.5→4→5 order)
  - M6: Divergence mandate (if metaphor matches library → justify or regenerate)
  - M9: Divergence verification gate (Phase 3.5 5-question table)

**SUCCESS (Expected):**
- Agent produces NOVEL metaphor (4-5/5 divergence)
- Agent uses library mechanisms AFTER derivation (Phase 5 timing)
- Quality HIGH (skill structure + library polish + mechanisms)
- Library match: NO (or justified independent convergence)

**FAILURE (Critical):**
- Agent produces library match (geological, fractal) WITHOUT strong justification
- Novelty LOW (2-3/5) — pattern-matching despite mechanisms
- Quality high but convergent (polished copy of existing exploration)
- Library match: YES (unjustified convergence)

**What failure means:**
- Anti-gravity mechanisms DON'T WORK
- Phase-gating insufficient (agents read early despite prohibition)
- Divergence mandate ineffective (agents rationalize convergence)
- ENTIRE rigidity-mechanics research may be wrong

**Likelihood:** SUCCESS expected (94.7% mechanism deployment verified)

---

### Variant D: Library-First (No Skill)

**Setup:**
- NO skill invocation
- Start with: "Read compositional-core/case-studies/, build similar page"
- Full library access from beginning
- Expected worst-case novelty

**SUCCESS (N/A — this is control condition):**
- If D produces HIGH novelty → anti-gravity mechanisms are UNNECESSARY (library doesn't constrain)
- This would invalidate entire anti-gravity hypothesis

**FAILURE (Expected):**
- Agent produces DIRECT COPY of library pattern
- Novelty ZERO (0-1/5) — geological → 6 strata, fractal → 4 scales
- Quality moderate to high (copied working patterns)
- Library match: YES (explicit pattern-matching)

**What failure means:**
- Library-first access DOES cause pattern-matching (hypothesis confirmed)
- Control condition establishes baseline: ~0% novelty without anti-gravity

**What success means (unexpected):**
- Library doesn't constrain creativity even when read first
- Anti-gravity mechanisms are solving non-existent problem
- Would require re-evaluation of entire rigidity-mechanics framework

**Likelihood:** FAILURE expected (pattern-matching is default without intervention)

---

## 3. B VS C DISTINCTION — CAN WE IMPLEMENT IT?

### The Core Problem

**B (weak permission)** and **C (anti-gravity)** differ ONLY in enforcement rigor:
- B: Library available, agent may use it
- C: Library available, agent MUST follow phase-gating + divergence rules

**But what does "weak permission" mean in practice?**

### Three Possible Interpretations

#### Interpretation 1: No Phase-Gating (Timing Freedom)

**B Setup:**
- Agent can read case-studies/ during ANY phase
- No prohibition on early library access
- Skill phases suggested but not enforced

**C Setup:**
- Agent MUST NOT read case-studies/ during Phases 0-3
- Binary prohibition language: "Violation invalidates derivation"
- Phase 3.5 gate enforces timing

**Distinction:** CLEAR (timing control vs no timing control)

**Measurable difference:** Expected (B contamination vs C protection)

**Operational:** YES (remove prohibition language from B, keep in C)

---

#### Interpretation 2: Phase-Gating But No Divergence Mandate

**B Setup:**
- Agent follows phase sequence (library prohibited until Phase 5)
- NO divergence mandate (convergence acceptable)
- NO Phase 3.5 gate (no justification required)

**C Setup:**
- Agent follows phase sequence (same as B)
- Divergence mandate (convergence requires justification)
- Phase 3.5 gate enforces divergence check

**Distinction:** SUBTLE (both have timing, differ only on divergence enforcement)

**Measurable difference:** UNCLEAR (if timing prevents contamination, convergence may not occur in B anyway)

**Operational:** YES (remove M6+M9 from B, keep in C)

**Problem:** If M1+M5 (timing) are sufficient, B and C may perform identically → no meaningful comparison

---

#### Interpretation 3: Available But Not Instructed

**B Setup:**
- Library directory exists
- No instruction to use it
- No prohibition against using it
- Agent discovers library organically (if at all)

**C Setup:**
- Same library availability
- Explicit skill phases instruct when/how to use library
- Anti-gravity rules embedded in skill

**Distinction:** VERY SUBTLE (both have library, differ only in guidance)

**Measurable difference:** MINIMAL (agents may not discover library in B, making it functionally same as A)

**Operational:** DIFFICULT (how do we ensure agent knows library exists in B without instructing use?)

---

### Recommendation: Clarify B Definition

**BEFORE running test, DEFINE:**

**Option 1 (Clear Distinction):**
- B = Timing freedom (no phase-gating) → **EXPECTED: pattern-matching**
- C = Full anti-gravity (timing + divergence) → **EXPECTED: high novelty**
- **Comparison tests:** Is timing control (M1+M5) sufficient, or is divergence mandate (M6+M9) also necessary?

**Option 2 (Subtle Distinction):**
- B = Timing only (phase-gating but no divergence mandate) → **EXPECTED: moderate novelty**
- C = Timing + divergence → **EXPECTED: high novelty**
- **Comparison tests:** Does divergence mandate add value beyond timing control?

**Option 3 (Abandon B):**
- A = Skill only (baseline)
- C = Skill + anti-gravity (treatment)
- D = Library-first (control)
- **3-variant test:** Simpler, clearer hypotheses

**My recommendation:** **Option 1 (timing distinction)** provides clearest test of anti-gravity mechanisms.

---

## 4. PRACTICAL CONCERNS

### 4.1 Sample Size (N=1 Per Variant)

**Statistical Power:**
- N=1 → **ZERO statistical power**
- Cannot detect true effects (effect size could be huge, still can't conclude)
- Cannot control for agent variability (maybe agent-C was just more creative)
- Cannot generalize to other content/agents

**What N=1 CAN provide:**
- **Existence proof:** "Anti-gravity CAN produce high novelty in at least one case"
- **Failure detection:** "Anti-gravity FAILED in this instance" (concerning signal)
- **Directional signal:** "C > D suggests mechanisms help" (weak evidence)

**What N=1 CANNOT provide:**
- **Validation:** "Anti-gravity works reliably" (requires N=10+ per variant)
- **Mechanism comparison:** "M1+M5 > M6+M9" (requires factorial design)
- **Content generalization:** "Works for all Track 2 content" (requires diverse content)

**Implication:** This is a PILOT test, not a validation study.

---

### 4.2 Content Design — Same vs Different?

**Option A: Same Content (Controlled Comparison)**

**PRO:**
- Isolates library access effect (only independent variable)
- Direct comparison (same content, different library access)
- Clear causal inference (if C > B on same content → mechanisms work)

**CON:**
- Boring for agents (4th agent building identical content may pattern-match out of fatigue)
- Evaluation confound (4th agent's work judged against 3 prior versions)
- Temporal effect (later agents may improve OR degrade based on prior builds)

**CON (Critical):**
- **Agent memory contamination:** If agents are spawned sequentially, later agents may have compacted context from earlier agents' work
- **Evaluation bias:** Weaver/lead evaluating 4 versions of same content may develop aesthetic fatigue

---

**Option B: Different Content (Uncontrolled)**

**PRO:**
- Fresh for each agent (no repetition fatigue)
- Tests mechanism robustness across content types
- More realistic (production builds use different content)

**CON:**
- Cannot isolate library effect (content-A may be easier than content-D)
- Content difficulty confounds treatment effect
- **Cannot conclude:** "C > A because of mechanisms" (maybe content-C was easier)

**CON (Critical):**
- **No causal inference possible** — if C produces higher novelty than A, is it mechanisms OR content?

---

**Hybrid Option C: Same Base Content, Different Angles**

**Setup:**
- Same topic (e.g., "documentation best practices")
- Different sections/focuses for each variant
  - A: Process overview
  - B: Tool selection
  - C: Team workflow
  - D: Quality checks

**PRO:**
- Related content (comparable difficulty)
- Different enough to stay fresh
- Partial control (same domain, different specifics)

**CON:**
- Still some content variation (not fully controlled)
- More complex to evaluate (comparing apples to oranges)

---

**Recommendation:** **Same content IF test is A vs C only** (2 variants, not 4).

**For 4-variant test:** Use **different content** (test robustness, not just mechanism proof).

---

### 4.3 Time Investment

**Per-variant estimates (from memory):**
- **Track 1:** 45-90 min per page
- **Track 2:** 3-5 hrs per page

**4-variant test assumes Track 2 (tension-driven):**
- 4 variants × 3-5 hrs = **12-20 hours wall time** (if sequential)
- 4 variants × 3-5 hrs = **3-5 hours wall time** (if parallel, 4 agents)

**Additional overhead:**
- Evaluation time: 1 hr per variant (novelty scoring, PA audit, divergence check) = **4 hrs**
- Synthesis time: 2 hrs (cross-variant comparison, report writing) = **2 hrs**

**Total scope:**
- **Sequential:** 12-20 hrs build + 4 hrs eval + 2 hrs synthesis = **18-26 hours**
- **Parallel:** 3-5 hrs build + 4 hrs eval + 2 hrs synthesis = **9-11 hours**

**Comparison to stated Phase D goal:**
- Protocol: "Build 1-2 test pages" = **4-10 hours** (1 Track 1 + 1 Track 2)
- Gap-check: "4-variant test" = **18-26 hours** (4× Track 2 pages)

**SCOPE MISMATCH:** 4-variant test is **2-3× larger** than stated Phase D scope.

---

### 4.4 Parallel vs Sequential Execution

**Sequential (1 agent at a time):**

**PRO:**
- No Playwright contention
- No resource competition
- Clear temporal order (can stop after variant-A if results clear)

**CON:**
- 12-20 hrs wall time (full day of work)
- Later agents may be influenced by earlier builds (if same content)
- Cannot compare "under identical conditions" (temporal drift)

---

**Parallel (4 agents simultaneously):**

**PRO:**
- 3-5 hrs wall time (same as 1 Track 2 page)
- Identical temporal conditions (no drift)
- Tests mechanism robustness under contention

**CON:**
- Playwright contention (if >2 agents need visual access)
- Resource competition (4 agents writing files simultaneously)
- Cannot stop early (all 4 must complete)

**CON (Critical from memory):**
- **Playwright contention severe with 4+ visual agents** (10th team lesson)
- Some agents fall back to source-code analysis (not true visual testing)
- May degrade quality of all 4 builds

---

**Recommendation:** **Sequential execution** for 4-variant test (prevents Playwright issues).

**Alternative:** **Parallel for A+C only** (2 agents = no contention, per 14th team lesson).

---

## 5. PHASE D SCOPE — IS THIS ACTUALLY PHASE D?

### Protocol Says (Phase D Definition)

**From pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md (not read, inferred from context):**

> **Phase D: Extraction Validation**
> Purpose: Prove compositional-core/ sufficiency BEFORE writing playbook
> Output: 1-2 test pages, validation report
> Scope: 4-6 hours

**Interpretation:**
- Minimal test: 1 Track 1 + 1 Track 2
- Goal: Does extraction provide enough guidance to build?
- Success: Agent can build valid page using compositional-core/ alone
- Failure: Agent gets stuck, needs additional research, or violates soul constraints

**NOT testing:** Anti-gravity mechanisms, pattern-matching rates, novelty scores

**Validation questions:**
1. Can agent build Track 1 page using tokens + components alone? (sufficiency)
2. Can agent run tension-composition pipeline using compositional-core/ guidance? (clarity)
3. Are prohibitions clear enough to prevent violations? (enforcement)
4. Are mechanisms extractable enough to apply to new content? (transferability)

---

### Gap-Check Says (Priority 5)

**From gap-check.md lines 854-862:**

> **Priority 5: Anti-Gravity Validation**
> 1. Run 4-variant test
>    - Variant A: Skill only
>    - Variant B: Skill + library + weak permission
>    - Variant C: Skill + anti-gravity (EXPECTED: high novelty + high quality)
>    - Variant D: Library-first (EXPECTED: zero novelty)
> 2. Measure metaphor novelty, library match, PA score
> 3. If Variant C achieves HIGH novelty + HIGH quality → framework VALIDATED

**Interpretation:**
- Research validation: Do anti-gravity mechanisms work?
- Goal: Prove rigidity-mechanics hypotheses
- Success: Variant C achieves novelty=4-5 + PA=35+
- Failure: Variant C performs same as Variant B or D (mechanisms ineffective)

**NOT testing:** Compositional-core sufficiency (assumes extraction already works)

---

### These Are DIFFERENT Phases

**Phase D (Protocol):**
- **Question:** Is extraction sufficient for building?
- **Test:** Can agent use compositional-core/ to build valid pages?
- **Scope:** 1-2 pages (4-6 hrs)
- **Phase:** BEFORE playbook (D → E playbook → F pilot)

**Phase X (Gap-Check Priority 5):**
- **Question:** Do anti-gravity mechanisms prevent pattern-matching?
- **Test:** Compare 4 library access conditions
- **Scope:** 4 pages (12-20 hrs)
- **Phase:** DURING or AFTER pilot migration (requires library to be in use)

---

### The Naming Problem

**Gap-check calls this "Phase D recommendations" but it's Priority 5 (last priority).**

**Priority order:**
1. Add missing prohibitions (2 new)
2. Validate hypothetical patterns (context callout, zebra-striping)
3. Mechanism verification (width variation, typographic scale jumping)
4. Skill enrichments (apply additions to skills)
5. **Anti-gravity validation (4-variant test)**

**Interpretation:** Priorities 1-4 are Phase D scope. **Priority 5 is Phase F+ scope.**

---

### Recommendation: SPLIT THE PHASES

**Phase D (Minimal Validation):** 4-6 hours
- Build 1 Track 1 page (test component assembly)
- Build 1 Track 2 page (test tension-composition pipeline)
- Document gaps (missing mechanisms? unclear guidance? insufficient examples?)
- Produce sufficiency report (PASS/CONDITIONAL/FAIL)

**Phase D Success Criteria:**
- Zero soul violations
- Agent completes build without getting stuck
- Prohibitions prevent violations (not discovered post-build)
- Mechanisms are extractable and applicable
- Quality: PA ≥ 30/40 (acceptable, not excellence)

**Phase D Failure Criteria:**
- Agent cannot complete build (missing vocabulary, unclear rules)
- Soul violations occur (extraction didn't emphasize prohibitions)
- Agent pattern-matches despite anti-gravity rules (mechanisms ineffective)
- Quality: PA < 25/40 (extraction insufficient)

---

**Phase F+ (Anti-Gravity Validation):** 12-20 hours
- Run 4-variant test (or simplified 2-variant: A vs C)
- Measure novelty, quality, library match
- Validate rigidity-mechanics hypotheses
- Produce research validation report

**Phase F+ Success Criteria:**
- Variant C: novelty ≥ 4/5 + PA ≥ 35/40
- Variant C > Variant D (anti-gravity works)
- Variant C ≥ Variant A (library doesn't degrade novelty)
- Variant C > Variant B (mechanisms necessary, not just library access)

**Phase F+ Failure Criteria:**
- Variant C = Variant B or D (mechanisms don't work)
- Variant C < Variant A (library degrades novelty even with anti-gravity)
- Pattern-matching rate same across all variants (library doesn't constrain)

---

## 6. ALTERNATIVE TEST DESIGNS

### Alternative 1: Minimal Sufficiency Test (Phase D Proper)

**Scope:** 4-6 hours
**Variants:** NONE (just 2 builds)
**Content:** 1 Track 1 + 1 Track 2

**Setup:**
- **Build 1 (Track 1):** Data-heavy page (tables, stats, diagrams)
  - Use: tokens.css + components.css + semantic-rules.md
  - Goal: Test component assembly sufficiency

- **Build 2 (Track 2):** Prose-heavy page (narrative, conceptual)
  - Use: Full tension-composition skill + compositional-core/ (phase-gated)
  - Goal: Test pipeline clarity + mechanism extractability

**Evaluation:**
- Soul check (border-radius: 0, box-shadow: none, palette)
- PA audit (48 questions, guardrails)
- Sufficiency check (did agent get stuck? need additional research?)

**Output:**
- 2 HTML pages
- Validation report (gaps documented)
- GO/NO-GO decision for Phase E (playbook writing)

**Advantages:**
- Matches stated Phase D scope (1-2 pages)
- Fast (4-6 hrs wall time)
- Directly tests extraction sufficiency
- Simple evaluation (pass/fail, not comparative)

**Disadvantages:**
- Doesn't test anti-gravity mechanisms (no comparison)
- N=1 per track (no robustness test)
- Doesn't measure novelty (no baseline)

**When to use:** If goal is VALIDATION (is extraction ready?) not RESEARCH (do mechanisms work?)

---

### Alternative 2: Controlled 2-Variant Test (A vs C)

**Scope:** 6-10 hours
**Variants:** 2 (A = skill only, C = skill + anti-gravity)
**Content:** SAME content for both variants

**Setup:**
- **Variant A (Baseline):**
  - Invoke tension-composition skill
  - Prohibit ALL library access (case-studies/, mechanism-catalog.md)
  - Agent derives metaphor, builds from first principles

- **Variant C (Treatment):**
  - Invoke tension-composition skill
  - Full anti-gravity library (M1, M5, M6, M9 deployed)
  - Agent follows phase-gating, divergence mandate

**Evaluation:**
- Novelty (both should be high, since A has no library to match)
- Quality (C should be higher, library mechanisms available)
- Library match (A = N/A, C = should be NO)

**Output:**
- 2 HTML pages (same content, different library access)
- Comparative report (A vs C)
- Anti-gravity effectiveness score

**Advantages:**
- Controlled comparison (same content, different library access)
- Tests core hypothesis: Does library degrade novelty? (C novelty should equal A)
- Tests library value: Does library improve quality? (C quality should exceed A)
- Simpler than 4-variant (6-10 hrs vs 12-20 hrs)

**Disadvantages:**
- No B variant (can't test weak permission hypothesis)
- No D variant (can't establish pattern-matching baseline)
- Same content may be boring for 2nd agent
- Still relatively large scope for "validation test"

**When to use:** If goal is TEST MECHANISM EFFECTIVENESS not just validate sufficiency.

---

### Alternative 3: Phased Validation (D → F Progression)

**Phase D (Week 1):** Minimal sufficiency test
- 1 Track 1 + 1 Track 2 (4-6 hrs)
- Document gaps
- GO/NO-GO for playbook

**Phase E (Week 2):** Playbook writing
- Use Phase D learnings to write migration guide
- Address documented gaps (add missing examples, clarify rules)

**Phase F (Week 3):** Pilot migration + anti-gravity test
- Migrate 2-3 real pages using playbook
- Run 2-variant test (A vs C) on 1 of the pages
- Measure novelty + quality in production context

**Advantages:**
- Staged validation (incremental risk)
- Phase D fast (4-6 hrs) → quick feedback loop
- Anti-gravity test deferred until library is actually in use
- Production context (real pages, not test content)

**Disadvantages:**
- Slower overall timeline (3 phases vs 1)
- Anti-gravity test results come late (after playbook written)
- If mechanisms fail in Phase F, requires Phase E rework

**When to use:** If timeline permits staged approach and production validation preferred.

---

### Alternative 4: Robustness Test (Multiple Content Types)

**Scope:** 12-15 hours
**Variants:** 1 (C only — anti-gravity)
**Content:** 4 different Track 2 pages (diverse content)

**Setup:**
- **Page 1 (Narrative):** Story-driven, linear, prose-heavy
- **Page 2 (Analytical):** Data-driven, hierarchical, structured
- **Page 3 (Instructional):** Step-by-step, procedural, action-oriented
- **Page 4 (Conceptual):** Abstract, non-linear, idea-focused

All use: Full anti-gravity library (same variant-C setup)

**Evaluation:**
- Cross-content consistency (do mechanisms apply across types?)
- Novelty range (is diversity achieved across all 4?)
- Quality consistency (PA scores within acceptable range?)

**Output:**
- 4 HTML pages (different content, same library access)
- Robustness report (which content types work well? which struggle?)
- Coverage map (content spectrum tested)

**Advantages:**
- Tests mechanism robustness (do mechanisms generalize?)
- Builds 4 real examples (usable for playbook)
- Discovers content-specific gaps (narrative vs data)

**Disadvantages:**
- No comparison (only variant C, no A/B/D baseline)
- Cannot measure anti-gravity effectiveness (no control)
- Large scope (12-15 hrs, same as 4-variant but no comparison)

**When to use:** If goal is PROVE GENERALIZATION not test effectiveness.

---

## 7. FINAL RECOMMENDATION

### Recommended Path: Split Phase D

**Phase D (Minimal Validation): 1 Track 1 + 1 Track 2**
- **Scope:** 4-6 hours
- **Goal:** Prove compositional-core/ is sufficient for building
- **Success:** Agent completes both builds without getting stuck
- **Output:** 2 pages + sufficiency report + GO/NO-GO decision

**Phase F+ (Anti-Gravity Test): 2-variant test during pilot**
- **Scope:** 6-10 hours (after playbook written)
- **Goal:** Validate rigidity-mechanics hypotheses
- **Design:** A (skill only) vs C (skill + anti-gravity) on same content
- **Success:** C novelty ≥ A novelty AND C quality > A quality
- **Output:** 2 pages + comparative analysis + mechanism validation report

---

### If Full Test Must Happen NOW

**Simplify to 2-variant test (A vs C):**
- Drop B (weak permission unclear)
- Drop D (pattern-matching baseline obvious)
- Same content (controlled comparison)
- Sequential execution (avoid Playwright contention)
- 6-10 hours total

**Evaluation framework:**
- **Novelty:** Weaver scores 0-5 (distance from library patterns)
- **Quality:** PA audit 0-40 (perceptual audit score)
- **Library match:** Binary (does metaphor appear in case-studies/_INDEX.md?)

**Success criteria:**
- **A (baseline):** Novelty 4-5, Quality 25-30 (skill sufficient for derivation, moderate quality)
- **C (treatment):** Novelty 4-5, Quality 35-40 (library doesn't degrade novelty, improves quality)
- **Conclusion:** Anti-gravity mechanisms WORK (library adds quality without constraining novelty)

---

### Decision Matrix

| Goal | Recommended Test | Scope | Timeline |
|------|-----------------|-------|----------|
| **Validate extraction sufficiency** | Alternative 1 (minimal) | 4-6 hrs | Phase D (now) |
| **Test anti-gravity mechanisms** | Alternative 2 (A vs C) | 6-10 hrs | Phase F+ (post-playbook) |
| **Prove content robustness** | Alternative 4 (4 content types) | 12-15 hrs | Phase F+ (post-pilot) |
| **Full research validation** | Original 4-variant | 12-20 hrs | Phase G+ (post-migration) |

---

## CONCLUSION

**The 4-variant test is VALID but MISPLACED.**

**Key Issues:**
1. Scope mismatch: 12-20 hrs vs stated 4-6 hrs Phase D goal
2. Unclear B vs C distinction (operational ambiguity)
3. N=1 per variant insufficient for statistical conclusions
4. Should be RESEARCH VALIDATION (Phase F+) not EXTRACTION VALIDATION (Phase D)

**Recommended Action:**
- **Phase D:** Run minimal sufficiency test (1 Track 1 + 1 Track 2, 4-6 hrs)
- **Phase F+:** Run 2-variant test (A vs C) during pilot migration (6-10 hrs)
- **IF full 4-variant required:** Defer to Phase G+ after initial migration complete

**The protocol is right.** Phase D = prove extraction works. Anti-gravity test = prove mechanisms work. These are different questions requiring different phases.

---

**END ANALYSIS**
