# Skill Invocation Deep Audit — Phase D Execution Plan

**Audit Date:** 2026-02-14
**Plan Audited:** `~/.claude/plans/giggly-drifting-eich.md` (640 lines)
**Auditor:** skill-invocation-deep-auditor (plan-audit-team)

---

## EXECUTIVE SUMMARY

**Overall Assessment:** CRITICAL GAPS IN SKILL INVOCATION PROTOCOL

**Key Findings:**
- **Full path compliance:** 4/17 skill references (23.5%) — CRITICAL DEFICIENCY
- **Missing invocation instructions:** 9/12 agents lack explicit "Invoke [full-path]" commands
- **Skill feature coverage:** 14 skill features present in files but NOT referenced in plan
- **Mode specification gaps:** 4 evaluator agents lack MODE specification (Mode 1/3/4)
- **Tension-composition phase mapping:** Plan assumes agents know Phase 0-5 structure without citing line numbers

**Verdict:** BLOCKING DEFICIENCY — Plan will fail execution without skill invocation corrections

**Critical path to fix:** Add full paths to all 13 incomplete references + add explicit invocation instructions to 9 agent prompts (estimated 2-3 hours)

---

## PER-AGENT AUDIT

### builder-track-1

**Role:** Track 1 assembly (library components only)

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition | ❌ N/A | N/A | N/A | ❌ NO | Track 1 does NOT use TC skill — CORRECT |
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | Plan says "PA only" (line 193) but NO invocation instruction |

**Missing invocation instruction:**
```markdown
**AFTER building HTML, BEFORE declaring done:**
Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded).
Answer PA-01 through PA-05 (90 seconds).
If PA-05 = NO, fix before completion.
```

**Critical gap:** Agent will not know:
- WHEN to invoke PA (before done vs after done)
- WHICH questions (PA-01–05 vs PA-01–48)
- WHERE the skill file is (`~/.claude/skills/...`)

**Severity:** HIGH — Agent may skip perceptual audit entirely

---

### builder-variant-a

**Role:** Track 2, skill only, ZERO library

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition | ❌ NO | N/A | ❌ NO | ❌ NO | Plan says "TC + PA" (line 194) but NO invocation |
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | Plan says "TC + PA" but NO invocation |

**Missing invocation instructions:**

```markdown
**STEP 1: Invoke tension-composition skill**
Read `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines).
Run Phases 0 through 5:
- Phase 0 (lines 40-90): Content Assessment (0A, 0B, 0C, 0D)
- Phase 1 (lines 92-176): Multi-Axis Questioning
- Phase 2 (lines 178-254): Tension Derivation
- Phase 3 (lines 256-XXX): Metaphor Collapse
- Phase 4 (lines XXX-XXX): Compositional Layout
- Phase 5 (lines XXX-XXX): Output

**CRITICAL PROHIBITION (Phase 0D, lines 69-90):**
YOU MUST NOT read case-studies/, library/, or prior explorations during Phases 0-3.
Violation invalidates the entire derivation.

**STEP 2: Invoke perceptual-auditing skill (AFTER Phase 5)**
Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines).
Run Mode 1 (Embedded): PA-01 through PA-05 (90 seconds).
If PA-05 = NO, fix before declaring done.
```

**Critical gaps:**
1. Plan does NOT specify Phase 0D prohibition (lines 69-90) — agent may not know library is FORBIDDEN
2. Plan does NOT specify Phase 0 has 4 sub-steps (0A/0B/0C/0D) — agent may skip sections
3. Plan does NOT cite line numbers for phases — agent must search entire 1,149-line file
4. Plan does NOT specify Mode 1 for PA skill — agent may run full Mode 4 (60 minutes)

**Severity:** CRITICAL — Without Phase 0D prohibition, Variant A will NOT be isolated (contamination risk)

---

### builder-variant-b

**Role:** Track 2, skill + weak library permission

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition (MODIFIED) | ❌ NO | N/A | ❌ NO | ❌ NO | Plan says "Phase 0D REMOVED" but HOW? |
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | No invocation |

**Missing invocation instructions + CRITICAL AMBIGUITY:**

```markdown
**STEP 1: Invoke MODIFIED tension-composition skill**

**CRITICAL MODIFICATION PROTOCOL:**
[PLAN DOES NOT SPECIFY HOW MODIFICATION OCCURS]

Option A: Agent reads full skill, manually skips Phase 0D section (lines 69-90)?
Option B: Lead creates modified skill file at `/tmp/tc-skill-modified.md`?
Option C: Agent receives modified skill content directly in prompt?

**RECOMMENDED FIX:**
"Read `~/.claude/skills/tension-composition/SKILL.md` lines 1-68, SKIP lines 69-90 (Phase 0D prohibition), read lines 91-1149."

