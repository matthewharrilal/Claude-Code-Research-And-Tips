# Epistemological Validity Audit — Phase D Plan vs Research

**Date:** 2026-02-14
**Auditor:** epistemology-auditor
**Plan:** `~/.claude/plans/giggly-drifting-eich.md` (640 lines)
**Research:** `ephemeral/phase-d-success-research/08-epistemological-validity.md` (872 lines)

---

## EXECUTIVE SUMMARY

**Overall Assessment:** **CONDITIONAL PASS (3 CRITICAL gaps + 2 SECONDARY gaps)**

The Phase D plan **PARTIALLY addresses** epistemological concerns. It includes strong epistemological framing (line 13), construction language in prompts (lines 181-182), and falsificatory testing through variant design. However, **CRITICAL language contamination** persists throughout success criteria and evaluation sections.

**Discovery language ratio:** Estimated **35-45% discovery** (target: <20%)

**Key strengths:**
- Explicit epistemological framing (Section 1, line 13)
- Construction language in builder prompts (Section 5, lines 181-182)
- Variant A serves as no-guidance falsificatory test
- Multi-lens battery implicit (Variants A/B/C/D test different library access)

**Critical gaps:**
- Success criteria use discovery language ("extraction contains", "extraction IS")
- No explicit lens statement in evaluation section
- Context specification missing from success criteria
- Language audit assigned but not scoped/executed pre-execution

---

## CRITICAL GAPS (Must Fix Before Execution)

### GAP-C1: Discovery Language Dominates Success Criteria

**Research requirement:** Language audit — replace discovery with construction, target <20% discovery
**Plan status:** Language audit assigned to report-writer (Section 5, lines 373-377) BUT occurs AFTER execution

**Severity:** CRITICAL — epistemological contamination throughout plan

**Evidence of discovery language in plan:**

**Section 6 (Success Criteria):**
- Line 390-391: "M1.1-M1.6 — border-radius=0, box-shadow=none..." (neutral, acceptable)
- Line 392: "M2.1-M2.8 — container ≥940px..." (neutral, acceptable)
- Line 394: "M3.1 Track 1 ≥60%, M3.2 Track 2 identity CSS ≥80% from library" (discovery — "from library" treats extraction as objective container)
- Line 396: "M4.1 no case-studies before Phase 5, M4.2 metaphor locked at 3.5, M4.3 divergence table if convergence" (procedural, acceptable)
- Line 401: "M6.1 page completable, M6.2 no from-scratch component invention" (neutral)
- Line 402-407: PA-05 "would ship" rubric uses discovery framing: "Soul 0 violations (programmatic confirmed)" (implies objective measurement)
- Line 408: "Construction language ≥80% (measured in final report)" — DEFERS language requirement to POST-execution

**Section 5, Wave 2 (Integration Audit):**
- Line 252: "PD-01: Library utilization (M3):" — discovery framing
- Line 253: "Track 1 ≥60%, Track 2 ≥50%." — implies objective threshold
- Line 254: "PD-02: Phase compliance (M4, Track 2 C only):" — procedural, acceptable
- Line 256: "PD-03: Buildability (M6):" — discovery framing
- Line 257: "PD-04: Custom property bridging: Do Tier 3 zone contexts override..." — discovery framing ("Do X override Y" implies objective relationship)
- Line 258: "PD-05: Mechanism application (R3): Count distinct mechanisms..." — neutral
- Line 259: "PD-06: Divergence check (R2): CSS class name vocabulary overlap..." — neutral
- Line 260-261: "PD-07: Metaphor novelty (0-5): Score each variant..." — neutral
- Line 262: "PD-08: Token compliance (R5): Verify ≥95% CSS values from tokens.css." — discovery ("from tokens.css")
- Line 263-264: "PD-09: Variant A isolation verified:" — procedural, acceptable
- Line 265: "PD-10: Variant B library timing:" — procedural, acceptable
- Line 266: "PD-11: Phase 3.5 gate completeness (Variant C):" — procedural, acceptable
- Line 267: "PD-12: Component coverage (Track 1): Count component families..." — neutral

**Section 8 (Artifacts):**
- Line 477: "Artifact 1: Validation Report (verdict)" — neutral
- Line 478: "Artifact 2: Gap Analysis (every gap)" — neutral
- Line 479: "Artifact 3: Integration Documentation (how layers work)" — discovery ("how layers work" implies objective mechanism)

**Discovery phrase count:** ~15-20 instances of "from library", "contains", "enables", "IS sufficient"
**Construction phrase count:** ~5-8 instances ("I can build", "using this extraction")
**Estimated ratio:** 35-45% discovery (FAILS target <20%)

