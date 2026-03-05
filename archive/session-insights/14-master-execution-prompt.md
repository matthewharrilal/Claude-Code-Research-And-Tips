# Master Execution Prompt: KortAI Skill Enrichment Plan

**Purpose:** Self-contained prompt enabling another Claude instance to PLAN all skill enrichment modifications. Read this document, create a plan, bring it back for revisions, then execute.

**Author:** prompt-architect (skill-enrichment-prep team)
**Date:** 2026-02-15
**Status:** READY FOR USE. **Execution:** Wave 1 COMPLETE (2026-02-15: PRE-1 + M2/M3/M5/M8 + DOC-1-6 applied). Wave 2 pending Middle experiment. This prompt remains the authoritative specification for Wave 2/3 execution.

---

## HOW TO USE THIS DOCUMENT

1. Read this ENTIRE document before creating your plan
2. Create a PLAN document listing every modification with exact before/after text
3. Present the plan for user review
4. After approval, execute modifications surgically (edit existing files, do not rewrite)
5. Validate each modification after applying

**You should need NOTHING beyond this document to create the plan.** All current text, replacement text, file paths, and rationale are included.

---

# SECTION 1: PROJECT CONTEXT

## 1.1 What KortAI Is

KortAI is a design system for building HTML pages with CSS-only richness. Pages use warm editorial aesthetics (cream backgrounds, sharp edges, no shadows, serif display headings) with spatial mechanisms that encode content meaning through CSS properties like border-weight, spacing compression, and zone backgrounds.

**Key identity constraints (non-negotiable):**
- `border-radius: 0` -- ALWAYS sharp edges
- `box-shadow: none` -- ALWAYS flat surfaces
- No gradients, no pure black/white, no drop shadows
- Typography trinity: Instrument Serif (display), Inter (body), JetBrains Mono (code)
- Container width: 940-960px at 1440px viewport

## 1.2 The 6-Layer Ontology

The design system is organized as a 6-layer compositional core:

```
Layer 1: Identity     -- compositional-core/identity/prohibitions.md (22 prohibitions)
Layer 2: Vocabulary   -- compositional-core/vocabulary/tokens.css (65 tokens)
Layer 3: Grammar      -- compositional-core/grammar/mechanism-catalog.md (18 mechanisms)
Layer 4: Components   -- compositional-core/components/merged-components.css
Layer 5: Case Studies -- compositional-core/case-studies/ (9 studies, NOT templates)
Layer 6: Guidelines   -- compositional-core/guidelines/semantic-rules.md
```

Builders read layers 1-2 first (always-load: 527 lines), then layer 3 (mechanisms), then optionally layers 4-6.

## 1.3 What Phase D Proved

Phase D was extraction validation (2026-02-15). Five pipeline configuration variants were tested. Results:

- **Variant B (weak permission)** scored best: 18/19 compliance, 4/5 novelty
- **Container width was THE primary failure mode** -- 4/5 pages violated 940-960px
- **"Always-load" protocol failure** caused Track 1's instant fail (5 critical violations)
- **"Sample 2-4 mechanisms"** identified by ALL 11 research agents as the single most limiting specification

## 1.4 The Tier Model

Research established four tiers for page complexity:

| Tier | Mechanisms | Metaphor? | Build Time | CSS Lines | Pages |
|------|-----------|-----------|------------|-----------|-------|
| **Floor** | 5 | No | 30-45 min | 150-250 | 10-20% |
| **Middle** (DEFAULT) | 8-10 | No | 70-100 min | 350-500 | 40-50% |
| **Ceiling** | 12-15 | Yes | 150-220 min | 700-1000 | 20-30% |
| **Flagship** | 16-18 | Yes + multi-pattern | 240-400 min | 1000-1500 | 5-10% |

**Middle tier is the recommended universal floor.** The Floor-to-Middle transition has highest ROI (3-4x richness for +45 min).

**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

The per-category minimum (M1) works because it ensures vocabulary BREADTH (all 5 property families represented), not a specific COUNT. Natural landing zones emerge from breadth, not from number-targeting.

**The tier distinction is NOT just mechanism count -- it's deployment level:**
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (multiple mechanisms encode the SAME semantic)
- **Flagship:** Multi-pattern COMPOSITION (3+ patterns with typed transitions)

**VALIDATION STATUS:**

These tier definitions come from backward-engineering showcase pages (DD-006, OD-004, CD-006) and Phase D variant profiles. Middle tier (8-10 mechanisms, no metaphor) has NEVER been built. The vocabulary-vs-library distinction (can mechanisms be reused freely without creating derivative output?) is tested in THEORY (Name Test, Transfer Test passed) but untested in PRACTICE.

The Middle-tier experiment is the critical test. Until validated, treat Middle tier specs as best hypothesis, not proven fact. The execution checkpoint (Section 6) correctly stops before assuming Middle works.

## 1.5 WHY Skill Enrichment Is Needed

**The core problem:** The current tension-composition skill says "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms." This instruction:

1. **Caps richness** -- Variant B deployed only 7 mechanisms across 2 categories. Showcase pages deploy 12-18 across all 5 categories.
2. **Compresses 337 research findings** into a single instruction -- 50:1 information loss
3. **Has no tier routing** -- Middle-tier pages (no metaphor needed) must run through the full metaphor-derivation pipeline
4. **Lacks container width enforcement** -- the #1 Phase D failure mode has no guardrail in the skill
5. **Lacks fractal gate** -- the fractal consistency check is a 10-line suggestion with ~0% compliance. Gates achieve 100%.

**The skill enrichment closes these gaps** through 11 skill modifications organized in 3 waves, plus documentation prerequisites and PA skill additions.

---

# SECTION 2: CURRENT SKILL STATE

## 2.1 Tension-Composition Skill

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Size:** ~1,400 lines (may vary slightly)

**Structure (7 conceptual phases):**

| Phase | What It Does | Lines (approx) |
|-------|-------------|----------------|
| Phase 0 | Content assessment, type classification, scope, section identification, library prohibition | 40-90 |
| Phase 1 | Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + 5 extended + 5 conditional) | 92-175 |
| Phase 2 | Tension derivation (reader needs vs design system constraints) | 178-400 |
| Phase 3 | Metaphor collapse (constrained associative search, commitment gate) | 400-708 |
| Phase 3.5 | Divergence justification (convergence check against case studies) | 665-708 |
| Phase 4 | Compositional layout generation (guardrails, mechanism extraction, translation, fractal check) | 712-1080 |
| Phase 5 | Output (thought process document + HTML layout) + Divergence verification | 1093-1249 |

**Key weaknesses identified by research:**

1. **No tier routing** -- ALL content runs through the full metaphor pipeline. Middle-tier pages (40-50% of all pages) don't need Phases 1-3.
2. **"Sample 2-4 mechanisms"** at line 787 -- the single most limiting instruction
3. **No container width rule** -- Phase 4.0 guardrails (lines 716-756) have content proportion and typography guardrails but no explicit 940-960px container width mandate
4. **Fractal check is advisory** -- Step 4.7 (lines 1071-1080) is a 10-line suggestion, not a gate
5. **No semantic value justification** -- builders can use arbitrary CSS values without explaining WHY
6. **No combination guidance** -- Ceiling-tier pages need multi-channel coherence but the skill doesn't explain mechanism combinations
7. **No error recovery** -- strict sequential phases with no backtracking protocol

## 2.2 Perceptual-Auditing Skill

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Size:** ~736 lines

**Structure (4 modes):**

| Mode | What It Does | Questions |
|------|-------------|-----------|
| Mode 1 | Quick soul check | PA-01 through PA-05 (Mandatory Five) |
| Mode 2 | Standard review | PA-01 through PA-20 + PA-29 through PA-41 |
| Mode 3 | Standard comprehensive | PA-01 through PA-45 at 2 viewports |
| Mode 4 | Standalone evaluation | All 48 questions |

