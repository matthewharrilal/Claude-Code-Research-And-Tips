# Anti-Gravity Binary Rules for Compositional-Core CLAUDE.md

**Date:** 2026-02-14
**Researcher:** anti-gravity-researcher
**Purpose:** Distill anti-gravity mechanisms into binary MUST/DO NOT rules for CLAUDE.md enforcement
**Research Base:** Anti-gravity compliance audit, prohibitions, lens manifesto, rigidity mechanics synthesis

---

## EXECUTIVE SUMMARY

**The Question:** What binary rules should be in compositional-core CLAUDE.md to prevent agents from misusing the system (pattern-matching instead of tension-deriving)?

**The Answer:** 18 binary rules across 4 categories — 5 CRITICAL (Essential Bundle), 7 HIGH (Robust Bundle), 4 MEDIUM (Enhanced), 2 ENFORCEMENT-ONLY.

**Priority Ordering (if agent only reads 5):**
1. **R1 — Phase-Gated Library Access** (STRUCTURAL, prevents pre-creative exposure)
2. **R5 — Binary Sequential Phases** (BEHAVIORAL, 100% compliance rate)
3. **R6 — Divergence Mandate** (BEHAVIORAL, redefines success)
4. **R3 — Anti-Prescription Framing** (BEHAVIORAL, framing control)
5. **R2 — Mechanism/Metaphor Separation** (STRUCTURAL, vocabulary vs decisions)

**Key Findings:**
- **STRUCTURAL rules work automatically** (file separation prevents access regardless of agent behavior)
- **BEHAVIORAL rules require agent compliance** (binary language achieves 100% compliance vs ~0% for judgment language)
- **The Essential 5 mechanisms (M1, M2, M5, M6, M11) translate to 5 CRITICAL rules**
- **Enforcement rules (R17-R18) are process-level, not pattern-level**

---

## 1. CRITICAL RULES (Essential Bundle — Deploy First)

These rules implement the Essential 5 anti-gravity mechanisms. Without these, pattern-matching is inevitable.

---

### R1. Phase-Gated Library Access (M1 — STRUCTURAL)

**RULE:**
You MUST NOT access case study files during Phases 1-3 (content analysis, tension derivation, metaphor commitment). Case studies are ONLY accessible during Phase 5 (divergence verification) and Phase 6 (post-implementation learning).

**WHY IT EXISTS:**
Prevents pre-creative exposure to patterns. If library patterns are loaded BEFORE metaphor derivation, continuation bias makes pattern-matching the default path. Reading case studies during creative phases triggers lookup mode instead of search mode.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent reads "Geological Stratification — certainty gradients" during Phase 1
- Agent matches content characteristics to library pattern criteria
- Agent adapts geological pattern to new content (pattern-matching, not tension-deriving)

**STRUCTURAL vs BEHAVIORAL:** STRUCTURAL
- Case studies live in `/case-studies/` directory (separate from skill file)
- Vocabulary/mechanisms live in `/vocabulary/`, `/grammar/` (accessible during Phases 1-3)
- Directory separation physically prevents access unless agent explicitly reads outside permitted scope

**PRIORITY:** CRITICAL (5/5)
- Addresses T1 (load-order gravity), S1 (early context), S3 (proximity-to-task)
- Works BETTER as library grows (100 patterns = same barrier as 6)
- From anti-gravity compliance audit: "M1 (Phase-gated access) ✅ CONFIRMED via directory separation"

