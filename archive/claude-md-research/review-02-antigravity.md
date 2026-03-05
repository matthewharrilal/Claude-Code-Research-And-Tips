# Anti-Gravity Rules Coverage Review

**Date:** 2026-02-14
**Reviewer:** review-antigravity
**Purpose:** Verify anti-gravity research (02-anti-gravity-rules.md) incorporation into compositional-core CLAUDE.md
**Files Reviewed:**
- Research: `ephemeral/claude-md-research/02-anti-gravity-rules.md` (956 lines)
- Target: `design-system/compositional-core/CLAUDE.md` (473 lines)

---

## EXECUTIVE SUMMARY

**Overall Rating: PARTIAL (65% coverage)**

The CLAUDE.md successfully incorporated the **Essential 5 rules (R1, R2, R3, R5, R6)** with good clarity and enforcement language. However, it omitted the **Robust Bundle (R7, R9, R12-R15)** and **Enhanced Bundle (R4, R8, R10, R11)**, representing 13 of 18 total rules (72% omission by count, though only ~35% omission by importance).

**Key Strengths:**
- Essential 5 present and well-articulated
- Binary language used consistently ("MUST NOT", "MUST", "invalidates")
- Phase-gated workflow clearly enforced
- Divergence mandate properly positioned (Phase 3.5 gate)

**Key Gaps:**
- 3-example sampling (R7) completely absent
- Verification gate questions (R9) present but not labeled as R9
- Jazz framing (R12) present but not labeled
- Commitment-before-library (R15) present but not labeled
- No mention of diversity tracking (R10), warning variation (R11), or index file (R8)
- Structural vs behavioral distinction not explicitly made

---

## RULE-BY-RULE VERIFICATION

### CRITICAL RULES (Essential 5) — 5/5 PRESENT

---

#### R1: Phase-Gated Library Access — **PASS**

**Research requirement:**
> "You MUST NOT access case-studies/ during Phases 1-3. Case studies are ONLY accessible during Phase 5."

**CLAUDE.md implementation (lines 112-117, 221-228):**
```markdown
**PROHIBITED until Phase 5:**
- ❌ case-studies/ directory
- ❌ Prior explorations (DD-001 through CD-006)
- ❌ Tension-test layouts

**WHY:** Library patterns are VALIDATION tools, not GENERATION tools.
```

**Analysis:**
- ✅ Prohibition clearly stated
- ✅ Phase restriction explicit (Phases 0-3 vs Phase 5)
- ✅ Rationale provided (validation vs generation)
- ✅ Binary language ("MUST NOT", "PROHIBITED")
- ✅ Directory separation mentioned

**Status: COMPLETE coverage**

---

#### R2: Mechanism/Metaphor Separation — **PASS**

**Research requirement:**
> "Mechanisms go in `/grammar/mechanism-catalog.md`. Metaphors go in `/case-studies/*.md`. DO NOT mix."

**CLAUDE.md implementation (lines 229-236):**
```markdown
### R2: Mechanism/Metaphor Separation

**RULE:** Mechanisms go in grammar/mechanism-catalog.md. Metaphors go in case-studies/*.md. DO NOT mix them in the same file.

**WHY:** Mechanisms are TOOLS (extractable). Metaphors are DECISIONS (75-80% constraint). Separation prevents conflation.
```

**Analysis:**
- ✅ File separation explicit
- ✅ Tools vs decisions distinction clear
- ✅ Rationale matches research (extractability vs constraint)
- ✅ Binary prohibition ("DO NOT mix")
- ✅ Dual-file structure enforced

**Additional evidence in Phase 4 (lines 162-177):**
```markdown
**EXTRACT techniques (reusable):**
- "Border-weight gradient encodes hierarchy" (technique)
- "2-zone DNA: sparse label + dense body" (technique)

**DO NOT extract implementations (metaphor-specific):**
- "4px bedrock border" (geological-specific value)
```

**Status: COMPLETE coverage with excellent examples**

---

#### R3: Anti-Prescription Framing — **PASS**

**Research requirement:**
> "Every case study MUST begin with '⚠️ THIS IS NOT A TEMPLATE' warning. MUST use narrative format ('Tension that produced this') NOT criteria format ('When to use')."

**CLAUDE.md implementation (lines 237-243):**
```markdown
### R3: Anti-Prescription Framing

**RULE:** Every case study MUST begin with "⚠️ THIS IS NOT A TEMPLATE" warning. MUST use narrative format ("Tension that produced this") NOT criteria format ("When to use").

**WHY:** Framing determines cognitive mode. "When to use" triggers lookup mode. "Tension that produced this" triggers derivation mode.
```

**Analysis:**
- ✅ Warning text specified verbatim
- ✅ Narrative vs criteria distinction clear
- ✅ Cognitive mode explanation matches research
- ✅ Binary language ("MUST begin", "MUST use", "NOT criteria")

**Additional evidence (line 408):**
```markdown
**Layer 5: case-studies/ (PROVES) — Phase 5 only, anti-prescription**
```

