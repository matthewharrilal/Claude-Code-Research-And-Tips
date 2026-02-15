# Living Document: Session Insights for Documentation Enrichment

**Date:** 2026-02-15
**Status:** ACTIVE -- accumulating insights from conversation
**Purpose:** Capture all questions, clarifications, and insights from the current session for future documentation enrichment, skill modifications, and prospective to-dos.

---

## HOW TO USE THIS DOCUMENT

This is a running capture of insights that emerged from deep Q&A about the design system's architecture, methodology, and tier model. Each insight maps to specific documentation targets. Agents enriching documentation should:
1. Read this document for the INSIGHT
2. Check the TARGET FILE for current state
3. Apply the enrichment
4. Mark the insight as APPLIED

---

## INSIGHT CATALOG

### I-01: Vocabulary vs Library Distinction Needs Concrete CSS Examples in Documentation

**Insight:** The distinction between mechanism catalog (grammar/) and case studies (case-studies/) is architecturally enforced but not intuitively obvious. The user needed multiple examples and the Name Test / Transfer Test to fully internalize it.

**Key Clarification:** Mechanism catalog was EXTRACTED FROM case studies during Phase C. The abstraction preserves transferable principles while stripping metaphor-specific implementations. This extraction history should be documented alongside the catalog itself.

**Documentation Targets:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` -- Add extraction provenance
- `design-system/compositional-core/case-studies/_INDEX.md` -- Add "WHY case studies exist alongside the catalog"
- `design-system/compositional-core/CLAUDE.md` -- Add vocabulary vs library distinction with concrete examples

**Priority:** HIGH -- affects every builder's understanding of what to use and when

---

### I-02: The 4-Type Rigidity Taxonomy Needs Concrete Good/Bad Examples

**Insight:** The 4-type taxonomy (Identity/Procedural/Specification/Ambient) was established in rigidity research, but the user needed concrete examples of when each type is GOOD vs BAD to fully internalize the distinction.

**Key Examples to Document:**
- Type 1 (Identity): Almost always good. `border-radius: 0` defines identity. Only bad if identity contradicts audience needs.
- Type 2 (Procedural): Almost always good. "Read prohibitions before work" prevents known failures. Only bad if sequence blocks useful verification.
- Type 3 (Specification): WHERE BAD RIGIDITY LIVES. "Sample 2-4 mechanisms" = bad (prevents correct decisions). "Container width 940-960px" = good (prevents known failure mode).
- Type 4 (Ambient): Bad in aggregate, not per-item. ~168 constraints simultaneously = cognitive overload = random constraint-dropping.

**Diagnostic Questions Per Type:**
- Type 1: "Does this constraint define WHO we are?"
- Type 2: "Has skipping this step ever caused failure?"
- Type 3: "Has violating this ever produced a real failure?"
- Type 4: "Can a builder hold all active constraints simultaneously?"

**Documentation Targets:**
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Add concrete examples section
- `design-system/compositional-core/CLAUDE.md` -- Add rigidity quick-reference
- Potential new: guideline document on constraint evaluation

**Priority:** HIGH -- affects how modifications are evaluated

---

### I-03: Semantic vs Arbitrary Value Assignment Test

**Insight:** The user asked "How do you KNOW if padding values have semantic reasons?" This is a critical audit question with no current documentation.

**The Test:** For any varying CSS value, ask: "Why this value and not the adjacent values on the token scale?" If the answer references CONTENT STRUCTURE or METAPHOR LOGIC → semantic. If it references only the TOKEN SCALE or VISUAL AESTHETICS → arbitrary.

**Per-Tier Semantic Source:**
- Floor: No semantic reasoning expected (direct token lookup)
- Middle: Pattern logic ("CRESCENDO peaks here, so padding tightens")
- Ceiling: Metaphor logic ("speculative knowledge compresses under established weight")
- Flagship: Multi-layered metaphor logic (same as Ceiling with multiple dimensions)

**Documentation Targets:**
- `~/.claude/skills/tension-composition/SKILL.md` -- Add semantic justification requirement at Phase 4
- `~/.claude/skills/perceptual-auditing/SKILL.md` -- Add semantic value audit question
- `design-system/compositional-core/guidelines/semantic-rules.md` -- Add value justification framework

**Priority:** HIGH -- directly affects build quality and audit accuracy

---

### I-04: Tier Distinction = Individual → Combination → Multi-Pattern

**Insight:** The concrete distinction between tiers is NOT just mechanism count but the LEVEL of mechanism analysis:
- Middle: Individual mechanism deployment (each serves content independently)
- Ceiling: Mechanism COMBINATION deployment (multiple mechanisms encode the SAME semantic dimension -- e.g., borders thin AND padding tightens as confidence decreases)
- Flagship: Multi-pattern COMPOSITION (CRESCENDO in Part 1, BENTO in Part 2, typed transitions between)

This framing emerged from conversation and is NOT currently documented as a tier distinction.

**Implications for Skill Enrichment:**
- Middle tier Phase 4: "Deploy 8-10 mechanisms. Each should serve a content need independently."
- Ceiling tier Phase 4: "Identify at least 2 mechanism COMBINATIONS where multiple mechanisms encode the same semantic dimension. Document the shared dimension."
- Flagship tier Phase 4: "Deploy 3-5 density patterns with typed transitions. Each pattern section has its own mechanism combinations."

**Documentation Targets:**
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Add "individual → combination → multi-pattern" framing
- `~/.claude/skills/tension-composition/SKILL.md` -- Add tier-specific mechanism deployment instructions
- `design-system/compositional-core/grammar/mechanism-catalog.md` -- Add "mechanism combinations" section showing which mechanisms naturally reinforce each other

**Priority:** HIGHEST -- this is a structural gap that affects how every tier is built

---

### I-05: Mechanism Catalog Carries Showcase DNA (Family Resemblance)

**Insight:** The mechanism catalog was extracted FROM showcase pages. Even though mechanisms are "abstracted," they carry structural DNA from their origins. A page deploying 8-10 mechanisms will have FAMILY RESEMBLANCE to showcases because the structural patterns were born there.

**Key Distinction:** Family resemblance (shared structural skeleton) is different from template convergence (copied CSS values). The design system INTENDS family resemblance (that's identity). The question is whether high mechanism density pushes family resemblance into perceived template convergence.

**This is THE central open question** the Middle-tier experiment tests.

**Documentation Targets:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` -- Add "provenance note" acknowledging showcase extraction
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Strengthen the vocabulary-vs-library section with this nuance
- `design-system/compositional-core/CLAUDE.md` -- Add "expected convergence vs problematic convergence" guidance

