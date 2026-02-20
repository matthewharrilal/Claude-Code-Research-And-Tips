# Builder Absorption Analysis: The Conventions Brief Handoff

**Agent:** cognitive-load-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Analyze the single biggest compression risk in the pipeline -- the orchestrator-to-builder handoff

---

## 1. LOAD-BEARING LINE INVENTORY

The conventions brief (DRAFT-09) has 232 lines of content across 15 sections. I classified every line into one of three categories:

- **LOAD-BEARING:** If the builder fails to absorb this, the output quality drops measurably. These lines produce visible CSS decisions.
- **CALIBRATING:** These lines inform the builder's taste and judgment. Missing them degrades subtlety but not structure. The page is still recognizably KortAI without them.
- **CONTEXTUAL:** Rationale, history, narrative framing. These exist to prevent the builder from asking "why?" and going off-script. Opus with sufficient training data may already know the answer.

### Line-by-Line Classification

| Section | Lines | Load-Bearing | Calibrating | Contextual |
|---------|-------|-------------|-------------|------------|
| 1. Identity (Soul) | ~38 | 32 | 2 | 4 |
| 2. Perception | ~18 | 14 | 2 | 2 |
| 3. Richness | ~12 | 4 | 6 | 2 |
| 4. Multi-Coherence | ~32 | 22 | 8 | 2 |
| 5. Fractal Echo | ~20 | 12 | 6 | 2 |
| 6. Unified Metaphor | ~14 | 4 | 6 | 4 |
| 7. Transition Grammar | ~16 | 12 | 2 | 2 |
| 8. CSS Vocabulary | ~28 | 24 | 4 | 0 |
| 9. Creative Authority | ~14 | 4 | 6 | 4 |
| 10. Compositional Memory | ~12 | 4 | 6 | 2 |
| 11. Five Questions | ~14 | 0 | 12 | 2 |
| 12. Restraint List | ~14 | 10 | 2 | 2 |
| 13. Accessibility | ~22 | 18 | 2 | 2 |
| 14. Responsive | ~10 | 8 | 2 | 0 |
| Conviction Card | ~10 | 6 | 4 | 0 |
| Process | ~14 | 10 | 2 | 2 |
| **TOTALS** | **~232** | **~184** | **~72** | **~32** |

**Finding:** Approximately 184 lines are load-bearing. That is 79% of the brief. The brief is already compressed -- there is very little fat. Cutting it to 75-100 lines would require removing load-bearing material.

### The 50 Most Critical Lines (Absolute Must-Absorb)

These are the lines where failure to absorb produces a measurable, auditable defect:

1. **Soul constraints block (lines 48-55):** border-radius:0, box-shadow:none, no gradients, no pure B/W, opacity:1, no drop-shadow. 6 binary rules. Missing ANY ONE = soul violation in every element.
2. **Container width (line 59):** "940-960px wide, centered." Missing = the #1 historical failure mode.
3. **Font trinity (line 57):** Instrument Serif for display, Inter for body, JetBrains Mono for code. Missing = wrong typefaces throughout.
4. **Color palette (lines 64-71):** 6 locked values + 5 accent values. Missing = wrong colors throughout.
5. **Spacing scale (line 61):** "4px base unit: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96." Missing = arbitrary spacing.
6. **Background delta threshold (line 90):** ">= 15 RGB." Missing = imperceptible zone transitions (the Flagship failure).
7. **Letter-spacing floor (line 92):** ">= 0.02em per element." Missing = wasted CSS on sub-perceptual values.
8. **Stacked gap ceiling (line 94):** ">= 108px voids." Missing = whitespace dead zones.
9. **Multi-coherence minimum (line 96):** ">= 3 channels shifting at every zone boundary." Missing = noise instead of design.
10. **Border configurations (line 98):** ">= 3 distinct configurations." Missing = monotone borders.
11. **Mechanism breadth (line 100):** ">= 4 of 5 categories." Missing = vocabulary gaps.
12. **3-tier border budget (lines 221-222):** 4px/3px/1px only, never 2px. Missing = border hierarchy collapse.
13. **Component 2-zone DNA (line 219):** Label zone + body zone pattern. Missing = unstructured components.
14. **Dark slab inversion (line 223):** #1A1A1A bg for header/footer/code. Missing = weak page bookends.
15. **HTML skeleton (lines 319-337):** Skip link, ARIA landmarks, font loading. Missing = accessibility failures.
16. **4 verification pauses (lines 407-410):** After skeleton, after backgrounds, after borders, after typography. Missing = errors compound without checkpoints.
17. **Deliverables (lines 415-418):** output.html + _build-log.md + _cascade-value-table.md. Missing = incomplete output.