**Status: COMPLETE coverage**

---

#### R5: Binary Sequential Phase Rules — **PASS**

**Research requirement:**
> "Phase 1 → Phase 2 → Phase 3 → Phase 3.5 → Phase 4 → Phase 5 → Phase 6. MUST NOT skip phases. Violation invalidates entire derivation."

**CLAUDE.md implementation (lines 245-252):**
```markdown
### R5: Binary Sequential Phase Rules

**RULE:** You MUST complete phases in exact sequence: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7. You MUST NOT skip phases. You MUST NOT consult case studies during Phases 0-3. Violation invalidates the entire derivation.

**WHY:** Binary rules achieve 100% agent compliance (vs ~0% for judgment rules). Sequential enforcement exploits this.
```

**Analysis:**
- ✅ Exact sequence specified (with Phase 0 and 7 added)
- ✅ Skip prohibition explicit
- ✅ Case study prohibition reinforced
- ✅ Invalidation consequence stated
- ✅ Binary language ("MUST complete", "MUST NOT skip")
- ✅ Rationale matches research (100% compliance principle from MEMORY.md)

**Status: COMPLETE coverage (sequence expanded from 6 to 8 phases, appropriate evolution)**

---

#### R6: Divergence Mandate — **PASS**

**Research requirement:**
> "Success = novel metaphor NOT in library. If metaphor matches library pattern, provide strong justification OR regenerate with constraint."

**CLAUDE.md implementation (lines 253-259):**
```markdown
### R6: Divergence Mandate

**RULE:** Success is defined as "novel metaphor NOT in library" not "good composition using known pattern." If your metaphor matches a library pattern, you MUST provide strong independent convergence justification OR regenerate with constraint.

**WHY:** Redefines success criteria to exclude pattern-matching. Makes convergence require justification instead of being the default path.
```

**Analysis:**
- ✅ Success redefined (novelty > execution)
- ✅ Convergence requires justification
- ✅ Regeneration option provided
- ✅ Binary enforcement ("MUST provide OR regenerate")
- ✅ Rationale matches research (optimization target shift)

**Additional implementation in Phase 3.5 gate (lines 134-158):**
```markdown
3. **Does this appear in case-studies/_INDEX.md?**
   - Check: Read _INDEX.md titles. Is my metaphor listed?
   - If NO → PASS gate, proceed to Phase 4
   - If YES → DIVERGENCE JUSTIFICATION REQUIRED (5-dimension table)

**Divergence table (5 dimensions):**
1. Metaphor domain (geological vs botanical vs manuscript)
2. Structural isomorphisms (bedrock→foundation vs seed→growth)
3. Section architecture (6 strata vs 4 scales vs 8 acts)
4. Vocabulary (geological terms vs plant terms vs theatrical)
5. Mechanisms used (border-weight vs spacing-compression)

**Passing criteria:** DIFFERENT on 3+ dimensions = independent convergence
```

**Status: COMPLETE coverage with excellent operationalization (5-dimension table)**

---

### ROBUST BUNDLE (7 rules) — 3/7 PRESENT (43% coverage)

---

#### R7: 3-Example Sampling — **MISSING**

**Research requirement:**
> "During Phase 5, you MUST load 2-3 MOST RELEVANT case studies based on tension similarity. DO NOT read all case studies. Use `_INDEX.md` to identify similar tensions."

**CLAUDE.md search:**
- Line 178-186 mentions loading "2-3 case studies MOST similar to YOUR metaphor"
- Does NOT specify the 2-3 constraint explicitly
- Does NOT explain n=3 sweet spot rationale
- Does NOT prohibit reading all case studies

**CLAUDE.md implementation (lines 178-186):**
```markdown
### Phase 5: Case Study Comparison (OPTIONAL)

**NOW PERMITTED:**
- case-studies/_INDEX.md (titles + tension summaries)
- Select 2-3 case studies MOST similar to YOUR metaphor

**PURPOSE:** Verify divergence (not get ideas).

**If convergence detected:** Complete divergence table.
```

**Analysis:**
- ⚠️ PARTIAL: 2-3 limit mentioned but not enforced
- ❌ MISSING: "DO NOT read all case studies" prohibition
- ❌ MISSING: n=3 sweet spot rationale
- ❌ MISSING: Volume gravity prevention explanation
- ❌ MISSING: Mode collapse risk

**Gap severity: MEDIUM** — Concept present but not framed as mandatory rule with enforcement

**Recommendation:** Add explicit R7 section:
```markdown
### R7: 3-Example Sampling

**RULE:** You MUST load 2-3 MOST RELEVANT case studies. DO NOT read all case studies. Reading more than 4 triggers volume gravity.

**WHY:** n=3 prevents mode collapse. Loading ALL patterns increases volume gravity and obscures genuine convergence.
```

---

#### R9: Divergence Verification Gate — **PASS** (present but unlabeled)

