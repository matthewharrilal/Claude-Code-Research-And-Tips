# Skill Interaction Analysis: TC <-> PA Through the /build-page Pipeline

**Agent:** skill-interaction-analyst
**Date:** 2026-02-20
**Files Read:**
- `~/.claude/skills/tension-composition/SKILL.md` (1,946 lines, full)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (989 lines, full)
- `~/.claude/skills/build-page/SKILL.md` (477 lines, full)
- `design-system/pipeline/flagship-pa-questions.md` (159 lines, full)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,000 lines, full)
- `design-system/pipeline/conventions-brief.md` (200 lines, partial -- Sections 1-5)

---

## Section 1: TC Output -> PA Detection Alignment Matrix

The core question: when TC produces an artifact, can PA actually detect whether the builder implemented it?

| TC Produces | PA Should Detect | PA Question(s) | Detection Quality | Gap? |
|------------|-----------------|----------------|-------------------|------|
| **Structural metaphor** (Phase 3) | Whether metaphor is STRUCTURAL (drives CSS) vs ANNOUNCED (text labels only) | PA-44 (implicit vs explicit), PA-68 (spatial coverage), PA-42 (concept vs comfort) | STRONG -- 3 dedicated questions | NO -- well-covered |
| **Zone architecture** (Phase 4.1) | Whether zones are perceptibly distinct | PA-09 (dead space), PA-30 (designed for width), PA-31 (negative space quality), PA-50-53 (void prevention) | MODERATE -- zone PRESENCE detected, but zone ARCHITECTURE (why these zones, in this order) is not | YES -- PA detects zones exist but not whether zone architecture matches TC's plan |
| **Mechanism selections** (Phase 4.0) | Whether mechanisms are deployed | PA-60 (design moments), PA-63 (fractal zoom), PA-41 (repetition) | WEAK -- PA detects visual variety but not specific mechanisms | YES -- critical vocabulary gap (see Section 2) |
| **Coherence directions** (Phase 4.3) | Whether channels shift coherently at boundaries | PA-61 (multi-voice), PA-62 (transition variation), PA-17 (rhythm) | STRONG -- 3 questions directly target multi-coherence | NO -- well-covered |
| **Richness formula** (Density x Restraint x Confidence) | Whether each factor is present | PA-64 (restraint), PA-65 (multi-voice = density), PA-66 (negative space = confidence) | MODERATE -- restraint has dedicated question; density and confidence are proxied | PARTIAL -- density and spatial confidence lack dedicated PA questions; they are inferred from other answers |
| **Tension derivation** (Phase 2) | N/A -- PA should NOT detect tension | None | N/A | NO -- correct by design; PA judges output, not process |
| **Fractal echo table** (Phase 4.7) | Whether pattern appears at 5 scales | PA-63 (fractal zoom coherence) | MODERATE -- 1 question covers 5 scales | PARTIAL -- PA-63 asks about 2 scales (page + component); does not systematically verify all 5 |
| **Transition types** (Phase 4.6) | Whether transitions vary | PA-34 (transition quality), PA-40 (spacing consistency), PA-62 (transition variation) | STRONG -- 3 questions cover transition design | NO -- well-covered |
| **Perceptual risk warnings** (Phase 3.5E) | Whether warned risks materialized | PA-09 (dead space for W-DEADZONE), PA-44 (implicit for W-OVERLABEL), PA-41 (repetition for W-MONOTONY) | STRONG -- each warning has a corresponding PA question | NO -- good alignment |
| **Per-category mechanism minimums** (S:1+ H:1+ C:1+ D:1+ N:1+) | Whether all 5 categories are represented | No specific PA question | ABSENT | YES -- BLOCKING: PA has no question asking "are all 5 mechanism categories present?" |

### Summary: 5 STRONG, 3 MODERATE/PARTIAL, 1 ABSENT, 1 N/A

---

## Section 2: Mechanism Detection Coverage

TC selects mechanisms from the 18-item catalog. Does PA detect each mechanism category?

### Category: Spatial (Mechanisms #5, #6, #15)

| Mechanism | TC Vocabulary | Visual Manifestation | PA Detection Path | Detected? |
|-----------|--------------|---------------------|-------------------|-----------|
| #5 Dense/Sparse Alternation | "INHALE/EXHALE rhythm" | Sections with different padding densities | PA-17 (rhythm), PA-40 (spacing consistency), PA-66 (negative space variety) | YES -- rhythm detection catches this |
| #6 Width Variation | "channel/pool pattern" | Narrow questions, full-width answers | PA-15 (alignment scatter), PA-30 (designed for width) | PARTIAL -- PA detects alignment but doesn't specifically look for intentional width variation as a MECHANISM |
| #15 Bento Grid | "variable span layout" | Grid cells of different sizes | PA-14 (column breathing), PA-37 (element density), PA-38 (container hierarchy) | YES -- grid questions catch this |

### Category: Hierarchy (Mechanisms #1, #4, #11)

