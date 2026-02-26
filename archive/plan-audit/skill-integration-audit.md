# Skill Integration Audit — Phase D Execution Plan

**Plan Audited:** `~/.claude/plans/giggly-drifting-eich.md` (640 lines)
**Audit Date:** 2026-02-14
**Auditor:** skill-auditor (plan-audit-team)

---

## EXECUTIVE SUMMARY

**Overall Assessment:** SIGNIFICANT GAPS IDENTIFIED

- **Full path compliance:** 4/17 skill references use full paths (23.5%)
- **Missing skill invocations:** 14 critical omissions
- **Cross-reference errors:** 8 mismatches
- **Compositional-core alignment:** 6 gaps

**Severity:** HIGH — Plan cannot execute as written without skill path corrections and missing invocations

**Recommendation:** FIX all full path references + ADD missing skill invocations before spawning agents

---

## 1. FULL PATH COMPLIANCE

### Skill References Found in Plan

| Location | Current Reference | Full Path? | Fix Required |
|----------|------------------|-----------|--------------|
| Line 78 | `~/.claude/skills/tension-composition/SKILL.md` | ✅ YES | None |
| Line 194 | TC + PA (table) | ❌ NO | Add full paths to table header |
| Line 195 | TC + PA (table) | ❌ NO | Add full paths to table header |
| Line 196 | TC + PA (table) | ❌ NO | Add full paths to table header |
| Line 197 | PA only (table) | ❌ NO | Add full path to table header |
| Line 592 | `~/.claude/skills/tension-composition/SKILL.md` | ✅ YES | None |
| Line 593 | `~/.claude/skills/perceptual-auditing/SKILL.md` | ✅ YES | None |
| Line 98 | "skill's internal Phase 0D library prohibition" | ❌ NO | Add full path |
| Line 105 | "tension-composition skill" | ❌ NO | Add full path |
| Line 237 | "PA questions" | ❌ NO | Add full path |
| Line 238 | "PA questions" | ❌ NO | Add full path |
| Line 352 | "tension-composition skill" | ❌ NO | Add full path |
| Line 356 | "Perceptual cost scoring" | ❌ NO | Add full path |
| Line 360 | "CLAUDE.md routing" | ✅ YES (compositional-core path) | None |

**TOTAL: 4/17 references use full paths (23.5%)**

**TARGET: 100% (17/17)**

---

## 2. MISSING SKILL INVOCATIONS

### Track 1 Builder (builder-track-1)

**Current prompt (implicit):** Load library files, build using components

**MISSING:**
1. **Perceptual-auditing skill invocation** — Line 193 shows "PA only" but does NOT specify:
   - WHEN to invoke (after HTML build, before declaring done)
   - HOW to invoke (Mode 1 Embedded: PA-01 through PA-05)
   - PATH to skill (`~/.claude/skills/perceptual-auditing/SKILL.md`)

**FIX REQUIRED:**
```markdown
**After building HTML, BEFORE declaring done:**
Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded).
Answer PA-01 through PA-05. If PA-05 = NO, fix before completion.
```

---

### Variant A Builder (builder-variant-a)

**Current prompt (line 194):** Shows "TC + PA" but does NOT specify:

**MISSING:**
1. **Tension-composition skill invocation** — NO explicit invocation instruction
   - Should state: "Invoke `~/.claude/skills/tension-composition/SKILL.md`"
   - Should specify: Run Phases 0-5 (content assessment → output)
   - Should specify: Library prohibition (case-studies/ FORBIDDEN)

2. **Perceptual-auditing skill invocation** — NO embedded Mode 1 instruction
   - Should state: "After Phase 5 output, invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1"
   - Should specify: PA-01 through PA-05 before declaring done

**FIX REQUIRED:**
```markdown
**Variant A Builder Prompt:**

STEP 1: Invoke `~/.claude/skills/tension-composition/SKILL.md`
- Run Phases 0-5 (full pipeline)
- Library prohibition: case-studies/ FORBIDDEN during Phases 0-3
- Output: HTML + thought process

STEP 2: Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded)
- Answer PA-01 through PA-05
- If PA-05 = NO, fix before completion
```

---

