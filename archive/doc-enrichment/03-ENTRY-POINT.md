# KortAI Design System -- Entry Point

**Date:** 2026-02-15 | **Phase:** Post-D Research, Skill Enrichment In Progress | **Status:** Research complete (Phase D + richness/rigidity), skill modifications in progress

---

## WHERE WE ARE

Phase D validation is COMPLETE (CONDITIONAL PASS, 2026-02-15). Two follow-up investigations (richness + rigidity, 11 agents, 11 reports) have also completed (2026-02-15). The tier model (Floor/Middle/Ceiling/Flagship) is established but untested. Skill enrichment is currently IN PROGRESS (auditing documentation, fixing staleness, building execution plan). The next phase after skill enrichment is building experiments to validate the tier model with actual pages.

## Acronym Legend

| Acronym | Full Name | What It Means |
|---------|-----------|---------------|
| DD | Density Diversity | How varied the spatial density is across a page |
| OD | Operational Depth | How deeply mechanisms encode content structure |
| AD | Axis Diversity | How many independent design dimensions are used |
| CD | Combination Diversity | How mechanisms work together in multi-channel coherence |
| PA | Perceptual Audit | 48-question quality assessment protocol |
| CPL | Compositional Layout | The HTML+CSS output of the tension-composition pipeline |
| Phase D | Extraction Validation | Testing whether the 6-layer ontology enables new page building (COMPLETE — CONDITIONAL PASS) |
| Variant B | Weak Permission Config | Pipeline configuration that scored best: 18/19 compliance, 4/5 novelty |
| Track 1 | Component Assembly | Quick builds using pre-built components (Floor tier, no metaphor) |
| Track 2 | Full Pipeline | Metaphor-driven builds using 7-phase tension-composition (Ceiling/Flagship tier) |
| CRESCENDO | Density Pattern | Sparse intro → dense peak → sparse resolution |
| F-PATTERN | Density Pattern | Dense left column (navigation), sparse right (content) |
| BENTO | Density Pattern | Grid-based modular sections at varying densities |
| PULSE | Density Pattern | Rhythmic dense-sparse-dense alternation |

## WHAT WE'RE DOING

Building richness tiers on Variant B's foundation (weak permission configuration — scored 18/19 compliance, 4/5 novelty) to determine how much richness is achievable through the pipeline at each tier level. The single most important untested hypothesis: **does an exceptional Middle-tier page achieve the "place" feeling without metaphor derivation?** If yes, every page can reach "designed" quality in 70-100 minutes. If no, metaphor penetration is confirmed as necessary. One experiment answers more questions than another research team.

The methodology: **Wave 1 mods applied (2026-02-15), build Middle experiment, evaluate, THEN apply Wave 2 informed by results.** Wave 1 (M2/M3/M5/M8) focused on enabling constraints (fractal gate, container width, tier routing, framing). Wave 2 (M1/M6/M7) focuses on vocabulary expansion (per-category minimum, semantic justification, combinations). Sequencing decision: validate tier routing + fractal + container width BEFORE changing mechanism selection protocol. However, this means the skill STILL contains "sample 2-4 mechanisms" during the Middle experiment — testing what 11 agents already concluded. See 17-conversation-clarifications.md CLARIFICATION 2 for the sequencing rationale + tradeoffs.

## KEY CONTEXT (5 Essential Concepts)

1. **Richness = vocabulary fluency, not freedom.** Showcase pages were MORE rigid than the pipeline (78 vs ~20 constraints). Their richness came FROM having more "words" (mechanisms) to compose with, not from fewer rules. The 4:1 vocabulary-to-prohibition ratio at CD stage proves this.