| Mechanism | TC Vocabulary | Visual Manifestation | PA Detection Path | Detected? |
|-----------|--------------|---------------------|-------------------|-----------|
| #1 Border-Weight Gradient | "4px/3px/1px encoding" | Borders of varying thickness | PA-16 (consistency), PA-60 (design moments) | PARTIAL -- PA detects borders as consistency markers but doesn't ask "do borders encode hierarchy?" |
| #4 Spacing Compression | "inverse density-confidence" | Tighter padding at depth | PA-11 (margin psychology), PA-40 (spacing shifts) | PARTIAL -- detected as spacing shift, not as intentional compression gradient |
| #11 Typographic Scale Jumping | "~1.5x ratio" | Heading size cascade | PA-08 (readability), PA-29 (header text styles) | YES -- typography questions catch this |

### Category: Component (Mechanisms #2, #9, #10, #17)

| Mechanism | TC Vocabulary | Visual Manifestation | PA Detection Path | Detected? |
|-----------|--------------|---------------------|-------------------|-----------|
| #2 2-Zone Component DNA | "sparse label + dense body" | Callouts with distinct zones | PA-38 (container reading order) | YES -- internal hierarchy question catches this |
| #9 Confidence Encoding via Color | "semantic callout colors" | Different colored accent borders | PA-18 (gray family), PA-19 (visual intruders) | PARTIAL -- PA checks color consistency but not semantic correctness |
| #10 Border-Left Semantic Signal | "4px accent left border" | Colored left borders on callouts | PA-16 (identical elements match?) | YES -- consistency detection |
| #17 Code Block | "dark bg + syntax highlighting" | Dark code sections | PA-36 (dramatic visual moment) | YES -- high contrast catches this |

### Category: Depth/Emphasis (Mechanisms #3, #7, #16)

| Mechanism | TC Vocabulary | Visual Manifestation | PA Detection Path | Detected? |
|-----------|--------------|---------------------|-------------------|-----------|
| #3 Solid Offset Depth | "::after pseudo-element shadow" | Featured elements with solid offset | PA-45 (design highlight), PA-60 (design moments) | PARTIAL -- detected as highlight but not traced to mechanism |
| #7 Zone Background Differentiation | "4-color zone palette" | Sections with different background colors | PA-32 (visual weight distribution), PA-50 (viewport content) | YES -- background shifts are well-detected |
| #16 Drop Cap | "editorial opening" | Large decorative first letter | PA-45 (design highlight) | YES -- distinctive enough to notice |

### Category: Structure/Navigation (Mechanisms #8, #12, #13, #14, #18)

| Mechanism | TC Vocabulary | Visual Manifestation | PA Detection Path | Detected? |
|-----------|--------------|---------------------|-------------------|-----------|
| #8 Scroll Witness / Sticky TOC | "scroll-linked navigation" | Persistent TOC following scroll | PA-35 (scroll engagement) | PARTIAL -- engagement detected but navigation UX not specifically assessed |
| #12 Progressive Disclosure | "density gradient flow" | Content getting progressively denser | PA-35 (engagement decay), PA-47 (visual novelty decay) | PARTIAL -- detected as engagement pattern, not as intentional density gradient |
| #13 Dark Header + 3px Border | "page chrome" | Dark header with red bottom border | PA-04 (eye flow), PA-39 (header proportion) | YES -- header is always evaluated |
| #14 Footer Mirror | "structural bookend" | Dark footer mirroring header | PA-13 (clear visual ending) | YES -- PA-13 specifically asks about endings |
| #18 Data Table | "mono headers + border categories" | Tables with structured headers | PA-38 (container reading order) | PARTIAL -- tables assessed for hierarchy but not for border-category correctness |

### Aggregate Coverage

| Category | Mechanisms | Fully Detected | Partially Detected | Not Detected |
|----------|-----------|---------------|-------------------|-------------|
| Spatial (S) | 3 | 2 | 1 | 0 |
| Hierarchy (H) | 3 | 1 | 2 | 0 |
| Component (C) | 4 | 3 | 1 | 0 |
| Depth/Emphasis (D) | 3 | 2 | 1 | 0 |
| Structure/Nav (N) | 5 | 2 | 3 | 0 |

**Overall:** 10/18 fully detected, 8/18 partially detected, 0/18 completely missed.

**The gap pattern:** PA detects VISUAL EFFECTS but not COMPOSITIONAL INTENT. When TC selects "border-weight gradient to encode geological depth," PA sees "borders of different weights" but doesn't assess whether the gradient encodes a coherent semantic dimension. This is the vocabulary-bridge gap -- TC speaks in mechanisms, PA speaks in impressions.

---

## Section 3: Zone Architecture Detection

TC derives zone architecture in Phase 4.1 (5-category property taxonomy) and formalizes it in the transition table (R-MC-01). The builder implements zones in HTML/CSS. Can PA verify the zone architecture was built correctly?

### What TC Specifies About Zones

1. **Zone count:** 2-4 major zones (R-MC-06)
2. **Zone progression direction:** e.g., DEEPENING, OPENING, RESOLVING (Phase 4.3)
3. **Per-zone channel values:** Transition table maps bg, font-size, padding, border-left at each boundary
4. **Zone semantic roles:** Orient / Deepen / Synthesize (or similar)

