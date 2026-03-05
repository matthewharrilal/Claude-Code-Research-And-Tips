# C-02: REFINE Screenshot Parity — Implementation Report

**Date:** 2026-02-25
**Agent:** c02-screenshots (Opus)
**Status:** COMPLETE

---

## Problem

When the orchestrator's REFINE protocol says "Return to Phase 3 for re-audit" (step 5), there was no explicit instruction requiring screenshot re-capture at the same viewports. The pa-deployment.md screenshot protocol (Section 2) only describes initial capture. Without parity, REFINE PA auditors might receive screenshots at different viewports, different scroll positions, or — worse — reuse stale initial-round screenshots, making apples-to-apples PA-05 trajectory comparison impossible.

## What Was Done

**1 edit to 1 file:**

**File:** `ephemeral/va-extraction/artifact-orchestrator.md`
**Location:** After the "Post-REFINE Gate Re-Run" paragraph (line ~574), before the REBUILD section.
**Change:** Added 1 paragraph (3 sentences):

```
**Post-REFINE Screenshot Re-Capture:** Before deploying REFINE PA auditors, re-capture ALL
screenshots using the SAME viewport list (1440px, 1024px, 768px), the SAME capture sequence
(Section 2 of pa-deployment.md), and the SAME validation gate. Save REFINE screenshots with
`-refine` suffix (e.g., `screenshots/1440/cold-look-refine.png`,
`screenshots/1440/scroll-01-refine.png`). DO NOT overwrite initial screenshots — they are
the comparison baseline for PA-05 trajectory analysis.
```

## Design Decisions

1. **Placed in orchestrator, not pa-deployment.md** — The REFINE protocol lives in the orchestrator. Adding screenshot parity here keeps the instruction co-located with the REFINE flow sequence (mechanical sweep -> gate re-run -> screenshot re-capture -> PA deployment). pa-deployment.md defines HOW to capture; the orchestrator defines WHEN.

2. **`-refine` suffix aligns with FIX-07** — The convergence autopsy (FIX-07) established `-refine` as the iteration suffix for Phase 3 artifacts (`p3b-pa-auditor-A-refine.md`, etc.). This applies the same pattern to screenshots, so all REFINE artifacts share one naming convention.

3. **Explicit "DO NOT overwrite" directive** — Without this, the natural behavior is to write to the same filenames. The initial screenshots are the comparison baseline — overwriting them destroys the ability to measure PA-05 trajectory (did REFINE actually improve the page?).

4. **Cross-references pa-deployment.md Section 2** — Rather than duplicating the viewport list and capture sequence, the edit points to the existing protocol. This avoids spec drift if the capture protocol is updated later.

## Verification

- The REFINE protocol now has an unbroken sequence: mechanical sweep -> gate re-run -> screenshot re-capture -> PA deployment
- Screenshot naming (`-refine` suffix) is consistent with FIX-07 artifact naming
- Initial screenshots are preserved as comparison baseline
- No changes to pa-deployment.md were needed (it already defines the capture protocol; this just says "repeat it")

## Files Modified

| File | Lines Added | Lines Removed |
|------|-------------|---------------|
| `ephemeral/va-extraction/artifact-orchestrator.md` | 2 | 0 |
| **Total** | **2** | **0** |