2. **Vocabulary vs. prohibition (THE central open question).** 22 prohibitions define identity through refusal (border-radius: 0, no box-shadow). 18 mechanisms define capability through tools (border-weight gradient, solid offset depth, 2-zone DNA). The mechanism catalog is vocabulary to USE FLUENTLY -- not library to avoid. Anti-gravity protects metaphor divergence, not mechanism usage. **However: this distinction is theoretically resolved but NEVER practically tested.** The Name Test and Transfer Test prove mechanisms are transferable in principle. But a Middle-tier page deploying 8-10 mechanisms has never been built. The open question: does a page using many mechanisms with a NEW metaphor feel like grammar usage (encouraged, enables richness) or like copying what showcase pages did (discouraged by anti-gravity)? Variant B scored 4/5 novelty precisely because it DIDN'T heavily use the vocabulary (only 5/44 techniques). The Middle-tier experiment directly tests this -- it is the experiment that determines whether grammar/ is genuinely safe to use freely at scale. See `ephemeral/doc-enrichment/02-tier-methodology.md` Section 6 for the theoretical resolution and `ephemeral/continuity-docs/07-open-threads-and-gaps.md` OT-03 for the untested dimension.

**Name Test:** Remove the metaphor name from a mechanism implementation. Does the CSS still make structural sense? If YES → it's a mechanism (vocabulary). If NO → it's metaphor-dependent (template).
Example: `.stratum--established { border-left: 4px; padding: 40px }` → Remove 'stratum' → `{ border-left: 4px; padding: 40px }` still encodes 'heavy/sparse = important.' PASS.

**Transfer Test:** Take a mechanism and apply it with a DIFFERENT metaphor. Does it produce meaningful CSS? If YES → vocabulary. If NO → template.
Example: Border-weight gradient with botanical metaphor: `.root { border-left: 4px } .branch { border-left: 2px }`. Works → vocabulary.

3. **4-type constraint taxonomy.** Identity rigidity (ALWAYS enabling) + Procedural rigidity (sequences creativity) + Specification rigidity (mixed -- evaluate each) + Ambient rigidity (emergent overload). The "paradox" dissolves: only 4-5 of ~168 constraints genuinely limit.

4. **Content determines tier.** The Addition Test (binary test: does adding this content to the page improve the READER experience? YES=keep, NO=remove) classifies content: "Can existing components fulfill this WITHOUT transforming their meaning?" YES = Track 1 (Floor/Middle, no metaphor). NO = Track 2 (Ceiling/Flagship, full pipeline). Not all content benefits from maximum richness.

5. **Experiment-first methodology.** The meta-to-output ratio is 2.6:1 (infrastructure vs product). The user watches for over-researching and under-building. Building one page resolves more open questions than another four research reports. Always prefer building over analyzing.

## THE TIER MODEL

| Property | Floor | Middle | Ceiling | Flagship |
|----------|-------|--------|---------|----------|
| **Target %** | 10-20% of pages | 40-50% | 20-30% | 5-10% |
| **Mechanisms** | 5 of 18 | 8-10 of 18 | 12-15 of 18 | 16-18 of 18 |
| **CSS lines** | ~150-250 | ~350-500 | ~700-1,000 | ~1,000-1,500 |
| **Build time** | 30-45 min | 70-100 min | 150-220 min | 240-400 min |
| **Reproducibility** | 95%+ | 80-90% | 50-70% | 30-50% |
| **Quality band** | 14-17/20 | 16-18/20 | 17-19/20 | 18-20/20 |
| **Metaphor?** | No | No | Yes (full pipeline) | Yes (multi-pass audit) |
| **Content type** | API refs, changelogs | Tutorials, guides | Conceptual docs, deep explanations | Crown jewels |

**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count.

These numbers were BACKWARD-ENGINEERED from existing pages:
- Variant B (Phase D best, built under "sample 2-4"): deployed 7 mechanisms across ALL 5 categories (100% category coverage)
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories

The per-category minimum (M1) ensures BREADTH (all 5 property families), and the count emerges naturally from breadth.

**Key insight:** Floor-to-Middle has the HIGHEST ROI. ~45 extra minutes yields 3-4x richness. Middle is the recommended universal floor.

**For Middle-tier+ pages:** Read the FULL mechanism catalog (18 mechanisms). Identify AT LEAST ONE from each of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Justify each selection. Natural landing: 8-10 mechanisms for Middle tier.

