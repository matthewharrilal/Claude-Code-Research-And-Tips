# Gate Runner Preconditions — Text-Based Pre-Build Checks
Date: 2026-02-24
Extracted from: artifact-gate-runner-MONOLITHIC.md
Authority: Council Verdict (2026-02-23)

---

## Purpose

These gates run BETWEEN Phase 1 (brief assembly) and Phase 2 (builder execution). They verify the activation brief before it reaches the builder. Text parsing only -- no Playwright needed.

---

## BV-01: Tier Line Budget
- **Check method:** Text parsing -- split brief by tier headers, count lines per tier section
- **Thresholds:** T1 >= 12, T2 >= 6, T3 >= 40, T4 >= 32, Content Map >= 24
- **Pass:** All tiers at or above 80% of their budget
- **Fail:** Any tier below 80% of budget
- **Action on fail:** Return to Brief Assembler with specific under-budget tiers identified. Max 2 revision cycles.
- **Evidence:** OBSERVED (under-specified tiers correlate with under-built zones)

## BV-02: Background Delta Verification
- **Check method:** Extract all hex pairs from zone background specs, compute: max(|R1-R2|, |G1-G2|, |B1-B2|)
- **Scope note:** This gate checks ALL consecutive hex pairs in the brief text, not just zone backgrounds. Any color pair in the brief should maintain perceptual delta. Errs on the side of strictness.
- **Pass:** All pairs >= 15 RGB delta
- **Fail:** Any pair < 15 RGB delta
- **Action on fail:** Replace failing pair with closest valid pair from value-tables.md
- **Evidence:** PROVEN (Brief Assembler specified delta 16 but actual was 11 in Gas Town -- this gate catches that error before propagation)

## BV-03: Recipe Format Verification
- **Check method:** Count recipe verbs ("Build", "Create", "Derive", "Map", "Read", "Select", "Deploy", "Assess") vs checklist verbs ("Verify", "Fail if", "Must be", "Ensure", "Check that")
- **Pass:** recipe:checklist ratio >= 3:1
- **Fail:** Ratio < 3:1
- **Action on fail:** Return to Brief Assembler with checklist language highlighted for conversion
- **Evidence:** PROVEN (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)

## BV-04: Suppressor Scan
- **Check method:** Regex scan for known quality suppressor patterns:
  - "sample 2-4" (S-01): `/sample\s+\d+-\d+/i`
  - Raw prohibition language outside Tier 1 (S-02): `/must\s+not|shall\s+not|never\s+use/i`
  - Compliance voice in builder-facing sections (S-11): `/verify\s+that|fail\s+if|must\s+be/i`
  - Count-gates (S-08): `/>=?\s*\d+\s+channels?/i`
- **Pass:** Zero suppressor patterns detected in builder-facing content
- **Fail:** Any suppressor pattern found
- **Action on fail:** Return to Brief Assembler with specific patterns highlighted
- **Evidence:** OBSERVED (20 known suppressors, ALL correlate with degradation)

---

## Pre-Build Precondition Gates (GR-23 through GR-28)

These verify pipeline configuration BEFORE the builder starts. Text-based checks on agent config and brief content.

### GR-23: Builder Model = Opus [ADVISORY]
- **Check:** Verify model ID of builder agent is claude-opus-*
- **Evidence:** OBSERVED/CONFOUNDED (council downgraded to STRONG RECOMMENDATION)
- **FAIL produces WARNING, not BLOCK**

### GR-24: Content Has Heterogeneity [ADVISORY]
- **Check:** Phase 0 Content Analyst output must include heterogeneity >= "moderate" and metaphor viability >= "viable"
- **Evidence:** CONFOUNDED (maps to Content Affordance factor)

### GR-25: Suppressor Count = 0 [RECOMMENDED]
- **Check:** Scan activation brief for known suppressor patterns (same regex as BV-04)
- **Evidence:** OBSERVED (20 suppressors, ALL correlate with degradation)

### GR-26: Brief Size Cap [RECOMMENDED]
- **Check:** Total brief < 200 lines AND constraint layer <= 73 lines
- **Evidence:** OBSERVED (Middle success at 100 lines; Flagship failure at 530+ lines)

### GR-27: Builder Does Not Receive Gates [RECOMMENDED]
- **Check:** Scan builder's input for gate-format language ("FAIL if", ">= N channels", "pass/fail threshold")
- **Evidence:** OBSERVED (gate visibility caused threshold gaming in Flagship)

### GR-28: Recipe Format (Not Checklist) [RECOMMENDED]
- **Check:** Scan builder brief for sequenced steps with recipe verbs, world-description voice, dispositional instructions (D-01 through D-09). Flag if compliance voice detected.
- **Evidence:** OBSERVED (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)

---

**Executable code:** See `gate-runner-core.js` functions `runBriefVerification()` (BV-01 through BV-04). GR-23 through GR-28 are text-based checks implemented by the orchestrator during Phase 0-1, not in the Playwright gate runner.

**NOTE (FIX-094):** GR-23 through GR-28 are reclassified as ORCHESTRATOR DECISION RULES per Wave 3. They remain documented here for reference but their operational home is `artifact-orchestrator.md` Section 9.
