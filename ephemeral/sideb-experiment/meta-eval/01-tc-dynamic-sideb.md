# Meta-Cognitive Audit: Dynamic Side B Replacement in TC Skill

**Auditor:** Opus 4.6 (meta-cognitive, zero prior pipeline involvement)
**Date:** 2026-03-01
**Files analyzed:**
- `~/.claude/skills/tension-composition/SKILL.md` (831 lines, the updated skill)
- `design-system/compositional-core/identity/identity.md` (87 lines)
- `design-system/compositional-core/identity/vocabulary.md` (55 lines)
- `ephemeral/sideb-experiment/prompts/STATIC-TEMPLATE.md` (the old static Side B, 35 lines of design system prose)
- `ephemeral/sideb-experiment/RESULTS-ANALYSIS.md` (experiment backing this change)

---

## 1. SUFFICIENCY: Do identity.md + vocabulary.md Cover Equivalent Ground?

### What the old static Side B had (35 lines):

1. **Physical world description** (8 lines): "Every surface is sharp... Nothing floats... Light is direct..." -- evocative prose that described the design system as a PHYSICAL ENVIRONMENT.
2. **Personality spectrum** (8 axes): WARM-AUSTERE 75%, SOFT-ANGULAR 95%, PLAYFUL-SERIOUS 85%, ORGANIC-GEOMETRIC 100%, BUSY-SPARSE 70%, FLEXIBLE-RIGID 80%, CASUAL-FORMAL 80%, COLORFUL-RESTRAINED 90%.
3. **Soul test** (5 checks): Magazine test, Bootstrap fail, Bootstrap blue fail, hierarchy/readability pass, earned decoration fail.
4. **Container width**: "940-960px" stated as single line.

### What identity.md + vocabulary.md provide (142 lines combined):

1. **Character statement** (1 paragraph): "editorial purist with the temperament of a print architect... austere, confident, deliberately unfriendly..." -- richer and more specific than the old world description. Explicitly names the warmth-vs-severity tension.
2. **Soul principles** (2 items): Angular geometry (border-radius: 0) and no shadow/depth simulation. More precise than the old prose. Includes the GENERATIVE framing ("this constraint is GENERATIVE: the angular spiral in AD-004 exists BECAUSE of it").
3. **Identity signatures** (3 items): Warm palette with hex values, typography trinity with font names, 4px left-border callout system. More concrete than the old static version.
4. **Internal tensions** (3 named): Warmth vs severity, solid offset vs anti-shadow, vocabulary ceiling. This is BETTER than the 8-axis personality spectrum for tension derivation -- it gives the TC agent named contradictions to work with rather than percentage positions on abstract axes.
5. **Refusals** (absolute + conditional): 8 absolute refusals, 7 conditional refusals with documented exceptions. Far more comprehensive than the 5-item soul test.
6. **Diagnostics**: Bootstrap test preserved.
7. **Vocabulary limitations**: What the system CANNOT express (playfulness, celebration, visual surprise, emotional range, softness). This is MISSING from the old static Side B entirely.
8. **Vocabulary.md additions**: Palette rationale, typography decisions, spacing decisions, border decisions, container width as range (860-1100px). All with WHY explanations.

### Verdict: SUFFICIENT -- and RICHER

The new files cover every category the old static Side B had, plus three categories it lacked:
- Vocabulary limitations (what the system CANNOT do -- critical for genuine tension identification)
- Conditional refusals with exceptions (nuance the old version lacked)
- Design rationale (WHY explanations -- the old version had WHAT but rarely WHY)

The only item NOT directly present in the new files is the 8-axis personality spectrum with percentage positions. This is addressed in evaluation point 3 below.

---

## 2. EXTRACTION CLARITY: Will a Naive Opus Agent Know What to Extract?

The skill at lines 184-199 instructs:

```
Read these 2 files NOW to derive Side B. Do not use memorized values. Read fresh.

From these files, extract:
- Character statement (from identity.md Section: Character)
- Soul principles (from identity.md Section: Soul Principles)
- Identity signatures (from identity.md Section: Identity Signatures)
- Internal tensions (from identity.md Section: Internal Tensions)
- Refusals (from identity.md Section: Refusals)
- Design rationale (from vocabulary.md)
```

**Strengths of this instruction:**
- Section headers are exact matches to identity.md's actual markdown headings. An agent reading identity.md will find sections titled exactly "Character," "Soul Principles," "Identity Signatures," "Internal Tensions," "Refusals." Zero ambiguity.
- The 6-item extraction list is comprehensive and ordered.
- "Do not use memorized values. Read fresh" is a critical anti-staleness directive.

**Weaknesses:**
- The instruction says "extract" but does not say HOW MUCH to extract or in WHAT FORM. An agent could copy-paste entire sections (wasteful) or compress to one-word summaries (lossy). The lack of target format or length guidance is a minor gap.
- The instruction does not call out vocabulary.md's section structure. vocabulary.md has sections (Palette, Typography, Spacing, Borders, Container Width), but the skill just says "Design rationale (from vocabulary.md)" without specifying which sections matter most. This is probably acceptable since vocabulary.md is only 55 lines -- an agent will read the whole thing regardless.

**Risk level: LOW.** The extraction instruction is clear enough for a naive Opus agent. The section-header matching eliminates ambiguity about WHERE to look. The only failure mode would be an agent that reads both files but fails to SYNTHESIZE them into a coherent personality model. The skill addresses this at lines 200-201 by saying "Personality spectrum is constructed from the character statement" and "internal tensions ARE the personality spectrum."

**Recommendation:** Consider adding one sentence after the extraction list: "Synthesize these into a 3-5 sentence characterization of the personality you are deriving tension AGAINST." This gives the agent a concrete synthesis target without being prescriptive.

---

## 3. PERSONALITY SPECTRUM LOSS: Net Positive or Net Negative?

### What was lost

The 8-axis spectrum with percentage positions:
```
WARM <-----> AUSTERE      [75% austere]
SOFT <-----> ANGULAR      [95% angular]
...
```

This was a COMPACT, QUANTIFIED representation of personality. An agent could immediately see that the system is "75% austere" and derive tension against content that needs warmth. The percentage positions were actionable and unambiguous.

### What replaced it

identity.md's character statement and internal tensions:
- "austere, confident, and deliberately unfriendly -- not hostile, but uninterested in being approachable"
- "Warmth vs Severity: Cream palette and earth tones invite lingering. Sharp geometry and angular precision demand respect."
- "The system wants to feel like a handcrafted book while looking like a knife."

### Assessment: NET POSITIVE, with one caveat

**Why positive:**

1. The old percentage positions were ARBITRARY. "75% austere" has no calibration -- what is 70% austere vs 80%? What CSS difference does 5% make? The percentages gave false precision. The new prose-based character statement gives QUALITATIVE accuracy that maps better to the tension derivation process.

2. The internal tensions in identity.md are NAMED CONTRADICTIONS, not axis positions. "Warmth vs Severity" is richer than "WARM 25% -- AUSTERE 75%" because it describes HOW the tension manifests ("cream palette invites, sharp geometry demands"). For a TC agent, named contradictions are directly usable as Side B tension points.

3. The vocabulary limitations section ("What the system CANNOT express well: playfulness, celebration, visual surprise, emotional range, softness") provides the ABSENCE MAP that the old personality spectrum completely lacked. For tension derivation, knowing what the system CANNOT do is arguably more valuable than knowing what it IS. Content that needs playfulness will create genuine tension against a system that explicitly admits it has no vocabulary for playfulness. The old 8-axis spectrum encoded this implicitly (85% serious implies 15% playful) but never stated it as a gap.

4. The old spectrum was STATIC -- frozen prose in the skill file. If the design system evolved (new warmth mechanisms, new playful vocabulary), the spectrum would be wrong. The dynamic approach reads the current identity file, which evolves with the system.

**The caveat:**

