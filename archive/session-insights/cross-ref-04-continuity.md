# Continuity Audit: Strategic Context Cross-Reference

**Auditor:** continuity-auditor
**Date:** 2026-02-15
**Task:** Cross-reference master execution prompt (14-master-execution-prompt.md) against strategic continuity documents to verify mindset, decision-making context, and strategic rationale transmission.

---

## EXECUTIVE SUMMARY

**Status:** MODERATE GAPS -- prompt captures mechanics well but MISSES critical strategic context that would enable good judgment calls.

**3 Critical Missing Elements:**
1. **Experiment-first methodology is ABSENT** -- prompt treats modifications as implementation tasks, not as experiment-gated actions
2. **User anti-patterns and decision philosophy are INCOMPLETE** -- prompt doesn't convey the user's preference for building over researching, sensitivity to over-engineering, or "both/and" thinking
3. **The CENTRAL OPEN QUESTION is buried** -- vocabulary-vs-library practical test dimension gets 2 sentences in Section 3; should be front-and-center as THE experiment that validates/invalidates the tier model

**What Works Well:**
- Mechanical instructions are comprehensive and surgically precise
- File manifest and execution order are excellent
- Anti-patterns section captures technical pitfalls
- Tier model numbers and modification specs are accurate

**What's Missing:**
- WHY experiment-first matters (2.6:1 meta-to-output ratio, the content adversary's correction)
- WHEN to stop and ask vs proceed autonomously (user's "both/and" preference, building > researching)
- HOW to make judgment calls when modification recommendations conflict with experimental results
- WHAT the Middle-tier experiment actually TESTS (not just "does it feel designed?" but "is grammar/ safe to use at scale?")

---

## PART 1: STRATEGIC CONTEXT AUDIT

### 1.1 Meta-to-Output Ratio (2.6:1) -- MISSING

**Where it appears in continuity docs:**
- HANDOFF.md Section 9: "Meta-to-output ratio is 2.6:1 (47,944 lines infrastructure vs 18,428 lines product)"
- HANDOFF.md Section 10: "The user watches for over-researching and under-building"
- 02-worldview-and-goals.md Part 5: "One experiment resolves more questions than another four research reports"

**Where it appears in master prompt:**
- NOWHERE explicitly stated
- Hinted at in "SECTION 2: CURRENT SKILL STATE" (skill is 1,400 lines) but not framed as a problem

**Why this matters:**
The 2.6:1 ratio is THE context for why the content adversary reversed the priority ordering from "modify skill first" to "build experiment first." Without this number, a new instance doesn't understand WHY they should experiment before implementing. The prompt currently treats modifications as validated actions ready for implementation, not as experiment-gated hypotheses.

**Impact on decision-making:**
A new instance reading the prompt will likely proceed with all Wave 1 modifications before building anything, because that's the execution order presented. They won't understand that "modify skill" and "build experiment" are in TENSION, not sequence.

---

### 1.2 Experiment-First Methodology -- CRITICALLY MISSING

**Where it appears in continuity docs:**
- 02-tier-methodology.md Section 7: "Build First With Current Skill" -- THE critical sequence correction
- 05-richness-journey.md Section 4: "The Experiment-First Principle" -- explicit priority inversion
- 03-ENTRY-POINT.md Key Context #5: "Experiment-first methodology"
- 06-content-adversarial.md (referenced in tier-methodology): researchers ordered by analytical priority, NOT critical path priority

**Where it appears in master prompt:**
- SECTION 6 "EXECUTION ORDER" Phase 0-1-2-3 treats modifications as sequential implementation
- CHECKPOINT section at line 992 says "Middle-Tier Experiment" but places it AFTER Wave 1 modifications
- The checkpoint says "THIS IS WHERE SKILL MODIFICATION EXECUTION STOPS" but that's TOO LATE -- the sequence should be: PRE-1 -> EXPERIMENT -> evaluate results -> THEN Wave 1 based on findings

**The critical gap:**
The prompt's execution order is:
```
PRE-1 (category labels) -> Wave 1 (M2, M3, M5, M8) -> Middle Experiment -> Wave 2 -> Wave 3
```

The CORRECT sequence per continuity docs is:
```
PRE-1 (category labels) -> Middle Experiment WITH CURRENT SKILL -> evaluate -> THEN Wave 1 IF validated
```

**Why this matters:**
The content adversary's key finding: "the proposed skill modifications should NOT be implemented BEFORE the first experiment." The prompt currently contradicts this by placing Wave 1 BEFORE the checkpoint.

**Specific quote from tier-methodology.md that's missing:**
> "1. **Build a Middle-tier page with the CURRENT unmodified skill.** This determines whether the tier model works, whether Middle achieves the engagement threshold, and whether the current pipeline produces acceptable Middle-tier output. Tell the builder agent in its prompt: 'Skip Phases 1-3, apply CRESCENDO pattern, deploy 8-10 mechanisms from the catalog.' No skill file changes needed -- just prompt-level instructions."

**Impact on decision-making:**
A new instance will modify the skill files FIRST, then build. This prevents the experiment from testing "does the CURRENT skill produce good Middle-tier output?" and instead tests "do the MODIFIED instructions produce good output?" The experiment becomes validation theater instead of a genuine test.

---

### 1.3 Binary Rules Principle -- PRESENT BUT UNDEREXPLAINED

**Where it appears in continuity docs:**
- MEMORY.md: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%" -- THE most important architectural principle
- 02-worldview-and-goals.md Part 7 P2: "This is the most important architectural principle for agent-facing instructions"
- 08-cross-cutting-synthesis.md 1.3: "The Binary Decomposition Theme" -- convert judgment phases into binary micro-gates

**Where it appears in master prompt:**
- SECTION 8.3 "Do NOT Add Judgment-Based Instructions" -- present and accurate
- Examples given: container width (binary), tier-gated requirements (binary), measurable percentages (binary)

**What's missing:**
The master prompt explains binary rules as a FORMATTING principle ("MUST vs should") but doesn't explain it as an ARCHITECTURAL principle for decomposing judgment-heavy phases. The per-category minimum is THE example of this: instead of one big judgment ("how many mechanisms?"), it's 5 binary checks ("does Spatial have 1+? yes/no"). The prompt lists M1 as "per-category minimum" but doesn't explain WHY that structure works better than a raw count.

**Impact on decision-making:**
A new instance will apply binary formatting to instructions but may not understand how to DESIGN constraints that achieve 100% compliance through structural decomposition.

---

### 1.4 Container Width as NON-NEGOTIABLE -- WELL CAPTURED

**Where it appears in continuity docs:**
- HANDOFF.md Section 2: "Container width is THE primary failure mode -- 4/5 pages violated 940-960px"
- MEMORY.md: "Container width 940-960px = NON-NEGOTIABLE. THE primary Phase D failure mode"
- 02-tier-methodology.md Section 7 Item #3: Full container width guardrail text

**Where it appears in master prompt:**
- M3 (lines 391-443): Complete specification with examples, priority order, failure mode explanation
- SECTION 1.3 "What Phase D Proved": "Container width was THE primary failure mode"

**Assessment:** ✅ EXCELLENT -- fully captured with rationale and urgency

---

### 1.5 "Sample 2-4 Mechanisms" as Limiting Specification -- WELL CAPTURED

**Where it appears in continuity docs:**
- ALL 11 research reports identify this (cross-cutting synthesis 2.1)
- HANDOFF.md Section 5: "The single most limiting specification, identified by ALL 11 research agents"

**Where it appears in master prompt:**
- M1 (lines 262-317): Complete replacement specification
- SECTION 1.5 "WHY Skill Enrichment Is Needed" point #1: "Caps richness"
- Listed as P0 BLOCKING in multiple places

**Assessment:** ✅ EXCELLENT -- prominence matches research consensus

---

### 1.6 Vocabulary vs. Library Distinction -- PRESENT BUT INCOMPLETE

**Where it appears in continuity docs:**
- HANDOFF.md Section 7: "The Vocabulary-vs-Library Distinction" -- 2 full pages with Name Test, Transfer Test
- 02-tier-methodology.md Section 6: "Vocabulary vs. Prohibition: The Concrete CSS Comparison" -- CSS examples
- HANDOFF.md Section 7 "The Untested Practical Dimension": THE central open question -- when mechanism density is high, does it FEEL like convergence?

**Where it appears in master prompt:**
- SECTION 3 PRE-1 (lines 151-201): Category labels addition mentions "per-category selection protocol"
- Brief mention in anti-patterns (8.5: "vocabulary not templates")
- NO mention of the Name Test or Transfer Test
- NO mention of the untested practical dimension
- NO explanation that the Middle-tier experiment is THE test of whether grammar/ is safe to use at scale

**The critical gap:**
The continuity docs identify this as THE CENTRAL OPEN QUESTION:
> "The open question can be framed precisely: **Is mechanism reuse (a) grammar usage (like constructing new sentences -- encouraged) or (b) template convergence (like copying what showcase pages did -- discouraged)?**"

The master prompt treats mechanism deployment as straightforward ("read all 18, deploy 8-10") without acknowledging that this untested hypothesis could FAIL -- that a page deploying 8-10 mechanisms might LOOK too similar to showcase pages despite having a different metaphor.

**Impact on decision-making:**
A new instance won't understand that the Middle-tier experiment could produce a NEGATIVE result (mechanism density creates convergence feeling) that would require rethinking the entire tier model. They'll build the page, evaluate "does it feel designed?", and not ask the SECOND question: "does it feel derivative despite using a new metaphor?"

---

## PART 2: MINDSET AND RATIONALE GAPS

### 2.1 WHY "Binary Rules Not Judgment Rules" -- PARTIALLY CAPTURED

**Present in prompt:**
- SECTION 8.3 gives examples of binary vs judgment formatting
- Anti-patterns section warns against judgment-based instructions

**Missing from prompt:**
- The REASON why (100% vs ~0% compliance rate -- from agent team lessons)
- The connection to Phase D evidence (always-load protocol failure = judgment rule that achieved 0% compliance when not enforced)
- How binary rules enable graceful degradation (tier down vs crash)

**What a new instance needs to know:**
Not just "use MUST not should" but "judgment rules fail because agents are continuation-biased -- they optimize for completing the current generation, not for global constraints that require backtracking."

---

### 2.2 WHY Per-Category Minimum Works -- UNDEREXPLAINED

**Present in prompt:**
- M1 full specification with the 5-category table
- Justification requirement ("for each mechanism you deploy, document WHY")

**Missing from prompt:**
- WHY this structure works better than "minimum 8" (decomposition into 5 binary checks vs 1 count check)
- The connection to "Structure Enables, Counting Limits" principle
- The natural landing zone logic (5 categories x 1-2 each = 5-10 mechanisms without targeting a number)

**What a new instance needs to know:**
The per-category minimum is an ARCHITECTURAL pattern for converting count-based specifications (Goodhart-vulnerable) into presence-based checks (binary, resistant to gaming). It's not just a different way to say "minimum 8" -- it's a fundamentally different constraint STRUCTURE.

---

### 2.3 WHY Fractal Gate Works -- WELL CAPTURED

**Present in prompt:**
- M2 includes "proven LOW rigidity cost, HIGH richness gain"
- Tier calibration table (Floor exempt, Middle 2 scales, etc.)
- "Binary gates achieve 100% compliance"

**Assessment:** ✅ GOOD -- rationale is present

---

### 2.4 WHY Tier Routing Matters -- MISSING EFFICIENCY ARGUMENT

**Present in prompt:**
- M5 includes tier classification table and routing logic
- Middle-tier pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE)

**Missing from prompt:**
- The EFFICIENCY gain: "Middle-tier pages (40-50% of all content) don't need metaphor derivation. Currently they must run through the full 7-phase pipeline. This routing saves 60+ minutes per Middle-tier build."
- The 40-50% target proportion (present in tier model table but not connected to M5's value proposition)

**What a new instance needs to know:**
M5 isn't just "nice to have routing" -- it's a 60-minute time savings on 40-50% of builds. At 75 pages, that's ~30 pages saving 60 min each = 30 hours saved. The business case for M5 is absent.

---

## PART 3: USER PREFERENCE GAPS

### 3.1 Building Over Researching -- ABSENT

**Where it appears in continuity docs:**
- HANDOFF.md Section 9: "The user watches for over-researching and under-building"
- 03-ENTRY-POINT.md "What Not To Do" #5: "Do NOT assume the user wants more research. Meta-to-output ratio is 2.6:1. One experiment resolves more than another research team."

**Where it appears in master prompt:**
- NOWHERE

**Why this matters:**
A new instance might read the prompt, see "11 modifications + 6 documentation changes = 18 items", and think "I should research whether these are the right modifications" or "let me analyze whether the tier model is correct first." The user's preference is: EXECUTE, don't re-analyze. The research is done. The prompt is ready. Just follow it.

**What should be added:**
A clear statement: "The research phase is COMPLETE. Your job is EXECUTION and EXPERIMENTATION, not further analysis. If uncertain about a modification, build an experiment to test it, don't launch another research investigation."

---

### 3.2 User's "Both/And" Thinking -- ABSENT

**Where it appears in continuity docs:**
- HANDOFF.md Section 9: "Both/and over either/or. Rejects false dichotomies. Richness AND rigidity."
- The entire rigidity investigation EXISTS because the user said "I feel like it's very easy to get that confused with entering us in a state of rigidity" -- refusing the false choice between "add modifications" OR "avoid rigidity"

**Where it appears in master prompt:**
- NOWHERE explicitly

**Why this matters:**
If the Middle-tier experiment produces MIXED results (feels designed but also feels derivative), a new instance needs to know the user will want BOTH problems addressed, not a binary "pass/fail" verdict. The user's thinking is: "How do we get richness AND novelty?" not "Which do we prioritize?"

---

### 3.3 Sensitivity to Over-Engineering -- PRESENT BUT UNDERSTATED

**Where it appears in continuity docs:**
- HANDOFF.md Section 9: "Values being challenged. Genuine investigation over validation."
- The user's rigidity concern itself is evidence of this sensitivity

**Where it appears in master prompt:**
- SECTION 8.6 "Known Failure Modes" mentions "Checklist factory" and "Over-engineering"
- SECTION 8.2 "Do NOT Remove Existing Content Unless Explicitly Specified"

**Assessment:** ⚠️ PRESENT but could be stronger

**What's missing:**
The user's instinct to question "are we making this too complex?" is a FEATURE, not a bug. The Prophylactic Paradox: the worry about rigidity IS the mechanism that prevents rigidity. A new instance should PRESERVE that questioning stance, not treat it as an obstacle to execution.

---

### 3.4 Grounded in Specifics -- WELL CAPTURED

**Where it appears in continuity docs:**
- HANDOFF.md Section 9: "Grounded in specifics. 'Not just idealizing what each tier looks like.' Work backward from actual code and actual CSS."

**Where it appears in master prompt:**
- SECTION 1.4 "The Tier Model" table with CSS lines, build times, mechanism counts
- M1, M2, M3 all include concrete before/after text
- File manifest with line counts and file paths

**Assessment:** ✅ EXCELLENT

---

## PART 4: DECISION-MAKING CONTEXT GAPS

### 4.1 WHEN to Modify Skill vs Methodology vs Tier Model -- ABSENT

**Where it appears in continuity docs:**
- 02-tier-methodology.md Section 7 "When to Modify Skill vs. Methodology":
  - Modify skill when: concrete instruction consistently produces measurable failure
  - Modify methodology when: process structure prevents discovery
  - Modify tier model when: experimental results contradict predictions
  - Do NOT modify when: results match predictions within acceptable variance

**Where it appears in master prompt:**
- NOWHERE

**Why this matters:**
The Middle-tier experiment could produce results that contradict the tier model's predictions. A new instance needs decision criteria for:
- What if Middle feels under-designed? (modify M5's pattern selection, NOT the skill)
- What if 8-10 mechanisms feels like too many? (modify tier boundaries, NOT M1)
- What if container width STILL gets violated? (strengthen M3 enforcement, NOT add more guardrails)

**Impact on decision-making:**
Without these criteria, a new instance will default to "modify the skill" for every problem, leading to complexity ratchet (rules only accumulate, never retire).

---

### 4.2 HOW to Evaluate Experiment Results -- INCOMPLETE

**Where it appears in continuity docs:**
- 02-tier-methodology.md Section 4 "The Goal of Testing Each Tier" -- success/failure criteria for each tier
- Middle experiment specifically: "Success looks like... Failure looks like... What this resolves..."

**Where it appears in master prompt:**
- CHECKPOINT section (lines 992-1007) mentions "Purpose: Validate that..." but only lists 4 bullet points
- Missing the SECOND question: "Does Middle feel derivative despite different content?"
- Missing the decision tree: "If Middle produces good results -> proceed. If derivative -> revise M1. If under-designed -> tier model needs revision."

**What's missing:**
The master prompt says "validate that tier routing works" but doesn't say WHAT TO DO if it doesn't work. The continuity docs provide a decision tree:
```
Middle experiment results:
├─ Novel + designed -> PROCEED to Wave 2
├─ Novel + under-designed -> tier model boundary wrong, Middle needs more than 8-10
├─ Derivative + designed -> anti-gravity needs mechanism combo divergence (BIG PROBLEM)
└─ Derivative + under-designed -> current skill insufficient, Wave 1 validated
```

---

### 4.3 WHY Modifications Are Ordered in Waves -- PARTIALLY CAPTURED

**Where it appears in continuity docs:**
- 02-tier-methodology.md: "Wave 1 (Core Enabling): M2, M3, M5, M8 -- lowest risk, enables Middle-tier"
- The waves are EXPERIMENT-GATED, not arbitrary

**Where it appears in master prompt:**
- SECTION 4 "OVERVIEW" lists waves with labels (Core Enabling / Vocabulary Expansion / Audit Integration)
- Execution order within waves specified

**What's missing:**
WHY Wave 2 waits for the Middle experiment. The prompt says "Wave 2 (after Middle experiment validates approach)" but doesn't explain WHAT could invalidate the approach. If the experiment shows 8-10 mechanisms creates convergence, M1 (per-category minimum) needs REVISION before adoption, not just "informed by results."

---

### 4.4 The Interaction Effects Warning -- PRESENT

**Where it appears in continuity docs:**
- 02-worldview-and-goals.md Part 4 Problem 3: "Mods 2+3 together are safe. Mods 1+4 together are dangerous (checklist factory)."

**Where it appears in master prompt:**
- M1 description includes "Natural landing: 5-10 mechanisms" (not prescriptive)
- SECTION 8.6 "Checklist factory" warning

**Assessment:** ✅ GOOD -- the interaction risk is flagged

---

## PART 5: SPECIFIC ADDITIONS RECOMMENDED

### Addition 1: Experiment-First Preamble (Insert After Line 19, Before Section 1)

```markdown
## CRITICAL: EXECUTION SEQUENCE

**This prompt enables PLANNING, not immediate implementation.**

The correct sequence is:
1. Read this ENTIRE document
2. Create a PLAN listing all modifications
3. Present the plan for user review
4. **STOP BEFORE WAVE 1** -- The Middle-tier experiment happens FIRST
5. Build a Middle-tier page with the CURRENT unmodified skill (prompt-level instructions only)
6. Evaluate experiment results
7. THEN apply Wave 1 modifications IF validated by the experiment

**Why this sequence matters:**
The research identified that experiment-first methodology (build -> evaluate -> modify) resolves more questions than modify-first (modify -> build -> validate). The Middle-tier experiment tests whether the current skill produces acceptable output, NOT whether the modified skill produces acceptable output. Building AFTER modifying prevents this test.

**Meta-to-output ratio context:**
This project has a 2.6:1 infrastructure-to-product ratio (47,944 lines of planning vs 18,428 lines of output). The user watches for over-researching and under-building. Your job is EXECUTION and EXPERIMENTATION, not further analysis. If uncertain, build an experiment to test it, don't launch another research investigation.
```

### Addition 2: User Preferences Section (Insert After Section 2, Before Section 3)

```markdown
## SECTION 2.5: USER PREFERENCES AND ANTI-PATTERNS

### What the User Values

**Building over researching.** One experiment resolves more questions than another research report. The research phase is COMPLETE. Execute, don't re-analyze.

**"Both/and" thinking.** Rejects false dichotomies. If the Middle-tier experiment produces mixed results (designed BUT derivative), the user will want BOTH problems addressed, not a binary pass/fail verdict.

**Grounded in specifics.** Work backward from actual code and CSS, not forward from abstract descriptions. Prefer concrete examples over theoretical frameworks.

**Being challenged.** Genuine investigation over validation. If evidence contradicts a proposed modification, revise the modification, don't ignore the evidence.

### What the User Dislikes

**Over-engineering.** Don't add features, structure, or abstractions beyond what was explicitly requested. Three similar lines of code is better than a premature abstraction.

**Judgment rules.** Binary rules achieve 100% compliance; judgment rules achieve ~0%. Every constraint must be binary ("MUST" / "MUST NOT") or tier-gated ("Floor: EXEMPT. Middle: 2 scales.") or it will be ignored.

**Backwards-compatibility hacks.** If something is unused, delete it completely. No // removed comments, no _unused variables, no re-exports of deleted functions.

**Re-research when action is needed.** If uncertain about a modification, build a page to test it, don't analyze whether it's the right modification.

### The Prophylactic Paradox

The user's concern about rigidity ("these concrete mandates enter us in a state of rigidity that can go unchecked") is itself the SAFEGUARD against rigidity. The concern triggers reassessment. This project exists BECAUSE the user questioned whether modifications would create limiting rigidity. The concern should be PRESERVED, not resolved. If the user ever stops questioning whether the system is too rigid, THAT is when calcification begins.
```

### Addition 3: Vocabulary-Library Central Question (Insert in Section 1, After Line 88)

```markdown
## 1.6 THE CENTRAL OPEN QUESTION

**Is mechanism reuse (a) grammar usage (encouraged) or (b) template convergence (discouraged)?**

The Name Test and Transfer Test prove mechanisms are transferable in THEORY:
- "Border-weight encodes hierarchy" (mechanism) vs "4px bedrock border" (implementation)
- Same mechanism + different metaphor = different CSS values (transferable)

**But this has NEVER been tested in PRACTICE.**

The untested dimension: when a builder deploys 8-10 mechanisms from grammar/ to build a page with a COMPLETELY NEW metaphor (or no metaphor at Middle tier), does the result feel:
- **(a) Novel** -- genuinely new composition using familiar tools (like a new sentence in English), OR
- **(b) Derivative** -- structurally similar to showcase pages because high mechanism density creates a recognizable visual signature, regardless of the new metaphor?

**Why this matters for the Middle-tier experiment:**
Variant B scored 4/5 novelty with only 5/44 techniques. If it had deployed 15 techniques, it might have LOOKED more like showcase pages even with a different metaphor -- because CSS patterns (dark header, zone backgrounds, density rhythm, 2-zone DNA) create visual signatures that may dominate metaphor vocabulary.

**The Middle-tier experiment is THE FIRST PRACTICAL TEST of this question.**

If the Middle-tier page feels derivative despite different content:
- Anti-gravity needs to address mechanism COMBINATION divergence, not just metaphor divergence
- The tier model may need revision (mechanism density itself creates convergence)
- The vocabulary-library distinction needs operational enforcement beyond just architectural separation

If the Middle-tier page feels novel:
- grammar/ is confirmed as safe vocabulary that builders should use freely
- The tier model is validated
- The richness gap is primarily addressable through vocabulary deployment

**This outcome determines whether the entire skill enrichment approach is correct.**
```

### Addition 4: Decision Criteria Section (Insert After Section 6, Before Section 7)

```markdown
## SECTION 6.5: DECISION CRITERIA WHEN EXPERIMENTS PRODUCE UNEXPECTED RESULTS

### If Middle-Tier Experiment Results Are Mixed

**Middle feels designed + novel:**
- PROCEED to Wave 2 as planned
- Per-category minimum validated
- Tier model validated

**Middle feels designed + derivative:**
- REVISE M1 before adopting: add combination divergence requirement ("don't use the same mechanism COMBINATIONS as showcase pages")
- Consider strengthening Phase 3.5 to check mechanism profiles, not just metaphor domains
- This is a MAJOR finding -- consult user before proceeding

**Middle feels under-designed + novel:**
- Tier boundary may be wrong (Middle needs more than 8-10 mechanisms)
- REVISE tier model, not M1
- Consider raising Middle to 10-12, moving current Middle definition to Floor

**Middle feels under-designed + derivative:**
- Current skill is insufficient
- Wave 1 modifications VALIDATED
- Proceed as planned

### When to Modify Skill vs Methodology vs Tier Model

**Modify the skill when:**
A concrete instruction consistently produces a specific measurable failure.
Example: "sample 2-4 mechanisms" consistently produces pages with fewer than 5 mechanisms when the tier model expects 8-10.

**Modify the methodology when:**
The process structure prevents discovery.
Example: if single-pass building consistently misses opportunities that audit-fix cycles would catch, add mandatory audit passes.

**Modify the tier model when:**
Experimental results contradict tier boundary predictions.
Example: if Middle-tier pages achieve the "place" feeling without metaphor, the Ceiling tier ambition shifts.

**Do NOT modify anything when:**
Results match predictions within acceptable variance. The system is working -- resist the urge to optimize what is already adequate.

### What to Do If Container Width STILL Gets Violated After M3

Do NOT add more guardrails. The problem is ENFORCEMENT, not specification.
- Check if M3 was applied correctly (NON-NEGOTIABLE language present?)
- Check if the builder read it (was it in the always-load protocol section?)
- If yes to both, the issue is binary-rule compliance, not constraint completeness
- Solution: move container width to a BLOCKING GATE (cannot proceed to Phase 5 without CSS evidence that container is 940-960px)
```

### Addition 5: What the Experiment Actually Tests (Insert in CHECKPOINT Section, Line 1002)

```markdown
**The Middle-tier experiment answers THE central question:** Does Middle achieve richness through pattern deployment alone?

**What you are testing:**
1. Does non-metaphor composition cross the "designed" threshold? (engagement, not just formatting)
2. Does 8-10 mechanism deployment feel like grammar usage (novel) or template convergence (derivative)?
3. Does the content-type-to-pattern mapping work? (CRESCENDO for tutorial = good fit?)
4. What is the actual build time? (validates or overturns 70-100 min estimate)

**How to evaluate:**
- **Soul compliance:** 0 violations expected (binary pass/fail)
- **Container width:** 940-960px expected (binary pass/fail)
- **Mechanism count:** 8-10 deployed across 5 categories (count + breadth check)
- **Engagement threshold:** "Does this feel designed or formatted?" (subjective judgment)
- **Novelty check:** "Does this look too similar to showcase pages despite different content?" (THE critical question)
- **Comparison test:** Side-by-side with Variant B (should feel richer) AND OD-004 (should feel different, not derivative)

**Decision after experiment:**
- If Middle produces good novel results -> proceed to Wave 2
- If Middle feels derivative -> revise M1 to add combination divergence requirement BEFORE Wave 2
- If Middle feels under-designed -> tier model boundary wrong, consult user
- If Middle violates container width -> M3 needs GATE not just guardrail
```

---

## PART 6: CONTINUITY GAPS SUMMARY

### CAPTURED WELL (✅)
1. Container width as THE primary failure mode -- prominence matches research
2. "Sample 2-4 mechanisms" as single most limiting spec -- correct priority
3. Tier model numbers (mechanisms, CSS lines, build times) -- accurate
4. Binary rule formatting principle -- present with examples
5. Modification specifications (M1-M11) -- surgically precise
6. File manifest and execution dependencies -- excellent

### PARTIALLY CAPTURED (⚠️)
1. Binary rules as ARCHITECTURAL principle (decomposition into micro-gates) -- mentioned but underexplained
2. WHY per-category minimum works (structure vs counting) -- specification present, rationale thin
3. User sensitivity to over-engineering -- flagged in anti-patterns but understated
4. Modification interaction effects -- warned against "checklist factory" but not fully explored

### CRITICALLY MISSING (❌)
1. **Experiment-first methodology** -- execution order contradicts continuity docs
2. **Meta-to-output ratio (2.6:1)** -- the context for why experiments > modifications
3. **User preference: building over researching** -- absent
4. **User's "both/and" thinking** -- not mentioned
5. **The central open question** (vocabulary-library practical test) -- buried in 2 sentences
6. **Decision criteria when experiments fail** -- what to do if Middle feels derivative/under-designed
7. **WHY modifications are experiment-gated** -- waves presented as sequence, not contingency
8. **WHEN to modify skill vs methodology vs tier** -- decision tree absent

---

## PART 7: IMPACT ON NEW INSTANCE BEHAVIOR

### What a New Instance Will Likely Do (WITH current prompt):
1. Read the entire prompt (good)
2. Create a comprehensive modification plan (good)
3. Apply PRE-1 category labels (good)
4. **Apply Wave 1 modifications M2, M3, M5, M8 (WRONG -- should build experiment first)**
5. Build a Middle-tier page with the MODIFIED skill (WRONG -- should use current skill)
6. Evaluate "does it feel designed?" (INCOMPLETE -- missing "does it feel derivative?")
7. Proceed to Wave 2 regardless of results (WRONG -- should be contingent on experiment)

### What a New Instance SHOULD Do (WITH additions):
1. Read entire prompt
2. Create modification plan
3. Understand experiment-first priority (NEW)
4. Apply PRE-1 only (category labels)
5. Build Middle-tier page with CURRENT unmodified skill using prompt-level instructions
6. Evaluate BOTH questions: designed? AND derivative?
7. IF designed + novel -> apply Wave 1, proceed to Wave 2
8. IF designed + derivative -> revise M1, consult user before Wave 2
9. IF under-designed -> revise tier model, consult user

---

## RECOMMENDATIONS

### Priority 1: BLOCKING (Must Add Before Prompt Can Be Used)

**Add Experiment-First Preamble (Addition 1)**
- Placement: After line 19, before Section 1
- Why critical: Current execution order contradicts the content adversary's key finding
- Without this: New instance will modify THEN build, preventing the experiment from testing current skill output

**Add Central Open Question Section (Addition 3)**
- Placement: After line 88 in Section 1
- Why critical: The Middle-tier experiment could FAIL in a way the prompt doesn't anticipate
- Without this: New instance won't check for derivative feeling, may proceed with flawed modifications

**Add Decision Criteria Section (Addition 4)**
- Placement: After Section 6, before Section 7
- Why critical: Mixed experimental results need a decision tree, not just "pass/fail"
- Without this: New instance will have no guidance when Middle feels designed BUT derivative

### Priority 2: HIGH VALUE (Improves Decision-Making Quality)

**Add User Preferences Section (Addition 2)**
- Placement: After Section 2, before Section 3
- Why valuable: Conveys when to stop and ask vs proceed autonomously
- Without this: New instance may over-research or over-engineer solutions

**Enhance Experiment Evaluation Criteria (Addition 5)**
- Placement: Expand CHECKPOINT section lines 1000-1007
- Why valuable: THE critical evaluation question is "designed?" AND "derivative?"
- Without this: New instance will miss the novelty check that determines if vocabulary-library is resolved

### Priority 3: NICE TO HAVE (Clarifies Rationale)

**Expand Binary Rules Explanation**
- Show per-category minimum as EXAMPLE of decomposition into micro-gates
- Connect to 100% vs ~0% compliance evidence from Phase D

**Add Efficiency Arguments**
- M5 saves 60 min x 30 pages = 30 hours at scale
- Tier routing isn't "nice to have," it's cost reduction for 40-50% of builds

**Strengthen "WHY" Sections**
- M1: why per-category beats raw count (structure vs counting principle)
- M2: why fractal gate proven (enabling, content-agnostic, scope-calibrated)
- Wave ordering: why experiment-gated not arbitrary

---

## CONCLUSION

**The master prompt is mechanically excellent but strategically incomplete.**

It will enable a new instance to create a comprehensive modification plan and execute it with surgical precision. But it will lead them to execute in the WRONG ORDER (modify first, build second) and miss THE CRITICAL EVALUATION DIMENSION (does high mechanism density create derivative feeling?).

**The 5 additions above transform the prompt from:**
- "Here's how to implement 11 modifications" (current)

**To:**
- "Here's how to test whether these modifications are correct, and what to do when experiments produce unexpected results" (needed)

**Without these additions:**
A new instance will produce a perfectly-formatted skill file that may encode the wrong specifications, because they'll validate modifications against modified output instead of testing them against current-skill baseline.

**With these additions:**
A new instance will understand that this is an EXPERIMENTAL EXECUTION, not a deterministic implementation -- that the Middle-tier experiment could INVALIDATE M1, that "derivative feeling" is a failure mode, and that the user values building experiments over perfecting plans.

---

**END CONTINUITY AUDIT**
