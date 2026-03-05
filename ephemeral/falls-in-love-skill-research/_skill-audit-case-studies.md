# /falls-in-love Skill Audit: Wave 3 (Case Studies) — Per-Stage Depth

**Audit Focus:** Does Wave 3 adequately prescribe 10+ passes for EACH case study stage (DD, OD, AD, CD) with stage-specific metacognitive evaluation?

**Audit Date:** 2026-03-03
**File Audited:** `~/.claude/skills/falls-in-love/SKILL.md` (817 lines)
**Verdict:** CRITICALLY DEFICIENT on the prescribed requirement. 7 gaps identified.

---

## Executive Summary

Wave 3 (lines 419-440) prescribes **10-15 total passes** across ALL case studies, lumped into a single undifferentiated wave. The user's requirement was **10+ passes per stage** (DD, OD, AD, CD), which demands **40+ passes minimum**. Wave 3 delivers roughly 25-33% of the required depth. Additionally, AD case studies are entirely absent from both the design system's case study directory and the skill's input list, making the "per stage" requirement impossible to satisfy for AD without first creating the missing files.

---

## Gap 1: AD Case Studies Do Not Exist

**Section:** Wave 3 Input list (line 421)
**Severity:** BLOCKING

**What exists in `design-system/compositional-core/case-studies/`:**
- DD: DD-003-islands.md, DD-004-layers.md, DD-006-fractal.md (+ 3 visual companions)
- OD: OD-001-conversational.md, OD-004-confidence.md, OD-006-creative.md
- CD: CD-001-reasoning-inside-code.md, CD-005-multi-axis-transition.md, CD-006-pilot-migration.md
- Meta: ANTI-PRESCRIPTION-TEMPLATE.md, README.md

**What does NOT exist:**
- Zero AD (Axis Dimension) case study files. No `AD-*.md` files in the case studies directory.

**What exists elsewhere:** There ARE AD specification/provenance documents at `design-system/specification/provenance/stage-4-axis-ad/` (AD-AUDIT-SYNTHESIS.md, AD-CONVENTION-SPEC.md, AD-PA-CONVENTIONS.md, AD-RESEARCH-GATE.md, AD-SYNTHESIS.md, AD-outbound-findings.md), and there are AD HTML explorations in `design-system/axis/` (AD-001 through AD-006). But these are raw specification/provenance documents and HTML explorations, NOT anti-prescription-formatted case studies suitable for the case study layer.

**The skill lists 9 case studies on line 421:**
```
DD-003-islands.md, DD-004-layers.md, DD-006-fractal.md,
OD-001-conversational.md, OD-004-confidence.md, OD-006-creative.md,
CD-001-reasoning.md, CD-005-transition.md, CD-006-pilot.md
```

AD is completely absent. The user's requirement of "10+ passes with each slice of the corpus... especially around DD, OD, AD, CD" cannot be satisfied because one of the four stages has no case study material.

**Recommendation:**
1. Create 2-3 AD case studies in anti-prescription format (e.g., AD-002-z-pattern.md, AD-004-compound.md, AD-006-compound.md), extracting from the existing AD explorations in `design-system/axis/` and the AD specification documents in `design-system/specification/provenance/stage-4-axis-ad/`.
2. Add the new AD case studies to Wave 3's input list.
3. Until AD case studies are created, the skill should explicitly reference the AD provenance documents and HTML explorations as substitute input for the AD sub-wave.

---

## Gap 2: No Per-Stage Sub-Wave Structure (THE CRITICAL GAP)

**Section:** Wave 3, lines 419-440
**Severity:** CRITICAL

Wave 3 prescribes a single block of 10-15 passes with a single rotation:

```
Rotation: OD-006 -> DD-006 -> CD-006 -> OD-004 -> DD-003 -> OD-001 ->
mechanism-catalog -> grammar -> OD-006(2nd) -> DD-006(2nd) -> CD-006(2nd) -> depth passes
```

