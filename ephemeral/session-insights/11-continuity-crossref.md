# Session Insights × Continuity Documentation Cross-Reference Matrix

**Date:** 2026-02-15
**Agent:** continuity-crossref
**Purpose:** Map each of the 10 session insights to SPECIFIC integration points in existing documentation, identify contradictions, and determine what belongs where.

---

## HOW TO USE THIS MATRIX

Each insight (I-01 through I-10) is mapped to:
1. **Related continuity-docs files** -- which files discuss related topics
2. **Related doc-enrichment files** -- same
3. **Specific integration points** -- exact section names where the insight should be added
4. **Contradictions** -- does the insight contradict anything? Which is correct?
5. **Extensions** -- does the insight extend something already documented?
6. **New document need** -- does this require a new file?

---

## I-01: Vocabulary vs Library Distinction Needs Concrete CSS Examples

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 7 "Vocabulary vs. Library: The Foundation" (lines ~195-245)
- 02-worldview-and-goals.md -- Section 1.3 "The Vocabulary vs. Prohibition Distinction"
- 08-cross-cutting-synthesis.md -- Section 1.1 "Vocabulary-as-Rigidity Meets the Tier Model"

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 6 "The Vocabulary vs. Library Question" (lines ~412-470)
- 03-ENTRY-POINT.md -- Key Context #2 (lines 20-26)

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| HANDOFF.md | Section 7 (after line ~230) | Add "Extraction History" subsection noting that mechanism catalog was EXTRACTED FROM case studies during Phase C. Link to Phase C extraction provenance. | HIGH |
| 02-tier-methodology.md | Section 6 (after line ~455) | Add concrete CSS example showing `padding: var(--space-16)` (naming-level) vs `--stratum-established-padding: var(--space-10)` (CSS-generation-level) | HIGH |
| 03-ENTRY-POINT.md | Key Context #2 (expand lines 21-22) | Add one-sentence note about extraction provenance | MEDIUM |
| design-system/compositional-core/grammar/mechanism-catalog.md | Add new section at top | "Provenance Note: This catalog was extracted FROM the showcase case studies during Phase C. Each mechanism is an abstraction of patterns that originated in metaphor-specific implementations." | HIGH |
| design-system/compositional-core/case-studies/_INDEX.md | Add new section | "Why Case Studies Exist Alongside the Catalog" -- explain that catalog is abstraction, case studies show implementation | HIGH |
| design-system/compositional-core/CLAUDE.md | Add to Phase 3 guidance | Vocabulary vs library distinction with Name Test / Transfer Test examples | MEDIUM |

### Contradictions

**NONE.** The insight is an EXTENSION, not a contradiction. Current documentation describes the distinction but doesn't explain the extraction history or provide CSS-level examples.

### Extensions

**YES.** Extends HANDOFF.md Section 7 and tier-methodology Section 6 by adding the missing historical context (extraction from case studies) and the missing concrete examples (CSS code showing naming vs generation).

---

## I-02: The 4-Type Rigidity Taxonomy Needs Concrete Good/Bad Examples

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 3 "The Four-Type Constraint Taxonomy" (table format)
- 02-worldview-and-goals.md -- Section 1.4 "The Four-Type Constraint Taxonomy"

**Doc-enrichment:**
- 02-tier-methodology.md -- References the taxonomy in Section 5 (rigidity gradient)

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| HANDOFF.md | Section 3, expand table | Add 5th column: "When Good / When Bad" with concrete examples per type | HIGH |
| 02-tier-methodology.md | New subsection after Section 5 | "Rigidity Quick-Reference: Good vs Bad Constraints" with diagnostic questions per type | HIGH |
| design-system/compositional-core/CLAUDE.md | Add after Phase 1 (before building) | Constraint evaluation quick-reference with 4 diagnostic questions | MEDIUM |

### Specific Content to Add

**Type 1 (Identity):** Almost always good. Example: `border-radius: 0` defines WHO we are. Only bad if identity contradicts audience needs (e.g., enforcing warm palette for content that semantically requires cool colors).

**Type 2 (Procedural):** Almost always good. Example: "Read prohibitions before work" prevents known failures. Only bad if sequence blocks useful verification (e.g., requiring full metaphor derivation before knowing if content even needs metaphor).

**Type 3 (Specification):** WHERE BAD RIGIDITY LIVES. Examples:
- BAD: "Sample 2-4 mechanisms" prevents correct decisions (caps technique below what content supports)
- GOOD: "Container width 940-960px" prevents known failure mode (4/5 Phase D pages violated this)