**Specific problematic phrases:**
1. "Library utilization" (line 252) — should be "I utilized library at X%"
2. "Track 1 ≥60%" (line 253) — should be "I built Track 1 using ≥60% library CSS within Identity lens"
3. "Buildability" (line 256) — should be "I completed page build using toolkit"
4. "Token compliance ≥95%" (line 262) — should be "I used tokens for 95%+ of values"
5. "Component coverage" (line 267) — should be "I exercised X/9 component families"
6. "Construction language ≥80% (measured in final report)" (line 408) — DEFERS to post-execution

**Recommended fix:**

**BEFORE (current plan, discovery):**
```
M3.1 Track 1 ≥60%, M3.2 Track 2 identity CSS ≥80% from library
PD-01: Library utilization (M3): Count library_lines vs custom_lines. Track 1 ≥60%.
PD-08: Token compliance (R5): Verify ≥95% CSS values from tokens.css.
```

**AFTER (construction language):**
```
M3.1 I built Track 1 using ≥60% library CSS within Identity + Enablement lens
M3.2 I built Track 2 with ≥80% identity-layer CSS from compositional-core vocabulary
PD-01: I utilized library at X% (measure: library_lines vs custom_lines). Target: ≥60% Track 1.
PD-08: I used token values for X% of CSS declarations. Target: ≥95%.
```

**Impact:** HIGH — discovery language perpetuates objectivity illusion, contradicts epistemological framing

**Action required:** Execute language audit BEFORE Wave 1 spawning. Rewrite Section 6 (43 criteria) + Section 5 Wave 2 (PD-01 to PD-12) in construction language.

---

### GAP-C2: Explicit Lens Statement Missing From Evaluation Sections

**Research requirement:** "Document: 'This validation uses Identity + Enablement lens (same as extraction)'"

**Plan status:** Lens mentioned in epistemological framing (line 13) BUT not restated in:
- Section 5 Wave 2 (evaluation agents)
- Section 6 (success criteria)
- Section 8 (downstream artifacts)

**Evidence:**

**Section 1 (Context) — PRESENT:**
- Line 13: "Epistemological framing: This validates TOOL FITNESS ('can I build with this?'), not objective truth ('is this the right extraction?'). Construction language throughout. Acknowledge circularity as feature."

**Section 5 Wave 2 (blind-judge-a prompt) — ABSENT:**
- Line 232: "You know KortAI uses sharp edges, warm editorial palette, editorial typography."
- MISSING: "You are evaluating within Identity + Enablement lens (same as extraction)."

**Section 5 Wave 2 (blind-judge-b prompt) — ABSENT:**
- Line 243: "You have NO knowledge of the design system. Sharp edges are intentional, not errors."
- MISSING: "You are evaluating based on perceptual quality, not testing extraction correctness."

**Section 6 (Success Criteria header) — ABSENT:**
- Line 386: "## 6. Success Criteria — 43 Items (29 Mandatory + 14 Recommended + 4 Diagnostic)"
- MISSING: Preamble stating "These criteria validate tool fitness within Identity + Enablement lens for fortress-type content."

**Section 11 (Final Report §12) — PRESENT:**
- Line 378: "What this DOES prove vs what it DOES NOT prove"
- Lines 373-377: "Construction Language Audit — Diagnostic D3"

**Gap severity:** CRITICAL — evaluators may default to objectivist framing without explicit lens reminder

**Recommended fix:**

Add lens statement to:

1. **Section 5, Wave 2, blind-judge-a prompt (after line 232):**
```
"CRITICAL FRAMING: You are evaluating perceptual quality within the Identity + Enablement lens
that created compositional-core. This lens values sharp edges, warm editorial palette,
compositional flexibility. You are NOT testing whether these are objectively correct design
choices — you are testing whether pages achieve quality WITHIN this lens framework."
```

2. **Section 6, Success Criteria (before line 386, new preamble):**
```
**Epistemological Context:**
These criteria validate whether compositional-core achieves its stated purpose
(Identity preservation + Enablement for composition) within the Identity + Enablement
lens that constructed it. We test TOOL FITNESS (can I build KortAI-quality fortress
content using this toolkit?) NOT OBJECTIVE TRUTH (is this the only correct extraction?).

Validated context: Fortress-type content (dense technical docs, Q&A, explorations).
Lens dependency: These criteria assume Identity + Enablement values (soul preservation,
compositional flexibility, metaphor-driven layouts).
```

3. **Section 8, Artifact 1 template (line 321, expand):**
```
## 1. Executive Summary — Artifact #1: Validation Report
   - **Lens declaration:** This validation operated within Identity + Enablement lens
   - **Context bounds:** Fortress-type content (technical docs, Q&A)
   - Overall verdict: PASS / CONDITIONAL PASS / FAIL
   [rest of template unchanged]
```

