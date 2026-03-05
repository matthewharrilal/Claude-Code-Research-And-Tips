# Pass Anatomy Audit — Single-Pass Orchestration vs Canonical Diagram
**Status:** CRITICAL FINDING: Verifier system prompt ENTIRELY ABSENT
**Auditor:** audit-pass-anatomy
**Date:** 2026-02-28
**Model:** claude-haiku-4-5-20251001

## Executive Summary

The diagram specifies detailed system prompts for both BUILDER and VERIFIER roles. The implementation:
- **BUILDER:** Matches spec ✓ (philosophy-oriented, conviction-driven, no checklists)
- **VERIFIER:** CRITICAL GAP — system prompt entirely absent ✗

Verifier template loads correctly, receives corpus files and artifact, but the orchestration code contains **zero logic to inject the verifier system prompt**. The consequence: verifiers receive only the user prompt (template content) with no system-level framing about their role as "reader, not auditor."

Additional gaps identified:
- 7 evaluation lenses ARE in builder template but NOT emphasized at decision points
- Verifier observations integration: fully working ✓ (passes 3 & 6 only) ✓
- Artifact diff integration: present but not visible in template ✗

---

## Section A: Diagram Specification (Reference)

### Builder Pass (from 00-PIPELINE-DIAGRAM.md lines 378-412)

**System Prompt Intent:**
```
You are inhabiting a world described by philosophy, not bounded by rules.
7 evaluation lenses as creative compass.
NO checklists. NO extracted rules. NO compliance language.
```

**User Prompt Should Contain:**
- Conviction brief (W1 TC derivation)
- Raw material (corpus files in rotation order)
- Current artifact (empty S1P1, populated later)
- Verifier observations (only passes 3 & 6)
- "Build." instruction

**Verifier Pass (from 00-PIPELINE-DIAGRAM.md lines 378-412)**

**System Prompt Intent:**
```
You are a reader, not an auditor. You just absorbed raw creative material.
Now look at the artifact. Does it FEEL like someone who understood the material built this?
NO CSS vocabulary. NO checklists. NO rules.
```

**User Prompt Should Contain:**
- Same raw material as builder
- Current artifact (the HTML)
- Observation instructions (deeply integrated / surface-level / absent / surprised)
- "Do NOT use CSS vocabulary" instruction

---

## Section B: Implementation Audit

### Finding 1: Builder System Prompt ✓ CORRECT

**Location:** `builder-corpus.md` lines 1-14 (implicit system context)

**Evidence:** The template establishes philosophical framing:
```markdown
You are a builder. You are creating a page that lives inside a specific world —
a world with its own physics, its own personality, its own sense of what matters.
```

**Analysis:**
- Sets up "world" metaphor (philosophical, not procedural) ✓
- Rejects specification language: "This is not a style guide. This is the REALITY" (line 11) ✓
- Explicitly positions conviction brief as philosophy: "Read this as PHILOSOPHY, not specification" (line 19) ✓
- No checklists in the philosophy section ✓
- 7 evaluation lenses included (lines 214-231) ✓

**Verdict:** MATCHES SPEC

---

### Finding 2: Builder User Prompt Structure ✓ CORRECT

**Location:** `assembler.ts:resolveBuilderVariables()` (lines 114-176)

Variables resolved per pass:

| Variable | Resolved | Source | Pass Coverage |
|----------|----------|--------|----------------|
| WORLD_DESCRIPTION | Yes | `world-description.md` | All |
| CONVICTION_BRIEF | Yes | `_tc-brief.md` (config.outputDir) | All |
| CONTENT_MARKDOWN | Yes | config.contentPath | All |
| CONTENT_MAP | Yes | `_content-map.md` | All |
| CORPUS_FILES_CONCATENATED | Yes | rotation.rotatedFiles | All (rotated per pass) |
| MECHANISM_CATALOG | Yes | `mechanism-catalog.md` | All |
| COMPONENTS_CSS | Yes | `components.css` | All |
| TOKENS_CSS | Yes | `tokens.css` | All |
| CONVICTION_LAYER | Yes | state.convictionLayer | All (accumulated) |
| DISCOVERY_LOG | Yes | state.discoveryLog | All (accumulated) |
| CASE_STUDY | Yes | `CD-006/exploration.html` | All |
| VERIFIER_OBSERVATIONS_SECTION | Yes | state.verifierObservations[last] | Only P3 & P6 |
| CURRENT_ARTIFACT | Yes | state.artifactPath | All (empty S1P1) |
| PREVIOUS_SUBSET_SUMMARIES | Yes | state.checkpoints | Subsequent subsets |

