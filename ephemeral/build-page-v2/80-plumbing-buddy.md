# WAVE 5: Plumbing Buddy — Adversarial Review

**Reviewer:** Opus agent (Task #80)
**Date:** 2026-02-28
**Reviewing:** `79-plumbing-audit.md` (plumbing compliance deep audit)
**Primary source verified against:** `~/.claude/skills/build-page/SKILL.md` (956 lines), `gate-runner-v2.js` (1,049 lines)

---

## 1. SPOT-CHECK RESULTS

I verified 5 specific line references the audit claims. Results:

### SC-01: A8 reference file reads (audit claims lines 52-58, fail-safe at line 61) -- VERIFIED
SKILL.md lines 52-58 list exactly 7 Read calls [A] through [G]. Line 61 says "IF any Read fails: STOP." Audit is accurate.

### SC-02: Routing matrix (audit claims lines 626-640) -- VERIFIED
SKILL.md lines 625-640 contain the 5-state routing matrix (RETHINK, SHIP+no gates, SHIP+gates, REFINE+no gates, REFINE+gates). The audit correctly describes all 5 branches.

### SC-03: Regression check (audit claims lines 884-888) -- VERIFIED
SKILL.md lines 884-887 specify: compare essential_fail counts, restore backup if post-REFINE has MORE. Line 887: `PRINT "REFINE introduced regressions. Shipping pre-REFINE version."` Exact match.

### SC-04: Weaver verdict extraction (audit claims lines 600-604, "LAST 30 lines") -- VERIFIED
SKILL.md line 600: "Extract the LAST 30 lines of the Weaver file." Lines 602-604: priority RETHINK > SHIP > else REFINE. Accurate.

### SC-05: Essential list in gate-runner-v2.js (audit claims lines 913-918, 16 IDs) -- VERIFIED
Gate-runner-v2.js lines 913-918: 14 REQUIRED + GR-48 + GR-45 = 16 IDs in essentialIds array. The audit's comment "GR-45 included as 'RECOMMENDED but part of essential routing'" matches the code comment at line 917: `// RECOMMENDED but part of essential routing`.

**Spot-Check Summary: 5/5 VERIFIED. Line references are accurate.**

---

## 2. MISSED PLUMBING

### MP-01: GR-62 (Screenshot Quality Gate) — NEVER EXECUTED -- SIGNIFICANT

The audit lists GR-62 in Section 7 (gate count consistency table) and mentions it in passing at C12. But it **completely misses** that GR-62 has no execution step in the SKILL.md.

Evidence:
- SKILL.md line 308: "GR-62 (screenshot quality) is checked by the orchestrator separately via file inspection."
- SKILL.md line 318: "2 ORCHESTRATOR-ONLY: GR-62 (screenshot quality — file inspection), BV-01 through BV-04"
- gate-runner-v2.js lines 1010-1041: `checkScreenshotQuality()` function exists with full implementation (blank threshold 5000 bytes, max consecutive blanks check, blank ratio check)
- **BUT**: No step in SKILL.md says "call checkScreenshotQuality" or "run GR-62"

The audit's Step 2.8 (D4, file size validation at lines 238-243) catches blank screenshots with a STOP, which partially overlaps GR-62's purpose. But GR-62 is more sophisticated — it checks blank RATIO (<= 20%) and consecutive blanks (<= 2), not just "any blank = STOP".

The SKILL.md's Step 2.8 is a blunter instrument that would STOP on ANY blank screenshot, while GR-62 would PASS if only 1 of 10 screenshots is blank. These are different behaviors. The audit missed this discrepancy.

**Impact:** GR-62 exists in the codebase but is dead code from the orchestrator's perspective. The 5000-byte check at Step 2.8 is arguably MORE conservative (stop on any blank) so the system is safe. But the "30 total" gate count is wrong — it's actually 29 executed (25 browser + 4 BV) with GR-62 orphaned.

### MP-02: Step 9 (Second REFINE) plumbing is UNSPECIFIED -- LOW

The audit covers Steps 0-8 exhaustively but completely ignores Step 9 (lines 909-920). Step 9 says:
- "Re-run abbreviated PA (5 auditors, new screenshots)"
- "Spawn THIRD Opus builder with both reflections + user direction"
- "Maximum 2 REFINE cycles total"

But it provides NO plumbing detail:
- Does Step 9 re-serve the HTML? (Server was killed at 8.5)
- Does it re-run gates?
- Does it create another backup?
- What happens if the third builder produces malformed HTML?
- Does it run the regression check?

The audit saying "39 plumbing steps, all implemented" is overclaiming — Step 9's plumbing is a stub, not a specification. There are at least 6-8 implicit plumbing steps hidden in Step 9's 7 lines.

**Mitigation:** Step 9 is USER-ESCALATION-ONLY and explicitly framed as non-automatic. The orchestrator would presumably re-apply the Step 2-8 pattern. But the audit should have flagged this as underspecified.

### MP-03: Step 8.1 screenshot overwrite -- MINOR

The audit lists Step 8.1 (line 877: "Recapture screenshots, same protocol as Step 2.3, overwrite existing") but doesn't note that this **destroys** the initial screenshots. If the REFINE introduces regressions and the backup is restored (Step 8.3b), the final shipped HTML will be the pre-REFINE version BUT the screenshots on disk will be from the post-REFINE attempt. The PA reports (written against initial screenshots) would still be valid, but any post-ship review of screenshots would see the wrong version.

**Impact:** Non-blocking for the pipeline. Potentially confusing for post-ship analysis. The audit should have noted this asymmetry.

### MP-04: Weaver screenshot subset -- MINOR

The Weaver prompt template (lines 539-540) says `{1440px screenshot paths}` — only 1440px, NOT 768px. But auditors received BOTH viewports (line 460-462). The audit's cross-reference in Section 6 says "Both [gates and PA] depend on screenshots (Step 2) which completes first" but doesn't catch that the Weaver gets a SUBSET of screenshots.

**Impact:** This is likely intentional (Weaver synthesizes, doesn't need responsive detail), but the audit claims completeness and didn't note this difference.

---

## 3. CHALLENGED CLAIMS

### CC-01: "39 plumbing steps, all implemented" -- OVERCLAIM

The audit counts 18+4+12+5+5 = 44 in tables (A1-A18, B1-B4, C1-C12, D1-D6, E1-E5), but claims "39 plumbing steps" in Section 4. The mismatch suggests the 39/9 split was imposed on a different breakdown than the table enumeration. The tables show 44 items, not 39. The audit needs to reconcile these numbers.

Furthermore, D6 (DPR handling) is listed as "Not in SKILL.md steps" with "N/A" across all columns. If it's not in the SKILL.md, it shouldn't be counted as an implemented step. And Step 9 has ~6-8 implicit steps not counted.

**Verdict: The exact step count is unreliable, though the coverage is genuinely thorough.**

### CC-02: "Zero quality judgments by orchestrator" -- MOSTLY CORRECT, ONE EDGE

The audit's FL-05 correctly identifies that the Weaver verdict is freedom-scoped. However, there is one edge case not addressed: the fallback keyword scan (E3, lines 606-621). Counting instances of "flat", "monotonous", etc. across auditor reports IS a quality judgment, just mechanized. If 3 auditors use "flat" descriptively (e.g., "the flat Kansas landscape") and 2 use "alive", the system would route to REFINE based on a false positive.

This is a known weakness the audit flagged as P-08 ("finite word lists") but classified it as "LOW" risk with "safe default covers this." That's fair — the safe default IS correct. But the audit's headline claim "Zero quality judgments by orchestrator" should note this exception.

### CC-03: "24 failure modes documented" -- CORRECT BUT INCOMPLETE

The fail-safe table at Section 3 lists 22 rows (not 24 as the summary claims — I counted). But more importantly, it misses:

1. **Disk full during any Write** — Write to `_gate-results.json`, `_routing-log.md`, etc. could fail silently
2. **Content file changes between Read and Build** — the orchestrator reads at Step 0.2 and copies at Step 0.5, but the original file could be modified between Steps 0 and 1 (race condition, extremely unlikely)
3. **Gate runner infinite loop** — the JS function never throws (by design), but could hang indefinitely on pathological HTML (e.g., 10,000 nested elements). No timeout specified in the browser_evaluate call.

These are low-probability but the audit claims completeness.

### CC-04: "77% fully deterministic" -- FAIR

The 30/39 ratio is reasonable. I agree with the 9 LLM-dependent steps identified. The claim is honest.

---

## 4. VERDICT

### AGREE — with 2 amendments

The plumbing audit is **thorough, well-structured, and fundamentally correct**. Its verdict of "PLUMBING IS SOUND" is earned. The system is defensively designed with layered verification, safe defaults, and complete routing coverage.

**However, the audit has 2 gaps that should be documented:**

1. **GR-62 is orphaned** (MP-01): The gate exists in code, is referenced in SKILL.md's gate inventory, but has no execution step. This makes the "30 total" count inaccurate (actually 29 executed + 1 dead code). The Step 2.8 blank check covers the safety need but with different behavior (STOP-on-any vs ratio-based). This should be acknowledged as either (a) intentional simplification or (b) a gap to fix.

2. **Step 9 plumbing is a stub** (MP-02): The audit claims "all steps implemented" but Step 9 has no plumbing specification. Since Step 9 is user-escalation-only, this is low priority, but the claim of completeness is overstated.

Neither gap is blocking. The audit's core finding — that the plumbing/freedom boundary is clean, the routing matrix is complete, and the fail-safes are layered — is correct and well-evidenced.

**Confidence:** HIGH that the system will execute correctly. The plumbing is sound. The orphaned GR-62 and stub Step 9 are documentation gaps, not execution risks.
