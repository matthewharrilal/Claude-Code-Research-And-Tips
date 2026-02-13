# Edge Case Analysis: Tension-Composition Pipeline

**Agent:** Edge Case Explorer
**Date:** 2026-02-12
**Method:** Adversarial stress-testing against diverse real content from extractions/orchestration, extractions/philosophy, and extractions/tooling
**Pipeline version:** SKILL.md as of session start

---

## Summary of Findings

| # | Edge Case | Verdict | Severity |
|---|-----------|---------|----------|
| 1 | Structureless content (tip lists, FAQs) | DEGRADES | MEDIUM |
| 2 | Already-visual content (code, diagrams, tables) | BREAKS | HIGH |
| 3 | Emotionally flat content (reference docs) | DEGRADES | MEDIUM |
| 4 | Equal-richness axes (tied tension) | DEGRADES | LOW |
| 5 | Zero-tension content (perfect alignment) | BREAKS | HIGH |
| 6 | Maximum-tension content (total opposition) | VALID EDGE | LOW |
| 7 | Scale problems (very short / very long) | BREAKS | HIGH |
| 8 | Multi-metaphor content (section-level variation) | BREAKS | HIGH |
| 9 | Determinism (same input, different runs) | VALID EDGE | LOW |
| 10 | Cultural assumptions in metaphors | DEGRADES | MEDIUM |
| 11 | Content that IS the design system | BREAKS | CRITICAL |
| 12 | Hybrid content (narrative + reference + code) | DEGRADES | MEDIUM |

**BREAKS: 5 | DEGRADES: 5 | VALID EDGE: 2 | OUT OF SCOPE: 0**

---

## Edge Case 1: Structureless Content

### Test Content
**File:** `extractions/orchestration/013-ralph-11-tips-guide-mattpocockuk.md`
**Nature:** 11 numbered tips, each with 1-3 bullet points. Flat list structure. No narrative arc, no argument, no progression. Each tip is independently useful.

### Pipeline Behavior (Predicted)

**Phase 1 (Multi-Axis Questioning):**
- FEEL: LOW YIELD. Reader doesn't need to feel anything specific — they need discrete, actionable information.
- UNDERSTAND: MEDIUM. Reader needs to understand each tip independently. No causal chain between tips.
- DO: HIGH. Reader needs to implement tips in their own workflow.
- BECOME: LOW. No transformation narrative — reader is already a practitioner looking for refinements.

**Phase 2 (Tension Derivation):**
- Side A demands: scannable, flat, equal-weight items, random-access navigation.
- Side B provides: layered hierarchy, progressive depth, editorial gravity.
- Tension: Flatness vs. hierarchy — but this is COSMETIC, not GENUINE. The design system can render a flat list perfectly well with its existing border-left accents and spacing scale.

**Phase 3 (Metaphor Collapse):**
The pipeline will force a metaphor search on a cosmetic tension. The constrained associative search will produce metaphors like "toolbox," "menu," "catalog" — all of which are DECORATIVE, not structural. They don't add meaning; they add ornamentation.

### Verdict: DEGRADES

The pipeline doesn't crash, but it wastes effort forcing metaphor onto content that doesn't need one. The existing skill acknowledges this in Known Challenges #4: "The pipeline may produce 'no metaphor needed' — and that's a valid output." But the pipeline as currently specified has NO explicit off-ramp. There's no step that says "if all tensions are COSMETIC, skip Phase 3 and go directly to Phase 4 with standard component selection."

### Recommended Fix
Add an explicit exit ramp between Phase 2 and Phase 3:

```
IF all tensions rated COSMETIC:
  SKIP Phase 3 (Metaphor Collapse)
  Phase 4 proceeds with "direct component mapping" —
  use standard design system components without metaphorical framing
  Output A still documents WHY no metaphor was needed
```

---

## Edge Case 2: Already-Visual Content