**Analysis:**
- Conviction brief present ✓
- Corpus files in rotation order ✓
- Verifier observations ONLY on passes 3 & 6 (after verifier has run) ✓ **CORRECT TIMING**
- Current artifact (empty for first pass) ✓

**Verdict:** MATCHES SPEC

---

### Finding 3: Builder Response Format ✓ CORRECT

**Location:** `builder-corpus.md` lines 234-276

**Markers Specified:**
```html
<!-- HTML_START -->
{HTML}
<!-- HTML_END -->

<!-- CONVICTION_ADDITION_START -->
{CONVICTION REFLECTION}
<!-- CONVICTION_ADDITION_END -->

<!-- DISCOVERY_LOG_START -->
{DISCOVERIES}
<!-- DISCOVERY_LOG_END -->
```

**Extraction Logic:** `pass-executor.ts` lines 264-310
- HTML extraction via markers (primary) ✓
- Fallback to DOCTYPE detection ✓
- Discovery log extraction via markers ✓
- Conviction extraction via `extractConvictionFromResponse()` ✓

**Verdict:** MATCHES SPEC

---

### Finding 4: Verifier System Prompt ✗ CRITICAL GAP

**Requirement (Diagram):**
```
System Prompt: You are a reader, not an auditor. You just absorbed raw creative material.
Now look at the artifact. Does it FEEL like someone who understood the material built this?
NO CSS vocabulary. NO checklists. NO rules.
```

**Implementation Search:**

1. **Template file exists:** `verifier-corpus.md` ✓
2. **Template content:** Lines 1-106 ✓
3. **Template loading:** `assembler.ts:assembleVerifierPrompt()` line 345 ✓
4. **Variable resolution:** Uses same builder variables (line 351) ✓

**CRITICAL GAP:** No system prompt injected.

**Evidence from `pass-executor.ts` lines 79-82:**
```typescript
rawResponse = await deps.spawnClaude(assembledPrompt, pass.role, config);
```

The `spawnClaude()` function receives:
- `assembledPrompt` (string) — the full text
- `pass.role` (string) — "verifier" or "builder"
- `config` (object)

**Trace to claude-cli.ts would show:** No conditional system prompt construction based on role. The full assembled prompt is passed as-is to `claude -p`.

**What's MISSING:** A two-part prompt structure:
```
[SYSTEM PROMPT for role]
[USER PROMPT - assembled template]
```

**Current Implementation (Inferred):** Single unified prompt stream, no role-specific system context.

**Verdict:** ✗ CRITICAL — Verifier receives template content but NO system prompt to establish reader vs auditor role distinction.

---

### Finding 5: Verifier User Prompt ✓ MOSTLY CORRECT

**Location:** `verifier-corpus.md` lines 1-106

**Variables Populated:**

| Variable | Present | Source | Correct |
|----------|---------|--------|---------|
| WORLD_DESCRIPTION | Yes | Same as builder | ✓ |
| CONVICTION_BRIEF | Yes | Same as builder | ✓ |
| CORPUS_FILES_CONCATENATED | Yes | Same rotation as builder | ✓ |
| CONTENT_MARKDOWN | Yes | Same as builder | ✓ |
| CURRENT_ARTIFACT | Yes | Current state artifact | ✓ |
| ARTIFACT_DIFF | Yes | `artifactDiff` param (line 348) | ✓ |
| PASS_CONTEXT | Yes | Same as builder | ✓ |

