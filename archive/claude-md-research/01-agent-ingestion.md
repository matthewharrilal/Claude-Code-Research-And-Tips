# Agent Ingestion Research — First Contact with Compositional-Core

**Date:** 2026-02-14
**Agent:** agent-ingestion-researcher
**Task:** Research what agents need on FIRST CONTACT with compositional-core folder
**Purpose:** Inform CLAUDE.md design (dense, actionable, earn-its-place content)

---

## EXECUTIVE SUMMARY

**Core Finding:** CLAUDE.md must be PROCEDURAL ENFORCEMENT, not comprehensive documentation. The README is 920 lines of reference material; CLAUDE.md should be 100-150 lines of BINARY SEQUENTIAL RULES.

**Critical Distinction:**
- **README** = "What this is" (comprehensive, exploratory, educational)
- **CLAUDE.md** = "What you do FIRST" (mandatory sequence, binary rules, enforcement)

**Key Insight:** Agents make decisions in the FIRST 30 SECONDS that determine success or failure. CLAUDE.md must intercept these decisions with STRUCTURAL GATES, not advice.

---

## 1. WHAT AGENTS NEED IN THE FIRST 10 LINES

### Current README Opening (Lines 1-10)
```
# Compositional-Core — KortAI Design System Phase-Gated Protocol
**WARNING: This is NOT a component library. It is a PHASE-GATED PROTOCOL...**
```

**Analysis:**
- ✅ Correct framing (protocol, not library)
- ❌ Too abstract for immediate action
- ❌ Doesn't answer "what do I read FIRST?"

### What Should Be in CLAUDE.md First 10 Lines

**The 30-second decision:**

```
═══════════════════════════════════════════════════════════════════════════
STOP — READ THIS BEFORE TOUCHING ANYTHING
═══════════════════════════════════════════════════════════════════════════

This is a PHASE-GATED PROTOCOL with different access rules for different stages.

BEFORE reading ANYTHING else, answer:
1. What am I building? (new page / audit / research / maintenance)
2. Which phase am I in? (Phase 0-5)
3. What is PROHIBITED in my current phase?

THEN follow the mandatory sequence for your agent type (below).
```

**Why this works:**
- **Binary question** forces classification (agent type)
- **Prohibition-first** prevents the #1 failure mode (reading case studies early)
- **30-second orientation** before any file access

---

## 2. DECISIONS AGENTS MAKE IN FIRST 30 SECONDS

### Decision Tree (Current Behavior Without CLAUDE.md)

```
Agent enters compositional-core/
    ↓
Sees 6 directories
    ↓
Training bias activates: "Read case-studies/ to understand system"
    ↓
Reads DD-006-fractal.md
    ↓
Thinks: "Fractal structure is the design system"
    ↓
Builds new page with 4 scales
    ↓
PATTERN-MATCHING (anti-gravity failed)
```

### Decision Tree (With Effective CLAUDE.md)

```
Agent enters compositional-core/
    ↓
CLAUDE.md auto-loaded
    ↓
Sees: "PROHIBITED: case-studies/ until Phase 5"
    ↓
Sees: "MANDATORY: Read prohibitions.md + tokens.css FIRST"
    ↓
Reads identity/prohibitions.md (353 lines)
    ↓
Reads vocabulary/tokens.css (174 lines)
    ↓
Enters Phase 0 with soul constraints loaded
    ↓
INDEPENDENT DERIVATION (anti-gravity working)
```

**Critical intervention points:**
1. **Entry** — CLAUDE.md loaded automatically
2. **File access** — Binary prohibition on case-studies/
3. **Always-load layer** — Mandatory first 2 files
4. **Phase gate** — Cannot proceed without completing prior phase

---

## 3. MISTAKES AGENTS MAKE WITHOUT GUIDANCE

### From README Analysis (Section: "Common Mistakes")

The README documents 5 mistakes (lines 675-738):