**28 core questions organized in tiers:**
- Tier 1: Mandatory Five (PA-01 to PA-05) -- every audit
- Tier 2: Standard Fifteen (PA-06 to PA-20 + PA-29 to PA-41) -- readability, spatial balance, flow, grid, consistency, color
- Tier 3: Comprehensive (PA-42 to PA-48) -- metaphor-awareness questions

**Key weaknesses:**
1. **No semantic value audit** -- checks WHAT CSS exists, not WHY values were chosen
2. **No tier-specific audit scope** -- same 48 questions for Floor and Flagship pages
3. **No grammar-vs-derivative mode** -- cannot detect structural convergence with showcase pages

---

# SECTION 3: PRE-REQUISITES (MUST DO FIRST)

These items BLOCK skill modifications. They must be completed before any Wave 1 changes.

## PRE-1: Add Category Labels to Mechanism Catalog (BLOCKING)

**Why blocking:** The per-category minimum (M1) requires mechanisms labeled by category. The catalog currently lists 18 mechanisms WITHOUT category tags. R7 (combination diversity mandate) cannot be enforced without categories.

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`

**Action:** Add category tags to each mechanism heading AND add a summary table after line 49 (end of "Extraction Method" section).

**Category assignments (5 categories):**

| Category | Mechanisms |
|----------|-----------|
| **Spatial** | #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid |
| **Hierarchy** | #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale Jumping |
| **Component** | #2 2-Zone Component DNA, #9 Confidence Encoding via Color, #10 Border-Left Semantic Signal, #17 Code Block |
| **Depth/Emphasis** | #3 Solid Offset Depth, #7 Zone Background Differentiation, #16 Drop Cap |
| **Structure/Navigation** | #8 Scroll Witness/Sticky TOC, #12 Progressive Disclosure, #13 Dark Header + 3px Border, #14 Footer Mirror, #18 Data Table |

**Format for mechanism headings (example):**

Current:
```markdown
### 1. Border-Weight Gradient Encoding
```

Replace with:
```markdown
### 1. Border-Weight Gradient Encoding [HIERARCHY]
```

Apply this pattern to ALL 18 mechanism headings.

**Insert after line 49** (after "Extraction Method" section, before "The Mechanisms (18 Total)"):

```markdown
## Mechanism Categories (5 Property Families)

Each mechanism belongs to one or more property categories. These categories enable per-category selection (see tension-composition skill Phase 4).

| Category | ID | Mechanisms | What It Governs |
|----------|----|-----------|-----------------|
| **Spatial** | S | #5, #6, #15 | Layout topology, density rhythm, grid structure |
| **Hierarchy** | H | #1, #4, #11 | Importance encoding, structural weight, scale |
| **Component** | C | #2, #9, #10, #17 | Internal component patterns, semantic signals |
| **Depth/Emphasis** | D | #3, #7, #16 | Layering, zone differentiation, focal points |
| **Structure/Navigation** | N | #8, #12, #13, #14, #18 | Page chrome, navigation, progressive disclosure |

**Multi-category note:** Some mechanisms serve multiple categories. Border-weight gradient (#1) is primarily HIERARCHY but also encodes DEPTH. Tag the PRIMARY category in the heading; note secondary categories in the mechanism description.

**Per-category selection protocol:** For Middle-tier+ pages, deploy AT LEAST ONE mechanism from each category to ensure vocabulary breadth. See tension-composition skill Phase 4 for the full protocol.
```

**Success criteria:** Builder can scan catalog and identify 1+ mechanism per category.

---

## PRE-2: Resolve Phase 3.5 Temporal Contradiction (BLOCKING)

**Why blocking:** M1 (per-category minimum) requires checking category diversity. M4 (domain family check) strengthens Phase 3.5. But mechanisms aren't selected until Phase 4. You can't check category diversity at Phase 3.5 when mechanisms don't exist yet.

**Resolution:** The "strengthened Phase 3.5" is actually TWO gates:
- **Phase 3.5:** Metaphor lock + divergence check (NO mechanism info needed)
- **Phase 4.5 (NEW):** Mechanism selection gate + category diversity check (AFTER Phase 4 mechanism selection)

**This is NOT a separate modification** -- it is handled within M2 (fractal gate) and M1 (per-category minimum) by placing the category check AFTER mechanism selection in Phase 4, not in Phase 3.5. The plan already accounts for this: M1 goes in Phase 4 (mechanism extraction), and M4 strengthens Phase 3.5 for divergence only (no mechanism info needed there).

**No file change needed for this pre-requisite itself** -- the temporal contradiction is resolved by WHERE M1 and M4 are placed (Phase 4 and Phase 3.5 respectively, not both in Phase 3.5).

---

## PRE-3: Update Root Navigation Staleness (BLOCKING)

**Why blocking:** Three files show "Phase D NOT YET STARTED." A new agent instance reading these would attempt to plan Phase D execution instead of skill enrichment.

**Note:** This pre-requisite may already be completed by the staleness-fixer teammate. Verify before executing. If already done, skip.

**File 1:** `design-system/CLAUDE.md`
- Find: `Phase D (NEXT -- not yet started)` (approximately line 9)
- Verify the current text says something about Phase D being complete. If it already says "Phase D COMPLETE" or similar, skip this.

**File 2:** `design-system/pipeline/05-COMPLETE-ROADMAP.md`
- Lines 40-59 should show Phase D as COMPLETE with verdict
- If still showing future work, update to reflect COMPLETE status

**File 3:** MEMORY.md (auto-memory file)
- Should be under 200 lines for full auto-load
- If over 200 lines, compress phase history

**Success criteria:** New agent instances see Phase D is complete and know to focus on skill enrichment.

---

# SECTION 4: SKILL MODIFICATIONS -- COMPLETE LIST

## OVERVIEW

**11 modifications total:**
- 8 to tension-composition/SKILL.md (M1-M8)
- 3 to perceptual-auditing/SKILL.md (M9-M11)

**3 waves:**
- Wave 1 (Core Enabling): M2, M3, M5, M8 -- lowest risk, enables Middle-tier
- Wave 2 (Vocabulary Expansion): M1, M6, M7 -- informed by Middle experiment results
- Wave 3 (Audit Integration): M4, M9, M10, M11 -- audit-only, doesn't affect building

**Execution order within Wave 1:** M2 -> M3 -> M5 -> M8 (dependencies)
**Execution order within Wave 2:** M1 -> M6 -> M7 (dependencies)
**Execution order within Wave 3:** M4 -> M9 -> M10 -> M11 (dependencies)

---

## M1: Replace "Sample 2-4 Mechanisms" with Per-Category Minimum

**Wave:** 2 (after Middle experiment validates approach)
**Skill:** tension-composition/SKILL.md
**Priority:** HIGHEST LEVERAGE CHANGE (addresses 50%+ of richness gap)
**Risk:** LOW (enabling, not prescriptive)
**Dependencies:** PRE-1 (category labels must exist in catalog)

**Why per-category minimum, not raw count (from research):**

1. **Arbitrary number:** Why 8 and not 7 or 9? No empirical basis for a specific count.
2. **Goodhart's Law:** Count becomes target. Builder deploys to satisfy number, not content.
3. **Padding incentive:** If content produces 5 strong fits, mandate forces 3 weak ones.
4. **Content scope blindness:** Short content (<300 words) cannot support 8 mechanisms.

Per-category minimum achieves breadth (all 5 families) without these failure modes. Natural landing: 5-10 mechanisms depending on content scope.

**Short content calibration:** Content <300 words at ANY tier uses Floor requirement only (5 mechanisms from component inventory). Per-category minimum assumes standard/long content (500+ words).

**CURRENT TEXT (approximately lines 782-787):**

```markdown
**Extraction protocol:**

1. **Scan mechanism catalog** — identify 3-5 techniques relevant to YOUR metaphor
2. **Extract technique, NOT implementation** — e.g., "border-weight encodes hierarchy" (technique) vs "4px/3px/1px for confidence levels" (implementation)
3. **Adapt to YOUR context** — Your metaphor + mechanism technique = new implementation

**Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms.**
```

**REPLACEMENT TEXT:**

```markdown
**Extraction protocol:**

1. **Read the FULL mechanism catalog** (18 mechanisms, ~869 lines) -- DO NOT sample randomly
2. **Extract technique, NOT implementation** -- e.g., "border-weight encodes hierarchy" (technique) vs "4px/3px/1px for confidence levels" (implementation)
3. **Adapt to YOUR context** -- Your metaphor/pattern + mechanism technique = new implementation

**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

For EACH of the 5 mechanism categories, identify AT LEAST ONE mechanism that serves THIS content:

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |

**Justification requirement (MANDATORY):**
- For EACH mechanism you deploy: one sentence on WHY it serves THIS content at THIS location
- For AT LEAST 3 mechanisms you considered but REJECTED: one sentence on WHY they don't fit

**Natural landing by tier:**
- Floor: 5 mechanisms (component assembly, no per-category requirement)
- Middle: 5-10 mechanisms across all 5 categories
- Ceiling: 8-12 mechanisms across all 5 categories + 2+ combinations
- Flagship: 12-15 mechanisms across all 5 categories + 3+ combinations

**CRITICAL:** You are deploying VOCABULARY (mechanisms), not counting techniques. The goal is breadth across categories, not hitting a number.
```

**WHY:** ALL 11 research agents identified "sample 2-4" as the single most limiting specification. Variant B deployed 7 mechanisms but only 2 categories. This change ensures breadth across all 5 categories.

---

## M2: Promote Fractal Consistency to GATE

**Wave:** 1 (core enabling)
**Skill:** tension-composition/SKILL.md
**Priority:** HIGH (proven LOW rigidity cost, HIGH richness gain)
**Risk:** LOW (enabling, content-agnostic, scope-calibrated by tier)
**Dependencies:** None

**CURRENT TEXT (approximately lines 1071-1080):**

```markdown
### Step 4.7 -- Fractal Consistency Check

The metaphor's pattern must appear at multiple scales:
- **Navigation scale** (TOC)
- **Page scale** (section sequence)
- **Section scale** (component sequence within section)
- **Component scale** (content within component)
- **Character scale** (code comments vs code logic)

Verify the SAME metaphor direction applies consistently at every zoom level.
```

**REPLACEMENT TEXT:**

```markdown
### Step 4.7 -- Fractal Consistency GATE (MANDATORY)

**BEFORE proceeding to Phase 5, you MUST complete this gate.**

**Fractal self-similarity requirement:** The SAME design pattern must appear at multiple scales. This is NOT optional.

**Scale coverage table (MANDATORY deliverable):**

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
| Page | [How section sequence reflects pattern] | [Specific CSS] |
| Section | [How components within section reflect pattern] | [Specific CSS] |
| Component | [How content within component reflects pattern] | [Specific CSS] |
| Character | [How inline/text-level reflects pattern] | [Specific CSS] |

**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)