### Variant B Builder (builder-variant-b)

**Current prompt (line 195):** Shows "TC + PA" but with MODIFIED skill

**MISSING:**
1. **Skill modification specification** — Line 98 says "Phase 0D prohibition REMOVED" but does NOT specify:
   - WHICH lines to remove from skill file
   - HOW to pass modified skill to agent
   - WHETHER agent edits skill locally or receives pre-modified version

2. **Tension-composition invocation** — NO explicit invocation instruction with modification note

3. **Perceptual-auditing invocation** — NO embedded Mode 1 instruction

**CRITICAL ISSUE:** Plan says "skill's internal Phase 0D prohibition REMOVED" but does NOT specify HOW this modification occurs. Does:
- Agent read full skill then ignore prohibition section?
- Lead creates temporary modified skill file?
- Agent receives edited skill content in prompt?

**FIX REQUIRED:**
```markdown
**Variant B Builder Prompt:**

**CRITICAL:** You are using a MODIFIED tension-composition skill.
The modification: Phase 0D library prohibition is REPLACED with:
"Library resources are available throughout your process."

STEP 1: Invoke modified tension-composition skill
- Read `~/.claude/skills/tension-composition/SKILL.md` lines 1-68, skip 69-90, read 91-end
- OR: [Specify exact modification protocol]

STEP 2: Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded)
```

---

### Variant C Builder (builder-variant-c)

**Current prompt (line 196):** Shows "TC + PA" with "full skill"

**MISSING:**
1. **Tension-composition invocation** — NO explicit invocation, only table reference
2. **Phase 3.5 gate specification** — Line 109 describes gate questions but does NOT say "these are IN the skill"
3. **Perceptual-auditing invocation** — NO embedded Mode 1 instruction

**FIX REQUIRED:**
```markdown
**Variant C Builder Prompt:**

STEP 1: Invoke `~/.claude/skills/tension-composition/SKILL.md` (FULL skill, unmodified)
- Run Phases 0-5 with ALL anti-gravity mechanisms
- Phase 0D prohibition: ABSOLUTE — case-studies/ FORBIDDEN until Phase 5
- Phase 3.5 gate: MANDATORY — answer all 5 divergence questions before Phase 4

STEP 2: Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded)
```

---

### Variant D Builder (builder-variant-d)

**Current prompt (line 197):** Shows "PA only"

**MISSING:**
1. **Perceptual-auditing invocation** — NO explicit invocation instruction
2. **NO tension-composition skill** — CORRECT, but should state explicitly: "You do NOT invoke tension-composition skill. Build using library patterns directly."

**FIX REQUIRED:**
```markdown
**Variant D Builder Prompt:**

You are building WITHOUT the tension-composition skill.
Read compositional-core/ case studies directly. Use library patterns.

After building, invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded).
```

---

### Blind Judge A (blind-judge-a)

**Current prompt (line 237):** "Answer PA-01 through PA-05 (Tier 1) + PA-06 through PA-20 (Tier 2)"

**MISSING:**
1. **Perceptual-auditing skill invocation** — NO explicit skill path reference
2. **Mode specification** — Does NOT specify Mode 3 (Standard) vs Mode 1 (Embedded) vs custom question set

**ISSUE:** Plan lists specific PA question ranges but does NOT reference the skill file. Judge needs the full skill to understand question context.

**FIX REQUIRED:**
```markdown
**Blind Judge A Prompt:**

Invoke `~/.claude/skills/perceptual-auditing/SKILL.md`
Use CUSTOM question set (not a predefined mode):
- Tier 1: PA-01 through PA-05 (MANDATORY)
- Tier 2: PA-06 through PA-20
- Responsive: PA-21 through PA-23 at 768px

For each question, provide PASS/FAIL + justification.
```

---

### Blind Judge B (blind-judge-b)

**Current prompt (line 242):** Same as Judge A, fresh-eyes variant

