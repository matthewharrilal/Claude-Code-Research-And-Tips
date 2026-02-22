# TC Skill Implications for /build-page Integration

**Agent:** tc-skill-implications (Opus)
**Date:** 2026-02-20
**Files Read:** SKILL.md (1,946 lines, all 6 phases), build-page/SKILL.md (477 lines), mechanism-catalog.md (999 lines)

---

## Section 1: Sub-Skill Awareness

### Does the TC skill know it's a sub-skill?

**NO.** The TC skill was written as a standalone end-to-end process. Multiple sections assume it drives the ENTIRE composition:

**Evidence of standalone assumptions:**

1. **Phase 5 Output specification (lines 1613-1663):** Phase 5 specifies TWO outputs:
   - Output A: "Conventions Brief (Telescope Distillate, ~60-80 lines)" -- This IS approximately what /build-page expects as the TC brief
   - Output A-Full: "The Thought Process Document (for reference/audit)"
   - Output B: "The HTML Compositional Layout" -- This is a COMPLETE HTML page. The TC skill expects to BUILD THE PAGE ITSELF.

2. **Phase 4 is full implementation (lines 793-1498):** Phase 4 is titled "Compositional Layout Generation" and includes:
   - Phase 4.0: Perceptual guardrails with CSS values
   - Phase 4.1-4.2: Mechanism extraction + translation grammar
   - Phase 4.3: Coherence checking with multi-coherence rules
   - Phase 4.4-4.5: Component inventory and adapt-vs-invent decisions
   - Phase 4.6: Transition grammar with specific CSS values
   - Phase 4.7: Fractal consistency GATE
   - Phase 4.7B: Landmark completeness GATE
   - Phase 4.8: Section-aware composition
   - Phase 4.9: Tokenization self-check

   This is a BUILDER PHASE, not a planning phase. The TC skill's Phase 4 does what the /build-page builder does in Wave 1.

3. **Library prohibition timing (lines 95-116, 1005-1057):** The TC skill prohibits library access until Phase 4 (mechanism catalog) and Phase 5 (case studies). This makes sense for a standalone pipeline but creates a question: does the TC agent in /build-page get library access at all? The /build-page spec tells the TC agent to "Execute Phases 0-3" and "DO NOT proceed to Phases 4-5." This means the TC agent NEVER accesses the mechanism catalog.

4. **Guardrail enforcement (lines 830-934):** Phase 4.0 contains all perceptual guardrails (container width, CPL, typography spacing). If TC stops at Phase 3, these guardrails are NOT communicated to the TC agent -- they only appear in Phase 4.

### The core mismatch:

The TC skill was designed so that Phases 0-3 are ANALYSIS and Phases 4-5 are IMPLEMENTATION. In /build-page, the TC agent is asked to stop after analysis. This is architecturally clean -- **analysis and implementation are genuinely separable** -- but the TC skill doesn't know it should format its Phase 3 output for consumption by a DIFFERENT agent.

### What the TC skill needs:

1. An **output format section** between Phase 3.5 and Phase 4 specifying what to write when operating as a sub-skill
2. **Awareness that Phases 4-5 are NOT its responsibility** when invoked by /build-page
3. Guidance on **brief LENGTH** (the ~50 line target from /build-page)
4. A **mode flag** concept: "standalone" (run all phases) vs "sub-skill" (stop at Phase 3.5, output brief)

---

## Section 2: Phase Separability

### Can Phases 0-3 run independently?

**YES -- with one critical gap.** Phases 0-3 are cleanly separable:

| Phase | What It Does | Standalone? | Dependencies |
|-------|-------------|-------------|--------------|
| Phase 0 | Content assessment + classification | YES | Content file only |
| Phase 1 | Multi-axis questioning | YES | Phase 0 output |
| Phase 2 | Tension derivation + richness scoring | YES | Phase 1 output |
| Phase 3 | Metaphor collapse + composite scoring | YES | Phase 2 output |
| Phase 3.5 | Metaphor commitment + divergence check | YES | Phase 3 output + _INDEX.md titles |

Phase 3/3.5 does NOT assume Phases 4-5 will follow -- it outputs a committed metaphor with full justification. The "LOCKED IN" language at the end of Phase 3.5 (line 789) is a gate declaration, not a dependency.

