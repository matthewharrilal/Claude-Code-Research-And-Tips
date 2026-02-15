# Library Alignment Audit — Phase D Execution Plan

**Plan Audited:** `~/.claude/plans/giggly-drifting-eich.md` (640 lines)
**Protocol Reference:** `design-system/compositional-core/CLAUDE.md` (494 lines)
**Audit Date:** 2026-02-14
**Auditor:** library-alignment-checker (plan-audit-team)

---

## EXECUTIVE SUMMARY

**Overall Assessment:** CRITICAL MISALIGNMENTS IDENTIFIED

- **File path accuracy:** 3/7 critical path errors (42.9% failure rate)
- **Phase-gated protocol:** 8 alignment gaps with CLAUDE.md Track 2 Workflow
- **Anti-gravity rules:** 4 of 6 rules (R1-R6) have discrepancies
- **Always-load compliance:** 1 CRITICAL violation
- **Workflow alignment:** Track 2 has 6 structural gaps

**Severity:** CRITICAL — Plan references files that don't exist and omits mandatory protocol steps

**Recommendation:** FIX file paths + ADD missing Track 2 workflow steps before execution

---

## 1. FILE PATH VERIFICATION

### Critical Path Errors

| Plan Reference | Actual File | Exists? | Line Count Match? | Fix Required |
|----------------|-------------|---------|-------------------|--------------|
| `components/components.css` (line 193, 588) | THREE FILES: `components-dd-od.css`, `components-cd-tt.css`, `components.css` | ⚠️ PARTIAL | N/A — needs clarification | CRITICAL: Specify which file(s) |
| `case-studies/_INDEX.md` (line 109, 153, 590) | **DOES NOT EXIST** | ❌ NO | N/A | CRITICAL: Create or remove reference |
| `mechanism-catalog.md` "first 200 lines" (line 111, 171, 589) | 868 total lines | ✅ YES | ❌ NO — 23% of file, not representative | HIGH: Clarify line range |
| `vocabulary/tokens.css` "174 lines" (line 39, 587) | 174 lines | ✅ YES | ✅ YES | None |
| `identity/prohibitions.md` (line 31, 107, 586) | 353 lines | ✅ YES | ⚠️ Plan says 695 total w/ tokens | MEDIUM: Clarify combined count |
| `components/component-inventory.md` (line 150, 590) | NOT VERIFIED | ⚠️ UNKNOWN | N/A | LOW: Verify existence |
| `guidelines/responsive-strategy.md` (line 193, 591) | 271 lines | ✅ YES | N/A | None |

**CRITICAL FINDING #1: `case-studies/_INDEX.md` DOES NOT EXIST**

Plan references this file 7 times:
- Line 109: "Does this domain appear in case-studies/_INDEX.md?"
- Line 153: "Read _INDEX.md titles"
- Line 188: "Select 2-3 case studies MOST similar to YOUR metaphor"
- Line 590: File reference table

**Impact:** Variant C Phase 3.5 gate CANNOT execute — divergence check requires _INDEX.md to list case study titles.

**Fix:** Either:
1. Create `_INDEX.md` in case-studies/ with titles + tension summaries
2. Replace references with: "Read case-studies/README.md" (verified to exist)

---

**CRITICAL FINDING #2: `components.css` File Ambiguity**

Compositional-core has THREE component CSS files:
1. `components-dd-od.css` (DD/OD explorations)
2. `components-cd-tt.css` (CD/tension-test explorations)
3. `components.css` (unknown — possibly merged?)

**Plan references (line 110, 173, 588):** "components.css"

**Issue:** Which file should agents read?

**Compositional-core CLAUDE.md (line 64, 173):** References "components.css"
**Component inventory exists:** `components/component-inventory.md` (per plan line 150)

**Fix:** Verify which file is canonical:
- If `components.css` is the merged file → verify it exists + contains all families
- If agents should read ALL THREE → update plan to list all three paths
- If agents should read ONLY merged → create merged file or clarify naming