**Passing criteria:**
- Table complete with ALL required scales for tier
- SAME pattern direction at each scale (e.g., if page-level uses sparse-to-dense, section-level MUST also use sparse-to-dense)
- CSS evidence provided for each scale
- Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

**Failing criteria (any of):**
- Pattern reverses direction between scales
- Pattern exists at fewer than tier minimum scales
- No CSS evidence provided
- "Pattern" is decorative (color theme) not structural (density/hierarchy)

**Phase 4.7 is complete when:**
- Scale coverage table written
- Tier minimum scales demonstrated
- Self-similarity verified (same direction at all scales)

**You are now LOCKED IN. Proceed to Phase 4.8.**
```

**WHY:** Current 10-line check has ~0% compliance. Binary gates achieve 100% compliance. Tier calibration prevents Floor/Middle overload.

---

## M3: Add Container Width NON-NEGOTIABLE Rule

**Wave:** 1 (core enabling)
**Skill:** tension-composition/SKILL.md
**Priority:** CRITICAL (prevents #1 Phase D failure mode)
**Risk:** NONE (binary rule, zero ambiguity)
**Dependencies:** None

**CURRENT TEXT:** No explicit container width rule exists in Phase 4.0 guardrails.

**LOCATION:** Phase 4.0 guardrails section (approximately lines 716-756), INSERT AFTER the existing "COMPRESSION AND DENSITY GUARDRAILS" table and BEFORE the "CRITICAL PRINCIPLE" paragraph.

**INSERT THIS TEXT:**

```markdown
**CONTAINER WIDTH GUARDRAILS (NON-NEGOTIABLE -- HIGHEST PRIORITY):**

| Guardrail | Value | Rationale | Override |
|-----------|-------|-----------|---------|
| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio | **NEVER** |
| Minimum container width | 940px | Below this = narrow strip syndrome | NEVER |
| Maximum container width | 960px | Above this = edge-to-edge, no breathing | Rarely (full-bleed hero sections only) |

**CRITICAL -- Container Width Priority:**

No metaphor may override the 940-960px container width. If your metaphor demands narrowing (e.g., "cylindrical core sample," "narrow alley," "manuscript page"):

**CORRECT:** Express narrowing through INTERNAL spacing (padding variation, asymmetric margins), NOT external width reduction.

**WRONG:** Narrow the container to 650px to "match the metaphor."

**Example:**
```css
/* WRONG -- metaphor forces narrow width */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px; /* Non-negotiable */
  padding: 0 120px; /* Internal padding creates "narrow" visual */
}
```

**Priority order when metaphor conflicts with container width:**
1. Container width 940-960px (NEVER compromise)
2. Metaphor fidelity (ADJUST expression to meet width floor)
3. Aesthetic preference (LAST priority)

**This is the #1 Phase D failure mode. 4/5 validation pages violated this. If you violate this, the entire composition FAILS regardless of other quality.**
```

**ESCAPE HATCH — When Metaphor Demands Narrowness:**

Some metaphors conceptually demand narrow presentation. The rule is "never narrow the CONTAINER" — internal padding achieves narrow aesthetics:
- Container at 960px + padding at 120px each side = 720px content width
- Manuscript aesthetic achieved WITHOUT violating 940-960px container

Phase D violations all REDUCED container width (700-800px) instead of using internal padding. M3 prevents the former while enabling the latter.

**WHY:** 4 of 5 Phase D pages violated container width. This was the single most common failure. A binary rule prevents it entirely.

---

## M4: Strengthen Phase 3.5 Domain Family Check

**Wave:** 3 (audit integration)
**Skill:** tension-composition/SKILL.md
**Priority:** MEDIUM (strengthens existing gate)
**Risk:** LOW-MODERATE (stricter than current, but same-family convergence is a real risk)
**Dependencies:** None

**CURRENT TEXT (approximately lines 675-677):**

```markdown
3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4
```

**REPLACEMENT TEXT:**

```markdown
3. **Does this metaphor share a DOMAIN FAMILY with any case study in `/case-studies/_INDEX.md`?**
   (Read _INDEX.md titles + tension summaries ONLY)

   **Domain family categories:**
   - Structural: geological, architectural, mechanical, industrial, construction
   - Natural: botanical, biological, atmospheric, seasonal, ecological
   - Cultural: manuscript, theatrical, musical, culinary, ceremonial
   - Spatial: cartographic, navigational, territorial, astronomical
   - Temporal: historical, archaeological, evolutionary, developmental

   **Same-family test:** "Would a layperson describe both metaphors using the same one-word category?"
   - Geological + Architectural -> BOTH "structural" -> SAME FAMILY
   - Geological + Botanical -> "structural" vs "natural" -> DIFFERENT FAMILIES

   - If DIFFERENT FAMILY -> Proceed to Phase 4
   - If SAME FAMILY -> Proceed to divergence justification (Step 3.5D -- STRICTER criteria)