**Research requirement:**
> "Before Phase 4, complete Phase 3.5 divergence verification gate. Answer questions: (1) Independent derivation? (2) Justify without library? (3) Appears in index? 5-question justification if YES to #3."

**CLAUDE.md implementation (lines 134-160):**
```markdown
### Phase 3.5: Metaphor Lock-In GATE

**MANDATORY questions (answer BEFORE consulting library):**

1. **Did I derive independently?**
   - Check: Did I run Phases 1-3 WITHOUT reading case-studies/?
   - If NO → RESTART Phase 1

2. **Can I justify without library?**
   - Check: Can I explain WHY this metaphor for THIS content?
   - If NO → Regenerate with explicit constraint

3. **Does this appear in case-studies/_INDEX.md?**
   - Check: Read _INDEX.md titles. Is my metaphor listed?
   - If NO → PASS gate, proceed to Phase 4
   - If YES → DIVERGENCE JUSTIFICATION REQUIRED (5-dimension table)

**Divergence table (5 dimensions):**
[5 dimensions listed]

**Passing criteria:** DIFFERENT on 3+ dimensions = independent convergence

**POINT OF NO RETURN:** After this gate, you DO NOT change metaphor based on library consultation.
```

**Analysis:**
- ✅ Gate positioned correctly (Phase 3.5)
- ✅ 3 mandatory questions present
- ✅ 5-dimension justification table (evolved from "5-question" in research)
- ✅ Binary enforcement ("MANDATORY", "MUST")
- ✅ Failure paths defined (RESTART, Regenerate)
- ❌ MINOR: Not labeled as "R9"

**Status: COMPLETE coverage (unlabeled but fully implemented)**

---

#### R12: Jazz Catalog Framing — **PASS** (present but unlabeled)

**Research requirement:**
> "Frame library as 'Real Book of standards' (proof gallery + toolbox) NOT template catalog. Use Charlie Parker analogy."

**CLAUDE.md implementation (lines 285-329):**
```markdown
### Jazz Real Book Model

**THE COMPOSITIONAL CORE IS YOUR REAL BOOK. YOUR WORK IS YOUR SOLO.**

**Vocabulary you're learning:**
- Border-weight gradient (hierarchy via thickness)
- 2-zone DNA (sparse label + dense body)
[...more mechanisms...]

**How to know you're fluent:**
- Can apply mechanisms to content library hasn't seen
- Can derive NEW metaphors using learned vocabulary
[...more criteria...]

**How to know you're recipe-following:**
- Copying specific CSS values from case studies
- Using same metaphor as library for similar content
[...more anti-patterns...]

**"Play what YOU hear."** The library is your Real Book. Your composition is your solo.
```

**Also present (lines 287-303):**
```markdown
### Template Immunity

**CASE STUDIES ARE NOT TEMPLATES. They are PROCESS PROOFS.**

**Jazz Real Book Analogy:**
Charlie Parker learned 200+ standards, transcribed 100+ solos.
He did NOT play those standards verbatim in performance.
He EXTRACTED harmonic patterns, melodic shapes, rhythmic devices.
He APPLIED them to NEW material with HIS voice.
```

**Analysis:**
- ✅ Jazz Real Book framing explicit
- ✅ Charlie Parker analogy present
- ✅ Proof gallery vs template catalog distinction clear
- ✅ Learn → extract → apply workflow
- ✅ Fluency criteria vs recipe-following criteria
- ❌ MINOR: Not labeled as "R12"

**Status: COMPLETE coverage (unlabeled but fully implemented with excellent expansion)**

---

#### R13: Prohibition Documentation — **PASS** (implicit via always-load)

**Research requirement:**
> "You MUST document all identity prohibitions explicitly. Use binary language: 'NEVER [action]' or 'DO NOT [action]'. Extract to `/identity/prohibitions.md`."

**CLAUDE.md implementation (lines 22-46):**
```markdown
## ALWAYS-LOAD — BEFORE ANY ACTION

**MANDATORY:** Read these 2 files FIRST, for ANY task in compositional-core/:

### 1. identity/prohibitions.md (353 lines)

22 prohibitions define KortAI through REFUSAL:
- 8 ABSOLUTE (NEVER, zero exceptions): border-radius: 0, box-shadow: none, no drop-shadow, opacity: 1 on containers, no gradients, no pure black/white, serif ONLY for display, no decorative complexity
- 12 CONDITIONAL (documented exceptions): no 2px borders (epidemic), no accent borders < 4px, + 10 structural rules
- 2 META (process-level): no justification without research, no patterns without tension

**WHY FIRST:** Defines identity through REFUSALS. Violating these = not KortAI.
```

**Analysis:**
- ✅ Prohibition file explicitly referenced
- ✅ Binary language mentioned ("NEVER, zero exceptions")
- ✅ ABSOLUTE vs CONDITIONAL distinction clear
- ✅ Meta-prohibitions noted (R17, R18)
- ✅ Always-load requirement enforces early reading
- ❌ MINOR: Not labeled as "R13" explicitly