### Test Content
**File:** `extractions/tooling/035-swarms-framework.md`
**Nature:** 1,377 lines. The content is PRIMARILY code blocks, architecture diagrams (ASCII art), configuration tables, and topology comparison matrices. The structure IS the content. The reader doesn't need a metaphor — they need the code to be readable and the diagrams to be clear.

### Pipeline Behavior (Predicted)

**Phase 1:** The axes produce genuine needs, but they're dominated by UNDERSTAND and DO. The reader needs to understand topology patterns and do implementation. FEEL and BECOME are noise.

**Phase 2:** The tension derivation hits a fundamental problem: the content's "Side A demands" include code blocks, ASCII diagrams, and comparison tables — which are ALREADY visual artifacts. Side A's structural demands are "preserve my existing visual structure." This creates a PARADOXICAL tension: the content wants to keep its own presentation, but the pipeline is designed to TRANSFORM presentation.

**Phase 3:** Any metaphor that would reorganize the code blocks and diagrams DESTROYS the content. A "geological strata" metaphor applied to Python code examples is worse than useless — it actively harms comprehension.

### Verdict: BREAKS

The pipeline assumes content is raw text/prose that needs visual structure derived from tension. When the content already HAS visual structure (code, diagrams, tables), the pipeline's core assumption is violated. The pipeline has no way to say "this content's visual structure is intrinsic, not derived."

### Recommended Fix
Add a **Content Type Classification** step BEFORE Phase 1:

```
STEP 0: Content Type Assessment
- What percentage of the content is already-visual? (code blocks, diagrams, tables, images)
  - >60% already-visual → PRESENTATION-INTRINSIC path
    - Skip metaphor derivation for visual portions
    - Apply design system styling (fonts, colors, borders) WITHOUT restructuring
    - Only derive metaphor for PROSE portions that frame the visual content
  - 30-60% mixed → HYBRID path (see Edge Case 12)
  - <30% prose-dominant → STANDARD pipeline path
```

---

## Edge Case 3: Emotionally Flat Content

### Test Content
**File:** `extractions/tooling/006-code-simplifier-plugin-bcherny.md`
**Nature:** Tool documentation. Installation instructions, configuration options, CLI commands. Emotionally neutral. The reader doesn't need to feel anything — they need to install and configure a tool.

### Pipeline Behavior (Predicted)

**Phase 1:**
- FEEL: LOW YIELD. No emotional register. "What does the reader need to FEEL?" Answer: confident that the instructions are correct. That's not really an emotion — it's a trust signal.
- UNDERSTAND: MEDIUM. How the tool works, what it does/doesn't do.
- DO: HIGH. Install, configure, invoke, integrate.
- BECOME: LOW YIELD. The reader becomes "a user of code-simplifier." That's not a transformation.

**Phase 2:** With FEEL as LOW YIELD, only UNDERSTAND and DO produce tension candidates. These are pragmatic axes — their tension against the design system is minimal. The content wants clarity and scannability; the design system provides clarity and hierarchy. Minimal opposition.

**Phase 3:** The metaphor search operates on thin tension. Results will be generic: "recipe," "checklist," "control panel." These add nothing that standard documentation components wouldn't already provide.

### Verdict: DEGRADES

Similar to Edge Case 1, but for a different reason. In Edge Case 1, structure is flat. Here, structure exists (installation > usage > configuration > troubleshooting) but emotional payload is zero. The pipeline still technically runs, but the metaphor step produces low-value output.

### Recommended Fix
The COSMETIC tension exit ramp from Edge Case 1 covers this. Additionally, the Phase 1 output should include a richness assessment that feeds into the Phase 2 decision:

```
If FEEL = LOW YIELD AND BECOME = LOW YIELD:
  Flag as "pragmatic content"
  Weight DO and UNDERSTAND axes double in tension selection
  Accept that metaphor may be DECORATIVE rather than STRUCTURAL
  Consider "no metaphor" as optimal outcome
```