```

Also update Step 3.5D passing criteria. Find the current passing criteria text:

```markdown
**Passing criteria:** ALL answers must favor independent convergence.
```

Replace with:

```markdown
**Passing criteria (STRICTER for same-family):**
- ALL answers must favor independent convergence
- DIFFERENT on 3+ dimensions (isomorphisms, architecture, vocabulary)

**If < 3 dimensions differ -> REGENERATION IS MANDATORY.** No justification escape for same-family convergence.

**Constraint for regeneration:** "My metaphor MUST NOT be in the [family] family. What OTHER domain family resolves [tension] while satisfying [constraints]?"
```

**WHY:** "Geological" and "Architectural" are the SAME FAMILY (structural domains). Current check only catches exact metaphor matches, not family-level convergence.

---

## M5: Add Tier-Based Pipeline Selection

**Wave:** 1 (core enabling)
**Skill:** tension-composition/SKILL.md
**Priority:** HIGH (enables Middle-tier without metaphor derivation)
**Risk:** MODERATE (major structural change -- Middle skips phases)
**Dependencies:** M2, M3 (references fractal gate + container width)

**CURRENT TEXT:** No tier routing exists in Phase 0.

**LOCATION:** Phase 0, after Step 0C (Section Identification), BEFORE Step 0D (Library Access Prohibition).

**INSERT NEW STEP 0D** (and renumber current 0D to 0E):

```markdown
### Step 0D: Tier Classification and Pipeline Routing

**BEFORE entering Phase 1, classify the target tier for this content.**

**Tier classification:**

| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-7). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |

**For Middle-tier pages (SKIP Phases 1-3):**

You do NOT derive a metaphor. Instead, select a DENSITY PATTERN:

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively (sparse intro -> dense peak -> sparse resolution) |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column (navigation), sparse right (content) |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections at varying densities |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |

**Middle-tier output:**
```
TIER: Middle
PATTERN: [selected pattern]
JUSTIFICATION: [why this pattern fits this content]
SKIP: Phases 1-3 (no metaphor derivation)
NEXT: Phase 4.0 (mechanism extraction with selected pattern)
```

**Ceiling/Flagship tier:** Proceed to Phase 1 (full pipeline).

**Critical principle:** Middle-tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories), not metaphor. The tier model was validated through richness research showing ~60-85% of the richness gap is addressable through mechanism deployment alone.
```

**Also update current Step 0D heading.** Find:

```markdown
### Step 0D: Library Access Prohibition (CRITICAL)
```

Replace with:

```markdown
### Step 0E: Library Access Prohibition (CRITICAL)
```

**WHY:** Middle-tier pages (40-50% of all content) don't need metaphor derivation. Currently they must run through the full 7-phase pipeline. This routing saves 60+ minutes per Middle-tier build.

---

## M6: Add Semantic Value Justification Requirement

**Wave:** 2 (vocabulary expansion, after Middle experiment)
**Skill:** tension-composition/SKILL.md
**Priority:** MEDIUM-HIGH (difference between mechanism deployment at naming level vs CSS-generation level)
**Risk:** MODERATE (adds ~10-15 min documentation overhead per build)
**Dependencies:** M5 (references tier classification)

**CURRENT TEXT:** No semantic justification requirement exists at Phase 4.

**LOCATION:** Phase 4.2 (Translation Grammar), after the lookup tables (approximately after line 900). INSERT NEW SECTION:

**NUMBERING NOTE:** The current skill already has Step 4.2B (Pacing Prediction Heuristic) at approximately line 946. INSERT this new section as Step 4.2A (before existing 4.2B), OR renumber the existing 4.2B to 4.2C and insert this as 4.2B. Either approach works; ensure the existing Pacing Prediction content is preserved.

```markdown
### Step 4.2B -- Semantic Value Justification (MANDATORY for Middle-tier+)

**Floor tier: SKIP this step** (lookup-only values from component inventory).

**For EVERY varying CSS value (padding, margin, font-size, border-width), answer:**

**Q1: WHAT varies?** Identify the property and its range.

**Q2: WHY does it vary?** Reference one of:
- Content structure (hierarchical depth, section importance, reader journey phase)
- Metaphor logic (geological depth, confidence certainty) -- Ceiling+ only
- Pattern logic (CRESCENDO peaks here, dense stratum, EXHALE section)
- NOT "token availability" or "looked good" (these are ARBITRARY)

**Q3: WHY THESE SPECIFIC VALUES and not adjacent ones on the token scale?**
- If answer references content/metaphor/pattern -> SEMANTIC
- If answer references "it's on the scale" or "looked good" -> ARBITRARY, revise

**Tier-specific depth:**

| Tier | Expected Depth | Example |
|------|---------------|---------|
| **Floor** | None (lookup) | "Callouts use --space-6 per component inventory" |
| **Middle** | Pattern logic | "CRESCENDO peak uses 16px because complexity peaks here" |
| **Ceiling** | Metaphor logic | "Bedrock uses 40px because geological consolidation = sparse" |
| **Flagship** | Multi-dimensional | "20px = confidence (compression) x journey (unfamiliarity) x attention (recovery)" |

**Deliverable (at Phase 5 output):**

For each primary varying property, document:
- Property name and range
- Semantic driver (pattern/metaphor/multi-dimensional)
- Why these specific values (not adjacent token values)

**Passing criteria:**
- Middle: 80%+ varying values justify via pattern logic
- Ceiling: 90%+ varying values justify via metaphor logic
- Flagship: 95%+ varying values encode multi-dimensional overlaps
```

**WHY:** Variant B used mechanisms at the NAMING level (class names like `.callout--essence`) but not at the CSS-GENERATION level (arbitrary padding values). Semantic justification ensures values ENCODE meaning, not just occupy space.

**The transduction principle:** The pipeline converts structural richness at the content level (semantic) into structural richness at the CSS level (perceptual). M6 ensures builders AMPLIFY content structure through CSS, not just RECOGNIZE it through class names.

### Concrete Examples: Semantic vs Arbitrary

**Example 1 -- Section Padding Progression (Middle Tier, Pattern Logic):**

ARBITRARY:
```css
.section--intro { padding: 48px 24px; }
.section--detail { padding: 40px 24px; }
.section--summary { padding: 32px 24px; }
/* "Padding decreases as page progresses" -- BUT WHY 48/40/32? */
```

SEMANTIC:
```css
.section--intro { padding: 64px 24px; }
  /* CRESCENDO intro: reader unfamiliar, needs orientation SPACE. 64px = maximum breathing. */
.section--detail { padding: 32px 24px; }
  /* CRESCENDO build: reader oriented, absorbing info. 50% compression from intro. */
.section--summary { padding: 16px 24px; }
  /* CRESCENDO peak: reader has full context. Minimum padding = densest section.
     RATIO: 64->32->16 = 4:2:1 exponential compression matching cognitive familiarity curve.
     Linear (48->40->32) would be arbitrary. Exponential encodes structure. */
```

**Example 2 -- Border-Weight Gradient (Ceiling Tier, Metaphor Logic):**

ARBITRARY:
```css
.stratum--established { border-left: 4px solid; padding: 40px; }
.stratum--probable { border-left: 3px solid; padding: 32px; }
.stratum--speculative { border-left: 2px solid; padding: 24px; }
/* Values decrease -- but 40->32->24 has no ratio justification */
```

SEMANTIC:
```css
.stratum--established { border-left: 4px solid; padding: 40px; }
  /* Bedrock: maximum structural weight (4px) + sparse layout (40px).
     Geological consolidation = settled, organized = SPACE between grains. */
.stratum--probable { border-left: 3px solid; padding: 32px; }
  /* Sediment: 75% structural weight. Partially consolidated. */