**Status: COMPLETE coverage (implicit via always-load requirement)**

---

#### R14: Mechanism-Only Phase 4 Access — **PASS** (implicit via phase workflow)

**Research requirement:**
> "During Phase 4, you MAY access `/grammar/mechanism-catalog.md`. You MUST NOT access `/case-studies/`. Case studies are Phase 5+ only."

**CLAUDE.md implementation (lines 162-177):**
```markdown
### Phase 4: Mechanism Extraction

**NOW PERMITTED:**
- grammar/mechanism-catalog.md (first 200 lines)
- components/components.css (all lines)

**EXTRACT techniques (reusable):**
- "Border-weight gradient encodes hierarchy" (technique)
- "2-zone DNA: sparse label + dense body" (technique)
- "Spacing compression inversely encodes confidence" (technique)

**DO NOT extract implementations (metaphor-specific):**
- "4px bedrock border" (geological-specific value)
- "6 strata structure" (fractal-specific architecture)

**The distinction:** Extract HOW mechanisms work, not WHAT values they use.
```

**Also enforced in Phase 0-3 prohibition (lines 112-117):**
```markdown
**PROHIBITED until Phase 5:**
- ❌ case-studies/ directory
```

**Analysis:**
- ✅ Phase 4 permissions explicit (mechanisms YES, case studies NO)
- ✅ Extraction guidance clear (techniques vs implementations)
- ✅ Case study prohibition maintained through Phase 4
- ✅ Binary language ("NOW PERMITTED", "DO NOT extract")
- ❌ MINOR: Not labeled as "R14"

**Status: COMPLETE coverage (implicit via phase-gated workflow)**

---

#### R15: Commitment Before Library — **PASS** (implicit via Phase 3.5 gate)

**Research requirement:**
> "You MUST commit to specific metaphor at Phase 3.5 BEFORE accessing any library resources. Commitment document CANNOT be changed after Phase 4 begins."

**CLAUDE.md implementation (lines 159-160):**
```markdown
**POINT OF NO RETURN:** After this gate, you DO NOT change metaphor based on library consultation.
```

**Phase 3.5 gate structure (lines 134-158):**
- Gate positioned BEFORE Phase 4 (mechanism extraction)
- Gate positioned BEFORE Phase 5 (case study comparison)
- Mandatory questions enforce commitment documentation
- Binary prohibition on post-library metaphor switching

**Analysis:**
- ✅ Commitment required before library access
- ✅ Point of no return explicitly stated
- ✅ Metaphor switching prohibited post-gate
- ✅ Gate positioned correctly (after derivation, before library)
- ❌ MISSING: Explicit "commitment document" creation instruction
- ❌ MINOR: Not labeled as "R15"

**Gap severity: MINOR** — Principle enforced but implementation could be more explicit

**Recommendation:** Add line after Phase 3.5 questions:
```markdown
**Commitment document:** Record your metaphor choice and justification in Phase 3.5 output. This document is IMMUTABLE after Phase 4 begins.
```

---

### ENHANCED BUNDLE (4 rules) — 0/4 PRESENT (0% coverage)

---

#### R4: Functional Naming — **MISSING**

**Research requirement:**
> "Use functional directory names (identity/, vocabulary/, grammar/) NOT hierarchical names (tier-1/, tier-2/). DO NOT use numeric ordering."

**CLAUDE.md search:**
- Directory structure uses functional names (identity/, vocabulary/, grammar/, components/, case-studies/, guidelines/)
- No mention of "tier" terminology
- No explanation of WHY functional naming chosen

**Analysis:**
- ✅ Functional naming IS implemented in directory structure
- ❌ NOT documented as explicit rule
- ❌ NO explanation of categorical gravity prevention
- ❌ NO prohibition on tier-X language

**Gap severity: LOW** — Rule is followed in practice but not articulated

**Recommendation:** Add note in "6-LAYER ONTOLOGY QUICK MAP" section:
```markdown
**Naming principle:** Functional names (identity/, vocabulary/) prevent categorical gravity. DO NOT use tier-X or numeric ordering that implies hierarchy.
```

---

#### R8: Index File for Sampling — **PARTIAL**

**Research requirement:**
> "Maintain `/case-studies/_INDEX.md` with: (1) title, (2) file name, (3) 1-sentence tension summary, (4) axis type, (5) metaphor domain. Agents MUST scan index BEFORE reading full case studies."

**CLAUDE.md implementation (lines 143, 181, 409):**
```markdown
3. **Does this appear in case-studies/_INDEX.md?**
   - Check: Read _INDEX.md titles. Is my metaphor listed?

**NOW PERMITTED:**
- case-studies/_INDEX.md (titles + tension summaries)

**Layer 5: case-studies/ (PROVES) — Phase 5 only, anti-prescription**
- _INDEX.md: titles + tensions
```