This interleaves DD, OD, and CD files throughout a single wave. With 10-15 passes and 9 case studies + 2 grammar files = 11 inputs, each file gets approximately **1.0-1.4 passes of primacy**. This is catastrophically inadequate.

The user explicitly required: "10+ passes with each slice of the corpus... especially around DD, OD, AD, CD." This means:

- Sub-wave 3A: DD case studies (DD-003, DD-004, DD-006 + 3 visual companions). 10+ passes.
- Sub-wave 3B: OD case studies (OD-001, OD-004, OD-006). 10+ passes.
- Sub-wave 3C: AD case studies (once created). 10+ passes.
- Sub-wave 3D: CD case studies (CD-001, CD-005, CD-006). 10+ passes.
- Total: 40+ passes minimum.

**What the current structure produces:**
- DD-006 gets primacy on passes 2 and 10. DD-003 gets primacy on pass 5. DD-004 is not even in the rotation.
- OD-006 gets primacy on passes 1 and 9. OD-004 gets primacy on pass 4. OD-001 gets primacy on pass 6.
- CD-006 gets primacy on passes 3 and 11. CD-001 and CD-005 are not in the rotation at all.
- Total DD primacy passes: ~3. Total OD primacy passes: ~4. Total CD primacy passes: ~2.

This means the agent spends roughly 2-4 passes focused on each stage's case studies. The user required 10+.

**Recommendation:** Restructure Wave 3 into four sub-waves:

```
Wave 3A: DD Case Studies (10-12 passes)
Wave 3B: OD Case Studies (10-12 passes)
Wave 3C: AD Case Studies (10-12 passes)
Wave 3D: CD Case Studies (10-12 passes)
Wave 3E: Grammar Integration (8-10 passes)
```

This yields 48-58 passes for the full Wave 3 complex, giving each stage the depth the user required.

---

## Gap 3: No Stage-Specific Metacognitive Evaluation

**Section:** Wave 3, 5-layer evaluation (lines 429-434)
**Severity:** SIGNIFICANT

The 5-layer evaluation for Wave 3 is generic across all case study stages:

- L1 asks about "fractal self-similarity," "density islands," "culmination spread," "transition variety," "border-weight gradient" -- these are a mix of DD, OD, and CD concepts all in one question.
- L2 mentions DD-006 and OD-006 as examples but does not differentiate what questions to ask when absorbing DD vs OD vs CD.
- L3 asks a single cognitive mode question (instructions vs vocabulary) that applies identically regardless of stage.
- L4 prescribes the swap test generically.
- L5 mentions density evaluation depth but does not differentiate by stage.

**What stage-specific evaluation should look like:**

When absorbing **DD** case studies, the evaluation should ask density-specific questions:
- L1-DD: "Does the page have density oscillation? Are there at least 3 distinct density levels? Does density encoding operate at the section, component, AND character level?"
- L2-DD: "Which DD case study changed how I perceive density in my page? Can I now see letter-spacing, line-height, and padding as density channels rather than just spacing values?"
- L3-DD: "Am I treating density as a single dimension (high/low) or as the multi-scale fractal system DD-006 demonstrates?"

When absorbing **OD** case studies, the evaluation should ask organization-specific questions:
- L1-OD: "Does the page have organizational logic? Do sections have a reading order that serves the content's argument? Is there a confidence gradient or epistemic structure?"
- L2-OD: "Which OD case study changed how I perceive organizational flow? Can I now see section progression as an argument about content structure?"
- L3-OD: "Am I using organization as mere layout sequencing (sections in order) or as content-semantic encoding (OD-004's confidence gradient)?"