.stratum--speculative { border-left: 2px solid; padding: 16px; }
  /* Topsoil: 50% weight + 60% compression from bedrock.
     RATIO: 40->32->16 (not 40->32->24). The probable-speculative gap
     is LARGER than established-probable because epistemic distance
     between "probably true" and "might be true" exceeds the distance
     between "definitely true" and "probably true." */
```

**Key difference:** Arbitrary has pattern but no ratio justification. Semantic has pattern + ratio + content-structural reasoning.

---

## M7: Add Mechanism Combination Guidance (Ceiling+ Only)

**Wave:** 2 (vocabulary expansion, after Middle experiment)
**Skill:** tension-composition/SKILL.md
**Priority:** MEDIUM (enables Ceiling-tier multi-channel coherence)
**Risk:** MODERATE-HIGH (prescriptive -- could cause combination-level convergence)
**Dependencies:** M1 (per-category minimum provides the breadth; this adds depth)

**CURRENT TEXT:** No combination guidance exists.

**LOCATION:** Phase 4, after Step 4.2B (Semantic Value Justification). INSERT NEW SECTION:

```markdown
### Step 4.2C -- Mechanism COMBINATION Deployment (CEILING/FLAGSHIP ONLY)

**Floor and Middle tier: SKIP THIS STEP** (individual deployment only).

**What is a mechanism combination?**

Multiple mechanisms encoding the SAME semantic dimension. When the semantic value changes, MULTIPLE mechanisms shift TOGETHER = multi-channel coherence.

**Example (OD-004 geological confidence):**
- Semantic: CONFIDENCE (established -> probable -> speculative -> open)
- Mechanism 1 (Border-Weight): 4px -> 3px -> 2px -> 1px
- Mechanism 2 (Spacing): 40px -> 32px -> 20px -> 16px
- Mechanism 3 (Backgrounds): sparse -> moderate -> dense -> breathing
- All THREE vary together as confidence changes.

**Tier requirements:**
- **Ceiling:** AT LEAST 2 mechanism combinations (2-3 mechanisms each)
- **Flagship:** AT LEAST 3 mechanism combinations across different patterns

**Proven combination families (sample and CUSTOMIZE):**