**Analysis:**
- ✅ _INDEX.md file mentioned (3 references)
- ✅ Contents described ("titles + tension summaries")
- ⚠️ PARTIAL: No requirement for axis type or metaphor domain
- ❌ MISSING: "MUST scan index BEFORE reading" enforcement
- ❌ MISSING: Weaver maintenance responsibility
- ❌ NOT labeled as "R8"

**Gap severity: MEDIUM** — File mentioned but enablement purpose not explained

**Recommendation:** Add R8 section or expand Layer 5 description:
```markdown
### R8: Index File for Sampling

**RULE:** Scan `/case-studies/_INDEX.md` BEFORE reading case studies. Index provides: (1) title, (2) tension summary, (3) axis type, (4) metaphor domain.

**WHY:** Enables 2-3 example sampling (R7) without reading all case studies. Prevents volume gravity.
```

---

#### R10: Diversity Tracking — **MISSING**

**Research requirement:**
> "Maintain metaphor usage registry tracking: (1) metaphor name, (2) usage count, (3) last used date, (4) fatigue level. Update after EACH new composition. Show registry to agents BEFORE Phase 3."

**CLAUDE.md search:**
- No mention of "diversity tracking"
- No mention of "metaphor registry"
- No mention of "fatigue level"
- No mention of usage tracking

**Analysis:**
- ❌ COMPLETELY MISSING
- ❌ No registry file referenced
- ❌ No Weaver maintenance instructions
- ❌ No frequency bias prevention

**Gap severity: LOW-MEDIUM** — Important at scale (100+ patterns) but not critical for current library size (9 case studies)

**Note from research (line 451):**
> "NOT DEPLOYED in Phase C (no reuse has occurred yet)"

**Justification for omission:** R10 activates during pattern reuse, not initial extraction. With only 9 case studies and no reuse yet, deferring R10 is reasonable.

**Recommendation:** Add to Phase D or E roadmap, not current CLAUDE.md

---

#### R11: Warning Language Variation — **MISSING**

**Research requirement:**
> "Vary anti-prescription warning language across case studies. Use 3 warning types: (A) Standard ('⚠️ NOT A TEMPLATE'), (B) Aggressive ('STOP — Pattern-Matching Trap'), (C) Narrative ('Danger of Seeing This as Recipe'). Rotate warnings."

**CLAUDE.md search:**
- R3 specifies "⚠️ THIS IS NOT A TEMPLATE" warning
- No mention of warning variation
- No mention of habituation prevention
- No 3-variant template

**Analysis:**
- ❌ COMPLETELY MISSING
- ❌ Warning variation not mentioned
- ❌ Habituation risk not addressed
- ❌ Only standard warning specified

**Gap severity: LOW** — Important at scale (50+ case studies) but not critical for current library size (9 case studies)

**Note from research (line 553-555):**
> "LOW priority now (12 case studies), HIGH priority at 50+"

**Justification for omission:** With only 9 case studies, warning fatigue unlikely. Appropriate to defer.

**Recommendation:** Add to Phase E or later, when library exceeds 20 case studies

---

### ENFORCEMENT RULES (2 rules) — 2/2 PRESENT (100% coverage)

---

#### R17: Research Provenance Required — **PASS** (implicit via prohibitions.md meta-prohibition)

**Research requirement:**
> "You MUST document provenance for every extracted pattern. Provenance includes: (1) which exploration, (2) what content characteristics, (3) what context. DO NOT create patterns without provenance chain."

**CLAUDE.md implementation:**

Via always-load requirement (line 31):
```markdown
- 2 META (process-level): no justification without research, no patterns without tension
```

This references prohibitions.md Meta-Prohibition #19: "NEVER Justify Design Choices Without Research Provenance"

**Analysis:**
- ✅ Meta-prohibition referenced in always-load
- ✅ Provenance principle enforced via prohibitions.md
- ✅ Process-level enforcement (not pattern-level)
- ❌ MINOR: Not explicitly labeled as "R17"

**Status: COMPLETE coverage (implicit via prohibitions.md reference)**

---

#### R18: Tension Derivation Required — **PASS** (implicit via prohibitions.md meta-prohibition + Track 2 workflow)

**Research requirement:**
> "You MUST derive patterns from content tension resolution, NOT from template reuse. Creating patterns without Phases 1-3 tension analysis invalidates the pattern."

**CLAUDE.md implementation:**

Via always-load requirement (line 31):
```markdown
- 2 META (process-level): no justification without research, no patterns without tension
```

This references prohibitions.md Meta-Prohibition #20: "NEVER Create New Patterns Without Tension Derivation"

Via Track 2 workflow enforcement (lines 119-132):
```markdown
### Phase 1-3: Run Tension-Composition BLIND

**Invoke:** tension-composition skill

**Phases:**
- Phase 0: Content assessment
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME)
- Phase 2: Tension derivation (richness scoring)
- Phase 3: Metaphor collapse (structural overlap → search query)

**CRITICAL:** DO NOT read case-studies/ during Phases 0-3.
```

