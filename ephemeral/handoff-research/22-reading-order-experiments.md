# Reading Order Experiments: What Happens When We Change WHEN the Brief Is Read?

**Agent:** Task #12 (Reading Order Analyst)
**Date:** 2026-02-22
**Context:** The TC brief's primacy (read first) causes the builder to lean on 99 lines and skim 3,700. This report designs six thought experiments exploring alternative reading orders and predicts their outcomes.

---

## The Core Problem

The current `/build-page` pipeline (SKILL.md lines 96-106) instructs the builder:

```
Read these files IN THIS ORDER (order matters -- TC brief establishes compositional
foundation, conventions brief establishes world model, recency keeps soul constraints fresh):
1. _tc-brief.md           -- ~99 lines (TC brief, read FIRST)
2. conventions-brief.md   -- ~610 lines (world model, read SECOND)
3. content.md             -- variable (content, read THIRD)

Reference files (consult as needed during build):
4. mechanism-catalog.md   -- ~869 lines
5. components.css         -- ~31KB
6. tokens.css             -- ~174 lines
7. prohibitions.md        -- ~353 lines (read LAST before CSS begins)
```

The TC brief lands in the **primacy zone** (highest absorption). The conventions brief spans the **primacy-to-middle zone** (Sections 1-5 absorbed well, Sections 6-10 in the "dead zone"). Reference files 4-7 are "consult as needed" -- effectively optional under builder time pressure.

**Evidence base for predictions:**

| Experiment | Brief | PA-05 | Richness | Notes |
|------------|-------|-------|----------|-------|
| Middle-tier (2026-02-16) | NO TC brief; builder read conventions + content + mechanism catalog directly | 4/4 DESIGNED | 12 mechanisms, F-PATTERN | Opus builder, flat file-bus topology |
| Flagship (2026-02-17) | WITH TC brief (1,004-line master prompt) | 1.5/4 FLAT | Zero borders, uniform typography | Sonnet builders; confounded with model variable |
| Gas Town (2026-02-19) | WITH TC brief (99 lines, /build-page pipeline) | Not yet scored (first pipeline run) | 15 mechanisms, 4 zones, bento grid | Opus builder, full pipeline |
| CD-006 CEILING (prior) | No TC brief, no conventions brief; Opus builder with full system context | 39/40 | 41 mechanisms, 5/5 scales | Opus, iterative agent collaboration |

**Critical confound:** Middle used NO TC brief AND Opus. Flagship used TC brief AND Sonnet. Gas Town used TC brief AND Opus. CD-006 used neither brief AND Opus. Model choice (Opus vs Sonnet) is confounded with reading order across these experiments. All predictions below assume Opus builder to isolate the reading order variable.

---

## Experiment 1: NO BRIEF AT ALL

**Setup:** Builder reads ONLY the source material files directly:
1. `conventions-brief.md` (610 lines)
2. `mechanism-catalog.md` (869 lines)
3. `components.css` (31KB -- skimmed for component names)
4. `tokens.css` (174 lines)
5. `prohibitions.md` (353 lines)
6. Content file

**What happens:**

The builder receives the WORLD MODEL (conventions brief) without a pre-digested plan. This is closest to the Middle experiment configuration, which produced PA-05 4/4.

**Mechanism-by-mechanism prediction:**

1. **Metaphor derivation:** The builder must derive its own metaphor from content. Without TC's 6-criterion rubric (Phase 3.5G), the metaphor quality depends entirely on the builder's creative capacity. Opus excels here -- CD-006 derived 41 mechanisms without any TC brief. The metaphor will likely be STRUCTURAL (driven by content engagement) rather than ANNOUNCED (driven by brief compliance).

2. **Mechanism selection:** The builder reads the full mechanism catalog (869 lines) directly. In the current pipeline, the TC brief pre-selects 14-15 mechanisms, and the builder rarely deviates from the selection. Without pre-selection, the builder must engage with the full catalog. This is MORE cognitively expensive but produces DEEPER engagement. The Middle experiment's builder selected 12 mechanisms from direct catalog reading and deployed them with conviction.