**REPLACEMENT TEXT for Phase 0D:**
"Library resources in compositional-core/ are available throughout your process. You may consult case-studies/, mechanism-catalog.md, and components.css at any point."

**STEP 2: Invoke perceptual-auditing skill (AFTER Phase 5)**
Read `~/.claude/skills/perceptual-auditing/SKILL.md`.
Run Mode 1 (Embedded): PA-01 through PA-05.
```

**Critical gap:** Plan says "Phase 0D prohibition REMOVED" (line 98) but provides ZERO implementation details:
- Which lines to remove?
- Who performs removal (lead vs agent)?
- How is modified skill delivered to agent?
- What replacement text (if any)?

**Severity:** BLOCKING — Without modification protocol, agent execution will FAIL (skill file contradiction)

---

### builder-variant-c

**Role:** Track 2, skill + full anti-gravity

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition | ❌ NO | N/A | ✅ YES (lines 105-111) | ❌ NO | Phase sequence described but NO invocation instruction |
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | No invocation |

**Missing invocation instructions:**

```markdown
**STEP 1: Invoke tension-composition skill (FULL skill, unmodified)**
Read `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines).
Run Phases 0 through 5 with ALL anti-gravity mechanisms.

**PHASE-GATED FILE ACCESS (M1 enforcement):**
- Phase 0: ONLY prohibitions.md + tokens.css
- Phases 0-3: "YOU MUST NOT read case-studies/, mechanism-catalog.md, or components.css. Violation invalidates derivation."
- Phase 3.5: DIVERGENCE GATE (MANDATORY before Phase 4)
- Phase 4: NOW PERMITTED — mechanism-catalog.md (techniques only)
- Phase 5: NOW PERMITTED — case-studies/ (2-3 most similar, divergence verification)

**PHASE 3.5 GATE (lines 649-708 in skill):**
Write committed metaphor to log. Answer 5 questions:
1. What domain?
2. What structural isomorphisms?
3. Does this domain appear in case-studies/_INDEX.md?
4. If YES to #3: 5-dimension divergence table (≥3 dimensions DIFFERENT)
5. If vocabulary overlap >40% with ANY case study: REGENERATE (justification alone NOT sufficient)

Write all answers BEFORE proceeding to Phase 4.

**STEP 2: Invoke perceptual-auditing skill (AFTER Phase 5)**
Read `~/.claude/skills/perceptual-auditing/SKILL.md`.
Run Mode 1 (Embedded): PA-01 through PA-05.
```