**Analysis:**
- ✅ Meta-prohibition referenced in always-load
- ✅ Tension derivation enforced via Track 2 workflow
- ✅ Phases 1-3 requirement explicit
- ✅ Anti-template-reuse principle clear
- ❌ MINOR: Not labeled as "R18"

**Status: COMPLETE coverage (implicit via prohibitions.md + workflow enforcement)**

---

## STRUCTURAL VS BEHAVIORAL DISTINCTION — **MISSING**

**Research finding (lines 671-698):**
> "STRUCTURAL vs BEHAVIORAL BREAKDOWN
>
> ### STRUCTURAL Rules (Work Automatically):
> - R1 — Directory separation prevents access
> - R2 — File split enforces mechanism/metaphor separation
> - R4 — Directory naming shapes perception
> - R8 — Index file enables sampling
>
> ### BEHAVIORAL Rules (Require Agent Compliance):
> - R3, R5-R7, R9-R15, R17-R18"

**CLAUDE.md search:**
- No mention of "STRUCTURAL vs BEHAVIORAL"
- No distinction between rules that work automatically vs require agent compliance
- R1 mentions "Directory separation" but doesn't label it STRUCTURAL
- R2 mentions "Dual-file structure" but doesn't label it STRUCTURAL

**Analysis:**
- ❌ Distinction COMPLETELY ABSENT
- ❌ No explanation of which rules are architectural vs behavioral
- ❌ Missed opportunity to explain why binary language matters (for behavioral rules)

**Gap severity: MEDIUM** — Important metacognitive framing that helps agents understand enforcement mechanisms

**Recommendation:** Add section after "ANTI-GRAVITY RULES":
```markdown
## STRUCTURAL vs BEHAVIORAL RULES

**STRUCTURAL (work automatically via architecture):**
- R1: Directory separation prevents early library access
- R2: File split enforces mechanism/metaphor separation

**BEHAVIORAL (require agent compliance via binary language):**
- R3, R5, R6: Framing, sequence, divergence mandate
- Binary language ("MUST NOT", "invalidates") achieves 100% compliance
```

---

## PRIORITY ORDERING — **PASS**

**Research finding (lines 645-654):**
> "If Agent Only Reads 5 Rules (CRITICAL BUNDLE):
>
> 1. R1 — Phase-Gated Access
> 2. R5 — Binary Sequential Phases
> 3. R6 — Divergence Mandate
> 4. R3 — Anti-Prescription Framing
> 5. R2 — Mechanism/Metaphor Split"

**CLAUDE.md implementation (lines 217-260):**
```markdown
## ANTI-GRAVITY RULES

**Essential 5 mechanisms prevent pattern-matching:**

### R1: Phase-Gated Library Access
[full description]

### R2: Mechanism/Metaphor Separation
[full description]

### R3: Anti-Prescription Framing
[full description]

### R5: Binary Sequential Phase Rules
[full description]

### R6: Divergence Mandate
[full description]
```

**Analysis:**
- ✅ Essential 5 present
- ✅ Labeled as "Essential 5"
- ⚠️ MINOR: Listed in order R1, R2, R3, R5, R6 (vs research priority R1, R5, R6, R3, R2)
- ✅ All 5 have full descriptions with WHY and ENFORCEMENT
- ❌ MISSING: Robust Bundle (R7, R9, R12-R15) not present
- ❌ MISSING: Enhanced Bundle (R4, R8, R10, R11) not present

**Gap severity: MEDIUM** — Priority ordering correct but incomplete (5 of 18 rules = 28% coverage)

**Justification for omission:** Research stated "minimum viable" is Essential 5 (line 780-803). If space-constrained, Essential 5 alone is valid.

**However:** CLAUDE.md is 473 lines. Adding Robust Bundle (7 rules) would add ~150 lines (32% increase) to reach 80% failure mode coverage (per research line 869-870).

**Recommendation:** Consider adding Robust Bundle in future iteration

---

## FAILURE MODE COVERAGE — **PASS** (Essential 5 address 80%)

**Research finding (lines 732-777):**
> "Critical Failure Modes (Addressed by Essential 5):
>
> FM1: Pre-Creative Pattern Exposure — Prevented by R1, R5
> FM2: Prescriptive Template Matching — Prevented by R3, R6
> FM3: Mechanism/Metaphor Conflation — Prevented by R2, R14"

**CLAUDE.md coverage:**
- ✅ FM1 prevented: R1 (phase-gating) + R5 (sequential phases) both present
- ✅ FM2 prevented: R3 (anti-prescription) + R6 (divergence) both present
- ✅ FM3 prevented: R2 (dual-file split) present, R14 implicit in Phase 4 workflow

**Secondary failure modes (research lines 751-777):**
- ❌ FM4 (volume-induced mode collapse) — R7 missing
- ❌ FM5 (invisible repetition) — R10 missing
- ❌ FM6 (warning fatigue at scale) — R11 missing
- ⚠️ FM7 (post-library metaphor switching) — R15 present but unlabeled
- ❌ FM8 (soul violations through omission) — R13 present via always-load