### What's LOST by stopping at Phase 3:

1. **Mechanism selection (Phase 4.0-4.1):** The TC skill's Phase 4 selects which of the 18 mechanisms serve the metaphor, extracts 5-category physical properties, and maps them to CSS channels. This is the critical TRANSLATION step from abstract metaphor to concrete CSS. Without it, the builder must perform this translation independently.

2. **Coherence planning (Phase 4.3):** Multi-coherence binding rules, transition table, and direction mapping. The builder in /build-page gets this from the conventions brief instead.

3. **Fractal echo table (Phase 4.7):** The 5-scale fractal coherence gate. Again, the builder handles this.

4. **Pacing prediction (Phase 4.2B):** The heuristic that flags dead-zone risk based on the metaphor's transition model. This is a PRE-IMPLEMENTATION assessment that SHOULD be part of Phase 3's output.

### The critical gap: Mechanism selection timing

In standalone TC, the agent derives a metaphor (Phase 3) and THEN reads the mechanism catalog (Phase 4.0). In /build-page, the TC agent never reads the mechanism catalog -- the builder does. But the TC agent is told to output "SELECTED MECHANISMS: Which mechanisms serve the metaphor, from which catalog categories" in its brief.

**This is a contradiction.** The TC agent is told to:
- NOT proceed to Phase 4 (where mechanism selection lives)
- BUT output selected mechanisms (which requires Phase 4 knowledge)

The TC agent must either:
- (a) Be given mechanism catalog access during Phase 3 (violates library prohibition), OR
- (b) Output mechanism DIRECTIONS instead of selections (e.g., "metaphor implies compression gradient + layer differentiation" rather than "use mechanisms #4 and #7"), OR
- (c) Run Phase 4.0-4.1 ONLY (mechanism selection) before stopping

**Recommendation:** Option (b). The TC brief should output METAPHOR-IMPLIED CSS DIRECTIONS (which it already specifies in the /build-page TC prompt) rather than mechanism IDs. The builder then reads the mechanism catalog and selects mechanisms that match those directions. This preserves the library prohibition and clean separation.

---

## Section 3: Output Format

### What does the TC skill currently produce at Phase 3?

At the end of Phase 3.5, the TC skill outputs:

1. **Committed metaphor** with written declaration (line 731-734)
2. **Resolution explanation** -- which tensions the metaphor resolves and how (line 738-740)
3. **Why this metaphor vs alternatives** (line 742-744)
4. **Full isomorphism table** -- metaphor properties mapped to content properties and system mechanisms (line 519-525)
5. **Composite scoring** -- Resolution, Isomorphism, Resonance, Feasibility, Perceptual Risk, Perceptual Cost, and 6-Criterion Quality Rubric (lines 503-684)
6. **Commitment verification** -- 3 binary checks (line 746-758)
7. **Divergence justification** if convergence detected (lines 760-788)

### What does /build-page expect?

The /build-page TC agent prompt (lines 48-55 of SKILL.md) specifies 5 sections:

1. STRUCTURAL METAPHOR: The metaphor and WHY it is structural (what CSS properties it implies)
2. ZONE ARCHITECTURE: How the content divides into zones, driven by the metaphor
3. CONTENT TENSIONS: The key tensions in the content that the composition must express
4. SELECTED MECHANISMS: Which mechanisms serve the metaphor, from which catalog categories
5. METAPHOR-IMPLIED CSS DIRECTIONS: Specific CSS patterns the metaphor suggests

### Mismatch analysis:

| /build-page Expects | TC Phase 3 Produces | Mismatch? |
|---------------------|---------------------|-----------|
| STRUCTURAL METAPHOR | Committed metaphor + resolution + isomorphism table | PARTIAL -- TC produces the metaphor but not in the compact "structural" format. Isomorphism table IS structural but buried in scoring |
| ZONE ARCHITECTURE | Phase 0C section identification + Phase 4.1 zone extraction | **GAP** -- Phase 0C identifies sections but does NOT map them to metaphor-driven zones. Zone architecture is a Phase 4 concept. |
| CONTENT TENSIONS | Phase 2 tension derivation + richness scoring | GOOD MATCH -- TC Phase 2 directly produces this |
| SELECTED MECHANISMS | Phase 4.0 mechanism extraction | **GAP** -- This is Phase 4 content. TC agent stops at Phase 3. See Section 2 above. |
| CSS DIRECTIONS | Phase 4.1 physical properties + Phase 4.2 translation grammar | **GAP** -- CSS directions are Phase 4 products. TC Phase 3 produces structural overlap (abstract) but not CSS directions (concrete). |

