# Research Cross-Reference Audit: R1-R5 vs 7 New Vocabulary Files

**Date:** 2026-03-01 (v2 — fresh-eyes re-audit)
**Auditor:** Opus agent (zero prior context on these files)
**Scope:** Identify research findings MISSING from the 7 rewritten vocabulary files
**Method:** Read all 6 research files (R1-R5 + RESEARCH-SYNTHESIS.md) in full, then all 7 new vocabulary files in full, then systematically identified gaps with builder-impact prioritization.

---

## Summary

| Priority | Count | Description |
|----------|-------|-------------|
| BLOCKING | 2 | Missing content that would cause builders to produce wrong output |
| HIGH | 8 | Significant omissions that reduce builder effectiveness |
| MEDIUM | 11 | Useful context missing but unlikely to cause failures |
| LOW | 6 | Nice-to-have insights with minimal builder impact |

**Total: 27 actionable gaps identified.**

The largest gap is in **grammar.md** and **components.md** — the R5 combination theory (39 findings on component sequencing, compatibility, and behavioral properties) is almost entirely absent from the new files.

---

## BLOCKING Findings

### B-1: Component Velocity / Temperature / Weight Model ABSENT

**Source:** R5 Principles T2 (Velocity Mismatch), T3 (Semantic Dissonance), G3 (Visual Weight Balance) + RESEARCH-SYNTHESIS Principle 3 (Components as Characters)

**What research says:** Every component has three behavioral dimensions:

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Light |
| Essence Callout | FAST | Warm | Light |
| Challenge Callout | FAST | Warm | Light |
| Code Snippet | SLOW | Neutral | Heavy |
| File Tree | MEDIUM | Neutral | Medium |
| Decision Matrix | MEDIUM | Neutral | Medium |
| Core Abstraction | SLOW | Warm | Heavy |
| Task Component | FAST | Cold | Medium |
| Reasoning | SLOW | Neutral | Heavy |

**What the new files have:** grammar.md mentions "dense sections followed by sparse" and "maximum 2 callouts per viewport" but provides ZERO guidance on which components are dense/sparse, fast/slow, warm/cold. components.md lists components with "Purpose" and "Key Signal" columns but no behavioral properties.

**Builder impact:** Without this, a builder has NO way to know that placing Reasoning + Core Abstraction + Code Snippet consecutively creates reader fatigue (three SLOW components), or that Gotcha immediately after Essence creates temperature whiplash. The grammar rules say "alternate dense/sparse" but don't identify which components ARE dense. This is like giving a driver speed limits without a speedometer.

**Fix:** Add velocity/temperature/weight columns to components.md's tables, or add a behavioral properties section to grammar.md.

**Affected files:** components.md, grammar.md

---

### B-2: Component Compatibility Matrix ABSENT

**Source:** R5 Appendix (11x11 Quick Reference Matrix)

**What research says:** R5 provides a full compatibility matrix with three ratings:
- **Yes** = Excellent pairing (Code + Tip, Essence + Core Abstraction, Matrix + Reasoning)
- **OK** = Acceptable with neutral buffer between them
- **No** = Avoid consecutive placement (Gotcha + Gotcha, Essence + Essence, Code + Code, Gotcha + Challenge, FileTree + FileTree, Matrix + Matrix, Reasoning + Reasoning)

**What the new files have:** grammar.md has "callout stacking" as an anti-pattern but NO specific pairing guidance for non-callout components. There's no guidance telling builders that Decision Matrix + Decision Matrix is problematic, or that File Tree + Core Abstraction is an excellent pair.

**Builder impact:** The compatibility matrix is the single most actionable reference in R5 for builders making sequencing decisions. Without it, builders must derive compatibility from abstract rules — exactly the failure mode identified in the flagship retrospective ("recipe beats checklist").

**Fix:** Add at minimum the "No" pairings as explicit anti-patterns and the top 10 "Yes" pairings as recommended sequences to grammar.md or components.md.

