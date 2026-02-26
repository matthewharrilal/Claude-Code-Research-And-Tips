# Plan Detail Enrichment: Phase 2 + Wave 2 + Wave 3 + Adjustments

**Date:** 2026-02-15
**Agent:** detail-enricher
**Team:** plan-revision
**Purpose:** Enrich sparse plan sections with granular execution detail from source files

---

## HOW TO USE THIS DOCUMENT

This enriches the sparse sections in `~/.claude/plans/snazzy-skipping-garden.md`:
- **Phase 2 Documentation Mods:** Currently one-line bullets → expand with exact locations + content sources
- **Wave 2 (M1, M6, M7):** Currently 2 lines → expand with what they do, where they go, experiment gates
- **Wave 3 (M4, M9, M10, M11):** Currently 2 lines → expand with modification details, which skill files
- **7 Adjustments:** Currently descriptions only → provide exact text to add/replace

---

## PART 1: Phase 2 Documentation Mods Detail

**SOURCE FILES:**
- `ephemeral/session-insights/06-enrichment-actions.md` (16 concrete actions with DRAFTED TEXT)
- `ephemeral/session-insights/04-tier-architecture.md` (combination families for DOC-2)
- `ephemeral/session-insights/03-semantic-framework.md` (semantic framework for DOC-6)

---

### DOC-1: Add Extraction Provenance to Mechanism Catalog

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`

**Location:** After line 49 (end of "Extraction Method" section)

**Priority:** HIGH (addresses vocabulary vs library distinction)

**Drafted text source:** `06-enrichment-actions.md` lines 43-90

**Key content to add:**
- **Where mechanisms come from:** Extracted FROM showcase pages (DD-006, OD-004, CD-006) during Phase C
- **Family resemblance is expected:** Pages using catalog mechanisms will have STRUCTURAL SIMILARITY to showcases (this is identity, not convergence)
- **The distinction:** Family resemblance (GOOD) = same mechanisms, different values/metaphor/section count vs Template convergence (BAD) = same mechanisms AND same values/metaphor/count
- **Validation test:** "If two pages use border-weight gradient, do they encode DIFFERENT semantics?" (YES = vocabulary usage, NO = copying)
- **Core principle:** "Mechanisms ARE showcase DNA. Deploying showcase mechanisms produces showcase-adjacent structure. This is GRAMMAR fluency, not failure to diverge."

**Exact section:** Lines 45-90 in `06-enrichment-actions.md` contain the full markdown-ready text block starting with "### Provenance and Family Resemblance"

---

### DOC-2: Add Combination Catalog (NEW FILE)

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-combinations.md` (NEW)

**Location:** Place in `design-system/compositional-core/grammar/` alongside `mechanism-catalog.md`

**Priority:** HIGH (enables Ceiling-tier combination deployment)

**Drafted text source:** `04-tier-architecture.md` lines 188-452 (PART 2: Mechanism Combination Map)