3. **Multi-coherence:** Without the TC brief's boundary CSS table (Section 6), the builder must plan coherence from the conventions brief's Section 4 examples. The conventions brief provides one concrete 4-zone example with 5-channel shift. This example lands in primacy zone (Section 4, ~line 120-180). The builder absorbs the PRINCIPLE (channels shift together) without a page-specific prescription.

4. **Conventions brief absorption:** Without the TC brief occupying the primacy zone, the conventions brief IS the primacy document. Sections 1-5 (Identity, Perception, Richness, Multi-Coherence, Fractal Echo) are absorbed deeply. Sections 6-10 remain in the middle dead zone -- but the PROCESS section (currently ~line 529) is in the recency zone. This is actually better placement for process than in the current order, where the conventions brief is sandwiched between TC brief and content.

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.5-4.0 | Builder engages directly with world model. No pre-digested plan to lean on. Closest to Middle (4/4) and CD-006 (39/40). |
| Richness | HIGH (14+ mechanisms) | Direct catalog reading produces deeper mechanism engagement than pre-selected list. |
| Compliance | MODERATE (85-90%) | Without TC brief's specific CSS values, some perception thresholds may be missed. Builder must derive values from conventions brief examples. |
| Build time | +20-30 min | Builder spends more time reading and planning. No pre-computed zone architecture. |
| Soul compliance | HIGH (95%+) | Prohibitions read last (recency), same as current order. |

**Risk:** The builder may produce a page that is COMPOSED but non-compliant with specific gate thresholds (SC-09 background delta, SC-13 multi-coherence). The TC brief currently pre-computes compliant values; without it, the builder must derive them from the conventions brief's threshold table.

**Key insight:** This experiment is essentially "what the Middle experiment already proved works." The prediction is high confidence because we have N=1 empirical evidence (Middle: 4/4) plus N=1 supporting evidence (CD-006: 39/40, even less structured input).

---

## Experiment 2: BRIEF LAST

**Setup:** Builder reads all reference material FIRST, builds mental model from source, THEN reads TC brief as a "checklist" at the end:

1. `conventions-brief.md` (610 lines) -- FIRST
2. `mechanism-catalog.md` (869 lines)
3. `components.css` (component names)
4. `tokens.css` (174 lines)
5. `prohibitions.md` (353 lines)
6. Content file
7. `_tc-brief.md` (99 lines) -- LAST

**What happens:**

This inverts the current order's primacy effect. The conventions brief now occupies the primacy zone. The TC brief occupies the recency zone.

**The recency effect on the TC brief:**

When the TC brief is read last, it functions differently. Instead of establishing the builder's mental model (primacy), it REFINES an already-formed understanding (recency). The builder has already:
- Internalized the world model (conventions brief in primacy)
- Browsed the mechanism vocabulary (catalog)
- Read the content and formed initial compositional instincts
- Absorbed soul constraints (prohibitions)

Then the TC brief arrives as a CONFIRMATION or CORRECTION of existing instincts.

**Two sub-scenarios:**

**2A: TC brief ALIGNS with builder's instincts.** The brief confirms what the builder already planned. This is the best case -- the builder has both deep world-model understanding AND page-specific guidance. The brief functions as validation, not programming.

**2B: TC brief CONTRADICTS builder's instincts.** The brief suggests a different metaphor or mechanism set than what the builder derived. This creates a conflict. Because the brief is in the recency zone, it will override the builder's instincts -- but the override will be SHALLOW (the builder has already internalized their own plan from the conventions brief). The result is a compromised plan that serves neither the builder's instinct nor the brief's design fully.

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.0-3.5 | Sub-scenario 2A: 3.5-4.0. Sub-scenario 2B: 2.5-3.0. Weighted average depends on TC quality. |
| Richness | MODERATE-HIGH | World model deeply absorbed, but mechanism deployment may be confused by late plan change. |
| Compliance | HIGH (90%+) | TC brief's specific thresholds are in recency zone = fresh when CSS writing begins. |
| Build time | +15-25 min | Extra reading time for full catalog + potential re-planning after TC brief. |
| Soul compliance | HIGH (95%+) | Prohibitions still read before TC brief. |

**Key insight:** BRIEF LAST is better than BRIEF FIRST when the TC brief aligns with what a well-informed builder would naturally produce. It is WORSE when there's a mismatch, because the builder has already committed cognitive resources to a different plan. The quality of this approach depends entirely on TC brief quality -- a high-quality brief that aligns with content structure would score well; a mediocre brief would create cognitive dissonance.