**Analysis:**
- ✅ 80% failure mode coverage achieved (Essential 5 present)
- ⚠️ 95% failure mode coverage NOT achieved (Robust Bundle missing)
- ✅ Critical failure modes ALL addressed
- ❌ Scaling failure modes NOT addressed (FM4, FM5, FM6)

**Status: PASS for current phase (9 case studies), concern for future scale (100+ case studies)**

---

## 18 BINARY RULES COVERAGE SUMMARY

| Rule | Priority | Coverage | Status | Notes |
|------|----------|----------|--------|-------|
| **R1** | CRITICAL | COMPLETE | ✅ PASS | Lines 112-117, 221-228 |
| **R2** | CRITICAL | COMPLETE | ✅ PASS | Lines 229-236, Phase 4 |
| **R3** | CRITICAL | COMPLETE | ✅ PASS | Lines 237-243, Layer 5 |
| **R4** | MEDIUM | IMPLICIT | ⚠️ PARTIAL | Directory structure only |
| **R5** | CRITICAL | COMPLETE | ✅ PASS | Lines 245-252 |
| **R6** | CRITICAL | COMPLETE | ✅ PASS | Lines 253-259, Phase 3.5 |
| **R7** | HIGH | PARTIAL | ⚠️ PARTIAL | 2-3 mentioned, not enforced |
| **R8** | MEDIUM | PARTIAL | ⚠️ PARTIAL | _INDEX.md mentioned, not R8 |
| **R9** | HIGH | COMPLETE | ✅ PASS | Phase 3.5 gate (unlabeled) |
| **R10** | MEDIUM | ABSENT | ❌ MISSING | Deferred (no reuse yet) |
| **R11** | MEDIUM | ABSENT | ❌ MISSING | Deferred (9 case studies) |
| **R12** | HIGH | COMPLETE | ✅ PASS | Jazz framing (unlabeled) |
| **R13** | HIGH | COMPLETE | ✅ PASS | Via always-load prohibitions |
| **R14** | HIGH | COMPLETE | ✅ PASS | Phase 4 workflow (unlabeled) |
| **R15** | HIGH | PARTIAL | ⚠️ PARTIAL | Point of no return present |
| **R17** | ENFORCEMENT | COMPLETE | ✅ PASS | Via prohibitions meta #19 |
| **R18** | ENFORCEMENT | COMPLETE | ✅ PASS | Via prohibitions meta #20 |

**Totals:**
- COMPLETE: 10/18 (56%)
- PARTIAL: 4/18 (22%)
- MISSING: 4/18 (22%)

**By Priority:**
- CRITICAL (5): 5/5 COMPLETE (100%)
- HIGH (7): 4/7 COMPLETE, 2/7 unlabeled, 1/7 PARTIAL (57%)
- MEDIUM (4): 0/4 COMPLETE, 1/4 PARTIAL, 1/4 IMPLICIT, 2/4 MISSING (0%)
- ENFORCEMENT (2): 2/2 COMPLETE (100%)

---

## RECOMMENDED ADDITIONS

### Priority 1: Label Unlabeled Rules (Quick Wins)

Add rule numbers to existing content:

**R9** — Add label to Phase 3.5 gate section (line 134):
```markdown
### Phase 3.5: Metaphor Lock-In GATE (R9: Divergence Verification Gate)
```

**R12** — Add label to Jazz framing section (line 305):
```markdown
### Jazz Real Book Model (R12: Jazz Catalog Framing)
```

**R14** — Add label to Phase 4 section (line 162):
```markdown
### Phase 4: Mechanism Extraction (R14: Mechanism-Only Phase 4 Access)
```

**R15** — Make commitment document explicit (after line 158):
```markdown
**Commitment requirement:** Record your metaphor choice in Phase 3.5 output. This is IMMUTABLE after Phase 4 begins.
```

---

### Priority 2: Strengthen R7 (3-Example Sampling)

Expand Phase 5 section (lines 178-186) to enforce 2-3 limit:

```markdown
### Phase 5: Case Study Comparison (OPTIONAL)

**R7: 3-Example Sampling ENFORCED**

**NOW PERMITTED:**
- case-studies/_INDEX.md (titles + tension summaries)
- Select 2-3 case studies MOST similar to YOUR metaphor

**RULE:** You MUST limit to 2-3 case studies. DO NOT read all case studies. Reading 4+ triggers volume gravity and mode collapse.

**WHY:** n=3 sweet spot balances architectural diversity and context focus without overwhelming working memory.

**PURPOSE:** Verify divergence (not get ideas).
```

---

### Priority 3: Add Structural vs Behavioral Distinction

Add new section after "ANTI-GRAVITY RULES" (after line 260):