### What PA Can Detect About Zones

| Zone Property | PA Detection | Question(s) | Reliable? |
|--------------|-------------|-------------|-----------|
| Zones EXIST (distinct sections with different treatment) | YES | PA-32 (weight distribution), PA-50-53 (void prevention), PA-52 (thirds have designed moments) | HIGH -- PA-52 specifically divides page into thirds and checks each |
| Zone BOUNDARIES are perceptible | YES | PA-34 (transition quality), PA-62 (transition variation) | HIGH -- transition questions directly assess this |
| Zone PROGRESSION is coherent | PARTIALLY | PA-12 (smooth flow), PA-35 (engagement arc) | MODERATE -- PA detects flow but not whether it matches a specific planned direction |
| Zone DIRECTION matches TC plan | NO | None | ABSENT -- PA has zero awareness of TC's declared directions |
| Zone SEMANTIC ROLES are expressed | NO | None | ABSENT -- PA cannot assess whether a zone is playing the role TC assigned it |
| Content-form coupling (zones respond to content type) | PARTIALLY | PA-20 (personality match), PA-03 (one designer?) | LOW -- personality questions don't assess per-zone content coupling |

### The Core Gap

PA can verify that zones are visually distinct, transitions are designed, and visual weight is distributed. PA CANNOT verify that:

1. The zone architecture serves the CONTENT (not just looks good abstractly)
2. The zone progression matches TC's planned direction
3. The zones express the METAPHOR (not just generic visual variety)

This is by design -- PA's fresh-eyes principle prevents it from knowing TC's plan. But it means **zone architecture fidelity is UNVERIFIED in the current pipeline**. The gate runner (SC-09, SC-12, SC-13) handles programmatic verification (bg deltas, zone counts, channel shifts), but these are STRUCTURAL not SEMANTIC checks.

### Recommendation

This gap is acceptable IF the gate runner catches structural violations. The semantic fidelity of zones (do they serve the metaphor?) is properly the BUILDER'S responsibility during self-verification (Phase D in build-page SKILL.md). PA provides an independent check that the builder's execution meets perceptual floors, not that it matches TC's plan. The two-track verification (programmatic gates + perceptual audit) is the correct architecture.

**However:** If PA finds "metaphor is ANNOUNCED not STRUCTURAL" (PA-44), the fix routing becomes ambiguous (see Section 4).

---

## Section 4: Fix Cycle Routing

When PA finds issues, who should fix them -- the builder (CSS/HTML changes) or TC (re-derive metaphor/zones/mechanisms)?

### Current Fix Routing

The /build-page SKILL.md routes ALL fixes to the builder (Step 7.2). TC is invoked exactly ONCE (Step 2) and never re-invoked. This is a one-way pipeline:

```
TC (once) --> Builder (iterate with fixes) --> PA (evaluate) --> Builder (fix) --> PA (re-evaluate) --> ...
```

### Decision Tree: When Fixes Should Route to TC vs Builder

| PA Finding | Root Cause Analysis | Route To | Rationale |
|-----------|-------------------|----------|-----------|
| "Metaphor is announced, not structural" (PA-44 FAIL) | Builder used labels instead of CSS to express metaphor | **BUILDER** | Implementation failure, not derivation failure. Builder can convert labels to CSS (bg gradients, border progression, spacing compression). |
| "Metaphor is announced, not structural" AND all visual channels are flat | Metaphor may not be expressible in CSS | **TC** (if Cycle 3 exhausted) | If 3 fix cycles cannot make the metaphor structural, the metaphor itself may be the problem. TC should re-derive with structural survival constraint. |
| "No design moments in bottom third" (PA-52 FAIL) | Builder front-loaded all visual interest | **BUILDER** | Zone architecture planned for full coverage, builder execution concentrated at top. Builder re-reads transition table and extends mechanisms to bottom zones. |
| "No design moments in bottom third" AND transition table only has 1-2 zones | TC did not plan for full-page coverage | **TC** | If TC's zone architecture doesn't extend to bottom third, the plan itself is incomplete. TC should add zones or extend existing zone coverage. |
| "Everything shifts at the same time" (PA-61 FAIL) | Builder implemented all channels as synchronized steps | **BUILDER** | Multi-coherence was planned (transition table has independent channel values) but builder collapsed them. Builder should re-read transition table and stagger channel shifts. |
| "Transitions are all identical" (PA-62 FAIL) | Builder used same transition type everywhere | **BUILDER** | TC's mechanism selections include 3+ transition types; builder defaulted to one. |
| "Page feels like three designers made it" (PA-03 FAIL) | Metaphor doesn't unify all content types | **BUILDER first, TC if 2 cycles fail** | Usually builder inconsistency. If persistent, metaphor may not bridge all content sections. |
| "No rhythm, just random" (PA-17 FAIL) | Builder didn't implement pacing arc | **BUILDER** | TC's pacing prediction (Phase 4.2B) planned for rhythm. Builder should implement the planned alternation pattern. |
| "Container too narrow / too wide" (PA-53 FAIL) | Container width violation | **BUILDER** | Always builder -- TC explicitly specifies 940-960px is non-negotiable. |
| "Metaphor vocabulary in visible text labels" (W-OVERLABEL materialized) | Builder used metaphor names as visible labels | **BUILDER** | Execution failure. Convert to structural expression. |
| "Metaphor encourages compression below floors" (high perceptual cost) | Metaphor's concept encourages small values | **TC** (after 1 builder cycle) | If builder can't express metaphor within guardrails after 1 cycle, metaphor may need modification or replacement. TC should lower perceptual cost. |