---

## Experiment 3: BRIEF AS INTERLEAVING

**Setup:** TC brief sections are embedded within the reference material they summarize:

```
conventions-brief.md Section 1 (Identity)
  -> TC brief Section 8 (Builder Anchors -- soul-related)
conventions-brief.md Section 2 (Perception)
  -> TC brief Section 5 (Metaphor-Implied CSS Directions -- threshold values)
conventions-brief.md Section 3 (Richness)
  -> TC brief Section 4 (Selected Mechanisms)
conventions-brief.md Section 4 (Multi-Coherence)
  -> TC brief Section 6 (Build Recipe -- boundary CSS table)
conventions-brief.md Section 5 (Fractal Echo)
  -> TC brief Section 2 (Zone Architecture)
conventions-brief.md Section 6 (Unified Metaphor)
  -> TC brief Section 1 (Structural Metaphor)
  -> TC brief Section 3 (Content Tensions)
```

**What happens:**

This is the most architecturally novel approach. Each conventions brief section is immediately followed by its page-specific instantiation from the TC brief. The builder reads "what multi-coherence IS" followed immediately by "what multi-coherence MEANS for THIS page."

**Advantages:**

1. **Eliminates the dead zone.** Every conventions brief section is paired with a concrete, page-specific example. Section 6 (Unified Metaphor) -- which currently falls in the dead zone -- is now immediately followed by the TC brief's structural metaphor. The abstract concept is paired with its concrete application.