When absorbing **AD** case studies, the evaluation should ask axis-specific questions:
- L1-AD: "Does the page have attention topology? Are there deliberate focal points, reading paths, and attention density gradients?"
- L2-AD: "Which AD material changed how I perceive where the reader's eye goes? Can I see the page as an attention field with hot spots and cold spots?"
- L3-AD: "Am I controlling attention deliberately (axis design) or letting it fall where CSS defaults place it?"

When absorbing **CD** case studies, the evaluation should ask combination-specific questions:
- L1-CD: "Do DD, OD, and AD operate simultaneously on the same elements? Or are they isolated (this zone is 'the density zone,' that zone is 'the organization zone')?"
- L2-CD: "Which CD case study changed how I perceive multi-dimensional interaction? Can I now see where changing one dimension ripples through the others?"
- L3-CD: "Am I combining dimensions or merely deploying them in sequence?"

**Recommendation:** Write separate 5-layer evaluations for each sub-wave (3A-DD, 3B-OD, 3C-AD, 3D-CD), with questions that are specific to the dimensional concerns of that stage.

---

## Gap 4: Visual Companion Files Not Referenced

**Section:** Wave 3 Input list (line 421)
**Severity:** MODERATE

The DD case studies have three visual companion files that provide Playwright rendering analysis:
- `dd-003-islands-visual.md` (28k)
- `dd-004-layers-visual.md` (9.5k)
- `dd-006-fractal-visual.md` (8.6k)

These files are NOT listed in Wave 3's input. They total approximately 46k of content that documents how the DD case studies actually render visually -- precisely the kind of material a devoted builder needs to develop density perception.

The case studies README (line 40-43) explicitly lists these as part of the case study directory:
```
Visual variants:
- dd-003-islands-visual.md (Playwright rendering analysis)
- dd-004-layers-visual.md (Playwright rendering analysis)
- dd-006-fractal-visual.md (Playwright rendering analysis)
```

**Recommendation:** Add the three visual companion files to the DD sub-wave input list. They should be rotated in alongside their parent case studies, ideally read immediately after the parent: DD-003 -> dd-003-islands-visual -> DD-004 -> dd-004-layers-visual -> etc.

---

## Gap 5: Pass-Level Deepening Applies Globally, Not Per Stage

**Section:** Wave 3, pass-level deepening (lines 436-439)
**Severity:** SIGNIFICANT

The current 3-phase deepening applies to the entire Wave 3 as a single block:

```
Passes 1-3: "What spatial ideas does this case study offer?" (extraction)
Passes 4-6: "How do these ideas interact with what I built in Waves 0-2?" (integration)
Passes 7-10: "Has this case study taught me something about my CONTENT?" (content-deepening)
```

With only 10-15 total passes, this gives each phase 3-5 passes. But if Wave 3 is restructured into sub-waves, the deepening should apply PER sub-wave, PER stage:

**Per DD sub-wave (10 passes):**
- Passes 1-3 (Extraction): "What DENSITY ideas does this DD case study offer? What density rhythms, density islands, density gradients exist here?"
- Passes 4-6 (Integration): "How do these DENSITY ideas interact with what I built? Does my page have density oscillation that matches the content's rhythm?"
- Passes 7-10 (Content-Deepening): "Has this DD case study taught me something about my content's DENSITY STRUCTURE that I didn't know? Does the content have fractal self-similarity like DD-006, or modular isolation like DD-003?"

**Per OD sub-wave (10 passes):**
- Passes 1-3 (Extraction): "What ORGANIZATIONAL ideas does this OD case study offer? What section sequencing, confidence encoding, editorial structure exists here?"
- Passes 4-6 (Integration): "How do these ORGANIZATIONAL ideas interact with what I built? Does my page have organizational logic that serves the content's argument?"
- Passes 7-10 (Content-Deepening): "Has this OD case study taught me something about my content's ORGANIZATIONAL STRUCTURE? Does the content have a confidence gradient like OD-004, or a dialogue structure like OD-001?"

And similarly for AD and CD sub-waves.

