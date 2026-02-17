# Retrospective Lessons Extraction — Middle-Tier Experiment

**Date:** 2026-02-16
**Extractor:** retro-extractor
**Source:** 7 retrospective files (25,000+ lines total)
**Mission:** Extract EVERY lesson, anti-pattern, communication insight, failure mode, and process recommendation for Ceiling execution prompt

---

## EXECUTIVE SUMMARY

**THE SINGLE MOST CRITICAL FINDING:**

The retrospective team CORRECTED a fundamental misunderstanding in the original process framing. The master retrospective v2 (lines 499-508) documents this explicitly:

> **v2 (2026-02-16) — Critical Communication Priority Update**
> - **Moved** 'zero SendMessage' from What Went Right (Section IV) to What Went Wrong (Section V, item #9)
> - **Reframed** Section VI surprise #5 from celebrating zero messaging to noting the speed-vs-quality trade-off
> - **Added** Finding 9: Agent Communication Is Essential For Quality (Section III)

**Translation:** Zero SendMessage = fast execution (35 min) but B+ quality with 3 defects. Previous experiments WITH messaging achieved 39/40 (CD-006), 11/11 criteria (Phase C), 18/19 compliance (Phase D Variant B). The missing footer is the smoking gun — builder couldn't ask planner "what does Footer Mirror look like?"

**The flat topology (team-lead → agents directly, zero captains) is VALIDATED and should be preserved. The communication PROTOCOL (file-only, zero messaging) must change.**

---

## 1. COMMUNICATION PROTOCOL LESSONS

### 1.1 The Zero-SendMessage Trade-off

**What happened:**
- Middle-tier: ZERO SendMessage calls, file-bus only
- Execution time: ~35 minutes (8-11x faster than predicted)
- Quality outcome: B+ with 3 defects (missing footer WOULD-NOT-SHIP, CPL +2, token compliance 66.5%)
- Perceptual verdict: "Specifications applied correctly, not composition felt through" (Master Retro, PA-03)

**Evidence from previous experiments WITH messaging:**
- CD-006: 39/40 score WITH agent messaging
- Phase C: ALL 11 criteria met WITH hierarchical messaging
- Phase D Variant B: 18/19 compliance WITH messaging
- Pattern: Messaging correlates with higher quality

**Root cause analysis (Master Retro, Finding 9, lines 164-174):**
> "The missing footer is the smoking gun. The builder had a plan specifying '#14 Footer Mirror' with full CSS details. But in file-bus isolation, the builder worked alone with no ability to: (a) ask the planner what Footer Mirror should look like, (b) verify completeness against the plan with any teammate, (c) flag uncertainty and get clarification. In a messaging-enabled team, ANY agent could have caught this gap during execution."

**Quality comparison:**
- CD-006 (WITH messaging): "compositionally confident" feeling
- Middle (WITHOUT messaging): "professionally stiff" feeling

**The corrected framing (Master Retro v2, Section V item #9, lines 231-233):**
> "The flat TOPOLOGY (team-lead → agents directly) is validated and should be kept. The COMMUNICATION PROTOCOL (file-only, zero messaging) must change: agents need the ability to ask clarifying questions, flag issues mid-process, and request iteration."

### 1.2 What Communication Should Enable

**Required capabilities (Master Retro, Finding 9, lines 170-172):**

1. **Builder → Planner:** Ask clarifying questions about plan specifications
   - Example: "Plan Section 2 specifies Footer Mirror but Builder Blocks don't include CSS. Should I implement from Section 2 description?"
   - Use case: Resolving ambiguities before implementation bugs emerge

2. **Auditor → Team-Lead:** Flag issues mid-process before proceeding
   - Example: "I see missing footer — should I continue evaluation or wait for fix?"
   - Use case: Catching severity-1 defects before verdict phase

3. **Team-Lead → Builder:** Request targeted fixes before declaring phase complete
   - Example: "Footer is missing from HTML — add it before we proceed to evaluation"
   - Use case: Iteration on implementation gaps

**What NOT to enable:**
- Status updates ("I'm working on Section 3 now") — file existence is the status signal
- Broadcast messages (expensive, create context accumulation)
- Message accumulation (keep messages targeted, not conversational)

**Expected overhead:**
- Middle-tier WITHOUT messaging: 35 min, zero message tokens
- Ceiling WITH messaging: estimate +10-20 min, 5-10 messages total (~2-4K tokens)
- Quality benefit: Prevents WOULD-NOT-SHIP defects, enables collaborative refinement

### 1.3 Topology vs Communication Protocol (CRITICAL DISTINCTION)

**What to preserve (flat topology):**
- Team-lead launches agents directly (no intermediate captains)
- Per-file ownership (1 agent = 1 output file)
- File existence as completion signal
- Sequential dependencies (Agent N reads Agents 1..N-1 outputs)

**What to change (communication protocol):**
- From: File-only communication, zero SendMessage
- To: File + messaging for clarification/iteration/quality checks

**Evidence (Master Retro, Section III Finding 9, lines 164-174):**
> "The flat topology (team-lead → agents directly, no intermediate captains) should be preserved — it's validated for speed and simplicity. But the communication protocol must change from file-only to file + messaging."

**Ceiling implementation:**
- Preserve flat structure: 10-12 agents, team-lead → workers directly
- Add SendMessage capability with discipline: ONLY clarification/issues/iteration
- Message discipline documented in master execution prompt

---

## 2. BINARY vs JUDGMENT RULES

### 2.1 The 7/7 vs 0/3 Split (THE Most Important Architectural Principle)

**The finding (Master Retro, Section III Finding 7, Unified Action Plan CF-1):**

**Binary rules: 7/7 PASS (100% compliance)**
1. Container width 940-960px: 960px exact ✓
2. border-radius: 0 ✓
3. box-shadow: none ✓
4. No pure black/white ✓
5. Typography trinity ✓
6. All h3 italic ✓
7. No gradients ✓

**Judgment rules: 0/3 PASS (0% compliance)**
1. Token compliance "should be >= 80%": 66.5% ✗
2. CPL "should be 45-80": 82 chars ✗
3. Heading spacing "should be 1.5:1": equal spacing ✗

**Confidence level:** VERY HIGH (5 independent sources confirmed this pattern)

**The architectural principle (Process Metacognition, Meta-Lesson 5.1, lines 733-750):**
> "Agent systems are LITERAL. 'MUST be 960px' achieves 100% compliance. 'Should be 80%' achieves 0%. There is NO middle ground. If a constraint matters, make it binary. Convert ALL critical constraints from judgment to binary. Provide FORMULAS for verification. No 'prefer', 'consider', 'balance' language in agent prompts. This is architectural bedrock."

### 2.2 How to Convert Judgment Rules to Binary

**Token compliance example (Middle: 66.5%, target: 80%):**

**WRONG (judgment):**
```
Token compliance should be >= 80%.
```

**RIGHT (binary with self-check):**
```
BEFORE writing HTML file:
1. Scan CSS for raw hex values: /#[0-9A-Fa-f]{3,6}/
2. Scan for raw px values outside approved contexts (border-width 1/3/4px OK)
3. Calculate: var() / (var() + raw) >= 80%
4. If FAIL: replace raw values with tokens from tokens.css
5. Cannot proceed to file write until ratio >= 80%
```

**CPL example (Middle: 82 chars, target: 45-80):**

**WRONG (judgment):**
```
CPL should be 45-80 at 1440px viewport.
```

**RIGHT (binary with formula):**
```
BEFORE writing HTML file:
1. CPL verification formula: (container-content-width) / (font-size-px) / 0.6 = CPL
2. Example: (960px - 64px) / 16px / 0.6 = 93 CPL (FAIL if > 80)
3. Adjust font-size or padding to achieve 45-80 CPL target
4. Cannot proceed to file write until CPL verified
```

**Heading spacing ratio example (Middle: violated, target: 1.5:1):**

**WRONG (judgment):**
```
Space above headings should be 1.5x space below.
```

**RIGHT (binary with programmatic check):**
```
PROGRAMMATIC CHECK (Phase 3 audit):
For each h2/h3:
- Measure computed margin-top
- Measure computed margin-bottom
- Ratio = margin-top / margin-bottom
- PASS: >= 1.5:1 for ALL headings
- FAIL: < 1.5:1 for ANY heading
```

### 2.3 All Judgment Rules for Ceiling Must Become Binary

**From Unified Action Plan (Section 3, items M-04, S-02, M-08):**

1. **Token compliance:** Builder self-check with var() scan (MUST DO)
2. **CPL verification:** Builder self-check with formula (MUST DO)
3. **Heading spacing:** Programmatic audit check (SHOULD DO)
4. **Rhythm variation:** >= 3 transition types (SHOULD DO)
5. **Weight distribution:** >= 2 focal points in bottom 50% (SHOULD DO)
6. **Landmark completeness:** Header/footer/sections exist (MUST DO)

**Implementation priority:** MUST DO items before Ceiling, SHOULD DO items during Ceiling planning.

---

## 3. ANTI-PATTERNS (What Went Wrong)

### 3.1 Missing Footer (CRITICAL — WOULD-NOT-SHIP)

**What happened:**
- Build plan Section 2: "Section F: Dark Footer (Mirror)" with full CSS specification
- Implementation: No footer visible in perceptual audit
- Perceptual audit (PA-13): "No visual ending — content stops and you scroll through screens of emptiness. It feels unfinished."
- Severity: WOULD-NOT-SHIP

**Root causes identified:**

**Theory A: Prompt slicing blind spot (Methodology, Failure Modes #1)**
- Builder saw 40% of master prompt
- Excluded 60% contained footer importance, anti-patterns, reference examples
- Builder treated footer as lower priority than body sections

**Theory B: Zero communication protocol (Master Retro, Finding 9)**
- Builder couldn't ask planner: "Footer specified in Section 2 but no CSS in Builder Blocks — should I implement from description?"
- No clarification mechanism = implementation gap

**Theory C: No landmark completeness gate (Failure Modes, Unified Action Plan M-03)**
- Phase 2→3 boundary had NO structural verification
- Footer absence detected by perceptual audit (Phase 4b), not by gate (Phase 2.5)

**The smoking gun (Master Retro, Section V item #9, lines 231-233):**
> "The missing footer = smoking gun (builder couldn't ask planner). Compare with previous experiments that used agent messaging: CD-006 scored 39/40 WITH agent communication and iteration; Phase C met ALL 11 criteria WITH hierarchical messaging; Phase D Variant B achieved 18/19 WITH messaging. The Middle-tier WITHOUT messaging: B+ quality, 3 defects, 'professionally stiff.'"

**Fixes for Ceiling:**

1. **Landmark completeness gate (MANDATORY):**
```
PHASE 2→3 GATE:
BEFORE launching auditors:
- Verify <header> exists (if plan specified Section A)
- Verify <footer> exists (if plan specified Section F)
- Verify section count matches plan's content sections
Method: Playwright query document.querySelectorAll('header, footer, section')
If ANY landmark missing: block audit, return to builder with targeted fix request
```

2. **Builder clarification protocol (NEW):**
```
PHASE 2 — Builder Clarification Protocol:
If plan specification is ambiguous or incomplete:
- Builder MAY SendMessage to planner with specific question
- Planner responds with clarification (max 200 words)
- Builder implements with understanding
Example: "Footer specified but no CSS in Builder Blocks — should I implement from Section 2 description?"
```

3. **Footer CSS in Builder Blocks (STRUCTURAL):**
```
BUILDER BLOCKS — Appendix B:
Block 7: Footer Implementation
[Include copy-paste ready CSS for footer structure]
```

### 3.2 Token Compliance at 66.5% (TARGET: 80%)

**What happened:**
- 73 raw hex/px values not replaced with CSS custom properties
- Programmatic audit measured 145 var() references, 218 total values = 66.5%
- Deviation: -13.5 percentage points below threshold

**Root cause (Failure Modes #2):**
- Builder used raw values (`#E83025`, `24px`) instead of tokens (`var(--color-primary)`, `var(--space-6)`)
- No self-check before file write
- Builder chose convenience (easier to type raw value) or necessity (exact token didn't exist)

**Why this is MAJOR:**
- Systemic violation (73 instances, not one-off)
- 13.5 points below threshold (substantial gap)
- Violates design system coherence promise
- Zero self-verification by builder

**Fix for Ceiling (MANDATORY):**

```
BUILDER SELF-CHECK (Phase 2b, BEFORE file write):

TOKEN COMPLIANCE:
1. Scan CSS for raw hex values: /#[0-9A-Fa-f]{3,6}/
2. Scan for raw px values outside approved contexts:
   - Approved: border-width: 1px | 3px | 4px
   - Approved: box-shadow: none (no px values needed)
   - NOT approved: padding, margin, font-size, width, height with raw px
3. Calculate: var_count / (var_count + raw_count) >= 80%
4. If < 80%: replace raw values with tokens, recalculate
5. Cannot write file until >= 80%

TOKEN GAP LOG (if needed):
If builder needs value not in tokens.css, log it:
"Token gap: needed 18px paragraph font, tokens have 16px. Used raw 18px."
This informs token expansion for next iteration.
```

**Contributing factor: Token system gaps (Unified Action Plan, Section 4 conflicts):**
- 65 tokens exist but builders need ~90 values
- Missing: 14px, 18px, 22px typography tokens
- Missing: 6px, 12px, 20px spacing tokens
- Missing: success-subtle, warning-background semantic color tokens

**Long-term fix:** Expand tokens.css based on Middle-tier raw value audit.

### 3.3 CPL at 82 chars (TARGET: 45-80)

**What happened:**
- Paragraph font-size: 18px instead of expected 16px
- Result: (960px - 64px) / 18px / 0.6 = 88.9 CPL (estimated ~82 visible)
- Deviation: +2 chars over spec

**Root cause (Failure Modes #3):**
- Builder lacked verification formula
- No self-check before file write
- Font-size discrepancy: plan specified `var(--type-body)` (1rem = 16px), builder may have overridden

**Why this is MINOR (not MAJOR):**
- +2 chars doesn't break readability
- Marginal violation (still within acceptable range for documentation)
- But: builder had no formula to verify, so violation was invisible

**Fix for Ceiling (MANDATORY):**

```
BUILDER SELF-CHECK (Phase 2b, BEFORE file write):

CPL VERIFICATION:
1. Formula: (container-content-width) / (font-size-px) / 0.6 ≈ CPL
2. For 960px container with 32px padding each side:
   - Content width: 960 - 64 = 896px
   - Font-size: 16px (body text)
   - CPL: 896 / 16 / 0.6 = 93.3 CPL (TOO HIGH)
   - Adjust: increase padding or decrease font-size
3. Target: 45-80 CPL at 1440px viewport
4. Cannot write file until CPL verified in range
```

**Note:** CPL is a guardrail (B9.2), not a soul constraint. Move to separate "Guardrails" checklist.

### 3.4 Metronomic Rhythm (MODERATE Quality Gap)

**What happened:**
- Section gaps uniform: all ~48-64px
- Perceptual audit (PA-17): "Rhythm is metronomic rather than musical. Section spacing is consistent, but there's no syncopation or variation to create interest."
- PA-41: "The section spacing pattern repeats throughout without variation. After 4-5 repetitions it becomes predictable rather than rhythmic."

**Root cause (Failure Modes #5):**
- Planner specified section PADDING but not section GAPS
- Builder used default gap (likely 48-64px uniformly)
- Skill has no rhythm variation requirement

**Why this matters:**
- Perceptual impact: page feels mechanical
- Doesn't break usability but degrades quality
- Pervasive (affects entire scroll experience)

**Fix for Ceiling (SHOULD DO):**

```
RHYTHM VARIATION REQUIREMENT (Phase 4.2B):

Page MUST include >= 3 DIFFERENT transition types:
- SMOOTH (40-48px gap): Same-axis continuation
- BREATHING (56-64px gap): Maintain proximity between related sections
- BRIDGE (72-96px gap): Major density shifts or topic changes

TRANSITION TABLE (in build plan):
| Transition | Type | Gap Size | Rationale |
|------------|------|----------|-----------|
| Overview → Architecture | BRIDGE | 80px | Shift from sparse to dense |
| Architecture → Installation | BREATHING | 48px | Both technical, maintain flow |
| Installation → Security | SMOOTH | 40px | Procedural continuity |

Minimum: >= 3 distinct gap sizes across all transitions.
NOT ALLOWED: All gaps identical (creates metronomic rhythm).
```

### 3.5 Top-Heavy Weight Distribution (MODERATE Quality Gap)

**What happened:**
- Visual weight concentrates in top third: dark header + black diagram
- Nothing anchoring bottom half
- Perceptual audit (PA-10): "Top-heavy. The dark header creates strong cap, then middle dissolves into uniform cream. No anchoring elements in bottom half."
- PA-32: "Weight concentrates at top, appears briefly with diagram, then disappears. Bottom two-thirds feel weightless."

**Root cause (Failure Modes #6):**
- No visual balance requirement in planning
- Focal points placed accidentally, not intentionally
- Architecture diagram = ONLY solid-offset element (creates concentration)

**Fix for Ceiling (SHOULD DO):**

```
WEIGHT DISTRIBUTION REQUIREMENT (Phase 1 planning):

Distribute focal points across scroll:
- TOP third (0-33%): >= 1 focal point (header counts)
- MIDDLE third (34-66%): >= 1 focal point
- BOTTOM third (67-100%): >= 1 focal point (footer counts)

Focal point = high-weight element:
- Dark backgrounds (> 30% darker than page background)
- Large images/diagrams
- Solid offset elements
- Typography emphasis (large headings)

PA CHECK (Phase 4b):
"Identify all high-weight elements. Map their scroll positions (top/middle/bottom thirds).
Require: >= 1 focal point in bottom 50% of page."
```

### 3.6 "Specifications Applied Not Felt Through" (MAJOR Skill Gap)

**What happened:**
- Page passed PA-05 (4/4 DESIGNED)
- But perceptual audit (PA-03): "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark — it reads like 'I applied the specifications correctly.'"
- PA-SEM-03: "Pattern fits content at macro level but not at micro level (specific measurements feel arbitrary)."

**Root cause (Failure Modes #14):**
- Rule-following WITHOUT compositional confidence
- Vocabulary applied correctly BUT mechanically
- Lookup mode (content → mechanism) produces correct-but-uniform output

**The meta-failure (Failure Modes, lines 297-328):**
- Builder CAN execute rules
- Builder CANNOT compose confidently
- Rules create COMPLIANCE (did you do X?)
- Metaphor enables COMPOSITION (does X feel right here?)

**Why this is MAJOR:**
- Fundamental gap between "designed" and "great"
- Affects EVERY mechanism (all applied correctly but mechanically)
- Skill-level failure (rules don't fix this)

**The distinction (Ceiling Projection, Section 5, Master Retro Finding 4):**

| Dimension | Middle (Vocabulary Fluency) | Ceiling (Compositional Fluency) |
|-----------|---------------------------|--------------------------------|
| Mechanism selection | Content-driven lookup | Metaphor-driven derivation |
| Deployment strategy | Uniform application | Varied expression |
| Coherence source | Specification compliance | Metaphor provides lens |
| Result feels like | "Following rules correctly" | "Feeling the page" |

**Possible fixes for Ceiling:**

**Option A: Use Opus builder (not just planner)**
- Middle: Opus planner, Sonnet builder
- Ceiling: Test Opus planner AND Opus builder
- Hypothesis: Model capability affects "feeling through"

**Option B: Provide metaphor to builder**
- Currently: Builder sees mechanism names from plan, not metaphor derivation
- Change: Builder sees metaphor document (01-metaphor-derivation.md)
- Hypothesis: Metaphor context enables compositional micro-decisions

**Option C: Add agent messaging**
- Currently: Builder works in isolation
- Change: Builder can ask planner about compositional intent
- Hypothesis: Collaboration enables "feeling through"

**Prediction (Failure Modes, lines 325-328):**
> "If Ceiling ALSO feels 'specifications applied not felt through,' it means metaphor derivation creates DERIVATIVE copying (worse than Middle's mechanical correctness). If Ceiling feels MORE confident, it validates that metaphor enables composition. This is THE experiment."

---

## 4. CEILING PREDICTIONS (What the Retro Forecasts)

### 4.1 New Risks Ceiling Introduces

**Risk 1: Metaphor Derivation Cannot Be Binary-Ruled (Ceiling Projection, Risk 1.1)**

**The challenge:**
- Middle specifications were binary checkable (container 960px? YES/NO)
- Ceiling metaphor quality is JUDGMENT ("Does this metaphor authentically arise from content tension?")
- The planner can produce metaphor that passes syntactic checks while being conceptually forced or cliché

**Concrete failure mode:**
- Content: Network protocols documentation
- Obvious metaphor: "Layered architecture" (network layers → geological strata)
- Problem: This is DERIVATIVE (first-order mapping, same domain)
- CD-006 "pilot documentation as flight preparation" was novel (crossed domains: aviation → technical writing)

**Mitigation:**
```
METAPHOR RESONANCE GATE (Phase 1→2):

Team-lead checks:
1. AUTHENTICITY: Does metaphor arise FROM content or imposed ON content?
   - PASS: "Fortified architecture" for security docs (aligns with safety concern)
   - FAIL: "Jazz improvisation" for security docs (no connection)

2. CROSS-DOMAIN: Does metaphor come from OUTSIDE content domain?
   - PASS: "Geological strata" for network protocols (geology ≠ networking)
   - FAIL: "Layered architecture" for network protocols (both about layers)

3. MULTI-DIMENSIONAL: Can metaphor encode 3+ CSS properties?
   - PASS: "Fortified architecture" → depth (border-weight), material (backgrounds), access (spacing)
   - FAIL: "Fast vs slow" → only tempo (hard to express in multiple channels)

If ALL THREE pass → proceed. If ANY fail → request metaphor revision or abort.
```

**Risk 2: More Mechanisms = More Interaction Complexity (Ceiling Projection, Risk 1.2)**

**The challenge:**
- Middle: 12 mechanisms deployed INDEPENDENTLY (border-weight for hierarchy, backgrounds for section breaks)
- Ceiling: 12-15 mechanisms must REINFORCE each other (multi-channel encoding of shared dimension)
- How to CHECK for interaction? Programmatic audit can verify mechanisms deployed but not whether they interact.

**Concrete failure mode:**
- Planner specifies 14 mechanisms with perfect per-category coverage
- Builder implements all 14 correctly
- But mechanisms don't INTERACT — each solves different problem independently
- Result: Vocabulary breadth WITHOUT compositional coherence

**Mitigation:**
```
MECHANISM INTERACTION REQUIREMENT (Phase 2 planning):

For at least 3 mechanism pairs, document how they REINFORCE each other:

Example interaction table:
| Mechanism Pair | Shared Dimension | How They Reinforce |
|---------------|------------------|-------------------|
| Border-weight + Zone backgrounds | Security layer depth | Borders get heavier (1px→4px) AND backgrounds get darker (light→dark) as you scroll to more critical sections |
| Spacing compression + Typography scale | Information density | Gaps get tighter (64px→32px) AND headings get smaller (2.5rem→1.5rem) in dense sections |

Minimum: 3 pairs documented with explicit reinforcement explanation.
```

**Risk 3: Four Scales = 6 Consistency Pairs (Ceiling Projection, Risk 1.4)**

**The challenge:**
- Middle: 2 scales (Page + Component) = 1 consistency pair to check
- Ceiling: 4 scales (Navigation + Page + Section + Component) = 6 consistency pairs
- Combinatorial explosion: Navigation ↔ Page, Navigation ↔ Section, Navigation ↔ Component, Page ↔ Section, Page ↔ Component, Section ↔ Component

**Concrete failure mode:**
- Navigation feels "narrow, dense, layered" (geological compression)
- Page feels "wide, sparse, open" (breathing space)
- These are OPPOSITE directions → fractal coherence broken

**Mitigation:**
```
HIERARCHICAL COHERENCE CHECK (Phase 2→3 gate):

Instead of checking 6 pairs independently, check CHAIN:
Navigation → Page → Section → Component must be consistent sequence.

Method:
1. Extract pattern from Navigation level (e.g., "sparse to dense progression")
2. Check Page implements same pattern at larger scale
3. Check Section implements same pattern within sections
4. Check Component implements same pattern within callouts

If chain breaks at ANY level, coherence fails.
```

### 4.2 Opportunities Ceiling Has

**Opportunity 1: Agent Messaging Enables Collaborative Refinement (Ceiling Projection, Opp 2.1)**

**The capability:**
- Builder → Planner messaging for clarification
- Example: "Plan says 'sparse breathing with geological compression' — sparse within sections (64px padding) or sparse between sections (64px gap)?"
- Planner responds: "Sparse within, compression BETWEEN. They're different scales."

**Evidence:**
- CD-006: 39/40 WITH messaging
- Phase C: 11/11 WITH messaging
- Middle: B+ WITHOUT messaging

**Expected value:** Prevents ambiguity gaps like missing footer, enables "felt through" quality.

**Opportunity 2: Metaphor Provides Compositional PURPOSE (Ceiling Projection, Opp 2.2)**

**The hypothesis:**
- Middle: "This content has code blocks → use mechanism #17" (lookup)
- Ceiling: "Metaphor is 'geological core sampling' → code blocks are rock samples → use monospace with dark backgrounds like core specimens → mechanism #17 with metaphor-specific styling" (derivation with purpose)

**Prediction:**
- If metaphor gives EVERY MECHANISM a reason connecting to same conceptual spine, page should feel "decisions made for THIS content's meaning" not "specs applied correctly"

**Test after Ceiling:**
- Does PA-03 say "feeling the page" or "following rules"?
- Does PA-17 identify "musical rhythm" or "metronomic pattern"?

**Opportunity 3: All Middle Defects Have Known Fixes (Ceiling Projection, Opp 2.4)**

1. Missing footer → Landmark gate + builder→planner messaging
2. Token compliance → Builder self-check
3. CPL violation → CPL formula in builder prompt
4. Heading spacing → Programmatic check
5. Metronomic rhythm → 3-transition minimum

**Value:** Ceiling starts with cleaner methodology, tests PURE tier difference without known bugs.

---

## 5. FAILURE MODES (Categorized with Mitigations)

### 5.1 PROCESS Failures (8 of 14 failures)

**Pattern:** How we orchestrated the build, not what we asked for.

**Failure #1: Missing footer (CRITICAL)**
- Mitigation: Landmark completeness gate + builder→planner messaging

**Failure #2: Token compliance 66.5% (MAJOR)**
- Mitigation: Builder self-check with var() scan BEFORE file write

**Failure #3: CPL +2 chars (MINOR)**
- Mitigation: CPL formula in builder prompt

**Failure #8: Single-evaluator novelty assessment (MODERATE)**
- Mitigation: Blind evaluation protocol + dual evaluators

**Failure #9: Heading spacing ratio violated (MODERATE)**
- Mitigation: Programmatic audit measures computed margins

**Zero self-verification pattern:** Builder completed without checking its own output against spec. ALL process failures stem from this.

### 5.2 DESIGN Failures (4 of 14 failures)

**Pattern:** What we asked for was incomplete or under-specified.

**Failure #5: Metronomic rhythm (MODERATE)**
- Mitigation: Require >= 3 transition types (SMOOTH/BREATHING/BRIDGE)

**Failure #6: Top-heavy weight distribution (MODERATE)**
- Mitigation: Require >= 2 focal points in bottom 50% of page

**Failure #7: PA-05b at exactly 2.0x threshold (MINOR)**
- Mitigation: Set internal target above threshold (2.2x internal to pass 2.0x external)

**Failure #10: Limited visual drama (MODERATE)**
- Mitigation: Require >= 3 visual moments distributed across scroll (top/middle/bottom)

### 5.3 SKILL Failures (2 of 14 failures)

**Pattern:** Builder can execute rules but not compose confidently.

**Failure #4: "Professionally stiff" quality (MAJOR)**
- Root: Vocabulary applied without composition
- Possible fixes: Opus builder, metaphor context to builder, agent messaging

**Failure #14: "Specifications applied not felt through" (MAJOR)**
- Root: Rule-following without compositional confidence
- Hypothesis: Metaphor enables composition (Ceiling test)

---

## 6. PROCESS RECOMMENDATIONS (What to Do Differently)

### 6.1 MUST DO BEFORE CEILING (Blocking Items)

**1. Enable inter-agent communication protocol (HIGHEST PRIORITY)**

**What:** Agents MUST use SendMessage for clarifying questions, issue flagging, and iteration requests.

**Why:** Missing footer directly traceable to file-only isolation. CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT messaging).

**How:**
```
COMMUNICATION PROTOCOL (all agents):

ALLOWED SendMessage use cases:
1. Builder → Planner: "Plan specification X is ambiguous — clarify?"
2. Auditor → Team-Lead: "Severity-1 defect found — continue or wait for fix?"
3. Team-Lead → Builder: "Footer missing — add before proceeding"

NOT ALLOWED:
- Status updates ("working on Section 3")
- Broadcast messages (expensive)
- Conversational accumulation

Expected: 5-10 messages total, +10-20 min overhead
```

**2. Add landmark completeness gate (Phase 2→3)**

**What:** Binary check: header exists, footer exists, all named sections from plan exist in HTML.

**Why:** Prevents WOULD-NOT-SHIP footer-class defects. Costs 2 minutes, catches severity-1 issues.

**How:**
```
LANDMARK COMPLETENESS GATE:

INPUT: Build plan Section 2 (SECTION MAP)
EXTRACT: All section identifiers (A, B, C, D, E, F)

For EACH section:
- If labeled "header" → verify <header> exists
- If labeled "footer" → verify <footer> exists
- If labeled content → verify <section> exists

METHOD: Playwright query document.querySelectorAll('header, footer, section')
Count matches expected landmarks

PASS: All landmarks exist
FAIL: Missing header/footer/section → block audit, send fix request to builder
```

**3. Add builder self-check for CPL and token compliance**

**What:** Builder verifies CPL (45-80) using formula and token compliance (>=80%) using var() scan BEFORE writing file.

**Why:** 0/3 judgment rules met because builder had no verification method. Converting to binary self-check achieves 100% compliance.

**How:**
```
BUILDER SELF-CHECK (Phase 2b, BEFORE file write):

1. CPL VERIFICATION:
   Formula: (container-content-width) / (font-size-px) / 0.6 = CPL
   Example: (960 - 64) / 16 / 0.6 = 93.3 CPL
   Target: 45-80 CPL at 1440px
   Adjust font-size or padding if outside range

2. TOKEN COMPLIANCE:
   Scan CSS for raw hex: /#[0-9A-Fa-f]{3,6}/
   Scan for raw px outside approved contexts (border-width 1/3/4px OK)
   Calculate: var() / (var() + raw) >= 80%
   If FAIL: replace raw with tokens

3. LANDMARK COMPLETENESS:
   Verify header exists, footer exists, all sections exist
   Cross-check plan Section 2 vs HTML structure

Cannot write file until ALL checks PASS.
```

**4. Establish Ceiling-specific per-category minimums**

**What:** Define higher thresholds: S:2+, H:2+, C:3+, D:2+, N:2+. Expected natural landing: 11-15 mechanisms.

**Why:** Middle deployed 12 with 1+ per category. Ceiling needs richer vocabulary.

**5. Add mechanism interaction requirement**

**What:** For Ceiling, require at least 3 mechanism pairs that REINFORCE each other (multi-channel encoding of same dimension).

**Why:** Closes gap between "applied correctly" and "felt through." Middle had mechanisms coexisting independently.

**How:**
```
MECHANISM INTERACTION TABLE (in build plan):

Document 3+ mechanism pairs with shared dimension:
| Mechanism Pair | Shared Dimension | Reinforcement |
|---------------|------------------|---------------|
| Border-weight + Zone backgrounds | Depth | Both encode "going deeper" as you scroll |

Example: Border gets heavier (1px→4px) AND background gets darker (light→dark) simultaneously.
```

### 6.2 SHOULD DO BEFORE CEILING (High Value)

**6. Add rhythm variation requirement (3-transition minimum)**

**Why:** THE highest-leverage perceptual improvement. Without it, 14-15 mechanisms still feel metronomic.

**7. Make heading spacing ratio a binary rule (1.5:1)**

**Why:** Binary rules achieve 100% compliance; this judgment rule achieved 0%.

**8. Design blind novelty evaluation protocol**

**Why:** Middle novelty (3/3) assessed by evaluator who KNEW the hypothesis. External validity weak.

**How:**
```
BLIND NOVELTY PROTOCOL:

1. Evaluator receives 3 unlabeled pages (Middle, Ceiling, reference) in random order
2. Evaluator has zero context on experiment goals
3. Evaluator ranks structural similarity, identifies novel mechanisms
4. Only AFTER blind ranking are labels revealed

Result: Eliminates confirmation bias.
```

**9. Add dual perceptual auditor protocol**

**Why:** Addresses single-evaluator bias. Dual evaluation with reconciliation improves rigor at marginal cost (+5-7 min).

**How:**
```
DUAL PA PROTOCOL:

1. PA-1 and PA-2 BOTH receive identical screenshots (1440px + 768px)
2. BOTH answer PA-01 through PA-48 independently
3. Team-lead compares:
   - Agreement = high confidence
   - Disagreement = pessimistic rule (NO wins)

Cost: +5-7 min per auditor (parallel execution)
Benefit: Inter-rater reliability, stronger external validity
```

**10. Re-estimate Ceiling timing using parallel agent model**

**Why:** Middle's 8-11x discrepancy reveals planning model uses wrong frame (sequential human vs parallel agent).

**Update:**
- From: Ceiling 150-220 min (sequential human estimate)
- To: Ceiling 60-100 min (parallel agent estimate)
- Factor: 4-5 min/agent x 10-12 agents x 3-4 waves
- Include metaphor derivation overhead (+20-30 min) and messaging overhead (+10-20 min)

---

## 7. CONTEXT MANAGEMENT (Avoiding Compaction)

### 7.1 Thin Team-Lead Pattern (Verified)

**What worked:**
- Team-lead verifies file existence and structure markers
- Does NOT read full intermediate outputs
- Context stayed under 25K tokens (vs 70K if reading all outputs)
- 94% token savings

**Trade-off:**
- Speed/simplicity vs quality
- Missing footer likely preventable if team-lead had read build plan fully and cross-checked against HTML

**For Ceiling:**
- Keep thin team-lead for context management
- Add explicit STRUCTURAL COMPLETENESS gate to catch missing landmarks
- Team-lead reads ONLY: gate verification results, audit summaries, verdict documents

### 7.2 Prompt Slicing Strategy

**What worked:**
- 8.8:1 compression for content-selector (1,760 → 200 lines)
- 4.4:1 compression for builder (1,760 → 400 lines)
- Zero context leakage, fresh-eyes auditor found issues
- No context compaction events

**What failed:**
- Missing footer (builder lacked context about footer importance)
- Excluded 60% of master prompt may have contained critical dependencies
- Information loss: 50:1 compression ratio from research to execution

**The adversarial challenge:**
> "If slicing introduces bugs because critical context dependencies exist between slices, the information-saving benefit may not be worth the quality cost. The footer bug is a SMOKING GUN."

**For Ceiling:**
Consider running TWO variants in parallel:
- Ceiling-A: Prompt slicing (same as Middle)
- Ceiling-B: Full master prompt to builder

Compare: defect rates, token usage, output quality, build time.

If Ceiling-B has fewer defects without significant token bloat, abandon slicing for Ceiling-tier.

### 7.3 Information Isolation Firewalls

**What worked:**
- Content-selector never saw mechanism catalog → no reverse-fitting
- Builder never saw master prompt → literal plan implementation
- Perceptual auditor never saw mechanism counts → genuine first-impression reactions
- Prevented 4/4 intended contamination risks

**What's untested:**
- Would contaminated agents do better or worse?
- Test D (contaminated content-selector): Run selector WITH mechanism access, compare outputs
- If outputs 80%+ identical, firewall is unnecessary overhead

**For Ceiling:**
- Maintain isolation for content-selector and perceptual auditor
- Add CLARIFICATION PROTOCOL: If builder sees ambiguity, flag for clarification (don't silently skip)

---

## 8. META-TO-OUTPUT RATIO (2.6:1)

**The finding (Process Metacognition, Meta-Lesson 5.8):**
- Infrastructure: 47,944 lines
- Product: 18,428 lines
- Ratio: 2.6:1 (for every 1 line of product, 2.6 lines of infrastructure)

**What this means:**
- Massive upfront investment in process design
- Only 2.5% of planning content (430/17,084 lines) is on critical execution path
- 99.8% of planning is supporting context, not direct instructions

**The complexity ratchet:**
- Rules only accumulate, never retire
- Need sunset protocol for outdated constraints

**For Ceiling:**
- Don't ADD to master prompt without REMOVING equivalent complexity
- Separate THINKING documents (for human) from EXECUTION specs (for agents)
- Execution spec target: <100 lines per agent

**Highest-leverage change (Process Metacognition, Section on Metacognition):**

Separate into 3 components:
1. **Base template (50 lines):** Universal rules (soul constraints, prohibitions)
2. **Phase diff (20-40 lines):** What's unique to this task (metaphor derivation for Ceiling)
3. **Per-agent memory (30 lines each):** Role-specific instructions (builder sees build guidance, PA sees audit questions)

**Total per agent:** 50 + 30 + 30 = 110 lines (vs 400-1,760 currently)

---

## 9. 50:1 COMPRESSION (Information Loss Problem)

**The finding:**
- 337 research findings (R1-R5, 11 research agents)
- Compressed into "sample 2-4 mechanisms" specification
- Compression ratio: 337:1 per word = 50:1 for full constraint
- Information loss: 99.8%

**What this means:**
- Showcase pages accumulated techniques across 4-6 iterative stages
- Pipeline is single-pass (each agent runs once)
- Real gap is iterative discovery, not creative freedom

**The trade-off:**
- Single-pass: 35 min, B+ quality (Middle)
- Multi-pass: 150-220 min, A quality (showcases)

**For Ceiling:**
- Decide: Single-pass (fast) or multi-pass (rich)?
- Tier model assumes Ceiling is single-pass
- If Ceiling needs multi-pass for metaphor coherence, adjust time estimates to 3-4 hours

**Alternative:** Add ONE iteration cycle:
- Phase 2: Build (first pass)
- Phase 2.5: Review + targeted fixes (if severity-1 defects found)
- Phase 3: Audit (final pass)

Expected cost: +15-30 min for review cycle
Benefit: Catches missing footer BEFORE perceptual audit

---

## 10. CRITICAL FILES TO READ FOR CEILING PROMPT

Based on cross-report synthesis, these are the ESSENTIAL files:

### 10.1 Master Documents (READ ALL)

1. **Master Retrospective (09-MASTER-RETROSPECTIVE.md, 507 lines)**
   - Start here: Section III (9 cross-cutting findings)
   - Critical: Finding 9 (Agent Communication)
   - Read: Section V (What Went Wrong), Section IX (Skill Modifications)

2. **Unified Action Plan (TAKEAWAY-UNIFIED-ACTION-PLAN.md, 433 lines)**
   - Section 2: Convergent Findings (CF-1 through CF-8)
   - Section 3: Priority Matrix (M-01 through M-11 MUST DO items)
   - Section 4: Conflicts and Tensions (4 conflicts resolved)

3. **Failure Mode Analysis (TAKEAWAY-FAILURE-MODES.md, 556 lines)**
   - Section 2: Failure Mode Table (all 14 failures classified)
   - Section 3: Top 3 Highest-Leverage Fixes
   - Section 5: Meta-Observations (Compliance Paradox, Zero-Margin Problem)

### 10.2 Ceiling-Specific Documents (READ FOR DESIGN)

4. **Ceiling Projection (TAKEAWAY-CEILING-PROJECTION.md, 964 lines)**
   - Section 1: NEW RISKS (7 risks Ceiling introduces)
   - Section 2: OPPORTUNITIES (6 opportunities Ceiling has)
   - Section 3: DESIGN RECOMMENDATIONS (team size, gates, metaphor process)
   - Section 4: THE BIG QUESTION (metaphor vs iteration)
   - Section 5: WHAT SUCCESS LOOKS LIKE (7 concrete criteria)

5. **Process Metacognition (TAKEAWAY-PROCESS-METACOGNITION.md, 944 lines)**
   - Section 1: CARRY FORWARD (10 validated patterns)
   - Section 2: CHANGE (8 patterns that need modification)
   - Section 5: META-LESSONS (10 broader insights)

### 10.3 Specialized Analyses (READ FOR DEPTH)

6. **Communication Audit (AUDIT-COMMUNICATION-REFS.md, 517 lines)**
   - Documents ALL references to zero SendMessage
   - 47 references across 4 files: 34 KEEP, 10 ADD CAVEAT, 3 REFRAME
   - Shows exactly what needs correction

7. **Reader Synthesis (READER-RETRO-SYNTHESIS.md, 873 lines)**
   - Section 1: Cross-cutting themes (5 themes across all 10 reports)
   - Section 2: Adversarial challenges (how strong are they?)
   - Section 7: Cross-validation of theories

---

## 11. TOP 5 ACTIONS (THE SHORT LIST)

If we could only do 5 things before Ceiling:

### 1. Enable inter-agent communication (M-02)

**Defense:** 5 of 8 retrospective reports independently identified communication isolation as quality-limiting. Missing footer is smoking gun. CD-006 (39/40 WITH messaging) vs Middle (B+ WITHOUT).

### 2. Add landmark completeness gate (M-03)

**Defense:** Cheapest fix with highest severity prevention. 2 minutes of verification prevents WOULD-NOT-SHIP defects. 6 of 8 reports identified missing footer as critical process failure.

### 3. Add builder self-check (M-04 + S-06)

**Defense:** 3 of 5 Middle defects catchable by builder before audit. Binary self-checks achieve 100% compliance (7/7 vs 0/3 split). Shifts quality detection LEFT (10x cheaper).

### 4. Apply M1 with caveat (M-01)

**Defense:** Validated by 11 research agents + 1 experiment. But n=1 sample size = add exception clause for content that can't support category. Schedule multi-content validation as follow-up.

### 5. Create Ceiling execution prompt with metaphor derivation (M-07)

**Defense:** Delivery vehicle for everything else. Gates, protocols, communication rules, metaphor phases all live in master execution prompt. Without it, improvements are documented but not operational.

---

## FINAL SYNTHESIS: THE TWO DIMENSIONS OF "DESIGNED"

**The critical insight from Master Retro Finding 4:**

"Designed" has TWO dimensions:
1. **Vocabulary fluency** (Middle) — knowing many mechanisms, deploying them correctly
2. **Compositional fluency** (Ceiling) — mechanisms chosen to EXPRESS something

**Middle achieved vocabulary fluency:**
- 12 mechanisms across 5 categories ✓
- PA-05 4/4 DESIGNED ✓
- But: "professionally stiff," "specifications applied correctly"

**Ceiling must achieve compositional fluency:**
- Metaphor gives mechanisms shared PURPOSE
- Multi-channel encoding (border + spacing + color all express "depth")
- Result: "composition felt through" not "rules followed correctly"

**THE TEST:**
- If Ceiling ALSO feels "professionally stiff," metaphor doesn't add compositional fluency
- If Ceiling feels "compositionally confident," metaphor IS the missing ingredient
- This is THE experiment

---

**EXTRACTION COMPLETE**

Total files read: 7 (25,000+ lines)
Total lessons extracted: 100+ across 11 sections
Total fixes identified: 11 MUST DO + 8 SHOULD DO
Top priority: Enable agent communication (M-02)
Critical insight: Zero SendMessage = speed win but quality cost

All lessons, anti-patterns, communication insights, failure modes, and process recommendations documented above for Ceiling master execution prompt integration.