**Type 4 (Ambient):** Bad in aggregate, not per-item. ~168 constraints simultaneously = cognitive overload = random constraint-dropping.

**Diagnostic Questions:**
- Type 1: "Does this constraint define WHO we are?"
- Type 2: "Has skipping this step ever caused failure?"
- Type 3: "Has violating this ever produced a real failure?"
- Type 4: "Can a builder hold all active constraints simultaneously?"

### Contradictions

**NONE.** The taxonomy exists; this adds the missing evaluative dimension.

### Extensions

**YES.** Transforms the existing 4-type taxonomy from descriptive classification to evaluative framework.

---

## I-03: Semantic vs Arbitrary Value Assignment Test

### Related Files

**Continuity-docs:**
- NONE directly address this.

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 2 tier profiles mention "metaphor logic" but don't define semantic value assignment test
- 05-richness-journey.md -- Section 2 mentions "metaphor-to-CSS encoding" but not the diagnostic test

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| ~/.claude/skills/tension-composition/SKILL.md | Phase 4 (mechanism deployment) | Add requirement: "For every CSS value that varies from token scale, document WHY this value and not adjacent values. Reference CONTENT STRUCTURE or METAPHOR LOGIC." | HIGH |
| ~/.claude/skills/perceptual-auditing/SKILL.md | Add new audit question | "Value Justification Audit: For padding/margin/width values, can the builder explain why THIS value vs adjacent token values? Does answer reference content structure/metaphor or only aesthetics?" | HIGH |
| design-system/compositional-core/guidelines/semantic-rules.md | New section | "Value Justification Framework" with the diagnostic test and per-tier semantic sources | HIGH |
| 02-tier-methodology.md | Section 2, expand tier profiles | Add "Semantic Source" row to tier comparison table | MEDIUM |

### Specific Content to Add

**The Test:**
For any varying CSS value, ask: "Why this value and not the adjacent values on the token scale?"
- If answer references CONTENT STRUCTURE or METAPHOR LOGIC → semantic
- If answer references only TOKEN SCALE or VISUAL AESTHETICS → arbitrary

**Per-Tier Semantic Source:**
- Floor: No semantic reasoning expected (direct token lookup)
- Middle: Pattern logic ("CRESCENDO peaks here, so padding tightens")
- Ceiling: Metaphor logic ("speculative knowledge compresses under established weight")
- Flagship: Multi-layered metaphor logic (multiple dimensions simultaneously)

### Contradictions

**NONE.** This is a NEW diagnostic test, not previously documented.

### Extensions

**NO.** This is net-new content filling a gap.

---

## I-04: Tier Distinction = Individual → Combination → Multi-Pattern

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 4 tier model (table only, not framing)
- 08-cross-cutting-synthesis.md -- Section 1.1 touches on fluency gradient

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 2 tier profiles (concrete but missing this framing)
- 03-ENTRY-POINT.md -- Tier model table

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| 02-tier-methodology.md | Section 2, add new subsection | "The Mechanism Deployment Distinction: Individual → Combination → Multi-Pattern" BEFORE the tier profiles | HIGHEST |
| ~/.claude/skills/tension-composition/SKILL.md | Phase 4 mechanism deployment | Replace current "sample 2-4" with tier-specific guidance (see below) | HIGHEST |
| design-system/compositional-core/grammar/mechanism-catalog.md | Add new section | "Mechanism Combinations" showing which mechanisms naturally reinforce each other when encoding same semantic dimension | HIGH |
| HANDOFF.md | Section 4 tier model | Add one-line summary row: "Deployment Mode: Individual / Combination / Multi-Pattern" | MEDIUM |

### Specific Content for Skill Enrichment

**Middle tier Phase 4:**
"Deploy 8-10 mechanisms. Each should serve a content need independently. Example: border-weight encodes confidence, spacing compression encodes density, zone backgrounds separate sections. Mechanisms address DIFFERENT dimensions."

**Ceiling tier Phase 4:**
"Identify at least 2 mechanism COMBINATIONS where multiple mechanisms encode the same semantic dimension. Document the shared dimension. Example: as confidence decreases, BOTH borders thin AND padding compresses AND line-height tightens — all encode the SAME dimension (confidence gradient)."

**Flagship tier Phase 4:**
"Deploy 3-5 density patterns with typed transitions. Each pattern section has its own mechanism combinations. Example: Part 1 uses CRESCENDO (combinations: spacing compression + border thinning + width narrowing), Part 2 uses BENTO (combinations: zone backgrounds + grid spans + different mechanism set)."

