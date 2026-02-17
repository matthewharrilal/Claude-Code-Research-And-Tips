# DOC Enrichment Audit — What the Master Prompt Must Reference

**Date:** 2026-02-15
**Author:** doc-enrichment-auditor
**Purpose:** Audit all DOC-1 through DOC-6 enrichment targets, extract exactly what was added, and specify what the master prompt must reference from each.

---

## Audit Methodology

Read every line of all 6 enrichment target files plus the checklist changelog (21-checklist-changelog.md) and DOC-UPDATES tracking file (DOC-UPDATES.md). For each DOC target, extracted: (1) exact content that was enriched/added, (2) line numbers, (3) what the master prompt MUST reference.

---

## DOC-1: mechanism-catalog.md (1,012 lines)

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md`

### Enrichments Found

#### 1A. Provenance and Family Resemblance Section (Lines 93-127)

Added section explaining WHERE the 18 mechanisms come from and WHY family resemblance with showcase pages is expected and intentional.

**Key content added:**
- All 18 mechanisms extracted from showcase pages during Phase C (OD-004, DD-006, CD-006)
- Family resemblance = shared vocabulary = design system coherence (GOOD)
- Template convergence = copied values without semantic reasoning (BAD)
- Validation Test: "If two pages both use border-weight gradient (#1), do they encode DIFFERENT semantics?" YES = vocabulary, NO = template copying
- Core Principle: "Mechanisms ARE showcase DNA. Deploying showcase mechanisms produces showcase-adjacent structure. This is GRAMMAR fluency, not failure to diverge."
- Name Test and Transfer Test reaffirmed as verification tools

**Specific table (Lines 105-111):**

| Property | Family Resemblance (GOOD) | Template Convergence (BAD) |
|----------|--------------------------|---------------------------|
| Mechanisms | Same | Same |
| Values | DIFFERENT (YOUR reasoning) | SAME (copied) |
| Metaphor/Pattern | DIFFERENT (YOUR needs) | SAME (copied) |
| Semantic reasoning | UNIQUE to YOUR content | Borrowed |

#### 1B. CRITICAL DISTINCTION: Same Catalog, Different Selection Logic (Lines 64-87)

Added section clarifying Middle vs Ceiling mechanism selection:
- **Middle (content-structure mapping):** Each mechanism serves a DIFFERENT content need INDEPENDENTLY. Selection logic: content feature -> mechanism capability (direct mapping).
- **Ceiling (metaphor-driven multi-channel coherence):** Multiple mechanisms encode the SAME thing. Selection logic: metaphor -> shared semantic dimension -> multiple mechanisms encoding simultaneously.
- Concrete output difference: Middle = each mechanism independently solving different problems. Ceiling = multiple mechanisms all encoding "depth" together.

#### 1C. Per-Category Selection Protocol Note (Line 89)

Added: "For Middle-tier+ pages, deploy AT LEAST ONE mechanism from each category to ensure vocabulary breadth."

#### 1D. Mechanism Categories Table (Lines 52-63)

The 5 Property Families table with category IDs:
- Spatial (S): #5, #6, #15
- Hierarchy (H): #1, #4, #11
- Component (C): #2, #9, #10, #17
- Depth/Emphasis (D): #3, #7, #16
- Structure/Navigation (N): #8, #12, #13, #14, #18

#### 1E. Scales Section (Lines 723-786)

Comprehensive section on scales (zoom levels) vs mechanisms (vocabulary breadth):
- 5 Named Scales: Navigation, Page, Section, Component, Character
- Fractal Coherence: same design direction visible at multiple scales
- Tier-to-Scale Mapping: Floor=exempt, Middle=2 (Page+Component), Ceiling=4, Flagship=5
- Concrete Middle-tier example using CRESCENDO pattern
- M2 fractal gate enforces scale coverage as a GATE not a CHECK

### What the Master Prompt MUST Reference from DOC-1

1. **Family resemblance vs template convergence distinction** (Lines 105-111) -- prevents builder from avoiding mechanisms out of fear of "copying"
2. **Middle vs Ceiling selection logic** (Lines 64-87) -- prevents Middle builders from attempting multi-channel coherence (Ceiling behavior)
3. **Per-category minimum** (Line 89) -- ensures vocabulary breadth
4. **5 category IDs** (Lines 56-62) -- needed for per-category selection
5. **Tier-to-Scale mapping** (Lines 749-759) -- Middle requires 2 scales (Page + Component), not just mechanism count
6. **Validation Test** (Lines 112-118) -- binary test for vocabulary vs template copying
7. **Name Test + Transfer Test** (Lines 123-126) -- verification that mechanism usage is grammar, not copying

---

## DOC-2: mechanism-combinations.md (447 lines)

**File:** `design-system/compositional-core/grammar/mechanism-combinations.md`

### Full Content Audit (This is an ENTIRELY NEW file from enrichment)

This file was created as part of DOC enrichment. All 447 lines are enrichment content.

#### 2A. 6 Proven Combination Families (Lines 35-244)

Each family has: mechanisms used, shared semantic, where proven, CSS evidence, why they combine well, minimum tier.

| Family | Mechanisms | Shared Semantic | Min Tier |
|--------|-----------|----------------|----------|
| 1. Hierarchy Triad | #1 + #4 + #11 | Importance/certainty | Ceiling |
| 2. Depth Triple | #1 + #4 + #7 | Layering/stratification | Ceiling |
| 3. Density Triple | #5 + #4 + #7 | Content pacing | Ceiling |
| 4. Zone Pair | #7 + #10 | Spatial categories | Middle |
| 5. Component Pair | #2 + #11 | Component structure | Middle |
| 6. Emphasis Pair | #10 + #3 | Featured content | Middle |

**CRITICAL for the interaction requirement:** Middle-tier pages should use PAIRS only (2 mechanisms encoding same semantic). Ceiling+ uses TRIPLES. The prompt must specify which combination families are available at Middle tier.

#### 2B. Perceptual Alignment Principle (Lines 247-282)

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels. Failed combinations have contradictory channels (sparse padding + dense background = perceptual contradiction).

#### 2C. 3 Anti-Combination Conflict Types (Lines 285-365)

1. **Semantic Overload:** Two mechanisms encoding DIFFERENT semantics on SAME elements (can't be both high-priority and warning via border-weight)
2. **Perceptual Contradiction:** Two mechanisms encoding OPPOSITE values (80px padding says "sparse" but dark background says "dense")
3. **Redundant Encoding:** Two mechanisms encoding SAME semantic with NO added value (border-weight AND border-color both encoding priority)

Each includes CSS examples and resolution strategies.

#### 2D. Tier Guidance Section (Lines 368-389)

- Middle: use proven PAIRS only, 8-10 mechanisms, 70-100 min
- Ceiling: AT LEAST 2 combinations, AT LEAST ONE triple, 12-15 mechanisms, 150-220 min
- Flagship: AT LEAST 3 combinations across different patterns, 16-18 mechanisms

#### 2E. Anti-Copying Protocol (Lines 393-424)

Binary verification protocol for combinations:
1. Identify your semantic dimension
2. Check case studies _INDEX.md for matches
3. If match found, choose DIFFERENT semantic or DIFFERENT combination
4. Document verification with explicit format

### What the Master Prompt MUST Reference from DOC-2

1. **3 Middle-tier combination families** (Zone Pair, Component Pair, Emphasis Pair) -- these are the ONLY combinations available at Middle tier
2. **Perceptual alignment principle** -- mechanisms must encode SAME semantic through DIFFERENT channels
3. **3 anti-combination conflict types** -- builder must avoid semantic overload, perceptual contradiction, redundant encoding
4. **The distinction: independent deployment (Middle) vs combined deployment (Ceiling)** -- prevents Middle builders from attempting multi-channel coherence
5. **Anti-copying protocol** -- binary verification for combination usage

---

## DOC-3: case-studies/README.md (542 lines)

**File:** `design-system/compositional-core/case-studies/README.md`

### Enrichments Found

#### 3A. "Why BOTH Grammar and Case Studies?" Section (Lines 367-537)

Major new section (~170 lines) explaining the two-layer architecture.

**Key content added:**
- Layer 3 (Grammar) = VOCABULARY (what mechanisms exist, abstract)
- Layer 5 (Case Studies) = USAGE PROOF (how mechanisms applied to THIS content with THIS metaphor)
- **Without case studies:** builders know mechanisms exist but can't see how they LOOK in practice, how they COMBINE, WHEN they fit, or the PROCESS
- **Without mechanism catalog:** builders see complete implementations but can't separate TRANSFERABLE from metaphor-specific
- Why NOT merge: anti-gravity protection (phase-gating), cognitive load (869 + 3500 = too dense), abstraction clarity, usage sequence
- Jazz Real Book analogy applied: Theory Book = Grammar Layer, Real Book = Case Studies Layer

#### 3B. The Abstraction Relationship Diagram (Lines 450-467)

Shows the extraction flow:
```
SHOWCASE PAGE (OD-004) → Name Test + Transfer Test → MECHANISM CATALOG → Builder applies → YOUR PAGE
```

**Key Property:** "Builder used the SAME mechanism (#1 border-weight gradient) but with DIFFERENT metaphor, DIFFERENT values, DIFFERENT class names. SAME vocabulary, DIFFERENT sentence."

### What the Master Prompt MUST Reference from DOC-3

1. **Grammar = TOOLS, Case Studies = USAGE examples** -- prevents builder confusion about what to extract from where
2. **Phase-gated access rationale** -- grammar at Phase 4, case studies at Phase 5 (not before)
3. **"Same vocabulary, different sentence" principle** -- the goal of mechanism usage
4. **Why layers aren't merged** -- reinforces anti-gravity protection through separation

---

## DOC-4: compositional-core/CLAUDE.md (Vocabulary-vs-Library CSS Example)

**File:** `design-system/compositional-core/CLAUDE.md`

### Enrichments Found

#### 4A. Concrete Vocabulary vs Library CSS Example (Starting ~line 260 in the "Concrete Example" subsection)

Extensive (~150 lines) concrete CSS example showing the distinction between vocabulary and library.

**Three-part structure:**

**Part 1 -- Mechanism (Vocabulary, Transferable):**
```css
/* The PATTERN (what transfers): */
.element--highest { border-left: 4px solid var(--color); }
.element--high    { border-left: 3px solid var(--color); }
.element--medium  { border-left: 2px solid var(--color); }
.element--low     { border-left: 1px solid var(--color); }
```

**Part 2 -- Implementation 1 (Library, Geological):**
```css
.stratum--bedrock { border-left: 4px solid var(--color-text); }
/* WHY 4px? Bedrock = foundational, consolidated under pressure */
```

**Part 3 -- Implementation 2 (Your Application, Architectural):**
```css
.floor--basement { border-left: 4px solid var(--color-text); }
/* WHY 4px? Basement = foundation, load-bearing */
```

**Key Differences Table:**

| Dimension | Mechanism | Implementation 1 | Implementation 2 |
|-----------|----------|-------------------|-------------------|
| CSS Pattern | 4px/3px/2px/1px | 4px/3px/2px/1px | 4px/3px/2px/1px |
| What it encodes | Hierarchy (abstract) | Confidence (specific) | Structural importance (specific) |
| Metaphor | None | Geological strata | Building floors |
| Class names | `.element--high/low` | `.stratum--bedrock` | `.floor--basement` |

#### 4B. 3 Validation Tests (within the CSS example section)

1. **Name Test:** Remove metaphor name from implementation. Does CSS still make structural sense?
2. **Transfer Test:** Apply mechanism with a DIFFERENT metaphor. Does it produce meaningful CSS?
3. **Semantic Independence Test:** Does Implementation 2 encode the SAME semantic as Implementation 1? NO (confidence != structural importance). Do both use SAME CSS pattern? YES. Verdict: grammar fluency, not template copying.

#### 4C. Phase D Validation Lessons (Lines at end of file, after verification checklist)

Added 4 lessons from Phase D:
1. Container width 940-960px is NON-NEGOTIABLE
2. The always-load protocol is CRITICAL
3. "Weak permission" framing has ZERO effect
4. Variant B demonstrated genuine pipeline identity

### What the Master Prompt MUST Reference from DOC-4

1. **The concrete 3-part CSS example** -- or a condensed version showing mechanism vs implementation distinction. This is "worth 1000 words of explanation" per the doc itself.
2. **The 3 validation tests** (Name, Transfer, Semantic Independence) -- binary checks the builder can apply to verify they're using vocabulary, not copying
3. **Phase D lessons** -- especially container width (NON-NEGOTIABLE) and always-load protocol (CRITICAL)
4. **The framing: "Same mechanism, different metaphor, different values, different class names"** -- the one-sentence summary

---

## DOC-5: 03-ENTRY-POINT.md (177 lines)

**File:** `ephemeral/doc-enrichment/03-ENTRY-POINT.md`

### Enrichments Found

#### 5A. Acronym Legend (Lines 11-29)

Complete acronym table added:

| Acronym | Full Name |
|---------|-----------|
| DD | Density Diversity |
| OD | Operational Depth |
| AD | Axis Diversity |
| CD | Combination Diversity |
| PA | Perceptual Audit |
| CPL | Compositional Layout |
| Phase D | Extraction Validation |
| Variant B | Weak Permission Config |
| Track 1 | Component Assembly |
| Track 2 | Full Pipeline |
| CRESCENDO | Density Pattern |
| F-PATTERN | Density Pattern |
| BENTO | Density Pattern |
| PULSE | Density Pattern |

#### 5B. Name Test and Transfer Test Inline Definitions (Lines 42-46)

Added inline definitions with concrete examples:
- Name Test: `.stratum--established { border-left: 4px; padding: 40px }` -> Remove 'stratum' -> still encodes 'heavy/sparse = important.' PASS.
- Transfer Test: Border-weight gradient with botanical metaphor: `.root { border-left: 4px } .branch { border-left: 2px }`. Works -> vocabulary.

#### 5C. CRITICAL CAVEAT on Mechanism Count (Lines 67-77)

Added caveat that mechanism counts are NOT targets but descriptions of what each tier NATURALLY produces. Backward-engineered from existing pages:
- Variant B: 7 mechanisms across ALL 5 categories (100% coverage)
- OD-004: ~12-15 across all 5
- CD-006: ~16-18 across all 5

#### 5D. Category Name Evolution Note (Lines 84-90)

Mapping between abstract names (from HANDOFF.md) and operational names:
- Spatial=Spatial, Temporal~Depth/Emphasis, Material~Component, Behavioral~Structure/Nav, Relational~Hierarchy
- Directive: USE the current operational names

#### 5E. Historical Note on "Sample 2-4" (Lines 82)

Documents that the skill STILL contains "sample 2-4 mechanisms" as of 2026-02-15, with M1 pending Wave 2. Middle experiment will test under this constraint.

#### 5F. Clarified Always-Load Protocol (Lines 111-114)

Added explicit explanation of WHY always-load matters:
- `identity/prohibitions.md` (353 lines, focus lines 19-176 ABSOLUTE section) -- 22 non-negotiable identity constraints
- `vocabulary/tokens.css` (174 lines, focus lines 1-85 IMMUTABLE section) -- 65 design tokens
- "These files define WHAT YOU CANNOT DO (prohibitions) and WHAT TOOLS YOU HAVE (tokens)."

#### 5G. "Do NOT use 'sample 2-4 mechanisms'" Warning (Lines 161)

Explicit warning: "Identified by ALL 11 research agents as the single most limiting specification. The skill STILL contains this instruction as of 2026-02-15 (M1 pending Wave 2). When building Middle experiment, OVERRIDE at the builder-prompt level."

### What the Master Prompt MUST Reference from DOC-5

1. **Acronym legend** -- include relevant acronyms in the prompt for builder comprehension
2. **Category Name Evolution** -- use operational names (Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav), NOT abstract names
3. **Mechanism count caveat** -- counts are outcomes, not targets. Per-category minimum drives natural landing.
4. **"Sample 2-4" override** -- prompt MUST explicitly override this at builder-prompt level (deploy 8-10 across 5 categories)
5. **Always-load protocol rationale** -- the WHY, not just the WHAT

---

## DOC-6: semantic-rules.md (380 lines)

**File:** `design-system/compositional-core/guidelines/semantic-rules.md`

### Enrichments Found

#### 6A. The 3-Question Test (Lines 282-299)

For EVERY varying CSS value, answer:

**Q1: WHAT varies?** Identify the property and its range.
**Q2: WHY does it vary?** Reference content structure, metaphor logic (Ceiling+), or pattern logic. NOT "token availability" or "looked good."
**Q3: WHY THESE SPECIFIC VALUES?** If answer references content/metaphor/pattern -> SEMANTIC. If "it's on the scale" or "looked good" -> ARBITRARY, revise.

#### 6B. Tier-Specific Justification Depth (Lines 300-308)

| Tier | Expected Depth | Example |
|------|---------------|---------|
| Floor | None (lookup) | "Callouts use --space-6 per component inventory" |
| Middle | Pattern logic | "CRESCENDO peak uses 16px because complexity peaks here" |
| Ceiling | Metaphor logic | "Bedrock uses 40px because geological consolidation = sparse" |
| Flagship | Multi-dimensional | "20px = confidence x journey x attention" |

#### 6C. Passing Criteria (Lines 309-314)

- Floor: No justification required
- Middle: 80%+ varying values justified via pattern logic
- Ceiling: 90%+ justified via metaphor logic
- Flagship: 95%+ encode multi-dimensional overlaps

#### 6D. Red Flags for Arbitrary Values (Lines 316-322)

4 red flags:
1. "It looked good" -- aesthetics without structural reasoning
2. "It was available on the token scale" -- token availability != semantic fit
3. "OD-004 used this value" -- copied values without YOUR semantic reasoning
4. "Padding decreases as page progresses" -- pattern without RATIO justification

#### 6E. Before/After Examples (Lines 323-366)

Two concrete before/after examples:

**Example 1 -- Section Padding:**
- ARBITRARY: 48/40/32 with no ratio justification
- SEMANTIC: 64/32/16 = 4:2:1 exponential compression matching cognitive familiarity (CRESCENDO)

**Example 2 -- Border-Weight:**
- ARBITRARY: 40->32->24 with no ratio justification
- SEMANTIC: 40->32->16 with explicit gap reasoning (epistemic distance grows non-linearly)

#### 6F. PA-SEMANTIC Integration (Lines 368-376)

The 3-question test connects to Perceptual Audit semantic questions:
- PA-SEM-01 through PA-SEM-03 verify PATTERN LOGIC (Middle tier)
- PA-SEM-04 through PA-SEM-06 verify METAPHOR LOGIC (Ceiling tier)
- PA-SEM-07 through PA-SEM-08 verify MULTI-DIMENSIONAL encoding (Flagship tier)

When auditing: apply the 3-question test to flagged CSS values. If Q2 answer references aesthetics/availability -> FAIL.

### What the Master Prompt MUST Reference from DOC-6

1. **The 3-Question Test** (Q1/Q2/Q3) -- CRITICAL. Every varying CSS value must pass this test. The prompt should include the 3 questions verbatim.
2. **Tier-specific justification depth** -- Middle requires PATTERN LOGIC, not just "it looked good." The prompt must specify this for Middle-tier builders.
3. **Middle passing criterion: 80%+ varying values justified** -- binary gate
4. **Red flags** -- include at least the top 2 ("looked good" and "OD-004 used this value") to prevent most common failures
5. **Before/After examples** -- include at least one (Section Padding) to make the distinction concrete
6. **PA-SEMANTIC integration** -- PA-SEM-01 through PA-SEM-03 verify Middle-tier pattern logic

---

## Supplementary: Checklist Changelog (21-checklist-changelog.md)

### Key Changes from Checklist Hardening

- **9 new items added** (total: 129 -> 138)
- **Critical items expanded** from 7 to 10:
  - A1.0: M1 current status verified (builder must quote SKILL.md text)
  - B2.5: Container width priority order (940-960px highest priority)
  - B4.4: Mechanism interaction documented (2+ reinforcing pairs)
- **B4.1 floor raised:** Mechanism count floor changed from 5 to 7 (Middle must exceed Floor)
- **PA-05 operationalized:** Subjective "designed/formatted" replaced with 4 binary sub-criteria (PA-05a through PA-05d)
- **Section B reordered** by build workflow: Token Compliance -> Pipeline Routing -> Guardrails -> Container -> Breadth -> Count -> Justification -> Fractal -> Soul -> Additional Quality
- **New B10 section:** 6 additional quality items (semantic HTML, zone backgrounds, code blocks, WCAG contrast, border weights, self-contained file)

### What the Master Prompt Must Reference from Checklist

1. **Critical-10 items** -- all 10 must be addressable by prompt instructions
2. **B4.1 floor = 7** (not 5) -- ensures Middle > Floor
3. **PA-05 sub-criteria** -- builder must know the 4 binary checks
4. **Build workflow order** (Section B reorder) -- prompt build steps should mirror this sequence

---

## Supplementary: DOC-UPDATES.md (Tracking File)

### Documentation Updates Applied vs Pending

**APPLIED (verified in files):**
- UPDATE-1: design-system/CLAUDE.md Phase D status -- APPLIED (verified: lines reference Phase D COMPLETE, CONDITIONAL PASS)
- UPDATE-3: MEMORY.md reorganization -- APPLIED (verified: overflow files exist, MEMORY.md restructured)
- UPDATE-4: compositional-core/CLAUDE.md Phase D lessons -- APPLIED (verified: Phase D Validation Lessons section exists at end of file)

**STATUS UNCERTAIN (not verified in this audit):**
- UPDATE-2: pipeline/05-COMPLETE-ROADMAP.md -- not read in this audit
- UPDATE-5: pipeline/09-EXTRACTION-VALIDATION-PROTOCOL.md -- not read
- UPDATE-6: pipeline/10-RICHNESS-RIGIDITY-FINDINGS.md -- not read
- UPDATE-7: richness-research/05-unified-synthesis.md -- not read
- UPDATE-8: pipeline/03-MIGRATION-PIPELINE.md -- not read

---

## Cross-DOC Findings: What the Ontology/Pipeline/Context Researchers May Have Missed

### Finding 1: Mechanism Count Caveat is Critical But Easy to Miss

The caveat that mechanism counts are OUTCOMES not TARGETS (DOC-5 lines 67-77) is stated in the ENTRY-POINT but NOT prominently in mechanism-catalog.md itself. The prompt must make this explicit to prevent builders from treating "8-10 mechanisms" as a checklist target.

### Finding 2: Category Name Mapping Must Be Resolved

DOC-5 (lines 84-90) documents that earlier docs use abstract category names (Spatial, Temporal, Material, Behavioral, Relational) while current operational docs use concrete names (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). The prompt MUST use ONLY the operational names. If any researcher extracted the abstract names, this creates a conflict.

### Finding 3: The "Sample 2-4" Override Must Be Explicit in the Prompt

Three separate locations (DOC-1 line 89, DOC-5 lines 82 and 161) warn that the skill STILL contains "sample 2-4 mechanisms." The prompt must explicitly override this: "Deploy 8-10 mechanisms across all 5 categories. Do NOT follow 'sample 2-4' if encountered in skill instructions."

### Finding 4: Combination Families Create an Interaction Requirement for Middle Tier

DOC-2 identifies 3 combination families available at Middle tier (Zone Pair, Component Pair, Emphasis Pair). Checklist item B4.4 requires "2+ reinforcing pairs encoding shared content dimensions." The prompt must tell the builder to use AT LEAST 2 of the 3 Middle-tier combination families.

### Finding 5: The 3-Question Test is the Semantic Quality Gate

DOC-6's 3-Question Test (Q1/Q2/Q3) is the mechanism that prevents ARBITRARY CSS values. Without this in the prompt, builders will set padding values "because they looked good" instead of justifying via pattern logic. This is CRITICAL for Middle-tier quality.

### Finding 6: Family Resemblance Framing Must Prevent Mechanism Avoidance

DOC-1 (lines 93-127) explicitly states that family resemblance with showcase pages is EXPECTED and GOOD. Without this framing, builders may avoid using mechanisms from the catalog out of fear of "copying" -- which would directly undermine vocabulary fluency. The prompt should include the principle: "Using showcase mechanisms is grammar fluency, not template copying. What matters is YOUR semantic reasoning, not structural uniqueness."

### Finding 7: Scale Coverage is a Gate, Not a Check

DOC-1 (lines 749-786) specifies that Middle tier requires 2 scales (Page + Component). This is a GATE (mandatory deliverable), not a CHECK (post-build audit). The prompt must enforce this during the build, not as an afterthought. Specifically: the builder must demonstrate that their chosen density pattern (CRESCENDO, PULSE, etc.) appears at BOTH Page scale (section-level padding progression) AND Component scale (component-level structure echoing the pattern).

---

## Summary: Master Prompt Must-Reference Items (Priority Ordered)

### CRITICAL (must be in the prompt or build will fail)

| # | Item | Source | Why Critical |
|---|------|--------|-------------|
| 1 | 3-Question Test (Q1/Q2/Q3) for every varying CSS value | DOC-6 L282-299 | Without this, builders set arbitrary values. 80% threshold for Middle. |
| 2 | "Sample 2-4" override: deploy 8-10 across 5 categories | DOC-1 L89, DOC-5 L161 | Skill still contains this limiting instruction. Must override. |
| 3 | 5 operational category names + per-category minimum | DOC-1 L56-62, DOC-5 L84-90 | Ensures vocabulary breadth. Use Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Nav. |
| 4 | 3 Middle-tier combination families (Zone/Component/Emphasis Pair) | DOC-2 L149-244 | B4.4 requires 2+ reinforcing pairs. These are the only Middle-available families. |
| 5 | Family resemblance = GOOD, template convergence = BAD | DOC-1 L93-127 | Prevents mechanism avoidance. Grammar fluency, not copying. |
| 6 | 2-scale fractal gate: Page + Component | DOC-1 L749-786 | Middle must demonstrate pattern at 2 scales. GATE not CHECK. |
| 7 | Container width 940-960px NON-NEGOTIABLE | DOC-4 (Phase D lessons) | THE primary Phase D failure mode. No metaphor may override. |

### IMPORTANT (should be in the prompt for quality)

| # | Item | Source | Why Important |
|---|------|--------|-------------|
| 8 | Middle vs Ceiling selection logic (independent vs combined) | DOC-1 L64-87 | Prevents Middle builders from attempting Ceiling-level coherence. |
| 9 | 3 anti-combination conflict types | DOC-2 L285-365 | Prevents semantic overload, perceptual contradiction, redundant encoding. |
| 10 | Before/After CSS examples (arbitrary vs semantic) | DOC-6 L323-366 | Makes 3-Question Test concrete. At least one example. |
| 11 | Tier-specific justification depth table | DOC-6 L300-308 | Middle = pattern logic. Not "looked good." |
| 12 | Red flags for arbitrary values | DOC-6 L316-322 | Top 2: "looked good" and "OD-004 used this value." |
| 13 | Mechanism count = outcome, not target | DOC-5 L67-77 | Prevents treating "8-10" as checklist. Per-category drives natural landing. |
| 14 | Vocabulary vs Library concrete CSS distinction | DOC-4 (3-part example) | One concrete example worth 1000 words of explanation. |
| 15 | Acronym legend for key terms | DOC-5 L11-29 | Builder comprehension of DD/OD/PA/CPL etc. |
| 16 | Always-load protocol with rationale | DOC-5 L111-114 | WHY, not just WHAT. |

### NICE-TO-HAVE (enriches the prompt but not blocking)

| # | Item | Source | Why Nice |
|---|------|--------|---------|
| 17 | Jazz Real Book analogy (applied to grammar + case studies) | DOC-3 L504-524 | Powerful framing but prompt length cost may not be worth it. |
| 18 | PA-SEMANTIC integration (PA-SEM-01 through PA-SEM-03) | DOC-6 L368-376 | Connects 3-Question Test to audit. Useful but may be audit-phase only. |
| 19 | Why grammar and case studies are NOT merged | DOC-3 L488-501 | Reinforces anti-gravity but builder doesn't need to know architecture rationale. |
| 20 | Category name mapping (abstract -> operational) | DOC-5 L84-90 | Only needed if prompt references earlier docs. If prompt uses operational names throughout, mapping is unnecessary. |

---

## Enrichments the Other Researchers May Have Missed

Based on what each researcher is likely to extract vs what the DOC enrichments contain:

1. **Ontology researcher** likely captures mechanisms and categories but may miss the FAMILY RESEMBLANCE framing (DOC-1 L93-127) and the SCALE GATE (DOC-1 L749-786). These are enrichments TO the mechanism catalog, not the original catalog content.

2. **Pipeline researcher** likely captures the tier model and build workflow but may miss the 3-QUESTION TEST (DOC-6) and COMBINATION FAMILIES (DOC-2). These are grammar-layer enrichments, not pipeline-layer content.

3. **Checklist researcher** likely captures the Critical-10 items and PA-05 operationalization but may miss that B4.4 (mechanism interaction) maps specifically to the 3 Middle-tier combination families in DOC-2. The checklist says "2+ reinforcing pairs" but DOC-2 specifies WHICH pairs are Middle-appropriate.

4. **Context researcher** likely captures Phase D lessons and tier model but may miss the MECHANISM COUNT CAVEAT (DOC-5 L67-77) -- that counts are outcomes, not targets. This is a subtle but important distinction.

5. **Reference researcher** likely captures crown jewel examples but may miss the BEFORE/AFTER CSS examples in DOC-6 (L323-366) that make the 3-Question Test concrete. These are guideline-layer enrichments, not reference-layer content.

---

**END DOC ENRICHMENT AUDIT**

Total DOC enrichment content audited: ~2,600 lines across 6 files + 2 supplementary files.
Critical must-reference items: 7
Important should-reference items: 9
Nice-to-have items: 4
Cross-DOC findings: 7
