# Supplemental Synthesis: Integrating Wave 3+4 Reports into the Main Recommendation

**Agent:** supplemental-synthesizer (Task #37)
**Date:** 2026-03-01
**Input:** Main synthesis (06-SYNTHESIS-RECOMMENDATION.md) + 7 Wave 3/4 reports (12-18)
**Architecture:** Three SEPARATE skills (TC, build-page-v2, PA), each using TeamCreate. TC is NOT merged into build-page-v2. Rotation DEFERRED.

---

## 1. VOCABULARY FILE STATUS: What Needs Cleaning Before the Experiment?

The Wave 3/4 reports reveal the design system's vocabulary files have significant debt that would contaminate any experiment comparing static vs dynamic Side B. The cleaning falls into three categories: BLOCKING (must fix before experiment), IMPORTANT (should fix but won't invalidate results), and DEFERRED (fix later).

### BLOCKING (Fix Before Experiment)

**B1. Callout API has 4 incompatible implementations** (Report 14, Section 10)
- `compositional-core/components/components.css` -- parameterized `.callout` + variants, but with rgba backgrounds that VIOLATE prohibition #4
- `compositional-core/components/components-dd-od.css` -- `.callout` with different variable structure
- `compositional-core/components/components-cd-tt.css` -- `.callout` with opaque backgrounds (CORRECT)
- `implementation/component-system/css/callouts.css` -- completely different class names (`.gotcha-box`, `.essence-box`, etc.)

**Why blocking:** Dynamic agents reading these files will encounter contradictory APIs and prohibition violations in the vocabulary they're supposed to internalize. This muddies the "can agents derive adequate understanding?" signal.

**Fix:** Pick ONE canonical callout (Report 14 recommends: parameterized `.callout` approach from merged components.css, but with opaque backgrounds from CD-TT extraction). Remove the other 3 implementations or mark them clearly as superseded.

