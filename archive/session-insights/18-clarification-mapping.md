# Clarification Mapping to Documentation Locations

**Date:** 2026-02-15
**Purpose:** Precise mapping of conversation clarifications to documentation insertion points
**Source:** 17-conversation-clarifications.md (8 clarifications + meta-observation)

---

## MAPPING METHOD

For each clarification:
1. Target file identified
2. Exact line range specified
3. Existing text quoted
4. Gap stated (what "why" is missing)
5. Proposed enrichment text written
6. Insert position specified (BEFORE/AFTER existing text)

**Insertion strategy:** SURGICAL ADDITIONS, not rewrites. Preserve flow.

---

## CLARIFICATION 1 → Multiple Locations

**Topic:** Mechanism counts are DESCRIPTIVE (backward-engineered), not PRESCRIPTIVE (targets)

### Location 1-A: tension-composition/SKILL.md

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Lines 68-119 (Step 0D tier routing section, within M5)
**Existing text:**
```markdown
**Tier classification:**

| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-7). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |
```

**Gap:** No provenance for mechanism counts, no "proxy not target" warning, no context that 8-10 is what Middle naturally produces rather than what it aims for.

**Proposed enrichment (INSERT AFTER tier table):**
```markdown
**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

**Provenance:** These counts were BACKWARD-ENGINEERED from existing pages, not invented as targets:
- Variant B (Phase D best, built under "sample 2-4"): deployed 5 mechanisms across 2 categories
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories
- DD-006 (fractal, crown jewel): deployed ~16+ mechanisms

The counts describe NATURAL LANDING ZONES for each level of effort:
- 30-45 min component assembly → ~5 mechanisms
- 70-100 min individual mechanism selection across all categories → ~8-10
- 150-220 min metaphor-driven combination → ~12-15
- 240-400 min multi-pass audit full pipeline → ~16-18

The per-category minimum (1+ per each of 5 families) ensures vocabulary BREADTH, and the count emerges naturally from breadth. Natural landing zones emerge from breadth, not from number-targeting.
```

**Insert position:** AFTER the tier classification table, BEFORE "For Middle-tier pages (SKIP Phases 1-3):" subsection

---

### Location 1-B: HANDOFF.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/continuity-docs/HANDOFF.md`
**Location:** Lines 96-110 (Section 4: THE TIER MODEL)
**Existing text:**
```markdown
| Property | Floor | Middle | Ceiling | Flagship |
|----------|-------|--------|---------|----------|
| **Mechanisms** | 5 of 18 | 8-10 of 18 | 12-15 of 18 | 16-18 of 18 |
```

**Gap:** Table presents counts with no provenance, no "proxy not target" clarification.

**Proposed enrichment (INSERT AFTER the tier table):**
```markdown
**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) were BACKWARD-ENGINEERED from existing pages, not invented as targets. They describe NATURAL LANDING ZONES for each level of effort, not numbers to hit.

**Provenance:**
- Variant B (Phase D best): 5 mechanisms across 2 categories (30-45 min build)
- OD-004 (geological confidence): ~12-15 across all 5 categories (150-220 min)
- CD-006 (combination pilot): ~16-18 across all 5 categories (240-400 min)
- DD-006 (fractal crown jewel): ~16+ mechanisms (multi-pass audit)

Without this context, a builder might treat "8-10" as a target and pad mechanisms to hit 8, or stop at 8 when the content naturally wants 11. The per-category minimum (M1) was designed specifically to avoid this — it ensures BREADTH (all 5 families), and the count emerges naturally from breadth.
```

**Insert position:** AFTER the tier model table (line 110), BEFORE "**The key insight: the Floor-to-Middle transition has the HIGHEST ROI.**"

---