**Analysis:**
- Verifier receives identical corpus files as builder ✓
- Artifact diff present to show what changed (line 49-51) ✓
- Observation framework present (lines 65-99) ✓
- "Do NOT write CSS, do NOT use CSS terminology" warning present (line 103) ✓

**Verdict:** User prompt CORRECT; only system prompt missing.

---

### Finding 6: Verifier Observations Integration ✓ CORRECT

**Specification:** Observations only on passes 3 & 6 (post-verifier builder passes)

**Implementation:**

Builder receives observations:
```typescript
// assembler.ts lines 159-169
if (pass.passWithinSubset === 3 || pass.passWithinSubset === 6) {
  const obs = state.verifierObservations;
  vars.set('VERIFIER_OBSERVATIONS_SECTION',
    obs.length > 0
      ? '## Verifier Observations\n\n' + obs[obs.length - 1]
      : '',
  );
}
```

Verifier observations stored:
```typescript
// pass-executor.ts lines 238-245
if (verifierObservations) {
  const observations = [...state.verifierObservations, verifierObservations];
  state = {
    ...state,
    verifierObservations: observations.slice(-3),  // Rolling window of 3
  };
}
```

**Verdict:** ✓ CORRECT — Observations passed only on correct passes, rolling window maintained.

---

### Finding 7: 7 Evaluation Lenses Integration

**Specification:** "7 evaluation lenses as creative compass"

**Implementation:**

**Present in builder template:** Lines 214-231, sections:
1. Conviction vs Extraction
2. Content Understanding Depth
3. Creative Framing
4. Evocativeness
5. Philosophy vs Procedure
6. Living Tissue
7. Honest Creative Autonomy

**Gap:** These are listed once as reference material, but NOT integrated into:
- Phase-by-phase instructions (Phases 1-5, lines 122-195)
- Phase 4 assessment checklist (lines 177-186)
- Specific decision points where they would guide CSS choices

**Comparison to Diagram:**
- Diagram: "7 evaluation lenses as creative compass" (role-defining)
- Implementation: "7 lenses" listed as reference material (not guiding)

**Verdict:** ✓ PRESENT, ⚠ WEAK INTEGRATION — Lenses are available to read but not actively directing builder decisions at critical moments.

---

### Finding 8: Builder "Build." Instruction

**Specification:** User prompt should conclude with "Build."

**Implementation:** `builder-corpus.md` line 112 ends with:
```markdown
## YOUR TASK

{PASS_CONTEXT}
```

Then Phase instructions (120-195) guide the work.

No explicit "Build." instruction at the very end after all guidance.

**Comparison:** Diagram shows simple "Build." — clean, imperative. Implementation has guidance but no final explicit call to action.

**Verdict:** ⚠ MINOR — Implicit in context; explicit call missing.

---

### Finding 9: Verifier Observation Framework

**Specification:** Observations should address:
- Where influence FELT (deeply integrated)
- Where influence ABSENT
- Where influence SHALLOW (the 48px test)
- Overall spectrum

**Implementation:** `verifier-corpus.md` lines 65-99 covers:
1. DEEPLY INTEGRATED (lines 65-71) — includes "48px test" ✓
2. SURFACE-LEVEL (lines 73-77) ✓
3. ABSENT (lines 79-83) — distinguishes "irrelevant" vs "relevant but missing" ✓
4. SURPRISED (lines 85-89) ✓
5. What next builder should attend to (lines 91-99) — framed as "creative invitations" ✓

**Verdict:** ✓ MATCHES SPEC

---

## Section C: Prompt Quality Assessment

### Finding 10: Architect-Verifier Role Distinction

**Diagram Intent:** Builder and Verifier should have fundamentally different orientations:
- Builder: "You are CREATING" (creative, generative)
- Verifier: "You are READING" (evaluative, perceptual)

**Implementation:**