**Critical gaps:**
1. Plan describes Phase 3.5 gate (line 109) but does NOT cite skill source (lines 649-708)
2. Plan does NOT specify that Phase 3.5 gate is WITHIN the skill file (agents may think it's plan-only)
3. Plan does NOT specify line numbers for phase boundaries (agent must search entire file)

**Severity:** HIGH — Without skill citations, agent may skip Phase 3.5 gate (anti-gravity FAILS)

---

### builder-variant-d

**Role:** Track 2, library-first, NO skill

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition | ✅ N/A | N/A | N/A | ✅ YES (implicit) | Variant D does NOT use TC — CORRECT |
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | No invocation |

**Missing invocation instruction:**

```markdown
**YOU DO NOT invoke tension-composition skill.**
Build using compositional-core/ library patterns directly.
Read case-studies/ immediately. Use library components.

**AFTER building, BEFORE declaring done:**
Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded).
Answer PA-01 through PA-05 (90 seconds).
If PA-05 = NO, fix before completion.
```

**Critical gap:** Plan says "PA only" (line 197) but does NOT:
- Specify WHEN to invoke PA
- Specify WHERE the skill file is
- Specify WHICH questions (PA-01–05 vs full set)

**Severity:** MEDIUM — Agent will likely infer, but ambiguity risks inconsistency

---

### programmatic-auditor

**Role:** DOM scan, 19 checks × 5 pages

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| perceptual-auditing | ❌ NO | N/A | N/A | ❌ NO | Checks FROM skill but NO skill path cited |

**Missing skill reference:**

```markdown
**LOAD GUARDRAILS FROM:**
1. `~/.claude/skills/perceptual-auditing/SKILL.md` — Quantitative Guardrails section (lines 258-328)
2. `/Users/.../compositional-core/identity/prohibitions.md` — Soul constraints (border-radius: 0, etc.)
3. `/Users/.../compositional-core/vocabulary/tokens.css` — Palette, spacing tokens

**19 BINARY CHECKS:**
- Soul (6): border-radius=0, box-shadow=none, no drop-shadow, no #000/#FFF, font trinity, no 2px borders [FROM prohibitions.md]
- Guardrails (8): container ≥940px, padding ≥32px, label gap ≥16px, compression ≥40%, CPL 45-80, line-height ≥1.5, breathing ≥48px [FROM perceptual-auditing skill lines 262-328]
- Tokens (3): colors from palette, spacing multiples of 4px, fonts match trinity [FROM tokens.css]
- Viewport (2): re-run all 8 guardrail checks at 768px
```

**Critical gap:** Plan lists guardrail VALUES (940px, 32px, etc.) but does NOT cite SOURCE. Agent will not know:
- Which source is authoritative (PA skill vs compositional-core)
- Whether to read skill file or just use plan values
- What to do if values conflict

**Severity:** HIGH — Without source citation, agent may use WRONG values (perceptual-auditing has OUTDATED 640px minimum vs compositional-core 940px)

---

### blind-judge-a

**Role:** PA questions, extraction-aware

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | Plan lists PA ranges but NO skill path |

**Missing invocation instruction:**

```markdown
**INVOKE PERCEPTUAL-AUDITING SKILL:**
Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines).

**MODE:** CUSTOM (not Mode 1/3/4 — custom question set)
- Tier 1 (MANDATORY): PA-01 through PA-05 (lines 74-81)
- Tier 2 (STANDARD): PA-06 through PA-20 (lines 84-142) [NOTE: Tier 2 FULL is PA-06–PA-41; plan uses subset]
- Responsive: PA-21 through PA-23 at 768px (lines 226-230)

**COLD LOOK PROTOCOL (lines 485-500):**
REQUIRED before answering ANY questions.
1. CLEAR: Close all CSS files, specs, docs
2. LOOK (5 sec): Absorb shape, color, weight
3. REACT (immediate): Write gut reaction, worst thing, best thing, ship verdict
4. LOCK: These responses FINAL, cannot change after reading specs
5. REPEAT for each viewport

**LANGUAGE HARD BLOCK (lines 607-610):**
Answers may NOT contain: px, rem, %, hex, rgb, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, flex, grid, gap, opacity, or ANY CSS property name.
Use instead: heavy, light, cramped, spacious, jarring, smooth, warm, cold, sharp, soft, cluttered, breathing.

For each question: PASS/FAIL + justification.
```

**Critical gaps:**
1. Plan says "PA-01 through PA-05" (line 237) but does NOT cite skill file location
2. Plan does NOT specify Cold Look Protocol (skill lines 485-500) — MANDATORY for visual auditors
3. Plan does NOT specify Language Hard Block (skill lines 607-610) — agents may use CSS vocabulary
4. Plan does NOT specify Scroll-Through Protocol (skill lines 502-528) — MANDATORY for Standard mode

**Severity:** CRITICAL — Without Cold Look Protocol, audit will NOT follow skill methodology (contaminated by prior knowledge)

---

### blind-judge-b

**Role:** PA questions, fresh-eyes

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| perceptual-auditing | ❌ NO | ❌ NO | N/A | ❌ NO | Same as judge-a + fresh-eyes missing |

**Missing invocation instruction:**

```markdown
**INVOKE PERCEPTUAL-AUDITING SKILL:**
Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines).

**FRESH-EYES MODE:**
You have NO knowledge of the design system.
You have NOT read compositional-core/ files.
Sharp edges are intentional, not errors.
Answer PA questions based ONLY on what you SEE.

**MODE:** CUSTOM (same question set as judge-a)
- Tier 1: PA-01 through PA-05
- Tier 2: PA-06 through PA-20
- Responsive: PA-21 through PA-23 at 768px

**COLD LOOK PROTOCOL (MANDATORY, lines 485-500):**
[Same as judge-a]

**LANGUAGE HARD BLOCK (MANDATORY, lines 607-610):**
[Same as judge-a]
```

**Critical gap:** Plan says "fresh-eyes" (line 242) but does NOT specify what this means:
- Does agent read prohibitions.md? (NO)
- Does agent know about soul rules? (NO)
- Does agent know design system has sharp edges? (YES — to prevent false positives)

**Severity:** HIGH — Without fresh-eyes definition, agent may read compositional-core (contamination)

---

### integration-auditor

**Role:** Library utilization + phase compliance

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| perceptual-auditing | ❌ NO | N/A | N/A | ❌ NO | PD-08 references "guardrails from skill" but NO path |
| tension-composition | ❌ NO | N/A | N/A | ❌ NO | PD-05 references "18 mechanisms" but NO path |

**Missing skill references:**

```markdown
**REFERENCE FILES FOR PD CRITERIA:**

**PD-01 to PD-12 are Phase D-specific** (defined in plan, NOT in skills).

**For PD-05 (Mechanism application):**
Read `/Users/.../compositional-core/grammar/mechanism-catalog.md` (18 mechanisms total).
Count distinct mechanisms used. ≥8/18 for Track 2 PASS.

**For PD-06 (Divergence check):**
Read `/Users/.../compositional-core/case-studies/_INDEX.md` (9 case studies listed).
Calculate CSS class name vocabulary overlap.
>40% overlap + no divergence table = FAIL.
>40% + divergence table with ≥3/5 dimensions different = PASS.

**For PD-08 (Token compliance):**
Read `~/.claude/skills/perceptual-auditing/SKILL.md` lines 262-328 (Quantitative Guardrails).
Verify ≥95% CSS values from tokens.css.
Count hardcoded values vs `var(--token)` references.

**For PD-11 (Phase 3.5 gate completeness, Variant C only):**
Read `~/.claude/skills/tension-composition/SKILL.md` lines 649-708 (Phase 3.5 Divergence Gate).
Verify all 5 gate questions answered in log.
If convergence detected, verify regeneration occurred (not just justification).
```

**Critical gap:** Plan defines PD-01 to PD-12 (12 new criteria) but does NOT specify:
- Which criteria come from skills vs compositional-core vs plan-only
- Where to find mechanism count (compositional-core file, not skill)
- Where to find divergence protocol (tension-composition skill, not compositional-core)

**Severity:** HIGH — Agent will not know WHERE to verify criteria (skill vs core vs log)

---

### cross-variant-analyst

**Role:** Compare A/B/C/D on 6 dimensions

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| N/A | N/A | N/A | N/A | N/A | No skills invoked — ✅ CORRECT |

**Analysis:** This agent reads evaluation files + logs. Does NOT invoke skills. ✅ APPROPRIATE.

---

### report-writer

**Role:** FINAL-REPORT.md with 8 artifacts

| Skill | Full Path? | Mode? | Phase Sequence? | Invocation Instruction? | Gap |
|---|---|---|---|---|---|
| tension-composition | ❌ NO | N/A | N/A | ❌ NO | Artifact #7 asks "Did TC skill complete Phases 0-5?" but NO skill path |
| perceptual-auditing | ❌ NO | N/A | N/A | ❌ NO | Artifact #7 asks "Guardrail enforcement" but NO skill path |

**Missing skill references:**

```markdown
**ARTIFACT #7: SKILL INTEGRATION REPORT (FINAL-REPORT §7)**

**Read builder logs + cross-check against:**
1. `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines)
   - Verify Phases 0-5 completion (per-phase timestamps in logs)
   - Phase 0: Content Assessment (4 sub-steps)
   - Phase 1: Multi-Axis Questioning (4-14 axes)
   - Phase 2: Tension Derivation
   - Phase 3: Metaphor Collapse
   - Phase 3.5: Divergence Gate (Variant C only)
   - Phase 4: Compositional Layout
   - Phase 5: Output