```markdown
## STRUCTURAL vs BEHAVIORAL ENFORCEMENT

**STRUCTURAL rules work automatically via architecture:**
- **R1**: Directory separation prevents case study access until Phase 5
- **R2**: File split enforces mechanism/metaphor separation

**BEHAVIORAL rules require agent compliance via binary language:**
- **R3, R5, R6**: Anti-prescription, sequential phases, divergence mandate
- **R9, R12-R15**: Verification gate, jazz framing, commitment lock-in

**Key principle:** Binary language ("MUST NOT", "invalidates") achieves 100% compliance for behavioral rules. This is why all rules use imperative format, never suggestion format.
```

---

### Priority 4: Document R4 Functional Naming

Add note to 6-Layer Ontology section (after line 419):

```markdown
**R4: Functional Naming Principle**
Directory names are FUNCTIONAL (identity/, vocabulary/, grammar/) not HIERARCHICAL (tier-1/, tier-2/). This prevents categorical gravity — "tier 3" implies "better than tier 1." Functional names describe ROLE, not VALUE.
```

---

### Priority 5: Defer R8, R10, R11 to Future Phases

These are correctly omitted for current library size (9 case studies). Add to Phase E or F roadmap, not current CLAUDE.md.

**R8 (Index File)**: Mentioned but not formalized. Activate when library exceeds 20 case studies.

**R10 (Diversity Tracking)**: Not needed until pattern reuse occurs. Activate in Phase F or G.

**R11 (Warning Variation)**: Not needed until warning fatigue risk (50+ case studies). Activate in Phase G or post-freeze.

---

## FINAL VERDICT

### Overall Rating: PARTIAL (65% weighted coverage)

**Weighting rationale:**
- CRITICAL rules (5): 100% coverage, 50% weight = 50 points
- HIGH rules (7): 57% coverage, 30% weight = 17 points
- MEDIUM rules (4): 0% coverage, 10% weight = 0 points
- ENFORCEMENT rules (2): 100% coverage, 10% weight = 10 points

**Total: 77 points (PARTIAL, trending toward PASS)**

---

### Strengths

1. **Essential 5 are rock-solid** — All CRITICAL rules present with clear rationale, binary language, and enforcement mechanisms
2. **Binary language consistently applied** — "MUST NOT", "MUST", "invalidates" used throughout
3. **Phase-gated workflow clearly enforced** — Sequential phases, library prohibition, divergence gate
4. **Jazz framing excellent** — Charlie Parker analogy, fluency criteria, recipe-following anti-patterns
5. **Divergence mandate operationalized well** — 5-dimension table is evolution beyond research's "5-question" format

---

### Gaps

1. **Robust Bundle mostly unlabeled** — R9, R12, R14, R15 present but not numbered
2. **Enhanced Bundle completely absent** — R4, R8, R10, R11 missing or partial
3. **Structural vs behavioral distinction missing** — No explanation of which rules are architectural vs behavioral
4. **3-example sampling not enforced** — R7 mentioned but not framed as mandatory rule
5. **No mention of 18 total rules** — Research identifies 18 rules, CLAUDE.md presents 5

---

### Justifications for Gaps

1. **Space constraints**: Research recommends "minimum viable = Essential 5" if limited space (line 780-803)
2. **Library size**: R10 (diversity tracking) and R11 (warning variation) explicitly deferred in research until library scales (lines 448-451, 552-555)
3. **Evolution vs extraction**: Some rules (R9, R12, R14, R15) evolved into workflow sections rather than explicit rule entries
4. **Implicit enforcement**: R13 (prohibitions), R17/R18 (meta-prohibitions) enforced via always-load requirement, not separate rules

---

### Recommendation

**For current phase (9 case studies, Phase C extraction complete):**
Rating remains **PARTIAL** but ACCEPTABLE given space constraints and library size.

**Priority improvements (in order):**
1. Label unlabeled rules (R9, R12, R14) — 5 minutes
2. Strengthen R7 (3-example sampling enforcement) — 10 minutes
3. Add structural vs behavioral distinction — 15 minutes
4. Document R4 (functional naming) — 5 minutes

**For future phases (Phase D+, library growth beyond 20 case studies):**
Add Robust Bundle explicitly (R7-R9, R12-R15) to reach 95% failure mode coverage.

---

## CROSS-REFERENCES TO RESEARCH

**Research sections fully incorporated:**
- Section 1 (Essential 5) → Lines 221-260 in CLAUDE.md
- Section 9 (Minimum Viable) → Essential 5 present
- Section 10 (Recommended Structure) → Followed (Critical rules first)

**Research sections partially incorporated:**
- Section 2 (Robust Bundle) → 4/7 present, 3 unlabeled
- Section 6 (Structural vs Behavioral) → Absent
- Section 7 (Enforcement vs Enablement) → Implicit via rule phrasing

**Research sections correctly deferred:**
- Section 3 (Enhanced Bundle) → R10, R11 deferred per research guidance
- M10 activation note (line 451): "NOT DEPLOYED in Phase C (no reuse has occurred yet)"
- M11 warning variation (line 553): "LOW priority now (12 case studies)"

---

**END REVIEW**

**Next step:** Report findings to team-lead for decision on Priority 1-4 improvements.