### The Missing Protocol

The current /build-page SKILL.md has NO provision for routing fixes to TC. The fix cycle (Step 7) always sends to the same builder. This is correct for 90% of cases (builder execution failures) but incorrect for the ~10% where the derivation itself is flawed.

**BLOCKING RECOMMENDATION:** Add a TC re-invocation clause to /build-page Step 7.4:

> After Cycle 3 ESCALATE, if the persistent failure is metaphor-level (PA-44 structural survival FAIL across all 3 cycles, OR PA-68 metaphor coverage FAIL across all 3 cycles), the orchestrator MAY optionally re-invoke TC with a constrained re-derivation:
> - "The metaphor [X] failed structural survival after 3 cycles. Derive alternative metaphor with Structural Survival >= 2 as hard constraint."
> - This is OPTIONAL and beyond the 3-cycle limit. It counts as an ESCALATION pathway, not a standard fix cycle.

---

## Section 5: Vocabulary Bridge

The complete translation path from TC concept to PA detection:

### TC Concept -> CSS Property -> Visual Effect -> PA Question

| TC Concept | Builder Translates To | Reader Perceives | PA Detects Via |
|-----------|----------------------|-----------------|---------------|
| **Structural metaphor** (e.g., "geological strata") | Zone backgrounds darken progressively; spacing compresses; borders thicken | "This page gets denser/heavier as I scroll" | PA-44 (metaphor from structure alone?), PA-68 (metaphor in all thirds?) |
| **Tension** (e.g., "warmth vs austerity") | Warm cream backgrounds + sharp angular borders = tension in every zone | "Feels editorial but approachable" | PA-20 (personality in 3 words), PA-03 (one designer?) |
| **Multi-axis questioning** (FEEL/UNDERSTAND/DO/BECOME) | Content structure serves reader needs identified per axis | Reading experience matches content purpose | PA-05 (would you ship this?), PA-20 (matches intent?) |
| **Richness = density x restraint x confidence** | Dense mechanisms + deliberate gaps + spatial variety | "Full but not busy, controlled but not rigid" | PA-64 (restraint), PA-65 (composition type), PA-60 (design moments) |
| **Multi-coherence** (3+ channels at boundaries) | bg + font-size + padding + borders shift together | "I feel a zone change but can't name why" | PA-61 (independent rhythms), PA-62 (transition drama), PA-34 (designed transition) |
| **Fractal echo** (pattern at 5 scales) | Same organizing principle at page, section, component levels | "There's a consistency I can feel at every scale" | PA-63 (component echoes page language?) |
| **Per-category mechanism minimums** | At least one mechanism from each of S/H/C/D/N | Visual variety across spatial, hierarchical, component, depth, and navigation dimensions | NO PA QUESTION -- gap |
| **Perceptual risk: DEAD ZONES** | Transitions as state changes not empty space | "No section feels empty or abandoned" | PA-09 (dead space), PA-50-53 (void prevention) |
| **Perceptual risk: OVERLABEL** | Metaphor expressed through CSS not text labels | "I feel the metaphor without being told about it" | PA-44 (labels removed, still sense metaphor?) |
| **Perceptual risk: MONOTONY** | Element variety, size variation, grouped repetition | "No section feels like copy-paste" | PA-41 (repetition > 4x without variation?) |
| **Coherence directions** (DEEPENING/OPENING/FOCUSING/RESOLVING) | Channels shift in agreed semantic direction | "The page has a narrative arc" | PA-35 (scroll engagement arc), PA-17 (visual rhythm) |
| **Zone semantic map** (Orient / Deepen / Synthesize) | Content organized in progressive zones with designed transitions | "This page has a beginning, middle, and end" | PA-13 (clear ending), PA-52 (all thirds have designed moments) |
| **Transition grammar** (SMOOTH/BRIDGE/BREATHING) | Different transition types at different boundaries | "Some breaks are gentle, some are dramatic" | PA-62 (both dramatic and quiet transitions?), PA-40 (spacing shifts justified?) |

### Concepts WITH No PA Detection (Bridge Breaks)

| TC Concept | Why PA Doesn't Detect | Impact |
|-----------|----------------------|--------|
| Per-category mechanism minimums (S:1+ H:1+ C:1+...) | PA measures visual impression, not mechanism taxonomy | MODERATE -- a page missing an entire category (e.g., no Spatial mechanisms) might still LOOK fine but lacks vocabulary breadth. Gate runner SC-08 (component classes) partially compensates. |
| Specific mechanism identity | PA doesn't know mechanism names; detects visual effects | LOW -- correct by design. PA should react to perception, not catalog. |
| Tension source (which axis produced the tension) | PA is process-independent | NONE -- correct by design. |
| Richness formula factors (as separable dimensions) | PA-64 covers restraint; density and confidence are compound | LOW -- restraint has a question; the other two are emergent from multiple answers. |
| Zone semantic roles (Orient/Deepen/Synthesize) | PA sees visual treatment, not semantic intention | LOW -- if zones are visually distinct and content-appropriate, the semantic role is served. |