---

## Edge Case 4: Equal-Richness Axes (Tied Tension)

### Test Content
**File:** `extractions/philosophy/002-planning-execution-separation-codex.md`
**Nature:** Conceptual + practical. Equal parts "understand the mental model" (UNDERSTAND), "feel the importance of separation" (FEEL), "implement in your workflow" (DO), and "become an orchestrator, not a coder" (BECOME). All four axes are genuinely rich.

### Pipeline Behavior (Predicted)

**Phase 2:** All four axes produce GENUINE tensions with comparable richness:
- FEEL tension: Safety/trust vs. sharp authority (GENUINE)
- UNDERSTAND tension: Two-phase mental model vs. flat system hierarchy (GENUINE)
- DO tension: Copy-paste workflow integration vs. editorial presentation (GENUINE)
- BECOME tension: Identity transformation vs. static design (GENUINE)

**Step: "Selecting the Richest Tension"** — The skill says to select the one with "MOST genuine opposition," "RICHEST structural overlap," and "WIDEST metaphor space." But if all four score similarly on these criteria, the skill provides NO tiebreaker. The practitioner must make an arbitrary choice.

### Verdict: DEGRADES

The pipeline doesn't break — any of the four tensions could produce a valid metaphor. But the lack of a tiebreaker means two practitioners could take the same content and produce four different compositions. This is arguably a feature (creative variation) or a bug (inconsistency), depending on your stance on determinism (see Edge Case 9).

### Recommended Fix
Add a tiebreaker hierarchy:

```
When tensions are equally rich:
1. Prefer the axis whose structural properties have the MOST shared DNA with Side B
   (more shared structure = more constrained metaphor search = more design-system-native result)
2. If still tied: Prefer UNDERSTAND > FEEL > BECOME > DO
   (Understanding-driven compositions tend to be more structurally interesting than action-driven ones)
3. If STILL tied: Document all viable tensions and let the practitioner choose
```

---

## Edge Case 5: Zero-Tension Content

### Test Content
**File:** `extractions/philosophy/001-md-files-superpower-gregisenberg.md`
**Nature:** Short (158 lines). Content about markdown files as structured knowledge. The content ALREADY embodies the design system's values: structured, hierarchical, precise, authoritative. The content wants sharp, flat, organized presentation — exactly what the design system provides.

### Pipeline Behavior (Predicted)

**Phase 2:** Side A demands structure, hierarchy, precision, authority. Side B provides structure, hierarchy, precision, authority. There is NO genuine opposition. Every tension is COSMETIC — easily resolved by simply applying the design system's defaults.

**Phase 3:** The metaphor search has nothing to bridge. Both sides agree. The "constrained associative search" would ask: "What is naturally angular, flat, layered, precise AND conveys authority and structure?" Answer: the design system itself. The metaphor IS the system. This is circular.

### Verdict: BREAKS

The pipeline requires tension to function. When content and system are perfectly aligned, the pipeline's core mechanism (tension -> metaphor -> composition) has no input energy. The pipeline would either:
1. Force a cosmetic tension (dishonest)
2. Produce a tautological metaphor ("the design system is like... the design system")
3. Hang at Phase 3 with no valid candidates

The skill's Known Challenges #4 mentions "no metaphor needed" as valid output, but the pipeline has no explicit path for this. There's no step that evaluates total tension and decides to bypass.

### Recommended Fix
Add a tension threshold gate between Phase 2 and Phase 3:

```
TOTAL TENSION = sum of all axis tensions rated GENUINE
IF TOTAL TENSION = 0:
  OUTPUT: "Content-system alignment detected. No compositional tension exists.
  Recommended approach: Apply design system defaults directly.
  The content's needs are fully served by standard component patterns."
  SKIP Phases 3-4
  Phase 5 Output B: Standard design-system rendering without metaphorical framing
```