**Recommendation:** Rewrite the pass-level deepening as a per-sub-wave template with stage-specific questions, so the deepening protocol applies independently to each 10+ pass block.

---

## Gap 6: ANTI-PRESCRIPTION-TEMPLATE.md and README.md Not Referenced

**Section:** Wave 3 Input list (line 421)
**Severity:** LOW-TO-MODERATE

Two meta-files in the case studies directory are not referenced by Wave 3:

1. **`ANTI-PRESCRIPTION-TEMPLATE.md`** (19k) -- The template that structures all case study documentation. It includes the "NOT A TEMPLATE" warning, purpose statement, tension narrative, mechanism extraction instructions, and divergence assignment. Understanding this template helps the agent understand what PROCESS to extract from case studies rather than what PATTERNS to copy.

2. **`README.md`** (20k) -- The comprehensive guide to the case study layer. It includes the Jazz Real Book analogy, the correct reading order, the mechanism extraction protocol ("DO extract" vs "DO NOT extract"), and the two-layer architecture explanation (grammar vs case studies). This file is essential for framing HOW to absorb case studies productively.

Currently, Wave 3's L3 question (line 432) asks: "Am I reading these case studies as INSTRUCTIONS (deploy mechanism X) or as VOCABULARY (this is what fractal density looks like when someone has spent hours with it)?" This is exactly the framing that the README and ANTI-PRESCRIPTION-TEMPLATE provide -- but the agent is never directed to read them.

**Recommendation:** Add both files as pre-reading for Wave 3 (before the first sub-wave begins). The README and ANTI-PRESCRIPTION-TEMPLATE should be read once at the start of Wave 3 to establish the correct cognitive mode for absorbing case studies. They do not need primacy in the rotation, but they need to be read as framing.

---

## Gap 7: Total Pass Count Is 4x Short of Requirement

**Section:** Wave 3, minimum passes (line 427)
**Severity:** CRITICAL

**Current:** Wave 3 prescribes 10-15 passes minimum for ALL case studies combined.

**Required:** 10+ passes per stage x 4 stages (DD, OD, AD, CD) = 40+ passes minimum.

**The math:**
- Current total skill passes (Waves 0-8): 8 + 10 + 12 + 10 + 8 + 15 + 8 + 5 = **76 minimum**
- Revised Wave 3 (48+ passes for sub-waves + 8 for grammar integration): **+38 passes net increase**
- Revised total: **~114 minimum passes**

This falls within the skill's stated range of 100-200 passes (line 797), so the increase is consistent with the skill's own expectations. The current Wave 3 at 10-15 passes is anomalously short compared to other waves -- Wave 6 alone prescribes 15-25 passes.

**Impact on cost and time:**
- Current Wave 3 at 10-15 passes: ~1.5-2 hours
- Revised Wave 3 at 48-58 passes: ~6-7 hours
- This adds approximately 4-5 hours to the total build time
- The skill already states $150-300 per build and 6-10 hours -- the revised Wave 3 pushes toward the upper end but remains within the skill's own cost envelope if the other waves stay at minimums

**Recommendation:** Change Wave 3's minimum from 10-15 to 48-58 passes (structured as 4 sub-waves of 10-12 + grammar integration of 8-10). Update the minimum engagement table (line 319-331) to reflect the per-sub-wave minimums. Note that this does NOT require changing the skill's overall 100-200 pass target range or $150-300 cost range -- it simply redistributes passes to give case studies the depth the user required.

---

## Summary Table