### Concepts WHERE PA Detects What TC Doesn't Plan

| PA Detects | TC Doesn't Explicitly Plan | Impact |
|-----------|---------------------------|--------|
| PA-01: First thing that bothers you | TC has no "first impression" planning | LOW -- gestalt reactions emerge from good composition; not plannable |
| PA-05c: Proportionate spatial balance | TC plans zones but not overall proportion | MODERATE -- TC should ensure zone sizes are proportionate, not just semantically ordered |
| PA-47: Visual novelty decay in second half | TC plans fractal echo but not novelty pacing | MODERATE -- TC's pacing prediction (Phase 4.2B) addresses this but doesn't plan specific novelty moments |
| PA-48: Comparative quality (first choice among 5?) | TC has no competitive framing | LOW -- this is an absolute quality judgment, not plannable |
| PA-28: How to make this terrible while passing rules | TC plans for success, not adversarial failure modes | LOW -- adversarial resilience is emergent, not planned |

---

## Section 6: Coherence Gaps (Where TC and PA Don't Connect)

These are pipeline BLIND SPOTS -- places where neither TC's planning nor PA's detection covers a quality dimension.

### Gap 1: CONTENT-FORM COUPLING VERIFICATION

**TC plans:** Zone architecture tied to content structure (Phase 0C section identification, Phase 4.1 5-category extraction).

**Builder implements:** CSS values at each zone boundary.

**PA cannot verify:** Whether the CSS values SERVE the content at each point. PA sees "this zone is denser" but cannot judge whether density is APPROPRIATE for what the content says there.

**Impact:** HIGH. The conventions-brief says "identical visual treatment across sections with different content is a design failure." But no PA question specifically asks "does the visual treatment at this scroll position match what the content is about?" PA-20 asks about overall personality match but not per-section content coupling.

**Recommendation:** Add a PA question: "Pick a section in the middle of the page. Does the visual treatment (weight, density, pacing) feel appropriate for what the content is ABOUT at that point, or does it feel like a generic treatment that could apply to any content?" This bridges TC's content-driven composition with PA's perceptual verification.

### Gap 2: MECHANISM CATEGORY BREADTH

**TC mandates:** Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+).

**Gate runner checks:** SC-08 (>= 8 component classes) -- partial proxy.

**PA cannot verify:** Whether all 5 categories are represented. A page with 15 mechanisms all from Hierarchy and Component categories would pass all PA questions if it looks good.

**Impact:** MODERATE. Category breadth ensures vocabulary range. A page missing an entire category (e.g., no Spatial mechanisms -- no rhythm, no density alternation, no grid variation) would feel flat in one dimension but might still pass PA-05 if other dimensions compensate.

**Recommendation:** This is correctly a GATE RUNNER responsibility, not a PA responsibility. Ensure the gate runner's mechanism audit (DG-4 sub-check 3) actually verifies per-category minimums, not just total count.

### Gap 3: METAPHOR QUALITY vs METAPHOR IMPLEMENTATION

**TC evaluates:** Metaphor quality via 6-criterion rubric (Phase 3.5G): interpretive distance, content-shape fit, structural survival, perceptual risk, mechanism diversity, restraint compatibility.

**PA evaluates:** Metaphor as IMPLEMENTED: PA-44 (implicit/explicit), PA-68 (spatial coverage), PA-42 (concept vs comfort).

**Neither evaluates:** Whether a GOOD metaphor was POORLY implemented, vs a POOR metaphor was WELL implemented. A poor metaphor (low interpretive distance, label-dependent) can be well-implemented (consistent, perceptible, distributed) and still fail PA-44. A great metaphor (high distance, structural) can be poorly implemented (inconsistent, imperceptible) and also fail PA-44.

**Impact:** LOW. PA-44's question "could you still sense the metaphor from visual structure alone?" discriminates between structural and announced regardless of metaphor quality. And PA-68's spatial coverage catches abandonment regardless. The distinction matters for fix routing (Section 4) but not for detection.

### Gap 4: BUILDER SELF-VERIFICATION ACCOUNTABILITY

**TC produces:** Conventions brief, transition table, fractal echo table.

**Builder should verify:** Phase D self-checks (cascade value table, 5-question self-check, midpoint observation).

**PA evaluates:** The final output.

**Nobody verifies:** Whether the builder actually consulted the TC brief during building. If the builder ignores the TC brief and builds from generic design intuition, the page might still pass PA but won't embody the content-specific composition TC derived.

**Impact:** MODERATE. The builder's build-log includes a "BRIEF REFLECTION" section documenting how the TC brief influenced decisions. But this is self-reported and unverifiable. The fix cycle's instruction to "re-read your conviction statement" is the closest check.

