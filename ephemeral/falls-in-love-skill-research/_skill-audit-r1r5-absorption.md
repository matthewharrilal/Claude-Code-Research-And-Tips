# Audit: Wave 2 R1-R5 Research Absorption Depth

**Skill file:** `~/.claude/skills/falls-in-love/SKILL.md` (817 lines)
**Audit scope:** Wave 2 (lines 380-416) and supporting structures
**Date:** 2026-03-03 (v2 -- replaces prior audit with 7-question focused analysis)
**Audit questions:** 7 specific diagnostic questions about per-file pass depth, per-file evaluation, finding tracking, spatial evaluation, SYNTHESIS positioning, primacy mechanics, and R5 special handling.

---

## Summary Verdict

Wave 2 is well-designed at the WAVE level but critically underprescribed at the PER-FILE level. The skill treats 6 research files spanning 4,104 lines and 337 findings as a single absorption unit with 12-18 passes. The rotation schedule gives each file only 2 primacy visits. The metacognitive evaluation is generic across all files. The minimum engagement threshold (3 findings per file) is too low to produce genuine absorption. The skill needs either a dramatically expanded Wave 2 or a sub-wave architecture that treats each research file as its own absorption target.

Seven gaps identified. Three are HIGH or CRITICAL severity. The recommended structural fix is a sub-wave architecture that expands Wave 2 from 12-18 passes to 36-48 passes with file-specific evaluation, scaled minimums, and deliberate R5/SYNTHESIS positioning.

---

## Question 1: Per-File Pass Depth

**Audit question:** Wave 2 says "12-18 passes." The rotation schedule lists 12 entries. With 6 files, each file gets ~2 primacy visits in the rotation. Is this sufficient for 10+ meaningful engagements with each file? Or does the skill need to prescribe Wave 2 as 40-60 passes?

### What the Skill Says

Lines 380-386:
```
Wave 2: Research R1-R5 (12-18 passes)

Rotation: R1 -> R4 -> R3 -> R5 -> R2 -> R3(2nd) -> R1(2nd) -> R4(2nd) ->
R5(2nd) -> R2(2nd) -> SYNTHESIS -> agent's diagnostic -> depth passes.
```

Line 384: "Each file gets primacy at least twice across the wave."

### Analysis

The rotation schedule has 12 named entries. With 6 files, each file appears at primacy exactly 2 times (except SYNTHESIS at 1). Even counting "depth passes" as additional, the best case is approximately 3 primacy visits per file.

The skill's own cognitive framework (lines 50-56) describes 4 orders of understanding:
- **First-order** (~15 min, passes 1-8): Content comprehension
- **Second-order** (~30-45 min, passes 9-20): Spatial projection
- **Third-order** (~60+ min, passes 21-40): Compound invention
- **Fourth-order** (~90+ min, passes 40+): Content-form fusion

Each research file is a substantial document. R4 alone is 990 lines with 192 findings. R2 is 810 lines. Two primacy visits totaling perhaps 20-30 minutes of engagement with any single file cannot reach second-order understanding of that file's spatial vocabulary. The skill explicitly states (line 56): "No amount of instruction compensates for insufficient time at any threshold."

The skill demands that the agent reach at least third-order understanding of the CONTENT by Wave 2's end. But it allocates only first-order time to each individual RESEARCH file. There is a 5x gap between the absorption depth the skill philosophically requires and what the rotation schedule structurally permits.

The "depth passes" mentioned at the end of the rotation are a partial escape valve. But "depth passes" are undefined in quantity and the agent has no guidance on which files to revisit. An agent that has satisfied the minimum engagement requirements (3 findings per file) and feels the diagnostic override does not trigger a specific file may conclude Wave 2 is exhausted after 12-14 passes -- far short of per-file depth.

### Verdict

**CRITICAL GAP.** The skill's own theory of depth contradicts its own schedule. Two primacy visits per file across 4,104 lines is surface scanning, not absorption.

### Recommended Fix

Replace the current 12-entry rotation with a sub-wave architecture:

```
Wave 2A: R1 Deep Absorption (6-8 passes, R1 at primacy every pass)
Wave 2B: R3 Deep Absorption (6-8 passes, R3 at primacy every pass)
Wave 2C: R4 Deep Absorption (8-10 passes, R4 at primacy -- largest file)
Wave 2D: R2 Deep Absorption (6-8 passes, R2 at primacy every pass)
Wave 2E: R5 Deep Absorption (8-10 passes, R5 at primacy -- second-order meta-file)
Wave 2F: SYNTHESIS Integration (4-6 passes, SYNTHESIS + cross-file revisits)
```