The old spectrum's QUANTITATIVE nature had one advantage: it created GRADUATED tension. "75% austere" implies the system CAN be 25% warm -- there is room to pull. The new prose says "austere, confident, deliberately unfriendly" which reads as MORE extreme than 75%. A TC agent might derive STRONGER opposition than warranted, leading to metaphors that try too hard to resolve warmth-vs-austerity when the system is already partially warm.

However, identity.md immediately qualifies this: "It speaks in warm earth tones while insisting on sharp geometry." This sentence performs the same GRADUATION function as the percentage. An Opus agent reading both sentences will understand that the system is not 100% austere.

**Verdict:** Net positive. The qualitative richness of the new approach produces better tension derivation inputs than the quantified-but-arbitrary old approach.

---

## 4. CONTAINER WIDTH: 940-960px vs 860-1100px

### The old static Side B

"The page has a spine. Content lives within 940-960px. The spine holds."

This was a TIGHT specification: 940-960px, period.

### The new approach

vocabulary.md states: "Range, not mandate. Explorations used 860-1100px across DD/OD/CD stages." With three sub-ranges:
- Narrow (860px): Dense technical content
- Standard (900-1000px): General purpose
- Wide (1100px): Multi-axis layouts

### How the TC skill handles this

The skill at line 393 (R3 rejection check) says: "Does the metaphor's physical shape force container width below 860px?" -- correctly using 860px as the lower bound.

The skill at line 395 (R3 full text): "Container must stay within 860-1100px range."

### Assessment: CORRECTLY HANDLED

The updated skill references the 860-1100px range in the right places (metaphor rejection checks). The old 940-960px mandate was overly restrictive -- the experiment and exploration data show legitimate variation across that wider range. The dynamic reading of vocabulary.md will give the TC agent the correct range AND the rationale for selecting within it (dense content = narrow, spatial content = wide).

**One minor risk:** The skill does not explicitly instruct the TC agent to recommend a specific container width in the conviction brief. The conviction brief template (Section 2: CALIBRATION) does not mention container width as a calibration target. This means the downstream builder may not receive explicit width guidance. However, the builder separately reads vocabulary.md as part of the always-load protocol, so this is mitigated.

---

## 5. THE "SENTENCE WITH BUT" TEST: Does It Still Work?

The skill's core diagnostic (line 211):

> "Can you fulfill the reader's need by selecting and placing existing design system components WITHOUT transforming their meaning?"

This test determines whether tension is genuine (requires metaphor) or cosmetic (assembly suffices). It depends on Side B only insofar as the agent must know what "existing design system components" ARE.

### Assessment: STILL WORKS

The Addition Test is fundamentally a CONTENT-SIDE diagnostic. It asks whether the reader's need (Side A) can be met by the system's existing vocabulary (Side B). The dynamic Side B provides MORE specificity about what the system's existing vocabulary includes:

- identity.md's refusals tell the agent what the system CANNOT do
- vocabulary.md's design decisions tell the agent what the system CAN do
- identity.md's vocabulary limitations explicitly name gaps

This means a TC agent reading the dynamic files will make a MORE INFORMED Addition Test judgment than one working from the old 35-line static summary. The static summary described personality but never enumerated specific components or vocabulary gaps, making the "can I fulfill this need with existing components?" question harder to answer precisely.

**Verdict:** The test works at least as well and probably better with dynamic Side B.

---

## 6. PHASE 0 FILE LOADING ORDER: Is It Correct?

### Current order in the updated skill:

- **Phase 0**: Read identity.md + vocabulary.md (character, soul, refusals, design rationale)
- **Phase 1**: Multi-axis questioning (no file reads)
- **Phase 2**: Tension derivation uses the identity already loaded in Phase 0
- **Phase 3**: Metaphor collapse (no new file reads)
- **Phase 4**: Read mechanisms.md + grammar.md + components.css + components.md

### Assessment: CORRECT but with one observation

The ordering is sound. The rationale:

1. Identity + vocabulary at Phase 0 gives the TC agent its Side B personality BEFORE it begins questioning. This is essential -- you cannot derive tension without knowing what you are deriving tension AGAINST.

