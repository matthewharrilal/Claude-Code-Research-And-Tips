# Codification Map vs. Architecture Diagram — Cross-Reference Checklist

**Date:** 2026-02-19
**Agent:** Codification Map Analyst (Task #18)
**Source A:** `ephemeral/pipeline-analysis/_meta-cognitive/codification-map.md` (701 lines, 10 changes)
**Source B:** `ephemeral/pipeline-analysis/_meta-cognitive/PV2-ARCHITECTURE-DIAGRAM.html` (1,143 lines)
**ALWAYS FLAGSHIP Directive:** User wants EVERY build treated as Flagship tier. No Middle-default, no "Middle is sufficient."

---

## Executive Summary

Of 10 codification changes, **6 are reflected** in the architecture diagram, **2 are already applied** (verification only), and **2 are absent or only partially reflected**. Under ALWAYS FLAGSHIP, **5 of the 10 changes need modification** — primarily to remove tier-conditional language ("Middle: Sonnet is sufficient," "Middle: 2+ messages") and replace with unconditional Flagship specifications.

The architecture diagram is MORE CURRENT than the codification map in several places: it resolves threshold contradictions the codification map leaves open (e.g., stacked gap 108px vs 192px, 12 gates vs 10 gates). However, the codification map contains EXACT edit specs that the diagram does not — the two documents serve complementary purposes.

---

## Per-Change Analysis

### Change 1: Recipe Format, Not Checklist

**What it does:** Inserts a recipe header with explicit 7-step sequence into tension-composition SKILL.md Phase 4, reframing from "verify constraints" to "follow these steps."

**Reflected in diagram?** YES — STRONGLY

The architecture diagram explicitly encodes the recipe-over-checklist principle:
- Section 2 (User Journey), Step 5: "Builder executes 9-phase recipe" with sequential phases 0-8
- Section 3 (Skill Propagation): `operational-recipe.md` described as "~650 lines, 9-Phase Build Recipe" with "Sequential phases with exact CSS blocks, HTML templates, perception thresholds inline, [CONTENT DECISION] markers"
- Section 10: "The recipe is the floor — TC's metaphor-driven composition is the ceiling"

**Edit specs still valid?** YES — target file (`tension-composition/SKILL.md`), target location (Phase 4 opening, lines 866-877), and before/after content are concrete and actionable. Line numbers may have drifted since enrichment execution but the surrounding context anchors are stable.

**ALWAYS FLAGSHIP modification needed?** MINOR. The current proposed content includes tier-specific deployment levels (Floor/Middle/Ceiling/Flagship). Under ALWAYS FLAGSHIP, the Floor and Middle tiers are irrelevant noise. **Recommendation:** Keep the tier table for reference but add a callout: "DEFAULT TIER: Flagship. All builds use the Flagship deployment level (16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions) unless explicitly downgraded."

**Status:** STILL NEEDED (with ALWAYS FLAGSHIP annotation)

---

### Change 2: Perception Thresholds in Every Gate

**What it does:** Inserts a ~30-line perception threshold table into perceptual-auditing SKILL.md, after the Void Guardrail Specifications.

**Reflected in diagram?** YES — STRONGLY

The diagram embeds perception thresholds in multiple locations:
- Section 4 (Two-Layer Verification), Layer 1: "SC-09: Background delta >= 15 RGB" and "SC-11: Font-size zones >= 2px delta"
- Section 9 (Resolved Decisions), Decision 1: "15 RGB" confirmed as canonical threshold
- Section 9, Decision 7: "0.03em (0.5px at 16px base)" confirmed for letter-spacing
- The diagram's CLAUDE.md (pipeline-analysis) includes a full Perception Threshold Table

**CRITICAL DIFFERENCE:** The codification map proposes 192px stacked gap maximum. The architecture diagram OVERRIDES this to 108px for Flagship (Decision 2: "108px for Flagship, 120px for Middle/Ceiling. 192px gate was too loose — removed."). Under ALWAYS FLAGSHIP, the canonical value is **108px**, not 192px.

**Edit specs still valid?** PARTIALLY — the threshold table content is correct but the stacked gap value (192px in the codification map) is OUTDATED. The architecture diagram resolves this to 108px. The codification map's proposed content at line 115 ("padding/margin >= 24px between zones") is still valid. But any reference to 192px as the stacked gap cap needs updating to 108px.

**ALWAYS FLAGSHIP modification needed?** YES — CRITICAL.
1. Replace 192px stacked gap cap with 108px throughout
2. The "Application to Gate Runners" section should reference SC-10 as 108px, not 192px
3. Remove the "Builder Self-Check" section's generic framing and make it unconditional

**Status:** STILL NEEDED (with 108px correction)

---

### Change 3: Builder Gets CSS Recipes, Not Just Constraints

**What it does:** Replaces the sparse Phase 6 (Implementation) in `compositional-core/CLAUDE.md` with a detailed builder recipe including file routing, step sequence, and specific CSS values.

**Reflected in diagram?** YES — STRONGLY

The diagram's Section 7 (File Flow) explicitly specifies what the builder reads:
- `operational-recipe.md (~650 lines)`
- `_build-plan.md (from TC)`
- `tokens.css`
- `prohibitions.md`
- `merged-components.css`
- `mechanism-catalog excerpts (Ceiling+ only)`

And Section 3 (Skill Propagation) shows the full routing chain with the recipe as the central builder input.

**CRITICAL DIFFERENCE:** The diagram says "mechanism-catalog excerpts (Ceiling+ only)" — but under ALWAYS FLAGSHIP, this becomes unconditional. The builder ALWAYS gets the full mechanism catalog, not just excerpts.

**Edit specs still valid?** YES — the before/after content is concrete and the target location (lines 195-221 of CLAUDE.md) is well-anchored by surrounding context.

**ALWAYS FLAGSHIP modification needed?** YES — MODERATE.
1. Remove "For Ceiling+: also mechanism-catalog.md excerpts" conditional. Make it: "Builder ALWAYS receives mechanism-catalog.md (full, not excerpts)"
2. The proposed builder recipe step 1 (`max-width: 960px`) is correct and unchanged
3. The transition types (SMOOTH/BRIDGE/BREATHING with "minimum 3 types") should remain

**Status:** STILL NEEDED (with unconditional mechanism catalog routing)

---

### Change 4: Minimum Perceptual Deltas in Spatial Gate Runner

**What it does:** Appends SC-09 (background color delta check) and SC-10 (stacked gap maximum) to the spatial gate runner JavaScript.

**Reflected in diagram?** YES — PARTIALLY

The diagram's Layer 1 (Programmatic Gates) lists 12 gates including:
- SC-09: Background delta >= 15 RGB
- SC-10: Stacked gap <= 108px (Flagship)
- SC-11: Font-size zones >= 2px delta
- SC-12: Zone count 2-5

The diagram shows 12 gates total; the codification map only adds SC-09 and SC-10 (the original runner had SC-01 through SC-08). The diagram implies SC-11 and SC-12 also exist, which the codification map does NOT specify edit code for.

**CRITICAL DIFFERENCES:**
1. SC-10 threshold: codification map says 192px, diagram says 108px (Flagship). Under ALWAYS FLAGSHIP, use **108px**.
2. SC-11 (font-size zones >= 2px delta) and SC-12 (zone count 2-5) are in the diagram but NOT in the codification map's proposed JavaScript. These are MISSING edits.

**Edit specs still valid?** PARTIALLY.
- SC-09 JavaScript is valid and actionable
- SC-10 JavaScript needs the threshold changed from 192px to 108px (line `const passed = maxStackedGap <= 192;` becomes `<= 108`)
- SC-11 and SC-12 have NO edit specs — they need to be written

**ALWAYS FLAGSHIP modification needed?** YES — CRITICAL.
1. SC-10 threshold: 108px, not 192px
2. SC-11 and SC-12: need new JavaScript code blocks (not provided in codification map)
3. The ephemeral gate runner file may need to be moved to a permanent location for PV2

**Status:** STILL NEEDED (with 108px fix + 2 missing gate implementations)

---

### Change 5: S-09 Stacking Loophole — Measure TOTAL Gap

**What it does:** Updates `semantic-rules.md` (Rule 2) and `tokens.css` with the stacking rule explanation and a new `--space-max-stacked` token.

**Reflected in diagram?** YES — PARTIALLY

The diagram mentions stacked gap limits in:
- Layer 1 gates: "SC-10: Stacked gap <= 108px (Flagship)"
- Section 9, Decision 2: "108px for Flagship, 120px for Middle/Ceiling"
- Section 5 (Tier Routing): "Stacked Gap Limit" row shows 120px/120px/108px

But the diagram does NOT show the semantic-rules.md or tokens.css edits — it operates at the architectural level, not the file-edit level.

**CRITICAL DIFFERENCE:** The codification map proposes `--space-max-stacked: 192px` in tokens.css. The architecture diagram says 108px. Under ALWAYS FLAGSHIP: **108px is canonical**.

**Edit specs still valid?** PARTIALLY.
- Edit 5A (semantic-rules.md): The stacking rule explanation and examples are excellent and valid. But "PASS: Total <= 192px" must become "PASS: Total <= 108px"
- Edit 5B (tokens.css): `--space-max-stacked: 192px` must become `--space-max-stacked: 108px`. The comment explaining the binary test must also update.

**ALWAYS FLAGSHIP modification needed?** YES — CRITICAL.
1. All 192px references become 108px
2. Remove the "2x the per-property maximum" rationale (192 = 2x96, but 108 comes from the architecture's "worst-case breathing" arithmetic, which is more rigorous)
3. The fix options list ("REDUCE padding-bottom," "INSERT checkpoint element," etc.) remains valid

**Status:** STILL NEEDED (with 108px throughout)

---

### Change 6: Per-Category Mechanism Minimums (Not "2-4")

**What it does:** Replaces "sample 2-4 mechanisms" with per-category minimums (1+ from each of 5 categories: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav).

**Reflected in diagram?** YES

The diagram's Section 3 (Skill Propagation) explicitly references: "TC selects mechanisms per-category (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+)"

**NOTE:** The diagram uses a DIFFERENT category naming convention than the codification map. Codification map uses: Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav. Diagram uses: Spatial, Temporal, Material, Behavioral, Relational. The diagram also uses these names in Section 2 (Gate validation): "Per-category mechanism minimums met (1+ Spatial, 1+ Temporal, 1+ Material, 1+ Behavioral, 1+ Relational)?"

This is a NAMING INCONSISTENCY between the two documents. The codification map's names come from the actual mechanism-catalog.md; the diagram's names may be an abstracted version. Both agree on the principle (1+ per category, 5 categories).

**Edit specs still valid?** N/A — ALREADY APPLIED. The codification map confirms this was applied by the enrichment execution team. Only residual "sample 2-4" text needs grep-and-replace verification.

**ALWAYS FLAGSHIP modification needed?** MINOR. Under ALWAYS FLAGSHIP, the minimum could be raised from 1+ per category to 2+ per category for Flagship pages (the tier table shows Flagship uses 16-18 mechanisms). However, neither document proposes this change, and the current 1+ minimum was validated by ALL 11 research agents. **Recommendation:** Keep 1+ as the floor. The tier-specific mechanism COUNT (16-18 for Flagship) provides the additional pressure.

**Status:** DONE (already applied; verify no residual "2-4" text)

---

### Change 7: 3-Transition Minimum for Coherence

**What it does:** Adds Step 4.2C to tension-composition SKILL.md requiring at least 3 different transition types (SMOOTH/BRIDGE/BREATHING) between major sections.

**Reflected in diagram?** YES — IMPLICITLY

The diagram doesn't explicitly call out "3-transition minimum" but the transition types appear in:
- Section 3: "Phases 2-6 CSS recipe" (transitions are part of Phase 6: Coherence + Transitions)
- The 9-phase recipe structure implies transitions are an integral phase

The 3-transition minimum is more of a SKILL.md detail than an architectural element, so its absence from the diagram is expected.

**Edit specs still valid?** N/A — ALREADY APPLIED. The codification map confirms the enrichment execution team added Step 4.2C with the 3-transition minimum and SMOOTH/BRIDGE/BREATHING taxonomy.

**ALWAYS FLAGSHIP modification needed?** POSSIBLE. Under ALWAYS FLAGSHIP, 3 transition types is the MINIMUM. For Flagship pages with 16-18 mechanisms and 3+ patterns, the transition count should naturally exceed 3. The existing specification is sufficient — no change needed.

**Status:** DONE (already applied)

---

### Change 8: Agent Communication Protocol (Not File-Only)

**What it does:** Inserts a new "AGENT COMMUNICATION PROTOCOL" section into `compositional-core/CLAUDE.md` between Track 2 Workflow and Anti-Gravity Rules, with required communication points and per-tier minimum message counts.

**Reflected in diagram?** YES — PARTIALLY

The diagram addresses communication:
- Section 6 (Flagship 4-Wave Architecture): Shows Wave 0-3 with explicit inter-agent coordination (TC planner outputs, builder receives, PA auditors get screenshots from lead)
- Section 6 callout: "Screenshot Pre-Capture Pattern" describes lead-to-auditor communication
- Section 10: "missing footer = smoking gun (builder couldn't ask planner)" in the narrative framing

But the diagram does NOT specify a formal communication protocol with SendMessage message counts. It implies communication through wave architecture (each wave completes before next, preventing the "builder can't ask" failure).

**Edit specs still valid?** YES — the target location (after line 221, before Anti-Gravity Rules at line 224) is well-anchored and the proposed content is self-contained.

**ALWAYS FLAGSHIP modification needed?** YES — SIGNIFICANT.

The codification map proposes per-tier minimums:
- Middle: 2+ messages
- Ceiling: 4+ messages
- Flagship: 6+ messages

Under ALWAYS FLAGSHIP, there is only ONE tier. **Recommendation:**
1. Remove the per-tier minimum table entirely
2. Replace with: "MINIMUM 6 messages per build (planner->builder plan, builder->planner clarification x2, builder->verifier completion, verifier->builder findings, builder->verifier fixes-applied)"
3. The "Required communication points" list (4 items) is still valid and should remain

**Status:** STILL NEEDED (with single-tier 6+ message minimum)

---

### Change 9: Opus for Builder Agents (Not Sonnet)

**What it does:** Inserts builder model selection guidance into the Phase 6 section of `compositional-core/CLAUDE.md`, recommending Opus for Ceiling/Flagship and Sonnet for Middle.

**Reflected in diagram?** YES — STRONGLY

The diagram is emphatic about Opus builders:
- Section 2, Step 4: "Opus builder reads recipe + build plan"
- Section 3: "ROUTES TO BUILDER (Opus agent)"
- Section 5 (Tier Routing): ALL three tiers show "1 Opus agent" for the builder
- Section 6: "1 Opus builder executes Phases 0-8"
- Section 7: "Opus Builder (Wave 1)"
- Section 10: "recipe gets you to 3/4, then TC + Opus creative judgment pushes toward 4/4"

The diagram has already resolved the "Sonnet-for-builders" question: **Opus for all builders, all tiers.** The codification map's conditional ("Middle: Sonnet is sufficient") is OUTDATED relative to the diagram.

**Edit specs still valid?** PARTIALLY — the insertion location (after the Phase 6 recipe from Change 3) is correct, but the CONTENT needs rewriting.

**ALWAYS FLAGSHIP modification needed?** YES — CRITICAL REWRITE.

The codification map proposes:
- "Ceiling/Flagship builds: Use Opus"
- "Middle builds: Sonnet is sufficient"

Under ALWAYS FLAGSHIP + diagram's resolution: **Opus is the ONLY builder model. Period.**

**Recommendation:** Replace the conditional with: "Builder agent: Opus (claude-opus-4-6). Non-negotiable. Opus complies with constraints AND creates beyond them. All other roles (planner, verifier, auditor): Sonnet is cost-effective and reliable."

This is simpler, more binary, and aligned with both the diagram and ALWAYS FLAGSHIP.

**Status:** STILL NEEDED (with unconditional Opus-for-builder)

---

### Change 10: Builder Visibility — Route CSS-Rich Files to CSS-Writing Agents

**What it does:** Updates the Phase 4 (Mechanism Extraction) section in `compositional-core/CLAUDE.md` to explicitly route the full mechanism catalog to the builder agent, removing the "first 200 lines" restriction.

**Reflected in diagram?** YES — STRONGLY

The diagram's Section 7 (File Flow) shows builder reading:
- `operational-recipe.md (~650 lines)` — highlighted
- `_build-plan.md (from TC)` — highlighted
- `tokens.css`
- `prohibitions.md`
- `merged-components.css`
- `mechanism-catalog excerpts (Ceiling+ only)`

The "Ceiling+ only" qualifier on mechanism-catalog is the REMAINING issue. Under ALWAYS FLAGSHIP, this becomes unconditional.

The diagram's Section 3 also confirms: the mechanism catalog goes to the TC planner (for mechanism selection) AND the builder should get it (via the build plan AND directly for Ceiling+).

**Edit specs still valid?** YES — the target content (Track 2 Workflow, Phase 4) is well-identified and the proposed replacement removes the "first 200 lines" restriction.

**ALWAYS FLAGSHIP modification needed?** YES — MODERATE.
1. Remove "(for PLANNER agent)" and "CRITICAL ROUTING — BUILDER MUST ALSO RECEIVE" conditional framing
2. Replace with unconditional: "Both planner and builder receive mechanism-catalog.md (full file, all 18 mechanisms)"
3. Remove "DO NOT restrict builder to 'first 200 lines'" — instead, simply never impose the restriction
4. The provenance paragraph is still valid evidence but the "Flagship experiment routed..." framing should become "Previously, the mechanism catalog was restricted to..."

**Status:** STILL NEEDED (with unconditional routing)

---

## ALWAYS FLAGSHIP Impact Summary

Under ALWAYS FLAGSHIP, these patterns recur across all 10 changes:

### Pattern 1: Remove Tier Conditionals
Every change that says "for Middle: X, for Ceiling: Y, for Flagship: Z" must collapse to just Z.

Affected changes: 1, 3, 8, 9, 10

### Pattern 2: Stacked Gap 108px (Not 192px)
The codification map uses 192px throughout. The architecture diagram resolved this to 108px for Flagship. Under ALWAYS FLAGSHIP, 108px is the only value.

Affected changes: 2, 4, 5

### Pattern 3: Unconditional Opus Builder
No "Sonnet is sufficient for Middle" language. Opus builder, always.

Affected changes: 9 (and implied in 3, 8)

### Pattern 4: Full Mechanism Catalog to Builder
No "excerpts" or "first 200 lines" restrictions. Full catalog, always.

Affected changes: 3, 10

---

## Master Checklist for PV2 Codification

| # | Change | Status | Diagram Reflects? | ALWAYS FLAGSHIP Mod? | Blocker? |
|---|--------|--------|-------------------|---------------------|----------|
| 1 | Recipe format | STILL NEEDED | YES | Minor (default-to-Flagship annotation) | No |
| 2 | Perception thresholds | STILL NEEDED | YES (but 108px not 192px) | YES (108px correction) | **YES** — wrong threshold |
| 3 | Builder CSS recipes | STILL NEEDED | YES | YES (unconditional catalog routing) | No |
| 4 | Gate runner deltas | STILL NEEDED | YES (but missing SC-11, SC-12) | **YES** (108px + 2 missing gates) | **YES** — incomplete |
| 5 | S-09 stacking | STILL NEEDED | YES (but 108px not 192px) | YES (108px correction) | **YES** — wrong threshold |
| 6 | Per-category minimums | DONE | YES | Minor (keep 1+ floor) | No |
| 7 | 3-transition minimum | DONE | YES (implicit) | None needed | No |
| 8 | Agent communication | STILL NEEDED | Partial (wave arch implies it) | YES (single-tier 6+ messages) | No |
| 9 | Opus for builders | STILL NEEDED | YES (strongly) | **YES** (unconditional rewrite) | No |
| 10 | Builder visibility | STILL NEEDED | YES | YES (unconditional routing) | No |

### Blocking Issues (Must Fix Before Codification)

1. **192px -> 108px in Changes 2, 4, 5:** The codification map's stacked gap threshold is outdated. The architecture diagram resolved this based on "worst-case breathing arithmetic." All three changes must use 108px.

2. **Missing SC-11 and SC-12 in Change 4:** The architecture diagram lists 12 gates. The codification map only provides JavaScript for SC-09 and SC-10. Two gate implementations are missing:
   - SC-11: Font-size zones >= 2px delta (needs JS code)
   - SC-12: Zone count 2-5 (needs JS code)

3. **Category naming inconsistency (Change 6):** The codification map uses mechanism-catalog.md names (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav). The architecture diagram uses different names (Spatial, Temporal, Material, Behavioral, Relational). This MUST be reconciled — one canonical naming convention for PV2.

### Non-Blocking Issues

4. **Diagram says "mechanism-catalog excerpts (Ceiling+ only)" for builder** — contradicted by Change 10's intent. Under ALWAYS FLAGSHIP, the diagram's own text needs updating if it becomes a PV2 reference document.

5. **Architecture diagram's tier table** (Section 5) still shows Middle/Ceiling/Flagship as separate tiers. Under ALWAYS FLAGSHIP, this table becomes reference-only, not operational routing.

---

## Recommended Codification Order (Updated for ALWAYS FLAGSHIP)

1. **Change 6 + Change 7** — VERIFY ONLY (already applied)
2. **Resolve 192px -> 108px** across Changes 2, 4, 5 BEFORE any edits
3. **Write SC-11 + SC-12 JavaScript** (missing from codification map)
4. **Reconcile category names** (mechanism-catalog vs diagram)
5. **Change 1** — Recipe framing with ALWAYS FLAGSHIP default
6. **Change 3 + Change 10** — Builder recipe + routing (paired, unconditional)
7. **Change 9** — Opus builder (unconditional, simplified)
8. **Change 2** — Perception thresholds (with 108px)
9. **Change 5** — S-09 stacking (with 108px)
10. **Change 4** — Gate runner (SC-09, SC-10 at 108px, SC-11, SC-12)
11. **Change 8** — Agent communication (single-tier 6+ messages)

---

## Appendix: Architecture Diagram Elements NOT in Codification Map

The following elements appear in the architecture diagram but have NO corresponding codification change:

1. **Kill Criteria** (Section 9, Decision 5): 3 criteria for pipeline failure detection. No edit spec exists.
2. **Anti-Scale Model** (Section 9, Decision 3): `Richness = semantic_density x restraint x spatial_confidence` in Phase 8G and /build-page preamble. No edit spec exists.
3. **Conviction Content / Pipeline Philosophy** (Section 9, Decision 4): 20-line preamble with IS/IS NOT axes. No edit spec exists.
4. **Recipe Extraction** (Section 9, Decision 6): Extract operational-recipe.md to ~650 lines. No edit spec (this is a NEW FILE, not an edit).
5. **Handoff Validation Gate** (Section 2, Step 3-4 boundary): Binary checks on _build-plan.md (zone count, background deltas, grid layouts, per-category minimums). No edit spec exists.
6. **Fix Integration Loop** (Section 2, Steps 6-7): Maximum 3 fix cycles, SHIP/FIX/ESCALATE decision. No edit spec exists.
7. **Enrichment Propagation** (Section 8): How PA/TC/recipe/gate enrichments feed back. Architectural principle, no edit spec needed.

These 6 actionable gaps (items 1-6) represent work BEYOND the codification map. The /build-page orchestrator (~350 lines) would contain items 1, 3, 5, 6. Item 4 is a new file extraction. Item 2 needs a specific edit location.

---

**END OF REPORT**