This is NOT a failure of the pipeline — it's a success signal. The pipeline has determined that the content is native to the system. That's valuable information.

---

## Edge Case 6: Maximum-Tension Content

### Test Content
**Hypothetical:** Content about gentle, flowing meditation practices — soft curves, gradient colors, organic shapes, pastel palette, whispery typography. MAXIMUM opposition to the KortAI design system (sharp edges, flat, angular, monochrome + red, heavy borders).

### Pipeline Behavior (Predicted)

**Phase 2:** Every axis produces GENUINE, HIGH tension. Side A wants everything Side B refuses. This is the pipeline's ideal operating condition — maximum tension = maximum creative energy.

**Phase 3:** The constrained associative search is heavily constrained (Side B eliminates almost all organic metaphors). But this EXTREME constraint is actually productive — it forces creative leaps. The few surviving candidates are likely to be novel and interesting:
- "Pressed flower" — organic content flattened between angular pages. The preservation implies care; the flatness implies the system's honesty about medium.
- "Ice formation" — crystalline (angular) structures that emerge from fluid water. The transition from fluid to sharp IS the metaphor.

**Phase 4:** The metaphor-to-mechanism translation is rich because every mechanism must work against the content's native preference. Each CSS property becomes a deliberate choice with narrative weight.

### Verdict: VALID EDGE

Maximum tension is exactly where the pipeline shines. The more genuine the opposition, the more creative and interesting the metaphor. The pipeline handles this naturally.

### Note
This validates the pipeline's core thesis: composition lives in tension. No fix needed — but document this as a "sweet spot" example in the skill.

---

## Edge Case 7: Scale Problems

### Short Content
**Test:** A single paragraph — "Use markdown files to give Claude context. Upload them as skills. They compound over time."

**Pipeline Behavior:** Phase 1 runs but produces sparse output. 3-5 needs per axis is impossible — there aren't enough concepts in the content to generate that many genuine needs. The axis exploration produces 1 need per axis at best, and most axes are LOW YIELD.

Phase 2 has thin tension (1 need vs. system constraints = narrow opposition). Phase 3 metaphor search operates on minimal structural overlap. The result is likely over-designed — a metaphor-driven composition for content that could be a single styled paragraph.

### Long Content
**Test:** `extractions/tooling/035-swarms-framework.md` at 1,377 lines.

**Pipeline Behavior:** Phase 1 is overwhelmed. The content has DOZENS of distinct sections, each with different reader needs. The "ask questions across multiple axes" step produces an unwieldy output — potentially 20+ needs per axis across all sections. Phase 2 tension derivation becomes combinatorial. Phase 3 metaphor search tries to find ONE metaphor that bridges ALL tensions simultaneously, which is unrealistic for content this diverse.

### Verdict: BREAKS (both ends)

**Short content:** Pipeline over-designs. The overhead of 5 phases for a paragraph is absurd.
**Long content:** Pipeline under-scopes. A single metaphor can't serve 1,377 lines of diverse content.

### Recommended Fix
Add a **Scope Assessment** step before Phase 1:

```
STEP 0B: Scope Assessment (after Content Type Assessment)

Content length categories:
- MICRO (<100 words): Skip pipeline. Apply design system defaults with appropriate component.
  "This content is too small for compositional derivation. Apply directly."
- SHORT (100-500 words): Run pipeline with reduced axis exploration (2 needs max per axis).
  Single metaphor is appropriate for content this focused.
- STANDARD (500-3000 words): Full pipeline as specified.
- LONG (3000-10000 words): Segment content into logical sections FIRST.
  Run pipeline independently per section. Then apply a UNIFYING pass to ensure
  sections feel like parts of a whole (shared palette, consistent typography scale,
  connected spacing rhythm).
- MASSIVE (10000+ words): Pipeline is not appropriate. This is a book/app, not a page.
  Consider: multi-page architecture, navigation systems, progressive disclosure.
  Pipeline can run on individual pages but not the whole.
```