2. Mechanisms + grammar + components at Phase 4 (after metaphor lock-in) prevents pattern-matching. This is the anti-gravity principle: library patterns are validation tools, not generation tools.

**The observation:** The experiment recommended 6 files for maximum quality (combined mean 24.0 vs 22.5 for static). The current implementation effectively reads 6 files total (2 at Phase 0 + 4 at Phase 4), but the Phase 4 files arrive AFTER tension derivation is complete. The experiment tested all 6 files simultaneously for UNDERSTANDING, not for tension derivation specifically.

This means the TC agent derives tension (Phase 2) using only 2 files, then gets the other 4 files for mechanism selection (Phase 4). This is architecturally correct -- the TC agent does not NEED mechanism details for tension derivation; it needs them for compositional architecture. But it does mean the tension derivation step operates on the 2-file condition (experiment score: 22.75-23.75) rather than the 6-file condition (experiment score: 23.75-24.0).

This is an acceptable trade-off because:
- The anti-gravity principle prohibits mechanism access before metaphor lock-in
- The 2-file condition scored ABOVE static (22.75-23.75 vs 22.5), confirming identity.md + vocabulary.md are sufficient for personality understanding
- The additional richness from 6 files primarily manifests in "surface specificity" (naming typefaces, citing CSS values) and "compositional intelligence" (mechanism awareness) -- both of which are Phase 4 concerns, not Phase 2 concerns

**Missing files check:** tokens.css is part of the always-load protocol but is NOT mentioned in the TC skill's Phase 0. This is acceptable because:
- The TC agent does not need specific hex values or spacing tokens for tension derivation
- The builder receives tokens.css separately
- Adding tokens.css to TC Phase 0 would not improve tension derivation quality

**Verdict:** The file loading order is correct. Nothing critical is missing for the TC agent's specific task.

---

## 7. RISK ASSESSMENT: Probability of Worse Conviction Brief

### Baseline comparison

The old static approach produced conviction briefs from a 35-line hardcoded personality description. The new approach reads 142 lines of structured identity and rationale documentation.

### Probability of WORSE outcome: 10-15%

This is LOW, and the specific failure modes are identifiable:

### Failure Mode 1: Over-extraction (probability: 5%)

A TC agent reads 142 lines and tries to use ALL of it in tension derivation, producing an overwhelmingly detailed Side B that drowns out the content-side tensions. identity.md has 8 absolute refusals, 7 conditional refusals, 3 internal tensions, 3 identity signatures, and 2 soul principles -- an agent could generate 23 tension axes just from Side B, most of them cosmetic.

**Mitigation:** The skill's Addition Test (line 211) and Three Criteria for Genuine Tension (lines 217-223) act as filters. An Opus agent following these criteria will reject cosmetic tensions regardless of how many Side B data points it has.

### Failure Mode 2: World-Description Quality Degradation (probability: 10%)

The old static Side B had a CRAFTED world-description: "Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world. Light is direct." This prose was evocative and specific. The new approach instructs the agent to "DERIVE the world-description from what you read" (line 199). A weaker agent might produce flat world-descriptions ("The design system uses sharp corners and no shadows" -- technically correct but not evocative).

**Mitigation:** The conviction brief template (Section 1: WORLD-DESCRIPTION) provides explicit formatting guidance: "2-3 lines: The world this page lives in (sharp edges, warm surfaces, flat light -- stated as physics, not prohibition)." The phrase "stated as physics, not prohibition" is exactly the right instruction to prevent flat descriptions. An Opus agent will follow this.

**Residual risk:** The conviction brief's world-description quality now depends on TWO derivation steps (identity.md -> TC agent's understanding -> conviction brief prose) instead of one (static prose -> conviction brief). Each derivation step is a potential lossy compression. The old approach was pre-compressed by a human; the new approach trusts the agent to compress well. Given that the experiment showed dynamic agents producing EQUAL OR BETTER understanding (combined mean 22.75-24.0 vs 22.5), this residual risk is manageable.