Total: 36-48 passes for Wave 2 (up from 12-18). Each file gets its own sub-wave with genuine depth. The ordering is intentional: R1 (documentation patterns = structural foundation), R3 (density = spatial vocabulary), R4 (axis = reading movement), R2 (creative layouts = expressive repertoire), R5 (combination = compound integration -- deliberately late because it requires R1-R4 vocabularies as prerequisites), SYNTHESIS (cross-file relationships -- deliberately last because it only becomes meaningful after individual file absorption).

Each sub-wave follows the same 4-phase internal progression that the skill already prescribes (STRUCTURAL -> INTEGRATION -> DEPTH -> MASTERY), but applied to one file at a time rather than cycling across all files.

---

## Question 2: Per-File Evaluation

**Audit question:** Does the 5-layer evaluation differentiate between research files? Each research file addresses a different dimension of design -- the metacognitive evaluation should evolve PER FILE, not just per pass.

### What the Skill Says

Lines 402-413 provide one set of 5-layer evaluation questions and one set of 4-phase pass-level deepening questions. These are applied identically regardless of which research file is at primacy.

The 5-layer evaluation at Wave 2 depth (lines 402-407):
- L1: "Does the page have density rhythm? Velocity variation? Column breaks?"
- L2: "Which research finding made me see THIS gap?"
- L3: "337 findings across 6 files. I've applied maybe 30."
- L4: "Re-read the primacy file. For every finding I judged 'irrelevant,' ask..."
- L5: "At pass 1, I was asking 'does this finding apply?' At pass 6, I should be asking..."

The 4-phase pass-level deepening (lines 409-413):
- Passes 1-3 (STRUCTURAL): "What does this research say I should ADD?"
- Passes 4-6 (INTEGRATION): "How does this research change how I SEE?"
- Passes 7-9 (DEPTH): "Has this research changed my understanding of the CONTENT?"
- Passes 10+ (MASTERY): "Have I internalized this research?"

### Analysis

The evaluation is differentiated BY PASS PHASE but not BY FILE. This is a significant omission because each research file addresses a fundamentally different dimension:

**R1 (documentation patterns):** When R1 is at primacy, evaluation should ask: "Does my page have the documentation-quality rhythm that premium sites achieve? Am I treating whitespace as structural or decorative? Does each viewport present one clear concept? Does the density oscillate HIGH/LOW/MEDIUM across sections?"

**R2 (creative layouts):** When R2 is at primacy, evaluation should ask: "Where has my layout broken out of the grid in a content-motivated way? Are my asymmetries encoding power or just visual interest? Does the page feel editorial or technical? Have I used pull quotes as structural bridges rather than decorative callouts?"

**R3 (density dimensions):** When R3 is at primacy, evaluation should ask: "Am I varying density across all 6 dimensions (temporal, depth, semantic, cognitive, interaction, spatial), or only spatial? What is the temporal density rhythm -- does the page accelerate and decelerate? Is cognitive density managed through progressive disclosure? Does fractal self-similarity operate at 3+ scales?"

**R4 (axis innovations):** When R4 is at primacy, evaluation should ask: "What eye-movement pattern does each section demand? Have I used non-default reading directions where the content supports them? Does the reading gravity serve the content's argument or fight it? Where does the Z-pattern emerge? Where does the F-pattern apply?"

**R5 (combination theory):** When R5 is at primacy, evaluation should ask: "Are my components in harmony or productive tension? Is the sequencing content-driven? Do component groups create meaning beyond their individual contributions? Are there meta-relationships between component clusters?"

**RESEARCH-SYNTHESIS:** When SYNTHESIS is at primacy, evaluation should ask: "Where do principles from different research files conflict in my page? Have I resolved those conflicts in a content-motivated way? What cross-dimensional relationships has the synthesis revealed that I missed when reading files individually?"

Without file-specific evaluation, the agent applies the same generic "does this finding apply?" question to all 337 findings, regardless of their dimension. This produces breadth without depth.

### Verdict

**HIGH GAP.** The evaluation evolves by pass phase (strong) but not by research file (absent). The per-pass evolution is the best feature of Wave 2. The per-file evolution is completely missing.

### Recommended Fix

Add a file-specific evaluation section within Wave 2. For each research file, prescribe 3-5 evaluation questions that are specific to that file's dimension. These questions should evolve within the sub-wave. Example for R3:

```
### R3 Sub-Wave Evaluation
- Passes 1-2: "Which of the 6 density dimensions does my page currently vary?
  Which are monotonic?"
- Passes 3-4: "For each density dimension I've applied, does the variation serve
  the content's rhythm or is it decorative?"
- Passes 5-6: "Do density dimensions interact? Does high spatial density coincide
  with high cognitive density (overload) or are they inversely correlated?"
- Passes 7-8: "Has my understanding of 'density' changed? At pass 1, density
  meant 'how much stuff per viewport.' What does it mean now?"
```

---

## Question 3: Finding Application Tracking

**Audit question:** The minimum engagement table says "3 findings per research file." Is this per primacy visit or per wave? 3 findings per file per wave out of 337 total means ~18 findings applied -- only 5% of the corpus. Should this minimum be higher?

### What the Skill Says

Lines 319-331 (Minimum Engagement Per Wave table):
```
| Requirement         | Minimum                          |
|---------------------|----------------------------------|
| Applied findings    | 3 per research file in the wave  |
```

### Analysis

The language "per research file in the wave" means per wave total, not per primacy visit. This yields:

- 6 files x 3 findings = 18 findings applied in Wave 2
- 18 / 337 total findings = 5.3% of the research corpus
- R4 has 192 findings; 3 applied = 1.6% of R4
- R1 has 28 findings; 3 applied = 10.7% of R1

The skill itself acknowledges this is shallow. Line 405 (within L3 metacognition): "337 findings across 6 files. I've applied maybe 30. Of the remaining 307, how many did I dismiss too quickly?" This self-aware question describes applying ~30 findings (~9%) as a number warranting concern. But the minimum engagement table sets the floor at 18 -- even below the number the skill's own evaluation considers inadequate.

The problem is compounded by file size disparity. 3 findings from R4 (192 findings, 990 lines) represents fundamentally different engagement than 3 findings from R1 (28 findings, 584 lines). A flat per-file minimum treats a 192-finding file the same as a 28-finding file.

Additionally, the minimum does not distinguish between "applied" (resulting in CSS changes) and "engaged with" (read, considered, tested against the page, and either applied or consciously deferred). An agent could satisfy "3 applied findings" by grabbing the 3 most obvious findings from each file and deploying them as surface treatments, never engaging with the file's deeper vocabulary.

### Verdict

**HIGH GAP.** The minimum is too low to prevent surface-level engagement and does not scale with file size.

### Recommended Fix

Scale the minimum per file based on finding count, and distinguish "applied" from "deeply engaged":

```
| File | Findings | Min. Applied | Min. Deeply Engaged          |
|------|----------|--------------|------------------------------|
| R1   | 28       | 5            | 3 (with CSS evidence)        |
| R2   | 27       | 5            | 3 (with CSS evidence)        |
| R3   | 51       | 8            | 5 (with CSS evidence)        |
| R4   | 192      | 15           | 8 (with CSS evidence)        |
| R5   | 39       | 6            | 4 (with CSS evidence)        |
| SYN  | n/a      | n/a          | 3 cross-file insights        |
```

"Deeply engaged" = the agent can point to specific CSS lines that embody the finding AND explain why the content demanded this application. "Applied" = the agent tested the finding against the page, whether or not it resulted in CSS changes.

Total minimum: 39 applied, 26 deeply engaged. This is ~12% of the corpus for applications but with the "deeply engaged" requirement, each application produces real spatial depth.

Alternatively, under the sub-wave architecture (Question 1), each sub-wave has its own minimum scaled to the file:
- R1 sub-wave: 5 applied, 3 deeply engaged
- R3 sub-wave: 8 applied, 5 deeply engaged
- R4 sub-wave: 15 applied, 8 deeply engaged
- R2 sub-wave: 5 applied, 3 deeply engaged
- R5 sub-wave: 6 applied, 4 deeply engaged

---

## Question 4: Research-Specific Spatial Evaluation

**Audit question:** When R3 (density) is at primacy, the evaluation should ask density-specific questions. When R4 (axis) is at primacy, axis-innovation questions. Does the skill prescribe this file-specific evaluation?

### What the Skill Says

The evaluation questions at lines 402-407 are file-agnostic. L1 asks about "density rhythm, velocity variation, column breaks" -- these touch R3 and R4 vocabulary but are not presented as file-specific diagnostics. They are general Wave 2 questions asked regardless of which file is at primacy.

### Analysis