**Key content sections:**
1. **Combination Families (5 families):**
   - **Family A: Hierarchy Encoding** — Border-Weight (#1) + Spacing (#4) + Typography (#11) encoding importance/certainty (proven in OD-004, DD-006)
   - **Family B: Zone Differentiation** — Zone Backgrounds (#7) + Border-Color (#9) encoding spatial sections (proven in OD-004, DD-001)
   - **Family C: Density Rhythm** — Dense/Sparse (#5) + Spacing (#4) + Backgrounds (#7) encoding pacing (proven in DD-006, DD-001)
   - **Family D: Component Structure** — 2-Zone DNA (#2) + Typography (#11) encoding label/body split (universal across ALL case studies)
   - **Family E: Depth Encoding** — Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) encoding layering/stratification (proven in OD-004, DD-004)

2. **Mechanism Combination Matrix** (lines 351-365) — cross-property combination analysis showing which mechanisms from DIFFERENT categories combine powerfully

3. **Anti-Combinations** (lines 367-433) — 3 conflict types with examples:
   - Semantic Overload: Border-weight encoding TYPE and PRIORITY simultaneously
   - Perceptual Contradiction: Sparse padding + dense background on same element
   - Redundant Encoding: Border-weight + border-color BOTH encoding priority

4. **Combination Catalog Table** (lines 435-452) — proven pairs/triples with tier guidance:
   - Middle tier: Use proven PAIRS (2 mechanisms)
   - Ceiling tier: Use proven TRIPLES (3+ mechanisms)
   - Flagship tier: Use multiple TRIPLES across different patterns

**Exact content:** Lines 188-452 in `04-tier-architecture.md` contain the complete section titled "PART 2: MECHANISM COMBINATION MAP" — extract this verbatim, format as new file

**CRITICAL NOTE:** Add anti-copying warning per Adjustment #2 (convert judgment rule to binary check)

---

### DOC-3: Add "Why Both Layers Exist" to Case Studies README

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/README.md`

**Location:** After line 309 (end of "Why This Layer Exists")

**Priority:** HIGH (clarifies vocabulary vs library distinction at usage level)

**Drafted text source:** `06-enrichment-actions.md` lines 94-278

**Key content sections:**
1. **The Architectural Question:** If mechanisms are extracted FROM case studies, why keep both?
2. **Two-Layer Architecture:** Grammar = tools (abstracted mechanisms) vs Case Studies = usage examples (mechanisms in context)
3. **What happens with ONLY grammar:** Builders know mechanisms exist but NOT how they LOOK in practice → copy from training distribution
4. **What happens with ONLY case studies:** Builders see implementations but can't separate TRANSFERABLE from METAPHOR-SPECIFIC → copy geological vocabulary
5. **How layers work together:** Phase 0-3 (no library), Phase 4 (read grammar), Phase 5 (verify divergence via case studies), Phase 6 (build)
6. **The abstraction relationship:** Case Studies → Grammar extraction (Name Test + Transfer Test) → Grammar → Builder application (different metaphor, different values)
7. **Jazz Real Book Analogy:** Theory book (chord voicings = grammar) + Real Book (standards = case studies) → both needed for fluency

**Exact section:** Lines 106-278 in `06-enrichment-actions.md` contain the full markdown block starting with "## Why BOTH Grammar and Case Studies?"

---

### DOC-4: Add Concrete CSS Example to CLAUDE.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md`

**Location:** After line 349 (end of "Jazz Real Book Model" section)

**Priority:** BLOCKING (P0) — makes abstract distinction concrete

**Drafted text source:** `06-enrichment-actions.md` lines 282-460

**Key content sections:**
1. **Mechanism (Vocabulary — Transferable):** Border-weight gradient CSS pattern (4px/3px/2px/1px) encoding hierarchy (ABSTRACT semantic domain)
2. **Implementation 1 (Library — Geological):** OD-004's geological metaphor using 4px bedrock, 3px sediment, 2px topsoil, 1px surface with justifications
3. **Implementation 2 (Your Application — Architectural):** Hypothetical architectural metaphor using 4px basement, 3px ground, 2px upper, 1px roofline with DIFFERENT justifications
4. **Comparison table:** Same CSS pattern, different metaphors, different values, different semantics
5. **Validation tests:** Name Test, Transfer Test, Semantic Independence Test showing this is grammar fluency not template copying
6. **Why this matters:** "One concrete CSS example is worth 1000 words of explanation"

**Exact section:** Lines 294-460 in `06-enrichment-actions.md` contain the complete markdown block starting with "### Concrete Example: Vocabulary vs Library in CSS"

---

### DOC-5: Add Entry Point Confusions Fix

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/doc-enrichment/03-ENTRY-POINT.md`

**Location:** Section flagging common confusions

**Priority:** MEDIUM (quality-of-life for builders)

**Drafted text source:** Plan already mentions this, but ADD category name evolution note per Adjustment #6

**Key addition:**
- **Category name inconsistency note:** Master execution prompt uses 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav) which differ from HANDOFF abstract names (Spatial, Temporal, Material, Behavioral, Relational). The master prompt categories are grounded in actual mechanism assignments and operationally correct. Use master prompt categories.

**Context:** Plan lines 19-21 identify this as a critical tension. Entry point should flag that category names evolved from abstract (HANDOFF) to concrete (mechanism-based).

---

### DOC-6: Add Semantic Value Framework to semantic-rules.md

**File:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/guidelines/semantic-rules.md`

**Location:** After line 278 (end of current content, new section)

**Priority:** HIGH (completes semantic vs arbitrary test framework)

**Drafted text source:** `06-enrichment-actions.md` lines 484-767 AND `03-semantic-framework.md` full document (991 lines with 5 examples, audit checklists)

**Key content sections from 06-enrichment-actions.md:**
1. **The Test:** "Why this value and not the adjacent values on the token scale?" → Decision tree (content structure / metaphor logic / pattern logic = SEMANTIC; token availability / aesthetics = ARBITRARY)
2. **Per-Tier Semantic Source:** Floor (lookup, no reasoning) → Middle (pattern logic, 1D) → Ceiling (metaphor logic, 2D) → Flagship (multi-dimensional, 3D+)
3. **3-Question Validation Test:** Q1: What varies? Q2: Why vary? Q3: Why THESE values?
4. **Tier-Specific Passing Criteria:** Floor (100% from inventory), Middle (80%+ pattern), Ceiling (90%+ metaphor), Flagship (95%+ multi-dimensional)
5. **Red Flags:** Visual aesthetics, token availability, copied showcase values, inconsistent ratios
6. **PA Integration:** New questions for Middle (PA-SEMANTIC-01, 02, 03) and Ceiling (PA-SEMANTIC-04, 05, 06) and Flagship (PA-SEMANTIC-07, 08)
7. **Summary spectrum diagram:** ARBITRARY ← Floor (lookup) | Middle (pattern) | Ceiling (metaphor) | Flagship (multi-layer) → SEMANTIC

**Additional detail source:** `03-semantic-framework.md` contains:
- Complete 991-line analysis with concrete before/after examples (5 examples covering callout padding, section progression, border weights, backgrounds, multi-dimensional)
- Audit checklists for builders and auditors
- Per-value justification framework with tier-specific depth requirements
- Perceptual audit integration protocol

**Exact sections:**
- Lines 496-767 in `06-enrichment-actions.md` = markdown-ready block starting "## Gap 6: Semantic vs. Arbitrary Value Assignment"
- Full `03-semantic-framework.md` for additional detail and examples

---

## PART 2: Wave 2 Enrichments (M1, M6, M7)

**SOURCE FILES:**
- `ephemeral/session-insights/08-skill-enrichment-plan.md` lines 62-499 (M1, M6, M7 full specs)
- `ephemeral/session-insights/14-master-execution-prompt.md` lines 274-783 (M1, M6, M7 sections)

**EXPERIMENT GATE:** Wave 2 executes ONLY AFTER Middle-tier experiment produces results

---

### M1: Replace "Sample 2-4 Mechanisms" with Per-Category Minimum

**What it does:** Changes mechanism selection from arbitrary count (2-4) to per-category minimums (Spatial: 1+, Hierarchy: 1+, Component: 1+, Depth/Emphasis: 1+, Structure/Nav: 1+) + justification requirement

**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`

**Location:** Lines ~783-787 (current "Sample 2-4 mechanisms" text)

**Full specification source:** `08-skill-enrichment-plan.md` lines 62-102 OR `14-master-execution-prompt.md` lines 274-339

**Key changes:**
1. **Read FULL catalog** (not sample 2-4) — all 18 mechanisms, ~869 lines
2. **Per-category deployment table:**
   - Spatial: #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid → minimum 1+
   - Hierarchy: #1 Border-Weight, #4 Spacing Compression, #11 Typography → minimum 1+
   - Component: #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left, #17 Code Block → minimum 1+
   - Depth/Emphasis: #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap → minimum 1+
   - Structure/Nav: #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer Mirror, #18 Data Table → minimum 1+
3. **Justification requirement (MANDATORY):** For EACH deployed mechanism, document WHY it serves THIS content. For AT LEAST 3 rejected mechanisms, document WHY they don't fit.
4. **Natural landing by tier:** Floor (5, exempt from per-category), Middle (5-10), Ceiling (8-12), Flagship (12-15)

**Exact replacement text:** Lines 308-337 in `14-master-execution-prompt.md` contain the full markdown block starting with "**Per-category mechanism deployment (MANDATORY for Middle-tier+):**"

**Experiment gate condition:** Apply M1 ONLY IF Middle-tier experiment shows 4-5 novelty signals (grammar fluency). If experiment shows derivative signals (convergence), DO NOT apply M1 — revise approach instead.

---

### M6: Add Semantic Value Justification Requirement

**What it does:** Adds MANDATORY 3-question test for EVERY varying CSS value (Q1: What varies? Q2: Why vary? Q3: Why THESE specific values?) with tier-specific semantic depth requirements

**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`

**Location:** Phase 4.2 (Translation Grammar), after lookup tables (~line 900), INSERT as new Step 4.2B (or renumber existing 4.2B to 4.2C)

**Full specification source:** `08-skill-enrichment-plan.md` lines 356-425 OR `14-master-execution-prompt.md` lines 606-715

**Key additions:**
1. **3-Question Protocol:** Q1 (What varies?), Q2 (Why vary? — content/metaphor/pattern NOT "token availability"), Q3 (Why THESE values not adjacent ones?)
2. **Tier-specific depth table:**
   - Floor: None (lookup from component inventory)
   - Middle: Pattern logic ("CRESCENDO peak uses 16px because complexity peaks here")
   - Ceiling: Metaphor logic ("Bedrock uses 40px because geological consolidation = sparse")
   - Flagship: Multi-dimensional ("20px = confidence × journey × attention overlap")
3. **Deliverable format:** For each primary varying property, document property name, range, semantic driver, and specific value justifications
4. **Passing criteria:** Middle (80%+ pattern justified), Ceiling (90%+ metaphor justified), Flagship (95%+ multi-dimensional)
5. **Concrete examples:** Section padding progression (arbitrary 48→40→32 vs semantic 64→32→16 with ratio justification), border-weight gradient (arbitrary vs metaphor-driven)

**Exact insertion text:** Lines 620-715 in `14-master-execution-prompt.md` contain the full markdown block starting with "### Step 4.2B -- Semantic Value Justification"

**Overhead note:** Adds ~10-15 min documentation per build. Monitored via Type 5B check: "If Middle-tier overhead exceeds 25 minutes of documentation, simplify M6 to 'justify 3 most prominent spacing variations' instead of EVERY varying value."

**Experiment gate condition:** Apply M6 ONLY IF Middle-tier experiment validates that 8-10 mechanisms produce novel output. If derivative, M6 overhead is wasted on convergent output.

---

### M7: Add Mechanism Combination Guidance (Ceiling+ Only)

**What it does:** Adds Step 4.2C for Ceiling/Flagship tiers documenting COMBINATION deployment (2-3 mechanisms encoding SAME semantic dimension) with proven combination catalog

**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`

**Location:** Phase 4, after Step 4.2B (Semantic Value Justification), INSERT new Step 4.2C

**Full specification source:** `08-skill-enrichment-plan.md` lines 427-498 OR `14-master-execution-prompt.md` lines 718-783

**Key additions:**
1. **Definition:** Multiple mechanisms encoding SAME semantic. When semantic changes, MULTIPLE mechanisms shift TOGETHER = multi-channel coherence.
2. **Example:** OD-004 geological confidence — Border-Weight (4px→1px) + Spacing (40px→16px) + Backgrounds (light→dark) ALL encode confidence together
3. **Tier requirements:** Ceiling (2+ combinations with 2-3 mechanisms each), Flagship (3+ combinations across different patterns)
4. **Proven combination catalog table:**
   - **Hierarchy Triad:** Border-Weight (#1) + Spacing (#4) + Typography (#11) encoding importance/certainty (OD-004, DD-006)
   - **Depth Triple:** Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) encoding layering/depth (OD-004, DD-004)
   - **Density Triple:** Dense/Sparse (#5) + Spacing (#4) + Backgrounds (#7) encoding rhythm/pacing (DD-006, DD-001)
   - **Zone Pair:** Backgrounds (#7) + Border-Color (#9) encoding category/section (Middle tier)
   - **Component Pair:** 2-Zone DNA (#2) + Typography (#11) encoding structure (Middle tier)
   - **Emphasis Pair:** Border-Left (#10) + Solid Offset (#3) encoding featured content (Middle tier)
5. **Perceptual alignment principle:** Combinations work when mechanisms encode SAME semantic through DIFFERENT channels (all encode "importance" via magnitude). Fail when channels CONTRADICT (sparse padding + dense background).
6. **Anti-combination warnings:** Semantic overload, perceptual contradiction, redundant encoding with concrete examples
7. **CRITICAL customization note:** "These are VOCABULARY (proven patterns), not TEMPLATES (copy recipes). You MUST customize values for YOUR content. Using OD-004's exact values = template copying."

**Exact insertion text:** Lines 730-782 in `14-master-execution-prompt.md` contain the full markdown block starting with "### Step 4.2C -- Mechanism COMBINATION Deployment"

**Risk mitigation (per Adjustment #2):** Convert "customize, don't copy" judgment warning to binary check: "Your combination MUST encode a semantic that does NOT appear in any case study. If your Hierarchy Triad encodes 'confidence,' verify this semantic is not used by OD-004's Depth Triple."

**Experiment gate condition:** Apply M7 ONLY IF Middle-tier experiment succeeds AND DOC-2 (combination catalog) is complete. Without catalog, builders have no reference for proven combinations.

---

## PART 3: Wave 3 Enrichments (M4, M9, M10, M11)

**SOURCE FILES:**
- `ephemeral/session-insights/08-skill-enrichment-plan.md` lines 228-286 (M4), lines 563-623 (M9), lines 625-713 (M10), lines 715-756 (M11)
- `ephemeral/session-insights/14-master-execution-prompt.md` lines 478-534 (M4), lines 826-871 (M9), lines 875-929 (M10), lines 933-968 (M11)

**EXPERIMENT GATE:** Wave 3 executes ONLY AFTER Middle-tier experiment results are evaluated

---

### M4: Strengthen Phase 3.5 to Check Domain FAMILY (not just metaphor name)

**What it does:** Expands divergence check from exact metaphor match to DOMAIN FAMILY match (geological + architectural = BOTH "structural" = same family) with stricter passing criteria for same-family convergence

**Skill file:** `~/.claude/skills/tension-composition/SKILL.md`

**Location:** Lines 665-708 (Phase 3.5 Divergence Justification), specifically the metaphor check question

**Full specification source:** `08-skill-enrichment-plan.md` lines 228-286 OR `14-master-execution-prompt.md` lines 478-534

**Key changes:**
1. **Domain family categories (5 families):**
   - Structural: geological, architectural, mechanical, industrial, construction
   - Natural: botanical, biological, atmospheric, seasonal, ecological
   - Cultural: manuscript, theatrical, musical, culinary, ceremonial
   - Spatial: cartographic, navigational, territorial, astronomical
   - Temporal: historical, archaeological, evolutionary, developmental
2. **Same-family test:** "Would a layperson describe both metaphors using the same one-word category?" (Geological + Architectural → BOTH "structural")
3. **Decision routing:** DIFFERENT FAMILY → proceed to Phase 4. SAME FAMILY → divergence justification with STRICTER criteria.
4. **Modified Step 3.5D table for same-family:** 6 questions (independent derivation? different isomorphisms? different architecture? different vocabulary?)
5. **Passing criteria (STRICTER):** ALL 6 questions favor independence AND DIFFERENT on 3+ dimensions
6. **Failure consequence:** If < 3 dimensions differ → REGENERATION MANDATORY (no escape route). Constraint: "My metaphor MUST NOT be in the [structural/natural/cultural/spatial/temporal] family."

**Exact replacement text:** Lines 244-282 in `08-skill-enrichment-plan.md` contain the full replacement for Step 3.5D with domain families and same-family check

**Why Wave 3:** This is audit integration. Needs to be tested with actual Middle-tier builds first to see if domain family convergence is a real issue or theoretical concern.

---

### M9: Add Semantic Value Audit Questions to PA Skill

**What it does:** Adds 8 new PA-SEMANTIC questions (01-08) for tier-gated semantic validation, completing the semantic framework from M6

**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`

**Location:** After Tier 2 questions (after last PA question in "Standard Fifteen" section), INSERT new section

**Full specification source:** `08-skill-enrichment-plan.md` lines 570-621 OR `14-master-execution-prompt.md` lines 826-871

**Key additions:**
1. **Middle tier questions (pattern logic):**
   - PA-SEM-01: "For 3 most prominent spacing variations, justify each value against adjacent token values using pattern logic?"
   - PA-SEM-02: "Do spacing progressions use clear ratios (2:1, 3:1, 4:2:1) or arbitrary gradations?"
   - PA-SEM-03: "Can you explain WHY this pattern fits this content without referencing catalog?"
2. **Ceiling tier questions (metaphor logic):**
   - PA-SEM-04: "For primary metaphor, map 3 content structures to 3 metaphor structures with value justifications?"
   - PA-SEM-05: "Do metaphor-driven values encode metaphor SEMANTICS or just use metaphor VOCABULARY?"
   - PA-SEM-06: "Can you justify metaphor choice for THIS content without referencing showcase pages?"
3. **Flagship tier questions (multi-dimensional):**
   - PA-SEM-07: "Identify 2 values that encode 2+ semantic dimensions simultaneously. Explain overlap."
   - PA-SEM-08: "Are multi-dimensional values at NECESSARY overlaps or COINCIDENTAL overlaps?"
4. **Verdict integration:** Middle (MUST pass 01, 02), Ceiling (MUST pass 03, 04), Floor (EXEMPT), Flagship (MUST pass all 8)
5. **Pass/fail examples for each question**

**Exact insertion text:** Lines 838-864 in `14-master-execution-prompt.md` contain the full markdown table with all 8 questions and examples

**Dependency:** M6 must be applied first. These questions verify that semantic justifications exist and are tier-appropriate.

---

### M10: Add Grammar-vs-Derivative Audit Mode (Mode 5)

**What it does:** Adds new Mode 5 to PA skill for Middle-tier experiment validation using 5-test protocol (Blur Test, Fresh-Eyes Agent, Mechanism CSS Comparison, Side-by-Side Perception, Structural Similarity Score)

**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`

**Location:** After Mode 4 (Standalone), INSERT new Mode 5 section

**Full specification source:** `08-skill-enrichment-plan.md` lines 627-710 OR `14-master-execution-prompt.md` lines 875-929

**Key additions:**
1. **Purpose:** Test Middle-tier hypothesis: "8-10 mechanisms via lookup produce novel output, not derivative showcase copies"
2. **When to use:** AFTER building Middle-tier page (8-10 mechanisms, no metaphor)
3. **Duration:** 45-60 minutes, 5 agents (1 per test) + synthesis
4. **The 5 Tests:**
   - **Test 1: Blur Test** — Gaussian blur (20px) Middle page + showcases, compare structural fingerprints (Novel = distinct shapes; Derivative = same sectioning)
   - **Test 2: Fresh-Eyes Agent** — Zero-context agent views Middle + 3 showcases, asks which look similar (Novel = not grouped; Derivative = grouped with OD-004/DD-006)
   - **Test 3: Mechanism Expression Audit** — Extract CSS values for each mechanism, compare to showcases (Novel = <30% overlap; Derivative = >60% overlap)
   - **Test 4: Side-by-Side Perception** — Middle vs Variant B vs OD-004 (Novel = closer to Variant B; Derivative = closer to OD-004)
   - **Test 5: Structural Similarity Score** — 8-dimension quantitative score (0-2 each: header, section count, padding progression, backgrounds, border-weight, callout density, layouts, footer) (Novel = 0-6 points; Derivative = 10-16 points)
5. **Synthesis Framework table:** 5 tests × Novel/Derivative signals → Verdict (4-5 novel = PASS, 4-5 derivative = FAIL, mixed = build second page and retest)
6. **Deliverable:** `grammar-vs-derivative-report.md` with all test results + verdict

**Exact insertion text:** Lines 642-710 in `08-skill-enrichment-plan.md` contain the full Mode 5 specification with all 5 tests and synthesis table

**Risk note:** High risk (new mode, untested). Used ONLY for research/validation, not production builds. This is THE experiment validation mechanism.

---

### M11: Add Per-Tier Audit Scope (Tier-Gated Question Sets)

**What it does:** Modifies Mode 3 (Standard) audit to use tier-specific question sets instead of same 48 questions for all pages

**Skill file:** `~/.claude/skills/perceptual-auditing/SKILL.md`

**Location:** Mode selection section (lines ~331-401), MODIFY Mode 3 description

**Full specification source:** `08-skill-enrichment-plan.md` lines 715-756 OR `14-master-execution-prompt.md` lines 933-968

**Key changes:**
1. **Tier-specific scope table:**
   - Floor: PA-01 through PA-05 ONLY (soul check). Skip PA-06+ (no pattern/metaphor to audit).
   - Middle: PA-01 through PA-20 + PA-SEMANTIC-01, 02 (pattern logic check)
   - Ceiling: PA-01 through PA-45 + PA-SEMANTIC-03, 04 (metaphor logic check)
   - Flagship: PA-01 through PA-48 + PA-SEMANTIC-01 through 08 + multi-pattern composition check
2. **Multi-pattern composition check (Flagship only):**
   - [ ] 3+ distinct patterns identified (not just 3 sections with same pattern)
   - [ ] Typed transitions present (BREATHING/SMOOTH/BRIDGE/ABRUPT)
   - [ ] Transition CSS implemented (not just spacing)
   - [ ] Each pattern serves different content needs (not decorative)
3. **Efficiency rationale:** Don't audit what doesn't exist (Floor has no pattern/metaphor), DO check what should exist (Flagship multi-pattern)

**Exact modification text:** Lines 737-753 in `08-skill-enrichment-plan.md` contain the updated Mode 3 description with tier-specific scope

**Dependency:** M9 must be applied first (PA-SEMANTIC questions must exist before they can be tier-gated).

---

## PART 4: The 7 Adjustments (Exact Text)

These adjustments from the plan cross-reference integrate reflection findings. Providing exact text for each.

---

### ADJUSTMENT 1: M5 Tier Routing — Add Hybrid Content Note

**Where:** M5 (Tier Routing), in the Middle tier PATTERN selection section

**Exact text to add after the pattern selection table:**

```markdown
**Hybrid content handling:**

If content is HYBRID (e.g., tutorial with embedded reference, narrative with comparison tables), select the DOMINANT pattern. Hybrid pattern composition is a Ceiling-tier capability, not Middle-tier.

**Example:** Tutorial with 3 API reference tables embedded → DOMINANT pattern is CRESCENDO (tutorial structure), reference tables use F-PATTERN locally within CRESCENDO sections.
```

**Integration point:** Lines 329-345 in master execution prompt (M5 pattern selection table) — add this immediately after the table

**Source:** Plan lines 65-66 (Tension 1 resolution)

---

### ADJUSTMENT 2: M7 Combinations — Convert Anti-Copying Warning to Binary Check

**Where:** M7 (Mechanism Combinations), the "CRITICAL -- Customize, don't copy" warning

**Current text (judgment rule):**

```markdown
**CRITICAL -- Customize, do not copy:**
These combinations are VOCABULARY (proven reinforcement patterns), not TEMPLATES (copy-paste recipes). You MUST customize values for YOUR content.
```

**Replace with (binary check):**

```markdown
**CRITICAL -- Semantic Uniqueness Check (MANDATORY):**

Your combination MUST encode a semantic that does NOT appear in any case study.

**Binary verification:**
1. Identify the semantic your combination encodes (e.g., "confidence," "structural importance," "reader attention")
2. Check case studies `_INDEX.md` for semantic matches:
   - OD-004 Hierarchy Triple encodes "confidence" → Your Hierarchy Triple CANNOT encode "confidence"
   - DD-006 Density Triple encodes "fractal rhythm" → Your Density Triple CANNOT encode "fractal rhythm"
3. If semantic match found → choose DIFFERENT semantic or DIFFERENT combination
4. Document: "My [Combination Name] encodes [semantic]. Verified: [semantic] is NOT used in [case study X, Y, Z]."

**This is checkable.** If your documented semantic appears in a case study's tension summary, the combination FAILS divergence.
```

**Integration point:** Lines 771-772 in master execution prompt (M7 anti-copying warning) — replace the judgment text with this binary check

**Source:** Plan lines 88-89 (M7 resolution)

---

### ADJUSTMENT 3: M8 Tier Framing — Add "Hypothesis, Not Proven Specification" Language

**Where:** M8 (Tier Framing), Location 1 text (after M5's tier table)

**Exact text to add:**

```markdown
**CRITICAL CAVEAT:**

These deployment levels are **validated hypotheses**, not proven specifications. The tier model is calibrated from showcase pages and Phase D validation, but it remains a BET on what richness levels different deployment approaches achieve.

**The Middle-tier experiment tests whether individual mechanism deployment (8-10 mechanisms, pattern-based, no metaphor) reaches the engagement threshold.** If it fails, the tier model requires revision.
```

**Integration point:** Lines 788-823 in master execution prompt (M8 Location 1) — add this after the tier deployment level text

**Source:** Plan lines 69-71 (M8 action)

---

### ADJUSTMENT 4: M2 + M6 — Add Sunset Clause (2 lines each)

**Where:** M2 (Fractal Gate) and M6 (Semantic Justification), end of each section

**Exact text to add to M2:**

```markdown
**Sunset protocol:** Re-evaluate this gate after 10 pipeline runs. If it has not caught a genuine issue in 3 consecutive runs, flag for review.
```

**Exact text to add to M6:**

```markdown
**Sunset protocol:** Re-evaluate this requirement after 10 builds. If 80%+ of justifications are formulaic (not revealing new insights), simplify to "justify 3 most prominent variations" instead of all.
```

**Integration points:**
- M2: After Phase 4.7 gate passing criteria (line ~408 in master prompt)
- M6: After Step 4.2B passing criteria (line ~656 in master prompt)

**Source:** Plan lines 166-167 (Tension T1 resolution)

---

### ADJUSTMENT 5: M5 Tier Routing — Add Degradation Documentation Requirement

**Where:** M5 (Tier Routing), after the tier classification decision tree

**Exact text to add:**

```markdown
**Graceful degradation protocol:**

If you attempt a higher tier but degrade to a lower tier during execution:

**MANDATORY DOCUMENTATION (3 items):**
1. What metaphor or pattern was attempted? (e.g., "geological stratification metaphor for API stability docs")
2. Why was it abandoned? (e.g., "content lacked hierarchical depth — only 2 certainty levels, not 4+ needed for geological strata")
3. What would make the higher tier viable for this content? (e.g., "add epistemic status markers to each API endpoint, creating 4-level confidence hierarchy")

**This creates friction without blocking degradation.** If you degrade 3+ times for the same content type, that's a SIGNAL the tier model is miscalibrated for that content.
```

**Integration point:** Lines 537-602 in master execution prompt (M5 tier classification section) — add at the end

**Source:** Plan lines 171-172 (Tension T2 resolution)

---

### ADJUSTMENT 6: DOC-5 Entry Point — Add Category Name Evolution Note

**Where:** DOC-5 (Entry Point Confusions), section on common misunderstandings

**Exact text to add:**

```markdown
**Category Name Evolution:**

**CONFUSION:** HANDOFF.md uses abstract category names (Spatial, Temporal, Material, Behavioral, Relational). The master execution prompt and M1 per-category minimum use different names (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav).

**WHY:** Category names evolved from abstract (HANDOFF research framing) to concrete (grounded in actual mechanism assignments). The master prompt categories are operationally correct — they match how mechanisms are actually USED in showcase pages.

**WHICH TO USE:** Use the master prompt / M1 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav). These are mechanism-deployment categories, not conceptual abstractions.

**Mapping (if needed):**
- Spatial (HANDOFF) ≈ Spatial (M1) — direct match
- Temporal (HANDOFF) ≈ Depth/Emphasis (M1) — temporal rhythm became emphasis patterns
- Material (HANDOFF) ≈ Component (M1) — material properties became component styling
- Behavioral (HANDOFF) ≈ Structure/Nav (M1) — behavioral interactions became navigation structures
- Relational (HANDOFF) ≈ Hierarchy (M1) — relational encoding became hierarchical encoding
```

**Integration point:** DOC-5 file, add as new section flagging this common confusion

**Source:** Plan lines 21, 78, 127 (category name tension + DOC-5 adjustment)

---

### ADJUSTMENT 7: Validation — Add Binary Location Test Proxies

**Where:** Section 7 (Validation Criteria), specifically the "Builder Confidence Test"

**Current text (judgment-based):**

```markdown
**Builder Confidence Test:** Can a builder find tier routing easily? Can they identify Middle-tier skip path?
```

**Replace with (binary proxies):**

```markdown
**Builder Location Test (BINARY):**

Spawn a fresh agent with NO context. Give them the enriched SKILL.md. Ask 3 questions with 30-second time limit each:

1. "Where is the tier routing step?" → PASS if found within 30 sec (Step 0D)
2. "Which phases does Middle tier SKIP?" → PASS if answered correctly (Phases 1-3)
3. "Where is the container width rule?" → PASS if found within 30 sec (Phase 4.0 guardrails)

**Passing criteria:** Fresh agent answers 3/3 correctly within time limits.

**Failing criteria:** Fresh agent cannot locate critical elements → indicates skill organization/signposting failure, not builder incompetence.
```

**Integration point:** Lines 1184-1215 in master execution prompt (Section 7 Validation) — replace Builder Confidence Test with this binary protocol

**Source:** Plan lines 147-149 (Validation resolution)

---

## SUMMARY

**Phase 2 (6 Documentation Mods):**
- All 6 have exact file paths, insert locations, and drafted text sources in `06-enrichment-actions.md`, `04-tier-architecture.md`, `03-semantic-framework.md`
- Executor can copy-paste from source files with line number references provided

**Wave 2 (M1, M6, M7):**
- Full specs in `08-skill-enrichment-plan.md` and `14-master-execution-prompt.md` with exact line ranges
- Experiment gate: Apply ONLY IF Middle-tier experiment succeeds (4-5 novelty signals)

**Wave 3 (M4, M9, M10, M11):**
- Full specs in same source files with line ranges
- Experiment gate: Apply ONLY AFTER Middle-tier results evaluated

**7 Adjustments:**
- Exact text provided for all 7 (hybrid content note, binary check, hypothesis framing, sunset clauses, degradation docs, category evolution, location test)
- All integrate into Wave 1/2/3 modifications or DOC-5

**NEXT STEP FOR EXECUTOR:** Use this document to populate the sparse sections in the plan. All source material and exact text is now available.