**Priority:** HIGH -- affects how builders and auditors interpret structural similarity

---

### I-06: The Lookup Ideology Came From Richness Research

**Insight:** The decision to make Middle-tier additions "lookup-based, not creative" came from a specific research finding: the richness gap is technique SATURATION (quantity of mechanism deployment), not technique ABSENCE or creative freedom. The showcase pages achieved richness through ACCUMULATED VOCABULARY, not through unconstrained creativity. Therefore, deploying more vocabulary (lookup) closes the gap without requiring creative derivation (metaphor).

**The Nuance:** This is architecturally sound but creates a tension with Variant B's success model. Variant B succeeded through creative derivation (novel metaphor). Middle tier succeeds through structural competence (vocabulary deployment). These are DIFFERENT strategies for DIFFERENT purposes:
- Variant B solved IDENTITY (what is this page about?)
- Middle tier solves STRUCTURE (how is content spatially organized?)

**Documentation Targets:**
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Add "ideology behind lookup-based decisions" section
- `ephemeral/doc-enrichment/05-richness-journey.md` -- Add the identity-vs-structure distinction

**Priority:** MEDIUM -- clarifies rationale but doesn't change what gets built

---

### I-07: Tier Combinations as Controlled Experiment Design

**Insight:** The tier permutations are structured as a controlled experiment where each tier adds ONE major variable:

| Tier | Variables | Tests |
|------|-----------|-------|
| Floor (5 mechanisms, no metaphor) | Control | Baseline |
| Middle (10 mechanisms, no metaphor) | +mechanisms | Isolates mechanism effect |
| Ceiling (13 mechanisms, yes metaphor) | +metaphor | Isolates metaphor effect |
| Flagship (17 mechanisms, yes metaphor + audit) | +iteration | Isolates iteration effect |

This means: Middle MUST NOT have a metaphor, or we lose the ability to isolate the mechanism variable. The experimental design is deliberate, not arbitrary.