### Location 1-C: 03-ENTRY-POINT.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**Location:** Lines 56-66 (tier model table)
**Existing text:**
```markdown
| Property | Floor | Middle | Ceiling | Flagship |
|----------|-------|--------|---------|----------|
| **Mechanisms** | 5 of 18 | 8-10 of 18 | 12-15 of 18 | 16-18 of 18 |
```

**Gap:** Same as HANDOFF.md — no provenance, no "proxy not target" warning.

**Proposed enrichment (INSERT AFTER tier table):**
```markdown
**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count.

These numbers were BACKWARD-ENGINEERED from existing pages:
- Variant B (Phase D best, built under "sample 2-4"): deployed 5 mechanisms across 2 categories
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories

The per-category minimum (M1) ensures BREADTH (all 5 property families), and the count emerges naturally from breadth.
```

**Insert position:** AFTER tier table (line 66), BEFORE "**Key insight:** Floor-to-Middle has the HIGHEST ROI."

---

### Location 1-D: 14-master-execution-prompt.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/14-master-execution-prompt.md`
**Location:** Lines 64-70 (Section 1.4 tier model table)
**Existing text:**
```markdown
| Tier | Mechanisms | Metaphor? | Build Time | CSS Lines | Pages |
|------|-----------|-----------|------------|-----------|-------|
| **Floor** | 5 | No | 30-45 min | 150-250 | 10-20% |
| **Middle** (DEFAULT) | 8-10 | No | 70-100 min | 350-500 | 40-50% |
```

**Gap:** No provenance, no "proxy not target" clarification in the execution context.

**Proposed enrichment (INSERT AFTER table):**
```markdown
**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

The per-category minimum (M1) works because it ensures vocabulary BREADTH (all 5 property families represented), not a specific COUNT. Natural landing zones emerge from breadth, not from number-targeting.
```

**Insert position:** AFTER the tier model table (line 70), BEFORE the paragraph starting "**The tier distinction is NOT just mechanism count**"

---

## CLARIFICATION 2 → Multiple Locations

**Topic:** "Sample 2-4" is the PROBLEM being fixed, not the design

### Location 2-A: tension-composition/SKILL.md

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Lines 782-787 (Phase 4 mechanism extraction)
**Existing text:**
```markdown
**Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.**
```

**Gap:** This instruction is the BROKEN state that M1 exists to replace. No warning that this is identified as limiting.

**Proposed enrichment (REPLACE existing instruction):**
```markdown
**[DEPRECATED — TO BE REPLACED BY M1] The current instruction "sample 2-4 mechanisms" was identified by ALL 11 research agents as the single most limiting specification in the skill. It caps richness at 5-7 mechanisms when showcase pages deploy 12-18. This instruction exists in BROKEN state awaiting M1 (per-category minimum) replacement, scheduled for Wave 2 skill enrichment.**

**CURRENT INSTRUCTION (TEMPORARY):** Sample 2-4 mechanisms most relevant to YOUR metaphor.

**REPLACEMENT (PENDING M1):** Read the FULL mechanism catalog (18 mechanisms). For EACH of the 5 property categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation), identify AT LEAST ONE mechanism that serves THIS content. Justify each deployed, document 3+ rejected.
```

**Insert position:** REPLACE the existing "Sample 2-4 mechanisms" instruction entirely

---

### Location 2-B: HANDOFF.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/continuity-docs/HANDOFF.md`
**Location:** Lines 135-140 (Section 5: MODIFICATION RECOMMENDATIONS)
**Existing text:**
```markdown
**The single most damaging instruction:** "Sample 2-4 mechanisms" in `~/.claude/skills/tension-composition/SKILL.md` (line ~787). Exists in two inconsistent forms ("2-4" and "3-5"). Caps technique density, prevents engagement with the full mechanism catalog. All 11 research agents independently identified this as the highest-leverage change.
```

**Gap:** No explanation of why it's still in the skill, no sequencing rationale for why M1 is in Wave 2.

