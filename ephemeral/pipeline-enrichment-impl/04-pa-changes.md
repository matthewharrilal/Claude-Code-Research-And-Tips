# 04 -- PA Questions Change Manifest

**Agent:** PA Questions Change Manifest Builder (Opus 4.6)
**Date:** 2026-02-20
**Target file:** `design-system/pipeline/flagship-pa-questions.md`
**Cross-file impacts:** `~/.claude/skills/perceptual-auditing/SKILL.md` (auditor assignment table, Mode 4 team structure), `~/.claude/skills/build-page/SKILL.md` (auditor assignments, lines 234-248)

---

## FILES READ

1. `design-system/pipeline/flagship-pa-questions.md` (144 lines, 8 Tier 5 questions, 9 auditor assignments)
2. `~/.claude/skills/perceptual-auditing/SKILL.md` (988 lines, full 48 standard + Tier 5 PA set)
3. `ephemeral/pipeline-enrichment/execution-report-findings.md` (B9 metaphor pervasion blind spot)
4. `ephemeral/pipeline-enrichment-research/11-master-synthesis.md` (master synthesis, "DO NOT add new PA questions" recommendation)
5. `ephemeral/pipeline-enrichment-research/05-verification-deep-dive.md` (PA coverage gaps, proposed PA-68/69/70)
6. `ephemeral/pipeline-enrichment-research/17-concept-flow-trace.md` (concepts lost at PA stage)
7. `~/.claude/skills/build-page/SKILL.md` (auditor assignments, lines 234-248)

---

## STRATEGIC FRAMING

### The Tension

Two research reports pull in opposite directions:

**Report 11 (Master Synthesis):** "Do NOT add new PA questions. The current 48 + 8 Tier 5 suite is comprehensive. Adding questions increases auditor load and PA contention without empirical evidence of a detection gap." (Section 6, "What NOT to do," item 2)

**Report 05 (Verification Deep Dive):** Proposes PA-68, PA-69, PA-70 as additions that "WOULD HELP" -- each targeting a specific stack layer gap (L4 transition texture, L5 spatial confidence, content-form resonance).

**B9 Finding (Execution Report):** PA-44 tests metaphor expression quality but NOT spatial coverage. A page could have metaphor in sections 1-3 that disappears in sections 4-8. No question detects this.

### My Resolution

Report 11's caution is correct IN GENERAL -- the pipeline has never been run, and adding questions before seeing results is speculative. However:

1. **B9 is a BUG FIX, not enrichment.** PA-44 asks "could you sense the metaphor from visual structure alone?" but does not ask "does the metaphor persist across the ENTIRE page?" These are different questions. A page could score YES on PA-44 (metaphor is structural in sections 1-3) while the metaphor completely vanishes in sections 4-8. This is a detection gap, not a speculative improvement.

2. **PA-68 through PA-70 are DEFERRED, not applied.** Following Report 11's "TEST FIRST" verdict. These proposals are documented here for pre-registration but NOT recommended for immediate application.

3. **PA-44 sharpening is LOW RISK.** Modifying one existing question to also cover spatial extent does not add auditor load (same auditor, same question, slightly expanded scope).

**Decision:**
- **DO NOW:** 1 edit (PA-44 modification for B9 metaphor coverage)
- **DEFER TO TEST:** 0 new questions (PA-68/69/70 pre-registered but not applied)
- **GO BEYOND:** 1 edit (sharpen PA-63 fractal zoom to cover parametric echo)

---

## EDITS

### EDIT 1: Modify PA-44 to Include Metaphor Spatial Coverage (B9 Fix)

**Source:** B9 (Metaphor Pervasion Blind Spot) from execution-report-findings.md
**Type:** BUG FIX
**Priority:** HIGH

**Old text** (flagship-pa-questions.md, lines 93-94 in the SKILL.md Metaphor+Ideology section; also referenced in flagship-pa-questions.md auditor G assignment):

In `~/.claude/skills/perceptual-auditing/SKILL.md`, lines 275-276:
```
| **PA-44** | If you removed all labels, headings, and text annotations, could you still sense the metaphor or organizing concept from the visual structure alone? | Implicit vs explicit metaphor |
```