This gap is distinct from Question 2 (which is about metacognitive evaluation per file). This gap is about SPATIAL evaluation -- looking at the PAGE and asking file-specific questions about what the page demonstrates when viewed through the lens of the current primacy file.

The distinction matters operationally. Metacognitive evaluation (Question 2) asks: "How has reading R3 changed my understanding?" Spatial evaluation (this question) asks: "Looking at this screenshot through R3's vocabulary, what density dimensions are operating and which are absent?"

When R3 is at primacy, the spatial evaluation should include:
- "Looking at this screenshot, can I identify at least 3 of R3's 6 density dimensions operating? Where is temporal density varying? Where is cognitive density managed?"
- "Does the density oscillate HIGH/LOW/MEDIUM or is it monotonic?"
- "Is there fractal density at 3+ scales (page, section, component, character)?"

When R4 is at primacy:
- "What eye-movement pattern does each section create?"
- "Where are non-default reading directions used?"
- "Does the spatial scaffolding create an invisible geometry that guides the reader?"

When R5 is at primacy:
- "Where are components combining to create effects neither produces alone?"
- "Is the combination harmony, tension, or both? Is this content-motivated?"
- "Does the sequencing of component groups follow the content's argument?"

The skill has no file-specific spatial evaluation questions. The agent reads a research file and then evaluates the page using the same generic questions it would use without having read the file. The research changes what the agent KNOWS but not what the agent LOOKS FOR when taking screenshots and scrolling. The feedback loop (BUILD -> EVALUATE -> LEARN) is broken at the EVALUATE step because the evaluation does not incorporate the current primacy file's vocabulary.

### Verdict

**MEDIUM-HIGH GAP.** Without file-specific spatial evaluation, reading research and looking at the page are disconnected activities. The agent reads R3, then looks at the page, but doesn't look at the page THROUGH R3. The skill should prescribe that the primacy file's vocabulary becomes the lens for screenshot evaluation during that pass.

### Recommended Fix

For each research file, prescribe 2-3 "spatial diagnostic questions" the agent applies to page screenshots when that file is at primacy. These should be CUMULATIVE -- once the agent has used R3's spatial diagnostics, those questions remain in the evaluation vocabulary even when R3 is no longer at primacy. This creates an expanding spatial vocabulary across the wave.

Add as a subsection within Wave 2 (or within each sub-wave under the sub-wave architecture):

```
### Spatial Diagnostics by Primacy File

When the primacy file changes, your EYES change. Apply the primacy
file's vocabulary to your screenshots:

- **R1 at primacy:** Look for documentation rhythm. Does each viewport
  present one clear concept? Is whitespace structural? Does the page
  have the rhythm of Stripe or Linear?
- **R3 at primacy:** Look for density dimensions. Count how many of the
  6 dimensions (temporal, depth, semantic, cognitive, interaction, spatial)
  are varying. Where is the density monotonic?
- **R4 at primacy:** Look for eye movement. Trace the reading path. Where
  does the eye move in a Z-pattern? F-pattern? Where does reading gravity
  serve or fight the content?
- **R2 at primacy:** Look for editorial quality. Where has the grid been
  broken intentionally? Do asymmetries encode content relationships?
- **R5 at primacy:** Look for component relationships. Where are
  components talking to each other? Where are they isolated?
- **SYNTHESIS at primacy:** Look for cross-dimensional interaction. Where
  do density and axis interact? Where do documentation patterns and
  combination theory intersect?

These diagnostics are CUMULATIVE. Once you have R3 eyes, you keep them.
By the end of Wave 2, you see through all 6 lenses simultaneously.
```

---

## Question 5: RESEARCH-SYNTHESIS.md Positioning

**Audit question:** The synthesis file appears once in the rotation schedule. Should it appear more? It contains cross-file insights that may only become visible after multiple files have been absorbed.

### What the Skill Says

Line 386: SYNTHESIS appears at position 11 of 12 in the rotation (before "agent's diagnostic").

### Analysis

SYNTHESIS is critically underpositioned for three reasons:

**1. Single appearance is insufficient.** SYNTHESIS contains cross-file insights -- unified principles that emerge when R1-R5 are viewed together. One primacy visit cannot exhaust its value, especially when the agent's understanding of individual files is still evolving. After the single SYNTHESIS visit, the agent continues building through "depth passes" but without SYNTHESIS at primacy, cross-file relationships receive no further attention unless the diagnostic override happens to surface them.