**Proposed enrichment (INSERT AFTER existing paragraph):**
```markdown
**Why M1 was in Wave 2 (and why it's arguably a sequencing mistake):**

M1 was grouped with M6 and M7 as "vocabulary expansion" modifications. The original rationale: validate M1's specific parameters through experiment before permanent encoding. The problem: you can't test whether 8-10 mechanisms across 5 categories works if the skill tells the builder to use 2-4.

M6 and M7 genuinely need experiment feedback (M6 might be busywork, M7 might over-prescribe). M1 is the foundational enabler, categorically different from M6/M7. Running the experiment without M1 would confirm what 11 agents already concluded. The user conversation consensus: M1 sequencing was arguably a mistake.

**Current state (2026-02-15):** M1 has NOT been applied yet. The broken "sample 2-4" instruction is STILL in the skill as of post-Wave 1 execution. The proposed Middle tier uses 8-10 mechanisms across all 5 categories, but the skill currently says "2-4," creating a direct contradiction.
```

**Insert position:** AFTER the paragraph about "single most damaging instruction", BEFORE "**Status: NO modifications have been applied yet.**"

---

### Location 2-C: 03-ENTRY-POINT.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**Location:** Lines 68-71 (mechanism selection context)
**Existing text:**
```markdown
**Historical note:** The original skill instruction said 'Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.' This was the single most limiting specification — identified by ALL 11 research agents as capping richness. Variant B deployed only 7 mechanisms across 2 categories when showcase pages deploy 12-18 across all 5. The instruction has been replaced with per-category minimum deployment.
```

**Gap:** The historical note says "has been replaced" but this is FUTURE tense — M1 is Wave 2, not yet applied.

**Proposed enrichment (REPLACE existing historical note):**
```markdown
**Historical note (CURRENT as of 2026-02-15):** The skill currently says 'Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.' This instruction is the BROKEN state that the entire skill enrichment project exists to fix. It was identified by ALL 11 research agents as the single most limiting specification. Variant B deployed only 7 mechanisms across 2 categories when showcase pages deploy 12-18 across all 5.

M1 (replace with per-category minimum) was assigned to Wave 2, not Wave 1. The original rationale: validate M1's parameters through experiment. The problem: you can't test whether 8-10 mechanisms works if the skill tells the builder to use 2-4. M1 is the foundational enabler, categorically different from M6/M7 (which genuinely need experiment feedback). Running the experiment without M1 would confirm what 11 agents already concluded.

**As of this writing, M1 has NOT been applied.** The "sample 2-4" instruction is STILL in the skill. The proposed Middle tier uses 8-10 mechanisms across all 5 categories. The current skill instruction directly contradicts this and is the primary thing M1 fixes.
```

**Insert position:** REPLACE the existing "Historical note" paragraph entirely (lines 68-71)

---

## CLARIFICATION 3 → mechanism-catalog.md

**Topic:** "Creative Derivation vs Lookup" — same catalog, different selection logic

### Location 3-A: mechanism-catalog.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`
**Location:** Lines 52-66 (category table section, after PRE-1 is applied)
**Existing text:**
```markdown
| Category | ID | Mechanisms | What It Governs |
|----------|----|-----------|-----------------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |
```

**Gap:** No explanation of HOW mechanism selection differs between Middle (lookup) and Ceiling (metaphor-driven creative derivation). The tools are identical but the selection logic differs.