**Observation:** The first 17 items above would fit in approximately 60-70 lines if expressed as a pure parameter table. The remaining 114 load-bearing lines are primarily about HOW to compose (multi-coherence directions, transition grammar, fractal echo, vocabulary patterns) rather than WHAT values to use.

### The Split That Matters

The 184 load-bearing lines decompose into two fundamentally different cognitive tasks:

- **PARAMETER LINES (~70):** Concrete values the builder needs to recall while writing CSS. Color hex codes, spacing values, border weights, threshold numbers, HTML template, deliverables. These are LOOKUP material. The builder does not need to "understand" them -- just reference them.

- **COMPOSITIONAL LINES (~114):** How to think about boundaries, how multi-coherence works, what transition grammar means, how fractal echo expresses, what CSS vocabulary patterns look like. These are INTERNALIZATION material. The builder must absorb these into working memory as a mental model, then compose from that model.

**This is the core insight:** The brief mixes lookup material and internalization material in the same document. A builder reading it linearly will try to memorize hex codes AND internalize compositional principles in the same pass. The hex codes push out the compositional principles because they are more concrete and easier to store.

---

## 2. ABSORPTION VERIFICATION PROTOCOL

### What the Build Log Currently Captures

Per the builder spawn prompt (DRAFT-11 lines 240-242), the _build-log.md captures:
1. Transition table (BEFORE build)
2. Fractal echo table (BEFORE build)
3. Override log (DURING build)
4. Midpoint observation (DURING build)
5. Final self-assessment (AFTER build)

Per the conventions brief, the conviction card also goes in the build log:
6. Conviction statement (BEFORE any CSS)
7. 3+ deliberately absent mechanisms and reasoning

### What the Build Log Proves

The current build log proves the builder READ sections 4 (multi-coherence via transition table), 5 (fractal echo via table), 9 (creative authority via override log), and the conviction card. It does NOT prove absorption of:

- Section 1 (Identity) -- no log artifact requires demonstrating soul knowledge
- Section 2 (Perception) -- no log artifact requires citing threshold values
- Section 3 (Richness) -- no log artifact requires the density x restraint x confidence formula
- Section 7 (Transition Grammar) -- the transition table captures boundary types but does not require citing CSS values for SMOOTH/BRIDGE/BREATHING
- Section 8 (CSS Vocabulary) -- no log artifact requires citing component DNA, border budget, or dark slab
- Section 12 (Restraint List) -- the "absent mechanisms" log touches this but does not cover the prohibited techniques list
- Section 13 (Accessibility) -- no log artifact requires demonstrating ARIA knowledge

### What the Build Log SHOULD Capture

Add a **Brief Reflection** step between the conviction card and the first line of CSS. The builder writes 8-12 lines proving absorption of sections the current log misses:

```markdown
## BRIEF REFLECTION (write BEFORE first CSS line)

### Thresholds I Will Use
- Adjacent zone bg delta: [builder writes number from memory]
- Letter-spacing floor: [builder writes number from memory]
- Max stacked gap: [builder writes number from memory]
- Min channel shifts at boundary: [builder writes number from memory]

### Vocabulary I Plan To Deploy
- Border budget: [builder names the 3 weights and what each means]
- Component DNA pattern: [builder describes 2-zone structure]
- Dark slab usage: [builder names where inverted backgrounds go]

### One Thing That Surprised Me In The Brief
- [Builder writes 1 sentence about something they did not expect]

### Restraint: 3 Things I Will NOT Use
- [From Section 12 restraint list -- builder names 3 prohibited techniques]
```

**Why this works:** It forces the builder to retrieve information from memory rather than copying it. If the builder cannot fill in the threshold values from recall, they absorbed the narrative but not the parameters. If they cannot describe the border budget, Section 8 did not land. The "one thing that surprised me" is a minimal creativity prompt that verifies genuine reading (a builder who skimmed will write something generic).

**Cost:** ~10-15 lines in the build log, ~2 minutes of builder time. Negligible.