**Historical note:** The original skill instruction said 'Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.' This was the single most limiting specification — identified by ALL 11 research agents as capping richness. Variant B deployed only 7 mechanisms across 2 categories when showcase pages deploy 12-18 across all 5. **As of 2026-02-15, this instruction is STILL IN THE SKILL** (M1 replacement pending Wave 2, after Middle experiment validates the per-category approach). This means the Middle experiment will test under "sample 2-4" constraint — confirming what research already concluded, but enabling skill-level prompt override to deploy 8-10 across 5 categories. See 17-conversation-clarifications.md CLARIFICATION 2 for why M1 wasn't in Wave 1.

**Category Name Evolution:**
Earlier documents (HANDOFF.md) use abstract category names: Spatial, Temporal, Material, Behavioral, Relational.
Current operational categories (from mechanism analysis): Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation.

Mapping: Spatial=Spatial, Temporal≈Depth/Emphasis, Material≈Component, Behavioral≈Structure/Nav, Relational≈Hierarchy.

USE the current operational names (Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav). These are grounded in actual mechanism assignments and are operationally correct.

## CURRENT GOALS

1. **Build one exceptional Middle-tier page** -- Full CRESCENDO density, zone backgrounds, grid layouts, dark header, NO metaphor. THE most important experiment. Build with CURRENT skill first.
2. **Evaluate and then apply skill modifications** -- Replace "sample 2-4 mechanisms" with per-category minimum; promote fractal to GATE; add container width as NON-NEGOTIABLE; add tier-based pipeline selection. AFTER the first experiment.
3. **Build same content at 3 tiers** (Middle/Ceiling/Flagship) -- First data point on diminishing returns curve
4. **Validate tier model** -- Do the CSS line counts, mechanism counts, and quality bands match predictions?
5. **Add Mode 2 perceptual audit** -- 14 questions at 2 viewports, mandatory for Ceiling+ pages

## FILE MAP

### Operational (for BUILDING)
- `design-system/compositional-core/CLAUDE.md` -- Phase-gated build protocol (493 lines)
- `design-system/compositional-core/identity/prohibitions.md` -- 22 prohibitions, MANDATORY first read (353 lines, focus lines 19-176 ABSOLUTE section)
- `design-system/compositional-core/vocabulary/tokens.css` -- 65 tokens in :root block (174 lines, focus lines 1-85 IMMUTABLE section)
- `design-system/compositional-core/grammar/mechanism-catalog.md` -- 18 transferable CSS mechanisms
- `design-system/compositional-core/case-studies/` -- 9 case studies (literature, NOT templates)
- `~/.claude/skills/tension-composition/SKILL.md` -- 7-phase metaphor pipeline (1,402 lines)
- `~/.claude/skills/perceptual-auditing/SKILL.md` -- 48 PA questions, 4 modes (736 lines)

**The always-load protocol:** EVERY agent MUST read prohibitions.md + tokens.css before ANY building (527 lines total).
- `identity/prohibitions.md` (353 lines, focus lines 19-176 ABSOLUTE section) — 22 non-negotiable identity constraints
- `vocabulary/tokens.css` (174 lines, focus lines 1-85 IMMUTABLE section) — 65 design tokens
These files define WHAT YOU CANNOT DO (prohibitions) and WHAT TOOLS YOU HAVE (tokens). Without these, builders violate identity constraints.

### Research (for UNDERSTANDING)
- `ephemeral/continuity-docs/HANDOFF.md` -- Comprehensive handoff (473 lines, THE deep-context document)
- `ephemeral/continuity-docs/02-worldview-and-goals.md` -- Worldview, tier model, goals, problems
- `ephemeral/richness-research/05-unified-synthesis.md` -- Richness investigation conclusions
- `ephemeral/rigidity-research/06-unified-synthesis.md` -- Rigidity investigation conclusions
- `ephemeral/rigidity-research/03-tier-specifications.md` -- Concrete tier definitions grounded in code
- `ephemeral/rigidity-research/02-modification-analysis.md` -- 4 proposed changes analyzed
- `ephemeral/continuity-docs/08-cross-cutting-synthesis.md` -- Intersections across all research