**Proposed enrichment (INSERT AFTER category table):**
```markdown
**CRITICAL DISTINCTION: Same Catalog, Different Selection Logic**

All tiers (Floor/Middle/Ceiling/Flagship) use the SAME 18 mechanisms from this catalog. The tools are identical. What differs is HOW you decide which tools to pick and WHY.

**Middle (content-structure mapping):**
- Builder looks at content: "This has code blocks → I need mechanism #17"
- Builder looks at content: "This has hierarchy → I need mechanism #1"
- Builder looks at content: "This has callouts → I need mechanism #2"
- Each mechanism serves a DIFFERENT content need INDEPENDENTLY
- Selection logic: content feature → mechanism capability (direct mapping)

**Ceiling (metaphor-driven multi-channel coherence):**
- Builder has derived a metaphor (e.g., "geological strata") through Phases 1-3
- Builder looks at catalog THROUGH the metaphor: "Geological strata have pressure gradients → spacing compression (#4). Strata have consolidation levels → border-weight (#1). Strata have distinct layers → zone backgrounds (#7)."
- KEY REALIZATION: spacing compression, border-weight, AND zone backgrounds all encode the SAME thing — geological depth. They REINFORCE each other.
- Selection logic: metaphor → shared semantic dimension → multiple mechanisms encoding that dimension simultaneously

**The concrete difference in output:**
- Middle: border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm — each independently solving different problems
- Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" together — when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying "deeper" in three CSS channels at once

This multi-channel coherence is what creates the "atmosphere" that Middle pages lack. The CATALOG doesn't change — only the SELECTION AND COMBINATION logic changes.
```

**Insert position:** AFTER the category table, BEFORE "**Multi-category note:**"

---

## CLARIFICATION 4 → HANDOFF.md + 03-ENTRY-POINT.md

**Topic:** Density patterns are the SKELETON, mechanisms are the FLESH

### Location 4-A: HANDOFF.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/continuity-docs/HANDOFF.md`
**Location:** Lines 113-119 (density rhythm patterns list)
**Existing text:**
```markdown
**Density rhythm patterns (used at Middle tier and above):**
- **CRESCENDO:** Information density builds from sparse to dense across the page (opening breath, gradual intensification, peak section, resolution). Best for tutorials and progressive explanations.
- **F-PATTERN:** Dense-sparse alternation following natural eye scanning. Dense left column, sparse right. Best for reference and documentation.
- **BENTO:** Grid-based modular sections of varying density. Independent blocks at different densities. Best for overviews and dashboards.
- **PULSE:** Rhythmic dense-sparse-dense alternation creating a heartbeat pattern. Best for narrative content with periodic emphasis.
```

**Gap:** No explanation that patterns are SPATIAL ORGANIZATION STRATEGIES (skeleton) separate from mechanisms (flesh), not mechanisms themselves.

**Proposed enrichment (INSERT BEFORE the pattern list):**
```markdown
**CRITICAL DISTINCTION: Patterns Are the Skeleton, Mechanisms Are the Flesh**

The 4 density patterns (CRESCENDO, F-PATTERN, BENTO, PULSE) are SPATIAL ORGANIZATION STRATEGIES — how information density flows across the page. They're the skeleton that determines overall page rhythm.

The 18 mechanisms are INDIVIDUAL CSS TECHNIQUES deployed WITHIN whatever pattern is selected. They're the flesh.

- CRESCENDO = sparse intro → dense peak → sparse resolution (overall flow)
- Within a CRESCENDO page, you deploy mechanism #1 (border-weight) for hierarchy, #7 (zone backgrounds) for section differentiation, #5 (dense/sparse alternation) for rhythm, etc.

**The pattern is NOT hardcoded to CRESCENDO.** For Middle tier (no metaphor derivation), select pattern based on content type using the table below. The previous discussion kept saying "CRESCENDO" because the experiment content was assumed to be tutorial format.

**For Middle tier:** The 4-option pattern table is intentionally a fixed lookup. Middle removes creative judgment — you match content type to pattern, then deploy mechanisms. Whether this produces "designed" output (vs "formatted") is what the experiment tests.
```

**Insert position:** BEFORE the density rhythm patterns list (line 113), as a new subsection under the tier model

---

### Location 4-B: 03-ENTRY-POINT.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**Location:** After acronym legend (proposed location after confusions are fixed)
**Existing text:** (Will be in acronym legend section)
```markdown
- CRESCENDO/F-PATTERN/BENTO/PULSE = density pattern names
```