2. `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines)
   - Verify Mode 1 (Embedded) completion for all 5 builders
   - Verify PA-01 through PA-05 answered
   - Verify "If PA-05 = NO, fix before done" enforced

**ANSWER:**
- Did tension-composition skill complete all phases? (Check log timestamps)
- Were all 6 perceptual guardrails met? [CLARIFY: Which 6? Container width, padding, compression, line-height, CPL, breathing?]
- Did Phase 3.5 gate occur before library access? (Variant C only)
```

**Critical gap:** Artifact #7 (Skill Integration Report) asks questions ABOUT skills but does NOT cite skill paths. Report-writer will not know:
- Which phases to verify (Phase 0-5 in skill, but where are boundaries?)
- What "6 perceptual guardrails" means (plan says 6, skill does NOT define "the 6")
- Where Phase 3.5 gate is documented (skill lines 649-708)

**Severity:** MEDIUM — Report may miss skill integration issues

---

## SKILL FEATURE COVERAGE

### Tension-Composition Skill (1,149 lines)

| Skill Feature | In Skill File (Lines) | In Plan | Gap |
|---|---|---|---|
| Phase 0A: Content Type Classification | 40-48 | ❌ NO | Plan assumes prose-dominant, does NOT reference classification step |
| Phase 0B: Scope Assessment | 50-58 | ❌ NO | Plan assumes STANDARD scope, does NOT reference scope step |
| Phase 0C: Section Identification | 60-66 | ❌ NO | Plan does NOT reference section identification |
| Phase 0D: Library Access Prohibition | 69-90 | ✅ YES (line 84, 108) | Referenced but NOT cited with line numbers |
| Core Four axes | 98-104 | ❌ NO | Plan does NOT list which axes are mandatory |
| Extended Five axes | 109-117 | ❌ NO | Plan does NOT reference extended axes |
| Structural Trigger axes | 119-130 | ❌ NO | Plan does NOT reference conditional axes |
| Opposition Predicts Richness principle | 139-148 | ❌ NO | Plan does NOT reference richness prediction |
| Phase 2 Side A vs Side B | 178-254 | ❌ NO | Plan does NOT reference tension derivation structure |
| Phase 3.5 Divergence Gate | 649-708 | ✅ YES (line 109) | Referenced but NOT cited with line numbers |
| Phase 4.0 Mechanism Library Access | 760-XXX | ✅ YES (line 110) | Referenced but NOT cited |
| Phase 5 Case Study Access | 1153-XXX | ✅ YES (line 111) | Referenced but NOT cited |
| Guardrail priority when metaphor conflicts | 750-XXX | ❌ NO | Plan does NOT specify conflict resolution |
| 6 Exhaustive CSS Channels | 933-XXX | ❌ NO | Plan says "6 perceptual guardrails" (DIFFERENT concept) |