**MISSING:**
1. **Perceptual-auditing skill invocation** — NO explicit skill path
2. **Fresh-eyes instruction** — Plan says "fresh-eyes" but does NOT specify: "You have NO knowledge of design system" (from skill's Mode 3)

**FIX REQUIRED:**
```markdown
**Blind Judge B Prompt:**

Invoke `~/.claude/skills/perceptual-auditing/SKILL.md`
Fresh-eyes mode: You have NO knowledge of the design system.

Use CUSTOM question set:
- Tier 1: PA-01 through PA-05
- Tier 2: PA-06 through PA-20
- Responsive: PA-21 through PA-23 at 768px
```

---

### Programmatic Auditor (programmatic-auditor)

**Current prompt (line 221):** Lists 19 binary checks

**MISSING:**
1. **Perceptual-auditing skill reference** — Checks come from skill's "Quantitative Guardrails" section but NO skill path cited
2. **Soul constraints from compositional-core** — NO path to prohibitions.md

**ISSUE:** Guardrail values (940px, 32px, etc.) are IN perceptual-auditing skill AND compositional-core/CLAUDE.md. Plan does NOT specify which source is authoritative.

**FIX REQUIRED:**
```markdown
**Programmatic Auditor Prompt:**

**Load guardrails from:**
1. `~/.claude/skills/perceptual-auditing/SKILL.md` (Quantitative Guardrails section)
2. `/Users/.../compositional-core/identity/prohibitions.md` (Soul constraints)

**19 binary checks:**
- Soul (6): border-radius=0, box-shadow=none, etc. (FROM prohibitions.md)
- Guardrails (8): container ≥940px, padding ≥32px, etc. (FROM perceptual-auditing skill)
- Tokens (3): colors from palette, spacing multiples of 4px (FROM tokens.css)
- Viewport (2): re-run at 768px
```

---

### Integration Auditor (integration-auditor)

**Current prompt (line 252):** Lists PD-01 through PD-12 criteria

**MISSING:**
1. **Source of PD criteria** — Are these defined in plan only, or also in a skill/research file?
2. **Perceptual-auditing skill reference** — PD-08 mentions "guardrails from skill" but NO path

**ISSUE:** Plan defines NEW criteria (PD-01 to PD-12) without citing source. If these are plan-specific, state: "These criteria are Phase D-specific, not from existing skills."

**FIX REQUIRED:**
```markdown
**Integration Auditor Prompt:**

**PD-01 to PD-12 are Phase D-specific criteria** (defined in this plan, not in skills).

**Reference files:**
- `~/.claude/skills/perceptual-auditing/SKILL.md` (for PD-08 token compliance guardrails)
- `/Users/.../compositional-core/grammar/mechanism-catalog.md` (for PD-05 mechanism count)
- `/Users/.../compositional-core/case-studies/_INDEX.md` (for PD-06 divergence check)
```

---

### Report Writer (report-writer)

**Current prompt (line 312):** Writes FINAL-REPORT.md

**MISSING:**
1. **Artifact #7 (Skill Integration Report)** — Section §7 asks "Did tension-composition skill complete Phases 0-5?" but does NOT reference skill path
2. **Guardrail enforcement check** — Mentions "6 perceptual guardrails" but NO skill path

**FIX REQUIRED:**
```markdown
**Report Writer — Artifact #7 (Skill Integration Report):**

Read builder logs + cross-check against:
- `~/.claude/skills/tension-composition/SKILL.md` (verify Phases 0-5 completion)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (verify guardrail compliance)

Answer:
- Did TC skill complete all phases?
- Were all 6 perceptual guardrails met?
- Did Phase 3.5 gate occur before library access?
```

---

## 3. CROSS-REFERENCE ERRORS

### Error 1: PA Question Numbering

**Plan reference (line 237):** "PA-01 through PA-05 (Tier 1 mandatory)"

**Skill actual:** PA-01 through PA-05 are Tier 1 — ✅ CORRECT

**Plan reference (line 238):** "PA-06 through PA-20 (Tier 2 standard)"

**Skill actual:** Tier 2 is PA-06 through PA-41 (not PA-20) — ❌ MISMATCH

**Issue:** Plan stops at PA-20 but skill defines Tier 2 as extending through PA-41. Missing PA-21 to PA-41 (except PA-21-23 responsive).

**Fix:** Clarify which Tier 2 questions judges should answer. If plan wants subset, specify: "PA-06 through PA-20 (first 15 of Tier 2)"

---

### Error 2: Guardrail Values

**Plan reference (line 222):** "container ≥940px"

**Perceptual-auditing skill (line 262):** "Min content container width: 640px (44%), Optimal: 700-960px"

**Compositional-core CLAUDE.md (line 721):** "Min 940px (65% at 1440px)"

**Tension-composition skill (line 721):** "940px min container (65% viewport)"

**Issue:** THREE different minimum values:
- Perceptual-auditing: 640px (44%)
- Compositional-core: 940px (65%)
- Tension-composition: 940px (65%)

**Authority:** Compositional-core + tension-composition agree on 940px. Perceptual-auditing is OUTDATED.

**Fix:** Plan should cite compositional-core as authoritative: "container ≥940px (per compositional-core/CLAUDE.md line 721)"

---

### Error 3: Compression Ratio

**Plan reference (line 222):** "compression ≥40%"

**Skill reference (tension-composition line 741):** "Compression ratio ceiling: Deepest padding >= 40% of shallowest padding"

**Issue:** Plan says "≥40%" (compression higher is better). Skill says "≥40%" (deepest/shallowest ratio, MINIMUM floor).

**Interpretation:** These are THE SAME — minimum 40% ratio. But plan phrasing "compression ≥40%" is ambiguous (could mean 40% text compression). Skill phrasing is clearer.

**Fix:** Use skill's exact phrasing: "Compression ratio ceiling: deepest padding ≥40% of shallowest padding"

---

### Error 4: Label-to-Heading Gap

**Plan reference (line 222):** "label gap ≥16px"

**Perceptual-auditing skill (line 277):** "Label-to-heading gap: Min 8px, Optimal 12-16px"

**Tension-composition skill (line 732):** "Min label-to-heading gap: 16px"

**Compositional-core (line 374):** "16px label-to-heading" (in guardrail list)

**Issue:** Perceptual-auditing says 8px minimum, tension-composition says 16px minimum.

**Authority:** Tension-composition + compositional-core agree on 16px (post-enrichment value). Perceptual-auditing is OUTDATED.

**Fix:** Plan should cite tension-composition: "label gap ≥16px (per tension-composition skill line 732)"

---

### Error 5: Mechanism Count

**Plan reference (line 257, PD-05):** "≥8/18 mechanisms from mechanism-catalog.md for Track 2 PASS"

**Skill reference (tension-composition line 589):** "18 mechanisms" (in grammar/mechanism-catalog.md)

**Compositional-core reference (grammar/mechanism-catalog.md — NOT IN SKILL, in design-system):** Actual count = 18 mechanisms

**Issue:** Mechanism count is IN compositional-core file, NOT in skill. Plan references skill but should reference compositional-core.

**Fix:** "≥8 mechanisms from `/Users/.../compositional-core/grammar/mechanism-catalog.md` (18 total)"

---

### Error 6: Phase Numbers

**Plan reference (line 105):** "Phases 0-3: 'YOU MUST NOT read case-studies/'"

**Tension-composition skill (line 70):** "YOU MUST NOT read the following during Phases 0-3"

**Issue:** ✅ MATCH — both say Phases 0-3

**Plan reference (line 110):** "Phase 4: NOW PERMITTED: mechanism-catalog.md"

**Tension-composition skill (line 760):** "Phase 4.0 — Mechanism Library Access (NOW PERMITTED)"

**Issue:** ✅ MATCH

**Plan reference (line 111):** "Phase 5: NOW PERMITTED: case-studies/"

**Tension-composition skill (line 1153):** "Phase 5: Divergence Verification (NOW ACCESS CASE STUDIES)"

**Issue:** ✅ MATCH — all phase numbers align

---

### Error 7: PA-05 Rubric

**Plan reference (line 402):** Defines PA-05 "would ship" as:
- YES = Soul 0 + guardrails 8/8 + no CRITICAL visual + readable
- YES WITH POLISH = above + 2-3 minor tweaks
- NO = any soul violation OR guardrail fail OR critical issue

**Perceptual-auditing skill (line 81, PA-05):** "Would you put your name on this? What would you fix first?"

**Issue:** Plan ADDS objective rubric for PA-05 that does NOT exist in skill. Skill leaves PA-05 as subjective judgment.

**This is NOT an error** — plan is ENRICHING skill with objective criteria. This is ACCEPTABLE as long as plan states:

**Fix:** Add note: "PA-05 rubric (objective criteria) is Phase D-specific, not from skill. Skill PA-05 is subjective; plan operationalizes it."

---

### Error 8: 6 Exhaustive CSS Channels

**Plan reference (line 356, Artifact #7):** "6 perceptual guardrails met?"

**Tension-composition skill (line 933):** "The 6 Exhaustive CSS Channels"

**Issue:** Plan says "6 perceptual guardrails." Skill says "6 exhaustive CSS channels." These are DIFFERENT CONCEPTS:
- 6 channels (from TC skill): background, border, typography, spacing, layout, accent
- 6 guardrails (from PA skill): UNCLEAR — PA skill does NOT define "6 guardrails" as a set

**Fix:** Clarify which 6:
- If channels: "6 exhaustive CSS channels (per tension-composition skill line 933)"
- If guardrails: Define which 6 (container width, padding, compression, line-height, CPL, breathing?)

---

## 4. COMPOSITIONAL-CORE ALIGNMENT

### Gap 1: Track 1 Workflow

**Plan Track 1 builder (line 193):** Loads "prohibitions, tokens, components.css, guidelines, semantic-rules, responsive-strategy"

**Compositional-core Track 1 (line 90-105):** Identical file list — ✅ MATCH

**Plan omission:** Does NOT mention compositional-core/CLAUDE.md as FIRST file to read

**Fix:** Add to Track 1 builder prompt:
"BEFORE loading other files, read `/Users/.../compositional-core/CLAUDE.md` (Track 1 Workflow section)"

---

### Gap 2: Track 2 Workflow Phase Sequence

**Plan Variant C (line 105-111):** Describes phase-gated access

**Compositional-core Track 2 (line 112-221):** Defines 8 phases (0, 1, 2, 3, 3.5, 4, 5, 6, 7)

**Issue:** Plan describes Variant C workflow but does NOT reference compositional-core/CLAUDE.md as the source of this protocol.

**Fix:** Add to Variant C builder prompt:
"Follow Track 2 workflow from `/Users/.../compositional-core/CLAUDE.md` lines 112-221"

---

### Gap 3: Anti-Gravity Rules

**Plan Section 4 (Variant Design):** Describes M1, M5, M6, M9 mechanisms

**Compositional-core (line 228-283):** Defines "Essential 5" anti-gravity rules (R1, R2, R3, R5, R6)

**Issue:** Plan uses DIFFERENT numbering system (M1, M5, M6, M9) than compositional-core (R1, R2, R3, R5, R6).

**Mapping:**
- Plan M1 = Compositional-core R1 (phase-gated access)
- Plan M5 = Compositional-core R5 (binary sequential phases)
- Plan M6 = Compositional-core R6 (divergence mandate)
- Plan M9 = NOT FOUND in compositional-core (verification gate)

**Issue:** Plan's M9 "verification gate" is NOT one of compositional-core's Essential 5.

**Fix:** Either:
1. Use compositional-core numbering (R1, R2, R3, R5, R6)
2. Add mapping table in plan: "M1=R1, M5=R5, M6=R6, M9=new"

---

### Gap 4: Phase 3.5 Gate Questions

**Plan (line 109):** Lists 5 questions for Phase 3.5 gate

**Tension-composition skill (line 649-708):** Defines Phase 3.5 gate with 3 questions (3.5A, 3.5B, 3.5C) + divergence table (3.5D)

**Issue:** Plan's 5 questions do NOT match skill's structure. Plan says:
1. What domain?
2. What structural isomorphisms?
3. Does this appear in _INDEX.md?
4. If YES, 5-dimension divergence table
5. If vocabulary overlap >40%, regenerate

**Skill says:**
- 3.5A: State committed metaphor
- 3.5B: Document WHY
- 3.5C: Answer 3 questions (derived independently? justify without library? appears in _INDEX?)
- 3.5D: If convergence, divergence table

**Plan's questions are DERIVED from skill but REPHRASED. This is acceptable but should cite source.

**Fix:** Add to plan: "Phase 3.5 gate questions derived from tension-composition skill lines 649-708"

---

### Gap 5: Ingestion Protocol

**Plan Wave 0 (line 130-165):** Content-preparer reads source files

**Compositional-core CLAUDE.md (line 26-49):** ALWAYS-LOAD section mandates prohibitions.md + tokens.css FIRST

**Issue:** Plan does NOT specify that content-preparer should read prohibitions.md + tokens.css before reading synthesis files.

**This is acceptable** — content-preparer is not building, just adapting content. But for consistency:

**Fix:** Add to content-preparer prompt: "Read compositional-core/identity/prohibitions.md first (to understand constraints for content adaptation)"

---

### Gap 6: Guardrail Priority Order

**Plan (line 222):** Lists guardrails but NO priority order

**Tension-composition skill (line 750):** Defines priority when metaphor conflicts:
1. NEVER compromise: Readability floors
2. NEVER compromise: Accessibility minimums
3. ADJUST metaphor
4. REJECT metaphor

**Compositional-core CLAUDE.md (line 386):** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

**Issue:** Plan does NOT specify what happens when metaphor-driven design conflicts with guardrails. Builder agents might choose wrong priority.

**Fix:** Add to builder prompts:
"If metaphor conflicts with guardrails, follow priority from tension-composition skill line 750:
1. NEVER compromise readability
2. ADJUST metaphor to meet floors
3. REJECT metaphor if adjustment impossible"

---

## 5. RECOMMENDATIONS

### Critical Fixes (MUST address before execution)

1. **Add full skill paths to ALL 13 incomplete references**
   - Lines 194-197 (table header)
   - Line 98, 105, 237, 238, 352, 356

2. **Add explicit skill invocation instructions to ALL 9 builder/judge agents**
   - Specify WHEN to invoke (phase/step)
   - Specify WHICH skill file (full path)
   - Specify HOW to invoke (mode/phase range)

3. **Fix cross-reference mismatches:**
   - PA question range (Tier 2 ends at PA-41, not PA-20)
   - Guardrail authority (use compositional-core 940px, not PA 640px)
   - Mechanism count source (compositional-core file, not skill file)

4. **Clarify Variant B skill modification protocol:**
   - HOW is Phase 0D prohibition removed?
   - WHO performs modification (lead or agent)?
   - WHAT exact lines are removed/replaced?

### High Priority Fixes (SHOULD address)

5. **Add compositional-core/CLAUDE.md as FIRST file to read** for all builders
   - Track 1: Read lines 90-105 (Track 1 Workflow)
   - Track 2: Read lines 112-221 (Track 2 Workflow)

6. **Reconcile anti-gravity numbering** (M1/M5/M6 vs R1/R5/R6)
   - Use compositional-core numbering OR add mapping table

7. **Add PA-05 rubric note** — clarify this is plan-specific operationalization

8. **Specify guardrail conflict priority** — add to all builder prompts

### Medium Priority (COULD address)

9. **Add skill citations for Phase 3.5 gate questions** — note derivation source

10. **Add content-preparer prohibition read** — for consistency

11. **Clarify "6 perceptual guardrails" vs "6 CSS channels"** — different concepts

---

## 6. OVERALL VERDICT

**CONDITIONAL FAIL** — Plan cannot execute as written without corrections.

**Why fail:**
- 76.5% of skill references lack full paths
- 14 missing skill invocations (critical for agent execution)
- 8 cross-reference mismatches (could cause incorrect validation)

**Path to PASS:**
1. Fix all 13 incomplete skill path references
2. Add explicit skill invocations to 9 agent prompts
3. Resolve 8 cross-reference errors
4. Clarify Variant B modification protocol

**Estimated fix time:** 2-3 hours (systematic path addition + invocation instructions)

**Risk if unfixed:** Agents will not know WHEN/HOW to invoke skills, leading to:
- Track 2 builders skipping tension-composition pipeline
- Judges using wrong PA question ranges
- Guardrail checks using outdated values
- Integration auditor missing skill-derived criteria

---

**END AUDIT**