**3 of 5 expected sections have gaps.** The TC skill at Phase 3 does not naturally produce what /build-page needs.

### Format bridging recommendation:

Add a "Sub-Skill Output Mode" section to the TC skill after Phase 3.5 that specifies:

When invoked as a sub-skill (by /build-page), produce a brief with these 5 sections:

1. **STRUCTURAL METAPHOR** = Committed metaphor (from 3.5A) + top 3-4 isomorphisms from scoring table + why it's structural (what CSS properties it IMPLIES based on isomorphism table)
2. **ZONE ARCHITECTURE** = Section classification from Phase 0C + metaphor-driven zone mapping (NEW -- the TC agent maps identified sections to metaphor zones using the metaphor's spatial properties)
3. **CONTENT TENSIONS** = Selected tension from Phase 2 + BECAUSE justification
4. **MECHANISM DIRECTIONS** (renamed from "SELECTED MECHANISMS") = CSS directions implied by the metaphor's structural properties, WITHOUT referencing mechanism catalog IDs (which TC agent hasn't read)
5. **METAPHOR-IMPLIED CSS DIRECTIONS** = Concrete CSS patterns the metaphor suggests, derived from the isomorphism table's "System Mechanism" column

---

## Section 4: Builder-TC Handoff Protocol

### What happens when the builder disagrees with TC's metaphor?

The /build-page builder prompt says: "You may override ANY non-soul value if you log the override with compositional reasoning."

**The metaphor is NOT a soul value.** Therefore the builder can theoretically override the metaphor. But this creates a severe problem:

1. The TC agent spent Phases 0-3 deriving a metaphor through a rigorous process (multi-axis questioning, tension scoring, richness formula, composite scoring, perceptual risk, 6-criterion quality rubric)
2. The builder, encountering the brief, reads "geological strata" and thinks "actually this feels more like an archival vault"
3. The builder overrides the metaphor, using different zone names, different CSS directions, different spatial logic
4. Now the TC brief is useless. The builder has discarded 50+ lines of analysis.

**This has never happened in practice** (the Flagship experiment and remediation both used the TC-derived metaphor). But the protocol doesn't address it.

### Recommendation: Metaphor is LOCKED for builder