**TOTAL COVERAGE:** 4/14 features explicitly referenced (28.6%)

**KEY MISSING FEATURES:**
- Phase 0 structure (0A/0B/0C/0D) — plan assumes agents know to run all 4 sub-steps
- Axis selection protocol (Core Four + Extended Five + Structural Triggers) — plan assumes agents know which axes to run
- Guardrail conflict priority — plan does NOT specify what happens when metaphor violates floors

---

### Perceptual-Auditing Skill (736 lines)

| Skill Feature | In Skill File (Lines) | In Plan | Gap |
|---|---|---|---|
| Tier 1 (PA-01–PA-05) | 74-81 | ✅ YES (line 237, 402) | Referenced |
| Tier 2 (PA-06–PA-41) | 84-254 | ⚠️ PARTIAL (line 238 says PA-06–PA-20 only) | Plan uses SUBSET, not full Tier 2 |
| Tier 3 (PA-21+) | 222-254 | ⚠️ PARTIAL (line 239 says PA-21–23 only) | Plan uses responsive subset only |
| Metaphor-awareness principles | 144-205 | ❌ NO | Plan does NOT reference metaphor-auditing section |
| PA-42 (metaphor-driven compromise) | 190 | ❌ NO | Plan does NOT include metaphor questions |
| PA-43 (metaphor perceptual cost) | 194 | ❌ NO | Plan does NOT include perceptual cost question |
| PA-44 (implicit vs explicit metaphor) | 198 | ❌ NO | Plan does NOT include implicit metaphor question |
| Quantitative Guardrails | 258-328 | ✅ YES (line 222, 392) | Referenced but NOT cited with line numbers |
| Mode 1 (Embedded) | 334-338 | ⚠️ IMPLIED | Plan says "PA only" but does NOT specify Mode 1 |
| Mode 3 (Standard) | 343-357 | ❌ NO | Plan does NOT reference Mode 3 (uses custom question set instead) |
| Cold Look Protocol | 485-500 | ❌ NO | CRITICAL — plan does NOT require Cold Look |
| Scroll-Through Protocol | 502-528 | ❌ NO | CRITICAL — plan does NOT require Scroll-Through |
| Language Hard Block | 607-610 | ❌ NO | CRITICAL — plan does NOT forbid CSS vocabulary |
| Temporal Firewall | 581-583 | ❌ NO | Plan does NOT specify auditors NEVER see Lock Sheet before Cold Look |
| Dual Severity Track | 625-642 | ❌ NO | Plan does NOT reference perception track vs rule track |

**TOTAL COVERAGE:** 3/15 features explicitly referenced (20%)

**CRITICAL MISSING FEATURES:**
- **Cold Look Protocol** — MANDATORY for visual auditors, NOT mentioned in plan
- **Scroll-Through Protocol** — MANDATORY for Standard mode, NOT mentioned
- **Language Hard Block** — Prevents CSS vocabulary contamination, NOT mentioned
- **Temporal Firewall** — Auditors must NOT see Lock Sheet before Cold Look, NOT mentioned

---

## CRITICAL FIXES NEEDED

### Fix 1: Add Full Paths to ALL Skill References

**Plan lines requiring full paths:**

| Line | Current Text | Fixed Text |
|------|-------------|-----------|
| 78 | ✅ Already has full path | No change |
| 98 | "skill's internal Phase 0D library prohibition" | "skill's internal Phase 0D library prohibition (`~/.claude/skills/tension-composition/SKILL.md` lines 69-90)" |
| 105 | "tension-composition skill" | "`~/.claude/skills/tension-composition/SKILL.md`" |
| 194 (table) | "TC + PA" | "TC: `~/.claude/skills/tension-composition/SKILL.md` + PA: `~/.claude/skills/perceptual-auditing/SKILL.md`" |
| 195 (table) | "TC + PA" | Same as line 194 |
| 196 (table) | "TC + PA" | Same as line 194 |
| 197 (table) | "PA only" | "PA: `~/.claude/skills/perceptual-auditing/SKILL.md`" |
| 237 | "PA questions" | "`~/.claude/skills/perceptual-auditing/SKILL.md` PA-01 through PA-05 (Tier 1)" |
| 238 | "PA questions" | "`~/.claude/skills/perceptual-auditing/SKILL.md` PA-06 through PA-20 (Tier 2 subset)" |
| 352 | "tension-composition skill" | "`~/.claude/skills/tension-composition/SKILL.md`" |
| 356 | "Perceptual cost scoring" | "`~/.claude/skills/perceptual-auditing/SKILL.md` PA-43 (Perceptual cost scoring)" |
| 592 | ✅ Already has full path | No change |
| 593 | ✅ Already has full path | No change |