---

## Edge Case 8: Multi-Metaphor Content

### Test Content
**File:** `extractions/orchestration/013-ralph-11-tips-guide-mattpocockuk.md`
**Relevant section structure:**
1. Introduction/Mental Model (narrative, conceptual — needs a FEEL/BECOME metaphor)
2. 11 Tips (flat list — needs no metaphor, see Edge Case 1)
3. Code Examples (already-visual — needs preservation, see Edge Case 2)
4. Evolution Timeline (progression — needs an UNDERSTAND metaphor)
5. Troubleshooting Tables (reference — needs a DO metaphor)

Each section has genuinely different reader needs. A "geological strata" metaphor might serve the evolution timeline but would be bizarre for the tips list. A "toolbox" metaphor serves the tips but undermines the narrative introduction.

### Pipeline Behavior (Predicted)

The pipeline selects ONE richest tension and derives ONE metaphor. That metaphor is then applied uniformly across all sections. This creates a mismatch: the metaphor serves some sections brilliantly and others poorly.

Phase 4 (Compositional Layout Generation) translates the single metaphor into mechanisms. Those mechanisms are applied uniformly. But section 2 (tips list) doesn't WANT the graduated depth that a strata metaphor implies. And section 3 (code examples) doesn't want ANY metaphorical restructuring.

### Verdict: BREAKS

The pipeline's single-metaphor assumption fails for structurally heterogeneous content. This is distinct from Edge Case 7 (scale) — even a 500-word document could contain two sections with incompatible needs.

### Recommended Fix
Add a **Section Analysis** substep in Phase 1:

```
Phase 1, Step 0: Section Identification
- Identify natural content sections (by heading, topic shift, or mode change)
- Classify each section: NARRATIVE / REFERENCE / CODE / DATA / MIXED
- For each section, run axis questioning independently
- In Phase 2, derive tension per-section AND whole-document
- In Phase 3, allow EITHER:
  a) Single metaphor if all sections share structural DNA (preferred for coherence)
  b) Primary metaphor + section-level variations if sections are structurally incompatible
     The primary metaphor provides the "through-line" (palette, typography, spacing rhythm)
     Section variations adjust density, border weight, background shade

CRITICAL: Multi-metaphor is NOT multiple unrelated metaphors. It's one metaphor
with section-appropriate expressions. Like a symphony with movements —
same key signature, different tempos.
```

---

## Edge Case 9: Determinism

### The Question
If the same content is run through the pipeline twice, does it produce the same metaphor?

### Analysis

The pipeline has ONE irreducibly creative step: Phase 3.3, "Constrained Associative Search." This step asks "What in the real world is naturally [properties]?" — which is an open-ended creative question. Different practitioners (or the same practitioner on different days) could generate different candidate sets.

Everything ELSE in the pipeline is deterministic:
- Phase 1 axis questioning: Given the same content, the same needs should emerge
- Phase 2 tension derivation: Given the same needs and the same system constraints, the same tensions should emerge
- Phase 3.4 scoring: Given the same candidates and tensions, the same winner should emerge
- Phase 4 translation: Given the same metaphor, the same mechanisms should emerge

So: the pipeline is deterministic EXCEPT at the associative search step. The question is whether this non-determinism is acceptable.

### Verdict: VALID EDGE

Non-determinism at the creative step is a FEATURE, not a bug. The pipeline is a creative tool, not a compiler. Multiple valid metaphors can serve the same content. The pipeline's scoring step (Phase 3.4) ensures that whichever candidates are generated, the BEST one is selected according to consistent criteria.

However, this should be DOCUMENTED as a known property, not left implicit.

### Recommended Fix
Add a note in the skill:

```
## On Determinism

The pipeline is deterministic in all phases EXCEPT the constrained associative
search (Phase 3.3). Multiple valid metaphors may exist for the same content.
This is by design — the pipeline is a creative scaffold, not a deterministic
compiler.

If determinism is required (e.g., for team consistency), document the selected
metaphor in a COMPOSITION BRIEF and reference it for future iterations of the
same content. The metaphor becomes a design decision, not a pipeline output.
```

---

## Edge Case 10: Cultural Assumptions in Metaphors

### The Problem

The constrained associative search (Phase 3.3) asks practitioners to draw from "the real world." But "the real world" is culturally situated. Example metaphors from the skill:

- "Geological strata" — assumes Western geological framing. A reader from a culture with different geological narratives might parse this differently.
- "Pressed flower" — assumes a specific preservation practice.
- "Crystal formation" — culturally neutral (physics), but the emotional associations vary.

For content that serves a global audience, culturally loaded metaphors create invisible barriers. A Japanese reader might naturally think of "origami folds" where a Western reader thinks of "geological layers" — both are valid, but they produce different compositions.

### Pipeline Behavior (Predicted)

Phase 3.3 will produce candidates drawn from the practitioner's cultural context. There is no check for cultural neutrality. This isn't a pipeline flaw per se — it's inherent to human-driven creative processes. But for a pipeline designed to be teachable and transferable, cultural bias in metaphor selection limits its universality.

### Verdict: DEGRADES

The pipeline works correctly in any cultural context — it just produces culturally situated results. This is acceptable for a single-practitioner tool but problematic for teams with diverse cultural backgrounds.

### Recommended Fix
Add a cultural awareness note to Phase 3.3:

```
### Cultural Consideration

Metaphors carry cultural weight. When selecting candidates:
- Prefer metaphors grounded in PHYSICS over CULTURE (crystal formation > origami)
- Prefer metaphors grounded in UNIVERSAL EXPERIENCE over REGIONAL (growth > harvest festival)
- If the content serves a specific cultural audience, leverage culturally resonant metaphors
- If the content serves a global audience, test metaphor accessibility:
  "Would this metaphor make sense to someone who has never encountered [cultural practice]?"
```

---

## Edge Case 11: Content That IS the Design System

### Test Content
**Hypothetical:** Documentation of the KortAI design system itself. The content describes the constraints (border-radius: 0, box-shadow: none, etc.) that constitute Side B of every tension derivation.

### Pipeline Behavior (Predicted)

Phase 2 creates a PARADOX: Side A (what the content needs) IS Side B (what the system provides). The content's subject matter is the system's constraints. Running tension derivation produces: "The content about sharp edges wants to be displayed with... sharp edges." There is no opposition. This is a more extreme version of Edge Case 5 (zero tension), because here the content doesn't merely ALIGN with the system — it IS the system.

Worse: any metaphor derived would need to DESCRIBE the system THROUGH a lens other than the system itself. A "geological strata" metaphor for documentation about border-radius values would be actively misleading.

### Verdict: BREAKS (CRITICAL)

This is the pipeline's most fundamental failure mode. The pipeline assumes content and system are SEPARATE entities that can be placed in tension. When they're identical, the pipeline has no operating principle.

### Recommended Fix
This is covered by the Content Type Assessment (Edge Case 2) and Zero Tension gate (Edge Case 5), but should be called out explicitly:

```
SELF-REFERENTIAL CONTENT CHECK:
If the content DESCRIBES the design system itself:
  ABORT pipeline.
  Output: "Self-referential content detected. The pipeline cannot derive tension
  between content and system when the content IS the system.
  Apply design system defaults directly — the content will naturally demonstrate
  its own subject matter through its presentation."
```

---

## Edge Case 12: Hybrid Content (Narrative + Reference + Code)

### Test Content
**File:** `extractions/tooling/013-commands-collection.md`
**Nature:** 813 lines. Mix of:
- Narrative sections explaining value proposition (prose, ~20%)
- Command catalogs in table format (data/reference, ~40%)
- Code examples showing usage (code, ~25%)
- Integration patterns with other systems (hybrid prose+code, ~15%)