**2. Position 11 is simultaneously too late AND too early.** Too late because by position 11, the agent has already made 10 passes of integration decisions without cross-file guidance. The R3-R5 integration at pass 4, for instance, was done without any awareness of the SYNTHESIS principles governing how density and combination interact. Too early because the agent hasn't yet finished depth passes -- SYNTHESIS insights discovered at position 11 have limited remaining passes to act on before the wave exhausts.

**3. SYNTHESIS reveals relationships invisible to individual files.** R3 describes 6 density dimensions. R4 describes axis patterns. Neither describes how density dimensions interact with axis patterns. SYNTHESIS does. Without adequate SYNTHESIS engagement, the agent applies R1-R5 findings in parallel isolation, missing the compound spatial intelligence that emerges from their interaction.

### Verdict

**MEDIUM-HIGH GAP.** The synthesis is the only document that bridges dimensions. One primacy visit cannot transmit its cross-file intelligence.

### Recommended Fix

Under the sub-wave architecture (Question 1), SYNTHESIS has its own sub-wave (Wave 2F, 4-6 passes) positioned after all individual file sub-waves. This is the primary fix.

Additionally, insert a SYNTHESIS mid-rotation check-in between Wave 2C (R4) and Wave 2D (R2). After the agent has absorbed R1, R3, and R4, a single SYNTHESIS pass serves as an integration checkpoint -- priming the agent for R2 and R5 absorption by revealing which cross-file relationships are already relevant.

If the sub-wave architecture is not adopted, SYNTHESIS should appear at minimum at positions 6, 11, and as a mandatory re-read in depth passes. Three primacy visits, not one. Position 6 serves as a mid-wave integration check after R1-R5 have each had one primacy visit. Position 11 serves as the pre-exhaustion synthesis. The depth-pass re-read ensures cross-file insights inform the final deepening.

---

## Question 6: Primacy Attention Mechanics

**Audit question:** The skill mentions transformer attention U-curve. Does it explicitly explain HOW primacy rotation works? Is the explanation clear enough for the agent to understand WHY it matters?

### What the Skill Says

The skill uses "primacy" 27 times across 817 lines. The term is used extensively as a label -- "file at primacy," "primacy position," "gets primacy" -- but the mechanism is explained only implicitly:

- Line 384: "Each file gets primacy at least twice across the wave."
- Lines 388-391: The diagnostic override rules (which file gets primacy next).
- Line 386: The rotation schedule (which file is at primacy per pass).

The skill never states WHY a file being "at primacy" produces different cognitive effects than reading the same file second or third in a pass.

### Analysis

Primacy rotation exploits the transformer attention U-curve. The mechanism:

1. **Primacy position:** Tokens at the beginning of the context window receive disproportionately high attention weights. When a research file is read FIRST in a pass, its tokens occupy the highest-attention region.

2. **Recency position:** Tokens at the end of the context window receive moderately high attention. The HTML file (read last or most recently written) occupies this position.

3. **Attention trough:** Tokens in the middle of the context window receive the lowest attention. Files read between the primacy file and the HTML drift into this region.

4. **Operational consequence:** The primacy file's vocabulary disproportionately influences the agent's subsequent building decisions. When R3 is at primacy, density vocabulary has higher attention weight than axis vocabulary (from R4, read earlier and now in the middle). This is WHY rotation matters -- it ensures each file's vocabulary gets turns in the highest-influence position.

Without this explanation, the agent treats "primacy" as a procedural instruction: "read this file first." The agent might read R3 first but then immediately read R4, R5, R2, R1, and the HTML before building, pushing R3's tokens deep into the attention trough. The primacy effect is destroyed even though the procedural instruction was followed.

The skill needs to explain that after reading the primacy file, the agent should BUILD IMMEDIATELY -- apply at least one finding from the primacy file to CSS before reading any other file. This locks the primacy file's influence into the artifact before subsequent files dilute its attention weight.

### Verdict

**MEDIUM GAP.** The skill's primacy rotation will have SOME effect even without explanation (the agent will at least read the file first), but the effect is weaker without the agent understanding WHY and HOW to preserve it.

### Recommended Fix

Add a 6-8 line explanation block before the rotation schedule:

```
### Why Primacy Rotation Matters (Transformer Attention Mechanics)

The file at primacy is read FIRST in the pass. This places its tokens in
the highest-attention region of the context window (the "primacy position").
Transformer attention follows a U-curve: tokens at the start and end of
context receive the highest attention weights; tokens in the middle receive
the lowest. Primacy rotation ensures each research file gets turns in the
highest-attention position, preventing any single file's vocabulary from
dominating.

**Operational implication:** After reading the primacy file, BUILD
IMMEDIATELY. Apply at least one finding from the primacy file to CSS
before reading any other file. This locks the primacy file's influence
into the artifact before subsequent files push its tokens into the
attention trough.
```