**Affected files:** grammar.md or components.md

---

## HIGH Findings

### H-1: Six Density Dimensions COLLAPSED to Spatial Only

**Source:** R3 (entire thesis — 51 findings across 6 dimensions)

**What research says:** Density has 6 independent dimensions: Spatial (components per area), Temporal (information per scroll distance), Depth (progressive disclosure layers), Semantic (meaning per word), Cognitive (mental processing required), Interaction (clickable elements per viewport).

**What the new files have:** grammar.md's "Density" section only addresses spatial density ("Maximum 3-4 components per viewport-height"). The other 5 dimensions are absent. A section with 2 components (low spatial density) but each is a 50-line code block with dense jargon (high semantic + cognitive density) still reads as "dense" to the reader.

**Fix:** Add 3-4 sentences to grammar.md acknowledging density is multi-dimensional. At minimum mention that semantic density (jargon level) and cognitive density (decision points) independently affect reader experience beyond component count.

**Affected file:** grammar.md

---

### H-2: Named Density Rhythm Patterns ABSENT (PULSE/CRESCENDO/BOOKENDS/WAVE)

**Source:** R3 Section 1.2 (Temporal Density Insight 3) + RESEARCH-SYNTHESIS Principle 1

**What research says:** Four compositional patterns with specific use cases:
- **PULSE:** HIGH-LOW-HIGH-LOW cycles. Best for tutorials, learning journeys.
- **CRESCENDO:** Sparse-to-dense build. Best for onboarding, complexity reveals.
- **BOOKENDS:** Dense start/end, sparse middle. Best for Context-Action-Summary.
- **WAVE:** Irregular but rhythmic. Best for long-form documentation.

**What the new files have:** grammar.md describes INHALE/EXHALE (generic dense/sparse alternation) and "Maximum consecutive dense: 3" but no named patterns. A builder creating a tutorial defaults to INHALE/EXHALE when PULSE would be the correct choice; a builder creating an onboarding flow has no guidance to use CRESCENDO.

**Fix:** Add a 4-row table to grammar.md's Rhythm section: Pattern | Shape | Best For.

**Affected file:** grammar.md

---

### H-3: Combination Recipes ABSENT

**Source:** R5 Part 8 (6 named recipes)

**What research says:** Six named component sequences for common documentation patterns:
1. **Quick Reference:** Info → Code → Tip
2. **Deep Dive:** Info → Essence → Core Abstraction → Code → Gotcha → Task
3. **Decision Guide:** Info → Decision Matrix → Reasoning → Task
4. **Troubleshooting:** Gotcha → Decision Matrix → Code → Task → Tip
5. **Tutorial:** Info → Task → Code → Tip → Code → Gotcha → Challenge
6. **Architecture Overview:** File Tree → Core Abstraction → Decision Matrix → Tip

**What the new files have:** grammar.md has composition rules (nesting, rhythm, zones) but ZERO named recipes. The MEMORY.md explicitly identifies "recipe beats checklist" as a key finding from the flagship experiment — builders receiving recipes produce DESIGNED output, builders receiving only rules produce FLAT output.

**Fix:** Add top 3-4 recipes to grammar.md. These are component sequences, not CSS instructions.

**Affected file:** grammar.md

---

### H-4: Setup-Payoff Arc ABSENT

**Source:** R5 Principle S1 + RESEARCH-SYNTHESIS Top 10 Finding #8

**What research says:** Sections follow a narrative arc: Context (Info) → Map (File Tree / Decision Matrix) → Principle (Essence / Core Abstraction) → Demonstration (Code) → Action (Task / Challenge) → Hazards (Gotcha). Not all 6 required, but when present they should appear in THIS order.

**What the new files have:** grammar.md describes rhythm, zones, nesting, and density but has NO guidance on component ORDERING within a section. The most fundamental R5 sequencing pattern is entirely absent.

**Fix:** Add the setup-payoff arc to grammar.md as a named pattern or sequencing guideline.