| Name | Mechanisms | Shared Semantic | Tier |
|------|-----------|----------------|------|
| **Hierarchy Triad** | Border-Weight (#1) + Spacing (#4) + Typography (#11) | Importance/certainty | Ceiling |
| **Depth Triple** | Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) | Layering/depth | Ceiling |
| **Density Triple** | Dense/Sparse (#5) + Spacing (#4) + Backgrounds (#7) | Rhythm/pacing | Ceiling |
| **Zone Pair** | Backgrounds (#7) + Border-Color (#9) | Category/section | Middle |
| **Component Pair** | 2-Zone DNA (#2) + Typography (#11) | Structure (label/body) | Middle |
| **Emphasis Pair** | Border-Left (#10) + Solid Offset (#3) | Featured content | Middle |

**Why these combinations work (perceptual alignment principle):**

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels:

- **Hierarchy Triad:** All three encode "importance" through MAGNITUDE (thick borders + generous spacing + large type = important)
- **Depth Triple:** All three encode "consolidation" (weight + density + background lightness align perceptually)
- **Density Triple:** All three encode "breathing" vs "packing" (padding + margins + background zones shift together)

Combinations FAIL when channels CONTRADICT: sparse padding + dense dark background = conflicting perceptual signals.

**CRITICAL -- Customize, do not copy:**
These combinations are VOCABULARY (proven reinforcement patterns), not TEMPLATES (copy-paste recipes). You MUST customize values for YOUR content. Using OD-004's exact 4px/3px/2px/1px + 40px/32px/20px/16px values without YOUR semantic justification = template copying.

**Anti-combination warnings (DO NOT combine these):**
- **Semantic overload:** Border-weight encodes TYPE and PRIORITY on same element (conflict)
- **Perceptual contradiction:** Sparse padding + dense background on same element (contradiction)
- **Redundant encoding:** Border-weight + border-color BOTH encode priority (redundant -- use one for priority, other for type)

**Verification:** When the semantic value changes, do MULTIPLE mechanisms shift together?
- YES -> combination exists (Ceiling requirement met)
- NO -> mechanisms are independent (Middle-level deployment)
```

**WHY:** OD-004 achieves richness through mechanism COMBINATIONS (3 mechanisms encoding the same semantic). The catalog documents mechanisms individually but lost this combination knowledge during extraction. This restores it.

---

## M8: Add Individual-to-Combination-to-Multi-Pattern Framing

**Wave:** 1 (core enabling)
**Skill:** tension-composition/SKILL.md
**Priority:** MEDIUM (clarification, makes tier model understandable)
**Risk:** LOW (explanatory, not prescriptive)
**Dependencies:** M5 (references tier routing)

**CURRENT TEXT:** Tier distinction exists only as mechanism count.

**LOCATION 1:** Step 0D (after M5 is applied -- the tier classification section). ADD after the tier table:

```markdown
**Tier distinction is NOT just count -- it's deployment level:**
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (2-3 mechanisms encode SAME semantic)
- **Flagship:** Multi-pattern COMPOSITION (3+ density patterns with typed transitions)
```

**LOCATION 2:** Phase 4.0 section header. Find:

```markdown
## Phase 4: Compositional Layout Generation
```

ADD immediately after:

```markdown
**Tier-specific deployment levels:**
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions
```

**WHY:** The core insight from tier architecture research: tiers differ in HOW mechanisms are deployed, not just HOW MANY. This framing is completely absent from current documentation.

---

## M9: Add 8 Semantic Value Audit Questions to PA Skill

**Wave:** 3 (audit integration)
**Skill:** perceptual-auditing/SKILL.md
**Priority:** HIGH (completes semantic validation framework)
**Risk:** LOW (verification questions, not prescription)
**Dependencies:** M6 (semantic justification must exist for audit to verify)

**CURRENT TEXT:** 48 PA questions exist with no semantic value checks.

**LOCATION:** After Tier 2 questions (after the last PA question in the "Standard Fifteen" section), INSERT:

```markdown
### Semantic Value Audit (Tier-Gated)

**Middle tier (pattern logic required):**

| ID | Question | Pass | Fail |
|----|----------|------|------|
| **PA-SEM-01** | For the 3 most prominent spacing variations, can you justify each value against adjacent token values using pattern logic? | "CRESCENDO peak uses 16px (densest, 75% compression from intro 64px)" | "32px because it looked good" |
| **PA-SEM-02** | Do spacing progressions use clear ratios (2:1, 3:1, 4:2:1) or arbitrary gradations? | 64->32->16 (clear 4:2:1 ratio) | 64->56->48 (arbitrary 8px decrements) |
| **PA-SEM-03** | Can you explain WHY this pattern fits this content without referencing the mechanism catalog? | "Complexity increases -> density increases" | "I used CRESCENDO because it's in the catalog" |

**Ceiling tier (metaphor logic required):**

| ID | Question | Pass | Fail |
|----|----------|------|------|
| **PA-SEM-04** | For the primary metaphor, can you map 3 content structures to 3 metaphor structures with value justifications? | "Established=bedrock=40px because consolidation" | "Geological structure, padding varies" |
| **PA-SEM-05** | Do metaphor-driven values encode metaphor SEMANTICS or just use metaphor VOCABULARY? | Values encode semantics (sparse=established) | Metaphor vocabulary (.bedrock) but arbitrary values |
| **PA-SEM-06** | Can you justify the metaphor choice for THIS content without referencing showcase pages? | "API stability has layered certainty like geology" | "OD-004 used geological so I did too" |

**Flagship tier (multi-layer required):**

| ID | Question | Pass | Fail |
|----|----------|------|------|
| **PA-SEM-07** | Identify 2 values that encode 2+ semantic dimensions simultaneously. | "20px = low confidence + early journey + high attention" | Can't identify overlaps |
| **PA-SEM-08** | Are multi-dimensional values at NECESSARY overlaps or COINCIDENTAL overlaps? | Changing one dimension would break another | Dimensions are independent |

**Tier gating:**
- Floor: EXEMPT (no semantic questions)
- Middle: MUST pass PA-SEM-01, 02, 03
- Ceiling: MUST pass PA-SEM-04, 05, 06
- Flagship: MUST pass all 8
```

**WHY:** Current audit checks WHAT CSS exists but not WHY values were chosen. This closes the semantic validation gap.

---

## M10: Add Grammar-vs-Derivative Audit Mode

**Wave:** 3 (audit integration, research-only)
**Skill:** perceptual-auditing/SKILL.md
**Priority:** MEDIUM (needed for Middle-tier experiment validation)
**Risk:** MODERATE (new untested mode, for research only)
**Dependencies:** Middle-tier experiment must be built first

**CURRENT TEXT:** No grammar-vs-derivative mode exists.

**LOCATION:** After Mode 4 (Standalone), ADD:

```markdown
### Mode 5: Grammar-vs-Derivative (Experimental Validation)

**When:** AFTER building a Middle-tier page (8-10 mechanisms, no metaphor)
**Purpose:** Determine if output is NOVEL (grammar fluency) or DERIVATIVE (showcase copy)
**Duration:** 45-60 minutes
**Team:** 5 agents (1 per test) + synthesis

**5-Test Protocol:**

**Test 1: Blur Test (Structural Fingerprint)**
- Screenshot Middle page + OD-004 + DD-006 at 1440px
- Gaussian blur 20px -- only shapes/weights visible
- Side-by-side: Does Middle page have DISTINCT or SAME structural fingerprint?
- Novel: Different shape distribution. Derivative: Same sectioning pattern.

**Test 2: Fresh-Eyes Test (Zero-Context)**
- Agent with ZERO context sees Middle page + 3 showcase pages
- "Which of these 4 look most similar?"
- Novel: Not grouped with showcases. Derivative: Grouped with OD-004 or DD-006.

**Test 3: Mechanism CSS Comparison**
- For each mechanism: extract CSS values, compare to OD-004/DD-006
- Novel: <30% value overlap. Derivative: >60% value overlap.

**Test 4: Side-by-Side Perception**
- Middle page next to Variant B AND next to OD-004
- "Does Middle feel closer to Variant B or OD-004?"
- Novel: Evolved Variant B. Derivative: Copy of OD-004.

**Test 5: Structural Similarity Score (0-16)**
- Score on 8 dimensions (0=different, 1=similar, 2=identical):
  1. Header structure  2. Section count  3. Padding progression
  4. Background zones  5. Border-weight gradient  6. Callout density
  7. Grid/flex count  8. Footer structure
- Novel: 0-6. Derivative: 10-16.

**Verdict:**
- 4-5 novel signals -> PASS (grammar fluency confirmed)
- 4-5 derivative signals -> FAIL (convergence, revise pipeline)
- Mixed -> Build second page on different content, retest
```

**WHY:** The Middle-tier hypothesis is that "8-10 mechanisms deployed via lookup produce novel output, not derivative copies." This mode tests that hypothesis.

---

## M11: Add Per-Tier Audit Scope

**Wave:** 3 (audit integration)
**Skill:** perceptual-auditing/SKILL.md
**Priority:** LOW-MEDIUM (efficiency + accuracy)
**Risk:** LOW (matches audit depth to tier depth)
**Dependencies:** M9 (semantic questions must exist)

**CURRENT TEXT (Mode 3 description, approximately line 331):**

```markdown
### Mode 3: Standard (30 minutes, TeamCreate, 4 agents)
**When:** Regular page review. Pre-ship quality gate.
**What:** PA-01–PA-45 at 1440px and 768px.
```

**REPLACEMENT TEXT:**

```markdown
### Mode 3: Standard (30 minutes, TeamCreate, 4 agents)
**When:** Regular page review. Pre-ship quality gate.
**What:** Tier-specific question scope at 1440px and 768px.

**Tier-specific audit scope:**
- **Floor:** PA-01 through PA-05 only (soul check). Skip PA-06+ (no pattern/metaphor).
- **Middle:** PA-01 through PA-20 + PA-SEM-01, 02, 03 (pattern logic check).
- **Ceiling:** PA-01 through PA-45 + PA-SEM-04, 05, 06 (metaphor logic check).
- **Flagship:** All PA-01 through PA-48 + PA-SEM-01 through PA-SEM-08 + multi-pattern check.

**Multi-pattern composition check (Flagship only):**
- 3+ distinct patterns identified (not just 3 sections with same pattern)
- Typed transitions present (BREATHING/SMOOTH/BRIDGE/ABRUPT)
- Transition CSS implemented (not just spacing)
- Each pattern serves different content needs
```

**WHY:** Auditing a Floor page for metaphor logic = wasted effort. Auditing a Flagship without multi-pattern check = gap. Matching scope to tier prevents both.

---

## SECTION 4.5: INTERACTION RIGIDITY CHECKS

Before finalizing modifications, check for compound effects:

**Type 5A (Contradictory):** Do two modifications CONFLICT?
- Test: Can you satisfy BOTH simultaneously?
- Resolved: M2 (fractal via width compression) + M3 (940px minimum) — use spacing compression instead of width
- Resolved: PRE-1 (category labels) must precede M1 (per-category selection)

**Type 5B (Multiplicative):** Do two modifications create exponential overhead?
- Test: Modification A x Modification B = how many decision points?
- Mitigated: M1 (8 mechanisms) x M2 (4 scales) = 32 combinations — REDUCED by tier-gating (Middle only 2 scales = 16 max)
- Watch: If Middle-tier overhead exceeds 25 minutes of documentation, simplify M6

**Type 5C (Goodhart's Law):** Do two modifications change each other's purpose?
- Test: Does combining them make one become a TARGET instead of MEASURE?
- Avoided: M1 uses per-category PRESENCE (binary), not mechanism COUNT (gameable)
- Avoided: Technique count metric REJECTED for this reason

---

# SECTION 5: DOCUMENTATION MODIFICATIONS

These changes support skill enrichment but target documentation files, not skill files. They can be executed in parallel with skill modifications.

## DOC-1: Add Extraction Provenance to Mechanism Catalog (HIGH)

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Location:** After line 49 (after PRE-1 category labels section)
**Content:** "Provenance and Family Resemblance" section (~45 lines)

**Key text to add:**
- Where mechanisms come from (extracted from showcase pages during Phase C)
- Family resemblance is EXPECTED and INTENDED (structural similarity = identity)
- Distinction: family resemblance (same mechanisms, different values/metaphor) vs template convergence (same mechanisms, same values, same metaphor)
- Validation test: "If two pages use border-weight gradient, do they encode DIFFERENT semantics?"

**Source:** 06-enrichment-actions.md ACTION 1-A (full drafted text available there)

---

## DOC-2: Add Mechanism Combination Catalog (HIGH)

**File:** NEW -- `design-system/compositional-core/grammar/mechanism-combinations.md`
**Content:** Document 6 proven combinations with CSS evidence

**Combinations to document:**
1. Hierarchy Triad: Border-Weight (#1) + Spacing (#4) + Typography (#11)
2. Depth Triple: Border-Weight (#1) + Spacing (#4) + Backgrounds (#7)
3. Density Triple: Dense/Sparse (#5) + Spacing (#4) + Backgrounds (#7)
4. Zone Pair: Backgrounds (#7) + Border-Color (#9)
5. Component Pair: 2-Zone DNA (#2) + Typography (#11)
6. Emphasis Pair: Border-Left (#10) + Solid Offset (#3)

Plus 3 anti-combination conflict types (semantic overload, perceptual contradiction, redundant encoding).

**Source:** 04-tier-architecture.md Part 2 (full combination analysis with CSS evidence)

---

## DOC-3: Add "Why Both Layers Exist" to Case Studies README (HIGH)

**File:** `design-system/compositional-core/case-studies/README.md`
**Location:** After line 309
**Content:** Explain grammar (tools) vs case studies (usage examples), the two-layer architecture, what happens with only one layer

**Source:** 06-enrichment-actions.md ACTION 1-B (full drafted text available there)

---

## DOC-4: Add Vocabulary-vs-Library CSS Example to CLAUDE.md (MEDIUM)

**File:** `design-system/compositional-core/CLAUDE.md`
**Location:** After the "Jazz Real Book Model" section
**Content:** Concrete CSS showing mechanism (abstract) -> implementation 1 (geological) -> implementation 2 (architectural) to demonstrate vocabulary vs template copying

**Source:** 06-enrichment-actions.md ACTION 1-C (full drafted text available there)

---

## DOC-5: Fix Fresh-Eyes Confusions in Entry Point (MEDIUM) — EXPANDED

**File:** `ephemeral/doc-enrichment/03-ENTRY-POINT.md`

**Actions (6 items):**

1. **Add acronym legend** after "WHERE WE ARE" section:
   - DD/OD/AD/CD = Density Diversity / Operational Depth / Axis Diversity / Combination Diversity
   - PA = Perceptual Audit, CPL = Compositional Layout
   - CRESCENDO/F-PATTERN/BENTO/PULSE = density pattern names
   - Phase D, Variant B, Track 1/Track 2 brief definitions

2. **Add inline definitions** for Phase D, Variant B, Content Adversary, Addition Test at first mention

3. **Expand Always-Load Protocol** from abstract to concrete: prohibitions.md (353 lines, focus lines 19-176 ABSOLUTE section) + tokens.css (174 lines, focus lines 1-85 IMMUTABLE section) = 527 lines total mandatory reading

4. **Add Name Test + Transfer Test definitions** with concrete examples:
   - Name Test: Remove metaphor name. Does mechanism still make sense?
   - Transfer Test: Does mechanism work with a DIFFERENT metaphor?

5. **Clarify "which 8-10 mechanisms"** confusion: read full catalog, identify 1+ per category, justify each

6. **Add historical context** for "sample 2-4" warning: why this old rule exists, why it was replaced

**Source:** 10-fresh-eyes-review.md confusions C-01 through C-12, 13-master-agenda.md Phase 3.3

---

## DOC-6: Add Semantic Value Framework to semantic-rules.md (MEDIUM)

**File:** `design-system/compositional-core/guidelines/semantic-rules.md`
**Location:** After current content (new section)
**Content:** The 3-question test (what varies, why, why these values), tier-specific justification table, 5 before/after examples

**Source:** 03-semantic-framework.md (complete 991-line framework)

---

# SECTION 6: EXECUTION ORDER

## Phase 0: Pre-Requisites (2-3 hours)

**Execute in this order:**
1. Verify PRE-3 (staleness fixes) -- may already be done
2. Apply PRE-1 (category labels to mechanism catalog)
3. Confirm PRE-2 is handled by modification placement (no separate action needed)

**Validate:** Category labels visible in mechanism-catalog.md. Root navigation files show Phase D complete.

---

## Phase 1: Wave 1 Skill Modifications (COMPLETE 2026-02-15)

**Executed in this order:**
1. ✅ M2 (Fractal Gate) applied
2. ✅ M3 (Container Width) applied
3. ✅ M5 (Tier Routing) applied
4. ✅ M8 (Tier Framing) applied

**Validation completed:**
- ✅ SKILL.md flows correctly from Phase 0 through Phase 4.7
- ✅ Phase numbers sequential (0, 1, 2, 3, 3.5, 4, 4.7, 5)
- ✅ Step 0D tier routing references Phase 4.0 correctly
- ✅ Step 4.7 fractal gate references tier names from Step 0D correctly
- ✅ PRE-1 (category labels) applied before M1 dependencies
- ✅ DOC-1 through DOC-6 applied

**Next:** Proceed to CHECKPOINT (Middle-tier experiment). Do NOT apply Wave 2 yet.

---

## CHECKPOINT: Middle-Tier Experiment (CURRENT POSITION as of 2026-02-15)

**Wave 1 execution STOPPED here.** The modified skill files and documentation changes have been delivered. The Middle-tier experiment is the NEXT STEP — it is NOT part of the skill modification prompt's execution scope. The experiment will be built separately, then Wave 2 will be applied informed by results.

**What the experiment will validate (4 criteria):**

1. **Container width compliance (BINARY):** 940-960px at 1440px viewport. 100% compliance expected (M3 enforces this). If violated, M3 may need STRONGER enforcement (e.g., builder-blocking gate, not just instruction).

2. **Fractal coherence (BINARY for Middle):** Page scale + Component scale demonstrate same density pattern. Scale coverage table with CSS evidence required (M2 enforces this). If missing, M2 gate may need revision.

3. **Engagement threshold (SUBJECTIVE):** Does the Middle page feel "designed" (intentional spatial meaning) not just "formatted" (components arranged on page)? Compare side-by-side with Variant B — Middle should feel RICHER. Compare with Floor-tier equivalent — gap should be visible. **This is the 3-4x richness multiplier test.**

4. **Novelty check (THE CRITICAL QUESTION):** Does the page feel like a NEW composition using familiar tools, or does it feel DERIVATIVE of showcase pages (OD-004, DD-006) despite different content? This is the vocabulary-vs-library practical test. PA Mode 5 (Grammar-vs-Derivative) provides the 5-test validation protocol.

**Decision matrix after experiment:**

| Engagement | Novelty | Decision |
|-----------|---------|----------|
| Designed | Novel | ✅ **PROCEED to Wave 2 as planned** (M1/M6/M7). The tier model is validated. |
| Designed | Derivative | ⚠️ **REVISE M1 + ADD M19 before Wave 2.** Middle achieves richness BUT feels like showcase copy. Need customization mandate (values/ratios must differ from library) + combination divergence requirement. Consult user. |
| Under-designed | Novel | ⚠️ **Tier boundary wrong.** Middle may need more mechanisms (10-12 instead of 8-10) OR content needs Ceiling treatment. The novelty is good (vocabulary works) but richness insufficient. Consult user on tier boundary revision. |
| Under-designed | Derivative | ✅ **Wave 1 VALIDATED, Wave 2 needed.** The engagement gap confirms M1 is critical (need more mechanisms). The derivative signal confirms anti-gravity works (convergence IS detectable). Proceed to Wave 2 without revision. |

**When experiment contradicts predictions:**

- **Modify the SKILL** when a concrete instruction consistently produces a measurable failure (e.g., "sample 2-4" → low mechanism count)
- **Modify the METHODOLOGY** when the process structure prevents discovery (e.g., single-pass misses audit-fix opportunities)
- **Modify the TIER MODEL** when results contradict tier boundary predictions (e.g., Middle achieves "place" feeling → Ceiling ambition shifts)
- **Do NOT modify** when results match predictions within acceptable variance

---

## Phase 2: Wave 2 Skill Modifications (2-3 hours)

**Execute in this order:**
1. M1 (Per-Category Minimum) -- highest leverage change
2. M6 (Semantic Value Justification) -- adds depth requirement
3. M7 (Mechanism Combinations) -- adds Ceiling-tier guidance

**Validate:** Same process as Wave 1. Read modified sections in context.

---

## Phase 3: Wave 3 Skill Modifications (2-3 hours)

**Execute in this order:**
1. M4 (Domain Family Check) -- strengthens existing Phase 3.5
2. M9 (8 Semantic Audit Questions) -- adds to PA skill
3. M10 (Grammar-vs-Derivative Mode) -- adds Mode 5 to PA skill
4. M11 (Per-Tier Audit Scope) -- modifies Mode 3 description

**Validate:** Read PA skill from Mode 1 through Mode 5. Check question numbering. Verify tier gating is consistent across M9 and M11.

---

## Phase 4: Documentation Modifications (3-4 hours, can parallel with Phases 1-3)

Apply DOC-1 through DOC-6 in priority order.

---

# SECTION 7: VALIDATION CRITERIA

## Per-Modification Validation

After applying each modification, verify:

1. **Syntax:** Markdown parses correctly (no broken tables, unclosed code blocks)
2. **Context:** Modified section flows naturally with surrounding text
3. **References:** Internal cross-references still valid (phase numbers, step numbers)
4. **Consistency:** Tier names, mechanism numbers, category names match across modifications
5. **Completeness:** All text from the "REPLACEMENT TEXT" section was applied

## Integration Validation

After all modifications in a wave:

1. **Cross-reference check:** M1 references "5 categories" -- do category labels exist in catalog (PRE-1)?
2. **Phase sequencing:** Phase numbers still sequential (0, 1, 2, 3, 3.5, 4, 4.7, 5)?
3. **Tier consistency:** Same tier names (Floor/Middle/Ceiling/Flagship) used everywhere?
4. **No contradictions:** M5 says Middle skips Phases 1-3. Does Phase 1 acknowledge this?
5. **PA alignment:** PA-SEM questions (M9) match semantic justification requirements (M6)?

## Builder Confidence Test

After all modifications, ask: "If a fresh agent reads the enriched skill from top to bottom, can they build a Middle-tier page without confusion?"

**Red flags:**
- References to phases that were renumbered
- Category names that don't match the catalog
- Tier names inconsistent between skill sections
- Missing definitions (terms used before defined)

---

# SECTION 8: ANTI-PATTERNS -- WHAT NOT TO DO

## 8.1 Do NOT Overwrite Entire Skill Files

Make SURGICAL EDITS to specific sections. The skills are 1,400+ and 736+ lines. Rewriting the whole file risks losing critical content that wasn't part of the modification plan.

## 8.2 Do NOT Remove Existing Content Unless Explicitly Specified

Each modification says CURRENT TEXT -> REPLACEMENT TEXT. Only replace what is specified. Do not delete surrounding content.

## 8.3 Do NOT Add Judgment-Based Instructions

Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%. Every new instruction should be:
- **BINARY:** "Container width MUST be 940-960px" (not "Container width should be reasonable")
- **TIER-GATED:** "Floor: EXEMPT. Middle: 2 scales. Ceiling: 4 scales." (not "Use appropriate number of scales")
- **MEASURABLE:** "80%+ values justify via pattern logic" (not "Most values should have semantic reasons")

## 8.4 Do NOT Exceed the Complexity Budget

The enriched skill will be ~200-300 lines longer than current. Monitor total length. If modifications push the skill past 1,700 lines, something should be compressed.

## 8.5 Do NOT Create Template Convergence

The proven combination families (M7) are VOCABULARY, not TEMPLATES. Frame them as "sample and customize" not "use these exact combinations." Add explicit anti-prescription warnings.

## 8.6 Known Failure Modes from Previous Phases

- **Metaphor-driven visual compromise:** Metaphors that demand narrow containers, excessive dark zones, or extreme compression. M3 (container width) prevents this.
- **Checklist factory:** Too many mandatory deliverables turn building into table-filling. Monitor at Ceiling tier (3 deliverables after Wave 2). If overhead > 25 min, simplify M6.
- **Pattern-matching instead of derivation:** Agents read case studies before metaphor commitment. Phase 3.5 gate (M4) and library prohibition (existing 0E) prevent this.
- **Context overflow:** Skills > 2,000 lines may hit context limits. Keep modifications concise.

---

# SECTION 9: FILE MANIFEST

## Files to READ Before Starting

| File | Why | Lines |
|------|-----|-------|
| This document (14-master-execution-prompt.md) | Primary instructions | ~1,100 |
| `~/.claude/skills/tension-composition/SKILL.md` | Skill being modified | ~1,400 |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | Skill being modified | ~736 |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | PRE-1 target | ~869 |

## Files to MODIFY

| File | Modifications | Priority |
|------|--------------|----------|
| `~/.claude/skills/tension-composition/SKILL.md` | M1, M2, M3, M4, M5, M6, M7, M8 (8 mods) | CRITICAL |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | M9, M10, M11 (3 mods) | HIGH |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | PRE-1 (category labels) | BLOCKING |

## Files to MODIFY (Documentation)

| File | Modification | Priority |
|------|-------------|----------|
| `design-system/compositional-core/grammar/mechanism-catalog.md` | DOC-1 (provenance) | HIGH |
| `design-system/compositional-core/case-studies/README.md` | DOC-3 (two-layer explanation) | HIGH |
| `design-system/compositional-core/CLAUDE.md` | DOC-4 (CSS example) | MEDIUM |
| `ephemeral/doc-enrichment/03-ENTRY-POINT.md` | DOC-5 (confusion fixes) | MEDIUM |
| `design-system/compositional-core/guidelines/semantic-rules.md` | DOC-6 (semantic framework) | MEDIUM |

## Files to CREATE

| File | Content | Priority |
|------|---------|----------|
| `design-system/compositional-core/grammar/mechanism-combinations.md` | DOC-2 (6 combination families + anti-combinations) | HIGH |

## Files to VERIFY (may already be fixed)

| File | Check | Action if stale |
|------|-------|----------------|
| `design-system/CLAUDE.md` | Phase D status shows COMPLETE | Update line ~9 |
| `design-system/pipeline/05-COMPLETE-ROADMAP.md` | Phase D section shows COMPLETE | Update lines 40-59 |

---

# SECTION 10: SUMMARY

## What This Enrichment Achieves

1. **Unblocks Middle-tier building** (M5 tier routing) -- 40-50% of pages can be built without metaphor derivation
2. **Closes the richness gap** (M1 per-category minimum) -- replaces "sample 2-4" with breadth-ensuring protocol
3. **Prevents the #1 failure mode** (M3 container width) -- binary rule, 100% compliance expected
4. **Adds structural coherence** (M2 fractal gate) -- proven enabling constraint
5. **Enables Ceiling-tier richness** (M7 combinations) -- restores lost extraction knowledge about multi-channel coherence
6. **Completes semantic validation** (M6 + M9) -- ensures CSS values ENCODE meaning, not just occupy space
7. **Matches audit to tier** (M11) -- prevents auditing Floor pages with Flagship criteria

## What This Enrichment Does NOT Do

- Does NOT build any pages (that's the Middle-tier experiment)
- Does NOT modify the compositional-core ontology layers (only skill files + mechanism-catalog)
- Does NOT add new mechanisms to the catalog (18 mechanisms remain)
- Does NOT change identity constraints (border-radius: 0 etc.)
- Does NOT create new tiers (Floor/Middle/Ceiling/Flagship remain)

## The Single Most Important Change

**M1: Replace "Sample 2-4 mechanisms" with per-category minimum.** This single modification addresses 50%+ of the richness gap identified by ALL 11 research agents.

---

**END MASTER EXECUTION PROMPT**

**Total modifications:** 11 skill + 6 documentation + 1 pre-requisite = 18 items
**Execution time:** 10-15 hours estimated → **~10 hours actual (as of Wave 1 complete)**
**Critical path (updated 2026-02-15):**
- ✅ PRE-1 complete (category labels applied)
- ✅ Wave 1 complete (M2, M3, M5, M8 + DOC-1-6 applied)
- **→ Middle Experiment (NEXT)**
- → Wave 2 (M1, M6, M7) after experiment
- → Wave 3 (M4, M9, M10, M11) after 10+ builds

**Current position:** At checkpoint. Wave 1 delivered. Middle experiment ready to build.
