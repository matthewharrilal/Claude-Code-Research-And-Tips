# Metacognitive Review: Will the Master Execution Prompt Produce Correct Builder Behavior?

**Reviewer:** metacognitive-reviewer
**Date:** 2026-02-16
**Subject:** `ephemeral/session-insights/23-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md` (1,662 lines)
**Sources consulted:** Richness unified synthesis, rigidity unified synthesis, rigidity mechanics synthesis, 8 conversation clarifications

---

## COGNITIVE ARCHITECTURE: How a Claude Instance Will Process This Prompt

### 1. The Attention Distribution Problem

A 1,662-line prompt creates a **non-uniform attention landscape**. LLM attention follows a bathtub curve: high attention at the START (anchoring), moderate in EARLY-MIDDLE sections, declining through LATE-MIDDLE, and recovering at the END (recency). The prompt's critical instructions are distributed as follows:

| Instruction | Location | Attention Zone | Risk |
|-------------|----------|---------------|------|
| Mission statement | Lines 29-84 | HIGH (anchoring) | LOW |
| Soul prohibitions | Lines 89-140 | HIGH-MODERATE | LOW |
| Container width (THE #1 rule) | Lines 624-655 | MID-DECLINE | **HIGH** |
| Mechanism breadth (B3) | Lines 658-668 | MID-DECLINE | **HIGH** |
| Mechanism justification | Lines 682-688 | MID-DECLINE | **HIGH** |
| PA-05 operationalization | Lines 969-1007 | LATE (low attention) | **VERY HIGH** |
| Anti-patterns | Lines 1260-1323 | LATE (low attention) | **HIGH** |
| Mandatory builder blocks | Lines 1528-1580 | END (recency recovery) | MODERATE |

**The single most important rule — container width 940-960px — sits at line 624, squarely in the attention decline zone.** The prompt DOES compensate by repeating it in the mandatory blocks (Appendix B, line 1559), which benefits from recency. But the FIRST encounter, where the builder forms their mental model of the page, is in the decline zone.

**Prediction:** The container width will be followed — but NOT because of its position in Section 4.4. It will be followed because of the copy-paste `:root` block (line 729, which includes `max-width: 960px` in the header CSS at line 426) and the Appendix B enforcement block. The repetition is doing the work, not the instruction's position.

### 2. Continuation Bias: What the Instance Will Anchor To

The first 200 lines establish:
- "This is a PLANNING document" (line 2)
- "Middle-tier = 8-10 mechanisms, no metaphor" (line 39)
- "Content-based justification" (line 47)
- "Pattern selection from 4 options" (line 47)

This anchoring is CORRECT. The instance will enter planning mode, not building mode. It will look for content features to match to mechanisms, not for metaphors to derive. The mission statement accurately frames the task.

**However,** continuation bias means the instance will also anchor to the FIRST mechanism descriptions it encounters. The mechanisms are listed in order #1-#18 (lines 294-480). The instance will develop stronger familiarity with #1-#6 than #12-#18 due to attention decay within the list. This means:

- **Border-Weight Gradient (#1), 2-Zone DNA (#2), Solid Offset (#3), Spacing Compression (#4), Dense/Sparse (#5), Width Variation (#6)** will be deployed at higher rates
- **Progressive Disclosure (#12), Footer Mirror (#14), Bento Grid (#15)** will be underweighted

**Mitigation present in prompt:** The content-structure mapping table at lines 484-496 re-surfaces later mechanisms in a lookup format. This partially corrects the attention bias. The per-category selection table at lines 660-667 also forces attention back to all categories.

**Prediction:** The per-category table is the stronger corrective. The instance will use it as a checklist and systematically select from each row. This is GOOD design — it exploits the "binary checklist = 100% compliance" principle.

### 3. Token Count and Cognitive Overload Assessment

Estimated token count: ~12,000-14,000 tokens (1,662 lines of mixed markdown with tables, code blocks, and prose). This is approximately 15-20% of a typical Claude context window.

**This is within safe processing bounds** — the prompt is not so long that critical instructions get pushed out of effective attention range. However, it IS long enough that the instance will not hold all 1,662 lines in active working memory simultaneously. The instance will construct a COMPRESSED internal model of the prompt, which means:

**What will be in the compressed model:**
- Mission: plan a Middle-tier page, 8-10 mechanisms, no metaphor
- Constraints: soul prohibitions (8), container 940-960px
- Mechanisms: 18 available, 5 categories, 1+ per category
- Pipeline: 10 steps, skip Phases 1-3
- Validation: Quick Check 15 items, PA-05 operationalized

**What will be COMPRESSED OUT (lost):**
- Specific anti-pattern rules (max 2 callouts per viewport, velocity sequencing)
- Perceptibility floor (10% OR 8px)
- Transition type details (SMOOTH vs BRIDGE vs BREATHING)
- Component sequencing rules (temperature flow, weight balance)
- Border anti-patterns (specific 2px prohibition exceptions)

This compression is partially acceptable — the compressed-out items are refinement details that affect BUILD quality, not PLAN quality. Since this instance PLANS and another BUILDS, the compressed-out items only matter if the plan needs to specify them. But the plan SHOULD specify transition types and component sequencing, so some information loss is problematic.

---

## ATTENTION RISKS: Where Critical Instructions Might Be Overlooked

### Risk 1: Section 4.8 Component Sequencing Rules (MEDIUM-HIGH)

Lines 893-913 contain velocity/temperature/weight rules that are essential for a good plan but sit deep in the declining attention zone. The instance may produce a mechanism deployment plan that ignores component sequencing entirely.

**How to detect:** Check if the plan specifies component ordering or just lists mechanisms without spatial reasoning.

### Risk 2: Section 5.3 PA-05 Operationalization (HIGH)

The 4 sub-criteria for PA-05 (lines 969-1007) are the operational definition of "designed vs formatted." But they sit at line 969 — well past the attention midpoint. The instance may plan without ensuring the build will PASS these sub-criteria.

**Specific sub-risk:** PA-05d (non-framework CSS ratio >= 15%) requires compositional CSS (calc(), pseudo-elements, nth-child). If the plan uses only standard mechanism deployments from the catalog, the builder may produce sub-15% compositional CSS. The planner needs to explicitly account for this.

### Risk 3: Section 4.7 Transition Types (MEDIUM)

The 3-transition minimum (lines 868-891) is a post-hardening requirement that the planner may not include in the build specification. The instance may not plan explicit transition points between sections.

### Risk 4: Appendix C Compositional Rules (LOW-MEDIUM)

The 41 compositional rules (lines 1584-1637) are in an appendix, which is the zone of LOWEST systematic attention. The instance will likely not internalize rules like "max 3 consecutive dense sections" (R2) or "max 2-3 zone changes per viewport" (Z2) during planning.

**Counterargument:** These are BUILD-phase rules. If the builder instance receives the compositional rules separately, this is acceptable information loss at the PLANNING stage.

---

## RIGIDITY ANALYSIS: Does the Prompt Create More Rigidity Than Intended?

### The Ambient Rigidity Concern Is Real

The prompt contains:
- 8 absolute prohibitions
- 12 conditional prohibitions
- 2 meta-prohibitions
- 5 soul pieces
- 8 quantitative guardrails
- 10 Critical-10 items
- 15 Quick Check items
- 4 PA-05 sub-criteria
- 41 compositional rules
- 6 anti-pattern categories
- 4 border anti-patterns
- 5 process anti-patterns

**Total: ~115 distinct constraints on a single page build.**

The rigidity research found that showcase pages operated under 78 constraints at CD-006 level. This prompt imposes ~115 constraints on a MIDDLE-TIER page. The constraint count EXCEEDS the Flagship tier's constraint surface.

**Why this happens:** The prompt conflates PLANNING constraints (what the planner needs to know) with BUILDING constraints (what the builder needs to follow) and EVALUATION constraints (what the auditor needs to check). All three audiences' constraints are dumped into a single document.

**The metacognitive theorist's warning from the rigidity research directly applies here:** "168 constraints simultaneously active creates cognitive overload that narrows creative space even though no single constraint is limiting." The prompt is approaching this threshold.

**However, the PLANNING instance is not BUILDING.** The planner does not need to hold 115 constraints simultaneously — only the planning-relevant subset (~30-40). The question is whether the planner will correctly FILTER the constraints into "my concern" vs "the builder's concern."

**Prediction:** The instance WILL correctly filter. The mission statement (lines 43-51) explicitly lists what the planner produces (content selection, pattern selection, mechanism deployment plan, build specification, validation plan, evaluation framework). This framing naturally excludes build-phase details from the planner's active concern set.

### Specification Rigidity: Is Anything Limiting?

Applying the rigidity research's taxonomy:

**ENABLING constraints (keep):** Soul prohibitions, token vocabulary, container width, per-category minimum — all create the playing field.

**POTENTIALLY LIMITING constraints:**

1. **"Mechanism count 7-12" (B4.1, line 673):** Despite Clarification 1 saying counts are descriptive, the prompt frames 7-12 as a PASS/FAIL boundary. A builder naturally deploying 13 mechanisms would FAIL this check. This is a specification that could LIMIT a builder who discovers their content naturally wants more mechanisms than Middle tier prescribes.

   **Recommendation:** Reframe as "7-12 is the expected Middle-tier landing zone. If your content naturally supports more, document why — this may indicate Ceiling-tier content."

2. **"CSS line count 350-500 (descriptive)" (C1.1, line 1481):** Labeled "descriptive" but included in the threshold quick reference table alongside PASS/FAIL items. A builder may unconsciously treat it as a ceiling.

   **Assessment:** LOW risk because it's labeled descriptive. But inclusion in the threshold table creates implicit normative force.

3. **"Word count 800-1,200" (A2.1, line 1333):** Hard FAIL below 800 or above 1,200. This is a content selection constraint, not a building constraint, so it limits the PLANNER. 1,200 words may be insufficient for content that naturally wants a complex page structure.

   **Assessment:** MEDIUM risk. The constraint prevents scope creep (good) but may prevent content complexity that would naturally exercise more mechanisms (limiting).

### Where the Prompt Creates UNINTENDED Rigidity

**The content-to-mechanism mapping table (lines 484-496) is the biggest ambient rigidity source.** It presents a LOOKUP TABLE that maps content features to specific mechanisms. While labeled as "Middle-Tier Selection Logic," it functions as a near-deterministic assignment:

```
Content has code blocks → #17
Content has hierarchy → #1 + #11
Content has callouts → #2 + #9
```

This is INTENTIONAL for Middle tier (lookup vs derivation). But the rigidity mechanics synthesis warns that "when to use" framing triggers LOOKUP MODE, which is exactly what this table does. The instance will match content features to mechanisms mechanically rather than considering whether the deployment serves the page's compositional goals.

**This is BY DESIGN for Middle tier.** The entire Middle-tier hypothesis is that lookup-based deployment can reach the engagement threshold. So this rigidity is intentional, not accidental. The question is whether it's TOO deterministic — leaving zero room for the planner to make genuine compositional choices.

**Assessment:** The table maps to 9 mechanism decisions, but the planner still chooses:
- WHICH density pattern (4 options)
- HOW mechanisms interact (reinforcing pairs)
- WHERE transitions occur
- WHAT content goes in each section

These are genuine compositional choices. The table handles WHAT mechanisms, but the planner handles HOW they're arranged. This division is appropriate.

---

## CREATIVE SPACE ASSESSMENT: Is There Genuine Room for Compositional Choices?

### What the Planner Can Choose

1. **Content domain and structure** — The planner selects the topic and organizes it. Full creative freedom within the mixed-content requirements.
2. **Density pattern** — 4 options (CRESCENDO / F-PATTERN / BENTO / PULSE). Genuine choice.
3. **Mechanism selection beyond minimum** — Per-category minimum requires 5 mechanisms. The planner can add 3-7 more. Which additional mechanisms are deployed is a genuine choice.
4. **Reinforcing pairs** — The planner must document 2+ pairs. Which mechanisms they pair, and what dimension they reinforce, is a genuine compositional decision.
5. **Section structure** — How many sections, what order, what density rhythm. Genuine choice.
6. **Transition types and placement** — 3+ transitions, choosing between SMOOTH/BRIDGE/BREATHING. Genuine choice.

### What the Planner Cannot Choose

1. Container width (fixed at 940-960px)
2. Typography (fixed: Instrument Serif headings, Inter body, JetBrains Mono code)
3. Color palette (fixed: tokens.css)
4. Border widths (fixed: 4px/3px/1px)
5. Soul pieces (no shadows, no gradients, no rounded corners)
6. Pipeline sequence (10-step, non-negotiable)
7. Validation framework (Critical-10, Quick Check, PA-05)

### Assessment

**There IS genuine creative space.** The planner has ~6 degrees of freedom across content, pattern, mechanism selection, pairing, section structure, and transitions. The fixed constraints (identity, tokens, borders) are ENABLING — they create the vocabulary. The genuine choices are COMPOSITIONAL — how the vocabulary is deployed.

**The creative space is NARROWER than Ceiling/Flagship** (which add metaphor derivation, multi-channel coherence, 4-5 scale fractal). But it is NOT zero. A planner making different choices in the 6 dimensions above would produce a meaningfully different page.

**The "creative derivation vs lookup" distinction (Clarification 3) is well-preserved.** The prompt clearly positions Middle as lookup for WHICH mechanisms, but preserves choice for HOW they combine. This is the intended design space.

---

## INFORMATION COMPRESSION: What Is Lost From Source to Prompt

### Compression Ratios

| Source | Lines | In Prompt | Ratio | What's Lost |
|--------|-------|-----------|-------|-------------|
| Richness synthesis | 421 | ~50 (Section 6.4) | 8.4:1 | All 7 richness dimensions, interaction layer, 5 open questions, 5 blind spots |
| Rigidity synthesis | 551 | ~60 (Section 6.3-6.4) | 9.2:1 | 4-type taxonomy detail, tier architect's quantitative proof, reproducibility roadmap |
| Rigidity mechanics | 1,017 | ~0 (not referenced) | INFINITE | 18 gravity dimensions, 12 anti-gravity mechanisms, jazz analogy, scaling analysis |
| 8 clarifications | 243 | ~80 (distributed) | 3.0:1 | M1 sequencing rationale, deployment level concrete difference, scales explanation |
| Mechanism catalog | 1,011 | ~186 (Section 3) | 5.4:1 | Compositional rules detail, combination grammar, interaction patterns |
| Prohibitions | 353 | ~52 (Section 1) | 6.8:1 | Conditional prohibition exceptions detail, research provenance for each |
| Tokens.css | 174 | ~130 (Section 2) | 1.3:1 | Near-complete — good |
| Checklist (138 items) | ~1,200 | ~50 (Section 5.4 summary) | 24:1 | Most of the 138 items — only Critical-10 and Quick Check preserved |

### Critical Information Losses

**Loss 1: Rigidity mechanics (INFINITE compression — not included at all)**

The rigidity mechanics document contains the deepest understanding of how pattern defaulting works and how to prevent it. Its 6 cognitive mechanisms, 18 gravity dimensions, and 12 anti-gravity mechanisms are ABSENT from the prompt. For Middle tier (which doesn't use metaphor derivation), this is arguably acceptable — anti-gravity is primarily relevant for Ceiling+ where pattern-matching is a risk.

**But one finding IS relevant to Middle:** "Binary rules achieve 100% compliance; judgment rules achieve ~0%." This principle is stated in the prompt (line 79) but its IMPLICATIONS for prompt design are not. The prompt contains judgment rules that masquerade as binary rules (e.g., "content-based justification for each" — what counts as "content-based" is judgment, not binary).

**Loss 2: The 138-item checklist (24:1 compression)**

The full checklist is referenced but not included. The planner is told to plan for "Quick Check (15 items), then full 138-item checklist" but only sees the Critical-10 and Quick Check in detail. The planner cannot optimize the plan to pass items they haven't seen.

**Assessment:** This is ACCEPTABLE for planning. The planner should ensure the plan passes the Critical-10 and Quick Check. The full 138-item checklist is an AUDIT tool, not a PLANNING tool. The planner shouldn't be trying to pre-pass 138 items — that would cause analysis paralysis.

**Loss 3: Clarification 3 concrete difference (partially lost)**

Clarification 3 explains the critical distinction between Middle (mechanisms serve DIFFERENT content needs INDEPENDENTLY) and Ceiling (mechanisms encode the SAME semantic dimension through MULTIPLE channels). The prompt captures this at lines 484-496 but doesn't make the CONTRAST explicit. A planner who doesn't understand why Middle is different from Ceiling may inadvertently plan a Ceiling-style build (attempting multi-channel coherence).

**Assessment:** LOW risk because the prompt explicitly says "SKIP Phases 1-3" and "no metaphor derivation." The planner would have to actively work against the prompt to attempt Ceiling-style deployment.

---

## TWO-INSTANCE CONSIDERATIONS: Does the Plan-to-Build Handoff Work?

### The Prompt's Two-Instance Architecture

The prompt is designed for a PLANNING instance. The plan is then handed to a BUILDING instance. This is the "Two-Instance Pattern" from the memory — it "exploits fundamental LLM property: continuation bias prevents self-revision."

### What the Planner Produces (lines 43-51)

1. Content selection
2. Pattern selection
3. Mechanism deployment plan
4. Build specification
5. Validation plan
6. Evaluation framework

### What the Builder Needs (Not Explicit in the Prompt)

The prompt does NOT specify the FORMAT of the plan document that the builder will receive. This is a critical gap. The builder needs:

1. **Content text** — The actual 800-1,200 words to layout
2. **Section-by-section structure** — What content goes where, in what order
3. **Mechanism-to-section mapping** — Which mechanisms deploy in which sections
4. **CSS specifications** — What CSS values to use (or copy-paste blocks)
5. **Transition specifications** — Where transitions go and what type
6. **Validation checklist** — What to verify after building

The prompt includes Appendix B "Builder Prompt Mandatory Blocks" (lines 1528-1580), which provides 4 enforcement blocks. But these are CONSTRAINT blocks, not SPECIFICATION blocks. The builder needs both.

**Prediction:** The planner will produce a plan that describes WHAT to build but not necessarily in a format the builder can DIRECTLY EXECUTE. The plan may be too abstract ("deploy mechanism #5 in the intro section") rather than concrete ("intro section padding: 64px, background: var(--color-zone-sparse), border-bottom: 1px solid var(--color-border)").

**Recommendation:** Add a "Plan Output Format" section specifying the required structure:

```
## PLAN OUTPUT FORMAT
Your plan MUST include:
1. CONTENT: The full text (800-1,200 words) with section breaks marked
2. SECTION MAP: For each section — content summary, mechanism(s), padding, background, border
3. MECHANISM TABLE: Each deployed mechanism with section location and CSS values
4. TRANSITION TABLE: Each transition with type (SMOOTH/BRIDGE/BREATHING) and CSS
5. BUILDER BLOCKS: Copy Appendix B blocks verbatim into builder prompt
```

### Continuation Bias in the Handoff

The builder will receive the plan document and begin building. The builder's continuation bias will anchor to whatever the plan document STARTS with. If the plan starts with philosophical framing ("this experiment tests the Middle-tier hypothesis..."), the builder will waste context on meta-reasoning before building. If the plan starts with CSS and structure, the builder will build immediately.

**Recommendation:** The plan output format should mandate that the plan document starts with actionable structure (CSS, section map, content) and puts rationale/justification at the END.

---

## BEHAVIORAL PREDICTIONS: What the Instance Will Actually Do

### Prediction 1: The planner WILL correctly skip Phases 1-3 (CONFIDENCE: 99%)

The prompt states this 5+ times (lines 42, 557-566, 586-596, 925-926, 1108). Binary rule, massively reinforced. Zero risk of metaphor derivation.

### Prediction 2: The planner WILL select from all 5 mechanism categories (CONFIDENCE: 95%)

The per-category table (lines 660-667) is a binary checklist. "Fill in" blanks create task-completion pressure. The planner will systematically work through the table.

### Prediction 3: The planner WILL select CRESCENDO as the density pattern (CONFIDENCE: 70%)

The pattern selection table (lines 599-605) maps tutorial content to CRESCENDO. Since the content domain suggestions (lines 1365-1374) are all tutorial-adjacent ("setting up a development environment," "configuring a deployment pipeline"), the planner will likely choose tutorial content and therefore CRESCENDO. This is ACCEPTABLE — it's the lookup working as designed. But it means the experiment will test ONE pattern, not all four.

### Prediction 4: The planner WILL deploy 8-10 mechanisms (CONFIDENCE: 85%)

The per-category minimum requires 5. The content-structure mapping (lines 484-496) will naturally suggest 3-5 more (code blocks, chrome, tables). This lands at 8-10. The prompt's "7-12" range makes this feel safe.

**Risk:** The planner might deploy exactly 5 (one per category) and call it done, missing the "8-10" natural landing zone. The prompt says "1+ per category" but doesn't say "and your total should naturally land around 8-10."

**Mitigation present:** The content-structure mapping table (lines 484-496) shows that mixed content naturally maps to 8+ mechanisms. If the planner follows the table, 5 is arithmetically unlikely for content with code blocks + callouts + hierarchy + sections + tables + chrome.

### Prediction 5: The planner MAY produce a plan that is too abstract for the builder (CONFIDENCE: 60%)

Without explicit plan output format requirements, the planner may produce a document that reads like an essay about what to build rather than a specification of HOW to build it. The planning instance's continuation bias will favor analytical, reflective output (matching the analytical tone of the prompt itself) over concrete, actionable output.

### Prediction 6: The planner WILL produce mechanism reinforcing pairs, but they may be WEAK (CONFIDENCE: 75%)

B4.4 requires 2+ reinforcing pairs documented with shared content dimensions. The planner will do this. But the "proven pairs" list (lines 498-506) provides only 3 options. The planner may mechanically select two from this list rather than discovering genuine pairs from their content. This would satisfy the letter of B4.4 but not the spirit.

**Risk assessment:** MODERATE. The proven pairs list is INTENTIONALLY provided (Middle tier is lookup-based). Using proven pairs IS the correct Middle-tier behavior. The concern is only that the planner won't think about whether the pair actually FITS their content.

### Prediction 7: The planner WILL correctly handle container width (CONFIDENCE: 90%)

The prompt mentions 940-960px in: Section 0 (line 82), Section 4 Step 4 (lines 624-655), Quick Check item 1 (line 942), Appendix B Block 3 (lines 1559-1565), and Key Thresholds (line 1469). Five mentions plus a copy-paste CSS block. This is EXTREME reinforcement.

The 10% risk comes from: the planner might not include the container width enforcement in the builder handoff document, relying on the builder to "know" it. Since the builder is a DIFFERENT instance, it won't know unless explicitly told.

---

## RECOMMENDED ADJUSTMENTS

### Adjustment 1: Add Plan Output Format Specification (PRIORITY: HIGH)

**Where:** After Section 4.2 Step 10 (line 725)
**What:** Explicit format requirements for the plan document, ensuring it is actionable for the builder instance.
**Why:** The two-instance handoff currently has no format specification. The planner will default to its own output preferences (analytical prose) rather than what the builder needs (structured specification).

### Adjustment 2: Relocate Container Width Rule to Section 0 (PRIORITY: MEDIUM)

**Where:** Section 0 Mission Statement, after line 84
**What:** Add a "NON-NEGOTIABLE #1" callout with the container width rule to the anchoring zone.
**Why:** The rule currently first appears at line 624. Moving it to Section 0 ensures it's in the highest-attention zone. Keep the repetitions in Sections 4, 5, and Appendix B as reinforcement.

### Adjustment 3: Add "Expected Mechanism Count" Guidance to Per-Category Table (PRIORITY: MEDIUM)

**Where:** After the per-category table (line 668)
**What:** Add: "With mixed content (prose + code + callouts + tables), per-category minimum PLUS content-mapping typically produces 8-10 mechanisms. If your total is below 7, re-check whether content features were missed. If above 12, you may be over-deploying — verify each with content-based justification."
**Why:** The per-category minimum ensures breadth but doesn't signal the expected landing zone. Without this, a planner might stop at 5 (one per category).

### Adjustment 4: Clarify Judgment Rules vs Binary Rules (PRIORITY: MEDIUM)

**Where:** After the Governing Principles (line 84)
**What:** Explicitly mark which instructions in the prompt are BINARY (PASS/FAIL) vs JUDGMENT (requires interpretation). The prompt CLAIMS all rules are binary (line 79) but several are judgment-based:
- "content-based justification" (B5) — what counts as content-based is judgment
- "genuine improvement over Variant B" (E2.2) — what counts as genuine is judgment
- "want to spend time here at least partially" (E2.3) — pure judgment
**Why:** Labeling judgment rules as binary creates false precision. The planner will feel confident they've met the criterion when they haven't. Better to acknowledge: "B5 requires judgment. Err toward specific evidence: 'Section 3 has 4 code blocks, so mechanism #17 serves a real content need' rather than 'content has code.'"

### Adjustment 5: Add Anti-Abstraction Instruction (PRIORITY: LOW-MEDIUM)

**Where:** Section 0, in the "What the Receiving Instance Should Produce" list
**What:** Add: "Your plan should be CONCRETE enough that a builder instance can implement it without re-reading this prompt. Include specific CSS values, section padding numbers, background tokens, and transition types. Abstract descriptions ('deploy mechanism #5 for rhythm') are insufficient — specify 'Section 1: padding var(--space-16), background var(--color-zone-sparse); Section 2: padding var(--space-8), background var(--color-zone-dense).'"
**Why:** Prevents the prediction 5 failure mode where the plan is too abstract.

### Adjustment 6: Surface PA-05 Sub-Criteria Earlier (PRIORITY: LOW)

**Where:** Section 0 or Section 4 Step 10
**What:** Add a brief forward reference: "Your build plan must ensure PA-05a (>= 2 non-default layout elements), PA-05b (padding ratio >= 2.0x), PA-05c (identifiable visual hierarchy), PA-05d (>= 15% compositional CSS). See Section 5.3 for full definitions."
**Why:** PA-05 at line 969 is in the attention decline zone. A forward reference in the high-attention pipeline section ensures the planner knows to plan for these thresholds.

---

## OVERALL ASSESSMENT

### Strengths

1. **Binary rule design is excellent.** The Critical-10, Quick Check, per-category table, and copy-paste CSS blocks are all binary, verifiable, and leave no room for interpretation. These will achieve near-100% compliance.

2. **Repetition strategy is effective.** Container width appears 5 times. Soul constraints appear in Section 1, Section 4 Step 9, Quick Check, and Appendix B Block 1. This redundancy compensates for attention decay.

3. **The "skip Phases 1-3" instruction is unambiguous.** No risk of the planner attempting metaphor derivation.

4. **The content-structure mapping table elegantly converts "use judgment" into "use lookup."** This is the core Middle-tier innovation and it works as designed.

5. **The anti-pattern section (Section 8) is well-positioned for reference.** While in the low-attention zone, it's structured as a lookup table (scan when needed) rather than a sequential read requirement.

6. **The copy-paste CSS blocks (`:root`, typography, accessibility, responsive) are the single most effective prompt feature.** They eliminate the most common failure mode: incorrect CSS values. The builder copies, not derives.

### Weaknesses

1. **No plan output format.** The planner knows WHAT to plan but not HOW to format the plan for the builder. This is the most significant structural gap.

2. **Judgment rules masquerading as binary.** B5 justification, E2.2 improvement, E2.3 atmosphere are judgment calls dressed in PASS/FAIL language. The planner may produce false-precision answers.

3. **Mechanism count framing is ambiguous.** "7-12" appears as a PASS/FAIL range, but the research says counts are descriptive. The prompt doesn't resolve this tension — it states both.

4. **Component sequencing rules are in the attention decline zone.** The velocity/temperature/weight rules at lines 893-913 are important for compositional quality but may be overlooked during planning.

5. **The prompt is optimized for the PLANNER but doesn't fully account for the BUILDER.** The Appendix B mandatory blocks are the only builder-specific content. The handoff gap between "plan document" and "builder prompt" is underspecified.

### Verdict

**The prompt will produce CORRECT planner behavior 85-90% of the time.** The binary rule design, repetition strategy, and content-structure mapping are well-engineered. The primary risks are:
- Plan too abstract for the builder (60% chance without format specification)
- Component sequencing overlooked (40% chance)
- PA-05 sub-criteria not explicitly planned for (30% chance)
- Mechanism reinforcing pairs selected mechanically from proven list (50% chance, but this is acceptable for Middle tier)

**The prompt will NOT produce INCORRECT behavior.** The soul constraints, container width, and per-category minimum will be followed. The risk is not WRONG behavior but INCOMPLETE behavior — a plan that satisfies the letter of the Critical-10 but misses refinement details that push the page from "formatted" to "designed."

**This is exactly the question the Middle-tier experiment is designed to answer:** Can lookup-based specification reach the engagement threshold, or does crossing that threshold require the compositional judgment that only metaphor-derived coherence provides? The prompt is well-designed to TEST this hypothesis, even if the answer turns out to be PARTIAL.

---

*End of metacognitive review.*