The metaphor should be treated as a **LOCKED (Research)** element, like container width or font trinity. The builder can:
- ADAPT the metaphor's expression (use different CSS values to express the same metaphor)
- EXTEND the metaphor (add zone-level variations the TC agent didn't specify)
- INTERPRET the metaphor (choose which isomorphisms to emphasize)

The builder CANNOT:
- REPLACE the metaphor with a different one
- IGNORE the metaphor's spatial logic

If the builder genuinely believes the metaphor is wrong, the fix cycle should ESCALATE to the orchestrator, who can re-run the TC phase with constraints (e.g., "banned metaphor: geological strata").

### Concrete protocol addition:

```
METAPHOR LOCK: The structural metaphor in the TC brief is LOCKED.
You may adapt its expression (different CSS values), extend it
(zone variations), or interpret it (emphasis choices). You may NOT
replace it. If you believe the metaphor is fundamentally wrong,
write "[METAPHOR ESCALATION]" in your build log with reasoning.
The orchestrator will re-run TC with constraints.
```

---

## Section 5: Metaphor Lock Gap

### Who locks the metaphor?

In standalone TC, Phase 3.5 is "Metaphor Commitment (LOCK-IN GATE)" (line 726). The TC agent explicitly locks the metaphor with:
- Written declaration (3.5A)
- Justification documentation (3.5B)
- Commitment verification (3.5C)
- Divergence check (3.5D)

In /build-page, the TC agent runs Phases 0-3 and stops. Phase 3.5 IS part of "Phases 0-3" (it's between Phase 3 and Phase 4), so the TC agent DOES lock the metaphor. But after the TC agent completes:

1. The orchestrator reads the TC brief
2. The orchestrator passes the brief to the builder
3. The builder reads the brief and... re-derives? Accepts? Challenges?

**Nobody explicitly re-confirms the lock.** The orchestrator just passes it through.

### Recommendation: Orchestrator validates lock, builder accepts

The /build-page orchestrator should:
1. Verify _tc-brief.md contains a committed metaphor with justification
2. Verify the metaphor passes the 6 binary rejection checks (R1-R6 from TC Step 3.5G)
3. Route the brief to the builder with explicit "METAPHOR: LOCKED" status

The builder's Phase A should be: "Read the TC brief. Your metaphor is LOCKED. Internalize the zones, tensions, and CSS directions."

**Current state:** The builder prompt says "Internalize them. Your job starts at Phase B." This is close but doesn't use the word LOCKED, which has specific meaning from the TC skill's Phase 3.5.

---

## Section 6: Reference File Access

### What files does the TC agent need beyond the TC skill + content?

The /build-page TC agent prompt tells it to read:
1. `~/.claude/skills/tension-composition/SKILL.md` -- the process
2. `[content-file-path]` -- the content

**Missing files the TC agent needs:**

| File | Why | Where TC Skill References It |
|------|-----|------------------------------|
| `compositional-core/identity/prohibitions.md` | Side B of the tension (design system constraints). TC Phase 2 needs the system's personality profile. | Lines 213-260 embed the constraints INLINE in the skill. No file access needed -- the personality profile is baked into SKILL.md. |
| `compositional-core/case-studies/_INDEX.md` | Phase 3.5C divergence check requires reading titles only. | Line 756: "Does this metaphor appear in `/case-studies/_INDEX.md`?" |
| `compositional-core/grammar/mechanism-catalog.md` | Phase 4.0 mechanism access. But TC agent stops at Phase 3. | Line 1005: "NOW PERMITTED" header at Phase 4.0. Not needed if TC stops at Phase 3. |

**Analysis:**

The TC skill embeds the KortAI personality profile (Side B) directly in Phase 2 (lines 213-260). This means the TC agent does NOT need to read prohibitions.md or tokens.css to run Phases 0-3. The constraints are baked into the skill file itself.

However, there's a maintenance risk: if the design system constraints change (new soul piece, palette adjustment), the embedded constraints in SKILL.md become stale. The skill was written before /build-page existed, so it embedded constraints for portability. In the /build-page context, the TC agent could instead be told to read prohibitions.md -- but this adds ~353 lines to its context for information that's already in the skill.

**The ONE file the TC agent genuinely needs that's not in its prompt:** `case-studies/_INDEX.md` for the Phase 3.5C divergence check. The /build-page TC prompt does NOT mention this file. This means divergence checking is silently skipped.

### Recommendation:

1. Add `case-studies/_INDEX.md` (titles only) to the TC agent's read list
2. Keep constraints embedded in SKILL.md (not worth the token cost of prohibitions.md for redundant information)
3. Do NOT give the TC agent mechanism-catalog.md -- it's not needed for Phases 0-3 and violates the library prohibition spirit
4. Consider: should the TC agent read the conventions brief? Currently NO -- only the builder reads it. But the conventions brief contains compositional intelligence that could enrich the TC analysis. Counter-argument: the TC agent should derive from FIRST PRINCIPLES, not from downstream documentation.

---

## Section 7: Fix Cycle Protocol

### When should fixes go to TC vs builder?

**Current state:** All fix cycles go to the builder. The PA report identifies issues, the orchestrator composes fix instructions, and the builder applies them. The TC agent is never consulted after its initial run.

### Decision tree:

```
PA identifies issue
  |
  +-- Is it a CSS execution issue?
  |     (wrong values, missing mechanisms, broken layout)
  |     --> FIX: Send to BUILDER
  |
  +-- Is it a metaphor structural issue?
  |     (metaphor doesn't fit content, zones don't match rhetoric)
  |     --> ESCALATE: Re-run TC with constraints
  |
  +-- Is it a metaphor expression issue?
  |     (metaphor is good but CSS doesn't express it well)
  |     --> FIX: Send to BUILDER with TC brief re-read instruction
  |
  +-- Is it "announced, not structural"?
        (metaphor exists only in labels, not in visual structure)
        --> DEPENDS:
            - If labels are the only issue: BUILDER (remove labels, strengthen CSS)
            - If the metaphor can't be expressed structurally at all: RE-RUN TC
              (metaphor scored 0-1 on Structural Survival criterion)
```

### When to re-run TC (rare, expensive):

Re-running TC should happen ONLY when:
1. PA-05 < 2.0 AND metaphor is identified as the root cause (not execution)
2. Structural Survival (TC Step 3.5G criterion 3) would score 0-1 in retrospect
3. The builder has attempted 2+ fix cycles and cannot make the metaphor structural

**Cost:** Re-running TC means a new Opus agent running Phases 0-3 (~15 min, ~100K tokens). The builder must then re-read a new brief and rebuild sections that depended on the old metaphor.

### Recommendation:

Fix cycles ALWAYS go to the builder FIRST. Only escalate to TC re-run if:
- PA-05 < 2.0 after 2 fix cycles, AND
- The weaver specifically identifies the METAPHOR (not execution) as the root cause

Add to /build-page Step 7.4: "If Cycle 3 exhausted AND weaver identifies metaphor as root cause: re-spawn TC agent with constraint 'BANNED: [original metaphor]. Derive alternative.' Then re-spawn builder with new brief."

---

## Section 8: TC Skill Enrichment Recommendations

### E1: Add Sub-Skill Output Mode (NEW SECTION, between Phase 3.5 and Phase 4)

**Location:** After line 789 ("You are now LOCKED IN. Proceed to Phase 4.")

**Insert:**

```markdown
### Phase 3.6: Sub-Skill Output Mode (When Invoked by /build-page)

When this skill is invoked by the /build-page orchestrator (or any pipeline that
tells you to "stop after Phase 3" or "stop after mechanism selection"), produce a
TC BRIEF instead of proceeding to Phase 4.

**TC Brief Format (~50 lines):**

1. STRUCTURAL METAPHOR (~10 lines)
   - Metaphor name + one-sentence summary
   - Top 4 structural isomorphisms from your scoring (metaphor property -> content property -> implied CSS)
   - Interpretive Distance score (from 3.5G rubric) -- builder must know if metaphor is literal or surprising
   - Perceptual Risk flags (from 3.5E) -- builder must know execution risks

2. ZONE ARCHITECTURE (~10 lines)
   - Content sections from Phase 0C mapped to metaphor-driven zones
   - For each zone: name, semantic role, density direction (sparse/moderate/dense)
   - Zone count (target: 3-5)

3. CONTENT TENSIONS (~10 lines)
   - Primary tension (Side A need vs Side B constraint) with richness score
   - BECAUSE justification (1 sentence linking need to specific content property)
   - 1-2 secondary tensions that the builder should be aware of

4. MECHANISM DIRECTIONS (~10 lines)
   - CSS directions implied by the metaphor (NOT mechanism catalog IDs)
   - Format: "[metaphor property] implies [CSS direction]"
   - Example: "strata consolidation implies progressive spacing compression downward"
   - Example: "layer visibility implies zone background differentiation with >= 15 RGB delta"
   - Per-category hints: at least one direction for each of 5 categories (S/H/C/D/N)

5. BUILDER WARNINGS (~10 lines)
   - Append W- warnings from the Warning Selection Protocol (Appendix)
   - Always include W-IMPLICIT
   - Include pacing prediction from Phase 4.2B assessment questions (run these during Phase 3 since they don't require mechanism catalog)

**Volume ceiling: 50 lines.** Compress if exceeding.

**Write to:** The file path specified by the invoking orchestrator (typically _tc-brief.md).

**If NOT invoked as sub-skill:** Skip this section. Proceed to Phase 4 as normal.
```

### E2: Move Pacing Prediction to Phase 3 (RELOCATE)

**Current location:** Phase 4.2B (lines 1225-1264)

**Problem:** Pacing prediction (section count assessment, breathing zone model, element uniformity, dramatic moment placement, transition model check) does NOT require mechanism catalog access. It's based on the METAPHOR, which is committed at Phase 3.5. But it lives in Phase 4, which the TC sub-skill doesn't reach.

**Recommendation:** Duplicate (not move) the 5 pacing prediction questions into Phase 3.5G (the metaphor quality rubric section) as an additional assessment. The TC agent should run these questions and include pacing risk in the TC brief's BUILDER WARNINGS section.

**Specific edit:** After line 684 (end of 6-criterion rubric), add:

```markdown
### Step 3.5H -- Pacing Prediction (for builder warnings)

Assess the committed metaphor's pacing characteristics. These predictions
are included in the TC brief to warn the builder about execution risks.

1. Section count: How many sections will the content produce?
   - 3-6 = LOW RISK, 7-10 = MODERATE, 11+ = HIGH
2. Breathing zone model: Does the metaphor call for empty transitions?
   - CHANGING STATE = LOW RISK, EMPTY SPACE = HIGH RISK (append W-DEADZONE)
3. Element uniformity: Does the metaphor produce same-shaped repeated elements?
   - VARIED = LOW RISK, UNIFORM = HIGH RISK (append W-MONOTONY)
4. Dramatic moment: Is there a natural climax point?
   - YES at 60-80% = LOW RISK, NO = MODERATE
5. Transition model: Structural gradients or text labels?
   - Gradients = LOW, Labels = HIGH (append W-OVERLABEL)
```

### E3: Add _INDEX.md to Phase 3.5C Read List

**Current text (line 756):** "Does this metaphor appear in `/case-studies/_INDEX.md`?"

**Problem:** This references a path relative to `/active/design-system/` which doesn't match the actual file system. The /build-page TC agent prompt doesn't include this file in its read list.

**Recommendation for /build-page SKILL.md:** Add to TC agent read list:
```
3. design-system/compositional-core/case-studies/_INDEX.md -- TITLES ONLY for divergence check.
   Read only the case study titles and tension summaries. Do NOT read full case study files.
```

### E4: Update Stale File Paths in TC Skill

**Lines 1005-1010 reference:**
```
/active/design-system/techniques/mechanisms.md
/active/design-system/foundations/components.md
```

**Actual paths:**
```
design-system/compositional-core/grammar/mechanism-catalog.md
design-system/compositional-core/components/components.css
```

These stale paths are in Phase 4 (which the sub-skill doesn't reach), so they won't break the /build-page pipeline. But they should be corrected for standalone invocation and general accuracy.

### E5: Clarify Phase Numbering Mismatch

**TC skill phases:** 0, 1, 2, 3, 3.5, 4, 4.0-4.9, 5 (6 major phases, labeled 0-5)
**/build-page TC prompt says:** "Phase 0: Content Analysis, Phase 1: Tension Derivation, Phase 2: Metaphor Collapse, Phase 3: Mechanism Selection"

**This is WRONG.** The /build-page prompt renumbers the TC phases:

| /build-page Says | TC Skill Actually | Content |
|------------------|-------------------|---------|
| Phase 0 | Phase 0 + Phase 1 | Content Analysis + Multi-axis questioning |
| Phase 1 | Phase 2 | Tension Derivation |
| Phase 2 | Phase 3 + 3.5 | Metaphor Collapse + Lock |
| Phase 3 | Phase 4 (!) | Mechanism Selection |

The /build-page prompt tells TC to run "Phases 0-3" but its Phase 3 = TC's Phase 4, which it also says to NOT run. This is a contradiction in the prompt itself.

**Recommendation:** Align /build-page TC prompt to use TC skill's own phase numbers:
```
Execute Phases 0 through 3.5 of the tension-composition skill on this content:
- Phase 0: Content Assessment (classification, scope, section identification)
- Phase 1: Multi-Axis Questioning (FEEL/UNDERSTAND/DO/BECOME + extended axes)
- Phase 2: Tension Derivation (richness scoring, genuine vs cosmetic)
- Phase 3: Metaphor Collapse (candidates, composite scoring, selection)
- Phase 3.5: Metaphor Commitment (lock-in, divergence check)

DO NOT proceed to Phase 4 (Compositional Layout Generation) or Phase 5 (Output/Divergence Verification).
```

---

## Section 9: BLOCKING Issues

### BLOCKING-1: Phase Numbering Contradiction (CRITICAL)

**Severity:** BLOCKING -- will cause TC agent confusion about scope

The /build-page TC prompt says:
- "Execute Phases 0-3" (line 37)
- "Phase 3: Mechanism Selection" (line 44)

But mechanism selection is TC Phase 4, and /build-page also says "DO NOT proceed to Phases 4-5" (line 46). The TC agent is simultaneously told to execute mechanism selection (called "Phase 3" in /build-page) and NOT execute Phase 4 (which IS mechanism selection in TC).

An agent reading the TC skill will see:
- Phase 3 = Metaphor Collapse (ends at line 714)
- Phase 3.5 = Metaphor Commitment (ends at line 789)
- Phase 4 = Compositional Layout Generation (starts at line 793)

It will correctly stop at Phase 3.5 and NOT select mechanisms. But the /build-page prompt expects mechanism selections in the brief.

**Fix:** Change /build-page TC prompt Phase 3 from "Mechanism Selection" to "Metaphor Commitment (lock-in + divergence check)." Change expected brief section from "SELECTED MECHANISMS" to "MECHANISM DIRECTIONS" (implied CSS patterns, not catalog IDs). See E1 and E5 above.

### BLOCKING-2: TC Brief Expected Content vs Available Content

**Severity:** BLOCKING -- TC agent cannot produce what /build-page expects

The TC brief expects "ZONE ARCHITECTURE" and "MECHANISM DIRECTIONS" but TC Phases 0-3 don't produce either:
- Zone architecture is a Phase 4 concept (mapping sections to metaphor zones)
- Mechanism selection requires the mechanism catalog (Phase 4.0 access)

**Fix:**
1. Add zone mapping to Phase 3.5 output (the TC agent CAN map sections to zones using the metaphor's spatial properties -- this doesn't require mechanism catalog)
2. Rename "SELECTED MECHANISMS" to "MECHANISM DIRECTIONS" -- CSS directions implied by the metaphor's isomorphism table, not mechanism IDs

### BLOCKING-3: Missing _INDEX.md in TC Agent Read List

**Severity:** MODERATE -- divergence checking silently fails

The TC agent's Phase 3.5C requires reading `_INDEX.md` titles, but /build-page doesn't include this file in the TC agent's read list. Without it, the TC agent either:
- Skips divergence checking entirely (bad: no novelty verification)
- Hallucinates case study titles (worse: false divergence confidence)

**Fix:** Add to TC agent read list in /build-page:
```
3. design-system/compositional-core/case-studies/_INDEX.md -- TITLES ONLY for divergence check.
```

### NOT BLOCKING (but important):

- **Stale paths in TC Phase 4:** Won't affect sub-skill mode since TC stops at Phase 3. Fix for standalone mode.
- **Embedded constraints vs file access:** Maintenance risk if soul constraints change. Low priority since constraints are stable.
- **Builder override protocol:** No incidents in practice. Protocol addition is defensive, not urgent.

---

## Summary Decision Table

| Question | Answer | Action Required |
|----------|--------|-----------------|
| Does TC know it's a sub-skill? | NO | Add Phase 3.6 Sub-Skill Output Mode (E1) |
| Are Phases 0-3 separable? | YES, cleanly | No structural change needed |
| Output format match? | 3/5 sections have gaps | Add zone mapping to Phase 3.5, rename mechanism section (E1) |
| Builder-TC disagreement protocol? | Missing | Add METAPHOR LOCK protocol (Section 4) |
| Who locks the metaphor? | TC agent at Phase 3.5 | Add orchestrator validation + builder acceptance (Section 5) |
| What files does TC need? | _INDEX.md missing from read list | Add to /build-page TC prompt (E3) |
| When do fix cycles go to TC? | Never (current); should be rare | Add escalation protocol for PA-05 < 2.0 after 2 cycles (Section 7) |
| Phase numbering aligned? | NO -- /build-page renumbers | Fix /build-page TC prompt to use TC phase numbers (E5) |

**Total BLOCKING issues: 3**
**Total enrichment recommendations: 5 (E1-E5)**
**Estimated edit size: ~80 lines added to TC SKILL.md, ~30 lines changed in /build-page SKILL.md**