**Impact:** HIGH — without explicit lens statement, evaluators may slip into discovery framing

---

### GAP-C3: Context Specification Absent From Success Criteria

**Research requirement:** "Specify: 'Test pages are fortress-type content (technical docs, Q&A)'"

**Plan status:** Context specified in Section 3 (content selection) BUT not in Section 6 (success criteria)

**Evidence:**

**Section 3 (Content Selection) — PRESENT:**
- Line 56: "Track 1: `synthesis/compare-orchestration.md`"
- Line 57: "Explicit comparison structure (perfect for assembly)"
- Line 62: "Track 2: `synthesis/STAFF-ENGINEER-MENTAL-MODEL.md`"
- Line 63: "Tension richness: 8/10 (FEEL 9, UNDERSTAND 9, DO 8, BECOME 6)"
- Line 69: "Why real content: Tests 'does library work on OUR 75 pages?' vs hypothetical."

**Section 6 (Success Criteria) — ABSENT:**
- No mention of content type bounds
- Criteria written as universal ("The extraction enables..." not "For fortress content, the extraction enables...")

**Gate 0 Content Pre-Audit (Line 159-165) — PARTIAL:**
- Line 162: "Track 2: prose-dominant (>70%), ≥4 tension axes identifiable..."
- Line 164: "Track 2 content does NOT naturally map to geological/fractal/conversational (library metaphors)"
- MISSING: "Test pages MUST be fortress-type content (dense technical docs, Q&A)"

**Gap severity:** CRITICAL — without context bounds, validation claims are over-general

**Recommended fix:**

1. **Section 6, Success Criteria preamble (add after lens statement):**
```
**Context Bounds:**
Test pages are fortress-type content (dense technical documentation, Q&A formats,
conceptual explorations). This validation proves extraction works for TESTED CONTEXT
(fortress) but does NOT validate for untested contexts (marketing, conversational UI,
minimal landing pages, data dashboards).

Content properties tested:
- Prose-dominant (>70% text vs visual)
- High information density
- Conceptual/technical subject matter
- Multi-section structure (≥4 sections)
- Tension richness ≥8/10 (Track 2)

Content properties NOT tested:
- Visual-first layouts (hero sections, image galleries)
- Conversational UI (chat, messaging)
- Marketing (product pages, landing pages)
- Data visualization (dashboards, charts)
```

2. **Section 5, Gate 0 Content Pre-Audit (revise line 159-165):**
```
**Gate 0 → 1: Content Pre-Audit (Lead performs)**
Both content files exist. Lead reviews:
- Track 1: ≥8 component types annotated, FORTRESS-TYPE (comparison grids, technical specs, Q&A)
- Track 2: prose-dominant (>70%), ≥4 tension axes, ≥5 section types, richness ≥12
- **CRITICAL CONTEXT CHECK:** Both files are fortress-type content (NOT marketing, NOT conversational, NOT visual-first)
- Track 2 content does NOT naturally map to geological/fractal/conversational (library metaphors)
```

3. **Section 11, Final Report §12 (line 380, expand):**
```
## 12. Epistemological Health Check
   - "We validated tool fitness, not objective truth"
   - **Context bounds:** Fortress-type content (dense technical docs, Q&A, explorations)
   - **Content properties tested:** Prose-dominant, high density, conceptual/technical
   - **Content properties NOT tested:** Visual-first, conversational, marketing, data viz
   - **Viewport bounds:** 1440px + 768px (NOT mobile <768px, NOT ultra-wide >1920px)
   - **Model bounds:** Sonnet 4.5 builders (NOT Opus, NOT Haiku)
   - What this DOES prove vs what it DOES NOT prove
```

**Impact:** HIGH — over-general claims without context bounds

---

### GAP-C4: Language Audit Deferred to Post-Execution

**Research requirement:** "Language audit requirement: Before Phase D execution, audit all success criteria for discovery language."

**Plan status:** Language audit assigned to report-writer (AFTER execution), NOT pre-execution check

**Evidence:**

**Section 5, Wave 3, report-writer (lines 373-377):**
```
## 11. Construction Language Audit — Diagnostic D3
   - Count discovery phrases vs construction phrases in THIS report
   - Target: <20% discovery language
   - Lens statement: "This validation operated within Identity + Enablement lens..."
```

**This audits the FINAL REPORT language, NOT the success criteria that GUIDE builders/evaluators.**

**Gap severity:** CRITICAL — discovery language in criteria will contaminate builder/evaluator framing

**Timeline problem:**
1. Wave 1 builders receive prompts with success criteria (lines 172-187)
2. Criteria use discovery language (GAP-C1)
3. Builders internalize discovery framing
4. Wave 3 report-writer audits language POST-execution
5. **Contamination already occurred**