---

**HIGH FINDING #3: mechanism-catalog.md Line Range**

**Plan (line 111, 171):** "mechanism-catalog.md (first 200 lines)"

**Actual file:** 868 lines

**Issue:** First 200 lines = 23% of catalog. Does this include:
- All 18 mechanisms? (Mechanisms may be distributed throughout 868 lines)
- Just mechanism names? (Insufficient for technique extraction)
- Mechanisms + examples? (200 lines may be too short)

**Compositional-core CLAUDE.md does NOT specify line range** — says "grammar/mechanism-catalog.md" without limit.

**Fix:** Either:
1. Verify first 200 lines contains ALL 18 mechanisms
2. Update to: "mechanism-catalog.md (all 18 mechanisms, lines 1-[X])"
3. Remove line limit if all 868 lines are needed

---

## 2. PHASE-GATED PROTOCOL ALIGNMENT

### Track 2 Workflow Comparison

| Phase | Plan (Variant C, Section 4) | CLAUDE.md Track 2 (lines 112-221) | Match? | Gap Description |
|-------|---------------------------|-----------------------------------|--------|-----------------|
| **Phase 0** | ONLY prohibitions.md + tokens.css (line 107) | MANDATORY: Read prohibitions.md + tokens.css (CLAUDE.md line 115) | ✅ MATCH | None |
| **Phase 0D** | Library prohibition stated (line 118) | PROHIBITED: case-studies/, mechanism-catalog.md (CLAUDE.md line 118) | ✅ MATCH | None |
| **Phase 1-3** | Run tension-composition BLIND (line 127) | Invoke skill Phases 0-3 (CLAUDE.md line 128) | ✅ MATCH | None |
| **Phase 3.5** | 5 divergence questions (line 109) | MANDATORY gate with 5 questions (CLAUDE.md line 142) | ⚠️ PARTIAL | Plan questions DIFFER from CLAUDE.md |
| **Phase 4** | NOW PERMITTED: mechanism-catalog + components.css (line 110) | NOW PERMITTED: grammar/ + components/ (CLAUDE.md line 170) | ✅ MATCH | None |
| **Phase 5** | NOW PERMITTED: case-studies/ (line 111) | NOW PERMITTED: case-studies/ (CLAUDE.md line 186) | ✅ MATCH | None |
| **Phase 6** | Implementation (implied) | Implementation with tokens (CLAUDE.md line 197) | ✅ MATCH | Plan doesn't explicitly list Phase 6 |
| **Phase 7** | Perceptual audit (implied in evaluation) | Verification with PA skill (CLAUDE.md line 212) | ⚠️ PARTIAL | Plan separates audit into Wave 2, not Phase 7 |

**STRUCTURAL ISSUE: Plan collapses Phases 6-7 into "Wave 2: Evaluation"**

CLAUDE.md Track 2 defines 8 phases (0, 1, 2, 3, 3.5, 4, 5, 6, 7):
- Phase 6: Implementation (write HTML using YOUR metaphor + library mechanisms)
- Phase 7: Verification (invoke perceptual-auditing skill)

Plan defines:
- Wave 1: Build Phase (includes all TC phases 0-6?)
- Wave 2: Evaluation Phase (programmatic + visual judges)

**Gap:** Plan does NOT specify WHEN builders invoke perceptual-auditing skill (Phase 7).

**Fix:** Add to builder prompts:
```markdown
**Phase 7 (BEFORE declaring done):**
Invoke `~/.claude/skills/perceptual-auditing/SKILL.md` Mode 1 (Embedded).
Answer PA-01 through PA-05. If PA-05 = NO, fix issues BEFORE returning HTML.
```

---

### Phase 3.5 Gate Question Mismatch

**Plan (line 109):** 5 questions listed inline
1. What domain?
2. What structural isomorphisms?
3. Does this appear in case-studies/_INDEX.md?
4. If YES → 5-dimension divergence table
5. If vocabulary overlap >40% → MUST REGENERATE