**Recommendation:** The gate runner could add a behavioral gate: compare the builder's cascade value table against TC's transition table and flag divergences. This is technically feasible (both are structured data) but adds pipeline complexity.

### Gap 5: TEMPORAL PROPERTIES

**TC extracts:** Temporal properties in Phase 4.1B (sequence, simultaneity, progression, oscillation, climax).

**Builder implements:** Via DOM order, spacing, progressive disclosure.

**PA barely detects:** PA-35 (engagement arc) is the only question about temporal experience. No PA question asks "does this page have a climax?" or "does the pacing build and release?"

**Impact:** MODERATE. TC invests significant effort in temporal property extraction but PA has limited ability to verify temporal composition was achieved.

**Recommendation:** PA-35 and PA-47 together provide temporal coverage (engagement arc + novelty decay). Adding more temporal questions risks making PA too prescriptive. Accept this as an inherent limitation of static screenshot-based auditing.

### Gap 6: RESTRAINT VERIFICATION LOOP

**TC mandates:** "At least 3 catalog mechanisms deliberately NOT deployed" (Phase 4.0A anti-scale model).

**Builder documents:** Which mechanisms were rejected and why (in build log).

**PA detects:** PA-64 asks about deliberate plainness.

**Nobody connects:** TC's restraint mandate -> builder's rejection list -> PA's restraint detection. PA-64 asks if plain sections exist but doesn't verify that the plainness corresponds to deliberate mechanism withholding.

**Impact:** LOW. The spirit is captured even if the letter isn't traced. A builder who deliberately withholds mechanisms will produce sections that PA-64 detects as "designed quiet." The pipeline doesn't need to trace the causal chain.

---

## Section 7: BLOCKING Issues

Issues that MUST be fixed for TC and PA to work as a coherent pair in the /build-page pipeline.

### BLOCKING-1: No TC Re-Invocation Path

**Severity:** BLOCKING

**Description:** The /build-page pipeline invokes TC exactly once (Step 2) and routes ALL fixes to the builder (Step 7). There is no mechanism to re-invoke TC when the metaphor itself is the problem. After 3 failed fix cycles, the pipeline ESCALATES to the user. But the user has no TC-level diagnostic -- only PA findings about visual symptoms.

**Fix:** Add to /build-page SKILL.md Step 7.4:

```markdown
If the ESCALATION diagnosis is metaphor-level (PA-44 structural survival FAIL
across all cycles OR PA-68 metaphor coverage FAIL across all cycles), the
orchestrator MAY offer the user a TC re-derivation option:
- Re-invoke TC with constrained prompt: "Metaphor [X] failed structural
  survival. Derive alternative with Structural Survival >= 2, Interpretive
  Distance >= 2."
- The re-derived brief replaces the original _tc-brief.md
- Builder rebuilds from scratch with new brief (does NOT fix -- rebuilds)
```

### BLOCKING-2: PA-44/PA-68 Scoring Doesn't Distinguish Metaphor Quality from Implementation Quality

**Severity:** BLOCKING (for fix routing)

**Description:** When PA-44 returns NO (metaphor not structural) or PA-68 returns NO (metaphor fades in bottom third), the weaver cannot determine whether:
- (A) The metaphor IS structural but the builder implemented it with labels instead of CSS
- (B) The metaphor is inherently label-dependent (low structural survival score)
- (C) The metaphor was implemented structurally in top third but builder ran out of steam

Each requires a different fix. (A) goes to builder. (B) goes to TC. (C) goes to builder with specific instruction to extend to bottom third.

**Fix:** Modify the weaver's analysis protocol to include a root-cause question for PA-44/PA-68 failures:

```markdown
When PA-44 = NO:
  - Check: Does the _tc-brief.md metaphor have explicit CSS direction (bg gradients,
    spacing compression, etc.)?
  - If YES: Implementation failure -> route to builder
  - If NO: Metaphor may lack structural expressibility -> flag for TC review

When PA-68 = NO:
  - Check: Does the _tc-brief.md zone architecture extend to bottom content?
  - If YES: Builder didn't implement full coverage -> route to builder
  - If NO: TC zone architecture is incomplete -> flag for TC review
```

### BLOCKING-3: No Content-Form Coupling PA Question

**Severity:** BLOCKING

**Description:** The conventions-brief states: "Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT. Identical visual treatment across sections with different content is a design failure." But NO PA question evaluates content-form coupling. PA evaluates visual quality in isolation from content meaning.

**Impact:** A page could have beautiful visual variety that is RANDOM with respect to content (dense treatment on overview sections, sparse treatment on technical deep-dives) and pass all PA questions.

**Fix:** Add a new PA question (could be PA-69 or added to Tier 5):

```
PA-NEW: "Pick the section that looks most visually dense (heavy, compressed,
detailed). Then read its content. Does the visual density MATCH what the content
is about -- is this the section with the most technical depth, the most detail,
the most complexity? Or is the density arbitrary?"

Scoring:
- YES: Visual density correlates with content complexity
- NO: Visual density feels arbitrary relative to content
```