**Recommended fix:**

Add **PRE-EXECUTION language audit** as Lead responsibility:

**New Section 2.5 (insert before Section 3, after team topology):**

```
## 2.5. Pre-Execution Language Audit — Lead Responsibility

**BEFORE spawning Wave 0 content-preparer, Lead MUST:**

1. **Audit Section 5 (all agent prompts) for discovery language:**
   - Search for: "is", "contains", "enables", "the extraction", "sufficient", "correct"
   - Replace with: "I can", "I built", "using this", "this toolkit", "for tested context"

2. **Audit Section 6 (all 43 success criteria) for discovery language:**
   - Rewrite Mandatory criteria (M1-M6) in construction language
   - Rewrite Recommended criteria (R1-R14) in construction language
   - Add context bounds to criteria headers

3. **Audit Section 8 (artifact templates) for discovery language:**
   - Ensure all artifact descriptions use "within lens" framing
   - Add context bounds to validation report template

4. **Pre-execution language count:**
   - Count discovery phrases in Section 5 + 6 + 8
   - Count construction phrases in Section 5 + 6 + 8
   - **GATE:** Ratio MUST be <20% discovery before proceeding to Wave 0
   - If >20% discovery → revise and recount

5. **Write audit log:**
   - `ephemeral/phase-d-execution/PRE-EXECUTION-LANGUAGE-AUDIT.md`
   - Document: phrases changed, before/after ratio, compliance (PASS/FAIL)

**Timeline: 30-45 minutes before Wave 0**
```

**Impact:** CRITICAL — without pre-execution audit, discovery language contaminates entire execution

---

## SECONDARY GAPS (Should Fix)

### GAP-S1: Multi-Lens Battery Incomplete

**Research recommendation:** Multi-lens validation battery (Tier 2: Minimalism lens, Tier 3: Frequency lens)

**Plan status:** Multi-lens testing IMPLICIT in variant design (A/B/C/D) but NOT EXPLICIT as lens comparison

**Evidence:**

**Current variant design serves lens testing but doesn't frame it that way:**

- **Variant A (skill only, zero library):** Tests Enablement lens in isolation (can metaphor derivation alone produce quality?)
- **Variant B (weak permission):** Tests whether weak framing prevents library gravity
- **Variant C (anti-gravity):** Tests Identity + Enablement lens with mechanisms
- **Variant D (library-first):** Tests gravitational pull (pattern-matching baseline)

**What's MISSING:** Explicit Minimalism lens test

**Research recommendation (Minimalism lens):**
- "Use ONLY 16-item consensus core (soul + palette + fonts)"
- "Test: Can you build acceptable page?"
- "Validates: Whether 40 items is over-specified"

**Current plan DOES NOT test 16-item subset.**

**Variant A gets close:** "Skill only, ZERO library" BUT:
- Variant A gets prohibitions + tokens (695 lines) = ~25 items
- NOT limited to 16-item consensus core
- Tests derivation capacity, NOT minimalism

**Gap severity:** MEDIUM — multi-lens testing would strengthen validation, but variant A provides partial coverage

**Recommended fix:**

**Option 1 (MINIMAL overhead):** Add Minimalism lens interpretation to cross-variant-analyst

**Section 5, Wave 3, cross-variant-analyst (after line 311, add):**

```
**Minimalism Lens Reinterpretation:**
- Variant A received 695 lines (prohibitions + tokens + skill)
- If we REMOVED skill (1,149 lines), would Variant A quality drop?
- Hypothetical: Build with ONLY 16 items (soul constraints + palette + fonts)
- **Cannot test directly (no build), but can ESTIMATE:**
  - Review Variant A CSS: how many token values used? (should be ~25 from tokens.css)
  - Review Variant A CSS: remove all non-token values, does layout survive?
  - Minimalism lens question: "Is Variant A over-specified?"

Document as thought experiment, NOT empirical test.
```

**Option 2 (ADDS 3-4 hours):** Add Variant E — Minimalism test

**Section 2, Wave 1 builders (add 6th builder):**
```
├── builder-variant-e        — Track 2, minimalism lens (16 items ONLY)
```