---

## Question 7: R5-COMBINATION-THEORY.md Special Handling

**Audit question:** R5 describes how mechanisms COMBINE. This is arguably the most important for late-wave building. Does it get special treatment in the rotation or is it treated the same as all other files?

### What the Skill Says

R5 appears in the rotation at positions 4 and 9 -- the same 2-visit treatment as R1, R2, R3, and R4. It has no special handling, no additional passes, no late-wave emphasis.

Wave 5 (lines 465-486) is titled "Combination Mastery" and focuses on compound combination, but its input is listed as "CD-006 (re-read with deep integration focus), grammar.md, the HTML file." R5-COMBINATION-THEORY.md is NOT listed as a Wave 5 input.

### Analysis

R5 deserves special treatment for three reasons:

**1. R5 is uniquely second-order.** R1-R4 each describe a single dimension (documentation patterns, creative layouts, density, axis). R5 describes how those dimensions COMBINE -- harmony, tension, sequencing, grouping, nesting, meta-relationships. It is a second-order research file: its findings are about relationships between the things R1-R4 describe. This means R5's findings are partially meaningless until the agent has absorbed R1-R4's vocabulary.

Reading R5 at rotation position 4 (after only R1 and R4 have been at primacy) means the agent lacks the density vocabulary (R3, position 3 -- just one pass prior) and the layout vocabulary (R2, not yet encountered) needed to fully understand R5's combination principles. The agent reads about "component harmony" without yet knowing the full vocabulary of what components can do across all dimensions.

**2. R5 is the bridge to Wave 5.** Wave 5 is "Combination Mastery" -- the wave where compound spatial inventions emerge. But Wave 5's inputs (line 467) do not include R5. This means R5 is read only during Wave 2 (positions 4 and 9), and then 18-27 passes elapse (Wave 3: 10-15, Wave 4: 8-12) before the agent enters the wave where combination vocabulary is most critical. R5's combination vocabulary has largely decayed from the agent's active context by Wave 5.

**3. R5 contains the choreography principles.** The 39 findings in R5 address harmony, tension, sequencing, grouping, nesting, and meta-relationships between components. These are the principles that determine whether the page's components talk to each other or sit in isolation. Late-wave building (Waves 5-6) is where compound spatial inventions emerge -- the moment when two individually adequate components create something neither produces alone. R5 is the research foundation for exactly this moment. But R5 receives no more attention than R1 (documentation patterns), which is primarily useful in the early structural phases.

### Verdict

**MEDIUM-HIGH GAP.** R5 is a second-order meta-file treated identically to first-order dimension files. Its combination vocabulary is most useful late in the build but receives no late-wave emphasis.

### Recommended Fix

Three changes:

**1. Under the sub-wave architecture (Question 1):** R5's sub-wave (Wave 2E) is deliberately positioned AFTER R1-R4 sub-waves, ensuring the agent has absorbed all individual dimension vocabularies before encountering combination theory. R5 should get 8-10 passes (matching R4's allocation), reflecting its higher-order nature and the prerequisite knowledge it requires.

**2. Add R5 to Wave 5 inputs:** Change line 467 from:
```
Input: CD-006 (re-read with deep integration focus), grammar.md, the HTML file
```
to:
```
Input: CD-006 (re-read with deep integration focus), R5-COMBINATION-THEORY.md
(re-read with full context of 50+ passes), grammar.md, the HTML file
```

The Wave 5 re-read of R5 is qualitatively different from the Wave 2 encounter. After 50+ passes of building, the agent has lived experience of component interactions. R5's findings about harmony, tension, and sequencing will land differently -- the agent will recognize patterns from its own building that R5 describes in abstract. This is the reciprocal relationship the skill describes (line 214): "The page teaches you how to read the content."

**3. If sub-wave architecture is not adopted:** Add a third R5 primacy visit at rotation position 12 (currently "agent's diagnostic"). R5 at position 12 means combination vocabulary is the freshest research input as the agent enters depth passes, which is precisely when compound inventions emerge.

---

## Gaps Summary Table