**Total fixes:** 11 lines

---

### Fix 2: Add Explicit Invocation Instructions to Builder Prompts

**Add to builder-track-1 prompt (after line 193):**

```markdown
**CRITICAL: PERCEPTUAL AUDIT BEFORE COMPLETION**

After building HTML, BEFORE declaring done:
1. Invoke `~/.claude/skills/perceptual-auditing/SKILL.md`
2. Run Mode 1 (Embedded): PA-01 through PA-05 (90 seconds)
3. If PA-05 = NO, fix before completion
```

**Add to builder-variant-a prompt (after line 194):**

```markdown
**STEP 1: INVOKE TENSION-COMPOSITION SKILL**

Read `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines).

**Run Phases 0 through 5:**
- Phase 0 (lines 40-90): Content Assessment (4 sub-steps: 0A, 0B, 0C, 0D)
  - 0D CRITICAL: Library prohibition — case-studies/ FORBIDDEN during Phases 0-3
- Phase 1 (lines 92-176): Multi-Axis Questioning (Core Four + Extended Five + Structural Triggers)
- Phase 2 (lines 178-254): Tension Derivation (Side A: reader needs, Side B: system constraints)
- Phase 3: Metaphor Collapse
- Phase 4: Compositional Layout
- Phase 5: Output

**STEP 2: INVOKE PERCEPTUAL-AUDITING SKILL**

After Phase 5 output:
1. Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines)
2. Run Mode 1 (Embedded): PA-01 through PA-05
3. If PA-05 = NO, fix before completion
```

**Add to builder-variant-b prompt (after line 195):**

```markdown
**STEP 1: INVOKE MODIFIED TENSION-COMPOSITION SKILL**

**MODIFICATION PROTOCOL:**
Read `~/.claude/skills/tension-composition/SKILL.md` with the following modification:
- Lines 1-68: Read normally
- Lines 69-90: SKIP (Phase 0D library prohibition)
- REPLACEMENT TEXT: "Library resources in compositional-core/ are available throughout your process."
- Lines 91-1149: Read normally

Run Phases 0 through 5 (same structure as Variant A, but library accessible from start).

**STEP 2: INVOKE PERCEPTUAL-AUDITING SKILL**

[Same as Variant A]
```

**Add to builder-variant-c prompt (after line 196):**

```markdown
**STEP 1: INVOKE TENSION-COMPOSITION SKILL (FULL, UNMODIFIED)**

Read `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines).

**Run Phases 0 through 5 with FULL anti-gravity:**
- Phase 0D prohibition: ABSOLUTE (lines 69-90)
- Phase 3.5 gate: MANDATORY (lines 649-708) — must answer all 5 questions BEFORE Phase 4
- Phase 4: mechanism-catalog.md NOW PERMITTED
- Phase 5: case-studies/ NOW PERMITTED (2-3 most similar, divergence verification)

**STEP 2: INVOKE PERCEPTUAL-AUDITING SKILL**

[Same as Variant A]
```

**Add to builder-variant-d prompt (after line 197):**

```markdown
**YOU DO NOT invoke tension-composition skill.**
Build using compositional-core/ library patterns directly.

**AFTER BUILDING:**
1. Invoke `~/.claude/skills/perceptual-auditing/SKILL.md`
2. Run Mode 1 (Embedded): PA-01 through PA-05
3. If PA-05 = NO, fix before completion
```

**Total additions:** 5 builder prompts

---

### Fix 3: Add Critical Protocols to Evaluator Prompts

**Add to blind-judge-a prompt (after line 237):**