---

## 3. OPTIMAL READING ORDER

### Why Order Matters

LLMs exhibit both primacy effects (first material read establishes the mental frame) and recency effects (last material read is most active in working memory when generation begins). The 6-file manifest creates 5 cognitive switches. Each switch risks dropping context from the previous file.

### Current Order (from builder spawn prompt)

1. content.md (the material) -- read completely first
2. conventions-brief.md (primary guidance)
3. tokens.css (CSS variables)
4. prohibitions.md (soul constraints)
5. mechanism-catalog.md (mechanism CSS patterns)
6. components.css (component library)

### Problems With This Order

**Problem 1: Content first means the brief is read through a content lens.** The builder reads RESEARCH-SYNTHESIS, forms a mental model of the content, then reads the brief looking for "how does this apply to what I just read?" This is actually GOOD for compositional sections (multi-coherence, metaphor) but BAD for parameter sections (thresholds, palette). The builder will skim parameters because they are not yet relevant.

**Problem 2: Tokens and prohibitions AFTER the brief is redundant.** The brief already contains the full color palette, font trinity, spacing scale, and all 6 soul constraints. Reading tokens.css and prohibitions.md after the brief means the builder encounters the same information a second time. This is good for reinforcement but bad for attention -- the builder will skim "yeah I already know this" and miss any values that differ.

**Problem 3: Mechanism catalog AFTER the brief means mechanism vocabulary arrives with depleted attention.** By file 5, the builder has already read 1000+ lines. The mechanism catalog at 300+ lines of CSS examples arrives when attention is lowest.

**Problem 4: Components.css is last.** The component library -- which the builder needs for spatial confidence (>= 8 component families) -- is the final file. It arrives at maximum fatigue.

### Recommended Order

```
1. conventions-brief.md   -- FIRST (primacy: establishes the world model)
2. content.md             -- SECOND (the material, read through the world model)
3. mechanism-catalog.md   -- THIRD (vocabulary, while attention is still high)
4. tokens.css             -- FOURTH (reference, reinforces brief Section 1)
5. components.css         -- FIFTH (reference, the component library)
6. prohibitions.md        -- LAST (recency: soul constraints freshest when building starts)
```

### Rationale

**Brief first:** The world-description frame must be established before the content is read. Reading content first makes the builder form its own mental model, which then resists the brief's model. Reading the brief first means the content is parsed through the brief's lens -- zones, boundaries, multi-coherence, transitions become the parsing vocabulary.

**Content second:** The builder reads the content through the world model. Zone boundaries, tensions, and metaphor candidates emerge naturally because the brief has already primed the builder to look for them.

**Mechanism catalog third:** This is the highest-attention position for non-primary material. The builder has just read the content and is thinking "what mechanisms serve this content?" The catalog arrives at the moment of maximum relevance.

**Tokens fourth:** Pure reference material. The builder does not need to memorize hex codes -- tokens.css is a lookup file. It reinforces the palette values from brief Section 1. Position 4 is appropriate for lookup material.

**Components fifth:** Also reference/lookup. The builder will consult components.css while building, not memorize it. Position 5 is fine.

**Prohibitions last:** This is the single most impactful recency play. The soul constraints are the LAST thing the builder reads before generating CSS. Every border-radius, every box-shadow, every color choice is made with prohibitions freshest in working memory. The brief already contains soul constraints (Section 1), so prohibitions.md is reinforcement -- and reinforcement of constraints should be the last thing before generation.

### Should Any Files Be Combined?

**Yes: the brief and tokens.css overlap significantly.** The brief's Section 1 contains the full palette, font trinity, spacing scale, and soul constraints. Tokens.css contains the same values in CSS variable format. If the brief already has these values, tokens.css adds only the CSS variable NAMES (--color-primary, --space-8, etc.).

**Proposal:** Add a 15-line CSS variable reference table to the end of the conventions brief. Then tokens.css becomes optional ("consult for exact variable names if needed during build"). This reduces the file count from 6 to 5, eliminating one cognitive switch.

**What NOT to combine:** The mechanism catalog and conventions brief serve different functions -- the brief is internalization material, the catalog is consultation material. Combining them would make the brief 500+ lines, well past any absorption threshold.

### Should Any Files Be Excluded?