| # | Question | Location | Severity | Core Issue |
|---|----------|----------|----------|------------|
| 1 | Per-file pass depth | Lines 380-386 | **CRITICAL** | 2 primacy visits per file across 4,104 lines is surface scanning. Need sub-wave architecture with 6-10 passes per file. Total Wave 2 should be 36-48 passes, not 12-18. |
| 2 | Per-file evaluation | Lines 402-413 | **HIGH** | Metacognitive evaluation is file-generic. R3 questions should differ from R4 questions. Each file's dimension demands its own evaluation vocabulary. |
| 3 | Finding application tracking | Lines 319-331 | **HIGH** | 3 findings per file = 5.3% of corpus. Should scale with file size (R4 needs 15, not 3) and distinguish "applied" from "deeply engaged." |
| 4 | Research-specific spatial evaluation | Lines 402-413 | **MEDIUM-HIGH** | Agent reads research but evaluates page with file-agnostic questions. The primacy file should become the LENS for screenshot evaluation. |
| 5 | SYNTHESIS positioning | Line 386 | **MEDIUM-HIGH** | One primacy visit for the only cross-file document. Needs Wave 2F sub-wave + mid-rotation check-in. |
| 6 | Primacy mechanics explanation | Lines 380-386 | **MEDIUM** | Skill never explains WHY primacy position matters (transformer attention U-curve) or HOW to preserve the primacy effect (build immediately after reading). |
| 7 | R5 special handling | Line 386, Line 467 | **MEDIUM-HIGH** | Second-order meta-file treated identically to first-order dimension files. Needs late positioning, expanded passes, and inclusion in Wave 5 inputs. |

---

## Structural Recommendation

The 7 gaps are not independent. Gaps 1, 2, 4, 5, and 7 all stem from a single design decision: treating Wave 2 as a single 12-18 pass unit that cycles through 6 files. The fix is architectural, not incremental.

**Replace Wave 2 with a Wave 2 macro-wave containing 6 sub-waves:**

```
Wave 2: Research R1-R5 (36-48 passes total)

  Wave 2A: R1 Documentation Patterns (6-8 passes)
    - R1 at primacy every pass
    - R1-specific evaluation: documentation rhythm, whitespace as structure,
      progressive disclosure, viewport concept density
    - R1-specific spatial diagnostic: "Does each viewport present one clear
      concept? Is the density oscillation HIGH/LOW/MEDIUM?"
    - Minimum: 5 applied, 3 deeply engaged with CSS evidence
    - Exhaustion: Agent can describe the page's documentation rhythm
      using R1 vocabulary

  Wave 2B: R3 Density Dimensions (6-8 passes)
    - R3 at primacy every pass
    - R3-specific evaluation: 6 density dimensions (temporal, depth,
      semantic, cognitive, interaction, spatial), fractal self-similarity,
      decompression zones
    - R3-specific spatial diagnostic: "How many of the 6 density
      dimensions are varying? Where is density monotonic?"
    - Minimum: 8 applied, 5 deeply engaged with CSS evidence
    - Exhaustion: Agent can identify density operating at 3+ dimensions
      in the page

  [Mid-rotation SYNTHESIS check-in: 1 pass]
    - Read SYNTHESIS to prime cross-file awareness before R2 and R5

  Wave 2C: R4 Axis Innovations (8-10 passes)
    - R4 at primacy every pass (largest file: 192 findings)
    - R4-specific evaluation: reading patterns (Z, F, Gutenberg), eye
      movement, spatial scaffolding, reading gravity
    - R4-specific spatial diagnostic: "What eye-movement pattern does each
      section create? Where are non-default reading directions used?"
    - R4-specific triage guidance: "192 findings. Do not absorb all.
      First 3 passes: identify 15-20 findings relevant to THIS content.
      Remaining passes: go deep on those 15-20."
    - Minimum: 15 applied, 8 deeply engaged with CSS evidence
    - Exhaustion: Agent can name the reading pattern of every page section

  Wave 2D: R2 Creative Layouts (6-8 passes)
    - R2 at primacy every pass
    - R2-specific evaluation: editorial courage, broken grid, intentional
      asymmetry, pull quotes as bridges, layout-as-content
    - R2-specific spatial diagnostic: "Where has the grid been broken
      intentionally? Do asymmetries encode content relationships?"
    - Minimum: 5 applied, 3 deeply engaged with CSS evidence
    - Exhaustion: Agent can point to 2+ layout departures from grid
      convention that are content-motivated

  Wave 2E: R5 Combination Theory (8-10 passes)
    - R5 at primacy every pass
    - PREREQUISITE: Waves 2A-2D complete (R5 requires R1-R4 vocabularies)
    - R5-specific evaluation: component harmony/tension, sequencing,
      grouping, nesting, meta-relationships, compound effects
    - R5-specific spatial diagnostic: "Where are components combining to
      create effects neither produces alone? Is the combination
      content-motivated?"
    - Minimum: 6 applied, 4 deeply engaged with CSS evidence
    - Exhaustion: Agent can identify 3+ compound combinations

  Wave 2F: SYNTHESIS Integration (4-6 passes)
    - SYNTHESIS at primacy every pass
    - Targeted re-reads of individual R-files as SYNTHESIS reveals
      cross-file connections
    - SYNTHESIS-specific evaluation: "Where do principles from different
      files conflict in my page? Where do they reinforce? What
      cross-dimensional relationships exist?"
    - Minimum: 3 cross-file insights identified and acted on
    - Exhaustion: Agent can articulate the page's design as a coherent
      application of 3+ research files interacting
```

