# Pipeline v2 Form Proposal: What IS It?

**Author:** form-definer (Opus 4.6)
**Date:** 2026-02-18
**Task:** Define what Pipeline v2 is as a concrete artifact

---

## THE ANSWER: Option D, with surgical modifications

Pipeline v2 is **a layered architecture of three distinct skills invoked in sequence**, with the critical modification that the BUILDING skill (derived from File 42) is NEW and SEPARATE from the existing TC content-analysis skill.

```
TC (content analysis, Phases 0-3.5)
    ↓ metaphor + tension + zone plan
File 42 RECIPE (building, Phases 0-8)
    ↓ finished HTML
PA (perceptual audit, 48 questions)
```

But this is NOT a new orchestrator skill. It is NOT edits to existing files alone. It is NOT File 42 replacing TC. Here is the precise form:

---

## WHY NOT THE OTHER OPTIONS

### A) A NEW orchestrator skill (`/build-page`) — REJECTED

An orchestrator would be a 4th layer that calls the other 3. This creates:
- A meta-to-output ratio problem (Gate 6 from anti-reproduction protocol)
- An additional prompt layer that compresses information (the 50:1 compression problem)
- A skill that does nothing itself — it just dispatches

The USER is the orchestrator. They invoke TC for content analysis, then invoke the builder, then invoke PA. Claude Code's conversation flow already provides orchestration. Adding a skill that calls other skills is a complexity ratchet with zero value.

### B) EDITS to existing files only — REJECTED (insufficient)

The codification map identifies 8 edits (224 lines) across 5 files. These edits are NECESSARY but NOT SUFFICIENT. They fix known failure modes (perception thresholds, stacking loophole, builder visibility, agent communication). But they do not address the structural problem: **TC SKILL.md tries to be both a content-analysis pipeline AND a building recipe, and does neither well.**

TC's Phase 4 (lines 866-1620, ~754 lines) is a grab-bag of mechanism selection, guardrails, coherence checks, translation grammar, pacing, rhythm, fractal verification, and token compliance. File 42's Phase 0-8 (1,746 lines) is a sequenced RECIPE for building. They overlap partially (both address mechanism deployment) but serve different functions:

- TC Phase 4 = "here are the tools and constraints for CHOOSING mechanisms"
- File 42 = "here is the step-by-step sequence for BUILDING a page"

Editing TC Phase 4 to include File 42's content would bloat SKILL.md from ~1,878 to ~3,000+ lines. The resulting file would be unreadable and violate the builder visibility gate (Gate 4: no builder should need to parse 3,000 lines to find their recipe).

### C) File 42 as a new skill REPLACING the building portion of TC — REJECTED (partial truth)

This is close but wrong in one critical way: TC's Phases 0-3.5 (content analysis through metaphor lock-in) are ONLY needed for Ceiling/Flagship tier. Middle tier skips Phases 1-3 entirely. File 42 already contains its own Phase 0 (content analysis and zone architecture) that works for ALL tiers. TC's Phase 0D already routes Middle tier to "skip Phases 1-3."

If File 42 REPLACED TC's building phases, TC would become a content-analysis-only tool invoked ONLY for Ceiling/Flagship, and File 42 would be the universal builder. This is functionally correct but creates a confusing invocation model: "Use TC sometimes, then always use File 42, but File 42 has its own Phase 0 that partially overlaps with TC's Phase 0."

### E) Something else entirely — THE ACTUAL ANSWER

---

## THE CONCRETE FORM

Pipeline v2 is **two skills + the 8 codification edits**:

### Artifact 1: Updated TC Skill (content analysis + metaphor derivation)

**Location:** `~/.claude/skills/tension-composition/SKILL.md`
**What changes:** Apply the 8 codification edits from the codification map. These fix known failure modes inside the existing skill. TC remains the content-analysis pipeline (Phases 0-3.5 for Ceiling/Flagship, Phase 0D routing for Middle/Floor).

**What TC is AFTER the edits:**
- Phase 0: Content assessment and tier classification (ALL tiers)
- Phase 0D: Tier routing (Floor → Track 1, Middle → skip to pattern selection, Ceiling/Flagship → full pipeline)
- Phases 1-3: Multi-axis questioning, tension derivation, metaphor collapse (Ceiling/Flagship only)
- Phase 3.5: Metaphor lock-in gate (Ceiling/Flagship only)
- Phase 4: Mechanism selection and mapping (ALL tiers that go through TC)
- Phase 5: Output specification (what the builder receives)

**What TC is NOT:** A building recipe. TC's output is a BUILD PLAN (metaphor, mechanism selections, zone structure, transition types). TC does NOT write CSS or HTML.

### Artifact 2: NEW Builder Skill (the operational recipe)

**Location:** `~/.claude/skills/page-builder/SKILL.md`
**Source:** File 42 (42-OPERATIONAL-RECIPE.md), adapted from 1,746-line draft to installable skill format
**What it is:** A 9-phase sequential RECIPE for building a single HTML page from a build plan.