| Mistake | Current Prevention | Success Rate | CLAUDE.md Opportunity |
|---------|-------------------|--------------|----------------------|
| **1. Reading case studies first** | M1 (directory separation), M5 (prohibition), M3 (headers) | 60-95% | **Binary rule at entry** |
| **2. Skipping prohibitions** | Always-load layer mention | ~40% | **Mandatory sequence** |
| **3. Pattern-matching** | M3 (anti-prescription), M6 (divergence), M9 (gate) | 70-90% | **Phase 3.5 checkpoint** |
| **4. Extracting implementations** | M2 (dual-file), mechanism framing | 70-80% | **Phase 4 extraction rule** |
| **5. Reading everything at once** | M1 (separation), M5 (sequence) | 60-95% | **Phase-based file list** |

**Key Finding:** Mistakes 1, 2, 5 are LOAD-ORDER failures. CLAUDE.md can achieve 95%+ compliance with:
- Binary prohibition (case-studies/)
- Mandatory sequence (prohibitions → tokens → mechanisms → case studies)
- Phase-based file access list

**Mistakes 3, 4 are EXECUTION failures.** CLAUDE.md cannot prevent these (they happen during Phase 3-4). Leave to skill + README.

---

## 4. MINIMUM VIABLE CONTEXT FOR EACH AGENT TYPE

### Agent Type 1: Builder (Creating New Page)

**What they need:**
- Phase-gated access rules (what to read when)
- Mandatory first 2 files (prohibitions + tokens)
- Prohibition on case-studies/ until Phase 5
- Phase 3.5 gate instructions (metaphor lock-in)
- Mechanism extraction rule (techniques, not implementations)