### Pipeline Behavior (Predicted)

The pipeline treats this as one document and runs Phase 1 across all of it. But the narrative sections produce high FEEL/BECOME yield while the tables produce high DO yield and the code produces high UNDERSTAND yield. The axes conflict not because of content-vs-system tension, but because different PARTS of the content pull in different directions.

Phase 2 selects the "richest" tension, which is likely from the narrative sections (they have the most emotional opposition to the angular system). The resulting metaphor is then applied to the ENTIRE document, including the command tables — which don't benefit from metaphorical framing. The 42-tool catalog doesn't need a "geological strata" metaphor. It needs a clean, scannable table.

### Verdict: DEGRADES

This is a less severe version of Edge Case 8 (multi-metaphor). The pipeline doesn't break — it produces a composition — but the metaphor serves the narrative sections well and the reference sections poorly. The command catalog gets over-designed; the code examples get under-served.

### Recommended Fix
Covered by the Section Analysis substep proposed in Edge Case 8. Additionally:

```
For HYBRID content:
- Identify the DOMINANT mode (narrative, reference, or code)
- If narrative-dominant: Full pipeline, with reference/code sections receiving
  "lighter" metaphorical treatment (design system defaults + shared palette)
- If reference-dominant: Consider Edge Case 1 (structureless content) path.
  Metaphor may be unnecessary; direct component mapping may be optimal.
- If code-dominant: Consider Edge Case 2 (already-visual) path.
```

---

## Synthesis: Pipeline Architecture Recommendations

Based on all 12 edge cases, the pipeline needs THREE additions to its current 5-phase structure:

### Addition 1: Phase 0 — Content Assessment (before Phase 1)

```
Phase 0: Content Assessment
├── Step 0A: Content Type Classification
│   ├── Prose-dominant (<30% code/tables/diagrams) → STANDARD path
│   ├── Mixed (30-60%) → HYBRID path
│   ├── Visual-dominant (>60%) → PRESENTATION-INTRINSIC path
│   └── Self-referential (content IS the system) → ABORT
│
├── Step 0B: Scope Assessment
│   ├── MICRO (<100 words) → Skip pipeline, apply defaults
│   ├── SHORT (100-500 words) → Reduced pipeline
│   ├── STANDARD (500-3000 words) → Full pipeline
│   ├── LONG (3000-10000 words) → Segmented pipeline
│   └── MASSIVE (10000+) → Multi-page architecture
│
└── Step 0C: Section Identification
    ├── Identify natural sections by heading/topic/mode
    ├── Classify each: NARRATIVE / REFERENCE / CODE / DATA
    └── Flag sections with incompatible structural needs
```

### Addition 2: Tension Threshold Gate (between Phase 2 and Phase 3)

```
After Phase 2, evaluate total tension:
- GENUINE tension count = 0 → Zero-tension path (skip Phases 3-4, apply defaults)
- All tensions COSMETIC → Cosmetic path (skip Phase 3, direct component mapping)
- At least 1 GENUINE tension → Proceed to Phase 3
```

### Addition 3: Section-Aware Composition (in Phase 4)

```
Phase 4 enhancement:
- If content has multiple incompatible sections (from Phase 0C):
  - Primary metaphor provides the through-line (palette, spacing rhythm, typography)
  - Section-level variations adjust density, border weight, background shade
  - CODE sections: Preserve structure, apply styling only
  - DATA sections: Use standard table/list components
  - NARRATIVE sections: Full metaphorical treatment
```

### Updated Pipeline Architecture

