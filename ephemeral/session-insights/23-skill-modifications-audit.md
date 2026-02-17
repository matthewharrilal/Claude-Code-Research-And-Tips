# SKILL.md Modifications Audit — Complete M-Modification and C-Enrichment Inventory

**Agent:** skill-auditor (task #17)
**Date:** 2026-02-15
**Source files:**
- `~/.claude/skills/tension-composition/SKILL.md` (1,583 lines, read in full)
- `ephemeral/session-insights/14-master-execution-prompt.md` (1,336 lines, read in full)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (verified enrichments)
- `design-system/compositional-core/grammar/mechanism-combinations.md` (verified existence)
- `design-system/compositional-core/guidelines/semantic-rules.md` (verified enrichments)

---

## EXECUTIVE SUMMARY

**Wave 1 modifications (M2, M3, M5, M8):** ALL APPLIED to SKILL.md
**M1 (Wave 2):** ALSO APPLIED to SKILL.md (despite execution plan saying Wave 2 pending)
**Wave 2 remaining (M6, M7):** NOT APPLIED to SKILL.md
**Wave 3 (M4, M9, M10, M11):** NOT APPLIED (M4 targets SKILL.md Phase 3.5; M9-M11 target PA skill)

**Documentation enrichments:**
- PRE-1 (category labels): APPLIED to mechanism-catalog.md
- DOC-1 (provenance): APPLIED to mechanism-catalog.md
- DOC-2 (combinations): APPLIED as new file mechanism-combinations.md
- DOC-3 ("Why Both Layers"): **NOT FOUND** in case-studies/ directory (possible gap)
- DOC-4 (CSS example): APPLIED to compositional-core/CLAUDE.md
- DOC-5 (confusion fixes): Status uncertain -- would need entry-point file verification
- DOC-6 (semantic framework): APPLIED to semantic-rules.md

**Key finding:** M1 (per-category minimum, the single highest-leverage change) IS present in SKILL.md at lines 909-931, despite the master execution prompt stating Wave 2 was pending. The new master prompt MUST treat M1 as APPLIED.

**Key discrepancy:** Natural landing zone counts differ between M1 (lines 925-929: Floor 5, Middle 5-10, Ceiling 8-12, Flagship 12-15) and M8 (lines 792-797: Floor 0, Middle 8-10, Ceiling 12-15, Flagship 16-18). The new prompt should use ONE consistent set.

---

## SECTION 1: APPLIED M-MODIFICATIONS IN SKILL.md

### M1: Per-Category Mechanism Minimum

**Status:** APPLIED (originally Wave 2, applied with Wave 1)
**SKILL.md location:** Lines 903-931

**Exact text:**

Lines 903-907 (Extraction protocol header):
```
**Extraction protocol:**

1. **Read the FULL mechanism catalog** (18 mechanisms, ~869 lines) -- DO NOT sample randomly
2. **Extract technique, NOT implementation** -- e.g., "border-weight encodes hierarchy" (technique) vs "4px/3px/1px for confidence levels" (implementation)
3. **Adapt to YOUR context** -- Your metaphor/pattern + mechanism technique = new implementation
```

Lines 909-920 (Per-category table):
```
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**

For EACH of the 5 mechanism categories, identify AT LEAST ONE mechanism that serves THIS content:

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| **Spatial** | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid | 1+ |
| **Hierarchy** | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 1+ |
| **Component** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 1+ |
| **Depth/Emphasis** | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap | 1+ |
| **Structure/Nav** | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table | 1+ |
```

Lines 921-931 (Justification and natural landing):
```
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

**Behavioral change:** Replaces "Sample 2-4 mechanisms most relevant to YOUR metaphor. DO NOT read all mechanisms." with full catalog reading + per-category breadth + justification for deployed AND rejected mechanisms.

---

### M2: Fractal Consistency CHECK -> GATE (MANDATORY)

**Status:** APPLIED (Wave 1)
**SKILL.md location:** Lines 1215-1261

**Exact text (key portions):**

Line 1215: `### Step 4.7 -- Fractal Consistency GATE (MANDATORY)`
Line 1217: `**BEFORE proceeding to Phase 5, you MUST complete this gate.**`

Lines 1221-1229 (Scale coverage table):
```
**Scale coverage table (MANDATORY deliverable):**

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
| Page | [How section sequence reflects pattern] | [Specific CSS] |
| Section | [How components within section reflect pattern] | [Specific CSS] |
| Component | [How content within component reflects pattern] | [Specific CSS] |
| Character | [How inline/text-level reflects pattern] | [Specific CSS] |
```

Lines 1231-1235 (Tier-calibrated requirements):
```
**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)
```

Lines 1237-1240 (Concrete Middle example):
```
**Concrete Middle-tier example (CRESCENDO, 2 scales):**
- **Page scale:** Sections progress from sparse to dense: `section-intro { padding: 64px 24px }` -> `section-build { padding: 32px 24px }` -> `section-peak { padding: 16px 24px }`.
- **Component scale:** Component headers sparser than bodies: `.component-label { font-size: 0.75rem; letter-spacing: 0.1em }` (sparse) while `.component-body { font-size: 1rem; line-height: 1.5 }` (dense).
- Both scales say "sparse-to-dense" -- that is fractal coherence.
```

Lines 1242-1252 (Passing and failing criteria):
```
**Passing criteria:**
- Table complete with ALL required scales for tier
- SAME pattern direction at each scale
- CSS evidence provided for each scale
- Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

**Failing criteria (any of):**
- Pattern reverses direction between scales
- Pattern exists at fewer than tier minimum scales
- No CSS evidence provided
- "Pattern" is decorative (color theme) not structural (density/hierarchy)
```

Line 1259: `**Sunset clause:** Re-evaluate this gate after 10 pipeline runs.`

**Behavioral change:** Transforms optional 10-line advisory check (~0% compliance) into MANDATORY gate with deliverable table, tier-calibrated scale requirements, concrete example with CSS values, and binary passing/failing criteria (100% expected compliance).

---

### M3: Container Width NON-NEGOTIABLE Rule

**Status:** APPLIED (Wave 1)
**SKILL.md location:** Lines 830-866

**Exact text (key portions):**

Lines 830-836:
```
**CONTAINER WIDTH GUARDRAILS (NON-NEGOTIABLE -- HIGHEST PRIORITY):**

| Guardrail | Value | Rationale | Override |
|-----------|-------|-----------|---------|
| **Container width at 1440px** | **940-960px** | 65-67% content-to-viewport ratio | **NEVER** |
| Minimum container width | 940px | Below this = narrow strip syndrome | NEVER |
| Maximum container width | 960px | Above this = edge-to-edge, no breathing | Rarely (full-bleed hero sections only) |
```

Lines 838-840:
```
**CRITICAL -- Container Width Priority:**
No metaphor may override the 940-960px container width.
```

Lines 846-856 (CORRECT/WRONG CSS):
```
**Example:**
/* WRONG -- metaphor forces narrow width */
.container { max-width: 700px; }

/* CORRECT -- internal padding creates narrow effect */
.container {
  max-width: 960px; /* Non-negotiable */
  padding: 0 120px; /* Internal padding creates "narrow" visual */
}
```

Lines 858-859 (Escape hatch):
```
**ESCAPE HATCH -- When Metaphor Demands Narrowness:**
Container at 960px + padding at 120px each side = 720px content width.
```

Lines 861-866 (Priority order + failure citation):
```
**Priority order when metaphor conflicts with container width:**
1. Container width 940-960px (NEVER compromise)
2. Metaphor fidelity (ADJUST expression to meet width floor)
3. Aesthetic preference (LAST priority)

**This is the #1 Phase D failure mode. 4/5 validation pages violated this.**
```

**Behavioral change:** Adds NON-NEGOTIABLE binary rule preventing the #1 Phase D failure mode. CORRECT/WRONG CSS examples eliminate ambiguity. Escape hatch preserves creative expression (internal padding) without width compromise.

---

### M5: Tier Classification and Pipeline Routing

**Status:** APPLIED (Wave 1)
**SKILL.md location:** Lines 68-143 (new Step 0D, including all supplementary text)

**Exact text (key portions):**

Lines 68-70:
```
### Step 0D: Tier Classification and Pipeline Routing
**BEFORE entering Phase 1, classify the target tier for this content.**
```

Lines 73-79 (Tier classification table):
```
| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-7). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |
```

Lines 81-97 (Mechanism count caveat + provenance):
```
**CRITICAL CAVEAT -- Mechanism Count as Proxy, Not Target:**
The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit.

**Provenance:** These counts were BACKWARD-ENGINEERED from existing pages:
- Variant B (Phase D best, built under "sample 2-4"): deployed 5 mechanisms across 2 categories
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories
- DD-006 (fractal, crown jewel): deployed ~16+ mechanisms
```

Lines 99-111 (Middle-tier pattern selection):
```
**For Middle-tier pages (SKIP Phases 1-3):**
You do NOT derive a metaphor. Instead, select a DENSITY PATTERN.

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column, sparse right |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |
```

Lines 123-124 (WHY Middle skips):
```
**WHY Middle skips Phases 1-3:** Middle uses content-structure mapping (content feature -> mechanism capability, direct mapping) instead of Ceiling's metaphor-driven selection (metaphor -> shared semantic dimension -> multiple mechanisms).
```

Lines 127-131 (Graceful degradation):
```
**Graceful degradation protocol:** If degrading from higher tier, MANDATORY DOCUMENTATION (3 items):
(a) What metaphor/pattern was attempted?
(b) Why was it abandoned?
(c) What would make the higher tier viable for this content?
```

Line 132: `**The tier model is a validated hypothesis.** ... Until validated, treat Middle tier specs as best hypothesis, not proven fact.`

**Also applied:** Old Step 0D renumbered to Step 0E at line 146.

**Behavioral change:** Introduces tier-based routing at Phase 0, enabling Middle-tier pages (40-50% of all content) to skip Phases 1-3 (saving 60+ minutes). Replaces metaphor derivation with density pattern selection for Middle tier.

---

### M8: Tier Deployment Level Framing

**Status:** APPLIED (Wave 1)
**SKILL.md locations:** Lines 136-142 (Step 0D) AND Lines 792-797 (Phase 4 header)

**Location 1 text (lines 136-142):**
```
**Tier distinction is NOT just count -- it's deployment level:**
- **Floor:** Component assembly only (0 custom mechanisms, Track 1 templates)
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (2-3 mechanisms encode SAME semantic)
- **Flagship:** Multi-pattern COMPOSITION (3+ density patterns with typed transitions)

**These deployment levels are validated hypotheses, not proven specifications.**
```

**Location 2 text (lines 792-797):**
```
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions
```

**Behavioral change:** Clarifies tier distinction is HOW mechanisms are deployed (individual vs combination vs multi-pattern), not just how many. Present at both routing decision (Phase 0) and implementation context (Phase 4).

---

## SECTION 2: UNAPPLIED MODIFICATIONS

### M4: Domain Family Check — NOT APPLIED

**Target:** SKILL.md Phase 3.5, Step 3.5C (lines 753-755)
**Wave:** 3 (audit integration)
**Current text at lines 753-755:**
```
3. **Does this metaphor appear in `/case-studies/_INDEX.md`?** (DO NOT READ full case studies, only titles)
   - If YES: Proceed to divergence justification (Step 3.5D)
   - If NO: Proceed to Phase 4
```
**What M4 would add:** Domain FAMILY matching (Structural/Natural/Cultural/Spatial/Temporal categories) instead of exact title matching. Same-family convergence triggers stricter divergence criteria (DIFFERENT on 3+ dimensions, mandatory regeneration if <3 differ).

### M6: Semantic Value Justification — NOT APPLIED

**Target:** SKILL.md Phase 4.2, after Translation Grammar lookup tables (~line 1089)
**Wave:** 2 (vocabulary expansion)
**What it would add:** Step 4.2B with 3-question framework (WHAT varies, WHY, WHY THESE SPECIFIC VALUES), tier-specific passing criteria (Middle: 80%+ pattern logic, Ceiling: 90%+ metaphor logic, Flagship: 95%+ multi-dimensional).
**Note:** The CONTENT of M6 IS applied to DOC-6 (semantic-rules.md lines 282-379) but NOT to SKILL.md itself. The documentation enrichment exists; the skill instruction does not.

### M7: Mechanism Combination Guidance — NOT APPLIED

**Target:** SKILL.md Phase 4, after Step 4.2B
**Wave:** 2 (vocabulary expansion)
**What it would add:** Step 4.2C with 6 proven combination families, anti-combination warnings, Ceiling 2+ and Flagship 3+ combination requirements.
**Note:** The CONTENT of M7 IS available in DOC-2 (mechanism-combinations.md) but NOT in SKILL.md itself.

### M9-M11: PA Skill Modifications — NOT APPLIED

**Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Wave:** 3 (audit integration)
- M9: 8 semantic audit questions (PA-SEM-01 through PA-SEM-08)
- M10: Mode 5 Grammar-vs-Derivative validation protocol
- M11: Per-tier audit scope for Mode 3

---

## SECTION 3: C-ENRICHMENT / DOCUMENTATION ENRICHMENT INVENTORY

### PRE-1: Category Labels on Mechanism Catalog — VERIFIED APPLIED

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Location:** Lines 52-89

**Verified content:**
- "Mechanism Categories (5 Property Families)" table at lines 52-62 with 5 categories (Spatial/S, Hierarchy/H, Component/C, Depth-Emphasis/D, Structure-Navigation/N), mechanism number assignments, and governance descriptions
- "CRITICAL DISTINCTION: Same Catalog, Different Selection Logic" at lines 64-85 explaining Middle (content-structure mapping) vs Ceiling (metaphor-driven multi-channel coherence) with concrete CSS examples
- "Multi-category note" and "Per-category selection protocol" at lines 87-89

### DOC-1: Extraction Provenance — VERIFIED APPLIED

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Location:** Lines 93-126

**Verified content:**
- "Provenance and Family Resemblance" section header
- "Where These Mechanisms Come From" (extracted from showcase pages during Phase C)
- "Family Resemblance Is Expected" with 4-column distinction table (GOOD: same mechanisms, different values/metaphor/semantic reasoning vs BAD: same mechanisms, same values/metaphor)
- "Validation Test" ("If two pages both use border-weight gradient, do they encode DIFFERENT semantics?")
- "Core Principle" statement: "Mechanisms ARE showcase DNA... This is GRAMMAR fluency, not failure to diverge."

### DOC-2: Mechanism Combination Catalog — VERIFIED APPLIED

**File:** `design-system/compositional-core/grammar/mechanism-combinations.md` (NEW file)

**Verified content:**
- 6 proven combination families (Hierarchy Triad, Depth Triple, Density Triple, Zone Pair, Component Pair, Emphasis Pair)
- OD-004 geological confidence example with CSS evidence
- Key distinction: independent deployment (Middle) vs combined deployment (Ceiling)
- "CUSTOMIZE, do not copy" warning

### DOC-3: "Why Both Layers Exist" in Case Studies — NOT FOUND

**Target:** `design-system/compositional-core/case-studies/README.md`
**Search performed:** Grep for "Why Both Layers", "two-layer architecture", "grammar tools case studies" across case-studies/ directory
**Result:** NO MATCHES FOUND. This enrichment is either not applied, applied to a different location, or applied with different wording.
**Impact:** Low -- the concept IS explained in the compositional-core/CLAUDE.md (Jazz Real Book section) and mechanism-catalog.md (Selection Logic section). The specific case-studies/README.md target may have been skipped as redundant.

### DOC-4: Vocabulary-vs-Library CSS Example — VERIFIED APPLIED

**File:** `design-system/compositional-core/CLAUDE.md`
**Location:** After "Jazz Real Book Model" section

**Verified content:** Extensive concrete CSS example showing:
- Mechanism (abstract): Border-Weight Gradient with transferable pattern
- Implementation 1 (geological): .stratum--bedrock with semantic justification
- Implementation 2 (architectural): .floor--basement with different semantic justification
- Name Test, Transfer Test, and Semantic Independence Test applications
- Key differences table (CSS pattern / what it encodes / metaphor / class names / justification)

### DOC-5: Fresh-Eyes Confusion Fixes — STATUS UNCERTAIN

**Target:** `ephemeral/doc-enrichment/03-ENTRY-POINT.md`
**Not verified in this audit.** Would require reading the entry point file to confirm 6 action items (acronym legend, inline definitions, Always-Load expansion, Name/Transfer Test definitions, "which 8-10" clarification, "sample 2-4" history).

### DOC-6: Semantic Value Framework — VERIFIED APPLIED

**File:** `design-system/compositional-core/guidelines/semantic-rules.md`
**Location:** Lines 282-379

**Verified content:**
- "Semantic Value Framework" section header (line 282)
- "The 3-Question Test" (Q1: WHAT varies, Q2: WHY, Q3: WHY THESE SPECIFIC VALUES)
- "Tier-Specific Justification Depth" table (Floor: lookup, Middle: pattern logic, Ceiling: metaphor logic, Flagship: multi-dimensional)
- "Passing Criteria" by tier (Floor: none, Middle: 80%+, Ceiling: 90%+, Flagship: 95%+)
- "Red Flags" section (4 indicators of arbitrary values)
- 2 Before/After CSS Examples (section padding, border-weight)
- "PA-SEMANTIC Integration" connecting to PA-SEM-01 through PA-SEM-08

---

## SECTION 4: PREVIOUS PROMPT STRUCTURE ANALYSIS (48/48)

### 4.1 Structural Architecture (10 Sections, 1,336 Lines)

| Section | Lines | Purpose |
|---------|-------|---------|
| HOW TO USE | 11-17 | 5-step execution protocol, self-containment claim |
| SEC 1: PROJECT CONTEXT | 23-101 | What KortAI is, 6-layer ontology, Phase D results, tier model, WHY enrichment needed |
| SEC 2: CURRENT SKILL STATE | 104-156 | Both skills mapped (phase-by-phase with line ranges), 7+3 identified weaknesses |
| SEC 3: PRE-REQUISITES | 159-251 | 3 blocking pre-reqs with exact file paths, current/replacement text, success criteria |
| SEC 4: SKILL MODIFICATIONS | 255-823 | All 11 modifications: wave, priority, risk, dependencies, CURRENT/REPLACEMENT text, WHY |
| SEC 4.5: INTERACTION CHECKS | 974-992 | 3 compound effect types (Contradictory, Multiplicative, Goodhart's Law) |
| SEC 5: DOC MODIFICATIONS | 995-1090 | DOC-1 through DOC-6, each with target, location, content, source |
| SEC 6: EXECUTION ORDER | 1092-1177 | 4 phases with ordering, dependencies, CHECKPOINT with decision matrix |
| SEC 7: VALIDATION | 1186-1216 | Per-modification (5 checks), integration (5 checks), builder confidence test |
| SEC 8: ANTI-PATTERNS | 1220-1250 | 6 explicit "DO NOT" rules with failure mode examples |

### 4.2 Properties That Drove 48/48

**A. Self-Contained Completeness**
- "You should need NOTHING beyond this document to create the plan" (line 20)
- Every modification includes CURRENT TEXT with approximate line numbers AND exact REPLACEMENT TEXT
- All file paths specified; all success criteria defined

**B. Binary Precision Throughout**
- Every rule is MEASURABLE: "940-960px" not "reasonable width"
- Every requirement is TIER-GATED: "Floor: EXEMPT, Middle: 2 scales, Ceiling: 4 scales, Flagship: 5 scales"
- Language is MANDATORY/NEVER/MUST, never SHOULD/CONSIDER/PREFERABLY

**C. CURRENT TEXT / REPLACEMENT TEXT Pattern**
- Exact markdown from the skill used (searchable, verifiable)
- No paraphrasing -- executor can FIND the text in the file
- Both states shown -- no ambiguity about what changes

**D. Context-First Architecture**
- Sections 1-2 provide FULL context (what KortAI is, what Phase D proved, current skill state)
- Section 3 provides blocking prerequisites
- Section 4 provides modifications ONLY AFTER context is established
- WHY sections after every modification explain research basis

**E. Explicit Anti-Patterns (Section 8)**
- "Do NOT overwrite entire skill files" -- prevents catastrophic loss
- "Do NOT add judgment-based instructions" -- enforces binary-rules principle
- "Do NOT exceed the complexity budget" -- prevents skill bloat
- "Do NOT create template convergence" -- prevents defeating anti-gravity

**F. Decision Matrix at Checkpoint**
- 4-quadrant matrix (Engagement x Novelty = Designed/Under-designed x Novel/Derivative)
- Each quadrant has specific action: PROCEED / REVISE M1 + ADD M19 / TIER BOUNDARY WRONG / WAVE 2 NEEDED
- "When experiment contradicts predictions" section with modify-skill vs modify-methodology vs modify-tier-model routing

**G. Wave Structure with Dependencies**
- Modifications ordered by dependency, not priority
- Wave 1 enables Wave 2 (M2/M3/M5/M8 before M1/M6/M7)
- PRE-requisites block Wave 1 (PRE-1 before M1)
- CHECKPOINT stops execution before over-committing

### 4.3 Concrete Lessons for New Master Prompt

1. **Context -> Instructions -> Validation -> Anti-patterns** structure
2. **Binary rules for ALL builder constraints** -- no judgment calls
3. **Concrete CSS examples** for every spatial decision -- builders need to SEE correct vs wrong
4. **Per-category checklist** as mandatory deliverable -- binary compliance
5. **Self-contained** -- builder needs NOTHING beyond the prompt + always-load files
6. **Explicit "what to skip"** -- Middle skips Phases 1-3, stated EARLY and CLEARLY
7. **Tier-gated requirements** for every instruction
8. **Anti-pattern examples** showing WRONG alongside CORRECT
9. **Escape hatches** with mandatory degradation documentation
10. **Repeating critical rules at multiple locations** (M8 appears at both Phase 0 and Phase 4)

---

## SECTION 5: DISCREPANCY ANALYSIS

### Discrepancy 1: M1 Applied Despite Plan Saying Pending

**Evidence:**
- Master execution prompt line 1121: "Next: Proceed to CHECKPOINT. Do NOT apply Wave 2 yet."
- Master execution prompt line 1160: "M1 (Per-Category Minimum) -- highest leverage change" listed under Wave 2
- SKILL.md lines 909-931: M1 content IS present with exact text from the master prompt's replacement specification

**Resolution:** M1 was applied during Wave 1, likely during M5 insertion (which restructured Phase 4 mechanism access). The new master prompt should treat M1 as APPLIED.

### Discrepancy 2: Natural Landing Zone Count Inconsistency

**M1 (SKILL.md lines 925-929):**
- Floor: 5, Middle: 5-10, Ceiling: 8-12, Flagship: 12-15

**M8 (SKILL.md lines 792-797):**
- Floor: 0, Middle: 8-10, Ceiling: 12-15, Flagship: 16-18

**Master execution prompt tier model (lines 64-69):**
- Floor: 5, Middle: 8-10, Ceiling: 12-15, Flagship: 16-18

The M1 ranges are narrower (Ceiling 8-12 vs M8's 12-15, Flagship 12-15 vs M8's 16-18). The Floor values differ (5 vs 0). These ranges overlap but are not identical. The new master prompt should present ONE authoritative set.

**Recommended resolution:** Use the M8/master execution prompt values (Floor: 5, Middle: 8-10, Ceiling: 12-15, Flagship: 16-18) as the canonical set, since they match the original tier model. M1's narrower ranges may reflect "natural landing WITH per-category minimums enforced" which naturally produces fewer total due to fit-driven selection.

### Discrepancy 3: DOC-3 Not Found

**Evidence:** Master execution prompt line 1119 states "DOC-1 through DOC-6 applied." DOC-3 target: "Why Both Layers Exist" in case-studies/README.md. Grep for this content returned NO MATCHES in case-studies/ directory.

**Impact:** Low. The concept is covered in compositional-core/CLAUDE.md (Jazz Real Book section) and mechanism-catalog.md (Selection Logic section). May have been intentionally skipped as redundant.

---

## SECTION 6: COMPLETE LINE MAP

### Applied Modifications in SKILL.md

| Mod | SKILL.md Lines | Section | Key Change |
|-----|---------------|---------|------------|
| M5 | 68-143 | Step 0D (new) | Tier routing table, density patterns, graceful degradation |
| M8-Loc1 | 136-142 | Inside Step 0D | Deployment level framing + validated hypothesis caveat |
| — | 146 | Step 0E (renumbered) | Old Step 0D -> 0E (Library Access Prohibition) |
| M8-Loc2 | 792-797 | Phase 4 header | Deployment levels with mechanism count ranges |
| M3 | 830-866 | Phase 4.0 guardrails | Container width 940-960px NON-NEGOTIABLE |
| M1 | 903-931 | Phase 4.0 extraction | Per-category table + justification + natural landing |
| M2 | 1215-1261 | Step 4.7 | Fractal gate with tier requirements, concrete example, sunset clause |

### Unapplied Modifications

| Mod | Target File | Target Location | Wave |
|-----|------------|----------------|------|
| M4 | SKILL.md | Phase 3.5, Step 3.5C (~line 753) | 3 |
| M6 | SKILL.md | Phase 4.2 (~after line 1089) | 2 |
| M7 | SKILL.md | Phase 4, after M6 | 2 |
| M9 | PA skill | After Tier 2 questions | 3 |
| M10 | PA skill | After Mode 4 | 3 |
| M11 | PA skill | Mode 3 description | 3 |

### Documentation Enrichments

| Enrichment | Target File | Status |
|-----------|------------|--------|
| PRE-1 | mechanism-catalog.md lines 52-89 | VERIFIED APPLIED |
| DOC-1 | mechanism-catalog.md lines 93-126 | VERIFIED APPLIED |
| DOC-2 | mechanism-combinations.md (new file) | VERIFIED APPLIED |
| DOC-3 | case-studies/README.md | **NOT FOUND** |
| DOC-4 | compositional-core/CLAUDE.md (after Jazz Real Book) | VERIFIED APPLIED |
| DOC-5 | ephemeral/doc-enrichment/03-ENTRY-POINT.md | UNCERTAIN |
| DOC-6 | semantic-rules.md lines 282-379 | VERIFIED APPLIED |

---

## SECTION 7: RECOMMENDATIONS FOR NEW MASTER PROMPT

### Must Include From Skills

1. **Container width 940-960px** (M3, lines 830-866) -- the #1 Phase D failure mode, binary rule
2. **Per-category mechanism deployment table** (M1, lines 909-920) -- the highest-leverage change
3. **Tier classification routing table** (M5, lines 73-79) -- determines what phases to skip
4. **Density pattern selection** (M5, lines 105-111) -- CRESCENDO/F-PATTERN/BENTO/PULSE
5. **Fractal gate tier requirements** (M2, lines 1231-1235) -- Middle needs 2 scales (Page + Component)
6. **Concrete CRESCENDO example** (M2, lines 1237-1240) -- most actionable guidance for Middle
7. **Deployment level framing** (M8, lines 136-140) -- Middle = individual, Ceiling = combination
8. **Mechanism-count-as-proxy caveat** (M5, lines 81-97) -- prevents Goodhart's Law
9. **Justification requirements** (M1, lines 921-924) -- deployed AND rejected mechanisms

### Must NOT Include

1. **Full SKILL.md text** (1,583 lines) -- reference it, don't replicate
2. **Unapplied modifications** (M4, M6, M7, M9-M11) -- not in current skill, would confuse builder
3. **Phase 1-3 details** for Middle builds -- Middle SKIPS these phases
4. **Wave 2/3 planning** -- irrelevant to the Middle-tier builder

### Structural Patterns to Adopt

1. **Self-containment** -- builder needs nothing beyond the prompt
2. **Binary rules** -- MEASURABLE, not JUDGMENTAL
3. **CORRECT/WRONG CSS examples** -- for container width, padding, mechanism deployment
4. **Tier-gated everything** -- every instruction specifies which tiers it applies to
5. **Context before instructions** -- WHY before WHAT
6. **Explicit anti-patterns** -- what NOT to do, with examples
7. **Decision matrix** for experiment outcomes
8. **Repeating critical rules** at multiple locations (as M8 does)

---

## SECTION 8: KEY FINDINGS SUMMARY

1. **All 5 applied M-modifications confirmed** in SKILL.md with exact line numbers and text
2. **M1 applied despite Wave 2 scheduling** -- "sample 2-4" is fully replaced in current SKILL.md
3. **Mechanism count discrepancy** between M1 and M8 natural landing zones (minor)
4. **DOC-3 gap** -- "Why Both Layers Exist" not found in case-studies/ (minor, covered elsewhere)
5. **Middle-tier path fully executable** in current skill: Step 0D -> skip Phases 1-3 -> Phase 4.0 -> per-category deployment -> fractal gate (2 scales) -> Phase 5 output
6. **48/48 prompt success driven by:** self-containment, binary precision, CURRENT/REPLACEMENT text pattern, context-first architecture, explicit anti-patterns, decision matrix at checkpoint
7. **DOC-6 semantic value framework** applied to semantic-rules.md but NOT yet integrated into SKILL.md as M6 -- the documentation exists, the skill instruction referencing it does not

---

**END AUDIT**

**Files audited:**
- `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md` (1,583 lines, read in full)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/14-master-execution-prompt.md` (1,336 lines, read in full)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md` (lines 1-140 verified)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-combinations.md` (lines 1-50 verified)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/guidelines/semantic-rules.md` (lines 275-379 verified)