Assign to Auditor G (Metaphor+Ideology) since it requires reading content, not just seeing form.

---

## Section 8: Enrichment Recommendations

### For TC Skill (~/.claude/skills/tension-composition/SKILL.md)

**E-TC-1: Add PA-Detectable Deliverables to Phase 5 Output**

TC's Output A (conventions brief) feeds the builder. But PA has no corresponding input. TC should produce a THIRD output that could optionally be given to the weaver (NOT auditors -- they must remain fresh-eyes):

```markdown
Output C: PA Expectation Map (for weaver only, ~10 lines)
- Expected metaphor expression mode: STRUCTURAL / ATMOSPHERIC / LABELED
- Expected zone count: N
- Expected coherence arc: OPENING -> BUILDING -> CLIMAX -> RESOLVING
- Expected restraint: mechanisms #X, #Y deliberately withheld
- Expected content-form coupling: [zone 1 = overview (sparse), zone 2 = technical (dense), ...]
```

The weaver uses this to diagnose PA failures: "PA-44 found metaphor is LABELED. TC expected STRUCTURAL. Root cause: implementation failure (route to builder)."

**E-TC-2: Annotate Mechanisms With PA Detection Paths**

In Phase 4.0 mechanism selection, after each mechanism justification, TC should note which PA question(s) would detect successful implementation:

```
Mechanism #7 (Zone Background Differentiation): Serves geological depth encoding.
  PA detection: PA-32 (weight distribution), PA-50 (content percentage), SC-09 (bg delta >= 15)
```

This creates a TRACEABILITY chain: TC intention -> CSS mechanism -> PA verification.

**E-TC-3: Strengthen Fractal Echo Table with PA-63 Alignment**

TC's fractal echo table (Phase 4.7) specifies 5 scales. PA-63 asks about 2 (page + component). Align TC's table to highlight the 2 scales PA will specifically test:

```
| Scale | Pattern Expression | PA-63 WILL TEST THIS? |
|-------|-------------------|-----------------------|
| Navigation | Header echoes principle | NO (PA-39 assesses header but not fractal echo) |
| Page | Zone backgrounds shift | YES (PA-63 first part: "page's overall design language") |
| Section | Element variety within section | NO (not directly tested) |
| Component | Component DNA echoes page | YES (PA-63 second part: "same component in different section") |
| Character | Per-zone text styling | NO (not directly tested) |
```

### For PA Skill (~/.claude/skills/perceptual-auditing/SKILL.md)

**E-PA-1: Add Content-Form Coupling Question (BLOCKING-3 fix)**

Add PA-69 as described in Section 7 BLOCKING-3. Assign to Auditor G. This bridges the gap between TC's content-driven composition and PA's visual-only assessment.

**E-PA-2: Strengthen PA-63 to Cover 3+ Scales**

Current PA-63 asks about page-level echo and component-level echo. Expand to explicitly ask about section-level:

```
Current: "Does its internal design echo the page's overall design language at
a smaller scale?"

Enhanced: "Does its internal design echo the page's overall design language at
a smaller scale? Then zoom OUT to section level -- pick one viewport-height
screenful. Does that section have internal structure that also echoes the same
language?"
```

This tests 3 scales (page, section, component) instead of 2.

**E-PA-3: Add Weaver Root-Cause Protocol for Metaphor Failures**

When PA-44 or PA-68 fail, the weaver should explicitly diagnose:

```
If PA-44 = NO or PA-68 = NO:
  ROOT CAUSE ANALYSIS:
  1. Is the metaphor expressed through CSS structure? (Check: do zone
     backgrounds shift? do borders encode hierarchy? does spacing compress?)
     - If YES but labels dominate: BUILDER fix (convert labels to CSS)
     - If NO (flat CSS): Check if TC brief specified structural CSS directions
       - If TC brief specified: BUILDER fix (implement the directions)
       - If TC brief didn't specify: TC RE-DERIVATION needed
  2. Does metaphor persist in bottom third?
     - If YES: PA-68 should be re-evaluated (possible auditor error)
     - If NO: Check TC zone architecture scope
       - If TC planned for bottom: BUILDER fix (extend implementation)
       - If TC didn't plan for bottom: TC RE-DERIVATION needed
```

**E-PA-4: Severity Differentiation for Tier 5 Questions**

Currently all 9 Tier 5 questions are binary YES/NO with equal weight. Some are more diagnostic of the TC<->PA relationship than others:

| Question | Weight for TC Feedback |
|---------|----------------------|
| PA-60 (design moments) | LOW -- reflects builder craft more than TC quality |
| PA-61 (multi-voice) | HIGH -- directly tests TC's multi-coherence planning |
| PA-62 (transition variation) | HIGH -- directly tests TC's transition grammar |
| PA-63 (fractal echo) | HIGH -- directly tests TC's fractal echo table |
| PA-64 (restraint) | MEDIUM -- tests TC's anti-scale model restraint factor |
| PA-65 (composition type) | MEDIUM -- overall composition assessment |
| PA-66 (negative space) | MEDIUM -- tests spatial confidence factor |
| PA-67 (novelty) | LOW -- reflects builder creativity more than TC quality |
| PA-68 (metaphor coverage) | HIGH -- directly tests TC's zone architecture scope |