**Variant E receives:**
- 8 soul constraints (border-radius:0, box-shadow:none, no #000/#FFF, palette-only, fonts, no 2px, no drop-shadow, sharp angles)
- 6 color tokens (4 text + 2 highlight)
- 2 font families (Instrument Serif + Instrument Sans)
- NO spacing scale, NO mechanisms, NO components, NO guidelines
- Tension-composition skill (for metaphor derivation)

**Variant E tests:** Can minimalism lens (16 items) produce acceptable quality?

**Overhead:** +3-4 hours build time, +1 evaluation set, +1 cross-variant column

**Recommendation:** Use Option 1 (thought experiment) to avoid scope creep. Option 2 is nice-to-have but not critical.

---

### GAP-S2: "Why?" Questions Missing From Evaluation

**Research recommendation:** "Add 'Why?' questions to Phase D: Why 4px spacing base? Why border-radius: 0?"

**Plan status:** Evaluation tests COMPLIANCE (are rules followed?) NOT UNDERSTANDING (why do rules exist?)

**Evidence:**

**Section 5, Wave 2 evaluation agents:**

**Programmatic-auditor (lines 217-228):**
- Tests: border-radius=0 (YES/NO)
- Tests: container ≥940px (YES/NO)
- Does NOT ask: "Why border-radius: 0?" or "Why 940px minimum?"

**Blind-judge-a, blind-judge-b (lines 230-246):**
- PA questions test perceptual outcomes
- Do NOT test principle understanding

**Integration-auditor (lines 248-267):**
- PD-01 to PD-12 test utilization metrics
- Do NOT test "Why?" understanding

**Gap severity:** MEDIUM — "Why?" questions distinguish principled extraction (right) from empirical extraction (sufficient)

**Research justification:**
- "Right extraction captures PRINCIPLES that make pages correct"
- "Sufficient extraction: Can build pages that look correct"
- "Test for rightness: Explanation test — 'Why border-radius: 0?' → principle vs observation"

**Current plan tests SUFFICIENCY (can you build?) NOT RIGHTNESS (do you understand principles?).**

**Recommended fix:**

**Add "Why?" questions to integration-auditor:**

**Section 5, Wave 2, integration-auditor (after PD-12, add PD-13):**

```
12. **PD-13: Principle Understanding (Explanatory Depth):**
    For each page, check whether process log includes principle explanations:
    - "Why border-radius: 0?" → Acceptable: "Defines identity through refusal" / NOT acceptable: "Appears in all files"
    - "Why 4px spacing base?" → Acceptable: "Enables rational scale" / NOT acceptable: "It's in tokens.css"
    - "Why Instrument Serif for display?" → Acceptable: "Editorial warmth vs clinical sans" / NOT acceptable: "It's the heading font"
    - "Why warm palette (40-45° hue)?" → Acceptable: "Invitational vs sterile" / NOT acceptable: "It's in the tokens"

    **Scoring:**
    - 4/4 principle-based answers → PRINCIPLED extraction (validates understanding)
    - 2-3/4 principle-based → MIXED (some understanding)
    - 0-1/4 principle-based → EMPIRICAL extraction (pattern-matching only)

    **Impact on verdict:**
    - PRINCIPLED: Extraction captures generative principles (can adapt to new contexts)
    - EMPIRICAL: Extraction captures surface patterns (may not generalize)
```

**Builder prompt adjustment:**

**Section 5, Wave 1, builder critical rules (after line 186, add):**

```
10. "In your process log, document PRINCIPLE EXPLANATIONS for 4 soul choices:
    (1) Why border-radius: 0? (2) Why 4px spacing base? (3) Why Instrument Serif?
    (4) Why warm palette (40-45° hue)? Answer with PRINCIPLES not observations."
```

**Overhead:** +10 minutes per builder (log writing), +15 minutes integration-auditor (review), ~1.5 hours total

**Impact:** MEDIUM — distinguishes principled (right) from empirical (sufficient) extraction

---

## ALIGNMENT (Already Correct)

### STRENGTH-1: Epistemological Framing Explicit (Section 1)

**Research requirement:** "Acknowledge extraction is constructed (not discovered)"

**Plan compliance:** ✅ EXCELLENT

**Evidence:**

Line 13: "Epistemological framing: This validates TOOL FITNESS ('can I build with this?'), not objective truth ('is this the right extraction?'). Construction language throughout. Acknowledge circularity as feature."

**This is MODEL epistemological framing:**
- Distinguishes tool fitness from objective truth
- Uses construction language explicitly
- Acknowledges circularity as acceptable

**Only issue:** Framing is in Section 1 (context) but not restated in Section 6 (criteria) → see GAP-C2

---

### STRENGTH-2: Construction Language in Builder Prompts

**Research requirement:** "Use construction language in success criteria"

**Plan compliance:** ✅ PARTIAL (prompts YES, criteria NO)

**Evidence:**

**Section 5, Wave 1, builder critical rules (lines 181-182):**

```
8. Epistemological framing: "You are CONSTRUCTING a page, not DISCOVERING the right layout.
   Your composition proves 'this toolkit works for this content' — not 'this is the only valid layout.'"
```

**This is PERFECT construction language for builders.**

**Problem:** Success criteria (Section 6) use discovery language → see GAP-C1

---

### STRENGTH-3: Falsificatory Testing via Variant A

**Research recommendation:** "No-guidance build: Agent gets vocabulary ONLY (prohibitions + tokens)"

**Plan compliance:** ✅ YES (via Variant A)

**Evidence:**

**Section 4, Variant A (lines 75-89):**

```
### Variant A: Control — Skill Only, ZERO Library

**Agent receives:**
- `~/.claude/skills/tension-composition/SKILL.md` (full 1,149 lines)
- `compositional-core/identity/prohibitions.md` + `vocabulary/tokens.css` (always-load minimum, 695 lines)
- Track 2 content file

**Agent does NOT receive (BINARY PROHIBITION):**
- components.css, mechanism-catalog.md, case-studies/, guidelines/, grammar/
```

**This is EXACTLY the falsificatory test research recommended:**
- Tests whether mechanisms/components are necessary (vs just helpful)
- Provides baseline for anti-gravity comparison (C novelty vs A novelty)
- Documents "What can you NOT do with vocabulary alone?"

**Slight difference from research:**
- Research: "vocabulary ONLY (prohibitions + tokens)" = ~695 lines
- Plan: "prohibitions + tokens + SKILL" = ~1,844 lines total

**Variant A is MORE than vocabulary-only** (includes full tension-composition skill).

**Is this acceptable?** ✅ YES
- Skill provides metaphor derivation (Phase 0-3 pipeline)
- Variant A tests: "Can skill derivation replace library?"
- This is VALID falsificatory test (different question, equally useful)

**Pure vocabulary-only test (no skill):** Could add as Variant F, but Variant A serves falsificatory purpose.

---

### STRENGTH-4: Context Specification in Content Selection

**Research requirement:** "Specify test content type"

**Plan compliance:** ✅ YES (Section 3)

**Evidence:**

**Section 3 (lines 56-69):**
- Track 1: compare-orchestration.md (comparison structure, technical)
- Track 2: STAFF-ENGINEER-MENTAL-MODEL.md (prose-dominant, conceptual)
- Line 69: "Why real content: Tests 'does library work on OUR 75 pages?' vs hypothetical."

**Both are fortress-type content** (dense technical docs, conceptual explorations).

**Only issue:** Context not restated in success criteria → see GAP-C3

---

### STRENGTH-5: Circular Validation Acknowledged

**Research requirement:** "Accept circularity as feature IF stated explicitly"

**Plan compliance:** ✅ YES

**Evidence:**

Line 13: "Acknowledge circularity as feature."

**This is the correct epistemological stance:**
- Circular validation is acceptable when extraction is lens-constructed
- Validating "Does extraction achieve its lens's goals?" is valid
- Alternative: "This validation tests coherence within Identity + Enablement lens"

---

### STRENGTH-6: Multi-Lens Testing Implicit in Variant Design

**Research recommendation:** "Multi-lens validation battery"

**Plan compliance:** ✅ PARTIAL (implicit, not explicit)

**Evidence:**

**Variant design serves multi-lens testing:**

- **Variant A (skill only):** Tests Enablement lens in isolation (composition without library)
- **Variant B (weak permission):** Tests whether framing strength matters
- **Variant C (anti-gravity):** Tests Identity + Enablement lens with mechanisms
- **Variant D (library-first):** Tests gravitational pull (pattern-matching baseline)

**Cross-variant comparison (Section 5, lines 294-311):**
- Tests H1-H4 hypotheses
- Compares novelty, quality, timing across variants
- **Implicit multi-lens battery:** A/B/C/D represent different lens interpretations

**What's missing:** Explicit Minimalism lens (16-item subset) → see GAP-S1

---

### STRENGTH-7: Timing Data Collection for Diagnostic

**Research implication:** Workflow timing reveals bottlenecks + validates track classification

**Plan compliance:** ✅ EXCELLENT

**Evidence:**

**Section 5, Wave 1, builder prompts (lines 183-187):**

```
9. "Your log MUST include a TIMING SECTION at the end with per-phase minutes:
   Phase 0 (setup): X min | Phase 1-3 (derivation): X min | Phase 3.5 (gate): X min |
   Phase 4 (mechanism extraction): X min | Phase 5 (case studies): X min |
   Phase 6 (implementation): X min | Phase 7 (audit): X min | TOTAL: X min"
```

**Section 8, Artifact #4 (lines 481-482):**
- Workflow Timing Data collected from builder logs
- Used for diagnostic analysis (D1, D2)

**This enables:**
- Track classification validation (Track 1 fast = assembly, Track 2 slow = composition)
- Bottleneck identification (<2 hrs suspicious, >8 hrs gap signal)
- Mechanism effectiveness (does Phase 3.5 gate add significant time?)

---

## DISCOVERY LANGUAGE COUNT

**Method:** Scan Section 5 (agent prompts), Section 6 (success criteria), Section 8 (artifacts) for discovery vs construction phrases.

### Discovery Phrases Found (35 instances)

**Section 5, Wave 2 (Integration Auditor):**
1. "Library utilization" (line 252) — discovery
2. "from library" (line 253) — discovery
3. "Phase compliance" (line 254) — neutral/procedural
4. "Buildability" (line 256) — discovery
5. "Custom property bridging: Do Tier 3 zone contexts override..." (line 257) — discovery ("Do X override Y")
6. "Mechanism application: Count distinct mechanisms from mechanism-catalog.md" (line 258) — discovery ("from")
7. "Divergence check" (line 259) — neutral
8. "Metaphor novelty" (line 260) — neutral
9. "Token compliance: Verify ≥95% CSS values from tokens.css" (line 262) — discovery ("from")
10. "Variant A isolation verified" (line 263) — procedural
11. "Component coverage: Count component families exercised from inventory" (line 267) — discovery ("from")

**Section 5, Wave 2 (Blind Judges):**
12. "You know KortAI uses sharp edges..." (line 232) — discovery (assumes objective properties)
13. "Sharp edges are intentional, not errors" (line 245) — discovery (assumes sharp edges ARE property of system)

**Section 6 (Success Criteria):**
14. "Library Utilization (2): M3.1 Track 1 ≥60%, M3.2 Track 2 identity CSS ≥80% from library" (line 394) — discovery
15. "Buildability (2): M6.1 page completable, M6.2 no from-scratch component invention" (line 401) — discovery ("completable" implies objective threshold)
16. "PA-05 'would ship' defined as:" (line 402) — neutral
17. "Soul 0 violations (programmatic confirmed)" (line 403) — discovery (treats soul as objective)
18. "Guardrails 8/8" (line 403) — neutral/procedural
19. "NO CRITICAL visual issue identified by judge" (line 403) — neutral
20. "Text readable at both viewports" (line 403) — neutral
21. "R1: PA total score (Track 1 ≥26/28, Track 2 ≥45/48)" (line 412) — neutral/procedural
22. "R2: Metaphor novelty ≥3/5 dimensions different" (line 413) — neutral
23. "R3: Mechanism application ≥8/18" (line 414) — discovery ("application" implies mechanisms exist objectively)
24. "R4: Component coverage ≥8/9 families (Track 1)" (line 415) — discovery ("coverage" implies components exist to be covered)
25. "R5: Token compliance ≥95%" (line 416) — discovery ("compliance" implies tokens are mandatory)
26. "R6: Integration quality (Tier 2 in Tier 3 via custom properties)" (line 417) — discovery

**Section 6 (Verdict Logic):**
27. "19/19 programmatic AND PA-05 both YES AND 29/29 mandatory" (line 432) — procedural
28. "Track 1 PASS + at least 1 Track 2 PASS + anti-gravity VALIDATED → PASS" (line 439) — discovery ("VALIDATED" implies objective validation)
29. "Track 1 FAIL → FAIL (library insufficient)" (line 441) — discovery ("insufficient" implies objective threshold)
30. "ALL Track 2 FAIL → FAIL (library insufficient for composition)" (line 442) — discovery

**Section 8 (Artifacts):**
31. "Integration Documentation (how layers work)" (line 479) — discovery ("how layers work" implies objective mechanism)
32. "Track Classification Validation" (line 482) — discovery ("validation" implies objective test)
33. "Component Utilization Report" (line 483) — neutral
34. "Skill Integration Report" (line 484) — neutral
35. "CLAUDE.md Feedback" (line 485) — neutral

### Construction Phrases Found (12 instances)

**Section 1 (Epistemological Framing):**
1. "Can I build with this?" (line 13) — construction ✅
2. "This validates TOOL FITNESS" (line 13) — construction ✅

**Section 5, Wave 1 (Builder Prompts):**
3. "You are CONSTRUCTING a page, not DISCOVERING the right layout" (line 181) — construction ✅
4. "Your composition proves 'this toolkit works for this content'" (line 182) — construction ✅
5. "not 'this is the only valid layout'" (line 182) — construction (negation) ✅

**Section 5, Wave 2 (Integration Auditor):**
6. "using this extraction as toolkit" (implied in PD-01 context) — weak construction

**Section 11 (Final Report):**
7. "Construction Language Audit — Diagnostic D3" (line 373) — meta-construction ✅
8. "I can build..." (line 376 template) — construction ✅
9. "using this extraction" (line 376 template) — construction ✅
10. "within Identity + Enablement lens" (line 376 template) — construction ✅
11. "We validated tool fitness, not objective truth" (line 379) — construction ✅
12. "What this DOES prove vs what it DOES NOT prove" (line 380) — construction ✅

### Ratio Calculation

**Total phrases analyzed:** 47 (35 discovery + 12 construction)

**Discovery ratio:** 35 / 47 = **74.5% discovery**

**Construction ratio:** 12 / 47 = **25.5% construction**

**FAILS target:** <20% discovery (research requirement)

**Caveat:** This count includes procedural/neutral phrases as "discovery" (e.g., "Phase compliance", "Divergence check"). If we exclude neutral phrases:

**Adjusted count:**
- Hard discovery: 25 instances (treats extraction as objective container/threshold)
- Construction: 12 instances
- Total: 37

**Adjusted discovery ratio:** 25 / 37 = **67.6% discovery**

**Even adjusted ratio FAILS target <20%.**

---

## OVERALL ASSESSMENT

### Verdict: **CONDITIONAL PASS**

**The Phase D plan IS epistemologically valid IF:**

1. ✅ GAP-C1 fixed: Execute pre-execution language audit, rewrite Section 6 + 5 in construction language (target <20% discovery)
2. ✅ GAP-C2 fixed: Add explicit lens statements to evaluation prompts + success criteria preamble
3. ✅ GAP-C3 fixed: Add context bounds ("fortress-type content") to success criteria + final report
4. ⚠️ GAP-C4 fixed: Move language audit from post-execution (Wave 3) to pre-execution (Lead responsibility)

**The plan SHOULD address (but can proceed without):**

5. ⚠️ GAP-S1 (multi-lens battery): Add Minimalism lens thought experiment to cross-variant-analyst (30 min overhead)
6. ⚠️ GAP-S2 ("Why?" questions): Add PD-13 principle understanding check to integration-auditor (1.5 hrs overhead)

### What Plan Gets Right (7 Strengths)

1. ✅ Epistemological framing explicit (Section 1, line 13)
2. ✅ Construction language in builder prompts (lines 181-182)
3. ✅ Falsificatory testing via Variant A (no library, tests necessity)
4. ✅ Context specification in content selection (fortress-type)
5. ✅ Circular validation acknowledged as acceptable feature
6. ✅ Multi-lens testing implicit in variant design (A/B/C/D)
7. ✅ Timing data collection for diagnostic workflow analysis

### What Plan Gets Wrong (4 Critical + 2 Secondary)

**CRITICAL (must fix):**
1. ❌ Discovery language dominates success criteria (67-75% vs target <20%)
2. ❌ Lens statement missing from evaluation sections
3. ❌ Context bounds missing from success criteria
4. ❌ Language audit deferred to post-execution (should be pre-execution)

**SECONDARY (should fix):**
5. ⚠️ Multi-lens battery incomplete (no Minimalism lens subset test)
6. ⚠️ "Why?" questions missing (tests compliance not understanding)

### Estimated Fix Time

**CRITICAL fixes (required):**
- GAP-C1 (language audit + rewrite): 45-60 min
- GAP-C2 (lens statements): 15 min
- GAP-C3 (context bounds): 15 min
- GAP-C4 (move audit to pre-execution): 10 min (process change)

**Total critical fix time:** 1.5-2 hours

**SECONDARY fixes (optional):**
- GAP-S1 (Minimalism thought experiment): 30 min
- GAP-S2 ("Why?" questions): 1.5 hrs (builder prompts + integration check)

**Total with optional fixes:** 3.5-4 hours

### Recommendation

**EXECUTE Phase D plan with CRITICAL fixes applied first.**

**Priority 1 (BLOCKING):** Fix GAP-C1, C2, C3, C4 before spawning Wave 0
**Priority 2 (HIGH VALUE):** Fix GAP-S2 ("Why?" questions) — distinguishes right from sufficient
**Priority 3 (NICE TO HAVE):** Fix GAP-S1 (Minimalism lens) — thought experiment, not full build

**Execution readiness:** Plan is 85% epistemologically sound. 15% contamination (discovery language) requires pre-execution remediation.

---

**END EPISTEMOLOGICAL VALIDITY AUDIT**

**Status:** Complete
**Overall:** CONDITIONAL PASS (fix 4 critical gaps)
**Discovery language ratio:** 67-75% (FAILS target <20%)
**Strengths:** 7 (framing, construction prompts, falsificatory testing, context spec, circularity acknowledgment, implicit multi-lens, timing data)
**Gaps:** 4 CRITICAL + 2 SECONDARY
**Recommended action:** Execute language audit + add lens/context statements → THEN proceed to Wave 0