**Impact on total build:**

Wave 2 expands from 12-18 passes to 36-48 passes. At ~5 minutes per pass, this adds roughly 2-3 hours. At ~10K tokens per pass, this adds $30-50. The skill already estimates $150-300 and 6-10 hours. The expanded Wave 2 pushes the upper bound to ~$250-350 and 8-12 hours. This is within the skill's stated philosophy (line 799: "This is not a cost to be minimized").

The alternative -- keeping 12-18 passes -- means the agent touches 337 findings at ~25 findings per pass, which is surface scanning. The skill's own anti-pattern #9 (line 751) calls "Sample 2-4 mechanisms from the catalog" the single most destructive instruction because it compresses 337 findings into a selection menu. A 12-pass Wave 2 that rotates through 6 files is a structurally identical error at a different scale: compressing deep research into a rotation menu rather than absorbing it file by file.

---

## Additional Finding: R4's 192 Findings Require Scale Acknowledgment

R4 is the largest research file by an enormous margin: 192 findings versus the next largest at 51 (R3). All 192 findings are currently UNAPPLIED (the AD explorations never consumed them). R4 is both the largest file and the one with the least prior distillation.

The current rotation gives R4 the same 2 primacy visits as R1 (28 findings). This means R4 gets ~0.01 passes of primacy per finding while R1 gets ~0.07 passes per finding -- a 7x disparity.

Even under the sub-wave architecture, R4's 8-10 passes yield ~0.05 passes per finding versus R1's ~1.0 passes per finding at 6-8 passes. The disparity remains (~20x) but is mitigated by the triage guidance: the skill should explicitly instruct the agent to identify the 15-20 most relevant R4 findings for THIS content rather than attempting to absorb all 192. The remaining findings are context vocabulary, not obligations.

The skill should acknowledge this explicitly, either in the Wave 2 header or in R4's sub-wave instructions: "R4 is 57% of the entire research corpus by finding count. You will not absorb all 192 findings. Your job is to identify the axis innovations that serve THIS content and absorb those deeply. The remaining 170+ findings expand your spatial vocabulary for future builds."

---

## Cross-Reference: How These Gaps Interact

The 7 gaps compound:

1. **Gaps 1 + 2:** Insufficient per-file passes (Gap 1) prevent per-file evaluation from deepening (Gap 2). Even if file-specific evaluation were prescribed, 2 primacy visits per file provides insufficient depth for the evaluation to evolve meaningfully.

2. **Gaps 3 + 1:** Low finding minimums (Gap 3) combined with few passes (Gap 1) create a compound failure: the agent applies 3 surface-level findings from each file in 2 quick visits and declares Wave 2 exhausted.

3. **Gaps 4 + 6:** Without understanding why primacy matters (Gap 6), the agent cannot apply file-specific spatial evaluation (Gap 4) effectively. If the agent reads R3 at primacy but then reads 4 other files before looking at the page, R3's vocabulary is no longer active when the screenshot is taken.

4. **Gaps 5 + 7:** SYNTHESIS underpositioned (Gap 5) and R5 undertreated (Gap 7) together mean the cross-file and combination dimensions -- the highest-order spatial intelligence -- receive the least attention. Both are about relationships between things. Both require prior absorption of individual files as prerequisites. Both get the least structural support.

The sub-wave architecture resolves all 7 gaps simultaneously because it transforms the fundamental unit of absorption from "one wave, many files" to "one sub-wave, one file." Each sub-wave can have its own evaluation, its own minimums, its own spatial diagnostics, and its own exhaustion criteria.