**Affected file:** grammar.md

---

### H-5: Callout Positioning Doctrine ABSENT

**Source:** R1 Finding 3.1 (Callout Positioning) + Finding 3.3 (Code-Adjacent Pattern)

**What research says:** Temporal logic for callout placement:
- Callouts FOLLOW the content they reference, EXCEPT warnings/dangers which appear BEFORE
- Tip callouts appear AFTER code blocks (enhance understanding after comprehension)
- Warning/Gotcha callouts appear BEFORE code blocks (prevent mistakes before action)

**What the new files have:** grammar.md says "No callout nesting" and "Maximum 2 callouts per viewport" but NOTHING about callout positioning relative to code blocks.

**Fix:** Add 2-3 sentences on callout positioning to grammar.md.

**Affected file:** grammar.md

---

### H-6: Anti-Pattern List Severely Reduced (4 vs 7)

**Source:** R5 Part 7 (7 named anti-patterns)

**What research says:** Seven specific anti-patterns:
1. Callout Cacophony (3+ consecutive callouts)
2. Code Wall (consecutive code blocks without interpretation)
3. Decision Paralysis (matrix + multiple reasoning without resolution)
4. Orphaned Heavy Components (heavy component without decompression)
5. Temperature Whiplash (rapid warm/cold oscillation)
6. Missing Context Start (section starts with code, no orientation)
7. Anxiety Ending (section ends on Gotcha without resolution)

**What the new files have:** grammar.md lists only 4: callout stacking, uniform density, fighting the pattern, simultaneous axis patterns. Only #1 maps to R5. Code Wall, Decision Paralysis, Orphaned Heavy, Temperature Whiplash, Missing Context, and Anxiety Ending are all absent.

**Fix:** Add at minimum Code Wall, Missing Context Start, Anxiety Ending, and Temperature Whiplash to grammar.md's anti-patterns.

**Affected file:** grammar.md

---

### H-7: Whitespace Specific Guidance Missing

**Source:** R1 Findings 1.2, 1.3, 3.4 + R2 Finding 5.2 + RESEARCH-SYNTHESIS Principle 4

**What research says:**
- 92px+ hero margins
- Heading proximity rule: headings should be 1.5x closer to text they introduce than to preceding text
- "One major concept per viewport" (Apple HIG viewport principle)

**What the new files have:** vocabulary.md has the spacing system and 1:3 ratio. tokens.css scale goes to 80px. But the 92px hero margin, the 1.5x heading proximity rule, and the viewport principle are all absent.

**Fix:** Add the heading proximity rule to vocabulary.md's Spacing section. Add "one concept per viewport" to grammar.md's Density section. Consider extending token scale to 96px.

**Affected files:** vocabulary.md, grammar.md, tokens.css

---

### H-8: Reading Pattern Selection Guidance ABSENT (Z/F/Bento)

**Source:** R4 (192 findings, largest stream) + RESEARCH-SYNTHESIS Principle 2 (Layout as Choreography)

**What research says:** Match reading pattern to content type:
- Z-Pattern → hero sections, overview pages (single CTA, minimal content)
- F-Pattern → text-heavy documentation, API references, tutorials
- Bento Grid → feature catalogs, visual variety, dashboard-style layouts

**What the new files have:** mechanisms.md documents Bento Grid as a spatial mechanism. grammar.md mentions "simultaneous axis patterns" as anti-pattern. But there is ZERO guidance on WHEN to use which pattern. R4 is the largest research stream (192 findings) and its core insight — match pattern to content type — has no representation.

**Fix:** Add a brief pattern selection guide (4-5 lines) to grammar.md.

**Affected file:** grammar.md

---

## MEDIUM Findings

### M-1: Cinematic Wide/Close/Wide Pattern

**Source:** R4 Section 3.2 (Cinematic Patterns)
**Gap:** The context → detail → synthesis progression is absent from grammar.md and mechanisms.md. This passes both the Name Test and Transfer Test — it's a legitimate transferable mechanism.
**Target:** mechanisms.md Structure section or grammar.md