```
CONTENT → ASSESSMENT → MULTI-AXIS QUESTIONING → TENSION DERIVATION → [GATE] → METAPHOR COLLAPSE → COMPOSITIONAL LAYOUT → OUTPUT
  (input)  (Phase 0)       (Phase 1)               (Phase 2)        (new)       (Phase 3)            (Phase 4)         (Phase 5)
                                                                       │
                                                                       ├── Zero tension → Skip to Phase 4 (defaults)
                                                                       ├── All cosmetic → Skip to Phase 4 (components)
                                                                       └── Genuine tension → Proceed to Phase 3
```

---

## Content-Tested Examples

### Example A: Tips List (Edge Case 1)
**Content:** Ralph 11 Tips (`013-ralph-11-tips-guide-mattpocockuk.md`)
**Expected pipeline path:** Phase 0 classifies as MIXED (prose intro + flat tips + code examples). Phase 0B: STANDARD length. Phase 0C: identifies 5 sections with incompatible needs. Phase 2: most tensions are COSMETIC for the tips section, GENUINE for the intro narrative. Gate: proceed with metaphor for intro, direct mapping for tips/code.
**Result quality:** Better than forcing one metaphor across all 11 tips.

### Example B: API Documentation (Edge Case 3)
**Content:** Code-simplifier plugin (`006-code-simplifier-plugin-bcherny.md`)
**Expected pipeline path:** Phase 0 classifies as MIXED. Phase 1: FEEL=LOW, DO=HIGH. Phase 2: tensions are mostly COSMETIC. Gate: cosmetic path, skip metaphor. Phase 4: direct component mapping (installation block, usage examples, configuration table, troubleshooting accordion).
**Result quality:** Faster pipeline execution, no wasted metaphor search.

### Example C: Enterprise Framework (Edge Case 7 + 2)
**Content:** Swarms Framework (`035-swarms-framework.md`)
**Expected pipeline path:** Phase 0 classifies as VISUAL-DOMINANT (>60% code and diagrams). Phase 0B: LONG (1,377 lines). Phase 0C: identifies 10+ sections. Phase 0 routes to PRESENTATION-INTRINSIC path. Metaphor applies only to prose framing; code blocks and architecture diagrams are preserved and styled.
**Result quality:** Dramatically better than trying to derive a single metaphor for 1,377 lines of mostly code.

### Example D: Philosophy (Edge Case 6)
**Content:** Planning vs Execution Separation (`002-planning-execution-separation-codex.md`)
**Expected pipeline path:** Phase 0 classifies as PROSE-DOMINANT. Phase 0B: STANDARD. Phase 1: all axes rich. Phase 2: GENUINE tensions on multiple axes. Gate: proceed. Phase 3: rich metaphor space (two-phase architecture suggests metaphors of transition, threshold, metamorphosis). Phase 4: full compositional treatment.
**Result quality:** This is the pipeline's sweet spot. No changes needed.

---

## Open Questions for Team Discussion

1. **Should "no metaphor needed" be a first-class output?** Currently it's mentioned as a Known Challenge but has no pipeline path. I recommend YES — it should have a dedicated output format in Phase 5.

2. **Is the pipeline a tool or a methodology?** If it's a tool (deterministic, automated), non-determinism at Phase 3.3 is a bug. If it's a methodology (creative scaffold for practitioners), non-determinism is a feature. The skill should declare which.

3. **What's the minimum viable tension?** The pipeline assumes tension exists. Edge Cases 1, 3, and 5 show that many real content types produce minimal tension. Should the pipeline have a "tension thermometer" that rates total tension on a scale, rather than a binary genuine/cosmetic assessment?

4. **Multi-metaphor coherence:** If section-level variation is allowed (Edge Case 8 fix), how do you ensure the result feels like ONE page, not a collage? The "symphony with movements" framing is a start, but needs concrete CSS coherence rules.

5. **Pipeline cost:** Phase 0 adds overhead. For content that clearly needs the full pipeline, Phase 0 is wasted time. Consider: Phase 0 should be a quick heuristic (word count, code block ratio, heading structure) — not a deep analysis. Under 30 seconds.