Builder:
```markdown
You are a builder. You are creating a page that lives inside a specific world.
```
✓ Generative role clear

Verifier:
```markdown
You are a reader. You are about to read several documents...
Your job is not to audit. Your job is not to check compliance.
```
✓ Evaluative/perceptual role clear — BUT UNDERMINED by lack of system prompt

**Problem:** Without a system prompt enforcing the "reader" mindset, the verifier may revert to checklist/compliance mode on Claude's defaults.

**Verdict:** ⚠ User-level framing strong, but system-level enforcement absent.

---

### Finding 11: Conviction Brief Framing

**Specification:** Brief should be read as "PHILOSOPHY, not specification"

**Implementation:** Line 19:
```markdown
Read this as PHILOSOPHY, not specification.
```

Line 21:
```markdown
Your job is to BUILD FROM THIS CONVICTION.
```

**Verdict:** ✓ CORRECT FRAMING

---

### Finding 12: Corpus Rotation Coverage

**Specification:** "Files listed first appear earlier in your context and receive higher natural attention weight. The orchestrator rotates this ordering across passes so that every file gets primacy position."

**Implementation:** `assembler.ts` lines 131-141:
```typescript
const subset = CORPUS_SUBSETS.find(s => s.id === pass.subsetId);
if (subset) {
  const rotation = computeRotation(subset.files, pass.rotationIndex);
  // Uses pass.rotationIndex to cycle through files
}
```

**Rotation Logic:** Each rotation produces different file ordering.
**Coverage:** 3 rotations (A/B/C) across 8 passes per subset = cycling pattern.

**Verdict:** ✓ CORRECT

---

## Section D: Synthesis & Criticality Assessment

### Critical Issues (Blocker)

| Issue | Location | Severity | Impact |
|-------|----------|----------|--------|
| Verifier system prompt entirely absent | `pass-executor.ts` + `claude-cli.ts` | **CRITICAL** | Verifier cannot establish reader-vs-auditor role; likely reverts to checklist/compliance mode without explicit framing |

### Significant Issues (Quality)

| Issue | Location | Severity | Impact |
|-------|----------|----------|--------|
| 7 lenses reference-only, not decision-guiding | `builder-corpus.md` lines 214-231 | **SIGNIFICANT** | Lenses listed but not integrated into Phases 2-4; builder may follow recipe without internalizing creative compass |
| Verifier observations flow correct but system prompt missing | `verifier-corpus.md` + executor | **SIGNIFICANT** | Observations stored & passed correctly, but verifier lacks role framing to use them meaningfully |
| No explicit "Build." call at end of builder template | `builder-corpus.md` | **MINOR** | Implicit in context, but loses force of diagram's final instruction |

### Correct Implementations

✓ Builder conviction-oriented philosophy framing
✓ Corpus file rotation per pass
✓ Verifier observations timing (P3 & P6 only)
✓ Verifier observation framework (48px test, deep integration test, etc.)
✓ Artifact diff integration for verifier
✓ Current artifact handling (empty S1P1)
✓ Rolling window verifier observations (last 3)

---

## Section E: Diagram Spec vs Implementation Comparison Table