**Gap:** Acronym legend mentions patterns but doesn't clarify they're NOT mechanisms.

**Proposed enrichment (EXPAND acronym legend entry):**
```markdown
- **CRESCENDO/F-PATTERN/BENTO/PULSE** = Density patterns (SPATIAL ORGANIZATION STRATEGIES, not mechanisms). These are the SKELETON (how density flows across page). The 18 mechanisms are the FLESH (CSS techniques deployed within the pattern). Pattern = overall rhythm. Mechanisms = specific techniques within that rhythm.
```

**Insert position:** REPLACE the existing acronym legend entry for density patterns

---

## CLARIFICATION 5 → mechanism-catalog.md + CLAUDE.md

**Topic:** Scales and mechanisms measure different dimensions (breadth vs depth)

### Location 5-A: compositional-core/CLAUDE.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md`
**Location:** After Section 4.7 fractal gate discussion (approximately line 400-410)
**Existing text:**
```markdown
**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)
```

**Gap:** No explanation of WHAT scales are, what each scale represents, or how scales differ from mechanisms.

**Proposed enrichment (INSERT AFTER tier-calibrated requirements):**
```markdown
**WHAT ARE SCALES? (Different Dimension from Mechanisms)**

**Mechanisms** = breadth of vocabulary (how many distinct CSS techniques are deployed)
**Scales** = depth of coherence (how many zoom levels the pattern appears at)

The 5 scales are zoom levels:
1. **Navigation** — bird's eye (header, TOC, page-level nav)
2. **Page** — the scroll (how sections sequence across the full page)
3. **Section** — one screen (how components arrange within a section)
4. **Component** — one element (how content organizes inside a component)
5. **Character** — inline (text-level styling: bold weight, code formatting, link color)

"Fractal coherence" means the same design direction repeats as you zoom in. If the page uses CRESCENDO (sparse-to-dense) at the Page scale, individual sections should also progress sparse-to-dense internally (Section scale), and individual components should have sparse labels and dense bodies (Component scale).

**Why higher tiers need more scales:** More mechanisms at more scales = the page feels intentionally designed at every zoom level. Squint (page scale) → rhythm. Read a section (section scale) → structure. Look at one callout (component scale) → same logic. That's fractal coherence.
```

**Insert position:** AFTER the tier-calibrated requirements list, BEFORE "**Passing criteria:**"

---

## CLARIFICATION 6 → 13-master-agenda.md

**Topic:** M1 sequencing decision and its implications

### Location 6-A: 13-master-agenda.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/13-master-agenda.md`
**Location:** Lines 215-220 (Phase 1.1.4 M1 modification)
**Existing text:**
```markdown
#### 1.1.4 M1: Replace "Sample 2-4" with Per-Category Minimum

- [ ] **File:** `~/.claude/skills/tension-composition/SKILL.md`
- [ ] **Location:** Lines 783-787 (Phase 4 mechanism selection)
- [ ] **Type:** MODIFY (2 lines → 20 lines)
- [ ] **Action:** Replace "sample 2-4 mechanisms" with per-category protocol
```

**Gap:** No documentation of the M1 sequencing rationale, the circular dependency problem, or the three approaches discussed.