Missing combination: "Metaphor + few mechanisms" = Variant B (which already exists and proved metaphor alone doesn't create structural richness).

**Documentation Targets:**
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Add "experimental design logic" section
- `design-system/pipeline/05-COMPLETE-ROADMAP.md` -- Frame Phase E experiments as controlled variable isolation

**Priority:** MEDIUM -- clarifies rationale for tier design

---

### I-08: Technique vs Mechanism Terminology Clarification

**Insight:** "Technique" and "mechanism" are used in overlapping but distinct ways:
- Mechanism = one of 18 transferable CSS PATTERNS (conceptual units)
- Technique = any distinct CSS APPROACH (granular measurement, one mechanism may involve multiple techniques)
- The "44 technique families" count is more granular than the "18 mechanisms" count
- For practical purposes: technique saturation ≈ mechanism deployment density

**Documentation Targets:**
- `design-system/compositional-core/grammar/mechanism-catalog.md` -- Add terminology note
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Clarify usage throughout

**Priority:** LOW -- terminological, not architectural

---

### I-09: Middle-Tier Validation Framework (5 Concrete Tests)

**Insight:** The grammar-vs-derivative question requires 5 specific tests:
1. Blur Test (structural fingerprint comparison)
2. Fresh-Eyes Agent Test (zero-context evaluation)
3. Mechanism Expression Audit (per-mechanism CSS comparison)
4. Side-by-Side Perception Test (Middle vs Variant B, Middle vs OD-004)
5. Structural Similarity Score (8-point quantitative comparison)

Synthesis framework: 4-5 grammar signals = proceed; 4-5 derivative signals = revise; mixed = build second page on different content.

**Documentation Targets:**
- New document: `ephemeral/session-insights/validation-framework.md`
- `~/.claude/skills/perceptual-auditing/SKILL.md` -- Add grammar-vs-derivative audit mode
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- Add validation test plan

**Priority:** HIGH -- directly needed before building the Middle-tier experiment

---

### I-10: Case Studies as "Novels" -- Three Functions

**Insight:** Case studies serve three distinct functions that should be explicitly documented:
1. Comprehension aid (see principles in action -- "what does spacing compression LOOK LIKE?")
2. Verification reference (Phase 5+ -- "is my implementation as principled as the showcase?")
3. Vocabulary expansion (Ceiling+ -- discover mechanism COMBINATIONS through example)

The third function is tier-gated: only relevant at Ceiling+ where combination deployment matters.

**Documentation Targets:**
- `design-system/compositional-core/case-studies/_INDEX.md` -- Add "How to Use Case Studies" section with three functions
- `design-system/compositional-core/CLAUDE.md` -- Add case study usage guidance per tier

**Priority:** MEDIUM -- affects case study ingestion but doesn't change architecture

---

## PROSPECTIVE TO-DOS (Feed Into)

These insights feed into these existing/potential work items:

1. **Skill enrichment** (tension-composition/SKILL.md):
   - Replace "sample 2-4 mechanisms" (I-01, I-04)
   - Add tier-specific mechanism deployment instructions (I-04)
   - Add semantic justification requirement (I-03)
   - Add mechanism combination guidance for Ceiling+ (I-04)

2. **Perceptual auditing enrichment** (perceptual-auditing/SKILL.md):
   - Add semantic value audit question (I-03)
   - Add grammar-vs-derivative audit mode (I-09)

3. **Compositional-core documentation**:
   - Mechanism catalog provenance and terminology (I-01, I-05, I-08)
   - Case study usage guide (I-10)
   - Rigidity quick-reference (I-02)
   - Vocabulary vs library with concrete examples (I-01)

4. **Tier methodology enrichment**:
   - Individual → combination → multi-pattern framing (I-04)
   - Experimental design logic (I-07)
   - Ideology behind lookup decisions (I-06)
   - Validation test plan (I-09)

5. **New validation framework**:
   - 5-test protocol for grammar vs derivative (I-09)
   - Semantic vs arbitrary value test (I-03)

---

## STATUS

- [ ] I-01: Vocabulary vs Library -- NOT YET APPLIED
- [ ] I-02: Rigidity Taxonomy Examples -- NOT YET APPLIED
- [ ] I-03: Semantic Value Test -- NOT YET APPLIED
- [ ] I-04: Tier Distinction Framing -- NOT YET APPLIED
- [ ] I-05: Showcase DNA Acknowledgment -- NOT YET APPLIED
- [ ] I-06: Lookup Ideology Documentation -- NOT YET APPLIED
- [ ] I-07: Experimental Design Logic -- NOT YET APPLIED
- [ ] I-08: Terminology Clarification -- NOT YET APPLIED
- [ ] I-09: Validation Framework -- NOT YET APPLIED
- [ ] I-10: Case Study Functions -- NOT YET APPLIED

---

*This document will be enriched by the session-enrichment agent team. Each insight will be analyzed from multiple dimensions and mapped to concrete documentation changes.*