**New text:**
```
| **PA-44** | If you removed all labels, headings, and text annotations, could you still sense the metaphor or organizing concept from the visual structure alone? Does the metaphor persist across the ENTIRE page, or does it fade or disappear in some sections? | Implicit vs explicit metaphor + spatial coverage |
```

**Detailed specification for flagship-pa-questions.md:**

This file does NOT contain PA-44 directly (PA-44 is in the perceptual-auditing SKILL.md as a standard Tier 2 question). However, the B9 fix requires that the metaphor pervasion concept is ALSO represented in the Tier 5 assessment. Two options:

**Option A (RECOMMENDED): Add metaphor coverage clause to PA-44 in SKILL.md only.**

PA-44 already lives in Auditor G's assignment. Expanding the question to include "Does the metaphor persist across the ENTIRE page?" gives Auditor G the spatial coverage check without adding a new question number. This keeps the total at 56 questions.

**Option B (ALTERNATIVE): Add new PA-68 for metaphor spatial coverage.**

A new dedicated question would be:

```
## PA-68: Metaphor Pervasion

**Question:** "Scroll through the entire page. Does the organizing metaphor or visual concept feel present in EVERY major section, or does it appear in some sections and disappear in others? If it fades, where does it stop?"

**Detects:** Metaphor spatial coverage. A page can have a strong structural metaphor in its opening sections that degrades to generic styling by the middle or end. This tests whether the metaphor PERVADES the entire composition or is front-loaded.

**Scoring:**
- YES: Metaphor is perceptible in all scroll thirds (top, middle, bottom). It may express differently in each section but maintains presence.
- NO: Metaphor disappears or becomes unrecognizable in one or more scroll thirds. Later sections could belong to a different page.

**Auditor Assignment:** G (Metaphor+Ideology)
```

**Recommendation:** Option A (modify PA-44). Reasons:
1. Does not add to the 56-question total
2. Auditor G already evaluates PA-44 -- adding a spatial clause is a natural extension
3. Report 11 explicitly says "Do NOT add new PA questions" -- modifying an existing one respects that guidance
4. The two aspects (structural vs announced AND spatial coverage) are evaluated in the same perceptual pass (scroll through, notice where metaphor is felt vs not)

**Impact on auditor workload:**
- Auditor G: 3 questions (unchanged count). PA-44 becomes slightly more demanding (must evaluate both expression quality AND spatial persistence), but this is a single additional observation during the same screenshot review. Estimated +30 seconds per viewport.

**Impact on Tier 5 scoring:** NONE. PA-44 is a standard Tier 2 question, not a Tier 5 question. No threshold changes needed.