```markdown
**INVOKE PERCEPTUAL-AUDITING SKILL**

Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines).

**CRITICAL PROTOCOLS (MANDATORY):**

**1. COLD LOOK PROTOCOL (lines 485-500) — REQUIRED BEFORE ANY QUESTIONS:**
- CLEAR: Close all CSS files, specs, convention docs
- LOOK (5 sec): Open viewport screenshot, absorb shape/color/weight (do NOT read text)
- REACT (immediate): Write 4 locked responses:
  - Gut reaction: [one sentence — what did you FEEL?]
  - Worst thing: [one element or area — fix first?]
  - Best thing: [one element — protect this]
  - Ship verdict: YES / YES WITH RESERVATIONS / NO
- LOCK: These responses FINAL, cannot change after reading specs
- REPEAT independently for each viewport

**2. LANGUAGE HARD BLOCK (lines 607-610):**
Answers may NOT contain: px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position, or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing.

**3. SCROLL-THROUGH PROTOCOL (lines 502-528) — MANDATORY:**
[Implementation details from skill]

**QUESTION SET:**
- Tier 1 (MANDATORY): PA-01 through PA-05 (lines 74-81)
- Tier 2 (STANDARD): PA-06 through PA-20 (lines 84-142)
- Responsive: PA-21 through PA-23 at 768px (lines 226-230)

For each question: PASS/FAIL + justification.
```

**Add to blind-judge-b prompt (after line 242):**

```markdown
**INVOKE PERCEPTUAL-AUDITING SKILL**

Read `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines).

**FRESH-EYES MODE:**
- You have NO knowledge of the design system
- You have NOT read compositional-core/ files
- Sharp edges are INTENTIONAL, not errors
- Answer PA questions based ONLY on what you SEE

**CRITICAL PROTOCOLS:**
[Same as judge-a: Cold Look, Language Hard Block, Scroll-Through]
```

**Add to programmatic-auditor prompt (after line 221):**

```markdown
**LOAD GUARDRAILS FROM:**

1. `~/.claude/skills/perceptual-auditing/SKILL.md` (lines 258-328: Quantitative Guardrails)
2. `/Users/.../compositional-core/identity/prohibitions.md` (Soul constraints)
3. `/Users/.../compositional-core/vocabulary/tokens.css` (Palette, spacing tokens)

**19 BINARY CHECKS:**
- Soul (6): FROM prohibitions.md
- Guardrails (8): FROM perceptual-auditing skill lines 262-328
- Tokens (3): FROM tokens.css
- Viewport (2): re-run all 8 guardrail checks at 768px
```

**Total additions:** 3 evaluator prompts

---

### Fix 4: Add Skill Citations to Integration-Auditor Prompt

**Add to integration-auditor prompt (after line 252):**

```markdown
**REFERENCE FILES FOR PD CRITERIA:**

**PD-01 to PD-12 are Phase D-specific criteria** (defined in this plan).

**Skill references for specific criteria:**
- PD-05 (Mechanism application): `/Users/.../compositional-core/grammar/mechanism-catalog.md` (18 mechanisms)
- PD-06 (Divergence check): `/Users/.../compositional-core/case-studies/_INDEX.md` + `~/.claude/skills/tension-composition/SKILL.md` lines 649-708
- PD-08 (Token compliance): `~/.claude/skills/perceptual-auditing/SKILL.md` lines 262-328 (Quantitative Guardrails)
- PD-11 (Phase 3.5 gate): `~/.claude/skills/tension-composition/SKILL.md` lines 649-708
```

**Total additions:** 1 agent prompt

---

### Fix 5: Add Skill Citations to Report-Writer Prompt

**Add to report-writer Artifact #7 section (after line 352):**

```markdown
**ARTIFACT #7: SKILL INTEGRATION REPORT (§7)**

**Read builder logs + cross-check against:**

1. `~/.claude/skills/tension-composition/SKILL.md` (1,149 lines)
   - Verify Phases 0-5 completion (check log timestamps)
   - Phase 0: 4 sub-steps (0A, 0B, 0C, 0D) — lines 40-90
   - Phase 1: Multi-Axis Questioning — lines 92-176
   - Phase 2: Tension Derivation — lines 178-254
   - Phase 3: Metaphor Collapse
   - Phase 3.5: Divergence Gate (Variant C) — lines 649-708
   - Phase 4: Compositional Layout
   - Phase 5: Output

2. `~/.claude/skills/perceptual-auditing/SKILL.md` (736 lines)
   - Verify Mode 1 (Embedded) completion for all 5 builders
   - Verify PA-01 through PA-05 answered