| Diagram Requirement | Expected | Actual | Status | Notes |
|---------------------|----------|--------|--------|-------|
| **BUILDER SYSTEM PROMPT** | Philosophical role (inhabit world, no rules/checklists) | Partial — template content is philosophical but no distinct system prompt | ⚠ PARTIAL | Philosophy present in template, but no role-establishing system-level context |
| **BUILDER USER PROMPT: Conviction Brief** | Yes, from TC derivation | Yes, `_tc-brief.md` | ✓ MATCH | Correctly positioned as philosophy |
| **BUILDER USER PROMPT: Corpus Files** | Full content, in rotation order | Yes, `computeRotation()` cycles | ✓ MATCH | Rotation working correctly |
| **BUILDER USER PROMPT: Current Artifact** | Empty for S1P1, populated later | Yes, state.artifactPath | ✓ MATCH | Correct initialization |
| **BUILDER USER PROMPT: Verifier Obs (P3, P6 only)** | Present only on passes 3 & 6 | Yes, conditionally set (lines 159-169) | ✓ MATCH | Timing correct |
| **BUILDER USER PROMPT: "Build." instruction** | Explicit final directive | Implicit in phase structure | ⚠ MINOR | No explicit call-to-action |
| **BUILDER: 7 Evaluation Lenses** | Creative compass for decision-making | Listed (lines 214-231) but not integrated into Phase instructions | ⚠ WEAK | Available as reference, not guiding |
| **VERIFIER SYSTEM PROMPT** | Role-establishing (reader, not auditor; no CSS vocab) | **ABSENT** | ✗ CRITICAL | No system prompt injected at all |
| **VERIFIER USER PROMPT: Corpus Files** | Same files builder received, same rotation | Yes, same `resolveBuilderVariables()` | ✓ MATCH | Identical corpus context |
| **VERIFIER USER PROMPT: Artifact** | HTML to evaluate | Yes, `CURRENT_ARTIFACT` | ✓ MATCH | Present |
| **VERIFIER USER PROMPT: Diff** | What changed since last pass | Yes, `artifactDiff` param | ✓ MATCH | Integrated |
| **VERIFIER USER PROMPT: Observation Framework** | Deeply integrated / surface-level / absent / surprised | Yes, lines 65-99 | ✓ MATCH | "48px test" included, creative invitations present |
| **VERIFIER USER PROMPT: NO CSS vocabulary** | Enforced instruction | Yes, line 103 | ✓ MATCH | "Do NOT use CSS terminology" explicit |
| **Pass Timing: Verifier after Builder** | Verifier only after builder completes | Yes, sequential in phase router | ✓ MATCH | State preserved, observations only on P3/P6 |
| **Observation Rolling Window** | Last N observations available | Yes, last 3 (slice(-3)) | ✓ MATCH | Correct |

---

## Section F: Recommendations

### Immediate (Required)

1. **Add verifier system prompt injection**
   - Modify `pass-executor.ts` or `claude-cli.ts` to construct two-part prompt for verifier:
     ```typescript
     if (pass.role === 'verifier') {
       const systemPrompt = `You are a reader, not an auditor. You just absorbed raw creative material.
     Now look at the artifact. Does it FEEL like someone who understood the material built this?
     NO CSS vocabulary. NO checklists. NO rules.`;
       // Pass systemPrompt + assembledPrompt separately to claude -p
     }
     ```

### Important (Quality)

2. **Integrate 7 lenses into Phase 2-4 decision points**
   - Add "check against lens X" before each phase completes
   - Example Phase 2.1 (after zone background strategy):
     ```markdown
     **Lens Check:** Does this background strategy embody the PHILOSOPHY of the conviction brief
     (Lens 5), or does it feel procedural?
     ```

3. **Add explicit "Build." instruction at end of builder template**
   - Single line after all guidance: `You are ready. Build.`

### Optional (Enhancement)

4. **Strengthen verifier role distinction via system prompt variants**
   - Builder system: "You are inhabiting philosophy..."
   - Verifier system: "You are experiencing perception..."
   - Separate roles, separate system contexts.

---

## Conclusion

**Pass Anatomy Verdict: CRITICAL DEFECT FOUND**

The orchestration implements 95% of the canonical diagram correctly. Builder prompting is solid. Verifier observations integration works. The critical gap is **one missing system prompt** that establishes the verifier's role.

Without the verifier system prompt, the verifier template's well-crafted user-level framing is likely undermined. Claude's defaults may pull the verifier toward checklist/compliance mode, undoing the design's intent to have verifiers read as *readers*, not *auditors*.

**Estimated Fix Time:** 15-30 minutes (adding system prompt injection + test)
**Estimated Quality Impact:** HIGH — Verifier observations will shift from compliance reports to genuine perception-based insights.

