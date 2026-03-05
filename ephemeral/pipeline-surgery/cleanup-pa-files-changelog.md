# PA Files Cleanup Changelog
Date: 2026-02-25
Agent: pa-fixer (Task #4)

---

## Files Modified
- `ephemeral/va-extraction/pa-guardrails.md` (auditor-facing, trimmed)
- `ephemeral/va-extraction/pa-deployment.md`
- `ephemeral/va-extraction/pa-weaver.md`

## Files Created
- `ephemeral/va-extraction/pa-guardrails-weaver.md` (weaver/orchestrator-only)

---

## Changes Applied

### 1. Split pa-guardrails.md (Fixes Finding 11, M-2, M-3)

**Rationale:** Sections 5-9 leaked pipeline vocabulary (tiers, channels, mechanisms, anti-patterns, S-09 thresholds) to fresh-eyes auditors, directly contradicting the fresh-eyes principle (Section 11/now Section 6). Identified in adversarial audit Finding 11 and fresh-eyes audit M-2/M-3.

**What moved to pa-guardrails-weaver.md:**
- Section 5 (Tier 1 Equivalent Questions) -> new Section 1
- Section 6 (Tier 5 Provisional Scoring Note) -> new Section 2
- Section 7 (PA-Assessed Anti-Patterns, full table) -> new Section 3
- Section 8 (Revision Degradation Warnings) -> new Section 4
- Section 9 (S-09 Stacking Check) -> new Section 5

**What stayed in pa-guardrails.md (auditor-facing):**
- Section 1 (Evidence Format) - unchanged
- Section 2 (Completion Manifest) - unchanged
- Section 3 (Assessment Language) - unchanged
- Section 4 (PA-05 Cross-Validation) - unchanged
- Section 10 -> renumbered to Section 5 (Cross-Viewport Comparison Method)
- Section 11 -> renumbered to Section 6 (Fresh-Eyes Principle)

**Header updated** to describe the split and reference pa-guardrails-weaver.md.

### 2. pa-deployment.md Section 2.4/2.5 Reordering (Fix positional primacy)

**Rationale:** The experiential pass must be the FIRST operational step in the auditor workflow, not an afterthought after analytical instructions.

**Change:** Added "Experiential Pass (Section 0)" as Step 2 in the Section 2.4 workflow, pushing Cold Look Protocol, Zone Sweep, and question answering to Steps 3-7. The experiential pass now has positional primacy in BOTH Section 0 (the directive itself) and Section 2.4 (the workflow sequence).

### 3. Removed Relocation Notices (M-1)

**Rationale:** Fresh readers don't need edit history. These were editorial scaffolding from restructuring.

**Removed:**
- pa-deployment.md Section 2.5 "RELOCATED: moved to Section 0" notice (entire section removed since it was only a relocation pointer)
- pa-weaver.md Section 4.5 "RELOCATED: moved to Section 0.3" notice

### 4. Revision Degradation Warnings Removed from Auditor Guardrails (M-3)

Handled by the split in change #1. Section 8 (5-row degradation table) now lives exclusively in pa-guardrails-weaver.md Section 4. Auditors no longer see degradation pattern vocabulary.

### 5. Anti-Pattern Table Trimmed from Auditor Guardrails (M-2)

Handled by the split in change #1. The full 8-row anti-pattern table (with pipeline vocabulary like "channel isolation," "metaphor bleed," "component orphan") now lives exclusively in pa-guardrails-weaver.md Section 3. Auditors no longer see pipeline-internal concept names.

### 6. pa-weaver.md Section 5.0 Renumbered (M-5)

**Rationale:** Section 5.0 "Priority Override Rule" appeared between Section 4.5 and Section 5, creating a numbering collision.

**Change:** Renumbered Section 5.0 to Section 4.5 (the old Section 4.5 relocation notice was removed, freeing the number).

### 7. Priority Override Added to pa-deployment.md (Fix 7)

**Rationale:** The priority override ("comprehension failures outrank ALL property measurement findings") was only in pa-weaver.md. Auditors need it too.

**Change:** Added new Section 4 "PRIORITY OVERRIDE" to pa-deployment.md with the rule: "Comprehension failures (illegible text, unusable navigation) outrank ALL property measurement findings."

### 8. Cross-Viewport Method Deduped (M-7)

**Rationale:** pa-deployment.md Section 1.2.1 had a cross-viewport comparison method AND pa-guardrails.md Section 10 (now Section 5) had a version. The deployment copy serves no purpose for the orchestrator -- auditors need it, and they get it from guardrails.

**Change:** Removed Section 1.2.1 from pa-deployment.md. The cross-viewport method remains in pa-guardrails.md Section 5.

### 9. SHIP WITH FIXES Cap Consistency (Fix 9)

**Verified:** pa-weaver.md Section 5.1.1 clearly documents "<=3 MECHANICAL fixes" cap. No change needed -- already documented clearly.

---

## Audit References
- Finding 11 (02-adversarial-audit.md): pa-guardrails.md Sections 5-9 leak pipeline vocabulary
- Finding 02 (02-adversarial-audit.md): Fresh-eyes contradicted by circuit breaker (related context)
- Finding 04 (02-adversarial-audit.md): Specialty label primes analytical mode (related context)
- M-1 (03-fresh-eyes-coherence.md): Relocation notices add noise
- M-2 (03-fresh-eyes-coherence.md): Anti-pattern table duplicated identically
- M-3 (03-fresh-eyes-coherence.md): Revision degradation warnings in guardrails
- M-5 (03-fresh-eyes-coherence.md): Section 5.0/5 numbering collision
- M-7 (03-fresh-eyes-coherence.md): Cross-viewport method duplicated