**Candidate: prohibitions.md (420 lines).** This is the longest reference file. The brief already contains the 6 soul constraints. Prohibitions.md adds 12 conditional prohibitions and 2 meta-prohibitions. Of these, perhaps 3-4 are relevant to CSS writing (the rest are process-level prohibitions for the pipeline, not the builder).

**Proposal:** Do NOT exclude prohibitions.md entirely. Instead, create a BUILDER-SPECIFIC EXTRACT of prohibitions.md containing only the 8 absolute prohibitions + the 3-4 conditional prohibitions relevant to CSS output. This would be ~40 lines instead of 420. Route the full prohibitions.md to the gate runner and auditors, not the builder.

---

## 4. CONCRETE ABSORPTION VERIFICATION

### Per-File Verification Matrix

| File | Verification Method | What Proves Absorption | Automated? |
|------|-------------------|----------------------|------------|
| **tokens.css** | CSS custom property audit: every `var(--name)` in output.html must resolve to a token defined in tokens.css. No hardcoded hex values that match a token. | Correct variable usage | YES (gate runner can check) |
| **prohibitions.md** | Soul scan: zero border-radius > 0, zero box-shadow, zero gradients, zero pure B/W, opacity 1 on all containers, no drop-shadow. | Zero violations | YES (gate runner SC-02 through SC-05) |
| **mechanism-catalog.md** | Builder's fractal echo table + mechanism inventory in build log must reference catalog mechanism IDs (#1-#18) with correct category tags. At least 4 of 5 categories present. | Correct mechanism identification | PARTIAL (DG-1 checks table exists; manual check needed for correct IDs) |
| **components.css** | Count distinct component class prefixes in output.html. Cross-reference against components.css class inventory. | >= 8 component types from library | YES (gate SC-08) |
| **content.md** | Content-form coupling audit: each section's visual treatment should vary with content density/mode. Identical CSS across sections with different content = decoupling. | Responsive visual treatment | NO (requires PA auditors) |
| **conventions-brief.md** | **THE HARD ONE. See below.** | | |

### Verifying Conventions Brief Absorption

The brief is the hardest file to verify absorption of because it teaches a MENTAL MODEL, not a set of discrete values. However, specific sections produce auditable artifacts:

**Section 1 (Identity):** Verified by token usage + soul scan. Already covered.

**Section 2 (Perception):** Verified by threshold compliance. Already covered by gates SC-09, SC-10, SC-14.

**Section 3 (Richness):** Verified by the RESTRAINT LOG in _build-log.md. If the builder logs 3+ deliberately absent mechanisms with reasoning, they absorbed the restraint component. Density is verified by PA-60 (design moment density). Spatial confidence by PA-64 + PA-66.

**Section 4 (Multi-Coherence):** Verified by gate SC-13 (>= 3 channel shifts at every boundary) AND by CSS comments. The brief says "Name the coherence direction at each boundary in a CSS comment." Verification: grep output.html for `/* Boundary` comments. Count them. Must equal number of zone boundaries.

**Section 5 (Fractal Echo):** Verified by DG-1 (fractal echo table exists in build log with 5 rows).

**Section 6 (Unified Metaphor):** Verified by the conviction card (metaphor named) + PA-65 (music analogy) + PA-67 (novelty). This is the section hardest to verify programmatically. The brief says "Remove all text labels. Can a reader still feel the metaphor?" Only PA auditors can assess this.

**Section 7 (Transition Grammar):** Verified by the transition table in build log (each boundary assigned SMOOTH/BRIDGE/BREATHING) + SC-10 (no stacked gaps > threshold). NEW GATE PROPOSAL: count zone boundaries in output.html. Each must have exactly one transition type. Verify via boundary CSS comments.

**Section 8 (CSS Vocabulary):** Verified by component usage scan. Count occurrences of: 2-zone DNA components, 3-tier border system (4px + 3px + 1px all present), dark slab inversions, callout accent system, section meta labels. Each vocabulary pattern produces a distinct CSS fingerprint.

**Section 9 (Creative Authority):** Verified by the override log in build log. At least 1 override documented = builder exercised creative authority.

**Sections 10-11 (Memory + Questions):** Verified by the midpoint observation + five-question responses in build log.