**Proposed enrichment (INSERT BEFORE the checklist items):**
```markdown
**M1 SEQUENCING RATIONALE AND IMPLICATIONS:**

**The original rationale:** M1 was grouped with M6/M7 as "vocabulary expansion" — all three modify how mechanisms are selected. The idea: validate M1's parameters through experiment before permanent encoding.

**The problem identified in conversation:** This creates a circular dependency. The experiment tests whether 8-10 mechanisms across 5 categories creates a "designed" feeling. But without M1, the builder sees "sample 2-4" and deploys 4. The experiment can't test the hypothesis it was designed to test.

**Three approaches discussed:**
1. Apply M1 before experiment — clean test of full Middle concept, but can't isolate M1's contribution
2. Manual override in builder prompt — skill unchanged, but experiment tests the concept not the skill
3. Two builds — one with "2-4", one with per-category — provides comparison data but costs double

**What "isolated effect" means concretely:** If we change M1+M2+M3+M5 and the result is good, we can't attribute improvement to any single change. If we change only M2+M3+M5 and the result is mediocre, then add M1 and the result improves, we know M1 was the critical piece. BUT: we already have 11 agents' worth of evidence that M1 is the critical piece. The isolated test would confirm what we already know at the cost of a wasted build.

**Consensus position from conversation:** M1 sequencing was arguably a mistake. M1 is categorically different from M6/M7. M6/M7 genuinely need experiment feedback. M1 is the foundational enabler. The experiment needs M1 to meaningfully test the Middle tier hypothesis.
```

**Insert position:** BEFORE the checklist items (line 211), as a new subsection under "1.1.4 M1"

---

## CLARIFICATION 7 → 13-master-agenda.md

**Topic:** Content selection criteria for Middle experiment

### Location 7-A: 13-master-agenda.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/13-master-agenda.md`
**Location:** Lines 262-269 (Phase 2.1 Content Selection)
**Existing text:**
```markdown
#### 2.1.1 Choose Experimental Content

- [ ] **Criteria:**
  - 800-1,200 words (substantive enough to need structure)
  - Tutorial or guide format (narrative flow, sequential steps)
  - Contains code examples (tests mechanism #17)
  - Contains callouts/tips (tests mechanism #2)
  - NOT the same content as Variant B (we need fresh test)
```

**Gap:** No explanation of WHY mixed content matters (not just a preference), no mechanism ceiling reference, no self-referential warning.

**Proposed enrichment (INSERT AFTER criteria list):**
```markdown
**WHY MIXED CONTENT MATTERS:**

Pure prose content limits mechanism deployment. Variant B was prose-dominant and only exercised 2 of 5 categories (mechanism ceiling for prose = 6). Mixed content (tutorial with code examples, callouts, tables) naturally exercises more categories:
- Code blocks need #17 (Component)
- Callouts need #2 (Component)
- Tables need #18 (Structure/Navigation)
- Hierarchical steps need #1 (Hierarchy)
- Density rhythm needs #5 (Spatial)

**Content type recommendation:** Technical tutorial (e.g., "Building Your First API Endpoint") because:
- Naturally contains narrative prose (introductions, explanations)
- Naturally contains code blocks (3-5 of them)
- Naturally contains callouts/tips/warnings (2-3 of them)
- Naturally contains step sequences (numbered procedures)
- Naturally contains reference table (configuration options or parameters)
- Maps to CRESCENDO density pattern (tutorial = progressive complexity)

**Additional requirements:**
- Different content/domain than Variant B (scientific calibration) — fresh test
- NOT self-referential (content about the design system itself → skill says ABORT)
```

**Insert position:** AFTER the criteria list, BEFORE "- [ ] **Candidate Sources:**"

---

## CLARIFICATION 8 → 13-master-agenda.md

**Topic:** What the Middle experiment tests and what it means

### Location 8-A: 13-master-agenda.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/13-master-agenda.md`
**Location:** Lines 359-369 (Phase 2.4.2 Answer THE Question)
**Existing text:**
```markdown
#### 2.4.2 Answer THE Question

- [ ] **The Question:** Does Middle achieve the "place" feeling without metaphor?
- [ ] **Evidence:**
  - Engagement threshold question (PA-05): YES / PARTIAL / NO
  - Comparison test: better than Variant B? YES / MARGINAL / NO
  - Spatial atmosphere: "want to spend time here"? YES / SOMEWHAT / NO
- [ ] **Verdict:**
  - **SUCCESS:** Middle is sufficient for 40-50% of pages, Ceiling scope narrows
  - **PARTIAL:** Middle is "designed" but lacks atmosphere, some content needs Ceiling
  - **FAILURE:** Middle feels formatted not designed, metaphor required for engagement
```