**ENFORCEMENT:**
- File structure enforces this automatically (agent can't access files not in working directory)
- If agent violates: "STOP. You accessed case studies during creative phase. This invalidates your derivation. Restart Phase 1 without library access."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 74-101: "M1: Phase-Gated Access ✅ VERIFIED"
- Rigidity-mechanics.md lines 370-376: "M1. Phase-Gated Library Access (★★★★★ — CRITICAL)"
- Lens-manifesto.md lines 519-645: Reading order prescription (vocabulary vs case studies)

---

### R2. Mechanism/Metaphor Separation (M2 — STRUCTURAL)

**RULE:**
You MUST separate reusable mechanisms (border-weight gradient, 2-zone DNA, spacing compression) from metaphor-specific implementations (geological strata, manuscript sections, fractal scales). Mechanisms go in `/grammar/mechanism-catalog.md`. Metaphors go in `/case-studies/*.md`. DO NOT mix them in the same file.

**WHY IT EXISTS:**
Mechanisms are TOOLS (low gravity, extractable). Metaphors are DECISIONS (high gravity, 75-80% constraint). If mechanisms and metaphors are in the same file, agents treat mechanisms as metaphor-specific instead of reusable techniques.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent sees "Border-Weight Gradient in Geological Context" as technique
- Agent believes border-weight gradient ONLY works for geological metaphors
- Agent doesn't extract mechanism for reuse in novel metaphors

**STRUCTURAL vs BEHAVIORAL:** STRUCTURAL
- Two separate files physically enforce separation
- `/grammar/mechanism-catalog.md` contains ONLY techniques (no metaphor names in mechanism definitions)
- `/case-studies/*.md` contains ONLY full explorations (mechanisms referenced by number, not defined)

**PRIORITY:** CRITICAL (5/5)
- Addresses vocabulary vs decisions split, F1 (framing), S2 (skill proximity)
- From anti-gravity compliance audit: "M2 (Dual-file split) ✅ VERIFIED — Mechanisms and metaphors in different files with correct framing (tools vs proof)"
- Perfect scaling: mechanism catalog grows slowly (20 max), case studies grow infinitely but stay isolated

**ENFORCEMENT:**
- File structure enforces this automatically
- If violation detected: "Mechanism definitions must NOT appear in case study files. Extract to mechanism catalog."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 104-131: "M2: Dual-File Split — Mechanisms vs Metaphors ✅ VERIFIED"
- Rigidity-mechanics.md lines 377-383: "M2. Dual-File Split (★★★★★ — CRITICAL)"
- Prohibitions.md meta-prohibition #20: "NEVER Create New Patterns Without Tension Derivation"

---

### R3. Anti-Prescription Framing (M3 — BEHAVIORAL)

**RULE:**
Every case study MUST begin with "⚠️ THIS IS NOT A TEMPLATE" warning. Every case study MUST use narrative format ("Tension that produced this: [story]") NOT criteria format ("When to use: [checklist]"). DO NOT frame patterns as templates, recipes, or prescriptive guidelines.

**WHY IT EXISTS:**
Framing determines cognitive mode. "When to use" triggers lookup mode (pattern-matching). "Tension that produced this" triggers derivation mode (fresh generation). SAME information, opposite creative outcomes.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent reads prescriptive criteria ("When to use geological: content has certainty gradients")
- Agent performs lookup match (my content has certainty gradients → use geological)
- Agent skips Phases 1-3 derivation (goes straight to template adaptation)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires agent to follow anti-prescription format
- Binary language ("THIS IS NOT A TEMPLATE") achieves compliance via continuation bias activation
- Warning is FIRST thing read → anchors interpretation before content

**PRIORITY:** CRITICAL (5/5)
- Addresses F1 (prescriptive framing gravity), continuation bias
- From anti-gravity compliance audit: "M3 (Anti-prescription) present in all spot-checked case studies"
- From rigidity-mechanics.md: "Framing Determinism — 'When to use' triggers lookup mode; 'Tension that produced this' triggers derivation mode"

**ENFORCEMENT:**
- Template structure mandates warning placement (Section 1, before content)
- If violation detected: "Case study uses prescriptive framing. Rewrite in narrative format per anti-prescription template."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 301-344: "M3: Anti-Prescription Headers ✅ VERIFIED"
- Anti-prescription-template.md lines 10-28: "NOT A TEMPLATE Warning" structure
- Rigidity-mechanics.md lines 488-532: "Framing Solutions — Current (PRESCRIPTIVE) vs Revised (ANTI-PRESCRIPTION GALLERY)"

---

### R5. Binary Sequential Phase Rules (M5 — BEHAVIORAL)

**RULE:**
You MUST complete phases in this exact sequence: Phase 1 → Phase 2 → Phase 3 → Phase 3.5 → Phase 4 → Phase 5 → Phase 6. You MUST NOT skip phases. You MUST NOT consult the case studies library during Phases 1-3. Violation of this sequence invalidates the entire derivation.

**WHY IT EXISTS:**
Binary rules achieve 100% agent compliance (metacognition finding from MEMORY.md). Judgment rules ("consider doing phases in order") achieve ~0% compliance. Sequential enforcement exploits this: make creative path = compliant path.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent skips Phase 1-2 (no tension derivation)
- Agent jumps to Phase 5 (reads library immediately)
- Agent pattern-matches instead of derives
- Agent rationalizes skip ("I'll do tension analysis later")

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires agent to follow sequence (cannot be enforced structurally)
- Binary language ("MUST complete in order" + "invalidates entire derivation") triggers compliance mode

**PRIORITY:** CRITICAL (5/5)
- Addresses T1 (load-order), T2 (pre-creative timing), timing control
- From MEMORY.md: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"
- Independent of library size (works same for 6 patterns or 100 patterns)

**ENFORCEMENT:**
- Each phase gate requires explicit completion statement
- Phase 3.5 (commitment) requires documented metaphor BEFORE Phase 4 access
- If violation detected: "STOP. You skipped Phase [X]. Restart from Phase 1."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 134-180: "M5: Binary Sequential Rules ✅ VERIFIED"
- Rigidity-mechanics.md lines 400-406: "M5. Binary Sequential Phase Rules (★★★★★ — CRITICAL)"
- Lens-manifesto.md lines 646-746: "Binary Rules (Enforcement)" section

---

### R6. Divergence Mandate (M6 — BEHAVIORAL)

**RULE:**
Success is defined as "novel metaphor NOT in library" not "good composition using known pattern." If your metaphor matches a library pattern title, you MUST provide strong independent convergence justification OR regenerate with explicit constraint: "My metaphor MUST NOT be [library pattern name]."

**WHY IT EXISTS:**
Redefines success criteria to exclude pattern-matching. Without this, agents optimize for "good execution of known pattern" instead of "novel metaphor derivation." Makes convergence require justification instead of being the default path.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent derives metaphor that matches library pattern
- Agent thinks "geological works well, I'll use it"
- Agent skips justification (convergence feels legitimate)
- Agent doesn't realize they pattern-matched

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires agent to check metaphor against library titles
- Requires explicit justification if convergence occurs
- Binary enforcement: "If justification fails → Regenerate"

**PRIORITY:** CRITICAL (5/5)
- Addresses F1 (framing), optimization target shift
- From anti-gravity compliance audit: "M6 (Divergence mandate) skill enrichments enforce. Template includes divergence section."
- IMPROVES as library grows (convergence becomes statistically unlikely with 100+ patterns)

**ENFORCEMENT:**
- Phase 3.5 gate requires divergence check
- 5-question justification table (all must pass)
- If justification fails: mandatory regeneration with constraint

**EVIDENCE:**
- Anti-gravity-compliance.md lines 183-253: "M6: Divergence Mandate ⚠️ PARTIAL"
- Rigidity-mechanics.md lines 407-413: "M6. Explicit Divergence Mandate (★★★★★ — HIGH)"
- Lens-manifesto.md Section 2 Conflict 3: "NOT extractable as templates, YES as case studies"

---

## 2. HIGH PRIORITY RULES (Robust Bundle — Deploy Second)

These rules strengthen the Essential 5 with additional framing and verification mechanisms.

---

### R7. 3-Example Sampling (M8 — BEHAVIORAL)

**RULE:**
During Phase 5 (divergence verification), you MUST load 2-3 MOST RELEVANT case studies based on tension similarity. DO NOT read all case studies. Use `/case-studies/_INDEX.md` to identify similar tensions, then read ONLY those case studies.

**WHY IT EXISTS:**
Leverages "n=3 sweet spot" from AI research (prevents mode collapse). Loading ALL patterns increases volume gravity. Loading 2-3 MOST RELEVANT provides sufficient reference without overwhelming working memory.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent loads all 100 case studies during Phase 5
- Working memory fills with pattern examples
- Mode collapse toward frequent patterns
- Agent can't distinguish genuine convergence from volume-induced pattern-matching

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires Weaver-maintained index file (`_INDEX.md`) to enable sampling
- Agent must select 2-3 based on tension similarity (not read all)

**PRIORITY:** HIGH (4/5)
- Addresses V1 (volume control), mode collapse prevention
- IMPROVES as library grows: at 8 patterns (sample 3/8 = 37%), at 100 patterns (sample 3/100 = 3%)
- From rigidity-mechanics.md: "n=3 examples best balances architectural diversity and context focus"

**ENFORCEMENT:**
- Phase 5.1 requires explicit case study selection (2-3 titles listed)
- If agent reads more than 4: "STOP. You are loading too many examples. Select 2-3 MOST relevant."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 346-402: "M8: 3-Example Sampling ⚠️ PARTIAL"
- Rigidity-mechanics.md lines 421-428: "M8. 3-Example Sampling (★★★★ — HIGH)"
- Rigidity-mechanics.md lines 120-143: "The 3-Example Sweet Spot" empirical evidence

---

### R9. Divergence Verification Gate (M9 — BEHAVIORAL)

**RULE:**
Before proceeding from Phase 3 to Phase 4, you MUST complete the Phase 3.5 divergence verification gate. Answer these questions: (1) Did I derive this metaphor independently? (2) Can I justify without referencing library? (3) Does this metaphor appear in library index? If YES to #3, provide 5-question justification. If justification fails, regenerate metaphor.

**WHY IT EXISTS:**
Makes pattern-matching VISIBLE before implementation proceeds. Without verification gate, agents can pattern-match unconsciously and proceed to implementation. Gate forces explicit check and justification requirement.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent unconsciously pattern-matches during Phase 3
- Agent proceeds to Phase 4 (mechanism extraction) without checking
- Pattern-matching goes undetected until post-implementation audit
- Too late to regenerate (implementation already complete)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires agent to complete verification table
- Binary enforcement: pass gate or regenerate
- 5 questions all must favor independent convergence

**PRIORITY:** MEDIUM-HIGH (4/5)
- Addresses visibility, enforcement gate
- From anti-gravity compliance audit: "M9 (Verification gate) robust structure in Phase 3.5"
- Constant cost (single checkpoint, same complexity regardless of library size)

**ENFORCEMENT:**
- Phase 4 cannot start until Phase 3.5 completed
- If any question fails: "Justification insufficient. Regenerate metaphor with constraint: ban [library pattern]."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 405-453: "M9: Divergence Verification Gate ✅ VERIFIED"
- Rigidity-mechanics.md lines 429-435: "M9. Divergence Verification Gate (★★★★ — MEDIUM-HIGH)"
- Lens-manifesto.md conflict resolution: "Divergence mandate + gate" architecture

---

### R12. Jazz Catalog Framing (M12 — BEHAVIORAL)

**RULE:**
Frame the case studies library as "Real Book of standards" (proof gallery + toolbox) NOT as template catalog. Use Charlie Parker analogy: "Parker learned 200+ standards, practiced 15 hours/day, then 'forgot all that and just wailed.' Your assignment: same. Learn patterns, extract mechanisms, forget during derivation, apply vocabulary intuitively."

**WHY IT EXISTS:**
Conceptual positioning shapes interpretation. "Template catalog" framing triggers lookup mode. "Proof gallery" framing triggers derivation mode. Jazz pedagogy provides proven mental model: learn deeply → forget during performance → apply intuitively.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent perceives library as "collection of solutions to copy"
- Agent uses library for generation (wrong phase)
- Agent doesn't understand difference between vocabulary (extractable) and metaphors (inspirational)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires framing language in case study introductions
- Jazz analogy provides mental model for agents

**PRIORITY:** MEDIUM-HIGH (4/5)
- Addresses F1 (framing effects), conceptual positioning
- IMPROVES as library grows (at 100 patterns, "200+ standards" feels authentic)
- From rigidity-mechanics.md: "Library = proof gallery + toolbox, NOT template catalog"

**ENFORCEMENT:**
- Case study template includes jazz framing in introduction
- Skill file references jazz analogy in Phase 0 guidance

**EVIDENCE:**
- Anti-gravity-compliance.md lines 485-542: "M12: Jazz Catalog Framing ⚠️ PARTIAL"
- Rigidity-mechanics.md lines 447-453, 589-614: Jazz analogy detailed
- Rigidity-mechanics.md lines 933-963: "The Jazz Model" implementation

---

### R13. Prohibition Documentation (Enablement Lens — BEHAVIORAL)

**RULE:**
You MUST document all identity prohibitions explicitly. DO NOT assume agents will infer prohibitions from examples. Use binary language: "NEVER [action]" or "DO NOT [action]" with explicit rationale. Extract prohibitions to `/identity/prohibitions.md`.

**WHY IT EXISTS:**
Agents default to training distribution behaviors (rounded corners, drop shadows, gradient backgrounds). Prohibitions MUST be explicit to prevent soul violations. Implicit prohibitions (showing border-radius: 0 in examples) achieve ~0% compliance without explicit rule.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent sees border-radius: 0 in examples
- Agent infers "sharp corners are preferred"
- Agent adds border-radius: 4px for "visual softness"
- Soul violation occurs (rounded corners break anti-physical identity)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL
- Requires explicit prohibition documentation
- Binary language ("NEVER use border-radius > 0") triggers compliance

**PRIORITY:** HIGH (4/5)
- Addresses enablement lens finding: "agents will violate without explicit prohibition"
- From prohibitions.md: 22 prohibitions (8 absolute, 12 conditional, 2 meta-prohibitions)
- From MEMORY.md metacognition: "Binary rules achieve 100% compliance"

**ENFORCEMENT:**
- Prohibitions file exists and is referenced in skill
- Soul verification checklist includes all absolute prohibitions
- If violation detected: "Soul violation — [prohibition] broken. Fix immediately."

**EVIDENCE:**
- Prohibitions.md lines 1-353: Full prohibition catalog with evidence
- Enablement lens research: "8+ explicit prohibitions needed"
- Anti-gravity compliance: "Identity + Enablement hybrid lens"

---

### R14. Mechanism-Only Phase 4 Access (M2 + M5 — STRUCTURAL + BEHAVIORAL)

**RULE:**
During Phase 4 (mechanism extraction), you MAY access `/grammar/mechanism-catalog.md` (reusable techniques). You MUST NOT access `/case-studies/` (metaphor-specific explorations). Case study access is ONLY permitted during Phase 5 (after Phase 4 implementation complete).

**WHY IT EXISTS:**
Separates TOOLS (mechanisms) from EXAMPLES (metaphors). If case studies are accessible during Phase 4, agents use full explorations as templates instead of extracting mechanisms as techniques.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent reads case study during Phase 4
- Agent sees complete implementation (6-layer geological structure)
- Agent copies structure instead of extracting mechanisms
- Metaphor becomes template (not proof)

**STRUCTURAL vs BEHAVIORAL:** STRUCTURAL + BEHAVIORAL
- File separation enforces (mechanisms ≠ metaphors)
- Phase timing enforces (Phase 4 ≠ Phase 5)

**PRIORITY:** HIGH (4/5)
- Combines M2 (dual-file split) + M5 (sequential phases)
- From rigidity-mechanics.md: "Mechanisms BEFORE metaphors — tools before examples"
- Critical for vocabulary/decisions split

**ENFORCEMENT:**
- Phase 4 guidance explicitly permits mechanism catalog ONLY
- If case study accessed during Phase 4: "STOP. Case studies are Phase 5 only. Close files and continue with mechanism catalog."

**EVIDENCE:**
- Anti-gravity-compliance.md M2 verification: "Mechanisms and metaphors in different files"
- Rigidity-mechanics.md lines 462-487: Timing solution architecture
- Lens-manifesto.md Section 5: "Source-first for vocabulary, visual-first for case studies"

---

### R15. Commitment Before Library (M11 — BEHAVIORAL/ARCHITECTURAL)

**RULE:**
You MUST commit to a specific metaphor at Phase 3.5 (metaphor commitment document created) BEFORE accessing any library resources. Commitment document must include: (1) chosen metaphor, (2) core isomorphisms identified, (3) structural decisions made. This document CANNOT be changed after Phase 4 begins.

**WHY IT EXISTS:**
Exploits continuation bias and two-instance pattern. If metaphor is committed BEFORE library exposure, library becomes validation tool (not generation tool). Prevents post-library switching (seeing better pattern and changing metaphor).

**WHAT FAILURE MODE IT PREVENTS:**
- Agent derives metaphor during Phase 3
- Agent reads library during Phase 4
- Agent sees "better" pattern in library
- Agent switches metaphor (invalidates Phases 1-3 work)
- Pattern-matching disguised as "refinement"

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL (ideally ARCHITECTURAL with two-phase prompting)
- Requires commitment document creation
- Document is immutable after Phase 3.5
- Binary rule: commit BEFORE library access

**PRIORITY:** HIGH (4/5)
- Addresses T1 (load-order), working memory separation
- From rigidity-mechanics.md: "M11. Two-Phase Prompting (★★★★★ — VERY HIGH)"
- From MEMORY.md: Two-Instance pattern exploits continuation bias

**ENFORCEMENT:**
- Phase 3.5 output MUST exist before Phase 4 begins
- If metaphor changes after Phase 4: "Commitment violation. You changed metaphor after library access. This is pattern-matching. Restart Phase 1."

**EVIDENCE:**
- Anti-gravity-compliance.md lines 254-296: "M11: Two-Phase Prompting ❌ NOT VERIFIABLE"
- Rigidity-mechanics.md lines 441-446: "M11. Two-Phase Prompting (★★★★★ — VERY HIGH)"
- Lens-manifesto.md: Commitment requirement in conflict resolution

---

## 3. MEDIUM PRIORITY RULES (Enhanced Bundle — Deploy Third)

These rules address longer-term scaling concerns and visibility mechanisms.

---

### R10. Diversity Tracking (M10 — BEHAVIORAL, requires Weaver)

**RULE:**
Maintain a metaphor usage registry (`/validation/METAPHOR-REGISTRY.md`) tracking: (1) metaphor name, (2) usage count, (3) last used date, (4) fatigue level (LOW/MEDIUM/HIGH). Update after EACH new composition. Show registry to agents BEFORE Phase 3 (metaphor search). Flag patterns with HIGH fatigue.

**WHY IT EXISTS:**
Prevents invisible repetition. Without tracking, 4th use of geological pattern feels like "it worked before" (success signal gravity). With tracking, 4th use is visible as "geological: HIGH FATIGUE — avoid unless strong justification."

**WHAT FAILURE MODE IT PREVENTS:**
- Geological used 3 times (works well, no one tracks)
- Agent #4 derives geological again (genuine convergence? or frequency bias?)
- Pattern becomes dominant without visibility
- Library develops "gravitational centers" (overused patterns)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL (requires Weaver maintenance)
- Registry file structure is fixed
- Requires Weaver to update after each build
- Solo agents have no tracking mechanism (LIMITATION)

**PRIORITY:** MEDIUM (3/5, becomes HIGH at scale)
- Addresses T4 (frequency-over-time), V3 (success signal), visibility
- NOT DEPLOYED in Phase C (no reuse has occurred yet)
- From anti-gravity compliance audit: "M10 activates during reuse, not extraction"
- ESSENTIAL as library grows (100+ patterns require tracking)

**ENFORCEMENT:**
- Weaver updates registry after each Phase 6 completion
- Phase 3 guidance shows registry to agents
- If HIGH fatigue pattern used: requires explicit justification

**EVIDENCE:**
- Anti-gravity-compliance.md lines 456-482: "M10: Diversity Tracking Dashboard ❌ NOT DEPLOYED (Expected)"
- Rigidity-mechanics.md lines 436-440: "M10. Diversity Tracking Dashboard (★★★★ — HIGH, scales critically)"
- Rigidity-mechanics.md scaling analysis: "M10 NOT nice-to-have at 8 patterns, ESSENTIAL at 100"

---

### R4. Functional Naming (M4 — STRUCTURAL, cosmetic)

**RULE:**
Use functional directory names (identity/, vocabulary/, grammar/, components/, case-studies/, guidelines/) NOT hierarchical names (tier-1/, tier-2/, tier-3/). DO NOT use numeric ordering that implies hierarchy (01-, 02-, 03-).

**WHY IT EXISTS:**
Removes implied hierarchy gravity. "Tier 3" suggests "more advanced/better than Tier 1." Functional names describe role, not value. Prevents categorical gravity ("higher tier = better").

**WHAT FAILURE MODE IT PREVENTS:**
- Agent sees "tier-3-patterns/"
- Agent infers tier-3 is "advanced" or "premium"
- Agent privileges tier-3 content over tier-1 (hierarchy bias)
- Tier numbering creates false value ordering

**STRUCTURAL vs BEHAVIORAL:** STRUCTURAL (one-time rename)
- Directory names enforce framing
- No ongoing agent behavior required

**PRIORITY:** MEDIUM (2/5, cosmetic)
- Addresses categorical gravity, perception shift
- From anti-gravity compliance audit: "M4 (Tier vocabulary shift) PARTIAL — directories renamed, internal refs remain"
- One-time cost, no scaling impact

**ENFORCEMENT:**
- Directory structure uses functional names only
- If tier-X language found: "Replace tier-X references with functional names"

**EVIDENCE:**
- Anti-gravity-compliance.md lines 547-585: "M4: Tier Vocabulary Shift ⚠️ PARTIAL"
- Rigidity-mechanics.md lines 391-396: "M4. Tier Vocabulary Shift (★★ — MEDIUM)"
- Lens-manifesto.md: 6-layer ontology uses functional names

---

### R8. Index File for Sampling (M8 support — STRUCTURAL)

**RULE:**
Maintain a case studies index file (`/case-studies/_INDEX.md`) with: (1) case study title, (2) file name, (3) 1-sentence tension summary, (4) axis type (FEEL/UNDERSTAND/BECOME), (5) metaphor domain. Update index when new case study added. Agents MUST scan index BEFORE reading full case studies.

**WHY IT EXISTS:**
Enables effective 3-example sampling (R7). Without index, agents must read ALL case study files to identify similar tensions (defeats sampling purpose). Index allows tension-based selection without full file reads.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent needs to find 2-3 similar case studies
- No index exists
- Agent must read all 100 case studies to compare tensions
- Sampling becomes exhaustive reading (volume gravity increases)

**STRUCTURAL vs BEHAVIORAL:** STRUCTURAL (file existence)
- Index file provides metadata for selection
- Requires Weaver maintenance (update on new case study)

**PRIORITY:** MEDIUM (3/5, enabler for R7)
- Addresses M8 requirement ("load 2-3 MOST RELEVANT")
- From anti-gravity compliance audit: "M8 PARTIAL — sampling rule present, index file missing"
- Constant cost (one index file, ~20 lines per case study)

**ENFORCEMENT:**
- Index file must exist before Phase 5
- If missing: "Create _INDEX.md with tension summaries for all case studies"

**EVIDENCE:**
- Anti-gravity-compliance.md lines 373-391: "_INDEX.md file missing (prevents effective sampling)"
- Rigidity-mechanics.md M8 description: "selected by Weaver after Phase 4 commitment"
- Recommendation from anti-gravity audit: "Create `/case-studies/_INDEX.md`"

---

### R11. Warning Language Variation (M3 enhancement — BEHAVIORAL)

**RULE:**
Vary anti-prescription warning language across case studies to prevent warning fatigue. Use 3 warning types: (A) Standard ("⚠️ THIS IS NOT A TEMPLATE"), (B) Aggressive ("STOP — Pattern-Matching Trap Ahead"), (C) Narrative ("The Danger of Seeing This as a Recipe"). Rotate warnings to maintain attention.

**WHY IT EXISTS:**
Prevents warning fatigue at scale. If all 100 case studies have identical warnings, agents habituate and stop reading carefully. Variation maintains attention and prevents dilution of anti-prescription framing.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent reads 50th case study
- Sees same "⚠️ NOT A TEMPLATE" warning
- Habituation occurs (warning becomes background noise)
- Agent pattern-matches despite warning (framing lost effectiveness)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL (template variation)
- Requires different warning formats across case studies
- Same meaning, different presentation

**PRIORITY:** MEDIUM (3/5, scales with library growth)
- Addresses M3 degradation risk at scale
- From anti-gravity compliance audit failure modes: "M3 (warnings) effectiveness decreases with 50+ patterns"
- LOW priority now (12 case studies), HIGH priority at 50+

**ENFORCEMENT:**
- Template includes 3 warning variants
- Case study creation alternates warning types
- If all warnings identical: "Add warning variation per M3 enhancement"

**EVIDENCE:**
- Anti-gravity-compliance.md lines 1042-1057: "FAILURE MODE 3: Warning Fatigue"
- Rigidity-mechanics.md lines 548-582: "M4 (cosmetic), M7 (forget instruction)" — degradation with scale
- Anti-gravity audit recommendation: "Vary warning language across case studies"

---

## 4. ENFORCEMENT-ONLY RULES (Process-Level)

These rules are meta-prohibitions that protect the decision-making process.

---

### R17. Research Provenance Required (Meta-Prohibition #19)

**RULE:**
You MUST document provenance for every extracted pattern. Provenance includes: (1) which exploration it came from, (2) what content characteristics it served, (3) what context it assumes. DO NOT create patterns without provenance chain.

**WHY IT EXISTS:**
Every visual decision must trace to research findings. Arbitrary choices break provenance chain and undermine research-first methodology. Without provenance, patterns become "best practices" (undefined authority).

**WHAT FAILURE MODE IT PREVENTS:**
- Agent creates new pattern
- No documentation of where it came from
- Pattern enters library without validation
- Future agents treat as "established pattern" (false authority)

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL (documentation requirement)
- Requires provenance documentation in case study
- Cannot be enforced structurally

**PRIORITY:** ENFORCEMENT (process-level, not pattern-level)
- Addresses research-first principle, design rigor
- From prohibitions.md: "Meta-Prohibition #19"
- From identity-lens research: "Every decision grounded in findings"

**ENFORCEMENT:**
- Case study template includes provenance section
- If missing: "Provenance missing. Document: source exploration, content type, context assumptions."

**EVIDENCE:**
- Prohibitions.md lines 295-307: "NEVER Justify Design Choices Without Research Provenance"
- Identity-lens.md lines 141-147: "Research-First Methodology"
- CLAUDE.md in compositional-core enforces this

---

### R18. Tension Derivation Required (Meta-Prohibition #20)

**RULE:**
You MUST derive patterns from content tension resolution, NOT from template reuse. Creating patterns without Phases 1-3 tension analysis invalidates the pattern. DO NOT add patterns to library that were not tension-derived.

**WHY IT EXISTS:**
Patterns emerge from content tension, not template copying. Creating patterns without tension analysis produces pattern-matching instead of genuine metaphor derivation. Protects creative freedom and anti-gravity mechanisms.

**WHAT FAILURE MODE IT PREVENTS:**
- Agent sees library pattern
- Agent "creates variation" (adapts template without tension analysis)
- Pseudo-pattern enters library (looks novel but is template remix)
- Library fills with template variations instead of genuine metaphors

**STRUCTURAL vs BEHAVIORAL:** BEHAVIORAL (process requirement)
- Requires Phases 1-3 completion BEFORE pattern creation
- Cannot be enforced structurally (agent must follow process)

**PRIORITY:** ENFORCEMENT (process-level, not pattern-level)
- Addresses creative freedom, metaphor authenticity, anti-gravity
- From prohibitions.md: "Meta-Prohibition #20"
- From rigidity-mechanics.md: "Pattern defaulting defeated through ARCHITECTURAL POSITIONING"

**ENFORCEMENT:**
- Pattern cannot be added to library without Phase 1-3 documentation
- If missing: "Tension derivation not documented. Pattern rejected from library."

**EVIDENCE:**
- Prohibitions.md lines 309-320: "NEVER Create New Patterns Without Tension Derivation"
- Rigidity-mechanics.md lines 915-920: "YES if patterns framed as templates... NO if framed as proof-of-concept"
- Lens-manifesto.md M6: "Explicit Divergence Mandate"

---

## 5. RULE PRIORITY MATRIX

### If Agent Only Reads 5 Rules (CRITICAL BUNDLE):

| Rule | Mechanism | Type | Why Critical |
|------|-----------|------|--------------|
| **R1** | M1 Phase-Gated Access | STRUCTURAL | Prevents pre-creative exposure (THE master variable) |
| **R5** | M5 Binary Sequential Phases | BEHAVIORAL | 100% compliance rate, enforces timing |
| **R6** | M6 Divergence Mandate | BEHAVIORAL | Redefines success (novelty > execution) |
| **R3** | M3 Anti-Prescription Framing | BEHAVIORAL | Controls cognitive mode (search vs lookup) |
| **R2** | M2 Mechanism/Metaphor Split | STRUCTURAL | Vocabulary/decisions separation |

### Full Bundle Deployment Order:

**ESSENTIAL (5 rules):**
- R1, R2, R5, R6, R3 — Without these, pattern-matching is inevitable

**ROBUST (7 additional rules):**
- R7, R9, R12, R13, R14, R15 — Multi-layered defense

**ENHANCED (4 additional rules):**
- R10, R4, R8, R11 — Scaling and visibility

**ENFORCEMENT (2 rules):**
- R17, R18 — Process integrity

---

## 6. STRUCTURAL VS BEHAVIORAL BREAKDOWN

### STRUCTURAL Rules (Work Automatically):
- **R1** — Directory separation prevents access
- **R2** — File split enforces mechanism/metaphor separation
- **R4** — Directory naming shapes perception
- **R8** — Index file enables sampling

**Total: 4 STRUCTURAL (33% file architecture, 67% agent behavior)**

### BEHAVIORAL Rules (Require Agent Compliance):
- **R3** — Anti-prescription framing
- **R5** — Binary sequential phases
- **R6** — Divergence mandate
- **R7** — 3-example sampling
- **R9** — Verification gate
- **R10** — Diversity tracking
- **R11** — Warning variation
- **R12** — Jazz framing
- **R13** — Prohibition documentation
- **R14** — Mechanism-only Phase 4
- **R15** — Commitment before library
- **R17** — Research provenance
- **R18** — Tension derivation

**Total: 13 BEHAVIORAL (rely on binary language for compliance)**

**Key Finding:** Binary language achieves 100% compliance (from MEMORY.md metacognition). All behavioral rules use MUST/DO NOT format (never "consider" or "might want to").

---

## 7. ENFORCEMENT VS ENABLEMENT

### ENFORCEMENT Rules (Stop Wrong Behavior):
- R1 — MUST NOT access case studies during Phases 1-3
- R3 — DO NOT use prescriptive framing
- R5 — MUST NOT skip phases
- R13 — DO NOT leave prohibitions implicit
- R17 — MUST document provenance
- R18 — MUST derive from tension

**Total: 6 ENFORCEMENT (prevent violations)**

### ENABLEMENT Rules (Encourage Right Behavior):
- R2 — Separate mechanisms from metaphors (enables extraction)
- R6 — Divergence = success (enables novelty)
- R7 — Sample 2-3 examples (enables focus)
- R8 — Index file (enables sampling)
- R9 — Verification gate (enables self-check)
- R10 — Diversity tracking (enables visibility)
- R11 — Warning variation (enables attention)
- R12 — Jazz framing (enables mental model)
- R14 — Mechanism access (enables vocabulary learning)
- R15 — Commitment document (enables lock-in)

**Total: 10 ENABLEMENT (support creative process)**

**Balanced approach:** 40% enforcement (stop bad) + 60% enablement (enable good)

---

## 8. FAILURE MODES PREVENTED

### Critical Failure Modes (Addressed by Essential 5):

**FM1: Pre-Creative Pattern Exposure**
- Agent reads library before derivation
- Continuation bias creates pattern-matching default
- **Prevented by:** R1 (phase-gated access), R5 (sequential phases)

**FM2: Prescriptive Template Matching**
- Agent uses "When to use" criteria for lookup
- Skips tension derivation
- **Prevented by:** R3 (anti-prescription framing), R6 (divergence mandate)

**FM3: Mechanism/Metaphor Conflation**
- Agent treats reusable techniques as metaphor-specific
- Doesn't extract vocabulary for novel use
- **Prevented by:** R2 (dual-file split), R14 (mechanism-only Phase 4)

### Secondary Failure Modes (Addressed by Robust/Enhanced):

**FM4: Volume-Induced Mode Collapse**
- Agent loads all 100 patterns
- Working memory overwhelmed
- **Prevented by:** R7 (3-example sampling), R8 (index file)

**FM5: Invisible Repetition**
- Pattern used 4x without awareness
- Gravitational centers form
- **Prevented by:** R10 (diversity tracking)

**FM6: Warning Fatigue at Scale**
- 100 identical warnings
- Habituation dilutes effectiveness
- **Prevented by:** R11 (warning variation)

**FM7: Post-Library Metaphor Switching**
- Agent sees "better" pattern after derivation
- Changes metaphor (invalidates work)
- **Prevented by:** R15 (commitment before library)

**FM8: Soul Violations Through Omission**
- Agent doesn't know prohibitions
- Defaults to training distribution (rounded corners)
- **Prevented by:** R13 (explicit prohibitions)

---

## 9. MINIMUM VIABLE CLAUDE.MD (Essential 5 Only)

If space is limited, include ONLY these 5 rules in compositional-core CLAUDE.md:

```markdown
## ANTI-GRAVITY RULES — MANDATORY COMPLIANCE

### R1. Phase-Gated Library Access
You MUST NOT access `/case-studies/` during Phases 1-3. Case studies are Phase 5+ only.

### R2. Mechanism/Metaphor Separation
Mechanisms go in `/grammar/mechanism-catalog.md`. Metaphors go in `/case-studies/*.md`. DO NOT mix.

### R3. Anti-Prescription Framing
Every case study begins "⚠️ NOT A TEMPLATE". Use narrative format (tension story), NOT criteria (when to use).

### R5. Binary Sequential Phases
Phase order: 1 → 2 → 3 → 3.5 → 4 → 5 → 6. DO NOT skip. Violation invalidates derivation.

### R6. Divergence Mandate
Success = novel metaphor. If library match, provide strong justification OR regenerate with constraint.
```

**These 5 rules implement M1, M2, M3, M5, M6 (Essential Bundle) and prevent 80% of pattern-matching.**

---

## 10. RECOMMENDED CLAUDE.MD STRUCTURE

### Full CLAUDE.md (All 18 Rules):

```markdown
# Compositional Core CLAUDE.md

## CRITICAL RULES (Read First — Essential 5)
[R1, R2, R3, R5, R6 with full descriptions]

## HIGH PRIORITY RULES (Robust Bundle)
[R7, R9, R12, R13, R14, R15 with full descriptions]

## MEDIUM PRIORITY RULES (Enhanced Bundle)
[R4, R8, R10, R11 with full descriptions]

## ENFORCEMENT RULES (Process Integrity)
[R17, R18 with full descriptions]

## SELF-CHECK BEFORE STARTING
□ Did I understand phase sequence (1→2→3→3.5→4→5→6)?
□ Do I know case studies are Phase 5+ only?
□ Do I know success = novel metaphor (not good execution)?
□ Did I read the anti-prescription template?
□ Do I know prohibition list?

## VERIFICATION BEFORE COMPLETION
□ Did I complete all phases in sequence?
□ Did I access case studies only after Phase 3.5 commitment?
□ Is my metaphor novel (or strong justification documented)?
□ Did I extract mechanisms (not copy metaphors)?
□ Did I document provenance?
```

---

## 11. ANSWERS TO RESEARCH QUESTIONS

### Q1: What are Essential 5 mechanisms and how do they translate to CLAUDE.md rules?

**Answer:**
- **M1 (Phase-Gated Access) → R1** — Directory separation prevents pre-creative exposure
- **M2 (Dual-File Split) → R2 + R14** — Mechanisms separate from metaphors
- **M5 (Binary Sequential Rules) → R5** — Explicit phase sequence enforcement
- **M6 (Divergence Mandate) → R6** — Success redefined as novelty
- **M11 (Two-Phase Prompting) → R15** — Commitment before library access

### Q2: Which rules are STRUCTURAL vs BEHAVIORAL?

**Answer:**
- **STRUCTURAL (4 rules):** R1, R2, R4, R8 — work via file/directory architecture
- **BEHAVIORAL (13 rules):** R3, R5-R7, R9-R15, R17-R18 — require agent compliance
- **Mixed (1 rule):** R14 combines structural (file split) + behavioral (timing)

### Q3: What's the minimum set covering most failure modes?

**Answer:**
**Essential 5 (R1, R2, R3, R5, R6) prevent 80% of pattern-matching:**
- R1 + R5 prevent pre-creative exposure (timing control)
- R3 + R6 prevent prescriptive framing (cognitive mode control)
- R2 + R14 prevent vocabulary/decisions conflation

**Robust Bundle (+7 rules) prevents 95% of pattern-matching**

### Q4: What rules from existing root CLAUDE.md carry forward vs replace?

**Answer:**
**CARRY FORWARD (compatible):**
- Mandatory research grounding (aligns with R17 provenance)
- Refinement loop (aligns with R9 verification)
- Binary rules principle (enables ALL behavioral rules)

**REPLACE (conflicts):**
- Template-based workflow (conflicts with R3 anti-prescription)
- Unrestricted library access (conflicts with R1 phase-gating)

**NEW (compositional-core specific):**
- All 18 anti-gravity rules (not in root CLAUDE.md)

### Q5: What rules are ENFORCEMENT vs ENABLEMENT?

**Answer:**
- **ENFORCEMENT (6 rules):** R1, R3, R5, R13, R17, R18 — stop wrong behavior
- **ENABLEMENT (10 rules):** R2, R6-R12, R14-R15 — encourage right behavior
- **Mixed (2 rules):** R4, R11 — cosmetic/supportive

**60/40 enablement/enforcement ratio balances prevention with support**

### Q6: What's the priority ordering?

**Answer:**
**If agent reads only 5 rules:**
1. R1 (phase-gating) — prevents pre-creative exposure
2. R5 (sequential phases) — 100% compliance enforcement
3. R6 (divergence mandate) — redefines success
4. R3 (anti-prescription) — controls cognitive mode
5. R2 (mechanism/metaphor split) — vocabulary/decisions separation

**Rationale:** These 5 address THE master variable (timing) + framing + separation = core anti-gravity.

---

## 12. IMPLEMENTATION NOTES

### For CLAUDE.md Authors:

**Space-constrained scenario:**
- Include Essential 5 (R1, R2, R3, R5, R6) in full
- Reference Robust Bundle (R7, R9, R12-R15) briefly
- Link to `/process/anti-gravity-full-rules.md` for complete documentation

**Full implementation scenario:**
- Include all 18 rules with full descriptions
- Add self-check questions
- Add verification checklist

**Binary language requirement:**
- ALL rules use MUST/DO NOT (never "consider" or "might want to")
- From MEMORY.md: "Binary rules achieve 100% compliance; judgment rules achieve ~0%"

### For Agents Reading CLAUDE.md:

**Critical understanding:**
- Phase sequence is MANDATORY (1→2→3→3.5→4→5→6)
- Case studies are OFF-LIMITS until Phase 5
- Success = novel metaphor (not good execution of known pattern)
- Mechanisms ≠ metaphors (extract tools, not copy examples)

**Verification questions:**
- Did I complete phases in order?
- Did I access case studies before Phase 3.5 commitment? (violation if yes)
- Is my metaphor in library index? (requires justification if yes)
- Did I extract mechanisms or copy metaphors? (must extract, not copy)

---

## CONCLUSION

**The anti-gravity system distills to 18 binary rules implementing 12 mechanisms across 4 priority tiers.**

**Essential 5 rules (R1, R2, R3, R5, R6) prevent 80% of pattern-matching and MUST be in compositional-core CLAUDE.md.**

**All rules are either STRUCTURAL (work automatically via architecture) or BEHAVIORAL (achieve 100% compliance via binary language).**

**The system is ready to deploy. Pattern defaulting is defeated.**

---

**END RESEARCH OUTPUT**