**Cross-file impact:**
- `~/.claude/skills/perceptual-auditing/SKILL.md`: Modify PA-44 question text (1 line change in the Metaphor+Ideology table, lines 293-294)
- `~/.claude/skills/perceptual-auditing/SKILL.md`: Modify PA-44 in the Metaphor-Awareness section (lines 276, where PA-44 is stated in full)
- `design-system/pipeline/flagship-pa-questions.md`: NO CHANGE needed (PA-44 is not in this file)
- `~/.claude/skills/build-page/SKILL.md`: NO CHANGE needed (auditor G's assignment "PA-42, 43, 44" stays the same)

---

### EDIT 2: Sharpen PA-63 to Detect Parametric Echo (GO BEYOND)

**Source:** Report 17 concept flow trace (parametric echo at line 144 of conventions-brief has zero PA detection); Report 05 fractal coherence analysis
**Type:** GO BEYOND
**Priority:** MEDIUM

**Rationale:** The conventions brief (line 144) defines "parametric echo" as "component padding varies by zone density." PA-63 asks about fractal self-similarity (does a component echo the page's design language?) but does NOT ask whether the SAME component type looks DIFFERENT in different zones. A card in a sparse zone should feel different from the same card in a dense zone -- this is the parametric echo concept. PA-63 already tests the right scale (component) but misses the parametric dimension.

**Old text** (flagship-pa-questions.md, lines 51-61):
```
## PA-63: Fractal Zoom Coherence

**Question:** "Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate?"

**Detects:** Fractal self-similarity across scales. Whether Component-scale design echoes Page-scale organizing principle. Middle achieves 2 scales; Flagship needs 3+ STRONG scales with the same pattern direction at each.

**Scoring:**
- YES: Auditor identifies a component whose internal structure mirrors page-level design language AND can NAME the shared language (e.g., "both use heavy-to-light weight progression")
- NO: Components look generic (could belong to any page) OR relationship feels accidental

**Auditor Assignment:** E (Grid+Layout)
```

**New text:**
```
## PA-63: Fractal Zoom Coherence

**Question:** "Zoom into one component (a card, callout, table, or code block). Does its internal design echo the page's overall design language at a smaller scale? Then find the SAME component type in a different section -- does it adapt to its surroundings, or does it look identical regardless of where it sits?"

**Detects:** Fractal self-similarity across scales AND parametric echo (components adapting to zone context). Whether Component-scale design echoes Page-scale organizing principle, AND whether components respond to their local environment. Middle achieves 2 scales with static components; Flagship needs 3+ scales with context-responsive components.

**Scoring:**
- YES: Auditor identifies a component whose internal structure mirrors page-level design language AND can NAME the shared language (e.g., "both use heavy-to-light weight progression"). BONUS: if the same component type adapts visibly to different zones (denser in dense zones, airier in sparse zones), this is STRONG YES.
- NO: Components look generic (could belong to any page) OR relationship feels accidental OR same component type is visually identical in every zone.

**Auditor Assignment:** E (Grid+Layout)
```

**Impact on auditor workload:**
- Auditor E: 6 questions (unchanged count). PA-63 becomes slightly more demanding (must compare same component across zones, not just examine one component). Estimated +60 seconds for the cross-zone comparison.

**Impact on Tier 5 scoring:** NONE. The YES threshold stays the same (identifying page-level echo). The parametric echo observation is scored as "STRONG YES" -- it distinguishes excellent from good within the YES category but does not change the YES/NO binary. No threshold changes needed.

**Cross-file impact:**
- `design-system/pipeline/flagship-pa-questions.md`: Edit PA-63 question text, Detects, and Scoring (lines 51-61)
- `~/.claude/skills/perceptual-auditing/SKILL.md`: Edit PA-63 in the Tier 5 Compositional Depth table (line 376) -- update the question text column
- `~/.claude/skills/build-page/SKILL.md`: NO CHANGE needed (Auditor E's assignment "PA-14, 15, 37, 38, 39, **63**" stays the same)

---

## PRE-REGISTERED BUT DEFERRED (Apply only if PA-05 2.5-3.0 after first /build-page run)

### DEFERRED-1: PA-68 Transition Texture Variety

**Source:** Report 05, Section 2.4, "WOULD HELP" item 1
**Rationale:** PA-62 asks whether BOTH dramatic and quiet transitions exist. PA-68 would ask whether transitions have different TEXTURES (one chromatic-dominant, another structural-dominant). This is L4 multi-coherence variation -- a compositional depth property.

**Full question text (pre-registered):**
```
## PA-68: Transition Texture Variety

**Question:** "Look at 3 different section transitions on this page. Do they all change in the same way, or does each transition have its own character? Describe how at least 2 transitions differ."

**Detects:** Dynamic range within multi-coherence. Whether the builder uses BOTH dramatic (3+ channel) and quiet (1-2 channel) transitions, AND whether transition CHARACTER varies (not just intensity). A page where every transition shifts the same 3 properties is less composed than one where different boundaries use different channel combinations.

**Scoring:**
- YES: Auditor describes >= 2 transitions with perceptibly different character (e.g., "one transition mainly changes color, the other mainly changes spacing and borders") AND the variety feels deliberate.
- NO: All transitions feel the same, OR variety feels random/accidental.

**Auditor Assignment:** D (Flow+Pacing)
```

**If applied:**
- Auditor D: 6 -> 7 questions
- Tier 5 total: 8 -> 9 questions
- Tier 5 scoring thresholds would need recalibration (see threshold recommendation below)

### DEFERRED-2: PA-69 Deliberate Asymmetry

**Source:** Report 05, Section 2.4, "WOULD HELP" item 2
**Rationale:** PA-66 tests negative space variety. PA-69 would test whether the ENTIRE spatial composition is confident -- asymmetry as a compositional tool vs symmetric safety. L5 spatial confidence.

**Full question text (pre-registered):**
```
## PA-69: Deliberate Asymmetry

**Question:** "Find a place where something is NOT perfectly balanced or centered. Does the asymmetry feel intentional and confident, or accidental and sloppy?"

**Detects:** Spatial confidence through asymmetric deployment. Symmetric layouts are safe but uncreative. Deliberate asymmetry demonstrates compositional confidence -- the designer chose to place weight off-center because it serves the content, not because they made a mistake.

**Scoring:**
- YES: Auditor identifies >= 1 asymmetric element that feels CONFIDENT (intentional, serving content hierarchy) AND the asymmetry contributes to the page's visual interest.
- NO: Everything is symmetrically centered, OR asymmetry feels accidental.

**Auditor Assignment:** E (Grid+Layout)
```

**If applied:**
- Auditor E: 6 -> 7 questions
- Tier 5 total: 8 -> 10 (if PA-68 also applied) or 9 (if PA-69 only)

### DEFERRED-3: PA-70 Content-Form Echo

**Source:** Report 05, Section 2.4, "WOULD HELP" item 3
**Rationale:** No existing question explicitly tests content-form resonance -- whether the visual treatment RESPONDS to content complexity. Dense analytical paragraphs should look denser than light introductions.

**Full question text (pre-registered):**
```
## PA-70: Content-Form Echo

**Question:** "Pick the most complex piece of content on this page (a table, a code block, a dense paragraph). Does the visual treatment of that content MATCH its complexity? Does a dense paragraph look denser than a light introduction?"

**Detects:** Content-form resonance. Whether visual treatment RESPONDS to content complexity or applies uniform styling. A page where every section looks the same regardless of content complexity has zero content-form coupling. This is the mechanism-catalog concept (content-mechanism fit) tested perceptually.

**Scoring:**
- YES: Auditor identifies content complexity variation AND the visual treatment responds to it (denser content = tighter spacing, more borders, different type treatment; lighter content = more air, fewer mechanisms).
- NO: All content gets identical visual treatment regardless of complexity.

**Auditor Assignment:** B (Readability+Typography)
```

**If applied:**
- Auditor B: 5 -> 6 questions
- Tier 5 total: varies by combination

---

## CONCEPTS EVALUATED BUT NOT ADDRESSED

### Multi-Coherence Direction (4 semantic directions: DEEPENING/OPENING/FOCUSING/RESOLVING)

**Report 17 finding:** Total extinction past the conventions brief. No PA question detects semantic direction coherence.

**Decision: DO NOT ADD PA question.**

Reasons:
1. Report 17 itself acknowledges this is correct: "PA questions use perceptual language without compositional vocabulary" -- and this is BY DESIGN per the fresh-eyes principle
2. PA-62 (transition variation) indirectly captures direction coherence: an auditor who says "one transition feels like things are getting denser while the other feels like things are opening up" IS detecting direction variation perceptually
3. Adding a question like "Do all transitions move in the same emotional direction?" would require the auditor to have compositional vocabulary -- violating the language hard block
4. The weaver is the correct place to synthesize PA observations into direction coherence assessment (proposed in Report 05 as Weaver Stack Verdict)

### Stack Progression (scales -> channels -> multi-coherence -> anti-scale as architecture)

**Report 17 finding:** Never explicitly codified. Zero PA detection.

**Decision: DO NOT ADD PA question.**

Reasons:
1. Stack progression is an ARCHITECTURAL concept, not a perceptual one. Auditors cannot see "stack integration" -- they see multi-voice composition (PA-65), fractal coherence (PA-63), restraint (PA-64), etc. These ARE the stack's layers expressed in perceptual terms.
2. PA-65 (music analogy: "single instrument / choir / ensemble") is the closest perceptual proxy for stack integration. If a page achieves ENSEMBLE, the stack is integrated. If CHOIR, integration is partial.
3. The Weaver Stack Verdict (proposed in Report 05) is the correct instrument for stack integration assessment.

### Return-Path Extinction (fix cycle carries zero concept-level feedback)

**Report 17 finding:** Fix cycle degrades from recipe to checklist. Builder gets symptoms, not architectural guidance.

**Decision: NOT A PA QUESTION PROBLEM.**

This is a SKILL.md fix cycle structure problem, not a PA detection gap. The PA questions are working correctly -- they detect perceptual qualities. The loss occurs in the weaver-to-fix-cycle translation, not in the PA questions themselves. See `02-skill-changes.md` for fix cycle restructuring edits.

---

## SUMMARY

| # | Edit | Type | File | Lines Changed | New Question? |
|---|------|------|------|---------------|---------------|
| 1 | Modify PA-44 (add metaphor spatial coverage) | BUG FIX (B9) | SKILL.md (2 locations) | ~2 lines modified | NO (existing question expanded) |
| 2 | Sharpen PA-63 (add parametric echo) | GO BEYOND | flagship-pa-questions.md + SKILL.md | ~8 lines modified | NO (existing question expanded) |
| D1 | PA-68 (Transition Texture Variety) | DEFERRED | flagship-pa-questions.md | ~15 lines new | YES (pre-registered, not applied) |
| D2 | PA-69 (Deliberate Asymmetry) | DEFERRED | flagship-pa-questions.md | ~15 lines new | YES (pre-registered, not applied) |
| D3 | PA-70 (Content-Form Echo) | DEFERRED | flagship-pa-questions.md | ~15 lines new | YES (pre-registered, not applied) |

### Total IMMEDIATE changes: 2 edits, 0 new questions, ~10 lines modified across 2 files
### Total DEFERRED changes: 3 new questions, ~45 lines new, conditional on PA-05 2.5-3.0

### Tier 5 Threshold Recommendation

**IMMEDIATE:** No change. Tier 5 remains 8 questions with the same scoring thresholds (7-8 COMPOSED, 5-6 APPROACHING, 3-4 STRUCTURED, 0-2 VOCABULARY ONLY). Edits 1 and 2 modify existing questions, not the question count.

**IF DEFERRED QUESTIONS APPLIED (PA-68 + PA-69 + PA-70):**

Tier 5 would expand from 8 to 11 questions. Thresholds would need recalibration:

| YES Count (of 11) | Verdict | Equivalent to Current |
|-------------------|---------|----------------------|
| 9-11 | COMPOSED | Was 7-8/8 (high bar maintained) |
| 7-8 | APPROACHING | Was 5-6/8 |
| 4-6 | STRUCTURED | Was 3-4/8 |
| 0-3 | VOCABULARY ONLY | Was 0-2/8 |

These thresholds maintain the same approximate pass rates: COMPOSED requires ~82% YES (was ~88%), APPROACHING requires ~64% (was ~63%).

### What Was NOT Included and Why

1. **PA-71 (channel count at boundaries):** Rejected by Report 05 -- turns auditor into gate runner. SC-13 already measures this. PA-62 captures it perceptually.

2. **PA-72 (fractal self-similarity levels):** Rejected by Report 05 -- uses stack vocabulary. Biases auditor toward framework validation. PA-63 already tests this in accessible language.

3. **PA-73 (anti-scale model rating):** Rejected by Report 05 -- imposes L5 framework on auditors. PA-60 (density), PA-64 (restraint), PA-66 (confidence) already cover the three factors. The WEAVER should synthesize, not auditors.

4. **Metaphor quality hierarchy question (structural > atmospheric > labeled > announced):** Already covered by PA-44's existing "from the visual structure alone?" framing. Adding a separate hierarchy assessment would duplicate PA-44 and add auditor load.

5. **Content-form coupling as standard (non-Tier-5) question:** Considered adding to the standard 48 questions but this is more a Tier 5 compositional depth property than a floor detection question. Deferred as PA-70 (Tier 5).

---

*End of PA changes manifest. 04-pa-changes.md complete.*
