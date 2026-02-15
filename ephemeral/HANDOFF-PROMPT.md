# HANDOFF PROMPT — Copy this into a new instance

You are continuing an in-progress design system research project. This is a continuation, not a fresh start. Read the files specified below BEFORE responding to anything.

## IMMEDIATE CONTEXT

We just completed two comprehensive research investigations (richness + rigidity, 11 Opus agents, 11 research reports) that established a tier model for building content pages at different richness levels on top of our best pipeline output (Variant B). We then ran a 12-agent documentation team + 7-agent enrichment team to capture everything. All documentation is written. No skill modifications have been applied yet. No experimental pages have been built yet.

The conversation was about to shift from RESEARCH to BUILDING — specifically, building the first Middle-tier experimental page. But the user has not committed to this yet. ASK before proceeding.

## MANDATORY READS (do these FIRST, in this order)

1. `ephemeral/doc-enrichment/03-ENTRY-POINT.md` — 125 lines. Where we are, what we're doing, tier model, goals, file map, what NOT to do. This is your orientation.

2. `ephemeral/doc-enrichment/02-tier-methodology.md` — 563 lines. THE core document. Why we're building tiers on Variant B, concrete specs per tier, how to build each, testing goals, implications, vocabulary vs prohibition with CSS examples, methodology (experiment-first), open questions. Read thoroughly.