**HIGH-weight failures should be included in fix instructions with TC-brief cross-references.**

### For /build-page SKILL.md

**E-BP-1: Add TC Re-Invocation Path (BLOCKING-1 fix)**

As specified in Section 7.

**E-BP-2: Add TC Brief Comparison to Fix Instructions**

Step 7.1 (fix instruction composition) should include:

```
### TC Brief Cross-Reference
For each PA Tier 5 failure (PA-61, 62, 63, 68):
- Quote the relevant TC brief section
- Note whether the TC brief adequately specified the failing dimension
- Route: BUILDER (if TC specified, builder didn't implement) / TC (if TC didn't specify)
```

**E-BP-3: Add Weaver Access to TC Brief (Read-Only)**

Currently the weaver reads: 9 auditor reports, gate results, lock sheet. The weaver does NOT read the TC brief. For diagnostic purposes (distinguishing metaphor failure from implementation failure), the weaver should also read `_tc-brief.md`.

Add to weaver spawn prompt:
```
Also read: [output-dir]/_tc-brief.md (the TC analyst's structural metaphor
derivation). Use this ONLY to diagnose PA failures -- NOT to bias your quality
judgment. If PA-44 or PA-68 fail, compare TC's expectations against what the
auditors perceive to determine root cause (implementation vs derivation failure).
```

### For Mechanism Catalog (design-system/compositional-core/grammar/mechanism-catalog.md)

**E-MC-1: Add PA Detection Annotations to Each Mechanism**

After each mechanism's "Application Modes" section, add:

```markdown
**PA Detection Path:**
- Primary: PA-XX (what auditors see when this mechanism is deployed)
- Secondary: PA-YY (related perceptual effect)
- Gate: SC-ZZ (programmatic verification)
```

This creates bidirectional traceability: mechanism catalog -> PA questions, AND PA questions -> which mechanisms they detect.

---

## Summary of Findings

### What Works Well (No Changes Needed)

1. **TC -> Builder -> PA is the correct architecture.** TC plans, builder implements, PA verifies independently. The fresh-eyes principle is correct -- PA should NOT know TC's plan.

2. **Metaphor detection is strong.** PA-44, PA-68, and PA-42 form a solid metaphor assessment trio that catches announced vs structural, spatial coverage, and concept vs comfort tradeoffs.

3. **Multi-coherence detection is strong.** PA-61, PA-62, and PA-34 effectively detect whether channels shift coherently at boundaries, without needing to know TC's specific channel plans.

4. **Gate runner bridges the programmatic gap.** Where PA cannot verify specific values (bg delta >= 15 RGB, container 940-960px, stacked gap <= 120px), the gate runner handles it. The two verification systems are complementary.

5. **Transition grammar alignment is good.** TC specifies 3 transition types (SMOOTH/BRIDGE/BREATHING). PA-62 asks whether BOTH dramatic and quiet transitions exist. PA-40 checks if spacing shifts are justified. These detect the presence/absence of TC's transition planning.

### What Needs Fixing (3 BLOCKING, 5 Enrichments)

| ID | Type | Description | Effort |
|----|------|-------------|--------|
| BLOCKING-1 | Pipeline | No TC re-invocation path | Add ~15 lines to /build-page SKILL.md |
| BLOCKING-2 | PA Process | Weaver can't diagnose metaphor vs implementation failure | Add root-cause protocol to weaver prompt (~20 lines) |
| BLOCKING-3 | PA Coverage | No content-form coupling question | Add PA-69 + assign to Auditor G (~10 lines) |
| E-TC-1 | TC Output | Add PA Expectation Map (Output C) for weaver | Add ~15 lines to TC Phase 5 |
| E-PA-2 | PA Coverage | Strengthen PA-63 for 3-scale coverage | Edit 2 sentences in PA-63 |
| E-PA-3 | PA Process | Add weaver root-cause protocol | Add ~25 lines to weaver prompt |
| E-BP-2 | Pipeline | Add TC brief cross-reference to fix instructions | Add ~10 lines to fix template |
| E-BP-3 | Pipeline | Give weaver read-only access to TC brief | Add 3 lines to weaver prompt |

### The Big Picture

TC and PA are designed as STANDALONE skills that happen to sit in the same pipeline. This analysis reveals they interact through the builder as a TRANSLATION layer, with the gate runner providing programmatic verification that bridges both.

The primary coherence gap is **fix routing** -- when PA finds problems, the current pipeline sends ALL fixes to the builder, even when the root cause is in TC's derivation. The BLOCKING-1 fix (TC re-invocation path) and BLOCKING-2 fix (weaver root-cause diagnosis) address this.

The secondary gap is **content-form coupling** -- TC explicitly plans for content-responsive composition, but PA has no question that verifies the CSS serves the CONTENT (not just looks good abstractly). BLOCKING-3 fixes this.

Together, these three fixes transform TC and PA from "two standalone tools in the same pipeline" into "two bookends of a coherent compositional verification system."