**Gap:** No explanation of what each verdict means for the broader project, no significance beyond the single page, no decision implications.

**Proposed enrichment (INSERT AFTER verdict options):**
```markdown
**WHAT EACH VERDICT MEANS FOR THE BROADER PROJECT:**

**SUCCESS verdict means:**
- Middle is sufficient for 40-50% of pages (tutorials, guides, overviews)
- Not every page needs metaphor derivation (reduces build time from 3-5 hours to 70-100 min)
- The Floor-to-Middle transition has highest ROI (3-4x richness for ~45 extra minutes)
- Ceiling is reserved for content with genuine structural tension (prose-dominant, implicit tension)

**PARTIAL verdict means:**
- Middle produces "designed" pages but lacks "atmosphere" (the sense of place)
- Some content needs Ceiling-tier metaphor-driven coherence for full effect
- Middle is still valuable for most content but the tier boundaries may need adjustment

**FAILURE verdict means:**
- Lookup-based mechanism deployment can't produce engagement
- Metaphor is required even for tutorials/guides (not just conceptual content)
- The tier model needs revision — possibly Floor/Ceiling only, dropping Middle

**The significance beyond this single page:**
- This is the first PRACTICAL test of the vocabulary-vs-library distinction
- The Name Test and Transfer Test passed in THEORY — this tests them in PRACTICE
- If Middle pages feel derivative (structurally similar to showcase pages despite different content), anti-gravity may need to address mechanism COMBINATION divergence, not just metaphor divergence
```

**Insert position:** AFTER the verdict options, BEFORE the "- [ ] **Output:**" line

---

## META-OBSERVATION → All Documentation

**Topic:** Documentation "Why" Gap — documentation tends to state WHAT without explaining WHY

This meta-observation applies to ALL documentation files and should inform future enrichment, but does NOT map to a specific insertion. Instead, it's a PRINCIPLE to apply when writing any new specification or instruction:

**Guideline for all future documentation:**

Every specification should include its provenance:
- WHERE did this number/decision come from? (backward-engineered from X page)
- WHAT would happen if we changed it? (increasing from 8-10 to 12-15 crosses into Ceiling territory)
- IS this validated or hypothetical? (counts are observed, Middle tier is untested hypothesis)
- WHAT was the alternative considered? (raw count target rejected because of Goodhart's Law)

**This applies to:**
- All skill modifications (M1-M11)
- All documentation enrichment (DOC-1 through DOC-6)
- All future planning documents
- All tier specifications

---

## SUMMARY OF MAPPINGS

**Total enrichment locations:** 14 specific insertions across 7 files

**Files requiring enrichment:**
1. `~/.claude/skills/tension-composition/SKILL.md` — 2 insertions (Clarifications 1, 2)
2. `/ephemeral/continuity-docs/HANDOFF.md` — 3 insertions (Clarifications 1, 2, 4)
3. `/ephemeral/doc-enrichment/03-ENTRY-POINT.md` — 3 insertions (Clarifications 1, 2, 4)
4. `/ephemeral/session-insights/14-master-execution-prompt.md` — 1 insertion (Clarification 1)
5. `/design-system/compositional-core/grammar/mechanism-catalog.md` — 1 insertion (Clarification 3)
6. `/design-system/compositional-core/CLAUDE.md` — 1 insertion (Clarification 5)
7. `/ephemeral/session-insights/13-master-agenda.md` — 3 insertions (Clarifications 6, 7, 8)

**Scope:** SURGICAL additions, not rewrites. Total enrichment text: ~150-200 lines across all files.

**Next step:** Present this mapping to doc-enricher teammate for file modifications.

---

**END CLARIFICATION MAPPING**