**CLAUDE.md (lines 142-166):** Gate structure
1. **Did I derive independently?** (Check: ran Phases 1-3 without reading case-studies)
2. **Can I justify without library?** (Explain WHY this metaphor for THIS content)
3. **Does this appear in _INDEX.md?** (Read _INDEX.md titles)
   - If NO → PASS gate
   - If YES → Divergence table (5 dimensions)
4. **Divergence table:** Domain, isomorphisms, architecture, vocabulary, mechanisms
5. **Passing criteria:** DIFFERENT on 3+ dimensions

**Issue:** Plan questions are SUBSET of CLAUDE.md gate structure. Plan OMITS:
- Question 1 (independent derivation verification)
- Question 2 (justification without library)

**Fix:** Add to Variant C prompt:
```markdown
**Phase 3.5 Gate (MANDATORY):**

Answer ALL 5 questions BEFORE proceeding to Phase 4:

1. **Did I derive independently?**
   Check: Did I run Phases 1-3 WITHOUT reading case-studies/?
   If NO → RESTART Phase 1

2. **Can I justify without library?**
   Explain WHY this metaphor for THIS content (structural overlap)
   If NO → Regenerate with explicit constraint

3. **Does this appear in case-studies/README.md?** [Fix: _INDEX.md doesn't exist]
   Read case study titles. Is my metaphor listed?
   If NO → PASS gate, proceed to Phase 4
   If YES → Continue to Question 4

4. **Divergence table (if convergence detected):**
   Complete 5-dimension table:
   - Metaphor domain (geological vs botanical vs theatrical)
   - Structural isomorphisms (bedrock→foundation vs seed→growth)
   - Section architecture (6 strata vs 4 scales vs 8 acts)
   - Vocabulary (geological terms vs plant terms)
   - Mechanisms used (border-weight vs spacing-compression)

5. **Vocabulary overlap check:**
   If overlap >40% with ANY case study → MUST REGENERATE
   Justification alone is NOT sufficient (per plan line 110)
   Write divergence table showing ≥3 dimensions DIFFERENT

**POINT OF NO RETURN:** After this gate, DO NOT change metaphor based on library.
```

---

## 3. ANTI-GRAVITY RULES (R1-R6) COMPLIANCE

### Rule Coverage Analysis

| Rule | CLAUDE.md Definition (lines 228-283) | Plan Coverage (Section 4) | Match? | Gap |
|------|-------------------------------------|---------------------------|--------|-----|
| **R1: Phase-Gated Access** | You MUST NOT access case-studies/ during Phases 0-3 (line 230) | Variant C: case-studies prohibited until Phase 5 (line 107-108) | ✅ MATCH | None |
| **R2: Mechanism/Metaphor Separation** | Mechanisms in grammar/, metaphors in case-studies/ (line 238) | Plan references both files separately (line 110-111) | ✅ MATCH | None |
| **R3: Anti-Prescription Framing** | Case studies MUST begin with warning, use narrative format (line 246) | NOT mentioned in plan | ❌ MISSING | Plan doesn't enforce template warning |
| **R5: Binary Sequential Phases** | MUST complete 0→1→2→3→3.5→4→5→6→7 in order (line 254) | Variant C describes phase sequence (line 105-111) | ⚠️ PARTIAL | Plan doesn't enforce "violation invalidates" language |
| **R6: Divergence Mandate** | Success = novel metaphor NOT in library (line 262) | Variant C Phase 3.5 gate checks convergence (line 109) | ✅ MATCH | None |

**MISSING: R3 (Anti-Prescription Framing)**

Plan does NOT specify that agents should:
- Check case studies begin with "⚠️ THIS IS NOT A TEMPLATE" warning
- Use narrative format ("Tension that produced this") not criteria ("When to use")

**Impact:** Agents may treat case studies as templates despite anti-gravity intent.