**CLARIFY "6 PERCEPTUAL GUARDRAILS":**
[Plan currently says "6 guardrails" but skill does NOT define "the 6" — specify which 6:
container width, padding, compression ratio, line-height, CPL, breathing zones]
```

**Total additions:** 1 agent prompt

---

## FULL PATH REFERENCE TABLE

**Every location in plan that should reference a skill path:**

| Line | Section | Current Text | Should Reference | Fix Type |
|------|---------|--------------|-----------------|----------|
| 78 | Variant A reads | ✅ Has path | — | None |
| 84 | Variant A prohibition | "case-studies/ FORBIDDEN" | Add: "per TC skill lines 69-90" | Citation |
| 98 | Variant B modification | "Phase 0D prohibition REMOVED" | Add: "TC skill lines 69-90 REPLACED" | Citation + protocol |
| 105 | Variant C phase gating | "tension-composition skill" | Add full path | Full path |
| 108 | Variant C Phase 3.5 | "Phase 3.5: DIVERGENCE GATE" | Add: "per TC skill lines 649-708" | Citation |
| 110 | Variant C Phase 4 | "mechanism-catalog.md" | Add: "per TC skill Phase 4.0" | Citation |
| 111 | Variant C Phase 5 | "case-studies/" | Add: "per TC skill Phase 5" | Citation |
| 193 | Track 1 table | "PA only" | Add full path | Full path |
| 194 | Variant A table | "TC + PA" | Add full paths | Full path |
| 195 | Variant B table | "TC + PA" | Add full paths | Full path |
| 196 | Variant C table | "TC + PA" | Add full paths | Full path |
| 197 | Variant D table | "PA only" | Add full path | Full path |
| 222 | Programmatic checks | "guardrails" | Add: "per PA skill lines 262-328" | Citation |
| 237 | Judge A questions | "PA-01 through PA-05" | Add full path + Cold Look Protocol | Full path + protocol |
| 238 | Judge A questions | "PA-06 through PA-20" | Add full path | Full path |
| 242 | Judge B questions | Same as judge A | Add full path + Fresh-eyes definition | Full path + protocol |
| 257 | Integration PD-05 | "18 mechanisms" | Add: "mechanism-catalog.md path" | Citation |
| 258 | Integration PD-06 | "divergence check" | Add: "TC skill lines 649-708" | Citation |
| 352 | Artifact #7 | "tension-composition skill" | Add full path | Full path |
| 356 | Artifact #7 | "6 perceptual guardrails" | Add: "per PA skill" + clarify which 6 | Citation + clarification |
| 592 | Source files table | ✅ Has path | — | None |
| 593 | Source files table | ✅ Has path | — | None |

**Total fixes needed:** 21 locations

---

## RECOMMENDATIONS

### CRITICAL (MUST FIX BEFORE EXECUTION)

1. **Add full paths to 11 incomplete skill references** (Fix 1)
2. **Add explicit invocation instructions to 5 builder prompts** (Fix 2)
3. **Add Cold Look Protocol, Language Hard Block, Scroll-Through to 2 judge prompts** (Fix 3)
4. **Specify Variant B modification protocol** (exact line numbers to skip, replacement text)
5. **Add skill citations to programmatic-auditor, integration-auditor, report-writer** (Fixes 3-5)

### HIGH PRIORITY (SHOULD FIX)

6. **Clarify "6 perceptual guardrails"** — plan says 6, skill does NOT define "the 6" as a set
7. **Add Phase 0 structure reference** (0A/0B/0C/0D) to all TC skill invocations
8. **Add Temporal Firewall** to judge prompts (auditors NEVER see Lock Sheet before Cold Look)
9. **Add metaphor conflict priority** to builder prompts (when metaphor violates floors, adjust metaphor)

### MEDIUM PRIORITY (COULD FIX)

10. **Clarify Tier 2 question range** — plan says PA-06–PA-20 (subset), skill defines Tier 2 as PA-06–PA-41
11. **Add axis selection protocol** to TC skill invocations (Core Four + Extended Five + Structural Triggers)
12. **Add PA-42/43/44** (metaphor questions) to blind judges for metaphor-driven layouts

---

## ESTIMATED FIX TIME

- **Critical fixes:** 2-3 hours (systematic path addition + invocation instructions)
- **High priority fixes:** 1-2 hours (protocol additions + clarifications)
- **Medium priority fixes:** 30-60 min (documentation improvements)

**Total:** 3.5-6 hours to achieve PASS status

---

## OVERALL VERDICT

**BLOCKING DEFICIENCY** — Plan cannot execute without critical fixes.

**Risk if unfixed:**
- Builders will NOT invoke skills (no explicit instructions)
- Judges will NOT follow Cold Look Protocol (contaminated by prior knowledge)
- Agents will use WRONG guardrail values (outdated PA skill vs current compositional-core)
- Variant A will NOT be isolated (no Phase 0D prohibition enforcement)
- Variant B modification will FAIL (no protocol for removing skill lines)
- Integration auditor will NOT verify Phase 3.5 gate (no skill citation)

**Path to PASS:**
1. Fix all 21 skill path references
2. Add invocation instructions to 9 agent prompts
3. Add 3 critical protocols (Cold Look, Language Hard Block, Scroll-Through) to judge prompts
4. Specify Variant B modification protocol
5. Clarify "6 perceptual guardrails" definition

---

**END AUDIT**