### M-2: Musical Rhythm Framework

**Source:** R4 Section 3.1 + R3 Section 6.3
**Gap:** Five types of visual rhythm (regular, alternating, progressive, flowing, random) and the verse/chorus/bridge analogy for page sections are absent. More intuitive than INHALE/EXHALE for some builders.
**Target:** grammar.md Rhythm section

### M-3: Density Contrast as Emphasis Technique

**Source:** R3 Insight 29
**Gap:** Density is RELATIVE — a medium element feels dense after sparse, sparse after dense. Use contrast for emphasis. Currently grammar.md treats density as absolute ("3-4 components per viewport").
**Target:** grammar.md Density section

### M-4: Density Debt Concept

**Source:** R3 Insight 30
**Gap:** Every dense element creates "debt" requiring recovery whitespace. Explains WHY sparse must follow dense — currently grammar.md states the rule but not the rationale.
**Target:** grammar.md Density section

### M-5: First Component Sets Tone

**Source:** R5 Principle S3
**Gap:** Info = helpful guide, Code = technical reference, Essence = philosophical treatise, Task = practical tutorial. Choose deliberately.
**Target:** grammar.md (new Sequencing section)

### M-6: Resolution Component Rule

**Source:** R5 Principle S4
**Gap:** Sections should end with resolution (Task, Challenge, Tip), NOT tension (Gotcha, open Reasoning, bare Code). Partially overlaps with Anxiety Ending anti-pattern (H-6) but is a positive rule.
**Target:** grammar.md

### M-7: Editorial Spread Pattern

**Source:** R5 Finding H4
**Gap:** Natural component pairs that feel like magazine spreads: File Tree + Core Abstraction, Decision Matrix + Reasoning, Code + Tip, Essence + Challenge. Absent from all files.
**Target:** components.md or grammar.md

### M-8: Monospace as Content-Type Signal

**Source:** R1 Finding 5.2
**Gap:** Typeface switching signals processing mode shift: mono = "this is literal," serif = "this is philosophical," sans = "this is functional." vocabulary.md describes the trinity but not the signaling function.
**Target:** vocabulary.md Typography section

### M-9: Zone Background Perceptual Delta Requirement

**Source:** Pipeline learnings (MEMORY.md documents >= 15 RGB max-channel delta)
**Gap:** vocabulary.md describes 4 zone backgrounds but doesn't mention the perceptual minimum. Shifts of 1-14 RGB are sub-perceptual and count as no shift.
**Target:** vocabulary.md Palette section

### M-10: Re-Sequencing as Nesting Alternative

**Source:** R5 Principle N3
**Gap:** grammar.md says "Maximum depth: 2 levels" and "No callout nesting" but doesn't tell builders what to DO when nesting feels necessary. R5 answer: re-sequence (put Tip before/after Code, not inside it).
**Target:** grammar.md Nesting section

### M-11: Section Divider + Task Checklist CSS Missing from components.css

**Source:** mechanisms.md lists both "Section Divider" and "Task Checklist" as mechanisms, but components.css has NO CSS implementation for either.
**Gap:** Two listed mechanisms with no corresponding CSS. A builder referencing mechanisms.md will expect these to exist in components.css.
**Target:** components.css

---

## LOW Findings

### L-1: Callout Scarcity Per-Page vs Per-Viewport Discrepancy
**Source:** R1 Finding 3.2 says "1-2 per page." grammar.md says "2 per viewport." These are different constraints — a long page could have 8+ callouts under grammar.md. The viewport rule is more practical; this is a minor inconsistency.

### L-2: Golden Ratio for Proportions
**Source:** R2, R4. Golden ratio (1:1.618) for content/sidebar and type scale. tokens.css type scale doesn't follow golden ratio. Low impact for single-column editorial layouts.