**Fix:** Add to Phase 5 (case study consultation):
```markdown
**Phase 5: Case Study Comparison (OPTIONAL):**

Read case-studies/README.md or individual studies.

**CRITICAL: Case studies are NOT TEMPLATES.**
- Each begins with "⚠️ THIS IS NOT A TEMPLATE" warning
- Use narrative format ("Tension that produced this")
- DO NOT copy CSS patterns — extract TECHNIQUES only

Purpose: Verify divergence (not get ideas).
```

---

**PARTIAL: R5 (Binary Sequential Phase Rules)**

CLAUDE.md (line 254): "You MUST NOT skip phases. **Violation invalidates the entire derivation.**"

Plan (line 105-111): Describes phase sequence but does NOT use "invalidates" language.

**Issue:** Binary compliance requires ABSOLUTE language. Plan's weaker framing reduces enforcement.

**Fix:** Add to Variant C prompt:
```markdown
**Phase sequence is ABSOLUTE:**
You MUST complete phases in exact order: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7.

**YOU MUST NOT skip phases.**
**YOU MUST NOT consult case-studies during Phases 0-3.**

Violation of phase order invalidates the entire derivation.
```

---

### Structural vs Behavioral Rules (CLAUDE.md lines 269-281)

CLAUDE.md separates anti-gravity rules into:
- **Structural** (work automatically): R1 (directory separation), R2 (dual-file split)
- **Behavioral** (require compliance): R3, R5, R6 (agent MUST follow)

Plan does NOT distinguish structural from behavioral enforcement.