| # | Gap | Severity | Current State | Required State |
|---|-----|----------|--------------|----------------|
| 1 | AD case studies absent | BLOCKING | Zero AD case study files exist | 2-3 AD case studies in anti-prescription format |
| 2 | No per-stage sub-waves | CRITICAL | 1 wave, 10-15 passes, all stages interleaved | 4 sub-waves, 10+ passes each, stages separated |
| 3 | No stage-specific metacognitive evaluation | SIGNIFICANT | Generic 5-layer evaluation across all stages | Per-stage 5-layer evaluation with DD/OD/AD/CD-specific questions |
| 4 | Visual companions not referenced | MODERATE | 3 DD visual files (46k) omitted from input | Visual files included in DD sub-wave rotation |
| 5 | Deepening applies globally, not per stage | SIGNIFICANT | 3-phase deepening across 10-15 total passes | 3-phase deepening per sub-wave with stage-specific questions |
| 6 | Meta-files not referenced | LOW-MODERATE | ANTI-PRESCRIPTION-TEMPLATE.md and README.md omitted | Both read as Wave 3 pre-reading to frame cognitive mode |
| 7 | Total pass count 4x short | CRITICAL | 10-15 passes total | 48-58 passes (4 sub-waves + grammar integration) |

---

## Proposed Wave 3 Structure (Replacement)