### Documentation Enrichment
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Tier building plan and rationale
- `ephemeral/continuity-docs/03-documentation-audit.md` -- Stale docs inventory with fix priorities
- `ephemeral/continuity-docs/04b-ingestion-architecture.md` -- How to structure docs for new instances

### Showcase Pages
- `design-system/validated-explorations/` -- 19 HTML fortress files (DD/OD/AD/CD). Zero deletions.

## READING ORDER

### Intent: BUILD a page (20 min)
1. This file (orientation)
2. `compositional-core/CLAUDE.md` (protocol)
3. `compositional-core/identity/prohibitions.md` (mandatory)
4. `compositional-core/vocabulary/tokens.css` (mandatory)
5. `compositional-core/grammar/mechanism-catalog.md` (vocabulary)

### Intent: UNDERSTAND the system (40 min)
1. This file (orientation)
2. `ephemeral/continuity-docs/HANDOFF.md` (deep context)
3. `ephemeral/continuity-docs/02-worldview-and-goals.md` (worldview)
4. `ephemeral/doc-enrichment/02-tier-methodology.md` (tier plan)

### Intent: RESEARCH a specific question (60+ min)
1. This file (orientation)
2. `ephemeral/continuity-docs/HANDOFF.md` (deep context)
3. `ephemeral/rigidity-research/06-unified-synthesis.md` (rigidity settled position)
4. `ephemeral/richness-research/05-unified-synthesis.md` (richness settled position)
5. Individual reports as needed for specific questions

## WHAT NOT TO DO

1. **Do NOT re-execute Phase D.** It is COMPLETE (CONDITIONAL PASS, 2026-02-15). Results: `ephemeral/phase-d-execution/` (47 files). Documentation staleness has been FIXED (2026-02-15).

2. **Do NOT skip the always-load protocol.** EVERY agent MUST read `prohibitions.md` + `tokens.css` before ANY work. Track 1's instant fail in Phase D was caused by skipping this. 527 lines mandatory overhead.

3. **Do NOT use "sample 2-4 mechanisms."** Identified by ALL 11 research agents as the single most limiting specification. **The skill STILL contains this instruction as of 2026-02-15** (M1 pending Wave 2). When building Middle experiment, OVERRIDE at the builder-prompt level: deploy 8-10 mechanisms across all 5 categories via per-category minimum. M1 will formalize this in the skill after experiment validates the approach.

4. **Do NOT treat case studies as templates.** Case studies are LITERATURE showing the language in use. Anti-gravity mechanism R3 explicitly warns against copying. Use `grammar/mechanism-catalog.md` for transferable techniques.

5. **Do NOT assume the user wants more research.** Meta-to-output ratio is 2.6:1. One experiment resolves more than another research team. If uncertain, ask.

## IMMEDIATE NEXT STEPS

1. **Read `ephemeral/doc-enrichment/02-tier-methodology.md`** for the concrete tier building plan
2. **Ask the user** what they want to do next -- do NOT assume. Current state: Wave 1 skill mods COMPLETE. Options: build Middle-tier experiment (recommended next), apply remaining Wave 2 mods (after experiment), continue research, or something else.
3. If building Middle experiment: follow the always-load protocol, use tier model, OVERRIDE "sample 2-4" at builder-prompt level (deploy 8-10 across 5 categories), measure against 4 success criteria (see 13-master-agenda.md Phase 2).
4. If applying Wave 2 mods: see `ephemeral/session-insights/08-skill-enrichment-plan.md` M1/M6/M7 sections for exact specs. Do NOT apply blindly — evaluate Middle experiment results first.
5. If researching: see `ephemeral/continuity-docs/HANDOFF.md` Section 11 for open questions

---

*This entry point synthesizes: HANDOFF.md (comprehensive handoff), 02-worldview-and-goals.md (worldview), 04-instance-continuity-guide.md (implicit context), 04b-ingestion-architecture.md (documentation structure), 08-cross-cutting-synthesis.md (intersections). Date: 2026-02-15.*