**The 9 phases:**
- Phase 0: Content analysis and zone architecture (reads the build plan from TC, or does its own lightweight analysis if invoked directly for Middle-tier)
- Phase 1: HTML skeleton (semantic markup, accessibility, grid wrappers)
- Phase 2: CSS reset and foundation (container, resets, font loading)
- Phase 3: Zone differentiation (backgrounds, spacing, typography per zone)
- Phase 4: Typography cascade (heading hierarchy, body text, code)
- Phase 5: Component styling (callouts, tables, pullquotes, grids)
- Phase 6: Coherence and transitions (dividers, bridges, breathing zones)
- Phase 7: Accessibility (skip link, ARIA, focus styles, reduced motion)
- Phase 8: Final perception audit (self-check before handoff to PA)

**Critical properties of this skill:**
1. RECIPE format — every step starts with an action verb and a specific value
2. SELF-CONTAINED — all CSS values, HTML patterns, and perception thresholds embedded inline
3. CONTENT-AGNOSTIC — works for any tier (receives a build plan, produces HTML)
4. PERCEPTION-AWARE — minimum perceptual deltas embedded in every phase, not just Phase 8

**What the builder skill receives as input:**
- The content source (markdown, text, or structured data)
- A build plan from TC (or a minimal plan if invoked directly): tier, zone count, zone semantics, mechanism selections, transition types
- Full mechanism catalog (routed to builder per Gate 5)
- Tokens + prohibitions (always-load)

### Artifact 3: The 8 Codification Edits (applied to existing files)

From the codification map, applied to:
1. `~/.claude/skills/tension-composition/SKILL.md` — Changes 1, 6 (verify), 7 (verify)
2. `~/.claude/skills/perceptual-auditing/SKILL.md` — Change 2
3. `design-system/compositional-core/CLAUDE.md` — Changes 3, 8, 9, 10
4. `design-system/compositional-core/guidelines/semantic-rules.md` + `vocabulary/tokens.css` — Change 5
5. `ephemeral/flagship-experiment/spatial-gate-runner.js` — Change 4 (ephemeral, canonical thresholds in PA skill)

### Artifact 4: Updated CLAUDE.md routing (compositional-core)

The building protocol in `design-system/compositional-core/CLAUDE.md` gets updated Track 2 workflow:

```
Track 2 (CURRENT):
  Phase 0: Load vocabulary
  Phases 0-3: Run TC blind
  Phase 3.5: Lock metaphor
  Phase 4: Mechanism extraction
  Phase 5: Case study comparison
  Phase 6: Implementation        ← THIS is the weak spot (6 lines of instruction)
  Phase 7: Verification (PA)

Track 2 (PIPELINE V2):
  Phase 0: Load vocabulary
  Phases 0-3: Run TC blind       ← TC skill (content analysis)
  Phase 3.5: Lock metaphor       ← TC skill (gate)
  Phase 4: Mechanism selection    ← TC skill (build plan output)
  Phase 5: Case study comparison  ← TC skill (divergence check)
  Phase 6: BUILD                  ← Page-builder skill (9-phase recipe)
  Phase 7: Verification           ← PA skill (48 questions)
```

The change is that Phase 6 goes from "6 lines of vague instruction" to "invoke the page-builder skill with its 9-phase recipe." This is where the flagship failed — the builder got 6 lines. Now the builder gets a full skill.

---

## THE INVOCATION MODEL

### For Middle-tier pages (most common, ~40-50% of all pages):

```
User: "Build a page for [content]"
Agent: Invokes TC Phase 0 → classifies as Middle → selects density pattern
       → mechanism deployment (per-category minimums)
       → outputs build plan
Agent: Invokes page-builder skill with build plan
       → 9 phases → HTML output
Agent: Invokes PA skill
       → 48 questions → verdict
```

TC Phases 1-3 are SKIPPED (no metaphor derivation for Middle). The page-builder skill receives a lightweight build plan (tier, pattern, mechanism selections).

### For Ceiling/Flagship pages:

```
User: "Build a page for [content] — ceiling tier"
Agent: Invokes TC full pipeline (Phases 0-3.5)
       → metaphor derivation → lock-in
       → Phase 4 mechanism selection → Phase 5 divergence check
       → outputs rich build plan (metaphor + mechanisms + zone architecture)
Agent: Invokes page-builder skill with rich build plan
       → 9 phases → HTML output
Agent: Invokes PA skill (Mode 4 for Flagship: 9 auditors)
       → 48 questions → verdict
```

### For Floor-tier pages:

```
User: "Build a page for [content]"
Agent: Invokes TC Phase 0 → classifies as Floor → routes to Track 1
       Track 1 uses component assembly (no TC Phases 1-3, no page-builder skill)
       → component-based HTML output
Agent: Invokes PA skill (abbreviated)
       → soul check + guardrails → verdict
```

---

## WHAT THIS IS NOT