```
### Wave 3: Case Studies (48-58 passes across 5 sub-waves)

**Pre-reading (before first sub-wave):**
- case-studies/README.md (cognitive framing -- Jazz Real Book analogy, extraction protocol)
- case-studies/ANTI-PRESCRIPTION-TEMPLATE.md (template understanding -- what to extract, what not to copy)

---

#### Wave 3A: DD Case Studies -- Density Dimension (10-12 passes)

**Input:** DD-003-islands.md, dd-003-islands-visual.md, DD-004-layers.md,
dd-004-layers-visual.md, DD-006-fractal.md, dd-006-fractal-visual.md

**Rotation:** DD-006 -> dd-006-fractal-visual -> DD-004 -> dd-004-layers-visual ->
DD-003 -> dd-003-islands-visual -> DD-006(2nd) -> DD-004(2nd) -> DD-003(2nd) -> depth

**5-layer evaluation (DD-specific):**
- L1: "Does the page have density oscillation at 3+ levels? Are there density
  islands with adequate ocean? Does density encoding operate at section,
  component, AND character level?"
- L2: "Which DD case study changed how I perceive density? Can I now see
  letter-spacing, line-height, and padding as density CHANNELS, not just
  spacing values?"
- L3: "Am I treating density as a single dimension (high/low) or as the
  multi-scale fractal system DD-006 demonstrates? Am I reading DD case studies
  as VOCABULARY (what density LOOKS like at depth) or as INSTRUCTIONS
  (deploy fractal density)?"
- L4: "Apply the swap test: could my density rhythm survive transplantation
  to different content? If yes, it is generic -- the density should be
  content-derived."
- L5: "At pass 1, I evaluated density as 'is there variation?' At pass 10,
  do I evaluate density as 'does the density encoding serve THIS content's
  argument at section, component, AND character scale simultaneously?'"

**Pass-level deepening (DD-specific):**
- Passes 1-3: "What DENSITY ideas does this DD case study offer?" (extraction)
- Passes 4-6: "How do these DENSITY ideas interact with what I already built?" (integration)
- Passes 7-10+: "Has this DD case study taught me something about my CONTENT'S
  density structure?" (content-deepening)

**Exhaustion signal:** Agent can articulate how density operates at 3+ scales in the
page, with content-specific justification for each scale's density level.

---

#### Wave 3B: OD Case Studies -- Organizational Dimension (10-12 passes)

**Input:** OD-001-conversational.md, OD-004-confidence.md, OD-006-creative.md

**Rotation:** OD-006 -> OD-004 -> OD-001 -> OD-006(2nd) -> OD-004(2nd) ->
OD-001(2nd) -> OD-006(3rd) -> OD-004(3rd) -> OD-001(3rd) -> depth

**5-layer evaluation (OD-specific):**
- L1: "Does the page have organizational logic? Do sections have a reading
  order that serves the content's argument, not just its sequence? Is there
  a confidence gradient, epistemic structure, or editorial voice?"
- L2: "Which OD case study changed how I perceive organizational flow?
  Before OD-004, could I see section progression as a CONFIDENCE argument?
  Before OD-001, could I see Q&A structure as an ORGANIZATIONAL choice?"
- L3: "Am I using organization as mere layout sequencing (sections in order)
  or as content-semantic encoding (OD-004's confidence gradient, OD-006's
  dual-lens toggle)?"
- L4: "If I removed the section headings, would the organizational logic
  still be visible through spatial form alone? If not, the organization
  is announced, not enacted."
- L5: "At pass 1, I evaluated organization as 'do sections exist?' At pass 10,
  do I evaluate organization as 'does the section architecture encode the
  content's rhetorical structure?'"

**Pass-level deepening (OD-specific):**
- Passes 1-3: "What ORGANIZATIONAL ideas does this OD case study offer?" (extraction)
- Passes 4-6: "How do these ORGANIZATIONAL ideas reshape my page's section
  architecture?" (integration)
- Passes 7-10+: "Has this OD case study taught me something about my CONTENT'S
  organizational structure?" (content-deepening)

**Exhaustion signal:** Agent can articulate why sections are ordered and structured
the way they are, with content-semantic justification (not "it felt right" but
"the content's argument narrows from X to Y, so the organizational flow must...").

---

#### Wave 3C: AD Case Studies -- Axis Dimension (10-12 passes)

**Input:** [AD case studies once created -- interim: AD-SYNTHESIS.md,
AD-CONVENTION-SPEC.md from specification/provenance/stage-4-axis-ad/,
plus AD HTML explorations from design-system/axis/]

**5-layer evaluation (AD-specific):**
- L1: "Does the page have deliberate attention topology? Are there focal
  points, reading paths, eye-flow patterns, and attention density gradients?
  Does the page control WHERE the reader looks and in WHAT ORDER?"
- L2: "Which AD material changed how I perceive attention flow? Can I now
  see the page as an attention field with hot spots and cold spots, rather
  than just a sequence of sections?"
- L3: "Am I controlling attention deliberately (designing the eye's path)
  or letting it fall where CSS defaults and content order place it?"
- L4: "If I tracked a reader's eye path through the page, would it follow
  the content's argumentative flow? Or would it jump around because the
  visual hierarchy contradicts the content hierarchy?"
- L5: "At pass 1, I evaluated axis as 'are there visual focal points?'
  At pass 10, do I evaluate axis as 'does the attention topology ENACT
  the content's rhetorical strategy?'"

**Pass-level deepening (AD-specific):**
- Passes 1-3: "What ATTENTION TOPOLOGY ideas does this AD material offer?" (extraction)
- Passes 4-6: "How do these AXIS ideas reshape my page's visual hierarchy
  and reading flow?" (integration)
- Passes 7-10+: "Has this AD material taught me something about my CONTENT'S
  attention demands that I didn't see before?" (content-deepening)

**Exhaustion signal:** Agent can trace the intended eye-path through the page and
explain how each spatial decision guides attention to serve the content's argument.

---

#### Wave 3D: CD Case Studies -- Combination Dimension (10-12 passes)

**Input:** CD-001-reasoning-inside-code.md, CD-005-multi-axis-transition.md,
CD-006-pilot-migration.md

**Rotation:** CD-006 -> CD-005 -> CD-001 -> CD-006(2nd) -> CD-005(2nd) ->
CD-001(2nd) -> CD-006(3rd) -> CD-005(3rd) -> CD-001(3rd) -> depth

**5-layer evaluation (CD-specific):**
- L1: "Do DD, OD, and AD operate simultaneously on the same elements?
  Or are they isolated (this zone is 'the density zone,' that zone is
  'the organization zone')? Does changing one dimension ripple through
  the others?"
- L2: "Which CD case study changed how I perceive multi-dimensional
  interaction? Before CD-006, could I see how density + organization +
  axis combine to produce compound effects that none suggests alone?"
- L3: "Am I combining dimensions or merely deploying them in sequence?
  CD-006 shows COMPOUND combination (the whole differs from the sum).
  Am I achieving that, or is my page DD + OD + AD side by side?"
- L4: "Apply the decomposition test: if I removed all density encoding
  from a section, would the organizational encoding change? If not,
  they are independent, not combined."
- L5: "At pass 1, I evaluated combination as 'are multiple dimensions
  present?' At pass 10, do I evaluate combination as 'does the
  multi-dimensional interaction produce COMPOUND effects that no single
  dimension could achieve?'"

**Pass-level deepening (CD-specific):**
- Passes 1-3: "What COMBINATION ideas does this CD case study offer?" (extraction)
- Passes 4-6: "How do these COMBINATION ideas reveal compound opportunities
  in what I already built?" (integration)
- Passes 7-10+: "Has this CD case study taught me something about how my
  CONTENT'S dimensions interact in ways I hadn't seen?" (content-deepening)

**Exhaustion signal:** Agent can identify 3+ locations where DD, OD, and AD
interact to produce compound effects, with content-specific justification.

---

#### Wave 3E: Grammar Integration (8-10 passes)

**Input:** mechanism-catalog.md, grammar.md

**Purpose:** Integrate all case study learning from sub-waves 3A-3D with the
mechanism vocabulary. The agent should now see mechanisms not as abstract tools
but as the principles underlying the case studies it just spent 40+ passes absorbing.

**Exhaustion signal:** Mechanism catalog re-read reveals no un-applied mechanisms
that serve this content. Every mechanism is either applied, genuinely irrelevant,
or addressed indirectly through case study absorption.
```