**What they DON'T need in CLAUDE.md:**
- Full mechanism catalog (that's in mechanism-catalog.md)
- Case study summaries (that's in _INDEX.md)
- Lens choice rationale (that's in lens-manifesto.md)
- Construction methodology (that's in construction-narrative.md)

**Minimum viable CLAUDE.md section:**
```
FOR BUILDER AGENTS (Creating New Pages):

MANDATORY SEQUENCE:
1. Read identity/prohibitions.md (ALL 353 lines)
2. Read vocabulary/tokens.css (ALL 174 lines)
3. Run tension-composition Phases 0-3 BLIND to case-studies/
4. GATE: Lock metaphor at Phase 3.5 (write commitment before library access)
5. Read grammar/mechanism-catalog.md (extract TECHNIQUES, not values)
6. OPTIONAL: Read 2-3 case-studies/*.md (verify divergence)
7. Implement using tokens + mechanisms
8. Verify with perceptual-auditing skill

PROHIBITED:
- case-studies/ directory during Phases 0-4 (ABSOLUTE)
- Reading implementations as recipes (extract techniques)
- Changing metaphor after Phase 3.5 gate
```

**Token count:** ~150 words = ~200 tokens

---

### Agent Type 2: Auditor (Checking Existing Page)

**What they need:**
- No phase restrictions (audit agents read everything)
- Compliance checklist (prohibitions)
- Token verification list
- Mechanism identification guide

**What they DON'T need:**
- Tension-composition pipeline (they audit, not create)
- Phase-gated access (they need full visibility)

**Minimum viable CLAUDE.md section:**
```
FOR AUDITOR AGENTS (Verifying Pages):

READING ORDER: Source-first (implementation → spec)
1. Read identity/prohibitions.md (compliance checklist)
2. Read vocabulary/tokens.css (token verification)
3. Read grammar/mechanism-catalog.md (mechanism identification)
4. Read case-studies/*.md (quality comparison baseline)

NO PHASE RESTRICTIONS — audit requires full access.

VERIFICATION CHECKLIST:
□ border-radius: 0 everywhere?
□ box-shadow: none everywhere?
□ Colors from tokens.css?
□ Fonts correct (display/body/mono)?
□ Spacing from scale (4px base)?
□ Prohibitions (22 total) complied?
```

**Token count:** ~120 words = ~160 tokens

---

### Agent Type 3: Research (Analyzing the System)

**What they need:**
- Context-first reading order (process → validation → content)
- Construction vs application mode distinction
- Lens transparency (this is constructed, not discovered)

**Minimum viable CLAUDE.md section:**
```
FOR RESEARCH AGENTS (Analyzing the System):

READING ORDER: Context-first (WHY → HOW → WHAT)
1. Read process/lens-manifesto.md (WHY extraction choices made)
2. Read process/construction-narrative.md (HOW extraction built)
3. Read validation/anti-gravity-compliance.md (mechanism deployment)
4. Read all content in ANALYSIS mode (not application mode)

CRITICAL DISTINCTION:
- Analysis mode: "How does this system work?"
- NOT application mode: "Which template do I use?"

THIS IS CONSTRUCTED, NOT DISCOVERED.
Different lenses → different extractions. Read process/ to understand choices.
```

**Token count:** ~110 words = ~150 tokens

---

### Agent Type 4: Maintenance (Updating the System)

**What they need:**
- Provenance awareness (don't break the chain)
- Validation re-run requirements
- Gap-check updates

**Minimum viable CLAUDE.md section:**
```
FOR MAINTENANCE AGENTS (Updating the System):

BEFORE CHANGES:
1. Read process/extraction-provenance.md (what was extracted, what excluded)
2. Read validation/gap-check.md (known gaps)
3. Read validation/convergence-check.md (pattern tracking)

AFTER CHANGES:
□ Re-run anti-gravity compliance check
□ Update gap-check.md if gap addressed
□ Update convergence-check.md if patterns changed
□ Update README.md if structure changed

PROVENANCE CHAIN:
All changes must document LENS + REASONING + WHAT-CHANGED.
```

**Token count:** ~100 words = ~130 tokens

---

## 5. INFORMATION IN README THAT SHOULD NOT DUPLICATE IN CLAUDE.MD

### README Content (920 lines) — What to KEEP in README Only

**Section 1: "What This Is" (lines 9-30)**
- Philosophical framing (jazz model, lens construction)
- NOT needed in CLAUDE.md (agents don't need philosophy to act)

**Section 2: "Directory Structure" (lines 87-148)**
- Full 6-layer ontology explanation
- NOT needed in CLAUDE.md (agents only need "read this first")

**Section 3: "Jazz Model" (lines 405-428)**
- Extended analogy
- NOT needed in CLAUDE.md (educational, not operational)

**Section 4: "Lens Choice & Trade-offs" (lines 433-511)**
- Why this lens, not others
- NOT needed in CLAUDE.md (transparency, not enforcement)

**Section 5: "How This Was Constructed" (lines 512-566)**
- Metacognitive reflection
- NOT needed in CLAUDE.md (research insight, not operational rule)

**Section 6: "Anti-Gravity Mechanisms" (lines 597-671)**
- Deep explanation of WHY mechanisms work
- PARTIAL need in CLAUDE.md (agents need WHAT to do, not WHY it works)

**Section 7: "Failure Modes" (lines 743-803)**
- Probabilistic risk analysis
- NOT needed in CLAUDE.md (research finding, not operational instruction)

**Section 8: "Before You Build — Checklist" (lines 807-849)**
- ✅ **CLAUDE.md CANDIDATE** — This is operational, binary, actionable

**Section 9: "Key Principles" (lines 853-887)**
- Philosophical principles
- NOT needed in CLAUDE.md (educational synthesis)

---

### What SHOULD Duplicate (Operational Content Only)

| README Section | CLAUDE.md Version | Why Duplicate |
|----------------|-------------------|---------------|
| "First Contact — Always-Load Layer" (lines 33-83) | **YES** — Mandatory file list | Operational enforcement |
| "Phase Access Rules" (lines 195-199) | **YES** — Binary prohibitions | Phase-gated access |
| "Before You Build — Checklist" (lines 807-849) | **YES** — Agent-type specific | Operational sequence |
| "Phase 3.5 Gate" (lines 261-268) | **YES** — Lock-in questions | Structural gate |

**Duplication rule:** If content is PROCEDURAL (do this, then this), duplicate. If content is EXPLANATORY (here's why), keep in README only.

---

## 6. FILE-LOADING SEQUENCES — MANDATED VS RECOMMENDED

### Analysis of README Section: "How To Read This Folder" (lines 152-229)

**Current structure:**
- 3 agent types (Composition, Audit, Research)
- Each has reading order
- Some MANDATED (Phase 0D: MUST NOT read case-studies/)
- Some RECOMMENDED (OPTIONALLY read 2-3 case studies)

### Proposed CLAUDE.md Structure

**MANDATED (Binary, Sequential, No Bypass):**

```
MANDATED FILE SEQUENCE (ABSOLUTE):

FOR ALL AGENTS (Entry):
1. identity/prohibitions.md — Read FIRST, ALWAYS
2. vocabulary/tokens.css — Read SECOND, ALWAYS

FOR BUILDER AGENTS (Phases 0-3):
3. PROHIBITED: case-studies/ directory
4. PROHIBITED: Reading implementations as templates

FOR BUILDER AGENTS (Phase 3.5 — GATE):
5. MANDATORY: Write metaphor commitment
6. MANDATORY: Complete divergence check
7. GATE: Cannot proceed to Phase 4 without completing 5-6

FOR BUILDER AGENTS (Phase 4):
8. NOW PERMITTED: grammar/mechanism-catalog.md
9. EXTRACT: Techniques (border-weight gradient), NOT implementations (4px border)

FOR BUILDER AGENTS (Phase 5 — OPTIONAL):
10. NOW PERMITTED: case-studies/*.md
11. PURPOSE: Verify divergence (not get ideas)
```

**RECOMMENDED (Judgment-Based, Agent Decides):**

```
RECOMMENDED READING (Optional):

FOR BUILDERS:
- guidelines/usage-criteria.md (when uncertain about appropriateness)
- validation/gap-check.md (to understand known limitations)

FOR AUDITORS:
- case-studies/*.md (quality comparison baseline)

FOR RESEARCHERS:
- process/lens-manifesto.md (understand lens choice)
- process/construction-narrative.md (understand methodology)

FOR MAINTENANCE:
- validation/convergence-check.md (pattern tracking)
```

---

### Key Finding: MANDATED = Binary, RECOMMENDED = Judgment

From MEMORY.md (metacognition analysis):
> **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%**

**Application:**
- **CLAUDE.md** = Binary mandates only (MUST/PROHIBITED/GATE)
- **README** = Judgment recommendations (OPTIONALLY/consider/may)

**This division ensures:**
- CLAUDE.md has 95%+ compliance (binary enforcement)
- README remains comprehensive reference (exploratory)

---

## 7. SYNTHESIS — CLAUDE.MD DESIGN PRINCIPLES

### Principle 1: Procedural, Not Descriptive

**WRONG (descriptive):**
```
The compositional-core uses a phase-gated protocol where different files
are accessed at different stages to prevent pattern-matching.
```

**CORRECT (procedural):**
```
PROHIBITED: case-studies/ until Phase 5.
Violation invalidates output.
```

---

### Principle 2: Binary, Not Judgment

**WRONG (judgment):**
```
Consider reading prohibitions.md to understand identity constraints.
```

**CORRECT (binary):**
```
MANDATORY: Read identity/prohibitions.md FIRST (all 353 lines).
```

---

### Principle 3: Agent-Type Branching, Not Universal

**WRONG (one-size-fits-all):**
```
Always read files in this order: prohibitions → tokens → mechanisms → case studies.
```

**CORRECT (agent-type specific):**
```
FOR BUILDER AGENTS: prohibitions → tokens → [BLIND PHASE] → mechanisms → case studies
FOR AUDITOR AGENTS: prohibitions → tokens → mechanisms → case studies (no restrictions)
FOR RESEARCH AGENTS: process → validation → content (analysis mode)
```

---

### Principle 4: Gate Enforcement, Not Advice

**WRONG (advice):**
```
It's recommended to lock in your metaphor before consulting the library.
```

**CORRECT (gate):**
```
PHASE 3.5 GATE — Cannot Proceed Without:
□ Written metaphor commitment
□ Divergence verification table
□ All answers favor independent derivation
```

---

### Principle 5: Context-Earning, Not Comprehensive

**WRONG (everything):**
```
[600 lines covering all aspects of the system]
```

**CORRECT (minimum viable):**
```
[150 lines covering ONLY entry decisions + mandatory sequence + gates]
```

**Why:** CLAUDE.md is auto-loaded into context. Every line costs tokens. Only include what agents NEED IN FIRST 30 SECONDS, not what they might want later.

---

## 8. PROPOSED CLAUDE.MD STRUCTURE (100-150 Lines)

```markdown
═══════════════════════════════════════════════════════════════════════════
COMPOSITIONAL-CORE — PHASE-GATED PROTOCOL ENFORCEMENT
═══════════════════════════════════════════════════════════════════════════

STOP — Answer these questions BEFORE reading any files:

1. What am I doing? [building / auditing / researching / maintaining]
2. What phase am I in? [Phase 0-5, or N/A for audit/research]
3. Have I read prohibitions.md + tokens.css? [YES/NO]

If answer 3 is NO → Read those 2 files FIRST (mandatory for ALL agents).

Then follow your agent-type sequence below.

═══════════════════════════════════════════════════════════════════════════
FOR ALL AGENTS — ALWAYS-LOAD LAYER
═══════════════════════════════════════════════════════════════════════════

MANDATORY (Read FIRST, before anything else):
1. identity/prohibitions.md (353 lines) — Soul constraints
2. vocabulary/tokens.css (174 lines) — Palette + spacing + fonts

These 2 files define KortAI identity. Skipping them = soul violations.

═══════════════════════════════════════════════════════════════════════════
FOR BUILDER AGENTS — Creating New Pages
═══════════════════════════════════════════════════════════════════════════

PHASE 0-3: Blind Derivation
□ PROHIBITED: case-studies/ directory
□ PROHIBITED: Reading validated-explorations/
□ PERMITTED: identity/, vocabulary/ only
□ ACTION: Run tension-composition skill Phases 0-3

PHASE 3.5: Metaphor Lock-In (GATE — Cannot Bypass)
□ Write metaphor commitment
□ Answer gate questions:
  1. Did I derive independently? [YES/NO]
  2. Can I justify without library? [YES/NO]
  3. Does this appear in _INDEX.md? [YES/NO → divergence table required]
□ GATE: If ANY answer wrong → Regenerate metaphor

PHASE 4: Mechanism Extraction
□ NOW PERMITTED: grammar/mechanism-catalog.md
□ EXTRACT: Techniques (border-weight gradient encodes hierarchy)
□ PROHIBITED: Implementations (4px bedrock border)

PHASE 5: Case Study Comparison (OPTIONAL)
□ NOW PERMITTED: case-studies/*.md
□ PURPOSE: Verify divergence (not get ideas)
□ Complete divergence table (5 dimensions)

PHASE 6: Implementation
□ Use token VALUES (var(--color-primary))
□ Apply mechanism TECHNIQUES adapted to YOUR metaphor
□ Generate YOUR vocabulary (not library metaphor terms)

PHASE 7: Verification
□ Run perceptual-auditing skill (full)
□ Check guardrails: 940px container, 16px spacing, 32px padding

═══════════════════════════════════════════════════════════════════════════
FOR AUDITOR AGENTS — Verifying Pages
═══════════════════════════════════════════════════════════════════════════

NO PHASE RESTRICTIONS (audit requires full access)

READING ORDER: Source-first
1. identity/prohibitions.md (compliance checklist)
2. vocabulary/tokens.css (token verification)
3. grammar/mechanism-catalog.md (mechanism identification)
4. case-studies/*.md (quality baseline)

VERIFICATION CHECKLIST:
□ border-radius: 0 everywhere?
□ box-shadow: none everywhere?
□ Colors from tokens.css?
□ Fonts correct (display/body/mono)?
□ 22 prohibitions complied?

═══════════════════════════════════════════════════════════════════════════
FOR RESEARCH AGENTS — Analyzing the System
═══════════════════════════════════════════════════════════════════════════

READING ORDER: Context-first (WHY → HOW → WHAT)
1. process/lens-manifesto.md (lens choice rationale)
2. process/construction-narrative.md (extraction methodology)
3. validation/anti-gravity-compliance.md (mechanism deployment)
4. Read all content in ANALYSIS mode (not application mode)

CRITICAL: This is CONSTRUCTED (lens-based), not DISCOVERED (objective truth).

═══════════════════════════════════════════════════════════════════════════
FOR MAINTENANCE AGENTS — Updating the System
═══════════════════════════════════════════════════════════════════════════

BEFORE CHANGES:
1. Read process/extraction-provenance.md
2. Read validation/gap-check.md (known gaps)

AFTER CHANGES:
□ Re-run anti-gravity compliance check
□ Update gap-check.md if gap addressed
□ Update README.md if structure changed
□ Document: LENS + REASONING + WHAT-CHANGED

═══════════════════════════════════════════════════════════════════════════
PROHIBITED ACTIONS (Violations Invalidate Output)
═══════════════════════════════════════════════════════════════════════════

□ Reading case-studies/ before Phase 5 (builders only)
□ Skipping prohibitions.md (all agents)
□ Extracting implementations as recipes (builders)
□ Changing metaphor after Phase 3.5 gate (builders)
□ Using library metaphor vocabulary (builders)
□ Violating any of 22 prohibitions (all agents)

═══════════════════════════════════════════════════════════════════════════
SELF-CHECK BEFORE PROCEEDING
═══════════════════════════════════════════════════════════════════════════

□ Did I read prohibitions.md + tokens.css?
□ Do I know my agent type? [builder/auditor/research/maintenance]
□ Do I know my current phase? [0-7 or N/A]
□ Do I know what's PROHIBITED in my phase?
□ Have I completed all prior phase gates?

If ANY answer is NO → Stop. Complete the step. Then proceed.

═══════════════════════════════════════════════════════════════════════════
END ENFORCEMENT — Refer to README.md for comprehensive reference
═══════════════════════════════════════════════════════════════════════════
```

**Token count:** ~650 words = ~850 tokens (well under 1,000 token budget)

---

## 9. KEY FINDINGS SUMMARY

### Finding 1: CLAUDE.md Must Be Enforcement, Not Education

**Ratio:**
- README: 920 lines, comprehensive, exploratory
- CLAUDE.md: 100-150 lines, procedural, enforcement

**Division of labor:**
- README answers: "What is this? How does it work? Why these choices?"
- CLAUDE.md answers: "What do I read FIRST? What's prohibited? What's the sequence?"

---

### Finding 2: Binary Rules in CLAUDE.md, Judgment in README

From metacognition analysis:
> **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%**

**Application:**
- CLAUDE.md: MUST/PROHIBITED/GATE (binary, sequential, structural)
- README: OPTIONALLY/consider/recommended (judgment, exploratory)

---

### Finding 3: Agent-Type Branching Essential

**4 agent types need 4 different sequences:**

| Agent Type | Phase Restrictions | Priority Files | Gate Requirements |
|------------|-------------------|----------------|------------------|
| **Builder** | YES (0-7 phases) | prohibitions → tokens → mechanisms → case studies | Phase 3.5 metaphor lock |
| **Auditor** | NO | prohibitions → tokens → mechanisms → case studies (all at once) | None |
| **Research** | NO | process → validation → content | None |
| **Maintenance** | PARTIAL | provenance → gaps → content | Re-validation after changes |

**One-size-fits-all sequence FAILS.** Builders need restrictions; auditors need full access.

---

### Finding 4: First 30 Seconds Determine Success

**Critical decisions happen BEFORE first file read:**
1. Which files to read first? (prohibitions vs case studies)
2. In what order? (vocabulary → mechanisms vs everything at once)
3. What's prohibited? (case-studies/ in Phases 0-4)

**CLAUDE.md must intercept BEFORE these decisions are made.**

**Mechanism:** Auto-load on directory entry, binary prohibitions at top, mandatory sequence before action.

---

### Finding 5: Gate Enforcement More Valuable Than Explanation

**Current README:**
- Anti-gravity mechanisms: 75 lines explaining WHY they work
- Phase 3.5 gate: 8 lines on WHAT to do

**Proposed CLAUDE.md:**
- Anti-gravity WHY: 0 lines (keep in README)
- Phase 3.5 gate: 10 lines on WHAT + HOW + CANNOT BYPASS

**Why:** Agents need STRUCTURAL GATES (cannot proceed without), not explanations (can ignore).

---

## 10. RECOMMENDATIONS FOR CLAUDE.MD

### Recommendation 1: Use Proposed Structure (150 Lines)

**Contents:**
- Entry questions (3 questions, 10 lines)
- Always-load layer (2 files, 5 lines)
- Builder sequence (Phases 0-7, 40 lines)
- Auditor sequence (15 lines)
- Research sequence (15 lines)
- Maintenance sequence (15 lines)
- Prohibited actions (10 lines)
- Self-check (5 lines)

**Total:** ~115 lines of enforcement, ~35 lines of structure/formatting

---

### Recommendation 2: Duplicate ONLY Procedural Content from README

**Duplicate:**
- Always-load layer (prohibitions + tokens)
- Phase-gated access rules (what's prohibited when)
- Phase 3.5 gate questions
- Mechanism extraction rule (techniques, not implementations)

**Do NOT duplicate:**
- Jazz model analogy
- Lens choice rationale
- Anti-gravity mechanism explanations
- Failure mode probabilities
- Key principles

**Rule:** If it's a BINARY SEQUENCE → CLAUDE.md. If it's EDUCATIONAL → README only.

---

### Recommendation 3: Use Metacognition-Validated Language

From MEMORY.md:
> **Binary rules achieve 100% agent compliance**

**Language patterns that work:**
- MUST/PROHIBITED/GATE (binary, absolute)
- Cannot proceed without (structural enforcement)
- Violation invalidates output (consequence explicit)
- Read FIRST, ALWAYS (sequence absolute)

**Language patterns that DON'T work:**
- Consider/recommended (judgment)
- It's best to (advice)
- You may want to (optional)

---

### Recommendation 4: Agent-Type Entry Classification

**First thing in CLAUDE.md:**
```
Answer: What am I doing? [building / auditing / researching / maintaining]
Then jump to your section below.
```

**Why:** Prevents builders from reading auditor instructions (which permit early case-study access).

---

### Recommendation 5: Refer to README for Depth

**Last line of CLAUDE.md:**
```
═══════════════════════════════════════════════════════════════════════════
END ENFORCEMENT — Refer to README.md for comprehensive reference
═══════════════════════════════════════════════════════════════════════════
```

**Why:** Signals division of labor. CLAUDE.md = enforcement. README = education.

---

## 11. IMPLEMENTATION NOTES

### File Size Budget

**Target:** 100-150 lines, <1,000 tokens
**Reasoning:** CLAUDE.md auto-loads into context. Every token costs context window space.

**Comparison:**
- README: 920 lines (not auto-loaded)
- Current design-system/CLAUDE.md: 600 lines (user's existing enforcement file)
- Proposed compositional-core/CLAUDE.md: 150 lines (lean enforcement)

---

### Testing Criteria

**Success = Agent answers YES to all:**
1. Did I read prohibitions.md + tokens.css FIRST?
2. Did I know what was PROHIBITED in my phase?
3. Did I complete Phase 3.5 gate before reading case-studies/?
4. Did I extract techniques (not implementations)?
5. Did I verify with perceptual-auditing?

**Failure = Agent says "I didn't know I had to..."**

---

### Maintenance Protocol

**When to update CLAUDE.md:**
- New phase added (update phase sequence)
- New prohibition added (update prohibited actions)
- New agent type identified (add new section)

**When NOT to update CLAUDE.md:**
- New case study added (that's README)
- New mechanism documented (that's README)
- Lens rationale changes (that's README)

**Rule:** CLAUDE.md tracks PROCESS, README tracks CONTENT.

---

## END RESEARCH