### Contradictions

**NONE.** This is a NEW framing dimension that doesn't contradict existing tier descriptions — it CLARIFIES them.

### Extensions

**YES.** This is THE missing conceptual framework that makes tier distinctions operationally meaningful beyond just "more mechanisms."

---

## I-05: Mechanism Catalog Carries Showcase DNA (Family Resemblance)

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 7 discusses vocabulary vs library but doesn't address family resemblance
- 07-open-threads-and-gaps.md -- OT-03 "Vocabulary-vs-Library Tension" addresses the untested dimension

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 6 discusses grammar vs derivative question
- 03-ENTRY-POINT.md -- Key Context #2 mentions the untested practical dimension

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| design-system/compositional-core/grammar/mechanism-catalog.md | Add to new "Provenance Note" section (from I-01) | "This catalog carries structural DNA from showcase pages. Deploying mechanisms at high density produces FAMILY RESEMBLANCE (shared structural patterns) — this is intended identity, not problematic convergence." | HIGH |
| 02-tier-methodology.md | Section 6 (expand around line ~445) | Add "Expected Convergence vs Problematic Convergence" guidance distinguishing family resemblance (structural skeleton) from template convergence (copied values) | HIGH |
| design-system/compositional-core/CLAUDE.md | Add to anti-gravity section (R-series) | "Family resemblance (shared structural patterns from grammar usage) is EXPECTED and GOOD. Template convergence (metaphor copying) is what anti-gravity prevents." | MEDIUM |

### Contradictions

**NONE.** But this CLARIFIES a potential confusion: the Middle-tier experiment may produce pages that LOOK similar to showcases because they use the same mechanisms. This is family resemblance (intended), not convergence (failure). Current documentation doesn't distinguish these.

### Extensions

**YES.** Extends the vocabulary-vs-library distinction with the missing nuance about structural similarity being expected vs problematic.

---

## I-06: The Lookup Ideology Came From Richness Research

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 3 "The Accumulation Principle" discusses iteration gap
- 01-narrative-arc.md -- Act I describes richness investigation

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 3 Middle tier profile mentions "lookup-based decisions"
- 05-richness-journey.md -- Section 2 discusses richness gap

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| 02-tier-methodology.md | Section 3 Middle tier, add new subsection | "Why Middle Tier is Lookup-Based: The Richness Research Finding" explaining that technique SATURATION (not creative freedom) closes the gap | MEDIUM |
| 05-richness-journey.md | Section 3, expand "SETTLED" findings | Add: "The lookup ideology: Middle tier uses vocabulary deployment (lookup) vs creative derivation (metaphor). Different strategies for different purposes: Variant B solved IDENTITY (metaphor). Middle solves STRUCTURE (spatial organization)." | MEDIUM |

### Specific Content to Add

**Identity vs Structure Distinction:**
- Variant B (Track 2 pipeline) solved: IDENTITY (what is this page about?) through creative derivation
- Middle tier (Track 1 enhanced) solves: STRUCTURE (how is content spatially organized?) through structural competence

These are DIFFERENT strategies for DIFFERENT purposes. Both are valid. Content determines which is needed (Addition Test).

### Contradictions

**NONE.** This is clarifying rationale, not changing recommendations.

### Extensions

**YES.** Adds the missing "why lookup" explanation and distinguishes identity-solving from structure-solving.

---

## I-07: Tier Combinations as Controlled Experiment Design

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 4 tier model (descriptive, not experimental framing)
- 07-open-threads-and-gaps.md -- OT-02 identifies Middle tier as untested hypothesis

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 1 explains WHY tiers exist but not experimental design logic

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| 02-tier-methodology.md | Section 1, add new subsection | "The Experimental Design Logic: Controlled Variable Isolation" with the tier permutation table | MEDIUM |
| design-system/pipeline/05-COMPLETE-ROADMAP.md | Phase E section | Frame Phase E experiments as controlled variable isolation, not just "build more pages" | MEDIUM |

### Specific Content to Add

**Tier Permutation as Experiment:**

| Tier | Variables Active | Tests |
|------|-----------------|-------|
| Floor (5 mechanisms, no metaphor) | Control | Baseline |
| Middle (10 mechanisms, no metaphor) | +mechanisms | Isolates mechanism effect |
| Ceiling (13 mechanisms, yes metaphor) | +mechanisms +metaphor | Isolates metaphor effect on top of mechanism base |
| Flagship (17 mechanisms, yes metaphor + audit) | +mechanisms +metaphor +iteration | Isolates iteration effect |