**Section 12 (Restraint List):** NEW GATE PROPOSAL: scan output.html for presence of prohibited techniques. Any match = brief Section 12 was not absorbed. Check for: `linear-gradient`, `radial-gradient`, `box-shadow`, `@keyframes`, `border-radius`, `letter-spacing` values < 0.02em, `border-width: 2px`.

**Section 13 (Accessibility):** Verified by gates SC-06 (ARIA landmarks) and SC-07 (skip link).

**Section 14 (Responsive):** Verified by PA auditors H (responsive) at 768px viewport.

### Summary: Absorption Evidence Map

| Brief Section | Evidence Type | Current Coverage | Gap |
|---------------|-------------|-----------------|-----|
| 1. Identity | Gate (SC-02-05) | FULL | None |
| 2. Perception | Gate (SC-09,10,14) | FULL | None |
| 3. Richness | Build log (restraint) + PA-60,64,66 | PARTIAL | No density verification gate |
| 4. Multi-Coherence | Gate (SC-13) + CSS comments | GOOD | CSS comment count not gated |
| 5. Fractal Echo | Gate (DG-1) | GOOD | Table quality not verified |
| 6. Metaphor | PA-65,67 + conviction card | PARTIAL | No programmatic verification possible |
| 7. Transition Grammar | Build log (transition table) + SC-10 | PARTIAL | No boundary-type gate |
| 8. CSS Vocabulary | SC-08 (components) | WEAK | No vocabulary pattern gate |
| 9. Creative Authority | Build log (overrides) | PARTIAL | No override count gate |
| 10. Memory | Build log (midpoint observation) | GOOD | None |
| 11. Five Questions | Build log (question responses) | GOOD | None |
| 12. Restraint List | None currently | ABSENT | Need prohibited-technique scan |
| 13. Accessibility | SC-06,07 | GOOD | ARIA label quality not checked |
| 14. Responsive | PA auditors H | GOOD | None |

**3 GAPS to close:**
1. ADD gate: prohibited-technique scan (covers Section 12)
2. ADD gate: CSS boundary comment count (covers Section 4 absorption proof)
3. ADD gate: vocabulary pattern fingerprint (covers Section 8 -- check for 2-zone DNA, 3-tier borders, dark slab presence)

---

## 5. RECIPE VS CONVENTIONS ANALYSIS

### The Evidence

| Experiment | Format | Lines | PA-05 Score | Tier 5 |
|-----------|--------|-------|-------------|--------|
| Middle | Recipe (100 lines) | 100 | 4/4 (DESIGNED) | N/A |
| Flagship | Checklist (71 lines) | 71 | 1.5/4 | N/A |
| CD-006 | Conventions (~50 lines of soul + content) | ~50 | ~3.9/4 (39/40) | N/A |
| Remediation | Spec (1,025 lines) | 1,025 | 2.5/4 | N/A |

The Middle recipe was 100 lines and produced 4/4. CD-006's builder received essentially a conventions-style brief (design system description + content) at ~50 lines and produced 39/40. The Flagship got 71 lines of checklist and produced 1.5/4. The remediation spec was 1,025 lines and produced 2.5/4.

### The Current Brief's Format Balance

The DRAFT-09 brief is targeted at 55% conventions / 25% recipe / 20% checklist. The format analysis (Report 11) counted:

- 52 imperative verbs (recipe-like)
- 14 constraint verbs (checklist-like)
- 50+ declarative verbs (conventions-like)

This means the actual verb ratio is roughly 43% recipe / 12% checklist / 45% conventions -- closer to 50/50 recipe/conventions than the target 55/25/20.

### Should the Brief Be a Pure Recipe?

**No.** Here is why:

The Middle recipe's 100 lines worked because the Middle tier has a lower compositional ceiling. The recipe said "deploy 8-10 mechanisms from 4+ categories" and the builder did exactly that. For Middle (PA-05 4/4), compliance with a recipe IS quality.

Flagship 4/4 requires compositional decisions that a recipe cannot prescribe: where to place the climactic design moment, how much restraint to use, which metaphor fits, how to vary the dynamic range of transitions. These are judgment calls. A recipe that tries to prescribe them either (a) becomes a 500+ line specification (the Remediation problem: 1,025 lines -> 2.5/4) or (b) under-specifies them with generic "make it good" language (the Flagship checklist problem).

**The conventions format is correct for Flagship.** The evidence supports this: CD-006 received a conventions-style brief and produced the best result in the entire project history. The conventions brief establishes a mental model that the builder composes from.