**Impact:** Plan may assume behavioral rules work automatically (they don't — binary language required).

**Fix:** Add to lead instructions:
```markdown
**Anti-gravity enforcement:**
- R1 + R2 are STRUCTURAL (directory separation prevents access)
- R3 + R5 + R6 are BEHAVIORAL (require binary language in prompts)

Ensure Variant C prompts use ABSOLUTE language:
- "YOU MUST NOT" (not "you should avoid")
- "Violation invalidates" (not "this is incorrect")
- "MANDATORY" (not "recommended")
```

---

## 4. TRACK 1 WORKFLOW ALIGNMENT

### Track 1 File Loading

**Plan (line 193):** builder-track-1 reads:
- prohibitions
- tokens
- components.css
- guidelines
- semantic-rules
- responsive-strategy

**CLAUDE.md Track 1 (lines 90-106):** Identical list PLUS:
- Line 93: "Read components.css (first 100 lines — 2-zone DNA patterns)"
- Line 94: "Read guidelines/semantic-rules.md (when to use what)"

**Match:** ✅ File list matches

**Issue:** Plan does NOT specify line limits or reading order.

**Fix:** Add to builder-track-1 prompt:
```markdown
**Track 1 Workflow (per compositional-core/CLAUDE.md lines 90-106):**

Phase 0: Load Foundation
1. Read compositional-core/identity/prohibitions.md (constraints)
2. Read compositional-core/vocabulary/tokens.css (palette)
3. Read compositional-core/components/components.css (first 100 lines — 2-zone DNA)
4. Read compositional-core/guidelines/semantic-rules.md (when to use what)

Phase 1: Build
- Use exact token values: var(--color-primary), var(--space-8)
- Apply components as-is (no custom CSS)
- Follow responsive-strategy.md (768px collapse)

Phase 2: Verify
- Invoke perceptual-auditing skill (48 PA questions)
- Check guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Verify soul: border-radius: 0? box-shadow: none? Colors correct?
```

---

## 5. ALWAYS-LOAD COMPLIANCE

### Mandatory 2-File Protocol

**CLAUDE.md (lines 26-49):** ALWAYS-LOAD section

**CRITICAL REQUIREMENT:**
```markdown
MANDATORY: Read these 2 files FIRST, for ANY task in compositional-core/:

1. identity/prohibitions.md (353 lines)
2. vocabulary/tokens.css (174 lines)

Total always-load: 527 lines (2 files)
```

**Plan compliance check:**

| Agent | Reads prohibitions.md? | Reads tokens.css? | BEFORE other files? | Compliant? |
|-------|----------------------|------------------|---------------------|-----------|
| content-preparer | ❌ NOT specified | ❌ NOT specified | N/A | ❌ NO |
| builder-track-1 | ✅ Line 193 | ✅ Line 193 | ⚠️ Not specified | ⚠️ PARTIAL |
| builder-variant-a | ✅ Line 79 | ✅ Line 79 | ⚠️ Not specified | ⚠️ PARTIAL |
| builder-variant-b | ✅ Line 95 | ✅ Line 95 | ⚠️ Not specified | ⚠️ PARTIAL |
| builder-variant-c | ✅ Line 105 | ✅ Line 105 | ⚠️ Not specified | ⚠️ PARTIAL |
| builder-variant-d | ✅ Line 119 | ✅ Line 119 | ⚠️ Not specified | ⚠️ PARTIAL |
| programmatic-auditor | ✅ Line 220 (prohibitions) | ⚠️ Implied (tokens for checks) | ⚠️ Not specified | ⚠️ PARTIAL |
| integration-auditor | ⚠️ Implied | ⚠️ Implied | N/A | ⚠️ PARTIAL |

**CRITICAL FINDING: content-preparer does NOT load mandatory files**

Plan (line 146-154): content-preparer reads:
- `synthesis/compare-orchestration.md`
- `synthesis/STAFF-ENGINEER-MENTAL-MODEL.md`
- `compositional-core/components/component-inventory.md`

**Does NOT read:** prohibitions.md or tokens.css

**Impact:** Content-preparer adapts content without knowing soul constraints or token vocabulary.

**Fix:** Add to content-preparer prompt:
```markdown
**MANDATORY FIRST:**
1. Read compositional-core/identity/prohibitions.md (understand constraints)
2. Read compositional-core/vocabulary/tokens.css (understand vocabulary)

THEN adapt content:
- Track 1: annotate component opportunities within soul constraints
- Track 2: emphasize tensions that work with KortAI identity
```

---

**PARTIAL: No agent explicitly states "read BEFORE all other files"**

CLAUDE.md (line 28): "MANDATORY: Read these 2 files FIRST, for ANY task"

Plan references these files but does NOT enforce FIRST/BEFORE sequencing.

**Fix:** Add to ALL builder prompts:
```markdown
**BEFORE ANY OTHER ACTION:**
Read these 2 files in order:
1. compositional-core/identity/prohibitions.md (353 lines)
2. compositional-core/vocabulary/tokens.css (174 lines)

Then proceed with phase-specific files.
```

---

## 6. 6-LAYER ONTOLOGY REFERENCES

### Layer Ordering Verification

**CLAUDE.md (lines 410-440):** 6-Layer Ontology Quick Map

**Correct order:** Identity → Vocabulary → Grammar → Components → Case Studies → Guidelines

**Plan references:**

| Layer | Plan Reference | Correct Order? | Path Correct? |
|-------|----------------|----------------|---------------|
| Layer 1 (Identity) | Line 107: prohibitions.md | ✅ YES | ✅ YES |
| Layer 2 (Vocabulary) | Line 107: tokens.css | ✅ YES | ✅ YES |
| Layer 3 (Grammar) | Line 110: mechanism-catalog.md | ✅ YES | ⚠️ File exists but line range unclear |
| Layer 4 (Components) | Line 110: components.css | ✅ YES | ❌ NO — file ambiguity |
| Layer 5 (Case Studies) | Line 111: case-studies/ | ✅ YES | ❌ NO — _INDEX.md missing |
| Layer 6 (Guidelines) | Line 193: semantic-rules, responsive-strategy | ✅ YES | ✅ YES |

**Issues:**
1. Layer 3: mechanism-catalog.md "first 200 lines" unclear
2. Layer 4: components.css file ambiguity (which of 3 files?)
3. Layer 5: _INDEX.md does not exist

**All layers referenced in correct order** — ✅ PASS structural alignment

**3 file path errors** — ❌ FAIL operational alignment

---

## 7. METACOGNITIVE FRAMING

### Construction Consciousness (CLAUDE.md lines 288-305)

CLAUDE.md requires:
- **BEFORE reading:** State lens, thresholds, acknowledge construction
- **AFTER reading:** Replace "I found" → "I interpreted"

**Plan Section 1 (line 13):** "Epistemological framing: This validates TOOL FITNESS"

**Plan Section 5 builders (line 181):** "You are CONSTRUCTING a page, not DISCOVERING"

**Match:** ✅ Plan includes construction framing

**Issue:** Plan does NOT require builders to state lens or thresholds.

**Fix:** Add to builder prompts:
```markdown
**Construction consciousness (per compositional-core/CLAUDE.md lines 288-305):**

BEFORE building, state:
- Your lens: "I am using [identity/enablement/creative] lens because [reason]"
- Your thresholds: "I will consider X extractable if [criteria]"
- Acknowledge: "This is my interpretation, not objective truth"

AFTER building, document:
- Replace "I found" → "I interpreted"
- Replace "The system has" → "I constructed a model where"
```

---

### Template Immunity (CLAUDE.md lines 307-349)

**Jazz Real Book Analogy:**
- Case studies are PROCESS PROOFS, not templates
- Extract MECHANISMS, not implementations
- Apply to YOUR content with YOUR metaphor

**Plan (line 80-84, Variant A isolation):** "Any Read call to compositional-core/ beyond prohibitions+tokens invalidates your build."

**Plan (line 122, Variant D):** "Read the design system case studies and components. Build a page using these patterns."

**Issue:** Variant D prompt encourages template-matching ("using these patterns").

**Fix:** Add template immunity warning to Variant D:
```markdown
**Variant D: Library-First**

Read compositional-core/case-studies/ and components/.

**CRITICAL: Case studies are NOT TEMPLATES.**
- Study the PROCESS proofs
- Extract MECHANISMS (border-weight, 2-zone DNA, compression)
- Apply to YOUR content (not copy-paste implementations)

Build using extracted techniques, not verbatim CSS.
```

---

## 8. CRITICAL MISMATCHES SUMMARY

### CRITICAL Severity (Execution-Blocking)

1. **`case-studies/_INDEX.md` does not exist** (7 plan references)
   - **Severity:** CRITICAL
   - **Impact:** Variant C Phase 3.5 gate cannot execute
   - **Fix:** Create file OR replace all references with `case-studies/README.md`
   - **Lines:** 109, 153, 188, 590

2. **`components.css` file ambiguity** (3 files exist)
   - **Severity:** CRITICAL
   - **Impact:** Agents don't know which file to read
   - **Fix:** Specify canonical file: `components-dd-od.css`, `components-cd-tt.css`, `components.css`, or all three
   - **Lines:** 110, 173, 193, 588

3. **content-preparer does NOT read mandatory always-load files**
   - **Severity:** CRITICAL
   - **Impact:** Violates CLAUDE.md mandatory protocol (line 28: "for ANY task")
   - **Fix:** Add prohibitions.md + tokens.css to content-preparer prompt
   - **Lines:** 146-154

### HIGH Severity (Functional Gaps)

4. **mechanism-catalog.md "first 200 lines" unclear** (868 total)
   - **Severity:** HIGH
   - **Impact:** May not include all 18 mechanisms
   - **Fix:** Verify line range or specify all mechanisms
   - **Lines:** 111, 171, 589

5. **Phase 3.5 gate missing 2 questions** (independent derivation, justification)
   - **Severity:** HIGH
   - **Impact:** Weakens anti-gravity enforcement
   - **Fix:** Add CLAUDE.md questions 1-2 to Variant C prompt
   - **Lines:** 109

6. **R3 (Anti-Prescription Framing) not enforced**
   - **Severity:** HIGH
   - **Impact:** Agents may treat case studies as templates
   - **Fix:** Add template warning requirement to Phase 5
   - **Lines:** Section 4

7. **No Phase 7 (perceptual audit) specified in builder workflow**
   - **Severity:** HIGH
   - **Impact:** Builders may not invoke PA skill before returning
   - **Fix:** Add Phase 7 invocation to ALL builder prompts
   - **Lines:** Section 5

### MEDIUM Severity (Protocol Inconsistencies)

8. **Always-load sequencing not enforced** (BEFORE other files)
   - **Severity:** MEDIUM
   - **Impact:** Agents may read files in wrong order
   - **Fix:** Add "BEFORE ANY OTHER ACTION" to prompts
   - **Lines:** Section 5

9. **R5 (Binary Sequential Phases) lacks "invalidates" language**
   - **Severity:** MEDIUM
   - **Impact:** Weaker enforcement than CLAUDE.md
   - **Fix:** Add ABSOLUTE language to Variant C
   - **Lines:** Section 4

10. **Variant D encourages template-matching** ("using these patterns")
    - **Severity:** MEDIUM
    - **Impact:** Contradicts template immunity principle
    - **Fix:** Add template immunity warning
    - **Lines:** 122

---

## 9. RECOMMENDATIONS

### CRITICAL Fixes (MUST address before execution)

1. **Resolve `_INDEX.md` missing file issue:**
   - Create `compositional-core/case-studies/_INDEX.md` with titles + tensions
   - OR replace all 7 references with `README.md`
   - Verify file exists before spawning Variant C builder

2. **Clarify `components.css` canonical file:**
   - Verify which of 3 files is authoritative
   - Update ALL plan references to use correct path(s)
   - If agents need all 3, list all 3 explicitly

3. **Add always-load to content-preparer:**
   - Insert prohibitions.md + tokens.css at top of prompt
   - Enforce BEFORE reading synthesis content files

### HIGH Priority Fixes (SHOULD address)

4. **Verify mechanism-catalog.md line range:**
   - Check if first 200 lines contains all 18 mechanisms
   - Update plan to specify actual line count OR remove limit

5. **Complete Phase 3.5 gate questions:**
   - Add CLAUDE.md questions 1-2 to Variant C prompt
   - Use CLAUDE.md gate structure verbatim

6. **Add Phase 7 (perceptual audit) to builders:**
   - Specify WHEN to invoke PA skill (before declaring done)
   - Add to ALL 5 builder prompts

7. **Enforce R3 (Anti-Prescription Framing):**
   - Add template warning check to Phase 5 case study reading

### MEDIUM Priority Fixes (COULD address)

8. **Add always-load sequencing:**
   - "BEFORE ANY OTHER ACTION" language to all builder prompts

9. **Strengthen R5 binary language:**
   - Add "violation invalidates" to Variant C prompt

10. **Add template immunity to Variant D:**
    - Clarify case studies are process proofs, not patterns to copy

---

## 10. OVERALL VERDICT

**FAIL — Plan cannot execute as written without corrections**

**Critical blockers:**
- _INDEX.md file missing (7 references)
- components.css file ambiguity (agent confusion)
- content-preparer violates always-load protocol

**Path to PASS:**
1. Create _INDEX.md OR replace all references with README.md
2. Clarify components.css canonical file path
3. Add always-load to content-preparer
4. Complete Phase 3.5 gate questions
5. Add Phase 7 (PA skill invocation) to ALL builders
6. Verify mechanism-catalog.md line range

**Estimated fix time:** 3-4 hours (file creation + prompt updates + verification)

**Risk if unfixed:**
- Variant C Phase 3.5 gate fails (no _INDEX.md)
- Agents read wrong component files (ambiguity)
- Content violates soul constraints (no always-load)
- Builders skip perceptual audit (no Phase 7)
- Template-matching despite anti-gravity (no R3 enforcement)

---

**END LIBRARY ALIGNMENT AUDIT**