### Failure Mode 3: Personality Spectrum Ambiguity (probability: 8%)

Without the quantified 8-axis spectrum, an agent might misjudge the system's position on personality dimensions. For example, the system is 70% sparse -- but identity.md does not say this explicitly. An agent might read the refusal "No same-density stacking" and conclude the system is 95% sparse (more extreme than reality), leading to metaphors with too much empty space.

**Mitigation:** vocabulary.md's design rationale provides QUALITATIVE guidance on density: "Inside vs between. Components use tight internal spacing (8-12px). Gaps between components are generous (24-32px)." This gives the agent a concrete sense of the system's density characteristics without a percentage that would be false precision anyway.

### Failure Mode 4: identity.md/vocabulary.md File Drift (probability: 3%)

If identity.md or vocabulary.md are edited incorrectly (e.g., someone adds a permissive rule that contradicts soul principles), the TC agent will derive Side B from corrupted source data. The old static approach was immune to file drift because it was hardcoded.

**Mitigation:** This is actually an ADVANTAGE of the dynamic approach when the files are correct -- the TC agent always gets the CURRENT system state. File drift is a governance problem, not a TC skill problem. The identity files should be treated as high-governance documents with review gates on changes.

### Failure Mode 5: "Read Fresh" Instruction Ignored (probability: 2%)

The skill says "Do not use memorized values. Read fresh." But if an Opus agent has seen identity.md in its training data or in a previous conversation turn, it might skip the actual file read and rely on cached knowledge. This would produce stale Side B data.

**Mitigation:** The skill's placement of "Read these 2 files NOW" in Phase 2 (a specific pipeline step) creates behavioral framing that promotes actual file reading. The phrasing "NOW" and "Read fresh" are as strong as skill-level instructions can be. The remaining risk is inherent to the LLM interaction model and cannot be eliminated.

---

## Summary Verdict

| Dimension | Assessment | Grade |
|-----------|-----------|-------|
| Sufficiency | New files cover everything old static had, plus vocabulary limitations, conditional refusals, and design rationale | A |
| Extraction clarity | Section headers match exactly; 6-item extraction list is comprehensive | A- |
| Personality spectrum | Net positive: named contradictions > arbitrary percentages for tension derivation | B+ |
| Container width | Correctly updated to 860-1100px range; properly referenced in rejection checks | A |
| Addition Test | Works at least as well; dynamic files provide better vocabulary gap information | A |
| File loading order | Correct; 2 files at Phase 0, 4 files at Phase 4 matches anti-gravity constraints | A |
| Risk of worse output | 10-15% probability; 5 identified failure modes, all with mitigations | B+ |

**Overall verdict: The dynamic Side B replacement is SOUND.** It is a net improvement over the static approach, backed by experimental evidence (the Side B experiment showed dynamic agents scoring 22.75-24.0 vs static 22.5). The one area that deserves monitoring is world-description quality in conviction briefs -- the two-step derivation (file -> agent understanding -> brief prose) introduces a compression risk that the old approach avoided. The first 2-3 live pipeline runs with the new approach should specifically audit the WORLD-DESCRIPTION section of the conviction brief for evocative quality.

### Two Actionable Recommendations

1. **Add a synthesis target** after the extraction list (line 197): "Synthesize these into a 3-5 sentence characterization of the personality you are deriving tension AGAINST, using 'but' to name its central paradox." This leverages the experiment's finding that the "sentence with but" format correlates with higher quality (Evaluator B observation).

2. **Consider adding container width to the conviction brief's CALIBRATION section** (Section 2, lines 668-681). Currently, the calibration template specifies background arc, spatial arc, and type arc but not container width. Since the old static Side B's "940-960px" was a common reference point and the new range (860-1100px) requires a content-driven selection, the TC agent should make this selection explicit in the brief rather than leaving it to the builder's interpretation.

---

*Analysis complete. No files modified. Output written to: `ephemeral/sideb-experiment/meta-eval/01-tc-dynamic-sideb.md`*