**B2. 13 prohibition violations in CSS files** (Report 14, Section 5)
- 5x rgba backgrounds in callout variants (violates prohibition #4)
- 2x `background: white` / `color: white` (violates prohibition #6)
- 2x off-grid spacing: 6px and 10px (violates spacing grid)
- 2x 2px border token usage (violates prohibition #9)
- 2x other

**Why blocking:** If dynamic agents read identity files that say "NEVER" and then read component files that violate those rules, they will either (a) conclude the rules aren't real, or (b) be confused about the system's actual character. Either outcome corrupts the experiment.

**Fix:** Resolve all 13 violations. Replace rgba with opaque palette values. Replace `white` with token references. Fix off-grid spacing.

**B3. Tension-test metaphor components in merged components.css** (Report 14, Section 6B)
- Lines 828-895 contain `.stratum`, `.floor`, `.room`, `.compression-grid` -- metaphor-specific implementations from prior tension tests
- These violate anti-gravity protocol (builders should not see prior metaphor implementations)

**Why blocking:** These are exactly the kind of pre-baked conclusions that the dynamic Side B experiment is trying to avoid. If agents read components.css and encounter geological-strata class names, they've been exposed to a specific metaphor.

**Fix:** Remove `.stratum`, `.floor`, `.room`, `.compression-grid`, `.compression-cell` from merged components.css entirely. They belong in case studies, not the component library.

### IMPORTANT (Fix Before Full TC Skill Update, Not Necessarily Before Mini-Experiment)

**I1. `max-width: 1100px` contradicts 940-960px spec** (Report 14, Section 4)
Two hardcoded instances of 1100px in section-zone and breathing-zone. The pipeline specifies 940-960px.

**I2. Duplicate type scale** (Report 14, Section 1A)
`--text-*` and `--type-*` scales with different values. No guidance on which is canonical.

**I3. Identity files use COMPLIANCE framing, not WORLD-DESCRIPTION** (Report 12)
The identity-auditor found 22 "NEVER" instances, 14 "SOUL VIOLATION" instances. The files work for the experiment as-is (dynamic agents can still derive understanding from compliance-framed files), but world-description framing would produce better engagement. The System Reading Protocol is designed to work with either framing (Report 16, Section 6).

**I4. Rules embedded in mechanism-catalog.md** (Report 13, Findings F4)
Transition Grammar (lines 625-707), Restraint Protocol (lines 710-748), and per-category selection protocol (line 46) are RULES masquerading as vocabulary. These should be extracted to validation/gates.

### DEFERRED (Post-Experiment)

- Identity files consolidation (2 files + README -> 1 `world.md` at ~150 lines) (Report 12, Section 7)
- Missing CSS capabilities (container queries, dark mode, print styles) (Report 14, Section 7)
- Border-left mechanism consolidation (#1, #2, #9, #10 -> single "Border-Left Encoding") (Report 13, Finding F2)
- Identity-locked mechanisms (#13, #14, #17) reclassification (Report 13, Finding F3)
- Pipeline metadata removal from component files (Report 14, Section 6D)

---

## 2. FIRST EXPERIMENT FILE SET: Exact Files with Line Counts and Caveats

The DD provenance inventory (Report 15) establishes the corpus for the Side B mini-experiment. Combined with the experiment design (Report 18), here is the definitive file set.

### Mini-Experiment File Set (Side B Validation, ~$3-5)

This is the experiment from Report 18 Section 2. These are the files agents READ, not the DD corpus.

**Static Group (Control) receives:**
- Extracted static Side B text from current SKILL.md lines 184-218, 281-297, 370-382 (~110 lines total)

**Dynamic Group receives (~2,400 lines across 6 files):**

| # | File | Lines | Caveat |
|---|------|-------|--------|
| 1 | `design-system/compositional-core/identity/prohibitions.md` | 419 | Contains 5 PIPELINE-ARTIFACT rules (#8, #19-22) and 4 CHANNELING rules (#15, #17, #18, plus elements in #9-10). Agents read as-is; this IS the test. |
| 2 | `design-system/compositional-core/vocabulary/tokens.css` | 183 | Contains `--bg-page: #FAFAFA` which may contradict prohibition #16. Contains spacing maximum RULES embedded in token file. |
| 3 | `design-system/compositional-core/identity/soul-constraints.md` | 342 | 342 lines for 3 rules (114:1 explanation ratio). Pipeline-era framing throughout. |
| 4 | `design-system/compositional-core/grammar/mechanism-catalog.md` | 751 | Presented as exhaustive (18 mechanisms) but actually illustrative. Contains prescription creep in Transition Grammar + Restraint Protocol sections. 3 identity-locked mechanisms (#13, #14, #17). |
| 5 | `design-system/compositional-core/grammar/compositional-rules.md` | 527 | Low pipeline bias. Structural rules with HTML/CSS evidence. |
| 6 | `design-system/compositional-core/vocabulary/tokens-mutability.md` | 424 (first 200) | Token lock/mutable classification rationale. |

**Hybrid Group receives:** Same 6 files + System Reading Protocol (~40 lines from Report 16)

**Caveat summary:** Files 1-4 all have known contamination (pipeline artifacts, prescription creep, channeling, prohibition violations). This is ACCEPTABLE for the mini-experiment because the question is "can agents derive adequate understanding from these files AS THEY ARE?" -- not from idealized files. If agents succeed despite the contamination, the approach is robust. If they fail, we need to determine whether the contamination or the approach caused the failure.

### DD Corpus File Set (For Full TC Experiment After Mini-Experiment Validates)

From Report 15's recommended set (15 core files, ~11,099 lines + 4.2 MB screenshots):

**Core (must include):**

| # | File | Lines | Pipeline Bias | Role |
|---|------|-------|---------------|------|
| 1-6 | DD-001 through DD-006 HTML explorations | 6,259 | Headers YES, body NO | The creative work |
| 7-9 | DD-003, DD-004, DD-006 case studies | 1,210 | MODERATE (scores, anti-prescription framing) | Process narrative |
| 10 | R3-DENSITY-DIMENSIONS.md | 553 | LOW (research IDs only) | Original research foundation |
| 11 | DD-outbound-findings.md | 232 | HEAVY (pipeline doc) but contains unique finding definitions | Formal DD-F-001 to DD-F-018 |
| 12 | STAGE-HEADER.md | 244 | HEAVY | Narrative of vocabulary discovery |
| 13 | components-dd-od.css | 555 | LOW (confidence tags) | Genuine reusable CSS |
| 14 | mechanism-combinations.md | 447 | MODERATE (tier terminology) | Cross-exploration grammar |
| 15 | compositional-rules.md | 527 | LOW | Structural grammar |

**Supplementary (if context budget allows):**
- 6 screenshots (DD-001 to DD-006, ~4.2 MB) -- recommended for perceptual evaluation
- semantic-rules.md (529 lines) -- component selection criteria
- density-patterns.md (342 lines) -- formal pattern definitions with CSS (contains scores)

**Key caveats from Report 15:**
1. All 6 HTML explorations have pipeline-era threading headers (scores, compliance %, tier labels). Body content is genuine. Agents should be told threading headers are metadata.
2. Only 3 of 6 explorations have case studies (DD-003, DD-004, DD-006). DD-001, DD-002, DD-005 rely on HTML source alone.
3. dd-003-islands-visual.md appears mislabeled (contains OD-001 content). Exclude or flag.
4. R3 research exists in two copies. Include only one (research/ version, 553 lines).
5. DD-006 has 20+ inbound references -- it is the crown jewel. Experiment should reflect its centrality.

---

## 3. DYNAMIC SIDE B PROTOCOL: Concrete Implementation Summary

Three reports converge on the implementation: the System Reading Protocol design (Report 16), the depth guarantees (Report 17), and the experiment design (Report 18).

### What Goes Into the TC Skill (~20-40 lines)

**MVP Version (Report 16, Section "Minimum Viable Version", ~20 lines):**

```
PHASE 2A: SYSTEM READING

Read the design system's identity files. You have already questioned the content (Phase 1).
Now read the system that will HOUSE that content.

1. READ: The system's constraint/prohibition files and design tokens.
   - What does this system REFUSE? (Its character is defined by refusals.)
   - What VALUES does it offer? (Colors, fonts, spacing, borders.)

2. CHARACTERIZE: In one sentence containing "but" or "yet",
   describe the system's personality:
   "[The system is/does X] yet [also Y]"
   The contradiction in this sentence is the system's internal tension.

3. MAP AGAINST CONTENT:
   - Which content needs (Phase 1) can the system serve DIRECTLY?
     (Zero-tension: assembly territory.)
   - Which content needs CONFLICT with the system's personality?
     (High-tension: metaphor territory.)
   - Which conflicts intersect with the system's internal tension?
     (Richest creative territory.)

4. PROCEED to tension derivation with your understanding of BOTH sides.
```

**Net line impact:** Removes ~80 lines (static Side B, personality spectrum, soul test, tension landscape, domain lists, CSS channel specifics). Adds ~20-40 lines. Net: -40 to -60 lines.

### What Ensures Depth (Report 17, 5 Binary Checks)

Self-verification embedded in the skill, applied after Phase 2A completes:

```
DEPTH VERIFICATION (all must pass before proceeding to tension construction):
[ ] TENSION: You identified >= 1 internal tension WITHIN the design system
[ ] GENERATIVE: You described >= 1 constraint as creating possibilities, not just preventing
[ ] CHARACTER: You used >= 1 character word (decisive, honest, editorial...) not just properties
[ ] CAUSATION: You linked >= 1 constraint to character with "because" or equivalent
[ ] SURPRISE: You noted >= 1 thing that complicated your initial understanding
```

If 1-2 fail: re-engage with the specific dimension. If 3+ fail: re-run Phase 2A with more deliberate reading.

**Why binary:** The project's own discovery: binary rules achieve 100% compliance; judgment rules achieve ~0%. These checks verify DEPTH OF PROCESS, not CORRECTNESS OF CONCLUSION.

### What the Agent Reads (Minimum File Set)

The System Reading Protocol specifies FILE TYPES, not specific paths:
1. The system's prohibitions/constraints file (what it refuses)
2. The system's design tokens file (the vocabulary of values)
3. Optionally: soul-constraints, mechanism-catalog, components

When integrated with build-page-v2, the orchestrator provides the specific file paths.

### The Curated Personality as Validation Artifact

Per the main synthesis Section 5B: if the design system provides a `system-personality.md` file (curated personality spectrum, observed tensions, domain notes), the agent reads it AFTER forming their own characterization. Divergences trigger investigation, not blind acceptance.

This preserves accumulated wisdom while enabling content-sensitive engagement.

---

## 4. PRE-EXPERIMENT VALIDATION: Should We Run the $3-5 Mini-Experiment First?

### YES. Unambiguously.

Report 18 designs a concrete experiment that answers the foundational question before we invest in the full TC skill update. The arguments:

**Why run it:**

1. **It directly tests the adversarial reviewer's core challenge** (Report 10, Challenge 4): "The agent might read files and derive a WORSE understanding than the carefully crafted summary." This is not a theoretical question -- it has a concrete $3-5 test.

2. **It isolates the ONE variable** that matters most for the dynamic Side B decision: can agents derive adequate understanding from files? The full TC skill update conflates this with Phase 3 broadening, conviction brief changes, pipeline stripping, etc. The mini-experiment isolates the Side B question cleanly.

3. **7 agents + 1 blind evaluator is sufficient for signal detection.** N=7 is small but the scoring rubric (12 questions x 3 levels x 7 agents) produces enough data to distinguish the 4 hypotheses (Report 18, Section 4).

4. **It resolves the biggest open question with the cheapest possible test.** The depth-guarantees report (Report 17) provides the binary checks that will ensure depth in production. But we need to know whether the APPROACH works before embedding the checks in the skill.

5. **Results directly inform architecture decisions.** If Hypothesis A (dynamic worse): keep static. If B (dynamic better): proceed with Approach C. If C (hybrid better): System Reading Protocol is mandatory. If D (no difference): decide on portability/maintenance grounds.

**What it costs:** ~$3-5, ~20-30 minutes. 7 Sonnet agents + 1 Opus evaluator.

**What it gates:** The entire dynamic Side B implementation. Without this test, we're implementing the main synthesis's recommendation based on theory alone -- which is exactly what the adversarial reviewer warned against.

**Specific recommendation:** Run the mini-experiment BEFORE cleaning the vocabulary files. The experiment tests whether agents can derive understanding from files AS THEY ARE (with contamination). This gives us a floor reading. If agents succeed despite the debt, the approach is robust. If they fail, we investigate whether cleaning would help.

### Experiment Execution Order

```
1. Run $3-5 mini-experiment (Side B validation) on current files
   -> If Hypothesis A: STOP. Keep static Side B. Re-evaluate approach.
   -> If Hypothesis B/C/D: PROCEED.
2. Clean BLOCKING vocabulary issues (B1-B3 above)
3. Draft updated TC skill with dynamic Side B
4. Run full TC experiment (old skill vs new skill on same content)
5. Clean IMPORTANT issues (I1-I4)
6. Draft PA and build-page-v2 skills
```

---

## 5. REVISED NEXT STEPS: Actual Sequence of Work From Here

The main synthesis proposed 7 ordered steps (Section 12). The Wave 3/4 reports modify this sequence.

### Updated Sequence

**Step 0: Run the Side B mini-experiment** (~$3-5, ~30 min)
- Report 18's design is implementation-ready (prompt templates, scoring rubric, decision tree)
- Resolves the foundational question: static vs dynamic vs hybrid Side B
- GATES all subsequent steps

**Step 1: Apply BLOCKING vocabulary fixes** (~1-2 hours)
- B1: Resolve callout API (pick canonical implementation)
- B2: Fix 13 prohibition violations in CSS files
- B3: Remove tension-test metaphor components from merged components.css

**Step 2: Draft the updated TC skill** (~400-450 lines)
- Based on main synthesis KEEP/REMOVE/TRANSFORM table (Section 3)
- Side B approach informed by Step 0 results
- MVP System Reading Protocol (~20 lines) if mini-experiment validates
- 5 binary depth checks from Report 17
- Broadened Phase 3 with guardrails from main synthesis Section 6
- Self-commitment replacing conviction brief
- Perception prompts from main synthesis Section 7C

**Step 3: Draft the updated PA skill** (~450 lines)
- Based on Report 07's extraction of process content
- Remove TEAM.md (840 lines), GATES.md (534 lines), most of PROTOCOL.md (200 lines)
- Keep: One Rule, Cold Look, 28 questions, language constraint, sovereignty principle
- Design for TeamCreate invocation (3-5 auditors + 1 weaver)

**Step 4: Draft the thin build-page-v2 orchestrator** (~150-200 lines)
- Based on Report 09's architecture
- Spawns ONE Opus agent with TC + building instructions
- Captures screenshots, runs gate runner
- Invokes PA via TeamCreate
- Routes on verdict (SHIP/REFINE/RETHINK)

**Step 5: Create `system-personality.md`** in design system identity directory
- Curated personality spectrum (moved from TC)
- Observed tension landscape (as observations, not prescriptions)
- Domain compatibility notes (as historical data, not as restrictions)
- Agent reads AFTER forming own characterization (validation artifact, not authority)

**Step 6: Apply IMPORTANT vocabulary fixes** (I1-I4)
- Resolve 1100px vs 940-960px container width
- Reconcile duplicate type scales
- Extract rules from mechanism-catalog.md to validation layer
- Optionally begin identity file rewrite (RULES -> WORLD-DESCRIPTION)

**Step 7: Run the updated system on known content**
- Same content as previous pipeline runs (Gas Town or equivalent)
- Compare: old pipeline output vs new 3-skill output
- This is the main validation experiment

**Step 8: Run model experiments** (if Step 7 results warrant)
- Single-agent vs two-agent for TC+building
- Opus vs Sonnet for builders

### What Changed vs Main Synthesis Section 12

| Main Synthesis Step | Change | Reason |
|---------------------|--------|--------|
| 1. Draft TC skill | Now Step 2, gated by mini-experiment (Step 0) | Can't finalize Side B approach without test data |
| 2. Draft PA skill | Now Step 3 (unchanged priority, just renumbered) | No dependency on mini-experiment |
| 3. Draft build-page-v2 | Now Step 4 (unchanged) | -- |
| 4. Create system-personality.md | Now Step 5 (unchanged) | -- |
| 5. Run on known content | Now Step 7 (after vocabulary fixes) | Contaminated files would corrupt comparison |
| 6. Single vs two agent experiment | Now Step 8 (conditional) | Only if Step 7 results warrant deeper investigation |
| 7. Opus builder experiment | Merged into Step 8 | -- |
| NEW: Step 0 mini-experiment | Added | Reports 17+18 provide implementation-ready design |
| NEW: Step 1 vocabulary fixes | Added | Reports 12+13+14 found blocking issues |
| NEW: Step 6 important fixes | Added | Reports 12+13+14 found important non-blocking issues |

---

## 6. CONTRADICTIONS: Does Anything Change the Main Synthesis?

### 6A. No contradictions that reverse any major recommendation

All 7 Wave 3/4 reports REINFORCE the main synthesis's Path B recommendation. None contradict the core architecture (three separate skills, dynamic Side B, broadened Phase 3, pipeline content removal).

### 6B. Refinements that STRENGTHEN the main synthesis

**R1. The identity-auditor's WORLD-DESCRIPTION reframing** (Report 12) strengthens the case for dynamic Side B. If identity files are rewritten from compliance mode ("NEVER use border-radius > 0") to world mode ("KortAI surfaces are sharp -- corners cut with authority"), the System Reading Protocol becomes even more effective. The protocol works with either framing, but world-description invites deeper interpretive engagement. This is a post-experiment enhancement, not a blocker.

**R2. The mechanism-catalog is illustrative, not exhaustive** (Report 13, Finding F1). The main synthesis's recommendation to broaden Phase 3 from "domain metaphors" to "compositional ideas" is SUPPORTED by the finding that the mechanism catalog itself is a compressed observation set, not a complete vocabulary. The catalog's 18 mechanisms reflect the DD/OD/CD research path, not the full CSS composition space. At least 9 additional techniques from those same explorations were never cataloged.

**R3. Prescription creep confirmation** (Reports 13+14). The mechanism catalog's Transition Grammar mandates exactly 3 transition types ("'No transition' is NOT a valid option"), and the Restraint Protocol sets density caps. These are RULES in the VOCABULARY file -- exactly the pattern the main synthesis identifies as problematic. Extracting rules to validation/gates strengthens the vocabulary-as-menu principle.

**R4. The depth guarantees provide the safety net** (Report 17). The adversarial reviewer's concern that dynamic Side B could produce shallow engagement is now addressed with a concrete, binary verification protocol. The 5 checks (tension, generative constraint, character vocabulary, causal reasoning, surprise) verify depth without prescribing conclusions. This is the missing piece from the main synthesis -- it was recommended but not designed.

### 6C. New information that MODIFIES specific recommendations

**M1. The mini-experiment should run BEFORE vocabulary cleaning** (from Report 18 Section 7 + Report 15's contamination analysis). The main synthesis assumed clean files. Reports 12-14 reveal significant debt. Testing on AS-IS files gives us a floor reading and tests robustness. If agents succeed despite contamination, the approach is strong. This changes the execution order but not the direction.

**M2. The identity files have more value than the main synthesis implied** (Report 12). The main synthesis treated identity file updates as a post-experiment cleanup item. Report 12 shows the identity content is GENUINE and STRONG (13 of 22 rules are true identity), but buried under pipeline enforcement scaffolding. The compliance framing CAUSED the loopholes it then had to patch (prohibition #4 bans semi-transparent backgrounds; the callout CSS uses rgba everywhere). Rewriting to world-description is not cosmetic -- it would prevent builders from finding loopholes because they'd understand WHY, not just WHAT. Priority should be elevated to Step 6.

**M3. The DD corpus needs "BODY vs HEADER" guidance** (Report 15, Key Finding). The 6 DD HTML explorations have clear pipeline metadata in threading headers (scores, compliance %, tier labels) but genuine creative work in their body content. Any agent ingesting the corpus needs explicit instruction: "Threading headers are provenance metadata. Focus on the actual HTML structure, CSS styling, and content composition." This is a one-line addition to any prompt that references DD files.

**M4. The mechanism catalog needs more than reframing** (Report 13). The main synthesis recommended making the catalog "illustrative, not exhaustive." Report 13 goes further: (a) consolidate 4 border-left mechanisms into 1 with 3 dimensions, (b) flag 3 identity-locked mechanisms, (c) add missing horizontal composition mechanisms, (d) rename #12 from "Progressive Disclosure" (wrong) to "Density Gradient Flow" (accurate). These are substantive vocabulary improvements that would make the catalog a better input for the System Reading Protocol.

### 6D. Tensions between Wave 3/4 reports

**T1. Report 17 wants 3 files (prohibitions + soul-constraints + tokens); Report 18 wants 6 files.** The depth-guarantees report argues 3 files are "necessary and sufficient" for Side B derivation. The experiment design includes mechanism-catalog, compositional-rules, and tokens-mutability.

**Resolution:** Both are right at different levels. 3 files are sufficient for IDENTITY derivation (personality, character, internal tensions). 6 files are better for VOCABULARY assessment (what the system can express). The mini-experiment should test with 6 files (the harder test). If agents succeed, we know 6 works. A follow-up could test whether 3 is sufficient.

**T2. Report 16 has two versions: full (~40 lines) and MVP (~20 lines).** The MVP drops the 24 detailed questions, the vocabulary breadth analysis, the generative constraints identification, and the self-documentation enhancement.

**Resolution:** Start with MVP. Report 17's 5 binary depth checks catch shallow engagement even without the detailed questions. If the mini-experiment shows agents need more scaffolding (Hypothesis C), upgrade to the full protocol.

---

## Summary

The 7 Wave 3/4 reports provide three things the main synthesis lacked:

1. **Ground truth about vocabulary file health.** The design system files have 13 prohibition violations, 4 incompatible callout APIs, metaphor-specific components in the general library, and pipeline-era enforcement scaffolding throughout identity files. These must be addressed on a known timeline.

2. **A concrete depth guarantee mechanism.** The 5 binary checks from Report 17 transform "we hope agents engage deeply" into "we verify agents engaged deeply." This is the safety net that makes dynamic Side B viable.

3. **An implementation-ready mini-experiment.** Report 18's design ($3-5, 7+1 agents, blind evaluation, 4 hypotheses, concrete decision tree) is the cheapest possible test of the foundational question. Running it first de-risks the entire TC skill update.

The main synthesis's Path B recommendation stands. The Wave 3/4 reports add a validation gate (mini-experiment), a safety mechanism (depth checks), and a cleanup roadmap (vocabulary fixes) that make the path more concrete and lower-risk.

---

*This supplement integrates findings from Reports 12 (identity-auditor), 13 (mechanism-auditor), 14 (css-auditor), 15 (dd-provenance-inventory), 16 (system-reading-protocol), 17 (depth-guarantees), and 18 (dynamic-sideb-experiment) into the main synthesis (06-SYNTHESIS-RECOMMENDATION.md). No major recommendations are reversed; all are refined or strengthened.*