---

## Additional Observations

### DD-004 and CD-001/CD-005 Rotation Gaps

Even within the current (deficient) structure, the rotation on line 425 omits several files entirely:

- **DD-004-layers.md** never appears in the rotation. It is listed in the input but never given primacy.
- **CD-001-reasoning.md** never appears in the rotation. Listed but never rotated.
- **CD-005-transition.md** never appears in the rotation. Listed but never rotated.

This means 3 of the 9 listed case studies are dead-letter inputs -- included in the input list but never given a turn at primacy in the rotation schedule. The agent may or may not read them, depending on whether the diagnostic override (lines 388-393, from Wave 2) carries forward to Wave 3.

### Wave 5 Partially Addresses CD Depth But Not DD/OD/AD

Wave 5 (Combination Mastery, lines 465-486) prescribes 8-12 passes focused on "how DD, OD, and AD mechanisms operate SIMULTANEOUSLY," with CD-006 re-read. This partially addresses the CD depth gap but does not provide the DD-specific, OD-specific, or AD-specific depth that sub-waves would provide. Wave 5 is about combination, not about deepening each dimension independently.

### The Skill's Own Logic Supports This Change

The skill explicitly states on line 741: "Fixed pass counts kill depth. The skill specifies MINIMUM passes per wave, not maximum." And on line 54: "Fourth-order (~90+ min, passes 40+): Content-form fusion." If the agent needs 40+ passes to reach content-form fusion, and case studies are a critical input for developing dimensional vocabulary, then 10-15 passes for ALL case studies (reaching second-order at best) is inconsistent with the skill's own theory of how depth develops.

### The Input Section (line 166) Lists 9 Case Studies as ~3,800 Lines

The Input section says case studies total ~3,800 lines. With 10-15 passes and the 3-phase deepening (extraction -> integration -> content-deepening), the agent is processing approximately 250-380 lines of case study material per pass. This is surface-level reading, not the deep absorption the skill's philosophy demands. At 40+ passes, the same material would be processed at ~85-95 lines per pass per stage -- allowing the kind of deep re-reading and re-reading-through-the-lens-of-building that the skill describes in its reciprocal relationship section (lines 208-222).