**Missing combination:** Metaphor + few mechanisms = Variant B (which already exists and proved metaphor alone doesn't create structural richness).

**Implication:** Middle MUST NOT have metaphor or we lose ability to isolate mechanism variable.

### Contradictions

**NONE.** This is reframing existing tier distinctions through experimental design lens.

### Extensions

**NO.** This is net-new framing that doesn't extend existing content.

---

## I-08: Technique vs Mechanism Terminology Clarification

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Uses both terms somewhat interchangeably
- 01-narrative-arc.md -- Uses "technique" for counting (5/44, 10/44)

**Doc-enrichment:**
- 02-tier-methodology.md -- Uses "mechanism" consistently in tier profiles

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| design-system/compositional-core/grammar/mechanism-catalog.md | Add terminology note at top | "Terminology: MECHANISM = one of 18 transferable CSS patterns (conceptual unit). TECHNIQUE = any distinct CSS approach (granular measurement, one mechanism may involve multiple techniques). The '44 technique families' count is more granular than '18 mechanisms.'" | LOW |
| 02-tier-methodology.md | Section 1, footnote | Clarify that tier model uses "mechanisms" (18 total) not "techniques" (44 families) | LOW |

### Contradictions

**MINOR.** The narrative-arc counts "techniques" (5/44 for Variant B) while tier model counts "mechanisms" (5/18 for Floor). These are measuring at different granularities. Not a contradiction, just inconsistent units.

### Extensions

**YES.** Adds precision to terminology that is currently used loosely across documents.

---

## I-09: Middle-Tier Validation Framework (5 Concrete Tests)

### Related Files

**Continuity-docs:**
- 07-open-threads-and-gaps.md -- OT-02 identifies Middle tier experiment as highest priority
- HANDOFF.md -- Section 10 actionables includes "Build one exceptional Middle-tier page"

**Doc-enrichment:**
- 02-tier-methodology.md -- Section 4 "Building Each Tier" has Middle pipeline blueprint but no validation framework

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| NEW FILE | `ephemeral/session-insights/validation-framework.md` | Full 5-test protocol for grammar vs derivative evaluation with synthesis framework | HIGH |
| ~/.claude/skills/perceptual-auditing/SKILL.md | Add new Mode 3 | "Grammar vs Derivative Audit Mode" with 5 tests | HIGH |
| 02-tier-methodology.md | Section 4 Middle tier, add new subsection | "Validation Test Plan" with condensed 5-test summary and link to full validation-framework.md | HIGH |

### Specific Content (5 Tests)

1. **Blur Test:** Structural fingerprint comparison (layout patterns remain recognizable when text blurred)
2. **Fresh-Eyes Agent Test:** Zero-context evaluation ("Does this feel like a new page or like I've seen this before?")
3. **Mechanism Expression Audit:** Per-mechanism CSS comparison (same mechanism, different expression?)
4. **Side-by-Side Perception Test:** Middle vs Variant B, Middle vs OD-004 (visual similarity scoring)
5. **Structural Similarity Score:** 8-point quantitative comparison (layout type, zone count, mechanism overlap, etc.)

**Synthesis Framework:**
- 4-5 grammar signals → PROCEED (vocabulary usage, not copying)
- 4-5 derivative signals → REVISE (too similar to showcases)
- Mixed → BUILD SECOND PAGE on different content (more data needed)

### Contradictions

**NONE.** This is net-new validation methodology.

### Extensions

**NO.** This is filling a gap (how to evaluate Middle tier experiment results).

---

## I-10: Case Studies as "Novels" — Three Functions

### Related Files

**Continuity-docs:**
- HANDOFF.md -- Section 7 discusses case studies as "literature, not templates"

**Doc-enrichment:**
- (None specifically discuss case study usage)

### Specific Integration Points

| Target File | Section | Action | Priority |
|------------|---------|--------|----------|
| design-system/compositional-core/case-studies/_INDEX.md | Add new section | "How to Use Case Studies: Three Functions" with tier-gated guidance | MEDIUM |
| design-system/compositional-core/CLAUDE.md | Add to Phase 2-3 guidance | Case study usage guidance per tier | MEDIUM |

### Specific Content (Three Functions)

**1. Comprehension aid (ALL tiers):**
See principles in action. "What does spacing compression LOOK LIKE?" Read case studies to understand mechanism deployment in context.

**2. Verification reference (Ceiling+ tiers):**
Phase 5+ use. "Is my implementation as principled as the showcase?" Compare your CSS structure to case study implementation quality.

**3. Vocabulary expansion (Ceiling+ only):**
Discover mechanism COMBINATIONS through example. "Which mechanisms naturally reinforce each other?" Only relevant at Ceiling where combination deployment matters.

**Tier-gated usage:**
- Floor: Read mechanism catalog only (case studies add noise)
- Middle: Read 1-2 case studies for comprehension, NOT for copying patterns
- Ceiling: Read case studies for comprehension + mechanism combination examples
- Flagship: Full case study engagement for verification + vocabulary expansion

### Contradictions

**NONE.** This is refining existing "case studies as literature" guidance with operational detail.

### Extensions

**YES.** Extends the "literature not templates" framing with tier-specific usage guidance.

---

## CROSS-CUTTING OBSERVATIONS

### What Belongs in HANDOFF.md?

**Add:**
- I-02 diagnostic questions (expand Section 3 taxonomy table)
- I-05 family resemblance note (Section 7)

**Do NOT add:**
- I-03, I-09 (too operational, belong in skills)
- I-07 (experimental design framing, belongs in tier-methodology)

HANDOFF.md is for UNDERSTANDING, not for BUILDING. Operational guidance belongs elsewhere.

### What Belongs in tier-methodology.md?

**Add:**
- I-04 individual→combination→multi-pattern framing (HIGHEST PRIORITY — this is THE missing tier distinction)
- I-02 rigidity quick-reference
- I-06 lookup ideology explanation
- I-07 experimental design logic
- I-09 validation test plan (condensed)

tier-methodology.md is the ACTIONABLE tier-building guide. Every insight about how to BUILD or EVALUATE tiers belongs here.

### What Belongs in richness-journey.md?

**Add:**
- I-06 identity vs structure distinction (extends Section 3 settled findings)

richness-journey.md is the NARRATIVE explaining WHY richness matters. Only insights about motivation/rationale belong here.

### What Needs a NEW Document?

**YES:**
- `ephemeral/session-insights/validation-framework.md` (I-09) — The 5-test protocol is substantial enough to warrant its own file (estimated ~1,200 lines with full test procedures, scoring rubrics, synthesis framework)

---

## CONTRADICTION SUMMARY

**Total contradictions found: 1 MINOR**

**I-08 terminology:** Documents use "techniques" (44 families) and "mechanisms" (18 units) inconsistently. Not a logical contradiction, just inconsistent measurement units. Fix: add terminology note to mechanism-catalog.md clarifying the distinction.

**All other insights are EXTENSIONS or NEW CONTENT, not contradictions.**

---

## PRIORITY INTEGRATION ORDER

### P0 (BLOCKING — needed before Middle-tier experiment)
1. **I-04:** Tier distinction framing in tier-methodology.md + skill enrichment
2. **I-09:** Validation framework document + perceptual auditing mode
3. **I-03:** Semantic value test in skills + semantic-rules.md

### P1 (HIGH — enriches existing documentation significantly)
4. **I-01:** Vocabulary vs library concrete examples + extraction provenance
5. **I-02:** Rigidity taxonomy good/bad examples
6. **I-05:** Family resemblance guidance

### P2 (MEDIUM — clarifies rationale, not urgent)
7. **I-06:** Lookup ideology documentation
8. **I-07:** Experimental design framing
9. **I-10:** Case study usage functions

### P3 (LOW — terminological cleanup)
10. **I-08:** Technique vs mechanism terminology note

---

## IMPLEMENTATION NOTES

**Maintenance burden warning:** Many insights (I-01, I-02, I-04, I-05) require updates to MULTIPLE files. The tier model table appears in 5+ locations. Any change must propagate to all copies. Consider creating CANONICAL versions that other documents reference rather than duplicate.

**Skill file modifications:** I-03, I-04, I-09 all require changes to `~/.claude/skills/tension-composition/SKILL.md` and/or `perceptual-auditing/SKILL.md`. These should be bundled into a single skill enrichment pass.

**New file creation:** I-09 requires a new validation-framework.md document. Estimated 1,200+ lines.

**Cross-document consistency:** After applying I-04 (tier distinction framing), ALL documents that describe tiers (HANDOFF, tier-methodology, ENTRY-POINT, worldview) must be checked for consistency with the new framing.

---

*Cross-reference matrix complete. All 10 insights mapped to specific integration points across 18 target files (11 existing + 1 new + 6 in compositional-core).*