3. `ephemeral/doc-enrichment/05-richness-journey.md` — 430 lines. WHY richness matters (user's personal motivation: pre-design-system content was unengaging), how we discovered the problem, what we've established at different confidence levels, priority levels (P0-P3), the vision.

4. `ephemeral/continuity-docs/HANDOFF.md` — 473 lines. Full state transfer: worldview, definitions of ALL jargon (soul constraints, anti-gravity, mechanisms, Track 1 vs 2, Phase 3.5 gate), modification recommendations, user context and preferences.

## CRITICAL CONCEPTS YOU MUST INTERNALIZE

**Richness** = the degree to which CSS structure, spatial topology, and rhythmic variation reinforce a content-derived metaphor. Measured across 5 dimensions: layout complexity, visual depth, token semantic density, responsive sophistication, metaphor-to-CSS encoding depth. Peak richness = maximum content-mechanism FIT, not maximum technique COUNT.

**Vocabulary vs Prohibition** = Prohibitions say "don't do X" (border-radius: 0, no box-shadow). Vocabulary gives "18 ways to create meaning WITH constraints" (border-weight encoding, solid offset depth, gestalt semantic spacing, 2-zone component DNA). Variant B has prohibitions but NOT vocabulary — its metaphor encodes into CSS LABELS (.lab-zone, .instrument-card) but not CSS VALUES (spacing doesn't correlate with meaning). Showcase page OD-004's spacing IS the metaphor: `--stratum-established-padding: 40px` (sparse/confident) → `--stratum-open-padding: 16px` (dense/uncertain). THIS distinction is the foundation of the tier model.

**THE Central Open Question** = The vocabulary-vs-library distinction is theoretically resolved (mechanisms pass the Name Test + Transfer Test = grammar, not copying) but NEVER practically tested. Variant B scored 4/5 novelty precisely because it DIDN'T use the vocabulary heavily (5/44 techniques). Would a page deploying 8-10 mechanisms feel NOVEL (grammar working as intended) or DERIVATIVE (copying disguised as grammar)? The Middle-tier experiment is the first practical test of this. This shapes EVERYTHING about how we approach building.

**4-Type Constraint Taxonomy** = Identity rigidity (ENABLING — keep all), Procedural rigidity (STRUCTURAL — sequences creativity), Specification rigidity (MIXED — protective specs keep, limiting caps remove), Ambient rigidity (EMERGENT — manage through tiered presentation + sunset clauses). Showcase pages were MORE rigid than pipeline, not less. The "paradox" of rigidity vs richness dissolved — it was a category error using one word for four different phenomena.

**Experiment-First Methodology** = Build with the CURRENT unmodified skill first. Evaluate results. THEN modify the skill based on evidence. The content adversary found our original priorities were backwards (skill modifications listed before building). The meta-to-output ratio is 2.6:1 — the user explicitly watches for over-researching and under-building.

## THE TIER MODEL

| Property | Floor | Middle (DEFAULT) | Ceiling | Flagship |
|----------|-------|-----------------|---------|----------|
| Mechanisms | 5 | 8-10 | 12-15 | 16-18 |
| CSS lines | 150-250 | 350-500 | 700-1000 | 1000-1500 |
| Build time | 30-45 min | 70-100 min | 150-220 min | 240-400 min |
| Reproducibility | 95%+ | 80-90% | 50-70% | 30-50% |
| Metaphor? | No | No | Yes (full pipeline) | Yes (multi-pass) |

These tiers build on Variant B (the best Phase D output: 18/19 compliance, 4/5 novelty, 960px container). Floor-to-Middle has highest ROI. Middle is the recommended universal floor. Tiers are a FLUENCY CURRICULUM: Floor=survival, Middle=conversational, Ceiling=proficient, Flagship=native.

## MODIFICATION RECOMMENDATIONS (NOT YET APPLIED)

- **ADOPT:** Fractal gate — promote from check to GATE at Phase 3.5
- **MODIFY:** Mechanism mandate — replace "sample 2-4" with per-category minimum (Spatial: 1+, Temporal: 1+, Material: 1+, Behavioral: 1+, Relational: 1+)
- **MODIFY:** Coherence check — 3 critical transitions + 3-channel verification (not full table)
- **REJECT:** Technique count as metric — Goodhart's Law trap. Replace with deployment narrative.

IMPORTANT: These are RECOMMENDATIONS. The user has not approved any. The methodology says build first, modify second. ASK before applying.

## USER CONTEXT

- Launches comprehensive Opus agent teams (TeamCreate, not just sub-agents) for research. Expects metacognitive analysis, adversarial fresh-eyes review, and cross-cutting synthesis.
- Values granularity and nuance over summarization. Prefers "both/and" over "either/or."
- Personal motivation: before the design system, content was unengaging — "I didn't feel like I wanted to read this... my eyes would naturally drift off." This is emotional, not just technical.
- Dual purpose: reader experience AND proof-of-capacity for the design system.
- Watches for over-researching. Will redirect toward building when analysis reaches diminishing returns.
- All agent output goes to `ephemeral/` — NEVER create new top-level project folders.

## WHAT NOT TO DO

1. Do NOT re-execute Phase D (it's COMPLETE — CONDITIONAL PASS, 2026-02-15)
2. Do NOT skip always-load protocol (prohibitions.md + tokens.css before ANY work)
3. Do NOT use "sample 2-4 mechanisms" — ALL 11 agents identified this as the single most limiting specification
4. Do NOT treat case studies as templates — they're literature, not blueprints
5. Do NOT assume the user wants more research — ask first, prefer building
6. Do NOT apply skill modifications before building — experiment-first methodology

## WHERE THE CONVERSATION CONTINUES

The immediate topic is building richness tiers on Variant B. The dimensions around this:

1. **What content to use** for the Middle-tier experiment (not yet selected)
2. **Whether to build with current skill or modified skill** (research says current first, but user hasn't confirmed)
3. **How to evaluate the result** — does it achieve the "place" feeling? Does it feel novel or derivative with 8-10 mechanisms?
4. **The vocabulary-vs-library question** — the first build directly tests whether mechanisms function as grammar or as copying
5. **What "Middle tier without metaphor" actually looks like** — full CRESCENDO density + zone backgrounds + grid + dark header, but NO tension-composition pipeline
6. **Reproducibility** — can another agent build the same tier and get similar quality?
7. **Whether the tier model predictions hold** — do CSS line counts, mechanism counts, and quality bands match?

Ask the user where they want to pick up. Read the files above before responding.