1. **NOT a new orchestrator.** The user/agent invokes skills in sequence. No `/build-page` meta-skill.
2. **NOT a replacement for TC.** TC remains the content-analysis tool. Its Phases 0-3.5 are unchanged.
3. **NOT just edits.** The page-builder skill is a genuinely NEW artifact (~1,000-1,200 lines, adapted from File 42).
4. **NOT a fourth layer in the ontology.** The 6-layer ontology (identity/vocabulary/grammar/components/case-studies/guidelines) is untouched. The page-builder skill CONSUMES the ontology; it doesn't extend it.
5. **NOT a process document.** It is a SKILL — invocable by `/page-builder` or by reading `~/.claude/skills/page-builder/SKILL.md`.

---

## WHY THIS FORM

### It addresses every diagnosed root cause:

| Root Cause | How This Form Addresses It |
|---|---|
| 7.9:1 guardrail-to-playbook ratio | Page-builder skill IS a playbook (recipe format, action verbs, specific values) |
| 75-line builder visibility cap | Builder reads the FULL page-builder skill (~1,000 lines), not a 75-line excerpt |
| Inverted quality routing | Mechanism catalog routed to builder skill, not just planner |
| Recipe vs checklist | Page-builder skill is a recipe by construction (File 42's DNA) |
| Zero perception terms | Perception thresholds embedded in every phase of page-builder skill |
| S-09 stacking loophole | Stacking arithmetic built into Phase 6 of page-builder skill |
| Agent communication gap | Communication protocol added to CLAUDE.md (Change 8) |
| "Sample 2-4" limitation | Already fixed via enrichment (per-category minimums in TC) |

### It respects the anti-reproduction protocol:

| Gate | Status |
|---|---|
| Gate 1 (Compression) | Every rule in page-builder skill has concrete value + provenance + violation example (File 42's DNA) |
| Gate 2 (Judgment) | All rules are binary (File 42 was designed this way) |
| Gate 3 (Guardrail ratio) | Page-builder skill is recipe-dominant (~0.3:1 guardrail-to-playbook, from File 42 measurement) |
| Gate 4 (Builder visibility) | Page-builder skill IS the builder's spec — self-contained by design |
| Gate 5 (Quality routing) | Mechanism catalog explicitly routed to builder in updated CLAUDE.md |
| Gate 6 (Meta ratio) | This proposal produces OUTPUT (a new skill file + 8 edits to permanent files) |
| Gate 7 (Recipe format) | Page-builder skill is recipe format throughout (File 42's core property) |

### It separates concerns cleanly:

- **TC** = WHAT to build (content analysis, metaphor, mechanism selection)
- **Page-builder** = HOW to build (9-phase sequential recipe)
- **PA** = DID IT WORK (48-question perceptual verification)

This is the "thinking/execution/verification" separation that the highest-leverage-change analysis recommended. Each skill is < 2,000 lines. Each serves one purpose. Each is independently testable.

---

## CONCRETE DELIVERABLES FOR CODIFICATION

1. **`~/.claude/skills/page-builder/SKILL.md`** — New file, ~1,000-1,200 lines, adapted from File 42. Remove the meta-commentary and evidence citations (those stay in File 42). Keep the recipe steps, CSS values, HTML templates, perception checks, and gate logic.

2. **8 edits to existing files** — As specified in the codification map. Apply in dependency order.

3. **Updated `design-system/compositional-core/CLAUDE.md`** — Track 2 workflow updated to reference page-builder skill at Phase 6.

4. **Updated `design-system/CLAUDE.md`** — Skills section updated to include page-builder alongside TC and PA.

**Estimated total new permanent output:** ~1,400-1,600 lines across 6 files.
**Estimated meta-to-output ratio after codification:** ~23,000 meta / ~1,500 output = ~15:1 (still above Gate 6's 10:1 target, but a massive improvement from infinity:1).

---

## OPEN QUESTIONS FOR THE TEAM

1. **Skill name:** `page-builder` vs `build-page` vs `operational-recipe` vs something else? The trigger phrase matters for discoverability.

2. **File 42 adaptation scope:** File 42 is 1,746 lines. How much meta-commentary to strip? The provenance citations satisfy Gate 1 but add ~30% bulk. Proposal: keep provenance in inline comments (1-line each), strip multi-paragraph evidence sections.

3. **Phase 0 overlap:** Both TC and page-builder have a Phase 0 that analyzes content. For Middle-tier (no metaphor), should the user invoke TC Phase 0 first, or can page-builder's Phase 0 standalone? Proposal: page-builder's Phase 0 is self-sufficient for Middle-tier. TC Phase 0 is only needed when metaphor derivation follows (Ceiling/Flagship).

4. **Multi-agent topology:** For Ceiling/Flagship, do we spawn separate agents for TC, page-builder, and PA? Or does one agent run all three sequentially? The memory findings suggest: one planner agent runs TC, one builder agent runs page-builder (Opus for Ceiling+), one or more auditor agents run PA. But for Middle-tier, a single agent running all three sequentially is sufficient.

---

**END OF PROPOSAL**

**Summary in one sentence:** Pipeline v2 is a NEW page-builder skill (adapted from File 42's 9-phase recipe) that sits between TC (content analysis) and PA (perceptual audit), plus 8 surgical edits to existing files that fix diagnosed failure modes.