### L-3: Progressive Disclosure Mechanics
**Source:** R3 (Depth Density), R4 Section 4.3. Accordion/tabs/dropdown patterns. More relevant for interactive UIs than static editorial pages.

### L-4: Typography Carries 80% of Hierarchy
**Source:** R1 Finding 5.1. "Size → Weight → Color → Space" ordering as hierarchy tools. identity.md mentions typography's importance but not the 80% figure or the ordering.

### L-5: Semantic Color Count Ceiling
**Source:** R3 Insight 17. 7+ semantic colors is overwhelming. Current 5 accents are near the ceiling. Rationale documentation, not builder action.

### L-6: Component Moods/Voices Framework
**Source:** R5 Frameworks R2, R3. Each component has a "voice" ("Allow me to mention..." for Info, "Stop. This matters." for Gotcha). More relevant for content writing than CSS composition. Temperature model (B-1) captures the compositional dimension.

---

## What WAS Captured Well

The new files DO successfully represent these research insights:

1. **INHALE/EXHALE rhythm** (R3) — grammar.md Rhythm section
2. **Fractal self-similarity** (R3 Insight 23) — grammar.md at 4 scales
3. **Zone background differentiation** (R3 depth density) — tokens.css + vocabulary.md
4. **2-Zone DNA pattern** (R5 H1) — mechanisms.md, components.md, components.css
5. **Typography trinity** (R1 editorial, R2 typography-as-structure) — vocabulary.md + tokens.css
6. **Border-weight gradient** (multi-source) — mechanisms.md Mechanism #1
7. **Dense/Sparse alternation** (R3) — mechanisms.md Mechanism #5
8. **Bento Grid** (R2, R4) — mechanisms.md + components.css
9. **Nesting prohibition** (R5 N1-N2) — grammar.md
10. **Callout family DNA** (R5 H1) — components.css + components.md
11. **3-weight border system** (multi-source) — vocabulary.md + tokens.css
12. **Solid offset depth** (OD-001) — mechanisms.md + tokens.css
13. **Transition grammar** (SMOOTH/BRIDGE/BREATHING) — mechanisms.md
14. **Responsive breakpoints** (R2) — grammar.md + components.css
15. **Whitespace as design element** (R1, R2) — vocabulary.md Spacing section

---

## Recommended Actions (Prioritized for Builder Impact)

### Must Fix Before Builders Use These Files
1. **B-1:** Add velocity/temperature/weight behavioral properties to components.md
2. **B-2:** Add component compatibility guide (at minimum: No pairings + top Yes pairings) to grammar.md

### Should Fix (Significant Builder Improvement)
3. **H-3:** Add top 3-4 named combination recipes to grammar.md
4. **H-4:** Add setup-payoff arc (Context → Map → Principle → Demo → Action → Hazards) to grammar.md
5. **H-5:** Add callout positioning doctrine (Tip AFTER code, Gotcha BEFORE code) to grammar.md
6. **H-6:** Expand anti-patterns to include Code Wall, Missing Context Start, Anxiety Ending, Temperature Whiplash
7. **H-2:** Add named density rhythm patterns (PULSE/CRESCENDO/BOOKENDS/WAVE) to grammar.md
8. **H-1:** Add brief note on multi-dimensional density (semantic, cognitive, not just spatial)
9. **H-8:** Add reading pattern selection guide (Z/F/Bento by content type)
10. **H-7:** Add heading proximity rule + viewport principle + consider 96px token

### Nice to Have
11. **M-1 through M-11:** Cinematic zoom, musical rhythm, density contrast/debt, first-component/resolution rules, editorial spreads, monospace signaling, zone delta threshold, re-sequencing guidance, missing CSS implementations

---

*Audit complete. 27 actionable gaps identified: 2 BLOCKING, 8 HIGH, 11 MEDIUM, 6 LOW. The dominant gap is R5 combination theory — velocity, temperature, weight, compatibility, sequencing, and recipes are the most builder-actionable research and are almost entirely absent from the new files.*