2. **Bridges theory and practice.** The builder never reads theory without seeing how it applies. This is the "culinary school" model (Agent 5's terminology): principle followed by application, not 610 lines of theory followed by 99 lines of plan.

3. **Distributes attention evenly.** Instead of 99 lines in primacy and 610 lines distributed across primacy/middle/recency, ALL content is distributed across the full reading span with alternating density (theory-application, theory-application).

**Disadvantages:**

1. **Destroys the TC brief's narrative coherence.** The TC brief's power comes from its internal logic: metaphor -> zones -> tensions -> mechanisms -> recipe. This is a STORY. Interleaving fragments the story into disconnected pieces embedded in someone else's narrative.

2. **Makes the conventions brief harder to re-read.** During fix cycles, the builder needs to "re-read your conviction statement and fractal echo table before touching CSS." With interleaving, the builder must navigate a hybrid document that is neither pure theory nor pure plan.

3. **Assembly complexity.** Creating the interleaved document requires a new pipeline step that understands both documents' structures. This is non-trivial and error-prone.

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.0-3.5 | Better absorption of conventions brief sections 6-10 (dead zone eliminated). But TC brief fragmentation may reduce compositional coherence. |
| Richness | MODERATE-HIGH | Mechanism knowledge deeply paired with theory. But metaphor coherence may suffer from narrative fragmentation. |
| Compliance | HIGH (90-95%) | Threshold values paired with their theoretical justification. Builder understands WHY >= 15 RGB, not just THAT >= 15 RGB. |
| Build time | +10-15 min | Slightly longer reading phase, but less re-reading during build (theory-application pairing reduces lookup). |
| Soul compliance | HIGH (95%+) | Identity section read first with page-specific anchors interleaved. |

**Key insight:** Interleaving solves the dead zone problem but creates a narrative coherence problem. The TC brief works BECAUSE it tells a story: "here is your metaphor, here is how it organizes zones, here is why these tensions matter, here is what to build." Fragmenting that story may produce better SECTION-LEVEL understanding at the cost of HOLISTIC compositional vision. This tradeoff is the central uncertainty.

---

## Experiment 4: BRIEF AS VERIFICATION

**Setup:** Builder builds a FIRST DRAFT from source material alone. Then reads TC brief to check what they missed.

**Phase 1 (Build):**
1. `conventions-brief.md` (610 lines)
2. `mechanism-catalog.md` (869 lines)
3. Content file
4. `prohibitions.md` (353 lines)
5. Builder produces `output-draft.html`

**Phase 2 (Verify + Refine):**
6. Builder reads `_tc-brief.md` (99 lines)
7. Builder compares their draft against TC brief's:
   - Structural metaphor (did they discover the same one?)
   - Zone architecture (same zone count and boundaries?)
   - Mechanism selection (overlap? gaps?)
   - Boundary CSS table (same coherence directions?)
8. Builder revises `output.html` based on gaps

**What happens:**

This is the most interesting experiment because it tests whether TC analysis adds INCREMENTAL value to what a well-equipped Opus builder would produce independently.

**Phase 1 prediction:** The builder produces something very close to the Middle experiment's quality (PA-05 3.5-4.0). Direct engagement with source material, no pre-digested plan, full creative agency.

**Phase 2 prediction:** The TC brief becomes a DIAGNOSTIC TOOL. Three scenarios:

**4A: High overlap (builder derived similar metaphor + mechanisms).** The brief confirms the builder's instincts and highlights 2-3 specific CSS values to refine (e.g., "your Z2->Z3 boundary has 12 RGB delta; TC says 15 minimum"). This is the MOST VALUABLE use case -- the brief catches specific threshold violations without overriding compositional vision. Predicted PA-05 improvement: +0.0-0.5 (from 3.5-4.0 to 3.5-4.0, with higher compliance).

**4B: Medium overlap (different metaphor, similar zones).** The builder chose a different organizing principle but arrived at similar structure. The TC brief highlights the divergence. The builder must decide: adopt TC's metaphor (discarding their own) or keep theirs and cherry-pick TC's threshold values. This is a JUDGMENT CALL that produces interesting results -- the builder is making COMPOSITIONAL DECISIONS, not following instructions.

**4C: Low overlap (fundamentally different approach).** The builder and TC diverged significantly. Phase 2 becomes a REBUILD, which defeats the purpose. The builder either ignores the TC brief (wasting TC's work) or abandons their draft (wasting Phase 1).

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.5-4.0 | Phase 1 produces strong composition (Middle-like). Phase 2 refines without overriding. |
| Richness | HIGH | Builder engages fully with catalog. TC brief catches gaps. |
| Compliance | HIGHEST (92-97%) | Phase 1 builds with conviction. Phase 2 specifically targets threshold compliance. |
| Build time | +40-60 min | Full build + verification pass + targeted fixes. Nearly double current time. |
| Soul compliance | HIGH (95%+) | Standard prohibitions.md recency. |

**Key insight:** This is the MOST PROMISING experiment but the MOST EXPENSIVE. It essentially runs two builders' worth of work (build + verify/revise). The Gas Town TC brief and the builder's actual build log show high overlap (same metaphor, same 15 mechanisms, same zone count) -- suggesting that for well-structured content, the TC brief CONFIRMS rather than REDIRECTS. If this pattern holds, the verification model wastes Phase 2 on confirmation rather than correction.

The critical question: Is TC's value in DERIVING the right plan (in which case verification works), or in TRANSMITTING the plan to a builder who wouldn't derive it independently (in which case verification is wasteful for easy content and essential for hard content)?

---

## Experiment 5: PROGRESSIVE DISCLOSURE

**Setup:** Information arrives in layers, with building between each layer.

**Layer 1 (Soul -- 50 lines):**
- `prohibitions.md` (condensed to absolute prohibitions only, ~50 lines)
- Content file (full read)
- Builder produces HTML skeleton + zone architecture + conviction statement

**Layer 2 (Build -- full conventions brief):**
- `conventions-brief.md` (610 lines)
- Builder builds CSS for all zones, using conventions brief as world model

**Layer 3 (Refine -- TC brief):**
- `_tc-brief.md` (99 lines)
- Builder reads TC brief as refinement guide
- Builder applies targeted fixes: threshold compliance, mechanism gaps, coherence direction alignment

**Layer 4 (Polish -- full reference):**
- `mechanism-catalog.md` (for mechanism CSS patterns)
- `components.css` (for component class names)
- Builder polishes: component deployment, mechanism CSS, token compliance

**What happens:**

This is the "apprentice progression" model: learn the rules (soul), practice the craft (build), receive mentorship (TC brief), then refine (reference material).

**Layer 1 produces:** An HTML skeleton with zone boundaries derived purely from content structure. The builder has only soul constraints (sharp edges, warm palette, no shadows) and content. This is the PUREST creative act -- the builder's compositional instincts drive zone count, naming, and architecture.

**Layer 2 produces:** A fully built page. The conventions brief arrives AFTER the builder has committed to a zone architecture. This means the conventions brief cannot reshape the zone plan (it's already built into HTML) -- it can only influence CSS implementation. Sections 1-5 (Identity, Perception, Richness, Multi-Coherence, Fractal Echo) are deeply absorbed because they are APPLIED IMMEDIATELY to existing HTML. The dead zone problem is eliminated because the builder is actively building while reading, not reading-then-building.

**Layer 3 produces:** Targeted fixes. The TC brief arrives after a full build exists. This is similar to Experiment 4 (Verification), but with the conventions brief already absorbed in Layer 2.

**Layer 4 produces:** Polish. Mechanism catalog and component CSS arrive last, used as lookup resources for specific CSS patterns. This matches how reference material is actually used -- not read cover-to-cover, but consulted for specific needs.

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.0-4.0 (wide range) | Highly dependent on builder's Layer 1 instincts. Strong instinct + progressive refinement = 4.0. Weak instinct = structural problems in HTML skeleton that CSS cannot fix = 3.0. |
| Richness | HIGH | Four distinct engagement passes. Each pass deepens the composition. |
| Compliance | HIGH (90-95%) | TC brief in Layer 3 catches threshold violations. Reference material in Layer 4 catches token/component gaps. |
| Build time | +60-90 min | 4 distinct phases, each requiring reading + building. Most expensive experiment. |
| Soul compliance | HIGHEST (97%+) | Soul constraints are Layer 1 (primacy AND they are the ONLY initial constraints). |

**Key insight:** Progressive disclosure is the BEST at eliminating the dead zone but the WORST at efficiency. The builder essentially builds the page 3 times (skeleton, CSS, refinements). The key risk is that Layer 1 instincts (50 lines of soul + content) produce a zone architecture that cannot be improved by later layers. If the builder makes a structural mistake in the HTML skeleton, Layers 2-4 are remediation, not refinement.

This matches the "culinary school" model perfectly: the student learns basics, practices, receives expert feedback, then polishes. But culinary school takes 2 years, not 90 minutes. The question is whether the efficiency cost is worth the quality gain.

---

## Experiment 6: DUAL-READ

**Setup:** Builder reads everything once, writes first draft, then RE-READS specific sections before fixing.

**Pass 1 (Full Read + Build):**
1. `_tc-brief.md` (99 lines) -- current primacy position
2. `conventions-brief.md` (610 lines) -- full read
3. Content file
4. `prohibitions.md` (353 lines) -- recency position
5. Builder builds `output.html`

**Pass 2 (Targeted Re-Read + Fix):**
6. Gate results identify weak boundaries (which gates failed)
7. Builder re-reads SPECIFIC conventions brief sections:
   - SC-09 fail -> re-read Section 2 (Perception) + Section 4 (Multi-Coherence)
   - SC-13 fail -> re-read Section 4 (Multi-Coherence) + Section 7 (Transition Grammar)
   - SC-14 fail -> re-read Section 2 (Perception, sub-perceptual prevention)
   - PA issues -> re-read Section 3 (Richness) + Section 5 (Fractal Echo)
8. Builder also re-reads TC brief Section 6 (Build Recipe) for boundary-specific CSS values
9. Builder applies targeted fixes

**What happens:**

This is closest to the current fix cycle mechanism (SKILL.md Step 7) but with an important difference: the RE-READ is DIRECTED by gate results. Currently, fix cycles tell the builder "re-read your conviction statement" -- a general instruction. This experiment tells the builder "re-read conventions-brief Section 4 because SC-13 failed at Z2->Z3 with 2 channels instead of 3."

**The directed re-read solves the dead zone.** Sections 6-10 of the conventions brief may be skimmed in Pass 1, but if gates fail on transition grammar (Section 7) or CSS vocabulary (Section 8), the builder re-reads EXACTLY those sections in Pass 2. The dead zone content is elevated to recency position precisely when it's needed.

**Predicted scores:**

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| PA-05 | 3.0-3.5 (Pass 1), 3.5-4.0 (after Pass 2) | Pass 1 matches current pipeline output. Pass 2 specifically targets weaknesses. |
| Richness | MODERATE (Pass 1), HIGH (Pass 2) | Re-reading mechanism catalog sections + conventions brief for specific failures. |
| Compliance | HIGHEST (95%+) | Directed re-reading targets exactly what failed. No wasted attention on already-passing areas. |
| Build time | +20-30 min | Only incremental cost of targeted re-reading + fixes. Most efficient multi-pass approach. |
| Soul compliance | HIGH (95%+) | Standard. |

**Key insight:** Dual-read is the MOST PRACTICAL experiment because it requires the LEAST architectural change to the current pipeline. It adds one step: after gates run, map failing gates to specific conventions brief sections, and instruct the builder to re-read those sections before fixing. This is essentially a "JIT reading" approach (Agent 2's terminology from the synthesis).

The directed re-read is more effective than a general "re-read your conviction statement" because it solves a SPECIFIC problem: the builder skimmed Section 7 (Transition Grammar) in Pass 1, and now SC-13 failed at a boundary that needed a BRIDGE transition. The re-read of Section 7 is targeted, motivated, and immediately applied.

---

## Comparative Analysis

### Score Predictions (All Opus Builder)

| Experiment | PA-05 | Richness | Compliance | Build Time | Implementation Effort |
|------------|-------|----------|------------|------------|----------------------|
| Current pipeline | 3.0-3.5 | MODERATE | 85-90% | Baseline | N/A (current) |
| 1. No Brief | 3.5-4.0 | HIGH | 85-90% | +20-30 min | LOW (remove TC step) |
| 2. Brief Last | 3.0-3.5 | MOD-HIGH | 90%+ | +15-25 min | LOW (reorder) |
| 3. Interleaving | 3.0-3.5 | MOD-HIGH | 90-95% | +10-15 min | HIGH (new assembly step) |
| 4. Verification | 3.5-4.0 | HIGH | 92-97% | +40-60 min | MODERATE (two-phase) |
| 5. Progressive | 3.0-4.0 | HIGH | 90-95% | +60-90 min | HIGH (4-layer system) |
| 6. Dual-Read | 3.5-4.0 | HIGH | 95%+ | +20-30 min | LOW (add directed re-read) |

### The Pareto Frontier

Three experiments sit on the quality/cost Pareto frontier:

1. **No Brief (Experiment 1):** Highest PA-05 prediction, lowest implementation effort, moderate compliance. The Middle experiment ALREADY PROVED THIS WORKS. The risk is compliance -- without pre-computed threshold values, some gates may fail.

2. **Dual-Read (Experiment 6):** Best compliance, high PA-05, moderate time cost, lowest implementation effort for a multi-pass approach. This is the PRACTICAL winner -- it requires only adding a gate-to-section mapping table and a "directed re-read" instruction to the fix cycle.

3. **Verification (Experiment 4):** Highest overall quality prediction, but nearly double the build time. This is the QUALITY winner if time is not a constraint.

### The Surprising Findings

**1. The TC brief may be solving a problem that doesn't exist for Opus.**

The Middle experiment (no TC brief, Opus builder) produced PA-05 4/4. CD-006 (no TC brief, no conventions brief, Opus builder) produced 39/40. The Gas Town build (WITH TC brief, Opus builder) adopted the TC brief's metaphor, zones, mechanisms, and CSS values almost verbatim. The builder's build log shows near-perfect alignment with the TC brief's plan.

This suggests that for Opus, the TC brief CONFIRMS what the builder would derive independently. The brief's value is not in GENERATING the plan but in GUARANTEEING threshold compliance. If that's true, the brief's optimal position is AFTER the build (verification) or NOWHERE (with compliance handled by gates + fix cycles).

**2. Primacy is not just about position -- it's about cognitive commitment.**

When the TC brief is read first, the builder makes a cognitive commitment to its plan BEFORE reading the world model that would enable independent judgment. This is the anchoring effect: the brief establishes "what the page IS" before the conventions brief establishes "what the world allows." Reading the world model first (Experiments 1, 2, 5) allows the builder to form a rich understanding of the possibility space before encountering a specific plan.

**3. The dead zone problem is more important than the primacy problem.**

The failure-mode analysis (skill-surgery/08) identifies that conventions brief Sections 6-10 fall in the "middle dead zone" -- the builder absorbs Sections 1-5 (primacy) and re-engages with the PROCESS section (recency), but critical content about Unified Metaphor (Section 6), Transition Grammar (Section 7), and CSS Vocabulary (Section 8) is skimmed.

Experiments 3 (Interleaving), 5 (Progressive Disclosure), and 6 (Dual-Read) all solve the dead zone. But they solve it in different ways:
- Interleaving: eliminates the dead zone by pairing every section with application
- Progressive: eliminates the dead zone by building WHILE reading
- Dual-Read: rescues dead-zone content AFTER it's needed (JIT re-read)

**4. The cheapest experiment to RUN is also the most informative.**

Experiment 1 (No Brief) requires zero infrastructure changes. Remove Step 2 (TC skill invocation) from the pipeline. Give the builder conventions brief + mechanism catalog + content + prohibitions. Measure PA-05 and gate compliance.

If PA-05 >= 3.5 AND compliance >= 90%: The TC brief is OVERHEAD for Opus builders.
If PA-05 >= 3.5 AND compliance < 85%: The TC brief's value is COMPLIANCE, not COMPOSITION. Move it to verification (Experiment 4).
If PA-05 < 3.0: The TC brief IS adding compositional value. Keep it in primacy but add Experiment 6 (Dual-Read) for dead zone rescue.

---

## Recommendations (Priority Ordered)

### 1. RUN EXPERIMENT 1 (No Brief) FIRST
- Cost: One pipeline run without TC invocation
- Value: Determines whether TC brief adds compositional value or just compliance
- If PA-05 >= 3.5: TC brief is overhead for Opus. Redesign TC's role.
- If PA-05 < 3.0: TC brief is essential. Stop here.

### 2. IF TC brief is overhead, IMPLEMENT EXPERIMENT 6 (Dual-Read)
- Add gate-to-section mapping table to gate-runner.md
- After gate failures, instruct builder to re-read specific conventions brief sections
- TC brief becomes optional compliance verification (Experiment 4 model)
- Cost: ~2 hours implementation, adds ~20 min to build time

### 3. IF TC brief is essential, MOVE IT TO RECENCY (Experiment 2 variant)
- Keep TC invocation but change reading order: conventions brief -> content -> TC brief
- TC brief is read LAST before building, landing in recency zone
- Builder has world model (primacy) AND page-specific plan (recency)
- Cost: One line change in SKILL.md reading order

### 4. DO NOT implement Experiments 3 or 5 without evidence
- Interleaving and Progressive Disclosure have the highest implementation costs
- Their quality predictions are NOT clearly superior to simpler alternatives
- Only pursue if Experiments 1 + 6 or 1 + 2 produce unexpected results

---

## Appendix: Evidence Mapping

| Claim | Evidence Source | Confidence |
|-------|---------------|------------|
| TC brief in primacy establishes builder's mental model | skill-surgery/08:109 (primacy/dead zone mapping) | HIGH |
| Middle experiment (no TC brief) = PA-05 4/4 | MEMORY.md, confirmed in multiple reports | CONFIRMED |
| Flagship (with TC brief) = PA-05 1.5/4 | MEMORY.md, confirmed | CONFIRMED (but confounded with Sonnet) |
| Builder absorbs Sections 1-5 (primacy), skims 6-10 (dead zone) | skill-surgery/08:109 (attention analysis) | MODERATE (theoretical, not measured) |
| Gas Town builder adopted TC brief's plan verbatim | Gas Town _build-log.md (conviction statement mirrors TC brief) | HIGH |
| CD-006 produced 39/40 without any brief | MEMORY.md, confirmed | CONFIRMED |
| Dead zone contains Sections 6-8 (Metaphor, Transitions, CSS Vocab) | skill-surgery/08:109-121 (section mapping) | MODERATE |
| Recency bias favors last-read content for immediate use | Paradigm synthesis Agent 2 (4 irreducible sources of loss) | HIGH (well-established LLM behavior) |
| ~70% information loss in current pipeline | Paradigm synthesis (cross-agent convergence) | MODERATE (estimated, not measured) |
| Theoretical minimum loss ~15-20% with hybrid JIT | Paradigm synthesis Agent 2 | LOW (theoretical) |