### But: The Brief Should Be SEQUENCED Like a Recipe

The current brief's 15 sections are organized by DOMAIN (identity, perception, richness, multi-coherence...). This is a conventions organization. The builder reads all 15 domains, then starts building.

The Middle recipe was organized by TIME (Phase 1, Phase 2, Phase 3...). The builder read one phase, did that phase, read the next.

**Proposal: Restructure the brief into a CONVENTIONS-THEN-RECIPE hybrid.** Two distinct halves:

**HALF 1: THE WORLD (conventions, ~130 lines)**
Sections 1-9 as they are now. The builder reads these once to internalize the world model. These sections describe WHAT KortAI IS.

**HALF 2: THE PROCESS (recipe, ~50 lines)**
The current Process + Conviction Card + Five Questions sections, EXPANDED into a clear phase sequence:

```
PHASE A: Read content. Write conviction card. (~5 lines)
PHASE B: Write fractal echo table and transition plan. (~10 lines)
PHASE C: Build HTML skeleton. Self-check 1. (~10 lines)
PHASE C2: Build zone backgrounds. Self-check 2. (~5 lines)
PHASE C3: Build borders. Self-check 3. (~5 lines)
PHASE C4: Build typography. Self-check 4. (~5 lines)
PHASE D: Midpoint render. Scroll. Strengthen weakest section. (~5 lines)
PHASE E: Complete build. Answer 5 questions. Cascade table. (~10 lines)
```

This preserves the conventions world-description (the builder internalizes the model) while providing a sequential recipe for execution (the builder follows the steps). The conventions half answers "what world am I in?" The recipe half answers "what do I do next?"

### The 75-Line Cap: Is It Real?

The "75-line builder visibility cap" finding (from the Flagship analysis) likely overstates the problem. That finding was based on a Flagship builder that received a 963-line master prompt of which 75 lines were builder-relevant. The compression was not inherent to LLM cognition -- it was an artifact of burying 75 lines of builder guidance inside 888 lines of orchestrator guidance.

The conventions brief is DIFFERENT. It is 232 lines addressed entirely to the builder. There is no orchestrator guidance mixed in. The builder reads 232 lines of material all relevant to its task.

**Better estimate:** An Opus model can effectively absorb 150-200 lines of well-structured world-description when it is the only task-relevant material. The brief at 232 lines is at the upper bound of this range. Every line above 200 has diminishing absorption probability.

**The real risk is not that the builder "sees" only 75 lines.** It is that the builder INTERNALIZES the first 150 lines (Sections 1-8) as a working model, and the last 80 lines (Sections 9-14 + Process) fade into "yeah, I know the rest." This means Sections 9-14 must be the LEAST critical to absorption, or they must be reinforced by the build process itself.

Looking at the classification: Sections 9-14 include Creative Authority (nice-to-have), Compositional Memory (reinforced by process), Five Questions (reinforced by process), Restraint List (needs the prohibited-technique gate for backup), Accessibility (the HTML skeleton template IS load-bearing), and Responsive (3 breakpoints).

The Accessibility section (Section 13) is at high risk of absorption failure due to its position. The HTML skeleton template is 18 load-bearing lines near the end of a 232-line document. **Move the HTML skeleton template to the top of HALF 2 (the recipe section), as the FIRST thing the builder writes.** This converts it from absorption material to process material -- the builder does not need to remember the template, they follow the instruction to write it at Phase C step 1.

---

## 6. ENRICHMENTS

### To the Master Execution Prompt (Section 2)

**E-1: Reading order change.** Add to Section 2, "Agent #1 reads these sources IN ORDER":

```
READING ORDER FOR BUILDER (revise builder spawn prompt):
1. conventions-brief.md -- PRIMARY GUIDANCE. Read fully first.
2. [content-file-path] -- THE MATERIAL. Read through the world model.
3. mechanism-catalog.md -- VOCABULARY. Consult for technique selection.
4. components.css -- REFERENCE. Component library for spatial confidence.
5. prohibitions.md (BUILDER EXTRACT, ~40 lines) -- RECENCY. Soul constraints last.
tokens.css is OPTIONAL -- all values already in the brief.
```

**E-2: Brief Reflection requirement.** Add to the builder spawn prompt, between conviction card and first CSS:

```
After your conviction statement, write a BRIEF REFLECTION proving
you absorbed the conventions brief. Fill in from memory (do not
re-read the brief):
- 4 perception thresholds (bg delta, letter-spacing, stacked gap, channel shifts)
- 3-tier border budget (weights and meanings)
- 3 things from the restraint list you will NOT use
- 1 thing that surprised you in the brief
This takes 2 minutes and prevents 30 minutes of post-build remediation.
```

**E-3: Prohibited-technique gate.** Add to gate runner as SC-17:

```
SC-17: Prohibited Technique Scan
Scan output.html CSS for: linear-gradient, radial-gradient,
box-shadow (not none), @keyframes, border-radius > 0,
letter-spacing < 0.02em, border-width: 2px.
Any match: FAIL.
```

**E-4: Boundary comment gate.** Add to gate runner as SC-18:

```
SC-18: Boundary Comment Presence
Count CSS comments matching /Boundary Z\d/. Must equal number
of zone transitions. Each must name a direction (DEEPENING,
OPENING, FOCUSING, RESOLVING).
Zero comments: FAIL.
Count mismatch: WARNING.
```

**E-5: Vocabulary fingerprint gate.** Add to gate runner as SC-19:

```
SC-19: Vocabulary Pattern Presence
Check output.html for evidence of 3 vocabulary patterns:
1. 2-Zone DNA: at least 2 elements with both a .label/.meta zone
   AND a .body/.content zone (different font-size, different case)
2. 3-Tier Borders: all 3 weights (1px, 3px, 4px) present in CSS
3. Dark Slab: at least 1 element with bg #1A1A1A and color #FEF9F5
All 3 present: PASS. 2/3: WARNING. <2: FAIL.
```

### To the Conventions Brief

**E-6: Split into two halves.** Restructure the brief with a clear divider:

```
--- PART 1: THE WORLD (read once, internalize) ---
[Sections 1-9B as they are]

--- PART 2: THE PROCESS (follow step by step) ---
[Process, Conviction Card, Brief Reflection, Phases A-E, Five Questions, Deliverables]
```

**E-7: Move HTML skeleton to HALF 2.** Remove from Section 13, place as PHASE C Step 1:

```
PHASE C, Step 1: Write the HTML skeleton.
Use this template exactly:
[skeleton code here]
Self-check: skip link present? <main> present? font loading present?
```

**E-8: Builder-specific prohibitions extract.** Create a 40-line extract of prohibitions.md containing only the 8 absolute prohibitions + the 4 CSS-relevant conditional prohibitions. Route this extract (not the full 420-line file) to the builder.

### To SKILL.md

**E-9: Add Brief Reflection to builder deliverables.** _build-log.md required sections become:
1. Brief Reflection (thresholds from memory, border budget, restraint list, surprise)
2. Conviction statement
3. Fractal echo table
4. Transition plan
5. Override log
6. Midpoint observation
7. Restraint log (3+ absent mechanisms)
8. Five-question responses
9. Final self-assessment

**E-10: Add 3 new gates to gate runner.** SC-17 (prohibited technique scan), SC-18 (boundary comment presence), SC-19 (vocabulary fingerprint). Total gates: 24.

---

## SUMMARY

The conventions brief at 232 lines is at the upper bound of effective Opus absorption. It cannot be meaningfully shortened without removing load-bearing material (79% of lines are load-bearing). The solution is not compression but STRUCTURE:

1. **Split the brief into WORLD (internalization) and PROCESS (execution).** The builder reads the world once, then follows the process step-by-step.
2. **Reorder the 6-file manifest.** Brief first (primacy), prohibitions last (recency), content second (parsed through the world model).
3. **Add a Brief Reflection step.** 4 threshold values + border budget + restraint items, written from memory. 2 minutes of builder time. Proves absorption, prevents the 75-line selective-attention failure.
4. **Close 3 verification gaps.** Prohibited-technique scan, boundary comment gate, vocabulary fingerprint gate. These backstop the sections most likely to fade from absorption (Sections 8, 12, and multi-coherence comment discipline).
5. **Do not convert to a pure recipe.** The conventions format is correct for Flagship quality. But sequence the execution half like a recipe. Conventions for the world model; recipe for the build process.

The brief is not too long. It is too FLAT. Structure -- not compression -- is the fix.
