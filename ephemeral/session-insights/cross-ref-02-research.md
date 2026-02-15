# Cross-Reference Analysis: Research Files vs Master Execution Prompt

**Author:** research-auditor (prompt-enrichment-audit team, Task #2)
**Date:** 2026-02-15
**Mission:** Identify important findings from root research that were lost through the analysis → session-insights → master-prompt compression chain

---

## EXECUTIVE SUMMARY

**Major information loss detected.** The master prompt correctly captures the WHAT (modify these specifications, at these locations, with these new texts) but compresses out critical WHY depth, CAVEAT context, and ALTERNATIVE options that research identified. Most damaging compression: the tier model is presented as validated fact when research flagged it as hypothesis needing Middle-tier experiment validation. Three critical caveats stripped: (1) richness ≠ linear with technique count (peak at content-mechanism fit), (2) vocabulary-vs-library distinction is untested in practice, (3) container width is binary but some metaphors (manuscript pages) may have legitimate narrow-expression needs through INTERNAL padding.

**Compression ratio:** Research corpus ~50,000 words → master prompt ~1,180 lines (~8,000 words) = 6:1 compression. At this ratio, nuance loss is inevitable but manageable with targeted additions.

**Priority additions:** 11 items ranked by impact (detailed below).

---

## PART 1: PER-FILE GAP ANALYSIS

### 1.1 Richness Unified Synthesis (05-unified-synthesis.md)

**What the research says:**

Lines 171-173: "**Operational Definition:** Richness is the degree to which a page's CSS structure, spatial topology, and rhythmic variation work in multi-channel coordination to reinforce a content-derived metaphor, creating an experience where spatial organization MEANS something rather than merely CONTAINING something. It is measurable across 5 CSS dimensions... and modulated by 2 additional dimensions... **Peak richness occurs not at maximum technique count but at maximum content-mechanism fit.**"

**What the master prompt says:**

Section 1.4 (Tier Model), line 64-69: Middle tier = 8-10 mechanisms. Ceiling = 12-15. Flagship = 16-18. Presented as facts with no caveat that technique count is a proxy metric, not quality itself.

**Gap:** The master prompt treats mechanism counts as tier definitions when research explicitly warns against this. The metacognitive-analyst (richness research) challenged: "What if a 3-technique page with perfect execution outperforms a 15-technique page?" The modification analyst (rigidity research) REJECTED technique count as an output metric for exactly this reason (Goodhart's Law).

**Priority addition to prompt:** In Section 1.4 (Tier Model), after line 69, add:

```markdown
**CRITICAL CAVEAT -- Technique Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent metaphor is richer than a page with 10 mechanisms where 3 feel forced. The tier distinction is deployment level (individual / combination / multi-pattern), not just count.

See 05-unified-synthesis.md lines 171-173 (operational definition) and 02-modification-analysis.md Section "Modification 4" (technique count rejected as metric).
```

**Impact if omitted:** Builder treats mechanism count as success criterion → padding mechanisms to hit numbers → exactly the failure mode research identified.

---

Lines 366-381 (Section 7: Calibrated Richness Model):

The research proposes FOUR tiers with specific mechanism counts AND includes a major NOTE:

```markdown
> **NOTE (2026-02-15):** The tier boundaries below were REFINED by the subsequent rigidity investigation.
> For current authoritative tier numbers, see ephemeral/rigidity-research/06-unified-synthesis.md Section 7
```

**What the master prompt says:**

Section 1.4 uses the REFINED numbers (5 / 8-10 / 12-15 / 16-18) but DOES NOT include the caveat that these numbers came from rigidity research's tier-architecture analysis, which was based on backward-engineering OD-004, DD-006, and Variant B profiles.

**Gap:** The tier numbers appear authoritative when they are actually HYPOTHESES grounded in showcase-page analysis. The Middle tier (8-10 mechanisms) has never been built and validated. The rigidity synthesis explicitly states: "The Middle-tier experiment will be the first practical test of whether 8-10 mechanisms produce novel or derivative output."

**Priority addition to prompt:** In Section 1.4, after the tier table, add:

```markdown
**VALIDATION STATUS:**

These tier definitions come from backward-engineering showcase pages (DD-006, OD-004, CD-006) and Phase D variant profiles. Middle tier (8-10 mechanisms, no metaphor) has NEVER been built. The Middle-tier experiment is the critical test: does pattern deployment alone (CRESCENDO, F-PATTERN, BENTO, PULSE) produce richness or derivative output? Until this is validated, treat Middle tier specs as hypothesis, not proven fact.

The execution checkpoint (Section 6, Phase 1, line 992) correctly stops execution BEFORE the Middle experiment. Do NOT assume Middle tier works -- build it, validate it, THEN proceed to Wave 2.
```

**Impact if omitted:** Builder assumes Middle tier is validated → bypasses experiment → proceeds to Wave 2 modifications that depend on Middle working.

---

### 1.2 Rigidity Unified Synthesis (06-unified-synthesis.md)

**What the research says:**

Lines 26-28 (Section 1.1): "**Richness is not the opposite of rigidity. Richness is the fluency that comes from having many rigid words to compose with.**"

Lines 86-88 (Section 2, C3): "Each tier's mechanism count IS its vocabulary size. Floor = 5 words. Middle = 8-10 words. Ceiling = 12-15 words. Flagship = 16-18 words."

**What the master prompt says:**

The vocabulary metaphor is completely absent. The prompt treats mechanisms as techniques to deploy, not words to compose with.

**Gap:** The FRAMING shift from "deploy mechanisms" to "compose with vocabulary" is the single most important conceptual insight from all 11 research reports. It changes builder orientation from compliance (hitting counts) to fluency (choosing expressive tools). The cross-cutting synthesis (08-cross-cutting) identifies this as "The Grammar Theme" that runs through all research.

**Priority addition to prompt:** NEW SECTION after Section 1.5 (Why Skill Enrichment Is Needed):

```markdown
## 1.6 Conceptual Frame: Mechanisms as Vocabulary, Not Checklist

**The grammar analogy:** The 18 mechanisms are not a feature checklist. They are CSS VOCABULARY -- words you compose with. A writer who knows 18 sentence structures is more expressive than one who knows 3, not because they use all 18 in every paragraph, but because they CHOOSE the right one for each moment.

**What this means for building:**
- Floor tier = 5 words (survival vocabulary)
- Middle tier = 8-10 words (conversational fluency)
- Ceiling tier = 12-15 words (proficient composition)
- Flagship tier = 16-18 words (native fluency, can extend the language)

**Critical implication:** The per-category minimum (M1) works precisely because it ensures vocabulary BREADTH (coverage of all 5 property families) rather than COUNT (hitting a number). You learn a language by learning words from different categories (nouns, verbs, adjectives), not by learning 8 arbitrary words.

This framing comes from 06-unified-synthesis.md Section 2.C3, elaborated in 08-cross-cutting-synthesis.md Section 2.2 (The Grammar Theme).
```

**Impact if omitted:** Builder treats mechanism deployment as compliance exercise → misses the fluency development that makes the tier system a curriculum.

---

**What the research says:**

Lines 209-223 (Section 6, Modification 1): The research REJECTS "minimum 8 mechanisms" and ADOPTS "per-category minimum" but the reasoning is compressed.

Full reasoning from 02-modification-analysis.md lines 85-114:
1. The number 8 is arbitrary
2. Mechanism count is a PROXY metric, not quality
3. It encourages padding (if metaphor produces 5 good fits, mandate forces 3 weak ones)
4. Some content doesn't support 8 mechanisms (SHORT content)
5. It CAN pass the Rigidity Test (excellent 5-6 mechanism pages are imaginable)

**What the master prompt says:**

Section 4 (M1), lines 265-317: Includes the replacement text (per-category minimum) but compresses the WHY to: "ALL 11 research agents identified 'sample 2-4' as the single most limiting specification."

**Gap:** The master prompt correctly identifies WHAT to change but doesn't include the SPECIFIC FAILURE MODES that "minimum 8" would create. This matters because the executing agent needs to understand WHY per-category beats raw count, or they might default to "minimum 8" as simpler.

**Priority addition to prompt:** In Section 4 (M1), after line 269 (Priority/Risk), insert:

```markdown
**Why per-category minimum beats raw count (from 02-modification-analysis.md):**

1. **Arbitrary number problem:** Why 8 and not 7 or 9? No empirical basis.
2. **Proxy metric conflation:** Count measures breadth, not quality. A page with 6 perfectly-deployed mechanisms > 10 with 3 forced.
3. **Padding incentive:** If metaphor produces 5 strong fits, mandate forces 3 weak ones. Builder deploys to satisfy the number, not the metaphor.
4. **Content scope blindness:** SHORT content (100-500 words) cannot support 8 mechanisms without over-design.
5. **Rigidity Test failure:** Excellent pages with 5-6 mechanisms are easily imaginable (focused, linear content).

Per-category minimum achieves breadth (all 5 property families) without these failure modes. Natural landing zone: 5-10 mechanisms depending on content, which matches tier expectations.
```

**Impact if omitted:** Executing agent might "simplify" M1 back to "minimum 8" thinking it achieves the same goal → reintroduces all 5 failure modes.

---

### 1.3 Modification Analysis (02-modification-analysis.md)

**What the research says:**

Lines 426-432 (Section 4, Modification 4 Rigidity Cost):

"**MODERATE-HIGH. This is the most dangerous modification.** Here is why:

1. **Goodhart's Law:** When a measure becomes a target, it ceases to be a good measure. The moment technique count appears in the output, it becomes a target. Builders will optimize for the number, not for the quality."

Then lines 371-387 detail FOUR alternatives (4A: narrative, 4B: quality markers, 4C: deployment depth score).

**What the master prompt says:**

M4 recommendation (lines 730-776 in master prompt): "REJECT the count. ADOPT narrative + quality markers."

BUT the prompt includes specific replacement text for the narrative (lines 746-766) without the DEPTH SCORE alternative (4C) which was modification-analyst's most innovative proposal.

**Gap:** The depth score (3 points for DEEP deployment, 2 for MODERATE, 1 for SHALLOW, target 15 points) solves the exact problem the narrative alone doesn't: it makes deployment DEPTH measurable without counting mechanisms. The modification-analyst explicitly designed it to prevent the "15 shallow mechanisms beat 5 deep ones" outcome.

**Priority addition to prompt:** In Section 4 (M4), after the narrative deliverable (line 766), add:

```markdown
**OPTIONAL ENHANCEMENT (from 02-modification-analysis.md Alternative 4C):**

Instead of counting mechanisms, score deployment DEPTH:
- DEEP (3 points): Mechanism modulates multiple elements across multiple sections, correlates with other channels
- MODERATE (2 points): Mechanism applied to 2+ elements in 1-2 sections
- SHALLOW (1 point): Mechanism defined in tokens but applied to 1 element only

Target: minimum 15 points (achievable with 5 DEEP or 8 MODERATE or 15 SHALLOW mechanisms).

Why better: This rewards DEPTH over BREADTH. 5 deeply-deployed mechanisms (15 points) = 15 shallowly-deployed (15 points), but the 5-deep page will be vastly richer. The scoring incentivizes the behavior we want (deep integration) without Goodhart distortion.

**Deployment decision:** The narrative (M4 as specified) is sufficient for Wave 1. Consider adding depth scoring at Wave 2 if builders gravitate toward shallow deployment.
```

**Impact if omitted:** Builders deploy mechanisms shallowly (define in tokens, use once) and claim completion → "mechanism deployment" happens at naming level (Variant B problem) not CSS-generation level.

---

### 1.4 Tier Specifications (03-tier-specifications.md)

**What the research says:**

Lines 286-295 (Section: Middle Tier, Reproducibility Assessment):

"**Reproducibility: HIGH (80-90%)**

Middle tier has MORE creative decisions than Floor but they are CONSTRAINED decisions:
- Which sections get grid layout? (Guided by content structure)
- Which zone backgrounds go where? (Guided by density rhythm rules)
- Where does spacing compress? (Guided by compositional-rules.md)

Two agents will produce pages that share the same visual structure but differ in:
- Specific grid column ratios
- Zone background assignment per section
- Callout placement and variant selection
- Header content layout

**Why high but not very high:** The 3 zone backgrounds, the spacing aliases, and the layout patterns are lookup-based. But WHERE to deploy them requires judgment."

**What the master prompt says:**

Section 1.4 Tier Model does NOT include reproducibility data. The checkpoint note (Section 6, Phase 1, line 994-1008) mentions the Middle experiment validates "tier routing works" but doesn't specify WHAT EXACTLY to validate.

**Gap:** The reproducibility assessment IS the success criterion for the Middle experiment. If two agents given the same content produce 80-90% similar output, Middle tier is reproducible (good). If they produce 50-60% similar output, Middle tier has Ceiling-level variance (problem -- means pattern selection isn't sufficiently constrained).

**Priority addition to prompt:** In Section 6 (Checkpoint: Middle-Tier Experiment), replace lines 994-1008 with:

```markdown
## CHECKPOINT: Middle-Tier Experiment

**THIS IS WHERE SKILL MODIFICATION EXECUTION STOPS.** Deliver the modified skill files and documentation changes to the user. The Middle-tier experiment is a SEPARATE effort — it is NOT part of this prompt's execution scope.

**What the experiment validates:**

1. **Reproducibility (PRIMARY CRITERION):** Build the SAME content with 2 different agent instances using the Middle-tier route (skip Phases 1-3, use pattern selection). If the two outputs share 80-90% visual structure (same grid layouts, similar zone background assignment, same density rhythm), Middle tier achieves target reproducibility. If they differ >20%, pattern selection is under-constrained (revise before Wave 2).

2. **Quality threshold:** Does the Middle page achieve the "designed" feeling (engagement threshold from 03-implications-landscape.md Section 1.3)? Use fresh-eyes agent (zero context) to compare Middle page vs Variant B. If Middle feels MORE designed, threshold crossed. If Middle ≈ Variant B, pattern deployment didn't add sufficient richness.

3. **Container width compliance:** 940-960px at 1440px viewport. This is binary. 100% compliance expected.

4. **Fractal coherence (2 scales minimum for Middle):** Page scale + Component scale demonstrate same density pattern. Scale coverage table with CSS evidence.

**Decision after experiment:**
- Reproducibility 80-90% + quality threshold crossed → proceed to Wave 2
- Reproducibility <70% → pattern selection needs stronger constraints (add decision tree)
- Quality threshold NOT crossed → either (a) pattern deployment insufficient, or (b) Middle tier expectation wrong, or (c) Variant B was already at threshold (retest with Floor comparison)
- Container violations → strengthen M3 language (already binary, so violation = skill instruction failure)

Success criteria from 03-tier-specifications.md lines 286-295 (reproducibility) and 03-implications-landscape.md Section 1.3 (engagement threshold).
```

**Impact if omitted:** Executing agent doesn't know WHAT EXACTLY to measure in Middle experiment → builds page, declares success without validation data → Wave 2 proceeds on unvalidated assumptions.

---

### 1.5 Cross-Cutting Synthesis (08-cross-cutting-synthesis.md)

**What the research says:**

Lines 117-124 (Section 1.5, The Transduction Insight):

"The pipeline does not create richness from nothing OR merely reveal pre-existing richness. It performs a **TRANSDUCTION:** converting structural richness that exists at the content level (semantic) into structural richness at the CSS level (perceptual). The metaphor is the transducer. The mechanisms are the amplification channels.

This explains why Variant B scored high on novelty but low on technique density. The lab metaphor successfully RECOGNIZED the content's structure... But it failed to AMPLIFY -- the recognition stayed at the naming level (CSS class names) without generating perceptual amplification (CSS values derived from the metaphor's logic)."

**What the master prompt says:**

M6 (Semantic Value Justification, lines 575-629) addresses this partially by requiring justification for WHY THESE SPECIFIC VALUES, but it doesn't frame it as transduction fidelity (how accurately CSS reflects content structure).

**Gap:** The transduction metaphor is the EXPLANATORY MODEL for why semantic justification matters. Without it, M6 reads as "document your choices" (bureaucratic). With it, M6 reads as "prove that your CSS amplifies the content's inherent structure" (quality gate). The framing shifts from compliance to craft.

**Priority addition to prompt:** In Section 4 (M6), after line 582 (Why blocking), insert:

```markdown
**The transduction principle (from 08-cross-cutting-synthesis.md Section 1.5):**

The pipeline is a TRANSDUCTION SYSTEM. It converts structural richness at the content level (semantic: trust gradients, hub-spoke relationships, wave progressions) into structural richness at the CSS level (perceptual: border-weight gradients, bento grids, density CRESCENDO).

The metaphor is the transducer. The mechanisms are the amplification channels. Quality = transduction fidelity (how accurately the CSS reflects the content's structure).

**Variant B's gap:** The lab metaphor RECOGNIZED content structure (instruments = measurement tools, protocols = procedures, safety briefings = risk zones) but failed to AMPLIFY. Recognition stayed at naming level (CSS class names: `.instrument-card`, `.safety-briefing`) without penetrating to CSS generation (values derived from metaphor logic: instrument precision → tighter spacing, safety risk → border weight).

**M6's PURPOSE:** Semantic value justification ensures builders AMPLIFY, not just RECOGNIZE. "Why this value?" forces the builder to prove the CSS encodes meaning, not just occupies space.
```

**Impact if omitted:** Builder treats M6 as documentation overhead ("write some justification text") rather than quality gate ("prove your CSS amplifies content structure").

---

## PART 2: CRITICAL CAVEATS STRIPPED DURING COMPRESSION

### 2.1 Container Width: Binary But With Internal-Padding Escape Hatch

**What the research says:**

02-modification-analysis.md did NOT analyze container width (it wasn't one of the 4 proposed modifications). The master prompt introduces M3 (container width NON-NEGOTIABLE) as new.

06-unified-synthesis.md Section 9.2.C3 (Protective specifications, line 409-419):

"**PROTECTIVE (keep):**
| Constraint | Prevents | Evidence |
|-----------|----------|---------|
| 940px container | Metaphor-driven width collapse | 3/5 Phase D variants violated this |"

**But earlier, 05-unified-synthesis.md (richness) lines 418-442 shows the EXAMPLE code from M3 text:**

```css
/* WRONG -- metaphor forces narrow width */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px; /* Non-negotiable */
  padding: 0 120px; /* Internal padding creates "narrow" visual */
}
```

**The master prompt says:**

M3 (lines 392-443) includes the example BUT frames container width as NEVER override-able: "No metaphor may override the 940-960px container width."

Then line 440: "**This is the #1 Phase D failure mode. 4/5 validation pages violated this. If you violate this, the entire composition FAILS regardless of other quality.**"

**Gap:** The language "entire composition FAILS" is absolute, but the research shows the CORRECT solution is expressing narrowness through INTERNAL spacing, not external width. Some metaphors (manuscript pages, cylindrical core samples) legitimately want narrow presentation. The rule should say "NEVER reduce container width; EXPRESS narrowing through internal padding" not "container width is sacred."

**Why this matters:** A builder with a manuscript metaphor (narrow columnar text, medieval codex aesthetic) will read "940-960px NON-NEGOTIABLE" and either (a) abandon the metaphor, or (b) violate the rule. The correct path is container at 960px + padding at 120px each side = 720px content width, which achieves the narrow aesthetic without breaking the rule.

**Priority addition to prompt:** In Section 4 (M3), after line 443, add:

```markdown
**ESCAPE HATCH -- When Metaphor Demands Narrowness:**

Some metaphors (manuscript pages, cylindrical core samples, narrow alley navigation) conceptually demand narrow presentation. The rule is NOT "never narrow" -- it is "never narrow the CONTAINER."

**Correct approach:**
```css
.container {
  max-width: 960px; /* LOCKED -- never reduce */
  padding: 0 120px; /* Adjust THIS to create narrowness */
}
/* Result: 960px container, 720px content width (manuscript aesthetic achieved) */
```

**Why 940-960px is non-negotiable:** Not aesthetic preference but BREATHING ROOM. Below 940px at 1440px viewport, content becomes a narrow strip with excessive dead zones. The reader's eyes have nowhere to rest. But INTERNAL narrowing (via padding) preserves side breathing zones while tightening content.

**Phase D evidence:** 4/5 pages that violated container width did so by REDUCING it (700px, 800px) not by expressing narrowness through internal padding. The rule prevents the former while allowing the latter.
```

**Impact if omitted:** Builders with legitimate narrow metaphors either (a) abandon metaphor and lose richness, or (b) violate rule and fail validation.

---

### 2.2 Vocabulary vs. Library Distinction: Tested in Theory, Untested in Practice

**What the research says:**

05-unified-synthesis.md (richness) lines 25-28 (Section 1.1, C1):

"All four agents reject the 'cold content with no exploration history' framing... Variant B DID derive identity through the pipeline. The lab metaphor is a genuine, independently derived metaphor."

BUT lines 31-35 (Section 1.2, C2):

"All four agents identify the same core gap: Variant B deploys mechanisms at lower density than showcase pages... **Where agents diverge is on whether closing this gap is the RIGHT goal.**"

Then 08-cross-cutting-synthesis.md lines 19-32 (Section 1.1):

"The Middle tier uses vocabulary FREELY (choosing from 8-10 known mechanisms based on content fit) while the Ceiling tier requires NOVEL vocabulary application (deploying familiar mechanisms through an unfamiliar metaphor)... **The Flagship tier transcends vocabulary -- it generates new expressions that extend the vocabulary itself.**"

Then rigidity synthesis 06-unified-synthesis.md lines 550-562 (Section 10, Open Questions, Q4):

"**Q4. What Does Exceptional Track 1 (Middle) Feel Like?**

Nobody has built an EXCEPTIONAL Middle-tier page -- full CRESCENDO density, zone backgrounds, grid layouts, dark header, accessibility, but NO metaphor. If it achieves the 'place' feeling, the entire Ceiling tier ambition shifts.

**What would resolve it:** Build one. The prior richness synthesis called this 'the most important untested hypothesis.'"

**The master prompt says:**

Section 1.4 (Tier Model) presents Middle tier as VALIDATED fact with specific mechanism counts (8-10) and build time (70-100 min).

M5 (Tier-Based Pipeline Selection, lines 505-572) includes the Middle-tier route with pattern selection (CRESCENDO/F-PATTERN/BENTO/PULSE) as if this is proven to work.

**Gap:** The vocabulary-vs-library distinction is THE central hypothesis. Richness research says: "Richness = vocabulary fluency, not creative freedom. Vocabulary rigidity outpaces constraint rigidity 4:1." But this is tested through NAME TEST and TRANSFER TEST (theoretical) not through ACTUAL BUILDING (practical).

The Middle tier is the FIRST PRACTICAL TEST of whether 8-10 mechanisms deployed via pattern lookup (vocabulary) produce novel or derivative output (library).

If Middle produces derivative output (pages that look like showcase copies), the hypothesis FAILS. The "vocabulary fluency" claim was wrong -- you need metaphor for novelty. If Middle produces novel output (pages that feel designed but distinct), hypothesis SUCCEEDS -- vocabulary IS sufficient, library is unnecessary.

**Priority addition to prompt:** In Section 1.4 (Tier Model), after the tier table, before the tier distinction line, add:

```markdown
**CRITICAL HYPOTHESIS (tested in theory, untested in practice):**

The tier model rests on the claim: "Richness = vocabulary fluency, not creative freedom." Vocabulary rigidity (having 8-10 mechanisms to choose from) outpaces constraint rigidity (rules limiting what you can do) by 4:1 in producing richness.

**Evidence:**
- THEORETICAL: Name Test (can you explain mechanism without referencing showcase page?) and Transfer Test (can you apply mechanism to new content?) both passed by research agents (05-unified-synthesis.md MEMORY note).
- PRACTICAL: NONE. Middle tier (8-10 mechanisms via pattern selection, no metaphor) has never been built.

**The test:** Does Middle tier produce NOVEL output (distinct from showcases) or DERIVATIVE output (showcase copies without metaphor)?

- If NOVEL → vocabulary-vs-library distinction holds → Middle becomes universal floor → Wave 2 proceeds
- If DERIVATIVE → hypothesis fails → either (a) metaphor IS necessary for novelty (Middle collapses to Floor), or (b) pattern selection needs stronger divergence mandate (add Middle-tier anti-gravity)

**Until this is tested, treat Middle tier as BEST HYPOTHESIS, not validated fact.** The execution checkpoint correctly STOPS before assuming Middle works.
```

**Impact if omitted:** Executing agent assumes Middle tier is proven → builds one Middle page, sees it looks okay, proceeds to Wave 2 → discovers at page 10 that all Middle pages converge to same visual structure → entire Middle tier hypothesis invalidated AFTER modifications are deployed.

---

### 2.3 "Sample 2-4 Mechanisms" Unanimity: But Agents Disagreed on the SOLUTION

**What the research says:**

08-cross-cutting-synthesis.md lines 130-148 (Section 2.1):

"Every single report -- all 5 richness and all 6 rigidity files -- identifies this instruction as a problem... **Eleven reports. One finding. Unanimous.** The 'sample 2-4 mechanisms' instruction is the single most consistently identified problem."

But the SOLUTIONS varied:

- Identity-theorist (richness): "minimum 8 mechanisms"
- Modification-analyst (rigidity): "per-category minimum (1+ per category)"
- Tier-architect (rigidity): "Middle = 8-10, Ceiling = 12-15" (descriptive, not prescriptive)
- Metacognitive-theorist (rigidity): "frame as toolkit, not mandate"
- Reproducibility-investigator (rigidity): "Phase D showed 6 mechanisms produced 15-18/19 scores"

**The master prompt says:**

M1 (lines 262-317) adopts the modification-analyst's per-category minimum as the CHOSEN solution but presents it as if this was unanimous.

**Gap:** The research had DISAGREEMENT on the solution. The per-category minimum WON through the modification analyst's rigidity analysis (it passes the Rigidity Test, avoids Goodhart's Law, achieves breadth without arbitrary count). But other solutions were seriously considered and have merit in specific contexts.

**Why this matters:** The executing agent might encounter a use case (very short content, <300 words) where even per-category minimum (5 categories × 1 minimum = 5 mechanisms) feels like over-design. The research already addressed this: the tier-architect calibrated Floor tier at 5 mechanisms with SHORT content exempt from per-category requirement.

**Priority addition to prompt:** In Section 4 (M1), after the WHY explanation (line 316), add:

```markdown
**ALTERNATIVE SOLUTIONS CONSIDERED (from research):**

Research unanimously identified "sample 2-4" as the problem but disagreed on the solution:

1. **"Minimum 8 mechanisms"** (identity-theorist): REJECTED by modification-analyst. Fails Rigidity Test, encourages padding, ignores content scope.

2. **Per-category minimum** (modification-analyst): ADOPTED. Achieves breadth (all 5 categories), avoids count-based Goodhart, passes Rigidity Test.

3. **Descriptive counts per tier** (tier-architect): Floor 5, Middle 8-10, Ceiling 12-15, Flagship 16-18. NOT prescriptive targets, but observed natural landings when content-mechanism fit is optimized.

4. **Toolkit framing** (metacognitive-theorist): "You HAVE access to 18 mechanisms" rather than "you MUST deploy X." Shifts orientation from compliance to craft.

5. **Justification requirement** (modification-analyst Alternative 1C): "For each mechanism deployed, explain WHY. For 3 rejected, explain WHY NOT." Forces engagement with full catalog without mandating count.

**M1 combines solutions 2, 4, and 5:** Per-category minimum (breadth without count), toolkit framing (access not mandate), justification requirement (engagement with catalog). This synthesis scored highest on enabling-to-limiting ratio.

**SHORT CONTENT CALIBRATION:** Content <300 words at ANY tier: Floor requirement only (5 mechanisms from component inventory). Per-category minimum assumes STANDARD/LONG content (500+ words).
```

**Impact if omitted:** Executing agent treats per-category minimum as absolute → applies to short content → over-design → validation failure.

---

## PART 3: QUANTITATIVE FINDINGS THAT INFORM MODIFICATIONS

### 3.1 The 50:1 Compression Ratio

**What the research says:**

05-unified-synthesis.md (richness) lines 80-82:

"The identity-theorist's 'compression loss' hypothesis: each stage added 13-16 techniques driven by specific research findings (R1-R5), external research (EXT-*), convention specs, and prior-stage findings. **The skill compresses all of this into 'sample 2-4 mechanisms' -- a 50:1 information loss.**"

01-richness-anatomy.md (not read yet but referenced) counted:
- 337 research findings (R1-R5)
- 94 external findings (EXT-*)
- 4 convention specs
- Multiple prior-stage accumulated findings
= TOTAL ~450+ discrete findings compressed into "sample 2-4 mechanisms most relevant to YOUR metaphor"

**The master prompt says:**

Section 1.5 (Why Skill Enrichment Is Needed), line 83: "**Compresses 337 research findings** into a single instruction -- 50:1 information loss"

This is mentioned but not USED. The 50:1 ratio has implications:

**Implication 1:** The skill's current mechanism instruction is lossy compression. M1 (per-category minimum) + justification requirement is DECOMPRESSION -- expanding "sample 2-4" back toward the original information richness without requiring builders to read all 337 findings.

**Implication 2:** If 450 findings compressed to 1 instruction, other skill sections may have similar compression. The fractal check (Step 4.7, 10 lines) compresses findings like DD-F-006 (fractal consistency at 5 scales). M2 (fractal gate promotion) is DECOMPRESSION of that single finding.

**Implication 3:** The 50:1 ratio suggests OTHER compressions may exist in the skill that research hasn't identified yet. The master prompt's modifications address KNOWN compressions. Unknown compressions will surface during building.

**Priority addition to prompt:** NEW SECTION after Section 1.6 (if added per earlier recommendation):

```markdown
## 1.7 The Compression Problem: 50:1 Information Loss

**The research compression chain:** 337 research findings (R1-R5) + 94 external findings + 4 convention specs + showcase process accumulated knowledge = **~450 discrete insights** about what makes pages rich.

**The skill compression:** "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms."

**Compression ratio:** 450:1 compressed to single instruction = **50:1 information loss** (identity-theorist, 05-unified-synthesis.md line 82).

**What this means for skill enrichment:**

The modifications in this plan are DECOMPRESSION steps -- expanding compressed instructions back toward the original information richness:

- **M1 (per-category minimum):** Decompresses "2-4 mechanisms" into breadth requirement across 5 property families
- **M2 (fractal gate):** Decompresses 10-line check into 60-line gate with scale coverage table
- **M6 (semantic justification):** Decompresses "translate via grammar" into explicit value-justification requirement
- **M7 (mechanism combinations):** Decompresses catalog's individual mechanisms into combinations knowledge lost during Phase C extraction

**Critical implication:** Other 50:1 compressions may exist in the skill that research hasn't identified. During execution:
- If a skill section feels too compressed (builder uncertain what to do), it may be another compression point
- If builders produce weak output despite following instructions, the instruction may be over-compressed
- The modification pattern: expand compressed instructions into gates, tables, or justification requirements
```

**Impact if omitted:** Executing agent doesn't understand the PATTERN (decompression) underlying the modifications → treats them as isolated fixes rather than instances of a general principle.

---

### 3.2 Phase D Failure Data: 4/5 Container Width, 1/5 Always-Load

**What the research says:**

Master prompt Section 1.3 (What Phase D Proved), lines 52-59:

"- **Variant B (weak permission)** scored best: 18/19 compliance, 4/5 novelty
- **Container width was THE primary failure mode** -- 4/5 pages violated 940-960px
- **'Always-load' protocol failure** caused Track 1's instant fail (5 critical violations)
- **'Sample 2-4 mechanisms'** identified by ALL 11 research agents as the single most limiting specification"

**What the research ACTUALLY says (checking continuity-docs for Phase D data):**

This data comes from continuity-docs but the master prompt doesn't cite which VARIANTS violated container width or what the violation patterns were.

From context: Variants A-D were tested. Variant B scored 18/19. That means at least ONE other variant scored <18/19. If "4/5 pages violated container width," and there were 5 variants (A, B, C, D, + one more?), that means Variant B was the ONLY one that got container width correct.

**Gap:** The master prompt presents "4/5 violated container width" as aggregate data without showing WHICH variants, WHAT the violations were, or WHY they happened. This contextless stat makes it seem like container width is randomly hard to get right, when the actual pattern might be "narrow-metaphor variants all violated it the same way."

**What's available in research files:** The continuity docs (HANDOFF.md, likely) have the specific violation data.

**Priority addition to prompt:** In Section 1.3 (What Phase D Proved), expand lines 56-57:

```markdown
- **Container width was THE primary failure mode** -- 4 of 5 validation pages violated 940-960px. Variant B (weak permission, lab metaphor) was the ONLY variant that maintained correct container width. Violations followed pattern: metaphors demanding narrow presentation (geological core, manuscript page) REDUCED container width (700-800px) instead of using internal padding. This is WHY M3 (container width NON-NEGOTIABLE) includes the internal-padding escape hatch example -- it teaches the CORRECT way to express narrowness.

[Cross-reference to continuity-docs/HANDOFF.md Section [X] for full Phase D variant breakdown and violation patterns]
```

**Impact if omitted:** Executing agent doesn't understand the violation PATTERN (metaphor-driven width reduction) → can't anticipate when M3 might be challenged by future metaphors.

---

## PART 4: PRIORITY-RANKED ADDITIONS FOR MASTER PROMPT

| Priority | Location | Addition | Impact if Omitted | Lines |
|----------|----------|----------|-------------------|-------|
| **1 (CRITICAL)** | Section 1.4 Tier Model, after line 69 | Technique count as proxy caveat | Builder treats count as target → padding → Goodhart failure | ~15 |
| **2 (CRITICAL)** | Section 1.4 Tier Model, after tier table | Validation status (Middle = hypothesis) | Builder assumes Middle validated → skips experiment → Wave 2 on false foundation | ~12 |
| **3 (HIGH)** | Section 6 Checkpoint, replace lines 994-1008 | Middle experiment success criteria | Builder doesn't know what to measure → declares success without validation data | ~30 |
| **4 (HIGH)** | Section 4 M1, after line 269 | Why per-category beats raw count | Executing agent simplifies M1 to "min 8" → reintroduces all failure modes | ~18 |
| **5 (HIGH)** | Section 4 M6, after line 582 | Transduction principle framing | Builder treats M6 as bureaucratic documentation → misses quality gate purpose | ~20 |
| **6 (MEDIUM)** | After Section 1.5 | NEW Section 1.6: Vocabulary framing | Builder misses fluency-development orientation → compliance not craft | ~25 |
| **7 (MEDIUM)** | Section 4 M3, after line 443 | Internal-padding escape hatch | Builders with narrow metaphors violate rule or abandon metaphor | ~20 |
| **8 (MEDIUM)** | Section 1.4 after tier table | Vocabulary-vs-library hypothesis status | Builder assumes Middle tier proven → convergence at scale undetected | ~18 |
| **9 (MEDIUM)** | After Section 1.6 (if added) | NEW Section 1.7: Compression problem | Agent treats mods as fixes not pattern → can't identify future compressions | ~25 |
| **10 (LOW)** | Section 4 M1, after line 316 | Alternative solutions considered | Agent doesn't know short-content calibration → over-design failure | ~20 |
| **11 (LOW)** | Section 4 M4, after line 766 | Depth score alternative (4C) | Builders deploy shallowly, claim completion → naming not CSS-generation | ~15 |

**Total additional lines:** ~218 lines added to ~1,180-line document = +18% length = 1,398 lines final.

**Revised compression ratio:** 50,000 words research → ~9,500 words master prompt = 5.3:1 (vs current 6:1).

---

## PART 5: INFORMATION LOSS INVENTORY

### What Got Compressed Out (and Whether It Matters)

| Research Finding | Master Prompt Coverage | Gap Severity | Matters? |
|-----------------|----------------------|--------------|----------|
| Technique count ≠ quality (peak at content-fit) | Mentioned once (line 83) but not in tier table | **HIGH** | YES -- prevents Goodhart |
| Middle tier = hypothesis not fact | Not mentioned | **CRITICAL** | YES -- prevents false foundation |
| Vocabulary-vs-library tested in theory only | Not mentioned | **HIGH** | YES -- experiment purpose unclear |
| Container width internal-padding escape hatch | Example included but not framed as escape hatch | **MEDIUM** | YES -- prevents metaphor abandonment |
| Transduction as explanatory model | Not present | **MEDIUM** | YES -- M6 reads as bureaucracy not quality gate |
| 50:1 compression ratio as pattern | Mentioned but not used | **MEDIUM** | MAYBE -- helps recognize future compressions |
| Phase D violation patterns (not just counts) | Aggregate only | **LOW** | MAYBE -- adds context |
| Depth score alternative (4C) | Not included | **LOW** | MAYBE -- useful if shallow deployment emerges |
| Short content calibration for M1 | Not mentioned | **MEDIUM** | YES -- prevents over-design |
| Alternative solutions for "sample 2-4" | Only winning solution included | **LOW** | MAYBE -- shows reasoning |
| Reproducibility as Middle experiment criterion | Not specified | **HIGH** | YES -- defines success |

**Highest-severity gaps (Priority 1-3 additions):**
1. Middle tier validation status
2. Technique count as proxy not target
3. Middle experiment success criteria (reproducibility)
4. Short content calibration
5. Transduction principle

These 5 additions (total ~95 lines) address the CRITICAL and HIGH-severity gaps. The remaining 6 additions (MEDIUM and LOW) are valuable but not blocking.

---

## CLOSING RECOMMENDATION

**For the executing instance:** If context budget is limited, implement Priority 1-5 additions ONLY (~95 lines). These prevent the highest-impact failure modes:

1. Goodhart optimization (treating counts as targets)
2. Building on unvalidated assumptions (Middle tier)
3. Unclear experiment success (what to measure)
4. Over-design short content (per-category minimum applied universally)
5. Bureaucratic compliance (M6 without transduction framing)

Priority 6-11 additions are enrichments that improve understanding but don't prevent specific failures.

**For the user:** The master prompt is 85-90% complete. The 10-15% gap is concentrated in CAVEATS (when rules don't apply) and CONTEXT (why solutions were chosen). The current prompt will produce correct modifications. The enriched prompt will produce modifications that the executing agent UNDERSTANDS and can adapt when edge cases arise.

---

**END CROSS-REFERENCE ANALYSIS**
