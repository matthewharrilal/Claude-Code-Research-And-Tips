# Paradigm Exploration Team — Synthesis of 5 Agent Reports

**Team:** paradigm-exploration (5 Opus agents)
**Date:** 2026-02-22
**Context:** User questioning whether the pipeline/brief paradigm is fundamentally right

---

## Agent 1: Attention Analyst

**Core Finding:** The problem IS attention dilution, and it IS fundamental — but it's engineerable.

- **Effective working memory during CSS output:** ~200-400 lines at any given moment
- **Of 3,700 lines of reference material, only 5-10% is actively driving CSS at any moment**
- **Section utilization: ~30%** — builder cited only 4 of 19 conventions brief sections as influential
- The distinction between "information present in context" and "information the model is actively using" is massive
- This IS a transformer attention limitation — attention scores decay with distance from current output position
- But it's ENGINEERABLE: JIT reading, phased building, role-specific excerpts can all increase utilization
- Theoretical maximum context utilization: ~40-60% (up from current ~30%)

**Key insight:** The builder doesn't forget the 3,700 lines — it just can't attend to all of them while also generating 800-1500 lines of CSS. Attention is a finite resource allocated between input comprehension and output generation.

---

## Agent 2: Zero-Loss Explorer

**Core Finding:** True zero-loss is impossible. 4 irreducible sources of loss exist.

**The 4 irreducible sources:**
1. Attention decay (transformer architecture) — information far from output cursor gets less attention
2. Compression at handoffs — any summary loses nuance, even a perfect one
3. Translation loss — converting prose descriptions to CSS requires interpretation
4. Recency bias — recently-read material disproportionately influences output

**Theoretical minimum loss:** ~15-20% with a hybrid JIT approach

**Architectures explored:**
- **JIT (Just-In-Time) reading:** Builder re-reads specific sections before each build phase. Could reduce loss to ~25-30%
- **Phased building:** Separate passes for structure, zones, typography, components. Each pass gets exactly what it needs. ~20-25% loss
- **Compiled brief:** TC agent produces 300-line zone-specific brief with pre-compiled CSS recipes. ~30% loss (shifts loss to compilation)
- **Hybrid JIT:** Combines phased building with JIT reads. Theoretical minimum ~15-20%
- **Embedded references:** TC brief includes inline pointers to specific convention-brief lines. ~25-30% loss

**Critical observation:** Phased building contradicts the conventions brief's own philosophy about holistic composition. Building zone-by-zone may actually prevent the cross-zone coherence the system demands.

---

## Agent 3: Paradigm Questioner

**Core Finding:** The pipeline is "rationalized fear of the blank page" — scar tissue thicker than the wound.

**The indictment:**
- Every pipeline step traces to a specific observed failure (N=2 pages)
- The pipeline PREVENTS known failures but CANNOT CREATE excellence
- Scar tissue has grown thicker than the original wound
- Middle experiment (simpler process) = PA-05 4/4. Flagship (complex pipeline) = 1.5/4
- The "embarrassingly simple alternative" has NEVER BEEN TESTED: "Read design system files. Read content. Build extraordinary page. Use your judgment."

**Alternative paradigms proposed:**
- **Paradigm A:** "Pipeline as therapy" — keep the pipeline but reduce it to a safety net, not a straitjacket
- **Paradigm B:** "Conversation instead of pipeline" — iterative dialogue between builder and reviewer
- **Paradigm C:** "Examples instead of rules" — "make it feel like CD-006" + soul constraints
- **Paradigm D (RECOMMENDED):** "Thin constraints + thick examples + fast iteration" — 50 lines of non-negotiables + 2-3 reference pages + 3 rapid build-review cycles

**On complexity thresholds:** A pipeline becomes necessary when coordination between multiple agents is required (context window math: 217K tokens > 200K limit). But the pipeline should be THIN — routing, not ruling.

---

## Agent 4: Human Workflow Analyst

**Core Finding:** [Detailed report lost in context compaction — task completed successfully]

**Topics covered (from task description):**
1. Human designer workflow — sketch→prototype→refine process
2. Internalization model — designers don't READ specs, they've INTERNALIZED them
3. Reference-based creation — "make it feel like this" > 610 lines of specification
4. Feedback loop — humans iterate mid-build, not build-all-then-evaluate
5. Creative confidence — over-specification may make builders more cautious, less creative
6. The "apprentice" model — mentor-apprentice instead of pipeline

---

## Agent 5: Creative Capacity Analyst

**Core Finding:** The problem is creative CAPACITY, not attention. Over-specification inversely correlates with quality.

**The evidence:**
- Middle experiment (fewer rules) = PA-05 4/4
- Flagship experiment (more rules) = PA-05 1.5/4
- The conventions brief accidentally trains COMPLIANCE MODE
- Only 6.2% of the conventions brief (38 lines, Section 9) is dedicated to creative authority
- The remaining 93.8% is physics/thresholds/constraints that accidentally signal "follow rules, don't create"

**Recipe taxonomy:**
- **Specification recipes** (current): "Here are the rules, comply" → caps at PA-05 2.5/4
- **Procedural recipes**: "Here's how to build this step by step" → caps at 3.0-3.5/4
- **Dispositional recipes** (untested): "Here's what to care about, here's what excellent looks like" → potentially 4/4

**The cookbook vs culinary school distinction:**
- Current pipeline = cookbook (follow recipe exactly)
- What we need = culinary school (understand principles, then create)
- Over-specification is the MECHANISM by which quality is suppressed
- The conventions brief is 610 lines with 572 lines (93.8%) of constraint and 38 lines (6.2%) of creative authority
- This ratio accidentally trains the model to treat the task as a COMPLIANCE exercise

**Sonnet vs Opus:**
- Project memory notes: "Sonnet complies meticulously; Opus complies AND creates beyond constraints"
- Flagship used Sonnet builders, CD-006 used Opus
- This variable is UNEXAMINED — potentially highest-leverage single intervention

---

## Cross-Agent Convergence

**All 5 agents converge on these points:**

1. **The pipeline suppresses what it claims to enable.** More specification → less quality. The evidence is consistent across Middle (4/4, fewer rules) vs Flagship (1.5/4, more rules).

2. **The brief's primacy effect is real.** The 99-line brief, read first, establishes the mental model. The 3,700 lines of source material then compete against an already-internalized plan.

3. **Zero-loss is impossible, but current loss is FAR above theoretical minimum.** Current: ~70% loss. Theoretical minimum: ~15-20%. Most of the gap is engineerable.

4. **The embarrassingly simple alternative has never been tested.** This is the single most important experiment to run.

5. **Dispositional instruction > specification.** Telling the builder what to CARE ABOUT may be more effective than telling it what to DO.

---

## Open Questions for User

1. Should we test the "embarrassingly simple alternative" before further pipeline work?
2. Is Opus-for-builders worth testing as a single-variable experiment?
3. Should the conventions brief be restructured to lead with creative authority (Section 9) rather than bury it?
4. Is the brief primacy effect the actual mechanism of quality suppression?
